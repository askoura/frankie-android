;
(function () {
  function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
  function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : String(i); }
  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  System.register(['./index-legacy-vEA8K-LS.js', './use-service-legacy-Bcxdqe8R.js', './ErrorOutlineOutlined-legacy-B7MKIin6.js'], function (exports, module) {
    'use strict';

    var jsxRuntimeExports, Box, useTranslation, ErrorOutlineOutlined;
    return {
      setters: [module => {
        jsxRuntimeExports = module.j;
        Box = module.B;
      }, module => {
        useTranslation = module.E;
      }, module => {
        ErrorOutlineOutlined = module.E;
      }],
      execute: function execute() {
        var __vite_style__ = document.createElement('style');
        __vite_style__.textContent = "._wrapper_1hpga_1 {\n  display: flex;\n  align-items: center;\n  width: 100%;\n  margin-top: 10px;\n  margin-bottom: 0;\n  line-height: 16px;\n  letter-spacing: 0.3px;\n}\n\n._icon_1hpga_11 {\n  margin-right: 12px;\n  transform: rotate(180deg);\n}\n";
        document.head.appendChild(__vite_style__);
        exports("V", ValidationItem);
        const wrapper = "_wrapper_1hpga_1";
        const icon = "_icon_1hpga_11";
        const styles = {
          wrapper: wrapper,
          icon: icon
        };
        function ValidationItem(props) {
          const _useTranslation = useTranslation(["run"]),
            t = _useTranslation.t;
          function messages() {
            let validationMessage = "";
            if (props.validation.content && props.validation.isCustomErrorActive) {
              validationMessage = props.validation.content;
            } else {
              var translationKey = props.name.replace(/[0-9]/g, "");
              validationMessage = t(translationKey, _objectSpread({}, props.validation));
            }
            if (validationMessage) {
              return /* @__PURE__ */jsxRuntimeExports.jsxs(Box, {
                sx: {
                  color: "error.main"
                },
                className: styles.wrapper,
                children: [/* @__PURE__ */jsxRuntimeExports.jsx(ErrorOutlineOutlined, {}), validationMessage]
              });
            } else {
              return "";
            }
          }
          return messages();
        }
      }
    };
  });
})();
//# sourceMappingURL=index-legacy-IS_T5KJK.js.map
