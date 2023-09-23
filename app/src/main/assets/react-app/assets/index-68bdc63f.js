import { u as useTranslation, k as useSearchParams, a as useNavigate, r as reactExports, j as jsxRuntimeExports, B as Box, T as Typography, F as FormGroup, c as FormControl, I as InputLabel, d as Input, e as InputAdornment, f as IconButton, P as PROCESSED_ERRORS, g as FormHelperText, h as Button, A as AuthService, p as processError } from "./index-64b69271.js";
import { A as AuthWrap } from "./index-3a2b1ffe.js";
import { V as VisibilityOff, a as Visibility } from "./VisibilityOff-076f6513.js";
const wrapper = "_wrapper_ju5e1_1";
const content = "_content_ju5e1_11";
const form = "_form_ju5e1_18";
const errorText = "_errorText_ju5e1_23";
const styles = {
  wrapper,
  content,
  form,
  errorText
};
function ResetPassword() {
  const { t } = useTranslation("manage");
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token");
  const navigate = useNavigate();
  const [loading, setLoading] = reactExports.useState(false);
  const [processedError, setProcessedError] = reactExports.useState("");
  const [showError, setShowError] = reactExports.useState(false);
  const [password, setPassword] = reactExports.useState("");
  const [passError, setPassError] = reactExports.useState("");
  const [confrimPassword, setConfrimPassword] = reactExports.useState("");
  const [confrimPasswordError, setConfrimPasswordError] = reactExports.useState("");
  const [showPassword, setShowPassword] = reactExports.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
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
  const onPasswordChanged = (e) => {
    setPassword(e.target.value);
    setPassError("");
  };
  const onConfirmPasswordChanges = (e) => {
    setConfrimPassword(e.target.value);
    setConfrimPasswordError("");
  };
  const onSubmit = () => {
    if (!validate()) {
      return;
    }
    setLoading(true);
    AuthService.resetPassword(token, password).then((data) => {
      navigate("/");
    }).catch((e) => {
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
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    AuthWrap,
    {
      loading,
      showError,
      processedError,
      handleClose: () => setShowError(false),
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { className: styles.wrapper, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { className: styles.content, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "h4", children: t("reset_password.title") }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { className: styles.form, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(FormGroup, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              FormControl,
              {
                required: true,
                variant: "standard",
                sx: { mt: "10px" },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(InputLabel, { htmlFor: "standard-adornment-password", children: t("label.new_password") }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Input,
                    {
                      error: passError.length > 0,
                      onChange: onPasswordChanged,
                      name: "password",
                      value: password,
                      id: "standard-adornment-password",
                      type: showPassword ? "text" : "password",
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
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              FormControl,
              {
                required: true,
                variant: "standard",
                sx: { mt: "10px" },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(InputLabel, { htmlFor: "standard-adornment-password", children: t("label.confirm_new_password") }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Input,
                    {
                      error: confrimPasswordError.length > 0,
                      onChange: onConfirmPasswordChanges,
                      name: "cpassword",
                      value: confrimPassword,
                      id: "standard-adornment-password",
                      type: showPassword ? "text" : "password",
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
                ]
              }
            ),
            (processedError == PROCESSED_ERRORS.WRONG_RESET_TOKEN || processedError == PROCESSED_ERRORS.EXPIRED_RESET_TOKEN) && /* @__PURE__ */ jsxRuntimeExports.jsx(FormHelperText, { className: styles.errorText, children: t(`processed_errors.${processedError}`) }),
            (passError || confrimPasswordError) && /* @__PURE__ */ jsxRuntimeExports.jsx(FormHelperText, { className: styles.errorText, children: passError || confrimPasswordError })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: onSubmit, sx: { mt: "40px" }, children: t("reset_password.reset") })
        ] })
      ] }) })
    }
  );
}
export {
  ResetPassword as default
};
//# sourceMappingURL=index-68bdc63f.js.map
