package com.frankie.app.ui.common

import java.time.LocalDateTime
import java.time.format.DateTimeFormatter

fun LocalDateTime.toFormattedString(): String {
    val formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm")
    return format(formatter)
}