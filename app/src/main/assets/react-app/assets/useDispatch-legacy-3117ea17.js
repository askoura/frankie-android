;
(function () {
  System.register(['./index-legacy-23e2ff21.js'], function (exports, module) {
    'use strict';

    var ReactReduxContext, useReduxContext, reactExports;
    return {
      setters: [module => {
        ReactReduxContext = module.bM;
        useReduxContext = module.bN;
        reactExports = module.r;
      }],
      execute: function () {
        /**
         * Hook factory, which creates a `useStore` hook bound to a given context.
         *
         * @param {React.Context} [context=ReactReduxContext] Context passed to your `<Provider>`.
         * @returns {Function} A `useStore` hook bound to the specified context.
         */

        function createStoreHook(context = ReactReduxContext) {
          const useReduxContext$1 =
          // @ts-ignore
          context === ReactReduxContext ? useReduxContext : () => reactExports.useContext(context);
          return function useStore() {
            const {
              store
            } = useReduxContext$1(); // @ts-ignore

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

        const useStore = /*#__PURE__*/createStoreHook();

        /**
         * Hook factory, which creates a `useDispatch` hook bound to a given context.
         *
         * @param {React.Context} [context=ReactReduxContext] Context passed to your `<Provider>`.
         * @returns {Function} A `useDispatch` hook bound to the specified context.
         */

        function createDispatchHook(context = ReactReduxContext) {
          const useStore$1 =
          // @ts-ignore
          context === ReactReduxContext ? useStore : createStoreHook(context);
          return function useDispatch() {
            const store = useStore$1(); // @ts-ignore

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

        const useDispatch = exports('u', /*#__PURE__*/createDispatchHook());
      }
    };
  });
})();
