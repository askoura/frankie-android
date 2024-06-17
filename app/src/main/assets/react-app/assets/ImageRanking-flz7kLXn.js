import { r as reactExports, m as jsxRuntimeExports, a6 as useTheme, a3 as Box } from "./index-SSbj36jE.js";
import { A as useSelector, C as shallowEqual, D as useDispatch, X as buildResourceUrl, I as setDirty, E as valueChange } from "./Android-BCdbvePO.js";
import { G as Grid } from "./Grid-Q6dLT8KU.js";
const imageGrid = "_imageGrid_gkz8d_1";
const imageContainer = "_imageContainer_gkz8d_5";
const rankContainer = "_rankContainer_gkz8d_11";
const rankValue = "_rankValue_gkz8d_19";
const styles = {
  imageGrid,
  imageContainer,
  rankContainer,
  rankValue
};
function ImageRanking(props) {
  const values = useSelector((state) => {
    let valuesMap = {};
    props.component.answers.forEach((element) => {
      valuesMap[element.qualifiedCode] = state.runState.values[element.qualifiedCode].value;
    });
    return valuesMap;
  }, shallowEqual);
  const dispatch = useDispatch();
  const containerRef = reactExports.useRef(null);
  const [width, setWidth] = reactExports.useState(800);
  reactExports.useEffect(() => {
    var _a;
    setWidth((_a = containerRef == null ? void 0 : containerRef.current) == null ? void 0 : _a.offsetWidth);
  }, [containerRef]);
  const imageWidth = (width - props.component.columns * props.component.spacing * 2) / props.component.columns;
  const imageHeight = imageWidth / (props.component.imageAspectRatio || 1);
  reactExports.useEffect(() => {
    const resizeListener = () => {
      var _a;
      setWidth((_a = containerRef == null ? void 0 : containerRef.current) == null ? void 0 : _a.offsetWidth);
    };
    window.addEventListener("resize", resizeListener);
    return () => {
      window.removeEventListener("resize", resizeListener);
    };
  }, []);
  const onItemClick = (componentCode) => {
    dispatch(setDirty(props.component.qualifiedCode));
    dispatch(setDirty(props.parentCode));
    if (+values[componentCode] > 0) {
      dispatch(valueChange({ componentCode, undefined: void 0 }));
    } else {
      let keys = Object.keys(values);
      let allValues = keys.map((key) => values[key]);
      for (var i = 1; i <= keys.length; i++) {
        if (!allValues.includes(i)) {
          dispatch(valueChange({ componentCode, value: i }));
          return;
        }
      }
    }
  };
  useSelector((state) => {
    return state.runState.values["Survey"].lang;
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Grid,
    {
      ref: containerRef,
      container: true,
      className: styles.imageGrid,
      children: props.component.answers.map((option) => {
        return /* @__PURE__ */ jsxRuntimeExports.jsx(
          ImageRankingItem,
          {
            option,
            spacing: props.component.spacing,
            columns: props.component.columns,
            hideText: props.component.hideText,
            onClick: () => onItemClick(option.qualifiedCode),
            parentCode: props.component.qualifiedCode,
            imageHeight,
            imageWidth
          },
          option.qualifiedCode
        );
      })
    }
  );
}
function ImageRankingItem(props) {
  var _a, _b;
  const theme = useTheme();
  const state = useSelector((state2) => {
    let answerState = state2.runState.values[props.option.qualifiedCode];
    return {
      showAnswer: typeof (answerState == null ? void 0 : answerState.relevance) == "undefined" || answerState.relevance,
      value: (answerState == null ? void 0 : answerState.value) || 0
    };
  }, shallowEqual);
  const backgroundImage = ((_a = props.option.resources) == null ? void 0 : _a.image) ? "url('".concat(buildResourceUrl(props.option.resources.image), "')") : "0";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Grid, { item: true, xs: 12 / props.columns, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Box,
      {
        className: styles.imageContainer,
        onClick: () => props.onClick(),
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        style: {
          backgroundImage,
          backgroundColor: theme.palette.background.default,
          margin: props.spacing + "px",
          boxShadow: 2,
          height: props.imageHeight + "px",
          border: state.checked ? "2px solid ".concat(theme.palette.primary.main) : "2px solid transparent"
        },
        children: state.value > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            style: {
              height: Math.min(props.imageHeight, props.imageWidth) + "px",
              width: Math.min(props.imageHeight, props.imageWidth) + "px",
              borderRadius: Math.min(props.imageHeight, props.imageWidth) / 2 + "px",
              fontSize: Math.min(props.imageHeight, props.imageWidth) / 2 + "px"
            },
            className: styles.rankContainer,
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "span",
              {
                className: styles.rankValue,
                style: {
                  color: theme.palette.primary.main
                },
                children: state.value
              }
            )
          }
        )
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
        children: (_b = props.option.content) == null ? void 0 : _b.label
      }
    )
  ] }, props.option.code);
}
export {
  ImageRanking as default
};
//# sourceMappingURL=ImageRanking-flz7kLXn.js.map
