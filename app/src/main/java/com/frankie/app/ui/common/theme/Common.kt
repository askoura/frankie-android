package com.frankie.app.ui.common.theme

import androidx.annotation.StringRes
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.automirrored.filled.ArrowBack
import androidx.compose.material3.Button
import androidx.compose.material3.ExperimentalMaterial3Api
import androidx.compose.material3.Icon
import androidx.compose.material3.IconButton
import androidx.compose.material3.Text
import androidx.compose.material3.TopAppBar
import androidx.compose.material3.TopAppBarColors
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.res.stringResource
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import com.frankie.app.R

@Composable
fun BackButton(onBackPressed: () -> Unit) {
    IconButton(onClick = onBackPressed) {
        Icon(
            imageVector = Icons.AutoMirrored.Filled.ArrowBack,
            contentDescription = stringResource(id = R.string.back)
        )
    }
}

@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun FrankieTopBar(title: String, onBackPressed: () -> Unit) {
    TopAppBar(title = {
        Text(text = title)
    }, navigationIcon = {
        BackButton(onBackPressed)
    }, colors = TopAppBarColors(
        containerColor = Color.Primary,
        scrolledContainerColor = Color.Primary,
        navigationIconContentColor = Color.White,
        titleContentColor = Color.White,
        actionIconContentColor = Color.White
    )
    )
}

@Composable
fun PrimaryActionButton(
    modifier: Modifier = Modifier,
    @StringRes textRes: Int,
    enabled: Boolean = true,
    onClick: () -> Unit
) {
    Button(
        modifier = modifier,
        onClick = onClick,
        enabled = enabled,
        shape = RoundedCornerShape(4.dp)
    ) {
        Text(
            text = stringResource(id = textRes),
            fontSize = 24.sp
        )
    }
}
