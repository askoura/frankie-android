package com.frankie.app

import android.app.Application
import com.frankie.app.di.androidModule
import com.frankie.app.di.launchModule
import com.frankie.app.di.loginModule
import com.frankie.app.di.mainModule
import org.koin.android.ext.koin.androidContext
import org.koin.core.context.startKoin

class App : Application() {

    override fun onCreate() {
        super.onCreate()

        startKoin {
            androidContext(this@App)
            modules(androidModule, loginModule, launchModule, mainModule)
        }
    }
}