package com.frankie.app.ui.common.error

import android.app.Activity
import android.content.Context
import androidx.appcompat.app.AlertDialog
import com.frankie.app.business.login.LogoutUseCase
import com.frankie.app.ui.login.LoginActivity

interface ErrorDisplayManager {
    fun displayError(processedError: ProcessedError)
}

class ErrorDisplayManagerImpl(private val context: Context, private val logoutUseCase: LogoutUseCase) : ErrorDisplayManager {
    private var dialog: AlertDialog? = null

    override fun displayError(processedError: ProcessedError) {
        dialog?.let {
            if (it.isShowing) {
                it.dismiss()
            }
        }
        val isCancelable = processedError !is ProcessedError.AuthError
        dialog = AlertDialog.Builder(context).apply {
            setTitle(processedError.titleRes)
            setMessage(processedError.messageRes)
            setPositiveButton(android.R.string.ok) { dialog, _ ->
                logoutUseCase()
                dialog.dismiss()
                context.startActivity(LoginActivity.createIntent(context))
                (context as? Activity)?.finish()
            }
            setCancelable(isCancelable)
        }.show()
    }
}