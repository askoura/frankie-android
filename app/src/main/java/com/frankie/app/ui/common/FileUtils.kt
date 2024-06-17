package com.frankie.app.ui.common

import android.content.Context
import android.webkit.MimeTypeMap
import com.fasterxml.jackson.module.kotlin.jacksonTypeRef
import com.frankie.expressionmanager.model.jacksonKtMapper
import com.frankie.expressionmanager.usecase.ValidationJsonOutput
import java.io.File
import java.net.URLDecoder
import java.net.URLEncoder


object FileUtils {

    private const val VALIDATION_JSON_FILENAME = "validation.json"

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
     fun deleteSurveyDirectory(
        context: Context,
        surveyId: String,
    ): Boolean {
        val folder = File(context.filesDir, surveyId)
        return  folder.exists() && folder.isDirectory && folder.deleteRecursively()
    }

    private fun encode(fileName: String) =
        URLEncoder.encode(URLDecoder.decode(fileName, "UTF-8"), "UTF-8")

    fun getResourceFile(context: Context, fileName: String, surveyId: String): File {
        return getTargetFile(
            context,
            encode(fileName),
            surveyId,
            FileType.RESOURCES
        )
    }

    fun getResponseFile(context: Context, fileName: String, surveyId: String): File {
        return getTargetFile(
            context,
            encode(fileName),
            surveyId,
            FileType.RESPONSES
        )
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

    fun getMimeType(fileName: String): String? {
        val extension = MimeTypeMap.getFileExtensionFromUrl(fileName)
        return MimeTypeMap.getSingleton().getMimeTypeFromExtension(extension)
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