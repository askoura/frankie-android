;
(function () {
  System.register(['./index-legacy-c8bd5c71.js', './AuthService-legacy-a5f81c75.js', './common-legacy-b23c7771.js', './index-legacy-ec319b02.js', './common-legacy-fa39557a.js', './Card-legacy-a455f8db.js', './index-legacy-4a348273.js'], function (exports, module) {
    'use strict';

    var __vite_style__ = document.createElement('style');
    __vite_style__.textContent = "._card_1seyg_1 {\n  padding: 20px;\n  max-width: 400px;\n  width: 100%;\n  text-align: center;\n}\n\n._errorText_1seyg_8 {\n  color: #eb5757;\n}\n";
    document.head.appendChild(__vite_style__);
    var useNavigate, useParams, reactExports, processError, PROCESSED_ERRORS, jsxRuntimeExports, AuthService, hostnameSubdomain, urlWithSubdomain, AuthWrap, useTranslation, Box, Card;
    return {
      setters: [module => {
        useNavigate = module.u;
        useParams = module.a;
        reactExports = module.r;
        processError = module.p;
        PROCESSED_ERRORS = module.P;
        jsxRuntimeExports = module.j;
      }, module => {
        AuthService = module.A;
      }, module => {
        hostnameSubdomain = module.h;
        urlWithSubdomain = module.u;
      }, module => {
        AuthWrap = module.A;
      }, module => {
        useTranslation = module.u;
        Box = module.B;
      }, module => {
        Card = module.C;
      }, null],
      execute: function () {
        exports('default', ConfirmSignup);
        const card = "_card_1seyg_1";
        const errorText = "_errorText_1seyg_8";
        const styles = {
          card: card,
          errorText: errorText
        };
        function ConfirmSignup() {
          const {
            t
          } = useTranslation("manage");
          const navigate = useNavigate();
          const {
            token
          } = useParams();
          const [loading, setLoading] = reactExports.useState(false);
          const [processedError, setProcessedError] = reactExports.useState("");
          const [success, setSuccess] = reactExports.useState(false);
          const [showError, setShowError] = reactExports.useState(false);
          const redirecOnSuccess = data => {
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
            AuthService.confirmSignup(token).then(data => {
              setSuccess(true);
              setTimeout(() => {
                redirecOnSuccess(data);
              }, 1e4);
            }).catch(e => {
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
          return /* @__PURE__ */jsxRuntimeExports.jsx(AuthWrap, {
            loading,
            showError,
            processedError,
            handleClose: () => setShowError(false),
            children: /* @__PURE__ */jsxRuntimeExports.jsxs(Card, {
              className: styles.card,
              children: [success && t("confirm_signup.success"), processedError && /* @__PURE__ */jsxRuntimeExports.jsx(Box, {
                className: styles.errorText,
                children: t(`processed_errors.${processedError}`)
              })]
            })
          });
        }
      }
    };
  });
})();
