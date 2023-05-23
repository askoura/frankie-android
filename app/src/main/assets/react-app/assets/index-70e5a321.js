import { u as useNavigate, D as useLocation, r as reactExports, j as jsxRuntimeExports, E as PROTOCOL, F as FRONT_END_HOST, p as processError, P as PROCESSED_ERRORS } from "./index-3f835c40.js";
import { A as AuthService } from "./AuthService-98bbdeec.js";
import { A as AuthWrap } from "./index-afaa0475.js";
import { h as hostnameSubdomain, u as urlWithSubdomain } from "./common-1054274f.js";
import { u as useTranslation, B as Box, T as Typography, I as Input, a as IconButton, b as Button } from "./common-7a9afb23.js";
import { T as TextField } from "./TextField-ff0baa95.js";
import { F as FormControl, I as InputLabel, a as FormHelperText } from "./InputLabel-5d406458.js";
import { I as InputAdornment } from "./InputAdornment-c61ba54a.js";
import { V as VisibilityOff, a as Visibility } from "./VisibilityOff-aa306107.js";
import { S as Stack } from "./Stack-adc6d536.js";
import { L as Link } from "./Link-edcc198f.js";
import "./index-f65025e2.js";
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
  const onSubmit = () => {
    if (!validate()) {
      return;
    }
    setLoading(true);
    AuthService.login(email, password).then((data) => {
      var _a, _b, _c, _d, _e;
      const subdomain = hostnameSubdomain();
      if (subdomain === data.subdomain) {
        const { from } = location.state || { from: { pathname: "/" } };
        navigate(from);
      } else {
        if ((_a = location.state) == null ? void 0 : _a.from) {
          const newUrl = PROTOCOL + "://" + data.subdomain + "." + FRONT_END_HOST + ((_c = (_b = location.state) == null ? void 0 : _b.from) == null ? void 0 : _c.pathname) + ((_e = (_d = location.state) == null ? void 0 : _d.from) == null ? void 0 : _e.search) || "";
          window.location.replace(newUrl);
        } else {
          window.location.replace(urlWithSubdomain(data.subdomain));
        }
      }
    }).catch((e) => {
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
        ] })
      ] }) })
    }
  );
}
export {
  Login as default
};
