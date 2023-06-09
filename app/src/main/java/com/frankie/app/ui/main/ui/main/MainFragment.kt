package com.frankie.app.ui.main.ui.main

import android.app.ProgressDialog
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
import com.frankie.app.databinding.FragmentMainBinding
import com.frankie.app.storage.DownloadState
import com.frankie.app.ui.common.error.ErrorDisplayManager
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

    private var progressDialog: ProgressDialog? = null

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
                        activity?.onBackPressed()
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
            onInfoClicked = { })
        binding.recycler.adapter = adapter
        binding.recycler.layoutManager = LinearLayoutManager(binding.root.context)

        lifecycleScope.launch {
            viewModel.state.collect { state ->
                adapter.submitList(state.surveyList)
                showProgressDialog(
                    show = state.isLoading,
                    title = getString(R.string.progress_dialog_title),
                    body = getString(R.string.progress_dialog_description)
                )
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

    private fun processDownloadState(downloadState: DownloadState) {
        downloadState.run {
            if (!isInProgress) {
                showProgressDialog(false)
            } else {
                val title = getString(R.string.progress_dialog_title)
                val body = if (totalFilesCount > 0 && currentFileName.isNotBlank()) {
                    "Downloading: ${downloadState.currentFileName.take(10)} (${downloadedFileCount + 1} of $totalFilesCount)"
                } else {
                    "Downloading..."
                }
                showProgressDialog(true, title, body)
            }
        }

    }

    // TODO find better way to show progress
    private fun showProgressDialog(
        show: Boolean,
        title: CharSequence = "",
        body: CharSequence = ""
    ) {
        if (progressDialog != null && progressDialog!!.isShowing) {
            progressDialog?.dismiss()
        }
        if (show) {
            progressDialog = ProgressDialog.show(
                binding.root.context,
                title,
                body,
                true
            )
        }
    }

    override fun onResume() {
        super.onResume()
        viewModel.fetchSurveyList(false)
    }
}