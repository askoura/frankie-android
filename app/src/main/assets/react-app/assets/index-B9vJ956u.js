import { r as reactExports, s as useNavigate, j as jsxRuntimeExports } from "./index-DqOHBPA_.js";
import { c as create$3, a as create$6, L as LoadingButton, o } from "./yup-D0NbELJS.js";
import { u as useForm, F as FormProvider, R as RHFTextField, r as routes, I as Iconify } from "./Web-DdmaLZWw.js";
import { R as RouterLink } from "./router-link-Ch5XuWHI.js";
import { J as useService, E as useTranslation, K as useDispatch, O as setLoading, aH as Stack, aG as Image, T as Typography } from "./use-service-B2Fih2ge.js";
import { S as SuccessMessage } from "./SuccessMessage-DR-bXBJ0.js";
import { L as Link } from "./Link-DhG8SfhC.js";
import "./Checkbox-47V_54xr.js";
import "./SwitchBase-rlcQTk7F.js";
import "./DatePicker-9Pk1EwA1.js";
import "./Grid-nW54Jdfg.js";
import "./radioClasses-D8j8JIb8.js";
import "./tableRowClasses-vPBqZyH3.js";
import "./FormControlLabel-BnMNrqju.js";
import "./TextField-Fj584c9C.js";
function ForgotPasswordView() {
  const authService = useService("auth");
  const { t } = useTranslation("manage");
  const [isSuccess, setSuccess] = reactExports.useState(false);
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
  const {
    reset,
    handleSubmit,
    formState: { isSubmitting }
  } = methods;
  const onSubmit = handleSubmit(async (data) => {
    try {
      dispatch(setLoading(true));
      await authService.forgotPassword(data.email);
      setSuccess(true);
    } catch (e) {
    } finally {
      dispatch(setLoading(false));
    }
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: isSuccess ? /* @__PURE__ */ jsxRuntimeExports.jsx(SuccessMessage, { t, message: "forgot_password.success" }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { sx: { textAlign: "center" }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Image,
      {
        alt: "reset password",
        src: "/ic_lock_password.svg",
        sx: { mb: 5, width: 96, height: 96, mx: "auto" }
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "h3", paragraph: true, children: t("forgot_password.title") }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", color: "textSecondary", mb: 5, children: t("forgot_password.helper_text") }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(FormProvider, { methods, onSubmit: handleSubmit(onSubmit), children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        RHFTextField,
        {
          name: "email",
          hiddenLabel: true,
          placeholder: "Email address"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        LoadingButton,
        {
          fullWidth: true,
          size: "large",
          color: "primary",
          type: "submit",
          variant: "contained",
          loading: isSubmitting,
          sx: { mt: 2.5 },
          children: t("forgot_password.send")
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Link,
      {
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
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "carbon:chevron-left", width: 16, sx: { mr: 1 } }),
          t("forgot_password.return_to_signin")
        ]
      }
    )
  ] }) });
}
export {
  ForgotPasswordView as default
};
//# sourceMappingURL=index-B9vJ956u.js.map
