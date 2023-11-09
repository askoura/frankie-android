import { k as useParams, a as useNavigate, u as useTranslation, i as useDispatch, r as reactExports, s as setLoading, U as UserService, j as jsxRuntimeExports, B as Box, C as Card, T as Typography, F as FormGroup, b as TextField, c as FormControl, V as FormLabel, W as FormControlLabel, X as Checkbox, R as ROLES, g as FormHelperText, h as Button, p as routes, o as onApiError, l as onError, P as PROCESSED_ERRORS } from "./index-4408a88f.js";
const mainContainer = "_mainContainer_3xykw_1";
const createUserCard = "_createUserCard_3xykw_7";
const formGroup = "_formGroup_3xykw_11";
const errorText = "_errorText_3xykw_15";
const styles = {
  mainContainer,
  createUserCard,
  formGroup,
  errorText
};
function AddEditUser({ isEditing }) {
  const { userId } = useParams();
  const navigate = useNavigate();
  const { t } = useTranslation("manage");
  const dispatch = useDispatch();
  const [email, setEmail] = reactExports.useState("");
  const [emailError, setEmailError] = reactExports.useState("");
  const [firstName, setFirstName] = reactExports.useState("");
  const [firstNameError, setFirstNameError] = reactExports.useState("");
  const [lastName, setLastName] = reactExports.useState("");
  const [lastNameError, setLastNameError] = reactExports.useState("");
  const [roles, setRoles] = reactExports.useState([]);
  const [rolesError, setRolesError] = reactExports.useState("");
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
  const onRolesChanged = (e) => {
    if (e.target.checked) {
      setRoles([...roles, e.target.name]);
    } else {
      setRoles(roles.filter((role) => role !== e.target.name));
    }
  };
  const validate = () => {
    setEmailError("");
    setFirstNameError("");
    setLastNameError("");
    setRolesError("");
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
    if (roles.length == 0) {
      setRolesError(t("roles_required"));
      return false;
    }
    return true;
  };
  const goUsers = () => {
    navigate(routes.manageUsers);
  };
  const onSubmit = () => {
    dispatch(setLoading(true));
    if (!validate()) {
      return;
    }
    if (isEditing) {
      UserService.updateUser({
        userId,
        data: { email, firstName, lastName, roles }
      }).then(() => {
        goUsers();
      }).catch((e) => {
        onApiError({
          error: e,
          globalErrorHandler: (processedError) => {
            dispatch(onError(processedError));
          },
          locallErrorHandler: (processedError) => {
            if (processedError.name == PROCESSED_ERRORS.DUPLICATE_EMAIL.name) {
              setEmailError(t(`processed_errors.${processedError.name}`));
            }
          }
        });
      }).finally(() => {
        dispatch(setLoading(false));
      });
    } else {
      UserService.createUser({ email, firstName, lastName, roles }).then(() => {
        goUsers();
      }).catch((e) => {
        onApiError({
          error: e,
          globalErrorHandler: (processedError) => {
            dispatch(onError(processedError));
          },
          locallErrorHandler: (processedError) => {
            if (processedError.name == PROCESSED_ERRORS.DUPLICATE_EMAIL.name) {
              setEmailError(t(`processed_errors.${processedError.name}`));
            }
          }
        });
      }).finally(() => {
        dispatch(setLoading(false));
      });
    }
  };
  reactExports.useEffect(() => {
    if (isEditing) {
      dispatch(setLoading(true));
      UserService.getUser({ userId }).then((response) => {
        const { email: email2, firstName: firstName2, lastName: lastName2, roles: roles2 } = response;
        setEmail(email2);
        setFirstName(firstName2);
        setLastName(lastName2);
        setRoles(roles2);
        dispatch(setLoading(false));
      });
    }
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { className: styles.mainContainer, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: styles.createUserCard, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "h4", children: userId ? t("edit_user.title") : t("add_user.title") }),
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
          error: (emailError == null ? void 0 : emailError.length) > 0,
          id: "email",
          onChange: onEmailChanged,
          label: t("label.email"),
          name: "email",
          variant: "standard"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(FormControl, { sx: { mt: "20px" }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(FormLabel, { id: "radio-buttons-group-label", children: t("add_user.roles") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          FormControlLabel,
          {
            control: /* @__PURE__ */ jsxRuntimeExports.jsx(
              Checkbox,
              {
                checked: roles.indexOf(ROLES.SUPER_ADMIN) > -1,
                onChange: onRolesChanged,
                name: ROLES.SUPER_ADMIN
              }
            ),
            label: t("label.super_admin")
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          FormControlLabel,
          {
            value: ROLES.SURVEY_ADMIN,
            control: /* @__PURE__ */ jsxRuntimeExports.jsx(
              Checkbox,
              {
                checked: roles.indexOf(ROLES.SURVEY_ADMIN) > -1,
                onChange: onRolesChanged,
                name: ROLES.SURVEY_ADMIN
              }
            ),
            label: t("label.survey_admin")
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          FormControlLabel,
          {
            value: ROLES.ANALYST,
            control: /* @__PURE__ */ jsxRuntimeExports.jsx(
              Checkbox,
              {
                checked: roles.indexOf(ROLES.ANALYST) > -1,
                onChange: onRolesChanged,
                name: ROLES.ANALYST
              }
            ),
            label: t("label.analyst")
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          FormControlLabel,
          {
            value: ROLES.SURVEYOR,
            control: /* @__PURE__ */ jsxRuntimeExports.jsx(
              Checkbox,
              {
                checked: roles.indexOf(ROLES.SURVEYOR) > -1,
                onChange: onRolesChanged,
                name: ROLES.SURVEYOR
              }
            ),
            label: t("label.surveyor")
          }
        )
      ] }),
      (firstNameError || lastNameError || emailError || rolesError) && /* @__PURE__ */ jsxRuntimeExports.jsx(FormHelperText, { className: styles.errorText, children: firstNameError || lastNameError || emailError || rolesError })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { sx: { display: "flex", justifyContent: "flex-end", mt: "40px" }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: goUsers, children: t("add_user.cancel") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: onSubmit, children: t("add_user.save") })
    ] })
  ] }) });
}
export {
  AddEditUser as default
};
//# sourceMappingURL=index-52f86ff4.js.map
