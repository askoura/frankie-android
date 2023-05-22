package com.frankie.app.di

import com.frankie.app.api.RetrofitProvider
import com.frankie.app.api.auth.RefreshTokenService
import com.frankie.app.business.auth.RefreshTokenUseCase
import com.frankie.app.business.auth.RefreshTokenUseCaseImpl
import org.koin.dsl.module

val refreshTokenModule = module {
    single<RefreshTokenService> {
        RetrofitProvider.provideRetrofit(get(), get()).create(RefreshTokenService::class.java)
    }
    single<RefreshTokenUseCase> { RefreshTokenUseCaseImpl(get(), get()) }
}