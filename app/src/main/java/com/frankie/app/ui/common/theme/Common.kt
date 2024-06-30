package com.frankie.app.ui.common.theme

import androidx.annotation.StringRes
import androidx.compose.foundation.BorderStroke
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.automirrored.filled.ArrowBack
import androidx.compose.material3.Button
import androidx.compose.material3.ButtonColors
import androidx.compose.material3.ExperimentalMaterial3Api
import androidx.compose.material3.Icon
import androidx.compose.material3.IconButton
import androidx.compose.material3.OutlinedButton
import androidx.compose.material3.Text
import androidx.compose.material3.TopAppBar
import androidx.compose.material3.TopAppBarColors
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.res.stringResource
import androidx.compose.ui.text.AnnotatedString
import androidx.compose.ui.text.buildAnnotatedString
import androidx.compose.ui.tooling.preview.Preview
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
        containerColor = Colors.Primary,
        scrolledContainerColor = Colors.Primary,
        navigationIconContentColor = Colors.White,
        titleContentColor = Colors.White,
        actionIconContentColor = Colors.White
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
        enabled = enabled
    ) {
        Text(
            text = stringResource(id = textRes),
            fontSize = 20.sp
        )
    }
}

@Composable
fun SecondaryActionButton(
    modifier: Modifier = Modifier,
    enabled: Boolean = true,
    text: AnnotatedString,
    onClick: () -> Unit
) {
    OutlinedButton(
        modifier = modifier,
        onClick = onClick,
        enabled = enabled,
        border = BorderStroke(1.dp, if (enabled) Colors.Primary else Colors.LightGray),
        colors = ButtonColors(Colors.White, Colors.Primary, Colors.White, Colors.LightGray)
    ) {
        Text(fontSize = 20.sp, text = text)
    }
}

@Preview(showBackground = true)
@Composable
fun PreviewSecondaryActionButtonEnabled() {
    FrankieTheme {
        SecondaryActionButton(text = buildAnnotatedString { append("test") }) {}
    }
}

@Preview(showBackground = true)
@Composable
fun PreviewSecondaryActionButtonDisabled() {
    FrankieTheme {
        SecondaryActionButton(enabled = false, text = buildAnnotatedString { append("test") }) {}
    }
}
