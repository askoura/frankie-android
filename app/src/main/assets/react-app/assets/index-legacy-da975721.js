;
(function () {
  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
  function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
  System.register(['./index-legacy-bc4d1445.js', './AuthService-legacy-33b4639d.js', './index-legacy-ed1d9e59.js', './common-legacy-e4fabe10.js', './FormGroup-legacy-2e722597.js', './InputLabel-legacy-753eca05.js', './InputAdornment-legacy-a4a0a43f.js', './VisibilityOff-legacy-3d427260.js', './index-legacy-f3e074d0.js'], function (exports, module) {
    'use strict';

    var __vite_style__ = document.createElement('style');
    __vite_style__.textContent = "._wrapper_ju5e1_1 {\n  width: 400px;\n  background: #eff3fd;\n  border: 1px solid #bdc6de;\n  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);\n  border-radius: 13px;\n  max-width: 407px;\n  padding: 5px;\n}\n\n._content_ju5e1_11 {\n  background: #ffffff;\n  border-radius: 10px;\n  text-align: center;\n  padding: 60px 0;\n}\n\n._form_ju5e1_18 {\n  max-width: 250px;\n  margin: 40px auto;\n}\n\n._errorText_ju5e1_23 {\n  color: #eb5757 !important;\n}\n";
    document.head.appendChild(__vite_style__);
    var useParams, useNavigate, reactExports, jsxRuntimeExports, PROCESSED_ERRORS, hostnameSubdomain, urlWithSubdomain, processError, AuthService, AuthWrap, useTranslation, Box, Typography, Input, IconButton, Button, FormGroup, FormControl, InputLabel, FormHelperText, InputAdornment, VisibilityOff, Visibility;
    return {
      setters: [function (module) {
        useParams = module.a;
        useNavigate = module.u;
        reactExports = module.r;
        jsxRuntimeExports = module.j;
        PROCESSED_ERRORS = module.P;
        hostnameSubdomain = module.h;
        urlWithSubdomain = module.b;
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
        exports('default', ResetPassword);
        var wrapper = "_wrapper_ju5e1_1";
        var content = "_content_ju5e1_11";
        var form = "_form_ju5e1_18";
        var errorText = "_errorText_ju5e1_23";
        var styles = {
          wrapper: wrapper,
          content: content,
          form: form,
          errorText: errorText
        };
        function ResetPassword() {
          var _useTranslation = useTranslation("manage"),
            t = _useTranslation.t;
          var _useParams = useParams(),
            token = _useParams.token;
          var navigate = useNavigate();
          var _reactExports$useStat = reactExports.useState(false),
            _reactExports$useStat2 = _slicedToArray(_reactExports$useStat, 2),
            loading = _reactExports$useStat2[0],
            setLoading = _reactExports$useStat2[1];
          var _reactExports$useStat3 = reactExports.useState(""),
            _reactExports$useStat4 = _slicedToArray(_reactExports$useStat3, 2),
            processedError = _reactExports$useStat4[0],
            setProcessedError = _reactExports$useStat4[1];
          var _reactExports$useStat5 = reactExports.useState(false),
            _reactExports$useStat6 = _slicedToArray(_reactExports$useStat5, 2),
            showError = _reactExports$useStat6[0],
            setShowError = _reactExports$useStat6[1];
          var _reactExports$useStat7 = reactExports.useState(""),
            _reactExports$useStat8 = _slicedToArray(_reactExports$useStat7, 2),
            password = _reactExports$useStat8[0],
            setPassword = _reactExports$useStat8[1];
          var _reactExports$useStat9 = reactExports.useState(""),
            _reactExports$useStat10 = _slicedToArray(_reactExports$useStat9, 2),
            passError = _reactExports$useStat10[0],
            setPassError = _reactExports$useStat10[1];
          var _reactExports$useStat11 = reactExports.useState(""),
            _reactExports$useStat12 = _slicedToArray(_reactExports$useStat11, 2),
            confrimPassword = _reactExports$useStat12[0],
            setConfrimPassword = _reactExports$useStat12[1];
          var _reactExports$useStat13 = reactExports.useState(""),
            _reactExports$useStat14 = _slicedToArray(_reactExports$useStat13, 2),
            confrimPasswordError = _reactExports$useStat14[0],
            setConfrimPasswordError = _reactExports$useStat14[1];
          var _reactExports$useStat15 = reactExports.useState(false),
            _reactExports$useStat16 = _slicedToArray(_reactExports$useStat15, 2),
            showPassword = _reactExports$useStat16[0],
            setShowPassword = _reactExports$useStat16[1];
          var handleClickShowPassword = function handleClickShowPassword() {
            return setShowPassword(function (show) {
              return !show;
            });
          };
          var validate = function validate() {
            setShowError(false);
            setConfrimPasswordError("");
            setPassError("");
            if (password.length == 0) {
              setPassError(t("password_required"));
              return false;
            }
            if (confrimPassword.length == 0) {
              setConfrimPasswordError(t("confirm_password_required"));
              return false;
            }
            if (confrimPassword != password) {
              setConfrimPasswordError(t("error.password_should_match"));
              return false;
            }
            return true;
          };
          var onPasswordChanged = function onPasswordChanged(e) {
            setPassword(e.target.value);
            setPassError("");
          };
          var onConfirmPasswordChanges = function onConfirmPasswordChanges(e) {
            setConfrimPassword(e.target.value);
            setConfrimPasswordError("");
          };
          var onSubmit = function onSubmit() {
            if (!validate()) {
              return;
            }
            setLoading(true);
            AuthService.resetPassword(token, password).then(function (data) {
              var subdomain = hostnameSubdomain();
              if (subdomain === data.subdomain) {
                navigate("/");
              } else {
                window.location.replace(urlWithSubdomain(data.subdomain));
              }
            }).catch(function (e) {
              var processed = processError(e);
              switch (processed) {
                case PROCESSED_ERRORS.NETWORK_ERR:
                case PROCESSED_ERRORS.BACKEND_DOWN:
                  setShowError(true);
                  setProcessedError(processed);
                  break;
                case PROCESSED_ERRORS.WRONG_RESET_TOKEN:
                case PROCESSED_ERRORS.EXPIRED_RESET_TOKEN:
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
                  children: t("reset_password.title")
                }), /* @__PURE__ */jsxRuntimeExports.jsxs(Box, {
                  className: styles.form,
                  children: [/* @__PURE__ */jsxRuntimeExports.jsxs(FormGroup, {
                    children: [/* @__PURE__ */jsxRuntimeExports.jsxs(FormControl, {
                      required: true,
                      variant: "standard",
                      sx: {
                        mt: "10px"
                      },
                      children: [/* @__PURE__ */jsxRuntimeExports.jsx(InputLabel, {
                        htmlFor: "standard-adornment-password",
                        children: t("label.new_password")
                      }), /* @__PURE__ */jsxRuntimeExports.jsx(Input, {
                        error: passError.length > 0,
                        onChange: onPasswordChanged,
                        name: "password",
                        value: password,
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
                    }), /* @__PURE__ */jsxRuntimeExports.jsxs(FormControl, {
                      required: true,
                      variant: "standard",
                      sx: {
                        mt: "10px"
                      },
                      children: [/* @__PURE__ */jsxRuntimeExports.jsx(InputLabel, {
                        htmlFor: "standard-adornment-password",
                        children: t("label.confirm_new_password")
                      }), /* @__PURE__ */jsxRuntimeExports.jsx(Input, {
                        error: confrimPasswordError.length > 0,
                        onChange: onConfirmPasswordChanges,
                        name: "cpassword",
                        value: confrimPassword,
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
                    }), (processedError == PROCESSED_ERRORS.WRONG_RESET_TOKEN || processedError == PROCESSED_ERRORS.EXPIRED_RESET_TOKEN) && /* @__PURE__ */jsxRuntimeExports.jsx(FormHelperText, {
                      className: styles.errorText,
                      children: t("processed_errors.".concat(processedError))
                    }), (passError || confrimPasswordError) && /* @__PURE__ */jsxRuntimeExports.jsx(FormHelperText, {
                      className: styles.errorText,
                      children: passError || confrimPasswordError
                    })]
                  }), /* @__PURE__ */jsxRuntimeExports.jsx(Button, {
                    onClick: onSubmit,
                    sx: {
                      mt: "40px"
                    },
                    children: t("reset_password.reset")
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
