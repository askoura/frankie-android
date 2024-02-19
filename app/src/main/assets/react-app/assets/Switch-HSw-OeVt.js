import { g as generateUtilityClasses, a as generateUtilityClass, s as styled, b as capitalize, _ as _extends, b0 as alpha, l as lighten, d as darken, r as reactExports, u as useThemeProps, e as _objectWithoutPropertiesLoose, j as jsxRuntimeExports, f as clsx, h as composeClasses } from "./index-RBnW6nvi.js";
import { S as SwitchBase } from "./SwitchBase-naWSSwc-.js";
function getSwitchUtilityClass(slot) {
  return generateUtilityClass("MuiSwitch", slot);
}
const switchClasses = generateUtilityClasses("MuiSwitch", ["root", "edgeStart", "edgeEnd", "switchBase", "colorPrimary", "colorSecondary", "sizeSmall", "sizeMedium", "checked", "disabled", "input", "thumb", "track"]);
const switchClasses$1 = switchClasses;
const _excluded = ["className", "color", "edge", "size", "sx"];
const useUtilityClasses = (ownerState) => {
  const {
    classes,
    edge,
    size,
    color,
    checked,
    disabled
  } = ownerState;
  const slots = {
    root: ["root", edge && "edge".concat(capitalize(edge)), "size".concat(capitalize(size))],
    switchBase: ["switchBase", "color".concat(capitalize(color)), checked && "checked", disabled && "disabled"],
    thumb: ["thumb"],
    track: ["track"],
    input: ["input"]
  };
  const composedClasses = composeClasses(slots, getSwitchUtilityClass, classes);
  return _extends({}, classes, composedClasses);
};
const SwitchRoot = styled("span", {
  name: "MuiSwitch",
  slot: "Root",
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.root, ownerState.edge && styles["edge".concat(capitalize(ownerState.edge))], styles["size".concat(capitalize(ownerState.size))]];
  }
})(({
  ownerState
}) => _extends({
  display: "inline-flex",
  width: 34 + 12 * 2,
  height: 14 + 12 * 2,
  overflow: "hidden",
  padding: 12,
  boxSizing: "border-box",
  position: "relative",
  flexShrink: 0,
  zIndex: 0,
  // Reset the stacking context.
  verticalAlign: "middle",
  // For correct alignment with the text.
  "@media print": {
    colorAdjust: "exact"
  }
}, ownerState.edge === "start" && {
  marginLeft: -8
}, ownerState.edge === "end" && {
  marginRight: -8
}, ownerState.size === "small" && {
  width: 40,
  height: 24,
  padding: 7,
  ["& .".concat(switchClasses$1.thumb)]: {
    width: 16,
    height: 16
  },
  ["& .".concat(switchClasses$1.switchBase)]: {
    padding: 4,
    ["&.".concat(switchClasses$1.checked)]: {
      transform: "translateX(16px)"
    }
  }
}));
const SwitchSwitchBase = styled(SwitchBase, {
  name: "MuiSwitch",
  slot: "SwitchBase",
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.switchBase, {
      ["& .".concat(switchClasses$1.input)]: styles.input
    }, ownerState.color !== "default" && styles["color".concat(capitalize(ownerState.color))]];
  }
})(({
  theme
}) => ({
  position: "absolute",
  top: 0,
  left: 0,
  zIndex: 1,
  // Render above the focus ripple.
  color: theme.vars ? theme.vars.palette.Switch.defaultColor : "".concat(theme.palette.mode === "light" ? theme.palette.common.white : theme.palette.grey[300]),
  transition: theme.transitions.create(["left", "transform"], {
    duration: theme.transitions.duration.shortest
  }),
  ["&.".concat(switchClasses$1.checked)]: {
    transform: "translateX(20px)"
  },
  ["&.".concat(switchClasses$1.disabled)]: {
    color: theme.vars ? theme.vars.palette.Switch.defaultDisabledColor : "".concat(theme.palette.mode === "light" ? theme.palette.grey[100] : theme.palette.grey[600])
  },
  ["&.".concat(switchClasses$1.checked, " + .").concat(switchClasses$1.track)]: {
    opacity: 0.5
  },
  ["&.".concat(switchClasses$1.disabled, " + .").concat(switchClasses$1.track)]: {
    opacity: theme.vars ? theme.vars.opacity.switchTrackDisabled : "".concat(theme.palette.mode === "light" ? 0.12 : 0.2)
  },
  ["& .".concat(switchClasses$1.input)]: {
    left: "-100%",
    width: "300%"
  }
}), ({
  theme,
  ownerState
}) => _extends({
  "&:hover": {
    backgroundColor: theme.vars ? "rgba(".concat(theme.vars.palette.action.activeChannel, " / ").concat(theme.vars.palette.action.hoverOpacity, ")") : alpha(theme.palette.action.active, theme.palette.action.hoverOpacity),
    // Reset on touch devices, it doesn't add specificity
    "@media (hover: none)": {
      backgroundColor: "transparent"
    }
  }
}, ownerState.color !== "default" && {
  ["&.".concat(switchClasses$1.checked)]: {
    color: (theme.vars || theme).palette[ownerState.color].main,
    "&:hover": {
      backgroundColor: theme.vars ? "rgba(".concat(theme.vars.palette[ownerState.color].mainChannel, " / ").concat(theme.vars.palette.action.hoverOpacity, ")") : alpha(theme.palette[ownerState.color].main, theme.palette.action.hoverOpacity),
      "@media (hover: none)": {
        backgroundColor: "transparent"
      }
    },
    ["&.".concat(switchClasses$1.disabled)]: {
      color: theme.vars ? theme.vars.palette.Switch["".concat(ownerState.color, "DisabledColor")] : "".concat(theme.palette.mode === "light" ? lighten(theme.palette[ownerState.color].main, 0.62) : darken(theme.palette[ownerState.color].main, 0.55))
    }
  },
  ["&.".concat(switchClasses$1.checked, " + .").concat(switchClasses$1.track)]: {
    backgroundColor: (theme.vars || theme).palette[ownerState.color].main
  }
}));
const SwitchTrack = styled("span", {
  name: "MuiSwitch",
  slot: "Track",
  overridesResolver: (props, styles) => styles.track
})(({
  theme
}) => ({
  height: "100%",
  width: "100%",
  borderRadius: 14 / 2,
  zIndex: -1,
  transition: theme.transitions.create(["opacity", "background-color"], {
    duration: theme.transitions.duration.shortest
  }),
  backgroundColor: theme.vars ? theme.vars.palette.common.onBackground : "".concat(theme.palette.mode === "light" ? theme.palette.common.black : theme.palette.common.white),
  opacity: theme.vars ? theme.vars.opacity.switchTrack : "".concat(theme.palette.mode === "light" ? 0.38 : 0.3)
}));
const SwitchThumb = styled("span", {
  name: "MuiSwitch",
  slot: "Thumb",
  overridesResolver: (props, styles) => styles.thumb
})(({
  theme
}) => ({
  boxShadow: (theme.vars || theme).shadows[1],
  backgroundColor: "currentColor",
  width: 20,
  height: 20,
  borderRadius: "50%"
}));
const Switch = /* @__PURE__ */ reactExports.forwardRef(function Switch2(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiSwitch"
  });
  const {
    className,
    color = "primary",
    edge = false,
    size = "medium",
    sx
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded);
  const ownerState = _extends({}, props, {
    color,
    edge,
    size
  });
  const classes = useUtilityClasses(ownerState);
  const icon = /* @__PURE__ */ jsxRuntimeExports.jsx(SwitchThumb, {
    className: classes.thumb,
    ownerState
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(SwitchRoot, {
    className: clsx(classes.root, className),
    sx,
    ownerState,
    children: [/* @__PURE__ */ jsxRuntimeExports.jsx(SwitchSwitchBase, _extends({
      type: "checkbox",
      icon,
      checkedIcon: icon,
      ref,
      ownerState
    }, other, {
      classes: _extends({}, classes, {
        root: classes.switchBase
      })
    })), /* @__PURE__ */ jsxRuntimeExports.jsx(SwitchTrack, {
      className: classes.track,
      ownerState
    })]
  });
});
const Switch$1 = Switch;
export {
  Switch$1 as S
};
//# sourceMappingURL=Switch-HSw-OeVt.js.map
