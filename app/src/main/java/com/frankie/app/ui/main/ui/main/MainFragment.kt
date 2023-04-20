package com.frankie.app.ui.main.ui.main

import android.os.Bundle
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import androidx.fragment.app.Fragment
import com.frankie.app.databinding.FragmentMainBinding
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
        binding.fab.setOnClickListener {
            viewModel.fetchSurveyList()
        }
        return binding.root
    }

}