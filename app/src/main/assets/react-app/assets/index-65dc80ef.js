import { a as useParams, u as useNavigate, r as reactExports, j as jsxRuntimeExports, d as LoadingIndicator, P as PROCESSED_ERRORS, p as processError } from "./index-365b357c.js";
import { H as Header, r as routes } from "./index-2b77d626.js";
import { U as UserService } from "./UserService-fc307faa.js";
import { P as ProcessedError } from "./index-58fde954.js";
import { R as ROLES } from "./roles-792df703.js";
import { u as useTranslation, B as Box, T as Typography, b as Button } from "./common-67893e1c.js";
import { C as Card } from "./Card-cfce7f7b.js";
import { F as FormGroup } from "./FormGroup-eeb7be07.js";
import { T as TextField } from "./TextField-036d2651.js";
import { F as FormControl, b as FormLabel, a as FormHelperText } from "./InputLabel-d540b88d.js";
import { F as FormControlLabel } from "./FormControlLabel-42cf2298.js";
import { C as Checkbox } from "./Checkbox-1322a9d7.js";
import "./AuthService-c3ca70e3.js";
import "./ArrowBack-992ed83d.js";
import "./LogoutOutlined-b017ae2d.js";
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
  const [processedError, setProcessedError] = reactExports.useState("");
  const [showError, setShowError] = reactExports.useState(false);
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
  const [loading, setLoading] = reactExports.useState(false);
  const goUsers = () => {
    navigate(routes.manageUsers);
  };
  const onSubmit = () => {
    if (!validate()) {
      return;
    }
    setLoading(true);
    if (isEditing) {
      UserService.updateUser({
        userId,
        data: { email, firstName, lastName, roles }
      }).then(() => {
        goUsers();
      }).catch((e) => {
        console.log(e);
        const processed = processError(e);
        console.log(processed);
        switch (processed) {
          case PROCESSED_ERRORS.NETWORK_ERR:
          case PROCESSED_ERRORS.BACKEND_DOWN:
            setShowError(true);
            setProcessedError(processed);
            break;
          case PROCESSED_ERRORS.DUPLICATE_EMAIL:
            setEmailError(t(`processed_errors.${processedError}`));
            break;
        }
      }).finally(() => {
        setLoading(false);
      });
    } else {
      UserService.createUser({ email, firstName, lastName, roles }).then(() => {
        goUsers();
      }).catch((e) => {
        console.log(e);
        const processed = processError(e);
        console.log(processed);
        switch (processed) {
          case PROCESSED_ERRORS.NETWORK_ERR:
          case PROCESSED_ERRORS.BACKEND_DOWN:
            setShowError(true);
            setProcessedError(processed);
            break;
          case PROCESSED_ERRORS.DUPLICATE_EMAIL:
            setEmailError(t(`processed_errors.${processedError}`));
            break;
        }
      }).finally(() => {
        setLoading(false);
      });
    }
  };
  reactExports.useEffect(() => {
    if (isEditing) {
      setLoading(true);
      UserService.getUser({ userId }).then((response) => {
        const { email: email2, firstName: firstName2, lastName: lastName2, roles: roles2 } = response;
        setEmail(email2);
        setFirstName(firstName2);
        setLastName(lastName2);
        setRoles(roles2);
        setLoading(false);
      });
    }
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
            error: (emailError == null ? void 0 : emailError.length) > 0 || processedError == PROCESSED_ERRORS.DUPLICATE_EMAIL,
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
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            FormControlLabel,
            {
              value: ROLES.SURVEYOR_AUDITOR,
              control: /* @__PURE__ */ jsxRuntimeExports.jsx(
                Checkbox,
                {
                  checked: roles.indexOf(ROLES.SURVEYOR_AUDITOR) > -1,
                  onChange: onRolesChanged,
                  name: ROLES.SURVEYOR_AUDITOR
                }
              ),
              label: t("label.surveyor_admin")
            }
          )
        ] }),
        (firstNameError || lastNameError || emailError || rolesError) && /* @__PURE__ */ jsxRuntimeExports.jsx(FormHelperText, { className: styles.errorText, children: firstNameError || lastNameError || emailError || rolesError })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { sx: { display: "flex", justifyContent: "flex-end", mt: "40px" }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: goUsers, children: t("add_user.cancel") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: onSubmit, children: t("add_user.save") })
      ] })
    ] })
  ] });
}
export {
  AddEditUser as default
};
