package com.frankie.app.business.auth

import com.frankie.app.business.settings.SharedPrefsManager
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.Dispatchers

import kotlinx.coroutines.launch

interface LogoutUseCase {
    operator fun invoke()
}

class LogoutUseCaseImpl(
    private val loginRepository: LoginRepository,
    private val sharedPrefsManager: SharedPrefsManager
) : LogoutUseCase {
    override fun invoke() {
        CoroutineScope(Dispatchers.IO).launch {
            loginRepository.logout()
            sharedPrefsManager.clear()
        }
    }
}