import { H as createStyled, I as createTheme, J as useThemeProps, m as _extends, K as handleBreakpoints, M as resolveBreakpointValues, N as createUnarySpacing, O as deepmerge, Q as mergeBreakpointsInOrder, r as reactExports, _ as _objectWithoutPropertiesLoose, j as jsxRuntimeExports, x as clsx, y as composeClasses, q as generateUtilityClass, U as getValue, t as styled$1, v as useThemeProps$1 } from "./index-365b357c.js";
import { h as extendSxProp } from "./common-67893e1c.js";
const styled = createStyled();
const systemStyled = styled;
const _excluded = ["component", "direction", "spacing", "divider", "children", "className", "useFlexGap"];
const defaultTheme = createTheme();
const defaultCreateStyledComponent = systemStyled("div", {
  name: "MuiStack",
  slot: "Root",
  overridesResolver: (props, styles) => styles.root
});
function useThemePropsDefault(props) {
  return useThemeProps({
    props,
    name: "MuiStack",
    defaultTheme
  });
}
function joinChildren(children, separator) {
  const childrenArray = reactExports.Children.toArray(children).filter(Boolean);
  return childrenArray.reduce((output, child, index) => {
    output.push(child);
    if (index < childrenArray.length - 1) {
      output.push(/* @__PURE__ */ reactExports.cloneElement(separator, {
        key: `separator-${index}`
      }));
    }
    return output;
  }, []);
}
const getSideFromDirection = (direction) => {
  return {
    row: "Left",
    "row-reverse": "Right",
    column: "Top",
    "column-reverse": "Bottom"
  }[direction];
};
const style = ({
  ownerState,
  theme
}) => {
  let styles = _extends({
    display: "flex",
    flexDirection: "column"
  }, handleBreakpoints({
    theme
  }, resolveBreakpointValues({
    values: ownerState.direction,
    breakpoints: theme.breakpoints.values
  }), (propValue) => ({
    flexDirection: propValue
  })));
  if (ownerState.spacing) {
    const transformer = createUnarySpacing(theme);
    const base = Object.keys(theme.breakpoints.values).reduce((acc, breakpoint) => {
      if (typeof ownerState.spacing === "object" && ownerState.spacing[breakpoint] != null || typeof ownerState.direction === "object" && ownerState.direction[breakpoint] != null) {
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
    if (typeof directionValues === "object") {
      Object.keys(directionValues).forEach((breakpoint, index, breakpoints) => {
        const directionValue = directionValues[breakpoint];
        if (!directionValue) {
          const previousDirectionValue = index > 0 ? directionValues[breakpoints[index - 1]] : "column";
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
        "& > :not(style) + :not(style)": {
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
    useThemeProps: useThemeProps2 = useThemePropsDefault,
    componentName = "MuiStack"
  } = options;
  const useUtilityClasses = () => {
    const slots = {
      root: ["root"]
    };
    return composeClasses(slots, (slot) => generateUtilityClass(componentName, slot), {});
  };
  const StackRoot = createStyledComponent(style);
  const Stack2 = /* @__PURE__ */ reactExports.forwardRef(function Grid(inProps, ref) {
    const themeProps = useThemeProps2(inProps);
    const props = extendSxProp(themeProps);
    const {
      component = "div",
      direction = "column",
      spacing = 0,
      divider,
      children,
      className,
      useFlexGap = false
    } = props, other = _objectWithoutPropertiesLoose(props, _excluded);
    const ownerState = {
      direction,
      spacing,
      useFlexGap
    };
    const classes = useUtilityClasses();
    return /* @__PURE__ */ jsxRuntimeExports.jsx(StackRoot, _extends({
      as: component,
      ownerState,
      ref,
      className: clsx(classes.root, className)
    }, other, {
      children: divider ? joinChildren(children, divider) : children
    }));
  });
  return Stack2;
}
const Stack = createStack({
  createStyledComponent: styled$1("div", {
    name: "MuiStack",
    slot: "Root",
    overridesResolver: (props, styles) => styles.root
  }),
  useThemeProps: (inProps) => useThemeProps$1({
    props: inProps,
    name: "MuiStack"
  })
});
const Stack$1 = Stack;
export {
  Stack$1 as S
};
