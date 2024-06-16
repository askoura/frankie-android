;
(function () {
  System.register(['./index-legacy-BjrVJ6CZ.js', './Android-legacy-BIX_jJYw.js', './TableRow-legacy-DlyggyCD.js'], function (exports, module) {
    'use strict';

    var jsxRuntimeExports, React, useTheme, useSelector, useDispatch, Validation, valueChange, TableContainer, Table, TableBody, TableRow, TableCell;
    return {
      setters: [module => {
        jsxRuntimeExports = module.m;
        React = module.W;
        useTheme = module.a6;
      }, module => {
        useSelector = module.A;
        useDispatch = module.D;
        Validation = module.V;
        valueChange = module.E;
      }, module => {
        TableContainer = module.a;
        Table = module.b;
        TableBody = module.e;
        TableRow = module.c;
        TableCell = module.d;
      }],
      execute: function execute() {
        var __vite_style__ = document.createElement('style');
        __vite_style__.textContent = "._noPadding_1ii70_1 {\n  padding: 0;\n}\n\n._addRow_1ii70_5 {\n  margin-top: 16px;\n}\n\n._addColumn_1ii70_9 {\n  text-align: right;\n}\n\n._addIcon_1ii70_13 {\n  width: 64px;\n  height: 64px;\n}\n\n._addIcon_1ii70_13 > svg {\n  width: 100%;\n  height: 100%;\n}\n\n._svgContainer_1ii70_23 {\n  text-align: center;\n}\n\n._svgContainer_1ii70_23 > svg {\n  width: 100%;\n  height: 100%;\n}\n._addButton_1ii70_31._addButton_1ii70_31 {\n  text-transform: none;\n  color: #16205b;\n  font-weight: bolder;\n  background-color: #e0e2ef;\n  border-radius: 9999px;\n  padding: 0.5rem 1rem;\n}\n";
        document.head.appendChild(__vite_style__);
        exports("default", SCQIconArray);
        const noPadding = "_noPadding_1ii70_1";
        const addRow = "_addRow_1ii70_5";
        const addColumn = "_addColumn_1ii70_9";
        const addIcon = "_addIcon_1ii70_13";
        const svgContainer = "_svgContainer_1ii70_23";
        const addButton = "_addButton_1ii70_31";
        const styles = {
          noPadding: noPadding,
          addRow: addRow,
          addColumn: addColumn,
          addIcon: addIcon,
          svgContainer: svgContainer,
          addButton: addButton
        };
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
//# sourceMappingURL=SCQIconArray-legacy-UUBiTgE0.js.map
