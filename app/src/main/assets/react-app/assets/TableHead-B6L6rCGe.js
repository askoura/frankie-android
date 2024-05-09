import { g as generateUtilityClass, f as generateUtilityClasses, r as reactExports, b as _objectWithoutPropertiesLoose, _ as _extends, j as jsxRuntimeExports, d as clsx } from "./index-DqOHBPA_.js";
import { b as Tablelvl2Context } from "./TableCell-CZrIf-eW.js";
import { h as styled, e as useThemeProps, c as composeClasses } from "./use-service-B2Fih2ge.js";
function getTableHeadUtilityClass(slot) {
  return generateUtilityClass("MuiTableHead", slot);
}
generateUtilityClasses("MuiTableHead", ["root"]);
const _excluded = ["className", "component"];
const useUtilityClasses = (ownerState) => {
  const {
    classes
  } = ownerState;
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
const TableHead = /* @__PURE__ */ reactExports.forwardRef(function TableHead2(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiTableHead"
  });
  const {
    className,
    component = defaultComponent
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded);
  const ownerState = _extends({}, props, {
    component
  });
  const classes = useUtilityClasses(ownerState);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Tablelvl2Context.Provider, {
    value: tablelvl2,
    children: /* @__PURE__ */ jsxRuntimeExports.jsx(TableHeadRoot, _extends({
      as: component,
      className: clsx(classes.root, className),
      ref,
      role: component === defaultComponent ? null : "rowgroup",
      ownerState
    }, other))
  });
});
const TableHead$1 = TableHead;
export {
  TableHead$1 as T
};
//# sourceMappingURL=TableHead-B6L6rCGe.js.map
