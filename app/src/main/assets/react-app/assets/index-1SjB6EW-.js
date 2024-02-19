import { r as reactExports, R as React, x as useTranslation, z as useDispatch, w as useNavigate, j as jsxRuntimeExports, B as Box, ag as FormControl, a1 as Button, D as setLoading, a3 as onApiError, a4 as PROCESSED_ERRORS, aE as useLocation, a7 as onError$1 } from "./index-RBnW6nvi.js";
import { A as AuthService, P as Person } from "./Web-KOHZ4PI_.js";
import { C as CheckCircle, L as LoginInput } from "./LoginInput-G0ViwFtG.js";
import { F as FormGroup } from "./FormGroup-A52SYRjs.js";
import { F as FormHelperText } from "./TextField-lJ98NZsg.js";
import { L as LockOpen, a as Lock } from "./LockOpen-vv5QwsHD.js";
import { T as Tabs, a as Tab } from "./DatePicker-AVKIEE0b.js";
import { S as Stack } from "./FormControlLabel-B-3jdeza.js";
import { L as Link } from "./Link-9ysrr75u.js";
import "./Checkbox-HSUkhdvK.js";
import "./SwitchBase-naWSSwc-.js";
import "./Grid-q5yBxj4Y.js";
const content$1 = "_content_118tw_1";
const errorText$1 = "_errorText_118tw_21";
const links = "_links_118tw_25";
const loginButton = "_loginButton_118tw_30";
const styles$1 = {
  content: content$1,
  errorText: errorText$1,
  links,
  loginButton
};
function useLoadGsiScript(options = {}) {
  const { nonce, onScriptLoadSuccess, onScriptLoadError } = options;
  const [scriptLoadedSuccessfully, setScriptLoadedSuccessfully] = reactExports.useState(false);
  const onScriptLoadSuccessRef = reactExports.useRef(onScriptLoadSuccess);
  onScriptLoadSuccessRef.current = onScriptLoadSuccess;
  const onScriptLoadErrorRef = reactExports.useRef(onScriptLoadError);
  onScriptLoadErrorRef.current = onScriptLoadError;
  reactExports.useEffect(() => {
    const scriptTag = document.createElement("script");
    scriptTag.src = "https://accounts.google.com/gsi/client";
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
function GoogleOAuthProvider({ clientId, nonce, onScriptLoadSuccess, onScriptLoadError, children }) {
  const scriptLoadedSuccessfully = useLoadGsiScript({
    nonce,
    onScriptLoadSuccess,
    onScriptLoadError
  });
  const contextValue = reactExports.useMemo(() => ({
    clientId,
    scriptLoadedSuccessfully
  }), [clientId, scriptLoadedSuccessfully]);
  return React.createElement(GoogleOAuthContext.Provider, { value: contextValue }, children);
}
function useGoogleOAuth() {
  const context = reactExports.useContext(GoogleOAuthContext);
  if (!context) {
    throw new Error("Google OAuth components must be used within GoogleOAuthProvider");
  }
  return context;
}
function extractClientId(credentialResponse) {
  var _a;
  const clientId = (_a = credentialResponse === null || credentialResponse === void 0 ? void 0 : credentialResponse.clientId) !== null && _a !== void 0 ? _a : credentialResponse === null || credentialResponse === void 0 ? void 0 : credentialResponse.client_id;
  return clientId;
}
const containerHeightMap = { large: 40, medium: 32, small: 20 };
function GoogleLogin({ onSuccess, onError: onError2, useOneTap, promptMomentNotification, type = "standard", theme = "outline", size = "large", text, shape, logo_alignment, width, locale, click_listener, containerProps, ...props }) {
  const btnContainerRef = reactExports.useRef(null);
  const { clientId, scriptLoadedSuccessfully } = useGoogleOAuth();
  const onSuccessRef = reactExports.useRef(onSuccess);
  onSuccessRef.current = onSuccess;
  const onErrorRef = reactExports.useRef(onError2);
  onErrorRef.current = onError2;
  const promptMomentNotificationRef = reactExports.useRef(promptMomentNotification);
  promptMomentNotificationRef.current = promptMomentNotification;
  reactExports.useEffect(() => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j;
    if (!scriptLoadedSuccessfully)
      return;
    (_c = (_b = (_a = window === null || window === void 0 ? void 0 : window.google) === null || _a === void 0 ? void 0 : _a.accounts) === null || _b === void 0 ? void 0 : _b.id) === null || _c === void 0 ? void 0 : _c.initialize({
      client_id: clientId,
      callback: (credentialResponse) => {
        var _a2;
        if (!(credentialResponse === null || credentialResponse === void 0 ? void 0 : credentialResponse.credential)) {
          return (_a2 = onErrorRef.current) === null || _a2 === void 0 ? void 0 : _a2.call(onErrorRef);
        }
        const { credential, select_by } = credentialResponse;
        onSuccessRef.current({
          credential,
          clientId: extractClientId(credentialResponse),
          select_by
        });
      },
      ...props
    });
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
    if (useOneTap)
      (_j = (_h = (_g = window === null || window === void 0 ? void 0 : window.google) === null || _g === void 0 ? void 0 : _g.accounts) === null || _h === void 0 ? void 0 : _h.id) === null || _j === void 0 ? void 0 : _j.prompt(promptMomentNotificationRef.current);
    return () => {
      var _a2, _b2, _c2;
      if (useOneTap)
        (_c2 = (_b2 = (_a2 = window === null || window === void 0 ? void 0 : window.google) === null || _a2 === void 0 ? void 0 : _a2.accounts) === null || _b2 === void 0 ? void 0 : _b2.id) === null || _c2 === void 0 ? void 0 : _c2.cancel();
    };
  }, [
    clientId,
    scriptLoadedSuccessfully,
    useOneTap,
    type,
    theme,
    size,
    text,
    shape,
    logo_alignment,
    width,
    locale
  ]);
  return React.createElement("div", { ...containerProps, ref: btnContainerRef, style: { height: containerHeightMap[size], ...containerProps === null || containerProps === void 0 ? void 0 : containerProps.style } });
}
const content = "_content_ud0i4_1";
const formGroup = "_formGroup_ud0i4_22";
const errorText = "_errorText_ud0i4_28";
const successText = "_successText_ud0i4_32";
const signUpButton = "_signUpButton_ud0i4_44";
const styles = {
  content,
  formGroup,
  errorText,
  successText,
  signUpButton
};
function SignUp() {
  const { t } = useTranslation("manage");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isSuccess, setSuccess] = reactExports.useState(false);
  const [email, setEmail] = reactExports.useState("");
  const [emailError, setEmailError] = reactExports.useState("");
  const [duplicateEmailError, setDuplicateEmailError] = reactExports.useState("");
  const [firstName, setFirstName] = reactExports.useState("");
  const [firstNameError, setFirstNameError] = reactExports.useState("");
  const [lastName, setLastName] = reactExports.useState("");
  const [lastNameError, setLastNameError] = reactExports.useState("");
  const [password, setPassword] = reactExports.useState("");
  const [passError, setPassError] = reactExports.useState("");
  const [showPassword, setShowPassword] = reactExports.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const onPasswordChanged = (e) => {
    setPassword(e.target.value);
    setPassError("");
  };
  const onEmailChanged = (e) => {
    setEmail(e.target.value);
    setEmailError("");
  };
  const onFirstNameChanged = (e) => {
    setFirstName(e.target.value);
    setFirstNameError("");
  };
  const onLastChanged = (e) => {
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
  const onGoogleAuthSuccess = (credentialResponse) => {
    dispatch(setLoading(true));
    AuthService.googleSignIn(credentialResponse).then((data) => {
      const { from } = location.state || { from: { pathname: "/" } };
      navigate(from);
    }).catch((e) => {
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
    AuthService.signup({ email, password, firstName, lastName }).then(() => {
      setSuccess(true);
    }).catch((e) => {
      onApiError({
        error: e,
        globalErrorHandler: (processedError) => {
          dispatch(onError(processedError));
        },
        locallErrorHandler: (processedError) => {
          if (processedError.name == PROCESSED_ERRORS.DUPLICATE_EMAIL.name) {
            setDuplicateEmailError(
              t("processed_errors.".concat(processedError.name))
            );
          }
        }
      });
    }).finally(() => {
      dispatch(setLoading(false));
    });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { className: styles.wrapper, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { className: styles.content, children: [
    isSuccess ? /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { className: styles.successText, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CheckCircle, { sx: { fontSize: "60px" } }),
      t("sign_up.success")
    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { className: styles.form, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(FormGroup, { className: styles.formGroup, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          LoginInput,
          {
            error: firstNameError.length > 0,
            required: true,
            value: firstName,
            id: "firstName",
            label: t("label.first_name"),
            name: "firstName",
            onChange: onFirstNameChanged,
            variant: "standard"
          }
        ),
        firstNameError && /* @__PURE__ */ jsxRuntimeExports.jsx(FormHelperText, { className: styles.errorText, children: firstNameError }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          LoginInput,
          {
            error: (lastNameError == null ? void 0 : lastNameError.length) > 0,
            id: "lastName",
            value: lastName,
            helperText: lastNameError,
            required: true,
            onChange: onLastChanged,
            label: t("label.last_name"),
            name: "lastName",
            variant: "standard"
          }
        ),
        lastNameError && /* @__PURE__ */ jsxRuntimeExports.jsx(FormHelperText, { className: styles.errorText, children: lastNameError }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          LoginInput,
          {
            required: true,
            value: email,
            error: (emailError == null ? void 0 : emailError.length) > 0 || duplicateEmailError.length > 0,
            id: "email",
            onChange: onEmailChanged,
            label: t("label.email"),
            name: "email",
            variant: "standard"
          }
        ),
        emailError || duplicateEmailError && /* @__PURE__ */ jsxRuntimeExports.jsx(FormHelperText, { className: styles.errorText, children: emailError || duplicateEmailError }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          FormControl,
          {
            required: true,
            variant: "standard",
            sx: { mt: "10px" },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                LoginInput,
                {
                  label: t("label.password"),
                  error: (passError == null ? void 0 : passError.length) > 0,
                  required: true,
                  value: password,
                  onChange: onPasswordChanged,
                  name: "password",
                  variant: "standard",
                  id: "standard-adornment-password",
                  type: showPassword ? "text" : "password",
                  icon: showPassword ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                    LockOpen,
                    {
                      onClick: handleClickShowPassword,
                      sx: { color: "#16205b", cursor: "pointer" }
                    }
                  ) : /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Lock,
                    {
                      onClick: handleClickShowPassword,
                      sx: { color: "#16205b", cursor: "pointer" }
                    }
                  )
                }
              ),
              passError && /* @__PURE__ */ jsxRuntimeExports.jsx(FormHelperText, { className: styles.errorText, children: passError })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(FormHelperText, { sx: { fontSize: "10px" }, children: t("sign_up.helper_text") })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Button,
        {
          fullWidth: true,
          onClick: onSubmit,
          className: styles.signUpButton,
          sx: { mt: "25px" },
          children: t("sign_up.sign_up")
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { width: "200px", margin: "auto" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      GoogleOAuthProvider,
      {
        clientId: "464768435207-uhlij21kj0kn0tetqqj4292iedfeiogf.apps.googleusercontent.com",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          GoogleLogin,
          {
            onSuccess: onGoogleAuthSuccess,
            onError: () => {
              console.log("Login Failed");
            }
          }
        )
      }
    ) })
  ] }) });
}
function Login() {
  const { t } = useTranslation("manage");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location2 = useLocation();
  const [password, setPassword] = reactExports.useState("");
  const [passError, setPassError] = reactExports.useState("");
  const [email, setEmail] = reactExports.useState("");
  const [emailError, setEmailError] = reactExports.useState("");
  const [value, setValue] = reactExports.useState(0);
  const loginPath = "/login";
  const signupPath = "/signup";
  reactExports.useEffect(() => {
    const path = location2.pathname;
    if (path === signupPath) {
      setValue(1);
    } else if (path === loginPath) {
      setValue(0);
    }
  }, [location2]);
  const handleChangeTabs = (event, newValue) => {
    setValue(newValue);
    if (newValue === 0) {
      navigate(loginPath);
    } else if (newValue === 1) {
      navigate(signupPath);
    }
  };
  const [showPassword, setShowPassword] = reactExports.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
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
  const onPasswordChanged = (e) => {
    setPassword(e.target.value);
    setPassError("");
  };
  const onEmailChanged = (e) => {
    setEmail(e.target.value);
    setEmailError("");
  };
  reactExports.useEffect(() => {
    const input = document.querySelector('input[name="email"]');
    if (input && input.value !== email) {
      setEmail(input.value);
    }
  }, [email]);
  const handleError = (e) => {
    onApiError({
      error: e,
      globalErrorHandler: (processedError) => {
        dispatch(onError$1(processedError));
      },
      locallErrorHandler: (processedError) => {
        if (processedError.name == PROCESSED_ERRORS.WRONG_CREDENTIALS.name) {
          setEmailError(t("processed_errors.".concat(processedError.name)));
          setPassError(t("processed_errors.".concat(processedError.name)));
        }
      }
    });
  };
  const onSubmit = () => {
    if (!validate()) {
      return;
    }
    dispatch(setLoading(true));
    AuthService.login(email, password).then((data) => {
      const { from } = location2.state || { from: { pathname: "/" } };
      navigate(from);
    }).catch((e) => {
      handleError(e);
    }).finally(() => {
      dispatch(setLoading(false));
    });
  };
  const onGoogleAuthSuccess = (credentialResponse) => {
    dispatch(setLoading(true));
    AuthService.googleSignIn(credentialResponse).then((data) => {
      const { from } = location2.state || { from: { pathname: "/" } };
      navigate(from);
    }).catch((e) => {
      handleError(e);
    }).finally(() => {
      dispatch(setLoading(false));
    });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Box,
    {
      sx: {
        display: "flex",
        justifyContent: "center",
        alignItems: "start",
        height: "calc(100vh - 80px)",
        overflow: "auto",
        width: "100vw",
        backgroundColor: "#f7f8fc"
      },
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { sx: { width: "100%", maxWidth: 700, marginTop: 5 }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { sx: { borderBottom: 1, borderColor: "divider" }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Tabs,
          {
            value,
            onChange: handleChangeTabs,
            "aria-label": "basic tabs example",
            variant: "fullWidth",
            classes: { indicator: styles$1.tabIndicator },
            TabIndicatorProps: { style: { display: "none" } },
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
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Tab,
                {
                  classes: { root: styles$1.tabRoot, selected: styles$1.tabSelected },
                  label: t("login.title")
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Tab,
                {
                  className: value === 0 ? styles$1.selectedTab : styles$1.tab,
                  label: t("sign_up.title")
                }
              )
            ]
          }
        ) }),
        value === 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { className: styles$1.content, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              LoginInput,
              {
                label: "Email",
                onChange: onEmailChanged,
                error: (emailError == null ? void 0 : emailError.length) > 0,
                value: email,
                name: "email",
                required: true,
                variant: "standard",
                icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Person, { sx: { color: "#16205b" } })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              FormControl,
              {
                required: true,
                variant: "standard",
                sx: { mt: "10px" },
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  LoginInput,
                  {
                    label: t("label.password"),
                    onChange: onPasswordChanged,
                    error: (passError == null ? void 0 : passError.length) > 0,
                    value: password,
                    type: showPassword ? "text" : "password",
                    name: "password",
                    required: true,
                    variant: "standard",
                    icon: showPassword ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                      LockOpen,
                      {
                        onClick: handleClickShowPassword,
                        sx: { color: "#16205b", cursor: "pointer" }
                      }
                    ) : /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Lock,
                      {
                        onClick: handleClickShowPassword,
                        sx: { color: "#16205b", cursor: "pointer" }
                      }
                    )
                  }
                )
              }
            ),
            (emailError || passError) && /* @__PURE__ */ jsxRuntimeExports.jsx(FormHelperText, { className: styles$1.errorText, children: emailError || passError }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Stack,
              {
                justifyContent: "flex-end",
                flexDirection: "row",
                className: styles$1.links,
                alignItems: "center",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Link,
                  {
                    sx: {
                      color: "grey",
                      cursor: "pointer",
                      textDecoration: "none"
                    },
                    onClick: () => {
                      navigate("/forgot-password");
                    },
                    children: t("login.forgot_password")
                  }
                )
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                fullWidth: true,
                onClick: onSubmit,
                className: styles$1.loginButton,
                sx: { mt: "25px" },
                children: t("login.login")
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { width: "200px", margin: "auto" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            GoogleOAuthProvider,
            {
              clientId: "464768435207-uhlij21kj0kn0tetqqj4292iedfeiogf.apps.googleusercontent.com",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                GoogleLogin,
                {
                  onSuccess: onGoogleAuthSuccess,
                  onError: () => {
                    console.log("Login Failed");
                  }
                }
              )
            }
          ) })
        ] }),
        value === 1 && /* @__PURE__ */ jsxRuntimeExports.jsx(SignUp, {})
      ] })
    }
  );
}
export {
  Login as default
};
//# sourceMappingURL=index-1SjB6EW-.js.map
