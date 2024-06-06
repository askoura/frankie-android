package com.frankie.app.ui.responses

import android.util.Log
import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import com.frankie.app.AppEvent
import com.frankie.app.EventBus
import com.frankie.app.business.responses.ResponseRepository
import com.frankie.app.business.survey.SurveyData
import com.frankie.app.db.model.Response
import com.frankie.app.ui.survey.EMNavProcessor
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.asStateFlow
import kotlinx.coroutines.flow.update
import kotlinx.coroutines.launch

class ResponsesViewModel(
    private val responsesRepository: ResponseRepository,
    private val eventBus: EventBus,
) : ViewModel() {
    private lateinit var surveyData: SurveyData
    private val _responsesScreenData = MutableStateFlow(ResponsesScreenState())
    val responsesScreenData = _responsesScreenData.asStateFlow()
    lateinit var emNavProcessor: EMNavProcessor
    private var currentPage: Int = 0

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
                completeResponsesCount = surveyData
                    .localCompleteResponsesCount, inCompleteResponsesCount = surveyData
                    .totalResponseCount - surveyData.localCompleteResponsesCount
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
                                        add(
                                            ResponseItemData(
                                                response,
                                                editEnabled = !quotaExceeded
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

    override fun onCleared() {
        super.onCleared()
        emNavProcessor.destroy()
    }

    companion object {
        private const val PER_PAGE = 10
    }
}

data class ResponseItemData(val responseValue: Response, val editEnabled: Boolean)
