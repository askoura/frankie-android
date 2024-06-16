package com.frankie.app.business.survey

import android.content.Context
import com.frankie.app.api.survey.PublishInfo
import com.frankie.app.api.survey.Survey
import com.frankie.app.api.survey.SurveyDesign
import com.frankie.app.api.survey.SurveyService
import com.frankie.app.api.survey.UploadResponseRequestData
import com.frankie.app.db.ResponseDao
import com.frankie.app.db.survey.PublishInfoEntity
import com.frankie.app.db.survey.SurveyDao
import com.frankie.app.db.survey.SurveyDataEntity
import com.frankie.app.ui.common.FileUtils
import com.frankie.expressionmanager.model.DataType
import com.frankie.expressionmanager.model.jacksonKtMapper
import com.frankie.expressionmanager.usecase.ValidationOutput
import java.io.File
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.flow.Flow
import kotlinx.coroutines.flow.catch
import kotlinx.coroutines.flow.flow
import kotlinx.coroutines.flow.flowOn
import okhttp3.MultipartBody
import okhttp3.RequestBody.Companion.asRequestBody

interface SurveyRepository {

    suspend fun getSurveyDbEntity(surveyId: String): SurveyDataEntity?
    fun getSurveyList(): Flow<List<SurveyData>>
    suspend fun shouldSync(): Boolean
    suspend fun getOfflineSurveyList(): List<SurveyData>

    suspend fun getOfflineSurvey(surveyId: String): SurveyData
    fun getSurveyFile(surveyId: String, resourceId: String): Flow<Result<DataStream>>
    suspend fun uploadSurveyResponseFile(
        surveyId: String,
        fileName: String,
        storedFileName: String,
        file: File
    )

    suspend fun fileOnServer(
        surveyId: String,
        fileName: String
    ): Boolean

    suspend fun uploadSurveyResponse(
        surveyId: String,
        responseId: String,
        uploadResponseRequestData: UploadResponseRequestData
    ): Result<Survey>

    suspend fun saveSurveyToDB(surveyData: SurveyData, fileQuestions: List<String>)
    suspend fun updateSurveyToDB(surveyData: SurveyData, fileQuestions: List<String>)
    suspend fun updateSurveyInDB(survey: Survey)

    suspend fun surveyDesign(surveyData: SurveyData): SurveyDesign
    suspend fun clearSurveyFiles()

    sealed class DataStream {
        class Chunk(val bytes: ByteArray) : DataStream()
        data object End : DataStream()
    }
}

class SurveyRepositoryImpl(
    private val service: SurveyService,
    private val surveyDao: SurveyDao,
    private val context: Context,
    private val responseDao: ResponseDao,
    private val sessionManager: SessionManager
) : SurveyRepository {

    override suspend fun getSurveyDbEntity(surveyId: String): SurveyDataEntity? =
        surveyDao.getSurveyDataById(surveyId)

    override fun getSurveyList(): Flow<List<SurveyData>> {
        return flow {
            val offlineSurveys = getOfflineSurveyList()
            emit(offlineSurveys)
            val list =
                if (sessionManager.isGuest()) service.getGuestSurveyList() else service.getSurveyList()
            val surveyList = list.map { survey ->
                val offlineSurvey = offlineSurveys.firstOrNull { it.id == survey.id }
                return@map if (survey.publishInfo?.requiresUpdates(offlineSurvey?.publishInfo) == true   ) {
                    offlineSurvey!!
                } else {
                    getSurveyDesign(survey, offlineSurvey)
                }
            }
            offlineSurveys
                .filter { offlineSurvey -> !surveyList.any { it.id == offlineSurvey.id } }
                .forEach {
                    deleteSurvey(it.id)
                }
            emit(surveyList)
        }.flowOn(Dispatchers.IO)
    }

    override suspend fun shouldSync(): Boolean {
        return !sessionManager.isGuest() && getOfflineSurveyList().any {
            it
                .localUnsyncedResponsesCount > 0
        }
    }

    private suspend fun deleteSurvey(surveyId: String) {
        FileUtils.deleteSurveyDirectory(context, surveyId)
        surveyDao.deleteById(surveyId)
    }

    private suspend fun getSurveyDesign(survey: Survey, offlineSurvey: SurveyData?): SurveyData {
        val design = if (sessionManager.isGuest()) {
            service.getGuestSurveyDesign(survey.id, PublishInfo())
        } else {
            service.getSurveyDesign(survey.id, PublishInfo())
        }
        val count = responseDao.countByUserAndSurvey(
            surveyId = survey.id,
            userId = sessionManager.getUserIdOrThrow()
        )
        val responseCount = responseDao.countCompleteByUserAndSurvey(
            surveyId = survey.id,
            userId = sessionManager.getUserIdOrThrow()
        )
        val unsyncedCount = responseDao.countUnsyncedByUserAndSurvey(
            surveyId = survey.id,
            userId = sessionManager.getUserIdOrThrow()
        )
        val newVersionAvailable = offlineSurvey?.publishInfo?.toPublishInfo()
            ?.let { it != design.publishInfo }
            ?: true
        val surveyData = SurveyData.fromSurveyAndDesign(
            survey,
            offlineSurvey?.publishInfo?.toPublishInfo() ?: PublishInfo(),
            newVersionAvailable,
            count,
            responseCount,
            unsyncedCount
        )
        val fileQuestions = jacksonKtMapper.treeToValue(
            design.validationJsonOutput,
            ValidationOutput::class.java
        )
            .schema.filter { it.dataType == DataType.FILE }
            .map { it.componentCode }

        saveSurveyToDB(surveyData, fileQuestions)
        return surveyData
    }

    override suspend fun getOfflineSurveyList(): List<SurveyData> {
        val userId = sessionManager.getUserIdOrThrow()
        surveyDao.getAllSurveyData().let { list ->
            return list.map {
                it.toSurveyData(
                    responseDao.countByUserAndSurvey(userId, it.id),
                    responseDao.countCompleteByUserAndSurvey(userId, it.id),
                    responseDao.countUnsyncedByUserAndSurvey(userId, it.id)
                )
            }
        }

    }


    override suspend fun getOfflineSurvey(surveyId: String): SurveyData {
        val userId = sessionManager.getUserIdOrThrow()
        val survey = surveyDao.getSurveyDataById(surveyId)!!
        return survey.toSurveyData(
            responseDao.countByUserAndSurvey(userId, survey.id),
            responseDao.countCompleteByUserAndSurvey(userId, survey.id),
            responseDao.countUnsyncedByUserAndSurvey(userId, survey.id)
        )
    }

    override suspend fun saveSurveyToDB(surveyData: SurveyData, fileQuestions: List<String>) {
        surveyDao.insert(surveyData.toSurveyDataEntity(fileQuestions))
    }

    override suspend fun updateSurveyToDB(surveyData: SurveyData, fileQuestions: List<String>) {
        surveyDao.update(surveyData.toSurveyDataEntity(fileQuestions))
    }

    override suspend fun updateSurveyInDB(survey: Survey) {
        surveyDao.getSurveyDataById(survey.id)?.let { surveyDataEntity ->
            surveyDao.update(surveyDataEntity.update(survey))
        } ?: throw IllegalStateException("Survey not found with id: ${survey.id}")
    }

    override suspend fun surveyDesign(surveyData: SurveyData): SurveyDesign {
        return if (sessionManager.isGuest()) service.getGuestSurveyDesign(
            surveyData.id, surveyData
                .publishInfo
        )
        else service.getSurveyDesign(surveyData.id, surveyData.publishInfo)
    }

    override suspend fun clearSurveyFiles() {
        surveyDao.getAllSurveyData().forEach {
            FileUtils.deleteSurveyDirectory(context, it.id)
        }
    }

    override fun getSurveyFile(
        surveyId: String,
        resourceId: String
    ): Flow<Result<SurveyRepository.DataStream>> {
        return flow {
            service.getSurveyFile(surveyId, resourceId).byteStream().use { inputStream ->
                val buffer = ByteArray(DEFAULT_BUFFER_SIZE)
                var bytes = inputStream.read(buffer)
                while (bytes >= 0) {
                    emit(
                        Result.success(
                            SurveyRepository.DataStream.Chunk(
                                buffer.copyOfRange(
                                    0,
                                    bytes
                                )
                            )
                        )
                    )
                    bytes = inputStream.read(buffer)
                }
                emit(Result.success(SurveyRepository.DataStream.End))
            }
        }.catch {
            emit(Result.failure(it))
        }.flowOn(Dispatchers.IO)
    }

    override suspend fun uploadSurveyResponseFile(
        surveyId: String, fileName: String, storedFileName: String, file: File
    ) {
        val multipartBody =
            MultipartBody.Part.createFormData("file", fileName, file.asRequestBody())
        service.uploadSurveyFile(surveyId, storedFileName, multipartBody)
    }

    override suspend fun fileOnServer(surveyId: String, fileName: String): Boolean {
        return service.fileExists(surveyId, fileName)
    }

    override suspend fun uploadSurveyResponse(
        surveyId: String,
        responseId: String,
        uploadResponseRequestData: UploadResponseRequestData
    ): Result<Survey> {
        return try {
            Result.success(
                service.uploadSurveyResponse(
                    surveyId,
                    responseId,
                    uploadResponseRequestData
                )
            )
        } catch (e: Exception) {
            Result.failure(e)
        }
    }

    private fun SurveyDataEntity.update(survey: Survey): SurveyDataEntity {
        return SurveyDataEntity(
            id = id,
            creationDate = survey.creationDate,
            lastModified = survey.lastModified,
            endDate = survey.endDate,
            startDate = survey.startDate,
            name = survey.name,
            status = survey.status,
            usage = survey.usage,
            quota = survey.surveyQuota,
            userQuota = survey.userQuota,
            publishInfoEntity = publishInfoEntity,
            newVersionAvailable = newVersionAvailable,
            saveTimings = survey.saveTimings,
            backgroundAudio = survey.backgroundAudio,
            recordGps = survey.recordGps,
            totalResponsesCount = survey.totalResponseCount,
            syncedResponseCount = survey.syncedResponseCount,
            fileQuestions = fileQuestions
        )
    }

    private fun SurveyData.toSurveyDataEntity(fileQuestions: List<String> = emptyList()): SurveyDataEntity {
        return SurveyDataEntity(
            id = this.id,
            creationDate = this.creationDate,
            lastModified = this.lastModified,
            endDate = this.endDate,
            startDate = this.startDate,
            name = this.name,
            status = this.status,
            usage = this.usage,
            quota = this.surveyQuota,
            userQuota = this.userQuota,
            publishInfoEntity = this.publishInfo.toPublishInfoEntity(),
            newVersionAvailable = this.newVersionAvailable,
            saveTimings = this.saveTimings,
            backgroundAudio = this.backgroundAudio,
            recordGps = this.recordGps,
            totalResponsesCount = this.totalResponseCount,
            syncedResponseCount = this.syncedResponseCount,
            fileQuestions = fileQuestions
        )
    }
}


fun PublishInfo.toPublishInfoEntity(): PublishInfoEntity {
    return PublishInfoEntity(version, subVersion, lastModified)
}

fun PublishInfoEntity.toPublishInfo(): PublishInfo {
    return PublishInfo(version, subVersion, timeLastModified)
}

fun PublishInfo.toPublishInfo(): PublishInfo {
    return PublishInfo(version, subVersion, lastModified)
}

