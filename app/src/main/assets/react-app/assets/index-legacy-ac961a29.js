;
(function () {
  System.register(['./index-legacy-4fb9792c.js', './AuthService-legacy-d2677483.js', './common-legacy-09fb4163.js', './index-legacy-c7009c87.js', './ArrowBack-legacy-33bf5310.js', './LogoutOutlined-legacy-d5aae7e6.js'], function (exports, module) {
    'use strict';

    var __vite_style__ = document.createElement('style');
    __vite_style__.textContent = "._header_qo6ia_1 {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 15px 0;\n}\n\n._userInfo_qo6ia_8 {\n  display: flex;\n  align-items: center;\n  gap: 20px;\n}\n._logo_21mob_1 {\n  cursor: pointer;\n}\n";
    document.head.appendChild(__vite_style__);
    var useNavigate, jsxRuntimeExports, requireCreateSvgIcon, interopRequireDefaultExports, TokenService, useLocation, CookiesService, Link, AuthService, Box, IconButton, rtlLanguage, LanguageSelector, default_1$1, LogoutOutlined;
    return {
      setters: [module => {
        useNavigate = module.u;
        jsxRuntimeExports = module.j;
        requireCreateSvgIcon = module.g;
        interopRequireDefaultExports = module.i;
        TokenService = module.T;
        useLocation = module.D;
        CookiesService = module.V;
        Link = module.L;
      }, module => {
        AuthService = module.A;
      }, module => {
        Box = module.B;
        IconButton = module.a;
        rtlLanguage = module.r;
      }, module => {
        LanguageSelector = module.L;
      }, module => {
        default_1$1 = module.d;
      }, module => {
        LogoutOutlined = module.L;
      }],
      execute: function () {
        const routes = exports('r', {
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
        const header = "_header_qo6ia_1";
        const userInfo = "_userInfo_qo6ia_8";
        const styles$1 = {
          header: header,
          userInfo: userInfo
        };
        const logo = "_logo_21mob_1";
        const styles = {
          logo: logo
        };
        const Logo = () => {
          const nav = useNavigate();
          return /* @__PURE__ */jsxRuntimeExports.jsx(Box, {
            className: styles.logo,
            onClick: () => nav("/"),
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
        const Header = exports('H', () => {
          const nav = useNavigate();
          const user = TokenService.getUser();
          const location = useLocation();
          const shouldShowBack = location.pathname != routes.dashboard;
          const logout = () => {
            AuthService.logout();
            nav(routes.login);
          };
          const lang = CookiesService.getValue("lang");
          const isRTL = rtlLanguage.includes(lang);
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
              onClick: () => nav(-1),
              children: isRTL ? /* @__PURE__ */jsxRuntimeExports.jsx(default_1, {}) : /* @__PURE__ */jsxRuntimeExports.jsx(default_1$1, {})
            }), /* @__PURE__ */jsxRuntimeExports.jsx(Logo, {}), /* @__PURE__ */jsxRuntimeExports.jsxs(Box, {
              className: styles$1.userInfo,
              children: [/* @__PURE__ */jsxRuntimeExports.jsx(LanguageSelector, {}), /* @__PURE__ */jsxRuntimeExports.jsx(Link, {
                to: routes.profile,
                children: /* @__PURE__ */jsxRuntimeExports.jsxs(Box, {
                  children: [user === null || user === void 0 ? void 0 : user.firstName, " ", user === null || user === void 0 ? void 0 : user.lastName]
                })
              }), /* @__PURE__ */jsxRuntimeExports.jsx(IconButton, {
                onClick: () => logout(),
                children: /* @__PURE__ */jsxRuntimeExports.jsx(LogoutOutlined, {})
              })]
            })]
          });
        });
      }
    };
  });
})();
