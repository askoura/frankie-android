;
(function () {
  System.register(['./index-legacy-vEA8K-LS.js', './use-service-legacy-Bcxdqe8R.js'], function (exports, module) {
    'use strict';

    var jsxRuntimeExports, Box, useTranslation, Modal, Typography, Button;
    return {
      setters: [module => {
        jsxRuntimeExports = module.j;
        Box = module.B;
      }, module => {
        useTranslation = module.E;
        Modal = module.ao;
        Typography = module.T;
        Button = module.ap;
      }],
      execute: function execute() {
        var __vite_style__ = document.createElement('style');
        __vite_style__.textContent = "._wrapper_d86h8_1 {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  background: #ffffff;\n  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);\n  border-radius: 8px;\n  padding: 20px;\n}\n\n._action_d86h8_12{\n  text-align: end;\n  margin-top: 16px;\n}\n";
        document.head.appendChild(__vite_style__);
        const wrapper = "_wrapper_d86h8_1";
        const action = "_action_d86h8_12";
        const styles = {
          wrapper: wrapper,
          action: action
        };
        const UserDelete = exports("U", ({
          open,
          onClose,
          deleteUser,
          name
        }) => {
          const _useTranslation = useTranslation("manage"),
            t = _useTranslation.t;
          return /* @__PURE__ */jsxRuntimeExports.jsx(Modal, {
            sx: {
              ".MuiBackdrop-root": {
                backgroundColor: "rgba(0, 0, 0, 0.3)"
              }
            },
            open,
            onClose,
            "aria-labelledby": "modal-modal-title",
            "aria-describedby": "modal-modal-description",
            children: /* @__PURE__ */jsxRuntimeExports.jsxs(Box, {
              className: styles.wrapper,
              children: [/* @__PURE__ */jsxRuntimeExports.jsx(Typography, {
                children: t("users_manage.delete_title", {
                  name
                })
              }), /* @__PURE__ */jsxRuntimeExports.jsxs(Box, {
                className: styles.action,
                children: [/* @__PURE__ */jsxRuntimeExports.jsx(Button, {
                  onClick: deleteUser,
                  children: t("action_btn.delete")
                }), /* @__PURE__ */jsxRuntimeExports.jsx(Button, {
                  onClick: onClose,
                  children: t("action_btn.cancel")
                })]
              })]
            })
          });
        });
      }
    };
  });
})();
//# sourceMappingURL=index-legacy-I7ODOz65.js.map
