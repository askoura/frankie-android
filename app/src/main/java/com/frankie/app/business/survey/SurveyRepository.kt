package com.frankie.app.business.survey

import com.frankie.app.api.common.User
import com.frankie.app.api.survey.Survey
import com.frankie.app.api.survey.SurveyService
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.flow.Flow
import kotlinx.coroutines.flow.catch
import kotlinx.coroutines.flow.flow
import kotlinx.coroutines.flow.flowOn

interface SurveyRepository {
    fun getSurveyList(): Flow<Result<List<Survey>>>
    fun getSurveyPermissionList(surveyId: String): Flow<Result<List<User>>>
}

class SurveyRepositoryImpl(private val service: SurveyService) : SurveyRepository {
    override fun getSurveyList(): Flow<Result<List<Survey>>> {
        return flow {
            emit(Result.success(service.getSurveyList()))
        }.catch {
            emit(Result.failure(it))
        }.flowOn(Dispatchers.IO)
    }

    override fun getSurveyPermissionList(surveyId: String): Flow<Result<List<User>>> {
        return flow {
            emit(Result.success(service.getSurveyPermissionList(surveyId)))
        }.catch {
            emit(Result.failure(it))
        }.flowOn(Dispatchers.IO)
    }
}