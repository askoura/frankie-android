package com.frankie.app.ui.main.ui.main

import android.content.Context
import android.util.AttributeSet
import android.view.LayoutInflater
import androidx.constraintlayout.widget.ConstraintLayout
import androidx.core.view.setPadding
import com.frankie.app.business.survey.SurveyData
import com.frankie.app.databinding.ItemSurveyBinding
import com.frankie.app.ui.common.dpToPx

class SurveyListItemView @JvmOverloads constructor(context: Context,
                                                   attrs: AttributeSet? = null)
    : ConstraintLayout(context, attrs) {

    private val binding = ItemSurveyBinding.inflate(LayoutInflater.from(context), this)

    init {
        setPadding(context.dpToPx(16))
    }

    fun bind(surveyData: SurveyData) {
        binding.name.text = surveyData.name
    }
}