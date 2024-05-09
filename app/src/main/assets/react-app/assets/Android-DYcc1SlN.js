import { u as useParams, j as jsxRuntimeExports } from "./index-DqOHBPA_.js";
import { g as getparam, P as Provider, r as runStore } from "./use-service-B2Fih2ge.js";
import { R as RunSurvey } from "./index-DCDdj0_I.js";
import "./index-BibfXq_c.js";
import "./Toolbar-ANEXYwkQ.js";
import "./Card-CfNjVYcu.js";
function Android() {
  const surveyId = getparam(useParams(), "surveyId");
  sessionStorage.setItem("surveyId", surveyId);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Provider, { store: runStore, children: /* @__PURE__ */ jsxRuntimeExports.jsx(RunSurvey, {}) });
}
export {
  Android as default
};
//# sourceMappingURL=Android-DYcc1SlN.js.map
