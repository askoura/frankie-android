package com.frankie.app.ui.common.error

import androidx.annotation.DrawableRes
import androidx.annotation.StringRes
import com.frankie.app.R
import com.frankie.app.ui.common.ConnectivityChecker
import kotlinx.coroutines.flow.MutableSharedFlow
import kotlinx.coroutines.flow.SharedFlow
import kotlinx.coroutines.flow.asSharedFlow
import retrofit2.HttpException
import java.io.InterruptedIOException
import java.net.ConnectException
import java.net.NoRouteToHostException
import java.net.SocketTimeoutException
import java.net.UnknownHostException
import javax.net.ssl.SSLException

interface ErrorProcessor {
    suspend fun processError(throwable: Throwable)
    suspend fun processLoginError(throwable: Throwable)
    val errors: SharedFlow<ProcessedError>
}

class ErrorProcessorImpl(private val connectivityChecker: ConnectivityChecker) : ErrorProcessor {

    private val _errors = MutableSharedFlow<ProcessedError>()
    override val errors = _errors.asSharedFlow()

    // TODO: check if no internet connection
    override suspend fun processError(throwable: Throwable) {
        throwable.printStackTrace()
        val processedError = when (throwable) {
            is HttpException -> {
                processHttpException(throwable)
            }
            is UnknownHostException,
            is SocketTimeoutException,
            is ConnectException,
            is InterruptedIOException,
            is NoRouteToHostException,
            is SSLException -> {
                if (connectivityChecker.networkAvailable) {
                    ProcessedError.Timeout
                } else {
                    ProcessedError.NetworkError
                }
            }

            else -> {
                ProcessedError.GeneralError
            }
        }
        _errors.emit(processedError)
    }

    override suspend fun processLoginError(throwable: Throwable) {
        return if (throwable is HttpException && throwable.code() in listOf(401, 404)) {
            throwable.printStackTrace()
            _errors.emit(ProcessedError.LoginError)
        } else {
            processError(throwable)
        }
    }

    // TODO proper error handling per code
    private fun processHttpException(throwable: HttpException): ProcessedError {
        return when (throwable.code()) {
            401 -> ProcessedError.AuthError
            404 -> ProcessedError.NotFound
            else -> ProcessedError.GeneralError
        }
    }

}

sealed class ProcessedError(val titleRes: Int, val messageRes: Int) {
    object AuthError : ProcessedError(R.string.error_auth_title, R.string.error_auth_description)
    object NotFound : ProcessedError(R.string.error_general_title, R.string.not_found_description)
    object GeneralError : ProcessedError(R.string.error_general_title, R.string.error_general_description)
    object NetworkError : ProcessedError(R.string.error_network_title, R.string.error_network_description)
    object Timeout : ProcessedError(R.string.error_timeout_title, R.string.error_timeout_description)
    object LoginError : ProcessedError(R.string.error_login_title, R.string.error_login_description)
}