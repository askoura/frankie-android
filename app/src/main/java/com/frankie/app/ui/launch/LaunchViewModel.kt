package com.frankie.app.ui.launch

import androidx.lifecycle.ViewModel
import com.frankie.app.business.settings.ConsentSettings
import com.frankie.app.business.settings.SharedPrefsManager
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.filterNotNull

class LaunchViewModel(
    private val sharedPrefsManager: SharedPrefsManager,
    private val consentSettings: ConsentSettings
) : ViewModel() {

    private val _launchEvents = MutableStateFlow<LaunchEvent?>(null)
    val launchEvents = _launchEvents.filterNotNull()

    fun checkUserStatus() {
        if (sharedPrefsManager.isActiveTokenAvailable) {
            _launchEvents.tryEmit(LaunchEvent.UserLoggedIn)
        } else {
            _launchEvents.tryEmit(LaunchEvent.UserLoggedOut)
        }
    }

    fun shouldShowConsent(): Boolean {
        return consentSettings.wasConsentTaken().not()
    }

    fun isCrashlyticsApproved(): Boolean = consentSettings.isCrashlyticsApproved()

    fun isAnalyticsApproved(): Boolean = consentSettings.isFirebaseAnalyticsApproved()

    fun setConsent(firebaseAnalyticsApproved: Boolean, crashlyticsApproved: Boolean) {
        consentSettings.setConsent(firebaseAnalyticsApproved, crashlyticsApproved)
    }

    sealed class LaunchEvent {
        object UserLoggedIn : LaunchEvent()
        object UserLoggedOut : LaunchEvent()
    }
}

