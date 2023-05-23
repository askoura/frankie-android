;
(function () {
  function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
  System.register(['./index-legacy-13317357.js', './FormControlLabel-legacy-0cf63f54.js'], function (exports, module) {
    'use strict';

    var generateUtilityClasses, generateUtilityClass, styled, capitalize, _extends, alpha, lighten, darken, reactExports, useThemeProps, _objectWithoutPropertiesLoose, jsxRuntimeExports, clsx, composeClasses, requireCreateSvgIcon, interopRequireDefaultExports, SwitchBase;
    return {
      setters: [function (module) {
        generateUtilityClasses = module.n;
        generateUtilityClass = module.q;
        styled = module.t;
        capitalize = module.W;
        _extends = module.m;
        alpha = module.at;
        lighten = module.av;
        darken = module.aw;
        reactExports = module.r;
        useThemeProps = module.v;
        _objectWithoutPropertiesLoose = module._;
        jsxRuntimeExports = module.j;
        clsx = module.x;
        composeClasses = module.y;
        requireCreateSvgIcon = module.g;
        interopRequireDefaultExports = module.i;
      }, function (module) {
        SwitchBase = module.S;
      }],
      execute: function execute() {
        function getSwitchUtilityClass(slot) {
          return generateUtilityClass('MuiSwitch', slot);
        }
        var switchClasses = generateUtilityClasses('MuiSwitch', ['root', 'edgeStart', 'edgeEnd', 'switchBase', 'colorPrimary', 'colorSecondary', 'sizeSmall', 'sizeMedium', 'checked', 'disabled', 'input', 'thumb', 'track']);
        var switchClasses$1 = switchClasses;
        var _excluded = ["className", "color", "edge", "size", "sx"];
        var useUtilityClasses = function useUtilityClasses(ownerState) {
          var classes = ownerState.classes,
            edge = ownerState.edge,
            size = ownerState.size,
            color = ownerState.color,
            checked = ownerState.checked,
            disabled = ownerState.disabled;
          var slots = {
            root: ['root', edge && "edge".concat(capitalize(edge)), "size".concat(capitalize(size))],
            switchBase: ['switchBase', "color".concat(capitalize(color)), checked && 'checked', disabled && 'disabled'],
            thumb: ['thumb'],
            track: ['track'],
            input: ['input']
          };
          var composedClasses = composeClasses(slots, getSwitchUtilityClass, classes);
          return _extends({}, classes, composedClasses);
        };
        var SwitchRoot = styled('span', {
          name: 'MuiSwitch',
          slot: 'Root',
          overridesResolver: function overridesResolver(props, styles) {
            var ownerState = props.ownerState;
            return [styles.root, ownerState.edge && styles["edge".concat(capitalize(ownerState.edge))], styles["size".concat(capitalize(ownerState.size))]];
          }
        })(function (_ref) {
          var _ref2;
          var ownerState = _ref.ownerState;
          return _extends({
            display: 'inline-flex',
            width: 34 + 12 * 2,
            height: 14 + 12 * 2,
            overflow: 'hidden',
            padding: 12,
            boxSizing: 'border-box',
            position: 'relative',
            flexShrink: 0,
            zIndex: 0,
            // Reset the stacking context.
            verticalAlign: 'middle',
            // For correct alignment with the text.
            '@media print': {
              colorAdjust: 'exact'
            }
          }, ownerState.edge === 'start' && {
            marginLeft: -8
          }, ownerState.edge === 'end' && {
            marginRight: -8
          }, ownerState.size === 'small' && (_ref2 = {
            width: 40,
            height: 24,
            padding: 7
          }, _defineProperty(_ref2, "& .".concat(switchClasses$1.thumb), {
            width: 16,
            height: 16
          }), _defineProperty(_ref2, "& .".concat(switchClasses$1.switchBase), _defineProperty({
            padding: 4
          }, "&.".concat(switchClasses$1.checked), {
            transform: 'translateX(16px)'
          })), _ref2));
        });
        var SwitchSwitchBase = styled(SwitchBase, {
          name: 'MuiSwitch',
          slot: 'SwitchBase',
          overridesResolver: function overridesResolver(props, styles) {
            var ownerState = props.ownerState;
            return [styles.switchBase, _defineProperty({}, "& .".concat(switchClasses$1.input), styles.input), ownerState.color !== 'default' && styles["color".concat(capitalize(ownerState.color))]];
          }
        })(function (_ref4) {
          var _ref5;
          var theme = _ref4.theme;
          return _ref5 = {
            position: 'absolute',
            top: 0,
            left: 0,
            zIndex: 1,
            // Render above the focus ripple.
            color: theme.vars ? theme.vars.palette.Switch.defaultColor : "".concat(theme.palette.mode === 'light' ? theme.palette.common.white : theme.palette.grey[300]),
            transition: theme.transitions.create(['left', 'transform'], {
              duration: theme.transitions.duration.shortest
            })
          }, _defineProperty(_ref5, "&.".concat(switchClasses$1.checked), {
            transform: 'translateX(20px)'
          }), _defineProperty(_ref5, "&.".concat(switchClasses$1.disabled), {
            color: theme.vars ? theme.vars.palette.Switch.defaultDisabledColor : "".concat(theme.palette.mode === 'light' ? theme.palette.grey[100] : theme.palette.grey[600])
          }), _defineProperty(_ref5, "&.".concat(switchClasses$1.checked, " + .").concat(switchClasses$1.track), {
            opacity: 0.5
          }), _defineProperty(_ref5, "&.".concat(switchClasses$1.disabled, " + .").concat(switchClasses$1.track), {
            opacity: theme.vars ? theme.vars.opacity.switchTrackDisabled : "".concat(theme.palette.mode === 'light' ? 0.12 : 0.2)
          }), _defineProperty(_ref5, "& .".concat(switchClasses$1.input), {
            left: '-100%',
            width: '300%'
          }), _ref5;
        }, function (_ref6) {
          var _ref7;
          var theme = _ref6.theme,
            ownerState = _ref6.ownerState;
          return _extends({
            '&:hover': {
              backgroundColor: theme.vars ? "rgba(".concat(theme.vars.palette.action.activeChannel, " / ").concat(theme.vars.palette.action.hoverOpacity, ")") : alpha(theme.palette.action.active, theme.palette.action.hoverOpacity),
              // Reset on touch devices, it doesn't add specificity
              '@media (hover: none)': {
                backgroundColor: 'transparent'
              }
            }
          }, ownerState.color !== 'default' && (_ref7 = {}, _defineProperty(_ref7, "&.".concat(switchClasses$1.checked), _defineProperty({
            color: (theme.vars || theme).palette[ownerState.color].main,
            '&:hover': {
              backgroundColor: theme.vars ? "rgba(".concat(theme.vars.palette[ownerState.color].mainChannel, " / ").concat(theme.vars.palette.action.hoverOpacity, ")") : alpha(theme.palette[ownerState.color].main, theme.palette.action.hoverOpacity),
              '@media (hover: none)': {
                backgroundColor: 'transparent'
              }
            }
          }, "&.".concat(switchClasses$1.disabled), {
            color: theme.vars ? theme.vars.palette.Switch["".concat(ownerState.color, "DisabledColor")] : "".concat(theme.palette.mode === 'light' ? lighten(theme.palette[ownerState.color].main, 0.62) : darken(theme.palette[ownerState.color].main, 0.55))
          })), _defineProperty(_ref7, "&.".concat(switchClasses$1.checked, " + .").concat(switchClasses$1.track), {
            backgroundColor: (theme.vars || theme).palette[ownerState.color].main
          }), _ref7));
        });
        var SwitchTrack = styled('span', {
          name: 'MuiSwitch',
          slot: 'Track',
          overridesResolver: function overridesResolver(props, styles) {
            return styles.track;
          }
        })(function (_ref8) {
          var theme = _ref8.theme;
          return {
            height: '100%',
            width: '100%',
            borderRadius: 14 / 2,
            zIndex: -1,
            transition: theme.transitions.create(['opacity', 'background-color'], {
              duration: theme.transitions.duration.shortest
            }),
            backgroundColor: theme.vars ? theme.vars.palette.common.onBackground : "".concat(theme.palette.mode === 'light' ? theme.palette.common.black : theme.palette.common.white),
            opacity: theme.vars ? theme.vars.opacity.switchTrack : "".concat(theme.palette.mode === 'light' ? 0.38 : 0.3)
          };
        });
        var SwitchThumb = styled('span', {
          name: 'MuiSwitch',
          slot: 'Thumb',
          overridesResolver: function overridesResolver(props, styles) {
            return styles.thumb;
          }
        })(function (_ref9) {
          var theme = _ref9.theme;
          return {
            boxShadow: (theme.vars || theme).shadows[1],
            backgroundColor: 'currentColor',
            width: 20,
            height: 20,
            borderRadius: '50%'
          };
        });
        var Switch = /*#__PURE__*/reactExports.forwardRef(function Switch(inProps, ref) {
          var props = useThemeProps({
            props: inProps,
            name: 'MuiSwitch'
          });
          var className = props.className,
            _props$color = props.color,
            color = _props$color === void 0 ? 'primary' : _props$color,
            _props$edge = props.edge,
            edge = _props$edge === void 0 ? false : _props$edge,
            _props$size = props.size,
            size = _props$size === void 0 ? 'medium' : _props$size,
            sx = props.sx,
            other = _objectWithoutPropertiesLoose(props, _excluded);
          var ownerState = _extends({}, props, {
            color: color,
            edge: edge,
            size: size
          });
          var classes = useUtilityClasses(ownerState);
          var icon = /*#__PURE__*/jsxRuntimeExports.jsx(SwitchThumb, {
            className: classes.thumb,
            ownerState: ownerState
          });
          return /*#__PURE__*/jsxRuntimeExports.jsxs(SwitchRoot, {
            className: clsx(classes.root, className),
            sx: sx,
            ownerState: ownerState,
            children: [/*#__PURE__*/jsxRuntimeExports.jsx(SwitchSwitchBase, _extends({
              type: "checkbox",
              icon: icon,
              checkedIcon: icon,
              ref: ref,
              ownerState: ownerState
            }, other, {
              classes: _extends({}, classes, {
                root: classes.switchBase
              })
            })), /*#__PURE__*/jsxRuntimeExports.jsx(SwitchTrack, {
              className: classes.track,
              ownerState: ownerState
            })]
          });
        });
        var Switch$1 = exports('S', Switch);
        var Delete = {};
        var _interopRequireDefault = interopRequireDefaultExports;
        Object.defineProperty(Delete, "__esModule", {
          value: true
        });
        var default_1 = exports('d', Delete.default = void 0);
        var _createSvgIcon = _interopRequireDefault(requireCreateSvgIcon());
        var _jsxRuntime = jsxRuntimeExports;
        var _default = (0, _createSvgIcon.default)( /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
          d: "M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"
        }), 'Delete');
        exports('d', default_1 = Delete.default = _default);
      }
    };
  });
})();
