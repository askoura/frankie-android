package com.frankie.app.api

import com.frankie.app.business.settings.SharedPrefsManager

interface TokenManager {
    fun getActiveToken(): String?
    fun getRefreshToken(): String?
    fun saveActiveToken(token: String)
    fun saveRefreshToken(token: String)
    fun clearTokens()
}

class TokenManagerImpl(private val sharedPrefsManager: SharedPrefsManager) : TokenManager {

    override fun getActiveToken(): String? = sharedPrefsManager.activeToken

    override fun getRefreshToken(): String? = sharedPrefsManager.refreshToken

    override fun saveActiveToken(token: String) {
        sharedPrefsManager.activeToken = token
    }

    override fun saveRefreshToken(token: String) {
        sharedPrefsManager.refreshToken = token
    }

    override fun clearTokens() {
        sharedPrefsManager.activeToken = null
        sharedPrefsManager.refreshToken = null
    }

}