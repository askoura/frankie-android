package com.frankie.app.api.login

import com.fasterxml.jackson.annotation.JsonCreator
import com.fasterxml.jackson.annotation.JsonProperty

data class LoginResponse @JsonCreator constructor(
        @JsonProperty("id") val id: String,
        @JsonProperty("firstName") val firstName: String,
        @JsonProperty("lastName") val lastName: String,
        @JsonProperty("activeToken") val activeToken: String,
        @JsonProperty("refreshToken") val refreshToken: String,
        @JsonProperty("email") val email: String,
        @JsonProperty("roles") val roles: List<String>,
)