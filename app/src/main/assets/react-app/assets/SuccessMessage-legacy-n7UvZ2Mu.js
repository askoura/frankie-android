;
(function () {
  System.register(['./index-legacy-vEA8K-LS.js', './use-service-legacy-Bcxdqe8R.js'], function (exports, module) {
    'use strict';

    var jsxRuntimeExports, useNavigate, Box, createSvgIcon, Typography, Button;
    return {
      setters: [module => {
        jsxRuntimeExports = module.j;
        useNavigate = module.s;
        Box = module.B;
      }, module => {
        createSvgIcon = module.f;
        Typography = module.T;
        Button = module.ap;
      }],
      execute: function execute() {
        var __vite_style__ = document.createElement('style');
        __vite_style__.textContent = "._successText_19zdx_1 {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 2rem;\n  margin: 2rem 0rem;\n  border-radius: 5px;\n  padding: 10px;\n  text-align: center;\n}\n._iconContainer_19zdx_12 {\n  background-color: #e6ffe6;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 1rem;\n  border-radius: 9999px;\n}\n";
        document.head.appendChild(__vite_style__);
        const Check = createSvgIcon( /*#__PURE__*/jsxRuntimeExports.jsx("path", {
          d: "M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"
        }), 'Check');
        const successText = "_successText_19zdx_1";
        const iconContainer = "_iconContainer_19zdx_12";
        const styles = {
          successText: successText,
          iconContainer: iconContainer
        };
        const SuccessMessage = ({
          message,
          t
        }) => {
          const navigate = useNavigate();
          return /* @__PURE__ */jsxRuntimeExports.jsxs(Box, {
            className: styles.successText,
            children: [/* @__PURE__ */jsxRuntimeExports.jsx(Box, {
              className: styles.iconContainer,
              children: /* @__PURE__ */jsxRuntimeExports.jsx(Check, {
                sx: {
                  fontSize: "40px",
                  color: "#32CD32",
                  stroke: "#32CD32",
                  strokeWidth: 1
                }
              })
            }), /* @__PURE__ */jsxRuntimeExports.jsxs(Box, {
              children: [/* @__PURE__ */jsxRuntimeExports.jsx(Typography, {
                variant: "h4",
                color: "primary",
                children: t("email.check")
              }), /* @__PURE__ */jsxRuntimeExports.jsx(Typography, {
                variant: "body1",
                mt: 1,
                color: "textSecondary",
                children: t(`${message}`)
              })]
            }), /* @__PURE__ */jsxRuntimeExports.jsx(Button, {
              onClick: () => {
                navigate("/login");
              },
              fullWidth: true,
              size: "large",
              color: "primary",
              variant: "contained",
              children: t("login.login")
            })]
          });
        };
        const SuccessMessage$1 = exports("S", SuccessMessage);
      }
    };
  });
})();
//# sourceMappingURL=SuccessMessage-legacy-n7UvZ2Mu.js.map
