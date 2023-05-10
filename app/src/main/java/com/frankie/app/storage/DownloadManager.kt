package com.frankie.app.storage

import android.content.Context
import com.frankie.app.business.survey.SurveyData
import com.frankie.app.business.survey.SurveyRepository
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.flow.Flow
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.catch
import kotlinx.coroutines.flow.flow
import kotlinx.coroutines.flow.flowOn
import kotlinx.coroutines.withContext
import java.io.File
import java.io.FileOutputStream

interface DownloadManager {
    suspend fun downloadSurveyFiles(surveyData: SurveyData): Flow<Result<Unit>>
}

class DownloadManagerImpl(private val appContext: Context, private val surveyRepository: SurveyRepository) : DownloadManager {

    private val downloadTasks = mutableListOf<DownloadTask>()
    private val _downloadProgress = MutableStateFlow<Map<Long, Int>>(emptyMap())
//    private val downloadProgress = _downloadProgress.asStateFlow()

    override suspend fun downloadSurveyFiles(surveyData: SurveyData): Flow<Result<Unit>> {
        return flow {
            val design = surveyRepository.surveyDesign(surveyData)
            design.files.forEach { file ->
                val flow = surveyRepository.getSurveyFile(surveyData.id, file.name)
                saveFile(flow, getTargetFile(appContext, file.name, "${surveyData.id}/${Subfolder.FOLDER_RESOURCES}")).collect {
                    if (it.isSuccess) emit(Result.success(Unit))
                    else emit(Result.failure<Unit>(it.exceptionOrNull()!!))
                }
            }

            emit(Result.success(Unit))
        }.catch {
            emit(Result.failure(it))
        }.flowOn(Dispatchers.IO)

    }

    suspend fun saveFile(flow: Flow<Result<SurveyRepository.DataStream>>, file: File): Flow<Result<Unit>> {
        return flow {
            FileOutputStream(file).use { outputStream ->
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
                            withContext(Dispatchers.Main) {
                                _downloadProgress.value = _downloadProgress.value + (file.length() to byteArray.size)
                            }
                            withContext(Dispatchers.IO) {
                                outputStream.write(byteArray)
                            }
                        }
                    }
                }
            }
        }.flowOn(Dispatchers.IO)
    }

    private fun processError() {
        // TODO
    }

    private fun getTargetFile(context: Context, fileName: String, path: String): File {
        val folder = File(context.filesDir, path)
        if (!folder.exists()) {
            folder.mkdirs()

        }
        return File(folder, fileName)
    }

    private enum class Subfolder(private val folderName: String) {
        FOLDER_RESOURCES("Resources"),
        FOLDER_DESIGN("Design"),
        FOLDER_RESPONSES("Responses");

        override fun toString(): String {
            return folderName
        }
    }

}

data class DownloadSurvey(val surveyId: String, val list: List<DownloadTask>)
data class DownloadTask(val fileName: String, val progress: Int = 0)
