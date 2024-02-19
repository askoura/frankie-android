import { x as useTranslation, r as reactExports, z as useDispatch, j as jsxRuntimeExports, B as Box, a0 as Typography, a1 as Button, D as setLoading, a3 as onApiError, a7 as onError } from "./index-RBnW6nvi.js";
import { A as AuthService } from "./Web-KOHZ4PI_.js";
import { C as CheckCircle, L as LoginInput } from "./LoginInput-G0ViwFtG.js";
import { F as FormGroup } from "./FormGroup-A52SYRjs.js";
import { F as FormHelperText } from "./TextField-lJ98NZsg.js";
import "./DatePicker-AVKIEE0b.js";
import "./Grid-q5yBxj4Y.js";
import "./FormControlLabel-B-3jdeza.js";
import "./Checkbox-HSUkhdvK.js";
import "./SwitchBase-naWSSwc-.js";
const wrapper = "_wrapper_142ke_1";
const content = "_content_142ke_11";
const errorText = "_errorText_142ke_32";
const successText = "_successText_142ke_36";
const sendButton = "_sendButton_142ke_47";
const styles = {
  wrapper,
  content,
  errorText,
  successText,
  sendButton
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
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { sx: { width: "100%", maxWidth: 700, marginTop: 5 }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { className: styles.content, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "h4", children: t("forgot_password.title") }),
        isSuccess ? /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { className: styles.successText, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CheckCircle, { sx: { fontSize: "60px" } }),
          t("forgot_password.success")
        ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(FormGroup, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              LoginInput,
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
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              fullWidth: true,
              onClick: onSubmit,
              className: styles.sendButton,
              sx: { mt: "25px" },
              children: t("forgot_password.send")
            }
          )
        ] })
      ] }) })
    }
  );
}
export {
  ForgotPassword as default
};
//# sourceMappingURL=index-x_tI_FmS.js.map
