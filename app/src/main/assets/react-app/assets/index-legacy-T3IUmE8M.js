;
(function () {
  function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
  function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : String(i); }
  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
  function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
  System.register(['./index-legacy-T3s18jo3.js', './UserService-legacy-idayBd14.js', './Web-legacy-LDhM2X1u.js', './FormControlLabel-legacy-0Ne4M7i6.js', './FormGroup-legacy-aaf9eppM.js', './TextField-legacy-vL2OdS5Q.js', './DatePicker-legacy-9Ey9K3I7.js', './LockOpen-legacy-0yg11qwQ.js', './Checkbox-legacy-8hCFdihe.js', './SwitchBase-legacy-VpMr3A_z.js', './Grid-legacy-ZQipiKyz.js'], function (exports, module) {
    'use strict';

    var createSvgIcon, jsxRuntimeExports, useNavigate, useDispatch, TokenService, reactExports, useTranslation, Box, Typography, IconButton, Button, setLoading, onApiError, onError, PROCESSED_ERRORS, UserService, AuthService, routes, Stack, FormGroup, TextField, FormHelperText, InputAdornment, LockOpen, Lock;
    return {
      setters: [module => {
        createSvgIcon = module.c;
        jsxRuntimeExports = module.j;
        useNavigate = module.w;
        useDispatch = module.z;
        TokenService = module.T;
        reactExports = module.r;
        useTranslation = module.x;
        Box = module.B;
        Typography = module.a0;
        IconButton = module.I;
        Button = module.a1;
        setLoading = module.D;
        onApiError = module.a3;
        onError = module.a7;
        PROCESSED_ERRORS = module.a4;
      }, module => {
        UserService = module.U;
      }, module => {
        AuthService = module.A;
        routes = module.r;
      }, module => {
        Stack = module.S;
      }, module => {
        FormGroup = module.F;
      }, module => {
        TextField = module.T;
        FormHelperText = module.F;
      }, module => {
        InputAdornment = module.I;
      }, module => {
        LockOpen = module.L;
        Lock = module.a;
      }, null, null, null],
      execute: function execute() {
        var __vite_style__ = document.createElement('style');
        __vite_style__.textContent = "._mainContainer_mkyx6_1 {\n  height: calc(100vh - 80px);\n  overflow: auto;\n  display: flex;\n  justify-content: center;\n  align-items: start;\n  width: 100vw;\n  background-color: #f7f8fc;\n}\n._flexContainer_mkyx6_10 {\n  display: flex;\n  gap: 20px;\n}\n._createUserCard_mkyx6_14 {\n  width: 850px;\n  margin-top: 40px;\n  padding: 4rem;\n  border-radius: 30px;\n  background-color: #fff;\n}\n\n@media (max-width: 768px) {\n  ._createUserCard_mkyx6_14 {\n    padding: 2rem;\n  }\n}\n\n@media (max-width: 480px) {\n  ._createUserCard_mkyx6_14 {\n    padding: 1rem;\n  }\n}\n._operationsDiv_mkyx6_33 {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n\n._formGroup_mkyx6_39 {\n  display: flex;\n  flex-direction: column;\n  gap: 2rem;\n  flex: 1;\n}\n\n._errorText_mkyx6_46 {\n  color: #eb5757 !important;\n}\n\n._hint_mkyx6_50 {\n  background-color: #ff9800;\n  color: #000;\n  padding: 15px 10px;\n  border-radius: 8px;\n}\n\n._cancelButton_mkyx6_57 {\n  text-transform: none !important;\n  font-weight: 600 !important;\n  padding: 0.5rem 2.5rem !important;\n  color: #17163a !important;\n  background-color: #dfe2ef !important;\n  border-radius: 9999px !important;\n}\n._saveButton_mkyx6_65 {\n  text-transform: none !important;\n  font-weight: 600 !important;\n  padding: 0.5rem 2.5rem !important;\n  color: #fff !important;\n  background-color: #04bdf3 !important;\n  border-radius: 9999px !important;\n}\n\n._container_mkyx6_74 {\n  display: flex;\n  justify-content: space-between;\n  margin-top: 40px;\n}\n\n._flexItem_mkyx6_80 {\n  display: flex;\n  gap: 0.5rem;\n  align-items: center;\n  flex: 0 0 33%;\n}\n\n@media (max-width: 768px) {\n  ._container_mkyx6_74 {\n    flex-direction: column;\n    gap: 2rem;\n  }\n}\n\n._flexItemRight_mkyx6_94 {\n  justify-content: flex-end;\n}\n\n._buttonGroup_mkyx6_98 {\n  display: flex;\n  gap: 0.5rem;\n  align-items: center;\n}\n\n@media (max-width: 768px) {\n  ._buttonGroup_mkyx6_98 {\n    flex-direction: column;\n    justify-content: center;\n  }\n  ._buttonGroup_mkyx6_98 button {\n    width: 100%;\n  }\n}\n\n@media (min-width: 768px) and (max-width: 901.98px) {\n  ._container_mkyx6_74 {\n    flex-direction: column;\n    gap: 2rem;\n  }\n  ._buttonGroup_mkyx6_98 {\n    justify-content: end;\n  }\n}\n";
        document.head.appendChild(__vite_style__);
        exports('default', Profile);
        const ModeComment = createSvgIcon( /*#__PURE__*/jsxRuntimeExports.jsx("path", {
          d: "M21.99 4c0-1.1-.89-2-1.99-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4-.01-18z"
        }), 'ModeComment');
        const mainContainer = "_mainContainer_mkyx6_1";
        const flexContainer = "_flexContainer_mkyx6_10";
        const createUserCard = "_createUserCard_mkyx6_14";
        const operationsDiv = "_operationsDiv_mkyx6_33";
        const formGroup = "_formGroup_mkyx6_39";
        const errorText = "_errorText_mkyx6_46";
        const hint = "_hint_mkyx6_50";
        const cancelButton = "_cancelButton_mkyx6_57";
        const saveButton = "_saveButton_mkyx6_65";
        const container = "_container_mkyx6_74";
        const flexItem = "_flexItem_mkyx6_80";
        const flexItemRight = "_flexItemRight_mkyx6_94";
        const buttonGroup = "_buttonGroup_mkyx6_98";
        const styles = {
          mainContainer: mainContainer,
          flexContainer: flexContainer,
          createUserCard: createUserCard,
          operationsDiv: operationsDiv,
          formGroup: formGroup,
          errorText: errorText,
          hint: hint,
          cancelButton: cancelButton,
          saveButton: saveButton,
          container: container,
          flexItem: flexItem,
          flexItemRight: flexItemRight,
          buttonGroup: buttonGroup
        };
        function Profile() {
          const navigate = useNavigate();
          const dispatch = useDispatch();
          const userId = TokenService.getUser().id;
          const _reactExports$useStat = reactExports.useState({}),
            _reactExports$useStat2 = _slicedToArray(_reactExports$useStat, 2),
            user = _reactExports$useStat2[0],
            setUser = _reactExports$useStat2[1];
          const _useTranslation = useTranslation("manage"),
            t = _useTranslation.t;
          const _reactExports$useStat3 = reactExports.useState(""),
            _reactExports$useStat4 = _slicedToArray(_reactExports$useStat3, 2),
            email = _reactExports$useStat4[0],
            setEmail = _reactExports$useStat4[1];
          const _reactExports$useStat5 = reactExports.useState(""),
            _reactExports$useStat6 = _slicedToArray(_reactExports$useStat5, 2),
            emailError = _reactExports$useStat6[0],
            setEmailError = _reactExports$useStat6[1];
          const _reactExports$useStat7 = reactExports.useState(""),
            _reactExports$useStat8 = _slicedToArray(_reactExports$useStat7, 2),
            firstName = _reactExports$useStat8[0],
            setFirstName = _reactExports$useStat8[1];
          const _reactExports$useStat9 = reactExports.useState(""),
            _reactExports$useStat10 = _slicedToArray(_reactExports$useStat9, 2),
            firstNameError = _reactExports$useStat10[0],
            setFirstNameError = _reactExports$useStat10[1];
          const _reactExports$useStat11 = reactExports.useState(""),
            _reactExports$useStat12 = _slicedToArray(_reactExports$useStat11, 2),
            lastName = _reactExports$useStat12[0],
            setLastName = _reactExports$useStat12[1];
          const _reactExports$useStat13 = reactExports.useState(""),
            _reactExports$useStat14 = _slicedToArray(_reactExports$useStat13, 2),
            lastNameError = _reactExports$useStat14[0],
            setLastNameError = _reactExports$useStat14[1];
          const _reactExports$useStat15 = reactExports.useState(""),
            _reactExports$useStat16 = _slicedToArray(_reactExports$useStat15, 2),
            currentPassword = _reactExports$useStat16[0],
            setCurrentPassword = _reactExports$useStat16[1];
          const _reactExports$useStat17 = reactExports.useState(""),
            _reactExports$useStat18 = _slicedToArray(_reactExports$useStat17, 2),
            currentPasswordError = _reactExports$useStat18[0],
            setCurrentPasswordError = _reactExports$useStat18[1];
          const _reactExports$useStat19 = reactExports.useState(""),
            _reactExports$useStat20 = _slicedToArray(_reactExports$useStat19, 2),
            newPass = _reactExports$useStat20[0],
            setNewPassword = _reactExports$useStat20[1];
          const _reactExports$useStat21 = reactExports.useState(""),
            _reactExports$useStat22 = _slicedToArray(_reactExports$useStat21, 2),
            passNewError = _reactExports$useStat22[0],
            setNewPassError = _reactExports$useStat22[1];
          const _reactExports$useStat23 = reactExports.useState(""),
            _reactExports$useStat24 = _slicedToArray(_reactExports$useStat23, 2),
            confrimNewPassword = _reactExports$useStat24[0],
            setConfrimNewPassword = _reactExports$useStat24[1];
          const _reactExports$useStat25 = reactExports.useState(""),
            _reactExports$useStat26 = _slicedToArray(_reactExports$useStat25, 2),
            confrimNewPasswordError = _reactExports$useStat26[0],
            setConfrimNewPasswordError = _reactExports$useStat26[1];
          const _reactExports$useStat27 = reactExports.useState(OPERATION.NONE),
            _reactExports$useStat28 = _slicedToArray(_reactExports$useStat27, 2),
            operation = _reactExports$useStat28[0],
            setOprtation = _reactExports$useStat28[1];
          const _reactExports$useStat29 = reactExports.useState(false),
            _reactExports$useStat30 = _slicedToArray(_reactExports$useStat29, 2),
            showCurrentPass = _reactExports$useStat30[0],
            setShowCurrentPass = _reactExports$useStat30[1];
          const _reactExports$useStat31 = reactExports.useState(false),
            _reactExports$useStat32 = _slicedToArray(_reactExports$useStat31, 2),
            showNewPass = _reactExports$useStat32[0],
            setShowNewPass = _reactExports$useStat32[1];
          const _reactExports$useStat33 = reactExports.useState(false),
            _reactExports$useStat34 = _slicedToArray(_reactExports$useStat33, 2),
            showConfirmPass = _reactExports$useStat34[0],
            setShowConfirmPass = _reactExports$useStat34[1];
          const handleClickShowCurrentPass = () => setShowCurrentPass(show => !show);
          const handleClickShowNewPass = () => setShowNewPass(show => !show);
          const handleClickShowConfirmPass = () => setShowConfirmPass(show => !show);
          const onEmailChanged = e => {
            setEmail(e.target.value);
            setEmailError("");
          };
          const onFirstNameChanged = e => {
            setFirstName(e.target.value);
            setFirstNameError("");
          };
          const onLastChanged = e => {
            setLastName(e.target.value);
            setLastNameError("");
          };
          const onCurrentPasswordChanged = e => {
            setCurrentPassword(e.target.value);
            setCurrentPasswordError("");
          };
          const onNewPasswordChanged = e => {
            setNewPassword(e.target.value);
            setNewPassError("");
          };
          const onConfirmPasswordChanges = e => {
            setConfrimNewPassword(e.target.value);
            setConfrimNewPasswordError("");
          };
          const criticalChange = operation === OPERATION.CHANGE_EMAIL || operation === OPERATION.CHANGE_PASSWORD;
          const validate = () => {
            setEmailError("");
            setFirstNameError("");
            setLastNameError("");
            if (firstName.length == 0) {
              setFirstNameError(t("firstname_required"));
              return false;
            }
            if (lastName.length == 0) {
              setLastNameError(t("lastname_required"));
              return false;
            }
            if (email.length == 0) {
              setEmailError(t("email_required"));
              return false;
            }
            if (criticalChange & !currentPassword) {
              setCurrentPasswordError(t("password_required"));
              return false;
            }
            if (newPass != confrimNewPassword) {
              setConfrimNewPasswordError(t("error.password_should_match"));
              return false;
            }
            return true;
          };
          const logout = () => {
            AuthService.logout().then(() => {
              navigate(routes.login);
            }).catch(e => {
              navigate(routes.login);
            });
          };
          const onSubmit = () => {
            if (!validate()) {
              return;
            }
            dispatch(setLoading(true));
            const data = {};
            if (user.firstName !== firstName) {
              data.firstName = firstName;
            }
            if (user.lastName !== lastName) {
              data.lastName = lastName;
            }
            if (user.email !== email) {
              data.email = email;
            }
            if (currentPassword !== "") {
              data.password = currentPassword;
            }
            if (newPass !== "") {
              data.newPassword = newPass;
            }
            UserService.updateUserProfile(data).then(() => {
              if (criticalChange) {
                logout();
              }
            }).catch(e => {
              onApiError({
                error: e,
                globalErrorHandler: processedError => {
                  dispatch(onError(processedError));
                },
                locallErrorHandler: processedError => {
                  if (processedError.name == PROCESSED_ERRORS.DUPLICATE_EMAIL.name) {
                    setEmailError(t(`processed_errors.${processed.name}`));
                  } else if (processedError.name == WRONG_CREDENTIALS.INVALID_SURVEY_DATES.name) {
                    setCurrentPasswordError(t("processed_errors.wrong_password"));
                  }
                }
              });
            }).finally(() => {
              dispatch(setLoading(false));
            });
          };
          reactExports.useEffect(() => {
            UserService.getUser({
              userId
            }).then(response => {
              setUser(response);
              setEmail(response.email);
              setFirstName(response.firstName);
              setLastName(response.lastName);
            });
          }, []);
          const commonInputProps = {
            disableUnderline: true,
            style: {
              marginLeft: ".875rem",
              backgroundColor: "#eff1fc",
              borderRadius: "9999px",
              padding: ".5rem 1.5rem",
              color: "#16205b",
              marginTop: "1.5rem"
            }
          };
          return /* @__PURE__ */jsxRuntimeExports.jsx(Box, {
            className: styles.mainContainer,
            children: /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
              className: styles.createUserCard,
              children: [/* @__PURE__ */jsxRuntimeExports.jsx(Typography, {
                variant: "h5",
                sx: {
                  mb: "25px",
                  fontWeight: "600",
                  color: "#16205b"
                },
                children: t("profile.title")
              }), /* @__PURE__ */jsxRuntimeExports.jsx(Stack, {
                flexDirection: "row",
                gap: 5,
                alignItems: "center",
                children: /* @__PURE__ */jsxRuntimeExports.jsxs(FormGroup, {
                  className: styles.formGroup,
                  children: [/* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                    className: styles.flexContainer,
                    children: [/* @__PURE__ */jsxRuntimeExports.jsxs(Box, {
                      sx: {
                        width: "100%"
                      },
                      children: [/* @__PURE__ */jsxRuntimeExports.jsx(TextField, {
                        error: firstNameError.length > 0,
                        required: true,
                        value: firstName,
                        id: "firstName",
                        label: t("label.first_name"),
                        name: "firstName",
                        onChange: onFirstNameChanged,
                        variant: "standard",
                        InputProps: commonInputProps,
                        InputLabelProps: {
                          shrink: true
                        }
                      }), firstNameError && /* @__PURE__ */jsxRuntimeExports.jsx(FormHelperText, {
                        className: styles.errorText,
                        children: firstNameError
                      })]
                    }), /* @__PURE__ */jsxRuntimeExports.jsxs(Box, {
                      sx: {
                        width: "100%"
                      },
                      children: [/* @__PURE__ */jsxRuntimeExports.jsx(TextField, {
                        error: (lastNameError === null || lastNameError === void 0 ? void 0 : lastNameError.length) > 0,
                        id: "lastName",
                        value: lastName,
                        required: true,
                        onChange: onLastChanged,
                        label: t("label.last_name"),
                        name: "lastName",
                        variant: "standard",
                        InputProps: commonInputProps,
                        InputLabelProps: {
                          shrink: true
                        }
                      }), lastNameError && /* @__PURE__ */jsxRuntimeExports.jsx(FormHelperText, {
                        className: styles.errorText,
                        children: lastNameError
                      })]
                    })]
                  }), /* @__PURE__ */jsxRuntimeExports.jsx(TextField, {
                    disabled: operation != OPERATION.CHANGE_EMAIL,
                    required: true,
                    value: email,
                    error: (emailError === null || emailError === void 0 ? void 0 : emailError.length) > 0,
                    id: "email",
                    onChange: onEmailChanged,
                    label: t("label.email"),
                    name: "email",
                    variant: "standard",
                    InputProps: commonInputProps,
                    InputLabelProps: {
                      shrink: true,
                      htmlFor: "confirm-new-password"
                    }
                  }), emailError && /* @__PURE__ */jsxRuntimeExports.jsx(FormHelperText, {
                    className: styles.errorText,
                    children: emailError
                  }), /* @__PURE__ */jsxRuntimeExports.jsxs(Box, {
                    className: styles.operationsDiv,
                    children: [operation == OPERATION.CHANGE_PASSWORD && /* @__PURE__ */jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
                      children: [/* @__PURE__ */jsxRuntimeExports.jsx(TextField, {
                        required: true,
                        variant: "standard",
                        label: t("label.new_password"),
                        error: passNewError.length > 0,
                        onChange: onNewPasswordChanged,
                        name: "password",
                        value: newPass,
                        type: showNewPass ? "text" : "password",
                        id: "standard-adornment-password",
                        sx: {
                          mt: "10px"
                        },
                        InputProps: _objectSpread(_objectSpread({}, commonInputProps), {}, {
                          endAdornment: /* @__PURE__ */jsxRuntimeExports.jsx(InputAdornment, {
                            position: "end",
                            children: /* @__PURE__ */jsxRuntimeExports.jsx(IconButton, {
                              "aria-label": "toggle password visibility",
                              onClick: handleClickShowNewPass,
                              children: showNewPass ? /* @__PURE__ */jsxRuntimeExports.jsx(LockOpen, {
                                sx: {
                                  color: "#16205b"
                                }
                              }) : /* @__PURE__ */jsxRuntimeExports.jsx(Lock, {
                                sx: {
                                  color: "#16205b"
                                }
                              })
                            })
                          })
                        }),
                        InputLabelProps: {
                          shrink: true
                        }
                      }), passNewError && /* @__PURE__ */jsxRuntimeExports.jsx(FormHelperText, {
                        className: styles.errorText,
                        children: passNewError
                      }), /* @__PURE__ */jsxRuntimeExports.jsx(TextField, {
                        required: true,
                        variant: "standard",
                        label: t("label.confirm_new_password"),
                        error: confrimNewPasswordError.length > 0,
                        onChange: onConfirmPasswordChanges,
                        name: "cpassword",
                        type: showConfirmPass ? "text" : "password",
                        value: confrimNewPassword,
                        id: "confirm-new-password",
                        sx: {
                          mt: "10px"
                        },
                        InputProps: _objectSpread(_objectSpread({}, commonInputProps), {}, {
                          endAdornment: /* @__PURE__ */jsxRuntimeExports.jsx(InputAdornment, {
                            position: "end",
                            children: /* @__PURE__ */jsxRuntimeExports.jsx(IconButton, {
                              "aria-label": "toggle password visibility",
                              onClick: handleClickShowConfirmPass,
                              children: showConfirmPass ? /* @__PURE__ */jsxRuntimeExports.jsx(LockOpen, {
                                sx: {
                                  color: "#16205b"
                                }
                              }) : /* @__PURE__ */jsxRuntimeExports.jsx(Lock, {
                                sx: {
                                  color: "#16205b"
                                }
                              })
                            })
                          })
                        }),
                        InputLabelProps: {
                          shrink: true,
                          htmlFor: "confirm-new-password"
                        }
                      }), confrimNewPasswordError && /* @__PURE__ */jsxRuntimeExports.jsx(FormHelperText, {
                        className: styles.errorText,
                        children: confrimNewPasswordError
                      })]
                    }), criticalChange && /* @__PURE__ */jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
                      children: [/* @__PURE__ */jsxRuntimeExports.jsx(TextField, {
                        required: true,
                        variant: "standard",
                        label: t("label.current_password"),
                        error: currentPasswordError.length > 0,
                        onChange: onCurrentPasswordChanged,
                        name: "password",
                        type: showCurrentPass ? "text" : "password",
                        value: currentPassword,
                        sx: {
                          mt: "10px"
                        },
                        InputProps: _objectSpread(_objectSpread({}, commonInputProps), {}, {
                          endAdornment: /* @__PURE__ */jsxRuntimeExports.jsx(InputAdornment, {
                            position: "end",
                            children: /* @__PURE__ */jsxRuntimeExports.jsx(IconButton, {
                              "aria-label": "toggle password visibility",
                              onClick: handleClickShowCurrentPass,
                              children: showCurrentPass ? /* @__PURE__ */jsxRuntimeExports.jsx(LockOpen, {
                                sx: {
                                  color: "#16205b"
                                }
                              }) : /* @__PURE__ */jsxRuntimeExports.jsx(Lock, {
                                sx: {
                                  color: "#16205b"
                                }
                              })
                            })
                          })
                        }),
                        InputLabelProps: {
                          shrink: true,
                          htmlFor: "confirm-new-password"
                        }
                      }), currentPasswordError && /* @__PURE__ */jsxRuntimeExports.jsx(FormHelperText, {
                        className: styles.errorText,
                        children: currentPasswordError
                      }), /* @__PURE__ */jsxRuntimeExports.jsx(FormHelperText, {
                        children: t("profile.password_required")
                      })]
                    })]
                  })]
                })
              }), /* @__PURE__ */jsxRuntimeExports.jsxs(Box, {
                className: styles.container,
                children: [/* @__PURE__ */jsxRuntimeExports.jsxs(Box, {
                  className: `${styles.flexItem} ${styles.flexItemLeft}`,
                  children: [/* @__PURE__ */jsxRuntimeExports.jsx(ModeComment, {
                    sx: {
                      color: "#fee33f"
                    }
                  }), /* @__PURE__ */jsxRuntimeExports.jsx(Typography, {
                    variant: "subtitle2",
                    sx: {
                      fontWeight: "400"
                    },
                    children: "When you change your email or password, you will be logged out"
                  })]
                }), /* @__PURE__ */jsxRuntimeExports.jsxs(Box, {
                  className: `${styles.buttonGroup}`,
                  children: [operation == OPERATION.NONE && /* @__PURE__ */jsxRuntimeExports.jsx(Button, {
                    className: styles.cancelButton,
                    onClick: () => setOprtation(OPERATION.CHANGE_EMAIL),
                    children: t("profile.change_email")
                  }), operation == OPERATION.NONE && /* @__PURE__ */jsxRuntimeExports.jsx(Button, {
                    className: styles.cancelButton,
                    onClick: () => setOprtation(OPERATION.CHANGE_PASSWORD),
                    children: t("profile.change_password")
                  }), criticalChange && /* @__PURE__ */jsxRuntimeExports.jsx(Button, {
                    className: styles.cancelButton,
                    onClick: () => setOprtation(OPERATION.NONE),
                    children: t("profile.cancel")
                  }), /* @__PURE__ */jsxRuntimeExports.jsx(Button, {
                    className: styles.saveButton,
                    onClick: onSubmit,
                    children: t("profile.save")
                  })]
                })]
              })]
            })
          });
        }
        const OPERATION = {
          NONE: {},
          CHANGE_EMAIL: {},
          CHANGE_PASSWORD: {}
        };
      }
    };
  });
})();
//# sourceMappingURL=index-legacy-T3IUmE8M.js.map
