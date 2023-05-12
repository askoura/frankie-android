;
(function () {
  System.register(['./index-legacy-bc4d1445.js', './InputLabel-legacy-753eca05.js', './common-legacy-e4fabe10.js'], function (exports, module) {
    'use strict';

    var generateUtilityClass, generateUtilityClasses, styled, reactExports, useThemeProps, _objectWithoutPropertiesLoose, _extends, useId, jsxRuntimeExports, clsx, composeClasses, FormControl, InputLabel, FormHelperText, Select, Input, FilledInput, OutlinedInput;
    return {
      setters: [function (module) {
        generateUtilityClass = module.w;
        generateUtilityClasses = module.v;
        styled = module.x;
        reactExports = module.r;
        useThemeProps = module.y;
        _objectWithoutPropertiesLoose = module._;
        _extends = module.t;
        useId = module.z;
        jsxRuntimeExports = module.j;
        clsx = module.A;
        composeClasses = module.B;
      }, function (module) {
        FormControl = module.F;
        InputLabel = module.I;
        FormHelperText = module.a;
      }, function (module) {
        Select = module.c;
        Input = module.I;
        FilledInput = module.a3;
        OutlinedInput = module.a4;
      }],
      execute: function execute() {
        function getTextFieldUtilityClass(slot) {
          return generateUtilityClass('MuiTextField', slot);
        }
        generateUtilityClasses('MuiTextField', ['root']);
        var _excluded = ["autoComplete", "autoFocus", "children", "className", "color", "defaultValue", "disabled", "error", "FormHelperTextProps", "fullWidth", "helperText", "id", "InputLabelProps", "inputProps", "InputProps", "inputRef", "label", "maxRows", "minRows", "multiline", "name", "onBlur", "onChange", "onFocus", "placeholder", "required", "rows", "select", "SelectProps", "type", "value", "variant"];
        var variantComponent = {
          standard: Input,
          filled: FilledInput,
          outlined: OutlinedInput
        };
        var useUtilityClasses = function useUtilityClasses(ownerState) {
          var classes = ownerState.classes;
          var slots = {
            root: ['root']
          };
          return composeClasses(slots, getTextFieldUtilityClass, classes);
        };
        var TextFieldRoot = styled(FormControl, {
          name: 'MuiTextField',
          slot: 'Root',
          overridesResolver: function overridesResolver(props, styles) {
            return styles.root;
          }
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
        var TextField = /*#__PURE__*/reactExports.forwardRef(function TextField(inProps, ref) {
          var props = useThemeProps({
            props: inProps,
            name: 'MuiTextField'
          });
          var autoComplete = props.autoComplete,
            _props$autoFocus = props.autoFocus,
            autoFocus = _props$autoFocus === void 0 ? false : _props$autoFocus,
            children = props.children,
            className = props.className,
            _props$color = props.color,
            color = _props$color === void 0 ? 'primary' : _props$color,
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
            variant = _props$variant === void 0 ? 'outlined' : _props$variant,
            other = _objectWithoutPropertiesLoose(props, _excluded);
          var ownerState = _extends({}, props, {
            autoFocus: autoFocus,
            color: color,
            disabled: disabled,
            error: error,
            fullWidth: fullWidth,
            multiline: multiline,
            required: required,
            select: select,
            variant: variant
          });
          var classes = useUtilityClasses(ownerState);
          var InputMore = {};
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
          var id = useId(idOverride);
          var helperTextId = helperText && id ? "".concat(id, "-helper-text") : undefined;
          var inputLabelId = label && id ? "".concat(id, "-label") : undefined;
          var InputComponent = variantComponent[variant];
          var InputElement = /*#__PURE__*/jsxRuntimeExports.jsx(InputComponent, _extends({
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
        var TextField$1 = exports('T', TextField);
      }
    };
  });
})();
