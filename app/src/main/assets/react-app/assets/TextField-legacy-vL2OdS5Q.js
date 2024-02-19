;
(function () {
  System.register(['./index-legacy-T3s18jo3.js'], function (exports, module) {
    'use strict';

    var generateUtilityClasses, generateUtilityClass, styled, capitalize, _extends, reactExports, useThemeProps, _objectWithoutPropertiesLoose, useFormControl, formControlState, jsxRuntimeExports, clsx, composeClasses, FormControl, useId, InputLabel, Select, Input, FilledInput, OutlinedInput;
    return {
      setters: [module => {
        generateUtilityClasses = module.g;
        generateUtilityClass = module.a;
        styled = module.s;
        capitalize = module.b;
        _extends = module._;
        reactExports = module.r;
        useThemeProps = module.u;
        _objectWithoutPropertiesLoose = module.e;
        useFormControl = module.aS;
        formControlState = module.bn;
        jsxRuntimeExports = module.j;
        clsx = module.f;
        composeClasses = module.h;
        FormControl = module.ag;
        useId = module.a$;
        InputLabel = module.ah;
        Select = module.S;
        Input = module.bq;
        FilledInput = module.br;
        OutlinedInput = module.bs;
      }],
      execute: function execute() {
        function getFormHelperTextUtilityClasses(slot) {
          return generateUtilityClass('MuiFormHelperText', slot);
        }
        const formHelperTextClasses = generateUtilityClasses('MuiFormHelperText', ['root', 'error', 'disabled', 'sizeSmall', 'sizeMedium', 'contained', 'focused', 'filled', 'required']);
        const formHelperTextClasses$1 = formHelperTextClasses;
        var _span;
        const _excluded$1 = ["children", "className", "component", "disabled", "error", "filled", "focused", "margin", "required", "variant"];
        const useUtilityClasses$1 = ownerState => {
          const classes = ownerState.classes,
            contained = ownerState.contained,
            size = ownerState.size,
            disabled = ownerState.disabled,
            error = ownerState.error,
            filled = ownerState.filled,
            focused = ownerState.focused,
            required = ownerState.required;
          const slots = {
            root: ["root", disabled && "disabled", error && "error", size && `size${capitalize(size)}`, contained && "contained", focused && "focused", filled && "filled", required && "required"]
          };
          return composeClasses(slots, getFormHelperTextUtilityClasses, classes);
        };
        const FormHelperTextRoot = styled("p", {
          name: "MuiFormHelperText",
          slot: "Root",
          overridesResolver: (props, styles) => {
            const ownerState = props.ownerState;
            return [styles.root, ownerState.size && styles[`size${capitalize(ownerState.size)}`], ownerState.contained && styles.contained, ownerState.filled && styles.filled];
          }
        })(({
          theme,
          ownerState
        }) => _extends({
          color: (theme.vars || theme).palette.text.secondary
        }, theme.typography.caption, {
          textAlign: "left",
          marginTop: 3,
          marginRight: 0,
          marginBottom: 0,
          marginLeft: 0,
          [`&.${formHelperTextClasses$1.disabled}`]: {
            color: (theme.vars || theme).palette.text.disabled
          },
          [`&.${formHelperTextClasses$1.error}`]: {
            color: (theme.vars || theme).palette.error.main
          }
        }, ownerState.size === "small" && {
          marginTop: 4
        }, ownerState.contained && {
          marginLeft: 14,
          marginRight: 14
        }));
        const FormHelperText = /* @__PURE__ */reactExports.forwardRef(function FormHelperText2(inProps, ref) {
          const props = useThemeProps({
            props: inProps,
            name: "MuiFormHelperText"
          });
          const children = props.children,
            className = props.className,
            _props$component = props.component,
            component = _props$component === void 0 ? "p" : _props$component,
            other = _objectWithoutPropertiesLoose(props, _excluded$1);
          const muiFormControl = useFormControl();
          const fcs = formControlState({
            props,
            muiFormControl,
            states: ["variant", "size", "disabled", "error", "filled", "focused", "required"]
          });
          const ownerState = _extends({}, props, {
            component,
            contained: fcs.variant === "filled" || fcs.variant === "outlined",
            variant: fcs.variant,
            size: fcs.size,
            disabled: fcs.disabled,
            error: fcs.error,
            filled: fcs.filled,
            focused: fcs.focused,
            required: fcs.required
          });
          const classes = useUtilityClasses$1(ownerState);
          return /* @__PURE__ */jsxRuntimeExports.jsx(FormHelperTextRoot, _extends({
            as: component,
            ownerState,
            className: clsx(classes.root, className),
            ref
          }, other, {
            children: children === " " ?
            // notranslate needed while Google Translate will not fix zero-width space issue
            _span || (_span = /* @__PURE__ */jsxRuntimeExports.jsx("span", {
              className: "notranslate",
              children: "​"
            })) : children
          }));
        });
        const FormHelperText$1 = exports('F', FormHelperText);
        function getTextFieldUtilityClass(slot) {
          return generateUtilityClass('MuiTextField', slot);
        }
        generateUtilityClasses('MuiTextField', ['root']);
        const _excluded = ["autoComplete", "autoFocus", "children", "className", "color", "defaultValue", "disabled", "error", "FormHelperTextProps", "fullWidth", "helperText", "id", "InputLabelProps", "inputProps", "InputProps", "inputRef", "label", "maxRows", "minRows", "multiline", "name", "onBlur", "onChange", "onClick", "onFocus", "placeholder", "required", "rows", "select", "SelectProps", "type", "value", "variant"];
        const variantComponent = {
          standard: Input,
          filled: FilledInput,
          outlined: OutlinedInput
        };
        const useUtilityClasses = ownerState => {
          const classes = ownerState.classes;
          const slots = {
            root: ["root"]
          };
          return composeClasses(slots, getTextFieldUtilityClass, classes);
        };
        const TextFieldRoot = styled(FormControl, {
          name: "MuiTextField",
          slot: "Root",
          overridesResolver: (props, styles) => styles.root
        })({});
        const TextField = /* @__PURE__ */reactExports.forwardRef(function TextField2(inProps, ref) {
          const props = useThemeProps({
            props: inProps,
            name: "MuiTextField"
          });
          const autoComplete = props.autoComplete,
            _props$autoFocus = props.autoFocus,
            autoFocus = _props$autoFocus === void 0 ? false : _props$autoFocus,
            children = props.children,
            className = props.className,
            _props$color = props.color,
            color = _props$color === void 0 ? "primary" : _props$color,
            defaultValue = props.defaultValue,
            _props$disabled = props.disabled,
            disabled = _props$disabled === void 0 ? false : _props$disabled,
            _props$error = props.error,
            error = _props$error === void 0 ? false : _props$error,
            FormHelperTextProps = props.FormHelperTextProps,
            _props$fullWidth = props.fullWidth,
            fullWidth = _props$fullWidth === void 0 ? false : _props$fullWidth,
            helperText = props.helperText,
            idOverride = props.id,
            InputLabelProps = props.InputLabelProps,
            inputProps = props.inputProps,
            InputProps = props.InputProps,
            inputRef = props.inputRef,
            label = props.label,
            maxRows = props.maxRows,
            minRows = props.minRows,
            _props$multiline = props.multiline,
            multiline = _props$multiline === void 0 ? false : _props$multiline,
            name = props.name,
            onBlur = props.onBlur,
            onChange = props.onChange,
            onClick = props.onClick,
            onFocus = props.onFocus,
            placeholder = props.placeholder,
            _props$required = props.required,
            required = _props$required === void 0 ? false : _props$required,
            rows = props.rows,
            _props$select = props.select,
            select = _props$select === void 0 ? false : _props$select,
            SelectProps = props.SelectProps,
            type = props.type,
            value = props.value,
            _props$variant = props.variant,
            variant = _props$variant === void 0 ? "outlined" : _props$variant,
            other = _objectWithoutPropertiesLoose(props, _excluded);
          const ownerState = _extends({}, props, {
            autoFocus,
            color,
            disabled,
            error,
            fullWidth,
            multiline,
            required,
            select,
            variant
          });
          const classes = useUtilityClasses(ownerState);
          const InputMore = {};
          if (variant === "outlined") {
            if (InputLabelProps && typeof InputLabelProps.shrink !== "undefined") {
              InputMore.notched = InputLabelProps.shrink;
            }
            InputMore.label = label;
          }
          if (select) {
            if (!SelectProps || !SelectProps.native) {
              InputMore.id = void 0;
            }
            InputMore["aria-describedby"] = void 0;
          }
          const handleClick = event => {
            if (!disabled && onClick) {
              event.stopPropagation();
              onClick(event);
            }
          };
          const id = useId(idOverride);
          const helperTextId = helperText && id ? `${id}-helper-text` : void 0;
          const inputLabelId = label && id ? `${id}-label` : void 0;
          const InputComponent = variantComponent[variant];
          const InputElement = /* @__PURE__ */jsxRuntimeExports.jsx(InputComponent, _extends({
            "aria-describedby": helperTextId,
            autoComplete,
            autoFocus,
            defaultValue,
            fullWidth,
            multiline,
            name,
            rows,
            maxRows,
            minRows,
            type,
            value,
            id,
            inputRef,
            onBlur,
            onChange,
            onFocus,
            onClick: handleClick,
            placeholder,
            inputProps
          }, InputMore, InputProps));
          return /* @__PURE__ */jsxRuntimeExports.jsxs(TextFieldRoot, _extends({
            className: clsx(classes.root, className),
            disabled,
            error,
            fullWidth,
            ref,
            required,
            color,
            variant,
            ownerState,
            onClick: handleClick
          }, other, {
            children: [label != null && label !== "" && /* @__PURE__ */jsxRuntimeExports.jsx(InputLabel, _extends({
              htmlFor: id,
              id: inputLabelId
            }, InputLabelProps, {
              children: label
            })), select ? /* @__PURE__ */jsxRuntimeExports.jsx(Select, _extends({
              "aria-describedby": helperTextId,
              id,
              labelId: inputLabelId,
              value,
              input: InputElement
            }, SelectProps, {
              children
            })) : InputElement, helperText && /* @__PURE__ */jsxRuntimeExports.jsx(FormHelperText$1, _extends({
              id: helperTextId
            }, FormHelperTextProps, {
              children: helperText
            }))]
          }));
        });
        const TextField$1 = exports('T', TextField);
      }
    };
  });
})();
//# sourceMappingURL=TextField-legacy-vL2OdS5Q.js.map
