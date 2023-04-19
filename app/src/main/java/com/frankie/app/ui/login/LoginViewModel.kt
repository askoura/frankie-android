package com.frankie.app.ui.login

import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import com.frankie.app.business.login.LoginInteractor
import com.frankie.app.ui.common.error.ErrorProcessor
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.asStateFlow
import kotlinx.coroutines.launch

class LoginViewModel(private val loginInteractor: LoginInteractor, errorProcessor: ErrorProcessor) : ViewModel(), ErrorProcessor by errorProcessor {

    private val _loginState = MutableStateFlow(LoginState())
    val loginState = _loginState.asStateFlow()

    fun login(email: String, password: String) {
        viewModelScope.launch {
            _loginState.value = LoginState(isLoading = true)
            loginInteractor.login(email, password).collect { result ->
                if (result.isSuccess) {
                    _loginState.value = LoginState(isLoggedIn = true, isLoading = false)
                } else {
                    _loginState.value = LoginState(isLoading = false)
                    processError(result.exceptionOrNull()!!)
                }
            }
        }
    }

    data class LoginState(
            val isLoading: Boolean = false,
            val isLoggedIn: Boolean = false
    )
}