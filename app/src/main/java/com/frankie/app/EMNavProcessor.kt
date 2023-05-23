package com.frankie.app

import android.annotation.SuppressLint
import android.app.Activity
import android.content.Context
import android.util.Base64
import android.webkit.*
import com.fasterxml.jackson.annotation.JsonProperty
import com.fasterxml.jackson.databind.node.ObjectNode
import com.frankie.app.business.settings.SharedPrefsManagerImpl
import com.frankie.app.db.FrankieDb
import com.frankie.app.db.model.Response
import com.frankie.app.ui.common.FileUtils
import com.frankie.expressionmanager.ext.ScriptUtils
import com.frankie.expressionmanager.model.*
import com.frankie.expressionmanager.usecase.*
import kotlinx.coroutines.*
import java.io.InputStream
import java.util.*

@SuppressLint("SetJavaScriptEnabled")
class EMNavProcessor constructor(
    activityContext: Context
) {
    private val webView = WebView(activityContext)
    private var responseId: UUID? = null
    private var surveyId: String? = null
    private val frankieDb = FrankieDb.getDatabase(activityContext)

    fun getActivity(): Activity = webView.context as Activity

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

    fun start(surveyId: String, surveyLang: SurveyLang, navListener: NavigationListener) {
        this.surveyId = surveyId
        val navigationUseCaseInput = NavigationUseCaseInput(
            navigationInfo = NavigationInfo(
                navigationDirection = NavigationDirection.Start,
                navigationMode = NavigationMode.GROUP_BY_GROUP,
                navigationIndex = null
            ),
            defaultLang = SurveyLang.EN,
            lang = surveyLang,
        )
        navigationUseCase(
            navigationUseCaseInput,
            onSuccess = { navigationJsonOutput ->
                responseId = UUID.randomUUID()
                saveResponse(
                    surveyLang,
                    navigationJsonOutput
                )
                val result = navigationJsonOutput
                    .with(
                        responseId!!,
                        SurveyLang.EN,
                        listOf(SurveyLang.DE, SurveyLang.AR)
                    )
                navListener.onSuccess(result)
            }
        ) { navListener.onError(it) }
    }

    fun navigate(surveyId: String, useCaseInput: NavigateRequest, navListener: NavigationListener) {
        this.surveyId = surveyId
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
                navigationMode = NavigationMode.GROUP_BY_GROUP,
                navigationIndex = response.navigationIndex
            ),
            defaultLang = SurveyLang.EN,
            lang = lang,
        )
        navigationUseCase(
            navigationUseCaseInput,
            onSuccess = { navigationJsonOutput ->
                val result = navigationJsonOutput
                    .with(
                        responseId!!,
                        lang,
                        mutableListOf(SurveyLang.EN, SurveyLang.DE, SurveyLang.AR).apply {
                            remove(
                                lang
                            )
                        }
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
            FileUtils.getValidationJson(getActivity(), surveyId!!)!!,
            true,
            navigationUseCaseInput
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
                    responseId.toString(),
                    result.navigationIndex,
                    surveyLang,
                    userId,
                    mapOf(),
                    listOf(result.event)
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
                lang = surveyLang,
                events = response.events.toMutableList().apply {
                    addAll(events)
                    add(result.event)
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
            getActivity(),
            uuid.toString(),
            surveyId!!
        )
        val str = dataUrl.substring(dataUrl.indexOf(",") + 1)
        val imageData: ByteArray = Base64.decode(str, Base64.NO_WRAP)
        responseFile.writeBytes(imageData)
        return saveFileResponse(fileName, uuid, key, responseFile.length())
    }

    fun uploadFile(
        key: String,
        fileName: String,
        inputStream:InputStream
    ): ResponseUploadFile {
        val uuid = UUID.randomUUID()
        val responseFile = FileUtils.getResponseFile(
            getActivity(),
            uuid.toString(),
            surveyId!!
        )
        responseFile.writeBytes(inputStream.readBytes())
        return saveFileResponse(fileName, uuid, key, responseFile.length())
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
        val responseUploadFile = ResponseUploadFile(fileName, uuid.toString(), fileSize)
        val newValues = response.values.toMutableMap().apply {
            put("$key.value", responseUploadFile)
        }
        CoroutineScope(Dispatchers.IO).launch {
            frankieDb.responseDao().update(
                values = newValues,
                id = response.id,
                navigationIndex = response.navigationIndex,
                lang = response.lang,
                events = response.events

            )
        }
        return responseUploadFile
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

fun NavigationJsonOutput.with(responseId: UUID, lang: SurveyLang, additionalLang: List<SurveyLang>)
          : ApiNavigationOutput {
    return ApiNavigationOutput(survey, state, navigationIndex, responseId, lang, additionalLang)
}

data class ApiNavigationOutput(
    val survey: ObjectNode,
    val state: ObjectNode,
    val navigationIndex: NavigationIndex,
    val responseId: UUID,
    val lang: SurveyLang,
    val additionalLang: List<SurveyLang>?,
    val navProps: NavProps = NavProps()
)

data class NavProps(
    val allowIncomplete: Boolean = true,
    val allowJump: Boolean = true,
    val allowPrevious: Boolean = true,
    val saveTimings: Boolean = true
)