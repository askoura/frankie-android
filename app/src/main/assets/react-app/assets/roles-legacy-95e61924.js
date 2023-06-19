;
(function () {
  System.register(['./index-legacy-23e2ff21.js'], function (exports, module) {
    'use strict';

    var TokenService;
    return {
      setters: [module => {
        TokenService = module.T;
      }],
      execute: function () {
        const ROLES = exports('R', {
          SUPER_ADMIN: "super_admin",
          SURVEY_ADMIN: "survey_admin",
          SURVEYOR: "surveyor"
        });
        const isSurveyAdmin = exports('i', () => {
          const roles = TokenService.getUser().roles;
          return roles.indexOf(ROLES.SUPER_ADMIN) != -1 || roles.indexOf(ROLES.SURVEY_ADMIN) != -1;
        });
        const isSurveyor = exports('a', user => {
          const roles = user.roles;
          return roles.indexOf(ROLES.SUPER_ADMIN) != -1 || roles.indexOf(ROLES.SURVEYOR) != -1;
        });
      }
    };
  });
})();
