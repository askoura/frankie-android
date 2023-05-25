;
(function () {
  System.register(['./index-legacy-4fb9792c.js', './common-legacy-09fb4163.js'], function (exports, module) {
    'use strict';

    var generateUtilityClasses, generateUtilityClass, styled, _extends, reactExports, useThemeProps, _objectWithoutPropertiesLoose, jsxRuntimeExports, clsx, capitalize, composeClasses, useFormControl, FormControlContext, Typography;
    return {
      setters: [module => {
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
      }, module => {
        useFormControl = module.a0;
        FormControlContext = module.a2;
        Typography = module.T;
      }],
      execute: function () {
        function getInputAdornmentUtilityClass(slot) {
          return generateUtilityClass('MuiInputAdornment', slot);
        }
        const inputAdornmentClasses = generateUtilityClasses('MuiInputAdornment', ['root', 'filled', 'standard', 'outlined', 'positionStart', 'positionEnd', 'disablePointerEvents', 'hiddenLabel', 'sizeSmall']);
        const inputAdornmentClasses$1 = inputAdornmentClasses;
        var _span;
        const _excluded = ["children", "className", "component", "disablePointerEvents", "disableTypography", "position", "variant"];
        const overridesResolver = (props, styles) => {
          const {
            ownerState
          } = props;
          return [styles.root, styles[`position${capitalize(ownerState.position)}`], ownerState.disablePointerEvents === true && styles.disablePointerEvents, styles[ownerState.variant]];
        };
        const useUtilityClasses = ownerState => {
          const {
            classes,
            disablePointerEvents,
            hiddenLabel,
            position,
            size,
            variant
          } = ownerState;
          const slots = {
            root: ['root', disablePointerEvents && 'disablePointerEvents', position && `position${capitalize(position)}`, variant, hiddenLabel && 'hiddenLabel', size && `size${capitalize(size)}`]
          };
          return composeClasses(slots, getInputAdornmentUtilityClass, classes);
        };
        const InputAdornmentRoot = styled('div', {
          name: 'MuiInputAdornment',
          slot: 'Root',
          overridesResolver
        })(({
          theme,
          ownerState
        }) => _extends({
          display: 'flex',
          height: '0.01em',
          // Fix IE11 flexbox alignment. To remove at some point.
          maxHeight: '2em',
          alignItems: 'center',
          whiteSpace: 'nowrap',
          color: (theme.vars || theme).palette.action.active
        }, ownerState.variant === 'filled' && {
          // Styles applied to the root element if `variant="filled"`.
          [`&.${inputAdornmentClasses$1.positionStart}&:not(.${inputAdornmentClasses$1.hiddenLabel})`]: {
            marginTop: 16
          }
        }, ownerState.position === 'start' && {
          // Styles applied to the root element if `position="start"`.
          marginRight: 8
        }, ownerState.position === 'end' && {
          // Styles applied to the root element if `position="end"`.
          marginLeft: 8
        }, ownerState.disablePointerEvents === true && {
          // Styles applied to the root element if `disablePointerEvents={true}`.
          pointerEvents: 'none'
        }));
        const InputAdornment = /*#__PURE__*/reactExports.forwardRef(function InputAdornment(inProps, ref) {
          const props = useThemeProps({
            props: inProps,
            name: 'MuiInputAdornment'
          });
          const {
              children,
              className,
              component = 'div',
              disablePointerEvents = false,
              disableTypography = false,
              position,
              variant: variantProp
            } = props,
            other = _objectWithoutPropertiesLoose(props, _excluded);
          const muiFormControl = useFormControl() || {};
          let variant = variantProp;
          if (variantProp && muiFormControl.variant) ;
          if (muiFormControl && !variant) {
            variant = muiFormControl.variant;
          }
          const ownerState = _extends({}, props, {
            hiddenLabel: muiFormControl.hiddenLabel,
            size: muiFormControl.size,
            disablePointerEvents,
            position,
            variant
          });
          const classes = useUtilityClasses(ownerState);
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
        const InputAdornment$1 = exports('I', InputAdornment);
      }
    };
  });
})();
