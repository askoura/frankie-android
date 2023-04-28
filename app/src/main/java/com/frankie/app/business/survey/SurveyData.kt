package com.frankie.app.business.survey

import com.frankie.app.api.survey.Language
import com.frankie.app.api.survey.Survey

data class SurveyData(
        val id: String,
        val creationDate: String,
        val lastModified: String,
        val name: String,
        val defaultLanguage: Language,
        val additionalLanguages: List<Language>,
        val status: String,
        val usage: String,
        val quota: Int,
        val navigationMode: String
) {
    companion object {
        fun fromSurvey(survey: Survey): SurveyData {
            return SurveyData(
                    survey.id,
                    survey.creationDate,
                    survey.lastModified,
                    survey.name,
                    survey.defaultLanguage,
                    survey.additionalLanguages,
                    survey.status,
                    survey.usage,
                    survey.quota,
                    survey.navigationMode
            )
        }
    }
}