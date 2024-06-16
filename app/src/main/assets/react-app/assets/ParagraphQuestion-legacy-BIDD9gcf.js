;
(function () {
  System.register(['./index-legacy-BjrVJ6CZ.js', './Android-legacy-BIX_jJYw.js'], function (exports, module) {
    'use strict';

    var jsxRuntimeExports, useSelector, shallowEqual, useDispatch, useTranslation, TextareaAutosize, valueChange, setDirty;
    return {
      setters: [module => {
        jsxRuntimeExports = module.m;
      }, module => {
        useSelector = module.A;
        shallowEqual = module.C;
        useDispatch = module.D;
        useTranslation = module.Y;
        TextareaAutosize = module.Z;
        valueChange = module.E;
        setDirty = module.I;
      }],
      execute: function execute() {
        var __vite_style__ = document.createElement('style');
        __vite_style__.textContent = "._questionItem_pxk6e_1 {\n  margin-bottom: 15px;\n}\n\n._questionItem_pxk6e_1:last-child {\n  margin-bottom: 0;\n}\n\n@media screen and (max-width: 767px) {\n  ._questionItem_pxk6e_1 {\n    width: 100%;\n  }\n}\n\n._paragraph_pxk6e_15 {\n  width: 100%;\n}\n\n._wordCount_pxk6e_19 {\n  text-align: end;\n}\n";
        document.head.appendChild(__vite_style__);
        exports("default", ParagraphQuestion);
        const questionItem = "_questionItem_pxk6e_1";
        const paragraph = "_paragraph_pxk6e_15";
        const wordCount = "_wordCount_pxk6e_19";
        const styles = {
          questionItem: questionItem,
          paragraph: paragraph,
          wordCount: wordCount
        };
        function ParagraphQuestion(props) {
          var _props$component$vali, _props$component$cont;
          const state = useSelector(state2 => {
            let questionState = state2.runState.values[props.component.qualifiedCode];
            let show_errors = state2.runState.values.Survey.show_errors;
            let isDirty = state2.templateState[props.component.qualifiedCode];
            let validity = questionState === null || questionState === void 0 ? void 0 : questionState.validity;
            let invalid = (show_errors || isDirty) && validity === false;
            let value = (questionState === null || questionState === void 0 ? void 0 : questionState.value) || "";
            return {
              value,
              wordCount: window.FrankieScripts ? window.FrankieScripts.wordCount(value) : 0,
              invalid
            };
          }, shallowEqual);
          const dispatch = useDispatch();
          const _useTranslation = useTranslation("run"),
            t = _useTranslation.t;
          const handleChange = event => {
            dispatch(valueChange({
              componentCode: event.target.name,
              value: event.target.value
            }));
          };
          const lostFocus = event => {
            dispatch(setDirty(event.target.name));
          };
          return /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
            className: styles.questionItem,
            children: [/* @__PURE__ */jsxRuntimeExports.jsx(TextareaAutosize, {
              className: styles.paragraph,
              required: (_props$component$vali = props.component.validation) !== null && _props$component$vali !== void 0 && (_props$component$vali = _props$component$vali.validation_required) !== null && _props$component$vali !== void 0 && _props$component$vali.isActive ? true : false,
              id: props.component.qualifiedCode,
              name: props.component.qualifiedCode,
              minRows: props.component.minRows || 2,
              label: ((_props$component$cont = props.component.content) === null || _props$component$cont === void 0 ? void 0 : _props$component$cont.hint) || "",
              onChange: handleChange,
              onBlur: lostFocus,
              value: state.value
            }), props.component.showWordCount ? /* @__PURE__ */jsxRuntimeExports.jsx("div", {
              className: styles.wordCount,
              children: /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                children: t("word_count", {
                  count: state.wordCount
                })
              })
            }) : ""]
          });
        }
      }
    };
  });
})();
//# sourceMappingURL=ParagraphQuestion-legacy-BIDD9gcf.js.map
