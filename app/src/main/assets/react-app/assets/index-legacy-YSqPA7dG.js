;
(function () {
  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
  function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
  System.register(['./index-legacy-T3s18jo3.js', './Web-legacy-LDhM2X1u.js', './LoginInput-legacy-SHyBw1f-.js', './FormGroup-legacy-aaf9eppM.js', './TextField-legacy-vL2OdS5Q.js', './DatePicker-legacy-9Ey9K3I7.js', './Grid-legacy-ZQipiKyz.js', './FormControlLabel-legacy-0Ne4M7i6.js', './Checkbox-legacy-8hCFdihe.js', './SwitchBase-legacy-VpMr3A_z.js'], function (exports, module) {
    'use strict';

    var useTranslation, reactExports, useDispatch, jsxRuntimeExports, Box, Typography, Button, setLoading, onApiError, onError, AuthService, CheckCircle, LoginInput, FormGroup, FormHelperText;
    return {
      setters: [module => {
        useTranslation = module.x;
        reactExports = module.r;
        useDispatch = module.z;
        jsxRuntimeExports = module.j;
        Box = module.B;
        Typography = module.a0;
        Button = module.a1;
        setLoading = module.D;
        onApiError = module.a3;
        onError = module.a7;
      }, module => {
        AuthService = module.A;
      }, module => {
        CheckCircle = module.C;
        LoginInput = module.L;
      }, module => {
        FormGroup = module.F;
      }, module => {
        FormHelperText = module.F;
      }, null, null, null, null, null],
      execute: function execute() {
        var __vite_style__ = document.createElement('style');
        __vite_style__.textContent = "._wrapper_142ke_1 {\n  width: 400px;\n  background: #eff3fd;\n  border: 1px solid #bdc6de;\n  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);\n  border-radius: 13px;\n  max-width: 407px;\n  padding: 5px;\n}\n\n._content_142ke_11 {\n  display: flex;\n  flex-direction: column;\n  gap: 2rem;\n  background: #ffffff;\n  text-align: center;\n  padding: 3.75rem;\n}\n\n@media (max-width: 768px) {\n  ._content_142ke_11 {\n    padding: 2rem;\n  }\n}\n\n@media (max-width: 480px) {\n  ._content_142ke_11 {\n    padding: 1rem;\n  }\n}\n\n._errorText_142ke_32 {\n  color: #eb5757 !important;\n}\n\n._successText_142ke_36 {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 2rem;\n  margin: 2rem 0rem;\n  color: #27ae60;\n  border-radius: 5px;\n  padding: 10px;\n}\n._sendButton_142ke_47 {\n  background-color: #04bdf3 !important;\n  color: #fff !important;\n  border-radius: 13px !important;\n  padding: 12px !important;\n  text-transform: none !important;\n  font-weight: 700 !important;\n  font-size: 1.25rem !important;\n}\n";
        document.head.appendChild(__vite_style__);
        exports('default', ForgotPassword);
        const wrapper = "_wrapper_142ke_1";
        const content = "_content_142ke_11";
        const errorText = "_errorText_142ke_32";
        const successText = "_successText_142ke_36";
        const sendButton = "_sendButton_142ke_47";
        const styles = {
          wrapper: wrapper,
          content: content,
          errorText: errorText,
          successText: successText,
          sendButton: sendButton
        };
        function ForgotPassword() {
          const _useTranslation = useTranslation("manage"),
            t = _useTranslation.t;
          const _reactExports$useStat = reactExports.useState(false),
            _reactExports$useStat2 = _slicedToArray(_reactExports$useStat, 2),
            isSuccess = _reactExports$useStat2[0],
            setSuccess = _reactExports$useStat2[1];
          const _reactExports$useStat3 = reactExports.useState(""),
            _reactExports$useStat4 = _slicedToArray(_reactExports$useStat3, 2),
            email = _reactExports$useStat4[0],
            setEmail = _reactExports$useStat4[1];
          const _reactExports$useStat5 = reactExports.useState(""),
            _reactExports$useStat6 = _slicedToArray(_reactExports$useStat5, 2),
            emailError = _reactExports$useStat6[0],
            setEmailError = _reactExports$useStat6[1];
          const dispatch = useDispatch();
          const onEmailChanged = e => {
            setEmail(e.target.value);
            setEmailError("");
          };
          const onSubmit = () => {
            setEmailError("");
            if (email.length == 0) {
              setEmailError(t("email_required"));
              return false;
            }
            dispatch(setLoading(true));
            AuthService.forgotPassword(email).then(data => {
              setSuccess(true);
            }).catch(e => {
              setFetchingSurveys(false);
              onApiError({
                error: e,
                globalErrorHandler: processedError => {
                  dispatch(onError(processedError));
                }
              });
            }).finally(() => {
              dispatch(setLoading(false));
            });
          };
          return /* @__PURE__ */jsxRuntimeExports.jsx(Box, {
            sx: {
              display: "flex",
              justifyContent: "center",
              alignItems: "start",
              height: "calc(100vh - 80px)",
              overflow: "auto",
              width: "100vw",
              backgroundColor: "#f7f8fc"
            },
            children: /* @__PURE__ */jsxRuntimeExports.jsx(Box, {
              sx: {
                width: "100%",
                maxWidth: 700,
                marginTop: 5
              },
              children: /* @__PURE__ */jsxRuntimeExports.jsxs(Box, {
                className: styles.content,
                children: [/* @__PURE__ */jsxRuntimeExports.jsx(Typography, {
                  variant: "h4",
                  children: t("forgot_password.title")
                }), isSuccess ? /* @__PURE__ */jsxRuntimeExports.jsxs(Box, {
                  className: styles.successText,
                  children: [/* @__PURE__ */jsxRuntimeExports.jsx(CheckCircle, {
                    sx: {
                      fontSize: "60px"
                    }
                  }), t("forgot_password.success")]
                }) : /* @__PURE__ */jsxRuntimeExports.jsxs(Box, {
                  children: [/* @__PURE__ */jsxRuntimeExports.jsxs(FormGroup, {
                    children: [/* @__PURE__ */jsxRuntimeExports.jsx(LoginInput, {
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
                    fullWidth: true,
                    onClick: onSubmit,
                    className: styles.sendButton,
                    sx: {
                      mt: "25px"
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
//# sourceMappingURL=index-legacy-YSqPA7dG.js.map
