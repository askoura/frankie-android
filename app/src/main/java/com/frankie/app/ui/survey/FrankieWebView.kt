package com.frankie.app.ui.survey

import android.annotation.SuppressLint
import android.app.Activity
import android.content.Context
import android.content.Intent
import android.net.Uri
import android.provider.OpenableColumns
import android.util.AttributeSet
import android.util.Log
import android.webkit.*
import androidx.core.content.FileProvider
import androidx.webkit.*
import com.fasterxml.jackson.databind.ObjectMapper
import com.fasterxml.jackson.datatype.jsr310.JavaTimeModule
import com.fasterxml.jackson.module.kotlin.readValue
import com.frankie.app.BuildConfig
import com.frankie.app.business.survey.SurveyData
import com.frankie.app.ui.common.FileUtils
import com.frankie.expressionmanager.ext.ScriptUtils
import com.frankie.expressionmanager.model.*
import java.io.File
import java.io.FileInputStream
import java.io.FileNotFoundException
import java.io.InputStream
import java.util.*


@SuppressLint("SetJavaScriptEnabled")
class FrankieWebView
@JvmOverloads constructor(
    context: Context, attrs: AttributeSet? = null
) : WebView(context, attrs) {

    val surveyActivity: SurveyActivity? get() = context as? SurveyActivity


    private var saverUri: Uri? = null
    private var operationKey: String? = null
    private var maxSizeKb: Int? = null
    private var acceptedTypes: String? = null


    fun resetFileUploadVariables() {
        saverUri = null
        maxSizeKb = null
        operationKey = null
        acceptedTypes = null
    }

    private lateinit var emNavProcessor: EMNavProcessor
    private lateinit var survey: SurveyData
    private var responseId: String? = null


    private val frankieWebViewClient = object : WebViewClient() {
        override fun shouldInterceptRequest(
            view: WebView?, request: WebResourceRequest?
        ): WebResourceResponse? {
            val url = request?.url.toString()
            Log.v(TAG, url)

            return if (url.endsWith("/survey/${survey.id}/run/runtime.js")) {
                getRuntimeJs()
            } else if (url.contains("/survey/${survey.id}/resource/")) {
                val filename = url.substringAfterLast("/")
                wrapResource(FileUtils.getResourceFile(context, filename, survey.id))
            } else if (url.contains("/survey/${survey.id}/response/attach")) {
                val fileUUId = url.substringAfterLast("/")
                wrapResource(FileUtils.getResponseFile(context, fileUUId, survey.id))
            } else if (url.startsWith(CUSTOM_DOMAIN) && !url.endsWith("favicon.ico")) {
                val extension = url.substringAfterLast(".")
                if (extension == "css" || extension == "js") {
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
                    return try {
                        val data =
                            context.assets.open(
                                url.replace(
                                    CUSTOM_DOMAIN,
                                    "$REACT_APP_BUILD_FOLDER/"
                                )
                            )
                        WebResourceResponse(
                            getMimeTypeFromExtension(extension),
                            "utf-8",
                            data
                        )
                    } catch (e: FileNotFoundException) {
                        null
                    }
                }
            } else {
                null
            }
        }
    }

    fun getMimeTypeFromExtension(extension: String): String? {
        val mimeTypeMap = MimeTypeMap.getSingleton()
        return mimeTypeMap.getMimeTypeFromExtension(extension.lowercase())
    }

    private fun navigate(mapper: ObjectMapper, navigateRequest: NavigateRequest) {
        emNavProcessor.navigate(navigateRequest, object : NavigationListener {
            override fun onSuccess(apiNavigationOutput: ApiNavigationOutput) {
                if (navigateRequest.navigationDirection == NavigationDirection.Resume) {
                    surveyActivity?.onResponseIdReceived(apiNavigationOutput.responseId.toString())
                } else if (apiNavigationOutput.navigationIndex is NavigationIndex.End) {
                    surveyActivity?.stopRecording()
                }
                val string = mapper.writeValueAsString(apiNavigationOutput)
                loadUrl("javascript:navigateOffline($string)")
            }

            override fun onError(error: Throwable) {
                // TODO("Report Error to MainActivity")
            }
        })
    }

    private val androidJavascriptInterface = object {
        @Suppress("unused")
        @JavascriptInterface
        fun navigate(body: String) {
            val mapper = jacksonKtMapper.registerModule(JavaTimeModule())
            val navigateRequest: NavigateRequest = mapper.readValue(body)
            navigate(mapper, navigateRequest)
        }

        @Suppress("unused")
        @JavascriptInterface
        fun onBackPressed() {
            surveyActivity?.runOnUiThread {
                surveyActivity?.onBackPressedDispatcher?.onBackPressed()
            }

        }

        @JavascriptInterface
        fun start() {
            val mapper = jacksonKtMapper.registerModule(JavaTimeModule())
            if (responseId == null) {
                emNavProcessor.start(object : NavigationListener {
                    override fun onSuccess(apiNavigationOutput: ApiNavigationOutput) {
                        val string = mapper.writeValueAsString(apiNavigationOutput)
                        surveyActivity?.onResponseIdReceived(apiNavigationOutput.responseId.toString())
                        loadUrl("javascript:navigateOffline($string)")
                    }

                    override fun onError(error: Throwable) {
                        // TODO("Report Error to MainActivity")
                    }
                })
            } else {
                navigate(
                    mapper,
                    NavigateRequest(
                        responseId = UUID.fromString(responseId),
                        navigationDirection = NavigationDirection.Resume
                    )
                )
            }

        }

        @JavascriptInterface
        fun capturePhoto(key: String, maxSizeInKb: Int) {
            maxSizeKb = maxSizeInKb
            operationKey = key
            val uuid = UUID.randomUUID()
            val file = FileUtils.getResponseFile(context, uuid.toString(), survey.id)
            saverUri = FileProvider
                .getUriForFile(context, BuildConfig.APPLICATION_ID + ".provider", file)
            surveyActivity?.takePhoto(saverUri!!)
        }

        @JavascriptInterface
        fun scanBarcode(key: String) {
            operationKey = key
            surveyActivity?.scanBarcode()
        }

        @JavascriptInterface
        fun previewFileUpload(fileName: String, nameWithExt: String) {
            (context as Activity).runOnUiThread {
                val intent = Intent(Intent.ACTION_VIEW)
                intent.addFlags(Intent.FLAG_GRANT_READ_URI_PERMISSION)
                val file = FileUtils.getResponseFile(context, fileName, survey.id)
                val uri = FileProvider
                    .getUriForFile(context, BuildConfig.APPLICATION_ID + ".provider", file)
                intent.setDataAndType(uri, "*/*")
                context.startActivity(intent)
            }
        }


        @JavascriptInterface
        fun captureVideo(key: String, maxSizeInKb: Int) {
            maxSizeKb = maxSizeInKb
            operationKey = key
            surveyActivity?.takeVideo()
        }

        @JavascriptInterface
        fun selectFile(key: String, accepted: String, maxSizeInKb: Int) {
            operationKey = key
            surveyActivity?.pickFromGallery(accepted)
            maxSizeKb = if (maxSizeInKb > 0) maxSizeInKb else null
            acceptedTypes = accepted.ifEmpty { null }
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
        fun getParam(key: String): String {
            if (key == "surveyId") {
                return survey.id
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
        val script = FileUtils.getValidationJson(context, survey.id)?.script
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

    private fun wrapResource(file: File): WebResourceResponse? {
        val inputStream = try {
            FileInputStream(file)
        } catch (e: FileNotFoundException) {
            return null
        }
        return WebResourceResponse(
            "",
            "utf-8",
            200,
            "OK",
            mutableMapOf("Access-Control-Allow-Origin" to "*"),
            inputStream
        )
    }


    fun loadSurvey(surveyData: SurveyData, responseId: String?) {
        survey = surveyData
        emNavProcessor = EMNavProcessor(context, survey)
        this.responseId = responseId
        val data = context.assets.open("$REACT_APP_BUILD_FOLDER/index.html").bufferedReader().use {
            it.readText()
        }
        loadDataWithBaseURL(CUSTOM_DOMAIN, data, null, null, null)
    }

    fun onBack(onBackHandler: (Boolean) -> Unit) {
        (context as Activity).runOnUiThread {
            evaluateJavascript("handleBack()") { value ->
                value?.let {
                    onBackHandler(value == "true")
                } ?: onBackHandler(false)
            }
        }
    }

    fun onCameraResult() {
        var stream: InputStream? = null
        try {
            stream = context.contentResolver.openInputStream(saverUri!!)
            val size = stream!!.readBytes().size.toLong()
            if (isSizeViolated(size)) {
                resetFileUploadVariables()
                return
            }
            val result = emNavProcessor.saveFileResponse(
                fileName = "captured-image.jpg",
                uuid = UUID.fromString(saverUri.toString().substringAfterLast("/")),
                fileSize = size,
                key = operationKey!!
            )
            (context as Activity).runOnUiThread {
                loadUrl(
                    "javascript:onPhotoCaptured$operationKey(${
                        jacksonKtMapper.writeValueAsString(
                            result
                        )
                    })"
                )
            }

        } finally {
            stream?.close()
        }

        resetFileUploadVariables()
    }

    fun onBarcodeScanned(contents: String) {
        (context as Activity).runOnUiThread {
            loadUrl("javascript:onBarcodeScanned$operationKey(\"$contents\")")
        }
    }

    fun onVideoResult(contentUri: Uri?) {
        var stream: InputStream? = null
        try {
            stream = context.contentResolver.openInputStream(contentUri!!)
            val size = stream!!.readBytes().size.toLong()
            if (isSizeViolated(size)) {
                resetFileUploadVariables()
                return
            }
            val result = emNavProcessor.uploadFile(
                key = operationKey!!,
                fileName = "captured-video.mp4",
                inputStream = stream
            )
            (context as Activity).runOnUiThread {
                loadUrl(
                    "javascript:onVideoCaptured$operationKey(${
                        jacksonKtMapper.writeValueAsString(
                            result
                        )
                    })"
                )
            }

        } finally {
            stream?.close()
        }

        resetFileUploadVariables()
    }

    private fun isSizeViolated(size: Long): Boolean {
        val sizeInKb = size / 1024
        val sizeViolated = maxSizeKb?.let {
            sizeInKb > it
        } ?: false
        if (sizeViolated) {
            surveyActivity?.showMaxSizeValidation(sizeInKb.toInt(), maxSizeKb!!)
        }
        return sizeViolated
    }

    @SuppressLint("Range")
    fun onFileSelected(uri: Uri) {
        try {
            val cursor = context.contentResolver.query(uri, null, null, null, null)

            if (cursor != null && cursor.moveToFirst()) {
                val displayName =
                    cursor.getString(
                        cursor.getColumnIndex(OpenableColumns.DISPLAY_NAME)
                    )
                val size = cursor.getLong(cursor.getColumnIndex(OpenableColumns.SIZE))
                if (isSizeViolated(size)) {
                    resetFileUploadVariables()
                    return
                }
                val fileType = context.contentResolver.getType(uri)
                saverUri = uri
                cursor.close()
                loadUrl("javascript:onFileSelected$operationKey(\"$displayName\", $size, \"$fileType\")")
            }
        } catch (e: Exception) {
            resetFileUploadVariables()
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
