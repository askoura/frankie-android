package com.frankie.app.ui.common

import android.content.Context
import java.io.File

object FileUtils {

    const val VALIDATION_JSON_FILENAME = "validation.json"

    private fun getTargetFile(context: Context, fileName: String, surveyId: String, fileType: FileType): File {
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

    enum class FileType(private val folderName: String) {
        RESOURCES("resources"),
        DESIGN("design"),
        RESPONSES("responses");

        override fun toString(): String {
            return folderName
        }
    }
}