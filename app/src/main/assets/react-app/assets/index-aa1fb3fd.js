import { j as jsxRuntimeExports, d as LoadingIndicator } from "./index-bbbd1d1b.js";
import { L as LanguageSelector, P as ProcessedError } from "./index-c8668cbd.js";
import { B as Box } from "./common-cf84468d.js";
const mainContainer = "_mainContainer_jw0w9_1";
const styles = {
  mainContainer
};
const AuthWrap = ({
  children,
  loading,
  showError,
  processedError,
  handleClose
}) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { className: styles.mainContainer, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { sx: { position: "absolute", top: "25px", right: "25px" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(LanguageSelector, {}) }),
    loading && /* @__PURE__ */ jsxRuntimeExports.jsx(LoadingIndicator, {}),
    showError && /* @__PURE__ */ jsxRuntimeExports.jsx(ProcessedError, { error: processedError, handleClose }),
    children
  ] });
};
export {
  AuthWrap as A
};