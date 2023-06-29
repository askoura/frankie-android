package com.frankie.app.business.survey

import com.frankie.app.api.survey.Language
import com.frankie.app.api.survey.PublishInfo
import com.frankie.app.api.survey.SurveyDesign
import com.frankie.app.api.survey.SurveyService
import com.frankie.app.api.survey.UploadResponseRequestData
import com.frankie.app.db.ResponseDao
import com.frankie.app.db.permission.PermissionDao
import com.frankie.app.db.survey.LanguageEntity
import com.frankie.app.db.survey.LanguagesEntity
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

    fun getSurveyDbEntity(surveyId: String): Flow<Result<SurveyDataEntity?>>
    fun getSurveyList(): Flow<Result<List<SurveyData>>>
    fun getOfflineSurveyList(): Flow<Result<List<SurveyData>>>
    fun getSurveyFile(surveyId: String, resourceId: String): Flow<Result<DataStream>>

    fun uploadSurveyResponseFile(surveyId: String, file: File): Flow<Result<Unit>>

    fun uploadSurveyResponse(surveyId: String,
                             responseId: String,
                             uploadResponseRequestData: UploadResponseRequestData): Flow<Result<Unit>>

    suspend fun saveSurveyToDB(surveyData: SurveyData, fileQuestions: List<String>)

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

    override fun getSurveyDbEntity(surveyId: String): Flow<Result<SurveyDataEntity?>> = flow {
        val survey = surveyDao.getSurveyDataById(surveyId)
        emit(Result.success(survey))
    }.catch {
        emit(Result.failure(it))
    }.flowOn(Dispatchers.IO)

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
                val newVersionAvailable = savedSurvey?.publishInfoEntity?.toPublishInfo()
                        ?.let { it != design.publishInfo }
                        ?: true
                val survey = SurveyData.fromSurveyAndDesign(
                        survey,
                        savedSurvey?.publishInfoEntity?.toPublishInfo() ?: PublishInfo(),
                        newVersionAvailable,
                        count,
                        responseCount
                )
                val fileQuestions = jacksonKtMapper.treeToValue(design.validationJsonOutput, ValidationOutput::class.java)
                        .schema.filter { it.dataType == DataType.FILE }
                        .map { it.componentCode }

                saveSurveyToDB(survey, fileQuestions)
                survey
            }

            savePermissionsToDB(surveyList)

            emit(Result.success(surveyList))
        }.catch {
            emit(Result.failure(it))
        }.flowOn(Dispatchers.IO)
    }

    override fun getOfflineSurveyList(): Flow<Result<List<SurveyData>>> {
        return flow {
            val userId = sessionManager.getUserIdOrThrow()
            emit(Result.success(surveyDao.getAllSurveyData(sessionManager.getUserIdOrThrow()).map {
                it.toSurveyData(
                    responseDao.countByUserAndSurvey(userId, it.id),
                        responseDao.countCompleteByUserAndSurvey(userId, it.id)
                )
            }))
        }
    }

    override suspend fun saveSurveyToDB(surveyData: SurveyData, fileQuestions: List<String>) {
        surveyDao.insert(surveyData.toSurveyDataEntity(fileQuestions))
    }

    private suspend fun saveSurveysToDB(surveyList: List<SurveyDataEntity>) {
        surveyDao.insertAll(surveyList)
    }

    private suspend fun savePermissionsToDB(surveyList: List<SurveyData>) {
        permissionDao.updateUserPermissions(
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

    override fun uploadSurveyResponseFile(surveyId: String, file: File): Flow<Result<Unit>> = flow {
        val multipartBody = MultipartBody.Part.createFormData("file", file.name, file.asRequestBody())
        service.uploadSurveyFile(surveyId, multipartBody)
        emit(Result.success(Unit))
    }.catch {
        emit(Result.failure(it))
    }.flowOn(Dispatchers.IO)

    override fun uploadSurveyResponse(surveyId: String,
                                      responseId: String,
                                      uploadResponseRequestData: UploadResponseRequestData): Flow<Result<Unit>> = flow {
        service.uploadSurveyResponse(surveyId, responseId, uploadResponseRequestData)
        emit(Result.success(Unit))
    }.catch {
        emit(Result.failure(it))
    }.flowOn(Dispatchers.IO)
}

private fun SurveyData.toSurveyDataEntity(fileQuestions: List<String> = emptyList()): SurveyDataEntity {
    return SurveyDataEntity(
        id = this.id,
        creationDate = this.creationDate,
        lastModified = this.lastModified,
        endDate = this.endDate,
        startDate = this.startDate,
        name = this.name,
        languagesEntity = LanguagesEntity(
            defaultLanguage.toLanguageEntity(),
            additionalLanguages.map { it.toLanguageEntity() }),
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

fun Language.toLanguageEntity(): LanguageEntity {
    return LanguageEntity(code, langName)
}

