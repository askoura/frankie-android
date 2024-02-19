;
(function () {
  System.register(['./index-legacy-T3s18jo3.js'], function (exports, module) {
    'use strict';

    var reactExports, generateUtilityClass, generateUtilityClasses, styled, _extends, useThemeProps, useTheme, extendSxProp, _objectWithoutPropertiesLoose, jsxRuntimeExports, clsx, resolveBreakpointValues, handleBreakpoints, composeClasses;
    return {
      setters: [module => {
        reactExports = module.r;
        generateUtilityClass = module.a;
        generateUtilityClasses = module.g;
        styled = module.s;
        _extends = module._;
        useThemeProps = module.u;
        useTheme = module.p;
        extendSxProp = module.bl;
        _objectWithoutPropertiesLoose = module.e;
        jsxRuntimeExports = module.j;
        clsx = module.f;
        resolveBreakpointValues = module.bh;
        handleBreakpoints = module.bg;
        composeClasses = module.h;
      }],
      execute: function execute() {
        const GridContext = /* @__PURE__ */reactExports.createContext();
        const GridContext$1 = GridContext;
        function getGridUtilityClass(slot) {
          return generateUtilityClass('MuiGrid', slot);
        }
        const SPACINGS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        const DIRECTIONS = ['column-reverse', 'column', 'row-reverse', 'row'];
        const WRAPS = ['nowrap', 'wrap-reverse', 'wrap'];
        const GRID_SIZES = ['auto', true, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
        const gridClasses = generateUtilityClasses('MuiGrid', ['root', 'container', 'item', 'zeroMinWidth',
        // spacings
        ...SPACINGS.map(spacing => `spacing-xs-${spacing}`),
        // direction values
        ...DIRECTIONS.map(direction => `direction-xs-${direction}`),
        // wrap values
        ...WRAPS.map(wrap => `wrap-xs-${wrap}`),
        // grid sizes for all breakpoints
        ...GRID_SIZES.map(size => `grid-xs-${size}`), ...GRID_SIZES.map(size => `grid-sm-${size}`), ...GRID_SIZES.map(size => `grid-md-${size}`), ...GRID_SIZES.map(size => `grid-lg-${size}`), ...GRID_SIZES.map(size => `grid-xl-${size}`)]);
        const _excluded = ["className", "columns", "columnSpacing", "component", "container", "direction", "item", "rowSpacing", "spacing", "wrap", "zeroMinWidth"];
        function getOffset(val) {
          const parse = parseFloat(val);
          return `${parse}${String(val).replace(String(parse), "") || "px"}`;
        }
        function generateGrid({
          theme,
          ownerState
        }) {
          let size;
          return theme.breakpoints.keys.reduce((globalStyles, breakpoint) => {
            let styles = {};
            if (ownerState[breakpoint]) {
              size = ownerState[breakpoint];
            }
            if (!size) {
              return globalStyles;
            }
            if (size === true) {
              styles = {
                flexBasis: 0,
                flexGrow: 1,
                maxWidth: "100%"
              };
            } else if (size === "auto") {
              styles = {
                flexBasis: "auto",
                flexGrow: 0,
                flexShrink: 0,
                maxWidth: "none",
                width: "auto"
              };
            } else {
              const columnsBreakpointValues = resolveBreakpointValues({
                values: ownerState.columns,
                breakpoints: theme.breakpoints.values
              });
              const columnValue = typeof columnsBreakpointValues === "object" ? columnsBreakpointValues[breakpoint] : columnsBreakpointValues;
              if (columnValue === void 0 || columnValue === null) {
                return globalStyles;
              }
              const width = `${Math.round(size / columnValue * 1e8) / 1e6}%`;
              let more = {};
              if (ownerState.container && ownerState.item && ownerState.columnSpacing !== 0) {
                const themeSpacing = theme.spacing(ownerState.columnSpacing);
                if (themeSpacing !== "0px") {
                  const fullWidth = `calc(${width} + ${getOffset(themeSpacing)})`;
                  more = {
                    flexBasis: fullWidth,
                    maxWidth: fullWidth
                  };
                }
              }
              styles = _extends({
                flexBasis: width,
                flexGrow: 0,
                maxWidth: width
              }, more);
            }
            if (theme.breakpoints.values[breakpoint] === 0) {
              Object.assign(globalStyles, styles);
            } else {
              globalStyles[theme.breakpoints.up(breakpoint)] = styles;
            }
            return globalStyles;
          }, {});
        }
        function generateDirection({
          theme,
          ownerState
        }) {
          const directionValues = resolveBreakpointValues({
            values: ownerState.direction,
            breakpoints: theme.breakpoints.values
          });
          return handleBreakpoints({
            theme
          }, directionValues, propValue => {
            const output = {
              flexDirection: propValue
            };
            if (propValue.indexOf("column") === 0) {
              output[`& > .${gridClasses.item}`] = {
                maxWidth: "none"
              };
            }
            return output;
          });
        }
        function extractZeroValueBreakpointKeys({
          breakpoints,
          values
        }) {
          let nonZeroKey = "";
          Object.keys(values).forEach(key => {
            if (nonZeroKey !== "") {
              return;
            }
            if (values[key] !== 0) {
              nonZeroKey = key;
            }
          });
          const sortedBreakpointKeysByValue = Object.keys(breakpoints).sort((a, b) => {
            return breakpoints[a] - breakpoints[b];
          });
          return sortedBreakpointKeysByValue.slice(0, sortedBreakpointKeysByValue.indexOf(nonZeroKey));
        }
        function generateRowGap({
          theme,
          ownerState
        }) {
          const container = ownerState.container,
            rowSpacing = ownerState.rowSpacing;
          let styles = {};
          if (container && rowSpacing !== 0) {
            const rowSpacingValues = resolveBreakpointValues({
              values: rowSpacing,
              breakpoints: theme.breakpoints.values
            });
            let zeroValueBreakpointKeys;
            if (typeof rowSpacingValues === "object") {
              zeroValueBreakpointKeys = extractZeroValueBreakpointKeys({
                breakpoints: theme.breakpoints.values,
                values: rowSpacingValues
              });
            }
            styles = handleBreakpoints({
              theme
            }, rowSpacingValues, (propValue, breakpoint) => {
              var _zeroValueBreakpointK;
              const themeSpacing = theme.spacing(propValue);
              if (themeSpacing !== "0px") {
                return {
                  marginTop: `-${getOffset(themeSpacing)}`,
                  [`& > .${gridClasses.item}`]: {
                    paddingTop: getOffset(themeSpacing)
                  }
                };
              }
              if ((_zeroValueBreakpointK = zeroValueBreakpointKeys) != null && _zeroValueBreakpointK.includes(breakpoint)) {
                return {};
              }
              return {
                marginTop: 0,
                [`& > .${gridClasses.item}`]: {
                  paddingTop: 0
                }
              };
            });
          }
          return styles;
        }
        function generateColumnGap({
          theme,
          ownerState
        }) {
          const container = ownerState.container,
            columnSpacing = ownerState.columnSpacing;
          let styles = {};
          if (container && columnSpacing !== 0) {
            const columnSpacingValues = resolveBreakpointValues({
              values: columnSpacing,
              breakpoints: theme.breakpoints.values
            });
            let zeroValueBreakpointKeys;
            if (typeof columnSpacingValues === "object") {
              zeroValueBreakpointKeys = extractZeroValueBreakpointKeys({
                breakpoints: theme.breakpoints.values,
                values: columnSpacingValues
              });
            }
            styles = handleBreakpoints({
              theme
            }, columnSpacingValues, (propValue, breakpoint) => {
              var _zeroValueBreakpointK2;
              const themeSpacing = theme.spacing(propValue);
              if (themeSpacing !== "0px") {
                return {
                  width: `calc(100% + ${getOffset(themeSpacing)})`,
                  marginLeft: `-${getOffset(themeSpacing)}`,
                  [`& > .${gridClasses.item}`]: {
                    paddingLeft: getOffset(themeSpacing)
                  }
                };
              }
              if ((_zeroValueBreakpointK2 = zeroValueBreakpointKeys) != null && _zeroValueBreakpointK2.includes(breakpoint)) {
                return {};
              }
              return {
                width: "100%",
                marginLeft: 0,
                [`& > .${gridClasses.item}`]: {
                  paddingLeft: 0
                }
              };
            });
          }
          return styles;
        }
        function resolveSpacingStyles(spacing, breakpoints, styles = {}) {
          if (!spacing || spacing <= 0) {
            return [];
          }
          if (typeof spacing === "string" && !Number.isNaN(Number(spacing)) || typeof spacing === "number") {
            return [styles[`spacing-xs-${String(spacing)}`]];
          }
          const spacingStyles = [];
          breakpoints.forEach(breakpoint => {
            const value = spacing[breakpoint];
            if (Number(value) > 0) {
              spacingStyles.push(styles[`spacing-${breakpoint}-${String(value)}`]);
            }
          });
          return spacingStyles;
        }
        const GridRoot = styled("div", {
          name: "MuiGrid",
          slot: "Root",
          overridesResolver: (props, styles) => {
            const ownerState = props.ownerState;
            const container = ownerState.container,
              direction = ownerState.direction,
              item = ownerState.item,
              spacing = ownerState.spacing,
              wrap = ownerState.wrap,
              zeroMinWidth = ownerState.zeroMinWidth,
              breakpoints = ownerState.breakpoints;
            let spacingStyles = [];
            if (container) {
              spacingStyles = resolveSpacingStyles(spacing, breakpoints, styles);
            }
            const breakpointsStyles = [];
            breakpoints.forEach(breakpoint => {
              const value = ownerState[breakpoint];
              if (value) {
                breakpointsStyles.push(styles[`grid-${breakpoint}-${String(value)}`]);
              }
            });
            return [styles.root, container && styles.container, item && styles.item, zeroMinWidth && styles.zeroMinWidth, ...spacingStyles, direction !== "row" && styles[`direction-xs-${String(direction)}`], wrap !== "wrap" && styles[`wrap-xs-${String(wrap)}`], ...breakpointsStyles];
          }
        })(({
          ownerState
        }) => _extends({
          boxSizing: "border-box"
        }, ownerState.container && {
          display: "flex",
          flexWrap: "wrap",
          width: "100%"
        }, ownerState.item && {
          margin: 0
          // For instance, it's useful when used with a `figure` element.
        }, ownerState.zeroMinWidth && {
          minWidth: 0
        }, ownerState.wrap !== "wrap" && {
          flexWrap: ownerState.wrap
        }), generateDirection, generateRowGap, generateColumnGap, generateGrid);
        function resolveSpacingClasses(spacing, breakpoints) {
          if (!spacing || spacing <= 0) {
            return [];
          }
          if (typeof spacing === "string" && !Number.isNaN(Number(spacing)) || typeof spacing === "number") {
            return [`spacing-xs-${String(spacing)}`];
          }
          const classes = [];
          breakpoints.forEach(breakpoint => {
            const value = spacing[breakpoint];
            if (Number(value) > 0) {
              const className = `spacing-${breakpoint}-${String(value)}`;
              classes.push(className);
            }
          });
          return classes;
        }
        const useUtilityClasses = ownerState => {
          const classes = ownerState.classes,
            container = ownerState.container,
            direction = ownerState.direction,
            item = ownerState.item,
            spacing = ownerState.spacing,
            wrap = ownerState.wrap,
            zeroMinWidth = ownerState.zeroMinWidth,
            breakpoints = ownerState.breakpoints;
          let spacingClasses = [];
          if (container) {
            spacingClasses = resolveSpacingClasses(spacing, breakpoints);
          }
          const breakpointsClasses = [];
          breakpoints.forEach(breakpoint => {
            const value = ownerState[breakpoint];
            if (value) {
              breakpointsClasses.push(`grid-${breakpoint}-${String(value)}`);
            }
          });
          const slots = {
            root: ["root", container && "container", item && "item", zeroMinWidth && "zeroMinWidth", ...spacingClasses, direction !== "row" && `direction-xs-${String(direction)}`, wrap !== "wrap" && `wrap-xs-${String(wrap)}`, ...breakpointsClasses]
          };
          return composeClasses(slots, getGridUtilityClass, classes);
        };
        const Grid = /* @__PURE__ */reactExports.forwardRef(function Grid2(inProps, ref) {
          const themeProps = useThemeProps({
            props: inProps,
            name: "MuiGrid"
          });
          const _useTheme = useTheme(),
            breakpoints = _useTheme.breakpoints;
          const props = extendSxProp(themeProps);
          const className = props.className,
            columnsProp = props.columns,
            columnSpacingProp = props.columnSpacing,
            _props$component = props.component,
            component = _props$component === void 0 ? "div" : _props$component,
            _props$container = props.container,
            container = _props$container === void 0 ? false : _props$container,
            _props$direction = props.direction,
            direction = _props$direction === void 0 ? "row" : _props$direction,
            _props$item = props.item,
            item = _props$item === void 0 ? false : _props$item,
            rowSpacingProp = props.rowSpacing,
            _props$spacing = props.spacing,
            spacing = _props$spacing === void 0 ? 0 : _props$spacing,
            _props$wrap = props.wrap,
            wrap = _props$wrap === void 0 ? "wrap" : _props$wrap,
            _props$zeroMinWidth = props.zeroMinWidth,
            zeroMinWidth = _props$zeroMinWidth === void 0 ? false : _props$zeroMinWidth,
            other = _objectWithoutPropertiesLoose(props, _excluded);
          const rowSpacing = rowSpacingProp || spacing;
          const columnSpacing = columnSpacingProp || spacing;
          const columnsContext = reactExports.useContext(GridContext$1);
          const columns = container ? columnsProp || 12 : columnsContext;
          const breakpointsValues = {};
          const otherFiltered = _extends({}, other);
          breakpoints.keys.forEach(breakpoint => {
            if (other[breakpoint] != null) {
              breakpointsValues[breakpoint] = other[breakpoint];
              delete otherFiltered[breakpoint];
            }
          });
          const ownerState = _extends({}, props, {
            columns,
            container,
            direction,
            item,
            rowSpacing,
            columnSpacing,
            wrap,
            zeroMinWidth,
            spacing
          }, breakpointsValues, {
            breakpoints: breakpoints.keys
          });
          const classes = useUtilityClasses(ownerState);
          return /* @__PURE__ */jsxRuntimeExports.jsx(GridContext$1.Provider, {
            value: columns,
            children: /* @__PURE__ */jsxRuntimeExports.jsx(GridRoot, _extends({
              ownerState,
              className: clsx(classes.root, className),
              as: component,
              ref
            }, otherFiltered))
          });
        });
        const Grid$1 = exports('G', Grid);
      }
    };
  });
})();
//# sourceMappingURL=Grid-legacy-ZQipiKyz.js.map
