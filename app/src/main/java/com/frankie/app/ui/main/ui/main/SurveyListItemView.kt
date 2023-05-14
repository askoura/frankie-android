package com.frankie.app.ui.main.ui.main

import android.content.Context
import android.util.AttributeSet
import android.view.LayoutInflater
import androidx.appcompat.widget.AppCompatImageView
import androidx.constraintlayout.widget.ConstraintLayout
import androidx.core.view.setPadding
import com.frankie.app.R
import com.frankie.app.business.survey.SurveyData
import com.frankie.app.databinding.ItemSurveyBinding
import com.frankie.app.ui.common.color
import com.frankie.app.ui.common.dpToPx

class SurveyListItemView @JvmOverloads constructor(context: Context,
                                                   attrs: AttributeSet? = null)
    : ConstraintLayout(context, attrs) {

    private val binding = ItemSurveyBinding.inflate(LayoutInflater.from(context), this)

    init {
        setPadding(context.dpToPx(16))
    }

    fun bind(surveyData: SurveyData,
             onSyncClicked: (SurveyData) -> Unit,
             onPlayClicked: (SurveyData) -> Unit,
             onInfoClicked: (SurveyData) -> Unit) {
        binding.name.text = surveyData.name
        binding.play.isEnabled = !surveyData.newVersionAvailable
        binding.play.setColorFilter(!surveyData.newVersionAvailable)
        binding.sync.setColorFilter(surveyData.newVersionAvailable)
        binding.sync.setOnClickListener { onSyncClicked(surveyData) }
        binding.play.setOnClickListener { onPlayClicked(surveyData) }
        binding.info.setOnClickListener { onInfoClicked(surveyData) }
    }

    private fun AppCompatImageView.setColorFilter(isEnabled: Boolean) {
        if (isEnabled) {
            setColorFilter(context.color(R.color.black))
        } else {
            setColorFilter(context.color(R.color.gray))
        }
    }
}