package com.frankie.app.db

import androidx.room.Dao
import androidx.room.Delete
import androidx.room.Insert
import androidx.room.OnConflictStrategy.Companion.REPLACE
import androidx.room.Query
import androidx.room.TypeConverters
import com.frankie.app.db.model.Response
import com.frankie.expressionmanager.model.NavigationIndex
import com.frankie.expressionmanager.model.ResponseEvent
import com.frankie.expressionmanager.model.SurveyLang
import java.time.LocalDateTime


@Dao
interface ResponseDao {

    @Query("SELECT * FROM response WHERE id == :id LIMIT 1")
    suspend fun get(id: String): Response

    @Insert(onConflict = REPLACE)
    suspend fun insert(response: Response)

    @Query("DELETE FROM response WHERE id = :responseId")
    suspend fun deleteById(responseId: String)

    @Query(
        "UPDATE response SET " +
                  "response_values = :values," +
                  "events = :events," +
                  "startDate = :startDate," +
                  "submitDate = :submitDate," +
                  "lang = :lang," +
                  " navigation_index = :navigationIndex WHERE id == :id"
    )
    @TypeConverters(
        JSONOConverter::class,
        SurveyLangConverter::class,
        NavigationIndexConverter::class,
        LocalDateConverter::class,
        ResponseEventListConverter::class
    )
    suspend fun update(
        values: Map<String, Any>,
        lang: SurveyLang,
        startDate: LocalDateTime,
        submitDate: LocalDateTime?,
        events: List<ResponseEvent>,
        navigationIndex: NavigationIndex,
        id: String
    )

    @Query("SELECT * FROM response WHERE userId = :userId AND surveyId = :surveyId")
    suspend fun getAllByUserAndSurvey(userId: String, surveyId: String): List<Response>


    @TypeConverters(
        JSONOConverter::class,
        SurveyLangConverter::class,
        LocalDateConverter::class,
        NavigationIndexConverter::class,
        ResponseEventListConverter::class
    )
    @Query("SELECT COUNT(*) FROM response WHERE userId = :userId AND surveyId = :surveyId")
    suspend fun countByUserAndSurvey(userId: String, surveyId: String): Int
}
