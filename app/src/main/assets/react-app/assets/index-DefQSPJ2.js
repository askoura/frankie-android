import { R as React, r as reactExports, j as jsxRuntimeExports, B as Box, L as LoadingDots } from "./index-DqOHBPA_.js";
import { v as formatlocalDateTime, e as serverDateTimeToLocalDateTime } from "./Web-DdmaLZWw.js";
import { J as useService, E as useTranslation, K as useDispatch, j as Paper, a_ as previewUrl } from "./use-service-B2Fih2ge.js";
import { T as TableContainer, a as Table, b as TableRow, c as TableBody } from "./TableRow-BC97XHD1.js";
import { T as TableHead } from "./TableHead-B6L6rCGe.js";
import { T as TableCell } from "./TableCell-CZrIf-eW.js";
import "./Checkbox-47V_54xr.js";
import "./SwitchBase-rlcQTk7F.js";
import "./DatePicker-9Pk1EwA1.js";
import "./Grid-nW54Jdfg.js";
import "./radioClasses-D8j8JIb8.js";
import "./tableRowClasses-vPBqZyH3.js";
import "./FormControlLabel-BnMNrqju.js";
import "./TextField-Fj584c9C.js";
const mainContainer = "_mainContainer_xvbke_1";
const loadingWrapper = "_loadingWrapper_xvbke_10";
const styles = {
  mainContainer,
  loadingWrapper
};
function ResponsesEvent({ responseId }) {
  const surveyService = useService("survey");
  const { t } = useTranslation("manage");
  const [fetching, setFetching] = reactExports.useState(true);
  useDispatch();
  const processApirror = (e) => {
    setFetching(false);
  };
  const [eventResponse, setEventResponse] = reactExports.useState(null);
  const fetchResponses = () => {
    setFetching(true);
    surveyService.eventResponse(responseId).then((data) => {
      if (data) {
        setEventResponse(data.data);
      }
      setFetching(false);
    }).catch((err) => {
      processApirror();
    });
  };
  reactExports.useEffect(() => {
    fetchResponses();
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { className: styles.mainContainer, children: fetching ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: styles.loadingWrapper, children: /* @__PURE__ */ jsxRuntimeExports.jsx(LoadingDots, {}) }) : /* @__PURE__ */ jsxRuntimeExports.jsx(TableContainer, { component: Paper, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Table, { sx: { minWidth: 650 }, "aria-label": "simple table", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: eventResponse && /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { align: "left", children: t("event_response.name") }, "name"),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { align: "left", children: t("event_response.time") }, "time"),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { align: "left", children: t("event_response.details") }, "details")
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(TableBody, { children: eventResponse == null ? void 0 : eventResponse.map((event) => {
      var _a;
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { sx: { minHeight: "100px" }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { align: "left", children: event.name }, "name"),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { align: "left", children: formatlocalDateTime(
          serverDateTimeToLocalDateTime(event.time)
        ) }, "time"),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { align: "left", children: event.name == "Navigation" ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: t("label.from") }),
            ": ",
            event.from
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: t("label.to") }),
            ": ",
            event.to
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: t("event_response.direction") }),
            ":",
            " ",
            (_a = event.direction) == null ? void 0 : _a.name
          ] })
        ] }) : event.name == "VoiceRecording" ? /* @__PURE__ */ jsxRuntimeExports.jsxs("audio", { controls: true, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "source",
            {
              src: previewUrl(event.fileName),
              type: "audio/mp4"
            }
          ),
          "File not Supported"
        ] }) : event.name == "Location" ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: t("label.latitude") }),
            ":",
            " ",
            event.latitude
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: t("label.longitude") }),
            ":",
            " ",
            event.longitude
          ] })
        ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: t("label.code") }),
          ": ",
          event.code
        ] }) }, "details")
      ] }, event.time);
    }) })
  ] }) }) });
}
const index = React.memo(ResponsesEvent);
export {
  index as default
};
//# sourceMappingURL=index-DefQSPJ2.js.map
