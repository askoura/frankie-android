;
(function () {
  System.register(['./index-legacy-23e2ff21.js', './index-legacy-d69c410e.js', './UserService-legacy-40a1bd56.js', './index-legacy-2c5c28ac.js', './roles-legacy-95e61924.js', './common-legacy-594d3ceb.js', './Card-legacy-86d9b4bd.js', './FormGroup-legacy-66860dbc.js', './TextField-legacy-ae30defc.js', './InputLabel-legacy-89265e0c.js', './FormControlLabel-legacy-5ddd9e99.js', './Checkbox-legacy-eed7af13.js', './AuthService-legacy-6db348de.js', './ArrowBack-legacy-f3473451.js', './LogoutOutlined-legacy-89bd80ca.js'], function (exports, module) {
    'use strict';

    var __vite_style__ = document.createElement('style');
    __vite_style__.textContent = "._mainContainer_3xykw_1 {\n  margin: auto;\n  max-width: 800px;\n  min-width: 300px;\n}\n\n._createUserCard_3xykw_7 {\n  padding: 25px;\n}\n\n._formGroup_3xykw_11 {\n  max-width: 400px;\n}\n\n._errorText_3xykw_15 {\n  color: #eb5757 !important;\n}\n";
    document.head.appendChild(__vite_style__);
    var useParams, useNavigate, reactExports, jsxRuntimeExports, LoadingIndicator, PROCESSED_ERRORS, processError, Header, routes, UserService, ProcessedError, ROLES, useTranslation, Box, Typography, Button, Card, FormGroup, TextField, FormControl, FormLabel, FormHelperText, FormControlLabel, Checkbox;
    return {
      setters: [module => {
        useParams = module.a;
        useNavigate = module.u;
        reactExports = module.r;
        jsxRuntimeExports = module.j;
        LoadingIndicator = module.d;
        PROCESSED_ERRORS = module.P;
        processError = module.p;
      }, module => {
        Header = module.H;
        routes = module.r;
      }, module => {
        UserService = module.U;
      }, module => {
        ProcessedError = module.P;
      }, module => {
        ROLES = module.R;
      }, module => {
        useTranslation = module.u;
        Box = module.B;
        Typography = module.T;
        Button = module.b;
      }, module => {
        Card = module.C;
      }, module => {
        FormGroup = module.F;
      }, module => {
        TextField = module.T;
      }, module => {
        FormControl = module.F;
        FormLabel = module.b;
        FormHelperText = module.a;
      }, module => {
        FormControlLabel = module.F;
      }, module => {
        Checkbox = module.C;
      }, null, null, null],
      execute: function () {
        exports('default', AddEditUser);
        const mainContainer = "_mainContainer_3xykw_1";
        const createUserCard = "_createUserCard_3xykw_7";
        const formGroup = "_formGroup_3xykw_11";
        const errorText = "_errorText_3xykw_15";
        const styles = {
          mainContainer: mainContainer,
          createUserCard: createUserCard,
          formGroup: formGroup,
          errorText: errorText
        };
        function AddEditUser({
          isEditing
        }) {
          const {
            userId
          } = useParams();
          const navigate = useNavigate();
          const {
            t
          } = useTranslation("manage");
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
          const onEmailChanged = e => {
            setEmail(e.target.value);
            setEmailError("");
          };
          const onFirstNameChanged = e => {
            setFirstName(e.target.value);
            setFirstNameError("");
          };
          const onLastChanged = e => {
            setLastName(e.target.value);
            setLastNameError("");
          };
          const onRolesChanged = e => {
            if (e.target.checked) {
              setRoles([...roles, e.target.name]);
            } else {
              setRoles(roles.filter(role => role !== e.target.name));
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
                data: {
                  email,
                  firstName,
                  lastName,
                  roles
                }
              }).then(() => {
                goUsers();
              }).catch(e => {
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
              UserService.createUser({
                email,
                firstName,
                lastName,
                roles
              }).then(() => {
                goUsers();
              }).catch(e => {
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
              UserService.getUser({
                userId
              }).then(response => {
                const {
                  email: email2,
                  firstName: firstName2,
                  lastName: lastName2,
                  roles: roles2
                } = response;
                setEmail(email2);
                setFirstName(firstName2);
                setLastName(lastName2);
                setRoles(roles2);
                setLoading(false);
              });
            }
          }, []);
          return /* @__PURE__ */jsxRuntimeExports.jsxs(Box, {
            className: styles.mainContainer,
            children: [/* @__PURE__ */jsxRuntimeExports.jsx(Header, {}), loading && /* @__PURE__ */jsxRuntimeExports.jsx(LoadingIndicator, {}), showError && /* @__PURE__ */jsxRuntimeExports.jsx(ProcessedError, {
              error: processedError,
              handleClose: () => setShowError(false)
            }), /* @__PURE__ */jsxRuntimeExports.jsxs(Card, {
              className: styles.createUserCard,
              children: [/* @__PURE__ */jsxRuntimeExports.jsx(Typography, {
                variant: "h4",
                children: userId ? t("edit_user.title") : t("add_user.title")
              }), /* @__PURE__ */jsxRuntimeExports.jsxs(FormGroup, {
                className: styles.formGroup,
                children: [/* @__PURE__ */jsxRuntimeExports.jsx(TextField, {
                  error: firstNameError.length > 0,
                  required: true,
                  value: firstName,
                  id: "firstName",
                  label: t("label.first_name"),
                  name: "firstName",
                  onChange: onFirstNameChanged,
                  variant: "standard"
                }), /* @__PURE__ */jsxRuntimeExports.jsx(TextField, {
                  error: (lastNameError === null || lastNameError === void 0 ? void 0 : lastNameError.length) > 0,
                  id: "lastName",
                  value: lastName,
                  required: true,
                  onChange: onLastChanged,
                  label: t("label.last_name"),
                  name: "lastName",
                  variant: "standard"
                }), /* @__PURE__ */jsxRuntimeExports.jsx(TextField, {
                  required: true,
                  value: email,
                  error: (emailError === null || emailError === void 0 ? void 0 : emailError.length) > 0 || processedError == PROCESSED_ERRORS.DUPLICATE_EMAIL,
                  id: "email",
                  onChange: onEmailChanged,
                  label: t("label.email"),
                  name: "email",
                  variant: "standard"
                }), /* @__PURE__ */jsxRuntimeExports.jsxs(FormControl, {
                  sx: {
                    mt: "20px"
                  },
                  children: [/* @__PURE__ */jsxRuntimeExports.jsx(FormLabel, {
                    id: "radio-buttons-group-label",
                    children: t("add_user.roles")
                  }), /* @__PURE__ */jsxRuntimeExports.jsx(FormControlLabel, {
                    control: /* @__PURE__ */jsxRuntimeExports.jsx(Checkbox, {
                      checked: roles.indexOf(ROLES.SUPER_ADMIN) > -1,
                      onChange: onRolesChanged,
                      name: ROLES.SUPER_ADMIN
                    }),
                    label: t("label.super_admin")
                  }), /* @__PURE__ */jsxRuntimeExports.jsx(FormControlLabel, {
                    value: ROLES.SURVEY_ADMIN,
                    control: /* @__PURE__ */jsxRuntimeExports.jsx(Checkbox, {
                      checked: roles.indexOf(ROLES.SURVEY_ADMIN) > -1,
                      onChange: onRolesChanged,
                      name: ROLES.SURVEY_ADMIN
                    }),
                    label: t("label.survey_admin")
                  }), /* @__PURE__ */jsxRuntimeExports.jsx(FormControlLabel, {
                    value: ROLES.SURVEYOR,
                    control: /* @__PURE__ */jsxRuntimeExports.jsx(Checkbox, {
                      checked: roles.indexOf(ROLES.SURVEYOR) > -1,
                      onChange: onRolesChanged,
                      name: ROLES.SURVEYOR
                    }),
                    label: t("label.surveyor")
                  })]
                }), (firstNameError || lastNameError || emailError || rolesError) && /* @__PURE__ */jsxRuntimeExports.jsx(FormHelperText, {
                  className: styles.errorText,
                  children: firstNameError || lastNameError || emailError || rolesError
                })]
              }), /* @__PURE__ */jsxRuntimeExports.jsxs(Box, {
                sx: {
                  display: "flex",
                  justifyContent: "flex-end",
                  mt: "40px"
                },
                children: [/* @__PURE__ */jsxRuntimeExports.jsx(Button, {
                  onClick: goUsers,
                  children: t("add_user.cancel")
                }), /* @__PURE__ */jsxRuntimeExports.jsx(Button, {
                  onClick: onSubmit,
                  children: t("add_user.save")
                })]
              })]
            })]
          });
        }
      }
    };
  });
})();