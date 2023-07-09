import { O as requireCreateSvgIcon, Q as interopRequireDefaultExports, j as jsxRuntimeExports, r as reactExports, e as IconButton, cB as Drawer, B as Box, aN as default_1$1, u as useTranslation, b as FormControl, a9 as FormLabel, W as FormControlLabel, aa as Checkbox, bR as LocalizationProvider, cC as AdapterDayjs, bu as DatePicker, f as FormHelperText, a as TextField } from "./index-ad8f0a8b.js";
const LANGUAGE = {
  EN: "en",
  DE: "de",
  AR: "ar"
};
var InfoOutlined = {};
var _interopRequireDefault = interopRequireDefaultExports;
Object.defineProperty(InfoOutlined, "__esModule", {
  value: true
});
var default_1 = InfoOutlined.default = void 0;
var _createSvgIcon = _interopRequireDefault(requireCreateSvgIcon());
var _jsxRuntime = jsxRuntimeExports;
var _default = (0, _createSvgIcon.default)(/* @__PURE__ */ (0, _jsxRuntime.jsx)("path", {
  d: "M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
}), "InfoOutlined");
default_1 = InfoOutlined.default = _default;
const closeBtn = "_closeBtn_nrxmn_1";
const infoOutlinedIcon = "_infoOutlinedIcon_nrxmn_7";
const infoOutlinedIconContainer = "_infoOutlinedIconContainer_nrxmn_11";
const contetContainer = "_contetContainer_nrxmn_17";
const styles = {
  closeBtn,
  infoOutlinedIcon,
  infoOutlinedIconContainer,
  contetContainer
};
const drawerWidth = 400;
const EducationPanel = ({ htmlFilePath }) => {
  const [open, setOpen] = reactExports.useState(false);
  const iframeRef = reactExports.useRef();
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const removeIframeScrollBars = () => {
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(IconButton, { className: styles.infoOutlinedIconContainere, sx: { padding: "3px", height: "20px", verticalAlign: "top" }, onClick: handleDrawerOpen, children: /* @__PURE__ */ jsxRuntimeExports.jsx(default_1, { className: styles.infoOutlinedIcon }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Drawer,
      {
        sx: {
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth
          },
          position: "relative"
        },
        anchor: "right",
        open,
        onClose: handleDrawerClose,
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Box,
          {
            sx: {
              padding: "50px 16px",
              width: "100vh - 32px",
              height: "100%",
              overflow: "hidden"
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                IconButton,
                {
                  onClick: handleDrawerClose,
                  sx: { position: "absolute" },
                  className: styles.closeBtn,
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(default_1$1, {})
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "iframe",
                {
                  className: styles.contetContainer,
                  ref: iframeRef,
                  onLoad: removeIframeScrollBars,
                  src: htmlFilePath
                }
              )
            ]
          }
        )
      }
    )
  ] });
};
const AdditionalLanguages = ({
  baseLanguage,
  onAdditionalLanguagesChanged,
  additionalLanguages,
  disabled
}) => {
  const { t } = useTranslation("manage");
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(FormControl, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(FormLabel, { id: "additional-languages-label", children: [
      t("label.additional_languages"),
      /* @__PURE__ */ jsxRuntimeExports.jsx(EducationPanel, { htmlFilePath: "/education/createSurvey/additionalLanguages/en.html" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      FormControlLabel,
      {
        control: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Checkbox,
          {
            disabled: baseLanguage == LANGUAGE.EN || disabled,
            checked: additionalLanguages.indexOf(LANGUAGE.EN) > -1,
            onChange: onAdditionalLanguagesChanged,
            name: LANGUAGE.EN
          }
        ),
        label: t("language.en")
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      FormControlLabel,
      {
        control: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Checkbox,
          {
            disabled: baseLanguage == LANGUAGE.DE || disabled,
            checked: additionalLanguages.indexOf(LANGUAGE.DE) > -1,
            onChange: onAdditionalLanguagesChanged,
            name: LANGUAGE.DE
          }
        ),
        label: t("language.de")
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      FormControlLabel,
      {
        control: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Checkbox,
          {
            disabled: baseLanguage == LANGUAGE.AR || disabled,
            checked: additionalLanguages.indexOf(LANGUAGE.AR) > -1,
            onChange: onAdditionalLanguagesChanged,
            name: LANGUAGE.AR
          }
        ),
        label: t("language.ar")
      }
    )
  ] });
};
const renderInput = (props) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(TextField, { ...props, variant: "outlined" });
};
const SurveyActiveFromTo = ({
  error,
  surveyActiveFrom,
  surveyActiveTo,
  onSurveyActiveFromChanged,
  onSurveyActiveToChanged,
  disabled
}) => {
  const { t } = useTranslation("manage");
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(LocalizationProvider, { dateAdapter: AdapterDayjs, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(FormLabel, { children: t("label.survey_active") }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      DatePicker,
      {
        disabled,
        label: t("label.from"),
        value: surveyActiveFrom,
        onChange: onSurveyActiveFromChanged,
        renderInput
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      DatePicker,
      {
        disabled,
        label: t("label.to"),
        value: surveyActiveTo,
        onChange: onSurveyActiveToChanged,
        renderInput
      }
    ),
    error && /* @__PURE__ */ jsxRuntimeExports.jsx(FormHelperText, { style: { color: "red" }, children: error })
  ] });
};
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
  AdditionalLanguages as A,
  LANGUAGE as L,
  NAVIGATION_MODE as N,
  SURVEY_MODE as S,
  SurveyActiveFromTo as a,
  SURVEY_STATUS as b,
  SURVEY as c
};
//# sourceMappingURL=survey-6e5225d4.js.map
