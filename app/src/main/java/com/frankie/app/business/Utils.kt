package com.frankie.app.business

import retrofit2.HttpException
import retrofit2.Response
import java.time.LocalDateTime
import java.time.ZoneId
import java.time.ZoneOffset
import kotlin.math.roundToInt

fun <T> Response<T>.getResult(): Result<T> {
    return if (isSuccessful) {
        Result.success(body()!!)
    } else {
        Result.failure(HttpException(this))
    }
}

fun LocalDateTime.fromUtc(): LocalDateTime {
    return this.atZone(ZoneOffset.UTC)
        .withZoneSameInstant(ZoneId.systemDefault())
        .toLocalDateTime();
}

fun formatBytes(bytes: Int): FormattedBytes {
    val kilobyte = 1024
    val megabyte = kilobyte * 1024

    return when {
        bytes < megabyte -> FormattedBytes(bytes.toFloat() / kilobyte, ByteSize.KILO)
        else -> FormattedBytes(bytes.toFloat() / megabyte, ByteSize.MEGA)
    }
}

data class FormattedBytes(val value: Float, val byteSize: ByteSize)

enum class ByteSize {
    KILO, MEGA
}

