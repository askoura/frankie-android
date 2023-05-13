package com.frankie.app.api.auth

data class RefreshInput(val refreshToken: String, val accessToken: String)
