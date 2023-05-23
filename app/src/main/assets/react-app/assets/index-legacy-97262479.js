;
(function () {
  System.register(['./index-legacy-99c8bdce.js', './common-legacy-ddf67078.js'], function (exports, module) {
    'use strict';

    var __vite_style__ = document.createElement('style');
    __vite_style__.textContent = "._wrapper_d86h8_1 {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  background: #ffffff;\n  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);\n  border-radius: 8px;\n  padding: 20px;\n}\n\n._action_d86h8_12{\n  text-align: end;\n  margin-top: 16px;\n}\n";
    document.head.appendChild(__vite_style__);
    var createSvgIcon, jsxRuntimeExports, useTranslation, Modal, Box, Typography, Button;
    return {
      setters: [function (module) {
        createSvgIcon = module.c;
        jsxRuntimeExports = module.j;
      }, function (module) {
        useTranslation = module.u;
        Modal = module.M;
        Box = module.B;
        Typography = module.T;
        Button = module.b;
      }],
      execute: function execute() {
        var Delete = exports('D', createSvgIcon( /*#__PURE__*/jsxRuntimeExports.jsx("path", {
          d: "M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"
        }), 'Delete'));
        var wrapper = "_wrapper_d86h8_1";
        var action = "_action_d86h8_12";
        var styles = {
          wrapper: wrapper,
          action: action
        };
        var UserDelete = exports('U', function (_ref) {
          var open = _ref.open,
            onClose = _ref.onClose,
            deleteUser = _ref.deleteUser,
            name = _ref.name;
          var _useTranslation = useTranslation("manage"),
            t = _useTranslation.t;
          return /* @__PURE__ */jsxRuntimeExports.jsx(Modal, {
            sx: {
              ".MuiBackdrop-root": {
                backgroundColor: "rgba(0, 0, 0, 0.3)"
              }
            },
            open: open,
            onClose: onClose,
            "aria-labelledby": "modal-modal-title",
            "aria-describedby": "modal-modal-description",
            children: /* @__PURE__ */jsxRuntimeExports.jsxs(Box, {
              className: styles.wrapper,
              children: [/* @__PURE__ */jsxRuntimeExports.jsx(Typography, {
                children: t("users_manage.delete_title", {
                  name: name
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
