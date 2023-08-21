package com.frankie.app.db.permission

import androidx.room.Dao
import androidx.room.Delete
import androidx.room.Insert
import androidx.room.OnConflictStrategy
import androidx.room.Query
import androidx.room.Transaction

@Dao
interface PermissionDao {
    @Query("SELECT * FROM permissions")
    suspend fun getAllPermissions(): List<PermissionEntity>

    @Query("SELECT * FROM permissions WHERE userId = :userId")
    suspend fun getPermissionsForUser(userId: Long): List<PermissionEntity>

    @Query("SELECT * FROM permissions WHERE surveyId = :surveyId")
    suspend fun getPermissionsForItem(surveyId: Long): List<PermissionEntity>

    @Insert(onConflict = OnConflictStrategy.REPLACE)
    suspend fun insert(permission: PermissionEntity)

    @Insert(onConflict = OnConflictStrategy.REPLACE)
    @Transaction
    suspend fun insertMultiple(permissions: List<PermissionEntity>)

    @Delete
    suspend fun deletePermission(permission: PermissionEntity)

    @Query("DELETE FROM permissions WHERE userId = :userId and surveyId NOT IN (:surveyIdList)")
    suspend fun deletePermissionsForUserNotInList(userId: String, surveyIdList: List<String>)
}
