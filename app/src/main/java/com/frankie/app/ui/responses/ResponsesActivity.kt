package com.frankie.app.ui.responses

import android.content.Context
import android.content.Intent
import android.os.Bundle
import android.os.Parcelable
import android.view.MenuItem
import androidx.appcompat.app.AppCompatActivity
import androidx.lifecycle.lifecycleScope
import androidx.recyclerview.widget.LinearLayoutManager
import androidx.recyclerview.widget.RecyclerView
import com.frankie.app.R
import com.frankie.app.business.parcelable
import com.frankie.app.business.survey.SurveyData
import com.frankie.app.databinding.ActivityResponsesBinding
import com.frankie.app.db.model.Response
import com.frankie.app.ui.survey.EMNavProcessor
import com.frankie.app.ui.survey.SurveyActivity
import kotlinx.coroutines.launch
import org.koin.androidx.viewmodel.ext.android.getViewModel

class ResponsesActivity : AppCompatActivity() {
    private lateinit var binding: ActivityResponsesBinding

    private val viewModel by lazy { getViewModel<ResponsesViewModel>() }
    private lateinit var adapter: ResponseListAdapter

    val survey: SurveyData
        get() = intent.parcelable(SURVEY)
            ?: throw IllegalArgumentException("Survey is required")

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        binding = ActivityResponsesBinding.inflate(layoutInflater)
        setContentView(binding.root)
        viewModel.emNavProcessor = EMNavProcessor(this, survey)

        adapter = ResponseListAdapter({ response: Response ->
            startActivity(SurveyActivity.createIntent(this, survey, response.id))
        }, { response: Response ->
            viewModel.deleteResponse(response.id)
        })
        val lm = LinearLayoutManager(binding.root.context)
        binding.recycler.adapter = adapter
        binding.recycler.layoutManager = lm
        binding.swipe.setOnRefreshListener {
            viewModel.refresh()
        }
        binding.recycler.addOnScrollListener(
            PaginationScrollListener(lm, viewModel::shouldLoadNextPage, viewModel::loadNext)
        )

        lifecycleScope.launch {
            viewModel.responses.collect { state ->
                adapter.submitList(state)
            }
        }

        title = getString(R.string.title_activity_responses)
        supportActionBar?.setDisplayHomeAsUpEnabled(true)
        viewModel.fetchResponses(survey)
    }

    override fun onOptionsItemSelected(item: MenuItem): Boolean {
        return when (item.itemId) {
            android.R.id.home -> {
                onBackPressedDispatcher.onBackPressed()
                return true
            }

            else -> super.onOptionsItemSelected(item)
        }
    }

    companion object {
        private const val SURVEY = "survey"
        fun createIntent(context: Context, survey: SurveyData): Intent =
            Intent(context, ResponsesActivity::class.java).apply {
                putExtra(SURVEY, survey as Parcelable)
            }
    }
}

class PaginationScrollListener(
    private val layoutManager: LinearLayoutManager,
    private val shouldLoadMore: () -> Boolean,
    private val onLoadMore: () -> Unit,
) :
    RecyclerView.OnScrollListener() {

    override fun onScrolled(recyclerView: RecyclerView, dx: Int, dy: Int) {
        super.onScrolled(recyclerView, dx, dy)
        val visibleItemCount: Int = layoutManager.childCount
        val totalItemCount: Int = layoutManager.itemCount
        val firstVisibleItemPosition: Int = layoutManager.findFirstVisibleItemPosition()
        if (shouldLoadMore()) {
            if (visibleItemCount + firstVisibleItemPosition >= totalItemCount - 4
                && firstVisibleItemPosition >= 0
            ) {
                onLoadMore()
            }
        }
    }
}