package com.example.reactfromassets

import android.annotation.SuppressLint
import android.os.Bundle
import android.webkit.*
import androidx.appcompat.app.AppCompatActivity
import com.example.reactfromassets.databinding.ActivityMainBinding
import com.frankie.expressionmanager.model.*
import com.frankie.expressionmanager.usecase.ApiNavigationOutput
import java.util.*

class MainActivity : AppCompatActivity() {
    private lateinit var binding: ActivityMainBinding
    private lateinit var emNavProcessor: EMNavProcessor
    private lateinit var frankieDb: FrankieDb

    @SuppressLint("SetJavaScriptEnabled")
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        frankieDb = FrankieDb.getDatabase(this)
        binding = ActivityMainBinding.inflate(layoutInflater)
        emNavProcessor = EMNavProcessor(this)
        setContentView(binding.root)
        binding.webview.customDomain = CUSTOM_DOMAIN
        binding.webview.loadSurvey("1")
        binding.webview.navigateListen =
            { apiUseCaseInput: ApiUseCaseInput, navListener: (ApiNavigationOutput) -> Unit ->
                navigate(apiUseCaseInput, navListener)
            }
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
                TODO("Not yet implemented")
            }
        })
    }


    companion object {
        private const val CUSTOM_DOMAIN = "CUSTOM_DOMAIN"
    }
}