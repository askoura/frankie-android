package com.frankie.app.business.login

import com.frankie.app.api.TokenManager
import com.frankie.app.api.login.LoginInput
import com.frankie.app.api.login.LoginResponse
import com.frankie.app.api.login.LoginService
import com.frankie.app.api.login.RefreshInput
import com.frankie.app.business.getResult

interface LoginRepository {
    suspend fun login(loginInput: LoginInput): Result<LoginResponse>
    suspend fun refreshActiveToken(refreshToken: String, activeToken: String): Result<LoginResponse>
}

class LoginRepositoryImpl(private val service: LoginService, private val tokenManager: TokenManager) : LoginRepository {

    override suspend fun login(loginInput: LoginInput): Result<LoginResponse> {
        val result = service.login(loginInput).getResult()
        if (result.isSuccess) {
            val loginResponse = result.getOrThrow()
            tokenManager.saveActiveToken(loginResponse.activeToken)
            tokenManager.saveRefreshToken(loginResponse.refreshToken)
        }
        return result
    }

    override suspend fun refreshActiveToken(refreshToken: String, activeToken: String): Result<LoginResponse> {
        val result = service.refreshActiveToken(RefreshInput(refreshToken, activeToken)).getResult()
        if (result.isSuccess) {
            val loginResponse = result.getOrThrow()
            tokenManager.saveActiveToken(loginResponse.activeToken)
            tokenManager.saveRefreshToken(loginResponse.refreshToken)
        }
        return result
    }


}