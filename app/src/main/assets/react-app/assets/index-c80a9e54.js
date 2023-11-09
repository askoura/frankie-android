import { u as useTranslation, a as useNavigate, i as useDispatch, k as useParams, r as reactExports, s as setLoading, A as AuthService, o as onApiError, j as jsxRuntimeExports, C as Card, B as Box, l as onError, P as PROCESSED_ERRORS } from "./index-4408a88f.js";
const card = "_card_1seyg_1";
const errorText = "_errorText_1seyg_8";
const styles = {
  card,
  errorText
};
function ConfirmSignup() {
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
    AuthService.confirmSignup(token).then((data) => {
      setSuccess(true);
      setTimeout(() => {
        redirecOnSuccess();
      }, 1e4);
    }).catch((e) => {
      onApiError({
        error: e,
        globalErrorHandler: (processedError) => {
          dispatch(onError(processedError));
        },
        locallErrorHandler: (processedError) => {
          if (processedError.name == PROCESSED_ERRORS.USED_CONFIRMATION_TOKEN.name || processedError.name == PROCESSED_ERRORS.EXPIRED_CONFIRMATION_TOKEN.name) {
            setError(processed);
          }
        }
      });
    }).finally(() => {
      dispatch(setLoading(false));
    });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: styles.card, children: [
    success && t("confirm_signup.success"),
    error && /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { className: styles.errorText, children: t(`processed_errors.${error}`) })
  ] });
}
export {
  ConfirmSignup as default
};
//# sourceMappingURL=index-c80a9e54.js.map
