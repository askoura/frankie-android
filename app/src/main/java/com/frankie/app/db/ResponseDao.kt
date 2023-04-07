package com.frankie.app.db

import androidx.room.Dao
import androidx.room.Insert
import androidx.room.OnConflictStrategy.Companion.REPLACE
import androidx.room.Query
import androidx.room.TypeConverters
import com.frankie.app.db.model.Response
import com.frankie.expressionmanager.model.NavigationIndex
import com.frankie.expressionmanager.model.SurveyLang
import java.util.UUID


@Dao
interface ResponseDao {

    @Query("SELECT * FROM response WHERE id == :id LIMIT 1")
    suspend fun get(id: String): Response

    @Insert(onConflict = REPLACE)
    suspend fun insert(response: Response)

    @Query(
        "UPDATE response SET response_values = :values, lang = :lang," +
                  " navigation_index = :navigationIndex WHERE id == :id"
    )
    @TypeConverters(
        JSONOConverter::class,
        SurveyLangConverter::class,
        NavigationIndexConverter::class
    )
    suspend fun update(
        values: Map<String, Any>,
        lang: SurveyLang,
        navigationIndex: NavigationIndex,
        id: String
    )
}
