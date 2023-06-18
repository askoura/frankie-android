import { r as reactExports, j as jsxRuntimeExports, P as PROCESSED_ERRORS, p as processError } from "./index-bbbd1d1b.js";
import { A as AuthService } from "./AuthService-835a59a6.js";
import { A as AuthWrap } from "./index-aa1fb3fd.js";
import { u as useTranslation, B as Box, T as Typography, I as Input, a as IconButton, b as Button } from "./common-cf84468d.js";
import { F as FormGroup } from "./FormGroup-def0fd07.js";
import { T as TextField } from "./TextField-3f14dd26.js";
import { F as FormControl, I as InputLabel, a as FormHelperText } from "./InputLabel-3fdae097.js";
import { I as InputAdornment } from "./InputAdornment-503dc53e.js";
import { V as VisibilityOff, a as Visibility } from "./VisibilityOff-3cad5cf7.js";
import "./index-c8668cbd.js";
const wrapper = "_wrapper_13l38_1";
const content = "_content_13l38_11";
const form = "_form_13l38_18";
const formGroup = "_formGroup_13l38_23";
const errorText = "_errorText_13l38_29";
const successText = "_successText_13l38_33";
const styles = {
  wrapper,
  content,
  form,
  formGroup,
  errorText,
  successText
};
function SignUp() {
  const { t } = useTranslation("manage");
  const [loading, setLoading] = reactExports.useState(false);
  const [isSuccess, setSuccess] = reactExports.useState(false);
  const [processedError, setProcessedError] = reactExports.useState("");
  const [showError, setShowError] = reactExports.useState(false);
  const [email, setEmail] = reactExports.useState("");
  const [emailError, setEmailError] = reactExports.useState("");
  const [firstName, setFirstName] = reactExports.useState("");
  const [firstNameError, setFirstNameError] = reactExports.useState("");
  const [lastName, setLastName] = reactExports.useState("");
  const [lastNameError, setLastNameError] = reactExports.useState("");
  const [password, setPassword] = reactExports.useState("");
  const [passError, setPassError] = reactExports.useState("");
  const [domain, setDomain] = reactExports.useState("");
  const [domainError, setDomainError] = reactExports.useState("");
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
  const onDomainChanged = (e) => {
    setDomain(e.target.value);
    setDomainError("");
  };
  const validate = () => {
    setEmailError("");
    setPassError("");
    setDomainError("");
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
    if (domain.length == 0) {
      setDomainError(t("domain_required"));
      return false;
    }
    return true;
  };
  const onSubmit = () => {
    if (!validate()) {
      return;
    }
    setLoading(true);
    AuthService.signup({ email, password, domain, firstName, lastName }).then(() => {
      setSuccess(true);
    }).catch((e) => {
      const processed = processError(e);
      switch (processed) {
        case PROCESSED_ERRORS.NETWORK_ERR:
        case PROCESSED_ERRORS.BACKEND_DOWN:
          setShowError(true);
          setProcessedError(processed);
          break;
        case PROCESSED_ERRORS.DUPLICATE_EMAIL:
        case PROCESSED_ERRORS.DUPLICATE_DOMAIN:
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
        /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "h4", children: t("sign_up.title") }),
        isSuccess ? /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { className: styles.successText, children: t("sign_up.success") }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { className: styles.form, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(FormGroup, { className: styles.formGroup, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              TextField,
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
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              TextField,
              {
                error: (lastNameError == null ? void 0 : lastNameError.length) > 0,
                id: "lastName",
                value: lastName,
                required: true,
                onChange: onLastChanged,
                label: t("label.last_name"),
                name: "lastName",
                variant: "standard"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              TextField,
              {
                required: true,
                value: email,
                error: (emailError == null ? void 0 : emailError.length) > 0 || processedError == PROCESSED_ERRORS.DUPLICATE_EMAIL,
                id: "email",
                onChange: onEmailChanged,
                label: t("label.email"),
                name: "email",
                variant: "standard"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(FormControl, { required: true, variant: "standard", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(InputLabel, { htmlFor: "standard-adornment-password", children: t("label.password") }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  error: (passError == null ? void 0 : passError.length) > 0,
                  required: true,
                  value: password,
                  onChange: onPasswordChanged,
                  name: "password",
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
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              TextField,
              {
                error: (domainError == null ? void 0 : domainError.length) > 0 || processedError == PROCESSED_ERRORS.DUPLICATE_DOMAIN,
                id: "domain",
                value: domain,
                onChange: onDomainChanged,
                required: true,
                label: t("label.server_name"),
                name: "domain",
                variant: "standard"
              }
            ),
            (processedError == PROCESSED_ERRORS.DUPLICATE_DOMAIN || processedError == PROCESSED_ERRORS.INVALID_DOMAIN || processedError == PROCESSED_ERRORS.DUPLICATE_EMAIL) && /* @__PURE__ */ jsxRuntimeExports.jsx(FormHelperText, { className: styles.errorText, children: t(`processed_errors.${processedError}`) }),
            (firstNameError || lastNameError || emailError || passError || domainError) && /* @__PURE__ */ jsxRuntimeExports.jsx(FormHelperText, { className: styles.errorText, children: firstNameError || lastNameError || emailError || passError || domainError }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(FormHelperText, { sx: { fontSize: "10px" }, children: t("sign_up.helper_text") })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: onSubmit, sx: { mt: "40px" }, children: t("sign_up.sign_up") })
        ] })
      ] }) })
    }
  );
}
export {
  SignUp as default
};
