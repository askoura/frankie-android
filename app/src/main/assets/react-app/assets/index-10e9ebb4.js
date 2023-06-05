import { r as reactExports, j as jsxRuntimeExports, p as processError, P as PROCESSED_ERRORS } from "./index-71e436dd.js";
import { A as AuthService } from "./AuthService-fbd64962.js";
import { A as AuthWrap } from "./index-1dc7fd90.js";
import { u as useTranslation, B as Box, T as Typography, b as Button } from "./common-acee48c7.js";
import { F as FormGroup } from "./FormGroup-4b2df1a6.js";
import { T as TextField } from "./TextField-e86274a8.js";
import { a as FormHelperText } from "./InputLabel-7f86409c.js";
import "./index-3d965a9d.js";
const wrapper = "_wrapper_1hgy5_1";
const content = "_content_1hgy5_11";
const form = "_form_1hgy5_18";
const errorText = "_errorText_1hgy5_23";
const successText = "_successText_1hgy5_27";
const styles = {
  wrapper,
  content,
  form,
  errorText,
  successText
};
function ForgotPassword() {
  const { t, i18n } = useTranslation("manage");
  const [loading, setLoading] = reactExports.useState(false);
  const [isSuccess, setSuccess] = reactExports.useState(false);
  const [email, setEmail] = reactExports.useState("");
  const [emailError, setEmailError] = reactExports.useState("");
  const [processedError, setProcessedError] = reactExports.useState("");
  const [showError, setShowError] = reactExports.useState(false);
  const onEmailChanged = (e) => {
    setEmail(e.target.value);
    setEmailError("");
  };
  const onSubmit = () => {
    setEmailError("");
    if (email.length == 0) {
      setEmailError(t("email_required"));
      return false;
    }
    setLoading(true);
    AuthService.forgotPassword(email).then((data) => {
      setSuccess(true);
    }).catch((e) => {
      const processed = processError(e);
      switch (processed) {
        case PROCESSED_ERRORS.NETWORK_ERR:
        case PROCESSED_ERRORS.BACKEND_DOWN:
          setShowError(true);
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
        /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "h4", children: t("forgot_password.title") }),
        isSuccess ? /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { className: styles.successText, children: t("forgot_password.success") }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { className: styles.form, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(FormGroup, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              TextField,
              {
                error: emailError.length > 0,
                id: "email",
                value: email,
                required: true,
                onChange: onEmailChanged,
                label: t("label.email"),
                name: "email",
                variant: "standard"
              }
            ),
            emailError && /* @__PURE__ */ jsxRuntimeExports.jsx(FormHelperText, { className: styles.errorText, children: emailError }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(FormHelperText, { children: t("forgot_password.helper_text") })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: onSubmit, sx: { mt: "40px" }, children: t("forgot_password.send") })
        ] })
      ] }) })
    }
  );
}
export {
  ForgotPassword as default
};
