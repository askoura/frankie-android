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
  System.register(['./index-legacy-vEA8K-LS.js', './yup-legacy-DfFsT9pC.js', './Web-legacy-BheMkDx6.js', './router-link-legacy-DKg-tKvm.js', './use-service-legacy-Bcxdqe8R.js', './SuccessMessage-legacy-n7UvZ2Mu.js', './Link-legacy-HyZ4K89i.js', './Checkbox-legacy-DVZrBJdJ.js', './SwitchBase-legacy-CDK6BOac.js', './DatePicker-legacy-BnaJqr5R.js', './Grid-legacy-Dnj6MD-w.js', './radioClasses-legacy-Dh2-Btlo.js', './tableRowClasses-legacy-vYv7lYPf.js', './FormControlLabel-legacy-CId-AnH7.js', './TextField-legacy-Dx6AYM0D.js'], function (exports, module) {
    'use strict';

    var reactExports, useNavigate, jsxRuntimeExports, create$3, create$6, LoadingButton, o, useForm, FormProvider, RHFTextField, routes, Iconify, RouterLink, useService, useTranslation, useDispatch, setLoading, Stack, Image, Typography, SuccessMessage, Link;
    return {
      setters: [module => {
        reactExports = module.r;
        useNavigate = module.s;
        jsxRuntimeExports = module.j;
      }, module => {
        create$3 = module.c;
        create$6 = module.a;
        LoadingButton = module.L;
        o = module.o;
      }, module => {
        useForm = module.u;
        FormProvider = module.F;
        RHFTextField = module.R;
        routes = module.r;
        Iconify = module.I;
      }, module => {
        RouterLink = module.R;
      }, module => {
        useService = module.J;
        useTranslation = module.E;
        useDispatch = module.K;
        setLoading = module.O;
        Stack = module.aH;
        Image = module.aG;
        Typography = module.T;
      }, module => {
        SuccessMessage = module.S;
      }, module => {
        Link = module.L;
      }, null, null, null, null, null, null, null, null],
      execute: function execute() {
        exports("default", ForgotPasswordView);
        function ForgotPasswordView() {
          const authService = useService("auth");
          const _useTranslation = useTranslation("manage"),
            t = _useTranslation.t;
          const _reactExports$useStat = reactExports.useState(false),
            _reactExports$useStat2 = _slicedToArray(_reactExports$useStat, 2),
            isSuccess = _reactExports$useStat2[0],
            setSuccess = _reactExports$useStat2[1];
          const dispatch = useDispatch();
          useNavigate();
          const ForgotPasswordSchema = create$3().shape({
            email: create$6().required("Email is required").email("Email must be a valid email address")
          });
          const defaultValues = {
            email: ""
          };
          const methods = useForm({
            resolver: o(ForgotPasswordSchema),
            defaultValues
          });
          const reset = methods.reset,
            handleSubmit = methods.handleSubmit,
            isSubmitting = methods.formState.isSubmitting;
          const onSubmit = handleSubmit( /*#__PURE__*/function () {
            var _ref = _asyncToGenerator(function* (data) {
              try {
                dispatch(setLoading(true));
                yield authService.forgotPassword(data.email);
                setSuccess(true);
              } catch (e) {} finally {
                dispatch(setLoading(false));
              }
            });
            return function (_x) {
              return _ref.apply(this, arguments);
            };
          }());
          return /* @__PURE__ */jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, {
            children: isSuccess ? /* @__PURE__ */jsxRuntimeExports.jsx(SuccessMessage, {
              t,
              message: "forgot_password.success"
            }) : /* @__PURE__ */jsxRuntimeExports.jsxs(Stack, {
              sx: {
                textAlign: "center"
              },
              children: [/* @__PURE__ */jsxRuntimeExports.jsx(Image, {
                alt: "reset password",
                src: "/ic_lock_password.svg",
                sx: {
                  mb: 5,
                  width: 96,
                  height: 96,
                  mx: "auto"
                }
              }), /* @__PURE__ */jsxRuntimeExports.jsx(Typography, {
                variant: "h3",
                paragraph: true,
                children: t("forgot_password.title")
              }), /* @__PURE__ */jsxRuntimeExports.jsx(Typography, {
                variant: "body2",
                color: "textSecondary",
                mb: 5,
                children: t("forgot_password.helper_text")
              }), /* @__PURE__ */jsxRuntimeExports.jsxs(FormProvider, {
                methods,
                onSubmit: handleSubmit(onSubmit),
                children: [/* @__PURE__ */jsxRuntimeExports.jsx(RHFTextField, {
                  name: "email",
                  hiddenLabel: true,
                  placeholder: "Email address"
                }), /* @__PURE__ */jsxRuntimeExports.jsx(LoadingButton, {
                  fullWidth: true,
                  size: "large",
                  color: "primary",
                  type: "submit",
                  variant: "contained",
                  loading: isSubmitting,
                  sx: {
                    mt: 2.5
                  },
                  children: t("forgot_password.send")
                })]
              }), /* @__PURE__ */jsxRuntimeExports.jsxs(Link, {
                component: RouterLink,
                href: routes.login,
                color: "inherit",
                variant: "subtitle2",
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
                }), t("forgot_password.return_to_signin")]
              })]
            })
          });
        }
      }
    };
  });
})();
//# sourceMappingURL=index-legacy-DeMB6oIm.js.map
