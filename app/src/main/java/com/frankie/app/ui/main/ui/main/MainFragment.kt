package com.frankie.app.ui.main.ui.main

import android.os.Bundle
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import androidx.fragment.app.Fragment
import androidx.lifecycle.lifecycleScope
import com.frankie.app.databinding.FragmentMainBinding
import kotlinx.coroutines.launch
import org.koin.androidx.viewmodel.ext.android.getViewModel

class MainFragment : Fragment() {

    private val viewModel: MainViewModel by lazy { getViewModel() }
    private lateinit var binding: FragmentMainBinding

    companion object {
        fun newInstance() = MainFragment()
    }

    override fun onCreateView(inflater: LayoutInflater, container: ViewGroup?,
                              savedInstanceState: Bundle?): View {
        binding = FragmentMainBinding.inflate(inflater, container, false)
        binding.btnAllSurveys.setOnClickListener {
            viewModel.fetchSurveyList()
        }
        binding.btnSurveyUsers.setOnClickListener {

        }

        lifecycleScope.launch {
            viewModel.state.collect { state ->
                binding.message.text = state.surveyList.toString()
            }
        }
        return binding.root
    }

}