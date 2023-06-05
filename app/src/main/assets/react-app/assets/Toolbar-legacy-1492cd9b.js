;
(function () {
  function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
  System.register(['./index-legacy-0a320ccd.js'], function (exports, module) {
    'use strict';

    var generateUtilityClass, generateUtilityClasses, styled, _extends, reactExports, useThemeProps, _objectWithoutPropertiesLoose, jsxRuntimeExports, clsx, composeClasses;
    return {
      setters: [function (module) {
        generateUtilityClass = module.q;
        generateUtilityClasses = module.n;
        styled = module.t;
        _extends = module.m;
        reactExports = module.r;
        useThemeProps = module.v;
        _objectWithoutPropertiesLoose = module._;
        jsxRuntimeExports = module.j;
        clsx = module.x;
        composeClasses = module.y;
      }],
      execute: function execute() {
        function getToolbarUtilityClass(slot) {
          return generateUtilityClass('MuiToolbar', slot);
        }
        generateUtilityClasses('MuiToolbar', ['root', 'gutters', 'regular', 'dense']);
        var _excluded = ["className", "component", "disableGutters", "variant"];
        var useUtilityClasses = function useUtilityClasses(ownerState) {
          var classes = ownerState.classes,
            disableGutters = ownerState.disableGutters,
            variant = ownerState.variant;
          var slots = {
            root: ['root', !disableGutters && 'gutters', variant]
          };
          return composeClasses(slots, getToolbarUtilityClass, classes);
        };
        var ToolbarRoot = styled('div', {
          name: 'MuiToolbar',
          slot: 'Root',
          overridesResolver: function overridesResolver(props, styles) {
            var ownerState = props.ownerState;
            return [styles.root, !ownerState.disableGutters && styles.gutters, styles[ownerState.variant]];
          }
        })(function (_ref) {
          var theme = _ref.theme,
            ownerState = _ref.ownerState;
          return _extends({
            position: 'relative',
            display: 'flex',
            alignItems: 'center'
          }, !ownerState.disableGutters && _defineProperty({
            paddingLeft: theme.spacing(2),
            paddingRight: theme.spacing(2)
          }, theme.breakpoints.up('sm'), {
            paddingLeft: theme.spacing(3),
            paddingRight: theme.spacing(3)
          }), ownerState.variant === 'dense' && {
            minHeight: 48
          });
        }, function (_ref3) {
          var theme = _ref3.theme,
            ownerState = _ref3.ownerState;
          return ownerState.variant === 'regular' && theme.mixins.toolbar;
        });
        var Toolbar = /*#__PURE__*/reactExports.forwardRef(function Toolbar(inProps, ref) {
          var props = useThemeProps({
            props: inProps,
            name: 'MuiToolbar'
          });
          var className = props.className,
            _props$component = props.component,
            component = _props$component === void 0 ? 'div' : _props$component,
            _props$disableGutters = props.disableGutters,
            disableGutters = _props$disableGutters === void 0 ? false : _props$disableGutters,
            _props$variant = props.variant,
            variant = _props$variant === void 0 ? 'regular' : _props$variant,
            other = _objectWithoutPropertiesLoose(props, _excluded);
          var ownerState = _extends({}, props, {
            component: component,
            disableGutters: disableGutters,
            variant: variant
          });
          var classes = useUtilityClasses(ownerState);
          return /*#__PURE__*/jsxRuntimeExports.jsx(ToolbarRoot, _extends({
            as: component,
            className: clsx(classes.root, className),
            ref: ref,
            ownerState: ownerState
          }, other));
        });
        var Toolbar$1 = exports('T', Toolbar);
      }
    };
  });
})();
