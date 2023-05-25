package com.frankie.app.api.survey

import android.os.Parcelable
import com.fasterxml.jackson.annotation.JsonIgnoreProperties
import com.fasterxml.jackson.annotation.JsonProperty
import com.frankie.expressionmanager.model.NavigationMode
import kotlinx.parcelize.Parcelize

@JsonIgnoreProperties(ignoreUnknown = true)
data class Survey(
        @JsonProperty("id") val id: String,
        @JsonProperty("creationDate") val creationDate: String,
        @JsonProperty("lastModified") val lastModified: String,
        @JsonProperty("name") val name: String,
        @JsonProperty("defaultLanguage") val defaultLanguage: Language,
        @JsonProperty("additionalLanguages") val additionalLanguages: List<Language>,
        @JsonProperty("status") val status: String,
        @JsonProperty("usage") val usage: String,
        @JsonProperty("quota") val quota: Int,
        @JsonProperty("navigationMode") val navigationMode: NavigationMode
)

@Parcelize
data class Language(
        @JsonProperty("code") val code: String,
        @JsonProperty("langName") val langName: String
):Parcelable