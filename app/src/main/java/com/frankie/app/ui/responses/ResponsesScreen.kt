package com.frankie.app.ui.responses

import androidx.compose.foundation.background
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.items
import androidx.compose.foundation.lazy.rememberLazyListState
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.Delete
import androidx.compose.material.icons.filled.Edit
import androidx.compose.material3.Icon
import androidx.compose.material3.IconButton
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.runtime.derivedStateOf
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.platform.LocalContext
import androidx.compose.ui.res.stringResource
import androidx.compose.ui.text.AnnotatedString
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.tooling.preview.Preview
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import androidx.media3.common.MediaItem
import androidx.media3.exoplayer.ExoPlayer
import com.frankie.app.R
import com.frankie.app.db.model.Response
import com.frankie.app.ui.audioplayer.AudioPlayer
import com.frankie.app.ui.common.compose.boldDescriptionString
import com.frankie.app.ui.common.compose.boldValueString
import com.frankie.app.ui.common.theme.Colors
import com.frankie.app.ui.common.theme.FrankieTheme
import com.frankie.app.ui.common.toFormattedString
import com.frankie.expressionmanager.model.NavigationIndex
import java.time.LocalDateTime
import java.time.Month


data class ResponsesScreenState(
    val isSyncing: Boolean = false,
    val isLoading: Boolean = false,
    val responses: List<ResponseItemData> = listOf(),
    val completeResponsesCount: Int = 0,
    val inCompleteResponsesCount: Int = 0,
    val lastSyncTime: LocalDateTime? = null,
    val isComplete: Boolean = false
) {
    fun shouldLoad() = !(isLoading || isComplete)
}

@Composable
fun ResponsesScreen(
    modifier: Modifier,
    onLoadNext: () -> Unit,
    onEditClicked: (String) -> Unit,
    onDeleteClicked: (String) -> Unit,
    exoPlayer: ExoPlayer,
    screenState: ResponsesScreenState
) {
    val lazyListState = rememberLazyListState()
    var currentAudioPath by remember {
        mutableStateOf("")
    }

    val shouldPaginate = remember(screenState, lazyListState) {
        derivedStateOf {
            val lastVisibleItemIndex =
                lazyListState.layoutInfo.visibleItemsInfo.lastOrNull()?.index
                    ?: return@derivedStateOf false
            val value = screenState.shouldLoad() && screenState.responses.isNotEmpty() &&
                    lastVisibleItemIndex >= screenState.responses.size - 9
            value
        }
    }

    LaunchedEffect(key1 = shouldPaginate.value, screenState.responses.size) {
        if (shouldPaginate.value) {
            onLoadNext()
        }
    }

    LazyColumn(modifier = modifier) {
        item {
            StatText(
                text = boldValueString(
                    R.string.responses_screen_complete_responses,
                    screenState.completeResponsesCount.toString()
                )
            )
            StatText(
                text = boldValueString(
                    R.string.responses_screen_incomplete_responses,
                    screenState.inCompleteResponsesCount.toString()
                )
            )
            StatText(
                text = boldValueString(
                    R.string.responses_screen_last_sync_time,
                    screenState.lastSyncTime?.toFormattedString()
                        ?: stringResource(id = R.string.sync_time_never)
                )
            )
        }

        items(screenState.responses) {
            ResponseItem(responseItem = it,
                isPlaying = exoPlayer.isPlaying
                        && currentAudioPath.isNotEmpty()
                        && currentAudioPath == it.audioRecordingData?.audioPath,
                currentTime = if (currentAudioPath == it.audioRecordingData?.audioPath) {
                    exoPlayer.currentPosition
                } else {
                    0
                },
                onEditClicked = onEditClicked,
                onDeleteClicked = onDeleteClicked,
                onPlayClicked = { path ->
                    if (exoPlayer.isPlaying) {
                        exoPlayer.stop()
                        exoPlayer.removeMediaItems(0, exoPlayer.mediaItemCount)
                    }
                    currentAudioPath = path
                    exoPlayer.addMediaItem(MediaItem.fromUri(path))
                    exoPlayer.prepare()
                    exoPlayer.play()
                },
                onPauseClicked = { path ->
                    exoPlayer.pause()
                },
                sliderPositionChanged = { item, position ->
                    if (currentAudioPath == item.audioRecordingData?.audioPath) {
                        exoPlayer.seekTo(position)
                    }
                })
        }
    }
}

@Composable
private fun ResponseItem(
    responseItem: ResponseItemData,
    isPlaying: Boolean = false,
    currentTime: Long = 0,
    onEditClicked: (String) -> Unit = {},
    onDeleteClicked: (String) -> Unit = {},
    onPlayClicked: (path: String) -> Unit = {},
    onPauseClicked: (path: String) -> Unit = {},
    sliderPositionChanged: (ResponseItemData, Long) -> Unit = { _, _ -> }
) {
    Column {
        Row(
            verticalAlignment = Alignment.CenterVertically,
            modifier = Modifier
                .background(Colors.LightBlue)
                .padding(start = 16.dp)
        ) {
            Text(
                modifier = Modifier.weight(1f),
                fontWeight = FontWeight.SemiBold,
                text = responseItem.responseValue.id
            )
            if (responseItem.editEnabled) {
                IconButton(onClick = { onEditClicked(responseItem.responseValue.id) }) {
                    Icon(Icons.Filled.Edit, contentDescription = "Edit")
                }
            }
            IconButton(onClick = { onDeleteClicked(responseItem.responseValue.id) }) {
                Icon(Icons.Filled.Delete, contentDescription = "Delete")
            }
        }
        StatText(
            text = boldValueString(
                R.string.response_item_started,
                responseItem.responseValue.startDate.toFormattedString()
            )
        )
        responseItem.responseValue.submitDate?.let { endDate ->
            StatText(
                text = boldValueString(
                    R.string.response_item_completed,
                    endDate.toFormattedString()
                )
            )
        }
        Row(verticalAlignment = Alignment.CenterVertically) {
            StatText(
                modifier = Modifier.weight(1f),
                text = boldValueString(
                    R.string.response_item_synced,
                    responseItem.responseValue.isSynced.toString()
                )
            )
            StatText(
                modifier = Modifier.weight(1f),
                text = boldValueString(
                    R.string.response_item_language,
                    value = responseItem.responseValue.lang
                )
            )
        }
        if (responseItem.audioRecordingData != null) {
            AudioPlayer(
                modifier = Modifier.padding(horizontal = 16.dp),
                sliderPositionChanged = { sliderPositionChanged(responseItem, it) },
                onPlayClicked = { onPlayClicked(responseItem.audioRecordingData.audioPath) },
                onPauseClicked = { onPauseClicked(responseItem.audioRecordingData.audioPath) },
                totalAudioDuration = responseItem.audioRecordingData.audioDuration,
                currentTime = currentTime,
                isPlaying = isPlaying,
            )
        }
        responseItem.responseValue.values.forEach { (key, value) ->
            StatText(
                text = boldDescriptionString(
                    description = key,
                    value = value.toString()
                )
            )
        }
    }
}

@Composable
private fun StatText(
    modifier: Modifier = Modifier,
    text: AnnotatedString
) {
    Text(
        modifier = modifier.padding(horizontal = 16.dp, vertical = 4.dp),
        fontSize = 16.sp,
        text = text
    )
}

@Preview(showBackground = true)
@Composable
private fun PreviewResponseScreen() {
    val response = Response(
        "550e8400-e29b-41d4-a716-446655440000",
        NavigationIndex.End(""), true, "Eng", "someSurveyID", LocalDateTime.of(
            2024, Month.MARCH, 26,
            2, 15
        ), submitDate = LocalDateTime.now(),
        values = mapOf(
            "Q1" to "Value1", "Q2" to "Answer2", "Q3" to "little longer answer",
            "Question4" to "Little longer answer, still going... And still la lalala.", "Key" to
                    "Value "
        ),
        version
        = 1,
        events = emptyList()
    )
    FrankieTheme {
        ResponsesScreen(
            modifier = Modifier,
            onLoadNext = { },
            onEditClicked = {},
            onDeleteClicked = {},
            exoPlayer = ExoPlayer.Builder(LocalContext.current).build(),
            screenState = ResponsesScreenState(
                isLoading = false,
                responses = listOf(
                    ResponseItemData(response, editEnabled = true),
                    ResponseItemData(response, editEnabled = true),
                    ResponseItemData(response, editEnabled = true)
                ),
                completeResponsesCount = 3,
                inCompleteResponsesCount = 2,
                lastSyncTime = LocalDateTime.now(),
                isComplete = false
            )
        )
    }
}

@Preview(showBackground = true)
@Composable
private fun PreviewResponseItem() {
    val response = Response(
        "550e8400-e29b-41d4-a716-446655440000",
        NavigationIndex.End(""), true, "Eng", "someSurveyID", LocalDateTime.of(
            2024, Month.MARCH, 26,
            2, 15
        ), submitDate = LocalDateTime.now(), values = mapOf(), 1, listOf()
    )
    FrankieTheme {
        ResponseItem(ResponseItemData(response, editEnabled = true))
    }
}

