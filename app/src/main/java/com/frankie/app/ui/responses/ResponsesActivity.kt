package com.frankie.app.ui.responses

import android.content.Context
import android.content.Intent
import android.os.Bundle
import android.os.Parcelable
import android.view.MenuItem
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.compose.foundation.layout.padding
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.automirrored.filled.ArrowBack
import androidx.compose.material3.ExperimentalMaterial3Api
import androidx.compose.material3.Icon
import androidx.compose.material3.IconButton
import androidx.compose.material3.Scaffold
import androidx.compose.material3.Text
import androidx.compose.material3.TopAppBar
import androidx.compose.runtime.collectAsState
import androidx.compose.runtime.getValue
import androidx.compose.ui.Modifier
import androidx.compose.ui.res.stringResource
import androidx.recyclerview.widget.LinearLayoutManager
import androidx.recyclerview.widget.RecyclerView
import com.frankie.app.R
import com.frankie.app.business.parcelable
import com.frankie.app.business.survey.SurveyData
import com.frankie.app.ui.survey.EMNavProcessor
import com.frankie.app.ui.survey.SurveyActivity
import org.koin.androidx.viewmodel.ext.android.getViewModel

class ResponsesActivity : ComponentActivity() {

    private val viewModel by lazy { getViewModel<ResponsesViewModel>() }

    val survey: SurveyData
        get() = intent.parcelable(SURVEY) ?: throw IllegalArgumentException("Survey is required")


    @OptIn(ExperimentalMaterial3Api::class)
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        viewModel.emNavProcessor = EMNavProcessor(this, survey) {
            viewModel.fetchResponses(survey)
        }

        setContent {
            val responsesScreenData by viewModel.responsesScreenData.collectAsState()

            Scaffold(topBar = {
                TopAppBar(title = {
                    Text(
                        text = stringResource(
                            id = R.string.title_activity_responses
                        )
                    )
                }, navigationIcon = {
                    IconButton(onClick = { onBackPressedDispatcher.onBackPressed() }) {
                        Icon(
                            imageVector = Icons.AutoMirrored.Filled.ArrowBack,
                            contentDescription = stringResource(id = R.string.back)
                        )
                    }
                })
            }) { padding ->
                ResponsesScreen(
                    modifier = Modifier
                        .padding(padding),
                    onLoadNext = viewModel::loadNext,
                    onSyncClicked = {

                    },
                    onEditClicked = { id ->
                        startActivity(
                            SurveyActivity.createIntent(
                                this@ResponsesActivity, survey, id
                            )
                        )
                    },
                    onDeleteClicked = { id ->
                        viewModel.deleteResponse(id)
                    },
                    screenState = responsesScreenData
                )
            }
        }
    }

//        binding = ActivityResponsesBinding.inflate(layoutInflater)
//        setContentView(binding.root)
//        adapter = ResponseListAdapter({ response: Response ->
//        }, { response: Response ->
//            viewModel.deleteResponse(response.id)
//        })
//        val lm = LinearLayoutManager(binding.root.context)
//        binding.recycler.adapter = adapter
//        binding.recycler.layoutManager = lm
//        binding.swipe.setOnRefreshListener {
//            viewModel.refresh()
//        }
//        binding.recycler.addOnScrollListener(
//            PaginationScrollListener(lm, viewModel::shouldLoadNextPage, viewModel::loadNext)
//        )
//

//

//
//        title = getString(R.string.title_activity_responses)
//        supportActionBar?.setDisplayHomeAsUpEnabled(true)

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
) : RecyclerView.OnScrollListener() {

    override fun onScrolled(recyclerView: RecyclerView, dx: Int, dy: Int) {
        super.onScrolled(recyclerView, dx, dy)
        val visibleItemCount: Int = layoutManager.childCount
        val totalItemCount: Int = layoutManager.itemCount
        val firstVisibleItemPosition: Int = layoutManager.findFirstVisibleItemPosition()
        if (shouldLoadMore()) {
            if (visibleItemCount + firstVisibleItemPosition >= totalItemCount - 4 && firstVisibleItemPosition >= 0) {
                onLoadMore()
            }
        }
    }
}