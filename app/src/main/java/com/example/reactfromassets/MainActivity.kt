package com.example.reactfromassets

import android.annotation.SuppressLint
import android.os.Bundle
import android.util.Log
import android.webkit.*
import androidx.appcompat.app.AppCompatActivity
import androidx.webkit.WebViewCompat
import com.example.reactfromassets.databinding.ActivityMainBinding
import com.fasterxml.jackson.module.kotlin.jacksonTypeRef
import com.frankie.expressionmanager.model.NavigationUseCaseInput
import com.frankie.expressionmanager.model.SurveyLang
import com.frankie.expressionmanager.model.jacksonKtMapper
import com.frankie.expressionmanager.usecase.NavigationJsonOutput
import com.frankie.expressionmanager.usecase.ValidationJsonOutput

class MainActivity : AppCompatActivity() {
    private lateinit var binding: ActivityMainBinding
    private lateinit var emNavProcessor: EMNavProcessor

    @SuppressLint("SetJavaScriptEnabled")
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        binding = ActivityMainBinding.inflate(layoutInflater)
        emNavProcessor = EMNavProcessor(this)
        setContentView(binding.root)
        binding.webview.loadUrl("file:///android_asset/build/index.html?url=18.198.94.221:8081&sid=1")
//        binding.webview.loadUrl("http://18.198.94.221:3000/?url=18.198.94.221:8081&sid=1&lang=en&navigation_mode=ALL_IN_ONE")

    }

    override fun onStart() {
        super.onStart()
//        binding.root.postDelayed({ navigate() }, 2000)
    }

    fun navigate() {
        val processedComponents: String =
            application.assets.open("processed_1.json").bufferedReader().use {
                it.readText()
            }
        val validationJsonOutput: ValidationJsonOutput =
            jacksonKtMapper.readValue(processedComponents, jacksonTypeRef<ValidationJsonOutput>())
        val navigationUseCaseInput = NavigationUseCaseInput(defaultLang = SurveyLang.EN)
        emNavProcessor.navigate(
            validationJsonOutput,
            navigationUseCaseInput,
            object : NavigationListener {
                override fun onResult(navigationJsonOutput: NavigationJsonOutput) {
                    Log.v(TAG, navigationJsonOutput.toString())
                }

                override fun onError(error: Throwable) {
                    error.printStackTrace()
                }
            })
    }

    companion object {
        private const val TAG = "MainActivity"
    }
}