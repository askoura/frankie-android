;
(function () {
  System.register(['./index-legacy-c8bd5c71.js', './InputLabel-legacy-d58282a5.js', './common-legacy-fa39557a.js'], function (exports, module) {
    'use strict';

    var generateUtilityClass, generateUtilityClasses, styled, reactExports, useThemeProps, _objectWithoutPropertiesLoose, _extends, useId, jsxRuntimeExports, clsx, composeClasses, FormControl, InputLabel, FormHelperText, Select, Input, FilledInput, OutlinedInput;
    return {
      setters: [module => {
        generateUtilityClass = module.q;
        generateUtilityClasses = module.n;
        styled = module.t;
        reactExports = module.r;
        useThemeProps = module.v;
        _objectWithoutPropertiesLoose = module._;
        _extends = module.m;
        useId = module.w;
        jsxRuntimeExports = module.j;
        clsx = module.x;
        composeClasses = module.y;
      }, module => {
        FormControl = module.F;
        InputLabel = module.I;
        FormHelperText = module.a;
      }, module => {
        Select = module.c;
        Input = module.I;
        FilledInput = module.a3;
        OutlinedInput = module.a4;
      }],
      execute: function () {
        function getTextFieldUtilityClass(slot) {
          return generateUtilityClass('MuiTextField', slot);
        }
        generateUtilityClasses('MuiTextField', ['root']);
        const _excluded = ["autoComplete", "autoFocus", "children", "className", "color", "defaultValue", "disabled", "error", "FormHelperTextProps", "fullWidth", "helperText", "id", "InputLabelProps", "inputProps", "InputProps", "inputRef", "label", "maxRows", "minRows", "multiline", "name", "onBlur", "onChange", "onFocus", "placeholder", "required", "rows", "select", "SelectProps", "type", "value", "variant"];
        const variantComponent = {
          standard: Input,
          filled: FilledInput,
          outlined: OutlinedInput
        };
        const useUtilityClasses = ownerState => {
          const {
            classes
          } = ownerState;
          const slots = {
            root: ['root']
          };
          return composeClasses(slots, getTextFieldUtilityClass, classes);
        };
        const TextFieldRoot = styled(FormControl, {
          name: 'MuiTextField',
          slot: 'Root',
          overridesResolver: (props, styles) => styles.root
        })({});

        /**
         * The `TextField` is a convenience wrapper for the most common cases (80%).
         * It cannot be all things to all people, otherwise the API would grow out of control.
         *
         * ## Advanced Configuration
         *
         * It's important to understand that the text field is a simple abstraction
         * on top of the following components:
         *
         * - [FormControl](/material-ui/api/form-control/)
         * - [InputLabel](/material-ui/api/input-label/)
         * - [FilledInput](/material-ui/api/filled-input/)
         * - [OutlinedInput](/material-ui/api/outlined-input/)
         * - [Input](/material-ui/api/input/)
         * - [FormHelperText](/material-ui/api/form-helper-text/)
         *
         * If you wish to alter the props applied to the `input` element, you can do so as follows:
         *
         * ```jsx
         * const inputProps = {
         *   step: 300,
         * };
         *
         * return <TextField id="time" type="time" inputProps={inputProps} />;
         * ```
         *
         * For advanced cases, please look at the source of TextField by clicking on the
         * "Edit this page" button above. Consider either:
         *
         * - using the upper case props for passing values directly to the components
         * - using the underlying components directly as shown in the demos
         */
        const TextField = /*#__PURE__*/reactExports.forwardRef(function TextField(inProps, ref) {
          const props = useThemeProps({
            props: inProps,
            name: 'MuiTextField'
          });
          const {
              autoComplete,
              autoFocus = false,
              children,
              className,
              color = 'primary',
              defaultValue,
              disabled = false,
              error = false,
              FormHelperTextProps,
              fullWidth = false,
              helperText,
              id: idOverride,
              InputLabelProps,
              inputProps,
              InputProps,
              inputRef,
              label,
              maxRows,
              minRows,
              multiline = false,
              name,
              onBlur,
              onChange,
              onFocus,
              placeholder,
              required = false,
              rows,
              select = false,
              SelectProps,
              type,
              value,
              variant = 'outlined'
            } = props,
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
          if (variant === 'outlined') {
            if (InputLabelProps && typeof InputLabelProps.shrink !== 'undefined') {
              InputMore.notched = InputLabelProps.shrink;
            }
            InputMore.label = label;
          }
          if (select) {
            // unset defaults from textbox inputs
            if (!SelectProps || !SelectProps.native) {
              InputMore.id = undefined;
            }
            InputMore['aria-describedby'] = undefined;
          }
          const id = useId(idOverride);
          const helperTextId = helperText && id ? `${id}-helper-text` : undefined;
          const inputLabelId = label && id ? `${id}-label` : undefined;
          const InputComponent = variantComponent[variant];
          const InputElement = /*#__PURE__*/jsxRuntimeExports.jsx(InputComponent, _extends({
            "aria-describedby": helperTextId,
            autoComplete: autoComplete,
            autoFocus: autoFocus,
            defaultValue: defaultValue,
            fullWidth: fullWidth,
            multiline: multiline,
            name: name,
            rows: rows,
            maxRows: maxRows,
            minRows: minRows,
            type: type,
            value: value,
            id: id,
            inputRef: inputRef,
            onBlur: onBlur,
            onChange: onChange,
            onFocus: onFocus,
            placeholder: placeholder,
            inputProps: inputProps
          }, InputMore, InputProps));
          return /*#__PURE__*/jsxRuntimeExports.jsxs(TextFieldRoot, _extends({
            className: clsx(classes.root, className),
            disabled: disabled,
            error: error,
            fullWidth: fullWidth,
            ref: ref,
            required: required,
            color: color,
            variant: variant,
            ownerState: ownerState
          }, other, {
            children: [label != null && label !== '' && /*#__PURE__*/jsxRuntimeExports.jsx(InputLabel, _extends({
              htmlFor: id,
              id: inputLabelId
            }, InputLabelProps, {
              children: label
            })), select ? /*#__PURE__*/jsxRuntimeExports.jsx(Select, _extends({
              "aria-describedby": helperTextId,
              id: id,
              labelId: inputLabelId,
              value: value,
              input: InputElement
            }, SelectProps, {
              children: children
            })) : InputElement, helperText && /*#__PURE__*/jsxRuntimeExports.jsx(FormHelperText, _extends({
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
