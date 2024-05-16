package com.frankie.app.business.survey

import android.app.NotificationChannel
import android.app.NotificationManager
import android.content.Context
import android.os.Build
import androidx.core.app.NotificationCompat
import androidx.work.CoroutineWorker
import androidx.work.ForegroundInfo
import androidx.work.WorkerParameters
import com.frankie.app.R
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.withContext
import org.koin.core.component.KoinComponent
import org.koin.core.component.inject

class UploadSurveyWorker(
    private val context: Context,
    params: WorkerParameters
) : CoroutineWorker(context, params), KoinComponent {

    private val uploadSurveyResponsesUseCase: UploadSurveyResponsesUseCase by inject()

    override suspend fun doWork(): Result = withContext(Dispatchers.IO) {
        uploadSurveyResponsesUseCase()
        Result.success()
    }

    override suspend fun getForegroundInfo(): ForegroundInfo {
        val channelId = context.createNotificationChannel(
            "uploader",
            "Uploader",
            "Uploader Channel"
        )
        return ForegroundInfo(
            1, NotificationCompat.Builder(context, channelId)
                .setCategory(NotificationCompat.CATEGORY_PROGRESS)
                .setContentTitle(context.getString(R.string.notification_uploader_title))
                .setContentText(context.getString(R.string.notification_uploader_description))
                .setSmallIcon(R.mipmap.ic_launcher_round)
                .setAutoCancel(true)
                .build()
        )
    }
}

private fun Context.createNotificationChannel(
    channelId: String,
    channelName: String,
    channelDescription: String
) =
    if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
        val notificationManager =
            getSystemService(Context.NOTIFICATION_SERVICE) as NotificationManager

        val channel = NotificationChannel(
            channelId,
            channelName,
            NotificationManager.IMPORTANCE_DEFAULT
        )
        channel.description = channelDescription

        notificationManager.createNotificationChannel(channel)
        channelId
    } else {
        // For devices running on older Android versions, return an empty channel ID
        ""
    }