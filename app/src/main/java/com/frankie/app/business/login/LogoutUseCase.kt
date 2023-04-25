package com.frankie.app.business.login

import com.frankie.app.api.TokenManager

interface LogoutUseCase {
    operator fun invoke()
}

class LogoutUseCaseImpl(private val tokenManager: TokenManager) : LogoutUseCase {
    override fun invoke() {
        tokenManager.clearTokens()
    }
}