import { c as createSvgIcon, j as jsxRuntimeExports } from "./index-693ce788.js";
import { u as useTranslation, M as Modal, B as Box, T as Typography, b as Button } from "./common-cf84bb9f.js";
const Delete = createSvgIcon(/* @__PURE__ */ jsxRuntimeExports.jsx("path", {
  d: "M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"
}), "Delete");
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
  Delete as D,
  UserDelete as U
};
