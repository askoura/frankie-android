;
(function () {
  function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
  System.register(['./index-legacy-13317357.js', './common-legacy-88dbaa5f.js'], function (exports, module) {
    'use strict';

    var generateUtilityClasses, generateUtilityClass, styled, _extends, reactExports, useThemeProps, _objectWithoutPropertiesLoose, jsxRuntimeExports, clsx, capitalize, composeClasses, useFormControl, FormControlContext, Typography;
    return {
      setters: [function (module) {
        generateUtilityClasses = module.n;
        generateUtilityClass = module.q;
        styled = module.t;
        _extends = module.m;
        reactExports = module.r;
        useThemeProps = module.v;
        _objectWithoutPropertiesLoose = module._;
        jsxRuntimeExports = module.j;
        clsx = module.x;
        capitalize = module.W;
        composeClasses = module.y;
      }, function (module) {
        useFormControl = module.a0;
        FormControlContext = module.a2;
        Typography = module.T;
      }],
      execute: function execute() {
        function getInputAdornmentUtilityClass(slot) {
          return generateUtilityClass('MuiInputAdornment', slot);
        }
        var inputAdornmentClasses = generateUtilityClasses('MuiInputAdornment', ['root', 'filled', 'standard', 'outlined', 'positionStart', 'positionEnd', 'disablePointerEvents', 'hiddenLabel', 'sizeSmall']);
        var inputAdornmentClasses$1 = inputAdornmentClasses;
        var _span;
        var _excluded = ["children", "className", "component", "disablePointerEvents", "disableTypography", "position", "variant"];
        var overridesResolver = function overridesResolver(props, styles) {
          var ownerState = props.ownerState;
          return [styles.root, styles["position".concat(capitalize(ownerState.position))], ownerState.disablePointerEvents === true && styles.disablePointerEvents, styles[ownerState.variant]];
        };
        var useUtilityClasses = function useUtilityClasses(ownerState) {
          var classes = ownerState.classes,
            disablePointerEvents = ownerState.disablePointerEvents,
            hiddenLabel = ownerState.hiddenLabel,
            position = ownerState.position,
            size = ownerState.size,
            variant = ownerState.variant;
          var slots = {
            root: ['root', disablePointerEvents && 'disablePointerEvents', position && "position".concat(capitalize(position)), variant, hiddenLabel && 'hiddenLabel', size && "size".concat(capitalize(size))]
          };
          return composeClasses(slots, getInputAdornmentUtilityClass, classes);
        };
        var InputAdornmentRoot = styled('div', {
          name: 'MuiInputAdornment',
          slot: 'Root',
          overridesResolver: overridesResolver
        })(function (_ref) {
          var theme = _ref.theme,
            ownerState = _ref.ownerState;
          return _extends({
            display: 'flex',
            height: '0.01em',
            // Fix IE11 flexbox alignment. To remove at some point.
            maxHeight: '2em',
            alignItems: 'center',
            whiteSpace: 'nowrap',
            color: (theme.vars || theme).palette.action.active
          }, ownerState.variant === 'filled' && _defineProperty({}, "&.".concat(inputAdornmentClasses$1.positionStart, "&:not(.").concat(inputAdornmentClasses$1.hiddenLabel, ")"), {
            marginTop: 16
          }), ownerState.position === 'start' && {
            // Styles applied to the root element if `position="start"`.
            marginRight: 8
          }, ownerState.position === 'end' && {
            // Styles applied to the root element if `position="end"`.
            marginLeft: 8
          }, ownerState.disablePointerEvents === true && {
            // Styles applied to the root element if `disablePointerEvents={true}`.
            pointerEvents: 'none'
          });
        });
        var InputAdornment = /*#__PURE__*/reactExports.forwardRef(function InputAdornment(inProps, ref) {
          var props = useThemeProps({
            props: inProps,
            name: 'MuiInputAdornment'
          });
          var children = props.children,
            className = props.className,
            _props$component = props.component,
            component = _props$component === void 0 ? 'div' : _props$component,
            _props$disablePointer = props.disablePointerEvents,
            disablePointerEvents = _props$disablePointer === void 0 ? false : _props$disablePointer,
            _props$disableTypogra = props.disableTypography,
            disableTypography = _props$disableTypogra === void 0 ? false : _props$disableTypogra,
            position = props.position,
            variantProp = props.variant,
            other = _objectWithoutPropertiesLoose(props, _excluded);
          var muiFormControl = useFormControl() || {};
          var variant = variantProp;
          if (variantProp && muiFormControl.variant) ;
          if (muiFormControl && !variant) {
            variant = muiFormControl.variant;
          }
          var ownerState = _extends({}, props, {
            hiddenLabel: muiFormControl.hiddenLabel,
            size: muiFormControl.size,
            disablePointerEvents: disablePointerEvents,
            position: position,
            variant: variant
          });
          var classes = useUtilityClasses(ownerState);
          return /*#__PURE__*/jsxRuntimeExports.jsx(FormControlContext.Provider, {
            value: null,
            children: /*#__PURE__*/jsxRuntimeExports.jsx(InputAdornmentRoot, _extends({
              as: component,
              ownerState: ownerState,
              className: clsx(classes.root, className),
              ref: ref
            }, other, {
              children: typeof children === 'string' && !disableTypography ? /*#__PURE__*/jsxRuntimeExports.jsx(Typography, {
                color: "text.secondary",
                children: children
              }) : /*#__PURE__*/jsxRuntimeExports.jsxs(reactExports.Fragment, {
                children: [position === 'start' ? /* notranslate needed while Google Translate will not fix zero-width space issue */_span || (_span = /*#__PURE__*/jsxRuntimeExports.jsx("span", {
                  className: "notranslate",
                  children: "\u200B"
                })) : null, children]
              })
            }))
          });
        });
        var InputAdornment$1 = exports('I', InputAdornment);
      }
    };
  });
})();
