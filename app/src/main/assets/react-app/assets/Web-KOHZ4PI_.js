import { g as generateUtilityClasses, a as generateUtilityClass, c as createSvgIcon, j as jsxRuntimeExports, s as styled, P as Paper, b as capitalize, d as darken, l as lighten, _ as _extends, r as reactExports, u as useThemeProps, e as _objectWithoutPropertiesLoose, I as IconButton, f as clsx, h as composeClasses, i as useForkRef, k as useEventCallback, o as ownerDocument, m as extractEventHandlers, n as emphasize, p as useTheme, q as useSlotProps, G as Grow, T as TokenService, t as instance, v as instance$1, w as useNavigate, B as Box, x as useTranslation, S as Select, M as MenuItem, C as CookiesService, y as setDocumentLang, z as useDispatch, R as React, A as Menu, D as setLoading$1, E as useSelector, F as ErrorDialog, H as onEditErrorSeen, J as createTheme, K as rtlLanguage, L as setLangFromSession, N as cacheRtl, O as CacheProvider, Q as Provider, U as manageStore, V as ThemeProvider, W as StatefulLoadingIndicator, X as requireCreateSvgIcon, Y as interopRequireDefaultExports, Z as FormLabel, $ as Modal, a0 as Typography, a1 as Button, a2 as SurveyService, a3 as onApiError, a4 as PROCESSED_ERRORS, a5 as surveyAttributeChanged, a6 as surveyReceived, a7 as onError$1, a8 as getDefaultExportFromCjs, a9 as sharingUrl, aa as Dialog, ab as DialogTitle, ac as DialogContent, ad as setSaving, ae as DesignService, af as newVersionReceived, ag as FormControl, ah as InputLabel, ai as LANGUAGE_DEF, aj as changeLang, ak as onBaseLangChanged, al as onAdditionalLangAdded, am as onAdditionalLangRemoved, an as CircularProgress, ao as __vitePreload, ap as useParams, aq as useSearchParams, ar as onAddComponentsVisibilityChange, as as resetSetup, at as GetData, au as permissionsLoading, av as permissionsReceived, aw as setup, ax as surveySetup, ay as onResetLang, az as designStateReceived, aA as Routes, aB as Route, aC as LoadingIndicator, aD as runStore, aE as useLocation, aF as Navigate, aG as getparam } from "./index-RBnW6nvi.js";
import { L as LocalizationProvider, A as AdapterDayjs, D as DatePicker, T as Tabs, a as Tab } from "./DatePicker-AVKIEE0b.js";
import { F as FormHelperText, T as TextField } from "./TextField-lJ98NZsg.js";
import { S as Stack, F as FormControlLabel } from "./FormControlLabel-B-3jdeza.js";
import { C as Checkbox } from "./Checkbox-HSUkhdvK.js";
function getAlertUtilityClass(slot) {
  return generateUtilityClass("MuiAlert", slot);
}
const alertClasses = generateUtilityClasses("MuiAlert", ["root", "action", "icon", "message", "filled", "filledSuccess", "filledInfo", "filledWarning", "filledError", "outlined", "outlinedSuccess", "outlinedInfo", "outlinedWarning", "outlinedError", "standard", "standardSuccess", "standardInfo", "standardWarning", "standardError"]);
const alertClasses$1 = alertClasses;
const SuccessOutlinedIcon = createSvgIcon(/* @__PURE__ */ jsxRuntimeExports.jsx("path", {
  d: "M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2, 4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0, 0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z"
}), "SuccessOutlined");
const ReportProblemOutlinedIcon = createSvgIcon(/* @__PURE__ */ jsxRuntimeExports.jsx("path", {
  d: "M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z"
}), "ReportProblemOutlined");
const ErrorOutlineIcon = createSvgIcon(/* @__PURE__ */ jsxRuntimeExports.jsx("path", {
  d: "M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
}), "ErrorOutline");
const InfoOutlinedIcon = createSvgIcon(/* @__PURE__ */ jsxRuntimeExports.jsx("path", {
  d: "M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20, 12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10, 10 0 0,0 12,2M11,17H13V11H11V17Z"
}), "InfoOutlined");
const ClearIcon = createSvgIcon(/* @__PURE__ */ jsxRuntimeExports.jsx("path", {
  d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
}), "Close");
const _excluded$2 = ["action", "children", "className", "closeText", "color", "components", "componentsProps", "icon", "iconMapping", "onClose", "role", "severity", "slotProps", "slots", "variant"];
const useUtilityClasses$2 = (ownerState) => {
  const {
    variant,
    color,
    severity,
    classes
  } = ownerState;
  const slots = {
    root: ["root", "".concat(variant).concat(capitalize(color || severity)), "".concat(variant)],
    icon: ["icon"],
    message: ["message"],
    action: ["action"]
  };
  return composeClasses(slots, getAlertUtilityClass, classes);
};
const AlertRoot = styled(Paper, {
  name: "MuiAlert",
  slot: "Root",
  overridesResolver: (props, styles2) => {
    const {
      ownerState
    } = props;
    return [styles2.root, styles2[ownerState.variant], styles2["".concat(ownerState.variant).concat(capitalize(ownerState.color || ownerState.severity))]];
  }
})(({
  theme,
  ownerState
}) => {
  const getColor = theme.palette.mode === "light" ? darken : lighten;
  const getBackgroundColor = theme.palette.mode === "light" ? lighten : darken;
  const color = ownerState.color || ownerState.severity;
  return _extends({}, theme.typography.body2, {
    backgroundColor: "transparent",
    display: "flex",
    padding: "6px 16px"
  }, color && ownerState.variant === "standard" && {
    color: theme.vars ? theme.vars.palette.Alert["".concat(color, "Color")] : getColor(theme.palette[color].light, 0.6),
    backgroundColor: theme.vars ? theme.vars.palette.Alert["".concat(color, "StandardBg")] : getBackgroundColor(theme.palette[color].light, 0.9),
    ["& .".concat(alertClasses$1.icon)]: theme.vars ? {
      color: theme.vars.palette.Alert["".concat(color, "IconColor")]
    } : {
      color: theme.palette[color].main
    }
  }, color && ownerState.variant === "outlined" && {
    color: theme.vars ? theme.vars.palette.Alert["".concat(color, "Color")] : getColor(theme.palette[color].light, 0.6),
    border: "1px solid ".concat((theme.vars || theme).palette[color].light),
    ["& .".concat(alertClasses$1.icon)]: theme.vars ? {
      color: theme.vars.palette.Alert["".concat(color, "IconColor")]
    } : {
      color: theme.palette[color].main
    }
  }, color && ownerState.variant === "filled" && _extends({
    fontWeight: theme.typography.fontWeightMedium
  }, theme.vars ? {
    color: theme.vars.palette.Alert["".concat(color, "FilledColor")],
    backgroundColor: theme.vars.palette.Alert["".concat(color, "FilledBg")]
  } : {
    backgroundColor: theme.palette.mode === "dark" ? theme.palette[color].dark : theme.palette[color].main,
    color: theme.palette.getContrastText(theme.palette[color].main)
  }));
});
const AlertIcon = styled("div", {
  name: "MuiAlert",
  slot: "Icon",
  overridesResolver: (props, styles2) => styles2.icon
})({
  marginRight: 12,
  padding: "7px 0",
  display: "flex",
  fontSize: 22,
  opacity: 0.9
});
const AlertMessage = styled("div", {
  name: "MuiAlert",
  slot: "Message",
  overridesResolver: (props, styles2) => styles2.message
})({
  padding: "8px 0",
  minWidth: 0,
  overflow: "auto"
});
const AlertAction = styled("div", {
  name: "MuiAlert",
  slot: "Action",
  overridesResolver: (props, styles2) => styles2.action
})({
  display: "flex",
  alignItems: "flex-start",
  padding: "4px 0 0 16px",
  marginLeft: "auto",
  marginRight: -8
});
const defaultIconMapping = {
  success: /* @__PURE__ */ jsxRuntimeExports.jsx(SuccessOutlinedIcon, {
    fontSize: "inherit"
  }),
  warning: /* @__PURE__ */ jsxRuntimeExports.jsx(ReportProblemOutlinedIcon, {
    fontSize: "inherit"
  }),
  error: /* @__PURE__ */ jsxRuntimeExports.jsx(ErrorOutlineIcon, {
    fontSize: "inherit"
  }),
  info: /* @__PURE__ */ jsxRuntimeExports.jsx(InfoOutlinedIcon, {
    fontSize: "inherit"
  })
};
const Alert = /* @__PURE__ */ reactExports.forwardRef(function Alert2(inProps, ref) {
  var _ref, _slots$closeButton, _ref2, _slots$closeIcon, _slotProps$closeButto, _slotProps$closeIcon;
  const props = useThemeProps({
    props: inProps,
    name: "MuiAlert"
  });
  const {
    action: action2,
    children,
    className,
    closeText = "Close",
    color,
    components = {},
    componentsProps = {},
    icon: icon2,
    iconMapping = defaultIconMapping,
    onClose,
    role = "alert",
    severity = "success",
    slotProps = {},
    slots = {},
    variant = "standard"
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded$2);
  const ownerState = _extends({}, props, {
    color,
    severity,
    variant
  });
  const classes = useUtilityClasses$2(ownerState);
  const AlertCloseButton = (_ref = (_slots$closeButton = slots.closeButton) != null ? _slots$closeButton : components.CloseButton) != null ? _ref : IconButton;
  const AlertCloseIcon = (_ref2 = (_slots$closeIcon = slots.closeIcon) != null ? _slots$closeIcon : components.CloseIcon) != null ? _ref2 : ClearIcon;
  const closeButtonProps = (_slotProps$closeButto = slotProps.closeButton) != null ? _slotProps$closeButto : componentsProps.closeButton;
  const closeIconProps = (_slotProps$closeIcon = slotProps.closeIcon) != null ? _slotProps$closeIcon : componentsProps.closeIcon;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertRoot, _extends({
    role,
    elevation: 0,
    ownerState,
    className: clsx(classes.root, className),
    ref
  }, other, {
    children: [icon2 !== false ? /* @__PURE__ */ jsxRuntimeExports.jsx(AlertIcon, {
      ownerState,
      className: classes.icon,
      children: icon2 || iconMapping[severity] || defaultIconMapping[severity]
    }) : null, /* @__PURE__ */ jsxRuntimeExports.jsx(AlertMessage, {
      ownerState,
      className: classes.message,
      children
    }), action2 != null ? /* @__PURE__ */ jsxRuntimeExports.jsx(AlertAction, {
      ownerState,
      className: classes.action,
      children: action2
    }) : null, action2 == null && onClose ? /* @__PURE__ */ jsxRuntimeExports.jsx(AlertAction, {
      ownerState,
      className: classes.action,
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(AlertCloseButton, _extends({
        size: "small",
        "aria-label": closeText,
        title: closeText,
        color: "inherit",
        onClick: onClose
      }, closeButtonProps, {
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(AlertCloseIcon, _extends({
          fontSize: "small"
        }, closeIconProps))
      }))
    }) : null]
  }));
});
const Alert$1 = Alert;
function mapEventPropToEvent(eventProp) {
  return eventProp.substring(2).toLowerCase();
}
function clickedRootScrollbar(event, doc) {
  return doc.documentElement.clientWidth < event.clientX || doc.documentElement.clientHeight < event.clientY;
}
function ClickAwayListener(props) {
  const {
    children,
    disableReactTree = false,
    mouseEvent = "onClick",
    onClickAway,
    touchEvent = "onTouchEnd"
  } = props;
  const movedRef = reactExports.useRef(false);
  const nodeRef = reactExports.useRef(null);
  const activatedRef = reactExports.useRef(false);
  const syntheticEventRef = reactExports.useRef(false);
  reactExports.useEffect(() => {
    setTimeout(() => {
      activatedRef.current = true;
    }, 0);
    return () => {
      activatedRef.current = false;
    };
  }, []);
  const handleRef = useForkRef(
    // @ts-expect-error TODO upstream fix
    children.ref,
    nodeRef
  );
  const handleClickAway = useEventCallback((event) => {
    const insideReactTree = syntheticEventRef.current;
    syntheticEventRef.current = false;
    const doc = ownerDocument(nodeRef.current);
    if (!activatedRef.current || !nodeRef.current || "clientX" in event && clickedRootScrollbar(event, doc)) {
      return;
    }
    if (movedRef.current) {
      movedRef.current = false;
      return;
    }
    let insideDOM;
    if (event.composedPath) {
      insideDOM = event.composedPath().indexOf(nodeRef.current) > -1;
    } else {
      insideDOM = !doc.documentElement.contains(
        // @ts-expect-error returns `false` as intended when not dispatched from a Node
        event.target
      ) || nodeRef.current.contains(
        // @ts-expect-error returns `false` as intended when not dispatched from a Node
        event.target
      );
    }
    if (!insideDOM && (disableReactTree || !insideReactTree)) {
      onClickAway(event);
    }
  });
  const createHandleSynthetic = (handlerName) => (event) => {
    syntheticEventRef.current = true;
    const childrenPropsHandler = children.props[handlerName];
    if (childrenPropsHandler) {
      childrenPropsHandler(event);
    }
  };
  const childrenProps = {
    ref: handleRef
  };
  if (touchEvent !== false) {
    childrenProps[touchEvent] = createHandleSynthetic(touchEvent);
  }
  reactExports.useEffect(() => {
    if (touchEvent !== false) {
      const mappedTouchEvent = mapEventPropToEvent(touchEvent);
      const doc = ownerDocument(nodeRef.current);
      const handleTouchMove = () => {
        movedRef.current = true;
      };
      doc.addEventListener(mappedTouchEvent, handleClickAway);
      doc.addEventListener("touchmove", handleTouchMove);
      return () => {
        doc.removeEventListener(mappedTouchEvent, handleClickAway);
        doc.removeEventListener("touchmove", handleTouchMove);
      };
    }
    return void 0;
  }, [handleClickAway, touchEvent]);
  if (mouseEvent !== false) {
    childrenProps[mouseEvent] = createHandleSynthetic(mouseEvent);
  }
  reactExports.useEffect(() => {
    if (mouseEvent !== false) {
      const mappedMouseEvent = mapEventPropToEvent(mouseEvent);
      const doc = ownerDocument(nodeRef.current);
      doc.addEventListener(mappedMouseEvent, handleClickAway);
      return () => {
        doc.removeEventListener(mappedMouseEvent, handleClickAway);
      };
    }
    return void 0;
  }, [handleClickAway, mouseEvent]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(reactExports.Fragment, {
    children: /* @__PURE__ */ reactExports.cloneElement(children, childrenProps)
  });
}
function useSnackbar(parameters) {
  const {
    autoHideDuration = null,
    disableWindowBlurListener = false,
    onClose,
    open,
    resumeHideDuration
  } = parameters;
  const timerAutoHide = reactExports.useRef();
  reactExports.useEffect(() => {
    if (!open) {
      return void 0;
    }
    function handleKeyDown(nativeEvent) {
      if (!nativeEvent.defaultPrevented) {
        if (nativeEvent.key === "Escape" || nativeEvent.key === "Esc") {
          onClose == null ? void 0 : onClose(nativeEvent, "escapeKeyDown");
        }
      }
    }
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, onClose]);
  const handleClose = useEventCallback((event, reason) => {
    onClose == null ? void 0 : onClose(event, reason);
  });
  const setAutoHideTimer = useEventCallback((autoHideDurationParam) => {
    if (!onClose || autoHideDurationParam == null) {
      return;
    }
    clearTimeout(timerAutoHide.current);
    timerAutoHide.current = setTimeout(() => {
      handleClose(null, "timeout");
    }, autoHideDurationParam);
  });
  reactExports.useEffect(() => {
    if (open) {
      setAutoHideTimer(autoHideDuration);
    }
    return () => {
      clearTimeout(timerAutoHide.current);
    };
  }, [open, autoHideDuration, setAutoHideTimer]);
  const handleClickAway = (event) => {
    onClose == null ? void 0 : onClose(event, "clickaway");
  };
  const handlePause = () => {
    clearTimeout(timerAutoHide.current);
  };
  const handleResume = reactExports.useCallback(() => {
    if (autoHideDuration != null) {
      setAutoHideTimer(resumeHideDuration != null ? resumeHideDuration : autoHideDuration * 0.5);
    }
  }, [autoHideDuration, resumeHideDuration, setAutoHideTimer]);
  const createHandleBlur = (otherHandlers) => (event) => {
    const onBlurCallback = otherHandlers.onBlur;
    onBlurCallback == null ? void 0 : onBlurCallback(event);
    handleResume();
  };
  const createHandleFocus = (otherHandlers) => (event) => {
    const onFocusCallback = otherHandlers.onFocus;
    onFocusCallback == null ? void 0 : onFocusCallback(event);
    handlePause();
  };
  const createMouseEnter = (otherHandlers) => (event) => {
    const onMouseEnterCallback = otherHandlers.onMouseEnter;
    onMouseEnterCallback == null ? void 0 : onMouseEnterCallback(event);
    handlePause();
  };
  const createMouseLeave = (otherHandlers) => (event) => {
    const onMouseLeaveCallback = otherHandlers.onMouseLeave;
    onMouseLeaveCallback == null ? void 0 : onMouseLeaveCallback(event);
    handleResume();
  };
  reactExports.useEffect(() => {
    if (!disableWindowBlurListener && open) {
      window.addEventListener("focus", handleResume);
      window.addEventListener("blur", handlePause);
      return () => {
        window.removeEventListener("focus", handleResume);
        window.removeEventListener("blur", handlePause);
      };
    }
    return void 0;
  }, [disableWindowBlurListener, handleResume, open]);
  const getRootProps = (otherHandlers = {}) => {
    const propsEventHandlers = extractEventHandlers(parameters);
    const externalEventHandlers = _extends({}, propsEventHandlers, otherHandlers);
    return _extends({
      // ClickAwayListener adds an `onClick` prop which results in the alert not being announced.
      // See https://github.com/mui/material-ui/issues/29080
      role: "presentation"
    }, externalEventHandlers, {
      onBlur: createHandleBlur(externalEventHandlers),
      onFocus: createHandleFocus(externalEventHandlers),
      onMouseEnter: createMouseEnter(externalEventHandlers),
      onMouseLeave: createMouseLeave(externalEventHandlers)
    });
  };
  return {
    getRootProps,
    onClickAway: handleClickAway
  };
}
function getSnackbarContentUtilityClass(slot) {
  return generateUtilityClass("MuiSnackbarContent", slot);
}
generateUtilityClasses("MuiSnackbarContent", ["root", "message", "action"]);
const _excluded$1 = ["action", "className", "message", "role"];
const useUtilityClasses$1 = (ownerState) => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ["root"],
    action: ["action"],
    message: ["message"]
  };
  return composeClasses(slots, getSnackbarContentUtilityClass, classes);
};
const SnackbarContentRoot = styled(Paper, {
  name: "MuiSnackbarContent",
  slot: "Root",
  overridesResolver: (props, styles2) => styles2.root
})(({
  theme
}) => {
  const emphasis = theme.palette.mode === "light" ? 0.8 : 0.98;
  const backgroundColor = emphasize(theme.palette.background.default, emphasis);
  return _extends({}, theme.typography.body2, {
    color: theme.vars ? theme.vars.palette.SnackbarContent.color : theme.palette.getContrastText(backgroundColor),
    backgroundColor: theme.vars ? theme.vars.palette.SnackbarContent.bg : backgroundColor,
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
    padding: "6px 16px",
    borderRadius: (theme.vars || theme).shape.borderRadius,
    flexGrow: 1,
    [theme.breakpoints.up("sm")]: {
      flexGrow: "initial",
      minWidth: 288
    }
  });
});
const SnackbarContentMessage = styled("div", {
  name: "MuiSnackbarContent",
  slot: "Message",
  overridesResolver: (props, styles2) => styles2.message
})({
  padding: "8px 0"
});
const SnackbarContentAction = styled("div", {
  name: "MuiSnackbarContent",
  slot: "Action",
  overridesResolver: (props, styles2) => styles2.action
})({
  display: "flex",
  alignItems: "center",
  marginLeft: "auto",
  paddingLeft: 16,
  marginRight: -8
});
const SnackbarContent = /* @__PURE__ */ reactExports.forwardRef(function SnackbarContent2(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiSnackbarContent"
  });
  const {
    action: action2,
    className,
    message,
    role = "alert"
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded$1);
  const ownerState = props;
  const classes = useUtilityClasses$1(ownerState);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(SnackbarContentRoot, _extends({
    role,
    square: true,
    elevation: 6,
    className: clsx(classes.root, className),
    ownerState,
    ref
  }, other, {
    children: [/* @__PURE__ */ jsxRuntimeExports.jsx(SnackbarContentMessage, {
      className: classes.message,
      ownerState,
      children: message
    }), action2 ? /* @__PURE__ */ jsxRuntimeExports.jsx(SnackbarContentAction, {
      className: classes.action,
      ownerState,
      children: action2
    }) : null]
  }));
});
const SnackbarContent$1 = SnackbarContent;
function getSnackbarUtilityClass(slot) {
  return generateUtilityClass("MuiSnackbar", slot);
}
generateUtilityClasses("MuiSnackbar", ["root", "anchorOriginTopCenter", "anchorOriginBottomCenter", "anchorOriginTopRight", "anchorOriginBottomRight", "anchorOriginTopLeft", "anchorOriginBottomLeft"]);
const _excluded = ["onEnter", "onExited"], _excluded2 = ["action", "anchorOrigin", "autoHideDuration", "children", "className", "ClickAwayListenerProps", "ContentProps", "disableWindowBlurListener", "message", "onBlur", "onClose", "onFocus", "onMouseEnter", "onMouseLeave", "open", "resumeHideDuration", "TransitionComponent", "transitionDuration", "TransitionProps"];
const useUtilityClasses = (ownerState) => {
  const {
    classes,
    anchorOrigin
  } = ownerState;
  const slots = {
    root: ["root", "anchorOrigin".concat(capitalize(anchorOrigin.vertical)).concat(capitalize(anchorOrigin.horizontal))]
  };
  return composeClasses(slots, getSnackbarUtilityClass, classes);
};
const SnackbarRoot = styled("div", {
  name: "MuiSnackbar",
  slot: "Root",
  overridesResolver: (props, styles2) => {
    const {
      ownerState
    } = props;
    return [styles2.root, styles2["anchorOrigin".concat(capitalize(ownerState.anchorOrigin.vertical)).concat(capitalize(ownerState.anchorOrigin.horizontal))]];
  }
})(({
  theme,
  ownerState
}) => {
  const center = {
    left: "50%",
    right: "auto",
    transform: "translateX(-50%)"
  };
  return _extends({
    zIndex: (theme.vars || theme).zIndex.snackbar,
    position: "fixed",
    display: "flex",
    left: 8,
    right: 8,
    justifyContent: "center",
    alignItems: "center"
  }, ownerState.anchorOrigin.vertical === "top" ? {
    top: 8
  } : {
    bottom: 8
  }, ownerState.anchorOrigin.horizontal === "left" && {
    justifyContent: "flex-start"
  }, ownerState.anchorOrigin.horizontal === "right" && {
    justifyContent: "flex-end"
  }, {
    [theme.breakpoints.up("sm")]: _extends({}, ownerState.anchorOrigin.vertical === "top" ? {
      top: 24
    } : {
      bottom: 24
    }, ownerState.anchorOrigin.horizontal === "center" && center, ownerState.anchorOrigin.horizontal === "left" && {
      left: 24,
      right: "auto"
    }, ownerState.anchorOrigin.horizontal === "right" && {
      right: 24,
      left: "auto"
    })
  });
});
const Snackbar = /* @__PURE__ */ reactExports.forwardRef(function Snackbar2(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiSnackbar"
  });
  const theme = useTheme();
  const defaultTransitionDuration = {
    enter: theme.transitions.duration.enteringScreen,
    exit: theme.transitions.duration.leavingScreen
  };
  const {
    action: action2,
    anchorOrigin: {
      vertical,
      horizontal
    } = {
      vertical: "bottom",
      horizontal: "left"
    },
    autoHideDuration = null,
    children,
    className,
    ClickAwayListenerProps,
    ContentProps,
    disableWindowBlurListener = false,
    message,
    open,
    TransitionComponent = Grow,
    transitionDuration = defaultTransitionDuration,
    TransitionProps: {
      onEnter,
      onExited
    } = {}
  } = props, TransitionProps = _objectWithoutPropertiesLoose(props.TransitionProps, _excluded), other = _objectWithoutPropertiesLoose(props, _excluded2);
  const ownerState = _extends({}, props, {
    anchorOrigin: {
      vertical,
      horizontal
    },
    autoHideDuration,
    disableWindowBlurListener,
    TransitionComponent,
    transitionDuration
  });
  const classes = useUtilityClasses(ownerState);
  const {
    getRootProps,
    onClickAway
  } = useSnackbar(_extends({}, ownerState));
  const [exited, setExited] = reactExports.useState(true);
  const rootProps = useSlotProps({
    elementType: SnackbarRoot,
    getSlotProps: getRootProps,
    externalForwardedProps: other,
    ownerState,
    additionalProps: {
      ref
    },
    className: [classes.root, className]
  });
  const handleExited = (node) => {
    setExited(true);
    if (onExited) {
      onExited(node);
    }
  };
  const handleEnter = (node, isAppearing) => {
    setExited(false);
    if (onEnter) {
      onEnter(node, isAppearing);
    }
  };
  if (!open && exited) {
    return null;
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(ClickAwayListener, _extends({
    onClickAway
  }, ClickAwayListenerProps, {
    children: /* @__PURE__ */ jsxRuntimeExports.jsx(SnackbarRoot, _extends({}, rootProps, {
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(TransitionComponent, _extends({
        appear: true,
        in: open,
        timeout: transitionDuration,
        direction: vertical === "top" ? "down" : "up",
        onEnter: handleEnter,
        onExited: handleExited
      }, TransitionProps, {
        children: children || /* @__PURE__ */ jsxRuntimeExports.jsx(SnackbarContent$1, _extends({
          message,
          action: action2
        }, ContentProps))
      }))
    }))
  }));
});
const Snackbar$1 = Snackbar;
const MANAGE_SURVEY_LANDING_PAGES = {
  DESIGN: "design-survey",
  PREVIEW: "preview",
  RESPONSES: "responses",
  SETTINGS: "edit-survey",
  RESPONSE: "response",
  NONE: ""
};
const routes = {
  designSurvey: "/".concat(MANAGE_SURVEY_LANDING_PAGES.DESIGN, "/:surveyId"),
  editSurvey: "/".concat(MANAGE_SURVEY_LANDING_PAGES.SETTINGS, "/:surveyId"),
  responses: "/".concat(MANAGE_SURVEY_LANDING_PAGES.RESPONSES, "/:surveyId"),
  response: "/".concat(MANAGE_SURVEY_LANDING_PAGES.RESPONSE, "/:surveyId/:responseId"),
  runSurvey: "/run-survey/:surveyId",
  previewSurvey: "/preview-survey/:surveyId",
  previewGuestSurvey: "/preview-guest-survey/:surveyId",
  preview: "/preview/:surveyId",
  login: "/login",
  signup: "/signup",
  confirmSignup: "/confirm-signup/:token",
  forgotPassword: "/forgot-password",
  resetPassword: "/reset-password",
  dashboard: "/",
  manageUsers: "/manage-users",
  addUser: "/add-user",
  editUser: "/edit-user/:userId",
  profile: "/profile",
  createSurvey: "/create-survey",
  dashboard1: "",
  page404: "*"
};
const ROLES = {
  SUPER_ADMIN: "super_admin",
  SURVEY_ADMIN: "survey_admin",
  SURVEYOR: "surveyor",
  ANALYST: "analyst"
};
const isSurveyAdmin = () => {
  const roles = TokenService.getUser().roles;
  return roles.indexOf(ROLES.SUPER_ADMIN) != -1 || roles.indexOf(ROLES.SURVEY_ADMIN) != -1;
};
const isSurveyor = (user) => {
  const roles = user.roles;
  return roles.indexOf(ROLES.SUPER_ADMIN) != -1 || roles.indexOf(ROLES.SURVEYOR) != -1;
};
const isAnalyst = (user) => {
  const roles = user.roles;
  return roles.indexOf(ROLES.SUPER_ADMIN) != -1 || roles.indexOf(ROLES.ANALYST) != -1 || roles.indexOf(ROLES.SURVEY_ADMIN) != -1;
};
const isAnalystOnly = (user) => {
  const roles = user.roles;
  return roles.length == 1 && roles.indexOf(ROLES.ANALYST) != -1;
};
const isSurveyorOnly = (user) => {
  const roles = user.roles;
  return roles.length == 1 && roles.indexOf(ROLES.SURVEYOR) != -1;
};
const Edit = createSvgIcon(/* @__PURE__ */ jsxRuntimeExports.jsx("path", {
  d: "M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"
}), "Edit");
const GTranslate = createSvgIcon(/* @__PURE__ */ jsxRuntimeExports.jsx("path", {
  d: "M21 4H11l-1-3H3c-1.1 0-2 .9-2 2v15c0 1.1.9 2 2 2h8l1 3h9c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM7 16c-2.76 0-5-2.24-5-5s2.24-5 5-5c1.35 0 2.48.5 3.35 1.3L9.03 8.57c-.38-.36-1.04-.78-2.03-.78-1.74 0-3.15 1.44-3.15 3.21S5.26 14.21 7 14.21c2.01 0 2.84-1.44 2.92-2.41H7v-1.71h4.68c.07.31.12.61.12 1.02C11.8 13.97 9.89 16 7 16zm6.17-5.42h3.7c-.43 1.25-1.11 2.43-2.05 3.47-.31-.35-.6-.72-.86-1.1l-.79-2.37zm8.33 9.92c0 .55-.45 1-1 1H14l2-2.5-1.04-3.1 3.1 3.1.92-.92-3.3-3.25.02-.02c1.13-1.25 1.93-2.69 2.4-4.22H20v-1.3h-4.53V8h-1.29v1.29h-1.44L11.46 5.5h9.04c.55 0 1 .45 1 1v14z"
}), "GTranslate");
const KeyboardArrowDown = createSvgIcon(/* @__PURE__ */ jsxRuntimeExports.jsx("path", {
  d: "M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"
}), "KeyboardArrowDown");
const KeyboardArrowUp = createSvgIcon(/* @__PURE__ */ jsxRuntimeExports.jsx("path", {
  d: "M7.41 15.41 12 10.83l4.59 4.58L18 14l-6-6-6 6z"
}), "KeyboardArrowUp");
const LogoutOutlined = createSvgIcon(/* @__PURE__ */ jsxRuntimeExports.jsx("path", {
  d: "m17 8-1.41 1.41L17.17 11H9v2h8.17l-1.58 1.58L17 16l4-4-4-4zM5 5h7V3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h7v-2H5V5z"
}), "LogoutOutlined");
const Person = createSvgIcon(/* @__PURE__ */ jsxRuntimeExports.jsx("path", {
  d: "M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
}), "Person");
const Settings = createSvgIcon(/* @__PURE__ */ jsxRuntimeExports.jsx("path", {
  d: "M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"
}), "Settings");
const Visibility$1 = createSvgIcon(/* @__PURE__ */ jsxRuntimeExports.jsx("path", {
  d: "M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"
}), "Visibility");
class AuthService {
  async login(email, password) {
    TokenService.removeSession();
    return instance.post("/user/login", {
      email,
      password
    }).then((response) => {
      if (response.data) {
        TokenService.setSession(response.data);
      }
      return response.data;
    });
  }
  async signup({ email, password, domain, firstName, lastName }) {
    return instance.post("/user/signup", {
      email,
      password,
      firstName,
      lastName
    }).then((response) => {
      return response.data;
    });
  }
  async googleSignIn(credentials) {
    TokenService.removeSession();
    return instance.post("/user/google_sign_in", credentials).then((response) => {
      if (response.data) {
        TokenService.setSession(response.data);
      }
      return response.data;
    });
  }
  async confirmSignup(token) {
    return instance.post("/user/confirm_admin", {
      token
    }).then((response) => {
      if (response.data) {
        TokenService.setSession(response.data);
      }
      return response.data;
    });
  }
  async forgotPassword(email) {
    return instance.post("/user/forgot_password", {
      email
    }).then((response) => {
      return response.data;
    });
  }
  async resetPassword(refreshToken, newPassword) {
    return instance.post("/user/reset_password", { refreshToken, newPassword }).then((response) => {
      if (response.data) {
        TokenService.setSession(response.data);
      }
      return response.data;
    });
  }
  async logout() {
    try {
      const response = await instance$1.post("/logout");
      TokenService.removeSession();
      return response.status == 200;
    } catch (error) {
      TokenService.removeSession();
    }
  }
}
const AuthService$1 = new AuthService();
const header = "_header_nqbc9_1";
const userInfo = "_userInfo_nqbc9_14";
const styles$7 = {
  header,
  userInfo
};
const logo = "_logo_21mob_1";
const styles$6 = {
  logo
};
const Logo = () => {
  const nav = useNavigate();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { className: styles$6.logo, onClick: () => nav("/"), children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/qlarr.png", style: { height: "40px" } }) });
};
const LanguageSelector = () => {
  const { i18n } = useTranslation();
  const handleChange = (event) => {
    CookiesService.setValue(event.target.value, "lang");
    i18n.changeLanguage(event.target.value);
    setDocumentLang(event.target.value);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    Select,
    {
      onChange: handleChange,
      value: i18n.language,
      IconComponent: KeyboardArrowDown,
      sx: {
        ".MuiOutlinedInput-input": {
          padding: "5.5px 15px",
          position: "relative",
          color: "#181735",
          fontSize: ".875rem",
          fontWeight: "600",
          "&::after": {
            content: '""',
            height: "30px",
            borderRight: "2px solid #ececfd",
            margin: "0px 15px"
          }
        },
        "& .MuiOutlinedInput-notchedOutline": {
          borderRadius: "10px",
          border: "1px solid #ececfd"
        },
        "& .MuiSvgIcon-root": {
          color: "#181735",
          right: "15px"
        }
      },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { value: "en", title: "English", children: "EN" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { value: "de", title: "Deutsch", children: "DE" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { value: "ar", title: "العربية", children: "AR" })
      ]
    }
  );
};
const Header = () => {
  const nav = useNavigate();
  const dispatch = useDispatch();
  const logout = () => {
    dispatch(setLoading$1(true));
    AuthService$1.logout().then(() => {
      nav(routes.login);
    }).catch((e) => {
      nav(routes.login);
    }).finally(() => {
      dispatch(setLoading$1(false));
    });
  };
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { className: styles$7.header, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Logo, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { className: styles$7.userInfo, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(LanguageSelector, {}),
      TokenService.isAuthenticated() && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Box,
          {
            sx: {
              display: "inline-flex",
              alignItems: "center",
              border: "1px solid #ececfd",
              borderRadius: "10px",
              cursor: "pointer",
              padding: ".125rem 1rem",
              backgroundColor: open ? "#e3f2fd" : "#fff"
            },
            onClick: handleClick,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Person, { sx: { color: "#16205b", width: 32, height: 32 } }),
              open ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                KeyboardArrowUp,
                {
                  sx: {
                    transition: "transform 0.3s ease",
                    color: "#181735",
                    width: 32,
                    height: 32
                  }
                }
              ) : /* @__PURE__ */ jsxRuntimeExports.jsx(
                KeyboardArrowDown,
                {
                  sx: {
                    transition: "transform 0.3s ease",
                    color: "#181735",
                    width: 32,
                    height: 32
                  }
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Menu,
          {
            anchorEl,
            id: "account-menu",
            open,
            onClose: handleClose,
            PaperProps: {
              elevation: 0,
              sx: {
                width: "200px",
                overflow: "visible",
                filter: "drop-shadow(0px 4px 6px rgba(0,0,0,0.1))",
                mt: 1.5,
                borderRadius: "5px",
                backgroundColor: "#ffffff",
                color: "#333333",
                "& .MuiMenuItem-root": {
                  "&:hover": {
                    backgroundColor: "#f5f5f5"
                  },
                  "& .MuiListItemIcon-root": {
                    minWidth: "40px"
                  }
                },
                transition: "transform 0.2s ease"
              }
            },
            transformOrigin: { horizontal: "right", vertical: "top" },
            anchorOrigin: { horizontal: "right", vertical: "bottom" },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                MenuItem,
                {
                  onClick: () => {
                    handleClose();
                    setTimeout(() => {
                      nav(routes.profile);
                    }, 150);
                  },
                  sx: { display: "flex", justifyContent: "space-between" },
                  children: [
                    "Profile",
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Person, { sx: { color: "#16205b", width: 25, height: 25 } })
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                MenuItem,
                {
                  onClick: () => {
                    logout();
                    handleClose();
                  },
                  sx: { display: "flex", justifyContent: "space-between" },
                  children: [
                    "Logout",
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      LogoutOutlined,
                      {
                        sx: { color: "#16205b", width: 25, height: 25 }
                      }
                    )
                  ]
                }
              )
            ]
          }
        )
      ] })
    ] })
  ] });
};
function ErrorWrapper() {
  const dispatch = useDispatch();
  const error = useSelector((state) => {
    return state.editState.error;
  });
  const setErrorSeen = () => {
    dispatch(onEditErrorSeen());
  };
  return error && !error.seen && /* @__PURE__ */ jsxRuntimeExports.jsx(ErrorDialog, { setErrorSeen, error });
}
const ManagePageWrapper = ({ children }) => {
  const lang = CookiesService.getValue("lang");
  const { i18n } = useTranslation("manage");
  const rtlTheme = React.useCallback(
    createTheme({
      direction: rtlLanguage.includes(lang) ? "rtl" : "ltr"
    }),
    [lang]
  );
  reactExports.useEffect(() => {
    document.body.style.overflow = "hidden";
    setLangFromSession(i18n);
  }, [lang]);
  const cacheRtlMemo = reactExports.useMemo(() => cacheRtl(lang), [lang]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(CacheProvider, { value: cacheRtlMemo, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Provider, { store: manageStore, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(ThemeProvider, { theme: rtlTheme, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Header, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ErrorWrapper, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(StatefulLoadingIndicator, {}),
    children
  ] }) }) });
};
var Palette = {};
var _interopRequireDefault$a = interopRequireDefaultExports;
Object.defineProperty(Palette, "__esModule", {
  value: true
});
var default_1$a = Palette.default = void 0;
var _createSvgIcon$a = _interopRequireDefault$a(requireCreateSvgIcon());
var _jsxRuntime$a = jsxRuntimeExports;
var _default$a = (0, _createSvgIcon$a.default)(/* @__PURE__ */ (0, _jsxRuntime$a.jsx)("path", {
  d: "M12 2C6.49 2 2 6.49 2 12s4.49 10 10 10c1.38 0 2.5-1.12 2.5-2.5 0-.61-.23-1.2-.64-1.67-.08-.1-.13-.21-.13-.33 0-.28.22-.5.5-.5H16c3.31 0 6-2.69 6-6 0-4.96-4.49-9-10-9zm5.5 11c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm-3-4c-.83 0-1.5-.67-1.5-1.5S13.67 6 14.5 6s1.5.67 1.5 1.5S15.33 9 14.5 9zM5 11.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5S7.33 13 6.5 13 5 12.33 5 11.5zm6-4c0 .83-.67 1.5-1.5 1.5S8 8.33 8 7.5 8.67 6 9.5 6s1.5.67 1.5 1.5z"
}), "Palette");
default_1$a = Palette.default = _default$a;
var Visibility = {};
var _interopRequireDefault$9 = interopRequireDefaultExports;
Object.defineProperty(Visibility, "__esModule", {
  value: true
});
var default_1$9 = Visibility.default = void 0;
var _createSvgIcon$9 = _interopRequireDefault$9(requireCreateSvgIcon());
var _jsxRuntime$9 = jsxRuntimeExports;
var _default$9 = (0, _createSvgIcon$9.default)(/* @__PURE__ */ (0, _jsxRuntime$9.jsx)("path", {
  d: "M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"
}), "Visibility");
default_1$9 = Visibility.default = _default$9;
var Send = {};
var _interopRequireDefault$8 = interopRequireDefaultExports;
Object.defineProperty(Send, "__esModule", {
  value: true
});
var default_1$8 = Send.default = void 0;
var _createSvgIcon$8 = _interopRequireDefault$8(requireCreateSvgIcon());
var _jsxRuntime$8 = jsxRuntimeExports;
var _default$8 = (0, _createSvgIcon$8.default)(/* @__PURE__ */ (0, _jsxRuntime$8.jsx)("path", {
  d: "M2.01 21 23 12 2.01 3 2 10l15 2-15 2z"
}), "Send");
default_1$8 = Send.default = _default$8;
const surveyHeader = "_surveyHeader_14mz7_1";
const icon = "_icon_14mz7_7";
const styles$5 = {
  surveyHeader,
  icon
};
var Close = {};
var _interopRequireDefault$7 = interopRequireDefaultExports;
Object.defineProperty(Close, "__esModule", {
  value: true
});
var default_1$7 = Close.default = void 0;
var _createSvgIcon$7 = _interopRequireDefault$7(requireCreateSvgIcon());
var _jsxRuntime$7 = jsxRuntimeExports;
var _default$7 = (0, _createSvgIcon$7.default)(/* @__PURE__ */ (0, _jsxRuntime$7.jsx)("path", {
  d: "M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
}), "Close");
default_1$7 = Close.default = _default$7;
var Computer = {};
var _interopRequireDefault$6 = interopRequireDefaultExports;
Object.defineProperty(Computer, "__esModule", {
  value: true
});
var default_1$6 = Computer.default = void 0;
var _createSvgIcon$6 = _interopRequireDefault$6(requireCreateSvgIcon());
var _jsxRuntime$6 = jsxRuntimeExports;
var _default$6 = (0, _createSvgIcon$6.default)(/* @__PURE__ */ (0, _jsxRuntime$6.jsx)("path", {
  d: "M20 18c1.1 0 1.99-.9 1.99-2L22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2H0v2h24v-2h-4zM4 6h16v10H4V6z"
}), "Computer");
default_1$6 = Computer.default = _default$6;
var PhoneAndroid = {};
var _interopRequireDefault$5 = interopRequireDefaultExports;
Object.defineProperty(PhoneAndroid, "__esModule", {
  value: true
});
var default_1$5 = PhoneAndroid.default = void 0;
var _createSvgIcon$5 = _interopRequireDefault$5(requireCreateSvgIcon());
var _jsxRuntime$5 = jsxRuntimeExports;
var _default$5 = (0, _createSvgIcon$5.default)(/* @__PURE__ */ (0, _jsxRuntime$5.jsx)("path", {
  d: "M16 1H8C6.34 1 5 2.34 5 4v16c0 1.66 1.34 3 3 3h8c1.66 0 3-1.34 3-3V4c0-1.66-1.34-3-3-3zm-2 20h-4v-1h4v1zm3.25-3H6.75V4h10.5v14z"
}), "PhoneAndroid");
default_1$5 = PhoneAndroid.default = _default$5;
var WifiOff = {};
var _interopRequireDefault$4 = interopRequireDefaultExports;
Object.defineProperty(WifiOff, "__esModule", {
  value: true
});
var default_1$4 = WifiOff.default = void 0;
var _createSvgIcon$4 = _interopRequireDefault$4(requireCreateSvgIcon());
var _jsxRuntime$4 = jsxRuntimeExports;
var _default$4 = (0, _createSvgIcon$4.default)(/* @__PURE__ */ (0, _jsxRuntime$4.jsx)("path", {
  d: "M22.99 9C19.15 5.16 13.8 3.76 8.84 4.78l2.52 2.52c3.47-.17 6.99 1.05 9.63 3.7l2-2zm-4 4c-1.29-1.29-2.84-2.13-4.49-2.56l3.53 3.53.96-.97zM2 3.05 5.07 6.1C3.6 6.82 2.22 7.78 1 9l1.99 2c1.24-1.24 2.67-2.16 4.2-2.77l2.24 2.24C7.81 10.89 6.27 11.73 5 13v.01L6.99 15c1.36-1.36 3.14-2.04 4.92-2.06L18.98 20l1.27-1.26L3.29 1.79 2 3.05zM9 17l3 3 3-3c-1.65-1.66-4.34-1.66-6 0z"
}), "WifiOff");
default_1$4 = WifiOff.default = _default$4;
const renderInput = (props) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(TextField, { ...props, variant: "outlined" });
};
const SurveyActiveFromTo = ({
  error,
  surveyActiveFrom,
  surveyActiveTo,
  onSurveyActiveFromChanged,
  onSurveyActiveToChanged,
  disabled
}) => {
  const { t } = useTranslation("manage");
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(LocalizationProvider, { dateAdapter: AdapterDayjs, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(FormLabel, { children: t("label.survey_active") }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      DatePicker,
      {
        disabled,
        label: t("label.from"),
        value: surveyActiveFrom,
        onChange: onSurveyActiveFromChanged,
        renderInput
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      DatePicker,
      {
        disabled,
        label: t("label.to"),
        value: surveyActiveTo,
        onChange: onSurveyActiveToChanged,
        renderInput
      }
    ),
    error && /* @__PURE__ */ jsxRuntimeExports.jsx(FormHelperText, { style: { color: "red" }, children: error })
  ] });
};
const blockItem = "_blockItem_18b1k_3";
const errorText$1 = "_errorText_18b1k_10";
const saveNameButton = "_saveNameButton_18b1k_14";
const styles$4 = {
  blockItem,
  errorText: errorText$1,
  saveNameButton
};
const SURVEY_MODE = {
  MIXED: "mixed",
  WEB: "web",
  OFFLINE: "offline"
};
const SURVEY_STATUS = {
  ACTIVE: "active",
  DRAFT: "draft",
  CLOSED: "closed"
};
const NAVIGATION_MODE = {
  ALL_IN_ONE: "all_in_one",
  GROUP_BY_GROUP: "group_by_group",
  QUESTION_BY_QUESTION: "question_by_question"
};
const SURVEY = {
  ALLOW_PREVIOUS: "allowPrevious",
  ALLOW_INCOMPLETE: "allowIncomplete",
  ALLOW_JUMP: "allowJump",
  SKIP_INVALID: "skipInvalid",
  BACKGROUND_AUDIO: "backgroundAudio",
  RECORD_GPS: "recordGps",
  CAN_LOCK_SURVEY: "canLockSurvey",
  SAVE_IP: "saveIp",
  SAVE_TIMINGS: "saveTimings",
  PUBLIC_WITHIN_ORG: "publicWithinOrg"
};
const serverDateTimeToLocalDateTime = (serverDate) => {
  const dateInUTC = new Date(serverDate);
  return new Date(
    dateInUTC.getTime() - dateInUTC.getTimezoneOffset() * 60 * 1e3
  );
};
const localDateToServerDateTime = (date) => {
  const adjustedDate = new Date(
    date.getTime() - date.getTimezoneOffset() * 60 * 1e3
  );
  return adjustedDate.toISOString().split(".")[0].replace("T", " ");
};
const formatlocalDateTime = (date) => {
  const year = date.getFullYear();
  const month = ("0" + (date.getMonth() + 1)).slice(-2);
  const day = ("0" + date.getDate()).slice(-2);
  const hours = ("0" + date.getHours()).slice(-2);
  const minutes = ("0" + date.getMinutes()).slice(-2);
  const seconds = ("0" + date.getSeconds()).slice(-2);
  return "".concat(year, "-").concat(month, "-").concat(day, " ").concat(hours, ":").concat(minutes, ":").concat(seconds);
};
const dayMonthUeatFormat = (date) => {
  const yyyy = date.getFullYear();
  let mm = date.getMonth() + 1;
  let dd = date.getDate();
  if (dd < 10)
    dd = "0" + dd;
  if (mm < 10)
    mm = "0" + mm;
  return dd + "/" + mm + "/" + yyyy;
};
const wrapper = "_wrapper_ar1uh_1";
const action = "_action_ar1uh_12";
const errorText = "_errorText_ar1uh_17";
const styles$3 = {
  wrapper,
  action,
  errorText
};
const SurveyClone = ({ open, onClose }) => {
  const { t } = useTranslation("manage");
  const navigate = useNavigate();
  const survey = useSelector((state) => state.editState.survey);
  const [newSurveyName, setNewSurveyName] = reactExports.useState("");
  const [newSurveyNameError, setNewSurveyNameError] = reactExports.useState("");
  const dispatch = useDispatch();
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
      onApiError({
        error: e,
        globalErrorHandler: (processedError) => {
          dispatch(onError(processedError));
        },
        locallErrorHandler: (processedError) => {
          if (processedError.name == PROCESSED_ERRORS.DUPLICATE_SURVEY_NAME.name) {
            setNewSurveyNameError(t("processed_errors.".concat(processed.name)));
          }
        }
      });
    }).finally(() => {
      setLoading(false);
    });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    Modal,
    {
      sx: {
        ".MuiBackdrop-root": {
          backgroundColor: "rgba(0, 0, 0, 0.3)"
        }
      },
      open,
      onClose,
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { className: styles$3.wrapper, children: [
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
        newSurveyNameError && /* @__PURE__ */ jsxRuntimeExports.jsx(FormHelperText, { className: styles$3.errorText, children: newSurveyNameError }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { className: styles$3.action, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: onClose, children: t("action_btn.cancel") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: cloneSurvey, children: t("action_btn.save") })
        ] })
      ] })
    }
  ) });
};
function EditSurveyGeneral() {
  const navigate = useNavigate();
  const { t } = useTranslation("manage");
  const survey = useSelector((state) => state.editState.survey);
  const [surveyDateError, setSurveyDateError] = reactExports.useState("");
  const dispatch = useDispatch();
  const isDisabled = !isSurveyAdmin() || survey.status == SURVEY_STATUS.CLOSED;
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
    dispatch(setLoading$1(true));
    SurveyService.closeSurvey(survey.id).then((data) => {
      dispatch(surveyReceived(data));
    }).catch((e) => {
      onApiError({
        error: e,
        globalErrorHandler: (processedError) => {
          dispatch(onError$1(processedError));
        },
        locallErrorHandler: (processedError) => {
          if (processedError.name == PROCESSED_ERRORS.INVALID_SURVEY_DATES.name) {
            setSurveyDateError(t("processed_errors.".concat(processed.name)));
          }
        }
      });
    }).finally(() => {
      dispatch(setLoading$1(false));
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
    dispatch(setLoading$1(true));
    SurveyService.deleteSurvey(survey.id).then(() => {
      goDashboard();
    }).catch((e) => {
      onApiError({
        error: e,
        globalErrorHandler: (processedError) => {
          dispatch(onError$1(processedError));
        }
      });
    }).finally(() => {
      dispatch(setLoading$1(false));
    });
  };
  const [openSurveyClone, setOpenSurveyClone] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { flexDirection: "row", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { className: styles$4.blockItem, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { component: "span", sx: { fontWeight: 700 }, children: [
            t("label.survey_mode"),
            ": "
          ] }),
          t("mode.".concat(survey.usage))
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { component: "span", sx: { fontWeight: 700 }, children: [
            t("edit_survey.status"),
            ": "
          ] }),
          t("status.".concat(survey.status))
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
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { className: styles$4.blockItem, children: [
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
const EditSurveyGeneral$1 = React.memo(EditSurveyGeneral);
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
var __extends$1 = /* @__PURE__ */ function() {
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
var __assign$1 = function() {
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
var __awaiter = function(thisArg, _arguments, P, generator) {
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
var __generator = function(thisArg, body) {
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
var __rest = function(s, e) {
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
var __assign = function() {
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
var __extends = /* @__PURE__ */ function() {
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
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Snackbar$1, { open: true, autoHideDuration: 2e3, onClose: handleClose, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    Alert$1,
    {
      variant: "standard",
      severity: "success",
      onClose: handleClose,
      dir,
      children: t("processed_successes.".concat(success))
    }
  ) });
}
const mainContainer = "_mainContainer_1d68k_1";
const linkCopy = "_linkCopy_1d68k_6";
const socialSharing = "_socialSharing_1d68k_12";
const defaultUrl = "_defaultUrl_1d68k_13";
const socialLink = "_socialLink_1d68k_19";
const iconShareFb = "_iconShareFb_1d68k_24";
const iconShareTw = "_iconShareTw_1d68k_27";
const iconShareLn = "_iconShareLn_1d68k_31";
const styles$2 = {
  mainContainer,
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
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { className: styles$2.mainContainer, children: [
    copy && /* @__PURE__ */ jsxRuntimeExports.jsx(SuccessSnackbar, { handleClose: () => setCopy(false), success: "copied" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { className: styles$2.defaultUrl, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { component: "span", sx: { fontWeight: 700 }, children: [
        t("edit_survey.default_survey_url"),
        ": "
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { className: styles$2.linkCopy, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: url, children: [
          url.slice(0, 50),
          "...",
          url.slice(-10)
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(IconButton, { onClick: clickCopy, children: /* @__PURE__ */ jsxRuntimeExports.jsx(default_1$3, {}) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { className: styles$2.socialSharing, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { component: "span", sx: { fontWeight: 700 }, children: t("edit_survey.social_sharing") }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { className: styles$2.socialLink, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(FacebookShareButton$1, { url, children: /* @__PURE__ */ jsxRuntimeExports.jsx(default_1$2, { className: styles$2.iconShareFb }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TwitterShareButton$1, { url, children: /* @__PURE__ */ jsxRuntimeExports.jsx(default_1, { className: styles$2.iconShareTw }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(LinkedinShareButton$1, { url, children: /* @__PURE__ */ jsxRuntimeExports.jsx(default_1$1, { className: styles$2.iconShareLn }) })
      ] })
    ] })
  ] });
}
function LaunchDialog({ onLaunchDialogClose, onPublish }) {
  const dispatch = useDispatch();
  const hasFatalErrors = useSelector((state) => {
    var _a;
    return ((_a = state.designState.Survey) == null ? void 0 : _a.errors) && state.designState.Survey.errors.length > 0;
  });
  const versionDto = useSelector((state) => {
    return state.designState.versionDto;
  });
  const published = versionDto == null ? void 0 : versionDto.published;
  const params = new URLSearchParams([
    ["version", versionDto == null ? void 0 : versionDto.version],
    ["sub_version", versionDto == null ? void 0 : versionDto.subVersion]
  ]);
  const publish = () => {
    dispatch(setSaving(true));
    DesignService.publish(params).then((data) => {
      dispatch(setSaving(false));
      dispatch(newVersionReceived(data));
      onPublish();
    }).catch((error) => {
      dispatch(setSaving(false));
    });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Dialog, { fullWidth: true, maxWidth: "sm", open: true, onClose: onLaunchDialogClose, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogTitle, { children: [
      "Launch",
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        IconButton,
        {
          "aria-label": "close",
          onClick: onLaunchDialogClose,
          sx: {
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500]
          },
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(default_1$7, {})
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(EditSurveyGeneral$1, {}),
      !published && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "This is still not published" }),
        !hasFatalErrors && /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            onClick: () => {
              publish();
            },
            children: "Publish"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(SurveySharing, {})
    ] })
  ] });
}
const styles$1 = {};
const BaseLanguage = ({
  baseLanguage,
  onBaseLanguageChanged,
  disabled
}) => {
  const { t } = useTranslation("manage");
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(FormControl, { fullWidth: true, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(InputLabel, { id: "label-base-language", children: t("label.base_language") }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Select,
      {
        disabled,
        labelId: "label-base-language",
        value: baseLanguage,
        label: t("label.base_language"),
        onChange: onBaseLanguageChanged,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { value: "en", children: LANGUAGE_DEF["en"].name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { value: "de", children: LANGUAGE_DEF["de"].name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { value: "ar", children: LANGUAGE_DEF["ar"].name })
        ]
      }
    )
  ] });
};
const AdditionalLanguages = ({
  baseLanguage,
  onAdditionalLanguagesChanged,
  additionalLanguages,
  disabled
}) => {
  const { t } = useTranslation("manage");
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(FormControl, { sx: { marginTop: "16px" }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(FormLabel, { id: "additional-languages-label", children: t("label.additional_languages") }),
    Object.keys(LANGUAGE_DEF).map((key) => {
      const el = LANGUAGE_DEF[key];
      return /* @__PURE__ */ jsxRuntimeExports.jsx(
        FormControlLabel,
        {
          control: /* @__PURE__ */ jsxRuntimeExports.jsx(
            Checkbox,
            {
              disabled: baseLanguage == el.code || disabled,
              checked: additionalLanguages.indexOf(el.code) > -1,
              onChange: onAdditionalLanguagesChanged,
              name: el.code
            }
          ),
          label: el.name
        },
        key
      );
    })
  ] });
};
function ManageTranslations({ onManageTranslationsClose, onStartTranslation }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    Dialog,
    {
      fullWidth: true,
      maxWidth: "sm",
      open: true,
      onClose: onManageTranslationsClose,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogTitle, { children: [
          "Translations",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            IconButton,
            {
              "aria-label": "close",
              onClick: onManageTranslationsClose,
              sx: {
                position: "absolute",
                right: 8,
                top: 8,
                color: (theme) => theme.palette.grey[500]
              },
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(default_1$7, {})
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(DialogContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          ManageLanguages,
          {
            onTranlsationStarted: () => {
              onManageTranslationsClose();
              onStartTranslation();
            },
            onManageTranslationsClose
          }
        ) })
      ]
    }
  );
}
function ManageLanguages({ onTranlsationStarted }) {
  const dispatch = useDispatch();
  useTranslation("manage");
  const langInfo = useSelector((state) => {
    return state.designState.langInfo;
  });
  const lang = langInfo.lang;
  const allLang = langInfo.languagesList;
  const additionalLanguages = langInfo.languagesList.filter(
    (e) => langInfo.mainLang != e.code
  );
  const additionalLanguagesCodes = additionalLanguages.map((e) => e.code);
  const onBaseLanguageChanged = (e) => {
    dispatch(onBaseLangChanged(LANGUAGE_DEF[e.target.value]));
  };
  const onAdditionalLanguagesChanged = (e) => {
    if (e.target.checked) {
      dispatch(onAdditionalLangAdded(LANGUAGE_DEF[e.target.name]));
    } else {
      dispatch(onAdditionalLangRemoved(LANGUAGE_DEF[e.target.name]));
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { sx: { paddingTop: "8px" }, className: styles$1.blockItem, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      BaseLanguage,
      {
        onBaseLanguageChanged,
        baseLanguage: langInfo.mainLang
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      AdditionalLanguages,
      {
        onAdditionalLanguagesChanged,
        additionalLanguages: additionalLanguagesCodes,
        baseLanguage: langInfo.mainLang
      }
    ),
    allLang.length > 1 && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Typography,
        {
          sx: { marginTop: "16px", marginBottom: "8px", fontSize: "1em" },
          children: "Translate Survey To:"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(FormControl, { fullWidth: true, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(InputLabel, { id: "label-base-language", children: "Language" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Select,
          {
            id: "ChangeLang",
            value: lang,
            label: "Design Language",
            onChange: (event) => {
              dispatch(changeLang(event.target.value));
              onTranlsationStarted();
            },
            children: allLang.map((lang2, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { value: lang2.code, children: lang2.name }, index))
          }
        )
      ] })
    ] })
  ] });
}
function TopBanner({
  selectedTab,
  previewMode,
  onTabChange,
  page,
  onClose,
  onPreviewModeChanged,
  onPreviewClicked,
  onDesignClicked,
  onStartTranslation,
  onPublish,
  availableTabs: availableTabs2
}) {
  const { i18n } = useTranslation();
  const langInfo = useSelector((state) => {
    return state.designState.langInfo;
  });
  const [tranlsationOpen, setTranlsationOpen] = reactExports.useState(false);
  const [launchOpen, setLaunchOpen] = reactExports.useState(false);
  const isSaving = useSelector((state) => {
    return state.designState.isSaving || state.editState.isSaving;
  });
  function component() {
    switch (page) {
      case MANAGE_SURVEY_PAGE.TABS:
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Tabs,
            {
              orientation: "vertical",
              value: selectedTab,
              onChange: (event, newValue) => {
                onTabChange(newValue);
              },
              centered: true,
              children: [
                availableTabs2.indexOf(MANAGE_SURVEY_LANDING_PAGES.DESIGN) !== -1 && /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Tab,
                  {
                    sx: { minWidth: "auto" },
                    label: /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Edit, { sx: { color: "#fff" } }) }),
                    value: MANAGE_SURVEY_LANDING_PAGES.DESIGN
                  }
                ),
                availableTabs2.indexOf(MANAGE_SURVEY_LANDING_PAGES.RESPONSES) !== -1 && /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Tab,
                  {
                    sx: { minWidth: "auto" },
                    label: /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Visibility$1, { sx: { color: "#fff" } }) }),
                    value: MANAGE_SURVEY_LANDING_PAGES.RESPONSES
                  }
                ),
                availableTabs2.indexOf(MANAGE_SURVEY_LANDING_PAGES.SETTINGS) !== -1 && /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Tab,
                  {
                    sx: { minWidth: "auto" },
                    label: /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Settings, { sx: { color: "#fff" } }) }),
                    value: MANAGE_SURVEY_LANDING_PAGES.SETTINGS
                  }
                )
              ]
            }
          ),
          availableTabs2.indexOf(MANAGE_SURVEY_LANDING_PAGES.DESIGN) !== -1 && /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: rtlLanguage.includes(i18n.language) ? styles$5["topBanner-rtl"] : styles$5["topBanner-ltr"],
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  IconButton,
                  {
                    sx: { width: "-webkit-fill-available" },
                    disabled: isSaving,
                    onClick: () => setTranlsationOpen(true),
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(GTranslate, { sx: { color: "#fff" } })
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  IconButton,
                  {
                    sx: { width: "-webkit-fill-available" },
                    disabled: isSaving,
                    onClick: onPreviewClicked,
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(default_1$9, { sx: { color: "#fff" } })
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  IconButton,
                  {
                    sx: { width: "-webkit-fill-available" },
                    disabled: isSaving,
                    onClick: () => setLaunchOpen(true),
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(default_1$8, { sx: { color: "#fff" } })
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  IconButton,
                  {
                    sx: { width: "-webkit-fill-available" },
                    disabled: isSaving,
                    onClick: onDesignClicked,
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(default_1$a, { sx: { color: "#fff" } })
                  }
                )
              ]
            }
          ),
          tranlsationOpen && /* @__PURE__ */ jsxRuntimeExports.jsx(
            ManageTranslations,
            {
              onManageTranslationsClose: () => {
                setTranlsationOpen(false);
              },
              onStartTranslation
            }
          ),
          launchOpen && /* @__PURE__ */ jsxRuntimeExports.jsx(
            LaunchDialog,
            {
              onPublish,
              onLaunchDialogClose: () => {
                setLaunchOpen(false);
              }
            }
          )
        ] });
      case MANAGE_SURVEY_PAGE.TRANSLATE:
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            style: { display: "flex", paddingRight: "8px", paddingLeft: "8px" },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                IconButton,
                {
                  onClick: onClose,
                  size: "large",
                  edge: "start",
                  color: "inherit",
                  "aria-label": "menu",
                  sx: { mr: 2 },
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(default_1$7, {})
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  style: {
                    textAlign: "center",
                    display: "table-cell",
                    verticalAlign: "middle",
                    width: "100%",
                    fontSize: "20px",
                    lineHeight: "48px"
                  },
                  children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                    "Translate Survey to ",
                    langInfo.lang
                  ] })
                }
              )
            ]
          }
        );
      case MANAGE_SURVEY_PAGE.PREVIEW:
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            style: { display: "flex", paddingRight: "8px", paddingLeft: "8px" },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                IconButton,
                {
                  onClick: onClose,
                  size: "large",
                  edge: "start",
                  color: "inherit",
                  "aria-label": "menu",
                  sx: { mr: 2 },
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(default_1$7, {})
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Tabs,
                {
                  sx: { width: "100%" },
                  value: previewMode,
                  onChange: (event, newValue) => {
                    onPreviewModeChanged(newValue);
                  },
                  centered: true,
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Tab, { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(default_1$6, {}), value: "online" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Tab, { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(default_1$5, {}), value: "online-mobile" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Tab, { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(default_1$4, {}), value: "offline" })
                  ]
                }
              )
            ]
          }
        );
      case MANAGE_SURVEY_PAGE.VIEW_RESPONSE:
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            style: { display: "flex", paddingRight: "8px", paddingLeft: "8px" },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                IconButton,
                {
                  onClick: onClose,
                  size: "large",
                  edge: "start",
                  color: "inherit",
                  "aria-label": "menu",
                  sx: { mr: 2 },
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(default_1$7, {})
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  style: {
                    textAlign: "center",
                    display: "table-cell",
                    verticalAlign: "middle",
                    width: "100%",
                    fontSize: "20px",
                    lineHeight: "48px"
                  },
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "View Response Events" })
                }
              )
            ]
          }
        );
    }
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: styles$5.surveyHeader, children: component() });
}
const TopBanner$1 = React.memo(TopBanner);
const savingProgress = "_savingProgress_zztu3_1";
const styles = {
  savingProgress
};
function SavingSurvey() {
  const isSaving = useSelector((state) => {
    return state.designState.isSaving || state.editState.isSaving;
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Snackbar$1, { open: isSaving, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Alert$1, { severity: "warning", children: [
    "Saving Survey...",
    " ",
    /* @__PURE__ */ jsxRuntimeExports.jsx(CircularProgress, { className: styles.savingProgress, color: "warning" })
  ] }) });
}
const ResponsesSurvey = React.lazy(() => __vitePreload(() => import("./index-8R4nn72Q.js"), true ? __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13]) : void 0));
const EditSurvey = React.lazy(() => __vitePreload(() => import("./index-kLxQCiAJ.js"), true ? __vite__mapDeps([14,1,2,15,5,6,16,17,18,7,8,11,4,9,10,12,19]) : void 0));
const DesignSurvey = React.lazy(() => __vitePreload(() => import("./index-je9OwtBW.js"), true ? __vite__mapDeps([20,1,2,9,10,11,21,22,7,8,23,6,24,25,26,27,15,5,4,12,28,3,29,30]) : void 0));
const ResponsesEvent = React.lazy(() => __vitePreload(() => import("./index-BgQQBp8H.js"), true ? __vite__mapDeps([31,1,2,7,8,9,10,11,4,12,6,32]) : void 0));
const PreviewSurvey = React.lazy(() => __vitePreload(() => import("./index-5A3Z6KBE.js"), true ? __vite__mapDeps([33,1,2,34]) : void 0));
function ManageSurvey({ landingPage }) {
  const params = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const user = TokenService.getUser();
  const [selectedTab, setSelectedTab] = reactExports.useState(landingTab(landingPage, user));
  const [page, setPage] = reactExports.useState(rolesToLandingPage(landingPage, user));
  const [previewMode, setPreviewMode] = reactExports.useState(
    searchParams.get("mode") || "online"
  );
  const [viewEventResponseId, setViewEventResponseId] = reactExports.useState(null);
  const [designAvailable, setDesignAvailable] = reactExports.useState(false);
  const [settingAvailable, setSettingAvailable] = reactExports.useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const setState = (state) => {
    dispatch(designStateReceived(state));
  };
  console.log(page);
  const processApirror = (e) => {
    dispatch(setLoading$1(false));
    onApiError({
      error: e,
      globalErrorHandler: (processedError) => {
        dispatch(onError$1(processedError));
      }
    });
  };
  reactExports.useEffect(() => {
    dispatch(onAddComponentsVisibilityChange(true));
    dispatch(resetSetup());
    if (!isSurveyAdmin()) {
      return;
    }
    dispatch(setLoading$1(true));
    GetData(setState, processApirror).then((data) => {
      if (data) {
        setDesignAvailable(true);
      }
    }).catch((err) => {
      dispatch(setLoading$1(false));
    });
    loadSurvey();
  }, []);
  const loadSurvey = () => {
    SurveyService.getSurvey().then((data) => {
      if (data) {
        dispatch(surveyReceived(data));
        loadPermissions(data.id);
      }
    }).catch((err) => {
      processApirror(err);
    });
    dispatch(permissionsLoading(true));
  };
  const loadPermissions = (surveyId) => {
    SurveyService.getSurveyPermissionAll(surveyId).then((data) => {
      if (data) {
        setSettingAvailable(true);
        dispatch(permissionsReceived(data));
      }
      dispatch(permissionsLoading(false));
      dispatch(setLoading$1(false));
    }).catch((err) => {
      processApirror(err);
    });
  };
  const shouldShowDesign = (selectedTab == MANAGE_SURVEY_LANDING_PAGES.DESIGN && page === MANAGE_SURVEY_PAGE.TABS || page === MANAGE_SURVEY_PAGE.TRANSLATE) && designAvailable;
  const shouldShowResponseEvents = selectedTab == MANAGE_SURVEY_LANDING_PAGES.RESPONSES && page === MANAGE_SURVEY_PAGE.VIEW_RESPONSE && (viewEventResponseId || params.responseId);
  const shouldShowResponses = selectedTab == MANAGE_SURVEY_LANDING_PAGES.RESPONSES && page === MANAGE_SURVEY_PAGE.TABS;
  const shouldShowEditSurvey = selectedTab == MANAGE_SURVEY_LANDING_PAGES.SETTINGS && settingAvailable && page === MANAGE_SURVEY_PAGE.TABS;
  const onResponseSelected = (responseId) => {
    window.history.replaceState(
      null,
      "",
      "/".concat(MANAGE_SURVEY_LANDING_PAGES.RESPONSE, "/").concat(params.surveyId, "/").concat(responseId)
    );
    setPage(MANAGE_SURVEY_PAGE.VIEW_RESPONSE);
    setViewEventResponseId(responseId);
  };
  const onBannerClosed = () => {
    if (isSurveyorOnly(user)) {
      navigate("/");
      return;
    }
    if (selectedTab == MANAGE_SURVEY_LANDING_PAGES.PREVIEW) {
      const newTab = landingTab(MANAGE_SURVEY_LANDING_PAGES.DESIGN, user);
      setSelectedTab(newTab);
      window.history.replaceState(null, "", "/".concat(newTab, "/").concat(params.surveyId));
    } else {
      window.history.replaceState(
        null,
        "",
        "/".concat(selectedTab, "/").concat(params.surveyId)
      );
    }
    setViewEventResponseId(null);
    dispatch(onResetLang());
    setPage(MANAGE_SURVEY_PAGE.TABS);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { sx: { display: "flex", gap: "1rem" }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      TopBanner$1,
      {
        onDesignClicked: () => {
          setSelectedTab(MANAGE_SURVEY_LANDING_PAGES.DESIGN);
          dispatch(onAddComponentsVisibilityChange(false));
          dispatch(setup(surveySetup));
        },
        page,
        onPreviewClicked: () => {
          window.history.replaceState(
            null,
            "",
            "/preview/".concat(params.surveyId, "?mode=online")
          );
          setPage(MANAGE_SURVEY_PAGE.PREVIEW);
        },
        onPublish: () => loadSurvey(),
        onStartTranslation: () => setPage(MANAGE_SURVEY_PAGE.TRANSLATE),
        onPreviewModeChanged: (mode) => {
          window.history.replaceState(
            null,
            "",
            "/preview/".concat(params.surveyId, "?mode=").concat(mode)
          );
          setPreviewMode(mode);
        },
        previewMode,
        availableTabs: availableTabs(user),
        selectedTab,
        onClose: onBannerClosed,
        onTabChange: (tab) => {
          setSelectedTab(tab);
          window.history.replaceState(null, "", "/".concat(tab, "/").concat(params.surveyId));
        }
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(reactExports.Suspense, { fallback: /* @__PURE__ */ jsxRuntimeExports.jsx(CircularProgress, {}), children: /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { sx: { width: "100%", backgroundColor: "#f7f8fc" }, children: shouldShowResponses ? /* @__PURE__ */ jsxRuntimeExports.jsx(ResponsesSurvey, { viewEvents: onResponseSelected }) : shouldShowEditSurvey ? /* @__PURE__ */ jsxRuntimeExports.jsx(EditSurvey, {}) : page === MANAGE_SURVEY_PAGE.PREVIEW ? /* @__PURE__ */ jsxRuntimeExports.jsx(PreviewSurvey, { mode: previewMode }) : shouldShowResponseEvents ? /* @__PURE__ */ jsxRuntimeExports.jsx(
      ResponsesEvent,
      {
        responseId: viewEventResponseId || params.responseId
      }
    ) : shouldShowDesign ? /* @__PURE__ */ jsxRuntimeExports.jsx(DesignSurvey, {}) : /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, {}) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SavingSurvey, {})
  ] });
}
const ManageSurvey$1 = React.memo(ManageSurvey);
const MANAGE_SURVEY_PAGE = {
  TABS: "tabs",
  PREVIEW: "preview",
  TRANSLATE: "translate",
  VIEW_RESPONSE: "view_responses"
};
const rolesToLandingPage = (landingPage, user) => {
  if (landingPage == MANAGE_SURVEY_LANDING_PAGES.PREVIEW) {
    return MANAGE_SURVEY_PAGE.PREVIEW;
  } else if ((isSurveyAdmin() || isAnalyst(user)) && landingPage == MANAGE_SURVEY_LANDING_PAGES.RESPONSE) {
    return MANAGE_SURVEY_PAGE.VIEW_RESPONSE;
  } else if (isSurveyAdmin() || isAnalyst(user)) {
    return MANAGE_SURVEY_PAGE.TABS;
  }
  return MANAGE_SURVEY_PAGE.PREVIEW;
};
const availableTabs = (user) => {
  if (isSurveyAdmin()) {
    return [
      MANAGE_SURVEY_LANDING_PAGES.DESIGN,
      MANAGE_SURVEY_LANDING_PAGES.RESPONSES,
      MANAGE_SURVEY_LANDING_PAGES.SETTINGS
    ];
  } else if (isAnalyst(user)) {
    return [MANAGE_SURVEY_LANDING_PAGES.RESPONSES];
  } else {
    return [];
  }
};
const landingTab = (landingPage, user) => {
  if (landingPage == MANAGE_SURVEY_LANDING_PAGES.PREVIEW) {
    return MANAGE_SURVEY_LANDING_PAGES.PREVIEW;
  } else if (isAnalystOnly(user)) {
    return MANAGE_SURVEY_LANDING_PAGES.RESPONSES;
  } else if (isSurveyAdmin() && landingPage == MANAGE_SURVEY_LANDING_PAGES.RESPONSE) {
    return MANAGE_SURVEY_LANDING_PAGES.RESPONSES;
  } else if (isSurveyAdmin()) {
    return landingPage;
  } else {
    return MANAGE_SURVEY_LANDING_PAGES.NONE;
  }
};
const Page404 = reactExports.lazy(() => __vitePreload(() => import("./index-9vfmWr38.js"), true ? __vite__mapDeps([35,1,2,36]) : void 0));
const ConfirmSignup = reactExports.lazy(() => __vitePreload(() => import("./index-pWNc0u2X.js"), true ? __vite__mapDeps([37,1,2,9,10,11,4,12,6,38]) : void 0));
const ForgotPassword = reactExports.lazy(() => __vitePreload(() => import("./index-x_tI_FmS.js"), true ? __vite__mapDeps([39,1,2,40,11,9,10,41,4,12,6,42]) : void 0));
const ResetPassword = reactExports.lazy(() => __vitePreload(() => import("./index-yC4p37tE.js"), true ? __vite__mapDeps([43,1,2,41,9,10,11,4,12,6,44]) : void 0));
const Dashboard = reactExports.lazy(() => __vitePreload(() => import("./index-XBlUbiBf.js"), true ? __vite__mapDeps([45,1,2,18,4,9,10,11,12,6,46]) : void 0));
const Login = reactExports.lazy(() => __vitePreload(() => import("./index-1SjB6EW-.js"), true ? __vite__mapDeps([47,1,2,40,11,9,10,41,48,4,49,12,6,50]) : void 0));
const ManageUsers = reactExports.lazy(() => __vitePreload(() => import("./index-74J_X1nf.js"), true ? __vite__mapDeps([51,1,2,18,16,17,7,8,9,10,11,4,12,6,52]) : void 0));
const AddEditUser = reactExports.lazy(() => __vitePreload(() => import("./index-SPZeHmaE.js"), true ? __vite__mapDeps([53,1,2,18,41,11,4,12,6,9,10,54]) : void 0));
const Profile = reactExports.lazy(() => __vitePreload(() => import("./index-r9HYgAs3.js"), true ? __vite__mapDeps([55,1,2,18,4,41,11,9,10,48,12,6,56]) : void 0));
const CreateSurvey = reactExports.lazy(() => __vitePreload(() => import("./index-V8KW_yr5.js"), true ? __vite__mapDeps([57,1,2,41,11,4,9,10,12,6,58]) : void 0));
const RunSurvey = reactExports.lazy(() => __vitePreload(() => import("./index-RBnW6nvi.js").then((n) => n.d1), true ? __vite__mapDeps([1,2]) : void 0));
function Web() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Routes, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Route,
      {
        path: routes.runSurvey,
        element: /* @__PURE__ */ jsxRuntimeExports.jsx(reactExports.Suspense, { fallback: /* @__PURE__ */ jsxRuntimeExports.jsx(LoadingIndicator, {}), children: /* @__PURE__ */ jsxRuntimeExports.jsx(Provider, { store: runStore, children: /* @__PURE__ */ jsxRuntimeExports.jsx(RunSurveyWrapper, {}) }) })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Route,
      {
        path: routes.previewSurvey,
        element: /* @__PURE__ */ jsxRuntimeExports.jsx(reactExports.Suspense, { fallback: /* @__PURE__ */ jsxRuntimeExports.jsx(LoadingIndicator, {}), children: /* @__PURE__ */ jsxRuntimeExports.jsx(Provider, { store: runStore, children: /* @__PURE__ */ jsxRuntimeExports.jsx(PreviewSurveyWrapper, {}) }) })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Route,
      {
        path: routes.previewGuestSurvey,
        element: /* @__PURE__ */ jsxRuntimeExports.jsx(reactExports.Suspense, { fallback: /* @__PURE__ */ jsxRuntimeExports.jsx(LoadingIndicator, {}), children: /* @__PURE__ */ jsxRuntimeExports.jsx(Provider, { store: runStore, children: /* @__PURE__ */ jsxRuntimeExports.jsx(PreviewGuestSurveyWrapper, {}) }) })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Route,
      {
        path: routes.designSurvey,
        element: /* @__PURE__ */ jsxRuntimeExports.jsx(reactExports.Suspense, { fallback: /* @__PURE__ */ jsxRuntimeExports.jsx(LoadingIndicator, {}), children: /* @__PURE__ */ jsxRuntimeExports.jsx(ManagePageWrapper, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          PrivateDesignSurvey,
          {
            landingPage: MANAGE_SURVEY_LANDING_PAGES.DESIGN
          }
        ) }) })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Route,
      {
        path: routes.preview,
        element: /* @__PURE__ */ jsxRuntimeExports.jsx(reactExports.Suspense, { fallback: /* @__PURE__ */ jsxRuntimeExports.jsx(LoadingIndicator, {}), children: /* @__PURE__ */ jsxRuntimeExports.jsx(ManagePageWrapper, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          PrivateDesignSurvey,
          {
            landingPage: MANAGE_SURVEY_LANDING_PAGES.PREVIEW
          }
        ) }) })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Route,
      {
        path: routes.editSurvey,
        element: /* @__PURE__ */ jsxRuntimeExports.jsx(reactExports.Suspense, { fallback: /* @__PURE__ */ jsxRuntimeExports.jsx(LoadingIndicator, {}), children: /* @__PURE__ */ jsxRuntimeExports.jsx(ManagePageWrapper, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          PrivateDesignSurvey,
          {
            landingPage: MANAGE_SURVEY_LANDING_PAGES.SETTINGS
          }
        ) }) })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Route,
      {
        path: routes.response,
        element: /* @__PURE__ */ jsxRuntimeExports.jsx(reactExports.Suspense, { fallback: /* @__PURE__ */ jsxRuntimeExports.jsx(LoadingIndicator, {}), children: /* @__PURE__ */ jsxRuntimeExports.jsx(ManagePageWrapper, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          PrivateDesignSurvey,
          {
            landingPage: MANAGE_SURVEY_LANDING_PAGES.RESPONSE
          }
        ) }) })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Route,
      {
        path: routes.responses,
        element: /* @__PURE__ */ jsxRuntimeExports.jsx(reactExports.Suspense, { fallback: /* @__PURE__ */ jsxRuntimeExports.jsx(LoadingIndicator, {}), children: /* @__PURE__ */ jsxRuntimeExports.jsx(ManagePageWrapper, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          PrivateDesignSurvey,
          {
            landingPage: MANAGE_SURVEY_LANDING_PAGES.RESPONSES
          }
        ) }) })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Route,
      {
        path: routes.manageUsers,
        element: /* @__PURE__ */ jsxRuntimeExports.jsx(reactExports.Suspense, { fallback: /* @__PURE__ */ jsxRuntimeExports.jsx(LoadingIndicator, {}), children: /* @__PURE__ */ jsxRuntimeExports.jsx(PrivateManageUsers, { roles: [ROLES.SUPER_ADMIN], children: /* @__PURE__ */ jsxRuntimeExports.jsx(ManagePageWrapper, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(ManageUsers, {}) }) }) })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Route,
      {
        path: routes.addUser,
        element: /* @__PURE__ */ jsxRuntimeExports.jsx(reactExports.Suspense, { fallback: /* @__PURE__ */ jsxRuntimeExports.jsx(LoadingIndicator, {}), children: /* @__PURE__ */ jsxRuntimeExports.jsx(PrivateManageUsers, { roles: [ROLES.SUPER_ADMIN], children: /* @__PURE__ */ jsxRuntimeExports.jsx(ManagePageWrapper, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(AddEditUser, { isEditing: false }) }) }) })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Route,
      {
        path: routes.editUser,
        element: /* @__PURE__ */ jsxRuntimeExports.jsx(reactExports.Suspense, { fallback: /* @__PURE__ */ jsxRuntimeExports.jsx(LoadingIndicator, {}), children: /* @__PURE__ */ jsxRuntimeExports.jsx(PrivateManageUsers, { roles: [ROLES.SUPER_ADMIN], children: /* @__PURE__ */ jsxRuntimeExports.jsx(ManagePageWrapper, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(AddEditUser, { isEditing: true }) }) }) })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Route,
      {
        path: routes.profile,
        element: /* @__PURE__ */ jsxRuntimeExports.jsx(reactExports.Suspense, { fallback: /* @__PURE__ */ jsxRuntimeExports.jsx(LoadingIndicator, {}), children: /* @__PURE__ */ jsxRuntimeExports.jsx(PrivateComponent, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(ManagePageWrapper, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Profile, {}) }) }) })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Route,
      {
        path: routes.createSurvey,
        element: /* @__PURE__ */ jsxRuntimeExports.jsx(reactExports.Suspense, { fallback: /* @__PURE__ */ jsxRuntimeExports.jsx(LoadingIndicator, {}), children: /* @__PURE__ */ jsxRuntimeExports.jsx(PrivateManageUsers, { roles: [ROLES.SUPER_ADMIN, ROLES.SUPER_ADMIN], children: /* @__PURE__ */ jsxRuntimeExports.jsx(ManagePageWrapper, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CreateSurvey, {}) }) }) })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Route,
      {
        path: routes.page404,
        element: /* @__PURE__ */ jsxRuntimeExports.jsx(reactExports.Suspense, { fallback: /* @__PURE__ */ jsxRuntimeExports.jsx(LoadingIndicator, {}), children: /* @__PURE__ */ jsxRuntimeExports.jsx(Page404, {}) })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Route,
      {
        path: routes.dashboard,
        element: /* @__PURE__ */ jsxRuntimeExports.jsx(reactExports.Suspense, { fallback: /* @__PURE__ */ jsxRuntimeExports.jsx(LoadingIndicator, {}), children: /* @__PURE__ */ jsxRuntimeExports.jsx(PrivateComponent, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(ManagePageWrapper, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Dashboard, {}) }) }) })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Route,
      {
        path: routes.login,
        element: /* @__PURE__ */ jsxRuntimeExports.jsx(reactExports.Suspense, { fallback: /* @__PURE__ */ jsxRuntimeExports.jsx(LoadingIndicator, {}), children: /* @__PURE__ */ jsxRuntimeExports.jsx(ManagePageWrapper, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Login, {}) }) })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Route,
      {
        path: routes.signup,
        element: /* @__PURE__ */ jsxRuntimeExports.jsx(reactExports.Suspense, { fallback: /* @__PURE__ */ jsxRuntimeExports.jsx(LoadingIndicator, {}), children: /* @__PURE__ */ jsxRuntimeExports.jsx(ManagePageWrapper, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Login, {}) }) })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Route,
      {
        path: routes.confirmSignup,
        element: /* @__PURE__ */ jsxRuntimeExports.jsx(reactExports.Suspense, { fallback: /* @__PURE__ */ jsxRuntimeExports.jsx(LoadingIndicator, {}), children: /* @__PURE__ */ jsxRuntimeExports.jsx(ManagePageWrapper, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(ConfirmSignup, {}) }) })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Route,
      {
        path: routes.forgotPassword,
        element: /* @__PURE__ */ jsxRuntimeExports.jsx(reactExports.Suspense, { fallback: /* @__PURE__ */ jsxRuntimeExports.jsx(LoadingIndicator, {}), children: /* @__PURE__ */ jsxRuntimeExports.jsx(ManagePageWrapper, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(ForgotPassword, {}) }) })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Route,
      {
        path: routes.resetPassword,
        element: /* @__PURE__ */ jsxRuntimeExports.jsx(reactExports.Suspense, { fallback: /* @__PURE__ */ jsxRuntimeExports.jsx(LoadingIndicator, {}), children: /* @__PURE__ */ jsxRuntimeExports.jsx(ManagePageWrapper, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(ResetPassword, {}) }) })
      }
    )
  ] });
}
const PrivateDesignSurvey = ({ landingPage }) => {
  const params = useParams();
  sessionStorage.setItem("surveyId", params.surveyId);
  const location = useLocation();
  return TokenService.isAuthenticated() ? /* @__PURE__ */ jsxRuntimeExports.jsx(ManageSurvey$1, { landingPage }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Navigate, { to: "/login", replace: true, state: { from: location } });
};
const PrivateComponent = ({ children }) => {
  const location = useLocation();
  return TokenService.isAuthenticated() ? children : /* @__PURE__ */ jsxRuntimeExports.jsx(Navigate, { to: "/login", replace: true, state: { from: location } });
};
const PrivateManageUsers = ({ roles, children }) => {
  const location = useLocation();
  const user = TokenService.getUser();
  let hasCorrectRole = false;
  user.roles.forEach((el) => {
    if (roles.indexOf(el) > -1) {
      hasCorrectRole = true;
    }
  });
  if (!hasCorrectRole) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Navigate, { to: "/", replace: true });
  }
  return TokenService.isAuthenticated() ? children : /* @__PURE__ */ jsxRuntimeExports.jsx(Navigate, { to: "/login", replace: true, state: { from: location } });
};
const RunSurveyWrapper = () => {
  const surveyId = getparam(useParams(), "surveyId");
  sessionStorage.setItem("surveyId", surveyId);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(RunSurvey, {});
};
const PreviewSurveyWrapper = () => {
  const surveyId = getparam(useParams(), "surveyId");
  sessionStorage.setItem("surveyId", surveyId);
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const mode = searchParams.get("mode") || "online";
  return /* @__PURE__ */ jsxRuntimeExports.jsx(RunSurvey, { preview: true, mode });
};
const PreviewGuestSurveyWrapper = () => {
  const surveyId = getparam(useParams(), "surveyId");
  sessionStorage.setItem("surveyId", surveyId);
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const mode = searchParams.get("mode") || "online";
  return /* @__PURE__ */ jsxRuntimeExports.jsx(RunSurvey, { preview: true, guest: true, mode });
};
const Web$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Web
}, Symbol.toStringTag, { value: "Module" }));
export {
  AuthService$1 as A,
  ClearIcon as C,
  Edit as E,
  NAVIGATION_MODE as N,
  Person as P,
  ROLES as R,
  SURVEY_MODE as S,
  Visibility$1 as V,
  Web$1 as W,
  SurveyActiveFromTo as a,
  SURVEY_STATUS as b,
  SURVEY as c,
  dayMonthUeatFormat as d,
  isSurveyor as e,
  formatlocalDateTime as f,
  default_1$7 as g,
  default_1$9 as h,
  isSurveyAdmin as i,
  default_1$3 as j,
  classNames as k,
  localDateToServerDateTime as l,
  routes as r,
  serverDateTimeToLocalDateTime as s
};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-8R4nn72Q.js","assets/index-RBnW6nvi.js","assets/index-GHl8PYHn.css","assets/Delete-L8nilwQO.js","assets/FormControlLabel-B-3jdeza.js","assets/Switch-HSw-OeVt.js","assets/SwitchBase-naWSSwc-.js","assets/TableRow-esdE-LAL.js","assets/TableHead-OntCKomL.js","assets/DatePicker-AVKIEE0b.js","assets/Grid-q5yBxj4Y.js","assets/TextField-lJ98NZsg.js","assets/Checkbox-HSUkhdvK.js","assets/index-PxgwU3cb.css","assets/index-kLxQCiAJ.js","assets/ExpandMore-ekVSEAg2.js","assets/index-l1Dse2n9.js","assets/index-vjgObjs8.css","assets/UserService-armPMgIn.js","assets/index-AFo9VDws.css","assets/index-je9OwtBW.js","assets/SCQArrayDesign.module-01m2Bg02.js","assets/SCQArrayDesign-XieESCty.css","assets/Radio-tPvf6SXM.js","assets/RadioGroupContext-FoUH8Stq.js","assets/useDrop-ll_87b05.js","assets/index-DteEsK-S.js","assets/index-nxaqe5zT.js","assets/DateTimePicker-yJMNf3Kv.js","assets/ErrorOutlineOutlined-c8Q1J9r2.js","assets/index-9SH8pjyC.css","assets/index-BgQQBp8H.js","assets/index-JUUkJata.css","assets/index-5A3Z6KBE.js","assets/index-V2rYHao1.css","assets/index-9vfmWr38.js","assets/index-SQhNpQ0n.css","assets/index-pWNc0u2X.js","assets/index-QuCZ0ypF.css","assets/index-x_tI_FmS.js","assets/LoginInput-G0ViwFtG.js","assets/FormGroup-A52SYRjs.js","assets/index-KxXYN4GO.css","assets/index-yC4p37tE.js","assets/index-ke1SKkTq.css","assets/index-XBlUbiBf.js","assets/index-MfT-U4B8.css","assets/index-1SjB6EW-.js","assets/LockOpen-vv5QwsHD.js","assets/Link-9ysrr75u.js","assets/index-Pe8tjntX.css","assets/index-74J_X1nf.js","assets/index-I0gYrnx6.css","assets/index-SPZeHmaE.js","assets/index-OhxKhWMW.css","assets/index-r9HYgAs3.js","assets/index-YpQs6TzW.css","assets/index-V8KW_yr5.js","assets/index-ulAxI3b4.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
//# sourceMappingURL=Web-KOHZ4PI_.js.map
