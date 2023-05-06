package com.frankie.app.business.survey

import com.frankie.app.api.common.User
import com.frankie.app.api.survey.Language
import com.frankie.app.api.survey.PublishInfo
import com.frankie.app.api.survey.SurveyService
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
    fun getSurveyPermissionList(surveyId: String): Flow<Result<List<User>>>
}

class SurveyRepositoryImpl(private val service: SurveyService, private val surveyDataDao: SurveyDataDao) : SurveyRepository {
    // TODO load from DB and check if new version available
    override fun getSurveyList(): Flow<Result<List<SurveyData>>> {
        return flow {
            val surveyList = service.getSurveyList().map { survey ->
                val design = service.getSurveyDesign(survey.id, PublishInfo())
                SurveyData.fromSurveyAndDesign(survey, design, false)
            }
            surveyDataDao.insertAll(surveyList.map { it.toSurveyDataEntity() })
            emit(Result.success(surveyList))
        }.catch {
            emit(Result.failure(it))
        }.flowOn(Dispatchers.IO)
    }

    override fun getSurveyPermissionList(surveyId: String): Flow<Result<List<User>>> {
        return flow {
            emit(Result.success(service.getSurveyPermissionList(surveyId)))
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
            languagesEntity = LanguagesEntity(defaultLanguage.toLanguageEntity(), additionalLanguages.map { it.toLanguageEntity() }),
            status = this.status,
            usage = this.usage,
            quota = this.quota,
            navigationMode = this.navigationMode,
            publishInfoEntity = this.publishInfo.toPublishInfoEntity(),
            newVersionAvailable = this.newVersionAvailable,
    )
}

private fun SurveyDataEntity.toSurveyData(): SurveyData {
    return SurveyData(
            id = this.id,
            creationDate = this.creationDate,
            lastModified = this.lastModified,
            name = this.name,
            defaultLanguage = languagesEntity!!.defaultLanguageEntity!!.toLanguage(),
            additionalLanguages = languagesEntity.additionalLanguagesEntity!!.map { it.toLanguage() },
            status = this.status,
            usage = this.usage,
            quota = this.quota,
            navigationMode = this.navigationMode,
            publishInfo = publishInfoEntity?.toPublishInfo() ?: PublishInfo(),
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

fun LanguageEntity.toLanguage(): Language {
    return Language(code, langName)
}

