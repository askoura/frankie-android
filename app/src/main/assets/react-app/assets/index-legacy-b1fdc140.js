;
(function () {
  System.register(['./index-legacy-23e2ff21.js', './survey-legacy-72711e1b.js', './common-legacy-594d3ceb.js', './index-legacy-ad6b4a0c.js', './InputLabel-legacy-89265e0c.js', './FormControlLabel-legacy-5ddd9e99.js', './Checkbox-legacy-eed7af13.js', './DatePicker-legacy-c284de02.js', './TextField-legacy-ae30defc.js'], function (exports, module) {
    'use strict';

    var __vite_style__ = document.createElement('style');
    __vite_style__.textContent = "._closeBtn_nrxmn_1 {\n  right: 5px;\n  top: 5px;\n  z-index: 1000;\n}\n\n._infoOutlinedIcon_nrxmn_7 {\n  width: 16px !important;\n}\n\n._infoOutlinedIconContainer_nrxmn_11 {\n  padding: 3px;\n  height: 20px;\n  vertical-align: top\n}\n\n._contetContainer_nrxmn_17 {\n  width: 100%;\n  height: 100%;\n  border: 0;\n}";
    document.head.appendChild(__vite_style__);
    var requireCreateSvgIcon, interopRequireDefaultExports, jsxRuntimeExports, reactExports, default_1$1, IconButton, Box, useTranslation, Drawer, AdapterDayjs, FormControl, FormLabel, FormHelperText, FormControlLabel, Checkbox, LocalizationProvider, DatePicker, TextField;
    return {
      setters: [module => {
        requireCreateSvgIcon = module.g;
        interopRequireDefaultExports = module.i;
        jsxRuntimeExports = module.j;
        reactExports = module.r;
      }, module => {
        default_1$1 = module.d;
      }, module => {
        IconButton = module.a;
        Box = module.B;
        useTranslation = module.u;
      }, module => {
        Drawer = module.D;
        AdapterDayjs = module.A;
      }, module => {
        FormControl = module.F;
        FormLabel = module.b;
        FormHelperText = module.a;
      }, module => {
        FormControlLabel = module.F;
      }, module => {
        Checkbox = module.C;
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
        var InfoOutlined = {};
        var _interopRequireDefault = interopRequireDefaultExports;
        Object.defineProperty(InfoOutlined, "__esModule", {
          value: true
        });
        var default_1 = InfoOutlined.default = void 0;
        var _createSvgIcon = _interopRequireDefault(requireCreateSvgIcon());
        var _jsxRuntime = jsxRuntimeExports;
        var _default = (0, _createSvgIcon.default)( /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
          d: "M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
        }), 'InfoOutlined');
        default_1 = InfoOutlined.default = _default;
        const closeBtn = "_closeBtn_nrxmn_1";
        const infoOutlinedIcon = "_infoOutlinedIcon_nrxmn_7";
        const infoOutlinedIconContainer = "_infoOutlinedIconContainer_nrxmn_11";
        const contetContainer = "_contetContainer_nrxmn_17";
        const styles = {
          closeBtn: closeBtn,
          infoOutlinedIcon: infoOutlinedIcon,
          infoOutlinedIconContainer: infoOutlinedIconContainer,
          contetContainer: contetContainer
        };
        const drawerWidth = 400;
        const EducationPanel = ({
          htmlFilePath
        }) => {
          const [open, setOpen] = reactExports.useState(false);
          const iframeRef = reactExports.useRef();
          const handleDrawerOpen = () => {
            setOpen(true);
          };
          const handleDrawerClose = () => {
            setOpen(false);
          };
          const removeIframeScrollBars = () => {};
          return /* @__PURE__ */jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
            children: [/* @__PURE__ */jsxRuntimeExports.jsx(IconButton, {
              className: styles.infoOutlinedIconContainere,
              sx: {
                padding: "3px",
                height: "20px",
                verticalAlign: "top"
              },
              onClick: handleDrawerOpen,
              children: /* @__PURE__ */jsxRuntimeExports.jsx(default_1, {
                className: styles.infoOutlinedIcon
              })
            }), /* @__PURE__ */jsxRuntimeExports.jsx(Drawer, {
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
              children: /* @__PURE__ */jsxRuntimeExports.jsxs(Box, {
                sx: {
                  padding: "50px 16px",
                  width: "100vh - 32px",
                  height: "100%",
                  overflow: "hidden"
                },
                children: [/* @__PURE__ */jsxRuntimeExports.jsx(IconButton, {
                  onClick: handleDrawerClose,
                  sx: {
                    position: "absolute"
                  },
                  className: styles.closeBtn,
                  children: /* @__PURE__ */jsxRuntimeExports.jsx(default_1$1, {})
                }), /* @__PURE__ */jsxRuntimeExports.jsx("iframe", {
                  className: styles.contetContainer,
                  ref: iframeRef,
                  onLoad: removeIframeScrollBars,
                  src: htmlFilePath
                })]
              })
            })]
          });
        };
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
            children: [/* @__PURE__ */jsxRuntimeExports.jsxs(FormLabel, {
              id: "additional-languages-label",
              children: [t("label.additional_languages"), /* @__PURE__ */jsxRuntimeExports.jsx(EducationPanel, {
                htmlFilePath: "/education/createSurvey/additionalLanguages/en.html"
              })]
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
        const SurveyActiveFromTo = exports('S', ({
          error,
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
            }), error && /* @__PURE__ */jsxRuntimeExports.jsx(FormHelperText, {
              style: {
                color: "red"
              },
              children: error
            })]
          });
        });
      }
    };
  });
})();
