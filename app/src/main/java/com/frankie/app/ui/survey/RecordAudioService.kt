package com.frankie.app.ui.survey


import android.app.Notification
import android.app.NotificationChannel
import android.app.NotificationManager
import android.app.Service
import android.content.Context
import android.content.Intent
import android.media.MediaRecorder
import android.os.Build
import android.os.IBinder
import android.os.Parcelable
import android.util.Log
import androidx.core.app.NotificationCompat
import androidx.core.app.ServiceCompat
import androidx.core.content.ContextCompat
import com.frankie.app.R
import com.frankie.app.business.responses.ResponseRepository
import com.frankie.app.business.survey.SurveyData
import com.frankie.app.ui.common.FileUtils
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.flow.collect
import kotlinx.coroutines.launch
import org.koin.android.ext.android.inject
import java.io.IOException
import java.util.UUID


class AudioRecordingService : Service() {
    private var mediaRecorder: MediaRecorder? = null

    private val responseRepository: ResponseRepository by inject()

    override fun onBind(intent: Intent?): IBinder? {
        return null
    }


    override fun onStartCommand(intent: Intent, flags: Int, startId: Int): Int {
        startForegroundService()

        if (intent.action.equals(START_FOREGROUND_ACTION)) {
            Log.d(TAG, "Received Start Foreground Intent ")
            val survey = intent.getParcelableExtra<SurveyData>(EXTRA_SURVEY)
                ?: throw IllegalArgumentException("Survey is required")
            val responseId = intent.getStringExtra(EXTRA_RESPONSE_ID)
                ?: throw IllegalArgumentException("responseId is required")
            startRecording(survey.id, responseId)
        } else if (intent.action.equals(STOP_FOREGROUND_ACTION)) {
            Log.d(TAG, "Received Stop Foreground Intent")
            ServiceCompat.stopForeground(this, ServiceCompat.STOP_FOREGROUND_REMOVE)
            stopSelfResult(startId)
        }
        return START_STICKY
    }

    override fun onDestroy() {
        super.onDestroy()
        Log.d(TAG, "onDestroy")
        stopRecording()
    }

    private fun startForegroundService() {
        val channelId =
            if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
                createNotificationChannel()
            } else {
                ""
            }


        val notification: Notification = NotificationCompat.Builder(this, channelId)
            .setContentTitle("Audio Recording")
            .setContentText("Recording audio...")
            .setSmallIcon(R.drawable.baseline_record_voice_over_24)
            .build()

        startForeground(1, notification)
    }

    private fun createNotificationChannel(): String {
        val channelId = "recording_channel"
        val channelName = "Recording Channel"
        val channelDescription = "Audio Recording Channel"
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
            return channelId
        } else {
            // For devices running on older Android versions, return an empty channel ID
            return ""
        }
    }

    private fun startRecording(surveyId: String, responseId: String) {
        val uuid = UUID.randomUUID()
        val file = FileUtils.getResponseFile(
            this@AudioRecordingService,
            uuid.toString(),
            surveyId
        )
        CoroutineScope(Dispatchers.Main).launch {
            responseRepository.saveRecordingEvent(responseId, uuid).collect()
        }
        @Suppress("DEPRECATION")
        mediaRecorder = if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.S)
            MediaRecorder(this)
        else
            MediaRecorder()
        mediaRecorder?.apply {
            setAudioSource(MediaRecorder.AudioSource.MIC)
            setOutputFormat(MediaRecorder.OutputFormat.THREE_GPP)
            setOutputFile(file.absolutePath)
            setAudioEncoder(MediaRecorder.AudioEncoder.AMR_NB)
            try {
                prepare()
            } catch (e: IOException) {
                Log.e(TAG, "prepare() failed")
            }
            start()
        }
    }

    private fun stopRecording() {
        mediaRecorder?.stop()
        mediaRecorder?.reset()
        mediaRecorder?.release()
    }


    companion object {
        private const val START_FOREGROUND_ACTION = "start_foreground_action"
        private const val STOP_FOREGROUND_ACTION = "stop_foreground_action"
        private const val TAG = "AudioRecordingService"
        private const val EXTRA_SURVEY = "survey"
        private const val EXTRA_RESPONSE_ID = "response_id"
        fun start(context: Context, survey: SurveyData, responseId: String) {
            val intent = Intent(context, AudioRecordingService::class.java)
            intent.putExtra(EXTRA_SURVEY, survey as Parcelable)
            intent.putExtra(EXTRA_RESPONSE_ID, responseId)
            intent.action = START_FOREGROUND_ACTION
            ContextCompat.startForegroundService(context, intent)
        }

        fun stop(context: Context) {
            val stopIntent = Intent(context, AudioRecordingService::class.java)
            stopIntent.action = STOP_FOREGROUND_ACTION
            ContextCompat.startForegroundService(context, stopIntent)
        }
    }
}


