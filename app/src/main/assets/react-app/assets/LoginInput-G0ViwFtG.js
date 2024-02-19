import { c as createSvgIcon, j as jsxRuntimeExports, s as styled } from "./index-RBnW6nvi.js";
import { T as TextField } from "./TextField-lJ98NZsg.js";
import { I as InputAdornment } from "./DatePicker-AVKIEE0b.js";
const CheckCircle = createSvgIcon(/* @__PURE__ */ jsxRuntimeExports.jsx("path", {
  d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
}), "CheckCircle");
const StyledTextField = styled(TextField)(({ theme }) => ({
  "& .MuiInputBase-root": {
    boxSizing: "border-box",
    background: "#eff1fc",
    color: "#16205b",
    padding: "20px",
    borderRadius: "15px",
    "&:before": {
      borderBottom: "none"
    },
    "&:after": {
      borderBottom: "none"
    }
  },
  "& .MuiInputLabel-root": {
    color: "#c2c4cc",
    zIndex: "1",
    top: "58%",
    left: "8%",
    transform: "translate(0, -50%)",
    transition: "transform 0.3s ease"
  },
  "& .MuiInputLabel-root.MuiInputLabel-shrink": {
    transform: "translate(0, -30px) scale(0.75)",
    left: "25px",
    transition: "transform 0.3s ease",
    animation: "labelShake 0.5s ease forwards"
  },
  "& .MuiInputBase-input": {
    color: "#16205b"
  },
  "& .error-helper-text": {
    color: "red"
  },
  "& .MuiFormLabel-asterisk.Mui-error": {
    color: "#c2c4cc"
  }
}));
const LoginInput = ({ icon, value, error, ...props }) => {
  const inputStyle = error ? { border: "1px solid red" } : {};
  const helperTextStyles = error ? { className: "error-helper-text" } : {};
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    StyledTextField,
    {
      ...props,
      InputProps: {
        ...props.InputProps,
        style: inputStyle,
        endAdornment: icon ? /* @__PURE__ */ jsxRuntimeExports.jsx(InputAdornment, { position: "start", children: icon }) : null,
        disableUnderline: true
      },
      InputLabelProps: {
        ...props.InputLabelProps,
        shrink: value ? true : false
      },
      FormHelperTextProps: helperTextStyles
    }
  );
};
export {
  CheckCircle as C,
  LoginInput as L
};
//# sourceMappingURL=LoginInput-G0ViwFtG.js.map
