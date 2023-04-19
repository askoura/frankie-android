package com.frankie.app.ui.common.error

import android.content.Context
import androidx.appcompat.app.AlertDialog

interface ErrorDisplayManager {
    fun displayError(processedError: ProcessedError)
}

class ErrorDisplayManagerImpl(private val context: Context) : ErrorDisplayManager {
    private var dialog: AlertDialog? = null

    override fun displayError(processedError: ProcessedError) {
        dialog?.let {
            if (it.isShowing) {
                it.dismiss()
            }
        }
        dialog = AlertDialog.Builder(context).apply {
            setTitle(processedError.titleRes)
            setMessage(processedError.messageRes)
            setPositiveButton(android.R.string.ok) { dialog, _ -> dialog.dismiss() }
            setCancelable(true)
        }.show()
    }
}