package com.frankie.app.di

import com.frankie.app.ui.responses.ResponsesViewModel
import org.koin.androidx.viewmodel.dsl.viewModel
import org.koin.dsl.module

val responsesModule = module {
    viewModel {
        ResponsesViewModel(
            get(),
            get(),
            get()
        )
    }
}