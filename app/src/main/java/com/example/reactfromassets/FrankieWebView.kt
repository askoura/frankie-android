package com.example.reactfromassets

import android.annotation.SuppressLint
import android.content.Context
import android.util.AttributeSet
import android.util.Log
import android.webkit.*

@SuppressLint("SetJavaScriptEnabled")
class FrankieWebView
@JvmOverloads constructor(
    context: Context,
    attrs: AttributeSet? = null
) : WebView(context, attrs) {
    init {
        clearCache(true)
        settings.javaScriptEnabled = true
        settings.mixedContentMode = WebSettings.MIXED_CONTENT_ALWAYS_ALLOW
        settings.domStorageEnabled = true
        if (BuildConfig.DEBUG) {
            setWebContentsDebuggingEnabled(true)
        }
        setInitialScale(1)
        settings.useWideViewPort = true
        settings.setSupportZoom(false)
        settings.builtInZoomControls = false
        webChromeClient = object : WebChromeClient() {

        }
        webViewClient = object : WebViewClient() {
            override fun shouldInterceptRequest(
                view: WebView?,
                request: WebResourceRequest?
            ): WebResourceResponse? {
                Log.v("", request?.url.toString())
                return super.shouldInterceptRequest(view, request)
            }

            @Deprecated("Deprecated in Java")
            override fun shouldInterceptRequest(
                view: WebView?,
                url: String
            ): WebResourceResponse? {
                Log.v("", url)
                return super.shouldInterceptRequest(view, url)
            }


        }
    }
}