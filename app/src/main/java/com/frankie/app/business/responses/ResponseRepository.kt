package com.frankie.app.business.responses

import android.util.Log
import com.frankie.app.business.survey.SessionManager
import com.frankie.app.db.ResponseDao
import com.frankie.app.db.model.Response
import com.frankie.expressionmanager.model.ResponseEvent
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.flow.Flow
import kotlinx.coroutines.flow.flow
import kotlinx.coroutines.flow.flowOn
import java.time.LocalDateTime
import java.time.ZoneId
import java.time.ZoneOffset
import java.util.UUID

interface ResponseRepository {
    fun getResponses(surveyId: String): Flow<Result<List<Response>>>
    fun deleteResponse(responseId: String): Flow<Result<Unit>>
    fun saveRecordingEvent(responseId: String, uuid: UUID): Flow<Result<Unit>>
    fun saveLocationEvent(responseId: String, event: ResponseEvent.Location): Flow<Result<Unit>>
}

class ResponseRepositoryImpl(
    private val responseDao: ResponseDao,
    private val sessionManager: SessionManager
) : ResponseRepository {


    override fun getResponses(surveyId: String): Flow<Result<List<Response>>> {
        return flow {
            val result =
                responseDao.getAllByUserAndSurvey(sessionManager.getUserIdOrThrow(), surveyId)
            emit(Result.success(result))
        }.flowOn(Dispatchers.IO)
    }

    override fun deleteResponse(responseId: String): Flow<Result<Unit>> {
        return flow {
            val result = responseDao.deleteById(responseId)
            emit(Result.success(result))
        }.flowOn(Dispatchers.IO)
    }

    override fun saveRecordingEvent(responseId: String, uuid: UUID): Flow<Result<Unit>> {
        return flow {
            val response = responseDao.get(responseId)
            val newEvents = response.events.toMutableList().apply {
                add(ResponseEvent.VoiceRecording(
                    fileName = uuid.toString(),
                    time = LocalDateTime.now(ZoneOffset.UTC)
                ))
            }
            val result = responseDao.update(
                id = responseId,
                values = response.values,
                lang = response.lang,
                startDate = response.startDate,
                submitDate = response.submitDate,
                navigationIndex = response.navigationIndex,
                events = newEvents
            )
            emit(Result.success(result))
        }.flowOn(Dispatchers.IO)
    }

    override fun saveLocationEvent(
        responseId: String,
        event: ResponseEvent.Location
    ): Flow<Result<Unit>> {
        return flow {
            val response = responseDao.get(responseId)
            val newEvents = response.events.toMutableList().apply {
                add(event)
            }
            val result = responseDao.update(
                id = responseId,
                values = response.values,
                lang = response.lang,
                startDate = response.startDate,
                submitDate = response.submitDate,
                navigationIndex = response.navigationIndex,
                events = newEvents
            )
            emit(Result.success(result))
        }.flowOn(Dispatchers.IO)
    }
}

