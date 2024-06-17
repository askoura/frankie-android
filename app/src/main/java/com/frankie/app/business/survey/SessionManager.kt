package com.frankie.app.business.survey

import com.frankie.app.api.auth.LoginResponse
import com.frankie.app.business.settings.SharedPrefsManager

interface SessionManager {
    fun getActiveToken(): String?
    fun getRefreshToken(): String?
    fun getUserIdOrThrow(): String
    fun saveSession(loginResponse: LoginResponse)
    fun saveUserAsGuest()
    fun isGuest(): Boolean

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

    override fun saveUserAsGuest() {
        sharedPrefsManager.isGuest = true
    }

    override fun isGuest(): Boolean {
        return sharedPrefsManager.isGuest
    }

    companion object {
        // some random uuid
        const val GUEST_USER_ID = "6885978a-7a85-11ee-b962-0242ac120002"
    }

}