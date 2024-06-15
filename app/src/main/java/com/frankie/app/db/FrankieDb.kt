package com.frankie.app.db

import android.content.Context
import androidx.room.Database
import androidx.room.Room
import androidx.room.RoomDatabase
import androidx.room.TypeConverters
import com.frankie.app.db.model.Response
import com.frankie.app.db.survey.SurveyDao
import com.frankie.app.db.survey.SurveyDataEntity


@Database(
    entities = [
        Response::class,
        SurveyDataEntity::class,
    ],
    version = 1,
    exportSchema = false
)
@TypeConverters(
    JSONOConverter::class,
    SurveyLangConverter::class,
    NavigationIndexConverter::class,
    LocalDateConverter::class,
    StringListConverter::class,
    ResponseEventListConverter::class
)
abstract class FrankieDb : RoomDatabase() {
    abstract fun responseDao(): ResponseDao
    abstract fun surveyDataDao(): SurveyDao
    companion object {

        @Volatile
        private var INSTANCE: FrankieDb? = null

        fun getDatabase(context: Context): FrankieDb {
            return INSTANCE ?: synchronized(this) {
                val instance = Room.databaseBuilder(
                    context.applicationContext,
                    FrankieDb::class.java,
                    "frankie_db"
                )
                    .build()

                INSTANCE = instance

                // return instance
                instance
            }
        }
    }
}

