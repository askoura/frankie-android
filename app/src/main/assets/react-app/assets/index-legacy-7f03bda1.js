;
(function () {
  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
  function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
  System.register(['./index-legacy-99c8bdce.js', './AuthService-legacy-302554fd.js', './index-legacy-387b5a8d.js', './common-legacy-ff3cd242.js', './common-legacy-ddf67078.js', './TextField-legacy-2e69bcba.js', './InputLabel-legacy-0e4b4a01.js', './InputAdornment-legacy-c3b2f543.js', './VisibilityOff-legacy-9d7eab7e.js', './Stack-legacy-43ce0828.js', './Link-legacy-a066d1f2.js', './index-legacy-bffbe42c.js'], function (exports, module) {
    'use strict';

    var __vite_style__ = document.createElement('style');
    __vite_style__.textContent = "._wrapper_9fsfj_1 {\n  width: 400px;\n  background: #eff3fd;\n  border: 1px solid #bdc6de;\n  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);\n  border-radius: 13px;\n  max-width: 407px;\n  padding: 5px;\n}\n\n._content_9fsfj_11 {\n  background: #ffffff;\n  border-radius: 10px;\n  text-align: center;\n  padding: 60px 0;\n}\n\n._form_9fsfj_18 {\n  max-width: 250px;\n  margin: 40px auto;\n}\n\n._errorText_9fsfj_23 {\n  color: #eb5757 !important;\n}\n\n._links_9fsfj_27 {\n  margin-top: 10px;\n}\n\n._link_9fsfj_27 {\n  cursor: pointer;\n}\n";
    document.head.appendChild(__vite_style__);
    var useNavigate, useLocation, reactExports, jsxRuntimeExports, PROTOCOL, FRONT_END_HOST, processError, PROCESSED_ERRORS, AuthService, AuthWrap, hostnameSubdomain, urlWithSubdomain, useTranslation, Box, Typography, Input, IconButton, Button, TextField, FormControl, InputLabel, FormHelperText, InputAdornment, VisibilityOff, Visibility, Stack, Link;
    return {
      setters: [function (module) {
        useNavigate = module.u;
        useLocation = module.D;
        reactExports = module.r;
        jsxRuntimeExports = module.j;
        PROTOCOL = module.E;
        FRONT_END_HOST = module.F;
        processError = module.p;
        PROCESSED_ERRORS = module.P;
      }, function (module) {
        AuthService = module.A;
      }, function (module) {
        AuthWrap = module.A;
      }, function (module) {
        hostnameSubdomain = module.h;
        urlWithSubdomain = module.u;
      }, function (module) {
        useTranslation = module.u;
        Box = module.B;
        Typography = module.T;
        Input = module.I;
        IconButton = module.a;
        Button = module.b;
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
      }, function (module) {
        Stack = module.S;
      }, function (module) {
        Link = module.L;
      }, null],
      execute: function execute() {
        exports('default', Login);
        var wrapper = "_wrapper_9fsfj_1";
        var content = "_content_9fsfj_11";
        var form = "_form_9fsfj_18";
        var errorText = "_errorText_9fsfj_23";
        var links = "_links_9fsfj_27";
        var link = "_link_9fsfj_27";
        var styles = {
          wrapper: wrapper,
          content: content,
          form: form,
          errorText: errorText,
          links: links,
          link: link
        };
        function Login() {
          var _useTranslation = useTranslation("manage"),
            t = _useTranslation.t,
            i18n = _useTranslation.i18n;
          var navigate = useNavigate();
          var location = useLocation();
          var _reactExports$useStat = reactExports.useState(false),
            _reactExports$useStat2 = _slicedToArray(_reactExports$useStat, 2),
            loading = _reactExports$useStat2[0],
            setLoading = _reactExports$useStat2[1];
          var _reactExports$useStat3 = reactExports.useState(""),
            _reactExports$useStat4 = _slicedToArray(_reactExports$useStat3, 2),
            password = _reactExports$useStat4[0],
            setPassword = _reactExports$useStat4[1];
          var _reactExports$useStat5 = reactExports.useState(""),
            _reactExports$useStat6 = _slicedToArray(_reactExports$useStat5, 2),
            passError = _reactExports$useStat6[0],
            setPassError = _reactExports$useStat6[1];
          var _reactExports$useStat7 = reactExports.useState(""),
            _reactExports$useStat8 = _slicedToArray(_reactExports$useStat7, 2),
            email = _reactExports$useStat8[0],
            setEmail = _reactExports$useStat8[1];
          var _reactExports$useStat9 = reactExports.useState(""),
            _reactExports$useStat10 = _slicedToArray(_reactExports$useStat9, 2),
            emailError = _reactExports$useStat10[0],
            setEmailError = _reactExports$useStat10[1];
          var _reactExports$useStat11 = reactExports.useState(false),
            _reactExports$useStat12 = _slicedToArray(_reactExports$useStat11, 2),
            showPassword = _reactExports$useStat12[0],
            setShowPassword = _reactExports$useStat12[1];
          var _reactExports$useStat13 = reactExports.useState(""),
            _reactExports$useStat14 = _slicedToArray(_reactExports$useStat13, 2),
            processedError = _reactExports$useStat14[0],
            setProcessedError = _reactExports$useStat14[1];
          var _reactExports$useStat15 = reactExports.useState(false),
            _reactExports$useStat16 = _slicedToArray(_reactExports$useStat15, 2),
            showError = _reactExports$useStat16[0],
            setShowError = _reactExports$useStat16[1];
          var handleClickShowPassword = function handleClickShowPassword() {
            return setShowPassword(function (show) {
              return !show;
            });
          };
          var validate = function validate() {
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
          var onPasswordChanged = function onPasswordChanged(e) {
            setPassword(e.target.value);
            setPassError("");
          };
          var onEmailChanged = function onEmailChanged(e) {
            setEmail(e.target.value);
            setEmailError("");
          };
          var onSubmit = function onSubmit() {
            if (!validate()) {
              return;
            }
            setLoading(true);
            AuthService.login(email, password).then(function (data) {
              var subdomain = hostnameSubdomain();
              if (subdomain === data.subdomain) {
                var _ref = location.state || {
                    from: {
                      pathname: "/"
                    }
                  },
                  from = _ref.from;
                navigate(from);
              } else {
                var _location$state;
                if ((_location$state = location.state) !== null && _location$state !== void 0 && _location$state.from) {
                  var _location$state2, _location$state2$from, _location$state3, _location$state3$from;
                  var newUrl = PROTOCOL + "://" + data.subdomain + "." + FRONT_END_HOST + ((_location$state2 = location.state) === null || _location$state2 === void 0 ? void 0 : (_location$state2$from = _location$state2.from) === null || _location$state2$from === void 0 ? void 0 : _location$state2$from.pathname) + ((_location$state3 = location.state) === null || _location$state3 === void 0 ? void 0 : (_location$state3$from = _location$state3.from) === null || _location$state3$from === void 0 ? void 0 : _location$state3$from.search) || "";
                  window.location.replace(newUrl);
                } else {
                  window.location.replace(urlWithSubdomain(data.subdomain));
                }
              }
            }).catch(function (e) {
              var processed = processError(e);
              switch (processed) {
                case PROCESSED_ERRORS.NETWORK_ERR:
                case PROCESSED_ERRORS.BACKEND_DOWN:
                  setShowError(true);
                  setProcessedError(processed);
                  break;
                case PROCESSED_ERRORS.WRONG_CREDENTIALS:
                  setEmailError(t("processed_errors.".concat(processed)));
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
                      onClick: function onClick() {
                        navigate("/forgot-password");
                      },
                      children: t("login.forgot_password")
                    }), /* @__PURE__ */jsxRuntimeExports.jsx(Link, {
                      className: styles.link,
                      onClick: function onClick() {
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
