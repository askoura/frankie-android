package com.example.reactfromassets

import android.annotation.SuppressLint
import android.os.Bundle
import android.webkit.*
import android.widget.Toast
import androidx.appcompat.app.AppCompatActivity
import com.example.reactfromassets.databinding.ActivityMainBinding
import com.example.reactfromassets.db.FrankieDb
import com.frankie.expressionmanager.model.*
import com.frankie.expressionmanager.usecase.ApiNavigationOutput
import java.util.*

class MainActivity : AppCompatActivity() {
    private lateinit var binding: ActivityMainBinding
    private lateinit var emNavProcessor: EMNavProcessor
    private lateinit var frankieDb: FrankieDb
    var backPressedTime: Long = 0

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

    @Deprecated("Use Fancy new method")
    override fun onBackPressed() {
        binding.webview.onBack {
            if (!it) {
                val t = System.currentTimeMillis()
                if (t - backPressedTime > 3000) { // 3 secs
                    backPressedTime = t
                    Toast.makeText(this, "Press back again to exit.", Toast.LENGTH_SHORT).show()
                } else {
                    finish()
                }
            }
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
//                TODO("Show an error Dialog")
            }
        })
    }


    companion object {
        private const val CUSTOM_DOMAIN = "CUSTOM_DOMAIN"
    }
}