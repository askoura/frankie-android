package com.example.reactfromassets

import android.annotation.SuppressLint
import android.content.Context
import android.os.Message
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
    context: Context,
    attrs: AttributeSet? = null
) : WebView(context, attrs) {

    lateinit var customDomain: String
    lateinit var sid: String
    private val emNavProcessor: EMNavProcessor
    lateinit var navigateListen: (apiUseCaseInput: ApiUseCaseInput, navListener: (ApiNavigationOutput) -> Unit) -> Unit

    init {

        addJavascriptInterface(object {
            @JavascriptInterface
            fun navigate(body: String) {
                val apiUseCaseInput: ApiUseCaseInput = jacksonKtMapper.readValue(body)
                navigateListen(apiUseCaseInput) {
                    val string = jacksonKtMapper.writeValueAsString(it)
                    loadUrl("javascript:navigateOffline($string)")
                }
            }
        }, "Android")
        clearCache(true)
        settings.javaScriptEnabled = true
        settings.mixedContentMode = WebSettings.MIXED_CONTENT_ALWAYS_ALLOW
        settings.domStorageEnabled = true
        if (BuildConfig.DEBUG) {
            setWebContentsDebuggingEnabled(true)
        }
        emNavProcessor = EMNavProcessor(context)
        setInitialScale(1)
        settings.useWideViewPort = true
        settings.setSupportZoom(false)
        settings.builtInZoomControls = false
        webChromeClient = object : WebChromeClient() {

        }
        webViewClient = object : WebViewClient() {
            override fun onReceivedError(
                view: WebView?,
                request: WebResourceRequest?,
                error: WebResourceError?
            ) {
                super.onReceivedError(view, request, error)
            }
            override fun shouldInterceptRequest(
                view: WebView?,
                request: WebResourceRequest?
            ): WebResourceResponse? {
                val url = request?.url.toString()
                Log.v(TAG, request?.url.toString())
                return if (url.endsWith("runtime.js")) {
                    val script = jacksonKtMapper.readValue(
                        context.assets.open("processed_1.json").bufferedReader().use {
                            it.readText()
                        }, jacksonTypeRef<ValidationJsonOutput>()
                    ).script
                    WebResourceResponse(
                        "text/javascript",
                        "utf-8",
                        (script + "\n" + ScriptUtils().commonScript).byteInputStream()
                    )
                } else {
                    super.shouldInterceptRequest(view, request)
                }

            }

        }
    }

    fun loadSurvey(sid: String) {
        this.sid = sid
        loadUrl("$ASSETS_REACT_LOCATION?url=$customDomain&sid=$sid&offline=whatever")
    }

    companion object {
        private const val ASSETS_REACT_LOCATION = "file:///android_asset/build/index.html"
        private const val TAG = "FrankieWebView"
    }
}