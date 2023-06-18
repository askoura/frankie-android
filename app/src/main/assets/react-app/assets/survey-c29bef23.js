import { g as requireCreateSvgIcon, i as interopRequireDefaultExports, j as jsxRuntimeExports } from "./index-bbbd1d1b.js";
var Close = {};
var _interopRequireDefault = interopRequireDefaultExports;
Object.defineProperty(Close, "__esModule", {
  value: true
});
var default_1 = Close.default = void 0;
var _createSvgIcon = _interopRequireDefault(requireCreateSvgIcon());
var _jsxRuntime = jsxRuntimeExports;
var _default = (0, _createSvgIcon.default)(/* @__PURE__ */ (0, _jsxRuntime.jsx)("path", {
  d: "M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
}), "Close");
default_1 = Close.default = _default;
const SURVEY_MODE = {
  MIXED: "mixed",
  WEB: "web",
  OFFLINE: "offline"
};
const SURVEY_STATUS = {
  ACTIVE: "active",
  DRAFT: "draft",
  CLOSED: "closed"
};
const NAVIGATION_MODE = {
  ALL_IN_ONE: "all_in_one",
  GROUP_BY_GROUP: "group_by_group",
  QUESTION_BY_QUESTION: "question_by_question"
};
const SURVEY = {
  ALLOW_PREVIOUS: "allowPrevious",
  ALLOW_INCOMPLETE: "allowIncomplete",
  ALLOW_JUMP: "allowJump",
  SKIP_INVALID: "skipInvalid",
  BACKGROUND_AUDIO: "backgroundAudio",
  RECORD_GPS: "recordGps",
  CAN_LOCK_SURVEY: "canLockSurvey",
  SAVE_IP: "saveIp",
  SAVE_TIMINGS: "saveTimings",
  PUBLIC_WITHIN_ORG: "publicWithinOrg"
};
export {
  NAVIGATION_MODE as N,
  SURVEY_STATUS as S,
  SURVEY as a,
  SURVEY_MODE as b,
  default_1 as d
};
