package com.frankie.app

import android.annotation.SuppressLint
import android.app.Activity
import android.content.Context
import android.util.Base64
import android.webkit.*
import com.fasterxml.jackson.databind.node.ObjectNode
import com.fasterxml.jackson.module.kotlin.jacksonTypeRef
import com.frankie.app.db.FrankieDb
import com.frankie.app.db.model.Response
import com.frankie.expressionmanager.ext.ScriptUtils
import com.frankie.expressionmanager.model.*
import com.frankie.expressionmanager.usecase.*
import kotlinx.coroutines.*
import java.util.*

@SuppressLint("SetJavaScriptEnabled")
class EMNavProcessor constructor(
    activityContext: Context
) {
    private val webView = WebView(activityContext)
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

    // later this will take the sid as input
    private fun getProcessedFile(): ValidationJsonOutput {
        // this is a static file loaded in the assets
        // later this will be a dynamic file downloaded from the internet
        val processedComponents: String =
            getActivity().assets.open("processed_1.json").bufferedReader().use {
                it.readText()
            }
        return jacksonKtMapper.readValue(
            processedComponents,
            jacksonTypeRef<ValidationJsonOutput>()
        )
    }

    fun start(surveyLang: SurveyLang, navListener: NavigationListener) {
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
                val responseId = UUID.randomUUID()
                saveResponse(
                    responseId,
                    surveyLang,
                    navigationJsonOutput
                )
                val result = navigationJsonOutput
                    .with(
                        responseId,
                        SurveyLang.EN,
                        listOf(SurveyLang.DE, SurveyLang.AR)
                    )
                navListener.onSuccess(result)
            },
            onError = { navListener.onError(it) }
        )
    }

    fun navigate(useCaseInput: NavigateRequest, navListener: NavigationListener) {
        var response: Response
        val responseId = useCaseInput.responseId!!
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
                        responseId,
                        lang,
                        mutableListOf(SurveyLang.EN, SurveyLang.DE, SurveyLang.AR).apply {
                            remove(
                                lang
                            )
                        }
                    )
                updateResponse(response, lang, navigationJsonOutput)
                navListener.onSuccess(result)
            },
            onError = { navListener.onError(it) }
        )
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
            getProcessedFile(),
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
        responseId: UUID,
        surveyLang: SurveyLang,
        result: NavigationJsonOutput
    ) {
        CoroutineScope(Dispatchers.IO).launch {
            frankieDb.responseDao().insert(
                Response(responseId.toString(), result.navigationIndex, surveyLang, mapOf())
            )
        }
    }

    private fun updateResponse(
        response: Response,
        surveyLang: SurveyLang,
        result: NavigationJsonOutput
    ) {
        CoroutineScope(Dispatchers.IO).launch {
            frankieDb.responseDao().update(
                values = response.values.toMutableMap().apply {
                    putAll(result.toSave)
                },
                id = response.id,
                navigationIndex = result.navigationIndex,
                lang = surveyLang

            )
        }
    }

}

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