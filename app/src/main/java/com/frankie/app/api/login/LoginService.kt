package com.frankie.app.api.login

import retrofit2.Response
import retrofit2.http.Body
import retrofit2.http.POST

interface LoginService {

    @POST("user/login")
    suspend fun login(
            @Body loginRequest: LoginInput
    ): Response<LoginResponse>
}