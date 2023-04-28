package com.frankie.app.api.survey

import com.frankie.app.api.common.User
import retrofit2.http.GET
import retrofit2.http.Path

interface SurveyService {

    @GET("survey/offline")
    suspend fun getSurveyList(): List<Survey>

    @GET("survey/{surveyId}/permission/all")
    suspend fun getSurveyPermissionList(@Path("surveyId") surveyId: String): List<User>
}