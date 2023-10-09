package com.frankie.app.business.settings

import android.content.Context
import com.google.firebase.analytics.FirebaseAnalytics
import com.google.firebase.crashlytics.FirebaseCrashlytics

interface ConsentSettings {
    fun wasConsentTaken(): Boolean
    fun isFirebaseAnalyticsApproved(): Boolean
    fun isCrashlyticsApproved(): Boolean
    fun setConsent(firebaseAnalyticsApproved: Boolean, crashlyticsApproved: Boolean)
}

class ConsentSettingsImpl(
    private val context: Context,
    private val sharedPrefsManager: SharedPrefsManager
) : ConsentSettings {

    override fun wasConsentTaken(): Boolean = consentTaken

    override fun isFirebaseAnalyticsApproved(): Boolean = analyticsApproved

    override fun isCrashlyticsApproved(): Boolean = crashlyticsApproved

    override fun setConsent(firebaseAnalyticsApproved: Boolean, crashlyticsApproved: Boolean) {
        this.analyticsApproved = firebaseAnalyticsApproved
        this.crashlyticsApproved = crashlyticsApproved
        FirebaseAnalytics.getInstance(context)
            .setAnalyticsCollectionEnabled(firebaseAnalyticsApproved)
        FirebaseCrashlytics.getInstance().setCrashlyticsCollectionEnabled(crashlyticsApproved)
        consentTaken = true
    }

    private var consentTaken: Boolean
        get() = sharedPrefsManager.getBoolean(KEY_CONSENT_TAKEN, false)
        set(value) = sharedPrefsManager.saveBoolean(KEY_CONSENT_TAKEN, value)

    private var crashlyticsApproved: Boolean
        get() = sharedPrefsManager.getBoolean(KEY_CRASHLYTICS_APPROVED, false)
        set(value) = sharedPrefsManager.saveBoolean(KEY_CRASHLYTICS_APPROVED, value)

    private var analyticsApproved: Boolean
        get() = sharedPrefsManager.getBoolean(KEY_ANALYTICS_APPROVED, false)
        set(value) = sharedPrefsManager.saveBoolean(KEY_ANALYTICS_APPROVED, value)

    companion object {
        private const val KEY_CONSENT_TAKEN = "consent_taken"
        private const val KEY_CRASHLYTICS_APPROVED = "crashlytics_approved"
        private const val KEY_ANALYTICS_APPROVED = "analytics_approved"
    }
}