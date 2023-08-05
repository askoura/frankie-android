package com.frankie.app.business.survey

import androidx.work.Constraints
import androidx.work.ExistingWorkPolicy
import androidx.work.NetworkType
import androidx.work.OneTimeWorkRequest
import androidx.work.WorkManager

interface BackgroundSync {

    fun startSurveySync()
}

class BackgroundSyncImpl(private val workManager: WorkManager) : BackgroundSync {

    override fun startSurveySync() {
        val constraints = Constraints.Builder()
            .setRequiredNetworkType(NetworkType.CONNECTED)
            .build()

        val workRequest = OneTimeWorkRequest.Builder(UploadSurveyWorker::class.java)
            .setConstraints(constraints)
            .build()

        workManager.enqueueUniqueWork("sync_task", ExistingWorkPolicy.KEEP, workRequest)
    }
}

