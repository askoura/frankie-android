package com.example.reactfromassets

import android.annotation.SuppressLint
import android.os.Bundle
import android.webkit.WebSettings
import android.webkit.WebView
import androidx.appcompat.app.AppCompatActivity
import androidx.navigation.ui.AppBarConfiguration
import com.example.reactfromassets.databinding.ActivityMainBinding

class MainActivity : AppCompatActivity() {

    private lateinit var appBarConfiguration: AppBarConfiguration
    private lateinit var binding: ActivityMainBinding

    @SuppressLint("SetJavaScriptEnabled")
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

        binding = ActivityMainBinding.inflate(layoutInflater)
        setContentView(binding.root)
        binding.webview.settings.javaScriptEnabled = true
        binding.webview.settings.mixedContentMode = WebSettings.MIXED_CONTENT_ALWAYS_ALLOW;
        binding.webview.settings.domStorageEnabled = true
        if (BuildConfig.DEBUG) {
            WebView.setWebContentsDebuggingEnabled(true)
        }
        binding.webview.loadUrl("file:///android_asset/build/index.html?url=10.0.2.2:8081&sid=1");


    }
}