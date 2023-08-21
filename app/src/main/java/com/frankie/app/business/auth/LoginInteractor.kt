package com.frankie.app.business.auth

import com.frankie.app.api.auth.GoogleSignInInput
import com.frankie.app.api.auth.LoginInput
import com.frankie.app.api.auth.LoginResponse


interface LoginInteractor {
    suspend fun login(email: String, password: String): LoginResponse
    suspend fun googleSignIn(googleSignInInput: GoogleSignInInput): LoginResponse
}

class LoginInteractorImpl(private val loginRepository: LoginRepository) : LoginInteractor {
    override suspend fun login(email: String, password: String): LoginResponse =
        loginRepository.login(LoginInput(email, password)).getOrThrow()

    override suspend fun googleSignIn(googleSignInInput: GoogleSignInInput) =
        loginRepository.googleSignIn(googleSignInInput).getOrThrow()
}