package com.frankie.app.ui.responses

import androidx.compose.foundation.background
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.defaultMinSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.items
import androidx.compose.foundation.lazy.rememberLazyListState
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.Delete
import androidx.compose.material.icons.filled.Edit
import androidx.compose.material3.Button
import androidx.compose.material3.Icon
import androidx.compose.material3.IconButton
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.runtime.derivedStateOf
import androidx.compose.runtime.remember
import androidx.compose.ui.Alignment
import androidx.compose.ui.Alignment.Companion.Center
import androidx.compose.ui.Modifier
import androidx.compose.ui.res.stringResource
import androidx.compose.ui.text.AnnotatedString
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.tooling.preview.Preview
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import com.frankie.app.R
import com.frankie.app.db.model.Response
import com.frankie.app.ui.common.compose.boldDescriptionString
import com.frankie.app.ui.common.compose.boldValueString
import com.frankie.app.ui.common.theme.Color
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
    onSyncClicked: () -> Unit,
    onEditClicked: (String) -> Unit,
    onDeleteClicked: (String) -> Unit,
    screenState: ResponsesScreenState
) {
    val lazyListState = rememberLazyListState()

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
            Box(
                modifier = Modifier
                    .fillMaxWidth()
                    .padding(bottom = 16.dp),
                contentAlignment = Center
            ) {
                Button(
                    modifier = Modifier.defaultMinSize(minWidth = 140.dp),
                    onClick = onSyncClicked
                ) {
                    Text(text = stringResource(R.string.responses_screen_sync_button))
                }
            }
        }

        items(screenState.responses) {
            ResponseItem(responseItem = it, onEditClicked, onDeleteClicked)
        }
    }
}

@Composable
private fun ResponseItem(
    responseItem: ResponseItemData,
    onEditClicked: (String) -> Unit = {},
    onDeleteClicked: (String) -> Unit = {}
) {
    Column {
        Row(
            verticalAlignment = Alignment.CenterVertically,
            modifier = Modifier
                .background(Color.LightBlue)
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
        ), submitDate = LocalDateTime.now(), userId = "userId", values = mapOf(), 1, listOf()
    )
    ResponsesScreen(
        modifier = Modifier,
        onLoadNext = { },
        onSyncClicked = { },
        onEditClicked = {},
        onDeleteClicked = {},
        screenState = ResponsesScreenState(
            isLoading = false,
            responses = listOf(ResponseItemData(response, true)),
            completeResponsesCount = 3,
            inCompleteResponsesCount = 2,
            lastSyncTime = LocalDateTime.now(),
            isComplete = false
        )
    )
}

@Preview(showBackground = true)
@Composable
private fun PreviewResponseItem() {
    val response = Response(
        "550e8400-e29b-41d4-a716-446655440000",
        NavigationIndex.End(""), true, "Eng", "someSurveyID", LocalDateTime.of(
            2024, Month.MARCH, 26,
            2, 15
        ), submitDate = LocalDateTime.now(), userId = "userId", values = mapOf(), 1, listOf()
    )
    ResponseItem(ResponseItemData(response, true))
}
