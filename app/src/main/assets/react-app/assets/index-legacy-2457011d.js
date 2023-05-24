;
(function () {
  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
  function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
  System.register(['./index-legacy-2ed052c8.js', './index-legacy-fded5108.js', './index-legacy-a3c6c77f.js', './DateUtils-legacy-9d062644.js', './survey-legacy-1ed7de5e.js', './common-legacy-fd659671.js', './InputLabel-legacy-b3ce6ce8.js', './Card-legacy-c685385d.js', './FormGroup-legacy-56dee9ee.js', './TextField-legacy-217b7f4c.js', './Stack-legacy-ea26f549.js', './AuthService-legacy-f87eb3f3.js', './ArrowBack-legacy-93a6a0e9.js', './LogoutOutlined-legacy-8ebfc426.js', './FormControlLabel-legacy-ed03c9b7.js', './Checkbox-legacy-2a682871.js', './index-legacy-d964c565.js', './DatePicker-legacy-41ebef37.js', './InputAdornment-legacy-27f92800.js'], function (exports, module) {
    'use strict';

    var __vite_style__ = document.createElement('style');
    __vite_style__.textContent = "._mainContainer_1k8r6_1 {\n  margin: auto;\n  max-width: 800px;\n  min-width: 300px;\n}\n\n._createUserCard_1k8r6_7 {\n  padding: 25px;\n}\n\n._blockItem_1k8r6_11 {\n  flex: 1;\n  display: flex;\n  gap: 15px;\n  flex-direction: column;\n}\n\n._errorText_1k8r6_18 {\n  color: #eb5757 !important;\n}\n";
    document.head.appendChild(__vite_style__);
    var jsxRuntimeExports, useNavigate, reactExports, LoadingIndicator, SurveyService, processError, PROCESSED_ERRORS, Header, routes, ProcessedError, localDateToServerDateTime, SURVEY_MODE, LANGUAGE, AdditionalLanguages, SurveyActiveFromTo, useTranslation, Select, MenuItem, Box, Typography, Button, FormControl, InputLabel, FormHelperText, Card, FormGroup, TextField, Stack;
    return {
      setters: [function (module) {
        jsxRuntimeExports = module.j;
        useNavigate = module.u;
        reactExports = module.r;
        LoadingIndicator = module.d;
        SurveyService = module.S;
        processError = module.p;
        PROCESSED_ERRORS = module.P;
      }, function (module) {
        Header = module.H;
        routes = module.r;
      }, function (module) {
        ProcessedError = module.P;
      }, function (module) {
        localDateToServerDateTime = module.l;
      }, function (module) {
        SURVEY_MODE = module.c;
        LANGUAGE = module.L;
        AdditionalLanguages = module.A;
        SurveyActiveFromTo = module.a;
      }, function (module) {
        useTranslation = module.u;
        Select = module.c;
        MenuItem = module.d;
        Box = module.B;
        Typography = module.T;
        Button = module.b;
      }, function (module) {
        FormControl = module.F;
        InputLabel = module.I;
        FormHelperText = module.a;
      }, function (module) {
        Card = module.C;
      }, function (module) {
        FormGroup = module.F;
      }, function (module) {
        TextField = module.T;
      }, function (module) {
        Stack = module.S;
      }, null, null, null, null, null, null, null, null],
      execute: function execute() {
        exports('default', CreateSurvey);
        var mainContainer = "_mainContainer_1k8r6_1";
        var createUserCard = "_createUserCard_1k8r6_7";
        var blockItem = "_blockItem_1k8r6_11";
        var errorText = "_errorText_1k8r6_18";
        var styles = {
          mainContainer: mainContainer,
          createUserCard: createUserCard,
          blockItem: blockItem,
          errorText: errorText
        };
        var SurveyMode = function SurveyMode(_ref) {
          var surveyMode = _ref.surveyMode,
            onSurveyModeChanged = _ref.onSurveyModeChanged;
          var _useTranslation = useTranslation("manage"),
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
                children: t("mode.".concat(SURVEY_MODE.WEB))
              }), /* @__PURE__ */jsxRuntimeExports.jsx(MenuItem, {
                value: SURVEY_MODE.OFFLINE,
                children: t("mode.".concat(SURVEY_MODE.OFFLINE))
              }), /* @__PURE__ */jsxRuntimeExports.jsx(MenuItem, {
                value: SURVEY_MODE.MIXED,
                children: t("mode.".concat(SURVEY_MODE.MIXED))
              })]
            })]
          });
        };
        var BaseLanguage = function BaseLanguage(_ref2) {
          var baseLanguage = _ref2.baseLanguage,
            onBaseLanguageChanged = _ref2.onBaseLanguageChanged,
            disabled = _ref2.disabled;
          var _useTranslation2 = useTranslation("manage"),
            t = _useTranslation2.t;
          return /* @__PURE__ */jsxRuntimeExports.jsxs(FormControl, {
            fullWidth: true,
            children: [/* @__PURE__ */jsxRuntimeExports.jsx(InputLabel, {
              id: "label-base-language",
              children: t("label.base_language")
            }), /* @__PURE__ */jsxRuntimeExports.jsxs(Select, {
              disabled: disabled,
              labelId: "label-base-language",
              value: baseLanguage,
              label: t("label.base_language"),
              onChange: onBaseLanguageChanged,
              children: [/* @__PURE__ */jsxRuntimeExports.jsx(MenuItem, {
                value: "en",
                children: t("language.en")
              }), /* @__PURE__ */jsxRuntimeExports.jsx(MenuItem, {
                value: "de",
                children: t("language.de")
              }), /* @__PURE__ */jsxRuntimeExports.jsx(MenuItem, {
                value: "ar",
                children: t("language.ar")
              })]
            })]
          });
        };
        function CreateSurvey() {
          var navigate = useNavigate();
          var _useTranslation3 = useTranslation("manage"),
            t = _useTranslation3.t;
          var _reactExports$useStat = reactExports.useState(""),
            _reactExports$useStat2 = _slicedToArray(_reactExports$useStat, 2),
            processedError = _reactExports$useStat2[0],
            setProcessedError = _reactExports$useStat2[1];
          var _reactExports$useStat3 = reactExports.useState(false),
            _reactExports$useStat4 = _slicedToArray(_reactExports$useStat3, 2),
            showError = _reactExports$useStat4[0],
            setShowError = _reactExports$useStat4[1];
          var _reactExports$useStat5 = reactExports.useState(false),
            _reactExports$useStat6 = _slicedToArray(_reactExports$useStat5, 2),
            loading = _reactExports$useStat6[0],
            setLoading = _reactExports$useStat6[1];
          var _reactExports$useStat7 = reactExports.useState(""),
            _reactExports$useStat8 = _slicedToArray(_reactExports$useStat7, 2),
            surveyName = _reactExports$useStat8[0],
            setSurveyName = _reactExports$useStat8[1];
          var _reactExports$useStat9 = reactExports.useState(""),
            _reactExports$useStat10 = _slicedToArray(_reactExports$useStat9, 2),
            surveyNameError = _reactExports$useStat10[0],
            setSurveyNameError = _reactExports$useStat10[1];
          var _reactExports$useStat11 = reactExports.useState(LANGUAGE.EN),
            _reactExports$useStat12 = _slicedToArray(_reactExports$useStat11, 2),
            baseLanguage = _reactExports$useStat12[0],
            setBaseLanguage = _reactExports$useStat12[1];
          var _reactExports$useStat13 = reactExports.useState(SURVEY_MODE.MIXED),
            _reactExports$useStat14 = _slicedToArray(_reactExports$useStat13, 2),
            surveyMode = _reactExports$useStat14[0],
            setSurveyMode = _reactExports$useStat14[1];
          var _reactExports$useStat15 = reactExports.useState([]),
            _reactExports$useStat16 = _slicedToArray(_reactExports$useStat15, 2),
            additionalLanguages = _reactExports$useStat16[0],
            setAdditionalLanguages = _reactExports$useStat16[1];
          var _reactExports$useStat17 = reactExports.useState(null),
            _reactExports$useStat18 = _slicedToArray(_reactExports$useStat17, 2),
            surveyActiveFrom = _reactExports$useStat18[0],
            setSurveyActiveFrom = _reactExports$useStat18[1];
          var _reactExports$useStat19 = reactExports.useState(null),
            _reactExports$useStat20 = _slicedToArray(_reactExports$useStat19, 2),
            surveyActiveTo = _reactExports$useStat20[0],
            setSurveyActiveTo = _reactExports$useStat20[1];
          var onSurveyNameChanged = function onSurveyNameChanged(e) {
            setSurveyName(e.target.value);
            setSurveyNameError("");
          };
          var onBaseLanguageChanged = function onBaseLanguageChanged(e) {
            setBaseLanguage(e.target.value);
            if (additionalLanguages.includes(e.target.value)) {
              setAdditionalLanguages(additionalLanguages.filter(function (language) {
                return language !== e.target.value;
              }));
            }
          };
          var onSurveyModeChanged = function onSurveyModeChanged(e) {
            setSurveyMode(e.target.value);
          };
          var onAdditionalLanguagesChanged = function onAdditionalLanguagesChanged(e) {
            if (e.target.checked) {
              setAdditionalLanguages([].concat(_toConsumableArray(additionalLanguages), [e.target.name]));
            } else {
              setAdditionalLanguages(additionalLanguages.filter(function (language) {
                return language !== e.target.name;
              }));
            }
          };
          var onSurveyActiveFromChanged = function onSurveyActiveFromChanged(value) {
            setSurveyActiveFrom(value.toDate());
          };
          var onSurveyActiveToChanged = function onSurveyActiveToChanged(value) {
            setSurveyActiveTo(value.toDate());
          };
          var validate = function validate() {
            setSurveyNameError("");
            if (surveyName.length == 0) {
              setSurveyNameError(t("survey_required"));
              return false;
            }
            return true;
          };
          var goDashboard = function goDashboard() {
            navigate(routes.dashboard);
          };
          var onSubmit = function onSubmit() {
            if (!validate()) {
              return;
            }
            setLoading(true);
            var data = {
              name: surveyName,
              defaultLanguage: {
                code: baseLanguage,
                langName: ""
              },
              usage: surveyMode
            };
            if (additionalLanguages) {
              data.additionalLanguages = additionalLanguages.map(function (lang) {
                return {
                  code: lang,
                  langName: ""
                };
              });
            }
            if (surveyActiveFrom) {
              data.startDate = localDateToServerDateTime(surveyActiveFrom);
            }
            if (surveyActiveTo) {
              data.endDate = localDateToServerDateTime(surveyActiveTo);
            }
            SurveyService.createSurvey(data).then(function () {
              goDashboard();
            }).catch(function (e) {
              var processed = processError(e);
              switch (processed) {
                case PROCESSED_ERRORS.NETWORK_ERR:
                case PROCESSED_ERRORS.BACKEND_DOWN:
                  setShowError(true);
                  setProcessedError(processed);
                  break;
                case PROCESSED_ERRORS.DUPLICATE_SURVEY_NAME:
                  setSurveyNameError(t("processed_errors.".concat(processed)));
                  break;
              }
            }).finally(function () {
              setLoading(false);
            });
          };
          return /* @__PURE__ */jsxRuntimeExports.jsxs(Box, {
            className: styles.mainContainer,
            children: [/* @__PURE__ */jsxRuntimeExports.jsx(Header, {}), loading && /* @__PURE__ */jsxRuntimeExports.jsx(LoadingIndicator, {}), showError && /* @__PURE__ */jsxRuntimeExports.jsx(ProcessedError, {
              error: processedError,
              handleClose: function handleClose() {
                return setShowError(false);
              }
            }), /* @__PURE__ */jsxRuntimeExports.jsxs(Card, {
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
                  children: [/* @__PURE__ */jsxRuntimeExports.jsxs(Box, {
                    className: styles.blockItem,
                    children: [/* @__PURE__ */jsxRuntimeExports.jsx(BaseLanguage, {
                      onBaseLanguageChanged: onBaseLanguageChanged,
                      baseLanguage: baseLanguage
                    }), /* @__PURE__ */jsxRuntimeExports.jsx(SurveyMode, {
                      surveyMode: surveyMode,
                      onSurveyModeChanged: onSurveyModeChanged
                    })]
                  }), /* @__PURE__ */jsxRuntimeExports.jsxs(Box, {
                    className: styles.blockItem,
                    children: [/* @__PURE__ */jsxRuntimeExports.jsx(AdditionalLanguages, {
                      onAdditionalLanguagesChanged: onAdditionalLanguagesChanged,
                      additionalLanguages: additionalLanguages,
                      baseLanguage: baseLanguage
                    }), /* @__PURE__ */jsxRuntimeExports.jsx(SurveyActiveFromTo, {
                      surveyActiveFrom: surveyActiveFrom,
                      surveyActiveTo: surveyActiveTo,
                      onSurveyActiveFromChanged: onSurveyActiveFromChanged,
                      onSurveyActiveToChanged: onSurveyActiveToChanged
                    })]
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
            })]
          });
        }
      }
    };
  });
})();
