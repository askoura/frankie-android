;
(function () {
  System.register(['./index-legacy-bc4d1445.js'], function (exports, module) {
    'use strict';

    var requireCreateSvgIcon, interopRequireDefaultExports, jsxRuntimeExports;
    return {
      setters: [function (module) {
        requireCreateSvgIcon = module.i;
        interopRequireDefaultExports = module.k;
        jsxRuntimeExports = module.j;
      }],
      execute: function execute() {
        var ArrowBack = {};
        var _interopRequireDefault = interopRequireDefaultExports;
        Object.defineProperty(ArrowBack, "__esModule", {
          value: true
        });
        var default_1 = exports('d', ArrowBack.default = void 0);
        var _createSvgIcon = _interopRequireDefault(requireCreateSvgIcon());
        var _jsxRuntime = jsxRuntimeExports;
        var _default = (0, _createSvgIcon.default)( /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
          d: "M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"
        }), 'ArrowBack');
        exports('d', default_1 = ArrowBack.default = _default);
      }
    };
  });
})();
