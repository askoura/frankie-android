import { R as React, j as jsxRuntimeExports, aG as getparam, ap as useParams } from "./index-RBnW6nvi.js";
const container = "_container_w1917_1";
const onlinePreview = "_onlinePreview_w1917_12";
const icon = "_icon_w1917_18";
const offlinePreview = "_offlinePreview_w1917_23";
const wrapperMob = "_wrapperMob_w1917_32";
const phoneBg = "_phoneBg_w1917_39";
const styles = {
  container,
  onlinePreview,
  icon,
  offlinePreview,
  wrapperMob,
  phoneBg
};
function PreviewSurvey({ mode = "online" }) {
  const resolveMode = (mode2) => {
    if (mode2 == "offline")
      return "offline";
    return "online";
  };
  const withEmbeddedParam = () => {
    const surveyId = getparam(useParams(), "surveyId");
    let location = "/preview-survey/".concat(surveyId);
    if (location.indexOf("?mode") == -1) {
      location = location + "?mode=" + resolveMode(mode);
    } else {
      location = location.replace(
        "?mode=offline",
        "?mode=".concat(resolveMode(mode))
      );
      location = location.replace(
        "?mode=online",
        "?mode=".concat(resolveMode(mode))
      );
    }
    return location;
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: styles.container, children: mode == "online" ? /* @__PURE__ */ jsxRuntimeExports.jsx("iframe", { src: withEmbeddedParam(), className: styles.onlinePreview }) : mode == "online-phone" ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: styles.wrapperMob, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/phone-android.png", className: styles.phoneBg }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("iframe", { src: withEmbeddedParam(), className: styles.offlinePreview })
  ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: styles.wrapperMob, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/phone-android.png", className: styles.phoneBg }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("iframe", { src: withEmbeddedParam(), className: styles.offlinePreview })
  ] }) });
}
const index = React.memo(PreviewSurvey);
export {
  index as default
};
//# sourceMappingURL=index-5A3Z6KBE.js.map
