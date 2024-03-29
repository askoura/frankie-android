;
(function () {
  System.register(['./index-legacy-T3s18jo3.js', './SwitchBase-legacy-VpMr3A_z.js', './RadioGroupContext-legacy-1wuSM4bn.js'], function (exports, module) {
    'use strict';

    var createSvgIcon, jsxRuntimeExports, styled, _extends, reactExports, generateUtilityClasses, generateUtilityClass, rootShouldForwardProp, capitalize, alpha, useThemeProps, _objectWithoutPropertiesLoose, createChainedFunction, clsx, composeClasses, SwitchBase, RadioGroupContext;
    return {
      setters: [module => {
        createSvgIcon = module.c;
        jsxRuntimeExports = module.j;
        styled = module.s;
        _extends = module._;
        reactExports = module.r;
        generateUtilityClasses = module.g;
        generateUtilityClass = module.a;
        rootShouldForwardProp = module.bu;
        capitalize = module.b;
        alpha = module.b0;
        useThemeProps = module.u;
        _objectWithoutPropertiesLoose = module.e;
        createChainedFunction = module.by;
        clsx = module.f;
        composeClasses = module.h;
      }, module => {
        SwitchBase = module.S;
      }, module => {
        RadioGroupContext = module.R;
      }],
      execute: function execute() {
        const RadioButtonUncheckedIcon = createSvgIcon( /*#__PURE__*/jsxRuntimeExports.jsx("path", {
          d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
        }), 'RadioButtonUnchecked');
        const RadioButtonCheckedIcon = createSvgIcon( /*#__PURE__*/jsxRuntimeExports.jsx("path", {
          d: "M8.465 8.465C9.37 7.56 10.62 7 12 7C14.76 7 17 9.24 17 12C17 13.38 16.44 14.63 15.535 15.535C14.63 16.44 13.38 17 12 17C9.24 17 7 14.76 7 12C7 10.62 7.56 9.37 8.465 8.465Z"
        }), 'RadioButtonChecked');
        const RadioButtonIconRoot = styled("span")({
          position: "relative",
          display: "flex"
        });
        const RadioButtonIconBackground = styled(RadioButtonUncheckedIcon)({
          // Scale applied to prevent dot misalignment in Safari
          transform: "scale(1)"
        });
        const RadioButtonIconDot = styled(RadioButtonCheckedIcon)(({
          theme,
          ownerState
        }) => _extends({
          left: 0,
          position: "absolute",
          transform: "scale(0)",
          transition: theme.transitions.create("transform", {
            easing: theme.transitions.easing.easeIn,
            duration: theme.transitions.duration.shortest
          })
        }, ownerState.checked && {
          transform: "scale(1)",
          transition: theme.transitions.create("transform", {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.shortest
          })
        }));
        function RadioButtonIcon(props) {
          const _props$checked = props.checked,
            checked = _props$checked === void 0 ? false : _props$checked,
            _props$classes = props.classes,
            classes = _props$classes === void 0 ? {} : _props$classes,
            fontSize = props.fontSize;
          const ownerState = _extends({}, props, {
            checked
          });
          return /* @__PURE__ */jsxRuntimeExports.jsxs(RadioButtonIconRoot, {
            className: classes.root,
            ownerState,
            children: [/* @__PURE__ */jsxRuntimeExports.jsx(RadioButtonIconBackground, {
              fontSize,
              className: classes.background,
              ownerState
            }), /* @__PURE__ */jsxRuntimeExports.jsx(RadioButtonIconDot, {
              fontSize,
              className: classes.dot,
              ownerState
            })]
          });
        }
        function useRadioGroup() {
          return reactExports.useContext(RadioGroupContext);
        }
        function getRadioUtilityClass(slot) {
          return generateUtilityClass('MuiRadio', slot);
        }
        const radioClasses = generateUtilityClasses('MuiRadio', ['root', 'checked', 'disabled', 'colorPrimary', 'colorSecondary']);
        const radioClasses$1 = radioClasses;
        const _excluded = ["checked", "checkedIcon", "color", "icon", "name", "onChange", "size", "className"];
        const useUtilityClasses = ownerState => {
          const classes = ownerState.classes,
            color = ownerState.color;
          const slots = {
            root: ["root", `color${capitalize(color)}`]
          };
          return _extends({}, classes, composeClasses(slots, getRadioUtilityClass, classes));
        };
        const RadioRoot = styled(SwitchBase, {
          shouldForwardProp: prop => rootShouldForwardProp(prop) || prop === "classes",
          name: "MuiRadio",
          slot: "Root",
          overridesResolver: (props, styles) => {
            const ownerState = props.ownerState;
            return [styles.root, styles[`color${capitalize(ownerState.color)}`]];
          }
        })(({
          theme,
          ownerState
        }) => _extends({
          color: (theme.vars || theme).palette.text.secondary
        }, !ownerState.disableRipple && {
          "&:hover": {
            backgroundColor: theme.vars ? `rgba(${ownerState.color === "default" ? theme.vars.palette.action.activeChannel : theme.vars.palette[ownerState.color].mainChannel} / ${theme.vars.palette.action.hoverOpacity})` : alpha(ownerState.color === "default" ? theme.palette.action.active : theme.palette[ownerState.color].main, theme.palette.action.hoverOpacity),
            // Reset on touch devices, it doesn't add specificity
            "@media (hover: none)": {
              backgroundColor: "transparent"
            }
          }
        }, ownerState.color !== "default" && {
          [`&.${radioClasses$1.checked}`]: {
            color: (theme.vars || theme).palette[ownerState.color].main
          }
        }, {
          [`&.${radioClasses$1.disabled}`]: {
            color: (theme.vars || theme).palette.action.disabled
          }
        }));
        function areEqualValues(a, b) {
          if (typeof b === "object" && b !== null) {
            return a === b;
          }
          return String(a) === String(b);
        }
        const defaultCheckedIcon = /* @__PURE__ */jsxRuntimeExports.jsx(RadioButtonIcon, {
          checked: true
        });
        const defaultIcon = /* @__PURE__ */jsxRuntimeExports.jsx(RadioButtonIcon, {});
        const Radio = /* @__PURE__ */reactExports.forwardRef(function Radio2(inProps, ref) {
          var _defaultIcon$props$fo, _defaultCheckedIcon$p;
          const props = useThemeProps({
            props: inProps,
            name: "MuiRadio"
          });
          const checkedProp = props.checked,
            _props$checkedIcon = props.checkedIcon,
            checkedIcon = _props$checkedIcon === void 0 ? defaultCheckedIcon : _props$checkedIcon,
            _props$color = props.color,
            color = _props$color === void 0 ? "primary" : _props$color,
            _props$icon = props.icon,
            icon = _props$icon === void 0 ? defaultIcon : _props$icon,
            nameProp = props.name,
            onChangeProp = props.onChange,
            _props$size = props.size,
            size = _props$size === void 0 ? "medium" : _props$size,
            className = props.className,
            other = _objectWithoutPropertiesLoose(props, _excluded);
          const ownerState = _extends({}, props, {
            color,
            size
          });
          const classes = useUtilityClasses(ownerState);
          const radioGroup = useRadioGroup();
          let checked = checkedProp;
          const onChange = createChainedFunction(onChangeProp, radioGroup && radioGroup.onChange);
          let name = nameProp;
          if (radioGroup) {
            if (typeof checked === "undefined") {
              checked = areEqualValues(radioGroup.value, props.value);
            }
            if (typeof name === "undefined") {
              name = radioGroup.name;
            }
          }
          return /* @__PURE__ */jsxRuntimeExports.jsx(RadioRoot, _extends({
            type: "radio",
            icon: /* @__PURE__ */reactExports.cloneElement(icon, {
              fontSize: (_defaultIcon$props$fo = defaultIcon.props.fontSize) != null ? _defaultIcon$props$fo : size
            }),
            checkedIcon: /* @__PURE__ */reactExports.cloneElement(checkedIcon, {
              fontSize: (_defaultCheckedIcon$p = defaultCheckedIcon.props.fontSize) != null ? _defaultCheckedIcon$p : size
            }),
            ownerState,
            classes,
            name,
            checked,
            onChange,
            ref,
            className: clsx(classes.root, className)
          }, other));
        });
        const Radio$1 = exports('R', Radio);
      }
    };
  });
})();
//# sourceMappingURL=Radio-legacy-vNTITdYm.js.map
