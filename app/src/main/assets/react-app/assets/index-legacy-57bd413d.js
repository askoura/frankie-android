;
(function () {
  System.register(['./index-legacy-23e2ff21.js', './AuthService-legacy-6db348de.js', './index-legacy-25a13db0.js', './common-legacy-594d3ceb.js', './FormGroup-legacy-66860dbc.js', './TextField-legacy-ae30defc.js', './InputLabel-legacy-89265e0c.js', './index-legacy-2c5c28ac.js'], function (exports, module) {
    'use strict';

    var __vite_style__ = document.createElement('style');
    __vite_style__.textContent = "._wrapper_1hgy5_1 {\n  width: 400px;\n  background: #eff3fd;\n  border: 1px solid #bdc6de;\n  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);\n  border-radius: 13px;\n  max-width: 407px;\n  padding: 5px;\n}\n\n._content_1hgy5_11 {\n  background: #ffffff;\n  border-radius: 10px;\n  text-align: center;\n  padding: 60px 0;\n}\n\n._form_1hgy5_18 {\n  max-width: 250px;\n  margin: 40px auto;\n}\n\n._errorText_1hgy5_23 {\n  color: #eb5757 !important;\n}\n\n._successText_1hgy5_27 {\n  max-width: 280px;\n  margin: 40px auto;\n}\n";
    document.head.appendChild(__vite_style__);
    var reactExports, jsxRuntimeExports, processError, PROCESSED_ERRORS, AuthService, AuthWrap, useTranslation, Box, Typography, Button, FormGroup, TextField, FormHelperText;
    return {
      setters: [module => {
        reactExports = module.r;
        jsxRuntimeExports = module.j;
        processError = module.p;
        PROCESSED_ERRORS = module.P;
      }, module => {
        AuthService = module.A;
      }, module => {
        AuthWrap = module.A;
      }, module => {
        useTranslation = module.u;
        Box = module.B;
        Typography = module.T;
        Button = module.b;
      }, module => {
        FormGroup = module.F;
      }, module => {
        TextField = module.T;
      }, module => {
        FormHelperText = module.a;
      }, null],
      execute: function () {
        exports('default', ForgotPassword);
        const wrapper = "_wrapper_1hgy5_1";
        const content = "_content_1hgy5_11";
        const form = "_form_1hgy5_18";
        const errorText = "_errorText_1hgy5_23";
        const successText = "_successText_1hgy5_27";
        const styles = {
          wrapper: wrapper,
          content: content,
          form: form,
          errorText: errorText,
          successText: successText
        };
        function ForgotPassword() {
          const {
            t,
            i18n
          } = useTranslation("manage");
          const [loading, setLoading] = reactExports.useState(false);
          const [isSuccess, setSuccess] = reactExports.useState(false);
          const [email, setEmail] = reactExports.useState("");
          const [emailError, setEmailError] = reactExports.useState("");
          const [processedError, setProcessedError] = reactExports.useState("");
          const [showError, setShowError] = reactExports.useState(false);
          const onEmailChanged = e => {
            setEmail(e.target.value);
            setEmailError("");
          };
          const onSubmit = () => {
            setEmailError("");
            if (email.length == 0) {
              setEmailError(t("email_required"));
              return false;
            }
            setLoading(true);
            AuthService.forgotPassword(email).then(data => {
              setSuccess(true);
            }).catch(e => {
              const processed = processError(e);
              switch (processed) {
                case PROCESSED_ERRORS.NETWORK_ERR:
                case PROCESSED_ERRORS.BACKEND_DOWN:
                  setShowError(true);
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
                  children: t("forgot_password.title")
                }), isSuccess ? /* @__PURE__ */jsxRuntimeExports.jsx(Box, {
                  className: styles.successText,
                  children: t("forgot_password.success")
                }) : /* @__PURE__ */jsxRuntimeExports.jsxs(Box, {
                  className: styles.form,
                  children: [/* @__PURE__ */jsxRuntimeExports.jsxs(FormGroup, {
                    children: [/* @__PURE__ */jsxRuntimeExports.jsx(TextField, {
                      error: emailError.length > 0,
                      id: "email",
                      value: email,
                      required: true,
                      onChange: onEmailChanged,
                      label: t("label.email"),
                      name: "email",
                      variant: "standard"
                    }), emailError && /* @__PURE__ */jsxRuntimeExports.jsx(FormHelperText, {
                      className: styles.errorText,
                      children: emailError
                    }), /* @__PURE__ */jsxRuntimeExports.jsx(FormHelperText, {
                      children: t("forgot_password.helper_text")
                    })]
                  }), /* @__PURE__ */jsxRuntimeExports.jsx(Button, {
                    onClick: onSubmit,
                    sx: {
                      mt: "40px"
                    },
                    children: t("forgot_password.send")
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
