;
(function () {
  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
  System.register(['./index-legacy-T3s18jo3.js'], function (exports, module) {
    'use strict';

    var instance;
    return {
      setters: [module => {
        instance = module.v;
      }],
      execute: function execute() {
        class UserService {
          getCountByRole() {
            return _asyncToGenerator(function* () {
              const response = yield instance.get(`/user/count_by_role`);
              return response.data;
            })();
          }
          getAllUsers() {
            return _asyncToGenerator(function* () {
              const response = yield instance.get(`/user/all`);
              return response.data;
            })();
          }
          getUser({
            userId
          }) {
            return _asyncToGenerator(function* () {
              const response = yield instance.get(`/user/${userId}`);
              return response.data;
            })();
          }
          deleteUser({
            userId
          }) {
            return _asyncToGenerator(function* () {
              const response = yield instance.delete(`/user/${userId}`);
              return response.data;
            })();
          }
          createUser(data) {
            return _asyncToGenerator(function* () {
              const response = yield instance.post(`/user/create`, data);
              return response.data;
            })();
          }
          updateUser({
            userId,
            data
          }) {
            return _asyncToGenerator(function* () {
              const response = yield instance.put(`/user/${userId}`, data);
              return response.data;
            })();
          }
          updateUserProfile(data) {
            return _asyncToGenerator(function* () {
              const response = yield instance.put(`/user/profile`, data);
              return response.data;
            })();
          }
        }
        const UserService$1 = exports('U', new UserService());
      }
    };
  });
})();
//# sourceMappingURL=UserService-legacy-idayBd14.js.map
