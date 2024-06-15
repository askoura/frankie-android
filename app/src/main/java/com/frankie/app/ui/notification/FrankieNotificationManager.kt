package com.frankie.app.ui.notification

import android.app.Notification
import android.app.NotificationChannel
import android.app.NotificationManager
import android.content.Context
import android.os.Build
import androidx.core.app.NotificationCompat
import com.frankie.app.R

interface FrankieNotificationManager {
    fun createAudioRecordingNotification(): Notification
    fun createUploadInProgressNotification(): Notification
}

class FrankieNotificationManagerImpl(
    private val context: Context,
    private val notificationManager: NotificationManager
) : FrankieNotificationManager {
    init {
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
            FrankieNotificationChannels.entries.forEach { item ->
                NotificationChannel(
                    item.getChannelId(),
                    context.getString(item.channelName),
                    item.importance
                ).let { channel ->
                    channel.description = context.getString(item.descriptions)
                    notificationManager.createNotificationChannel(channel)
                }
            }
        }
    }

    override fun createAudioRecordingNotification(): Notification =
        NotificationCompat.Builder(
            context,
            FrankieNotificationChannels.AudioRecording.getChannelId()
        )
            .setContentTitle(context.getString(R.string.notification_audio_recording_title))
            .setContentText(context.getString(R.string.notification_audio_recording_description))
            .setForegroundServiceBehavior(NotificationCompat.FOREGROUND_SERVICE_IMMEDIATE)
            .setSmallIcon(R.drawable.baseline_record_voice_over_24)
            .build()


    override fun createUploadInProgressNotification(): Notification =
        NotificationCompat.Builder(context, FrankieNotificationChannels.Uploader.getChannelId())
            .setCategory(NotificationCompat.CATEGORY_PROGRESS)
            .setContentTitle(context.getString(R.string.notification_uploader_title))
            .setContentText(context.getString(R.string.notification_uploader_description))
            .setSmallIcon(R.mipmap.ic_launcher_round)
            .setAutoCancel(true)
            .build()
}