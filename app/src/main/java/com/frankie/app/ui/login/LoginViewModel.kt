package com.frankie.app.ui.login

import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import com.frankie.app.api.auth.GoogleSignInInput
import com.frankie.app.business.auth.LoginInteractor
import com.frankie.app.ui.common.InputUtils
import com.frankie.app.ui.common.error.ErrorProcessor
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.asStateFlow
import kotlinx.coroutines.flow.update
import kotlinx.coroutines.launch

class LoginViewModel(private val loginInteractor: LoginInteractor, errorProcessor: ErrorProcessor) :
    ViewModel(), ErrorProcessor by errorProcessor {

    private val _loginState = MutableStateFlow(LoginState())
    val loginState = _loginState.asStateFlow()

    fun login(email: String, password: String) {
        viewModelScope.launch {
            _loginState.value = LoginState(isLoading = true)
            val trimmedEmail = email.trim()
            val trimmedPsw = password.trim()
            val isPswValid = InputUtils.isValidPassword(trimmedPsw)
            val isEmailValid = InputUtils.isValidEmail(trimmedEmail)
            if (isEmailValid && isPswValid) {
                loginInteractor.login(trimmedEmail, trimmedPsw).collect { result ->
                    if (result.isSuccess) {
                        _loginState.update { LoginState(isLoggedIn = true, isLoading = false) }
                    } else {
                        _loginState.update { LoginState(isLoading = false) }
                        processLoginError(result.exceptionOrNull()!!)
                    }
                }
            } else {
                _loginState.update {
                    LoginState(
                        emailValidationError = !isEmailValid,
                        pswValidationError = !isPswValid
                    )
                }
            }
        }
    }

    fun googleSignIn(idToken: String, clientId: String) {
        viewModelScope.launch {
            _loginState.value = LoginState(isLoading = true)
            loginInteractor.googleSignIn(GoogleSignInInput(idToken, clientId))
                .collect { result ->
                    if (result.isSuccess) {
                        _loginState.update { LoginState(isLoggedIn = true, isLoading = false) }
                    } else {
                        _loginState.update { LoginState(isLoading = false) }
                        processLoginError(result.exceptionOrNull()!!)
                    }
                }

        }
    }

    data class LoginState(
        val isLoading: Boolean = false,
        val isLoggedIn: Boolean = false,
        val pswValidationError: Boolean = false,
        val emailValidationError: Boolean = false
    )
}