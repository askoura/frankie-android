package com.frankie.app.ui.responses

import android.view.ViewGroup
import androidx.recyclerview.widget.DiffUtil
import androidx.recyclerview.widget.ListAdapter
import androidx.recyclerview.widget.RecyclerView
import com.frankie.app.db.model.Response

class ResponseListAdapter(
    private val onResumeClicked: (Response) -> Unit,
    private val onDeleteClicked: (Response) -> Unit
) : ListAdapter<Response, ResponseListAdapter.ViewHolder>(ResponseDiffCallBack()) {

    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): ViewHolder {
        val view = ResponseItemView(parent.context)
        view.layoutParams = RecyclerView.LayoutParams(
            ViewGroup.LayoutParams.MATCH_PARENT,
            ViewGroup.LayoutParams.WRAP_CONTENT
        )
        return ViewHolder(view, onResumeClicked, onDeleteClicked)
    }

    override fun onBindViewHolder(holder: ViewHolder, position: Int) {
        holder.bind(getItem(position))
    }

    inner class ViewHolder(
        private val responseItemView: ResponseItemView,
        private val onResumeClicked: (Response) -> Unit,
        private val onDeleteClicked: (Response) -> Unit
    ) :
        RecyclerView.ViewHolder(responseItemView) {

        fun bind(response: Response) {
            responseItemView.bind(response, onResumeClicked, onDeleteClicked)
        }
    }

    private class ResponseDiffCallBack : DiffUtil.ItemCallback<Response>() {
        override fun areItemsTheSame(oldItem: Response, newItem: Response): Boolean {
            return oldItem.id == newItem.id
        }

        override fun areContentsTheSame(oldItem: Response, newItem: Response): Boolean {
            return oldItem == newItem
        }

    }
}
