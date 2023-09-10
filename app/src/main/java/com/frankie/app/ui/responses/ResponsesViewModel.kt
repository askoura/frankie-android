package com.frankie.app.ui.responses

import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import com.frankie.app.AppEvent
import com.frankie.app.EventBus
import com.frankie.app.business.responses.ResponseRepository
import com.frankie.app.business.survey.SurveyData
import com.frankie.app.db.model.Response
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.asStateFlow
import kotlinx.coroutines.flow.update
import kotlinx.coroutines.launch

class ResponsesViewModel(
    private val responsesRepository: ResponseRepository,
    private val eventBus: EventBus,
) : ViewModel() {

    private val _responses = MutableStateFlow<List<ResponseItem>>(emptyList())
    private lateinit var surveyData: SurveyData
    val responses = _responses.asStateFlow()

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
        refresh()
    }

    private fun refresh() {
        viewModelScope.launch(Dispatchers.IO) {
            responsesRepository.getResponses(surveyData.id).let { newList ->
                val count = newList.count { it.submitDate != null && !it.isSynced }
                val quotaExceeded = surveyData.quotaExceeded(count)
                _responses.update {
                    newList.map { ResponseItem(it, editEnabled = !quotaExceeded) }
                }
            }
        }
    }

    fun deleteResponse(responseId: String) {
        viewModelScope.launch(Dispatchers.IO) {
            responsesRepository.deleteResponse(responseId).let {
                _responses.update { responses ->
                    val list = responses.filter { it.responses.id != responseId }
                    val count =
                        list.count { it.responses.submitDate != null && !it.responses.isSynced }
                    val quotaExceeded = surveyData.quotaExceeded(count)
                    list.map { it.copy(editEnabled = !quotaExceeded) }
                }
            }
        }
    }
}

data class ResponseItem(val responses: Response, val editEnabled: Boolean)

