package com.frankie.app.ui.survey

import android.annotation.SuppressLint
import android.app.Activity
import android.content.Context
import android.util.Base64
import android.util.Log
import android.webkit.*
import com.fasterxml.jackson.annotation.JsonProperty
import com.fasterxml.jackson.databind.node.ObjectNode
import com.frankie.app.business.settings.SharedPrefsManagerImpl
import com.frankie.app.business.survey.SurveyData
import com.frankie.app.db.FrankieDb
import com.frankie.app.db.model.Response
import com.frankie.app.ui.common.FileUtils
import com.frankie.expressionmanager.ext.ScriptUtils
import com.frankie.expressionmanager.model.*
import com.frankie.expressionmanager.usecase.*
import kotlinx.coroutines.*
import java.io.InputStream
import java.time.LocalDateTime
import java.time.ZoneOffset
import java.util.*

@SuppressLint("SetJavaScriptEnabled")
class EMNavProcessor constructor(
    activityContext: Context,
    val survey: SurveyData
) {
    private val webView = WebView(activityContext)
    private var responseId: UUID? = null
    private val frankieDb = FrankieDb.getDatabase(activityContext)

    private fun getActivity(): Activity = webView.context as Activity

    init {
        webView.clearCache(true)
        webView.settings.javaScriptEnabled = true
        webView.settings.mixedContentMode = WebSettings.MIXED_CONTENT_ALWAYS_ALLOW
        webView.settings.domStorageEnabled = true
        loadJavaScript(ScriptUtils().engineScript)
    }

    private fun loadJavaScript(input: String) {
        val javascript = "<script>console.log(window.navigator.userAgent)\n$input</script>"
        val data = javascript.toByteArray(charset("UTF-8"))
        val base64 = Base64.encodeToString(data, Base64.DEFAULT)
        webView.loadUrl("data:text/html;charset=utf-8;base64,$base64")

    }

    fun start(
        navListener: NavigationListener,
        navigationMode: NavigationMode
    ) {
        val navigationUseCaseInput = NavigationUseCaseInput(
            navigationInfo = NavigationInfo(
                navigationDirection = NavigationDirection.Start,
                navigationMode = navigationMode,
                navigationIndex = null
            ),
            defaultLang = survey.defaultLanguage.toSurveyLang(),
            lang = survey.defaultLanguage.toSurveyLang(),
        )
        navigationUseCase(
            navigationUseCaseInput,
            onSuccess = { navigationJsonOutput ->
                responseId = UUID.randomUUID()
                saveResponse(
                    survey.defaultLanguage.toSurveyLang(),
                    navigationJsonOutput
                )
                val result = navigationJsonOutput
                    .with(
                        responseId = responseId!!,
                        lang = survey.defaultLanguage.toSurveyLang(),
                        additionalLang = survey.additionalLanguages.map { it.toSurveyLang() },
                        navProps = survey.toNavProps()
                    )
                navListener.onSuccess(result)
            }
        ) { navListener.onError(it) }
    }

    fun navigate(
        useCaseInput: NavigateRequest,
        navListener: NavigationListener,
        navigationMode: NavigationMode
    ) {
        var response: Response
        responseId = useCaseInput.responseId!!
        runBlocking {
            response = frankieDb.responseDao().get(responseId.toString())
        }
        val lang = useCaseInput.lang?.toSurveyLang() ?: response.lang
        val navigationUseCaseInput = NavigationUseCaseInput(
            values = response.values.toMutableMap().apply {
                putAll(useCaseInput.values)
            },
            navigationInfo = NavigationInfo(
                navigationDirection = useCaseInput.navigationDirection!!,
                navigationMode = navigationMode,
                navigationIndex = response.navigationIndex
            ),
            defaultLang = survey.defaultLanguage.toSurveyLang(),
            lang = lang,
        )
        navigationUseCase(
            navigationUseCaseInput,
            onSuccess = { navigationJsonOutput ->
                val result = navigationJsonOutput
                    .with(
                        responseId = responseId!!,
                        lang = lang,
                        additionalLang = survey.allLang.toMutableList().apply { remove(lang) },
                        navProps = survey.toNavProps()
                    )
                updateResponse(response, lang, navigationJsonOutput, useCaseInput.events)
                navListener.onSuccess(result)
            }
        ) { navListener.onError(it) }
    }

    private fun navigationUseCase(
        navigationUseCaseInput: NavigationUseCaseInput,
        onSuccess: (NavigationJsonOutput) -> Unit,
        onError: (Throwable) -> Unit
    ) {
        val navigationUseCaseWrapperImpl = NavigationUseCaseWrapperImpl(
            object : ScriptEngine {
                override fun executeScript(method: String, script: String): String {
                    throw java.lang.IllegalStateException("Should not resort to Script engine")
                }
            },
            validationJsonOutput = FileUtils.getValidationJson(getActivity(), survey.id)!!,
            skipInvalid = survey.skipInvalid,
            useCaseInput = navigationUseCaseInput
        )
        val script = navigationUseCaseWrapperImpl.getNavigationScript()
        (webView.context as Activity).runOnUiThread {
            webView.evaluateJavascript("JSON.parse(navigate($script))") { value ->
                value?.let {
                    try {
                        onSuccess(
                            navigationUseCaseWrapperImpl.processNavigationResult(
                                value
                            )
                        )
                    } catch (e: Exception) {
                        onError(e)
                    }
                }
            }
        }
    }

    private fun saveResponse(
        surveyLang: SurveyLang,
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
                    startDate = LocalDateTime.now(ZoneOffset.UTC),
                    submitDate = null,
                    userId = userId,
                    values = mapOf(),
                    events = if (survey.saveTimings) listOf(result.event) else emptyList()
                )
            )
        }
    }

    private fun updateResponse(
        response: Response,
        surveyLang: SurveyLang,
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
            size = fileSize
        )
        val newValues = response.values.toMutableMap().apply {
            put("$key.value", responseUploadFile)
        }
        CoroutineScope(Dispatchers.IO).launch {
            (response.values["$key.value"] as? Map<*, *>)?.get("stored_filename")?.let {
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

    companion object {
        private const val TAG = "EMNavProcessor"
    }

}

data class ResponseUploadFile(
    val filename: String,
    @JsonProperty("stored_filename")
    val storedFilename: String,
    val size: Long
)

interface NavigationListener {
    fun onSuccess(apiNavigationOutput: ApiNavigationOutput)
    fun onError(error: Throwable)
}

fun NavigationJsonOutput.with(
    responseId: UUID,
    lang: SurveyLang,
    additionalLang: List<SurveyLang>,
    navProps: NavProps
)
          : ApiNavigationOutput {
    return ApiNavigationOutput(
        survey,
        state,
        navigationIndex,
        responseId,
        lang,
        additionalLang,
        navProps
    )
}

data class ApiNavigationOutput(
    val survey: ObjectNode,
    val state: ObjectNode,
    val navigationIndex: NavigationIndex,
    val responseId: UUID,
    val lang: SurveyLang,
    val additionalLang: List<SurveyLang>?,
    val navProps: NavProps
)

data class NavProps(
    val allowIncomplete: Boolean = true,
    val allowJump: Boolean = true,
    val allowPrevious: Boolean = true,
    val saveTimings: Boolean = true
)

fun SurveyData.toNavProps() = NavProps(allowIncomplete, allowJump, allowPrevious, saveTimings)