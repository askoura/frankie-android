import { u as useTranslation, r as reactExports, i as useDispatch, j as jsxRuntimeExports, B as Box, T as Typography, F as FormGroup, b as TextField, g as FormHelperText, h as Button, s as setLoading, A as AuthService, o as onApiError, l as onError } from "./index-4408a88f.js";
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
  const { t } = useTranslation("manage");
  const [isSuccess, setSuccess] = reactExports.useState(false);
  const [email, setEmail] = reactExports.useState("");
  const [emailError, setEmailError] = reactExports.useState("");
  const dispatch = useDispatch();
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
    dispatch(setLoading(true));
    AuthService.forgotPassword(email).then((data) => {
      setSuccess(true);
    }).catch((e) => {
      setFetchingSurveys(false);
      onApiError({
        error: e,
        globalErrorHandler: (processedError) => {
          dispatch(onError(processedError));
        }
      });
    }).finally(() => {
      dispatch(setLoading(true));
    });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { className: styles.wrapper, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { className: styles.content, children: [
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
  ] }) });
}
export {
  ForgotPassword as default
};
//# sourceMappingURL=index-d6d18ca3.js.map
