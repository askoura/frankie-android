package com.frankie.app.ui.login


import android.content.Context
import android.content.Intent
import android.os.Bundle
import android.util.Log
import androidx.appcompat.app.AppCompatActivity
import androidx.lifecycle.lifecycleScope
import com.frankie.app.R
import com.frankie.app.databinding.ActivityLoginBinding
import com.frankie.app.ui.common.error.ErrorDisplayManager
import com.frankie.app.ui.main.MainActivity
import com.google.android.gms.auth.api.signin.GoogleSignIn
import com.google.android.gms.auth.api.signin.GoogleSignInAccount
import com.google.android.gms.auth.api.signin.GoogleSignInClient
import com.google.android.gms.common.SignInButton
import com.google.android.gms.common.api.ApiException
import com.google.android.gms.tasks.Task
import kotlinx.coroutines.launch
import org.koin.android.ext.android.inject
import org.koin.androidx.viewmodel.ext.android.getViewModel
import org.koin.core.parameter.parametersOf


class LoginActivity : AppCompatActivity() {

    private val viewModel: LoginViewModel by lazy { getViewModel() }
    private val errorDisplayManager: ErrorDisplayManager by inject { parametersOf(this) }
    private lateinit var binding: ActivityLoginBinding

    private val googleSignInClient: GoogleSignInClient by inject()


    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        binding = ActivityLoginBinding.inflate(layoutInflater)
        setContentView(binding.root)
        binding.googleSignInButton.setSize(SignInButton.SIZE_STANDARD)
        binding.googleSignInButton.setOnClickListener {
            signIn()
        }
        binding.tryGuestButton.setOnClickListener {
            viewModel.tryAsGuest()
        }

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

                if (state.emailValidationError) {
                    binding.usernameLayout.error =
                        binding.root.context.getString(R.string.validation_email_error)
                } else {
                    binding.usernameLayout.error = null
                }
                if (state.pswValidationError) {
                    binding.passwordLayout.error =
                        binding.root.context.getString(R.string.validation_psw_error)
                } else {
                    binding.passwordLayout.error = null
                }
            }
        }
        lifecycleScope.launch {
            viewModel.errors.collect { error ->
                errorDisplayManager.displayError(error)
            }
        }
    }

    override fun onStart() {
        super.onStart()
        val account = GoogleSignIn.getLastSignedInAccount(this)
        updateUI(account)
    }

    private fun signIn() {
        val signInIntent = googleSignInClient.signInIntent
        startActivityForResult(signInIntent, RC_SIGN_IN)
    }

    override fun onActivityResult(requestCode: Int, resultCode: Int, data: Intent?) {
        super.onActivityResult(requestCode, resultCode, data)

        // Result returned from launching the Intent from GoogleSignInClient.getSignInIntent(...);
        if (requestCode == RC_SIGN_IN) {
            // The Task returned from this call is always completed, no need to attach
            // a listener.
            val task: Task<GoogleSignInAccount> = GoogleSignIn.getSignedInAccountFromIntent(data)
            handleSignInResult(task)
        }
    }

    private fun handleSignInResult(completedTask: Task<GoogleSignInAccount>) {
        try {
            val account = completedTask.getResult(ApiException::class.java)

            // Signed in successfully, show authenticated UI.
            updateUI(account)
        } catch (e: ApiException) {
            // The ApiException status code indicates the detailed failure reason.
            // Please refer to the GoogleSignInStatusCodes class reference for more information.
            Log.w(TAG, "signInResult:failed code=" + e.statusCode)
            updateUI(null)
        }
    }

    private fun updateUI(account: GoogleSignInAccount?) {
        account?.let {
            if (it.idToken != null && it.id != null) {
                viewModel.googleSignIn(it.idToken!!, it.id!!)
            }
        }

    }

    companion object {
        private const val RC_SIGN_IN = 1
        private const val TAG = "Login"
        fun createIntent(context: Context): Intent = Intent(context, LoginActivity::class.java)
    }
}
