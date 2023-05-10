package com.frankie.app.api.survey

import com.frankie.app.api.common.User
import okhttp3.ResponseBody
import retrofit2.http.Body
import retrofit2.http.GET
import retrofit2.http.POST
import retrofit2.http.Path
import retrofit2.http.Streaming

interface SurveyService {

    @GET("survey/offline")
    suspend fun getSurveyList(): List<Survey>

    @GET("survey/{surveyId}/permission/all")
    suspend fun getSurveyPermissionList(@Path("surveyId") surveyId: String): List<User>

    @POST("survey/{surveyId}/offline/design")
    suspend fun getSurveyDesign(@Path("surveyId") surveyId: String, @Body publishInfo: PublishInfo): SurveyDesign

    @Streaming
    @GET("survey/{surveyId}/resource/{resourceId}")
    suspend fun getSurveyFile(@Path("surveyId") surveyId: String, @Path("resourceId") resourceId: String): ResponseBody

}