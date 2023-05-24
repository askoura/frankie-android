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
  System.register(['./index-legacy-2ed052c8.js', './common-legacy-fd659671.js'], function (exports, module) {
    'use strict';

    var generateUtilityClass, generateUtilityClasses, styled, _extends, reactExports, _objectWithoutPropertiesLoose, useControlled, jsxRuntimeExports, clsx, capitalize, composeClasses, useThemeProps, ButtonBase, useFormControl, formControlState, Typography;
    return {
      setters: [function (module) {
        generateUtilityClass = module.q;
        generateUtilityClasses = module.n;
        styled = module.t;
        _extends = module.m;
        reactExports = module.r;
        _objectWithoutPropertiesLoose = module._;
        useControlled = module.aC;
        jsxRuntimeExports = module.j;
        clsx = module.x;
        capitalize = module.W;
        composeClasses = module.y;
        useThemeProps = module.v;
      }, function (module) {
        ButtonBase = module.t;
        useFormControl = module.a0;
        formControlState = module.a1;
        Typography = module.T;
      }],
      execute: function execute() {
        function getSwitchBaseUtilityClass(slot) {
          return generateUtilityClass('PrivateSwitchBase', slot);
        }
        generateUtilityClasses('PrivateSwitchBase', ['root', 'checked', 'disabled', 'input', 'edgeStart', 'edgeEnd']);
        var _excluded$1 = ["autoFocus", "checked", "checkedIcon", "className", "defaultChecked", "disabled", "disableFocusRipple", "edge", "icon", "id", "inputProps", "inputRef", "name", "onBlur", "onChange", "onFocus", "readOnly", "required", "tabIndex", "type", "value"];
        var useUtilityClasses$1 = function useUtilityClasses$1(ownerState) {
          var classes = ownerState.classes,
            checked = ownerState.checked,
            disabled = ownerState.disabled,
            edge = ownerState.edge;
          var slots = {
            root: ['root', checked && 'checked', disabled && 'disabled', edge && "edge".concat(capitalize(edge))],
            input: ['input']
          };
          return composeClasses(slots, getSwitchBaseUtilityClass, classes);
        };
        var SwitchBaseRoot = styled(ButtonBase)(function (_ref2) {
          var ownerState = _ref2.ownerState;
          return _extends({
            padding: 9,
            borderRadius: '50%'
          }, ownerState.edge === 'start' && {
            marginLeft: ownerState.size === 'small' ? -3 : -12
          }, ownerState.edge === 'end' && {
            marginRight: ownerState.size === 'small' ? -3 : -12
          });
        });
        var SwitchBaseInput = styled('input')({
          cursor: 'inherit',
          position: 'absolute',
          opacity: 0,
          width: '100%',
          height: '100%',
          top: 0,
          left: 0,
          margin: 0,
          padding: 0,
          zIndex: 1
        });

        /**
         * @ignore - internal component.
         */
        var SwitchBase = /*#__PURE__*/reactExports.forwardRef(function SwitchBase(props, ref) {
          var autoFocus = props.autoFocus,
            checkedProp = props.checked,
            checkedIcon = props.checkedIcon,
            className = props.className,
            defaultChecked = props.defaultChecked,
            disabledProp = props.disabled,
            _props$disableFocusRi = props.disableFocusRipple,
            disableFocusRipple = _props$disableFocusRi === void 0 ? false : _props$disableFocusRi,
            _props$edge = props.edge,
            edge = _props$edge === void 0 ? false : _props$edge,
            icon = props.icon,
            id = props.id,
            inputProps = props.inputProps,
            inputRef = props.inputRef,
            name = props.name,
            onBlur = props.onBlur,
            onChange = props.onChange,
            onFocus = props.onFocus,
            readOnly = props.readOnly,
            _props$required = props.required,
            required = _props$required === void 0 ? false : _props$required,
            tabIndex = props.tabIndex,
            type = props.type,
            value = props.value,
            other = _objectWithoutPropertiesLoose(props, _excluded$1);
          var _useControlled = useControlled({
              controlled: checkedProp,
              default: Boolean(defaultChecked),
              name: 'SwitchBase',
              state: 'checked'
            }),
            _useControlled2 = _slicedToArray(_useControlled, 2),
            checked = _useControlled2[0],
            setCheckedState = _useControlled2[1];
          var muiFormControl = useFormControl();
          var handleFocus = function handleFocus(event) {
            if (onFocus) {
              onFocus(event);
            }
            if (muiFormControl && muiFormControl.onFocus) {
              muiFormControl.onFocus(event);
            }
          };
          var handleBlur = function handleBlur(event) {
            if (onBlur) {
              onBlur(event);
            }
            if (muiFormControl && muiFormControl.onBlur) {
              muiFormControl.onBlur(event);
            }
          };
          var handleInputChange = function handleInputChange(event) {
            // Workaround for https://github.com/facebook/react/issues/9023
            if (event.nativeEvent.defaultPrevented) {
              return;
            }
            var newChecked = event.target.checked;
            setCheckedState(newChecked);
            if (onChange) {
              // TODO v6: remove the second argument.
              onChange(event, newChecked);
            }
          };
          var disabled = disabledProp;
          if (muiFormControl) {
            if (typeof disabled === 'undefined') {
              disabled = muiFormControl.disabled;
            }
          }
          var hasLabelFor = type === 'checkbox' || type === 'radio';
          var ownerState = _extends({}, props, {
            checked: checked,
            disabled: disabled,
            disableFocusRipple: disableFocusRipple,
            edge: edge
          });
          var classes = useUtilityClasses$1(ownerState);
          return /*#__PURE__*/jsxRuntimeExports.jsxs(SwitchBaseRoot, _extends({
            component: "span",
            className: clsx(classes.root, className),
            centerRipple: true,
            focusRipple: !disableFocusRipple,
            disabled: disabled,
            tabIndex: null,
            role: undefined,
            onFocus: handleFocus,
            onBlur: handleBlur,
            ownerState: ownerState,
            ref: ref
          }, other, {
            children: [/*#__PURE__*/jsxRuntimeExports.jsx(SwitchBaseInput, _extends({
              autoFocus: autoFocus,
              checked: checkedProp,
              defaultChecked: defaultChecked,
              className: classes.input,
              disabled: disabled,
              id: hasLabelFor ? id : undefined,
              name: name,
              onChange: handleInputChange,
              readOnly: readOnly,
              ref: inputRef,
              required: required,
              ownerState: ownerState,
              tabIndex: tabIndex,
              type: type
            }, type === 'checkbox' && value === undefined ? {} : {
              value: value
            }, inputProps)), checked ? checkedIcon : icon]
          }));
        });
        var SwitchBase$1 = exports('S', SwitchBase);
        function getFormControlLabelUtilityClasses(slot) {
          return generateUtilityClass('MuiFormControlLabel', slot);
        }
        var formControlLabelClasses = generateUtilityClasses('MuiFormControlLabel', ['root', 'labelPlacementStart', 'labelPlacementTop', 'labelPlacementBottom', 'disabled', 'label', 'error', 'required', 'asterisk']);
        var formControlLabelClasses$1 = formControlLabelClasses;
        var _excluded = ["checked", "className", "componentsProps", "control", "disabled", "disableTypography", "inputRef", "label", "labelPlacement", "name", "onChange", "required", "slotProps", "value"];
        var useUtilityClasses = function useUtilityClasses(ownerState) {
          var classes = ownerState.classes,
            disabled = ownerState.disabled,
            labelPlacement = ownerState.labelPlacement,
            error = ownerState.error,
            required = ownerState.required;
          var slots = {
            root: ['root', disabled && 'disabled', "labelPlacement".concat(capitalize(labelPlacement)), error && 'error', required && 'required'],
            label: ['label', disabled && 'disabled'],
            asterisk: ['asterisk', error && 'error']
          };
          return composeClasses(slots, getFormControlLabelUtilityClasses, classes);
        };
        var FormControlLabelRoot = styled('label', {
          name: 'MuiFormControlLabel',
          slot: 'Root',
          overridesResolver: function overridesResolver(props, styles) {
            var ownerState = props.ownerState;
            return [_defineProperty({}, "& .".concat(formControlLabelClasses$1.label), styles.label), styles.root, styles["labelPlacement".concat(capitalize(ownerState.labelPlacement))]];
          }
        })(function (_ref4) {
          var theme = _ref4.theme,
            ownerState = _ref4.ownerState;
          return _extends(_defineProperty({
            display: 'inline-flex',
            alignItems: 'center',
            cursor: 'pointer',
            // For correct alignment with the text.
            verticalAlign: 'middle',
            WebkitTapHighlightColor: 'transparent',
            marginLeft: -11,
            marginRight: 16
          }, "&.".concat(formControlLabelClasses$1.disabled), {
            cursor: 'default'
          }), ownerState.labelPlacement === 'start' && {
            flexDirection: 'row-reverse',
            marginLeft: 16,
            // used for row presentation of radio/checkbox
            marginRight: -11
          }, ownerState.labelPlacement === 'top' && {
            flexDirection: 'column-reverse',
            marginLeft: 16
          }, ownerState.labelPlacement === 'bottom' && {
            flexDirection: 'column',
            marginLeft: 16
          }, _defineProperty({}, "& .".concat(formControlLabelClasses$1.label), _defineProperty({}, "&.".concat(formControlLabelClasses$1.disabled), {
            color: (theme.vars || theme).palette.text.disabled
          })));
        });
        var AsteriskComponent = styled('span', {
          name: 'MuiFormControlLabel',
          slot: 'Asterisk',
          overridesResolver: function overridesResolver(props, styles) {
            return styles.asterisk;
          }
        })(function (_ref5) {
          var theme = _ref5.theme;
          return _defineProperty({}, "&.".concat(formControlLabelClasses$1.error), {
            color: (theme.vars || theme).palette.error.main
          });
        });

        /**
         * Drop-in replacement of the `Radio`, `Switch` and `Checkbox` component.
         * Use this component if you want to display an extra label.
         */
        var FormControlLabel = /*#__PURE__*/reactExports.forwardRef(function FormControlLabel(inProps, ref) {
          var _ref, _slotProps$typography;
          var props = useThemeProps({
            props: inProps,
            name: 'MuiFormControlLabel'
          });
          var className = props.className,
            _props$componentsProp = props.componentsProps,
            componentsProps = _props$componentsProp === void 0 ? {} : _props$componentsProp,
            control = props.control,
            disabledProp = props.disabled,
            disableTypography = props.disableTypography,
            labelProp = props.label,
            _props$labelPlacement = props.labelPlacement,
            labelPlacement = _props$labelPlacement === void 0 ? 'end' : _props$labelPlacement,
            requiredProp = props.required,
            _props$slotProps = props.slotProps,
            slotProps = _props$slotProps === void 0 ? {} : _props$slotProps,
            other = _objectWithoutPropertiesLoose(props, _excluded);
          var muiFormControl = useFormControl();
          var disabled = (_ref = disabledProp != null ? disabledProp : control.props.disabled) != null ? _ref : muiFormControl == null ? void 0 : muiFormControl.disabled;
          var required = requiredProp != null ? requiredProp : control.props.required;
          var controlProps = {
            disabled: disabled,
            required: required
          };
          ['checked', 'name', 'onChange', 'value', 'inputRef'].forEach(function (key) {
            if (typeof control.props[key] === 'undefined' && typeof props[key] !== 'undefined') {
              controlProps[key] = props[key];
            }
          });
          var fcs = formControlState({
            props: props,
            muiFormControl: muiFormControl,
            states: ['error']
          });
          var ownerState = _extends({}, props, {
            disabled: disabled,
            labelPlacement: labelPlacement,
            required: required,
            error: fcs.error
          });
          var classes = useUtilityClasses(ownerState);
          var typographySlotProps = (_slotProps$typography = slotProps.typography) != null ? _slotProps$typography : componentsProps.typography;
          var label = labelProp;
          if (label != null && label.type !== Typography && !disableTypography) {
            label = /*#__PURE__*/jsxRuntimeExports.jsx(Typography, _extends({
              component: "span"
            }, typographySlotProps, {
              className: clsx(classes.label, typographySlotProps == null ? void 0 : typographySlotProps.className),
              children: label
            }));
          }
          return /*#__PURE__*/jsxRuntimeExports.jsxs(FormControlLabelRoot, _extends({
            className: clsx(classes.root, className),
            ownerState: ownerState,
            ref: ref
          }, other, {
            children: [/*#__PURE__*/reactExports.cloneElement(control, controlProps), label, required && /*#__PURE__*/jsxRuntimeExports.jsxs(AsteriskComponent, {
              ownerState: ownerState,
              "aria-hidden": true,
              className: classes.asterisk,
              children: ["\u2009", '*']
            })]
          }));
        });
        var FormControlLabel$1 = exports('F', FormControlLabel);
      }
    };
  });
})();
