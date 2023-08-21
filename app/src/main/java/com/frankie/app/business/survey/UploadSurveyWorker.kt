package com.frankie.app.business.survey

import android.content.Context
import androidx.work.CoroutineWorker
import androidx.work.WorkerParameters
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.withContext
import org.koin.core.component.KoinComponent
import org.koin.core.component.inject

class UploadSurveyWorker(
    context: Context,
    params: WorkerParameters
) : CoroutineWorker(context, params), KoinComponent {

    private val uploadSurveyResponsesUseCase: UploadSurveyResponsesUseCase by inject()

    override suspend fun doWork(): Result = withContext(Dispatchers.IO) {
        uploadSurveyResponsesUseCase()
        Result.success()
    }

}