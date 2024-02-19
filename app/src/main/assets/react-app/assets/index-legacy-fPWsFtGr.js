;
(function () {
  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
  function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
  System.register(['./index-legacy-T3s18jo3.js', './Web-legacy-LDhM2X1u.js', './FormGroup-legacy-aaf9eppM.js', './DatePicker-legacy-9Ey9K3I7.js', './TextField-legacy-vL2OdS5Q.js', './FormControlLabel-legacy-0Ne4M7i6.js', './Checkbox-legacy-8hCFdihe.js', './SwitchBase-legacy-VpMr3A_z.js', './Grid-legacy-ZQipiKyz.js'], function (exports, module) {
    'use strict';

    var createSvgIcon, jsxRuntimeExports, useTranslation, useSearchParams, useNavigate, useDispatch, reactExports, Box, Typography, FormControl, InputLabel, Input, IconButton, Button, setLoading, PROCESSED_ERRORS, Visibility, AuthService, FormGroup, InputAdornment, FormHelperText;
    return {
      setters: [module => {
        createSvgIcon = module.c;
        jsxRuntimeExports = module.j;
        useTranslation = module.x;
        useSearchParams = module.aq;
        useNavigate = module.w;
        useDispatch = module.z;
        reactExports = module.r;
        Box = module.B;
        Typography = module.a0;
        FormControl = module.ag;
        InputLabel = module.ah;
        Input = module.bq;
        IconButton = module.I;
        Button = module.a1;
        setLoading = module.D;
        PROCESSED_ERRORS = module.a4;
      }, module => {
        Visibility = module.V;
        AuthService = module.A;
      }, module => {
        FormGroup = module.F;
      }, module => {
        InputAdornment = module.I;
      }, module => {
        FormHelperText = module.F;
      }, null, null, null, null],
      execute: function execute() {
        var __vite_style__ = document.createElement('style');
        __vite_style__.textContent = "._wrapper_ju5e1_1 {\n  width: 400px;\n  background: #eff3fd;\n  border: 1px solid #bdc6de;\n  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);\n  border-radius: 13px;\n  max-width: 407px;\n  padding: 5px;\n}\n\n._content_ju5e1_11 {\n  background: #ffffff;\n  border-radius: 10px;\n  text-align: center;\n  padding: 60px 0;\n}\n\n._form_ju5e1_18 {\n  max-width: 250px;\n  margin: 40px auto;\n}\n\n._errorText_ju5e1_23 {\n  color: #eb5757 !important;\n}\n";
        document.head.appendChild(__vite_style__);
        exports('default', ResetPassword);
        const VisibilityOff = createSvgIcon( /*#__PURE__*/jsxRuntimeExports.jsx("path", {
          d: "M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78 3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z"
        }), 'VisibilityOff');
        const wrapper = "_wrapper_ju5e1_1";
        const content = "_content_ju5e1_11";
        const form = "_form_ju5e1_18";
        const errorText = "_errorText_ju5e1_23";
        const styles = {
          wrapper: wrapper,
          content: content,
          form: form,
          errorText: errorText
        };
        function ResetPassword() {
          const _useTranslation = useTranslation("manage"),
            t = _useTranslation.t;
          const _useSearchParams = useSearchParams(),
            _useSearchParams2 = _slicedToArray(_useSearchParams, 1),
            searchParams = _useSearchParams2[0];
          const token = searchParams.get("token");
          const navigate = useNavigate();
          const dispatch = useDispatch();
          const _reactExports$useStat = reactExports.useState(""),
            _reactExports$useStat2 = _slicedToArray(_reactExports$useStat, 2),
            tokenError = _reactExports$useStat2[0],
            setTokenError = _reactExports$useStat2[1];
          const _reactExports$useStat3 = reactExports.useState(""),
            _reactExports$useStat4 = _slicedToArray(_reactExports$useStat3, 2),
            password = _reactExports$useStat4[0],
            setPassword = _reactExports$useStat4[1];
          const _reactExports$useStat5 = reactExports.useState(""),
            _reactExports$useStat6 = _slicedToArray(_reactExports$useStat5, 2),
            passError = _reactExports$useStat6[0],
            setPassError = _reactExports$useStat6[1];
          const _reactExports$useStat7 = reactExports.useState(""),
            _reactExports$useStat8 = _slicedToArray(_reactExports$useStat7, 2),
            confrimPassword = _reactExports$useStat8[0],
            setConfrimPassword = _reactExports$useStat8[1];
          const _reactExports$useStat9 = reactExports.useState(""),
            _reactExports$useStat10 = _slicedToArray(_reactExports$useStat9, 2),
            confrimPasswordError = _reactExports$useStat10[0],
            setConfrimPasswordError = _reactExports$useStat10[1];
          const _reactExports$useStat11 = reactExports.useState(false),
            _reactExports$useStat12 = _slicedToArray(_reactExports$useStat11, 2),
            showPassword = _reactExports$useStat12[0],
            setShowPassword = _reactExports$useStat12[1];
          const handleClickShowPassword = () => setShowPassword(show => !show);
          const validate = () => {
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
          const onPasswordChanged = e => {
            setPassword(e.target.value);
            setPassError("");
          };
          const onConfirmPasswordChanges = e => {
            setConfrimPassword(e.target.value);
            setConfrimPasswordError("");
          };
          const onSubmit = () => {
            if (!validate()) {
              return;
            }
            dispatch(setLoading(true));
            AuthService.resetPassword(token, password).then(data => {
              navigate("/");
            }).catch(e => {
              onApiError({
                error: e,
                globalErrorHandler: processedError => {
                  dispatch(onError(processedError));
                },
                locallErrorHandler: processedError => {
                  if (processedError.name == PROCESSED_ERRORS.WRONG_RESET_TOKEN.name || processedError.name == PROCESSED_ERRORS.EXPIRED_RESET_TOKEN.name) {
                    setTokenError(t(`processed_errors.${processedError.name}`));
                  }
                }
              });
            }).finally(() => {
              dispatch(setLoading(false));
            });
          };
          return /* @__PURE__ */jsxRuntimeExports.jsx(Box, {
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
                  }), tokenError && /* @__PURE__ */jsxRuntimeExports.jsx(FormHelperText, {
                    className: styles.errorText,
                    children: tokenError
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
          });
        }
      }
    };
  });
})();
//# sourceMappingURL=index-legacy-fPWsFtGr.js.map
