package com.frankie.app.ui.survey

import androidx.annotation.DrawableRes
import androidx.annotation.StringRes
import androidx.compose.foundation.background
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.material3.Icon
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.layout.ContentScale
import androidx.compose.ui.res.painterResource
import androidx.compose.ui.res.stringResource
import androidx.compose.ui.text.AnnotatedString
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.tooling.preview.Preview
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import coil.compose.AsyncImage
import com.frankie.app.R
import com.frankie.app.api.survey.PublishInfo
import com.frankie.app.business.survey.SurveyData
import com.frankie.app.ui.common.compose.boldValueString
import com.frankie.app.ui.common.toFormattedString
import java.time.LocalDateTime
import java.time.Month

@Composable
fun SurveyInfoScreen(surveyData: SurveyData) {
    Column {
        SurveyPhoto(title = surveyData.name, imageUrl = surveyData.imageUrl)
        if (surveyData.description.isNotEmpty()) {
            SurveyDescription(text = surveyData.description)
        }
        Column(modifier = Modifier.padding(16.dp)) {
            surveyData.getSurveyStats().forEach { data ->
                if (data.value != null && data.value != "-1") {
                    SurveyStats(
                        iconRes = data.iconRes, text = boldValueString(
                            descriptionRes = data.stringRes,
                            value = data.value
                        )
                    )
                }
            }
        }
    }
}

@Composable
private fun SurveyData.getSurveyStats() = listOf(
    SurveyStatsData(
        R.drawable.ic_checkmark,
        R.string.survey_status,
        status
    ),
    SurveyStatsData(
        R.drawable.ic_calendar,
        R.string.survey_creation_date,
        creationDate.toFormattedString()
    ),
    SurveyStatsData(
        R.drawable.ic_calendar_edit,
        R.string.survey_last_modified,
        lastModified.toFormattedString()
    ),
    SurveyStatsData(
        R.drawable.ic_calendar_month,
        R.string.survey_start_date,
        startDate?.toFormattedString()
    ),
    SurveyStatsData(
        R.drawable.ic_calendar_month,
        R.string.survey_end_date,
        endDate?.toFormattedString()
    ),
    SurveyStatsData(
        R.drawable.ic_list,
        R.string.survey_local_complete_responses,
        localCompleteResponsesCount.toString()
    ),
    SurveyStatsData(
        R.drawable.ic_list,
        R.string.survey_local_incomplete_responses,
        (localResponsesCount - localCompleteResponsesCount).toString()
    ),
    SurveyStatsData(
        R.drawable.ic_list,
        R.string.survey_local_responses,
        localResponsesCount.toString()
    ),
    SurveyStatsData(
        R.drawable.ic_sync,
        R.string.survey_synced_responses,
        syncedResponseCount.toString()
    ),
    SurveyStatsData(
        R.drawable.ic_sync_failed,
        R.string.survey_unsynced_responses,
        localUnsyncedResponsesCount.toString()
    ),
    SurveyStatsData(
        R.drawable.ic_baseline_assignment_24,
        R.string.survey_stats_quota,
        surveyQuota.toString()
    ),
    SurveyStatsData(
        R.drawable.ic_group,
        R.string.survey_stats_user_quota,
        userQuota.toString()
    ),
    SurveyStatsData(
        R.drawable.ic_stopwatch,
        R.string.survey_save_timings,
        saveTimings.toEnabledDisabledString()
    ),
    SurveyStatsData(
        R.drawable.ic_mic,
        R.string.survey_background_audio,
        backgroundAudio.toEnabledDisabledString()
    ),
    SurveyStatsData(
        R.drawable.ic_location,
        R.string.survey_record_gps,
        recordGps.toEnabledDisabledString()
    )
)

data class SurveyStatsData(
    @DrawableRes val iconRes: Int, @StringRes val stringRes: Int, val value: String?
)

@Composable
private fun Boolean.toEnabledDisabledString() =
    stringResource(
        id = if (this) {
            R.string.enabled
        } else {
            R.string.disabled
        }
    )

@Composable
private fun SurveyDescription(
    modifier: Modifier = Modifier, text: String, maxLines: Int = Int.MAX_VALUE
) {
    Text(
        modifier = modifier.padding(8.dp), text = text, maxLines = maxLines,
        fontSize = 16.sp
    )
}

@Composable
private fun SurveyPhoto(title: String, imageUrl: String) {
    Box(
        modifier = Modifier
            .fillMaxWidth()
            .height(200.dp)
            .background(Color.LightGray),
        contentAlignment = Alignment.BottomStart
    ) {
        Icon(
            modifier = Modifier.align(Alignment.Center),
            painter = painterResource(id = R.drawable.image_64),
            contentDescription = null
        )
        AsyncImage(
            model = imageUrl,
            modifier = Modifier
                .fillMaxSize(),
            contentScale = ContentScale.Crop,
            contentDescription = null
        )
        Text(
            modifier = Modifier.padding(16.dp), text = title, fontSize = 24.sp, fontWeight =
            FontWeight.Bold,
            color =
            Color.White
        )
    }
}

@Composable
private fun SurveyStats(
    modifier: Modifier = Modifier,
    @DrawableRes iconRes: Int,
    text: AnnotatedString
) {
    Row(verticalAlignment = Alignment.CenterVertically) {
        Icon(painter = painterResource(id = iconRes), contentDescription = null)
        Text(
            modifier = modifier.padding(horizontal = 16.dp, vertical = 4.dp),
            fontSize = 16.sp,
            text = text
        )
    }
}

@Composable
@Preview
private fun PreviewSurveyPhoto() {
    SurveyPhoto(
        title = "This is my survey",
        "https://www.mojkvart.hr/idnthumb.ashx?src=%2Flang%2Fstranica%2Flogo%2Flogo_672023.jpg&mw=398&mh=208&crop=0&forceDimension=1&hash=637123499480553706&level=201"
    )
}

@Composable
@Preview(showBackground = true)
private fun PreviewSurveyInfoScreen() {
    SurveyInfoScreen(
        surveyData = SurveyData(
            id = "someID",
            creationDate = LocalDateTime.of(2020, Month.MARCH, 2, 2, 1, 2),
            lastModified = LocalDateTime.now(), startDate = LocalDateTime.now().minusDays(1),
            endDate = LocalDateTime.now().plusDays(5),
            name = "My survey",
            status = "Aktivan",
            usage = "ki zna",
            surveyQuota = 20,
            userQuota = 1,
            publishInfo = PublishInfo(),
            newVersionAvailable = false,
            localResponsesCount = 10,
            localCompleteResponsesCount = 8,
            localUnsyncedResponsesCount = 3,
            syncedResponseCount = 5,
            totalResponseCount = 10,
            saveTimings = true,
            backgroundAudio = true,
            recordGps = true,
            description = "Lorem Ipsum is simply dummy text of the printing and typesetting " +
                    "industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            imageUrl = "https://www.mojkvart.hr/idnthumb.ashx?src=%2Flang%2Fstranica%2Flogo%2Flogo_672023.jpg&mw=398&mh=208&crop=0&forceDimension=1&hash=637123499480553706&level=201"
        )
    )
}