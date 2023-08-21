package com.frankie.app.db.model

import androidx.room.ColumnInfo
import androidx.room.Entity
import androidx.room.ForeignKey
import androidx.room.PrimaryKey
import com.frankie.app.db.survey.SurveyDataEntity
import com.frankie.expressionmanager.model.NavigationIndex
import com.frankie.expressionmanager.model.ResponseEvent
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

data class Response(
    @PrimaryKey
    val id: String,

    @ColumnInfo(name = "navigation_index")
    val navigationIndex: NavigationIndex,

    @ColumnInfo(name = "is_synced")
    val isSynced: Boolean,

    val lang: String,

    @ColumnInfo(index = true)
    val surveyId: String,

    val startDate: LocalDateTime,

    val submitDate: LocalDateTime?,

    val userId: String,

    @ColumnInfo(name = "response_values")
    val values: Map<String, Any>,

    val version: Int,

    val events: List<ResponseEvent>
) {
    companion object {
        const val STORED_FILENAME_KEY = "stored_filename"
        const val ACTUAL_FILENAME_KEY = "filename"
    }
}
