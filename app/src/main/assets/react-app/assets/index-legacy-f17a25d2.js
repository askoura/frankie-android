;
(function () {
  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
  function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
  System.register(['./index-legacy-13317357.js', './AuthService-legacy-ffa71593.js', './index-legacy-1a0fe366.js', './common-legacy-88dbaa5f.js', './FormGroup-legacy-20b7b908.js', './TextField-legacy-4282ffba.js', './InputLabel-legacy-df146838.js', './InputAdornment-legacy-8e4bc3eb.js', './VisibilityOff-legacy-0f18a9ec.js', './index-legacy-0169b194.js'], function (exports, module) {
    'use strict';

    var __vite_style__ = document.createElement('style');
    __vite_style__.textContent = "._wrapper_13l38_1 {\n  width: 400px;\n  background: #eff3fd;\n  border: 1px solid #bdc6de;\n  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);\n  border-radius: 13px;\n  max-width: 407px;\n  padding: 5px;\n}\n\n._content_13l38_11 {\n  background: #ffffff;\n  border-radius: 10px;\n  text-align: center;\n  padding: 60px 0;\n}\n\n._form_13l38_18 {\n  max-width: 250px;\n  margin: 40px auto;\n}\n\n._formGroup_13l38_23 {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n\n._errorText_13l38_29 {\n  color: #eb5757 !important;\n}\n\n._successText_13l38_33 {\n  color: #fff;\n  background: #27ae60;\n  border-radius: 5px;\n  max-width: 280px;\n  padding: 10px;\n  margin: 20px auto 0;\n}\n";
    document.head.appendChild(__vite_style__);
    var reactExports, jsxRuntimeExports, PROCESSED_ERRORS, processError, AuthService, AuthWrap, useTranslation, Box, Typography, Input, IconButton, Button, FormGroup, TextField, FormControl, InputLabel, FormHelperText, InputAdornment, VisibilityOff, Visibility;
    return {
      setters: [function (module) {
        reactExports = module.r;
        jsxRuntimeExports = module.j;
        PROCESSED_ERRORS = module.P;
        processError = module.p;
      }, function (module) {
        AuthService = module.A;
      }, function (module) {
        AuthWrap = module.A;
      }, function (module) {
        useTranslation = module.u;
        Box = module.B;
        Typography = module.T;
        Input = module.I;
        IconButton = module.a;
        Button = module.b;
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
      }, null],
      execute: function execute() {
        exports('default', SignUp);
        var wrapper = "_wrapper_13l38_1";
        var content = "_content_13l38_11";
        var form = "_form_13l38_18";
        var formGroup = "_formGroup_13l38_23";
        var errorText = "_errorText_13l38_29";
        var successText = "_successText_13l38_33";
        var styles = {
          wrapper: wrapper,
          content: content,
          form: form,
          formGroup: formGroup,
          errorText: errorText,
          successText: successText
        };
        function SignUp() {
          var _useTranslation = useTranslation("manage"),
            t = _useTranslation.t;
          var _reactExports$useStat = reactExports.useState(false),
            _reactExports$useStat2 = _slicedToArray(_reactExports$useStat, 2),
            loading = _reactExports$useStat2[0],
            setLoading = _reactExports$useStat2[1];
          var _reactExports$useStat3 = reactExports.useState(false),
            _reactExports$useStat4 = _slicedToArray(_reactExports$useStat3, 2),
            isSuccess = _reactExports$useStat4[0],
            setSuccess = _reactExports$useStat4[1];
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
            password = _reactExports$useStat22[0],
            setPassword = _reactExports$useStat22[1];
          var _reactExports$useStat23 = reactExports.useState(""),
            _reactExports$useStat24 = _slicedToArray(_reactExports$useStat23, 2),
            passError = _reactExports$useStat24[0],
            setPassError = _reactExports$useStat24[1];
          var _reactExports$useStat25 = reactExports.useState(""),
            _reactExports$useStat26 = _slicedToArray(_reactExports$useStat25, 2),
            domain = _reactExports$useStat26[0],
            setDomain = _reactExports$useStat26[1];
          var _reactExports$useStat27 = reactExports.useState(""),
            _reactExports$useStat28 = _slicedToArray(_reactExports$useStat27, 2),
            domainError = _reactExports$useStat28[0],
            setDomainError = _reactExports$useStat28[1];
          var _reactExports$useStat29 = reactExports.useState(false),
            _reactExports$useStat30 = _slicedToArray(_reactExports$useStat29, 2),
            showPassword = _reactExports$useStat30[0],
            setShowPassword = _reactExports$useStat30[1];
          var handleClickShowPassword = function handleClickShowPassword() {
            return setShowPassword(function (show) {
              return !show;
            });
          };
          var onPasswordChanged = function onPasswordChanged(e) {
            setPassword(e.target.value);
            setPassError("");
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
          var onDomainChanged = function onDomainChanged(e) {
            setDomain(e.target.value);
            setDomainError("");
          };
          var validate = function validate() {
            setEmailError("");
            setPassError("");
            setDomainError("");
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
            if (password.length == 0) {
              setPassError(t("password_required"));
              return false;
            }
            if (domain.length == 0) {
              setDomainError(t("domain_required"));
              return false;
            }
            return true;
          };
          var onSubmit = function onSubmit() {
            if (!validate()) {
              return;
            }
            setLoading(true);
            AuthService.signup({
              email: email,
              password: password,
              domain: domain,
              firstName: firstName,
              lastName: lastName
            }).then(function () {
              setSuccess(true);
            }).catch(function (e) {
              var processed = processError(e);
              switch (processed) {
                case PROCESSED_ERRORS.NETWORK_ERR:
                case PROCESSED_ERRORS.BACKEND_DOWN:
                  setShowError(true);
                  setProcessedError(processed);
                  break;
                case PROCESSED_ERRORS.DUPLICATE_EMAIL:
                case PROCESSED_ERRORS.DUPLICATE_DOMAIN:
                  setProcessedError(processed);
                  break;
              }
            }).finally(function () {
              setLoading(false);
            });
          };
          return /* @__PURE__ */jsxRuntimeExports.jsx(AuthWrap, {
            loading: loading,
            showError: showError,
            processedError: processedError,
            handleClose: function handleClose() {
              return setShowError(false);
            },
            children: /* @__PURE__ */jsxRuntimeExports.jsx(Box, {
              className: styles.wrapper,
              children: /* @__PURE__ */jsxRuntimeExports.jsxs(Box, {
                className: styles.content,
                children: [/* @__PURE__ */jsxRuntimeExports.jsx(Typography, {
                  variant: "h4",
                  children: t("sign_up.title")
                }), isSuccess ? /* @__PURE__ */jsxRuntimeExports.jsx(Box, {
                  className: styles.successText,
                  children: t("sign_up.success")
                }) : /* @__PURE__ */jsxRuntimeExports.jsxs(Box, {
                  className: styles.form,
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
                      children: [/* @__PURE__ */jsxRuntimeExports.jsx(InputLabel, {
                        htmlFor: "standard-adornment-password",
                        children: t("label.password")
                      }), /* @__PURE__ */jsxRuntimeExports.jsx(Input, {
                        error: (passError === null || passError === void 0 ? void 0 : passError.length) > 0,
                        required: true,
                        value: password,
                        onChange: onPasswordChanged,
                        name: "password",
                        id: "standard-adornment-password",
                        type: showPassword ? "text" : "password",
                        endAdornment: /* @__PURE__ */jsxRuntimeExports.jsx(InputAdornment, {
                          position: "end",
                          children: /* @__PURE__ */jsxRuntimeExports.jsx(IconButton, {
                            "aria-label": "toggle password visibility",
                            onClick: handleClickShowPassword,
                            children: showPassword ? /* @__PURE__ */jsxRuntimeExports.jsx(VisibilityOff, {}) : /* @__PURE__ */jsxRuntimeExports.jsx(Visibility, {})
                          })
                        })
                      })]
                    }), /* @__PURE__ */jsxRuntimeExports.jsx(TextField, {
                      error: (domainError === null || domainError === void 0 ? void 0 : domainError.length) > 0 || processedError == PROCESSED_ERRORS.DUPLICATE_DOMAIN,
                      id: "domain",
                      value: domain,
                      onChange: onDomainChanged,
                      required: true,
                      label: t("label.server_name"),
                      name: "domain",
                      variant: "standard"
                    }), (processedError == PROCESSED_ERRORS.DUPLICATE_DOMAIN || processedError == PROCESSED_ERRORS.INVALID_DOMAIN || processedError == PROCESSED_ERRORS.DUPLICATE_EMAIL) && /* @__PURE__ */jsxRuntimeExports.jsx(FormHelperText, {
                      className: styles.errorText,
                      children: t("processed_errors.".concat(processedError))
                    }), (firstNameError || lastNameError || emailError || passError || domainError) && /* @__PURE__ */jsxRuntimeExports.jsx(FormHelperText, {
                      className: styles.errorText,
                      children: firstNameError || lastNameError || emailError || passError || domainError
                    }), /* @__PURE__ */jsxRuntimeExports.jsx(FormHelperText, {
                      sx: {
                        fontSize: "10px"
                      },
                      children: t("sign_up.helper_text")
                    })]
                  }), /* @__PURE__ */jsxRuntimeExports.jsx(Button, {
                    onClick: onSubmit,
                    sx: {
                      mt: "40px"
                    },
                    children: t("sign_up.sign_up")
                  })]
                })]
              })
            })
          });
        }
      }
    };
  });
})();
