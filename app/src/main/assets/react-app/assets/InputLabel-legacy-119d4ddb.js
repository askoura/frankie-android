;
(function () {
  System.register(['./index-legacy-5baa22df.js', './common-legacy-42d4b65f.js'], function (exports, module) {
    'use strict';

    var generateUtilityClass, generateUtilityClasses, styled, _extends, capitalize, reactExports, useThemeProps, _objectWithoutPropertiesLoose, isMuiElement, jsxRuntimeExports, clsx, composeClasses, rootShouldForwardProp, isAdornedStart, isFilled, FormControlContext, useFormControl, formControlState;
    return {
      setters: [module => {
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
      }, module => {
        isAdornedStart = module.a5;
        isFilled = module.a6;
        FormControlContext = module.a2;
        useFormControl = module.a0;
        formControlState = module.a1;
      }],
      execute: function () {
        function getFormControlUtilityClasses(slot) {
          return generateUtilityClass('MuiFormControl', slot);
        }
        generateUtilityClasses('MuiFormControl', ['root', 'marginNone', 'marginNormal', 'marginDense', 'fullWidth', 'disabled']);
        const _excluded$3 = ["children", "className", "color", "component", "disabled", "error", "focused", "fullWidth", "hiddenLabel", "margin", "required", "size", "variant"];
        const useUtilityClasses$3 = ownerState => {
          const {
            classes,
            margin,
            fullWidth
          } = ownerState;
          const slots = {
            root: ['root', margin !== 'none' && `margin${capitalize(margin)}`, fullWidth && 'fullWidth']
          };
          return composeClasses(slots, getFormControlUtilityClasses, classes);
        };
        const FormControlRoot = styled('div', {
          name: 'MuiFormControl',
          slot: 'Root',
          overridesResolver: ({
            ownerState
          }, styles) => {
            return _extends({}, styles.root, styles[`margin${capitalize(ownerState.margin)}`], ownerState.fullWidth && styles.fullWidth);
          }
        })(({
          ownerState
        }) => _extends({
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
        }));

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
        const FormControl = /*#__PURE__*/reactExports.forwardRef(function FormControl(inProps, ref) {
          const props = useThemeProps({
            props: inProps,
            name: 'MuiFormControl'
          });
          const {
              children,
              className,
              color = 'primary',
              component = 'div',
              disabled = false,
              error = false,
              focused: visuallyFocused,
              fullWidth = false,
              hiddenLabel = false,
              margin = 'none',
              required = false,
              size = 'medium',
              variant = 'outlined'
            } = props,
            other = _objectWithoutPropertiesLoose(props, _excluded$3);
          const ownerState = _extends({}, props, {
            color,
            component,
            disabled,
            error,
            fullWidth,
            hiddenLabel,
            margin,
            required,
            size,
            variant
          });
          const classes = useUtilityClasses$3(ownerState);
          const [adornedStart, setAdornedStart] = reactExports.useState(() => {
            // We need to iterate through the children and find the Input in order
            // to fully support server-side rendering.
            let initialAdornedStart = false;
            if (children) {
              reactExports.Children.forEach(children, child => {
                if (!isMuiElement(child, ['Input', 'Select'])) {
                  return;
                }
                const input = isMuiElement(child, ['Select']) ? child.props.input : child;
                if (input && isAdornedStart(input.props)) {
                  initialAdornedStart = true;
                }
              });
            }
            return initialAdornedStart;
          });
          const [filled, setFilled] = reactExports.useState(() => {
            // We need to iterate through the children and find the Input in order
            // to fully support server-side rendering.
            let initialFilled = false;
            if (children) {
              reactExports.Children.forEach(children, child => {
                if (!isMuiElement(child, ['Input', 'Select'])) {
                  return;
                }
                if (isFilled(child.props, true) || isFilled(child.props.inputProps, true)) {
                  initialFilled = true;
                }
              });
            }
            return initialFilled;
          });
          const [focusedState, setFocused] = reactExports.useState(false);
          if (disabled && focusedState) {
            setFocused(false);
          }
          const focused = visuallyFocused !== undefined && !disabled ? visuallyFocused : focusedState;
          let registerEffect;
          const childContext = reactExports.useMemo(() => {
            return {
              adornedStart,
              setAdornedStart,
              color,
              disabled,
              error,
              filled,
              focused,
              fullWidth,
              hiddenLabel,
              size,
              onBlur: () => {
                setFocused(false);
              },
              onEmpty: () => {
                setFilled(false);
              },
              onFilled: () => {
                setFilled(true);
              },
              onFocus: () => {
                setFocused(true);
              },
              registerEffect,
              required,
              variant
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
        const FormControl$1 = exports('F', FormControl);
        function getFormHelperTextUtilityClasses(slot) {
          return generateUtilityClass('MuiFormHelperText', slot);
        }
        const formHelperTextClasses = generateUtilityClasses('MuiFormHelperText', ['root', 'error', 'disabled', 'sizeSmall', 'sizeMedium', 'contained', 'focused', 'filled', 'required']);
        const formHelperTextClasses$1 = formHelperTextClasses;
        var _span;
        const _excluded$2 = ["children", "className", "component", "disabled", "error", "filled", "focused", "margin", "required", "variant"];
        const useUtilityClasses$2 = ownerState => {
          const {
            classes,
            contained,
            size,
            disabled,
            error,
            filled,
            focused,
            required
          } = ownerState;
          const slots = {
            root: ['root', disabled && 'disabled', error && 'error', size && `size${capitalize(size)}`, contained && 'contained', focused && 'focused', filled && 'filled', required && 'required']
          };
          return composeClasses(slots, getFormHelperTextUtilityClasses, classes);
        };
        const FormHelperTextRoot = styled('p', {
          name: 'MuiFormHelperText',
          slot: 'Root',
          overridesResolver: (props, styles) => {
            const {
              ownerState
            } = props;
            return [styles.root, ownerState.size && styles[`size${capitalize(ownerState.size)}`], ownerState.contained && styles.contained, ownerState.filled && styles.filled];
          }
        })(({
          theme,
          ownerState
        }) => _extends({
          color: (theme.vars || theme).palette.text.secondary
        }, theme.typography.caption, {
          textAlign: 'left',
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
        }, ownerState.size === 'small' && {
          marginTop: 4
        }, ownerState.contained && {
          marginLeft: 14,
          marginRight: 14
        }));
        const FormHelperText = /*#__PURE__*/reactExports.forwardRef(function FormHelperText(inProps, ref) {
          const props = useThemeProps({
            props: inProps,
            name: 'MuiFormHelperText'
          });
          const {
              children,
              className,
              component = 'p'
            } = props,
            other = _objectWithoutPropertiesLoose(props, _excluded$2);
          const muiFormControl = useFormControl();
          const fcs = formControlState({
            props,
            muiFormControl,
            states: ['variant', 'size', 'disabled', 'error', 'filled', 'focused', 'required']
          });
          const ownerState = _extends({}, props, {
            component,
            contained: fcs.variant === 'filled' || fcs.variant === 'outlined',
            variant: fcs.variant,
            size: fcs.size,
            disabled: fcs.disabled,
            error: fcs.error,
            filled: fcs.filled,
            focused: fcs.focused,
            required: fcs.required
          });
          const classes = useUtilityClasses$2(ownerState);
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
        const FormHelperText$1 = exports('a', FormHelperText);
        function getFormLabelUtilityClasses(slot) {
          return generateUtilityClass('MuiFormLabel', slot);
        }
        const formLabelClasses = generateUtilityClasses('MuiFormLabel', ['root', 'colorSecondary', 'focused', 'disabled', 'error', 'filled', 'required', 'asterisk']);
        const formLabelClasses$1 = formLabelClasses;
        const _excluded$1 = ["children", "className", "color", "component", "disabled", "error", "filled", "focused", "required"];
        const useUtilityClasses$1 = ownerState => {
          const {
            classes,
            color,
            focused,
            disabled,
            error,
            filled,
            required
          } = ownerState;
          const slots = {
            root: ['root', `color${capitalize(color)}`, disabled && 'disabled', error && 'error', filled && 'filled', focused && 'focused', required && 'required'],
            asterisk: ['asterisk', error && 'error']
          };
          return composeClasses(slots, getFormLabelUtilityClasses, classes);
        };
        const FormLabelRoot = styled('label', {
          name: 'MuiFormLabel',
          slot: 'Root',
          overridesResolver: ({
            ownerState
          }, styles) => {
            return _extends({}, styles.root, ownerState.color === 'secondary' && styles.colorSecondary, ownerState.filled && styles.filled);
          }
        })(({
          theme,
          ownerState
        }) => _extends({
          color: (theme.vars || theme).palette.text.secondary
        }, theme.typography.body1, {
          lineHeight: '1.4375em',
          padding: 0,
          position: 'relative',
          [`&.${formLabelClasses$1.focused}`]: {
            color: (theme.vars || theme).palette[ownerState.color].main
          },
          [`&.${formLabelClasses$1.disabled}`]: {
            color: (theme.vars || theme).palette.text.disabled
          },
          [`&.${formLabelClasses$1.error}`]: {
            color: (theme.vars || theme).palette.error.main
          }
        }));
        const AsteriskComponent = styled('span', {
          name: 'MuiFormLabel',
          slot: 'Asterisk',
          overridesResolver: (props, styles) => styles.asterisk
        })(({
          theme
        }) => ({
          [`&.${formLabelClasses$1.error}`]: {
            color: (theme.vars || theme).palette.error.main
          }
        }));
        const FormLabel = /*#__PURE__*/reactExports.forwardRef(function FormLabel(inProps, ref) {
          const props = useThemeProps({
            props: inProps,
            name: 'MuiFormLabel'
          });
          const {
              children,
              className,
              component = 'label'
            } = props,
            other = _objectWithoutPropertiesLoose(props, _excluded$1);
          const muiFormControl = useFormControl();
          const fcs = formControlState({
            props,
            muiFormControl,
            states: ['color', 'required', 'focused', 'disabled', 'error', 'filled']
          });
          const ownerState = _extends({}, props, {
            color: fcs.color || 'primary',
            component,
            disabled: fcs.disabled,
            error: fcs.error,
            filled: fcs.filled,
            focused: fcs.focused,
            required: fcs.required
          });
          const classes = useUtilityClasses$1(ownerState);
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
        const FormLabel$1 = exports('b', FormLabel);
        function getInputLabelUtilityClasses(slot) {
          return generateUtilityClass('MuiInputLabel', slot);
        }
        generateUtilityClasses('MuiInputLabel', ['root', 'focused', 'disabled', 'error', 'required', 'asterisk', 'formControl', 'sizeSmall', 'shrink', 'animated', 'standard', 'filled', 'outlined']);
        const _excluded = ["disableAnimation", "margin", "shrink", "variant", "className"];
        const useUtilityClasses = ownerState => {
          const {
            classes,
            formControl,
            size,
            shrink,
            disableAnimation,
            variant,
            required
          } = ownerState;
          const slots = {
            root: ['root', formControl && 'formControl', !disableAnimation && 'animated', shrink && 'shrink', size === 'small' && 'sizeSmall', variant],
            asterisk: [required && 'asterisk']
          };
          const composedClasses = composeClasses(slots, getInputLabelUtilityClasses, classes);
          return _extends({}, classes, composedClasses);
        };
        const InputLabelRoot = styled(FormLabel$1, {
          shouldForwardProp: prop => rootShouldForwardProp(prop) || prop === 'classes',
          name: 'MuiInputLabel',
          slot: 'Root',
          overridesResolver: (props, styles) => {
            const {
              ownerState
            } = props;
            return [{
              [`& .${formLabelClasses$1.asterisk}`]: styles.asterisk
            }, styles.root, ownerState.formControl && styles.formControl, ownerState.size === 'small' && styles.sizeSmall, ownerState.shrink && styles.shrink, !ownerState.disableAnimation && styles.animated, styles[ownerState.variant]];
          }
        })(({
          theme,
          ownerState
        }) => _extends({
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
        })));
        const InputLabel = /*#__PURE__*/reactExports.forwardRef(function InputLabel(inProps, ref) {
          const props = useThemeProps({
            name: 'MuiInputLabel',
            props: inProps
          });
          const {
              disableAnimation = false,
              shrink: shrinkProp,
              className
            } = props,
            other = _objectWithoutPropertiesLoose(props, _excluded);
          const muiFormControl = useFormControl();
          let shrink = shrinkProp;
          if (typeof shrink === 'undefined' && muiFormControl) {
            shrink = muiFormControl.filled || muiFormControl.focused || muiFormControl.adornedStart;
          }
          const fcs = formControlState({
            props,
            muiFormControl,
            states: ['size', 'variant', 'required']
          });
          const ownerState = _extends({}, props, {
            disableAnimation,
            formControl: muiFormControl,
            shrink,
            size: fcs.size,
            variant: fcs.variant,
            required: fcs.required
          });
          const classes = useUtilityClasses(ownerState);
          return /*#__PURE__*/jsxRuntimeExports.jsx(InputLabelRoot, _extends({
            "data-shrink": shrink,
            ownerState: ownerState,
            ref: ref,
            className: clsx(classes.root, className)
          }, other, {
            classes: classes
          }));
        });
        const InputLabel$1 = exports('I', InputLabel);
      }
    };
  });
})();
