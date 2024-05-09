import { g as generateUtilityClass, f as generateUtilityClasses, _ as _extends, r as reactExports, am as duration, b as _objectWithoutPropertiesLoose, j as jsxRuntimeExports, d as clsx, q as interopRequireDefaultExports } from "./index-DqOHBPA_.js";
import { h as styled, e as useThemeProps, aN as Transition, p as useTheme, l as useTimeout, b as useForkRef, c as composeClasses, bd as getTransitionProps, j as Paper, v as useControlled, B as ButtonBase, D as requireCreateSvgIcon } from "./use-service-B2Fih2ge.js";
import { z as accordionClasses, B as useSlot, D as getAccordionUtilityClass, G as accordionSummaryClasses, H as getAccordionSummaryUtilityClass } from "./Web-DdmaLZWw.js";
function getCollapseUtilityClass(slot) {
  return generateUtilityClass("MuiCollapse", slot);
}
generateUtilityClasses("MuiCollapse", ["root", "horizontal", "vertical", "entered", "hidden", "wrapper", "wrapperInner"]);
const _excluded$3 = ["addEndListener", "children", "className", "collapsedSize", "component", "easing", "in", "onEnter", "onEntered", "onEntering", "onExit", "onExited", "onExiting", "orientation", "style", "timeout", "TransitionComponent"];
const useUtilityClasses$3 = (ownerState) => {
  const {
    orientation,
    classes
  } = ownerState;
  const slots = {
    root: ["root", "".concat(orientation)],
    entered: ["entered"],
    hidden: ["hidden"],
    wrapper: ["wrapper", "".concat(orientation)],
    wrapperInner: ["wrapperInner", "".concat(orientation)]
  };
  return composeClasses(slots, getCollapseUtilityClass, classes);
};
const CollapseRoot = styled("div", {
  name: "MuiCollapse",
  slot: "Root",
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.root, styles[ownerState.orientation], ownerState.state === "entered" && styles.entered, ownerState.state === "exited" && !ownerState.in && ownerState.collapsedSize === "0px" && styles.hidden];
  }
})(({
  theme,
  ownerState
}) => _extends({
  height: 0,
  overflow: "hidden",
  transition: theme.transitions.create("height")
}, ownerState.orientation === "horizontal" && {
  height: "auto",
  width: 0,
  transition: theme.transitions.create("width")
}, ownerState.state === "entered" && _extends({
  height: "auto",
  overflow: "visible"
}, ownerState.orientation === "horizontal" && {
  width: "auto"
}), ownerState.state === "exited" && !ownerState.in && ownerState.collapsedSize === "0px" && {
  visibility: "hidden"
}));
const CollapseWrapper = styled("div", {
  name: "MuiCollapse",
  slot: "Wrapper",
  overridesResolver: (props, styles) => styles.wrapper
})(({
  ownerState
}) => _extends({
  // Hack to get children with a negative margin to not falsify the height computation.
  display: "flex",
  width: "100%"
}, ownerState.orientation === "horizontal" && {
  width: "auto",
  height: "100%"
}));
const CollapseWrapperInner = styled("div", {
  name: "MuiCollapse",
  slot: "WrapperInner",
  overridesResolver: (props, styles) => styles.wrapperInner
})(({
  ownerState
}) => _extends({
  width: "100%"
}, ownerState.orientation === "horizontal" && {
  width: "auto",
  height: "100%"
}));
const Collapse = /* @__PURE__ */ reactExports.forwardRef(function Collapse2(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiCollapse"
  });
  const {
    addEndListener,
    children,
    className,
    collapsedSize: collapsedSizeProp = "0px",
    component,
    easing,
    in: inProp,
    onEnter,
    onEntered,
    onEntering,
    onExit,
    onExited,
    onExiting,
    orientation = "vertical",
    style,
    timeout = duration.standard,
    // eslint-disable-next-line react/prop-types
    TransitionComponent = Transition
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded$3);
  const ownerState = _extends({}, props, {
    orientation,
    collapsedSize: collapsedSizeProp
  });
  const classes = useUtilityClasses$3(ownerState);
  const theme = useTheme();
  const timer = useTimeout();
  const wrapperRef = reactExports.useRef(null);
  const autoTransitionDuration = reactExports.useRef();
  const collapsedSize = typeof collapsedSizeProp === "number" ? "".concat(collapsedSizeProp, "px") : collapsedSizeProp;
  const isHorizontal = orientation === "horizontal";
  const size = isHorizontal ? "width" : "height";
  const nodeRef = reactExports.useRef(null);
  const handleRef = useForkRef(ref, nodeRef);
  const normalizedTransitionCallback = (callback) => (maybeIsAppearing) => {
    if (callback) {
      const node = nodeRef.current;
      if (maybeIsAppearing === void 0) {
        callback(node);
      } else {
        callback(node, maybeIsAppearing);
      }
    }
  };
  const getWrapperSize = () => wrapperRef.current ? wrapperRef.current[isHorizontal ? "clientWidth" : "clientHeight"] : 0;
  const handleEnter = normalizedTransitionCallback((node, isAppearing) => {
    if (wrapperRef.current && isHorizontal) {
      wrapperRef.current.style.position = "absolute";
    }
    node.style[size] = collapsedSize;
    if (onEnter) {
      onEnter(node, isAppearing);
    }
  });
  const handleEntering = normalizedTransitionCallback((node, isAppearing) => {
    const wrapperSize = getWrapperSize();
    if (wrapperRef.current && isHorizontal) {
      wrapperRef.current.style.position = "";
    }
    const {
      duration: transitionDuration,
      easing: transitionTimingFunction
    } = getTransitionProps({
      style,
      timeout,
      easing
    }, {
      mode: "enter"
    });
    if (timeout === "auto") {
      const duration2 = theme.transitions.getAutoHeightDuration(wrapperSize);
      node.style.transitionDuration = "".concat(duration2, "ms");
      autoTransitionDuration.current = duration2;
    } else {
      node.style.transitionDuration = typeof transitionDuration === "string" ? transitionDuration : "".concat(transitionDuration, "ms");
    }
    node.style[size] = "".concat(wrapperSize, "px");
    node.style.transitionTimingFunction = transitionTimingFunction;
    if (onEntering) {
      onEntering(node, isAppearing);
    }
  });
  const handleEntered = normalizedTransitionCallback((node, isAppearing) => {
    node.style[size] = "auto";
    if (onEntered) {
      onEntered(node, isAppearing);
    }
  });
  const handleExit = normalizedTransitionCallback((node) => {
    node.style[size] = "".concat(getWrapperSize(), "px");
    if (onExit) {
      onExit(node);
    }
  });
  const handleExited = normalizedTransitionCallback(onExited);
  const handleExiting = normalizedTransitionCallback((node) => {
    const wrapperSize = getWrapperSize();
    const {
      duration: transitionDuration,
      easing: transitionTimingFunction
    } = getTransitionProps({
      style,
      timeout,
      easing
    }, {
      mode: "exit"
    });
    if (timeout === "auto") {
      const duration2 = theme.transitions.getAutoHeightDuration(wrapperSize);
      node.style.transitionDuration = "".concat(duration2, "ms");
      autoTransitionDuration.current = duration2;
    } else {
      node.style.transitionDuration = typeof transitionDuration === "string" ? transitionDuration : "".concat(transitionDuration, "ms");
    }
    node.style[size] = collapsedSize;
    node.style.transitionTimingFunction = transitionTimingFunction;
    if (onExiting) {
      onExiting(node);
    }
  });
  const handleAddEndListener = (next) => {
    if (timeout === "auto") {
      timer.start(autoTransitionDuration.current || 0, next);
    }
    if (addEndListener) {
      addEndListener(nodeRef.current, next);
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(TransitionComponent, _extends({
    in: inProp,
    onEnter: handleEnter,
    onEntered: handleEntered,
    onEntering: handleEntering,
    onExit: handleExit,
    onExited: handleExited,
    onExiting: handleExiting,
    addEndListener: handleAddEndListener,
    nodeRef,
    timeout: timeout === "auto" ? null : timeout
  }, other, {
    children: (state, childProps) => /* @__PURE__ */ jsxRuntimeExports.jsx(CollapseRoot, _extends({
      as: component,
      className: clsx(classes.root, className, {
        "entered": classes.entered,
        "exited": !inProp && collapsedSize === "0px" && classes.hidden
      }[state]),
      style: _extends({
        [isHorizontal ? "minWidth" : "minHeight"]: collapsedSize
      }, style),
      ref: handleRef
    }, childProps, {
      // `ownerState` is set after `childProps` to override any existing `ownerState` property in `childProps`
      // that might have been forwarded from the Transition component.
      ownerState: _extends({}, ownerState, {
        state
      }),
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(CollapseWrapper, {
        ownerState: _extends({}, ownerState, {
          state
        }),
        className: classes.wrapper,
        ref: wrapperRef,
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(CollapseWrapperInner, {
          ownerState: _extends({}, ownerState, {
            state
          }),
          className: classes.wrapperInner,
          children
        })
      })
    }))
  }));
});
Collapse.muiSupportAuto = true;
const Collapse$1 = Collapse;
const AccordionContext = /* @__PURE__ */ reactExports.createContext({});
const _excluded$2 = ["children", "className", "defaultExpanded", "disabled", "disableGutters", "expanded", "onChange", "square", "slots", "slotProps", "TransitionComponent", "TransitionProps"];
const useUtilityClasses$2 = (ownerState) => {
  const {
    classes,
    square,
    expanded,
    disabled,
    disableGutters
  } = ownerState;
  const slots = {
    root: ["root", !square && "rounded", expanded && "expanded", disabled && "disabled", !disableGutters && "gutters"],
    region: ["region"]
  };
  return composeClasses(slots, getAccordionUtilityClass, classes);
};
const AccordionRoot = styled(Paper, {
  name: "MuiAccordion",
  slot: "Root",
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [{
      ["& .".concat(accordionClasses.region)]: styles.region
    }, styles.root, !ownerState.square && styles.rounded, !ownerState.disableGutters && styles.gutters];
  }
})(({
  theme
}) => {
  const transition = {
    duration: theme.transitions.duration.shortest
  };
  return {
    position: "relative",
    transition: theme.transitions.create(["margin"], transition),
    overflowAnchor: "none",
    // Keep the same scrolling position
    "&::before": {
      position: "absolute",
      left: 0,
      top: -1,
      right: 0,
      height: 1,
      content: '""',
      opacity: 1,
      backgroundColor: (theme.vars || theme).palette.divider,
      transition: theme.transitions.create(["opacity", "background-color"], transition)
    },
    "&:first-of-type": {
      "&::before": {
        display: "none"
      }
    },
    ["&.".concat(accordionClasses.expanded)]: {
      "&::before": {
        opacity: 0
      },
      "&:first-of-type": {
        marginTop: 0
      },
      "&:last-of-type": {
        marginBottom: 0
      },
      "& + &": {
        "&::before": {
          display: "none"
        }
      }
    },
    ["&.".concat(accordionClasses.disabled)]: {
      backgroundColor: (theme.vars || theme).palette.action.disabledBackground
    }
  };
}, ({
  theme,
  ownerState
}) => _extends({}, !ownerState.square && {
  borderRadius: 0,
  "&:first-of-type": {
    borderTopLeftRadius: (theme.vars || theme).shape.borderRadius,
    borderTopRightRadius: (theme.vars || theme).shape.borderRadius
  },
  "&:last-of-type": {
    borderBottomLeftRadius: (theme.vars || theme).shape.borderRadius,
    borderBottomRightRadius: (theme.vars || theme).shape.borderRadius,
    // Fix a rendering issue on Edge
    "@supports (-ms-ime-align: auto)": {
      borderBottomLeftRadius: 0,
      borderBottomRightRadius: 0
    }
  }
}, !ownerState.disableGutters && {
  ["&.".concat(accordionClasses.expanded)]: {
    margin: "16px 0"
  }
}));
const Accordion = /* @__PURE__ */ reactExports.forwardRef(function Accordion2(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiAccordion"
  });
  const {
    children: childrenProp,
    className,
    defaultExpanded = false,
    disabled = false,
    disableGutters = false,
    expanded: expandedProp,
    onChange,
    square = false,
    slots = {},
    slotProps = {},
    TransitionComponent: TransitionComponentProp,
    TransitionProps: TransitionPropsProp
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded$2);
  const [expanded, setExpandedState] = useControlled({
    controlled: expandedProp,
    default: defaultExpanded,
    name: "Accordion",
    state: "expanded"
  });
  const handleChange = reactExports.useCallback((event) => {
    setExpandedState(!expanded);
    if (onChange) {
      onChange(event, !expanded);
    }
  }, [expanded, onChange, setExpandedState]);
  const [summary, ...children] = reactExports.Children.toArray(childrenProp);
  const contextValue = reactExports.useMemo(() => ({
    expanded,
    disabled,
    disableGutters,
    toggle: handleChange
  }), [expanded, disabled, disableGutters, handleChange]);
  const ownerState = _extends({}, props, {
    square,
    disabled,
    disableGutters,
    expanded
  });
  const classes = useUtilityClasses$2(ownerState);
  const backwardCompatibleSlots = _extends({
    transition: TransitionComponentProp
  }, slots);
  const backwardCompatibleSlotProps = _extends({
    transition: TransitionPropsProp
  }, slotProps);
  const [TransitionSlot, transitionProps] = useSlot("transition", {
    elementType: Collapse$1,
    externalForwardedProps: {
      slots: backwardCompatibleSlots,
      slotProps: backwardCompatibleSlotProps
    },
    ownerState
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(AccordionRoot, _extends({
    className: clsx(classes.root, className),
    ref,
    ownerState,
    square
  }, other, {
    children: [/* @__PURE__ */ jsxRuntimeExports.jsx(AccordionContext.Provider, {
      value: contextValue,
      children: summary
    }), /* @__PURE__ */ jsxRuntimeExports.jsx(TransitionSlot, _extends({
      in: expanded,
      timeout: "auto"
    }, transitionProps, {
      children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
        "aria-labelledby": summary.props.id,
        id: summary.props["aria-controls"],
        role: "region",
        className: classes.region,
        children
      })
    }))]
  }));
});
const Accordion$1 = Accordion;
function getAccordionDetailsUtilityClass(slot) {
  return generateUtilityClass("MuiAccordionDetails", slot);
}
generateUtilityClasses("MuiAccordionDetails", ["root"]);
const _excluded$1 = ["className"];
const useUtilityClasses$1 = (ownerState) => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ["root"]
  };
  return composeClasses(slots, getAccordionDetailsUtilityClass, classes);
};
const AccordionDetailsRoot = styled("div", {
  name: "MuiAccordionDetails",
  slot: "Root",
  overridesResolver: (props, styles) => styles.root
})(({
  theme
}) => ({
  padding: theme.spacing(1, 2, 2)
}));
const AccordionDetails = /* @__PURE__ */ reactExports.forwardRef(function AccordionDetails2(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiAccordionDetails"
  });
  const {
    className
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded$1);
  const ownerState = props;
  const classes = useUtilityClasses$1(ownerState);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(AccordionDetailsRoot, _extends({
    className: clsx(classes.root, className),
    ref,
    ownerState
  }, other));
});
const AccordionDetails$1 = AccordionDetails;
const _excluded = ["children", "className", "expandIcon", "focusVisibleClassName", "onClick"];
const useUtilityClasses = (ownerState) => {
  const {
    classes,
    expanded,
    disabled,
    disableGutters
  } = ownerState;
  const slots = {
    root: ["root", expanded && "expanded", disabled && "disabled", !disableGutters && "gutters"],
    focusVisible: ["focusVisible"],
    content: ["content", expanded && "expanded", !disableGutters && "contentGutters"],
    expandIconWrapper: ["expandIconWrapper", expanded && "expanded"]
  };
  return composeClasses(slots, getAccordionSummaryUtilityClass, classes);
};
const AccordionSummaryRoot = styled(ButtonBase, {
  name: "MuiAccordionSummary",
  slot: "Root",
  overridesResolver: (props, styles) => styles.root
})(({
  theme,
  ownerState
}) => {
  const transition = {
    duration: theme.transitions.duration.shortest
  };
  return _extends({
    display: "flex",
    minHeight: 48,
    padding: theme.spacing(0, 2),
    transition: theme.transitions.create(["min-height", "background-color"], transition),
    ["&.".concat(accordionSummaryClasses.focusVisible)]: {
      backgroundColor: (theme.vars || theme).palette.action.focus
    },
    ["&.".concat(accordionSummaryClasses.disabled)]: {
      opacity: (theme.vars || theme).palette.action.disabledOpacity
    },
    ["&:hover:not(.".concat(accordionSummaryClasses.disabled, ")")]: {
      cursor: "pointer"
    }
  }, !ownerState.disableGutters && {
    ["&.".concat(accordionSummaryClasses.expanded)]: {
      minHeight: 64
    }
  });
});
const AccordionSummaryContent = styled("div", {
  name: "MuiAccordionSummary",
  slot: "Content",
  overridesResolver: (props, styles) => styles.content
})(({
  theme,
  ownerState
}) => _extends({
  display: "flex",
  flexGrow: 1,
  margin: "12px 0"
}, !ownerState.disableGutters && {
  transition: theme.transitions.create(["margin"], {
    duration: theme.transitions.duration.shortest
  }),
  ["&.".concat(accordionSummaryClasses.expanded)]: {
    margin: "20px 0"
  }
}));
const AccordionSummaryExpandIconWrapper = styled("div", {
  name: "MuiAccordionSummary",
  slot: "ExpandIconWrapper",
  overridesResolver: (props, styles) => styles.expandIconWrapper
})(({
  theme
}) => ({
  display: "flex",
  color: (theme.vars || theme).palette.action.active,
  transform: "rotate(0deg)",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest
  }),
  ["&.".concat(accordionSummaryClasses.expanded)]: {
    transform: "rotate(180deg)"
  }
}));
const AccordionSummary = /* @__PURE__ */ reactExports.forwardRef(function AccordionSummary2(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiAccordionSummary"
  });
  const {
    children,
    className,
    expandIcon,
    focusVisibleClassName,
    onClick
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded);
  const {
    disabled = false,
    disableGutters,
    expanded,
    toggle
  } = reactExports.useContext(AccordionContext);
  const handleChange = (event) => {
    if (toggle) {
      toggle(event);
    }
    if (onClick) {
      onClick(event);
    }
  };
  const ownerState = _extends({}, props, {
    expanded,
    disabled,
    disableGutters
  });
  const classes = useUtilityClasses(ownerState);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(AccordionSummaryRoot, _extends({
    focusRipple: false,
    disableRipple: true,
    disabled,
    component: "div",
    "aria-expanded": expanded,
    className: clsx(classes.root, className),
    focusVisibleClassName: clsx(classes.focusVisible, focusVisibleClassName),
    onClick: handleChange,
    ref,
    ownerState
  }, other, {
    children: [/* @__PURE__ */ jsxRuntimeExports.jsx(AccordionSummaryContent, {
      className: classes.content,
      ownerState,
      children
    }), expandIcon && /* @__PURE__ */ jsxRuntimeExports.jsx(AccordionSummaryExpandIconWrapper, {
      className: classes.expandIconWrapper,
      ownerState,
      children: expandIcon
    })]
  }));
});
const AccordionSummary$1 = AccordionSummary;
var ExpandMore = {};
var _interopRequireDefault = interopRequireDefaultExports;
Object.defineProperty(ExpandMore, "__esModule", {
  value: true
});
var default_1 = ExpandMore.default = void 0;
var _createSvgIcon = _interopRequireDefault(requireCreateSvgIcon());
var _jsxRuntime = jsxRuntimeExports;
var _default = (0, _createSvgIcon.default)(/* @__PURE__ */ (0, _jsxRuntime.jsx)("path", {
  d: "M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"
}), "ExpandMore");
default_1 = ExpandMore.default = _default;
export {
  Accordion$1 as A,
  Collapse$1 as C,
  AccordionSummary$1 as a,
  AccordionDetails$1 as b,
  default_1 as d
};
//# sourceMappingURL=ExpandMore-C4KCK0FI.js.map
