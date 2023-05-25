;
(function () {
  System.register(['./index-legacy-4fb9792c.js', './FormControlLabel-legacy-953c1997.js'], function (exports, module) {
    'use strict';

    var createSvgIcon, jsxRuntimeExports, generateUtilityClasses, generateUtilityClass, styled, rootShouldForwardProp, capitalize, _extends, alpha, reactExports, useThemeProps, _objectWithoutPropertiesLoose, clsx, composeClasses, SwitchBase;
    return {
      setters: [module => {
        createSvgIcon = module.c;
        jsxRuntimeExports = module.j;
        generateUtilityClasses = module.n;
        generateUtilityClass = module.q;
        styled = module.t;
        rootShouldForwardProp = module.$;
        capitalize = module.W;
        _extends = module.m;
        alpha = module.at;
        reactExports = module.r;
        useThemeProps = module.v;
        _objectWithoutPropertiesLoose = module._;
        clsx = module.x;
        composeClasses = module.y;
      }, module => {
        SwitchBase = module.S;
      }],
      execute: function () {
        const CheckBoxOutlineBlankIcon = createSvgIcon( /*#__PURE__*/jsxRuntimeExports.jsx("path", {
          d: "M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"
        }), 'CheckBoxOutlineBlank');
        const CheckBoxIcon = createSvgIcon( /*#__PURE__*/jsxRuntimeExports.jsx("path", {
          d: "M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
        }), 'CheckBox');
        const IndeterminateCheckBoxIcon = createSvgIcon( /*#__PURE__*/jsxRuntimeExports.jsx("path", {
          d: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"
        }), 'IndeterminateCheckBox');
        function getCheckboxUtilityClass(slot) {
          return generateUtilityClass('MuiCheckbox', slot);
        }
        const checkboxClasses = generateUtilityClasses('MuiCheckbox', ['root', 'checked', 'disabled', 'indeterminate', 'colorPrimary', 'colorSecondary']);
        const checkboxClasses$1 = checkboxClasses;
        const _excluded = ["checkedIcon", "color", "icon", "indeterminate", "indeterminateIcon", "inputProps", "size", "className"];
        const useUtilityClasses = ownerState => {
          const {
            classes,
            indeterminate,
            color
          } = ownerState;
          const slots = {
            root: ['root', indeterminate && 'indeterminate', `color${capitalize(color)}`]
          };
          const composedClasses = composeClasses(slots, getCheckboxUtilityClass, classes);
          return _extends({}, classes, composedClasses);
        };
        const CheckboxRoot = styled(SwitchBase, {
          shouldForwardProp: prop => rootShouldForwardProp(prop) || prop === 'classes',
          name: 'MuiCheckbox',
          slot: 'Root',
          overridesResolver: (props, styles) => {
            const {
              ownerState
            } = props;
            return [styles.root, ownerState.indeterminate && styles.indeterminate, ownerState.color !== 'default' && styles[`color${capitalize(ownerState.color)}`]];
          }
        })(({
          theme,
          ownerState
        }) => _extends({
          color: (theme.vars || theme).palette.text.secondary
        }, !ownerState.disableRipple && {
          '&:hover': {
            backgroundColor: theme.vars ? `rgba(${ownerState.color === 'default' ? theme.vars.palette.action.activeChannel : theme.vars.palette.primary.mainChannel} / ${theme.vars.palette.action.hoverOpacity})` : alpha(ownerState.color === 'default' ? theme.palette.action.active : theme.palette[ownerState.color].main, theme.palette.action.hoverOpacity),
            // Reset on touch devices, it doesn't add specificity
            '@media (hover: none)': {
              backgroundColor: 'transparent'
            }
          }
        }, ownerState.color !== 'default' && {
          [`&.${checkboxClasses$1.checked}, &.${checkboxClasses$1.indeterminate}`]: {
            color: (theme.vars || theme).palette[ownerState.color].main
          },
          [`&.${checkboxClasses$1.disabled}`]: {
            color: (theme.vars || theme).palette.action.disabled
          }
        }));
        const defaultCheckedIcon = /*#__PURE__*/jsxRuntimeExports.jsx(CheckBoxIcon, {});
        const defaultIcon = /*#__PURE__*/jsxRuntimeExports.jsx(CheckBoxOutlineBlankIcon, {});
        const defaultIndeterminateIcon = /*#__PURE__*/jsxRuntimeExports.jsx(IndeterminateCheckBoxIcon, {});
        const Checkbox = /*#__PURE__*/reactExports.forwardRef(function Checkbox(inProps, ref) {
          var _icon$props$fontSize, _indeterminateIcon$pr;
          const props = useThemeProps({
            props: inProps,
            name: 'MuiCheckbox'
          });
          const {
              checkedIcon = defaultCheckedIcon,
              color = 'primary',
              icon: iconProp = defaultIcon,
              indeterminate = false,
              indeterminateIcon: indeterminateIconProp = defaultIndeterminateIcon,
              inputProps,
              size = 'medium',
              className
            } = props,
            other = _objectWithoutPropertiesLoose(props, _excluded);
          const icon = indeterminate ? indeterminateIconProp : iconProp;
          const indeterminateIcon = indeterminate ? indeterminateIconProp : checkedIcon;
          const ownerState = _extends({}, props, {
            color,
            indeterminate,
            size
          });
          const classes = useUtilityClasses(ownerState);
          return /*#__PURE__*/jsxRuntimeExports.jsx(CheckboxRoot, _extends({
            type: "checkbox",
            inputProps: _extends({
              'data-indeterminate': indeterminate
            }, inputProps),
            icon: /*#__PURE__*/reactExports.cloneElement(icon, {
              fontSize: (_icon$props$fontSize = icon.props.fontSize) != null ? _icon$props$fontSize : size
            }),
            checkedIcon: /*#__PURE__*/reactExports.cloneElement(indeterminateIcon, {
              fontSize: (_indeterminateIcon$pr = indeterminateIcon.props.fontSize) != null ? _indeterminateIcon$pr : size
            }),
            ownerState: ownerState,
            ref: ref,
            className: clsx(classes.root, className)
          }, other, {
            classes: classes
          }));
        });
        const Checkbox$1 = exports('C', Checkbox);
      }
    };
  });
})();
