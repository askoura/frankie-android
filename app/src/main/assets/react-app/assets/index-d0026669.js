import { A as getDefaultExportFromCjs, r as reactExports, j as jsxRuntimeExports, m as _extends$1, bG as useTheme$1, bH as ThemeContext$2, _ as _objectWithoutPropertiesLoose, bI as THEME_ID, q as generateUtilityClass, n as generateUtilityClasses, t as styled, v as useThemeProps, x as clsx, y as composeClasses, c as createSvgIcon, $ as rootShouldForwardProp, W as capitalize, at as alpha, bJ as createChainedFunction, aC as useControlled, X as useForkRef, w as useId, aD as useEnhancedEffect, Y as debounce, Z as ownerWindow, aE as useEventCallback, aF as ownerDocument, b as useSelector, d as LoadingIndicator, ad as getAugmentedNamespace, bK as memoizeOne_esm, z as commonjsGlobal } from "./index-e27d7549.js";
import { S as SwitchBase } from "./FormControlLabel-feac4ca2.js";
import { F as FormGroup } from "./FormGroup-ee98268c.js";
import { t as ButtonBase, f as useTheme$2, J as useSlotProps, B as Box, T as Typography, b as Button } from "./common-5266551f.js";
import { u as useUtils, a as useLocaleText, C as Clock, p as parsePickerInputValue, g as getPickersToolbarUtilityClass, b as PickersToolbar, c as pickersToolbarClasses, d as useMeridiemMode, e as arrayIncludes, f as useValidation, h as createIsAfterIgnoreDatePart, i as usePickerState, j as DesktopWrapper, K as KeyboardDateInput, k as CalendarOrClockPicker, M as MobileWrapper, l as PureDateInput, m as useMediaQuery, n as useDefaultDates, o as parseNonNullablePickerDate, v as validateDate, W as WrapperVariantContext, q as DateRange, T as Time } from "./DatePicker-dbd59c5a.js";
import { a as KeyboardArrowLeft, K as KeyboardArrowRight } from "./KeyboardArrowRight-505c95fc.js";
var propTypes$1 = { exports: {} };
var ReactPropTypesSecret$1 = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
var ReactPropTypesSecret_1 = ReactPropTypesSecret$1;
var ReactPropTypesSecret = ReactPropTypesSecret_1;
function emptyFunction() {
}
function emptyFunctionWithReset() {
}
emptyFunctionWithReset.resetWarningCache = emptyFunction;
var factoryWithThrowingShims = function() {
  function shim(props2, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      return;
    }
    var err = new Error(
      "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
    );
    err.name = "Invariant Violation";
    throw err;
  }
  shim.isRequired = shim;
  function getShim() {
    return shim;
  }
  var ReactPropTypes = {
    array: shim,
    bigint: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,
    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,
    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };
  ReactPropTypes.PropTypes = ReactPropTypes;
  return ReactPropTypes;
};
{
  propTypes$1.exports = factoryWithThrowingShims();
}
var propTypesExports = propTypes$1.exports;
const PropTypes = /* @__PURE__ */ getDefaultExportFromCjs(propTypesExports);
let cachedType;
function detectScrollType() {
  if (cachedType) {
    return cachedType;
  }
  const dummy = document.createElement("div");
  const container = document.createElement("div");
  container.style.width = "10px";
  container.style.height = "1px";
  dummy.appendChild(container);
  dummy.dir = "rtl";
  dummy.style.fontSize = "14px";
  dummy.style.width = "4px";
  dummy.style.height = "1px";
  dummy.style.position = "absolute";
  dummy.style.top = "-1000px";
  dummy.style.overflow = "scroll";
  document.body.appendChild(dummy);
  cachedType = "reverse";
  if (dummy.scrollLeft > 0) {
    cachedType = "default";
  } else {
    dummy.scrollLeft = 1;
    if (dummy.scrollLeft === 0) {
      cachedType = "negative";
    }
  }
  document.body.removeChild(dummy);
  return cachedType;
}
function getNormalizedScrollLeft(element, direction) {
  const scrollLeft = element.scrollLeft;
  if (direction !== "rtl") {
    return scrollLeft;
  }
  const type = detectScrollType();
  switch (type) {
    case "negative":
      return element.scrollWidth - element.clientWidth + scrollLeft;
    case "reverse":
      return element.scrollWidth - element.clientWidth - scrollLeft;
    default:
      return scrollLeft;
  }
}
const ThemeContext = /* @__PURE__ */ reactExports.createContext(null);
const ThemeContext$1 = ThemeContext;
function useTheme() {
  const theme = reactExports.useContext(ThemeContext$1);
  return theme;
}
const hasSymbol = typeof Symbol === "function" && Symbol.for;
const nested = hasSymbol ? Symbol.for("mui.nested") : "__THEME_NESTED__";
function mergeOuterLocalTheme(outerTheme, localTheme) {
  if (typeof localTheme === "function") {
    const mergedTheme = localTheme(outerTheme);
    return mergedTheme;
  }
  return _extends$1({}, outerTheme, localTheme);
}
function ThemeProvider$2(props2) {
  const {
    children,
    theme: localTheme
  } = props2;
  const outerTheme = useTheme();
  const theme = reactExports.useMemo(() => {
    const output = outerTheme === null ? localTheme : mergeOuterLocalTheme(outerTheme, localTheme);
    if (output != null) {
      output[nested] = outerTheme !== null;
    }
    return output;
  }, [localTheme, outerTheme]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(ThemeContext$1.Provider, {
    value: theme,
    children
  });
}
const EMPTY_THEME = {};
function useThemeScoping(themeId, upperTheme, localTheme, isPrivate = false) {
  return reactExports.useMemo(() => {
    const resolvedTheme = themeId ? upperTheme[themeId] || upperTheme : upperTheme;
    if (typeof localTheme === "function") {
      const mergedTheme = localTheme(resolvedTheme);
      const result = themeId ? _extends$1({}, upperTheme, {
        [themeId]: mergedTheme
      }) : mergedTheme;
      if (isPrivate) {
        return () => result;
      }
      return result;
    }
    return themeId ? _extends$1({}, upperTheme, {
      [themeId]: localTheme
    }) : _extends$1({}, upperTheme, localTheme);
  }, [themeId, upperTheme, localTheme, isPrivate]);
}
function ThemeProvider$1(props2) {
  const {
    children,
    theme: localTheme,
    themeId
  } = props2;
  const upperTheme = useTheme$1(EMPTY_THEME);
  const upperPrivateTheme = useTheme() || EMPTY_THEME;
  const engineTheme = useThemeScoping(themeId, upperTheme, localTheme);
  const privateTheme = useThemeScoping(themeId, upperPrivateTheme, localTheme, true);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(ThemeProvider$2, {
    theme: privateTheme,
    children: /* @__PURE__ */ jsxRuntimeExports.jsx(ThemeContext$2.Provider, {
      value: engineTheme,
      children
    })
  });
}
const _excluded$i = ["theme"];
function ThemeProvider(_ref) {
  let {
    theme: themeInput
  } = _ref, props2 = _objectWithoutPropertiesLoose(_ref, _excluded$i);
  const scopedTheme = themeInput[THEME_ID];
  return /* @__PURE__ */ jsxRuntimeExports.jsx(ThemeProvider$1, _extends$1({}, props2, {
    themeId: scopedTheme ? THEME_ID : void 0,
    theme: scopedTheme || themeInput
  }));
}
function getCardMediaUtilityClass(slot) {
  return generateUtilityClass("MuiCardMedia", slot);
}
generateUtilityClasses("MuiCardMedia", ["root", "media", "img"]);
const _excluded$h = ["children", "className", "component", "image", "src", "style"];
const useUtilityClasses$9 = (ownerState) => {
  const {
    classes,
    isMediaComponent,
    isImageComponent
  } = ownerState;
  const slots = {
    root: ["root", isMediaComponent && "media", isImageComponent && "img"]
  };
  return composeClasses(slots, getCardMediaUtilityClass, classes);
};
const CardMediaRoot = styled("div", {
  name: "MuiCardMedia",
  slot: "Root",
  overridesResolver: (props2, styles2) => {
    const {
      ownerState
    } = props2;
    const {
      isMediaComponent,
      isImageComponent
    } = ownerState;
    return [styles2.root, isMediaComponent && styles2.media, isImageComponent && styles2.img];
  }
})(({
  ownerState
}) => _extends$1({
  display: "block",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center"
}, ownerState.isMediaComponent && {
  width: "100%"
}, ownerState.isImageComponent && {
  // ⚠️ object-fit is not supported by IE11.
  objectFit: "cover"
}));
const MEDIA_COMPONENTS = ["video", "audio", "picture", "iframe", "img"];
const IMAGE_COMPONENTS = ["picture", "img"];
const CardMedia = /* @__PURE__ */ reactExports.forwardRef(function CardMedia2(inProps, ref) {
  const props2 = useThemeProps({
    props: inProps,
    name: "MuiCardMedia"
  });
  const {
    children,
    className,
    component = "div",
    image,
    src,
    style
  } = props2, other = _objectWithoutPropertiesLoose(props2, _excluded$h);
  const isMediaComponent = MEDIA_COMPONENTS.indexOf(component) !== -1;
  const composedStyle = !isMediaComponent && image ? _extends$1({
    backgroundImage: `url("${image}")`
  }, style) : style;
  const ownerState = _extends$1({}, props2, {
    component,
    isMediaComponent,
    isImageComponent: IMAGE_COMPONENTS.indexOf(component) !== -1
  });
  const classes = useUtilityClasses$9(ownerState);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(CardMediaRoot, _extends$1({
    className: clsx(classes.root, className),
    as: component,
    role: !isMediaComponent && image ? "img" : void 0,
    ref,
    style: composedStyle,
    ownerState,
    src: isMediaComponent ? image || src : void 0
  }, other, {
    children
  }));
});
const CardMedia$1 = CardMedia;
const RadioButtonUncheckedIcon = createSvgIcon(/* @__PURE__ */ jsxRuntimeExports.jsx("path", {
  d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
}), "RadioButtonUnchecked");
const RadioButtonCheckedIcon = createSvgIcon(/* @__PURE__ */ jsxRuntimeExports.jsx("path", {
  d: "M8.465 8.465C9.37 7.56 10.62 7 12 7C14.76 7 17 9.24 17 12C17 13.38 16.44 14.63 15.535 15.535C14.63 16.44 13.38 17 12 17C9.24 17 7 14.76 7 12C7 10.62 7.56 9.37 8.465 8.465Z"
}), "RadioButtonChecked");
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
}) => _extends$1({
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
function RadioButtonIcon(props2) {
  const {
    checked = false,
    classes = {},
    fontSize
  } = props2;
  const ownerState = _extends$1({}, props2, {
    checked
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(RadioButtonIconRoot, {
    className: classes.root,
    ownerState,
    children: [/* @__PURE__ */ jsxRuntimeExports.jsx(RadioButtonIconBackground, {
      fontSize,
      className: classes.background,
      ownerState
    }), /* @__PURE__ */ jsxRuntimeExports.jsx(RadioButtonIconDot, {
      fontSize,
      className: classes.dot,
      ownerState
    })]
  });
}
const RadioGroupContext = /* @__PURE__ */ reactExports.createContext(void 0);
const RadioGroupContext$1 = RadioGroupContext;
function useRadioGroup() {
  return reactExports.useContext(RadioGroupContext$1);
}
function getRadioUtilityClass(slot) {
  return generateUtilityClass("MuiRadio", slot);
}
const radioClasses = generateUtilityClasses("MuiRadio", ["root", "checked", "disabled", "colorPrimary", "colorSecondary"]);
const radioClasses$1 = radioClasses;
const _excluded$g = ["checked", "checkedIcon", "color", "icon", "name", "onChange", "size", "className"];
const useUtilityClasses$8 = (ownerState) => {
  const {
    classes,
    color
  } = ownerState;
  const slots = {
    root: ["root", `color${capitalize(color)}`]
  };
  return _extends$1({}, classes, composeClasses(slots, getRadioUtilityClass, classes));
};
const RadioRoot = styled(SwitchBase, {
  shouldForwardProp: (prop) => rootShouldForwardProp(prop) || prop === "classes",
  name: "MuiRadio",
  slot: "Root",
  overridesResolver: (props2, styles2) => {
    const {
      ownerState
    } = props2;
    return [styles2.root, styles2[`color${capitalize(ownerState.color)}`]];
  }
})(({
  theme,
  ownerState
}) => _extends$1({
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
const defaultCheckedIcon = /* @__PURE__ */ jsxRuntimeExports.jsx(RadioButtonIcon, {
  checked: true
});
const defaultIcon = /* @__PURE__ */ jsxRuntimeExports.jsx(RadioButtonIcon, {});
const Radio = /* @__PURE__ */ reactExports.forwardRef(function Radio2(inProps, ref) {
  var _defaultIcon$props$fo, _defaultCheckedIcon$p;
  const props2 = useThemeProps({
    props: inProps,
    name: "MuiRadio"
  });
  const {
    checked: checkedProp,
    checkedIcon = defaultCheckedIcon,
    color = "primary",
    icon = defaultIcon,
    name: nameProp,
    onChange: onChangeProp,
    size = "medium",
    className
  } = props2, other = _objectWithoutPropertiesLoose(props2, _excluded$g);
  const ownerState = _extends$1({}, props2, {
    color,
    size
  });
  const classes = useUtilityClasses$8(ownerState);
  const radioGroup = useRadioGroup();
  let checked = checkedProp;
  const onChange = createChainedFunction(onChangeProp, radioGroup && radioGroup.onChange);
  let name = nameProp;
  if (radioGroup) {
    if (typeof checked === "undefined") {
      checked = areEqualValues(radioGroup.value, props2.value);
    }
    if (typeof name === "undefined") {
      name = radioGroup.name;
    }
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(RadioRoot, _extends$1({
    type: "radio",
    icon: /* @__PURE__ */ reactExports.cloneElement(icon, {
      fontSize: (_defaultIcon$props$fo = defaultIcon.props.fontSize) != null ? _defaultIcon$props$fo : size
    }),
    checkedIcon: /* @__PURE__ */ reactExports.cloneElement(checkedIcon, {
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
const Radio$1 = Radio;
const _excluded$f = ["actions", "children", "defaultValue", "name", "onChange", "value"];
const RadioGroup = /* @__PURE__ */ reactExports.forwardRef(function RadioGroup2(props2, ref) {
  const {
    // private
    // eslint-disable-next-line react/prop-types
    actions,
    children,
    defaultValue,
    name: nameProp,
    onChange,
    value: valueProp
  } = props2, other = _objectWithoutPropertiesLoose(props2, _excluded$f);
  const rootRef = reactExports.useRef(null);
  const [value, setValueState] = useControlled({
    controlled: valueProp,
    default: defaultValue,
    name: "RadioGroup"
  });
  reactExports.useImperativeHandle(actions, () => ({
    focus: () => {
      let input = rootRef.current.querySelector("input:not(:disabled):checked");
      if (!input) {
        input = rootRef.current.querySelector("input:not(:disabled)");
      }
      if (input) {
        input.focus();
      }
    }
  }), []);
  const handleRef = useForkRef(ref, rootRef);
  const name = useId(nameProp);
  const contextValue = reactExports.useMemo(() => ({
    name,
    onChange(event) {
      setValueState(event.target.value);
      if (onChange) {
        onChange(event, event.target.value);
      }
    },
    value
  }), [name, onChange, setValueState, value]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(RadioGroupContext$1.Provider, {
    value: contextValue,
    children: /* @__PURE__ */ jsxRuntimeExports.jsx(FormGroup, _extends$1({
      role: "radiogroup",
      ref: handleRef
    }, other, {
      children
    }))
  });
});
const RadioGroup$1 = RadioGroup;
function getTabUtilityClass(slot) {
  return generateUtilityClass("MuiTab", slot);
}
const tabClasses = generateUtilityClasses("MuiTab", ["root", "labelIcon", "textColorInherit", "textColorPrimary", "textColorSecondary", "selected", "disabled", "fullWidth", "wrapped", "iconWrapper"]);
const tabClasses$1 = tabClasses;
const _excluded$e = ["className", "disabled", "disableFocusRipple", "fullWidth", "icon", "iconPosition", "indicator", "label", "onChange", "onClick", "onFocus", "selected", "selectionFollowsFocus", "textColor", "value", "wrapped"];
const useUtilityClasses$7 = (ownerState) => {
  const {
    classes,
    textColor,
    fullWidth,
    wrapped,
    icon,
    label,
    selected,
    disabled
  } = ownerState;
  const slots = {
    root: ["root", icon && label && "labelIcon", `textColor${capitalize(textColor)}`, fullWidth && "fullWidth", wrapped && "wrapped", selected && "selected", disabled && "disabled"],
    iconWrapper: ["iconWrapper"]
  };
  return composeClasses(slots, getTabUtilityClass, classes);
};
const TabRoot = styled(ButtonBase, {
  name: "MuiTab",
  slot: "Root",
  overridesResolver: (props2, styles2) => {
    const {
      ownerState
    } = props2;
    return [styles2.root, ownerState.label && ownerState.icon && styles2.labelIcon, styles2[`textColor${capitalize(ownerState.textColor)}`], ownerState.fullWidth && styles2.fullWidth, ownerState.wrapped && styles2.wrapped];
  }
})(({
  theme,
  ownerState
}) => _extends$1({}, theme.typography.button, {
  maxWidth: 360,
  minWidth: 90,
  position: "relative",
  minHeight: 48,
  flexShrink: 0,
  padding: "12px 16px",
  overflow: "hidden",
  whiteSpace: "normal",
  textAlign: "center"
}, ownerState.label && {
  flexDirection: ownerState.iconPosition === "top" || ownerState.iconPosition === "bottom" ? "column" : "row"
}, {
  lineHeight: 1.25
}, ownerState.icon && ownerState.label && {
  minHeight: 72,
  paddingTop: 9,
  paddingBottom: 9,
  [`& > .${tabClasses$1.iconWrapper}`]: _extends$1({}, ownerState.iconPosition === "top" && {
    marginBottom: 6
  }, ownerState.iconPosition === "bottom" && {
    marginTop: 6
  }, ownerState.iconPosition === "start" && {
    marginRight: theme.spacing(1)
  }, ownerState.iconPosition === "end" && {
    marginLeft: theme.spacing(1)
  })
}, ownerState.textColor === "inherit" && {
  color: "inherit",
  opacity: 0.6,
  // same opacity as theme.palette.text.secondary
  [`&.${tabClasses$1.selected}`]: {
    opacity: 1
  },
  [`&.${tabClasses$1.disabled}`]: {
    opacity: (theme.vars || theme).palette.action.disabledOpacity
  }
}, ownerState.textColor === "primary" && {
  color: (theme.vars || theme).palette.text.secondary,
  [`&.${tabClasses$1.selected}`]: {
    color: (theme.vars || theme).palette.primary.main
  },
  [`&.${tabClasses$1.disabled}`]: {
    color: (theme.vars || theme).palette.text.disabled
  }
}, ownerState.textColor === "secondary" && {
  color: (theme.vars || theme).palette.text.secondary,
  [`&.${tabClasses$1.selected}`]: {
    color: (theme.vars || theme).palette.secondary.main
  },
  [`&.${tabClasses$1.disabled}`]: {
    color: (theme.vars || theme).palette.text.disabled
  }
}, ownerState.fullWidth && {
  flexShrink: 1,
  flexGrow: 1,
  flexBasis: 0,
  maxWidth: "none"
}, ownerState.wrapped && {
  fontSize: theme.typography.pxToRem(12)
}));
const Tab = /* @__PURE__ */ reactExports.forwardRef(function Tab2(inProps, ref) {
  const props2 = useThemeProps({
    props: inProps,
    name: "MuiTab"
  });
  const {
    className,
    disabled = false,
    disableFocusRipple = false,
    // eslint-disable-next-line react/prop-types
    fullWidth,
    icon: iconProp,
    iconPosition = "top",
    // eslint-disable-next-line react/prop-types
    indicator,
    label,
    onChange,
    onClick,
    onFocus,
    // eslint-disable-next-line react/prop-types
    selected,
    // eslint-disable-next-line react/prop-types
    selectionFollowsFocus,
    // eslint-disable-next-line react/prop-types
    textColor = "inherit",
    value,
    wrapped = false
  } = props2, other = _objectWithoutPropertiesLoose(props2, _excluded$e);
  const ownerState = _extends$1({}, props2, {
    disabled,
    disableFocusRipple,
    selected,
    icon: !!iconProp,
    iconPosition,
    label: !!label,
    fullWidth,
    textColor,
    wrapped
  });
  const classes = useUtilityClasses$7(ownerState);
  const icon = iconProp && label && /* @__PURE__ */ reactExports.isValidElement(iconProp) ? /* @__PURE__ */ reactExports.cloneElement(iconProp, {
    className: clsx(classes.iconWrapper, iconProp.props.className)
  }) : iconProp;
  const handleClick = (event) => {
    if (!selected && onChange) {
      onChange(event, value);
    }
    if (onClick) {
      onClick(event);
    }
  };
  const handleFocus = (event) => {
    if (selectionFollowsFocus && !selected && onChange) {
      onChange(event, value);
    }
    if (onFocus) {
      onFocus(event);
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(TabRoot, _extends$1({
    focusRipple: !disableFocusRipple,
    className: clsx(classes.root, className),
    ref,
    role: "tab",
    "aria-selected": selected,
    disabled,
    onClick: handleClick,
    onFocus: handleFocus,
    ownerState,
    tabIndex: selected ? 0 : -1
  }, other, {
    children: [iconPosition === "top" || iconPosition === "start" ? /* @__PURE__ */ jsxRuntimeExports.jsxs(reactExports.Fragment, {
      children: [icon, label]
    }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(reactExports.Fragment, {
      children: [label, icon]
    }), indicator]
  }));
});
const Tab$1 = Tab;
function easeInOutSin(time) {
  return (1 + Math.sin(Math.PI * time - Math.PI / 2)) / 2;
}
function animate(property, element, to, options = {}, cb = () => {
}) {
  const {
    ease = easeInOutSin,
    duration = 300
    // standard
  } = options;
  let start = null;
  const from = element[property];
  let cancelled = false;
  const cancel = () => {
    cancelled = true;
  };
  const step = (timestamp) => {
    if (cancelled) {
      cb(new Error("Animation cancelled"));
      return;
    }
    if (start === null) {
      start = timestamp;
    }
    const time = Math.min(1, (timestamp - start) / duration);
    element[property] = ease(time) * (to - from) + from;
    if (time >= 1) {
      requestAnimationFrame(() => {
        cb(null);
      });
      return;
    }
    requestAnimationFrame(step);
  };
  if (from === to) {
    cb(new Error("Element already at target position"));
    return cancel;
  }
  requestAnimationFrame(step);
  return cancel;
}
const _excluded$d = ["onChange"];
const styles$1 = {
  width: 99,
  height: 99,
  position: "absolute",
  top: -9999,
  overflow: "scroll"
};
function ScrollbarSize(props2) {
  const {
    onChange
  } = props2, other = _objectWithoutPropertiesLoose(props2, _excluded$d);
  const scrollbarHeight = reactExports.useRef();
  const nodeRef = reactExports.useRef(null);
  const setMeasurements = () => {
    scrollbarHeight.current = nodeRef.current.offsetHeight - nodeRef.current.clientHeight;
  };
  useEnhancedEffect(() => {
    const handleResize = debounce(() => {
      const prevHeight = scrollbarHeight.current;
      setMeasurements();
      if (prevHeight !== scrollbarHeight.current) {
        onChange(scrollbarHeight.current);
      }
    });
    const containerWindow = ownerWindow(nodeRef.current);
    containerWindow.addEventListener("resize", handleResize);
    return () => {
      handleResize.clear();
      containerWindow.removeEventListener("resize", handleResize);
    };
  }, [onChange]);
  reactExports.useEffect(() => {
    setMeasurements();
    onChange(scrollbarHeight.current);
  }, [onChange]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", _extends$1({
    style: styles$1,
    ref: nodeRef
  }, other));
}
function getTabScrollButtonUtilityClass(slot) {
  return generateUtilityClass("MuiTabScrollButton", slot);
}
const tabScrollButtonClasses = generateUtilityClasses("MuiTabScrollButton", ["root", "vertical", "horizontal", "disabled"]);
const tabScrollButtonClasses$1 = tabScrollButtonClasses;
const _excluded$c = ["className", "slots", "slotProps", "direction", "orientation", "disabled"];
const useUtilityClasses$6 = (ownerState) => {
  const {
    classes,
    orientation,
    disabled
  } = ownerState;
  const slots = {
    root: ["root", orientation, disabled && "disabled"]
  };
  return composeClasses(slots, getTabScrollButtonUtilityClass, classes);
};
const TabScrollButtonRoot = styled(ButtonBase, {
  name: "MuiTabScrollButton",
  slot: "Root",
  overridesResolver: (props2, styles2) => {
    const {
      ownerState
    } = props2;
    return [styles2.root, ownerState.orientation && styles2[ownerState.orientation]];
  }
})(({
  ownerState
}) => _extends$1({
  width: 40,
  flexShrink: 0,
  opacity: 0.8,
  [`&.${tabScrollButtonClasses$1.disabled}`]: {
    opacity: 0
  }
}, ownerState.orientation === "vertical" && {
  width: "100%",
  height: 40,
  "& svg": {
    transform: `rotate(${ownerState.isRtl ? -90 : 90}deg)`
  }
}));
const TabScrollButton = /* @__PURE__ */ reactExports.forwardRef(function TabScrollButton2(inProps, ref) {
  var _slots$StartScrollBut, _slots$EndScrollButto;
  const props2 = useThemeProps({
    props: inProps,
    name: "MuiTabScrollButton"
  });
  const {
    className,
    slots = {},
    slotProps = {},
    direction
  } = props2, other = _objectWithoutPropertiesLoose(props2, _excluded$c);
  const theme = useTheme$2();
  const isRtl = theme.direction === "rtl";
  const ownerState = _extends$1({
    isRtl
  }, props2);
  const classes = useUtilityClasses$6(ownerState);
  const StartButtonIcon = (_slots$StartScrollBut = slots.StartScrollButtonIcon) != null ? _slots$StartScrollBut : KeyboardArrowLeft;
  const EndButtonIcon = (_slots$EndScrollButto = slots.EndScrollButtonIcon) != null ? _slots$EndScrollButto : KeyboardArrowRight;
  const startButtonIconProps = useSlotProps({
    elementType: StartButtonIcon,
    externalSlotProps: slotProps.startScrollButtonIcon,
    additionalProps: {
      fontSize: "small"
    },
    ownerState
  });
  const endButtonIconProps = useSlotProps({
    elementType: EndButtonIcon,
    externalSlotProps: slotProps.endScrollButtonIcon,
    additionalProps: {
      fontSize: "small"
    },
    ownerState
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsx(TabScrollButtonRoot, _extends$1({
    component: "div",
    className: clsx(classes.root, className),
    ref,
    role: null,
    ownerState,
    tabIndex: null
  }, other, {
    children: direction === "left" ? /* @__PURE__ */ jsxRuntimeExports.jsx(StartButtonIcon, _extends$1({}, startButtonIconProps)) : /* @__PURE__ */ jsxRuntimeExports.jsx(EndButtonIcon, _extends$1({}, endButtonIconProps))
  }));
});
const TabScrollButton$1 = TabScrollButton;
function getTabsUtilityClass(slot) {
  return generateUtilityClass("MuiTabs", slot);
}
const tabsClasses = generateUtilityClasses("MuiTabs", ["root", "vertical", "flexContainer", "flexContainerVertical", "centered", "scroller", "fixed", "scrollableX", "scrollableY", "hideScrollbar", "scrollButtons", "scrollButtonsHideMobile", "indicator"]);
const tabsClasses$1 = tabsClasses;
const _excluded$b = ["aria-label", "aria-labelledby", "action", "centered", "children", "className", "component", "allowScrollButtonsMobile", "indicatorColor", "onChange", "orientation", "ScrollButtonComponent", "scrollButtons", "selectionFollowsFocus", "slots", "slotProps", "TabIndicatorProps", "TabScrollButtonProps", "textColor", "value", "variant", "visibleScrollbar"];
const nextItem = (list, item) => {
  if (list === item) {
    return list.firstChild;
  }
  if (item && item.nextElementSibling) {
    return item.nextElementSibling;
  }
  return list.firstChild;
};
const previousItem = (list, item) => {
  if (list === item) {
    return list.lastChild;
  }
  if (item && item.previousElementSibling) {
    return item.previousElementSibling;
  }
  return list.lastChild;
};
const moveFocus = (list, currentFocus, traversalFunction) => {
  let wrappedOnce = false;
  let nextFocus = traversalFunction(list, currentFocus);
  while (nextFocus) {
    if (nextFocus === list.firstChild) {
      if (wrappedOnce) {
        return;
      }
      wrappedOnce = true;
    }
    const nextFocusDisabled = nextFocus.disabled || nextFocus.getAttribute("aria-disabled") === "true";
    if (!nextFocus.hasAttribute("tabindex") || nextFocusDisabled) {
      nextFocus = traversalFunction(list, nextFocus);
    } else {
      nextFocus.focus();
      return;
    }
  }
};
const useUtilityClasses$5 = (ownerState) => {
  const {
    vertical,
    fixed,
    hideScrollbar,
    scrollableX,
    scrollableY,
    centered,
    scrollButtonsHideMobile,
    classes
  } = ownerState;
  const slots = {
    root: ["root", vertical && "vertical"],
    scroller: ["scroller", fixed && "fixed", hideScrollbar && "hideScrollbar", scrollableX && "scrollableX", scrollableY && "scrollableY"],
    flexContainer: ["flexContainer", vertical && "flexContainerVertical", centered && "centered"],
    indicator: ["indicator"],
    scrollButtons: ["scrollButtons", scrollButtonsHideMobile && "scrollButtonsHideMobile"],
    scrollableX: [scrollableX && "scrollableX"],
    hideScrollbar: [hideScrollbar && "hideScrollbar"]
  };
  return composeClasses(slots, getTabsUtilityClass, classes);
};
const TabsRoot = styled("div", {
  name: "MuiTabs",
  slot: "Root",
  overridesResolver: (props2, styles2) => {
    const {
      ownerState
    } = props2;
    return [{
      [`& .${tabsClasses$1.scrollButtons}`]: styles2.scrollButtons
    }, {
      [`& .${tabsClasses$1.scrollButtons}`]: ownerState.scrollButtonsHideMobile && styles2.scrollButtonsHideMobile
    }, styles2.root, ownerState.vertical && styles2.vertical];
  }
})(({
  ownerState,
  theme
}) => _extends$1({
  overflow: "hidden",
  minHeight: 48,
  // Add iOS momentum scrolling for iOS < 13.0
  WebkitOverflowScrolling: "touch",
  display: "flex"
}, ownerState.vertical && {
  flexDirection: "column"
}, ownerState.scrollButtonsHideMobile && {
  [`& .${tabsClasses$1.scrollButtons}`]: {
    [theme.breakpoints.down("sm")]: {
      display: "none"
    }
  }
}));
const TabsScroller = styled("div", {
  name: "MuiTabs",
  slot: "Scroller",
  overridesResolver: (props2, styles2) => {
    const {
      ownerState
    } = props2;
    return [styles2.scroller, ownerState.fixed && styles2.fixed, ownerState.hideScrollbar && styles2.hideScrollbar, ownerState.scrollableX && styles2.scrollableX, ownerState.scrollableY && styles2.scrollableY];
  }
})(({
  ownerState
}) => _extends$1({
  position: "relative",
  display: "inline-block",
  flex: "1 1 auto",
  whiteSpace: "nowrap"
}, ownerState.fixed && {
  overflowX: "hidden",
  width: "100%"
}, ownerState.hideScrollbar && {
  // Hide dimensionless scrollbar on macOS
  scrollbarWidth: "none",
  // Firefox
  "&::-webkit-scrollbar": {
    display: "none"
    // Safari + Chrome
  }
}, ownerState.scrollableX && {
  overflowX: "auto",
  overflowY: "hidden"
}, ownerState.scrollableY && {
  overflowY: "auto",
  overflowX: "hidden"
}));
const FlexContainer = styled("div", {
  name: "MuiTabs",
  slot: "FlexContainer",
  overridesResolver: (props2, styles2) => {
    const {
      ownerState
    } = props2;
    return [styles2.flexContainer, ownerState.vertical && styles2.flexContainerVertical, ownerState.centered && styles2.centered];
  }
})(({
  ownerState
}) => _extends$1({
  display: "flex"
}, ownerState.vertical && {
  flexDirection: "column"
}, ownerState.centered && {
  justifyContent: "center"
}));
const TabsIndicator = styled("span", {
  name: "MuiTabs",
  slot: "Indicator",
  overridesResolver: (props2, styles2) => styles2.indicator
})(({
  ownerState,
  theme
}) => _extends$1({
  position: "absolute",
  height: 2,
  bottom: 0,
  width: "100%",
  transition: theme.transitions.create()
}, ownerState.indicatorColor === "primary" && {
  backgroundColor: (theme.vars || theme).palette.primary.main
}, ownerState.indicatorColor === "secondary" && {
  backgroundColor: (theme.vars || theme).palette.secondary.main
}, ownerState.vertical && {
  height: "100%",
  width: 2,
  right: 0
}));
const TabsScrollbarSize = styled(ScrollbarSize, {
  name: "MuiTabs",
  slot: "ScrollbarSize"
})({
  overflowX: "auto",
  overflowY: "hidden",
  // Hide dimensionless scrollbar on macOS
  scrollbarWidth: "none",
  // Firefox
  "&::-webkit-scrollbar": {
    display: "none"
    // Safari + Chrome
  }
});
const defaultIndicatorStyle = {};
const Tabs = /* @__PURE__ */ reactExports.forwardRef(function Tabs2(inProps, ref) {
  const props2 = useThemeProps({
    props: inProps,
    name: "MuiTabs"
  });
  const theme = useTheme$2();
  const isRtl = theme.direction === "rtl";
  const {
    "aria-label": ariaLabel,
    "aria-labelledby": ariaLabelledBy,
    action,
    centered = false,
    children: childrenProp,
    className,
    component = "div",
    allowScrollButtonsMobile = false,
    indicatorColor = "primary",
    onChange,
    orientation = "horizontal",
    ScrollButtonComponent = TabScrollButton$1,
    scrollButtons = "auto",
    selectionFollowsFocus,
    slots = {},
    slotProps = {},
    TabIndicatorProps = {},
    TabScrollButtonProps = {},
    textColor = "primary",
    value,
    variant = "standard",
    visibleScrollbar = false
  } = props2, other = _objectWithoutPropertiesLoose(props2, _excluded$b);
  const scrollable = variant === "scrollable";
  const vertical = orientation === "vertical";
  const scrollStart = vertical ? "scrollTop" : "scrollLeft";
  const start = vertical ? "top" : "left";
  const end = vertical ? "bottom" : "right";
  const clientSize = vertical ? "clientHeight" : "clientWidth";
  const size = vertical ? "height" : "width";
  const ownerState = _extends$1({}, props2, {
    component,
    allowScrollButtonsMobile,
    indicatorColor,
    orientation,
    vertical,
    scrollButtons,
    textColor,
    variant,
    visibleScrollbar,
    fixed: !scrollable,
    hideScrollbar: scrollable && !visibleScrollbar,
    scrollableX: scrollable && !vertical,
    scrollableY: scrollable && vertical,
    centered: centered && !scrollable,
    scrollButtonsHideMobile: !allowScrollButtonsMobile
  });
  const classes = useUtilityClasses$5(ownerState);
  const startScrollButtonIconProps = useSlotProps({
    elementType: slots.StartScrollButtonIcon,
    externalSlotProps: slotProps.startScrollButtonIcon,
    ownerState
  });
  const endScrollButtonIconProps = useSlotProps({
    elementType: slots.EndScrollButtonIcon,
    externalSlotProps: slotProps.endScrollButtonIcon,
    ownerState
  });
  const [mounted, setMounted] = reactExports.useState(false);
  const [indicatorStyle, setIndicatorStyle] = reactExports.useState(defaultIndicatorStyle);
  const [displayScroll, setDisplayScroll] = reactExports.useState({
    start: false,
    end: false
  });
  const [scrollerStyle, setScrollerStyle] = reactExports.useState({
    overflow: "hidden",
    scrollbarWidth: 0
  });
  const valueToIndex = /* @__PURE__ */ new Map();
  const tabsRef = reactExports.useRef(null);
  const tabListRef = reactExports.useRef(null);
  const getTabsMeta = () => {
    const tabsNode = tabsRef.current;
    let tabsMeta;
    if (tabsNode) {
      const rect = tabsNode.getBoundingClientRect();
      tabsMeta = {
        clientWidth: tabsNode.clientWidth,
        scrollLeft: tabsNode.scrollLeft,
        scrollTop: tabsNode.scrollTop,
        scrollLeftNormalized: getNormalizedScrollLeft(tabsNode, theme.direction),
        scrollWidth: tabsNode.scrollWidth,
        top: rect.top,
        bottom: rect.bottom,
        left: rect.left,
        right: rect.right
      };
    }
    let tabMeta;
    if (tabsNode && value !== false) {
      const children2 = tabListRef.current.children;
      if (children2.length > 0) {
        const tab = children2[valueToIndex.get(value)];
        tabMeta = tab ? tab.getBoundingClientRect() : null;
      }
    }
    return {
      tabsMeta,
      tabMeta
    };
  };
  const updateIndicatorState = useEventCallback(() => {
    const {
      tabsMeta,
      tabMeta
    } = getTabsMeta();
    let startValue = 0;
    let startIndicator;
    if (vertical) {
      startIndicator = "top";
      if (tabMeta && tabsMeta) {
        startValue = tabMeta.top - tabsMeta.top + tabsMeta.scrollTop;
      }
    } else {
      startIndicator = isRtl ? "right" : "left";
      if (tabMeta && tabsMeta) {
        const correction = isRtl ? tabsMeta.scrollLeftNormalized + tabsMeta.clientWidth - tabsMeta.scrollWidth : tabsMeta.scrollLeft;
        startValue = (isRtl ? -1 : 1) * (tabMeta[startIndicator] - tabsMeta[startIndicator] + correction);
      }
    }
    const newIndicatorStyle = {
      [startIndicator]: startValue,
      // May be wrong until the font is loaded.
      [size]: tabMeta ? tabMeta[size] : 0
    };
    if (isNaN(indicatorStyle[startIndicator]) || isNaN(indicatorStyle[size])) {
      setIndicatorStyle(newIndicatorStyle);
    } else {
      const dStart = Math.abs(indicatorStyle[startIndicator] - newIndicatorStyle[startIndicator]);
      const dSize = Math.abs(indicatorStyle[size] - newIndicatorStyle[size]);
      if (dStart >= 1 || dSize >= 1) {
        setIndicatorStyle(newIndicatorStyle);
      }
    }
  });
  const scroll = (scrollValue, {
    animation = true
  } = {}) => {
    if (animation) {
      animate(scrollStart, tabsRef.current, scrollValue, {
        duration: theme.transitions.duration.standard
      });
    } else {
      tabsRef.current[scrollStart] = scrollValue;
    }
  };
  const moveTabsScroll = (delta) => {
    let scrollValue = tabsRef.current[scrollStart];
    if (vertical) {
      scrollValue += delta;
    } else {
      scrollValue += delta * (isRtl ? -1 : 1);
      scrollValue *= isRtl && detectScrollType() === "reverse" ? -1 : 1;
    }
    scroll(scrollValue);
  };
  const getScrollSize = () => {
    const containerSize = tabsRef.current[clientSize];
    let totalSize = 0;
    const children2 = Array.from(tabListRef.current.children);
    for (let i = 0; i < children2.length; i += 1) {
      const tab = children2[i];
      if (totalSize + tab[clientSize] > containerSize) {
        if (i === 0) {
          totalSize = containerSize;
        }
        break;
      }
      totalSize += tab[clientSize];
    }
    return totalSize;
  };
  const handleStartScrollClick = () => {
    moveTabsScroll(-1 * getScrollSize());
  };
  const handleEndScrollClick = () => {
    moveTabsScroll(getScrollSize());
  };
  const handleScrollbarSizeChange = reactExports.useCallback((scrollbarWidth) => {
    setScrollerStyle({
      overflow: null,
      scrollbarWidth
    });
  }, []);
  const getConditionalElements = () => {
    const conditionalElements2 = {};
    conditionalElements2.scrollbarSizeListener = scrollable ? /* @__PURE__ */ jsxRuntimeExports.jsx(TabsScrollbarSize, {
      onChange: handleScrollbarSizeChange,
      className: clsx(classes.scrollableX, classes.hideScrollbar)
    }) : null;
    const scrollButtonsActive = displayScroll.start || displayScroll.end;
    const showScrollButtons = scrollable && (scrollButtons === "auto" && scrollButtonsActive || scrollButtons === true);
    conditionalElements2.scrollButtonStart = showScrollButtons ? /* @__PURE__ */ jsxRuntimeExports.jsx(ScrollButtonComponent, _extends$1({
      slots: {
        StartScrollButtonIcon: slots.StartScrollButtonIcon
      },
      slotProps: {
        startScrollButtonIcon: startScrollButtonIconProps
      },
      orientation,
      direction: isRtl ? "right" : "left",
      onClick: handleStartScrollClick,
      disabled: !displayScroll.start
    }, TabScrollButtonProps, {
      className: clsx(classes.scrollButtons, TabScrollButtonProps.className)
    })) : null;
    conditionalElements2.scrollButtonEnd = showScrollButtons ? /* @__PURE__ */ jsxRuntimeExports.jsx(ScrollButtonComponent, _extends$1({
      slots: {
        EndScrollButtonIcon: slots.EndScrollButtonIcon
      },
      slotProps: {
        endScrollButtonIcon: endScrollButtonIconProps
      },
      orientation,
      direction: isRtl ? "left" : "right",
      onClick: handleEndScrollClick,
      disabled: !displayScroll.end
    }, TabScrollButtonProps, {
      className: clsx(classes.scrollButtons, TabScrollButtonProps.className)
    })) : null;
    return conditionalElements2;
  };
  const scrollSelectedIntoView = useEventCallback((animation) => {
    const {
      tabsMeta,
      tabMeta
    } = getTabsMeta();
    if (!tabMeta || !tabsMeta) {
      return;
    }
    if (tabMeta[start] < tabsMeta[start]) {
      const nextScrollStart = tabsMeta[scrollStart] + (tabMeta[start] - tabsMeta[start]);
      scroll(nextScrollStart, {
        animation
      });
    } else if (tabMeta[end] > tabsMeta[end]) {
      const nextScrollStart = tabsMeta[scrollStart] + (tabMeta[end] - tabsMeta[end]);
      scroll(nextScrollStart, {
        animation
      });
    }
  });
  const updateScrollButtonState = useEventCallback(() => {
    if (scrollable && scrollButtons !== false) {
      const {
        scrollTop,
        scrollHeight,
        clientHeight,
        scrollWidth,
        clientWidth
      } = tabsRef.current;
      let showStartScroll;
      let showEndScroll;
      if (vertical) {
        showStartScroll = scrollTop > 1;
        showEndScroll = scrollTop < scrollHeight - clientHeight - 1;
      } else {
        const scrollLeft = getNormalizedScrollLeft(tabsRef.current, theme.direction);
        showStartScroll = isRtl ? scrollLeft < scrollWidth - clientWidth - 1 : scrollLeft > 1;
        showEndScroll = !isRtl ? scrollLeft < scrollWidth - clientWidth - 1 : scrollLeft > 1;
      }
      if (showStartScroll !== displayScroll.start || showEndScroll !== displayScroll.end) {
        setDisplayScroll({
          start: showStartScroll,
          end: showEndScroll
        });
      }
    }
  });
  reactExports.useEffect(() => {
    const handleResize = debounce(() => {
      if (tabsRef.current) {
        updateIndicatorState();
        updateScrollButtonState();
      }
    });
    const win = ownerWindow(tabsRef.current);
    win.addEventListener("resize", handleResize);
    let resizeObserver;
    if (typeof ResizeObserver !== "undefined") {
      resizeObserver = new ResizeObserver(handleResize);
      Array.from(tabListRef.current.children).forEach((child) => {
        resizeObserver.observe(child);
      });
    }
    return () => {
      handleResize.clear();
      win.removeEventListener("resize", handleResize);
      if (resizeObserver) {
        resizeObserver.disconnect();
      }
    };
  }, [updateIndicatorState, updateScrollButtonState]);
  const handleTabsScroll = reactExports.useMemo(() => debounce(() => {
    updateScrollButtonState();
  }), [updateScrollButtonState]);
  reactExports.useEffect(() => {
    return () => {
      handleTabsScroll.clear();
    };
  }, [handleTabsScroll]);
  reactExports.useEffect(() => {
    setMounted(true);
  }, []);
  reactExports.useEffect(() => {
    updateIndicatorState();
    updateScrollButtonState();
  });
  reactExports.useEffect(() => {
    scrollSelectedIntoView(defaultIndicatorStyle !== indicatorStyle);
  }, [scrollSelectedIntoView, indicatorStyle]);
  reactExports.useImperativeHandle(action, () => ({
    updateIndicator: updateIndicatorState,
    updateScrollButtons: updateScrollButtonState
  }), [updateIndicatorState, updateScrollButtonState]);
  const indicator = /* @__PURE__ */ jsxRuntimeExports.jsx(TabsIndicator, _extends$1({}, TabIndicatorProps, {
    className: clsx(classes.indicator, TabIndicatorProps.className),
    ownerState,
    style: _extends$1({}, indicatorStyle, TabIndicatorProps.style)
  }));
  let childIndex = 0;
  const children = reactExports.Children.map(childrenProp, (child) => {
    if (!/* @__PURE__ */ reactExports.isValidElement(child)) {
      return null;
    }
    const childValue = child.props.value === void 0 ? childIndex : child.props.value;
    valueToIndex.set(childValue, childIndex);
    const selected = childValue === value;
    childIndex += 1;
    return /* @__PURE__ */ reactExports.cloneElement(child, _extends$1({
      fullWidth: variant === "fullWidth",
      indicator: selected && !mounted && indicator,
      selected,
      selectionFollowsFocus,
      onChange,
      textColor,
      value: childValue
    }, childIndex === 1 && value === false && !child.props.tabIndex ? {
      tabIndex: 0
    } : {}));
  });
  const handleKeyDown = (event) => {
    const list = tabListRef.current;
    const currentFocus = ownerDocument(list).activeElement;
    const role = currentFocus.getAttribute("role");
    if (role !== "tab") {
      return;
    }
    let previousItemKey = orientation === "horizontal" ? "ArrowLeft" : "ArrowUp";
    let nextItemKey = orientation === "horizontal" ? "ArrowRight" : "ArrowDown";
    if (orientation === "horizontal" && isRtl) {
      previousItemKey = "ArrowRight";
      nextItemKey = "ArrowLeft";
    }
    switch (event.key) {
      case previousItemKey:
        event.preventDefault();
        moveFocus(list, currentFocus, previousItem);
        break;
      case nextItemKey:
        event.preventDefault();
        moveFocus(list, currentFocus, nextItem);
        break;
      case "Home":
        event.preventDefault();
        moveFocus(list, null, nextItem);
        break;
      case "End":
        event.preventDefault();
        moveFocus(list, null, previousItem);
        break;
    }
  };
  const conditionalElements = getConditionalElements();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsRoot, _extends$1({
    className: clsx(classes.root, className),
    ownerState,
    ref,
    as: component
  }, other, {
    children: [conditionalElements.scrollButtonStart, conditionalElements.scrollbarSizeListener, /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsScroller, {
      className: classes.scroller,
      ownerState,
      style: {
        overflow: scrollerStyle.overflow,
        [vertical ? `margin${isRtl ? "Left" : "Right"}` : "marginBottom"]: visibleScrollbar ? void 0 : -scrollerStyle.scrollbarWidth
      },
      ref: tabsRef,
      onScroll: handleTabsScroll,
      children: [/* @__PURE__ */ jsxRuntimeExports.jsx(FlexContainer, {
        "aria-label": ariaLabel,
        "aria-labelledby": ariaLabelledBy,
        "aria-orientation": orientation === "vertical" ? "vertical" : null,
        className: classes.flexContainer,
        ownerState,
        onKeyDown: handleKeyDown,
        ref: tabListRef,
        role: "tablist",
        children
      }), mounted && indicator]
    }), conditionalElements.scrollButtonEnd]
  }));
});
const Tabs$1 = Tabs;
const ErrorOutlineOutlined = createSvgIcon(/* @__PURE__ */ jsxRuntimeExports.jsx("path", {
  d: "M11 15h2v2h-2v-2zm0-8h2v6h-2V7zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
}), "ErrorOutlineOutlined");
const main = "_main_1b9ly_1";
const styles = {
  main
};
function Layout(props2) {
  const isLoading = useSelector((state) => state.templateState.isLoading);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    Box,
    {
      className: styles.main,
      sx: { backgroundColor: "background.default", color: "text.primary" },
      children: [
        isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx(LoadingIndicator, {}) : null,
        props2.children
      ]
    }
  );
}
function useTimePickerDefaultizedProps(props2, name) {
  var _themeProps$ampm;
  const themeProps = useThemeProps({
    props: props2,
    name
  });
  const utils2 = useUtils();
  const ampm = (_themeProps$ampm = themeProps.ampm) != null ? _themeProps$ampm : utils2.is12HourCycleInCurrentLocale();
  const localeText = useLocaleText();
  const getOpenDialogAriaText = localeText.openTimePickerDialogue;
  return _extends$1({
    ampm,
    openTo: "hours",
    views: ["hours", "minutes"],
    acceptRegex: ampm ? /[\dapAP]/gi : /\d/gi,
    disableMaskedInput: false,
    getOpenDialogAriaText,
    inputFormat: ampm ? utils2.formats.fullTime12h : utils2.formats.fullTime24h
  }, themeProps, {
    components: _extends$1({
      OpenPickerIcon: Clock
    }, themeProps.components)
  });
}
const timePickerValueManager = {
  emptyValue: null,
  parseInput: parsePickerInputValue,
  getTodayValue: (utils2) => utils2.date(),
  areValuesEqual: (utils2, a, b) => utils2.isEqual(a, b),
  valueReducer: (utils2, lastValidValue, newValue) => {
    if (!lastValidValue || !utils2.isValid(newValue)) {
      return newValue;
    }
    return utils2.mergeDateAndTime(lastValidValue, newValue);
  }
};
function getPickersToolbarTextUtilityClass(slot) {
  return generateUtilityClass("PrivatePickersToolbarText", slot);
}
const pickersToolbarTextClasses = generateUtilityClasses("PrivatePickersToolbarText", ["root", "selected"]);
const _excluded$a = ["className", "selected", "value"];
const useUtilityClasses$4 = (ownerState) => {
  const {
    classes,
    selected
  } = ownerState;
  const slots = {
    root: ["root", selected && "selected"]
  };
  return composeClasses(slots, getPickersToolbarTextUtilityClass, classes);
};
const PickersToolbarTextRoot = styled(Typography, {
  name: "PrivatePickersToolbarText",
  slot: "Root",
  overridesResolver: (_, styles2) => [styles2.root, {
    [`&.${pickersToolbarTextClasses.selected}`]: styles2.selected
  }]
})(({
  theme
}) => ({
  transition: theme.transitions.create("color"),
  color: theme.palette.text.secondary,
  [`&.${pickersToolbarTextClasses.selected}`]: {
    color: theme.palette.text.primary
  }
}));
const PickersToolbarText = /* @__PURE__ */ reactExports.forwardRef(function PickersToolbarText2(props2, ref) {
  const {
    className,
    value
  } = props2, other = _objectWithoutPropertiesLoose(props2, _excluded$a);
  const classes = useUtilityClasses$4(props2);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(PickersToolbarTextRoot, _extends$1({
    ref,
    className: clsx(className, classes.root),
    component: "span"
  }, other, {
    children: value
  }));
});
const _excluded$9 = ["align", "className", "selected", "typographyClassName", "value", "variant"];
const useUtilityClasses$3 = (ownerState) => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ["root"]
  };
  return composeClasses(slots, getPickersToolbarUtilityClass, classes);
};
const PickersToolbarButtonRoot = styled(Button, {
  name: "MuiPickersToolbarButton",
  slot: "Root",
  overridesResolver: (_, styles2) => styles2.root
})({
  padding: 0,
  minWidth: 16,
  textTransform: "none"
});
const PickersToolbarButton = /* @__PURE__ */ reactExports.forwardRef(function PickersToolbarButton2(inProps, ref) {
  const props2 = useThemeProps({
    props: inProps,
    name: "MuiPickersToolbarButton"
  });
  const {
    align,
    className,
    selected,
    typographyClassName,
    value,
    variant
  } = props2, other = _objectWithoutPropertiesLoose(props2, _excluded$9);
  const classes = useUtilityClasses$3(props2);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(PickersToolbarButtonRoot, _extends$1({
    variant: "text",
    ref,
    className: clsx(className, classes.root)
  }, other, {
    children: /* @__PURE__ */ jsxRuntimeExports.jsx(PickersToolbarText, {
      align,
      className: typographyClassName,
      variant,
      value,
      selected
    })
  }));
});
function getTimePickerToolbarUtilityClass(slot) {
  return generateUtilityClass("MuiTimePickerToolbar", slot);
}
const timePickerToolbarClasses = generateUtilityClasses("MuiTimePickerToolbar", ["root", "separator", "hourMinuteLabel", "hourMinuteLabelLandscape", "hourMinuteLabelReverse", "ampmSelection", "ampmLandscape", "ampmLabel"]);
const _excluded$8 = ["ampm", "ampmInClock", "parsedValue", "isLandscape", "isMobileKeyboardViewOpen", "onChange", "openView", "setOpenView", "toggleMobileKeyboardView", "toolbarTitle", "views", "disabled", "readOnly"];
const useUtilityClasses$2 = (ownerState) => {
  const {
    theme,
    isLandscape,
    classes
  } = ownerState;
  const slots = {
    root: ["root"],
    separator: ["separator"],
    hourMinuteLabel: ["hourMinuteLabel", isLandscape && "hourMinuteLabelLandscape", theme.direction === "rtl" && "hourMinuteLabelReverse"],
    ampmSelection: ["ampmSelection", isLandscape && "ampmLandscape"],
    ampmLabel: ["ampmLabel"]
  };
  return composeClasses(slots, getTimePickerToolbarUtilityClass, classes);
};
const TimePickerToolbarRoot = styled(PickersToolbar, {
  name: "MuiTimePickerToolbar",
  slot: "Root",
  overridesResolver: (props2, styles2) => styles2.root
})({
  [`& .${pickersToolbarClasses.penIconButtonLandscape}`]: {
    marginTop: "auto"
  }
});
const TimePickerToolbarSeparator = styled(PickersToolbarText, {
  name: "MuiTimePickerToolbar",
  slot: "Separator",
  overridesResolver: (props2, styles2) => styles2.separator
})({
  outline: 0,
  margin: "0 4px 0 2px",
  cursor: "default"
});
const TimePickerToolbarHourMinuteLabel = styled("div", {
  name: "MuiTimePickerToolbar",
  slot: "HourMinuteLabel",
  overridesResolver: (props2, styles2) => [{
    [`&.${timePickerToolbarClasses.hourMinuteLabelLandscape}`]: styles2.hourMinuteLabelLandscape,
    [`&.${timePickerToolbarClasses.hourMinuteLabelReverse}`]: styles2.hourMinuteLabelReverse
  }, styles2.hourMinuteLabel]
})(({
  theme,
  ownerState
}) => _extends$1({
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "flex-end"
}, ownerState.isLandscape && {
  marginTop: "auto"
}, theme.direction === "rtl" && {
  flexDirection: "row-reverse"
}));
const TimePickerToolbarAmPmSelection = styled("div", {
  name: "MuiTimePickerToolbar",
  slot: "AmPmSelection",
  overridesResolver: (props2, styles2) => [{
    [`.${timePickerToolbarClasses.ampmLabel}`]: styles2.ampmLabel
  }, {
    [`&.${timePickerToolbarClasses.ampmLandscape}`]: styles2.ampmLandscape
  }, styles2.ampmSelection]
})(({
  ownerState
}) => _extends$1({
  display: "flex",
  flexDirection: "column",
  marginRight: "auto",
  marginLeft: 12
}, ownerState.isLandscape && {
  margin: "4px 0 auto",
  flexDirection: "row",
  justifyContent: "space-around",
  flexBasis: "100%"
}, {
  [`& .${timePickerToolbarClasses.ampmLabel}`]: {
    fontSize: 17
  }
}));
function TimePickerToolbar(inProps) {
  const props2 = useThemeProps({
    props: inProps,
    name: "MuiTimePickerToolbar"
  });
  const {
    ampm,
    ampmInClock,
    parsedValue,
    isLandscape,
    isMobileKeyboardViewOpen,
    onChange,
    openView,
    setOpenView,
    toggleMobileKeyboardView,
    toolbarTitle: toolbarTitleProp,
    views,
    disabled,
    readOnly
  } = props2, other = _objectWithoutPropertiesLoose(props2, _excluded$8);
  const utils2 = useUtils();
  const localeText = useLocaleText();
  const toolbarTitle = toolbarTitleProp != null ? toolbarTitleProp : localeText.timePickerDefaultToolbarTitle;
  const theme = useTheme$2();
  const showAmPmControl = Boolean(ampm && !ampmInClock);
  const {
    meridiemMode,
    handleMeridiemChange
  } = useMeridiemMode(parsedValue, ampm, onChange);
  const formatHours = (time) => ampm ? utils2.format(time, "hours12h") : utils2.format(time, "hours24h");
  const ownerState = props2;
  const classes = useUtilityClasses$2(_extends$1({}, ownerState, {
    theme
  }));
  const separator = /* @__PURE__ */ jsxRuntimeExports.jsx(TimePickerToolbarSeparator, {
    tabIndex: -1,
    value: ":",
    variant: "h3",
    selected: false,
    className: classes.separator
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(TimePickerToolbarRoot, _extends$1({
    viewType: "clock",
    landscapeDirection: "row",
    toolbarTitle,
    isLandscape,
    isMobileKeyboardViewOpen,
    toggleMobileKeyboardView,
    ownerState,
    className: classes.root
  }, other, {
    children: [/* @__PURE__ */ jsxRuntimeExports.jsxs(TimePickerToolbarHourMinuteLabel, {
      className: classes.hourMinuteLabel,
      ownerState,
      children: [arrayIncludes(views, "hours") && /* @__PURE__ */ jsxRuntimeExports.jsx(PickersToolbarButton, {
        tabIndex: -1,
        variant: "h3",
        onClick: () => setOpenView("hours"),
        selected: openView === "hours",
        value: parsedValue ? formatHours(parsedValue) : "--"
      }), arrayIncludes(views, ["hours", "minutes"]) && separator, arrayIncludes(views, "minutes") && /* @__PURE__ */ jsxRuntimeExports.jsx(PickersToolbarButton, {
        tabIndex: -1,
        variant: "h3",
        onClick: () => setOpenView("minutes"),
        selected: openView === "minutes",
        value: parsedValue ? utils2.format(parsedValue, "minutes") : "--"
      }), arrayIncludes(views, ["minutes", "seconds"]) && separator, arrayIncludes(views, "seconds") && /* @__PURE__ */ jsxRuntimeExports.jsx(PickersToolbarButton, {
        variant: "h3",
        onClick: () => setOpenView("seconds"),
        selected: openView === "seconds",
        value: parsedValue ? utils2.format(parsedValue, "seconds") : "--"
      })]
    }), showAmPmControl && /* @__PURE__ */ jsxRuntimeExports.jsxs(TimePickerToolbarAmPmSelection, {
      className: classes.ampmSelection,
      ownerState,
      children: [/* @__PURE__ */ jsxRuntimeExports.jsx(PickersToolbarButton, {
        disableRipple: true,
        variant: "subtitle2",
        selected: meridiemMode === "am",
        typographyClassName: classes.ampmLabel,
        value: utils2.getMeridiemText("am"),
        onClick: readOnly ? void 0 : () => handleMeridiemChange("am"),
        disabled
      }), /* @__PURE__ */ jsxRuntimeExports.jsx(PickersToolbarButton, {
        disableRipple: true,
        variant: "subtitle2",
        selected: meridiemMode === "pm",
        typographyClassName: classes.ampmLabel,
        value: utils2.getMeridiemText("pm"),
        onClick: readOnly ? void 0 : () => handleMeridiemChange("pm"),
        disabled
      })]
    })]
  }));
}
const validateTime = ({
  adapter,
  value,
  props: props2
}) => {
  const {
    minTime,
    maxTime,
    minutesStep,
    shouldDisableTime,
    disableIgnoringDatePartForTimeValidation
  } = props2;
  const date = adapter.utils.date(value);
  const isAfter = createIsAfterIgnoreDatePart(disableIgnoringDatePartForTimeValidation, adapter.utils);
  if (value === null) {
    return null;
  }
  switch (true) {
    case !adapter.utils.isValid(value):
      return "invalidDate";
    case Boolean(minTime && isAfter(minTime, date)):
      return "minTime";
    case Boolean(maxTime && isAfter(date, maxTime)):
      return "maxTime";
    case Boolean(shouldDisableTime && shouldDisableTime(adapter.utils.getHours(date), "hours")):
      return "shouldDisableTime-hours";
    case Boolean(shouldDisableTime && shouldDisableTime(adapter.utils.getMinutes(date), "minutes")):
      return "shouldDisableTime-minutes";
    case Boolean(shouldDisableTime && shouldDisableTime(adapter.utils.getSeconds(date), "seconds")):
      return "shouldDisableTime-seconds";
    case Boolean(minutesStep && adapter.utils.getMinutes(date) % minutesStep !== 0):
      return "minutesStep";
    default:
      return null;
  }
};
const isSameTimeError = (a, b) => a === b;
const useTimeValidation = (props2) => useValidation(props2, validateTime, isSameTimeError);
const _excluded$7 = ["onChange", "PaperProps", "PopperProps", "ToolbarComponent", "TransitionComponent", "value", "components", "componentsProps"];
const DesktopTimePicker = /* @__PURE__ */ reactExports.forwardRef(function DesktopTimePicker2(inProps, ref) {
  const props2 = useTimePickerDefaultizedProps(inProps, "MuiDesktopTimePicker");
  const validationError = useTimeValidation(props2) !== null;
  const {
    pickerProps,
    inputProps,
    wrapperProps
  } = usePickerState(props2, timePickerValueManager);
  const {
    PaperProps,
    PopperProps,
    ToolbarComponent = TimePickerToolbar,
    TransitionComponent,
    components,
    componentsProps
  } = props2, other = _objectWithoutPropertiesLoose(props2, _excluded$7);
  const DateInputProps = _extends$1({}, inputProps, other, {
    components,
    componentsProps,
    ref,
    validationError
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsx(DesktopWrapper, _extends$1({}, wrapperProps, {
    DateInputProps,
    KeyboardDateInputComponent: KeyboardDateInput,
    PopperProps,
    PaperProps,
    TransitionComponent,
    components,
    componentsProps,
    children: /* @__PURE__ */ jsxRuntimeExports.jsx(CalendarOrClockPicker, _extends$1({}, pickerProps, {
      autoFocus: true,
      toolbarTitle: props2.label || props2.toolbarTitle,
      ToolbarComponent,
      DateInputProps,
      components,
      componentsProps
    }, other))
  }));
});
const _excluded$6 = ["ToolbarComponent", "value", "onChange", "components", "componentsProps"];
const MobileTimePicker = /* @__PURE__ */ reactExports.forwardRef(function MobileTimePicker2(inProps, ref) {
  const props2 = useTimePickerDefaultizedProps(inProps, "MuiMobileTimePicker");
  const validationError = useTimeValidation(props2) !== null;
  const {
    pickerProps,
    inputProps,
    wrapperProps
  } = usePickerState(props2, timePickerValueManager);
  const {
    ToolbarComponent = TimePickerToolbar,
    components,
    componentsProps
  } = props2, other = _objectWithoutPropertiesLoose(props2, _excluded$6);
  const DateInputProps = _extends$1({}, inputProps, other, {
    components,
    componentsProps,
    ref,
    validationError
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsx(MobileWrapper, _extends$1({}, other, wrapperProps, {
    DateInputProps,
    PureDateInputComponent: PureDateInput,
    components,
    componentsProps,
    children: /* @__PURE__ */ jsxRuntimeExports.jsx(CalendarOrClockPicker, _extends$1({}, pickerProps, {
      autoFocus: true,
      toolbarTitle: props2.label || props2.toolbarTitle,
      ToolbarComponent,
      DateInputProps,
      components,
      componentsProps
    }, other))
  }));
});
const _excluded$5 = ["desktopModeMediaQuery", "DialogProps", "PopperProps", "TransitionComponent"];
const TimePicker = /* @__PURE__ */ reactExports.forwardRef(function TimePicker2(inProps, ref) {
  const props2 = useThemeProps({
    props: inProps,
    name: "MuiTimePicker"
  });
  const {
    desktopModeMediaQuery = "@media (pointer: fine)",
    DialogProps,
    PopperProps,
    TransitionComponent
  } = props2, other = _objectWithoutPropertiesLoose(props2, _excluded$5);
  const isDesktop = useMediaQuery(desktopModeMediaQuery, {
    defaultMatches: true
  });
  if (isDesktop) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(DesktopTimePicker, _extends$1({
      ref,
      PopperProps,
      TransitionComponent
    }, other));
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(MobileTimePicker, _extends$1({
    ref,
    DialogProps
  }, other));
});
function useDateTimePickerDefaultizedProps(props2, name) {
  var _themeProps$ampm, _themeProps$minDateTi, _themeProps$maxDateTi, _themeProps$minDateTi2, _themeProps$maxDateTi2;
  const themeProps = useThemeProps({
    props: props2,
    name
  });
  const utils2 = useUtils();
  const defaultDates = useDefaultDates();
  const ampm = (_themeProps$ampm = themeProps.ampm) != null ? _themeProps$ampm : utils2.is12HourCycleInCurrentLocale();
  if (themeProps.orientation != null && themeProps.orientation !== "portrait") {
    throw new Error("We are not supporting custom orientation for DateTimePicker yet :(");
  }
  return _extends$1({
    ampm,
    orientation: "portrait",
    openTo: "day",
    views: ["year", "day", "hours", "minutes"],
    ampmInClock: true,
    acceptRegex: ampm ? /[\dap]/gi : /\d/gi,
    disableMaskedInput: false,
    inputFormat: ampm ? utils2.formats.keyboardDateTime12h : utils2.formats.keyboardDateTime24h,
    disableIgnoringDatePartForTimeValidation: Boolean(themeProps.minDateTime || themeProps.maxDateTime),
    disablePast: false,
    disableFuture: false
  }, themeProps, {
    minDate: parseNonNullablePickerDate(utils2, (_themeProps$minDateTi = themeProps.minDateTime) != null ? _themeProps$minDateTi : themeProps.minDate, defaultDates.minDate),
    maxDate: parseNonNullablePickerDate(utils2, (_themeProps$maxDateTi = themeProps.maxDateTime) != null ? _themeProps$maxDateTi : themeProps.maxDate, defaultDates.maxDate),
    minTime: (_themeProps$minDateTi2 = themeProps.minDateTime) != null ? _themeProps$minDateTi2 : themeProps.minTime,
    maxTime: (_themeProps$maxDateTi2 = themeProps.maxDateTime) != null ? _themeProps$maxDateTi2 : themeProps.maxTime
  });
}
const dateTimePickerValueManager = {
  emptyValue: null,
  getTodayValue: (utils2) => utils2.date(),
  parseInput: parsePickerInputValue,
  areValuesEqual: (utils2, a, b) => utils2.isEqual(a, b)
};
const resolveViewTypeFromView = (view) => {
  switch (view) {
    case "year":
    case "month":
    case "day":
      return "calendar";
    default:
      return "clock";
  }
};
function getDateTimePickerToolbarUtilityClass(slot) {
  return generateUtilityClass("MuiDateTimePickerToolbar", slot);
}
generateUtilityClasses("MuiDateTimePickerToolbar", ["root", "dateContainer", "timeContainer", "separator"]);
const _excluded$4 = ["ampm", "parsedValue", "isMobileKeyboardViewOpen", "onChange", "openView", "setOpenView", "toggleMobileKeyboardView", "toolbarFormat", "toolbarPlaceholder", "toolbarTitle", "views"];
const useUtilityClasses$1 = (ownerState) => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ["root"],
    dateContainer: ["dateContainer"],
    timeContainer: ["timeContainer"],
    separator: ["separator"]
  };
  return composeClasses(slots, getDateTimePickerToolbarUtilityClass, classes);
};
const DateTimePickerToolbarRoot = styled(PickersToolbar, {
  name: "MuiDateTimePickerToolbar",
  slot: "Root",
  overridesResolver: (props2, styles2) => styles2.root
})(({
  theme
}) => ({
  paddingLeft: 16,
  paddingRight: 16,
  justifyContent: "space-around",
  position: "relative",
  [`& .${pickersToolbarClasses.penIconButton}`]: _extends$1({
    position: "absolute",
    top: 8
  }, theme.direction === "rtl" ? {
    left: 8
  } : {
    right: 8
  })
}));
const DateTimePickerToolbarDateContainer = styled("div", {
  name: "MuiDateTimePickerToolbar",
  slot: "DateContainer",
  overridesResolver: (props2, styles2) => styles2.dateContainer
})({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start"
});
const DateTimePickerToolbarTimeContainer = styled("div", {
  name: "MuiDateTimePickerToolbar",
  slot: "TimeContainer",
  overridesResolver: (props2, styles2) => styles2.timeContainer
})({
  display: "flex"
});
const DateTimePickerToolbarSeparator = styled(PickersToolbarText, {
  name: "MuiDateTimePickerToolbar",
  slot: "Separator",
  overridesResolver: (props2, styles2) => styles2.separator
})({
  margin: "0 4px 0 2px",
  cursor: "default"
});
function DateTimePickerToolbar(inProps) {
  const props2 = useThemeProps({
    props: inProps,
    name: "MuiDateTimePickerToolbar"
  });
  const {
    ampm,
    parsedValue,
    isMobileKeyboardViewOpen,
    openView,
    setOpenView,
    toggleMobileKeyboardView,
    toolbarFormat,
    toolbarPlaceholder = "––",
    toolbarTitle: toolbarTitleProp,
    views
  } = props2, other = _objectWithoutPropertiesLoose(props2, _excluded$4);
  const ownerState = props2;
  const utils2 = useUtils();
  const localeText = useLocaleText();
  const classes = useUtilityClasses$1(ownerState);
  const toolbarTitle = toolbarTitleProp != null ? toolbarTitleProp : localeText.dateTimePickerDefaultToolbarTitle;
  const formatHours = (time) => ampm ? utils2.format(time, "hours12h") : utils2.format(time, "hours24h");
  const dateText = reactExports.useMemo(() => {
    if (!parsedValue) {
      return toolbarPlaceholder;
    }
    if (toolbarFormat) {
      return utils2.formatByString(parsedValue, toolbarFormat);
    }
    return utils2.format(parsedValue, "shortDate");
  }, [parsedValue, toolbarFormat, toolbarPlaceholder, utils2]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(DateTimePickerToolbarRoot, _extends$1({
    toolbarTitle,
    isMobileKeyboardViewOpen,
    toggleMobileKeyboardView,
    className: classes.root,
    viewType: resolveViewTypeFromView(openView)
  }, other, {
    isLandscape: false,
    ownerState,
    children: [/* @__PURE__ */ jsxRuntimeExports.jsxs(DateTimePickerToolbarDateContainer, {
      className: classes.dateContainer,
      ownerState,
      children: [views.includes("year") && /* @__PURE__ */ jsxRuntimeExports.jsx(PickersToolbarButton, {
        tabIndex: -1,
        variant: "subtitle1",
        onClick: () => setOpenView("year"),
        selected: openView === "year",
        value: parsedValue ? utils2.format(parsedValue, "year") : "–"
      }), views.includes("day") && /* @__PURE__ */ jsxRuntimeExports.jsx(PickersToolbarButton, {
        tabIndex: -1,
        variant: "h4",
        onClick: () => setOpenView("day"),
        selected: openView === "day",
        value: dateText
      })]
    }), /* @__PURE__ */ jsxRuntimeExports.jsxs(DateTimePickerToolbarTimeContainer, {
      className: classes.timeContainer,
      ownerState,
      children: [views.includes("hours") && /* @__PURE__ */ jsxRuntimeExports.jsx(PickersToolbarButton, {
        variant: "h3",
        onClick: () => setOpenView("hours"),
        selected: openView === "hours",
        value: parsedValue ? formatHours(parsedValue) : "--"
      }), views.includes("minutes") && /* @__PURE__ */ jsxRuntimeExports.jsxs(reactExports.Fragment, {
        children: [/* @__PURE__ */ jsxRuntimeExports.jsx(DateTimePickerToolbarSeparator, {
          variant: "h3",
          value: ":",
          className: classes.separator,
          ownerState
        }), /* @__PURE__ */ jsxRuntimeExports.jsx(PickersToolbarButton, {
          variant: "h3",
          onClick: () => setOpenView("minutes"),
          selected: openView === "minutes",
          value: parsedValue ? utils2.format(parsedValue, "minutes") : "--"
        })]
      }), views.includes("seconds") && /* @__PURE__ */ jsxRuntimeExports.jsxs(reactExports.Fragment, {
        children: [/* @__PURE__ */ jsxRuntimeExports.jsx(DateTimePickerToolbarSeparator, {
          variant: "h3",
          value: ":",
          className: classes.separator,
          ownerState
        }), /* @__PURE__ */ jsxRuntimeExports.jsx(PickersToolbarButton, {
          variant: "h3",
          onClick: () => setOpenView("seconds"),
          selected: openView === "seconds",
          value: parsedValue ? utils2.format(parsedValue, "seconds") : "--"
        })]
      })]
    })]
  }));
}
const _excluded$3 = ["minDate", "maxDate", "disableFuture", "shouldDisableDate", "disablePast"];
const validateDateTime = ({
  props: props2,
  value,
  adapter
}) => {
  const {
    minDate,
    maxDate,
    disableFuture,
    shouldDisableDate,
    disablePast
  } = props2, timeValidationProps = _objectWithoutPropertiesLoose(props2, _excluded$3);
  const dateValidationResult = validateDate({
    adapter,
    value,
    props: {
      minDate,
      maxDate,
      disableFuture,
      shouldDisableDate,
      disablePast
    }
  });
  if (dateValidationResult !== null) {
    return dateValidationResult;
  }
  return validateTime({
    adapter,
    value,
    props: timeValidationProps
  });
};
const isSameDateTimeError = (a, b) => a === b;
function useDateTimeValidation(props2) {
  return useValidation(props2, validateDateTime, isSameDateTimeError);
}
function getDateTimePickerTabsUtilityClass(slot) {
  return generateUtilityClass("MuiDateTimePickerTabs", slot);
}
generateUtilityClasses("MuiDateTimePickerTabs", ["root"]);
const viewToTab = (openView) => {
  if (["day", "month", "year"].includes(openView)) {
    return "date";
  }
  return "time";
};
const tabToView = (tab) => {
  if (tab === "date") {
    return "day";
  }
  return "hours";
};
const useUtilityClasses = (ownerState) => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ["root"]
  };
  return composeClasses(slots, getDateTimePickerTabsUtilityClass, classes);
};
const DateTimePickerTabsRoot = styled(Tabs$1, {
  name: "MuiDateTimePickerTabs",
  slot: "Root",
  overridesResolver: (_, styles2) => styles2.root
})(({
  ownerState,
  theme
}) => _extends$1({
  boxShadow: `0 -1px 0 0 inset ${theme.palette.divider}`
}, ownerState.wrapperVariant === "desktop" && {
  order: 1,
  boxShadow: `0 1px 0 0 inset ${theme.palette.divider}`,
  [`& .${tabsClasses$1.indicator}`]: {
    bottom: "auto",
    top: 0
  }
}));
const DateTimePickerTabs = function DateTimePickerTabs2(inProps) {
  const props2 = useThemeProps({
    props: inProps,
    name: "MuiDateTimePickerTabs"
  });
  const {
    dateRangeIcon = /* @__PURE__ */ jsxRuntimeExports.jsx(DateRange, {}),
    onChange,
    timeIcon = /* @__PURE__ */ jsxRuntimeExports.jsx(Time, {}),
    view
  } = props2;
  const localeText = useLocaleText();
  const wrapperVariant = reactExports.useContext(WrapperVariantContext);
  const ownerState = _extends$1({}, props2, {
    wrapperVariant
  });
  const classes = useUtilityClasses(ownerState);
  const handleChange = (event, value) => {
    onChange(tabToView(value));
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(DateTimePickerTabsRoot, {
    ownerState,
    variant: "fullWidth",
    value: viewToTab(view),
    onChange: handleChange,
    className: classes.root,
    children: [/* @__PURE__ */ jsxRuntimeExports.jsx(Tab$1, {
      value: "date",
      "aria-label": localeText.dateTableLabel,
      icon: /* @__PURE__ */ jsxRuntimeExports.jsx(reactExports.Fragment, {
        children: dateRangeIcon
      })
    }), /* @__PURE__ */ jsxRuntimeExports.jsx(Tab$1, {
      value: "time",
      "aria-label": localeText.timeTableLabel,
      icon: /* @__PURE__ */ jsxRuntimeExports.jsx(reactExports.Fragment, {
        children: timeIcon
      })
    })]
  });
};
const _excluded$2 = ["onChange", "PaperProps", "PopperProps", "ToolbarComponent", "TransitionComponent", "value", "components", "componentsProps", "hideTabs"];
const DesktopDateTimePicker = /* @__PURE__ */ reactExports.forwardRef(function DesktopDateTimePicker2(inProps, ref) {
  const props2 = useDateTimePickerDefaultizedProps(inProps, "MuiDesktopDateTimePicker");
  const validationError = useDateTimeValidation(props2) !== null;
  const {
    pickerProps,
    inputProps,
    wrapperProps
  } = usePickerState(props2, dateTimePickerValueManager);
  const {
    PaperProps,
    PopperProps,
    ToolbarComponent = DateTimePickerToolbar,
    TransitionComponent,
    components: providedComponents,
    componentsProps,
    hideTabs = true
  } = props2, other = _objectWithoutPropertiesLoose(props2, _excluded$2);
  const components = reactExports.useMemo(() => _extends$1({
    Tabs: DateTimePickerTabs
  }, providedComponents), [providedComponents]);
  const AllDateInputProps = _extends$1({}, inputProps, other, {
    components,
    componentsProps,
    ref,
    validationError
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsx(DesktopWrapper, _extends$1({}, wrapperProps, {
    DateInputProps: AllDateInputProps,
    KeyboardDateInputComponent: KeyboardDateInput,
    PopperProps,
    PaperProps,
    TransitionComponent,
    components,
    componentsProps,
    children: /* @__PURE__ */ jsxRuntimeExports.jsx(CalendarOrClockPicker, _extends$1({}, pickerProps, {
      autoFocus: true,
      toolbarTitle: props2.label || props2.toolbarTitle,
      ToolbarComponent,
      DateInputProps: AllDateInputProps,
      components,
      componentsProps,
      hideTabs
    }, other))
  }));
});
const _excluded$1 = ["ToolbarComponent", "value", "onChange", "components", "componentsProps", "hideTabs"];
const MobileDateTimePicker = /* @__PURE__ */ reactExports.forwardRef(function MobileDateTimePicker2(inProps, ref) {
  const props2 = useDateTimePickerDefaultizedProps(inProps, "MuiMobileDateTimePicker");
  const validationError = useDateTimeValidation(props2) !== null;
  const {
    pickerProps,
    inputProps,
    wrapperProps
  } = usePickerState(props2, dateTimePickerValueManager);
  const {
    ToolbarComponent = DateTimePickerToolbar,
    components: providedComponents,
    componentsProps,
    hideTabs = false
  } = props2, other = _objectWithoutPropertiesLoose(props2, _excluded$1);
  const components = reactExports.useMemo(() => _extends$1({
    Tabs: DateTimePickerTabs
  }, providedComponents), [providedComponents]);
  const DateInputProps = _extends$1({}, inputProps, other, {
    components,
    componentsProps,
    ref,
    validationError
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsx(MobileWrapper, _extends$1({}, other, wrapperProps, {
    DateInputProps,
    PureDateInputComponent: PureDateInput,
    components,
    componentsProps,
    children: /* @__PURE__ */ jsxRuntimeExports.jsx(CalendarOrClockPicker, _extends$1({}, pickerProps, {
      autoFocus: true,
      toolbarTitle: props2.label || props2.toolbarTitle,
      ToolbarComponent,
      DateInputProps,
      components,
      componentsProps,
      hideTabs
    }, other))
  }));
});
const _excluded = ["desktopModeMediaQuery", "DialogProps", "PopperProps", "TransitionComponent"];
const DateTimePicker = /* @__PURE__ */ reactExports.forwardRef(function DateTimePicker2(inProps, ref) {
  const props2 = useThemeProps({
    props: inProps,
    name: "MuiDateTimePicker"
  });
  const {
    desktopModeMediaQuery = "@media (pointer: fine)",
    DialogProps,
    PopperProps,
    TransitionComponent
  } = props2, other = _objectWithoutPropertiesLoose(props2, _excluded);
  const isDesktop = useMediaQuery(desktopModeMediaQuery, {
    defaultMatches: true
  });
  if (isDesktop) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(DesktopDateTimePicker, _extends$1({
      ref,
      PopperProps,
      TransitionComponent
    }, other));
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(MobileDateTimePicker, _extends$1({
    ref,
    DialogProps
  }, other));
});
var lib = {};
var players = {};
var utils = {};
var loadScript = function load(src, opts, cb) {
  var head = document.head || document.getElementsByTagName("head")[0];
  var script = document.createElement("script");
  if (typeof opts === "function") {
    cb = opts;
    opts = {};
  }
  opts = opts || {};
  cb = cb || function() {
  };
  script.type = opts.type || "text/javascript";
  script.charset = opts.charset || "utf8";
  script.async = "async" in opts ? !!opts.async : true;
  script.src = src;
  if (opts.attrs) {
    setAttributes(script, opts.attrs);
  }
  if (opts.text) {
    script.text = "" + opts.text;
  }
  var onend = "onload" in script ? stdOnEnd : ieOnEnd;
  onend(script, cb);
  if (!script.onload) {
    stdOnEnd(script, cb);
  }
  head.appendChild(script);
};
function setAttributes(script, attrs) {
  for (var attr in attrs) {
    script.setAttribute(attr, attrs[attr]);
  }
}
function stdOnEnd(script, cb) {
  script.onload = function() {
    this.onerror = this.onload = null;
    cb(null, script);
  };
  script.onerror = function() {
    this.onerror = this.onload = null;
    cb(new Error("Failed to load " + this.src), script);
  };
}
function ieOnEnd(script, cb) {
  script.onreadystatechange = function() {
    if (this.readyState != "complete" && this.readyState != "loaded")
      return;
    this.onreadystatechange = null;
    cb(null, script);
  };
}
var isMergeableObject = function isMergeableObject2(value) {
  return isNonNullObject(value) && !isSpecial(value);
};
function isNonNullObject(value) {
  return !!value && typeof value === "object";
}
function isSpecial(value) {
  var stringValue = Object.prototype.toString.call(value);
  return stringValue === "[object RegExp]" || stringValue === "[object Date]" || isReactElement(value);
}
var canUseSymbol = typeof Symbol === "function" && Symbol.for;
var REACT_ELEMENT_TYPE = canUseSymbol ? Symbol.for("react.element") : 60103;
function isReactElement(value) {
  return value.$$typeof === REACT_ELEMENT_TYPE;
}
function emptyTarget(val) {
  return Array.isArray(val) ? [] : {};
}
function cloneUnlessOtherwiseSpecified(value, options) {
  return options.clone !== false && options.isMergeableObject(value) ? deepmerge(emptyTarget(value), value, options) : value;
}
function defaultArrayMerge(target, source, options) {
  return target.concat(source).map(function(element) {
    return cloneUnlessOtherwiseSpecified(element, options);
  });
}
function getMergeFunction(key, options) {
  if (!options.customMerge) {
    return deepmerge;
  }
  var customMerge = options.customMerge(key);
  return typeof customMerge === "function" ? customMerge : deepmerge;
}
function getEnumerableOwnPropertySymbols(target) {
  return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(target).filter(function(symbol) {
    return Object.propertyIsEnumerable.call(target, symbol);
  }) : [];
}
function getKeys(target) {
  return Object.keys(target).concat(getEnumerableOwnPropertySymbols(target));
}
function propertyIsOnObject(object2, property) {
  try {
    return property in object2;
  } catch (_) {
    return false;
  }
}
function propertyIsUnsafe(target, key) {
  return propertyIsOnObject(target, key) && !(Object.hasOwnProperty.call(target, key) && Object.propertyIsEnumerable.call(target, key));
}
function mergeObject(target, source, options) {
  var destination = {};
  if (options.isMergeableObject(target)) {
    getKeys(target).forEach(function(key) {
      destination[key] = cloneUnlessOtherwiseSpecified(target[key], options);
    });
  }
  getKeys(source).forEach(function(key) {
    if (propertyIsUnsafe(target, key)) {
      return;
    }
    if (propertyIsOnObject(target, key) && options.isMergeableObject(source[key])) {
      destination[key] = getMergeFunction(key, options)(target[key], source[key], options);
    } else {
      destination[key] = cloneUnlessOtherwiseSpecified(source[key], options);
    }
  });
  return destination;
}
function deepmerge(target, source, options) {
  options = options || {};
  options.arrayMerge = options.arrayMerge || defaultArrayMerge;
  options.isMergeableObject = options.isMergeableObject || isMergeableObject;
  options.cloneUnlessOtherwiseSpecified = cloneUnlessOtherwiseSpecified;
  var sourceIsArray = Array.isArray(source);
  var targetIsArray = Array.isArray(target);
  var sourceAndTargetTypesMatch = sourceIsArray === targetIsArray;
  if (!sourceAndTargetTypesMatch) {
    return cloneUnlessOtherwiseSpecified(source, options);
  } else if (sourceIsArray) {
    return options.arrayMerge(target, source, options);
  } else {
    return mergeObject(target, source, options);
  }
}
deepmerge.all = function deepmergeAll(array2, options) {
  if (!Array.isArray(array2)) {
    throw new Error("first argument should be an array");
  }
  return array2.reduce(function(prev, next) {
    return deepmerge(prev, next, options);
  }, {});
};
var deepmerge_1 = deepmerge;
var cjs = deepmerge_1;
Object.defineProperty(utils, "__esModule", {
  value: true
});
utils.parseStartTime = parseStartTime;
utils.parseEndTime = parseEndTime;
utils.randomString = randomString;
utils.queryString = queryString;
utils.getSDK = getSDK;
utils.getConfig = getConfig;
utils.omit = omit;
utils.callPlayer = callPlayer;
utils.isMediaStream = isMediaStream;
utils.isBlobUrl = isBlobUrl;
utils.supportsWebKitPresentationMode = supportsWebKitPresentationMode;
var _loadScript = _interopRequireDefault$2(loadScript);
var _deepmerge$1 = _interopRequireDefault$2(cjs);
function _interopRequireDefault$2(obj) {
  return obj && obj.__esModule ? obj : { "default": obj };
}
function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray$2(arr, i) || _nonIterableRest();
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray$2(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray$2(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray$2(o, minLen);
}
function _arrayLikeToArray$2(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}
function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr)))
    return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = void 0;
  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);
      if (i && _arr.length === i)
        break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null)
        _i["return"]();
    } finally {
      if (_d)
        throw _e;
    }
  }
  return _arr;
}
function _arrayWithHoles(arr) {
  if (Array.isArray(arr))
    return arr;
}
var MATCH_START_QUERY = /[?&#](?:start|t)=([0-9hms]+)/;
var MATCH_END_QUERY = /[?&#]end=([0-9hms]+)/;
var MATCH_START_STAMP = /(\d+)(h|m|s)/g;
var MATCH_NUMERIC = /^\d+$/;
function parseTimeParam(url, pattern) {
  if (url instanceof Array) {
    return void 0;
  }
  var match = url.match(pattern);
  if (match) {
    var stamp = match[1];
    if (stamp.match(MATCH_START_STAMP)) {
      return parseTimeString(stamp);
    }
    if (MATCH_NUMERIC.test(stamp)) {
      return parseInt(stamp);
    }
  }
  return void 0;
}
function parseTimeString(stamp) {
  var seconds = 0;
  var array2 = MATCH_START_STAMP.exec(stamp);
  while (array2 !== null) {
    var _array = array2, _array2 = _slicedToArray(_array, 3), count = _array2[1], period = _array2[2];
    if (period === "h")
      seconds += parseInt(count, 10) * 60 * 60;
    if (period === "m")
      seconds += parseInt(count, 10) * 60;
    if (period === "s")
      seconds += parseInt(count, 10);
    array2 = MATCH_START_STAMP.exec(stamp);
  }
  return seconds;
}
function parseStartTime(url) {
  return parseTimeParam(url, MATCH_START_QUERY);
}
function parseEndTime(url) {
  return parseTimeParam(url, MATCH_END_QUERY);
}
function randomString() {
  return Math.random().toString(36).substr(2, 5);
}
function queryString(object2) {
  return Object.keys(object2).map(function(key) {
    return "".concat(key, "=").concat(object2[key]);
  }).join("&");
}
function getGlobal(key) {
  if (window[key]) {
    return window[key];
  }
  if (window.exports && window.exports[key]) {
    return window.exports[key];
  }
  if (window.module && window.module.exports && window.module.exports[key]) {
    return window.module.exports[key];
  }
  return null;
}
var requests = {};
function getSDK(url, sdkGlobal) {
  var sdkReady = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
  var isLoaded = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : function() {
    return true;
  };
  var fetchScript = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : _loadScript["default"];
  var existingGlobal = getGlobal(sdkGlobal);
  if (existingGlobal && isLoaded(existingGlobal)) {
    return Promise.resolve(existingGlobal);
  }
  return new Promise(function(resolve, reject) {
    if (requests[url]) {
      requests[url].push({
        resolve,
        reject
      });
      return;
    }
    requests[url] = [{
      resolve,
      reject
    }];
    var onLoaded = function onLoaded2(sdk) {
      requests[url].forEach(function(request) {
        return request.resolve(sdk);
      });
    };
    if (sdkReady) {
      var previousOnReady = window[sdkReady];
      window[sdkReady] = function() {
        if (previousOnReady)
          previousOnReady();
        onLoaded(getGlobal(sdkGlobal));
      };
    }
    fetchScript(url, function(err) {
      if (err) {
        requests[url].forEach(function(request) {
          return request.reject(err);
        });
        requests[url] = null;
      } else if (!sdkReady) {
        onLoaded(getGlobal(sdkGlobal));
      }
    });
  });
}
function getConfig(props2, defaultProps2) {
  return (0, _deepmerge$1["default"])(defaultProps2.config, props2.config);
}
function omit(object2) {
  var _ref;
  for (var _len = arguments.length, arrays = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    arrays[_key - 1] = arguments[_key];
  }
  var omitKeys = (_ref = []).concat.apply(_ref, arrays);
  var output = {};
  var keys = Object.keys(object2);
  for (var _i2 = 0, _keys = keys; _i2 < _keys.length; _i2++) {
    var key = _keys[_i2];
    if (omitKeys.indexOf(key) === -1) {
      output[key] = object2[key];
    }
  }
  return output;
}
function callPlayer(method) {
  var _this$player;
  if (!this.player || !this.player[method]) {
    var message = "ReactPlayer: ".concat(this.constructor.displayName, " player could not call %c").concat(method, "%c – ");
    if (!this.player) {
      message += "The player was not available";
    } else if (!this.player[method]) {
      message += "The method was not available";
    }
    console.warn(message, "font-weight: bold", "");
    return null;
  }
  for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
    args[_key2 - 1] = arguments[_key2];
  }
  return (_this$player = this.player)[method].apply(_this$player, args);
}
function isMediaStream(url) {
  return typeof window !== "undefined" && typeof window.MediaStream !== "undefined" && url instanceof window.MediaStream;
}
function isBlobUrl(url) {
  return /^blob:/.test(url);
}
function supportsWebKitPresentationMode() {
  var video = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : document.createElement("video");
  var notMobile = /iPhone|iPod/.test(navigator.userAgent) === false;
  return video.webkitSupportsPresentationMode && typeof video.webkitSetPresentationMode === "function" && notMobile;
}
var patterns = {};
Object.defineProperty(patterns, "__esModule", {
  value: true
});
patterns.canPlay = patterns.FLV_EXTENSIONS = patterns.DASH_EXTENSIONS = patterns.HLS_EXTENSIONS = patterns.VIDEO_EXTENSIONS = patterns.AUDIO_EXTENSIONS = patterns.MATCH_URL_KALTURA = patterns.MATCH_URL_VIDYARD = patterns.MATCH_URL_MIXCLOUD = patterns.MATCH_URL_DAILYMOTION = patterns.MATCH_URL_TWITCH_CHANNEL = patterns.MATCH_URL_TWITCH_VIDEO = patterns.MATCH_URL_WISTIA = patterns.MATCH_URL_STREAMABLE = patterns.MATCH_URL_FACEBOOK_WATCH = patterns.MATCH_URL_FACEBOOK = patterns.MATCH_URL_VIMEO = patterns.MATCH_URL_SOUNDCLOUD = patterns.MATCH_URL_YOUTUBE = void 0;
var _utils$1 = utils;
function _createForOfIteratorHelper(o, allowArrayLike) {
  var it;
  if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray$1(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it)
        o = it;
      var i = 0;
      var F = function F2() {
      };
      return { s: F, n: function n() {
        if (i >= o.length)
          return { done: true };
        return { done: false, value: o[i++] };
      }, e: function e(_e) {
        throw _e;
      }, f: F };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var normalCompletion = true, didErr = false, err;
  return { s: function s() {
    it = o[Symbol.iterator]();
  }, n: function n() {
    var step = it.next();
    normalCompletion = step.done;
    return step;
  }, e: function e(_e2) {
    didErr = true;
    err = _e2;
  }, f: function f() {
    try {
      if (!normalCompletion && it["return"] != null)
        it["return"]();
    } finally {
      if (didErr)
        throw err;
    }
  } };
}
function _unsupportedIterableToArray$1(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray$1(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray$1(o, minLen);
}
function _arrayLikeToArray$1(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}
var MATCH_URL_YOUTUBE = /(?:youtu\.be\/|youtube(?:-nocookie)?\.com\/(?:embed\/|v\/|watch\/|watch\?v=|watch\?.+&v=|shorts\/|live\/))((\w|-){11})|youtube\.com\/playlist\?list=|youtube\.com\/user\//;
patterns.MATCH_URL_YOUTUBE = MATCH_URL_YOUTUBE;
var MATCH_URL_SOUNDCLOUD = /(?:soundcloud\.com|snd\.sc)\/[^.]+$/;
patterns.MATCH_URL_SOUNDCLOUD = MATCH_URL_SOUNDCLOUD;
var MATCH_URL_VIMEO = /vimeo\.com\/(?!progressive_redirect).+/;
patterns.MATCH_URL_VIMEO = MATCH_URL_VIMEO;
var MATCH_URL_FACEBOOK = /^https?:\/\/(www\.)?facebook\.com.*\/(video(s)?|watch|story)(\.php?|\/).+$/;
patterns.MATCH_URL_FACEBOOK = MATCH_URL_FACEBOOK;
var MATCH_URL_FACEBOOK_WATCH = /^https?:\/\/fb\.watch\/.+$/;
patterns.MATCH_URL_FACEBOOK_WATCH = MATCH_URL_FACEBOOK_WATCH;
var MATCH_URL_STREAMABLE = /streamable\.com\/([a-z0-9]+)$/;
patterns.MATCH_URL_STREAMABLE = MATCH_URL_STREAMABLE;
var MATCH_URL_WISTIA = /(?:wistia\.(?:com|net)|wi\.st)\/(?:medias|embed)\/(?:iframe\/)?(.*)$/;
patterns.MATCH_URL_WISTIA = MATCH_URL_WISTIA;
var MATCH_URL_TWITCH_VIDEO = /(?:www\.|go\.)?twitch\.tv\/videos\/(\d+)($|\?)/;
patterns.MATCH_URL_TWITCH_VIDEO = MATCH_URL_TWITCH_VIDEO;
var MATCH_URL_TWITCH_CHANNEL = /(?:www\.|go\.)?twitch\.tv\/([a-zA-Z0-9_]+)($|\?)/;
patterns.MATCH_URL_TWITCH_CHANNEL = MATCH_URL_TWITCH_CHANNEL;
var MATCH_URL_DAILYMOTION = /^(?:(?:https?):)?(?:\/\/)?(?:www\.)?(?:(?:dailymotion\.com(?:\/embed)?\/video)|dai\.ly)\/([a-zA-Z0-9]+)(?:_[\w_-]+)?(?:[\w.#_-]+)?/;
patterns.MATCH_URL_DAILYMOTION = MATCH_URL_DAILYMOTION;
var MATCH_URL_MIXCLOUD = /mixcloud\.com\/([^/]+\/[^/]+)/;
patterns.MATCH_URL_MIXCLOUD = MATCH_URL_MIXCLOUD;
var MATCH_URL_VIDYARD = /vidyard.com\/(?:watch\/)?([a-zA-Z0-9-_]+)/;
patterns.MATCH_URL_VIDYARD = MATCH_URL_VIDYARD;
var MATCH_URL_KALTURA = /^https?:\/\/[a-zA-Z]+\.kaltura.(com|org)\/p\/([0-9]+)\/sp\/([0-9]+)00\/embedIframeJs\/uiconf_id\/([0-9]+)\/partner_id\/([0-9]+)(.*)entry_id.([a-zA-Z0-9-_].*)$/;
patterns.MATCH_URL_KALTURA = MATCH_URL_KALTURA;
var AUDIO_EXTENSIONS = /\.(m4a|m4b|mp4a|mpga|mp2|mp2a|mp3|m2a|m3a|wav|weba|aac|oga|spx)($|\?)/i;
patterns.AUDIO_EXTENSIONS = AUDIO_EXTENSIONS;
var VIDEO_EXTENSIONS = /\.(mp4|og[gv]|webm|mov|m4v)(#t=[,\d+]+)?($|\?)/i;
patterns.VIDEO_EXTENSIONS = VIDEO_EXTENSIONS;
var HLS_EXTENSIONS = /\.(m3u8)($|\?)/i;
patterns.HLS_EXTENSIONS = HLS_EXTENSIONS;
var DASH_EXTENSIONS = /\.(mpd)($|\?)/i;
patterns.DASH_EXTENSIONS = DASH_EXTENSIONS;
var FLV_EXTENSIONS = /\.(flv)($|\?)/i;
patterns.FLV_EXTENSIONS = FLV_EXTENSIONS;
var canPlayFile = function canPlayFile2(url) {
  if (url instanceof Array) {
    var _iterator = _createForOfIteratorHelper(url), _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done; ) {
        var item = _step.value;
        if (typeof item === "string" && canPlayFile2(item)) {
          return true;
        }
        if (canPlayFile2(item.src)) {
          return true;
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    return false;
  }
  if ((0, _utils$1.isMediaStream)(url) || (0, _utils$1.isBlobUrl)(url)) {
    return true;
  }
  return AUDIO_EXTENSIONS.test(url) || VIDEO_EXTENSIONS.test(url) || HLS_EXTENSIONS.test(url) || DASH_EXTENSIONS.test(url) || FLV_EXTENSIONS.test(url);
};
var canPlay = {
  youtube: function youtube(url) {
    if (url instanceof Array) {
      return url.every(function(item) {
        return MATCH_URL_YOUTUBE.test(item);
      });
    }
    return MATCH_URL_YOUTUBE.test(url);
  },
  soundcloud: function soundcloud(url) {
    return MATCH_URL_SOUNDCLOUD.test(url) && !AUDIO_EXTENSIONS.test(url);
  },
  vimeo: function vimeo(url) {
    return MATCH_URL_VIMEO.test(url) && !VIDEO_EXTENSIONS.test(url) && !HLS_EXTENSIONS.test(url);
  },
  facebook: function facebook(url) {
    return MATCH_URL_FACEBOOK.test(url) || MATCH_URL_FACEBOOK_WATCH.test(url);
  },
  streamable: function streamable(url) {
    return MATCH_URL_STREAMABLE.test(url);
  },
  wistia: function wistia(url) {
    return MATCH_URL_WISTIA.test(url);
  },
  twitch: function twitch(url) {
    return MATCH_URL_TWITCH_VIDEO.test(url) || MATCH_URL_TWITCH_CHANNEL.test(url);
  },
  dailymotion: function dailymotion(url) {
    return MATCH_URL_DAILYMOTION.test(url);
  },
  mixcloud: function mixcloud(url) {
    return MATCH_URL_MIXCLOUD.test(url);
  },
  vidyard: function vidyard(url) {
    return MATCH_URL_VIDYARD.test(url);
  },
  kaltura: function kaltura(url) {
    return MATCH_URL_KALTURA.test(url);
  },
  file: canPlayFile
};
patterns.canPlay = canPlay;
var YouTube = {};
var hasRequiredYouTube;
function requireYouTube() {
  if (hasRequiredYouTube)
    return YouTube;
  hasRequiredYouTube = 1;
  (function(exports) {
    function _typeof2(obj) {
      "@babel/helpers - typeof";
      if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
        _typeof2 = function _typeof3(obj2) {
          return typeof obj2;
        };
      } else {
        _typeof2 = function _typeof3(obj2) {
          return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
        };
      }
      return _typeof2(obj);
    }
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;
    var _react2 = _interopRequireWildcard2(reactExports);
    var _utils2 = utils;
    var _patterns = patterns;
    function _getRequireWildcardCache2() {
      if (typeof WeakMap !== "function")
        return null;
      var cache = /* @__PURE__ */ new WeakMap();
      _getRequireWildcardCache2 = function _getRequireWildcardCache3() {
        return cache;
      };
      return cache;
    }
    function _interopRequireWildcard2(obj) {
      if (obj && obj.__esModule) {
        return obj;
      }
      if (obj === null || _typeof2(obj) !== "object" && typeof obj !== "function") {
        return { "default": obj };
      }
      var cache = _getRequireWildcardCache2();
      if (cache && cache.has(obj)) {
        return cache.get(obj);
      }
      var newObj = {};
      var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
          if (desc && (desc.get || desc.set)) {
            Object.defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
      newObj["default"] = obj;
      if (cache) {
        cache.set(obj, newObj);
      }
      return newObj;
    }
    function ownKeys2(object2, enumerableOnly) {
      var keys = Object.keys(object2);
      if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object2);
        if (enumerableOnly)
          symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object2, sym).enumerable;
          });
        keys.push.apply(keys, symbols);
      }
      return keys;
    }
    function _objectSpread2(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i] != null ? arguments[i] : {};
        if (i % 2) {
          ownKeys2(Object(source), true).forEach(function(key) {
            _defineProperty2(target, key, source[key]);
          });
        } else if (Object.getOwnPropertyDescriptors) {
          Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        } else {
          ownKeys2(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
          });
        }
      }
      return target;
    }
    function _slicedToArray2(arr, i) {
      return _arrayWithHoles2(arr) || _iterableToArrayLimit2(arr, i) || _unsupportedIterableToArray2(arr, i) || _nonIterableRest2();
    }
    function _nonIterableRest2() {
      throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    function _unsupportedIterableToArray2(o, minLen) {
      if (!o)
        return;
      if (typeof o === "string")
        return _arrayLikeToArray2(o, minLen);
      var n = Object.prototype.toString.call(o).slice(8, -1);
      if (n === "Object" && o.constructor)
        n = o.constructor.name;
      if (n === "Map" || n === "Set")
        return Array.from(o);
      if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
        return _arrayLikeToArray2(o, minLen);
    }
    function _arrayLikeToArray2(arr, len) {
      if (len == null || len > arr.length)
        len = arr.length;
      for (var i = 0, arr2 = new Array(len); i < len; i++) {
        arr2[i] = arr[i];
      }
      return arr2;
    }
    function _iterableToArrayLimit2(arr, i) {
      if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr)))
        return;
      var _arr = [];
      var _n = true;
      var _d = false;
      var _e = void 0;
      try {
        for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
          _arr.push(_s.value);
          if (i && _arr.length === i)
            break;
        }
      } catch (err) {
        _d = true;
        _e = err;
      } finally {
        try {
          if (!_n && _i["return"] != null)
            _i["return"]();
        } finally {
          if (_d)
            throw _e;
        }
      }
      return _arr;
    }
    function _arrayWithHoles2(arr) {
      if (Array.isArray(arr))
        return arr;
    }
    function _classCallCheck2(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _defineProperties2(target, props2) {
      for (var i = 0; i < props2.length; i++) {
        var descriptor = props2[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass2(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties2(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties2(Constructor, staticProps);
      return Constructor;
    }
    function _inherits2(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
      }
      subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
      if (superClass)
        _setPrototypeOf2(subClass, superClass);
    }
    function _setPrototypeOf2(o, p) {
      _setPrototypeOf2 = Object.setPrototypeOf || function _setPrototypeOf3(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf2(o, p);
    }
    function _createSuper2(Derived) {
      var hasNativeReflectConstruct = _isNativeReflectConstruct2();
      return function _createSuperInternal() {
        var Super = _getPrototypeOf2(Derived), result;
        if (hasNativeReflectConstruct) {
          var NewTarget = _getPrototypeOf2(this).constructor;
          result = Reflect.construct(Super, arguments, NewTarget);
        } else {
          result = Super.apply(this, arguments);
        }
        return _possibleConstructorReturn2(this, result);
      };
    }
    function _possibleConstructorReturn2(self, call) {
      if (call && (_typeof2(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized2(self);
    }
    function _assertThisInitialized2(self) {
      if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return self;
    }
    function _isNativeReflectConstruct2() {
      if (typeof Reflect === "undefined" || !Reflect.construct)
        return false;
      if (Reflect.construct.sham)
        return false;
      if (typeof Proxy === "function")
        return true;
      try {
        Date.prototype.toString.call(Reflect.construct(Date, [], function() {
        }));
        return true;
      } catch (e) {
        return false;
      }
    }
    function _getPrototypeOf2(o) {
      _getPrototypeOf2 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf3(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
      };
      return _getPrototypeOf2(o);
    }
    function _defineProperty2(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
      } else {
        obj[key] = value;
      }
      return obj;
    }
    var SDK_URL = "https://www.youtube.com/iframe_api";
    var SDK_GLOBAL = "YT";
    var SDK_GLOBAL_READY = "onYouTubeIframeAPIReady";
    var MATCH_PLAYLIST = /[?&](?:list|channel)=([a-zA-Z0-9_-]+)/;
    var MATCH_USER_UPLOADS = /user\/([a-zA-Z0-9_-]+)\/?/;
    var MATCH_NOCOOKIE = /youtube-nocookie\.com/;
    var NOCOOKIE_HOST = "https://www.youtube-nocookie.com";
    var YouTube2 = /* @__PURE__ */ function(_Component) {
      _inherits2(YouTube3, _Component);
      var _super = _createSuper2(YouTube3);
      function YouTube3() {
        var _this;
        _classCallCheck2(this, YouTube3);
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        _this = _super.call.apply(_super, [this].concat(args));
        _defineProperty2(_assertThisInitialized2(_this), "callPlayer", _utils2.callPlayer);
        _defineProperty2(_assertThisInitialized2(_this), "parsePlaylist", function(url) {
          if (url instanceof Array) {
            return {
              listType: "playlist",
              playlist: url.map(_this.getID).join(",")
            };
          }
          if (MATCH_PLAYLIST.test(url)) {
            var _url$match = url.match(MATCH_PLAYLIST), _url$match2 = _slicedToArray2(_url$match, 2), playlistId = _url$match2[1];
            return {
              listType: "playlist",
              list: playlistId.replace(/^UC/, "UU")
            };
          }
          if (MATCH_USER_UPLOADS.test(url)) {
            var _url$match3 = url.match(MATCH_USER_UPLOADS), _url$match4 = _slicedToArray2(_url$match3, 2), username = _url$match4[1];
            return {
              listType: "user_uploads",
              list: username
            };
          }
          return {};
        });
        _defineProperty2(_assertThisInitialized2(_this), "onStateChange", function(event) {
          var data = event.data;
          var _this$props = _this.props, onPlay = _this$props.onPlay, onPause = _this$props.onPause, onBuffer = _this$props.onBuffer, onBufferEnd = _this$props.onBufferEnd, onEnded = _this$props.onEnded, onReady = _this$props.onReady, loop = _this$props.loop, _this$props$config = _this$props.config, playerVars = _this$props$config.playerVars, onUnstarted = _this$props$config.onUnstarted;
          var _window$SDK_GLOBAL$Pl = window[SDK_GLOBAL].PlayerState, UNSTARTED = _window$SDK_GLOBAL$Pl.UNSTARTED, PLAYING = _window$SDK_GLOBAL$Pl.PLAYING, PAUSED = _window$SDK_GLOBAL$Pl.PAUSED, BUFFERING = _window$SDK_GLOBAL$Pl.BUFFERING, ENDED = _window$SDK_GLOBAL$Pl.ENDED, CUED = _window$SDK_GLOBAL$Pl.CUED;
          if (data === UNSTARTED)
            onUnstarted();
          if (data === PLAYING) {
            onPlay();
            onBufferEnd();
          }
          if (data === PAUSED)
            onPause();
          if (data === BUFFERING)
            onBuffer();
          if (data === ENDED) {
            var isPlaylist = !!_this.callPlayer("getPlaylist");
            if (loop && !isPlaylist) {
              if (playerVars.start) {
                _this.seekTo(playerVars.start);
              } else {
                _this.play();
              }
            }
            onEnded();
          }
          if (data === CUED)
            onReady();
        });
        _defineProperty2(_assertThisInitialized2(_this), "mute", function() {
          _this.callPlayer("mute");
        });
        _defineProperty2(_assertThisInitialized2(_this), "unmute", function() {
          _this.callPlayer("unMute");
        });
        _defineProperty2(_assertThisInitialized2(_this), "ref", function(container) {
          _this.container = container;
        });
        return _this;
      }
      _createClass2(YouTube3, [{
        key: "componentDidMount",
        value: function componentDidMount() {
          this.props.onMount && this.props.onMount(this);
        }
      }, {
        key: "getID",
        value: function getID(url) {
          if (!url || url instanceof Array || MATCH_PLAYLIST.test(url)) {
            return null;
          }
          return url.match(_patterns.MATCH_URL_YOUTUBE)[1];
        }
      }, {
        key: "load",
        value: function load2(url, isReady) {
          var _this2 = this;
          var _this$props2 = this.props, playing = _this$props2.playing, muted = _this$props2.muted, playsinline = _this$props2.playsinline, controls = _this$props2.controls, loop = _this$props2.loop, config = _this$props2.config, _onError = _this$props2.onError;
          var playerVars = config.playerVars, embedOptions = config.embedOptions;
          var id = this.getID(url);
          if (isReady) {
            if (MATCH_PLAYLIST.test(url) || MATCH_USER_UPLOADS.test(url) || url instanceof Array) {
              this.player.loadPlaylist(this.parsePlaylist(url));
              return;
            }
            this.player.cueVideoById({
              videoId: id,
              startSeconds: (0, _utils2.parseStartTime)(url) || playerVars.start,
              endSeconds: (0, _utils2.parseEndTime)(url) || playerVars.end
            });
            return;
          }
          (0, _utils2.getSDK)(SDK_URL, SDK_GLOBAL, SDK_GLOBAL_READY, function(YT) {
            return YT.loaded;
          }).then(function(YT) {
            if (!_this2.container)
              return;
            _this2.player = new YT.Player(_this2.container, _objectSpread2({
              width: "100%",
              height: "100%",
              videoId: id,
              playerVars: _objectSpread2(_objectSpread2({
                autoplay: playing ? 1 : 0,
                mute: muted ? 1 : 0,
                controls: controls ? 1 : 0,
                start: (0, _utils2.parseStartTime)(url),
                end: (0, _utils2.parseEndTime)(url),
                origin: window.location.origin,
                playsinline: playsinline ? 1 : 0
              }, _this2.parsePlaylist(url)), playerVars),
              events: {
                onReady: function onReady() {
                  if (loop) {
                    _this2.player.setLoop(true);
                  }
                  _this2.props.onReady();
                },
                onPlaybackRateChange: function onPlaybackRateChange(event) {
                  return _this2.props.onPlaybackRateChange(event.data);
                },
                onStateChange: _this2.onStateChange,
                onError: function onError(event) {
                  return _onError(event.data);
                }
              },
              host: MATCH_NOCOOKIE.test(url) ? NOCOOKIE_HOST : void 0
            }, embedOptions));
          }, _onError);
          if (embedOptions.events) {
            console.warn("Using `embedOptions.events` will likely break things. Use ReactPlayer’s callback props instead, eg onReady, onPlay, onPause");
          }
        }
      }, {
        key: "play",
        value: function play() {
          this.callPlayer("playVideo");
        }
      }, {
        key: "pause",
        value: function pause() {
          this.callPlayer("pauseVideo");
        }
      }, {
        key: "stop",
        value: function stop() {
          if (!document.body.contains(this.callPlayer("getIframe")))
            return;
          this.callPlayer("stopVideo");
        }
      }, {
        key: "seekTo",
        value: function seekTo(amount) {
          this.callPlayer("seekTo", amount);
          if (!this.props.playing) {
            this.pause();
          }
        }
      }, {
        key: "setVolume",
        value: function setVolume(fraction) {
          this.callPlayer("setVolume", fraction * 100);
        }
      }, {
        key: "setPlaybackRate",
        value: function setPlaybackRate(rate) {
          this.callPlayer("setPlaybackRate", rate);
        }
      }, {
        key: "setLoop",
        value: function setLoop(loop) {
          this.callPlayer("setLoop", loop);
        }
      }, {
        key: "getDuration",
        value: function getDuration() {
          return this.callPlayer("getDuration");
        }
      }, {
        key: "getCurrentTime",
        value: function getCurrentTime() {
          return this.callPlayer("getCurrentTime");
        }
      }, {
        key: "getSecondsLoaded",
        value: function getSecondsLoaded() {
          return this.callPlayer("getVideoLoadedFraction") * this.getDuration();
        }
      }, {
        key: "render",
        value: function render() {
          var display = this.props.display;
          var style = {
            width: "100%",
            height: "100%",
            display
          };
          return /* @__PURE__ */ _react2["default"].createElement("div", {
            style
          }, /* @__PURE__ */ _react2["default"].createElement("div", {
            ref: this.ref
          }));
        }
      }]);
      return YouTube3;
    }(_react2.Component);
    exports["default"] = YouTube2;
    _defineProperty2(YouTube2, "displayName", "YouTube");
    _defineProperty2(YouTube2, "canPlay", _patterns.canPlay.youtube);
  })(YouTube);
  return YouTube;
}
var SoundCloud = {};
var hasRequiredSoundCloud;
function requireSoundCloud() {
  if (hasRequiredSoundCloud)
    return SoundCloud;
  hasRequiredSoundCloud = 1;
  (function(exports) {
    function _typeof2(obj) {
      "@babel/helpers - typeof";
      if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
        _typeof2 = function _typeof3(obj2) {
          return typeof obj2;
        };
      } else {
        _typeof2 = function _typeof3(obj2) {
          return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
        };
      }
      return _typeof2(obj);
    }
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;
    var _react2 = _interopRequireWildcard2(reactExports);
    var _utils2 = utils;
    var _patterns = patterns;
    function _getRequireWildcardCache2() {
      if (typeof WeakMap !== "function")
        return null;
      var cache = /* @__PURE__ */ new WeakMap();
      _getRequireWildcardCache2 = function _getRequireWildcardCache3() {
        return cache;
      };
      return cache;
    }
    function _interopRequireWildcard2(obj) {
      if (obj && obj.__esModule) {
        return obj;
      }
      if (obj === null || _typeof2(obj) !== "object" && typeof obj !== "function") {
        return { "default": obj };
      }
      var cache = _getRequireWildcardCache2();
      if (cache && cache.has(obj)) {
        return cache.get(obj);
      }
      var newObj = {};
      var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
          if (desc && (desc.get || desc.set)) {
            Object.defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
      newObj["default"] = obj;
      if (cache) {
        cache.set(obj, newObj);
      }
      return newObj;
    }
    function ownKeys2(object2, enumerableOnly) {
      var keys = Object.keys(object2);
      if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object2);
        if (enumerableOnly)
          symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object2, sym).enumerable;
          });
        keys.push.apply(keys, symbols);
      }
      return keys;
    }
    function _objectSpread2(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i] != null ? arguments[i] : {};
        if (i % 2) {
          ownKeys2(Object(source), true).forEach(function(key) {
            _defineProperty2(target, key, source[key]);
          });
        } else if (Object.getOwnPropertyDescriptors) {
          Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        } else {
          ownKeys2(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
          });
        }
      }
      return target;
    }
    function _classCallCheck2(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _defineProperties2(target, props2) {
      for (var i = 0; i < props2.length; i++) {
        var descriptor = props2[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass2(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties2(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties2(Constructor, staticProps);
      return Constructor;
    }
    function _inherits2(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
      }
      subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
      if (superClass)
        _setPrototypeOf2(subClass, superClass);
    }
    function _setPrototypeOf2(o, p) {
      _setPrototypeOf2 = Object.setPrototypeOf || function _setPrototypeOf3(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf2(o, p);
    }
    function _createSuper2(Derived) {
      var hasNativeReflectConstruct = _isNativeReflectConstruct2();
      return function _createSuperInternal() {
        var Super = _getPrototypeOf2(Derived), result;
        if (hasNativeReflectConstruct) {
          var NewTarget = _getPrototypeOf2(this).constructor;
          result = Reflect.construct(Super, arguments, NewTarget);
        } else {
          result = Super.apply(this, arguments);
        }
        return _possibleConstructorReturn2(this, result);
      };
    }
    function _possibleConstructorReturn2(self, call) {
      if (call && (_typeof2(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized2(self);
    }
    function _assertThisInitialized2(self) {
      if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return self;
    }
    function _isNativeReflectConstruct2() {
      if (typeof Reflect === "undefined" || !Reflect.construct)
        return false;
      if (Reflect.construct.sham)
        return false;
      if (typeof Proxy === "function")
        return true;
      try {
        Date.prototype.toString.call(Reflect.construct(Date, [], function() {
        }));
        return true;
      } catch (e) {
        return false;
      }
    }
    function _getPrototypeOf2(o) {
      _getPrototypeOf2 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf3(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
      };
      return _getPrototypeOf2(o);
    }
    function _defineProperty2(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
      } else {
        obj[key] = value;
      }
      return obj;
    }
    var SDK_URL = "https://w.soundcloud.com/player/api.js";
    var SDK_GLOBAL = "SC";
    var SoundCloud2 = /* @__PURE__ */ function(_Component) {
      _inherits2(SoundCloud3, _Component);
      var _super = _createSuper2(SoundCloud3);
      function SoundCloud3() {
        var _this;
        _classCallCheck2(this, SoundCloud3);
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        _this = _super.call.apply(_super, [this].concat(args));
        _defineProperty2(_assertThisInitialized2(_this), "callPlayer", _utils2.callPlayer);
        _defineProperty2(_assertThisInitialized2(_this), "duration", null);
        _defineProperty2(_assertThisInitialized2(_this), "currentTime", null);
        _defineProperty2(_assertThisInitialized2(_this), "fractionLoaded", null);
        _defineProperty2(_assertThisInitialized2(_this), "mute", function() {
          _this.setVolume(0);
        });
        _defineProperty2(_assertThisInitialized2(_this), "unmute", function() {
          if (_this.props.volume !== null) {
            _this.setVolume(_this.props.volume);
          }
        });
        _defineProperty2(_assertThisInitialized2(_this), "ref", function(iframe) {
          _this.iframe = iframe;
        });
        return _this;
      }
      _createClass2(SoundCloud3, [{
        key: "componentDidMount",
        value: function componentDidMount() {
          this.props.onMount && this.props.onMount(this);
        }
      }, {
        key: "load",
        value: function load2(url, isReady) {
          var _this2 = this;
          (0, _utils2.getSDK)(SDK_URL, SDK_GLOBAL).then(function(SC) {
            if (!_this2.iframe)
              return;
            var _SC$Widget$Events = SC.Widget.Events, PLAY = _SC$Widget$Events.PLAY, PLAY_PROGRESS = _SC$Widget$Events.PLAY_PROGRESS, PAUSE = _SC$Widget$Events.PAUSE, FINISH = _SC$Widget$Events.FINISH, ERROR = _SC$Widget$Events.ERROR;
            if (!isReady) {
              _this2.player = SC.Widget(_this2.iframe);
              _this2.player.bind(PLAY, _this2.props.onPlay);
              _this2.player.bind(PAUSE, function() {
                var remaining = _this2.duration - _this2.currentTime;
                if (remaining < 0.05) {
                  return;
                }
                _this2.props.onPause();
              });
              _this2.player.bind(PLAY_PROGRESS, function(e) {
                _this2.currentTime = e.currentPosition / 1e3;
                _this2.fractionLoaded = e.loadedProgress;
              });
              _this2.player.bind(FINISH, function() {
                return _this2.props.onEnded();
              });
              _this2.player.bind(ERROR, function(e) {
                return _this2.props.onError(e);
              });
            }
            _this2.player.load(url, _objectSpread2(_objectSpread2({}, _this2.props.config.options), {}, {
              callback: function callback() {
                _this2.player.getDuration(function(duration) {
                  _this2.duration = duration / 1e3;
                  _this2.props.onReady();
                });
              }
            }));
          });
        }
      }, {
        key: "play",
        value: function play() {
          this.callPlayer("play");
        }
      }, {
        key: "pause",
        value: function pause() {
          this.callPlayer("pause");
        }
      }, {
        key: "stop",
        value: function stop() {
        }
      }, {
        key: "seekTo",
        value: function seekTo(seconds) {
          this.callPlayer("seekTo", seconds * 1e3);
        }
      }, {
        key: "setVolume",
        value: function setVolume(fraction) {
          this.callPlayer("setVolume", fraction * 100);
        }
      }, {
        key: "getDuration",
        value: function getDuration() {
          return this.duration;
        }
      }, {
        key: "getCurrentTime",
        value: function getCurrentTime() {
          return this.currentTime;
        }
      }, {
        key: "getSecondsLoaded",
        value: function getSecondsLoaded() {
          return this.fractionLoaded * this.duration;
        }
      }, {
        key: "render",
        value: function render() {
          var display = this.props.display;
          var style = {
            width: "100%",
            height: "100%",
            display
          };
          return /* @__PURE__ */ _react2["default"].createElement("iframe", {
            ref: this.ref,
            src: "https://w.soundcloud.com/player/?url=".concat(encodeURIComponent(this.props.url)),
            style,
            frameBorder: 0,
            allow: "autoplay"
          });
        }
      }]);
      return SoundCloud3;
    }(_react2.Component);
    exports["default"] = SoundCloud2;
    _defineProperty2(SoundCloud2, "displayName", "SoundCloud");
    _defineProperty2(SoundCloud2, "canPlay", _patterns.canPlay.soundcloud);
    _defineProperty2(SoundCloud2, "loopOnEnded", true);
  })(SoundCloud);
  return SoundCloud;
}
var Vimeo = {};
var hasRequiredVimeo;
function requireVimeo() {
  if (hasRequiredVimeo)
    return Vimeo;
  hasRequiredVimeo = 1;
  (function(exports) {
    function _typeof2(obj) {
      "@babel/helpers - typeof";
      if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
        _typeof2 = function _typeof3(obj2) {
          return typeof obj2;
        };
      } else {
        _typeof2 = function _typeof3(obj2) {
          return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
        };
      }
      return _typeof2(obj);
    }
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;
    var _react2 = _interopRequireWildcard2(reactExports);
    var _utils2 = utils;
    var _patterns = patterns;
    function _getRequireWildcardCache2() {
      if (typeof WeakMap !== "function")
        return null;
      var cache = /* @__PURE__ */ new WeakMap();
      _getRequireWildcardCache2 = function _getRequireWildcardCache3() {
        return cache;
      };
      return cache;
    }
    function _interopRequireWildcard2(obj) {
      if (obj && obj.__esModule) {
        return obj;
      }
      if (obj === null || _typeof2(obj) !== "object" && typeof obj !== "function") {
        return { "default": obj };
      }
      var cache = _getRequireWildcardCache2();
      if (cache && cache.has(obj)) {
        return cache.get(obj);
      }
      var newObj = {};
      var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
          if (desc && (desc.get || desc.set)) {
            Object.defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
      newObj["default"] = obj;
      if (cache) {
        cache.set(obj, newObj);
      }
      return newObj;
    }
    function ownKeys2(object2, enumerableOnly) {
      var keys = Object.keys(object2);
      if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object2);
        if (enumerableOnly)
          symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object2, sym).enumerable;
          });
        keys.push.apply(keys, symbols);
      }
      return keys;
    }
    function _objectSpread2(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i] != null ? arguments[i] : {};
        if (i % 2) {
          ownKeys2(Object(source), true).forEach(function(key) {
            _defineProperty2(target, key, source[key]);
          });
        } else if (Object.getOwnPropertyDescriptors) {
          Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        } else {
          ownKeys2(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
          });
        }
      }
      return target;
    }
    function _classCallCheck2(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _defineProperties2(target, props2) {
      for (var i = 0; i < props2.length; i++) {
        var descriptor = props2[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass2(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties2(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties2(Constructor, staticProps);
      return Constructor;
    }
    function _inherits2(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
      }
      subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
      if (superClass)
        _setPrototypeOf2(subClass, superClass);
    }
    function _setPrototypeOf2(o, p) {
      _setPrototypeOf2 = Object.setPrototypeOf || function _setPrototypeOf3(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf2(o, p);
    }
    function _createSuper2(Derived) {
      var hasNativeReflectConstruct = _isNativeReflectConstruct2();
      return function _createSuperInternal() {
        var Super = _getPrototypeOf2(Derived), result;
        if (hasNativeReflectConstruct) {
          var NewTarget = _getPrototypeOf2(this).constructor;
          result = Reflect.construct(Super, arguments, NewTarget);
        } else {
          result = Super.apply(this, arguments);
        }
        return _possibleConstructorReturn2(this, result);
      };
    }
    function _possibleConstructorReturn2(self, call) {
      if (call && (_typeof2(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized2(self);
    }
    function _assertThisInitialized2(self) {
      if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return self;
    }
    function _isNativeReflectConstruct2() {
      if (typeof Reflect === "undefined" || !Reflect.construct)
        return false;
      if (Reflect.construct.sham)
        return false;
      if (typeof Proxy === "function")
        return true;
      try {
        Date.prototype.toString.call(Reflect.construct(Date, [], function() {
        }));
        return true;
      } catch (e) {
        return false;
      }
    }
    function _getPrototypeOf2(o) {
      _getPrototypeOf2 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf3(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
      };
      return _getPrototypeOf2(o);
    }
    function _defineProperty2(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
      } else {
        obj[key] = value;
      }
      return obj;
    }
    var SDK_URL = "https://player.vimeo.com/api/player.js";
    var SDK_GLOBAL = "Vimeo";
    var Vimeo2 = /* @__PURE__ */ function(_Component) {
      _inherits2(Vimeo3, _Component);
      var _super = _createSuper2(Vimeo3);
      function Vimeo3() {
        var _this;
        _classCallCheck2(this, Vimeo3);
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        _this = _super.call.apply(_super, [this].concat(args));
        _defineProperty2(_assertThisInitialized2(_this), "callPlayer", _utils2.callPlayer);
        _defineProperty2(_assertThisInitialized2(_this), "duration", null);
        _defineProperty2(_assertThisInitialized2(_this), "currentTime", null);
        _defineProperty2(_assertThisInitialized2(_this), "secondsLoaded", null);
        _defineProperty2(_assertThisInitialized2(_this), "mute", function() {
          _this.setMuted(true);
        });
        _defineProperty2(_assertThisInitialized2(_this), "unmute", function() {
          _this.setMuted(false);
        });
        _defineProperty2(_assertThisInitialized2(_this), "ref", function(container) {
          _this.container = container;
        });
        return _this;
      }
      _createClass2(Vimeo3, [{
        key: "componentDidMount",
        value: function componentDidMount() {
          this.props.onMount && this.props.onMount(this);
        }
      }, {
        key: "load",
        value: function load2(url) {
          var _this2 = this;
          this.duration = null;
          (0, _utils2.getSDK)(SDK_URL, SDK_GLOBAL).then(function(Vimeo4) {
            if (!_this2.container)
              return;
            var _this2$props$config = _this2.props.config, playerOptions = _this2$props$config.playerOptions, title = _this2$props$config.title;
            _this2.player = new Vimeo4.Player(_this2.container, _objectSpread2({
              url,
              autoplay: _this2.props.playing,
              muted: _this2.props.muted,
              loop: _this2.props.loop,
              playsinline: _this2.props.playsinline,
              controls: _this2.props.controls
            }, playerOptions));
            _this2.player.ready().then(function() {
              var iframe = _this2.container.querySelector("iframe");
              iframe.style.width = "100%";
              iframe.style.height = "100%";
              if (title) {
                iframe.title = title;
              }
            })["catch"](_this2.props.onError);
            _this2.player.on("loaded", function() {
              _this2.props.onReady();
              _this2.refreshDuration();
            });
            _this2.player.on("play", function() {
              _this2.props.onPlay();
              _this2.refreshDuration();
            });
            _this2.player.on("pause", _this2.props.onPause);
            _this2.player.on("seeked", function(e) {
              return _this2.props.onSeek(e.seconds);
            });
            _this2.player.on("ended", _this2.props.onEnded);
            _this2.player.on("error", _this2.props.onError);
            _this2.player.on("timeupdate", function(_ref) {
              var seconds = _ref.seconds;
              _this2.currentTime = seconds;
            });
            _this2.player.on("progress", function(_ref2) {
              var seconds = _ref2.seconds;
              _this2.secondsLoaded = seconds;
            });
            _this2.player.on("bufferstart", _this2.props.onBuffer);
            _this2.player.on("bufferend", _this2.props.onBufferEnd);
            _this2.player.on("playbackratechange", function(e) {
              return _this2.props.onPlaybackRateChange(e.playbackRate);
            });
          }, this.props.onError);
        }
      }, {
        key: "refreshDuration",
        value: function refreshDuration() {
          var _this3 = this;
          this.player.getDuration().then(function(duration) {
            _this3.duration = duration;
          });
        }
      }, {
        key: "play",
        value: function play() {
          var promise = this.callPlayer("play");
          if (promise) {
            promise["catch"](this.props.onError);
          }
        }
      }, {
        key: "pause",
        value: function pause() {
          this.callPlayer("pause");
        }
      }, {
        key: "stop",
        value: function stop() {
          this.callPlayer("unload");
        }
      }, {
        key: "seekTo",
        value: function seekTo(seconds) {
          this.callPlayer("setCurrentTime", seconds);
        }
      }, {
        key: "setVolume",
        value: function setVolume(fraction) {
          this.callPlayer("setVolume", fraction);
        }
      }, {
        key: "setMuted",
        value: function setMuted(muted) {
          this.callPlayer("setMuted", muted);
        }
      }, {
        key: "setLoop",
        value: function setLoop(loop) {
          this.callPlayer("setLoop", loop);
        }
      }, {
        key: "setPlaybackRate",
        value: function setPlaybackRate(rate) {
          this.callPlayer("setPlaybackRate", rate);
        }
      }, {
        key: "getDuration",
        value: function getDuration() {
          return this.duration;
        }
      }, {
        key: "getCurrentTime",
        value: function getCurrentTime() {
          return this.currentTime;
        }
      }, {
        key: "getSecondsLoaded",
        value: function getSecondsLoaded() {
          return this.secondsLoaded;
        }
      }, {
        key: "render",
        value: function render() {
          var display = this.props.display;
          var style = {
            width: "100%",
            height: "100%",
            overflow: "hidden",
            display
          };
          return /* @__PURE__ */ _react2["default"].createElement("div", {
            key: this.props.url,
            ref: this.ref,
            style
          });
        }
      }]);
      return Vimeo3;
    }(_react2.Component);
    exports["default"] = Vimeo2;
    _defineProperty2(Vimeo2, "displayName", "Vimeo");
    _defineProperty2(Vimeo2, "canPlay", _patterns.canPlay.vimeo);
    _defineProperty2(Vimeo2, "forceLoad", true);
  })(Vimeo);
  return Vimeo;
}
var Facebook = {};
var hasRequiredFacebook;
function requireFacebook() {
  if (hasRequiredFacebook)
    return Facebook;
  hasRequiredFacebook = 1;
  (function(exports) {
    function _typeof2(obj) {
      "@babel/helpers - typeof";
      if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
        _typeof2 = function _typeof3(obj2) {
          return typeof obj2;
        };
      } else {
        _typeof2 = function _typeof3(obj2) {
          return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
        };
      }
      return _typeof2(obj);
    }
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;
    var _react2 = _interopRequireWildcard2(reactExports);
    var _utils2 = utils;
    var _patterns = patterns;
    function _getRequireWildcardCache2() {
      if (typeof WeakMap !== "function")
        return null;
      var cache = /* @__PURE__ */ new WeakMap();
      _getRequireWildcardCache2 = function _getRequireWildcardCache3() {
        return cache;
      };
      return cache;
    }
    function _interopRequireWildcard2(obj) {
      if (obj && obj.__esModule) {
        return obj;
      }
      if (obj === null || _typeof2(obj) !== "object" && typeof obj !== "function") {
        return { "default": obj };
      }
      var cache = _getRequireWildcardCache2();
      if (cache && cache.has(obj)) {
        return cache.get(obj);
      }
      var newObj = {};
      var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
          if (desc && (desc.get || desc.set)) {
            Object.defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
      newObj["default"] = obj;
      if (cache) {
        cache.set(obj, newObj);
      }
      return newObj;
    }
    function _extends2() {
      _extends2 = Object.assign || function(target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];
          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }
        return target;
      };
      return _extends2.apply(this, arguments);
    }
    function _classCallCheck2(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _defineProperties2(target, props2) {
      for (var i = 0; i < props2.length; i++) {
        var descriptor = props2[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass2(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties2(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties2(Constructor, staticProps);
      return Constructor;
    }
    function _inherits2(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
      }
      subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
      if (superClass)
        _setPrototypeOf2(subClass, superClass);
    }
    function _setPrototypeOf2(o, p) {
      _setPrototypeOf2 = Object.setPrototypeOf || function _setPrototypeOf3(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf2(o, p);
    }
    function _createSuper2(Derived) {
      var hasNativeReflectConstruct = _isNativeReflectConstruct2();
      return function _createSuperInternal() {
        var Super = _getPrototypeOf2(Derived), result;
        if (hasNativeReflectConstruct) {
          var NewTarget = _getPrototypeOf2(this).constructor;
          result = Reflect.construct(Super, arguments, NewTarget);
        } else {
          result = Super.apply(this, arguments);
        }
        return _possibleConstructorReturn2(this, result);
      };
    }
    function _possibleConstructorReturn2(self, call) {
      if (call && (_typeof2(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized2(self);
    }
    function _assertThisInitialized2(self) {
      if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return self;
    }
    function _isNativeReflectConstruct2() {
      if (typeof Reflect === "undefined" || !Reflect.construct)
        return false;
      if (Reflect.construct.sham)
        return false;
      if (typeof Proxy === "function")
        return true;
      try {
        Date.prototype.toString.call(Reflect.construct(Date, [], function() {
        }));
        return true;
      } catch (e) {
        return false;
      }
    }
    function _getPrototypeOf2(o) {
      _getPrototypeOf2 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf3(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
      };
      return _getPrototypeOf2(o);
    }
    function _defineProperty2(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
      } else {
        obj[key] = value;
      }
      return obj;
    }
    var SDK_URL = "https://connect.facebook.net/en_US/sdk.js";
    var SDK_GLOBAL = "FB";
    var SDK_GLOBAL_READY = "fbAsyncInit";
    var PLAYER_ID_PREFIX = "facebook-player-";
    var Facebook2 = /* @__PURE__ */ function(_Component) {
      _inherits2(Facebook3, _Component);
      var _super = _createSuper2(Facebook3);
      function Facebook3() {
        var _this;
        _classCallCheck2(this, Facebook3);
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        _this = _super.call.apply(_super, [this].concat(args));
        _defineProperty2(_assertThisInitialized2(_this), "callPlayer", _utils2.callPlayer);
        _defineProperty2(_assertThisInitialized2(_this), "playerID", _this.props.config.playerId || "".concat(PLAYER_ID_PREFIX).concat((0, _utils2.randomString)()));
        _defineProperty2(_assertThisInitialized2(_this), "mute", function() {
          _this.callPlayer("mute");
        });
        _defineProperty2(_assertThisInitialized2(_this), "unmute", function() {
          _this.callPlayer("unmute");
        });
        return _this;
      }
      _createClass2(Facebook3, [{
        key: "componentDidMount",
        value: function componentDidMount() {
          this.props.onMount && this.props.onMount(this);
        }
      }, {
        key: "load",
        value: function load2(url, isReady) {
          var _this2 = this;
          if (isReady) {
            (0, _utils2.getSDK)(SDK_URL, SDK_GLOBAL, SDK_GLOBAL_READY).then(function(FB) {
              return FB.XFBML.parse();
            });
            return;
          }
          (0, _utils2.getSDK)(SDK_URL, SDK_GLOBAL, SDK_GLOBAL_READY).then(function(FB) {
            FB.init({
              appId: _this2.props.config.appId,
              xfbml: true,
              version: _this2.props.config.version
            });
            FB.Event.subscribe("xfbml.render", function(msg) {
              _this2.props.onLoaded();
            });
            FB.Event.subscribe("xfbml.ready", function(msg) {
              if (msg.type === "video" && msg.id === _this2.playerID) {
                _this2.player = msg.instance;
                _this2.player.subscribe("startedPlaying", _this2.props.onPlay);
                _this2.player.subscribe("paused", _this2.props.onPause);
                _this2.player.subscribe("finishedPlaying", _this2.props.onEnded);
                _this2.player.subscribe("startedBuffering", _this2.props.onBuffer);
                _this2.player.subscribe("finishedBuffering", _this2.props.onBufferEnd);
                _this2.player.subscribe("error", _this2.props.onError);
                if (_this2.props.muted) {
                  _this2.callPlayer("mute");
                } else {
                  _this2.callPlayer("unmute");
                }
                _this2.props.onReady();
                document.getElementById(_this2.playerID).querySelector("iframe").style.visibility = "visible";
              }
            });
          });
        }
      }, {
        key: "play",
        value: function play() {
          this.callPlayer("play");
        }
      }, {
        key: "pause",
        value: function pause() {
          this.callPlayer("pause");
        }
      }, {
        key: "stop",
        value: function stop() {
        }
      }, {
        key: "seekTo",
        value: function seekTo(seconds) {
          this.callPlayer("seek", seconds);
        }
      }, {
        key: "setVolume",
        value: function setVolume(fraction) {
          this.callPlayer("setVolume", fraction);
        }
      }, {
        key: "getDuration",
        value: function getDuration() {
          return this.callPlayer("getDuration");
        }
      }, {
        key: "getCurrentTime",
        value: function getCurrentTime() {
          return this.callPlayer("getCurrentPosition");
        }
      }, {
        key: "getSecondsLoaded",
        value: function getSecondsLoaded() {
          return null;
        }
      }, {
        key: "render",
        value: function render() {
          var attributes = this.props.config.attributes;
          var style = {
            width: "100%",
            height: "100%"
          };
          return /* @__PURE__ */ _react2["default"].createElement("div", _extends2({
            style,
            id: this.playerID,
            className: "fb-video",
            "data-href": this.props.url,
            "data-autoplay": this.props.playing ? "true" : "false",
            "data-allowfullscreen": "true",
            "data-controls": this.props.controls ? "true" : "false"
          }, attributes));
        }
      }]);
      return Facebook3;
    }(_react2.Component);
    exports["default"] = Facebook2;
    _defineProperty2(Facebook2, "displayName", "Facebook");
    _defineProperty2(Facebook2, "canPlay", _patterns.canPlay.facebook);
    _defineProperty2(Facebook2, "loopOnEnded", true);
  })(Facebook);
  return Facebook;
}
var Streamable = {};
var hasRequiredStreamable;
function requireStreamable() {
  if (hasRequiredStreamable)
    return Streamable;
  hasRequiredStreamable = 1;
  (function(exports) {
    function _typeof2(obj) {
      "@babel/helpers - typeof";
      if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
        _typeof2 = function _typeof3(obj2) {
          return typeof obj2;
        };
      } else {
        _typeof2 = function _typeof3(obj2) {
          return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
        };
      }
      return _typeof2(obj);
    }
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;
    var _react2 = _interopRequireWildcard2(reactExports);
    var _utils2 = utils;
    var _patterns = patterns;
    function _getRequireWildcardCache2() {
      if (typeof WeakMap !== "function")
        return null;
      var cache = /* @__PURE__ */ new WeakMap();
      _getRequireWildcardCache2 = function _getRequireWildcardCache3() {
        return cache;
      };
      return cache;
    }
    function _interopRequireWildcard2(obj) {
      if (obj && obj.__esModule) {
        return obj;
      }
      if (obj === null || _typeof2(obj) !== "object" && typeof obj !== "function") {
        return { "default": obj };
      }
      var cache = _getRequireWildcardCache2();
      if (cache && cache.has(obj)) {
        return cache.get(obj);
      }
      var newObj = {};
      var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
          if (desc && (desc.get || desc.set)) {
            Object.defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
      newObj["default"] = obj;
      if (cache) {
        cache.set(obj, newObj);
      }
      return newObj;
    }
    function _classCallCheck2(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _defineProperties2(target, props2) {
      for (var i = 0; i < props2.length; i++) {
        var descriptor = props2[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass2(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties2(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties2(Constructor, staticProps);
      return Constructor;
    }
    function _inherits2(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
      }
      subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
      if (superClass)
        _setPrototypeOf2(subClass, superClass);
    }
    function _setPrototypeOf2(o, p) {
      _setPrototypeOf2 = Object.setPrototypeOf || function _setPrototypeOf3(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf2(o, p);
    }
    function _createSuper2(Derived) {
      var hasNativeReflectConstruct = _isNativeReflectConstruct2();
      return function _createSuperInternal() {
        var Super = _getPrototypeOf2(Derived), result;
        if (hasNativeReflectConstruct) {
          var NewTarget = _getPrototypeOf2(this).constructor;
          result = Reflect.construct(Super, arguments, NewTarget);
        } else {
          result = Super.apply(this, arguments);
        }
        return _possibleConstructorReturn2(this, result);
      };
    }
    function _possibleConstructorReturn2(self, call) {
      if (call && (_typeof2(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized2(self);
    }
    function _assertThisInitialized2(self) {
      if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return self;
    }
    function _isNativeReflectConstruct2() {
      if (typeof Reflect === "undefined" || !Reflect.construct)
        return false;
      if (Reflect.construct.sham)
        return false;
      if (typeof Proxy === "function")
        return true;
      try {
        Date.prototype.toString.call(Reflect.construct(Date, [], function() {
        }));
        return true;
      } catch (e) {
        return false;
      }
    }
    function _getPrototypeOf2(o) {
      _getPrototypeOf2 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf3(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
      };
      return _getPrototypeOf2(o);
    }
    function _defineProperty2(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
      } else {
        obj[key] = value;
      }
      return obj;
    }
    var SDK_URL = "https://cdn.embed.ly/player-0.1.0.min.js";
    var SDK_GLOBAL = "playerjs";
    var Streamable2 = /* @__PURE__ */ function(_Component) {
      _inherits2(Streamable3, _Component);
      var _super = _createSuper2(Streamable3);
      function Streamable3() {
        var _this;
        _classCallCheck2(this, Streamable3);
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        _this = _super.call.apply(_super, [this].concat(args));
        _defineProperty2(_assertThisInitialized2(_this), "callPlayer", _utils2.callPlayer);
        _defineProperty2(_assertThisInitialized2(_this), "duration", null);
        _defineProperty2(_assertThisInitialized2(_this), "currentTime", null);
        _defineProperty2(_assertThisInitialized2(_this), "secondsLoaded", null);
        _defineProperty2(_assertThisInitialized2(_this), "mute", function() {
          _this.callPlayer("mute");
        });
        _defineProperty2(_assertThisInitialized2(_this), "unmute", function() {
          _this.callPlayer("unmute");
        });
        _defineProperty2(_assertThisInitialized2(_this), "ref", function(iframe) {
          _this.iframe = iframe;
        });
        return _this;
      }
      _createClass2(Streamable3, [{
        key: "componentDidMount",
        value: function componentDidMount() {
          this.props.onMount && this.props.onMount(this);
        }
      }, {
        key: "load",
        value: function load2(url) {
          var _this2 = this;
          (0, _utils2.getSDK)(SDK_URL, SDK_GLOBAL).then(function(playerjs) {
            if (!_this2.iframe)
              return;
            _this2.player = new playerjs.Player(_this2.iframe);
            _this2.player.setLoop(_this2.props.loop);
            _this2.player.on("ready", _this2.props.onReady);
            _this2.player.on("play", _this2.props.onPlay);
            _this2.player.on("pause", _this2.props.onPause);
            _this2.player.on("seeked", _this2.props.onSeek);
            _this2.player.on("ended", _this2.props.onEnded);
            _this2.player.on("error", _this2.props.onError);
            _this2.player.on("timeupdate", function(_ref) {
              var duration = _ref.duration, seconds = _ref.seconds;
              _this2.duration = duration;
              _this2.currentTime = seconds;
            });
            _this2.player.on("buffered", function(_ref2) {
              var percent = _ref2.percent;
              if (_this2.duration) {
                _this2.secondsLoaded = _this2.duration * percent;
              }
            });
            if (_this2.props.muted) {
              _this2.player.mute();
            }
          }, this.props.onError);
        }
      }, {
        key: "play",
        value: function play() {
          this.callPlayer("play");
        }
      }, {
        key: "pause",
        value: function pause() {
          this.callPlayer("pause");
        }
      }, {
        key: "stop",
        value: function stop() {
        }
      }, {
        key: "seekTo",
        value: function seekTo(seconds) {
          this.callPlayer("setCurrentTime", seconds);
        }
      }, {
        key: "setVolume",
        value: function setVolume(fraction) {
          this.callPlayer("setVolume", fraction * 100);
        }
      }, {
        key: "setLoop",
        value: function setLoop(loop) {
          this.callPlayer("setLoop", loop);
        }
      }, {
        key: "getDuration",
        value: function getDuration() {
          return this.duration;
        }
      }, {
        key: "getCurrentTime",
        value: function getCurrentTime() {
          return this.currentTime;
        }
      }, {
        key: "getSecondsLoaded",
        value: function getSecondsLoaded() {
          return this.secondsLoaded;
        }
      }, {
        key: "render",
        value: function render() {
          var id = this.props.url.match(_patterns.MATCH_URL_STREAMABLE)[1];
          var style = {
            width: "100%",
            height: "100%"
          };
          return /* @__PURE__ */ _react2["default"].createElement("iframe", {
            ref: this.ref,
            src: "https://streamable.com/o/".concat(id),
            frameBorder: "0",
            scrolling: "no",
            style,
            allow: "encrypted-media; autoplay; fullscreen;"
          });
        }
      }]);
      return Streamable3;
    }(_react2.Component);
    exports["default"] = Streamable2;
    _defineProperty2(Streamable2, "displayName", "Streamable");
    _defineProperty2(Streamable2, "canPlay", _patterns.canPlay.streamable);
  })(Streamable);
  return Streamable;
}
var Wistia = {};
var hasRequiredWistia;
function requireWistia() {
  if (hasRequiredWistia)
    return Wistia;
  hasRequiredWistia = 1;
  (function(exports) {
    function _typeof2(obj) {
      "@babel/helpers - typeof";
      if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
        _typeof2 = function _typeof3(obj2) {
          return typeof obj2;
        };
      } else {
        _typeof2 = function _typeof3(obj2) {
          return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
        };
      }
      return _typeof2(obj);
    }
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;
    var _react2 = _interopRequireWildcard2(reactExports);
    var _utils2 = utils;
    var _patterns = patterns;
    function _getRequireWildcardCache2() {
      if (typeof WeakMap !== "function")
        return null;
      var cache = /* @__PURE__ */ new WeakMap();
      _getRequireWildcardCache2 = function _getRequireWildcardCache3() {
        return cache;
      };
      return cache;
    }
    function _interopRequireWildcard2(obj) {
      if (obj && obj.__esModule) {
        return obj;
      }
      if (obj === null || _typeof2(obj) !== "object" && typeof obj !== "function") {
        return { "default": obj };
      }
      var cache = _getRequireWildcardCache2();
      if (cache && cache.has(obj)) {
        return cache.get(obj);
      }
      var newObj = {};
      var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
          if (desc && (desc.get || desc.set)) {
            Object.defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
      newObj["default"] = obj;
      if (cache) {
        cache.set(obj, newObj);
      }
      return newObj;
    }
    function ownKeys2(object2, enumerableOnly) {
      var keys = Object.keys(object2);
      if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object2);
        if (enumerableOnly)
          symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object2, sym).enumerable;
          });
        keys.push.apply(keys, symbols);
      }
      return keys;
    }
    function _objectSpread2(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i] != null ? arguments[i] : {};
        if (i % 2) {
          ownKeys2(Object(source), true).forEach(function(key) {
            _defineProperty2(target, key, source[key]);
          });
        } else if (Object.getOwnPropertyDescriptors) {
          Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        } else {
          ownKeys2(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
          });
        }
      }
      return target;
    }
    function _classCallCheck2(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _defineProperties2(target, props2) {
      for (var i = 0; i < props2.length; i++) {
        var descriptor = props2[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass2(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties2(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties2(Constructor, staticProps);
      return Constructor;
    }
    function _inherits2(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
      }
      subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
      if (superClass)
        _setPrototypeOf2(subClass, superClass);
    }
    function _setPrototypeOf2(o, p) {
      _setPrototypeOf2 = Object.setPrototypeOf || function _setPrototypeOf3(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf2(o, p);
    }
    function _createSuper2(Derived) {
      var hasNativeReflectConstruct = _isNativeReflectConstruct2();
      return function _createSuperInternal() {
        var Super = _getPrototypeOf2(Derived), result;
        if (hasNativeReflectConstruct) {
          var NewTarget = _getPrototypeOf2(this).constructor;
          result = Reflect.construct(Super, arguments, NewTarget);
        } else {
          result = Super.apply(this, arguments);
        }
        return _possibleConstructorReturn2(this, result);
      };
    }
    function _possibleConstructorReturn2(self, call) {
      if (call && (_typeof2(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized2(self);
    }
    function _assertThisInitialized2(self) {
      if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return self;
    }
    function _isNativeReflectConstruct2() {
      if (typeof Reflect === "undefined" || !Reflect.construct)
        return false;
      if (Reflect.construct.sham)
        return false;
      if (typeof Proxy === "function")
        return true;
      try {
        Date.prototype.toString.call(Reflect.construct(Date, [], function() {
        }));
        return true;
      } catch (e) {
        return false;
      }
    }
    function _getPrototypeOf2(o) {
      _getPrototypeOf2 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf3(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
      };
      return _getPrototypeOf2(o);
    }
    function _defineProperty2(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
      } else {
        obj[key] = value;
      }
      return obj;
    }
    var SDK_URL = "https://fast.wistia.com/assets/external/E-v1.js";
    var SDK_GLOBAL = "Wistia";
    var PLAYER_ID_PREFIX = "wistia-player-";
    var Wistia2 = /* @__PURE__ */ function(_Component) {
      _inherits2(Wistia3, _Component);
      var _super = _createSuper2(Wistia3);
      function Wistia3() {
        var _this;
        _classCallCheck2(this, Wistia3);
        for (var _len = arguments.length, _args = new Array(_len), _key = 0; _key < _len; _key++) {
          _args[_key] = arguments[_key];
        }
        _this = _super.call.apply(_super, [this].concat(_args));
        _defineProperty2(_assertThisInitialized2(_this), "callPlayer", _utils2.callPlayer);
        _defineProperty2(_assertThisInitialized2(_this), "playerID", _this.props.config.playerId || "".concat(PLAYER_ID_PREFIX).concat((0, _utils2.randomString)()));
        _defineProperty2(_assertThisInitialized2(_this), "onPlay", function() {
          var _this$props;
          return (_this$props = _this.props).onPlay.apply(_this$props, arguments);
        });
        _defineProperty2(_assertThisInitialized2(_this), "onPause", function() {
          var _this$props2;
          return (_this$props2 = _this.props).onPause.apply(_this$props2, arguments);
        });
        _defineProperty2(_assertThisInitialized2(_this), "onSeek", function() {
          var _this$props3;
          return (_this$props3 = _this.props).onSeek.apply(_this$props3, arguments);
        });
        _defineProperty2(_assertThisInitialized2(_this), "onEnded", function() {
          var _this$props4;
          return (_this$props4 = _this.props).onEnded.apply(_this$props4, arguments);
        });
        _defineProperty2(_assertThisInitialized2(_this), "onPlaybackRateChange", function() {
          var _this$props5;
          return (_this$props5 = _this.props).onPlaybackRateChange.apply(_this$props5, arguments);
        });
        _defineProperty2(_assertThisInitialized2(_this), "mute", function() {
          _this.callPlayer("mute");
        });
        _defineProperty2(_assertThisInitialized2(_this), "unmute", function() {
          _this.callPlayer("unmute");
        });
        return _this;
      }
      _createClass2(Wistia3, [{
        key: "componentDidMount",
        value: function componentDidMount() {
          this.props.onMount && this.props.onMount(this);
        }
      }, {
        key: "load",
        value: function load2(url) {
          var _this2 = this;
          var _this$props6 = this.props, playing = _this$props6.playing, muted = _this$props6.muted, controls = _this$props6.controls, _onReady = _this$props6.onReady, config = _this$props6.config, onError = _this$props6.onError;
          (0, _utils2.getSDK)(SDK_URL, SDK_GLOBAL).then(function(Wistia4) {
            if (config.customControls) {
              config.customControls.forEach(function(control) {
                return Wistia4.defineControl(control);
              });
            }
            window._wq = window._wq || [];
            window._wq.push({
              id: _this2.playerID,
              options: _objectSpread2({
                autoPlay: playing,
                silentAutoPlay: "allow",
                muted,
                controlsVisibleOnLoad: controls,
                fullscreenButton: controls,
                playbar: controls,
                playbackRateControl: controls,
                qualityControl: controls,
                volumeControl: controls,
                settingsControl: controls,
                smallPlayButton: controls
              }, config.options),
              onReady: function onReady(player) {
                _this2.player = player;
                _this2.unbind();
                _this2.player.bind("play", _this2.onPlay);
                _this2.player.bind("pause", _this2.onPause);
                _this2.player.bind("seek", _this2.onSeek);
                _this2.player.bind("end", _this2.onEnded);
                _this2.player.bind("playbackratechange", _this2.onPlaybackRateChange);
                _onReady();
              }
            });
          }, onError);
        }
      }, {
        key: "unbind",
        value: function unbind() {
          this.player.unbind("play", this.onPlay);
          this.player.unbind("pause", this.onPause);
          this.player.unbind("seek", this.onSeek);
          this.player.unbind("end", this.onEnded);
          this.player.unbind("playbackratechange", this.onPlaybackRateChange);
        }
        // Proxy methods to prevent listener leaks
      }, {
        key: "play",
        value: function play() {
          this.callPlayer("play");
        }
      }, {
        key: "pause",
        value: function pause() {
          this.callPlayer("pause");
        }
      }, {
        key: "stop",
        value: function stop() {
          this.unbind();
          this.callPlayer("remove");
        }
      }, {
        key: "seekTo",
        value: function seekTo(seconds) {
          this.callPlayer("time", seconds);
        }
      }, {
        key: "setVolume",
        value: function setVolume(fraction) {
          this.callPlayer("volume", fraction);
        }
      }, {
        key: "setPlaybackRate",
        value: function setPlaybackRate(rate) {
          this.callPlayer("playbackRate", rate);
        }
      }, {
        key: "getDuration",
        value: function getDuration() {
          return this.callPlayer("duration");
        }
      }, {
        key: "getCurrentTime",
        value: function getCurrentTime() {
          return this.callPlayer("time");
        }
      }, {
        key: "getSecondsLoaded",
        value: function getSecondsLoaded() {
          return null;
        }
      }, {
        key: "render",
        value: function render() {
          var url = this.props.url;
          var videoID = url && url.match(_patterns.MATCH_URL_WISTIA)[1];
          var className = "wistia_embed wistia_async_".concat(videoID);
          var style = {
            width: "100%",
            height: "100%"
          };
          return /* @__PURE__ */ _react2["default"].createElement("div", {
            id: this.playerID,
            key: videoID,
            className,
            style
          });
        }
      }]);
      return Wistia3;
    }(_react2.Component);
    exports["default"] = Wistia2;
    _defineProperty2(Wistia2, "displayName", "Wistia");
    _defineProperty2(Wistia2, "canPlay", _patterns.canPlay.wistia);
    _defineProperty2(Wistia2, "loopOnEnded", true);
  })(Wistia);
  return Wistia;
}
var Twitch = {};
var hasRequiredTwitch;
function requireTwitch() {
  if (hasRequiredTwitch)
    return Twitch;
  hasRequiredTwitch = 1;
  (function(exports) {
    function _typeof2(obj) {
      "@babel/helpers - typeof";
      if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
        _typeof2 = function _typeof3(obj2) {
          return typeof obj2;
        };
      } else {
        _typeof2 = function _typeof3(obj2) {
          return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
        };
      }
      return _typeof2(obj);
    }
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;
    var _react2 = _interopRequireWildcard2(reactExports);
    var _utils2 = utils;
    var _patterns = patterns;
    function _getRequireWildcardCache2() {
      if (typeof WeakMap !== "function")
        return null;
      var cache = /* @__PURE__ */ new WeakMap();
      _getRequireWildcardCache2 = function _getRequireWildcardCache3() {
        return cache;
      };
      return cache;
    }
    function _interopRequireWildcard2(obj) {
      if (obj && obj.__esModule) {
        return obj;
      }
      if (obj === null || _typeof2(obj) !== "object" && typeof obj !== "function") {
        return { "default": obj };
      }
      var cache = _getRequireWildcardCache2();
      if (cache && cache.has(obj)) {
        return cache.get(obj);
      }
      var newObj = {};
      var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
          if (desc && (desc.get || desc.set)) {
            Object.defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
      newObj["default"] = obj;
      if (cache) {
        cache.set(obj, newObj);
      }
      return newObj;
    }
    function ownKeys2(object2, enumerableOnly) {
      var keys = Object.keys(object2);
      if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object2);
        if (enumerableOnly)
          symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object2, sym).enumerable;
          });
        keys.push.apply(keys, symbols);
      }
      return keys;
    }
    function _objectSpread2(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i] != null ? arguments[i] : {};
        if (i % 2) {
          ownKeys2(Object(source), true).forEach(function(key) {
            _defineProperty2(target, key, source[key]);
          });
        } else if (Object.getOwnPropertyDescriptors) {
          Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        } else {
          ownKeys2(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
          });
        }
      }
      return target;
    }
    function _classCallCheck2(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _defineProperties2(target, props2) {
      for (var i = 0; i < props2.length; i++) {
        var descriptor = props2[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass2(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties2(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties2(Constructor, staticProps);
      return Constructor;
    }
    function _inherits2(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
      }
      subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
      if (superClass)
        _setPrototypeOf2(subClass, superClass);
    }
    function _setPrototypeOf2(o, p) {
      _setPrototypeOf2 = Object.setPrototypeOf || function _setPrototypeOf3(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf2(o, p);
    }
    function _createSuper2(Derived) {
      var hasNativeReflectConstruct = _isNativeReflectConstruct2();
      return function _createSuperInternal() {
        var Super = _getPrototypeOf2(Derived), result;
        if (hasNativeReflectConstruct) {
          var NewTarget = _getPrototypeOf2(this).constructor;
          result = Reflect.construct(Super, arguments, NewTarget);
        } else {
          result = Super.apply(this, arguments);
        }
        return _possibleConstructorReturn2(this, result);
      };
    }
    function _possibleConstructorReturn2(self, call) {
      if (call && (_typeof2(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized2(self);
    }
    function _assertThisInitialized2(self) {
      if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return self;
    }
    function _isNativeReflectConstruct2() {
      if (typeof Reflect === "undefined" || !Reflect.construct)
        return false;
      if (Reflect.construct.sham)
        return false;
      if (typeof Proxy === "function")
        return true;
      try {
        Date.prototype.toString.call(Reflect.construct(Date, [], function() {
        }));
        return true;
      } catch (e) {
        return false;
      }
    }
    function _getPrototypeOf2(o) {
      _getPrototypeOf2 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf3(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
      };
      return _getPrototypeOf2(o);
    }
    function _defineProperty2(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
      } else {
        obj[key] = value;
      }
      return obj;
    }
    var SDK_URL = "https://player.twitch.tv/js/embed/v1.js";
    var SDK_GLOBAL = "Twitch";
    var PLAYER_ID_PREFIX = "twitch-player-";
    var Twitch2 = /* @__PURE__ */ function(_Component) {
      _inherits2(Twitch3, _Component);
      var _super = _createSuper2(Twitch3);
      function Twitch3() {
        var _this;
        _classCallCheck2(this, Twitch3);
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        _this = _super.call.apply(_super, [this].concat(args));
        _defineProperty2(_assertThisInitialized2(_this), "callPlayer", _utils2.callPlayer);
        _defineProperty2(_assertThisInitialized2(_this), "playerID", _this.props.config.playerId || "".concat(PLAYER_ID_PREFIX).concat((0, _utils2.randomString)()));
        _defineProperty2(_assertThisInitialized2(_this), "mute", function() {
          _this.callPlayer("setMuted", true);
        });
        _defineProperty2(_assertThisInitialized2(_this), "unmute", function() {
          _this.callPlayer("setMuted", false);
        });
        return _this;
      }
      _createClass2(Twitch3, [{
        key: "componentDidMount",
        value: function componentDidMount() {
          this.props.onMount && this.props.onMount(this);
        }
      }, {
        key: "load",
        value: function load2(url, isReady) {
          var _this2 = this;
          var _this$props = this.props, playsinline = _this$props.playsinline, onError = _this$props.onError, config = _this$props.config, controls = _this$props.controls;
          var isChannel = _patterns.MATCH_URL_TWITCH_CHANNEL.test(url);
          var id = isChannel ? url.match(_patterns.MATCH_URL_TWITCH_CHANNEL)[1] : url.match(_patterns.MATCH_URL_TWITCH_VIDEO)[1];
          if (isReady) {
            if (isChannel) {
              this.player.setChannel(id);
            } else {
              this.player.setVideo("v" + id);
            }
            return;
          }
          (0, _utils2.getSDK)(SDK_URL, SDK_GLOBAL).then(function(Twitch4) {
            _this2.player = new Twitch4.Player(_this2.playerID, _objectSpread2({
              video: isChannel ? "" : id,
              channel: isChannel ? id : "",
              height: "100%",
              width: "100%",
              playsinline,
              autoplay: _this2.props.playing,
              muted: _this2.props.muted,
              // https://github.com/CookPete/react-player/issues/733#issuecomment-549085859
              controls: isChannel ? true : controls,
              time: (0, _utils2.parseStartTime)(url)
            }, config.options));
            var _Twitch$Player = Twitch4.Player, READY = _Twitch$Player.READY, PLAYING = _Twitch$Player.PLAYING, PAUSE = _Twitch$Player.PAUSE, ENDED = _Twitch$Player.ENDED, ONLINE = _Twitch$Player.ONLINE, OFFLINE = _Twitch$Player.OFFLINE, SEEK = _Twitch$Player.SEEK;
            _this2.player.addEventListener(READY, _this2.props.onReady);
            _this2.player.addEventListener(PLAYING, _this2.props.onPlay);
            _this2.player.addEventListener(PAUSE, _this2.props.onPause);
            _this2.player.addEventListener(ENDED, _this2.props.onEnded);
            _this2.player.addEventListener(SEEK, _this2.props.onSeek);
            _this2.player.addEventListener(ONLINE, _this2.props.onLoaded);
            _this2.player.addEventListener(OFFLINE, _this2.props.onLoaded);
          }, onError);
        }
      }, {
        key: "play",
        value: function play() {
          this.callPlayer("play");
        }
      }, {
        key: "pause",
        value: function pause() {
          this.callPlayer("pause");
        }
      }, {
        key: "stop",
        value: function stop() {
          this.callPlayer("pause");
        }
      }, {
        key: "seekTo",
        value: function seekTo(seconds) {
          this.callPlayer("seek", seconds);
        }
      }, {
        key: "setVolume",
        value: function setVolume(fraction) {
          this.callPlayer("setVolume", fraction);
        }
      }, {
        key: "getDuration",
        value: function getDuration() {
          return this.callPlayer("getDuration");
        }
      }, {
        key: "getCurrentTime",
        value: function getCurrentTime() {
          return this.callPlayer("getCurrentTime");
        }
      }, {
        key: "getSecondsLoaded",
        value: function getSecondsLoaded() {
          return null;
        }
      }, {
        key: "render",
        value: function render() {
          var style = {
            width: "100%",
            height: "100%"
          };
          return /* @__PURE__ */ _react2["default"].createElement("div", {
            style,
            id: this.playerID
          });
        }
      }]);
      return Twitch3;
    }(_react2.Component);
    exports["default"] = Twitch2;
    _defineProperty2(Twitch2, "displayName", "Twitch");
    _defineProperty2(Twitch2, "canPlay", _patterns.canPlay.twitch);
    _defineProperty2(Twitch2, "loopOnEnded", true);
  })(Twitch);
  return Twitch;
}
var DailyMotion = {};
var hasRequiredDailyMotion;
function requireDailyMotion() {
  if (hasRequiredDailyMotion)
    return DailyMotion;
  hasRequiredDailyMotion = 1;
  (function(exports) {
    function _typeof2(obj) {
      "@babel/helpers - typeof";
      if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
        _typeof2 = function _typeof3(obj2) {
          return typeof obj2;
        };
      } else {
        _typeof2 = function _typeof3(obj2) {
          return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
        };
      }
      return _typeof2(obj);
    }
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;
    var _react2 = _interopRequireWildcard2(reactExports);
    var _utils2 = utils;
    var _patterns = patterns;
    function _getRequireWildcardCache2() {
      if (typeof WeakMap !== "function")
        return null;
      var cache = /* @__PURE__ */ new WeakMap();
      _getRequireWildcardCache2 = function _getRequireWildcardCache3() {
        return cache;
      };
      return cache;
    }
    function _interopRequireWildcard2(obj) {
      if (obj && obj.__esModule) {
        return obj;
      }
      if (obj === null || _typeof2(obj) !== "object" && typeof obj !== "function") {
        return { "default": obj };
      }
      var cache = _getRequireWildcardCache2();
      if (cache && cache.has(obj)) {
        return cache.get(obj);
      }
      var newObj = {};
      var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
          if (desc && (desc.get || desc.set)) {
            Object.defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
      newObj["default"] = obj;
      if (cache) {
        cache.set(obj, newObj);
      }
      return newObj;
    }
    function ownKeys2(object2, enumerableOnly) {
      var keys = Object.keys(object2);
      if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object2);
        if (enumerableOnly)
          symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object2, sym).enumerable;
          });
        keys.push.apply(keys, symbols);
      }
      return keys;
    }
    function _objectSpread2(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i] != null ? arguments[i] : {};
        if (i % 2) {
          ownKeys2(Object(source), true).forEach(function(key) {
            _defineProperty2(target, key, source[key]);
          });
        } else if (Object.getOwnPropertyDescriptors) {
          Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        } else {
          ownKeys2(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
          });
        }
      }
      return target;
    }
    function _slicedToArray2(arr, i) {
      return _arrayWithHoles2(arr) || _iterableToArrayLimit2(arr, i) || _unsupportedIterableToArray2(arr, i) || _nonIterableRest2();
    }
    function _nonIterableRest2() {
      throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    function _unsupportedIterableToArray2(o, minLen) {
      if (!o)
        return;
      if (typeof o === "string")
        return _arrayLikeToArray2(o, minLen);
      var n = Object.prototype.toString.call(o).slice(8, -1);
      if (n === "Object" && o.constructor)
        n = o.constructor.name;
      if (n === "Map" || n === "Set")
        return Array.from(o);
      if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
        return _arrayLikeToArray2(o, minLen);
    }
    function _arrayLikeToArray2(arr, len) {
      if (len == null || len > arr.length)
        len = arr.length;
      for (var i = 0, arr2 = new Array(len); i < len; i++) {
        arr2[i] = arr[i];
      }
      return arr2;
    }
    function _iterableToArrayLimit2(arr, i) {
      if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr)))
        return;
      var _arr = [];
      var _n = true;
      var _d = false;
      var _e = void 0;
      try {
        for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
          _arr.push(_s.value);
          if (i && _arr.length === i)
            break;
        }
      } catch (err) {
        _d = true;
        _e = err;
      } finally {
        try {
          if (!_n && _i["return"] != null)
            _i["return"]();
        } finally {
          if (_d)
            throw _e;
        }
      }
      return _arr;
    }
    function _arrayWithHoles2(arr) {
      if (Array.isArray(arr))
        return arr;
    }
    function _classCallCheck2(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _defineProperties2(target, props2) {
      for (var i = 0; i < props2.length; i++) {
        var descriptor = props2[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass2(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties2(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties2(Constructor, staticProps);
      return Constructor;
    }
    function _inherits2(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
      }
      subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
      if (superClass)
        _setPrototypeOf2(subClass, superClass);
    }
    function _setPrototypeOf2(o, p) {
      _setPrototypeOf2 = Object.setPrototypeOf || function _setPrototypeOf3(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf2(o, p);
    }
    function _createSuper2(Derived) {
      var hasNativeReflectConstruct = _isNativeReflectConstruct2();
      return function _createSuperInternal() {
        var Super = _getPrototypeOf2(Derived), result;
        if (hasNativeReflectConstruct) {
          var NewTarget = _getPrototypeOf2(this).constructor;
          result = Reflect.construct(Super, arguments, NewTarget);
        } else {
          result = Super.apply(this, arguments);
        }
        return _possibleConstructorReturn2(this, result);
      };
    }
    function _possibleConstructorReturn2(self, call) {
      if (call && (_typeof2(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized2(self);
    }
    function _assertThisInitialized2(self) {
      if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return self;
    }
    function _isNativeReflectConstruct2() {
      if (typeof Reflect === "undefined" || !Reflect.construct)
        return false;
      if (Reflect.construct.sham)
        return false;
      if (typeof Proxy === "function")
        return true;
      try {
        Date.prototype.toString.call(Reflect.construct(Date, [], function() {
        }));
        return true;
      } catch (e) {
        return false;
      }
    }
    function _getPrototypeOf2(o) {
      _getPrototypeOf2 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf3(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
      };
      return _getPrototypeOf2(o);
    }
    function _defineProperty2(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
      } else {
        obj[key] = value;
      }
      return obj;
    }
    var SDK_URL = "https://api.dmcdn.net/all.js";
    var SDK_GLOBAL = "DM";
    var SDK_GLOBAL_READY = "dmAsyncInit";
    var DailyMotion2 = /* @__PURE__ */ function(_Component) {
      _inherits2(DailyMotion3, _Component);
      var _super = _createSuper2(DailyMotion3);
      function DailyMotion3() {
        var _this;
        _classCallCheck2(this, DailyMotion3);
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        _this = _super.call.apply(_super, [this].concat(args));
        _defineProperty2(_assertThisInitialized2(_this), "callPlayer", _utils2.callPlayer);
        _defineProperty2(_assertThisInitialized2(_this), "onDurationChange", function() {
          var duration = _this.getDuration();
          _this.props.onDuration(duration);
        });
        _defineProperty2(_assertThisInitialized2(_this), "mute", function() {
          _this.callPlayer("setMuted", true);
        });
        _defineProperty2(_assertThisInitialized2(_this), "unmute", function() {
          _this.callPlayer("setMuted", false);
        });
        _defineProperty2(_assertThisInitialized2(_this), "ref", function(container) {
          _this.container = container;
        });
        return _this;
      }
      _createClass2(DailyMotion3, [{
        key: "componentDidMount",
        value: function componentDidMount() {
          this.props.onMount && this.props.onMount(this);
        }
      }, {
        key: "load",
        value: function load2(url) {
          var _this2 = this;
          var _this$props = this.props, controls = _this$props.controls, config = _this$props.config, onError = _this$props.onError, playing = _this$props.playing;
          var _url$match = url.match(_patterns.MATCH_URL_DAILYMOTION), _url$match2 = _slicedToArray2(_url$match, 2), id = _url$match2[1];
          if (this.player) {
            this.player.load(id, {
              start: (0, _utils2.parseStartTime)(url),
              autoplay: playing
            });
            return;
          }
          (0, _utils2.getSDK)(SDK_URL, SDK_GLOBAL, SDK_GLOBAL_READY, function(DM) {
            return DM.player;
          }).then(function(DM) {
            if (!_this2.container)
              return;
            var Player2 = DM.player;
            _this2.player = new Player2(_this2.container, {
              width: "100%",
              height: "100%",
              video: id,
              params: _objectSpread2({
                controls,
                autoplay: _this2.props.playing,
                mute: _this2.props.muted,
                start: (0, _utils2.parseStartTime)(url),
                origin: window.location.origin
              }, config.params),
              events: {
                apiready: _this2.props.onReady,
                seeked: function seeked() {
                  return _this2.props.onSeek(_this2.player.currentTime);
                },
                video_end: _this2.props.onEnded,
                durationchange: _this2.onDurationChange,
                pause: _this2.props.onPause,
                playing: _this2.props.onPlay,
                waiting: _this2.props.onBuffer,
                error: function error(event) {
                  return onError(event);
                }
              }
            });
          }, onError);
        }
      }, {
        key: "play",
        value: function play() {
          this.callPlayer("play");
        }
      }, {
        key: "pause",
        value: function pause() {
          this.callPlayer("pause");
        }
      }, {
        key: "stop",
        value: function stop() {
        }
      }, {
        key: "seekTo",
        value: function seekTo(seconds) {
          this.callPlayer("seek", seconds);
        }
      }, {
        key: "setVolume",
        value: function setVolume(fraction) {
          this.callPlayer("setVolume", fraction);
        }
      }, {
        key: "getDuration",
        value: function getDuration() {
          return this.player.duration || null;
        }
      }, {
        key: "getCurrentTime",
        value: function getCurrentTime() {
          return this.player.currentTime;
        }
      }, {
        key: "getSecondsLoaded",
        value: function getSecondsLoaded() {
          return this.player.bufferedTime;
        }
      }, {
        key: "render",
        value: function render() {
          var display = this.props.display;
          var style = {
            width: "100%",
            height: "100%",
            display
          };
          return /* @__PURE__ */ _react2["default"].createElement("div", {
            style
          }, /* @__PURE__ */ _react2["default"].createElement("div", {
            ref: this.ref
          }));
        }
      }]);
      return DailyMotion3;
    }(_react2.Component);
    exports["default"] = DailyMotion2;
    _defineProperty2(DailyMotion2, "displayName", "DailyMotion");
    _defineProperty2(DailyMotion2, "canPlay", _patterns.canPlay.dailymotion);
    _defineProperty2(DailyMotion2, "loopOnEnded", true);
  })(DailyMotion);
  return DailyMotion;
}
var Mixcloud = {};
var hasRequiredMixcloud;
function requireMixcloud() {
  if (hasRequiredMixcloud)
    return Mixcloud;
  hasRequiredMixcloud = 1;
  (function(exports) {
    function _typeof2(obj) {
      "@babel/helpers - typeof";
      if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
        _typeof2 = function _typeof3(obj2) {
          return typeof obj2;
        };
      } else {
        _typeof2 = function _typeof3(obj2) {
          return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
        };
      }
      return _typeof2(obj);
    }
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;
    var _react2 = _interopRequireWildcard2(reactExports);
    var _utils2 = utils;
    var _patterns = patterns;
    function _getRequireWildcardCache2() {
      if (typeof WeakMap !== "function")
        return null;
      var cache = /* @__PURE__ */ new WeakMap();
      _getRequireWildcardCache2 = function _getRequireWildcardCache3() {
        return cache;
      };
      return cache;
    }
    function _interopRequireWildcard2(obj) {
      if (obj && obj.__esModule) {
        return obj;
      }
      if (obj === null || _typeof2(obj) !== "object" && typeof obj !== "function") {
        return { "default": obj };
      }
      var cache = _getRequireWildcardCache2();
      if (cache && cache.has(obj)) {
        return cache.get(obj);
      }
      var newObj = {};
      var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
          if (desc && (desc.get || desc.set)) {
            Object.defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
      newObj["default"] = obj;
      if (cache) {
        cache.set(obj, newObj);
      }
      return newObj;
    }
    function ownKeys2(object2, enumerableOnly) {
      var keys = Object.keys(object2);
      if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object2);
        if (enumerableOnly)
          symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object2, sym).enumerable;
          });
        keys.push.apply(keys, symbols);
      }
      return keys;
    }
    function _objectSpread2(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i] != null ? arguments[i] : {};
        if (i % 2) {
          ownKeys2(Object(source), true).forEach(function(key) {
            _defineProperty2(target, key, source[key]);
          });
        } else if (Object.getOwnPropertyDescriptors) {
          Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        } else {
          ownKeys2(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
          });
        }
      }
      return target;
    }
    function _classCallCheck2(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _defineProperties2(target, props2) {
      for (var i = 0; i < props2.length; i++) {
        var descriptor = props2[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass2(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties2(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties2(Constructor, staticProps);
      return Constructor;
    }
    function _inherits2(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
      }
      subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
      if (superClass)
        _setPrototypeOf2(subClass, superClass);
    }
    function _setPrototypeOf2(o, p) {
      _setPrototypeOf2 = Object.setPrototypeOf || function _setPrototypeOf3(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf2(o, p);
    }
    function _createSuper2(Derived) {
      var hasNativeReflectConstruct = _isNativeReflectConstruct2();
      return function _createSuperInternal() {
        var Super = _getPrototypeOf2(Derived), result;
        if (hasNativeReflectConstruct) {
          var NewTarget = _getPrototypeOf2(this).constructor;
          result = Reflect.construct(Super, arguments, NewTarget);
        } else {
          result = Super.apply(this, arguments);
        }
        return _possibleConstructorReturn2(this, result);
      };
    }
    function _possibleConstructorReturn2(self, call) {
      if (call && (_typeof2(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized2(self);
    }
    function _assertThisInitialized2(self) {
      if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return self;
    }
    function _isNativeReflectConstruct2() {
      if (typeof Reflect === "undefined" || !Reflect.construct)
        return false;
      if (Reflect.construct.sham)
        return false;
      if (typeof Proxy === "function")
        return true;
      try {
        Date.prototype.toString.call(Reflect.construct(Date, [], function() {
        }));
        return true;
      } catch (e) {
        return false;
      }
    }
    function _getPrototypeOf2(o) {
      _getPrototypeOf2 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf3(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
      };
      return _getPrototypeOf2(o);
    }
    function _defineProperty2(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
      } else {
        obj[key] = value;
      }
      return obj;
    }
    var SDK_URL = "https://widget.mixcloud.com/media/js/widgetApi.js";
    var SDK_GLOBAL = "Mixcloud";
    var Mixcloud2 = /* @__PURE__ */ function(_Component) {
      _inherits2(Mixcloud3, _Component);
      var _super = _createSuper2(Mixcloud3);
      function Mixcloud3() {
        var _this;
        _classCallCheck2(this, Mixcloud3);
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        _this = _super.call.apply(_super, [this].concat(args));
        _defineProperty2(_assertThisInitialized2(_this), "callPlayer", _utils2.callPlayer);
        _defineProperty2(_assertThisInitialized2(_this), "duration", null);
        _defineProperty2(_assertThisInitialized2(_this), "currentTime", null);
        _defineProperty2(_assertThisInitialized2(_this), "secondsLoaded", null);
        _defineProperty2(_assertThisInitialized2(_this), "mute", function() {
        });
        _defineProperty2(_assertThisInitialized2(_this), "unmute", function() {
        });
        _defineProperty2(_assertThisInitialized2(_this), "ref", function(iframe) {
          _this.iframe = iframe;
        });
        return _this;
      }
      _createClass2(Mixcloud3, [{
        key: "componentDidMount",
        value: function componentDidMount() {
          this.props.onMount && this.props.onMount(this);
        }
      }, {
        key: "load",
        value: function load2(url) {
          var _this2 = this;
          (0, _utils2.getSDK)(SDK_URL, SDK_GLOBAL).then(function(Mixcloud4) {
            _this2.player = Mixcloud4.PlayerWidget(_this2.iframe);
            _this2.player.ready.then(function() {
              _this2.player.events.play.on(_this2.props.onPlay);
              _this2.player.events.pause.on(_this2.props.onPause);
              _this2.player.events.ended.on(_this2.props.onEnded);
              _this2.player.events.error.on(_this2.props.error);
              _this2.player.events.progress.on(function(seconds, duration) {
                _this2.currentTime = seconds;
                _this2.duration = duration;
              });
              _this2.props.onReady();
            });
          }, this.props.onError);
        }
      }, {
        key: "play",
        value: function play() {
          this.callPlayer("play");
        }
      }, {
        key: "pause",
        value: function pause() {
          this.callPlayer("pause");
        }
      }, {
        key: "stop",
        value: function stop() {
        }
      }, {
        key: "seekTo",
        value: function seekTo(seconds) {
          this.callPlayer("seek", seconds);
        }
      }, {
        key: "setVolume",
        value: function setVolume(fraction) {
        }
      }, {
        key: "getDuration",
        value: function getDuration() {
          return this.duration;
        }
      }, {
        key: "getCurrentTime",
        value: function getCurrentTime() {
          return this.currentTime;
        }
      }, {
        key: "getSecondsLoaded",
        value: function getSecondsLoaded() {
          return null;
        }
      }, {
        key: "render",
        value: function render() {
          var _this$props = this.props, url = _this$props.url, config = _this$props.config;
          var id = url.match(_patterns.MATCH_URL_MIXCLOUD)[1];
          var style = {
            width: "100%",
            height: "100%"
          };
          var query = (0, _utils2.queryString)(_objectSpread2(_objectSpread2({}, config.options), {}, {
            feed: "/".concat(id, "/")
          }));
          return /* @__PURE__ */ _react2["default"].createElement("iframe", {
            key: id,
            ref: this.ref,
            style,
            src: "https://www.mixcloud.com/widget/iframe/?".concat(query),
            frameBorder: "0",
            allow: "autoplay"
          });
        }
      }]);
      return Mixcloud3;
    }(_react2.Component);
    exports["default"] = Mixcloud2;
    _defineProperty2(Mixcloud2, "displayName", "Mixcloud");
    _defineProperty2(Mixcloud2, "canPlay", _patterns.canPlay.mixcloud);
    _defineProperty2(Mixcloud2, "loopOnEnded", true);
  })(Mixcloud);
  return Mixcloud;
}
var Vidyard = {};
var hasRequiredVidyard;
function requireVidyard() {
  if (hasRequiredVidyard)
    return Vidyard;
  hasRequiredVidyard = 1;
  (function(exports) {
    function _typeof2(obj) {
      "@babel/helpers - typeof";
      if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
        _typeof2 = function _typeof3(obj2) {
          return typeof obj2;
        };
      } else {
        _typeof2 = function _typeof3(obj2) {
          return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
        };
      }
      return _typeof2(obj);
    }
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;
    var _react2 = _interopRequireWildcard2(reactExports);
    var _utils2 = utils;
    var _patterns = patterns;
    function _getRequireWildcardCache2() {
      if (typeof WeakMap !== "function")
        return null;
      var cache = /* @__PURE__ */ new WeakMap();
      _getRequireWildcardCache2 = function _getRequireWildcardCache3() {
        return cache;
      };
      return cache;
    }
    function _interopRequireWildcard2(obj) {
      if (obj && obj.__esModule) {
        return obj;
      }
      if (obj === null || _typeof2(obj) !== "object" && typeof obj !== "function") {
        return { "default": obj };
      }
      var cache = _getRequireWildcardCache2();
      if (cache && cache.has(obj)) {
        return cache.get(obj);
      }
      var newObj = {};
      var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
          if (desc && (desc.get || desc.set)) {
            Object.defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
      newObj["default"] = obj;
      if (cache) {
        cache.set(obj, newObj);
      }
      return newObj;
    }
    function ownKeys2(object2, enumerableOnly) {
      var keys = Object.keys(object2);
      if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object2);
        if (enumerableOnly)
          symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object2, sym).enumerable;
          });
        keys.push.apply(keys, symbols);
      }
      return keys;
    }
    function _objectSpread2(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i] != null ? arguments[i] : {};
        if (i % 2) {
          ownKeys2(Object(source), true).forEach(function(key) {
            _defineProperty2(target, key, source[key]);
          });
        } else if (Object.getOwnPropertyDescriptors) {
          Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        } else {
          ownKeys2(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
          });
        }
      }
      return target;
    }
    function _classCallCheck2(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _defineProperties2(target, props2) {
      for (var i = 0; i < props2.length; i++) {
        var descriptor = props2[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass2(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties2(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties2(Constructor, staticProps);
      return Constructor;
    }
    function _inherits2(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
      }
      subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
      if (superClass)
        _setPrototypeOf2(subClass, superClass);
    }
    function _setPrototypeOf2(o, p) {
      _setPrototypeOf2 = Object.setPrototypeOf || function _setPrototypeOf3(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf2(o, p);
    }
    function _createSuper2(Derived) {
      var hasNativeReflectConstruct = _isNativeReflectConstruct2();
      return function _createSuperInternal() {
        var Super = _getPrototypeOf2(Derived), result;
        if (hasNativeReflectConstruct) {
          var NewTarget = _getPrototypeOf2(this).constructor;
          result = Reflect.construct(Super, arguments, NewTarget);
        } else {
          result = Super.apply(this, arguments);
        }
        return _possibleConstructorReturn2(this, result);
      };
    }
    function _possibleConstructorReturn2(self, call) {
      if (call && (_typeof2(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized2(self);
    }
    function _assertThisInitialized2(self) {
      if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return self;
    }
    function _isNativeReflectConstruct2() {
      if (typeof Reflect === "undefined" || !Reflect.construct)
        return false;
      if (Reflect.construct.sham)
        return false;
      if (typeof Proxy === "function")
        return true;
      try {
        Date.prototype.toString.call(Reflect.construct(Date, [], function() {
        }));
        return true;
      } catch (e) {
        return false;
      }
    }
    function _getPrototypeOf2(o) {
      _getPrototypeOf2 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf3(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
      };
      return _getPrototypeOf2(o);
    }
    function _defineProperty2(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
      } else {
        obj[key] = value;
      }
      return obj;
    }
    var SDK_URL = "https://play.vidyard.com/embed/v4.js";
    var SDK_GLOBAL = "VidyardV4";
    var SDK_GLOBAL_READY = "onVidyardAPI";
    var Vidyard2 = /* @__PURE__ */ function(_Component) {
      _inherits2(Vidyard3, _Component);
      var _super = _createSuper2(Vidyard3);
      function Vidyard3() {
        var _this;
        _classCallCheck2(this, Vidyard3);
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        _this = _super.call.apply(_super, [this].concat(args));
        _defineProperty2(_assertThisInitialized2(_this), "callPlayer", _utils2.callPlayer);
        _defineProperty2(_assertThisInitialized2(_this), "mute", function() {
          _this.setVolume(0);
        });
        _defineProperty2(_assertThisInitialized2(_this), "unmute", function() {
          if (_this.props.volume !== null) {
            _this.setVolume(_this.props.volume);
          }
        });
        _defineProperty2(_assertThisInitialized2(_this), "ref", function(container) {
          _this.container = container;
        });
        return _this;
      }
      _createClass2(Vidyard3, [{
        key: "componentDidMount",
        value: function componentDidMount() {
          this.props.onMount && this.props.onMount(this);
        }
      }, {
        key: "load",
        value: function load2(url) {
          var _this2 = this;
          var _this$props = this.props, playing = _this$props.playing, config = _this$props.config, onError = _this$props.onError, onDuration = _this$props.onDuration;
          var id = url && url.match(_patterns.MATCH_URL_VIDYARD)[1];
          if (this.player) {
            this.stop();
          }
          (0, _utils2.getSDK)(SDK_URL, SDK_GLOBAL, SDK_GLOBAL_READY).then(function(Vidyard4) {
            if (!_this2.container)
              return;
            Vidyard4.api.addReadyListener(function(data, player) {
              if (_this2.player) {
                return;
              }
              _this2.player = player;
              _this2.player.on("ready", _this2.props.onReady);
              _this2.player.on("play", _this2.props.onPlay);
              _this2.player.on("pause", _this2.props.onPause);
              _this2.player.on("seek", _this2.props.onSeek);
              _this2.player.on("playerComplete", _this2.props.onEnded);
            }, id);
            Vidyard4.api.renderPlayer(_objectSpread2({
              uuid: id,
              container: _this2.container,
              autoplay: playing ? 1 : 0
            }, config.options));
            Vidyard4.api.getPlayerMetadata(id).then(function(meta) {
              _this2.duration = meta.length_in_seconds;
              onDuration(meta.length_in_seconds);
            });
          }, onError);
        }
      }, {
        key: "play",
        value: function play() {
          this.callPlayer("play");
        }
      }, {
        key: "pause",
        value: function pause() {
          this.callPlayer("pause");
        }
      }, {
        key: "stop",
        value: function stop() {
          window.VidyardV4.api.destroyPlayer(this.player);
        }
      }, {
        key: "seekTo",
        value: function seekTo(amount) {
          this.callPlayer("seek", amount);
        }
      }, {
        key: "setVolume",
        value: function setVolume(fraction) {
          this.callPlayer("setVolume", fraction);
        }
      }, {
        key: "setPlaybackRate",
        value: function setPlaybackRate(rate) {
          this.callPlayer("setPlaybackSpeed", rate);
        }
      }, {
        key: "getDuration",
        value: function getDuration() {
          return this.duration;
        }
      }, {
        key: "getCurrentTime",
        value: function getCurrentTime() {
          return this.callPlayer("currentTime");
        }
      }, {
        key: "getSecondsLoaded",
        value: function getSecondsLoaded() {
          return null;
        }
      }, {
        key: "render",
        value: function render() {
          var display = this.props.display;
          var style = {
            width: "100%",
            height: "100%",
            display
          };
          return /* @__PURE__ */ _react2["default"].createElement("div", {
            style
          }, /* @__PURE__ */ _react2["default"].createElement("div", {
            ref: this.ref
          }));
        }
      }]);
      return Vidyard3;
    }(_react2.Component);
    exports["default"] = Vidyard2;
    _defineProperty2(Vidyard2, "displayName", "Vidyard");
    _defineProperty2(Vidyard2, "canPlay", _patterns.canPlay.vidyard);
  })(Vidyard);
  return Vidyard;
}
var Kaltura = {};
var hasRequiredKaltura;
function requireKaltura() {
  if (hasRequiredKaltura)
    return Kaltura;
  hasRequiredKaltura = 1;
  (function(exports) {
    function _typeof2(obj) {
      "@babel/helpers - typeof";
      if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
        _typeof2 = function _typeof3(obj2) {
          return typeof obj2;
        };
      } else {
        _typeof2 = function _typeof3(obj2) {
          return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
        };
      }
      return _typeof2(obj);
    }
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;
    var _react2 = _interopRequireWildcard2(reactExports);
    var _utils2 = utils;
    var _patterns = patterns;
    function _getRequireWildcardCache2() {
      if (typeof WeakMap !== "function")
        return null;
      var cache = /* @__PURE__ */ new WeakMap();
      _getRequireWildcardCache2 = function _getRequireWildcardCache3() {
        return cache;
      };
      return cache;
    }
    function _interopRequireWildcard2(obj) {
      if (obj && obj.__esModule) {
        return obj;
      }
      if (obj === null || _typeof2(obj) !== "object" && typeof obj !== "function") {
        return { "default": obj };
      }
      var cache = _getRequireWildcardCache2();
      if (cache && cache.has(obj)) {
        return cache.get(obj);
      }
      var newObj = {};
      var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
          if (desc && (desc.get || desc.set)) {
            Object.defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
      newObj["default"] = obj;
      if (cache) {
        cache.set(obj, newObj);
      }
      return newObj;
    }
    function _classCallCheck2(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _defineProperties2(target, props2) {
      for (var i = 0; i < props2.length; i++) {
        var descriptor = props2[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass2(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties2(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties2(Constructor, staticProps);
      return Constructor;
    }
    function _inherits2(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
      }
      subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
      if (superClass)
        _setPrototypeOf2(subClass, superClass);
    }
    function _setPrototypeOf2(o, p) {
      _setPrototypeOf2 = Object.setPrototypeOf || function _setPrototypeOf3(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf2(o, p);
    }
    function _createSuper2(Derived) {
      var hasNativeReflectConstruct = _isNativeReflectConstruct2();
      return function _createSuperInternal() {
        var Super = _getPrototypeOf2(Derived), result;
        if (hasNativeReflectConstruct) {
          var NewTarget = _getPrototypeOf2(this).constructor;
          result = Reflect.construct(Super, arguments, NewTarget);
        } else {
          result = Super.apply(this, arguments);
        }
        return _possibleConstructorReturn2(this, result);
      };
    }
    function _possibleConstructorReturn2(self, call) {
      if (call && (_typeof2(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized2(self);
    }
    function _assertThisInitialized2(self) {
      if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return self;
    }
    function _isNativeReflectConstruct2() {
      if (typeof Reflect === "undefined" || !Reflect.construct)
        return false;
      if (Reflect.construct.sham)
        return false;
      if (typeof Proxy === "function")
        return true;
      try {
        Date.prototype.toString.call(Reflect.construct(Date, [], function() {
        }));
        return true;
      } catch (e) {
        return false;
      }
    }
    function _getPrototypeOf2(o) {
      _getPrototypeOf2 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf3(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
      };
      return _getPrototypeOf2(o);
    }
    function _defineProperty2(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
      } else {
        obj[key] = value;
      }
      return obj;
    }
    var SDK_URL = "https://cdn.embed.ly/player-0.1.0.min.js";
    var SDK_GLOBAL = "playerjs";
    var Kaltura2 = /* @__PURE__ */ function(_Component) {
      _inherits2(Kaltura3, _Component);
      var _super = _createSuper2(Kaltura3);
      function Kaltura3() {
        var _this;
        _classCallCheck2(this, Kaltura3);
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        _this = _super.call.apply(_super, [this].concat(args));
        _defineProperty2(_assertThisInitialized2(_this), "callPlayer", _utils2.callPlayer);
        _defineProperty2(_assertThisInitialized2(_this), "duration", null);
        _defineProperty2(_assertThisInitialized2(_this), "currentTime", null);
        _defineProperty2(_assertThisInitialized2(_this), "secondsLoaded", null);
        _defineProperty2(_assertThisInitialized2(_this), "mute", function() {
          _this.callPlayer("mute");
        });
        _defineProperty2(_assertThisInitialized2(_this), "unmute", function() {
          _this.callPlayer("unmute");
        });
        _defineProperty2(_assertThisInitialized2(_this), "ref", function(iframe) {
          _this.iframe = iframe;
        });
        return _this;
      }
      _createClass2(Kaltura3, [{
        key: "componentDidMount",
        value: function componentDidMount() {
          this.props.onMount && this.props.onMount(this);
        }
      }, {
        key: "load",
        value: function load2(url) {
          var _this2 = this;
          (0, _utils2.getSDK)(SDK_URL, SDK_GLOBAL).then(function(playerjs) {
            if (!_this2.iframe)
              return;
            _this2.player = new playerjs.Player(_this2.iframe);
            _this2.player.on("ready", function() {
              setTimeout(function() {
                _this2.player.isReady = true;
                _this2.player.setLoop(_this2.props.loop);
                if (_this2.props.muted) {
                  _this2.player.mute();
                }
                _this2.addListeners(_this2.player, _this2.props);
                _this2.props.onReady();
              }, 500);
            });
          }, this.props.onError);
        }
      }, {
        key: "addListeners",
        value: function addListeners(player, props2) {
          var _this3 = this;
          player.on("play", props2.onPlay);
          player.on("pause", props2.onPause);
          player.on("ended", props2.onEnded);
          player.on("error", props2.onError);
          player.on("timeupdate", function(_ref) {
            var duration = _ref.duration, seconds = _ref.seconds;
            _this3.duration = duration;
            _this3.currentTime = seconds;
          });
        }
      }, {
        key: "play",
        value: function play() {
          this.callPlayer("play");
        }
      }, {
        key: "pause",
        value: function pause() {
          this.callPlayer("pause");
        }
      }, {
        key: "stop",
        value: function stop() {
        }
      }, {
        key: "seekTo",
        value: function seekTo(seconds) {
          this.callPlayer("setCurrentTime", seconds);
        }
      }, {
        key: "setVolume",
        value: function setVolume(fraction) {
          this.callPlayer("setVolume", fraction);
        }
      }, {
        key: "setLoop",
        value: function setLoop(loop) {
          this.callPlayer("setLoop", loop);
        }
      }, {
        key: "getDuration",
        value: function getDuration() {
          return this.duration;
        }
      }, {
        key: "getCurrentTime",
        value: function getCurrentTime() {
          return this.currentTime;
        }
      }, {
        key: "getSecondsLoaded",
        value: function getSecondsLoaded() {
          return this.secondsLoaded;
        }
      }, {
        key: "render",
        value: function render() {
          var style = {
            width: "100%",
            height: "100%"
          };
          return /* @__PURE__ */ _react2["default"].createElement("iframe", {
            ref: this.ref,
            src: this.props.url,
            frameBorder: "0",
            scrolling: "no",
            style,
            allow: "encrypted-media; autoplay; fullscreen;",
            referrerPolicy: "no-referrer-when-downgrade"
          });
        }
      }]);
      return Kaltura3;
    }(_react2.Component);
    exports["default"] = Kaltura2;
    _defineProperty2(Kaltura2, "displayName", "Kaltura");
    _defineProperty2(Kaltura2, "canPlay", _patterns.canPlay.kaltura);
  })(Kaltura);
  return Kaltura;
}
var FilePlayer = {};
var hasRequiredFilePlayer;
function requireFilePlayer() {
  if (hasRequiredFilePlayer)
    return FilePlayer;
  hasRequiredFilePlayer = 1;
  (function(exports) {
    function _typeof2(obj) {
      "@babel/helpers - typeof";
      if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
        _typeof2 = function _typeof3(obj2) {
          return typeof obj2;
        };
      } else {
        _typeof2 = function _typeof3(obj2) {
          return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
        };
      }
      return _typeof2(obj);
    }
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;
    var _react2 = _interopRequireWildcard2(reactExports);
    var _utils2 = utils;
    var _patterns = patterns;
    function _getRequireWildcardCache2() {
      if (typeof WeakMap !== "function")
        return null;
      var cache = /* @__PURE__ */ new WeakMap();
      _getRequireWildcardCache2 = function _getRequireWildcardCache3() {
        return cache;
      };
      return cache;
    }
    function _interopRequireWildcard2(obj) {
      if (obj && obj.__esModule) {
        return obj;
      }
      if (obj === null || _typeof2(obj) !== "object" && typeof obj !== "function") {
        return { "default": obj };
      }
      var cache = _getRequireWildcardCache2();
      if (cache && cache.has(obj)) {
        return cache.get(obj);
      }
      var newObj = {};
      var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
          if (desc && (desc.get || desc.set)) {
            Object.defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
      newObj["default"] = obj;
      if (cache) {
        cache.set(obj, newObj);
      }
      return newObj;
    }
    function _extends2() {
      _extends2 = Object.assign || function(target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];
          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }
        return target;
      };
      return _extends2.apply(this, arguments);
    }
    function _classCallCheck2(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _defineProperties2(target, props2) {
      for (var i = 0; i < props2.length; i++) {
        var descriptor = props2[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass2(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties2(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties2(Constructor, staticProps);
      return Constructor;
    }
    function _inherits2(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
      }
      subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
      if (superClass)
        _setPrototypeOf2(subClass, superClass);
    }
    function _setPrototypeOf2(o, p) {
      _setPrototypeOf2 = Object.setPrototypeOf || function _setPrototypeOf3(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf2(o, p);
    }
    function _createSuper2(Derived) {
      var hasNativeReflectConstruct = _isNativeReflectConstruct2();
      return function _createSuperInternal() {
        var Super = _getPrototypeOf2(Derived), result;
        if (hasNativeReflectConstruct) {
          var NewTarget = _getPrototypeOf2(this).constructor;
          result = Reflect.construct(Super, arguments, NewTarget);
        } else {
          result = Super.apply(this, arguments);
        }
        return _possibleConstructorReturn2(this, result);
      };
    }
    function _possibleConstructorReturn2(self, call) {
      if (call && (_typeof2(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized2(self);
    }
    function _assertThisInitialized2(self) {
      if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return self;
    }
    function _isNativeReflectConstruct2() {
      if (typeof Reflect === "undefined" || !Reflect.construct)
        return false;
      if (Reflect.construct.sham)
        return false;
      if (typeof Proxy === "function")
        return true;
      try {
        Date.prototype.toString.call(Reflect.construct(Date, [], function() {
        }));
        return true;
      } catch (e) {
        return false;
      }
    }
    function _getPrototypeOf2(o) {
      _getPrototypeOf2 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf3(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
      };
      return _getPrototypeOf2(o);
    }
    function _defineProperty2(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
      } else {
        obj[key] = value;
      }
      return obj;
    }
    var HAS_NAVIGATOR = typeof navigator !== "undefined";
    var IS_IPAD_PRO = HAS_NAVIGATOR && navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1;
    var IS_IOS = HAS_NAVIGATOR && (/iPad|iPhone|iPod/.test(navigator.userAgent) || IS_IPAD_PRO) && !window.MSStream;
    var IS_SAFARI = HAS_NAVIGATOR && /^((?!chrome|android).)*safari/i.test(navigator.userAgent) && !window.MSStream;
    var HLS_SDK_URL = "https://cdn.jsdelivr.net/npm/hls.js@VERSION/dist/hls.min.js";
    var HLS_GLOBAL = "Hls";
    var DASH_SDK_URL = "https://cdnjs.cloudflare.com/ajax/libs/dashjs/VERSION/dash.all.min.js";
    var DASH_GLOBAL = "dashjs";
    var FLV_SDK_URL = "https://cdn.jsdelivr.net/npm/flv.js@VERSION/dist/flv.min.js";
    var FLV_GLOBAL = "flvjs";
    var MATCH_DROPBOX_URL = /www\.dropbox\.com\/.+/;
    var MATCH_CLOUDFLARE_STREAM = /https:\/\/watch\.cloudflarestream\.com\/([a-z0-9]+)/;
    var REPLACE_CLOUDFLARE_STREAM = "https://videodelivery.net/{id}/manifest/video.m3u8";
    var FilePlayer2 = /* @__PURE__ */ function(_Component) {
      _inherits2(FilePlayer3, _Component);
      var _super = _createSuper2(FilePlayer3);
      function FilePlayer3() {
        var _this;
        _classCallCheck2(this, FilePlayer3);
        for (var _len = arguments.length, _args = new Array(_len), _key = 0; _key < _len; _key++) {
          _args[_key] = arguments[_key];
        }
        _this = _super.call.apply(_super, [this].concat(_args));
        _defineProperty2(_assertThisInitialized2(_this), "onReady", function() {
          var _this$props;
          return (_this$props = _this.props).onReady.apply(_this$props, arguments);
        });
        _defineProperty2(_assertThisInitialized2(_this), "onPlay", function() {
          var _this$props2;
          return (_this$props2 = _this.props).onPlay.apply(_this$props2, arguments);
        });
        _defineProperty2(_assertThisInitialized2(_this), "onBuffer", function() {
          var _this$props3;
          return (_this$props3 = _this.props).onBuffer.apply(_this$props3, arguments);
        });
        _defineProperty2(_assertThisInitialized2(_this), "onBufferEnd", function() {
          var _this$props4;
          return (_this$props4 = _this.props).onBufferEnd.apply(_this$props4, arguments);
        });
        _defineProperty2(_assertThisInitialized2(_this), "onPause", function() {
          var _this$props5;
          return (_this$props5 = _this.props).onPause.apply(_this$props5, arguments);
        });
        _defineProperty2(_assertThisInitialized2(_this), "onEnded", function() {
          var _this$props6;
          return (_this$props6 = _this.props).onEnded.apply(_this$props6, arguments);
        });
        _defineProperty2(_assertThisInitialized2(_this), "onError", function() {
          var _this$props7;
          return (_this$props7 = _this.props).onError.apply(_this$props7, arguments);
        });
        _defineProperty2(_assertThisInitialized2(_this), "onPlayBackRateChange", function(event) {
          return _this.props.onPlaybackRateChange(event.target.playbackRate);
        });
        _defineProperty2(_assertThisInitialized2(_this), "onEnablePIP", function() {
          var _this$props8;
          return (_this$props8 = _this.props).onEnablePIP.apply(_this$props8, arguments);
        });
        _defineProperty2(_assertThisInitialized2(_this), "onDisablePIP", function(e) {
          var _this$props9 = _this.props, onDisablePIP = _this$props9.onDisablePIP, playing = _this$props9.playing;
          onDisablePIP(e);
          if (playing) {
            _this.play();
          }
        });
        _defineProperty2(_assertThisInitialized2(_this), "onPresentationModeChange", function(e) {
          if (_this.player && (0, _utils2.supportsWebKitPresentationMode)(_this.player)) {
            var webkitPresentationMode = _this.player.webkitPresentationMode;
            if (webkitPresentationMode === "picture-in-picture") {
              _this.onEnablePIP(e);
            } else if (webkitPresentationMode === "inline") {
              _this.onDisablePIP(e);
            }
          }
        });
        _defineProperty2(_assertThisInitialized2(_this), "onSeek", function(e) {
          _this.props.onSeek(e.target.currentTime);
        });
        _defineProperty2(_assertThisInitialized2(_this), "mute", function() {
          _this.player.muted = true;
        });
        _defineProperty2(_assertThisInitialized2(_this), "unmute", function() {
          _this.player.muted = false;
        });
        _defineProperty2(_assertThisInitialized2(_this), "renderSourceElement", function(source, index) {
          if (typeof source === "string") {
            return /* @__PURE__ */ _react2["default"].createElement("source", {
              key: index,
              src: source
            });
          }
          return /* @__PURE__ */ _react2["default"].createElement("source", _extends2({
            key: index
          }, source));
        });
        _defineProperty2(_assertThisInitialized2(_this), "renderTrack", function(track, index) {
          return /* @__PURE__ */ _react2["default"].createElement("track", _extends2({
            key: index
          }, track));
        });
        _defineProperty2(_assertThisInitialized2(_this), "ref", function(player) {
          if (_this.player) {
            _this.prevPlayer = _this.player;
          }
          _this.player = player;
        });
        return _this;
      }
      _createClass2(FilePlayer3, [{
        key: "componentDidMount",
        value: function componentDidMount() {
          this.props.onMount && this.props.onMount(this);
          this.addListeners(this.player);
          this.player.src = this.getSource(this.props.url);
          if (IS_IOS) {
            this.player.load();
          }
        }
      }, {
        key: "componentDidUpdate",
        value: function componentDidUpdate(prevProps) {
          if (this.shouldUseAudio(this.props) !== this.shouldUseAudio(prevProps)) {
            this.removeListeners(this.prevPlayer, prevProps.url);
            this.addListeners(this.player);
          }
          if (this.props.url !== prevProps.url && !(0, _utils2.isMediaStream)(this.props.url)) {
            this.player.srcObject = null;
          }
        }
      }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
          this.player.src = "";
          this.removeListeners(this.player);
          if (this.hls) {
            this.hls.destroy();
          }
        }
      }, {
        key: "addListeners",
        value: function addListeners(player) {
          var _this$props10 = this.props, url = _this$props10.url, playsinline = _this$props10.playsinline;
          player.addEventListener("play", this.onPlay);
          player.addEventListener("waiting", this.onBuffer);
          player.addEventListener("playing", this.onBufferEnd);
          player.addEventListener("pause", this.onPause);
          player.addEventListener("seeked", this.onSeek);
          player.addEventListener("ended", this.onEnded);
          player.addEventListener("error", this.onError);
          player.addEventListener("ratechange", this.onPlayBackRateChange);
          player.addEventListener("enterpictureinpicture", this.onEnablePIP);
          player.addEventListener("leavepictureinpicture", this.onDisablePIP);
          player.addEventListener("webkitpresentationmodechanged", this.onPresentationModeChange);
          if (!this.shouldUseHLS(url)) {
            player.addEventListener("canplay", this.onReady);
          }
          if (playsinline) {
            player.setAttribute("playsinline", "");
            player.setAttribute("webkit-playsinline", "");
            player.setAttribute("x5-playsinline", "");
          }
        }
      }, {
        key: "removeListeners",
        value: function removeListeners(player, url) {
          player.removeEventListener("canplay", this.onReady);
          player.removeEventListener("play", this.onPlay);
          player.removeEventListener("waiting", this.onBuffer);
          player.removeEventListener("playing", this.onBufferEnd);
          player.removeEventListener("pause", this.onPause);
          player.removeEventListener("seeked", this.onSeek);
          player.removeEventListener("ended", this.onEnded);
          player.removeEventListener("error", this.onError);
          player.removeEventListener("ratechange", this.onPlayBackRateChange);
          player.removeEventListener("enterpictureinpicture", this.onEnablePIP);
          player.removeEventListener("leavepictureinpicture", this.onDisablePIP);
          player.removeEventListener("webkitpresentationmodechanged", this.onPresentationModeChange);
          if (!this.shouldUseHLS(url)) {
            player.removeEventListener("canplay", this.onReady);
          }
        }
        // Proxy methods to prevent listener leaks
      }, {
        key: "shouldUseAudio",
        value: function shouldUseAudio(props2) {
          if (props2.config.forceVideo) {
            return false;
          }
          if (props2.config.attributes.poster) {
            return false;
          }
          return _patterns.AUDIO_EXTENSIONS.test(props2.url) || props2.config.forceAudio;
        }
      }, {
        key: "shouldUseHLS",
        value: function shouldUseHLS(url) {
          if (this.props.config.forceHLS) {
            return true;
          }
          if (IS_SAFARI && this.props.config.forceSafariHLS) {
            return true;
          }
          if (IS_IOS) {
            return false;
          }
          return _patterns.HLS_EXTENSIONS.test(url) || MATCH_CLOUDFLARE_STREAM.test(url);
        }
      }, {
        key: "shouldUseDASH",
        value: function shouldUseDASH(url) {
          return _patterns.DASH_EXTENSIONS.test(url) || this.props.config.forceDASH;
        }
      }, {
        key: "shouldUseFLV",
        value: function shouldUseFLV(url) {
          return _patterns.FLV_EXTENSIONS.test(url) || this.props.config.forceFLV;
        }
      }, {
        key: "load",
        value: function load2(url) {
          var _this2 = this;
          var _this$props$config = this.props.config, hlsVersion = _this$props$config.hlsVersion, hlsOptions = _this$props$config.hlsOptions, dashVersion = _this$props$config.dashVersion, flvVersion = _this$props$config.flvVersion;
          if (this.hls) {
            this.hls.destroy();
          }
          if (this.dash) {
            this.dash.reset();
          }
          if (this.shouldUseHLS(url)) {
            (0, _utils2.getSDK)(HLS_SDK_URL.replace("VERSION", hlsVersion), HLS_GLOBAL).then(function(Hls) {
              _this2.hls = new Hls(hlsOptions);
              _this2.hls.on(Hls.Events.MANIFEST_PARSED, function() {
                _this2.props.onReady();
              });
              _this2.hls.on(Hls.Events.ERROR, function(e, data) {
                _this2.props.onError(e, data, _this2.hls, Hls);
              });
              if (MATCH_CLOUDFLARE_STREAM.test(url)) {
                var id = url.match(MATCH_CLOUDFLARE_STREAM)[1];
                _this2.hls.loadSource(REPLACE_CLOUDFLARE_STREAM.replace("{id}", id));
              } else {
                _this2.hls.loadSource(url);
              }
              _this2.hls.attachMedia(_this2.player);
              _this2.props.onLoaded();
            });
          }
          if (this.shouldUseDASH(url)) {
            (0, _utils2.getSDK)(DASH_SDK_URL.replace("VERSION", dashVersion), DASH_GLOBAL).then(function(dashjs) {
              _this2.dash = dashjs.MediaPlayer().create();
              _this2.dash.initialize(_this2.player, url, _this2.props.playing);
              _this2.dash.on("error", _this2.props.onError);
              if (parseInt(dashVersion) < 3) {
                _this2.dash.getDebug().setLogToBrowserConsole(false);
              } else {
                _this2.dash.updateSettings({
                  debug: {
                    logLevel: dashjs.Debug.LOG_LEVEL_NONE
                  }
                });
              }
              _this2.props.onLoaded();
            });
          }
          if (this.shouldUseFLV(url)) {
            (0, _utils2.getSDK)(FLV_SDK_URL.replace("VERSION", flvVersion), FLV_GLOBAL).then(function(flvjs) {
              _this2.flv = flvjs.createPlayer({
                type: "flv",
                url
              });
              _this2.flv.attachMediaElement(_this2.player);
              _this2.flv.on(flvjs.Events.ERROR, function(e, data) {
                _this2.props.onError(e, data, _this2.flv, flvjs);
              });
              _this2.flv.load();
              _this2.props.onLoaded();
            });
          }
          if (url instanceof Array) {
            this.player.load();
          } else if ((0, _utils2.isMediaStream)(url)) {
            try {
              this.player.srcObject = url;
            } catch (e) {
              this.player.src = window.URL.createObjectURL(url);
            }
          }
        }
      }, {
        key: "play",
        value: function play() {
          var promise = this.player.play();
          if (promise) {
            promise["catch"](this.props.onError);
          }
        }
      }, {
        key: "pause",
        value: function pause() {
          this.player.pause();
        }
      }, {
        key: "stop",
        value: function stop() {
          this.player.removeAttribute("src");
          if (this.dash) {
            this.dash.reset();
          }
        }
      }, {
        key: "seekTo",
        value: function seekTo(seconds) {
          this.player.currentTime = seconds;
        }
      }, {
        key: "setVolume",
        value: function setVolume(fraction) {
          this.player.volume = fraction;
        }
      }, {
        key: "enablePIP",
        value: function enablePIP() {
          if (this.player.requestPictureInPicture && document.pictureInPictureElement !== this.player) {
            this.player.requestPictureInPicture();
          } else if ((0, _utils2.supportsWebKitPresentationMode)(this.player) && this.player.webkitPresentationMode !== "picture-in-picture") {
            this.player.webkitSetPresentationMode("picture-in-picture");
          }
        }
      }, {
        key: "disablePIP",
        value: function disablePIP() {
          if (document.exitPictureInPicture && document.pictureInPictureElement === this.player) {
            document.exitPictureInPicture();
          } else if ((0, _utils2.supportsWebKitPresentationMode)(this.player) && this.player.webkitPresentationMode !== "inline") {
            this.player.webkitSetPresentationMode("inline");
          }
        }
      }, {
        key: "setPlaybackRate",
        value: function setPlaybackRate(rate) {
          try {
            this.player.playbackRate = rate;
          } catch (error) {
            this.props.onError(error);
          }
        }
      }, {
        key: "getDuration",
        value: function getDuration() {
          if (!this.player)
            return null;
          var _this$player = this.player, duration = _this$player.duration, seekable = _this$player.seekable;
          if (duration === Infinity && seekable.length > 0) {
            return seekable.end(seekable.length - 1);
          }
          return duration;
        }
      }, {
        key: "getCurrentTime",
        value: function getCurrentTime() {
          if (!this.player)
            return null;
          return this.player.currentTime;
        }
      }, {
        key: "getSecondsLoaded",
        value: function getSecondsLoaded() {
          if (!this.player)
            return null;
          var buffered = this.player.buffered;
          if (buffered.length === 0) {
            return 0;
          }
          var end = buffered.end(buffered.length - 1);
          var duration = this.getDuration();
          if (end > duration) {
            return duration;
          }
          return end;
        }
      }, {
        key: "getSource",
        value: function getSource(url) {
          var useHLS = this.shouldUseHLS(url);
          var useDASH = this.shouldUseDASH(url);
          var useFLV = this.shouldUseFLV(url);
          if (url instanceof Array || (0, _utils2.isMediaStream)(url) || useHLS || useDASH || useFLV) {
            return void 0;
          }
          if (MATCH_DROPBOX_URL.test(url)) {
            return url.replace("www.dropbox.com", "dl.dropboxusercontent.com");
          }
          return url;
        }
      }, {
        key: "render",
        value: function render() {
          var _this$props11 = this.props, url = _this$props11.url, playing = _this$props11.playing, loop = _this$props11.loop, controls = _this$props11.controls, muted = _this$props11.muted, config = _this$props11.config, width = _this$props11.width, height = _this$props11.height;
          var useAudio = this.shouldUseAudio(this.props);
          var Element2 = useAudio ? "audio" : "video";
          var style = {
            width: width === "auto" ? width : "100%",
            height: height === "auto" ? height : "100%"
          };
          return /* @__PURE__ */ _react2["default"].createElement(Element2, _extends2({
            ref: this.ref,
            src: this.getSource(url),
            style,
            preload: "auto",
            autoPlay: playing || void 0,
            controls,
            muted,
            loop
          }, config.attributes), url instanceof Array && url.map(this.renderSourceElement), config.tracks.map(this.renderTrack));
        }
      }]);
      return FilePlayer3;
    }(_react2.Component);
    exports["default"] = FilePlayer2;
    _defineProperty2(FilePlayer2, "displayName", "FilePlayer");
    _defineProperty2(FilePlayer2, "canPlay", _patterns.canPlay.file);
  })(FilePlayer);
  return FilePlayer;
}
(function(exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports["default"] = void 0;
  var _react2 = reactExports;
  var _utils2 = utils;
  var _patterns = patterns;
  function _typeof2(obj) {
    "@babel/helpers - typeof";
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof2 = function _typeof3(obj2) {
        return typeof obj2;
      };
    } else {
      _typeof2 = function _typeof3(obj2) {
        return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
      };
    }
    return _typeof2(obj);
  }
  function _getRequireWildcardCache2() {
    if (typeof WeakMap !== "function")
      return null;
    var cache = /* @__PURE__ */ new WeakMap();
    _getRequireWildcardCache2 = function _getRequireWildcardCache3() {
      return cache;
    };
    return cache;
  }
  function _interopRequireWildcard2(obj) {
    if (obj && obj.__esModule) {
      return obj;
    }
    if (obj === null || _typeof2(obj) !== "object" && typeof obj !== "function") {
      return { "default": obj };
    }
    var cache = _getRequireWildcardCache2();
    if (cache && cache.has(obj)) {
      return cache.get(obj);
    }
    var newObj = {};
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
        if (desc && (desc.get || desc.set)) {
          Object.defineProperty(newObj, key, desc);
        } else {
          newObj[key] = obj[key];
        }
      }
    }
    newObj["default"] = obj;
    if (cache) {
      cache.set(obj, newObj);
    }
    return newObj;
  }
  var _default = [{
    key: "youtube",
    name: "YouTube",
    canPlay: _patterns.canPlay.youtube,
    lazyPlayer: /* @__PURE__ */ (0, _react2.lazy)(function() {
      return Promise.resolve().then(function() {
        return _interopRequireWildcard2(requireYouTube());
      });
    })
  }, {
    key: "soundcloud",
    name: "SoundCloud",
    canPlay: _patterns.canPlay.soundcloud,
    lazyPlayer: /* @__PURE__ */ (0, _react2.lazy)(function() {
      return Promise.resolve().then(function() {
        return _interopRequireWildcard2(requireSoundCloud());
      });
    })
  }, {
    key: "vimeo",
    name: "Vimeo",
    canPlay: _patterns.canPlay.vimeo,
    lazyPlayer: /* @__PURE__ */ (0, _react2.lazy)(function() {
      return Promise.resolve().then(function() {
        return _interopRequireWildcard2(requireVimeo());
      });
    })
  }, {
    key: "facebook",
    name: "Facebook",
    canPlay: _patterns.canPlay.facebook,
    lazyPlayer: /* @__PURE__ */ (0, _react2.lazy)(function() {
      return Promise.resolve().then(function() {
        return _interopRequireWildcard2(requireFacebook());
      });
    })
  }, {
    key: "streamable",
    name: "Streamable",
    canPlay: _patterns.canPlay.streamable,
    lazyPlayer: /* @__PURE__ */ (0, _react2.lazy)(function() {
      return Promise.resolve().then(function() {
        return _interopRequireWildcard2(requireStreamable());
      });
    })
  }, {
    key: "wistia",
    name: "Wistia",
    canPlay: _patterns.canPlay.wistia,
    lazyPlayer: /* @__PURE__ */ (0, _react2.lazy)(function() {
      return Promise.resolve().then(function() {
        return _interopRequireWildcard2(requireWistia());
      });
    })
  }, {
    key: "twitch",
    name: "Twitch",
    canPlay: _patterns.canPlay.twitch,
    lazyPlayer: /* @__PURE__ */ (0, _react2.lazy)(function() {
      return Promise.resolve().then(function() {
        return _interopRequireWildcard2(requireTwitch());
      });
    })
  }, {
    key: "dailymotion",
    name: "DailyMotion",
    canPlay: _patterns.canPlay.dailymotion,
    lazyPlayer: /* @__PURE__ */ (0, _react2.lazy)(function() {
      return Promise.resolve().then(function() {
        return _interopRequireWildcard2(requireDailyMotion());
      });
    })
  }, {
    key: "mixcloud",
    name: "Mixcloud",
    canPlay: _patterns.canPlay.mixcloud,
    lazyPlayer: /* @__PURE__ */ (0, _react2.lazy)(function() {
      return Promise.resolve().then(function() {
        return _interopRequireWildcard2(requireMixcloud());
      });
    })
  }, {
    key: "vidyard",
    name: "Vidyard",
    canPlay: _patterns.canPlay.vidyard,
    lazyPlayer: /* @__PURE__ */ (0, _react2.lazy)(function() {
      return Promise.resolve().then(function() {
        return _interopRequireWildcard2(requireVidyard());
      });
    })
  }, {
    key: "kaltura",
    name: "Kaltura",
    canPlay: _patterns.canPlay.kaltura,
    lazyPlayer: /* @__PURE__ */ (0, _react2.lazy)(function() {
      return Promise.resolve().then(function() {
        return _interopRequireWildcard2(requireKaltura());
      });
    })
  }, {
    key: "file",
    name: "FilePlayer",
    canPlay: _patterns.canPlay.file,
    canEnablePIP: function canEnablePIP(url) {
      return _patterns.canPlay.file(url) && (document.pictureInPictureEnabled || (0, _utils2.supportsWebKitPresentationMode)()) && !_patterns.AUDIO_EXTENSIONS.test(url);
    },
    lazyPlayer: /* @__PURE__ */ (0, _react2.lazy)(function() {
      return Promise.resolve().then(function() {
        return _interopRequireWildcard2(requireFilePlayer());
      });
    })
  }];
  exports["default"] = _default;
})(players);
var ReactPlayer$1 = {};
const require$$2 = /* @__PURE__ */ getAugmentedNamespace(memoizeOne_esm);
var hasElementType = typeof Element !== "undefined";
var hasMap = typeof Map === "function";
var hasSet = typeof Set === "function";
var hasArrayBuffer = typeof ArrayBuffer === "function" && !!ArrayBuffer.isView;
function equal(a, b) {
  if (a === b)
    return true;
  if (a && b && typeof a == "object" && typeof b == "object") {
    if (a.constructor !== b.constructor)
      return false;
    var length, i, keys;
    if (Array.isArray(a)) {
      length = a.length;
      if (length != b.length)
        return false;
      for (i = length; i-- !== 0; )
        if (!equal(a[i], b[i]))
          return false;
      return true;
    }
    var it;
    if (hasMap && a instanceof Map && b instanceof Map) {
      if (a.size !== b.size)
        return false;
      it = a.entries();
      while (!(i = it.next()).done)
        if (!b.has(i.value[0]))
          return false;
      it = a.entries();
      while (!(i = it.next()).done)
        if (!equal(i.value[1], b.get(i.value[0])))
          return false;
      return true;
    }
    if (hasSet && a instanceof Set && b instanceof Set) {
      if (a.size !== b.size)
        return false;
      it = a.entries();
      while (!(i = it.next()).done)
        if (!b.has(i.value[0]))
          return false;
      return true;
    }
    if (hasArrayBuffer && ArrayBuffer.isView(a) && ArrayBuffer.isView(b)) {
      length = a.length;
      if (length != b.length)
        return false;
      for (i = length; i-- !== 0; )
        if (a[i] !== b[i])
          return false;
      return true;
    }
    if (a.constructor === RegExp)
      return a.source === b.source && a.flags === b.flags;
    if (a.valueOf !== Object.prototype.valueOf && typeof a.valueOf === "function" && typeof b.valueOf === "function")
      return a.valueOf() === b.valueOf();
    if (a.toString !== Object.prototype.toString && typeof a.toString === "function" && typeof b.toString === "function")
      return a.toString() === b.toString();
    keys = Object.keys(a);
    length = keys.length;
    if (length !== Object.keys(b).length)
      return false;
    for (i = length; i-- !== 0; )
      if (!Object.prototype.hasOwnProperty.call(b, keys[i]))
        return false;
    if (hasElementType && a instanceof Element)
      return false;
    for (i = length; i-- !== 0; ) {
      if ((keys[i] === "_owner" || keys[i] === "__v" || keys[i] === "__o") && a.$$typeof) {
        continue;
      }
      if (!equal(a[keys[i]], b[keys[i]]))
        return false;
    }
    return true;
  }
  return a !== a && b !== b;
}
var reactFastCompare = function isEqual(a, b) {
  try {
    return equal(a, b);
  } catch (error) {
    if ((error.message || "").match(/stack|recursion/i)) {
      console.warn("react-fast-compare cannot handle circular refs");
      return false;
    }
    throw error;
  }
};
var props = {};
Object.defineProperty(props, "__esModule", {
  value: true
});
props.defaultProps = props.propTypes = void 0;
var _propTypes = _interopRequireDefault$1(propTypesExports);
function _interopRequireDefault$1(obj) {
  return obj && obj.__esModule ? obj : { "default": obj };
}
var string = _propTypes["default"].string, bool = _propTypes["default"].bool, number = _propTypes["default"].number, array = _propTypes["default"].array, oneOfType = _propTypes["default"].oneOfType, shape = _propTypes["default"].shape, object = _propTypes["default"].object, func = _propTypes["default"].func, node = _propTypes["default"].node;
var propTypes = {
  url: oneOfType([string, array, object]),
  playing: bool,
  loop: bool,
  controls: bool,
  volume: number,
  muted: bool,
  playbackRate: number,
  width: oneOfType([string, number]),
  height: oneOfType([string, number]),
  style: object,
  progressInterval: number,
  playsinline: bool,
  pip: bool,
  stopOnUnmount: bool,
  light: oneOfType([bool, string, object]),
  playIcon: node,
  previewTabIndex: number,
  fallback: node,
  oEmbedUrl: string,
  wrapper: oneOfType([string, func, shape({
    render: func.isRequired
  })]),
  config: shape({
    soundcloud: shape({
      options: object
    }),
    youtube: shape({
      playerVars: object,
      embedOptions: object,
      onUnstarted: func
    }),
    facebook: shape({
      appId: string,
      version: string,
      playerId: string,
      attributes: object
    }),
    dailymotion: shape({
      params: object
    }),
    vimeo: shape({
      playerOptions: object,
      title: string
    }),
    file: shape({
      attributes: object,
      tracks: array,
      forceVideo: bool,
      forceAudio: bool,
      forceHLS: bool,
      forceSafariHLS: bool,
      forceDASH: bool,
      forceFLV: bool,
      hlsOptions: object,
      hlsVersion: string,
      dashVersion: string,
      flvVersion: string
    }),
    wistia: shape({
      options: object,
      playerId: string,
      customControls: array
    }),
    mixcloud: shape({
      options: object
    }),
    twitch: shape({
      options: object,
      playerId: string
    }),
    vidyard: shape({
      options: object
    })
  }),
  onReady: func,
  onStart: func,
  onPlay: func,
  onPause: func,
  onBuffer: func,
  onBufferEnd: func,
  onEnded: func,
  onError: func,
  onDuration: func,
  onSeek: func,
  onPlaybackRateChange: func,
  onProgress: func,
  onClickPreview: func,
  onEnablePIP: func,
  onDisablePIP: func
};
props.propTypes = propTypes;
var noop = function noop2() {
};
var defaultProps = {
  playing: false,
  loop: false,
  controls: false,
  volume: null,
  muted: false,
  playbackRate: 1,
  width: "640px",
  height: "360px",
  style: {},
  progressInterval: 1e3,
  playsinline: false,
  pip: false,
  stopOnUnmount: true,
  light: false,
  fallback: null,
  wrapper: "div",
  previewTabIndex: 0,
  oEmbedUrl: "https://noembed.com/embed?url={url}",
  config: {
    soundcloud: {
      options: {
        visual: true,
        // Undocumented, but makes player fill container and look better
        buying: false,
        liking: false,
        download: false,
        sharing: false,
        show_comments: false,
        show_playcount: false
      }
    },
    youtube: {
      playerVars: {
        playsinline: 1,
        showinfo: 0,
        rel: 0,
        iv_load_policy: 3,
        modestbranding: 1
      },
      embedOptions: {},
      onUnstarted: noop
    },
    facebook: {
      appId: "1309697205772819",
      version: "v3.3",
      playerId: null,
      attributes: {}
    },
    dailymotion: {
      params: {
        api: 1,
        "endscreen-enable": false
      }
    },
    vimeo: {
      playerOptions: {
        autopause: false,
        byline: false,
        portrait: false,
        title: false
      },
      title: null
    },
    file: {
      attributes: {},
      tracks: [],
      forceVideo: false,
      forceAudio: false,
      forceHLS: false,
      forceDASH: false,
      forceFLV: false,
      hlsOptions: {},
      hlsVersion: "1.1.4",
      dashVersion: "3.1.3",
      flvVersion: "1.5.0"
    },
    wistia: {
      options: {},
      playerId: null,
      customControls: null
    },
    mixcloud: {
      options: {
        hide_cover: 1
      }
    },
    twitch: {
      options: {},
      playerId: null
    },
    vidyard: {
      options: {}
    }
  },
  onReady: noop,
  onStart: noop,
  onPlay: noop,
  onPause: noop,
  onBuffer: noop,
  onBufferEnd: noop,
  onEnded: noop,
  onError: noop,
  onDuration: noop,
  onSeek: noop,
  onPlaybackRateChange: noop,
  onProgress: noop,
  onClickPreview: noop,
  onEnablePIP: noop,
  onDisablePIP: noop
};
props.defaultProps = defaultProps;
var Player = {};
(function(exports) {
  function _typeof2(obj) {
    "@babel/helpers - typeof";
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof2 = function _typeof3(obj2) {
        return typeof obj2;
      };
    } else {
      _typeof2 = function _typeof3(obj2) {
        return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
      };
    }
    return _typeof2(obj);
  }
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports["default"] = void 0;
  var _react2 = _interopRequireWildcard2(reactExports);
  var _reactFastCompare2 = _interopRequireDefault2(reactFastCompare);
  var _props2 = props;
  var _utils2 = utils;
  function _interopRequireDefault2(obj) {
    return obj && obj.__esModule ? obj : { "default": obj };
  }
  function _getRequireWildcardCache2() {
    if (typeof WeakMap !== "function")
      return null;
    var cache = /* @__PURE__ */ new WeakMap();
    _getRequireWildcardCache2 = function _getRequireWildcardCache3() {
      return cache;
    };
    return cache;
  }
  function _interopRequireWildcard2(obj) {
    if (obj && obj.__esModule) {
      return obj;
    }
    if (obj === null || _typeof2(obj) !== "object" && typeof obj !== "function") {
      return { "default": obj };
    }
    var cache = _getRequireWildcardCache2();
    if (cache && cache.has(obj)) {
      return cache.get(obj);
    }
    var newObj = {};
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
        if (desc && (desc.get || desc.set)) {
          Object.defineProperty(newObj, key, desc);
        } else {
          newObj[key] = obj[key];
        }
      }
    }
    newObj["default"] = obj;
    if (cache) {
      cache.set(obj, newObj);
    }
    return newObj;
  }
  function _extends2() {
    _extends2 = Object.assign || function(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
    return _extends2.apply(this, arguments);
  }
  function _classCallCheck2(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties2(target, props2) {
    for (var i = 0; i < props2.length; i++) {
      var descriptor = props2[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  function _createClass2(Constructor, protoProps, staticProps) {
    if (protoProps)
      _defineProperties2(Constructor.prototype, protoProps);
    if (staticProps)
      _defineProperties2(Constructor, staticProps);
    return Constructor;
  }
  function _inherits2(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
    if (superClass)
      _setPrototypeOf2(subClass, superClass);
  }
  function _setPrototypeOf2(o, p) {
    _setPrototypeOf2 = Object.setPrototypeOf || function _setPrototypeOf3(o2, p2) {
      o2.__proto__ = p2;
      return o2;
    };
    return _setPrototypeOf2(o, p);
  }
  function _createSuper2(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct2();
    return function _createSuperInternal() {
      var Super = _getPrototypeOf2(Derived), result;
      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf2(this).constructor;
        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }
      return _possibleConstructorReturn2(this, result);
    };
  }
  function _possibleConstructorReturn2(self, call) {
    if (call && (_typeof2(call) === "object" || typeof call === "function")) {
      return call;
    }
    return _assertThisInitialized2(self);
  }
  function _assertThisInitialized2(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
  }
  function _isNativeReflectConstruct2() {
    if (typeof Reflect === "undefined" || !Reflect.construct)
      return false;
    if (Reflect.construct.sham)
      return false;
    if (typeof Proxy === "function")
      return true;
    try {
      Date.prototype.toString.call(Reflect.construct(Date, [], function() {
      }));
      return true;
    } catch (e) {
      return false;
    }
  }
  function _getPrototypeOf2(o) {
    _getPrototypeOf2 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf3(o2) {
      return o2.__proto__ || Object.getPrototypeOf(o2);
    };
    return _getPrototypeOf2(o);
  }
  function _defineProperty2(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
    } else {
      obj[key] = value;
    }
    return obj;
  }
  var SEEK_ON_PLAY_EXPIRY = 5e3;
  var Player2 = /* @__PURE__ */ function(_Component) {
    _inherits2(Player3, _Component);
    var _super = _createSuper2(Player3);
    function Player3() {
      var _this;
      _classCallCheck2(this, Player3);
      for (var _len = arguments.length, _args = new Array(_len), _key = 0; _key < _len; _key++) {
        _args[_key] = arguments[_key];
      }
      _this = _super.call.apply(_super, [this].concat(_args));
      _defineProperty2(_assertThisInitialized2(_this), "mounted", false);
      _defineProperty2(_assertThisInitialized2(_this), "isReady", false);
      _defineProperty2(_assertThisInitialized2(_this), "isPlaying", false);
      _defineProperty2(_assertThisInitialized2(_this), "isLoading", true);
      _defineProperty2(_assertThisInitialized2(_this), "loadOnReady", null);
      _defineProperty2(_assertThisInitialized2(_this), "startOnPlay", true);
      _defineProperty2(_assertThisInitialized2(_this), "seekOnPlay", null);
      _defineProperty2(_assertThisInitialized2(_this), "onDurationCalled", false);
      _defineProperty2(_assertThisInitialized2(_this), "handlePlayerMount", function(player) {
        if (_this.player) {
          _this.progress();
          return;
        }
        _this.player = player;
        _this.player.load(_this.props.url);
        _this.progress();
      });
      _defineProperty2(_assertThisInitialized2(_this), "getInternalPlayer", function(key) {
        if (!_this.player)
          return null;
        return _this.player[key];
      });
      _defineProperty2(_assertThisInitialized2(_this), "progress", function() {
        if (_this.props.url && _this.player && _this.isReady) {
          var playedSeconds = _this.getCurrentTime() || 0;
          var loadedSeconds = _this.getSecondsLoaded();
          var duration = _this.getDuration();
          if (duration) {
            var progress = {
              playedSeconds,
              played: playedSeconds / duration
            };
            if (loadedSeconds !== null) {
              progress.loadedSeconds = loadedSeconds;
              progress.loaded = loadedSeconds / duration;
            }
            if (progress.playedSeconds !== _this.prevPlayed || progress.loadedSeconds !== _this.prevLoaded) {
              _this.props.onProgress(progress);
            }
            _this.prevPlayed = progress.playedSeconds;
            _this.prevLoaded = progress.loadedSeconds;
          }
        }
        _this.progressTimeout = setTimeout(_this.progress, _this.props.progressFrequency || _this.props.progressInterval);
      });
      _defineProperty2(_assertThisInitialized2(_this), "handleReady", function() {
        if (!_this.mounted)
          return;
        _this.isReady = true;
        _this.isLoading = false;
        var _this$props = _this.props, onReady = _this$props.onReady, playing = _this$props.playing, volume = _this$props.volume, muted = _this$props.muted;
        onReady();
        if (!muted && volume !== null) {
          _this.player.setVolume(volume);
        }
        if (_this.loadOnReady) {
          _this.player.load(_this.loadOnReady, true);
          _this.loadOnReady = null;
        } else if (playing) {
          _this.player.play();
        }
        _this.handleDurationCheck();
      });
      _defineProperty2(_assertThisInitialized2(_this), "handlePlay", function() {
        _this.isPlaying = true;
        _this.isLoading = false;
        var _this$props2 = _this.props, onStart = _this$props2.onStart, onPlay = _this$props2.onPlay, playbackRate = _this$props2.playbackRate;
        if (_this.startOnPlay) {
          if (_this.player.setPlaybackRate && playbackRate !== 1) {
            _this.player.setPlaybackRate(playbackRate);
          }
          onStart();
          _this.startOnPlay = false;
        }
        onPlay();
        if (_this.seekOnPlay) {
          _this.seekTo(_this.seekOnPlay);
          _this.seekOnPlay = null;
        }
        _this.handleDurationCheck();
      });
      _defineProperty2(_assertThisInitialized2(_this), "handlePause", function(e) {
        _this.isPlaying = false;
        if (!_this.isLoading) {
          _this.props.onPause(e);
        }
      });
      _defineProperty2(_assertThisInitialized2(_this), "handleEnded", function() {
        var _this$props3 = _this.props, activePlayer = _this$props3.activePlayer, loop = _this$props3.loop, onEnded = _this$props3.onEnded;
        if (activePlayer.loopOnEnded && loop) {
          _this.seekTo(0);
        }
        if (!loop) {
          _this.isPlaying = false;
          onEnded();
        }
      });
      _defineProperty2(_assertThisInitialized2(_this), "handleError", function() {
        var _this$props4;
        _this.isLoading = false;
        (_this$props4 = _this.props).onError.apply(_this$props4, arguments);
      });
      _defineProperty2(_assertThisInitialized2(_this), "handleDurationCheck", function() {
        clearTimeout(_this.durationCheckTimeout);
        var duration = _this.getDuration();
        if (duration) {
          if (!_this.onDurationCalled) {
            _this.props.onDuration(duration);
            _this.onDurationCalled = true;
          }
        } else {
          _this.durationCheckTimeout = setTimeout(_this.handleDurationCheck, 100);
        }
      });
      _defineProperty2(_assertThisInitialized2(_this), "handleLoaded", function() {
        _this.isLoading = false;
      });
      return _this;
    }
    _createClass2(Player3, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        this.mounted = true;
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        clearTimeout(this.progressTimeout);
        clearTimeout(this.durationCheckTimeout);
        if (this.isReady && this.props.stopOnUnmount) {
          this.player.stop();
          if (this.player.disablePIP) {
            this.player.disablePIP();
          }
        }
        this.mounted = false;
      }
    }, {
      key: "componentDidUpdate",
      value: function componentDidUpdate(prevProps) {
        var _this2 = this;
        if (!this.player) {
          return;
        }
        var _this$props5 = this.props, url = _this$props5.url, playing = _this$props5.playing, volume = _this$props5.volume, muted = _this$props5.muted, playbackRate = _this$props5.playbackRate, pip = _this$props5.pip, loop = _this$props5.loop, activePlayer = _this$props5.activePlayer, disableDeferredLoading = _this$props5.disableDeferredLoading;
        if (!(0, _reactFastCompare2["default"])(prevProps.url, url)) {
          if (this.isLoading && !activePlayer.forceLoad && !disableDeferredLoading && !(0, _utils2.isMediaStream)(url)) {
            console.warn("ReactPlayer: the attempt to load ".concat(url, " is being deferred until the player has loaded"));
            this.loadOnReady = url;
            return;
          }
          this.isLoading = true;
          this.startOnPlay = true;
          this.onDurationCalled = false;
          this.player.load(url, this.isReady);
        }
        if (!prevProps.playing && playing && !this.isPlaying) {
          this.player.play();
        }
        if (prevProps.playing && !playing && this.isPlaying) {
          this.player.pause();
        }
        if (!prevProps.pip && pip && this.player.enablePIP) {
          this.player.enablePIP();
        }
        if (prevProps.pip && !pip && this.player.disablePIP) {
          this.player.disablePIP();
        }
        if (prevProps.volume !== volume && volume !== null) {
          this.player.setVolume(volume);
        }
        if (prevProps.muted !== muted) {
          if (muted) {
            this.player.mute();
          } else {
            this.player.unmute();
            if (volume !== null) {
              setTimeout(function() {
                return _this2.player.setVolume(volume);
              });
            }
          }
        }
        if (prevProps.playbackRate !== playbackRate && this.player.setPlaybackRate) {
          this.player.setPlaybackRate(playbackRate);
        }
        if (prevProps.loop !== loop && this.player.setLoop) {
          this.player.setLoop(loop);
        }
      }
    }, {
      key: "getDuration",
      value: function getDuration() {
        if (!this.isReady)
          return null;
        return this.player.getDuration();
      }
    }, {
      key: "getCurrentTime",
      value: function getCurrentTime() {
        if (!this.isReady)
          return null;
        return this.player.getCurrentTime();
      }
    }, {
      key: "getSecondsLoaded",
      value: function getSecondsLoaded() {
        if (!this.isReady)
          return null;
        return this.player.getSecondsLoaded();
      }
    }, {
      key: "seekTo",
      value: function seekTo(amount, type) {
        var _this3 = this;
        if (!this.isReady) {
          if (amount !== 0) {
            this.seekOnPlay = amount;
            setTimeout(function() {
              _this3.seekOnPlay = null;
            }, SEEK_ON_PLAY_EXPIRY);
          }
          return;
        }
        var isFraction = !type ? amount > 0 && amount < 1 : type === "fraction";
        if (isFraction) {
          var duration = this.player.getDuration();
          if (!duration) {
            console.warn("ReactPlayer: could not seek using fraction – duration not yet available");
            return;
          }
          this.player.seekTo(duration * amount);
          return;
        }
        this.player.seekTo(amount);
      }
    }, {
      key: "render",
      value: function render() {
        var Player4 = this.props.activePlayer;
        if (!Player4) {
          return null;
        }
        return /* @__PURE__ */ _react2["default"].createElement(Player4, _extends2({}, this.props, {
          onMount: this.handlePlayerMount,
          onReady: this.handleReady,
          onPlay: this.handlePlay,
          onPause: this.handlePause,
          onEnded: this.handleEnded,
          onLoaded: this.handleLoaded,
          onError: this.handleError
        }));
      }
    }]);
    return Player3;
  }(_react2.Component);
  exports["default"] = Player2;
  _defineProperty2(Player2, "displayName", "Player");
  _defineProperty2(Player2, "propTypes", _props2.propTypes);
  _defineProperty2(Player2, "defaultProps", _props2.defaultProps);
})(Player);
var Preview$1 = {};
var hasRequiredPreview;
function requirePreview() {
  if (hasRequiredPreview)
    return Preview$1;
  hasRequiredPreview = 1;
  (function(exports) {
    function _typeof2(obj) {
      "@babel/helpers - typeof";
      if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
        _typeof2 = function _typeof3(obj2) {
          return typeof obj2;
        };
      } else {
        _typeof2 = function _typeof3(obj2) {
          return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
        };
      }
      return _typeof2(obj);
    }
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;
    var _react2 = _interopRequireWildcard2(reactExports);
    function _getRequireWildcardCache2() {
      if (typeof WeakMap !== "function")
        return null;
      var cache2 = /* @__PURE__ */ new WeakMap();
      _getRequireWildcardCache2 = function _getRequireWildcardCache3() {
        return cache2;
      };
      return cache2;
    }
    function _interopRequireWildcard2(obj) {
      if (obj && obj.__esModule) {
        return obj;
      }
      if (obj === null || _typeof2(obj) !== "object" && typeof obj !== "function") {
        return { "default": obj };
      }
      var cache2 = _getRequireWildcardCache2();
      if (cache2 && cache2.has(obj)) {
        return cache2.get(obj);
      }
      var newObj = {};
      var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
          if (desc && (desc.get || desc.set)) {
            Object.defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
      newObj["default"] = obj;
      if (cache2) {
        cache2.set(obj, newObj);
      }
      return newObj;
    }
    function ownKeys2(object2, enumerableOnly) {
      var keys = Object.keys(object2);
      if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object2);
        if (enumerableOnly)
          symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object2, sym).enumerable;
          });
        keys.push.apply(keys, symbols);
      }
      return keys;
    }
    function _objectSpread2(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i] != null ? arguments[i] : {};
        if (i % 2) {
          ownKeys2(Object(source), true).forEach(function(key) {
            _defineProperty2(target, key, source[key]);
          });
        } else if (Object.getOwnPropertyDescriptors) {
          Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        } else {
          ownKeys2(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
          });
        }
      }
      return target;
    }
    function _classCallCheck2(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _defineProperties2(target, props2) {
      for (var i = 0; i < props2.length; i++) {
        var descriptor = props2[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass2(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties2(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties2(Constructor, staticProps);
      return Constructor;
    }
    function _inherits2(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
      }
      subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
      if (superClass)
        _setPrototypeOf2(subClass, superClass);
    }
    function _setPrototypeOf2(o, p) {
      _setPrototypeOf2 = Object.setPrototypeOf || function _setPrototypeOf3(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf2(o, p);
    }
    function _createSuper2(Derived) {
      var hasNativeReflectConstruct = _isNativeReflectConstruct2();
      return function _createSuperInternal() {
        var Super = _getPrototypeOf2(Derived), result;
        if (hasNativeReflectConstruct) {
          var NewTarget = _getPrototypeOf2(this).constructor;
          result = Reflect.construct(Super, arguments, NewTarget);
        } else {
          result = Super.apply(this, arguments);
        }
        return _possibleConstructorReturn2(this, result);
      };
    }
    function _possibleConstructorReturn2(self, call) {
      if (call && (_typeof2(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized2(self);
    }
    function _assertThisInitialized2(self) {
      if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return self;
    }
    function _isNativeReflectConstruct2() {
      if (typeof Reflect === "undefined" || !Reflect.construct)
        return false;
      if (Reflect.construct.sham)
        return false;
      if (typeof Proxy === "function")
        return true;
      try {
        Date.prototype.toString.call(Reflect.construct(Date, [], function() {
        }));
        return true;
      } catch (e) {
        return false;
      }
    }
    function _getPrototypeOf2(o) {
      _getPrototypeOf2 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf3(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
      };
      return _getPrototypeOf2(o);
    }
    function _defineProperty2(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
      } else {
        obj[key] = value;
      }
      return obj;
    }
    var ICON_SIZE = "64px";
    var cache = {};
    var Preview2 = /* @__PURE__ */ function(_Component) {
      _inherits2(Preview3, _Component);
      var _super = _createSuper2(Preview3);
      function Preview3() {
        var _this;
        _classCallCheck2(this, Preview3);
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        _this = _super.call.apply(_super, [this].concat(args));
        _defineProperty2(_assertThisInitialized2(_this), "mounted", false);
        _defineProperty2(_assertThisInitialized2(_this), "state", {
          image: null
        });
        _defineProperty2(_assertThisInitialized2(_this), "handleKeyPress", function(e) {
          if (e.key === "Enter" || e.key === " ") {
            _this.props.onClick();
          }
        });
        return _this;
      }
      _createClass2(Preview3, [{
        key: "componentDidMount",
        value: function componentDidMount() {
          this.mounted = true;
          this.fetchImage(this.props);
        }
      }, {
        key: "componentDidUpdate",
        value: function componentDidUpdate(prevProps) {
          var _this$props = this.props, url = _this$props.url, light = _this$props.light;
          if (prevProps.url !== url || prevProps.light !== light) {
            this.fetchImage(this.props);
          }
        }
      }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
          this.mounted = false;
        }
      }, {
        key: "fetchImage",
        value: function fetchImage(_ref) {
          var _this2 = this;
          var url = _ref.url, light = _ref.light, oEmbedUrl = _ref.oEmbedUrl;
          if (/* @__PURE__ */ _react2["default"].isValidElement(light)) {
            return;
          }
          if (typeof light === "string") {
            this.setState({
              image: light
            });
            return;
          }
          if (cache[url]) {
            this.setState({
              image: cache[url]
            });
            return;
          }
          this.setState({
            image: null
          });
          return window.fetch(oEmbedUrl.replace("{url}", url)).then(function(response) {
            return response.json();
          }).then(function(data) {
            if (data.thumbnail_url && _this2.mounted) {
              var image = data.thumbnail_url.replace("height=100", "height=480").replace("-d_295x166", "-d_640");
              _this2.setState({
                image
              });
              cache[url] = image;
            }
          });
        }
      }, {
        key: "render",
        value: function render() {
          var _this$props2 = this.props, light = _this$props2.light, onClick = _this$props2.onClick, playIcon = _this$props2.playIcon, previewTabIndex = _this$props2.previewTabIndex;
          var image = this.state.image;
          var isElement = /* @__PURE__ */ _react2["default"].isValidElement(light);
          var flexCenter = {
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          };
          var styles2 = {
            preview: _objectSpread2({
              width: "100%",
              height: "100%",
              backgroundImage: image && !isElement ? "url(".concat(image, ")") : void 0,
              backgroundSize: "cover",
              backgroundPosition: "center",
              cursor: "pointer"
            }, flexCenter),
            shadow: _objectSpread2({
              background: "radial-gradient(rgb(0, 0, 0, 0.3), rgba(0, 0, 0, 0) 60%)",
              borderRadius: ICON_SIZE,
              width: ICON_SIZE,
              height: ICON_SIZE,
              position: isElement ? "absolute" : void 0
            }, flexCenter),
            playIcon: {
              borderStyle: "solid",
              borderWidth: "16px 0 16px 26px",
              borderColor: "transparent transparent transparent white",
              marginLeft: "7px"
            }
          };
          var defaultPlayIcon = /* @__PURE__ */ _react2["default"].createElement("div", {
            style: styles2.shadow,
            className: "react-player__shadow"
          }, /* @__PURE__ */ _react2["default"].createElement("div", {
            style: styles2.playIcon,
            className: "react-player__play-icon"
          }));
          return /* @__PURE__ */ _react2["default"].createElement("div", {
            style: styles2.preview,
            className: "react-player__preview",
            onClick,
            tabIndex: previewTabIndex,
            onKeyPress: this.handleKeyPress
          }, isElement ? light : null, playIcon || defaultPlayIcon);
        }
      }]);
      return Preview3;
    }(_react2.Component);
    exports["default"] = Preview2;
  })(Preview$1);
  return Preview$1;
}
Object.defineProperty(ReactPlayer$1, "__esModule", {
  value: true
});
ReactPlayer$1.createReactPlayer = void 0;
var _react = _interopRequireWildcard(reactExports);
var _deepmerge = _interopRequireDefault(cjs);
var _memoizeOne = _interopRequireDefault(require$$2);
var _reactFastCompare = _interopRequireDefault(reactFastCompare);
var _props = props;
var _utils = utils;
var _Player3 = _interopRequireDefault(Player);
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { "default": obj };
}
function _typeof(obj) {
  "@babel/helpers - typeof";
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof2(obj2) {
      return typeof obj2;
    };
  } else {
    _typeof = function _typeof2(obj2) {
      return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
    };
  }
  return _typeof(obj);
}
function ownKeys(object2, enumerableOnly) {
  var keys = Object.keys(object2);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object2);
    if (enumerableOnly)
      symbols = symbols.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object2, sym).enumerable;
      });
    keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    if (i % 2) {
      ownKeys(Object(source), true).forEach(function(key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function(key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }
  return target;
}
function _extends() {
  _extends = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}
function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray(o, minLen);
}
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter))
    return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr))
    return _arrayLikeToArray(arr);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties(target, props2) {
  for (var i = 0; i < props2.length; i++) {
    var descriptor = props2[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor)
      descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps)
    _defineProperties(Constructor.prototype, protoProps);
  if (staticProps)
    _defineProperties(Constructor, staticProps);
  return Constructor;
}
function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
  if (superClass)
    _setPrototypeOf(subClass, superClass);
}
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
    o2.__proto__ = p2;
    return o2;
  };
  return _setPrototypeOf(o, p);
}
function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived), result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn(this, result);
  };
}
function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }
  return _assertThisInitialized(self);
}
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}
function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct)
    return false;
  if (Reflect.construct.sham)
    return false;
  if (typeof Proxy === "function")
    return true;
  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function() {
    }));
    return true;
  } catch (e) {
    return false;
  }
}
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
    return o2.__proto__ || Object.getPrototypeOf(o2);
  };
  return _getPrototypeOf(o);
}
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function")
    return null;
  var cache = /* @__PURE__ */ new WeakMap();
  _getRequireWildcardCache = function _getRequireWildcardCache2() {
    return cache;
  };
  return cache;
}
function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }
  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return { "default": obj };
  }
  var cache = _getRequireWildcardCache();
  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }
  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }
  newObj["default"] = obj;
  if (cache) {
    cache.set(obj, newObj);
  }
  return newObj;
}
var Preview = /* @__PURE__ */ (0, _react.lazy)(function() {
  return Promise.resolve().then(function() {
    return _interopRequireWildcard(requirePreview());
  });
});
var IS_BROWSER = typeof window !== "undefined" && window.document;
var IS_GLOBAL = typeof commonjsGlobal !== "undefined" && commonjsGlobal.window && commonjsGlobal.window.document;
var SUPPORTED_PROPS = Object.keys(_props.propTypes);
var UniversalSuspense = IS_BROWSER || IS_GLOBAL ? _react.Suspense : function() {
  return null;
};
var customPlayers = [];
var createReactPlayer = function createReactPlayer2(players2, fallback) {
  var _class, _temp;
  return _temp = _class = /* @__PURE__ */ function(_Component) {
    _inherits(ReactPlayer2, _Component);
    var _super = _createSuper(ReactPlayer2);
    function ReactPlayer2() {
      var _this;
      _classCallCheck(this, ReactPlayer2);
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      _this = _super.call.apply(_super, [this].concat(args));
      _defineProperty(_assertThisInitialized(_this), "state", {
        showPreview: !!_this.props.light
      });
      _defineProperty(_assertThisInitialized(_this), "references", {
        wrapper: function wrapper(_wrapper) {
          _this.wrapper = _wrapper;
        },
        player: function player(_player) {
          _this.player = _player;
        }
      });
      _defineProperty(_assertThisInitialized(_this), "handleClickPreview", function(e) {
        _this.setState({
          showPreview: false
        });
        _this.props.onClickPreview(e);
      });
      _defineProperty(_assertThisInitialized(_this), "showPreview", function() {
        _this.setState({
          showPreview: true
        });
      });
      _defineProperty(_assertThisInitialized(_this), "getDuration", function() {
        if (!_this.player)
          return null;
        return _this.player.getDuration();
      });
      _defineProperty(_assertThisInitialized(_this), "getCurrentTime", function() {
        if (!_this.player)
          return null;
        return _this.player.getCurrentTime();
      });
      _defineProperty(_assertThisInitialized(_this), "getSecondsLoaded", function() {
        if (!_this.player)
          return null;
        return _this.player.getSecondsLoaded();
      });
      _defineProperty(_assertThisInitialized(_this), "getInternalPlayer", function() {
        var key = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "player";
        if (!_this.player)
          return null;
        return _this.player.getInternalPlayer(key);
      });
      _defineProperty(_assertThisInitialized(_this), "seekTo", function(fraction, type) {
        if (!_this.player)
          return null;
        _this.player.seekTo(fraction, type);
      });
      _defineProperty(_assertThisInitialized(_this), "handleReady", function() {
        _this.props.onReady(_assertThisInitialized(_this));
      });
      _defineProperty(_assertThisInitialized(_this), "getActivePlayer", (0, _memoizeOne["default"])(function(url) {
        for (var _i = 0, _arr = [].concat(customPlayers, _toConsumableArray(players2)); _i < _arr.length; _i++) {
          var player = _arr[_i];
          if (player.canPlay(url)) {
            return player;
          }
        }
        if (fallback) {
          return fallback;
        }
        return null;
      }));
      _defineProperty(_assertThisInitialized(_this), "getConfig", (0, _memoizeOne["default"])(function(url, key) {
        var config = _this.props.config;
        return _deepmerge["default"].all([_props.defaultProps.config, _props.defaultProps.config[key] || {}, config, config[key] || {}]);
      }));
      _defineProperty(_assertThisInitialized(_this), "getAttributes", (0, _memoizeOne["default"])(function(url) {
        return (0, _utils.omit)(_this.props, SUPPORTED_PROPS);
      }));
      _defineProperty(_assertThisInitialized(_this), "renderActivePlayer", function(url) {
        if (!url)
          return null;
        var player = _this.getActivePlayer(url);
        if (!player)
          return null;
        var config = _this.getConfig(url, player.key);
        return /* @__PURE__ */ _react["default"].createElement(_Player3["default"], _extends({}, _this.props, {
          key: player.key,
          ref: _this.references.player,
          config,
          activePlayer: player.lazyPlayer || player,
          onReady: _this.handleReady
        }));
      });
      return _this;
    }
    _createClass(ReactPlayer2, [{
      key: "shouldComponentUpdate",
      value: function shouldComponentUpdate(nextProps, nextState) {
        return !(0, _reactFastCompare["default"])(this.props, nextProps) || !(0, _reactFastCompare["default"])(this.state, nextState);
      }
    }, {
      key: "componentDidUpdate",
      value: function componentDidUpdate(prevProps) {
        var light = this.props.light;
        if (!prevProps.light && light) {
          this.setState({
            showPreview: true
          });
        }
        if (prevProps.light && !light) {
          this.setState({
            showPreview: false
          });
        }
      }
    }, {
      key: "renderPreview",
      value: function renderPreview(url) {
        if (!url)
          return null;
        var _this$props = this.props, light = _this$props.light, playIcon = _this$props.playIcon, previewTabIndex = _this$props.previewTabIndex, oEmbedUrl = _this$props.oEmbedUrl;
        return /* @__PURE__ */ _react["default"].createElement(Preview, {
          url,
          light,
          playIcon,
          previewTabIndex,
          oEmbedUrl,
          onClick: this.handleClickPreview
        });
      }
    }, {
      key: "render",
      value: function render() {
        var _this$props2 = this.props, url = _this$props2.url, style = _this$props2.style, width = _this$props2.width, height = _this$props2.height, fallback2 = _this$props2.fallback, Wrapper = _this$props2.wrapper;
        var showPreview = this.state.showPreview;
        var attributes = this.getAttributes(url);
        var wrapperRef = typeof Wrapper === "string" ? this.references.wrapper : void 0;
        return /* @__PURE__ */ _react["default"].createElement(Wrapper, _extends({
          ref: wrapperRef,
          style: _objectSpread(_objectSpread({}, style), {}, {
            width,
            height
          })
        }, attributes), /* @__PURE__ */ _react["default"].createElement(UniversalSuspense, {
          fallback: fallback2
        }, showPreview ? this.renderPreview(url) : this.renderActivePlayer(url)));
      }
    }]);
    return ReactPlayer2;
  }(_react.Component), _defineProperty(_class, "displayName", "ReactPlayer"), _defineProperty(_class, "propTypes", _props.propTypes), _defineProperty(_class, "defaultProps", _props.defaultProps), _defineProperty(_class, "addCustomPlayer", function(player) {
    customPlayers.push(player);
  }), _defineProperty(_class, "removeCustomPlayers", function() {
    customPlayers.length = 0;
  }), _defineProperty(_class, "canPlay", function(url) {
    for (var _i2 = 0, _arr2 = [].concat(customPlayers, _toConsumableArray(players2)); _i2 < _arr2.length; _i2++) {
      var _Player = _arr2[_i2];
      if (_Player.canPlay(url)) {
        return true;
      }
    }
    return false;
  }), _defineProperty(_class, "canEnablePIP", function(url) {
    for (var _i3 = 0, _arr3 = [].concat(customPlayers, _toConsumableArray(players2)); _i3 < _arr3.length; _i3++) {
      var _Player2 = _arr3[_i3];
      if (_Player2.canEnablePIP && _Player2.canEnablePIP(url)) {
        return true;
      }
    }
    return false;
  }), _temp;
};
ReactPlayer$1.createReactPlayer = createReactPlayer;
(function(exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports["default"] = void 0;
  var _players = _interopRequireDefault2(players);
  var _ReactPlayer = ReactPlayer$1;
  function _interopRequireDefault2(obj) {
    return obj && obj.__esModule ? obj : { "default": obj };
  }
  var fallback = _players["default"][_players["default"].length - 1];
  var _default = (0, _ReactPlayer.createReactPlayer)(_players["default"], fallback);
  exports["default"] = _default;
})(lib);
const ReactPlayer = /* @__PURE__ */ getDefaultExportFromCjs(lib);
export {
  CardMedia$1 as C,
  DateTimePicker as D,
  ErrorOutlineOutlined as E,
  Layout as L,
  PropTypes as P,
  RadioGroup$1 as R,
  TimePicker as T,
  Radio$1 as a,
  ReactPlayer as b,
  ThemeProvider as c,
  propTypesExports as p
};
