package com.frankie.app.business.settings

import android.content.Context
import android.content.SharedPreferences

interface SharedPrefsManager {
    val isActiveTokenAvailable: Boolean
    var activeToken: String?
    var refreshToken: String?
}

class SharedPrefsManagerImpl(context: Context) : SharedPrefsManager {
    private val preferences: SharedPreferences = context.getSharedPreferences(PREFS_NAME, Context.MODE_PRIVATE)
    private val editor: SharedPreferences.Editor = preferences.edit()

    override val isActiveTokenAvailable: Boolean
        get() = activeToken.isNullOrEmpty()

    override var refreshToken: String?
        get() = getString(KEY_REFRESH_TOKEN)
        set(value) = saveString(KEY_REFRESH_TOKEN, value)

    override var activeToken: String?
        get() = getString(KEY_ACTIVE_TOKEN)
        set(value) = saveString(KEY_ACTIVE_TOKEN, value)

    private fun saveString(key: String, value: String?) {
        editor.putString(key, value)
        editor.apply()
    }

    private fun getString(key: String, defaultValue: String? = ""): String? {
        return preferences.getString(key, defaultValue)
    }

    companion object {
        const val PREFS_NAME = "frankie_prefs"
        const val KEY_ACTIVE_TOKEN = "active_token"
        const val KEY_REFRESH_TOKEN = "refresh_token"
    }
}