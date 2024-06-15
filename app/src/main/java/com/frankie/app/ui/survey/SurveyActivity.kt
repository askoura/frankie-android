package com.frankie.app.ui.survey

import android.Manifest.permission
import android.Manifest.permission.ACCESS_COARSE_LOCATION
import android.Manifest.permission.ACCESS_FINE_LOCATION
import android.Manifest.permission.RECORD_AUDIO
import android.annotation.SuppressLint
import android.app.Activity
import android.content.ActivityNotFoundException
import android.content.Context
import android.content.Intent
import android.content.pm.PackageManager.PERMISSION_GRANTED
import android.net.Uri
import android.os.Bundle
import android.os.Looper
import android.os.Parcelable
import android.os.PersistableBundle
import android.provider.MediaStore
import android.widget.Toast
import androidx.activity.result.contract.ActivityResultContracts
import androidx.appcompat.app.AlertDialog
import androidx.appcompat.app.AppCompatActivity
import androidx.core.content.ContextCompat.checkSelfPermission
import androidx.lifecycle.coroutineScope
import com.frankie.app.R
import com.frankie.app.business.parcelable
import com.frankie.app.business.responses.ResponseRepository
import com.frankie.app.business.survey.SurveyData
import com.frankie.app.databinding.ActivitySurveyBinding
import com.frankie.expressionmanager.model.ResponseEvent
import com.google.android.gms.location.FusedLocationProviderClient
import com.google.android.gms.location.LocationCallback
import com.google.android.gms.location.LocationRequest
import com.google.android.gms.location.LocationResult
import com.google.android.gms.location.LocationServices
import com.google.android.gms.location.Priority
import com.journeyapps.barcodescanner.ScanContract
import com.journeyapps.barcodescanner.ScanIntentResult
import com.journeyapps.barcodescanner.ScanOptions
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.launch
import org.koin.android.ext.android.inject
import java.time.LocalDateTime
import java.time.ZoneOffset


class SurveyActivity : AppCompatActivity() {
    private lateinit var binding: ActivitySurveyBinding
    private lateinit var responseId: String
    private var backPressedTime: Long = 0
    private var photoUri: Uri? = null
    private lateinit var locationCallback: LocationCallback

    private var requestingLocationUpdates = false
    private lateinit var fusedLocationClient: FusedLocationProviderClient
    private val responseRepository: ResponseRepository by inject()

    val survey: SurveyData
        get() = intent.parcelable(EXTRA_SURVEY)
            ?: throw IllegalArgumentException("Survey is required")


    @SuppressLint("SetJavaScriptEnabled")
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        binding = ActivitySurveyBinding.inflate(layoutInflater)
        setContentView(binding.root)
        if (!intent.hasExtra(EXTRA_SURVEY)) {
            finish()
            return
        }

        fusedLocationClient = LocationServices.getFusedLocationProviderClient(this)

        val responseIdExtra: String? = intent.getStringExtra(RESPONSE_ID)
        binding.webview.loadSurvey(survey, responseIdExtra)

        locationCallback = object : LocationCallback() {

            override fun onLocationResult(locationResult: LocationResult) {
                super.onLocationResult(locationResult)
                locationResult.lastLocation?.let {
                    if (!requestingLocationUpdates) {
                        return@let
                    }
                    stopLocationUpdates()
                    val event = ResponseEvent.Location(
                        it.longitude, it.latitude, LocalDateTime.now(ZoneOffset.UTC)
                    )
                    lifecycle.coroutineScope.launch(Dispatchers.IO) {
                        responseRepository.addEvent(responseId, event)
                    }
                }
            }
        }
        updateValuesFromBundle(savedInstanceState)
    }

    private fun createLocationRequest() =
        LocationRequest.Builder(Priority.PRIORITY_HIGH_ACCURACY, 5000).build()


    private fun updateValuesFromBundle(savedInstanceState: Bundle?) {
        savedInstanceState ?: return

        // Update the value of requestingLocationUpdates from the Bundle.
        if (savedInstanceState.keySet().contains(REQUESTING_LOCATION_UPDATES_KEY)) {
            requestingLocationUpdates = savedInstanceState.getBoolean(
                REQUESTING_LOCATION_UPDATES_KEY
            )
        }
    }


    override fun onSaveInstanceState(outState: Bundle, outPersistentState: PersistableBundle) {
        outState.putBoolean(REQUESTING_LOCATION_UPDATES_KEY, requestingLocationUpdates)
        super.onSaveInstanceState(outState, outPersistentState)
    }

    private fun startLocationUpdates() {
        if (checkSelfPermission(
                this,
                ACCESS_FINE_LOCATION
            ) != PERMISSION_GRANTED
        ) {
            return
        }
        fusedLocationClient.requestLocationUpdates(
            createLocationRequest(),
            locationCallback,
            Looper.getMainLooper()
        )
    }


    private fun stopLocationUpdates() {
        requestingLocationUpdates = false
        fusedLocationClient.removeLocationUpdates(locationCallback)
    }


    fun onResponseIdReceived(responseId: String) {
        this.responseId = responseId
        checkAudioPermissionAndRecord()
    }

    @Deprecated("Use Fancy new method")
    override fun onBackPressed() {
        binding.webview.onBack {
            if (!it) {
                val t = System.currentTimeMillis()
                if (t - backPressedTime > 3000) { // 3 secs
                    backPressedTime = t
                    Toast.makeText(this, R.string.press_back_to_exit, Toast.LENGTH_SHORT).show()
                } else {
                    finish()
                }
            }
        }
    }

    private fun getCameraPermission(onGranted: () -> Unit) {
        if (checkSelfPermission(this, permission.CAMERA)
            != PERMISSION_GRANTED
        ) {
            requestCameraPermission.launch(permission.CAMERA)
        } else {
            onGranted()
        }
    }

    private fun checkAudioPermissionAndRecord() {
        val shouldRequestAudio =
            survey.backgroundAudio && checkSelfPermission(this, RECORD_AUDIO) != PERMISSION_GRANTED
        val shouldRequestLocation = survey.recordGps && checkSelfPermission(
            this,
            ACCESS_FINE_LOCATION
        ) != PERMISSION_GRANTED
        if (shouldRequestAudio || shouldRequestLocation) {
            val permissions = mutableListOf<String>().apply {
                if (shouldRequestAudio)
                    add(RECORD_AUDIO)
                if (shouldRequestLocation)
                    addAll(
                        listOf(
                            ACCESS_FINE_LOCATION,
                            ACCESS_COARSE_LOCATION
                        )
                    )
            }
            requestRecordingPermissionsLauncher.launch(permissions.toTypedArray())
        } else {
            recordLocation()
            recordAudio()
        }
    }

    private var audioServiceStarted: Boolean = false
    private fun recordAudio() {
        if (survey.backgroundAudio) {
            audioServiceStarted = true
            AudioRecordingService.start(this, survey, responseId)
        }
    }

    private fun recordLocation() {
        if (survey.recordGps) {
            requestingLocationUpdates = true
            startLocationUpdates()
        }

    }

    fun stopRecording() {
        if (audioServiceStarted) {
            AudioRecordingService.stop(this)
            audioServiceStarted = false
        }
        stopLocationUpdates()
    }

    override fun onDestroy() {
        stopRecording()
        super.onDestroy()
    }

    fun pickFromGallery(mimeTypes: String?) {
        val intent = Intent(Intent.ACTION_OPEN_DOCUMENT).apply {
            addCategory(Intent.CATEGORY_OPENABLE)
            putExtra(Intent.EXTRA_ALLOW_MULTIPLE, false)
            if (mimeTypes.isNullOrBlank()) {
                type = "*/*"
            } else {
                type = mimeTypes
                putExtra(Intent.EXTRA_MIME_TYPES, mimeTypes.split(",").toTypedArray())
            }
        }
        try {
            galleryLauncher.launch(intent)
        } catch (e: ActivityNotFoundException) {
            e.printStackTrace()
        }
    }

    private fun takePhotoOnPermissionGranted() {
        val intent = Intent(MediaStore.ACTION_IMAGE_CAPTURE).apply {
            addFlags(
                Intent.FLAG_GRANT_READ_URI_PERMISSION or
                        Intent.FLAG_GRANT_WRITE_URI_PERMISSION
            )
            putExtra(MediaStore.EXTRA_OUTPUT, photoUri)
        }
        photoLauncher.launch(intent)
    }

    private fun takeVideoOnPermissionGranted() {
        val intent = Intent(MediaStore.ACTION_VIDEO_CAPTURE).apply {
            addFlags(
                Intent.FLAG_GRANT_READ_URI_PERMISSION or
                        Intent.FLAG_GRANT_WRITE_URI_PERMISSION
            )
        }
        videoLauncher.launch(intent)
    }

    fun takePhoto(uploadFileUri: Uri) {
        photoUri = uploadFileUri
        getCameraPermission { takePhotoOnPermissionGranted() }
    }


    fun takeVideo() {
        getCameraPermission { takeVideoOnPermissionGranted() }
    }

    private val requestRecordingPermissionsLauncher =
        registerForActivityResult(
            ActivityResultContracts.RequestMultiplePermissions()
        ) { results ->
            if (results.all { it.value }) {
                recordLocation()
                recordAudio()
            } else {
                notifyRecordPermissionDenied()
            }
        }

    private val requestCameraPermission = registerForActivityResult(
        ActivityResultContracts.RequestPermission()
    ) { granted ->
        if (granted) {
            if (photoUri != null) {
                takePhotoOnPermissionGranted()
            } else {
                takeVideoOnPermissionGranted()
            }
        } else {
            notifyPermissionDenied()
        }
    }


    private val photoLauncher =
        registerForActivityResult(ActivityResultContracts.StartActivityForResult()) { result ->
            when (result.resultCode) {
                Activity.RESULT_OK -> processCameraResult()
                Activity.RESULT_CANCELED -> {
                    notifyResultCancelled()
                    photoUri = null
                }
            }
        }


    private val galleryLauncher =
        registerForActivityResult(ActivityResultContracts.StartActivityForResult()) { result ->
            if (result.resultCode == Activity.RESULT_OK) {
                processGalleryResult(result.data)
            } else {
                notifyResultCancelled()
            }
        }

    private val videoLauncher =
        registerForActivityResult(ActivityResultContracts.StartActivityForResult()) { result ->
            if (result.resultCode == Activity.RESULT_OK) {
                processVideoResult(result.data?.data)
            } else {
                notifyResultCancelled()
            }
        }


    private fun processGalleryResult(data: Intent?) {
        data?.data?.let { uri ->
            binding.webview.onFileSelected(uri)
        }
    }

    private fun processCameraResult() {
        photoUri = null
        binding.webview.onCameraResult()
    }

    private fun processVideoResult(contentUri: Uri?) {
        binding.webview.onVideoResult(contentUri)
    }

    private val barcodeLauncher = registerForActivityResult(
        ScanContract()
    ) { result: ScanIntentResult ->
        if (result.contents == null) {
            notifyResultCancelled()
        } else {
            binding.webview.onBarcodeScanned(result.contents)
        }
    }


    fun scanBarcode() {
        val options = ScanOptions()
        options.setDesiredBarcodeFormats(ScanOptions.ONE_D_CODE_TYPES)
        options.setPrompt("Scan a barcode")
        options.setBeepEnabled(true)
        options.setBarcodeImageEnabled(false)
        barcodeLauncher.launch(options)
    }

    private fun notifyRecordPermissionDenied() {
        val builder = AlertDialog.Builder(this)
        builder.apply {
            setTitle(R.string.error_recording_permission_missing_title)
            setMessage(R.string.error_recording_permission_missing_desc)
            setNeutralButton(
                android.R.string.ok
            ) { _, _ ->
                this@SurveyActivity.finish()
            }

        }
        builder.create().show()
    }

    fun showMaxSizeValidation(actual: Int, max: Int, compression: Boolean = false) {
        val builder = AlertDialog.Builder(this)
        builder.apply {
            setTitle(R.string.max_size_exceeded)
            setMessage(
                getString(
                    if (compression) R.string.max_size_exceeded_message_compression_note else R.string.max_size_exceeded_message,
                    actual,
                    max
                )
            )
            setNeutralButton(
                android.R.string.ok
            ) { _, _ ->
            }

        }
        builder.create().show()
    }

    private fun notifyPermissionDenied() {
        Toast.makeText(this, R.string.permission_denied, Toast.LENGTH_SHORT).show()
    }

    private fun notifyResultCancelled() {
        Toast.makeText(this, R.string.canceled, Toast.LENGTH_SHORT).show()
    }

    override fun onNewIntent(intent: Intent?) {
        super.onNewIntent(intent)
    }

    companion object {
        private const val TAG = "SurveyActivity"
        private const val EXTRA_SURVEY = "survey"
        private const val RESPONSE_ID = "response_id"
        private const val REQUESTING_LOCATION_UPDATES_KEY = "requesting_location_updates_key"
        fun createIntent(context: Context, survey: SurveyData): Intent =
            Intent(context, SurveyActivity::class.java).apply {
                putExtra(EXTRA_SURVEY, survey as Parcelable)
            }

        fun createIntent(context: Context, survey: SurveyData, responseId: String): Intent =
            Intent(context, SurveyActivity::class.java).apply {
                putExtra(EXTRA_SURVEY, survey as Parcelable)
                putExtra(RESPONSE_ID, responseId)
            }
    }
}