import { u as useTranslation, a as useNavigate, w as useLocation, r as reactExports, j as jsxRuntimeExports, B as Box, T as Typography, b as TextField, c as FormControl, I as InputLabel, d as Input, e as InputAdornment, f as IconButton, g as FormHelperText, S as Stack, x as Link, h as Button, A as AuthService, p as processError, P as PROCESSED_ERRORS } from "./index-e5b229dc.js";
import { A as AuthWrap } from "./index-9938560d.js";
import { G as GoogleOAuthProvider, a as GoogleLogin } from "./index.esm-0da8a6fc.js";
import { V as VisibilityOff, a as Visibility } from "./VisibilityOff-44c9256b.js";
const wrapper = "_wrapper_9fsfj_1";
const content = "_content_9fsfj_11";
const form = "_form_9fsfj_18";
const errorText = "_errorText_9fsfj_23";
const links = "_links_9fsfj_27";
const link = "_link_9fsfj_27";
const styles = {
  wrapper,
  content,
  form,
  errorText,
  links,
  link
};
function Login() {
  const { t, i18n } = useTranslation("manage");
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
  const onError = (e) => {
    const processed = processError(e);
    switch (processed) {
      case PROCESSED_ERRORS.NETWORK_ERR:
      case PROCESSED_ERRORS.BACKEND_DOWN:
      case PROCESSED_ERRORS.GOOGLE_AUTH_ERROR:
        setShowError(true);
        setProcessedError(processed);
        break;
      case PROCESSED_ERRORS.WRONG_CREDENTIALS:
        setEmailError(t(`processed_errors.${processed}`));
        break;
    }
  };
  const onSubmit = () => {
    if (!validate()) {
      return;
    }
    setLoading(true);
    AuthService.login(email, password).then((data) => {
      console.log(data);
      console.log("navigate");
      const { from } = location.state || { from: { pathname: "/" } };
      console.log(from);
      navigate(from);
    }).catch((e) => {
      onError(e);
    }).finally(() => {
      setLoading(false);
    });
  };
  const onGoogleAuthSuccess = (credentialResponse) => {
    setLoading(true);
    AuthService.googleSignIn(credentialResponse).then((data) => {
      console.log(data);
      const { from } = location.state || { from: { pathname: "/" } };
      navigate(from);
    }).catch((e) => {
      onError(e);
    }).finally(() => {
      setLoading(false);
    });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    AuthWrap,
    {
      loading,
      showError,
      processedError,
      handleClose: () => setShowError(false),
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { className: styles.wrapper, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { className: styles.content, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "h2", children: t("login.title") }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { className: styles.form, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            TextField,
            {
              onChange: onEmailChanged,
              error: (emailError == null ? void 0 : emailError.length) > 0,
              value: email,
              id: "email",
              label: t("label.email"),
              name: "email",
              required: true,
              variant: "standard"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(FormControl, { required: true, variant: "standard", sx: { mt: "10px" }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(InputLabel, { htmlFor: "standard-adornment-password", children: t("label.password") }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                error: (passError == null ? void 0 : passError.length) > 0,
                name: "password",
                value: password,
                id: "standard-adornment-password",
                type: showPassword ? "text" : "password",
                onChange: onPasswordChanged,
                endAdornment: /* @__PURE__ */ jsxRuntimeExports.jsx(InputAdornment, { position: "end", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  IconButton,
                  {
                    "aria-label": "toggle password visibility",
                    onClick: handleClickShowPassword,
                    children: showPassword ? /* @__PURE__ */ jsxRuntimeExports.jsx(VisibilityOff, {}) : /* @__PURE__ */ jsxRuntimeExports.jsx(Visibility, {})
                  }
                ) })
              }
            )
          ] }),
          (emailError || passError) && /* @__PURE__ */ jsxRuntimeExports.jsx(FormHelperText, { className: styles.errorText, children: emailError || passError }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Stack,
            {
              justifyContent: "space-between",
              flexDirection: "row",
              className: styles.links,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Link,
                  {
                    className: styles.link,
                    onClick: () => {
                      navigate("/forgot-password");
                    },
                    children: t("login.forgot_password")
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Link,
                  {
                    className: styles.link,
                    onClick: () => {
                      navigate("/signup");
                    },
                    children: t("login.sign_up")
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: onSubmit, sx: { mt: "40px" }, children: t("login.submit") })
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
      ] }) })
    }
  );
}
export {
  Login as default
};
//# sourceMappingURL=index-b0982d37.js.map
