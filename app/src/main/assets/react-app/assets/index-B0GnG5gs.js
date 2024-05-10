import { r as reactExports, j as jsxRuntimeExports, B as Box, s as useNavigate } from "./index-DqOHBPA_.js";
import { c as create$3, a as create$6, L as LoadingButton, o, d as addMethod, b as create$9 } from "./yup-D0NbELJS.js";
import { u as useForm, F as FormProvider, o as RHFCode, I as Iconify, R as RHFTextField, p as Snackbar, A as Alert, r as routes } from "./Web-DdmaLZWw.js";
import { J as useService, ao as Modal, aH as Stack, aG as Image, T as Typography, ap as Button, A as useSelector, E as useTranslation, C as TokenService, K as useDispatch, O as setLoading, aq as PROCESSED_ERRORS, aF as Container, I as IconButton } from "./use-service-B2Fih2ge.js";
import { u as useBoolean } from "./use-boolean-KHb5Ffg4.js";
import { L as Link } from "./Link-DhG8SfhC.js";
import { I as InputAdornment } from "./DatePicker-9Pk1EwA1.js";
import "./Checkbox-47V_54xr.js";
import "./SwitchBase-rlcQTk7F.js";
import "./radioClasses-D8j8JIb8.js";
import "./tableRowClasses-vPBqZyH3.js";
import "./FormControlLabel-BnMNrqju.js";
import "./TextField-Fj584c9C.js";
import "./Grid-nW54Jdfg.js";
const verifyContainer = "_verifyContainer_rwmnr_1";
const styles = {
  verifyContainer
};
function VerifyView({ t, open, email, onClose }) {
  const userService = useService("user");
  const [loading, setLoading2] = reactExports.useState(false);
  const VerifySchema = create$3().shape({
    pin: create$6().min(6, "".concat(t("email.code_characters"))).required("".concat(t("email.code_required")))
  });
  const defaultValues = {
    pin: ""
  };
  const methods = useForm({
    mode: "onChange",
    resolver: o(VerifySchema),
    defaultValues
  });
  const { handleSubmit, setError, reset } = methods;
  const onSubmit = handleSubmit(async (data) => {
    setLoading2(true);
    userService.confirmEmail(data).then(() => {
      setLoading2(false);
      onClose(true);
      reset(defaultValues);
    }).catch((e) => {
      setLoading2(false);
      setError("pin", {
        type: "manual",
        message: "".concat(t("email.code_invalid"))
      });
    });
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Modal,
    {
      open,
      "aria-labelledby": "email-verification-modal",
      "aria-describedby": "email-verification-modal-description",
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { className: styles.verifyContainer, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { sx: { textAlign: "center" }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Image,
          {
            alt: "email inbox",
            src: "/ic_email_inbox.svg",
            sx: { mb: 5, width: 96, height: 96, mx: "auto" }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "h3", children: t("email.check") }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Typography,
          {
            variant: "body2",
            sx: { mt: 2, mb: 5, color: "text.secondary" },
            children: [
              t("email.confirmation_code1"),
              " ",
              email,
              " ",
              t("email.confirmation_code2")
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(FormProvider, { methods, onSubmit, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(RHFCode, { name: "pin" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            LoadingButton,
            {
              fullWidth: true,
              size: "large",
              color: "inherit",
              type: "submit",
              variant: "contained",
              loading,
              sx: { mt: 3 },
              children: t("email.verify")
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Typography, { variant: "body2", align: "center", sx: { mt: 3 }, children: [
          t("email.dont_have_code"),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { variant: "subtitle2", underline: "none", children: [
            " ",
            t("email.resend_code")
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Button,
          {
            onClick: () => onClose(false),
            color: "inherit",
            sx: {
              mt: 3,
              mx: "auto",
              alignItems: "center",
              display: "inline-flex"
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "carbon:chevron-left", width: 16, sx: { mr: 1 } }),
              t("action_btn.close")
            ]
          }
        )
      ] }) })
    }
  );
}
const OPERATION = {
  NONE: "",
  CHANGE_EMAIL: "CHANGE_EMAIL",
  CHANGE_PASSWORD: "CHANGE_PASSWORD"
};
function ProfileView() {
  const authService = useService("auth");
  const userService = useService("user");
  const navigate = useNavigate();
  const isLoading = useSelector((state) => {
    return state.editState.loading;
  });
  const { t } = useTranslation("manage");
  const passwordShow = useBoolean();
  const userId = TokenService.getUser().id;
  const [user, setUser] = reactExports.useState({});
  const [verifyEmailOpen, setVerifyEmailOpen] = reactExports.useState(false);
  const [disableNameFields, setDisableNameFields] = reactExports.useState(false);
  const [snackbarOpen, setSnackbarOpen] = reactExports.useState(false);
  const [operation, setOperation] = reactExports.useState(OPERATION.NONE);
  const dispatch = useDispatch();
  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };
  addMethod(create$6, "noWhitespace", function(errorMessage) {
    return this.test("no-whitespace", errorMessage, function(value) {
      const { path, createError } = this;
      return (value == null ? void 0 : value.trim()) ? true : createError({ path, message: errorMessage });
    });
  });
  const getValidationSchema = (operation2) => {
    let schemaFields = {
      firstName: create$6().required(t("firstname_required")).noWhitespace(t("error.invalid_first_name")).matches(/^[A-Za-z]+$/, t("error.invalid_first_name")),
      lastName: create$6().required(t("lastname_required")).noWhitespace(t("error.invalid_last_name")).matches(/^[A-Za-z]+$/, t("error.invalid_last_name"))
    };
    if (operation2 === OPERATION.CHANGE_EMAIL) {
      schemaFields = {
        ...schemaFields,
        currentPassword: create$6().required(t("password_required")),
        email: create$6().email(t("error.invalid_email")).required(t("email_required"))
      };
    }
    if (operation2 === OPERATION.CHANGE_PASSWORD) {
      schemaFields = {
        ...schemaFields,
        currentPassword: create$6().required(t("password_required")),
        newPassword: create$6().required(t("password_required")).matches(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/,
          t("error.invalid_password")
        ),
        confirmNewPassword: create$6().required(t("password_required")).oneOf(
          [create$9("newPassword"), null],
          t("error.password_should_match")
        )
      };
    }
    return create$3().shape(schemaFields);
  };
  const criticalChange = operation === OPERATION.CHANGE_EMAIL || operation === OPERATION.CHANGE_PASSWORD;
  let defaultValues = {
    firstName: "",
    lastName: "",
    email: "",
    currentPassword: "",
    newPassword: "",
    confirmNewPassword: ""
  };
  const logout = () => {
    authService.logout().then(() => {
      navigate(routes.login);
    }).catch((e) => {
      navigate(routes.login);
    });
  };
  const methods = useForm({
    resolver: o(getValidationSchema(operation)),
    defaultValues
  });
  const { watch, setError, reset, handleSubmit } = methods;
  const watchedEmail = watch("email");
  reactExports.useEffect(() => {
    if (watchedEmail !== user.email) {
      reset({
        ...methods.getValues(),
        firstName: user.firstName,
        lastName: user.lastName
      });
      setDisableNameFields(true);
    } else {
      setDisableNameFields(false);
    }
  }, [watchedEmail, user.email, reset, methods]);
  reactExports.useEffect(() => {
    userService.getUser({ userId }).then((response) => {
      const userData = {
        firstName: response.firstName,
        lastName: response.lastName,
        email: response.email
      };
      setUser(response);
      reset(userData);
    });
  }, [reset, userId]);
  reactExports.useEffect(() => {
    const schema = getValidationSchema(operation);
    methods.reset({ ...methods.getValues() }, { errors: true, schema });
  }, [operation, methods]);
  const onSubmit = handleSubmit(async (data) => {
    const { firstName, lastName, email, newPassword, currentPassword } = data;
    const model = {};
    if (user.firstName !== firstName) {
      model.firstName = firstName;
    }
    if (user.lastName !== lastName) {
      model.lastName = lastName;
    }
    if (user.email !== email) {
      model.email = email;
    }
    if (currentPassword !== "") {
      model.password = currentPassword;
    }
    if (newPassword !== "") {
      model.newPassword = newPassword;
    }
    dispatch(setLoading(true));
    userService.updateUserProfile(model).then(() => {
      if (model.email && model.email !== user.email) {
        setVerifyEmailOpen(true);
      } else if (criticalChange) {
        logout();
      }
    }).catch((processedError) => {
      if (processedError.name == PROCESSED_ERRORS.DUPLICATE_EMAIL.name) {
        setError("email", {
          type: "manual",
          message: t("processed_errors.".concat(processedError.name))
        });
      } else if (processedError.name == PROCESSED_ERRORS.WRONG_CREDENTIALS.name) {
        setError("currentPassword", {
          type: "manual",
          message: t("processed_errors.".concat(processedError.name))
        });
      }
    }).finally(() => {
      dispatch(setLoading(false));
    });
  });
  const handleCloseModal = (isSuccess) => {
    setVerifyEmailOpen(false);
    if (isSuccess) {
      setSnackbarOpen(true);
    }
    setOperation(OPERATION.NONE);
    userService.getUser({ userId }).then((response) => {
      const userData = {
        firstName: response.firstName,
        lastName: response.lastName,
        email: response.email
      };
      setUser(response);
      reset(userData);
    });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Container, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(FormProvider, { methods, onSubmit, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "h5", sx: { mb: 3 }, children: "Personal" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Box,
        {
          rowGap: 2.5,
          columnGap: 2,
          display: "grid",
          gridTemplateColumns: { xs: "repeat(1, 1fr)", md: "repeat(2, 1fr)" },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              RHFTextField,
              {
                disabled: disableNameFields,
                name: "firstName",
                label: t("label.first_name")
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              RHFTextField,
              {
                disabled: disableNameFields,
                name: "lastName",
                label: t("label.last_name")
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              RHFTextField,
              {
                disabled: operation != OPERATION.CHANGE_EMAIL,
                name: "email",
                label: t("label.email")
              }
            )
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Stack, { spacing: 3, sx: { my: 5 }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        operation == OPERATION.CHANGE_PASSWORD && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "h5", children: t("profile.change_password") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", sx: { color: "error.main", mb: 1 }, children: t("profile.hint") })
        ] }),
        operation == OPERATION.CHANGE_EMAIL && /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", sx: { color: "error.main" }, children: t("profile.hint") }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { spacing: 2.5, children: [
          criticalChange && /* @__PURE__ */ jsxRuntimeExports.jsx(
            RHFTextField,
            {
              name: "currentPassword",
              label: t("label.password"),
              type: passwordShow.value ? "text" : "password",
              InputProps: {
                endAdornment: /* @__PURE__ */ jsxRuntimeExports.jsx(InputAdornment, { position: "end", children: /* @__PURE__ */ jsxRuntimeExports.jsx(IconButton, { onClick: passwordShow.onToggle, edge: "end", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Iconify,
                  {
                    icon: passwordShow.value ? "carbon:view" : "carbon:view-off"
                  }
                ) }) })
              }
            }
          ),
          operation == OPERATION.CHANGE_PASSWORD && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              RHFTextField,
              {
                name: "newPassword",
                label: t("label.new_password"),
                type: passwordShow.value ? "text" : "password",
                InputProps: {
                  endAdornment: /* @__PURE__ */ jsxRuntimeExports.jsx(InputAdornment, { position: "end", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    IconButton,
                    {
                      onClick: passwordShow.onToggle,
                      edge: "end",
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                        Iconify,
                        {
                          icon: passwordShow.value ? "carbon:view" : "carbon:view-off"
                        }
                      )
                    }
                  ) })
                }
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              RHFTextField,
              {
                name: "confirmNewPassword",
                label: t("label.confirm_new_password"),
                type: passwordShow.value ? "text" : "password",
                InputProps: {
                  endAdornment: /* @__PURE__ */ jsxRuntimeExports.jsx(InputAdornment, { position: "end", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    IconButton,
                    {
                      onClick: passwordShow.onToggle,
                      edge: "end",
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                        Iconify,
                        {
                          icon: passwordShow.value ? "carbon:view" : "carbon:view-off"
                        }
                      )
                    }
                  ) })
                }
              }
            )
          ] })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { spacing: 1, direction: "row", children: [
        operation == OPERATION.NONE && /* @__PURE__ */ jsxRuntimeExports.jsx(
          LoadingButton,
          {
            color: "inherit",
            size: "large",
            variant: "contained",
            onClick: () => setOperation(OPERATION.CHANGE_EMAIL),
            children: t("profile.change_email")
          }
        ),
        operation == OPERATION.NONE && /* @__PURE__ */ jsxRuntimeExports.jsx(
          LoadingButton,
          {
            color: "inherit",
            size: "large",
            variant: "contained",
            onClick: () => setOperation(OPERATION.CHANGE_PASSWORD),
            children: t("profile.change_password")
          }
        ),
        criticalChange && /* @__PURE__ */ jsxRuntimeExports.jsx(
          LoadingButton,
          {
            color: "inherit",
            size: "large",
            variant: "contained",
            onClick: () => setOperation(OPERATION.NONE),
            children: t("profile.cancel")
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          LoadingButton,
          {
            color: "inherit",
            size: "large",
            type: "submit",
            variant: "contained",
            loading: isLoading,
            children: t("profile.save")
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      VerifyView,
      {
        t,
        open: verifyEmailOpen,
        email: user == null ? void 0 : user.email,
        onClose: handleCloseModal
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Snackbar,
      {
        open: snackbarOpen,
        autoHideDuration: 6e3,
        onClose: handleCloseSnackbar,
        anchorOrigin: { vertical: "bottom", horizontal: "center" },
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Alert,
          {
            onClose: handleCloseSnackbar,
            severity: "success",
            variant: "filled",
            sx: { width: "100%" },
            children: t("email.email_changed")
          }
        )
      }
    )
  ] });
}
export {
  ProfileView as default
};
//# sourceMappingURL=index-B0GnG5gs.js.map