package com.frankie.app.db.survey

import androidx.room.Embedded
import androidx.room.Entity
import androidx.room.PrimaryKey
import androidx.room.TypeConverter
import com.fasterxml.jackson.core.type.TypeReference
import com.fasterxml.jackson.databind.ObjectMapper
import com.frankie.app.api.survey.Language
import com.frankie.app.api.survey.PublishInfo
import com.frankie.app.business.survey.SurveyData
import com.frankie.app.business.survey.toPublishInfo
import com.frankie.expressionmanager.model.NavigationMode
import java.time.LocalDateTime

@Entity(tableName = "survey_data_table")
data class SurveyDataEntity(
    @PrimaryKey val id: String = "",
    val creationDate: LocalDateTime,
    val lastModified: LocalDateTime,
    val startDate: LocalDateTime?,
    val endDate: LocalDateTime?,
    val name: String = "",
    @Embedded val languagesEntity: LanguagesEntity = LanguagesEntity(),
    val status: String = "",
    val usage: String = "",
    val quota: Int,
    val userQuota: Int,
    @Embedded val publishInfoEntity: PublishInfoEntity = PublishInfoEntity(),
    val newVersionAvailable: Boolean,
    val totalResponsesCount: Int,
    val fileQuestions: List<String>,
    val syncedResponseCount: Int,
    val saveTimings: Boolean,
    val backgroundAudio: Boolean,
    val recordGps: Boolean
) {
    fun toSurveyData(
        localResponseCount: Int,
        localCompleteResponseCount: Int
    ): SurveyData = SurveyData(
        id,
        creationDate,
        lastModified,
        startDate,
        endDate,
        name,
        languagesEntity.defaultLanguageEntity.toLanguage(),
        languagesEntity.additionalLanguagesEntity.map { it.toLanguage() },
        status,
        usage,
        quota,
        userQuota,
        publishInfoEntity.toPublishInfo(),
        false,
        localResponseCount,
        localCompleteResponseCount,
        syncedResponseCount,
        totalResponsesCount,
        saveTimings,
        backgroundAudio,
        recordGps,
    )
}

data class LanguageEntity(
    val code: String = "",
    val langName: String = "",
) {
    fun toLanguage() = Language(code, langName)

    constructor() : this("", "")
}

data class LanguagesEntity(
    val defaultLanguageEntity: LanguageEntity = LanguageEntity(),
    val additionalLanguagesEntity: List<LanguageEntity> = emptyList(),
)

data class PublishInfoEntity(
    val version: Int = 0,
    val subVersion: Int = 0,
    val timeLastModified: String = PublishInfo.LAST_MODIFIED_INITIAL,
) {
    constructor() : this(0, 0, PublishInfo.LAST_MODIFIED_INITIAL)
}

class SurveyTypeConverters {
    private val objectMapper = ObjectMapper()

    @TypeConverter
    fun fromJsonToLanguageEntity(value: String?): LanguageEntity? {
        if (value == null) {
            return null
        }
        return objectMapper.readValue(value, LanguageEntity::class.java)
    }

    @TypeConverter
    fun fromLanguageEntityToJson(value: LanguageEntity?): String? {
        if (value == null) {
            return null
        }
        return objectMapper.writeValueAsString(value)
    }

    @TypeConverter
    fun fromJsonListToLangEntityList(value: String?): List<LanguageEntity>? {
        if (value == null) {
            return null
        }
        val typeReference = object : TypeReference<List<LanguageEntity>>() {}
        return objectMapper.readValue(value, typeReference)
    }

    @TypeConverter
    fun fromLangEntityListToJsonList(value: List<LanguageEntity>?): String? {
        if (value == null) {
            return null
        }
        return objectMapper.writeValueAsString(value)
    }

}
