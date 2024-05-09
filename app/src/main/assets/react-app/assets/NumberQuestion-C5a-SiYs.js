import { j as jsxRuntimeExports } from "./index-DqOHBPA_.js";
import { p as useTheme, A as useSelector, K as useDispatch, aI as valueChange, aY as setDirty } from "./use-service-B2Fih2ge.js";
import { s as shallowEqual } from "./index-DCDdj0_I.js";
import { T as TextField } from "./TextField-Fj584c9C.js";
import "./index-BibfXq_c.js";
import "./Toolbar-ANEXYwkQ.js";
import "./Card-CfNjVYcu.js";
const questionItem = "_questionItem_7ep8w_1";
const styles = {
  questionItem
};
function NumberQuestion(props) {
  var _a, _b, _c;
  const theme = useTheme();
  const state = useSelector((state2) => {
    let questionState = state2.runState.values[props.component.qualifiedCode];
    let show_errors = state2.runState.values.Survey.show_errors;
    let isDirty = state2.templateState[props.component.qualifiedCode];
    let validity = questionState == null ? void 0 : questionState.validity;
    let invalid = (show_errors || isDirty) && validity === false;
    return {
      value: questionState == null ? void 0 : questionState.value,
      invalid
    };
  }, shallowEqual);
  const dispatch = useDispatch();
  const cleanupValue = (oldValue, newValue) => {
    const regex = props.component.decimal_separator == "." ? /^[0-9]+\.?[0-9]*$/ : props.component.decimal_separator == "," ? /^[0-9]+,?[0-9]*$/ : /^[0-9]*$/;
    if (newValue == "") {
      return void 0;
    }
    if (regex.test(newValue)) {
      let withDecimal = convertToDecimal(newValue);
      let processed = +withDecimal;
      let returning = isNaN(processed) ? oldValue : withDecimal;
      return returning;
    } else {
      return oldValue;
    }
  };
  const convertToDecimal = (value) => {
    if (props.component.decimal_separator != ",") {
      return value;
    }
    let stringValue = value.toString();
    return stringValue.replace(",", ".");
  };
  const formatValue = (value) => {
    return value === void 0 ? "" : props.component.decimal_separator == "," ? value.toString().replace(".", ",") : value;
  };
  const handleChange = (event) => {
    dispatch(
      valueChange({
        componentCode: event.target.name,
        value: cleanupValue(state.value, event.target.value)
      })
    );
  };
  const lostFocus = (event) => {
    dispatch(setDirty(event.target.name));
    let processed = +state.value;
    if (!isNaN(processed)) {
      dispatch(
        valueChange({
          componentCode: props.component.qualifiedCode,
          value: processed
        })
      );
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: styles.questionItem, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    TextField,
    {
      variant: "standard",
      required: ((_b = (_a = props.component.validation) == null ? void 0 : _a.validation_required) == null ? void 0 : _b.isActive) ? true : false,
      id: props.component.qualifiedCode,
      name: props.component.qualifiedCode,
      label: ((_c = props.component.content) == null ? void 0 : _c.hint) || "",
      onChange: handleChange,
      onBlur: lostFocus,
      inputProps: { maxLength: props.component.maxChars || void 0 },
      value: formatValue(state.value),
      error: state.invalid,
      InputProps: {
        sx: {
          fontFamily: theme.textStyles.text.font,
          color: theme.textStyles.text.color,
          fontSize: theme.textStyles.text.size
        }
      }
    }
  ) });
}
export {
  NumberQuestion as default
};
//# sourceMappingURL=NumberQuestion-C5a-SiYs.js.map
