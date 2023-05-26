;
(function () {
  System.register(['./index-legacy-5baa22df.js'], function (exports, module) {
    'use strict';

    var reactExports, generateUtilityClass, generateUtilityClasses, styled, _extends, useThemeProps, _objectWithoutPropertiesLoose, jsxRuntimeExports, clsx, composeClasses, capitalize, lighten, alpha, darken;
    return {
      setters: [module => {
        reactExports = module.r;
        generateUtilityClass = module.q;
        generateUtilityClasses = module.n;
        styled = module.t;
        _extends = module.m;
        useThemeProps = module.v;
        _objectWithoutPropertiesLoose = module._;
        jsxRuntimeExports = module.j;
        clsx = module.x;
        composeClasses = module.y;
        capitalize = module.W;
        lighten = module.av;
        alpha = module.at;
        darken = module.aw;
      }],
      execute: function () {
        /**
         * @ignore - internal component.
         */
        const TableContext = /*#__PURE__*/reactExports.createContext();
        const TableContext$1 = TableContext;
        function getTableUtilityClass(slot) {
          return generateUtilityClass('MuiTable', slot);
        }
        generateUtilityClasses('MuiTable', ['root', 'stickyHeader']);
        const _excluded$5 = ["className", "component", "padding", "size", "stickyHeader"];
        const useUtilityClasses$5 = ownerState => {
          const {
            classes,
            stickyHeader
          } = ownerState;
          const slots = {
            root: ['root', stickyHeader && 'stickyHeader']
          };
          return composeClasses(slots, getTableUtilityClass, classes);
        };
        const TableRoot = styled('table', {
          name: 'MuiTable',
          slot: 'Root',
          overridesResolver: (props, styles) => {
            const {
              ownerState
            } = props;
            return [styles.root, ownerState.stickyHeader && styles.stickyHeader];
          }
        })(({
          theme,
          ownerState
        }) => _extends({
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
        }));
        const defaultComponent$3 = 'table';
        const Table = /*#__PURE__*/reactExports.forwardRef(function Table(inProps, ref) {
          const props = useThemeProps({
            props: inProps,
            name: 'MuiTable'
          });
          const {
              className,
              component = defaultComponent$3,
              padding = 'normal',
              size = 'medium',
              stickyHeader = false
            } = props,
            other = _objectWithoutPropertiesLoose(props, _excluded$5);
          const ownerState = _extends({}, props, {
            component,
            padding,
            size,
            stickyHeader
          });
          const classes = useUtilityClasses$5(ownerState);
          const table = reactExports.useMemo(() => ({
            padding,
            size,
            stickyHeader
          }), [padding, size, stickyHeader]);
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
        const Table$1 = exports('a', Table);

        /**
         * @ignore - internal component.
         */
        const Tablelvl2Context = /*#__PURE__*/reactExports.createContext();
        const Tablelvl2Context$1 = Tablelvl2Context;
        function getTableBodyUtilityClass(slot) {
          return generateUtilityClass('MuiTableBody', slot);
        }
        generateUtilityClasses('MuiTableBody', ['root']);
        const _excluded$4 = ["className", "component"];
        const useUtilityClasses$4 = ownerState => {
          const {
            classes
          } = ownerState;
          const slots = {
            root: ['root']
          };
          return composeClasses(slots, getTableBodyUtilityClass, classes);
        };
        const TableBodyRoot = styled('tbody', {
          name: 'MuiTableBody',
          slot: 'Root',
          overridesResolver: (props, styles) => styles.root
        })({
          display: 'table-row-group'
        });
        const tablelvl2$1 = {
          variant: 'body'
        };
        const defaultComponent$2 = 'tbody';
        const TableBody = /*#__PURE__*/reactExports.forwardRef(function TableBody(inProps, ref) {
          const props = useThemeProps({
            props: inProps,
            name: 'MuiTableBody'
          });
          const {
              className,
              component = defaultComponent$2
            } = props,
            other = _objectWithoutPropertiesLoose(props, _excluded$4);
          const ownerState = _extends({}, props, {
            component
          });
          const classes = useUtilityClasses$4(ownerState);
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
        const TableBody$1 = exports('e', TableBody);
        function getTableCellUtilityClass(slot) {
          return generateUtilityClass('MuiTableCell', slot);
        }
        const tableCellClasses = generateUtilityClasses('MuiTableCell', ['root', 'head', 'body', 'footer', 'sizeSmall', 'sizeMedium', 'paddingCheckbox', 'paddingNone', 'alignLeft', 'alignCenter', 'alignRight', 'alignJustify', 'stickyHeader']);
        const tableCellClasses$1 = tableCellClasses;
        const _excluded$3 = ["align", "className", "component", "padding", "scope", "size", "sortDirection", "variant"];
        const useUtilityClasses$3 = ownerState => {
          const {
            classes,
            variant,
            align,
            padding,
            size,
            stickyHeader
          } = ownerState;
          const slots = {
            root: ['root', variant, stickyHeader && 'stickyHeader', align !== 'inherit' && `align${capitalize(align)}`, padding !== 'normal' && `padding${capitalize(padding)}`, `size${capitalize(size)}`]
          };
          return composeClasses(slots, getTableCellUtilityClass, classes);
        };
        const TableCellRoot = styled('td', {
          name: 'MuiTableCell',
          slot: 'Root',
          overridesResolver: (props, styles) => {
            const {
              ownerState
            } = props;
            return [styles.root, styles[ownerState.variant], styles[`size${capitalize(ownerState.size)}`], ownerState.padding !== 'normal' && styles[`padding${capitalize(ownerState.padding)}`], ownerState.align !== 'inherit' && styles[`align${capitalize(ownerState.align)}`], ownerState.stickyHeader && styles.stickyHeader];
          }
        })(({
          theme,
          ownerState
        }) => _extends({}, theme.typography.body2, {
          display: 'table-cell',
          verticalAlign: 'inherit',
          // Workaround for a rendering bug with spanned columns in Chrome 62.0.
          // Removes the alpha (sets it to 1), and lightens or darkens the theme color.
          borderBottom: theme.vars ? `1px solid ${theme.vars.palette.TableCell.border}` : `1px solid
    ${theme.palette.mode === 'light' ? lighten(alpha(theme.palette.divider, 1), 0.88) : darken(alpha(theme.palette.divider, 1), 0.68)}`,
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
        }, ownerState.size === 'small' && {
          padding: '6px 16px',
          [`&.${tableCellClasses$1.paddingCheckbox}`]: {
            width: 24,
            // prevent the checkbox column from growing
            padding: '0 12px 0 16px',
            '& > *': {
              padding: 0
            }
          }
        }, ownerState.padding === 'checkbox' && {
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
        }));

        /**
         * The component renders a `<th>` element when the parent context is a header
         * or otherwise a `<td>` element.
         */
        const TableCell = /*#__PURE__*/reactExports.forwardRef(function TableCell(inProps, ref) {
          const props = useThemeProps({
            props: inProps,
            name: 'MuiTableCell'
          });
          const {
              align = 'inherit',
              className,
              component: componentProp,
              padding: paddingProp,
              scope: scopeProp,
              size: sizeProp,
              sortDirection,
              variant: variantProp
            } = props,
            other = _objectWithoutPropertiesLoose(props, _excluded$3);
          const table = reactExports.useContext(TableContext$1);
          const tablelvl2 = reactExports.useContext(Tablelvl2Context$1);
          const isHeadCell = tablelvl2 && tablelvl2.variant === 'head';
          let component;
          if (componentProp) {
            component = componentProp;
          } else {
            component = isHeadCell ? 'th' : 'td';
          }
          let scope = scopeProp;
          // scope is not a valid attribute for <td/> elements.
          // source: https://html.spec.whatwg.org/multipage/tables.html#the-td-element
          if (component === 'td') {
            scope = undefined;
          } else if (!scope && isHeadCell) {
            scope = 'col';
          }
          const variant = variantProp || tablelvl2 && tablelvl2.variant;
          const ownerState = _extends({}, props, {
            align,
            component,
            padding: paddingProp || (table && table.padding ? table.padding : 'normal'),
            size: sizeProp || (table && table.size ? table.size : 'medium'),
            sortDirection,
            stickyHeader: variant === 'head' && table && table.stickyHeader,
            variant
          });
          const classes = useUtilityClasses$3(ownerState);
          let ariaSort = null;
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
        const TableCell$1 = exports('d', TableCell);
        function getTableContainerUtilityClass(slot) {
          return generateUtilityClass('MuiTableContainer', slot);
        }
        generateUtilityClasses('MuiTableContainer', ['root']);
        const _excluded$2 = ["className", "component"];
        const useUtilityClasses$2 = ownerState => {
          const {
            classes
          } = ownerState;
          const slots = {
            root: ['root']
          };
          return composeClasses(slots, getTableContainerUtilityClass, classes);
        };
        const TableContainerRoot = styled('div', {
          name: 'MuiTableContainer',
          slot: 'Root',
          overridesResolver: (props, styles) => styles.root
        })({
          width: '100%',
          overflowX: 'auto'
        });
        const TableContainer = /*#__PURE__*/reactExports.forwardRef(function TableContainer(inProps, ref) {
          const props = useThemeProps({
            props: inProps,
            name: 'MuiTableContainer'
          });
          const {
              className,
              component = 'div'
            } = props,
            other = _objectWithoutPropertiesLoose(props, _excluded$2);
          const ownerState = _extends({}, props, {
            component
          });
          const classes = useUtilityClasses$2(ownerState);
          return /*#__PURE__*/jsxRuntimeExports.jsx(TableContainerRoot, _extends({
            ref: ref,
            as: component,
            className: clsx(classes.root, className),
            ownerState: ownerState
          }, other));
        });
        const TableContainer$1 = exports('T', TableContainer);
        function getTableHeadUtilityClass(slot) {
          return generateUtilityClass('MuiTableHead', slot);
        }
        generateUtilityClasses('MuiTableHead', ['root']);
        const _excluded$1 = ["className", "component"];
        const useUtilityClasses$1 = ownerState => {
          const {
            classes
          } = ownerState;
          const slots = {
            root: ['root']
          };
          return composeClasses(slots, getTableHeadUtilityClass, classes);
        };
        const TableHeadRoot = styled('thead', {
          name: 'MuiTableHead',
          slot: 'Root',
          overridesResolver: (props, styles) => styles.root
        })({
          display: 'table-header-group'
        });
        const tablelvl2 = {
          variant: 'head'
        };
        const defaultComponent$1 = 'thead';
        const TableHead = /*#__PURE__*/reactExports.forwardRef(function TableHead(inProps, ref) {
          const props = useThemeProps({
            props: inProps,
            name: 'MuiTableHead'
          });
          const {
              className,
              component = defaultComponent$1
            } = props,
            other = _objectWithoutPropertiesLoose(props, _excluded$1);
          const ownerState = _extends({}, props, {
            component
          });
          const classes = useUtilityClasses$1(ownerState);
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
        const TableHead$1 = exports('b', TableHead);
        function getTableRowUtilityClass(slot) {
          return generateUtilityClass('MuiTableRow', slot);
        }
        const tableRowClasses = generateUtilityClasses('MuiTableRow', ['root', 'selected', 'hover', 'head', 'footer']);
        const tableRowClasses$1 = tableRowClasses;
        const _excluded = ["className", "component", "hover", "selected"];
        const useUtilityClasses = ownerState => {
          const {
            classes,
            selected,
            hover,
            head,
            footer
          } = ownerState;
          const slots = {
            root: ['root', selected && 'selected', hover && 'hover', head && 'head', footer && 'footer']
          };
          return composeClasses(slots, getTableRowUtilityClass, classes);
        };
        const TableRowRoot = styled('tr', {
          name: 'MuiTableRow',
          slot: 'Root',
          overridesResolver: (props, styles) => {
            const {
              ownerState
            } = props;
            return [styles.root, ownerState.head && styles.head, ownerState.footer && styles.footer];
          }
        })(({
          theme
        }) => ({
          color: 'inherit',
          display: 'table-row',
          verticalAlign: 'middle',
          // We disable the focus ring for mouse, touch and keyboard users.
          outline: 0,
          [`&.${tableRowClasses$1.hover}:hover`]: {
            backgroundColor: (theme.vars || theme).palette.action.hover
          },
          [`&.${tableRowClasses$1.selected}`]: {
            backgroundColor: theme.vars ? `rgba(${theme.vars.palette.primary.mainChannel} / ${theme.vars.palette.action.selectedOpacity})` : alpha(theme.palette.primary.main, theme.palette.action.selectedOpacity),
            '&:hover': {
              backgroundColor: theme.vars ? `rgba(${theme.vars.palette.primary.mainChannel} / calc(${theme.vars.palette.action.selectedOpacity} + ${theme.vars.palette.action.hoverOpacity}))` : alpha(theme.palette.primary.main, theme.palette.action.selectedOpacity + theme.palette.action.hoverOpacity)
            }
          }
        }));
        const defaultComponent = 'tr';
        /**
         * Will automatically set dynamic row height
         * based on the material table element parent (head, body, etc).
         */
        const TableRow = /*#__PURE__*/reactExports.forwardRef(function TableRow(inProps, ref) {
          const props = useThemeProps({
            props: inProps,
            name: 'MuiTableRow'
          });
          const {
              className,
              component = defaultComponent,
              hover = false,
              selected = false
            } = props,
            other = _objectWithoutPropertiesLoose(props, _excluded);
          const tablelvl2 = reactExports.useContext(Tablelvl2Context$1);
          const ownerState = _extends({}, props, {
            component,
            hover,
            selected,
            head: tablelvl2 && tablelvl2.variant === 'head',
            footer: tablelvl2 && tablelvl2.variant === 'footer'
          });
          const classes = useUtilityClasses(ownerState);
          return /*#__PURE__*/jsxRuntimeExports.jsx(TableRowRoot, _extends({
            as: component,
            ref: ref,
            className: clsx(classes.root, className),
            role: component === defaultComponent ? null : 'row',
            ownerState: ownerState
          }, other));
        });
        const TableRow$1 = exports('c', TableRow);
      }
    };
  });
})();
