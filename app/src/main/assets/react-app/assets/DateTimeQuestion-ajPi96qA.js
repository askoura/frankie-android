import { aH as useTheme, E as useSelector, aI as shallowEqual, z as useDispatch, j as jsxRuntimeExports, aJ as valueChange } from "./index-RBnW6nvi.js";
import { d as dayjs, L as LocalizationProvider, A as AdapterDayjs, D as DatePicker } from "./DatePicker-AVKIEE0b.js";
import { D as DateTimePicker, T as TimePicker } from "./DateTimePicker-yJMNf3Kv.js";
import { T as TextField } from "./TextField-lJ98NZsg.js";
import "./Grid-q5yBxj4Y.js";
const wrapper = "_wrapper_2goe7_1";
const styles = {
  wrapper
};
function DateTimeQuestion(props) {
  const theme = useTheme();
  const state = useSelector((state2) => {
    let own = state2.runState.values[props.component.qualifiedCode];
    let show_errors = state2.runState.values.Survey.show_errors;
    let isDirty = state2.templateState[props.component.qualifiedCode];
    return {
      invalid: (show_errors || isDirty) && (own == null ? void 0 : own.validity) === false,
      value: (own == null ? void 0 : own.value) ? dayjs(window.FrankieScripts.sqlDateTimeToDate(own == null ? void 0 : own.value)) : null
    };
  }, shallowEqual);
  const dispatch = useDispatch();
  const handleDateChange = (date) => {
    let finalDate = date === null ? void 0 : date.toDate();
    dispatch(
      valueChange({
        componentCode: props.component.qualifiedCode,
        value: props.component.type == "date_time" ? window.FrankieScripts.toSqlDateTime(finalDate) : props.component.type == "time" ? window.FrankieScripts.toSqlDateTimeIgnoreDate(finalDate) : window.FrankieScripts.toSqlDateTimeIgnoreTime(finalDate)
      })
    );
  };
  const dateFormat = props.component.dateFormat ? props.component.dateFormat : "DD.MM.YYYY";
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: styles.wrapper, children: /* @__PURE__ */ jsxRuntimeExports.jsx(LocalizationProvider, { dateAdapter: AdapterDayjs, adapterLocale: "ar-sa", children: props.component.type == "date_time" ? /* @__PURE__ */ jsxRuntimeExports.jsx(
    DateTimePicker,
    {
      renderInput: (props2) => /* @__PURE__ */ jsxRuntimeExports.jsx(TextField, { onKeyDown: (e) => e.preventDefault(), ...props2 }),
      margin: "normal",
      value: state.value,
      inputFormat: dateFormat + " " + (props.component.fullDayFormat ? "HH:mm" : "hh:mm A"),
      ampm: props.component.fullDayFormat ? false : true,
      openTo: "year",
      views: ["year", "month", "day", "hours", "minutes"],
      id: props.component.qualifiedCode,
      minDate: props.component.minDate ? dayjs(
        window.FrankieScripts.dateStringToDate(
          props.component.minDate
        )
      ) : void 0,
      maxDate: props.component.maxDate ? dayjs(
        window.FrankieScripts.dateStringToDate(
          props.component.maxDate
        )
      ) : void 0,
      error: state.invalid,
      onChange: handleDateChange,
      InputProps: {
        sx: {
          fontFamily: theme.textStyles.text.font,
          fontSize: theme.textStyles.text.size,
          color: theme.textStyles.text.color
        }
      }
    }
  ) : props.component.type == "time" ? /* @__PURE__ */ jsxRuntimeExports.jsx(
    TimePicker,
    {
      renderInput: (params) => /* @__PURE__ */ jsxRuntimeExports.jsx(TextField, { onKeyDown: (e) => e.preventDefault(), ...params }),
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
    }
  ) : /* @__PURE__ */ jsxRuntimeExports.jsx(
    DatePicker,
    {
      renderInput: (params) => /* @__PURE__ */ jsxRuntimeExports.jsx(TextField, { onKeyDown: (e) => e.preventDefault(), ...params }),
      margin: "normal",
      openTo: "year",
      views: ["year", "month", "day"],
      ampm: props.component.fullDayFormat ? false : true,
      id: props.component.qualifiedCode,
      inputFormat: dateFormat,
      value: state.value,
      minDate: props.component.minDate ? window.FrankieScripts.dateStringToDate(
        props.component.minDate
      ) : void 0,
      maxDate: props.component.maxDate ? window.FrankieScripts.dateStringToDate(
        props.component.maxDate
      ) : void 0,
      error: state.invalid,
      onChange: handleDateChange,
      InputProps: {
        sx: {
          fontFamily: theme.textStyles.text.font,
          fontSize: theme.textStyles.text.size
        }
      }
    }
  ) }) });
}
export {
  DateTimeQuestion as default
};
//# sourceMappingURL=DateTimeQuestion-ajPi96qA.js.map
