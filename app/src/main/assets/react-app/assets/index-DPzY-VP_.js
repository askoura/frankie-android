import { j as jsxRuntimeExports } from "./index-DqOHBPA_.js";
import { A as useSelector } from "./use-service-B2Fih2ge.js";
import { V as ValidationItem } from "./index-PBFup7AU.js";
import { c as createSelector } from "./index-DNlSF8oa.js";
import "./ErrorOutlineOutlined-BtTKAMZ9.js";
function Validation(props) {
  const selectValidation = (state) => (props.component.validation ? state.runState.values[props.component.qualifiedCode] : {}) || {};
  const captureValidation = createSelector(
    [selectValidation],
    (selectedState) => {
      var obj = {};
      Object.keys(props.component.validation).forEach((key) => {
        var value = selectedState[key];
        if (value) {
          obj[key] = value;
        }
      });
      return obj;
    }
  );
  const validation = useSelector(captureValidation);
  const messages = () => {
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
  };
  return messages();
}
export {
  Validation as default
};
//# sourceMappingURL=index-DPzY-VP_.js.map
