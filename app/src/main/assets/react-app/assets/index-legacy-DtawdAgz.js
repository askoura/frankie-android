;
(function () {
  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
  System.register(['./index-legacy-vEA8K-LS.js', './yup-legacy-DfFsT9pC.js', './Web-legacy-BheMkDx6.js', './use-boolean-legacy-C6g09uI5.js', './use-service-legacy-Bcxdqe8R.js', './index.esm-legacy-BUdeLy2v.js', './router-link-legacy-DKg-tKvm.js', './Link-legacy-HyZ4K89i.js', './DatePicker-legacy-BnaJqr5R.js', './Divider-legacy-DjNNgC-t.js', './Checkbox-legacy-DVZrBJdJ.js', './SwitchBase-legacy-CDK6BOac.js', './radioClasses-legacy-Dh2-Btlo.js', './tableRowClasses-legacy-vYv7lYPf.js', './FormControlLabel-legacy-CId-AnH7.js', './TextField-legacy-Dx6AYM0D.js', './Grid-legacy-Dnj6MD-w.js'], function (exports, module) {
    'use strict';

    var useNavigate, jsxRuntimeExports, create$3, create$6, LoadingButton, o, useForm, routes, FormProvider, RHFTextField, Iconify, useBoolean, useService, useTranslation, useDispatch, setLoading, Typography, Stack, IconButton, PROCESSED_ERRORS, GoogleOAuthProvider, GoogleLogin, RouterLink, Link, InputAdornment, Divider;
    return {
      setters: [module => {
        useNavigate = module.s;
        jsxRuntimeExports = module.j;
      }, module => {
        create$3 = module.c;
        create$6 = module.a;
        LoadingButton = module.L;
        o = module.o;
      }, module => {
        useForm = module.u;
        routes = module.r;
        FormProvider = module.F;
        RHFTextField = module.R;
        Iconify = module.I;
      }, module => {
        useBoolean = module.u;
      }, module => {
        useService = module.J;
        useTranslation = module.E;
        useDispatch = module.K;
        setLoading = module.O;
        Typography = module.T;
        Stack = module.aH;
        IconButton = module.I;
        PROCESSED_ERRORS = module.aq;
      }, module => {
        GoogleOAuthProvider = module.G;
        GoogleLogin = module.a;
      }, module => {
        RouterLink = module.R;
      }, module => {
        Link = module.L;
      }, module => {
        InputAdornment = module.I;
      }, module => {
        Divider = module.D;
      }, null, null, null, null, null, null, null],
      execute: function execute() {
        exports("default", LoginView);
        function LoginView() {
          const authService = useService("auth");
          const _useTranslation = useTranslation("manage"),
            t = _useTranslation.t;
          const passwordShow = useBoolean();
          const dispatch = useDispatch();
          const navigate = useNavigate();
          const LoginSchema = create$3().shape({
            email: create$6().required(t("email_required")).email("That is not an email"),
            password: create$6().required(t("password_required"))
          });
          const defaultValues = {
            email: "",
            password: ""
          };
          const methods = useForm({
            resolver: o(LoginSchema),
            defaultValues
          });
          const setError = methods.setError,
            reset = methods.reset,
            handleSubmit = methods.handleSubmit,
            isSubmitting = methods.formState.isSubmitting;
          const handleError = processedError => {
            if (processedError.name == PROCESSED_ERRORS.WRONG_CREDENTIALS.name) {
              setError("email", {
                type: "manual",
                message: t(`processed_errors.${processedError.name}`)
              });
              setError("password", {
                type: "manual",
                message: t(`processed_errors.${processedError.name}`)
              });
            }
          };
          const onSubmit = handleSubmit( /*#__PURE__*/function () {
            var _ref = _asyncToGenerator(function* (data) {
              dispatch(setLoading(true));
              try {
                yield authService.login(data.email, data.password);
                const _ref2 = location.state || {
                    from: {
                      pathname: "/"
                    }
                  },
                  from = _ref2.from;
                navigate(from);
              } catch (e) {
                handleError(e);
              } finally {
                dispatch(setLoading(false));
              }
            });
            return function (_x) {
              return _ref.apply(this, arguments);
            };
          }());
          const onGoogleAuthSuccess = credentialResponse => {
            dispatch(setLoading(true));
            authService.googleSignIn(credentialResponse).then(data => {
              const _ref3 = location.state || {
                  from: {
                    pathname: "/"
                  }
                },
                from = _ref3.from;
              navigate(from);
            }).catch(e => {
              handleError(e);
            }).finally(() => {
              dispatch(setLoading(false));
            });
          };
          const renderHead = /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
            children: [/* @__PURE__ */jsxRuntimeExports.jsx(Typography, {
              variant: "h3",
              paragraph: true,
              children: t("login.login")
            }), /* @__PURE__ */jsxRuntimeExports.jsxs(Typography, {
              variant: "body2",
              sx: {
                color: "text.secondary"
              },
              children: [t("login.dont_have_acc"), /* @__PURE__ */jsxRuntimeExports.jsxs(Link, {
                component: RouterLink,
                href: routes.signup,
                variant: "subtitle2",
                color: "primary",
                children: [" ", t("sign_up.get_started")]
              })]
            })]
          });
          const renderSocials = /* @__PURE__ */jsxRuntimeExports.jsx(Stack, {
            direction: "row",
            justifyContent: "center",
            children: /* @__PURE__ */jsxRuntimeExports.jsx(GoogleOAuthProvider, {
              clientId: "464768435207-e2rkf9h0fjbcnhh2egkj3e9bkvub2p4o.apps.googleusercontent.com",
              children: /* @__PURE__ */jsxRuntimeExports.jsx(GoogleLogin, {
                onSuccess: onGoogleAuthSuccess,
                onError: () => {
                  console.log("Login Failed");
                }
              })
            })
          });
          const renderForm = /* @__PURE__ */jsxRuntimeExports.jsx(FormProvider, {
            methods,
            onSubmit: handleSubmit(onSubmit),
            children: /* @__PURE__ */jsxRuntimeExports.jsxs(Stack, {
              spacing: 2.5,
              alignItems: "flex-end",
              children: [/* @__PURE__ */jsxRuntimeExports.jsx(RHFTextField, {
                name: "email",
                label: t("label.email")
              }), /* @__PURE__ */jsxRuntimeExports.jsx(RHFTextField, {
                name: "password",
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
              }), /* @__PURE__ */jsxRuntimeExports.jsx(Link, {
                component: RouterLink,
                href: "/forgot-password",
                variant: "body2",
                underline: "always",
                color: "text.secondary",
                children: t("login.forgot_password")
              }), /* @__PURE__ */jsxRuntimeExports.jsx(LoadingButton, {
                fullWidth: true,
                color: "primary",
                size: "large",
                type: "submit",
                variant: "contained",
                loading: isSubmitting,
                children: t("login.login")
              })]
            })
          });
          return /* @__PURE__ */jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
            children: [renderHead, renderForm, /* @__PURE__ */jsxRuntimeExports.jsx(Divider, {
              children: /* @__PURE__ */jsxRuntimeExports.jsx(Typography, {
                variant: "body2",
                sx: {
                  color: "text.disabled"
                },
                children: "or continue with"
              })
            }), renderSocials]
          });
        }
      }
    };
  });
})();
//# sourceMappingURL=index-legacy-DtawdAgz.js.map
