import { j as jsxRuntimeExports, s as useNavigate, B as Box } from "./index-DqOHBPA_.js";
import { f as createSvgIcon, T as Typography, ap as Button } from "./use-service-B2Fih2ge.js";
const Check = createSvgIcon(/* @__PURE__ */ jsxRuntimeExports.jsx("path", {
  d: "M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"
}), "Check");
const successText = "_successText_19zdx_1";
const iconContainer = "_iconContainer_19zdx_12";
const styles = {
  successText,
  iconContainer
};
const SuccessMessage = ({ message, t }) => {
  const navigate = useNavigate();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { className: styles.successText, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { className: styles.iconContainer, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Check,
      {
        sx: {
          fontSize: "40px",
          color: "#32CD32",
          stroke: "#32CD32",
          strokeWidth: 1
        }
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "h4", color: "primary", children: t("email.check") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body1", mt: 1, color: "textSecondary", children: t("".concat(message)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Button,
      {
        onClick: () => {
          navigate("/login");
        },
        fullWidth: true,
        size: "large",
        color: "primary",
        variant: "contained",
        children: t("login.login")
      }
    )
  ] });
};
const SuccessMessage$1 = SuccessMessage;
export {
  SuccessMessage$1 as S
};
//# sourceMappingURL=SuccessMessage-DR-bXBJ0.js.map
