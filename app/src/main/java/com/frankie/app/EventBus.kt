package com.frankie.app

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
    object ResponsesUploaded : AppEvent()
}