;
(function () {
  System.register(['./index-legacy-7ea9dd30.js', './index-legacy-5f8fc065.js', './common-legacy-4bc1ef15.js'], function (exports, module) {
    'use strict';

    var __vite_style__ = document.createElement('style');
    __vite_style__.textContent = "._mainContainer_jw0w9_1 {\n  display: flex;\n  align-items: center;\n  width: 100%;\n  height: 100vh;\n  justify-content: center;\n}\n";
    document.head.appendChild(__vite_style__);
    var jsxRuntimeExports, LoadingIndicator, LanguageSelector, ProcessedError, Box;
    return {
      setters: [module => {
        jsxRuntimeExports = module.j;
        LoadingIndicator = module.d;
      }, module => {
        LanguageSelector = module.L;
        ProcessedError = module.P;
      }, module => {
        Box = module.B;
      }],
      execute: function () {
        const mainContainer = "_mainContainer_jw0w9_1";
        const styles = {
          mainContainer: mainContainer
        };
        const AuthWrap = exports('A', ({
          children,
          loading,
          showError,
          processedError,
          handleClose
        }) => {
          return /* @__PURE__ */jsxRuntimeExports.jsxs(Box, {
            className: styles.mainContainer,
            children: [/* @__PURE__ */jsxRuntimeExports.jsx(Box, {
              sx: {
                position: "absolute",
                top: "25px",
                right: "25px"
              },
              children: /* @__PURE__ */jsxRuntimeExports.jsx(LanguageSelector, {})
            }), loading && /* @__PURE__ */jsxRuntimeExports.jsx(LoadingIndicator, {}), showError && /* @__PURE__ */jsxRuntimeExports.jsx(ProcessedError, {
              error: processedError,
              handleClose
            }), children]
          });
        });
      }
    };
  });
})();
