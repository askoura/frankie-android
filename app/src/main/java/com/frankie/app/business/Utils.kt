package com.frankie.app.business

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

