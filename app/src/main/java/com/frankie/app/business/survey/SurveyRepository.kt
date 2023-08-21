package com.frankie.app.business.survey

import com.frankie.app.api.survey.PublishInfo
import com.frankie.app.api.survey.Survey
import com.frankie.app.api.survey.SurveyDesign
import com.frankie.app.api.survey.SurveyService
import com.frankie.app.api.survey.UploadResponseRequestData
import com.frankie.app.db.ResponseDao
import com.frankie.app.db.permission.PermissionDao
import com.frankie.app.db.permission.PermissionEntity
import com.frankie.app.db.survey.PublishInfoEntity
import com.frankie.app.db.survey.SurveyDao
import com.frankie.app.db.survey.SurveyDataEntity
import com.frankie.expressionmanager.model.DataType
import com.frankie.expressionmanager.model.jacksonKtMapper
import com.frankie.expressionmanager.usecase.ValidationOutput
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.flow.Flow
import kotlinx.coroutines.flow.catch
import kotlinx.coroutines.flow.flow
import kotlinx.coroutines.flow.flowOn
import okhttp3.MultipartBody
import okhttp3.RequestBody.Companion.asRequestBody
import java.io.File

interface SurveyRepository {

    suspend fun getSurveyDbEntity(surveyId: String): SurveyDataEntity?
    fun getSurveyList(): Flow<Result<List<SurveyData>>>
    suspend fun getOfflineSurveyList(): List<SurveyData>

    suspend fun getOfflineSurvey(surveyId: String): SurveyData
    fun getSurveyFile(surveyId: String, resourceId: String): Flow<Result<DataStream>>
    suspend fun uploadSurveyResponseFile(surveyId: String, fileName: String, file: File)

    fun uploadSurveyResponse(
        surveyId: String,
        responseId: String,
        uploadResponseRequestData: UploadResponseRequestData
    ): Flow<Result<Survey>>

    suspend fun saveSurveyToDB(surveyData: SurveyData, fileQuestions: List<String>)
    suspend fun updateSurveyToDB(surveyData: SurveyData, fileQuestions: List<String>)
    suspend fun updateSurveyInDB(survey: Survey)

    suspend fun surveyDesign(surveyData: SurveyData): SurveyDesign

    sealed class DataStream {
        class Chunk(val bytes: ByteArray) : DataStream()
        object End : DataStream()
    }
}

class SurveyRepositoryImpl(
    private val service: SurveyService,
    private val surveyDao: SurveyDao,
    private val responseDao: ResponseDao,
    private val permissionDao: PermissionDao,
    private val sessionManager: SessionManager
) : SurveyRepository {

    override suspend fun getSurveyDbEntity(surveyId: String): SurveyDataEntity? =
        surveyDao.getSurveyDataById(surveyId)

    override fun getSurveyList(): Flow<Result<List<SurveyData>>> {
        return flow {
            val surveyList = service.getSurveyList().map { survey ->
                val design = service.getSurveyDesign(survey.id, PublishInfo())
                val savedSurvey = surveyDao.getSurveyDataById(survey.id)
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
                val newVersionAvailable = savedSurvey?.publishInfoEntity?.toPublishInfo()
                    ?.let { it != design.publishInfo }
                    ?: true
                val surveyData = SurveyData.fromSurveyAndDesign(
                    survey,
                    savedSurvey?.publishInfoEntity?.toPublishInfo() ?: PublishInfo(),
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
                surveyData
            }

            deletePermissionsForUserNotInList(surveyList)

            emit(Result.success(surveyList))
        }.catch {
            emit(Result.failure(it))
        }.flowOn(Dispatchers.IO)
    }

    override suspend fun getOfflineSurveyList(): List<SurveyData> {
        val userId = sessionManager.getUserIdOrThrow()
        surveyDao.getAllSurveyData(sessionManager.getUserIdOrThrow()).let { list ->
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
        permissionDao.insert(
            PermissionEntity(
                userId = sessionManager.getUserIdOrThrow(),
                surveyId = surveyData.id
            )
        )
    }

    override suspend fun updateSurveyToDB(surveyData: SurveyData, fileQuestions: List<String>) {
        surveyDao.update(surveyData.toSurveyDataEntity(fileQuestions))
    }

    override suspend fun updateSurveyInDB(survey: Survey) {
        surveyDao.getSurveyDataById(survey.id)?.let { surveyDataEntity ->
            surveyDao.update(surveyDataEntity.update(survey))
        } ?: throw IllegalStateException("Survey not found with id: ${survey.id}")
    }

    private suspend fun deletePermissionsForUserNotInList(surveyList: List<SurveyData>) {
        permissionDao.deletePermissionsForUserNotInList(
            sessionManager.getUserIdOrThrow(),
            surveyList.map { it.id })
    }

    override suspend fun surveyDesign(surveyData: SurveyData): SurveyDesign {
        return service.getSurveyDesign(surveyData.id, surveyData.publishInfo)
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
        surveyId: String,
        fileName: String,
        file: File
    ) {
        val multipartBody =
            MultipartBody.Part.createFormData("file", file.name, file.asRequestBody())
        service.uploadSurveyFile(surveyId, fileName, multipartBody)
    }

    override fun uploadSurveyResponse(
        surveyId: String,
        responseId: String,
        uploadResponseRequestData: UploadResponseRequestData
    ): Flow<Result<Survey>> = flow {

        emit(
            Result.success(
                service.uploadSurveyResponse(
                    surveyId,
                    responseId,
                    uploadResponseRequestData
                )
            )
        )
    }.catch {
        emit(Result.failure(it))
    }.flowOn(Dispatchers.IO)
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


fun PublishInfo.toPublishInfoEntity(): PublishInfoEntity {
    return PublishInfoEntity(version, subVersion, lastModified)
}

fun PublishInfoEntity.toPublishInfo(): PublishInfo {
    return PublishInfo(version, subVersion, timeLastModified)
}

