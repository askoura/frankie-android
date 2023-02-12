package com.example.reactfromassets

import android.annotation.SuppressLint
import android.content.Context
import android.util.Base64
import android.webkit.*
import com.frankie.expressionmanager.ext.ScriptUtils
import com.frankie.expressionmanager.model.NavigationUseCaseInput
import com.frankie.expressionmanager.usecase.NavigationJsonOutput
import com.frankie.expressionmanager.usecase.NavigationUseCaseWrapperImpl
import com.frankie.expressionmanager.usecase.ScriptEngine
import com.frankie.expressionmanager.usecase.ValidationJsonOutput
import kotlinx.coroutines.*

@SuppressLint("SetJavaScriptEnabled")
class EMNavProcessor constructor(
    context: Context
) {
    val webView = WebView(context)

    init {
        webView.clearCache(true)
        webView.settings.javaScriptEnabled = true
        webView.settings.mixedContentMode = WebSettings.MIXED_CONTENT_ALWAYS_ALLOW
        webView.settings.domStorageEnabled = true
        loadJavaScript(ScriptUtils().initialScript + "\n" + ScriptUtils().commonScript)
    }

    private fun loadJavaScript(input: String) {
        val javascript = "<script>$input</script>"
        val data = javascript.toByteArray(charset("UTF-8"))
        val base64 = Base64.encodeToString(data, Base64.DEFAULT)
        webView.loadUrl("data:text/html;charset=utf-8;base64,$base64")

    }

    fun navigate(
        validationJsonOutput: ValidationJsonOutput,
        navigationUseCaseInput: NavigationUseCaseInput,
        navListener: NavigationListener
    ) {
        val navigationUseCaseWrapperImpl = NavigationUseCaseWrapperImpl(
            object : ScriptEngine {
                override fun executeScript(method: String, script: String): String {
                    throw java.lang.IllegalStateException("Should not resort to Script engine")
                }
            },
            validationJsonOutput,
            navigationUseCaseInput
        )
        val script = navigationUseCaseWrapperImpl.getNavigationScript()
        webView.evaluateJavascript("JSON.parse(navigate($script))") { value ->
            value?.let {
                try {
                    navListener.onResult(navigationUseCaseWrapperImpl.processNavigationResult(value))
                } catch (e: Exception) {
                    navListener.onError(e)
                }
            }
        }
    }

    companion object {
        private const val TAG = "EMNavProcessor"
    }
}

interface NavigationListener {
    fun onResult(navigationJsonOutput: NavigationJsonOutput)
    fun onError(error: Throwable)

}