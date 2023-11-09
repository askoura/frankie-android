import { u as useTranslation, a as useNavigate, r as reactExports, j as jsxRuntimeExports, B as Box, T as Typography, F as FormGroup, b as TextField, c as FormControl, I as InputLabel, d as Input, e as InputAdornment, f as IconButton, g as FormHelperText, h as Button, s as setLoading, A as AuthService, o as onApiError, P as PROCESSED_ERRORS } from "./index-4408a88f.js";
import { G as GoogleOAuthProvider, a as GoogleLogin } from "./index.esm-f1edf67b.js";
import { V as VisibilityOff, a as Visibility } from "./VisibilityOff-443b400e.js";
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
            setDuplicateEmailError(t(`processed_errors.${processedError.name}`));
          }
        }
      });
    }).finally(() => {
      dispatch(setLoading(false));
    });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { className: styles.wrapper, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { className: styles.content, children: [
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
            error: (emailError == null ? void 0 : emailError.length) > 0 || duplicateEmailError.length > 0,
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
        duplicateEmailError && /* @__PURE__ */ jsxRuntimeExports.jsx(FormHelperText, { className: styles.errorText, children: t(duplicateEmailError) }),
        (firstNameError || lastNameError || emailError || passError) && /* @__PURE__ */ jsxRuntimeExports.jsx(FormHelperText, { className: styles.errorText, children: firstNameError || lastNameError || emailError || passError }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(FormHelperText, { sx: { fontSize: "10px" }, children: t("sign_up.helper_text") })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: onSubmit, sx: { mt: "40px" }, children: t("sign_up.sign_up") })
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
export {
  SignUp as default
};
//# sourceMappingURL=index-ac337b8e.js.map
