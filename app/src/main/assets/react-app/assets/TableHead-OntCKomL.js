import { a as generateUtilityClass, g as generateUtilityClasses, s as styled, r as reactExports, u as useThemeProps, e as _objectWithoutPropertiesLoose, _ as _extends, j as jsxRuntimeExports, f as clsx, h as composeClasses } from "./index-RBnW6nvi.js";
import { e as Tablelvl2Context } from "./TableRow-esdE-LAL.js";
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
//# sourceMappingURL=TableHead-OntCKomL.js.map
