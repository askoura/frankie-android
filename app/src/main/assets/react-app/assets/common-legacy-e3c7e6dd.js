;
(function () {
  System.register(['./index-legacy-23e2ff21.js'], function (exports, module) {
    'use strict';

    var FRONT_END_HOST, PROTOCOL, BACKEND_BASE_URL, TokenService;
    return {
      setters: [module => {
        FRONT_END_HOST = module.F;
        PROTOCOL = module.E;
        BACKEND_BASE_URL = module.bO;
        TokenService = module.T;
      }],
      execute: function () {
        exports('g', getFileFromPath);
        const hostnameSubdomain = exports('h', () => {
          const host = window.location.host;
          if (host == FRONT_END_HOST) {
            return "";
          } else {
            return host.replace("." + FRONT_END_HOST, "");
          }
        });
        const urlWithSubdomain = exports('u', subdomain => {
          return PROTOCOL + "://" + subdomain + "." + FRONT_END_HOST;
        });
        const buildResourceUrl = exports('b', fileName => {
          const surveyId = sessionStorage.getItem("surveyId");
          return `${BACKEND_BASE_URL}/survey/${surveyId}/resource/${fileName}`;
        });
        const sharingUrl = exports('s', (surveyId, preview, lang) => {
          let segment = "run-survey";
          if (preview) {
            segment = "preview-survey";
          }
          let searchParams = "";
          if (lang) {
            searchParams = `?lang=${lang}`;
          }
          return `${PROTOCOL}://${TokenService.getSubdomain()}.${FRONT_END_HOST}/${segment}/${surveyId}${searchParams}`;
        });
        async function getFileFromPath(filePath) {
          const response = await fetch(filePath);
          const blob = await response.blob();
          const fileName = filePath.substring(filePath.lastIndexOf("/") + 1);
          return new File([blob], fileName);
        }
      }
    };
  });
})();
