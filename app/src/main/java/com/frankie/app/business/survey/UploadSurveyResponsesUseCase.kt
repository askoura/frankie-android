package com.frankie.app.business.survey

import android.content.Context
import com.frankie.app.api.survey.UploadResponseRequestData
import com.frankie.app.business.responses.ResponseRepository
import com.frankie.app.db.model.Response.Companion.ACTUAL_FILENAME_KEY
import com.frankie.app.db.model.Response.Companion.STORED_FILENAME_KEY
import com.frankie.app.ui.common.FileUtils
import com.frankie.expressionmanager.model.ResponseEvent
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.flow.Flow
import kotlinx.coroutines.flow.catch
import kotlinx.coroutines.flow.collect
import kotlinx.coroutines.flow.flow
import kotlinx.coroutines.flow.flowOn
import kotlinx.coroutines.flow.single


interface UploadSurveyResponsesUseCase {
    operator fun invoke(): Flow<Result<Unit>>

}

class UploadSurveyResponsesUseCaseImpl(
    private val appContext: Context,
    private val responseRepository: ResponseRepository,
    private val surveyRepository: SurveyRepository
) : UploadSurveyResponsesUseCase {

    override fun invoke() = flow {
        val result = surveyRepository.getSurveyList().single()
        if (result.isSuccess) {
            result.getOrThrow().filter { it.surveyStatus == SurveyStatus.ACTIVE }.forEach {
                uploadSurvey(it.id)
            }
            emit(Result.success(Unit))
        } else {
            emit(Result.failure(result.exceptionOrNull() ?: Exception("Unknown error")))
        }
    }.catch {
        emit(Result.failure(it))
    }.flowOn(Dispatchers.IO)

    suspend fun uploadSurvey(surveyId: String) {
        // 1. upload files
        val responses = responseRepository.getResponses(surveyId)
            .single().getOrThrow()
            .filter { !it.isSynced }
        val surveyDbEntity = surveyRepository.getSurveyDbEntity(surveyId).single().getOrThrow()
            ?: throw Exception("Survey not found")
        val publishInfo = surveyDbEntity.publishInfoEntity
        val fileQuestions = surveyDbEntity.fileQuestions.map { "${it}.value" }
        responses.forEach { response ->
            val voiceRecordingFilenames =
                response.events.filterIsInstance<ResponseEvent.VoiceRecording>()
                    .mapIndexed { index, it ->
                        FileUploadInfo(
                            it.fileName,
                            "voice_recording_$index.3gp"
                        )
                    }
            val filenames = response.values.filterKeys(fileQuestions::contains)
                .values.mapNotNull { value ->
                    (value as? Map<*, String>)?.let {
                        FileUploadInfo(it[STORED_FILENAME_KEY]!!, it[ACTUAL_FILENAME_KEY]!!)
                    }
                }

            val allFilenames = filenames + voiceRecordingFilenames
            allFilenames.forEach { filename ->
                val file = FileUtils.getResponseFile(appContext, filename.storedFileName, surveyId)
                if (file.exists()) {
                    val result = surveyRepository.uploadSurveyResponseFile(
                        surveyId,
                        filename.originalFileName,
                        file
                    ).single()
                    if (result.isSuccess) {
                        // 2. delete file after upload
                        try {
                            file.delete()
                        } catch (e: Exception) {
                            reportError(e)
                            e.printStackTrace()
                        }
                    } else {
                        reportError(result.exceptionOrNull())
                    }
                } else {
                    reportError(IllegalStateException("File not found: $filename"))
                }
            }

            // 3. upload response row
            val uploadData = UploadResponseRequestData(
                versionId = publishInfo.version,
                lang = response.lang,
                events = response.events,
                values = response.values,
                startDate = response.startDate,
                submitDate = response.submitDate,
                userId = response.userId,
                navigationIndex = response.navigationIndex
            )
            val result =
                surveyRepository.uploadSurveyResponse(surveyId, response.id, uploadData).single()
            if (result.isSuccess) {
                // 4. mark response as synced
                responseRepository.markResponseAsSynced(response.id).collect()
            } else {
                reportError(result.exceptionOrNull())
            }
        }
    }

    private fun reportError(throwable: Throwable?) {
        // TODO: report error
    }

    data class FileUploadInfo(val storedFileName: String, val originalFileName: String)

}
