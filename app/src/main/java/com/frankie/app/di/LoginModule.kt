package com.frankie.app.di

import com.frankie.app.api.RetrofitProvider.provideRetrofitPreAuth
import com.frankie.app.api.auth.LoginService
import com.frankie.app.business.auth.LoginInteractor
import com.frankie.app.business.auth.LoginInteractorImpl
import com.frankie.app.business.auth.LoginRepository
import com.frankie.app.business.auth.LoginRepositoryImpl
import com.frankie.app.business.auth.LogoutUseCase
import com.frankie.app.business.auth.LogoutUseCaseImpl
import com.frankie.app.ui.login.LoginViewModel
import org.koin.androidx.viewmodel.dsl.viewModel
import org.koin.dsl.module

val loginModule = module {
    single<LoginService> { provideRetrofitPreAuth().create(LoginService::class.java) }
    single<LoginRepository> { LoginRepositoryImpl(get(), get()) }
    single<LoginInteractor> { LoginInteractorImpl(get()) }
    single<LogoutUseCase> { LogoutUseCaseImpl(get()) }
    viewModel { LoginViewModel(get(), get()) }
}
