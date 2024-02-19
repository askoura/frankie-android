;
(function () {
  System.register(['./index-legacy-T3s18jo3.js', './TableRow-legacy-QjxmKuUL.js'], function (exports, module) {
    'use strict';

    var generateUtilityClass, generateUtilityClasses, styled, reactExports, useThemeProps, _objectWithoutPropertiesLoose, _extends, jsxRuntimeExports, clsx, composeClasses, Tablelvl2Context;
    return {
      setters: [module => {
        generateUtilityClass = module.a;
        generateUtilityClasses = module.g;
        styled = module.s;
        reactExports = module.r;
        useThemeProps = module.u;
        _objectWithoutPropertiesLoose = module.e;
        _extends = module._;
        jsxRuntimeExports = module.j;
        clsx = module.f;
        composeClasses = module.h;
      }, module => {
        Tablelvl2Context = module.e;
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
        const TableHead$1 = exports('T', TableHead);
      }
    };
  });
})();
//# sourceMappingURL=TableHead-legacy-fccLWbma.js.map
