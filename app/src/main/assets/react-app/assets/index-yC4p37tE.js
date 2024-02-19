import { c as createSvgIcon, j as jsxRuntimeExports, x as useTranslation, aq as useSearchParams, w as useNavigate, z as useDispatch, r as reactExports, B as Box, a0 as Typography, ag as FormControl, ah as InputLabel, bq as Input, I as IconButton, a1 as Button, D as setLoading, a4 as PROCESSED_ERRORS } from "./index-RBnW6nvi.js";
import { V as Visibility, A as AuthService } from "./Web-KOHZ4PI_.js";
import { F as FormGroup } from "./FormGroup-A52SYRjs.js";
import { I as InputAdornment } from "./DatePicker-AVKIEE0b.js";
import { F as FormHelperText } from "./TextField-lJ98NZsg.js";
import "./FormControlLabel-B-3jdeza.js";
import "./Checkbox-HSUkhdvK.js";
import "./SwitchBase-naWSSwc-.js";
import "./Grid-q5yBxj4Y.js";
const VisibilityOff = createSvgIcon(/* @__PURE__ */ jsxRuntimeExports.jsx("path", {
  d: "M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78 3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z"
}), "VisibilityOff");
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
  const dispatch = useDispatch();
  const [tokenError, setTokenError] = reactExports.useState("");
  const [password, setPassword] = reactExports.useState("");
  const [passError, setPassError] = reactExports.useState("");
  const [confrimPassword, setConfrimPassword] = reactExports.useState("");
  const [confrimPasswordError, setConfrimPasswordError] = reactExports.useState("");
  const [showPassword, setShowPassword] = reactExports.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const validate = () => {
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
    dispatch(setLoading(true));
    AuthService.resetPassword(token, password).then((data) => {
      navigate("/");
    }).catch((e) => {
      onApiError({
        error: e,
        globalErrorHandler: (processedError) => {
          dispatch(onError(processedError));
        },
        locallErrorHandler: (processedError) => {
          if (processedError.name == PROCESSED_ERRORS.WRONG_RESET_TOKEN.name || processedError.name == PROCESSED_ERRORS.EXPIRED_RESET_TOKEN.name) {
            setTokenError(t("processed_errors.".concat(processedError.name)));
          }
        }
      });
    }).finally(() => {
      dispatch(setLoading(false));
    });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { className: styles.wrapper, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { className: styles.content, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "h4", children: t("reset_password.title") }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { className: styles.form, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(FormGroup, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(FormControl, { required: true, variant: "standard", sx: { mt: "10px" }, children: [
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
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(FormControl, { required: true, variant: "standard", sx: { mt: "10px" }, children: [
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
        ] }),
        tokenError && /* @__PURE__ */ jsxRuntimeExports.jsx(FormHelperText, { className: styles.errorText, children: tokenError }),
        (passError || confrimPasswordError) && /* @__PURE__ */ jsxRuntimeExports.jsx(FormHelperText, { className: styles.errorText, children: passError || confrimPasswordError })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: onSubmit, sx: { mt: "40px" }, children: t("reset_password.reset") })
    ] })
  ] }) });
}
export {
  ResetPassword as default
};
//# sourceMappingURL=index-yC4p37tE.js.map
