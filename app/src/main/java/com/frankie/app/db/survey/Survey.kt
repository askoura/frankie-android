package com.frankie.app.db.survey

import androidx.room.Embedded
import androidx.room.Entity
import androidx.room.PrimaryKey
import com.frankie.app.api.survey.PublishInfo
import com.frankie.app.business.survey.SurveyData
import com.frankie.app.business.survey.toPublishInfo
import java.time.LocalDateTime

@Entity(tableName = "survey_data_table")
data class SurveyDataEntity(
    @PrimaryKey val id: String = "",
    val creationDate: LocalDateTime,
    val lastModified: LocalDateTime,
    val startDate: LocalDateTime?,
    val endDate: LocalDateTime?,
    val name: String = "",
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
    val recordGps: Boolean,
    val description: String = "",
    val imageUrl: String = ""
) {
    fun toSurveyData(
        localResponseCount: Int,
        localCompleteResponseCount: Int,
        localUnsyncedResponseCount: Int
    ): SurveyData = SurveyData(
        id = id,
        creationDate = creationDate,
        lastModified = lastModified,
        startDate = startDate,
        endDate = endDate,
        name = name,
        status = status,
        usage = usage,
        surveyQuota = quota,
        userQuota = userQuota,
        publishInfo = publishInfoEntity.toPublishInfo(),
        newVersionAvailable = false,
        localResponsesCount = localResponseCount,
        localCompleteResponsesCount = localCompleteResponseCount,
        localUnsyncedResponsesCount = localUnsyncedResponseCount,
        syncedResponseCount = syncedResponseCount,
        totalResponseCount = totalResponsesCount,
        saveTimings = saveTimings,
        backgroundAudio = backgroundAudio,
        recordGps = recordGps,
        description = description,
        imageUrl = imageUrl
    )
}

data class PublishInfoEntity(
    val version: Int = 0,
    val subVersion: Int = 0,
    val timeLastModified: String = PublishInfo.LAST_MODIFIED_INITIAL,
)