package com.frankie.app.business.auth

import com.frankie.app.api.auth.GoogleSignInInput
import com.frankie.app.api.auth.LoginInput
import com.frankie.app.api.auth.LoginResponse
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.flow.Flow
import kotlinx.coroutines.flow.catch
import kotlinx.coroutines.flow.flow
import kotlinx.coroutines.flow.flowOn


interface LoginInteractor {
    suspend fun login(email: String, password: String): Flow<Result<LoginResponse>>
    suspend fun googleSignIn(googleSignInInput: GoogleSignInInput): Flow<Result<LoginResponse>>
}

class LoginInteractorImpl(private val loginRepository: LoginRepository) : LoginInteractor {
    override suspend fun login(email: String, password: String): Flow<Result<LoginResponse>> =
        flow {
            emit(loginRepository.login(LoginInput(email, password)))
        }.catch {
            emit(Result.failure(it))
        }.flowOn(Dispatchers.IO)

    override suspend fun googleSignIn(googleSignInInput: GoogleSignInInput)
    : Flow<Result<LoginResponse>> = flow {
            emit(loginRepository.googleSignIn(googleSignInInput))
        }.catch {
            emit(Result.failure(it))
        }.flowOn(Dispatchers.IO)
}