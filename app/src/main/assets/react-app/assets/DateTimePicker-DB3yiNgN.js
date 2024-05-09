import { _ as _extends, f as generateUtilityClasses, g as generateUtilityClass, r as reactExports, b as _objectWithoutPropertiesLoose, j as jsxRuntimeExports } from "./index-DqOHBPA_.js";
import { e as useThemeProps, h as styled, T as Typography, c as composeClasses, ap as Button, p as useTheme } from "./use-service-B2Fih2ge.js";
import { f as useUtils, h as useLocaleText, C as Clock, p as parsePickerInputValue, i as clsx, j as getPickersToolbarUtilityClass, k as PickersToolbar, l as pickersToolbarClasses, m as useMeridiemMode, n as arrayIncludes, o as useValidation, q as createIsAfterIgnoreDatePart, r as usePickerState, s as DesktopWrapper, K as KeyboardDateInput, v as CalendarOrClockPicker, M as MobileWrapper, w as PureDateInput, u as useMediaQuery, x as useDefaultDates, y as parseNonNullablePickerDate, z as validateDate, T as Tabs, B as tabsClasses, W as WrapperVariantContext, a as Tab, E as DateRange, F as Time } from "./DatePicker-9Pk1EwA1.js";
function useTimePickerDefaultizedProps(props, name) {
  var _themeProps$ampm;
  const themeProps = useThemeProps({
    props,
    name
  });
  const utils = useUtils();
  const ampm = (_themeProps$ampm = themeProps.ampm) != null ? _themeProps$ampm : utils.is12HourCycleInCurrentLocale();
  const localeText = useLocaleText();
  const getOpenDialogAriaText = localeText.openTimePickerDialogue;
  return _extends({
    ampm,
    openTo: "hours",
    views: ["hours", "minutes"],
    acceptRegex: ampm ? /[\dapAP]/gi : /\d/gi,
    disableMaskedInput: false,
    getOpenDialogAriaText,
    inputFormat: ampm ? utils.formats.fullTime12h : utils.formats.fullTime24h
  }, themeProps, {
    components: _extends({
      OpenPickerIcon: Clock
    }, themeProps.components)
  });
}
const timePickerValueManager = {
  emptyValue: null,
  parseInput: parsePickerInputValue,
  getTodayValue: (utils) => utils.date(),
  areValuesEqual: (utils, a, b) => utils.isEqual(a, b),
  valueReducer: (utils, lastValidValue, newValue) => {
    if (!lastValidValue || !utils.isValid(newValue)) {
      return newValue;
    }
    return utils.mergeDateAndTime(lastValidValue, newValue);
  }
};
function getPickersToolbarTextUtilityClass(slot) {
  return generateUtilityClass("PrivatePickersToolbarText", slot);
}
const pickersToolbarTextClasses = generateUtilityClasses("PrivatePickersToolbarText", ["root", "selected"]);
const _excluded$a = ["className", "selected", "value"];
const useUtilityClasses$4 = (ownerState) => {
  const {
    classes,
    selected
  } = ownerState;
  const slots = {
    root: ["root", selected && "selected"]
  };
  return composeClasses(slots, getPickersToolbarTextUtilityClass, classes);
};
const PickersToolbarTextRoot = styled(Typography, {
  name: "PrivatePickersToolbarText",
  slot: "Root",
  overridesResolver: (_, styles) => [styles.root, {
    ["&.".concat(pickersToolbarTextClasses.selected)]: styles.selected
  }]
})(({
  theme
}) => ({
  transition: theme.transitions.create("color"),
  color: theme.palette.text.secondary,
  ["&.".concat(pickersToolbarTextClasses.selected)]: {
    color: theme.palette.text.primary
  }
}));
const PickersToolbarText = /* @__PURE__ */ reactExports.forwardRef(function PickersToolbarText2(props, ref) {
  const {
    className,
    value
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded$a);
  const classes = useUtilityClasses$4(props);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(PickersToolbarTextRoot, _extends({
    ref,
    className: clsx(className, classes.root),
    component: "span"
  }, other, {
    children: value
  }));
});
const _excluded$9 = ["align", "className", "selected", "typographyClassName", "value", "variant"];
const useUtilityClasses$3 = (ownerState) => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ["root"]
  };
  return composeClasses(slots, getPickersToolbarUtilityClass, classes);
};
const PickersToolbarButtonRoot = styled(Button, {
  name: "MuiPickersToolbarButton",
  slot: "Root",
  overridesResolver: (_, styles) => styles.root
})({
  padding: 0,
  minWidth: 16,
  textTransform: "none"
});
const PickersToolbarButton = /* @__PURE__ */ reactExports.forwardRef(function PickersToolbarButton2(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiPickersToolbarButton"
  });
  const {
    align,
    className,
    selected,
    typographyClassName,
    value,
    variant
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded$9);
  const classes = useUtilityClasses$3(props);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(PickersToolbarButtonRoot, _extends({
    variant: "text",
    ref,
    className: clsx(className, classes.root)
  }, other, {
    children: /* @__PURE__ */ jsxRuntimeExports.jsx(PickersToolbarText, {
      align,
      className: typographyClassName,
      variant,
      value,
      selected
    })
  }));
});
function getTimePickerToolbarUtilityClass(slot) {
  return generateUtilityClass("MuiTimePickerToolbar", slot);
}
const timePickerToolbarClasses = generateUtilityClasses("MuiTimePickerToolbar", ["root", "separator", "hourMinuteLabel", "hourMinuteLabelLandscape", "hourMinuteLabelReverse", "ampmSelection", "ampmLandscape", "ampmLabel"]);
const _excluded$8 = ["ampm", "ampmInClock", "parsedValue", "isLandscape", "isMobileKeyboardViewOpen", "onChange", "openView", "setOpenView", "toggleMobileKeyboardView", "toolbarTitle", "views", "disabled", "readOnly"];
const useUtilityClasses$2 = (ownerState) => {
  const {
    theme,
    isLandscape,
    classes
  } = ownerState;
  const slots = {
    root: ["root"],
    separator: ["separator"],
    hourMinuteLabel: ["hourMinuteLabel", isLandscape && "hourMinuteLabelLandscape", theme.direction === "rtl" && "hourMinuteLabelReverse"],
    ampmSelection: ["ampmSelection", isLandscape && "ampmLandscape"],
    ampmLabel: ["ampmLabel"]
  };
  return composeClasses(slots, getTimePickerToolbarUtilityClass, classes);
};
const TimePickerToolbarRoot = styled(PickersToolbar, {
  name: "MuiTimePickerToolbar",
  slot: "Root",
  overridesResolver: (props, styles) => styles.root
})({
  ["& .".concat(pickersToolbarClasses.penIconButtonLandscape)]: {
    marginTop: "auto"
  }
});
const TimePickerToolbarSeparator = styled(PickersToolbarText, {
  name: "MuiTimePickerToolbar",
  slot: "Separator",
  overridesResolver: (props, styles) => styles.separator
})({
  outline: 0,
  margin: "0 4px 0 2px",
  cursor: "default"
});
const TimePickerToolbarHourMinuteLabel = styled("div", {
  name: "MuiTimePickerToolbar",
  slot: "HourMinuteLabel",
  overridesResolver: (props, styles) => [{
    ["&.".concat(timePickerToolbarClasses.hourMinuteLabelLandscape)]: styles.hourMinuteLabelLandscape,
    ["&.".concat(timePickerToolbarClasses.hourMinuteLabelReverse)]: styles.hourMinuteLabelReverse
  }, styles.hourMinuteLabel]
})(({
  theme,
  ownerState
}) => _extends({
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "flex-end"
}, ownerState.isLandscape && {
  marginTop: "auto"
}, theme.direction === "rtl" && {
  flexDirection: "row-reverse"
}));
const TimePickerToolbarAmPmSelection = styled("div", {
  name: "MuiTimePickerToolbar",
  slot: "AmPmSelection",
  overridesResolver: (props, styles) => [{
    [".".concat(timePickerToolbarClasses.ampmLabel)]: styles.ampmLabel
  }, {
    ["&.".concat(timePickerToolbarClasses.ampmLandscape)]: styles.ampmLandscape
  }, styles.ampmSelection]
})(({
  ownerState
}) => _extends({
  display: "flex",
  flexDirection: "column",
  marginRight: "auto",
  marginLeft: 12
}, ownerState.isLandscape && {
  margin: "4px 0 auto",
  flexDirection: "row",
  justifyContent: "space-around",
  flexBasis: "100%"
}, {
  ["& .".concat(timePickerToolbarClasses.ampmLabel)]: {
    fontSize: 17
  }
}));
function TimePickerToolbar(inProps) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiTimePickerToolbar"
  });
  const {
    ampm,
    ampmInClock,
    parsedValue,
    isLandscape,
    isMobileKeyboardViewOpen,
    onChange,
    openView,
    setOpenView,
    toggleMobileKeyboardView,
    toolbarTitle: toolbarTitleProp,
    views,
    disabled,
    readOnly
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded$8);
  const utils = useUtils();
  const localeText = useLocaleText();
  const toolbarTitle = toolbarTitleProp != null ? toolbarTitleProp : localeText.timePickerDefaultToolbarTitle;
  const theme = useTheme();
  const showAmPmControl = Boolean(ampm && !ampmInClock);
  const {
    meridiemMode,
    handleMeridiemChange
  } = useMeridiemMode(parsedValue, ampm, onChange);
  const formatHours = (time) => ampm ? utils.format(time, "hours12h") : utils.format(time, "hours24h");
  const ownerState = props;
  const classes = useUtilityClasses$2(_extends({}, ownerState, {
    theme
  }));
  const separator = /* @__PURE__ */ jsxRuntimeExports.jsx(TimePickerToolbarSeparator, {
    tabIndex: -1,
    value: ":",
    variant: "h3",
    selected: false,
    className: classes.separator
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(TimePickerToolbarRoot, _extends({
    viewType: "clock",
    landscapeDirection: "row",
    toolbarTitle,
    isLandscape,
    isMobileKeyboardViewOpen,
    toggleMobileKeyboardView,
    ownerState,
    className: classes.root
  }, other, {
    children: [/* @__PURE__ */ jsxRuntimeExports.jsxs(TimePickerToolbarHourMinuteLabel, {
      className: classes.hourMinuteLabel,
      ownerState,
      children: [arrayIncludes(views, "hours") && /* @__PURE__ */ jsxRuntimeExports.jsx(PickersToolbarButton, {
        tabIndex: -1,
        variant: "h3",
        onClick: () => setOpenView("hours"),
        selected: openView === "hours",
        value: parsedValue ? formatHours(parsedValue) : "--"
      }), arrayIncludes(views, ["hours", "minutes"]) && separator, arrayIncludes(views, "minutes") && /* @__PURE__ */ jsxRuntimeExports.jsx(PickersToolbarButton, {
        tabIndex: -1,
        variant: "h3",
        onClick: () => setOpenView("minutes"),
        selected: openView === "minutes",
        value: parsedValue ? utils.format(parsedValue, "minutes") : "--"
      }), arrayIncludes(views, ["minutes", "seconds"]) && separator, arrayIncludes(views, "seconds") && /* @__PURE__ */ jsxRuntimeExports.jsx(PickersToolbarButton, {
        variant: "h3",
        onClick: () => setOpenView("seconds"),
        selected: openView === "seconds",
        value: parsedValue ? utils.format(parsedValue, "seconds") : "--"
      })]
    }), showAmPmControl && /* @__PURE__ */ jsxRuntimeExports.jsxs(TimePickerToolbarAmPmSelection, {
      className: classes.ampmSelection,
      ownerState,
      children: [/* @__PURE__ */ jsxRuntimeExports.jsx(PickersToolbarButton, {
        disableRipple: true,
        variant: "subtitle2",
        selected: meridiemMode === "am",
        typographyClassName: classes.ampmLabel,
        value: utils.getMeridiemText("am"),
        onClick: readOnly ? void 0 : () => handleMeridiemChange("am"),
        disabled
      }), /* @__PURE__ */ jsxRuntimeExports.jsx(PickersToolbarButton, {
        disableRipple: true,
        variant: "subtitle2",
        selected: meridiemMode === "pm",
        typographyClassName: classes.ampmLabel,
        value: utils.getMeridiemText("pm"),
        onClick: readOnly ? void 0 : () => handleMeridiemChange("pm"),
        disabled
      })]
    })]
  }));
}
const validateTime = ({
  adapter,
  value,
  props
}) => {
  const {
    minTime,
    maxTime,
    minutesStep,
    shouldDisableTime,
    disableIgnoringDatePartForTimeValidation
  } = props;
  const date = adapter.utils.date(value);
  const isAfter = createIsAfterIgnoreDatePart(disableIgnoringDatePartForTimeValidation, adapter.utils);
  if (value === null) {
    return null;
  }
  switch (true) {
    case !adapter.utils.isValid(value):
      return "invalidDate";
    case Boolean(minTime && isAfter(minTime, date)):
      return "minTime";
    case Boolean(maxTime && isAfter(date, maxTime)):
      return "maxTime";
    case Boolean(shouldDisableTime && shouldDisableTime(adapter.utils.getHours(date), "hours")):
      return "shouldDisableTime-hours";
    case Boolean(shouldDisableTime && shouldDisableTime(adapter.utils.getMinutes(date), "minutes")):
      return "shouldDisableTime-minutes";
    case Boolean(shouldDisableTime && shouldDisableTime(adapter.utils.getSeconds(date), "seconds")):
      return "shouldDisableTime-seconds";
    case Boolean(minutesStep && adapter.utils.getMinutes(date) % minutesStep !== 0):
      return "minutesStep";
    default:
      return null;
  }
};
const isSameTimeError = (a, b) => a === b;
const useTimeValidation = (props) => useValidation(props, validateTime, isSameTimeError);
const _excluded$7 = ["onChange", "PaperProps", "PopperProps", "ToolbarComponent", "TransitionComponent", "value", "components", "componentsProps"];
const DesktopTimePicker = /* @__PURE__ */ reactExports.forwardRef(function DesktopTimePicker2(inProps, ref) {
  const props = useTimePickerDefaultizedProps(inProps, "MuiDesktopTimePicker");
  const validationError = useTimeValidation(props) !== null;
  const {
    pickerProps,
    inputProps,
    wrapperProps
  } = usePickerState(props, timePickerValueManager);
  const {
    PaperProps,
    PopperProps,
    ToolbarComponent = TimePickerToolbar,
    TransitionComponent,
    components,
    componentsProps
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded$7);
  const DateInputProps = _extends({}, inputProps, other, {
    components,
    componentsProps,
    ref,
    validationError
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsx(DesktopWrapper, _extends({}, wrapperProps, {
    DateInputProps,
    KeyboardDateInputComponent: KeyboardDateInput,
    PopperProps,
    PaperProps,
    TransitionComponent,
    components,
    componentsProps,
    children: /* @__PURE__ */ jsxRuntimeExports.jsx(CalendarOrClockPicker, _extends({}, pickerProps, {
      autoFocus: true,
      toolbarTitle: props.label || props.toolbarTitle,
      ToolbarComponent,
      DateInputProps,
      components,
      componentsProps
    }, other))
  }));
});
const _excluded$6 = ["ToolbarComponent", "value", "onChange", "components", "componentsProps"];
const MobileTimePicker = /* @__PURE__ */ reactExports.forwardRef(function MobileTimePicker2(inProps, ref) {
  const props = useTimePickerDefaultizedProps(inProps, "MuiMobileTimePicker");
  const validationError = useTimeValidation(props) !== null;
  const {
    pickerProps,
    inputProps,
    wrapperProps
  } = usePickerState(props, timePickerValueManager);
  const {
    ToolbarComponent = TimePickerToolbar,
    components,
    componentsProps
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded$6);
  const DateInputProps = _extends({}, inputProps, other, {
    components,
    componentsProps,
    ref,
    validationError
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsx(MobileWrapper, _extends({}, other, wrapperProps, {
    DateInputProps,
    PureDateInputComponent: PureDateInput,
    components,
    componentsProps,
    children: /* @__PURE__ */ jsxRuntimeExports.jsx(CalendarOrClockPicker, _extends({}, pickerProps, {
      autoFocus: true,
      toolbarTitle: props.label || props.toolbarTitle,
      ToolbarComponent,
      DateInputProps,
      components,
      componentsProps
    }, other))
  }));
});
const _excluded$5 = ["desktopModeMediaQuery", "DialogProps", "PopperProps", "TransitionComponent"];
const TimePicker = /* @__PURE__ */ reactExports.forwardRef(function TimePicker2(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiTimePicker"
  });
  const {
    desktopModeMediaQuery = "@media (pointer: fine)",
    DialogProps,
    PopperProps,
    TransitionComponent
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded$5);
  const isDesktop = useMediaQuery(desktopModeMediaQuery, {
    defaultMatches: true
  });
  if (isDesktop) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(DesktopTimePicker, _extends({
      ref,
      PopperProps,
      TransitionComponent
    }, other));
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(MobileTimePicker, _extends({
    ref,
    DialogProps
  }, other));
});
function useDateTimePickerDefaultizedProps(props, name) {
  var _themeProps$ampm, _themeProps$minDateTi, _themeProps$maxDateTi, _themeProps$minDateTi2, _themeProps$maxDateTi2;
  const themeProps = useThemeProps({
    props,
    name
  });
  const utils = useUtils();
  const defaultDates = useDefaultDates();
  const ampm = (_themeProps$ampm = themeProps.ampm) != null ? _themeProps$ampm : utils.is12HourCycleInCurrentLocale();
  if (themeProps.orientation != null && themeProps.orientation !== "portrait") {
    throw new Error("We are not supporting custom orientation for DateTimePicker yet :(");
  }
  return _extends({
    ampm,
    orientation: "portrait",
    openTo: "day",
    views: ["year", "day", "hours", "minutes"],
    ampmInClock: true,
    acceptRegex: ampm ? /[\dap]/gi : /\d/gi,
    disableMaskedInput: false,
    inputFormat: ampm ? utils.formats.keyboardDateTime12h : utils.formats.keyboardDateTime24h,
    disableIgnoringDatePartForTimeValidation: Boolean(themeProps.minDateTime || themeProps.maxDateTime),
    disablePast: false,
    disableFuture: false
  }, themeProps, {
    minDate: parseNonNullablePickerDate(utils, (_themeProps$minDateTi = themeProps.minDateTime) != null ? _themeProps$minDateTi : themeProps.minDate, defaultDates.minDate),
    maxDate: parseNonNullablePickerDate(utils, (_themeProps$maxDateTi = themeProps.maxDateTime) != null ? _themeProps$maxDateTi : themeProps.maxDate, defaultDates.maxDate),
    minTime: (_themeProps$minDateTi2 = themeProps.minDateTime) != null ? _themeProps$minDateTi2 : themeProps.minTime,
    maxTime: (_themeProps$maxDateTi2 = themeProps.maxDateTime) != null ? _themeProps$maxDateTi2 : themeProps.maxTime
  });
}
const dateTimePickerValueManager = {
  emptyValue: null,
  getTodayValue: (utils) => utils.date(),
  parseInput: parsePickerInputValue,
  areValuesEqual: (utils, a, b) => utils.isEqual(a, b)
};
const resolveViewTypeFromView = (view) => {
  switch (view) {
    case "year":
    case "month":
    case "day":
      return "calendar";
    default:
      return "clock";
  }
};
function getDateTimePickerToolbarUtilityClass(slot) {
  return generateUtilityClass("MuiDateTimePickerToolbar", slot);
}
generateUtilityClasses("MuiDateTimePickerToolbar", ["root", "dateContainer", "timeContainer", "separator"]);
const _excluded$4 = ["ampm", "parsedValue", "isMobileKeyboardViewOpen", "onChange", "openView", "setOpenView", "toggleMobileKeyboardView", "toolbarFormat", "toolbarPlaceholder", "toolbarTitle", "views"];
const useUtilityClasses$1 = (ownerState) => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ["root"],
    dateContainer: ["dateContainer"],
    timeContainer: ["timeContainer"],
    separator: ["separator"]
  };
  return composeClasses(slots, getDateTimePickerToolbarUtilityClass, classes);
};
const DateTimePickerToolbarRoot = styled(PickersToolbar, {
  name: "MuiDateTimePickerToolbar",
  slot: "Root",
  overridesResolver: (props, styles) => styles.root
})(({
  theme
}) => ({
  paddingLeft: 16,
  paddingRight: 16,
  justifyContent: "space-around",
  position: "relative",
  ["& .".concat(pickersToolbarClasses.penIconButton)]: _extends({
    position: "absolute",
    top: 8
  }, theme.direction === "rtl" ? {
    left: 8
  } : {
    right: 8
  })
}));
const DateTimePickerToolbarDateContainer = styled("div", {
  name: "MuiDateTimePickerToolbar",
  slot: "DateContainer",
  overridesResolver: (props, styles) => styles.dateContainer
})({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start"
});
const DateTimePickerToolbarTimeContainer = styled("div", {
  name: "MuiDateTimePickerToolbar",
  slot: "TimeContainer",
  overridesResolver: (props, styles) => styles.timeContainer
})({
  display: "flex"
});
const DateTimePickerToolbarSeparator = styled(PickersToolbarText, {
  name: "MuiDateTimePickerToolbar",
  slot: "Separator",
  overridesResolver: (props, styles) => styles.separator
})({
  margin: "0 4px 0 2px",
  cursor: "default"
});
function DateTimePickerToolbar(inProps) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiDateTimePickerToolbar"
  });
  const {
    ampm,
    parsedValue,
    isMobileKeyboardViewOpen,
    openView,
    setOpenView,
    toggleMobileKeyboardView,
    toolbarFormat,
    toolbarPlaceholder = "––",
    toolbarTitle: toolbarTitleProp,
    views
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded$4);
  const ownerState = props;
  const utils = useUtils();
  const localeText = useLocaleText();
  const classes = useUtilityClasses$1(ownerState);
  const toolbarTitle = toolbarTitleProp != null ? toolbarTitleProp : localeText.dateTimePickerDefaultToolbarTitle;
  const formatHours = (time) => ampm ? utils.format(time, "hours12h") : utils.format(time, "hours24h");
  const dateText = reactExports.useMemo(() => {
    if (!parsedValue) {
      return toolbarPlaceholder;
    }
    if (toolbarFormat) {
      return utils.formatByString(parsedValue, toolbarFormat);
    }
    return utils.format(parsedValue, "shortDate");
  }, [parsedValue, toolbarFormat, toolbarPlaceholder, utils]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(DateTimePickerToolbarRoot, _extends({
    toolbarTitle,
    isMobileKeyboardViewOpen,
    toggleMobileKeyboardView,
    className: classes.root,
    viewType: resolveViewTypeFromView(openView)
  }, other, {
    isLandscape: false,
    ownerState,
    children: [/* @__PURE__ */ jsxRuntimeExports.jsxs(DateTimePickerToolbarDateContainer, {
      className: classes.dateContainer,
      ownerState,
      children: [views.includes("year") && /* @__PURE__ */ jsxRuntimeExports.jsx(PickersToolbarButton, {
        tabIndex: -1,
        variant: "subtitle1",
        onClick: () => setOpenView("year"),
        selected: openView === "year",
        value: parsedValue ? utils.format(parsedValue, "year") : "–"
      }), views.includes("day") && /* @__PURE__ */ jsxRuntimeExports.jsx(PickersToolbarButton, {
        tabIndex: -1,
        variant: "h4",
        onClick: () => setOpenView("day"),
        selected: openView === "day",
        value: dateText
      })]
    }), /* @__PURE__ */ jsxRuntimeExports.jsxs(DateTimePickerToolbarTimeContainer, {
      className: classes.timeContainer,
      ownerState,
      children: [views.includes("hours") && /* @__PURE__ */ jsxRuntimeExports.jsx(PickersToolbarButton, {
        variant: "h3",
        onClick: () => setOpenView("hours"),
        selected: openView === "hours",
        value: parsedValue ? formatHours(parsedValue) : "--"
      }), views.includes("minutes") && /* @__PURE__ */ jsxRuntimeExports.jsxs(reactExports.Fragment, {
        children: [/* @__PURE__ */ jsxRuntimeExports.jsx(DateTimePickerToolbarSeparator, {
          variant: "h3",
          value: ":",
          className: classes.separator,
          ownerState
        }), /* @__PURE__ */ jsxRuntimeExports.jsx(PickersToolbarButton, {
          variant: "h3",
          onClick: () => setOpenView("minutes"),
          selected: openView === "minutes",
          value: parsedValue ? utils.format(parsedValue, "minutes") : "--"
        })]
      }), views.includes("seconds") && /* @__PURE__ */ jsxRuntimeExports.jsxs(reactExports.Fragment, {
        children: [/* @__PURE__ */ jsxRuntimeExports.jsx(DateTimePickerToolbarSeparator, {
          variant: "h3",
          value: ":",
          className: classes.separator,
          ownerState
        }), /* @__PURE__ */ jsxRuntimeExports.jsx(PickersToolbarButton, {
          variant: "h3",
          onClick: () => setOpenView("seconds"),
          selected: openView === "seconds",
          value: parsedValue ? utils.format(parsedValue, "seconds") : "--"
        })]
      })]
    })]
  }));
}
const _excluded$3 = ["minDate", "maxDate", "disableFuture", "shouldDisableDate", "disablePast"];
const validateDateTime = ({
  props,
  value,
  adapter
}) => {
  const {
    minDate,
    maxDate,
    disableFuture,
    shouldDisableDate,
    disablePast
  } = props, timeValidationProps = _objectWithoutPropertiesLoose(props, _excluded$3);
  const dateValidationResult = validateDate({
    adapter,
    value,
    props: {
      minDate,
      maxDate,
      disableFuture,
      shouldDisableDate,
      disablePast
    }
  });
  if (dateValidationResult !== null) {
    return dateValidationResult;
  }
  return validateTime({
    adapter,
    value,
    props: timeValidationProps
  });
};
const isSameDateTimeError = (a, b) => a === b;
function useDateTimeValidation(props) {
  return useValidation(props, validateDateTime, isSameDateTimeError);
}
function getDateTimePickerTabsUtilityClass(slot) {
  return generateUtilityClass("MuiDateTimePickerTabs", slot);
}
generateUtilityClasses("MuiDateTimePickerTabs", ["root"]);
const viewToTab = (openView) => {
  if (["day", "month", "year"].includes(openView)) {
    return "date";
  }
  return "time";
};
const tabToView = (tab) => {
  if (tab === "date") {
    return "day";
  }
  return "hours";
};
const useUtilityClasses = (ownerState) => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ["root"]
  };
  return composeClasses(slots, getDateTimePickerTabsUtilityClass, classes);
};
const DateTimePickerTabsRoot = styled(Tabs, {
  name: "MuiDateTimePickerTabs",
  slot: "Root",
  overridesResolver: (_, styles) => styles.root
})(({
  ownerState,
  theme
}) => _extends({
  boxShadow: "0 -1px 0 0 inset ".concat(theme.palette.divider)
}, ownerState.wrapperVariant === "desktop" && {
  order: 1,
  boxShadow: "0 1px 0 0 inset ".concat(theme.palette.divider),
  ["& .".concat(tabsClasses.indicator)]: {
    bottom: "auto",
    top: 0
  }
}));
const DateTimePickerTabs = function DateTimePickerTabs2(inProps) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiDateTimePickerTabs"
  });
  const {
    dateRangeIcon = /* @__PURE__ */ jsxRuntimeExports.jsx(DateRange, {}),
    onChange,
    timeIcon = /* @__PURE__ */ jsxRuntimeExports.jsx(Time, {}),
    view
  } = props;
  const localeText = useLocaleText();
  const wrapperVariant = reactExports.useContext(WrapperVariantContext);
  const ownerState = _extends({}, props, {
    wrapperVariant
  });
  const classes = useUtilityClasses(ownerState);
  const handleChange = (event, value) => {
    onChange(tabToView(value));
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(DateTimePickerTabsRoot, {
    ownerState,
    variant: "fullWidth",
    value: viewToTab(view),
    onChange: handleChange,
    className: classes.root,
    children: [/* @__PURE__ */ jsxRuntimeExports.jsx(Tab, {
      value: "date",
      "aria-label": localeText.dateTableLabel,
      icon: /* @__PURE__ */ jsxRuntimeExports.jsx(reactExports.Fragment, {
        children: dateRangeIcon
      })
    }), /* @__PURE__ */ jsxRuntimeExports.jsx(Tab, {
      value: "time",
      "aria-label": localeText.timeTableLabel,
      icon: /* @__PURE__ */ jsxRuntimeExports.jsx(reactExports.Fragment, {
        children: timeIcon
      })
    })]
  });
};
const _excluded$2 = ["onChange", "PaperProps", "PopperProps", "ToolbarComponent", "TransitionComponent", "value", "components", "componentsProps", "hideTabs"];
const DesktopDateTimePicker = /* @__PURE__ */ reactExports.forwardRef(function DesktopDateTimePicker2(inProps, ref) {
  const props = useDateTimePickerDefaultizedProps(inProps, "MuiDesktopDateTimePicker");
  const validationError = useDateTimeValidation(props) !== null;
  const {
    pickerProps,
    inputProps,
    wrapperProps
  } = usePickerState(props, dateTimePickerValueManager);
  const {
    PaperProps,
    PopperProps,
    ToolbarComponent = DateTimePickerToolbar,
    TransitionComponent,
    components: providedComponents,
    componentsProps,
    hideTabs = true
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded$2);
  const components = reactExports.useMemo(() => _extends({
    Tabs: DateTimePickerTabs
  }, providedComponents), [providedComponents]);
  const AllDateInputProps = _extends({}, inputProps, other, {
    components,
    componentsProps,
    ref,
    validationError
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsx(DesktopWrapper, _extends({}, wrapperProps, {
    DateInputProps: AllDateInputProps,
    KeyboardDateInputComponent: KeyboardDateInput,
    PopperProps,
    PaperProps,
    TransitionComponent,
    components,
    componentsProps,
    children: /* @__PURE__ */ jsxRuntimeExports.jsx(CalendarOrClockPicker, _extends({}, pickerProps, {
      autoFocus: true,
      toolbarTitle: props.label || props.toolbarTitle,
      ToolbarComponent,
      DateInputProps: AllDateInputProps,
      components,
      componentsProps,
      hideTabs
    }, other))
  }));
});
const _excluded$1 = ["ToolbarComponent", "value", "onChange", "components", "componentsProps", "hideTabs"];
const MobileDateTimePicker = /* @__PURE__ */ reactExports.forwardRef(function MobileDateTimePicker2(inProps, ref) {
  const props = useDateTimePickerDefaultizedProps(inProps, "MuiMobileDateTimePicker");
  const validationError = useDateTimeValidation(props) !== null;
  const {
    pickerProps,
    inputProps,
    wrapperProps
  } = usePickerState(props, dateTimePickerValueManager);
  const {
    ToolbarComponent = DateTimePickerToolbar,
    components: providedComponents,
    componentsProps,
    hideTabs = false
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded$1);
  const components = reactExports.useMemo(() => _extends({
    Tabs: DateTimePickerTabs
  }, providedComponents), [providedComponents]);
  const DateInputProps = _extends({}, inputProps, other, {
    components,
    componentsProps,
    ref,
    validationError
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsx(MobileWrapper, _extends({}, other, wrapperProps, {
    DateInputProps,
    PureDateInputComponent: PureDateInput,
    components,
    componentsProps,
    children: /* @__PURE__ */ jsxRuntimeExports.jsx(CalendarOrClockPicker, _extends({}, pickerProps, {
      autoFocus: true,
      toolbarTitle: props.label || props.toolbarTitle,
      ToolbarComponent,
      DateInputProps,
      components,
      componentsProps,
      hideTabs
    }, other))
  }));
});
const _excluded = ["desktopModeMediaQuery", "DialogProps", "PopperProps", "TransitionComponent"];
const DateTimePicker = /* @__PURE__ */ reactExports.forwardRef(function DateTimePicker2(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiDateTimePicker"
  });
  const {
    desktopModeMediaQuery = "@media (pointer: fine)",
    DialogProps,
    PopperProps,
    TransitionComponent
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded);
  const isDesktop = useMediaQuery(desktopModeMediaQuery, {
    defaultMatches: true
  });
  if (isDesktop) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(DesktopDateTimePicker, _extends({
      ref,
      PopperProps,
      TransitionComponent
    }, other));
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(MobileDateTimePicker, _extends({
    ref,
    DialogProps
  }, other));
});
export {
  DateTimePicker as D,
  TimePicker as T
};
//# sourceMappingURL=DateTimePicker-DB3yiNgN.js.map
