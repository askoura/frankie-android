package com.frankie.app.ui.responses

import android.content.Context
import android.content.Intent
import android.os.Bundle
import android.os.Parcelable
import android.view.MenuItem
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.compose.foundation.layout.padding
import androidx.compose.material3.Scaffold
import androidx.compose.runtime.collectAsState
import androidx.compose.runtime.getValue
import androidx.compose.ui.Modifier
import androidx.compose.ui.res.stringResource
import androidx.media3.exoplayer.ExoPlayer
import com.frankie.app.R
import com.frankie.app.business.parcelable
import com.frankie.app.business.survey.SurveyData
import com.frankie.app.ui.common.theme.FrankieTheme
import com.frankie.app.ui.common.theme.FrankieTopBar
import com.frankie.app.ui.survey.EMNavProcessor
import com.frankie.app.ui.survey.SurveyActivity
import org.koin.androidx.viewmodel.ext.android.getViewModel

class ResponsesActivity : ComponentActivity() {

    private val viewModel by lazy { getViewModel<ResponsesViewModel>() }
    private val exoPlayer by lazy { ExoPlayer.Builder(this).build() }

    val survey: SurveyData
        get() = intent.parcelable(SURVEY) ?: throw IllegalArgumentException("Survey is required")


    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        viewModel.emNavProcessor = EMNavProcessor(this, survey) {
            viewModel.fetchResponses(survey)
        }

        setContent {
            val responsesScreenData by viewModel.responsesScreenData.collectAsState()

            FrankieTheme {
                Scaffold(topBar = {
                    FrankieTopBar(title = stringResource(id = R.string.title_activity_responses)) {
                        onBackPressedDispatcher.onBackPressed()
                    }
                }) { padding ->
                    ResponsesScreen(
                        modifier = Modifier
                            .padding(padding),
                        onLoadNext = viewModel::loadNext,
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
                        exoPlayer = exoPlayer,
                        screenState = responsesScreenData
                    )
                }
            }
        }
    }

    override fun onStop() {
        super.onStop()
        exoPlayer.stop()
    }

    override fun onDestroy() {
        super.onDestroy()
        exoPlayer.release()
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
