package com.frankie.app.business.login

import com.frankie.app.api.login.LoginInput
import com.frankie.app.api.login.LoginResponse
import com.frankie.app.api.login.LoginService
import com.frankie.app.business.getResult

interface LoginRepository {
    suspend fun login(loginInput: LoginInput): Result<LoginResponse>
}

class LoginRepositoryImpl(private val service: LoginService) : LoginRepository {

    override suspend fun login(loginInput: LoginInput): Result<LoginResponse> {
        return service.login(loginInput).getResult()
    }
}