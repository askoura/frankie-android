package com.frankie.app.ui.responses

import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import com.frankie.app.business.responses.ResponseRepository
import com.frankie.app.business.survey.SurveyData
import com.frankie.app.db.model.Response
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.asStateFlow
import kotlinx.coroutines.flow.update
import kotlinx.coroutines.launch

class ResponsesViewModel(private val responsesRepository: ResponseRepository) : ViewModel() {

    private val _responses = MutableStateFlow<List<ResponseItem>>(emptyList())
    val responses = _responses.asStateFlow()

    fun fetchResponses(surveyData: SurveyData) {
        viewModelScope.launch {
            responsesRepository.getResponses(surveyData.id).collect { result ->
                val newList = result.getOrThrow()
                val count = newList.count { it.submitDate != null && it.isSynced }
                val quotaExceeded = surveyData.quotaExceeded(count)
                _responses.update {
                    newList.map { ResponseItem(it, editEnabled = !quotaExceeded) }
                }
            }
        }
    }

    fun deleteResponse(surveyData: SurveyData, responseId: String) {
        viewModelScope.launch {
            responsesRepository.deleteResponse(responseId).collect {
                _responses.update { responses ->
                    val list = responses.filter { it.responses.id != responseId }
                    val count =
                        list.count { it.responses.submitDate != null && it.responses.isSynced }
                    val quotaExceeded = surveyData.quotaExceeded(count)
                    list.map { it.copy(editEnabled = !quotaExceeded) }
                }
            }
        }
    }
}

data class ResponseItem(val responses: Response, val editEnabled: Boolean)

