package com.frankie.app.api.survey

import com.fasterxml.jackson.annotation.JsonProperty

data class PublishInfo(
        @JsonProperty("version") val version: Int = 0,
        @JsonProperty("subVersion") val subVersion: Int = 0,
        @JsonProperty("lastModified") val lastModified: String = LAST_MODIFIED_INITIAL,
) {
    companion object {
        const val LAST_MODIFIED_INITIAL = "1970-01-01 00:00:00"
    }
}
