;
(function () {
  System.register(['./index-legacy-13317357.js'], function (exports, module) {
    'use strict';

    var TokenService;
    return {
      setters: [function (module) {
        TokenService = module.T;
      }],
      execute: function execute() {
        var ROLES = exports('R', {
          SUPER_ADMIN: "super_admin",
          SURVEY_ADMIN: "survey_admin",
          ANALYST: "analyst",
          SURVEYOR: "surveyor",
          SURVEYOR_AUDITOR: "surveyor_auditor"
        });
        var isSurveyAdmin = exports('i', function () {
          var roles = TokenService.getUser().roles;
          return roles.indexOf(ROLES.SUPER_ADMIN) != -1 || roles.indexOf(ROLES.SURVEY_ADMIN) != -1;
        });
        var isSurveyor = exports('a', function (user) {
          var roles = user.roles;
          return roles.indexOf(ROLES.SUPER_ADMIN) != -1 || roles.indexOf(ROLES.SURVEYOR) != -1;
        });
      }
    };
  });
})();
