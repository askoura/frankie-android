package com.frankie.app.ui.survey

import android.content.Context
import android.content.Intent
import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import com.frankie.app.business.parcelable
import com.frankie.app.business.survey.SurveyData

class SurveyInfoActivity : ComponentActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        val surveyData: SurveyData = intent.parcelable(EXTRA_SURVEY)
            ?: throw IllegalArgumentException("Survey is missing!")
        setContent {
            SurveyInfoScreen(surveyData = surveyData)
        }
    }

    companion object {
        private const val EXTRA_SURVEY = "SURVEY_DATA"
        fun createIntent(context: Context, surveyData: SurveyData) = Intent(
            context,
            SurveyInfoActivity::class.java
        ).apply {
            putExtra(EXTRA_SURVEY, surveyData)
        }
    }
}