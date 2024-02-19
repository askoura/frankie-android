;
(function () {
  System.register(['./index-legacy-T3s18jo3.js', './Grid-legacy-ZQipiKyz.js'], function (exports, module) {
    'use strict';

    var useTheme, useSelector, shallowEqual, useDispatch, jsxRuntimeExports, Box, valueChange, Grid;
    return {
      setters: [module => {
        useTheme = module.b5;
        useSelector = module.E;
        shallowEqual = module.aI;
        useDispatch = module.z;
        jsxRuntimeExports = module.j;
        Box = module.B;
        valueChange = module.aJ;
      }, module => {
        Grid = module.G;
      }],
      execute: function execute() {
        var __vite_style__ = document.createElement('style');
        __vite_style__.textContent = "._imageContainer_mcjxc_1 {\n  background-size: contain;\n  background-position: center;\n  background-repeat: no-repeat;\n}\n\n._imageGrid_mcjxc_7 {\n  margin-top: 16px;\n}\n\n._selection_mcjxc_11 {\n  border-radius: 0 !important;\n  background-color: #ffffffcc !important;\n}\n\n._svgContainer_mcjxc_16 {\n  text-align: center;\n}\n\n._svgContainer_mcjxc_16>svg {\n  width: 100%;\n  height: 100%;\n}";
        document.head.appendChild(__vite_style__);
        exports('default', IconMcq);
        const imageContainer = "_imageContainer_mcjxc_1";
        const imageGrid = "_imageGrid_mcjxc_7";
        const selection = "_selection_mcjxc_11";
        const svgContainer = "_svgContainer_mcjxc_16";
        const styles = {
          imageContainer: imageContainer,
          imageGrid: imageGrid,
          selection: selection,
          svgContainer: svgContainer
        };
        function IconMcq(props) {
          var _props$component;
          const theme = useTheme();
          useSelector(state2 => {
            let questionState = state2.runState.values[props.component.qualifiedCode];
            let show_errors = state2.runState.values.Survey.show_errors;
            let isDirty = state2.templateState[props.component.qualifiedCode];
            return {
              value: (questionState === null || questionState === void 0 ? void 0 : questionState.value) || "",
              showValidation: (show_errors || isDirty) && (questionState === null || questionState === void 0 ? void 0 : questionState.validity) === false
            };
          }, shallowEqual);
          useDispatch();
          const hideText = ((_props$component = props.component) === null || _props$component === void 0 ? void 0 : _props$component.hideText) || false;
          useSelector(state2 => {
            return state2.runState.values["Survey"].lang;
          });
          return /* @__PURE__ */jsxRuntimeExports.jsx(Grid, {
            container: true,
            className: styles.imageGrid,
            spacing: props.component.spacing || 8,
            children: props.component.answers.map(option => {
              return /* @__PURE__ */jsxRuntimeExports.jsx(IconMcqChoice, {
                component: option,
                columns: props.component.columns || 64,
                theme,
                iconSize: props.component.iconSize || 64,
                hideText
              }, option.code);
            })
          });
        }
        function IconMcqChoice({
          component,
          iconSize,
          columns,
          hideText,
          theme
        }) {
          var _component$content;
          const dispatch = useDispatch();
          const checked = useSelector(state => state.runState.values[component.qualifiedCode].value || false);
          return /* @__PURE__ */jsxRuntimeExports.jsxs(Grid, {
            item: true,
            xs: 12 / columns,
            children: [/* @__PURE__ */jsxRuntimeExports.jsx("div", {
              style: {
                display: "flex",
                justifyContent: "center",
                width: "100%"
              },
              children: /* @__PURE__ */jsxRuntimeExports.jsx(Box, {
                onClick: () => dispatch(valueChange({
                  componentCode: component.qualifiedCode,
                  value: !checked
                })),
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
              })
            }), !hideText && /* @__PURE__ */jsxRuntimeExports.jsx(Box, {
              sx: {
                textAlign: "center",
                fontFamily: theme.textStyles.text.font,
                color: checked ? theme.palette.primary.main : theme.textStyles.text.color,
                fontSize: theme.textStyles.text.size
              },
              children: (_component$content = component.content) === null || _component$content === void 0 ? void 0 : _component$content.label
            })]
          });
        }
      }
    };
  });
})();
//# sourceMappingURL=IconMcq-legacy-rjleFpNz.js.map
