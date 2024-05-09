import { s as useNavigate, j as jsxRuntimeExports } from "./index-DqOHBPA_.js";
import { c as create$3, a as create$6, L as LoadingButton, o } from "./yup-D0NbELJS.js";
import { u as useForm, r as routes, F as FormProvider, R as RHFTextField, I as Iconify } from "./Web-DdmaLZWw.js";
import { u as useBoolean } from "./use-boolean-KHb5Ffg4.js";
import { J as useService, E as useTranslation, K as useDispatch, O as setLoading, T as Typography, aH as Stack, I as IconButton, aq as PROCESSED_ERRORS } from "./use-service-B2Fih2ge.js";
import { G as GoogleOAuthProvider, a as GoogleLogin } from "./index.esm-BydTS_lJ.js";
import { R as RouterLink } from "./router-link-Ch5XuWHI.js";
import { L as Link } from "./Link-DhG8SfhC.js";
import { I as InputAdornment } from "./DatePicker-9Pk1EwA1.js";
import { D as Divider } from "./Divider-DUpnd__V.js";
import "./Checkbox-47V_54xr.js";
import "./SwitchBase-rlcQTk7F.js";
import "./radioClasses-D8j8JIb8.js";
import "./tableRowClasses-vPBqZyH3.js";
import "./FormControlLabel-BnMNrqju.js";
import "./TextField-Fj584c9C.js";
import "./Grid-nW54Jdfg.js";
function LoginView() {
  const authService = useService("auth");
  const { t } = useTranslation("manage");
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
  const {
    setError,
    reset,
    handleSubmit,
    formState: { isSubmitting }
  } = methods;
  const handleError = (processedError) => {
    if (processedError.name == PROCESSED_ERRORS.WRONG_CREDENTIALS.name) {
      setError("email", {
        type: "manual",
        message: t("processed_errors.".concat(processedError.name))
      });
      setError("password", {
        type: "manual",
        message: t("processed_errors.".concat(processedError.name))
      });
    }
  };
  const onSubmit = handleSubmit(async (data) => {
    dispatch(setLoading(true));
    try {
      await authService.login(data.email, data.password);
      const { from } = location.state || { from: { pathname: "/" } };
      navigate(from);
    } catch (e) {
      handleError(e);
    } finally {
      dispatch(setLoading(false));
    }
  });
  const onGoogleAuthSuccess = (credentialResponse) => {
    dispatch(setLoading(true));
    authService.googleSignIn(credentialResponse).then((data) => {
      const { from } = location.state || { from: { pathname: "/" } };
      navigate(from);
    }).catch((e) => {
      handleError(e);
    }).finally(() => {
      dispatch(setLoading(false));
    });
  };
  const renderHead = /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "h3", paragraph: true, children: t("login.login") }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Typography, { variant: "body2", sx: { color: "text.secondary" }, children: [
      t("login.dont_have_acc"),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Link,
        {
          component: RouterLink,
          href: routes.signup,
          variant: "subtitle2",
          color: "primary",
          children: [
            " ",
            t("sign_up.get_started")
          ]
        }
      )
    ] })
  ] });
  const renderSocials = /* @__PURE__ */ jsxRuntimeExports.jsx(Stack, { direction: "row", justifyContent: "center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    GoogleOAuthProvider,
    {
      clientId: "464768435207-e2rkf9h0fjbcnhh2egkj3e9bkvub2p4o.apps.googleusercontent.com",
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        GoogleLogin,
        {
          onSuccess: onGoogleAuthSuccess,
          onError: () => {
            console.log("Login Failed");
          }
        }
      )
    }
  ) });
  const renderForm = /* @__PURE__ */ jsxRuntimeExports.jsx(FormProvider, { methods, onSubmit: handleSubmit(onSubmit), children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { spacing: 2.5, alignItems: "flex-end", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(RHFTextField, { name: "email", label: t("label.email") }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      RHFTextField,
      {
        name: "password",
        label: t("label.password"),
        type: passwordShow.value ? "text" : "password",
        InputProps: {
          endAdornment: /* @__PURE__ */ jsxRuntimeExports.jsx(InputAdornment, { position: "end", children: /* @__PURE__ */ jsxRuntimeExports.jsx(IconButton, { onClick: passwordShow.onToggle, edge: "end", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            Iconify,
            {
              icon: passwordShow.value ? "carbon:view" : "carbon:view-off"
            }
          ) }) })
        }
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Link,
      {
        component: RouterLink,
        href: "/forgot-password",
        variant: "body2",
        underline: "always",
        color: "text.secondary",
        children: t("login.forgot_password")
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      LoadingButton,
      {
        fullWidth: true,
        color: "primary",
        size: "large",
        type: "submit",
        variant: "contained",
        loading: isSubmitting,
        children: t("login.login")
      }
    )
  ] }) });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    renderHead,
    renderForm,
    /* @__PURE__ */ jsxRuntimeExports.jsx(Divider, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", sx: { color: "text.disabled" }, children: "or continue with" }) }),
    renderSocials
  ] });
}
export {
  LoginView as default
};
//# sourceMappingURL=index-BVxs7-Fz.js.map
