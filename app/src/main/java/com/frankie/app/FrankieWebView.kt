package com.frankie.app

import android.annotation.SuppressLint
import android.content.Context
import android.util.AttributeSet
import android.util.Log
import android.webkit.*
import androidx.webkit.*
import com.fasterxml.jackson.module.kotlin.jacksonObjectMapper
import com.fasterxml.jackson.module.kotlin.readValue
import com.frankie.app.ui.common.FileUtils
import com.frankie.expressionmanager.ext.ScriptUtils
import com.frankie.expressionmanager.model.*
import java.util.*

@SuppressLint("SetJavaScriptEnabled")
class FrankieWebView
@JvmOverloads constructor(
    context: Context, attrs: AttributeSet? = null
) : WebView(context, attrs) {

    private val emNavProcessor = EMNavProcessor(context)
    private lateinit var surveyId: String

    private val frankieWebViewClient = object : WebViewClient() {
        override fun shouldInterceptRequest(
            view: WebView?, request: WebResourceRequest?
        ): WebResourceResponse? {
            val url = request?.url.toString()
            Log.v(TAG, url)
            return if (url.endsWith("runtime.js")) {
                getRuntimeJs()
            } else if (url.startsWith(CUSTOM_DOMAIN) && !url.endsWith("favicon.ico")) {
                val data =
                    context.assets.open(url.replace(CUSTOM_DOMAIN, "$REACT_APP_BUILD_FOLDER/"))
                        .bufferedReader().use {
                            it.readText()
                        }
                return WebResourceResponse(
                    if (url.endsWith("js")) "text/javascript" else "text/css",
                    "utf-8",
                    data.byteInputStream()
                )
            } else {
                null
            }
        }
    }
    private val androidJavascriptInterface = object {
        @Suppress("unused")
        @JavascriptInterface
        fun navigate(body: String) {
            val navigateRequest: NavigateRequest = jacksonObjectMapper().readValue(body)
            emNavProcessor.navigate(surveyId, navigateRequest, object : NavigationListener {
                override fun onSuccess(apiNavigationOutput: ApiNavigationOutput) {
                    val string = jacksonKtMapper.writeValueAsString(apiNavigationOutput)
                    loadUrl("javascript:navigateOffline($string)")
                }

                override fun onError(error: Throwable) {
                    // TODO("Report Error to MainActivity")
                }
            })
        }

        @JavascriptInterface
        fun uploadDataUrl(key: String, dataUrl: String, fileName: String) {
            Log.v(TAG, dataUrl.toString())

        }

        @JavascriptInterface
        fun start() {
            emNavProcessor.start(surveyId, SurveyLang.EN, object : NavigationListener {
                override fun onSuccess(apiNavigationOutput: ApiNavigationOutput) {
                    val string = jacksonKtMapper.writeValueAsString(apiNavigationOutput)
                    loadUrl("javascript:navigateOffline($string)")
                }

                override fun onError(error: Throwable) {
                    // TODO("Report Error to MainActivity")
                }
            })
        }

        @JavascriptInterface
        fun getParam(key: String): String {
            Log.v("blah", "getParam($key)")
            if (key == "surveyId") {
                return surveyId
            }
            return ""
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

    private fun getRuntimeJs(): WebResourceResponse {
        val script = FileUtils.getValidationJson(context, surveyId)?.script
        return WebResourceResponse(
            "text/javascript",
            "utf-8",
            200,
            "OK",
            mutableMapOf("Access-Control-Allow-Origin" to "*"),
            (script + "\n" + ScriptUtils().commonScript).byteInputStream()
        )
    }


    fun loadSurvey(sid: String) {
        surveyId = sid
        val data = context.assets.open("$REACT_APP_BUILD_FOLDER/index.html").bufferedReader().use {
            it.readText()
        }
        loadDataWithBaseURL(CUSTOM_DOMAIN, data, null, null, null)
    }

    fun onBack(onBackHandler: (Boolean) -> Unit) {
        evaluateJavascript("handleBack()") { value ->
            value?.let {
                onBackHandler(value == "true")
            } ?: onBackHandler(false)
        }
    }

    companion object {
        private const val TAG = "FrankieWebView"
        private const val JAVASCRIPT_INTERFACE_NAME = "Android"
        private const val CUSTOM_DOMAIN = "http://mywebsite.com/"
        private const val REACT_APP_BUILD_FOLDER = "react-app"
    }
}

data class NavigateRequest(
    val responseId: UUID?,
    val lang: String? = null,
    val navigationDirection: NavigationDirection? = null,
    val events: List<ValueEvent> = listOf(),
    val values: Map<String, Any> = mapOf()
)

data class ValueEvent(
    val name: String,
    val code: String,
    val time: String
)
