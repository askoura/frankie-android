import { j as jsxRuntimeExports, r as reactExports, B as Box } from "./index-DqOHBPA_.js";
import { A as useSelector, K as useDispatch, ag as FormControl, p as useTheme, aI as valueChange, aY as setDirty } from "./use-service-B2Fih2ge.js";
import Validation from "./index-DPzY-VP_.js";
import { s as shallowEqual } from "./index-DCDdj0_I.js";
import { F as FormGroup } from "./RadioGroup-BzgRCXwX.js";
import { F as FormControlLabel } from "./FormControlLabel-BnMNrqju.js";
import { R as Radio } from "./Radio-Ci1SsyT_.js";
import { T as TextField } from "./TextField-Fj584c9C.js";
import "./index-PBFup7AU.js";
import "./ErrorOutlineOutlined-BtTKAMZ9.js";
import "./index-DNlSF8oa.js";
import "./index-BibfXq_c.js";
import "./Toolbar-ANEXYwkQ.js";
import "./Card-CfNjVYcu.js";
import "./RadioGroupContext-DZr9FG9D.js";
import "./FormGroup-BM4rjdom.js";
import "./SwitchBase-rlcQTk7F.js";
import "./radioClasses-D8j8JIb8.js";
function SCQ(props) {
  const state = useSelector((state2) => {
    let questionState = state2.runState.values[props.component.qualifiedCode];
    return {
      value: (questionState == null ? void 0 : questionState.value) || ""
    };
  }, shallowEqual);
  const dispatch = useDispatch();
  const handleChange = (event) => {
    dispatch(
      valueChange({
        componentCode: event.target.name,
        value: event.target.value
      })
    );
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(FormControl, { component: "fieldset", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    FormGroup,
    {
      name: props.component.qualifiedCode,
      value: state.value,
      onChange: handleChange,
      children: props.component.answers.map((option) => {
        if (option.type === "other") {
          return /* @__PURE__ */ jsxRuntimeExports.jsx(
            ScqChoiceOther,
            {
              parentCode: props.component.qualifiedCode,
              Choice: option
            },
            option.qualifiedCode
          );
        } else {
          return /* @__PURE__ */ jsxRuntimeExports.jsx(ScqChoice, { Choice: option }, option.qualifiedCode);
        }
      })
    }
  ) });
}
function ScqChoice(props) {
  const theme = useTheme();
  const showChoice = () => {
    var _a;
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      FormControlLabel,
      {
        control: /* @__PURE__ */ jsxRuntimeExports.jsx(Radio, {}),
        label: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Box,
          {
            sx: {
              fontFamily: theme.textStyles.text.font,
              color: theme.textStyles.text.color,
              fontSize: theme.textStyles.text.size
            },
            children: (_a = props.Choice.content) == null ? void 0 : _a.label
          }
        ),
        value: props.Choice.code
      },
      props.Choice.qualifiedCode
    );
  };
  return showChoice ? showChoice() : "";
}
function ScqChoiceOther(props) {
  const theme = useTheme();
  const nestedTextChild = props.Choice.answers[0];
  const state = useSelector((state2) => {
    let choiceState = state2.runState.values[props.Choice.qualifiedCode];
    let childState = state2.runState.values[nestedTextChild.qualifiedCode];
    let show_errors = state2.runState.values.Survey.show_errors;
    let isChildDirty = state2.templateState[nestedTextChild.qualifiedCode];
    return {
      showChoice: typeof (choiceState == null ? void 0 : choiceState.relevance) === "undefined" || choiceState.relevance,
      childInvalid: (show_errors || isChildDirty) && (childState == null ? void 0 : childState.relevance) === true && (childState == null ? void 0 : childState.validity) === false,
      value: (childState == null ? void 0 : childState.value) || ""
    };
  }, shallowEqual);
  const dispatch = useDispatch();
  const handleChange = (event) => {
    dispatch(
      valueChange({
        componentCode: event.target.name,
        value: event.target.value
      })
    );
  };
  const handleFocus = (event) => {
    dispatch(
      valueChange({ componentCode: props.parentCode, value: props.Choice.code })
    );
  };
  const lostFocus = (event) => {
    dispatch(setDirty(event.target.name));
  };
  const textInput = reactExports.useRef();
  const onButtonClick = (event) => {
    if (event.target.checked) {
      textInput.current.focus();
    }
  };
  const showChoice = () => {
    var _a, _b, _c;
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-left d-flex", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        FormControlLabel,
        {
          control: /* @__PURE__ */ jsxRuntimeExports.jsx(Radio, {}),
          label: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-100", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            TextField,
            {
              variant: "standard",
              required: ((_a = state.textChild) == null ? void 0 : _a.relevance) && ((_b = nestedTextChild.validation) == null ? void 0 : _b.required),
              inputRef: textInput,
              id: nestedTextChild.qualifiedCode,
              name: nestedTextChild.qualifiedCode,
              label: (_c = props.Choice.content) == null ? void 0 : _c.label,
              onChange: handleChange,
              onFocus: handleFocus,
              onBlur: lostFocus,
              value: state.value,
              InputProps: {
                sx: {
                  fontFamily: theme.textStyles.text.font,
                  color: theme.textStyles.text.color,
                  fontSize: theme.textStyles.text.size
                }
              },
              helperText: state.childInvalid ? /* @__PURE__ */ jsxRuntimeExports.jsx(Validation, { component: nestedTextChild, limit: 1 }) : ""
            }
          ) }),
          onChange: onButtonClick,
          value: props.Choice.code
        },
        props.Choice.qualifiedCode
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", {})
    ] });
  };
  return state.showChoice ? showChoice() : "";
}
export {
  SCQ as default
};
//# sourceMappingURL=Scq-CASjt4RL.js.map