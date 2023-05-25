import { c as createSvgIcon, j as jsxRuntimeExports, r as reactExports, _ as _objectWithoutPropertiesLoose, m as _extends, n as generateUtilityClasses, q as generateUtilityClass, t as styled, v as useThemeProps, w as useId, x as clsx, y as composeClasses, g as requireCreateSvgIcon, i as interopRequireDefaultExports, z as commonjsGlobal, A as getDefaultExportFromCjs, a as useParams, C as CircularProgress, L as Link, B as previewUrl, S as SurveyService, p as processError, P as PROCESSED_ERRORS } from "./index-a534f6bd.js";
import { S as Switch, d as default_1$1 } from "./Delete-7ac1a886.js";
import { H as Header } from "./index-248e2a93.js";
import { P as ProcessedError } from "./index-50043b2e.js";
import { f as formatlocalDateTime, s as serverDateTimeToLocalDateTime } from "./DateUtils-a37c0640.js";
import { f as useTheme, a as IconButton, c as Select, d as MenuItem, g as InputBase, i as isHostComponent, u as useTranslation, M as Modal, B as Box, T as Typography, b as Button, P as Paper } from "./common-85d356ce.js";
import { F as FormControlLabel } from "./FormControlLabel-75e22771.js";
import { d as TableCell, T as TableContainer, a as Table, b as TableHead, c as TableRow, e as TableBody } from "./TableRow-4bbf1fcf.js";
import { K as KeyboardArrowRight, a as KeyboardArrowLeft } from "./KeyboardArrowRight-4342121f.js";
import { T as Toolbar } from "./Toolbar-353bbbe2.js";
import "./AuthService-d83f305c.js";
import "./ArrowBack-58ebd7be.js";
import "./LogoutOutlined-b4cae763.js";
const FirstPageIcon = createSvgIcon(/* @__PURE__ */ jsxRuntimeExports.jsx("path", {
  d: "M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"
}), "FirstPage");
const LastPageIcon = createSvgIcon(/* @__PURE__ */ jsxRuntimeExports.jsx("path", {
  d: "M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"
}), "LastPage");
var _LastPageIcon, _FirstPageIcon, _KeyboardArrowRight, _KeyboardArrowLeft, _KeyboardArrowLeft2, _KeyboardArrowRight2, _FirstPageIcon2, _LastPageIcon2;
const _excluded$1 = ["backIconButtonProps", "count", "getItemAriaLabel", "nextIconButtonProps", "onPageChange", "page", "rowsPerPage", "showFirstButton", "showLastButton"];
const TablePaginationActions = /* @__PURE__ */ reactExports.forwardRef(function TablePaginationActions2(props, ref) {
  const {
    backIconButtonProps,
    count,
    getItemAriaLabel,
    nextIconButtonProps,
    onPageChange,
    page,
    rowsPerPage,
    showFirstButton,
    showLastButton
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded$1);
  const theme = useTheme();
  const handleFirstPageButtonClick = (event) => {
    onPageChange(event, 0);
  };
  const handleBackButtonClick = (event) => {
    onPageChange(event, page - 1);
  };
  const handleNextButtonClick = (event) => {
    onPageChange(event, page + 1);
  };
  const handleLastPageButtonClick = (event) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", _extends({
    ref
  }, other, {
    children: [showFirstButton && /* @__PURE__ */ jsxRuntimeExports.jsx(IconButton, {
      onClick: handleFirstPageButtonClick,
      disabled: page === 0,
      "aria-label": getItemAriaLabel("first", page),
      title: getItemAriaLabel("first", page),
      children: theme.direction === "rtl" ? _LastPageIcon || (_LastPageIcon = /* @__PURE__ */ jsxRuntimeExports.jsx(LastPageIcon, {})) : _FirstPageIcon || (_FirstPageIcon = /* @__PURE__ */ jsxRuntimeExports.jsx(FirstPageIcon, {}))
    }), /* @__PURE__ */ jsxRuntimeExports.jsx(IconButton, _extends({
      onClick: handleBackButtonClick,
      disabled: page === 0,
      color: "inherit",
      "aria-label": getItemAriaLabel("previous", page),
      title: getItemAriaLabel("previous", page)
    }, backIconButtonProps, {
      children: theme.direction === "rtl" ? _KeyboardArrowRight || (_KeyboardArrowRight = /* @__PURE__ */ jsxRuntimeExports.jsx(KeyboardArrowRight, {})) : _KeyboardArrowLeft || (_KeyboardArrowLeft = /* @__PURE__ */ jsxRuntimeExports.jsx(KeyboardArrowLeft, {}))
    })), /* @__PURE__ */ jsxRuntimeExports.jsx(IconButton, _extends({
      onClick: handleNextButtonClick,
      disabled: count !== -1 ? page >= Math.ceil(count / rowsPerPage) - 1 : false,
      color: "inherit",
      "aria-label": getItemAriaLabel("next", page),
      title: getItemAriaLabel("next", page)
    }, nextIconButtonProps, {
      children: theme.direction === "rtl" ? _KeyboardArrowLeft2 || (_KeyboardArrowLeft2 = /* @__PURE__ */ jsxRuntimeExports.jsx(KeyboardArrowLeft, {})) : _KeyboardArrowRight2 || (_KeyboardArrowRight2 = /* @__PURE__ */ jsxRuntimeExports.jsx(KeyboardArrowRight, {}))
    })), showLastButton && /* @__PURE__ */ jsxRuntimeExports.jsx(IconButton, {
      onClick: handleLastPageButtonClick,
      disabled: page >= Math.ceil(count / rowsPerPage) - 1,
      "aria-label": getItemAriaLabel("last", page),
      title: getItemAriaLabel("last", page),
      children: theme.direction === "rtl" ? _FirstPageIcon2 || (_FirstPageIcon2 = /* @__PURE__ */ jsxRuntimeExports.jsx(FirstPageIcon, {})) : _LastPageIcon2 || (_LastPageIcon2 = /* @__PURE__ */ jsxRuntimeExports.jsx(LastPageIcon, {}))
    })]
  }));
});
const TablePaginationActions$1 = TablePaginationActions;
function getTablePaginationUtilityClass(slot) {
  return generateUtilityClass("MuiTablePagination", slot);
}
const tablePaginationClasses = generateUtilityClasses("MuiTablePagination", ["root", "toolbar", "spacer", "selectLabel", "selectRoot", "select", "selectIcon", "input", "menuItem", "displayedRows", "actions"]);
const tablePaginationClasses$1 = tablePaginationClasses;
var _InputBase;
const _excluded = ["ActionsComponent", "backIconButtonProps", "className", "colSpan", "component", "count", "getItemAriaLabel", "labelDisplayedRows", "labelRowsPerPage", "nextIconButtonProps", "onPageChange", "onRowsPerPageChange", "page", "rowsPerPage", "rowsPerPageOptions", "SelectProps", "showFirstButton", "showLastButton"];
const TablePaginationRoot = styled(TableCell, {
  name: "MuiTablePagination",
  slot: "Root",
  overridesResolver: (props, styles2) => styles2.root
})(({
  theme
}) => ({
  overflow: "auto",
  color: (theme.vars || theme).palette.text.primary,
  fontSize: theme.typography.pxToRem(14),
  // Increase the specificity to override TableCell.
  "&:last-child": {
    padding: 0
  }
}));
const TablePaginationToolbar = styled(Toolbar, {
  name: "MuiTablePagination",
  slot: "Toolbar",
  overridesResolver: (props, styles2) => _extends({
    [`& .${tablePaginationClasses$1.actions}`]: styles2.actions
  }, styles2.toolbar)
})(({
  theme
}) => ({
  minHeight: 52,
  paddingRight: 2,
  [`${theme.breakpoints.up("xs")} and (orientation: landscape)`]: {
    minHeight: 52
  },
  [theme.breakpoints.up("sm")]: {
    minHeight: 52,
    paddingRight: 2
  },
  [`& .${tablePaginationClasses$1.actions}`]: {
    flexShrink: 0,
    marginLeft: 20
  }
}));
const TablePaginationSpacer = styled("div", {
  name: "MuiTablePagination",
  slot: "Spacer",
  overridesResolver: (props, styles2) => styles2.spacer
})({
  flex: "1 1 100%"
});
const TablePaginationSelectLabel = styled("p", {
  name: "MuiTablePagination",
  slot: "SelectLabel",
  overridesResolver: (props, styles2) => styles2.selectLabel
})(({
  theme
}) => _extends({}, theme.typography.body2, {
  flexShrink: 0
}));
const TablePaginationSelect = styled(Select, {
  name: "MuiTablePagination",
  slot: "Select",
  overridesResolver: (props, styles2) => _extends({
    [`& .${tablePaginationClasses$1.selectIcon}`]: styles2.selectIcon,
    [`& .${tablePaginationClasses$1.select}`]: styles2.select
  }, styles2.input, styles2.selectRoot)
})({
  color: "inherit",
  fontSize: "inherit",
  flexShrink: 0,
  marginRight: 32,
  marginLeft: 8,
  [`& .${tablePaginationClasses$1.select}`]: {
    paddingLeft: 8,
    paddingRight: 24,
    textAlign: "right",
    textAlignLast: "right"
    // Align <select> on Chrome.
  }
});
const TablePaginationMenuItem = styled(MenuItem, {
  name: "MuiTablePagination",
  slot: "MenuItem",
  overridesResolver: (props, styles2) => styles2.menuItem
})({});
const TablePaginationDisplayedRows = styled("p", {
  name: "MuiTablePagination",
  slot: "DisplayedRows",
  overridesResolver: (props, styles2) => styles2.displayedRows
})(({
  theme
}) => _extends({}, theme.typography.body2, {
  flexShrink: 0
}));
function defaultLabelDisplayedRows({
  from,
  to,
  count
}) {
  return `${from}–${to} of ${count !== -1 ? count : `more than ${to}`}`;
}
function defaultGetAriaLabel(type) {
  return `Go to ${type} page`;
}
const useUtilityClasses = (ownerState) => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ["root"],
    toolbar: ["toolbar"],
    spacer: ["spacer"],
    selectLabel: ["selectLabel"],
    select: ["select"],
    input: ["input"],
    selectIcon: ["selectIcon"],
    menuItem: ["menuItem"],
    displayedRows: ["displayedRows"],
    actions: ["actions"]
  };
  return composeClasses(slots, getTablePaginationUtilityClass, classes);
};
const TablePagination = /* @__PURE__ */ reactExports.forwardRef(function TablePagination2(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiTablePagination"
  });
  const {
    ActionsComponent = TablePaginationActions$1,
    backIconButtonProps,
    className,
    colSpan: colSpanProp,
    component = TableCell,
    count,
    getItemAriaLabel = defaultGetAriaLabel,
    labelDisplayedRows = defaultLabelDisplayedRows,
    labelRowsPerPage = "Rows per page:",
    nextIconButtonProps,
    onPageChange,
    onRowsPerPageChange,
    page,
    rowsPerPage,
    rowsPerPageOptions = [10, 25, 50, 100],
    SelectProps = {},
    showFirstButton = false,
    showLastButton = false
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded);
  const ownerState = props;
  const classes = useUtilityClasses(ownerState);
  const MenuItemComponent = SelectProps.native ? "option" : TablePaginationMenuItem;
  let colSpan;
  if (component === TableCell || component === "td") {
    colSpan = colSpanProp || 1e3;
  }
  const selectId = useId(SelectProps.id);
  const labelId = useId(SelectProps.labelId);
  const getLabelDisplayedRowsTo = () => {
    if (count === -1) {
      return (page + 1) * rowsPerPage;
    }
    return rowsPerPage === -1 ? count : Math.min(count, (page + 1) * rowsPerPage);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(TablePaginationRoot, _extends({
    colSpan,
    ref,
    as: component,
    ownerState,
    className: clsx(classes.root, className)
  }, other, {
    children: /* @__PURE__ */ jsxRuntimeExports.jsxs(TablePaginationToolbar, {
      className: classes.toolbar,
      children: [/* @__PURE__ */ jsxRuntimeExports.jsx(TablePaginationSpacer, {
        className: classes.spacer
      }), rowsPerPageOptions.length > 1 && /* @__PURE__ */ jsxRuntimeExports.jsx(TablePaginationSelectLabel, {
        className: classes.selectLabel,
        id: labelId,
        children: labelRowsPerPage
      }), rowsPerPageOptions.length > 1 && /* @__PURE__ */ jsxRuntimeExports.jsx(TablePaginationSelect, _extends({
        variant: "standard"
      }, !SelectProps.variant && {
        input: _InputBase || (_InputBase = /* @__PURE__ */ jsxRuntimeExports.jsx(InputBase, {}))
      }, {
        value: rowsPerPage,
        onChange: onRowsPerPageChange,
        id: selectId,
        labelId
      }, SelectProps, {
        classes: _extends({}, SelectProps.classes, {
          // TODO v5 remove `classes.input`
          root: clsx(classes.input, classes.selectRoot, (SelectProps.classes || {}).root),
          select: clsx(classes.select, (SelectProps.classes || {}).select),
          // TODO v5 remove `selectIcon`
          icon: clsx(classes.selectIcon, (SelectProps.classes || {}).icon)
        }),
        children: rowsPerPageOptions.map((rowsPerPageOption) => /* @__PURE__ */ reactExports.createElement(MenuItemComponent, _extends({}, !isHostComponent(MenuItemComponent) && {
          ownerState
        }, {
          className: classes.menuItem,
          key: rowsPerPageOption.label ? rowsPerPageOption.label : rowsPerPageOption,
          value: rowsPerPageOption.value ? rowsPerPageOption.value : rowsPerPageOption
        }), rowsPerPageOption.label ? rowsPerPageOption.label : rowsPerPageOption))
      })), /* @__PURE__ */ jsxRuntimeExports.jsx(TablePaginationDisplayedRows, {
        className: classes.displayedRows,
        children: labelDisplayedRows({
          from: count === 0 ? 0 : page * rowsPerPage + 1,
          to: getLabelDisplayedRowsTo(),
          count: count === -1 ? -1 : count,
          page
        })
      }), /* @__PURE__ */ jsxRuntimeExports.jsx(ActionsComponent, {
        className: classes.actions,
        backIconButtonProps,
        count,
        nextIconButtonProps,
        onPageChange,
        page,
        rowsPerPage,
        showFirstButton,
        showLastButton,
        getItemAriaLabel
      })]
    })
  }));
});
const TablePagination$1 = TablePagination;
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
const mainContainer = "_mainContainer_1gfdk_1";
const loadingWrapper = "_loadingWrapper_1gfdk_7";
const styles$1 = {
  mainContainer,
  loadingWrapper
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
function ResponsesSurvey() {
  const { t } = useTranslation("manage");
  const [fetching, setFetching] = reactExports.useState(true);
  const [dbResponses, setDbResponses] = reactExports.useState(false);
  const [completeResponses, setCompleteResponses] = reactExports.useState("none");
  const [previewResponses, setPreviewResponses] = reactExports.useState("none");
  const [processedError, setProcessedError] = reactExports.useState("");
  const [showError, setShowError] = reactExports.useState(false);
  const { surveyId } = useParams();
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
  const [allResponse, setAllResponse] = reactExports.useState(null);
  const [page, setPage] = reactExports.useState(1);
  const [rowsPerPage, setRowsPerPage] = reactExports.useState(10);
  const exportResponses = () => {
    setFetching(true);
    SurveyService.exportResponses(
      surveyId,
      dbResponses,
      completeResponses,
      previewResponses
    ).then((data) => {
      if (data) {
        var file = new File([data], `${surveyId}-responses-export.csv`, { type: "text/csv;charset=utf-8" });
        FileSaver.saveAs(file);
      }
      setFetching(false);
    }).catch((err) => {
      processApirror(err);
    });
  };
  const fetchResponses = () => {
    setFetching(true);
    SurveyService.allResponse(
      surveyId,
      dbResponses,
      page,
      rowsPerPage,
      completeResponses,
      previewResponses
    ).then((data) => {
      if (data) {
        setAllResponse(data);
      }
      setFetching(false);
    }).catch((err) => {
      processApirror(err);
    });
  };
  reactExports.useEffect(() => {
    fetchResponses();
  }, [page, rowsPerPage, completeResponses, previewResponses]);
  const [responseToDelete, setResponseToDelete] = reactExports.useState();
  const onCloseModal = () => {
    setResponseToDelete(null);
  };
  const deleteResponse = () => {
    onCloseModal();
    SurveyService.deleteResponse(surveyId, responseToDelete.id).then(() => {
      fetchResponses();
    }).catch((e) => {
      processApirror(e);
    });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { className: styles$1.mainContainer, children: [
    showError && /* @__PURE__ */ jsxRuntimeExports.jsx(
      ProcessedError,
      {
        error: processedError,
        handleClose: () => setShowError(false)
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Header, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "h4", sx: { mb: "10px" }, children: t("responses.title") }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      FormControlLabel,
      {
        value: "start",
        labelPlacement: "start",
        control: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Switch,
          {
            checked: dbResponses,
            onChange: (event) => {
              setDbResponses(event.target.checked);
              fetchResponses();
            }
          }
        ),
        label: t("responses.raw_values")
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      FormControlLabel,
      {
        labelPlacement: "start",
        control: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Select,
          {
            sx: { margin: "8px" },
            variant: "standard",
            value: completeResponses,
            onChange: (event) => {
              setPage(1);
              setCompleteResponses(event.target.value);
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { value: "none", children: t("responses.filter_completed_show_all") }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { value: true, children: t("responses.filter_completed_show_completed") }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { value: false, children: t("responses.filter_completed_show_incomplete") })
            ]
          }
        ),
        label: t("responses.filter_completed")
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      FormControlLabel,
      {
        labelPlacement: "start",
        control: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Select,
          {
            sx: { margin: "8px" },
            variant: "standard",
            value: previewResponses,
            onChange: (event) => {
              setPage(1);
              setPreviewResponses(event.target.value);
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { value: "none", children: t("responses.filter_preview_show_all") }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { value: true, children: t("responses.filter_preview_show_preview") }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { value: false, children: t("responses.filter_preview_show_actual") })
            ]
          }
        ),
        label: t("responses.filter_preview")
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { sx: { margin: "8px" }, onClick: () => exportResponses(), children: "Export Responses" }),
    fetching ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: styles$1.loadingWrapper, children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircularProgress, {}) }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(Paper, { sx: { width: "100%", mb: 2 }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(TableContainer, { component: Paper, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Table, { sx: { minWidth: 650 }, "aria-label": "simple table", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: allResponse && /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, {}, "btns"),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { align: "left", children: "ID" }, "id"),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { align: "left", children: t("responses.preview") }, "preview"),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { align: "left", children: t("responses.version") }, "version"),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { align: "left", children: t("responses.ip_addr") }, "ip"),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { align: "left", children: t("responses.start_date") }, "start_date"),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { align: "left", children: t("responses.submit_date") }, "submit_date"),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { align: "left", children: t("responses.lang") }, "lang"),
          Object.values(allResponse == null ? void 0 : allResponse.columnNames).map((label) => {
            return /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { align: "left", children: label }, label);
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
              response.hasEvents && /* @__PURE__ */ jsxRuntimeExports.jsx(
                Link,
                {
                  to: `/response-events/${surveyId}/${response.id}`,
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(IconButton, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(default_1, {}) })
                }
              )
            ] }) }, "btns"),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { align: "left", children: response.id }, "id"),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { align: "left", children: JSON.stringify(response.preview) }, "preview"),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { align: "left", children: response.version }, "version"),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { align: "left", children: response.ipAddress }, "ip"),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { align: "left", children: formatlocalDateTime(
              serverDateTimeToLocalDateTime(response.startDate)
            ) }, "startDate"),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { align: "left", children: response.submitDate ? formatlocalDateTime(
              serverDateTimeToLocalDateTime(response.submitDate)
            ) : " - " }, "submitDate"),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { align: "left", children: response.lang.code }, "lang"),
            response.values.map((value, index) => {
              return /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { align: "left", children: value === null || value === void 0 || value === "" ? " - " : typeof value === "string" ? value : typeof value === "object" && "size" in value && "filename" in value && "stored_filename" in value ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
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
              ) : JSON.stringify(value) }, index);
            })
          ] }, response.id);
        }) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        TablePagination$1,
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
export {
  ResponsesSurvey as default
};
