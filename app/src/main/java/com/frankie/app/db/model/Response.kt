package com.frankie.app.db.model

import androidx.room.ColumnInfo
import androidx.room.Entity
import androidx.room.PrimaryKey
import androidx.room.TypeConverters
import com.frankie.app.db.JSONOConverter
import com.frankie.app.db.NavigationIndexConverter
import com.frankie.app.db.ResponseEventListConverter
import com.frankie.app.db.SurveyLangConverter
import com.frankie.expressionmanager.model.NavigationIndex
import com.frankie.expressionmanager.model.ResponseEvent
import com.frankie.expressionmanager.model.SurveyLang

@Entity(tableName = "response")
@TypeConverters(
    JSONOConverter::class, SurveyLangConverter::class,
    NavigationIndexConverter::class, ResponseEventListConverter::class
)
data class Response(
    @PrimaryKey
    val id: String,

    @ColumnInfo(name = "navigation_index")
    val navigationIndex: NavigationIndex,

    val lang: SurveyLang,

    val userId: String,

    @ColumnInfo(name = "response_values")
    val values: Map<String, Any>,

    val events: List<ResponseEvent>
)