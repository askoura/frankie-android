package com.frankie.app.ui.login


import android.content.Context
import android.content.Intent
import android.os.Bundle
import androidx.appcompat.app.AppCompatActivity
import androidx.lifecycle.lifecycleScope
import com.frankie.app.databinding.ActivityLoginBinding
import com.frankie.app.ui.main.MainActivity
import kotlinx.coroutines.launch
import org.koin.androidx.viewmodel.ext.android.getViewModel

class LoginActivity : AppCompatActivity() {

    private val viewModel: LoginViewModel by lazy { getViewModel() }
    private lateinit var binding: ActivityLoginBinding

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

        binding = ActivityLoginBinding.inflate(layoutInflater)
        setContentView(binding.root)

        binding.btnLogin.setLifecycle(lifecycle)
        binding.btnLogin.setOnClickListener {
            viewModel.login(
                    binding.username.text.toString(),
                    binding.password.text.toString()
            )
        }

        lifecycleScope.launch {
            viewModel.loginState.collect { state ->
                binding.btnLogin.isLoading = state.isLoading

                if (state.isLoggedIn) {
                    startActivity(MainActivity.createIntent(this@LoginActivity))
                    finish()
                }
            }
        }

    }

    companion object {
        fun createIntent(context: Context): Intent = Intent(context, LoginActivity::class.java)
    }
}
