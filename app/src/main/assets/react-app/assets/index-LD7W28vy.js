import { E as useSelector, j as jsxRuntimeExports } from "./index-RBnW6nvi.js";
import { V as ValidationItem } from "./index-8ARaTUZZ.js";
import "./ErrorOutlineOutlined-c8Q1J9r2.js";
function Validation(props) {
  const validation = useSelector((state) => {
    if (!props.component.validation) {
      return {};
    } else {
      var validation2 = {};
      Object.keys(props.component.validation).forEach((key) => {
        var value = state.runState.values[props.component.qualifiedCode][key];
        if (value) {
          validation2[key] = value;
        }
      });
      return validation2;
    }
  });
  function messages() {
    if (props.component.validation) {
      let array = Object.keys(props.component.validation).filter(
        (key) => validation[key]
      );
      let limit = props.limit ? props.limit : array.length;
      return array.slice(0, limit).map((key, index) => {
        return /* @__PURE__ */ jsxRuntimeExports.jsx(
          ValidationItem,
          {
            name: key,
            validation: props.component.validation[key]
          },
          index
        );
      });
    } else {
      return "";
    }
  }
  return messages();
}
export {
  Validation as default
};
//# sourceMappingURL=index-LD7W28vy.js.map
