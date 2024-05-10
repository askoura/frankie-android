;
(function () {
  System.register(['./index-legacy-vEA8K-LS.js', './use-service-legacy-Bcxdqe8R.js'], function (exports, module) {
    'use strict';

    var generateUtilityClass, generateUtilityClasses, _extends, reactExports, _objectWithoutPropertiesLoose, jsxRuntimeExports, clsx, styled, useThemeProps, composeClasses;
    return {
      setters: [module => {
        generateUtilityClass = module.g;
        generateUtilityClasses = module.f;
        _extends = module._;
        reactExports = module.r;
        _objectWithoutPropertiesLoose = module.b;
        jsxRuntimeExports = module.j;
        clsx = module.d;
      }, module => {
        styled = module.h;
        useThemeProps = module.e;
        composeClasses = module.c;
      }],
      execute: function execute() {
        function getToolbarUtilityClass(slot) {
          return generateUtilityClass('MuiToolbar', slot);
        }
        generateUtilityClasses('MuiToolbar', ['root', 'gutters', 'regular', 'dense']);
        const _excluded = ["className", "component", "disableGutters", "variant"];
        const useUtilityClasses = ownerState => {
          const classes = ownerState.classes,
            disableGutters = ownerState.disableGutters,
            variant = ownerState.variant;
          const slots = {
            root: ["root", !disableGutters && "gutters", variant]
          };
          return composeClasses(slots, getToolbarUtilityClass, classes);
        };
        const ToolbarRoot = styled("div", {
          name: "MuiToolbar",
          slot: "Root",
          overridesResolver: (props, styles) => {
            const ownerState = props.ownerState;
            return [styles.root, !ownerState.disableGutters && styles.gutters, styles[ownerState.variant]];
          }
        })(({
          theme,
          ownerState
        }) => _extends({
          position: "relative",
          display: "flex",
          alignItems: "center"
        }, !ownerState.disableGutters && {
          paddingLeft: theme.spacing(2),
          paddingRight: theme.spacing(2),
          [theme.breakpoints.up("sm")]: {
            paddingLeft: theme.spacing(3),
            paddingRight: theme.spacing(3)
          }
        }, ownerState.variant === "dense" && {
          minHeight: 48
        }), ({
          theme,
          ownerState
        }) => ownerState.variant === "regular" && theme.mixins.toolbar);
        const Toolbar = /* @__PURE__ */reactExports.forwardRef(function Toolbar2(inProps, ref) {
          const props = useThemeProps({
            props: inProps,
            name: "MuiToolbar"
          });
          const className = props.className,
            _props$component = props.component,
            component = _props$component === void 0 ? "div" : _props$component,
            _props$disableGutters = props.disableGutters,
            disableGutters = _props$disableGutters === void 0 ? false : _props$disableGutters,
            _props$variant = props.variant,
            variant = _props$variant === void 0 ? "regular" : _props$variant,
            other = _objectWithoutPropertiesLoose(props, _excluded);
          const ownerState = _extends({}, props, {
            component,
            disableGutters,
            variant
          });
          const classes = useUtilityClasses(ownerState);
          return /* @__PURE__ */jsxRuntimeExports.jsx(ToolbarRoot, _extends({
            as: component,
            className: clsx(classes.root, className),
            ref,
            ownerState
          }, other));
        });
        const Toolbar$1 = exports("T", Toolbar);
      }
    };
  });
})();
//# sourceMappingURL=Toolbar-legacy-BeIwS6lj.js.map