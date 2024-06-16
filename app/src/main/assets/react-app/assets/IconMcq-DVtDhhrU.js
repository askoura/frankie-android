import { a6 as useTheme, m as jsxRuntimeExports, a3 as Box } from "./index-Cx0w2OoW.js";
import { A as useSelector, C as shallowEqual, D as useDispatch, E as valueChange } from "./Android-Bs09bTqg.js";
import { G as Grid } from "./Grid-hRBaB532.js";
const imageContainer = "_imageContainer_mcjxc_1";
const imageGrid = "_imageGrid_mcjxc_7";
const selection = "_selection_mcjxc_11";
const svgContainer = "_svgContainer_mcjxc_16";
const styles = {
  imageContainer,
  imageGrid,
  selection,
  svgContainer
};
function IconMcq(props) {
  var _a;
  const theme = useTheme();
  useSelector((state2) => {
    let questionState = state2.runState.values[props.component.qualifiedCode];
    let show_errors = state2.runState.values.Survey.show_errors;
    let isDirty = state2.templateState[props.component.qualifiedCode];
    return {
      value: (questionState == null ? void 0 : questionState.value) || "",
      showValidation: (show_errors || isDirty) && (questionState == null ? void 0 : questionState.validity) === false
    };
  }, shallowEqual);
  useDispatch();
  const hideText = ((_a = props.component) == null ? void 0 : _a.hideText) || false;
  useSelector((state2) => {
    return state2.runState.values["Survey"].lang;
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Grid,
    {
      container: true,
      className: styles.imageGrid,
      spacing: props.component.spacing || 8,
      children: props.component.answers.map((option) => {
        return /* @__PURE__ */ jsxRuntimeExports.jsx(
          IconMcqChoice,
          {
            component: option,
            columns: props.component.columns || 64,
            theme,
            iconSize: props.component.iconSize || 64,
            hideText
          },
          option.code
        );
      })
    }
  );
}
function IconMcqChoice({ component, iconSize, columns, hideText, theme }) {
  var _a;
  const dispatch = useDispatch();
  const checked = useSelector(
    (state) => state.runState.values[component.qualifiedCode].value || false
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Grid, { item: true, xs: 12 / columns, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        style: {
          display: "flex",
          justifyContent: "center",
          width: "100%"
        },
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Box,
          {
            onClick: () => dispatch(
              valueChange({
                componentCode: component.qualifiedCode,
                value: !checked
              })
            ),
            style: {
              height: iconSize + "px",
              width: iconSize + "px",
              borderRadius: "8px",
              color: checked ? theme.palette.primary.main : theme.textStyles.text.color
            },
            className: styles.svgContainer,
            dangerouslySetInnerHTML: {
              __html: component.icon ? component.icon : ""
            }
          }
        )
      }
    ),
    !hideText && /* @__PURE__ */ jsxRuntimeExports.jsx(
      Box,
      {
        sx: {
          textAlign: "center",
          fontFamily: theme.textStyles.text.font,
          color: checked ? theme.palette.primary.main : theme.textStyles.text.color,
          fontSize: theme.textStyles.text.size
        },
        children: (_a = component.content) == null ? void 0 : _a.label
      }
    )
  ] });
}
export {
  IconMcq as default
};
//# sourceMappingURL=IconMcq-DVtDhhrU.js.map
