package com.frankie.app

import android.app.Application
import androidx.appcompat.app.AppCompatDelegate
import com.frankie.app.di.androidModule
import com.frankie.app.di.launchModule
import com.frankie.app.di.loginModule
import com.frankie.app.di.mainModule
import com.frankie.app.di.refreshTokenModule
import com.frankie.app.di.responsesModule
import org.koin.android.ext.koin.androidContext
import org.koin.core.context.startKoin

class App : Application() {

    override fun onCreate() {
        super.onCreate()
        AppCompatDelegate.setDefaultNightMode(AppCompatDelegate.MODE_NIGHT_NO)

        startKoin {
            androidContext(this@App)
            modules(
                androidModule,
                loginModule,
                launchModule,
                mainModule,
                refreshTokenModule,
                responsesModule
            )
        }
    }
}