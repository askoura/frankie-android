function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/DateTimeQuestion-D8pU87sy.js","assets/index-DqOHBPA_.js","assets/index-DE4TyqkI.css","assets/DatePicker-9Pk1EwA1.js","assets/use-service-B2Fih2ge.js","assets/use-service-CkpWRxNJ.css","assets/Grid-nW54Jdfg.js","assets/DateTimePicker-DB3yiNgN.js","assets/TextField-Fj584c9C.js","assets/index-BibfXq_c.js","assets/Toolbar-ANEXYwkQ.js","assets/Card-CfNjVYcu.js","assets/DateTimeQuestion-vzSPYstL.css","assets/Scq-CASjt4RL.js","assets/index-DPzY-VP_.js","assets/index-PBFup7AU.js","assets/ErrorOutlineOutlined-BtTKAMZ9.js","assets/index-B2MGuExR.css","assets/index-DNlSF8oa.js","assets/RadioGroup-BzgRCXwX.js","assets/RadioGroupContext-DZr9FG9D.js","assets/FormGroup-BM4rjdom.js","assets/FormControlLabel-BnMNrqju.js","assets/Radio-Ci1SsyT_.js","assets/SwitchBase-rlcQTk7F.js","assets/radioClasses-D8j8JIb8.js","assets/SCQArray-CGfi63F1.js","assets/TableRow-BC97XHD1.js","assets/TableCell-CZrIf-eW.js","assets/tableRowClasses-vPBqZyH3.js","assets/TableHead-B6L6rCGe.js","assets/Signature-ClcA6hni.js","assets/Signature-gVULLM6_.css","assets/PhotoCapture-DqsQMgUE.js","assets/PhotoCapture-C5ZmfGS3.css","assets/VideoCapture-DbYkrc2B.js","assets/index-DqzDhzWC.js","assets/Mcq-TVbdh8f5.js","assets/Checkbox-47V_54xr.js","assets/NumberQuestion-C5a-SiYs.js","assets/NumberQuestion-DqVAs6Rh.css","assets/TextQuestion-T9Vfjlqp.js","assets/TextQuestion-DGXlt-dg.css","assets/VideoDisplay-BS2cj8DB.js","assets/ImageDisplay-BDgcgqbq.js","assets/ImageRanking-CoQT_VlS.js","assets/ImageRanking-DjFjN_-L.css","assets/ParagraphQuestion-D17SHnLR.js","assets/ParagraphQuestion-adbgTCRe.css","assets/Barcode-DOqW1fDz.js","assets/EmailQuestion-CR34yp3e.js","assets/EmailQuestion-B7PX_gQ6.css","assets/ImageScq-C9b8X1ty.js","assets/ImageScq-BgqpfIuL.css","assets/ImageMcq-B0AORBvE.js","assets/ImageMcq-BN6dfPfi.css","assets/Ranking-BFV5iVxz.js","assets/useDrop-PeEbBL8-.js","assets/Ranking-B49oiNwZ.css","assets/NPS-BhGdAEOr.js","assets/NPS-70CKDaEE.css","assets/FileUpload-iSJ-_d5k.js","assets/Link-DhG8SfhC.js","assets/IconScq-C7C3N2jM.js","assets/IconScq-BKB_6MBy.css","assets/IconMcq-DqjTJjeN.js","assets/SCQIconArray-Ba6Uepwl.js","assets/SCQArrayDesign.module-CKd1f2rv.js","assets/SCQArrayDesign-DxexeRA3.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import { f as generateUtilityClasses, aj as createBox, ad as ClassNameGenerator, g as generateUtilityClass, h as capitalize, _ as _extends, r as reactExports, b as _objectWithoutPropertiesLoose, j as jsxRuntimeExports, d as clsx, R as React, z as __vitePreload, B as Box$2, L as LoadingDots, q as interopRequireDefaultExports, y as useTheme$1, t as useLocation, x as createTheme, s as useNavigate, C as CacheProvider } from "./index-DqOHBPA_.js";
import { h as styled, j as Paper, e as useThemeProps, c as composeClasses, p as useTheme, b as useForkRef, aU as debounce, aV as ownerWindow, aN as Transition, bc as reflow, bd as getTransitionProps, ao as Modal, b8 as rootShouldForwardProp, be as getDrawerUtilityClass, A as useSelector, K as useDispatch, E as useTranslation, ab as rtlLanguage, ap as Button, bf as navigatePrevious, bg as navigateNext, bh as stripTags, b3 as buildResourceUrl, D as requireCreateSvgIcon, I as IconButton, ag as FormControl, ah as InputLabel, S as Select, bi as langChange, M as MenuItem, bj as jump, J as useService, bk as setFetching, bl as continueNavigation, bm as stateReceived, bn as loadScript, bo as defualtTheme, ae as cacheRtl, ac as ThemeProvider, Q as ErrorLayout, bp as processError, aq as PROCESSED_ERRORS, bq as startNavigation } from "./use-service-B2Fih2ge.js";
import { D as DndProvider, H as HTML5Backend, C as CardMedia } from "./index-BibfXq_c.js";
import { T as Toolbar } from "./Toolbar-ANEXYwkQ.js";
import { C as Card } from "./Card-CfNjVYcu.js";
const boxClasses = generateUtilityClasses("MuiBox", ["root"]);
const boxClasses$1 = boxClasses;
const Box = createBox({
  defaultClassName: boxClasses$1.root,
  generateClassName: ClassNameGenerator.generate
});
const Box$1 = Box;
function getAppBarUtilityClass(slot) {
  return generateUtilityClass("MuiAppBar", slot);
}
generateUtilityClasses("MuiAppBar", ["root", "positionFixed", "positionAbsolute", "positionSticky", "positionStatic", "positionRelative", "colorDefault", "colorPrimary", "colorSecondary", "colorInherit", "colorTransparent", "colorError", "colorInfo", "colorSuccess", "colorWarning"]);
const _excluded$2 = ["className", "color", "enableColorOnDark", "position"];
const useUtilityClasses$1 = (ownerState) => {
  const {
    color,
    position,
    classes
  } = ownerState;
  const slots = {
    root: ["root", "color".concat(capitalize(color)), "position".concat(capitalize(position))]
  };
  return composeClasses(slots, getAppBarUtilityClass, classes);
};
const joinVars = (var1, var2) => var1 ? "".concat(var1 == null ? void 0 : var1.replace(")", ""), ", ").concat(var2, ")") : var2;
const AppBarRoot = styled(Paper, {
  name: "MuiAppBar",
  slot: "Root",
  overridesResolver: (props, styles2) => {
    const {
      ownerState
    } = props;
    return [styles2.root, styles2["position".concat(capitalize(ownerState.position))], styles2["color".concat(capitalize(ownerState.color))]];
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
      return "translateX(".concat(containerRect.right + offsetX - rect.left, "px)");
    }
    return "translateX(".concat(containerWindow.innerWidth + offsetX - rect.left, "px)");
  }
  if (direction === "right") {
    if (containerRect) {
      return "translateX(-".concat(rect.right - containerRect.left - offsetX, "px)");
    }
    return "translateX(-".concat(rect.left + rect.width - offsetX, "px)");
  }
  if (direction === "up") {
    if (containerRect) {
      return "translateY(".concat(containerRect.bottom + offsetY - rect.top, "px)");
    }
    return "translateY(".concat(containerWindow.innerHeight + offsetY - rect.top, "px)");
  }
  if (containerRect) {
    return "translateY(-".concat(rect.top - containerRect.top + rect.height - offsetY, "px)");
  }
  return "translateY(-".concat(rect.top + rect.height - offsetY, "px)");
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
    paper: ["paper", "paperAnchor".concat(capitalize(anchor)), variant !== "temporary" && "paperAnchorDocked".concat(capitalize(anchor))]
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
    return [styles2.paper, styles2["paperAnchor".concat(capitalize(ownerState.anchor))], ownerState.variant !== "temporary" && styles2["paperAnchorDocked".concat(capitalize(ownerState.anchor))]];
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
  borderRight: "1px solid ".concat((theme.vars || theme).palette.divider)
}, ownerState.anchor === "top" && ownerState.variant !== "temporary" && {
  borderBottom: "1px solid ".concat((theme.vars || theme).palette.divider)
}, ownerState.anchor === "right" && ownerState.variant !== "temporary" && {
  borderLeft: "1px solid ".concat((theme.vars || theme).palette.divider)
}, ownerState.anchor === "bottom" && ownerState.variant !== "temporary" && {
  borderTop: "1px solid ".concat((theme.vars || theme).palette.divider)
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
const mainContainer = "_mainContainer_93c68_1";
const surveyDesignError = "_surveyDesignError_93c68_6";
const styles$5 = {
  mainContainer,
  surveyDesignError
};
function Navigation(props) {
  const state = useSelector((state2) => {
    return {
      has_previous: state2.runState.values.Survey.has_previous && state2.runState.data.survey.allowPrevious,
      has_next: state2.runState.values.Survey.has_next,
      can_save: state2.runState.data.survey.allowIncomplete
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
const surveyContent = "_surveyContent_11qtt_1";
const surveyGroups = "_surveyGroups_11qtt_5";
const cardImage = "_cardImage_11qtt_11";
const styles$4 = {
  surveyContent,
  surveyGroups,
  cardImage
};
const FORM_ID = "frankie-form";
const content = "_content_ukoxz_1";
const question = "_question_ukoxz_8";
const required = "_required_ukoxz_12";
const header = "_header_ukoxz_16";
const textDescription$1 = "_textDescription_ukoxz_20";
const groupQuestion = "_groupQuestion_ukoxz_25";
const styles$3 = {
  content,
  question,
  required,
  header,
  textDescription: textDescription$1,
  groupQuestion
};
const DateTimeQuestion = React.lazy(
  () => __vitePreload(() => import("./DateTimeQuestion-D8pU87sy.js"), true ? __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12]) : void 0)
);
const SCQ = React.lazy(() => __vitePreload(() => import("./Scq-CASjt4RL.js"), true ? __vite__mapDeps([13,1,2,4,5,14,15,16,17,18,19,20,21,22,23,24,25,8,9,10,11]) : void 0));
const SCQArray = React.lazy(() => __vitePreload(() => import("./SCQArray-CGfi63F1.js"), true ? __vite__mapDeps([26,1,2,4,5,14,15,16,17,18,27,28,29,30,23,24,20,25,9,10,11]) : void 0));
const Signature = React.lazy(() => __vitePreload(() => import("./Signature-ClcA6hni.js"), true ? __vite__mapDeps([31,1,2,4,5,9,10,11,32]) : void 0));
const PhotoCapture = React.lazy(
  () => __vitePreload(() => import("./PhotoCapture-DqsQMgUE.js"), true ? __vite__mapDeps([33,1,2,4,5,9,10,11,34]) : void 0)
);
const VideoCapture = React.lazy(
  () => __vitePreload(() => import("./VideoCapture-DbYkrc2B.js"), true ? __vite__mapDeps([35,1,2,4,5,36,9,10,11,34]) : void 0)
);
const MCQ = React.lazy(() => __vitePreload(() => import("./Mcq-TVbdh8f5.js"), true ? __vite__mapDeps([37,1,2,4,5,14,15,16,17,18,22,38,24,19,20,21,8,9,10,11]) : void 0));
const NumberQuestion = React.lazy(
  () => __vitePreload(() => import("./NumberQuestion-C5a-SiYs.js"), true ? __vite__mapDeps([39,1,2,4,5,8,9,10,11,40]) : void 0)
);
const TextQuestion = React.lazy(() => __vitePreload(() => import("./TextQuestion-T9Vfjlqp.js"), true ? __vite__mapDeps([41,1,2,4,5,8,9,10,11,42]) : void 0));
const VideoDisplay = React.lazy(
  () => __vitePreload(() => import("./VideoDisplay-BS2cj8DB.js"), true ? __vite__mapDeps([43,1,2,4,5,36]) : void 0)
);
const ImageDisplay = React.lazy(
  () => __vitePreload(() => import("./ImageDisplay-BDgcgqbq.js"), true ? __vite__mapDeps([44,1,2,4,5]) : void 0)
);
const ImageRanking = React.lazy(
  () => __vitePreload(() => import("./ImageRanking-CoQT_VlS.js"), true ? __vite__mapDeps([45,1,2,4,5,6,9,10,11,46]) : void 0)
);
const ParagraphQuestion = React.lazy(
  () => __vitePreload(() => import("./ParagraphQuestion-D17SHnLR.js"), true ? __vite__mapDeps([47,1,2,4,5,9,10,11,48]) : void 0)
);
const Barcode = React.lazy(() => __vitePreload(() => import("./Barcode-DOqW1fDz.js"), true ? __vite__mapDeps([49,1,2,4,5,8,9,10,11,34]) : void 0));
const EmailQuestion = React.lazy(
  () => __vitePreload(() => import("./EmailQuestion-CR34yp3e.js"), true ? __vite__mapDeps([50,1,2,4,5,8,9,10,11,51]) : void 0)
);
const ImageScq = React.lazy(() => __vitePreload(() => import("./ImageScq-C9b8X1ty.js"), true ? __vite__mapDeps([52,1,2,4,5,6,11,23,24,20,25,9,10,53]) : void 0));
const ImageMcq = React.lazy(() => __vitePreload(() => import("./ImageMcq-B0AORBvE.js"), true ? __vite__mapDeps([54,1,2,4,5,6,11,38,24,9,10,55]) : void 0));
const Ranking = React.lazy(() => __vitePreload(() => import("./Ranking-BFV5iVxz.js"), true ? __vite__mapDeps([56,1,2,4,5,57,9,10,11,58]) : void 0));
const NPS = React.lazy(() => __vitePreload(() => import("./NPS-BhGdAEOr.js"), true ? __vite__mapDeps([59,1,2,4,5,9,10,11,60]) : void 0));
const Content$2 = React.lazy(() => __vitePreload(() => Promise.resolve().then(() => index$1), true ? void 0 : void 0));
const Validation = React.lazy(() => __vitePreload(() => import("./index-DPzY-VP_.js"), true ? __vite__mapDeps([14,1,2,4,5,15,16,17,18]) : void 0));
const FileUpload = React.lazy(
  () => __vitePreload(() => import("./FileUpload-iSJ-_d5k.js"), true ? __vite__mapDeps([61,1,2,4,5,15,16,17,62]) : void 0)
);
const IconScq = React.lazy(() => __vitePreload(() => import("./IconScq-C7C3N2jM.js"), true ? __vite__mapDeps([63,1,2,4,5,6,9,10,11,64]) : void 0));
const IconMcq = React.lazy(() => __vitePreload(() => import("./IconMcq-DqjTJjeN.js"), true ? __vite__mapDeps([65,1,2,4,5,6,9,10,11,64]) : void 0));
const SCQIconArray = React.lazy(
  () => __vitePreload(() => import("./SCQIconArray-Ba6Uepwl.js"), true ? __vite__mapDeps([66,1,2,4,5,14,15,16,17,18,67,68,27,28,29]) : void 0)
);
function Question(props) {
  var _a, _b, _c, _d;
  console.log("rendering: " + props.component.code);
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
  const theme = useTheme();
  const showDescription = ((_a = props.component.content) == null ? void 0 : _a.description) && stripTags(props.component.content.description).length > 0;
  const showTitle = ((_b = props.component.content) == null ? void 0 : _b.label) && stripTags((_c = props.component.content) == null ? void 0 : _c.label).length > 0;
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
      case "scq_icon_array":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(
          SCQIconArray,
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
      case "video_capture":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(
          VideoCapture,
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
      case "barcode":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(
          Barcode,
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
      case "icon_scq":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(
          IconScq,
          {
            component: props.component
          },
          props.component.qualifiedCode
        );
      case "icon_mcq":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(
          IconMcq,
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
      className: "".concat(styles$3.groupQuestion),
      children: [
        showHeader && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          showTitle && /* @__PURE__ */ jsxRuntimeExports.jsx(
            Box$2,
            {
              style: {
                fontFamily: theme.textStyles.question.font,
                color: theme.textStyles.text.color,
                fontSize: theme.textStyles.question.size
              },
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                Content$2,
                {
                  className: "".concat(styles$3.content, " ").concat(styles$3.question),
                  name: "label",
                  lang: props.lang,
                  elementCode: props.component.qualifiedCode,
                  content: (_d = props.component.content) == null ? void 0 : _d.label
                }
              )
            }
          ),
          showDescription && /* @__PURE__ */ jsxRuntimeExports.jsx(Box$2, { className: styles$3.textDescription, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            Content$2,
            {
              elementCode: props.component.code,
              name: "description",
              lang: props.lang,
              content: props.component.content.description
            }
          ) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(reactExports.Suspense, { fallback: /* @__PURE__ */ jsxRuntimeExports.jsx(LoadingDots, {}), children: showQuestion() }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(reactExports.Suspense, { fallback: /* @__PURE__ */ jsxRuntimeExports.jsx(LoadingDots, {}), children: !state.showValidation ? /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, {}) : /* @__PURE__ */ jsxRuntimeExports.jsx(Validation, { component: props.component }) })
      ]
    }
  ) : "";
}
const Question$1 = React.memo(Question);
function Content(props) {
  const isComplex = props.content && props.content.search(/data-instruction/) >= 0;
  const state = useSelector((state2) => {
    if (!props.content || !isComplex || !state2.runState.values[props.elementCode] || !props.name || !props.lang) {
      return void 0;
    } else {
      return state2.runState.values[props.elementCode]["reference_".concat(props.name, "_").concat(props.lang)];
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
        className: "".concat(isRtl ? "rtl" : "ltr", " ql-editor no-padding"),
        dangerouslySetInnerHTML: { __html: props.content }
      }
    );
  } else {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "".concat(isRtl ? "rtl" : "ltr", " ql-editor no-padding"),
        dangerouslySetInnerHTML: {
          __html: replaceMentions(props.content, state)
        }
      }
    );
  }
}
const Content$1 = React.memo(Content);
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
const index$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Content$1
}, Symbol.toStringTag, { value: "Module" }));
const textDescription = "_textDescription_54bec_1";
const titleRow = "_titleRow_54bec_6";
const groupHeader = "_groupHeader_54bec_16";
const topLevel = "_topLevel_54bec_20";
const styles$2 = {
  textDescription,
  titleRow,
  groupHeader,
  topLevel
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
    var _a, _b, _c;
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(Paper, { className: styles$2.topLevel, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: styles$2.groupHeader,
          style: {
            fontFamily: theme.textStyles.group.font,
            color: theme.textStyles.group.color,
            fontSize: theme.textStyles.group.size
          },
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            Content$1,
            {
              elementCode: props.group.code,
              name: "label",
              lang: props.lang,
              content: (_a = props.group.content) == null ? void 0 : _a.label
            }
          )
        }
      ),
      ((_b = props.group.content) == null ? void 0 : _b.description) && /* @__PURE__ */ jsxRuntimeExports.jsx(Box$2, { className: styles$2.textDescription, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        Content$1,
        {
          elementCode: props.group.code,
          name: "description",
          lang: props.lang,
          content: (_c = props.group.content) == null ? void 0 : _c.description
        }
      ) }),
      props.group && props.group.questions ? props.group.questions.filter((quest) => quest.inCurrentNavigation).map((quest) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        Question$1,
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
const Group$1 = React.memo(Group);
function Survey({ navigationIndex, survey, lang }) {
  var _a;
  const theme = useTheme();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(DndProvider, { backend: HTML5Backend, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    "form",
    {
      id: FORM_ID,
      className: styles$4.surveyPage,
      style: {
        backgroundColor: theme.palette.background.default,
        fontFamily: theme.textStyles.text.font,
        color: theme.textStyles.text.color,
        fontSize: theme.textStyles.text.size
      },
      children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: styles$4.surveyContent, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: styles$4.surveyGroups, children: [
        ((_a = survey.resources) == null ? void 0 : _a.headerImage) ? /* @__PURE__ */ jsxRuntimeExports.jsx(
          CardMedia,
          {
            className: styles$4.cardImage,
            component: "img",
            image: buildResourceUrl(survey.resources.headerImage)
          }
        ) : null,
        survey && survey.groups ? survey.groups.filter((group) => group.inCurrentNavigation).map((group) => /* @__PURE__ */ jsxRuntimeExports.jsx(Group$1, { group, lang: lang.code }, group.code)) : "",
        /* @__PURE__ */ jsxRuntimeExports.jsx(Navigation, { navigationIndex })
      ] }) })
    }
  ) });
}
var Menu = {};
var _interopRequireDefault$3 = interopRequireDefaultExports;
Object.defineProperty(Menu, "__esModule", {
  value: true
});
var default_1$3 = Menu.default = void 0;
var _createSvgIcon$3 = _interopRequireDefault$3(requireCreateSvgIcon());
var _jsxRuntime$3 = jsxRuntimeExports;
var _default$3 = (0, _createSvgIcon$3.default)(/* @__PURE__ */ (0, _jsxRuntime$3.jsx)("path", {
  d: "M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"
}), "Menu");
default_1$3 = Menu.default = _default$3;
var ArrowBack = {};
var _interopRequireDefault$2 = interopRequireDefaultExports;
Object.defineProperty(ArrowBack, "__esModule", {
  value: true
});
var default_1$2 = ArrowBack.default = void 0;
var _createSvgIcon$2 = _interopRequireDefault$2(requireCreateSvgIcon());
var _jsxRuntime$2 = jsxRuntimeExports;
var _default$2 = (0, _createSvgIcon$2.default)(/* @__PURE__ */ (0, _jsxRuntime$2.jsx)("path", {
  d: "M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"
}), "ArrowBack");
default_1$2 = ArrowBack.default = _default$2;
function SurveyAppBar({ showBack, label, onBackClick, toggleDrawer }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(AppBar$1, { position: "fixed", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
    Toolbar,
    {
      style: {
        fontSize: "32px",
        lineHeight: "1.334",
        fontWeight: "400"
      },
      children: [
        showBack && /* @__PURE__ */ jsxRuntimeExports.jsx(
          IconButton,
          {
            size: "large",
            edge: "start",
            color: "inherit",
            "aria-label": "menu",
            sx: { mr: 2 },
            onClick: onBackClick,
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(default_1$2, {})
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
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(default_1$3, {})
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Content$1, { elementCode: "Survey", name: "label", content: label })
      ]
    }
  ) });
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
          /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { value: props.lang.code, children: props.lang.name }),
          props.additionalLang ? props.additionalLang.map((lang, index2) => {
            return /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { value: lang.code, children: lang.name }, index2);
          }) : ""
        ]
      }
    )
  ] });
}
const drawer = "_drawer_k998h_2";
const styles$1 = {
  drawer
};
const groupCard = "_groupCard_1t5ma_1";
const groupTitle = "_groupTitle_1t5ma_6";
const questionTitle = "_questionTitle_1t5ma_10";
const validationIcon = "_validationIcon_1t5ma_16";
const bullet = "_bullet_1t5ma_23";
const styles = {
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
    return state.runState.data.survey.allowJump;
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
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: styles.surveyContent, children: props.survey && props.survey.groups ? props.survey.groups.filter(
    (group) => relevance_map[group.code] && group.groupType != "END"
  ).map((group) => {
    var _a;
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Card,
      {
        onClick: () => onGroupClicked(group.code),
        className: styles.groupCard,
        style: {
          backgroundColor: isCurrentGroup(group.code) ? "beige" : theme.palette.background.paper,
          cursor: isGroupClickable(group.code) ? "pointer" : "default"
        },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Box$1, { className: styles.groupTitle, children: [
            stripTags((_a = group.content) == null ? void 0 : _a.label),
            " "
          ] }),
          group.questions.filter((question2) => relevance_map[question2.code]).map((question2) => {
            var _a2;
            return /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Box$1,
              {
                onClick: () => onQuestionClicked(question2.code),
                className: styles.questionTitle,
                style: {
                  backgroundColor: isCurrentQuestion(question2.code) ? "beige" : "inherit",
                  cursor: isGroupClickable(group.code) ? "inherit" : isQuestionClickable(group.code) ? "pointer" : "default"
                },
                children: [
                  validity_map[question2.code] ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                    default_1$1,
                    {
                      className: styles.validationIcon
                    }
                  ) : /* @__PURE__ */ jsxRuntimeExports.jsx(default_1, { className: styles.bullet }),
                  stripTags((_a2 = question2.content) == null ? void 0 : _a2.label)
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
function SurveyDrawer({
  survey,
  navigationIndex,
  lang,
  expanded,
  additionalLang,
  toggleDrawer
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Drawer$1,
    {
      anchor: "left",
      transitionDuration: expanded !== COLLAPSE_IMMEDIATE ? 500 : 0,
      open: expanded == EXPAND,
      onClose: toggleDrawer(false),
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: styles$1.drawer, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ChangeLang, { lang, additionalLang }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(SurveyIndex, { navigationIndex, survey })
      ] })
    }
  );
}
const SurveyDrawer$1 = React.memo(SurveyDrawer);
const COLLAPSE_IMMEDIATE = "COLLAPSE_IMMEDIATE";
const COLLAPSE = "COLLAPSE";
const EXPAND = "EXPAND";
function RunSurvey({ preview, guest, mode }) {
  var _a, _b, _c, _d;
  const runService = useService("run");
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const responseId = searchParams.get("response_id");
  const lang = searchParams.get("lang");
  const [expanded, setExpanded] = React.useState(COLLAPSE);
  const [render, setRender] = React.useState(false);
  const [error, setError] = React.useState(false);
  const [inlineError, setInlineError] = React.useState(false);
  window["handleBack"] = () => {
    const result = expanded === EXPAND;
    setExpanded(COLLAPSE);
    return result;
  };
  const data = useSelector((state) => {
    return state.runState.data;
  }, shallowEqual);
  const isLoading = useSelector((state) => state.templateState.isLoading);
  const navigation = useSelector((state) => {
    return state.runState.navigation;
  }, shallowEqual);
  const { t, i18n } = useTranslation("run");
  const dispatch = useDispatch();
  reactExports.useEffect(() => {
    if (navigation) {
      setExpanded(COLLAPSE_IMMEDIATE);
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
    console.log("eee", error2);
    const procesed = processError(error2);
    if ([
      PROCESSED_ERRORS.SURVEY_DESIGN_ERROR,
      PROCESSED_ERRORS.SURVEY_NOT_ACTIVE,
      PROCESSED_ERRORS.SURVEY_CLOSED,
      PROCESSED_ERRORS.SURVEY_EXPIRED,
      PROCESSED_ERRORS.SURVEY_SCHEDULED
    ].indexOf(procesed) > -1) {
      setInlineError(procesed);
    } else {
      setError(procesed);
    }
    dispatch(setFetching(false));
  };
  const startNav = () => {
    startNavigation(runService, lang, preview, guest, mode).then((response) => {
      setRender(true);
      dispatch(stateReceived({ response, preview }));
      sessionStorage.setItem("responseId", response.responseId);
      i18n.changeLanguage(response.lang.code);
      dispatch(setFetching(false));
    }).catch((err) => {
      handleError(err);
    });
  };
  const continueNav = (payload, responseId2) => {
    dispatch(setFetching(true));
    continueNavigation(runService, payload, responseId2, preview, guest, mode).then((response) => {
      setRender(true);
      dispatch(stateReceived({ response, preview }));
      sessionStorage.setItem("responseId", response.responseId);
      i18n.changeLanguage(response.lang.code);
      dispatch(setFetching(false));
    }).catch((err) => {
      handleError(err);
    });
  };
  reactExports.useEffect(() => {
    document.body.style.overflow = "visible";
    dispatch(setFetching(true));
    loadScript(runService, preview, guest).then(() => {
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
  const cacheRtlMemo = reactExports.useMemo(() => cacheRtl(i18n.language), [i18n.language]);
  const toggleDrawer = (open) => (event) => {
    if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
      return;
    }
    setExpanded(open ? EXPAND : COLLAPSE);
  };
  const navigate = useNavigate();
  const onBackClick = () => {
    if (window["Android"]) {
      window["Android"].onBackPressed();
    } else {
      navigate(-1);
    }
  };
  const showBack = window["Android"] || mode == "offline" && navigate.length > 1;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(CacheProvider, { value: cacheRtlMemo, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(ThemeProvider, { theme, children: [
    error && /* @__PURE__ */ jsxRuntimeExports.jsx(
      ErrorLayout,
      {
        error,
        setErrorSeen: () => {
          setError(null);
        }
      }
    ),
    isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx(LoadingDots, {}) : null,
    render && /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: styles$5.mainContainer,
        style: {
          backgroundColor: theme.palette.background.default,
          fontFamily: theme.textStyles.text.font,
          color: theme.textStyles.text.color,
          fontSize: theme.textStyles.text.size
        },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            SurveyAppBar,
            {
              toggleDrawer,
              onBackClick,
              label: (_d = (_c = data == null ? void 0 : data.survey) == null ? void 0 : _c.content) == null ? void 0 : _d.label,
              showBack
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Toolbar, {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            SurveyMemo,
            {
              survey: data == null ? void 0 : data.survey,
              navigationIndex: data == null ? void 0 : data.navigationIndex,
              lang: data == null ? void 0 : data.lang,
              additionalLang: data == null ? void 0 : data.additionalLang
            },
            "Survey"
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            SurveyDrawer$1,
            {
              survey: data == null ? void 0 : data.survey,
              expanded,
              navigationIndex: data == null ? void 0 : data.navigationIndex,
              lang: data == null ? void 0 : data.lang,
              additionalLang: data == null ? void 0 : data.additionalLang,
              toggleDrawer
            }
          )
        ]
      }
    ),
    inlineError && /* @__PURE__ */ jsxRuntimeExports.jsx(Box$2, { className: styles$5.surveyDesignError, children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t("processed_errors.".concat(inlineError.name)) }) })
  ] }) });
}
const SurveyMemo = React.memo(Survey);
const index = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: RunSurvey
}, Symbol.toStringTag, { value: "Module" }));
export {
  Box$1 as B,
  RunSurvey as R,
  index as i,
  shallowEqual as s
};
//# sourceMappingURL=index-DCDdj0_I.js.map
