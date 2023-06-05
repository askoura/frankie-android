package com.frankie.app.ui.common

import android.content.Context
import android.content.res.ColorStateList
import androidx.appcompat.widget.AppCompatImageView
import androidx.core.widget.ImageViewCompat
import com.frankie.app.R

fun AppCompatImageView.setEnabledTint(context: Context, isEnabled: Boolean) {
    if (isEnabled) {
        ImageViewCompat.setImageTintList(
            this,
            ColorStateList.valueOf(context.color(R.color.enabled))
        )
    } else {
        ImageViewCompat.setImageTintList(
            this,
            ColorStateList.valueOf(context.color(R.color.disabled))
        )
    }
}