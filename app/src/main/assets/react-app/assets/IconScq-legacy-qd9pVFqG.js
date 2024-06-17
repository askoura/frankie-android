;
(function () {
  System.register(['./index-legacy-y70fvrxI.js', './Android-legacy-CkMEONVX.js', './Grid-legacy-CzMqPSt_.js'], function (exports, module) {
    'use strict';

    var useTheme, jsxRuntimeExports, Box, useSelector, shallowEqual, useDispatch, valueChange, Grid;
    return {
      setters: [module => {
        useTheme = module.a6;
        jsxRuntimeExports = module.m;
        Box = module.a3;
      }, module => {
        useSelector = module.A;
        shallowEqual = module.C;
        useDispatch = module.D;
        valueChange = module.E;
      }, module => {
        Grid = module.G;
      }],
      execute: function execute() {
        var __vite_style__ = document.createElement('style');
        __vite_style__.textContent = "._imageContainer_mcjxc_1 {\n  background-size: contain;\n  background-position: center;\n  background-repeat: no-repeat;\n}\n\n._imageGrid_mcjxc_7 {\n  margin-top: 16px;\n}\n\n._selection_mcjxc_11 {\n  border-radius: 0 !important;\n  background-color: #ffffffcc !important;\n}\n\n._svgContainer_mcjxc_16 {\n  text-align: center;\n}\n\n._svgContainer_mcjxc_16>svg {\n  width: 100%;\n  height: 100%;\n}";
        document.head.appendChild(__vite_style__);
        exports("default", IconScq);
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
        function IconScq(props) {
          var _props$component;
          const theme = useTheme();
          const state = useSelector(state2 => {
            let questionState = state2.runState.values[props.component.qualifiedCode];
            let show_errors = state2.runState.values.Survey.show_errors;
            let isDirty = state2.templateState[props.component.qualifiedCode];
            return {
              value: (questionState === null || questionState === void 0 ? void 0 : questionState.value) || "",
              showValidation: (show_errors || isDirty) && (questionState === null || questionState === void 0 ? void 0 : questionState.validity) === false
            };
          }, shallowEqual);
          const dispatch = useDispatch();
          const handleChange = (componentCode, value) => {
            dispatch(valueChange({
              componentCode,
              value
            }));
          };
          const hideText = ((_props$component = props.component) === null || _props$component === void 0 ? void 0 : _props$component.hideText) || false;
          useSelector(state2 => {
            return state2.runState.values["Survey"].lang;
          });
          return /* @__PURE__ */jsxRuntimeExports.jsx(Grid, {
            container: true,
            className: styles.imageGrid,
            spacing: props.component.spacing || 8,
            children: props.component.answers.map(option => {
              var _option$content;
              const isSelected = state.value == option.code;
              return /* @__PURE__ */jsxRuntimeExports.jsxs(Grid, {
                item: true,
                xs: 12 / props.component.columns,
                children: [/* @__PURE__ */jsxRuntimeExports.jsx("div", {
                  style: {
                    display: "flex",
                    justifyContent: "center",
                    width: "100%"
                  },
                  children: /* @__PURE__ */jsxRuntimeExports.jsx(Box, {
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
                  })
                }), !hideText && /* @__PURE__ */jsxRuntimeExports.jsx(Box, {
                  sx: {
                    textAlign: "center",
                    fontFamily: theme.textStyles.text.font,
                    color: isSelected ? theme.palette.primary.main : theme.textStyles.text.color,
                    fontSize: theme.textStyles.text.size
                  },
                  children: (_option$content = option.content) === null || _option$content === void 0 ? void 0 : _option$content.label
                })]
              }, option.code);
            })
          });
        }
      }
    };
  });
})();
//# sourceMappingURL=IconScq-legacy-qd9pVFqG.js.map
