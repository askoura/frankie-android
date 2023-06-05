;
(function () {
  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
  function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
  System.register(['./index-legacy-0a320ccd.js', './AuthService-legacy-05326db5.js', './index-legacy-1e533d6a.js', './common-legacy-ff14325d.js', './FormGroup-legacy-5d636e6a.js', './TextField-legacy-c8da9d7d.js', './InputLabel-legacy-1a8a4001.js', './index-legacy-28828365.js'], function (exports, module) {
    'use strict';

    var __vite_style__ = document.createElement('style');
    __vite_style__.textContent = "._wrapper_1hgy5_1 {\n  width: 400px;\n  background: #eff3fd;\n  border: 1px solid #bdc6de;\n  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);\n  border-radius: 13px;\n  max-width: 407px;\n  padding: 5px;\n}\n\n._content_1hgy5_11 {\n  background: #ffffff;\n  border-radius: 10px;\n  text-align: center;\n  padding: 60px 0;\n}\n\n._form_1hgy5_18 {\n  max-width: 250px;\n  margin: 40px auto;\n}\n\n._errorText_1hgy5_23 {\n  color: #eb5757 !important;\n}\n\n._successText_1hgy5_27 {\n  max-width: 280px;\n  margin: 40px auto;\n}\n";
    document.head.appendChild(__vite_style__);
    var reactExports, jsxRuntimeExports, processError, PROCESSED_ERRORS, AuthService, AuthWrap, useTranslation, Box, Typography, Button, FormGroup, TextField, FormHelperText;
    return {
      setters: [function (module) {
        reactExports = module.r;
        jsxRuntimeExports = module.j;
        processError = module.p;
        PROCESSED_ERRORS = module.P;
      }, function (module) {
        AuthService = module.A;
      }, function (module) {
        AuthWrap = module.A;
      }, function (module) {
        useTranslation = module.u;
        Box = module.B;
        Typography = module.T;
        Button = module.b;
      }, function (module) {
        FormGroup = module.F;
      }, function (module) {
        TextField = module.T;
      }, function (module) {
        FormHelperText = module.a;
      }, null],
      execute: function execute() {
        exports('default', ForgotPassword);
        var wrapper = "_wrapper_1hgy5_1";
        var content = "_content_1hgy5_11";
        var form = "_form_1hgy5_18";
        var errorText = "_errorText_1hgy5_23";
        var successText = "_successText_1hgy5_27";
        var styles = {
          wrapper: wrapper,
          content: content,
          form: form,
          errorText: errorText,
          successText: successText
        };
        function ForgotPassword() {
          var _useTranslation = useTranslation("manage"),
            t = _useTranslation.t,
            i18n = _useTranslation.i18n;
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
            email = _reactExports$useStat6[0],
            setEmail = _reactExports$useStat6[1];
          var _reactExports$useStat7 = reactExports.useState(""),
            _reactExports$useStat8 = _slicedToArray(_reactExports$useStat7, 2),
            emailError = _reactExports$useStat8[0],
            setEmailError = _reactExports$useStat8[1];
          var _reactExports$useStat9 = reactExports.useState(""),
            _reactExports$useStat10 = _slicedToArray(_reactExports$useStat9, 2),
            processedError = _reactExports$useStat10[0],
            setProcessedError = _reactExports$useStat10[1];
          var _reactExports$useStat11 = reactExports.useState(false),
            _reactExports$useStat12 = _slicedToArray(_reactExports$useStat11, 2),
            showError = _reactExports$useStat12[0],
            setShowError = _reactExports$useStat12[1];
          var onEmailChanged = function onEmailChanged(e) {
            setEmail(e.target.value);
            setEmailError("");
          };
          var onSubmit = function onSubmit() {
            setEmailError("");
            if (email.length == 0) {
              setEmailError(t("email_required"));
              return false;
            }
            setLoading(true);
            AuthService.forgotPassword(email).then(function (data) {
              setSuccess(true);
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
                  children: t("forgot_password.title")
                }), isSuccess ? /* @__PURE__ */jsxRuntimeExports.jsx(Box, {
                  className: styles.successText,
                  children: t("forgot_password.success")
                }) : /* @__PURE__ */jsxRuntimeExports.jsxs(Box, {
                  className: styles.form,
                  children: [/* @__PURE__ */jsxRuntimeExports.jsxs(FormGroup, {
                    children: [/* @__PURE__ */jsxRuntimeExports.jsx(TextField, {
                      error: emailError.length > 0,
                      id: "email",
                      value: email,
                      required: true,
                      onChange: onEmailChanged,
                      label: t("label.email"),
                      name: "email",
                      variant: "standard"
                    }), emailError && /* @__PURE__ */jsxRuntimeExports.jsx(FormHelperText, {
                      className: styles.errorText,
                      children: emailError
                    }), /* @__PURE__ */jsxRuntimeExports.jsx(FormHelperText, {
                      children: t("forgot_password.helper_text")
                    })]
                  }), /* @__PURE__ */jsxRuntimeExports.jsx(Button, {
                    onClick: onSubmit,
                    sx: {
                      mt: "40px"
                    },
                    children: t("forgot_password.send")
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
