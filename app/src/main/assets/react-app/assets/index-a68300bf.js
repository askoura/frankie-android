import { u as useNavigate, a as useParams, r as reactExports, p as processError, P as PROCESSED_ERRORS, j as jsxRuntimeExports, h as hostnameSubdomain, b as urlWithSubdomain } from "./index-f005e7d9.js";
import { A as AuthService } from "./AuthService-1d9bcfe7.js";
import { A as AuthWrap } from "./index-a319dc45.js";
import { u as useTranslation, B as Box } from "./common-cb721980.js";
import { C as Card } from "./Card-dc398603.js";
import "./index-e3602e78.js";
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
    const subdomain = hostnameSubdomain();
    if (subdomain === data.subdomain) {
      navigate("/");
    } else {
      window.location.replace(urlWithSubdomain(data.subdomain));
    }
  };
  reactExports.useEffect(() => {
    confirmSignup();
  }, []);
  const confirmSignup = () => {
    setLoading(true);
    AuthService.confirmSignup(token).then((data) => {
      setSuccess(true);
      setTimeout(() => {
        redirecOnSuccess(data);
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
