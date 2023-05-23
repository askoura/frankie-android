;
(function () {
  function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
  function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
  System.register(['./index-legacy-99c8bdce.js', './common-legacy-ddf67078.js'], function (exports, module) {
    'use strict';

    var generateUtilityClass, generateUtilityClasses, styled, _extends, capitalize, reactExports, useThemeProps, _objectWithoutPropertiesLoose, isMuiElement, jsxRuntimeExports, clsx, composeClasses, rootShouldForwardProp, isAdornedStart, isFilled, FormControlContext, useFormControl, formControlState;
    return {
      setters: [function (module) {
        generateUtilityClass = module.q;
        generateUtilityClasses = module.n;
        styled = module.t;
        _extends = module.m;
        capitalize = module.W;
        reactExports = module.r;
        useThemeProps = module.v;
        _objectWithoutPropertiesLoose = module._;
        isMuiElement = module.bR;
        jsxRuntimeExports = module.j;
        clsx = module.x;
        composeClasses = module.y;
        rootShouldForwardProp = module.$;
      }, function (module) {
        isAdornedStart = module.a5;
        isFilled = module.a6;
        FormControlContext = module.a2;
        useFormControl = module.a0;
        formControlState = module.a1;
      }],
      execute: function execute() {
        function getFormControlUtilityClasses(slot) {
          return generateUtilityClass('MuiFormControl', slot);
        }
        generateUtilityClasses('MuiFormControl', ['root', 'marginNone', 'marginNormal', 'marginDense', 'fullWidth', 'disabled']);
        var _excluded$3 = ["children", "className", "color", "component", "disabled", "error", "focused", "fullWidth", "hiddenLabel", "margin", "required", "size", "variant"];
        var useUtilityClasses$3 = function useUtilityClasses$3(ownerState) {
          var classes = ownerState.classes,
            margin = ownerState.margin,
            fullWidth = ownerState.fullWidth;
          var slots = {
            root: ['root', margin !== 'none' && "margin".concat(capitalize(margin)), fullWidth && 'fullWidth']
          };
          return composeClasses(slots, getFormControlUtilityClasses, classes);
        };
        var FormControlRoot = styled('div', {
          name: 'MuiFormControl',
          slot: 'Root',
          overridesResolver: function overridesResolver(_ref, styles) {
            var ownerState = _ref.ownerState;
            return _extends({}, styles.root, styles["margin".concat(capitalize(ownerState.margin))], ownerState.fullWidth && styles.fullWidth);
          }
        })(function (_ref2) {
          var ownerState = _ref2.ownerState;
          return _extends({
            display: 'inline-flex',
            flexDirection: 'column',
            position: 'relative',
            // Reset fieldset default style.
            minWidth: 0,
            padding: 0,
            margin: 0,
            border: 0,
            verticalAlign: 'top'
          }, ownerState.margin === 'normal' && {
            marginTop: 16,
            marginBottom: 8
          }, ownerState.margin === 'dense' && {
            marginTop: 8,
            marginBottom: 4
          }, ownerState.fullWidth && {
            width: '100%'
          });
        });

        /**
         * Provides context such as filled/focused/error/required for form inputs.
         * Relying on the context provides high flexibility and ensures that the state always stays
         * consistent across the children of the `FormControl`.
         * This context is used by the following components:
         *
         *  - FormLabel
         *  - FormHelperText
         *  - Input
         *  - InputLabel
         *
         * You can find one composition example below and more going to [the demos](/material-ui/react-text-field/#components).
         *
         * ```jsx
         * <FormControl>
         *   <InputLabel htmlFor="my-input">Email address</InputLabel>
         *   <Input id="my-input" aria-describedby="my-helper-text" />
         *   <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
         * </FormControl>
         * ```
         *
         * ⚠️ Only one `InputBase` can be used within a FormControl because it creates visual inconsistencies.
         * For instance, only one input can be focused at the same time, the state shouldn't be shared.
         */
        var FormControl = /*#__PURE__*/reactExports.forwardRef(function FormControl(inProps, ref) {
          var props = useThemeProps({
            props: inProps,
            name: 'MuiFormControl'
          });
          var children = props.children,
            className = props.className,
            _props$color = props.color,
            color = _props$color === void 0 ? 'primary' : _props$color,
            _props$component = props.component,
            component = _props$component === void 0 ? 'div' : _props$component,
            _props$disabled = props.disabled,
            disabled = _props$disabled === void 0 ? false : _props$disabled,
            _props$error = props.error,
            error = _props$error === void 0 ? false : _props$error,
            visuallyFocused = props.focused,
            _props$fullWidth = props.fullWidth,
            fullWidth = _props$fullWidth === void 0 ? false : _props$fullWidth,
            _props$hiddenLabel = props.hiddenLabel,
            hiddenLabel = _props$hiddenLabel === void 0 ? false : _props$hiddenLabel,
            _props$margin = props.margin,
            margin = _props$margin === void 0 ? 'none' : _props$margin,
            _props$required = props.required,
            required = _props$required === void 0 ? false : _props$required,
            _props$size = props.size,
            size = _props$size === void 0 ? 'medium' : _props$size,
            _props$variant = props.variant,
            variant = _props$variant === void 0 ? 'outlined' : _props$variant,
            other = _objectWithoutPropertiesLoose(props, _excluded$3);
          var ownerState = _extends({}, props, {
            color: color,
            component: component,
            disabled: disabled,
            error: error,
            fullWidth: fullWidth,
            hiddenLabel: hiddenLabel,
            margin: margin,
            required: required,
            size: size,
            variant: variant
          });
          var classes = useUtilityClasses$3(ownerState);
          var _reactExports$useStat = reactExports.useState(function () {
              // We need to iterate through the children and find the Input in order
              // to fully support server-side rendering.
              var initialAdornedStart = false;
              if (children) {
                reactExports.Children.forEach(children, function (child) {
                  if (!isMuiElement(child, ['Input', 'Select'])) {
                    return;
                  }
                  var input = isMuiElement(child, ['Select']) ? child.props.input : child;
                  if (input && isAdornedStart(input.props)) {
                    initialAdornedStart = true;
                  }
                });
              }
              return initialAdornedStart;
            }),
            _reactExports$useStat2 = _slicedToArray(_reactExports$useStat, 2),
            adornedStart = _reactExports$useStat2[0],
            setAdornedStart = _reactExports$useStat2[1];
          var _reactExports$useStat3 = reactExports.useState(function () {
              // We need to iterate through the children and find the Input in order
              // to fully support server-side rendering.
              var initialFilled = false;
              if (children) {
                reactExports.Children.forEach(children, function (child) {
                  if (!isMuiElement(child, ['Input', 'Select'])) {
                    return;
                  }
                  if (isFilled(child.props, true) || isFilled(child.props.inputProps, true)) {
                    initialFilled = true;
                  }
                });
              }
              return initialFilled;
            }),
            _reactExports$useStat4 = _slicedToArray(_reactExports$useStat3, 2),
            filled = _reactExports$useStat4[0],
            setFilled = _reactExports$useStat4[1];
          var _reactExports$useStat5 = reactExports.useState(false),
            _reactExports$useStat6 = _slicedToArray(_reactExports$useStat5, 2),
            focusedState = _reactExports$useStat6[0],
            setFocused = _reactExports$useStat6[1];
          if (disabled && focusedState) {
            setFocused(false);
          }
          var focused = visuallyFocused !== undefined && !disabled ? visuallyFocused : focusedState;
          var registerEffect;
          var childContext = reactExports.useMemo(function () {
            return {
              adornedStart: adornedStart,
              setAdornedStart: setAdornedStart,
              color: color,
              disabled: disabled,
              error: error,
              filled: filled,
              focused: focused,
              fullWidth: fullWidth,
              hiddenLabel: hiddenLabel,
              size: size,
              onBlur: function onBlur() {
                setFocused(false);
              },
              onEmpty: function onEmpty() {
                setFilled(false);
              },
              onFilled: function onFilled() {
                setFilled(true);
              },
              onFocus: function onFocus() {
                setFocused(true);
              },
              registerEffect: registerEffect,
              required: required,
              variant: variant
            };
          }, [adornedStart, color, disabled, error, filled, focused, fullWidth, hiddenLabel, registerEffect, required, size, variant]);
          return /*#__PURE__*/jsxRuntimeExports.jsx(FormControlContext.Provider, {
            value: childContext,
            children: /*#__PURE__*/jsxRuntimeExports.jsx(FormControlRoot, _extends({
              as: component,
              ownerState: ownerState,
              className: clsx(classes.root, className),
              ref: ref
            }, other, {
              children: children
            }))
          });
        });
        var FormControl$1 = exports('F', FormControl);
        function getFormHelperTextUtilityClasses(slot) {
          return generateUtilityClass('MuiFormHelperText', slot);
        }
        var formHelperTextClasses = generateUtilityClasses('MuiFormHelperText', ['root', 'error', 'disabled', 'sizeSmall', 'sizeMedium', 'contained', 'focused', 'filled', 'required']);
        var formHelperTextClasses$1 = formHelperTextClasses;
        var _span;
        var _excluded$2 = ["children", "className", "component", "disabled", "error", "filled", "focused", "margin", "required", "variant"];
        var useUtilityClasses$2 = function useUtilityClasses$2(ownerState) {
          var classes = ownerState.classes,
            contained = ownerState.contained,
            size = ownerState.size,
            disabled = ownerState.disabled,
            error = ownerState.error,
            filled = ownerState.filled,
            focused = ownerState.focused,
            required = ownerState.required;
          var slots = {
            root: ['root', disabled && 'disabled', error && 'error', size && "size".concat(capitalize(size)), contained && 'contained', focused && 'focused', filled && 'filled', required && 'required']
          };
          return composeClasses(slots, getFormHelperTextUtilityClasses, classes);
        };
        var FormHelperTextRoot = styled('p', {
          name: 'MuiFormHelperText',
          slot: 'Root',
          overridesResolver: function overridesResolver(props, styles) {
            var ownerState = props.ownerState;
            return [styles.root, ownerState.size && styles["size".concat(capitalize(ownerState.size))], ownerState.contained && styles.contained, ownerState.filled && styles.filled];
          }
        })(function (_ref3) {
          var _extends2;
          var theme = _ref3.theme,
            ownerState = _ref3.ownerState;
          return _extends({
            color: (theme.vars || theme).palette.text.secondary
          }, theme.typography.caption, (_extends2 = {
            textAlign: 'left',
            marginTop: 3,
            marginRight: 0,
            marginBottom: 0,
            marginLeft: 0
          }, _defineProperty(_extends2, "&.".concat(formHelperTextClasses$1.disabled), {
            color: (theme.vars || theme).palette.text.disabled
          }), _defineProperty(_extends2, "&.".concat(formHelperTextClasses$1.error), {
            color: (theme.vars || theme).palette.error.main
          }), _extends2), ownerState.size === 'small' && {
            marginTop: 4
          }, ownerState.contained && {
            marginLeft: 14,
            marginRight: 14
          });
        });
        var FormHelperText = /*#__PURE__*/reactExports.forwardRef(function FormHelperText(inProps, ref) {
          var props = useThemeProps({
            props: inProps,
            name: 'MuiFormHelperText'
          });
          var children = props.children,
            className = props.className,
            _props$component2 = props.component,
            component = _props$component2 === void 0 ? 'p' : _props$component2,
            other = _objectWithoutPropertiesLoose(props, _excluded$2);
          var muiFormControl = useFormControl();
          var fcs = formControlState({
            props: props,
            muiFormControl: muiFormControl,
            states: ['variant', 'size', 'disabled', 'error', 'filled', 'focused', 'required']
          });
          var ownerState = _extends({}, props, {
            component: component,
            contained: fcs.variant === 'filled' || fcs.variant === 'outlined',
            variant: fcs.variant,
            size: fcs.size,
            disabled: fcs.disabled,
            error: fcs.error,
            filled: fcs.filled,
            focused: fcs.focused,
            required: fcs.required
          });
          var classes = useUtilityClasses$2(ownerState);
          return /*#__PURE__*/jsxRuntimeExports.jsx(FormHelperTextRoot, _extends({
            as: component,
            ownerState: ownerState,
            className: clsx(classes.root, className),
            ref: ref
          }, other, {
            children: children === ' ' ?
            // notranslate needed while Google Translate will not fix zero-width space issue
            _span || (_span = /*#__PURE__*/jsxRuntimeExports.jsx("span", {
              className: "notranslate",
              children: "\u200B"
            })) : children
          }));
        });
        var FormHelperText$1 = exports('a', FormHelperText);
        function getFormLabelUtilityClasses(slot) {
          return generateUtilityClass('MuiFormLabel', slot);
        }
        var formLabelClasses = generateUtilityClasses('MuiFormLabel', ['root', 'colorSecondary', 'focused', 'disabled', 'error', 'filled', 'required', 'asterisk']);
        var formLabelClasses$1 = formLabelClasses;
        var _excluded$1 = ["children", "className", "color", "component", "disabled", "error", "filled", "focused", "required"];
        var useUtilityClasses$1 = function useUtilityClasses$1(ownerState) {
          var classes = ownerState.classes,
            color = ownerState.color,
            focused = ownerState.focused,
            disabled = ownerState.disabled,
            error = ownerState.error,
            filled = ownerState.filled,
            required = ownerState.required;
          var slots = {
            root: ['root', "color".concat(capitalize(color)), disabled && 'disabled', error && 'error', filled && 'filled', focused && 'focused', required && 'required'],
            asterisk: ['asterisk', error && 'error']
          };
          return composeClasses(slots, getFormLabelUtilityClasses, classes);
        };
        var FormLabelRoot = styled('label', {
          name: 'MuiFormLabel',
          slot: 'Root',
          overridesResolver: function overridesResolver(_ref4, styles) {
            var ownerState = _ref4.ownerState;
            return _extends({}, styles.root, ownerState.color === 'secondary' && styles.colorSecondary, ownerState.filled && styles.filled);
          }
        })(function (_ref5) {
          var _extends3;
          var theme = _ref5.theme,
            ownerState = _ref5.ownerState;
          return _extends({
            color: (theme.vars || theme).palette.text.secondary
          }, theme.typography.body1, (_extends3 = {
            lineHeight: '1.4375em',
            padding: 0,
            position: 'relative'
          }, _defineProperty(_extends3, "&.".concat(formLabelClasses$1.focused), {
            color: (theme.vars || theme).palette[ownerState.color].main
          }), _defineProperty(_extends3, "&.".concat(formLabelClasses$1.disabled), {
            color: (theme.vars || theme).palette.text.disabled
          }), _defineProperty(_extends3, "&.".concat(formLabelClasses$1.error), {
            color: (theme.vars || theme).palette.error.main
          }), _extends3));
        });
        var AsteriskComponent = styled('span', {
          name: 'MuiFormLabel',
          slot: 'Asterisk',
          overridesResolver: function overridesResolver(props, styles) {
            return styles.asterisk;
          }
        })(function (_ref6) {
          var theme = _ref6.theme;
          return _defineProperty({}, "&.".concat(formLabelClasses$1.error), {
            color: (theme.vars || theme).palette.error.main
          });
        });
        var FormLabel = /*#__PURE__*/reactExports.forwardRef(function FormLabel(inProps, ref) {
          var props = useThemeProps({
            props: inProps,
            name: 'MuiFormLabel'
          });
          var children = props.children,
            className = props.className,
            _props$component3 = props.component,
            component = _props$component3 === void 0 ? 'label' : _props$component3,
            other = _objectWithoutPropertiesLoose(props, _excluded$1);
          var muiFormControl = useFormControl();
          var fcs = formControlState({
            props: props,
            muiFormControl: muiFormControl,
            states: ['color', 'required', 'focused', 'disabled', 'error', 'filled']
          });
          var ownerState = _extends({}, props, {
            color: fcs.color || 'primary',
            component: component,
            disabled: fcs.disabled,
            error: fcs.error,
            filled: fcs.filled,
            focused: fcs.focused,
            required: fcs.required
          });
          var classes = useUtilityClasses$1(ownerState);
          return /*#__PURE__*/jsxRuntimeExports.jsxs(FormLabelRoot, _extends({
            as: component,
            ownerState: ownerState,
            className: clsx(classes.root, className),
            ref: ref
          }, other, {
            children: [children, fcs.required && /*#__PURE__*/jsxRuntimeExports.jsxs(AsteriskComponent, {
              ownerState: ownerState,
              "aria-hidden": true,
              className: classes.asterisk,
              children: ["\u2009", '*']
            })]
          }));
        });
        var FormLabel$1 = exports('b', FormLabel);
        function getInputLabelUtilityClasses(slot) {
          return generateUtilityClass('MuiInputLabel', slot);
        }
        generateUtilityClasses('MuiInputLabel', ['root', 'focused', 'disabled', 'error', 'required', 'asterisk', 'formControl', 'sizeSmall', 'shrink', 'animated', 'standard', 'filled', 'outlined']);
        var _excluded = ["disableAnimation", "margin", "shrink", "variant", "className"];
        var useUtilityClasses = function useUtilityClasses(ownerState) {
          var classes = ownerState.classes,
            formControl = ownerState.formControl,
            size = ownerState.size,
            shrink = ownerState.shrink,
            disableAnimation = ownerState.disableAnimation,
            variant = ownerState.variant,
            required = ownerState.required;
          var slots = {
            root: ['root', formControl && 'formControl', !disableAnimation && 'animated', shrink && 'shrink', size === 'small' && 'sizeSmall', variant],
            asterisk: [required && 'asterisk']
          };
          var composedClasses = composeClasses(slots, getInputLabelUtilityClasses, classes);
          return _extends({}, classes, composedClasses);
        };
        var InputLabelRoot = styled(FormLabel$1, {
          shouldForwardProp: function shouldForwardProp(prop) {
            return rootShouldForwardProp(prop) || prop === 'classes';
          },
          name: 'MuiInputLabel',
          slot: 'Root',
          overridesResolver: function overridesResolver(props, styles) {
            var ownerState = props.ownerState;
            return [_defineProperty({}, "& .".concat(formLabelClasses$1.asterisk), styles.asterisk), styles.root, ownerState.formControl && styles.formControl, ownerState.size === 'small' && styles.sizeSmall, ownerState.shrink && styles.shrink, !ownerState.disableAnimation && styles.animated, styles[ownerState.variant]];
          }
        })(function (_ref9) {
          var theme = _ref9.theme,
            ownerState = _ref9.ownerState;
          return _extends({
            display: 'block',
            transformOrigin: 'top left',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            maxWidth: '100%'
          }, ownerState.formControl && {
            position: 'absolute',
            left: 0,
            top: 0,
            // slight alteration to spec spacing to match visual spec result
            transform: 'translate(0, 20px) scale(1)'
          }, ownerState.size === 'small' && {
            // Compensation for the `Input.inputSizeSmall` style.
            transform: 'translate(0, 17px) scale(1)'
          }, ownerState.shrink && {
            transform: 'translate(0, -1.5px) scale(0.75)',
            transformOrigin: 'top left',
            maxWidth: '133%'
          }, !ownerState.disableAnimation && {
            transition: theme.transitions.create(['color', 'transform', 'max-width'], {
              duration: theme.transitions.duration.shorter,
              easing: theme.transitions.easing.easeOut
            })
          }, ownerState.variant === 'filled' && _extends({
            // Chrome's autofill feature gives the input field a yellow background.
            // Since the input field is behind the label in the HTML tree,
            // the input field is drawn last and hides the label with an opaque background color.
            // zIndex: 1 will raise the label above opaque background-colors of input.
            zIndex: 1,
            pointerEvents: 'none',
            transform: 'translate(12px, 16px) scale(1)',
            maxWidth: 'calc(100% - 24px)'
          }, ownerState.size === 'small' && {
            transform: 'translate(12px, 13px) scale(1)'
          }, ownerState.shrink && _extends({
            userSelect: 'none',
            pointerEvents: 'auto',
            transform: 'translate(12px, 7px) scale(0.75)',
            maxWidth: 'calc(133% - 24px)'
          }, ownerState.size === 'small' && {
            transform: 'translate(12px, 4px) scale(0.75)'
          })), ownerState.variant === 'outlined' && _extends({
            // see comment above on filled.zIndex
            zIndex: 1,
            pointerEvents: 'none',
            transform: 'translate(14px, 16px) scale(1)',
            maxWidth: 'calc(100% - 24px)'
          }, ownerState.size === 'small' && {
            transform: 'translate(14px, 9px) scale(1)'
          }, ownerState.shrink && {
            userSelect: 'none',
            pointerEvents: 'auto',
            // Theoretically, we should have (8+5)*2/0.75 = 34px
            // but it feels a better when it bleeds a bit on the left, so 32px.
            maxWidth: 'calc(133% - 32px)',
            transform: 'translate(14px, -9px) scale(0.75)'
          }));
        });
        var InputLabel = /*#__PURE__*/reactExports.forwardRef(function InputLabel(inProps, ref) {
          var props = useThemeProps({
            name: 'MuiInputLabel',
            props: inProps
          });
          var _props$disableAnimati = props.disableAnimation,
            disableAnimation = _props$disableAnimati === void 0 ? false : _props$disableAnimati,
            shrinkProp = props.shrink,
            className = props.className,
            other = _objectWithoutPropertiesLoose(props, _excluded);
          var muiFormControl = useFormControl();
          var shrink = shrinkProp;
          if (typeof shrink === 'undefined' && muiFormControl) {
            shrink = muiFormControl.filled || muiFormControl.focused || muiFormControl.adornedStart;
          }
          var fcs = formControlState({
            props: props,
            muiFormControl: muiFormControl,
            states: ['size', 'variant', 'required']
          });
          var ownerState = _extends({}, props, {
            disableAnimation: disableAnimation,
            formControl: muiFormControl,
            shrink: shrink,
            size: fcs.size,
            variant: fcs.variant,
            required: fcs.required
          });
          var classes = useUtilityClasses(ownerState);
          return /*#__PURE__*/jsxRuntimeExports.jsx(InputLabelRoot, _extends({
            "data-shrink": shrink,
            ownerState: ownerState,
            ref: ref,
            className: clsx(classes.root, className)
          }, other, {
            classes: classes
          }));
        });
        var InputLabel$1 = exports('I', InputLabel);
      }
    };
  });
})();
