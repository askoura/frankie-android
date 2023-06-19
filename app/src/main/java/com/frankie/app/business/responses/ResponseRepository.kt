package com.frankie.app.business.responses

import com.frankie.app.business.survey.SessionManager
import com.frankie.app.db.ResponseDao
import com.frankie.app.db.model.Response
import com.frankie.expressionmanager.model.ResponseEvent
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.flow.Flow
import kotlinx.coroutines.flow.catch
import kotlinx.coroutines.flow.flow
import kotlinx.coroutines.flow.flowOn

interface ResponseRepository {
    fun getResponses(surveyId: String): Flow<Result<List<Response>>>
    fun deleteResponse(responseId: String): Flow<Result<Unit>>
    fun getCompleteResponseCount(surveyId: String): Flow<Result<Int>>
    fun addEvent(responseId: String, event: ResponseEvent): Flow<Result<Unit>>
    fun markResponseAsSynced(responseId: String): Flow<Result<Unit>>
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

    override fun getCompleteResponseCount(surveyId: String): Flow<Result<Int>> {
        return flow {
            responseDao.getAllByUserAndSurvey(sessionManager.getUserIdOrThrow(), surveyId)
        }
    }

    override fun addEvent(responseId: String, event: ResponseEvent): Flow<Result<Unit>> {
        return flow {
            val result = responseDao.addEvent(responseId, event)
            emit(Result.success(result))
        }.flowOn(Dispatchers.IO)
    }

    override fun markResponseAsSynced(responseId: String): Flow<Result<Unit>> = flow {
        responseDao.markResponseAsSynced(responseId)
        emit(Result.success(Unit))
    }.catch {
        emit(Result.failure(it))
    }.flowOn(Dispatchers.IO)
}

