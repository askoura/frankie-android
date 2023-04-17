package com.frankie.app.di

import com.frankie.app.ui.launch.LaunchViewModel
import org.koin.androidx.viewmodel.dsl.viewModel
import org.koin.dsl.module

val launchModule = module {
    viewModel { LaunchViewModel(get()) }
}