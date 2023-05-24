import { q as generateUtilityClass, n as generateUtilityClasses, t as styled, W as capitalize, m as _extends, r as reactExports, v as useThemeProps, _ as _objectWithoutPropertiesLoose, j as jsxRuntimeExports, x as clsx, y as composeClasses, X as useForkRef, Y as debounce, Z as ownerWindow, $ as rootShouldForwardProp, g as requireCreateSvgIcon, i as interopRequireDefaultExports, a0 as useTheme$1, b as useSelector, a1 as stripTags, a2 as jump, a3 as navigatePrevious, a4 as navigateNext, a5 as valueChange, a6 as setDirty, R as React, B as previewUrl, a7 as uploadFile, a8 as useTheme$2, a9 as DragDropContext, aa as ConnectedDroppable, ab as PublicDraggable, ac as orderChange, ad as getAugmentedNamespace, z as commonjsGlobal, A as getDefaultExportFromCjs, ae as downloadFileAsBase64, af as uploadDataUrl, ag as langChange, D as useLocation, ah as continueNavigation, ai as stateReceived, aj as setFetching, ak as loadScript, al as createTheme, am as defualtTheme, an as createCache, ao as prefixer, ap as stylisRTLPlugin, u as useNavigate, aq as CacheProvider, p as processError, P as PROCESSED_ERRORS, ar as startNavigation } from "./index-365b357c.js";
import { E as ErrorOutlineOutlined, R as RadioGroup, a as Radio, D as DateTimePicker, T as TimePicker, p as propTypesExports, b as ReactPlayer, C as CardMedia, c as ThemeProvider, L as Layout } from "./index-fae40245.js";
import { l as createBox, P as Paper, f as useTheme, m as Transition, n as reflow, o as getTransitionProps, M as Modal, u as useTranslation, r as rtlLanguage, S as Snackbar, A as Alert, b as Button, B as Box$2, p as TextareaAutosize, c as Select, d as MenuItem, a as IconButton, T as Typography } from "./common-67893e1c.js";
import { d as default_1$3 } from "./ArrowBack-992ed83d.js";
import { u as useDispatch } from "./useDispatch-d00243b2.js";
import { C as Card } from "./Card-cfce7f7b.js";
import { b as buildResourceUrl } from "./common-c40931f9.js";
import { F as FormControl, I as InputLabel } from "./InputLabel-d540b88d.js";
import { F as FormControlLabel } from "./FormControlLabel-42cf2298.js";
import { T as TextField } from "./TextField-036d2651.js";
import { C as Checkbox } from "./Checkbox-1322a9d7.js";
import { T as TableContainer, a as Table, b as TableHead, c as TableRow, d as TableCell, e as TableBody } from "./TableRow-05d21699.js";
import { L as Link } from "./Link-11070db6.js";
import { d as dayjs, A as AdapterDayjs } from "./index-437355d6.js";
import { L as LocalizationProvider, D as DatePicker, G as Grid } from "./DatePicker-2002c7aa.js";
import { T as Toolbar } from "./Toolbar-6ad5f8b8.js";
import "./FormGroup-eeb7be07.js";
import "./KeyboardArrowRight-b35f7ef3.js";
import "./InputAdornment-691252b0.js";
const Box = createBox();
const Box$1 = Box;
function is(x, y) {
  if (x === y) {
    return x !== 0 || y !== 0 || 1 / x === 1 / y;
  } else {
    return x !== x && y !== y;
  }
}
function shallowEqual(objA, objB) {
  if (is(objA, objB))
    return true;
  if (typeof objA !== "object" || objA === null || typeof objB !== "object" || objB === null) {
    return false;
  }
  const keysA = Object.keys(objA);
  const keysB = Object.keys(objB);
  if (keysA.length !== keysB.length)
    return false;
  for (let i = 0; i < keysA.length; i++) {
    if (!Object.prototype.hasOwnProperty.call(objB, keysA[i]) || !is(objA[keysA[i]], objB[keysA[i]])) {
      return false;
    }
  }
  return true;
}
function getAppBarUtilityClass(slot) {
  return generateUtilityClass("MuiAppBar", slot);
}
generateUtilityClasses("MuiAppBar", ["root", "positionFixed", "positionAbsolute", "positionSticky", "positionStatic", "positionRelative", "colorDefault", "colorPrimary", "colorSecondary", "colorInherit", "colorTransparent"]);
const _excluded$2 = ["className", "color", "enableColorOnDark", "position"];
const useUtilityClasses$1 = (ownerState) => {
  const {
    color,
    position,
    classes
  } = ownerState;
  const slots = {
    root: ["root", `color${capitalize(color)}`, `position${capitalize(position)}`]
  };
  return composeClasses(slots, getAppBarUtilityClass, classes);
};
const joinVars = (var1, var2) => var1 ? `${var1 == null ? void 0 : var1.replace(")", "")}, ${var2})` : var2;
const AppBarRoot = styled(Paper, {
  name: "MuiAppBar",
  slot: "Root",
  overridesResolver: (props, styles2) => {
    const {
      ownerState
    } = props;
    return [styles2.root, styles2[`position${capitalize(ownerState.position)}`], styles2[`color${capitalize(ownerState.color)}`]];
  }
})(({
  theme,
  ownerState
}) => {
  const backgroundColorDefault = theme.palette.mode === "light" ? theme.palette.grey[100] : theme.palette.grey[900];
  return _extends({
    display: "flex",
    flexDirection: "column",
    width: "100%",
    boxSizing: "border-box",
    // Prevent padding issue with the Modal and fixed positioned AppBar.
    flexShrink: 0
  }, ownerState.position === "fixed" && {
    position: "fixed",
    zIndex: (theme.vars || theme).zIndex.appBar,
    top: 0,
    left: "auto",
    right: 0,
    "@media print": {
      // Prevent the app bar to be visible on each printed page.
      position: "absolute"
    }
  }, ownerState.position === "absolute" && {
    position: "absolute",
    zIndex: (theme.vars || theme).zIndex.appBar,
    top: 0,
    left: "auto",
    right: 0
  }, ownerState.position === "sticky" && {
    // ⚠️ sticky is not supported by IE11.
    position: "sticky",
    zIndex: (theme.vars || theme).zIndex.appBar,
    top: 0,
    left: "auto",
    right: 0
  }, ownerState.position === "static" && {
    position: "static"
  }, ownerState.position === "relative" && {
    position: "relative"
  }, !theme.vars && _extends({}, ownerState.color === "default" && {
    backgroundColor: backgroundColorDefault,
    color: theme.palette.getContrastText(backgroundColorDefault)
  }, ownerState.color && ownerState.color !== "default" && ownerState.color !== "inherit" && ownerState.color !== "transparent" && {
    backgroundColor: theme.palette[ownerState.color].main,
    color: theme.palette[ownerState.color].contrastText
  }, ownerState.color === "inherit" && {
    color: "inherit"
  }, theme.palette.mode === "dark" && !ownerState.enableColorOnDark && {
    backgroundColor: null,
    color: null
  }, ownerState.color === "transparent" && _extends({
    backgroundColor: "transparent",
    color: "inherit"
  }, theme.palette.mode === "dark" && {
    backgroundImage: "none"
  })), theme.vars && _extends({}, ownerState.color === "default" && {
    "--AppBar-background": ownerState.enableColorOnDark ? theme.vars.palette.AppBar.defaultBg : joinVars(theme.vars.palette.AppBar.darkBg, theme.vars.palette.AppBar.defaultBg),
    "--AppBar-color": ownerState.enableColorOnDark ? theme.vars.palette.text.primary : joinVars(theme.vars.palette.AppBar.darkColor, theme.vars.palette.text.primary)
  }, ownerState.color && !ownerState.color.match(/^(default|inherit|transparent)$/) && {
    "--AppBar-background": ownerState.enableColorOnDark ? theme.vars.palette[ownerState.color].main : joinVars(theme.vars.palette.AppBar.darkBg, theme.vars.palette[ownerState.color].main),
    "--AppBar-color": ownerState.enableColorOnDark ? theme.vars.palette[ownerState.color].contrastText : joinVars(theme.vars.palette.AppBar.darkColor, theme.vars.palette[ownerState.color].contrastText)
  }, {
    backgroundColor: "var(--AppBar-background)",
    color: ownerState.color === "inherit" ? "inherit" : "var(--AppBar-color)"
  }, ownerState.color === "transparent" && {
    backgroundImage: "none",
    backgroundColor: "transparent",
    color: "inherit"
  }));
});
const AppBar = /* @__PURE__ */ reactExports.forwardRef(function AppBar2(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiAppBar"
  });
  const {
    className,
    color = "primary",
    enableColorOnDark = false,
    position = "fixed"
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded$2);
  const ownerState = _extends({}, props, {
    color,
    position,
    enableColorOnDark
  });
  const classes = useUtilityClasses$1(ownerState);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(AppBarRoot, _extends({
    square: true,
    component: "header",
    ownerState,
    elevation: 4,
    className: clsx(classes.root, className, position === "fixed" && "mui-fixed"),
    ref
  }, other));
});
const AppBar$1 = AppBar;
const _excluded$1 = ["addEndListener", "appear", "children", "container", "direction", "easing", "in", "onEnter", "onEntered", "onEntering", "onExit", "onExited", "onExiting", "style", "timeout", "TransitionComponent"];
function getTranslateValue(direction, node, resolvedContainer) {
  const rect = node.getBoundingClientRect();
  const containerRect = resolvedContainer && resolvedContainer.getBoundingClientRect();
  const containerWindow = ownerWindow(node);
  let transform;
  if (node.fakeTransform) {
    transform = node.fakeTransform;
  } else {
    const computedStyle = containerWindow.getComputedStyle(node);
    transform = computedStyle.getPropertyValue("-webkit-transform") || computedStyle.getPropertyValue("transform");
  }
  let offsetX = 0;
  let offsetY = 0;
  if (transform && transform !== "none" && typeof transform === "string") {
    const transformValues = transform.split("(")[1].split(")")[0].split(",");
    offsetX = parseInt(transformValues[4], 10);
    offsetY = parseInt(transformValues[5], 10);
  }
  if (direction === "left") {
    if (containerRect) {
      return `translateX(${containerRect.right + offsetX - rect.left}px)`;
    }
    return `translateX(${containerWindow.innerWidth + offsetX - rect.left}px)`;
  }
  if (direction === "right") {
    if (containerRect) {
      return `translateX(-${rect.right - containerRect.left - offsetX}px)`;
    }
    return `translateX(-${rect.left + rect.width - offsetX}px)`;
  }
  if (direction === "up") {
    if (containerRect) {
      return `translateY(${containerRect.bottom + offsetY - rect.top}px)`;
    }
    return `translateY(${containerWindow.innerHeight + offsetY - rect.top}px)`;
  }
  if (containerRect) {
    return `translateY(-${rect.top - containerRect.top + rect.height - offsetY}px)`;
  }
  return `translateY(-${rect.top + rect.height - offsetY}px)`;
}
function resolveContainer(containerPropProp) {
  return typeof containerPropProp === "function" ? containerPropProp() : containerPropProp;
}
function setTranslateValue(direction, node, containerProp) {
  const resolvedContainer = resolveContainer(containerProp);
  const transform = getTranslateValue(direction, node, resolvedContainer);
  if (transform) {
    node.style.webkitTransform = transform;
    node.style.transform = transform;
  }
}
const Slide = /* @__PURE__ */ reactExports.forwardRef(function Slide2(props, ref) {
  const theme = useTheme();
  const defaultEasing = {
    enter: theme.transitions.easing.easeOut,
    exit: theme.transitions.easing.sharp
  };
  const defaultTimeout = {
    enter: theme.transitions.duration.enteringScreen,
    exit: theme.transitions.duration.leavingScreen
  };
  const {
    addEndListener,
    appear = true,
    children,
    container: containerProp,
    direction = "down",
    easing: easingProp = defaultEasing,
    in: inProp,
    onEnter,
    onEntered,
    onEntering,
    onExit,
    onExited,
    onExiting,
    style,
    timeout = defaultTimeout,
    // eslint-disable-next-line react/prop-types
    TransitionComponent = Transition
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded$1);
  const childrenRef = reactExports.useRef(null);
  const handleRef = useForkRef(children.ref, childrenRef, ref);
  const normalizedTransitionCallback = (callback) => (isAppearing) => {
    if (callback) {
      if (isAppearing === void 0) {
        callback(childrenRef.current);
      } else {
        callback(childrenRef.current, isAppearing);
      }
    }
  };
  const handleEnter = normalizedTransitionCallback((node, isAppearing) => {
    setTranslateValue(direction, node, containerProp);
    reflow(node);
    if (onEnter) {
      onEnter(node, isAppearing);
    }
  });
  const handleEntering = normalizedTransitionCallback((node, isAppearing) => {
    const transitionProps = getTransitionProps({
      timeout,
      style,
      easing: easingProp
    }, {
      mode: "enter"
    });
    node.style.webkitTransition = theme.transitions.create("-webkit-transform", _extends({}, transitionProps));
    node.style.transition = theme.transitions.create("transform", _extends({}, transitionProps));
    node.style.webkitTransform = "none";
    node.style.transform = "none";
    if (onEntering) {
      onEntering(node, isAppearing);
    }
  });
  const handleEntered = normalizedTransitionCallback(onEntered);
  const handleExiting = normalizedTransitionCallback(onExiting);
  const handleExit = normalizedTransitionCallback((node) => {
    const transitionProps = getTransitionProps({
      timeout,
      style,
      easing: easingProp
    }, {
      mode: "exit"
    });
    node.style.webkitTransition = theme.transitions.create("-webkit-transform", transitionProps);
    node.style.transition = theme.transitions.create("transform", transitionProps);
    setTranslateValue(direction, node, containerProp);
    if (onExit) {
      onExit(node);
    }
  });
  const handleExited = normalizedTransitionCallback((node) => {
    node.style.webkitTransition = "";
    node.style.transition = "";
    if (onExited) {
      onExited(node);
    }
  });
  const handleAddEndListener = (next) => {
    if (addEndListener) {
      addEndListener(childrenRef.current, next);
    }
  };
  const updatePosition = reactExports.useCallback(() => {
    if (childrenRef.current) {
      setTranslateValue(direction, childrenRef.current, containerProp);
    }
  }, [direction, containerProp]);
  reactExports.useEffect(() => {
    if (inProp || direction === "down" || direction === "right") {
      return void 0;
    }
    const handleResize = debounce(() => {
      if (childrenRef.current) {
        setTranslateValue(direction, childrenRef.current, containerProp);
      }
    });
    const containerWindow = ownerWindow(childrenRef.current);
    containerWindow.addEventListener("resize", handleResize);
    return () => {
      handleResize.clear();
      containerWindow.removeEventListener("resize", handleResize);
    };
  }, [direction, inProp, containerProp]);
  reactExports.useEffect(() => {
    if (!inProp) {
      updatePosition();
    }
  }, [inProp, updatePosition]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(TransitionComponent, _extends({
    nodeRef: childrenRef,
    onEnter: handleEnter,
    onEntered: handleEntered,
    onEntering: handleEntering,
    onExit: handleExit,
    onExited: handleExited,
    onExiting: handleExiting,
    addEndListener: handleAddEndListener,
    appear,
    in: inProp,
    timeout
  }, other, {
    children: (state, childProps) => {
      return /* @__PURE__ */ reactExports.cloneElement(children, _extends({
        ref: handleRef,
        style: _extends({
          visibility: state === "exited" && !inProp ? "hidden" : void 0
        }, style, children.props.style)
      }, childProps));
    }
  }));
});
const Slide$1 = Slide;
function getDrawerUtilityClass(slot) {
  return generateUtilityClass("MuiDrawer", slot);
}
generateUtilityClasses("MuiDrawer", ["root", "docked", "paper", "paperAnchorLeft", "paperAnchorRight", "paperAnchorTop", "paperAnchorBottom", "paperAnchorDockedLeft", "paperAnchorDockedRight", "paperAnchorDockedTop", "paperAnchorDockedBottom", "modal"]);
const _excluded = ["BackdropProps"], _excluded2 = ["anchor", "BackdropProps", "children", "className", "elevation", "hideBackdrop", "ModalProps", "onClose", "open", "PaperProps", "SlideProps", "TransitionComponent", "transitionDuration", "variant"];
const overridesResolver = (props, styles2) => {
  const {
    ownerState
  } = props;
  return [styles2.root, (ownerState.variant === "permanent" || ownerState.variant === "persistent") && styles2.docked, styles2.modal];
};
const useUtilityClasses = (ownerState) => {
  const {
    classes,
    anchor,
    variant
  } = ownerState;
  const slots = {
    root: ["root"],
    docked: [(variant === "permanent" || variant === "persistent") && "docked"],
    modal: ["modal"],
    paper: ["paper", `paperAnchor${capitalize(anchor)}`, variant !== "temporary" && `paperAnchorDocked${capitalize(anchor)}`]
  };
  return composeClasses(slots, getDrawerUtilityClass, classes);
};
const DrawerRoot = styled(Modal, {
  name: "MuiDrawer",
  slot: "Root",
  overridesResolver
})(({
  theme
}) => ({
  zIndex: (theme.vars || theme).zIndex.drawer
}));
const DrawerDockedRoot = styled("div", {
  shouldForwardProp: rootShouldForwardProp,
  name: "MuiDrawer",
  slot: "Docked",
  skipVariantsResolver: false,
  overridesResolver
})({
  flex: "0 0 auto"
});
const DrawerPaper = styled(Paper, {
  name: "MuiDrawer",
  slot: "Paper",
  overridesResolver: (props, styles2) => {
    const {
      ownerState
    } = props;
    return [styles2.paper, styles2[`paperAnchor${capitalize(ownerState.anchor)}`], ownerState.variant !== "temporary" && styles2[`paperAnchorDocked${capitalize(ownerState.anchor)}`]];
  }
})(({
  theme,
  ownerState
}) => _extends({
  overflowY: "auto",
  display: "flex",
  flexDirection: "column",
  height: "100%",
  flex: "1 0 auto",
  zIndex: (theme.vars || theme).zIndex.drawer,
  // Add iOS momentum scrolling for iOS < 13.0
  WebkitOverflowScrolling: "touch",
  // temporary style
  position: "fixed",
  top: 0,
  // We disable the focus ring for mouse, touch and keyboard users.
  // At some point, it would be better to keep it for keyboard users.
  // :focus-ring CSS pseudo-class will help.
  outline: 0
}, ownerState.anchor === "left" && {
  left: 0
}, ownerState.anchor === "top" && {
  top: 0,
  left: 0,
  right: 0,
  height: "auto",
  maxHeight: "100%"
}, ownerState.anchor === "right" && {
  right: 0
}, ownerState.anchor === "bottom" && {
  top: "auto",
  left: 0,
  bottom: 0,
  right: 0,
  height: "auto",
  maxHeight: "100%"
}, ownerState.anchor === "left" && ownerState.variant !== "temporary" && {
  borderRight: `1px solid ${(theme.vars || theme).palette.divider}`
}, ownerState.anchor === "top" && ownerState.variant !== "temporary" && {
  borderBottom: `1px solid ${(theme.vars || theme).palette.divider}`
}, ownerState.anchor === "right" && ownerState.variant !== "temporary" && {
  borderLeft: `1px solid ${(theme.vars || theme).palette.divider}`
}, ownerState.anchor === "bottom" && ownerState.variant !== "temporary" && {
  borderTop: `1px solid ${(theme.vars || theme).palette.divider}`
}));
const oppositeDirection = {
  left: "right",
  right: "left",
  top: "down",
  bottom: "up"
};
function isHorizontal(anchor) {
  return ["left", "right"].indexOf(anchor) !== -1;
}
function getAnchor(theme, anchor) {
  return theme.direction === "rtl" && isHorizontal(anchor) ? oppositeDirection[anchor] : anchor;
}
const Drawer = /* @__PURE__ */ reactExports.forwardRef(function Drawer2(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiDrawer"
  });
  const theme = useTheme();
  const defaultTransitionDuration = {
    enter: theme.transitions.duration.enteringScreen,
    exit: theme.transitions.duration.leavingScreen
  };
  const {
    anchor: anchorProp = "left",
    BackdropProps,
    children,
    className,
    elevation = 16,
    hideBackdrop = false,
    ModalProps: {
      BackdropProps: BackdropPropsProp
    } = {},
    onClose,
    open = false,
    PaperProps = {},
    SlideProps,
    // eslint-disable-next-line react/prop-types
    TransitionComponent = Slide$1,
    transitionDuration = defaultTransitionDuration,
    variant = "temporary"
  } = props, ModalProps = _objectWithoutPropertiesLoose(props.ModalProps, _excluded), other = _objectWithoutPropertiesLoose(props, _excluded2);
  const mounted = reactExports.useRef(false);
  reactExports.useEffect(() => {
    mounted.current = true;
  }, []);
  const anchorInvariant = getAnchor(theme, anchorProp);
  const anchor = anchorProp;
  const ownerState = _extends({}, props, {
    anchor,
    elevation,
    open,
    variant
  }, other);
  const classes = useUtilityClasses(ownerState);
  const drawer2 = /* @__PURE__ */ jsxRuntimeExports.jsx(DrawerPaper, _extends({
    elevation: variant === "temporary" ? elevation : 0,
    square: true
  }, PaperProps, {
    className: clsx(classes.paper, PaperProps.className),
    ownerState,
    children
  }));
  if (variant === "permanent") {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(DrawerDockedRoot, _extends({
      className: clsx(classes.root, classes.docked, className),
      ownerState,
      ref
    }, other, {
      children: drawer2
    }));
  }
  const slidingDrawer = /* @__PURE__ */ jsxRuntimeExports.jsx(TransitionComponent, _extends({
    in: open,
    direction: oppositeDirection[anchorInvariant],
    timeout: transitionDuration,
    appear: mounted.current
  }, SlideProps, {
    children: drawer2
  }));
  if (variant === "persistent") {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(DrawerDockedRoot, _extends({
      className: clsx(classes.root, classes.docked, className),
      ownerState,
      ref
    }, other, {
      children: slidingDrawer
    }));
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(DrawerRoot, _extends({
    BackdropProps: _extends({}, BackdropProps, BackdropPropsProp, {
      transitionDuration
    }),
    className: clsx(classes.root, classes.modal, className),
    open,
    ownerState,
    onClose,
    hideBackdrop,
    ref
  }, other, ModalProps, {
    children: slidingDrawer
  }));
});
const Drawer$1 = Drawer;
const mainContainer = "_mainContainer_1sjy5_1";
const drawer = "_drawer_1sjy5_5";
const surveyDesignError = "_surveyDesignError_1sjy5_9";
const styles$i = {
  mainContainer,
  drawer,
  surveyDesignError
};
const errorContent = "_errorContent_sv3yb_1";
const styles$h = {
  errorContent
};
function ErrorMessage(props) {
  const [open, setOpen] = reactExports.useState(true);
  const [dir, setDir] = reactExports.useState("ltr");
  const handleClose = () => {
    setOpen(false);
  };
  const { i18n } = useTranslation("run");
  reactExports.useEffect(() => {
    if (rtlLanguage.includes(i18n.language)) {
      setDir("rtl");
    } else {
      setDir("ltr");
    }
  }, [i18n.language]);
  if (props.variant === "toast") {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Snackbar, { open, autoHideDuration: 6e3, onClose: handleClose, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Alert,
      {
        variant: "standard",
        severity: props.severity || "error",
        onClose: handleClose,
        dir,
        children: props.error.message
      }
    ) });
  } else {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `error-page ${props.className || ""}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: styles$h.errorContent, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Alert,
      {
        onClose: handleClose,
        severity: props.severity || "error",
        variant: "standard",
        dir,
        children: props.error.message
      }
    ) }) });
  }
}
var Menu = {};
var _interopRequireDefault$2 = interopRequireDefaultExports;
Object.defineProperty(Menu, "__esModule", {
  value: true
});
var default_1$2 = Menu.default = void 0;
var _createSvgIcon$2 = _interopRequireDefault$2(requireCreateSvgIcon());
var _jsxRuntime$2 = jsxRuntimeExports;
var _default$2 = (0, _createSvgIcon$2.default)(/* @__PURE__ */ (0, _jsxRuntime$2.jsx)("path", {
  d: "M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"
}), "Menu");
default_1$2 = Menu.default = _default$2;
const groupCard = "_groupCard_1t5ma_1";
const groupTitle = "_groupTitle_1t5ma_6";
const questionTitle = "_questionTitle_1t5ma_10";
const validationIcon = "_validationIcon_1t5ma_16";
const bullet = "_bullet_1t5ma_23";
const styles$g = {
  groupCard,
  groupTitle,
  questionTitle,
  validationIcon,
  bullet
};
var CheckCircle = {};
var _interopRequireDefault$1 = interopRequireDefaultExports;
Object.defineProperty(CheckCircle, "__esModule", {
  value: true
});
var default_1$1 = CheckCircle.default = void 0;
var _createSvgIcon$1 = _interopRequireDefault$1(requireCreateSvgIcon());
var _jsxRuntime$1 = jsxRuntimeExports;
var _default$1 = (0, _createSvgIcon$1.default)(/* @__PURE__ */ (0, _jsxRuntime$1.jsx)("path", {
  d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
}), "CheckCircle");
default_1$1 = CheckCircle.default = _default$1;
var Circle = {};
var _interopRequireDefault = interopRequireDefaultExports;
Object.defineProperty(Circle, "__esModule", {
  value: true
});
var default_1 = Circle.default = void 0;
var _createSvgIcon = _interopRequireDefault(requireCreateSvgIcon());
var _jsxRuntime = jsxRuntimeExports;
var _default = (0, _createSvgIcon.default)(/* @__PURE__ */ (0, _jsxRuntime.jsx)("path", {
  d: "M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2z"
}), "Circle");
default_1 = Circle.default = _default;
function SurveyIndex(props) {
  const theme = useTheme$1();
  const dispatch = useDispatch();
  const relevance_map = useSelector((state) => {
    return state.runState.values["Survey"].relevance_map;
  }, shallowEqual);
  const validity_map = useSelector((state) => {
    return state.runState.values["Survey"].validity_map;
  }, shallowEqual);
  const canJump = useSelector((state) => {
    return state.runState.navProps.allowJump;
  }, shallowEqual);
  const isCurrentGroup = (groupCode) => {
    return props.navigationIndex.name == "group" && groupCode == props.navigationIndex.groupId;
  };
  const isCurrentQuestion = (questionCode) => {
    return props.navigationIndex.name == "question" && questionCode == props.navigationIndex.questionId;
  };
  const isGroupClickable = (groupCode) => canJump && !isCurrentGroup(groupCode) && props.navigationIndex.name == "group";
  const isQuestionClickable = (questionCode) => canJump && !isCurrentQuestion(questionCode) && props.navigationIndex.name == "question";
  const onGroupClicked = (groupCode) => {
    if (isGroupClickable(groupCode)) {
      dispatch(jump({ ...props.navigationIndex, groupId: groupCode }));
    }
  };
  const onQuestionClicked = (questionCode) => {
    if (isQuestionClickable(questionCode)) {
      dispatch(jump({ ...props.navigationIndex, questionId: questionCode }));
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: styles$g.surveyContent, children: props.survey && props.survey.groups ? props.survey.groups.filter(
    (group) => relevance_map[group.code] && group.groupType != "END"
  ).map((group) => {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Card,
      {
        onClick: () => onGroupClicked(group.code),
        className: styles$g.groupCard,
        style: {
          backgroundColor: isCurrentGroup(group.code) ? "beige" : theme.palette.background.paper,
          cursor: isGroupClickable(group.code) ? "pointer" : "default"
        },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Box$1, { className: styles$g.groupTitle, children: [
            stripTags(group.content.label),
            " "
          ] }),
          group.questions.filter((question2) => relevance_map[question2.code]).map((question2) => {
            return /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Box$1,
              {
                onClick: () => onQuestionClicked(question2.code),
                className: styles$g.questionTitle,
                style: {
                  backgroundColor: isCurrentQuestion(question2.code) ? "beige" : "inherit",
                  cursor: isGroupClickable(group.code) ? "inherit" : isQuestionClickable(group.code) ? "pointer" : "default"
                },
                children: [
                  validity_map[question2.code] ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                    default_1$1,
                    {
                      className: styles$g.validationIcon
                    }
                  ) : /* @__PURE__ */ jsxRuntimeExports.jsx(default_1, { className: styles$g.bullet }),
                  stripTags(question2.content.label)
                ]
              },
              question2.code
            );
          })
        ]
      },
      group.code
    );
  }) : "" });
}
function Navigation(props) {
  const state = useSelector((state2) => {
    return {
      has_previous: state2.runState.values.Survey.has_previous && state2.runState.navProps.allowPrevious,
      has_next: state2.runState.values.Survey.has_next,
      can_save: state2.runState.navProps.allowIncomplete
    };
  }, shallowEqual);
  const dispatch = useDispatch();
  const { t, i18n } = useTranslation("run");
  const isRtl = rtlLanguage.includes(i18n.language);
  const previous = () => {
    dispatch(navigatePrevious());
  };
  const next = () => {
    dispatch(navigateNext());
  };
  return props.navigationIndex.name == "end" ? "" : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pb-10 ta-center", children: [
    state.has_previous ? /* @__PURE__ */ jsxRuntimeExports.jsx(
      Button,
      {
        variant: "contained",
        className: isRtl ? "ml-14" : "mr-14",
        onClick: () => {
          previous();
        },
        children: t("previous")
      }
    ) : "",
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Button,
      {
        variant: "contained",
        onClick: () => {
          next();
        },
        children: state.has_next ? t("next") : t("finish")
      }
    )
  ] });
}
const surveyContent = "_surveyContent_aitfd_1";
const surveyGroups = "_surveyGroups_aitfd_5";
const cardImage = "_cardImage_aitfd_11";
const styles$f = {
  surveyContent,
  surveyGroups,
  cardImage
};
const FORM_ID = "frankie-form";
const wrapper$1 = "_wrapper_1hpga_1";
const icon = "_icon_1hpga_11";
const styles$e = {
  wrapper: wrapper$1,
  icon
};
function ValidationItem(props) {
  const { t } = useTranslation(["run"]);
  function messages() {
    let validationMessage = "";
    if (props.validation.content && props.validation.isCustomErrorActive) {
      validationMessage = props.validation.content;
    } else {
      var translationKey = props.name.replace(/[0-9]/g, "");
      validationMessage = t(translationKey, { ...props.validation });
    }
    if (validationMessage) {
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(Box$2, { sx: { color: "error.main" }, className: styles$e.wrapper, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ErrorOutlineOutlined, {}),
        validationMessage
      ] });
    } else {
      return "";
    }
  }
  return messages();
}
function Validation(props) {
  const validation = useSelector((state) => {
    if (!props.component.validation) {
      return {};
    } else {
      var validation2 = {};
      Object.keys(props.component.validation).forEach((key) => {
        var value = state.runState.values[props.component.qualifiedCode][key];
        if (value) {
          validation2[key] = value;
        }
      });
      return validation2;
    }
  });
  function messages() {
    if (props.component.validation) {
      let array = Object.keys(props.component.validation).filter(
        (key) => validation[key]
      );
      let limit = props.limit ? props.limit : array.length;
      return array.slice(0, limit).map((key, index) => {
        return /* @__PURE__ */ jsxRuntimeExports.jsx(
          ValidationItem,
          {
            name: key,
            validation: props.component.validation[key]
          },
          index
        );
      });
    } else {
      return "";
    }
  }
  return messages();
}
function SCQ(props) {
  const state = useSelector((state2) => {
    let questionState = state2.runState.values[props.component.qualifiedCode];
    return {
      value: (questionState == null ? void 0 : questionState.value) || ""
    };
  }, shallowEqual);
  const dispatch = useDispatch();
  const handleChange = (event) => {
    dispatch(
      valueChange({
        componentCode: event.target.name,
        value: event.target.value
      })
    );
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(FormControl, { component: "fieldset", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    RadioGroup,
    {
      name: props.component.qualifiedCode,
      value: state.value,
      onChange: handleChange,
      children: props.component.answers.map((option) => {
        if (option.type === "other") {
          return /* @__PURE__ */ jsxRuntimeExports.jsx(
            ScqChoiceOther,
            {
              parentCode: props.component.qualifiedCode,
              Choice: option
            },
            option.qualifiedCode
          );
        } else {
          return /* @__PURE__ */ jsxRuntimeExports.jsx(ScqChoice, { Choice: option }, option.qualifiedCode);
        }
      })
    }
  ) });
}
function ScqChoice(props) {
  const theme = useTheme();
  const showChoice = () => {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      FormControlLabel,
      {
        control: /* @__PURE__ */ jsxRuntimeExports.jsx(Radio, {}),
        label: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Box$2,
          {
            sx: {
              fontFamily: theme.textStyles.text.font,
              color: theme.textStyles.text.color,
              fontSize: theme.textStyles.text.size
            },
            children: props.Choice.content.label
          }
        ),
        value: props.Choice.code
      },
      props.Choice.qualifiedCode
    );
  };
  return showChoice ? showChoice() : "";
}
function ScqChoiceOther(props) {
  const theme = useTheme();
  const nestedTextChild = props.Choice.answers[0];
  const state = useSelector((state2) => {
    let choiceState = state2.runState.values[props.Choice.qualifiedCode];
    let childState = state2.runState.values[nestedTextChild.qualifiedCode];
    let show_errors = state2.runState.values.Survey.show_errors;
    let isChildDirty = state2.templateState[nestedTextChild.qualifiedCode];
    return {
      showChoice: typeof (choiceState == null ? void 0 : choiceState.relevance) === "undefined" || choiceState.relevance,
      childInvalid: (show_errors || isChildDirty) && (childState == null ? void 0 : childState.relevance) === true && (childState == null ? void 0 : childState.validity) === false,
      value: (childState == null ? void 0 : childState.value) || ""
    };
  }, shallowEqual);
  const dispatch = useDispatch();
  const handleChange = (event) => {
    dispatch(
      valueChange({
        componentCode: event.target.name,
        value: event.target.value
      })
    );
  };
  const handleFocus = (event) => {
    dispatch(
      valueChange({ componentCode: props.parentCode, value: props.Choice.code })
    );
  };
  const lostFocus = (event) => {
    dispatch(setDirty(event.target.name));
  };
  const textInput = reactExports.useRef();
  const onButtonClick = (event) => {
    if (event.target.checked) {
      textInput.current.focus();
    }
  };
  const showChoice = () => {
    var _a, _b;
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-left d-flex", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        FormControlLabel,
        {
          control: /* @__PURE__ */ jsxRuntimeExports.jsx(Radio, {}),
          label: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-100", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            TextField,
            {
              variant: "standard",
              required: ((_a = state.textChild) == null ? void 0 : _a.relevance) && ((_b = nestedTextChild.validation) == null ? void 0 : _b.required),
              inputRef: textInput,
              id: nestedTextChild.qualifiedCode,
              name: nestedTextChild.qualifiedCode,
              label: props.Choice.content.label,
              onChange: handleChange,
              onFocus: handleFocus,
              onBlur: lostFocus,
              value: state.value,
              InputProps: {
                sx: {
                  fontFamily: theme.textStyles.text.font,
                  color: theme.textStyles.text.color,
                  fontSize: theme.textStyles.text.size
                }
              },
              helperText: state.childInvalid ? /* @__PURE__ */ jsxRuntimeExports.jsx(Validation, { component: nestedTextChild, limit: 1 }) : ""
            }
          ) }),
          onChange: onButtonClick,
          value: props.Choice.code
        },
        props.Choice.qualifiedCode
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", {})
    ] });
  };
  return state.showChoice ? showChoice() : "";
}
const questionItem$3 = "_questionItem_1sx0f_1";
const styles$d = {
  questionItem: questionItem$3
};
function TextQuestion(props) {
  var _a, _b;
  const theme = useTheme();
  const state = useSelector((state2) => {
    let questionState = state2.runState.values[props.component.qualifiedCode];
    let show_errors = state2.runState.values.Survey.show_errors;
    let isDirty = state2.templateState[props.component.qualifiedCode];
    let validity = questionState == null ? void 0 : questionState.validity;
    let invalid = (show_errors || isDirty) && validity === false;
    return {
      value: (questionState == null ? void 0 : questionState.value) || "",
      invalid
    };
  }, shallowEqual);
  const dispatch = useDispatch();
  const handleChange = (event) => {
    dispatch(
      valueChange({
        componentCode: event.target.name,
        value: event.target.value
      })
    );
  };
  const lostFocus = (event) => {
    dispatch(setDirty(event.target.name));
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: styles$d.questionItem, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    TextField,
    {
      variant: "standard",
      required: ((_b = (_a = props.component.validation) == null ? void 0 : _a.validation_required) == null ? void 0 : _b.isActive) ? true : false,
      id: props.component.qualifiedCode,
      name: props.component.qualifiedCode,
      label: props.component.content.hint || "",
      onChange: handleChange,
      onBlur: lostFocus,
      inputProps: { maxLength: props.component.maxChars || void 0 },
      value: state.value,
      error: state.invalid,
      InputProps: {
        sx: {
          fontFamily: theme.textStyles.text.font,
          color: theme.textStyles.text.color,
          fontSize: theme.textStyles.text.size
        }
      }
    }
  ) });
}
const questionItem$2 = "_questionItem_169qj_1";
const styles$c = {
  questionItem: questionItem$2
};
function EmailQuestion(props) {
  var _a, _b;
  const theme = useTheme();
  const state = useSelector((state2) => {
    let questionState = state2.runState.values[props.component.qualifiedCode];
    let show_errors = state2.runState.values.Survey.show_errors;
    let isDirty = state2.templateState[props.component.qualifiedCode];
    let validity = questionState == null ? void 0 : questionState.validity;
    let invalid = (show_errors || isDirty) && validity === false;
    return {
      value: (questionState == null ? void 0 : questionState.value) || "",
      invalid
    };
  }, shallowEqual);
  const dispatch = useDispatch();
  const handleChange = (event) => {
    dispatch(
      valueChange({
        componentCode: event.target.name,
        value: event.target.value
      })
    );
  };
  const lostFocus = (event) => {
    dispatch(setDirty(event.target.name));
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: styles$c.questionItem, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    TextField,
    {
      variant: "standard",
      required: ((_b = (_a = props.component.validation) == null ? void 0 : _a.validation_required) == null ? void 0 : _b.isActive) ? true : false,
      id: props.component.qualifiedCode,
      name: props.component.qualifiedCode,
      label: props.component.content.hint || "",
      onChange: handleChange,
      onBlur: lostFocus,
      inputProps: {
        type: "email",
        maxLength: props.component.maxChars || void 0
      },
      value: state.value,
      error: state.invalid,
      InputProps: {
        sx: {
          fontFamily: theme.textStyles.text.font,
          color: theme.textStyles.text.color,
          fontSize: theme.textStyles.text.size
        }
      }
    }
  ) });
}
const questionItem$1 = "_questionItem_7ep8w_1";
const styles$b = {
  questionItem: questionItem$1
};
function NumberQuestion(props) {
  var _a, _b;
  const theme = useTheme();
  const state = useSelector((state2) => {
    let questionState = state2.runState.values[props.component.qualifiedCode];
    let show_errors = state2.runState.values.Survey.show_errors;
    let isDirty = state2.templateState[props.component.qualifiedCode];
    let validity = questionState == null ? void 0 : questionState.validity;
    let invalid = (show_errors || isDirty) && validity === false;
    return {
      value: (questionState == null ? void 0 : questionState.value) === void 0 ? "" : questionState == null ? void 0 : questionState.value,
      invalid
    };
  }, shallowEqual);
  const dispatch = useDispatch();
  const handleChange = (event) => {
    const regex = props.component.allowDecimal ? /^[0-9]*[.]*[0-9]*$/ : /^[0-9]*$/;
    if (event.target.value === "" || regex.test(event.target.value)) {
      let output = +event.target.value;
      const moreZeroesRegex = /^[0][.][0]+$/;
      dispatch(
        valueChange({
          componentCode: event.target.name,
          value: event.target.value === "" || isNaN(output) || event.target.value.endsWith(".") || moreZeroesRegex.test(event.target.value) ? event.target.value : output
        })
      );
    }
  };
  const lostFocus = (event) => {
    dispatch(setDirty(event.target.name));
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: styles$b.questionItem, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    TextField,
    {
      variant: "standard",
      required: ((_b = (_a = props.component.validation) == null ? void 0 : _a.validation_required) == null ? void 0 : _b.isActive) ? true : false,
      id: props.component.qualifiedCode,
      name: props.component.qualifiedCode,
      label: props.component.content.hint || "",
      onChange: handleChange,
      onBlur: lostFocus,
      inputProps: { maxLength: props.component.maxChars || void 0 },
      value: state.value,
      error: state.invalid,
      InputProps: {
        sx: {
          fontFamily: theme.textStyles.text.font,
          color: theme.textStyles.text.color,
          fontSize: theme.textStyles.text.size
        }
      }
    }
  ) });
}
function MCQ(props) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(FormControl, { component: "fieldset", children: /* @__PURE__ */ jsxRuntimeExports.jsx(RadioGroup, { children: props.component.answers.map((option) => {
    if (option.type === "other") {
      return /* @__PURE__ */ jsxRuntimeExports.jsx(
        McqAnswerOther,
        {
          Answer: option,
          parentCode: props.component.qualifiedCode
        },
        option.qualifiedCode
      );
    } else {
      return /* @__PURE__ */ jsxRuntimeExports.jsx(
        McqAnswer,
        {
          Answer: option,
          parentCode: props.component.qualifiedCode
        },
        option.qualifiedCode
      );
    }
  }) }) });
}
function McqAnswer(props) {
  const theme = useTheme();
  const state = useSelector((state2) => {
    var _a;
    let answerState = state2.runState.values[(_a = props.Answer) == null ? void 0 : _a.qualifiedCode];
    return {
      showAnswer: typeof (answerState == null ? void 0 : answerState.relevance) == "undefined" || answerState.relevance,
      checked: (answerState == null ? void 0 : answerState.value) || false
    };
  }, shallowEqual);
  const dispatch = useDispatch();
  const handleChange = (event) => {
    dispatch(
      valueChange({
        componentCode: event.target.name,
        value: event.target.checked
      })
    );
    dispatch(setDirty(event.target.name));
    dispatch(setDirty(props.parentCode));
  };
  return state.showAnswer ? /* @__PURE__ */ jsxRuntimeExports.jsx(
    FormControlLabel,
    {
      control: /* @__PURE__ */ jsxRuntimeExports.jsx(
        Checkbox,
        {
          checked: state.checked,
          onChange: handleChange,
          name: props.Answer.qualifiedCode
        }
      ),
      label: /* @__PURE__ */ jsxRuntimeExports.jsx(
        Box$2,
        {
          sx: {
            fontFamily: theme.textStyles.text.font,
            fontSize: theme.textStyles.text.size
          },
          children: props.Answer.content.label
        }
      )
    }
  ) : "";
}
function McqAnswerOther(props) {
  const theme = useTheme();
  const nestedTextChild = props.Answer.answers[0];
  const state = useSelector((state2) => {
    var _a;
    let own = state2.runState.values[props.Answer.qualifiedCode];
    let textChild = state2.runState.values[nestedTextChild.qualifiedCode];
    let show_errors = state2.runState.values.Survey.show_errors;
    let isChildDirty = state2.templateState[nestedTextChild.qualifiedCode];
    return {
      showAnswer: typeof (own == null ? void 0 : own.relevance) === "undefined" || own.relevance,
      childInvalid: (show_errors || isChildDirty) && (textChild == null ? void 0 : textChild.relevance) === true && (textChild == null ? void 0 : textChild.validity) === false,
      checked: (own == null ? void 0 : own.value) || false,
      textValue: (textChild == null ? void 0 : textChild.value) || "",
      textRelevance: (_a = state2.textChild) == null ? void 0 : _a.relevance
    };
  }, shallowEqual);
  const dispatch = useDispatch();
  const onButtonClick = (event) => {
    dispatch(
      valueChange({
        componentCode: event.target.name,
        value: event.target.checked
      })
    );
    dispatch(setDirty(event.target.name));
    dispatch(setDirty(props.parentCode));
    if (event.target.checked) {
      textInput.current.focus();
    }
  };
  const handleChange = (event) => {
    dispatch(
      valueChange({
        componentCode: event.target.name,
        value: event.target.value
      })
    );
  };
  const textInput = reactExports.useRef();
  const handleFocus = (event) => {
    dispatch(
      valueChange({ componentCode: props.Answer.qualifiedCode, value: true })
    );
  };
  const lostFocus = (event) => {
    dispatch(setDirty(event.target.name));
  };
  const showAnswer = () => {
    var _a;
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      FormControlLabel,
      {
        control: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Checkbox,
          {
            checked: state.checked,
            onChange: onButtonClick,
            name: props.Answer.qualifiedCode
          }
        ),
        label: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-100", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          TextField,
          {
            variant: "standard",
            required: state.textRelevance && ((_a = nestedTextChild.validation) == null ? void 0 : _a.required),
            inputRef: textInput,
            id: nestedTextChild.qualifiedCode,
            name: nestedTextChild.qualifiedCode,
            label: props.Answer.content.label,
            onChange: handleChange,
            onFocus: handleFocus,
            onBlur: lostFocus,
            value: state.textValue,
            InputProps: {
              sx: {
                fontFamily: theme.textStyles.text.font,
                color: theme.textStyles.text.color,
                fontSize: theme.textStyles.text.size
              }
            },
            helperText: state.childInvalid ? /* @__PURE__ */ jsxRuntimeExports.jsx(Validation, { component: nestedTextChild, limit: 1 }) : ""
          }
        ) })
      }
    );
  };
  return state.showAnswer ? showAnswer() : "";
}
function SCQArray(props) {
  const theme = useTheme$1();
  let columns = props.component.answers.filter(
    (answer) => answer.type == "column"
  );
  let rows = props.component.answers.filter((answer) => answer.type == "row");
  return /* @__PURE__ */ jsxRuntimeExports.jsx(TableContainer, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Table, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, {}, "content"),
      columns.map((option) => {
        return /* @__PURE__ */ jsxRuntimeExports.jsx(
          TableCell,
          {
            sx: {
              fontFamily: theme.textStyles.text.font,
              color: theme.textStyles.text.color,
              fontSize: theme.textStyles.text.size
            },
            children: option.content.label
          },
          option.qualifiedCode
        );
      })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(TableBody, { children: rows.map((answer) => {
      return /* @__PURE__ */ jsxRuntimeExports.jsx(React.Fragment, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        SCQArrayRow,
        {
          answer,
          choices: columns
        },
        answer.qualifiedCode
      ) }, answer.qualifiedCode);
    }) })
  ] }) });
}
function SCQArrayRow(props) {
  const theme = useTheme$1();
  const state = useSelector((state2) => {
    var _a, _b, _c;
    return {
      show_errors: state2.runState.values.Survey.show_errors,
      validity: (_a = state2.runState.values[props.answer.qualifiedCode]) == null ? void 0 : _a.validity,
      value: (_b = state2.runState.values[props.answer.qualifiedCode]) == null ? void 0 : _b.value,
      relevance: (_c = state2.runState.values[props.answer.qualifiedCode]) == null ? void 0 : _c.relevance
    };
  }, shallowEqual);
  const dispatch = useDispatch();
  const handleChange = (event) => {
    dispatch(
      valueChange({
        componentCode: event.target.name,
        value: event.target.value
      })
    );
  };
  const invalid = (state.show_errors || state.isDirty) && state.validity === false;
  return typeof state.relevance === "undefined" || state.relevance ? /* @__PURE__ */ jsxRuntimeExports.jsxs(React.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        TableCell,
        {
          sx: {
            fontFamily: theme.textStyles.text.font,
            color: theme.textStyles.text.color,
            fontSize: theme.textStyles.text.size,
            borderBottom: invalid ? "0" : "",
            padding: "8px"
          },
          children: props.answer.content.label
        }
      ),
      props.choices.map((option) => {
        return /* @__PURE__ */ jsxRuntimeExports.jsx(
          TableCell,
          {
            component: "th",
            scope: "row",
            sx: {
              borderBottom: invalid ? "0" : "",
              padding: "8px"
            },
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              Radio,
              {
                name: props.answer.qualifiedCode,
                onChange: handleChange,
                checked: state.value === option.code,
                value: option.code
              }
            )
          },
          option.code
        );
      })
    ] }, props.answer.code),
    invalid ? /* @__PURE__ */ jsxRuntimeExports.jsx(TableRow, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      TableCell,
      {
        sx: { padding: "8px" },
        colSpan: props.choices ? props.choices.length + 1 : 1,
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(Validation, { component: props.answer })
      }
    ) }) : ""
  ] }) : "";
}
const Input = styled("input")({
  display: "none"
});
function FileUpload(props) {
  const theme = useTheme();
  const state = useSelector((state2) => {
    let questionState = state2.runState.values[props.component.qualifiedCode];
    return questionState == null ? void 0 : questionState.value;
  });
  const dispatch = useDispatch();
  const [selectedFile, setSelectedFile] = reactExports.useState();
  const changeHandler = (event) => {
    setSelectedFile(event.target.files[0]);
  };
  const uploadSelectedFile = () => {
    uploadFile(props.component.qualifiedCode, selectedFile).then((response) => {
      resetSelectedFile();
      dispatch(
        valueChange({
          componentCode: props.component.qualifiedCode,
          value: response
        })
      );
    }).catch((err) => {
      console.error(err);
    });
  };
  const resetSelectedFile = () => {
    setSelectedFile(void 0);
  };
  let shouldUpload = selectedFile && (!props.component.validation || !props.component.validation.max_file_size || props.component.validation.max_file_size.max_size > selectedFile.size / 1e3);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { htmlFor: "contained-button-file", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Input,
        {
          id: "contained-button-file",
          type: "file",
          onChange: changeHandler
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "contained", component: "span", children: "Choose File" })
    ] }),
    !selectedFile ? "" : /* @__PURE__ */ jsxRuntimeExports.jsxs(React.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
        " ",
        selectedFile.name,
        " - ",
        Math.round(selectedFile.size / 1e3),
        "K"
      ] }),
      shouldUpload ? /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "text", onClick: uploadSelectedFile, children: "Upload" }) : "",
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Button,
        {
          sx: {
            fontFamily: theme.textStyles.text.font,
            fontSize: theme.textStyles.text.size
          },
          variant: "text",
          onClick: resetSelectedFile,
          children: "Cancel"
        }
      )
    ] }),
    !selectedFile || !props.component.validation || !props.component.validation.max_file_size || props.component.validation.max_file_size.max_size > selectedFile.size / 1e3 ? "" : /* @__PURE__ */ jsxRuntimeExports.jsxs(React.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        ValidationItem,
        {
          name: "max_file_size",
          validation: props.component.validation.max_file_size
        }
      )
    ] }),
    !state || !state.stored_filename ? "" : /* @__PURE__ */ jsxRuntimeExports.jsxs(React.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { target: "_blank", href: previewUrl(state.stored_filename), children: [
        state.filename,
        " - ",
        Math.round(state.size / 1e3),
        "K"
      ] })
    ] })
  ] });
}
const questionItem = "_questionItem_pxk6e_1";
const paragraph = "_paragraph_pxk6e_15";
const wordCount = "_wordCount_pxk6e_19";
const styles$a = {
  questionItem,
  paragraph,
  wordCount
};
function ParagraphQuestion(props) {
  var _a, _b;
  const state = useSelector((state2) => {
    let questionState = state2.runState.values[props.component.qualifiedCode];
    let show_errors = state2.runState.values.Survey.show_errors;
    let isDirty = state2.templateState[props.component.qualifiedCode];
    let validity = questionState == null ? void 0 : questionState.validity;
    let invalid = (show_errors || isDirty) && validity === false;
    let value = (questionState == null ? void 0 : questionState.value) || "";
    return {
      value,
      wordCount: window.FrankieScripts ? window.FrankieScripts.wordCount(value) : 0,
      invalid
    };
  }, shallowEqual);
  const dispatch = useDispatch();
  const { t } = useTranslation("run");
  const handleChange = (event) => {
    dispatch(
      valueChange({
        componentCode: event.target.name,
        value: event.target.value
      })
    );
  };
  const lostFocus = (event) => {
    dispatch(setDirty(event.target.name));
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: styles$a.questionItem, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      TextareaAutosize,
      {
        className: styles$a.paragraph,
        required: ((_b = (_a = props.component.validation) == null ? void 0 : _a.validation_required) == null ? void 0 : _b.isActive) ? true : false,
        id: props.component.qualifiedCode,
        name: props.component.qualifiedCode,
        minRows: props.component.minRows || 2,
        label: props.component.content.hint || "",
        onChange: handleChange,
        onBlur: lostFocus,
        value: state.value
      }
    ),
    props.component.showWordCount ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: styles$a.wordCount, children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t("word_count", { count: state.wordCount }) }) }) : ""
  ] });
}
const quill_core = "";
const content$1 = "";
function Content(props) {
  const isComplex = props.content && props.content.search(/data-instruction/) >= 0;
  const state = useSelector((state2) => {
    if (!props.content || !isComplex || !state2.runState.values[props.elementCode] || !props.name || !props.lang) {
      return void 0;
    } else {
      return state2.runState.values[props.elementCode][`reference_${props.name}_${props.lang}`];
    }
  });
  const lang = useSelector((state2) => {
    return state2.runState.values["Survey"].lang;
  });
  const isRtl = rtlLanguage.includes(lang);
  if (!props.content) {
    return "";
  } else if (!isComplex) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: `${isRtl ? "rtl" : "ltr"} ql-editor no-padding`,
        dangerouslySetInnerHTML: { __html: props.content }
      }
    );
  } else {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: `${isRtl ? "rtl" : "ltr"} ql-editor no-padding`,
        dangerouslySetInnerHTML: {
          __html: replaceMentions(props.content, state)
        }
      }
    );
  }
}
function replaceMentions(html, referenceValue) {
  let doc = document.createElement("div");
  doc.innerHTML = html;
  doc.querySelectorAll("span[data-instruction]").forEach(function(el) {
    let attribute = el.getAttribute("data-instruction");
    if (attribute && referenceValue) {
      let attrArray = attribute.split(".");
      if (attrArray && attrArray.length == 2 && referenceValue[attrArray[0]] && referenceValue[attrArray[0]][attrArray[1]]) {
        el.replaceWith(referenceValue[attrArray[0]][attrArray[1]]);
      } else {
        el.replaceWith("");
      }
    } else {
      el.replaceWith("");
    }
  });
  return doc.innerHTML;
}
const wrapper = "_wrapper_2goe7_1";
const styles$9 = {
  wrapper
};
function DateTimeQuestion(props) {
  const theme = useTheme$2();
  const state = useSelector((state2) => {
    let own = state2.runState.values[props.component.qualifiedCode];
    let show_errors = state2.runState.values.Survey.show_errors;
    let isDirty = state2.templateState[props.component.qualifiedCode];
    return {
      invalid: (show_errors || isDirty) && (own == null ? void 0 : own.validity) === false,
      value: (own == null ? void 0 : own.value) ? dayjs(window.FrankieScripts.sqlDateTimeToDate(own == null ? void 0 : own.value)) : null
    };
  }, shallowEqual);
  const dispatch = useDispatch();
  const handleDateChange = (date) => {
    let finalDate = date === null ? void 0 : date.toDate();
    dispatch(
      valueChange({
        componentCode: props.component.qualifiedCode,
        value: props.component.type == "date_time" ? window.FrankieScripts.toSqlDateTime(finalDate) : props.component.type == "time" ? window.FrankieScripts.toSqlDateTimeIgnoreDate(finalDate) : window.FrankieScripts.toSqlDateTimeIgnoreTime(finalDate)
      })
    );
  };
  const dateFormat = props.component.dateFormat ? props.component.dateFormat : "DD.MM.YYYY";
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: styles$9.wrapper, children: /* @__PURE__ */ jsxRuntimeExports.jsx(LocalizationProvider, { dateAdapter: AdapterDayjs, adapterLocale: "ar-sa", children: props.component.type == "date_time" ? /* @__PURE__ */ jsxRuntimeExports.jsx(
    DateTimePicker,
    {
      renderInput: (props2) => /* @__PURE__ */ jsxRuntimeExports.jsx(TextField, { onKeyDown: (e) => e.preventDefault(), ...props2 }),
      margin: "normal",
      value: state.value,
      inputFormat: dateFormat + " " + (props.component.fullDayFormat ? "HH:mm" : "hh:mm A"),
      ampm: props.component.fullDayFormat ? false : true,
      openTo: "year",
      views: ["year", "month", "day", "hours", "minutes"],
      id: props.component.qualifiedCode,
      minDate: props.component.minDate ? dayjs(
        window.FrankieScripts.dateStringToDate(
          props.component.minDate
        )
      ) : void 0,
      maxDate: props.component.maxDate ? dayjs(
        window.FrankieScripts.dateStringToDate(
          props.component.maxDate
        )
      ) : void 0,
      error: state.invalid,
      onChange: handleDateChange,
      InputProps: {
        sx: {
          fontFamily: theme.textStyles.text.font,
          fontSize: theme.textStyles.text.size,
          color: theme.textStyles.text.color
        }
      }
    }
  ) : props.component.type == "time" ? /* @__PURE__ */ jsxRuntimeExports.jsx(
    TimePicker,
    {
      renderInput: (params) => /* @__PURE__ */ jsxRuntimeExports.jsx(TextField, { onKeyDown: (e) => e.preventDefault(), ...params }),
      margin: "normal",
      openTo: "hours",
      views: ["hours", "minutes"],
      ampm: props.component.fullDayFormat ? false : true,
      inputFormat: props.component.fullDayFormat ? "HH:mm" : "hh:mm A",
      id: props.component.qualifiedCode,
      value: state.value,
      error: state.invalid,
      onChange: handleDateChange,
      InputProps: {
        sx: {
          fontFamily: theme.textStyles.text.font,
          color: theme.textStyles.text.color,
          fontSize: theme.textStyles.text.size
        }
      }
    }
  ) : /* @__PURE__ */ jsxRuntimeExports.jsx(
    DatePicker,
    {
      renderInput: (params) => /* @__PURE__ */ jsxRuntimeExports.jsx(TextField, { onKeyDown: (e) => e.preventDefault(), ...params }),
      margin: "normal",
      openTo: "year",
      views: ["year", "month", "day"],
      ampm: props.component.fullDayFormat ? false : true,
      id: props.component.qualifiedCode,
      inputFormat: dateFormat,
      value: state.value,
      minDate: props.component.minDate ? window.FrankieScripts.dateStringToDate(
        props.component.minDate
      ) : void 0,
      maxDate: props.component.maxDate ? window.FrankieScripts.dateStringToDate(
        props.component.maxDate
      ) : void 0,
      error: state.invalid,
      onChange: handleDateChange,
      InputProps: {
        sx: {
          fontFamily: theme.textStyles.text.font,
          fontSize: theme.textStyles.text.size
        }
      }
    }
  ) }) });
}
const content = "_content_vh4hz_1";
const question = "_question_vh4hz_8";
const required = "_required_vh4hz_12";
const header = "_header_vh4hz_16";
const textDescription$1 = "_textDescription_vh4hz_20";
const groupQuestion = "_groupQuestion_vh4hz_25";
const styles$8 = {
  content,
  question,
  required,
  header,
  textDescription: textDescription$1,
  groupQuestion
};
const imageContainer$2 = "_imageContainer_mdpfi_1";
const imageGrid$2 = "_imageGrid_mdpfi_7";
const selection$1 = "_selection_mdpfi_11";
const styles$7 = {
  imageContainer: imageContainer$2,
  imageGrid: imageGrid$2,
  selection: selection$1
};
function ImageScq(props) {
  const theme = useTheme$1();
  const containerRef = reactExports.useRef(null);
  const [width, setWidth] = reactExports.useState(800);
  reactExports.useEffect(() => {
    var _a;
    setWidth((_a = containerRef == null ? void 0 : containerRef.current) == null ? void 0 : _a.offsetWidth);
  }, [containerRef]);
  const imageHeight = (width - props.component.columns * props.component.spacing * 2) / props.component.columns / (props.component.imageAspectRatio || 1);
  const state = useSelector((state2) => {
    let questionState = state2.runState.values[props.component.qualifiedCode];
    let show_errors = state2.runState.values.Survey.show_errors;
    let isDirty = state2.templateState[props.component.qualifiedCode];
    return {
      value: (questionState == null ? void 0 : questionState.value) || "",
      showValidation: (show_errors || isDirty) && (questionState == null ? void 0 : questionState.validity) === false
    };
  }, shallowEqual);
  const dispatch = useDispatch();
  const handleChange = (componentCode, value) => {
    dispatch(valueChange({ componentCode, value }));
  };
  reactExports.useEffect(() => {
    const resizeListener = () => {
      var _a;
      setWidth((_a = containerRef == null ? void 0 : containerRef.current) == null ? void 0 : _a.offsetWidth);
    };
    window.addEventListener("resize", resizeListener);
    return () => {
      window.removeEventListener("resize", resizeListener);
    };
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Grid, { ref: containerRef, container: true, className: styles$7.imageGrid, children: props.component.answers.map((option) => {
    var _a, _b;
    const backgroundImage = ((_a = option.resources) == null ? void 0 : _a.image) ? `url('${buildResourceUrl((_b = option.resources) == null ? void 0 : _b.image)}')` : "0";
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(Grid, { item: true, xs: 12 / props.component.columns, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Card,
        {
          className: styles$7.imageContainer,
          onClick: () => handleChange(props.component.qualifiedCode, option.code),
          style: {
            backgroundImage,
            backgroundColor: theme.palette.background.default,
            margin: props.component.spacing + "px",
            height: imageHeight + "px",
            border: state.value === option.code ? `2px solid ${theme.palette.primary.main}` : "2px solid transparent"
          },
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            Radio,
            {
              className: styles$7.selection,
              checked: state.value === option.code,
              onChange: (event) => handleChange(event.target.name, event.target.value),
              value: option.code,
              name: props.component.qualifiedCode
            }
          )
        }
      ),
      !props.component.hideText && /* @__PURE__ */ jsxRuntimeExports.jsx(
        Box$2,
        {
          sx: {
            fontFamily: theme.textStyles.text.font,
            color: theme.textStyles.text.color,
            fontSize: theme.textStyles.text.size
          },
          children: option.content.label
        }
      )
    ] }, option.code);
  }) });
}
const imageGrid$1 = "_imageGrid_1uvun_1";
const imageContainer$1 = "_imageContainer_1uvun_5";
const selection = "_selection_1uvun_11";
const styles$6 = {
  imageGrid: imageGrid$1,
  imageContainer: imageContainer$1,
  selection
};
function ImageMcq(props) {
  const containerRef = reactExports.useRef(null);
  const [width, setWidth] = reactExports.useState(800);
  reactExports.useEffect(() => {
    var _a;
    setWidth((_a = containerRef == null ? void 0 : containerRef.current) == null ? void 0 : _a.offsetWidth);
  }, [containerRef]);
  const imageHeight = (width - props.component.columns * props.component.spacing * 2) / props.component.columns / (props.component.imageAspectRatio || 1);
  reactExports.useEffect(() => {
    const resizeListener = () => {
      var _a;
      setWidth((_a = containerRef == null ? void 0 : containerRef.current) == null ? void 0 : _a.offsetWidth);
    };
    window.addEventListener("resize", resizeListener);
    return () => {
      window.removeEventListener("resize", resizeListener);
    };
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Grid, { ref: containerRef, container: true, className: styles$6.imageGrid, children: props.component.answers.map((option) => {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      ImageMcqItem,
      {
        option,
        spacing: props.component.spacing,
        columns: props.component.columns,
        hideText: props.component.hideText,
        parentCode: props.component.qualifiedCode,
        imageHeight
      },
      option.qualifiedCode
    );
  }) });
}
function ImageMcqItem(props) {
  var _a, _b;
  const theme = useTheme$1();
  const state = useSelector((state2) => {
    let answerState = state2.runState.values[props.option.qualifiedCode];
    return {
      showAnswer: typeof (answerState == null ? void 0 : answerState.relevance) == "undefined" || answerState.relevance,
      checked: (answerState == null ? void 0 : answerState.value) || false
    };
  }, shallowEqual);
  const dispatch = useDispatch();
  const handleChange = (componentCode, value) => {
    dispatch(valueChange({ componentCode, value }));
    dispatch(setDirty(componentCode));
    dispatch(setDirty(props.parentCode));
  };
  const backgroundImage = ((_a = props.option.resources) == null ? void 0 : _a.image) ? `url('${buildResourceUrl((_b = props.option.resources) == null ? void 0 : _b.image)}')` : "0";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Grid, { item: true, xs: 12 / props.columns, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Card,
      {
        className: styles$6.imageContainer,
        onClick: () => handleChange(props.option.qualifiedCode, !state.checked),
        style: {
          backgroundImage,
          backgroundColor: theme.palette.background.default,
          margin: props.spacing + "px",
          height: props.imageHeight + "px",
          border: state.checked ? `2px solid ${theme.palette.primary.main}` : "2px solid transparent"
        },
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Checkbox,
          {
            className: styles$6.selection,
            onChange: (event) => handleChange(props.option.qualifiedCode, !state.checked),
            checked: state.checked
          }
        )
      }
    ),
    !props.hideText && /* @__PURE__ */ jsxRuntimeExports.jsx(
      Box$2,
      {
        sx: {
          fontFamily: theme.textStyles.text.font,
          color: theme.textStyles.text.color,
          fontSize: theme.textStyles.text.size
        },
        children: props.option.content.label
      }
    )
  ] }, props.option.code);
}
const dragContainer = "_dragContainer_spv9x_1";
const rankingItem = "_rankingItem_spv9x_8";
const styles$5 = {
  dragContainer,
  rankingItem
};
function Ranking(props) {
  const dispatch = useDispatch();
  const state = useSelector((state2) => {
    let valuesMap = {};
    props.component.answers.forEach((element) => {
      valuesMap[element.qualifiedCode] = state2.runState.values[element.qualifiedCode].value;
    });
    return valuesMap;
  }, shallowEqual);
  const order = useSelector((state2) => {
    let valuesMap = {};
    props.component.answers.forEach((element) => {
      if (state2.runState.order) {
        valuesMap[element.qualifiedCode] = state2.runState.order[element.qualifiedCode];
      } else {
        valuesMap[element.qualifiedCode] = state2.runState.values[element.qualifiedCode].order + 1;
      }
    });
    return valuesMap;
  }, shallowEqual);
  const maxIndex = (indexObj) => {
    let max = 0;
    let keys = Object.keys(indexObj);
    keys.forEach((key) => {
      if (indexObj[key] > max) {
        max = indexObj[key];
      }
    });
    return max;
  };
  const onDoubleclick = (draggableId, droppableIteemId, index) => {
    onDropEvent({
      draggableId,
      source: {
        droppableId: droppableIteemId,
        index
      },
      destination: {
        droppableId: droppableIteemId == "source" ? "answer" : "source",
        index: droppableIteemId == "source" ? maxIndex(state) : maxIndex(order)
      }
    });
  };
  const onDropEvent = (event) => {
    let unOrderer = { ...order };
    if (!event.destination) {
      return;
    } else if (event.destination.droppableId == "answer" && event.source.droppableId == "source") {
      props.component.answers.forEach((answer) => {
        if (answer.qualifiedCode == event.draggableId) {
          unOrderer[answer.qualifiedCode] = void 0;
          dispatch(
            valueChange({
              componentCode: event.draggableId,
              value: event.destination.index + 1
            })
          );
        } else if (+state[answer.qualifiedCode] >= event.destination.index + 1) {
          dispatch(
            valueChange({
              componentCode: answer.qualifiedCode,
              value: state[answer.qualifiedCode] + 1
            })
          );
        } else if (+order[answer.qualifiedCode] >= event.source.index + 1) {
          unOrderer[answer.qualifiedCode] = unOrderer[answer.qualifiedCode] - 1;
        }
      });
    } else if (event.destination.droppableId == "answer" && event.source.droppableId == "answer") {
      props.component.answers.forEach((answer) => {
        if (answer.qualifiedCode == event.draggableId) {
          dispatch(
            valueChange({
              componentCode: event.draggableId,
              value: event.destination.index + 1
            })
          );
        } else if (+state[answer.qualifiedCode] > event.source.index + 1 && +state[answer.qualifiedCode] <= event.destination.index + 1) {
          dispatch(
            valueChange({
              componentCode: answer.qualifiedCode,
              value: state[answer.qualifiedCode] - 1
            })
          );
        } else if (+state[answer.qualifiedCode] < event.source.index + 1 && +state[answer.qualifiedCode] >= event.destination.index + 1) {
          dispatch(
            valueChange({
              componentCode: answer.qualifiedCode,
              value: state[answer.qualifiedCode] + 1
            })
          );
        }
      });
    } else if (event.destination.droppableId == "source" && event.source.droppableId == "answer") {
      props.component.answers.forEach((answer) => {
        if (answer.qualifiedCode == event.draggableId) {
          unOrderer[answer.qualifiedCode] = event.destination.index + 1;
          dispatch(
            valueChange({ componentCode: event.draggableId, value: void 0 })
          );
        } else if (+state[answer.qualifiedCode] > event.source.index + 1) {
          dispatch(
            valueChange({
              componentCode: answer.qualifiedCode,
              value: state[answer.qualifiedCode] - 1
            })
          );
        } else if (+order[answer.qualifiedCode] >= event.destination.index + 1) {
          unOrderer[answer.qualifiedCode] = unOrderer[answer.qualifiedCode] + 1;
        }
      });
    } else if (event.destination.droppableId == "source" && event.source.droppableId == "source") {
      props.component.answers.forEach((answer) => {
        if (answer.qualifiedCode == event.draggableId) {
          unOrderer[answer.qualifiedCode] = event.destination.index + 1;
        } else if (+order[answer.qualifiedCode] > event.source.index + 1 && +order[answer.qualifiedCode] <= event.destination.index + 1) {
          unOrderer[answer.qualifiedCode] = unOrderer[answer.qualifiedCode] - 1;
        } else if (+order[answer.qualifiedCode] < event.source.index + 1 && +order[answer.qualifiedCode] >= event.destination.index + 1) {
          unOrderer[answer.qualifiedCode] = unOrderer[answer.qualifiedCode] + 1;
        }
      });
    }
    dispatch(orderChange(unOrderer));
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      style: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr"
      },
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        DragDropContext,
        {
          onDragEnd: (event) => {
            onDropEvent(event);
          },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              ConnectedDroppable,
              {
                droppableId: "source",
                type: "ranking" + props.component.qualifiedCode,
                children: (provided) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Box$1,
                  {
                    className: styles$5.dragContainer,
                    sx: { backgroundColor: "background.default" },
                    ref: provided.innerRef,
                    ...provided.droppableProps,
                    children: [
                      props.component.answers.filter((option) => !state[option.qualifiedCode]).sort(function(a, b) {
                        return order[a.qualifiedCode] - order[b.qualifiedCode];
                      }).map((option, index) => {
                        return /* @__PURE__ */ jsxRuntimeExports.jsx(
                          PublicDraggable,
                          {
                            draggableId: option.qualifiedCode,
                            index,
                            children: (provided2) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                              Box$1,
                              {
                                onDoubleClick: () => onDoubleclick(option.qualifiedCode, "source", index),
                                className: styles$5.rankingItem,
                                sx: { backgroundColor: "background.paper" },
                                ref: provided2.innerRef,
                                ...provided2.draggableProps,
                                ...provided2.dragHandleProps,
                                children: option.content.label
                              }
                            )
                          },
                          option.qualifiedCode
                        );
                      }),
                      provided.placeholder
                    ]
                  }
                )
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              ConnectedDroppable,
              {
                droppableId: "answer",
                type: "ranking" + props.component.qualifiedCode,
                children: (provided) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Box$1,
                  {
                    ref: provided.innerRef,
                    ...provided.droppableProps,
                    className: styles$5.dragContainer,
                    sx: { backgroundColor: "background.default" },
                    children: [
                      props.component.answers.filter((option) => +state[option.qualifiedCode] > 0).sort(function(a, b) {
                        return state[a.qualifiedCode] - state[b.qualifiedCode];
                      }).map((option, index) => {
                        return /* @__PURE__ */ jsxRuntimeExports.jsx(
                          PublicDraggable,
                          {
                            draggableId: option.qualifiedCode,
                            index,
                            children: (provided2) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                              Box$1,
                              {
                                onDoubleClick: () => onDoubleclick(option.qualifiedCode, "answer", index),
                                className: styles$5.rankingItem,
                                sx: { backgroundColor: "background.paper" },
                                ref: provided2.innerRef,
                                ...provided2.draggableProps,
                                ...provided2.dragHandleProps,
                                children: option.content.label
                              }
                            )
                          },
                          option.qualifiedCode
                        );
                      }),
                      provided.placeholder
                    ]
                  }
                )
              }
            )
          ]
        }
      )
    }
  );
}
var build$1 = { exports: {} };
/*!
 * Signature Pad v2.3.2
 * https://github.com/szimek/signature_pad
 *
 * Copyright 2017 Szymon Nowak
 * Released under the MIT license
 *
 * The main idea and some parts of the code (e.g. drawing variable width Bézier curve) are taken from:
 * http://corner.squareup.com/2012/07/smoother-signatures.html
 *
 * Implementation of interpolation using cubic Bézier curves is taken from:
 * http://benknowscode.wordpress.com/2012/09/14/path-interpolation-using-cubic-bezier-and-control-point-estimation-in-javascript
 *
 * Algorithm for approximated length of a Bézier curve is taken from:
 * http://www.lemoda.net/maths/bezier-length/index.html
 *
 */
function Point(x, y, time) {
  this.x = x;
  this.y = y;
  this.time = time || (/* @__PURE__ */ new Date()).getTime();
}
Point.prototype.velocityFrom = function(start) {
  return this.time !== start.time ? this.distanceTo(start) / (this.time - start.time) : 1;
};
Point.prototype.distanceTo = function(start) {
  return Math.sqrt(Math.pow(this.x - start.x, 2) + Math.pow(this.y - start.y, 2));
};
Point.prototype.equals = function(other) {
  return this.x === other.x && this.y === other.y && this.time === other.time;
};
function Bezier(startPoint, control1, control2, endPoint) {
  this.startPoint = startPoint;
  this.control1 = control1;
  this.control2 = control2;
  this.endPoint = endPoint;
}
Bezier.prototype.length = function() {
  var steps = 10;
  var length = 0;
  var px = void 0;
  var py = void 0;
  for (var i = 0; i <= steps; i += 1) {
    var t = i / steps;
    var cx = this._point(t, this.startPoint.x, this.control1.x, this.control2.x, this.endPoint.x);
    var cy = this._point(t, this.startPoint.y, this.control1.y, this.control2.y, this.endPoint.y);
    if (i > 0) {
      var xdiff = cx - px;
      var ydiff = cy - py;
      length += Math.sqrt(xdiff * xdiff + ydiff * ydiff);
    }
    px = cx;
    py = cy;
  }
  return length;
};
Bezier.prototype._point = function(t, start, c1, c2, end) {
  return start * (1 - t) * (1 - t) * (1 - t) + 3 * c1 * (1 - t) * (1 - t) * t + 3 * c2 * (1 - t) * t * t + end * t * t * t;
};
function throttle(func, wait, options) {
  var context, args, result;
  var timeout = null;
  var previous = 0;
  if (!options)
    options = {};
  var later = function later2() {
    previous = options.leading === false ? 0 : Date.now();
    timeout = null;
    result = func.apply(context, args);
    if (!timeout)
      context = args = null;
  };
  return function() {
    var now = Date.now();
    if (!previous && options.leading === false)
      previous = now;
    var remaining = wait - (now - previous);
    context = this;
    args = arguments;
    if (remaining <= 0 || remaining > wait) {
      if (timeout) {
        clearTimeout(timeout);
        timeout = null;
      }
      previous = now;
      result = func.apply(context, args);
      if (!timeout)
        context = args = null;
    } else if (!timeout && options.trailing !== false) {
      timeout = setTimeout(later, remaining);
    }
    return result;
  };
}
function SignaturePad(canvas, options) {
  var self = this;
  var opts = options || {};
  this.velocityFilterWeight = opts.velocityFilterWeight || 0.7;
  this.minWidth = opts.minWidth || 0.5;
  this.maxWidth = opts.maxWidth || 2.5;
  this.throttle = "throttle" in opts ? opts.throttle : 16;
  this.minDistance = "minDistance" in opts ? opts.minDistance : 5;
  if (this.throttle) {
    this._strokeMoveUpdate = throttle(SignaturePad.prototype._strokeUpdate, this.throttle);
  } else {
    this._strokeMoveUpdate = SignaturePad.prototype._strokeUpdate;
  }
  this.dotSize = opts.dotSize || function() {
    return (this.minWidth + this.maxWidth) / 2;
  };
  this.penColor = opts.penColor || "black";
  this.backgroundColor = opts.backgroundColor || "rgba(0,0,0,0)";
  this.onBegin = opts.onBegin;
  this.onEnd = opts.onEnd;
  this._canvas = canvas;
  this._ctx = canvas.getContext("2d");
  this.clear();
  this._handleMouseDown = function(event) {
    if (event.which === 1) {
      self._mouseButtonDown = true;
      self._strokeBegin(event);
    }
  };
  this._handleMouseMove = function(event) {
    if (self._mouseButtonDown) {
      self._strokeMoveUpdate(event);
    }
  };
  this._handleMouseUp = function(event) {
    if (event.which === 1 && self._mouseButtonDown) {
      self._mouseButtonDown = false;
      self._strokeEnd(event);
    }
  };
  this._handleTouchStart = function(event) {
    if (event.targetTouches.length === 1) {
      var touch = event.changedTouches[0];
      self._strokeBegin(touch);
    }
  };
  this._handleTouchMove = function(event) {
    event.preventDefault();
    var touch = event.targetTouches[0];
    self._strokeMoveUpdate(touch);
  };
  this._handleTouchEnd = function(event) {
    var wasCanvasTouched = event.target === self._canvas;
    if (wasCanvasTouched) {
      event.preventDefault();
      self._strokeEnd(event);
    }
  };
  this.on();
}
SignaturePad.prototype.clear = function() {
  var ctx = this._ctx;
  var canvas = this._canvas;
  ctx.fillStyle = this.backgroundColor;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  this._data = [];
  this._reset();
  this._isEmpty = true;
};
SignaturePad.prototype.fromDataURL = function(dataUrl) {
  var _this = this;
  var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  var image = new Image();
  var ratio = options.ratio || window.devicePixelRatio || 1;
  var width = options.width || this._canvas.width / ratio;
  var height = options.height || this._canvas.height / ratio;
  this._reset();
  image.src = dataUrl;
  image.onload = function() {
    _this._ctx.drawImage(image, 0, 0, width, height);
  };
  this._isEmpty = false;
};
SignaturePad.prototype.toDataURL = function(type) {
  var _canvas;
  switch (type) {
    case "image/svg+xml":
      return this._toSVG();
    default:
      for (var _len = arguments.length, options = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        options[_key - 1] = arguments[_key];
      }
      return (_canvas = this._canvas).toDataURL.apply(_canvas, [type].concat(options));
  }
};
SignaturePad.prototype.on = function() {
  this._handleMouseEvents();
  this._handleTouchEvents();
};
SignaturePad.prototype.off = function() {
  this._canvas.removeEventListener("mousedown", this._handleMouseDown);
  this._canvas.removeEventListener("mousemove", this._handleMouseMove);
  document.removeEventListener("mouseup", this._handleMouseUp);
  this._canvas.removeEventListener("touchstart", this._handleTouchStart);
  this._canvas.removeEventListener("touchmove", this._handleTouchMove);
  this._canvas.removeEventListener("touchend", this._handleTouchEnd);
};
SignaturePad.prototype.isEmpty = function() {
  return this._isEmpty;
};
SignaturePad.prototype._strokeBegin = function(event) {
  this._data.push([]);
  this._reset();
  this._strokeUpdate(event);
  if (typeof this.onBegin === "function") {
    this.onBegin(event);
  }
};
SignaturePad.prototype._strokeUpdate = function(event) {
  var x = event.clientX;
  var y = event.clientY;
  var point = this._createPoint(x, y);
  var lastPointGroup = this._data[this._data.length - 1];
  var lastPoint = lastPointGroup && lastPointGroup[lastPointGroup.length - 1];
  var isLastPointTooClose = lastPoint && point.distanceTo(lastPoint) < this.minDistance;
  if (!(lastPoint && isLastPointTooClose)) {
    var _addPoint = this._addPoint(point), curve = _addPoint.curve, widths = _addPoint.widths;
    if (curve && widths) {
      this._drawCurve(curve, widths.start, widths.end);
    }
    this._data[this._data.length - 1].push({
      x: point.x,
      y: point.y,
      time: point.time,
      color: this.penColor
    });
  }
};
SignaturePad.prototype._strokeEnd = function(event) {
  var canDrawCurve = this.points.length > 2;
  var point = this.points[0];
  if (!canDrawCurve && point) {
    this._drawDot(point);
  }
  if (point) {
    var lastPointGroup = this._data[this._data.length - 1];
    var lastPoint = lastPointGroup[lastPointGroup.length - 1];
    if (!point.equals(lastPoint)) {
      lastPointGroup.push({
        x: point.x,
        y: point.y,
        time: point.time,
        color: this.penColor
      });
    }
  }
  if (typeof this.onEnd === "function") {
    this.onEnd(event);
  }
};
SignaturePad.prototype._handleMouseEvents = function() {
  this._mouseButtonDown = false;
  this._canvas.addEventListener("mousedown", this._handleMouseDown);
  this._canvas.addEventListener("mousemove", this._handleMouseMove);
  document.addEventListener("mouseup", this._handleMouseUp);
};
SignaturePad.prototype._handleTouchEvents = function() {
  this._canvas.style.msTouchAction = "none";
  this._canvas.style.touchAction = "none";
  this._canvas.addEventListener("touchstart", this._handleTouchStart);
  this._canvas.addEventListener("touchmove", this._handleTouchMove);
  this._canvas.addEventListener("touchend", this._handleTouchEnd);
};
SignaturePad.prototype._reset = function() {
  this.points = [];
  this._lastVelocity = 0;
  this._lastWidth = (this.minWidth + this.maxWidth) / 2;
  this._ctx.fillStyle = this.penColor;
};
SignaturePad.prototype._createPoint = function(x, y, time) {
  var rect = this._canvas.getBoundingClientRect();
  return new Point(x - rect.left, y - rect.top, time || (/* @__PURE__ */ new Date()).getTime());
};
SignaturePad.prototype._addPoint = function(point) {
  var points = this.points;
  var tmp = void 0;
  points.push(point);
  if (points.length > 2) {
    if (points.length === 3)
      points.unshift(points[0]);
    tmp = this._calculateCurveControlPoints(points[0], points[1], points[2]);
    var c2 = tmp.c2;
    tmp = this._calculateCurveControlPoints(points[1], points[2], points[3]);
    var c3 = tmp.c1;
    var curve = new Bezier(points[1], c2, c3, points[2]);
    var widths = this._calculateCurveWidths(curve);
    points.shift();
    return { curve, widths };
  }
  return {};
};
SignaturePad.prototype._calculateCurveControlPoints = function(s1, s2, s3) {
  var dx1 = s1.x - s2.x;
  var dy1 = s1.y - s2.y;
  var dx2 = s2.x - s3.x;
  var dy2 = s2.y - s3.y;
  var m1 = { x: (s1.x + s2.x) / 2, y: (s1.y + s2.y) / 2 };
  var m2 = { x: (s2.x + s3.x) / 2, y: (s2.y + s3.y) / 2 };
  var l1 = Math.sqrt(dx1 * dx1 + dy1 * dy1);
  var l2 = Math.sqrt(dx2 * dx2 + dy2 * dy2);
  var dxm = m1.x - m2.x;
  var dym = m1.y - m2.y;
  var k = l2 / (l1 + l2);
  var cm = { x: m2.x + dxm * k, y: m2.y + dym * k };
  var tx = s2.x - cm.x;
  var ty = s2.y - cm.y;
  return {
    c1: new Point(m1.x + tx, m1.y + ty),
    c2: new Point(m2.x + tx, m2.y + ty)
  };
};
SignaturePad.prototype._calculateCurveWidths = function(curve) {
  var startPoint = curve.startPoint;
  var endPoint = curve.endPoint;
  var widths = { start: null, end: null };
  var velocity = this.velocityFilterWeight * endPoint.velocityFrom(startPoint) + (1 - this.velocityFilterWeight) * this._lastVelocity;
  var newWidth = this._strokeWidth(velocity);
  widths.start = this._lastWidth;
  widths.end = newWidth;
  this._lastVelocity = velocity;
  this._lastWidth = newWidth;
  return widths;
};
SignaturePad.prototype._strokeWidth = function(velocity) {
  return Math.max(this.maxWidth / (velocity + 1), this.minWidth);
};
SignaturePad.prototype._drawPoint = function(x, y, size) {
  var ctx = this._ctx;
  ctx.moveTo(x, y);
  ctx.arc(x, y, size, 0, 2 * Math.PI, false);
  this._isEmpty = false;
};
SignaturePad.prototype._drawCurve = function(curve, startWidth, endWidth) {
  var ctx = this._ctx;
  var widthDelta = endWidth - startWidth;
  var drawSteps = Math.floor(curve.length());
  ctx.beginPath();
  for (var i = 0; i < drawSteps; i += 1) {
    var t = i / drawSteps;
    var tt = t * t;
    var ttt = tt * t;
    var u = 1 - t;
    var uu = u * u;
    var uuu = uu * u;
    var x = uuu * curve.startPoint.x;
    x += 3 * uu * t * curve.control1.x;
    x += 3 * u * tt * curve.control2.x;
    x += ttt * curve.endPoint.x;
    var y = uuu * curve.startPoint.y;
    y += 3 * uu * t * curve.control1.y;
    y += 3 * u * tt * curve.control2.y;
    y += ttt * curve.endPoint.y;
    var width = startWidth + ttt * widthDelta;
    this._drawPoint(x, y, width);
  }
  ctx.closePath();
  ctx.fill();
};
SignaturePad.prototype._drawDot = function(point) {
  var ctx = this._ctx;
  var width = typeof this.dotSize === "function" ? this.dotSize() : this.dotSize;
  ctx.beginPath();
  this._drawPoint(point.x, point.y, width);
  ctx.closePath();
  ctx.fill();
};
SignaturePad.prototype._fromData = function(pointGroups, drawCurve, drawDot) {
  for (var i = 0; i < pointGroups.length; i += 1) {
    var group = pointGroups[i];
    if (group.length > 1) {
      for (var j = 0; j < group.length; j += 1) {
        var rawPoint = group[j];
        var point = new Point(rawPoint.x, rawPoint.y, rawPoint.time);
        var color = rawPoint.color;
        if (j === 0) {
          this.penColor = color;
          this._reset();
          this._addPoint(point);
        } else if (j !== group.length - 1) {
          var _addPoint2 = this._addPoint(point), curve = _addPoint2.curve, widths = _addPoint2.widths;
          if (curve && widths) {
            drawCurve(curve, widths, color);
          }
        } else
          ;
      }
    } else {
      this._reset();
      var _rawPoint = group[0];
      drawDot(_rawPoint);
    }
  }
};
SignaturePad.prototype._toSVG = function() {
  var _this2 = this;
  var pointGroups = this._data;
  var canvas = this._canvas;
  var ratio = Math.max(window.devicePixelRatio || 1, 1);
  var minX = 0;
  var minY = 0;
  var maxX = canvas.width / ratio;
  var maxY = canvas.height / ratio;
  var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttributeNS(null, "width", canvas.width);
  svg.setAttributeNS(null, "height", canvas.height);
  this._fromData(pointGroups, function(curve, widths, color) {
    var path = document.createElement("path");
    if (!isNaN(curve.control1.x) && !isNaN(curve.control1.y) && !isNaN(curve.control2.x) && !isNaN(curve.control2.y)) {
      var attr = "M " + curve.startPoint.x.toFixed(3) + "," + curve.startPoint.y.toFixed(3) + " " + ("C " + curve.control1.x.toFixed(3) + "," + curve.control1.y.toFixed(3) + " ") + (curve.control2.x.toFixed(3) + "," + curve.control2.y.toFixed(3) + " ") + (curve.endPoint.x.toFixed(3) + "," + curve.endPoint.y.toFixed(3));
      path.setAttribute("d", attr);
      path.setAttribute("stroke-width", (widths.end * 2.25).toFixed(3));
      path.setAttribute("stroke", color);
      path.setAttribute("fill", "none");
      path.setAttribute("stroke-linecap", "round");
      svg.appendChild(path);
    }
  }, function(rawPoint) {
    var circle = document.createElement("circle");
    var dotSize = typeof _this2.dotSize === "function" ? _this2.dotSize() : _this2.dotSize;
    circle.setAttribute("r", dotSize);
    circle.setAttribute("cx", rawPoint.x);
    circle.setAttribute("cy", rawPoint.y);
    circle.setAttribute("fill", rawPoint.color);
    svg.appendChild(circle);
  });
  var prefix = "data:image/svg+xml;base64,";
  var header2 = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"' + (' viewBox="' + minX + " " + minY + " " + maxX + " " + maxY + '"') + (' width="' + maxX + '"') + (' height="' + maxY + '"') + ">";
  var body = svg.innerHTML;
  if (body === void 0) {
    var dummy = document.createElement("dummy");
    var nodes = svg.childNodes;
    dummy.innerHTML = "";
    for (var i = 0; i < nodes.length; i += 1) {
      dummy.appendChild(nodes[i].cloneNode(true));
    }
    body = dummy.innerHTML;
  }
  var footer = "</svg>";
  var data = header2 + body + footer;
  return prefix + btoa(data);
};
SignaturePad.prototype.fromData = function(pointGroups) {
  var _this3 = this;
  this.clear();
  this._fromData(pointGroups, function(curve, widths) {
    return _this3._drawCurve(curve, widths.start, widths.end);
  }, function(rawPoint) {
    return _this3._drawDot(rawPoint);
  });
  this._data = pointGroups;
};
SignaturePad.prototype.toData = function() {
  return this._data;
};
const signature_pad = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: SignaturePad
}, Symbol.toStringTag, { value: "Module" }));
const require$$2 = /* @__PURE__ */ getAugmentedNamespace(signature_pad);
var build = { exports: {} };
var hasRequiredBuild;
function requireBuild() {
  if (hasRequiredBuild)
    return build.exports;
  hasRequiredBuild = 1;
  (function(module, exports) {
    !function(e, t) {
      module.exports = t();
    }(commonjsGlobal, function() {
      return function(e) {
        function t(n) {
          if (r[n])
            return r[n].exports;
          var o = r[n] = { exports: {}, id: n, loaded: false };
          return e[n].call(o.exports, o, o.exports, t), o.loaded = true, o.exports;
        }
        var r = {};
        return t.m = e, t.c = r, t.p = "", t(0);
      }([function(e, t) {
        function r(e2) {
          var t2 = e2.getContext("2d"), r2 = e2.width, n2 = e2.height, o2 = t2.getImageData(0, 0, r2, n2).data, f = a(true, r2, n2, o2), i = a(false, r2, n2, o2), c = u(true, r2, n2, o2), d = u(false, r2, n2, o2), p = d - c + 1, l = i - f + 1, s = t2.getImageData(c, f, p, l);
          return e2.width = p, e2.height = l, t2.clearRect(0, 0, p, l), t2.putImageData(s, 0, 0), e2;
        }
        function n(e2, t2, r2, n2) {
          return { red: n2[4 * (r2 * t2 + e2)], green: n2[4 * (r2 * t2 + e2) + 1], blue: n2[4 * (r2 * t2 + e2) + 2], alpha: n2[4 * (r2 * t2 + e2) + 3] };
        }
        function o(e2, t2, r2, o2) {
          return n(e2, t2, r2, o2).alpha;
        }
        function a(e2, t2, r2, n2) {
          for (var a2 = e2 ? 1 : -1, u2 = e2 ? 0 : r2 - 1, f = u2; e2 ? f < r2 : f > -1; f += a2)
            for (var i = 0; i < t2; i++)
              if (o(i, f, t2, n2))
                return f;
          return null;
        }
        function u(e2, t2, r2, n2) {
          for (var a2 = e2 ? 1 : -1, u2 = e2 ? 0 : t2 - 1, f = u2; e2 ? f < t2 : f > -1; f += a2)
            for (var i = 0; i < r2; i++)
              if (o(f, i, t2, n2))
                return f;
          return null;
        }
        Object.defineProperty(t, "__esModule", { value: true }), t.default = r;
      }]);
    });
  })(build);
  return build.exports;
}
(function(module, exports) {
  !function(e, t) {
    module.exports = t(propTypesExports, reactExports, require$$2, requireBuild());
  }(commonjsGlobal, function(e, t, n, r) {
    return function(e2) {
      function t2(r2) {
        if (n2[r2])
          return n2[r2].exports;
        var a = n2[r2] = { exports: {}, id: r2, loaded: false };
        return e2[r2].call(a.exports, a, a.exports, t2), a.loaded = true, a.exports;
      }
      var n2 = {};
      return t2.m = e2, t2.c = n2, t2.p = "", t2(0);
    }([function(e2, t2, n2) {
      function r2(e3) {
        return e3 && e3.__esModule ? e3 : { default: e3 };
      }
      function a(e3, t3) {
        var n3 = {};
        for (var r3 in e3)
          t3.indexOf(r3) >= 0 || Object.prototype.hasOwnProperty.call(e3, r3) && (n3[r3] = e3[r3]);
        return n3;
      }
      function o(e3, t3) {
        if (!(e3 instanceof t3))
          throw new TypeError("Cannot call a class as a function");
      }
      function i(e3, t3) {
        if (!e3)
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t3 || "object" != typeof t3 && "function" != typeof t3 ? e3 : t3;
      }
      function u(e3, t3) {
        if ("function" != typeof t3 && null !== t3)
          throw new TypeError("Super expression must either be null or a function, not " + typeof t3);
        e3.prototype = Object.create(t3 && t3.prototype, { constructor: { value: e3, enumerable: false, writable: true, configurable: true } }), t3 && (Object.setPrototypeOf ? Object.setPrototypeOf(e3, t3) : e3.__proto__ = t3);
      }
      Object.defineProperty(t2, "__esModule", { value: true });
      var s = Object.assign || function(e3) {
        for (var t3 = 1; t3 < arguments.length; t3++) {
          var n3 = arguments[t3];
          for (var r3 in n3)
            Object.prototype.hasOwnProperty.call(n3, r3) && (e3[r3] = n3[r3]);
        }
        return e3;
      }, c = function() {
        function e3(e4, t3) {
          for (var n3 = 0; n3 < t3.length; n3++) {
            var r3 = t3[n3];
            r3.enumerable = r3.enumerable || false, r3.configurable = true, "value" in r3 && (r3.writable = true), Object.defineProperty(e4, r3.key, r3);
          }
        }
        return function(t3, n3, r3) {
          return n3 && e3(t3.prototype, n3), r3 && e3(t3, r3), t3;
        };
      }(), f = n2(1), p = r2(f), l = n2(2), d = r2(l), v = n2(3), h = r2(v), _ = n2(4), g = r2(_), m = function(e3) {
        function t3() {
          var e4, n3, r3, u2;
          o(this, t3);
          for (var s2 = arguments.length, c2 = Array(s2), f2 = 0; f2 < s2; f2++)
            c2[f2] = arguments[f2];
          return n3 = r3 = i(this, (e4 = t3.__proto__ || Object.getPrototypeOf(t3)).call.apply(e4, [this].concat(c2))), r3._sigPad = null, r3._excludeOurProps = function() {
            var e5 = r3.props, t4 = (e5.canvasProps, e5.clearOnResize, a(e5, ["canvasProps", "clearOnResize"]));
            return t4;
          }, r3.getCanvas = function() {
            return r3._canvas;
          }, r3.getTrimmedCanvas = function() {
            var e5 = document.createElement("canvas");
            return e5.width = r3._canvas.width, e5.height = r3._canvas.height, e5.getContext("2d").drawImage(r3._canvas, 0, 0), (0, g.default)(e5);
          }, r3.getSignaturePad = function() {
            return r3._sigPad;
          }, r3._checkClearOnResize = function() {
            r3.props.clearOnResize && r3._resizeCanvas();
          }, r3._resizeCanvas = function() {
            var e5 = r3.props.canvasProps || {}, t4 = e5.width, n4 = e5.height;
            if (!t4 || !n4) {
              var a2 = r3._canvas, o2 = Math.max(window.devicePixelRatio || 1, 1);
              t4 || (a2.width = a2.offsetWidth * o2), n4 || (a2.height = a2.offsetHeight * o2), a2.getContext("2d").scale(o2, o2), r3.clear();
            }
          }, r3.on = function() {
            return window.addEventListener("resize", r3._checkClearOnResize), r3._sigPad.on();
          }, r3.off = function() {
            return window.removeEventListener("resize", r3._checkClearOnResize), r3._sigPad.off();
          }, r3.clear = function() {
            return r3._sigPad.clear();
          }, r3.isEmpty = function() {
            return r3._sigPad.isEmpty();
          }, r3.fromDataURL = function(e5, t4) {
            return r3._sigPad.fromDataURL(e5, t4);
          }, r3.toDataURL = function(e5, t4) {
            return r3._sigPad.toDataURL(e5, t4);
          }, r3.fromData = function(e5) {
            return r3._sigPad.fromData(e5);
          }, r3.toData = function() {
            return r3._sigPad.toData();
          }, u2 = n3, i(r3, u2);
        }
        return u(t3, e3), c(t3, [{ key: "componentDidMount", value: function() {
          this._sigPad = new h.default(this._canvas, this._excludeOurProps()), this._resizeCanvas(), this.on();
        } }, { key: "componentWillUnmount", value: function() {
          this.off();
        } }, { key: "componentDidUpdate", value: function() {
          Object.assign(this._sigPad, this._excludeOurProps());
        } }, { key: "render", value: function() {
          var e4 = this, t4 = this.props.canvasProps;
          return d.default.createElement("canvas", s({ ref: function(t5) {
            e4._canvas = t5;
          } }, t4));
        } }]), t3;
      }(l.Component);
      m.propTypes = { velocityFilterWeight: p.default.number, minWidth: p.default.number, maxWidth: p.default.number, minDistance: p.default.number, dotSize: p.default.oneOfType([p.default.number, p.default.func]), penColor: p.default.string, throttle: p.default.number, onEnd: p.default.func, onBegin: p.default.func, canvasProps: p.default.object, clearOnResize: p.default.bool }, m.defaultProps = { clearOnResize: true }, t2.default = m;
    }, function(t2, n2) {
      t2.exports = e;
    }, function(e2, n2) {
      e2.exports = t;
    }, function(e2, t2) {
      e2.exports = n;
    }, function(e2, t2) {
      e2.exports = r;
    }]);
  });
})(build$1);
var buildExports = build$1.exports;
const SignatureCanvas = /* @__PURE__ */ getDefaultExportFromCjs(buildExports);
const signatureCanvas = "_signatureCanvas_1bkvb_1";
const container$1 = "_container_1bkvb_10";
const buttonContainer = "_buttonContainer_1bkvb_14";
const styles$4 = {
  signatureCanvas,
  container: container$1,
  buttonContainer
};
function Signature(props) {
  const [submitEnabled, setSubmitEnabled] = reactExports.useState(false);
  const [clearEnabled, setClearEnabled] = reactExports.useState(false);
  const state = useSelector((state2) => {
    let questionState = state2.runState.values[props.component.qualifiedCode];
    return questionState == null ? void 0 : questionState.value;
  });
  const containerRef = reactExports.useRef(null);
  const [canvasWidth, setCanvasWidth] = reactExports.useState(400);
  reactExports.useEffect(() => {
    var _a;
    setCanvasWidth((_a = containerRef == null ? void 0 : containerRef.current) == null ? void 0 : _a.offsetWidth);
  }, [containerRef]);
  reactExports.useEffect(() => {
    const resizeListener = () => {
      var _a;
      setCanvasWidth((_a = containerRef == null ? void 0 : containerRef.current) == null ? void 0 : _a.offsetWidth);
    };
    window.addEventListener("resize", resizeListener);
    return () => {
      window.removeEventListener("resize", resizeListener);
    };
  }, []);
  const sigCanvas = reactExports.useRef();
  const dispatch = useDispatch();
  const clear = () => {
    sigCanvas.current.clear();
    setClearEnabled(false);
    setSubmitEnabled(false);
  };
  const submit = () => {
    const dataUrl = sigCanvas.current.toDataURL("image/png");
    uploadDataUrl(
      props.component.qualifiedCode,
      dataUrl,
      `signature-${props.component.qualifiedCode}.png`
    ).then((response) => {
      dispatch(
        valueChange({
          componentCode: props.component.qualifiedCode,
          value: response
        })
      );
    }).catch((err) => {
      console.error(err);
    });
  };
  reactExports.useEffect(() => {
    if (state && state.stored_filename) {
      downloadFileAsBase64(previewUrl(state.stored_filename)).then(
        (response) => {
          sigCanvas.current.fromDataURL(response);
        }
      );
    }
  }, [state]);
  reactExports.useEffect(() => {
    if (state && state.stored_filename) {
      downloadFileAsBase64(previewUrl(state.stored_filename)).then(
        (response) => {
          setSubmitEnabled(false);
          sigCanvas.current.fromDataURL(response);
        }
      );
    }
  }, [state]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Box$1,
      {
        sx: { backgroundColor: "background.default" },
        className: styles$4.container,
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Box$1,
          {
            ref: containerRef,
            sx: { maxWidth: Math.min(canvasWidth, 400) + "px" },
            className: styles$4.signatureCanvas,
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              SignatureCanvas,
              {
                penColor: "red",
                clearOnResize: true,
                onBegin: () => {
                  setSubmitEnabled(true);
                  setClearEnabled(true);
                },
                ref: sigCanvas,
                canvasProps: { width: Math.min(canvasWidth, 400), height: 200 }
              }
            )
          }
        )
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: styles$4.buttonContainer, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: () => clear(), disabled: !clearEnabled, children: "Clear" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: () => submit(), disabled: !submitEnabled, children: "Submit" })
    ] })
  ] });
}
function VideoDisplay(props) {
  var _a, _b;
  const videUrl = ((_a = props.component.resources) == null ? void 0 : _a.videoUrl) ? buildResourceUrl(props.component.resources.videoUrl) : "";
  useTheme$1();
  return ((_b = props.component.resources) == null ? void 0 : _b.videoUrl) && /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      style: {
        position: "relative",
        marginTop: "16px",
        // 16:9 aspect ratio
        paddingTop: props.component.audio_only ? "10%" : "56%"
      },
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        ReactPlayer,
        {
          url: videUrl,
          loop: props.component.loop || false,
          light: true,
          controls: true,
          config: {
            forceAudio: props.component.audio_only || false
          },
          style: {
            backgroundColor: "black",
            position: "absolute",
            top: "0",
            left: "0"
          },
          volume: 1,
          width: "100%",
          height: "100%"
        }
      )
    }
  );
}
function ImageDisplay(props) {
  var _a, _b;
  const imageUrl = ((_a = props.component.resources) == null ? void 0 : _a.imageUrl) ? buildResourceUrl(props.component.resources.imageUrl) : "";
  return ((_b = props.component.resources) == null ? void 0 : _b.imageUrl) && /* @__PURE__ */ jsxRuntimeExports.jsx(
    "img",
    {
      style: {
        width: "100%"
      },
      src: imageUrl
    }
  );
}
const imageGrid = "_imageGrid_gkz8d_1";
const imageContainer = "_imageContainer_gkz8d_5";
const rankContainer = "_rankContainer_gkz8d_11";
const rankValue = "_rankValue_gkz8d_19";
const styles$3 = {
  imageGrid,
  imageContainer,
  rankContainer,
  rankValue
};
function ImageRanking(props) {
  const values = useSelector((state) => {
    let valuesMap = {};
    props.component.answers.forEach((element) => {
      valuesMap[element.qualifiedCode] = state.runState.values[element.qualifiedCode].value;
    });
    return valuesMap;
  }, shallowEqual);
  const dispatch = useDispatch();
  const containerRef = reactExports.useRef(null);
  const [width, setWidth] = reactExports.useState(800);
  reactExports.useEffect(() => {
    var _a;
    setWidth((_a = containerRef == null ? void 0 : containerRef.current) == null ? void 0 : _a.offsetWidth);
  }, [containerRef]);
  const imageWidth = (width - props.component.columns * props.component.spacing * 2) / props.component.columns;
  const imageHeight = imageWidth / (props.component.imageAspectRatio || 1);
  reactExports.useEffect(() => {
    const resizeListener = () => {
      var _a;
      setWidth((_a = containerRef == null ? void 0 : containerRef.current) == null ? void 0 : _a.offsetWidth);
    };
    window.addEventListener("resize", resizeListener);
    return () => {
      window.removeEventListener("resize", resizeListener);
    };
  }, []);
  const onItemClick = (componentCode) => {
    dispatch(setDirty(props.component.qualifiedCode));
    dispatch(setDirty(props.parentCode));
    if (+values[componentCode] > 0) {
      dispatch(valueChange({ componentCode, undefined: void 0 }));
    } else {
      let keys = Object.keys(values);
      let allValues = keys.map((key) => values[key]);
      for (var i = 1; i <= keys.length; i++) {
        if (!allValues.includes(i)) {
          dispatch(valueChange({ componentCode, value: i }));
          return;
        }
      }
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Grid, { ref: containerRef, container: true, className: styles$3.imageGrid, children: props.component.answers.map((option) => {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      ImageRankingItem,
      {
        option,
        spacing: props.component.spacing,
        columns: props.component.columns,
        hideText: props.component.hideText,
        onClick: () => onItemClick(option.qualifiedCode),
        parentCode: props.component.qualifiedCode,
        imageHeight,
        imageWidth
      },
      option.qualifiedCode
    );
  }) });
}
function ImageRankingItem(props) {
  var _a;
  const theme = useTheme$1();
  const state = useSelector((state2) => {
    let answerState = state2.runState.values[props.option.qualifiedCode];
    return {
      showAnswer: typeof (answerState == null ? void 0 : answerState.relevance) == "undefined" || answerState.relevance,
      value: (answerState == null ? void 0 : answerState.value) || 0
    };
  }, shallowEqual);
  const backgroundImage = ((_a = props.option.resources) == null ? void 0 : _a.image) ? `url('${buildResourceUrl(props.option.resources.image)}')` : "0";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Grid, { item: true, xs: 12 / props.columns, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Box$2,
      {
        className: styles$3.imageContainer,
        onClick: () => props.onClick(),
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        style: {
          backgroundImage,
          backgroundColor: theme.palette.background.default,
          margin: props.spacing + "px",
          boxShadow: 2,
          height: props.imageHeight + "px",
          border: state.checked ? `2px solid ${theme.palette.primary.main}` : "2px solid transparent"
        },
        children: state.value > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            style: {
              height: Math.min(props.imageHeight, props.imageWidth) + "px",
              width: Math.min(props.imageHeight, props.imageWidth) + "px",
              borderRadius: Math.min(props.imageHeight, props.imageWidth) / 2 + "px",
              fontSize: Math.min(props.imageHeight, props.imageWidth) / 2 + "px"
            },
            className: styles$3.rankContainer,
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "span",
              {
                className: styles$3.rankValue,
                style: {
                  color: theme.palette.primary.main
                },
                children: state.value
              }
            )
          }
        )
      }
    ),
    !props.hideText && /* @__PURE__ */ jsxRuntimeExports.jsx(
      Box$2,
      {
        sx: {
          fontFamily: theme.textStyles.text.font,
          color: theme.textStyles.text.color,
          fontSize: theme.textStyles.text.size
        },
        children: props.option.content.label
      }
    )
  ] }, props.option.code);
}
const choicesContainer = "_choicesContainer_iaaeb_1";
const choice = "_choice_iaaeb_1";
const choiceLabels = "_choiceLabels_iaaeb_19";
const styles$2 = {
  choicesContainer,
  choice,
  choiceLabels
};
function NPS(props) {
  const theme = useTheme$1();
  const dispatch = useDispatch();
  let columns = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const state = useSelector((state2) => {
    return state2.runState.values[props.component.qualifiedCode].value;
  }, shallowEqual);
  const handleChange = (option) => {
    dispatch(
      valueChange({
        componentCode: props.component.qualifiedCode,
        value: option
      })
    );
    dispatch(setDirty(props.component.qualifiedCode));
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Box$2, { className: styles$2.choiceLabels, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Box$2, { children: props.component.content.lower_bound_hint }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Box$2, { children: props.component.content.higher_bound_hint })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Box$2, { className: styles$2.choicesContainer, children: columns.map((option) => {
      const isSelected = state == option;
      return /* @__PURE__ */ jsxRuntimeExports.jsx(
        Box$2,
        {
          className: styles$2.choice,
          onClick: () => handleChange(option),
          sx: {
            color: isSelected ? "background.paper" : theme.textStyles.text.color,
            backgroundColor: isSelected ? "primary.main" : "background.paper"
          },
          children: option
        },
        option
      );
    }) })
  ] });
}
const container = "_container_bvkr6_2";
const styles$1 = {
  container
};
function PhotoCapture(props) {
  var _a;
  const component = props.component;
  const state = useSelector((state2) => {
    return state2.runState.values[component.qualifiedCode];
  });
  console.log(props.component);
  const dispatch = useDispatch();
  const onImageClick = () => {
    const code = component.qualifiedCode;
    if (window["Android"]) {
      window["Android"].capturePhoto(code);
      window["onPhotoCatpured" + code] = (value) => {
        dispatch(
          valueChange({
            componentCode: code,
            value
          })
        );
      };
    } else {
      console.log("no android device!!");
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Box$1, { className: styles$1.container, children: [
    !state.value || !state.value.stored_filename ? /* @__PURE__ */ jsxRuntimeExports.jsx(
      "img",
      {
        onClick: onImageClick,
        src: "/camera.png",
        style: {
          maxHeight: "200px"
        }
      }
    ) : /* @__PURE__ */ jsxRuntimeExports.jsx(
      "img",
      {
        onClick: onImageClick,
        src: previewUrl(state.value.stored_filename),
        style: {
          maxHeight: "400px"
        }
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
    component.showHint && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: (_a = component.content) == null ? void 0 : _a.hint })
  ] });
}
function Question(props) {
  console.log("rendering: " + props.component.code);
  const theme = useTheme();
  const state = useSelector((state2) => {
    let questionState = state2.runState.values[props.component.qualifiedCode];
    let show_errors = state2.runState.values.Survey.show_errors;
    let isDirty = state2.templateState[props.component.qualifiedCode];
    let validity = questionState == null ? void 0 : questionState.validity;
    let invalid = (show_errors || isDirty) && validity === false;
    return {
      showQuestion: typeof (questionState == null ? void 0 : questionState.relevance) === "undefined" || (questionState == null ? void 0 : questionState.relevance),
      invalid,
      showValidation: invalid
    };
  }, shallowEqual);
  const showDescription = props.component.content.description && stripTags(props.component.content.description).length > 0;
  const showTitle = props.component.content.label && stripTags(props.component.content.label).length > 0;
  const showHeader = showTitle || showDescription;
  const showQuestion = () => {
    switch (props.component.type) {
      case "date_time":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(
          DateTimeQuestion,
          {
            component: props.component
          },
          props.component.qualifiedCode
        );
      case "date":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(
          DateTimeQuestion,
          {
            component: props.component
          },
          props.component.qualifiedCode
        );
      case "time":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(
          DateTimeQuestion,
          {
            component: props.component
          },
          props.component.qualifiedCode
        );
      case "scq":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(
          SCQ,
          {
            component: props.component
          },
          props.component.qualifiedCode
        );
      case "scq_array":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(
          SCQArray,
          {
            component: props.component
          },
          props.component.qualifiedCode
        );
      case "file_upload":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(
          FileUpload,
          {
            component: props.component
          },
          props.component.qualifiedCode
        );
      case "signature":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(
          Signature,
          {
            component: props.component
          },
          props.component.qualifiedCode
        );
      case "photo_capture":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(
          PhotoCapture,
          {
            component: props.component
          },
          props.component.qualifiedCode
        );
      case "mcq":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(
          MCQ,
          {
            component: props.component
          },
          props.component.qualifiedCode
        );
      case "number":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(
          NumberQuestion,
          {
            component: props.component
          },
          props.component.qualifiedCode
        );
      case "text":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(
          TextQuestion,
          {
            component: props.component
          },
          props.component.qualifiedCode
        );
      case "video_display":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(
          VideoDisplay,
          {
            component: props.component
          },
          props.component.qualifiedCode
        );
      case "image_display":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(
          ImageDisplay,
          {
            component: props.component
          },
          props.component.qualifiedCode
        );
      case "image_ranking":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(
          ImageRanking,
          {
            component: props.component
          },
          props.component.qualifiedCode
        );
      case "paragraph":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(
          ParagraphQuestion,
          {
            component: props.component
          },
          props.component.qualifiedCode
        );
      case "email":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(
          EmailQuestion,
          {
            component: props.component
          },
          props.component.qualifiedCode
        );
      case "image_scq":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(
          ImageScq,
          {
            component: props.component
          },
          props.component.qualifiedCode
        );
      case "image_mcq":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(
          ImageMcq,
          {
            component: props.component
          },
          props.component.qualifiedCode
        );
      case "ranking":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(
          Ranking,
          {
            component: props.component
          },
          props.component.qualifiedCode
        );
      case "nps":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(
          NPS,
          {
            component: props.component
          },
          props.component.qualifiedCode
        );
      default:
        return "";
    }
  };
  return state.showQuestion ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
    Box$2,
    {
      sx: {
        borderColor: state.invalid ? "error.main" : "grey.500",
        backgroundColor: "background.paper"
      },
      className: `${styles$8.groupQuestion}`,
      children: [
        showHeader && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: styles$8.header, children: [
          showTitle && /* @__PURE__ */ jsxRuntimeExports.jsx(
            Box$2,
            {
              style: {
                fontFamily: theme.textStyles.question.font,
                color: theme.textStyles.text.color,
                fontSize: theme.textStyles.question.size
              },
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                Content,
                {
                  className: `${styles$8.content} ${styles$8.question}`,
                  name: "label",
                  lang: props.lang,
                  elementCode: props.component.qualifiedCode,
                  content: props.component.content.label
                }
              )
            }
          ),
          showDescription && /* @__PURE__ */ jsxRuntimeExports.jsx(Box$2, { className: styles$8.textDescription, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            Content,
            {
              elementCode: props.component.code,
              name: "description",
              lang: props.lang,
              content: props.component.content.description
            }
          ) })
        ] }),
        showQuestion(),
        !state.showValidation ? "" : /* @__PURE__ */ jsxRuntimeExports.jsx(Validation, { component: props.component })
      ]
    }
  ) : "";
}
const textHeader = "_textHeader_vleqj_1";
const textDescription = "_textDescription_vleqj_5";
const titleRow = "_titleRow_vleqj_9";
const groupHeader = "_groupHeader_vleqj_19";
const styles = {
  textHeader,
  textDescription,
  titleRow,
  groupHeader
};
function Group(props) {
  const theme = useTheme();
  const state = useSelector((state2) => {
    let groupState = state2.runState.values[props.group.code];
    return {
      showGroup: typeof (groupState == null ? void 0 : groupState.relevance) === "undefined" || groupState.relevance
    };
  }, shallowEqual);
  const showGroup = () => {
    var _a, _b;
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(React.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Box$2,
        {
          sx: {
            borderColor: "grey.500",
            boxShadow: 1,
            backgroundColor: "background.paper"
          },
          className: "card-custom",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Box$2,
              {
                sx: { backgroundColor: "primary.main", height: "8px" },
                className: styles.groupHeader
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Box$2,
              {
                sx: { backgroundColor: "background.paper" },
                className: styles.titleRow,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: styles.textHeader,
                      style: {
                        fontFamily: theme.textStyles.group.font,
                        color: theme.textStyles.group.color,
                        fontSize: theme.textStyles.group.size
                      },
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                        Content,
                        {
                          elementCode: props.group.code,
                          name: "label",
                          lang: props.lang,
                          content: (_a = props.group.content) == null ? void 0 : _a.label
                        }
                      )
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Box$2, { className: styles.textDescription, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Content,
                    {
                      elementCode: props.group.code,
                      name: "description",
                      lang: props.lang,
                      content: (_b = props.group.content) == null ? void 0 : _b.description
                    }
                  ) })
                ]
              }
            )
          ]
        }
      ),
      props.group && props.group.questions ? props.group.questions.filter((quest) => quest.inCurrentNavigation).map((quest) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        Question,
        {
          component: quest,
          lang: props.lang
        },
        quest.code
      )) : ""
    ] });
  };
  return state.showGroup && (props.group ? showGroup() : "");
}
function Survey({ navigationIndex, survey, lang }) {
  var _a;
  const theme = useTheme();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "form",
    {
      id: FORM_ID,
      className: styles$f.surveyPage,
      style: {
        fontFamily: theme.textStyles.text.font,
        color: theme.textStyles.text.color,
        fontSize: theme.textStyles.text.size
      },
      children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: styles$f.surveyContent, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: styles$f.surveyGroups, children: [
        ((_a = survey.resources) == null ? void 0 : _a.headerImage) ? /* @__PURE__ */ jsxRuntimeExports.jsx(
          CardMedia,
          {
            className: styles$f.cardImage,
            component: "img",
            image: buildResourceUrl(survey.resources.headerImage)
          }
        ) : null,
        survey && survey.groups ? survey.groups.filter((group) => group.inCurrentNavigation).map((group) => /* @__PURE__ */ jsxRuntimeExports.jsx(Group, { group, lang: lang.code }, group.code)) : "",
        /* @__PURE__ */ jsxRuntimeExports.jsx(Navigation, { navigationIndex })
      ] }) })
    }
  );
}
function ChangeLang(props) {
  useSelector((state2) => {
    return {
      navigate: state2.runState.navigate,
      lang: state2.runState.lang
    };
  }, shallowEqual);
  const dispatch = useDispatch();
  const { t } = useTranslation("run");
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(FormControl, { variant: "standard", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(InputLabel, { id: "change-lang-label", children: t("lang") }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Select,
      {
        labelId: "change-lang-label",
        sx: { backgroundColor: "background.paper", color: "primary.main" },
        id: "ChangeLang",
        label: t("lang"),
        value: props.lang.code,
        onChange: (event) => {
          dispatch(
            langChange({
              lang: event.target.value
            })
          );
        },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { value: props.lang.code, children: props.lang.langName }),
          props.additionalLang ? props.additionalLang.map((lang, index) => {
            return /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { value: lang.code, children: lang.langName }, index);
          }) : ""
        ]
      }
    )
  ] });
}
function RunSurvey({ preview }) {
  var _a, _b, _c, _d;
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const responseId = searchParams.get("response_id");
  const lang = searchParams.get("lang");
  const [expanded, setExpanded] = React.useState(COLLAPSE);
  const [render, setRender] = React.useState(false);
  const [surveyError, setSurveyError] = React.useState(false);
  window["handleBack"] = () => {
    const result = expanded === EXPAND;
    setExpanded(COLLAPSE);
    return result;
  };
  const data = useSelector((state) => {
    return state.runState.data;
  }, shallowEqual);
  const navigation = useSelector((state) => {
    return state.runState.navigation;
  }, shallowEqual);
  const [error, setError] = reactExports.useState(null);
  const { t, i18n } = useTranslation("run");
  const dispatch = useDispatch();
  reactExports.useEffect(() => {
    if (navigation) {
      setExpanded(COLLAPSE_IMMEDIATE);
      setError(null);
      continueNav(navigation, data.responseId);
    }
  }, [navigation]);
  reactExports.useEffect(() => {
    if (rtlLanguage.includes(i18n.language)) {
      document.dir = "rtl";
    } else {
      document.dir = "ltr";
    }
  }, [i18n.language]);
  const handleError = (error2) => {
    const procesed = processError(error2);
    if ([
      PROCESSED_ERRORS.SURVEY_DESIGN_ERROR,
      PROCESSED_ERRORS.SURVEY_NOT_ACTIVE,
      PROCESSED_ERRORS.SURVEY_CLOSED,
      PROCESSED_ERRORS.SURVEY_EXPIRED,
      PROCESSED_ERRORS.SURVEY_SCHEDULED
    ].indexOf(procesed) > -1) {
      setSurveyError(procesed);
    } else {
      setError({
        errorType: "startup",
        message: error2.message
      });
    }
    dispatch(setFetching(false));
  };
  const startNav = () => {
    startNavigation(lang, preview).then((response) => {
      setRender(true);
      dispatch(stateReceived(response));
      sessionStorage.setItem("responseId", response.responseId);
      i18n.changeLanguage(response.lang.code);
      dispatch(setFetching(false));
    }).catch((err) => {
      handleError(err);
    });
  };
  const continueNav = (payload, responseId2) => {
    continueNavigation(payload, responseId2, preview).then((response) => {
      dispatch(stateReceived(response));
      i18n.changeLanguage(response.lang.code);
    }).catch((err) => {
      setError({
        errorType: "click",
        message: err.message
      });
    });
  };
  reactExports.useEffect(() => {
    document.body.style.overflow = "scroll";
    dispatch(setFetching(true));
    setError(null);
    loadScript(preview).then(() => {
      if (responseId) {
        continueNav({ navigationDirection: { name: "RESUME" } }, responseId);
      } else {
        startNav();
      }
    }).catch((err) => {
      handleError(err);
    });
  }, []);
  const theme = React.useCallback(
    createTheme({
      ...defualtTheme((_a = data == null ? void 0 : data.survey) == null ? void 0 : _a.theme),
      direction: rtlLanguage.includes(i18n.language) ? "rtl" : "ltr"
    }),
    [i18n.language, (_b = data == null ? void 0 : data.survey) == null ? void 0 : _b.theme]
  );
  const cacheRtl = createCache({
    key: rtlLanguage.includes(i18n.language) ? "muirtl" : "muiltr",
    stylisPlugins: rtlLanguage.includes(i18n.language) ? [prefixer, stylisRTLPlugin] : null
  });
  const toggleDrawer = (open) => (event) => {
    if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
      return;
    }
    setExpanded(open ? EXPAND : COLLAPSE);
  };
  const navigate = useNavigate();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(CacheProvider, { value: cacheRtl, children: /* @__PURE__ */ jsxRuntimeExports.jsx(ThemeProvider, { theme, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Layout, { onClick: toggleDrawer(false), onKeyDown: toggleDrawer(false), children: [
    render && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: styles$i.mainContainer, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(AppBar$1, { position: "fixed", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Toolbar, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          IconButton,
          {
            size: "large",
            edge: "start",
            color: "inherit",
            "aria-label": "menu",
            sx: { mr: 2 },
            onClick: () => navigate(-1),
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(default_1$3, {})
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          IconButton,
          {
            size: "large",
            edge: "start",
            color: "inherit",
            "aria-label": "menu",
            sx: { mr: 2 },
            onClick: toggleDrawer(true),
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(default_1$2, {})
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "h5", component: "div", sx: { flexGrow: 1 }, children: (_d = (_c = data == null ? void 0 : data.survey) == null ? void 0 : _c.content) == null ? void 0 : _d.label })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Toolbar, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        SurveyMemo,
        {
          survey: data == null ? void 0 : data.survey,
          navigationIndex: data == null ? void 0 : data.navigationIndex,
          lang: data == null ? void 0 : data.lang,
          additionalLang: data == null ? void 0 : data.additionalLang,
          error
        },
        "Survey"
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Drawer$1,
        {
          anchor: "left",
          transitionDuration: expanded !== COLLAPSE_IMMEDIATE ? 500 : 0,
          open: expanded == EXPAND,
          onClose: toggleDrawer(false),
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: styles$i.drawer, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              ChangeLang,
              {
                lang: data == null ? void 0 : data.lang,
                additionalLang: data == null ? void 0 : data.additionalLang
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              SurveyIndexMemo,
              {
                className: styles$i.surveyIndex,
                navigationIndex: data == null ? void 0 : data.navigationIndex,
                survey: data == null ? void 0 : data.survey
              }
            )
          ] })
        }
      )
    ] }),
    error ? /* @__PURE__ */ jsxRuntimeExports.jsx(ErrorMessage, { error, variant: "toast" }) : null,
    surveyError && /* @__PURE__ */ jsxRuntimeExports.jsx(Box$2, { className: styles$i.surveyDesignError, children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t(`processed_errors.${surveyError}`) }) })
  ] }) }) });
}
const SurveyMemo = React.memo(Survey);
const SurveyIndexMemo = React.memo(SurveyIndex);
const COLLAPSE_IMMEDIATE = "COLLAPSE_IMMEDIATE";
const COLLAPSE = "COLLAPSE";
const EXPAND = "EXPAND";
export {
  RunSurvey as default
};
