package com.frankie.app

import android.app.Application
import com.frankie.app.di.loginModule
import org.koin.core.context.startKoin

class App : Application() {

    override fun onCreate() {
        super.onCreate()

        startKoin {
            modules(loginModule)
        }
    }
}