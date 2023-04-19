package com.frankie.app.di

import android.content.Context
import com.frankie.app.business.settings.SharedPrefsManager
import com.frankie.app.business.settings.SharedPrefsManagerImpl
import com.frankie.app.ui.common.error.ErrorDisplayManager
import com.frankie.app.ui.common.error.ErrorDisplayManagerImpl
import com.frankie.app.ui.common.error.ErrorProcessor
import com.frankie.app.ui.common.error.ErrorProcessorImpl
import org.koin.android.ext.koin.androidContext
import org.koin.core.qualifier.named
import org.koin.dsl.module

val androidModule = module {
    single(named("appContext")) { androidContext() }
    single<SharedPrefsManager> { SharedPrefsManagerImpl(get()) }
    factory<ErrorProcessor> { ErrorProcessorImpl() }
    factory<ErrorDisplayManager> { (context: Context) -> ErrorDisplayManagerImpl(context) }
}