import { j as jsxRuntimeExports, u as useNavigate, r as reactExports, d as LoadingIndicator, S as SurveyService, p as processError, P as PROCESSED_ERRORS } from "./index-bbbd1d1b.js";
import { H as Header, r as routes } from "./index-e4217cd2.js";
import { P as ProcessedError } from "./index-c8668cbd.js";
import { l as localDateToServerDateTime } from "./DateUtils-a37c0640.js";
import { L as LANGUAGE, A as AdditionalLanguages, S as SurveyActiveFromTo } from "./index-6cd969b2.js";
import { b as SURVEY_MODE } from "./survey-c29bef23.js";
import { u as useTranslation, e as Select, f as MenuItem, B as Box, T as Typography, b as Button } from "./common-cf84468d.js";
import { F as FormControl, I as InputLabel, a as FormHelperText } from "./InputLabel-3fdae097.js";
import { C as Card } from "./Card-115455fc.js";
import { F as FormGroup } from "./FormGroup-def0fd07.js";
import { T as TextField } from "./TextField-3f14dd26.js";
import { S as Stack } from "./Stack-4f00340f.js";
import "./AuthService-835a59a6.js";
import "./ArrowBack-6e96f106.js";
import "./LogoutOutlined-e17731b7.js";
import "./index-ee813297.js";
import "./FormControlLabel-74f3ff71.js";
import "./Checkbox-d6f097b1.js";
import "./DatePicker-6b64252d.js";
import "./InputAdornment-503dc53e.js";
const mainContainer = "_mainContainer_1k8r6_1";
const createUserCard = "_createUserCard_1k8r6_7";
const blockItem = "_blockItem_1k8r6_11";
const errorText = "_errorText_1k8r6_18";
const styles = {
  mainContainer,
  createUserCard,
  blockItem,
  errorText
};
const SurveyMode = ({
  surveyMode,
  onSurveyModeChanged
}) => {
  const { t } = useTranslation("manage");
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(FormControl, { fullWidth: true, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(InputLabel, { id: "survey-mode-label", children: t("label.survey_mode") }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Select,
      {
        labelId: "survey-mode-label",
        id: "demo-simple-select",
        value: surveyMode,
        label: t("label.survey_mode"),
        onChange: onSurveyModeChanged,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { value: SURVEY_MODE.WEB, children: t(`mode.${SURVEY_MODE.WEB}`) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { value: SURVEY_MODE.OFFLINE, children: t(`mode.${SURVEY_MODE.OFFLINE}`) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { value: SURVEY_MODE.MIXED, children: t(`mode.${SURVEY_MODE.MIXED}`) })
        ]
      }
    )
  ] });
};
const BaseLanguage = ({
  baseLanguage,
  onBaseLanguageChanged,
  disabled
}) => {
  const { t } = useTranslation("manage");
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(FormControl, { fullWidth: true, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(InputLabel, { id: "label-base-language", children: t("label.base_language") }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Select,
      {
        disabled,
        labelId: "label-base-language",
        value: baseLanguage,
        label: t("label.base_language"),
        onChange: onBaseLanguageChanged,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { value: "en", children: t("language.en") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { value: "de", children: t("language.de") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { value: "ar", children: t("language.ar") })
        ]
      }
    )
  ] });
};
function CreateSurvey() {
  const navigate = useNavigate();
  const { t } = useTranslation("manage");
  const [processedError, setProcessedError] = reactExports.useState("");
  const [showError, setShowError] = reactExports.useState(false);
  const [loading, setLoading] = reactExports.useState(false);
  const [surveyName, setSurveyName] = reactExports.useState("");
  const [surveyNameError, setSurveyNameError] = reactExports.useState("");
  const [surveyDateError, setSurveyDateError] = reactExports.useState("");
  const [baseLanguage, setBaseLanguage] = reactExports.useState(LANGUAGE.EN);
  const [surveyMode, setSurveyMode] = reactExports.useState(SURVEY_MODE.MIXED);
  const [additionalLanguages, setAdditionalLanguages] = reactExports.useState([]);
  const [surveyActiveFrom, setSurveyActiveFrom] = reactExports.useState(null);
  const [surveyActiveTo, setSurveyActiveTo] = reactExports.useState(null);
  const onSurveyNameChanged = (e) => {
    setSurveyName(e.target.value);
    setSurveyNameError("");
  };
  const onBaseLanguageChanged = (e) => {
    setBaseLanguage(e.target.value);
    if (additionalLanguages.includes(e.target.value)) {
      setAdditionalLanguages(
        additionalLanguages.filter((language) => language !== e.target.value)
      );
    }
  };
  const onSurveyModeChanged = (e) => {
    setSurveyMode(e.target.value);
  };
  const onAdditionalLanguagesChanged = (e) => {
    if (e.target.checked) {
      setAdditionalLanguages([...additionalLanguages, e.target.name]);
    } else {
      setAdditionalLanguages(
        additionalLanguages.filter((language) => language !== e.target.name)
      );
    }
  };
  const onSurveyActiveFromChanged = (value) => {
    setSurveyDateError("");
    setSurveyActiveFrom(value.toDate());
  };
  const onSurveyActiveToChanged = (value) => {
    setSurveyDateError("");
    setSurveyActiveTo(value.toDate());
  };
  const validate = () => {
    setSurveyNameError("");
    if (surveyName.length == 0) {
      setSurveyNameError(t("survey_required"));
      return false;
    }
    return true;
  };
  const goDashboard = () => {
    navigate(routes.dashboard);
  };
  const onSubmit = () => {
    if (!validate()) {
      return;
    }
    setLoading(true);
    const data = {
      name: surveyName,
      defaultLanguage: { code: baseLanguage, langName: "" },
      usage: surveyMode
    };
    if (additionalLanguages) {
      data.additionalLanguages = additionalLanguages.map((lang) => {
        return { code: lang, langName: "" };
      });
    }
    if (surveyActiveFrom) {
      data.startDate = localDateToServerDateTime(surveyActiveFrom);
    }
    if (surveyActiveTo) {
      data.endDate = localDateToServerDateTime(surveyActiveTo);
    }
    SurveyService.createSurvey(data).then(() => {
      goDashboard();
    }).catch((e) => {
      const processed = processError(e);
      switch (processed) {
        case PROCESSED_ERRORS.NETWORK_ERR:
        case PROCESSED_ERRORS.BACKEND_DOWN:
          setShowError(true);
          setProcessedError(processed);
          break;
        case PROCESSED_ERRORS.DUPLICATE_SURVEY_NAME:
          setSurveyNameError(t(`processed_errors.${processed}`));
        case PROCESSED_ERRORS.INVALID_SURVEY_DATES:
          setSurveyDateError(t(`processed_errors.${processed}`));
          break;
      }
    }).finally(() => {
      setLoading(false);
    });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { className: styles.mainContainer, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Header, {}),
    loading && /* @__PURE__ */ jsxRuntimeExports.jsx(LoadingIndicator, {}),
    showError && /* @__PURE__ */ jsxRuntimeExports.jsx(
      ProcessedError,
      {
        error: processedError,
        handleClose: () => setShowError(false)
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: styles.createUserCard, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "h4", children: t("create_survey.title") }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(FormGroup, { className: styles.formGroup, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          TextField,
          {
            sx: { maxWidth: "400px" },
            error: surveyNameError.length > 0,
            required: true,
            value: surveyName,
            id: "surveyName",
            label: t("label.survey_name"),
            name: "surveyName",
            onChange: onSurveyNameChanged,
            variant: "standard"
          }
        ),
        surveyNameError && /* @__PURE__ */ jsxRuntimeExports.jsx(FormHelperText, { className: styles.errorText, children: surveyNameError }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { flexDirection: "row", gap: 5, sx: { mt: "40px" }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { className: styles.blockItem, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              BaseLanguage,
              {
                onBaseLanguageChanged,
                baseLanguage
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              SurveyMode,
              {
                surveyMode,
                onSurveyModeChanged
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { className: styles.blockItem, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              AdditionalLanguages,
              {
                onAdditionalLanguagesChanged,
                additionalLanguages,
                baseLanguage
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              SurveyActiveFromTo,
              {
                error: surveyDateError,
                surveyActiveFrom,
                surveyActiveTo,
                onSurveyActiveFromChanged,
                onSurveyActiveToChanged
              }
            )
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { sx: { display: "flex", justifyContent: "flex-end", mt: "40px" }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: goDashboard, children: t("action_btn.cancel") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: onSubmit, children: t("action_btn.save") })
      ] })
    ] })
  ] });
}
export {
  CreateSurvey as default
};