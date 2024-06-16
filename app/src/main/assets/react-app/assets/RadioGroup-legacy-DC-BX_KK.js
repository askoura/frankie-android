;
(function () {
  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
  function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
  System.register(['./index-legacy-BjrVJ6CZ.js', './Android-legacy-BIX_jJYw.js', './RadioGroupContext-legacy-CkqcjUXC.js'], function (exports, module) {
    'use strict';

    var generateUtilityClasses, generateUtilityClass, capitalize, _extends, reactExports, _objectWithoutPropertiesLoose, jsxRuntimeExports, clsx, styled, useThemeProps, useFormControl, formControlState, Typography, Stack, composeClasses, useControlled, useForkRef, useId, RadioGroupContext;
    return {
      setters: [module => {
        generateUtilityClasses = module.q;
        generateUtilityClass = module.F;
        capitalize = module.h;
        _extends = module.y;
        reactExports = module.r;
        _objectWithoutPropertiesLoose = module.w;
        jsxRuntimeExports = module.m;
        clsx = module.E;
      }, module => {
        styled = module.s;
        useThemeProps = module.a;
        useFormControl = module.k;
        formControlState = module.U;
        Typography = module.m;
        Stack = module.W;
        composeClasses = module.c;
        useControlled = module.x;
        useForkRef = module.b;
        useId = module.j;
      }, module => {
        RadioGroupContext = module.R;
      }],
      execute: function execute() {
        function getFormControlLabelUtilityClasses(slot) {
          return generateUtilityClass('MuiFormControlLabel', slot);
        }
        const formControlLabelClasses = generateUtilityClasses('MuiFormControlLabel', ['root', 'labelPlacementStart', 'labelPlacementTop', 'labelPlacementBottom', 'disabled', 'label', 'error', 'required', 'asterisk']);
        const formControlLabelClasses$1 = formControlLabelClasses;
        const _excluded$2 = ["checked", "className", "componentsProps", "control", "disabled", "disableTypography", "inputRef", "label", "labelPlacement", "name", "onChange", "required", "slotProps", "value"];
        const useUtilityClasses$1 = ownerState => {
          const classes = ownerState.classes,
            disabled = ownerState.disabled,
            labelPlacement = ownerState.labelPlacement,
            error = ownerState.error,
            required = ownerState.required;
          const slots = {
            root: ["root", disabled && "disabled", `labelPlacement${capitalize(labelPlacement)}`, error && "error", required && "required"],
            label: ["label", disabled && "disabled"],
            asterisk: ["asterisk", error && "error"]
          };
          return composeClasses(slots, getFormControlLabelUtilityClasses, classes);
        };
        const FormControlLabelRoot = styled("label", {
          name: "MuiFormControlLabel",
          slot: "Root",
          overridesResolver: (props, styles) => {
            const ownerState = props.ownerState;
            return [{
              [`& .${formControlLabelClasses$1.label}`]: styles.label
            }, styles.root, styles[`labelPlacement${capitalize(ownerState.labelPlacement)}`]];
          }
        })(({
          theme,
          ownerState
        }) => _extends({
          display: "inline-flex",
          alignItems: "center",
          cursor: "pointer",
          // For correct alignment with the text.
          verticalAlign: "middle",
          WebkitTapHighlightColor: "transparent",
          marginLeft: -11,
          marginRight: 16,
          // used for row presentation of radio/checkbox
          [`&.${formControlLabelClasses$1.disabled}`]: {
            cursor: "default"
          }
        }, ownerState.labelPlacement === "start" && {
          flexDirection: "row-reverse",
          marginLeft: 16,
          // used for row presentation of radio/checkbox
          marginRight: -11
        }, ownerState.labelPlacement === "top" && {
          flexDirection: "column-reverse",
          marginLeft: 16
        }, ownerState.labelPlacement === "bottom" && {
          flexDirection: "column",
          marginLeft: 16
        }, {
          [`& .${formControlLabelClasses$1.label}`]: {
            [`&.${formControlLabelClasses$1.disabled}`]: {
              color: (theme.vars || theme).palette.text.disabled
            }
          }
        }));
        const AsteriskComponent = styled("span", {
          name: "MuiFormControlLabel",
          slot: "Asterisk",
          overridesResolver: (props, styles) => styles.asterisk
        })(({
          theme
        }) => ({
          [`&.${formControlLabelClasses$1.error}`]: {
            color: (theme.vars || theme).palette.error.main
          }
        }));
        const FormControlLabel = /* @__PURE__ */reactExports.forwardRef(function FormControlLabel2(inProps, ref) {
          var _ref, _slotProps$typography;
          const props = useThemeProps({
            props: inProps,
            name: "MuiFormControlLabel"
          });
          const className = props.className,
            _props$componentsProp = props.componentsProps,
            componentsProps = _props$componentsProp === void 0 ? {} : _props$componentsProp,
            control = props.control,
            disabledProp = props.disabled,
            disableTypography = props.disableTypography,
            labelProp = props.label,
            _props$labelPlacement = props.labelPlacement,
            labelPlacement = _props$labelPlacement === void 0 ? "end" : _props$labelPlacement,
            requiredProp = props.required,
            _props$slotProps = props.slotProps,
            slotProps = _props$slotProps === void 0 ? {} : _props$slotProps,
            other = _objectWithoutPropertiesLoose(props, _excluded$2);
          const muiFormControl = useFormControl();
          const disabled = (_ref = disabledProp != null ? disabledProp : control.props.disabled) != null ? _ref : muiFormControl == null ? void 0 : muiFormControl.disabled;
          const required = requiredProp != null ? requiredProp : control.props.required;
          const controlProps = {
            disabled,
            required
          };
          ["checked", "name", "onChange", "value", "inputRef"].forEach(key => {
            if (typeof control.props[key] === "undefined" && typeof props[key] !== "undefined") {
              controlProps[key] = props[key];
            }
          });
          const fcs = formControlState({
            props,
            muiFormControl,
            states: ["error"]
          });
          const ownerState = _extends({}, props, {
            disabled,
            labelPlacement,
            required,
            error: fcs.error
          });
          const classes = useUtilityClasses$1(ownerState);
          const typographySlotProps = (_slotProps$typography = slotProps.typography) != null ? _slotProps$typography : componentsProps.typography;
          let label = labelProp;
          if (label != null && label.type !== Typography && !disableTypography) {
            label = /* @__PURE__ */jsxRuntimeExports.jsx(Typography, _extends({
              component: "span"
            }, typographySlotProps, {
              className: clsx(classes.label, typographySlotProps == null ? void 0 : typographySlotProps.className),
              children: label
            }));
          }
          return /* @__PURE__ */jsxRuntimeExports.jsxs(FormControlLabelRoot, _extends({
            className: clsx(classes.root, className),
            ownerState,
            ref
          }, other, {
            children: [/* @__PURE__ */reactExports.cloneElement(control, controlProps), required ? /* @__PURE__ */jsxRuntimeExports.jsxs(Stack, {
              display: "block",
              children: [label, /* @__PURE__ */jsxRuntimeExports.jsxs(AsteriskComponent, {
                ownerState,
                "aria-hidden": true,
                className: classes.asterisk,
                children: [" ", "*"]
              })]
            }) : label]
          }));
        });
        const FormControlLabel$1 = exports("a", FormControlLabel);
        function getFormGroupUtilityClass(slot) {
          return generateUtilityClass('MuiFormGroup', slot);
        }
        generateUtilityClasses('MuiFormGroup', ['root', 'row', 'error']);
        const _excluded$1 = ["className", "row"];
        const useUtilityClasses = ownerState => {
          const classes = ownerState.classes,
            row = ownerState.row,
            error = ownerState.error;
          const slots = {
            root: ["root", row && "row", error && "error"]
          };
          return composeClasses(slots, getFormGroupUtilityClass, classes);
        };
        const FormGroupRoot = styled("div", {
          name: "MuiFormGroup",
          slot: "Root",
          overridesResolver: (props, styles) => {
            const ownerState = props.ownerState;
            return [styles.root, ownerState.row && styles.row];
          }
        })(({
          ownerState
        }) => _extends({
          display: "flex",
          flexDirection: "column",
          flexWrap: "wrap"
        }, ownerState.row && {
          flexDirection: "row"
        }));
        const FormGroup$1 = /* @__PURE__ */reactExports.forwardRef(function FormGroup2(inProps, ref) {
          const props = useThemeProps({
            props: inProps,
            name: "MuiFormGroup"
          });
          const className = props.className,
            _props$row = props.row,
            row = _props$row === void 0 ? false : _props$row,
            other = _objectWithoutPropertiesLoose(props, _excluded$1);
          const muiFormControl = useFormControl();
          const fcs = formControlState({
            props,
            muiFormControl,
            states: ["error"]
          });
          const ownerState = _extends({}, props, {
            row,
            error: fcs.error
          });
          const classes = useUtilityClasses(ownerState);
          return /* @__PURE__ */jsxRuntimeExports.jsx(FormGroupRoot, _extends({
            className: clsx(classes.root, className),
            ownerState,
            ref
          }, other));
        });
        const FormGroup$2 = FormGroup$1;
        const _excluded = ["actions", "children", "defaultValue", "name", "onChange", "value"];
        const RadioGroup = /* @__PURE__ */reactExports.forwardRef(function RadioGroup2(props, ref) {
          const actions = props.actions,
            children = props.children,
            defaultValue = props.defaultValue,
            nameProp = props.name,
            onChange = props.onChange,
            valueProp = props.value,
            other = _objectWithoutPropertiesLoose(props, _excluded);
          const rootRef = reactExports.useRef(null);
          const _useControlled = useControlled({
              controlled: valueProp,
              default: defaultValue,
              name: "RadioGroup"
            }),
            _useControlled2 = _slicedToArray(_useControlled, 2),
            value = _useControlled2[0],
            setValueState = _useControlled2[1];
          reactExports.useImperativeHandle(actions, () => ({
            focus: () => {
              let input = rootRef.current.querySelector("input:not(:disabled):checked");
              if (!input) {
                input = rootRef.current.querySelector("input:not(:disabled)");
              }
              if (input) {
                input.focus();
              }
            }
          }), []);
          const handleRef = useForkRef(ref, rootRef);
          const name = useId(nameProp);
          const contextValue = reactExports.useMemo(() => ({
            name,
            onChange(event) {
              setValueState(event.target.value);
              if (onChange) {
                onChange(event, event.target.value);
              }
            },
            value
          }), [name, onChange, setValueState, value]);
          return /* @__PURE__ */jsxRuntimeExports.jsx(RadioGroupContext.Provider, {
            value: contextValue,
            children: /* @__PURE__ */jsxRuntimeExports.jsx(FormGroup$2, _extends({
              role: "radiogroup",
              ref: handleRef
            }, other, {
              children
            }))
          });
        });
        const FormGroup = exports("F", RadioGroup);
      }
    };
  });
})();
//# sourceMappingURL=RadioGroup-legacy-DC-BX_KK.js.map
