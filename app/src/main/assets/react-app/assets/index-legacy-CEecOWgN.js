;
(function () {
  function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
  function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : String(i); }
  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
  function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
  System.register(['./index-legacy-vEA8K-LS.js', './yup-legacy-DfFsT9pC.js', './Web-legacy-BheMkDx6.js', './use-service-legacy-Bcxdqe8R.js', './use-boolean-legacy-C6g09uI5.js', './Link-legacy-HyZ4K89i.js', './DatePicker-legacy-BnaJqr5R.js', './Checkbox-legacy-DVZrBJdJ.js', './SwitchBase-legacy-CDK6BOac.js', './radioClasses-legacy-Dh2-Btlo.js', './tableRowClasses-legacy-vYv7lYPf.js', './FormControlLabel-legacy-CId-AnH7.js', './TextField-legacy-Dx6AYM0D.js', './Grid-legacy-Dnj6MD-w.js'], function (exports, module) {
    'use strict';

    var reactExports, jsxRuntimeExports, Box, useNavigate, create$3, create$6, LoadingButton, o, addMethod, create$9, useForm, FormProvider, RHFCode, Iconify, RHFTextField, Snackbar, Alert, routes, useService, Modal, Stack, Image, Typography, Button, useSelector, useTranslation, TokenService, useDispatch, setLoading, PROCESSED_ERRORS, Container, IconButton, useBoolean, Link, InputAdornment;
    return {
      setters: [module => {
        reactExports = module.r;
        jsxRuntimeExports = module.j;
        Box = module.B;
        useNavigate = module.s;
      }, module => {
        create$3 = module.c;
        create$6 = module.a;
        LoadingButton = module.L;
        o = module.o;
        addMethod = module.d;
        create$9 = module.b;
      }, module => {
        useForm = module.u;
        FormProvider = module.F;
        RHFCode = module.o;
        Iconify = module.I;
        RHFTextField = module.R;
        Snackbar = module.p;
        Alert = module.A;
        routes = module.r;
      }, module => {
        useService = module.J;
        Modal = module.ao;
        Stack = module.aH;
        Image = module.aG;
        Typography = module.T;
        Button = module.ap;
        useSelector = module.A;
        useTranslation = module.E;
        TokenService = module.C;
        useDispatch = module.K;
        setLoading = module.O;
        PROCESSED_ERRORS = module.aq;
        Container = module.aF;
        IconButton = module.I;
      }, module => {
        useBoolean = module.u;
      }, module => {
        Link = module.L;
      }, module => {
        InputAdornment = module.I;
      }, null, null, null, null, null, null, null],
      execute: function execute() {
        var __vite_style__ = document.createElement('style');
        __vite_style__.textContent = "._verifyContainer_rwmnr_1 {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  box-shadow: -24px 24px 72px -8px rgba(145, 158, 171, 0.24);\n  padding: 32px;\n  border-radius: 16px;\n  width: 400px;\n  background-color: #fff;\n}\n";
        document.head.appendChild(__vite_style__);
        exports("default", ProfileView);
        const verifyContainer = "_verifyContainer_rwmnr_1";
        const styles = {
          verifyContainer: verifyContainer
        };
        function VerifyView({
          t,
          open,
          email,
          onClose
        }) {
          const userService = useService("user");
          const _reactExports$useStat = reactExports.useState(false),
            _reactExports$useStat2 = _slicedToArray(_reactExports$useStat, 2),
            loading = _reactExports$useStat2[0],
            setLoading = _reactExports$useStat2[1];
          const VerifySchema = create$3().shape({
            pin: create$6().min(6, `${t("email.code_characters")}`).required(`${t("email.code_required")}`)
          });
          const defaultValues = {
            pin: ""
          };
          const methods = useForm({
            mode: "onChange",
            resolver: o(VerifySchema),
            defaultValues
          });
          const handleSubmit = methods.handleSubmit,
            setError = methods.setError,
            reset = methods.reset;
          const onSubmit = handleSubmit( /*#__PURE__*/function () {
            var _ref = _asyncToGenerator(function* (data) {
              setLoading(true);
              userService.confirmEmail(data).then(() => {
                setLoading(false);
                onClose(true);
                reset(defaultValues);
              }).catch(e => {
                setLoading(false);
                setError("pin", {
                  type: "manual",
                  message: `${t("email.code_invalid")}`
                });
              });
            });
            return function (_x) {
              return _ref.apply(this, arguments);
            };
          }());
          return /* @__PURE__ */jsxRuntimeExports.jsx(Modal, {
            open,
            "aria-labelledby": "email-verification-modal",
            "aria-describedby": "email-verification-modal-description",
            children: /* @__PURE__ */jsxRuntimeExports.jsx(Box, {
              className: styles.verifyContainer,
              children: /* @__PURE__ */jsxRuntimeExports.jsxs(Stack, {
                sx: {
                  textAlign: "center"
                },
                children: [/* @__PURE__ */jsxRuntimeExports.jsx(Image, {
                  alt: "email inbox",
                  src: "/ic_email_inbox.svg",
                  sx: {
                    mb: 5,
                    width: 96,
                    height: 96,
                    mx: "auto"
                  }
                }), /* @__PURE__ */jsxRuntimeExports.jsx(Typography, {
                  variant: "h3",
                  children: t("email.check")
                }), /* @__PURE__ */jsxRuntimeExports.jsxs(Typography, {
                  variant: "body2",
                  sx: {
                    mt: 2,
                    mb: 5,
                    color: "text.secondary"
                  },
                  children: [t("email.confirmation_code1"), " ", email, " ", t("email.confirmation_code2")]
                }), /* @__PURE__ */jsxRuntimeExports.jsxs(FormProvider, {
                  methods,
                  onSubmit,
                  children: [/* @__PURE__ */jsxRuntimeExports.jsx(RHFCode, {
                    name: "pin"
                  }), /* @__PURE__ */jsxRuntimeExports.jsx(LoadingButton, {
                    fullWidth: true,
                    size: "large",
                    color: "inherit",
                    type: "submit",
                    variant: "contained",
                    loading,
                    sx: {
                      mt: 3
                    },
                    children: t("email.verify")
                  })]
                }), /* @__PURE__ */jsxRuntimeExports.jsxs(Typography, {
                  variant: "body2",
                  align: "center",
                  sx: {
                    mt: 3
                  },
                  children: [t("email.dont_have_code"), /* @__PURE__ */jsxRuntimeExports.jsxs(Link, {
                    variant: "subtitle2",
                    underline: "none",
                    children: [" ", t("email.resend_code")]
                  })]
                }), /* @__PURE__ */jsxRuntimeExports.jsxs(Button, {
                  onClick: () => onClose(false),
                  color: "inherit",
                  sx: {
                    mt: 3,
                    mx: "auto",
                    alignItems: "center",
                    display: "inline-flex"
                  },
                  children: [/* @__PURE__ */jsxRuntimeExports.jsx(Iconify, {
                    icon: "carbon:chevron-left",
                    width: 16,
                    sx: {
                      mr: 1
                    }
                  }), t("action_btn.close")]
                })]
              })
            })
          });
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
          const isLoading = useSelector(state => {
            return state.editState.loading;
          });
          const _useTranslation = useTranslation("manage"),
            t = _useTranslation.t;
          const passwordShow = useBoolean();
          const userId = TokenService.getUser().id;
          const _reactExports$useStat3 = reactExports.useState({}),
            _reactExports$useStat4 = _slicedToArray(_reactExports$useStat3, 2),
            user = _reactExports$useStat4[0],
            setUser = _reactExports$useStat4[1];
          const _reactExports$useStat5 = reactExports.useState(false),
            _reactExports$useStat6 = _slicedToArray(_reactExports$useStat5, 2),
            verifyEmailOpen = _reactExports$useStat6[0],
            setVerifyEmailOpen = _reactExports$useStat6[1];
          const _reactExports$useStat7 = reactExports.useState(false),
            _reactExports$useStat8 = _slicedToArray(_reactExports$useStat7, 2),
            disableNameFields = _reactExports$useStat8[0],
            setDisableNameFields = _reactExports$useStat8[1];
          const _reactExports$useStat9 = reactExports.useState(false),
            _reactExports$useStat10 = _slicedToArray(_reactExports$useStat9, 2),
            snackbarOpen = _reactExports$useStat10[0],
            setSnackbarOpen = _reactExports$useStat10[1];
          const _reactExports$useStat11 = reactExports.useState(OPERATION.NONE),
            _reactExports$useStat12 = _slicedToArray(_reactExports$useStat11, 2),
            operation = _reactExports$useStat12[0],
            setOperation = _reactExports$useStat12[1];
          const dispatch = useDispatch();
          const handleCloseSnackbar = () => {
            setSnackbarOpen(false);
          };
          addMethod(create$6, "noWhitespace", function (errorMessage) {
            return this.test("no-whitespace", errorMessage, function (value) {
              const path = this.path,
                createError = this.createError;
              return value !== null && value !== void 0 && value.trim() ? true : createError({
                path,
                message: errorMessage
              });
            });
          });
          const getValidationSchema = operation2 => {
            let schemaFields = {
              firstName: create$6().required(t("firstname_required")).noWhitespace(t("error.invalid_first_name")).matches(/^[A-Za-z]+$/, t("error.invalid_first_name")),
              lastName: create$6().required(t("lastname_required")).noWhitespace(t("error.invalid_last_name")).matches(/^[A-Za-z]+$/, t("error.invalid_last_name"))
            };
            if (operation2 === OPERATION.CHANGE_EMAIL) {
              schemaFields = _objectSpread(_objectSpread({}, schemaFields), {}, {
                currentPassword: create$6().required(t("password_required")),
                email: create$6().email(t("error.invalid_email")).required(t("email_required"))
              });
            }
            if (operation2 === OPERATION.CHANGE_PASSWORD) {
              schemaFields = _objectSpread(_objectSpread({}, schemaFields), {}, {
                currentPassword: create$6().required(t("password_required")),
                newPassword: create$6().required(t("password_required")).matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/, t("error.invalid_password")),
                confirmNewPassword: create$6().required(t("password_required")).oneOf([create$9("newPassword"), null], t("error.password_should_match"))
              });
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
            }).catch(e => {
              navigate(routes.login);
            });
          };
          const methods = useForm({
            resolver: o(getValidationSchema(operation)),
            defaultValues
          });
          const watch = methods.watch,
            setError = methods.setError,
            reset = methods.reset,
            handleSubmit = methods.handleSubmit;
          const watchedEmail = watch("email");
          reactExports.useEffect(() => {
            if (watchedEmail !== user.email) {
              reset(_objectSpread(_objectSpread({}, methods.getValues()), {}, {
                firstName: user.firstName,
                lastName: user.lastName
              }));
              setDisableNameFields(true);
            } else {
              setDisableNameFields(false);
            }
          }, [watchedEmail, user.email, reset, methods]);
          reactExports.useEffect(() => {
            userService.getUser({
              userId
            }).then(response => {
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
            methods.reset(_objectSpread({}, methods.getValues()), {
              errors: true,
              schema
            });
          }, [operation, methods]);
          const onSubmit = handleSubmit( /*#__PURE__*/function () {
            var _ref2 = _asyncToGenerator(function* (data) {
              const firstName = data.firstName,
                lastName = data.lastName,
                email = data.email,
                newPassword = data.newPassword,
                currentPassword = data.currentPassword;
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
              }).catch(processedError => {
                if (processedError.name == PROCESSED_ERRORS.DUPLICATE_EMAIL.name) {
                  setError("email", {
                    type: "manual",
                    message: t(`processed_errors.${processedError.name}`)
                  });
                } else if (processedError.name == PROCESSED_ERRORS.WRONG_CREDENTIALS.name) {
                  setError("currentPassword", {
                    type: "manual",
                    message: t(`processed_errors.${processedError.name}`)
                  });
                }
              }).finally(() => {
                dispatch(setLoading(false));
              });
            });
            return function (_x2) {
              return _ref2.apply(this, arguments);
            };
          }());
          const handleCloseModal = isSuccess => {
            setVerifyEmailOpen(false);
            if (isSuccess) {
              setSnackbarOpen(true);
            }
            setOperation(OPERATION.NONE);
            userService.getUser({
              userId
            }).then(response => {
              const userData = {
                firstName: response.firstName,
                lastName: response.lastName,
                email: response.email
              };
              setUser(response);
              reset(userData);
            });
          };
          return /* @__PURE__ */jsxRuntimeExports.jsxs(Container, {
            children: [/* @__PURE__ */jsxRuntimeExports.jsxs(FormProvider, {
              methods,
              onSubmit,
              children: [/* @__PURE__ */jsxRuntimeExports.jsx(Typography, {
                variant: "h5",
                sx: {
                  mb: 3
                },
                children: "Personal"
              }), /* @__PURE__ */jsxRuntimeExports.jsxs(Box, {
                rowGap: 2.5,
                columnGap: 2,
                display: "grid",
                gridTemplateColumns: {
                  xs: "repeat(1, 1fr)",
                  md: "repeat(2, 1fr)"
                },
                children: [/* @__PURE__ */jsxRuntimeExports.jsx(RHFTextField, {
                  disabled: disableNameFields,
                  name: "firstName",
                  label: t("label.first_name")
                }), /* @__PURE__ */jsxRuntimeExports.jsx(RHFTextField, {
                  disabled: disableNameFields,
                  name: "lastName",
                  label: t("label.last_name")
                }), /* @__PURE__ */jsxRuntimeExports.jsx(RHFTextField, {
                  disabled: operation != OPERATION.CHANGE_EMAIL,
                  name: "email",
                  label: t("label.email")
                })]
              }), /* @__PURE__ */jsxRuntimeExports.jsx(Stack, {
                spacing: 3,
                sx: {
                  my: 5
                },
                children: /* @__PURE__ */jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
                  children: [operation == OPERATION.CHANGE_PASSWORD && /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                    children: [/* @__PURE__ */jsxRuntimeExports.jsx(Typography, {
                      variant: "h5",
                      children: t("profile.change_password")
                    }), /* @__PURE__ */jsxRuntimeExports.jsx(Typography, {
                      variant: "body2",
                      sx: {
                        color: "error.main",
                        mb: 1
                      },
                      children: t("profile.hint")
                    })]
                  }), operation == OPERATION.CHANGE_EMAIL && /* @__PURE__ */jsxRuntimeExports.jsx(Typography, {
                    variant: "body2",
                    sx: {
                      color: "error.main"
                    },
                    children: t("profile.hint")
                  }), /* @__PURE__ */jsxRuntimeExports.jsxs(Stack, {
                    spacing: 2.5,
                    children: [criticalChange && /* @__PURE__ */jsxRuntimeExports.jsx(RHFTextField, {
                      name: "currentPassword",
                      label: t("label.password"),
                      type: passwordShow.value ? "text" : "password",
                      InputProps: {
                        endAdornment: /* @__PURE__ */jsxRuntimeExports.jsx(InputAdornment, {
                          position: "end",
                          children: /* @__PURE__ */jsxRuntimeExports.jsx(IconButton, {
                            onClick: passwordShow.onToggle,
                            edge: "end",
                            children: /* @__PURE__ */jsxRuntimeExports.jsx(Iconify, {
                              icon: passwordShow.value ? "carbon:view" : "carbon:view-off"
                            })
                          })
                        })
                      }
                    }), operation == OPERATION.CHANGE_PASSWORD && /* @__PURE__ */jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
                      children: [/* @__PURE__ */jsxRuntimeExports.jsx(RHFTextField, {
                        name: "newPassword",
                        label: t("label.new_password"),
                        type: passwordShow.value ? "text" : "password",
                        InputProps: {
                          endAdornment: /* @__PURE__ */jsxRuntimeExports.jsx(InputAdornment, {
                            position: "end",
                            children: /* @__PURE__ */jsxRuntimeExports.jsx(IconButton, {
                              onClick: passwordShow.onToggle,
                              edge: "end",
                              children: /* @__PURE__ */jsxRuntimeExports.jsx(Iconify, {
                                icon: passwordShow.value ? "carbon:view" : "carbon:view-off"
                              })
                            })
                          })
                        }
                      }), /* @__PURE__ */jsxRuntimeExports.jsx(RHFTextField, {
                        name: "confirmNewPassword",
                        label: t("label.confirm_new_password"),
                        type: passwordShow.value ? "text" : "password",
                        InputProps: {
                          endAdornment: /* @__PURE__ */jsxRuntimeExports.jsx(InputAdornment, {
                            position: "end",
                            children: /* @__PURE__ */jsxRuntimeExports.jsx(IconButton, {
                              onClick: passwordShow.onToggle,
                              edge: "end",
                              children: /* @__PURE__ */jsxRuntimeExports.jsx(Iconify, {
                                icon: passwordShow.value ? "carbon:view" : "carbon:view-off"
                              })
                            })
                          })
                        }
                      })]
                    })]
                  })]
                })
              }), /* @__PURE__ */jsxRuntimeExports.jsxs(Stack, {
                spacing: 1,
                direction: "row",
                children: [operation == OPERATION.NONE && /* @__PURE__ */jsxRuntimeExports.jsx(LoadingButton, {
                  color: "inherit",
                  size: "large",
                  variant: "contained",
                  onClick: () => setOperation(OPERATION.CHANGE_EMAIL),
                  children: t("profile.change_email")
                }), operation == OPERATION.NONE && /* @__PURE__ */jsxRuntimeExports.jsx(LoadingButton, {
                  color: "inherit",
                  size: "large",
                  variant: "contained",
                  onClick: () => setOperation(OPERATION.CHANGE_PASSWORD),
                  children: t("profile.change_password")
                }), criticalChange && /* @__PURE__ */jsxRuntimeExports.jsx(LoadingButton, {
                  color: "inherit",
                  size: "large",
                  variant: "contained",
                  onClick: () => setOperation(OPERATION.NONE),
                  children: t("profile.cancel")
                }), /* @__PURE__ */jsxRuntimeExports.jsx(LoadingButton, {
                  color: "inherit",
                  size: "large",
                  type: "submit",
                  variant: "contained",
                  loading: isLoading,
                  children: t("profile.save")
                })]
              })]
            }), /* @__PURE__ */jsxRuntimeExports.jsx(VerifyView, {
              t,
              open: verifyEmailOpen,
              email: user === null || user === void 0 ? void 0 : user.email,
              onClose: handleCloseModal
            }), /* @__PURE__ */jsxRuntimeExports.jsx(Snackbar, {
              open: snackbarOpen,
              autoHideDuration: 6e3,
              onClose: handleCloseSnackbar,
              anchorOrigin: {
                vertical: "bottom",
                horizontal: "center"
              },
              children: /* @__PURE__ */jsxRuntimeExports.jsx(Alert, {
                onClose: handleCloseSnackbar,
                severity: "success",
                variant: "filled",
                sx: {
                  width: "100%"
                },
                children: t("email.email_changed")
              })
            })]
          });
        }
      }
    };
  });
})();
//# sourceMappingURL=index-legacy-CEecOWgN.js.map
