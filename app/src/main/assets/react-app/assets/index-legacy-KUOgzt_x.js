;
(function () {
  const _excluded = ["onSuccess", "onError", "useOneTap", "promptMomentNotification", "type", "theme", "size", "text", "shape", "logo_alignment", "width", "locale", "click_listener", "containerProps"];
  function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
  function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : String(i); }
  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
  function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
  function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
  System.register(['./index-legacy-T3s18jo3.js', './Web-legacy-LDhM2X1u.js', './LoginInput-legacy-SHyBw1f-.js', './FormGroup-legacy-aaf9eppM.js', './TextField-legacy-vL2OdS5Q.js', './LockOpen-legacy-0yg11qwQ.js', './DatePicker-legacy-9Ey9K3I7.js', './FormControlLabel-legacy-0Ne4M7i6.js', './Link-legacy-XikCqkk_.js', './Checkbox-legacy-8hCFdihe.js', './SwitchBase-legacy-VpMr3A_z.js', './Grid-legacy-ZQipiKyz.js'], function (exports, module) {
    'use strict';

    var reactExports, React, useTranslation, useDispatch, useNavigate, jsxRuntimeExports, Box, FormControl, Button, setLoading, onApiError, PROCESSED_ERRORS, useLocation, onError$1, AuthService, Person, CheckCircle, LoginInput, FormGroup, FormHelperText, LockOpen, Lock, Tabs, Tab, Stack, Link;
    return {
      setters: [module => {
        reactExports = module.r;
        React = module.R;
        useTranslation = module.x;
        useDispatch = module.z;
        useNavigate = module.w;
        jsxRuntimeExports = module.j;
        Box = module.B;
        FormControl = module.ag;
        Button = module.a1;
        setLoading = module.D;
        onApiError = module.a3;
        PROCESSED_ERRORS = module.a4;
        useLocation = module.aE;
        onError$1 = module.a7;
      }, module => {
        AuthService = module.A;
        Person = module.P;
      }, module => {
        CheckCircle = module.C;
        LoginInput = module.L;
      }, module => {
        FormGroup = module.F;
      }, module => {
        FormHelperText = module.F;
      }, module => {
        LockOpen = module.L;
        Lock = module.a;
      }, module => {
        Tabs = module.T;
        Tab = module.a;
      }, module => {
        Stack = module.S;
      }, module => {
        Link = module.L;
      }, null, null, null],
      execute: function execute() {
        var __vite_style__ = document.createElement('style');
        __vite_style__.textContent = "._content_118tw_1 {\n  display: flex;\n  flex-direction: column;\n  gap: 2rem;\n  background: #ffffff;\n  text-align: center;\n  padding: 3.75rem;\n}\n\n@media (max-width: 768px) {\n  ._content_118tw_1 {\n    padding: 2rem;\n  }\n}\n\n@media (max-width: 480px) {\n  ._content_118tw_1 {\n    padding: 1rem;\n  }\n}\n._errorText_118tw_21 {\n  color: #eb5757 !important;\n}\n\n._links_118tw_25 {\n  margin-top: 25px;\n  padding: 0px 20px;\n}\n\n._loginButton_118tw_30 {\n  background-color: #04bdf3 !important;\n  color: #fff !important;\n  border-radius: 13px !important;\n  padding: 12px !important;\n  text-transform: none !important;\n  font-weight: 700 !important;\n  font-size: 1.25rem !important;\n}\n._content_ud0i4_1 {\n  display: flex;\n  flex-direction: column;\n  gap: 2rem;\n  background: #ffffff;\n  text-align: center;\n  padding: 3.75rem;\n}\n\n@media (max-width: 768px) {\n  ._content_ud0i4_1 {\n    padding: 2rem;\n  }\n}\n\n@media (max-width: 480px) {\n  ._content_ud0i4_1 {\n    padding: 1rem;\n  }\n}\n\n._formGroup_ud0i4_22 {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n\n._errorText_ud0i4_28 {\n  color: #eb5757 !important;\n}\n\n._successText_ud0i4_32 {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 2rem;\n  margin-bottom: 2rem;\n  color: #27ae60;\n  border-radius: 5px;\n  padding: 10px;\n}\n\n._signUpButton_ud0i4_44 {\n  background-color: #04bdf3 !important;\n  color: #fff !important;\n  border-radius: 13px !important;\n  padding: 12px !important;\n  text-transform: none !important;\n  font-weight: 700 !important;\n  font-size: 1.25rem !important;\n}\n";
        document.head.appendChild(__vite_style__);
        exports('default', Login);
        const content$1 = "_content_118tw_1";
        const errorText$1 = "_errorText_118tw_21";
        const links = "_links_118tw_25";
        const loginButton = "_loginButton_118tw_30";
        const styles$1 = {
          content: content$1,
          errorText: errorText$1,
          links: links,
          loginButton: loginButton
        };
        function useLoadGsiScript(options = {}) {
          const nonce = options.nonce,
            onScriptLoadSuccess = options.onScriptLoadSuccess,
            onScriptLoadError = options.onScriptLoadError;
          const _reactExports$useStat = reactExports.useState(false),
            _reactExports$useStat2 = _slicedToArray(_reactExports$useStat, 2),
            scriptLoadedSuccessfully = _reactExports$useStat2[0],
            setScriptLoadedSuccessfully = _reactExports$useStat2[1];
          const onScriptLoadSuccessRef = reactExports.useRef(onScriptLoadSuccess);
          onScriptLoadSuccessRef.current = onScriptLoadSuccess;
          const onScriptLoadErrorRef = reactExports.useRef(onScriptLoadError);
          onScriptLoadErrorRef.current = onScriptLoadError;
          reactExports.useEffect(() => {
            const scriptTag = document.createElement('script');
            scriptTag.src = 'https://accounts.google.com/gsi/client';
            scriptTag.async = true;
            scriptTag.defer = true;
            scriptTag.nonce = nonce;
            scriptTag.onload = () => {
              var _a;
              setScriptLoadedSuccessfully(true);
              (_a = onScriptLoadSuccessRef.current) === null || _a === void 0 ? void 0 : _a.call(onScriptLoadSuccessRef);
            };
            scriptTag.onerror = () => {
              var _a;
              setScriptLoadedSuccessfully(false);
              (_a = onScriptLoadErrorRef.current) === null || _a === void 0 ? void 0 : _a.call(onScriptLoadErrorRef);
            };
            document.body.appendChild(scriptTag);
            return () => {
              document.body.removeChild(scriptTag);
            };
          }, [nonce]);
          return scriptLoadedSuccessfully;
        }
        const GoogleOAuthContext = reactExports.createContext(null);
        function GoogleOAuthProvider({
          clientId,
          nonce,
          onScriptLoadSuccess,
          onScriptLoadError,
          children
        }) {
          const scriptLoadedSuccessfully = useLoadGsiScript({
            nonce,
            onScriptLoadSuccess,
            onScriptLoadError
          });
          const contextValue = reactExports.useMemo(() => ({
            clientId,
            scriptLoadedSuccessfully
          }), [clientId, scriptLoadedSuccessfully]);
          return React.createElement(GoogleOAuthContext.Provider, {
            value: contextValue
          }, children);
        }
        function useGoogleOAuth() {
          const context = reactExports.useContext(GoogleOAuthContext);
          if (!context) {
            throw new Error('Google OAuth components must be used within GoogleOAuthProvider');
          }
          return context;
        }
        function extractClientId(credentialResponse) {
          var _a;
          const clientId = (_a = credentialResponse === null || credentialResponse === void 0 ? void 0 : credentialResponse.clientId) !== null && _a !== void 0 ? _a : credentialResponse === null || credentialResponse === void 0 ? void 0 : credentialResponse.client_id;
          return clientId;
        }
        const containerHeightMap = {
          large: 40,
          medium: 32,
          small: 20
        };
        function GoogleLogin(_ref) {
          let onSuccess = _ref.onSuccess,
            onError = _ref.onError,
            useOneTap = _ref.useOneTap,
            promptMomentNotification = _ref.promptMomentNotification,
            _ref$type = _ref.type,
            type = _ref$type === void 0 ? 'standard' : _ref$type,
            _ref$theme = _ref.theme,
            theme = _ref$theme === void 0 ? 'outline' : _ref$theme,
            _ref$size = _ref.size,
            size = _ref$size === void 0 ? 'large' : _ref$size,
            text = _ref.text,
            shape = _ref.shape,
            logo_alignment = _ref.logo_alignment,
            width = _ref.width,
            locale = _ref.locale,
            click_listener = _ref.click_listener,
            containerProps = _ref.containerProps,
            props = _objectWithoutProperties(_ref, _excluded);
          const btnContainerRef = reactExports.useRef(null);
          const _useGoogleOAuth = useGoogleOAuth(),
            clientId = _useGoogleOAuth.clientId,
            scriptLoadedSuccessfully = _useGoogleOAuth.scriptLoadedSuccessfully;
          const onSuccessRef = reactExports.useRef(onSuccess);
          onSuccessRef.current = onSuccess;
          const onErrorRef = reactExports.useRef(onError);
          onErrorRef.current = onError;
          const promptMomentNotificationRef = reactExports.useRef(promptMomentNotification);
          promptMomentNotificationRef.current = promptMomentNotification;
          reactExports.useEffect(() => {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j;
            if (!scriptLoadedSuccessfully) return;
            (_c = (_b = (_a = window === null || window === void 0 ? void 0 : window.google) === null || _a === void 0 ? void 0 : _a.accounts) === null || _b === void 0 ? void 0 : _b.id) === null || _c === void 0 ? void 0 : _c.initialize(_objectSpread({
              client_id: clientId,
              callback: credentialResponse => {
                var _a;
                if (!(credentialResponse === null || credentialResponse === void 0 ? void 0 : credentialResponse.credential)) {
                  return (_a = onErrorRef.current) === null || _a === void 0 ? void 0 : _a.call(onErrorRef);
                }
                const credential = credentialResponse.credential,
                  select_by = credentialResponse.select_by;
                onSuccessRef.current({
                  credential,
                  clientId: extractClientId(credentialResponse),
                  select_by
                });
              }
            }, props));
            (_f = (_e = (_d = window === null || window === void 0 ? void 0 : window.google) === null || _d === void 0 ? void 0 : _d.accounts) === null || _e === void 0 ? void 0 : _e.id) === null || _f === void 0 ? void 0 : _f.renderButton(btnContainerRef.current, {
              type,
              theme,
              size,
              text,
              shape,
              logo_alignment,
              width,
              locale,
              click_listener
            });
            if (useOneTap) (_j = (_h = (_g = window === null || window === void 0 ? void 0 : window.google) === null || _g === void 0 ? void 0 : _g.accounts) === null || _h === void 0 ? void 0 : _h.id) === null || _j === void 0 ? void 0 : _j.prompt(promptMomentNotificationRef.current);
            return () => {
              var _a, _b, _c;
              if (useOneTap) (_c = (_b = (_a = window === null || window === void 0 ? void 0 : window.google) === null || _a === void 0 ? void 0 : _a.accounts) === null || _b === void 0 ? void 0 : _b.id) === null || _c === void 0 ? void 0 : _c.cancel();
            };
            // eslint-disable-next-line react-hooks/exhaustive-deps
          }, [clientId, scriptLoadedSuccessfully, useOneTap, type, theme, size, text, shape, logo_alignment, width, locale]);
          return React.createElement("div", _objectSpread(_objectSpread({}, containerProps), {}, {
            ref: btnContainerRef,
            style: _objectSpread({
              height: containerHeightMap[size]
            }, containerProps === null || containerProps === void 0 ? void 0 : containerProps.style)
          }));
        }
        const content = "_content_ud0i4_1";
        const formGroup = "_formGroup_ud0i4_22";
        const errorText = "_errorText_ud0i4_28";
        const successText = "_successText_ud0i4_32";
        const signUpButton = "_signUpButton_ud0i4_44";
        const styles = {
          content: content,
          formGroup: formGroup,
          errorText: errorText,
          successText: successText,
          signUpButton: signUpButton
        };
        function SignUp() {
          const _useTranslation = useTranslation("manage"),
            t = _useTranslation.t;
          const dispatch = useDispatch();
          const navigate = useNavigate();
          const _reactExports$useStat3 = reactExports.useState(false),
            _reactExports$useStat4 = _slicedToArray(_reactExports$useStat3, 2),
            isSuccess = _reactExports$useStat4[0],
            setSuccess = _reactExports$useStat4[1];
          const _reactExports$useStat5 = reactExports.useState(""),
            _reactExports$useStat6 = _slicedToArray(_reactExports$useStat5, 2),
            email = _reactExports$useStat6[0],
            setEmail = _reactExports$useStat6[1];
          const _reactExports$useStat7 = reactExports.useState(""),
            _reactExports$useStat8 = _slicedToArray(_reactExports$useStat7, 2),
            emailError = _reactExports$useStat8[0],
            setEmailError = _reactExports$useStat8[1];
          const _reactExports$useStat9 = reactExports.useState(""),
            _reactExports$useStat10 = _slicedToArray(_reactExports$useStat9, 2),
            duplicateEmailError = _reactExports$useStat10[0],
            setDuplicateEmailError = _reactExports$useStat10[1];
          const _reactExports$useStat11 = reactExports.useState(""),
            _reactExports$useStat12 = _slicedToArray(_reactExports$useStat11, 2),
            firstName = _reactExports$useStat12[0],
            setFirstName = _reactExports$useStat12[1];
          const _reactExports$useStat13 = reactExports.useState(""),
            _reactExports$useStat14 = _slicedToArray(_reactExports$useStat13, 2),
            firstNameError = _reactExports$useStat14[0],
            setFirstNameError = _reactExports$useStat14[1];
          const _reactExports$useStat15 = reactExports.useState(""),
            _reactExports$useStat16 = _slicedToArray(_reactExports$useStat15, 2),
            lastName = _reactExports$useStat16[0],
            setLastName = _reactExports$useStat16[1];
          const _reactExports$useStat17 = reactExports.useState(""),
            _reactExports$useStat18 = _slicedToArray(_reactExports$useStat17, 2),
            lastNameError = _reactExports$useStat18[0],
            setLastNameError = _reactExports$useStat18[1];
          const _reactExports$useStat19 = reactExports.useState(""),
            _reactExports$useStat20 = _slicedToArray(_reactExports$useStat19, 2),
            password = _reactExports$useStat20[0],
            setPassword = _reactExports$useStat20[1];
          const _reactExports$useStat21 = reactExports.useState(""),
            _reactExports$useStat22 = _slicedToArray(_reactExports$useStat21, 2),
            passError = _reactExports$useStat22[0],
            setPassError = _reactExports$useStat22[1];
          const _reactExports$useStat23 = reactExports.useState(false),
            _reactExports$useStat24 = _slicedToArray(_reactExports$useStat23, 2),
            showPassword = _reactExports$useStat24[0],
            setShowPassword = _reactExports$useStat24[1];
          const handleClickShowPassword = () => setShowPassword(show => !show);
          const onPasswordChanged = e => {
            setPassword(e.target.value);
            setPassError("");
          };
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
          const validate = () => {
            setEmailError("");
            setPassError("");
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
            return true;
          };
          const onGoogleAuthSuccess = credentialResponse => {
            dispatch(setLoading(true));
            AuthService.googleSignIn(credentialResponse).then(data => {
              const _ref2 = location.state || {
                  from: {
                    pathname: "/"
                  }
                },
                from = _ref2.from;
              navigate(from);
            }).catch(e => {
              onError(e);
            }).finally(() => {
              dispatch(setLoading(false));
            });
          };
          const onSubmit = () => {
            if (!validate()) {
              return;
            }
            dispatch(setLoading(true));
            AuthService.signup({
              email,
              password,
              firstName,
              lastName
            }).then(() => {
              setSuccess(true);
            }).catch(e => {
              onApiError({
                error: e,
                globalErrorHandler: processedError => {
                  dispatch(onError(processedError));
                },
                locallErrorHandler: processedError => {
                  if (processedError.name == PROCESSED_ERRORS.DUPLICATE_EMAIL.name) {
                    setDuplicateEmailError(t(`processed_errors.${processedError.name}`));
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
              children: [isSuccess ? /* @__PURE__ */jsxRuntimeExports.jsxs(Box, {
                className: styles.successText,
                children: [/* @__PURE__ */jsxRuntimeExports.jsx(CheckCircle, {
                  sx: {
                    fontSize: "60px"
                  }
                }), t("sign_up.success")]
              }) : /* @__PURE__ */jsxRuntimeExports.jsxs(Box, {
                className: styles.form,
                children: [/* @__PURE__ */jsxRuntimeExports.jsxs(FormGroup, {
                  className: styles.formGroup,
                  children: [/* @__PURE__ */jsxRuntimeExports.jsx(LoginInput, {
                    error: firstNameError.length > 0,
                    required: true,
                    value: firstName,
                    id: "firstName",
                    label: t("label.first_name"),
                    name: "firstName",
                    onChange: onFirstNameChanged,
                    variant: "standard"
                  }), firstNameError && /* @__PURE__ */jsxRuntimeExports.jsx(FormHelperText, {
                    className: styles.errorText,
                    children: firstNameError
                  }), /* @__PURE__ */jsxRuntimeExports.jsx(LoginInput, {
                    error: (lastNameError === null || lastNameError === void 0 ? void 0 : lastNameError.length) > 0,
                    id: "lastName",
                    value: lastName,
                    helperText: lastNameError,
                    required: true,
                    onChange: onLastChanged,
                    label: t("label.last_name"),
                    name: "lastName",
                    variant: "standard"
                  }), lastNameError && /* @__PURE__ */jsxRuntimeExports.jsx(FormHelperText, {
                    className: styles.errorText,
                    children: lastNameError
                  }), /* @__PURE__ */jsxRuntimeExports.jsx(LoginInput, {
                    required: true,
                    value: email,
                    error: (emailError === null || emailError === void 0 ? void 0 : emailError.length) > 0 || duplicateEmailError.length > 0,
                    id: "email",
                    onChange: onEmailChanged,
                    label: t("label.email"),
                    name: "email",
                    variant: "standard"
                  }), emailError || duplicateEmailError && /* @__PURE__ */jsxRuntimeExports.jsx(FormHelperText, {
                    className: styles.errorText,
                    children: emailError || duplicateEmailError
                  }), /* @__PURE__ */jsxRuntimeExports.jsxs(FormControl, {
                    required: true,
                    variant: "standard",
                    sx: {
                      mt: "10px"
                    },
                    children: [/* @__PURE__ */jsxRuntimeExports.jsx(LoginInput, {
                      label: t("label.password"),
                      error: (passError === null || passError === void 0 ? void 0 : passError.length) > 0,
                      required: true,
                      value: password,
                      onChange: onPasswordChanged,
                      name: "password",
                      variant: "standard",
                      id: "standard-adornment-password",
                      type: showPassword ? "text" : "password",
                      icon: showPassword ? /* @__PURE__ */jsxRuntimeExports.jsx(LockOpen, {
                        onClick: handleClickShowPassword,
                        sx: {
                          color: "#16205b",
                          cursor: "pointer"
                        }
                      }) : /* @__PURE__ */jsxRuntimeExports.jsx(Lock, {
                        onClick: handleClickShowPassword,
                        sx: {
                          color: "#16205b",
                          cursor: "pointer"
                        }
                      })
                    }), passError && /* @__PURE__ */jsxRuntimeExports.jsx(FormHelperText, {
                      className: styles.errorText,
                      children: passError
                    })]
                  }), /* @__PURE__ */jsxRuntimeExports.jsx(FormHelperText, {
                    sx: {
                      fontSize: "10px"
                    },
                    children: t("sign_up.helper_text")
                  })]
                }), /* @__PURE__ */jsxRuntimeExports.jsx(Button, {
                  fullWidth: true,
                  onClick: onSubmit,
                  className: styles.signUpButton,
                  sx: {
                    mt: "25px"
                  },
                  children: t("sign_up.sign_up")
                })]
              }), /* @__PURE__ */jsxRuntimeExports.jsx("div", {
                style: {
                  width: "200px",
                  margin: "auto"
                },
                children: /* @__PURE__ */jsxRuntimeExports.jsx(GoogleOAuthProvider, {
                  clientId: "464768435207-uhlij21kj0kn0tetqqj4292iedfeiogf.apps.googleusercontent.com",
                  children: /* @__PURE__ */jsxRuntimeExports.jsx(GoogleLogin, {
                    onSuccess: onGoogleAuthSuccess,
                    onError: () => {
                      console.log("Login Failed");
                    }
                  })
                })
              })]
            })
          });
        }
        function Login() {
          const _useTranslation2 = useTranslation("manage"),
            t = _useTranslation2.t;
          const navigate = useNavigate();
          const dispatch = useDispatch();
          const location = useLocation();
          const _reactExports$useStat25 = reactExports.useState(""),
            _reactExports$useStat26 = _slicedToArray(_reactExports$useStat25, 2),
            password = _reactExports$useStat26[0],
            setPassword = _reactExports$useStat26[1];
          const _reactExports$useStat27 = reactExports.useState(""),
            _reactExports$useStat28 = _slicedToArray(_reactExports$useStat27, 2),
            passError = _reactExports$useStat28[0],
            setPassError = _reactExports$useStat28[1];
          const _reactExports$useStat29 = reactExports.useState(""),
            _reactExports$useStat30 = _slicedToArray(_reactExports$useStat29, 2),
            email = _reactExports$useStat30[0],
            setEmail = _reactExports$useStat30[1];
          const _reactExports$useStat31 = reactExports.useState(""),
            _reactExports$useStat32 = _slicedToArray(_reactExports$useStat31, 2),
            emailError = _reactExports$useStat32[0],
            setEmailError = _reactExports$useStat32[1];
          const _reactExports$useStat33 = reactExports.useState(0),
            _reactExports$useStat34 = _slicedToArray(_reactExports$useStat33, 2),
            value = _reactExports$useStat34[0],
            setValue = _reactExports$useStat34[1];
          const loginPath = "/login";
          const signupPath = "/signup";
          reactExports.useEffect(() => {
            const path = location.pathname;
            if (path === signupPath) {
              setValue(1);
            } else if (path === loginPath) {
              setValue(0);
            }
          }, [location]);
          const handleChangeTabs = (event, newValue) => {
            setValue(newValue);
            if (newValue === 0) {
              navigate(loginPath);
            } else if (newValue === 1) {
              navigate(signupPath);
            }
          };
          const _reactExports$useStat35 = reactExports.useState(false),
            _reactExports$useStat36 = _slicedToArray(_reactExports$useStat35, 2),
            showPassword = _reactExports$useStat36[0],
            setShowPassword = _reactExports$useStat36[1];
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
          reactExports.useEffect(() => {
            const input = document.querySelector('input[name="email"]');
            if (input && input.value !== email) {
              setEmail(input.value);
            }
          }, [email]);
          const handleError = e => {
            onApiError({
              error: e,
              globalErrorHandler: processedError => {
                dispatch(onError$1(processedError));
              },
              locallErrorHandler: processedError => {
                if (processedError.name == PROCESSED_ERRORS.WRONG_CREDENTIALS.name) {
                  setEmailError(t(`processed_errors.${processedError.name}`));
                  setPassError(t(`processed_errors.${processedError.name}`));
                }
              }
            });
          };
          const onSubmit = () => {
            if (!validate()) {
              return;
            }
            dispatch(setLoading(true));
            AuthService.login(email, password).then(data => {
              const _ref3 = location.state || {
                  from: {
                    pathname: "/"
                  }
                },
                from = _ref3.from;
              navigate(from);
            }).catch(e => {
              handleError(e);
            }).finally(() => {
              dispatch(setLoading(false));
            });
          };
          const onGoogleAuthSuccess = credentialResponse => {
            dispatch(setLoading(true));
            AuthService.googleSignIn(credentialResponse).then(data => {
              const _ref4 = location.state || {
                  from: {
                    pathname: "/"
                  }
                },
                from = _ref4.from;
              navigate(from);
            }).catch(e => {
              handleError(e);
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
            children: /* @__PURE__ */jsxRuntimeExports.jsxs(Box, {
              sx: {
                width: "100%",
                maxWidth: 700,
                marginTop: 5
              },
              children: [/* @__PURE__ */jsxRuntimeExports.jsx(Box, {
                sx: {
                  borderBottom: 1,
                  borderColor: "divider"
                },
                children: /* @__PURE__ */jsxRuntimeExports.jsxs(Tabs, {
                  value,
                  onChange: handleChangeTabs,
                  "aria-label": "basic tabs example",
                  variant: "fullWidth",
                  classes: {
                    indicator: styles$1.tabIndicator
                  },
                  TabIndicatorProps: {
                    style: {
                      display: "none"
                    }
                  },
                  sx: {
                    ".MuiTabs-indicator": {
                      display: "none"
                    },
                    ".MuiButtonBase-root": {
                      bgcolor: "#dfe2ef",
                      color: "#16205b",
                      textTransform: "none",
                      padding: "25px",
                      fontSize: "1.125rem",
                      fontWeight: "600"
                    },
                    ".MuiButtonBase-root:nth-of-type(1)": {
                      borderTopLeftRadius: "15px"
                    },
                    ".MuiButtonBase-root:nth-of-type(2)": {
                      borderTopRightRadius: "15px"
                    },
                    ".Mui-selected": {
                      bgcolor: "#fff",
                      color: "#16205b !important"
                    }
                  },
                  children: [/* @__PURE__ */jsxRuntimeExports.jsx(Tab, {
                    classes: {
                      root: styles$1.tabRoot,
                      selected: styles$1.tabSelected
                    },
                    label: t("login.title")
                  }), /* @__PURE__ */jsxRuntimeExports.jsx(Tab, {
                    className: value === 0 ? styles$1.selectedTab : styles$1.tab,
                    label: t("sign_up.title")
                  })]
                })
              }), value === 0 && /* @__PURE__ */jsxRuntimeExports.jsxs(Box, {
                className: styles$1.content,
                children: [/* @__PURE__ */jsxRuntimeExports.jsxs(Box, {
                  children: [/* @__PURE__ */jsxRuntimeExports.jsx(LoginInput, {
                    label: "Email",
                    onChange: onEmailChanged,
                    error: (emailError === null || emailError === void 0 ? void 0 : emailError.length) > 0,
                    value: email,
                    name: "email",
                    required: true,
                    variant: "standard",
                    icon: /* @__PURE__ */jsxRuntimeExports.jsx(Person, {
                      sx: {
                        color: "#16205b"
                      }
                    })
                  }), /* @__PURE__ */jsxRuntimeExports.jsx(FormControl, {
                    required: true,
                    variant: "standard",
                    sx: {
                      mt: "10px"
                    },
                    children: /* @__PURE__ */jsxRuntimeExports.jsx(LoginInput, {
                      label: t("label.password"),
                      onChange: onPasswordChanged,
                      error: (passError === null || passError === void 0 ? void 0 : passError.length) > 0,
                      value: password,
                      type: showPassword ? "text" : "password",
                      name: "password",
                      required: true,
                      variant: "standard",
                      icon: showPassword ? /* @__PURE__ */jsxRuntimeExports.jsx(LockOpen, {
                        onClick: handleClickShowPassword,
                        sx: {
                          color: "#16205b",
                          cursor: "pointer"
                        }
                      }) : /* @__PURE__ */jsxRuntimeExports.jsx(Lock, {
                        onClick: handleClickShowPassword,
                        sx: {
                          color: "#16205b",
                          cursor: "pointer"
                        }
                      })
                    })
                  }), (emailError || passError) && /* @__PURE__ */jsxRuntimeExports.jsx(FormHelperText, {
                    className: styles$1.errorText,
                    children: emailError || passError
                  }), /* @__PURE__ */jsxRuntimeExports.jsx(Stack, {
                    justifyContent: "flex-end",
                    flexDirection: "row",
                    className: styles$1.links,
                    alignItems: "center",
                    children: /* @__PURE__ */jsxRuntimeExports.jsx(Link, {
                      sx: {
                        color: "grey",
                        cursor: "pointer",
                        textDecoration: "none"
                      },
                      onClick: () => {
                        navigate("/forgot-password");
                      },
                      children: t("login.forgot_password")
                    })
                  }), /* @__PURE__ */jsxRuntimeExports.jsx(Button, {
                    fullWidth: true,
                    onClick: onSubmit,
                    className: styles$1.loginButton,
                    sx: {
                      mt: "25px"
                    },
                    children: t("login.login")
                  })]
                }), /* @__PURE__ */jsxRuntimeExports.jsx("div", {
                  style: {
                    width: "200px",
                    margin: "auto"
                  },
                  children: /* @__PURE__ */jsxRuntimeExports.jsx(GoogleOAuthProvider, {
                    clientId: "464768435207-uhlij21kj0kn0tetqqj4292iedfeiogf.apps.googleusercontent.com",
                    children: /* @__PURE__ */jsxRuntimeExports.jsx(GoogleLogin, {
                      onSuccess: onGoogleAuthSuccess,
                      onError: () => {
                        console.log("Login Failed");
                      }
                    })
                  })
                })]
              }), value === 1 && /* @__PURE__ */jsxRuntimeExports.jsx(SignUp, {})]
            })
          });
        }
      }
    };
  });
})();
//# sourceMappingURL=index-legacy-KUOgzt_x.js.map
