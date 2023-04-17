package com.frankie.app.di

import com.frankie.app.business.settings.SharedPrefsManager
import com.frankie.app.business.settings.SharedPrefsManagerImpl
import org.koin.android.ext.koin.androidContext
import org.koin.core.qualifier.named
import org.koin.dsl.module

val androidModule = module {
    single(named("appContext")) { androidContext() }
    single<SharedPrefsManager> { SharedPrefsManagerImpl(get()) }
}