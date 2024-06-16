package com.frankie.app.ui.main.ui.main

import android.content.Context
import android.util.AttributeSet
import androidx.compose.runtime.Composable
import androidx.compose.ui.platform.AbstractComposeView
import com.frankie.app.business.survey.SurveyData
import com.frankie.app.ui.survey.SurveyListItem


class SurveyListItemView(
    context: Context,
    attrs: AttributeSet? = null,
    defStyle: Int = 0,
) : AbstractComposeView(context, attrs, defStyle) {

    var surveyData: SurveyData? = null
    var onSyncClicked: (SurveyData) -> Unit = {}
    var onPlayClicked: (SurveyData) -> Unit = {}
    var onResponsesClicked: (SurveyData) -> Unit = {}
    var onInfoClicked: (SurveyData) -> Unit = {}
    var onDownloadClicked: (SurveyData) -> Unit = {}

    fun setup(
        surveyData: SurveyData,
        onSyncClicked: (SurveyData) -> Unit,
        onPlayClicked: (SurveyData) -> Unit,
        onResponsesClicked: (SurveyData) -> Unit,
        onInfoClicked: (SurveyData) -> Unit,
        onDownloadClicked: (SurveyData) -> Unit
    ) {
        this.surveyData = surveyData
        this.onPlayClicked = onPlayClicked
        this.onSyncClicked = onSyncClicked
        this.onDownloadClicked = onDownloadClicked
        this.onResponsesClicked = onResponsesClicked
        this.onInfoClicked = onInfoClicked
    }

    @Composable
    override fun Content() {
        surveyData?.let {
            SurveyListItem(
                surveyData = it,
                onResponsesClick = onResponsesClicked,
                onInfoClick = onInfoClicked,
                onDownloadClick = onDownloadClicked,
                onStartClick = onPlayClicked,
                onSyncClick = onSyncClicked
            )
        }
    }

}