package com.frankie.app.ui.main.ui.main

import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import com.frankie.app.business.auth.LogoutUseCase
import com.frankie.app.business.survey.SurveyData
import com.frankie.app.business.survey.SurveyRepository
import com.frankie.app.storage.DownloadManager
import com.frankie.app.ui.common.error.ErrorProcessor
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.asStateFlow
import kotlinx.coroutines.flow.update
import kotlinx.coroutines.launch

class MainViewModel(private val surveyRepository: SurveyRepository,
                    private val logoutUseCase: LogoutUseCase,
                    private val downloadManager: DownloadManager,
                    errorProcessor: ErrorProcessor) : ViewModel(), ErrorProcessor by errorProcessor {
    private val _state = MutableStateFlow(State())
    val state = _state.asStateFlow()
    fun fetchSurveyList() {
        viewModelScope.launch {
            _state.update { _state.value.copy(isLoading = true) }
            surveyRepository.getSurveyList().collect { result ->
                if (result.isSuccess) {
                    _state.update { _state.value.copy(isLoading = false, surveyList = result.getOrThrow()) }
                } else {
                    _state.update { _state.value.copy(isLoading = false) }
                    processError(result.exceptionOrNull()!!)
                }
            }
        }
    }

    fun surveyClicked(surveyData: SurveyData) {
        viewModelScope.launch {
            _state.update { _state.value.copy(isLoading = true) }
            downloadManager.downloadSurveyFiles(surveyData).collect { result ->
                _state.update { _state.value.copy(isLoading = false) }
                if (result.isFailure) {
                    processError(result.exceptionOrNull()!!)
                }
            }
        }
    }

    fun logout() {
        logoutUseCase()
    }

    data class State(
            val isLoading: Boolean = false,
            val surveyList: List<SurveyData> = emptyList()
    )

}