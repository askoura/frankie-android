package com.frankie.app.ui.survey

import android.content.Context
import android.content.Intent
import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.compose.foundation.layout.padding
import androidx.compose.material3.Scaffold
import androidx.compose.ui.Modifier
import androidx.compose.ui.res.stringResource
import com.frankie.app.R
import com.frankie.app.business.parcelable
import com.frankie.app.business.survey.SurveyData
import com.frankie.app.ui.common.theme.FrankieTheme
import com.frankie.app.ui.common.theme.FrankieTopBar

class SurveyInfoActivity : ComponentActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        val surveyData: SurveyData = intent.parcelable(EXTRA_SURVEY)
            ?: throw IllegalArgumentException("Survey is missing!")
        setContent {
            FrankieTheme {
                Scaffold(
                    topBar = {
                        FrankieTopBar(title = stringResource(id = R.string.title_activity_info)) {
                            onBackPressedDispatcher.onBackPressed()
                        }
                    }
                ) { paddingValues ->
                    SurveyInfoScreen(
                        modifier = Modifier.padding(paddingValues),
                        surveyData = surveyData
                    )
                }
            }
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