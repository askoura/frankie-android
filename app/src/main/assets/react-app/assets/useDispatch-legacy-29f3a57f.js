;
(function () {
  System.register(['./index-legacy-13317357.js'], function (exports, module) {
    'use strict';

    var ReactReduxContext, useReduxContext, reactExports;
    return {
      setters: [function (module) {
        ReactReduxContext = module.bL;
        useReduxContext = module.bM;
        reactExports = module.r;
      }],
      execute: function execute() {
        /**
         * Hook factory, which creates a `useStore` hook bound to a given context.
         *
         * @param {React.Context} [context=ReactReduxContext] Context passed to your `<Provider>`.
         * @returns {Function} A `useStore` hook bound to the specified context.
         */

        function createStoreHook() {
          var context = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : ReactReduxContext;
          var useReduxContext$1 =
          // @ts-ignore
          context === ReactReduxContext ? useReduxContext : function () {
            return reactExports.useContext(context);
          };
          return function useStore() {
            var _useReduxContext$ = useReduxContext$1(),
              store = _useReduxContext$.store; // @ts-ignore

            return store;
          };
        }
        /**
         * A hook to access the redux store.
         *
         * @returns {any} the redux store
         *
         * @example
         *
         * import React from 'react'
         * import { useStore } from 'react-redux'
         *
         * export const ExampleComponent = () => {
         *   const store = useStore()
         *   return <div>{store.getState()}</div>
         * }
         */

        var useStore = /*#__PURE__*/createStoreHook();

        /**
         * Hook factory, which creates a `useDispatch` hook bound to a given context.
         *
         * @param {React.Context} [context=ReactReduxContext] Context passed to your `<Provider>`.
         * @returns {Function} A `useDispatch` hook bound to the specified context.
         */

        function createDispatchHook() {
          var context = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : ReactReduxContext;
          var useStore$1 =
          // @ts-ignore
          context === ReactReduxContext ? useStore : createStoreHook(context);
          return function useDispatch() {
            var store = useStore$1(); // @ts-ignore

            return store.dispatch;
          };
        }
        /**
         * A hook to access the redux `dispatch` function.
         *
         * @returns {any|function} redux store's `dispatch` function
         *
         * @example
         *
         * import React, { useCallback } from 'react'
         * import { useDispatch } from 'react-redux'
         *
         * export const CounterComponent = ({ value }) => {
         *   const dispatch = useDispatch()
         *   const increaseCounter = useCallback(() => dispatch({ type: 'increase-counter' }), [])
         *   return (
         *     <div>
         *       <span>{value}</span>
         *       <button onClick={increaseCounter}>Increase counter</button>
         *     </div>
         *   )
         * }
         */

        var useDispatch = exports('u', /*#__PURE__*/createDispatchHook());
      }
    };
  });
})();
