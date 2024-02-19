;
(function () {
  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
  function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
  System.register(['./index-legacy-T3s18jo3.js', './UserService-legacy-idayBd14.js', './Web-legacy-LDhM2X1u.js', './FormGroup-legacy-aaf9eppM.js', './TextField-legacy-vL2OdS5Q.js', './FormControlLabel-legacy-0Ne4M7i6.js', './Checkbox-legacy-8hCFdihe.js', './DatePicker-legacy-9Ey9K3I7.js', './Grid-legacy-ZQipiKyz.js', './SwitchBase-legacy-VpMr3A_z.js'], function (exports, module) {
    'use strict';

    var useParams, useNavigate, useTranslation, useDispatch, reactExports, setLoading, jsxRuntimeExports, Box, Card, Typography, FormControl, FormLabel, Button, onApiError, onError, PROCESSED_ERRORS, UserService, ROLES, routes, FormGroup, TextField, FormHelperText, FormControlLabel, Checkbox;
    return {
      setters: [module => {
        useParams = module.ap;
        useNavigate = module.w;
        useTranslation = module.x;
        useDispatch = module.z;
        reactExports = module.r;
        setLoading = module.D;
        jsxRuntimeExports = module.j;
        Box = module.B;
        Card = module.bt;
        Typography = module.a0;
        FormControl = module.ag;
        FormLabel = module.Z;
        Button = module.a1;
        onApiError = module.a3;
        onError = module.a7;
        PROCESSED_ERRORS = module.a4;
      }, module => {
        UserService = module.U;
      }, module => {
        ROLES = module.R;
        routes = module.r;
      }, module => {
        FormGroup = module.F;
      }, module => {
        TextField = module.T;
        FormHelperText = module.F;
      }, module => {
        FormControlLabel = module.F;
      }, module => {
        Checkbox = module.C;
      }, null, null, null],
      execute: function execute() {
        var __vite_style__ = document.createElement('style');
        __vite_style__.textContent = "._mainContainer_mg9ea_1 {\n  margin: auto;\n  max-width: 800px;\n  min-width: 300px;\n  height: calc(100vh - 80px);\n  overflow: auto;\n}\n\n._createUserCard_mg9ea_9 {\n  padding: 25px;\n}\n\n._formGroup_mg9ea_13 {\n  max-width: 400px;\n}\n\n._errorText_mg9ea_17 {\n  color: #eb5757 !important;\n}\n";
        document.head.appendChild(__vite_style__);
        exports('default', AddEditUser);
        const mainContainer = "_mainContainer_mg9ea_1";
        const createUserCard = "_createUserCard_mg9ea_9";
        const formGroup = "_formGroup_mg9ea_13";
        const errorText = "_errorText_mg9ea_17";
        const styles = {
          mainContainer: mainContainer,
          createUserCard: createUserCard,
          formGroup: formGroup,
          errorText: errorText
        };
        function AddEditUser({
          isEditing
        }) {
          const _useParams = useParams(),
            userId = _useParams.userId;
          const navigate = useNavigate();
          const _useTranslation = useTranslation("manage"),
            t = _useTranslation.t;
          const dispatch = useDispatch();
          const _reactExports$useStat = reactExports.useState(""),
            _reactExports$useStat2 = _slicedToArray(_reactExports$useStat, 2),
            email = _reactExports$useStat2[0],
            setEmail = _reactExports$useStat2[1];
          const _reactExports$useStat3 = reactExports.useState(""),
            _reactExports$useStat4 = _slicedToArray(_reactExports$useStat3, 2),
            emailError = _reactExports$useStat4[0],
            setEmailError = _reactExports$useStat4[1];
          const _reactExports$useStat5 = reactExports.useState(""),
            _reactExports$useStat6 = _slicedToArray(_reactExports$useStat5, 2),
            firstName = _reactExports$useStat6[0],
            setFirstName = _reactExports$useStat6[1];
          const _reactExports$useStat7 = reactExports.useState(""),
            _reactExports$useStat8 = _slicedToArray(_reactExports$useStat7, 2),
            firstNameError = _reactExports$useStat8[0],
            setFirstNameError = _reactExports$useStat8[1];
          const _reactExports$useStat9 = reactExports.useState(""),
            _reactExports$useStat10 = _slicedToArray(_reactExports$useStat9, 2),
            lastName = _reactExports$useStat10[0],
            setLastName = _reactExports$useStat10[1];
          const _reactExports$useStat11 = reactExports.useState(""),
            _reactExports$useStat12 = _slicedToArray(_reactExports$useStat11, 2),
            lastNameError = _reactExports$useStat12[0],
            setLastNameError = _reactExports$useStat12[1];
          const _reactExports$useStat13 = reactExports.useState([]),
            _reactExports$useStat14 = _slicedToArray(_reactExports$useStat13, 2),
            roles = _reactExports$useStat14[0],
            setRoles = _reactExports$useStat14[1];
          const _reactExports$useStat15 = reactExports.useState(""),
            _reactExports$useStat16 = _slicedToArray(_reactExports$useStat15, 2),
            rolesError = _reactExports$useStat16[0],
            setRolesError = _reactExports$useStat16[1];
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
                data: {
                  email,
                  firstName,
                  lastName,
                  roles
                }
              }).then(() => {
                goUsers();
              }).catch(e => {
                onApiError({
                  error: e,
                  globalErrorHandler: processedError => {
                    dispatch(onError(processedError));
                  },
                  locallErrorHandler: processedError => {
                    if (processedError.name == PROCESSED_ERRORS.DUPLICATE_EMAIL.name) {
                      setEmailError(t(`processed_errors.${processedError.name}`));
                    }
                  }
                });
              }).finally(() => {
                dispatch(setLoading(false));
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
                onApiError({
                  error: e,
                  globalErrorHandler: processedError => {
                    dispatch(onError(processedError));
                  },
                  locallErrorHandler: processedError => {
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
              UserService.getUser({
                userId
              }).then(response => {
                const email2 = response.email,
                  firstName2 = response.firstName,
                  lastName2 = response.lastName,
                  roles2 = response.roles;
                setEmail(email2);
                setFirstName(firstName2);
                setLastName(lastName2);
                setRoles(roles2);
                dispatch(setLoading(false));
              });
            }
          }, []);
          return /* @__PURE__ */jsxRuntimeExports.jsx(Box, {
            className: styles.mainContainer,
            children: /* @__PURE__ */jsxRuntimeExports.jsxs(Card, {
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
                  error: (emailError === null || emailError === void 0 ? void 0 : emailError.length) > 0,
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
                    value: ROLES.ANALYST,
                    control: /* @__PURE__ */jsxRuntimeExports.jsx(Checkbox, {
                      checked: roles.indexOf(ROLES.ANALYST) > -1,
                      onChange: onRolesChanged,
                      name: ROLES.ANALYST
                    }),
                    label: t("label.analyst")
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
            })
          });
        }
      }
    };
  });
})();
//# sourceMappingURL=index-legacy-EQG13pIm.js.map
