;
(function () {
  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
  function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
  System.register(['./index-legacy-vEA8K-LS.js', './yup-legacy-DfFsT9pC.js', './Web-legacy-BheMkDx6.js', './router-link-legacy-DKg-tKvm.js', './use-service-legacy-Bcxdqe8R.js', './use-boolean-legacy-C6g09uI5.js', './index.esm-legacy-BUdeLy2v.js', './SuccessMessage-legacy-n7UvZ2Mu.js', './Link-legacy-HyZ4K89i.js', './DatePicker-legacy-BnaJqr5R.js', './Divider-legacy-DjNNgC-t.js', './Checkbox-legacy-DVZrBJdJ.js', './SwitchBase-legacy-CDK6BOac.js', './radioClasses-legacy-Dh2-Btlo.js', './tableRowClasses-legacy-vYv7lYPf.js', './FormControlLabel-legacy-CId-AnH7.js', './TextField-legacy-Dx6AYM0D.js', './Grid-legacy-Dnj6MD-w.js'], function (exports, module) {
    'use strict';

    var useNavigate, reactExports, jsxRuntimeExports, addMethod, create$3, create$6, create$9, LoadingButton, o, useForm, routes, FormProvider, RHFTextField, Iconify, RouterLink, useService, useTranslation, useDispatch, setLoading, PROCESSED_ERRORS, Typography, Stack, IconButton, useBoolean, GoogleOAuthProvider, GoogleLogin, SuccessMessage, Link, InputAdornment, Divider;
    return {
      setters: [module => {
        useNavigate = module.s;
        reactExports = module.r;
        jsxRuntimeExports = module.j;
      }, module => {
        addMethod = module.d;
        create$3 = module.c;
        create$6 = module.a;
        create$9 = module.b;
        LoadingButton = module.L;
        o = module.o;
      }, module => {
        useForm = module.u;
        routes = module.r;
        FormProvider = module.F;
        RHFTextField = module.R;
        Iconify = module.I;
      }, module => {
        RouterLink = module.R;
      }, module => {
        useService = module.J;
        useTranslation = module.E;
        useDispatch = module.K;
        setLoading = module.O;
        PROCESSED_ERRORS = module.aq;
        Typography = module.T;
        Stack = module.aH;
        IconButton = module.I;
      }, module => {
        useBoolean = module.u;
      }, module => {
        GoogleOAuthProvider = module.G;
        GoogleLogin = module.a;
      }, module => {
        SuccessMessage = module.S;
      }, module => {
        Link = module.L;
      }, module => {
        InputAdornment = module.I;
      }, module => {
        Divider = module.D;
      }, null, null, null, null, null, null, null],
      execute: function execute() {
        exports("default", SignUpView);
        function SignUpView() {
          const authService = useService("auth");
          const _useTranslation = useTranslation("manage"),
            t = _useTranslation.t;
          const passwordShow = useBoolean();
          const dispatch = useDispatch();
          const navigate = useNavigate();
          const _reactExports$useStat = reactExports.useState(false),
            _reactExports$useStat2 = _slicedToArray(_reactExports$useStat, 2),
            isSuccess = _reactExports$useStat2[0],
            setSuccess = _reactExports$useStat2[1];
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
          const RegisterSchema = create$3().shape({
            firstName: create$6().required(t("firstname_required")).noWhitespace(t("error.invalid_first_name")).matches(/^[A-Za-z]+$/, t("error.invalid_first_name")),
            lastName: create$6().required(t("lastname_required")).noWhitespace(t("error.invalid_last_name")).matches(/^[A-Za-z]+$/, t("error.invalid_last_name")),
            email: create$6().required(t("email_required")).email(t("error.invalid_email")),
            password: create$6().required(t("password_required")).matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/, t("error.invalid_password")),
            confirmPassword: create$6().required(t("password_required")).oneOf([create$9("password")], t("error.password_should_match"))
          });
          const defaultValues = {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            confirmPassword: ""
          };
          const methods = useForm({
            resolver: o(RegisterSchema),
            defaultValues
          });
          const setError = methods.setError,
            reset = methods.reset,
            handleSubmit = methods.handleSubmit,
            isSubmitting = methods.formState.isSubmitting;
          const onSubmit = handleSubmit( /*#__PURE__*/function () {
            var _ref = _asyncToGenerator(function* (data) {
              try {
                let model = {
                  email: data.email,
                  password: data.password,
                  lastName: data.lastName,
                  firstName: data.firstName
                };
                dispatch(setLoading(true));
                yield authService.signup(model);
                setSuccess(true);
              } catch (processedError) {
                if (processedError.name == PROCESSED_ERRORS.DUPLICATE_EMAIL.name) {
                  setError("email", {
                    type: "manual",
                    message: t(`processed_errors.${processedError.name}`)
                  });
                }
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
            authService.googleSignIn(credentialResponse, dispatch).then(data => {
              const _ref2 = location.state || {
                  from: {
                    pathname: "/"
                  }
                },
                from = _ref2.from;
              navigate(from);
            }).catch(e => {}).finally(() => {
              dispatch(setLoading(false));
            });
          };
          const renderHead = /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
            children: [/* @__PURE__ */jsxRuntimeExports.jsx(Typography, {
              variant: "h3",
              paragraph: true,
              children: t("sign_up.get_started")
            }), /* @__PURE__ */jsxRuntimeExports.jsxs(Typography, {
              variant: "body2",
              sx: {
                color: "text.secondary"
              },
              children: [t("sign_up.have_account"), /* @__PURE__ */jsxRuntimeExports.jsxs(Link, {
                component: RouterLink,
                href: routes.login,
                variant: "subtitle2",
                color: "primary",
                children: [" ", t("login.login")]
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
              children: [/* @__PURE__ */jsxRuntimeExports.jsx(RHFTextField, {
                name: "firstName",
                label: t("label.first_name")
              }), /* @__PURE__ */jsxRuntimeExports.jsx(RHFTextField, {
                name: "lastName",
                label: t("label.last_name")
              }), /* @__PURE__ */jsxRuntimeExports.jsx(RHFTextField, {
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
              }), /* @__PURE__ */jsxRuntimeExports.jsx(RHFTextField, {
                name: "confirmPassword",
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
              }), /* @__PURE__ */jsxRuntimeExports.jsx(LoadingButton, {
                fullWidth: true,
                color: "primary",
                size: "large",
                type: "submit",
                variant: "contained",
                loading: isSubmitting,
                children: t("sign_up.sign_up")
              })]
            })
          });
          return /* @__PURE__ */jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, {
            children: isSuccess ? /* @__PURE__ */jsxRuntimeExports.jsx(SuccessMessage, {
              t,
              message: "sign_up.success"
            }) : /* @__PURE__ */jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
              children: [renderHead, renderForm, /* @__PURE__ */jsxRuntimeExports.jsx(Divider, {
                children: /* @__PURE__ */jsxRuntimeExports.jsx(Typography, {
                  variant: "body2",
                  sx: {
                    color: "text.disabled"
                  },
                  children: "or continue with"
                })
              }), renderSocials]
            })
          });
        }
      }
    };
  });
})();
//# sourceMappingURL=index-legacy-DVMGzhN3.js.map
