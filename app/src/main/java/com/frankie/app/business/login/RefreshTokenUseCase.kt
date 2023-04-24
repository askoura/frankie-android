package com.frankie.app.business.login

interface RefreshTokenUseCase {
    suspend operator fun invoke(refreshToken: String, activeToken: String): Result<String>
}

class RefreshTokenUseCaseImpl(private val loginRepository: LoginRepository) : RefreshTokenUseCase {
    override suspend fun invoke(refreshToken: String, activeToken: String): Result<String> {
        val result = loginRepository.refreshActiveToken(refreshToken, activeToken)
        return if (result.isSuccess) {
            Result.success(result.getOrThrow().activeToken)
        } else {
            Result.failure(result.exceptionOrNull()!!)
        }
    }
}