import { w as generateUtilityClass, v as generateUtilityClasses, x as styled, s as _extends, r as reactExports, D as useThemeProps, cn as duration, co as Transition, _ as _objectWithoutPropertiesLoose, q as useTheme, ak as useForkRef, j as jsxRuntimeExports, H as clsx, N as composeClasses, cp as getTransitionProps, X as Paper, ai as useControlled, ar as ButtonBase, O as requireCreateSvgIcon, Q as interopRequireDefaultExports, u as useTranslation, h as useNavigate, aL as useSelector, a8 as LoadingIndicator, R as Modal, B as Box, T as Typography, a as TextField, f as FormHelperText, g as Button, S as SurveyService, p as processError, P as PROCESSED_ERRORS, aK as useDispatch, cq as surveyAttributeChangedImmediate, cr as surveyAttributeChanged, cs as surveyReceived, c3 as Snackbar, c4 as Alert, o as CircularProgress, V as getDefaultExportFromCjs, aV as React, a3 as rtlLanguage, ct as sharingUrl, e as IconButton, b as FormControl, W as FormControlLabel, aa as Checkbox, Y as TableContainer, Z as Table, $ as TableHead, a0 as TableRow, y as TableCell, a1 as TableBody, cu as Backdrop, cv as permissionsLoading, cw as permissionsReceived, cx as onError, cy as onErrorSeen } from "./index-ad8f0a8b.js";
import { r as routes } from "./Logo.module-c4ee83ed.js";
import { P as ProcessedError } from "./index-caf3b1ab.js";
import { b as SURVEY_STATUS, A as AdditionalLanguages, a as SurveyActiveFromTo, c as SURVEY } from "./survey-6e5225d4.js";
import { i as isSurveyAdmin, a as isSurveyor } from "./roles-32b0c89d.js";
import { l as localDateToServerDateTime } from "./DateUtils-a37c0640.js";
import { S as Stack } from "./Stack-191cebc4.js";
import { D as Delete, U as UserDelete } from "./index-44cd111b.js";
import { U as UserService } from "./UserService-0ad19e14.js";
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
    root: ["root", `${orientation}`],
    entered: ["entered"],
    hidden: ["hidden"],
    wrapper: ["wrapper", `${orientation}`],
    wrapperInner: ["wrapperInner", `${orientation}`]
  };
  return composeClasses(slots, getCollapseUtilityClass, classes);
};
const CollapseRoot = styled("div", {
  name: "MuiCollapse",
  slot: "Root",
  overridesResolver: (props, styles2) => {
    const {
      ownerState
    } = props;
    return [styles2.root, styles2[ownerState.orientation], ownerState.state === "entered" && styles2.entered, ownerState.state === "exited" && !ownerState.in && ownerState.collapsedSize === "0px" && styles2.hidden];
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
  overridesResolver: (props, styles2) => styles2.wrapper
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
  overridesResolver: (props, styles2) => styles2.wrapperInner
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
  const timer = reactExports.useRef();
  const wrapperRef = reactExports.useRef(null);
  const autoTransitionDuration = reactExports.useRef();
  const collapsedSize = typeof collapsedSizeProp === "number" ? `${collapsedSizeProp}px` : collapsedSizeProp;
  const isHorizontal = orientation === "horizontal";
  const size = isHorizontal ? "width" : "height";
  reactExports.useEffect(() => {
    return () => {
      clearTimeout(timer.current);
    };
  }, []);
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
      node.style.transitionDuration = `${duration2}ms`;
      autoTransitionDuration.current = duration2;
    } else {
      node.style.transitionDuration = typeof transitionDuration === "string" ? transitionDuration : `${transitionDuration}ms`;
    }
    node.style[size] = `${wrapperSize}px`;
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
    node.style[size] = `${getWrapperSize()}px`;
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
      node.style.transitionDuration = `${duration2}ms`;
      autoTransitionDuration.current = duration2;
    } else {
      node.style.transitionDuration = typeof transitionDuration === "string" ? transitionDuration : `${transitionDuration}ms`;
    }
    node.style[size] = collapsedSize;
    node.style.transitionTimingFunction = transitionTimingFunction;
    if (onExiting) {
      onExiting(node);
    }
  });
  const handleAddEndListener = (next) => {
    if (timeout === "auto") {
      timer.current = setTimeout(next, autoTransitionDuration.current || 0);
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
      ownerState: _extends({}, ownerState, {
        state
      }),
      ref: handleRef
    }, childProps, {
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
const AccordionContext$1 = AccordionContext;
function getAccordionUtilityClass(slot) {
  return generateUtilityClass("MuiAccordion", slot);
}
const accordionClasses = generateUtilityClasses("MuiAccordion", ["root", "rounded", "expanded", "disabled", "gutters", "region"]);
const accordionClasses$1 = accordionClasses;
const _excluded$2 = ["children", "className", "defaultExpanded", "disabled", "disableGutters", "expanded", "onChange", "square", "TransitionComponent", "TransitionProps"];
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
  overridesResolver: (props, styles2) => {
    const {
      ownerState
    } = props;
    return [{
      [`& .${accordionClasses$1.region}`]: styles2.region
    }, styles2.root, !ownerState.square && styles2.rounded, !ownerState.disableGutters && styles2.gutters];
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
    "&:before": {
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
      "&:before": {
        display: "none"
      }
    },
    [`&.${accordionClasses$1.expanded}`]: {
      "&:before": {
        opacity: 0
      },
      "&:first-of-type": {
        marginTop: 0
      },
      "&:last-of-type": {
        marginBottom: 0
      },
      "& + &": {
        "&:before": {
          display: "none"
        }
      }
    },
    [`&.${accordionClasses$1.disabled}`]: {
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
  [`&.${accordionClasses$1.expanded}`]: {
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
    TransitionComponent = Collapse$1,
    TransitionProps
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
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(AccordionRoot, _extends({
    className: clsx(classes.root, className),
    ref,
    ownerState,
    square
  }, other, {
    children: [/* @__PURE__ */ jsxRuntimeExports.jsx(AccordionContext$1.Provider, {
      value: contextValue,
      children: summary
    }), /* @__PURE__ */ jsxRuntimeExports.jsx(TransitionComponent, _extends({
      in: expanded,
      timeout: "auto"
    }, TransitionProps, {
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
  overridesResolver: (props, styles2) => styles2.root
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
function getAccordionSummaryUtilityClass(slot) {
  return generateUtilityClass("MuiAccordionSummary", slot);
}
const accordionSummaryClasses = generateUtilityClasses("MuiAccordionSummary", ["root", "expanded", "focusVisible", "disabled", "gutters", "contentGutters", "content", "expandIconWrapper"]);
const accordionSummaryClasses$1 = accordionSummaryClasses;
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
  overridesResolver: (props, styles2) => styles2.root
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
    [`&.${accordionSummaryClasses$1.focusVisible}`]: {
      backgroundColor: (theme.vars || theme).palette.action.focus
    },
    [`&.${accordionSummaryClasses$1.disabled}`]: {
      opacity: (theme.vars || theme).palette.action.disabledOpacity
    },
    [`&:hover:not(.${accordionSummaryClasses$1.disabled})`]: {
      cursor: "pointer"
    }
  }, !ownerState.disableGutters && {
    [`&.${accordionSummaryClasses$1.expanded}`]: {
      minHeight: 64
    }
  });
});
const AccordionSummaryContent = styled("div", {
  name: "MuiAccordionSummary",
  slot: "Content",
  overridesResolver: (props, styles2) => styles2.content
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
  [`&.${accordionSummaryClasses$1.expanded}`]: {
    margin: "20px 0"
  }
}));
const AccordionSummaryExpandIconWrapper = styled("div", {
  name: "MuiAccordionSummary",
  slot: "ExpandIconWrapper",
  overridesResolver: (props, styles2) => styles2.expandIconWrapper
})(({
  theme
}) => ({
  display: "flex",
  color: (theme.vars || theme).palette.action.active,
  transform: "rotate(0deg)",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest
  }),
  [`&.${accordionSummaryClasses$1.expanded}`]: {
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
  } = reactExports.useContext(AccordionContext$1);
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
var _interopRequireDefault$4 = interopRequireDefaultExports;
Object.defineProperty(ExpandMore, "__esModule", {
  value: true
});
var default_1$4 = ExpandMore.default = void 0;
var _createSvgIcon$4 = _interopRequireDefault$4(requireCreateSvgIcon());
var _jsxRuntime$4 = jsxRuntimeExports;
var _default$4 = (0, _createSvgIcon$4.default)(/* @__PURE__ */ (0, _jsxRuntime$4.jsx)("path", {
  d: "M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"
}), "ExpandMore");
default_1$4 = ExpandMore.default = _default$4;
const mainContainer$6 = "_mainContainer_6puh5_1";
const blockItem = "_blockItem_6puh5_6";
const errorText$1 = "_errorText_6puh5_13";
const saveNameButton = "_saveNameButton_6puh5_17";
const styles$9 = {
  mainContainer: mainContainer$6,
  blockItem,
  errorText: errorText$1,
  saveNameButton
};
const wrapper$1 = "_wrapper_ar1uh_1";
const action$1 = "_action_ar1uh_12";
const errorText = "_errorText_ar1uh_17";
const styles$8 = {
  wrapper: wrapper$1,
  action: action$1,
  errorText
};
const SurveyClone = ({ open, onClose }) => {
  const { t } = useTranslation("manage");
  const navigate = useNavigate();
  const survey = useSelector((state) => state.editState.survey);
  const [processedError, setProcessedError] = reactExports.useState("");
  const [showError, setShowError] = reactExports.useState(false);
  const [loading, setLoading] = reactExports.useState(false);
  const [newSurveyName, setNewSurveyName] = reactExports.useState("");
  const [newSurveyNameError, setNewSurveyNameError] = reactExports.useState("");
  const onSurveyNameChanged = (e) => {
    setNewSurveyName(e.target.value);
    setNewSurveyNameError("");
  };
  const goDashboard = () => {
    navigate(routes.dashboard);
  };
  const validate = () => {
    setNewSurveyNameError("");
    if (newSurveyName.length == 0) {
      setNewSurveyNameError(t("survey_required"));
      return false;
    }
    if (survey.name === newSurveyName) {
      setNewSurveyNameError(t("processed_errors.duplicate_survey_name"));
      return false;
    }
    return true;
  };
  const cloneSurvey = () => {
    if (!validate()) {
      return;
    }
    setLoading(true);
    const data = {
      name: newSurveyName
    };
    SurveyService.cloneSurvey(survey.id, data).then(() => {
      onClose();
      goDashboard();
    }).catch((e) => {
      const processed = processError(e);
      switch (processed) {
        case PROCESSED_ERRORS.NETWORK_ERR:
        case PROCESSED_ERRORS.UNIDENTIFIED_ERROR:
        case PROCESSED_ERRORS.BACKEND_DOWN:
          setShowError(true);
          setProcessedError(processed);
          break;
        case PROCESSED_ERRORS.DUPLICATE_SURVEY_NAME:
          setNewSurveyNameError(t(`processed_errors.${processed}`));
          break;
      }
    }).finally(() => {
      setLoading(false);
    });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    loading && /* @__PURE__ */ jsxRuntimeExports.jsx(LoadingIndicator, {}),
    showError && /* @__PURE__ */ jsxRuntimeExports.jsx(
      ProcessedError,
      {
        error: processedError,
        handleClose: () => setShowError(false)
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Modal,
      {
        sx: {
          ".MuiBackdrop-root": {
            backgroundColor: "rgba(0, 0, 0, 0.3)"
          }
        },
        open,
        onClose,
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { className: styles$8.wrapper, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { children: t("edit_survey.clone_survey") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            TextField,
            {
              error: newSurveyNameError.length > 0,
              sx: { minWidth: "400px" },
              required: true,
              value: newSurveyName,
              label: t("label.new_survey_name"),
              onChange: onSurveyNameChanged,
              variant: "standard"
            }
          ),
          newSurveyNameError && /* @__PURE__ */ jsxRuntimeExports.jsx(FormHelperText, { className: styles$8.errorText, children: newSurveyNameError }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { className: styles$8.action, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: onClose, children: t("action_btn.cancel") }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: cloneSurvey, children: t("action_btn.save") })
          ] })
        ] })
      }
    )
  ] });
};
function EditSurveyGeneral() {
  const navigate = useNavigate();
  const { t } = useTranslation("manage");
  const survey = useSelector((state) => state.editState.survey);
  const surveyNameError = useSelector(
    (state) => state.editState.error == PROCESSED_ERRORS.DUPLICATE_SURVEY_NAME
  );
  const [processedError, setProcessedError] = reactExports.useState("");
  const [surveyName, setSurveyName] = reactExports.useState(survey.name);
  const [surveyDateError, setSurveyDateError] = reactExports.useState("");
  const [showError, setShowError] = reactExports.useState(false);
  const [loading, setLoading] = reactExports.useState(false);
  const onSurveyNameChanged = (e) => {
    setSurveyName(e.target.value);
  };
  const dispatch = useDispatch();
  const isDisabled = !isSurveyAdmin() || survey.status == SURVEY_STATUS.CLOSED;
  const saveSurveyName = () => {
    dispatch(
      surveyAttributeChangedImmediate({ key: "name", value: surveyName })
    );
  };
  const onAdditionalLanguagesChanged = (e) => {
    const key = "additionalLanguages";
    if (e.target.checked) {
      dispatch(
        surveyAttributeChanged({
          key,
          value: [
            ...survey.additionalLanguages,
            { code: e.target.name, langName: "" }
          ]
        })
      );
    } else {
      dispatch(
        surveyAttributeChanged({
          key,
          value: [
            ...survey.additionalLanguages.filter(
              (language) => language.code !== e.target.name
            )
          ]
        })
      );
    }
  };
  const onSurveyActiveFromChanged = (value) => {
    setSurveyDateError("");
    dispatch(
      surveyAttributeChanged({
        key: "startDate",
        value: localDateToServerDateTime(value.toDate())
      })
    );
  };
  const onSurveyActiveToChanged = (value) => {
    setSurveyDateError("");
    dispatch(
      surveyAttributeChanged({
        key: "endDate",
        value: localDateToServerDateTime(value.toDate())
      })
    );
  };
  const goDashboard = () => {
    navigate(routes.dashboard);
  };
  const closeSurvey = () => {
    setLoading(true);
    SurveyService.closeSurvey(survey.id).then((data) => {
      dispatch(surveyReceived(data));
    }).catch((e) => {
      const processed = processError(e);
      switch (processed) {
        case PROCESSED_ERRORS.NETWORK_ERR:
        case PROCESSED_ERRORS.BACKEND_DOWN:
          setShowError(true);
          setProcessedError(processed);
          break;
        case PROCESSED_ERRORS.INVALID_SURVEY_DATES:
          setSurveyDateError(t(`processed_errors.${processed}`));
      }
    }).finally(() => {
      setLoading(false);
    });
  };
  const onDelete = () => {
    if (window.confirm(
      t("edit_survey.delete_survey", { survey_name: survey.name })
    )) {
      deleteSurvey(survey.id);
    }
  };
  const deleteSurvey = () => {
    setLoading(true);
    SurveyService.deleteSurvey(survey.id).then(() => {
      goDashboard();
    }).catch((e) => {
      const processed = processError(e);
      switch (processed) {
        case PROCESSED_ERRORS.NETWORK_ERR:
        case PROCESSED_ERRORS.BACKEND_DOWN:
          setShowError(true);
          setProcessedError(processed);
          break;
      }
    }).finally(() => {
      setLoading(false);
    });
  };
  const [openSurveyClone, setOpenSurveyClone] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { className: styles$9.mainContainer, children: [
    loading && /* @__PURE__ */ jsxRuntimeExports.jsx(LoadingIndicator, {}),
    showError && /* @__PURE__ */ jsxRuntimeExports.jsx(
      ProcessedError,
      {
        error: processedError,
        handleClose: () => setShowError(false)
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { className: styles$9.createUserCard, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        TextField,
        {
          disabled: isDisabled,
          sx: { maxWidth: "400px" },
          error: surveyNameError,
          required: true,
          value: surveyName,
          id: "surveyName",
          label: t("label.survey_name"),
          name: "surveyName",
          onChange: onSurveyNameChanged,
          variant: "standard"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Button,
        {
          onClick: saveSurveyName,
          disabled: survey.name == surveyName,
          className: styles$9.saveNameButton,
          children: t("action_btn.save")
        }
      ),
      surveyNameError && /* @__PURE__ */ jsxRuntimeExports.jsx(FormHelperText, { className: styles$9.errorText, children: t("processed_errors.duplicate_survey_name") }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { flexDirection: "row", sx: { mt: "40px" }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { className: styles$9.blockItem, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { component: "span", sx: { fontWeight: 700 }, children: [
              t("label.base_language"),
              ": "
            ] }),
            survey.defaultLanguage.langName
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { component: "span", sx: { fontWeight: 700 }, children: [
              t("label.survey_mode"),
              ": "
            ] }),
            t(`mode.${survey.usage}`)
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { component: "span", sx: { fontWeight: 700 }, children: [
              t("edit_survey.status"),
              ": "
            ] }),
            t(`status.${survey.status}`)
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { sx: { display: "flex", gap: "10px" }, children: [
            survey.status == SURVEY_STATUS.ACTIVE && /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                disabled: isDisabled,
                onClick: closeSurvey,
                sx: { border: "1px solid green", color: "#3c3c3c" },
                children: t("action_btn.close")
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                onClick: () => {
                  setOpenSurveyClone(true);
                },
                sx: { border: "1px solid blue", color: "#3c3c3c" },
                children: t("action_btn.clone")
              }
            ),
            survey.status != SURVEY_STATUS.ACTIVE && /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                onClick: onDelete,
                sx: { border: "1px solid red", color: "#3c3c3c" },
                children: t("action_btn.delete")
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { className: styles$9.blockItem, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            AdditionalLanguages,
            {
              disabled: isDisabled,
              onAdditionalLanguagesChanged,
              additionalLanguages: survey.additionalLanguages.map(
                (lang) => lang.code
              ),
              baseLanguage: survey.defaultLanguage.code
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            SurveyActiveFromTo,
            {
              error: surveyDateError,
              disabled: isDisabled,
              surveyActiveFrom: survey.startDate,
              surveyActiveTo: survey.endDate,
              onSurveyActiveFromChanged,
              onSurveyActiveToChanged
            }
          )
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      SurveyClone,
      {
        open: openSurveyClone,
        onClose: () => {
          setOpenSurveyClone(false);
        }
      }
    )
  ] });
}
const mainContainer$5 = "_mainContainer_1naef_1";
const loadingWrapper = "_loadingWrapper_1naef_7";
const styles$7 = {
  mainContainer: mainContainer$5,
  loadingWrapper
};
const savingProgress = "_savingProgress_zztu3_1";
const styles$6 = {
  savingProgress
};
function EditingSurvey() {
  const isSaving = useSelector((state) => {
    return state.editState.isSaving;
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Snackbar, { open: isSaving, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Alert, { severity: "warning", children: [
    "Saving Survey...",
    " ",
    /* @__PURE__ */ jsxRuntimeExports.jsx(CircularProgress, { className: styles$6.savingProgress, color: "warning" })
  ] }) });
}
var ContentCopy = {};
var _interopRequireDefault$3 = interopRequireDefaultExports;
Object.defineProperty(ContentCopy, "__esModule", {
  value: true
});
var default_1$3 = ContentCopy.default = void 0;
var _createSvgIcon$3 = _interopRequireDefault$3(requireCreateSvgIcon());
var _jsxRuntime$3 = jsxRuntimeExports;
var _default$3 = (0, _createSvgIcon$3.default)(/* @__PURE__ */ (0, _jsxRuntime$3.jsx)("path", {
  d: "M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"
}), "ContentCopy");
default_1$3 = ContentCopy.default = _default$3;
var Facebook = {};
var _interopRequireDefault$2 = interopRequireDefaultExports;
Object.defineProperty(Facebook, "__esModule", {
  value: true
});
var default_1$2 = Facebook.default = void 0;
_interopRequireWildcard$2(reactExports);
var _createSvgIcon$2 = _interopRequireDefault$2(requireCreateSvgIcon());
var _jsxRuntime$2 = jsxRuntimeExports;
function _getRequireWildcardCache$2(nodeInterop) {
  if (typeof WeakMap !== "function")
    return null;
  var cacheBabelInterop = /* @__PURE__ */ new WeakMap();
  var cacheNodeInterop = /* @__PURE__ */ new WeakMap();
  return (_getRequireWildcardCache$2 = function(nodeInterop2) {
    return nodeInterop2 ? cacheNodeInterop : cacheBabelInterop;
  })(nodeInterop);
}
function _interopRequireWildcard$2(obj, nodeInterop) {
  if (!nodeInterop && obj && obj.__esModule) {
    return obj;
  }
  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return { default: obj };
  }
  var cache = _getRequireWildcardCache$2(nodeInterop);
  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }
  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var key in obj) {
    if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }
  newObj.default = obj;
  if (cache) {
    cache.set(obj, newObj);
  }
  return newObj;
}
var _default$2 = (0, _createSvgIcon$2.default)(/* @__PURE__ */ (0, _jsxRuntime$2.jsx)("path", {
  d: "M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2m13 2h-2.5A3.5 3.5 0 0 0 12 8.5V11h-2v3h2v7h3v-7h3v-3h-3V9a1 1 0 0 1 1-1h2V5z"
}), "Facebook");
default_1$2 = Facebook.default = _default$2;
var LinkedIn = {};
var _interopRequireDefault$1 = interopRequireDefaultExports;
Object.defineProperty(LinkedIn, "__esModule", {
  value: true
});
var default_1$1 = LinkedIn.default = void 0;
_interopRequireWildcard$1(reactExports);
var _createSvgIcon$1 = _interopRequireDefault$1(requireCreateSvgIcon());
var _jsxRuntime$1 = jsxRuntimeExports;
function _getRequireWildcardCache$1(nodeInterop) {
  if (typeof WeakMap !== "function")
    return null;
  var cacheBabelInterop = /* @__PURE__ */ new WeakMap();
  var cacheNodeInterop = /* @__PURE__ */ new WeakMap();
  return (_getRequireWildcardCache$1 = function(nodeInterop2) {
    return nodeInterop2 ? cacheNodeInterop : cacheBabelInterop;
  })(nodeInterop);
}
function _interopRequireWildcard$1(obj, nodeInterop) {
  if (!nodeInterop && obj && obj.__esModule) {
    return obj;
  }
  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return { default: obj };
  }
  var cache = _getRequireWildcardCache$1(nodeInterop);
  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }
  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var key in obj) {
    if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }
  newObj.default = obj;
  if (cache) {
    cache.set(obj, newObj);
  }
  return newObj;
}
var _default$1 = (0, _createSvgIcon$1.default)(/* @__PURE__ */ (0, _jsxRuntime$1.jsx)("path", {
  d: "M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"
}), "LinkedIn");
default_1$1 = LinkedIn.default = _default$1;
var Twitter = {};
var _interopRequireDefault = interopRequireDefaultExports;
Object.defineProperty(Twitter, "__esModule", {
  value: true
});
var default_1 = Twitter.default = void 0;
_interopRequireWildcard(reactExports);
var _createSvgIcon = _interopRequireDefault(requireCreateSvgIcon());
var _jsxRuntime = jsxRuntimeExports;
function _getRequireWildcardCache(nodeInterop) {
  if (typeof WeakMap !== "function")
    return null;
  var cacheBabelInterop = /* @__PURE__ */ new WeakMap();
  var cacheNodeInterop = /* @__PURE__ */ new WeakMap();
  return (_getRequireWildcardCache = function(nodeInterop2) {
    return nodeInterop2 ? cacheNodeInterop : cacheBabelInterop;
  })(nodeInterop);
}
function _interopRequireWildcard(obj, nodeInterop) {
  if (!nodeInterop && obj && obj.__esModule) {
    return obj;
  }
  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return { default: obj };
  }
  var cache = _getRequireWildcardCache(nodeInterop);
  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }
  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var key in obj) {
    if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }
  newObj.default = obj;
  if (cache) {
    cache.set(obj, newObj);
  }
  return newObj;
}
var _default = (0, _createSvgIcon.default)(/* @__PURE__ */ (0, _jsxRuntime.jsx)("path", {
  d: "M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"
}), "Twitter");
default_1 = Twitter.default = _default;
function objectToGetParams(object) {
  var params = Object.entries(object).filter(function(_a) {
    var value = _a[1];
    return value !== void 0 && value !== null;
  }).map(function(_a) {
    var key = _a[0], value = _a[1];
    return "".concat(encodeURIComponent(key), "=").concat(encodeURIComponent(String(value)));
  });
  return params.length > 0 ? "?".concat(params.join("&")) : "";
}
var classnames = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
(function(module) {
  (function() {
    var hasOwn = {}.hasOwnProperty;
    function classNames2() {
      var classes = [];
      for (var i = 0; i < arguments.length; i++) {
        var arg = arguments[i];
        if (!arg)
          continue;
        var argType = typeof arg;
        if (argType === "string" || argType === "number") {
          classes.push(arg);
        } else if (Array.isArray(arg)) {
          if (arg.length) {
            var inner = classNames2.apply(null, arg);
            if (inner) {
              classes.push(inner);
            }
          }
        } else if (argType === "object") {
          if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes("[native code]")) {
            classes.push(arg.toString());
            continue;
          }
          for (var key in arg) {
            if (hasOwn.call(arg, key) && arg[key]) {
              classes.push(key);
            }
          }
        }
      }
      return classes.join(" ");
    }
    if (module.exports) {
      classNames2.default = classNames2;
      module.exports = classNames2;
    } else {
      window.classNames = classNames2;
    }
  })();
})(classnames);
var classnamesExports = classnames.exports;
const classNames = /* @__PURE__ */ getDefaultExportFromCjs(classnamesExports);
var __extends$1 = globalThis && globalThis.__extends || function() {
  var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
      d2.__proto__ = b2;
    } || function(d2, b2) {
      for (var p in b2)
        if (Object.prototype.hasOwnProperty.call(b2, p))
          d2[p] = b2[p];
    };
    return extendStatics(d, b);
  };
  return function(d, b) {
    if (typeof b !== "function" && b !== null)
      throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
var __assign$1 = globalThis && globalThis.__assign || function() {
  __assign$1 = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  };
  return __assign$1.apply(this, arguments);
};
var __awaiter = globalThis && globalThis.__awaiter || function(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
var __generator = globalThis && globalThis.__generator || function(thisArg, body) {
  var _ = { label: 0, sent: function() {
    if (t[0] & 1)
      throw t[1];
    return t[1];
  }, trys: [], ops: [] }, f, y, t, g;
  return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
    return this;
  }), g;
  function verb(n) {
    return function(v) {
      return step([n, v]);
    };
  }
  function step(op) {
    if (f)
      throw new TypeError("Generator is already executing.");
    while (_)
      try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
          return t;
        if (y = 0, t)
          op = [op[0] & 2, t.value];
        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;
          case 4:
            _.label++;
            return { value: op[1], done: false };
          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;
          case 7:
            op = _.ops.pop();
            _.trys.pop();
            continue;
          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }
            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }
            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }
            if (t && _.label < t[2]) {
              _.label = t[2];
              _.ops.push(op);
              break;
            }
            if (t[2])
              _.ops.pop();
            _.trys.pop();
            continue;
        }
        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f = t = 0;
      }
    if (op[0] & 5)
      throw op[1];
    return { value: op[0] ? op[1] : void 0, done: true };
  }
};
var __rest = globalThis && globalThis.__rest || function(s, e) {
  var t = {};
  for (var p in s)
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
        t[p[i]] = s[p[i]];
    }
  return t;
};
var isPromise = function(obj) {
  return !!obj && (typeof obj === "object" || typeof obj === "function") && typeof obj.then === "function";
};
var getBoxPositionOnWindowCenter = function(width, height) {
  return {
    left: window.outerWidth / 2 + (window.screenX || window.screenLeft || 0) - width / 2,
    top: window.outerHeight / 2 + (window.screenY || window.screenTop || 0) - height / 2
  };
};
var getBoxPositionOnScreenCenter = function(width, height) {
  return {
    top: (window.screen.height - height) / 2,
    left: (window.screen.width - width) / 2
  };
};
function windowOpen(url, _a, onClose) {
  var height = _a.height, width = _a.width, configRest = __rest(_a, ["height", "width"]);
  var config = __assign$1({ height, width, location: "no", toolbar: "no", status: "no", directories: "no", menubar: "no", scrollbars: "yes", resizable: "no", centerscreen: "yes", chrome: "yes" }, configRest);
  var shareDialog = window.open(url, "", Object.keys(config).map(function(key) {
    return "".concat(key, "=").concat(config[key]);
  }).join(", "));
  if (onClose) {
    var interval_1 = window.setInterval(function() {
      try {
        if (shareDialog === null || shareDialog.closed) {
          window.clearInterval(interval_1);
          onClose(shareDialog);
        }
      } catch (e) {
        console.error(e);
      }
    }, 1e3);
  }
  return shareDialog;
}
var ShareButton = (
  /** @class */
  function(_super) {
    __extends$1(ShareButton2, _super);
    function ShareButton2() {
      var _this = _super !== null && _super.apply(this, arguments) || this;
      _this.openShareDialog = function(link) {
        var _a = _this.props, onShareWindowClose = _a.onShareWindowClose, _b = _a.windowHeight, windowHeight = _b === void 0 ? 400 : _b, _c = _a.windowPosition, windowPosition = _c === void 0 ? "windowCenter" : _c, _d = _a.windowWidth, windowWidth = _d === void 0 ? 550 : _d;
        var windowConfig = __assign$1({ height: windowHeight, width: windowWidth }, windowPosition === "windowCenter" ? getBoxPositionOnWindowCenter(windowWidth, windowHeight) : getBoxPositionOnScreenCenter(windowWidth, windowHeight));
        windowOpen(link, windowConfig, onShareWindowClose);
      };
      _this.handleClick = function(event) {
        return __awaiter(_this, void 0, void 0, function() {
          var _a, beforeOnClick, disabled, networkLink, onClick, url, openShareDialogOnClick, opts, link, returnVal;
          return __generator(this, function(_b) {
            switch (_b.label) {
              case 0:
                _a = this.props, beforeOnClick = _a.beforeOnClick, disabled = _a.disabled, networkLink = _a.networkLink, onClick = _a.onClick, url = _a.url, openShareDialogOnClick = _a.openShareDialogOnClick, opts = _a.opts;
                link = networkLink(url, opts);
                if (disabled) {
                  return [
                    2
                    /*return*/
                  ];
                }
                event.preventDefault();
                if (!beforeOnClick)
                  return [3, 2];
                returnVal = beforeOnClick();
                if (!isPromise(returnVal))
                  return [3, 2];
                return [4, returnVal];
              case 1:
                _b.sent();
                _b.label = 2;
              case 2:
                if (openShareDialogOnClick) {
                  this.openShareDialog(link);
                }
                if (onClick) {
                  onClick(event, link);
                }
                return [
                  2
                  /*return*/
                ];
            }
          });
        });
      };
      return _this;
    }
    ShareButton2.prototype.render = function() {
      var _a = this.props;
      _a.beforeOnClick;
      var children = _a.children, className = _a.className, disabled = _a.disabled, disabledStyle = _a.disabledStyle, forwardedRef = _a.forwardedRef;
      _a.networkLink;
      var networkName = _a.networkName;
      _a.onShareWindowClose;
      _a.openShareDialogOnClick;
      _a.opts;
      var resetButtonStyle = _a.resetButtonStyle, style = _a.style;
      _a.url;
      _a.windowHeight;
      _a.windowPosition;
      _a.windowWidth;
      var rest = __rest(_a, ["beforeOnClick", "children", "className", "disabled", "disabledStyle", "forwardedRef", "networkLink", "networkName", "onShareWindowClose", "openShareDialogOnClick", "opts", "resetButtonStyle", "style", "url", "windowHeight", "windowPosition", "windowWidth"]);
      var newClassName = classNames("react-share__ShareButton", {
        "react-share__ShareButton--disabled": !!disabled,
        disabled: !!disabled
      }, className);
      var newStyle = resetButtonStyle ? __assign$1(__assign$1({ backgroundColor: "transparent", border: "none", padding: 0, font: "inherit", color: "inherit", cursor: "pointer" }, style), disabled && disabledStyle) : __assign$1(__assign$1({}, style), disabled && disabledStyle);
      return React.createElement("button", __assign$1({}, rest, { "aria-label": rest["aria-label"] || networkName, className: newClassName, onClick: this.handleClick, ref: forwardedRef, style: newStyle }), children);
    };
    ShareButton2.defaultProps = {
      disabledStyle: { opacity: 0.6 },
      openShareDialogOnClick: true,
      resetButtonStyle: true
    };
    return ShareButton2;
  }(reactExports.Component)
);
const ShareButton$1 = ShareButton;
var __assign = globalThis && globalThis.__assign || function() {
  __assign = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};
function createShareButton(networkName, link, optsMap, defaultProps) {
  function CreatedButton(props, ref) {
    var opts = optsMap(props);
    var passedProps = __assign({}, props);
    var optsKeys = Object.keys(opts);
    optsKeys.forEach(function(key) {
      delete passedProps[key];
    });
    return React.createElement(ShareButton$1, __assign({}, defaultProps, passedProps, { forwardedRef: ref, networkName, networkLink: link, opts: optsMap(props) }));
  }
  CreatedButton.displayName = "ShareButton-".concat(networkName);
  return reactExports.forwardRef(CreatedButton);
}
var __extends = globalThis && globalThis.__extends || function() {
  var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
      d2.__proto__ = b2;
    } || function(d2, b2) {
      for (var p in b2)
        if (Object.prototype.hasOwnProperty.call(b2, p))
          d2[p] = b2[p];
    };
    return extendStatics(d, b);
  };
  return function(d, b) {
    if (typeof b !== "function" && b !== null)
      throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
var AssertionError = (
  /** @class */
  function(_super) {
    __extends(AssertionError2, _super);
    function AssertionError2(message) {
      var _this = _super.call(this, message) || this;
      _this.name = "AssertionError";
      return _this;
    }
    return AssertionError2;
  }(Error)
);
function assert(value, message) {
  if (!value) {
    throw new AssertionError(message);
  }
}
function facebookLink(url, _a) {
  var quote = _a.quote, hashtag = _a.hashtag;
  assert(url, "facebook.url");
  return "https://www.facebook.com/sharer/sharer.php" + objectToGetParams({
    u: url,
    quote,
    hashtag
  });
}
var FacebookShareButton = createShareButton("facebook", facebookLink, function(props) {
  return {
    quote: props.quote,
    hashtag: props.hashtag
  };
}, {
  windowWidth: 550,
  windowHeight: 400
});
const FacebookShareButton$1 = FacebookShareButton;
function linkedinLink(url, _a) {
  var title = _a.title, summary = _a.summary, source = _a.source;
  assert(url, "linkedin.url");
  return "https://linkedin.com/shareArticle" + objectToGetParams({ url, mini: "true", title, summary, source });
}
var LinkedinShareButton = createShareButton("linkedin", linkedinLink, function(_a) {
  var title = _a.title, summary = _a.summary, source = _a.source;
  return { title, summary, source };
}, {
  windowWidth: 750,
  windowHeight: 600
});
const LinkedinShareButton$1 = LinkedinShareButton;
function twitterLink(url, _a) {
  var title = _a.title, via = _a.via, _b = _a.hashtags, hashtags = _b === void 0 ? [] : _b, _c = _a.related, related = _c === void 0 ? [] : _c;
  assert(url, "twitter.url");
  assert(Array.isArray(hashtags), "twitter.hashtags is not an array");
  assert(Array.isArray(related), "twitter.related is not an array");
  return "https://twitter.com/share" + objectToGetParams({
    url,
    text: title,
    via,
    hashtags: hashtags.length > 0 ? hashtags.join(",") : void 0,
    related: related.length > 0 ? related.join(",") : void 0
  });
}
var TwitterShareButton = createShareButton("twitter", twitterLink, function(props) {
  return {
    hashtags: props.hashtags,
    title: props.title,
    via: props.via,
    related: props.related
  };
}, {
  windowWidth: 550,
  windowHeight: 400
});
const TwitterShareButton$1 = TwitterShareButton;
function SuccessSnackbar({ handleClose, success }) {
  const [dir, setDir] = reactExports.useState("ltr");
  const { t, i18n } = useTranslation("manage");
  reactExports.useEffect(() => {
    if (rtlLanguage.includes(i18n.language)) {
      setDir("rtl");
    } else {
      setDir("ltr");
    }
  }, [i18n.language]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Snackbar, { open: true, autoHideDuration: 2e3, onClose: handleClose, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    Alert,
    {
      variant: "standard",
      severity: "success",
      onClose: handleClose,
      dir,
      children: t(`processed_successes.${success}`)
    }
  ) });
}
const mainContainer$4 = "_mainContainer_1d68k_1";
const linkCopy = "_linkCopy_1d68k_6";
const socialSharing = "_socialSharing_1d68k_12";
const defaultUrl = "_defaultUrl_1d68k_13";
const socialLink = "_socialLink_1d68k_19";
const iconShareFb = "_iconShareFb_1d68k_24";
const iconShareTw = "_iconShareTw_1d68k_27";
const iconShareLn = "_iconShareLn_1d68k_31";
const styles$5 = {
  mainContainer: mainContainer$4,
  linkCopy,
  socialSharing,
  defaultUrl,
  socialLink,
  iconShareFb,
  iconShareTw,
  iconShareLn
};
function SurveySharing() {
  const { t } = useTranslation("manage");
  const survey = useSelector((state) => state.editState.survey);
  const url = sharingUrl(survey.id);
  const [copy, setCopy] = reactExports.useState(false);
  const clickCopy = () => {
    navigator.clipboard.writeText(url);
    setCopy(true);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { className: styles$5.mainContainer, children: [
    copy && /* @__PURE__ */ jsxRuntimeExports.jsx(SuccessSnackbar, { handleClose: () => setCopy(false), success: "copied" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { className: styles$5.defaultUrl, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { component: "span", sx: { fontWeight: 700 }, children: [
        t("edit_survey.default_survey_url"),
        ": "
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { className: styles$5.linkCopy, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: url, children: [
          url.slice(0, 50),
          "...",
          url.slice(-10)
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(IconButton, { onClick: clickCopy, children: /* @__PURE__ */ jsxRuntimeExports.jsx(default_1$3, {}) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { className: styles$5.socialSharing, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { component: "span", sx: { fontWeight: 700 }, children: t("edit_survey.social_sharing") }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { className: styles$5.socialLink, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(FacebookShareButton$1, { url, children: /* @__PURE__ */ jsxRuntimeExports.jsx(default_1$2, { className: styles$5.iconShareFb }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TwitterShareButton$1, { url, children: /* @__PURE__ */ jsxRuntimeExports.jsx(default_1, { className: styles$5.iconShareTw }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(LinkedinShareButton$1, { url, children: /* @__PURE__ */ jsxRuntimeExports.jsx(default_1$1, { className: styles$5.iconShareLn }) })
      ] })
    ] })
  ] });
}
const mainContainer$3 = "_mainContainer_g22zs_1";
const formControlCheckBox$1 = "_formControlCheckBox_g22zs_6";
const styles$4 = {
  mainContainer: mainContainer$3,
  formControlCheckBox: formControlCheckBox$1
};
function SurveyOffline() {
  const dispatch = useDispatch();
  const { t } = useTranslation("manage");
  const survey = useSelector((state) => state.editState.survey);
  const isDisabled = !isSurveyAdmin() || survey.status == SURVEY_STATUS.CLOSED;
  const onChangeCheckbox = (e) => {
    dispatch(
      surveyAttributeChanged({
        key: e.target.name,
        value: e.target.checked
      })
    );
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { className: styles$4.mainContainer, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(FormControl, { className: styles$4.formControlCheckBox, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      FormControlLabel,
      {
        control: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Checkbox,
          {
            disabled: isDisabled,
            name: SURVEY.BACKGROUND_AUDIO,
            checked: survey.backgroundAudio,
            onChange: onChangeCheckbox
          }
        ),
        label: t("edit_survey.background_audio")
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      FormControlLabel,
      {
        control: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Checkbox,
          {
            disabled: isDisabled,
            name: SURVEY.RECORD_GPS,
            checked: survey.recordGps,
            onChange: onChangeCheckbox
          }
        ),
        label: t("edit_survey.record_gps")
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      FormControlLabel,
      {
        control: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Checkbox,
          {
            disabled: isDisabled,
            name: SURVEY.CAN_LOCK_SURVEY,
            checked: survey.canLockSurvey,
            onChange: onChangeCheckbox
          }
        ),
        label: t("edit_survey.can_lock_survey")
      }
    )
  ] }) });
}
const mainContainer$2 = "_mainContainer_g22zs_1";
const formControlCheckBox = "_formControlCheckBox_g22zs_6";
const styles$3 = {
  mainContainer: mainContainer$2,
  formControlCheckBox
};
function SurveyPrivacy() {
  const dispatch = useDispatch();
  const { t } = useTranslation("manage");
  const survey = useSelector((state) => state.editState.survey);
  const isDisabled = !isSurveyAdmin() || survey.status == SURVEY_STATUS.CLOSED;
  const onChangeCheckbox = (e) => {
    dispatch(
      surveyAttributeChanged({
        key: e.target.name,
        value: e.target.checked
      })
    );
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { className: styles$3.mainContainer, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(FormControl, { className: styles$3.formControlCheckBox, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      FormControlLabel,
      {
        control: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Checkbox,
          {
            disabled: isDisabled,
            name: SURVEY.SAVE_IP,
            checked: survey.saveIp,
            onChange: onChangeCheckbox
          }
        ),
        label: t("edit_survey.save_ip")
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      FormControlLabel,
      {
        control: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Checkbox,
          {
            disabled: isDisabled,
            name: SURVEY.SAVE_TIMINGS,
            checked: survey.saveTimings,
            onChange: onChangeCheckbox
          }
        ),
        label: t("edit_survey.save_timings")
      }
    )
  ] }) });
}
const wrapper = "_wrapper_1um7m_1";
const action = "_action_1um7m_13";
const userBlock = "_userBlock_1um7m_18";
const styles$2 = {
  wrapper,
  action,
  userBlock
};
const AddPermission = ({
  open,
  onClose,
  addPermission,
  currentUserIds
}) => {
  const { t } = useTranslation("manage");
  const [allUsers, setAllUsers] = reactExports.useState([]);
  const getAllUsers = () => {
    UserService.getAllUsers().then((data) => {
      if (data) {
        setAllUsers(data);
      }
    });
  };
  reactExports.useEffect(() => {
    getAllUsers();
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Modal,
    {
      sx: {
        ".MuiBackdrop-root": {
          backgroundColor: "rgba(0, 0, 0, 0.3)"
        }
      },
      open,
      onClose,
      "aria-labelledby": "modal-modal-title",
      "aria-describedby": "modal-modal-description",
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { className: styles$2.wrapper, children: [
        allUsers.filter((user) => {
          return currentUserIds.indexOf(user.id) == -1;
        }).map((user) => {
          return /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { className: styles$2.userBlock, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { children: [
              user.firstName,
              " ",
              user.lastName
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: () => addPermission(user.id), children: t("action_btn.add") })
          ] }, user.id);
        }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { className: styles$2.action, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: onClose, children: t("action_btn.cancel") }) })
      ] })
    }
  );
};
const mainContainer$1 = "_mainContainer_mjjng_1";
const styles$1 = {
  mainContainer: mainContainer$1
};
function SurveyUsers() {
  const dispatch = useDispatch();
  const { t } = useTranslation("manage");
  const survey = useSelector((state) => state.editState.survey);
  const fetching = useSelector((state) => state.editState.permissionsLoading);
  const permissionAll = useSelector((state) => state.editState.permissions);
  const isDisabled = fetching || !isSurveyAdmin() || survey.status == SURVEY_STATUS.CLOSED;
  const onChangeCheckbox = (e) => {
    dispatch(
      surveyAttributeChanged({
        key: e.target.name,
        value: e.target.checked
      })
    );
  };
  const loadPermissions = (surveyId) => {
    SurveyService.getSurveyPermissionAll(surveyId).then((data) => {
      if (data) {
        dispatch(permissionsReceived(data));
      }
      dispatch(permissionsLoading(false));
    }).catch((err) => {
      processApirror(err);
    });
  };
  const [userToDelete, setUserToDelete] = reactExports.useState(null);
  const onCloseModal = () => {
    setUserToDelete(null);
  };
  const [addPermission, setAddPermission] = reactExports.useState(false);
  const onCloseModalAddPermission = () => {
    setAddPermission(false);
  };
  const processApirror = (e) => {
    dispatch(permissionsLoading(false));
    const processed = processError(e);
    switch (processed) {
      case PROCESSED_ERRORS.NETWORK_ERR:
      case PROCESSED_ERRORS.BACKEND_DOWN:
        dispatch(onError(processed));
        break;
    }
  };
  const deleteUser = () => {
    dispatch(permissionsLoading(true));
    onCloseModal();
    SurveyService.removePermission(survey.id, userToDelete.id).then(() => {
      loadPermissions(survey.id);
    }).catch((e) => {
      processApirror(e);
    });
  };
  const postPermission = (userId) => {
    onCloseModalAddPermission();
    dispatch(permissionsLoading(true));
    SurveyService.addPermission(survey.id, userId).then(() => {
      loadPermissions(survey.id);
    }).catch((e) => {
      processApirror(e);
    });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { className: styles$1.mainContainer, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(FormControl, { sx: { mb: "30px" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      FormControlLabel,
      {
        control: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Checkbox,
          {
            disabled: isDisabled,
            name: SURVEY.PUBLIC_WITHIN_ORG,
            checked: survey.publicWithinOrg,
            onChange: onChangeCheckbox
          }
        ),
        label: t("label.public_within_org")
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Button,
      {
        disabled: isDisabled,
        sx: { ml: "auto", mb: "10px", display: "flex" },
        onClick: () => {
          setAddPermission(true);
        },
        children: t("action_btn.add_permission")
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(TableContainer, { component: Paper, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Table, { sx: { minWidth: 650 }, "aria-label": "simple table", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { align: "left", children: t("users_manage.name") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { align: "left", children: t("users_manage.email") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { align: "left", children: t("users_manage.roles") })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TableBody, { children: permissionAll == null ? void 0 : permissionAll.map(({ user }) => {
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { component: "th", scope: "row", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            IconButton,
            {
              title: t("users_manage.title_delete"),
              disabled: isDisabled,
              onClick: () => {
                setUserToDelete(user);
              },
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(Delete, {})
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(TableCell, { align: "left", children: [
            user.firstName,
            " ",
            user.lastName
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { align: "left", children: user.email }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { align: "left", children: user.roles.map((role) => t(`label.${role}`)).join(", ") })
        ] }, user.id);
      }) })
    ] }) }),
    Boolean(userToDelete) && /* @__PURE__ */ jsxRuntimeExports.jsx(
      UserDelete,
      {
        deleteUser,
        name: userToDelete.firstName + " " + userToDelete.lastName,
        open: Boolean(userToDelete),
        onClose: onCloseModal
      }
    ),
    addPermission && /* @__PURE__ */ jsxRuntimeExports.jsx(
      AddPermission,
      {
        currentUserIds: permissionAll.map((permission) => permission.user.id),
        addPermission: postPermission,
        open: addPermission,
        onClose: onCloseModalAddPermission
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Backdrop, { open: fetching, sx: { position: "absolute" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircularProgress, {}) })
  ] });
}
const mainContainer = "_mainContainer_1cgmo_1";
const styles = {
  mainContainer
};
function SurveyQuota() {
  const dispatch = useDispatch();
  const { t } = useTranslation("manage");
  const survey = useSelector((state) => state.editState.survey);
  const [checked, setChecked] = reactExports.useState(survey.quota > 0);
  const [limit, setLimit] = reactExports.useState(survey.quota >= 0 ? survey.quota : "");
  const changeLimit = (value) => {
    const intValue = parseInt(value);
    if (Number.isInteger(intValue) && intValue >= 0) {
      setLimit(intValue);
      dispatch(
        surveyAttributeChanged({
          key: "quota",
          value: intValue
        })
      );
    }
  };
  const fetching = useSelector((state) => state.editState.permissionsLoading);
  const permissionAll = useSelector(
    (state) => {
      var _a;
      return (_a = state.editState.permissions) == null ? void 0 : _a.filter((permission) => {
        return isSurveyor(permission.user);
      });
    }
  );
  const onChangeCheckbox = (e) => {
    if (!e.target.checked) {
      setLimit("");
      dispatch(
        surveyAttributeChanged({
          key: "quota",
          value: -1
        })
      );
    }
    setChecked(e.target.checked);
  };
  const putPermissionBySurveyor = (userId, quota) => {
    const data = {
      quota
    };
    dispatch(permissionsLoading(true));
    SurveyService.editPermission(survey.id, userId, data).then(() => {
      loadPermissions(survey.id);
    }).catch((err) => {
      dispatch(permissionsLoading(false));
    });
  };
  const loadPermissions = (surveyId) => {
    SurveyService.getSurveyPermissionAll(surveyId).then((data) => {
      if (data) {
        dispatch(permissionsReceived(data));
      }
      dispatch(permissionsLoading(false));
    }).catch((err) => {
      dispatch(permissionsLoading(false));
    });
  };
  const isDisabled = fetching || !isSurveyAdmin() || survey.status == SURVEY_STATUS.CLOSED;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { className: styles.mainContainer, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Stack,
        {
          flexDirection: "row",
          alignItems: "bottom",
          sx: { marginBottom: `16px` },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              FormControlLabel,
              {
                disabled: isDisabled,
                control: /* @__PURE__ */ jsxRuntimeExports.jsx(Checkbox, { checked, onChange: onChangeCheckbox }),
                label: t("label.apply_quota")
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              TextField,
              {
                variant: "standard",
                type: "number",
                sx: { width: 200 },
                disabled: !checked || isDisabled,
                label: t("label.total_responses_limit"),
                value: limit,
                onChange: (e) => {
                  changeLimit(e.target.value);
                }
              }
            )
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { sx: { mb: "10px", fontSize: "20px" }, children: t("edit_survey.limit_responses") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableContainer, { component: Paper, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Table, { sx: { minWidth: 650 }, "aria-label": "simple table", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { align: "left", children: t("edit_survey.surveyor") }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { align: "left", children: t("users_manage.roles") }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { align: "left", children: t("edit_survey.count") }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { align: "left", children: t("edit_survey.limit") })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableBody, { children: permissionAll == null ? void 0 : permissionAll.map((permission) => {
            return /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(TableCell, { align: "left", children: [
                permission.user.firstName,
                " ",
                permission.user.lastName
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { align: "left", children: permission.user.roles.map((role) => t(`label.${role}`)).join(", ") }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { align: "left", children: permission.count }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { align: "left", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                UserQuota,
                {
                  t,
                  quota: permission.quota,
                  isDisabled,
                  onSubmit: (quota) => {
                    putPermissionBySurveyor(permission.user.id, quota);
                  }
                }
              ) })
            ] }, permission.user.id);
          }) })
        ] }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Backdrop, { open: fetching, sx: { position: "absolute" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircularProgress, {}) })
  ] });
}
function UserQuota({ t, isDisabled, quota, onSubmit }) {
  const [checked, setChecked] = reactExports.useState(quota > 0);
  const [limit, setLimit] = reactExports.useState(quota >= 0 ? quota : "");
  const onChangeCheckbox = (e) => {
    if (!e.target.checked) {
      setLimit("");
    }
    setChecked(e.target.checked);
  };
  const changeLimit = (value) => {
    const intValue = parseInt(value);
    if (Number.isInteger(intValue) && intValue >= 0) {
      setLimit(intValue);
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      FormControlLabel,
      {
        disabled: isDisabled,
        control: /* @__PURE__ */ jsxRuntimeExports.jsx(Checkbox, { checked, onChange: onChangeCheckbox }),
        label: t("label.apply_quota")
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { flexDirection: "row", alignItems: "bottom", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        TextField,
        {
          type: "number",
          variant: "standard",
          label: t("label.responses_limit"),
          disabled: !checked || isDisabled,
          value: limit,
          onChange: (e) => {
            changeLimit(e.target.value);
          }
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Button,
        {
          onClick: () => onSubmit(limit == "" ? -1 : limit),
          disabled: limit == "" && quota < 0 || limit == quota,
          children: t("action_btn.save")
        }
      )
    ] })
  ] });
}
function EditSurvey() {
  const { t } = useTranslation("manage");
  const dispatch = useDispatch();
  const [fetching, setFetching] = reactExports.useState(true);
  const survey = useSelector((state) => state.editState.survey);
  const sections = [
    {
      id: "general",
      title: t("edit_survey.general"),
      component: /* @__PURE__ */ jsxRuntimeExports.jsx(EditSurveyGeneral, {})
    },
    {
      id: "sharing",
      title: t("edit_survey.sharing"),
      component: /* @__PURE__ */ jsxRuntimeExports.jsx(SurveySharing, {})
    },
    {
      id: "offline",
      title: t("edit_survey.offline"),
      component: /* @__PURE__ */ jsxRuntimeExports.jsx(SurveyOffline, {})
    },
    {
      id: "quotas",
      title: t("edit_survey.quotas"),
      component: /* @__PURE__ */ jsxRuntimeExports.jsx(SurveyQuota, {})
    },
    {
      id: "survey_users",
      title: t("edit_survey.survey_users"),
      component: /* @__PURE__ */ jsxRuntimeExports.jsx(SurveyUsers, {})
    },
    {
      id: "privacy",
      title: t("edit_survey.privacy"),
      component: /* @__PURE__ */ jsxRuntimeExports.jsx(SurveyPrivacy, {})
    }
  ];
  const processApirror = (e) => {
    setFetching(false);
    const processed = processError(e);
    switch (processed) {
      case PROCESSED_ERRORS.NETWORK_ERR:
      case PROCESSED_ERRORS.BACKEND_DOWN:
        dispatch(onError(processed));
        break;
    }
  };
  const error = useSelector((state) => state.editState.error);
  reactExports.useEffect(() => {
    setFetching(true);
    SurveyService.getSurvey().then((data) => {
      if (data) {
        dispatch(surveyReceived(data));
        loadPermissions(data.id);
      }
      setFetching(false);
    }).catch((err) => {
      processApirror(err);
    });
    dispatch(permissionsLoading(true));
  }, []);
  const loadPermissions = (surveyId) => {
    SurveyService.getSurveyPermissionAll(surveyId).then((data) => {
      if (data) {
        dispatch(permissionsReceived(data));
      }
      dispatch(permissionsLoading(false));
    }).catch((err) => {
      processApirror(err);
    });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { className: styles$7.mainContainer, children: [
    error && /* @__PURE__ */ jsxRuntimeExports.jsx(
      ProcessedError,
      {
        error,
        handleClose: () => dispatch(onErrorSeen())
      }
    ),
    !fetching && survey && sections.map((section) => {
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(Accordion$1, { defaultExpanded: false, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          AccordionSummary$1,
          {
            expandIcon: /* @__PURE__ */ jsxRuntimeExports.jsx(default_1$4, {}),
            "aria-controls": "panel1a-content",
            id: "panel1a-header",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "h5", children: section.title })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(AccordionDetails$1, { children: section.component })
      ] }, section.id);
    }),
    fetching && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: styles$7.loadingWrapper, children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircularProgress, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(EditingSurvey, {})
  ] });
}
const index = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: EditSurvey
}, Symbol.toStringTag, { value: "Module" }));
export {
  Accordion$1 as A,
  Collapse$1 as C,
  EditSurvey as E,
  AccordionSummary$1 as a,
  default_1$4 as b,
  classNames as c,
  default_1$3 as d,
  AccordionDetails$1 as e,
  index as i
};
//# sourceMappingURL=index-f64cad5f.js.map
