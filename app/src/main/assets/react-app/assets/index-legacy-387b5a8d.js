;
(function () {
  System.register(['./index-legacy-99c8bdce.js', './index-legacy-bffbe42c.js', './common-legacy-ddf67078.js'], function (exports, module) {
    'use strict';

    var __vite_style__ = document.createElement('style');
    __vite_style__.textContent = "._mainContainer_jw0w9_1 {\n  display: flex;\n  align-items: center;\n  width: 100%;\n  height: 100vh;\n  justify-content: center;\n}\n";
    document.head.appendChild(__vite_style__);
    var jsxRuntimeExports, LoadingIndicator, LanguageSelector, ProcessedError, Box;
    return {
      setters: [function (module) {
        jsxRuntimeExports = module.j;
        LoadingIndicator = module.d;
      }, function (module) {
        LanguageSelector = module.L;
        ProcessedError = module.P;
      }, function (module) {
        Box = module.B;
      }],
      execute: function execute() {
        var mainContainer = "_mainContainer_jw0w9_1";
        var styles = {
          mainContainer: mainContainer
        };
        var AuthWrap = exports('A', function (_ref) {
          var children = _ref.children,
            loading = _ref.loading,
            showError = _ref.showError,
            processedError = _ref.processedError,
            handleClose = _ref.handleClose;
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
              handleClose: handleClose
            }), children]
          });
        });
      }
    };
  });
})();
