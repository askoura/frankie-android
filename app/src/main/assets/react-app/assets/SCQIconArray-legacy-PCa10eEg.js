;
(function () {
  System.register(['./index-legacy-T3s18jo3.js', './index-legacy-JNavHwgI.js', './SCQArrayDesign.module-legacy-24WqvMVt.js', './TableRow-legacy-QjxmKuUL.js', './index-legacy--XG2187u.js', './ErrorOutlineOutlined-legacy-c8N5-R3U.js'], function (exports, module) {
    'use strict';

    var jsxRuntimeExports, React, useTheme, useSelector, useDispatch, valueChange, Validation, styles, TableContainer, Table, TableBody, TableRow, TableCell;
    return {
      setters: [module => {
        jsxRuntimeExports = module.j;
        React = module.R;
        useTheme = module.b5;
        useSelector = module.E;
        useDispatch = module.z;
        valueChange = module.aJ;
      }, module => {
        Validation = module.default;
      }, module => {
        styles = module.s;
      }, module => {
        TableContainer = module.T;
        Table = module.a;
        TableBody = module.d;
        TableRow = module.b;
        TableCell = module.c;
      }, null, null],
      execute: function execute() {
        exports('default', SCQIconArray);
        function SCQIconArray(props) {
          let columns = props.component.answers.filter(answer => answer.type == "column");
          let rows = props.component.answers.filter(answer => answer.type == "row");
          return /* @__PURE__ */jsxRuntimeExports.jsx(TableContainer, {
            children: /* @__PURE__ */jsxRuntimeExports.jsx(Table, {
              children: /* @__PURE__ */jsxRuntimeExports.jsx(TableBody, {
                children: rows.map(answer => {
                  return /* @__PURE__ */jsxRuntimeExports.jsx(React.Fragment, {
                    children: /* @__PURE__ */jsxRuntimeExports.jsx(SCQArrayRow, {
                      answer,
                      choices: columns
                    }, answer.qualifiedCode)
                  }, answer.qualifiedCode);
                })
              })
            })
          });
        }
        function SCQArrayRow(props) {
          var _props$answer$content;
          const theme = useTheme();
          const isDirty = useSelector(state2 => {
            var _state2$templateState;
            return (_state2$templateState = state2.templateState[props.answer.qualifiedCode]) === null || _state2$templateState === void 0 ? void 0 : _state2$templateState.isDirty;
          });
          const show_errors = useSelector(state2 => state2.runState.values.Survey.show_errors);
          const state = useSelector(state2 => state2.runState.values[props.answer.qualifiedCode]);
          const validity = React.useMemo(() => state === null || state === void 0 ? void 0 : state.validity, [state]);
          const value = React.useMemo(() => state === null || state === void 0 ? void 0 : state.value, [state]);
          const relevance = React.useMemo(() => state === null || state === void 0 ? void 0 : state.relevance, [state]);
          const dispatch = useDispatch();
          const handleChange = value2 => {
            dispatch(valueChange({
              componentCode: props.answer.qualifiedCode,
              value: value2
            }));
          };
          const invalid = (show_errors || isDirty) && validity === false;
          return typeof relevance === "undefined" || relevance ? /* @__PURE__ */jsxRuntimeExports.jsxs(React.Fragment, {
            children: [/* @__PURE__ */jsxRuntimeExports.jsxs(TableRow, {
              children: [/* @__PURE__ */jsxRuntimeExports.jsx(TableCell, {
                sx: {
                  fontFamily: theme.textStyles.text.font,
                  color: theme.textStyles.text.color,
                  fontSize: theme.textStyles.text.size,
                  borderBottom: invalid ? "0" : "",
                  padding: "8px"
                },
                children: (_props$answer$content = props.answer.content) === null || _props$answer$content === void 0 ? void 0 : _props$answer$content.label
              }), props.choices.map(option => {
                return /* @__PURE__ */jsxRuntimeExports.jsx(TableCell, {
                  component: "th",
                  scope: "row",
                  sx: {
                    borderBottom: invalid ? "0" : "",
                    padding: "8px"
                  },
                  children: /* @__PURE__ */jsxRuntimeExports.jsx("div", {
                    onClick: () => handleChange(option.code),
                    style: {
                      opacity: value == option.code ? 1 : 0.2,
                      height: "64px",
                      width: "px",
                      borderRadius: "8px"
                    },
                    className: styles.svgContainer,
                    dangerouslySetInnerHTML: {
                      __html: option.icon || ""
                    }
                  })
                }, option.code);
              })]
            }, props.answer.code), invalid ? /* @__PURE__ */jsxRuntimeExports.jsx(TableRow, {
              children: /* @__PURE__ */jsxRuntimeExports.jsx(TableCell, {
                sx: {
                  padding: "8px"
                },
                colSpan: props.choices ? props.choices.length + 1 : 1,
                children: /* @__PURE__ */jsxRuntimeExports.jsx(Validation, {
                  component: props.answer
                })
              })
            }) : ""]
          }) : "";
        }
      }
    };
  });
})();
//# sourceMappingURL=SCQIconArray-legacy-PCa10eEg.js.map
