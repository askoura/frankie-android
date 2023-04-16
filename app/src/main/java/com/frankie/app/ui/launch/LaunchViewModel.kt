package com.frankie.app.ui.launch

import androidx.lifecycle.ViewModel
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.asStateFlow

class LaunchViewModel : ViewModel() {

    private val _launchState = MutableStateFlow(LaunchState())
    val launchState = _launchState.asStateFlow()

    fun checkUserStatus() {

    }

    data class LaunchState(val isUserLoggedIn: Boolean = false)
}

