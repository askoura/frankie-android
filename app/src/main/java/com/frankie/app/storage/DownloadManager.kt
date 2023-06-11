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
import kotlin.math.roundToInt

interface DownloadManager {
    suspend fun downloadSurveyFiles(surveyData: SurveyData): Flow<DownloadState>
}

class DownloadManagerImpl(
    private val appContext: Context, private val surveyRepository: SurveyRepository
) : DownloadManager {

    override suspend fun downloadSurveyFiles(surveyData: SurveyData): Flow<DownloadState> {
        val surveyName = surveyData.name
        var downloadedFiles = 0
        return flow {
            emit(DownloadState.Loading(surveyName = surveyData.name))
            val design = surveyRepository.surveyDesign(surveyData)
            val validationOutput = jacksonKtMapper.treeToValue(
                design.validationJsonOutput, ValidationOutput::class.java
            )
            saveValidationJsonOutput(
                surveyData.id, design.validationJsonOutput.toString()
            ).collect()
            val loadingState = DownloadState.Loading(
                surveyName = surveyName, totalFilesCount = design.files.size
            )
            emit(loadingState)
            val totalBytesToDownload = design.files.sumOf { it.size }.toFloat()
            var someFilesFailed = false
            var downloadPercent = 0
            var currentDownloadedSize = 0
            design.files.forEachIndexed { index, file ->
                val newStateWithFile = loadingState.copy(
                    currentFileName = file.name,
                    currentDownloadedSize = currentDownloadedSize,
                    totalSize = totalBytesToDownload.toInt(),
                    downloadPercent = downloadPercent,
                    downloadedFileCount = downloadedFiles
                )
                emit(newStateWithFile)
                val flow = surveyRepository.getSurveyFile(surveyData.id, file.name)
                saveFile(
                    flow, getResourceFile(appContext, file.name, surveyData.id)
                ).collect { fileSaveState ->
                    when (fileSaveState) {
                        is FileSaveState.Progress -> {
                            currentDownloadedSize = design.files.take(index)
                                .sumOf { it.size } + fileSaveState.bytesDownloaded
                            downloadPercent =
                                (currentDownloadedSize / totalBytesToDownload * 100).roundToInt()
                            emit(
                                newStateWithFile.copy(
                                    currentDownloadedSize = currentDownloadedSize,
                                    downloadPercent = downloadPercent,
                                )
                            )
                        }

                        is FileSaveState.Done -> {
                            currentDownloadedSize = design.files.take(index + 1).sumOf { it.size }
                            downloadPercent =
                                (currentDownloadedSize / totalBytesToDownload * 100).roundToInt()
                            emit(
                                newStateWithFile.copy(
                                    currentDownloadedSize = currentDownloadedSize,
                                    downloadPercent = (downloadPercent / 5f).roundToInt() * 5
                                )
                            )
                        }

                        is FileSaveState.Error -> {
                            someFilesFailed = true
                        }
                    }

                }
                downloadedFiles++
            }
            if (downloadedFiles == 0) {
                emit(DownloadState.Error(Exception()))
            } else {
                val updatedSurveyData =
                    surveyData.copy(newVersionAvailable = false, publishInfo = design.publishInfo)
                val fileQuestions = validationOutput.schema.filter { it.dataType == DataType.FILE }
                    .map { it.componentCode }
                surveyRepository.saveSurveyToDB(updatedSurveyData, fileQuestions)
                emit(DownloadState.Result(updatedSurveyData, someFilesFailed))
            }
        }.catch {
            emit(DownloadState.Error(it))
        }.flowOn(Dispatchers.IO)
    }

    private suspend fun saveValidationJsonOutput(
        surveyId: String, validationOutput: String
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
        flow: Flow<Result<SurveyRepository.DataStream>>, file: File
    ): Flow<FileSaveState> {
        var downloadedSoFar = 0
        return flow {
            file.outputStream().use { outputStream ->
                flow.collect { result ->
                    if (result.isFailure) {
                        emit(FileSaveState.Error(result.exceptionOrNull()!!))
                        return@collect
                    }
                    val dataStream = result.getOrNull() ?: kotlin.run {
                        emit(FileSaveState.Error(Exception("No data stream")))
                        return@collect
                    }
                    when (dataStream) {
                        is SurveyRepository.DataStream.End -> {
                            withContext(Dispatchers.IO) {
                                outputStream.close()
                            }
                            emit(FileSaveState.Done)
                            return@collect
                        }

                        is SurveyRepository.DataStream.Chunk -> {
                            val byteArray = dataStream.bytes
                            downloadedSoFar += byteArray.size

                            withContext(Dispatchers.IO) {
                                outputStream.write(byteArray)
                            }
                            emit(FileSaveState.Progress(downloadedSoFar))
                        }
                    }
                }
            }
        }.catch {
            emit(FileSaveState.Error(it))
        }.flowOn(Dispatchers.IO)
    }

}

sealed class FileSaveState {
    object Done : FileSaveState()
    data class Error(val throwable: Throwable) : FileSaveState()
    data class Progress(val bytesDownloaded: Int) : FileSaveState()
}

sealed class DownloadState {
    data class Loading(
        val surveyName: String,
        val totalFilesCount: Int = 0,
        val downloadedFileCount: Int = 0,
        val currentFileName: String = "",
        val downloadPercent: Int = 0,
        val totalSize: Int = 0,
        val currentDownloadedSize: Int = 0,
    ) : DownloadState()

    data class Result(val surveyData: SurveyData, val someFilesFailed: Boolean) : DownloadState()
    data class Error(val throwable: Throwable) : DownloadState()
    object Idle : DownloadState()
}

