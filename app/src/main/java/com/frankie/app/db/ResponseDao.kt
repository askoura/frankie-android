package com.frankie.app.db

import androidx.room.Dao
import androidx.room.Insert
import androidx.room.OnConflictStrategy.Companion.REPLACE
import androidx.room.Query
import androidx.room.TypeConverters
import com.frankie.app.db.model.Response
import com.frankie.expressionmanager.model.NavigationIndex
import com.frankie.expressionmanager.model.ResponseEvent
import com.frankie.expressionmanager.model.SurveyLang


@Dao
interface ResponseDao {

    @Query("SELECT * FROM response WHERE id == :id LIMIT 1")
    suspend fun get(id: String): Response

    @Insert(onConflict = REPLACE)
    suspend fun insert(response: Response)

    @Query(
        "UPDATE response SET response_values = :values,events = :events, lang = :lang," +
                  " navigation_index = :navigationIndex WHERE id == :id"
    )
    @TypeConverters(
        JSONOConverter::class,
        SurveyLangConverter::class,
        NavigationIndexConverter::class,
        ResponseEventListConverter::class
    )
    suspend fun update(
        values: Map<String, Any>,
        lang: SurveyLang,
        events: List<ResponseEvent>,
        navigationIndex: NavigationIndex,
        id: String
    )
}
