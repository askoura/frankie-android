import { x as useTranslation, j as jsxRuntimeExports, ag as FormControl, ah as InputLabel, S as Select, M as MenuItem, w as useNavigate, z as useDispatch, r as reactExports, B as Box, bt as Card, a0 as Typography, a1 as Button, D as setLoading, a2 as SurveyService, a3 as onApiError, a7 as onError, a4 as PROCESSED_ERRORS } from "./index-RBnW6nvi.js";
import { S as SURVEY_MODE, a as SurveyActiveFromTo, r as routes, l as localDateToServerDateTime } from "./Web-KOHZ4PI_.js";
import { F as FormGroup } from "./FormGroup-A52SYRjs.js";
import { T as TextField, F as FormHelperText } from "./TextField-lJ98NZsg.js";
import { S as Stack } from "./FormControlLabel-B-3jdeza.js";
import "./DatePicker-AVKIEE0b.js";
import "./Grid-q5yBxj4Y.js";
import "./Checkbox-HSUkhdvK.js";
import "./SwitchBase-naWSSwc-.js";
const mainContainer = "_mainContainer_14mvi_1";
const createUserCard = "_createUserCard_14mvi_9";
const blockItem = "_blockItem_14mvi_13";
const errorText = "_errorText_14mvi_20";
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
          /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { value: SURVEY_MODE.WEB, children: t("mode.".concat(SURVEY_MODE.WEB)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { value: SURVEY_MODE.OFFLINE, children: t("mode.".concat(SURVEY_MODE.OFFLINE)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { value: SURVEY_MODE.MIXED, children: t("mode.".concat(SURVEY_MODE.MIXED)) })
        ]
      }
    )
  ] });
};
function CreateSurvey() {
  const navigate = useNavigate();
  const { t } = useTranslation("manage");
  const dispatch = useDispatch();
  const [surveyName, setSurveyName] = reactExports.useState("");
  const [surveyNameError, setSurveyNameError] = reactExports.useState("");
  const [surveyDateError, setSurveyDateError] = reactExports.useState("");
  const [surveyMode, setSurveyMode] = reactExports.useState(SURVEY_MODE.MIXED);
  const [surveyActiveFrom, setSurveyActiveFrom] = reactExports.useState(null);
  const [surveyActiveTo, setSurveyActiveTo] = reactExports.useState(null);
  const onSurveyNameChanged = (e) => {
    setSurveyName(e.target.value);
    setSurveyNameError("");
  };
  const onSurveyModeChanged = (e) => {
    setSurveyMode(e.target.value);
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
    dispatch(setLoading(true));
    const data = {
      name: surveyName,
      usage: surveyMode
    };
    if (surveyActiveFrom) {
      data.startDate = localDateToServerDateTime(surveyActiveFrom);
    }
    if (surveyActiveTo) {
      data.endDate = localDateToServerDateTime(surveyActiveTo);
    }
    SurveyService.createSurvey(data).then(() => {
      goDashboard();
    }).catch((e) => {
      onApiError({
        error: e,
        globalErrorHandler: (processedError) => {
          dispatch(onError(processedError));
        },
        locallErrorHandler: (processedError) => {
          if (processedError.name == PROCESSED_ERRORS.DUPLICATE_SURVEY_NAME.name) {
            setSurveyNameError(t("processed_errors.".concat(processedError.name)));
          } else if (processedError.name == PROCESSED_ERRORS.INVALID_SURVEY_DATES.name) {
            setSurveyDateError(t("processed_errors.".concat(processedError.name)));
          }
        }
      });
    }).finally(() => {
      dispatch(setLoading(false));
    });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { className: styles.mainContainer, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: styles.createUserCard, children: [
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
        /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { className: styles.blockItem, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          SurveyMode,
          {
            surveyMode,
            onSurveyModeChanged
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { className: styles.blockItem, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          SurveyActiveFromTo,
          {
            error: surveyDateError,
            surveyActiveFrom,
            surveyActiveTo,
            onSurveyActiveFromChanged,
            onSurveyActiveToChanged
          }
        ) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { sx: { display: "flex", justifyContent: "flex-end", mt: "40px" }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: goDashboard, children: t("action_btn.cancel") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: onSubmit, children: t("action_btn.save") })
    ] })
  ] }) });
}
export {
  CreateSurvey as default
};
//# sourceMappingURL=index-V8KW_yr5.js.map
