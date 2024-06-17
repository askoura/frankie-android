;
(function () {
  System.register(['./index-legacy-y70fvrxI.js', './Android-legacy-CkMEONVX.js', './TableRow-legacy-Lt_BXRb9.js', './Radio-legacy-D3eXar-P.js', './SwitchBase-legacy-CEo2HJft.js', './RadioGroupContext-legacy-BTbAeNvB.js'], function (exports, module) {
    'use strict';

    var generateUtilityClass, generateUtilityClasses, reactExports, _objectWithoutPropertiesLoose, _extends, jsxRuntimeExports, clsx, useTheme, React, styled, useThemeProps, composeClasses, useSelector, shallowEqual, useDispatch, Validation, valueChange, Tablelvl2Context, TableContainer, Table, TableRow, TableCell, TableBody, Radio;
    return {
      setters: [module => {
        generateUtilityClass = module.F;
        generateUtilityClasses = module.q;
        reactExports = module.r;
        _objectWithoutPropertiesLoose = module.w;
        _extends = module.y;
        jsxRuntimeExports = module.m;
        clsx = module.E;
        useTheme = module.a6;
        React = module.W;
      }, module => {
        styled = module.s;
        useThemeProps = module.a;
        composeClasses = module.c;
        useSelector = module.A;
        shallowEqual = module.C;
        useDispatch = module.D;
        Validation = module.V;
        valueChange = module.E;
      }, module => {
        Tablelvl2Context = module.T;
        TableContainer = module.a;
        Table = module.b;
        TableRow = module.c;
        TableCell = module.d;
        TableBody = module.e;
      }, module => {
        Radio = module.R;
      }, null, null],
      execute: function execute() {
        exports("default", SCQArray);
        function getTableHeadUtilityClass(slot) {
          return generateUtilityClass('MuiTableHead', slot);
        }
        generateUtilityClasses('MuiTableHead', ['root']);
        const _excluded = ["className", "component"];
        const useUtilityClasses = ownerState => {
          const classes = ownerState.classes;
          const slots = {
            root: ["root"]
          };
          return composeClasses(slots, getTableHeadUtilityClass, classes);
        };
        const TableHeadRoot = styled("thead", {
          name: "MuiTableHead",
          slot: "Root",
          overridesResolver: (props, styles) => styles.root
        })({
          display: "table-header-group"
        });
        const tablelvl2 = {
          variant: "head"
        };
        const defaultComponent = "thead";
        const TableHead = /* @__PURE__ */reactExports.forwardRef(function TableHead2(inProps, ref) {
          const props = useThemeProps({
            props: inProps,
            name: "MuiTableHead"
          });
          const className = props.className,
            _props$component = props.component,
            component = _props$component === void 0 ? defaultComponent : _props$component,
            other = _objectWithoutPropertiesLoose(props, _excluded);
          const ownerState = _extends({}, props, {
            component
          });
          const classes = useUtilityClasses(ownerState);
          return /* @__PURE__ */jsxRuntimeExports.jsx(Tablelvl2Context.Provider, {
            value: tablelvl2,
            children: /* @__PURE__ */jsxRuntimeExports.jsx(TableHeadRoot, _extends({
              as: component,
              className: clsx(classes.root, className),
              ref,
              role: component === defaultComponent ? null : "rowgroup",
              ownerState
            }, other))
          });
        });
        const TableHead$1 = TableHead;
        function SCQArray(props) {
          const theme = useTheme();
          let columns = props.component.answers.filter(answer => answer.type == "column");
          let rows = props.component.answers.filter(answer => answer.type == "row");
          return /* @__PURE__ */jsxRuntimeExports.jsx(TableContainer, {
            children: /* @__PURE__ */jsxRuntimeExports.jsxs(Table, {
              children: [/* @__PURE__ */jsxRuntimeExports.jsx(TableHead$1, {
                children: /* @__PURE__ */jsxRuntimeExports.jsxs(TableRow, {
                  children: [/* @__PURE__ */jsxRuntimeExports.jsx(TableCell, {}, "content"), columns.map(option => {
                    var _option$content;
                    return /* @__PURE__ */jsxRuntimeExports.jsx(TableCell, {
                      sx: {
                        fontFamily: theme.textStyles.text.font,
                        color: theme.textStyles.text.color,
                        fontSize: theme.textStyles.text.size
                      },
                      children: (_option$content = option.content) === null || _option$content === void 0 ? void 0 : _option$content.label
                    }, option.qualifiedCode);
                  })]
                })
              }), /* @__PURE__ */jsxRuntimeExports.jsx(TableBody, {
                children: rows.map(answer => {
                  return /* @__PURE__ */jsxRuntimeExports.jsx(React.Fragment, {
                    children: /* @__PURE__ */jsxRuntimeExports.jsx(SCQArrayRow, {
                      answer,
                      choices: columns
                    }, answer.qualifiedCode)
                  }, answer.qualifiedCode);
                })
              })]
            })
          });
        }
        function SCQArrayRow(props) {
          var _props$answer$content;
          const theme = useTheme();
          const state = useSelector(state2 => {
            var _state2$runState$valu, _state2$runState$valu2, _state2$runState$valu3;
            return {
              show_errors: state2.runState.values.Survey.show_errors,
              validity: (_state2$runState$valu = state2.runState.values[props.answer.qualifiedCode]) === null || _state2$runState$valu === void 0 ? void 0 : _state2$runState$valu.validity,
              value: (_state2$runState$valu2 = state2.runState.values[props.answer.qualifiedCode]) === null || _state2$runState$valu2 === void 0 ? void 0 : _state2$runState$valu2.value,
              relevance: (_state2$runState$valu3 = state2.runState.values[props.answer.qualifiedCode]) === null || _state2$runState$valu3 === void 0 ? void 0 : _state2$runState$valu3.relevance
            };
          }, shallowEqual);
          const dispatch = useDispatch();
          const handleChange = event => {
            dispatch(valueChange({
              componentCode: event.target.name,
              value: event.target.value
            }));
          };
          const invalid = (state.show_errors || state.isDirty) && state.validity === false;
          return typeof state.relevance === "undefined" || state.relevance ? /* @__PURE__ */jsxRuntimeExports.jsxs(React.Fragment, {
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
                  children: /* @__PURE__ */jsxRuntimeExports.jsx(Radio, {
                    name: props.answer.qualifiedCode,
                    onChange: handleChange,
                    checked: state.value === option.code,
                    value: option.code
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
//# sourceMappingURL=SCQArray-legacy-C6V6FFam.js.map
