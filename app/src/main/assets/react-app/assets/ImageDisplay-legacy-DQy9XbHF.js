;
(function () {
  System.register(['./index-legacy-BjrVJ6CZ.js', './Android-legacy-BIX_jJYw.js'], function (exports, module) {
    'use strict';

    var jsxRuntimeExports, buildResourceUrl;
    return {
      setters: [module => {
        jsxRuntimeExports = module.m;
      }, module => {
        buildResourceUrl = module.X;
      }],
      execute: function execute() {
        exports("default", ImageDisplay);
        function ImageDisplay(props) {
          var _props$component$reso, _props$component$reso2;
          const imageUrl = (_props$component$reso = props.component.resources) !== null && _props$component$reso !== void 0 && _props$component$reso.imageUrl ? buildResourceUrl(props.component.resources.imageUrl) : "";
          return ((_props$component$reso2 = props.component.resources) === null || _props$component$reso2 === void 0 ? void 0 : _props$component$reso2.imageUrl) && /* @__PURE__ */jsxRuntimeExports.jsx("div", {
            style: {
              textAlign: "center"
            },
            children: /* @__PURE__ */jsxRuntimeExports.jsx("img", {
              style: {
                width: "100%",
                maxWidth: "100%"
              },
              src: imageUrl
            })
          });
        }
      }
    };
  });
})();
//# sourceMappingURL=ImageDisplay-legacy-DQy9XbHF.js.map
