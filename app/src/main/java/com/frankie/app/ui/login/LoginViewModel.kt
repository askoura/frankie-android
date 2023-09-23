package com.frankie.app.ui.login

import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import com.frankie.app.api.auth.GoogleSignInInput
import com.frankie.app.business.auth.LoginInteractor
import com.frankie.app.ui.common.InputUtils
import com.frankie.app.ui.common.error.ErrorProcessor
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.asStateFlow
import kotlinx.coroutines.flow.update
import kotlinx.coroutines.launch

class LoginViewModel(private val loginInteractor: LoginInteractor, errorProcessor: ErrorProcessor) :
    ViewModel(), ErrorProcessor by errorProcessor {

    private val _loginState = MutableStateFlow(LoginState())
    val loginState = _loginState.asStateFlow()

    fun login(email: String, password: String) {
        viewModelScope.launch(Dispatchers.IO) {
            _loginState.value = LoginState(isLoading = true)
            val trimmedEmail = email.trim()
            val trimmedPsw = password.trim()
            val isPswValid = InputUtils.isValidPassword(trimmedPsw)
            val isEmailValid = InputUtils.isValidEmail(trimmedEmail)
            if (isEmailValid && isPswValid) {
                try {
                    val response = loginInteractor.login(trimmedEmail, trimmedPsw)
                    if (response.roles.any { role ->
                            listOf(
                                Roles.SUPER_ADMIN,
                                Roles.SURVEY_ADMIN,
                                Roles.SURVEYOR
                            ).map { it.name.lowercase() }.contains(role)
                        }
                    ) {
                        _loginState.update { LoginState(isLoggedIn = true, isLoading = false) }
                    } else {
                        roleNotSupported()
                        _loginState.update { LoginState(isLoading = false) }
                    }
                } catch (e: Exception) {
                    _loginState.update { LoginState(isLoading = false) }
                    processLoginError(e)

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
        viewModelScope.launch(Dispatchers.IO) {
            _loginState.value = LoginState(isLoading = true)
            try {
                loginInteractor.googleSignIn(GoogleSignInInput(idToken, clientId))
                _loginState.update { LoginState(isLoggedIn = true, isLoading = false) }
            } catch (e: Exception) {
                _loginState.update { LoginState(isLoading = false) }
                processLoginError(e)
            }
        }
    }

    data class LoginState(
        val isLoading: Boolean = false,
        val isLoggedIn: Boolean = false,
        val roleNotSupported: Boolean = false,
        val pswValidationError: Boolean = false,
        val emailValidationError: Boolean = false
    )
}

@Suppress("unused")
enum class Roles {
    SUPER_ADMIN, SURVEY_ADMIN, SURVEYOR, ANALYST;
}