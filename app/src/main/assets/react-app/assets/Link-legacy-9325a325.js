;
(function () {
  function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
  function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
  System.register(['./index-legacy-13317357.js', './common-legacy-88dbaa5f.js'], function (exports, module) {
    'use strict';

    var generateUtilityClasses, generateUtilityClass, getPath, alpha, styled, capitalize, _extends, reactExports, useThemeProps, _objectWithoutPropertiesLoose, useIsFocusVisible, useForkRef, jsxRuntimeExports, clsx, composeClasses, Typography;
    return {
      setters: [function (module) {
        generateUtilityClasses = module.n;
        generateUtilityClass = module.q;
        getPath = module.as;
        alpha = module.at;
        styled = module.t;
        capitalize = module.W;
        _extends = module.m;
        reactExports = module.r;
        useThemeProps = module.v;
        _objectWithoutPropertiesLoose = module._;
        useIsFocusVisible = module.au;
        useForkRef = module.X;
        jsxRuntimeExports = module.j;
        clsx = module.x;
        composeClasses = module.y;
      }, function (module) {
        Typography = module.T;
      }],
      execute: function execute() {
        function getLinkUtilityClass(slot) {
          return generateUtilityClass('MuiLink', slot);
        }
        var linkClasses = generateUtilityClasses('MuiLink', ['root', 'underlineNone', 'underlineHover', 'underlineAlways', 'button', 'focusVisible']);
        var linkClasses$1 = linkClasses;
        var colorTransformations = {
          primary: 'primary.main',
          textPrimary: 'text.primary',
          secondary: 'secondary.main',
          textSecondary: 'text.secondary',
          error: 'error.main'
        };
        var transformDeprecatedColors = function transformDeprecatedColors(color) {
          return colorTransformations[color] || color;
        };
        var getTextDecoration = function getTextDecoration(_ref) {
          var theme = _ref.theme,
            ownerState = _ref.ownerState;
          var transformedColor = transformDeprecatedColors(ownerState.color);
          var color = getPath(theme, "palette.".concat(transformedColor), false) || ownerState.color;
          var channelColor = getPath(theme, "palette.".concat(transformedColor, "Channel"));
          if ('vars' in theme && channelColor) {
            return "rgba(".concat(channelColor, " / 0.4)");
          }
          return alpha(color, 0.4);
        };
        var getTextDecoration$1 = getTextDecoration;
        var _excluded = ["className", "color", "component", "onBlur", "onFocus", "TypographyClasses", "underline", "variant", "sx"];
        var useUtilityClasses = function useUtilityClasses(ownerState) {
          var classes = ownerState.classes,
            component = ownerState.component,
            focusVisible = ownerState.focusVisible,
            underline = ownerState.underline;
          var slots = {
            root: ['root', "underline".concat(capitalize(underline)), component === 'button' && 'button', focusVisible && 'focusVisible']
          };
          return composeClasses(slots, getLinkUtilityClass, classes);
        };
        var LinkRoot = styled(Typography, {
          name: 'MuiLink',
          slot: 'Root',
          overridesResolver: function overridesResolver(props, styles) {
            var ownerState = props.ownerState;
            return [styles.root, styles["underline".concat(capitalize(ownerState.underline))], ownerState.component === 'button' && styles.button];
          }
        })(function (_ref2) {
          var theme = _ref2.theme,
            ownerState = _ref2.ownerState;
          return _extends({}, ownerState.underline === 'none' && {
            textDecoration: 'none'
          }, ownerState.underline === 'hover' && {
            textDecoration: 'none',
            '&:hover': {
              textDecoration: 'underline'
            }
          }, ownerState.underline === 'always' && _extends({
            textDecoration: 'underline'
          }, ownerState.color !== 'inherit' && {
            textDecorationColor: getTextDecoration$1({
              theme: theme,
              ownerState: ownerState
            })
          }, {
            '&:hover': {
              textDecorationColor: 'inherit'
            }
          }), ownerState.component === 'button' && _defineProperty({
            position: 'relative',
            WebkitTapHighlightColor: 'transparent',
            backgroundColor: 'transparent',
            // Reset default value
            // We disable the focus ring for mouse, touch and keyboard users.
            outline: 0,
            border: 0,
            margin: 0,
            // Remove the margin in Safari
            borderRadius: 0,
            padding: 0,
            // Remove the padding in Firefox
            cursor: 'pointer',
            userSelect: 'none',
            verticalAlign: 'middle',
            MozAppearance: 'none',
            // Reset
            WebkitAppearance: 'none',
            // Reset
            '&::-moz-focus-inner': {
              borderStyle: 'none' // Remove Firefox dotted outline.
            }
          }, "&.".concat(linkClasses$1.focusVisible), {
            outline: 'auto'
          }));
        });
        var Link = /*#__PURE__*/reactExports.forwardRef(function Link(inProps, ref) {
          var props = useThemeProps({
            props: inProps,
            name: 'MuiLink'
          });
          var className = props.className,
            _props$color = props.color,
            color = _props$color === void 0 ? 'primary' : _props$color,
            _props$component = props.component,
            component = _props$component === void 0 ? 'a' : _props$component,
            onBlur = props.onBlur,
            onFocus = props.onFocus,
            TypographyClasses = props.TypographyClasses,
            _props$underline = props.underline,
            underline = _props$underline === void 0 ? 'always' : _props$underline,
            _props$variant = props.variant,
            variant = _props$variant === void 0 ? 'inherit' : _props$variant,
            sx = props.sx,
            other = _objectWithoutPropertiesLoose(props, _excluded);
          var _useIsFocusVisible = useIsFocusVisible(),
            isFocusVisibleRef = _useIsFocusVisible.isFocusVisibleRef,
            handleBlurVisible = _useIsFocusVisible.onBlur,
            handleFocusVisible = _useIsFocusVisible.onFocus,
            focusVisibleRef = _useIsFocusVisible.ref;
          var _reactExports$useStat = reactExports.useState(false),
            _reactExports$useStat2 = _slicedToArray(_reactExports$useStat, 2),
            focusVisible = _reactExports$useStat2[0],
            setFocusVisible = _reactExports$useStat2[1];
          var handlerRef = useForkRef(ref, focusVisibleRef);
          var handleBlur = function handleBlur(event) {
            handleBlurVisible(event);
            if (isFocusVisibleRef.current === false) {
              setFocusVisible(false);
            }
            if (onBlur) {
              onBlur(event);
            }
          };
          var handleFocus = function handleFocus(event) {
            handleFocusVisible(event);
            if (isFocusVisibleRef.current === true) {
              setFocusVisible(true);
            }
            if (onFocus) {
              onFocus(event);
            }
          };
          var ownerState = _extends({}, props, {
            color: color,
            component: component,
            focusVisible: focusVisible,
            underline: underline,
            variant: variant
          });
          var classes = useUtilityClasses(ownerState);
          return /*#__PURE__*/jsxRuntimeExports.jsx(LinkRoot, _extends({
            color: color,
            className: clsx(classes.root, className),
            classes: TypographyClasses,
            component: component,
            onBlur: handleBlur,
            onFocus: handleFocus,
            ref: handlerRef,
            ownerState: ownerState,
            variant: variant,
            sx: [].concat(_toConsumableArray(!Object.keys(colorTransformations).includes(color) ? [{
              color: color
            }] : []), _toConsumableArray(Array.isArray(sx) ? sx : [sx]))
          }, other));
        });
        var Link$1 = exports('L', Link);
      }
    };
  });
})();
