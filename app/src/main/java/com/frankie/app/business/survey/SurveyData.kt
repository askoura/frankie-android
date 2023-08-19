package com.frankie.app.business.survey

import android.os.Parcelable
import com.frankie.app.api.survey.PublishInfo
import com.frankie.app.api.survey.Survey
import com.frankie.app.business.fromUtc
import kotlinx.parcelize.Parcelize
import java.time.LocalDateTime

@Parcelize
data class SurveyData(
    val id: String,
    val creationDate: LocalDateTime,
    val lastModified: LocalDateTime,
    val startDate: LocalDateTime?,
    val endDate: LocalDateTime?,
    val name: String,
    val status: String,
    val usage: String,
    val surveyQuota: Int,
    val userQuota: Int,
    val publishInfo: PublishInfo,
    val newVersionAvailable: Boolean,
    val localResponsesCount: Int,
    val localCompleteResponsesCount: Int,
    val localUnsyncedResponsesCount: Int,
    val syncedResponseCount: Int,
    val totalResponseCount: Int,
    val saveTimings: Boolean,
    val backgroundAudio: Boolean,
    val recordGps: Boolean,
    val isSyncing: Boolean = false
) : Parcelable {

    private val scheduled: Boolean
        get() = startDate != null && startDate.isAfter(LocalDateTime.now())
    private val expired: Boolean
        get() = endDate != null && endDate.isBefore(LocalDateTime.now())

    val surveyStatus: SurveyStatus
        get() {
            return when {
                scheduled -> SurveyStatus.SCHEDULED
                expired -> SurveyStatus.EXPIRED
                else -> SurveyStatus.ACTIVE
            }
        }

    fun quotaExceeded(newUnsyncedCount: Int? = null): Boolean {
        val finalUnsyncedCount = newUnsyncedCount ?: localUnsyncedResponsesCount
        val userQuotaExceeded =
            userQuota > -1 && finalUnsyncedCount + syncedResponseCount >= userQuota
        val totalQuotaExceeded =
            surveyQuota > -1 && finalUnsyncedCount + totalResponseCount >= surveyQuota
        return userQuotaExceeded || totalQuotaExceeded
    }

    companion object {
        fun fromSurveyAndDesign(
            survey: Survey,
            currentPublishInfo: PublishInfo,
            newVersionAvailable: Boolean,
            responsesCount: Int,
            completeResponsesCount: Int,
            unsyncedCount: Int
        ): SurveyData {
            return SurveyData(
                id = survey.id,
                survey.creationDate.fromUtc(),
                survey.lastModified.fromUtc(),
                survey.startDate?.fromUtc(),
                survey.endDate?.fromUtc(),
                survey.name,
                survey.status,
                survey.usage,
                survey.surveyQuota,
                survey.userQuota,
                currentPublishInfo,
                newVersionAvailable,
                responsesCount,
                completeResponsesCount,
                unsyncedCount,
                survey.syncedResponseCount,
                survey.totalResponseCount,
                survey.saveTimings,
                survey.backgroundAudio,
                survey.recordGps,

                )
        }
    }
}

enum class SurveyStatus {
    ACTIVE, EXPIRED, SCHEDULED
}