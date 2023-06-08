package com.frankie.app.ui.launch

import android.Manifest
import android.annotation.SuppressLint
import android.content.pm.PackageManager
import android.os.Build
import android.os.Bundle
import androidx.activity.result.contract.ActivityResultContracts
import androidx.appcompat.app.AlertDialog
import androidx.appcompat.app.AppCompatActivity
import androidx.core.content.ContextCompat
import androidx.lifecycle.coroutineScope
import com.frankie.app.R
import com.frankie.app.ui.login.LoginActivity
import com.frankie.app.ui.main.MainActivity
import kotlinx.coroutines.launch
import org.koin.androidx.viewmodel.ext.android.getViewModel

@SuppressLint("CustomSplashScreen")
class LaunchActivity : AppCompatActivity() {

    private val viewModel by lazy { getViewModel<LaunchViewModel>() }
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
//        if (!WebViewUtils.chromeSupported(this)) {
//            notifyUnsupportedChromeAndQuit()
//            return
//        }

        viewModel.checkUserStatus()
        checkPushNotificationPermission()
    }

    private fun redirect() {
        lifecycle.coroutineScope.launch {
            viewModel.launchEvents.collect { launchEvent ->
                when (launchEvent) {
                    is LaunchViewModel.LaunchEvent.UserLoggedIn -> {
                        startActivity(MainActivity.createIntent(this@LaunchActivity))
                        finish()
                    }

                    is LaunchViewModel.LaunchEvent.UserLoggedOut -> {
                        startActivity(LoginActivity.createIntent(this@LaunchActivity))
                        finish()
                    }
                }
            }
        }
    }

    private val requestPermissionLauncher = registerForActivityResult(
        ActivityResultContracts.RequestPermission()
    ) {
        redirect()
    }

    private fun checkPushNotificationPermission() {
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.TIRAMISU
            && ContextCompat.checkSelfPermission(
                this,
                Manifest.permission.POST_NOTIFICATIONS
            ) != PackageManager.PERMISSION_GRANTED
        ) {
            requestPermissionLauncher.launch(Manifest.permission.POST_NOTIFICATIONS)
        } else {
            redirect()
        }
    }

    private fun notifyUnsupportedChromeAndQuit() {
        val builder = AlertDialog.Builder(this)
        builder.apply {
            setTitle(R.string.chrome_version_not_supported)
            setNeutralButton(
                android.R.string.ok
            ) { _, _ ->
                this@LaunchActivity.finish()
            }

        }
        builder.create().show()
    }
}