import { m as jsxRuntimeExports } from "./index-Cx0w2OoW.js";
import { A as useSelector, C as shallowEqual, D as useDispatch, Y as useTranslation, Z as TextareaAutosize, E as valueChange, I as setDirty } from "./Android-Bs09bTqg.js";
const questionItem = "_questionItem_pxk6e_1";
const paragraph = "_paragraph_pxk6e_15";
const wordCount = "_wordCount_pxk6e_19";
const styles = {
  questionItem,
  paragraph,
  wordCount
};
function ParagraphQuestion(props) {
  var _a, _b, _c;
  const state = useSelector((state2) => {
    let questionState = state2.runState.values[props.component.qualifiedCode];
    let show_errors = state2.runState.values.Survey.show_errors;
    let isDirty = state2.templateState[props.component.qualifiedCode];
    let validity = questionState == null ? void 0 : questionState.validity;
    let invalid = (show_errors || isDirty) && validity === false;
    let value = (questionState == null ? void 0 : questionState.value) || "";
    return {
      value,
      wordCount: window.FrankieScripts ? window.FrankieScripts.wordCount(value) : 0,
      invalid
    };
  }, shallowEqual);
  const dispatch = useDispatch();
  const { t } = useTranslation("run");
  const handleChange = (event) => {
    dispatch(
      valueChange({
        componentCode: event.target.name,
        value: event.target.value
      })
    );
  };
  const lostFocus = (event) => {
    dispatch(setDirty(event.target.name));
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: styles.questionItem, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      TextareaAutosize,
      {
        className: styles.paragraph,
        required: ((_b = (_a = props.component.validation) == null ? void 0 : _a.validation_required) == null ? void 0 : _b.isActive) ? true : false,
        id: props.component.qualifiedCode,
        name: props.component.qualifiedCode,
        minRows: props.component.minRows || 2,
        label: ((_c = props.component.content) == null ? void 0 : _c.hint) || "",
        onChange: handleChange,
        onBlur: lostFocus,
        value: state.value
      }
    ),
    props.component.showWordCount ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: styles.wordCount, children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t("word_count", { count: state.wordCount }) }) }) : ""
  ] });
}
export {
  ParagraphQuestion as default
};
//# sourceMappingURL=ParagraphQuestion-CIkCHMVr.js.map
