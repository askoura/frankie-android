package com.frankie.app.db

import androidx.room.TypeConverter
import com.fasterxml.jackson.module.kotlin.jacksonTypeRef
import com.frankie.expressionmanager.model.NavigationIndex
import com.frankie.expressionmanager.model.SurveyLang
import com.frankie.expressionmanager.model.jacksonKtMapper


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
