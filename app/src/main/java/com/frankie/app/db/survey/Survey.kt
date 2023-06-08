package com.frankie.app.db.survey

import androidx.room.Embedded
import androidx.room.Entity
import androidx.room.PrimaryKey
import androidx.room.TypeConverter
import androidx.room.TypeConverters
import com.fasterxml.jackson.core.type.TypeReference
import com.fasterxml.jackson.databind.ObjectMapper
import com.frankie.app.api.survey.PublishInfo
import com.frankie.app.db.JSONOConverter
import com.frankie.app.db.LocalDateConverter
import com.frankie.app.db.NavigationIndexConverter
import com.frankie.app.db.ResponseEventListConverter
import com.frankie.app.db.SurveyLangConverter
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
    @Embedded val languagesEntity: LanguagesEntity? = LanguagesEntity(),
    val status: String = "",
    val usage: String = "",
    val quota: Int,
    val userQuota: Int,
    val navigationMode: NavigationMode,
    @Embedded val publishInfoEntity: PublishInfoEntity? = PublishInfoEntity(),
    val newVersionAvailable: Boolean,
    val totalResponsesCount: Int,
    val fileQuestions: List<String>,
    val syncedResponseCount: Int,
    val saveTimings: Boolean,
    val backgroundAudio: Boolean,
    val recordGps: Boolean,
    val allowIncomplete: Boolean,
    val allowJump: Boolean,
    val allowPrevious: Boolean,
    val skipInvalid: Boolean
)

data class LanguageEntity(
        val code: String = "",
        val langName: String = "",
) {
    constructor() : this("", "")
}

data class LanguagesEntity(
        val defaultLanguageEntity: LanguageEntity? = LanguageEntity(),
        val additionalLanguagesEntity: List<LanguageEntity>? = emptyList(),
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
