package com.frankie.app.business.auth

import com.frankie.app.api.auth.LoginInput
import com.frankie.app.api.auth.LoginResponse
import com.frankie.app.api.auth.LoginService
import com.frankie.app.business.getResult
import com.frankie.app.business.survey.SessionManager

interface LoginRepository {
    suspend fun login(loginInput: LoginInput): Result<LoginResponse>
    suspend fun logout(): Result<Unit>
}

class LoginRepositoryImpl(
        private val service: LoginService,
        private val sessionManager: SessionManager
) : LoginRepository {

    override suspend fun login(loginInput: LoginInput): Result<LoginResponse> {
        val result = service.login(loginInput).getResult()
        if (result.isSuccess) {
            val loginResponse = result.getOrThrow()
            sessionManager.saveSession(loginResponse)
        }
        return result
    }

    override suspend fun logout(): Result<Unit> {
        service.logout().getResult()
        sessionManager.clearTokens()

        return Result.success(Unit)
    }
}
