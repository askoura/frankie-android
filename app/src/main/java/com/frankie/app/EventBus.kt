package com.frankie.app

import com.frankie.app.api.survey.Survey
import kotlinx.coroutines.flow.MutableSharedFlow
import kotlinx.coroutines.flow.SharedFlow
import kotlinx.coroutines.flow.asSharedFlow

interface EventBus {

    val events: SharedFlow<AppEvent>

    suspend fun emitEvent(event: AppEvent)
}

class EventBusImpl : EventBus {

    private val mutableEvents = MutableSharedFlow<AppEvent>()

    override val events: SharedFlow<AppEvent> = mutableEvents.asSharedFlow()

    override suspend fun emitEvent(event: AppEvent) {
        mutableEvents.emit(event)
    }

}

sealed class AppEvent {
    data class UploadingResponse(val uploading: Boolean) : AppEvent()
    data class UploadingSurveyResponse(val surveyId: String) : AppEvent()
    data class UploadedSurveyResponse(val responseId:String, val survey: Survey) : AppEvent()
}