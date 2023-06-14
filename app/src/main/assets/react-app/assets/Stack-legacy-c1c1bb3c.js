;
(function () {
  System.register(['./index-legacy-7ea9dd30.js', './common-legacy-4bc1ef15.js'], function (exports, module) {
    'use strict';

    var createStyled, createTheme, useThemeProps, _extends, handleBreakpoints, resolveBreakpointValues, createUnarySpacing, deepmerge, mergeBreakpointsInOrder, reactExports, _objectWithoutPropertiesLoose, jsxRuntimeExports, clsx, composeClasses, generateUtilityClass, getValue, styled$1, useThemeProps$1, extendSxProp;
    return {
      setters: [module => {
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
      }, module => {
        extendSxProp = module.h;
      }],
      execute: function () {
        const styled = createStyled();
        const systemStyled = styled;
        const _excluded = ["component", "direction", "spacing", "divider", "children", "className", "useFlexGap"];
        const defaultTheme = createTheme();
        // widening Theme to any so that the consumer can own the theme structure.
        const defaultCreateStyledComponent = systemStyled('div', {
          name: 'MuiStack',
          slot: 'Root',
          overridesResolver: (props, styles) => styles.root
        });
        function useThemePropsDefault(props) {
          return useThemeProps({
            props,
            name: 'MuiStack',
            defaultTheme
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
          const childrenArray = reactExports.Children.toArray(children).filter(Boolean);
          return childrenArray.reduce((output, child, index) => {
            output.push(child);
            if (index < childrenArray.length - 1) {
              output.push( /*#__PURE__*/reactExports.cloneElement(separator, {
                key: `separator-${index}`
              }));
            }
            return output;
          }, []);
        }
        const getSideFromDirection = direction => {
          return {
            row: 'Left',
            'row-reverse': 'Right',
            column: 'Top',
            'column-reverse': 'Bottom'
          }[direction];
        };
        const style = ({
          ownerState,
          theme
        }) => {
          let styles = _extends({
            display: 'flex',
            flexDirection: 'column'
          }, handleBreakpoints({
            theme
          }, resolveBreakpointValues({
            values: ownerState.direction,
            breakpoints: theme.breakpoints.values
          }), propValue => ({
            flexDirection: propValue
          })));
          if (ownerState.spacing) {
            const transformer = createUnarySpacing(theme);
            const base = Object.keys(theme.breakpoints.values).reduce((acc, breakpoint) => {
              if (typeof ownerState.spacing === 'object' && ownerState.spacing[breakpoint] != null || typeof ownerState.direction === 'object' && ownerState.direction[breakpoint] != null) {
                acc[breakpoint] = true;
              }
              return acc;
            }, {});
            const directionValues = resolveBreakpointValues({
              values: ownerState.direction,
              base
            });
            const spacingValues = resolveBreakpointValues({
              values: ownerState.spacing,
              base
            });
            if (typeof directionValues === 'object') {
              Object.keys(directionValues).forEach((breakpoint, index, breakpoints) => {
                const directionValue = directionValues[breakpoint];
                if (!directionValue) {
                  const previousDirectionValue = index > 0 ? directionValues[breakpoints[index - 1]] : 'column';
                  directionValues[breakpoint] = previousDirectionValue;
                }
              });
            }
            const styleFromPropValue = (propValue, breakpoint) => {
              if (ownerState.useFlexGap) {
                return {
                  gap: getValue(transformer, propValue)
                };
              }
              return {
                '& > :not(style) + :not(style)': {
                  margin: 0,
                  [`margin${getSideFromDirection(breakpoint ? directionValues[breakpoint] : ownerState.direction)}`]: getValue(transformer, propValue)
                }
              };
            };
            styles = deepmerge(styles, handleBreakpoints({
              theme
            }, spacingValues, styleFromPropValue));
          }
          styles = mergeBreakpointsInOrder(theme.breakpoints, styles);
          return styles;
        };
        function createStack(options = {}) {
          const {
            // This will allow adding custom styled fn (for example for custom sx style function)
            createStyledComponent = defaultCreateStyledComponent,
            useThemeProps = useThemePropsDefault,
            componentName = 'MuiStack'
          } = options;
          const useUtilityClasses = () => {
            const slots = {
              root: ['root']
            };
            return composeClasses(slots, slot => generateUtilityClass(componentName, slot), {});
          };
          const StackRoot = createStyledComponent(style);
          const Stack = /*#__PURE__*/reactExports.forwardRef(function Grid(inProps, ref) {
            const themeProps = useThemeProps(inProps);
            const props = extendSxProp(themeProps); // `color` type conflicts with html color attribute.
            const {
                component = 'div',
                direction = 'column',
                spacing = 0,
                divider,
                children,
                className,
                useFlexGap = false
              } = props,
              other = _objectWithoutPropertiesLoose(props, _excluded);
            const ownerState = {
              direction,
              spacing,
              useFlexGap
            };
            const classes = useUtilityClasses();
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
        const Stack = createStack({
          createStyledComponent: styled$1('div', {
            name: 'MuiStack',
            slot: 'Root',
            overridesResolver: (props, styles) => styles.root
          }),
          useThemeProps: inProps => useThemeProps$1({
            props: inProps,
            name: 'MuiStack'
          })
        });
        const Stack$1 = exports('S', Stack);
      }
    };
  });
})();
