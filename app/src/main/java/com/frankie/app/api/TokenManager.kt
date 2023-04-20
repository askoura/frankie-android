package com.frankie.app.api

import com.frankie.app.business.settings.SharedPrefsManager

interface TokenManager {
    fun getActiveToken(): String?
    fun getRefreshToken(): String?
    fun saveActiveToken(token: String)
    fun saveRefreshToken(token: String)
}

class TokenManagerImpl(private val sharedPrefsManager: SharedPrefsManager) : TokenManager {
    private var activeToken: String = sharedPrefsManager.activeToken
    private var refreshToken: String = sharedPrefsManager.refreshToken

    override fun getActiveToken(): String {
        activeToken = sharedPrefsManager.activeToken
        return activeToken
    }

    override fun getRefreshToken(): String {
        refreshToken = sharedPrefsManager.refreshToken
        return refreshToken
    }

    override fun saveActiveToken(token: String) {
        activeToken = token
        sharedPrefsManager.activeToken = token
    }

    override fun saveRefreshToken(token: String) {
        refreshToken = token
        sharedPrefsManager.refreshToken = token
    }

}