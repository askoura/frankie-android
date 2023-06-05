;
(function () {
  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
  function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
  function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
  System.register(['./index-legacy-0a320ccd.js', './Delete-legacy-ae080a29.js', './index-legacy-14699507.js', './index-legacy-28828365.js', './DateUtils-legacy-9d062644.js', './common-legacy-ff14325d.js', './FormControlLabel-legacy-32aac4da.js', './TableRow-legacy-fad657bb.js', './KeyboardArrowRight-legacy-93266759.js', './Toolbar-legacy-1492cd9b.js', './AuthService-legacy-05326db5.js', './ArrowBack-legacy-de20e8b2.js', './LogoutOutlined-legacy-0fdd1448.js'], function (exports, module) {
    'use strict';

    var __vite_style__ = document.createElement('style');
    __vite_style__.textContent = "._mainContainer_1gfdk_1 {\n  margin: auto;\n  max-width: 800px;\n  min-width: 300px;\n}\n\n._loadingWrapper_1gfdk_7 {\n  width: 100%;\n  height: 100%;\n  text-align: center;\n  padding-top: 100px;\n}\n._wrapper_d86h8_1 {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  background: #ffffff;\n  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);\n  border-radius: 8px;\n  padding: 20px;\n}\n\n._action_d86h8_12{\n  text-align: end;\n  margin-top: 16px;\n}\n";
    document.head.appendChild(__vite_style__);
    var createSvgIcon, jsxRuntimeExports, reactExports, _objectWithoutPropertiesLoose, _extends, generateUtilityClasses, generateUtilityClass, styled, useThemeProps, useId, clsx, composeClasses, requireCreateSvgIcon, interopRequireDefaultExports, commonjsGlobal, getDefaultExportFromCjs, useParams, CircularProgress, Link, previewUrl, SurveyService, processError, PROCESSED_ERRORS, Switch, default_1$1, Header, ProcessedError, formatlocalDateTime, serverDateTimeToLocalDateTime, useTheme, IconButton, Select, MenuItem, InputBase, isHostComponent, useTranslation, Modal, Box, Typography, Button, Paper, FormControlLabel, TableCell, TableContainer, Table, TableHead, TableRow, TableBody, KeyboardArrowRight, KeyboardArrowLeft, Toolbar;
    return {
      setters: [function (module) {
        createSvgIcon = module.c;
        jsxRuntimeExports = module.j;
        reactExports = module.r;
        _objectWithoutPropertiesLoose = module._;
        _extends = module.m;
        generateUtilityClasses = module.n;
        generateUtilityClass = module.q;
        styled = module.t;
        useThemeProps = module.v;
        useId = module.w;
        clsx = module.x;
        composeClasses = module.y;
        requireCreateSvgIcon = module.g;
        interopRequireDefaultExports = module.i;
        commonjsGlobal = module.z;
        getDefaultExportFromCjs = module.A;
        useParams = module.a;
        CircularProgress = module.C;
        Link = module.L;
        previewUrl = module.B;
        SurveyService = module.S;
        processError = module.p;
        PROCESSED_ERRORS = module.P;
      }, function (module) {
        Switch = module.S;
        default_1$1 = module.d;
      }, function (module) {
        Header = module.H;
      }, function (module) {
        ProcessedError = module.P;
      }, function (module) {
        formatlocalDateTime = module.f;
        serverDateTimeToLocalDateTime = module.s;
      }, function (module) {
        useTheme = module.f;
        IconButton = module.a;
        Select = module.c;
        MenuItem = module.d;
        InputBase = module.g;
        isHostComponent = module.i;
        useTranslation = module.u;
        Modal = module.M;
        Box = module.B;
        Typography = module.T;
        Button = module.b;
        Paper = module.P;
      }, function (module) {
        FormControlLabel = module.F;
      }, function (module) {
        TableCell = module.d;
        TableContainer = module.T;
        Table = module.a;
        TableHead = module.b;
        TableRow = module.c;
        TableBody = module.e;
      }, function (module) {
        KeyboardArrowRight = module.K;
        KeyboardArrowLeft = module.a;
      }, function (module) {
        Toolbar = module.T;
      }, null, null, null],
      execute: function execute() {
        exports('default', ResponsesSurvey);
        var FirstPageIcon = createSvgIcon( /*#__PURE__*/jsxRuntimeExports.jsx("path", {
          d: "M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"
        }), 'FirstPage');
        var LastPageIcon = createSvgIcon( /*#__PURE__*/jsxRuntimeExports.jsx("path", {
          d: "M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"
        }), 'LastPage');
        var _LastPageIcon, _FirstPageIcon, _KeyboardArrowRight, _KeyboardArrowLeft, _KeyboardArrowLeft2, _KeyboardArrowRight2, _FirstPageIcon2, _LastPageIcon2;
        var _excluded$1 = ["backIconButtonProps", "count", "getItemAriaLabel", "nextIconButtonProps", "onPageChange", "page", "rowsPerPage", "showFirstButton", "showLastButton"];
        var TablePaginationActions = /*#__PURE__*/reactExports.forwardRef(function TablePaginationActions(props, ref) {
          var backIconButtonProps = props.backIconButtonProps,
            count = props.count,
            getItemAriaLabel = props.getItemAriaLabel,
            nextIconButtonProps = props.nextIconButtonProps,
            onPageChange = props.onPageChange,
            page = props.page,
            rowsPerPage = props.rowsPerPage,
            showFirstButton = props.showFirstButton,
            showLastButton = props.showLastButton,
            other = _objectWithoutPropertiesLoose(props, _excluded$1);
          var theme = useTheme();
          var handleFirstPageButtonClick = function handleFirstPageButtonClick(event) {
            onPageChange(event, 0);
          };
          var handleBackButtonClick = function handleBackButtonClick(event) {
            onPageChange(event, page - 1);
          };
          var handleNextButtonClick = function handleNextButtonClick(event) {
            onPageChange(event, page + 1);
          };
          var handleLastPageButtonClick = function handleLastPageButtonClick(event) {
            onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
          };
          return /*#__PURE__*/jsxRuntimeExports.jsxs("div", _extends({
            ref: ref
          }, other, {
            children: [showFirstButton && /*#__PURE__*/jsxRuntimeExports.jsx(IconButton, {
              onClick: handleFirstPageButtonClick,
              disabled: page === 0,
              "aria-label": getItemAriaLabel('first', page),
              title: getItemAriaLabel('first', page),
              children: theme.direction === 'rtl' ? _LastPageIcon || (_LastPageIcon = /*#__PURE__*/jsxRuntimeExports.jsx(LastPageIcon, {})) : _FirstPageIcon || (_FirstPageIcon = /*#__PURE__*/jsxRuntimeExports.jsx(FirstPageIcon, {}))
            }), /*#__PURE__*/jsxRuntimeExports.jsx(IconButton, _extends({
              onClick: handleBackButtonClick,
              disabled: page === 0,
              color: "inherit",
              "aria-label": getItemAriaLabel('previous', page),
              title: getItemAriaLabel('previous', page)
            }, backIconButtonProps, {
              children: theme.direction === 'rtl' ? _KeyboardArrowRight || (_KeyboardArrowRight = /*#__PURE__*/jsxRuntimeExports.jsx(KeyboardArrowRight, {})) : _KeyboardArrowLeft || (_KeyboardArrowLeft = /*#__PURE__*/jsxRuntimeExports.jsx(KeyboardArrowLeft, {}))
            })), /*#__PURE__*/jsxRuntimeExports.jsx(IconButton, _extends({
              onClick: handleNextButtonClick,
              disabled: count !== -1 ? page >= Math.ceil(count / rowsPerPage) - 1 : false,
              color: "inherit",
              "aria-label": getItemAriaLabel('next', page),
              title: getItemAriaLabel('next', page)
            }, nextIconButtonProps, {
              children: theme.direction === 'rtl' ? _KeyboardArrowLeft2 || (_KeyboardArrowLeft2 = /*#__PURE__*/jsxRuntimeExports.jsx(KeyboardArrowLeft, {})) : _KeyboardArrowRight2 || (_KeyboardArrowRight2 = /*#__PURE__*/jsxRuntimeExports.jsx(KeyboardArrowRight, {}))
            })), showLastButton && /*#__PURE__*/jsxRuntimeExports.jsx(IconButton, {
              onClick: handleLastPageButtonClick,
              disabled: page >= Math.ceil(count / rowsPerPage) - 1,
              "aria-label": getItemAriaLabel('last', page),
              title: getItemAriaLabel('last', page),
              children: theme.direction === 'rtl' ? _FirstPageIcon2 || (_FirstPageIcon2 = /*#__PURE__*/jsxRuntimeExports.jsx(FirstPageIcon, {})) : _LastPageIcon2 || (_LastPageIcon2 = /*#__PURE__*/jsxRuntimeExports.jsx(LastPageIcon, {}))
            })]
          }));
        });
        var TablePaginationActions$1 = TablePaginationActions;
        function getTablePaginationUtilityClass(slot) {
          return generateUtilityClass('MuiTablePagination', slot);
        }
        var tablePaginationClasses = generateUtilityClasses('MuiTablePagination', ['root', 'toolbar', 'spacer', 'selectLabel', 'selectRoot', 'select', 'selectIcon', 'input', 'menuItem', 'displayedRows', 'actions']);
        var tablePaginationClasses$1 = tablePaginationClasses;
        var _InputBase;
        var _excluded = ["ActionsComponent", "backIconButtonProps", "className", "colSpan", "component", "count", "getItemAriaLabel", "labelDisplayedRows", "labelRowsPerPage", "nextIconButtonProps", "onPageChange", "onRowsPerPageChange", "page", "rowsPerPage", "rowsPerPageOptions", "SelectProps", "showFirstButton", "showLastButton"];
        var TablePaginationRoot = styled(TableCell, {
          name: 'MuiTablePagination',
          slot: 'Root',
          overridesResolver: function overridesResolver(props, styles) {
            return styles.root;
          }
        })(function (_ref) {
          var theme = _ref.theme;
          return {
            overflow: 'auto',
            color: (theme.vars || theme).palette.text.primary,
            fontSize: theme.typography.pxToRem(14),
            // Increase the specificity to override TableCell.
            '&:last-child': {
              padding: 0
            }
          };
        });
        var TablePaginationToolbar = styled(Toolbar, {
          name: 'MuiTablePagination',
          slot: 'Toolbar',
          overridesResolver: function overridesResolver(props, styles) {
            return _extends(_defineProperty({}, "& .".concat(tablePaginationClasses$1.actions), styles.actions), styles.toolbar);
          }
        })(function (_ref2) {
          var _ref3;
          var theme = _ref2.theme;
          return _ref3 = {
            minHeight: 52,
            paddingRight: 2
          }, _defineProperty(_ref3, "".concat(theme.breakpoints.up('xs'), " and (orientation: landscape)"), {
            minHeight: 52
          }), _defineProperty(_ref3, theme.breakpoints.up('sm'), {
            minHeight: 52,
            paddingRight: 2
          }), _defineProperty(_ref3, "& .".concat(tablePaginationClasses$1.actions), {
            flexShrink: 0,
            marginLeft: 20
          }), _ref3;
        });
        var TablePaginationSpacer = styled('div', {
          name: 'MuiTablePagination',
          slot: 'Spacer',
          overridesResolver: function overridesResolver(props, styles) {
            return styles.spacer;
          }
        })({
          flex: '1 1 100%'
        });
        var TablePaginationSelectLabel = styled('p', {
          name: 'MuiTablePagination',
          slot: 'SelectLabel',
          overridesResolver: function overridesResolver(props, styles) {
            return styles.selectLabel;
          }
        })(function (_ref4) {
          var theme = _ref4.theme;
          return _extends({}, theme.typography.body2, {
            flexShrink: 0
          });
        });
        var TablePaginationSelect = styled(Select, {
          name: 'MuiTablePagination',
          slot: 'Select',
          overridesResolver: function overridesResolver(props, styles) {
            var _extends3;
            return _extends((_extends3 = {}, _defineProperty(_extends3, "& .".concat(tablePaginationClasses$1.selectIcon), styles.selectIcon), _defineProperty(_extends3, "& .".concat(tablePaginationClasses$1.select), styles.select), _extends3), styles.input, styles.selectRoot);
          }
        })(_defineProperty({
          color: 'inherit',
          fontSize: 'inherit',
          flexShrink: 0,
          marginRight: 32,
          marginLeft: 8
        }, "& .".concat(tablePaginationClasses$1.select), {
          paddingLeft: 8,
          paddingRight: 24,
          textAlign: 'right',
          textAlignLast: 'right' // Align <select> on Chrome.
        }));

        var TablePaginationMenuItem = styled(MenuItem, {
          name: 'MuiTablePagination',
          slot: 'MenuItem',
          overridesResolver: function overridesResolver(props, styles) {
            return styles.menuItem;
          }
        })({});
        var TablePaginationDisplayedRows = styled('p', {
          name: 'MuiTablePagination',
          slot: 'DisplayedRows',
          overridesResolver: function overridesResolver(props, styles) {
            return styles.displayedRows;
          }
        })(function (_ref5) {
          var theme = _ref5.theme;
          return _extends({}, theme.typography.body2, {
            flexShrink: 0
          });
        });
        function defaultLabelDisplayedRows(_ref6) {
          var from = _ref6.from,
            to = _ref6.to,
            count = _ref6.count;
          return "".concat(from, "\u2013").concat(to, " of ").concat(count !== -1 ? count : "more than ".concat(to));
        }
        function defaultGetAriaLabel(type) {
          return "Go to ".concat(type, " page");
        }
        var useUtilityClasses = function useUtilityClasses(ownerState) {
          var classes = ownerState.classes;
          var slots = {
            root: ['root'],
            toolbar: ['toolbar'],
            spacer: ['spacer'],
            selectLabel: ['selectLabel'],
            select: ['select'],
            input: ['input'],
            selectIcon: ['selectIcon'],
            menuItem: ['menuItem'],
            displayedRows: ['displayedRows'],
            actions: ['actions']
          };
          return composeClasses(slots, getTablePaginationUtilityClass, classes);
        };

        /**
         * A `TableCell` based component for placing inside `TableFooter` for pagination.
         */
        var TablePagination = /*#__PURE__*/reactExports.forwardRef(function TablePagination(inProps, ref) {
          var props = useThemeProps({
            props: inProps,
            name: 'MuiTablePagination'
          });
          var _props$ActionsCompone = props.ActionsComponent,
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
            labelRowsPerPage = _props$labelRowsPerPa === void 0 ? 'Rows per page:' : _props$labelRowsPerPa,
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
          var ownerState = props;
          var classes = useUtilityClasses(ownerState);
          var MenuItemComponent = SelectProps.native ? 'option' : TablePaginationMenuItem;
          var colSpan;
          if (component === TableCell || component === 'td') {
            colSpan = colSpanProp || 1000; // col-span over everything
          }

          var selectId = useId(SelectProps.id);
          var labelId = useId(SelectProps.labelId);
          var getLabelDisplayedRowsTo = function getLabelDisplayedRowsTo() {
            if (count === -1) {
              return (page + 1) * rowsPerPage;
            }
            return rowsPerPage === -1 ? count : Math.min(count, (page + 1) * rowsPerPage);
          };
          return /*#__PURE__*/jsxRuntimeExports.jsx(TablePaginationRoot, _extends({
            colSpan: colSpan,
            ref: ref,
            as: component,
            ownerState: ownerState,
            className: clsx(classes.root, className)
          }, other, {
            children: /*#__PURE__*/jsxRuntimeExports.jsxs(TablePaginationToolbar, {
              className: classes.toolbar,
              children: [/*#__PURE__*/jsxRuntimeExports.jsx(TablePaginationSpacer, {
                className: classes.spacer
              }), rowsPerPageOptions.length > 1 && /*#__PURE__*/jsxRuntimeExports.jsx(TablePaginationSelectLabel, {
                className: classes.selectLabel,
                id: labelId,
                children: labelRowsPerPage
              }), rowsPerPageOptions.length > 1 && /*#__PURE__*/jsxRuntimeExports.jsx(TablePaginationSelect, _extends({
                variant: "standard"
              }, !SelectProps.variant && {
                input: _InputBase || (_InputBase = /*#__PURE__*/jsxRuntimeExports.jsx(InputBase, {}))
              }, {
                value: rowsPerPage,
                onChange: onRowsPerPageChange,
                id: selectId,
                labelId: labelId
              }, SelectProps, {
                classes: _extends({}, SelectProps.classes, {
                  // TODO v5 remove `classes.input`
                  root: clsx(classes.input, classes.selectRoot, (SelectProps.classes || {}).root),
                  select: clsx(classes.select, (SelectProps.classes || {}).select),
                  // TODO v5 remove `selectIcon`
                  icon: clsx(classes.selectIcon, (SelectProps.classes || {}).icon)
                }),
                children: rowsPerPageOptions.map(function (rowsPerPageOption) {
                  return /*#__PURE__*/reactExports.createElement(MenuItemComponent, _extends({}, !isHostComponent(MenuItemComponent) && {
                    ownerState: ownerState
                  }, {
                    className: classes.menuItem,
                    key: rowsPerPageOption.label ? rowsPerPageOption.label : rowsPerPageOption,
                    value: rowsPerPageOption.value ? rowsPerPageOption.value : rowsPerPageOption
                  }), rowsPerPageOption.label ? rowsPerPageOption.label : rowsPerPageOption);
                })
              })), /*#__PURE__*/jsxRuntimeExports.jsx(TablePaginationDisplayedRows, {
                className: classes.displayedRows,
                children: labelDisplayedRows({
                  from: count === 0 ? 0 : page * rowsPerPage + 1,
                  to: getLabelDisplayedRowsTo(),
                  count: count === -1 ? -1 : count,
                  page: page
                })
              }), /*#__PURE__*/jsxRuntimeExports.jsx(ActionsComponent, {
                className: classes.actions,
                backIconButtonProps: backIconButtonProps,
                count: count,
                nextIconButtonProps: nextIconButtonProps,
                onPageChange: onPageChange,
                page: page,
                rowsPerPage: rowsPerPage,
                showFirstButton: showFirstButton,
                showLastButton: showLastButton,
                getItemAriaLabel: getItemAriaLabel
              })]
            })
          }));
        });
        var TablePagination$1 = TablePagination;
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
        var mainContainer = "_mainContainer_1gfdk_1";
        var loadingWrapper = "_loadingWrapper_1gfdk_7";
        var styles$1 = {
          mainContainer: mainContainer,
          loadingWrapper: loadingWrapper
        };
        var wrapper = "_wrapper_d86h8_1";
        var action = "_action_d86h8_12";
        var styles = {
          wrapper: wrapper,
          action: action
        };
        var ResponseDelete = function ResponseDelete(_ref7) {
          var open = _ref7.open,
            onClose = _ref7.onClose,
            onDelete = _ref7.onDelete;
          var _useTranslation = useTranslation("manage"),
            t = _useTranslation.t;
          return /* @__PURE__ */jsxRuntimeExports.jsx(Modal, {
            sx: {
              ".MuiBackdrop-root": {
                backgroundColor: "rgba(0, 0, 0, 0.3)"
              }
            },
            open: open,
            onClose: onClose,
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
              } : "object" != _typeof(b) && (console.warn("Deprecated: Expected third argument to be a object"), b = {
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
            var f = "object" == (typeof window === "undefined" ? "undefined" : _typeof(window)) && window.window === window ? window : "object" == (typeof self === "undefined" ? "undefined" : _typeof(self)) && self.self === self ? self : "object" == _typeof(commonjsGlobal) && commonjsGlobal.global === commonjsGlobal ? commonjsGlobal : void 0,
              a = f.navigator && /Macintosh/.test(navigator.userAgent) && /AppleWebKit/.test(navigator.userAgent) && !/Safari/.test(navigator.userAgent),
              g = f.saveAs || ("object" != (typeof window === "undefined" ? "undefined" : _typeof(window)) || window !== f ? function () {} : "download" in HTMLAnchorElement.prototype && !a ? function (b, g, h) {
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
        var FileSaver = /*@__PURE__*/getDefaultExportFromCjs(FileSaver_minExports);
        function ResponsesSurvey() {
          var _useTranslation2 = useTranslation("manage"),
            t = _useTranslation2.t;
          var _reactExports$useStat = reactExports.useState(true),
            _reactExports$useStat2 = _slicedToArray(_reactExports$useStat, 2),
            fetching = _reactExports$useStat2[0],
            setFetching = _reactExports$useStat2[1];
          var _reactExports$useStat3 = reactExports.useState(false),
            _reactExports$useStat4 = _slicedToArray(_reactExports$useStat3, 2),
            dbResponses = _reactExports$useStat4[0],
            setDbResponses = _reactExports$useStat4[1];
          var _reactExports$useStat5 = reactExports.useState("none"),
            _reactExports$useStat6 = _slicedToArray(_reactExports$useStat5, 2),
            completeResponses = _reactExports$useStat6[0],
            setCompleteResponses = _reactExports$useStat6[1];
          var _reactExports$useStat7 = reactExports.useState("none"),
            _reactExports$useStat8 = _slicedToArray(_reactExports$useStat7, 2),
            previewResponses = _reactExports$useStat8[0],
            setPreviewResponses = _reactExports$useStat8[1];
          var _reactExports$useStat9 = reactExports.useState(""),
            _reactExports$useStat10 = _slicedToArray(_reactExports$useStat9, 2),
            processedError = _reactExports$useStat10[0],
            setProcessedError = _reactExports$useStat10[1];
          var _reactExports$useStat11 = reactExports.useState(false),
            _reactExports$useStat12 = _slicedToArray(_reactExports$useStat11, 2),
            showError = _reactExports$useStat12[0],
            setShowError = _reactExports$useStat12[1];
          var _useParams = useParams(),
            surveyId = _useParams.surveyId;
          var processApirror = function processApirror(e) {
            setFetching(false);
            var processed = processError(e);
            switch (processed) {
              case PROCESSED_ERRORS.NETWORK_ERR:
              case PROCESSED_ERRORS.BACKEND_DOWN:
                setShowError(true);
                setProcessedError(processed);
                break;
            }
          };
          var _reactExports$useStat13 = reactExports.useState(null),
            _reactExports$useStat14 = _slicedToArray(_reactExports$useStat13, 2),
            allResponse = _reactExports$useStat14[0],
            setAllResponse = _reactExports$useStat14[1];
          var _reactExports$useStat15 = reactExports.useState(1),
            _reactExports$useStat16 = _slicedToArray(_reactExports$useStat15, 2),
            page = _reactExports$useStat16[0],
            setPage = _reactExports$useStat16[1];
          var _reactExports$useStat17 = reactExports.useState(10),
            _reactExports$useStat18 = _slicedToArray(_reactExports$useStat17, 2),
            rowsPerPage = _reactExports$useStat18[0],
            setRowsPerPage = _reactExports$useStat18[1];
          var exportResponses = function exportResponses() {
            setFetching(true);
            SurveyService.exportResponses(surveyId, dbResponses, completeResponses, previewResponses).then(function (data) {
              if (data) {
                var file = new File([data], "".concat(surveyId, "-responses-export.csv"), {
                  type: "text/csv;charset=utf-8"
                });
                FileSaver.saveAs(file);
              }
              setFetching(false);
            }).catch(function (err) {
              processApirror(err);
            });
          };
          var fetchResponses = function fetchResponses() {
            setFetching(true);
            SurveyService.allResponse(surveyId, dbResponses, page, rowsPerPage, completeResponses, previewResponses).then(function (data) {
              if (data) {
                setAllResponse(data);
              }
              setFetching(false);
            }).catch(function (err) {
              processApirror(err);
            });
          };
          reactExports.useEffect(function () {
            fetchResponses();
          }, [page, rowsPerPage, completeResponses, previewResponses]);
          var _reactExports$useStat19 = reactExports.useState(),
            _reactExports$useStat20 = _slicedToArray(_reactExports$useStat19, 2),
            responseToDelete = _reactExports$useStat20[0],
            setResponseToDelete = _reactExports$useStat20[1];
          var onCloseModal = function onCloseModal() {
            setResponseToDelete(null);
          };
          var deleteResponse = function deleteResponse() {
            onCloseModal();
            SurveyService.deleteResponse(surveyId, responseToDelete.id).then(function () {
              fetchResponses();
            }).catch(function (e) {
              processApirror(e);
            });
          };
          return /* @__PURE__ */jsxRuntimeExports.jsxs(Box, {
            className: styles$1.mainContainer,
            children: [showError && /* @__PURE__ */jsxRuntimeExports.jsx(ProcessedError, {
              error: processedError,
              handleClose: function handleClose() {
                return setShowError(false);
              }
            }), /* @__PURE__ */jsxRuntimeExports.jsx(Header, {}), /* @__PURE__ */jsxRuntimeExports.jsx(Typography, {
              variant: "h4",
              sx: {
                mb: "10px"
              },
              children: t("responses.title")
            }), /* @__PURE__ */jsxRuntimeExports.jsx(FormControlLabel, {
              value: "start",
              labelPlacement: "start",
              control: /* @__PURE__ */jsxRuntimeExports.jsx(Switch, {
                checked: dbResponses,
                onChange: function onChange(event) {
                  setDbResponses(event.target.checked);
                  fetchResponses();
                }
              }),
              label: t("responses.raw_values")
            }), /* @__PURE__ */jsxRuntimeExports.jsx("br", {}), /* @__PURE__ */jsxRuntimeExports.jsx(FormControlLabel, {
              labelPlacement: "start",
              control: /* @__PURE__ */jsxRuntimeExports.jsxs(Select, {
                sx: {
                  margin: "8px"
                },
                variant: "standard",
                value: completeResponses,
                onChange: function onChange(event) {
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
            }), /* @__PURE__ */jsxRuntimeExports.jsx("br", {}), /* @__PURE__ */jsxRuntimeExports.jsx(FormControlLabel, {
              labelPlacement: "start",
              control: /* @__PURE__ */jsxRuntimeExports.jsxs(Select, {
                sx: {
                  margin: "8px"
                },
                variant: "standard",
                value: previewResponses,
                onChange: function onChange(event) {
                  setPage(1);
                  setPreviewResponses(event.target.value);
                },
                children: [/* @__PURE__ */jsxRuntimeExports.jsx(MenuItem, {
                  value: "none",
                  children: t("responses.filter_preview_show_all")
                }), /* @__PURE__ */jsxRuntimeExports.jsx(MenuItem, {
                  value: true,
                  children: t("responses.filter_preview_show_preview")
                }), /* @__PURE__ */jsxRuntimeExports.jsx(MenuItem, {
                  value: false,
                  children: t("responses.filter_preview_show_actual")
                })]
              }),
              label: t("responses.filter_preview")
            }), /* @__PURE__ */jsxRuntimeExports.jsx("br", {}), /* @__PURE__ */jsxRuntimeExports.jsx(Button, {
              sx: {
                margin: "8px"
              },
              onClick: function onClick() {
                return exportResponses();
              },
              children: "Export Responses"
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
                      }, "lang"), Object.values(allResponse === null || allResponse === void 0 ? void 0 : allResponse.columnNames).map(function (label) {
                        return /* @__PURE__ */jsxRuntimeExports.jsx(TableCell, {
                          align: "left",
                          children: label
                        }, label);
                      })]
                    })
                  }), /* @__PURE__ */jsxRuntimeExports.jsx(TableBody, {
                    children: allResponse === null || allResponse === void 0 ? void 0 : allResponse.responses.map(function (response) {
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
                              onClick: function onClick() {
                                setResponseToDelete(response);
                              },
                              children: /* @__PURE__ */jsxRuntimeExports.jsx(default_1$1, {})
                            }), response.hasEvents && /* @__PURE__ */jsxRuntimeExports.jsx(Link, {
                              to: "/response-events/".concat(surveyId, "/").concat(response.id),
                              children: /* @__PURE__ */jsxRuntimeExports.jsx(IconButton, {
                                children: /* @__PURE__ */jsxRuntimeExports.jsx(default_1, {})
                              })
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
                        }, "lang"), response.values.map(function (value, index) {
                          return /* @__PURE__ */jsxRuntimeExports.jsx(TableCell, {
                            align: "left",
                            children: value === null || value === void 0 || value === "" ? " - " : typeof value === "string" ? value : _typeof(value) === "object" && "size" in value && "filename" in value && "stored_filename" in value ? /* @__PURE__ */jsxRuntimeExports.jsxs("a", {
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
                labelDisplayedRows: function labelDisplayedRows(_ref8) {
                  var from = _ref8.from,
                    to = _ref8.to,
                    count = _ref8.count,
                    page2 = _ref8.page;
                  return t("responses.label_displayed_rows", {
                    from: from,
                    to: to,
                    count: count
                  });
                },
                labelRowsPerPage: t("responses.label_rows_per_page"),
                count: allResponse === null || allResponse === void 0 ? void 0 : allResponse.totalCount,
                rowsPerPage: rowsPerPage,
                page: page - 1,
                onPageChange: function onPageChange(event, newPage) {
                  setPage(newPage + 1);
                },
                onRowsPerPageChange: function onRowsPerPageChange(event) {
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
      }
    };
  });
})();
