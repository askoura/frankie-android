;
(function () {
  System.register(['./index-legacy-y70fvrxI.js', './Android-legacy-CkMEONVX.js', './Grid-legacy-CzMqPSt_.js', './Checkbox-legacy-CtniUBoo.js', './SwitchBase-legacy-CEo2HJft.js'], function (exports, module) {
    'use strict';

    var jsxRuntimeExports, useTheme, Box, useSelector, shallowEqual, useDispatch, buildResourceUrl, valueChange, setDirty, Grid, Checkbox;
    return {
      setters: [module => {
        jsxRuntimeExports = module.m;
        useTheme = module.a6;
        Box = module.a3;
      }, module => {
        useSelector = module.A;
        shallowEqual = module.C;
        useDispatch = module.D;
        buildResourceUrl = module.X;
        valueChange = module.E;
        setDirty = module.I;
      }, module => {
        Grid = module.G;
      }, module => {
        Checkbox = module.C;
      }, null],
      execute: function execute() {
        var __vite_style__ = document.createElement('style');
        __vite_style__.textContent = "._imageGrid_htjsk_1 {\n  margin-top: 16px;\n}\n\n._imageContainer_htjsk_5 {\n  position: relative;\n  background-size: contain;\n  background-position: center;\n  background-repeat: no-repeat;\n}\n\n._selection_htjsk_12 {\n  position: absolute;\n  top: 0;\n  border-radius: 0 !important;\n  background-color: #ffffffcc !important;\n}\n";
        document.head.appendChild(__vite_style__);
        exports("default", ImageMcq);
        const imageGrid = "_imageGrid_htjsk_1";
        const imageContainer = "_imageContainer_htjsk_5";
        const selection = "_selection_htjsk_12";
        const styles = {
          imageGrid: imageGrid,
          imageContainer: imageContainer,
          selection: selection
        };
        function ImageMcq(props) {
          useSelector(state => {
            return state.runState.values["Survey"].lang;
          });
          return /* @__PURE__ */jsxRuntimeExports.jsx(Grid, {
            spacing: props.component.spacing,
            container: true,
            className: styles.imageGrid,
            children: props.component.answers.map(option => {
              return /* @__PURE__ */jsxRuntimeExports.jsx(ImageMcqItem, {
                option,
                aspectRatio: props.component.imageAspectRatio,
                columns: props.component.columns,
                hideText: props.component.hideText,
                parentCode: props.component.qualifiedCode
              }, option.qualifiedCode);
            })
          });
        }
        function ImageMcqItem(props) {
          var _props$option$resourc, _props$option$resourc2, _props$option$content;
          const theme = useTheme();
          const state = useSelector(state2 => {
            let answerState = state2.runState.values[props.option.qualifiedCode];
            return {
              showAnswer: typeof (answerState === null || answerState === void 0 ? void 0 : answerState.relevance) == "undefined" || answerState.relevance,
              checked: (answerState === null || answerState === void 0 ? void 0 : answerState.value) || false
            };
          }, shallowEqual);
          const dispatch = useDispatch();
          const handleChange = (componentCode, value) => {
            dispatch(valueChange({
              componentCode,
              value
            }));
            dispatch(setDirty(componentCode));
            dispatch(setDirty(props.parentCode));
          };
          const backgroundImage = (_props$option$resourc = props.option.resources) !== null && _props$option$resourc !== void 0 && _props$option$resourc.image ? `url('${buildResourceUrl((_props$option$resourc2 = props.option.resources) === null || _props$option$resourc2 === void 0 ? void 0 : _props$option$resourc2.image)}')` : "0";
          return /* @__PURE__ */jsxRuntimeExports.jsxs(Grid, {
            item: true,
            xs: 12 / props.columns,
            children: [/* @__PURE__ */jsxRuntimeExports.jsx(Box, {
              className: styles.imageContainer,
              onClick: () => handleChange(props.option.qualifiedCode, !state.checked),
              style: {
                paddingTop: 100 / props.aspectRatio + "%",
                backgroundImage,
                backgroundColor: theme.palette.background.default,
                borderRadius: "4px",
                border: state.checked ? `2px solid ${theme.palette.primary.main}` : "2px solid transparent"
              },
              children: /* @__PURE__ */jsxRuntimeExports.jsx("div", {
                className: styles.selection,
                children: /* @__PURE__ */jsxRuntimeExports.jsx(Checkbox, {
                  onChange: event => handleChange(props.option.qualifiedCode, !state.checked),
                  checked: state.checked
                })
              })
            }), !props.hideText && /* @__PURE__ */jsxRuntimeExports.jsx(Box, {
              sx: {
                fontFamily: theme.textStyles.text.font,
                color: theme.textStyles.text.color,
                fontSize: theme.textStyles.text.size
              },
              children: (_props$option$content = props.option.content) === null || _props$option$content === void 0 ? void 0 : _props$option$content.label
            })]
          }, props.option.code);
        }
      }
    };
  });
})();
//# sourceMappingURL=ImageMcq-legacy-DiDr9a_v.js.map
