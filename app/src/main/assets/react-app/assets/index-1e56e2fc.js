import { u as useNavigate, T as TokenService, r as reactExports, j as jsxRuntimeExports, d as LoadingIndicator, P as PROCESSED_ERRORS, p as processError } from "./index-71e436dd.js";
import { H as Header, r as routes } from "./index-5d523d1a.js";
import { P as ProcessedError } from "./index-3d965a9d.js";
import { U as UserService } from "./UserService-eef43349.js";
import { A as AuthService } from "./AuthService-fbd64962.js";
import { u as useTranslation, B as Box, T as Typography, I as Input, a as IconButton, b as Button } from "./common-acee48c7.js";
import { C as Card } from "./Card-bccd3d70.js";
import { S as Stack } from "./Stack-cf32ef60.js";
import { F as FormGroup } from "./FormGroup-4b2df1a6.js";
import { T as TextField } from "./TextField-e86274a8.js";
import { F as FormControl, I as InputLabel, a as FormHelperText } from "./InputLabel-7f86409c.js";
import { I as InputAdornment } from "./InputAdornment-a92d02a2.js";
import { V as VisibilityOff, a as Visibility } from "./VisibilityOff-10fa1b8c.js";
import "./ArrowBack-bb00e58a.js";
import "./LogoutOutlined-a1c750aa.js";
const mainContainer = "_mainContainer_1iwf2_1";
const createUserCard = "_createUserCard_1iwf2_7";
const formGroup = "_formGroup_1iwf2_11";
const errorText = "_errorText_1iwf2_16";
const hint = "_hint_1iwf2_20";
const styles = {
  mainContainer,
  createUserCard,
  formGroup,
  errorText,
  hint
};
function Profile() {
  const navigate = useNavigate();
  const { t } = useTranslation("manage");
  const userId = TokenService.getUser().id;
  const [user, setUser] = reactExports.useState({});
  const [loading, setLoading] = reactExports.useState(false);
  const [processedError, setProcessedError] = reactExports.useState("");
  const [showError, setShowError] = reactExports.useState(false);
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
  const criticalChange = email.length > 0 && email != user.email || newPass.length > 0;
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
  const goUsers = () => {
    navigate(routes.manageUsers);
  };
  const logout = () => {
    AuthService.logout();
    navigate(routes.login);
  };
  const onSubmit = () => {
    if (!validate()) {
      return;
    }
    setLoading(true);
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
      const processed = processError(e);
      switch (processed) {
        case PROCESSED_ERRORS.NETWORK_ERR:
        case PROCESSED_ERRORS.BACKEND_DOWN:
          setShowError(true);
          setProcessedError(processed);
          break;
        case PROCESSED_ERRORS.DUPLICATE_EMAIL:
          setEmailError(t(`processed_errors.${processedError}`));
          break;
        case PROCESSED_ERRORS.WRONG_CREDENTIALS:
          setCurrentPasswordError(t("processed_errors.wrong_password"));
          break;
      }
    }).finally(() => {
      setLoading(false);
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
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { className: styles.mainContainer, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Header, {}),
    loading && /* @__PURE__ */ jsxRuntimeExports.jsx(LoadingIndicator, {}),
    showError && /* @__PURE__ */ jsxRuntimeExports.jsx(
      ProcessedError,
      {
        error: processedError,
        handleClose: () => setShowError(false)
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: styles.createUserCard, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "h4", sx: { mb: "10px" }, children: t("profile.title") }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { flexDirection: "row", gap: 5, alignItems: "center", children: [
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
          /* @__PURE__ */ jsxRuntimeExports.jsxs(FormControl, { required: true, variant: "standard", sx: { mt: "10px" }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(InputLabel, { htmlFor: "standard-adornment-password", children: t("label.new_password") }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                error: passNewError.length > 0,
                onChange: onNewPasswordChanged,
                name: "password",
                value: newPass,
                type: showNewPass ? "text" : "password",
                id: "standard-adornment-password",
                endAdornment: /* @__PURE__ */ jsxRuntimeExports.jsx(InputAdornment, { position: "end", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  IconButton,
                  {
                    "aria-label": "toggle password visibility",
                    onClick: handleClickShowNewPass,
                    children: showNewPass ? /* @__PURE__ */ jsxRuntimeExports.jsx(VisibilityOff, {}) : /* @__PURE__ */ jsxRuntimeExports.jsx(Visibility, {})
                  }
                ) })
              }
            )
          ] }),
          newPass.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(
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
                    error: confrimNewPasswordError.length > 0,
                    onChange: onConfirmPasswordChanges,
                    name: "cpassword",
                    type: showConfirmPass ? "text" : "password",
                    value: confrimNewPassword,
                    id: "standard-adornment-password",
                    endAdornment: /* @__PURE__ */ jsxRuntimeExports.jsx(InputAdornment, { position: "end", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                      IconButton,
                      {
                        "aria-label": "toggle password visibility",
                        onClick: handleClickShowConfirmPass,
                        children: showConfirmPass ? /* @__PURE__ */ jsxRuntimeExports.jsx(VisibilityOff, {}) : /* @__PURE__ */ jsxRuntimeExports.jsx(Visibility, {})
                      }
                    ) })
                  }
                )
              ]
            }
          ),
          criticalChange && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              FormControl,
              {
                required: true,
                variant: "standard",
                sx: { mt: "10px" },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(InputLabel, { htmlFor: "standard-adornment-password", children: t("label.current_password") }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Input,
                    {
                      error: currentPasswordError.length > 0,
                      onChange: onCurrentPasswordChanged,
                      name: "password",
                      type: showCurrentPass ? "text" : "password",
                      value: currentPassword,
                      id: "standard-adornment-password",
                      endAdornment: /* @__PURE__ */ jsxRuntimeExports.jsx(InputAdornment, { position: "end", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                        IconButton,
                        {
                          "aria-label": "toggle password visibility",
                          onClick: handleClickShowCurrentPass,
                          children: showCurrentPass ? /* @__PURE__ */ jsxRuntimeExports.jsx(VisibilityOff, {}) : /* @__PURE__ */ jsxRuntimeExports.jsx(Visibility, {})
                        }
                      ) })
                    }
                  )
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(FormHelperText, { children: t("profile.password_required") })
          ] }),
          (firstNameError || lastNameError || emailError || currentPasswordError || passNewError || confrimNewPasswordError) && /* @__PURE__ */ jsxRuntimeExports.jsx(FormHelperText, { className: styles.errorText, children: firstNameError || lastNameError || emailError || currentPasswordError || passNewError || confrimNewPasswordError })
        ] }),
        criticalChange && /* @__PURE__ */ jsxRuntimeExports.jsx(
          Box,
          {
            className: styles.hint,
            sx: { maxWidth: "300px", fontSize: "20px" },
            children: t("profile.hint")
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { sx: { display: "flex", justifyContent: "flex-end", mt: "40px" }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: goUsers, children: t("profile.cancel") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: onSubmit, children: t("profile.save") })
      ] })
    ] })
  ] });
}
export {
  Profile as default
};
