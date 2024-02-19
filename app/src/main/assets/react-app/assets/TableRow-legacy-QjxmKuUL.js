;
(function () {
  System.register(['./index-legacy-T3s18jo3.js'], function (exports, module) {
    'use strict';

    var reactExports, generateUtilityClass, generateUtilityClasses, styled, _extends, useThemeProps, _objectWithoutPropertiesLoose, jsxRuntimeExports, clsx, composeClasses, capitalize, lighten, alpha, darken;
    return {
      setters: [module => {
        reactExports = module.r;
        generateUtilityClass = module.a;
        generateUtilityClasses = module.g;
        styled = module.s;
        _extends = module._;
        useThemeProps = module.u;
        _objectWithoutPropertiesLoose = module.e;
        jsxRuntimeExports = module.j;
        clsx = module.f;
        composeClasses = module.h;
        capitalize = module.b;
        lighten = module.l;
        alpha = module.b0;
        darken = module.d;
      }],
      execute: function execute() {
        const TableContext = /* @__PURE__ */reactExports.createContext();
        const TableContext$1 = TableContext;
        function getTableUtilityClass(slot) {
          return generateUtilityClass('MuiTable', slot);
        }
        generateUtilityClasses('MuiTable', ['root', 'stickyHeader']);
        const _excluded$4 = ["className", "component", "padding", "size", "stickyHeader"];
        const useUtilityClasses$4 = ownerState => {
          const classes = ownerState.classes,
            stickyHeader = ownerState.stickyHeader;
          const slots = {
            root: ["root", stickyHeader && "stickyHeader"]
          };
          return composeClasses(slots, getTableUtilityClass, classes);
        };
        const TableRoot = styled("table", {
          name: "MuiTable",
          slot: "Root",
          overridesResolver: (props, styles) => {
            const ownerState = props.ownerState;
            return [styles.root, ownerState.stickyHeader && styles.stickyHeader];
          }
        })(({
          theme,
          ownerState
        }) => _extends({
          display: "table",
          width: "100%",
          borderCollapse: "collapse",
          borderSpacing: 0,
          "& caption": _extends({}, theme.typography.body2, {
            padding: theme.spacing(2),
            color: (theme.vars || theme).palette.text.secondary,
            textAlign: "left",
            captionSide: "bottom"
          })
        }, ownerState.stickyHeader && {
          borderCollapse: "separate"
        }));
        const defaultComponent$2 = "table";
        const Table = /* @__PURE__ */reactExports.forwardRef(function Table2(inProps, ref) {
          const props = useThemeProps({
            props: inProps,
            name: "MuiTable"
          });
          const className = props.className,
            _props$component = props.component,
            component = _props$component === void 0 ? defaultComponent$2 : _props$component,
            _props$padding = props.padding,
            padding = _props$padding === void 0 ? "normal" : _props$padding,
            _props$size = props.size,
            size = _props$size === void 0 ? "medium" : _props$size,
            _props$stickyHeader = props.stickyHeader,
            stickyHeader = _props$stickyHeader === void 0 ? false : _props$stickyHeader,
            other = _objectWithoutPropertiesLoose(props, _excluded$4);
          const ownerState = _extends({}, props, {
            component,
            padding,
            size,
            stickyHeader
          });
          const classes = useUtilityClasses$4(ownerState);
          const table = reactExports.useMemo(() => ({
            padding,
            size,
            stickyHeader
          }), [padding, size, stickyHeader]);
          return /* @__PURE__ */jsxRuntimeExports.jsx(TableContext$1.Provider, {
            value: table,
            children: /* @__PURE__ */jsxRuntimeExports.jsx(TableRoot, _extends({
              as: component,
              role: component === defaultComponent$2 ? null : "table",
              ref,
              className: clsx(classes.root, className),
              ownerState
            }, other))
          });
        });
        const Table$1 = exports('a', Table);
        const Tablelvl2Context = /* @__PURE__ */reactExports.createContext();
        const Tablelvl2Context$1 = exports('e', Tablelvl2Context);
        function getTableBodyUtilityClass(slot) {
          return generateUtilityClass('MuiTableBody', slot);
        }
        generateUtilityClasses('MuiTableBody', ['root']);
        const _excluded$3 = ["className", "component"];
        const useUtilityClasses$3 = ownerState => {
          const classes = ownerState.classes;
          const slots = {
            root: ["root"]
          };
          return composeClasses(slots, getTableBodyUtilityClass, classes);
        };
        const TableBodyRoot = styled("tbody", {
          name: "MuiTableBody",
          slot: "Root",
          overridesResolver: (props, styles) => styles.root
        })({
          display: "table-row-group"
        });
        const tablelvl2 = {
          variant: "body"
        };
        const defaultComponent$1 = "tbody";
        const TableBody = /* @__PURE__ */reactExports.forwardRef(function TableBody2(inProps, ref) {
          const props = useThemeProps({
            props: inProps,
            name: "MuiTableBody"
          });
          const className = props.className,
            _props$component2 = props.component,
            component = _props$component2 === void 0 ? defaultComponent$1 : _props$component2,
            other = _objectWithoutPropertiesLoose(props, _excluded$3);
          const ownerState = _extends({}, props, {
            component
          });
          const classes = useUtilityClasses$3(ownerState);
          return /* @__PURE__ */jsxRuntimeExports.jsx(Tablelvl2Context$1.Provider, {
            value: tablelvl2,
            children: /* @__PURE__ */jsxRuntimeExports.jsx(TableBodyRoot, _extends({
              className: clsx(classes.root, className),
              as: component,
              ref,
              role: component === defaultComponent$1 ? null : "rowgroup",
              ownerState
            }, other))
          });
        });
        const TableBody$1 = exports('d', TableBody);
        function getTableCellUtilityClass(slot) {
          return generateUtilityClass('MuiTableCell', slot);
        }
        const tableCellClasses = generateUtilityClasses('MuiTableCell', ['root', 'head', 'body', 'footer', 'sizeSmall', 'sizeMedium', 'paddingCheckbox', 'paddingNone', 'alignLeft', 'alignCenter', 'alignRight', 'alignJustify', 'stickyHeader']);
        const tableCellClasses$1 = tableCellClasses;
        const _excluded$2 = ["align", "className", "component", "padding", "scope", "size", "sortDirection", "variant"];
        const useUtilityClasses$2 = ownerState => {
          const classes = ownerState.classes,
            variant = ownerState.variant,
            align = ownerState.align,
            padding = ownerState.padding,
            size = ownerState.size,
            stickyHeader = ownerState.stickyHeader;
          const slots = {
            root: ["root", variant, stickyHeader && "stickyHeader", align !== "inherit" && `align${capitalize(align)}`, padding !== "normal" && `padding${capitalize(padding)}`, `size${capitalize(size)}`]
          };
          return composeClasses(slots, getTableCellUtilityClass, classes);
        };
        const TableCellRoot = styled("td", {
          name: "MuiTableCell",
          slot: "Root",
          overridesResolver: (props, styles) => {
            const ownerState = props.ownerState;
            return [styles.root, styles[ownerState.variant], styles[`size${capitalize(ownerState.size)}`], ownerState.padding !== "normal" && styles[`padding${capitalize(ownerState.padding)}`], ownerState.align !== "inherit" && styles[`align${capitalize(ownerState.align)}`], ownerState.stickyHeader && styles.stickyHeader];
          }
        })(({
          theme,
          ownerState
        }) => _extends({}, theme.typography.body2, {
          display: "table-cell",
          verticalAlign: "inherit",
          // Workaround for a rendering bug with spanned columns in Chrome 62.0.
          // Removes the alpha (sets it to 1), and lightens or darkens the theme color.
          borderBottom: theme.vars ? `1px solid ${theme.vars.palette.TableCell.border}` : `1px solid
    ${theme.palette.mode === "light" ? lighten(alpha(theme.palette.divider, 1), 0.88) : darken(alpha(theme.palette.divider, 1), 0.68)}`,
          textAlign: "left",
          padding: 16
        }, ownerState.variant === "head" && {
          color: (theme.vars || theme).palette.text.primary,
          lineHeight: theme.typography.pxToRem(24),
          fontWeight: theme.typography.fontWeightMedium
        }, ownerState.variant === "body" && {
          color: (theme.vars || theme).palette.text.primary
        }, ownerState.variant === "footer" && {
          color: (theme.vars || theme).palette.text.secondary,
          lineHeight: theme.typography.pxToRem(21),
          fontSize: theme.typography.pxToRem(12)
        }, ownerState.size === "small" && {
          padding: "6px 16px",
          [`&.${tableCellClasses$1.paddingCheckbox}`]: {
            width: 24,
            // prevent the checkbox column from growing
            padding: "0 12px 0 16px",
            "& > *": {
              padding: 0
            }
          }
        }, ownerState.padding === "checkbox" && {
          width: 48,
          // prevent the checkbox column from growing
          padding: "0 0 0 4px"
        }, ownerState.padding === "none" && {
          padding: 0
        }, ownerState.align === "left" && {
          textAlign: "left"
        }, ownerState.align === "center" && {
          textAlign: "center"
        }, ownerState.align === "right" && {
          textAlign: "right",
          flexDirection: "row-reverse"
        }, ownerState.align === "justify" && {
          textAlign: "justify"
        }, ownerState.stickyHeader && {
          position: "sticky",
          top: 0,
          zIndex: 2,
          backgroundColor: (theme.vars || theme).palette.background.default
        }));
        const TableCell = /* @__PURE__ */reactExports.forwardRef(function TableCell2(inProps, ref) {
          const props = useThemeProps({
            props: inProps,
            name: "MuiTableCell"
          });
          const _props$align = props.align,
            align = _props$align === void 0 ? "inherit" : _props$align,
            className = props.className,
            componentProp = props.component,
            paddingProp = props.padding,
            scopeProp = props.scope,
            sizeProp = props.size,
            sortDirection = props.sortDirection,
            variantProp = props.variant,
            other = _objectWithoutPropertiesLoose(props, _excluded$2);
          const table = reactExports.useContext(TableContext$1);
          const tablelvl2 = reactExports.useContext(Tablelvl2Context$1);
          const isHeadCell = tablelvl2 && tablelvl2.variant === "head";
          let component;
          if (componentProp) {
            component = componentProp;
          } else {
            component = isHeadCell ? "th" : "td";
          }
          let scope = scopeProp;
          if (component === "td") {
            scope = void 0;
          } else if (!scope && isHeadCell) {
            scope = "col";
          }
          const variant = variantProp || tablelvl2 && tablelvl2.variant;
          const ownerState = _extends({}, props, {
            align,
            component,
            padding: paddingProp || (table && table.padding ? table.padding : "normal"),
            size: sizeProp || (table && table.size ? table.size : "medium"),
            sortDirection,
            stickyHeader: variant === "head" && table && table.stickyHeader,
            variant
          });
          const classes = useUtilityClasses$2(ownerState);
          let ariaSort = null;
          if (sortDirection) {
            ariaSort = sortDirection === "asc" ? "ascending" : "descending";
          }
          return /* @__PURE__ */jsxRuntimeExports.jsx(TableCellRoot, _extends({
            as: component,
            ref,
            className: clsx(classes.root, className),
            "aria-sort": ariaSort,
            scope,
            ownerState
          }, other));
        });
        const TableCell$1 = exports('c', TableCell);
        function getTableContainerUtilityClass(slot) {
          return generateUtilityClass('MuiTableContainer', slot);
        }
        generateUtilityClasses('MuiTableContainer', ['root']);
        const _excluded$1 = ["className", "component"];
        const useUtilityClasses$1 = ownerState => {
          const classes = ownerState.classes;
          const slots = {
            root: ["root"]
          };
          return composeClasses(slots, getTableContainerUtilityClass, classes);
        };
        const TableContainerRoot = styled("div", {
          name: "MuiTableContainer",
          slot: "Root",
          overridesResolver: (props, styles) => styles.root
        })({
          width: "100%",
          overflowX: "auto"
        });
        const TableContainer = /* @__PURE__ */reactExports.forwardRef(function TableContainer2(inProps, ref) {
          const props = useThemeProps({
            props: inProps,
            name: "MuiTableContainer"
          });
          const className = props.className,
            _props$component3 = props.component,
            component = _props$component3 === void 0 ? "div" : _props$component3,
            other = _objectWithoutPropertiesLoose(props, _excluded$1);
          const ownerState = _extends({}, props, {
            component
          });
          const classes = useUtilityClasses$1(ownerState);
          return /* @__PURE__ */jsxRuntimeExports.jsx(TableContainerRoot, _extends({
            ref,
            as: component,
            className: clsx(classes.root, className),
            ownerState
          }, other));
        });
        const TableContainer$1 = exports('T', TableContainer);
        function getTableRowUtilityClass(slot) {
          return generateUtilityClass('MuiTableRow', slot);
        }
        const tableRowClasses = generateUtilityClasses('MuiTableRow', ['root', 'selected', 'hover', 'head', 'footer']);
        const tableRowClasses$1 = tableRowClasses;
        const _excluded = ["className", "component", "hover", "selected"];
        const useUtilityClasses = ownerState => {
          const classes = ownerState.classes,
            selected = ownerState.selected,
            hover = ownerState.hover,
            head = ownerState.head,
            footer = ownerState.footer;
          const slots = {
            root: ["root", selected && "selected", hover && "hover", head && "head", footer && "footer"]
          };
          return composeClasses(slots, getTableRowUtilityClass, classes);
        };
        const TableRowRoot = styled("tr", {
          name: "MuiTableRow",
          slot: "Root",
          overridesResolver: (props, styles) => {
            const ownerState = props.ownerState;
            return [styles.root, ownerState.head && styles.head, ownerState.footer && styles.footer];
          }
        })(({
          theme
        }) => ({
          color: "inherit",
          display: "table-row",
          verticalAlign: "middle",
          // We disable the focus ring for mouse, touch and keyboard users.
          outline: 0,
          [`&.${tableRowClasses$1.hover}:hover`]: {
            backgroundColor: (theme.vars || theme).palette.action.hover
          },
          [`&.${tableRowClasses$1.selected}`]: {
            backgroundColor: theme.vars ? `rgba(${theme.vars.palette.primary.mainChannel} / ${theme.vars.palette.action.selectedOpacity})` : alpha(theme.palette.primary.main, theme.palette.action.selectedOpacity),
            "&:hover": {
              backgroundColor: theme.vars ? `rgba(${theme.vars.palette.primary.mainChannel} / calc(${theme.vars.palette.action.selectedOpacity} + ${theme.vars.palette.action.hoverOpacity}))` : alpha(theme.palette.primary.main, theme.palette.action.selectedOpacity + theme.palette.action.hoverOpacity)
            }
          }
        }));
        const defaultComponent = "tr";
        const TableRow = /* @__PURE__ */reactExports.forwardRef(function TableRow2(inProps, ref) {
          const props = useThemeProps({
            props: inProps,
            name: "MuiTableRow"
          });
          const className = props.className,
            _props$component4 = props.component,
            component = _props$component4 === void 0 ? defaultComponent : _props$component4,
            _props$hover = props.hover,
            hover = _props$hover === void 0 ? false : _props$hover,
            _props$selected = props.selected,
            selected = _props$selected === void 0 ? false : _props$selected,
            other = _objectWithoutPropertiesLoose(props, _excluded);
          const tablelvl2 = reactExports.useContext(Tablelvl2Context$1);
          const ownerState = _extends({}, props, {
            component,
            hover,
            selected,
            head: tablelvl2 && tablelvl2.variant === "head",
            footer: tablelvl2 && tablelvl2.variant === "footer"
          });
          const classes = useUtilityClasses(ownerState);
          return /* @__PURE__ */jsxRuntimeExports.jsx(TableRowRoot, _extends({
            as: component,
            ref,
            className: clsx(classes.root, className),
            role: component === defaultComponent ? null : "row",
            ownerState
          }, other));
        });
        const TableRow$1 = exports('b', TableRow);
      }
    };
  });
})();
//# sourceMappingURL=TableRow-legacy-QjxmKuUL.js.map
