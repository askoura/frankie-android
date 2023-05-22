package com.frankie.app.api.auth

import retrofit2.Response
import retrofit2.http.Body
import retrofit2.http.GET
import retrofit2.http.POST

interface LoginService {
    @POST("user/login")
    suspend fun login(
        @Body loginRequest: LoginInput
    ): Response<LoginResponse>

    @GET("logout")
    suspend fun logout(): Response<Unit>

}