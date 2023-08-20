package com.frankie.app.ui.main.ui.main

import android.os.Bundle
import android.view.LayoutInflater
import android.view.Menu
import android.view.MenuInflater
import android.view.MenuItem
import android.view.View
import android.view.ViewGroup
import androidx.core.view.MenuHost
import androidx.core.view.MenuProvider
import androidx.fragment.app.Fragment
import androidx.lifecycle.Lifecycle
import androidx.lifecycle.lifecycleScope
import androidx.recyclerview.widget.LinearLayoutManager
import com.frankie.app.R
import com.frankie.app.business.ByteSize
import com.frankie.app.business.formatBytes
import com.frankie.app.databinding.FragmentMainBinding
import com.frankie.app.storage.DownloadState
import com.frankie.app.ui.common.error.ErrorDisplayManager
import com.frankie.app.ui.common.visibleOrGone
import com.frankie.app.ui.login.LoginActivity
import com.frankie.app.ui.responses.ResponsesActivity
import com.frankie.app.ui.survey.SurveyActivity
import kotlinx.coroutines.launch
import org.koin.android.ext.android.inject
import org.koin.androidx.viewmodel.ext.android.getViewModel
import org.koin.core.parameter.parametersOf

class MainFragment : Fragment() {

    private val viewModel: MainViewModel by lazy { getViewModel() }
    private val errorDisplayManager: ErrorDisplayManager by inject { parametersOf(requireActivity()) }
    private lateinit var binding: FragmentMainBinding
    private lateinit var adapter: SurveyListAdapter

    companion object {
        fun newInstance() = MainFragment()
    }

    override fun onCreateView(
        inflater: LayoutInflater, container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View {
        binding = FragmentMainBinding.inflate(inflater, container, false)
        val menuHost: MenuHost = requireActivity()

        menuHost.addMenuProvider(object : MenuProvider {
            override fun onCreateMenu(menu: Menu, menuInflater: MenuInflater) {
                // Add menu items here
                menuInflater.inflate(R.menu.main, menu)
            }

            override fun onMenuItemSelected(menuItem: MenuItem): Boolean {
                // Handle the menu selection
                return when (menuItem.itemId) {
                    android.R.id.home -> {
                        activity?.onBackPressedDispatcher?.onBackPressed()
                        return true
                    }

                    R.id.refresh -> {
                        viewModel.fetchSurveyList(true)
                        true
                    }

                    R.id.logout -> {
                        viewModel.logout()
                        startActivity(LoginActivity.createIntent(binding.root.context))
                        activity?.finish()
                        true
                    }

                    else -> false
                }
            }
        }, viewLifecycleOwner, Lifecycle.State.RESUMED)

        adapter = SurveyListAdapter(onSyncClicked = { surveyData ->
            viewModel.syncSurveyForOffline(surveyData)
        },
            onPlayClicked = { surveyData ->
                startActivity(
                    SurveyActivity.createIntent(
                        requireContext(),
                        surveyData
                    )
                )
            },
            onResponsesClicked = { surveyData ->
                startActivity(
                    ResponsesActivity.createIntent(
                        requireContext(),
                        surveyData
                    )
                )
            },
            onInfoClicked = { },
            onUploadClicked = {
                viewModel.uploadSurveyResponses()
            })
        binding.recycler.adapter = adapter
        binding.recycler.layoutManager = LinearLayoutManager(binding.root.context)

        lifecycleScope.launch {
            viewModel.state.collect { state ->
                if (!state.isLoading && state.surveyList.isEmpty()) {
                    binding.noSurveysAvailable.visibleOrGone(true)
                    binding.fetchingSurveysProgress.visibleOrGone(false)
                    binding.recycler.visibleOrGone(false)
                } else {
                    binding.noSurveysAvailable.visibleOrGone(false)
                    binding.fetchingSurveysProgress.visibleOrGone(state.isLoading)
                    binding.recycler.visibleOrGone(true)
                    adapter.submitList(state.surveyList.sortedBy { it.creationDate })
                }
            }
        }
        lifecycleScope.launch {
            viewModel.downloadState.collect { downloadState ->
                processDownloadState(downloadState)
            }
        }

        lifecycleScope.launch {
            viewModel.errors.collect { error ->
                errorDisplayManager.displayError(error)
            }
        }

        return binding.root
    }

    override fun onStart() {
        super.onStart()
        viewModel.uploadSurveyResponses()
        viewModel.fetchSurveyList(false)
    }

    private fun processDownloadState(downloadState: DownloadState) {
        downloadState.run {
            binding.syncingProgressContainer.visibleOrGone(downloadState is DownloadState.Loading)
            if (downloadState !is DownloadState.Loading) {
                return@run
            } else {
                binding.syncingSurveyTitle.text =
                    getString(R.string.syncing_survey_title, downloadState.surveyName)
                binding.syncingSurveyFileOrder.visibleOrGone(downloadState.totalFilesCount > 0)
                binding.syncCurrentSize.visibleOrGone(downloadState.totalSize > 0)
                binding.syncTotalSize.visibleOrGone(downloadState.totalSize > 0)
                formatBytes(downloadState.totalSize).let { formatted ->
                    binding.syncTotalSize.text = getString(
                        if (formatted.byteSize == ByteSize.MEGA) R.string.megabytes else R.string.kilobytes,
                        formatted.value
                    )
                }
                formatBytes(downloadState.currentDownloadedSize).let { formatted ->
                    binding.syncCurrentSize.text = getString(
                        if (formatted.byteSize == ByteSize.MEGA) R.string.megabytes else R.string.kilobytes,
                        formatted.value
                    )
                }
                binding.syncingSurveyFileOrder.text = getString(
                    R.string.syncing_survey_file_order,
                    downloadState.downloadedFileCount + 1,
                    downloadState.totalFilesCount
                )
                binding.syncingProgress.max = 100
                binding.syncingProgress.post {
                    binding.syncingProgress.progress = downloadState.downloadPercent
                }
            }
        }

    }
}