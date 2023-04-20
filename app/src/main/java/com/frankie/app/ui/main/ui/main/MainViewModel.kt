package com.frankie.app.ui.main.ui.main

import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import com.frankie.app.api.survey.Survey
import com.frankie.app.business.survey.SurveyRepository
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.launch

class MainViewModel(private val surveyRepository: SurveyRepository) : ViewModel() {
    private val _state = MutableStateFlow(State())
    fun fetchSurveyList() {
        viewModelScope.launch {
            surveyRepository.getSurveyList().collect { result ->
                if (result.isSuccess) {
                    _state.value = _state.value.copy(surveyList = result.getOrThrow())
                } else {
                }
            }
        }
    }

    data class State(
            val surveyList: List<Survey> = emptyList()
    )

}