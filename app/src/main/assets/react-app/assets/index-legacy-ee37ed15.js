;
(function () {
  System.register(['./index-legacy-c8bd5c71.js', './AuthService-legacy-a5f81c75.js', './index-legacy-ec319b02.js', './common-legacy-fa39557a.js', './FormGroup-legacy-1cdaabe9.js', './TextField-legacy-8a4f5595.js', './InputLabel-legacy-d58282a5.js', './InputAdornment-legacy-00b593fd.js', './VisibilityOff-legacy-8a9e26a5.js', './index-legacy-4a348273.js'], function (exports, module) {
    'use strict';

    var __vite_style__ = document.createElement('style');
    __vite_style__.textContent = "._wrapper_13l38_1 {\n  width: 400px;\n  background: #eff3fd;\n  border: 1px solid #bdc6de;\n  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);\n  border-radius: 13px;\n  max-width: 407px;\n  padding: 5px;\n}\n\n._content_13l38_11 {\n  background: #ffffff;\n  border-radius: 10px;\n  text-align: center;\n  padding: 60px 0;\n}\n\n._form_13l38_18 {\n  max-width: 250px;\n  margin: 40px auto;\n}\n\n._formGroup_13l38_23 {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n\n._errorText_13l38_29 {\n  color: #eb5757 !important;\n}\n\n._successText_13l38_33 {\n  color: #fff;\n  background: #27ae60;\n  border-radius: 5px;\n  max-width: 280px;\n  padding: 10px;\n  margin: 20px auto 0;\n}\n";
    document.head.appendChild(__vite_style__);
    var reactExports, jsxRuntimeExports, PROCESSED_ERRORS, processError, AuthService, AuthWrap, useTranslation, Box, Typography, Input, IconButton, Button, FormGroup, TextField, FormControl, InputLabel, FormHelperText, InputAdornment, VisibilityOff, Visibility;
    return {
      setters: [module => {
        reactExports = module.r;
        jsxRuntimeExports = module.j;
        PROCESSED_ERRORS = module.P;
        processError = module.p;
      }, module => {
        AuthService = module.A;
      }, module => {
        AuthWrap = module.A;
      }, module => {
        useTranslation = module.u;
        Box = module.B;
        Typography = module.T;
        Input = module.I;
        IconButton = module.a;
        Button = module.b;
      }, module => {
        FormGroup = module.F;
      }, module => {
        TextField = module.T;
      }, module => {
        FormControl = module.F;
        InputLabel = module.I;
        FormHelperText = module.a;
      }, module => {
        InputAdornment = module.I;
      }, module => {
        VisibilityOff = module.V;
        Visibility = module.a;
      }, null],
      execute: function () {
        exports('default', SignUp);
        const wrapper = "_wrapper_13l38_1";
        const content = "_content_13l38_11";
        const form = "_form_13l38_18";
        const formGroup = "_formGroup_13l38_23";
        const errorText = "_errorText_13l38_29";
        const successText = "_successText_13l38_33";
        const styles = {
          wrapper: wrapper,
          content: content,
          form: form,
          formGroup: formGroup,
          errorText: errorText,
          successText: successText
        };
        function SignUp() {
          const {
            t
          } = useTranslation("manage");
          const [loading, setLoading] = reactExports.useState(false);
          const [isSuccess, setSuccess] = reactExports.useState(false);
          const [processedError, setProcessedError] = reactExports.useState("");
          const [showError, setShowError] = reactExports.useState(false);
          const [email, setEmail] = reactExports.useState("");
          const [emailError, setEmailError] = reactExports.useState("");
          const [firstName, setFirstName] = reactExports.useState("");
          const [firstNameError, setFirstNameError] = reactExports.useState("");
          const [lastName, setLastName] = reactExports.useState("");
          const [lastNameError, setLastNameError] = reactExports.useState("");
          const [password, setPassword] = reactExports.useState("");
          const [passError, setPassError] = reactExports.useState("");
          const [domain, setDomain] = reactExports.useState("");
          const [domainError, setDomainError] = reactExports.useState("");
          const [showPassword, setShowPassword] = reactExports.useState(false);
          const handleClickShowPassword = () => setShowPassword(show => !show);
          const onPasswordChanged = e => {
            setPassword(e.target.value);
            setPassError("");
          };
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
          const onDomainChanged = e => {
            setDomain(e.target.value);
            setDomainError("");
          };
          const validate = () => {
            setEmailError("");
            setPassError("");
            setDomainError("");
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
            if (password.length == 0) {
              setPassError(t("password_required"));
              return false;
            }
            if (domain.length == 0) {
              setDomainError(t("domain_required"));
              return false;
            }
            return true;
          };
          const onSubmit = () => {
            if (!validate()) {
              return;
            }
            setLoading(true);
            AuthService.signup({
              email,
              password,
              domain,
              firstName,
              lastName
            }).then(() => {
              setSuccess(true);
            }).catch(e => {
              const processed = processError(e);
              switch (processed) {
                case PROCESSED_ERRORS.NETWORK_ERR:
                case PROCESSED_ERRORS.BACKEND_DOWN:
                  setShowError(true);
                  setProcessedError(processed);
                  break;
                case PROCESSED_ERRORS.DUPLICATE_EMAIL:
                case PROCESSED_ERRORS.DUPLICATE_DOMAIN:
                  setProcessedError(processed);
                  break;
              }
            }).finally(() => {
              setLoading(false);
            });
          };
          return /* @__PURE__ */jsxRuntimeExports.jsx(AuthWrap, {
            loading,
            showError,
            processedError,
            handleClose: () => setShowError(false),
            children: /* @__PURE__ */jsxRuntimeExports.jsx(Box, {
              className: styles.wrapper,
              children: /* @__PURE__ */jsxRuntimeExports.jsxs(Box, {
                className: styles.content,
                children: [/* @__PURE__ */jsxRuntimeExports.jsx(Typography, {
                  variant: "h4",
                  children: t("sign_up.title")
                }), isSuccess ? /* @__PURE__ */jsxRuntimeExports.jsx(Box, {
                  className: styles.successText,
                  children: t("sign_up.success")
                }) : /* @__PURE__ */jsxRuntimeExports.jsxs(Box, {
                  className: styles.form,
                  children: [/* @__PURE__ */jsxRuntimeExports.jsxs(FormGroup, {
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
                      required: true,
                      variant: "standard",
                      children: [/* @__PURE__ */jsxRuntimeExports.jsx(InputLabel, {
                        htmlFor: "standard-adornment-password",
                        children: t("label.password")
                      }), /* @__PURE__ */jsxRuntimeExports.jsx(Input, {
                        error: (passError === null || passError === void 0 ? void 0 : passError.length) > 0,
                        required: true,
                        value: password,
                        onChange: onPasswordChanged,
                        name: "password",
                        id: "standard-adornment-password",
                        type: showPassword ? "text" : "password",
                        endAdornment: /* @__PURE__ */jsxRuntimeExports.jsx(InputAdornment, {
                          position: "end",
                          children: /* @__PURE__ */jsxRuntimeExports.jsx(IconButton, {
                            "aria-label": "toggle password visibility",
                            onClick: handleClickShowPassword,
                            children: showPassword ? /* @__PURE__ */jsxRuntimeExports.jsx(VisibilityOff, {}) : /* @__PURE__ */jsxRuntimeExports.jsx(Visibility, {})
                          })
                        })
                      })]
                    }), /* @__PURE__ */jsxRuntimeExports.jsx(TextField, {
                      error: (domainError === null || domainError === void 0 ? void 0 : domainError.length) > 0 || processedError == PROCESSED_ERRORS.DUPLICATE_DOMAIN,
                      id: "domain",
                      value: domain,
                      onChange: onDomainChanged,
                      required: true,
                      label: t("label.server_name"),
                      name: "domain",
                      variant: "standard"
                    }), (processedError == PROCESSED_ERRORS.DUPLICATE_DOMAIN || processedError == PROCESSED_ERRORS.INVALID_DOMAIN || processedError == PROCESSED_ERRORS.DUPLICATE_EMAIL) && /* @__PURE__ */jsxRuntimeExports.jsx(FormHelperText, {
                      className: styles.errorText,
                      children: t(`processed_errors.${processedError}`)
                    }), (firstNameError || lastNameError || emailError || passError || domainError) && /* @__PURE__ */jsxRuntimeExports.jsx(FormHelperText, {
                      className: styles.errorText,
                      children: firstNameError || lastNameError || emailError || passError || domainError
                    }), /* @__PURE__ */jsxRuntimeExports.jsx(FormHelperText, {
                      sx: {
                        fontSize: "10px"
                      },
                      children: t("sign_up.helper_text")
                    })]
                  }), /* @__PURE__ */jsxRuntimeExports.jsx(Button, {
                    onClick: onSubmit,
                    sx: {
                      mt: "40px"
                    },
                    children: t("sign_up.sign_up")
                  })]
                })]
              })
            })
          });
        }
      }
    };
  });
})();
