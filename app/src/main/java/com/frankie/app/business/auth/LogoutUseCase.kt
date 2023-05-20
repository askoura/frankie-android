package com.frankie.app.business.auth

import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.Dispatchers

import kotlinx.coroutines.launch

interface LogoutUseCase {
    operator fun invoke()
}

class LogoutUseCaseImpl(private val loginRepositoryImpl: LoginRepositoryImpl) : LogoutUseCase {
    override fun invoke() {
        CoroutineScope(Dispatchers.IO).launch {
            loginRepositoryImpl.logout()
        }
    }
}