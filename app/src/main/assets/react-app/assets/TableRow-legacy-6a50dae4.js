;
(function () {
  function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
  System.register(['./index-legacy-bc4d1445.js'], function (exports, module) {
    'use strict';

    var reactExports, generateUtilityClass, generateUtilityClasses, styled, _extends, useThemeProps, _objectWithoutPropertiesLoose, jsxRuntimeExports, clsx, composeClasses, capitalize, lighten, alpha, darken;
    return {
      setters: [function (module) {
        reactExports = module.r;
        generateUtilityClass = module.w;
        generateUtilityClasses = module.v;
        styled = module.x;
        _extends = module.t;
        useThemeProps = module.y;
        _objectWithoutPropertiesLoose = module._;
        jsxRuntimeExports = module.j;
        clsx = module.A;
        composeClasses = module.B;
        capitalize = module.X;
        lighten = module.az;
        alpha = module.ax;
        darken = module.aA;
      }],
      execute: function execute() {
        /**
         * @ignore - internal component.
         */
        var TableContext = /*#__PURE__*/reactExports.createContext();
        var TableContext$1 = TableContext;
        function getTableUtilityClass(slot) {
          return generateUtilityClass('MuiTable', slot);
        }
        generateUtilityClasses('MuiTable', ['root', 'stickyHeader']);
        var _excluded$5 = ["className", "component", "padding", "size", "stickyHeader"];
        var useUtilityClasses$5 = function useUtilityClasses$5(ownerState) {
          var classes = ownerState.classes,
            stickyHeader = ownerState.stickyHeader;
          var slots = {
            root: ['root', stickyHeader && 'stickyHeader']
          };
          return composeClasses(slots, getTableUtilityClass, classes);
        };
        var TableRoot = styled('table', {
          name: 'MuiTable',
          slot: 'Root',
          overridesResolver: function overridesResolver(props, styles) {
            var ownerState = props.ownerState;
            return [styles.root, ownerState.stickyHeader && styles.stickyHeader];
          }
        })(function (_ref) {
          var theme = _ref.theme,
            ownerState = _ref.ownerState;
          return _extends({
            display: 'table',
            width: '100%',
            borderCollapse: 'collapse',
            borderSpacing: 0,
            '& caption': _extends({}, theme.typography.body2, {
              padding: theme.spacing(2),
              color: (theme.vars || theme).palette.text.secondary,
              textAlign: 'left',
              captionSide: 'bottom'
            })
          }, ownerState.stickyHeader && {
            borderCollapse: 'separate'
          });
        });
        var defaultComponent$3 = 'table';
        var Table = /*#__PURE__*/reactExports.forwardRef(function Table(inProps, ref) {
          var props = useThemeProps({
            props: inProps,
            name: 'MuiTable'
          });
          var className = props.className,
            _props$component = props.component,
            component = _props$component === void 0 ? defaultComponent$3 : _props$component,
            _props$padding = props.padding,
            padding = _props$padding === void 0 ? 'normal' : _props$padding,
            _props$size = props.size,
            size = _props$size === void 0 ? 'medium' : _props$size,
            _props$stickyHeader = props.stickyHeader,
            stickyHeader = _props$stickyHeader === void 0 ? false : _props$stickyHeader,
            other = _objectWithoutPropertiesLoose(props, _excluded$5);
          var ownerState = _extends({}, props, {
            component: component,
            padding: padding,
            size: size,
            stickyHeader: stickyHeader
          });
          var classes = useUtilityClasses$5(ownerState);
          var table = reactExports.useMemo(function () {
            return {
              padding: padding,
              size: size,
              stickyHeader: stickyHeader
            };
          }, [padding, size, stickyHeader]);
          return /*#__PURE__*/jsxRuntimeExports.jsx(TableContext$1.Provider, {
            value: table,
            children: /*#__PURE__*/jsxRuntimeExports.jsx(TableRoot, _extends({
              as: component,
              role: component === defaultComponent$3 ? null : 'table',
              ref: ref,
              className: clsx(classes.root, className),
              ownerState: ownerState
            }, other))
          });
        });
        var Table$1 = exports('a', Table);

        /**
         * @ignore - internal component.
         */
        var Tablelvl2Context = /*#__PURE__*/reactExports.createContext();
        var Tablelvl2Context$1 = Tablelvl2Context;
        function getTableBodyUtilityClass(slot) {
          return generateUtilityClass('MuiTableBody', slot);
        }
        generateUtilityClasses('MuiTableBody', ['root']);
        var _excluded$4 = ["className", "component"];
        var useUtilityClasses$4 = function useUtilityClasses$4(ownerState) {
          var classes = ownerState.classes;
          var slots = {
            root: ['root']
          };
          return composeClasses(slots, getTableBodyUtilityClass, classes);
        };
        var TableBodyRoot = styled('tbody', {
          name: 'MuiTableBody',
          slot: 'Root',
          overridesResolver: function overridesResolver(props, styles) {
            return styles.root;
          }
        })({
          display: 'table-row-group'
        });
        var tablelvl2$1 = {
          variant: 'body'
        };
        var defaultComponent$2 = 'tbody';
        var TableBody = /*#__PURE__*/reactExports.forwardRef(function TableBody(inProps, ref) {
          var props = useThemeProps({
            props: inProps,
            name: 'MuiTableBody'
          });
          var className = props.className,
            _props$component2 = props.component,
            component = _props$component2 === void 0 ? defaultComponent$2 : _props$component2,
            other = _objectWithoutPropertiesLoose(props, _excluded$4);
          var ownerState = _extends({}, props, {
            component: component
          });
          var classes = useUtilityClasses$4(ownerState);
          return /*#__PURE__*/jsxRuntimeExports.jsx(Tablelvl2Context$1.Provider, {
            value: tablelvl2$1,
            children: /*#__PURE__*/jsxRuntimeExports.jsx(TableBodyRoot, _extends({
              className: clsx(classes.root, className),
              as: component,
              ref: ref,
              role: component === defaultComponent$2 ? null : 'rowgroup',
              ownerState: ownerState
            }, other))
          });
        });
        var TableBody$1 = exports('e', TableBody);
        function getTableCellUtilityClass(slot) {
          return generateUtilityClass('MuiTableCell', slot);
        }
        var tableCellClasses = generateUtilityClasses('MuiTableCell', ['root', 'head', 'body', 'footer', 'sizeSmall', 'sizeMedium', 'paddingCheckbox', 'paddingNone', 'alignLeft', 'alignCenter', 'alignRight', 'alignJustify', 'stickyHeader']);
        var tableCellClasses$1 = tableCellClasses;
        var _excluded$3 = ["align", "className", "component", "padding", "scope", "size", "sortDirection", "variant"];
        var useUtilityClasses$3 = function useUtilityClasses$3(ownerState) {
          var classes = ownerState.classes,
            variant = ownerState.variant,
            align = ownerState.align,
            padding = ownerState.padding,
            size = ownerState.size,
            stickyHeader = ownerState.stickyHeader;
          var slots = {
            root: ['root', variant, stickyHeader && 'stickyHeader', align !== 'inherit' && "align".concat(capitalize(align)), padding !== 'normal' && "padding".concat(capitalize(padding)), "size".concat(capitalize(size))]
          };
          return composeClasses(slots, getTableCellUtilityClass, classes);
        };
        var TableCellRoot = styled('td', {
          name: 'MuiTableCell',
          slot: 'Root',
          overridesResolver: function overridesResolver(props, styles) {
            var ownerState = props.ownerState;
            return [styles.root, styles[ownerState.variant], styles["size".concat(capitalize(ownerState.size))], ownerState.padding !== 'normal' && styles["padding".concat(capitalize(ownerState.padding))], ownerState.align !== 'inherit' && styles["align".concat(capitalize(ownerState.align))], ownerState.stickyHeader && styles.stickyHeader];
          }
        })(function (_ref2) {
          var theme = _ref2.theme,
            ownerState = _ref2.ownerState;
          return _extends({}, theme.typography.body2, {
            display: 'table-cell',
            verticalAlign: 'inherit',
            // Workaround for a rendering bug with spanned columns in Chrome 62.0.
            // Removes the alpha (sets it to 1), and lightens or darkens the theme color.
            borderBottom: theme.vars ? "1px solid ".concat(theme.vars.palette.TableCell.border) : "1px solid\n    ".concat(theme.palette.mode === 'light' ? lighten(alpha(theme.palette.divider, 1), 0.88) : darken(alpha(theme.palette.divider, 1), 0.68)),
            textAlign: 'left',
            padding: 16
          }, ownerState.variant === 'head' && {
            color: (theme.vars || theme).palette.text.primary,
            lineHeight: theme.typography.pxToRem(24),
            fontWeight: theme.typography.fontWeightMedium
          }, ownerState.variant === 'body' && {
            color: (theme.vars || theme).palette.text.primary
          }, ownerState.variant === 'footer' && {
            color: (theme.vars || theme).palette.text.secondary,
            lineHeight: theme.typography.pxToRem(21),
            fontSize: theme.typography.pxToRem(12)
          }, ownerState.size === 'small' && _defineProperty({
            padding: '6px 16px'
          }, "&.".concat(tableCellClasses$1.paddingCheckbox), {
            width: 24,
            // prevent the checkbox column from growing
            padding: '0 12px 0 16px',
            '& > *': {
              padding: 0
            }
          }), ownerState.padding === 'checkbox' && {
            width: 48,
            // prevent the checkbox column from growing
            padding: '0 0 0 4px'
          }, ownerState.padding === 'none' && {
            padding: 0
          }, ownerState.align === 'left' && {
            textAlign: 'left'
          }, ownerState.align === 'center' && {
            textAlign: 'center'
          }, ownerState.align === 'right' && {
            textAlign: 'right',
            flexDirection: 'row-reverse'
          }, ownerState.align === 'justify' && {
            textAlign: 'justify'
          }, ownerState.stickyHeader && {
            position: 'sticky',
            top: 0,
            zIndex: 2,
            backgroundColor: (theme.vars || theme).palette.background.default
          });
        });

        /**
         * The component renders a `<th>` element when the parent context is a header
         * or otherwise a `<td>` element.
         */
        var TableCell = /*#__PURE__*/reactExports.forwardRef(function TableCell(inProps, ref) {
          var props = useThemeProps({
            props: inProps,
            name: 'MuiTableCell'
          });
          var _props$align = props.align,
            align = _props$align === void 0 ? 'inherit' : _props$align,
            className = props.className,
            componentProp = props.component,
            paddingProp = props.padding,
            scopeProp = props.scope,
            sizeProp = props.size,
            sortDirection = props.sortDirection,
            variantProp = props.variant,
            other = _objectWithoutPropertiesLoose(props, _excluded$3);
          var table = reactExports.useContext(TableContext$1);
          var tablelvl2 = reactExports.useContext(Tablelvl2Context$1);
          var isHeadCell = tablelvl2 && tablelvl2.variant === 'head';
          var component;
          if (componentProp) {
            component = componentProp;
          } else {
            component = isHeadCell ? 'th' : 'td';
          }
          var scope = scopeProp;
          // scope is not a valid attribute for <td/> elements.
          // source: https://html.spec.whatwg.org/multipage/tables.html#the-td-element
          if (component === 'td') {
            scope = undefined;
          } else if (!scope && isHeadCell) {
            scope = 'col';
          }
          var variant = variantProp || tablelvl2 && tablelvl2.variant;
          var ownerState = _extends({}, props, {
            align: align,
            component: component,
            padding: paddingProp || (table && table.padding ? table.padding : 'normal'),
            size: sizeProp || (table && table.size ? table.size : 'medium'),
            sortDirection: sortDirection,
            stickyHeader: variant === 'head' && table && table.stickyHeader,
            variant: variant
          });
          var classes = useUtilityClasses$3(ownerState);
          var ariaSort = null;
          if (sortDirection) {
            ariaSort = sortDirection === 'asc' ? 'ascending' : 'descending';
          }
          return /*#__PURE__*/jsxRuntimeExports.jsx(TableCellRoot, _extends({
            as: component,
            ref: ref,
            className: clsx(classes.root, className),
            "aria-sort": ariaSort,
            scope: scope,
            ownerState: ownerState
          }, other));
        });
        var TableCell$1 = exports('d', TableCell);
        function getTableContainerUtilityClass(slot) {
          return generateUtilityClass('MuiTableContainer', slot);
        }
        generateUtilityClasses('MuiTableContainer', ['root']);
        var _excluded$2 = ["className", "component"];
        var useUtilityClasses$2 = function useUtilityClasses$2(ownerState) {
          var classes = ownerState.classes;
          var slots = {
            root: ['root']
          };
          return composeClasses(slots, getTableContainerUtilityClass, classes);
        };
        var TableContainerRoot = styled('div', {
          name: 'MuiTableContainer',
          slot: 'Root',
          overridesResolver: function overridesResolver(props, styles) {
            return styles.root;
          }
        })({
          width: '100%',
          overflowX: 'auto'
        });
        var TableContainer = /*#__PURE__*/reactExports.forwardRef(function TableContainer(inProps, ref) {
          var props = useThemeProps({
            props: inProps,
            name: 'MuiTableContainer'
          });
          var className = props.className,
            _props$component3 = props.component,
            component = _props$component3 === void 0 ? 'div' : _props$component3,
            other = _objectWithoutPropertiesLoose(props, _excluded$2);
          var ownerState = _extends({}, props, {
            component: component
          });
          var classes = useUtilityClasses$2(ownerState);
          return /*#__PURE__*/jsxRuntimeExports.jsx(TableContainerRoot, _extends({
            ref: ref,
            as: component,
            className: clsx(classes.root, className),
            ownerState: ownerState
          }, other));
        });
        var TableContainer$1 = exports('T', TableContainer);
        function getTableHeadUtilityClass(slot) {
          return generateUtilityClass('MuiTableHead', slot);
        }
        generateUtilityClasses('MuiTableHead', ['root']);
        var _excluded$1 = ["className", "component"];
        var useUtilityClasses$1 = function useUtilityClasses$1(ownerState) {
          var classes = ownerState.classes;
          var slots = {
            root: ['root']
          };
          return composeClasses(slots, getTableHeadUtilityClass, classes);
        };
        var TableHeadRoot = styled('thead', {
          name: 'MuiTableHead',
          slot: 'Root',
          overridesResolver: function overridesResolver(props, styles) {
            return styles.root;
          }
        })({
          display: 'table-header-group'
        });
        var tablelvl2 = {
          variant: 'head'
        };
        var defaultComponent$1 = 'thead';
        var TableHead = /*#__PURE__*/reactExports.forwardRef(function TableHead(inProps, ref) {
          var props = useThemeProps({
            props: inProps,
            name: 'MuiTableHead'
          });
          var className = props.className,
            _props$component4 = props.component,
            component = _props$component4 === void 0 ? defaultComponent$1 : _props$component4,
            other = _objectWithoutPropertiesLoose(props, _excluded$1);
          var ownerState = _extends({}, props, {
            component: component
          });
          var classes = useUtilityClasses$1(ownerState);
          return /*#__PURE__*/jsxRuntimeExports.jsx(Tablelvl2Context$1.Provider, {
            value: tablelvl2,
            children: /*#__PURE__*/jsxRuntimeExports.jsx(TableHeadRoot, _extends({
              as: component,
              className: clsx(classes.root, className),
              ref: ref,
              role: component === defaultComponent$1 ? null : 'rowgroup',
              ownerState: ownerState
            }, other))
          });
        });
        var TableHead$1 = exports('b', TableHead);
        function getTableRowUtilityClass(slot) {
          return generateUtilityClass('MuiTableRow', slot);
        }
        var tableRowClasses = generateUtilityClasses('MuiTableRow', ['root', 'selected', 'hover', 'head', 'footer']);
        var tableRowClasses$1 = tableRowClasses;
        var _excluded = ["className", "component", "hover", "selected"];
        var useUtilityClasses = function useUtilityClasses(ownerState) {
          var classes = ownerState.classes,
            selected = ownerState.selected,
            hover = ownerState.hover,
            head = ownerState.head,
            footer = ownerState.footer;
          var slots = {
            root: ['root', selected && 'selected', hover && 'hover', head && 'head', footer && 'footer']
          };
          return composeClasses(slots, getTableRowUtilityClass, classes);
        };
        var TableRowRoot = styled('tr', {
          name: 'MuiTableRow',
          slot: 'Root',
          overridesResolver: function overridesResolver(props, styles) {
            var ownerState = props.ownerState;
            return [styles.root, ownerState.head && styles.head, ownerState.footer && styles.footer];
          }
        })(function (_ref4) {
          var _ref5;
          var theme = _ref4.theme;
          return _ref5 = {
            color: 'inherit',
            display: 'table-row',
            verticalAlign: 'middle',
            // We disable the focus ring for mouse, touch and keyboard users.
            outline: 0
          }, _defineProperty(_ref5, "&.".concat(tableRowClasses$1.hover, ":hover"), {
            backgroundColor: (theme.vars || theme).palette.action.hover
          }), _defineProperty(_ref5, "&.".concat(tableRowClasses$1.selected), {
            backgroundColor: theme.vars ? "rgba(".concat(theme.vars.palette.primary.mainChannel, " / ").concat(theme.vars.palette.action.selectedOpacity, ")") : alpha(theme.palette.primary.main, theme.palette.action.selectedOpacity),
            '&:hover': {
              backgroundColor: theme.vars ? "rgba(".concat(theme.vars.palette.primary.mainChannel, " / calc(").concat(theme.vars.palette.action.selectedOpacity, " + ").concat(theme.vars.palette.action.hoverOpacity, "))") : alpha(theme.palette.primary.main, theme.palette.action.selectedOpacity + theme.palette.action.hoverOpacity)
            }
          }), _ref5;
        });
        var defaultComponent = 'tr';
        /**
         * Will automatically set dynamic row height
         * based on the material table element parent (head, body, etc).
         */
        var TableRow = /*#__PURE__*/reactExports.forwardRef(function TableRow(inProps, ref) {
          var props = useThemeProps({
            props: inProps,
            name: 'MuiTableRow'
          });
          var className = props.className,
            _props$component5 = props.component,
            component = _props$component5 === void 0 ? defaultComponent : _props$component5,
            _props$hover = props.hover,
            hover = _props$hover === void 0 ? false : _props$hover,
            _props$selected = props.selected,
            selected = _props$selected === void 0 ? false : _props$selected,
            other = _objectWithoutPropertiesLoose(props, _excluded);
          var tablelvl2 = reactExports.useContext(Tablelvl2Context$1);
          var ownerState = _extends({}, props, {
            component: component,
            hover: hover,
            selected: selected,
            head: tablelvl2 && tablelvl2.variant === 'head',
            footer: tablelvl2 && tablelvl2.variant === 'footer'
          });
          var classes = useUtilityClasses(ownerState);
          return /*#__PURE__*/jsxRuntimeExports.jsx(TableRowRoot, _extends({
            as: component,
            ref: ref,
            className: clsx(classes.root, className),
            role: component === defaultComponent ? null : 'row',
            ownerState: ownerState
          }, other));
        });
        var TableRow$1 = exports('c', TableRow);
      }
    };
  });
})();
