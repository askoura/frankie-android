package com.frankie.app.db.model

import androidx.room.ColumnInfo
import androidx.room.Entity
import androidx.room.PrimaryKey
import androidx.room.TypeConverters
import com.frankie.app.db.JSONOConverter
import com.frankie.app.db.NavigationIndexConverter
import com.frankie.app.db.SurveyLangConverter
import com.frankie.expressionmanager.model.NavigationIndex
import com.frankie.expressionmanager.model.SurveyLang

@Entity(tableName = "response")
@TypeConverters(JSONOConverter::class, SurveyLangConverter::class, NavigationIndexConverter::class)
data class Response(
    @PrimaryKey
    val id: Int,

    @ColumnInfo(name = "navigation_index")
    val navigationIndex: NavigationIndex,

    val lang: SurveyLang,

    @ColumnInfo(name = "response_values")
    val values: Map<String, Any>
)