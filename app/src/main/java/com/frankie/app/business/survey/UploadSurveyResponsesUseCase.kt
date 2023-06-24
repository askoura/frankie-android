package com.frankie.app.business.survey

import android.content.Context
import com.frankie.app.api.survey.UploadResponseRequestData
import com.frankie.app.business.responses.ResponseRepository
import com.frankie.app.db.model.Response
import com.frankie.app.ui.common.FileUtils
import com.frankie.expressionmanager.model.ResponseEvent
import kotlinx.coroutines.flow.Flow
import kotlinx.coroutines.flow.catch
import kotlinx.coroutines.flow.flow
import kotlinx.coroutines.flow.single

interface UploadSurveyResponsesUseCase {
    operator fun invoke(surveyId: String): Flow<Result<Float>>
}

class UploadSurveyResponsesUseCaseImpl(
        private val appContext: Context,
        private val responseRepository: ResponseRepository,
        private val surveyRepository: SurveyRepository,
) : UploadSurveyResponsesUseCase {

    override fun invoke(surveyId: String): Flow<Result<Float>> = flow {
        // 1. upload files
        val responses = responseRepository.getResponses(surveyId)
                .single().getOrThrow()
                .filter { !it.isSynced }
        val surveyDbEntity = surveyRepository.getSurveyDbEntity(surveyId).single().getOrThrow()
                ?: throw Exception("Survey not found")
        val publishInfo = surveyDbEntity.publishInfoEntity
        val fileQuestions = surveyDbEntity.fileQuestions.map { "${it}.value" }
        responses.forEachIndexed { index, response ->
            val voiceRecordingFilenames = response.events.filterIsInstance<ResponseEvent.VoiceRecording>().map { it.fileName }
            val filenames = response.values.filterKeys(fileQuestions::contains)
                    .values.mapNotNull { (it as? Map<*, *>)?.get(Response.STORED_FILENAME_KEY) as? String }

            val allFilenames = filenames + voiceRecordingFilenames
            allFilenames.forEach { filename ->
                val file = FileUtils.getResponseFile(appContext, filename, surveyId)
                if (file.exists()) {
                    surveyRepository.uploadSurveyResponseFile(surveyId, file)
                } else {
                    // TODO: report file missing
                }
            }

            // 2. upload response row
            val uploadData = UploadResponseRequestData(versionId = publishInfo.version,
                    lang = response.lang,
                    events = response.events,
                    values = response.values)
            surveyRepository.uploadSurveyResponse(surveyId, response.id, uploadData)

            // 3. mark response as synced
            responseRepository.markResponseAsSynced(response.id)

            // 4. delete files
            allFilenames.forEach { filename ->
                val file = FileUtils.getResponseFile(appContext, filename, surveyId)
                if (file.exists()) {
                    try {
                        file.delete()
                    } catch (e: Exception) {
                        // TODO: report file deletion error
                        e.printStackTrace()
                    }
                }
            }

            emit(Result.success((index + 1).toFloat() / responses.size))
        }
    }.catch {
        emit(Result.failure(it))
    }

}
