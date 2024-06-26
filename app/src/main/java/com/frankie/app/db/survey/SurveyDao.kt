package com.frankie.app.db.survey

import androidx.room.Dao
import androidx.room.Insert
import androidx.room.OnConflictStrategy
import androidx.room.Query
import androidx.room.Update

@Dao
interface SurveyDao {
    @Insert(onConflict = OnConflictStrategy.REPLACE)
    suspend fun insert(surveyDataEntity: SurveyDataEntity)

    @Update
    suspend fun update(surveyDataEntity: SurveyDataEntity)

    @Insert(onConflict = OnConflictStrategy.REPLACE)
    suspend fun insertAll(surveyDataEntityList: List<SurveyDataEntity>)

    @Query("SELECT * FROM survey_data_table WHERE id = :surveyDataId")
    suspend fun getSurveyDataById(surveyDataId: String): SurveyDataEntity?

    @Query("SELECT * FROM survey_data_table")
    suspend fun getAllSurveyData(): List<SurveyDataEntity>

    @Query("UPDATE survey_data_table SET fileQuestions = :filesQuestions WHERE id == :id")
    suspend fun setFileQuestions(id: String, filesQuestions: List<String>)

    @Query("DELETE FROM survey_data_table WHERE id = :surveyId")
    suspend fun deleteById(surveyId: String)

}
