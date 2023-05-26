;
(function () {
  System.register(['./index-legacy-c8bd5c71.js', './common-legacy-fa39557a.js'], function (exports, module) {
    'use strict';

    var generateUtilityClass, generateUtilityClasses, styled, _extends, reactExports, _objectWithoutPropertiesLoose, useControlled, jsxRuntimeExports, clsx, capitalize, composeClasses, useThemeProps, ButtonBase, useFormControl, formControlState, Typography;
    return {
      setters: [module => {
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
      }, module => {
        ButtonBase = module.t;
        useFormControl = module.a0;
        formControlState = module.a1;
        Typography = module.T;
      }],
      execute: function () {
        function getSwitchBaseUtilityClass(slot) {
          return generateUtilityClass('PrivateSwitchBase', slot);
        }
        generateUtilityClasses('PrivateSwitchBase', ['root', 'checked', 'disabled', 'input', 'edgeStart', 'edgeEnd']);
        const _excluded$1 = ["autoFocus", "checked", "checkedIcon", "className", "defaultChecked", "disabled", "disableFocusRipple", "edge", "icon", "id", "inputProps", "inputRef", "name", "onBlur", "onChange", "onFocus", "readOnly", "required", "tabIndex", "type", "value"];
        const useUtilityClasses$1 = ownerState => {
          const {
            classes,
            checked,
            disabled,
            edge
          } = ownerState;
          const slots = {
            root: ['root', checked && 'checked', disabled && 'disabled', edge && `edge${capitalize(edge)}`],
            input: ['input']
          };
          return composeClasses(slots, getSwitchBaseUtilityClass, classes);
        };
        const SwitchBaseRoot = styled(ButtonBase)(({
          ownerState
        }) => _extends({
          padding: 9,
          borderRadius: '50%'
        }, ownerState.edge === 'start' && {
          marginLeft: ownerState.size === 'small' ? -3 : -12
        }, ownerState.edge === 'end' && {
          marginRight: ownerState.size === 'small' ? -3 : -12
        }));
        const SwitchBaseInput = styled('input')({
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
        const SwitchBase = /*#__PURE__*/reactExports.forwardRef(function SwitchBase(props, ref) {
          const {
              autoFocus,
              checked: checkedProp,
              checkedIcon,
              className,
              defaultChecked,
              disabled: disabledProp,
              disableFocusRipple = false,
              edge = false,
              icon,
              id,
              inputProps,
              inputRef,
              name,
              onBlur,
              onChange,
              onFocus,
              readOnly,
              required = false,
              tabIndex,
              type,
              value
            } = props,
            other = _objectWithoutPropertiesLoose(props, _excluded$1);
          const [checked, setCheckedState] = useControlled({
            controlled: checkedProp,
            default: Boolean(defaultChecked),
            name: 'SwitchBase',
            state: 'checked'
          });
          const muiFormControl = useFormControl();
          const handleFocus = event => {
            if (onFocus) {
              onFocus(event);
            }
            if (muiFormControl && muiFormControl.onFocus) {
              muiFormControl.onFocus(event);
            }
          };
          const handleBlur = event => {
            if (onBlur) {
              onBlur(event);
            }
            if (muiFormControl && muiFormControl.onBlur) {
              muiFormControl.onBlur(event);
            }
          };
          const handleInputChange = event => {
            // Workaround for https://github.com/facebook/react/issues/9023
            if (event.nativeEvent.defaultPrevented) {
              return;
            }
            const newChecked = event.target.checked;
            setCheckedState(newChecked);
            if (onChange) {
              // TODO v6: remove the second argument.
              onChange(event, newChecked);
            }
          };
          let disabled = disabledProp;
          if (muiFormControl) {
            if (typeof disabled === 'undefined') {
              disabled = muiFormControl.disabled;
            }
          }
          const hasLabelFor = type === 'checkbox' || type === 'radio';
          const ownerState = _extends({}, props, {
            checked,
            disabled,
            disableFocusRipple,
            edge
          });
          const classes = useUtilityClasses$1(ownerState);
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
              value
            }, inputProps)), checked ? checkedIcon : icon]
          }));
        });
        const SwitchBase$1 = exports('S', SwitchBase);
        function getFormControlLabelUtilityClasses(slot) {
          return generateUtilityClass('MuiFormControlLabel', slot);
        }
        const formControlLabelClasses = generateUtilityClasses('MuiFormControlLabel', ['root', 'labelPlacementStart', 'labelPlacementTop', 'labelPlacementBottom', 'disabled', 'label', 'error', 'required', 'asterisk']);
        const formControlLabelClasses$1 = formControlLabelClasses;
        const _excluded = ["checked", "className", "componentsProps", "control", "disabled", "disableTypography", "inputRef", "label", "labelPlacement", "name", "onChange", "required", "slotProps", "value"];
        const useUtilityClasses = ownerState => {
          const {
            classes,
            disabled,
            labelPlacement,
            error,
            required
          } = ownerState;
          const slots = {
            root: ['root', disabled && 'disabled', `labelPlacement${capitalize(labelPlacement)}`, error && 'error', required && 'required'],
            label: ['label', disabled && 'disabled'],
            asterisk: ['asterisk', error && 'error']
          };
          return composeClasses(slots, getFormControlLabelUtilityClasses, classes);
        };
        const FormControlLabelRoot = styled('label', {
          name: 'MuiFormControlLabel',
          slot: 'Root',
          overridesResolver: (props, styles) => {
            const {
              ownerState
            } = props;
            return [{
              [`& .${formControlLabelClasses$1.label}`]: styles.label
            }, styles.root, styles[`labelPlacement${capitalize(ownerState.labelPlacement)}`]];
          }
        })(({
          theme,
          ownerState
        }) => _extends({
          display: 'inline-flex',
          alignItems: 'center',
          cursor: 'pointer',
          // For correct alignment with the text.
          verticalAlign: 'middle',
          WebkitTapHighlightColor: 'transparent',
          marginLeft: -11,
          marginRight: 16,
          // used for row presentation of radio/checkbox
          [`&.${formControlLabelClasses$1.disabled}`]: {
            cursor: 'default'
          }
        }, ownerState.labelPlacement === 'start' && {
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
        }, {
          [`& .${formControlLabelClasses$1.label}`]: {
            [`&.${formControlLabelClasses$1.disabled}`]: {
              color: (theme.vars || theme).palette.text.disabled
            }
          }
        }));
        const AsteriskComponent = styled('span', {
          name: 'MuiFormControlLabel',
          slot: 'Asterisk',
          overridesResolver: (props, styles) => styles.asterisk
        })(({
          theme
        }) => ({
          [`&.${formControlLabelClasses$1.error}`]: {
            color: (theme.vars || theme).palette.error.main
          }
        }));

        /**
         * Drop-in replacement of the `Radio`, `Switch` and `Checkbox` component.
         * Use this component if you want to display an extra label.
         */
        const FormControlLabel = /*#__PURE__*/reactExports.forwardRef(function FormControlLabel(inProps, ref) {
          var _ref, _slotProps$typography;
          const props = useThemeProps({
            props: inProps,
            name: 'MuiFormControlLabel'
          });
          const {
              className,
              componentsProps = {},
              control,
              disabled: disabledProp,
              disableTypography,
              label: labelProp,
              labelPlacement = 'end',
              required: requiredProp,
              slotProps = {}
            } = props,
            other = _objectWithoutPropertiesLoose(props, _excluded);
          const muiFormControl = useFormControl();
          const disabled = (_ref = disabledProp != null ? disabledProp : control.props.disabled) != null ? _ref : muiFormControl == null ? void 0 : muiFormControl.disabled;
          const required = requiredProp != null ? requiredProp : control.props.required;
          const controlProps = {
            disabled,
            required
          };
          ['checked', 'name', 'onChange', 'value', 'inputRef'].forEach(key => {
            if (typeof control.props[key] === 'undefined' && typeof props[key] !== 'undefined') {
              controlProps[key] = props[key];
            }
          });
          const fcs = formControlState({
            props,
            muiFormControl,
            states: ['error']
          });
          const ownerState = _extends({}, props, {
            disabled,
            labelPlacement,
            required,
            error: fcs.error
          });
          const classes = useUtilityClasses(ownerState);
          const typographySlotProps = (_slotProps$typography = slotProps.typography) != null ? _slotProps$typography : componentsProps.typography;
          let label = labelProp;
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
        const FormControlLabel$1 = exports('F', FormControlLabel);
      }
    };
  });
})();
