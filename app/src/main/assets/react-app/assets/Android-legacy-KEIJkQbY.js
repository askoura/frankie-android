;
(function () {
  System.register(['./index-legacy-vEA8K-LS.js', './use-service-legacy-Bcxdqe8R.js', './index-legacy-DP2zntN1.js', './index-legacy-B_GMe52E.js', './Toolbar-legacy-BeIwS6lj.js', './Card-legacy-DxmmOhD2.js'], function (exports, module) {
    'use strict';

    var useParams, jsxRuntimeExports, getparam, Provider, runStore, RunSurvey;
    return {
      setters: [module => {
        useParams = module.u;
        jsxRuntimeExports = module.j;
      }, module => {
        getparam = module.g;
        Provider = module.P;
        runStore = module.r;
      }, module => {
        RunSurvey = module.R;
      }, null, null, null],
      execute: function execute() {
        exports("default", Android);
        function Android() {
          const surveyId = getparam(useParams(), "surveyId");
          sessionStorage.setItem("surveyId", surveyId);
          return /* @__PURE__ */jsxRuntimeExports.jsx(Provider, {
            store: runStore,
            children: /* @__PURE__ */jsxRuntimeExports.jsx(RunSurvey, {})
          });
        }
      }
    };
  });
})();
//# sourceMappingURL=Android-legacy-KEIJkQbY.js.map
