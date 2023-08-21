package com.frankie.app.di

import com.frankie.app.api.RetrofitProvider.provideRetrofit
import com.frankie.app.api.survey.SurveyService
import com.frankie.app.business.responses.ResponseRepository
import com.frankie.app.business.responses.ResponseRepositoryImpl
import com.frankie.app.business.survey.SurveyRepository
import com.frankie.app.business.survey.SurveyRepositoryImpl
import com.frankie.app.business.survey.UploadSurveyResponsesUseCase
import com.frankie.app.business.survey.UploadSurveyResponsesUseCaseImpl
import com.frankie.app.storage.DownloadManager
import com.frankie.app.storage.DownloadManagerImpl
import com.frankie.app.ui.main.ui.main.MainViewModel
import org.koin.androidx.viewmodel.dsl.viewModel
import org.koin.core.qualifier.named
import org.koin.dsl.module

val mainModule = module {
    single<SurveyService> { provideRetrofit(get(), get()).create(SurveyService::class.java) }
    single<SurveyRepository> { SurveyRepositoryImpl(get(), get(), get(), get(), get()) }
    single<ResponseRepository> { ResponseRepositoryImpl(get(), get()) }
    single<UploadSurveyResponsesUseCase> {
        UploadSurveyResponsesUseCaseImpl(
            get(), get(), get(),
            get()
        )
    }
    single<DownloadManager> { DownloadManagerImpl(get(named("appContext")), get()) }
    viewModel { MainViewModel(get(), get(), get(), get(),  get(), get(), get()) }
}