;
(function () {
  System.register(['./index-legacy-vEA8K-LS.js', './use-service-legacy-Bcxdqe8R.js', './index-legacy-DP2zntN1.js', './TextField-legacy-Dx6AYM0D.js', './index-legacy-B_GMe52E.js', './Toolbar-legacy-BeIwS6lj.js', './Card-legacy-DxmmOhD2.js'], function (exports, module) {
    'use strict';

    var jsxRuntimeExports, useTheme, useSelector, useDispatch, valueChange, setDirty, shallowEqual, TextField;
    return {
      setters: [module => {
        jsxRuntimeExports = module.j;
      }, module => {
        useTheme = module.p;
        useSelector = module.A;
        useDispatch = module.K;
        valueChange = module.aI;
        setDirty = module.aY;
      }, module => {
        shallowEqual = module.s;
      }, module => {
        TextField = module.T;
      }, null, null, null],
      execute: function execute() {
        var __vite_style__ = document.createElement('style');
        __vite_style__.textContent = "._questionItem_1sx0f_1 {\n  margin-bottom: 15px;\n  width: 50%;\n}\n\n._questionItem_1sx0f_1:last-child {\n  margin-bottom: 0;\n}\n\n@media only screen and (max-width: 767px) {\n  ._questionItem_1sx0f_1 {\n    width: 100%;\n  }\n}\n";
        document.head.appendChild(__vite_style__);
        exports("default", TextQuestion);
        const questionItem = "_questionItem_1sx0f_1";
        const styles = {
          questionItem: questionItem
        };
        function TextQuestion(props) {
          var _props$component$vali, _props$component$cont;
          const theme = useTheme();
          const state = useSelector(state2 => {
            let questionState = state2.runState.values[props.component.qualifiedCode];
            let show_errors = state2.runState.values.Survey.show_errors;
            let isDirty = state2.templateState[props.component.qualifiedCode];
            let validity = questionState === null || questionState === void 0 ? void 0 : questionState.validity;
            let invalid = (show_errors || isDirty) && validity === false;
            return {
              value: (questionState === null || questionState === void 0 ? void 0 : questionState.value) || "",
              invalid
            };
          }, shallowEqual);
          const dispatch = useDispatch();
          const handleChange = event => {
            dispatch(valueChange({
              componentCode: event.target.name,
              value: event.target.value
            }));
          };
          const lostFocus = event => {
            dispatch(setDirty(event.target.name));
          };
          return /* @__PURE__ */jsxRuntimeExports.jsx("div", {
            className: styles.questionItem,
            children: /* @__PURE__ */jsxRuntimeExports.jsx(TextField, {
              variant: "standard",
              required: (_props$component$vali = props.component.validation) !== null && _props$component$vali !== void 0 && (_props$component$vali = _props$component$vali.validation_required) !== null && _props$component$vali !== void 0 && _props$component$vali.isActive ? true : false,
              id: props.component.qualifiedCode,
              name: props.component.qualifiedCode,
              label: ((_props$component$cont = props.component.content) === null || _props$component$cont === void 0 ? void 0 : _props$component$cont.hint) || "",
              onChange: handleChange,
              onBlur: lostFocus,
              inputProps: {
                maxLength: props.component.maxChars || void 0
              },
              value: state.value,
              error: state.invalid,
              InputProps: {
                sx: {
                  fontFamily: theme.textStyles.text.font,
                  color: theme.textStyles.text.color,
                  fontSize: theme.textStyles.text.size
                }
              }
            })
          });
        }
      }
    };
  });
})();
//# sourceMappingURL=TextQuestion-legacy-CK8Q9_TU.js.map
