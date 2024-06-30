package com.frankie.app.ui.responses

import android.app.Application
import android.content.Context
import android.os.Handler
import android.os.Looper
import android.util.Log
import androidx.lifecycle.AndroidViewModel
import androidx.lifecycle.viewModelScope
import androidx.media3.common.MediaItem
import androidx.media3.exoplayer.ExoPlayer
import com.frankie.app.AppEvent
import com.frankie.app.EventBus
import com.frankie.app.business.responses.ResponseRepository
import com.frankie.app.business.survey.SurveyData
import com.frankie.app.db.model.Response
import com.frankie.app.ui.common.FileUtils
import com.frankie.app.ui.survey.EMNavProcessor
import com.frankie.expressionmanager.model.ResponseEvent
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.asStateFlow
import kotlinx.coroutines.flow.update
import kotlinx.coroutines.launch

class ResponsesViewModel(
    application: Application,
    private val responsesRepository: ResponseRepository,
    private val eventBus: EventBus,
) : AndroidViewModel(application) {
    private lateinit var surveyData: SurveyData
    private val _responsesScreenData = MutableStateFlow(ResponsesScreenState())
    val responsesScreenData = _responsesScreenData.asStateFlow()
    lateinit var emNavProcessor: EMNavProcessor
    private val exoPlayer by lazy { ExoPlayer.Builder(application).build() }
    private var currentPage: Int = 0
    private val timingHandler = Handler(Looper.getMainLooper())

    init {
        viewModelScope.launch(Dispatchers.IO) {
            eventBus.events.collect { event ->
                if (event is AppEvent.UploadedSurveyResponse && event.survey.id == surveyData.id) {
                    surveyData = surveyData.updateFromSurvey(event.survey)
                    refresh()
                }
            }
        }
    }

    fun fetchResponses(surveyData: SurveyData) {
        this.surveyData = surveyData
        _responsesScreenData.update {
            it.copy(
                completeResponsesCount = surveyData.localCompleteResponsesCount,
                inCompleteResponsesCount = surveyData.localResponsesCount - surveyData.localCompleteResponsesCount
            )
        }
        refresh()
    }

    fun refresh() {
        viewModelScope.launch {
            if (!_responsesScreenData.value.isLoading) {
                currentPage = 0
                _responsesScreenData.update { it.copy(isComplete = false, responses = emptyList()) }
                loadNext()
            }
        }
    }

    fun loadNext() {
        if (!_responsesScreenData.value.shouldLoad()) {
            return
        }
        viewModelScope.launch(Dispatchers.IO) {
            _responsesScreenData.update { it.copy(isLoading = true) }
            responsesRepository.getResponses(surveyData.id, currentPage++, PER_PAGE)
                .let { newList ->
                    val start = System.currentTimeMillis()
                    val count = newList.count { it.submitDate != null && !it.isSynced }
                    val quotaExceeded = surveyData.quotaExceeded(count)
                    emNavProcessor.maskedValues(newList).collect { response ->
                        _responsesScreenData.update {
                            it.copy(isLoading = false,
                                isComplete = newList.size < PER_PAGE,
                                responses = it.responses.toMutableList()
                                    .apply {
                                        val audioRecording = response.events
                                            .filterIsInstance<ResponseEvent.VoiceRecording>()
                                            .firstOrNull()

                                        add(
                                            ResponseItemData(
                                                response,
                                                editEnabled = !quotaExceeded && response
                                                    .submitDate == null,
                                                audioRecordingData = audioRecording?.let { recording ->
                                                    val filePath = recording.getFilePath(
                                                        context = this@ResponsesViewModel.getApplication(),
                                                        surveyId = surveyData.id
                                                    )
                                                    AudioRecordingData(
                                                        FileUtils.getDuration(filePath)
                                                            ?.roundToThousand() ?: 0,
                                                        filePath
                                                    )
                                                }
                                            )
                                        )
                                    })
                        }
                    }
                    Log.d(
                        "time",
                        "loadNext ${System.currentTimeMillis() - start}"
                    )
                }
        }
    }

    fun deleteResponse(responseId: String) {
        viewModelScope.launch(Dispatchers.IO) {
            responsesRepository.deleteResponse(responseId).let {
                _responsesScreenData.update { screenData ->
                    val list = screenData.responses.filter { it.responseValue.id != responseId }
                    val count =
                        list.count { it.responseValue.submitDate != null && !it.responseValue.isSynced }
                    val quotaExceeded = surveyData.quotaExceeded(count)
                    screenData.copy(responses = list.map { it.copy(editEnabled = !quotaExceeded) })
                }
            }
        }
    }

    private var currentMediaPath = ""

    // TODO show proper timing when playing
    fun onPlayClicked(responseItemData: ResponseItemData) {
        responseItemData.audioRecordingData?.audioPath?.let { path ->
            if (currentMediaPath != path) {
                currentMediaPath = path
                exoPlayer.stop()
                exoPlayer.removeMediaItems(0, exoPlayer.mediaItemCount)
                exoPlayer.addMediaItem(MediaItem.fromUri(path))
                exoPlayer.prepare()
            }

            exoPlayer.play()
            timingHandler.post(object : Runnable {
                override fun run() {
                    _responsesScreenData.update { state ->
                        Log.e("exoplayer", exoPlayer.currentPosition.toString())
                        state.copy(responses = state.responses.map {
                            if (responseItemData.responseValue.id == it
                                    .responseValue.id
                            ) {
                                it.copy(
                                    audioRecordingData = it.audioRecordingData?.copy
                                        (
                                        isPlaying = true,
                                        currentTime = exoPlayer.currentPosition.roundToThousand()
                                    )
                                )
                            } else {
                                it
                            }
                        })
                    }
                    timingHandler.postDelayed(this, 1000)
                }
            })
        }
    }

    fun onPauseClicked() {
        exoPlayer.pause()
        timingHandler.removeCallbacksAndMessages(null)
        _responsesScreenData.update { state ->
            state.copy(responses = state.responses.map {
                if (it.audioRecordingData?.isPlaying == true) {
                    it.copy(audioRecordingData = it.audioRecordingData.copy(isPlaying = false))
                } else {
                    it
                }
            })
        }
    }

    fun onSeekToo(responseItemData: ResponseItemData, position: Long) {
        _responsesScreenData.update { state ->
            state.copy(responses = state.responses.map {
                if (responseItemData.responseValue.id == it.responseValue.id
                ) {
                    it.copy(audioRecordingData = it.audioRecordingData?.copy(currentTime = position))
                } else {
                    it
                }
            })
        }
        responseItemData.audioRecordingData?.audioPath?.let { path ->
            if (currentMediaPath == path) {
                exoPlayer.seekTo(position)
            }
        }
    }

    override fun onCleared() {
        super.onCleared()
        timingHandler.removeCallbacksAndMessages(null)
        emNavProcessor.destroy()
        exoPlayer.release()
    }

    companion object {
        private const val PER_PAGE = 10
    }
}

data class ResponseItemData(
    val responseValue: Response, val editEnabled: Boolean, val
    audioRecordingData: AudioRecordingData? = null
)

data class AudioRecordingData(
    val audioDuration: Long, val audioPath: String, val isPlaying:
    Boolean = false, val currentTime: Long = 0
)

private fun ResponseEvent.VoiceRecording.getFilePath(context: Context, surveyId: String) =
    FileUtils.getResponseFile(context, fileName, surveyId).absolutePath

private fun Long.roundToThousand(): Long {
    val remainder = this % 1000
    return if (remainder >= 500) {
        this + (1000 - remainder)
    } else {
        this - remainder
    }
}