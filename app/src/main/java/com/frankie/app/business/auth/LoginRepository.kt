package com.frankie.app.business.auth

import com.frankie.app.api.auth.GoogleSignInInput
import com.frankie.app.api.auth.LoginInput
import com.frankie.app.api.auth.LoginResponse
import com.frankie.app.api.auth.LoginService
import com.frankie.app.business.getResult
import com.frankie.app.business.survey.SessionManager
import com.frankie.app.business.survey.SurveyRepository
import com.frankie.app.db.FrankieDb

interface LoginRepository {
    suspend fun login(loginInput: LoginInput): Result<LoginResponse>
    suspend fun googleSignIn(googleSignInInput: GoogleSignInInput): Result<LoginResponse>
    suspend fun logout(): Result<Unit>
}

class LoginRepositoryImpl(
    private val service: LoginService,
    private val sessionManager: SessionManager,
    private val surveyRepository: SurveyRepository,
    private val frankieDb: FrankieDb
) : LoginRepository {

    override suspend fun login(loginInput: LoginInput): Result<LoginResponse> {
        val result = service.login(loginInput).getResult()
        if (result.isSuccess) {
            frankieDb.clearAllTables()
            val loginResponse = result.getOrThrow()
            sessionManager.saveSession(loginResponse)
        }
        return result
    }

    override suspend fun googleSignIn(googleSignInInput: GoogleSignInInput): Result<LoginResponse> {
        val result = service.googleSignIn(googleSignInInput).getResult()
        if (result.isSuccess) {
            frankieDb.clearAllTables()
            val loginResponse = result.getOrThrow()
            sessionManager.saveSession(loginResponse)
        }
        return result
    }

    override suspend fun logout(): Result<Unit> {
        service.logout().getResult()
        frankieDb.clearAllTables()
        surveyRepository.clearSurveyFiles()
        return Result.success(Unit)
    }
}
