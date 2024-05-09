import { j as jsxRuntimeExports, s as useNavigate, u as useParams, r as reactExports, B as Box } from "./index-DqOHBPA_.js";
import { f as createSvgIcon, J as useService, E as useTranslation, K as useDispatch, O as setLoading, aq as PROCESSED_ERRORS, T as Typography } from "./use-service-B2Fih2ge.js";
import { C as Card } from "./Card-CfNjVYcu.js";
const MarkEmailRead = createSvgIcon(/* @__PURE__ */ jsxRuntimeExports.jsx("path", {
  d: "M12 19c0-3.87 3.13-7 7-7 1.08 0 2.09.25 3 .68V6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h8.08c-.05-.33-.08-.66-.08-1zM4 6l8 5 8-5v2l-8 5-8-5V6zm13.34 16-3.54-3.54 1.41-1.41 2.12 2.12 4.24-4.24L23 16.34 17.34 22z"
}), "MarkEmailRead");
const card = "_card_ubg1u_1";
const errorText = "_errorText_ubg1u_9";
const styles = {
  card,
  errorText
};
function ConfirmSignup() {
  const authService = useService("auth");
  const { t } = useTranslation("manage");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { token } = useParams();
  const [error, setError] = reactExports.useState("");
  const [success, setSuccess] = reactExports.useState(false);
  const redirecOnSuccess = (data) => {
    navigate("/");
  };
  reactExports.useEffect(() => {
    confirmSignup();
  }, []);
  const confirmSignup = () => {
    dispatch(setLoading(true));
    authService.confirmSignup(token).then((data) => {
      setSuccess(true);
      setTimeout(() => {
        redirecOnSuccess();
      }, 1e4);
    }).catch((processedError) => {
      if (processedError.name == PROCESSED_ERRORS.USED_CONFIRMATION_TOKEN.name || processedError.name == PROCESSED_ERRORS.EXPIRED_CONFIRMATION_TOKEN.name) {
        setError(processed);
      }
    }).finally(() => {
      dispatch(setLoading(false));
    });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Box,
    {
      sx: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "calc(100vh - 80px)",
        overflow: "auto",
        width: "100vw",
        backgroundColor: "#f7f8fc"
      },
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: styles.card, children: [
        success && /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Box,
          {
            sx: {
              display: "flex",
              flexDirection: "column",
              gap: "3rem",
              alignItems: "center"
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(MarkEmailRead, { sx: { fontSize: "5rem", color: "#181735" } }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "h5", fontWeight: "600", children: t("confirm_signup.success") }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "subtitle1", children: t("confirm_signup.info") })
            ]
          }
        ),
        error && /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { className: styles.errorText, children: t("processed_errors.".concat(error)) })
      ] })
    }
  );
}
export {
  ConfirmSignup as default
};
//# sourceMappingURL=index-CaOWXD6i.js.map
