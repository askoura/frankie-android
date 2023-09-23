import { u as useTranslation, a as useNavigate, i as useParams, r as reactExports, A as AuthService, p as processError, P as PROCESSED_ERRORS, j as jsxRuntimeExports, C as Card, B as Box } from "./index-64b69271.js";
import { A as AuthWrap } from "./index-3a2b1ffe.js";
const card = "_card_1seyg_1";
const errorText = "_errorText_1seyg_8";
const styles = {
  card,
  errorText
};
function ConfirmSignup() {
  const { t } = useTranslation("manage");
  const navigate = useNavigate();
  const { token } = useParams();
  const [loading, setLoading] = reactExports.useState(false);
  const [processedError, setProcessedError] = reactExports.useState("");
  const [success, setSuccess] = reactExports.useState(false);
  const [showError, setShowError] = reactExports.useState(false);
  const redirecOnSuccess = (data) => {
    navigate("/");
  };
  reactExports.useEffect(() => {
    confirmSignup();
  }, []);
  const confirmSignup = () => {
    setLoading(true);
    AuthService.confirmSignup(token).then((data) => {
      setSuccess(true);
      setTimeout(() => {
        redirecOnSuccess();
      }, 1e4);
    }).catch((e) => {
      setSuccess(false);
      const processed = processError(e);
      switch (processed) {
        case PROCESSED_ERRORS.NETWORK_ERR:
        case PROCESSED_ERRORS.BACKEND_DOWN:
          setShowError(true);
          setProcessedError(processed);
          break;
        case PROCESSED_ERRORS.USED_CONFIRMATION_TOKEN:
        case PROCESSED_ERRORS.EXPIRED_CONFIRMATION_TOKEN:
          setProcessedError(processed);
          break;
      }
    }).finally(() => {
      setLoading(false);
    });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    AuthWrap,
    {
      loading,
      showError,
      processedError,
      handleClose: () => setShowError(false),
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: styles.card, children: [
        success && t("confirm_signup.success"),
        processedError && /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { className: styles.errorText, children: t(`processed_errors.${processedError}`) })
      ] })
    }
  );
}
export {
  ConfirmSignup as default
};
//# sourceMappingURL=index-f19655fe.js.map
