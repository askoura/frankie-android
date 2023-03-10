package com.frankie.app

import android.annotation.SuppressLint
import android.os.Bundle
import android.webkit.*
import android.widget.Toast
import androidx.appcompat.app.AppCompatActivity
import com.frankie.app.databinding.ActivityMainBinding
import com.frankie.expressionmanager.model.*
import java.util.*

class MainActivity : AppCompatActivity() {
    private lateinit var binding: ActivityMainBinding
    private lateinit var emNavProcessor: EMNavProcessor
    var backPressedTime: Long = 0

    @SuppressLint("SetJavaScriptEnabled")
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        binding = ActivityMainBinding.inflate(layoutInflater)
        emNavProcessor = EMNavProcessor(this)
        setContentView(binding.root)
        binding.webview.loadSurvey("1")
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
}