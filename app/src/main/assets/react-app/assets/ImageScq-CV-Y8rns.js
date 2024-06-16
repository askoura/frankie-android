import { a6 as useTheme, m as jsxRuntimeExports, a3 as Box } from "./index-Cx0w2OoW.js";
import { A as useSelector, C as shallowEqual, D as useDispatch, X as buildResourceUrl, E as valueChange } from "./Android-Bs09bTqg.js";
import { G as Grid } from "./Grid-hRBaB532.js";
import { R as Radio } from "./Radio-KkLFnonw.js";
import "./SwitchBase-BImz8Wqc.js";
import "./RadioGroupContext-CvytGKix.js";
const imageContainer = "_imageContainer_1dbyo_1";
const imageGrid = "_imageGrid_1dbyo_8";
const selection = "_selection_1dbyo_12";
const styles = {
  imageContainer,
  imageGrid,
  selection
};
function ImageScq(props) {
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
  useSelector((state2) => {
    return state2.runState.values["Survey"].lang;
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Grid,
    {
      container: true,
      spacing: props.component.spacing,
      className: styles.imageGrid,
      children: props.component.answers.map((option) => {
        var _a, _b, _c;
        const backgroundImage = ((_a = option.resources) == null ? void 0 : _a.image) ? "url('".concat(buildResourceUrl((_b = option.resources) == null ? void 0 : _b.image), "')") : "0";
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(Grid, { item: true, xs: 12 / props.component.columns, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Box,
            {
              className: styles.imageContainer,
              onClick: () => handleChange(props.component.qualifiedCode, option.code),
              style: {
                paddingTop: 100 / props.component.imageAspectRatio + "%",
                borderRadius: "4px",
                backgroundImage,
                backgroundColor: theme.palette.background.default,
                border: state.value === option.code ? "2px solid ".concat(theme.palette.primary.main) : "2px solid transparent"
              },
              children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: styles.selection, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                Radio,
                {
                  checked: state.value === option.code,
                  onChange: (event) => handleChange(event.target.name, event.target.value),
                  value: option.code,
                  name: props.component.qualifiedCode
                }
              ) })
            }
          ),
          !props.component.hideText && /* @__PURE__ */ jsxRuntimeExports.jsx(
            Box,
            {
              sx: {
                fontFamily: theme.textStyles.text.font,
                color: theme.textStyles.text.color,
                fontSize: theme.textStyles.text.size
              },
              children: (_c = option.content) == null ? void 0 : _c.label
            }
          )
        ] }, option.code);
      })
    }
  );
}
export {
  ImageScq as default
};
//# sourceMappingURL=ImageScq-CV-Y8rns.js.map
