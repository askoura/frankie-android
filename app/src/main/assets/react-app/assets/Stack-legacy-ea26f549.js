;
(function () {
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
  function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
  System.register(['./index-legacy-2ed052c8.js', './common-legacy-fd659671.js'], function (exports, module) {
    'use strict';

    var createStyled, createTheme, useThemeProps, _extends, handleBreakpoints, resolveBreakpointValues, createUnarySpacing, deepmerge, mergeBreakpointsInOrder, reactExports, _objectWithoutPropertiesLoose, jsxRuntimeExports, clsx, composeClasses, generateUtilityClass, getValue, styled$1, useThemeProps$1, extendSxProp;
    return {
      setters: [function (module) {
        createStyled = module.H;
        createTheme = module.I;
        useThemeProps = module.J;
        _extends = module.m;
        handleBreakpoints = module.K;
        resolveBreakpointValues = module.M;
        createUnarySpacing = module.N;
        deepmerge = module.O;
        mergeBreakpointsInOrder = module.Q;
        reactExports = module.r;
        _objectWithoutPropertiesLoose = module._;
        jsxRuntimeExports = module.j;
        clsx = module.x;
        composeClasses = module.y;
        generateUtilityClass = module.q;
        getValue = module.U;
        styled$1 = module.t;
        useThemeProps$1 = module.v;
      }, function (module) {
        extendSxProp = module.h;
      }],
      execute: function execute() {
        var styled = createStyled();
        var systemStyled = styled;
        var _excluded = ["component", "direction", "spacing", "divider", "children", "className", "useFlexGap"];
        var defaultTheme = createTheme();
        // widening Theme to any so that the consumer can own the theme structure.
        var defaultCreateStyledComponent = systemStyled('div', {
          name: 'MuiStack',
          slot: 'Root',
          overridesResolver: function overridesResolver(props, styles) {
            return styles.root;
          }
        });
        function useThemePropsDefault(props) {
          return useThemeProps({
            props: props,
            name: 'MuiStack',
            defaultTheme: defaultTheme
          });
        }

        /**
         * Return an array with the separator React element interspersed between
         * each React node of the input children.
         *
         * > joinChildren([1,2,3], 0)
         * [1,0,2,0,3]
         */
        function joinChildren(children, separator) {
          var childrenArray = reactExports.Children.toArray(children).filter(Boolean);
          return childrenArray.reduce(function (output, child, index) {
            output.push(child);
            if (index < childrenArray.length - 1) {
              output.push( /*#__PURE__*/reactExports.cloneElement(separator, {
                key: "separator-".concat(index)
              }));
            }
            return output;
          }, []);
        }
        var getSideFromDirection = function getSideFromDirection(direction) {
          return {
            row: 'Left',
            'row-reverse': 'Right',
            column: 'Top',
            'column-reverse': 'Bottom'
          }[direction];
        };
        var style = function style(_ref) {
          var ownerState = _ref.ownerState,
            theme = _ref.theme;
          var styles = _extends({
            display: 'flex',
            flexDirection: 'column'
          }, handleBreakpoints({
            theme: theme
          }, resolveBreakpointValues({
            values: ownerState.direction,
            breakpoints: theme.breakpoints.values
          }), function (propValue) {
            return {
              flexDirection: propValue
            };
          }));
          if (ownerState.spacing) {
            var transformer = createUnarySpacing(theme);
            var base = Object.keys(theme.breakpoints.values).reduce(function (acc, breakpoint) {
              if (_typeof(ownerState.spacing) === 'object' && ownerState.spacing[breakpoint] != null || _typeof(ownerState.direction) === 'object' && ownerState.direction[breakpoint] != null) {
                acc[breakpoint] = true;
              }
              return acc;
            }, {});
            var directionValues = resolveBreakpointValues({
              values: ownerState.direction,
              base: base
            });
            var spacingValues = resolveBreakpointValues({
              values: ownerState.spacing,
              base: base
            });
            if (_typeof(directionValues) === 'object') {
              Object.keys(directionValues).forEach(function (breakpoint, index, breakpoints) {
                var directionValue = directionValues[breakpoint];
                if (!directionValue) {
                  var previousDirectionValue = index > 0 ? directionValues[breakpoints[index - 1]] : 'column';
                  directionValues[breakpoint] = previousDirectionValue;
                }
              });
            }
            var styleFromPropValue = function styleFromPropValue(propValue, breakpoint) {
              if (ownerState.useFlexGap) {
                return {
                  gap: getValue(transformer, propValue)
                };
              }
              return {
                '& > :not(style) + :not(style)': _defineProperty({
                  margin: 0
                }, "margin".concat(getSideFromDirection(breakpoint ? directionValues[breakpoint] : ownerState.direction)), getValue(transformer, propValue))
              };
            };
            styles = deepmerge(styles, handleBreakpoints({
              theme: theme
            }, spacingValues, styleFromPropValue));
          }
          styles = mergeBreakpointsInOrder(theme.breakpoints, styles);
          return styles;
        };
        function createStack() {
          var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
          var _options$createStyled = options.createStyledComponent,
            createStyledComponent = _options$createStyled === void 0 ? defaultCreateStyledComponent : _options$createStyled,
            _options$useThemeProp = options.useThemeProps,
            useThemeProps = _options$useThemeProp === void 0 ? useThemePropsDefault : _options$useThemeProp,
            _options$componentNam = options.componentName,
            componentName = _options$componentNam === void 0 ? 'MuiStack' : _options$componentNam;
          var useUtilityClasses = function useUtilityClasses() {
            var slots = {
              root: ['root']
            };
            return composeClasses(slots, function (slot) {
              return generateUtilityClass(componentName, slot);
            }, {});
          };
          var StackRoot = createStyledComponent(style);
          var Stack = /*#__PURE__*/reactExports.forwardRef(function Grid(inProps, ref) {
            var themeProps = useThemeProps(inProps);
            var props = extendSxProp(themeProps); // `color` type conflicts with html color attribute.
            var _props$component = props.component,
              component = _props$component === void 0 ? 'div' : _props$component,
              _props$direction = props.direction,
              direction = _props$direction === void 0 ? 'column' : _props$direction,
              _props$spacing = props.spacing,
              spacing = _props$spacing === void 0 ? 0 : _props$spacing,
              divider = props.divider,
              children = props.children,
              className = props.className,
              _props$useFlexGap = props.useFlexGap,
              useFlexGap = _props$useFlexGap === void 0 ? false : _props$useFlexGap,
              other = _objectWithoutPropertiesLoose(props, _excluded);
            var ownerState = {
              direction: direction,
              spacing: spacing,
              useFlexGap: useFlexGap
            };
            var classes = useUtilityClasses();
            return /*#__PURE__*/jsxRuntimeExports.jsx(StackRoot, _extends({
              as: component,
              ownerState: ownerState,
              ref: ref,
              className: clsx(classes.root, className)
            }, other, {
              children: divider ? joinChildren(children, divider) : children
            }));
          });
          return Stack;
        }
        var Stack = createStack({
          createStyledComponent: styled$1('div', {
            name: 'MuiStack',
            slot: 'Root',
            overridesResolver: function overridesResolver(props, styles) {
              return styles.root;
            }
          }),
          useThemeProps: function useThemeProps(inProps) {
            return useThemeProps$1({
              props: inProps,
              name: 'MuiStack'
            });
          }
        });
        var Stack$1 = exports('S', Stack);
      }
    };
  });
})();
