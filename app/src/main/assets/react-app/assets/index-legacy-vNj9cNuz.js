;
(function () {
  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
  function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
  function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
  function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : String(i); }
  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  System.register(['./index-legacy-vEA8K-LS.js', './Web-legacy-BheMkDx6.js', './use-service-legacy-Bcxdqe8R.js', './Card-legacy-DxmmOhD2.js', './FormGroup-legacy-_q8X8O3p.js', './TextField-legacy-Dx6AYM0D.js', './Checkbox-legacy-DVZrBJdJ.js', './SwitchBase-legacy-CDK6BOac.js', './DatePicker-legacy-BnaJqr5R.js', './Grid-legacy-Dnj6MD-w.js', './radioClasses-legacy-Dh2-Btlo.js', './tableRowClasses-legacy-vYv7lYPf.js', './FormControlLabel-legacy-CId-AnH7.js'], function (exports, module) {
    'use strict';

    var jsxRuntimeExports, useNavigate, reactExports, Box, SURVEY_MODE, KeyboardArrowDown, SurveyActiveFromTo, routes, localDateToServerDateTime, useTranslation, FormControl, InputLabel, Select, MenuItem, useService, useDispatch, Typography, Stack, Button, setLoading, PROCESSED_ERRORS, Card, FormGroup, TextField, FormHelperText;
    return {
      setters: [module => {
        jsxRuntimeExports = module.j;
        useNavigate = module.s;
        reactExports = module.r;
        Box = module.B;
      }, module => {
        SURVEY_MODE = module.j;
        KeyboardArrowDown = module.K;
        SurveyActiveFromTo = module.q;
        routes = module.r;
        localDateToServerDateTime = module.h;
      }, module => {
        useTranslation = module.E;
        FormControl = module.ag;
        InputLabel = module.ah;
        Select = module.S;
        MenuItem = module.M;
        useService = module.J;
        useDispatch = module.K;
        Typography = module.T;
        Stack = module.aH;
        Button = module.ap;
        setLoading = module.O;
        PROCESSED_ERRORS = module.aq;
      }, module => {
        Card = module.C;
      }, module => {
        FormGroup = module.F;
      }, module => {
        TextField = module.T;
        FormHelperText = module.F;
      }, null, null, null, null, null, null, null],
      execute: function execute() {
        var __vite_style__ = document.createElement('style');
        __vite_style__.textContent = "._mainContainer_17u7e_1 {\n  margin: auto;\n  max-width: 800px;\n  min-width: 300px;\n  height: calc(100vh - 64px);\n  overflow: auto;\n}\n\n._createUserCard_17u7e_9 {\n  padding: 25px;\n}\n\n._blockItem_17u7e_13 {\n  flex: 1;\n  display: flex;\n  gap: 15px;\n  flex-direction: column;\n}\n\n._errorText_17u7e_20 {\n  color: #eb5757 !important;\n}\n";
        document.head.appendChild(__vite_style__);
        exports("default", CreateSurvey);
        const mainContainer = "_mainContainer_17u7e_1";
        const createUserCard = "_createUserCard_17u7e_9";
        const blockItem = "_blockItem_17u7e_13";
        const errorText = "_errorText_17u7e_20";
        const styles = {
          mainContainer: mainContainer,
          createUserCard: createUserCard,
          blockItem: blockItem,
          errorText: errorText
        };
        function CustomArrow(props) {
          return /* @__PURE__ */jsxRuntimeExports.jsx(KeyboardArrowDown, _objectSpread(_objectSpread({}, props), {}, {
            style: {
              color: "#181735"
            }
          }));
        }
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
              sx: {
                minWidth: "160px",
                borderRadius: "12px",
                backgroundColor: "#f7f8fc",
                "& .MuiOutlinedInput-notchedOutline": {
                  border: "none"
                }
              },
              IconComponent: CustomArrow,
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
          const surveyService = useService("survey");
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
            surveyService.createSurvey(data).then(() => {
              goDashboard();
            }).catch(processedError => {
              if (processedError.name == PROCESSED_ERRORS.DUPLICATE_SURVEY_NAME.name) {
                setSurveyNameError(t(`processed_errors.${processedError.name}`));
              } else if (processedError.name == PROCESSED_ERRORS.INVALID_SURVEY_DATES.name) {
                setSurveyDateError(t(`processed_errors.${processedError.name}`));
              }
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
//# sourceMappingURL=index-legacy-vNj9cNuz.js.map