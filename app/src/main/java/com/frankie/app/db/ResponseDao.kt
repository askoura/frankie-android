package com.frankie.app.db

import androidx.room.Dao
import androidx.room.Insert
import androidx.room.OnConflictStrategy.Companion.REPLACE
import androidx.room.Query
import androidx.room.Transaction
import com.frankie.app.db.model.Response
import com.frankie.expressionmanager.model.NavigationIndex
import com.frankie.expressionmanager.model.ResponseEvent
import java.time.LocalDateTime


@Dao
interface ResponseDao {

    @Query("SELECT * FROM response WHERE id == :id LIMIT 1")
    suspend fun get(id: String): Response

    @Insert(onConflict = REPLACE)
    suspend fun insert(response: Response)

    @Query("DELETE FROM response WHERE surveyId = :surveyId")
    suspend fun deleteBySurveyId(surveyId: String)

    @Query("DELETE FROM response WHERE id = :responseId")
    suspend fun deleteById(responseId: String)

    @Query("UPDATE response SET is_synced = 1 WHERE id == :id")
    suspend fun setSynced(id: String)

    @Query(
        "UPDATE response SET " +
            "response_values = :values," +
            "events = :events," +
            "startDate = :startDate," +
            "submitDate = :submitDate," +
            "lang = :lang," +
            " navigation_index = :navigationIndex WHERE id == :id"
    )
    suspend fun update(
        values: Map<String, Any>,
        lang: String,
        startDate: LocalDateTime,
        submitDate: LocalDateTime?,
        events: List<ResponseEvent>,
        navigationIndex: NavigationIndex,
        id: String
    )

    @Query("SELECT * FROM response WHERE surveyId = :surveyId")
    suspend fun getAllByUserAndSurvey(surveyId: String): List<Response>

    @Query("SELECT * FROM response WHERE  surveyId = :surveyId LIMIT 10 OFFSET (:page*:perPage)")
    suspend fun getByUserAndSurvey(surveyId: String, page: Int, perPage: Int): List<Response>

    @Transaction
    suspend fun addEvent(responseId: String, event: ResponseEvent) {
        val response = get(responseId)
        val newEvents = response.events.toMutableList().apply {
            add(event)
        }
        update(
            id = responseId,
            values = response.values,
            lang = response.lang,
            startDate = response.startDate,
            submitDate = response.submitDate,
            navigationIndex = response.navigationIndex,
            events = newEvents
        )
    }


    @Query("SELECT COUNT(*) FROM response WHERE surveyId = :surveyId")
    suspend fun countByUserAndSurvey(surveyId: String): Int

    @Query("SELECT COUNT(*) FROM response WHERE surveyId = :surveyId AND submitDate IS NOT NULL")
    suspend fun countCompleteByUserAndSurvey(surveyId: String): Int

    @Query("SELECT COUNT(*) FROM response WHERE surveyId = :surveyId AND is_synced = 0 AND submitDate IS NOT NULL")
    suspend fun countUnsyncedByUserAndSurvey(surveyId: String): Int

    @Query("UPDATE response SET is_synced = 1 WHERE id = :responseId")
    suspend fun markResponseAsSynced(responseId: String)
}
