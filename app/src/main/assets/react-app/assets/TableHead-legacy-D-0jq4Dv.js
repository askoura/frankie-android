;
(function () {
  System.register(['./index-legacy-vEA8K-LS.js', './TableCell-legacy-Dp59XReJ.js', './use-service-legacy-Bcxdqe8R.js'], function (exports, module) {
    'use strict';

    var generateUtilityClass, generateUtilityClasses, reactExports, _objectWithoutPropertiesLoose, _extends, jsxRuntimeExports, clsx, Tablelvl2Context, styled, useThemeProps, composeClasses;
    return {
      setters: [module => {
        generateUtilityClass = module.g;
        generateUtilityClasses = module.f;
        reactExports = module.r;
        _objectWithoutPropertiesLoose = module.b;
        _extends = module._;
        jsxRuntimeExports = module.j;
        clsx = module.d;
      }, module => {
        Tablelvl2Context = module.b;
      }, module => {
        styled = module.h;
        useThemeProps = module.e;
        composeClasses = module.c;
      }],
      execute: function execute() {
        function getTableHeadUtilityClass(slot) {
          return generateUtilityClass('MuiTableHead', slot);
        }
        generateUtilityClasses('MuiTableHead', ['root']);
        const _excluded = ["className", "component"];
        const useUtilityClasses = ownerState => {
          const classes = ownerState.classes;
          const slots = {
            root: ["root"]
          };
          return composeClasses(slots, getTableHeadUtilityClass, classes);
        };
        const TableHeadRoot = styled("thead", {
          name: "MuiTableHead",
          slot: "Root",
          overridesResolver: (props, styles) => styles.root
        })({
          display: "table-header-group"
        });
        const tablelvl2 = {
          variant: "head"
        };
        const defaultComponent = "thead";
        const TableHead = /* @__PURE__ */reactExports.forwardRef(function TableHead2(inProps, ref) {
          const props = useThemeProps({
            props: inProps,
            name: "MuiTableHead"
          });
          const className = props.className,
            _props$component = props.component,
            component = _props$component === void 0 ? defaultComponent : _props$component,
            other = _objectWithoutPropertiesLoose(props, _excluded);
          const ownerState = _extends({}, props, {
            component
          });
          const classes = useUtilityClasses(ownerState);
          return /* @__PURE__ */jsxRuntimeExports.jsx(Tablelvl2Context.Provider, {
            value: tablelvl2,
            children: /* @__PURE__ */jsxRuntimeExports.jsx(TableHeadRoot, _extends({
              as: component,
              className: clsx(classes.root, className),
              ref,
              role: component === defaultComponent ? null : "rowgroup",
              ownerState
            }, other))
          });
        });
        const TableHead$1 = exports("T", TableHead);
      }
    };
  });
})();
//# sourceMappingURL=TableHead-legacy-D-0jq4Dv.js.map
