;
(function () {
  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
  function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
  System.register(['./index-legacy-T3s18jo3.js', './Delete-legacy-YNJSp6if.js', './Web-legacy-LDhM2X1u.js', './FormControlLabel-legacy-0Ne4M7i6.js', './Switch-legacy-v-eJDCHU.js', './TableRow-legacy-QjxmKuUL.js', './TableHead-legacy-fccLWbma.js', './DatePicker-legacy-9Ey9K3I7.js', './TextField-legacy-vL2OdS5Q.js', './Checkbox-legacy-8hCFdihe.js', './SwitchBase-legacy-VpMr3A_z.js', './Grid-legacy-ZQipiKyz.js'], function (exports, module) {
    'use strict';

    var createSvgIcon, jsxRuntimeExports, reactExports, _objectWithoutPropertiesLoose, useTheme, _extends, IconButton, generateUtilityClasses, generateUtilityClass, styled, Toolbar, Select, MenuItem, useThemeProps, useId, InputBase, clsx, isHostComponent, composeClasses, requireCreateSvgIcon, interopRequireDefaultExports, useTranslation, Modal, Box, Typography, Button, commonjsGlobal, getDefaultExportFromCjs, React, useDispatch, useParams, CircularProgress, Paper, stripTags, Link, previewUrl, SurveyService, onApiError, onError, default_1$1, formatlocalDateTime, serverDateTimeToLocalDateTime, FormControlLabel, Switch, TableCell, TableContainer, Table, TableRow, TableBody, TableHead, KeyboardArrowRight, KeyboardArrowLeft;
    return {
      setters: [module => {
        createSvgIcon = module.c;
        jsxRuntimeExports = module.j;
        reactExports = module.r;
        _objectWithoutPropertiesLoose = module.e;
        useTheme = module.p;
        _extends = module._;
        IconButton = module.I;
        generateUtilityClasses = module.g;
        generateUtilityClass = module.a;
        styled = module.s;
        Toolbar = module.bL;
        Select = module.S;
        MenuItem = module.M;
        useThemeProps = module.u;
        useId = module.a$;
        InputBase = module.bM;
        clsx = module.f;
        isHostComponent = module.bN;
        composeClasses = module.h;
        requireCreateSvgIcon = module.X;
        interopRequireDefaultExports = module.Y;
        useTranslation = module.x;
        Modal = module.$;
        Box = module.B;
        Typography = module.a0;
        Button = module.a1;
        commonjsGlobal = module.aX;
        getDefaultExportFromCjs = module.a8;
        React = module.R;
        useDispatch = module.z;
        useParams = module.ap;
        CircularProgress = module.an;
        Paper = module.P;
        stripTags = module.bO;
        Link = module.bK;
        previewUrl = module.b8;
        SurveyService = module.a2;
        onApiError = module.a3;
        onError = module.a7;
      }, module => {
        default_1$1 = module.d;
      }, module => {
        formatlocalDateTime = module.f;
        serverDateTimeToLocalDateTime = module.s;
      }, module => {
        FormControlLabel = module.F;
      }, module => {
        Switch = module.S;
      }, module => {
        TableCell = module.c;
        TableContainer = module.T;
        Table = module.a;
        TableRow = module.b;
        TableBody = module.d;
      }, module => {
        TableHead = module.T;
      }, module => {
        KeyboardArrowRight = module.x;
        KeyboardArrowLeft = module.y;
      }, null, null, null, null],
      execute: function execute() {
        var __vite_style__ = document.createElement('style');
        __vite_style__.textContent = "._mainContainer_1wist_1 {\n  margin: auto;\n  padding: 16px;\n  min-width: 300px;\n  height: calc(100vh - 80px);\n  overflow: auto;\n}\n\n._loadingWrapper_1wist_9 {\n  width: 100%;\n  height: 100%;\n  text-align: center;\n  padding-top: 100px;\n}\n._wrapper_d86h8_1 {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  background: #ffffff;\n  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);\n  border-radius: 8px;\n  padding: 20px;\n}\n\n._action_d86h8_12{\n  text-align: end;\n  margin-top: 16px;\n}\n";
        document.head.appendChild(__vite_style__);
        const FirstPageIcon = createSvgIcon( /*#__PURE__*/jsxRuntimeExports.jsx("path", {
          d: "M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"
        }), 'FirstPage');
        const LastPageIcon = createSvgIcon( /*#__PURE__*/jsxRuntimeExports.jsx("path", {
          d: "M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"
        }), 'LastPage');
        var _LastPageIcon, _FirstPageIcon, _KeyboardArrowRight, _KeyboardArrowLeft, _KeyboardArrowLeft2, _KeyboardArrowRight2, _FirstPageIcon2, _LastPageIcon2;
        const _excluded$1 = ["backIconButtonProps", "count", "getItemAriaLabel", "nextIconButtonProps", "onPageChange", "page", "rowsPerPage", "showFirstButton", "showLastButton"];
        const TablePaginationActions = /* @__PURE__ */reactExports.forwardRef(function TablePaginationActions2(props, ref) {
          const backIconButtonProps = props.backIconButtonProps,
            count = props.count,
            getItemAriaLabel = props.getItemAriaLabel,
            nextIconButtonProps = props.nextIconButtonProps,
            onPageChange = props.onPageChange,
            page = props.page,
            rowsPerPage = props.rowsPerPage,
            showFirstButton = props.showFirstButton,
            showLastButton = props.showLastButton,
            other = _objectWithoutPropertiesLoose(props, _excluded$1);
          const theme = useTheme();
          const handleFirstPageButtonClick = event => {
            onPageChange(event, 0);
          };
          const handleBackButtonClick = event => {
            onPageChange(event, page - 1);
          };
          const handleNextButtonClick = event => {
            onPageChange(event, page + 1);
          };
          const handleLastPageButtonClick = event => {
            onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
          };
          return /* @__PURE__ */jsxRuntimeExports.jsxs("div", _extends({
            ref
          }, other, {
            children: [showFirstButton && /* @__PURE__ */jsxRuntimeExports.jsx(IconButton, {
              onClick: handleFirstPageButtonClick,
              disabled: page === 0,
              "aria-label": getItemAriaLabel("first", page),
              title: getItemAriaLabel("first", page),
              children: theme.direction === "rtl" ? _LastPageIcon || (_LastPageIcon = /* @__PURE__ */jsxRuntimeExports.jsx(LastPageIcon, {})) : _FirstPageIcon || (_FirstPageIcon = /* @__PURE__ */jsxRuntimeExports.jsx(FirstPageIcon, {}))
            }), /* @__PURE__ */jsxRuntimeExports.jsx(IconButton, _extends({
              onClick: handleBackButtonClick,
              disabled: page === 0,
              color: "inherit",
              "aria-label": getItemAriaLabel("previous", page),
              title: getItemAriaLabel("previous", page)
            }, backIconButtonProps, {
              children: theme.direction === "rtl" ? _KeyboardArrowRight || (_KeyboardArrowRight = /* @__PURE__ */jsxRuntimeExports.jsx(KeyboardArrowRight, {})) : _KeyboardArrowLeft || (_KeyboardArrowLeft = /* @__PURE__ */jsxRuntimeExports.jsx(KeyboardArrowLeft, {}))
            })), /* @__PURE__ */jsxRuntimeExports.jsx(IconButton, _extends({
              onClick: handleNextButtonClick,
              disabled: count !== -1 ? page >= Math.ceil(count / rowsPerPage) - 1 : false,
              color: "inherit",
              "aria-label": getItemAriaLabel("next", page),
              title: getItemAriaLabel("next", page)
            }, nextIconButtonProps, {
              children: theme.direction === "rtl" ? _KeyboardArrowLeft2 || (_KeyboardArrowLeft2 = /* @__PURE__ */jsxRuntimeExports.jsx(KeyboardArrowLeft, {})) : _KeyboardArrowRight2 || (_KeyboardArrowRight2 = /* @__PURE__ */jsxRuntimeExports.jsx(KeyboardArrowRight, {}))
            })), showLastButton && /* @__PURE__ */jsxRuntimeExports.jsx(IconButton, {
              onClick: handleLastPageButtonClick,
              disabled: page >= Math.ceil(count / rowsPerPage) - 1,
              "aria-label": getItemAriaLabel("last", page),
              title: getItemAriaLabel("last", page),
              children: theme.direction === "rtl" ? _FirstPageIcon2 || (_FirstPageIcon2 = /* @__PURE__ */jsxRuntimeExports.jsx(FirstPageIcon, {})) : _LastPageIcon2 || (_LastPageIcon2 = /* @__PURE__ */jsxRuntimeExports.jsx(LastPageIcon, {}))
            })]
          }));
        });
        const TablePaginationActions$1 = TablePaginationActions;
        function getTablePaginationUtilityClass(slot) {
          return generateUtilityClass('MuiTablePagination', slot);
        }
        const tablePaginationClasses = generateUtilityClasses('MuiTablePagination', ['root', 'toolbar', 'spacer', 'selectLabel', 'selectRoot', 'select', 'selectIcon', 'input', 'menuItem', 'displayedRows', 'actions']);
        const tablePaginationClasses$1 = tablePaginationClasses;
        var _InputBase;
        const _excluded = ["ActionsComponent", "backIconButtonProps", "className", "colSpan", "component", "count", "getItemAriaLabel", "labelDisplayedRows", "labelRowsPerPage", "nextIconButtonProps", "onPageChange", "onRowsPerPageChange", "page", "rowsPerPage", "rowsPerPageOptions", "SelectProps", "showFirstButton", "showLastButton"];
        const TablePaginationRoot = styled(TableCell, {
          name: "MuiTablePagination",
          slot: "Root",
          overridesResolver: (props, styles) => styles.root
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
          overridesResolver: (props, styles) => _extends({
            [`& .${tablePaginationClasses$1.actions}`]: styles.actions
          }, styles.toolbar)
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
          overridesResolver: (props, styles) => styles.spacer
        })({
          flex: "1 1 100%"
        });
        const TablePaginationSelectLabel = styled("p", {
          name: "MuiTablePagination",
          slot: "SelectLabel",
          overridesResolver: (props, styles) => styles.selectLabel
        })(({
          theme
        }) => _extends({}, theme.typography.body2, {
          flexShrink: 0
        }));
        const TablePaginationSelect = styled(Select, {
          name: "MuiTablePagination",
          slot: "Select",
          overridesResolver: (props, styles) => _extends({
            [`& .${tablePaginationClasses$1.selectIcon}`]: styles.selectIcon,
            [`& .${tablePaginationClasses$1.select}`]: styles.select
          }, styles.input, styles.selectRoot)
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
          overridesResolver: (props, styles) => styles.menuItem
        })({});
        const TablePaginationDisplayedRows = styled("p", {
          name: "MuiTablePagination",
          slot: "DisplayedRows",
          overridesResolver: (props, styles) => styles.displayedRows
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
        const useUtilityClasses = ownerState => {
          const classes = ownerState.classes;
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
        const TablePagination = /* @__PURE__ */reactExports.forwardRef(function TablePagination2(inProps, ref) {
          const props = useThemeProps({
            props: inProps,
            name: "MuiTablePagination"
          });
          const _props$ActionsCompone = props.ActionsComponent,
            ActionsComponent = _props$ActionsCompone === void 0 ? TablePaginationActions$1 : _props$ActionsCompone,
            backIconButtonProps = props.backIconButtonProps,
            className = props.className,
            colSpanProp = props.colSpan,
            _props$component = props.component,
            component = _props$component === void 0 ? TableCell : _props$component,
            count = props.count,
            _props$getItemAriaLab = props.getItemAriaLabel,
            getItemAriaLabel = _props$getItemAriaLab === void 0 ? defaultGetAriaLabel : _props$getItemAriaLab,
            _props$labelDisplayed = props.labelDisplayedRows,
            labelDisplayedRows = _props$labelDisplayed === void 0 ? defaultLabelDisplayedRows : _props$labelDisplayed,
            _props$labelRowsPerPa = props.labelRowsPerPage,
            labelRowsPerPage = _props$labelRowsPerPa === void 0 ? "Rows per page:" : _props$labelRowsPerPa,
            nextIconButtonProps = props.nextIconButtonProps,
            onPageChange = props.onPageChange,
            onRowsPerPageChange = props.onRowsPerPageChange,
            page = props.page,
            rowsPerPage = props.rowsPerPage,
            _props$rowsPerPageOpt = props.rowsPerPageOptions,
            rowsPerPageOptions = _props$rowsPerPageOpt === void 0 ? [10, 25, 50, 100] : _props$rowsPerPageOpt,
            _props$SelectProps = props.SelectProps,
            SelectProps = _props$SelectProps === void 0 ? {} : _props$SelectProps,
            _props$showFirstButto = props.showFirstButton,
            showFirstButton = _props$showFirstButto === void 0 ? false : _props$showFirstButto,
            _props$showLastButton = props.showLastButton,
            showLastButton = _props$showLastButton === void 0 ? false : _props$showLastButton,
            other = _objectWithoutPropertiesLoose(props, _excluded);
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
          return /* @__PURE__ */jsxRuntimeExports.jsx(TablePaginationRoot, _extends({
            colSpan,
            ref,
            as: component,
            ownerState,
            className: clsx(classes.root, className)
          }, other, {
            children: /* @__PURE__ */jsxRuntimeExports.jsxs(TablePaginationToolbar, {
              className: classes.toolbar,
              children: [/* @__PURE__ */jsxRuntimeExports.jsx(TablePaginationSpacer, {
                className: classes.spacer
              }), rowsPerPageOptions.length > 1 && /* @__PURE__ */jsxRuntimeExports.jsx(TablePaginationSelectLabel, {
                className: classes.selectLabel,
                id: labelId,
                children: labelRowsPerPage
              }), rowsPerPageOptions.length > 1 && /* @__PURE__ */jsxRuntimeExports.jsx(TablePaginationSelect, _extends({
                variant: "standard"
              }, !SelectProps.variant && {
                input: _InputBase || (_InputBase = /* @__PURE__ */jsxRuntimeExports.jsx(InputBase, {}))
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
                children: rowsPerPageOptions.map(rowsPerPageOption => /* @__PURE__ */reactExports.createElement(MenuItemComponent, _extends({}, !isHostComponent(MenuItemComponent) && {
                  ownerState
                }, {
                  className: classes.menuItem,
                  key: rowsPerPageOption.label ? rowsPerPageOption.label : rowsPerPageOption,
                  value: rowsPerPageOption.value ? rowsPerPageOption.value : rowsPerPageOption
                }), rowsPerPageOption.label ? rowsPerPageOption.label : rowsPerPageOption))
              })), /* @__PURE__ */jsxRuntimeExports.jsx(TablePaginationDisplayedRows, {
                className: classes.displayedRows,
                children: labelDisplayedRows({
                  from: count === 0 ? 0 : page * rowsPerPage + 1,
                  to: getLabelDisplayedRowsTo(),
                  count: count === -1 ? -1 : count,
                  page
                })
              }), /* @__PURE__ */jsxRuntimeExports.jsx(ActionsComponent, {
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
        var _default = (0, _createSvgIcon.default)( /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
          d: "M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z"
        }), 'Event');
        default_1 = Event.default = _default;
        const mainContainer = "_mainContainer_1wist_1";
        const loadingWrapper = "_loadingWrapper_1wist_9";
        const styles$1 = {
          mainContainer: mainContainer,
          loadingWrapper: loadingWrapper
        };
        const wrapper = "_wrapper_d86h8_1";
        const action = "_action_d86h8_12";
        const styles = {
          wrapper: wrapper,
          action: action
        };
        const ResponseDelete = ({
          open,
          onClose,
          onDelete
        }) => {
          const _useTranslation = useTranslation("manage"),
            t = _useTranslation.t;
          return /* @__PURE__ */jsxRuntimeExports.jsx(Modal, {
            sx: {
              ".MuiBackdrop-root": {
                backgroundColor: "rgba(0, 0, 0, 0.3)"
              }
            },
            open,
            onClose,
            "aria-labelledby": "modal-modal-title",
            "aria-describedby": "modal-modal-description",
            children: /* @__PURE__ */jsxRuntimeExports.jsxs(Box, {
              className: styles.wrapper,
              children: [/* @__PURE__ */jsxRuntimeExports.jsx(Typography, {
                children: t("responses.title_delete_response")
              }), /* @__PURE__ */jsxRuntimeExports.jsxs(Box, {
                className: styles.action,
                children: [/* @__PURE__ */jsxRuntimeExports.jsx(Button, {
                  onClick: onDelete,
                  children: t("action_btn.delete")
                }), /* @__PURE__ */jsxRuntimeExports.jsx(Button, {
                  onClick: onClose,
                  children: t("action_btn.cancel")
                })]
              })]
            })
          });
        };
        var FileSaver_min = {
          exports: {}
        };
        (function (module, exports) {
          (function (a, b) {
            b();
          })(commonjsGlobal, function () {
            function b(a, b) {
              return "undefined" == typeof b ? b = {
                autoBom: !1
              } : "object" != typeof b && (console.warn("Deprecated: Expected third argument to be a object"), b = {
                autoBom: !b
              }), b.autoBom && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(a.type) ? new Blob(["\uFEFF", a], {
                type: a.type
              }) : a;
            }
            function c(a, b, c) {
              var d = new XMLHttpRequest();
              d.open("GET", a), d.responseType = "blob", d.onload = function () {
                g(d.response, b, c);
              }, d.onerror = function () {
                console.error("could not download file");
              }, d.send();
            }
            function d(a) {
              var b = new XMLHttpRequest();
              b.open("HEAD", a, !1);
              try {
                b.send();
              } catch (a) {}
              return 200 <= b.status && 299 >= b.status;
            }
            function e(a) {
              try {
                a.dispatchEvent(new MouseEvent("click"));
              } catch (c) {
                var b = document.createEvent("MouseEvents");
                b.initMouseEvent("click", !0, !0, window, 0, 0, 0, 80, 20, !1, !1, !1, !1, 0, null), a.dispatchEvent(b);
              }
            }
            var f = "object" == typeof window && window.window === window ? window : "object" == typeof self && self.self === self ? self : "object" == typeof commonjsGlobal && commonjsGlobal.global === commonjsGlobal ? commonjsGlobal : void 0,
              a = f.navigator && /Macintosh/.test(navigator.userAgent) && /AppleWebKit/.test(navigator.userAgent) && !/Safari/.test(navigator.userAgent),
              g = f.saveAs || ("object" != typeof window || window !== f ? function () {} : "download" in HTMLAnchorElement.prototype && !a ? function (b, g, h) {
                var i = f.URL || f.webkitURL,
                  j = document.createElement("a");
                g = g || b.name || "download", j.download = g, j.rel = "noopener", "string" == typeof b ? (j.href = b, j.origin === location.origin ? e(j) : d(j.href) ? c(b, g, h) : e(j, j.target = "_blank")) : (j.href = i.createObjectURL(b), setTimeout(function () {
                  i.revokeObjectURL(j.href);
                }, 4E4), setTimeout(function () {
                  e(j);
                }, 0));
              } : "msSaveOrOpenBlob" in navigator ? function (f, g, h) {
                if (g = g || f.name || "download", "string" != typeof f) navigator.msSaveOrOpenBlob(b(f, h), g);else if (d(f)) c(f, g, h);else {
                  var i = document.createElement("a");
                  i.href = f, i.target = "_blank", setTimeout(function () {
                    e(i);
                  });
                }
              } : function (b, d, e, g) {
                if (g = g || open("", "_blank"), g && (g.document.title = g.document.body.innerText = "downloading..."), "string" == typeof b) return c(b, d, e);
                var h = "application/octet-stream" === b.type,
                  i = /constructor/i.test(f.HTMLElement) || f.safari,
                  j = /CriOS\/[\d]+/.test(navigator.userAgent);
                if ((j || h && i || a) && "undefined" != typeof FileReader) {
                  var k = new FileReader();
                  k.onloadend = function () {
                    var a = k.result;
                    a = j ? a : a.replace(/^data:[^;]*;/, "data:attachment/file;"), g ? g.location.href = a : location = a, g = null;
                  }, k.readAsDataURL(b);
                } else {
                  var l = f.URL || f.webkitURL,
                    m = l.createObjectURL(b);
                  g ? g.location = m : location.href = m, g = null, setTimeout(function () {
                    l.revokeObjectURL(m);
                  }, 4E4);
                }
              });
            f.saveAs = g.saveAs = g, module.exports = g;
          });
        })(FileSaver_min);
        var FileSaver_minExports = FileSaver_min.exports;
        const FileSaver = /*@__PURE__*/getDefaultExportFromCjs(FileSaver_minExports);
        function ResponsesSurvey({
          viewEvents
        }) {
          const _useTranslation2 = useTranslation("manage"),
            t = _useTranslation2.t;
          const _reactExports$useStat = reactExports.useState(true),
            _reactExports$useStat2 = _slicedToArray(_reactExports$useStat, 2),
            fetching = _reactExports$useStat2[0],
            setFetching = _reactExports$useStat2[1];
          const dispatch = useDispatch();
          const _reactExports$useStat3 = reactExports.useState(false),
            _reactExports$useStat4 = _slicedToArray(_reactExports$useStat3, 2),
            dbResponses = _reactExports$useStat4[0],
            setDbResponses = _reactExports$useStat4[1];
          const _reactExports$useStat5 = reactExports.useState("none"),
            _reactExports$useStat6 = _slicedToArray(_reactExports$useStat5, 2),
            completeResponses = _reactExports$useStat6[0],
            setCompleteResponses = _reactExports$useStat6[1];
          const _reactExports$useStat7 = reactExports.useState(null),
            _reactExports$useStat8 = _slicedToArray(_reactExports$useStat7, 2),
            surveyor = _reactExports$useStat8[0],
            setSurveyor = _reactExports$useStat8[1];
          const _useParams = useParams(),
            surveyId = _useParams.surveyId;
          const processApirror = e => {
            setFetching(false);
            onApiError({
              error: e,
              globalErrorHandler: processedError => {
                dispatch(onError(processedError));
              }
            });
          };
          const _reactExports$useStat9 = reactExports.useState(null),
            _reactExports$useStat10 = _slicedToArray(_reactExports$useStat9, 2),
            allResponse = _reactExports$useStat10[0],
            setAllResponse = _reactExports$useStat10[1];
          const _reactExports$useStat11 = reactExports.useState(1),
            _reactExports$useStat12 = _slicedToArray(_reactExports$useStat11, 2),
            page = _reactExports$useStat12[0],
            setPage = _reactExports$useStat12[1];
          const _reactExports$useStat13 = reactExports.useState(10),
            _reactExports$useStat14 = _slicedToArray(_reactExports$useStat13, 2),
            rowsPerPage = _reactExports$useStat14[0],
            setRowsPerPage = _reactExports$useStat14[1];
          const exportResponses = () => {
            setFetching(true);
            SurveyService.exportResponses(surveyId, dbResponses, completeResponses).then(data => {
              if (data) {
                var file = new File([data], `${surveyId}-responses-export.csv`, {
                  type: "text/csv;charset=utf-8"
                });
                FileSaver.saveAs(file);
              }
              setFetching(false);
            }).catch(err => {
              processApirror(err);
            });
          };
          const onSurveyorClicked = response => {
            setCompleteResponses("none");
            setSurveyor(response.surveyorID);
          };
          const fetchResponses = () => {
            console.log("fetchResponses");
            setFetching(true);
            SurveyService.allResponse(surveyId, dbResponses, page, rowsPerPage, completeResponses, surveyor).then(data => {
              if (data) {
                setAllResponse(data);
              }
              setFetching(false);
            }).catch(err => {
              processApirror(err);
            });
          };
          reactExports.useEffect(() => {
            fetchResponses();
          }, [page, rowsPerPage, dbResponses, completeResponses, surveyor]);
          const _reactExports$useStat15 = reactExports.useState(),
            _reactExports$useStat16 = _slicedToArray(_reactExports$useStat15, 2),
            responseToDelete = _reactExports$useStat16[0],
            setResponseToDelete = _reactExports$useStat16[1];
          const onCloseModal = () => {
            setResponseToDelete(null);
          };
          const deleteResponse = () => {
            onCloseModal();
            SurveyService.deleteResponse(surveyId, responseToDelete.id).then(() => {
              fetchResponses();
            }).catch(e => {
              processApirror(e);
            });
          };
          return /* @__PURE__ */jsxRuntimeExports.jsxs(Box, {
            className: styles$1.mainContainer,
            children: [/* @__PURE__ */jsxRuntimeExports.jsx(FormControlLabel, {
              value: "start",
              labelPlacement: "start",
              control: /* @__PURE__ */jsxRuntimeExports.jsx(Switch, {
                checked: dbResponses,
                onChange: event => {
                  setDbResponses(event.target.checked);
                }
              }),
              label: t("responses.raw_values")
            }), /* @__PURE__ */jsxRuntimeExports.jsx("br", {}), /* @__PURE__ */jsxRuntimeExports.jsx(FormControlLabel, {
              labelPlacement: "start",
              control: /* @__PURE__ */jsxRuntimeExports.jsxs(Select, {
                disabled: surveyor || false,
                sx: {
                  margin: "8px"
                },
                variant: "standard",
                value: completeResponses,
                onChange: event => {
                  setPage(1);
                  setCompleteResponses(event.target.value);
                },
                children: [/* @__PURE__ */jsxRuntimeExports.jsx(MenuItem, {
                  value: "none",
                  children: t("responses.filter_completed_show_all")
                }), /* @__PURE__ */jsxRuntimeExports.jsx(MenuItem, {
                  value: true,
                  children: t("responses.filter_completed_show_completed")
                }), /* @__PURE__ */jsxRuntimeExports.jsx(MenuItem, {
                  value: false,
                  children: t("responses.filter_completed_show_incomplete")
                })]
              }),
              label: t("responses.filter_completed")
            }), /* @__PURE__ */jsxRuntimeExports.jsx("br", {}), /* @__PURE__ */jsxRuntimeExports.jsx(Button, {
              sx: {
                margin: "8px"
              },
              disabled: surveyor || false,
              onClick: () => exportResponses(),
              children: t("responses.export")
            }), surveyor && /* @__PURE__ */jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
              children: [/* @__PURE__ */jsxRuntimeExports.jsx("br", {}), /* @__PURE__ */jsxRuntimeExports.jsx(Button, {
                sx: {
                  margin: "8px"
                },
                onClick: () => setSurveyor(null),
                children: t("responses.reset_surveyor_filter")
              })]
            }), fetching ? /* @__PURE__ */jsxRuntimeExports.jsx("div", {
              className: styles$1.loadingWrapper,
              children: /* @__PURE__ */jsxRuntimeExports.jsx(CircularProgress, {})
            }) : /* @__PURE__ */jsxRuntimeExports.jsxs(Paper, {
              sx: {
                width: "100%",
                mb: 2
              },
              children: [/* @__PURE__ */jsxRuntimeExports.jsx(TableContainer, {
                component: Paper,
                children: /* @__PURE__ */jsxRuntimeExports.jsxs(Table, {
                  sx: {
                    minWidth: 650
                  },
                  "aria-label": "simple table",
                  children: [/* @__PURE__ */jsxRuntimeExports.jsx(TableHead, {
                    children: allResponse && /* @__PURE__ */jsxRuntimeExports.jsxs(TableRow, {
                      children: [/* @__PURE__ */jsxRuntimeExports.jsx(TableCell, {}, "btns"), /* @__PURE__ */jsxRuntimeExports.jsx(TableCell, {
                        align: "left",
                        children: "ID"
                      }, "id"), /* @__PURE__ */jsxRuntimeExports.jsx(TableCell, {
                        align: "left",
                        children: t("responses.preview")
                      }, "preview"), /* @__PURE__ */jsxRuntimeExports.jsx(TableCell, {
                        align: "left",
                        children: t("label.surveyor")
                      }, "surveyor"), /* @__PURE__ */jsxRuntimeExports.jsx(TableCell, {
                        align: "left",
                        children: t("responses.version")
                      }, "version"), /* @__PURE__ */jsxRuntimeExports.jsx(TableCell, {
                        align: "left",
                        children: t("responses.ip_addr")
                      }, "ip"), /* @__PURE__ */jsxRuntimeExports.jsx(TableCell, {
                        align: "left",
                        children: t("responses.start_date")
                      }, "start_date"), /* @__PURE__ */jsxRuntimeExports.jsx(TableCell, {
                        align: "left",
                        children: t("responses.submit_date")
                      }, "submit_date"), /* @__PURE__ */jsxRuntimeExports.jsx(TableCell, {
                        align: "left",
                        children: t("responses.lang")
                      }, "lang"), Object.values(allResponse === null || allResponse === void 0 ? void 0 : allResponse.columnNames).map(label => {
                        return /* @__PURE__ */jsxRuntimeExports.jsx(TableCell, {
                          align: "left",
                          children: stripTags(label)
                        }, label);
                      })]
                    })
                  }), /* @__PURE__ */jsxRuntimeExports.jsx(TableBody, {
                    children: allResponse === null || allResponse === void 0 ? void 0 : allResponse.responses.map(response => {
                      return /* @__PURE__ */jsxRuntimeExports.jsxs(TableRow, {
                        sx: {
                          minHeight: "100px"
                        },
                        children: [/* @__PURE__ */jsxRuntimeExports.jsx(TableCell, {
                          align: "left",
                          children: /* @__PURE__ */jsxRuntimeExports.jsxs(Box, {
                            sx: {
                              display: "flex"
                            },
                            children: [/* @__PURE__ */jsxRuntimeExports.jsx(IconButton, {
                              onClick: () => {
                                setResponseToDelete(response);
                              },
                              children: /* @__PURE__ */jsxRuntimeExports.jsx(default_1$1, {})
                            }), response.hasEvents && /* @__PURE__ */jsxRuntimeExports.jsx(IconButton, {
                              onClick: () => viewEvents(response.id),
                              children: /* @__PURE__ */jsxRuntimeExports.jsx(default_1, {})
                            })]
                          })
                        }, "btns"), /* @__PURE__ */jsxRuntimeExports.jsx(TableCell, {
                          align: "left",
                          children: response.id
                        }, "id"), /* @__PURE__ */jsxRuntimeExports.jsx(TableCell, {
                          align: "left",
                          children: JSON.stringify(response.preview)
                        }, "preview"), /* @__PURE__ */jsxRuntimeExports.jsx(TableCell, {
                          align: "left",
                          children: response.surveyorName ? /* @__PURE__ */jsxRuntimeExports.jsx(Link, {
                            onClick: () => {
                              onSurveyorClicked(response);
                            },
                            children: response.surveyorName
                          }) : ""
                        }, "surveyor"), /* @__PURE__ */jsxRuntimeExports.jsx(TableCell, {
                          align: "left",
                          children: response.version
                        }, "version"), /* @__PURE__ */jsxRuntimeExports.jsx(TableCell, {
                          align: "left",
                          children: response.ipAddress
                        }, "ip"), /* @__PURE__ */jsxRuntimeExports.jsx(TableCell, {
                          align: "left",
                          children: formatlocalDateTime(serverDateTimeToLocalDateTime(response.startDate))
                        }, "startDate"), /* @__PURE__ */jsxRuntimeExports.jsx(TableCell, {
                          align: "left",
                          children: response.submitDate ? formatlocalDateTime(serverDateTimeToLocalDateTime(response.submitDate)) : " - "
                        }, "submitDate"), /* @__PURE__ */jsxRuntimeExports.jsx(TableCell, {
                          align: "left",
                          children: response.lang.code
                        }, "lang"), response.values.map((value, index) => {
                          return /* @__PURE__ */jsxRuntimeExports.jsx(TableCell, {
                            align: "left",
                            children: value === null || value === void 0 || value === "" ? " - " : typeof value === "string" ? value : typeof value === "object" && "size" in value && "filename" in value && "stored_filename" in value ? /* @__PURE__ */jsxRuntimeExports.jsxs("a", {
                              target: "_blank",
                              download: value.stored_filename,
                              href: previewUrl(value.stored_filename),
                              children: [value.filename, " -", Math.round(value.size / 1e3) + "K"]
                            }) : JSON.stringify(value)
                          }, index);
                        })]
                      }, response.id);
                    })
                  })]
                })
              }), /* @__PURE__ */jsxRuntimeExports.jsx(TablePagination$1, {
                rowsPerPageOptions: [10, 25, 50, 100],
                component: "div",
                labelDisplayedRows: ({
                  from,
                  to,
                  count,
                  page: page2
                }) => {
                  return t("responses.label_displayed_rows", {
                    from,
                    to,
                    count
                  });
                },
                labelRowsPerPage: t("responses.label_rows_per_page"),
                count: allResponse === null || allResponse === void 0 ? void 0 : allResponse.totalCount,
                rowsPerPage,
                page: page - 1,
                onPageChange: (event, newPage) => {
                  setPage(newPage + 1);
                },
                onRowsPerPageChange: event => {
                  setRowsPerPage(parseInt(event.target.value, 10));
                  setPage(1);
                }
              })]
            }), Boolean(responseToDelete) && /* @__PURE__ */jsxRuntimeExports.jsx(ResponseDelete, {
              onDelete: deleteResponse,
              open: Boolean(responseToDelete),
              onClose: onCloseModal
            })]
          });
        }
        const index = exports('default', React.memo(ResponsesSurvey));
      }
    };
  });
})();
//# sourceMappingURL=index-legacy-rMa1XnUn.js.map
