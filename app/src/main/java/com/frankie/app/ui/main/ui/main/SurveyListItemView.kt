package com.frankie.app.ui.main.ui.main

import android.content.Context
import android.util.AttributeSet
import androidx.compose.foundation.layout.padding
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.platform.AbstractComposeView
import androidx.compose.ui.unit.dp
import com.frankie.app.business.survey.SurveyData
import com.frankie.app.ui.common.theme.FrankieTheme
import com.frankie.app.ui.survey.SurveyListItem


class SurveyListItemView(
    context: Context,
    attrs: AttributeSet? = null,
    defStyle: Int = 0,
) : AbstractComposeView(context, attrs, defStyle) {

    private var surveyData: SurveyData? = null
    private var onPlayClicked: (SurveyData) -> Unit = {}
    private var onResponsesClicked: (SurveyData) -> Unit = {}
    private var onInfoClicked: (SurveyData) -> Unit = {}
    private var onDownloadClicked: (SurveyData) -> Unit = {}

    fun setup(
        surveyData: SurveyData,
        onPlayClicked: (SurveyData) -> Unit,
        onResponsesClicked: (SurveyData) -> Unit,
        onInfoClicked: (SurveyData) -> Unit,
        onDownloadClicked: (SurveyData) -> Unit
    ) {
        this.surveyData = surveyData
        this.onPlayClicked = onPlayClicked
        this.onDownloadClicked = onDownloadClicked
        this.onResponsesClicked = onResponsesClicked
        this.onInfoClicked = onInfoClicked
    }

    @Composable
    override fun Content() {
        surveyData?.let {
            FrankieTheme {
                SurveyListItem(
                    modifier = Modifier.padding(bottom = 16.dp),
                    surveyData = it,
                    onResponsesClick = onResponsesClicked,
                    onInfoClick = onInfoClicked,
                    onDownloadClick = onDownloadClicked,
                    onStartClick = onPlayClicked,
                )
            }
        }
    }

}