package com.frankie.app.business.auth

import com.frankie.app.business.settings.SharedPrefsManager

interface LogoutUseCase {
    suspend operator fun invoke()
}

class LogoutUseCaseImpl(
    private val loginRepository: LoginRepository,
    private val sharedPrefsManager: SharedPrefsManager
) : LogoutUseCase {
    override suspend fun invoke() {
        loginRepository.logout()
        sharedPrefsManager.clear()
    }
}