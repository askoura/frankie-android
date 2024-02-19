import { r as reactExports, e as _objectWithoutPropertiesLoose, a_ as useControlled, i as useForkRef, a$ as useId, j as jsxRuntimeExports, _ as _extends } from "./index-RBnW6nvi.js";
import { R as RadioGroupContext } from "./RadioGroupContext-FoUH8Stq.js";
import { F as FormGroup$1 } from "./FormGroup-A52SYRjs.js";
const _excluded = ["actions", "children", "defaultValue", "name", "onChange", "value"];
const RadioGroup = /* @__PURE__ */ reactExports.forwardRef(function RadioGroup2(props, ref) {
  const {
    // private
    // eslint-disable-next-line react/prop-types
    actions,
    children,
    defaultValue,
    name: nameProp,
    onChange,
    value: valueProp
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded);
  const rootRef = reactExports.useRef(null);
  const [value, setValueState] = useControlled({
    controlled: valueProp,
    default: defaultValue,
    name: "RadioGroup"
  });
  reactExports.useImperativeHandle(actions, () => ({
    focus: () => {
      let input = rootRef.current.querySelector("input:not(:disabled):checked");
      if (!input) {
        input = rootRef.current.querySelector("input:not(:disabled)");
      }
      if (input) {
        input.focus();
      }
    }
  }), []);
  const handleRef = useForkRef(ref, rootRef);
  const name = useId(nameProp);
  const contextValue = reactExports.useMemo(() => ({
    name,
    onChange(event) {
      setValueState(event.target.value);
      if (onChange) {
        onChange(event, event.target.value);
      }
    },
    value
  }), [name, onChange, setValueState, value]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(RadioGroupContext.Provider, {
    value: contextValue,
    children: /* @__PURE__ */ jsxRuntimeExports.jsx(FormGroup$1, _extends({
      role: "radiogroup",
      ref: handleRef
    }, other, {
      children
    }))
  });
});
const FormGroup = RadioGroup;
export {
  FormGroup as F
};
//# sourceMappingURL=RadioGroup-GWUTYQXl.js.map
