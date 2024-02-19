import { R as React, x as useTranslation, r as reactExports, z as useDispatch, j as jsxRuntimeExports, B as Box, an as CircularProgress, P as Paper, b8 as previewUrl, a2 as SurveyService, a3 as onApiError, a7 as onError } from "./index-RBnW6nvi.js";
import { f as formatlocalDateTime, s as serverDateTimeToLocalDateTime } from "./Web-KOHZ4PI_.js";
import { T as TableContainer, a as Table, b as TableRow, c as TableCell, d as TableBody } from "./TableRow-esdE-LAL.js";
import { T as TableHead } from "./TableHead-OntCKomL.js";
import "./DatePicker-AVKIEE0b.js";
import "./Grid-q5yBxj4Y.js";
import "./TextField-lJ98NZsg.js";
import "./FormControlLabel-B-3jdeza.js";
import "./Checkbox-HSUkhdvK.js";
import "./SwitchBase-naWSSwc-.js";
const mainContainer = "_mainContainer_18m15_1";
const loadingWrapper = "_loadingWrapper_18m15_10";
const styles = {
  mainContainer,
  loadingWrapper
};
function ResponsesEvent({ responseId }) {
  const { t } = useTranslation("manage");
  const [fetching, setFetching] = reactExports.useState(true);
  const dispatch = useDispatch();
  const processApirror = (e) => {
    setFetching(false);
    onApiError({
      error: e,
      globalErrorHandler: (processedError) => {
        dispatch(onError(processedError));
      }
    });
  };
  const [eventResponse, setEventResponse] = reactExports.useState(null);
  const fetchResponses = () => {
    setFetching(true);
    SurveyService.eventResponse(responseId).then((data) => {
      if (data) {
        setEventResponse(data.data);
      }
      setFetching(false);
    }).catch((err) => {
      processApirror(err);
    });
  };
  reactExports.useEffect(() => {
    fetchResponses();
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { className: styles.mainContainer, children: fetching ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: styles.loadingWrapper, children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircularProgress, {}) }) : /* @__PURE__ */ jsxRuntimeExports.jsx(TableContainer, { component: Paper, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Table, { sx: { minWidth: 650 }, "aria-label": "simple table", children: [
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
//# sourceMappingURL=index-BgQQBp8H.js.map
