package com.frankie.app

import android.annotation.SuppressLint
import android.app.Activity
import android.content.Context
import android.net.Uri
import android.util.AttributeSet
import android.util.Log
import android.webkit.*
import androidx.webkit.*
import com.fasterxml.jackson.datatype.jsr310.JavaTimeModule
import com.fasterxml.jackson.module.kotlin.readValue
import com.frankie.app.ui.common.FileUtils
import com.frankie.expressionmanager.ext.ScriptUtils
import com.frankie.expressionmanager.model.*
import org.koin.android.BuildConfig
import java.io.File
import java.io.FileInputStream
import java.util.*


@SuppressLint("SetJavaScriptEnabled")
class FrankieWebView
@JvmOverloads constructor(
    context: Context, attrs: AttributeSet? = null
) : WebView(context, attrs) {


    private var filePathCallback: ValueCallback<Array<Uri>>? = null
    private var saverUri: Uri? = null

    val fileSelectedCallback = ValueCallback<Uri> { value ->
        saverUri = value
        filePathCallback?.onReceiveValue(arrayOf(value))
    }

    fun resetFileUploadVariables() {
        filePathCallback = null
        saverUri = null
    }

    private val emNavProcessor = EMNavProcessor(context)
    private lateinit var surveyId: String

    private val frankieWebViewClient = object : WebViewClient() {
        override fun shouldInterceptRequest(
            view: WebView?, request: WebResourceRequest?
        ): WebResourceResponse? {
            val url = request?.url.toString()
            Log.v(TAG, url)

            return if (url.endsWith("/survey/$surveyId/run/runtime.js")) {
                getRuntimeJs()
            } else if (url.contains("/survey/$surveyId/resource/")) {
                val filename = url.substringAfterLast("/")
                wrapResource(FileUtils.getResourceFile(context, filename, surveyId))
            } else if (url.contains("/survey/$surveyId/response/attach")) {
                val fileUUId = url.substringAfterLast("/")
                wrapResource(FileUtils.getResponseFile(context, fileUUId, surveyId))
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
            val mapper = jacksonKtMapper.registerModule(JavaTimeModule())
            val navigateRequest: NavigateRequest = mapper.readValue(body)
            emNavProcessor.navigate(surveyId, navigateRequest, object : NavigationListener {
                override fun onSuccess(apiNavigationOutput: ApiNavigationOutput) {
                    val string = mapper.writeValueAsString(apiNavigationOutput)
                    loadUrl("javascript:navigateOffline($string)")
                }

                override fun onError(error: Throwable) {
                    // TODO("Report Error to MainActivity")
                }
            })
        }

        @JavascriptInterface
        fun uploadFile(key: String, fileName: String) {
            context.contentResolver.openInputStream(saverUri!!)?.let {
                val uploadFile =
                    emNavProcessor.uploadFile(key, fileName, it)
                val string = jacksonKtMapper.writeValueAsString(uploadFile)
                resetFileUploadVariables()
                (context as Activity).runOnUiThread {
                    loadUrl("javascript:onFileUploaded($string)")
                }
            }

        }

        @JavascriptInterface
        fun uploadDataUrl(key: String, dataUrl: String, fileName: String) {
            val uploadFile =
                emNavProcessor.uploadDataUrl(key, dataUrl, fileName)
            val string = jacksonKtMapper.writeValueAsString(uploadFile)
            (context as Activity).runOnUiThread {
                loadUrl("javascript:onDataUrlUploaded($string)")
            }
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
        webChromeClient = object : WebChromeClient() {
            override fun onShowFileChooser(
                webView: WebView?,
                filePathCallback: ValueCallback<Array<Uri>>?,
                fileChooserParams: FileChooserParams?
            ): Boolean {
                this@FrankieWebView.filePathCallback = filePathCallback
                (context as? SurveyActivity)?.pickFromGallery()
                return true
            }
        }
    }


    private fun getRuntimeJs(): WebResourceResponse {
        val script = FileUtils.getValidationJson(context, surveyId)?.script
        return WebResourceResponse(
            "text/javascript",
            "utf-8",
            200,
            "OK",
            mutableMapOf(
                "Access-Control-Allow-Origin" to "*",
                "Access-Control-Allow-Methods" to "GET,POST,PUT,DELETE",
                "Access-Control-Allow-Credentials" to "true",
                "Access-Control-Allow-Headers" to "access-control-allow-origin"
            ),
            (script + "\n" + ScriptUtils().commonScript).byteInputStream()
        )
    }

    private fun wrapResource(file: File): WebResourceResponse {
        return WebResourceResponse(
            "",
            "utf-8",
            200,
            "OK",
            mutableMapOf("Access-Control-Allow-Origin" to "*"),
            FileInputStream(file)
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
    val events: List<ResponseEvent.Value> = listOf(),
    val values: Map<String, Any> = mapOf()
)
