package com.frankie.app.di

import com.frankie.app.api.RetrofitProvider.provideRetrofit
import com.frankie.app.api.login.LoginService
import com.frankie.app.business.login.LoginInteractor
import com.frankie.app.business.login.LoginInteractorImpl
import com.frankie.app.business.login.LoginRepository
import com.frankie.app.business.login.LoginRepositoryImpl
import com.frankie.app.business.login.RefreshTokenUseCase
import com.frankie.app.business.login.RefreshTokenUseCaseImpl
import com.frankie.app.ui.login.LoginViewModel
import org.koin.androidx.viewmodel.dsl.viewModel
import org.koin.dsl.module

val loginModule = module {
    single<LoginService> { provideRetrofit().create(LoginService::class.java) }
    single<LoginRepository> { LoginRepositoryImpl(get(), get()) }
    single<LoginInteractor> { LoginInteractorImpl(get()) }
    single<RefreshTokenUseCase> { RefreshTokenUseCaseImpl(get()) }
    viewModel { LoginViewModel(get(), get()) }
}