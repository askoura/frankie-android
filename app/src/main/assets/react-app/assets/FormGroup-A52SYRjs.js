import { a as generateUtilityClass, g as generateUtilityClasses, s as styled, _ as _extends, r as reactExports, u as useThemeProps, e as _objectWithoutPropertiesLoose, aS as useFormControl, bn as formControlState, j as jsxRuntimeExports, f as clsx, h as composeClasses } from "./index-RBnW6nvi.js";
function getFormGroupUtilityClass(slot) {
  return generateUtilityClass("MuiFormGroup", slot);
}
generateUtilityClasses("MuiFormGroup", ["root", "row", "error"]);
const _excluded = ["className", "row"];
const useUtilityClasses = (ownerState) => {
  const {
    classes,
    row,
    error
  } = ownerState;
  const slots = {
    root: ["root", row && "row", error && "error"]
  };
  return composeClasses(slots, getFormGroupUtilityClass, classes);
};
const FormGroupRoot = styled("div", {
  name: "MuiFormGroup",
  slot: "Root",
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.root, ownerState.row && styles.row];
  }
})(({
  ownerState
}) => _extends({
  display: "flex",
  flexDirection: "column",
  flexWrap: "wrap"
}, ownerState.row && {
  flexDirection: "row"
}));
const FormGroup = /* @__PURE__ */ reactExports.forwardRef(function FormGroup2(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiFormGroup"
  });
  const {
    className,
    row = false
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded);
  const muiFormControl = useFormControl();
  const fcs = formControlState({
    props,
    muiFormControl,
    states: ["error"]
  });
  const ownerState = _extends({}, props, {
    row,
    error: fcs.error
  });
  const classes = useUtilityClasses(ownerState);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(FormGroupRoot, _extends({
    className: clsx(classes.root, className),
    ownerState,
    ref
  }, other));
});
const FormGroup$1 = FormGroup;
export {
  FormGroup$1 as F
};
//# sourceMappingURL=FormGroup-A52SYRjs.js.map