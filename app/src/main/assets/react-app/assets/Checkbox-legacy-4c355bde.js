;
(function () {
  function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
  System.register(['./index-legacy-99c8bdce.js', './FormControlLabel-legacy-bc7aec5d.js'], function (exports, module) {
    'use strict';

    var createSvgIcon, jsxRuntimeExports, generateUtilityClasses, generateUtilityClass, styled, rootShouldForwardProp, capitalize, _extends, alpha, reactExports, useThemeProps, _objectWithoutPropertiesLoose, clsx, composeClasses, SwitchBase;
    return {
      setters: [function (module) {
        createSvgIcon = module.c;
        jsxRuntimeExports = module.j;
        generateUtilityClasses = module.n;
        generateUtilityClass = module.q;
        styled = module.t;
        rootShouldForwardProp = module.$;
        capitalize = module.W;
        _extends = module.m;
        alpha = module.at;
        reactExports = module.r;
        useThemeProps = module.v;
        _objectWithoutPropertiesLoose = module._;
        clsx = module.x;
        composeClasses = module.y;
      }, function (module) {
        SwitchBase = module.S;
      }],
      execute: function execute() {
        var CheckBoxOutlineBlankIcon = createSvgIcon( /*#__PURE__*/jsxRuntimeExports.jsx("path", {
          d: "M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"
        }), 'CheckBoxOutlineBlank');
        var CheckBoxIcon = createSvgIcon( /*#__PURE__*/jsxRuntimeExports.jsx("path", {
          d: "M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
        }), 'CheckBox');
        var IndeterminateCheckBoxIcon = createSvgIcon( /*#__PURE__*/jsxRuntimeExports.jsx("path", {
          d: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"
        }), 'IndeterminateCheckBox');
        function getCheckboxUtilityClass(slot) {
          return generateUtilityClass('MuiCheckbox', slot);
        }
        var checkboxClasses = generateUtilityClasses('MuiCheckbox', ['root', 'checked', 'disabled', 'indeterminate', 'colorPrimary', 'colorSecondary']);
        var checkboxClasses$1 = checkboxClasses;
        var _excluded = ["checkedIcon", "color", "icon", "indeterminate", "indeterminateIcon", "inputProps", "size", "className"];
        var useUtilityClasses = function useUtilityClasses(ownerState) {
          var classes = ownerState.classes,
            indeterminate = ownerState.indeterminate,
            color = ownerState.color;
          var slots = {
            root: ['root', indeterminate && 'indeterminate', "color".concat(capitalize(color))]
          };
          var composedClasses = composeClasses(slots, getCheckboxUtilityClass, classes);
          return _extends({}, classes, composedClasses);
        };
        var CheckboxRoot = styled(SwitchBase, {
          shouldForwardProp: function shouldForwardProp(prop) {
            return rootShouldForwardProp(prop) || prop === 'classes';
          },
          name: 'MuiCheckbox',
          slot: 'Root',
          overridesResolver: function overridesResolver(props, styles) {
            var ownerState = props.ownerState;
            return [styles.root, ownerState.indeterminate && styles.indeterminate, ownerState.color !== 'default' && styles["color".concat(capitalize(ownerState.color))]];
          }
        })(function (_ref) {
          var _ref2;
          var theme = _ref.theme,
            ownerState = _ref.ownerState;
          return _extends({
            color: (theme.vars || theme).palette.text.secondary
          }, !ownerState.disableRipple && {
            '&:hover': {
              backgroundColor: theme.vars ? "rgba(".concat(ownerState.color === 'default' ? theme.vars.palette.action.activeChannel : theme.vars.palette.primary.mainChannel, " / ").concat(theme.vars.palette.action.hoverOpacity, ")") : alpha(ownerState.color === 'default' ? theme.palette.action.active : theme.palette[ownerState.color].main, theme.palette.action.hoverOpacity),
              // Reset on touch devices, it doesn't add specificity
              '@media (hover: none)': {
                backgroundColor: 'transparent'
              }
            }
          }, ownerState.color !== 'default' && (_ref2 = {}, _defineProperty(_ref2, "&.".concat(checkboxClasses$1.checked, ", &.").concat(checkboxClasses$1.indeterminate), {
            color: (theme.vars || theme).palette[ownerState.color].main
          }), _defineProperty(_ref2, "&.".concat(checkboxClasses$1.disabled), {
            color: (theme.vars || theme).palette.action.disabled
          }), _ref2));
        });
        var defaultCheckedIcon = /*#__PURE__*/jsxRuntimeExports.jsx(CheckBoxIcon, {});
        var defaultIcon = /*#__PURE__*/jsxRuntimeExports.jsx(CheckBoxOutlineBlankIcon, {});
        var defaultIndeterminateIcon = /*#__PURE__*/jsxRuntimeExports.jsx(IndeterminateCheckBoxIcon, {});
        var Checkbox = /*#__PURE__*/reactExports.forwardRef(function Checkbox(inProps, ref) {
          var _icon$props$fontSize, _indeterminateIcon$pr;
          var props = useThemeProps({
            props: inProps,
            name: 'MuiCheckbox'
          });
          var _props$checkedIcon = props.checkedIcon,
            checkedIcon = _props$checkedIcon === void 0 ? defaultCheckedIcon : _props$checkedIcon,
            _props$color = props.color,
            color = _props$color === void 0 ? 'primary' : _props$color,
            _props$icon = props.icon,
            iconProp = _props$icon === void 0 ? defaultIcon : _props$icon,
            _props$indeterminate = props.indeterminate,
            indeterminate = _props$indeterminate === void 0 ? false : _props$indeterminate,
            _props$indeterminateI = props.indeterminateIcon,
            indeterminateIconProp = _props$indeterminateI === void 0 ? defaultIndeterminateIcon : _props$indeterminateI,
            inputProps = props.inputProps,
            _props$size = props.size,
            size = _props$size === void 0 ? 'medium' : _props$size,
            className = props.className,
            other = _objectWithoutPropertiesLoose(props, _excluded);
          var icon = indeterminate ? indeterminateIconProp : iconProp;
          var indeterminateIcon = indeterminate ? indeterminateIconProp : checkedIcon;
          var ownerState = _extends({}, props, {
            color: color,
            indeterminate: indeterminate,
            size: size
          });
          var classes = useUtilityClasses(ownerState);
          return /*#__PURE__*/jsxRuntimeExports.jsx(CheckboxRoot, _extends({
            type: "checkbox",
            inputProps: _extends({
              'data-indeterminate': indeterminate
            }, inputProps),
            icon: /*#__PURE__*/reactExports.cloneElement(icon, {
              fontSize: (_icon$props$fontSize = icon.props.fontSize) != null ? _icon$props$fontSize : size
            }),
            checkedIcon: /*#__PURE__*/reactExports.cloneElement(indeterminateIcon, {
              fontSize: (_indeterminateIcon$pr = indeterminateIcon.props.fontSize) != null ? _indeterminateIcon$pr : size
            }),
            ownerState: ownerState,
            ref: ref,
            className: clsx(classes.root, className)
          }, other, {
            classes: classes
          }));
        });
        var Checkbox$1 = exports('C', Checkbox);
      }
    };
  });
})();
