import { u as useNavigate, j as jsxRuntimeExports, g as requireCreateSvgIcon, i as interopRequireDefaultExports, T as TokenService, D as useLocation, V as CookiesService, L as Link } from "./index-a534f6bd.js";
import { A as AuthService } from "./AuthService-d83f305c.js";
import { B as Box, a as IconButton, r as rtlLanguage } from "./common-85d356ce.js";
import { L as LanguageSelector } from "./index-50043b2e.js";
import { d as default_1$1 } from "./ArrowBack-58ebd7be.js";
import { L as LogoutOutlined } from "./LogoutOutlined-b4cae763.js";
const routes = {
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
};
const header = "_header_qo6ia_1";
const userInfo = "_userInfo_qo6ia_8";
const styles$1 = {
  header,
  userInfo
};
const logo = "_logo_21mob_1";
const styles = {
  logo
};
const Logo = () => {
  const nav = useNavigate();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { className: styles.logo, onClick: () => nav("/"), children: "LOGO" });
};
var ArrowForward = {};
var _interopRequireDefault = interopRequireDefaultExports;
Object.defineProperty(ArrowForward, "__esModule", {
  value: true
});
var default_1 = ArrowForward.default = void 0;
var _createSvgIcon = _interopRequireDefault(requireCreateSvgIcon());
var _jsxRuntime = jsxRuntimeExports;
var _default = (0, _createSvgIcon.default)(/* @__PURE__ */ (0, _jsxRuntime.jsx)("path", {
  d: "m12 4-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"
}), "ArrowForward");
default_1 = ArrowForward.default = _default;
const Header = () => {
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
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { className: styles$1.header, children: [
    shouldShowBack && /* @__PURE__ */ jsxRuntimeExports.jsx(
      IconButton,
      {
        size: "large",
        edge: "start",
        color: "inherit",
        "aria-label": "menu",
        sx: { mr: 2 },
        onClick: () => nav(-1),
        children: isRTL ? /* @__PURE__ */ jsxRuntimeExports.jsx(default_1, {}) : /* @__PURE__ */ jsxRuntimeExports.jsx(default_1$1, {})
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Logo, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { className: styles$1.userInfo, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(LanguageSelector, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: routes.profile, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { children: [
        user == null ? void 0 : user.firstName,
        " ",
        user == null ? void 0 : user.lastName
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(IconButton, { onClick: () => logout(), children: /* @__PURE__ */ jsxRuntimeExports.jsx(LogoutOutlined, {}) })
    ] })
  ] });
};
export {
  Header as H,
  routes as r
};
