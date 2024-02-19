;
(function () {
  function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
  function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : String(i); }
  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  System.register(['./index-legacy-T3s18jo3.js', './DatePicker-legacy-9Ey9K3I7.js', './DateTimePicker-legacy-wQD1lg2H.js', './TextField-legacy-vL2OdS5Q.js', './Grid-legacy-ZQipiKyz.js'], function (exports, module) {
    'use strict';

    var useTheme, useSelector, shallowEqual, useDispatch, jsxRuntimeExports, valueChange, dayjs, LocalizationProvider, AdapterDayjs, DatePicker, DateTimePicker, TimePicker, TextField;
    return {
      setters: [module => {
        useTheme = module.aH;
        useSelector = module.E;
        shallowEqual = module.aI;
        useDispatch = module.z;
        jsxRuntimeExports = module.j;
        valueChange = module.aJ;
      }, module => {
        dayjs = module.d;
        LocalizationProvider = module.L;
        AdapterDayjs = module.A;
        DatePicker = module.D;
      }, module => {
        DateTimePicker = module.D;
        TimePicker = module.T;
      }, module => {
        TextField = module.T;
      }, null],
      execute: function execute() {
        var __vite_style__ = document.createElement('style');
        __vite_style__.textContent = "._wrapper_2goe7_1 {\n  width: 50%;\n}\n\n@media only screen and (max-width: 768px) {\n  ._wrapper_2goe7_1 {\n    width: 100%;\n  }\n}\n";
        document.head.appendChild(__vite_style__);
        exports('default', DateTimeQuestion);
        const wrapper = "_wrapper_2goe7_1";
        const styles = {
          wrapper: wrapper
        };
        function DateTimeQuestion(props) {
          const theme = useTheme();
          const state = useSelector(state2 => {
            let own = state2.runState.values[props.component.qualifiedCode];
            let show_errors = state2.runState.values.Survey.show_errors;
            let isDirty = state2.templateState[props.component.qualifiedCode];
            return {
              invalid: (show_errors || isDirty) && (own === null || own === void 0 ? void 0 : own.validity) === false,
              value: own !== null && own !== void 0 && own.value ? dayjs(window.FrankieScripts.sqlDateTimeToDate(own === null || own === void 0 ? void 0 : own.value)) : null
            };
          }, shallowEqual);
          const dispatch = useDispatch();
          const handleDateChange = date => {
            let finalDate = date === null ? void 0 : date.toDate();
            dispatch(valueChange({
              componentCode: props.component.qualifiedCode,
              value: props.component.type == "date_time" ? window.FrankieScripts.toSqlDateTime(finalDate) : props.component.type == "time" ? window.FrankieScripts.toSqlDateTimeIgnoreDate(finalDate) : window.FrankieScripts.toSqlDateTimeIgnoreTime(finalDate)
            }));
          };
          const dateFormat = props.component.dateFormat ? props.component.dateFormat : "DD.MM.YYYY";
          return /* @__PURE__ */jsxRuntimeExports.jsx("div", {
            className: styles.wrapper,
            children: /* @__PURE__ */jsxRuntimeExports.jsx(LocalizationProvider, {
              dateAdapter: AdapterDayjs,
              adapterLocale: "ar-sa",
              children: props.component.type == "date_time" ? /* @__PURE__ */jsxRuntimeExports.jsx(DateTimePicker, {
                renderInput: props2 => /* @__PURE__ */jsxRuntimeExports.jsx(TextField, _objectSpread({
                  onKeyDown: e => e.preventDefault()
                }, props2)),
                margin: "normal",
                value: state.value,
                inputFormat: dateFormat + " " + (props.component.fullDayFormat ? "HH:mm" : "hh:mm A"),
                ampm: props.component.fullDayFormat ? false : true,
                openTo: "year",
                views: ["year", "month", "day", "hours", "minutes"],
                id: props.component.qualifiedCode,
                minDate: props.component.minDate ? dayjs(window.FrankieScripts.dateStringToDate(props.component.minDate)) : void 0,
                maxDate: props.component.maxDate ? dayjs(window.FrankieScripts.dateStringToDate(props.component.maxDate)) : void 0,
                error: state.invalid,
                onChange: handleDateChange,
                InputProps: {
                  sx: {
                    fontFamily: theme.textStyles.text.font,
                    fontSize: theme.textStyles.text.size,
                    color: theme.textStyles.text.color
                  }
                }
              }) : props.component.type == "time" ? /* @__PURE__ */jsxRuntimeExports.jsx(TimePicker, {
                renderInput: params => /* @__PURE__ */jsxRuntimeExports.jsx(TextField, _objectSpread({
                  onKeyDown: e => e.preventDefault()
                }, params)),
                margin: "normal",
                openTo: "hours",
                views: ["hours", "minutes"],
                ampm: props.component.fullDayFormat ? false : true,
                inputFormat: props.component.fullDayFormat ? "HH:mm" : "hh:mm A",
                id: props.component.qualifiedCode,
                value: state.value,
                error: state.invalid,
                onChange: handleDateChange,
                InputProps: {
                  sx: {
                    fontFamily: theme.textStyles.text.font,
                    color: theme.textStyles.text.color,
                    fontSize: theme.textStyles.text.size
                  }
                }
              }) : /* @__PURE__ */jsxRuntimeExports.jsx(DatePicker, {
                renderInput: params => /* @__PURE__ */jsxRuntimeExports.jsx(TextField, _objectSpread({
                  onKeyDown: e => e.preventDefault()
                }, params)),
                margin: "normal",
                openTo: "year",
                views: ["year", "month", "day"],
                ampm: props.component.fullDayFormat ? false : true,
                id: props.component.qualifiedCode,
                inputFormat: dateFormat,
                value: state.value,
                minDate: props.component.minDate ? window.FrankieScripts.dateStringToDate(props.component.minDate) : void 0,
                maxDate: props.component.maxDate ? window.FrankieScripts.dateStringToDate(props.component.maxDate) : void 0,
                error: state.invalid,
                onChange: handleDateChange,
                InputProps: {
                  sx: {
                    fontFamily: theme.textStyles.text.font,
                    fontSize: theme.textStyles.text.size
                  }
                }
              })
            })
          });
        }
      }
    };
  });
})();
//# sourceMappingURL=DateTimeQuestion-legacy-WoL7OIFA.js.map
