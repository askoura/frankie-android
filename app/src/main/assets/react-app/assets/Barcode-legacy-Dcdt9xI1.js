;
(function () {
  System.register(['./index-legacy-vEA8K-LS.js', './use-service-legacy-Bcxdqe8R.js', './index-legacy-DP2zntN1.js', './TextField-legacy-Dx6AYM0D.js', './index-legacy-B_GMe52E.js', './Toolbar-legacy-BeIwS6lj.js', './Card-legacy-DxmmOhD2.js'], function (exports, module) {
    'use strict';

    var useTheme, jsxRuntimeExports, useSelector, useDispatch, valueChange, Box, TextField;
    return {
      setters: [module => {
        useTheme = module.y;
        jsxRuntimeExports = module.j;
      }, module => {
        useSelector = module.A;
        useDispatch = module.K;
        valueChange = module.aI;
      }, module => {
        Box = module.B;
      }, module => {
        TextField = module.T;
      }, null, null, null],
      execute: function execute() {
        var __vite_style__ = document.createElement('style');
        __vite_style__.textContent = "\n._container_bvkr6_2 {\n  text-align: center;\n}";
        document.head.appendChild(__vite_style__);
        exports("default", Barcode);
        const container = "_container_bvkr6_2";
        const styles = {
          container: container
        };
        function Barcode(props) {
          var _component$content, _props$component$vali;
          const theme = useTheme();
          const component = props.component;
          const state = useSelector(state2 => {
            return state2.runState.values[component.qualifiedCode];
          });
          const preview = useSelector(state2 => {
            return state2.runState.preview;
          });
          const mode = useSelector(state2 => {
            return state2.runState.values.Survey.mode;
          });
          const dispatch = useDispatch();
          const onImageClick = () => {
            const code = component.qualifiedCode;
            if (preview && mode == "offline") {
              dispatch(valueChange({
                componentCode: code,
                value: "This is a Dummy Barcode"
              }));
            } else if (window["Android"]) {
              window["Android"].scanBarcode(code);
              window["onBarcodeScanned" + code] = value => {
                dispatch(valueChange({
                  componentCode: code,
                  value
                }));
              };
            } else {
              console.log("no android device!!");
            }
          };
          return /* @__PURE__ */jsxRuntimeExports.jsxs(Box, {
            className: styles.container,
            children: [/* @__PURE__ */jsxRuntimeExports.jsx("img", {
              onClick: onImageClick,
              src: "/barcode.png",
              style: {
                maxHeight: "200px"
              }
            }), /* @__PURE__ */jsxRuntimeExports.jsx("br", {}), component.showHint && /* @__PURE__ */jsxRuntimeExports.jsx("span", {
              children: (_component$content = component.content) === null || _component$content === void 0 ? void 0 : _component$content.hint
            }), /* @__PURE__ */jsxRuntimeExports.jsx(TextField, {
              variant: "standard",
              required: (_props$component$vali = props.component.validation) !== null && _props$component$vali !== void 0 && (_props$component$vali = _props$component$vali.validation_required) !== null && _props$component$vali !== void 0 && _props$component$vali.isActive ? true : false,
              disabled: true,
              value: state.value,
              InputProps: {
                sx: {
                  fontFamily: theme.textStyles.text.font,
                  color: theme.textStyles.text.color,
                  fontSize: theme.textStyles.text.size
                }
              }
            })]
          });
        }
      }
    };
  });
})();
//# sourceMappingURL=Barcode-legacy-Dcdt9xI1.js.map