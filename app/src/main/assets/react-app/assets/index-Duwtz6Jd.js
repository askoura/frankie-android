import { s as useNavigate, A as useSearchParams, u as useParams, j as jsxRuntimeExports } from "./index-DqOHBPA_.js";
import { c as create$3, a as create$6, b as create$9, L as LoadingButton, o } from "./yup-D0NbELJS.js";
import { u as useForm, F as FormProvider, R as RHFTextField, I as Iconify, r as routes } from "./Web-DdmaLZWw.js";
import { R as RouterLink } from "./router-link-Ch5XuWHI.js";
import { J as useService, E as useTranslation, K as useDispatch, p as useTheme, O as setLoading, aH as Stack, aG as Image, T as Typography, I as IconButton } from "./use-service-B2Fih2ge.js";
import { u as useBoolean } from "./use-boolean-KHb5Ffg4.js";
import { I as InputAdornment } from "./DatePicker-9Pk1EwA1.js";
import { L as Link } from "./Link-DhG8SfhC.js";
import "./Checkbox-47V_54xr.js";
import "./SwitchBase-rlcQTk7F.js";
import "./radioClasses-D8j8JIb8.js";
import "./tableRowClasses-vPBqZyH3.js";
import "./FormControlLabel-BnMNrqju.js";
import "./TextField-Fj584c9C.js";
import "./Grid-nW54Jdfg.js";
function ResetPasswordView({ confirmNewUser = false }) {
  const authService = useService("auth");
  const { t } = useTranslation("manage");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const theme = useTheme();
  const passwordShow = useBoolean();
  const [searchParams] = useSearchParams();
  const { token } = useParams();
  const refreshToken = searchParams.get("token");
  const ResetPasswordSchema = create$3().shape({
    password: create$6().required(t("password_required")).matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/,
      t("error.invalid_password")
    ),
    confirmPassword: create$6().required(t("password_required")).oneOf([create$9("password")], t("error.password_should_match"))
  });
  const defaultValues = {
    email: ""
  };
  const methods = useForm({
    resolver: o(ResetPasswordSchema),
    defaultValues
  });
  const {
    reset,
    handleSubmit,
    formState: { isSubmitting }
  } = methods;
  console.log(isSubmitting);
  const onSubmit = handleSubmit(async (data) => {
    try {
      await authService.resetPassword(
        confirmNewUser,
        confirmNewUser ? token : refreshToken,
        data.password
      );
      navigate("/");
    } catch (processedError) {
    } finally {
      dispatch(setLoading(false));
    }
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    Stack,
    {
      alignItems: "center",
      justifyContent: "center",
      sx: {
        px: 2,
        py: 12,
        minHeight: "100vh"
      },
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        Stack,
        {
          spacing: 4,
          sx: {
            p: 4,
            width: 1,
            mx: "auto",
            flexShrink: 0,
            maxWidth: 400,
            borderRadius: 2,
            bgcolor: "background.default",
            boxShadow: theme.customShadows.z24,
            textAlign: { xs: "center", md: "left" }
          },
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { sx: { textAlign: "center" }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Image,
              {
                alt: "reset password",
                src: "/ic_lock_password.svg",
                sx: { mb: 5, width: 96, height: 96, mx: "auto" }
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "h3", paragraph: true, children: t("reset_password.title") }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(FormProvider, { methods, onSubmit: handleSubmit(onSubmit), children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { spacing: 2.5, children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  RHFTextField,
                  {
                    name: "password",
                    label: t("label.new_password"),
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
                )
              ] }),
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
                  children: t("reset_password.reset")
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
          ] })
        }
      )
    }
  ) });
}
export {
  ResetPasswordView as default
};
//# sourceMappingURL=index-Duwtz6Jd.js.map
