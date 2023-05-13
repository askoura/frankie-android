package com.frankie.app.business.login

import com.frankie.app.api.auth.RefreshInput
import com.frankie.app.api.auth.RefreshTokenService
import com.frankie.app.business.getResult
import com.frankie.app.business.survey.SessionManager
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.flow.Flow
import kotlinx.coroutines.flow.catch
import kotlinx.coroutines.flow.flow
import kotlinx.coroutines.flow.flowOn

interface RefreshTokenUseCase {
    suspend operator fun invoke(refreshToken: String, activeToken: String): Flow<Result<String>>
}

class RefreshTokenUseCaseImpl(private val refreshTokenService: RefreshTokenService,
                              private val sessionManager: SessionManager) : RefreshTokenUseCase {
    override suspend fun invoke(refreshToken: String, activeToken: String): Flow<Result<String>> = flow {
        val result = refreshTokenService.refreshActiveToken(RefreshInput(refreshToken, activeToken)).getResult()
        if (result.isSuccess) {
            val loginResponse = result.getOrThrow()
            sessionManager.saveSession(loginResponse)
            emit(Result.success(loginResponse.activeToken))
        } else {
            emit(Result.failure(result.exceptionOrNull()!!))
        }
    }.catch {
        emit(Result.failure(it))
    }.flowOn(Dispatchers.IO)

}
