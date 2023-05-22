package com.frankie.app.ui.common

import android.content.Context
import com.fasterxml.jackson.module.kotlin.jacksonTypeRef
import com.frankie.expressionmanager.model.jacksonKtMapper
import com.frankie.expressionmanager.usecase.ValidationJsonOutput
import java.io.File

object FileUtils {

    const val VALIDATION_JSON_FILENAME = "validation.json"

    private fun getTargetFile(
        context: Context,
        fileName: String,
        surveyId: String,
        fileType: FileType
    ): File {
        val folder = File(context.filesDir, "${surveyId}/$fileType")
        if (!folder.exists()) {
            folder.mkdirs()
        }
        return File(folder, fileName)
    }

    fun getResourceFile(context: Context, fileName: String, surveyId: String): File {
        return getTargetFile(context, fileName, surveyId, FileType.RESOURCES)
    }

    fun getValidationJsonFile(context: Context, surveyId: String): File {
        return getTargetFile(context, VALIDATION_JSON_FILENAME, surveyId, FileType.DESIGN)
    }

    fun getValidationJson(context: Context, surveyId: String): ValidationJsonOutput? {
        return jacksonKtMapper.readValue(
            getValidationJsonFile(context, surveyId).bufferedReader().use {
                it.readText()
            }, jacksonTypeRef<ValidationJsonOutput>()
        )
    }

    enum class FileType(private val folderName: String) {
        RESOURCES("resources"),
        DESIGN("design"),
        RESPONSES("responses");

        override fun toString(): String {
            return folderName
        }
    }
}