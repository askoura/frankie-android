package com.frankie.app.ui.main.ui.main

import android.app.ProgressDialog
import android.content.Intent
import android.os.Bundle
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import androidx.fragment.app.Fragment
import androidx.lifecycle.lifecycleScope
import androidx.recyclerview.widget.LinearLayoutManager
import com.frankie.app.R
import com.frankie.app.SurveyActivity
import com.frankie.app.databinding.FragmentMainBinding
import com.frankie.app.ui.common.error.ErrorDisplayManager
import com.frankie.app.ui.login.LoginActivity
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

    override fun onCreateView(inflater: LayoutInflater, container: ViewGroup?,
                              savedInstanceState: Bundle?): View {
        binding = FragmentMainBinding.inflate(inflater, container, false)

        adapter = SurveyListAdapter(onSyncClicked = { surveyData -> viewModel.syncSurveyForOffline(surveyData) },
                onPlayClicked = { surveyData -> startActivity(SurveyActivity.createIntent(requireContext(), surveyData)) },
                onInfoClicked = { })
        binding.recycler.adapter = adapter
        binding.recycler.layoutManager = LinearLayoutManager(binding.root.context)

        binding.btnAllSurveys.setOnClickListener {
            viewModel.fetchSurveyList()
        }
        binding.btnLogout.setOnClickListener {
            viewModel.logout()
            startActivity(LoginActivity.createIntent(binding.root.context))
            activity?.finish()
        }
        binding.btnSurveyUsers.setOnClickListener {
            startActivity(Intent(binding.root.context, SurveyActivity::class.java))
        }

        lifecycleScope.launch {
            viewModel.state.collect { state ->
                adapter.submitList(state.surveyList)
                showProgressDialog(state.isLoading)
            }
        }

        lifecycleScope.launch {
            viewModel.errors.collect { error ->
                errorDisplayManager.displayError(error)
            }
        }

        return binding.root
    }

    // TODO find better way to show progress
    private fun showProgressDialog(show: Boolean) {
        if (progressDialog != null && progressDialog!!.isShowing) {
            progressDialog?.dismiss()
        }
        if (show) {
            progressDialog = ProgressDialog.show(binding.root.context,
                    getString(R.string.progress_dialog_title),
                    getString(R.string.progress_dialog_description),
                    true)
        }
    }

    override fun onResume() {
        super.onResume()
        viewModel.fetchSurveyList()
    }
}