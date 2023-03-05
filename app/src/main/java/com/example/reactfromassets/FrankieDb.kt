package com.example.reactfromassets

import android.content.Context
import androidx.room.Database
import androidx.room.Room
import androidx.room.RoomDatabase
import com.example.reactfromassets.db.ResponseDao
import com.example.reactfromassets.db.model.Response


@Database(
    entities = [
        Response::class
    ],
    version = 1,
    exportSchema = false
)
abstract class FrankieDb : RoomDatabase() {
    abstract fun responseDao(): ResponseDao


    companion object {

        @Volatile
        private var INSTANCE: FrankieDb? = null

        fun getDatabase(context: Context): FrankieDb {
            return INSTANCE ?: synchronized(this) {
                val instance = Room.databaseBuilder(
                    context.applicationContext,
                    FrankieDb::class.java,
                    "food_item_database"
                ).build()

                INSTANCE = instance

                // return instance
                instance
            }
        }
    }
}