import { c as createSvgIcon, j as jsxRuntimeExports, w as useNavigate, z as useDispatch, T as TokenService, r as reactExports, x as useTranslation, B as Box, a0 as Typography, I as IconButton, a1 as Button, D as setLoading, a3 as onApiError, a7 as onError, a4 as PROCESSED_ERRORS } from "./index-RBnW6nvi.js";
import { U as UserService } from "./UserService-armPMgIn.js";
import { A as AuthService, r as routes } from "./Web-KOHZ4PI_.js";
import { S as Stack } from "./FormControlLabel-B-3jdeza.js";
import { F as FormGroup } from "./FormGroup-A52SYRjs.js";
import { T as TextField, F as FormHelperText } from "./TextField-lJ98NZsg.js";
import { I as InputAdornment } from "./DatePicker-AVKIEE0b.js";
import { L as LockOpen, a as Lock } from "./LockOpen-vv5QwsHD.js";
import "./Checkbox-HSUkhdvK.js";
import "./SwitchBase-naWSSwc-.js";
import "./Grid-q5yBxj4Y.js";
const ModeComment = createSvgIcon(/* @__PURE__ */ jsxRuntimeExports.jsx("path", {
  d: "M21.99 4c0-1.1-.89-2-1.99-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4-.01-18z"
}), "ModeComment");
const mainContainer = "_mainContainer_mkyx6_1";
const flexContainer = "_flexContainer_mkyx6_10";
const createUserCard = "_createUserCard_mkyx6_14";
const operationsDiv = "_operationsDiv_mkyx6_33";
const formGroup = "_formGroup_mkyx6_39";
const errorText = "_errorText_mkyx6_46";
const hint = "_hint_mkyx6_50";
const cancelButton = "_cancelButton_mkyx6_57";
const saveButton = "_saveButton_mkyx6_65";
const container = "_container_mkyx6_74";
const flexItem = "_flexItem_mkyx6_80";
const flexItemRight = "_flexItemRight_mkyx6_94";
const buttonGroup = "_buttonGroup_mkyx6_98";
const styles = {
  mainContainer,
  flexContainer,
  createUserCard,
  operationsDiv,
  formGroup,
  errorText,
  hint,
  cancelButton,
  saveButton,
  container,
  flexItem,
  flexItemRight,
  buttonGroup
};
function Profile() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userId = TokenService.getUser().id;
  const [user, setUser] = reactExports.useState({});
  const { t } = useTranslation("manage");
  const [email, setEmail] = reactExports.useState("");
  const [emailError, setEmailError] = reactExports.useState("");
  const [firstName, setFirstName] = reactExports.useState("");
  const [firstNameError, setFirstNameError] = reactExports.useState("");
  const [lastName, setLastName] = reactExports.useState("");
  const [lastNameError, setLastNameError] = reactExports.useState("");
  const [currentPassword, setCurrentPassword] = reactExports.useState("");
  const [currentPasswordError, setCurrentPasswordError] = reactExports.useState("");
  const [newPass, setNewPassword] = reactExports.useState("");
  const [passNewError, setNewPassError] = reactExports.useState("");
  const [confrimNewPassword, setConfrimNewPassword] = reactExports.useState("");
  const [confrimNewPasswordError, setConfrimNewPasswordError] = reactExports.useState("");
  const [operation, setOprtation] = reactExports.useState(OPERATION.NONE);
  const [showCurrentPass, setShowCurrentPass] = reactExports.useState(false);
  const [showNewPass, setShowNewPass] = reactExports.useState(false);
  const [showConfirmPass, setShowConfirmPass] = reactExports.useState(false);
  const handleClickShowCurrentPass = () => setShowCurrentPass((show) => !show);
  const handleClickShowNewPass = () => setShowNewPass((show) => !show);
  const handleClickShowConfirmPass = () => setShowConfirmPass((show) => !show);
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
  const onCurrentPasswordChanged = (e) => {
    setCurrentPassword(e.target.value);
    setCurrentPasswordError("");
  };
  const onNewPasswordChanged = (e) => {
    setNewPassword(e.target.value);
    setNewPassError("");
  };
  const onConfirmPasswordChanges = (e) => {
    setConfrimNewPassword(e.target.value);
    setConfrimNewPasswordError("");
  };
  const criticalChange = operation === OPERATION.CHANGE_EMAIL || operation === OPERATION.CHANGE_PASSWORD;
  const validate = () => {
    setEmailError("");
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
    if (criticalChange & !currentPassword) {
      setCurrentPasswordError(t("password_required"));
      return false;
    }
    if (newPass != confrimNewPassword) {
      setConfrimNewPasswordError(t("error.password_should_match"));
      return false;
    }
    return true;
  };
  const logout = () => {
    AuthService.logout().then(() => {
      navigate(routes.login);
    }).catch((e) => {
      navigate(routes.login);
    });
  };
  const onSubmit = () => {
    if (!validate()) {
      return;
    }
    dispatch(setLoading(true));
    const data = {};
    if (user.firstName !== firstName) {
      data.firstName = firstName;
    }
    if (user.lastName !== lastName) {
      data.lastName = lastName;
    }
    if (user.email !== email) {
      data.email = email;
    }
    if (currentPassword !== "") {
      data.password = currentPassword;
    }
    if (newPass !== "") {
      data.newPassword = newPass;
    }
    UserService.updateUserProfile(data).then(() => {
      if (criticalChange) {
        logout();
      }
    }).catch((e) => {
      onApiError({
        error: e,
        globalErrorHandler: (processedError) => {
          dispatch(onError(processedError));
        },
        locallErrorHandler: (processedError) => {
          if (processedError.name == PROCESSED_ERRORS.DUPLICATE_EMAIL.name) {
            setEmailError(t("processed_errors.".concat(processed.name)));
          } else if (processedError.name == WRONG_CREDENTIALS.INVALID_SURVEY_DATES.name) {
            setCurrentPasswordError(t("processed_errors.wrong_password"));
          }
        }
      });
    }).finally(() => {
      dispatch(setLoading(false));
    });
  };
  reactExports.useEffect(() => {
    UserService.getUser({ userId }).then((response) => {
      setUser(response);
      setEmail(response.email);
      setFirstName(response.firstName);
      setLastName(response.lastName);
    });
  }, []);
  const commonInputProps = {
    disableUnderline: true,
    style: {
      marginLeft: ".875rem",
      backgroundColor: "#eff1fc",
      borderRadius: "9999px",
      padding: ".5rem 1.5rem",
      color: "#16205b",
      marginTop: "1.5rem"
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { className: styles.mainContainer, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: styles.createUserCard, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Typography,
      {
        variant: "h5",
        sx: { mb: "25px", fontWeight: "600", color: "#16205b" },
        children: t("profile.title")
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Stack, { flexDirection: "row", gap: 5, alignItems: "center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(FormGroup, { className: styles.formGroup, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: styles.flexContainer, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { sx: { width: "100%" }, children: [
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
              variant: "standard",
              InputProps: commonInputProps,
              InputLabelProps: {
                shrink: true
              }
            }
          ),
          firstNameError && /* @__PURE__ */ jsxRuntimeExports.jsx(FormHelperText, { className: styles.errorText, children: firstNameError })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { sx: { width: "100%" }, children: [
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
              variant: "standard",
              InputProps: commonInputProps,
              InputLabelProps: {
                shrink: true
              }
            }
          ),
          lastNameError && /* @__PURE__ */ jsxRuntimeExports.jsx(FormHelperText, { className: styles.errorText, children: lastNameError })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        TextField,
        {
          disabled: operation != OPERATION.CHANGE_EMAIL,
          required: true,
          value: email,
          error: (emailError == null ? void 0 : emailError.length) > 0,
          id: "email",
          onChange: onEmailChanged,
          label: t("label.email"),
          name: "email",
          variant: "standard",
          InputProps: commonInputProps,
          InputLabelProps: {
            shrink: true,
            htmlFor: "confirm-new-password"
          }
        }
      ),
      emailError && /* @__PURE__ */ jsxRuntimeExports.jsx(FormHelperText, { className: styles.errorText, children: emailError }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { className: styles.operationsDiv, children: [
        operation == OPERATION.CHANGE_PASSWORD && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            TextField,
            {
              required: true,
              variant: "standard",
              label: t("label.new_password"),
              error: passNewError.length > 0,
              onChange: onNewPasswordChanged,
              name: "password",
              value: newPass,
              type: showNewPass ? "text" : "password",
              id: "standard-adornment-password",
              sx: { mt: "10px" },
              InputProps: {
                ...commonInputProps,
                endAdornment: /* @__PURE__ */ jsxRuntimeExports.jsx(InputAdornment, { position: "end", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  IconButton,
                  {
                    "aria-label": "toggle password visibility",
                    onClick: handleClickShowNewPass,
                    children: showNewPass ? /* @__PURE__ */ jsxRuntimeExports.jsx(LockOpen, { sx: { color: "#16205b" } }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Lock, { sx: { color: "#16205b" } })
                  }
                ) })
              },
              InputLabelProps: {
                shrink: true
              }
            }
          ),
          passNewError && /* @__PURE__ */ jsxRuntimeExports.jsx(FormHelperText, { className: styles.errorText, children: passNewError }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            TextField,
            {
              required: true,
              variant: "standard",
              label: t("label.confirm_new_password"),
              error: confrimNewPasswordError.length > 0,
              onChange: onConfirmPasswordChanges,
              name: "cpassword",
              type: showConfirmPass ? "text" : "password",
              value: confrimNewPassword,
              id: "confirm-new-password",
              sx: { mt: "10px" },
              InputProps: {
                ...commonInputProps,
                endAdornment: /* @__PURE__ */ jsxRuntimeExports.jsx(InputAdornment, { position: "end", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  IconButton,
                  {
                    "aria-label": "toggle password visibility",
                    onClick: handleClickShowConfirmPass,
                    children: showConfirmPass ? /* @__PURE__ */ jsxRuntimeExports.jsx(LockOpen, { sx: { color: "#16205b" } }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Lock, { sx: { color: "#16205b" } })
                  }
                ) })
              },
              InputLabelProps: {
                shrink: true,
                htmlFor: "confirm-new-password"
              }
            }
          ),
          confrimNewPasswordError && /* @__PURE__ */ jsxRuntimeExports.jsx(FormHelperText, { className: styles.errorText, children: confrimNewPasswordError })
        ] }),
        criticalChange && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            TextField,
            {
              required: true,
              variant: "standard",
              label: t("label.current_password"),
              error: currentPasswordError.length > 0,
              onChange: onCurrentPasswordChanged,
              name: "password",
              type: showCurrentPass ? "text" : "password",
              value: currentPassword,
              sx: { mt: "10px" },
              InputProps: {
                ...commonInputProps,
                endAdornment: /* @__PURE__ */ jsxRuntimeExports.jsx(InputAdornment, { position: "end", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  IconButton,
                  {
                    "aria-label": "toggle password visibility",
                    onClick: handleClickShowCurrentPass,
                    children: showCurrentPass ? /* @__PURE__ */ jsxRuntimeExports.jsx(LockOpen, { sx: { color: "#16205b" } }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Lock, { sx: { color: "#16205b" } })
                  }
                ) })
              },
              InputLabelProps: {
                shrink: true,
                htmlFor: "confirm-new-password"
              }
            }
          ),
          currentPasswordError && /* @__PURE__ */ jsxRuntimeExports.jsx(FormHelperText, { className: styles.errorText, children: currentPasswordError }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(FormHelperText, { children: t("profile.password_required") })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { className: styles.container, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { className: "".concat(styles.flexItem, " ").concat(styles.flexItemLeft), children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ModeComment, { sx: { color: "#fee33f" } }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "subtitle2", sx: { fontWeight: "400" }, children: "When you change your email or password, you will be logged out" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { className: "".concat(styles.buttonGroup), children: [
        operation == OPERATION.NONE && /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            className: styles.cancelButton,
            onClick: () => setOprtation(OPERATION.CHANGE_EMAIL),
            children: t("profile.change_email")
          }
        ),
        operation == OPERATION.NONE && /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            className: styles.cancelButton,
            onClick: () => setOprtation(OPERATION.CHANGE_PASSWORD),
            children: t("profile.change_password")
          }
        ),
        criticalChange && /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            className: styles.cancelButton,
            onClick: () => setOprtation(OPERATION.NONE),
            children: t("profile.cancel")
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { className: styles.saveButton, onClick: onSubmit, children: t("profile.save") })
      ] })
    ] })
  ] }) });
}
const OPERATION = {
  NONE: {},
  CHANGE_EMAIL: {},
  CHANGE_PASSWORD: {}
};
export {
  Profile as default
};
//# sourceMappingURL=index-r9HYgAs3.js.map
