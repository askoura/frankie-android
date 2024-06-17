package com.frankie.app.business.survey

import android.os.Parcelable
import com.frankie.app.api.survey.PublishInfo
import com.frankie.app.api.survey.Survey
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
    val isSyncing: Boolean = false,
    val description: String,
    val imageUrl: String,
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

    val isPlayEnabled: Boolean
        get() = !newVersionAvailable
                && publishInfo.version > 0
                && !quotaExceeded()
                && surveyStatus == SurveyStatus.ACTIVE

    val isResponsesEnabled get() = localResponsesCount > 0

    fun quotaExceeded(newUnsyncedCount: Int? = null): Boolean {
        val finalUnsyncedCount = newUnsyncedCount ?: localUnsyncedResponsesCount
        val userQuotaExceeded =
            userQuota > -1 && finalUnsyncedCount + syncedResponseCount >= userQuota
        val totalQuotaExceeded =
            surveyQuota > -1 && finalUnsyncedCount + totalResponseCount >= surveyQuota
        return userQuotaExceeded || totalQuotaExceeded
    }

    fun updateFromSurvey(survey: Survey) = copy(
        lastModified = survey.lastModified,
        startDate = survey.startDate,
        endDate = survey.endDate,
        name = survey.name,
        status = survey.status,
        usage = survey.usage,
        surveyQuota = survey.surveyQuota,
        userQuota = survey.userQuota,
        syncedResponseCount = survey.syncedResponseCount,
        totalResponseCount = survey.totalResponseCount,
        saveTimings = survey.saveTimings,
        backgroundAudio = survey.backgroundAudio,
        recordGps = survey.recordGps,

        )

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
                creationDate = survey.creationDate,
                lastModified = survey.lastModified,
                startDate = survey.startDate,
                endDate = survey.endDate,
                name = survey.name,
                status = survey.status,
                usage = survey.usage,
                surveyQuota = survey.surveyQuota,
                userQuota = survey.userQuota,
                publishInfo = currentPublishInfo,
                newVersionAvailable = newVersionAvailable,
                localResponsesCount = responsesCount,
                localCompleteResponsesCount = completeResponsesCount,
                localUnsyncedResponsesCount = unsyncedCount,
                syncedResponseCount = survey.syncedResponseCount,
                totalResponseCount = survey.totalResponseCount,
                saveTimings = survey.saveTimings,
                backgroundAudio = survey.backgroundAudio,
                recordGps = survey.recordGps,
                description = survey.description
                    ?: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                imageUrl = survey.imageUrl ?: ""
            )
        }
    }
}

enum class SurveyStatus {
    ACTIVE, EXPIRED, SCHEDULED
}