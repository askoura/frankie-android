package com.frankie.app.storage

import android.content.Context
import com.frankie.app.business.survey.SurveyData
import com.frankie.app.business.survey.SurveyRepository
import com.frankie.app.ui.common.FileUtils.getResourceFile
import com.frankie.app.ui.common.FileUtils.getValidationJsonFile
import com.frankie.expressionmanager.model.DataType
import com.frankie.expressionmanager.model.jacksonKtMapper
import com.frankie.expressionmanager.usecase.ValidationOutput
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.flow.Flow
import kotlinx.coroutines.flow.catch
import kotlinx.coroutines.flow.collect
import kotlinx.coroutines.flow.flow
import kotlinx.coroutines.flow.flowOn
import kotlinx.coroutines.withContext
import java.io.File

interface DownloadManager {
    suspend fun downloadSurveyFiles(surveyData: SurveyData): Flow<DownloadState>
}

class DownloadManagerImpl(
    private val appContext: Context,
    private val surveyRepository: SurveyRepository
) : DownloadManager {

    override suspend fun downloadSurveyFiles(surveyData: SurveyData): Flow<DownloadState> {
        val surveyName = surveyData.name
        var downloadedFiles = 0
        return flow {
            emit(DownloadState.Loading(surveyName = surveyData.name))
            val design = surveyRepository.surveyDesign(surveyData)
            val validationOutput = jacksonKtMapper.treeToValue(
                design.validationJsonOutput,
                ValidationOutput::class.java
            )
            saveValidationJsonOutput(
                surveyData.id,
                design.validationJsonOutput.toString()
            ).collect()
            val loadingState = DownloadState.Loading(
                surveyName = surveyName,
                totalFilesCount = design.files.size
            )
            emit(loadingState)
            design.files.forEach { file ->
                val newStateWithFile = loadingState.copy(
                    currentFileName = file.name,
                    downloadedFileCount = downloadedFiles
                )
                emit(newStateWithFile)
                val flow = surveyRepository.getSurveyFile(surveyData.id, file.name)
                saveFile(flow, getResourceFile(appContext, file.name, surveyData.id)).collect {
//                    if (it.isFailure)
//                        emit(Result.failure(it.exceptionOrNull()!!))
                }
                downloadedFiles++
            }
            val updatedSurveyData =
                surveyData.copy(newVersionAvailable = false, publishInfo = design.publishInfo)
            val fileQuestions = validationOutput.schema.filter { it.dataType == DataType.FILE }
                .map { it.componentCode }
            surveyRepository.saveSurveyToDB(updatedSurveyData, fileQuestions)
            emit(DownloadState.Result(updatedSurveyData))
        }.catch {
            emit(DownloadState.Error(it))
        }.flowOn(Dispatchers.IO)
    }

    private suspend fun saveValidationJsonOutput(
        surveyId: String,
        validationOutput: String
    ): Flow<Result<Unit>> {
        return flow {
            val file = getValidationJsonFile(appContext, surveyId)
            file.outputStream().use { outputStream ->
                outputStream.write(validationOutput.toByteArray())
            }
            emit(Result.success(Unit))
        }.flowOn(Dispatchers.IO)
    }

    private suspend fun saveFile(
        flow: Flow<Result<SurveyRepository.DataStream>>,
        file: File
    ): Flow<Result<Unit>> {
        return flow {
            file.outputStream().use { outputStream ->
                flow.collect { result ->
                    if (result.isFailure) {
                        emit(Result.failure(result.exceptionOrNull()!!))
                        return@collect
                    }
                    val dataStream = result.getOrNull() ?: kotlin.run {
                        emit(Result.failure(Exception("No data stream")))
                        return@collect
                    }
                    when (dataStream) {
                        is SurveyRepository.DataStream.End -> {
                            withContext(Dispatchers.IO) {
                                outputStream.close()
                            }
                            emit(Result.success(Unit))
                            return@collect
                        }

                        is SurveyRepository.DataStream.Chunk -> {
                            val byteArray = dataStream.bytes

                            withContext(Dispatchers.IO) {
                                outputStream.write(byteArray)
                            }
                        }
                    }
                }
            }
        }.flowOn(Dispatchers.IO)
    }

}

sealed class DownloadState {
    data class Loading(
        val surveyName: String,
        val totalFilesCount: Int = 0,
        val downloadedFileCount: Int = 0,
        val currentFileName: String = ""
    ) : DownloadState()

    data class Result(val surveyData: SurveyData) : DownloadState()
    data class Error(val throwable: Throwable) : DownloadState()
    object Idle : DownloadState()
}

