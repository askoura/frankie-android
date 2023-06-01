package com.frankie.app.ui.common

import android.content.Context
import com.fasterxml.jackson.module.kotlin.jacksonTypeRef
import com.frankie.expressionmanager.model.jacksonKtMapper
import com.frankie.expressionmanager.usecase.ValidationJsonOutput
import java.io.File
import java.net.URLDecoder
import java.net.URLEncoder
import java.nio.charset.StandardCharsets.UTF_8

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

    private fun encode(fileName: String) =
        URLEncoder.encode(URLDecoder.decode(fileName, UTF_8.toString()), UTF_8.toString())

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

    enum class FileType(private val folderName: String) {
        RESOURCES("resources"),
        DESIGN("design"),
        RESPONSES("responses");

        override fun toString(): String {
            return folderName
        }
    }
}