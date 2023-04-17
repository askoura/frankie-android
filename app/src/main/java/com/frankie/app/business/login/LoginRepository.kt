package com.frankie.app.business.login

import com.frankie.app.api.login.LoginInput
import com.frankie.app.api.login.LoginResponse
import com.frankie.app.api.login.LoginService
import com.frankie.app.business.getResult
import com.frankie.app.business.settings.SharedPrefsManager

interface LoginRepository {
    suspend fun login(loginInput: LoginInput): Result<LoginResponse>
}

class LoginRepositoryImpl(private val service: LoginService, private val sharedPrefsManager: SharedPrefsManager) : LoginRepository {

    override suspend fun login(loginInput: LoginInput): Result<LoginResponse> {
        val result = service.login(loginInput).getResult()
        if (result.isSuccess) {
            val loginResponse = result.getOrThrow()
            sharedPrefsManager.activeToken = loginResponse.activeToken
            sharedPrefsManager.refreshToken = loginResponse.refreshToken
        }
        return result
    }
}