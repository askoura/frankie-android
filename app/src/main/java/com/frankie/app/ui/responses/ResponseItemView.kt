package com.frankie.app.ui.responses

import android.content.Context
import android.util.AttributeSet
import android.view.LayoutInflater
import androidx.constraintlayout.widget.ConstraintLayout
import androidx.core.view.setPadding
import com.frankie.app.R
import com.frankie.app.business.fromUtc
import com.frankie.app.databinding.ItemResponseBinding
import com.frankie.app.db.model.Response
import com.frankie.app.ui.common.dpToPx
import com.frankie.app.ui.common.setEnabledTint

class ResponseItemView @JvmOverloads constructor(
    context: Context,
    attrs: AttributeSet? = null
) : ConstraintLayout(context, attrs) {

    private val binding = ItemResponseBinding.inflate(LayoutInflater.from(context), this)

    init {
        setPadding(context.dpToPx(16))
    }

    fun bind(
        responseItem: ResponseItem,
        onResumeClicked: (Response) -> Unit,
        onDeleteClicked: (Response) -> Unit
    ) {
        val response = responseItem.responses
        binding.edit.visibility = if (response.submitDate == null) VISIBLE else GONE
        binding.edit.isEnabled = responseItem.editEnabled
        binding.edit.setEnabledTint(context, responseItem.editEnabled)
        binding.edit.setOnClickListener { onResumeClicked(response) }
        binding.delete.visibility =
            if (response.submitDate == null || response.isSynced) VISIBLE else GONE
        binding.delete.setOnClickListener { onDeleteClicked(response) }
        binding.header.text = response.id
        binding.syncedStatus.text =
            context.getString(R.string.response_sync_status, response.isSynced)
        binding.startDate.text =
            context.getString(R.string.response_start_date, response.startDate.fromUtc().toString())
        binding.submitDate.text =
            context.getString(R.string.response_submit_date, response.submitDate?.fromUtc().toString())
        binding.lang.text = context.getString(R.string.response_lang, response.lang)
        binding.content.text =
            response.values.entries.filter { it.value.toString().isNotBlank() }
                .joinToString(separator = "\n",
                    transform = { "${it.key.replace(".value", "")}: ${it.value}" }
                )


    }

}