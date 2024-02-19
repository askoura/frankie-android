import { j as jsxRuntimeExports, R as React, b5 as useTheme, E as useSelector, z as useDispatch, aJ as valueChange } from "./index-RBnW6nvi.js";
import Validation from "./index-LD7W28vy.js";
import { s as styles } from "./SCQArrayDesign.module-01m2Bg02.js";
import { T as TableContainer, a as Table, d as TableBody, b as TableRow, c as TableCell } from "./TableRow-esdE-LAL.js";
import "./index-8ARaTUZZ.js";
import "./ErrorOutlineOutlined-c8Q1J9r2.js";
function SCQIconArray(props) {
  let columns = props.component.answers.filter(
    (answer) => answer.type == "column"
  );
  let rows = props.component.answers.filter((answer) => answer.type == "row");
  return /* @__PURE__ */ jsxRuntimeExports.jsx(TableContainer, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Table, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(TableBody, { children: rows.map((answer) => {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(React.Fragment, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      SCQArrayRow,
      {
        answer,
        choices: columns
      },
      answer.qualifiedCode
    ) }, answer.qualifiedCode);
  }) }) }) });
}
function SCQArrayRow(props) {
  var _a;
  const theme = useTheme();
  const isDirty = useSelector((state2) => {
    var _a2;
    return (_a2 = state2.templateState[props.answer.qualifiedCode]) == null ? void 0 : _a2.isDirty;
  });
  const show_errors = useSelector((state2) => state2.runState.values.Survey.show_errors);
  const state = useSelector((state2) => state2.runState.values[props.answer.qualifiedCode]);
  const validity = React.useMemo(() => state == null ? void 0 : state.validity, [state]);
  const value = React.useMemo(() => state == null ? void 0 : state.value, [state]);
  const relevance = React.useMemo(() => state == null ? void 0 : state.relevance, [state]);
  const dispatch = useDispatch();
  const handleChange = (value2) => {
    dispatch(
      valueChange({
        componentCode: props.answer.qualifiedCode,
        value: value2
      })
    );
  };
  const invalid = (show_errors || isDirty) && validity === false;
  return typeof relevance === "undefined" || relevance ? /* @__PURE__ */ jsxRuntimeExports.jsxs(React.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        TableCell,
        {
          sx: {
            fontFamily: theme.textStyles.text.font,
            color: theme.textStyles.text.color,
            fontSize: theme.textStyles.text.size,
            borderBottom: invalid ? "0" : "",
            padding: "8px"
          },
          children: (_a = props.answer.content) == null ? void 0 : _a.label
        }
      ),
      props.choices.map((option) => {
        return /* @__PURE__ */ jsxRuntimeExports.jsx(
          TableCell,
          {
            component: "th",
            scope: "row",
            sx: {
              borderBottom: invalid ? "0" : "",
              padding: "8px"
            },
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                onClick: () => handleChange(option.code),
                style: {
                  opacity: value == option.code ? 1 : 0.2,
                  height: "64px",
                  width: "px",
                  borderRadius: "8px"
                },
                className: styles.svgContainer,
                dangerouslySetInnerHTML: { __html: option.icon || "" }
              }
            )
          },
          option.code
        );
      })
    ] }, props.answer.code),
    invalid ? /* @__PURE__ */ jsxRuntimeExports.jsx(TableRow, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      TableCell,
      {
        sx: { padding: "8px" },
        colSpan: props.choices ? props.choices.length + 1 : 1,
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(Validation, { component: props.answer })
      }
    ) }) : ""
  ] }) : "";
}
export {
  SCQIconArray as default
};
//# sourceMappingURL=SCQIconArray-zd-_EQqN.js.map
