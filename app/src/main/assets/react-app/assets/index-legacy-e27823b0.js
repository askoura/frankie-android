;
(function () {
  function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
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
  System.register(['./index-legacy-13317357.js', './index-legacy-b09b1877.js', './index-legacy-fa9f22d6.js', './index-legacy-0169b194.js', './survey-legacy-2cadd738.js', './roles-legacy-3bb02793.js', './DateUtils-legacy-9d062644.js', './common-legacy-88dbaa5f.js', './TextField-legacy-4282ffba.js', './InputLabel-legacy-df146838.js', './useDispatch-legacy-29f3a57f.js', './Stack-legacy-6aa6060a.js', './common-legacy-5795a1a9.js', './FormControlLabel-legacy-0cf63f54.js', './Checkbox-legacy-06ca3742.js', './index-legacy-1361522a.js', './UserService-legacy-65c9fb37.js', './TableRow-legacy-847ac79f.js', './AuthService-legacy-ffa71593.js', './ArrowBack-legacy-43da8595.js', './LogoutOutlined-legacy-6e704e74.js', './index-legacy-92a24172.js', './DatePicker-legacy-e24edd41.js', './InputAdornment-legacy-8e4bc3eb.js'], function (exports, module) {
    'use strict';

    var __vite_style__ = document.createElement('style');
    __vite_style__.textContent = "._mainContainer_6puh5_1 {\n  margin: auto;\n  min-width: 300px;\n}\n\n._blockItem_6puh5_6 {\n  flex: 1;\n  display: flex;\n  gap: 15px;\n  flex-direction: column;\n}\n\n._errorText_6puh5_13 {\n  color: #eb5757 !important;\n}\n\n._saveNameButton_6puh5_17 {\n  vertical-align: bottom;\n}._wrapper_ar1uh_1 {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  background: #ffffff;\n  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);\n  border-radius: 8px;\n  padding: 20px;\n}\n\n._action_ar1uh_12 {\n  text-align: end;\n  margin-top: 16px;\n}\n\n._errorText_ar1uh_17 {\n  color: #eb5757 !important;\n}\n._mainContainer_1gfdk_1 {\n  margin: auto;\n  max-width: 800px;\n  min-width: 300px;\n}\n\n._loadingWrapper_1gfdk_7 {\n  width: 100%;\n  height: 100%;\n  text-align: center;\n  padding-top: 100px;\n}\n._savingProgress_zztu3_1 {\n  margin: 0px 8px !important;\n  width: 16px !important;\n  height: 16px !important;\n}\n._mainContainer_1d68k_1 {\n  margin: auto;\n  min-width: 300px;\n}\n\n._linkCopy_1d68k_6 {\n  display: flex;\n  align-items: center;\n  gap: 20px;\n}\n\n._socialSharing_1d68k_12,\n._defaultUrl_1d68k_13 {\n  display: flex;\n  align-items: center;\n  gap: 20px;\n}\n\n._socialLink_1d68k_19 {\n  display: flex;\n  gap: 15px;\n}\n\n._iconShareFb_1d68k_24 {\n  fill: #3c5997 !important;\n}\n._iconShareTw_1d68k_27 {\n  fill: #05aced !important;\n}\n\n._iconShareLn_1d68k_31 {\n  fill: #027fb1 !important;\n}\n._mainContainer_14lhy_1 {\n  margin: auto;\n  min-width: 300px;\n}\n\n._wrap_14lhy_6 {\n  max-width: 400px;\n}\n\n._formControlCheckBox_14lhy_10 {\n  display: flex;\n  flex-direction: column;\n  margin-top: 20px;\n}\n._mainContainer_g22zs_1 {\n  margin: auto;\n  min-width: 300px;\n}\n\n._formControlCheckBox_g22zs_6 {\n  display: flex;\n  flex-direction: column;\n}\n._mainContainer_g22zs_1 {\n  margin: auto;\n  min-width: 300px;\n}\n\n._formControlCheckBox_g22zs_6 {\n  display: flex;\n  flex-direction: column;\n}\n._wrapper_1um7m_1 {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  background: #ffffff;\n  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);\n  border-radius: 8px;\n  padding: 20px;\n  min-width: 300px;\n}\n\n._action_1um7m_13 {\n  text-align: center;\n  margin-top: 16px;\n}\n\n._userBlock_1um7m_18 {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n._mainContainer_mjjng_1 {\n  margin: auto;\n  min-width: 300px;\n}\n._mainContainer_1cgmo_1 {\n  margin: auto;\n  min-width: 300px;\n  min-height: 50px;\n}\n";
    document.head.appendChild(__vite_style__);
    var useNavigate, useSelector, reactExports, jsxRuntimeExports, LoadingIndicator, SurveyService, processError, PROCESSED_ERRORS, surveyAttributeChangedImmediate, surveyAttributeChanged, surveyReceived, CircularProgress, requireCreateSvgIcon, interopRequireDefaultExports, React, permissionsLoading, permissionsReceived, onError, onErrorSeen, classNames, default_1$3, Accordion, AccordionSummary, default_1$4, AccordionDetails, routes, Header, ProcessedError, SURVEY_STATUS, AdditionalLanguages, SurveyActiveFromTo, NAVIGATION_MODE, SURVEY, isSurveyAdmin, isSurveyor, localDateToServerDateTime, useTranslation, Modal, Box, Typography, Button, Snackbar, Alert, rtlLanguage, IconButton, Select, MenuItem, Paper, Backdrop, TextField, FormHelperText, FormControl, InputLabel, useDispatch, Stack, sharingUrl, FormControlLabel, Checkbox, Delete, UserDelete, UserService, TableContainer, Table, TableHead, TableRow, TableCell, TableBody;
    return {
      setters: [function (module) {
        useNavigate = module.u;
        useSelector = module.b;
        reactExports = module.r;
        jsxRuntimeExports = module.j;
        LoadingIndicator = module.d;
        SurveyService = module.S;
        processError = module.p;
        PROCESSED_ERRORS = module.P;
        surveyAttributeChangedImmediate = module.s;
        surveyAttributeChanged = module.e;
        surveyReceived = module.f;
        CircularProgress = module.C;
        requireCreateSvgIcon = module.g;
        interopRequireDefaultExports = module.i;
        React = module.R;
        permissionsLoading = module.h;
        permissionsReceived = module.k;
        onError = module.o;
        onErrorSeen = module.l;
      }, function (module) {
        classNames = module.c;
        default_1$3 = module.d;
        Accordion = module.A;
        AccordionSummary = module.a;
        default_1$4 = module.b;
        AccordionDetails = module.e;
      }, function (module) {
        routes = module.r;
        Header = module.H;
      }, function (module) {
        ProcessedError = module.P;
      }, function (module) {
        SURVEY_STATUS = module.S;
        AdditionalLanguages = module.A;
        SurveyActiveFromTo = module.a;
        NAVIGATION_MODE = module.N;
        SURVEY = module.b;
      }, function (module) {
        isSurveyAdmin = module.i;
        isSurveyor = module.a;
      }, function (module) {
        localDateToServerDateTime = module.l;
      }, function (module) {
        useTranslation = module.u;
        Modal = module.M;
        Box = module.B;
        Typography = module.T;
        Button = module.b;
        Snackbar = module.S;
        Alert = module.A;
        rtlLanguage = module.r;
        IconButton = module.a;
        Select = module.c;
        MenuItem = module.d;
        Paper = module.P;
        Backdrop = module.e;
      }, function (module) {
        TextField = module.T;
      }, function (module) {
        FormHelperText = module.a;
        FormControl = module.F;
        InputLabel = module.I;
      }, function (module) {
        useDispatch = module.u;
      }, function (module) {
        Stack = module.S;
      }, function (module) {
        sharingUrl = module.s;
      }, function (module) {
        FormControlLabel = module.F;
      }, function (module) {
        Checkbox = module.C;
      }, function (module) {
        Delete = module.D;
        UserDelete = module.U;
      }, function (module) {
        UserService = module.U;
      }, function (module) {
        TableContainer = module.T;
        Table = module.a;
        TableHead = module.b;
        TableRow = module.c;
        TableCell = module.d;
        TableBody = module.e;
      }, null, null, null, null, null, null],
      execute: function execute() {
        exports('default', EditSurvey);
        var mainContainer$7 = "_mainContainer_6puh5_1";
        var blockItem = "_blockItem_6puh5_6";
        var errorText$1 = "_errorText_6puh5_13";
        var saveNameButton = "_saveNameButton_6puh5_17";
        var styles$a = {
          mainContainer: mainContainer$7,
          blockItem: blockItem,
          errorText: errorText$1,
          saveNameButton: saveNameButton
        };
        var wrapper$1 = "_wrapper_ar1uh_1";
        var action$1 = "_action_ar1uh_12";
        var errorText = "_errorText_ar1uh_17";
        var styles$9 = {
          wrapper: wrapper$1,
          action: action$1,
          errorText: errorText
        };
        var SurveyClone = function SurveyClone(_ref) {
          var open = _ref.open,
            onClose = _ref.onClose;
          var _useTranslation = useTranslation("manage"),
            t = _useTranslation.t;
          var navigate = useNavigate();
          var survey = useSelector(function (state) {
            return state.editState.survey;
          });
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
            newSurveyName = _reactExports$useStat8[0],
            setNewSurveyName = _reactExports$useStat8[1];
          var _reactExports$useStat9 = reactExports.useState(""),
            _reactExports$useStat10 = _slicedToArray(_reactExports$useStat9, 2),
            newSurveyNameError = _reactExports$useStat10[0],
            setNewSurveyNameError = _reactExports$useStat10[1];
          var onSurveyNameChanged = function onSurveyNameChanged(e) {
            setNewSurveyName(e.target.value);
            setNewSurveyNameError("");
          };
          var goDashboard = function goDashboard() {
            navigate(routes.dashboard);
          };
          var validate = function validate() {
            setNewSurveyNameError("");
            if (newSurveyName.length == 0) {
              setNewSurveyNameError(t("survey_required"));
              return false;
            }
            if (survey.name === newSurveyName) {
              setNewSurveyNameError(t("processed_errors.duplicate_survey_name"));
              return false;
            }
            return true;
          };
          var cloneSurvey = function cloneSurvey() {
            if (!validate()) {
              return;
            }
            setLoading(true);
            var data = {
              name: newSurveyName
            };
            SurveyService.cloneSurvey(survey.id, data).then(function () {
              onClose();
              goDashboard();
            }).catch(function (e) {
              var processed = processError(e);
              switch (processed) {
                case PROCESSED_ERRORS.NETWORK_ERR:
                case PROCESSED_ERRORS.UNIDENTIFIED_ERROR:
                case PROCESSED_ERRORS.BACKEND_DOWN:
                  setShowError(true);
                  setProcessedError(processed);
                  break;
                case PROCESSED_ERRORS.DUPLICATE_SURVEY_NAME:
                  setNewSurveyNameError(t("processed_errors.".concat(processed)));
                  break;
              }
            }).finally(function () {
              setLoading(false);
            });
          };
          return /* @__PURE__ */jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
            children: [loading && /* @__PURE__ */jsxRuntimeExports.jsx(LoadingIndicator, {}), showError && /* @__PURE__ */jsxRuntimeExports.jsx(ProcessedError, {
              error: processedError,
              handleClose: function handleClose() {
                return setShowError(false);
              }
            }), /* @__PURE__ */jsxRuntimeExports.jsx(Modal, {
              sx: {
                ".MuiBackdrop-root": {
                  backgroundColor: "rgba(0, 0, 0, 0.3)"
                }
              },
              open: open,
              onClose: onClose,
              children: /* @__PURE__ */jsxRuntimeExports.jsxs(Box, {
                className: styles$9.wrapper,
                children: [/* @__PURE__ */jsxRuntimeExports.jsx(Typography, {
                  children: t("edit_survey.clone_survey")
                }), /* @__PURE__ */jsxRuntimeExports.jsx(TextField, {
                  error: newSurveyNameError.length > 0,
                  sx: {
                    minWidth: "400px"
                  },
                  required: true,
                  value: newSurveyName,
                  label: t("label.new_survey_name"),
                  onChange: onSurveyNameChanged,
                  variant: "standard"
                }), newSurveyNameError && /* @__PURE__ */jsxRuntimeExports.jsx(FormHelperText, {
                  className: styles$9.errorText,
                  children: newSurveyNameError
                }), /* @__PURE__ */jsxRuntimeExports.jsxs(Box, {
                  className: styles$9.action,
                  children: [/* @__PURE__ */jsxRuntimeExports.jsx(Button, {
                    onClick: onClose,
                    children: t("action_btn.cancel")
                  }), /* @__PURE__ */jsxRuntimeExports.jsx(Button, {
                    onClick: cloneSurvey,
                    children: t("action_btn.save")
                  })]
                })]
              })
            })]
          });
        };
        function EditSurveyGeneral() {
          var navigate = useNavigate();
          var _useTranslation2 = useTranslation("manage"),
            t = _useTranslation2.t;
          var survey = useSelector(function (state) {
            return state.editState.survey;
          });
          var surveyNameError = useSelector(function (state) {
            return state.editState.error == PROCESSED_ERRORS.DUPLICATE_SURVEY_NAME;
          });
          var _reactExports$useStat11 = reactExports.useState(""),
            _reactExports$useStat12 = _slicedToArray(_reactExports$useStat11, 2),
            processedError = _reactExports$useStat12[0],
            setProcessedError = _reactExports$useStat12[1];
          var _reactExports$useStat13 = reactExports.useState(survey.name),
            _reactExports$useStat14 = _slicedToArray(_reactExports$useStat13, 2),
            surveyName = _reactExports$useStat14[0],
            setSurveyName = _reactExports$useStat14[1];
          var _reactExports$useStat15 = reactExports.useState(false),
            _reactExports$useStat16 = _slicedToArray(_reactExports$useStat15, 2),
            showError = _reactExports$useStat16[0],
            setShowError = _reactExports$useStat16[1];
          var _reactExports$useStat17 = reactExports.useState(false),
            _reactExports$useStat18 = _slicedToArray(_reactExports$useStat17, 2),
            loading = _reactExports$useStat18[0],
            setLoading = _reactExports$useStat18[1];
          var onSurveyNameChanged = function onSurveyNameChanged(e) {
            setSurveyName(e.target.value);
          };
          var dispatch = useDispatch();
          var isDisabled = !isSurveyAdmin() || survey.status == SURVEY_STATUS.CLOSED;
          var saveSurveyName = function saveSurveyName() {
            dispatch(surveyAttributeChangedImmediate({
              key: "name",
              value: surveyName
            }));
          };
          var onAdditionalLanguagesChanged = function onAdditionalLanguagesChanged(e) {
            var key = "additionalLanguages";
            if (e.target.checked) {
              dispatch(surveyAttributeChanged({
                key: key,
                value: [].concat(_toConsumableArray(survey.additionalLanguages), [{
                  code: e.target.name,
                  langName: ""
                }])
              }));
            } else {
              dispatch(surveyAttributeChanged({
                key: key,
                value: _toConsumableArray(survey.additionalLanguages.filter(function (language) {
                  return language.code !== e.target.name;
                }))
              }));
            }
          };
          var onSurveyActiveFromChanged = function onSurveyActiveFromChanged(value) {
            dispatch(surveyAttributeChanged({
              key: "startDate",
              value: localDateToServerDateTime(value.toDate())
            }));
          };
          var onSurveyActiveToChanged = function onSurveyActiveToChanged(value) {
            dispatch(surveyAttributeChanged({
              key: "endDate",
              value: localDateToServerDateTime(value.toDate())
            }));
          };
          var goDashboard = function goDashboard() {
            navigate(routes.dashboard);
          };
          var closeSurvey = function closeSurvey() {
            setLoading(true);
            SurveyService.closeSurvey(survey.id).then(function (data) {
              dispatch(surveyReceived(data));
            }).catch(function (e) {
              var processed = processError(e);
              switch (processed) {
                case PROCESSED_ERRORS.NETWORK_ERR:
                case PROCESSED_ERRORS.BACKEND_DOWN:
                  setShowError(true);
                  setProcessedError(processed);
                  break;
              }
            }).finally(function () {
              setLoading(false);
            });
          };
          var onDelete = function onDelete() {
            if (window.confirm(t("edit_survey.delete_survey", {
              survey_name: survey.name
            }))) {
              deleteSurvey(survey.id);
            }
          };
          var deleteSurvey = function deleteSurvey() {
            setLoading(true);
            SurveyService.deleteSurvey(survey.id).then(function () {
              goDashboard();
            }).catch(function (e) {
              var processed = processError(e);
              switch (processed) {
                case PROCESSED_ERRORS.NETWORK_ERR:
                case PROCESSED_ERRORS.BACKEND_DOWN:
                  setShowError(true);
                  setProcessedError(processed);
                  break;
              }
            }).finally(function () {
              setLoading(false);
            });
          };
          var _reactExports$useStat19 = reactExports.useState(false),
            _reactExports$useStat20 = _slicedToArray(_reactExports$useStat19, 2),
            openSurveyClone = _reactExports$useStat20[0],
            setOpenSurveyClone = _reactExports$useStat20[1];
          return /* @__PURE__ */jsxRuntimeExports.jsxs(Box, {
            className: styles$a.mainContainer,
            children: [loading && /* @__PURE__ */jsxRuntimeExports.jsx(LoadingIndicator, {}), showError && /* @__PURE__ */jsxRuntimeExports.jsx(ProcessedError, {
              error: processedError,
              handleClose: function handleClose() {
                return setShowError(false);
              }
            }), /* @__PURE__ */jsxRuntimeExports.jsxs(Box, {
              className: styles$a.createUserCard,
              children: [/* @__PURE__ */jsxRuntimeExports.jsx(TextField, {
                disabled: isDisabled,
                sx: {
                  maxWidth: "400px"
                },
                error: surveyNameError,
                required: true,
                value: surveyName,
                id: "surveyName",
                label: t("label.survey_name"),
                name: "surveyName",
                onChange: onSurveyNameChanged,
                variant: "standard"
              }), /* @__PURE__ */jsxRuntimeExports.jsx(Button, {
                onClick: saveSurveyName,
                disabled: survey.name == surveyName,
                className: styles$a.saveNameButton,
                children: t("action_btn.save")
              }), surveyNameError && /* @__PURE__ */jsxRuntimeExports.jsx(FormHelperText, {
                className: styles$a.errorText,
                children: t("processed_errors.duplicate_survey_name")
              }), /* @__PURE__ */jsxRuntimeExports.jsxs(Stack, {
                flexDirection: "row",
                sx: {
                  mt: "40px"
                },
                children: [/* @__PURE__ */jsxRuntimeExports.jsxs(Box, {
                  className: styles$a.blockItem,
                  children: [/* @__PURE__ */jsxRuntimeExports.jsxs(Box, {
                    children: [/* @__PURE__ */jsxRuntimeExports.jsxs(Box, {
                      component: "span",
                      sx: {
                        fontWeight: 700
                      },
                      children: [t("label.base_language"), ": "]
                    }), survey.defaultLanguage.langName]
                  }), /* @__PURE__ */jsxRuntimeExports.jsxs(Box, {
                    children: [/* @__PURE__ */jsxRuntimeExports.jsxs(Box, {
                      component: "span",
                      sx: {
                        fontWeight: 700
                      },
                      children: [t("label.survey_mode"), ": "]
                    }), t("mode.".concat(survey.usage))]
                  }), /* @__PURE__ */jsxRuntimeExports.jsxs(Box, {
                    children: [/* @__PURE__ */jsxRuntimeExports.jsxs(Box, {
                      component: "span",
                      sx: {
                        fontWeight: 700
                      },
                      children: [t("edit_survey.status"), ": "]
                    }), t("status.".concat(survey.status))]
                  }), /* @__PURE__ */jsxRuntimeExports.jsx("br", {}), /* @__PURE__ */jsxRuntimeExports.jsxs(Box, {
                    sx: {
                      display: "flex",
                      gap: "10px"
                    },
                    children: [survey.status == SURVEY_STATUS.ACTIVE && /* @__PURE__ */jsxRuntimeExports.jsx(Button, {
                      disabled: isDisabled,
                      onClick: closeSurvey,
                      sx: {
                        border: "1px solid green",
                        color: "#3c3c3c"
                      },
                      children: t("action_btn.close")
                    }), /* @__PURE__ */jsxRuntimeExports.jsx(Button, {
                      onClick: function onClick() {
                        setOpenSurveyClone(true);
                      },
                      sx: {
                        border: "1px solid blue",
                        color: "#3c3c3c"
                      },
                      children: t("action_btn.clone")
                    }), survey.status != SURVEY_STATUS.ACTIVE && /* @__PURE__ */jsxRuntimeExports.jsx(Button, {
                      onClick: onDelete,
                      sx: {
                        border: "1px solid red",
                        color: "#3c3c3c"
                      },
                      children: t("action_btn.delete")
                    })]
                  })]
                }), /* @__PURE__ */jsxRuntimeExports.jsxs(Box, {
                  className: styles$a.blockItem,
                  children: [/* @__PURE__ */jsxRuntimeExports.jsx(AdditionalLanguages, {
                    disabled: isDisabled,
                    onAdditionalLanguagesChanged: onAdditionalLanguagesChanged,
                    additionalLanguages: survey.additionalLanguages.map(function (lang) {
                      return lang.code;
                    }),
                    baseLanguage: survey.defaultLanguage.code
                  }), /* @__PURE__ */jsxRuntimeExports.jsx("br", {}), /* @__PURE__ */jsxRuntimeExports.jsx(SurveyActiveFromTo, {
                    disabled: isDisabled,
                    surveyActiveFrom: survey.startDate,
                    surveyActiveTo: survey.endDate,
                    onSurveyActiveFromChanged: onSurveyActiveFromChanged,
                    onSurveyActiveToChanged: onSurveyActiveToChanged
                  })]
                })]
              })]
            }), /* @__PURE__ */jsxRuntimeExports.jsx(SurveyClone, {
              open: openSurveyClone,
              onClose: function onClose() {
                setOpenSurveyClone(false);
              }
            })]
          });
        }
        var mainContainer$6 = "_mainContainer_1gfdk_1";
        var loadingWrapper = "_loadingWrapper_1gfdk_7";
        var styles$8 = {
          mainContainer: mainContainer$6,
          loadingWrapper: loadingWrapper
        };
        var savingProgress = "_savingProgress_zztu3_1";
        var styles$7 = {
          savingProgress: savingProgress
        };
        function EditingSurvey() {
          var isSaving = useSelector(function (state) {
            return state.editState.isSaving;
          });
          return /* @__PURE__ */jsxRuntimeExports.jsx(Snackbar, {
            open: isSaving,
            children: /* @__PURE__ */jsxRuntimeExports.jsxs(Alert, {
              severity: "warning",
              children: ["Saving Survey...", " ", /* @__PURE__ */jsxRuntimeExports.jsx(CircularProgress, {
                className: styles$7.savingProgress,
                color: "warning"
              })]
            })
          });
        }
        var Facebook = {};
        var _interopRequireDefault$2 = interopRequireDefaultExports;
        Object.defineProperty(Facebook, "__esModule", {
          value: true
        });
        var default_1$2 = Facebook.default = void 0;
        _interopRequireWildcard$2(reactExports);
        var _createSvgIcon$2 = _interopRequireDefault$2(requireCreateSvgIcon());
        var _jsxRuntime$2 = jsxRuntimeExports;
        function _getRequireWildcardCache$2(nodeInterop) {
          if (typeof WeakMap !== "function") return null;
          var cacheBabelInterop = new WeakMap();
          var cacheNodeInterop = new WeakMap();
          return (_getRequireWildcardCache$2 = function _getRequireWildcardCache$2(nodeInterop) {
            return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
          })(nodeInterop);
        }
        function _interopRequireWildcard$2(obj, nodeInterop) {
          if (!nodeInterop && obj && obj.__esModule) {
            return obj;
          }
          if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
            return {
              default: obj
            };
          }
          var cache = _getRequireWildcardCache$2(nodeInterop);
          if (cache && cache.has(obj)) {
            return cache.get(obj);
          }
          var newObj = {};
          var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var key in obj) {
            if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
              var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
              if (desc && (desc.get || desc.set)) {
                Object.defineProperty(newObj, key, desc);
              } else {
                newObj[key] = obj[key];
              }
            }
          }
          newObj.default = obj;
          if (cache) {
            cache.set(obj, newObj);
          }
          return newObj;
        }
        var _default$2 = (0, _createSvgIcon$2.default)( /*#__PURE__*/(0, _jsxRuntime$2.jsx)("path", {
          d: "M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2m13 2h-2.5A3.5 3.5 0 0 0 12 8.5V11h-2v3h2v7h3v-7h3v-3h-3V9a1 1 0 0 1 1-1h2V5z"
        }), 'Facebook');
        default_1$2 = Facebook.default = _default$2;
        var LinkedIn = {};
        var _interopRequireDefault$1 = interopRequireDefaultExports;
        Object.defineProperty(LinkedIn, "__esModule", {
          value: true
        });
        var default_1$1 = LinkedIn.default = void 0;
        _interopRequireWildcard$1(reactExports);
        var _createSvgIcon$1 = _interopRequireDefault$1(requireCreateSvgIcon());
        var _jsxRuntime$1 = jsxRuntimeExports;
        function _getRequireWildcardCache$1(nodeInterop) {
          if (typeof WeakMap !== "function") return null;
          var cacheBabelInterop = new WeakMap();
          var cacheNodeInterop = new WeakMap();
          return (_getRequireWildcardCache$1 = function _getRequireWildcardCache$1(nodeInterop) {
            return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
          })(nodeInterop);
        }
        function _interopRequireWildcard$1(obj, nodeInterop) {
          if (!nodeInterop && obj && obj.__esModule) {
            return obj;
          }
          if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
            return {
              default: obj
            };
          }
          var cache = _getRequireWildcardCache$1(nodeInterop);
          if (cache && cache.has(obj)) {
            return cache.get(obj);
          }
          var newObj = {};
          var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var key in obj) {
            if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
              var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
              if (desc && (desc.get || desc.set)) {
                Object.defineProperty(newObj, key, desc);
              } else {
                newObj[key] = obj[key];
              }
            }
          }
          newObj.default = obj;
          if (cache) {
            cache.set(obj, newObj);
          }
          return newObj;
        }
        var _default$1 = (0, _createSvgIcon$1.default)( /*#__PURE__*/(0, _jsxRuntime$1.jsx)("path", {
          d: "M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"
        }), 'LinkedIn');
        default_1$1 = LinkedIn.default = _default$1;
        var Twitter = {};
        var _interopRequireDefault = interopRequireDefaultExports;
        Object.defineProperty(Twitter, "__esModule", {
          value: true
        });
        var default_1 = Twitter.default = void 0;
        _interopRequireWildcard(reactExports);
        var _createSvgIcon = _interopRequireDefault(requireCreateSvgIcon());
        var _jsxRuntime = jsxRuntimeExports;
        function _getRequireWildcardCache(nodeInterop) {
          if (typeof WeakMap !== "function") return null;
          var cacheBabelInterop = new WeakMap();
          var cacheNodeInterop = new WeakMap();
          return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) {
            return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
          })(nodeInterop);
        }
        function _interopRequireWildcard(obj, nodeInterop) {
          if (!nodeInterop && obj && obj.__esModule) {
            return obj;
          }
          if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
            return {
              default: obj
            };
          }
          var cache = _getRequireWildcardCache(nodeInterop);
          if (cache && cache.has(obj)) {
            return cache.get(obj);
          }
          var newObj = {};
          var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var key in obj) {
            if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
              var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
              if (desc && (desc.get || desc.set)) {
                Object.defineProperty(newObj, key, desc);
              } else {
                newObj[key] = obj[key];
              }
            }
          }
          newObj.default = obj;
          if (cache) {
            cache.set(obj, newObj);
          }
          return newObj;
        }
        var _default = (0, _createSvgIcon.default)( /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
          d: "M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"
        }), 'Twitter');
        default_1 = Twitter.default = _default;
        function objectToGetParams(object) {
          var params = Object.entries(object).filter(function (_a) {
            var value = _a[1];
            return value !== undefined && value !== null;
          }).map(function (_a) {
            var key = _a[0],
              value = _a[1];
            return "".concat(encodeURIComponent(key), "=").concat(encodeURIComponent(String(value)));
          });
          return params.length > 0 ? "?".concat(params.join('&')) : '';
        }
        var __extends$1 = globalThis && globalThis.__extends || function () {
          var _extendStatics = function extendStatics(d, b) {
            _extendStatics = Object.setPrototypeOf || {
              __proto__: []
            } instanceof Array && function (d, b) {
              d.__proto__ = b;
            } || function (d, b) {
              for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
            };
            return _extendStatics(d, b);
          };
          return function (d, b) {
            if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
            _extendStatics(d, b);
            function __() {
              this.constructor = d;
            }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
          };
        }();
        var __assign$1 = globalThis && globalThis.__assign || function () {
          __assign$1 = Object.assign || function (t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
              s = arguments[i];
              for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
          };
          return __assign$1.apply(this, arguments);
        };
        var __awaiter = globalThis && globalThis.__awaiter || function (thisArg, _arguments, P, generator) {
          function adopt(value) {
            return value instanceof P ? value : new P(function (resolve) {
              resolve(value);
            });
          }
          return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) {
              try {
                step(generator.next(value));
              } catch (e) {
                reject(e);
              }
            }
            function rejected(value) {
              try {
                step(generator["throw"](value));
              } catch (e) {
                reject(e);
              }
            }
            function step(result) {
              result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
            }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
          });
        };
        var __generator = globalThis && globalThis.__generator || function (thisArg, body) {
          var _ = {
              label: 0,
              sent: function sent() {
                if (t[0] & 1) throw t[1];
                return t[1];
              },
              trys: [],
              ops: []
            },
            f,
            y,
            t,
            g;
          return g = {
            next: verb(0),
            "throw": verb(1),
            "return": verb(2)
          }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
            return this;
          }), g;
          function verb(n) {
            return function (v) {
              return step([n, v]);
            };
          }
          function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
              if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
              if (y = 0, t) op = [op[0] & 2, t.value];
              switch (op[0]) {
                case 0:
                case 1:
                  t = op;
                  break;
                case 4:
                  _.label++;
                  return {
                    value: op[1],
                    done: false
                  };
                case 5:
                  _.label++;
                  y = op[1];
                  op = [0];
                  continue;
                case 7:
                  op = _.ops.pop();
                  _.trys.pop();
                  continue;
                default:
                  if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                    _ = 0;
                    continue;
                  }
                  if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                    _.label = op[1];
                    break;
                  }
                  if (op[0] === 6 && _.label < t[1]) {
                    _.label = t[1];
                    t = op;
                    break;
                  }
                  if (t && _.label < t[2]) {
                    _.label = t[2];
                    _.ops.push(op);
                    break;
                  }
                  if (t[2]) _.ops.pop();
                  _.trys.pop();
                  continue;
              }
              op = body.call(thisArg, _);
            } catch (e) {
              op = [6, e];
              y = 0;
            } finally {
              f = t = 0;
            }
            if (op[0] & 5) throw op[1];
            return {
              value: op[0] ? op[1] : void 0,
              done: true
            };
          }
        };
        var __rest = globalThis && globalThis.__rest || function (s, e) {
          var t = {};
          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
          if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
          }
          return t;
        };
        var isPromise = function isPromise(obj) {
          return !!obj && (_typeof(obj) === 'object' || typeof obj === 'function') && typeof obj.then === 'function';
        };
        var getBoxPositionOnWindowCenter = function getBoxPositionOnWindowCenter(width, height) {
          return {
            left: window.outerWidth / 2 + (window.screenX || window.screenLeft || 0) - width / 2,
            top: window.outerHeight / 2 + (window.screenY || window.screenTop || 0) - height / 2
          };
        };
        var getBoxPositionOnScreenCenter = function getBoxPositionOnScreenCenter(width, height) {
          return {
            top: (window.screen.height - height) / 2,
            left: (window.screen.width - width) / 2
          };
        };
        function windowOpen(url, _a, onClose) {
          var height = _a.height,
            width = _a.width,
            configRest = __rest(_a, ["height", "width"]);
          var config = __assign$1({
            height: height,
            width: width,
            location: 'no',
            toolbar: 'no',
            status: 'no',
            directories: 'no',
            menubar: 'no',
            scrollbars: 'yes',
            resizable: 'no',
            centerscreen: 'yes',
            chrome: 'yes'
          }, configRest);
          var shareDialog = window.open(url, '', Object.keys(config).map(function (key) {
            return "".concat(key, "=").concat(config[key]);
          }).join(', '));
          if (onClose) {
            var interval_1 = window.setInterval(function () {
              try {
                if (shareDialog === null || shareDialog.closed) {
                  window.clearInterval(interval_1);
                  onClose(shareDialog);
                }
              } catch (e) {
                /* eslint-disable no-console */
                console.error(e);
                /* eslint-enable no-console */
              }
            }, 1000);
          }
          return shareDialog;
        }
        var ShareButton = /** @class */function (_super) {
          __extends$1(ShareButton, _super);
          function ShareButton() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.openShareDialog = function (link) {
              var _a = _this.props,
                onShareWindowClose = _a.onShareWindowClose,
                _b = _a.windowHeight,
                windowHeight = _b === void 0 ? 400 : _b,
                _c = _a.windowPosition,
                windowPosition = _c === void 0 ? 'windowCenter' : _c,
                _d = _a.windowWidth,
                windowWidth = _d === void 0 ? 550 : _d;
              var windowConfig = __assign$1({
                height: windowHeight,
                width: windowWidth
              }, windowPosition === 'windowCenter' ? getBoxPositionOnWindowCenter(windowWidth, windowHeight) : getBoxPositionOnScreenCenter(windowWidth, windowHeight));
              windowOpen(link, windowConfig, onShareWindowClose);
            };
            _this.handleClick = function (event) {
              return __awaiter(_this, void 0, void 0, function () {
                var _a, beforeOnClick, disabled, networkLink, onClick, url, openShareDialogOnClick, opts, link, returnVal;
                return __generator(this, function (_b) {
                  switch (_b.label) {
                    case 0:
                      _a = this.props, beforeOnClick = _a.beforeOnClick, disabled = _a.disabled, networkLink = _a.networkLink, onClick = _a.onClick, url = _a.url, openShareDialogOnClick = _a.openShareDialogOnClick, opts = _a.opts;
                      link = networkLink(url, opts);
                      if (disabled) {
                        return [2 /*return*/];
                      }

                      event.preventDefault();
                      if (!beforeOnClick) return [3 /*break*/, 2];
                      returnVal = beforeOnClick();
                      if (!isPromise(returnVal)) return [3 /*break*/, 2];
                      return [4 /*yield*/, returnVal];
                    case 1:
                      _b.sent();
                      _b.label = 2;
                    case 2:
                      if (openShareDialogOnClick) {
                        this.openShareDialog(link);
                      }
                      if (onClick) {
                        onClick(event, link);
                      }
                      return [2 /*return*/];
                  }
                });
              });
            };

            return _this;
          }
          ShareButton.prototype.render = function () {
            var _a = this.props;
            _a.beforeOnClick;
            var children = _a.children,
              className = _a.className,
              disabled = _a.disabled,
              disabledStyle = _a.disabledStyle,
              forwardedRef = _a.forwardedRef;
            _a.networkLink;
            var networkName = _a.networkName;
            _a.onShareWindowClose;
            _a.openShareDialogOnClick;
            _a.opts;
            var resetButtonStyle = _a.resetButtonStyle,
              style = _a.style;
            _a.url;
            _a.windowHeight;
            _a.windowPosition;
            _a.windowWidth;
            var rest = __rest(_a, ["beforeOnClick", "children", "className", "disabled", "disabledStyle", "forwardedRef", "networkLink", "networkName", "onShareWindowClose", "openShareDialogOnClick", "opts", "resetButtonStyle", "style", "url", "windowHeight", "windowPosition", "windowWidth"]);
            var newClassName = classNames('react-share__ShareButton', {
              'react-share__ShareButton--disabled': !!disabled,
              disabled: !!disabled
            }, className);
            var newStyle = resetButtonStyle ? __assign$1(__assign$1({
              backgroundColor: 'transparent',
              border: 'none',
              padding: 0,
              font: 'inherit',
              color: 'inherit',
              cursor: 'pointer'
            }, style), disabled && disabledStyle) : __assign$1(__assign$1({}, style), disabled && disabledStyle);
            return React.createElement("button", __assign$1({}, rest, {
              "aria-label": rest['aria-label'] || networkName,
              className: newClassName,
              onClick: this.handleClick,
              ref: forwardedRef,
              style: newStyle
            }), children);
          };
          ShareButton.defaultProps = {
            disabledStyle: {
              opacity: 0.6
            },
            openShareDialogOnClick: true,
            resetButtonStyle: true
          };
          return ShareButton;
        }(reactExports.Component);
        var ShareButton$1 = ShareButton;
        var __assign = globalThis && globalThis.__assign || function () {
          __assign = Object.assign || function (t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
              s = arguments[i];
              for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
          };
          return __assign.apply(this, arguments);
        };
        function createShareButton(networkName, link, optsMap, defaultProps) {
          function CreatedButton(props, ref) {
            var opts = optsMap(props);
            var passedProps = __assign({}, props);
            // remove keys from passed props that are passed as opts
            var optsKeys = Object.keys(opts);
            optsKeys.forEach(function (key) {
              delete passedProps[key];
            });
            return React.createElement(ShareButton$1, __assign({}, defaultProps, passedProps, {
              forwardedRef: ref,
              networkName: networkName,
              networkLink: link,
              opts: optsMap(props)
            }));
          }
          CreatedButton.displayName = "ShareButton-".concat(networkName);
          return reactExports.forwardRef(CreatedButton);
        }
        var __extends = globalThis && globalThis.__extends || function () {
          var _extendStatics2 = function extendStatics(d, b) {
            _extendStatics2 = Object.setPrototypeOf || {
              __proto__: []
            } instanceof Array && function (d, b) {
              d.__proto__ = b;
            } || function (d, b) {
              for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
            };
            return _extendStatics2(d, b);
          };
          return function (d, b) {
            if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
            _extendStatics2(d, b);
            function __() {
              this.constructor = d;
            }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
          };
        }();
        var AssertionError = /** @class */function (_super) {
          __extends(AssertionError, _super);
          function AssertionError(message) {
            var _this = _super.call(this, message) || this;
            _this.name = 'AssertionError';
            return _this;
          }
          return AssertionError;
        }(Error);
        function assert(value, message) {
          if (!value) {
            throw new AssertionError(message);
          }
        }
        function facebookLink(url, _a) {
          var quote = _a.quote,
            hashtag = _a.hashtag;
          assert(url, 'facebook.url');
          return 'https://www.facebook.com/sharer/sharer.php' + objectToGetParams({
            u: url,
            quote: quote,
            hashtag: hashtag
          });
        }
        var FacebookShareButton = createShareButton('facebook', facebookLink, function (props) {
          return {
            quote: props.quote,
            hashtag: props.hashtag
          };
        }, {
          windowWidth: 550,
          windowHeight: 400
        });
        var FacebookShareButton$1 = FacebookShareButton;
        function linkedinLink(url, _a) {
          var title = _a.title,
            summary = _a.summary,
            source = _a.source;
          assert(url, 'linkedin.url');
          return 'https://linkedin.com/shareArticle' + objectToGetParams({
            url: url,
            mini: 'true',
            title: title,
            summary: summary,
            source: source
          });
        }
        var LinkedinShareButton = createShareButton('linkedin', linkedinLink, function (_a) {
          var title = _a.title,
            summary = _a.summary,
            source = _a.source;
          return {
            title: title,
            summary: summary,
            source: source
          };
        }, {
          windowWidth: 750,
          windowHeight: 600
        });
        var LinkedinShareButton$1 = LinkedinShareButton;
        function twitterLink(url, _a) {
          var title = _a.title,
            via = _a.via,
            _b = _a.hashtags,
            hashtags = _b === void 0 ? [] : _b,
            _c = _a.related,
            related = _c === void 0 ? [] : _c;
          assert(url, 'twitter.url');
          assert(Array.isArray(hashtags), 'twitter.hashtags is not an array');
          assert(Array.isArray(related), 'twitter.related is not an array');
          return 'https://twitter.com/share' + objectToGetParams({
            url: url,
            text: title,
            via: via,
            hashtags: hashtags.length > 0 ? hashtags.join(',') : undefined,
            related: related.length > 0 ? related.join(',') : undefined
          });
        }
        var TwitterShareButton = createShareButton('twitter', twitterLink, function (props) {
          return {
            hashtags: props.hashtags,
            title: props.title,
            via: props.via,
            related: props.related
          };
        }, {
          windowWidth: 550,
          windowHeight: 400
        });
        var TwitterShareButton$1 = TwitterShareButton;
        function SuccessSnackbar(_ref2) {
          var handleClose = _ref2.handleClose,
            success = _ref2.success;
          var _reactExports$useStat21 = reactExports.useState("ltr"),
            _reactExports$useStat22 = _slicedToArray(_reactExports$useStat21, 2),
            dir = _reactExports$useStat22[0],
            setDir = _reactExports$useStat22[1];
          var _useTranslation3 = useTranslation("manage"),
            t = _useTranslation3.t,
            i18n = _useTranslation3.i18n;
          reactExports.useEffect(function () {
            if (rtlLanguage.includes(i18n.language)) {
              setDir("rtl");
            } else {
              setDir("ltr");
            }
          }, [i18n.language]);
          return /* @__PURE__ */jsxRuntimeExports.jsx(Snackbar, {
            open: true,
            autoHideDuration: 2e3,
            onClose: handleClose,
            children: /* @__PURE__ */jsxRuntimeExports.jsx(Alert, {
              variant: "standard",
              severity: "success",
              onClose: handleClose,
              dir: dir,
              children: t("processed_successes.".concat(success))
            })
          });
        }
        var mainContainer$5 = "_mainContainer_1d68k_1";
        var linkCopy = "_linkCopy_1d68k_6";
        var socialSharing = "_socialSharing_1d68k_12";
        var defaultUrl = "_defaultUrl_1d68k_13";
        var socialLink = "_socialLink_1d68k_19";
        var iconShareFb = "_iconShareFb_1d68k_24";
        var iconShareTw = "_iconShareTw_1d68k_27";
        var iconShareLn = "_iconShareLn_1d68k_31";
        var styles$6 = {
          mainContainer: mainContainer$5,
          linkCopy: linkCopy,
          socialSharing: socialSharing,
          defaultUrl: defaultUrl,
          socialLink: socialLink,
          iconShareFb: iconShareFb,
          iconShareTw: iconShareTw,
          iconShareLn: iconShareLn
        };
        function SurveySharing() {
          var _useTranslation4 = useTranslation("manage"),
            t = _useTranslation4.t;
          var survey = useSelector(function (state) {
            return state.editState.survey;
          });
          var url = sharingUrl(survey.id);
          var _reactExports$useStat23 = reactExports.useState(false),
            _reactExports$useStat24 = _slicedToArray(_reactExports$useStat23, 2),
            copy = _reactExports$useStat24[0],
            setCopy = _reactExports$useStat24[1];
          var clickCopy = function clickCopy() {
            navigator.clipboard.writeText(url);
            setCopy(true);
          };
          return /* @__PURE__ */jsxRuntimeExports.jsxs(Box, {
            className: styles$6.mainContainer,
            children: [copy && /* @__PURE__ */jsxRuntimeExports.jsx(SuccessSnackbar, {
              handleClose: function handleClose() {
                return setCopy(false);
              },
              success: "copied"
            }), /* @__PURE__ */jsxRuntimeExports.jsxs(Box, {
              className: styles$6.defaultUrl,
              children: [/* @__PURE__ */jsxRuntimeExports.jsxs(Box, {
                component: "span",
                sx: {
                  fontWeight: 700
                },
                children: [t("edit_survey.default_survey_url"), ": "]
              }), /* @__PURE__ */jsxRuntimeExports.jsxs(Box, {
                className: styles$6.linkCopy,
                children: [/* @__PURE__ */jsxRuntimeExports.jsxs("a", {
                  href: url,
                  children: [url.slice(0, 50), "...", url.slice(-10)]
                }), /* @__PURE__ */jsxRuntimeExports.jsx(IconButton, {
                  onClick: clickCopy,
                  children: /* @__PURE__ */jsxRuntimeExports.jsx(default_1$3, {})
                })]
              })]
            }), /* @__PURE__ */jsxRuntimeExports.jsxs(Box, {
              className: styles$6.socialSharing,
              children: [/* @__PURE__ */jsxRuntimeExports.jsx(Box, {
                component: "span",
                sx: {
                  fontWeight: 700
                },
                children: t("edit_survey.social_sharing")
              }), /* @__PURE__ */jsxRuntimeExports.jsxs(Box, {
                className: styles$6.socialLink,
                children: [/* @__PURE__ */jsxRuntimeExports.jsx(FacebookShareButton$1, {
                  url: url,
                  children: /* @__PURE__ */jsxRuntimeExports.jsx(default_1$2, {
                    className: styles$6.iconShareFb
                  })
                }), /* @__PURE__ */jsxRuntimeExports.jsx(TwitterShareButton$1, {
                  url: url,
                  children: /* @__PURE__ */jsxRuntimeExports.jsx(default_1, {
                    className: styles$6.iconShareTw
                  })
                }), /* @__PURE__ */jsxRuntimeExports.jsx(LinkedinShareButton$1, {
                  url: url,
                  children: /* @__PURE__ */jsxRuntimeExports.jsx(default_1$1, {
                    className: styles$6.iconShareLn
                  })
                })]
              })]
            })]
          });
        }
        var NavigationMode = function NavigationMode(_ref3) {
          var navigationMode = _ref3.navigationMode,
            onNavigationModeChanged = _ref3.onNavigationModeChanged,
            disabled = _ref3.disabled;
          var _useTranslation5 = useTranslation("manage"),
            t = _useTranslation5.t;
          return /* @__PURE__ */jsxRuntimeExports.jsxs(FormControl, {
            fullWidth: true,
            children: [/* @__PURE__ */jsxRuntimeExports.jsx(InputLabel, {
              id: "navigation-mode-label",
              children: t("label.navigation_mode")
            }), /* @__PURE__ */jsxRuntimeExports.jsxs(Select, {
              disabled: disabled,
              labelId: "navigation-mode-label",
              id: "demo-simple-select",
              value: navigationMode,
              label: t("label.navigation_mode"),
              onChange: onNavigationModeChanged,
              children: [/* @__PURE__ */jsxRuntimeExports.jsx(MenuItem, {
                value: NAVIGATION_MODE.GROUP_BY_GROUP,
                children: t("mode.".concat(NAVIGATION_MODE.GROUP_BY_GROUP))
              }), /* @__PURE__ */jsxRuntimeExports.jsx(MenuItem, {
                value: NAVIGATION_MODE.QUESTION_BY_QUESTION,
                children: t("mode.".concat(NAVIGATION_MODE.QUESTION_BY_QUESTION))
              }), /* @__PURE__ */jsxRuntimeExports.jsx(MenuItem, {
                value: NAVIGATION_MODE.ALL_IN_ONE,
                children: t("mode.".concat(NAVIGATION_MODE.ALL_IN_ONE))
              })]
            })]
          });
        };
        var mainContainer$4 = "_mainContainer_14lhy_1";
        var wrap = "_wrap_14lhy_6";
        var formControlCheckBox$2 = "_formControlCheckBox_14lhy_10";
        var styles$5 = {
          mainContainer: mainContainer$4,
          wrap: wrap,
          formControlCheckBox: formControlCheckBox$2
        };
        function SurveyNavigation() {
          var dispatch = useDispatch();
          var _useTranslation6 = useTranslation("manage"),
            t = _useTranslation6.t;
          var survey = useSelector(function (state) {
            return state.editState.survey;
          });
          var isDisabled = !isSurveyAdmin() || survey.status == SURVEY_STATUS.CLOSED;
          var onChangeCheckbox = function onChangeCheckbox(e) {
            dispatch(surveyAttributeChanged({
              key: e.target.name,
              value: e.target.checked
            }));
          };
          return /* @__PURE__ */jsxRuntimeExports.jsx(Box, {
            className: styles$5.mainContainer,
            children: /* @__PURE__ */jsxRuntimeExports.jsxs(Box, {
              className: styles$5.wrap,
              children: [/* @__PURE__ */jsxRuntimeExports.jsx(NavigationMode, {
                disabled: isDisabled,
                onNavigationModeChanged: function onNavigationModeChanged(e) {
                  dispatch(surveyAttributeChanged({
                    key: "navigationMode",
                    value: e.target.value
                  }));
                },
                navigationMode: survey.navigationMode
              }), /* @__PURE__ */jsxRuntimeExports.jsxs(FormControl, {
                className: styles$5.formControlCheckBox,
                children: [/* @__PURE__ */jsxRuntimeExports.jsx(FormControlLabel, {
                  control: /* @__PURE__ */jsxRuntimeExports.jsx(Checkbox, {
                    disabled: isDisabled,
                    name: SURVEY.ALLOW_PREVIOUS,
                    checked: survey.allowPrevious,
                    onChange: onChangeCheckbox
                  }),
                  label: t("edit_survey.allow_previous")
                }), /* @__PURE__ */jsxRuntimeExports.jsx(FormControlLabel, {
                  control: /* @__PURE__ */jsxRuntimeExports.jsx(Checkbox, {
                    disabled: isDisabled,
                    name: SURVEY.ALLOW_INCOMPLETE,
                    checked: survey.allowIncomplete,
                    onChange: onChangeCheckbox
                  }),
                  label: t("edit_survey.allow_incomplete")
                }), /* @__PURE__ */jsxRuntimeExports.jsx(FormControlLabel, {
                  control: /* @__PURE__ */jsxRuntimeExports.jsx(Checkbox, {
                    disabled: isDisabled,
                    name: SURVEY.ALLOW_JUMP,
                    checked: survey.allowJump,
                    onChange: onChangeCheckbox
                  }),
                  label: t("edit_survey.allow_jump")
                }), /* @__PURE__ */jsxRuntimeExports.jsx(FormControlLabel, {
                  control: /* @__PURE__ */jsxRuntimeExports.jsx(Checkbox, {
                    disabled: isDisabled,
                    name: SURVEY.SKIP_INVALID,
                    checked: survey.skipInvalid,
                    onChange: onChangeCheckbox
                  }),
                  label: t("edit_survey.skip_invalid")
                })]
              })]
            })
          });
        }
        var mainContainer$3 = "_mainContainer_g22zs_1";
        var formControlCheckBox$1 = "_formControlCheckBox_g22zs_6";
        var styles$4 = {
          mainContainer: mainContainer$3,
          formControlCheckBox: formControlCheckBox$1
        };
        function SurveyOffline() {
          var dispatch = useDispatch();
          var _useTranslation7 = useTranslation("manage"),
            t = _useTranslation7.t;
          var survey = useSelector(function (state) {
            return state.editState.survey;
          });
          var isDisabled = !isSurveyAdmin() || survey.status == SURVEY_STATUS.CLOSED;
          var onChangeCheckbox = function onChangeCheckbox(e) {
            dispatch(surveyAttributeChanged({
              key: e.target.name,
              value: e.target.checked
            }));
          };
          return /* @__PURE__ */jsxRuntimeExports.jsx(Box, {
            className: styles$4.mainContainer,
            children: /* @__PURE__ */jsxRuntimeExports.jsxs(FormControl, {
              className: styles$4.formControlCheckBox,
              children: [/* @__PURE__ */jsxRuntimeExports.jsx(FormControlLabel, {
                control: /* @__PURE__ */jsxRuntimeExports.jsx(Checkbox, {
                  disabled: isDisabled,
                  name: SURVEY.BACKGROUND_AUDIO,
                  checked: survey.backgroundAudio,
                  onChange: onChangeCheckbox
                }),
                label: t("edit_survey.background_audio")
              }), /* @__PURE__ */jsxRuntimeExports.jsx(FormControlLabel, {
                control: /* @__PURE__ */jsxRuntimeExports.jsx(Checkbox, {
                  disabled: isDisabled,
                  name: SURVEY.RECORD_GPS,
                  checked: survey.recordGps,
                  onChange: onChangeCheckbox
                }),
                label: t("edit_survey.record_gps")
              }), /* @__PURE__ */jsxRuntimeExports.jsx(FormControlLabel, {
                control: /* @__PURE__ */jsxRuntimeExports.jsx(Checkbox, {
                  disabled: isDisabled,
                  name: SURVEY.CAN_LOCK_SURVEY,
                  checked: survey.canLockSurvey,
                  onChange: onChangeCheckbox
                }),
                label: t("edit_survey.can_lock_survey")
              })]
            })
          });
        }
        var mainContainer$2 = "_mainContainer_g22zs_1";
        var formControlCheckBox = "_formControlCheckBox_g22zs_6";
        var styles$3 = {
          mainContainer: mainContainer$2,
          formControlCheckBox: formControlCheckBox
        };
        function SurveyPrivacy() {
          var dispatch = useDispatch();
          var _useTranslation8 = useTranslation("manage"),
            t = _useTranslation8.t;
          var survey = useSelector(function (state) {
            return state.editState.survey;
          });
          var isDisabled = !isSurveyAdmin() || survey.status == SURVEY_STATUS.CLOSED;
          var onChangeCheckbox = function onChangeCheckbox(e) {
            dispatch(surveyAttributeChanged({
              key: e.target.name,
              value: e.target.checked
            }));
          };
          return /* @__PURE__ */jsxRuntimeExports.jsx(Box, {
            className: styles$3.mainContainer,
            children: /* @__PURE__ */jsxRuntimeExports.jsxs(FormControl, {
              className: styles$3.formControlCheckBox,
              children: [/* @__PURE__ */jsxRuntimeExports.jsx(FormControlLabel, {
                control: /* @__PURE__ */jsxRuntimeExports.jsx(Checkbox, {
                  disabled: isDisabled,
                  name: SURVEY.SAVE_IP,
                  checked: survey.saveIp,
                  onChange: onChangeCheckbox
                }),
                label: t("edit_survey.save_ip")
              }), /* @__PURE__ */jsxRuntimeExports.jsx(FormControlLabel, {
                control: /* @__PURE__ */jsxRuntimeExports.jsx(Checkbox, {
                  disabled: isDisabled,
                  name: SURVEY.SAVE_TIMINGS,
                  checked: survey.saveTimings,
                  onChange: onChangeCheckbox
                }),
                label: t("edit_survey.save_timings")
              })]
            })
          });
        }
        var wrapper = "_wrapper_1um7m_1";
        var action = "_action_1um7m_13";
        var userBlock = "_userBlock_1um7m_18";
        var styles$2 = {
          wrapper: wrapper,
          action: action,
          userBlock: userBlock
        };
        var AddPermission = function AddPermission(_ref4) {
          var open = _ref4.open,
            onClose = _ref4.onClose,
            addPermission = _ref4.addPermission,
            currentUserIds = _ref4.currentUserIds;
          var _useTranslation9 = useTranslation("manage"),
            t = _useTranslation9.t;
          var _reactExports$useStat25 = reactExports.useState([]),
            _reactExports$useStat26 = _slicedToArray(_reactExports$useStat25, 2),
            allUsers = _reactExports$useStat26[0],
            setAllUsers = _reactExports$useStat26[1];
          var getAllUsers = function getAllUsers() {
            UserService.getAllUsers().then(function (data) {
              if (data) {
                setAllUsers(data);
              }
            });
          };
          reactExports.useEffect(function () {
            getAllUsers();
          }, []);
          return /* @__PURE__ */jsxRuntimeExports.jsx(Modal, {
            sx: {
              ".MuiBackdrop-root": {
                backgroundColor: "rgba(0, 0, 0, 0.3)"
              }
            },
            open: open,
            onClose: onClose,
            "aria-labelledby": "modal-modal-title",
            "aria-describedby": "modal-modal-description",
            children: /* @__PURE__ */jsxRuntimeExports.jsxs(Box, {
              className: styles$2.wrapper,
              children: [allUsers.filter(function (user) {
                return currentUserIds.indexOf(user.id) == -1;
              }).map(function (user) {
                return /* @__PURE__ */jsxRuntimeExports.jsxs(Box, {
                  className: styles$2.userBlock,
                  children: [/* @__PURE__ */jsxRuntimeExports.jsxs(Box, {
                    children: [user.firstName, " ", user.lastName]
                  }), /* @__PURE__ */jsxRuntimeExports.jsx(Button, {
                    onClick: function onClick() {
                      return addPermission(user.id);
                    },
                    children: t("action_btn.add")
                  })]
                }, user.id);
              }), /* @__PURE__ */jsxRuntimeExports.jsx(Box, {
                className: styles$2.action,
                children: /* @__PURE__ */jsxRuntimeExports.jsx(Button, {
                  onClick: onClose,
                  children: t("action_btn.cancel")
                })
              })]
            })
          });
        };
        var mainContainer$1 = "_mainContainer_mjjng_1";
        var styles$1 = {
          mainContainer: mainContainer$1
        };
        function SurveyUsers() {
          var dispatch = useDispatch();
          var _useTranslation10 = useTranslation("manage"),
            t = _useTranslation10.t;
          var survey = useSelector(function (state) {
            return state.editState.survey;
          });
          var fetching = useSelector(function (state) {
            return state.editState.permissionsLoading;
          });
          var permissionAll = useSelector(function (state) {
            return state.editState.permissions;
          });
          var isDisabled = fetching || !isSurveyAdmin() || survey.status == SURVEY_STATUS.CLOSED;
          var onChangeCheckbox = function onChangeCheckbox(e) {
            dispatch(surveyAttributeChanged({
              key: e.target.name,
              value: e.target.checked
            }));
          };
          var loadPermissions = function loadPermissions(surveyId) {
            SurveyService.getSurveyPermissionAll(surveyId).then(function (data) {
              if (data) {
                dispatch(permissionsReceived(data));
              }
              dispatch(permissionsLoading(false));
            }).catch(function (err) {
              processApirror(err);
            });
          };
          var _reactExports$useStat27 = reactExports.useState(null),
            _reactExports$useStat28 = _slicedToArray(_reactExports$useStat27, 2),
            userToDelete = _reactExports$useStat28[0],
            setUserToDelete = _reactExports$useStat28[1];
          var onCloseModal = function onCloseModal() {
            setUserToDelete(null);
          };
          var _reactExports$useStat29 = reactExports.useState(false),
            _reactExports$useStat30 = _slicedToArray(_reactExports$useStat29, 2),
            addPermission = _reactExports$useStat30[0],
            setAddPermission = _reactExports$useStat30[1];
          var onCloseModalAddPermission = function onCloseModalAddPermission() {
            setAddPermission(false);
          };
          var processApirror = function processApirror(e) {
            dispatch(permissionsLoading(false));
            var processed = processError(e);
            switch (processed) {
              case PROCESSED_ERRORS.NETWORK_ERR:
              case PROCESSED_ERRORS.BACKEND_DOWN:
                dispatch(onError(processed));
                break;
            }
          };
          var deleteUser = function deleteUser() {
            dispatch(permissionsLoading(true));
            onCloseModal();
            SurveyService.removePermission(survey.id, userToDelete.id).then(function () {
              loadPermissions(survey.id);
            }).catch(function (e) {
              processApirror(e);
            });
          };
          var postPermission = function postPermission(userId) {
            onCloseModalAddPermission();
            dispatch(permissionsLoading(true));
            SurveyService.addPermission(survey.id, userId).then(function () {
              loadPermissions(survey.id);
            }).catch(function (e) {
              processApirror(e);
            });
          };
          return /* @__PURE__ */jsxRuntimeExports.jsxs(Box, {
            className: styles$1.mainContainer,
            children: [/* @__PURE__ */jsxRuntimeExports.jsx(FormControl, {
              sx: {
                mb: "30px"
              },
              children: /* @__PURE__ */jsxRuntimeExports.jsx(FormControlLabel, {
                control: /* @__PURE__ */jsxRuntimeExports.jsx(Checkbox, {
                  disabled: isDisabled,
                  name: SURVEY.PUBLIC_WITHIN_ORG,
                  checked: survey.publicWithinOrg,
                  onChange: onChangeCheckbox
                }),
                label: t("label.public_within_org")
              })
            }), /* @__PURE__ */jsxRuntimeExports.jsx(Button, {
              disabled: isDisabled,
              sx: {
                ml: "auto",
                mb: "10px",
                display: "flex"
              },
              onClick: function onClick() {
                setAddPermission(true);
              },
              children: t("action_btn.add_permission")
            }), /* @__PURE__ */jsxRuntimeExports.jsx(TableContainer, {
              component: Paper,
              children: /* @__PURE__ */jsxRuntimeExports.jsxs(Table, {
                sx: {
                  minWidth: 650
                },
                "aria-label": "simple table",
                children: [/* @__PURE__ */jsxRuntimeExports.jsx(TableHead, {
                  children: /* @__PURE__ */jsxRuntimeExports.jsxs(TableRow, {
                    children: [/* @__PURE__ */jsxRuntimeExports.jsx(TableCell, {}), /* @__PURE__ */jsxRuntimeExports.jsx(TableCell, {
                      align: "left",
                      children: t("users_manage.name")
                    }), /* @__PURE__ */jsxRuntimeExports.jsx(TableCell, {
                      align: "left",
                      children: t("users_manage.email")
                    }), /* @__PURE__ */jsxRuntimeExports.jsx(TableCell, {
                      align: "left",
                      children: t("users_manage.roles")
                    })]
                  })
                }), /* @__PURE__ */jsxRuntimeExports.jsx(TableBody, {
                  children: permissionAll === null || permissionAll === void 0 ? void 0 : permissionAll.map(function (_ref5) {
                    var user = _ref5.user;
                    return /* @__PURE__ */jsxRuntimeExports.jsxs(TableRow, {
                      children: [/* @__PURE__ */jsxRuntimeExports.jsx(TableCell, {
                        component: "th",
                        scope: "row",
                        children: /* @__PURE__ */jsxRuntimeExports.jsx(IconButton, {
                          title: t("users_manage.title_delete"),
                          disabled: isDisabled,
                          onClick: function onClick() {
                            setUserToDelete(user);
                          },
                          children: /* @__PURE__ */jsxRuntimeExports.jsx(Delete, {})
                        })
                      }), /* @__PURE__ */jsxRuntimeExports.jsxs(TableCell, {
                        align: "left",
                        children: [user.firstName, " ", user.lastName]
                      }), /* @__PURE__ */jsxRuntimeExports.jsx(TableCell, {
                        align: "left",
                        children: user.email
                      }), /* @__PURE__ */jsxRuntimeExports.jsx(TableCell, {
                        align: "left",
                        children: user.roles.map(function (role) {
                          return t("label.".concat(role));
                        }).join(", ")
                      })]
                    }, user.id);
                  })
                })]
              })
            }), Boolean(userToDelete) && /* @__PURE__ */jsxRuntimeExports.jsx(UserDelete, {
              deleteUser: deleteUser,
              name: userToDelete.firstName + " " + userToDelete.lastName,
              open: Boolean(userToDelete),
              onClose: onCloseModal
            }), addPermission && /* @__PURE__ */jsxRuntimeExports.jsx(AddPermission, {
              currentUserIds: permissionAll.map(function (permission) {
                return permission.user.id;
              }),
              addPermission: postPermission,
              open: addPermission,
              onClose: onCloseModalAddPermission
            }), /* @__PURE__ */jsxRuntimeExports.jsx(Backdrop, {
              open: fetching,
              sx: {
                position: "absolute"
              },
              children: /* @__PURE__ */jsxRuntimeExports.jsx(CircularProgress, {})
            })]
          });
        }
        var mainContainer = "_mainContainer_1cgmo_1";
        var styles = {
          mainContainer: mainContainer
        };
        function SurveyQuota() {
          var dispatch = useDispatch();
          var _useTranslation11 = useTranslation("manage"),
            t = _useTranslation11.t;
          var survey = useSelector(function (state) {
            return state.editState.survey;
          });
          var _reactExports$useStat31 = reactExports.useState(survey.quota > 0),
            _reactExports$useStat32 = _slicedToArray(_reactExports$useStat31, 2),
            checked = _reactExports$useStat32[0],
            setChecked = _reactExports$useStat32[1];
          var _reactExports$useStat33 = reactExports.useState(survey.quota >= 0 ? survey.quota : ""),
            _reactExports$useStat34 = _slicedToArray(_reactExports$useStat33, 2),
            limit = _reactExports$useStat34[0],
            setLimit = _reactExports$useStat34[1];
          var changeLimit = function changeLimit(value) {
            var intValue = parseInt(value);
            if (Number.isInteger(intValue) && intValue >= 0) {
              setLimit(intValue);
              dispatch(surveyAttributeChanged({
                key: "quota",
                value: intValue
              }));
            }
          };
          var fetching = useSelector(function (state) {
            return state.editState.permissionsLoading;
          });
          var permissionAll = useSelector(function (state) {
            var _state$editState$perm;
            return (_state$editState$perm = state.editState.permissions) === null || _state$editState$perm === void 0 ? void 0 : _state$editState$perm.filter(function (permission) {
              return isSurveyor(permission.user);
            });
          });
          var onChangeCheckbox = function onChangeCheckbox(e) {
            if (!e.target.checked) {
              setLimit("");
              dispatch(surveyAttributeChanged({
                key: "quota",
                value: -1
              }));
            }
            setChecked(e.target.checked);
          };
          var putPermissionBySurveyor = function putPermissionBySurveyor(userId, quota) {
            var data = {
              quota: quota
            };
            dispatch(permissionsLoading(true));
            SurveyService.putSurveyPermission(survey.id, userId, data).then(function () {
              loadPermissions(survey.id);
            }).catch(function (err) {
              dispatch(permissionsLoading(false));
            });
          };
          var loadPermissions = function loadPermissions(surveyId) {
            SurveyService.getSurveyPermissionAll(surveyId).then(function (data) {
              if (data) {
                dispatch(permissionsReceived(data));
              }
              dispatch(permissionsLoading(false));
            }).catch(function (err) {
              dispatch(permissionsLoading(false));
            });
          };
          var isDisabled = fetching || !isSurveyAdmin() || survey.status == SURVEY_STATUS.CLOSED;
          return /* @__PURE__ */jsxRuntimeExports.jsxs(Box, {
            className: styles.mainContainer,
            children: [/* @__PURE__ */jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
              children: [/* @__PURE__ */jsxRuntimeExports.jsxs(Stack, {
                flexDirection: "row",
                alignItems: "bottom",
                sx: {
                  marginBottom: "16px"
                },
                children: [/* @__PURE__ */jsxRuntimeExports.jsx(FormControlLabel, {
                  disabled: isDisabled,
                  control: /* @__PURE__ */jsxRuntimeExports.jsx(Checkbox, {
                    checked: checked,
                    onChange: onChangeCheckbox
                  }),
                  label: t("label.apply_quota")
                }), /* @__PURE__ */jsxRuntimeExports.jsx(TextField, {
                  variant: "standard",
                  type: "number",
                  sx: {
                    width: 200
                  },
                  disabled: !checked || isDisabled,
                  label: t("label.total_responses_limit"),
                  value: limit,
                  onChange: function onChange(e) {
                    changeLimit(e.target.value);
                  }
                })]
              }), /* @__PURE__ */jsxRuntimeExports.jsxs(Box, {
                children: [/* @__PURE__ */jsxRuntimeExports.jsx(Typography, {
                  sx: {
                    mb: "10px",
                    fontSize: "20px"
                  },
                  children: t("edit_survey.limit_responses")
                }), /* @__PURE__ */jsxRuntimeExports.jsx(TableContainer, {
                  component: Paper,
                  children: /* @__PURE__ */jsxRuntimeExports.jsxs(Table, {
                    sx: {
                      minWidth: 650
                    },
                    "aria-label": "simple table",
                    children: [/* @__PURE__ */jsxRuntimeExports.jsx(TableHead, {
                      children: /* @__PURE__ */jsxRuntimeExports.jsxs(TableRow, {
                        children: [/* @__PURE__ */jsxRuntimeExports.jsx(TableCell, {
                          align: "left",
                          children: t("edit_survey.surveyor")
                        }), /* @__PURE__ */jsxRuntimeExports.jsx(TableCell, {
                          align: "left",
                          children: t("users_manage.roles")
                        }), /* @__PURE__ */jsxRuntimeExports.jsx(TableCell, {
                          align: "left",
                          children: t("edit_survey.count")
                        }), /* @__PURE__ */jsxRuntimeExports.jsx(TableCell, {
                          align: "left",
                          children: t("edit_survey.limit")
                        })]
                      })
                    }), /* @__PURE__ */jsxRuntimeExports.jsx(TableBody, {
                      children: permissionAll === null || permissionAll === void 0 ? void 0 : permissionAll.map(function (permission) {
                        return /* @__PURE__ */jsxRuntimeExports.jsxs(TableRow, {
                          children: [/* @__PURE__ */jsxRuntimeExports.jsxs(TableCell, {
                            align: "left",
                            children: [permission.user.firstName, " ", permission.user.lastName]
                          }), /* @__PURE__ */jsxRuntimeExports.jsx(TableCell, {
                            align: "left",
                            children: permission.user.roles.map(function (role) {
                              return t("label.".concat(role));
                            }).join(", ")
                          }), /* @__PURE__ */jsxRuntimeExports.jsx(TableCell, {
                            align: "left",
                            children: permission.count
                          }), /* @__PURE__ */jsxRuntimeExports.jsx(TableCell, {
                            align: "left",
                            children: /* @__PURE__ */jsxRuntimeExports.jsx(UserQuota, {
                              t: t,
                              quota: permission.quota,
                              isDisabled: isDisabled,
                              onSubmit: function onSubmit(quota) {
                                putPermissionBySurveyor(permission.user.id, quota);
                              }
                            })
                          })]
                        }, permission.user.id);
                      })
                    })]
                  })
                })]
              })]
            }), /* @__PURE__ */jsxRuntimeExports.jsx(Backdrop, {
              open: fetching,
              sx: {
                position: "absolute"
              },
              children: /* @__PURE__ */jsxRuntimeExports.jsx(CircularProgress, {})
            })]
          });
        }
        function UserQuota(_ref6) {
          var t = _ref6.t,
            isDisabled = _ref6.isDisabled,
            quota = _ref6.quota,
            onSubmit = _ref6.onSubmit;
          var _reactExports$useStat35 = reactExports.useState(quota > 0),
            _reactExports$useStat36 = _slicedToArray(_reactExports$useStat35, 2),
            checked = _reactExports$useStat36[0],
            setChecked = _reactExports$useStat36[1];
          var _reactExports$useStat37 = reactExports.useState(quota >= 0 ? quota : ""),
            _reactExports$useStat38 = _slicedToArray(_reactExports$useStat37, 2),
            limit = _reactExports$useStat38[0],
            setLimit = _reactExports$useStat38[1];
          var onChangeCheckbox = function onChangeCheckbox(e) {
            if (!e.target.checked) {
              setLimit("");
            }
            setChecked(e.target.checked);
          };
          var changeLimit = function changeLimit(value) {
            var intValue = parseInt(value);
            if (Number.isInteger(intValue) && intValue >= 0) {
              setLimit(intValue);
            }
          };
          return /* @__PURE__ */jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
            children: [/* @__PURE__ */jsxRuntimeExports.jsx(FormControlLabel, {
              disabled: isDisabled,
              control: /* @__PURE__ */jsxRuntimeExports.jsx(Checkbox, {
                checked: checked,
                onChange: onChangeCheckbox
              }),
              label: t("label.apply_quota")
            }), /* @__PURE__ */jsxRuntimeExports.jsxs(Stack, {
              flexDirection: "row",
              alignItems: "bottom",
              children: [/* @__PURE__ */jsxRuntimeExports.jsx(TextField, {
                type: "number",
                variant: "standard",
                label: t("label.responses_limit"),
                disabled: !checked || isDisabled,
                value: limit,
                onChange: function onChange(e) {
                  changeLimit(e.target.value);
                }
              }), /* @__PURE__ */jsxRuntimeExports.jsx(Button, {
                onClick: function onClick() {
                  return onSubmit(limit == "" ? -1 : limit);
                },
                disabled: limit == "" && quota < 0 || limit == quota,
                children: t("action_btn.save")
              })]
            })]
          });
        }
        function EditSurvey() {
          var _useTranslation12 = useTranslation("manage"),
            t = _useTranslation12.t;
          var dispatch = useDispatch();
          var _reactExports$useStat39 = reactExports.useState(true),
            _reactExports$useStat40 = _slicedToArray(_reactExports$useStat39, 2),
            fetching = _reactExports$useStat40[0],
            setFetching = _reactExports$useStat40[1];
          var survey = useSelector(function (state) {
            return state.editState.survey;
          });
          var sections = [{
            id: "general",
            title: t("edit_survey.general"),
            component: /* @__PURE__ */jsxRuntimeExports.jsx(EditSurveyGeneral, {})
          }, {
            id: "sharing",
            title: t("edit_survey.sharing"),
            component: /* @__PURE__ */jsxRuntimeExports.jsx(SurveySharing, {})
          }, {
            id: "navigation",
            title: t("edit_survey.navigation"),
            component: /* @__PURE__ */jsxRuntimeExports.jsx(SurveyNavigation, {})
          }, {
            id: "offline",
            title: t("edit_survey.offline"),
            component: /* @__PURE__ */jsxRuntimeExports.jsx(SurveyOffline, {})
          }, {
            id: "quotas",
            title: t("edit_survey.quotas"),
            component: /* @__PURE__ */jsxRuntimeExports.jsx(SurveyQuota, {})
          }, {
            id: "survey_users",
            title: t("edit_survey.survey_users"),
            component: /* @__PURE__ */jsxRuntimeExports.jsx(SurveyUsers, {})
          }, {
            id: "privacy",
            title: t("edit_survey.privacy"),
            component: /* @__PURE__ */jsxRuntimeExports.jsx(SurveyPrivacy, {})
          }];
          var processApirror = function processApirror(e) {
            setFetching(false);
            var processed = processError(e);
            switch (processed) {
              case PROCESSED_ERRORS.NETWORK_ERR:
              case PROCESSED_ERRORS.BACKEND_DOWN:
                dispatch(onError(processed));
                break;
            }
          };
          var error = useSelector(function (state) {
            return state.editState.error;
          });
          reactExports.useEffect(function () {
            setFetching(true);
            SurveyService.getSurvey().then(function (data) {
              if (data) {
                dispatch(surveyReceived(data));
                loadPermissions(data.id);
              }
              setFetching(false);
            }).catch(function (err) {
              processApirror(err);
            });
            dispatch(permissionsLoading(true));
          }, []);
          var loadPermissions = function loadPermissions(surveyId) {
            SurveyService.getSurveyPermissionAll(surveyId).then(function (data) {
              if (data) {
                dispatch(permissionsReceived(data));
              }
              dispatch(permissionsLoading(false));
            }).catch(function (err) {
              processApirror(err);
            });
          };
          return /* @__PURE__ */jsxRuntimeExports.jsxs(Box, {
            className: styles$8.mainContainer,
            children: [error && /* @__PURE__ */jsxRuntimeExports.jsx(ProcessedError, {
              error: error,
              handleClose: function handleClose() {
                return dispatch(onErrorSeen());
              }
            }), /* @__PURE__ */jsxRuntimeExports.jsx(Header, {}), /* @__PURE__ */jsxRuntimeExports.jsx(Typography, {
              variant: "h4",
              sx: {
                mb: "10px"
              },
              children: t("edit_survey.title")
            }), !fetching && survey && sections.map(function (section) {
              return /* @__PURE__ */jsxRuntimeExports.jsxs(Accordion, {
                defaultExpanded: true,
                children: [/* @__PURE__ */jsxRuntimeExports.jsx(AccordionSummary, {
                  expandIcon: /* @__PURE__ */jsxRuntimeExports.jsx(default_1$4, {}),
                  "aria-controls": "panel1a-content",
                  id: "panel1a-header",
                  children: /* @__PURE__ */jsxRuntimeExports.jsx(Typography, {
                    variant: "h5",
                    children: section.title
                  })
                }), /* @__PURE__ */jsxRuntimeExports.jsx(AccordionDetails, {
                  children: section.component
                })]
              }, section.id);
            }), fetching && /* @__PURE__ */jsxRuntimeExports.jsx("div", {
              className: styles$8.loadingWrapper,
              children: /* @__PURE__ */jsxRuntimeExports.jsx(CircularProgress, {})
            }), /* @__PURE__ */jsxRuntimeExports.jsx(EditingSurvey, {})]
          });
        }
      }
    };
  });
})();
