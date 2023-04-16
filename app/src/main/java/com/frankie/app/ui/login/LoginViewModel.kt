package com.frankie.app.ui.login

import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import com.frankie.app.business.login.LoginInteractor
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.asStateFlow
import kotlinx.coroutines.launch

class LoginViewModel(private val loginInteractor: LoginInteractor) : ViewModel() {

    private val _loginState = MutableStateFlow(LoginState())
    val loginState = _loginState.asStateFlow()

    fun login(email: String, password: String) {
        viewModelScope.launch {
            loginInteractor.login(email, password).collect { result ->
                if (result.isSuccess) {
                    _loginState.value = LoginState(isLoggedIn = true)
                } else {
                    _loginState.value = LoginState(isError = true)
                }
            }
        }
    }

    data class LoginState(
            val isLoading: Boolean = false,
            val isLoggedIn: Boolean = false,
            val isError: Boolean = false
    )
}