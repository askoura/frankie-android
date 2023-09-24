package com.frankie.app.ui.launch

import android.annotation.SuppressLint
import android.content.Context
import android.util.AttributeSet
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.view.ViewGroup.LayoutParams.MATCH_PARENT
import android.view.animation.Animation
import android.view.animation.AnimationUtils
import androidx.appcompat.widget.SwitchCompat
import androidx.constraintlayout.widget.ConstraintLayout
import com.frankie.app.R
import com.frankie.app.databinding.DialogConsentBinding
import com.frankie.app.ui.common.color
import com.frankie.app.ui.common.gone
import com.frankie.app.ui.common.visible
import com.google.android.material.bottomsheet.BottomSheetBehavior


@SuppressLint("ViewConstructor")
class ConsentView @JvmOverloads constructor(
    context: Context, attrs: AttributeSet? = null,
    defStyleAttr: Int = 0
) : ConstraintLayout(context, attrs, defStyleAttr) {

    private val binding =
        DialogConsentBinding.inflate(LayoutInflater.from(context), this, true).apply {
            root.gone()
        }

    private val sheetBehavior: BottomSheetBehavior<View>
    private val switchList: List<SwitchCompat> =
        mutableListOf(binding.switchGoogleAnalytics, binding.switchCrashlytics)

    private fun anySelected() = switchList.any { it.isChecked }

    init {
        layoutParams = ViewGroup.LayoutParams(MATCH_PARENT, MATCH_PARENT)
        sheetBehavior = BottomSheetBehavior.from(binding.bottomSheet)
        sheetBehavior.isHideable = true
        sheetBehavior.state = BottomSheetBehavior.STATE_HIDDEN
        binding.tvDetailsAndSettings.setOnClickListener {
            sheetBehavior.state = BottomSheetBehavior.STATE_EXPANDED
        }
        binding.back.setOnClickListener {
            sheetBehavior.state = BottomSheetBehavior.STATE_HIDDEN
            binding.buttonConfirmChoices.text = context.getText(R.string.consent_approve)
        }
        sheetBehavior.peekHeight = 0


        switchList.forEach { switch ->
            switch.setOnCheckedChangeListener { _, _ ->
                onSwitchesChanged()
            }

        }

        sheetBehavior.addBottomSheetCallback(object : BottomSheetBehavior.BottomSheetCallback() {
            override fun onSlide(p0: View, p1: Float) {

            }

            override fun onStateChanged(p0: View, p1: Int) {
                if (shouldApproveAll(p1)) {
                    binding.buttonConfirmChoices.text = context.getText(R.string.consent_approve)
                } else {
                    onSwitchesChanged()
                }

            }
        })


    }

    fun shouldApproveAll(state: Int): Boolean {
        return state in listOf(
            BottomSheetBehavior.STATE_HIDDEN,
            BottomSheetBehavior.STATE_COLLAPSED,
            BottomSheetBehavior.STATE_HALF_EXPANDED
        )
    }

    fun setListenerAndShow(
        isCrashlyticsApproved: Boolean,
        isFirebaseAnalyticsApproved: Boolean,
        consentSettingsListener: ConsentSettingsListener
    ) {
        binding.buttonConfirmChoices.setOnClickListener {
            animateHide(consentSettingsListener)
        }
        binding.textIntro.setText(R.string.consent_intro)
        binding.switchCrashlytics.isChecked = isCrashlyticsApproved
        binding.switchGoogleAnalytics.isChecked = isFirebaseAnalyticsApproved

        binding.root.visible()
        setBackgroundColor(context.color(R.color.black))

        animateShow()
    }

    private fun animateShow() {
        val bottomUpAnim: Animation = AnimationUtils.loadAnimation(context, R.anim.show_from_bottom)
        binding.rootView.visible()
        binding.rootView.startAnimation(bottomUpAnim)
    }

    private fun animateHide(consentSettingsListener: ConsentSettingsListener) {
        val bottomUpAnim: Animation = AnimationUtils.loadAnimation(context, R.anim.hide_to_bottom)
        binding.rootView.startAnimation(bottomUpAnim)
        bottomUpAnim.setAnimationListener(object : Animation.AnimationListener {
            override fun onAnimationRepeat(animation: Animation?) {}

            override fun onAnimationEnd(animation: Animation?) {
                binding.rootView.gone()
                if (shouldApproveAll(sheetBehavior.state)) {
                    consentSettingsListener.setConsent(
                        firebaseAnalytics = true,
                        crashlytics = true
                    )
                } else {
                    consentSettingsListener.setConsent(
                        binding.switchGoogleAnalytics.isChecked,
                        binding.switchCrashlytics.isChecked
                    )
                }
            }

            override fun onAnimationStart(animation: Animation?) {}
        })
    }

    private fun onSwitchesChanged() {
        if (anySelected()) {
            binding.buttonConfirmChoices.text = context.getText(R.string.consent_confirm_choices)
        } else {
            binding.buttonConfirmChoices.text =
                context.getText(R.string.consent_confirm_without_tracking)
        }
    }

}

interface ConsentSettingsListener {
    fun setConsent(firebaseAnalytics: Boolean, crashlytics: Boolean)
}