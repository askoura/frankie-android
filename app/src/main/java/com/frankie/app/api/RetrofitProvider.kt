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

    fun provideRetrofitPreAuth(): Retrofit = Retrofit.Builder()
            .baseUrl("$SCHEME$BACKEND_HOST:$BACKEND_PORT")
            .addConverterFactory(JacksonConverterFactory.create())
            .client(getHttpClientBuilder().build())
            .build()

    fun provideRetrofit(tokenManager: TokenManager, refreshTokenUseCase: RefreshTokenUseCase): Retrofit {
        val httpClient = getHttpClientBuilder().addInterceptor { chain ->
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
        }.build()

        return getRetrofit(httpClient,
                (tokenManager.getSubDomain()?.let { "$it." } ?: "") + BACKEND_HOST)
    }

    private fun getRetrofit(httpClient: OkHttpClient, backendHost: String) = Retrofit.Builder()
            .baseUrl("$SCHEME$backendHost:$BACKEND_PORT")
            .addConverterFactory(JacksonConverterFactory.create())
            .client(httpClient)
            .build()

    private fun getHttpClientBuilder(): OkHttpClient.Builder {
        val httpClient = OkHttpClient.Builder()
        if (BuildConfig.DEBUG) {
            val httpLoggingInterceptor = HttpLoggingInterceptor()
            httpLoggingInterceptor.level =
                    HttpLoggingInterceptor.Level.BODY
            httpClient.networkInterceptors().add(httpLoggingInterceptor)
        }
        httpClient.callTimeout(1, TimeUnit.MINUTES)
        httpClient.connectTimeout(1, TimeUnit.MINUTES)
        httpClient.readTimeout(1, TimeUnit.MINUTES)
        httpClient.writeTimeout(1, TimeUnit.MINUTES)
        return httpClient
    }

    private const val SCHEME = "http://"
    private const val BACKEND_HOST = "frankie.app"
    private const val BACKEND_PORT = "8080"

}