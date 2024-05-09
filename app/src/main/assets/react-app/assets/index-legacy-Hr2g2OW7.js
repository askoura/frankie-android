;
(function () {
  System.register(['./index-legacy-vEA8K-LS.js', './use-service-legacy-Bcxdqe8R.js', './index-legacy-IS_T5KJK.js', './index-legacy-NBI_QIkO.js', './ErrorOutlineOutlined-legacy-B7MKIin6.js'], function (exports, module) {
    'use strict';

    var jsxRuntimeExports, useSelector, ValidationItem, createSelector;
    return {
      setters: [module => {
        jsxRuntimeExports = module.j;
      }, module => {
        useSelector = module.A;
      }, module => {
        ValidationItem = module.V;
      }, module => {
        createSelector = module.c;
      }, null],
      execute: function execute() {
        exports("default", Validation);
        function Validation(props) {
          const selectValidation = state => (props.component.validation ? state.runState.values[props.component.qualifiedCode] : {}) || {};
          const captureValidation = createSelector([selectValidation], selectedState => {
            var obj = {};
            Object.keys(props.component.validation).forEach(key => {
              var value = selectedState[key];
              if (value) {
                obj[key] = value;
              }
            });
            return obj;
          });
          const validation = useSelector(captureValidation);
          const messages = () => {
            if (props.component.validation) {
              let array = Object.keys(props.component.validation).filter(key => validation[key]);
              let limit = props.limit ? props.limit : array.length;
              return array.slice(0, limit).map((key, index) => {
                return /* @__PURE__ */jsxRuntimeExports.jsx(ValidationItem, {
                  name: key,
                  validation: props.component.validation[key]
                }, index);
              });
            } else {
              return "";
            }
          };
          return messages();
        }
      }
    };
  });
})();
//# sourceMappingURL=index-legacy-Hr2g2OW7.js.map
