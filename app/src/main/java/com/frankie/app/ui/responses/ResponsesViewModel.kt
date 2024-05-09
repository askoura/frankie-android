package com.frankie.app.ui.responses

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
    private val _responses = MutableStateFlow<List<ResponseItem>>(emptyList())
    val responses = _responses.asStateFlow()
    private val _isLoading = MutableStateFlow(false)
    val isLoading = _isLoading.asStateFlow()
    private var lastPageReached = false
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

    fun shouldLoadNextPage() = !_isLoading.value && !lastPageReached

    fun fetchResponses(surveyData: SurveyData) {
        this.surveyData = surveyData
        refresh()
    }

    fun refresh() {
        viewModelScope.launch {
            currentPage = 0
            lastPageReached = false
            _responses.update { emptyList() }
            loadNext()
        }
    }

    fun loadNext() {
        if (!shouldLoadNextPage()) {
            return
        }
        viewModelScope.launch(Dispatchers.IO) {
            _isLoading.update { true }
            responsesRepository.getResponses(surveyData.id, currentPage++, PER_PAGE)
                .let { newList ->
                    if (newList.size < PER_PAGE) {
                        lastPageReached = true
                    }
                    val maskedValues = emNavProcessor.maskedValues(newList)
                    val count = newList.count { it.submitDate != null && !it.isSynced }
                    val quotaExceeded = surveyData.quotaExceeded(count)
                    _responses.update {
                        it.toMutableList().apply {
                            addAll(maskedValues.map { response ->
                                ResponseItem(response, editEnabled = !quotaExceeded)
                            })
                        }
                    }
                }
            _isLoading.update { false }
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

    companion object {
        private const val PER_PAGE = 10
    }
}

data class ResponseItem(val responses: Response, val editEnabled: Boolean)
