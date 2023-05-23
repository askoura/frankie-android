;
(function () {
  System.register(['./index-legacy-13317357.js', './AuthService-legacy-ffa71593.js', './common-legacy-88dbaa5f.js', './index-legacy-0169b194.js', './ArrowBack-legacy-43da8595.js', './LogoutOutlined-legacy-6e704e74.js'], function (exports, module) {
    'use strict';

    var __vite_style__ = document.createElement('style');
    __vite_style__.textContent = "._header_qo6ia_1 {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 15px 0;\n}\n\n._userInfo_qo6ia_8 {\n  display: flex;\n  align-items: center;\n  gap: 20px;\n}\n._logo_21mob_1 {\n  cursor: pointer;\n}\n";
    document.head.appendChild(__vite_style__);
    var useNavigate, jsxRuntimeExports, requireCreateSvgIcon, interopRequireDefaultExports, TokenService, useLocation, CookiesService, Link, AuthService, Box, IconButton, rtlLanguage, LanguageSelector, default_1$1, LogoutOutlined;
    return {
      setters: [function (module) {
        useNavigate = module.u;
        jsxRuntimeExports = module.j;
        requireCreateSvgIcon = module.g;
        interopRequireDefaultExports = module.i;
        TokenService = module.T;
        useLocation = module.D;
        CookiesService = module.V;
        Link = module.L;
      }, function (module) {
        AuthService = module.A;
      }, function (module) {
        Box = module.B;
        IconButton = module.a;
        rtlLanguage = module.r;
      }, function (module) {
        LanguageSelector = module.L;
      }, function (module) {
        default_1$1 = module.d;
      }, function (module) {
        LogoutOutlined = module.L;
      }],
      execute: function execute() {
        var routes = exports('r', {
          designSurvey: "/design-survey/:surveyId",
          editSurvey: "/edit-survey/:surveyId",
          responsesSurvey: "/responses/:surveyId",
          responsesEvent: "/response-events/:surveyId/:responseId",
          runSurvey: "/run-survey/:surveyId",
          previewSurvey: "/preview-survey/:surveyId",
          login: "/login",
          signup: "/signup",
          confirmSignup: "/confirm-signup/:token",
          forgotPassword: "/forgot-password",
          resetPassword: "/reset-password/:token",
          dashboard: "/",
          manageUsers: "/manage-users",
          addUser: "/add-user",
          editUser: "/edit-user/:userId",
          profile: "/profile",
          createSurvey: "/create-survey",
          dashboard1: "",
          page404: "*"
        });
        var header = "_header_qo6ia_1";
        var userInfo = "_userInfo_qo6ia_8";
        var styles$1 = {
          header: header,
          userInfo: userInfo
        };
        var logo = "_logo_21mob_1";
        var styles = {
          logo: logo
        };
        var Logo = function Logo() {
          var nav = useNavigate();
          return /* @__PURE__ */jsxRuntimeExports.jsx(Box, {
            className: styles.logo,
            onClick: function onClick() {
              return nav("/");
            },
            children: "LOGO"
          });
        };
        var ArrowForward = {};
        var _interopRequireDefault = interopRequireDefaultExports;
        Object.defineProperty(ArrowForward, "__esModule", {
          value: true
        });
        var default_1 = ArrowForward.default = void 0;
        var _createSvgIcon = _interopRequireDefault(requireCreateSvgIcon());
        var _jsxRuntime = jsxRuntimeExports;
        var _default = (0, _createSvgIcon.default)( /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
          d: "m12 4-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"
        }), 'ArrowForward');
        default_1 = ArrowForward.default = _default;
        var Header = exports('H', function () {
          var nav = useNavigate();
          var user = TokenService.getUser();
          var location = useLocation();
          var shouldShowBack = location.pathname != routes.dashboard;
          var logout = function logout() {
            AuthService.logout();
            nav(routes.login);
          };
          var lang = CookiesService.getValue("lang");
          var isRTL = rtlLanguage.includes(lang);
          return /* @__PURE__ */jsxRuntimeExports.jsxs(Box, {
            className: styles$1.header,
            children: [shouldShowBack && /* @__PURE__ */jsxRuntimeExports.jsx(IconButton, {
              size: "large",
              edge: "start",
              color: "inherit",
              "aria-label": "menu",
              sx: {
                mr: 2
              },
              onClick: function onClick() {
                return nav(-1);
              },
              children: isRTL ? /* @__PURE__ */jsxRuntimeExports.jsx(default_1, {}) : /* @__PURE__ */jsxRuntimeExports.jsx(default_1$1, {})
            }), /* @__PURE__ */jsxRuntimeExports.jsx(Logo, {}), /* @__PURE__ */jsxRuntimeExports.jsxs(Box, {
              className: styles$1.userInfo,
              children: [/* @__PURE__ */jsxRuntimeExports.jsx(LanguageSelector, {}), /* @__PURE__ */jsxRuntimeExports.jsx(Link, {
                to: routes.profile,
                children: /* @__PURE__ */jsxRuntimeExports.jsxs(Box, {
                  children: [user === null || user === void 0 ? void 0 : user.firstName, " ", user === null || user === void 0 ? void 0 : user.lastName]
                })
              }), /* @__PURE__ */jsxRuntimeExports.jsx(IconButton, {
                onClick: function onClick() {
                  return logout();
                },
                children: /* @__PURE__ */jsxRuntimeExports.jsx(LogoutOutlined, {})
              })]
            })]
          });
        });
      }
    };
  });
})();
