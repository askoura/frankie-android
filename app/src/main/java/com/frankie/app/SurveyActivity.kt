package com.frankie.app

import android.annotation.SuppressLint
import android.content.Context
import android.content.Intent
import android.os.Bundle
import android.webkit.*
import android.widget.Toast
import androidx.appcompat.app.AppCompatActivity
import com.frankie.app.databinding.ActivitySurveyBinding
import com.frankie.expressionmanager.model.*
import java.util.*

class SurveyActivity : AppCompatActivity() {
    private lateinit var binding: ActivitySurveyBinding
    var backPressedTime: Long = 0

    @SuppressLint("SetJavaScriptEnabled")
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        binding = ActivitySurveyBinding.inflate(layoutInflater)
        setContentView(binding.root)
        val surveyId = intent.getStringExtra(SURVEY_ID)
                ?: throw IllegalArgumentException("Survey ID is required")
        binding.webview.loadSurvey(surveyId)
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

    companion object {
        private const val SURVEY_ID = "survey_id"
        fun createIntent(context: Context, surveyId: String): Intent =
                Intent(context, SurveyActivity::class.java).apply {
                    putExtra(SURVEY_ID, surveyId)
                }
    }
}