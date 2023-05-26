package com.frankie.app.ui.main.ui.main

import android.view.ViewGroup
import androidx.recyclerview.widget.DiffUtil
import androidx.recyclerview.widget.ListAdapter
import androidx.recyclerview.widget.RecyclerView
import com.frankie.app.business.survey.SurveyData

class SurveyListAdapter(
    private val onSyncClicked: (SurveyData) -> Unit,
    private val onPlayClicked: (SurveyData) -> Unit,
    private val onResponsesClicked: (SurveyData) -> Unit,
    private val onInfoClicked: (SurveyData) -> Unit
) : ListAdapter<SurveyData, SurveyListAdapter.ViewHolder>(SurveyDiffCallBack()) {

    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): ViewHolder {
        val view = SurveyListItemView(parent.context)
        view.layoutParams = RecyclerView.LayoutParams(
            ViewGroup.LayoutParams.MATCH_PARENT,
            ViewGroup.LayoutParams.WRAP_CONTENT
        )
        return ViewHolder(view)
    }

    override fun onBindViewHolder(holder: ViewHolder, position: Int) {
        holder.bind(getItem(position))
    }

    inner class ViewHolder(private val surveyListItemView: SurveyListItemView) :
        RecyclerView.ViewHolder(surveyListItemView) {

        fun bind(surveyData: SurveyData) {
            surveyListItemView.bind(
                surveyData = surveyData,
                onSyncClicked = onSyncClicked,
                onPlayClicked = onPlayClicked,
                onInfoClicked = onInfoClicked,
                onResponsesClicked = onResponsesClicked
            )
        }
    }

    private class SurveyDiffCallBack : DiffUtil.ItemCallback<SurveyData>() {
        override fun areItemsTheSame(oldItem: SurveyData, newItem: SurveyData): Boolean {
            return oldItem.id == newItem.id
        }

        override fun areContentsTheSame(oldItem: SurveyData, newItem: SurveyData): Boolean {
            return oldItem == newItem
        }

    }
}
