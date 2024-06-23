package com.frankie.app.ui.common.theme

import androidx.compose.material3.MaterialTheme
import androidx.compose.runtime.Composable

@Composable
fun FrankieTheme(
    content: @Composable () -> Unit
) {
    MaterialTheme(
        colorScheme = MaterialTheme.colorScheme.copy(
            primary = Colors.Primary, secondary = Colors.Secondary,
            surfaceVariant = Colors.SurfaceVariant
        ),
        content = content
    )
}