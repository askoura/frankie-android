import { s as useNavigate, r as reactExports, j as jsxRuntimeExports } from "./index-DqOHBPA_.js";
import { d as addMethod, c as create$3, a as create$6, b as create$9, L as LoadingButton, o } from "./yup-D0NbELJS.js";
import { u as useForm, r as routes, F as FormProvider, R as RHFTextField, I as Iconify } from "./Web-DdmaLZWw.js";
import { R as RouterLink } from "./router-link-Ch5XuWHI.js";
import { J as useService, E as useTranslation, K as useDispatch, O as setLoading, aq as PROCESSED_ERRORS, T as Typography, aH as Stack, I as IconButton } from "./use-service-B2Fih2ge.js";
import { u as useBoolean } from "./use-boolean-KHb5Ffg4.js";
import { G as GoogleOAuthProvider, a as GoogleLogin } from "./index.esm-BydTS_lJ.js";
import { S as SuccessMessage } from "./SuccessMessage-DR-bXBJ0.js";
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
function SignUpView() {
  const authService = useService("auth");
  const { t } = useTranslation("manage");
  const passwordShow = useBoolean();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isSuccess, setSuccess] = reactExports.useState(false);
  addMethod(create$6, "noWhitespace", function(errorMessage) {
    return this.test("no-whitespace", errorMessage, function(value) {
      const { path, createError } = this;
      return (value == null ? void 0 : value.trim()) ? true : createError({ path, message: errorMessage });
    });
  });
  const RegisterSchema = create$3().shape({
    firstName: create$6().required(t("firstname_required")).noWhitespace(t("error.invalid_first_name")).matches(/^[A-Za-z]+$/, t("error.invalid_first_name")),
    lastName: create$6().required(t("lastname_required")).noWhitespace(t("error.invalid_last_name")).matches(/^[A-Za-z]+$/, t("error.invalid_last_name")),
    email: create$6().required(t("email_required")).email(t("error.invalid_email")),
    password: create$6().required(t("password_required")).matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/,
      t("error.invalid_password")
    ),
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
  const {
    setError,
    reset,
    handleSubmit,
    formState: { isSubmitting }
  } = methods;
  const onSubmit = handleSubmit(async (data) => {
    try {
      let model = {
        email: data.email,
        password: data.password,
        lastName: data.lastName,
        firstName: data.firstName
      };
      dispatch(setLoading(true));
      await authService.signup(model);
      setSuccess(true);
    } catch (processedError) {
      if (processedError.name == PROCESSED_ERRORS.DUPLICATE_EMAIL.name) {
        setError("email", {
          type: "manual",
          message: t("processed_errors.".concat(processedError.name))
        });
      }
    } finally {
      dispatch(setLoading(false));
    }
  });
  const onGoogleAuthSuccess = (credentialResponse) => {
    dispatch(setLoading(true));
    authService.googleSignIn(credentialResponse, dispatch).then((data) => {
      const { from } = location.state || { from: { pathname: "/" } };
      navigate(from);
    }).catch((e) => {
    }).finally(() => {
      dispatch(setLoading(false));
    });
  };
  const renderHead = /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "h3", paragraph: true, children: t("sign_up.get_started") }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Typography, { variant: "body2", sx: { color: "text.secondary" }, children: [
      t("sign_up.have_account"),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Link,
        {
          component: RouterLink,
          href: routes.login,
          variant: "subtitle2",
          color: "primary",
          children: [
            " ",
            t("login.login")
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
  const renderForm = /* @__PURE__ */ jsxRuntimeExports.jsx(FormProvider, { methods, onSubmit: handleSubmit(onSubmit), children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { spacing: 2.5, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(RHFTextField, { name: "firstName", label: t("label.first_name") }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(RHFTextField, { name: "lastName", label: t("label.last_name") }),
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
      RHFTextField,
      {
        name: "confirmPassword",
        label: t("label.confirm_new_password"),
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
      LoadingButton,
      {
        fullWidth: true,
        color: "primary",
        size: "large",
        type: "submit",
        variant: "contained",
        loading: isSubmitting,
        children: t("sign_up.sign_up")
      }
    )
  ] }) });
  return /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: isSuccess ? /* @__PURE__ */ jsxRuntimeExports.jsx(SuccessMessage, { t, message: "sign_up.success" }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    renderHead,
    renderForm,
    /* @__PURE__ */ jsxRuntimeExports.jsx(Divider, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", sx: { color: "text.disabled" }, children: "or continue with" }) }),
    renderSocials
  ] }) });
}
export {
  SignUpView as default
};
//# sourceMappingURL=index-BaTY5N3H.js.map
