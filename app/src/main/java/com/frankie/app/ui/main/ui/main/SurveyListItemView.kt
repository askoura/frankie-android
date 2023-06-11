package com.frankie.app.ui.main.ui.main

import android.content.Context
import android.util.AttributeSet
import android.view.LayoutInflater
import androidx.constraintlayout.widget.ConstraintLayout
import androidx.core.view.setPadding
import com.frankie.app.R
import com.frankie.app.business.survey.SurveyData
import com.frankie.app.business.survey.SurveyStatus
import com.frankie.app.databinding.ItemSurveyBinding
import com.frankie.app.ui.common.dpToPx
import com.frankie.app.ui.common.setEnabledTint
import com.frankie.expressionmanager.model.DATE_TIME_UTC_FORMAT
import java.time.format.DateTimeFormatter

class SurveyListItemView @JvmOverloads constructor(
    context: Context,
    attrs: AttributeSet? = null
) : ConstraintLayout(context, attrs) {

    private val binding = ItemSurveyBinding.inflate(LayoutInflater.from(context), this)

    init {
        setPadding(context.dpToPx(16))
    }

    fun bind(
        surveyData: SurveyData,
        onSyncClicked: (SurveyData) -> Unit,
        onPlayClicked: (SurveyData) -> Unit,
        onResponsesClicked: (SurveyData) -> Unit,
        onInfoClicked: (SurveyData) -> Unit
    ) {
        val isPlayEnabled =
            !surveyData.newVersionAvailable
                      && surveyData.publishInfo.version > 0
                      && !surveyData.quotaExceeded()
                      && surveyData.surveyStatus == SurveyStatus.ACTIVE
        val isSyncOfflineEnabled = surveyData.newVersionAvailable
        val isResponsesEnabled = surveyData.localResponsesCount > 0
        binding.localResponseCount.text = surveyData.localResponsesCount.let { count ->
            context.getString(R.string.local_responses_count, count)
        }
        binding.completeLocalResponseCount.text =
            surveyData.localCompleteResponsesCount.let { count ->
                context.getString(R.string.local_complete_responses_count, count)
            }
        binding.startDate.text = surveyData.startDate.let { localDateTime ->
            if (localDateTime == null) {
                context.getString(R.string.no_start_date)
            } else {
                context.getString(
                    R.string.start_date, localDateTime.format(
                        DateTimeFormatter.ofPattern(
                            DATE_TIME_UTC_FORMAT
                        )
                    )
                )
            }
        }
        binding.endDate.text = surveyData.endDate.let { localDateTime ->
            if (localDateTime == null) {
                context.getString(R.string.no_end_date)
            } else {
                context.getString(
                    R.string.end_date, localDateTime.format(
                        DateTimeFormatter.ofPattern(
                            DATE_TIME_UTC_FORMAT
                        )
                    )
                )
            }
        }
        binding.quota.text = surveyData.surveyQuota.let { quota ->
            if (quota < 0) {
                context.getString(R.string.unlimited_survey_quota)
            } else {
                context.getString(R.string.survey_quota, quota)
            }
        }
        binding.userQuota.text = surveyData.userQuota.let { quota ->
            if (quota < 0) {
                context.getString(R.string.unlimited_user_quota)
            } else {
                context.getString(R.string.user_quota, quota)
            }
        }
        binding.name.text = surveyData.name
        binding.play.isEnabled = isPlayEnabled
        binding.sync.isEnabled = isSyncOfflineEnabled
        binding.responses.isEnabled = isResponsesEnabled
        binding.play.setEnabledTint(context, isPlayEnabled)
        binding.responses.setEnabledTint(context, isResponsesEnabled)
        binding.sync.setEnabledTint(context, isSyncOfflineEnabled)
        binding.sync.setOnClickListener { onSyncClicked(surveyData) }
        binding.play.setOnClickListener { onPlayClicked(surveyData) }
        binding.responses.setOnClickListener { onResponsesClicked(surveyData) }
        binding.info.setOnClickListener { onInfoClicked(surveyData) }
    }
}