package com.frankie.app.business.login

import com.frankie.app.api.login.LoginInput
import com.frankie.app.api.login.LoginResponse
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.flow.Flow
import kotlinx.coroutines.flow.catch
import kotlinx.coroutines.flow.flow
import kotlinx.coroutines.flow.flowOn


interface LoginInteractor {
    suspend fun login(email: String, password: String): Flow<Result<LoginResponse>>
}

class LoginInteractorImpl(private val loginRepository: LoginRepository) : LoginInteractor {
    override suspend fun login(email: String, password: String): Flow<Result<LoginResponse>> = flow {
        emit(loginRepository.login(LoginInput(email, password)))
    }.catch {
        emit(Result.failure(it))
    }.flowOn(Dispatchers.IO)
}