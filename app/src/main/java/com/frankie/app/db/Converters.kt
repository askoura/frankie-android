package com.frankie.app.db

import androidx.room.TypeConverter
import com.fasterxml.jackson.datatype.jsr310.JavaTimeModule
import com.fasterxml.jackson.module.kotlin.jacksonTypeRef
import com.frankie.expressionmanager.model.NavigationIndex
import com.frankie.expressionmanager.model.ResponseEvent
import com.frankie.expressionmanager.model.SurveyLang
import com.frankie.expressionmanager.model.jacksonKtMapper
import java.time.LocalDateTime


class JSONOConverter {
    @TypeConverter
    fun fromString(value: String): Map<String, Any> {
        return jacksonKtMapper.readValue(value, jacksonTypeRef())
    }

    @TypeConverter
    fun toString(map: Map<String, Any>): String {
        return jacksonKtMapper.writeValueAsString(map)
    }
}

class NavigationIndexConverter {
    @TypeConverter
    fun fromString(value: String): NavigationIndex {
        return jacksonKtMapper.readValue(value, jacksonTypeRef())
    }

    @TypeConverter
    fun toString(navigationIndex: NavigationIndex): String {
        return jacksonKtMapper.writeValueAsString(navigationIndex)
    }
}

class LocalDateConverter {
    @TypeConverter
    fun toDate(dateString: String?): LocalDateTime? {
        return if (dateString == null) {
            null
        } else {
            LocalDateTime.parse(dateString)
        }
    }

    @TypeConverter
    fun toDateString(date: LocalDateTime?): String? {
        return date?.toString()
    }
}

class ResponseEventListConverter {
    private val mapper = jacksonKtMapper.registerModule(JavaTimeModule())

    @TypeConverter
    fun fromString(value: String): List<ResponseEvent> {
        return mapper.readValue(value, jacksonTypeRef<List<ResponseEvent>>())
    }

    @TypeConverter
    fun toString(list: List<ResponseEvent>): String {
        return mapper.writeValueAsString(list)
    }
}

class SurveyLangConverter {
    @TypeConverter
    fun fromString(value: String): SurveyLang {
        return jacksonKtMapper.readValue(value, jacksonTypeRef())
    }

    @TypeConverter
    fun toString(surveyLang: SurveyLang): String {
        return jacksonKtMapper.writeValueAsString(surveyLang)
    }
}
