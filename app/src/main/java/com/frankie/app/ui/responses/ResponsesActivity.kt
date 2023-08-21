package com.frankie.app.ui.responses

import android.content.Context
import android.content.Intent
import android.os.Bundle
import android.os.Parcelable
import android.view.MenuItem
import androidx.appcompat.app.AppCompatActivity
import androidx.lifecycle.lifecycleScope
import androidx.recyclerview.widget.LinearLayoutManager
import com.frankie.app.R
import com.frankie.app.business.parcelable
import com.frankie.app.business.survey.SurveyData
import com.frankie.app.databinding.ActivityResponsesBinding
import com.frankie.app.db.model.Response
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


        adapter = ResponseListAdapter({ response: Response ->
            startActivity(SurveyActivity.createIntent(this, survey, response.id))
        }, { response: Response ->
            viewModel.deleteResponse(survey, response.id)
        })
        binding.recycler.adapter = adapter
        binding.recycler.layoutManager = LinearLayoutManager(binding.root.context)


        lifecycleScope.launch {
            viewModel.responses.collect { state ->
                adapter.submitList(state)
            }
        }

        title = getString(R.string.title_activity_responses)
        supportActionBar?.setDisplayHomeAsUpEnabled(true)

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

    override fun onResume() {
        super.onResume()
        viewModel.fetchResponses(survey)
    }


    companion object {
        private const val SURVEY = "survey"
        fun createIntent(context: Context, survey: SurveyData): Intent =
            Intent(context, ResponsesActivity::class.java).apply {
                putExtra(SURVEY, survey as Parcelable)
            }
    }
}