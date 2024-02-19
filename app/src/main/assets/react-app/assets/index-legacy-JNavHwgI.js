;
(function () {
  System.register(['./index-legacy-T3s18jo3.js', './index-legacy--XG2187u.js', './ErrorOutlineOutlined-legacy-c8N5-R3U.js'], function (exports, module) {
    'use strict';

    var useSelector, jsxRuntimeExports, ValidationItem;
    return {
      setters: [module => {
        useSelector = module.E;
        jsxRuntimeExports = module.j;
      }, module => {
        ValidationItem = module.V;
      }, null],
      execute: function execute() {
        exports('default', Validation);
        function Validation(props) {
          const validation = useSelector(state => {
            if (!props.component.validation) {
              return {};
            } else {
              var validation2 = {};
              Object.keys(props.component.validation).forEach(key => {
                var value = state.runState.values[props.component.qualifiedCode][key];
                if (value) {
                  validation2[key] = value;
                }
              });
              return validation2;
            }
          });
          function messages() {
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
          }
          return messages();
        }
      }
    };
  });
})();
//# sourceMappingURL=index-legacy-JNavHwgI.js.map
