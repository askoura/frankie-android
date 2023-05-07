package com.frankie.app.db.survey

import androidx.room.Dao
import androidx.room.Delete
import androidx.room.Insert
import androidx.room.OnConflictStrategy
import androidx.room.Query
import androidx.room.Update

@Dao
interface SurveyDataDao {
    @Insert(onConflict = OnConflictStrategy.REPLACE)
    suspend fun insert(surveyDataEntity: SurveyDataEntity)

    @Insert(onConflict = OnConflictStrategy.REPLACE)
    suspend fun insertAll(surveyDataEntityList: List<SurveyDataEntity>)

    @Update
    suspend fun update(surveyDataEntity: SurveyDataEntity)

    @Delete
    suspend fun delete(surveyDataEntity: SurveyDataEntity)

    @Query("SELECT * FROM survey_data_table")
    suspend fun getAllSurveyData(): List<SurveyDataEntity>

    @Query("SELECT * FROM survey_data_table WHERE id = :surveyDataId")
    suspend fun getSurveyDataById(surveyDataId: String): SurveyDataEntity?

}
