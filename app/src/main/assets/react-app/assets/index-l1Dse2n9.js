import { x as useTranslation, j as jsxRuntimeExports, $ as Modal, B as Box, a0 as Typography, a1 as Button } from "./index-RBnW6nvi.js";
const wrapper = "_wrapper_d86h8_1";
const action = "_action_d86h8_12";
const styles = {
  wrapper,
  action
};
const UserDelete = ({ open, onClose, deleteUser, name }) => {
  const { t } = useTranslation("manage");
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Modal,
    {
      sx: {
        ".MuiBackdrop-root": {
          backgroundColor: "rgba(0, 0, 0, 0.3)"
        }
      },
      open,
      onClose,
      "aria-labelledby": "modal-modal-title",
      "aria-describedby": "modal-modal-description",
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { className: styles.wrapper, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { children: t("users_manage.delete_title", { name }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { className: styles.action, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: deleteUser, children: t("action_btn.delete") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: onClose, children: t("action_btn.cancel") })
        ] })
      ] })
    }
  );
};
export {
  UserDelete as U
};
//# sourceMappingURL=index-l1Dse2n9.js.map
