package com.frankie.app.di

import com.frankie.app.api.RetrofitProvider
import com.frankie.app.api.auth.RefreshTokenService
import com.frankie.app.business.login.RefreshTokenUseCase
import com.frankie.app.business.login.RefreshTokenUseCaseImpl
import org.koin.dsl.module

val refreshTokenModule = module {
    single<RefreshTokenService> { RetrofitProvider.provideRetrofitRefreshToken(get()).create(RefreshTokenService::class.java) }
    single<RefreshTokenUseCase> { RefreshTokenUseCaseImpl(get(), get()) }
}