package com.frankie.app.api.survey

import com.frankie.app.api.common.User
import okhttp3.MultipartBody
import okhttp3.ResponseBody
import retrofit2.Response
import retrofit2.http.Body
import retrofit2.http.GET
import retrofit2.http.Multipart
import retrofit2.http.POST
import retrofit2.http.Part
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

    @Multipart
    @POST("survey/{surveyId}/resource/upload")
    suspend fun uploadSurveyFile(@Path("surveyId") surveyId: String, @Part filePart: MultipartBody.Part): Response<Unit>

    @POST("survey/{surveyId}/response/{responseId}/upload")
    suspend fun uploadSurveyResponse(@Path("surveyId") surveyId: String,
                                     @Path("responseId") responseId: String,
                                     @Body uploadResponseRequestData: UploadResponseRequestData): Response<Unit>

}
