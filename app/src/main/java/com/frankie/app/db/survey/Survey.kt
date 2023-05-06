package com.frankie.app.db.survey

import androidx.room.Embedded
import androidx.room.Entity
import androidx.room.PrimaryKey
import androidx.room.TypeConverter
import com.fasterxml.jackson.core.type.TypeReference
import com.fasterxml.jackson.databind.ObjectMapper
import com.frankie.app.api.survey.PublishInfo

@Entity(tableName = "survey_data_table")
data class SurveyDataEntity(
        @PrimaryKey val id: String = "",
        val creationDate: String = "",
        val lastModified: String = "",
        val name: String = "",
        @Embedded val languagesEntity: LanguagesEntity? = LanguagesEntity(),
        val status: String = "",
        val usage: String = "",
        val quota: Int = 0,
        val navigationMode: String = "",
        @Embedded val publishInfoEntity: PublishInfoEntity? = PublishInfoEntity(),
        val newVersionAvailable: Boolean = false,
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
