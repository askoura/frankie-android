import { r as reactExports, a as useParams, j as jsxRuntimeExports, C as CircularProgress, S as SurveyService, p as processError, P as PROCESSED_ERRORS } from "./index-c30bbb4a.js";
import { u as useTranslation, r as rtlLanguage, B as Box, T as Typography, P as Paper } from "./common-8231b1e5.js";
import { H as Header } from "./index-5a7a882d.js";
import { P as ProcessedError } from "./index-f46c2cad.js";
import { f as formatlocalDateTime, s as serverDateTimeToLocalDateTime } from "./DateUtils-a37c0640.js";
import { T as TableContainer, a as Table, b as TableHead, c as TableRow, d as TableCell, e as TableBody } from "./TableRow-d2cb0a03.js";
import "./AuthService-989f0864.js";
import "./ArrowBack-03ed6d6f.js";
import "./LogoutOutlined-1caf1963.js";
const mainContainer = "_mainContainer_1gfdk_1";
const loadingWrapper = "_loadingWrapper_1gfdk_7";
const styles = {
  mainContainer,
  loadingWrapper
};
function ResponsesSurvey() {
  const { t, i18n } = useTranslation("manage");
  rtlLanguage.includes(i18n.language) ? "rtl" : "ltr";
  const [fetching, setFetching] = reactExports.useState(true);
  const [processedError, setProcessedError] = reactExports.useState("");
  const [showError, setShowError] = reactExports.useState(false);
  const { surveyId, responseId } = useParams();
  const processApirror = (e) => {
    setFetching(false);
    const processed = processError(e);
    switch (processed) {
      case PROCESSED_ERRORS.NETWORK_ERR:
      case PROCESSED_ERRORS.BACKEND_DOWN:
        setShowError(true);
        setProcessedError(processed);
        break;
    }
  };
  const [eventResponse, setEventResponse] = reactExports.useState(null);
  const fetchResponses = () => {
    setFetching(true);
    SurveyService.eventResponse(surveyId, responseId).then((data) => {
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
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { className: styles.mainContainer, children: [
    showError && /* @__PURE__ */ jsxRuntimeExports.jsx(
      ProcessedError,
      {
        error: processedError,
        handleClose: () => setShowError(false)
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Header, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "h4", sx: { mb: "10px" }, children: t("event_response.title") }),
    fetching ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: styles.loadingWrapper, children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircularProgress, {}) }) : /* @__PURE__ */ jsxRuntimeExports.jsx(TableContainer, { component: Paper, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Table, { sx: { minWidth: 650 }, "aria-label": "simple table", children: [
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
          ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: t("label.code") }),
            ": ",
            event.code
          ] }) }, "details")
        ] }, event.time);
      }) })
    ] }) })
  ] });
}
export {
  ResponsesSurvey as default
};
