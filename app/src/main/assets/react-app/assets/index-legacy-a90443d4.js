;
(function () {
  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
  function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
  System.register(['./index-legacy-bc4d1445.js', './index-legacy-134a0306.js', './index-legacy-f3e074d0.js', './UserService-legacy-b9386cbf.js', './AuthService-legacy-33b4639d.js', './common-legacy-e4fabe10.js', './Card-legacy-e4d900e5.js', './Stack-legacy-31bc17aa.js', './FormGroup-legacy-2e722597.js', './TextField-legacy-0eb50016.js', './InputLabel-legacy-753eca05.js', './InputAdornment-legacy-a4a0a43f.js', './VisibilityOff-legacy-3d427260.js', './ArrowBack-legacy-7280d160.js', './LogoutOutlined-legacy-0975a2ec.js'], function (exports, module) {
    'use strict';

    var __vite_style__ = document.createElement('style');
    __vite_style__.textContent = "._mainContainer_1iwf2_1 {\n  margin: auto;\n  max-width: 800px;\n  min-width: 300px;\n}\n\n._createUserCard_1iwf2_7 {\n  padding: 25px;\n}\n\n._formGroup_1iwf2_11 {\n  max-width: 400px;\n  flex: 1;\n}\n\n._errorText_1iwf2_16 {\n  color: #eb5757 !important;\n}\n\n._hint_1iwf2_20 {\n  background-color: #ff9800;\n  color: #000;\n  padding: 15px 10px;\n  border-radius: 8px;\n}\n";
    document.head.appendChild(__vite_style__);
    var useNavigate, TokenService, reactExports, jsxRuntimeExports, LoadingIndicator, PROCESSED_ERRORS, processError, Header, routes, ProcessedError, UserService, AuthService, useTranslation, Box, Typography, Input, IconButton, Button, Card, Stack, FormGroup, TextField, FormControl, InputLabel, FormHelperText, InputAdornment, VisibilityOff, Visibility;
    return {
      setters: [function (module) {
        useNavigate = module.u;
        TokenService = module.T;
        reactExports = module.r;
        jsxRuntimeExports = module.j;
        LoadingIndicator = module.e;
        PROCESSED_ERRORS = module.P;
        processError = module.p;
      }, function (module) {
        Header = module.H;
        routes = module.r;
      }, function (module) {
        ProcessedError = module.P;
      }, function (module) {
        UserService = module.U;
      }, function (module) {
        AuthService = module.A;
      }, function (module) {
        useTranslation = module.u;
        Box = module.B;
        Typography = module.T;
        Input = module.I;
        IconButton = module.a;
        Button = module.b;
      }, function (module) {
        Card = module.C;
      }, function (module) {
        Stack = module.S;
      }, function (module) {
        FormGroup = module.F;
      }, function (module) {
        TextField = module.T;
      }, function (module) {
        FormControl = module.F;
        InputLabel = module.I;
        FormHelperText = module.a;
      }, function (module) {
        InputAdornment = module.I;
      }, function (module) {
        VisibilityOff = module.V;
        Visibility = module.a;
      }, null, null],
      execute: function execute() {
        exports('default', Profile);
        var mainContainer = "_mainContainer_1iwf2_1";
        var createUserCard = "_createUserCard_1iwf2_7";
        var formGroup = "_formGroup_1iwf2_11";
        var errorText = "_errorText_1iwf2_16";
        var hint = "_hint_1iwf2_20";
        var styles = {
          mainContainer: mainContainer,
          createUserCard: createUserCard,
          formGroup: formGroup,
          errorText: errorText,
          hint: hint
        };
        function Profile() {
          var navigate = useNavigate();
          var _useTranslation = useTranslation("manage"),
            t = _useTranslation.t;
          var userId = TokenService.getUser().id;
          var _reactExports$useStat = reactExports.useState({}),
            _reactExports$useStat2 = _slicedToArray(_reactExports$useStat, 2),
            user = _reactExports$useStat2[0],
            setUser = _reactExports$useStat2[1];
          var _reactExports$useStat3 = reactExports.useState(false),
            _reactExports$useStat4 = _slicedToArray(_reactExports$useStat3, 2),
            loading = _reactExports$useStat4[0],
            setLoading = _reactExports$useStat4[1];
          var _reactExports$useStat5 = reactExports.useState(""),
            _reactExports$useStat6 = _slicedToArray(_reactExports$useStat5, 2),
            processedError = _reactExports$useStat6[0],
            setProcessedError = _reactExports$useStat6[1];
          var _reactExports$useStat7 = reactExports.useState(false),
            _reactExports$useStat8 = _slicedToArray(_reactExports$useStat7, 2),
            showError = _reactExports$useStat8[0],
            setShowError = _reactExports$useStat8[1];
          var _reactExports$useStat9 = reactExports.useState(""),
            _reactExports$useStat10 = _slicedToArray(_reactExports$useStat9, 2),
            email = _reactExports$useStat10[0],
            setEmail = _reactExports$useStat10[1];
          var _reactExports$useStat11 = reactExports.useState(""),
            _reactExports$useStat12 = _slicedToArray(_reactExports$useStat11, 2),
            emailError = _reactExports$useStat12[0],
            setEmailError = _reactExports$useStat12[1];
          var _reactExports$useStat13 = reactExports.useState(""),
            _reactExports$useStat14 = _slicedToArray(_reactExports$useStat13, 2),
            firstName = _reactExports$useStat14[0],
            setFirstName = _reactExports$useStat14[1];
          var _reactExports$useStat15 = reactExports.useState(""),
            _reactExports$useStat16 = _slicedToArray(_reactExports$useStat15, 2),
            firstNameError = _reactExports$useStat16[0],
            setFirstNameError = _reactExports$useStat16[1];
          var _reactExports$useStat17 = reactExports.useState(""),
            _reactExports$useStat18 = _slicedToArray(_reactExports$useStat17, 2),
            lastName = _reactExports$useStat18[0],
            setLastName = _reactExports$useStat18[1];
          var _reactExports$useStat19 = reactExports.useState(""),
            _reactExports$useStat20 = _slicedToArray(_reactExports$useStat19, 2),
            lastNameError = _reactExports$useStat20[0],
            setLastNameError = _reactExports$useStat20[1];
          var _reactExports$useStat21 = reactExports.useState(""),
            _reactExports$useStat22 = _slicedToArray(_reactExports$useStat21, 2),
            currentPassword = _reactExports$useStat22[0],
            setCurrentPassword = _reactExports$useStat22[1];
          var _reactExports$useStat23 = reactExports.useState(""),
            _reactExports$useStat24 = _slicedToArray(_reactExports$useStat23, 2),
            currentPasswordError = _reactExports$useStat24[0],
            setCurrentPasswordError = _reactExports$useStat24[1];
          var _reactExports$useStat25 = reactExports.useState(""),
            _reactExports$useStat26 = _slicedToArray(_reactExports$useStat25, 2),
            newPass = _reactExports$useStat26[0],
            setNewPassword = _reactExports$useStat26[1];
          var _reactExports$useStat27 = reactExports.useState(""),
            _reactExports$useStat28 = _slicedToArray(_reactExports$useStat27, 2),
            passNewError = _reactExports$useStat28[0],
            setNewPassError = _reactExports$useStat28[1];
          var _reactExports$useStat29 = reactExports.useState(""),
            _reactExports$useStat30 = _slicedToArray(_reactExports$useStat29, 2),
            confrimNewPassword = _reactExports$useStat30[0],
            setConfrimNewPassword = _reactExports$useStat30[1];
          var _reactExports$useStat31 = reactExports.useState(""),
            _reactExports$useStat32 = _slicedToArray(_reactExports$useStat31, 2),
            confrimNewPasswordError = _reactExports$useStat32[0],
            setConfrimNewPasswordError = _reactExports$useStat32[1];
          var _reactExports$useStat33 = reactExports.useState(false),
            _reactExports$useStat34 = _slicedToArray(_reactExports$useStat33, 2),
            showCurrentPass = _reactExports$useStat34[0],
            setShowCurrentPass = _reactExports$useStat34[1];
          var _reactExports$useStat35 = reactExports.useState(false),
            _reactExports$useStat36 = _slicedToArray(_reactExports$useStat35, 2),
            showNewPass = _reactExports$useStat36[0],
            setShowNewPass = _reactExports$useStat36[1];
          var _reactExports$useStat37 = reactExports.useState(false),
            _reactExports$useStat38 = _slicedToArray(_reactExports$useStat37, 2),
            showConfirmPass = _reactExports$useStat38[0],
            setShowConfirmPass = _reactExports$useStat38[1];
          var handleClickShowCurrentPass = function handleClickShowCurrentPass() {
            return setShowCurrentPass(function (show) {
              return !show;
            });
          };
          var handleClickShowNewPass = function handleClickShowNewPass() {
            return setShowNewPass(function (show) {
              return !show;
            });
          };
          var handleClickShowConfirmPass = function handleClickShowConfirmPass() {
            return setShowConfirmPass(function (show) {
              return !show;
            });
          };
          var onEmailChanged = function onEmailChanged(e) {
            setEmail(e.target.value);
            setEmailError("");
          };
          var onFirstNameChanged = function onFirstNameChanged(e) {
            setFirstName(e.target.value);
            setFirstNameError("");
          };
          var onLastChanged = function onLastChanged(e) {
            setLastName(e.target.value);
            setLastNameError("");
          };
          var onCurrentPasswordChanged = function onCurrentPasswordChanged(e) {
            setCurrentPassword(e.target.value);
            setCurrentPasswordError("");
          };
          var onNewPasswordChanged = function onNewPasswordChanged(e) {
            setNewPassword(e.target.value);
            setNewPassError("");
          };
          var onConfirmPasswordChanges = function onConfirmPasswordChanges(e) {
            setConfrimNewPassword(e.target.value);
            setConfrimNewPasswordError("");
          };
          var criticalChange = email.length > 0 && email != user.email || newPass.length > 0;
          var validate = function validate() {
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
          var goUsers = function goUsers() {
            navigate(routes.manageUsers);
          };
          var logout = function logout() {
            AuthService.logout();
            navigate(routes.login);
          };
          var onSubmit = function onSubmit() {
            if (!validate()) {
              return;
            }
            setLoading(true);
            var data = {};
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
            UserService.updateUserProfile(data).then(function () {
              if (criticalChange) {
                logout();
              }
            }).catch(function (e) {
              var processed = processError(e);
              switch (processed) {
                case PROCESSED_ERRORS.NETWORK_ERR:
                case PROCESSED_ERRORS.BACKEND_DOWN:
                  setShowError(true);
                  setProcessedError(processed);
                  break;
                case PROCESSED_ERRORS.DUPLICATE_EMAIL:
                  setEmailError(t("processed_errors.".concat(processedError)));
                  break;
                case PROCESSED_ERRORS.WRONG_CREDENTIALS:
                  setCurrentPasswordError(t("processed_errors.wrong_password"));
                  break;
              }
            }).finally(function () {
              setLoading(false);
            });
          };
          reactExports.useEffect(function () {
            UserService.getUser({
              userId: userId
            }).then(function (response) {
              setUser(response);
              setEmail(response.email);
              setFirstName(response.firstName);
              setLastName(response.lastName);
            });
          }, []);
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
                sx: {
                  mb: "10px"
                },
                children: t("profile.title")
              }), /* @__PURE__ */jsxRuntimeExports.jsxs(Stack, {
                flexDirection: "row",
                gap: 5,
                alignItems: "center",
                children: [/* @__PURE__ */jsxRuntimeExports.jsxs(FormGroup, {
                  className: styles.formGroup,
                  children: [/* @__PURE__ */jsxRuntimeExports.jsx(TextField, {
                    error: firstNameError.length > 0,
                    required: true,
                    value: firstName,
                    id: "firstName",
                    label: t("label.first_name"),
                    name: "firstName",
                    onChange: onFirstNameChanged,
                    variant: "standard"
                  }), /* @__PURE__ */jsxRuntimeExports.jsx(TextField, {
                    error: (lastNameError === null || lastNameError === void 0 ? void 0 : lastNameError.length) > 0,
                    id: "lastName",
                    value: lastName,
                    required: true,
                    onChange: onLastChanged,
                    label: t("label.last_name"),
                    name: "lastName",
                    variant: "standard"
                  }), /* @__PURE__ */jsxRuntimeExports.jsx(TextField, {
                    required: true,
                    value: email,
                    error: (emailError === null || emailError === void 0 ? void 0 : emailError.length) > 0 || processedError == PROCESSED_ERRORS.DUPLICATE_EMAIL,
                    id: "email",
                    onChange: onEmailChanged,
                    label: t("label.email"),
                    name: "email",
                    variant: "standard"
                  }), /* @__PURE__ */jsxRuntimeExports.jsxs(FormControl, {
                    required: true,
                    variant: "standard",
                    sx: {
                      mt: "10px"
                    },
                    children: [/* @__PURE__ */jsxRuntimeExports.jsx(InputLabel, {
                      htmlFor: "standard-adornment-password",
                      children: t("label.new_password")
                    }), /* @__PURE__ */jsxRuntimeExports.jsx(Input, {
                      error: passNewError.length > 0,
                      onChange: onNewPasswordChanged,
                      name: "password",
                      value: newPass,
                      type: showNewPass ? "text" : "password",
                      id: "standard-adornment-password",
                      endAdornment: /* @__PURE__ */jsxRuntimeExports.jsx(InputAdornment, {
                        position: "end",
                        children: /* @__PURE__ */jsxRuntimeExports.jsx(IconButton, {
                          "aria-label": "toggle password visibility",
                          onClick: handleClickShowNewPass,
                          children: showNewPass ? /* @__PURE__ */jsxRuntimeExports.jsx(VisibilityOff, {}) : /* @__PURE__ */jsxRuntimeExports.jsx(Visibility, {})
                        })
                      })
                    })]
                  }), newPass.length > 0 && /* @__PURE__ */jsxRuntimeExports.jsxs(FormControl, {
                    required: true,
                    variant: "standard",
                    sx: {
                      mt: "10px"
                    },
                    children: [/* @__PURE__ */jsxRuntimeExports.jsx(InputLabel, {
                      htmlFor: "standard-adornment-password",
                      children: t("label.confirm_new_password")
                    }), /* @__PURE__ */jsxRuntimeExports.jsx(Input, {
                      error: confrimNewPasswordError.length > 0,
                      onChange: onConfirmPasswordChanges,
                      name: "cpassword",
                      type: showConfirmPass ? "text" : "password",
                      value: confrimNewPassword,
                      id: "standard-adornment-password",
                      endAdornment: /* @__PURE__ */jsxRuntimeExports.jsx(InputAdornment, {
                        position: "end",
                        children: /* @__PURE__ */jsxRuntimeExports.jsx(IconButton, {
                          "aria-label": "toggle password visibility",
                          onClick: handleClickShowConfirmPass,
                          children: showConfirmPass ? /* @__PURE__ */jsxRuntimeExports.jsx(VisibilityOff, {}) : /* @__PURE__ */jsxRuntimeExports.jsx(Visibility, {})
                        })
                      })
                    })]
                  }), criticalChange && /* @__PURE__ */jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
                    children: [/* @__PURE__ */jsxRuntimeExports.jsxs(FormControl, {
                      required: true,
                      variant: "standard",
                      sx: {
                        mt: "10px"
                      },
                      children: [/* @__PURE__ */jsxRuntimeExports.jsx(InputLabel, {
                        htmlFor: "standard-adornment-password",
                        children: t("label.current_password")
                      }), /* @__PURE__ */jsxRuntimeExports.jsx(Input, {
                        error: currentPasswordError.length > 0,
                        onChange: onCurrentPasswordChanged,
                        name: "password",
                        type: showCurrentPass ? "text" : "password",
                        value: currentPassword,
                        id: "standard-adornment-password",
                        endAdornment: /* @__PURE__ */jsxRuntimeExports.jsx(InputAdornment, {
                          position: "end",
                          children: /* @__PURE__ */jsxRuntimeExports.jsx(IconButton, {
                            "aria-label": "toggle password visibility",
                            onClick: handleClickShowCurrentPass,
                            children: showCurrentPass ? /* @__PURE__ */jsxRuntimeExports.jsx(VisibilityOff, {}) : /* @__PURE__ */jsxRuntimeExports.jsx(Visibility, {})
                          })
                        })
                      })]
                    }), /* @__PURE__ */jsxRuntimeExports.jsx(FormHelperText, {
                      children: t("profile.password_required")
                    })]
                  }), (firstNameError || lastNameError || emailError || currentPasswordError || passNewError || confrimNewPasswordError) && /* @__PURE__ */jsxRuntimeExports.jsx(FormHelperText, {
                    className: styles.errorText,
                    children: firstNameError || lastNameError || emailError || currentPasswordError || passNewError || confrimNewPasswordError
                  })]
                }), criticalChange && /* @__PURE__ */jsxRuntimeExports.jsx(Box, {
                  className: styles.hint,
                  sx: {
                    maxWidth: "300px",
                    fontSize: "20px"
                  },
                  children: t("profile.hint")
                })]
              }), /* @__PURE__ */jsxRuntimeExports.jsxs(Box, {
                sx: {
                  display: "flex",
                  justifyContent: "flex-end",
                  mt: "40px"
                },
                children: [/* @__PURE__ */jsxRuntimeExports.jsx(Button, {
                  onClick: goUsers,
                  children: t("profile.cancel")
                }), /* @__PURE__ */jsxRuntimeExports.jsx(Button, {
                  onClick: onSubmit,
                  children: t("profile.save")
                })]
              })]
            })]
          });
        }
      }
    };
  });
})();
