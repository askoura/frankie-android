;
(function () {
  System.register(['./index-legacy-7ea9dd30.js'], function (exports, module) {
    'use strict';

    var generateUtilityClass, generateUtilityClasses, styled, _extends, reactExports, useThemeProps, _objectWithoutPropertiesLoose, jsxRuntimeExports, clsx, composeClasses;
    return {
      setters: [module => {
        generateUtilityClass = module.q;
        generateUtilityClasses = module.n;
        styled = module.t;
        _extends = module.m;
        reactExports = module.r;
        useThemeProps = module.v;
        _objectWithoutPropertiesLoose = module._;
        jsxRuntimeExports = module.j;
        clsx = module.x;
        composeClasses = module.y;
      }],
      execute: function () {
        function getToolbarUtilityClass(slot) {
          return generateUtilityClass('MuiToolbar', slot);
        }
        generateUtilityClasses('MuiToolbar', ['root', 'gutters', 'regular', 'dense']);
        const _excluded = ["className", "component", "disableGutters", "variant"];
        const useUtilityClasses = ownerState => {
          const {
            classes,
            disableGutters,
            variant
          } = ownerState;
          const slots = {
            root: ['root', !disableGutters && 'gutters', variant]
          };
          return composeClasses(slots, getToolbarUtilityClass, classes);
        };
        const ToolbarRoot = styled('div', {
          name: 'MuiToolbar',
          slot: 'Root',
          overridesResolver: (props, styles) => {
            const {
              ownerState
            } = props;
            return [styles.root, !ownerState.disableGutters && styles.gutters, styles[ownerState.variant]];
          }
        })(({
          theme,
          ownerState
        }) => _extends({
          position: 'relative',
          display: 'flex',
          alignItems: 'center'
        }, !ownerState.disableGutters && {
          paddingLeft: theme.spacing(2),
          paddingRight: theme.spacing(2),
          [theme.breakpoints.up('sm')]: {
            paddingLeft: theme.spacing(3),
            paddingRight: theme.spacing(3)
          }
        }, ownerState.variant === 'dense' && {
          minHeight: 48
        }), ({
          theme,
          ownerState
        }) => ownerState.variant === 'regular' && theme.mixins.toolbar);
        const Toolbar = /*#__PURE__*/reactExports.forwardRef(function Toolbar(inProps, ref) {
          const props = useThemeProps({
            props: inProps,
            name: 'MuiToolbar'
          });
          const {
              className,
              component = 'div',
              disableGutters = false,
              variant = 'regular'
            } = props,
            other = _objectWithoutPropertiesLoose(props, _excluded);
          const ownerState = _extends({}, props, {
            component,
            disableGutters,
            variant
          });
          const classes = useUtilityClasses(ownerState);
          return /*#__PURE__*/jsxRuntimeExports.jsx(ToolbarRoot, _extends({
            as: component,
            className: clsx(classes.root, className),
            ref: ref,
            ownerState: ownerState
          }, other));
        });
        const Toolbar$1 = exports('T', Toolbar);
      }
    };
  });
})();
