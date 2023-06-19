import { g as requireCreateSvgIcon, i as interopRequireDefaultExports, j as jsxRuntimeExports, r as reactExports } from "./index-bbbd1d1b.js";
import { d as default_1$1 } from "./survey-c29bef23.js";
import { a as IconButton, B as Box, u as useTranslation } from "./common-cf84468d.js";
import { D as Drawer, A as AdapterDayjs } from "./index-ee813297.js";
import { F as FormControl, b as FormLabel, a as FormHelperText } from "./InputLabel-3fdae097.js";
import { F as FormControlLabel } from "./FormControlLabel-74f3ff71.js";
import { C as Checkbox } from "./Checkbox-d6f097b1.js";
import { L as LocalizationProvider, D as DatePicker } from "./DatePicker-6b64252d.js";
import { T as TextField } from "./TextField-3f14dd26.js";
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
export {
  AdditionalLanguages as A,
  LANGUAGE as L,
  SurveyActiveFromTo as S
};
