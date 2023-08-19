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
    val recordGps: Boolean
) {
    fun toSurveyData(
        localResponseCount: Int,
        localCompleteResponseCount: Int,
        localUnsyncedResponseCount: Int
    ): SurveyData = SurveyData(
        id,
        creationDate,
        lastModified,
        startDate,
        endDate,
        name,
        status,
        usage,
        quota,
        userQuota,
        publishInfoEntity.toPublishInfo(),
        false,
        localResponseCount,
        localCompleteResponseCount,
        localUnsyncedResponseCount,
        syncedResponseCount,
        totalResponsesCount,
        saveTimings,
        backgroundAudio,
        recordGps,
    )
}

data class PublishInfoEntity(
    val version: Int = 0,
    val subVersion: Int = 0,
    val timeLastModified: String = PublishInfo.LAST_MODIFIED_INITIAL,
) {
    constructor() : this(0, 0, PublishInfo.LAST_MODIFIED_INITIAL)
}
