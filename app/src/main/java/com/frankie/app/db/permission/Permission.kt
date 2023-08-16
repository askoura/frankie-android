package com.frankie.app.db.permission

import androidx.room.ColumnInfo
import androidx.room.Entity
import androidx.room.ForeignKey
import androidx.room.Index
import androidx.room.PrimaryKey
import com.frankie.app.db.survey.SurveyDataEntity

@Entity(tableName = "permissions",
        foreignKeys = [
            ForeignKey(
                    entity = SurveyDataEntity::class,
                    parentColumns = ["id"],
                    childColumns = ["surveyId"],
                    onDelete = ForeignKey.CASCADE
            )
        ], indices = [
    Index(value = ["userId", "surveyId"], unique = true)
])
data class PermissionEntity(
        @PrimaryKey(autoGenerate = true) val id: Long = 0,
        val userId: String,
        @ColumnInfo(index = true)
        val surveyId: String
)