package com.frankie.app.ui.main.ui.main

import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import com.frankie.app.AppEvent
import com.frankie.app.EventBus
import com.frankie.app.business.auth.LogoutUseCase
import com.frankie.app.business.settings.SharedPrefsManager
import com.frankie.app.business.survey.BackgroundSync
import com.frankie.app.business.survey.SurveyData
import com.frankie.app.business.survey.SurveyRepository
import com.frankie.app.storage.DownloadManager
import com.frankie.app.storage.DownloadState
import com.frankie.app.ui.common.error.ErrorProcessor
import com.google.android.gms.auth.api.signin.GoogleSignInClient
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.asStateFlow
import kotlinx.coroutines.flow.merge
import kotlinx.coroutines.flow.single
import kotlinx.coroutines.flow.update
import kotlinx.coroutines.launch

class MainViewModel(
    private val surveyRepository: SurveyRepository,
    private val logoutUseCase: LogoutUseCase,
    private val sharedPrefsManager: SharedPrefsManager,
    private val googleSignInClient: GoogleSignInClient,
    private val downloadManager: DownloadManager,
    private val backgroundSync: BackgroundSync,
    private val eventBus: EventBus,
    errorProcessor: ErrorProcessor
) : ViewModel(), ErrorProcessor by errorProcessor {
    private val _firstLoad = MutableStateFlow(true)
    private val _state = MutableStateFlow(State(isLoading = true))
    val state = _state.asStateFlow()

    private val _downloadState: MutableStateFlow<DownloadState> =
        MutableStateFlow(DownloadState.Idle)
    val downloadState = _downloadState.asStateFlow()

    init {
        viewModelScope.launch {
            eventBus.events.collect { event ->
                when (event) {
                    is AppEvent.UploadedSurveyResponse -> {
                        _state.update {
                            _state.value.copy(
                                surveyList = _state.value.surveyList.toMutableList().apply {
                                    val index = indexOfFirst { it.id == event.surveyId }
                                    val value = surveyRepository.getOfflineSurvey(event.surveyId)
                                        .single().getOrThrow()
                                    set(index, value)
                                })
                        }
                    }

                    is AppEvent.UploadingResponse -> {
                        if (!event.uploading) {
                            _state.update {
                                _state.value.copy(
                                    surveyList = _state.value.surveyList.map {
                                        it.copy(isSyncing = true)
                                    })
                            }
                        }
                    }

                    is AppEvent.UploadingSurveyResponse -> {
                        _state.update {
                            _state.value.copy(
                                surveyList = _state.value.surveyList.map {
                                    it.copy(isSyncing = it.id == event.surveyId)
                                })
                        }
                    }
                }
            }
        }
    }

    fun fetchSurveyList(triggeredByUser: Boolean) {
        viewModelScope.launch {
            _state.update { _state.value.copy(isLoading = _firstLoad.value || triggeredByUser) }
            _firstLoad.value = false
            merge(
                surveyRepository.getOfflineSurveyList(),
                surveyRepository.getSurveyList()
            ).collect { result ->
                if (result.isSuccess) {
                    _state.update {
                        _state.value.copy(surveyList = result.getOrThrow())
                    }
                } else {
                    if (triggeredByUser || _firstLoad.value) {
                        processError(result.exceptionOrNull()!!)
                    }
                }
            }
            _state.update { _state.value.copy(isLoading = false) }
        }
    }

    fun syncSurveyForOffline(surveyData: SurveyData) {
        viewModelScope.launch {
            downloadManager.downloadSurveyFiles(surveyData).collect { result ->
                when (result) {
                    is DownloadState.Loading,
                    is DownloadState.Idle -> {
                        _downloadState.value = result
                    }

                    is DownloadState.Error -> {
                        processError(result.throwable)
                        _downloadState.value = result
                    }

                    is DownloadState.Result -> {
                        val newList = _state.value.surveyList.map {
                            if (it.id == result.surveyData.id) result.surveyData else it
                        }
                        _state.update { _state.value.copy(isLoading = false, surveyList = newList) }
                        _downloadState.update { DownloadState.Idle }
                    }
                }
            }
        }
    }

    fun uploadSurveyResponses() {
        viewModelScope.launch {
            val canSync = surveyRepository.getOfflineSurveyList().single().getOrNull()
                ?.any { it.localUnsyncedResponsesCount > 0 } ?: false
            if (canSync) {
                backgroundSync.startSurveySync()
            }
        }
    }

    fun logout(onLogoutFinished: () -> Unit) {
        logoutUseCase()
        googleSignInClient.signOut().addOnCompleteListener {
            onLogoutFinished()
        }
    }

    data class State(
        val isLoading: Boolean,
        val surveyList: List<SurveyData> = emptyList(),
    )

}