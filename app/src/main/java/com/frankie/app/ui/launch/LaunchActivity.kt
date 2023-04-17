package com.frankie.app.ui.launch

import android.annotation.SuppressLint
import android.os.Bundle
import androidx.appcompat.app.AppCompatActivity
import androidx.lifecycle.coroutineScope
import com.frankie.app.ui.login.LoginActivity
import com.frankie.app.ui.main.MainActivity
import kotlinx.coroutines.launch
import org.koin.androidx.viewmodel.ext.android.getViewModel

@SuppressLint("CustomSplashScreen")
class LaunchActivity : AppCompatActivity() {

    private val viewModel by lazy { getViewModel<LaunchViewModel>() }
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
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
        viewModel.checkUserStatus()
    }
}