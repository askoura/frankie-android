;
(function () {
  System.register(['./index-legacy-4fb9792c.js', './AuthService-legacy-d2677483.js', './index-legacy-7abe084b.js', './common-legacy-34feaaf1.js', './common-legacy-09fb4163.js', './TextField-legacy-cb08e608.js', './InputLabel-legacy-b05782a9.js', './InputAdornment-legacy-02205919.js', './VisibilityOff-legacy-72dec3e5.js', './Stack-legacy-b2e614b2.js', './Link-legacy-be256624.js', './index-legacy-c7009c87.js'], function (exports, module) {
    'use strict';

    var __vite_style__ = document.createElement('style');
    __vite_style__.textContent = "._wrapper_9fsfj_1 {\n  width: 400px;\n  background: #eff3fd;\n  border: 1px solid #bdc6de;\n  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);\n  border-radius: 13px;\n  max-width: 407px;\n  padding: 5px;\n}\n\n._content_9fsfj_11 {\n  background: #ffffff;\n  border-radius: 10px;\n  text-align: center;\n  padding: 60px 0;\n}\n\n._form_9fsfj_18 {\n  max-width: 250px;\n  margin: 40px auto;\n}\n\n._errorText_9fsfj_23 {\n  color: #eb5757 !important;\n}\n\n._links_9fsfj_27 {\n  margin-top: 10px;\n}\n\n._link_9fsfj_27 {\n  cursor: pointer;\n}\n";
    document.head.appendChild(__vite_style__);
    var useNavigate, useLocation, reactExports, jsxRuntimeExports, PROTOCOL, FRONT_END_HOST, processError, PROCESSED_ERRORS, AuthService, AuthWrap, hostnameSubdomain, urlWithSubdomain, useTranslation, Box, Typography, Input, IconButton, Button, TextField, FormControl, InputLabel, FormHelperText, InputAdornment, VisibilityOff, Visibility, Stack, Link;
    return {
      setters: [module => {
        useNavigate = module.u;
        useLocation = module.D;
        reactExports = module.r;
        jsxRuntimeExports = module.j;
        PROTOCOL = module.E;
        FRONT_END_HOST = module.F;
        processError = module.p;
        PROCESSED_ERRORS = module.P;
      }, module => {
        AuthService = module.A;
      }, module => {
        AuthWrap = module.A;
      }, module => {
        hostnameSubdomain = module.h;
        urlWithSubdomain = module.u;
      }, module => {
        useTranslation = module.u;
        Box = module.B;
        Typography = module.T;
        Input = module.I;
        IconButton = module.a;
        Button = module.b;
      }, module => {
        TextField = module.T;
      }, module => {
        FormControl = module.F;
        InputLabel = module.I;
        FormHelperText = module.a;
      }, module => {
        InputAdornment = module.I;
      }, module => {
        VisibilityOff = module.V;
        Visibility = module.a;
      }, module => {
        Stack = module.S;
      }, module => {
        Link = module.L;
      }, null],
      execute: function () {
        exports('default', Login);
        const wrapper = "_wrapper_9fsfj_1";
        const content = "_content_9fsfj_11";
        const form = "_form_9fsfj_18";
        const errorText = "_errorText_9fsfj_23";
        const links = "_links_9fsfj_27";
        const link = "_link_9fsfj_27";
        const styles = {
          wrapper: wrapper,
          content: content,
          form: form,
          errorText: errorText,
          links: links,
          link: link
        };
        function Login() {
          const {
            t,
            i18n
          } = useTranslation("manage");
          const navigate = useNavigate();
          const location = useLocation();
          const [loading, setLoading] = reactExports.useState(false);
          const [password, setPassword] = reactExports.useState("");
          const [passError, setPassError] = reactExports.useState("");
          const [email, setEmail] = reactExports.useState("");
          const [emailError, setEmailError] = reactExports.useState("");
          const [showPassword, setShowPassword] = reactExports.useState(false);
          const [processedError, setProcessedError] = reactExports.useState("");
          const [showError, setShowError] = reactExports.useState(false);
          const handleClickShowPassword = () => setShowPassword(show => !show);
          const validate = () => {
            setEmailError("");
            setPassError("");
            if (email.length == 0) {
              setEmailError(t("email_required"));
              return false;
            }
            if (password.length == 0) {
              setPassError(t("password_required"));
              return false;
            }
            return true;
          };
          const onPasswordChanged = e => {
            setPassword(e.target.value);
            setPassError("");
          };
          const onEmailChanged = e => {
            setEmail(e.target.value);
            setEmailError("");
          };
          const onSubmit = () => {
            if (!validate()) {
              return;
            }
            setLoading(true);
            AuthService.login(email, password).then(data => {
              const subdomain = hostnameSubdomain();
              if (subdomain === data.subdomain) {
                const {
                  from
                } = location.state || {
                  from: {
                    pathname: "/"
                  }
                };
                navigate(from);
              } else {
                var _location$state;
                if ((_location$state = location.state) !== null && _location$state !== void 0 && _location$state.from) {
                  var _location$state2, _location$state2$from, _location$state3, _location$state3$from;
                  const newUrl = PROTOCOL + "://" + data.subdomain + "." + FRONT_END_HOST + ((_location$state2 = location.state) === null || _location$state2 === void 0 ? void 0 : (_location$state2$from = _location$state2.from) === null || _location$state2$from === void 0 ? void 0 : _location$state2$from.pathname) + ((_location$state3 = location.state) === null || _location$state3 === void 0 ? void 0 : (_location$state3$from = _location$state3.from) === null || _location$state3$from === void 0 ? void 0 : _location$state3$from.search) || "";
                  window.location.replace(newUrl);
                } else {
                  window.location.replace(urlWithSubdomain(data.subdomain));
                }
              }
            }).catch(e => {
              const processed = processError(e);
              switch (processed) {
                case PROCESSED_ERRORS.NETWORK_ERR:
                case PROCESSED_ERRORS.BACKEND_DOWN:
                  setShowError(true);
                  setProcessedError(processed);
                  break;
                case PROCESSED_ERRORS.WRONG_CREDENTIALS:
                  setEmailError(t(`processed_errors.${processed}`));
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
                  variant: "h2",
                  children: t("login.title")
                }), /* @__PURE__ */jsxRuntimeExports.jsxs(Box, {
                  className: styles.form,
                  children: [/* @__PURE__ */jsxRuntimeExports.jsx(TextField, {
                    onChange: onEmailChanged,
                    error: (emailError === null || emailError === void 0 ? void 0 : emailError.length) > 0,
                    value: email,
                    id: "email",
                    label: t("label.email"),
                    name: "email",
                    required: true,
                    variant: "standard"
                  }), /* @__PURE__ */jsxRuntimeExports.jsxs(FormControl, {
                    required: true,
                    variant: "standard",
                    sx: {
                      mt: "10px"
                    },
                    children: [/* @__PURE__ */jsxRuntimeExports.jsx(InputLabel, {
                      htmlFor: "standard-adornment-password",
                      children: t("label.password")
                    }), /* @__PURE__ */jsxRuntimeExports.jsx(Input, {
                      error: (passError === null || passError === void 0 ? void 0 : passError.length) > 0,
                      name: "password",
                      value: password,
                      id: "standard-adornment-password",
                      type: showPassword ? "text" : "password",
                      onChange: onPasswordChanged,
                      endAdornment: /* @__PURE__ */jsxRuntimeExports.jsx(InputAdornment, {
                        position: "end",
                        children: /* @__PURE__ */jsxRuntimeExports.jsx(IconButton, {
                          "aria-label": "toggle password visibility",
                          onClick: handleClickShowPassword,
                          children: showPassword ? /* @__PURE__ */jsxRuntimeExports.jsx(VisibilityOff, {}) : /* @__PURE__ */jsxRuntimeExports.jsx(Visibility, {})
                        })
                      })
                    })]
                  }), (emailError || passError) && /* @__PURE__ */jsxRuntimeExports.jsx(FormHelperText, {
                    className: styles.errorText,
                    children: emailError || passError
                  }), /* @__PURE__ */jsxRuntimeExports.jsxs(Stack, {
                    justifyContent: "space-between",
                    flexDirection: "row",
                    className: styles.links,
                    children: [/* @__PURE__ */jsxRuntimeExports.jsx(Link, {
                      className: styles.link,
                      onClick: () => {
                        navigate("/forgot-password");
                      },
                      children: t("login.forgot_password")
                    }), /* @__PURE__ */jsxRuntimeExports.jsx(Link, {
                      className: styles.link,
                      onClick: () => {
                        navigate("/signup");
                      },
                      children: t("login.sign_up")
                    })]
                  }), /* @__PURE__ */jsxRuntimeExports.jsx(Button, {
                    onClick: onSubmit,
                    sx: {
                      mt: "40px"
                    },
                    children: t("login.submit")
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
