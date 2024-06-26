import { a6 as useTheme, m as jsxRuntimeExports, a3 as Box } from "./index-SSbj36jE.js";
import { D as useDispatch, A as useSelector, C as shallowEqual, E as valueChange, I as setDirty } from "./Android-BCdbvePO.js";
const choicesContainer = "_choicesContainer_iaaeb_1";
const choice = "_choice_iaaeb_1";
const choiceLabels = "_choiceLabels_iaaeb_19";
const styles = {
  choicesContainer,
  choice,
  choiceLabels
};
function NPS(props) {
  var _a, _b;
  const theme = useTheme();
  const dispatch = useDispatch();
  let columns = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const state = useSelector((state2) => {
    return state2.runState.values[props.component.qualifiedCode].value;
  }, shallowEqual);
  const handleChange = (option) => {
    dispatch(
      valueChange({
        componentCode: props.component.qualifiedCode,
        value: option
      })
    );
    dispatch(setDirty(props.component.qualifiedCode));
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { className: styles.choiceLabels, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { children: ((_a = props.component.content) == null ? void 0 : _a.lower_bound_hint) || "" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { children: ((_b = props.component.content) == null ? void 0 : _b.higher_bound_hint) || "" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { className: styles.choicesContainer, children: columns.map((option) => {
      const isSelected = state == option;
      return /* @__PURE__ */ jsxRuntimeExports.jsx(
        Box,
        {
          className: styles.choice,
          onClick: () => handleChange(option),
          sx: {
            color: isSelected ? "background.paper" : theme.textStyles.text.color,
            backgroundColor: isSelected ? "primary.main" : "background.paper"
          },
          children: option
        },
        option
      );
    }) })
  ] });
}
export {
  NPS as default
};
//# sourceMappingURL=NPS-8LYMPzLz.js.map
