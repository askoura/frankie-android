import { x as useTranslation, j as jsxRuntimeExports, B as Box } from "./index-RBnW6nvi.js";
import { E as ErrorOutlineOutlined } from "./ErrorOutlineOutlined-c8Q1J9r2.js";
const wrapper = "_wrapper_1hpga_1";
const icon = "_icon_1hpga_11";
const styles = {
  wrapper,
  icon
};
function ValidationItem(props) {
  const { t } = useTranslation(["run"]);
  function messages() {
    let validationMessage = "";
    if (props.validation.content && props.validation.isCustomErrorActive) {
      validationMessage = props.validation.content;
    } else {
      var translationKey = props.name.replace(/[0-9]/g, "");
      validationMessage = t(translationKey, { ...props.validation });
    }
    if (validationMessage) {
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { sx: { color: "error.main" }, className: styles.wrapper, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ErrorOutlineOutlined, {}),
        validationMessage
      ] });
    } else {
      return "";
    }
  }
  return messages();
}
export {
  ValidationItem as V
};
//# sourceMappingURL=index-8ARaTUZZ.js.map
