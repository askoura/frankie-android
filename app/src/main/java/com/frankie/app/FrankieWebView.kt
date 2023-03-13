package com.frankie.app

import android.annotation.SuppressLint
import android.content.Context
import android.util.AttributeSet
import android.util.Log
import android.webkit.*
import androidx.webkit.*
import com.fasterxml.jackson.module.kotlin.jacksonTypeRef
import com.fasterxml.jackson.module.kotlin.readValue
import com.frankie.expressionmanager.ext.ScriptUtils
import com.frankie.expressionmanager.model.*
import com.frankie.expressionmanager.usecase.ApiNavigationOutput
import com.frankie.expressionmanager.usecase.ValidationJsonOutput

@SuppressLint("SetJavaScriptEnabled")
class FrankieWebView
@JvmOverloads constructor(
    context: Context, attrs: AttributeSet? = null
) : WebView(context, attrs) {

    private val emNavProcessor = EMNavProcessor(context)

    private val frankieWebViewClient = object : WebViewClient() {
        override fun shouldInterceptRequest(
            view: WebView?, request: WebResourceRequest?
        ): WebResourceResponse? {
            val url = request?.url.toString()
            Log.v(TAG, url)
            return if (url.endsWith("runtime.js")) {
                getRuntimeJs()
            } else {
                null
            }
        }
    }
    private val androidJavascriptInterface = object {
        @Suppress("unused")
        @JavascriptInterface
        fun navigate(body: String) {
            val apiUseCaseInput: ApiUseCaseInput = jacksonKtMapper.readValue(body)
            navigate(apiUseCaseInput) {
                val string = jacksonKtMapper.writeValueAsString(it)
                loadUrl("javascript:navigateOffline($string)")
            }
        }
    }

    init {
        addJavascriptInterface(androidJavascriptInterface, JAVASCRIPT_INTERFACE_NAME)
        settings.javaScriptEnabled = true
        if (BuildConfig.DEBUG) {
            setWebContentsDebuggingEnabled(true)
        }
        setInitialScale(1)
        settings.useWideViewPort = true
        settings.setSupportZoom(false)

        webViewClient = frankieWebViewClient
    }

    private fun navigate(
        useCaseInput: ApiUseCaseInput,
        navListener: (ApiNavigationOutput) -> Unit
    ) {
        emNavProcessor.navigate(useCaseInput, object : NavigationListener {
            override fun onSuccess(apiNavigationOutput: ApiNavigationOutput) {
                navListener(apiNavigationOutput)
            }

            override fun onError(error: Throwable) {
                // TODO("Report Error to MainActivity")
            }
        })
    }

    private fun getRuntimeJs(): WebResourceResponse {
        val script = jacksonKtMapper.readValue(
            context.assets.open("processed_1.json").bufferedReader().use {
                it.readText()
            }, jacksonTypeRef<ValidationJsonOutput>()
        ).script
        return WebResourceResponse(
            "text/javascript",
            "utf-8",
            (script + "\n" + ScriptUtils().commonScript).byteInputStream()
        )
    }


    fun loadSurvey(sid: String) {
        loadUrl("$ASSETS_REACT_LOCATION?url=$CUSTOM_DOMAIN&sid=$sid&offline=whatever")
    }

    fun onBack(onBackHandler: (Boolean) -> Unit) {
        evaluateJavascript("handleBack()") { value ->
            value?.let {
                onBackHandler(value == "true")
            } ?: onBackHandler(false)
        }
    }

    companion object {
        private const val ASSETS_REACT_LOCATION = "file:///android_asset/app/index.html"
        private const val TAG = "FrankieWebView"
        private const val JAVASCRIPT_INTERFACE_NAME = "Android"
        private const val CUSTOM_DOMAIN = "CUSTOM_DOMAIN"
    }
}