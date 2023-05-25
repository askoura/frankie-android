;
(function () {
  System.register(['./index-legacy-4fb9792c.js'], function (exports, module) {
    'use strict';

    var instance;
    return {
      setters: [module => {
        instance = module.G;
      }],
      execute: function () {
        class UserService {
          async getCountByRole() {
            const response = await instance.get(`/user/count_by_role`);
            return response.data;
          }
          async getAllUsers() {
            const response = await instance.get(`/user/all`);
            return response.data;
          }
          async getUser({
            userId
          }) {
            const response = await instance.get(`/user/${userId}`);
            return response.data;
          }
          async deleteUser({
            userId
          }) {
            const response = await instance.delete(`/user/${userId}`);
            return response.data;
          }
          async createUser(data) {
            const response = await instance.post(`/user/create`, data);
            return response.data;
          }
          async updateUser({
            userId,
            data
          }) {
            const response = await instance.put(`/user/${userId}`, data);
            return response.data;
          }
          async updateUserProfile(data) {
            const response = await instance.put(`/user/profile`, data);
            return response.data;
          }
        }
        const UserService$1 = exports('U', new UserService());
      }
    };
  });
})();
