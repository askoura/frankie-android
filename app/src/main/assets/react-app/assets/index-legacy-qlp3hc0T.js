;
(function () {
  System.register(['./index-legacy-T3s18jo3.js'], function (exports, module) {
    'use strict';

    var getDefaultExportFromCjs;
    return {
      setters: [module => {
        getDefaultExportFromCjs = module.a8;
      }],
      execute: function execute() {
        var propTypes = {
          exports: {}
        };

        /**
         * Copyright (c) 2013-present, Facebook, Inc.
         *
         * This source code is licensed under the MIT license found in the
         * LICENSE file in the root directory of this source tree.
         */

        var ReactPropTypesSecret$1 = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';
        var ReactPropTypesSecret_1 = ReactPropTypesSecret$1;

        /**
         * Copyright (c) 2013-present, Facebook, Inc.
         *
         * This source code is licensed under the MIT license found in the
         * LICENSE file in the root directory of this source tree.
         */

        var ReactPropTypesSecret = ReactPropTypesSecret_1;
        function emptyFunction() {}
        function emptyFunctionWithReset() {}
        emptyFunctionWithReset.resetWarningCache = emptyFunction;
        var factoryWithThrowingShims = function factoryWithThrowingShims() {
          function shim(props, propName, componentName, location, propFullName, secret) {
            if (secret === ReactPropTypesSecret) {
              // It is still safe when called from React.
              return;
            }
            var err = new Error('Calling PropTypes validators directly is not supported by the `prop-types` package. ' + 'Use PropTypes.checkPropTypes() to call them. ' + 'Read more at http://fb.me/use-check-prop-types');
            err.name = 'Invariant Violation';
            throw err;
          }
          shim.isRequired = shim;
          function getShim() {
            return shim;
          } // Important!
          // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
          var ReactPropTypes = {
            array: shim,
            bigint: shim,
            bool: shim,
            func: shim,
            number: shim,
            object: shim,
            string: shim,
            symbol: shim,
            any: shim,
            arrayOf: getShim,
            element: shim,
            elementType: shim,
            instanceOf: getShim,
            node: shim,
            objectOf: getShim,
            oneOf: getShim,
            oneOfType: getShim,
            shape: getShim,
            exact: getShim,
            checkPropTypes: emptyFunctionWithReset,
            resetWarningCache: emptyFunction
          };
          ReactPropTypes.PropTypes = ReactPropTypes;
          return ReactPropTypes;
        };
        {
          propTypes.exports = factoryWithThrowingShims();
        }
        var propTypesExports = exports("p", propTypes.exports);
        const PropTypes = exports('P', /*@__PURE__*/getDefaultExportFromCjs(propTypesExports));
      }
    };
  });
})();
//# sourceMappingURL=index-legacy-qlp3hc0T.js.map
