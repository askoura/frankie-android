import { j as jsxRuntimeExports } from "./index-71e436dd.js";
import { u as useTranslation } from "./common-acee48c7.js";
import { F as FormControl, b as FormLabel } from "./InputLabel-7f86409c.js";
import { F as FormControlLabel } from "./FormControlLabel-4e5795b5.js";
import { C as Checkbox } from "./Checkbox-2dc7bcca.js";
import { A as AdapterDayjs } from "./index-14da8e91.js";
import { L as LocalizationProvider, D as DatePicker } from "./DatePicker-8e1ec2f6.js";
import { T as TextField } from "./TextField-e86274a8.js";
const LANGUAGE = {
  EN: "en",
  DE: "de",
  AR: "ar"
};
const AdditionalLanguages = ({
  baseLanguage,
  onAdditionalLanguagesChanged,
  additionalLanguages,
  disabled
}) => {
  const { t } = useTranslation("manage");
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(FormControl, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(FormLabel, { id: "additional-languages-label", children: t("label.additional_languages") }),
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
    )
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
  ALL_IN_ONE: "ALL_IN_ONE",
  GROUP_BY_GROUP: "GROUP_BY_GROUP",
  QUESTION_BY_QUESTION: "QUESTION_BY_QUESTION"
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
  SURVEY_STATUS as S,
  SurveyActiveFromTo as a,
  SURVEY as b,
  SURVEY_MODE as c
};
