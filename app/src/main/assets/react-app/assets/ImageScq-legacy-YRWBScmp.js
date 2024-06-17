;
(function () {
  System.register(['./index-legacy-y70fvrxI.js', './Android-legacy-CkMEONVX.js', './Grid-legacy-CzMqPSt_.js', './Radio-legacy-D3eXar-P.js', './SwitchBase-legacy-CEo2HJft.js', './RadioGroupContext-legacy-BTbAeNvB.js'], function (exports, module) {
    'use strict';

    var useTheme, jsxRuntimeExports, Box, useSelector, shallowEqual, useDispatch, buildResourceUrl, valueChange, Grid, Radio;
    return {
      setters: [module => {
        useTheme = module.a6;
        jsxRuntimeExports = module.m;
        Box = module.a3;
      }, module => {
        useSelector = module.A;
        shallowEqual = module.C;
        useDispatch = module.D;
        buildResourceUrl = module.X;
        valueChange = module.E;
      }, module => {
        Grid = module.G;
      }, module => {
        Radio = module.R;
      }, null, null],
      execute: function execute() {
        var __vite_style__ = document.createElement('style');
        __vite_style__.textContent = "._imageContainer_1dbyo_1 {\n  background-size: contain;\n  position: relative;\n  background-position: center;\n  background-repeat: no-repeat;\n}\n\n._imageGrid_1dbyo_8 {\n  margin-top: 16px;\n}\n\n._selection_1dbyo_12 {\n  position: absolute;\n  top: 0;\n  border-radius: 0 !important;\n  background-color: #ffffffcc !important;\n}\n";
        document.head.appendChild(__vite_style__);
        exports("default", ImageScq);
        const imageContainer = "_imageContainer_1dbyo_1";
        const imageGrid = "_imageGrid_1dbyo_8";
        const selection = "_selection_1dbyo_12";
        const styles = {
          imageContainer: imageContainer,
          imageGrid: imageGrid,
          selection: selection
        };
        function ImageScq(props) {
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
          useSelector(state2 => {
            return state2.runState.values["Survey"].lang;
          });
          return /* @__PURE__ */jsxRuntimeExports.jsx(Grid, {
            container: true,
            spacing: props.component.spacing,
            className: styles.imageGrid,
            children: props.component.answers.map(option => {
              var _option$resources, _option$resources2, _option$content;
              const backgroundImage = (_option$resources = option.resources) !== null && _option$resources !== void 0 && _option$resources.image ? `url('${buildResourceUrl((_option$resources2 = option.resources) === null || _option$resources2 === void 0 ? void 0 : _option$resources2.image)}')` : "0";
              return /* @__PURE__ */jsxRuntimeExports.jsxs(Grid, {
                item: true,
                xs: 12 / props.component.columns,
                children: [/* @__PURE__ */jsxRuntimeExports.jsx(Box, {
                  className: styles.imageContainer,
                  onClick: () => handleChange(props.component.qualifiedCode, option.code),
                  style: {
                    paddingTop: 100 / props.component.imageAspectRatio + "%",
                    borderRadius: "4px",
                    backgroundImage,
                    backgroundColor: theme.palette.background.default,
                    border: state.value === option.code ? `2px solid ${theme.palette.primary.main}` : "2px solid transparent"
                  },
                  children: /* @__PURE__ */jsxRuntimeExports.jsx("div", {
                    className: styles.selection,
                    children: /* @__PURE__ */jsxRuntimeExports.jsx(Radio, {
                      checked: state.value === option.code,
                      onChange: event => handleChange(event.target.name, event.target.value),
                      value: option.code,
                      name: props.component.qualifiedCode
                    })
                  })
                }), !props.component.hideText && /* @__PURE__ */jsxRuntimeExports.jsx(Box, {
                  sx: {
                    fontFamily: theme.textStyles.text.font,
                    color: theme.textStyles.text.color,
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
//# sourceMappingURL=ImageScq-legacy-YRWBScmp.js.map
