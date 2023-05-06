package com.frankie.app.api.survey

import com.fasterxml.jackson.annotation.JsonProperty
import com.fasterxml.jackson.databind.annotation.JsonDeserialize
import com.fasterxml.jackson.databind.annotation.JsonSerialize
import com.frankie.app.api.JsonNodeToStringSerializer
import com.frankie.app.api.StringToJsonNodeDeserializer

data class SurveyDesign(
        @JsonProperty("files") val files: List<FileData>,
        @JsonProperty("publishInfo") val publishInfo: PublishInfo,
        @JsonProperty("validationJsonOutput")
        @JsonSerialize(using = JsonNodeToStringSerializer::class)
        @JsonDeserialize(using = StringToJsonNodeDeserializer::class)
        val validationJsonOutput: String
)