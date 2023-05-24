;
(function () {
  System.register(['./index-legacy-2ed052c8.js'], function (exports, module) {
    'use strict';

    var FRONT_END_HOST, PROTOCOL, BACKEND_BASE_URL, TokenService;
    return {
      setters: [function (module) {
        FRONT_END_HOST = module.F;
        PROTOCOL = module.E;
        BACKEND_BASE_URL = module.bN;
        TokenService = module.T;
      }],
      execute: function execute() {
        var hostnameSubdomain = exports('h', function () {
          var host = window.location.host;
          if (host == FRONT_END_HOST) {
            return "";
          } else {
            return host.replace("." + FRONT_END_HOST, "");
          }
        });
        var urlWithSubdomain = exports('u', function (subdomain) {
          return PROTOCOL + "://" + subdomain + "." + FRONT_END_HOST;
        });
        var buildResourceUrl = exports('b', function (fileName) {
          var surveyId = sessionStorage.getItem("surveyId");
          return "".concat(BACKEND_BASE_URL, "/survey/").concat(surveyId, "/resource/").concat(fileName);
        });
        var sharingUrl = exports('s', function (surveyId, preview, lang) {
          var segment = "run-survey";
          if (preview) {
            segment = "preview-survey";
          }
          var searchParams = "";
          if (lang) {
            searchParams = "?lang=".concat(lang);
          }
          return "".concat(PROTOCOL, "://").concat(TokenService.getSubdomain(), ".").concat(FRONT_END_HOST, "/").concat(segment, "/").concat(surveyId).concat(searchParams);
        });
      }
    };
  });
})();
