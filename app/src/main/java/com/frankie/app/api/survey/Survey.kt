package com.frankie.app.api.survey

import com.fasterxml.jackson.annotation.JsonFormat
import com.fasterxml.jackson.annotation.JsonIgnoreProperties
import com.fasterxml.jackson.annotation.JsonProperty
import com.fasterxml.jackson.databind.annotation.JsonDeserialize
import com.fasterxml.jackson.datatype.jsr310.deser.LocalDateTimeDeserializer
import com.frankie.expressionmanager.model.DATE_TIME_UTC_FORMAT
import com.frankie.expressionmanager.model.NavigationIndex
import com.frankie.expressionmanager.model.ResponseEvent
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
    @JsonProperty("status") val status: String,
    @JsonProperty("usage") val usage: String,
    @JsonProperty("responsesCount") val totalResponseCount: Int,
    @JsonProperty("userResponsesCount") val syncedResponseCount: Int,
    @JsonProperty("surveyQuota") val surveyQuota: Int,
    @JsonProperty("userQuota") val userQuota: Int,
    @JsonProperty("saveTimings") val saveTimings: Boolean,
    @JsonProperty("backgroundAudio") val backgroundAudio: Boolean,
    @JsonProperty("recordGps") val recordGps: Boolean,
    @JsonProperty("publishInfo") val publishInfo: PublishInfo?,
)

data class UploadResponseRequestData(
        val versionId: Int,
        val lang: String,
        val events: List<ResponseEvent> = listOf(),
        val values: Map<String, Any> = mapOf(),
        val startDate: LocalDateTime,
        val submitDate: LocalDateTime?,
        val userId: String,
        val navigationIndex: NavigationIndex
)