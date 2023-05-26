package com.frankie.app.db.model

import androidx.room.ColumnInfo
import androidx.room.Entity
import androidx.room.ForeignKey
import androidx.room.PrimaryKey
import androidx.room.TypeConverters
import com.frankie.app.db.JSONOConverter
import com.frankie.app.db.LocalDateConverter
import com.frankie.app.db.NavigationIndexConverter
import com.frankie.app.db.ResponseEventListConverter
import com.frankie.app.db.SurveyLangConverter
import com.frankie.app.db.survey.SurveyDataEntity
import com.frankie.expressionmanager.model.NavigationIndex
import com.frankie.expressionmanager.model.ResponseEvent
import com.frankie.expressionmanager.model.SurveyLang
import java.time.LocalDateTime

@Entity(
    tableName = "response", foreignKeys = [
        ForeignKey(
            entity = SurveyDataEntity::class,
            parentColumns = ["id"],
            childColumns = ["surveyId"],
            onDelete = ForeignKey.NO_ACTION
        )
    ]
)
@TypeConverters(
    JSONOConverter::class, SurveyLangConverter::class, LocalDateConverter::class,
    NavigationIndexConverter::class, ResponseEventListConverter::class
)
data class Response(
    @PrimaryKey
    val id: String,

    @ColumnInfo(name = "navigation_index")
    val navigationIndex: NavigationIndex,

    val lang: SurveyLang,

    val surveyId: String,

    val startDate: LocalDateTime,

    val submitDate: LocalDateTime?,

    val userId: String,

    @ColumnInfo(name = "response_values")
    val values: Map<String, Any>,

    val events: List<ResponseEvent>
)