;
(function () {
  const _excluded = ["icon", "value", "error"];
  function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
  function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : String(i); }
  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
  function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
  System.register(['./index-legacy-T3s18jo3.js', './TextField-legacy-vL2OdS5Q.js', './DatePicker-legacy-9Ey9K3I7.js'], function (exports, module) {
    'use strict';

    var createSvgIcon, jsxRuntimeExports, styled, TextField, InputAdornment;
    return {
      setters: [module => {
        createSvgIcon = module.c;
        jsxRuntimeExports = module.j;
        styled = module.s;
      }, module => {
        TextField = module.T;
      }, module => {
        InputAdornment = module.I;
      }],
      execute: function execute() {
        const CheckCircle = exports('C', createSvgIcon( /*#__PURE__*/jsxRuntimeExports.jsx("path", {
          d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
        }), 'CheckCircle'));
        const StyledTextField = styled(TextField)(({
          theme
        }) => ({
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
        const LoginInput = exports("L", _ref => {
          let icon = _ref.icon,
            value = _ref.value,
            error = _ref.error,
            props = _objectWithoutProperties(_ref, _excluded);
          const inputStyle = error ? {
            border: "1px solid red"
          } : {};
          const helperTextStyles = error ? {
            className: "error-helper-text"
          } : {};
          return /* @__PURE__ */jsxRuntimeExports.jsx(StyledTextField, _objectSpread(_objectSpread({}, props), {}, {
            InputProps: _objectSpread(_objectSpread({}, props.InputProps), {}, {
              style: inputStyle,
              endAdornment: icon ? /* @__PURE__ */jsxRuntimeExports.jsx(InputAdornment, {
                position: "start",
                children: icon
              }) : null,
              disableUnderline: true
            }),
            InputLabelProps: _objectSpread(_objectSpread({}, props.InputLabelProps), {}, {
              shrink: value ? true : false
            }),
            FormHelperTextProps: helperTextStyles
          }));
        });
      }
    };
  });
})();
//# sourceMappingURL=LoginInput-legacy-SHyBw1f-.js.map
