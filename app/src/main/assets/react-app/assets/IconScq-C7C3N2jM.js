import { y as useTheme, j as jsxRuntimeExports, B as Box } from "./index-DqOHBPA_.js";
import { A as useSelector, K as useDispatch, aI as valueChange } from "./use-service-B2Fih2ge.js";
import { s as shallowEqual } from "./index-DCDdj0_I.js";
import { G as Grid } from "./Grid-nW54Jdfg.js";
import "./index-BibfXq_c.js";
import "./Toolbar-ANEXYwkQ.js";
import "./Card-CfNjVYcu.js";
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
function IconScq(props) {
  var _a;
  const theme = useTheme();
  const state = useSelector((state2) => {
    let questionState = state2.runState.values[props.component.qualifiedCode];
    let show_errors = state2.runState.values.Survey.show_errors;
    let isDirty = state2.templateState[props.component.qualifiedCode];
    return {
      value: (questionState == null ? void 0 : questionState.value) || "",
      showValidation: (show_errors || isDirty) && (questionState == null ? void 0 : questionState.validity) === false
    };
  }, shallowEqual);
  const dispatch = useDispatch();
  const handleChange = (componentCode, value) => {
    dispatch(valueChange({ componentCode, value }));
  };
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
        var _a2;
        const isSelected = state.value == option.code;
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(Grid, { item: true, xs: 12 / props.component.columns, children: [
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
                  onClick: () => handleChange(props.component.qualifiedCode, option.code),
                  style: {
                    height: (props.component.iconSize || 64) + "px",
                    width: (props.component.iconSize || 64) + "px",
                    borderRadius: "8px",
                    color: isSelected ? theme.palette.primary.main : theme.textStyles.text.color
                  },
                  className: styles.svgContainer,
                  dangerouslySetInnerHTML: {
                    __html: option.icon ? option.icon : ""
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
                color: isSelected ? theme.palette.primary.main : theme.textStyles.text.color,
                fontSize: theme.textStyles.text.size
              },
              children: (_a2 = option.content) == null ? void 0 : _a2.label
            }
          )
        ] }, option.code);
      })
    }
  );
}
export {
  IconScq as default
};
//# sourceMappingURL=IconScq-C7C3N2jM.js.map
