package com.frankie.app.business.survey

import android.content.Context
import com.frankie.app.AppEvent
import com.frankie.app.EventBus
import com.frankie.app.api.survey.UploadResponseRequestData
import com.frankie.app.business.responses.ResponseRepository
import com.frankie.app.db.model.Response
import com.frankie.app.db.model.Response.Companion.ACTUAL_FILENAME_KEY
import com.frankie.app.db.model.Response.Companion.STORED_FILENAME_KEY
import com.frankie.app.ui.common.FileUtils
import com.frankie.expressionmanager.model.ResponseEvent


interface UploadSurveyResponsesUseCase {
    suspend operator fun invoke()

}

class UploadSurveyResponsesUseCaseImpl(
    private val appContext: Context,
    private val responseRepository: ResponseRepository,
    private val surveyRepository: SurveyRepository,
    private val sessionManager: SessionManager,
    private val eventBus: EventBus
) : UploadSurveyResponsesUseCase {

    override suspend fun invoke() {
        try {
            if (sessionManager.isGuest()) {
                return
            }
            eventBus.emitEvent(AppEvent.UploadingResponse(true))
            surveyRepository.getOfflineSurveyList()
                .filter {
                    it.surveyStatus == SurveyStatus.ACTIVE &&
                        it.localUnsyncedResponsesCount > 0
                }.forEach {
                    try {
                        uploadSurvey(it.id)
                    } catch (e: Exception) {
                        reportError(e)
                    }
                }
            eventBus.emitEvent(AppEvent.UploadingResponse(false))
        } catch (e: java.lang.Exception) {
            eventBus.emitEvent(AppEvent.UploadingResponse(false))
        }
    }

    private suspend fun uploadSurvey(surveyId: String) {
        eventBus.emitEvent(AppEvent.UploadingSurveyResponse(surveyId))
        val responses = responseRepository.getResponses(surveyId)
            .filter { !it.isSynced && it.submitDate != null }
        val surveyDbEntity = surveyRepository.getSurveyDbEntity(surveyId)
            ?: throw Exception("Survey not found")
        val fileQuestions = surveyDbEntity.fileQuestions.map { "${it}.value" }
        responses.forEach { response ->
            try {
                syncResponse(surveyId, response, fileQuestions)
            } catch (e: Exception) {
                reportError(e)
            }
        }
    }

    @Suppress("UNCHECKED_CAST")
    private suspend fun syncResponse(
        surveyId: String,
        response: Response,
        fileQuestions: List<String>
    ) {
        val voiceRecordingFilenames =
            response.events.filterIsInstance<ResponseEvent.VoiceRecording>()
                .mapIndexed { index, it ->
                    FileUploadInfo(
                        it.fileName,
                        "voice_recording_${index + 1}.m4a"
                    )
                }
        val filenames = response.values.filterKeys(fileQuestions::contains)
            .values.mapNotNull { value ->
                (value as? Map<*, String>)?.let {
                    FileUploadInfo(it[STORED_FILENAME_KEY]!!, it[ACTUAL_FILENAME_KEY]!!)
                }
            }

        val allFilenames = filenames + voiceRecordingFilenames
        allFilenames.filter {
            !surveyRepository.fileOnServer(surveyId, it.storedFileName)
        }.forEach { filename ->
            val file = FileUtils.getResponseFile(appContext, filename.storedFileName, surveyId)
            if (file.exists()) {
                surveyRepository.uploadSurveyResponseFile(
                    surveyId,
                    fileName = filename.originalFileName,
                    storedFileName = filename.storedFileName,
                    file = file
                )
                file.delete()

            } else {
                reportError(IllegalStateException("File not found: $filename"))
            }
        }

        // 3. upload response row
        val uploadData = UploadResponseRequestData(
            versionId = response.version,
            lang = response.lang,
            events = response.events,
            values = response.values,
            startDate = response.startDate,
            submitDate = response.submitDate,
            userId = sessionManager.getUserIdOrThrow(),
            navigationIndex = response.navigationIndex
        )
        val result =
            surveyRepository.uploadSurveyResponse(surveyId, response.id, uploadData)
        if (result.isSuccess) {
            // 4. mark response as synced
            responseRepository.markResponseAsSynced(response.id)
            surveyRepository.updateSurveyInDB(result.getOrThrow())
            eventBus.emitEvent(AppEvent.UploadedSurveyResponse(response.id, result.getOrThrow()))
        } else {
            reportError(result.exceptionOrNull())
        }
    }

    private fun reportError(throwable: Throwable?) {
        throwable?.printStackTrace()
    }

    data class FileUploadInfo(val storedFileName: String, val originalFileName: String)

}
