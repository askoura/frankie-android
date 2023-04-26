package com.frankie.app.api

import com.frankie.app.api.login.LoginResponse
import com.frankie.app.business.settings.SharedPrefsManager

interface TokenManager {
    fun getActiveToken(): String?
    fun getRefreshToken(): String?
    fun getSubDomain(): String?
    fun saveSession(loginResponse: LoginResponse)
    fun clearTokens()
}

class TokenManagerImpl(private val sharedPrefsManager: SharedPrefsManager) : TokenManager {

    override fun getActiveToken(): String? = sharedPrefsManager.activeToken

    override fun getRefreshToken(): String? = sharedPrefsManager.refreshToken
    override fun getSubDomain(): String? = sharedPrefsManager.subdomain

    override fun saveSession(loginResponse: LoginResponse) {
        sharedPrefsManager.activeToken = loginResponse.activeToken
        sharedPrefsManager.refreshToken = loginResponse.refreshToken
        sharedPrefsManager.subdomain = loginResponse.subdomain
    }

    override fun clearTokens() {
        sharedPrefsManager.activeToken = null
        sharedPrefsManager.refreshToken = null
    }

}