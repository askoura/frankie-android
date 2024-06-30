package com.frankie.app.ui.common

import androidx.compose.runtime.Composable
import androidx.compose.ui.res.pluralStringResource
import androidx.compose.ui.res.stringResource
import com.frankie.app.R
import java.time.LocalDateTime
import java.time.format.DateTimeFormatter
import java.time.temporal.ChronoUnit

fun LocalDateTime.toFormattedString(): String {
    val formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm")
    return format(formatter)
}

@Composable
fun LocalDateTime.toElapsedTime(): String {
    val now = LocalDateTime.now()

    if (now.isAfter(this)) {
        // date is in past
        val elapsedTime = ElapsedTimeData(now, this)

        return when {
            elapsedTime.years > 0 -> pluralStringResource(
                R.plurals.time_interval_years_ago,
                elapsedTime.years.toInt(),
                elapsedTime.years
            )

            elapsedTime.months > 0 -> pluralStringResource(
                R.plurals.time_interval_months_ago,
                elapsedTime.months.toInt(),
                elapsedTime.months
            )

            elapsedTime.weeks > 0 -> pluralStringResource(
                R.plurals.time_interval_weeks_ago,
                elapsedTime.weeks.toInt(),
                elapsedTime.weeks
            )

            elapsedTime.days > 0 -> pluralStringResource(
                R.plurals.time_interval_days_ago,
                elapsedTime.days.toInt(),
                elapsedTime.days
            )

            elapsedTime.hours > 0 -> pluralStringResource(
                R.plurals.time_interval_hours_ago,
                elapsedTime.hours.toInt(),
                elapsedTime.hours
            )

            elapsedTime.minutes > 0 -> pluralStringResource(
                R.plurals.time_interval_minutes_ago,
                elapsedTime.minutes.toInt(),
                elapsedTime.minutes
            )

            else -> stringResource(id = R.string.time_interval_just_now)
        }

    } else {
        // date in the future
        val elapsedTime = ElapsedTimeData(this, now)
        return when {
            elapsedTime.years > 0 -> pluralStringResource(
                R.plurals.time_interval_in_years,
                elapsedTime.years.toInt(),
                elapsedTime.years
            )

            elapsedTime.months > 0 -> pluralStringResource(
                R.plurals.time_interval_in_months,
                elapsedTime.months.toInt(),
                elapsedTime.months
            )

            elapsedTime.weeks > 0 -> pluralStringResource(
                R.plurals.time_interval_in_weeks,
                elapsedTime.weeks.toInt(),
                elapsedTime.weeks
            )

            elapsedTime.days > 0 -> pluralStringResource(
                R.plurals.time_interval_in_days,
                elapsedTime.days.toInt(),
                elapsedTime.days
            )

            else -> stringResource(id = R.string.today)
        }
    }
}

private class ElapsedTimeData(localDateTimeNow: LocalDateTime, localDateTime: LocalDateTime) {
    val years: Long
    val months: Long
    val weeks: Long
    val days: Long
    val hours: Long
    val minutes: Long
    val seconds: Long

    init {
        years = ChronoUnit.YEARS.between(localDateTime, localDateTimeNow)
        months = ChronoUnit.MONTHS.between(localDateTime, localDateTimeNow)
        weeks = ChronoUnit.WEEKS.between(localDateTime, localDateTimeNow)
        days = ChronoUnit.DAYS.between(localDateTime, localDateTimeNow)
        hours = ChronoUnit.HOURS.between(localDateTime, localDateTimeNow)
        minutes = ChronoUnit.MINUTES.between(localDateTime, localDateTimeNow)
        seconds = ChronoUnit.SECONDS.between(localDateTime, localDateTimeNow)
    }
}