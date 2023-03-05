package com.example.reactfromassets

import android.annotation.SuppressLint
import android.app.Activity
import android.content.Context
import android.util.Base64
import android.webkit.*
import com.example.reactfromassets.db.FrankieDb
import com.example.reactfromassets.db.model.Response
import com.fasterxml.jackson.module.kotlin.jacksonTypeRef
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
        loadJavaScript(ScriptUtils().initialScript + "\n" + ScriptUtils().commonScript)
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

    fun navigate(useCaseInput: ApiUseCaseInput, navListener: NavigationListener) {
        val navigationDirection = useCaseInput.navigationDirection

        if (navigationDirection == NavigationDirection.Start) {
            navigateStart(useCaseInput, navListener)
        } else {
            navigateElse(useCaseInput, navListener)
        }

    }

    private fun navigateStart(useCaseInput: ApiUseCaseInput, navListener: NavigationListener) {
        val navigationUseCaseInput = NavigationUseCaseInput(
            values = useCaseInput.values,
            navigationInfo = NavigationInfo(
                navigationDirection = useCaseInput.navigationDirection,
                navigationMode = NavigationMode.GROUP_BY_GROUP,
                navigationIndex = null
            ),
            defaultLang = SurveyLang.EN,
            lang = useCaseInput.lang?.toSurveyLang() ?: SurveyLang.EN,
        )
        navigationUseCase(
            navigationUseCaseInput,
            onSuccess = { navigationJsonOutput ->
                val responseId = Random().nextInt()
                saveResponse(responseId, useCaseInput.lang?.toSurveyLang() ?: SurveyLang.EN, navigationJsonOutput)
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

    private fun navigateElse(useCaseInput: ApiUseCaseInput, navListener: NavigationListener) {
        var response: Response
        val responseId = useCaseInput.responseId!!
        runBlocking {
            response = frankieDb.responseDao().get(responseId)
        }
        val lang = useCaseInput.lang?.toSurveyLang() ?: response.lang
        val navigationUseCaseInput = NavigationUseCaseInput(
            values = response.values.toMutableMap().apply {
                putAll(useCaseInput.values)
            },
            navigationInfo = NavigationInfo(
                navigationDirection = useCaseInput.navigationDirection,
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
                        mutableListOf(SurveyLang.EN, SurveyLang.DE, SurveyLang.AR).apply { remove(lang) }
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
        responseId: Int,
        surveyLang: SurveyLang,
        result: NavigationJsonOutput
    ) {
        CoroutineScope(Dispatchers.IO).launch {
            frankieDb.responseDao().insert(
                Response(responseId, result.navigationIndex, surveyLang, mapOf())
            )
        }
    }

    private fun updateResponse(response: Response, surveyLang: SurveyLang, result: NavigationJsonOutput) {
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