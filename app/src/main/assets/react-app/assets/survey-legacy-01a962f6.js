;
(function () {
  System.register(['./index-legacy-5baa22df.js', './common-legacy-42d4b65f.js', './InputLabel-legacy-119d4ddb.js', './FormControlLabel-legacy-58a845db.js', './Checkbox-legacy-7559521d.js', './index-legacy-27feb4dd.js', './DatePicker-legacy-b4a4c407.js', './TextField-legacy-76833cd7.js'], function (exports, module) {
    'use strict';

    var jsxRuntimeExports, useTranslation, FormControl, FormLabel, FormControlLabel, Checkbox, AdapterDayjs, LocalizationProvider, DatePicker, TextField;
    return {
      setters: [module => {
        jsxRuntimeExports = module.j;
      }, module => {
        useTranslation = module.u;
      }, module => {
        FormControl = module.F;
        FormLabel = module.b;
      }, module => {
        FormControlLabel = module.F;
      }, module => {
        Checkbox = module.C;
      }, module => {
        AdapterDayjs = module.A;
      }, module => {
        LocalizationProvider = module.L;
        DatePicker = module.D;
      }, module => {
        TextField = module.T;
      }],
      execute: function () {
        const LANGUAGE = exports('L', {
          EN: "en",
          DE: "de",
          AR: "ar"
        });
        const AdditionalLanguages = exports('A', ({
          baseLanguage,
          onAdditionalLanguagesChanged,
          additionalLanguages,
          disabled
        }) => {
          const {
            t
          } = useTranslation("manage");
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
        const renderInput = props => {
          return /* @__PURE__ */jsxRuntimeExports.jsx(TextField, {
            ...props,
            variant: "outlined"
          });
        };
        const SurveyActiveFromTo = exports('a', ({
          surveyActiveFrom,
          surveyActiveTo,
          onSurveyActiveFromChanged,
          onSurveyActiveToChanged,
          disabled
        }) => {
          const {
            t
          } = useTranslation("manage");
          return /* @__PURE__ */jsxRuntimeExports.jsxs(LocalizationProvider, {
            dateAdapter: AdapterDayjs,
            children: [/* @__PURE__ */jsxRuntimeExports.jsx(FormLabel, {
              children: t("label.survey_active")
            }), /* @__PURE__ */jsxRuntimeExports.jsx(DatePicker, {
              disabled,
              label: t("label.from"),
              value: surveyActiveFrom,
              onChange: onSurveyActiveFromChanged,
              renderInput
            }), /* @__PURE__ */jsxRuntimeExports.jsx(DatePicker, {
              disabled,
              label: t("label.to"),
              value: surveyActiveTo,
              onChange: onSurveyActiveToChanged,
              renderInput
            })]
          });
        });
        const SURVEY_MODE = exports('c', {
          MIXED: "mixed",
          WEB: "web",
          OFFLINE: "offline"
        });
        const SURVEY_STATUS = exports('S', {
          ACTIVE: "active",
          DRAFT: "draft",
          CLOSED: "closed"
        });
        const NAVIGATION_MODE = exports('N', {
          ALL_IN_ONE: "ALL_IN_ONE",
          GROUP_BY_GROUP: "GROUP_BY_GROUP",
          QUESTION_BY_QUESTION: "QUESTION_BY_QUESTION"
        });
        const SURVEY = exports('b', {
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
