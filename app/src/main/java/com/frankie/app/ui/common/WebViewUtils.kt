package com.frankie.app.ui.common

import android.content.Context
import android.webkit.WebView

object WebViewUtils {

    fun chromeSupported(context: Context): Boolean {
        val userAgentString = WebView(context).settings.userAgentString
        val pattern = "Chrome/(\\d+)".toRegex()
        val matchResult = pattern.find(userAgentString)
        val versionNumber = matchResult?.groups?.get(1)?.value
        val version =  try {
            versionNumber?.toInt() ?: 0
        } catch (e: NumberFormatException) {
            0
        }
        return version >= MIN_SUPPORTED_CHROME_VERSION

    }

    private const val MIN_SUPPORTED_CHROME_VERSION = 79
}