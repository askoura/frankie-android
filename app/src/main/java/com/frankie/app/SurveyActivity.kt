package com.frankie.app

import android.annotation.SuppressLint
import android.app.Activity
import android.content.ActivityNotFoundException
import android.content.Context
import android.content.Intent
import android.net.Uri
import android.os.Bundle
import android.provider.MediaStore
import android.webkit.*
import android.widget.Toast
import androidx.appcompat.app.AppCompatActivity
import com.frankie.app.databinding.ActivitySurveyBinding
import com.frankie.expressionmanager.model.*
import java.util.*

class SurveyActivity : AppCompatActivity() {
    private lateinit var binding: ActivitySurveyBinding
    var backPressedTime: Long = 0
    private var capturedPhotoUri: Uri? = null

    @SuppressLint("SetJavaScriptEnabled")
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        binding = ActivitySurveyBinding.inflate(layoutInflater)
        setContentView(binding.root)
        val surveyId = intent.getStringExtra(SURVEY_ID)
            ?: throw IllegalArgumentException("Survey ID is required")
        binding.webview.loadSurvey(surveyId)
    }

    @Deprecated("Use Fancy new method")
    override fun onBackPressed() {
        binding.webview.onBack {
            if (!it) {
                val t = System.currentTimeMillis()
                if (t - backPressedTime > 3000) { // 3 secs
                    backPressedTime = t
                    Toast.makeText(this, "Press back again to exit.", Toast.LENGTH_SHORT).show()
                } else {
                    finish()
                }
            }
        }
    }

    fun pickFromGallery() {
        val intent = Intent(Intent.ACTION_OPEN_DOCUMENT).apply {
            addCategory(Intent.CATEGORY_OPENABLE)
            putExtra(Intent.EXTRA_ALLOW_MULTIPLE, false)
            type = "image/*"
        }
        try {
            startActivityForResult(intent, GALLERY_INTENT)
        } catch (e: ActivityNotFoundException) {
            e.printStackTrace()
        }
    }

    fun takePhoto(uploadFileUri: Uri) {
        val intent = Intent(MediaStore.ACTION_IMAGE_CAPTURE).apply {
            addFlags(
                Intent.FLAG_GRANT_READ_URI_PERMISSION or
                          Intent.FLAG_GRANT_WRITE_URI_PERMISSION
            )
            putExtra(MediaStore.EXTRA_OUTPUT, uploadFileUri)
        }
        startActivityForResult(intent, CAMERA_INTENT)
    }

    override fun onActivityResult(requestCode: Int, resultCode: Int, data: Intent?) {
        super.onActivityResult(requestCode, resultCode, data)
        when (resultCode) {
            Activity.RESULT_OK -> processOk(requestCode, data)
            Activity.RESULT_CANCELED -> {
                when (requestCode) {
                    CAMERA_INTENT -> {
                        // do nothing
                    }
                    GALLERY_INTENT -> {
                        binding.webview.fileSelectedCallback.onReceiveValue(null)
                    }
                }
            }
        }
    }

    private fun processGalleryResult(data: Intent?) {
        data?.data?.let { uri ->
            binding.webview.fileSelectedCallback.onReceiveValue(uri)
        }
    }

    private fun processOk(requestCode: Int, data: Intent?) {
        when (requestCode) {
            CAMERA_INTENT -> processCameraResult()
            GALLERY_INTENT -> processGalleryResult(data)
        }
    }

    private fun processCameraResult() {
        binding.webview.onCameraResult()
    }

    companion object {
        const val CAMERA_INTENT = 1
        const val GALLERY_INTENT = 2
        private const val SURVEY_ID = "survey_id"
        fun createIntent(context: Context, surveyId: String): Intent =
            Intent(context, SurveyActivity::class.java).apply {
                putExtra(SURVEY_ID, surveyId)
            }
    }
}