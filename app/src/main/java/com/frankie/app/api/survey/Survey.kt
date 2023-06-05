package com.frankie.app.api.survey

import android.os.Parcelable
import com.fasterxml.jackson.annotation.JsonFormat
import com.fasterxml.jackson.annotation.JsonIgnoreProperties
import com.fasterxml.jackson.annotation.JsonProperty
import com.fasterxml.jackson.databind.annotation.JsonDeserialize
import com.fasterxml.jackson.datatype.jsr310.deser.LocalDateTimeDeserializer
import com.frankie.expressionmanager.model.DATE_TIME_UTC_FORMAT
import com.frankie.expressionmanager.model.NavigationMode
import com.frankie.expressionmanager.model.toSurveyLang
import kotlinx.parcelize.Parcelize
import java.time.LocalDateTime

@JsonIgnoreProperties(ignoreUnknown = true)
data class Survey(
    @JsonProperty("id") val id: String,
    @JsonFormat(pattern = DATE_TIME_UTC_FORMAT)
    @JsonDeserialize(using = LocalDateTimeDeserializer::class)
    @JsonProperty("creationDate") val creationDate: LocalDateTime,
    @JsonFormat(pattern = DATE_TIME_UTC_FORMAT)
    @JsonDeserialize(using = LocalDateTimeDeserializer::class)
    @JsonProperty("lastModified") val lastModified: LocalDateTime,
    @JsonFormat(pattern = DATE_TIME_UTC_FORMAT)
    @JsonDeserialize(using = LocalDateTimeDeserializer::class)
    @JsonProperty("startDate") val startDate: LocalDateTime?,
    @JsonFormat(pattern = DATE_TIME_UTC_FORMAT)
    @JsonDeserialize(using = LocalDateTimeDeserializer::class)
    @JsonProperty("endDate") val endDate: LocalDateTime?,
    @JsonProperty("name") val name: String,
    @JsonProperty("defaultLanguage") val defaultLanguage: Language,
    @JsonProperty("additionalLanguages") val additionalLanguages: List<Language>,
    @JsonProperty("status") val status: String,
    @JsonProperty("usage") val usage: String,
    @JsonProperty("responsesCount") val totalResponseCount: Int,
    @JsonProperty("userResponsesCount") val syncedResponseCount: Int,
    @JsonProperty("surveyQuota") val surveyQuota: Int,
    @JsonProperty("userQuota") val userQuota: Int,
    @JsonProperty("navigationMode") val navigationMode: NavigationMode,
    @JsonProperty("saveTimings") val saveTimings: Boolean,
    @JsonProperty("backgroundAudio") val backgroundAudio: Boolean,
    @JsonProperty("recordGps") val recordGps: Boolean,
    @JsonProperty("allowIncomplete") val allowIncomplete: Boolean,
    @JsonProperty("allowJump") val allowJump: Boolean,
    @JsonProperty("allowPrevious") val allowPrevious: Boolean,
)

@Parcelize
data class Language(
    @JsonProperty("code") val code: String,
    @JsonProperty("langName") val langName: String
) : Parcelable {
    fun toSurveyLang() = code.toSurveyLang()
}