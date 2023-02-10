package com.example.reactfromassets

import android.annotation.SuppressLint
import android.os.Bundle
import android.util.Log
import android.webkit.*
import androidx.appcompat.app.AppCompatActivity
import com.example.reactfromassets.databinding.ActivityMainBinding
import com.frankie.expressionmanager.usecase.ScriptEngine
import com.frankie.expressionmanager.usecase.ValidationUseCaseWrapperImpl

class MainActivity : AppCompatActivity() {

    private lateinit var binding: ActivityMainBinding

    @SuppressLint("SetJavaScriptEnabled")
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

        binding = ActivityMainBinding.inflate(layoutInflater)
        setContentView(binding.root)
        binding.webview.loadUrl("file:///android_asset/build/index.html?url=18.198.94.221:8081&sid=1")
        val impl = ValidationUseCaseWrapperImpl(
            object : ScriptEngine {
                override fun executeScript(method: String, script: String): String {
                    return ""
                }
            },
            application.assets.open("surveyFile.json").bufferedReader().use {
                it.readText()
            }
        )

        val koko = impl.validate()
        Log.v("blah", koko.toString())

    }
}