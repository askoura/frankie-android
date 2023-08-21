package com.frankie.app.business.responses

import com.frankie.app.business.survey.SessionManager
import com.frankie.app.db.ResponseDao
import com.frankie.app.db.model.Response
import com.frankie.expressionmanager.model.ResponseEvent
import kotlinx.coroutines.flow.Flow
import kotlinx.coroutines.flow.flow

interface ResponseRepository {
    suspend fun getResponses(surveyId: String): List<Response>
    suspend fun deleteResponse(responseId: String)
    suspend fun addEvent(responseId: String, event: ResponseEvent)
    suspend fun markResponseAsSynced(responseId: String)
}

class ResponseRepositoryImpl(
    private val responseDao: ResponseDao,
    private val sessionManager: SessionManager
) : ResponseRepository {


    override suspend fun getResponses(surveyId: String): List<Response> {
        return responseDao.getAllByUserAndSurvey(sessionManager.getUserIdOrThrow(), surveyId)
    }

    override suspend fun deleteResponse(responseId: String) {
        return responseDao.deleteById(responseId)
    }

    override suspend fun addEvent(responseId: String, event: ResponseEvent) =
        responseDao.addEvent(responseId, event)

    override suspend fun markResponseAsSynced(responseId: String) =
        responseDao.markResponseAsSynced(responseId)
}

