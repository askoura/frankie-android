package com.frankie.app.ui.common

import android.util.Patterns

object InputUtils {
    // TODO : align patterns with BE
    fun isValidPassword(password: String): Boolean {
        return password.length >= 8
    }

    fun isValidEmail(email: String): Boolean {
        val pattern = Patterns.EMAIL_ADDRESS
        return pattern.matcher(email).matches()
    }
}