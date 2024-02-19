package com.frankie.app.ui.launch

import android.Manifest
import android.annotation.SuppressLint
import android.content.pm.PackageManager
import android.os.Build
import android.os.Bundle
import android.view.animation.DecelerateInterpolator
import androidx.activity.result.contract.ActivityResultContracts
import androidx.appcompat.app.AlertDialog
import androidx.core.content.ContextCompat
import androidx.core.splashscreen.SplashScreen.Companion.installSplashScreen
import androidx.fragment.app.FragmentActivity
import androidx.lifecycle.coroutineScope
import com.frankie.app.R
import com.frankie.app.ui.common.WebViewUtils
import com.frankie.app.ui.login.LoginActivity
import com.frankie.app.ui.main.MainActivity
import kotlinx.coroutines.launch
import org.koin.androidx.viewmodel.ext.android.getViewModel

@SuppressLint("CustomSplashScreen")
class LaunchActivity : FragmentActivity() {

    private lateinit var consentView: ConsentView
    private val viewModel by lazy { getViewModel<LaunchViewModel>() }
    override fun onCreate(savedInstanceState: Bundle?) {
        val shouldShowConsent = viewModel.shouldShowConsent()
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.M) {
            val splashScreen = installSplashScreen()
            splashScreen.setKeepOnScreenCondition { !shouldShowConsent }
            splashScreen.setOnExitAnimationListener { splashScreenView ->
                splashScreenView.view.animate()
                    ?.alpha(0f)
                    ?.setDuration(1000)
                    ?.setInterpolator(DecelerateInterpolator())
                    ?.withEndAction { splashScreenView.remove() }
                    ?.start()
            }
        }
        super.onCreate(savedInstanceState)
        if (!WebViewUtils.chromeSupported(this)) {
            notifyUnsupportedChromeAndQuit()
            return
        }
        if (shouldShowConsent) {
            consentView = ConsentView(this)
            setContentView(consentView)
        }

        viewModel.checkUserStatus()
        checkPushNotificationPermission()
    }

    private val requestPermissionLauncher = registerForActivityResult(
        ActivityResultContracts.RequestPermission()
    ) {
        checkConsent()
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
            checkConsent()
        }
    }

    private fun checkConsent() {
        if (viewModel.shouldShowConsent()) {
            consentView.setListenerAndShow(viewModel.isCrashlyticsApproved(), viewModel
                .isAnalyticsApproved(), object : ConsentSettingsListener {
                override fun setConsent(firebaseAnalytics: Boolean, crashlytics: Boolean) {
                    viewModel.setConsent(firebaseAnalytics, crashlytics)
                    redirect()
                }
            })
        } else {
            redirect()
        }
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