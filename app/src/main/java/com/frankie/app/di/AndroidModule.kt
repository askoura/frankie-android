package com.frankie.app.di

import android.content.Context
import com.frankie.app.business.settings.SharedPrefsManager
import com.frankie.app.business.settings.SharedPrefsManagerImpl
import com.frankie.app.business.survey.SessionManager
import com.frankie.app.business.survey.SessionManagerImpl
import com.frankie.app.db.FrankieDb
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
    single<SessionManager> { SessionManagerImpl(get()) }
    single { FrankieDb.getDatabase(get(named("appContext"))) }
    single { get<FrankieDb>().surveyDataDao() }
    single { get<FrankieDb>().permissionDao() }
    single { get<FrankieDb>().responseDao() }
    factory<ErrorProcessor> { ErrorProcessorImpl() }
    factory<ErrorDisplayManager> { (context: Context) -> ErrorDisplayManagerImpl(context, get()) }
}
