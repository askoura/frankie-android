package com.frankie.app.api

import com.frankie.app.BuildConfig
import com.frankie.app.business.login.RefreshTokenUseCase
import kotlinx.coroutines.runBlocking
import okhttp3.OkHttpClient
import okhttp3.logging.HttpLoggingInterceptor
import retrofit2.Retrofit
import retrofit2.converter.jackson.JacksonConverterFactory
import java.util.concurrent.TimeUnit

object RetrofitProvider {

    fun provideRetrofit(tokenManager: TokenManager? = null, refreshTokenUseCase: RefreshTokenUseCase? = null): Retrofit {
        val httpClient = OkHttpClient.Builder()
        if (BuildConfig.DEBUG) {
            val httpLoggingInterceptor = HttpLoggingInterceptor()
            httpLoggingInterceptor.level =
                    HttpLoggingInterceptor.Level.BODY
            httpClient.networkInterceptors().add(httpLoggingInterceptor)
        }
        if (tokenManager != null && refreshTokenUseCase != null) {
            httpClient.addInterceptor { chain ->
                val original = chain.request()
                val request = original.newBuilder()
                        .header("Authorization", "Bearer ${tokenManager.getActiveToken()}")
                        .method(original.method, original.body)
                        .build()
                val response = chain.proceed(request)

                if (response.code != 401) {
                    return@addInterceptor response
                }
                val refreshToken = tokenManager.getRefreshToken() ?: return@addInterceptor response
                val activeToken = tokenManager.getActiveToken() ?: return@addInterceptor response

                val newTokenResult = runBlocking {
                    refreshTokenUseCase(refreshToken, activeToken)
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

            }
        }

        httpClient.callTimeout(1, TimeUnit.MINUTES)
        httpClient.connectTimeout(1, TimeUnit.MINUTES)
        httpClient.readTimeout(1, TimeUnit.MINUTES)
        httpClient.writeTimeout(1, TimeUnit.MINUTES)

        val client = httpClient
                .build()
        return Retrofit.Builder()
                .baseUrl("http://192.168.1.118:8080/")
                .addConverterFactory(JacksonConverterFactory.create())
                .client(client)
                .build()
    }
}