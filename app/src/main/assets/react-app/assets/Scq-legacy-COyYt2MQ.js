;
(function () {
  System.register(['./index-legacy-vEA8K-LS.js', './use-service-legacy-Bcxdqe8R.js', './index-legacy-Hr2g2OW7.js', './index-legacy-DP2zntN1.js', './RadioGroup-legacy-CUwO2I_z.js', './FormControlLabel-legacy-CId-AnH7.js', './Radio-legacy-5mPKZYmw.js', './TextField-legacy-Dx6AYM0D.js', './index-legacy-IS_T5KJK.js', './ErrorOutlineOutlined-legacy-B7MKIin6.js', './index-legacy-NBI_QIkO.js', './index-legacy-B_GMe52E.js', './Toolbar-legacy-BeIwS6lj.js', './Card-legacy-DxmmOhD2.js', './RadioGroupContext-legacy-AdJ4yVu4.js', './FormGroup-legacy-_q8X8O3p.js', './SwitchBase-legacy-CDK6BOac.js', './radioClasses-legacy-Dh2-Btlo.js'], function (exports, module) {
    'use strict';

    var jsxRuntimeExports, reactExports, Box, useSelector, useDispatch, FormControl, useTheme, valueChange, setDirty, Validation, shallowEqual, FormGroup, FormControlLabel, Radio, TextField;
    return {
      setters: [module => {
        jsxRuntimeExports = module.j;
        reactExports = module.r;
        Box = module.B;
      }, module => {
        useSelector = module.A;
        useDispatch = module.K;
        FormControl = module.ag;
        useTheme = module.p;
        valueChange = module.aI;
        setDirty = module.aY;
      }, module => {
        Validation = module.default;
      }, module => {
        shallowEqual = module.s;
      }, module => {
        FormGroup = module.F;
      }, module => {
        FormControlLabel = module.F;
      }, module => {
        Radio = module.R;
      }, module => {
        TextField = module.T;
      }, null, null, null, null, null, null, null, null, null, null],
      execute: function execute() {
        exports("default", SCQ);
        function SCQ(props) {
          const state = useSelector(state2 => {
            let questionState = state2.runState.values[props.component.qualifiedCode];
            return {
              value: (questionState === null || questionState === void 0 ? void 0 : questionState.value) || ""
            };
          }, shallowEqual);
          const dispatch = useDispatch();
          const handleChange = event => {
            dispatch(valueChange({
              componentCode: event.target.name,
              value: event.target.value
            }));
          };
          return /* @__PURE__ */jsxRuntimeExports.jsx(FormControl, {
            component: "fieldset",
            children: /* @__PURE__ */jsxRuntimeExports.jsx(FormGroup, {
              name: props.component.qualifiedCode,
              value: state.value,
              onChange: handleChange,
              children: props.component.answers.map(option => {
                if (option.type === "other") {
                  return /* @__PURE__ */jsxRuntimeExports.jsx(ScqChoiceOther, {
                    parentCode: props.component.qualifiedCode,
                    Choice: option
                  }, option.qualifiedCode);
                } else {
                  return /* @__PURE__ */jsxRuntimeExports.jsx(ScqChoice, {
                    Choice: option
                  }, option.qualifiedCode);
                }
              })
            })
          });
        }
        function ScqChoice(props) {
          const theme = useTheme();
          const showChoice = () => {
            var _props$Choice$content;
            return /* @__PURE__ */jsxRuntimeExports.jsx(FormControlLabel, {
              control: /* @__PURE__ */jsxRuntimeExports.jsx(Radio, {}),
              label: /* @__PURE__ */jsxRuntimeExports.jsx(Box, {
                sx: {
                  fontFamily: theme.textStyles.text.font,
                  color: theme.textStyles.text.color,
                  fontSize: theme.textStyles.text.size
                },
                children: (_props$Choice$content = props.Choice.content) === null || _props$Choice$content === void 0 ? void 0 : _props$Choice$content.label
              }),
              value: props.Choice.code
            }, props.Choice.qualifiedCode);
          };
          return showChoice ? showChoice() : "";
        }
        function ScqChoiceOther(props) {
          const theme = useTheme();
          const nestedTextChild = props.Choice.answers[0];
          const state = useSelector(state2 => {
            let choiceState = state2.runState.values[props.Choice.qualifiedCode];
            let childState = state2.runState.values[nestedTextChild.qualifiedCode];
            let show_errors = state2.runState.values.Survey.show_errors;
            let isChildDirty = state2.templateState[nestedTextChild.qualifiedCode];
            return {
              showChoice: typeof (choiceState === null || choiceState === void 0 ? void 0 : choiceState.relevance) === "undefined" || choiceState.relevance,
              childInvalid: (show_errors || isChildDirty) && (childState === null || childState === void 0 ? void 0 : childState.relevance) === true && (childState === null || childState === void 0 ? void 0 : childState.validity) === false,
              value: (childState === null || childState === void 0 ? void 0 : childState.value) || ""
            };
          }, shallowEqual);
          const dispatch = useDispatch();
          const handleChange = event => {
            dispatch(valueChange({
              componentCode: event.target.name,
              value: event.target.value
            }));
          };
          const handleFocus = event => {
            dispatch(valueChange({
              componentCode: props.parentCode,
              value: props.Choice.code
            }));
          };
          const lostFocus = event => {
            dispatch(setDirty(event.target.name));
          };
          const textInput = reactExports.useRef();
          const onButtonClick = event => {
            if (event.target.checked) {
              textInput.current.focus();
            }
          };
          const showChoice = () => {
            var _state$textChild, _nestedTextChild$vali, _props$Choice$content2;
            return /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
              className: "text-left d-flex",
              children: [/* @__PURE__ */jsxRuntimeExports.jsx(FormControlLabel, {
                control: /* @__PURE__ */jsxRuntimeExports.jsx(Radio, {}),
                label: /* @__PURE__ */jsxRuntimeExports.jsx("div", {
                  className: "w-100",
                  children: /* @__PURE__ */jsxRuntimeExports.jsx(TextField, {
                    variant: "standard",
                    required: ((_state$textChild = state.textChild) === null || _state$textChild === void 0 ? void 0 : _state$textChild.relevance) && ((_nestedTextChild$vali = nestedTextChild.validation) === null || _nestedTextChild$vali === void 0 ? void 0 : _nestedTextChild$vali.required),
                    inputRef: textInput,
                    id: nestedTextChild.qualifiedCode,
                    name: nestedTextChild.qualifiedCode,
                    label: (_props$Choice$content2 = props.Choice.content) === null || _props$Choice$content2 === void 0 ? void 0 : _props$Choice$content2.label,
                    onChange: handleChange,
                    onFocus: handleFocus,
                    onBlur: lostFocus,
                    value: state.value,
                    InputProps: {
                      sx: {
                        fontFamily: theme.textStyles.text.font,
                        color: theme.textStyles.text.color,
                        fontSize: theme.textStyles.text.size
                      }
                    },
                    helperText: state.childInvalid ? /* @__PURE__ */jsxRuntimeExports.jsx(Validation, {
                      component: nestedTextChild,
                      limit: 1
                    }) : ""
                  })
                }),
                onChange: onButtonClick,
                value: props.Choice.code
              }, props.Choice.qualifiedCode), /* @__PURE__ */jsxRuntimeExports.jsx("p", {})]
            });
          };
          return state.showChoice ? showChoice() : "";
        }
      }
    };
  });
})();
//# sourceMappingURL=Scq-legacy-COyYt2MQ.js.map
