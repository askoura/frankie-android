package com.frankie.app.ui.survey

import androidx.annotation.DrawableRes
import androidx.annotation.StringRes
import androidx.compose.foundation.background
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.size
import androidx.compose.material3.Card
import androidx.compose.material3.Icon
import androidx.compose.material3.IconButton
import androidx.compose.material3.Surface
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.layout.ContentScale
import androidx.compose.ui.res.painterResource
import androidx.compose.ui.res.stringResource
import androidx.compose.ui.text.AnnotatedString
import androidx.compose.ui.text.buildAnnotatedString
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.tooling.preview.Preview
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import coil.compose.AsyncImage
import com.frankie.app.R
import com.frankie.app.api.survey.PublishInfo
import com.frankie.app.business.survey.SurveyData
import com.frankie.app.ui.common.compose.boldValueString
import com.frankie.app.ui.common.theme.Colors
import com.frankie.app.ui.common.theme.FrankieTheme
import com.frankie.app.ui.common.theme.PrimaryActionButton
import com.frankie.app.ui.common.theme.SecondaryActionButton
import com.frankie.app.ui.common.toElapsedTime
import com.frankie.app.ui.common.toFormattedString
import java.time.LocalDateTime
import java.time.Month

@Composable
fun SurveyInfoScreen(modifier: Modifier = Modifier, surveyData: SurveyData) {
    Column(modifier = modifier) {
        SurveyPhoto(imageUrl = surveyData.imageUrl)
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
fun SurveyListItem(
    modifier: Modifier = Modifier,
    surveyData: SurveyData,
    onResponsesClick: (SurveyData) -> Unit = {},
    onInfoClick: (SurveyData) -> Unit = {},
    onStartClick: (SurveyData) -> Unit = {},
    onDownloadClick: (SurveyData) -> Unit = {}
) {
    Surface(modifier.padding(vertical = 4.dp)) {
        Card() {
            Column(modifier = Modifier.padding(bottom = 8.dp)) {
                SurveyPhoto(imageUrl = surveyData.imageUrl)
                SurveyTitleAndInfo(
                    text = surveyData.name,
                    onInfoClick = { onInfoClick(surveyData) })
                if (surveyData.description.isNotEmpty()) {
                    SurveyDescription(text = surveyData.description, maxLines = 3)
                }
                Row(modifier = Modifier.fillMaxWidth()) {
                    Column(
                        modifier = Modifier
                            .weight(1f)
                            .padding(horizontal = 8.dp)
                    ) {
                        SurveyStats(iconRes = R.drawable.ic_calendar, text = buildAnnotatedString {
                            append(
                                "${stringResource(id = R.string.survey_last_modified)} ${
                                    surveyData
                                        .lastModified.toElapsedTime()
                                }"
                            )
                        })
                        if (surveyData.endDate != null) {
                            SurveyStats(
                                iconRes = R.drawable.ic_stopwatch,
                                text = buildAnnotatedString {
                                    append(stringResource(id = R.string.survey_item_expires))
                                })
                        }
                        if (surveyData.surveyQuota >= 0) {
                            SurveyStats(
                                iconRes = R.drawable.ic_baseline_assignment_24,
                                text = buildAnnotatedString {
                                    append(
                                        stringResource(
                                            id = R.string.survey_item_quota_left,
                                            surveyData.surveyQuota
                                        )
                                    )
                                })
                        }
                    }
                }

                Row(
                    modifier = Modifier
                        .fillMaxWidth()
                        .padding(8.dp),
                    horizontalArrangement = Arrangement.End
                ) {
                    if (surveyData.isResponsesEnabled) {
                        SecondaryActionButton(
                            modifier = Modifier.padding(end = 8.dp),
                            text = buildAnnotatedString {
//                        val text = stringResource(
//                            id = R.string.survey_item_button_responses,
//                            surveyData.localResponsesCount,
//                            surveyData.localCompleteResponsesCount
//                        )
//                        append(text.substringBefore(" "))
//                        withStyle(SpanStyle(fontSize = 16.sp)) {
//                            append(text.substringAfter(" "))
//                        }
                                append(stringResource(id = R.string.survey_item_button_responses_single_line))
                            }, onClick = { onResponsesClick(surveyData) }
                        )
                    }
                    if (surveyData.newVersionAvailable) {
                        PrimaryActionButton(modifier = Modifier,
                            textRes = R.string.survey_item_button_download,
                            onClick = { onDownloadClick(surveyData) })
                    } else {
                        PrimaryActionButton(modifier = Modifier,
                            textRes = R.string.survey_item_button_start,
                            enabled = surveyData.isPlayEnabled,
                            onClick = { onStartClick(surveyData) })
                    }
                }
            }
        }
    }
}

// TODO: show update available
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
        modifier = modifier.padding(vertical = 4.dp, horizontal = 8.dp), text = text, maxLines =
        maxLines,
        fontSize = 16.sp
    )
}

@Composable
private fun SurveyTitleAndInfo(
    modifier: Modifier = Modifier, text: String, onInfoClick: () -> Unit
) {
    Row(
        verticalAlignment = Alignment.CenterVertically, modifier =
        modifier.padding(vertical = 0.dp, horizontal = 8.dp)
    ) {
        Text(
            modifier = Modifier.weight(1f),
            text = text,
            fontSize = 24.sp,
            fontWeight = FontWeight.Bold
        )
        IconButton(onClick = onInfoClick) {
            Icon(
                modifier = Modifier.size(48.dp),
                painter = painterResource(id = R.drawable.ic_outline_info_24),
                contentDescription = null
            )
        }
    }
}

@Composable
private fun SurveyPhoto(imageUrl: String) {
    Box(
        modifier = Modifier
            .fillMaxWidth()
            .height(200.dp)
            .background(Colors.LightGray),
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
//        Text(
//            modifier = Modifier.padding(16.dp), text = title, fontSize = 24.sp, fontWeight =
//            FontWeight.Bold,
//            color =
//            Color.White
//        )
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
@Preview(showBackground = true)
fun PreviewSurveyListItem() {
    FrankieTheme {
        SurveyListItem(surveyData = getPreviewSurveyData())
    }
}

@Composable
@Preview(showBackground = true)
fun PreviewSurveyInfoScreen(
) {
    SurveyInfoScreen(
        surveyData = getPreviewSurveyData()
    )
}

private fun getPreviewSurveyData() = SurveyData(
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
    newVersionAvailable = true,
    localResponsesCount = 10,
    localCompleteResponsesCount = 8,
    localUnsyncedResponsesCount = 3,
    syncedResponseCount = 5,
    totalResponseCount = 10,
    saveTimings = true,
    backgroundAudio = true,
    recordGps = true,
    description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    imageUrl = "https://www.mojkvart.hr/idnthumb.ashx?src=%2Flang%2Fstranica%2Flogo%2Flogo_672023.jpg&mw=398&mh=208&crop=0&forceDimension=1&hash=637123499480553706&level=201"
)
