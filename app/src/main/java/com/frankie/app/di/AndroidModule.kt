package com.frankie.app.di

import android.content.Context
import androidx.work.WorkManager
import com.frankie.app.BuildConfig
import com.frankie.app.EventBus
import com.frankie.app.EventBusImpl
import com.frankie.app.business.settings.ConsentSettings
import com.frankie.app.business.settings.ConsentSettingsImpl
import com.frankie.app.business.settings.SharedPrefsManager
import com.frankie.app.business.settings.SharedPrefsManagerImpl
import com.frankie.app.business.survey.BackgroundSync
import com.frankie.app.business.survey.BackgroundSyncImpl
import com.frankie.app.business.survey.SessionManager
import com.frankie.app.business.survey.SessionManagerImpl
import com.frankie.app.db.FrankieDb
import com.frankie.app.ui.common.ConnectivityChecker
import com.frankie.app.ui.common.ConnectivityCheckerImpl
import com.frankie.app.ui.common.error.ErrorDisplayManager
import com.frankie.app.ui.common.error.ErrorDisplayManagerImpl
import com.frankie.app.ui.common.error.ErrorProcessor
import com.frankie.app.ui.common.error.ErrorProcessorImpl
import com.google.android.gms.auth.api.signin.GoogleSignIn
import com.google.android.gms.auth.api.signin.GoogleSignInOptions
import org.koin.android.ext.koin.androidContext
import org.koin.core.qualifier.named
import org.koin.dsl.module

val androidModule = module {
    single(named("appContext")) { androidContext() }
    single<EventBus> { EventBusImpl() }
    single<SharedPrefsManager> { SharedPrefsManagerImpl(get()) }
    single<SessionManager> { SessionManagerImpl(get()) }
    single<ConsentSettings> { ConsentSettingsImpl(get(named("appContext")), get()) }
    single { FrankieDb.getDatabase(get(named("appContext"))) }
    single { get<FrankieDb>().surveyDataDao() }
    single { get<FrankieDb>().responseDao() }
    single { WorkManager.getInstance(get()) }
    single<BackgroundSync> { BackgroundSyncImpl(get()) }
    single<ConnectivityChecker> { ConnectivityCheckerImpl(get()) }
    single {
        GoogleSignInOptions.Builder(GoogleSignInOptions.DEFAULT_SIGN_IN)
            .requestIdToken(BuildConfig.AUTH_CLIENT_ID)
            .requestEmail()
            .build()
    }
    single { GoogleSignIn.getClient(androidContext(), get()) }
    factory<ErrorProcessor> { ErrorProcessorImpl(get()) }
    factory<ErrorDisplayManager> { (context: Context) -> ErrorDisplayManagerImpl(context, get()) }
}
