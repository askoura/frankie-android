;
(function () {
  System.register(['./index-legacy-T3s18jo3.js', './SwitchBase-legacy-VpMr3A_z.js'], function (exports, module) {
    'use strict';

    var generateUtilityClasses, generateUtilityClass, styled, capitalize, _extends, alpha, lighten, darken, reactExports, useThemeProps, _objectWithoutPropertiesLoose, jsxRuntimeExports, clsx, composeClasses, SwitchBase;
    return {
      setters: [module => {
        generateUtilityClasses = module.g;
        generateUtilityClass = module.a;
        styled = module.s;
        capitalize = module.b;
        _extends = module._;
        alpha = module.b0;
        lighten = module.l;
        darken = module.d;
        reactExports = module.r;
        useThemeProps = module.u;
        _objectWithoutPropertiesLoose = module.e;
        jsxRuntimeExports = module.j;
        clsx = module.f;
        composeClasses = module.h;
      }, module => {
        SwitchBase = module.S;
      }],
      execute: function execute() {
        function getSwitchUtilityClass(slot) {
          return generateUtilityClass('MuiSwitch', slot);
        }
        const switchClasses = generateUtilityClasses('MuiSwitch', ['root', 'edgeStart', 'edgeEnd', 'switchBase', 'colorPrimary', 'colorSecondary', 'sizeSmall', 'sizeMedium', 'checked', 'disabled', 'input', 'thumb', 'track']);
        const switchClasses$1 = switchClasses;
        const _excluded = ["className", "color", "edge", "size", "sx"];
        const useUtilityClasses = ownerState => {
          const classes = ownerState.classes,
            edge = ownerState.edge,
            size = ownerState.size,
            color = ownerState.color,
            checked = ownerState.checked,
            disabled = ownerState.disabled;
          const slots = {
            root: ["root", edge && `edge${capitalize(edge)}`, `size${capitalize(size)}`],
            switchBase: ["switchBase", `color${capitalize(color)}`, checked && "checked", disabled && "disabled"],
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
            const ownerState = props.ownerState;
            return [styles.root, ownerState.edge && styles[`edge${capitalize(ownerState.edge)}`], styles[`size${capitalize(ownerState.size)}`]];
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
          [`& .${switchClasses$1.thumb}`]: {
            width: 16,
            height: 16
          },
          [`& .${switchClasses$1.switchBase}`]: {
            padding: 4,
            [`&.${switchClasses$1.checked}`]: {
              transform: "translateX(16px)"
            }
          }
        }));
        const SwitchSwitchBase = styled(SwitchBase, {
          name: "MuiSwitch",
          slot: "SwitchBase",
          overridesResolver: (props, styles) => {
            const ownerState = props.ownerState;
            return [styles.switchBase, {
              [`& .${switchClasses$1.input}`]: styles.input
            }, ownerState.color !== "default" && styles[`color${capitalize(ownerState.color)}`]];
          }
        })(({
          theme
        }) => ({
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: 1,
          // Render above the focus ripple.
          color: theme.vars ? theme.vars.palette.Switch.defaultColor : `${theme.palette.mode === "light" ? theme.palette.common.white : theme.palette.grey[300]}`,
          transition: theme.transitions.create(["left", "transform"], {
            duration: theme.transitions.duration.shortest
          }),
          [`&.${switchClasses$1.checked}`]: {
            transform: "translateX(20px)"
          },
          [`&.${switchClasses$1.disabled}`]: {
            color: theme.vars ? theme.vars.palette.Switch.defaultDisabledColor : `${theme.palette.mode === "light" ? theme.palette.grey[100] : theme.palette.grey[600]}`
          },
          [`&.${switchClasses$1.checked} + .${switchClasses$1.track}`]: {
            opacity: 0.5
          },
          [`&.${switchClasses$1.disabled} + .${switchClasses$1.track}`]: {
            opacity: theme.vars ? theme.vars.opacity.switchTrackDisabled : `${theme.palette.mode === "light" ? 0.12 : 0.2}`
          },
          [`& .${switchClasses$1.input}`]: {
            left: "-100%",
            width: "300%"
          }
        }), ({
          theme,
          ownerState
        }) => _extends({
          "&:hover": {
            backgroundColor: theme.vars ? `rgba(${theme.vars.palette.action.activeChannel} / ${theme.vars.palette.action.hoverOpacity})` : alpha(theme.palette.action.active, theme.palette.action.hoverOpacity),
            // Reset on touch devices, it doesn't add specificity
            "@media (hover: none)": {
              backgroundColor: "transparent"
            }
          }
        }, ownerState.color !== "default" && {
          [`&.${switchClasses$1.checked}`]: {
            color: (theme.vars || theme).palette[ownerState.color].main,
            "&:hover": {
              backgroundColor: theme.vars ? `rgba(${theme.vars.palette[ownerState.color].mainChannel} / ${theme.vars.palette.action.hoverOpacity})` : alpha(theme.palette[ownerState.color].main, theme.palette.action.hoverOpacity),
              "@media (hover: none)": {
                backgroundColor: "transparent"
              }
            },
            [`&.${switchClasses$1.disabled}`]: {
              color: theme.vars ? theme.vars.palette.Switch[`${ownerState.color}DisabledColor`] : `${theme.palette.mode === "light" ? lighten(theme.palette[ownerState.color].main, 0.62) : darken(theme.palette[ownerState.color].main, 0.55)}`
            }
          },
          [`&.${switchClasses$1.checked} + .${switchClasses$1.track}`]: {
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
          backgroundColor: theme.vars ? theme.vars.palette.common.onBackground : `${theme.palette.mode === "light" ? theme.palette.common.black : theme.palette.common.white}`,
          opacity: theme.vars ? theme.vars.opacity.switchTrack : `${theme.palette.mode === "light" ? 0.38 : 0.3}`
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
        const Switch = /* @__PURE__ */reactExports.forwardRef(function Switch2(inProps, ref) {
          const props = useThemeProps({
            props: inProps,
            name: "MuiSwitch"
          });
          const className = props.className,
            _props$color = props.color,
            color = _props$color === void 0 ? "primary" : _props$color,
            _props$edge = props.edge,
            edge = _props$edge === void 0 ? false : _props$edge,
            _props$size = props.size,
            size = _props$size === void 0 ? "medium" : _props$size,
            sx = props.sx,
            other = _objectWithoutPropertiesLoose(props, _excluded);
          const ownerState = _extends({}, props, {
            color,
            edge,
            size
          });
          const classes = useUtilityClasses(ownerState);
          const icon = /* @__PURE__ */jsxRuntimeExports.jsx(SwitchThumb, {
            className: classes.thumb,
            ownerState
          });
          return /* @__PURE__ */jsxRuntimeExports.jsxs(SwitchRoot, {
            className: clsx(classes.root, className),
            sx,
            ownerState,
            children: [/* @__PURE__ */jsxRuntimeExports.jsx(SwitchSwitchBase, _extends({
              type: "checkbox",
              icon,
              checkedIcon: icon,
              ref,
              ownerState
            }, other, {
              classes: _extends({}, classes, {
                root: classes.switchBase
              })
            })), /* @__PURE__ */jsxRuntimeExports.jsx(SwitchTrack, {
              className: classes.track,
              ownerState
            })]
          });
        });
        const Switch$1 = exports('S', Switch);
      }
    };
  });
})();
//# sourceMappingURL=Switch-legacy-v-eJDCHU.js.map
