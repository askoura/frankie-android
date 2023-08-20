package com.frankie.app.business.survey

import com.frankie.app.api.auth.LoginResponse
import com.frankie.app.business.settings.SharedPrefsManager

interface SessionManager {
    fun getActiveToken(): String?
    fun getRefreshToken(): String?
    fun getUserIdOrThrow(): String
    fun saveSession(loginResponse: LoginResponse)
}

class SessionManagerImpl(private val sharedPrefsManager: SharedPrefsManager) : SessionManager {

    override fun getActiveToken(): String? = sharedPrefsManager.activeToken

    override fun getRefreshToken(): String? = sharedPrefsManager.refreshToken
    override fun getUserIdOrThrow(): String = sharedPrefsManager.userId
        ?: throw IllegalStateException("User id is null")

    override fun saveSession(loginResponse: LoginResponse) {
        sharedPrefsManager.userId = loginResponse.id
        sharedPrefsManager.activeToken = loginResponse.activeToken
        sharedPrefsManager.refreshToken = loginResponse.refreshToken
    }

}