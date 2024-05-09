import { j as jsxRuntimeExports, q as interopRequireDefaultExports, B as Box, p as commonjsGlobal, w as getDefaultExportFromCjs, R as React, r as reactExports, u as useParams, L as LoadingDots, al as Link } from "./index-DqOHBPA_.js";
import { d as default_1$1 } from "./Delete-CTssxX93.js";
import { f as createSvgIcon, D as requireCreateSvgIcon, E as useTranslation, ao as Modal, T as Typography, ap as Button, J as useService, K as useDispatch, j as Paper, bh as stripTags, I as IconButton, bH as truncateWithEllipsis, a_ as previewUrl } from "./use-service-B2Fih2ge.js";
import { t as RHFSwitch, v as formatlocalDateTime, e as serverDateTimeToLocalDateTime } from "./Web-DdmaLZWw.js";
import { T as Tabs, a as Tab } from "./DatePicker-9Pk1EwA1.js";
import { T as TableContainer, a as Table, b as TableRow, c as TableBody } from "./TableRow-BC97XHD1.js";
import { T as TableHead } from "./TableHead-B6L6rCGe.js";
import { T as TableCell } from "./TableCell-CZrIf-eW.js";
import { T as TablePagination } from "./TablePagination-BsI9RbB4.js";
import "./Checkbox-47V_54xr.js";
import "./SwitchBase-rlcQTk7F.js";
import "./radioClasses-D8j8JIb8.js";
import "./tableRowClasses-vPBqZyH3.js";
import "./FormControlLabel-BnMNrqju.js";
import "./TextField-Fj584c9C.js";
import "./Grid-nW54Jdfg.js";
import "./Toolbar-ANEXYwkQ.js";
const ArrowOutward = createSvgIcon(/* @__PURE__ */ jsxRuntimeExports.jsx("path", {
  d: "M6 6v2h8.59L5 17.59 6.41 19 16 9.41V18h2V6z"
}), "ArrowOutward");
var Event = {};
var _interopRequireDefault = interopRequireDefaultExports;
Object.defineProperty(Event, "__esModule", {
  value: true
});
var default_1 = Event.default = void 0;
var _createSvgIcon = _interopRequireDefault(requireCreateSvgIcon());
var _jsxRuntime = jsxRuntimeExports;
var _default = (0, _createSvgIcon.default)(/* @__PURE__ */ (0, _jsxRuntime.jsx)("path", {
  d: "M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z"
}), "Event");
default_1 = Event.default = _default;
const mainContainer = "_mainContainer_14aat_1";
const loadingWrapper = "_loadingWrapper_14aat_12";
const cardContent = "_cardContent_14aat_19";
const styles$1 = {
  mainContainer,
  loadingWrapper,
  cardContent
};
const wrapper = "_wrapper_d86h8_1";
const action = "_action_d86h8_12";
const styles = {
  wrapper,
  action
};
const ResponseDelete = ({ open: open2, onClose, onDelete }) => {
  const { t } = useTranslation("manage");
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Modal,
    {
      sx: {
        ".MuiBackdrop-root": {
          backgroundColor: "rgba(0, 0, 0, 0.3)"
        }
      },
      open: open2,
      onClose,
      "aria-labelledby": "modal-modal-title",
      "aria-describedby": "modal-modal-description",
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { className: styles.wrapper, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { children: t("responses.title_delete_response") }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { className: styles.action, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: onDelete, children: t("action_btn.delete") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: onClose, children: t("action_btn.cancel") })
        ] })
      ] })
    }
  );
};
var FileSaver_min = { exports: {} };
(function(module, exports) {
  (function(a, b) {
    b();
  })(commonjsGlobal, function() {
    function b(a2, b2) {
      return "undefined" == typeof b2 ? b2 = { autoBom: false } : "object" != typeof b2 && (console.warn("Deprecated: Expected third argument to be a object"), b2 = { autoBom: !b2 }), b2.autoBom && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(a2.type) ? new Blob(["\uFEFF", a2], { type: a2.type }) : a2;
    }
    function c(a2, b2, c2) {
      var d2 = new XMLHttpRequest();
      d2.open("GET", a2), d2.responseType = "blob", d2.onload = function() {
        g(d2.response, b2, c2);
      }, d2.onerror = function() {
        console.error("could not download file");
      }, d2.send();
    }
    function d(a2) {
      var b2 = new XMLHttpRequest();
      b2.open("HEAD", a2, false);
      try {
        b2.send();
      } catch (a3) {
      }
      return 200 <= b2.status && 299 >= b2.status;
    }
    function e(a2) {
      try {
        a2.dispatchEvent(new MouseEvent("click"));
      } catch (c2) {
        var b2 = document.createEvent("MouseEvents");
        b2.initMouseEvent("click", true, true, window, 0, 0, 0, 80, 20, false, false, false, false, 0, null), a2.dispatchEvent(b2);
      }
    }
    var f = "object" == typeof window && window.window === window ? window : "object" == typeof self && self.self === self ? self : "object" == typeof commonjsGlobal && commonjsGlobal.global === commonjsGlobal ? commonjsGlobal : void 0, a = f.navigator && /Macintosh/.test(navigator.userAgent) && /AppleWebKit/.test(navigator.userAgent) && !/Safari/.test(navigator.userAgent), g = f.saveAs || ("object" != typeof window || window !== f ? function() {
    } : "download" in HTMLAnchorElement.prototype && !a ? function(b2, g2, h) {
      var i = f.URL || f.webkitURL, j = document.createElement("a");
      g2 = g2 || b2.name || "download", j.download = g2, j.rel = "noopener", "string" == typeof b2 ? (j.href = b2, j.origin === location.origin ? e(j) : d(j.href) ? c(b2, g2, h) : e(j, j.target = "_blank")) : (j.href = i.createObjectURL(b2), setTimeout(function() {
        i.revokeObjectURL(j.href);
      }, 4e4), setTimeout(function() {
        e(j);
      }, 0));
    } : "msSaveOrOpenBlob" in navigator ? function(f2, g2, h) {
      if (g2 = g2 || f2.name || "download", "string" != typeof f2)
        navigator.msSaveOrOpenBlob(b(f2, h), g2);
      else if (d(f2))
        c(f2, g2, h);
      else {
        var i = document.createElement("a");
        i.href = f2, i.target = "_blank", setTimeout(function() {
          e(i);
        });
      }
    } : function(b2, d2, e2, g2) {
      if (g2 = g2 || open("", "_blank"), g2 && (g2.document.title = g2.document.body.innerText = "downloading..."), "string" == typeof b2)
        return c(b2, d2, e2);
      var h = "application/octet-stream" === b2.type, i = /constructor/i.test(f.HTMLElement) || f.safari, j = /CriOS\/[\d]+/.test(navigator.userAgent);
      if ((j || h && i || a) && "undefined" != typeof FileReader) {
        var k = new FileReader();
        k.onloadend = function() {
          var a2 = k.result;
          a2 = j ? a2 : a2.replace(/^data:[^;]*;/, "data:attachment/file;"), g2 ? g2.location.href = a2 : location = a2, g2 = null;
        }, k.readAsDataURL(b2);
      } else {
        var l = f.URL || f.webkitURL, m = l.createObjectURL(b2);
        g2 ? g2.location = m : location.href = m, g2 = null, setTimeout(function() {
          l.revokeObjectURL(m);
        }, 4e4);
      }
    });
    f.saveAs = g.saveAs = g, module.exports = g;
  });
})(FileSaver_min);
var FileSaver_minExports = FileSaver_min.exports;
const FileSaver = /* @__PURE__ */ getDefaultExportFromCjs(FileSaver_minExports);
function ResponsesSurvey({ viewEvents }) {
  const surveyService = useService("survey");
  const { t } = useTranslation("manage");
  const [fetching, setFetching] = reactExports.useState(true);
  useDispatch();
  const [dbResponses, setDbResponses] = reactExports.useState(false);
  const [completeResponses, setCompleteResponses] = reactExports.useState("none");
  const [surveyor, setSurveyor] = reactExports.useState(null);
  const { surveyId } = useParams();
  const processApirror = (e) => {
    setFetching(false);
  };
  const [allResponse, setAllResponse] = reactExports.useState(null);
  const [page, setPage] = reactExports.useState(1);
  const [rowsPerPage, setRowsPerPage] = reactExports.useState(10);
  const exportResponses = () => {
    setFetching(true);
    surveyService.exportResponses(surveyId, dbResponses, completeResponses).then((data) => {
      if (data) {
        var file = new File([data], "".concat(surveyId, "-responses-export.csv"), {
          type: "text/csv;charset=utf-8"
        });
        FileSaver.saveAs(file);
      }
      setFetching(false);
    }).catch((err) => {
      processApirror();
    });
  };
  const onSurveyorClicked = (response) => {
    setCompleteResponses("none");
    setSurveyor(response.surveyorID);
  };
  const findBoolean = (response) => {
    switch (response) {
      case "true":
        return true;
      case "false":
        return false;
      case "none":
      default:
        return void 0;
    }
  };
  const fetchResponses = () => {
    setFetching(true);
    const updateCompleteResponses = findBoolean(completeResponses);
    surveyService.allResponse(
      surveyId,
      dbResponses,
      page,
      rowsPerPage,
      updateCompleteResponses,
      surveyor
    ).then((data) => {
      if (data) {
        setAllResponse(data);
      }
      setFetching(false);
    }).catch((err) => {
      processApirror();
    });
  };
  reactExports.useEffect(() => {
    fetchResponses();
  }, [page, rowsPerPage, dbResponses, completeResponses, surveyor]);
  const [responseToDelete, setResponseToDelete] = reactExports.useState();
  const onCloseModal = () => {
    setResponseToDelete(null);
  };
  const deleteResponse = () => {
    onCloseModal();
    surveyService.deleteResponse(surveyId, responseToDelete.id).then(() => {
      fetchResponses();
    }).catch((e) => {
      processApirror();
    });
  };
  const tabValues = {
    SHOW_ALL: "none",
    SHOW_COMPLETED: "true",
    SHOW_INCOMPLETE: "false"
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { className: styles$1.mainContainer, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Box,
      {
        display: "flex",
        flexWrap: { xs: "wrap", sm: "wrap", md: "nowrap" },
        gap: 10,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { width: "100%", className: styles$1.cardContent, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "h5", color: "primary", fontWeight: 600, children: t("responses.raw_values") }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              RHFSwitch,
              {
                checked: dbResponses,
                onChange: (event) => {
                  setDbResponses(event.target.checked);
                }
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { width: "100%", className: styles$1.cardContent, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "h5", color: "primary", fontWeight: 600, children: t("responses.export") }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                sx: { minWidth: "50px" },
                color: "primary",
                disabled: surveyor || false,
                size: "small",
                variant: "contained",
                onClick: () => exportResponses(),
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowOutward, {})
              }
            )
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Box,
      {
        display: "flex",
        alignItems: "center",
        sx: { borderBottom: 1, borderColor: "divider" },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Typography,
            {
              color: "primary",
              variant: "h4",
              fontWeight: 600,
              sx: { width: "33%" },
              children: t("responses.filter_completed")
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Tabs,
            {
              sx: { width: "100%" },
              value: completeResponses,
              onChange: (event, newValue) => {
                setPage(1);
                setCompleteResponses(newValue);
              },
              textColor: "primary",
              indicatorColor: "primary",
              variant: "fullWidth",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Tab,
                  {
                    disabled: surveyor || false,
                    label: t("responses.filter_completed_show_all"),
                    value: tabValues.SHOW_ALL
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Tab,
                  {
                    disabled: surveyor || false,
                    label: t("responses.filter_completed_show_completed"),
                    value: tabValues.SHOW_COMPLETED
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Tab,
                  {
                    disabled: surveyor || false,
                    label: t("responses.filter_completed_show_incomplete"),
                    value: tabValues.SHOW_INCOMPLETE
                  }
                )
              ]
            }
          )
        ]
      }
    ),
    surveyor && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { sx: { margin: "8px" }, onClick: () => setSurveyor(null), children: t("responses.reset_surveyor_filter") })
    ] }),
    fetching ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: styles$1.loadingWrapper, children: /* @__PURE__ */ jsxRuntimeExports.jsx(LoadingDots, {}) }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(Paper, { sx: { width: "100%", background: "transparent", mb: 2 }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(TableContainer, { component: Paper, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Table, { sx: { minWidth: 650 }, "aria-label": "simple table", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: allResponse && /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, {}, "btns"),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { align: "left", children: "ID" }, "id"),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { align: "left", children: t("responses.preview") }, "preview"),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { align: "left", children: t("label.surveyor") }, "surveyor"),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { align: "left", children: t("responses.version") }, "version"),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { align: "left", children: t("responses.ip_addr") }, "ip"),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { align: "left", children: t("responses.start_date") }, "start_date"),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { align: "left", children: t("responses.submit_date") }, "submit_date"),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { align: "left", children: t("responses.lang") }, "lang"),
          Object.values(allResponse == null ? void 0 : allResponse.columnNames).map((label) => {
            return /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { align: "left", children: stripTags(label) }, label);
          })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableBody, { children: allResponse == null ? void 0 : allResponse.responses.map((response) => {
          return /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { sx: { minHeight: "100px" }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { align: "left", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { sx: { display: "flex" }, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                IconButton,
                {
                  onClick: () => {
                    setResponseToDelete(response);
                  },
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(default_1$1, {})
                }
              ),
              response.hasEvents && /* @__PURE__ */ jsxRuntimeExports.jsx(IconButton, { onClick: () => viewEvents(response.id), children: /* @__PURE__ */ jsxRuntimeExports.jsx(default_1, {}) })
            ] }) }, "btns"),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { align: "left", children: response.id }, "id"),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { align: "left", children: JSON.stringify(response.preview) }, "preview"),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { align: "left", children: response.surveyorName ? /* @__PURE__ */ jsxRuntimeExports.jsx(
              Link,
              {
                onClick: () => {
                  onSurveyorClicked(response);
                },
                children: response.surveyorName
              }
            ) : "" }, "surveyor"),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { align: "left", children: response.version }, "version"),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { align: "left", children: response.ipAddress }, "ip"),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { align: "left", children: formatlocalDateTime(
              serverDateTimeToLocalDateTime(response.startDate)
            ) }, "startDate"),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { align: "left", children: response.submitDate ? formatlocalDateTime(
              serverDateTimeToLocalDateTime(response.submitDate)
            ) : " - " }, "submitDate"),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { align: "left", children: response.lang.code }, "lang"),
            response.values.map((value, index2) => {
              return /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { align: "left", children: value === null || value === void 0 || value === "" ? " - " : typeof value === "string" ? truncateWithEllipsis(value, 25) : typeof value === "object" && "size" in value && "filename" in value && "stored_filename" in value ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "a",
                {
                  target: "_blank",
                  download: value.stored_filename,
                  href: previewUrl(value.stored_filename),
                  children: [
                    value.filename,
                    " -",
                    Math.round(value.size / 1e3) + "K"
                  ]
                }
              ) : JSON.stringify(value) }, index2);
            })
          ] }, response.id);
        }) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        TablePagination,
        {
          rowsPerPageOptions: [10, 25, 50, 100],
          component: "div",
          labelDisplayedRows: ({ from, to, count, page: page2 }) => {
            return t("responses.label_displayed_rows", { from, to, count });
          },
          labelRowsPerPage: t("responses.label_rows_per_page"),
          count: allResponse == null ? void 0 : allResponse.totalCount,
          rowsPerPage,
          page: page - 1,
          onPageChange: (event, newPage) => {
            setPage(newPage + 1);
          },
          onRowsPerPageChange: (event) => {
            setRowsPerPage(parseInt(event.target.value, 10));
            setPage(1);
          }
        }
      )
    ] }),
    Boolean(responseToDelete) && /* @__PURE__ */ jsxRuntimeExports.jsx(
      ResponseDelete,
      {
        onDelete: deleteResponse,
        open: Boolean(responseToDelete),
        onClose: onCloseModal
      }
    )
  ] });
}
const index = React.memo(ResponsesSurvey);
export {
  index as default
};
//# sourceMappingURL=index-DWLNXjUd.js.map
