package com.frankie.app.ui.main.ui.main

import android.content.Intent
import android.os.Bundle
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import androidx.fragment.app.Fragment
import androidx.lifecycle.lifecycleScope
import androidx.recyclerview.widget.LinearLayoutManager
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

    override fun onCreateView(inflater: LayoutInflater, container: ViewGroup?,
                              savedInstanceState: Bundle?): View {
        binding = FragmentMainBinding.inflate(inflater, container, false)

        adapter = SurveyListAdapter(onItemClicked = { surveyData ->
            viewModel.surveyClicked(surveyData)
        })
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
            }
        }

        lifecycleScope.launch {
            viewModel.errors.collect { error ->
                errorDisplayManager.displayError(error)
            }
        }

        return binding.root
    }

    override fun onResume() {
        super.onResume()
        viewModel.fetchSurveyList()
    }
}