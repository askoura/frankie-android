;
(function () {
  System.register(['./index-legacy-7ea9dd30.js', './index-legacy-b5afa760.js', './index-legacy-5f8fc065.js', './DateUtils-legacy-89eb9ddb.js', './survey-legacy-b920cebb.js', './common-legacy-4bc1ef15.js', './InputLabel-legacy-17368547.js', './Card-legacy-165faae3.js', './FormGroup-legacy-090122b5.js', './TextField-legacy-6c19fbee.js', './Stack-legacy-c1c1bb3c.js', './AuthService-legacy-0ac1bda4.js', './ArrowBack-legacy-44a0a74f.js', './LogoutOutlined-legacy-8c2aad8d.js', './FormControlLabel-legacy-bfc668f7.js', './Checkbox-legacy-7b706655.js', './index-legacy-72166459.js', './DatePicker-legacy-c0586043.js', './InputAdornment-legacy-d731ef96.js'], function (exports, module) {
    'use strict';

    var __vite_style__ = document.createElement('style');
    __vite_style__.textContent = "._mainContainer_1k8r6_1 {\n  margin: auto;\n  max-width: 800px;\n  min-width: 300px;\n}\n\n._createUserCard_1k8r6_7 {\n  padding: 25px;\n}\n\n._blockItem_1k8r6_11 {\n  flex: 1;\n  display: flex;\n  gap: 15px;\n  flex-direction: column;\n}\n\n._errorText_1k8r6_18 {\n  color: #eb5757 !important;\n}\n";
    document.head.appendChild(__vite_style__);
    var jsxRuntimeExports, useNavigate, reactExports, LoadingIndicator, SurveyService, processError, PROCESSED_ERRORS, Header, routes, ProcessedError, localDateToServerDateTime, SURVEY_MODE, LANGUAGE, AdditionalLanguages, SurveyActiveFromTo, useTranslation, Select, MenuItem, Box, Typography, Button, FormControl, InputLabel, FormHelperText, Card, FormGroup, TextField, Stack;
    return {
      setters: [module => {
        jsxRuntimeExports = module.j;
        useNavigate = module.u;
        reactExports = module.r;
        LoadingIndicator = module.d;
        SurveyService = module.S;
        processError = module.p;
        PROCESSED_ERRORS = module.P;
      }, module => {
        Header = module.H;
        routes = module.r;
      }, module => {
        ProcessedError = module.P;
      }, module => {
        localDateToServerDateTime = module.l;
      }, module => {
        SURVEY_MODE = module.c;
        LANGUAGE = module.L;
        AdditionalLanguages = module.A;
        SurveyActiveFromTo = module.a;
      }, module => {
        useTranslation = module.u;
        Select = module.c;
        MenuItem = module.d;
        Box = module.B;
        Typography = module.T;
        Button = module.b;
      }, module => {
        FormControl = module.F;
        InputLabel = module.I;
        FormHelperText = module.a;
      }, module => {
        Card = module.C;
      }, module => {
        FormGroup = module.F;
      }, module => {
        TextField = module.T;
      }, module => {
        Stack = module.S;
      }, null, null, null, null, null, null, null, null],
      execute: function () {
        exports('default', CreateSurvey);
        const mainContainer = "_mainContainer_1k8r6_1";
        const createUserCard = "_createUserCard_1k8r6_7";
        const blockItem = "_blockItem_1k8r6_11";
        const errorText = "_errorText_1k8r6_18";
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
          const {
            t
          } = useTranslation("manage");
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
        const BaseLanguage = ({
          baseLanguage,
          onBaseLanguageChanged,
          disabled
        }) => {
          const {
            t
          } = useTranslation("manage");
          return /* @__PURE__ */jsxRuntimeExports.jsxs(FormControl, {
            fullWidth: true,
            children: [/* @__PURE__ */jsxRuntimeExports.jsx(InputLabel, {
              id: "label-base-language",
              children: t("label.base_language")
            }), /* @__PURE__ */jsxRuntimeExports.jsxs(Select, {
              disabled,
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
          const navigate = useNavigate();
          const {
            t
          } = useTranslation("manage");
          const [processedError, setProcessedError] = reactExports.useState("");
          const [showError, setShowError] = reactExports.useState(false);
          const [loading, setLoading] = reactExports.useState(false);
          const [surveyName, setSurveyName] = reactExports.useState("");
          const [surveyNameError, setSurveyNameError] = reactExports.useState("");
          const [baseLanguage, setBaseLanguage] = reactExports.useState(LANGUAGE.EN);
          const [surveyMode, setSurveyMode] = reactExports.useState(SURVEY_MODE.MIXED);
          const [additionalLanguages, setAdditionalLanguages] = reactExports.useState([]);
          const [surveyActiveFrom, setSurveyActiveFrom] = reactExports.useState(null);
          const [surveyActiveTo, setSurveyActiveTo] = reactExports.useState(null);
          const onSurveyNameChanged = e => {
            setSurveyName(e.target.value);
            setSurveyNameError("");
          };
          const onBaseLanguageChanged = e => {
            setBaseLanguage(e.target.value);
            if (additionalLanguages.includes(e.target.value)) {
              setAdditionalLanguages(additionalLanguages.filter(language => language !== e.target.value));
            }
          };
          const onSurveyModeChanged = e => {
            setSurveyMode(e.target.value);
          };
          const onAdditionalLanguagesChanged = e => {
            if (e.target.checked) {
              setAdditionalLanguages([...additionalLanguages, e.target.name]);
            } else {
              setAdditionalLanguages(additionalLanguages.filter(language => language !== e.target.name));
            }
          };
          const onSurveyActiveFromChanged = value => {
            setSurveyActiveFrom(value.toDate());
          };
          const onSurveyActiveToChanged = value => {
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
              defaultLanguage: {
                code: baseLanguage,
                langName: ""
              },
              usage: surveyMode
            };
            if (additionalLanguages) {
              data.additionalLanguages = additionalLanguages.map(lang => {
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
            SurveyService.createSurvey(data).then(() => {
              goDashboard();
            }).catch(e => {
              const processed = processError(e);
              switch (processed) {
                case PROCESSED_ERRORS.NETWORK_ERR:
                case PROCESSED_ERRORS.BACKEND_DOWN:
                  setShowError(true);
                  setProcessedError(processed);
                  break;
                case PROCESSED_ERRORS.DUPLICATE_SURVEY_NAME:
                  setSurveyNameError(t(`processed_errors.${processed}`));
                  break;
              }
            }).finally(() => {
              setLoading(false);
            });
          };
          return /* @__PURE__ */jsxRuntimeExports.jsxs(Box, {
            className: styles.mainContainer,
            children: [/* @__PURE__ */jsxRuntimeExports.jsx(Header, {}), loading && /* @__PURE__ */jsxRuntimeExports.jsx(LoadingIndicator, {}), showError && /* @__PURE__ */jsxRuntimeExports.jsx(ProcessedError, {
              error: processedError,
              handleClose: () => setShowError(false)
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
                      onBaseLanguageChanged,
                      baseLanguage
                    }), /* @__PURE__ */jsxRuntimeExports.jsx(SurveyMode, {
                      surveyMode,
                      onSurveyModeChanged
                    })]
                  }), /* @__PURE__ */jsxRuntimeExports.jsxs(Box, {
                    className: styles.blockItem,
                    children: [/* @__PURE__ */jsxRuntimeExports.jsx(AdditionalLanguages, {
                      onAdditionalLanguagesChanged,
                      additionalLanguages,
                      baseLanguage
                    }), /* @__PURE__ */jsxRuntimeExports.jsx(SurveyActiveFromTo, {
                      surveyActiveFrom,
                      surveyActiveTo,
                      onSurveyActiveFromChanged,
                      onSurveyActiveToChanged
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
