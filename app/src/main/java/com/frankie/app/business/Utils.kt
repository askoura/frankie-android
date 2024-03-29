package com.frankie.app.business

import android.content.Intent
import android.os.Build.VERSION.SDK_INT
import android.os.Bundle
import android.os.Parcelable
import retrofit2.HttpException
import retrofit2.Response
import java.time.LocalDateTime
import java.time.ZoneId
import java.time.ZoneOffset

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

fun LocalDateTime.toUtc(): LocalDateTime {
    return this.atZone(ZoneId.systemDefault())
        .withZoneSameInstant(ZoneOffset.UTC)
        .toLocalDateTime();
}

inline fun <reified T : Parcelable> Intent.parcelable(key: String): T? = when {
    SDK_INT >= 33 -> getParcelableExtra(key, T::class.java)
    else -> @Suppress("DEPRECATION") getParcelableExtra(key) as? T
}

inline fun <reified T : Parcelable> Bundle.parcelable(key: String): T? = when {
    SDK_INT >= 33 -> getParcelable(key, T::class.java)
    else -> @Suppress("DEPRECATION") getParcelable(key) as? T
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

