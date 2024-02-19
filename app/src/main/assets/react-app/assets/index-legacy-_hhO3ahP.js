;
(function () {
  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
  function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
  System.register(['./index-legacy-T3s18jo3.js', './ExpandMore-legacy-OJtHsg1A.js', './Web-legacy-LDhM2X1u.js', './Switch-legacy-v-eJDCHU.js', './index-legacy-D22paHDg.js', './UserService-legacy-idayBd14.js', './TableRow-legacy-QjxmKuUL.js', './TableHead-legacy-fccLWbma.js', './TextField-legacy-vL2OdS5Q.js', './FormControlLabel-legacy-0Ne4M7i6.js', './DatePicker-legacy-9Ey9K3I7.js', './Grid-legacy-ZQipiKyz.js', './Checkbox-legacy-8hCFdihe.js', './SwitchBase-legacy-VpMr3A_z.js'], function (exports, module) {
    'use strict';

    var createSvgIcon, jsxRuntimeExports, React, useDispatch, useTranslation, useSelector, Box, Typography, surveyAttributeChanged, reactExports, Modal, Button, Paper, IconButton, Backdrop, CircularProgress, permissionsLoading, SurveyService, permissionsReceived, onApiError, onError, Accordion, AccordionSummary, default_1, AccordionDetails, isSurveyAdmin, SURVEY_STATUS, SURVEY, isSurveyor, Switch, UserDelete, UserService, TableContainer, Table, TableRow, TableCell, TableBody, TableHead, TextField, Stack;
    return {
      setters: [module => {
        createSvgIcon = module.c;
        jsxRuntimeExports = module.j;
        React = module.R;
        useDispatch = module.z;
        useTranslation = module.x;
        useSelector = module.E;
        Box = module.B;
        Typography = module.a0;
        surveyAttributeChanged = module.a5;
        reactExports = module.r;
        Modal = module.$;
        Button = module.a1;
        Paper = module.P;
        IconButton = module.I;
        Backdrop = module.bP;
        CircularProgress = module.an;
        permissionsLoading = module.au;
        SurveyService = module.a2;
        permissionsReceived = module.av;
        onApiError = module.a3;
        onError = module.a7;
      }, module => {
        Accordion = module.A;
        AccordionSummary = module.a;
        default_1 = module.d;
        AccordionDetails = module.b;
      }, module => {
        isSurveyAdmin = module.i;
        SURVEY_STATUS = module.b;
        SURVEY = module.c;
        isSurveyor = module.e;
      }, module => {
        Switch = module.S;
      }, module => {
        UserDelete = module.U;
      }, module => {
        UserService = module.U;
      }, module => {
        TableContainer = module.T;
        Table = module.a;
        TableRow = module.b;
        TableCell = module.c;
        TableBody = module.d;
      }, module => {
        TableHead = module.T;
      }, module => {
        TextField = module.T;
      }, module => {
        Stack = module.S;
      }, null, null, null, null],
      execute: function execute() {
        var __vite_style__ = document.createElement('style');
        __vite_style__.textContent = "._mainContainer_axt4j_1 {\n  min-width: 300px;\n  padding: 3rem;\n  height: calc(100vh - 200px);\n  overflow: auto;\n  display: flex;\n  flex-direction: column;\n  gap: 1.5rem;\n}\n\n._loadingWrapper_axt4j_11 {\n  width: 100%;\n  height: 100%;\n  text-align: center;\n  padding-top: 100px;\n}\n._mainContainer_19672_1 {\n  margin: auto;\n  min-width: 300px;\n  display: flex;\n  flex-direction: column;\n  gap: 2rem;\n}\n\n._formControlCheckBox_19672_9 {\n  display: flex;\n  flex-direction: column;\n}\n._mainContainer_19672_1 {\n  margin: auto;\n  min-width: 300px;\n  display: flex;\n  flex-direction: column;\n  gap: 2rem;\n}\n\n._formControlCheckBox_19672_9 {\n  display: flex;\n  flex-direction: column;\n}\n._wrapper_1um7m_1 {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  background: #ffffff;\n  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);\n  border-radius: 8px;\n  padding: 20px;\n  min-width: 300px;\n}\n\n._action_1um7m_13 {\n  text-align: center;\n  margin-top: 16px;\n}\n\n._userBlock_1um7m_18 {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n._mainContainer_15lvw_1 {\n  margin: auto;\n  min-width: 300px;\n  display: flex;\n  flex-direction: column;\n  gap: 2rem;\n}\n\n._addUserButton_15lvw_9 {\n  display: flex;\n  margin-left: auto;\n  background-color: #e0e2ef;\n  color: #1a2052;\n  border-radius: 9999px;\n  padding: 0.5rem 1.875rem;\n}\n._mainContainer_2nff4_1 {\n  margin: auto;\n  min-width: 300px;\n  display: flex;\n  flex-direction: column;\n  gap: 2rem;\n}\n";
        document.head.appendChild(__vite_style__);
        const Close = createSvgIcon( /*#__PURE__*/jsxRuntimeExports.jsx("path", {
          d: "M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
        }), 'Close');
        const mainContainer$4 = "_mainContainer_axt4j_1";
        const loadingWrapper = "_loadingWrapper_axt4j_11";
        const styles$5 = {
          mainContainer: mainContainer$4,
          loadingWrapper: loadingWrapper
        };
        const mainContainer$3 = "_mainContainer_19672_1";
        const formControlCheckBox$1 = "_formControlCheckBox_19672_9";
        const styles$4 = {
          mainContainer: mainContainer$3,
          formControlCheckBox: formControlCheckBox$1
        };
        const useCustomSwitchStyles = () => {
          return {
            width: 53,
            height: 26,
            padding: 0,
            "& .MuiSwitch-switchBase": {
              padding: "0px",
              top: "2px",
              transform: "translateX(3px)",
              "&.Mui-checked": {
                top: "2px",
                transform: "translateX(29px)",
                color: "#fff",
                "& + .MuiSwitch-track": {
                  backgroundColor: "#eff1fd",
                  opacity: 1
                },
                "& .MuiSwitch-thumb": {
                  width: 21,
                  height: 21,
                  boxShadow: "none",
                  backgroundColor: "#04bdf3"
                }
              }
            },
            "& .MuiSwitch-thumb": {
              width: 21,
              height: 21,
              boxShadow: "none"
            },
            "& .MuiSwitch-track": {
              borderRadius: 13,
              backgroundColor: "#eff1fd",
              opacity: 1,
              "&:before, &:after": {
                content: '""',
                position: "absolute",
                top: "50%",
                transform: "translateY(-50%)",
                width: 24,
                height: 24
              }
            }
          };
        };
        function SurveyOffline() {
          const dispatch = useDispatch();
          const _useTranslation = useTranslation("manage"),
            t = _useTranslation.t;
          const survey = useSelector(state => state.editState.survey);
          const isDisabled = !isSurveyAdmin() || survey.status == SURVEY_STATUS.CLOSED;
          const onChangeCheckbox = e => {
            dispatch(surveyAttributeChanged({
              key: e.target.name,
              value: e.target.checked
            }));
          };
          return /* @__PURE__ */jsxRuntimeExports.jsxs(Box, {
            className: styles$4.mainContainer,
            children: [/* @__PURE__ */jsxRuntimeExports.jsxs(Box, {
              sx: {
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between"
              },
              children: [/* @__PURE__ */jsxRuntimeExports.jsx(Typography, {
                color: "#1a2052",
                fontWeight: "600",
                children: t("edit_survey.background_audio")
              }), /* @__PURE__ */jsxRuntimeExports.jsx(Switch, {
                disabled: isDisabled,
                name: SURVEY.BACKGROUND_AUDIO,
                checked: survey.backgroundAudio,
                onChange: onChangeCheckbox,
                sx: useCustomSwitchStyles
              })]
            }), /* @__PURE__ */jsxRuntimeExports.jsxs(Box, {
              sx: {
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between"
              },
              children: [/* @__PURE__ */jsxRuntimeExports.jsx(Typography, {
                color: "#1a2052",
                fontWeight: "600",
                children: t("edit_survey.record_gps")
              }), /* @__PURE__ */jsxRuntimeExports.jsx(Switch, {
                disabled: isDisabled,
                name: SURVEY.RECORD_GPS,
                checked: survey.recordGps,
                onChange: onChangeCheckbox,
                sx: useCustomSwitchStyles
              })]
            }), /* @__PURE__ */jsxRuntimeExports.jsxs(Box, {
              sx: {
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between"
              },
              children: [/* @__PURE__ */jsxRuntimeExports.jsx(Typography, {
                color: "#1a2052",
                fontWeight: "600",
                children: t("edit_survey.can_lock_survey")
              }), /* @__PURE__ */jsxRuntimeExports.jsx(Switch, {
                disabled: isDisabled,
                name: SURVEY.CAN_LOCK_SURVEY,
                checked: survey.canLockSurvey,
                onChange: onChangeCheckbox,
                sx: useCustomSwitchStyles
              })]
            })]
          });
        }
        const SurveyOffline$1 = React.memo(SurveyOffline);
        const mainContainer$2 = "_mainContainer_19672_1";
        const formControlCheckBox = "_formControlCheckBox_19672_9";
        const styles$3 = {
          mainContainer: mainContainer$2,
          formControlCheckBox: formControlCheckBox
        };
        function SurveyPrivacy() {
          const dispatch = useDispatch();
          const _useTranslation2 = useTranslation("manage"),
            t = _useTranslation2.t;
          const survey = useSelector(state => state.editState.survey);
          const isDisabled = !isSurveyAdmin() || survey.status == SURVEY_STATUS.CLOSED;
          const onChangeCheckbox = e => {
            dispatch(surveyAttributeChanged({
              key: e.target.name,
              value: e.target.checked
            }));
          };
          return /* @__PURE__ */jsxRuntimeExports.jsxs(Box, {
            className: styles$3.mainContainer,
            children: [/* @__PURE__ */jsxRuntimeExports.jsxs(Box, {
              sx: {
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between"
              },
              children: [/* @__PURE__ */jsxRuntimeExports.jsx(Typography, {
                color: "#1a2052",
                fontWeight: "600",
                children: t("edit_survey.save_ip")
              }), /* @__PURE__ */jsxRuntimeExports.jsx(Switch, {
                disabled: isDisabled,
                name: SURVEY.SAVE_IP,
                checked: survey.saveIp,
                onChange: onChangeCheckbox,
                sx: useCustomSwitchStyles
              })]
            }), /* @__PURE__ */jsxRuntimeExports.jsxs(Box, {
              sx: {
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between"
              },
              children: [/* @__PURE__ */jsxRuntimeExports.jsx(Typography, {
                color: "#1a2052",
                fontWeight: "600",
                children: t("edit_survey.save_timings")
              }), /* @__PURE__ */jsxRuntimeExports.jsx(Switch, {
                disabled: isDisabled,
                name: SURVEY.SAVE_TIMINGS,
                checked: survey.saveTimings,
                onChange: onChangeCheckbox,
                sx: useCustomSwitchStyles
              })]
            })]
          });
        }
        const SurveyPrivacy$1 = React.memo(SurveyPrivacy);
        const wrapper = "_wrapper_1um7m_1";
        const action = "_action_1um7m_13";
        const userBlock = "_userBlock_1um7m_18";
        const styles$2 = {
          wrapper: wrapper,
          action: action,
          userBlock: userBlock
        };
        const AddPermission = ({
          open,
          onClose,
          addPermission,
          currentUserIds
        }) => {
          const _useTranslation3 = useTranslation("manage"),
            t = _useTranslation3.t;
          const _reactExports$useStat = reactExports.useState([]),
            _reactExports$useStat2 = _slicedToArray(_reactExports$useStat, 2),
            allUsers = _reactExports$useStat2[0],
            setAllUsers = _reactExports$useStat2[1];
          const getAllUsers = () => {
            UserService.getAllUsers().then(data => {
              if (data) {
                setAllUsers(data);
              }
            });
          };
          reactExports.useEffect(() => {
            getAllUsers();
          }, []);
          return /* @__PURE__ */jsxRuntimeExports.jsx(Modal, {
            sx: {
              ".MuiBackdrop-root": {
                backgroundColor: "rgba(0, 0, 0, 0.3)"
              }
            },
            open,
            onClose,
            "aria-labelledby": "modal-modal-title",
            "aria-describedby": "modal-modal-description",
            children: /* @__PURE__ */jsxRuntimeExports.jsxs(Box, {
              className: styles$2.wrapper,
              children: [allUsers.filter(user => {
                return currentUserIds.indexOf(user.id) == -1;
              }).map(user => {
                return /* @__PURE__ */jsxRuntimeExports.jsxs(Box, {
                  className: styles$2.userBlock,
                  children: [/* @__PURE__ */jsxRuntimeExports.jsxs(Box, {
                    children: [user.firstName, " ", user.lastName]
                  }), /* @__PURE__ */jsxRuntimeExports.jsx(Button, {
                    onClick: () => addPermission(user.id),
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
        const mainContainer$1 = "_mainContainer_15lvw_1";
        const addUserButton = "_addUserButton_15lvw_9";
        const styles$1 = {
          mainContainer: mainContainer$1,
          addUserButton: addUserButton
        };
        function SurveyUsers() {
          const dispatch = useDispatch();
          const _useTranslation4 = useTranslation("manage"),
            t = _useTranslation4.t;
          const survey = useSelector(state => state.editState.survey);
          const fetching = useSelector(state => state.editState.permissionsLoading);
          const permissionAll = useSelector(state => state.editState.permissions);
          const isDisabled = fetching || !isSurveyAdmin() || survey.status == SURVEY_STATUS.CLOSED;
          const onChangeCheckbox = e => {
            dispatch(surveyAttributeChanged({
              key: e.target.name,
              value: e.target.checked
            }));
          };
          const loadPermissions = surveyId => {
            SurveyService.getSurveyPermissionAll(surveyId).then(data => {
              if (data) {
                dispatch(permissionsReceived(data));
              }
              dispatch(permissionsLoading(false));
            }).catch(err => {
              processApirror(err);
            });
          };
          const _reactExports$useStat3 = reactExports.useState(null),
            _reactExports$useStat4 = _slicedToArray(_reactExports$useStat3, 2),
            userToDelete = _reactExports$useStat4[0],
            setUserToDelete = _reactExports$useStat4[1];
          const onCloseModal = () => {
            setUserToDelete(null);
          };
          const _reactExports$useStat5 = reactExports.useState(false),
            _reactExports$useStat6 = _slicedToArray(_reactExports$useStat5, 2),
            addPermission = _reactExports$useStat6[0],
            setAddPermission = _reactExports$useStat6[1];
          const onCloseModalAddPermission = () => {
            setAddPermission(false);
          };
          const processApirror = e => {
            dispatch(permissionsLoading(false));
            onApiError({
              error: e,
              globalErrorHandler: processedError => {
                dispatch(onError(processedError));
              }
            });
          };
          const deleteUser = () => {
            dispatch(permissionsLoading(true));
            onCloseModal();
            SurveyService.removePermission(survey.id, userToDelete.id).then(() => {
              loadPermissions(survey.id);
            }).catch(e => {
              processApirror(e);
            });
          };
          const postPermission = userId => {
            onCloseModalAddPermission();
            dispatch(permissionsLoading(true));
            SurveyService.addPermission(survey.id, userId).then(() => {
              loadPermissions(survey.id);
            }).catch(e => {
              processApirror(e);
            });
          };
          return /* @__PURE__ */jsxRuntimeExports.jsxs(Box, {
            className: styles$1.mainContainer,
            children: [/* @__PURE__ */jsxRuntimeExports.jsxs(Box, {
              sx: {
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between"
              },
              children: [/* @__PURE__ */jsxRuntimeExports.jsx(Typography, {
                color: "#1a2052",
                fontWeight: "600",
                children: t("label.public_within_org")
              }), /* @__PURE__ */jsxRuntimeExports.jsx(Switch, {
                disabled: isDisabled,
                name: SURVEY.PUBLIC_WITHIN_ORG,
                checked: survey.publicWithinOrg,
                onChange: onChangeCheckbox,
                sx: useCustomSwitchStyles
              })]
            }), /* @__PURE__ */jsxRuntimeExports.jsx(TableContainer, {
              sx: {
                boxShadow: "none"
              },
              component: Paper,
              children: /* @__PURE__ */jsxRuntimeExports.jsxs(Table, {
                sx: {
                  minWidth: 650
                },
                "aria-label": "simple table",
                children: [/* @__PURE__ */jsxRuntimeExports.jsx(TableHead, {
                  children: /* @__PURE__ */jsxRuntimeExports.jsxs(TableRow, {
                    children: [/* @__PURE__ */jsxRuntimeExports.jsx(TableCell, {
                      sx: {
                        color: "#1a2052"
                      },
                      align: "left",
                      children: t("users_manage.name")
                    }), /* @__PURE__ */jsxRuntimeExports.jsx(TableCell, {
                      sx: {
                        color: "#1a2052"
                      },
                      align: "left",
                      children: t("users_manage.email")
                    }), /* @__PURE__ */jsxRuntimeExports.jsx(TableCell, {
                      sx: {
                        color: "#1a2052"
                      },
                      align: "left",
                      children: t("users_manage.roles")
                    }), /* @__PURE__ */jsxRuntimeExports.jsx(TableCell, {})]
                  })
                }), /* @__PURE__ */jsxRuntimeExports.jsx(TableBody, {
                  children: permissionAll === null || permissionAll === void 0 ? void 0 : permissionAll.map(({
                    user
                  }) => {
                    return /* @__PURE__ */jsxRuntimeExports.jsxs(TableRow, {
                      children: [/* @__PURE__ */jsxRuntimeExports.jsxs(TableCell, {
                        sx: {
                          color: "#1a2052",
                          fontWeight: "500"
                        },
                        align: "left",
                        children: [user.firstName, " ", user.lastName]
                      }), /* @__PURE__ */jsxRuntimeExports.jsx(TableCell, {
                        sx: {
                          color: "#1a2052",
                          fontWeight: "500"
                        },
                        align: "left",
                        children: user.email
                      }), /* @__PURE__ */jsxRuntimeExports.jsx(TableCell, {
                        sx: {
                          color: "#1a2052",
                          fontWeight: "500"
                        },
                        align: "left",
                        children: user.roles.map(role => t(`label.${role}`)).join(", ")
                      }), /* @__PURE__ */jsxRuntimeExports.jsx(TableCell, {
                        sx: {
                          color: "#1a2052",
                          fontWeight: "500"
                        },
                        component: "th",
                        scope: "row",
                        children: /* @__PURE__ */jsxRuntimeExports.jsx(IconButton, {
                          title: t("users_manage.title_delete"),
                          disabled: isDisabled,
                          onClick: () => {
                            setUserToDelete(user);
                          },
                          children: /* @__PURE__ */jsxRuntimeExports.jsx(Close, {
                            sx: {
                              color: "#b9bdcc"
                            }
                          })
                        })
                      })]
                    }, user.id);
                  })
                })]
              })
            }), /* @__PURE__ */jsxRuntimeExports.jsx(Button, {
              disabled: isDisabled,
              className: styles$1.addUserButton,
              sx: {
                ml: "auto",
                mb: "10px",
                display: "flex",
                textTransform: "none"
              },
              onClick: () => {
                setAddPermission(true);
              },
              children: t("action_btn.add_user")
            }), Boolean(userToDelete) && /* @__PURE__ */jsxRuntimeExports.jsx(UserDelete, {
              deleteUser,
              name: userToDelete.firstName + " " + userToDelete.lastName,
              open: Boolean(userToDelete),
              onClose: onCloseModal
            }), addPermission && /* @__PURE__ */jsxRuntimeExports.jsx(AddPermission, {
              currentUserIds: permissionAll.map(permission => permission.user.id),
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
        const SurveyUsers$1 = React.memo(SurveyUsers);
        const mainContainer = "_mainContainer_2nff4_1";
        const styles = {
          mainContainer: mainContainer
        };
        function SurveyQuota() {
          const dispatch = useDispatch();
          const _useTranslation5 = useTranslation("manage"),
            t = _useTranslation5.t;
          const survey = useSelector(state => state.editState.survey);
          const _reactExports$useStat7 = reactExports.useState(survey.quota > 0),
            _reactExports$useStat8 = _slicedToArray(_reactExports$useStat7, 2),
            checked = _reactExports$useStat8[0],
            setChecked = _reactExports$useStat8[1];
          const _reactExports$useStat9 = reactExports.useState(survey.quota >= 0 ? survey.quota : ""),
            _reactExports$useStat10 = _slicedToArray(_reactExports$useStat9, 2),
            limit = _reactExports$useStat10[0],
            setLimit = _reactExports$useStat10[1];
          const changeLimit = value => {
            const intValue = parseInt(value);
            if (Number.isInteger(intValue) && intValue >= 0) {
              setLimit(intValue);
              dispatch(surveyAttributeChanged({
                key: "quota",
                value: intValue
              }));
            }
          };
          const fetching = useSelector(state => state.editState.permissionsLoading);
          const permissions = useSelector(state => state.editState.permissions);
          const permissionAll = permissions === null || permissions === void 0 ? void 0 : permissions.filter(permission => {
            return isSurveyor(permission.user);
          });
          const onChangeCheckbox = e => {
            if (!e.target.checked) {
              setLimit("");
              dispatch(surveyAttributeChanged({
                key: "quota",
                value: -1
              }));
            }
            setChecked(e.target.checked);
          };
          const putPermissionBySurveyor = (userId, quota) => {
            const data = {
              quota
            };
            dispatch(permissionsLoading(true));
            SurveyService.editPermission(survey.id, userId, data).then(() => {
              loadPermissions(survey.id);
            }).catch(err => {
              dispatch(permissionsLoading(false));
            });
          };
          const loadPermissions = surveyId => {
            SurveyService.getSurveyPermissionAll(surveyId).then(data => {
              if (data) {
                dispatch(permissionsReceived(data));
              }
              dispatch(permissionsLoading(false));
            }).catch(err => {
              dispatch(permissionsLoading(false));
            });
          };
          const isDisabled = fetching || !isSurveyAdmin() || survey.status == SURVEY_STATUS.CLOSED;
          return /* @__PURE__ */jsxRuntimeExports.jsxs(Box, {
            className: styles.mainContainer,
            children: [/* @__PURE__ */jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
              children: [/* @__PURE__ */jsxRuntimeExports.jsxs(Box, {
                sx: {
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between"
                },
                children: [/* @__PURE__ */jsxRuntimeExports.jsxs(Box, {
                  sx: {
                    width: "100%",
                    display: "flex",
                    alignItems: "end",
                    gap: "1rem"
                  },
                  children: [/* @__PURE__ */jsxRuntimeExports.jsx(Typography, {
                    color: "#1a2052",
                    fontWeight: "600",
                    children: t("label.apply_quota")
                  }), /* @__PURE__ */jsxRuntimeExports.jsx(TextField, {
                    variant: "standard",
                    type: "number",
                    sx: {
                      width: 200
                    },
                    disabled: !checked || isDisabled,
                    label: t("label.total_responses_limit"),
                    value: limit,
                    onChange: e => {
                      changeLimit(e.target.value);
                    }
                  })]
                }), /* @__PURE__ */jsxRuntimeExports.jsx(Switch, {
                  disabled: isDisabled,
                  checked,
                  onChange: onChangeCheckbox,
                  sx: useCustomSwitchStyles
                })]
              }), /* @__PURE__ */jsxRuntimeExports.jsxs(Box, {
                children: [/* @__PURE__ */jsxRuntimeExports.jsx(Typography, {
                  color: "#1a2052",
                  mb: "10px",
                  fontWeight: "600",
                  variant: "h6",
                  children: t("edit_survey.limit_responses")
                }), /* @__PURE__ */jsxRuntimeExports.jsx(TableContainer, {
                  sx: {
                    boxShadow: "none"
                  },
                  component: Paper,
                  children: /* @__PURE__ */jsxRuntimeExports.jsxs(Table, {
                    sx: {
                      minWidth: 650
                    },
                    "aria-label": "simple table",
                    children: [/* @__PURE__ */jsxRuntimeExports.jsx(TableHead, {
                      children: /* @__PURE__ */jsxRuntimeExports.jsxs(TableRow, {
                        children: [/* @__PURE__ */jsxRuntimeExports.jsx(TableCell, {
                          sx: {
                            color: "#1a2052"
                          },
                          align: "left",
                          children: t("edit_survey.surveyor")
                        }), /* @__PURE__ */jsxRuntimeExports.jsx(TableCell, {
                          sx: {
                            color: "#1a2052"
                          },
                          align: "left",
                          children: t("users_manage.roles")
                        }), /* @__PURE__ */jsxRuntimeExports.jsx(TableCell, {
                          sx: {
                            color: "#1a2052"
                          },
                          align: "left",
                          children: t("edit_survey.count")
                        }), /* @__PURE__ */jsxRuntimeExports.jsx(TableCell, {
                          sx: {
                            color: "#1a2052"
                          },
                          align: "left",
                          children: t("edit_survey.limit")
                        })]
                      })
                    }), /* @__PURE__ */jsxRuntimeExports.jsx(TableBody, {
                      children: permissionAll === null || permissionAll === void 0 ? void 0 : permissionAll.map(permission => {
                        return /* @__PURE__ */jsxRuntimeExports.jsxs(TableRow, {
                          children: [/* @__PURE__ */jsxRuntimeExports.jsxs(TableCell, {
                            align: "left",
                            sx: {
                              color: "#1a2052",
                              fontWeight: "500"
                            },
                            children: [permission.user.firstName, " ", permission.user.lastName]
                          }), /* @__PURE__ */jsxRuntimeExports.jsx(TableCell, {
                            sx: {
                              color: "#1a2052",
                              fontWeight: "500"
                            },
                            align: "left",
                            children: permission.user.roles.map(role => t(`label.${role}`)).join(", ")
                          }), /* @__PURE__ */jsxRuntimeExports.jsx(TableCell, {
                            sx: {
                              color: "#1a2052",
                              fontWeight: "500"
                            },
                            align: "left",
                            children: permission.count
                          }), /* @__PURE__ */jsxRuntimeExports.jsx(TableCell, {
                            sx: {
                              color: "#1a2052",
                              fontWeight: "500"
                            },
                            align: "left",
                            children: /* @__PURE__ */jsxRuntimeExports.jsx(UserQuota, {
                              t,
                              quota: permission.quota,
                              isDisabled,
                              onSubmit: quota => {
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
        function UserQuota({
          t,
          isDisabled,
          quota,
          onSubmit
        }) {
          const _reactExports$useStat11 = reactExports.useState(quota > 0),
            _reactExports$useStat12 = _slicedToArray(_reactExports$useStat11, 2),
            checked = _reactExports$useStat12[0],
            setChecked = _reactExports$useStat12[1];
          const _reactExports$useStat13 = reactExports.useState(quota >= 0 ? quota : ""),
            _reactExports$useStat14 = _slicedToArray(_reactExports$useStat13, 2),
            limit = _reactExports$useStat14[0],
            setLimit = _reactExports$useStat14[1];
          const onChangeCheckbox = e => {
            if (!e.target.checked) {
              setLimit("");
            }
            setChecked(e.target.checked);
          };
          const changeLimit = value => {
            const intValue = parseInt(value);
            if (Number.isInteger(intValue) && intValue >= 0) {
              setLimit(intValue);
            }
          };
          return /* @__PURE__ */jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
            children: [/* @__PURE__ */jsxRuntimeExports.jsxs(Box, {
              sx: {
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: ".5rem"
              },
              children: [/* @__PURE__ */jsxRuntimeExports.jsx(Typography, {
                color: "#1a2052",
                fontWeight: "600",
                children: t("label.apply_quota")
              }), /* @__PURE__ */jsxRuntimeExports.jsx(Switch, {
                disabled: isDisabled,
                checked,
                onChange: onChangeCheckbox,
                sx: useCustomSwitchStyles
              })]
            }), /* @__PURE__ */jsxRuntimeExports.jsxs(Stack, {
              flexDirection: "row",
              alignItems: "bottom",
              children: [/* @__PURE__ */jsxRuntimeExports.jsx(TextField, {
                type: "number",
                variant: "standard",
                label: t("label.responses_limit"),
                disabled: !checked || isDisabled,
                value: limit,
                onChange: e => {
                  changeLimit(e.target.value);
                }
              }), /* @__PURE__ */jsxRuntimeExports.jsx(Button, {
                onClick: () => onSubmit(limit == "" ? -1 : limit),
                disabled: limit == "" && quota < 0 || limit == quota,
                children: t("action_btn.save")
              })]
            })]
          });
        }
        const SurveyQuota$1 = React.memo(SurveyQuota);
        function EditSurvey() {
          const _useTranslation6 = useTranslation("manage"),
            t = _useTranslation6.t;
          const sections = [{
            id: "offline",
            title: t("edit_survey.offline"),
            component: /* @__PURE__ */jsxRuntimeExports.jsx(SurveyOffline$1, {})
          }, {
            id: "quotas",
            title: t("edit_survey.quotas"),
            component: /* @__PURE__ */jsxRuntimeExports.jsx(SurveyQuota$1, {})
          }, {
            id: "survey_users",
            title: t("edit_survey.survey_users"),
            component: /* @__PURE__ */jsxRuntimeExports.jsx(SurveyUsers$1, {})
          }, {
            id: "privacy",
            title: t("edit_survey.privacy"),
            component: /* @__PURE__ */jsxRuntimeExports.jsx(SurveyPrivacy$1, {})
          }];
          return /* @__PURE__ */jsxRuntimeExports.jsx(Box, {
            className: styles$5.mainContainer,
            children: sections.map(section => {
              return /* @__PURE__ */jsxRuntimeExports.jsxs(Accordion, {
                sx: {
                  boxShadow: "none",
                  borderRadius: "15px",
                  "&.MuiAccordion-root:first-of-type": {
                    borderRadius: "15px"
                  },
                  "&.MuiPaper-root:before": {
                    display: "none"
                  },
                  padding: "2rem"
                },
                defaultExpanded: true,
                children: [/* @__PURE__ */jsxRuntimeExports.jsx(AccordionSummary, {
                  expandIcon: /* @__PURE__ */jsxRuntimeExports.jsx(default_1, {}),
                  "aria-controls": "panel1a-content",
                  id: "panel1a-header",
                  children: /* @__PURE__ */jsxRuntimeExports.jsx(Typography, {
                    fontWeight: "600",
                    color: "#1a2052",
                    variant: "h5",
                    children: section.title
                  })
                }), /* @__PURE__ */jsxRuntimeExports.jsx(AccordionDetails, {
                  sx: {
                    paddingLeft: "3rem"
                  },
                  children: section.component
                })]
              }, section.id);
            })
          });
        }
        const index = exports('default', React.memo(EditSurvey));
      }
    };
  });
})();
//# sourceMappingURL=index-legacy-_hhO3ahP.js.map
