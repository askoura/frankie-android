package com.frankie.app.ui.responses

import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import com.frankie.app.business.responses.ResponseRepository
import com.frankie.app.db.model.Response
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.asStateFlow
import kotlinx.coroutines.flow.update
import kotlinx.coroutines.launch

class ResponsesViewModel(private val responsesRepository: ResponseRepository) : ViewModel() {

    private val _responses = MutableStateFlow<List<Response>>(emptyList())
    val responses = _responses.asStateFlow()

    fun fetchResponses(surveyId: String) {
        viewModelScope.launch {
            responsesRepository.getResponses(surveyId).collect { result ->
                _responses.update {
                    result.getOrThrow()
                }
            }
        }
    }

    fun deleteResponse(responseId: String) {
        viewModelScope.launch {
            responsesRepository.deleteResponse(responseId).collect {
                _responses.update { list ->
                    list.filter { it.id != responseId }
                }
            }
        }
    }
}

