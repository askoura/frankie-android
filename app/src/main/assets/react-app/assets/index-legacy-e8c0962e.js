;
(function () {
  System.register(['./index-legacy-7ea9dd30.js', './AuthService-legacy-0ac1bda4.js', './common-legacy-4815f98b.js', './index-legacy-d4b1c379.js', './common-legacy-4bc1ef15.js', './FormGroup-legacy-090122b5.js', './InputLabel-legacy-17368547.js', './InputAdornment-legacy-d731ef96.js', './VisibilityOff-legacy-1e29ce0b.js', './index-legacy-5f8fc065.js'], function (exports, module) {
    'use strict';

    var __vite_style__ = document.createElement('style');
    __vite_style__.textContent = "._wrapper_ju5e1_1 {\n  width: 400px;\n  background: #eff3fd;\n  border: 1px solid #bdc6de;\n  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);\n  border-radius: 13px;\n  max-width: 407px;\n  padding: 5px;\n}\n\n._content_ju5e1_11 {\n  background: #ffffff;\n  border-radius: 10px;\n  text-align: center;\n  padding: 60px 0;\n}\n\n._form_ju5e1_18 {\n  max-width: 250px;\n  margin: 40px auto;\n}\n\n._errorText_ju5e1_23 {\n  color: #eb5757 !important;\n}\n";
    document.head.appendChild(__vite_style__);
    var useParams, useNavigate, reactExports, jsxRuntimeExports, PROCESSED_ERRORS, processError, AuthService, hostnameSubdomain, urlWithSubdomain, AuthWrap, useTranslation, Box, Typography, Input, IconButton, Button, FormGroup, FormControl, InputLabel, FormHelperText, InputAdornment, VisibilityOff, Visibility;
    return {
      setters: [module => {
        useParams = module.a;
        useNavigate = module.u;
        reactExports = module.r;
        jsxRuntimeExports = module.j;
        PROCESSED_ERRORS = module.P;
        processError = module.p;
      }, module => {
        AuthService = module.A;
      }, module => {
        hostnameSubdomain = module.h;
        urlWithSubdomain = module.u;
      }, module => {
        AuthWrap = module.A;
      }, module => {
        useTranslation = module.u;
        Box = module.B;
        Typography = module.T;
        Input = module.I;
        IconButton = module.a;
        Button = module.b;
      }, module => {
        FormGroup = module.F;
      }, module => {
        FormControl = module.F;
        InputLabel = module.I;
        FormHelperText = module.a;
      }, module => {
        InputAdornment = module.I;
      }, module => {
        VisibilityOff = module.V;
        Visibility = module.a;
      }, null],
      execute: function () {
        exports('default', ResetPassword);
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
          const {
            t
          } = useTranslation("manage");
          const {
            token
          } = useParams();
          const navigate = useNavigate();
          const [loading, setLoading] = reactExports.useState(false);
          const [processedError, setProcessedError] = reactExports.useState("");
          const [showError, setShowError] = reactExports.useState(false);
          const [password, setPassword] = reactExports.useState("");
          const [passError, setPassError] = reactExports.useState("");
          const [confrimPassword, setConfrimPassword] = reactExports.useState("");
          const [confrimPasswordError, setConfrimPasswordError] = reactExports.useState("");
          const [showPassword, setShowPassword] = reactExports.useState(false);
          const handleClickShowPassword = () => setShowPassword(show => !show);
          const validate = () => {
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
            setLoading(true);
            AuthService.resetPassword(token, password).then(data => {
              const subdomain = hostnameSubdomain();
              if (subdomain === data.subdomain) {
                navigate("/");
              } else {
                window.location.replace(urlWithSubdomain(data.subdomain));
              }
            }).catch(e => {
              const processed = processError(e);
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
            }).finally(() => {
              setLoading(false);
            });
          };
          return /* @__PURE__ */jsxRuntimeExports.jsx(AuthWrap, {
            loading,
            showError,
            processedError,
            handleClose: () => setShowError(false),
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
                      children: t(`processed_errors.${processedError}`)
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
