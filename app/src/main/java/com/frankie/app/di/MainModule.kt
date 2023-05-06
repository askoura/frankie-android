package com.frankie.app.di

import com.frankie.app.api.RetrofitProvider.provideRetrofit
import com.frankie.app.api.survey.SurveyService
import com.frankie.app.business.survey.SurveyRepository
import com.frankie.app.business.survey.SurveyRepositoryImpl
import com.frankie.app.ui.main.ui.main.MainViewModel
import org.koin.androidx.viewmodel.dsl.viewModel
import org.koin.dsl.module

val mainModule = module {
    single<SurveyService> { provideRetrofit(get(), get()).create(SurveyService::class.java) }
    single<SurveyRepository> { SurveyRepositoryImpl(get(), get()) }
    viewModel { MainViewModel(get(), get(), get()) }
}