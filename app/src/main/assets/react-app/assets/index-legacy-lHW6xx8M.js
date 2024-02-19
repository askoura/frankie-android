;
(function () {
  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
  function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
  System.register(['./index-legacy-T3s18jo3.js', './Web-legacy-LDhM2X1u.js', './FormGroup-legacy-aaf9eppM.js', './TextField-legacy-vL2OdS5Q.js', './FormControlLabel-legacy-0Ne4M7i6.js', './DatePicker-legacy-9Ey9K3I7.js', './Grid-legacy-ZQipiKyz.js', './Checkbox-legacy-8hCFdihe.js', './SwitchBase-legacy-VpMr3A_z.js'], function (exports, module) {
    'use strict';

    var useTranslation, jsxRuntimeExports, FormControl, InputLabel, Select, MenuItem, useNavigate, useDispatch, reactExports, Box, Card, Typography, Button, setLoading, SurveyService, onApiError, onError, PROCESSED_ERRORS, SURVEY_MODE, SurveyActiveFromTo, routes, localDateToServerDateTime, FormGroup, TextField, FormHelperText, Stack;
    return {
      setters: [module => {
        useTranslation = module.x;
        jsxRuntimeExports = module.j;
        FormControl = module.ag;
        InputLabel = module.ah;
        Select = module.S;
        MenuItem = module.M;
        useNavigate = module.w;
        useDispatch = module.z;
        reactExports = module.r;
        Box = module.B;
        Card = module.bt;
        Typography = module.a0;
        Button = module.a1;
        setLoading = module.D;
        SurveyService = module.a2;
        onApiError = module.a3;
        onError = module.a7;
        PROCESSED_ERRORS = module.a4;
      }, module => {
        SURVEY_MODE = module.S;
        SurveyActiveFromTo = module.a;
        routes = module.r;
        localDateToServerDateTime = module.l;
      }, module => {
        FormGroup = module.F;
      }, module => {
        TextField = module.T;
        FormHelperText = module.F;
      }, module => {
        Stack = module.S;
      }, null, null, null, null],
      execute: function execute() {
        var __vite_style__ = document.createElement('style');
        __vite_style__.textContent = "._mainContainer_14mvi_1 {\n  margin: auto;\n  max-width: 800px;\n  min-width: 300px;\n  height: calc(100vh - 80px);\n  overflow: auto;\n}\n\n._createUserCard_14mvi_9 {\n  padding: 25px;\n}\n\n._blockItem_14mvi_13 {\n  flex: 1;\n  display: flex;\n  gap: 15px;\n  flex-direction: column;\n}\n\n._errorText_14mvi_20 {\n  color: #eb5757 !important;\n}\n";
        document.head.appendChild(__vite_style__);
        exports('default', CreateSurvey);
        const mainContainer = "_mainContainer_14mvi_1";
        const createUserCard = "_createUserCard_14mvi_9";
        const blockItem = "_blockItem_14mvi_13";
        const errorText = "_errorText_14mvi_20";
        const styles = {
          mainContainer: mainContainer,
          createUserCard: createUserCard,
          blockItem: blockItem,
          errorText: errorText
        };
        const SurveyMode = ({
          surveyMode,
          onSurveyModeChanged
        }) => {
          const _useTranslation = useTranslation("manage"),
            t = _useTranslation.t;
          return /* @__PURE__ */jsxRuntimeExports.jsxs(FormControl, {
            fullWidth: true,
            children: [/* @__PURE__ */jsxRuntimeExports.jsx(InputLabel, {
              id: "survey-mode-label",
              children: t("label.survey_mode")
            }), /* @__PURE__ */jsxRuntimeExports.jsxs(Select, {
              labelId: "survey-mode-label",
              id: "demo-simple-select",
              value: surveyMode,
              label: t("label.survey_mode"),
              onChange: onSurveyModeChanged,
              children: [/* @__PURE__ */jsxRuntimeExports.jsx(MenuItem, {
                value: SURVEY_MODE.WEB,
                children: t(`mode.${SURVEY_MODE.WEB}`)
              }), /* @__PURE__ */jsxRuntimeExports.jsx(MenuItem, {
                value: SURVEY_MODE.OFFLINE,
                children: t(`mode.${SURVEY_MODE.OFFLINE}`)
              }), /* @__PURE__ */jsxRuntimeExports.jsx(MenuItem, {
                value: SURVEY_MODE.MIXED,
                children: t(`mode.${SURVEY_MODE.MIXED}`)
              })]
            })]
          });
        };
        function CreateSurvey() {
          const navigate = useNavigate();
          const _useTranslation2 = useTranslation("manage"),
            t = _useTranslation2.t;
          const dispatch = useDispatch();
          const _reactExports$useStat = reactExports.useState(""),
            _reactExports$useStat2 = _slicedToArray(_reactExports$useStat, 2),
            surveyName = _reactExports$useStat2[0],
            setSurveyName = _reactExports$useStat2[1];
          const _reactExports$useStat3 = reactExports.useState(""),
            _reactExports$useStat4 = _slicedToArray(_reactExports$useStat3, 2),
            surveyNameError = _reactExports$useStat4[0],
            setSurveyNameError = _reactExports$useStat4[1];
          const _reactExports$useStat5 = reactExports.useState(""),
            _reactExports$useStat6 = _slicedToArray(_reactExports$useStat5, 2),
            surveyDateError = _reactExports$useStat6[0],
            setSurveyDateError = _reactExports$useStat6[1];
          const _reactExports$useStat7 = reactExports.useState(SURVEY_MODE.MIXED),
            _reactExports$useStat8 = _slicedToArray(_reactExports$useStat7, 2),
            surveyMode = _reactExports$useStat8[0],
            setSurveyMode = _reactExports$useStat8[1];
          const _reactExports$useStat9 = reactExports.useState(null),
            _reactExports$useStat10 = _slicedToArray(_reactExports$useStat9, 2),
            surveyActiveFrom = _reactExports$useStat10[0],
            setSurveyActiveFrom = _reactExports$useStat10[1];
          const _reactExports$useStat11 = reactExports.useState(null),
            _reactExports$useStat12 = _slicedToArray(_reactExports$useStat11, 2),
            surveyActiveTo = _reactExports$useStat12[0],
            setSurveyActiveTo = _reactExports$useStat12[1];
          const onSurveyNameChanged = e => {
            setSurveyName(e.target.value);
            setSurveyNameError("");
          };
          const onSurveyModeChanged = e => {
            setSurveyMode(e.target.value);
          };
          const onSurveyActiveFromChanged = value => {
            setSurveyDateError("");
            setSurveyActiveFrom(value.toDate());
          };
          const onSurveyActiveToChanged = value => {
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
            }).catch(e => {
              onApiError({
                error: e,
                globalErrorHandler: processedError => {
                  dispatch(onError(processedError));
                },
                locallErrorHandler: processedError => {
                  if (processedError.name == PROCESSED_ERRORS.DUPLICATE_SURVEY_NAME.name) {
                    setSurveyNameError(t(`processed_errors.${processedError.name}`));
                  } else if (processedError.name == PROCESSED_ERRORS.INVALID_SURVEY_DATES.name) {
                    setSurveyDateError(t(`processed_errors.${processedError.name}`));
                  }
                }
              });
            }).finally(() => {
              dispatch(setLoading(false));
            });
          };
          return /* @__PURE__ */jsxRuntimeExports.jsx(Box, {
            className: styles.mainContainer,
            children: /* @__PURE__ */jsxRuntimeExports.jsxs(Card, {
              className: styles.createUserCard,
              children: [/* @__PURE__ */jsxRuntimeExports.jsx(Typography, {
                variant: "h4",
                children: t("create_survey.title")
              }), /* @__PURE__ */jsxRuntimeExports.jsxs(FormGroup, {
                className: styles.formGroup,
                children: [/* @__PURE__ */jsxRuntimeExports.jsx(TextField, {
                  sx: {
                    maxWidth: "400px"
                  },
                  error: surveyNameError.length > 0,
                  required: true,
                  value: surveyName,
                  id: "surveyName",
                  label: t("label.survey_name"),
                  name: "surveyName",
                  onChange: onSurveyNameChanged,
                  variant: "standard"
                }), surveyNameError && /* @__PURE__ */jsxRuntimeExports.jsx(FormHelperText, {
                  className: styles.errorText,
                  children: surveyNameError
                }), /* @__PURE__ */jsxRuntimeExports.jsxs(Stack, {
                  flexDirection: "row",
                  gap: 5,
                  sx: {
                    mt: "40px"
                  },
                  children: [/* @__PURE__ */jsxRuntimeExports.jsx(Box, {
                    className: styles.blockItem,
                    children: /* @__PURE__ */jsxRuntimeExports.jsx(SurveyMode, {
                      surveyMode,
                      onSurveyModeChanged
                    })
                  }), /* @__PURE__ */jsxRuntimeExports.jsx(Box, {
                    className: styles.blockItem,
                    children: /* @__PURE__ */jsxRuntimeExports.jsx(SurveyActiveFromTo, {
                      error: surveyDateError,
                      surveyActiveFrom,
                      surveyActiveTo,
                      onSurveyActiveFromChanged,
                      onSurveyActiveToChanged
                    })
                  })]
                })]
              }), /* @__PURE__ */jsxRuntimeExports.jsxs(Box, {
                sx: {
                  display: "flex",
                  justifyContent: "flex-end",
                  mt: "40px"
                },
                children: [/* @__PURE__ */jsxRuntimeExports.jsx(Button, {
                  onClick: goDashboard,
                  children: t("action_btn.cancel")
                }), /* @__PURE__ */jsxRuntimeExports.jsx(Button, {
                  onClick: onSubmit,
                  children: t("action_btn.save")
                })]
              })]
            })
          });
        }
      }
    };
  });
})();
//# sourceMappingURL=index-legacy-lHW6xx8M.js.map
