package com.frankie.app.business.login

interface RefreshTokenUseCase {
    suspend fun refreshToken(): Result<String>
}

class RefreshTokenUseCaseImpl(private val loginRepository: LoginRepository) : RefreshTokenUseCase {
    override suspend fun refreshToken(): Result<String> {
        val result = loginRepository.refreshActiveToken()
        return if (result.isSuccess) {
            Result.success(result.getOrThrow().activeToken)
        } else {
            Result.failure(result.exceptionOrNull()!!)
        }
    }
}