package com.frankie.app.api

import com.fasterxml.jackson.databind.ObjectMapper
import com.fasterxml.jackson.datatype.jsr310.JavaTimeModule
import com.frankie.app.BuildConfig
import com.frankie.app.business.auth.RefreshTokenUseCase
import com.frankie.app.business.survey.SessionManager
import kotlinx.coroutines.flow.first
import kotlinx.coroutines.runBlocking
import okhttp3.OkHttpClient
import okhttp3.logging.HttpLoggingInterceptor
import retrofit2.Retrofit
import retrofit2.converter.jackson.JacksonConverterFactory
import java.util.concurrent.TimeUnit

object RetrofitProvider {

    fun provideRetrofitRefreshToken(): Retrofit =
        getRetrofit(getHttpClientBuilder().build())

    fun provideRetrofit(
        sessionManager: SessionManager,
        refreshTokenUseCase: RefreshTokenUseCase
    ): Retrofit {
        val httpClient = getHttpClientBuilder().addInterceptor { chain ->
            val original = chain.request()
            val requestBuilder = original.newBuilder()
                .method(original.method, original.body)

            sessionManager.getActiveToken()?.let {
                requestBuilder.header("Authorization", "Bearer $it")
            }

            val request = requestBuilder.build()

            val response = chain.proceed(request)
            if (response.code != 401) {
                return@addInterceptor response
            }
            val refreshToken = sessionManager.getRefreshToken() ?: return@addInterceptor response
            val activeToken = sessionManager.getActiveToken() ?: return@addInterceptor response

            val newTokenResult = runBlocking {
                refreshTokenUseCase(refreshToken, activeToken).first()
            }
            if (newTokenResult.isSuccess) {
                val newRequest = original.newBuilder()
                    .header("Authorization", "Bearer ${newTokenResult.getOrNull()}")
                    .method(original.method, original.body)
                    .build()
                chain.proceed(newRequest)
            } else {
                response
            }
        }.build()

        return getRetrofit(httpClient)
    }

    private fun getRetrofit(httpClient: OkHttpClient) = Retrofit.Builder()
            .baseUrl(BuildConfig.SERVER_URL)
            .addConverterFactory(JacksonConverterFactory.create(ObjectMapper().registerModule(JavaTimeModule())))
        .client(httpClient)
        .build()

    private fun getHttpClientBuilder(): OkHttpClient.Builder {
        val httpClient = OkHttpClient.Builder()
        BuildConfig.BUILD_TYPE
        if (BuildConfig.DEBUG) {
            val httpLoggingInterceptor = HttpLoggingInterceptor()
            httpLoggingInterceptor.level =
                HttpLoggingInterceptor.Level.BODY
            httpClient.networkInterceptors().add(httpLoggingInterceptor)
        }
        httpClient.callTimeout(0, TimeUnit.SECONDS)
        httpClient.connectTimeout(10, TimeUnit.SECONDS)
        return httpClient
    }

}
