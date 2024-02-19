;
(function () {
  System.register(['./index-legacy-T3s18jo3.js'], function (exports, module) {
    'use strict';

    var createStyled, createTheme, useThemeProps, _extends, handleBreakpoints, resolveBreakpointValues, createUnarySpacing, deepmerge, mergeBreakpointsInOrder, reactExports, extendSxProp, _objectWithoutPropertiesLoose, jsxRuntimeExports, clsx, composeClasses, generateUtilityClass, getValue, styled$1, useThemeProps$1, generateUtilityClasses, capitalize, useFormControl, formControlState, Typography;
    return {
      setters: [module => {
        createStyled = module.bd;
        createTheme = module.be;
        useThemeProps = module.bf;
        _extends = module._;
        handleBreakpoints = module.bg;
        resolveBreakpointValues = module.bh;
        createUnarySpacing = module.bi;
        deepmerge = module.bj;
        mergeBreakpointsInOrder = module.bk;
        reactExports = module.r;
        extendSxProp = module.bl;
        _objectWithoutPropertiesLoose = module.e;
        jsxRuntimeExports = module.j;
        clsx = module.f;
        composeClasses = module.h;
        generateUtilityClass = module.a;
        getValue = module.bm;
        styled$1 = module.s;
        useThemeProps$1 = module.u;
        generateUtilityClasses = module.g;
        capitalize = module.b;
        useFormControl = module.aS;
        formControlState = module.bn;
        Typography = module.a0;
      }],
      execute: function execute() {
        const styled = createStyled();
        const systemStyled = styled;
        const _excluded$1 = ["component", "direction", "spacing", "divider", "children", "className", "useFlexGap"];
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
              output.push( /* @__PURE__ */reactExports.cloneElement(separator, {
                key: `separator-${index}`
              }));
            }
            return output;
          }, []);
        }
        const getSideFromDirection = direction => {
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
          }), propValue => ({
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
                // The useFlexGap={false} implement relies on each child to give up control of the margin.
                // We need to reset the margin to avoid double spacing.
                "& > :not(style):not(style)": {
                  margin: 0
                },
                "& > :not(style) ~ :not(style)": {
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
          const _options$createStyled = options.createStyledComponent,
            createStyledComponent = _options$createStyled === void 0 ? defaultCreateStyledComponent : _options$createStyled,
            _options$useThemeProp = options.useThemeProps,
            useThemeProps = _options$useThemeProp === void 0 ? useThemePropsDefault : _options$useThemeProp,
            _options$componentNam = options.componentName,
            componentName = _options$componentNam === void 0 ? "MuiStack" : _options$componentNam;
          const useUtilityClasses = () => {
            const slots = {
              root: ["root"]
            };
            return composeClasses(slots, slot => generateUtilityClass(componentName, slot), {});
          };
          const StackRoot = createStyledComponent(style);
          const Stack = /* @__PURE__ */reactExports.forwardRef(function Grid(inProps, ref) {
            const themeProps = useThemeProps(inProps);
            const props = extendSxProp(themeProps);
            const _props$component = props.component,
              component = _props$component === void 0 ? "div" : _props$component,
              _props$direction = props.direction,
              direction = _props$direction === void 0 ? "column" : _props$direction,
              _props$spacing = props.spacing,
              spacing = _props$spacing === void 0 ? 0 : _props$spacing,
              divider = props.divider,
              children = props.children,
              className = props.className,
              _props$useFlexGap = props.useFlexGap,
              useFlexGap = _props$useFlexGap === void 0 ? false : _props$useFlexGap,
              other = _objectWithoutPropertiesLoose(props, _excluded$1);
            const ownerState = {
              direction,
              spacing,
              useFlexGap
            };
            const classes = useUtilityClasses();
            return /* @__PURE__ */jsxRuntimeExports.jsx(StackRoot, _extends({
              as: component,
              ownerState,
              ref,
              className: clsx(classes.root, className)
            }, other, {
              children: divider ? joinChildren(children, divider) : children
            }));
          });
          return Stack;
        }
        const Stack = createStack({
          createStyledComponent: styled$1("div", {
            name: "MuiStack",
            slot: "Root",
            overridesResolver: (props, styles) => styles.root
          }),
          useThemeProps: inProps => useThemeProps$1({
            props: inProps,
            name: "MuiStack"
          })
        });
        const Stack$1 = exports('S', Stack);
        function getFormControlLabelUtilityClasses(slot) {
          return generateUtilityClass('MuiFormControlLabel', slot);
        }
        const formControlLabelClasses = generateUtilityClasses('MuiFormControlLabel', ['root', 'labelPlacementStart', 'labelPlacementTop', 'labelPlacementBottom', 'disabled', 'label', 'error', 'required', 'asterisk']);
        const formControlLabelClasses$1 = formControlLabelClasses;
        const _excluded = ["checked", "className", "componentsProps", "control", "disabled", "disableTypography", "inputRef", "label", "labelPlacement", "name", "onChange", "required", "slotProps", "value"];
        const useUtilityClasses = ownerState => {
          const classes = ownerState.classes,
            disabled = ownerState.disabled,
            labelPlacement = ownerState.labelPlacement,
            error = ownerState.error,
            required = ownerState.required;
          const slots = {
            root: ["root", disabled && "disabled", `labelPlacement${capitalize(labelPlacement)}`, error && "error", required && "required"],
            label: ["label", disabled && "disabled"],
            asterisk: ["asterisk", error && "error"]
          };
          return composeClasses(slots, getFormControlLabelUtilityClasses, classes);
        };
        const FormControlLabelRoot = styled$1("label", {
          name: "MuiFormControlLabel",
          slot: "Root",
          overridesResolver: (props, styles) => {
            const ownerState = props.ownerState;
            return [{
              [`& .${formControlLabelClasses$1.label}`]: styles.label
            }, styles.root, styles[`labelPlacement${capitalize(ownerState.labelPlacement)}`]];
          }
        })(({
          theme,
          ownerState
        }) => _extends({
          display: "inline-flex",
          alignItems: "center",
          cursor: "pointer",
          // For correct alignment with the text.
          verticalAlign: "middle",
          WebkitTapHighlightColor: "transparent",
          marginLeft: -11,
          marginRight: 16,
          // used for row presentation of radio/checkbox
          [`&.${formControlLabelClasses$1.disabled}`]: {
            cursor: "default"
          }
        }, ownerState.labelPlacement === "start" && {
          flexDirection: "row-reverse",
          marginLeft: 16,
          // used for row presentation of radio/checkbox
          marginRight: -11
        }, ownerState.labelPlacement === "top" && {
          flexDirection: "column-reverse",
          marginLeft: 16
        }, ownerState.labelPlacement === "bottom" && {
          flexDirection: "column",
          marginLeft: 16
        }, {
          [`& .${formControlLabelClasses$1.label}`]: {
            [`&.${formControlLabelClasses$1.disabled}`]: {
              color: (theme.vars || theme).palette.text.disabled
            }
          }
        }));
        const AsteriskComponent = styled$1("span", {
          name: "MuiFormControlLabel",
          slot: "Asterisk",
          overridesResolver: (props, styles) => styles.asterisk
        })(({
          theme
        }) => ({
          [`&.${formControlLabelClasses$1.error}`]: {
            color: (theme.vars || theme).palette.error.main
          }
        }));
        const FormControlLabel = /* @__PURE__ */reactExports.forwardRef(function FormControlLabel2(inProps, ref) {
          var _ref, _slotProps$typography;
          const props = useThemeProps$1({
            props: inProps,
            name: "MuiFormControlLabel"
          });
          const className = props.className,
            _props$componentsProp = props.componentsProps,
            componentsProps = _props$componentsProp === void 0 ? {} : _props$componentsProp,
            control = props.control,
            disabledProp = props.disabled,
            disableTypography = props.disableTypography,
            labelProp = props.label,
            _props$labelPlacement = props.labelPlacement,
            labelPlacement = _props$labelPlacement === void 0 ? "end" : _props$labelPlacement,
            requiredProp = props.required,
            _props$slotProps = props.slotProps,
            slotProps = _props$slotProps === void 0 ? {} : _props$slotProps,
            other = _objectWithoutPropertiesLoose(props, _excluded);
          const muiFormControl = useFormControl();
          const disabled = (_ref = disabledProp != null ? disabledProp : control.props.disabled) != null ? _ref : muiFormControl == null ? void 0 : muiFormControl.disabled;
          const required = requiredProp != null ? requiredProp : control.props.required;
          const controlProps = {
            disabled,
            required
          };
          ["checked", "name", "onChange", "value", "inputRef"].forEach(key => {
            if (typeof control.props[key] === "undefined" && typeof props[key] !== "undefined") {
              controlProps[key] = props[key];
            }
          });
          const fcs = formControlState({
            props,
            muiFormControl,
            states: ["error"]
          });
          const ownerState = _extends({}, props, {
            disabled,
            labelPlacement,
            required,
            error: fcs.error
          });
          const classes = useUtilityClasses(ownerState);
          const typographySlotProps = (_slotProps$typography = slotProps.typography) != null ? _slotProps$typography : componentsProps.typography;
          let label = labelProp;
          if (label != null && label.type !== Typography && !disableTypography) {
            label = /* @__PURE__ */jsxRuntimeExports.jsx(Typography, _extends({
              component: "span"
            }, typographySlotProps, {
              className: clsx(classes.label, typographySlotProps == null ? void 0 : typographySlotProps.className),
              children: label
            }));
          }
          return /* @__PURE__ */jsxRuntimeExports.jsxs(FormControlLabelRoot, _extends({
            className: clsx(classes.root, className),
            ownerState,
            ref
          }, other, {
            children: [/* @__PURE__ */reactExports.cloneElement(control, controlProps), required ? /* @__PURE__ */jsxRuntimeExports.jsxs(Stack$1, {
              direction: "row",
              alignItems: "center",
              children: [label, /* @__PURE__ */jsxRuntimeExports.jsxs(AsteriskComponent, {
                ownerState,
                "aria-hidden": true,
                className: classes.asterisk,
                children: [" ", "*"]
              })]
            }) : label]
          }));
        });
        const FormControlLabel$1 = exports('F', FormControlLabel);
      }
    };
  });
})();
//# sourceMappingURL=FormControlLabel-legacy-0Ne4M7i6.js.map
