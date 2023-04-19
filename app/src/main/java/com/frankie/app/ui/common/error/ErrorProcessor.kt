package com.frankie.app.ui.common.error

import com.frankie.app.R
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
    val errors: SharedFlow<ProcessedError>
}

class ErrorProcessorImpl : ErrorProcessor {

    private val _errors = MutableSharedFlow<ProcessedError>()
    override val errors = _errors.asSharedFlow()

    // TODO: check if no internet connection
    override suspend fun processError(throwable: Throwable) {
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
                ProcessedError(R.string.error_general_title, R.string.error_general_description)
            }

            else -> {
                ProcessedError(R.string.error_general_title, R.string.error_general_description)
            }
        }
        _errors.emit(processedError)
    }

    // TODO proper error handling per code
    private fun processHttpException(throwable: HttpException): ProcessedError {
        return ProcessedError(R.string.error_general_title, R.string.error_general_description)
//        when(throwable.code()) {
//            401 -> {
//            }
//            404 -> {
//            }
//        }
    }

}

data class ProcessedError(val titleRes: Int, val messageRes: Int)