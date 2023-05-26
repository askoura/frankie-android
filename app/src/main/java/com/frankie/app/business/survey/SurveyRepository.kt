package com.frankie.app.business.survey

import com.frankie.app.api.survey.Language
import com.frankie.app.api.survey.PublishInfo
import com.frankie.app.api.survey.SurveyDesign
import com.frankie.app.api.survey.SurveyService
import com.frankie.app.db.ResponseDao
import com.frankie.app.db.permission.PermissionDao
import com.frankie.app.db.survey.LanguageEntity
import com.frankie.app.db.survey.LanguagesEntity
import com.frankie.app.db.survey.PublishInfoEntity
import com.frankie.app.db.survey.SurveyDataDao
import com.frankie.app.db.survey.SurveyDataEntity
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.flow.Flow
import kotlinx.coroutines.flow.catch
import kotlinx.coroutines.flow.flow
import kotlinx.coroutines.flow.flowOn

interface SurveyRepository {
    fun getSurveyList(): Flow<Result<List<SurveyData>>>
    fun getSurveyFile(surveyId: String, resourceId: String): Flow<Result<DataStream>>

    suspend fun saveSurveyToDB(surveyData: SurveyData)

    suspend fun surveyDesign(surveyData: SurveyData): SurveyDesign

    sealed class DataStream {
        class Chunk(val bytes: ByteArray) : DataStream()
        object End : DataStream()
    }
}

class SurveyRepositoryImpl(
    private val service: SurveyService,
    private val surveyDataDao: SurveyDataDao,
    private val responseDao: ResponseDao,
    private val permissionDao: PermissionDao,
    private val sessionManager: SessionManager
) : SurveyRepository {
    override fun getSurveyList(): Flow<Result<List<SurveyData>>> {
        return flow {
            val surveyList = service.getSurveyList().map { survey ->
                val design = service.getSurveyDesign(survey.id, PublishInfo())
                val savedSurvey = surveyDataDao.getSurveyDataById(survey.id)
                val count = responseDao.countByUserAndSurvey(
                    surveyId = survey.id,
                    userId = sessionManager.getUserIdOrThrow()
                )
                val newVersionAvailable = savedSurvey?.publishInfoEntity?.toPublishInfo()
                    ?.let { it != design.publishInfo }
                    ?: true
                SurveyData.fromSurveyAndDesign(
                    survey,
                    savedSurvey?.publishInfoEntity?.toPublishInfo() ?: PublishInfo(),
                    newVersionAvailable,
                    count
                )
            }
            saveSurveysToDB(surveyList)
            savePermissionsToDB(surveyList)

            emit(Result.success(surveyList))
        }.catch {
            emit(Result.failure(it))
        }.flowOn(Dispatchers.IO)
    }

    override suspend fun saveSurveyToDB(surveyData: SurveyData) {
        surveyDataDao.insert(surveyData.toSurveyDataEntity())
    }

    private suspend fun saveSurveysToDB(surveyList: List<SurveyData>) {
        surveyDataDao.insertAll(surveyList.map { it.toSurveyDataEntity() })
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
            val responseBody = service.getSurveyFile(surveyId, resourceId)
            responseBody.byteStream().use { inputStream ->
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


}

private fun SurveyData.toSurveyDataEntity(): SurveyDataEntity {
    return SurveyDataEntity(
        id = this.id,
        creationDate = this.creationDate,
        lastModified = this.lastModified,
        name = this.name,
        languagesEntity = LanguagesEntity(
            defaultLanguage.toLanguageEntity(),
            additionalLanguages.map { it.toLanguageEntity() }),
        status = this.status,
        usage = this.usage,
        quota = this.quota,
        navigationMode = this.navigationMode,
        publishInfoEntity = this.publishInfo.toPublishInfoEntity(),
        newVersionAvailable = this.newVersionAvailable,
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

