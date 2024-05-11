package com.frankie.app.ui.survey

import android.annotation.SuppressLint
import android.app.Activity
import android.content.Context
import android.util.Base64
import android.util.Log
import android.webkit.WebSettings
import android.webkit.WebView
import android.webkit.WebViewClient
import com.fasterxml.jackson.annotation.JsonProperty
import com.fasterxml.jackson.databind.node.ObjectNode
import com.frankie.app.business.settings.SharedPrefsManagerImpl
import com.frankie.app.business.survey.SurveyData
import com.frankie.app.db.FrankieDb
import com.frankie.app.db.model.Response
import com.frankie.app.db.model.Response.Companion.STORED_FILENAME_KEY
import com.frankie.app.ui.common.FileUtils
import com.frankie.expressionmanager.ext.ScriptUtils
import com.frankie.expressionmanager.ext.labels
import com.frankie.expressionmanager.model.ColumnName
import com.frankie.expressionmanager.model.Dependency
import com.frankie.expressionmanager.model.NavigationDirection
import com.frankie.expressionmanager.model.NavigationIndex
import com.frankie.expressionmanager.model.NavigationInfo
import com.frankie.expressionmanager.model.NavigationUseCaseInput
import com.frankie.expressionmanager.model.ReservedCode
import com.frankie.expressionmanager.model.ResponseEvent
import com.frankie.expressionmanager.model.SurveyLang
import com.frankie.expressionmanager.model.SurveyMode
import com.frankie.expressionmanager.usecase.MaskedValuesUseCase
import com.frankie.expressionmanager.usecase.NavigationJsonOutput
import com.frankie.expressionmanager.usecase.NavigationUseCaseWrapperImpl
import com.frankie.expressionmanager.usecase.ScriptEngine
import com.frankie.expressionmanager.usecase.ValidationJsonOutput
import com.frankie.expressionmanager.usecase.additionalLang
import com.frankie.expressionmanager.usecase.availableLangByCode
import com.frankie.expressionmanager.usecase.defaultLang
import com.frankie.expressionmanager.usecase.defaultSurveyLang
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.launch
import kotlinx.coroutines.runBlocking
import java.io.InputStream
import java.net.URLConnection
import java.time.LocalDateTime
import java.time.ZoneOffset
import java.util.*
import kotlin.concurrent.thread
import kotlin.coroutines.resume
import kotlin.coroutines.suspendCoroutine

@SuppressLint("SetJavaScriptEnabled")
class EMNavProcessor(
    activityContext: Context,
    private val survey: SurveyData,
    onScriptLoaded: () -> Unit
) {
    private val webView = WebView(activityContext)
    private var responseId: UUID? = null
    private val frankieDb = FrankieDb.getDatabase(activityContext)

    private fun getActivity(): Activity = webView.context as Activity

    private var scriptLoaded = false

    init {
        webView.clearCache(true)
        webView.settings.javaScriptEnabled = true
        webView.settings.mixedContentMode = WebSettings.MIXED_CONTENT_ALWAYS_ALLOW
        webView.settings.domStorageEnabled = true
        webView.webViewClient = object : WebViewClient() {
            override fun onPageFinished(view: WebView?, url: String?) {
                super.onPageFinished(view, url)
                if (!scriptLoaded) {
                    scriptLoaded = true
                    onScriptLoaded()
                }
            }
        }
        loadJavaScript(ScriptUtils().engineScript)
    }

    private fun loadJavaScript(input: String) {
        val javascript = "<script>console.log(window.navigator.userAgent)\n$input</script>"
        val data = javascript.toByteArray(charset("UTF-8"))
        val base64 = Base64.encodeToString(data, Base64.DEFAULT)
        webView.loadUrl("data:text/html;charset=utf-8;base64,$base64")
    }

    fun start(
        navListener: NavigationListener
    ) {
        val navigationUseCaseInput = NavigationUseCaseInput(
            navigationInfo = NavigationInfo(
                navigationDirection = NavigationDirection.Start,
                navigationIndex = null
            ),
        )
        navigationUseCase(
            navigationUseCaseInput,
            onSuccess = { navigationJsonOutput, lang, additionalLang ->
                responseId = UUID.randomUUID()
                saveResponse(
                    navigationJsonOutput.survey.defaultLang(),
                    navigationJsonOutput
                )
                val result = navigationJsonOutput
                    .with(
                        responseId = responseId!!,
                        lang = lang,
                        additionalLang = additionalLang,
                        saveTimings = survey.saveTimings
                    )
                navListener.onSuccess(result)
            }
        ) { navListener.onError(it) }
    }

    fun navigate(
        useCaseInput: NavigateRequest,
        navListener: NavigationListener
    ) {
        var response: Response
        responseId = useCaseInput.responseId!!
        runBlocking {
            response = frankieDb.responseDao().get(responseId.toString())
        }
        val lang = useCaseInput.lang ?: response.lang
        val navigationUseCaseInput = NavigationUseCaseInput(
            values = response.values.toMutableMap().apply {
                putAll(useCaseInput.values)
            },
            navigationInfo = NavigationInfo(
                navigationDirection = useCaseInput.navigationDirection!!,
                navigationIndex = response.navigationIndex
            ),
            lang = lang
        )
        navigationUseCase(
            navigationUseCaseInput,
            onSuccess = { navigationJsonOutput, language, additionalLang ->
                val result = navigationJsonOutput
                    .with(
                        responseId = responseId!!,
                        lang = language,
                        additionalLang = additionalLang,
                        saveTimings = survey.saveTimings
                    )
                updateResponse(response, language.code, navigationJsonOutput, useCaseInput.events)
                navListener.onSuccess(result)
            }
        ) { navListener.onError(it) }
    }

    suspend fun maskedValues(
        values: List<Response>,
    ): List<Response> {
        val validationJsonOutput = FileUtils.getValidationJson(getActivity(), survey.id)!!
        val schema = validationJsonOutput.schema.filter { it.columnName == ColumnName.VALUE }.map {
            it.componentCode
        }
        val labels =
            validationJsonOutput.survey.labels("", validationJsonOutput.survey.defaultLang())
        return values.map { response ->
            val newValues = mutableMapOf<String, String>()
            val oldValues = response.values
            val maskedValues = maskedValuesUseCase(
                response.values,
                validationJsonOutput
            )
            schema.forEach { column ->
                val key = "$column.value"
                oldValues[key]?.let { value ->
                    val newKey = labels[column]?.stripHTMLTags() ?: column
                    val newValue =
                        maskedValues[Dependency(column, ReservedCode.MaskedValue)]?.toString()
                            ?: value
                                .toString()
                    newValues[newKey] = newValue
                }
            }

            response.copy(values = newValues)
        }
    }

    private fun String.stripHTMLTags(): String {
        return replace(Regex("<.*?>"), "")
    }

    private suspend fun maskedValuesUseCase(
        values: Map<String, Any>,
        validationJsonOutput: ValidationJsonOutput,
    ): Map<Dependency, Any> {

        return suspendCoroutine { continuation ->
            val navigationUseCaseWrapperImpl = MaskedValuesUseCase(
                object : ScriptEngine {
                    override fun executeScript(method: String, script: String): String {
                        throw IllegalStateException("Should not resort to Script engine")
                    }
                },
                validationJsonOutput = validationJsonOutput,
                useCaseInput = NavigationUseCaseInput(
                    values
                ),
            )
            val script = navigationUseCaseWrapperImpl.getNavigationScript()
            try {
                (webView.context as Activity).runOnUiThread {
                    webView.evaluateJavascript("JSON.parse(navigate($script))") { value ->
                        thread {
                            continuation.resume(
                                navigationUseCaseWrapperImpl.processNavigationResult(value)
                            )
                        }
                    }
                }
            } catch (e: Exception) {
                e.printStackTrace()
            }
        }
    }


    private fun navigationUseCase(
        navigationUseCaseInput: NavigationUseCaseInput,
        onSuccess: (NavigationJsonOutput, SurveyLang, List<SurveyLang>) -> Unit,
        onError: (Throwable) -> Unit
    ) {
        val validationJsonOutput = FileUtils.getValidationJson(getActivity(), survey.id)!!
        val lang = validationJsonOutput.survey.availableLangByCode(navigationUseCaseInput.lang)
        val additionalLang =
            mutableListOf(validationJsonOutput.survey.defaultSurveyLang()).apply {
                addAll(
                    validationJsonOutput.survey.additionalLang()
                )
            }.filter {
                it.code != lang.code
            }
        val navigationUseCaseWrapperImpl = NavigationUseCaseWrapperImpl(
            object : ScriptEngine {
                override fun executeScript(method: String, script: String): String {
                    throw IllegalStateException("Should not resort to Script engine")
                }
            },
            validationJsonOutput = validationJsonOutput,
            useCaseInput = navigationUseCaseInput,
            skipInvalid = validationJsonOutput.surveyNavigationData().skipInvalid,
            surveyMode = SurveyMode.OFFLINE
        )
        val script = navigationUseCaseWrapperImpl.getNavigationScript()
        (webView.context as Activity).runOnUiThread {
            webView.evaluateJavascript("JSON.parse(navigate($script))") { value ->
                thread {
                    try {
                        onSuccess(
                            navigationUseCaseWrapperImpl.processNavigationResult(value!!),
                            lang, additionalLang
                        )
                    } catch (e: Exception) {
                        onError(e)
                    }
                }
            }
        }
    }

    private fun saveResponse(
        surveyLang: String,
        result: NavigationJsonOutput
    ) {
        CoroutineScope(Dispatchers.IO).launch {
            val userId = SharedPrefsManagerImpl(getActivity()).userId!!
            frankieDb.responseDao().insert(
                Response(
                    id = responseId.toString(),
                    navigationIndex = result.navigationIndex,
                    lang = surveyLang,
                    surveyId = survey.id,
                    version = survey.publishInfo.version,
                    startDate = LocalDateTime.now(ZoneOffset.UTC),
                    submitDate = null,
                    isSynced = false,
                    userId = userId,
                    values = result.toSave,
                    events = if (survey.saveTimings) listOf(result.event) else emptyList()
                )
            )
        }
    }

    private fun updateResponse(
        response: Response,
        surveyLang: String,
        result: NavigationJsonOutput,
        events: List<ResponseEvent.Value>
    ) {
        CoroutineScope(Dispatchers.IO).launch {
            frankieDb.responseDao().update(
                values = response.values.toMutableMap().apply {
                    putAll(result.toSave)
                },
                id = response.id,
                navigationIndex = result.navigationIndex,
                startDate = response.startDate,
                submitDate = if (result.navigationIndex is NavigationIndex.End)
                    LocalDateTime.now(ZoneOffset.UTC)
                else response.submitDate,
                lang = surveyLang,
                events = response.events.toMutableList().apply {
                    if (survey.saveTimings) {
                        addAll(events)
                        add(result.event)
                    }
                }

            )
        }
    }

    fun uploadDataUrl(
        key: String,
        dataUrl: String,
        fileName: String
    ): ResponseUploadFile {
        val uuid = UUID.randomUUID()
        val responseFile = FileUtils.getResponseFile(
            context = getActivity(),
            fileName = uuid.toString(),
            surveyId = survey.id
        )
        val str = dataUrl.substring(dataUrl.indexOf(",") + 1)
        val imageData: ByteArray = Base64.decode(str, Base64.NO_WRAP)
        responseFile.writeBytes(imageData)
        return saveFileResponse(
            fileName = fileName,
            uuid = uuid,
            key = key,
            fileSize = responseFile.length()
        )
    }

    fun uploadFile(
        key: String,
        fileName: String,
        inputStream: InputStream
    ): ResponseUploadFile {
        val uuid = UUID.randomUUID()
        val responseFile = FileUtils.getResponseFile(
            context = getActivity(),
            fileName = uuid.toString(),
            surveyId = survey.id
        )
        responseFile.writeBytes(inputStream.readBytes())
        return saveFileResponse(
            fileName = fileName,
            uuid = uuid,
            key = key,
            fileSize = responseFile.length()
        )
    }

    fun uploadFile(
        key: String,
        fileName: String,
        byteArray: ByteArray
    ): ResponseUploadFile {
        val uuid = UUID.randomUUID()
        val responseFile = FileUtils.getResponseFile(
            context = getActivity(),
            fileName = uuid.toString(),
            surveyId = survey.id
        )
        responseFile.writeBytes(byteArray)
        return saveFileResponse(
            fileName = fileName,
            uuid = uuid,
            key = key,
            fileSize = responseFile.length()
        )
    }

    fun saveFileResponse(
        fileName: String,
        uuid: UUID,
        key: String,
        fileSize: Long
    ): ResponseUploadFile {
        var response: Response
        runBlocking {
            response = frankieDb.responseDao().get(responseId.toString())
        }
        val responseUploadFile = ResponseUploadFile(
            filename = fileName,
            storedFilename = uuid.toString(),
            size = fileSize,
            type = URLConnection.guessContentTypeFromName(fileName)
        )
        val newValues = response.values.toMutableMap().apply {
            put("$key.value", responseUploadFile)
        }
        CoroutineScope(Dispatchers.IO).launch {
            (response.values["$key.value"] as? Map<*, *>)?.get(STORED_FILENAME_KEY)?.let {
                val file = FileUtils.getResponseFile(getActivity(), it.toString(), survey.id)
                if (file.exists()) {
                    Log.d(TAG, "deleting old file: $it")
                    file.delete()
                }
            }
            frankieDb.responseDao().update(
                values = newValues,
                id = response.id,
                startDate = response.startDate,
                submitDate = response.submitDate,
                navigationIndex = response.navigationIndex,
                lang = response.lang,
                events = response.events

            )
        }
        return responseUploadFile
    }

    fun destroy() {
        webView.destroy()
    }

    companion object {
        private const val TAG = "EMNavProcessor"
    }

}

data class ResponseUploadFile(
    val filename: String,
    @JsonProperty("stored_filename")
    val storedFilename: String,
    val size: Long,
    val type: String
)

interface NavigationListener {
    fun onSuccess(apiNavigationOutput: ApiNavigationOutput)
    fun onError(error: Throwable)
}

fun NavigationJsonOutput.with(
    responseId: UUID,
    lang: SurveyLang,
    additionalLang: List<SurveyLang>,
    saveTimings: Boolean
)
        : ApiNavigationOutput {
    return ApiNavigationOutput(
        survey,
        state,
        navigationIndex,
        responseId,
        lang,
        additionalLang,
        saveTimings
    )
}

data class ApiNavigationOutput(
    val survey: ObjectNode,
    val state: ObjectNode,
    val navigationIndex: NavigationIndex,
    val responseId: UUID,
    val lang: SurveyLang,
    val additionalLang: List<SurveyLang>?,
    val saveTimings: Boolean
)
