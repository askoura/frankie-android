import { j as jsxRuntimeExports, y as useTheme, B as Box } from "./index-DqOHBPA_.js";
import { A as useSelector, K as useDispatch, b3 as buildResourceUrl, aI as valueChange, aY as setDirty } from "./use-service-B2Fih2ge.js";
import { G as Grid } from "./Grid-nW54Jdfg.js";
import { s as shallowEqual } from "./index-DCDdj0_I.js";
import { C as Card } from "./Card-CfNjVYcu.js";
import { C as Checkbox } from "./Checkbox-47V_54xr.js";
import "./index-BibfXq_c.js";
import "./Toolbar-ANEXYwkQ.js";
import "./SwitchBase-rlcQTk7F.js";
const imageGrid = "_imageGrid_htjsk_1";
const imageContainer = "_imageContainer_htjsk_5";
const selection = "_selection_htjsk_12";
const styles = {
  imageGrid,
  imageContainer,
  selection
};
function ImageMcq(props) {
  useSelector((state) => {
    return state.runState.values["Survey"].lang;
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Grid,
    {
      spacing: props.component.spacing,
      container: true,
      className: styles.imageGrid,
      children: props.component.answers.map((option) => {
        return /* @__PURE__ */ jsxRuntimeExports.jsx(
          ImageMcqItem,
          {
            option,
            aspectRatio: props.component.imageAspectRatio,
            columns: props.component.columns,
            hideText: props.component.hideText,
            parentCode: props.component.qualifiedCode
          },
          option.qualifiedCode
        );
      })
    }
  );
}
function ImageMcqItem(props) {
  var _a, _b, _c;
  const theme = useTheme();
  const state = useSelector((state2) => {
    let answerState = state2.runState.values[props.option.qualifiedCode];
    return {
      showAnswer: typeof (answerState == null ? void 0 : answerState.relevance) == "undefined" || answerState.relevance,
      checked: (answerState == null ? void 0 : answerState.value) || false
    };
  }, shallowEqual);
  const dispatch = useDispatch();
  const handleChange = (componentCode, value) => {
    dispatch(valueChange({ componentCode, value }));
    dispatch(setDirty(componentCode));
    dispatch(setDirty(props.parentCode));
  };
  const backgroundImage = ((_a = props.option.resources) == null ? void 0 : _a.image) ? "url('".concat(buildResourceUrl((_b = props.option.resources) == null ? void 0 : _b.image), "')") : "0";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Grid, { item: true, xs: 12 / props.columns, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Card,
      {
        className: styles.imageContainer,
        onClick: () => handleChange(props.option.qualifiedCode, !state.checked),
        style: {
          paddingTop: 100 / props.aspectRatio + "%",
          backgroundImage,
          backgroundColor: theme.palette.background.default,
          border: state.checked ? "2px solid ".concat(theme.palette.primary.main) : "2px solid transparent"
        },
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: styles.selection, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Checkbox,
          {
            onChange: (event) => handleChange(props.option.qualifiedCode, !state.checked),
            checked: state.checked
          }
        ) })
      }
    ),
    !props.hideText && /* @__PURE__ */ jsxRuntimeExports.jsx(
      Box,
      {
        sx: {
          fontFamily: theme.textStyles.text.font,
          color: theme.textStyles.text.color,
          fontSize: theme.textStyles.text.size
        },
        children: (_c = props.option.content) == null ? void 0 : _c.label
      }
    )
  ] }, props.option.code);
}
export {
  ImageMcq as default
};
//# sourceMappingURL=ImageMcq-B0AORBvE.js.map
