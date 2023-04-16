package com.frankie.app.business

import retrofit2.HttpException
import retrofit2.Response

fun <T> Response<T>.getResult(): Result<T> {
    return if (isSuccessful) {
        Result.success(body()!!)
    } else {
        Result.failure(HttpException(this))
    }
}

