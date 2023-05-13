package com.frankie.app.business.login

import com.frankie.app.business.survey.SessionManager

interface LogoutUseCase {
    operator fun invoke()
}

class LogoutUseCaseImpl(private val sessionManager: SessionManager) : LogoutUseCase {
    override fun invoke() {
        sessionManager.clearTokens()
    }
}