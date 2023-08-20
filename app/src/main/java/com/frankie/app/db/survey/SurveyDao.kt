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

    @Query("SELECT survey_data_table.* FROM survey_data_table join permissions on permissions.surveyId = survey_data_table.id AND permissions.userId = :userId")
    suspend fun getAllSurveyData(userId:String): List<SurveyDataEntity>


    @Query("UPDATE survey_data_table SET fileQuestions = :filesQuestions WHERE id == :id")
    suspend fun setFileQuestions(id: String, filesQuestions: List<String>)

}
