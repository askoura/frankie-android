;
(function () {
  function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
  function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
  function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
  System.register(['./index-legacy-bc4d1445.js', './common-legacy-e4fabe10.js', './InputLabel-legacy-753eca05.js', './FormControlLabel-legacy-e4451f07.js', './Checkbox-legacy-1e7db906.js', './index-legacy-26891b15.js', './DatePicker-legacy-a1914527.js', './TextField-legacy-0eb50016.js'], function (exports, module) {
    'use strict';

    var jsxRuntimeExports, useTranslation, FormControl, FormLabel, FormControlLabel, Checkbox, AdapterDayjs, LocalizationProvider, DatePicker, TextField;
    return {
      setters: [function (module) {
        jsxRuntimeExports = module.j;
      }, function (module) {
        useTranslation = module.u;
      }, function (module) {
        FormControl = module.F;
        FormLabel = module.b;
      }, function (module) {
        FormControlLabel = module.F;
      }, function (module) {
        Checkbox = module.C;
      }, function (module) {
        AdapterDayjs = module.A;
      }, function (module) {
        LocalizationProvider = module.L;
        DatePicker = module.D;
      }, function (module) {
        TextField = module.T;
      }],
      execute: function execute() {
        var LANGUAGE = exports('L', {
          EN: "en",
          DE: "de",
          AR: "ar"
        });
        var AdditionalLanguages = exports('A', function (_ref) {
          var baseLanguage = _ref.baseLanguage,
            onAdditionalLanguagesChanged = _ref.onAdditionalLanguagesChanged,
            additionalLanguages = _ref.additionalLanguages,
            disabled = _ref.disabled;
          var _useTranslation = useTranslation("manage"),
            t = _useTranslation.t;
          return /* @__PURE__ */jsxRuntimeExports.jsxs(FormControl, {
            children: [/* @__PURE__ */jsxRuntimeExports.jsx(FormLabel, {
              id: "additional-languages-label",
              children: t("label.additional_languages")
            }), /* @__PURE__ */jsxRuntimeExports.jsx(FormControlLabel, {
              control: /* @__PURE__ */jsxRuntimeExports.jsx(Checkbox, {
                disabled: baseLanguage == LANGUAGE.EN || disabled,
                checked: additionalLanguages.indexOf(LANGUAGE.EN) > -1,
                onChange: onAdditionalLanguagesChanged,
                name: LANGUAGE.EN
              }),
              label: t("language.en")
            }), /* @__PURE__ */jsxRuntimeExports.jsx(FormControlLabel, {
              control: /* @__PURE__ */jsxRuntimeExports.jsx(Checkbox, {
                disabled: baseLanguage == LANGUAGE.DE || disabled,
                checked: additionalLanguages.indexOf(LANGUAGE.DE) > -1,
                onChange: onAdditionalLanguagesChanged,
                name: LANGUAGE.DE
              }),
              label: t("language.de")
            }), /* @__PURE__ */jsxRuntimeExports.jsx(FormControlLabel, {
              control: /* @__PURE__ */jsxRuntimeExports.jsx(Checkbox, {
                disabled: baseLanguage == LANGUAGE.AR || disabled,
                checked: additionalLanguages.indexOf(LANGUAGE.AR) > -1,
                onChange: onAdditionalLanguagesChanged,
                name: LANGUAGE.AR
              }),
              label: t("language.ar")
            })]
          });
        });
        var renderInput = function renderInput(props) {
          return /* @__PURE__ */jsxRuntimeExports.jsx(TextField, _objectSpread(_objectSpread({}, props), {}, {
            variant: "outlined"
          }));
        };
        var SurveyActiveFromTo = exports('a', function (_ref2) {
          var surveyActiveFrom = _ref2.surveyActiveFrom,
            surveyActiveTo = _ref2.surveyActiveTo,
            onSurveyActiveFromChanged = _ref2.onSurveyActiveFromChanged,
            onSurveyActiveToChanged = _ref2.onSurveyActiveToChanged,
            disabled = _ref2.disabled;
          var _useTranslation2 = useTranslation("manage"),
            t = _useTranslation2.t;
          return /* @__PURE__ */jsxRuntimeExports.jsxs(LocalizationProvider, {
            dateAdapter: AdapterDayjs,
            children: [/* @__PURE__ */jsxRuntimeExports.jsx(FormLabel, {
              children: t("label.survey_active")
            }), /* @__PURE__ */jsxRuntimeExports.jsx(DatePicker, {
              disabled: disabled,
              label: t("label.from"),
              value: surveyActiveFrom,
              onChange: onSurveyActiveFromChanged,
              renderInput: renderInput
            }), /* @__PURE__ */jsxRuntimeExports.jsx(DatePicker, {
              disabled: disabled,
              label: t("label.to"),
              value: surveyActiveTo,
              onChange: onSurveyActiveToChanged,
              renderInput: renderInput
            })]
          });
        });
        var SURVEY_MODE = exports('c', {
          MIXED: "mixed",
          WEB: "web",
          OFFLINE: "offline"
        });
        var SURVEY_STATUS = exports('S', {
          ACTIVE: "active",
          DRAFT: "draft",
          CLOSED: "closed"
        });
        var NAVIGATION_MODE = exports('N', {
          ALL_IN_ONE: "ALL_IN_ONE",
          GROUP_BY_GROUP: "GROUP_BY_GROUP",
          QUESTION_BY_QUESTION: "QUESTION_BY_QUESTION"
        });
        var SURVEY = exports('b', {
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
        });
      }
    };
  });
})();
