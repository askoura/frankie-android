;
(function () {
  System.register(['./index-legacy-7ea9dd30.js'], function (exports, module) {
    'use strict';

    var _arrayWithHoles, _unsupportedIterableToArray, _nonIterableRest, reactExports, I18nContext, ReportNamespaces, getDefaults, _defineProperty, getI18n, _extends, clsx, _objectWithoutPropertiesLoose, useForkRef, useEventCallback, ownerDocument, jsxRuntimeExports, useEnhancedEffect, setRef, reactDomExports, ownerWindow, generateUtilityClass, generateUtilityClasses, createChainedFunction, composeClasses, debounce, Global, useTheme$1, defaultSxConfig, isPlainObject, styled, styleFunctionSx, THEME_ID, defaultTheme$1, React, _inheritsLoose, ReactDOM, _assertThisInitialized, styled$1, alpha, useThemeProps, keyframes, useIsFocusVisible, capitalize, createSvgIcon, darken, lighten, formatMuiErrorMessage, createTheme, ClassNameGenerator, rootShouldForwardProp, resolveProps, useId, deepmerge, slotShouldForwardProp, useControlled, emphasize;
    return {
      setters: [module => {
        _arrayWithHoles = module.bT;
        _unsupportedIterableToArray = module.bc;
        _nonIterableRest = module.bU;
        reactExports = module.r;
        I18nContext = module.ay;
        ReportNamespaces = module.bV;
        getDefaults = module.az;
        _defineProperty = module.aA;
        getI18n = module.aC;
        _extends = module.m;
        clsx = module.x;
        _objectWithoutPropertiesLoose = module._;
        useForkRef = module.X;
        useEventCallback = module.aF;
        ownerDocument = module.aG;
        jsxRuntimeExports = module.j;
        useEnhancedEffect = module.aE;
        setRef = module.aH;
        reactDomExports = module.aJ;
        ownerWindow = module.Z;
        generateUtilityClass = module.q;
        generateUtilityClasses = module.n;
        createChainedFunction = module.bK;
        composeClasses = module.y;
        debounce = module.Y;
        Global = module.bW;
        useTheme$1 = module.a9;
        defaultSxConfig = module.bX;
        isPlainObject = module.bY;
        styled = module.bZ;
        styleFunctionSx = module.b_;
        THEME_ID = module.bJ;
        defaultTheme$1 = module.b$;
        React = module.R;
        _inheritsLoose = module.bP;
        ReactDOM = module.c0;
        _assertThisInitialized = module.bh;
        styled$1 = module.t;
        alpha = module.au;
        useThemeProps = module.v;
        keyframes = module.c1;
        useIsFocusVisible = module.av;
        capitalize = module.W;
        createSvgIcon = module.c;
        darken = module.ax;
        lighten = module.aw;
        formatMuiErrorMessage = module.c2;
        createTheme = module.am;
        ClassNameGenerator = module.c3;
        rootShouldForwardProp = module.$;
        resolveProps = module.c4;
        useId = module.w;
        deepmerge = module.O;
        slotShouldForwardProp = module.aI;
        useControlled = module.aD;
        emphasize = module.c5;
      }],
      execute: function () {
        exports({
          H: getListItemTextUtilityClass,
          J: useSlotProps,
          N: appendOwnerState,
          R: getDialogTitleUtilityClass,
          V: useClassNamesOverride,
          X: FocusTrap,
          _: _slicedToArray,
          a0: useFormControl,
          a1: formControlState,
          a5: isAdornedStart,
          a6: isFilled,
          f: useTheme,
          h: extendSxProp,
          i: isHostComponent,
          l: createBox,
          o: getTransitionProps,
          q: warn,
          u: useTranslation,
          w: warnOnce
        });
        function warn() {
          if (console && console.warn) {
            var _console;
            for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
              args[_key] = arguments[_key];
            }
            if (typeof args[0] === 'string') args[0] = "react-i18next:: ".concat(args[0]);
            (_console = console).warn.apply(_console, args);
          }
        }
        var alreadyWarned = {};
        function warnOnce() {
          for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            args[_key2] = arguments[_key2];
          }
          if (typeof args[0] === 'string' && alreadyWarned[args[0]]) return;
          if (typeof args[0] === 'string') alreadyWarned[args[0]] = new Date();
          warn.apply(void 0, args);
        }
        function loadNamespaces(i18n, ns, cb) {
          i18n.loadNamespaces(ns, function () {
            if (i18n.isInitialized) {
              cb();
            } else {
              var initialized = function initialized() {
                setTimeout(function () {
                  i18n.off('initialized', initialized);
                }, 0);
                cb();
              };
              i18n.on('initialized', initialized);
            }
          });
        }
        function oldI18nextHasLoadedNamespace(ns, i18n) {
          var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
          var lng = i18n.languages[0];
          var fallbackLng = i18n.options ? i18n.options.fallbackLng : false;
          var lastLng = i18n.languages[i18n.languages.length - 1];
          if (lng.toLowerCase() === 'cimode') return true;
          var loadNotPending = function loadNotPending(l, n) {
            var loadState = i18n.services.backendConnector.state["".concat(l, "|").concat(n)];
            return loadState === -1 || loadState === 2;
          };
          if (options.bindI18n && options.bindI18n.indexOf('languageChanging') > -1 && i18n.services.backendConnector.backend && i18n.isLanguageChangingTo && !loadNotPending(i18n.isLanguageChangingTo, ns)) return false;
          if (i18n.hasResourceBundle(lng, ns)) return true;
          if (!i18n.services.backendConnector.backend || i18n.options.resources && !i18n.options.partialBundledLanguages) return true;
          if (loadNotPending(lng, ns) && (!fallbackLng || loadNotPending(lastLng, ns))) return true;
          return false;
        }
        function hasLoadedNamespace(ns, i18n) {
          var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
          if (!i18n.languages || !i18n.languages.length) {
            warnOnce('i18n.languages were undefined or empty', i18n.languages);
            return true;
          }
          var isNewerI18next = i18n.options.ignoreJSONStructure !== undefined;
          if (!isNewerI18next) {
            return oldI18nextHasLoadedNamespace(ns, i18n, options);
          }
          return i18n.hasLoadedNamespace(ns, {
            precheck: function precheck(i18nInstance, loadNotPending) {
              if (options.bindI18n && options.bindI18n.indexOf('languageChanging') > -1 && i18nInstance.services.backendConnector.backend && i18nInstance.isLanguageChangingTo && !loadNotPending(i18nInstance.isLanguageChangingTo, ns)) return false;
            }
          });
        }
        function _iterableToArrayLimit(arr, i) {
          var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"];
          if (null != _i) {
            var _s,
              _e,
              _x,
              _r,
              _arr = [],
              _n = !0,
              _d = !1;
            try {
              if (_x = (_i = _i.call(arr)).next, 0 === i) {
                if (Object(_i) !== _i) return;
                _n = !1;
              } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0);
            } catch (err) {
              _d = !0, _e = err;
            } finally {
              try {
                if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return;
              } finally {
                if (_d) throw _e;
              }
            }
            return _arr;
          }
        }
        function _slicedToArray(arr, i) {
          return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
        }
        function ownKeys(object, enumerableOnly) {
          var keys = Object.keys(object);
          if (Object.getOwnPropertySymbols) {
            var symbols = Object.getOwnPropertySymbols(object);
            if (enumerableOnly) {
              symbols = symbols.filter(function (sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
              });
            }
            keys.push.apply(keys, symbols);
          }
          return keys;
        }
        function _objectSpread(target) {
          for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i] != null ? arguments[i] : {};
            if (i % 2) {
              ownKeys(Object(source), true).forEach(function (key) {
                _defineProperty(target, key, source[key]);
              });
            } else if (Object.getOwnPropertyDescriptors) {
              Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
            } else {
              ownKeys(Object(source)).forEach(function (key) {
                Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
              });
            }
          }
          return target;
        }
        var usePrevious = function usePrevious(value, ignore) {
          var ref = reactExports.useRef();
          reactExports.useEffect(function () {
            ref.current = ignore ? ref.current : value;
          }, [value, ignore]);
          return ref.current;
        };
        function useTranslation(ns) {
          var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
          var i18nFromProps = props.i18n;
          var _ref = reactExports.useContext(I18nContext) || {},
            i18nFromContext = _ref.i18n,
            defaultNSFromContext = _ref.defaultNS;
          var i18n = i18nFromProps || i18nFromContext || getI18n();
          if (i18n && !i18n.reportNamespaces) i18n.reportNamespaces = new ReportNamespaces();
          if (!i18n) {
            warnOnce('You will need to pass in an i18next instance by using initReactI18next');
            var notReadyT = function notReadyT(k) {
              return Array.isArray(k) ? k[k.length - 1] : k;
            };
            var retNotReady = [notReadyT, {}, false];
            retNotReady.t = notReadyT;
            retNotReady.i18n = {};
            retNotReady.ready = false;
            return retNotReady;
          }
          if (i18n.options.react && i18n.options.react.wait !== undefined) warnOnce('It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.');
          var i18nOptions = _objectSpread(_objectSpread(_objectSpread({}, getDefaults()), i18n.options.react), props);
          var useSuspense = i18nOptions.useSuspense,
            keyPrefix = i18nOptions.keyPrefix;
          var namespaces = ns || defaultNSFromContext || i18n.options && i18n.options.defaultNS;
          namespaces = typeof namespaces === 'string' ? [namespaces] : namespaces || ['translation'];
          if (i18n.reportNamespaces.addUsedNamespaces) i18n.reportNamespaces.addUsedNamespaces(namespaces);
          var ready = (i18n.isInitialized || i18n.initializedStoreOnce) && namespaces.every(function (n) {
            return hasLoadedNamespace(n, i18n, i18nOptions);
          });
          function getT() {
            return i18n.getFixedT(null, i18nOptions.nsMode === 'fallback' ? namespaces : namespaces[0], keyPrefix);
          }
          var _useState = reactExports.useState(getT),
            _useState2 = _slicedToArray(_useState, 2),
            t = _useState2[0],
            setT = _useState2[1];
          var joinedNS = namespaces.join();
          var previousJoinedNS = usePrevious(joinedNS);
          var isMounted = reactExports.useRef(true);
          reactExports.useEffect(function () {
            var bindI18n = i18nOptions.bindI18n,
              bindI18nStore = i18nOptions.bindI18nStore;
            isMounted.current = true;
            if (!ready && !useSuspense) {
              loadNamespaces(i18n, namespaces, function () {
                if (isMounted.current) setT(getT);
              });
            }
            if (ready && previousJoinedNS && previousJoinedNS !== joinedNS && isMounted.current) {
              setT(getT);
            }
            function boundReset() {
              if (isMounted.current) setT(getT);
            }
            if (bindI18n && i18n) i18n.on(bindI18n, boundReset);
            if (bindI18nStore && i18n) i18n.store.on(bindI18nStore, boundReset);
            return function () {
              isMounted.current = false;
              if (bindI18n && i18n) bindI18n.split(' ').forEach(function (e) {
                return i18n.off(e, boundReset);
              });
              if (bindI18nStore && i18n) bindI18nStore.split(' ').forEach(function (e) {
                return i18n.store.off(e, boundReset);
              });
            };
          }, [i18n, joinedNS]);
          var isInitial = reactExports.useRef(true);
          reactExports.useEffect(function () {
            if (isMounted.current && !isInitial.current) {
              setT(getT);
            }
            isInitial.current = false;
          }, [i18n, keyPrefix]);
          var ret = [t, i18n, ready];
          ret.t = t;
          ret.i18n = i18n;
          ret.ready = ready;
          if (ready) return ret;
          if (!ready && !useSuspense) return ret;
          throw new Promise(function (resolve) {
            loadNamespaces(i18n, namespaces, function () {
              resolve();
            });
          });
        }

        // A change of the browser zoom change the scrollbar size.
        // Credit https://github.com/twbs/bootstrap/blob/488fd8afc535ca3a6ad4dc581f5e89217b6a36ac/js/src/util/scrollbar.js#L14-L18
        function getScrollbarSize(doc) {
          // https://developer.mozilla.org/en-US/docs/Web/API/Window/innerWidth#usage_notes
          const documentWidth = doc.documentElement.clientWidth;
          return Math.abs(window.innerWidth - documentWidth);
        }

        /**
         * Determines if a given element is a DOM element name (i.e. not a React component).
         */
        function isHostComponent(element) {
          return typeof element === 'string';
        }

        /**
         * Type of the ownerState based on the type of an element it applies to.
         * This resolves to the provided OwnerState for React components and `undefined` for host components.
         * Falls back to `OwnerState | undefined` when the exact type can't be determined in development time.
         */

        /**
         * Appends the ownerState object to the props, merging with the existing one if necessary.
         *
         * @param elementType Type of the element that owns the `existingProps`. If the element is a DOM node or undefined, `ownerState` is not applied.
         * @param otherProps Props of the element.
         * @param ownerState
         */
        function appendOwnerState(elementType, otherProps, ownerState) {
          if (elementType === undefined || isHostComponent(elementType)) {
            return otherProps;
          }
          return _extends({}, otherProps, {
            ownerState: _extends({}, otherProps.ownerState, ownerState)
          });
        }
        const defaultContextValue = {
          disableDefaultClasses: false
        };
        const ClassNameConfiguratorContext = /*#__PURE__*/reactExports.createContext(defaultContextValue);
        /**
         * @ignore - internal hook.
         *
         * Wraps the `generateUtilityClass` function and controls how the classes are generated.
         * Currently it only affects whether the classes are applied or not.
         *
         * @returns Function to be called with the `generateUtilityClass` function specific to a component to generate the classes.
         */
        function useClassNamesOverride(generateUtilityClass) {
          const {
            disableDefaultClasses
          } = reactExports.useContext(ClassNameConfiguratorContext);
          return slot => {
            if (disableDefaultClasses) {
              return '';
            }
            return generateUtilityClass(slot);
          };
        }

        /**
         * Extracts event handlers from a given object.
         * A prop is considered an event handler if it is a function and its name starts with `on`.
         *
         * @param object An object to extract event handlers from.
         * @param excludeKeys An array of keys to exclude from the returned object.
         */
        function extractEventHandlers(object, excludeKeys = []) {
          if (object === undefined) {
            return {};
          }
          const result = {};
          Object.keys(object).filter(prop => prop.match(/^on[A-Z]/) && typeof object[prop] === 'function' && !excludeKeys.includes(prop)).forEach(prop => {
            result[prop] = object[prop];
          });
          return result;
        }

        /**
         * If `componentProps` is a function, calls it with the provided `ownerState`.
         * Otherwise, just returns `componentProps`.
         */
        function resolveComponentProps(componentProps, ownerState) {
          if (typeof componentProps === 'function') {
            return componentProps(ownerState);
          }
          return componentProps;
        }

        /**
         * Removes event handlers from the given object.
         * A field is considered an event handler if it is a function with a name beginning with `on`.
         *
         * @param object Object to remove event handlers from.
         * @returns Object with event handlers removed.
         */
        function omitEventHandlers(object) {
          if (object === undefined) {
            return {};
          }
          const result = {};
          Object.keys(object).filter(prop => !(prop.match(/^on[A-Z]/) && typeof object[prop] === 'function')).forEach(prop => {
            result[prop] = object[prop];
          });
          return result;
        }

        /**
         * Merges the slot component internal props (usually coming from a hook)
         * with the externally provided ones.
         *
         * The merge order is (the latter overrides the former):
         * 1. The internal props (specified as a getter function to work with get*Props hook result)
         * 2. Additional props (specified internally on a Base UI component)
         * 3. External props specified on the owner component. These should only be used on a root slot.
         * 4. External props specified in the `slotProps.*` prop.
         * 5. The `className` prop - combined from all the above.
         * @param parameters
         * @returns
         */
        function mergeSlotProps(parameters) {
          const {
            getSlotProps,
            additionalProps,
            externalSlotProps,
            externalForwardedProps,
            className
          } = parameters;
          if (!getSlotProps) {
            // The simpler case - getSlotProps is not defined, so no internal event handlers are defined,
            // so we can simply merge all the props without having to worry about extracting event handlers.
            const joinedClasses = clsx(externalForwardedProps == null ? void 0 : externalForwardedProps.className, externalSlotProps == null ? void 0 : externalSlotProps.className, className, additionalProps == null ? void 0 : additionalProps.className);
            const mergedStyle = _extends({}, additionalProps == null ? void 0 : additionalProps.style, externalForwardedProps == null ? void 0 : externalForwardedProps.style, externalSlotProps == null ? void 0 : externalSlotProps.style);
            const props = _extends({}, additionalProps, externalForwardedProps, externalSlotProps);
            if (joinedClasses.length > 0) {
              props.className = joinedClasses;
            }
            if (Object.keys(mergedStyle).length > 0) {
              props.style = mergedStyle;
            }
            return {
              props,
              internalRef: undefined
            };
          }

          // In this case, getSlotProps is responsible for calling the external event handlers.
          // We don't need to include them in the merged props because of this.

          const eventHandlers = extractEventHandlers(_extends({}, externalForwardedProps, externalSlotProps));
          const componentsPropsWithoutEventHandlers = omitEventHandlers(externalSlotProps);
          const otherPropsWithoutEventHandlers = omitEventHandlers(externalForwardedProps);
          const internalSlotProps = getSlotProps(eventHandlers);

          // The order of classes is important here.
          // Emotion (that we use in libraries consuming Base UI) depends on this order
          // to properly override style. It requires the most important classes to be last
          // (see https://github.com/mui/material-ui/pull/33205) for the related discussion.
          const joinedClasses = clsx(internalSlotProps == null ? void 0 : internalSlotProps.className, additionalProps == null ? void 0 : additionalProps.className, className, externalForwardedProps == null ? void 0 : externalForwardedProps.className, externalSlotProps == null ? void 0 : externalSlotProps.className);
          const mergedStyle = _extends({}, internalSlotProps == null ? void 0 : internalSlotProps.style, additionalProps == null ? void 0 : additionalProps.style, externalForwardedProps == null ? void 0 : externalForwardedProps.style, externalSlotProps == null ? void 0 : externalSlotProps.style);
          const props = _extends({}, internalSlotProps, additionalProps, otherPropsWithoutEventHandlers, componentsPropsWithoutEventHandlers);
          if (joinedClasses.length > 0) {
            props.className = joinedClasses;
          }
          if (Object.keys(mergedStyle).length > 0) {
            props.style = mergedStyle;
          }
          return {
            props,
            internalRef: internalSlotProps.ref
          };
        }
        const _excluded$x = ["elementType", "externalSlotProps", "ownerState"];
        /**
         * @ignore - do not document.
         * Builds the props to be passed into the slot of an unstyled component.
         * It merges the internal props of the component with the ones supplied by the user, allowing to customize the behavior.
         * If the slot component is not a host component, it also merges in the `ownerState`.
         *
         * @param parameters.getSlotProps - A function that returns the props to be passed to the slot component.
         */
        function useSlotProps(parameters) {
          var _parameters$additiona;
          const {
              elementType,
              externalSlotProps,
              ownerState
            } = parameters,
            rest = _objectWithoutPropertiesLoose(parameters, _excluded$x);
          const resolvedComponentsProps = resolveComponentProps(externalSlotProps, ownerState);
          const {
            props: mergedProps,
            internalRef
          } = mergeSlotProps(_extends({}, rest, {
            externalSlotProps: resolvedComponentsProps
          }));
          const ref = useForkRef(internalRef, resolvedComponentsProps == null ? void 0 : resolvedComponentsProps.ref, (_parameters$additiona = parameters.additionalProps) == null ? void 0 : _parameters$additiona.ref);
          const props = appendOwnerState(elementType, _extends({}, mergedProps, {
            ref
          }), ownerState);
          return props;
        }
        function mapEventPropToEvent(eventProp) {
          return eventProp.substring(2).toLowerCase();
        }
        function clickedRootScrollbar(event, doc) {
          return doc.documentElement.clientWidth < event.clientX || doc.documentElement.clientHeight < event.clientY;
        }
        /**
         * Listen for click events that occur somewhere in the document, outside of the element itself.
         * For instance, if you need to hide a menu when people click anywhere else on your page.
         *
         * Demos:
         *
         * - [Click-Away Listener](https://mui.com/base/react-click-away-listener/)
         *
         * API:
         *
         * - [ClickAwayListener API](https://mui.com/base/react-click-away-listener/components-api/#click-away-listener)
         */
        function ClickAwayListener(props) {
          const {
            children,
            disableReactTree = false,
            mouseEvent = 'onClick',
            onClickAway,
            touchEvent = 'onTouchEnd'
          } = props;
          const movedRef = reactExports.useRef(false);
          const nodeRef = reactExports.useRef(null);
          const activatedRef = reactExports.useRef(false);
          const syntheticEventRef = reactExports.useRef(false);
          reactExports.useEffect(() => {
            // Ensure that this component is not "activated" synchronously.
            // https://github.com/facebook/react/issues/20074
            setTimeout(() => {
              activatedRef.current = true;
            }, 0);
            return () => {
              activatedRef.current = false;
            };
          }, []);
          const handleRef = useForkRef(
          // @ts-expect-error TODO upstream fix
          children.ref, nodeRef);

          // The handler doesn't take event.defaultPrevented into account:
          //
          // event.preventDefault() is meant to stop default behaviors like
          // clicking a checkbox to check it, hitting a button to submit a form,
          // and hitting left arrow to move the cursor in a text input etc.
          // Only special HTML elements have these default behaviors.
          const handleClickAway = useEventCallback(event => {
            // Given developers can stop the propagation of the synthetic event,
            // we can only be confident with a positive value.
            const insideReactTree = syntheticEventRef.current;
            syntheticEventRef.current = false;
            const doc = ownerDocument(nodeRef.current);

            // 1. IE11 support, which trigger the handleClickAway even after the unbind
            // 2. The child might render null.
            // 3. Behave like a blur listener.
            if (!activatedRef.current || !nodeRef.current || 'clientX' in event && clickedRootScrollbar(event, doc)) {
              return;
            }

            // Do not act if user performed touchmove
            if (movedRef.current) {
              movedRef.current = false;
              return;
            }
            let insideDOM;

            // If not enough, can use https://github.com/DieterHolvoet/event-propagation-path/blob/master/propagationPath.js
            if (event.composedPath) {
              insideDOM = event.composedPath().indexOf(nodeRef.current) > -1;
            } else {
              insideDOM = !doc.documentElement.contains(
              // @ts-expect-error returns `false` as intended when not dispatched from a Node
              event.target) || nodeRef.current.contains(
              // @ts-expect-error returns `false` as intended when not dispatched from a Node
              event.target);
            }
            if (!insideDOM && (disableReactTree || !insideReactTree)) {
              onClickAway(event);
            }
          });

          // Keep track of mouse/touch events that bubbled up through the portal.
          const createHandleSynthetic = handlerName => event => {
            syntheticEventRef.current = true;
            const childrenPropsHandler = children.props[handlerName];
            if (childrenPropsHandler) {
              childrenPropsHandler(event);
            }
          };
          const childrenProps = {
            ref: handleRef
          };
          if (touchEvent !== false) {
            childrenProps[touchEvent] = createHandleSynthetic(touchEvent);
          }
          reactExports.useEffect(() => {
            if (touchEvent !== false) {
              const mappedTouchEvent = mapEventPropToEvent(touchEvent);
              const doc = ownerDocument(nodeRef.current);
              const handleTouchMove = () => {
                movedRef.current = true;
              };
              doc.addEventListener(mappedTouchEvent, handleClickAway);
              doc.addEventListener('touchmove', handleTouchMove);
              return () => {
                doc.removeEventListener(mappedTouchEvent, handleClickAway);
                doc.removeEventListener('touchmove', handleTouchMove);
              };
            }
            return undefined;
          }, [handleClickAway, touchEvent]);
          if (mouseEvent !== false) {
            childrenProps[mouseEvent] = createHandleSynthetic(mouseEvent);
          }
          reactExports.useEffect(() => {
            if (mouseEvent !== false) {
              const mappedMouseEvent = mapEventPropToEvent(mouseEvent);
              const doc = ownerDocument(nodeRef.current);
              doc.addEventListener(mappedMouseEvent, handleClickAway);
              return () => {
                doc.removeEventListener(mappedMouseEvent, handleClickAway);
              };
            }
            return undefined;
          }, [handleClickAway, mouseEvent]);
          return /*#__PURE__*/jsxRuntimeExports.jsx(reactExports.Fragment, {
            children: /*#__PURE__*/reactExports.cloneElement(children, childrenProps)
          });
        }

        /* eslint-disable consistent-return, jsx-a11y/no-noninteractive-tabindex */
        // Inspired by https://github.com/focus-trap/tabbable
        const candidatesSelector = ['input', 'select', 'textarea', 'a[href]', 'button', '[tabindex]', 'audio[controls]', 'video[controls]', '[contenteditable]:not([contenteditable="false"])'].join(',');
        function getTabIndex(node) {
          const tabindexAttr = parseInt(node.getAttribute('tabindex') || '', 10);
          if (!Number.isNaN(tabindexAttr)) {
            return tabindexAttr;
          }

          // Browsers do not return `tabIndex` correctly for contentEditable nodes;
          // https://bugs.chromium.org/p/chromium/issues/detail?id=661108&q=contenteditable%20tabindex&can=2
          // so if they don't have a tabindex attribute specifically set, assume it's 0.
          // in Chrome, <details/>, <audio controls/> and <video controls/> elements get a default
          //  `tabIndex` of -1 when the 'tabindex' attribute isn't specified in the DOM,
          //  yet they are still part of the regular tab order; in FF, they get a default
          //  `tabIndex` of 0; since Chrome still puts those elements in the regular tab
          //  order, consider their tab index to be 0.
          if (node.contentEditable === 'true' || (node.nodeName === 'AUDIO' || node.nodeName === 'VIDEO' || node.nodeName === 'DETAILS') && node.getAttribute('tabindex') === null) {
            return 0;
          }
          return node.tabIndex;
        }
        function isNonTabbableRadio(node) {
          if (node.tagName !== 'INPUT' || node.type !== 'radio') {
            return false;
          }
          if (!node.name) {
            return false;
          }
          const getRadio = selector => node.ownerDocument.querySelector(`input[type="radio"]${selector}`);
          let roving = getRadio(`[name="${node.name}"]:checked`);
          if (!roving) {
            roving = getRadio(`[name="${node.name}"]`);
          }
          return roving !== node;
        }
        function isNodeMatchingSelectorFocusable(node) {
          if (node.disabled || node.tagName === 'INPUT' && node.type === 'hidden' || isNonTabbableRadio(node)) {
            return false;
          }
          return true;
        }
        function defaultGetTabbable(root) {
          const regularTabNodes = [];
          const orderedTabNodes = [];
          Array.from(root.querySelectorAll(candidatesSelector)).forEach((node, i) => {
            const nodeTabIndex = getTabIndex(node);
            if (nodeTabIndex === -1 || !isNodeMatchingSelectorFocusable(node)) {
              return;
            }
            if (nodeTabIndex === 0) {
              regularTabNodes.push(node);
            } else {
              orderedTabNodes.push({
                documentOrder: i,
                tabIndex: nodeTabIndex,
                node: node
              });
            }
          });
          return orderedTabNodes.sort((a, b) => a.tabIndex === b.tabIndex ? a.documentOrder - b.documentOrder : a.tabIndex - b.tabIndex).map(a => a.node).concat(regularTabNodes);
        }
        function defaultIsEnabled() {
          return true;
        }

        /**
         * Utility component that locks focus inside the component.
         *
         * Demos:
         *
         * - [Focus Trap](https://mui.com/base/react-focus-trap/)
         *
         * API:
         *
         * - [FocusTrap API](https://mui.com/base/react-focus-trap/components-api/#focus-trap)
         */
        function FocusTrap(props) {
          const {
            children,
            disableAutoFocus = false,
            disableEnforceFocus = false,
            disableRestoreFocus = false,
            getTabbable = defaultGetTabbable,
            isEnabled = defaultIsEnabled,
            open
          } = props;
          const ignoreNextEnforceFocus = reactExports.useRef(false);
          const sentinelStart = reactExports.useRef(null);
          const sentinelEnd = reactExports.useRef(null);
          const nodeToRestore = reactExports.useRef(null);
          const reactFocusEventTarget = reactExports.useRef(null);
          // This variable is useful when disableAutoFocus is true.
          // It waits for the active element to move into the component to activate.
          const activated = reactExports.useRef(false);
          const rootRef = reactExports.useRef(null);
          // @ts-expect-error TODO upstream fix
          const handleRef = useForkRef(children.ref, rootRef);
          const lastKeydown = reactExports.useRef(null);
          reactExports.useEffect(() => {
            // We might render an empty child.
            if (!open || !rootRef.current) {
              return;
            }
            activated.current = !disableAutoFocus;
          }, [disableAutoFocus, open]);
          reactExports.useEffect(() => {
            // We might render an empty child.
            if (!open || !rootRef.current) {
              return;
            }
            const doc = ownerDocument(rootRef.current);
            if (!rootRef.current.contains(doc.activeElement)) {
              if (!rootRef.current.hasAttribute('tabIndex')) {
                rootRef.current.setAttribute('tabIndex', '-1');
              }
              if (activated.current) {
                rootRef.current.focus();
              }
            }
            return () => {
              // restoreLastFocus()
              if (!disableRestoreFocus) {
                // In IE11 it is possible for document.activeElement to be null resulting
                // in nodeToRestore.current being null.
                // Not all elements in IE11 have a focus method.
                // Once IE11 support is dropped the focus() call can be unconditional.
                if (nodeToRestore.current && nodeToRestore.current.focus) {
                  ignoreNextEnforceFocus.current = true;
                  nodeToRestore.current.focus();
                }
                nodeToRestore.current = null;
              }
            };
            // Missing `disableRestoreFocus` which is fine.
            // We don't support changing that prop on an open FocusTrap
            // eslint-disable-next-line react-hooks/exhaustive-deps
          }, [open]);
          reactExports.useEffect(() => {
            // We might render an empty child.
            if (!open || !rootRef.current) {
              return;
            }
            const doc = ownerDocument(rootRef.current);
            const contain = nativeEvent => {
              const {
                current: rootElement
              } = rootRef;

              // Cleanup functions are executed lazily in React 17.
              // Contain can be called between the component being unmounted and its cleanup function being run.
              if (rootElement === null) {
                return;
              }
              if (!doc.hasFocus() || disableEnforceFocus || !isEnabled() || ignoreNextEnforceFocus.current) {
                ignoreNextEnforceFocus.current = false;
                return;
              }
              if (!rootElement.contains(doc.activeElement)) {
                // if the focus event is not coming from inside the children's react tree, reset the refs
                if (nativeEvent && reactFocusEventTarget.current !== nativeEvent.target || doc.activeElement !== reactFocusEventTarget.current) {
                  reactFocusEventTarget.current = null;
                } else if (reactFocusEventTarget.current !== null) {
                  return;
                }
                if (!activated.current) {
                  return;
                }
                let tabbable = [];
                if (doc.activeElement === sentinelStart.current || doc.activeElement === sentinelEnd.current) {
                  tabbable = getTabbable(rootRef.current);
                }
                if (tabbable.length > 0) {
                  var _lastKeydown$current, _lastKeydown$current2;
                  const isShiftTab = Boolean(((_lastKeydown$current = lastKeydown.current) == null ? void 0 : _lastKeydown$current.shiftKey) && ((_lastKeydown$current2 = lastKeydown.current) == null ? void 0 : _lastKeydown$current2.key) === 'Tab');
                  const focusNext = tabbable[0];
                  const focusPrevious = tabbable[tabbable.length - 1];
                  if (typeof focusNext !== 'string' && typeof focusPrevious !== 'string') {
                    if (isShiftTab) {
                      focusPrevious.focus();
                    } else {
                      focusNext.focus();
                    }
                  }
                } else {
                  rootElement.focus();
                }
              }
            };
            const loopFocus = nativeEvent => {
              lastKeydown.current = nativeEvent;
              if (disableEnforceFocus || !isEnabled() || nativeEvent.key !== 'Tab') {
                return;
              }

              // Make sure the next tab starts from the right place.
              // doc.activeElement refers to the origin.
              if (doc.activeElement === rootRef.current && nativeEvent.shiftKey) {
                // We need to ignore the next contain as
                // it will try to move the focus back to the rootRef element.
                ignoreNextEnforceFocus.current = true;
                if (sentinelEnd.current) {
                  sentinelEnd.current.focus();
                }
              }
            };
            doc.addEventListener('focusin', contain);
            doc.addEventListener('keydown', loopFocus, true);

            // With Edge, Safari and Firefox, no focus related events are fired when the focused area stops being a focused area.
            // e.g. https://bugzilla.mozilla.org/show_bug.cgi?id=559561.
            // Instead, we can look if the active element was restored on the BODY element.
            //
            // The whatwg spec defines how the browser should behave but does not explicitly mention any events:
            // https://html.spec.whatwg.org/multipage/interaction.html#focus-fixup-rule.
            const interval = setInterval(() => {
              if (doc.activeElement && doc.activeElement.tagName === 'BODY') {
                contain(null);
              }
            }, 50);
            return () => {
              clearInterval(interval);
              doc.removeEventListener('focusin', contain);
              doc.removeEventListener('keydown', loopFocus, true);
            };
          }, [disableAutoFocus, disableEnforceFocus, disableRestoreFocus, isEnabled, open, getTabbable]);
          const onFocus = event => {
            if (nodeToRestore.current === null) {
              nodeToRestore.current = event.relatedTarget;
            }
            activated.current = true;
            reactFocusEventTarget.current = event.target;
            const childrenPropsHandler = children.props.onFocus;
            if (childrenPropsHandler) {
              childrenPropsHandler(event);
            }
          };
          const handleFocusSentinel = event => {
            if (nodeToRestore.current === null) {
              nodeToRestore.current = event.relatedTarget;
            }
            activated.current = true;
          };
          return /*#__PURE__*/jsxRuntimeExports.jsxs(reactExports.Fragment, {
            children: [/*#__PURE__*/jsxRuntimeExports.jsx("div", {
              tabIndex: open ? 0 : -1,
              onFocus: handleFocusSentinel,
              ref: sentinelStart,
              "data-testid": "sentinelStart"
            }), /*#__PURE__*/reactExports.cloneElement(children, {
              ref: handleRef,
              onFocus
            }), /*#__PURE__*/jsxRuntimeExports.jsx("div", {
              tabIndex: open ? 0 : -1,
              onFocus: handleFocusSentinel,
              ref: sentinelEnd,
              "data-testid": "sentinelEnd"
            })]
          });
        }
        function getContainer$1(container) {
          return typeof container === 'function' ? container() : container;
        }

        /**
         * Portals provide a first-class way to render children into a DOM node
         * that exists outside the DOM hierarchy of the parent component.
         *
         * Demos:
         *
         * - [Portal](https://mui.com/base/react-portal/)
         *
         * API:
         *
         * - [Portal API](https://mui.com/base/react-portal/components-api/#portal)
         */
        const Portal = /*#__PURE__*/reactExports.forwardRef(function Portal(props, ref) {
          const {
            children,
            container,
            disablePortal = false
          } = props;
          const [mountNode, setMountNode] = reactExports.useState(null);
          // @ts-expect-error TODO upstream fix
          const handleRef = useForkRef( /*#__PURE__*/reactExports.isValidElement(children) ? children.ref : null, ref);
          useEnhancedEffect(() => {
            if (!disablePortal) {
              setMountNode(getContainer$1(container) || document.body);
            }
          }, [container, disablePortal]);
          useEnhancedEffect(() => {
            if (mountNode && !disablePortal) {
              setRef(ref, mountNode);
              return () => {
                setRef(ref, null);
              };
            }
            return undefined;
          }, [ref, mountNode, disablePortal]);
          if (disablePortal) {
            if ( /*#__PURE__*/reactExports.isValidElement(children)) {
              const newProps = {
                ref: handleRef
              };
              return /*#__PURE__*/reactExports.cloneElement(children, newProps);
            }
            return /*#__PURE__*/jsxRuntimeExports.jsx(reactExports.Fragment, {
              children: children
            });
          }
          return /*#__PURE__*/jsxRuntimeExports.jsx(reactExports.Fragment, {
            children: mountNode ? /*#__PURE__*/reactDomExports.createPortal(children, mountNode) : mountNode
          });
        });
        const Portal$1 = exports('U', Portal);

        // Is a vertical scrollbar displayed?
        function isOverflowing(container) {
          const doc = ownerDocument(container);
          if (doc.body === container) {
            return ownerWindow(container).innerWidth > doc.documentElement.clientWidth;
          }
          return container.scrollHeight > container.clientHeight;
        }
        function ariaHidden(element, show) {
          if (show) {
            element.setAttribute('aria-hidden', 'true');
          } else {
            element.removeAttribute('aria-hidden');
          }
        }
        function getPaddingRight(element) {
          return parseInt(ownerWindow(element).getComputedStyle(element).paddingRight, 10) || 0;
        }
        function isAriaHiddenForbiddenOnElement(element) {
          // The forbidden HTML tags are the ones from ARIA specification that
          // can be children of body and can't have aria-hidden attribute.
          // cf. https://www.w3.org/TR/html-aria/#docconformance
          const forbiddenTagNames = ['TEMPLATE', 'SCRIPT', 'STYLE', 'LINK', 'MAP', 'META', 'NOSCRIPT', 'PICTURE', 'COL', 'COLGROUP', 'PARAM', 'SLOT', 'SOURCE', 'TRACK'];
          const isForbiddenTagName = forbiddenTagNames.indexOf(element.tagName) !== -1;
          const isInputHidden = element.tagName === 'INPUT' && element.getAttribute('type') === 'hidden';
          return isForbiddenTagName || isInputHidden;
        }
        function ariaHiddenSiblings(container, mountElement, currentElement, elementsToExclude, show) {
          const blacklist = [mountElement, currentElement, ...elementsToExclude];
          [].forEach.call(container.children, element => {
            const isNotExcludedElement = blacklist.indexOf(element) === -1;
            const isNotForbiddenElement = !isAriaHiddenForbiddenOnElement(element);
            if (isNotExcludedElement && isNotForbiddenElement) {
              ariaHidden(element, show);
            }
          });
        }
        function findIndexOf(items, callback) {
          let idx = -1;
          items.some((item, index) => {
            if (callback(item)) {
              idx = index;
              return true;
            }
            return false;
          });
          return idx;
        }
        function handleContainer(containerInfo, props) {
          const restoreStyle = [];
          const container = containerInfo.container;
          if (!props.disableScrollLock) {
            if (isOverflowing(container)) {
              // Compute the size before applying overflow hidden to avoid any scroll jumps.
              const scrollbarSize = getScrollbarSize(ownerDocument(container));
              restoreStyle.push({
                value: container.style.paddingRight,
                property: 'padding-right',
                el: container
              });
              // Use computed style, here to get the real padding to add our scrollbar width.
              container.style.paddingRight = `${getPaddingRight(container) + scrollbarSize}px`;

              // .mui-fixed is a global helper.
              const fixedElements = ownerDocument(container).querySelectorAll('.mui-fixed');
              [].forEach.call(fixedElements, element => {
                restoreStyle.push({
                  value: element.style.paddingRight,
                  property: 'padding-right',
                  el: element
                });
                element.style.paddingRight = `${getPaddingRight(element) + scrollbarSize}px`;
              });
            }
            let scrollContainer;
            if (container.parentNode instanceof DocumentFragment) {
              scrollContainer = ownerDocument(container).body;
            } else {
              // Improve Gatsby support
              // https://css-tricks.com/snippets/css/force-vertical-scrollbar/
              const parent = container.parentElement;
              const containerWindow = ownerWindow(container);
              scrollContainer = (parent == null ? void 0 : parent.nodeName) === 'HTML' && containerWindow.getComputedStyle(parent).overflowY === 'scroll' ? parent : container;
            }

            // Block the scroll even if no scrollbar is visible to account for mobile keyboard
            // screensize shrink.
            restoreStyle.push({
              value: scrollContainer.style.overflow,
              property: 'overflow',
              el: scrollContainer
            }, {
              value: scrollContainer.style.overflowX,
              property: 'overflow-x',
              el: scrollContainer
            }, {
              value: scrollContainer.style.overflowY,
              property: 'overflow-y',
              el: scrollContainer
            });
            scrollContainer.style.overflow = 'hidden';
          }
          const restore = () => {
            restoreStyle.forEach(({
              value,
              el,
              property
            }) => {
              if (value) {
                el.style.setProperty(property, value);
              } else {
                el.style.removeProperty(property);
              }
            });
          };
          return restore;
        }
        function getHiddenSiblings(container) {
          const hiddenSiblings = [];
          [].forEach.call(container.children, element => {
            if (element.getAttribute('aria-hidden') === 'true') {
              hiddenSiblings.push(element);
            }
          });
          return hiddenSiblings;
        }
        /**
         * @ignore - do not document.
         *
         * Proper state management for containers and the modals in those containers.
         * Simplified, but inspired by react-overlay's ModalManager class.
         * Used by the Modal to ensure proper styling of containers.
         */
        class ModalManager {
          constructor() {
            this.containers = void 0;
            this.modals = void 0;
            this.modals = [];
            this.containers = [];
          }
          add(modal, container) {
            let modalIndex = this.modals.indexOf(modal);
            if (modalIndex !== -1) {
              return modalIndex;
            }
            modalIndex = this.modals.length;
            this.modals.push(modal);

            // If the modal we are adding is already in the DOM.
            if (modal.modalRef) {
              ariaHidden(modal.modalRef, false);
            }
            const hiddenSiblings = getHiddenSiblings(container);
            ariaHiddenSiblings(container, modal.mount, modal.modalRef, hiddenSiblings, true);
            const containerIndex = findIndexOf(this.containers, item => item.container === container);
            if (containerIndex !== -1) {
              this.containers[containerIndex].modals.push(modal);
              return modalIndex;
            }
            this.containers.push({
              modals: [modal],
              container,
              restore: null,
              hiddenSiblings
            });
            return modalIndex;
          }
          mount(modal, props) {
            const containerIndex = findIndexOf(this.containers, item => item.modals.indexOf(modal) !== -1);
            const containerInfo = this.containers[containerIndex];
            if (!containerInfo.restore) {
              containerInfo.restore = handleContainer(containerInfo, props);
            }
          }
          remove(modal, ariaHiddenState = true) {
            const modalIndex = this.modals.indexOf(modal);
            if (modalIndex === -1) {
              return modalIndex;
            }
            const containerIndex = findIndexOf(this.containers, item => item.modals.indexOf(modal) !== -1);
            const containerInfo = this.containers[containerIndex];
            containerInfo.modals.splice(containerInfo.modals.indexOf(modal), 1);
            this.modals.splice(modalIndex, 1);

            // If that was the last modal in a container, clean up the container.
            if (containerInfo.modals.length === 0) {
              // The modal might be closed before it had the chance to be mounted in the DOM.
              if (containerInfo.restore) {
                containerInfo.restore();
              }
              if (modal.modalRef) {
                // In case the modal wasn't in the DOM yet.
                ariaHidden(modal.modalRef, ariaHiddenState);
              }
              ariaHiddenSiblings(containerInfo.container, modal.mount, modal.modalRef, containerInfo.hiddenSiblings, false);
              this.containers.splice(containerIndex, 1);
            } else {
              // Otherwise make sure the next top modal is visible to a screen reader.
              const nextTop = containerInfo.modals[containerInfo.modals.length - 1];
              // as soon as a modal is adding its modalRef is undefined. it can't set
              // aria-hidden because the dom element doesn't exist either
              // when modal was unmounted before modalRef gets null
              if (nextTop.modalRef) {
                ariaHidden(nextTop.modalRef, false);
              }
            }
            return modalIndex;
          }
          isTopModal(modal) {
            return this.modals.length > 0 && this.modals[this.modals.length - 1] === modal;
          }
        }
        function getModalUtilityClass(slot) {
          return generateUtilityClass('MuiModal', slot);
        }
        generateUtilityClasses('MuiModal', ['root', 'hidden', 'backdrop']);
        const _excluded$w = ["children", "closeAfterTransition", "component", "container", "disableAutoFocus", "disableEnforceFocus", "disableEscapeKeyDown", "disablePortal", "disableRestoreFocus", "disableScrollLock", "hideBackdrop", "keepMounted", "manager", "onBackdropClick", "onClose", "onKeyDown", "open", "onTransitionEnter", "onTransitionExited", "slotProps", "slots"];
        const useUtilityClasses$n = ownerState => {
          const {
            open,
            exited
          } = ownerState;
          const slots = {
            root: ['root', !open && exited && 'hidden'],
            backdrop: ['backdrop']
          };
          return composeClasses(slots, useClassNamesOverride(getModalUtilityClass));
        };
        function getContainer(container) {
          return typeof container === 'function' ? container() : container;
        }
        function getHasTransition(children) {
          return children ? children.props.hasOwnProperty('in') : false;
        }

        // A modal manager used to track and manage the state of open Modals.
        // Modals don't open on the server so this won't conflict with concurrent requests.
        const defaultManager = new ModalManager();

        /**
         * Modal is a lower-level construct that is leveraged by the following components:
         *
         * *   [Dialog](https://mui.com/material-ui/api/dialog/)
         * *   [Drawer](https://mui.com/material-ui/api/drawer/)
         * *   [Menu](https://mui.com/material-ui/api/menu/)
         * *   [Popover](https://mui.com/material-ui/api/popover/)
         *
         * If you are creating a modal dialog, you probably want to use the [Dialog](https://mui.com/material-ui/api/dialog/) component
         * rather than directly using Modal.
         *
         * This component shares many concepts with [react-overlays](https://react-bootstrap.github.io/react-overlays/#modals).
         *
         * Demos:
         *
         * - [Modal](https://mui.com/base/react-modal/)
         *
         * API:
         *
         * - [Modal API](https://mui.com/base/react-modal/components-api/#modal)
         */
        const Modal$2 = /*#__PURE__*/reactExports.forwardRef(function Modal(props, forwardedRef) {
          var _props$ariaHidden, _ref;
          const {
              children,
              closeAfterTransition = false,
              component,
              container,
              disableAutoFocus = false,
              disableEnforceFocus = false,
              disableEscapeKeyDown = false,
              disablePortal = false,
              disableRestoreFocus = false,
              disableScrollLock = false,
              hideBackdrop = false,
              keepMounted = false,
              // private
              manager = defaultManager,
              onBackdropClick,
              onClose,
              onKeyDown,
              open,
              onTransitionEnter,
              onTransitionExited,
              slotProps = {},
              slots = {}
            } = props,
            other = _objectWithoutPropertiesLoose(props, _excluded$w);
          const [exited, setExited] = reactExports.useState(!open);
          const modal = reactExports.useRef({});
          const mountNodeRef = reactExports.useRef(null);
          const modalRef = reactExports.useRef(null);
          const handleRef = useForkRef(modalRef, forwardedRef);
          const hasTransition = getHasTransition(children);
          const ariaHiddenProp = (_props$ariaHidden = props['aria-hidden']) != null ? _props$ariaHidden : true;
          const getDoc = () => ownerDocument(mountNodeRef.current);
          const getModal = () => {
            modal.current.modalRef = modalRef.current;
            modal.current.mountNode = mountNodeRef.current;
            return modal.current;
          };
          const handleMounted = () => {
            manager.mount(getModal(), {
              disableScrollLock
            });

            // Fix a bug on Chrome where the scroll isn't initially 0.
            if (modalRef.current) {
              modalRef.current.scrollTop = 0;
            }
          };
          const handleOpen = useEventCallback(() => {
            const resolvedContainer = getContainer(container) || getDoc().body;
            manager.add(getModal(), resolvedContainer);

            // The element was already mounted.
            if (modalRef.current) {
              handleMounted();
            }
          });
          const isTopModal = reactExports.useCallback(() => manager.isTopModal(getModal()), [manager]);
          const handlePortalRef = useEventCallback(node => {
            mountNodeRef.current = node;
            if (!node || !modalRef.current) {
              return;
            }
            if (open && isTopModal()) {
              handleMounted();
            } else {
              ariaHidden(modalRef.current, ariaHiddenProp);
            }
          });
          const handleClose = reactExports.useCallback(() => {
            manager.remove(getModal(), ariaHiddenProp);
          }, [manager, ariaHiddenProp]);
          reactExports.useEffect(() => {
            return () => {
              handleClose();
            };
          }, [handleClose]);
          reactExports.useEffect(() => {
            if (open) {
              handleOpen();
            } else if (!hasTransition || !closeAfterTransition) {
              handleClose();
            }
          }, [open, handleClose, hasTransition, closeAfterTransition, handleOpen]);
          const ownerState = _extends({}, props, {
            closeAfterTransition,
            disableAutoFocus,
            disableEnforceFocus,
            disableEscapeKeyDown,
            disablePortal,
            disableRestoreFocus,
            disableScrollLock,
            exited,
            hideBackdrop,
            keepMounted
          });
          const classes = useUtilityClasses$n(ownerState);
          const handleEnter = () => {
            setExited(false);
            if (onTransitionEnter) {
              onTransitionEnter();
            }
          };
          const handleExited = () => {
            setExited(true);
            if (onTransitionExited) {
              onTransitionExited();
            }
            if (closeAfterTransition) {
              handleClose();
            }
          };
          const handleBackdropClick = event => {
            if (event.target !== event.currentTarget) {
              return;
            }
            if (onBackdropClick) {
              onBackdropClick(event);
            }
            if (onClose) {
              onClose(event, 'backdropClick');
            }
          };
          const handleKeyDown = event => {
            if (onKeyDown) {
              onKeyDown(event);
            }

            // The handler doesn't take event.defaultPrevented into account:
            //
            // event.preventDefault() is meant to stop default behaviors like
            // clicking a checkbox to check it, hitting a button to submit a form,
            // and hitting left arrow to move the cursor in a text input etc.
            // Only special HTML elements have these default behaviors.
            if (event.key !== 'Escape' || !isTopModal()) {
              return;
            }
            if (!disableEscapeKeyDown) {
              // Swallow the event, in case someone is listening for the escape key on the body.
              event.stopPropagation();
              if (onClose) {
                onClose(event, 'escapeKeyDown');
              }
            }
          };
          const childProps = {};
          if (children.props.tabIndex === undefined) {
            childProps.tabIndex = '-1';
          }

          // It's a Transition like component
          if (hasTransition) {
            childProps.onEnter = createChainedFunction(handleEnter, children.props.onEnter);
            childProps.onExited = createChainedFunction(handleExited, children.props.onExited);
          }
          const Root = (_ref = component != null ? component : slots.root) != null ? _ref : 'div';
          const rootProps = useSlotProps({
            elementType: Root,
            externalSlotProps: slotProps.root,
            externalForwardedProps: other,
            additionalProps: {
              ref: handleRef,
              role: 'presentation',
              onKeyDown: handleKeyDown
            },
            className: classes.root,
            ownerState
          });
          const BackdropComponent = slots.backdrop;
          const backdropProps = useSlotProps({
            elementType: BackdropComponent,
            externalSlotProps: slotProps.backdrop,
            additionalProps: {
              'aria-hidden': true,
              onClick: handleBackdropClick,
              open
            },
            className: classes.backdrop,
            ownerState
          });
          if (!keepMounted && !open && (!hasTransition || exited)) {
            return null;
          }
          return /*#__PURE__*/jsxRuntimeExports.jsx(Portal$1
          // @ts-expect-error TODO: include ref to Base UI Portal props
          , {
            ref: handlePortalRef,
            container: container,
            disablePortal: disablePortal,
            children: /*#__PURE__*/jsxRuntimeExports.jsxs(Root, _extends({}, rootProps, {
              children: [!hideBackdrop && BackdropComponent ? /*#__PURE__*/jsxRuntimeExports.jsx(BackdropComponent, _extends({}, backdropProps)) : null, /*#__PURE__*/jsxRuntimeExports.jsx(FocusTrap, {
                disableEnforceFocus: disableEnforceFocus,
                disableAutoFocus: disableAutoFocus,
                disableRestoreFocus: disableRestoreFocus,
                isEnabled: isTopModal,
                open: open,
                children: /*#__PURE__*/reactExports.cloneElement(children, childProps)
              })]
            }))
          });
        });
        const ModalUnstyled = Modal$2;

        /**
         * The basic building block for creating custom snackbar.
         *
         * Demos:
         *
         * - [Snackbar](https://mui.com/base/react-snackbar/#hook)
         *
         * API:
         *
         * - [useSnackbar API](https://mui.com/base/react-snackbar/hooks-api/#use-snackbar)
         */
        function useSnackbar(parameters) {
          const {
            autoHideDuration = null,
            disableWindowBlurListener = false,
            onClose,
            open,
            ref,
            resumeHideDuration
          } = parameters;
          const timerAutoHide = reactExports.useRef();
          reactExports.useEffect(() => {
            if (!open) {
              return undefined;
            }

            /**
             * @param {KeyboardEvent} nativeEvent
             */
            function handleKeyDown(nativeEvent) {
              if (!nativeEvent.defaultPrevented) {
                // IE11, Edge (prior to using Blink?) use 'Esc'
                if (nativeEvent.key === 'Escape' || nativeEvent.key === 'Esc') {
                  // not calling `preventDefault` since we don't know if people may ignore this event e.g. a permanently open snackbar
                  onClose == null ? void 0 : onClose(nativeEvent, 'escapeKeyDown');
                }
              }
            }
            document.addEventListener('keydown', handleKeyDown);
            return () => {
              document.removeEventListener('keydown', handleKeyDown);
            };
          }, [open, onClose]);
          const handleClose = useEventCallback((event, reason) => {
            onClose == null ? void 0 : onClose(event, reason);
          });
          const setAutoHideTimer = useEventCallback(autoHideDurationParam => {
            if (!onClose || autoHideDurationParam == null) {
              return;
            }
            clearTimeout(timerAutoHide.current);
            timerAutoHide.current = setTimeout(() => {
              handleClose(null, 'timeout');
            }, autoHideDurationParam);
          });
          reactExports.useEffect(() => {
            if (open) {
              setAutoHideTimer(autoHideDuration);
            }
            return () => {
              clearTimeout(timerAutoHide.current);
            };
          }, [open, autoHideDuration, setAutoHideTimer]);
          const handleClickAway = event => {
            onClose == null ? void 0 : onClose(event, 'clickaway');
          };

          // Pause the timer when the user is interacting with the Snackbar
          // or when the user hide the window.
          const handlePause = () => {
            clearTimeout(timerAutoHide.current);
          };

          // Restart the timer when the user is no longer interacting with the Snackbar
          // or when the window is shown back.
          const handleResume = reactExports.useCallback(() => {
            if (autoHideDuration != null) {
              setAutoHideTimer(resumeHideDuration != null ? resumeHideDuration : autoHideDuration * 0.5);
            }
          }, [autoHideDuration, resumeHideDuration, setAutoHideTimer]);
          const createHandleBlur = otherHandlers => event => {
            const onBlurCallback = otherHandlers.onBlur;
            onBlurCallback == null ? void 0 : onBlurCallback(event);
            handleResume();
          };
          const createHandleFocus = otherHandlers => event => {
            const onFocusCallback = otherHandlers.onFocus;
            onFocusCallback == null ? void 0 : onFocusCallback(event);
            handlePause();
          };
          const createMouseEnter = otherHandlers => event => {
            const onMouseEnterCallback = otherHandlers.onMouseEnter;
            onMouseEnterCallback == null ? void 0 : onMouseEnterCallback(event);
            handlePause();
          };
          const createMouseLeave = otherHandlers => event => {
            const onMouseLeaveCallback = otherHandlers.onMouseLeave;
            onMouseLeaveCallback == null ? void 0 : onMouseLeaveCallback(event);
            handleResume();
          };
          reactExports.useEffect(() => {
            // TODO: window global should be refactored here
            if (!disableWindowBlurListener && open) {
              window.addEventListener('focus', handleResume);
              window.addEventListener('blur', handlePause);
              return () => {
                window.removeEventListener('focus', handleResume);
                window.removeEventListener('blur', handlePause);
              };
            }
            return undefined;
          }, [disableWindowBlurListener, handleResume, open]);
          const getRootProps = (otherHandlers = {}) => {
            const propsEventHandlers = extractEventHandlers(parameters);
            const externalEventHandlers = _extends({}, propsEventHandlers, otherHandlers);
            return _extends({
              ref,
              // ClickAwayListener adds an `onClick` prop which results in the alert not being announced.
              // See https://github.com/mui/material-ui/issues/29080
              role: 'presentation'
            }, externalEventHandlers, {
              onBlur: createHandleBlur(externalEventHandlers),
              onFocus: createHandleFocus(externalEventHandlers),
              onMouseEnter: createMouseEnter(externalEventHandlers),
              onMouseLeave: createMouseLeave(externalEventHandlers)
            });
          };
          return {
            getRootProps,
            onClickAway: handleClickAway
          };
        }
        const _excluded$v = ["onChange", "maxRows", "minRows", "style", "value"];
        function getStyleValue(value) {
          return parseInt(value, 10) || 0;
        }
        const styles$2 = {
          shadow: {
            // Visibility needed to hide the extra text area on iPads
            visibility: 'hidden',
            // Remove from the content flow
            position: 'absolute',
            // Ignore the scrollbar width
            overflow: 'hidden',
            height: 0,
            top: 0,
            left: 0,
            // Create a new layer, increase the isolation of the computed values
            transform: 'translateZ(0)'
          }
        };
        function isEmpty$2(obj) {
          return obj === undefined || obj === null || Object.keys(obj).length === 0 || obj.outerHeightStyle === 0 && !obj.overflow;
        }

        /**
         *
         * Demos:
         *
         * - [Textarea Autosize](https://mui.com/base/react-textarea-autosize/)
         * - [Textarea Autosize](https://mui.com/material-ui/react-textarea-autosize/)
         *
         * API:
         *
         * - [TextareaAutosize API](https://mui.com/base/react-textarea-autosize/components-api/#textarea-autosize)
         */
        const TextareaAutosize = /*#__PURE__*/reactExports.forwardRef(function TextareaAutosize(props, ref) {
          const {
              onChange,
              maxRows,
              minRows = 1,
              style,
              value
            } = props,
            other = _objectWithoutPropertiesLoose(props, _excluded$v);
          const {
            current: isControlled
          } = reactExports.useRef(value != null);
          const inputRef = reactExports.useRef(null);
          const handleRef = useForkRef(ref, inputRef);
          const shadowRef = reactExports.useRef(null);
          const renders = reactExports.useRef(0);
          const [state, setState] = reactExports.useState({
            outerHeightStyle: 0
          });
          const getUpdatedState = reactExports.useCallback(() => {
            const input = inputRef.current;
            const containerWindow = ownerWindow(input);
            const computedStyle = containerWindow.getComputedStyle(input);

            // If input's width is shrunk and it's not visible, don't sync height.
            if (computedStyle.width === '0px') {
              return {
                outerHeightStyle: 0
              };
            }
            const inputShallow = shadowRef.current;
            inputShallow.style.width = computedStyle.width;
            inputShallow.value = input.value || props.placeholder || 'x';
            if (inputShallow.value.slice(-1) === '\n') {
              // Certain fonts which overflow the line height will cause the textarea
              // to report a different scrollHeight depending on whether the last line
              // is empty. Make it non-empty to avoid this issue.
              inputShallow.value += ' ';
            }
            const boxSizing = computedStyle.boxSizing;
            const padding = getStyleValue(computedStyle.paddingBottom) + getStyleValue(computedStyle.paddingTop);
            const border = getStyleValue(computedStyle.borderBottomWidth) + getStyleValue(computedStyle.borderTopWidth);

            // The height of the inner content
            const innerHeight = inputShallow.scrollHeight;

            // Measure height of a textarea with a single row
            inputShallow.value = 'x';
            const singleRowHeight = inputShallow.scrollHeight;

            // The height of the outer content
            let outerHeight = innerHeight;
            if (minRows) {
              outerHeight = Math.max(Number(minRows) * singleRowHeight, outerHeight);
            }
            if (maxRows) {
              outerHeight = Math.min(Number(maxRows) * singleRowHeight, outerHeight);
            }
            outerHeight = Math.max(outerHeight, singleRowHeight);

            // Take the box sizing into account for applying this value as a style.
            const outerHeightStyle = outerHeight + (boxSizing === 'border-box' ? padding + border : 0);
            const overflow = Math.abs(outerHeight - innerHeight) <= 1;
            return {
              outerHeightStyle,
              overflow
            };
          }, [maxRows, minRows, props.placeholder]);
          const updateState = (prevState, newState) => {
            const {
              outerHeightStyle,
              overflow
            } = newState;
            // Need a large enough difference to update the height.
            // This prevents infinite rendering loop.
            if (renders.current < 20 && (outerHeightStyle > 0 && Math.abs((prevState.outerHeightStyle || 0) - outerHeightStyle) > 1 || prevState.overflow !== overflow)) {
              renders.current += 1;
              return {
                overflow,
                outerHeightStyle
              };
            }
            return prevState;
          };
          const syncHeight = reactExports.useCallback(() => {
            const newState = getUpdatedState();
            if (isEmpty$2(newState)) {
              return;
            }
            setState(prevState => {
              return updateState(prevState, newState);
            });
          }, [getUpdatedState]);
          const syncHeightWithFlushSync = () => {
            const newState = getUpdatedState();
            if (isEmpty$2(newState)) {
              return;
            }

            // In React 18, state updates in a ResizeObserver's callback are happening after the paint which causes flickering
            // when doing some visual updates in it. Using flushSync ensures that the dom will be painted after the states updates happen
            // Related issue - https://github.com/facebook/react/issues/24331
            reactDomExports.flushSync(() => {
              setState(prevState => {
                return updateState(prevState, newState);
              });
            });
          };
          reactExports.useEffect(() => {
            const handleResize = debounce(() => {
              renders.current = 0;

              // If the TextareaAutosize component is replaced by Suspense with a fallback, the last
              // ResizeObserver's handler that runs because of the change in the layout is trying to
              // access a dom node that is no longer there (as the fallback component is being shown instead).
              // See https://github.com/mui/material-ui/issues/32640
              if (inputRef.current) {
                syncHeightWithFlushSync();
              }
            });
            let resizeObserver;
            const input = inputRef.current;
            const containerWindow = ownerWindow(input);
            containerWindow.addEventListener('resize', handleResize);
            if (typeof ResizeObserver !== 'undefined') {
              resizeObserver = new ResizeObserver(handleResize);
              resizeObserver.observe(input);
            }
            return () => {
              handleResize.clear();
              containerWindow.removeEventListener('resize', handleResize);
              if (resizeObserver) {
                resizeObserver.disconnect();
              }
            };
          });
          useEnhancedEffect(() => {
            syncHeight();
          });
          reactExports.useEffect(() => {
            renders.current = 0;
          }, [value]);
          const handleChange = event => {
            renders.current = 0;
            if (!isControlled) {
              syncHeight();
            }
            if (onChange) {
              onChange(event);
            }
          };
          return /*#__PURE__*/jsxRuntimeExports.jsxs(reactExports.Fragment, {
            children: [/*#__PURE__*/jsxRuntimeExports.jsx("textarea", _extends({
              value: value,
              onChange: handleChange,
              ref: handleRef
              // Apply the rows prop to get a "correct" first SSR paint
              ,

              rows: minRows,
              style: _extends({
                height: state.outerHeightStyle,
                // Need a large enough difference to allow scrolling.
                // This prevents infinite rendering loop.
                overflow: state.overflow ? 'hidden' : undefined
              }, style)
            }, other)), /*#__PURE__*/jsxRuntimeExports.jsx("textarea", {
              "aria-hidden": true,
              className: props.className,
              readOnly: true,
              ref: shadowRef,
              tabIndex: -1,
              style: _extends({}, styles$2.shadow, style, {
                padding: 0
              })
            })]
          });
        });
        const TextareaAutosize$1 = exports('p', TextareaAutosize);
        function isEmpty$1(obj) {
          return obj === undefined || obj === null || Object.keys(obj).length === 0;
        }
        function GlobalStyles$2(props) {
          const {
            styles,
            defaultTheme = {}
          } = props;
          const globalStyles = typeof styles === 'function' ? themeInput => styles(isEmpty$1(themeInput) ? defaultTheme : themeInput) : styles;
          return /*#__PURE__*/jsxRuntimeExports.jsx(Global, {
            styles: globalStyles
          });
        }
        function GlobalStyles$1({
          styles,
          themeId,
          defaultTheme = {}
        }) {
          const upperTheme = useTheme$1(defaultTheme);
          const globalStyles = typeof styles === 'function' ? styles(themeId ? upperTheme[themeId] || upperTheme : upperTheme) : styles;
          return /*#__PURE__*/jsxRuntimeExports.jsx(GlobalStyles$2, {
            styles: globalStyles
          });
        }
        const _excluded$u = ["sx"];
        const splitProps = props => {
          var _props$theme$unstable, _props$theme;
          const result = {
            systemProps: {},
            otherProps: {}
          };
          const config = (_props$theme$unstable = props == null ? void 0 : (_props$theme = props.theme) == null ? void 0 : _props$theme.unstable_sxConfig) != null ? _props$theme$unstable : defaultSxConfig;
          Object.keys(props).forEach(prop => {
            if (config[prop]) {
              result.systemProps[prop] = props[prop];
            } else {
              result.otherProps[prop] = props[prop];
            }
          });
          return result;
        };
        function extendSxProp(props) {
          const {
              sx: inSx
            } = props,
            other = _objectWithoutPropertiesLoose(props, _excluded$u);
          const {
            systemProps,
            otherProps
          } = splitProps(other);
          let finalSx;
          if (Array.isArray(inSx)) {
            finalSx = [systemProps, ...inSx];
          } else if (typeof inSx === 'function') {
            finalSx = (...args) => {
              const result = inSx(...args);
              if (!isPlainObject(result)) {
                return systemProps;
              }
              return _extends({}, systemProps, result);
            };
          } else {
            finalSx = _extends({}, systemProps, inSx);
          }
          return _extends({}, otherProps, {
            sx: finalSx
          });
        }
        const _excluded$t = ["className", "component"];
        function createBox(options = {}) {
          const {
            themeId,
            defaultTheme,
            defaultClassName = 'MuiBox-root',
            generateClassName
          } = options;
          const BoxRoot = styled('div', {
            shouldForwardProp: prop => prop !== 'theme' && prop !== 'sx' && prop !== 'as'
          })(styleFunctionSx);
          const Box = /*#__PURE__*/reactExports.forwardRef(function Box(inProps, ref) {
            const theme = useTheme$1(defaultTheme);
            const _extendSxProp = extendSxProp(inProps),
              {
                className,
                component = 'div'
              } = _extendSxProp,
              other = _objectWithoutPropertiesLoose(_extendSxProp, _excluded$t);
            return /*#__PURE__*/jsxRuntimeExports.jsx(BoxRoot, _extends({
              as: component,
              ref: ref,
              className: clsx(className, generateClassName ? generateClassName(defaultClassName) : defaultClassName),
              theme: themeId ? theme[themeId] || theme : theme
            }, other));
          });
          return Box;
        }
        function useTheme() {
          const theme = useTheme$1(defaultTheme$1);
          return theme[THEME_ID] || theme;
        }

        // Inspired by https://github.com/material-components/material-components-ios/blob/bca36107405594d5b7b16265a5b0ed698f85a5ee/components/Elevation/src/UIColor%2BMaterialElevation.m#L61
        const getOverlayAlpha = elevation => {
          let alphaValue;
          if (elevation < 1) {
            alphaValue = 5.11916 * elevation ** 2;
          } else {
            alphaValue = 4.5 * Math.log(elevation + 1) + 2;
          }
          return (alphaValue / 100).toFixed(2);
        };
        const getOverlayAlpha$1 = getOverlayAlpha;
        const config = {
          disabled: false
        };
        const TransitionGroupContext = React.createContext(null);
        var forceReflow = exports('W', function forceReflow(node) {
          return node.scrollTop;
        });
        var UNMOUNTED = 'unmounted';
        var EXITED = 'exited';
        var ENTERING = 'entering';
        var ENTERED = 'entered';
        var EXITING = 'exiting';
        /**
         * The Transition component lets you describe a transition from one component
         * state to another _over time_ with a simple declarative API. Most commonly
         * it's used to animate the mounting and unmounting of a component, but can also
         * be used to describe in-place transition states as well.
         *
         * ---
         *
         * **Note**: `Transition` is a platform-agnostic base component. If you're using
         * transitions in CSS, you'll probably want to use
         * [`CSSTransition`](https://reactcommunity.org/react-transition-group/css-transition)
         * instead. It inherits all the features of `Transition`, but contains
         * additional features necessary to play nice with CSS transitions (hence the
         * name of the component).
         *
         * ---
         *
         * By default the `Transition` component does not alter the behavior of the
         * component it renders, it only tracks "enter" and "exit" states for the
         * components. It's up to you to give meaning and effect to those states. For
         * example we can add styles to a component when it enters or exits:
         *
         * ```jsx
         * import { Transition } from 'react-transition-group';
         *
         * const duration = 300;
         *
         * const defaultStyle = {
         *   transition: `opacity ${duration}ms ease-in-out`,
         *   opacity: 0,
         * }
         *
         * const transitionStyles = {
         *   entering: { opacity: 1 },
         *   entered:  { opacity: 1 },
         *   exiting:  { opacity: 0 },
         *   exited:  { opacity: 0 },
         * };
         *
         * const Fade = ({ in: inProp }) => (
         *   <Transition in={inProp} timeout={duration}>
         *     {state => (
         *       <div style={{
         *         ...defaultStyle,
         *         ...transitionStyles[state]
         *       }}>
         *         I'm a fade Transition!
         *       </div>
         *     )}
         *   </Transition>
         * );
         * ```
         *
         * There are 4 main states a Transition can be in:
         *  - `'entering'`
         *  - `'entered'`
         *  - `'exiting'`
         *  - `'exited'`
         *
         * Transition state is toggled via the `in` prop. When `true` the component
         * begins the "Enter" stage. During this stage, the component will shift from
         * its current transition state, to `'entering'` for the duration of the
         * transition and then to the `'entered'` stage once it's complete. Let's take
         * the following example (we'll use the
         * [useState](https://reactjs.org/docs/hooks-reference.html#usestate) hook):
         *
         * ```jsx
         * function App() {
         *   const [inProp, setInProp] = useState(false);
         *   return (
         *     <div>
         *       <Transition in={inProp} timeout={500}>
         *         {state => (
         *           // ...
         *         )}
         *       </Transition>
         *       <button onClick={() => setInProp(true)}>
         *         Click to Enter
         *       </button>
         *     </div>
         *   );
         * }
         * ```
         *
         * When the button is clicked the component will shift to the `'entering'` state
         * and stay there for 500ms (the value of `timeout`) before it finally switches
         * to `'entered'`.
         *
         * When `in` is `false` the same thing happens except the state moves from
         * `'exiting'` to `'exited'`.
         */

        var Transition = /*#__PURE__*/function (_React$Component) {
          _inheritsLoose(Transition, _React$Component);
          function Transition(props, context) {
            var _this;
            _this = _React$Component.call(this, props, context) || this;
            var parentGroup = context; // In the context of a TransitionGroup all enters are really appears

            var appear = parentGroup && !parentGroup.isMounting ? props.enter : props.appear;
            var initialStatus;
            _this.appearStatus = null;
            if (props.in) {
              if (appear) {
                initialStatus = EXITED;
                _this.appearStatus = ENTERING;
              } else {
                initialStatus = ENTERED;
              }
            } else {
              if (props.unmountOnExit || props.mountOnEnter) {
                initialStatus = UNMOUNTED;
              } else {
                initialStatus = EXITED;
              }
            }
            _this.state = {
              status: initialStatus
            };
            _this.nextCallback = null;
            return _this;
          }
          Transition.getDerivedStateFromProps = function getDerivedStateFromProps(_ref, prevState) {
            var nextIn = _ref.in;
            if (nextIn && prevState.status === UNMOUNTED) {
              return {
                status: EXITED
              };
            }
            return null;
          } // getSnapshotBeforeUpdate(prevProps) {
          //   let nextStatus = null
          //   if (prevProps !== this.props) {
          //     const { status } = this.state
          //     if (this.props.in) {
          //       if (status !== ENTERING && status !== ENTERED) {
          //         nextStatus = ENTERING
          //       }
          //     } else {
          //       if (status === ENTERING || status === ENTERED) {
          //         nextStatus = EXITING
          //       }
          //     }
          //   }
          //   return { nextStatus }
          // }
          ;

          var _proto = Transition.prototype;
          _proto.componentDidMount = function componentDidMount() {
            this.updateStatus(true, this.appearStatus);
          };
          _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
            var nextStatus = null;
            if (prevProps !== this.props) {
              var status = this.state.status;
              if (this.props.in) {
                if (status !== ENTERING && status !== ENTERED) {
                  nextStatus = ENTERING;
                }
              } else {
                if (status === ENTERING || status === ENTERED) {
                  nextStatus = EXITING;
                }
              }
            }
            this.updateStatus(false, nextStatus);
          };
          _proto.componentWillUnmount = function componentWillUnmount() {
            this.cancelNextCallback();
          };
          _proto.getTimeouts = function getTimeouts() {
            var timeout = this.props.timeout;
            var exit, enter, appear;
            exit = enter = appear = timeout;
            if (timeout != null && typeof timeout !== 'number') {
              exit = timeout.exit;
              enter = timeout.enter; // TODO: remove fallback for next major

              appear = timeout.appear !== undefined ? timeout.appear : enter;
            }
            return {
              exit: exit,
              enter: enter,
              appear: appear
            };
          };
          _proto.updateStatus = function updateStatus(mounting, nextStatus) {
            if (mounting === void 0) {
              mounting = false;
            }
            if (nextStatus !== null) {
              // nextStatus will always be ENTERING or EXITING.
              this.cancelNextCallback();
              if (nextStatus === ENTERING) {
                if (this.props.unmountOnExit || this.props.mountOnEnter) {
                  var node = this.props.nodeRef ? this.props.nodeRef.current : ReactDOM.findDOMNode(this); // https://github.com/reactjs/react-transition-group/pull/749
                  // With unmountOnExit or mountOnEnter, the enter animation should happen at the transition between `exited` and `entering`.
                  // To make the animation happen,  we have to separate each rendering and avoid being processed as batched.

                  if (node) forceReflow(node);
                }
                this.performEnter(mounting);
              } else {
                this.performExit();
              }
            } else if (this.props.unmountOnExit && this.state.status === EXITED) {
              this.setState({
                status: UNMOUNTED
              });
            }
          };
          _proto.performEnter = function performEnter(mounting) {
            var _this2 = this;
            var enter = this.props.enter;
            var appearing = this.context ? this.context.isMounting : mounting;
            var _ref2 = this.props.nodeRef ? [appearing] : [ReactDOM.findDOMNode(this), appearing],
              maybeNode = _ref2[0],
              maybeAppearing = _ref2[1];
            var timeouts = this.getTimeouts();
            var enterTimeout = appearing ? timeouts.appear : timeouts.enter; // no enter animation skip right to ENTERED
            // if we are mounting and running this it means appear _must_ be set

            if (!mounting && !enter || config.disabled) {
              this.safeSetState({
                status: ENTERED
              }, function () {
                _this2.props.onEntered(maybeNode);
              });
              return;
            }
            this.props.onEnter(maybeNode, maybeAppearing);
            this.safeSetState({
              status: ENTERING
            }, function () {
              _this2.props.onEntering(maybeNode, maybeAppearing);
              _this2.onTransitionEnd(enterTimeout, function () {
                _this2.safeSetState({
                  status: ENTERED
                }, function () {
                  _this2.props.onEntered(maybeNode, maybeAppearing);
                });
              });
            });
          };
          _proto.performExit = function performExit() {
            var _this3 = this;
            var exit = this.props.exit;
            var timeouts = this.getTimeouts();
            var maybeNode = this.props.nodeRef ? undefined : ReactDOM.findDOMNode(this); // no exit animation skip right to EXITED

            if (!exit || config.disabled) {
              this.safeSetState({
                status: EXITED
              }, function () {
                _this3.props.onExited(maybeNode);
              });
              return;
            }
            this.props.onExit(maybeNode);
            this.safeSetState({
              status: EXITING
            }, function () {
              _this3.props.onExiting(maybeNode);
              _this3.onTransitionEnd(timeouts.exit, function () {
                _this3.safeSetState({
                  status: EXITED
                }, function () {
                  _this3.props.onExited(maybeNode);
                });
              });
            });
          };
          _proto.cancelNextCallback = function cancelNextCallback() {
            if (this.nextCallback !== null) {
              this.nextCallback.cancel();
              this.nextCallback = null;
            }
          };
          _proto.safeSetState = function safeSetState(nextState, callback) {
            // This shouldn't be necessary, but there are weird race conditions with
            // setState callbacks and unmounting in testing, so always make sure that
            // we can cancel any pending setState callbacks after we unmount.
            callback = this.setNextCallback(callback);
            this.setState(nextState, callback);
          };
          _proto.setNextCallback = function setNextCallback(callback) {
            var _this4 = this;
            var active = true;
            this.nextCallback = function (event) {
              if (active) {
                active = false;
                _this4.nextCallback = null;
                callback(event);
              }
            };
            this.nextCallback.cancel = function () {
              active = false;
            };
            return this.nextCallback;
          };
          _proto.onTransitionEnd = function onTransitionEnd(timeout, handler) {
            this.setNextCallback(handler);
            var node = this.props.nodeRef ? this.props.nodeRef.current : ReactDOM.findDOMNode(this);
            var doesNotHaveTimeoutOrListener = timeout == null && !this.props.addEndListener;
            if (!node || doesNotHaveTimeoutOrListener) {
              setTimeout(this.nextCallback, 0);
              return;
            }
            if (this.props.addEndListener) {
              var _ref3 = this.props.nodeRef ? [this.nextCallback] : [node, this.nextCallback],
                maybeNode = _ref3[0],
                maybeNextCallback = _ref3[1];
              this.props.addEndListener(maybeNode, maybeNextCallback);
            }
            if (timeout != null) {
              setTimeout(this.nextCallback, timeout);
            }
          };
          _proto.render = function render() {
            var status = this.state.status;
            if (status === UNMOUNTED) {
              return null;
            }
            var _this$props = this.props,
              children = _this$props.children;
            _this$props.in;
            _this$props.mountOnEnter;
            _this$props.unmountOnExit;
            _this$props.appear;
            _this$props.enter;
            _this$props.exit;
            _this$props.timeout;
            _this$props.addEndListener;
            _this$props.onEnter;
            _this$props.onEntering;
            _this$props.onEntered;
            _this$props.onExit;
            _this$props.onExiting;
            _this$props.onExited;
            _this$props.nodeRef;
            var childProps = _objectWithoutPropertiesLoose(_this$props, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);
            return /*#__PURE__*/(
              // allows for nested Transitions
              React.createElement(TransitionGroupContext.Provider, {
                value: null
              }, typeof children === 'function' ? children(status, childProps) : React.cloneElement(React.Children.only(children), childProps))
            );
          };
          return Transition;
        }(React.Component);
        Transition.contextType = TransitionGroupContext;
        Transition.propTypes = {}; // Name the function so it is clearer in the documentation

        function noop() {}
        Transition.defaultProps = {
          in: false,
          mountOnEnter: false,
          unmountOnExit: false,
          appear: false,
          enter: true,
          exit: true,
          onEnter: noop,
          onEntering: noop,
          onEntered: noop,
          onExit: noop,
          onExiting: noop,
          onExited: noop
        };
        Transition.UNMOUNTED = UNMOUNTED;
        Transition.EXITED = EXITED;
        Transition.ENTERING = ENTERING;
        Transition.ENTERED = ENTERED;
        Transition.EXITING = EXITING;
        const Transition$1 = exports('m', Transition);

        /**
         * Given `this.props.children`, return an object mapping key to child.
         *
         * @param {*} children `this.props.children`
         * @return {object} Mapping of key to child
         */

        function getChildMapping(children, mapFn) {
          var mapper = function mapper(child) {
            return mapFn && reactExports.isValidElement(child) ? mapFn(child) : child;
          };
          var result = Object.create(null);
          if (children) reactExports.Children.map(children, function (c) {
            return c;
          }).forEach(function (child) {
            // run the map function here instead so that the key is the computed one
            result[child.key] = mapper(child);
          });
          return result;
        }
        /**
         * When you're adding or removing children some may be added or removed in the
         * same render pass. We want to show *both* since we want to simultaneously
         * animate elements in and out. This function takes a previous set of keys
         * and a new set of keys and merges them with its best guess of the correct
         * ordering. In the future we may expose some of the utilities in
         * ReactMultiChild to make this easy, but for now React itself does not
         * directly have this concept of the union of prevChildren and nextChildren
         * so we implement it here.
         *
         * @param {object} prev prev children as returned from
         * `ReactTransitionChildMapping.getChildMapping()`.
         * @param {object} next next children as returned from
         * `ReactTransitionChildMapping.getChildMapping()`.
         * @return {object} a key set that contains all keys in `prev` and all keys
         * in `next` in a reasonable order.
         */

        function mergeChildMappings(prev, next) {
          prev = prev || {};
          next = next || {};
          function getValueForKey(key) {
            return key in next ? next[key] : prev[key];
          } // For each key of `next`, the list of keys to insert before that key in
          // the combined list

          var nextKeysPending = Object.create(null);
          var pendingKeys = [];
          for (var prevKey in prev) {
            if (prevKey in next) {
              if (pendingKeys.length) {
                nextKeysPending[prevKey] = pendingKeys;
                pendingKeys = [];
              }
            } else {
              pendingKeys.push(prevKey);
            }
          }
          var i;
          var childMapping = {};
          for (var nextKey in next) {
            if (nextKeysPending[nextKey]) {
              for (i = 0; i < nextKeysPending[nextKey].length; i++) {
                var pendingNextKey = nextKeysPending[nextKey][i];
                childMapping[nextKeysPending[nextKey][i]] = getValueForKey(pendingNextKey);
              }
            }
            childMapping[nextKey] = getValueForKey(nextKey);
          } // Finally, add the keys which didn't appear before any key in `next`

          for (i = 0; i < pendingKeys.length; i++) {
            childMapping[pendingKeys[i]] = getValueForKey(pendingKeys[i]);
          }
          return childMapping;
        }
        function getProp(child, prop, props) {
          return props[prop] != null ? props[prop] : child.props[prop];
        }
        function getInitialChildMapping(props, onExited) {
          return getChildMapping(props.children, function (child) {
            return reactExports.cloneElement(child, {
              onExited: onExited.bind(null, child),
              in: true,
              appear: getProp(child, 'appear', props),
              enter: getProp(child, 'enter', props),
              exit: getProp(child, 'exit', props)
            });
          });
        }
        function getNextChildMapping(nextProps, prevChildMapping, onExited) {
          var nextChildMapping = getChildMapping(nextProps.children);
          var children = mergeChildMappings(prevChildMapping, nextChildMapping);
          Object.keys(children).forEach(function (key) {
            var child = children[key];
            if (!reactExports.isValidElement(child)) return;
            var hasPrev = (key in prevChildMapping);
            var hasNext = (key in nextChildMapping);
            var prevChild = prevChildMapping[key];
            var isLeaving = reactExports.isValidElement(prevChild) && !prevChild.props.in; // item is new (entering)

            if (hasNext && (!hasPrev || isLeaving)) {
              // console.log('entering', key)
              children[key] = reactExports.cloneElement(child, {
                onExited: onExited.bind(null, child),
                in: true,
                exit: getProp(child, 'exit', nextProps),
                enter: getProp(child, 'enter', nextProps)
              });
            } else if (!hasNext && hasPrev && !isLeaving) {
              // item is old (exiting)
              // console.log('leaving', key)
              children[key] = reactExports.cloneElement(child, {
                in: false
              });
            } else if (hasNext && hasPrev && reactExports.isValidElement(prevChild)) {
              // item hasn't changed transition states
              // copy over the last transition props;
              // console.log('unchanged', key)
              children[key] = reactExports.cloneElement(child, {
                onExited: onExited.bind(null, child),
                in: prevChild.props.in,
                exit: getProp(child, 'exit', nextProps),
                enter: getProp(child, 'enter', nextProps)
              });
            }
          });
          return children;
        }
        var values = Object.values || function (obj) {
          return Object.keys(obj).map(function (k) {
            return obj[k];
          });
        };
        var defaultProps = {
          component: 'div',
          childFactory: function childFactory(child) {
            return child;
          }
        };
        /**
         * The `<TransitionGroup>` component manages a set of transition components
         * (`<Transition>` and `<CSSTransition>`) in a list. Like with the transition
         * components, `<TransitionGroup>` is a state machine for managing the mounting
         * and unmounting of components over time.
         *
         * Consider the example below. As items are removed or added to the TodoList the
         * `in` prop is toggled automatically by the `<TransitionGroup>`.
         *
         * Note that `<TransitionGroup>`  does not define any animation behavior!
         * Exactly _how_ a list item animates is up to the individual transition
         * component. This means you can mix and match animations across different list
         * items.
         */

        var TransitionGroup = /*#__PURE__*/function (_React$Component) {
          _inheritsLoose(TransitionGroup, _React$Component);
          function TransitionGroup(props, context) {
            var _this;
            _this = _React$Component.call(this, props, context) || this;
            var handleExited = _this.handleExited.bind(_assertThisInitialized(_this)); // Initial children should all be entering, dependent on appear

            _this.state = {
              contextValue: {
                isMounting: true
              },
              handleExited: handleExited,
              firstRender: true
            };
            return _this;
          }
          var _proto = TransitionGroup.prototype;
          _proto.componentDidMount = function componentDidMount() {
            this.mounted = true;
            this.setState({
              contextValue: {
                isMounting: false
              }
            });
          };
          _proto.componentWillUnmount = function componentWillUnmount() {
            this.mounted = false;
          };
          TransitionGroup.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, _ref) {
            var prevChildMapping = _ref.children,
              handleExited = _ref.handleExited,
              firstRender = _ref.firstRender;
            return {
              children: firstRender ? getInitialChildMapping(nextProps, handleExited) : getNextChildMapping(nextProps, prevChildMapping, handleExited),
              firstRender: false
            };
          } // node is `undefined` when user provided `nodeRef` prop
          ;

          _proto.handleExited = function handleExited(child, node) {
            var currentChildMapping = getChildMapping(this.props.children);
            if (child.key in currentChildMapping) return;
            if (child.props.onExited) {
              child.props.onExited(node);
            }
            if (this.mounted) {
              this.setState(function (state) {
                var children = _extends({}, state.children);
                delete children[child.key];
                return {
                  children: children
                };
              });
            }
          };
          _proto.render = function render() {
            var _this$props = this.props,
              Component = _this$props.component,
              childFactory = _this$props.childFactory,
              props = _objectWithoutPropertiesLoose(_this$props, ["component", "childFactory"]);
            var contextValue = this.state.contextValue;
            var children = values(this.state.children).map(childFactory);
            delete props.appear;
            delete props.enter;
            delete props.exit;
            if (Component === null) {
              return /*#__PURE__*/React.createElement(TransitionGroupContext.Provider, {
                value: contextValue
              }, children);
            }
            return /*#__PURE__*/React.createElement(TransitionGroupContext.Provider, {
              value: contextValue
            }, /*#__PURE__*/React.createElement(Component, props, children));
          };
          return TransitionGroup;
        }(React.Component);
        TransitionGroup.propTypes = {};
        TransitionGroup.defaultProps = defaultProps;
        const TransitionGroup$1 = exports('Y', TransitionGroup);
        const reflow = exports('n', node => node.scrollTop);
        function getTransitionProps(props, options) {
          var _style$transitionDura, _style$transitionTimi;
          const {
            timeout,
            easing,
            style = {}
          } = props;
          return {
            duration: (_style$transitionDura = style.transitionDuration) != null ? _style$transitionDura : typeof timeout === 'number' ? timeout : timeout[options.mode] || 0,
            easing: (_style$transitionTimi = style.transitionTimingFunction) != null ? _style$transitionTimi : typeof easing === 'object' ? easing[options.mode] : easing,
            delay: style.transitionDelay
          };
        }
        function getPaperUtilityClass(slot) {
          return generateUtilityClass('MuiPaper', slot);
        }
        generateUtilityClasses('MuiPaper', ['root', 'rounded', 'outlined', 'elevation', 'elevation0', 'elevation1', 'elevation2', 'elevation3', 'elevation4', 'elevation5', 'elevation6', 'elevation7', 'elevation8', 'elevation9', 'elevation10', 'elevation11', 'elevation12', 'elevation13', 'elevation14', 'elevation15', 'elevation16', 'elevation17', 'elevation18', 'elevation19', 'elevation20', 'elevation21', 'elevation22', 'elevation23', 'elevation24']);
        const _excluded$s = ["className", "component", "elevation", "square", "variant"];
        const useUtilityClasses$m = ownerState => {
          const {
            square,
            elevation,
            variant,
            classes
          } = ownerState;
          const slots = {
            root: ['root', variant, !square && 'rounded', variant === 'elevation' && `elevation${elevation}`]
          };
          return composeClasses(slots, getPaperUtilityClass, classes);
        };
        const PaperRoot = styled$1('div', {
          name: 'MuiPaper',
          slot: 'Root',
          overridesResolver: (props, styles) => {
            const {
              ownerState
            } = props;
            return [styles.root, styles[ownerState.variant], !ownerState.square && styles.rounded, ownerState.variant === 'elevation' && styles[`elevation${ownerState.elevation}`]];
          }
        })(({
          theme,
          ownerState
        }) => {
          var _theme$vars$overlays;
          return _extends({
            backgroundColor: (theme.vars || theme).palette.background.paper,
            color: (theme.vars || theme).palette.text.primary,
            transition: theme.transitions.create('box-shadow')
          }, !ownerState.square && {
            borderRadius: theme.shape.borderRadius
          }, ownerState.variant === 'outlined' && {
            border: `1px solid ${(theme.vars || theme).palette.divider}`
          }, ownerState.variant === 'elevation' && _extends({
            boxShadow: (theme.vars || theme).shadows[ownerState.elevation]
          }, !theme.vars && theme.palette.mode === 'dark' && {
            backgroundImage: `linear-gradient(${alpha('#fff', getOverlayAlpha$1(ownerState.elevation))}, ${alpha('#fff', getOverlayAlpha$1(ownerState.elevation))})`
          }, theme.vars && {
            backgroundImage: (_theme$vars$overlays = theme.vars.overlays) == null ? void 0 : _theme$vars$overlays[ownerState.elevation]
          }));
        });
        const Paper = /*#__PURE__*/reactExports.forwardRef(function Paper(inProps, ref) {
          const props = useThemeProps({
            props: inProps,
            name: 'MuiPaper'
          });
          const {
              className,
              component = 'div',
              elevation = 1,
              square = false,
              variant = 'elevation'
            } = props,
            other = _objectWithoutPropertiesLoose(props, _excluded$s);
          const ownerState = _extends({}, props, {
            component,
            elevation,
            square,
            variant
          });
          const classes = useUtilityClasses$m(ownerState);
          return /*#__PURE__*/jsxRuntimeExports.jsx(PaperRoot, _extends({
            as: component,
            ownerState: ownerState,
            className: clsx(classes.root, className),
            ref: ref
          }, other));
        });
        const Paper$1 = exports('P', Paper);
        function Ripple(props) {
          const {
            className,
            classes,
            pulsate = false,
            rippleX,
            rippleY,
            rippleSize,
            in: inProp,
            onExited,
            timeout
          } = props;
          const [leaving, setLeaving] = reactExports.useState(false);
          const rippleClassName = clsx(className, classes.ripple, classes.rippleVisible, pulsate && classes.ripplePulsate);
          const rippleStyles = {
            width: rippleSize,
            height: rippleSize,
            top: -(rippleSize / 2) + rippleY,
            left: -(rippleSize / 2) + rippleX
          };
          const childClassName = clsx(classes.child, leaving && classes.childLeaving, pulsate && classes.childPulsate);
          if (!inProp && !leaving) {
            setLeaving(true);
          }
          reactExports.useEffect(() => {
            if (!inProp && onExited != null) {
              // react-transition-group#onExited
              const timeoutId = setTimeout(onExited, timeout);
              return () => {
                clearTimeout(timeoutId);
              };
            }
            return undefined;
          }, [onExited, inProp, timeout]);
          return /*#__PURE__*/jsxRuntimeExports.jsx("span", {
            className: rippleClassName,
            style: rippleStyles,
            children: /*#__PURE__*/jsxRuntimeExports.jsx("span", {
              className: childClassName
            })
          });
        }
        const touchRippleClasses = generateUtilityClasses('MuiTouchRipple', ['root', 'ripple', 'rippleVisible', 'ripplePulsate', 'child', 'childLeaving', 'childPulsate']);
        const touchRippleClasses$1 = touchRippleClasses;
        const _excluded$r = ["center", "classes", "className"];
        let _ = t => t,
          _t,
          _t2,
          _t3,
          _t4;
        const DURATION = 550;
        const DELAY_RIPPLE = 80;
        const enterKeyframe = keyframes(_t || (_t = _`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`));
        const exitKeyframe = keyframes(_t2 || (_t2 = _`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`));
        const pulsateKeyframe = keyframes(_t3 || (_t3 = _`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`));
        const TouchRippleRoot = styled$1('span', {
          name: 'MuiTouchRipple',
          slot: 'Root'
        })({
          overflow: 'hidden',
          pointerEvents: 'none',
          position: 'absolute',
          zIndex: 0,
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          borderRadius: 'inherit'
        });

        // This `styled()` function invokes keyframes. `styled-components` only supports keyframes
        // in string templates. Do not convert these styles in JS object as it will break.
        const TouchRippleRipple = styled$1(Ripple, {
          name: 'MuiTouchRipple',
          slot: 'Ripple'
        })(_t4 || (_t4 = _`
  opacity: 0;
  position: absolute;

  &.${0} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  &.${0} {
    animation-duration: ${0}ms;
  }

  & .${0} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${0} {
    opacity: 0;
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  & .${0} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${0};
    animation-duration: 2500ms;
    animation-timing-function: ${0};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`), touchRippleClasses$1.rippleVisible, enterKeyframe, DURATION, ({
          theme
        }) => theme.transitions.easing.easeInOut, touchRippleClasses$1.ripplePulsate, ({
          theme
        }) => theme.transitions.duration.shorter, touchRippleClasses$1.child, touchRippleClasses$1.childLeaving, exitKeyframe, DURATION, ({
          theme
        }) => theme.transitions.easing.easeInOut, touchRippleClasses$1.childPulsate, pulsateKeyframe, ({
          theme
        }) => theme.transitions.easing.easeInOut);

        /**
         * @ignore - internal component.
         *
         * TODO v5: Make private
         */
        const TouchRipple = /*#__PURE__*/reactExports.forwardRef(function TouchRipple(inProps, ref) {
          const props = useThemeProps({
            props: inProps,
            name: 'MuiTouchRipple'
          });
          const {
              center: centerProp = false,
              classes = {},
              className
            } = props,
            other = _objectWithoutPropertiesLoose(props, _excluded$r);
          const [ripples, setRipples] = reactExports.useState([]);
          const nextKey = reactExports.useRef(0);
          const rippleCallback = reactExports.useRef(null);
          reactExports.useEffect(() => {
            if (rippleCallback.current) {
              rippleCallback.current();
              rippleCallback.current = null;
            }
          }, [ripples]);

          // Used to filter out mouse emulated events on mobile.
          const ignoringMouseDown = reactExports.useRef(false);
          // We use a timer in order to only show the ripples for touch "click" like events.
          // We don't want to display the ripple for touch scroll events.
          const startTimer = reactExports.useRef(null);

          // This is the hook called once the previous timeout is ready.
          const startTimerCommit = reactExports.useRef(null);
          const container = reactExports.useRef(null);
          reactExports.useEffect(() => {
            return () => {
              clearTimeout(startTimer.current);
            };
          }, []);
          const startCommit = reactExports.useCallback(params => {
            const {
              pulsate,
              rippleX,
              rippleY,
              rippleSize,
              cb
            } = params;
            setRipples(oldRipples => [...oldRipples, /*#__PURE__*/jsxRuntimeExports.jsx(TouchRippleRipple, {
              classes: {
                ripple: clsx(classes.ripple, touchRippleClasses$1.ripple),
                rippleVisible: clsx(classes.rippleVisible, touchRippleClasses$1.rippleVisible),
                ripplePulsate: clsx(classes.ripplePulsate, touchRippleClasses$1.ripplePulsate),
                child: clsx(classes.child, touchRippleClasses$1.child),
                childLeaving: clsx(classes.childLeaving, touchRippleClasses$1.childLeaving),
                childPulsate: clsx(classes.childPulsate, touchRippleClasses$1.childPulsate)
              },
              timeout: DURATION,
              pulsate: pulsate,
              rippleX: rippleX,
              rippleY: rippleY,
              rippleSize: rippleSize
            }, nextKey.current)]);
            nextKey.current += 1;
            rippleCallback.current = cb;
          }, [classes]);
          const start = reactExports.useCallback((event = {}, options = {}, cb = () => {}) => {
            const {
              pulsate = false,
              center = centerProp || options.pulsate,
              fakeElement = false // For test purposes
            } = options;
            if ((event == null ? void 0 : event.type) === 'mousedown' && ignoringMouseDown.current) {
              ignoringMouseDown.current = false;
              return;
            }
            if ((event == null ? void 0 : event.type) === 'touchstart') {
              ignoringMouseDown.current = true;
            }
            const element = fakeElement ? null : container.current;
            const rect = element ? element.getBoundingClientRect() : {
              width: 0,
              height: 0,
              left: 0,
              top: 0
            };

            // Get the size of the ripple
            let rippleX;
            let rippleY;
            let rippleSize;
            if (center || event === undefined || event.clientX === 0 && event.clientY === 0 || !event.clientX && !event.touches) {
              rippleX = Math.round(rect.width / 2);
              rippleY = Math.round(rect.height / 2);
            } else {
              const {
                clientX,
                clientY
              } = event.touches && event.touches.length > 0 ? event.touches[0] : event;
              rippleX = Math.round(clientX - rect.left);
              rippleY = Math.round(clientY - rect.top);
            }
            if (center) {
              rippleSize = Math.sqrt((2 * rect.width ** 2 + rect.height ** 2) / 3);

              // For some reason the animation is broken on Mobile Chrome if the size is even.
              if (rippleSize % 2 === 0) {
                rippleSize += 1;
              }
            } else {
              const sizeX = Math.max(Math.abs((element ? element.clientWidth : 0) - rippleX), rippleX) * 2 + 2;
              const sizeY = Math.max(Math.abs((element ? element.clientHeight : 0) - rippleY), rippleY) * 2 + 2;
              rippleSize = Math.sqrt(sizeX ** 2 + sizeY ** 2);
            }

            // Touche devices
            if (event != null && event.touches) {
              // check that this isn't another touchstart due to multitouch
              // otherwise we will only clear a single timer when unmounting while two
              // are running
              if (startTimerCommit.current === null) {
                // Prepare the ripple effect.
                startTimerCommit.current = () => {
                  startCommit({
                    pulsate,
                    rippleX,
                    rippleY,
                    rippleSize,
                    cb
                  });
                };
                // Delay the execution of the ripple effect.
                startTimer.current = setTimeout(() => {
                  if (startTimerCommit.current) {
                    startTimerCommit.current();
                    startTimerCommit.current = null;
                  }
                }, DELAY_RIPPLE); // We have to make a tradeoff with this value.
              }
            } else {
              startCommit({
                pulsate,
                rippleX,
                rippleY,
                rippleSize,
                cb
              });
            }
          }, [centerProp, startCommit]);
          const pulsate = reactExports.useCallback(() => {
            start({}, {
              pulsate: true
            });
          }, [start]);
          const stop = reactExports.useCallback((event, cb) => {
            clearTimeout(startTimer.current);

            // The touch interaction occurs too quickly.
            // We still want to show ripple effect.
            if ((event == null ? void 0 : event.type) === 'touchend' && startTimerCommit.current) {
              startTimerCommit.current();
              startTimerCommit.current = null;
              startTimer.current = setTimeout(() => {
                stop(event, cb);
              });
              return;
            }
            startTimerCommit.current = null;
            setRipples(oldRipples => {
              if (oldRipples.length > 0) {
                return oldRipples.slice(1);
              }
              return oldRipples;
            });
            rippleCallback.current = cb;
          }, []);
          reactExports.useImperativeHandle(ref, () => ({
            pulsate,
            start,
            stop
          }), [pulsate, start, stop]);
          return /*#__PURE__*/jsxRuntimeExports.jsx(TouchRippleRoot, _extends({
            className: clsx(touchRippleClasses$1.root, classes.root, className),
            ref: container
          }, other, {
            children: /*#__PURE__*/jsxRuntimeExports.jsx(TransitionGroup$1, {
              component: null,
              exit: true,
              children: ripples
            })
          }));
        });
        const TouchRipple$1 = TouchRipple;
        function getButtonBaseUtilityClass(slot) {
          return generateUtilityClass('MuiButtonBase', slot);
        }
        const buttonBaseClasses = generateUtilityClasses('MuiButtonBase', ['root', 'disabled', 'focusVisible']);
        const buttonBaseClasses$1 = buttonBaseClasses;
        const _excluded$q = ["action", "centerRipple", "children", "className", "component", "disabled", "disableRipple", "disableTouchRipple", "focusRipple", "focusVisibleClassName", "LinkComponent", "onBlur", "onClick", "onContextMenu", "onDragLeave", "onFocus", "onFocusVisible", "onKeyDown", "onKeyUp", "onMouseDown", "onMouseLeave", "onMouseUp", "onTouchEnd", "onTouchMove", "onTouchStart", "tabIndex", "TouchRippleProps", "touchRippleRef", "type"];
        const useUtilityClasses$l = ownerState => {
          const {
            disabled,
            focusVisible,
            focusVisibleClassName,
            classes
          } = ownerState;
          const slots = {
            root: ['root', disabled && 'disabled', focusVisible && 'focusVisible']
          };
          const composedClasses = composeClasses(slots, getButtonBaseUtilityClass, classes);
          if (focusVisible && focusVisibleClassName) {
            composedClasses.root += ` ${focusVisibleClassName}`;
          }
          return composedClasses;
        };
        const ButtonBaseRoot = styled$1('button', {
          name: 'MuiButtonBase',
          slot: 'Root',
          overridesResolver: (props, styles) => styles.root
        })({
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          boxSizing: 'border-box',
          WebkitTapHighlightColor: 'transparent',
          backgroundColor: 'transparent',
          // Reset default value
          // We disable the focus ring for mouse, touch and keyboard users.
          outline: 0,
          border: 0,
          margin: 0,
          // Remove the margin in Safari
          borderRadius: 0,
          padding: 0,
          // Remove the padding in Firefox
          cursor: 'pointer',
          userSelect: 'none',
          verticalAlign: 'middle',
          MozAppearance: 'none',
          // Reset
          WebkitAppearance: 'none',
          // Reset
          textDecoration: 'none',
          // So we take precedent over the style of a native <a /> element.
          color: 'inherit',
          '&::-moz-focus-inner': {
            borderStyle: 'none' // Remove Firefox dotted outline.
          },

          [`&.${buttonBaseClasses$1.disabled}`]: {
            pointerEvents: 'none',
            // Disable link interactions
            cursor: 'default'
          },
          '@media print': {
            colorAdjust: 'exact'
          }
        });

        /**
         * `ButtonBase` contains as few styles as possible.
         * It aims to be a simple building block for creating a button.
         * It contains a load of style reset and some focus/ripple logic.
         */
        const ButtonBase = /*#__PURE__*/reactExports.forwardRef(function ButtonBase(inProps, ref) {
          const props = useThemeProps({
            props: inProps,
            name: 'MuiButtonBase'
          });
          const {
              action,
              centerRipple = false,
              children,
              className,
              component = 'button',
              disabled = false,
              disableRipple = false,
              disableTouchRipple = false,
              focusRipple = false,
              LinkComponent = 'a',
              onBlur,
              onClick,
              onContextMenu,
              onDragLeave,
              onFocus,
              onFocusVisible,
              onKeyDown,
              onKeyUp,
              onMouseDown,
              onMouseLeave,
              onMouseUp,
              onTouchEnd,
              onTouchMove,
              onTouchStart,
              tabIndex = 0,
              TouchRippleProps,
              touchRippleRef,
              type
            } = props,
            other = _objectWithoutPropertiesLoose(props, _excluded$q);
          const buttonRef = reactExports.useRef(null);
          const rippleRef = reactExports.useRef(null);
          const handleRippleRef = useForkRef(rippleRef, touchRippleRef);
          const {
            isFocusVisibleRef,
            onFocus: handleFocusVisible,
            onBlur: handleBlurVisible,
            ref: focusVisibleRef
          } = useIsFocusVisible();
          const [focusVisible, setFocusVisible] = reactExports.useState(false);
          if (disabled && focusVisible) {
            setFocusVisible(false);
          }
          reactExports.useImperativeHandle(action, () => ({
            focusVisible: () => {
              setFocusVisible(true);
              buttonRef.current.focus();
            }
          }), []);
          const [mountedState, setMountedState] = reactExports.useState(false);
          reactExports.useEffect(() => {
            setMountedState(true);
          }, []);
          const enableTouchRipple = mountedState && !disableRipple && !disabled;
          reactExports.useEffect(() => {
            if (focusVisible && focusRipple && !disableRipple && mountedState) {
              rippleRef.current.pulsate();
            }
          }, [disableRipple, focusRipple, focusVisible, mountedState]);
          function useRippleHandler(rippleAction, eventCallback, skipRippleAction = disableTouchRipple) {
            return useEventCallback(event => {
              if (eventCallback) {
                eventCallback(event);
              }
              const ignore = skipRippleAction;
              if (!ignore && rippleRef.current) {
                rippleRef.current[rippleAction](event);
              }
              return true;
            });
          }
          const handleMouseDown = useRippleHandler('start', onMouseDown);
          const handleContextMenu = useRippleHandler('stop', onContextMenu);
          const handleDragLeave = useRippleHandler('stop', onDragLeave);
          const handleMouseUp = useRippleHandler('stop', onMouseUp);
          const handleMouseLeave = useRippleHandler('stop', event => {
            if (focusVisible) {
              event.preventDefault();
            }
            if (onMouseLeave) {
              onMouseLeave(event);
            }
          });
          const handleTouchStart = useRippleHandler('start', onTouchStart);
          const handleTouchEnd = useRippleHandler('stop', onTouchEnd);
          const handleTouchMove = useRippleHandler('stop', onTouchMove);
          const handleBlur = useRippleHandler('stop', event => {
            handleBlurVisible(event);
            if (isFocusVisibleRef.current === false) {
              setFocusVisible(false);
            }
            if (onBlur) {
              onBlur(event);
            }
          }, false);
          const handleFocus = useEventCallback(event => {
            // Fix for https://github.com/facebook/react/issues/7769
            if (!buttonRef.current) {
              buttonRef.current = event.currentTarget;
            }
            handleFocusVisible(event);
            if (isFocusVisibleRef.current === true) {
              setFocusVisible(true);
              if (onFocusVisible) {
                onFocusVisible(event);
              }
            }
            if (onFocus) {
              onFocus(event);
            }
          });
          const isNonNativeButton = () => {
            const button = buttonRef.current;
            return component && component !== 'button' && !(button.tagName === 'A' && button.href);
          };

          /**
           * IE11 shim for https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/repeat
           */
          const keydownRef = reactExports.useRef(false);
          const handleKeyDown = useEventCallback(event => {
            // Check if key is already down to avoid repeats being counted as multiple activations
            if (focusRipple && !keydownRef.current && focusVisible && rippleRef.current && event.key === ' ') {
              keydownRef.current = true;
              rippleRef.current.stop(event, () => {
                rippleRef.current.start(event);
              });
            }
            if (event.target === event.currentTarget && isNonNativeButton() && event.key === ' ') {
              event.preventDefault();
            }
            if (onKeyDown) {
              onKeyDown(event);
            }

            // Keyboard accessibility for non interactive elements
            if (event.target === event.currentTarget && isNonNativeButton() && event.key === 'Enter' && !disabled) {
              event.preventDefault();
              if (onClick) {
                onClick(event);
              }
            }
          });
          const handleKeyUp = useEventCallback(event => {
            // calling preventDefault in keyUp on a <button> will not dispatch a click event if Space is pressed
            // https://codesandbox.io/s/button-keyup-preventdefault-dn7f0
            if (focusRipple && event.key === ' ' && rippleRef.current && focusVisible && !event.defaultPrevented) {
              keydownRef.current = false;
              rippleRef.current.stop(event, () => {
                rippleRef.current.pulsate(event);
              });
            }
            if (onKeyUp) {
              onKeyUp(event);
            }

            // Keyboard accessibility for non interactive elements
            if (onClick && event.target === event.currentTarget && isNonNativeButton() && event.key === ' ' && !event.defaultPrevented) {
              onClick(event);
            }
          });
          let ComponentProp = component;
          if (ComponentProp === 'button' && (other.href || other.to)) {
            ComponentProp = LinkComponent;
          }
          const buttonProps = {};
          if (ComponentProp === 'button') {
            buttonProps.type = type === undefined ? 'button' : type;
            buttonProps.disabled = disabled;
          } else {
            if (!other.href && !other.to) {
              buttonProps.role = 'button';
            }
            if (disabled) {
              buttonProps['aria-disabled'] = disabled;
            }
          }
          const handleRef = useForkRef(ref, focusVisibleRef, buttonRef);
          const ownerState = _extends({}, props, {
            centerRipple,
            component,
            disabled,
            disableRipple,
            disableTouchRipple,
            focusRipple,
            tabIndex,
            focusVisible
          });
          const classes = useUtilityClasses$l(ownerState);
          return /*#__PURE__*/jsxRuntimeExports.jsxs(ButtonBaseRoot, _extends({
            as: ComponentProp,
            className: clsx(classes.root, className),
            ownerState: ownerState,
            onBlur: handleBlur,
            onClick: onClick,
            onContextMenu: handleContextMenu,
            onFocus: handleFocus,
            onKeyDown: handleKeyDown,
            onKeyUp: handleKeyUp,
            onMouseDown: handleMouseDown,
            onMouseLeave: handleMouseLeave,
            onMouseUp: handleMouseUp,
            onDragLeave: handleDragLeave,
            onTouchEnd: handleTouchEnd,
            onTouchMove: handleTouchMove,
            onTouchStart: handleTouchStart,
            ref: handleRef,
            tabIndex: disabled ? -1 : tabIndex,
            type: type
          }, buttonProps, other, {
            children: [children, enableTouchRipple ? /*#__PURE__*/
            /* TouchRipple is only needed client-side, x2 boost on the server. */
            jsxRuntimeExports.jsx(TouchRipple$1, _extends({
              ref: handleRippleRef,
              center: centerRipple
            }, TouchRippleProps)) : null]
          }));
        });
        const ButtonBase$1 = exports('t', ButtonBase);
        function getAlertUtilityClass(slot) {
          return generateUtilityClass('MuiAlert', slot);
        }
        const alertClasses = generateUtilityClasses('MuiAlert', ['root', 'action', 'icon', 'message', 'filled', 'filledSuccess', 'filledInfo', 'filledWarning', 'filledError', 'outlined', 'outlinedSuccess', 'outlinedInfo', 'outlinedWarning', 'outlinedError', 'standard', 'standardSuccess', 'standardInfo', 'standardWarning', 'standardError']);
        const alertClasses$1 = alertClasses;
        function getIconButtonUtilityClass(slot) {
          return generateUtilityClass('MuiIconButton', slot);
        }
        const iconButtonClasses = generateUtilityClasses('MuiIconButton', ['root', 'disabled', 'colorInherit', 'colorPrimary', 'colorSecondary', 'colorError', 'colorInfo', 'colorSuccess', 'colorWarning', 'edgeStart', 'edgeEnd', 'sizeSmall', 'sizeMedium', 'sizeLarge']);
        const iconButtonClasses$1 = iconButtonClasses;
        const _excluded$p = ["edge", "children", "className", "color", "disabled", "disableFocusRipple", "size"];
        const useUtilityClasses$k = ownerState => {
          const {
            classes,
            disabled,
            color,
            edge,
            size
          } = ownerState;
          const slots = {
            root: ['root', disabled && 'disabled', color !== 'default' && `color${capitalize(color)}`, edge && `edge${capitalize(edge)}`, `size${capitalize(size)}`]
          };
          return composeClasses(slots, getIconButtonUtilityClass, classes);
        };
        const IconButtonRoot = styled$1(ButtonBase$1, {
          name: 'MuiIconButton',
          slot: 'Root',
          overridesResolver: (props, styles) => {
            const {
              ownerState
            } = props;
            return [styles.root, ownerState.color !== 'default' && styles[`color${capitalize(ownerState.color)}`], ownerState.edge && styles[`edge${capitalize(ownerState.edge)}`], styles[`size${capitalize(ownerState.size)}`]];
          }
        })(({
          theme,
          ownerState
        }) => _extends({
          textAlign: 'center',
          flex: '0 0 auto',
          fontSize: theme.typography.pxToRem(24),
          padding: 8,
          borderRadius: '50%',
          overflow: 'visible',
          // Explicitly set the default value to solve a bug on IE11.
          color: (theme.vars || theme).palette.action.active,
          transition: theme.transitions.create('background-color', {
            duration: theme.transitions.duration.shortest
          })
        }, !ownerState.disableRipple && {
          '&:hover': {
            backgroundColor: theme.vars ? `rgba(${theme.vars.palette.action.activeChannel} / ${theme.vars.palette.action.hoverOpacity})` : alpha(theme.palette.action.active, theme.palette.action.hoverOpacity),
            // Reset on touch devices, it doesn't add specificity
            '@media (hover: none)': {
              backgroundColor: 'transparent'
            }
          }
        }, ownerState.edge === 'start' && {
          marginLeft: ownerState.size === 'small' ? -3 : -12
        }, ownerState.edge === 'end' && {
          marginRight: ownerState.size === 'small' ? -3 : -12
        }), ({
          theme,
          ownerState
        }) => {
          var _palette;
          const palette = (_palette = (theme.vars || theme).palette) == null ? void 0 : _palette[ownerState.color];
          return _extends({}, ownerState.color === 'inherit' && {
            color: 'inherit'
          }, ownerState.color !== 'inherit' && ownerState.color !== 'default' && _extends({
            color: palette == null ? void 0 : palette.main
          }, !ownerState.disableRipple && {
            '&:hover': _extends({}, palette && {
              backgroundColor: theme.vars ? `rgba(${palette.mainChannel} / ${theme.vars.palette.action.hoverOpacity})` : alpha(palette.main, theme.palette.action.hoverOpacity)
            }, {
              // Reset on touch devices, it doesn't add specificity
              '@media (hover: none)': {
                backgroundColor: 'transparent'
              }
            })
          }), ownerState.size === 'small' && {
            padding: 5,
            fontSize: theme.typography.pxToRem(18)
          }, ownerState.size === 'large' && {
            padding: 12,
            fontSize: theme.typography.pxToRem(28)
          }, {
            [`&.${iconButtonClasses$1.disabled}`]: {
              backgroundColor: 'transparent',
              color: (theme.vars || theme).palette.action.disabled
            }
          });
        });

        /**
         * Refer to the [Icons](/material-ui/icons/) section of the documentation
         * regarding the available icon options.
         */
        const IconButton = /*#__PURE__*/reactExports.forwardRef(function IconButton(inProps, ref) {
          const props = useThemeProps({
            props: inProps,
            name: 'MuiIconButton'
          });
          const {
              edge = false,
              children,
              className,
              color = 'default',
              disabled = false,
              disableFocusRipple = false,
              size = 'medium'
            } = props,
            other = _objectWithoutPropertiesLoose(props, _excluded$p);
          const ownerState = _extends({}, props, {
            edge,
            color,
            disabled,
            disableFocusRipple,
            size
          });
          const classes = useUtilityClasses$k(ownerState);
          return /*#__PURE__*/jsxRuntimeExports.jsx(IconButtonRoot, _extends({
            className: clsx(classes.root, className),
            centerRipple: true,
            focusRipple: !disableFocusRipple,
            disabled: disabled,
            ref: ref,
            ownerState: ownerState
          }, other, {
            children: children
          }));
        });
        const IconButton$1 = exports('a', IconButton);
        const SuccessOutlinedIcon = createSvgIcon( /*#__PURE__*/jsxRuntimeExports.jsx("path", {
          d: "M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2, 4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0, 0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z"
        }), 'SuccessOutlined');
        const ReportProblemOutlinedIcon = createSvgIcon( /*#__PURE__*/jsxRuntimeExports.jsx("path", {
          d: "M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z"
        }), 'ReportProblemOutlined');
        const ErrorOutlineIcon = createSvgIcon( /*#__PURE__*/jsxRuntimeExports.jsx("path", {
          d: "M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
        }), 'ErrorOutline');
        const InfoOutlinedIcon = createSvgIcon( /*#__PURE__*/jsxRuntimeExports.jsx("path", {
          d: "M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20, 12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10, 10 0 0,0 12,2M11,17H13V11H11V17Z"
        }), 'InfoOutlined');
        const ClearIcon = exports('C', createSvgIcon( /*#__PURE__*/jsxRuntimeExports.jsx("path", {
          d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
        }), 'Close'));
        const _excluded$o = ["action", "children", "className", "closeText", "color", "components", "componentsProps", "icon", "iconMapping", "onClose", "role", "severity", "slotProps", "slots", "variant"];
        const useUtilityClasses$j = ownerState => {
          const {
            variant,
            color,
            severity,
            classes
          } = ownerState;
          const slots = {
            root: ['root', `${variant}${capitalize(color || severity)}`, `${variant}`],
            icon: ['icon'],
            message: ['message'],
            action: ['action']
          };
          return composeClasses(slots, getAlertUtilityClass, classes);
        };
        const AlertRoot = styled$1(Paper$1, {
          name: 'MuiAlert',
          slot: 'Root',
          overridesResolver: (props, styles) => {
            const {
              ownerState
            } = props;
            return [styles.root, styles[ownerState.variant], styles[`${ownerState.variant}${capitalize(ownerState.color || ownerState.severity)}`]];
          }
        })(({
          theme,
          ownerState
        }) => {
          const getColor = theme.palette.mode === 'light' ? darken : lighten;
          const getBackgroundColor = theme.palette.mode === 'light' ? lighten : darken;
          const color = ownerState.color || ownerState.severity;
          return _extends({}, theme.typography.body2, {
            backgroundColor: 'transparent',
            display: 'flex',
            padding: '6px 16px'
          }, color && ownerState.variant === 'standard' && {
            color: theme.vars ? theme.vars.palette.Alert[`${color}Color`] : getColor(theme.palette[color].light, 0.6),
            backgroundColor: theme.vars ? theme.vars.palette.Alert[`${color}StandardBg`] : getBackgroundColor(theme.palette[color].light, 0.9),
            [`& .${alertClasses$1.icon}`]: theme.vars ? {
              color: theme.vars.palette.Alert[`${color}IconColor`]
            } : {
              color: theme.palette[color].main
            }
          }, color && ownerState.variant === 'outlined' && {
            color: theme.vars ? theme.vars.palette.Alert[`${color}Color`] : getColor(theme.palette[color].light, 0.6),
            border: `1px solid ${(theme.vars || theme).palette[color].light}`,
            [`& .${alertClasses$1.icon}`]: theme.vars ? {
              color: theme.vars.palette.Alert[`${color}IconColor`]
            } : {
              color: theme.palette[color].main
            }
          }, color && ownerState.variant === 'filled' && _extends({
            fontWeight: theme.typography.fontWeightMedium
          }, theme.vars ? {
            color: theme.vars.palette.Alert[`${color}FilledColor`],
            backgroundColor: theme.vars.palette.Alert[`${color}FilledBg`]
          } : {
            backgroundColor: theme.palette.mode === 'dark' ? theme.palette[color].dark : theme.palette[color].main,
            color: theme.palette.getContrastText(theme.palette[color].main)
          }));
        });
        const AlertIcon = styled$1('div', {
          name: 'MuiAlert',
          slot: 'Icon',
          overridesResolver: (props, styles) => styles.icon
        })({
          marginRight: 12,
          padding: '7px 0',
          display: 'flex',
          fontSize: 22,
          opacity: 0.9
        });
        const AlertMessage = styled$1('div', {
          name: 'MuiAlert',
          slot: 'Message',
          overridesResolver: (props, styles) => styles.message
        })({
          padding: '8px 0',
          minWidth: 0,
          overflow: 'auto'
        });
        const AlertAction = styled$1('div', {
          name: 'MuiAlert',
          slot: 'Action',
          overridesResolver: (props, styles) => styles.action
        })({
          display: 'flex',
          alignItems: 'flex-start',
          padding: '4px 0 0 16px',
          marginLeft: 'auto',
          marginRight: -8
        });
        const defaultIconMapping = {
          success: /*#__PURE__*/jsxRuntimeExports.jsx(SuccessOutlinedIcon, {
            fontSize: "inherit"
          }),
          warning: /*#__PURE__*/jsxRuntimeExports.jsx(ReportProblemOutlinedIcon, {
            fontSize: "inherit"
          }),
          error: /*#__PURE__*/jsxRuntimeExports.jsx(ErrorOutlineIcon, {
            fontSize: "inherit"
          }),
          info: /*#__PURE__*/jsxRuntimeExports.jsx(InfoOutlinedIcon, {
            fontSize: "inherit"
          })
        };
        const Alert = /*#__PURE__*/reactExports.forwardRef(function Alert(inProps, ref) {
          var _ref, _slots$closeButton, _ref2, _slots$closeIcon, _slotProps$closeButto, _slotProps$closeIcon;
          const props = useThemeProps({
            props: inProps,
            name: 'MuiAlert'
          });
          const {
              action,
              children,
              className,
              closeText = 'Close',
              color,
              components = {},
              componentsProps = {},
              icon,
              iconMapping = defaultIconMapping,
              onClose,
              role = 'alert',
              severity = 'success',
              slotProps = {},
              slots = {},
              variant = 'standard'
            } = props,
            other = _objectWithoutPropertiesLoose(props, _excluded$o);
          const ownerState = _extends({}, props, {
            color,
            severity,
            variant
          });
          const classes = useUtilityClasses$j(ownerState);
          const AlertCloseButton = (_ref = (_slots$closeButton = slots.closeButton) != null ? _slots$closeButton : components.CloseButton) != null ? _ref : IconButton$1;
          const AlertCloseIcon = (_ref2 = (_slots$closeIcon = slots.closeIcon) != null ? _slots$closeIcon : components.CloseIcon) != null ? _ref2 : ClearIcon;
          const closeButtonProps = (_slotProps$closeButto = slotProps.closeButton) != null ? _slotProps$closeButto : componentsProps.closeButton;
          const closeIconProps = (_slotProps$closeIcon = slotProps.closeIcon) != null ? _slotProps$closeIcon : componentsProps.closeIcon;
          return /*#__PURE__*/jsxRuntimeExports.jsxs(AlertRoot, _extends({
            role: role,
            elevation: 0,
            ownerState: ownerState,
            className: clsx(classes.root, className),
            ref: ref
          }, other, {
            children: [icon !== false ? /*#__PURE__*/jsxRuntimeExports.jsx(AlertIcon, {
              ownerState: ownerState,
              className: classes.icon,
              children: icon || iconMapping[severity] || defaultIconMapping[severity]
            }) : null, /*#__PURE__*/jsxRuntimeExports.jsx(AlertMessage, {
              ownerState: ownerState,
              className: classes.message,
              children: children
            }), action != null ? /*#__PURE__*/jsxRuntimeExports.jsx(AlertAction, {
              ownerState: ownerState,
              className: classes.action,
              children: action
            }) : null, action == null && onClose ? /*#__PURE__*/jsxRuntimeExports.jsx(AlertAction, {
              ownerState: ownerState,
              className: classes.action,
              children: /*#__PURE__*/jsxRuntimeExports.jsx(AlertCloseButton, _extends({
                size: "small",
                "aria-label": closeText,
                title: closeText,
                color: "inherit",
                onClick: onClose
              }, closeButtonProps, {
                children: /*#__PURE__*/jsxRuntimeExports.jsx(AlertCloseIcon, _extends({
                  fontSize: "small"
                }, closeIconProps))
              }))
            }) : null]
          }));
        });
        const Alert$1 = exports('A', Alert);
        function getTypographyUtilityClass(slot) {
          return generateUtilityClass('MuiTypography', slot);
        }
        generateUtilityClasses('MuiTypography', ['root', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'subtitle1', 'subtitle2', 'body1', 'body2', 'inherit', 'button', 'caption', 'overline', 'alignLeft', 'alignRight', 'alignCenter', 'alignJustify', 'noWrap', 'gutterBottom', 'paragraph']);
        const _excluded$n = ["align", "className", "component", "gutterBottom", "noWrap", "paragraph", "variant", "variantMapping"];
        const useUtilityClasses$i = ownerState => {
          const {
            align,
            gutterBottom,
            noWrap,
            paragraph,
            variant,
            classes
          } = ownerState;
          const slots = {
            root: ['root', variant, ownerState.align !== 'inherit' && `align${capitalize(align)}`, gutterBottom && 'gutterBottom', noWrap && 'noWrap', paragraph && 'paragraph']
          };
          return composeClasses(slots, getTypographyUtilityClass, classes);
        };
        const TypographyRoot = styled$1('span', {
          name: 'MuiTypography',
          slot: 'Root',
          overridesResolver: (props, styles) => {
            const {
              ownerState
            } = props;
            return [styles.root, ownerState.variant && styles[ownerState.variant], ownerState.align !== 'inherit' && styles[`align${capitalize(ownerState.align)}`], ownerState.noWrap && styles.noWrap, ownerState.gutterBottom && styles.gutterBottom, ownerState.paragraph && styles.paragraph];
          }
        })(({
          theme,
          ownerState
        }) => _extends({
          margin: 0
        }, ownerState.variant && theme.typography[ownerState.variant], ownerState.align !== 'inherit' && {
          textAlign: ownerState.align
        }, ownerState.noWrap && {
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap'
        }, ownerState.gutterBottom && {
          marginBottom: '0.35em'
        }, ownerState.paragraph && {
          marginBottom: 16
        }));
        const defaultVariantMapping = {
          h1: 'h1',
          h2: 'h2',
          h3: 'h3',
          h4: 'h4',
          h5: 'h5',
          h6: 'h6',
          subtitle1: 'h6',
          subtitle2: 'h6',
          body1: 'p',
          body2: 'p',
          inherit: 'p'
        };

        // TODO v6: deprecate these color values in v5.x and remove the transformation in v6
        const colorTransformations = {
          primary: 'primary.main',
          textPrimary: 'text.primary',
          secondary: 'secondary.main',
          textSecondary: 'text.secondary',
          error: 'error.main'
        };
        const transformDeprecatedColors = color => {
          return colorTransformations[color] || color;
        };
        const Typography = /*#__PURE__*/reactExports.forwardRef(function Typography(inProps, ref) {
          const themeProps = useThemeProps({
            props: inProps,
            name: 'MuiTypography'
          });
          const color = transformDeprecatedColors(themeProps.color);
          const props = extendSxProp(_extends({}, themeProps, {
            color
          }));
          const {
              align = 'inherit',
              className,
              component,
              gutterBottom = false,
              noWrap = false,
              paragraph = false,
              variant = 'body1',
              variantMapping = defaultVariantMapping
            } = props,
            other = _objectWithoutPropertiesLoose(props, _excluded$n);
          const ownerState = _extends({}, props, {
            align,
            color,
            className,
            component,
            gutterBottom,
            noWrap,
            paragraph,
            variant,
            variantMapping
          });
          const Component = component || (paragraph ? 'p' : variantMapping[variant] || defaultVariantMapping[variant]) || 'span';
          const classes = useUtilityClasses$i(ownerState);
          return /*#__PURE__*/jsxRuntimeExports.jsx(TypographyRoot, _extends({
            as: Component,
            ref: ref,
            ownerState: ownerState,
            className: clsx(classes.root, className)
          }, other));
        });
        const Typography$1 = exports('T', Typography);
        function formControlState({
          props,
          states,
          muiFormControl
        }) {
          return states.reduce((acc, state) => {
            acc[state] = props[state];
            if (muiFormControl) {
              if (typeof props[state] === 'undefined') {
                acc[state] = muiFormControl[state];
              }
            }
            return acc;
          }, {});
        }

        /**
         * @ignore - internal component.
         */
        const FormControlContext = /*#__PURE__*/reactExports.createContext(undefined);
        const FormControlContext$1 = exports('a2', FormControlContext);
        function useFormControl() {
          return reactExports.useContext(FormControlContext$1);
        }
        function GlobalStyles(props) {
          return /*#__PURE__*/jsxRuntimeExports.jsx(GlobalStyles$1, _extends({}, props, {
            defaultTheme: defaultTheme$1,
            themeId: THEME_ID
          }));
        }

        // Supports determination of isControlled().
        // Controlled input accepts its current value as a prop.
        //
        // @see https://facebook.github.io/react/docs/forms.html#controlled-components
        // @param value
        // @returns {boolean} true if string (including '') or number (including zero)
        function hasValue(value) {
          return value != null && !(Array.isArray(value) && value.length === 0);
        }

        // Determine if field is empty or filled.
        // Response determines if label is presented above field or as placeholder.
        //
        // @param obj
        // @param SSR
        // @returns {boolean} False when not present or empty string.
        //                    True when any number or string with length.
        function isFilled(obj, SSR = false) {
          return obj && (hasValue(obj.value) && obj.value !== '' || SSR && hasValue(obj.defaultValue) && obj.defaultValue !== '');
        }

        // Determine if an Input is adorned on start.
        // It's corresponding to the left with LTR.
        //
        // @param obj
        // @returns {boolean} False when no adornments.
        //                    True when adorned at the start.
        function isAdornedStart(obj) {
          return obj.startAdornment;
        }
        function getInputBaseUtilityClass(slot) {
          return generateUtilityClass('MuiInputBase', slot);
        }
        const inputBaseClasses = generateUtilityClasses('MuiInputBase', ['root', 'formControl', 'focused', 'disabled', 'adornedStart', 'adornedEnd', 'error', 'sizeSmall', 'multiline', 'colorSecondary', 'fullWidth', 'hiddenLabel', 'readOnly', 'input', 'inputSizeSmall', 'inputMultiline', 'inputTypeSearch', 'inputAdornedStart', 'inputAdornedEnd', 'inputHiddenLabel']);
        const inputBaseClasses$1 = exports('x', inputBaseClasses);
        const _excluded$m = ["aria-describedby", "autoComplete", "autoFocus", "className", "color", "components", "componentsProps", "defaultValue", "disabled", "disableInjectingGlobalStyles", "endAdornment", "error", "fullWidth", "id", "inputComponent", "inputProps", "inputRef", "margin", "maxRows", "minRows", "multiline", "name", "onBlur", "onChange", "onClick", "onFocus", "onKeyDown", "onKeyUp", "placeholder", "readOnly", "renderSuffix", "rows", "size", "slotProps", "slots", "startAdornment", "type", "value"];
        const rootOverridesResolver = (props, styles) => {
          const {
            ownerState
          } = props;
          return [styles.root, ownerState.formControl && styles.formControl, ownerState.startAdornment && styles.adornedStart, ownerState.endAdornment && styles.adornedEnd, ownerState.error && styles.error, ownerState.size === 'small' && styles.sizeSmall, ownerState.multiline && styles.multiline, ownerState.color && styles[`color${capitalize(ownerState.color)}`], ownerState.fullWidth && styles.fullWidth, ownerState.hiddenLabel && styles.hiddenLabel];
        };
        const inputOverridesResolver = (props, styles) => {
          const {
            ownerState
          } = props;
          return [styles.input, ownerState.size === 'small' && styles.inputSizeSmall, ownerState.multiline && styles.inputMultiline, ownerState.type === 'search' && styles.inputTypeSearch, ownerState.startAdornment && styles.inputAdornedStart, ownerState.endAdornment && styles.inputAdornedEnd, ownerState.hiddenLabel && styles.inputHiddenLabel];
        };
        const useUtilityClasses$h = ownerState => {
          const {
            classes,
            color,
            disabled,
            error,
            endAdornment,
            focused,
            formControl,
            fullWidth,
            hiddenLabel,
            multiline,
            readOnly,
            size,
            startAdornment,
            type
          } = ownerState;
          const slots = {
            root: ['root', `color${capitalize(color)}`, disabled && 'disabled', error && 'error', fullWidth && 'fullWidth', focused && 'focused', formControl && 'formControl', size === 'small' && 'sizeSmall', multiline && 'multiline', startAdornment && 'adornedStart', endAdornment && 'adornedEnd', hiddenLabel && 'hiddenLabel', readOnly && 'readOnly'],
            input: ['input', disabled && 'disabled', type === 'search' && 'inputTypeSearch', multiline && 'inputMultiline', size === 'small' && 'inputSizeSmall', hiddenLabel && 'inputHiddenLabel', startAdornment && 'inputAdornedStart', endAdornment && 'inputAdornedEnd', readOnly && 'readOnly']
          };
          return composeClasses(slots, getInputBaseUtilityClass, classes);
        };
        const InputBaseRoot = styled$1('div', {
          name: 'MuiInputBase',
          slot: 'Root',
          overridesResolver: rootOverridesResolver
        })(({
          theme,
          ownerState
        }) => _extends({}, theme.typography.body1, {
          color: (theme.vars || theme).palette.text.primary,
          lineHeight: '1.4375em',
          // 23px
          boxSizing: 'border-box',
          // Prevent padding issue with fullWidth.
          position: 'relative',
          cursor: 'text',
          display: 'inline-flex',
          alignItems: 'center',
          [`&.${inputBaseClasses$1.disabled}`]: {
            color: (theme.vars || theme).palette.text.disabled,
            cursor: 'default'
          }
        }, ownerState.multiline && _extends({
          padding: '4px 0 5px'
        }, ownerState.size === 'small' && {
          paddingTop: 1
        }), ownerState.fullWidth && {
          width: '100%'
        }));
        const InputBaseComponent = styled$1('input', {
          name: 'MuiInputBase',
          slot: 'Input',
          overridesResolver: inputOverridesResolver
        })(({
          theme,
          ownerState
        }) => {
          const light = theme.palette.mode === 'light';
          const placeholder = _extends({
            color: 'currentColor'
          }, theme.vars ? {
            opacity: theme.vars.opacity.inputPlaceholder
          } : {
            opacity: light ? 0.42 : 0.5
          }, {
            transition: theme.transitions.create('opacity', {
              duration: theme.transitions.duration.shorter
            })
          });
          const placeholderHidden = {
            opacity: '0 !important'
          };
          const placeholderVisible = theme.vars ? {
            opacity: theme.vars.opacity.inputPlaceholder
          } : {
            opacity: light ? 0.42 : 0.5
          };
          return _extends({
            font: 'inherit',
            letterSpacing: 'inherit',
            color: 'currentColor',
            padding: '4px 0 5px',
            border: 0,
            boxSizing: 'content-box',
            background: 'none',
            height: '1.4375em',
            // Reset 23pxthe native input line-height
            margin: 0,
            // Reset for Safari
            WebkitTapHighlightColor: 'transparent',
            display: 'block',
            // Make the flex item shrink with Firefox
            minWidth: 0,
            width: '100%',
            // Fix IE11 width issue
            animationName: 'mui-auto-fill-cancel',
            animationDuration: '10ms',
            '&::-webkit-input-placeholder': placeholder,
            '&::-moz-placeholder': placeholder,
            // Firefox 19+
            '&:-ms-input-placeholder': placeholder,
            // IE11
            '&::-ms-input-placeholder': placeholder,
            // Edge
            '&:focus': {
              outline: 0
            },
            // Reset Firefox invalid required input style
            '&:invalid': {
              boxShadow: 'none'
            },
            '&::-webkit-search-decoration': {
              // Remove the padding when type=search.
              WebkitAppearance: 'none'
            },
            // Show and hide the placeholder logic
            [`label[data-shrink=false] + .${inputBaseClasses$1.formControl} &`]: {
              '&::-webkit-input-placeholder': placeholderHidden,
              '&::-moz-placeholder': placeholderHidden,
              // Firefox 19+
              '&:-ms-input-placeholder': placeholderHidden,
              // IE11
              '&::-ms-input-placeholder': placeholderHidden,
              // Edge
              '&:focus::-webkit-input-placeholder': placeholderVisible,
              '&:focus::-moz-placeholder': placeholderVisible,
              // Firefox 19+
              '&:focus:-ms-input-placeholder': placeholderVisible,
              // IE11
              '&:focus::-ms-input-placeholder': placeholderVisible // Edge
            },

            [`&.${inputBaseClasses$1.disabled}`]: {
              opacity: 1,
              // Reset iOS opacity
              WebkitTextFillColor: (theme.vars || theme).palette.text.disabled // Fix opacity Safari bug
            },

            '&:-webkit-autofill': {
              animationDuration: '5000s',
              animationName: 'mui-auto-fill'
            }
          }, ownerState.size === 'small' && {
            paddingTop: 1
          }, ownerState.multiline && {
            height: 'auto',
            resize: 'none',
            padding: 0,
            paddingTop: 0
          }, ownerState.type === 'search' && {
            // Improve type search style.
            MozAppearance: 'textfield'
          });
        });
        const inputGlobalStyles = /*#__PURE__*/jsxRuntimeExports.jsx(GlobalStyles, {
          styles: {
            '@keyframes mui-auto-fill': {
              from: {
                display: 'block'
              }
            },
            '@keyframes mui-auto-fill-cancel': {
              from: {
                display: 'block'
              }
            }
          }
        });

        /**
         * `InputBase` contains as few styles as possible.
         * It aims to be a simple building block for creating an input.
         * It contains a load of style reset and some state logic.
         */
        const InputBase = /*#__PURE__*/reactExports.forwardRef(function InputBase(inProps, ref) {
          var _slotProps$input;
          const props = useThemeProps({
            props: inProps,
            name: 'MuiInputBase'
          });
          const {
              'aria-describedby': ariaDescribedby,
              autoComplete,
              autoFocus,
              className,
              components = {},
              componentsProps = {},
              defaultValue,
              disabled,
              disableInjectingGlobalStyles,
              endAdornment,
              fullWidth = false,
              id,
              inputComponent = 'input',
              inputProps: inputPropsProp = {},
              inputRef: inputRefProp,
              maxRows,
              minRows,
              multiline = false,
              name,
              onBlur,
              onChange,
              onClick,
              onFocus,
              onKeyDown,
              onKeyUp,
              placeholder,
              readOnly,
              renderSuffix,
              rows,
              slotProps = {},
              slots = {},
              startAdornment,
              type = 'text',
              value: valueProp
            } = props,
            other = _objectWithoutPropertiesLoose(props, _excluded$m);
          const value = inputPropsProp.value != null ? inputPropsProp.value : valueProp;
          const {
            current: isControlled
          } = reactExports.useRef(value != null);
          const inputRef = reactExports.useRef();
          const handleInputRefWarning = reactExports.useCallback(instance => {}, []);
          const handleInputRef = useForkRef(inputRef, inputRefProp, inputPropsProp.ref, handleInputRefWarning);
          const [focused, setFocused] = reactExports.useState(false);
          const muiFormControl = useFormControl();
          const fcs = formControlState({
            props,
            muiFormControl,
            states: ['color', 'disabled', 'error', 'hiddenLabel', 'size', 'required', 'filled']
          });
          fcs.focused = muiFormControl ? muiFormControl.focused : focused;

          // The blur won't fire when the disabled state is set on a focused input.
          // We need to book keep the focused state manually.
          reactExports.useEffect(() => {
            if (!muiFormControl && disabled && focused) {
              setFocused(false);
              if (onBlur) {
                onBlur();
              }
            }
          }, [muiFormControl, disabled, focused, onBlur]);
          const onFilled = muiFormControl && muiFormControl.onFilled;
          const onEmpty = muiFormControl && muiFormControl.onEmpty;
          const checkDirty = reactExports.useCallback(obj => {
            if (isFilled(obj)) {
              if (onFilled) {
                onFilled();
              }
            } else if (onEmpty) {
              onEmpty();
            }
          }, [onFilled, onEmpty]);
          useEnhancedEffect(() => {
            if (isControlled) {
              checkDirty({
                value
              });
            }
          }, [value, checkDirty, isControlled]);
          const handleFocus = event => {
            // Fix a bug with IE11 where the focus/blur events are triggered
            // while the component is disabled.
            if (fcs.disabled) {
              event.stopPropagation();
              return;
            }
            if (onFocus) {
              onFocus(event);
            }
            if (inputPropsProp.onFocus) {
              inputPropsProp.onFocus(event);
            }
            if (muiFormControl && muiFormControl.onFocus) {
              muiFormControl.onFocus(event);
            } else {
              setFocused(true);
            }
          };
          const handleBlur = event => {
            if (onBlur) {
              onBlur(event);
            }
            if (inputPropsProp.onBlur) {
              inputPropsProp.onBlur(event);
            }
            if (muiFormControl && muiFormControl.onBlur) {
              muiFormControl.onBlur(event);
            } else {
              setFocused(false);
            }
          };
          const handleChange = (event, ...args) => {
            if (!isControlled) {
              const element = event.target || inputRef.current;
              if (element == null) {
                throw new Error(formatMuiErrorMessage(1));
              }
              checkDirty({
                value: element.value
              });
            }
            if (inputPropsProp.onChange) {
              inputPropsProp.onChange(event, ...args);
            }

            // Perform in the willUpdate
            if (onChange) {
              onChange(event, ...args);
            }
          };

          // Check the input state on mount, in case it was filled by the user
          // or auto filled by the browser before the hydration (for SSR).
          reactExports.useEffect(() => {
            checkDirty(inputRef.current);
            // eslint-disable-next-line react-hooks/exhaustive-deps
          }, []);
          const handleClick = event => {
            if (inputRef.current && event.currentTarget === event.target) {
              inputRef.current.focus();
            }
            if (onClick) {
              onClick(event);
            }
          };
          let InputComponent = inputComponent;
          let inputProps = inputPropsProp;
          if (multiline && InputComponent === 'input') {
            if (rows) {
              inputProps = _extends({
                type: undefined,
                minRows: rows,
                maxRows: rows
              }, inputProps);
            } else {
              inputProps = _extends({
                type: undefined,
                maxRows,
                minRows
              }, inputProps);
            }
            InputComponent = TextareaAutosize$1;
          }
          const handleAutoFill = event => {
            // Provide a fake value as Chrome might not let you access it for security reasons.
            checkDirty(event.animationName === 'mui-auto-fill-cancel' ? inputRef.current : {
              value: 'x'
            });
          };
          reactExports.useEffect(() => {
            if (muiFormControl) {
              muiFormControl.setAdornedStart(Boolean(startAdornment));
            }
          }, [muiFormControl, startAdornment]);
          const ownerState = _extends({}, props, {
            color: fcs.color || 'primary',
            disabled: fcs.disabled,
            endAdornment,
            error: fcs.error,
            focused: fcs.focused,
            formControl: muiFormControl,
            fullWidth,
            hiddenLabel: fcs.hiddenLabel,
            multiline,
            size: fcs.size,
            startAdornment,
            type
          });
          const classes = useUtilityClasses$h(ownerState);
          const Root = slots.root || components.Root || InputBaseRoot;
          const rootProps = slotProps.root || componentsProps.root || {};
          const Input = slots.input || components.Input || InputBaseComponent;
          inputProps = _extends({}, inputProps, (_slotProps$input = slotProps.input) != null ? _slotProps$input : componentsProps.input);
          return /*#__PURE__*/jsxRuntimeExports.jsxs(reactExports.Fragment, {
            children: [!disableInjectingGlobalStyles && inputGlobalStyles, /*#__PURE__*/jsxRuntimeExports.jsxs(Root, _extends({}, rootProps, !isHostComponent(Root) && {
              ownerState: _extends({}, ownerState, rootProps.ownerState)
            }, {
              ref: ref,
              onClick: handleClick
            }, other, {
              className: clsx(classes.root, rootProps.className, className, readOnly && 'MuiInputBase-readOnly'),
              children: [startAdornment, /*#__PURE__*/jsxRuntimeExports.jsx(FormControlContext$1.Provider, {
                value: null,
                children: /*#__PURE__*/jsxRuntimeExports.jsx(Input, _extends({
                  ownerState: ownerState,
                  "aria-invalid": fcs.error,
                  "aria-describedby": ariaDescribedby,
                  autoComplete: autoComplete,
                  autoFocus: autoFocus,
                  defaultValue: defaultValue,
                  disabled: fcs.disabled,
                  id: id,
                  onAnimationStart: handleAutoFill,
                  name: name,
                  placeholder: placeholder,
                  readOnly: readOnly,
                  required: fcs.required,
                  rows: rows,
                  value: value,
                  onKeyDown: onKeyDown,
                  onKeyUp: onKeyUp,
                  type: type
                }, inputProps, !isHostComponent(Input) && {
                  as: InputComponent,
                  ownerState: _extends({}, ownerState, inputProps.ownerState)
                }, {
                  ref: handleInputRef,
                  className: clsx(classes.input, inputProps.className, readOnly && 'MuiInputBase-readOnly'),
                  onBlur: handleBlur,
                  onChange: handleChange,
                  onFocus: handleFocus
                }))
              }), endAdornment, renderSuffix ? renderSuffix(_extends({}, fcs, {
                startAdornment
              })) : null]
            }))]
          });
        });
        const InputBase$1 = exports('g', InputBase);
        function getInputUtilityClass(slot) {
          return generateUtilityClass('MuiInput', slot);
        }
        const inputClasses = _extends({}, inputBaseClasses$1, generateUtilityClasses('MuiInput', ['root', 'underline', 'input']));
        const inputClasses$1 = exports('v', inputClasses);
        function getOutlinedInputUtilityClass(slot) {
          return generateUtilityClass('MuiOutlinedInput', slot);
        }
        const outlinedInputClasses = _extends({}, inputBaseClasses$1, generateUtilityClasses('MuiOutlinedInput', ['root', 'notchedOutline', 'input']));
        const outlinedInputClasses$1 = exports('y', outlinedInputClasses);
        function getFilledInputUtilityClass(slot) {
          return generateUtilityClass('MuiFilledInput', slot);
        }
        const filledInputClasses = _extends({}, inputBaseClasses$1, generateUtilityClasses('MuiFilledInput', ['root', 'underline', 'input']));
        const filledInputClasses$1 = exports('z', filledInputClasses);
        const ArrowDropDownIcon = exports('E', createSvgIcon( /*#__PURE__*/jsxRuntimeExports.jsx("path", {
          d: "M7 10l5 5 5-5z"
        }), 'ArrowDropDown'));
        const _excluded$l = ["addEndListener", "appear", "children", "easing", "in", "onEnter", "onEntered", "onEntering", "onExit", "onExited", "onExiting", "style", "timeout", "TransitionComponent"];
        const styles$1 = {
          entering: {
            opacity: 1
          },
          entered: {
            opacity: 1
          }
        };

        /**
         * The Fade transition is used by the [Modal](/material-ui/react-modal/) component.
         * It uses [react-transition-group](https://github.com/reactjs/react-transition-group) internally.
         */
        const Fade = /*#__PURE__*/reactExports.forwardRef(function Fade(props, ref) {
          const theme = useTheme();
          const defaultTimeout = {
            enter: theme.transitions.duration.enteringScreen,
            exit: theme.transitions.duration.leavingScreen
          };
          const {
              addEndListener,
              appear = true,
              children,
              easing,
              in: inProp,
              onEnter,
              onEntered,
              onEntering,
              onExit,
              onExited,
              onExiting,
              style,
              timeout = defaultTimeout,
              // eslint-disable-next-line react/prop-types
              TransitionComponent = Transition$1
            } = props,
            other = _objectWithoutPropertiesLoose(props, _excluded$l);
          const nodeRef = reactExports.useRef(null);
          const handleRef = useForkRef(nodeRef, children.ref, ref);
          const normalizedTransitionCallback = callback => maybeIsAppearing => {
            if (callback) {
              const node = nodeRef.current;

              // onEnterXxx and onExitXxx callbacks have a different arguments.length value.
              if (maybeIsAppearing === undefined) {
                callback(node);
              } else {
                callback(node, maybeIsAppearing);
              }
            }
          };
          const handleEntering = normalizedTransitionCallback(onEntering);
          const handleEnter = normalizedTransitionCallback((node, isAppearing) => {
            reflow(node); // So the animation always start from the start.

            const transitionProps = getTransitionProps({
              style,
              timeout,
              easing
            }, {
              mode: 'enter'
            });
            node.style.webkitTransition = theme.transitions.create('opacity', transitionProps);
            node.style.transition = theme.transitions.create('opacity', transitionProps);
            if (onEnter) {
              onEnter(node, isAppearing);
            }
          });
          const handleEntered = normalizedTransitionCallback(onEntered);
          const handleExiting = normalizedTransitionCallback(onExiting);
          const handleExit = normalizedTransitionCallback(node => {
            const transitionProps = getTransitionProps({
              style,
              timeout,
              easing
            }, {
              mode: 'exit'
            });
            node.style.webkitTransition = theme.transitions.create('opacity', transitionProps);
            node.style.transition = theme.transitions.create('opacity', transitionProps);
            if (onExit) {
              onExit(node);
            }
          });
          const handleExited = normalizedTransitionCallback(onExited);
          const handleAddEndListener = next => {
            if (addEndListener) {
              // Old call signature before `react-transition-group` implemented `nodeRef`
              addEndListener(nodeRef.current, next);
            }
          };
          return /*#__PURE__*/jsxRuntimeExports.jsx(TransitionComponent, _extends({
            appear: appear,
            in: inProp,
            nodeRef: nodeRef,
            onEnter: handleEnter,
            onEntered: handleEntered,
            onEntering: handleEntering,
            onExit: handleExit,
            onExited: handleExited,
            onExiting: handleExiting,
            addEndListener: handleAddEndListener,
            timeout: timeout
          }, other, {
            children: (state, childProps) => {
              return /*#__PURE__*/reactExports.cloneElement(children, _extends({
                style: _extends({
                  opacity: 0,
                  visibility: state === 'exited' && !inProp ? 'hidden' : undefined
                }, styles$1[state], style, children.props.style),
                ref: handleRef
              }, childProps));
            }
          }));
        });
        const Fade$1 = exports('Z', Fade);
        function getBackdropUtilityClass(slot) {
          return generateUtilityClass('MuiBackdrop', slot);
        }
        generateUtilityClasses('MuiBackdrop', ['root', 'invisible']);
        const _excluded$k = ["children", "className", "component", "components", "componentsProps", "invisible", "open", "slotProps", "slots", "TransitionComponent", "transitionDuration"];
        const useUtilityClasses$g = ownerState => {
          const {
            classes,
            invisible
          } = ownerState;
          const slots = {
            root: ['root', invisible && 'invisible']
          };
          return composeClasses(slots, getBackdropUtilityClass, classes);
        };
        const BackdropRoot = styled$1('div', {
          name: 'MuiBackdrop',
          slot: 'Root',
          overridesResolver: (props, styles) => {
            const {
              ownerState
            } = props;
            return [styles.root, ownerState.invisible && styles.invisible];
          }
        })(({
          ownerState
        }) => _extends({
          position: 'fixed',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          right: 0,
          bottom: 0,
          top: 0,
          left: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          WebkitTapHighlightColor: 'transparent'
        }, ownerState.invisible && {
          backgroundColor: 'transparent'
        }));
        const Backdrop = /*#__PURE__*/reactExports.forwardRef(function Backdrop(inProps, ref) {
          var _slotProps$root, _ref, _slots$root;
          const props = useThemeProps({
            props: inProps,
            name: 'MuiBackdrop'
          });
          const {
              children,
              className,
              component = 'div',
              components = {},
              componentsProps = {},
              invisible = false,
              open,
              slotProps = {},
              slots = {},
              TransitionComponent = Fade$1,
              transitionDuration
            } = props,
            other = _objectWithoutPropertiesLoose(props, _excluded$k);
          const ownerState = _extends({}, props, {
            component,
            invisible
          });
          const classes = useUtilityClasses$g(ownerState);
          const rootSlotProps = (_slotProps$root = slotProps.root) != null ? _slotProps$root : componentsProps.root;
          return /*#__PURE__*/jsxRuntimeExports.jsx(TransitionComponent, _extends({
            in: open,
            timeout: transitionDuration
          }, other, {
            children: /*#__PURE__*/jsxRuntimeExports.jsx(BackdropRoot, _extends({
              "aria-hidden": true
            }, rootSlotProps, {
              as: (_ref = (_slots$root = slots.root) != null ? _slots$root : components.Root) != null ? _ref : component,
              className: clsx(classes.root, className, rootSlotProps == null ? void 0 : rootSlotProps.className),
              ownerState: _extends({}, ownerState, rootSlotProps == null ? void 0 : rootSlotProps.ownerState),
              classes: classes,
              ref: ref,
              children: children
            }))
          }));
        });
        const Backdrop$1 = exports('e', Backdrop);
        const defaultTheme = createTheme();
        const Box = createBox({
          themeId: THEME_ID,
          defaultTheme,
          defaultClassName: 'MuiBox-root',
          generateClassName: ClassNameGenerator.generate
        });
        const Box$1 = exports('B', Box);
        function getButtonUtilityClass(slot) {
          return generateUtilityClass('MuiButton', slot);
        }
        const buttonClasses = generateUtilityClasses('MuiButton', ['root', 'text', 'textInherit', 'textPrimary', 'textSecondary', 'textSuccess', 'textError', 'textInfo', 'textWarning', 'outlined', 'outlinedInherit', 'outlinedPrimary', 'outlinedSecondary', 'outlinedSuccess', 'outlinedError', 'outlinedInfo', 'outlinedWarning', 'contained', 'containedInherit', 'containedPrimary', 'containedSecondary', 'containedSuccess', 'containedError', 'containedInfo', 'containedWarning', 'disableElevation', 'focusVisible', 'disabled', 'colorInherit', 'textSizeSmall', 'textSizeMedium', 'textSizeLarge', 'outlinedSizeSmall', 'outlinedSizeMedium', 'outlinedSizeLarge', 'containedSizeSmall', 'containedSizeMedium', 'containedSizeLarge', 'sizeMedium', 'sizeSmall', 'sizeLarge', 'fullWidth', 'startIcon', 'endIcon', 'iconSizeSmall', 'iconSizeMedium', 'iconSizeLarge']);
        const buttonClasses$1 = buttonClasses;

        /**
         * @ignore - internal component.
         */
        const ButtonGroupContext = /*#__PURE__*/reactExports.createContext({});
        const ButtonGroupContext$1 = exports('F', ButtonGroupContext);
        const _excluded$j = ["children", "color", "component", "className", "disabled", "disableElevation", "disableFocusRipple", "endIcon", "focusVisibleClassName", "fullWidth", "size", "startIcon", "type", "variant"];
        const useUtilityClasses$f = ownerState => {
          const {
            color,
            disableElevation,
            fullWidth,
            size,
            variant,
            classes
          } = ownerState;
          const slots = {
            root: ['root', variant, `${variant}${capitalize(color)}`, `size${capitalize(size)}`, `${variant}Size${capitalize(size)}`, color === 'inherit' && 'colorInherit', disableElevation && 'disableElevation', fullWidth && 'fullWidth'],
            label: ['label'],
            startIcon: ['startIcon', `iconSize${capitalize(size)}`],
            endIcon: ['endIcon', `iconSize${capitalize(size)}`]
          };
          const composedClasses = composeClasses(slots, getButtonUtilityClass, classes);
          return _extends({}, classes, composedClasses);
        };
        const commonIconStyles = ownerState => _extends({}, ownerState.size === 'small' && {
          '& > *:nth-of-type(1)': {
            fontSize: 18
          }
        }, ownerState.size === 'medium' && {
          '& > *:nth-of-type(1)': {
            fontSize: 20
          }
        }, ownerState.size === 'large' && {
          '& > *:nth-of-type(1)': {
            fontSize: 22
          }
        });
        const ButtonRoot = styled$1(ButtonBase$1, {
          shouldForwardProp: prop => rootShouldForwardProp(prop) || prop === 'classes',
          name: 'MuiButton',
          slot: 'Root',
          overridesResolver: (props, styles) => {
            const {
              ownerState
            } = props;
            return [styles.root, styles[ownerState.variant], styles[`${ownerState.variant}${capitalize(ownerState.color)}`], styles[`size${capitalize(ownerState.size)}`], styles[`${ownerState.variant}Size${capitalize(ownerState.size)}`], ownerState.color === 'inherit' && styles.colorInherit, ownerState.disableElevation && styles.disableElevation, ownerState.fullWidth && styles.fullWidth];
          }
        })(({
          theme,
          ownerState
        }) => {
          var _theme$palette$getCon, _theme$palette;
          const inheritContainedBackgroundColor = theme.palette.mode === 'light' ? theme.palette.grey[300] : theme.palette.grey[800];
          const inheritContainedHoverBackgroundColor = theme.palette.mode === 'light' ? theme.palette.grey.A100 : theme.palette.grey[700];
          return _extends({}, theme.typography.button, {
            minWidth: 64,
            padding: '6px 16px',
            borderRadius: (theme.vars || theme).shape.borderRadius,
            transition: theme.transitions.create(['background-color', 'box-shadow', 'border-color', 'color'], {
              duration: theme.transitions.duration.short
            }),
            '&:hover': _extends({
              textDecoration: 'none',
              backgroundColor: theme.vars ? `rgba(${theme.vars.palette.text.primaryChannel} / ${theme.vars.palette.action.hoverOpacity})` : alpha(theme.palette.text.primary, theme.palette.action.hoverOpacity),
              // Reset on touch devices, it doesn't add specificity
              '@media (hover: none)': {
                backgroundColor: 'transparent'
              }
            }, ownerState.variant === 'text' && ownerState.color !== 'inherit' && {
              backgroundColor: theme.vars ? `rgba(${theme.vars.palette[ownerState.color].mainChannel} / ${theme.vars.palette.action.hoverOpacity})` : alpha(theme.palette[ownerState.color].main, theme.palette.action.hoverOpacity),
              // Reset on touch devices, it doesn't add specificity
              '@media (hover: none)': {
                backgroundColor: 'transparent'
              }
            }, ownerState.variant === 'outlined' && ownerState.color !== 'inherit' && {
              border: `1px solid ${(theme.vars || theme).palette[ownerState.color].main}`,
              backgroundColor: theme.vars ? `rgba(${theme.vars.palette[ownerState.color].mainChannel} / ${theme.vars.palette.action.hoverOpacity})` : alpha(theme.palette[ownerState.color].main, theme.palette.action.hoverOpacity),
              // Reset on touch devices, it doesn't add specificity
              '@media (hover: none)': {
                backgroundColor: 'transparent'
              }
            }, ownerState.variant === 'contained' && {
              backgroundColor: theme.vars ? theme.vars.palette.Button.inheritContainedHoverBg : inheritContainedHoverBackgroundColor,
              boxShadow: (theme.vars || theme).shadows[4],
              // Reset on touch devices, it doesn't add specificity
              '@media (hover: none)': {
                boxShadow: (theme.vars || theme).shadows[2],
                backgroundColor: (theme.vars || theme).palette.grey[300]
              }
            }, ownerState.variant === 'contained' && ownerState.color !== 'inherit' && {
              backgroundColor: (theme.vars || theme).palette[ownerState.color].dark,
              // Reset on touch devices, it doesn't add specificity
              '@media (hover: none)': {
                backgroundColor: (theme.vars || theme).palette[ownerState.color].main
              }
            }),
            '&:active': _extends({}, ownerState.variant === 'contained' && {
              boxShadow: (theme.vars || theme).shadows[8]
            }),
            [`&.${buttonClasses$1.focusVisible}`]: _extends({}, ownerState.variant === 'contained' && {
              boxShadow: (theme.vars || theme).shadows[6]
            }),
            [`&.${buttonClasses$1.disabled}`]: _extends({
              color: (theme.vars || theme).palette.action.disabled
            }, ownerState.variant === 'outlined' && {
              border: `1px solid ${(theme.vars || theme).palette.action.disabledBackground}`
            }, ownerState.variant === 'contained' && {
              color: (theme.vars || theme).palette.action.disabled,
              boxShadow: (theme.vars || theme).shadows[0],
              backgroundColor: (theme.vars || theme).palette.action.disabledBackground
            })
          }, ownerState.variant === 'text' && {
            padding: '6px 8px'
          }, ownerState.variant === 'text' && ownerState.color !== 'inherit' && {
            color: (theme.vars || theme).palette[ownerState.color].main
          }, ownerState.variant === 'outlined' && {
            padding: '5px 15px',
            border: '1px solid currentColor'
          }, ownerState.variant === 'outlined' && ownerState.color !== 'inherit' && {
            color: (theme.vars || theme).palette[ownerState.color].main,
            border: theme.vars ? `1px solid rgba(${theme.vars.palette[ownerState.color].mainChannel} / 0.5)` : `1px solid ${alpha(theme.palette[ownerState.color].main, 0.5)}`
          }, ownerState.variant === 'contained' && {
            color: theme.vars ?
            // this is safe because grey does not change between default light/dark mode
            theme.vars.palette.text.primary : (_theme$palette$getCon = (_theme$palette = theme.palette).getContrastText) == null ? void 0 : _theme$palette$getCon.call(_theme$palette, theme.palette.grey[300]),
            backgroundColor: theme.vars ? theme.vars.palette.Button.inheritContainedBg : inheritContainedBackgroundColor,
            boxShadow: (theme.vars || theme).shadows[2]
          }, ownerState.variant === 'contained' && ownerState.color !== 'inherit' && {
            color: (theme.vars || theme).palette[ownerState.color].contrastText,
            backgroundColor: (theme.vars || theme).palette[ownerState.color].main
          }, ownerState.color === 'inherit' && {
            color: 'inherit',
            borderColor: 'currentColor'
          }, ownerState.size === 'small' && ownerState.variant === 'text' && {
            padding: '4px 5px',
            fontSize: theme.typography.pxToRem(13)
          }, ownerState.size === 'large' && ownerState.variant === 'text' && {
            padding: '8px 11px',
            fontSize: theme.typography.pxToRem(15)
          }, ownerState.size === 'small' && ownerState.variant === 'outlined' && {
            padding: '3px 9px',
            fontSize: theme.typography.pxToRem(13)
          }, ownerState.size === 'large' && ownerState.variant === 'outlined' && {
            padding: '7px 21px',
            fontSize: theme.typography.pxToRem(15)
          }, ownerState.size === 'small' && ownerState.variant === 'contained' && {
            padding: '4px 10px',
            fontSize: theme.typography.pxToRem(13)
          }, ownerState.size === 'large' && ownerState.variant === 'contained' && {
            padding: '8px 22px',
            fontSize: theme.typography.pxToRem(15)
          }, ownerState.fullWidth && {
            width: '100%'
          });
        }, ({
          ownerState
        }) => ownerState.disableElevation && {
          boxShadow: 'none',
          '&:hover': {
            boxShadow: 'none'
          },
          [`&.${buttonClasses$1.focusVisible}`]: {
            boxShadow: 'none'
          },
          '&:active': {
            boxShadow: 'none'
          },
          [`&.${buttonClasses$1.disabled}`]: {
            boxShadow: 'none'
          }
        });
        const ButtonStartIcon = styled$1('span', {
          name: 'MuiButton',
          slot: 'StartIcon',
          overridesResolver: (props, styles) => {
            const {
              ownerState
            } = props;
            return [styles.startIcon, styles[`iconSize${capitalize(ownerState.size)}`]];
          }
        })(({
          ownerState
        }) => _extends({
          display: 'inherit',
          marginRight: 8,
          marginLeft: -4
        }, ownerState.size === 'small' && {
          marginLeft: -2
        }, commonIconStyles(ownerState)));
        const ButtonEndIcon = styled$1('span', {
          name: 'MuiButton',
          slot: 'EndIcon',
          overridesResolver: (props, styles) => {
            const {
              ownerState
            } = props;
            return [styles.endIcon, styles[`iconSize${capitalize(ownerState.size)}`]];
          }
        })(({
          ownerState
        }) => _extends({
          display: 'inherit',
          marginRight: -4,
          marginLeft: 8
        }, ownerState.size === 'small' && {
          marginRight: -2
        }, commonIconStyles(ownerState)));
        const Button = /*#__PURE__*/reactExports.forwardRef(function Button(inProps, ref) {
          // props priority: `inProps` > `contextProps` > `themeDefaultProps`
          const contextProps = reactExports.useContext(ButtonGroupContext$1);
          const resolvedProps = resolveProps(contextProps, inProps);
          const props = useThemeProps({
            props: resolvedProps,
            name: 'MuiButton'
          });
          const {
              children,
              color = 'primary',
              component = 'button',
              className,
              disabled = false,
              disableElevation = false,
              disableFocusRipple = false,
              endIcon: endIconProp,
              focusVisibleClassName,
              fullWidth = false,
              size = 'medium',
              startIcon: startIconProp,
              type,
              variant = 'text'
            } = props,
            other = _objectWithoutPropertiesLoose(props, _excluded$j);
          const ownerState = _extends({}, props, {
            color,
            component,
            disabled,
            disableElevation,
            disableFocusRipple,
            fullWidth,
            size,
            type,
            variant
          });
          const classes = useUtilityClasses$f(ownerState);
          const startIcon = startIconProp && /*#__PURE__*/jsxRuntimeExports.jsx(ButtonStartIcon, {
            className: classes.startIcon,
            ownerState: ownerState,
            children: startIconProp
          });
          const endIcon = endIconProp && /*#__PURE__*/jsxRuntimeExports.jsx(ButtonEndIcon, {
            className: classes.endIcon,
            ownerState: ownerState,
            children: endIconProp
          });
          return /*#__PURE__*/jsxRuntimeExports.jsxs(ButtonRoot, _extends({
            ownerState: ownerState,
            className: clsx(contextProps.className, classes.root, className),
            component: component,
            disabled: disabled,
            focusRipple: !disableFocusRipple,
            focusVisibleClassName: clsx(classes.focusVisible, focusVisibleClassName),
            ref: ref,
            type: type
          }, other, {
            classes: classes,
            children: [startIcon, children, endIcon]
          }));
        });
        const Button$1 = exports('b', Button);
        const _excluded$i = ["BackdropComponent", "BackdropProps", "classes", "className", "closeAfterTransition", "children", "container", "component", "components", "componentsProps", "disableAutoFocus", "disableEnforceFocus", "disableEscapeKeyDown", "disablePortal", "disableRestoreFocus", "disableScrollLock", "hideBackdrop", "keepMounted", "onBackdropClick", "onClose", "open", "slotProps", "slots", "theme"];
        const ModalRoot = styled$1('div', {
          name: 'MuiModal',
          slot: 'Root',
          overridesResolver: (props, styles) => {
            const {
              ownerState
            } = props;
            return [styles.root, !ownerState.open && ownerState.exited && styles.hidden];
          }
        })(({
          theme,
          ownerState
        }) => _extends({
          position: 'fixed',
          zIndex: (theme.vars || theme).zIndex.modal,
          right: 0,
          bottom: 0,
          top: 0,
          left: 0
        }, !ownerState.open && ownerState.exited && {
          visibility: 'hidden'
        }));
        const ModalBackdrop = styled$1(Backdrop$1, {
          name: 'MuiModal',
          slot: 'Backdrop',
          overridesResolver: (props, styles) => {
            return styles.backdrop;
          }
        })({
          zIndex: -1
        });

        /**
         * Modal is a lower-level construct that is leveraged by the following components:
         *
         * - [Dialog](/material-ui/api/dialog/)
         * - [Drawer](/material-ui/api/drawer/)
         * - [Menu](/material-ui/api/menu/)
         * - [Popover](/material-ui/api/popover/)
         *
         * If you are creating a modal dialog, you probably want to use the [Dialog](/material-ui/api/dialog/) component
         * rather than directly using Modal.
         *
         * This component shares many concepts with [react-overlays](https://react-bootstrap.github.io/react-overlays/#modals).
         */
        const Modal = /*#__PURE__*/reactExports.forwardRef(function Modal(inProps, ref) {
          var _ref, _slots$root, _ref2, _slots$backdrop, _slotProps$root, _slotProps$backdrop;
          const props = useThemeProps({
            name: 'MuiModal',
            props: inProps
          });
          const {
              BackdropComponent = ModalBackdrop,
              BackdropProps,
              classes,
              className,
              closeAfterTransition = false,
              children,
              container,
              component,
              components = {},
              componentsProps = {},
              disableAutoFocus = false,
              disableEnforceFocus = false,
              disableEscapeKeyDown = false,
              disablePortal = false,
              disableRestoreFocus = false,
              disableScrollLock = false,
              hideBackdrop = false,
              keepMounted = false,
              onBackdropClick,
              onClose,
              open,
              slotProps,
              slots,
              // eslint-disable-next-line react/prop-types
              theme
            } = props,
            other = _objectWithoutPropertiesLoose(props, _excluded$i);
          const [exited, setExited] = reactExports.useState(true);
          const commonProps = {
            container,
            closeAfterTransition,
            disableAutoFocus,
            disableEnforceFocus,
            disableEscapeKeyDown,
            disablePortal,
            disableRestoreFocus,
            disableScrollLock,
            hideBackdrop,
            keepMounted,
            onBackdropClick,
            onClose,
            open
          };
          const ownerState = _extends({}, props, commonProps, {
            exited
          });
          const RootSlot = (_ref = (_slots$root = slots == null ? void 0 : slots.root) != null ? _slots$root : components.Root) != null ? _ref : ModalRoot;
          const BackdropSlot = (_ref2 = (_slots$backdrop = slots == null ? void 0 : slots.backdrop) != null ? _slots$backdrop : components.Backdrop) != null ? _ref2 : BackdropComponent;
          const rootSlotProps = (_slotProps$root = slotProps == null ? void 0 : slotProps.root) != null ? _slotProps$root : componentsProps.root;
          const backdropSlotProps = (_slotProps$backdrop = slotProps == null ? void 0 : slotProps.backdrop) != null ? _slotProps$backdrop : componentsProps.backdrop;
          return /*#__PURE__*/jsxRuntimeExports.jsx(ModalUnstyled, _extends({
            slots: {
              root: RootSlot,
              backdrop: BackdropSlot
            },
            slotProps: {
              root: () => _extends({}, resolveComponentProps(rootSlotProps, ownerState), !isHostComponent(RootSlot) && {
                as: component,
                theme
              }, {
                className: clsx(className, rootSlotProps == null ? void 0 : rootSlotProps.className, classes == null ? void 0 : classes.root, !ownerState.open && ownerState.exited && (classes == null ? void 0 : classes.hidden))
              }),
              backdrop: () => _extends({}, BackdropProps, resolveComponentProps(backdropSlotProps, ownerState), {
                className: clsx(backdropSlotProps == null ? void 0 : backdropSlotProps.className, classes == null ? void 0 : classes.backdrop)
              })
            },
            onTransitionEnter: () => setExited(false),
            onTransitionExited: () => setExited(true),
            ref: ref
          }, other, commonProps, {
            children: children
          }));
        });
        const Modal$1 = exports('M', Modal);
        function getDialogUtilityClass(slot) {
          return generateUtilityClass('MuiDialog', slot);
        }
        const dialogClasses = generateUtilityClasses('MuiDialog', ['root', 'scrollPaper', 'scrollBody', 'container', 'paper', 'paperScrollPaper', 'paperScrollBody', 'paperWidthFalse', 'paperWidthXs', 'paperWidthSm', 'paperWidthMd', 'paperWidthLg', 'paperWidthXl', 'paperFullWidth', 'paperFullScreen']);
        const dialogClasses$1 = exports('$', dialogClasses);
        const DialogContext = /*#__PURE__*/reactExports.createContext({});
        const DialogContext$1 = exports('Q', DialogContext);
        const _excluded$h = ["aria-describedby", "aria-labelledby", "BackdropComponent", "BackdropProps", "children", "className", "disableEscapeKeyDown", "fullScreen", "fullWidth", "maxWidth", "onBackdropClick", "onClose", "open", "PaperComponent", "PaperProps", "scroll", "TransitionComponent", "transitionDuration", "TransitionProps"];
        const DialogBackdrop = styled$1(Backdrop$1, {
          name: 'MuiDialog',
          slot: 'Backdrop',
          overrides: (props, styles) => styles.backdrop
        })({
          // Improve scrollable dialog support.
          zIndex: -1
        });
        const useUtilityClasses$e = ownerState => {
          const {
            classes,
            scroll,
            maxWidth,
            fullWidth,
            fullScreen
          } = ownerState;
          const slots = {
            root: ['root'],
            container: ['container', `scroll${capitalize(scroll)}`],
            paper: ['paper', `paperScroll${capitalize(scroll)}`, `paperWidth${capitalize(String(maxWidth))}`, fullWidth && 'paperFullWidth', fullScreen && 'paperFullScreen']
          };
          return composeClasses(slots, getDialogUtilityClass, classes);
        };
        const DialogRoot = styled$1(Modal$1, {
          name: 'MuiDialog',
          slot: 'Root',
          overridesResolver: (props, styles) => styles.root
        })({
          '@media print': {
            // Use !important to override the Modal inline-style.
            position: 'absolute !important'
          }
        });
        const DialogContainer = styled$1('div', {
          name: 'MuiDialog',
          slot: 'Container',
          overridesResolver: (props, styles) => {
            const {
              ownerState
            } = props;
            return [styles.container, styles[`scroll${capitalize(ownerState.scroll)}`]];
          }
        })(({
          ownerState
        }) => _extends({
          height: '100%',
          '@media print': {
            height: 'auto'
          },
          // We disable the focus ring for mouse, touch and keyboard users.
          outline: 0
        }, ownerState.scroll === 'paper' && {
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }, ownerState.scroll === 'body' && {
          overflowY: 'auto',
          overflowX: 'hidden',
          textAlign: 'center',
          '&:after': {
            content: '""',
            display: 'inline-block',
            verticalAlign: 'middle',
            height: '100%',
            width: '0'
          }
        }));
        const DialogPaper = styled$1(Paper$1, {
          name: 'MuiDialog',
          slot: 'Paper',
          overridesResolver: (props, styles) => {
            const {
              ownerState
            } = props;
            return [styles.paper, styles[`scrollPaper${capitalize(ownerState.scroll)}`], styles[`paperWidth${capitalize(String(ownerState.maxWidth))}`], ownerState.fullWidth && styles.paperFullWidth, ownerState.fullScreen && styles.paperFullScreen];
          }
        })(({
          theme,
          ownerState
        }) => _extends({
          margin: 32,
          position: 'relative',
          overflowY: 'auto',
          // Fix IE11 issue, to remove at some point.
          '@media print': {
            overflowY: 'visible',
            boxShadow: 'none'
          }
        }, ownerState.scroll === 'paper' && {
          display: 'flex',
          flexDirection: 'column',
          maxHeight: 'calc(100% - 64px)'
        }, ownerState.scroll === 'body' && {
          display: 'inline-block',
          verticalAlign: 'middle',
          textAlign: 'left' // 'initial' doesn't work on IE11
        }, !ownerState.maxWidth && {
          maxWidth: 'calc(100% - 64px)'
        }, ownerState.maxWidth === 'xs' && {
          maxWidth: theme.breakpoints.unit === 'px' ? Math.max(theme.breakpoints.values.xs, 444) : `${theme.breakpoints.values.xs}${theme.breakpoints.unit}`,
          [`&.${dialogClasses$1.paperScrollBody}`]: {
            [theme.breakpoints.down(Math.max(theme.breakpoints.values.xs, 444) + 32 * 2)]: {
              maxWidth: 'calc(100% - 64px)'
            }
          }
        }, ownerState.maxWidth && ownerState.maxWidth !== 'xs' && {
          maxWidth: `${theme.breakpoints.values[ownerState.maxWidth]}${theme.breakpoints.unit}`,
          [`&.${dialogClasses$1.paperScrollBody}`]: {
            [theme.breakpoints.down(theme.breakpoints.values[ownerState.maxWidth] + 32 * 2)]: {
              maxWidth: 'calc(100% - 64px)'
            }
          }
        }, ownerState.fullWidth && {
          width: 'calc(100% - 64px)'
        }, ownerState.fullScreen && {
          margin: 0,
          width: '100%',
          maxWidth: '100%',
          height: '100%',
          maxHeight: 'none',
          borderRadius: 0,
          [`&.${dialogClasses$1.paperScrollBody}`]: {
            margin: 0,
            maxWidth: '100%'
          }
        }));

        /**
         * Dialogs are overlaid modal paper based components with a backdrop.
         */
        const Dialog = /*#__PURE__*/reactExports.forwardRef(function Dialog(inProps, ref) {
          const props = useThemeProps({
            props: inProps,
            name: 'MuiDialog'
          });
          const theme = useTheme();
          const defaultTransitionDuration = {
            enter: theme.transitions.duration.enteringScreen,
            exit: theme.transitions.duration.leavingScreen
          };
          const {
              'aria-describedby': ariaDescribedby,
              'aria-labelledby': ariaLabelledbyProp,
              BackdropComponent,
              BackdropProps,
              children,
              className,
              disableEscapeKeyDown = false,
              fullScreen = false,
              fullWidth = false,
              maxWidth = 'sm',
              onBackdropClick,
              onClose,
              open,
              PaperComponent = Paper$1,
              PaperProps = {},
              scroll = 'paper',
              TransitionComponent = Fade$1,
              transitionDuration = defaultTransitionDuration,
              TransitionProps
            } = props,
            other = _objectWithoutPropertiesLoose(props, _excluded$h);
          const ownerState = _extends({}, props, {
            disableEscapeKeyDown,
            fullScreen,
            fullWidth,
            maxWidth,
            scroll
          });
          const classes = useUtilityClasses$e(ownerState);
          const backdropClick = reactExports.useRef();
          const handleMouseDown = event => {
            // We don't want to close the dialog when clicking the dialog content.
            // Make sure the event starts and ends on the same DOM element.
            backdropClick.current = event.target === event.currentTarget;
          };
          const handleBackdropClick = event => {
            // Ignore the events not coming from the "backdrop".
            if (!backdropClick.current) {
              return;
            }
            backdropClick.current = null;
            if (onBackdropClick) {
              onBackdropClick(event);
            }
            if (onClose) {
              onClose(event, 'backdropClick');
            }
          };
          const ariaLabelledby = useId(ariaLabelledbyProp);
          const dialogContextValue = reactExports.useMemo(() => {
            return {
              titleId: ariaLabelledby
            };
          }, [ariaLabelledby]);
          return /*#__PURE__*/jsxRuntimeExports.jsx(DialogRoot, _extends({
            className: clsx(classes.root, className),
            closeAfterTransition: true,
            components: {
              Backdrop: DialogBackdrop
            },
            componentsProps: {
              backdrop: _extends({
                transitionDuration,
                as: BackdropComponent
              }, BackdropProps)
            },
            disableEscapeKeyDown: disableEscapeKeyDown,
            onClose: onClose,
            open: open,
            ref: ref,
            onClick: handleBackdropClick,
            ownerState: ownerState
          }, other, {
            children: /*#__PURE__*/jsxRuntimeExports.jsx(TransitionComponent, _extends({
              appear: true,
              in: open,
              timeout: transitionDuration,
              role: "presentation"
            }, TransitionProps, {
              children: /*#__PURE__*/jsxRuntimeExports.jsx(DialogContainer, {
                className: clsx(classes.container),
                onMouseDown: handleMouseDown,
                ownerState: ownerState,
                children: /*#__PURE__*/jsxRuntimeExports.jsx(DialogPaper, _extends({
                  as: PaperComponent,
                  elevation: 24,
                  role: "dialog",
                  "aria-describedby": ariaDescribedby,
                  "aria-labelledby": ariaLabelledby
                }, PaperProps, {
                  className: clsx(classes.paper, PaperProps.className),
                  ownerState: ownerState,
                  children: /*#__PURE__*/jsxRuntimeExports.jsx(DialogContext$1.Provider, {
                    value: dialogContextValue,
                    children: children
                  })
                }))
              })
            }))
          }));
        });
        const Dialog$1 = exports('D', Dialog);
        function getDialogActionsUtilityClass(slot) {
          return generateUtilityClass('MuiDialogActions', slot);
        }
        generateUtilityClasses('MuiDialogActions', ['root', 'spacing']);
        const _excluded$g = ["className", "disableSpacing"];
        const useUtilityClasses$d = ownerState => {
          const {
            classes,
            disableSpacing
          } = ownerState;
          const slots = {
            root: ['root', !disableSpacing && 'spacing']
          };
          return composeClasses(slots, getDialogActionsUtilityClass, classes);
        };
        const DialogActionsRoot = styled$1('div', {
          name: 'MuiDialogActions',
          slot: 'Root',
          overridesResolver: (props, styles) => {
            const {
              ownerState
            } = props;
            return [styles.root, !ownerState.disableSpacing && styles.spacing];
          }
        })(({
          ownerState
        }) => _extends({
          display: 'flex',
          alignItems: 'center',
          padding: 8,
          justifyContent: 'flex-end',
          flex: '0 0 auto'
        }, !ownerState.disableSpacing && {
          '& > :not(:first-of-type)': {
            marginLeft: 8
          }
        }));
        const DialogActions = /*#__PURE__*/reactExports.forwardRef(function DialogActions(inProps, ref) {
          const props = useThemeProps({
            props: inProps,
            name: 'MuiDialogActions'
          });
          const {
              className,
              disableSpacing = false
            } = props,
            other = _objectWithoutPropertiesLoose(props, _excluded$g);
          const ownerState = _extends({}, props, {
            disableSpacing
          });
          const classes = useUtilityClasses$d(ownerState);
          return /*#__PURE__*/jsxRuntimeExports.jsx(DialogActionsRoot, _extends({
            className: clsx(classes.root, className),
            ownerState: ownerState,
            ref: ref
          }, other));
        });
        const DialogActions$1 = exports('k', DialogActions);
        function getDialogContentUtilityClass(slot) {
          return generateUtilityClass('MuiDialogContent', slot);
        }
        generateUtilityClasses('MuiDialogContent', ['root', 'dividers']);
        function getDialogTitleUtilityClass(slot) {
          return generateUtilityClass('MuiDialogTitle', slot);
        }
        const dialogTitleClasses = generateUtilityClasses('MuiDialogTitle', ['root']);
        const dialogTitleClasses$1 = dialogTitleClasses;
        const _excluded$f = ["className", "dividers"];
        const useUtilityClasses$c = ownerState => {
          const {
            classes,
            dividers
          } = ownerState;
          const slots = {
            root: ['root', dividers && 'dividers']
          };
          return composeClasses(slots, getDialogContentUtilityClass, classes);
        };
        const DialogContentRoot = styled$1('div', {
          name: 'MuiDialogContent',
          slot: 'Root',
          overridesResolver: (props, styles) => {
            const {
              ownerState
            } = props;
            return [styles.root, ownerState.dividers && styles.dividers];
          }
        })(({
          theme,
          ownerState
        }) => _extends({
          flex: '1 1 auto',
          // Add iOS momentum scrolling for iOS < 13.0
          WebkitOverflowScrolling: 'touch',
          overflowY: 'auto',
          padding: '20px 24px'
        }, ownerState.dividers ? {
          padding: '16px 24px',
          borderTop: `1px solid ${(theme.vars || theme).palette.divider}`,
          borderBottom: `1px solid ${(theme.vars || theme).palette.divider}`
        } : {
          [`.${dialogTitleClasses$1.root} + &`]: {
            paddingTop: 0
          }
        }));
        const DialogContent = /*#__PURE__*/reactExports.forwardRef(function DialogContent(inProps, ref) {
          const props = useThemeProps({
            props: inProps,
            name: 'MuiDialogContent'
          });
          const {
              className,
              dividers = false
            } = props,
            other = _objectWithoutPropertiesLoose(props, _excluded$f);
          const ownerState = _extends({}, props, {
            dividers
          });
          const classes = useUtilityClasses$c(ownerState);
          return /*#__PURE__*/jsxRuntimeExports.jsx(DialogContentRoot, _extends({
            className: clsx(classes.root, className),
            ownerState: ownerState,
            ref: ref
          }, other));
        });
        const DialogContent$1 = exports('j', DialogContent);
        const dividerClasses = generateUtilityClasses('MuiDivider', ['root', 'absolute', 'fullWidth', 'inset', 'middle', 'flexItem', 'light', 'vertical', 'withChildren', 'withChildrenVertical', 'textAlignRight', 'textAlignLeft', 'wrapper', 'wrapperVertical']);
        const dividerClasses$1 = dividerClasses;
        const _excluded$e = ["disableUnderline", "components", "componentsProps", "fullWidth", "hiddenLabel", "inputComponent", "multiline", "slotProps", "slots", "type"];
        const useUtilityClasses$b = ownerState => {
          const {
            classes,
            disableUnderline
          } = ownerState;
          const slots = {
            root: ['root', !disableUnderline && 'underline'],
            input: ['input']
          };
          const composedClasses = composeClasses(slots, getFilledInputUtilityClass, classes);
          return _extends({}, classes, composedClasses);
        };
        const FilledInputRoot = styled$1(InputBaseRoot, {
          shouldForwardProp: prop => rootShouldForwardProp(prop) || prop === 'classes',
          name: 'MuiFilledInput',
          slot: 'Root',
          overridesResolver: (props, styles) => {
            const {
              ownerState
            } = props;
            return [...rootOverridesResolver(props, styles), !ownerState.disableUnderline && styles.underline];
          }
        })(({
          theme,
          ownerState
        }) => {
          var _palette;
          const light = theme.palette.mode === 'light';
          const bottomLineColor = light ? 'rgba(0, 0, 0, 0.42)' : 'rgba(255, 255, 255, 0.7)';
          const backgroundColor = light ? 'rgba(0, 0, 0, 0.06)' : 'rgba(255, 255, 255, 0.09)';
          const hoverBackground = light ? 'rgba(0, 0, 0, 0.09)' : 'rgba(255, 255, 255, 0.13)';
          const disabledBackground = light ? 'rgba(0, 0, 0, 0.12)' : 'rgba(255, 255, 255, 0.12)';
          return _extends({
            position: 'relative',
            backgroundColor: theme.vars ? theme.vars.palette.FilledInput.bg : backgroundColor,
            borderTopLeftRadius: (theme.vars || theme).shape.borderRadius,
            borderTopRightRadius: (theme.vars || theme).shape.borderRadius,
            transition: theme.transitions.create('background-color', {
              duration: theme.transitions.duration.shorter,
              easing: theme.transitions.easing.easeOut
            }),
            '&:hover': {
              backgroundColor: theme.vars ? theme.vars.palette.FilledInput.hoverBg : hoverBackground,
              // Reset on touch devices, it doesn't add specificity
              '@media (hover: none)': {
                backgroundColor: theme.vars ? theme.vars.palette.FilledInput.bg : backgroundColor
              }
            },
            [`&.${filledInputClasses$1.focused}`]: {
              backgroundColor: theme.vars ? theme.vars.palette.FilledInput.bg : backgroundColor
            },
            [`&.${filledInputClasses$1.disabled}`]: {
              backgroundColor: theme.vars ? theme.vars.palette.FilledInput.disabledBg : disabledBackground
            }
          }, !ownerState.disableUnderline && {
            '&:after': {
              borderBottom: `2px solid ${(_palette = (theme.vars || theme).palette[ownerState.color || 'primary']) == null ? void 0 : _palette.main}`,
              left: 0,
              bottom: 0,
              // Doing the other way around crash on IE11 "''" https://github.com/cssinjs/jss/issues/242
              content: '""',
              position: 'absolute',
              right: 0,
              transform: 'scaleX(0)',
              transition: theme.transitions.create('transform', {
                duration: theme.transitions.duration.shorter,
                easing: theme.transitions.easing.easeOut
              }),
              pointerEvents: 'none' // Transparent to the hover style.
            },

            [`&.${filledInputClasses$1.focused}:after`]: {
              // translateX(0) is a workaround for Safari transform scale bug
              // See https://github.com/mui/material-ui/issues/31766
              transform: 'scaleX(1) translateX(0)'
            },
            [`&.${filledInputClasses$1.error}`]: {
              '&:before, &:after': {
                borderBottomColor: (theme.vars || theme).palette.error.main
              }
            },
            '&:before': {
              borderBottom: `1px solid ${theme.vars ? `rgba(${theme.vars.palette.common.onBackgroundChannel} / ${theme.vars.opacity.inputUnderline})` : bottomLineColor}`,
              left: 0,
              bottom: 0,
              // Doing the other way around crash on IE11 "''" https://github.com/cssinjs/jss/issues/242
              content: '"\\00a0"',
              position: 'absolute',
              right: 0,
              transition: theme.transitions.create('border-bottom-color', {
                duration: theme.transitions.duration.shorter
              }),
              pointerEvents: 'none' // Transparent to the hover style.
            },

            [`&:hover:not(.${filledInputClasses$1.disabled}, .${filledInputClasses$1.error}):before`]: {
              borderBottom: `1px solid ${(theme.vars || theme).palette.text.primary}`
            },
            [`&.${filledInputClasses$1.disabled}:before`]: {
              borderBottomStyle: 'dotted'
            }
          }, ownerState.startAdornment && {
            paddingLeft: 12
          }, ownerState.endAdornment && {
            paddingRight: 12
          }, ownerState.multiline && _extends({
            padding: '25px 12px 8px'
          }, ownerState.size === 'small' && {
            paddingTop: 21,
            paddingBottom: 4
          }, ownerState.hiddenLabel && {
            paddingTop: 16,
            paddingBottom: 17
          }));
        });
        const FilledInputInput = styled$1(InputBaseComponent, {
          name: 'MuiFilledInput',
          slot: 'Input',
          overridesResolver: inputOverridesResolver
        })(({
          theme,
          ownerState
        }) => _extends({
          paddingTop: 25,
          paddingRight: 12,
          paddingBottom: 8,
          paddingLeft: 12
        }, !theme.vars && {
          '&:-webkit-autofill': {
            WebkitBoxShadow: theme.palette.mode === 'light' ? null : '0 0 0 100px #266798 inset',
            WebkitTextFillColor: theme.palette.mode === 'light' ? null : '#fff',
            caretColor: theme.palette.mode === 'light' ? null : '#fff',
            borderTopLeftRadius: 'inherit',
            borderTopRightRadius: 'inherit'
          }
        }, theme.vars && {
          '&:-webkit-autofill': {
            borderTopLeftRadius: 'inherit',
            borderTopRightRadius: 'inherit'
          },
          [theme.getColorSchemeSelector('dark')]: {
            '&:-webkit-autofill': {
              WebkitBoxShadow: '0 0 0 100px #266798 inset',
              WebkitTextFillColor: '#fff',
              caretColor: '#fff'
            }
          }
        }, ownerState.size === 'small' && {
          paddingTop: 21,
          paddingBottom: 4
        }, ownerState.hiddenLabel && {
          paddingTop: 16,
          paddingBottom: 17
        }, ownerState.multiline && {
          paddingTop: 0,
          paddingBottom: 0,
          paddingLeft: 0,
          paddingRight: 0
        }, ownerState.startAdornment && {
          paddingLeft: 0
        }, ownerState.endAdornment && {
          paddingRight: 0
        }, ownerState.hiddenLabel && ownerState.size === 'small' && {
          paddingTop: 8,
          paddingBottom: 9
        }));
        const FilledInput = /*#__PURE__*/reactExports.forwardRef(function FilledInput(inProps, ref) {
          var _ref, _slots$root, _ref2, _slots$input;
          const props = useThemeProps({
            props: inProps,
            name: 'MuiFilledInput'
          });
          const {
              components = {},
              componentsProps: componentsPropsProp,
              fullWidth = false,
              // declare here to prevent spreading to DOM
              inputComponent = 'input',
              multiline = false,
              slotProps,
              slots = {},
              type = 'text'
            } = props,
            other = _objectWithoutPropertiesLoose(props, _excluded$e);
          const ownerState = _extends({}, props, {
            fullWidth,
            inputComponent,
            multiline,
            type
          });
          const classes = useUtilityClasses$b(props);
          const filledInputComponentsProps = {
            root: {
              ownerState
            },
            input: {
              ownerState
            }
          };
          const componentsProps = (slotProps != null ? slotProps : componentsPropsProp) ? deepmerge(slotProps != null ? slotProps : componentsPropsProp, filledInputComponentsProps) : filledInputComponentsProps;
          const RootSlot = (_ref = (_slots$root = slots.root) != null ? _slots$root : components.Root) != null ? _ref : FilledInputRoot;
          const InputSlot = (_ref2 = (_slots$input = slots.input) != null ? _slots$input : components.Input) != null ? _ref2 : FilledInputInput;
          return /*#__PURE__*/jsxRuntimeExports.jsx(InputBase$1, _extends({
            slots: {
              root: RootSlot,
              input: InputSlot
            },
            componentsProps: componentsProps,
            fullWidth: fullWidth,
            inputComponent: inputComponent,
            multiline: multiline,
            ref: ref,
            type: type
          }, other, {
            classes: classes
          }));
        });
        FilledInput.muiName = 'Input';
        const FilledInput$1 = exports('a3', FilledInput);
        const _excluded$d = ["addEndListener", "appear", "children", "easing", "in", "onEnter", "onEntered", "onEntering", "onExit", "onExited", "onExiting", "style", "timeout", "TransitionComponent"];
        function getScale(value) {
          return `scale(${value}, ${value ** 2})`;
        }
        const styles = {
          entering: {
            opacity: 1,
            transform: getScale(1)
          },
          entered: {
            opacity: 1,
            transform: 'none'
          }
        };

        /*
         TODO v6: remove
         Conditionally apply a workaround for the CSS transition bug in Safari 15.4 / WebKit browsers.
         */
        const isWebKit154 = typeof navigator !== 'undefined' && /^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent) && /(os |version\/)15(.|_)4/i.test(navigator.userAgent);

        /**
         * The Grow transition is used by the [Tooltip](/material-ui/react-tooltip/) and
         * [Popover](/material-ui/react-popover/) components.
         * It uses [react-transition-group](https://github.com/reactjs/react-transition-group) internally.
         */
        const Grow = /*#__PURE__*/reactExports.forwardRef(function Grow(props, ref) {
          const {
              addEndListener,
              appear = true,
              children,
              easing,
              in: inProp,
              onEnter,
              onEntered,
              onEntering,
              onExit,
              onExited,
              onExiting,
              style,
              timeout = 'auto',
              // eslint-disable-next-line react/prop-types
              TransitionComponent = Transition$1
            } = props,
            other = _objectWithoutPropertiesLoose(props, _excluded$d);
          const timer = reactExports.useRef();
          const autoTimeout = reactExports.useRef();
          const theme = useTheme();
          const nodeRef = reactExports.useRef(null);
          const handleRef = useForkRef(nodeRef, children.ref, ref);
          const normalizedTransitionCallback = callback => maybeIsAppearing => {
            if (callback) {
              const node = nodeRef.current;

              // onEnterXxx and onExitXxx callbacks have a different arguments.length value.
              if (maybeIsAppearing === undefined) {
                callback(node);
              } else {
                callback(node, maybeIsAppearing);
              }
            }
          };
          const handleEntering = normalizedTransitionCallback(onEntering);
          const handleEnter = normalizedTransitionCallback((node, isAppearing) => {
            reflow(node); // So the animation always start from the start.

            const {
              duration: transitionDuration,
              delay,
              easing: transitionTimingFunction
            } = getTransitionProps({
              style,
              timeout,
              easing
            }, {
              mode: 'enter'
            });
            let duration;
            if (timeout === 'auto') {
              duration = theme.transitions.getAutoHeightDuration(node.clientHeight);
              autoTimeout.current = duration;
            } else {
              duration = transitionDuration;
            }
            node.style.transition = [theme.transitions.create('opacity', {
              duration,
              delay
            }), theme.transitions.create('transform', {
              duration: isWebKit154 ? duration : duration * 0.666,
              delay,
              easing: transitionTimingFunction
            })].join(',');
            if (onEnter) {
              onEnter(node, isAppearing);
            }
          });
          const handleEntered = normalizedTransitionCallback(onEntered);
          const handleExiting = normalizedTransitionCallback(onExiting);
          const handleExit = normalizedTransitionCallback(node => {
            const {
              duration: transitionDuration,
              delay,
              easing: transitionTimingFunction
            } = getTransitionProps({
              style,
              timeout,
              easing
            }, {
              mode: 'exit'
            });
            let duration;
            if (timeout === 'auto') {
              duration = theme.transitions.getAutoHeightDuration(node.clientHeight);
              autoTimeout.current = duration;
            } else {
              duration = transitionDuration;
            }
            node.style.transition = [theme.transitions.create('opacity', {
              duration,
              delay
            }), theme.transitions.create('transform', {
              duration: isWebKit154 ? duration : duration * 0.666,
              delay: isWebKit154 ? delay : delay || duration * 0.333,
              easing: transitionTimingFunction
            })].join(',');
            node.style.opacity = 0;
            node.style.transform = getScale(0.75);
            if (onExit) {
              onExit(node);
            }
          });
          const handleExited = normalizedTransitionCallback(onExited);
          const handleAddEndListener = next => {
            if (timeout === 'auto') {
              timer.current = setTimeout(next, autoTimeout.current || 0);
            }
            if (addEndListener) {
              // Old call signature before `react-transition-group` implemented `nodeRef`
              addEndListener(nodeRef.current, next);
            }
          };
          reactExports.useEffect(() => {
            return () => {
              clearTimeout(timer.current);
            };
          }, []);
          return /*#__PURE__*/jsxRuntimeExports.jsx(TransitionComponent, _extends({
            appear: appear,
            in: inProp,
            nodeRef: nodeRef,
            onEnter: handleEnter,
            onEntered: handleEntered,
            onEntering: handleEntering,
            onExit: handleExit,
            onExited: handleExited,
            onExiting: handleExiting,
            addEndListener: handleAddEndListener,
            timeout: timeout === 'auto' ? null : timeout
          }, other, {
            children: (state, childProps) => {
              return /*#__PURE__*/reactExports.cloneElement(children, _extends({
                style: _extends({
                  opacity: 0,
                  transform: getScale(0.75),
                  visibility: state === 'exited' && !inProp ? 'hidden' : undefined
                }, styles[state], style, children.props.style),
                ref: handleRef
              }, childProps));
            }
          }));
        });
        Grow.muiSupportAuto = true;
        const Grow$1 = exports('K', Grow);
        const _excluded$c = ["disableUnderline", "components", "componentsProps", "fullWidth", "inputComponent", "multiline", "slotProps", "slots", "type"];
        const useUtilityClasses$a = ownerState => {
          const {
            classes,
            disableUnderline
          } = ownerState;
          const slots = {
            root: ['root', !disableUnderline && 'underline'],
            input: ['input']
          };
          const composedClasses = composeClasses(slots, getInputUtilityClass, classes);
          return _extends({}, classes, composedClasses);
        };
        const InputRoot = styled$1(InputBaseRoot, {
          shouldForwardProp: prop => rootShouldForwardProp(prop) || prop === 'classes',
          name: 'MuiInput',
          slot: 'Root',
          overridesResolver: (props, styles) => {
            const {
              ownerState
            } = props;
            return [...rootOverridesResolver(props, styles), !ownerState.disableUnderline && styles.underline];
          }
        })(({
          theme,
          ownerState
        }) => {
          const light = theme.palette.mode === 'light';
          let bottomLineColor = light ? 'rgba(0, 0, 0, 0.42)' : 'rgba(255, 255, 255, 0.7)';
          if (theme.vars) {
            bottomLineColor = `rgba(${theme.vars.palette.common.onBackgroundChannel} / ${theme.vars.opacity.inputUnderline})`;
          }
          return _extends({
            position: 'relative'
          }, ownerState.formControl && {
            'label + &': {
              marginTop: 16
            }
          }, !ownerState.disableUnderline && {
            '&:after': {
              borderBottom: `2px solid ${(theme.vars || theme).palette[ownerState.color].main}`,
              left: 0,
              bottom: 0,
              // Doing the other way around crash on IE11 "''" https://github.com/cssinjs/jss/issues/242
              content: '""',
              position: 'absolute',
              right: 0,
              transform: 'scaleX(0)',
              transition: theme.transitions.create('transform', {
                duration: theme.transitions.duration.shorter,
                easing: theme.transitions.easing.easeOut
              }),
              pointerEvents: 'none' // Transparent to the hover style.
            },

            [`&.${inputClasses$1.focused}:after`]: {
              // translateX(0) is a workaround for Safari transform scale bug
              // See https://github.com/mui/material-ui/issues/31766
              transform: 'scaleX(1) translateX(0)'
            },
            [`&.${inputClasses$1.error}`]: {
              '&:before, &:after': {
                borderBottomColor: (theme.vars || theme).palette.error.main
              }
            },
            '&:before': {
              borderBottom: `1px solid ${bottomLineColor}`,
              left: 0,
              bottom: 0,
              // Doing the other way around crash on IE11 "''" https://github.com/cssinjs/jss/issues/242
              content: '"\\00a0"',
              position: 'absolute',
              right: 0,
              transition: theme.transitions.create('border-bottom-color', {
                duration: theme.transitions.duration.shorter
              }),
              pointerEvents: 'none' // Transparent to the hover style.
            },

            [`&:hover:not(.${inputClasses$1.disabled}, .${inputClasses$1.error}):before`]: {
              borderBottom: `2px solid ${(theme.vars || theme).palette.text.primary}`,
              // Reset on touch devices, it doesn't add specificity
              '@media (hover: none)': {
                borderBottom: `1px solid ${bottomLineColor}`
              }
            },
            [`&.${inputClasses$1.disabled}:before`]: {
              borderBottomStyle: 'dotted'
            }
          });
        });
        const InputInput = styled$1(InputBaseComponent, {
          name: 'MuiInput',
          slot: 'Input',
          overridesResolver: inputOverridesResolver
        })({});
        const Input = /*#__PURE__*/reactExports.forwardRef(function Input(inProps, ref) {
          var _ref, _slots$root, _ref2, _slots$input;
          const props = useThemeProps({
            props: inProps,
            name: 'MuiInput'
          });
          const {
              disableUnderline,
              components = {},
              componentsProps: componentsPropsProp,
              fullWidth = false,
              inputComponent = 'input',
              multiline = false,
              slotProps,
              slots = {},
              type = 'text'
            } = props,
            other = _objectWithoutPropertiesLoose(props, _excluded$c);
          const classes = useUtilityClasses$a(props);
          const ownerState = {
            disableUnderline
          };
          const inputComponentsProps = {
            root: {
              ownerState
            }
          };
          const componentsProps = (slotProps != null ? slotProps : componentsPropsProp) ? deepmerge(slotProps != null ? slotProps : componentsPropsProp, inputComponentsProps) : inputComponentsProps;
          const RootSlot = (_ref = (_slots$root = slots.root) != null ? _slots$root : components.Root) != null ? _ref : InputRoot;
          const InputSlot = (_ref2 = (_slots$input = slots.input) != null ? _slots$input : components.Input) != null ? _ref2 : InputInput;
          return /*#__PURE__*/jsxRuntimeExports.jsx(InputBase$1, _extends({
            slots: {
              root: RootSlot,
              input: InputSlot
            },
            slotProps: componentsProps,
            fullWidth: fullWidth,
            inputComponent: inputComponent,
            multiline: multiline,
            ref: ref,
            type: type
          }, other, {
            classes: classes
          }));
        });
        Input.muiName = 'Input';
        const Input$1 = exports('I', Input);

        /**
         * @ignore - internal component.
         */
        const ListContext = /*#__PURE__*/reactExports.createContext({});
        const ListContext$1 = exports('L', ListContext);
        function getListUtilityClass(slot) {
          return generateUtilityClass('MuiList', slot);
        }
        generateUtilityClasses('MuiList', ['root', 'padding', 'dense', 'subheader']);
        const _excluded$b = ["children", "className", "component", "dense", "disablePadding", "subheader"];
        const useUtilityClasses$9 = ownerState => {
          const {
            classes,
            disablePadding,
            dense,
            subheader
          } = ownerState;
          const slots = {
            root: ['root', !disablePadding && 'padding', dense && 'dense', subheader && 'subheader']
          };
          return composeClasses(slots, getListUtilityClass, classes);
        };
        const ListRoot = styled$1('ul', {
          name: 'MuiList',
          slot: 'Root',
          overridesResolver: (props, styles) => {
            const {
              ownerState
            } = props;
            return [styles.root, !ownerState.disablePadding && styles.padding, ownerState.dense && styles.dense, ownerState.subheader && styles.subheader];
          }
        })(({
          ownerState
        }) => _extends({
          listStyle: 'none',
          margin: 0,
          padding: 0,
          position: 'relative'
        }, !ownerState.disablePadding && {
          paddingTop: 8,
          paddingBottom: 8
        }, ownerState.subheader && {
          paddingTop: 0
        }));
        const List = /*#__PURE__*/reactExports.forwardRef(function List(inProps, ref) {
          const props = useThemeProps({
            props: inProps,
            name: 'MuiList'
          });
          const {
              children,
              className,
              component = 'ul',
              dense = false,
              disablePadding = false,
              subheader
            } = props,
            other = _objectWithoutPropertiesLoose(props, _excluded$b);
          const context = reactExports.useMemo(() => ({
            dense
          }), [dense]);
          const ownerState = _extends({}, props, {
            component,
            dense,
            disablePadding
          });
          const classes = useUtilityClasses$9(ownerState);
          return /*#__PURE__*/jsxRuntimeExports.jsx(ListContext$1.Provider, {
            value: context,
            children: /*#__PURE__*/jsxRuntimeExports.jsxs(ListRoot, _extends({
              as: component,
              className: clsx(classes.root, className),
              ref: ref,
              ownerState: ownerState
            }, other, {
              children: [subheader, children]
            }))
          });
        });
        const List$1 = List;
        const listItemIconClasses = generateUtilityClasses('MuiListItemIcon', ['root', 'alignItemsFlexStart']);
        const listItemIconClasses$1 = listItemIconClasses;
        function getListItemTextUtilityClass(slot) {
          return generateUtilityClass('MuiListItemText', slot);
        }
        const listItemTextClasses = generateUtilityClasses('MuiListItemText', ['root', 'multiline', 'dense', 'inset', 'primary', 'secondary']);
        const listItemTextClasses$1 = exports('G', listItemTextClasses);
        const _excluded$a = ["actions", "autoFocus", "autoFocusItem", "children", "className", "disabledItemsFocusable", "disableListWrap", "onKeyDown", "variant"];
        function nextItem(list, item, disableListWrap) {
          if (list === item) {
            return list.firstChild;
          }
          if (item && item.nextElementSibling) {
            return item.nextElementSibling;
          }
          return disableListWrap ? null : list.firstChild;
        }
        function previousItem(list, item, disableListWrap) {
          if (list === item) {
            return disableListWrap ? list.firstChild : list.lastChild;
          }
          if (item && item.previousElementSibling) {
            return item.previousElementSibling;
          }
          return disableListWrap ? null : list.lastChild;
        }
        function textCriteriaMatches(nextFocus, textCriteria) {
          if (textCriteria === undefined) {
            return true;
          }
          let text = nextFocus.innerText;
          if (text === undefined) {
            // jsdom doesn't support innerText
            text = nextFocus.textContent;
          }
          text = text.trim().toLowerCase();
          if (text.length === 0) {
            return false;
          }
          if (textCriteria.repeating) {
            return text[0] === textCriteria.keys[0];
          }
          return text.indexOf(textCriteria.keys.join('')) === 0;
        }
        function moveFocus(list, currentFocus, disableListWrap, disabledItemsFocusable, traversalFunction, textCriteria) {
          let wrappedOnce = false;
          let nextFocus = traversalFunction(list, currentFocus, currentFocus ? disableListWrap : false);
          while (nextFocus) {
            // Prevent infinite loop.
            if (nextFocus === list.firstChild) {
              if (wrappedOnce) {
                return false;
              }
              wrappedOnce = true;
            }

            // Same logic as useAutocomplete.js
            const nextFocusDisabled = disabledItemsFocusable ? false : nextFocus.disabled || nextFocus.getAttribute('aria-disabled') === 'true';
            if (!nextFocus.hasAttribute('tabindex') || !textCriteriaMatches(nextFocus, textCriteria) || nextFocusDisabled) {
              // Move to the next element.
              nextFocus = traversalFunction(list, nextFocus, disableListWrap);
            } else {
              nextFocus.focus();
              return true;
            }
          }
          return false;
        }

        /**
         * A permanently displayed menu following https://www.w3.org/WAI/ARIA/apg/patterns/menu-button/.
         * It's exposed to help customization of the [`Menu`](/material-ui/api/menu/) component if you
         * use it separately you need to move focus into the component manually. Once
         * the focus is placed inside the component it is fully keyboard accessible.
         */
        const MenuList = /*#__PURE__*/reactExports.forwardRef(function MenuList(props, ref) {
          const {
              // private
              // eslint-disable-next-line react/prop-types
              actions,
              autoFocus = false,
              autoFocusItem = false,
              children,
              className,
              disabledItemsFocusable = false,
              disableListWrap = false,
              onKeyDown,
              variant = 'selectedMenu'
            } = props,
            other = _objectWithoutPropertiesLoose(props, _excluded$a);
          const listRef = reactExports.useRef(null);
          const textCriteriaRef = reactExports.useRef({
            keys: [],
            repeating: true,
            previousKeyMatched: true,
            lastTime: null
          });
          useEnhancedEffect(() => {
            if (autoFocus) {
              listRef.current.focus();
            }
          }, [autoFocus]);
          reactExports.useImperativeHandle(actions, () => ({
            adjustStyleForScrollbar: (containerElement, theme) => {
              // Let's ignore that piece of logic if users are already overriding the width
              // of the menu.
              const noExplicitWidth = !listRef.current.style.width;
              if (containerElement.clientHeight < listRef.current.clientHeight && noExplicitWidth) {
                const scrollbarSize = `${getScrollbarSize(ownerDocument(containerElement))}px`;
                listRef.current.style[theme.direction === 'rtl' ? 'paddingLeft' : 'paddingRight'] = scrollbarSize;
                listRef.current.style.width = `calc(100% + ${scrollbarSize})`;
              }
              return listRef.current;
            }
          }), []);
          const handleKeyDown = event => {
            const list = listRef.current;
            const key = event.key;
            /**
             * @type {Element} - will always be defined since we are in a keydown handler
             * attached to an element. A keydown event is either dispatched to the activeElement
             * or document.body or document.documentElement. Only the first case will
             * trigger this specific handler.
             */
            const currentFocus = ownerDocument(list).activeElement;
            if (key === 'ArrowDown') {
              // Prevent scroll of the page
              event.preventDefault();
              moveFocus(list, currentFocus, disableListWrap, disabledItemsFocusable, nextItem);
            } else if (key === 'ArrowUp') {
              event.preventDefault();
              moveFocus(list, currentFocus, disableListWrap, disabledItemsFocusable, previousItem);
            } else if (key === 'Home') {
              event.preventDefault();
              moveFocus(list, null, disableListWrap, disabledItemsFocusable, nextItem);
            } else if (key === 'End') {
              event.preventDefault();
              moveFocus(list, null, disableListWrap, disabledItemsFocusable, previousItem);
            } else if (key.length === 1) {
              const criteria = textCriteriaRef.current;
              const lowerKey = key.toLowerCase();
              const currTime = performance.now();
              if (criteria.keys.length > 0) {
                // Reset
                if (currTime - criteria.lastTime > 500) {
                  criteria.keys = [];
                  criteria.repeating = true;
                  criteria.previousKeyMatched = true;
                } else if (criteria.repeating && lowerKey !== criteria.keys[0]) {
                  criteria.repeating = false;
                }
              }
              criteria.lastTime = currTime;
              criteria.keys.push(lowerKey);
              const keepFocusOnCurrent = currentFocus && !criteria.repeating && textCriteriaMatches(currentFocus, criteria);
              if (criteria.previousKeyMatched && (keepFocusOnCurrent || moveFocus(list, currentFocus, false, disabledItemsFocusable, nextItem, criteria))) {
                event.preventDefault();
              } else {
                criteria.previousKeyMatched = false;
              }
            }
            if (onKeyDown) {
              onKeyDown(event);
            }
          };
          const handleRef = useForkRef(listRef, ref);

          /**
           * the index of the item should receive focus
           * in a `variant="selectedMenu"` it's the first `selected` item
           * otherwise it's the very first item.
           */
          let activeItemIndex = -1;
          // since we inject focus related props into children we have to do a lookahead
          // to check if there is a `selected` item. We're looking for the last `selected`
          // item and use the first valid item as a fallback
          reactExports.Children.forEach(children, (child, index) => {
            if (! /*#__PURE__*/reactExports.isValidElement(child)) {
              return;
            }
            if (!child.props.disabled) {
              if (variant === 'selectedMenu' && child.props.selected) {
                activeItemIndex = index;
              } else if (activeItemIndex === -1) {
                activeItemIndex = index;
              }
            }
            if (activeItemIndex === index && (child.props.disabled || child.props.muiSkipListHighlight || child.type.muiSkipListHighlight)) {
              activeItemIndex += 1;
              if (activeItemIndex >= children.length) {
                // there are no focusable items within the list.
                activeItemIndex = -1;
              }
            }
          });
          const items = reactExports.Children.map(children, (child, index) => {
            if (index === activeItemIndex) {
              const newChildProps = {};
              if (autoFocusItem) {
                newChildProps.autoFocus = true;
              }
              if (child.props.tabIndex === undefined && variant === 'selectedMenu') {
                newChildProps.tabIndex = 0;
              }
              return /*#__PURE__*/reactExports.cloneElement(child, newChildProps);
            }
            return child;
          });
          return /*#__PURE__*/jsxRuntimeExports.jsx(List$1, _extends({
            role: "menu",
            ref: handleRef,
            className: className,
            onKeyDown: handleKeyDown,
            tabIndex: autoFocus ? 0 : -1
          }, other, {
            children: items
          }));
        });
        const MenuList$1 = MenuList;
        function getPopoverUtilityClass(slot) {
          return generateUtilityClass('MuiPopover', slot);
        }
        generateUtilityClasses('MuiPopover', ['root', 'paper']);
        const _excluded$9 = ["onEntering"],
          _excluded2$2 = ["action", "anchorEl", "anchorOrigin", "anchorPosition", "anchorReference", "children", "className", "container", "elevation", "marginThreshold", "open", "PaperProps", "transformOrigin", "TransitionComponent", "transitionDuration", "TransitionProps"];
        function getOffsetTop(rect, vertical) {
          let offset = 0;
          if (typeof vertical === 'number') {
            offset = vertical;
          } else if (vertical === 'center') {
            offset = rect.height / 2;
          } else if (vertical === 'bottom') {
            offset = rect.height;
          }
          return offset;
        }
        function getOffsetLeft(rect, horizontal) {
          let offset = 0;
          if (typeof horizontal === 'number') {
            offset = horizontal;
          } else if (horizontal === 'center') {
            offset = rect.width / 2;
          } else if (horizontal === 'right') {
            offset = rect.width;
          }
          return offset;
        }
        function getTransformOriginValue(transformOrigin) {
          return [transformOrigin.horizontal, transformOrigin.vertical].map(n => typeof n === 'number' ? `${n}px` : n).join(' ');
        }
        function resolveAnchorEl(anchorEl) {
          return typeof anchorEl === 'function' ? anchorEl() : anchorEl;
        }
        const useUtilityClasses$8 = ownerState => {
          const {
            classes
          } = ownerState;
          const slots = {
            root: ['root'],
            paper: ['paper']
          };
          return composeClasses(slots, getPopoverUtilityClass, classes);
        };
        const PopoverRoot = styled$1(Modal$1, {
          name: 'MuiPopover',
          slot: 'Root',
          overridesResolver: (props, styles) => styles.root
        })({});
        const PopoverPaper = styled$1(Paper$1, {
          name: 'MuiPopover',
          slot: 'Paper',
          overridesResolver: (props, styles) => styles.paper
        })({
          position: 'absolute',
          overflowY: 'auto',
          overflowX: 'hidden',
          // So we see the popover when it's empty.
          // It's most likely on issue on userland.
          minWidth: 16,
          minHeight: 16,
          maxWidth: 'calc(100% - 32px)',
          maxHeight: 'calc(100% - 32px)',
          // We disable the focus ring for mouse, touch and keyboard users.
          outline: 0
        });
        const Popover = /*#__PURE__*/reactExports.forwardRef(function Popover(inProps, ref) {
          const props = useThemeProps({
            props: inProps,
            name: 'MuiPopover'
          });
          const {
              action,
              anchorEl,
              anchorOrigin = {
                vertical: 'top',
                horizontal: 'left'
              },
              anchorPosition,
              anchorReference = 'anchorEl',
              children,
              className,
              container: containerProp,
              elevation = 8,
              marginThreshold = 16,
              open,
              PaperProps = {},
              transformOrigin = {
                vertical: 'top',
                horizontal: 'left'
              },
              TransitionComponent = Grow$1,
              transitionDuration: transitionDurationProp = 'auto',
              TransitionProps: {
                onEntering
              } = {}
            } = props,
            TransitionProps = _objectWithoutPropertiesLoose(props.TransitionProps, _excluded$9),
            other = _objectWithoutPropertiesLoose(props, _excluded2$2);
          const paperRef = reactExports.useRef();
          const handlePaperRef = useForkRef(paperRef, PaperProps.ref);
          const ownerState = _extends({}, props, {
            anchorOrigin,
            anchorReference,
            elevation,
            marginThreshold,
            PaperProps,
            transformOrigin,
            TransitionComponent,
            transitionDuration: transitionDurationProp,
            TransitionProps
          });
          const classes = useUtilityClasses$8(ownerState);

          // Returns the top/left offset of the position
          // to attach to on the anchor element (or body if none is provided)
          const getAnchorOffset = reactExports.useCallback(() => {
            if (anchorReference === 'anchorPosition') {
              return anchorPosition;
            }
            const resolvedAnchorEl = resolveAnchorEl(anchorEl);

            // If an anchor element wasn't provided, just use the parent body element of this Popover
            const anchorElement = resolvedAnchorEl && resolvedAnchorEl.nodeType === 1 ? resolvedAnchorEl : ownerDocument(paperRef.current).body;
            const anchorRect = anchorElement.getBoundingClientRect();
            return {
              top: anchorRect.top + getOffsetTop(anchorRect, anchorOrigin.vertical),
              left: anchorRect.left + getOffsetLeft(anchorRect, anchorOrigin.horizontal)
            };
          }, [anchorEl, anchorOrigin.horizontal, anchorOrigin.vertical, anchorPosition, anchorReference]);

          // Returns the base transform origin using the element
          const getTransformOrigin = reactExports.useCallback(elemRect => {
            return {
              vertical: getOffsetTop(elemRect, transformOrigin.vertical),
              horizontal: getOffsetLeft(elemRect, transformOrigin.horizontal)
            };
          }, [transformOrigin.horizontal, transformOrigin.vertical]);
          const getPositioningStyle = reactExports.useCallback(element => {
            const elemRect = {
              width: element.offsetWidth,
              height: element.offsetHeight
            };

            // Get the transform origin point on the element itself
            const elemTransformOrigin = getTransformOrigin(elemRect);
            if (anchorReference === 'none') {
              return {
                top: null,
                left: null,
                transformOrigin: getTransformOriginValue(elemTransformOrigin)
              };
            }

            // Get the offset of the anchoring element
            const anchorOffset = getAnchorOffset();

            // Calculate element positioning
            let top = anchorOffset.top - elemTransformOrigin.vertical;
            let left = anchorOffset.left - elemTransformOrigin.horizontal;
            const bottom = top + elemRect.height;
            const right = left + elemRect.width;

            // Use the parent window of the anchorEl if provided
            const containerWindow = ownerWindow(resolveAnchorEl(anchorEl));

            // Window thresholds taking required margin into account
            const heightThreshold = containerWindow.innerHeight - marginThreshold;
            const widthThreshold = containerWindow.innerWidth - marginThreshold;

            // Check if the vertical axis needs shifting
            if (top < marginThreshold) {
              const diff = top - marginThreshold;
              top -= diff;
              elemTransformOrigin.vertical += diff;
            } else if (bottom > heightThreshold) {
              const diff = bottom - heightThreshold;
              top -= diff;
              elemTransformOrigin.vertical += diff;
            }

            // Check if the horizontal axis needs shifting
            if (left < marginThreshold) {
              const diff = left - marginThreshold;
              left -= diff;
              elemTransformOrigin.horizontal += diff;
            } else if (right > widthThreshold) {
              const diff = right - widthThreshold;
              left -= diff;
              elemTransformOrigin.horizontal += diff;
            }
            return {
              top: `${Math.round(top)}px`,
              left: `${Math.round(left)}px`,
              transformOrigin: getTransformOriginValue(elemTransformOrigin)
            };
          }, [anchorEl, anchorReference, getAnchorOffset, getTransformOrigin, marginThreshold]);
          const [isPositioned, setIsPositioned] = reactExports.useState(open);
          const setPositioningStyles = reactExports.useCallback(() => {
            const element = paperRef.current;
            if (!element) {
              return;
            }
            const positioning = getPositioningStyle(element);
            if (positioning.top !== null) {
              element.style.top = positioning.top;
            }
            if (positioning.left !== null) {
              element.style.left = positioning.left;
            }
            element.style.transformOrigin = positioning.transformOrigin;
            setIsPositioned(true);
          }, [getPositioningStyle]);
          const handleEntering = (element, isAppearing) => {
            if (onEntering) {
              onEntering(element, isAppearing);
            }
            setPositioningStyles();
          };
          const handleExited = () => {
            setIsPositioned(false);
          };
          reactExports.useEffect(() => {
            if (open) {
              setPositioningStyles();
            }
          });
          reactExports.useImperativeHandle(action, () => open ? {
            updatePosition: () => {
              setPositioningStyles();
            }
          } : null, [open, setPositioningStyles]);
          reactExports.useEffect(() => {
            if (!open) {
              return undefined;
            }
            const handleResize = debounce(() => {
              setPositioningStyles();
            });
            const containerWindow = ownerWindow(anchorEl);
            containerWindow.addEventListener('resize', handleResize);
            return () => {
              handleResize.clear();
              containerWindow.removeEventListener('resize', handleResize);
            };
          }, [anchorEl, open, setPositioningStyles]);
          let transitionDuration = transitionDurationProp;
          if (transitionDurationProp === 'auto' && !TransitionComponent.muiSupportAuto) {
            transitionDuration = undefined;
          }

          // If the container prop is provided, use that
          // If the anchorEl prop is provided, use its parent body element as the container
          // If neither are provided let the Modal take care of choosing the container
          const container = containerProp || (anchorEl ? ownerDocument(resolveAnchorEl(anchorEl)).body : undefined);
          return /*#__PURE__*/jsxRuntimeExports.jsx(PopoverRoot, _extends({
            BackdropProps: {
              invisible: true
            },
            className: clsx(classes.root, className),
            container: container,
            open: open,
            ref: ref,
            ownerState: ownerState
          }, other, {
            children: /*#__PURE__*/jsxRuntimeExports.jsx(TransitionComponent, _extends({
              appear: true,
              in: open,
              onEntering: handleEntering,
              onExited: handleExited,
              timeout: transitionDuration
            }, TransitionProps, {
              children: /*#__PURE__*/jsxRuntimeExports.jsx(PopoverPaper, _extends({
                elevation: elevation
              }, PaperProps, {
                ref: handlePaperRef,
                className: clsx(classes.paper, PaperProps.className)
              }, isPositioned ? undefined : {
                style: _extends({}, PaperProps.style, {
                  opacity: 0
                })
              }, {
                ownerState: ownerState,
                children: children
              }))
            }))
          }));
        });
        const Popover$1 = exports('O', Popover);
        function getMenuUtilityClass(slot) {
          return generateUtilityClass('MuiMenu', slot);
        }
        generateUtilityClasses('MuiMenu', ['root', 'paper', 'list']);
        const _excluded$8 = ["onEntering"],
          _excluded2$1 = ["autoFocus", "children", "disableAutoFocusItem", "MenuListProps", "onClose", "open", "PaperProps", "PopoverClasses", "transitionDuration", "TransitionProps", "variant"];
        const RTL_ORIGIN = {
          vertical: 'top',
          horizontal: 'right'
        };
        const LTR_ORIGIN = {
          vertical: 'top',
          horizontal: 'left'
        };
        const useUtilityClasses$7 = ownerState => {
          const {
            classes
          } = ownerState;
          const slots = {
            root: ['root'],
            paper: ['paper'],
            list: ['list']
          };
          return composeClasses(slots, getMenuUtilityClass, classes);
        };
        const MenuRoot = styled$1(Popover$1, {
          shouldForwardProp: prop => rootShouldForwardProp(prop) || prop === 'classes',
          name: 'MuiMenu',
          slot: 'Root',
          overridesResolver: (props, styles) => styles.root
        })({});
        const MenuPaper = styled$1(Paper$1, {
          name: 'MuiMenu',
          slot: 'Paper',
          overridesResolver: (props, styles) => styles.paper
        })({
          // specZ: The maximum height of a simple menu should be one or more rows less than the view
          // height. This ensures a tappable area outside of the simple menu with which to dismiss
          // the menu.
          maxHeight: 'calc(100% - 96px)',
          // Add iOS momentum scrolling for iOS < 13.0
          WebkitOverflowScrolling: 'touch'
        });
        const MenuMenuList = styled$1(MenuList$1, {
          name: 'MuiMenu',
          slot: 'List',
          overridesResolver: (props, styles) => styles.list
        })({
          // We disable the focus ring for mouse, touch and keyboard users.
          outline: 0
        });
        const Menu = /*#__PURE__*/reactExports.forwardRef(function Menu(inProps, ref) {
          const props = useThemeProps({
            props: inProps,
            name: 'MuiMenu'
          });
          const {
              autoFocus = true,
              children,
              disableAutoFocusItem = false,
              MenuListProps = {},
              onClose,
              open,
              PaperProps = {},
              PopoverClasses,
              transitionDuration = 'auto',
              TransitionProps: {
                onEntering
              } = {},
              variant = 'selectedMenu'
            } = props,
            TransitionProps = _objectWithoutPropertiesLoose(props.TransitionProps, _excluded$8),
            other = _objectWithoutPropertiesLoose(props, _excluded2$1);
          const theme = useTheme();
          const isRtl = theme.direction === 'rtl';
          const ownerState = _extends({}, props, {
            autoFocus,
            disableAutoFocusItem,
            MenuListProps,
            onEntering,
            PaperProps,
            transitionDuration,
            TransitionProps,
            variant
          });
          const classes = useUtilityClasses$7(ownerState);
          const autoFocusItem = autoFocus && !disableAutoFocusItem && open;
          const menuListActionsRef = reactExports.useRef(null);
          const handleEntering = (element, isAppearing) => {
            if (menuListActionsRef.current) {
              menuListActionsRef.current.adjustStyleForScrollbar(element, theme);
            }
            if (onEntering) {
              onEntering(element, isAppearing);
            }
          };
          const handleListKeyDown = event => {
            if (event.key === 'Tab') {
              event.preventDefault();
              if (onClose) {
                onClose(event, 'tabKeyDown');
              }
            }
          };

          /**
           * the index of the item should receive focus
           * in a `variant="selectedMenu"` it's the first `selected` item
           * otherwise it's the very first item.
           */
          let activeItemIndex = -1;
          // since we inject focus related props into children we have to do a lookahead
          // to check if there is a `selected` item. We're looking for the last `selected`
          // item and use the first valid item as a fallback
          reactExports.Children.map(children, (child, index) => {
            if (! /*#__PURE__*/reactExports.isValidElement(child)) {
              return;
            }
            if (!child.props.disabled) {
              if (variant === 'selectedMenu' && child.props.selected) {
                activeItemIndex = index;
              } else if (activeItemIndex === -1) {
                activeItemIndex = index;
              }
            }
          });
          return /*#__PURE__*/jsxRuntimeExports.jsx(MenuRoot, _extends({
            onClose: onClose,
            anchorOrigin: {
              vertical: 'bottom',
              horizontal: isRtl ? 'right' : 'left'
            },
            transformOrigin: isRtl ? RTL_ORIGIN : LTR_ORIGIN,
            PaperProps: _extends({
              as: MenuPaper
            }, PaperProps, {
              classes: _extends({}, PaperProps.classes, {
                root: classes.paper
              })
            }),
            className: classes.root,
            open: open,
            ref: ref,
            transitionDuration: transitionDuration,
            TransitionProps: _extends({
              onEntering: handleEntering
            }, TransitionProps),
            ownerState: ownerState
          }, other, {
            classes: PopoverClasses,
            children: /*#__PURE__*/jsxRuntimeExports.jsx(MenuMenuList, _extends({
              onKeyDown: handleListKeyDown,
              actions: menuListActionsRef,
              autoFocus: autoFocus && (activeItemIndex === -1 || disableAutoFocusItem),
              autoFocusItem: autoFocusItem,
              variant: variant
            }, MenuListProps, {
              className: clsx(classes.list, MenuListProps.className),
              children: children
            }))
          }));
        });
        const Menu$1 = Menu;
        function getMenuItemUtilityClass(slot) {
          return generateUtilityClass('MuiMenuItem', slot);
        }
        const menuItemClasses = generateUtilityClasses('MuiMenuItem', ['root', 'focusVisible', 'dense', 'disabled', 'divider', 'gutters', 'selected']);
        const menuItemClasses$1 = menuItemClasses;
        const _excluded$7 = ["autoFocus", "component", "dense", "divider", "disableGutters", "focusVisibleClassName", "role", "tabIndex", "className"];
        const overridesResolver = (props, styles) => {
          const {
            ownerState
          } = props;
          return [styles.root, ownerState.dense && styles.dense, ownerState.divider && styles.divider, !ownerState.disableGutters && styles.gutters];
        };
        const useUtilityClasses$6 = ownerState => {
          const {
            disabled,
            dense,
            divider,
            disableGutters,
            selected,
            classes
          } = ownerState;
          const slots = {
            root: ['root', dense && 'dense', disabled && 'disabled', !disableGutters && 'gutters', divider && 'divider', selected && 'selected']
          };
          const composedClasses = composeClasses(slots, getMenuItemUtilityClass, classes);
          return _extends({}, classes, composedClasses);
        };
        const MenuItemRoot = styled$1(ButtonBase$1, {
          shouldForwardProp: prop => rootShouldForwardProp(prop) || prop === 'classes',
          name: 'MuiMenuItem',
          slot: 'Root',
          overridesResolver
        })(({
          theme,
          ownerState
        }) => _extends({}, theme.typography.body1, {
          display: 'flex',
          justifyContent: 'flex-start',
          alignItems: 'center',
          position: 'relative',
          textDecoration: 'none',
          minHeight: 48,
          paddingTop: 6,
          paddingBottom: 6,
          boxSizing: 'border-box',
          whiteSpace: 'nowrap'
        }, !ownerState.disableGutters && {
          paddingLeft: 16,
          paddingRight: 16
        }, ownerState.divider && {
          borderBottom: `1px solid ${(theme.vars || theme).palette.divider}`,
          backgroundClip: 'padding-box'
        }, {
          '&:hover': {
            textDecoration: 'none',
            backgroundColor: (theme.vars || theme).palette.action.hover,
            // Reset on touch devices, it doesn't add specificity
            '@media (hover: none)': {
              backgroundColor: 'transparent'
            }
          },
          [`&.${menuItemClasses$1.selected}`]: {
            backgroundColor: theme.vars ? `rgba(${theme.vars.palette.primary.mainChannel} / ${theme.vars.palette.action.selectedOpacity})` : alpha(theme.palette.primary.main, theme.palette.action.selectedOpacity),
            [`&.${menuItemClasses$1.focusVisible}`]: {
              backgroundColor: theme.vars ? `rgba(${theme.vars.palette.primary.mainChannel} / calc(${theme.vars.palette.action.selectedOpacity} + ${theme.vars.palette.action.focusOpacity}))` : alpha(theme.palette.primary.main, theme.palette.action.selectedOpacity + theme.palette.action.focusOpacity)
            }
          },
          [`&.${menuItemClasses$1.selected}:hover`]: {
            backgroundColor: theme.vars ? `rgba(${theme.vars.palette.primary.mainChannel} / calc(${theme.vars.palette.action.selectedOpacity} + ${theme.vars.palette.action.hoverOpacity}))` : alpha(theme.palette.primary.main, theme.palette.action.selectedOpacity + theme.palette.action.hoverOpacity),
            // Reset on touch devices, it doesn't add specificity
            '@media (hover: none)': {
              backgroundColor: theme.vars ? `rgba(${theme.vars.palette.primary.mainChannel} / ${theme.vars.palette.action.selectedOpacity})` : alpha(theme.palette.primary.main, theme.palette.action.selectedOpacity)
            }
          },
          [`&.${menuItemClasses$1.focusVisible}`]: {
            backgroundColor: (theme.vars || theme).palette.action.focus
          },
          [`&.${menuItemClasses$1.disabled}`]: {
            opacity: (theme.vars || theme).palette.action.disabledOpacity
          },
          [`& + .${dividerClasses$1.root}`]: {
            marginTop: theme.spacing(1),
            marginBottom: theme.spacing(1)
          },
          [`& + .${dividerClasses$1.inset}`]: {
            marginLeft: 52
          },
          [`& .${listItemTextClasses$1.root}`]: {
            marginTop: 0,
            marginBottom: 0
          },
          [`& .${listItemTextClasses$1.inset}`]: {
            paddingLeft: 36
          },
          [`& .${listItemIconClasses$1.root}`]: {
            minWidth: 36
          }
        }, !ownerState.dense && {
          [theme.breakpoints.up('sm')]: {
            minHeight: 'auto'
          }
        }, ownerState.dense && _extends({
          minHeight: 32,
          // https://m2.material.io/components/menus#specs > Dense
          paddingTop: 4,
          paddingBottom: 4
        }, theme.typography.body2, {
          [`& .${listItemIconClasses$1.root} svg`]: {
            fontSize: '1.25rem'
          }
        })));
        const MenuItem = /*#__PURE__*/reactExports.forwardRef(function MenuItem(inProps, ref) {
          const props = useThemeProps({
            props: inProps,
            name: 'MuiMenuItem'
          });
          const {
              autoFocus = false,
              component = 'li',
              dense = false,
              divider = false,
              disableGutters = false,
              focusVisibleClassName,
              role = 'menuitem',
              tabIndex: tabIndexProp,
              className
            } = props,
            other = _objectWithoutPropertiesLoose(props, _excluded$7);
          const context = reactExports.useContext(ListContext$1);
          const childContext = reactExports.useMemo(() => ({
            dense: dense || context.dense || false,
            disableGutters
          }), [context.dense, dense, disableGutters]);
          const menuItemRef = reactExports.useRef(null);
          useEnhancedEffect(() => {
            if (autoFocus) {
              if (menuItemRef.current) {
                menuItemRef.current.focus();
              }
            }
          }, [autoFocus]);
          const ownerState = _extends({}, props, {
            dense: childContext.dense,
            divider,
            disableGutters
          });
          const classes = useUtilityClasses$6(props);
          const handleRef = useForkRef(menuItemRef, ref);
          let tabIndex;
          if (!props.disabled) {
            tabIndex = tabIndexProp !== undefined ? tabIndexProp : -1;
          }
          return /*#__PURE__*/jsxRuntimeExports.jsx(ListContext$1.Provider, {
            value: childContext,
            children: /*#__PURE__*/jsxRuntimeExports.jsx(MenuItemRoot, _extends({
              ref: handleRef,
              role: role,
              tabIndex: tabIndex,
              component: component,
              focusVisibleClassName: clsx(classes.focusVisible, focusVisibleClassName),
              className: clsx(classes.root, className)
            }, other, {
              ownerState: ownerState,
              classes: classes
            }))
          });
        });
        const MenuItem$1 = exports('d', MenuItem);
        function getNativeSelectUtilityClasses(slot) {
          return generateUtilityClass('MuiNativeSelect', slot);
        }
        const nativeSelectClasses = generateUtilityClasses('MuiNativeSelect', ['root', 'select', 'multiple', 'filled', 'outlined', 'standard', 'disabled', 'icon', 'iconOpen', 'iconFilled', 'iconOutlined', 'iconStandard', 'nativeInput', 'error']);
        const nativeSelectClasses$1 = nativeSelectClasses;
        const _excluded$6 = ["className", "disabled", "error", "IconComponent", "inputRef", "variant"];
        const useUtilityClasses$5 = ownerState => {
          const {
            classes,
            variant,
            disabled,
            multiple,
            open,
            error
          } = ownerState;
          const slots = {
            select: ['select', variant, disabled && 'disabled', multiple && 'multiple', error && 'error'],
            icon: ['icon', `icon${capitalize(variant)}`, open && 'iconOpen', disabled && 'disabled']
          };
          return composeClasses(slots, getNativeSelectUtilityClasses, classes);
        };
        const nativeSelectSelectStyles = ({
          ownerState,
          theme
        }) => _extends({
          MozAppearance: 'none',
          // Reset
          WebkitAppearance: 'none',
          // Reset
          // When interacting quickly, the text can end up selected.
          // Native select can't be selected either.
          userSelect: 'none',
          borderRadius: 0,
          // Reset
          cursor: 'pointer',
          '&:focus': _extends({}, theme.vars ? {
            backgroundColor: `rgba(${theme.vars.palette.common.onBackgroundChannel} / 0.05)`
          } : {
            backgroundColor: theme.palette.mode === 'light' ? 'rgba(0, 0, 0, 0.05)' : 'rgba(255, 255, 255, 0.05)'
          }, {
            borderRadius: 0 // Reset Chrome style
          }),

          // Remove IE11 arrow
          '&::-ms-expand': {
            display: 'none'
          },
          [`&.${nativeSelectClasses$1.disabled}`]: {
            cursor: 'default'
          },
          '&[multiple]': {
            height: 'auto'
          },
          '&:not([multiple]) option, &:not([multiple]) optgroup': {
            backgroundColor: (theme.vars || theme).palette.background.paper
          },
          // Bump specificity to allow extending custom inputs
          '&&&': {
            paddingRight: 24,
            minWidth: 16 // So it doesn't collapse.
          }
        }, ownerState.variant === 'filled' && {
          '&&&': {
            paddingRight: 32
          }
        }, ownerState.variant === 'outlined' && {
          borderRadius: (theme.vars || theme).shape.borderRadius,
          '&:focus': {
            borderRadius: (theme.vars || theme).shape.borderRadius // Reset the reset for Chrome style
          },

          '&&&': {
            paddingRight: 32
          }
        });
        const NativeSelectSelect = styled$1('select', {
          name: 'MuiNativeSelect',
          slot: 'Select',
          shouldForwardProp: rootShouldForwardProp,
          overridesResolver: (props, styles) => {
            const {
              ownerState
            } = props;
            return [styles.select, styles[ownerState.variant], ownerState.error && styles.error, {
              [`&.${nativeSelectClasses$1.multiple}`]: styles.multiple
            }];
          }
        })(nativeSelectSelectStyles);
        const nativeSelectIconStyles = ({
          ownerState,
          theme
        }) => _extends({
          // We use a position absolute over a flexbox in order to forward the pointer events
          // to the input and to support wrapping tags..
          position: 'absolute',
          right: 0,
          top: 'calc(50% - .5em)',
          // Center vertically, height is 1em
          pointerEvents: 'none',
          // Don't block pointer events on the select under the icon.
          color: (theme.vars || theme).palette.action.active,
          [`&.${nativeSelectClasses$1.disabled}`]: {
            color: (theme.vars || theme).palette.action.disabled
          }
        }, ownerState.open && {
          transform: 'rotate(180deg)'
        }, ownerState.variant === 'filled' && {
          right: 7
        }, ownerState.variant === 'outlined' && {
          right: 7
        });
        const NativeSelectIcon = styled$1('svg', {
          name: 'MuiNativeSelect',
          slot: 'Icon',
          overridesResolver: (props, styles) => {
            const {
              ownerState
            } = props;
            return [styles.icon, ownerState.variant && styles[`icon${capitalize(ownerState.variant)}`], ownerState.open && styles.iconOpen];
          }
        })(nativeSelectIconStyles);

        /**
         * @ignore - internal component.
         */
        const NativeSelectInput = /*#__PURE__*/reactExports.forwardRef(function NativeSelectInput(props, ref) {
          const {
              className,
              disabled,
              error,
              IconComponent,
              inputRef,
              variant = 'standard'
            } = props,
            other = _objectWithoutPropertiesLoose(props, _excluded$6);
          const ownerState = _extends({}, props, {
            disabled,
            variant,
            error
          });
          const classes = useUtilityClasses$5(ownerState);
          return /*#__PURE__*/jsxRuntimeExports.jsxs(reactExports.Fragment, {
            children: [/*#__PURE__*/jsxRuntimeExports.jsx(NativeSelectSelect, _extends({
              ownerState: ownerState,
              className: clsx(classes.select, className),
              disabled: disabled,
              ref: inputRef || ref
            }, other)), props.multiple ? null : /*#__PURE__*/jsxRuntimeExports.jsx(NativeSelectIcon, {
              as: IconComponent,
              ownerState: ownerState,
              className: classes.icon
            })]
          });
        });
        const NativeSelectInput$1 = NativeSelectInput;
        var _span$1;
        const _excluded$5 = ["children", "classes", "className", "label", "notched"];
        const NotchedOutlineRoot$1 = styled$1('fieldset')({
          textAlign: 'left',
          position: 'absolute',
          bottom: 0,
          right: 0,
          top: -5,
          left: 0,
          margin: 0,
          padding: '0 8px',
          pointerEvents: 'none',
          borderRadius: 'inherit',
          borderStyle: 'solid',
          borderWidth: 1,
          overflow: 'hidden',
          minWidth: '0%'
        });
        const NotchedOutlineLegend = styled$1('legend')(({
          ownerState,
          theme
        }) => _extends({
          float: 'unset',
          // Fix conflict with bootstrap
          width: 'auto',
          // Fix conflict with bootstrap
          overflow: 'hidden'
        }, !ownerState.withLabel && {
          padding: 0,
          lineHeight: '11px',
          // sync with `height` in `legend` styles
          transition: theme.transitions.create('width', {
            duration: 150,
            easing: theme.transitions.easing.easeOut
          })
        }, ownerState.withLabel && _extends({
          display: 'block',
          // Fix conflict with normalize.css and sanitize.css
          padding: 0,
          height: 11,
          // sync with `lineHeight` in `legend` styles
          fontSize: '0.75em',
          visibility: 'hidden',
          maxWidth: 0.01,
          transition: theme.transitions.create('max-width', {
            duration: 50,
            easing: theme.transitions.easing.easeOut
          }),
          whiteSpace: 'nowrap',
          '& > span': {
            paddingLeft: 5,
            paddingRight: 5,
            display: 'inline-block',
            opacity: 0,
            visibility: 'visible'
          }
        }, ownerState.notched && {
          maxWidth: '100%',
          transition: theme.transitions.create('max-width', {
            duration: 100,
            easing: theme.transitions.easing.easeOut,
            delay: 50
          })
        })));

        /**
         * @ignore - internal component.
         */
        function NotchedOutline(props) {
          const {
              className,
              label,
              notched
            } = props,
            other = _objectWithoutPropertiesLoose(props, _excluded$5);
          const withLabel = label != null && label !== '';
          const ownerState = _extends({}, props, {
            notched,
            withLabel
          });
          return /*#__PURE__*/jsxRuntimeExports.jsx(NotchedOutlineRoot$1, _extends({
            "aria-hidden": true,
            className: className,
            ownerState: ownerState
          }, other, {
            children: /*#__PURE__*/jsxRuntimeExports.jsx(NotchedOutlineLegend, {
              ownerState: ownerState,
              children: withLabel ? /*#__PURE__*/jsxRuntimeExports.jsx("span", {
                children: label
              }) :
              // notranslate needed while Google Translate will not fix zero-width space issue
              _span$1 || (_span$1 = /*#__PURE__*/jsxRuntimeExports.jsx("span", {
                className: "notranslate",
                children: "\u200B"
              }))
            })
          }));
        }
        const _excluded$4 = ["components", "fullWidth", "inputComponent", "label", "multiline", "notched", "slots", "type"];
        const useUtilityClasses$4 = ownerState => {
          const {
            classes
          } = ownerState;
          const slots = {
            root: ['root'],
            notchedOutline: ['notchedOutline'],
            input: ['input']
          };
          const composedClasses = composeClasses(slots, getOutlinedInputUtilityClass, classes);
          return _extends({}, classes, composedClasses);
        };
        const OutlinedInputRoot = styled$1(InputBaseRoot, {
          shouldForwardProp: prop => rootShouldForwardProp(prop) || prop === 'classes',
          name: 'MuiOutlinedInput',
          slot: 'Root',
          overridesResolver: rootOverridesResolver
        })(({
          theme,
          ownerState
        }) => {
          const borderColor = theme.palette.mode === 'light' ? 'rgba(0, 0, 0, 0.23)' : 'rgba(255, 255, 255, 0.23)';
          return _extends({
            position: 'relative',
            borderRadius: (theme.vars || theme).shape.borderRadius,
            [`&:hover .${outlinedInputClasses$1.notchedOutline}`]: {
              borderColor: (theme.vars || theme).palette.text.primary
            },
            // Reset on touch devices, it doesn't add specificity
            '@media (hover: none)': {
              [`&:hover .${outlinedInputClasses$1.notchedOutline}`]: {
                borderColor: theme.vars ? `rgba(${theme.vars.palette.common.onBackgroundChannel} / 0.23)` : borderColor
              }
            },
            [`&.${outlinedInputClasses$1.focused} .${outlinedInputClasses$1.notchedOutline}`]: {
              borderColor: (theme.vars || theme).palette[ownerState.color].main,
              borderWidth: 2
            },
            [`&.${outlinedInputClasses$1.error} .${outlinedInputClasses$1.notchedOutline}`]: {
              borderColor: (theme.vars || theme).palette.error.main
            },
            [`&.${outlinedInputClasses$1.disabled} .${outlinedInputClasses$1.notchedOutline}`]: {
              borderColor: (theme.vars || theme).palette.action.disabled
            }
          }, ownerState.startAdornment && {
            paddingLeft: 14
          }, ownerState.endAdornment && {
            paddingRight: 14
          }, ownerState.multiline && _extends({
            padding: '16.5px 14px'
          }, ownerState.size === 'small' && {
            padding: '8.5px 14px'
          }));
        });
        const NotchedOutlineRoot = styled$1(NotchedOutline, {
          name: 'MuiOutlinedInput',
          slot: 'NotchedOutline',
          overridesResolver: (props, styles) => styles.notchedOutline
        })(({
          theme
        }) => {
          const borderColor = theme.palette.mode === 'light' ? 'rgba(0, 0, 0, 0.23)' : 'rgba(255, 255, 255, 0.23)';
          return {
            borderColor: theme.vars ? `rgba(${theme.vars.palette.common.onBackgroundChannel} / 0.23)` : borderColor
          };
        });
        const OutlinedInputInput = styled$1(InputBaseComponent, {
          name: 'MuiOutlinedInput',
          slot: 'Input',
          overridesResolver: inputOverridesResolver
        })(({
          theme,
          ownerState
        }) => _extends({
          padding: '16.5px 14px'
        }, !theme.vars && {
          '&:-webkit-autofill': {
            WebkitBoxShadow: theme.palette.mode === 'light' ? null : '0 0 0 100px #266798 inset',
            WebkitTextFillColor: theme.palette.mode === 'light' ? null : '#fff',
            caretColor: theme.palette.mode === 'light' ? null : '#fff',
            borderRadius: 'inherit'
          }
        }, theme.vars && {
          '&:-webkit-autofill': {
            borderRadius: 'inherit'
          },
          [theme.getColorSchemeSelector('dark')]: {
            '&:-webkit-autofill': {
              WebkitBoxShadow: '0 0 0 100px #266798 inset',
              WebkitTextFillColor: '#fff',
              caretColor: '#fff'
            }
          }
        }, ownerState.size === 'small' && {
          padding: '8.5px 14px'
        }, ownerState.multiline && {
          padding: 0
        }, ownerState.startAdornment && {
          paddingLeft: 0
        }, ownerState.endAdornment && {
          paddingRight: 0
        }));
        const OutlinedInput = /*#__PURE__*/reactExports.forwardRef(function OutlinedInput(inProps, ref) {
          var _ref, _slots$root, _ref2, _slots$input, _React$Fragment;
          const props = useThemeProps({
            props: inProps,
            name: 'MuiOutlinedInput'
          });
          const {
              components = {},
              fullWidth = false,
              inputComponent = 'input',
              label,
              multiline = false,
              notched,
              slots = {},
              type = 'text'
            } = props,
            other = _objectWithoutPropertiesLoose(props, _excluded$4);
          const classes = useUtilityClasses$4(props);
          const muiFormControl = useFormControl();
          const fcs = formControlState({
            props,
            muiFormControl,
            states: ['required']
          });
          const ownerState = _extends({}, props, {
            color: fcs.color || 'primary',
            disabled: fcs.disabled,
            error: fcs.error,
            focused: fcs.focused,
            formControl: muiFormControl,
            fullWidth,
            hiddenLabel: fcs.hiddenLabel,
            multiline,
            size: fcs.size,
            type
          });
          const RootSlot = (_ref = (_slots$root = slots.root) != null ? _slots$root : components.Root) != null ? _ref : OutlinedInputRoot;
          const InputSlot = (_ref2 = (_slots$input = slots.input) != null ? _slots$input : components.Input) != null ? _ref2 : OutlinedInputInput;
          return /*#__PURE__*/jsxRuntimeExports.jsx(InputBase$1, _extends({
            slots: {
              root: RootSlot,
              input: InputSlot
            },
            renderSuffix: state => /*#__PURE__*/jsxRuntimeExports.jsx(NotchedOutlineRoot, {
              ownerState: ownerState,
              className: classes.notchedOutline,
              label: label != null && label !== '' && fcs.required ? _React$Fragment || (_React$Fragment = /*#__PURE__*/jsxRuntimeExports.jsxs(reactExports.Fragment, {
                children: [label, "\u2009", '*']
              })) : label,
              notched: typeof notched !== 'undefined' ? notched : Boolean(state.startAdornment || state.filled || state.focused)
            }),
            fullWidth: fullWidth,
            inputComponent: inputComponent,
            multiline: multiline,
            ref: ref,
            type: type
          }, other, {
            classes: _extends({}, classes, {
              notchedOutline: null
            })
          }));
        });
        OutlinedInput.muiName = 'Input';
        const OutlinedInput$1 = exports('a4', OutlinedInput);
        function getSelectUtilityClasses(slot) {
          return generateUtilityClass('MuiSelect', slot);
        }
        const selectClasses = generateUtilityClasses('MuiSelect', ['select', 'multiple', 'filled', 'outlined', 'standard', 'disabled', 'focused', 'icon', 'iconOpen', 'iconFilled', 'iconOutlined', 'iconStandard', 'nativeInput', 'error']);
        const selectClasses$1 = selectClasses;
        var _span;
        const _excluded$3 = ["aria-describedby", "aria-label", "autoFocus", "autoWidth", "children", "className", "defaultOpen", "defaultValue", "disabled", "displayEmpty", "error", "IconComponent", "inputRef", "labelId", "MenuProps", "multiple", "name", "onBlur", "onChange", "onClose", "onFocus", "onOpen", "open", "readOnly", "renderValue", "SelectDisplayProps", "tabIndex", "type", "value", "variant"];
        const SelectSelect = styled$1('div', {
          name: 'MuiSelect',
          slot: 'Select',
          overridesResolver: (props, styles) => {
            const {
              ownerState
            } = props;
            return [
            // Win specificity over the input base
            {
              [`&.${selectClasses$1.select}`]: styles.select
            }, {
              [`&.${selectClasses$1.select}`]: styles[ownerState.variant]
            }, {
              [`&.${selectClasses$1.error}`]: styles.error
            }, {
              [`&.${selectClasses$1.multiple}`]: styles.multiple
            }];
          }
        })(nativeSelectSelectStyles, {
          // Win specificity over the input base
          [`&.${selectClasses$1.select}`]: {
            height: 'auto',
            // Resets for multiple select with chips
            minHeight: '1.4375em',
            // Required for select\text-field height consistency
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
            overflow: 'hidden'
          }
        });
        const SelectIcon = styled$1('svg', {
          name: 'MuiSelect',
          slot: 'Icon',
          overridesResolver: (props, styles) => {
            const {
              ownerState
            } = props;
            return [styles.icon, ownerState.variant && styles[`icon${capitalize(ownerState.variant)}`], ownerState.open && styles.iconOpen];
          }
        })(nativeSelectIconStyles);
        const SelectNativeInput = styled$1('input', {
          shouldForwardProp: prop => slotShouldForwardProp(prop) && prop !== 'classes',
          name: 'MuiSelect',
          slot: 'NativeInput',
          overridesResolver: (props, styles) => styles.nativeInput
        })({
          bottom: 0,
          left: 0,
          position: 'absolute',
          opacity: 0,
          pointerEvents: 'none',
          width: '100%',
          boxSizing: 'border-box'
        });
        function areEqualValues(a, b) {
          if (typeof b === 'object' && b !== null) {
            return a === b;
          }

          // The value could be a number, the DOM will stringify it anyway.
          return String(a) === String(b);
        }
        function isEmpty(display) {
          return display == null || typeof display === 'string' && !display.trim();
        }
        const useUtilityClasses$3 = ownerState => {
          const {
            classes,
            variant,
            disabled,
            multiple,
            open,
            error
          } = ownerState;
          const slots = {
            select: ['select', variant, disabled && 'disabled', multiple && 'multiple', error && 'error'],
            icon: ['icon', `icon${capitalize(variant)}`, open && 'iconOpen', disabled && 'disabled'],
            nativeInput: ['nativeInput']
          };
          return composeClasses(slots, getSelectUtilityClasses, classes);
        };

        /**
         * @ignore - internal component.
         */
        const SelectInput = /*#__PURE__*/reactExports.forwardRef(function SelectInput(props, ref) {
          const {
              'aria-describedby': ariaDescribedby,
              'aria-label': ariaLabel,
              autoFocus,
              autoWidth,
              children,
              className,
              defaultOpen,
              defaultValue,
              disabled,
              displayEmpty,
              error = false,
              IconComponent,
              inputRef: inputRefProp,
              labelId,
              MenuProps = {},
              multiple,
              name,
              onBlur,
              onChange,
              onClose,
              onFocus,
              onOpen,
              open: openProp,
              readOnly,
              renderValue,
              SelectDisplayProps = {},
              tabIndex: tabIndexProp,
              value: valueProp,
              variant = 'standard'
            } = props,
            other = _objectWithoutPropertiesLoose(props, _excluded$3);
          const [value, setValueState] = useControlled({
            controlled: valueProp,
            default: defaultValue,
            name: 'Select'
          });
          const [openState, setOpenState] = useControlled({
            controlled: openProp,
            default: defaultOpen,
            name: 'Select'
          });
          const inputRef = reactExports.useRef(null);
          const displayRef = reactExports.useRef(null);
          const [displayNode, setDisplayNode] = reactExports.useState(null);
          const {
            current: isOpenControlled
          } = reactExports.useRef(openProp != null);
          const [menuMinWidthState, setMenuMinWidthState] = reactExports.useState();
          const handleRef = useForkRef(ref, inputRefProp);
          const handleDisplayRef = reactExports.useCallback(node => {
            displayRef.current = node;
            if (node) {
              setDisplayNode(node);
            }
          }, []);
          const anchorElement = displayNode == null ? void 0 : displayNode.parentNode;
          reactExports.useImperativeHandle(handleRef, () => ({
            focus: () => {
              displayRef.current.focus();
            },
            node: inputRef.current,
            value
          }), [value]);

          // Resize menu on `defaultOpen` automatic toggle.
          reactExports.useEffect(() => {
            if (defaultOpen && openState && displayNode && !isOpenControlled) {
              setMenuMinWidthState(autoWidth ? null : anchorElement.clientWidth);
              displayRef.current.focus();
            }
            // eslint-disable-next-line react-hooks/exhaustive-deps
          }, [displayNode, autoWidth]);
          // `isOpenControlled` is ignored because the component should never switch between controlled and uncontrolled modes.
          // `defaultOpen` and `openState` are ignored to avoid unnecessary callbacks.
          reactExports.useEffect(() => {
            if (autoFocus) {
              displayRef.current.focus();
            }
          }, [autoFocus]);
          reactExports.useEffect(() => {
            if (!labelId) {
              return undefined;
            }
            const label = ownerDocument(displayRef.current).getElementById(labelId);
            if (label) {
              const handler = () => {
                if (getSelection().isCollapsed) {
                  displayRef.current.focus();
                }
              };
              label.addEventListener('click', handler);
              return () => {
                label.removeEventListener('click', handler);
              };
            }
            return undefined;
          }, [labelId]);
          const update = (open, event) => {
            if (open) {
              if (onOpen) {
                onOpen(event);
              }
            } else if (onClose) {
              onClose(event);
            }
            if (!isOpenControlled) {
              setMenuMinWidthState(autoWidth ? null : anchorElement.clientWidth);
              setOpenState(open);
            }
          };
          const handleMouseDown = event => {
            // Ignore everything but left-click
            if (event.button !== 0) {
              return;
            }
            // Hijack the default focus behavior.
            event.preventDefault();
            displayRef.current.focus();
            update(true, event);
          };
          const handleClose = event => {
            update(false, event);
          };
          const childrenArray = reactExports.Children.toArray(children);

          // Support autofill.
          const handleChange = event => {
            const index = childrenArray.map(child => child.props.value).indexOf(event.target.value);
            if (index === -1) {
              return;
            }
            const child = childrenArray[index];
            setValueState(child.props.value);
            if (onChange) {
              onChange(event, child);
            }
          };
          const handleItemClick = child => event => {
            let newValue;

            // We use the tabindex attribute to signal the available options.
            if (!event.currentTarget.hasAttribute('tabindex')) {
              return;
            }
            if (multiple) {
              newValue = Array.isArray(value) ? value.slice() : [];
              const itemIndex = value.indexOf(child.props.value);
              if (itemIndex === -1) {
                newValue.push(child.props.value);
              } else {
                newValue.splice(itemIndex, 1);
              }
            } else {
              newValue = child.props.value;
            }
            if (child.props.onClick) {
              child.props.onClick(event);
            }
            if (value !== newValue) {
              setValueState(newValue);
              if (onChange) {
                // Redefine target to allow name and value to be read.
                // This allows seamless integration with the most popular form libraries.
                // https://github.com/mui/material-ui/issues/13485#issuecomment-676048492
                // Clone the event to not override `target` of the original event.
                const nativeEvent = event.nativeEvent || event;
                const clonedEvent = new nativeEvent.constructor(nativeEvent.type, nativeEvent);
                Object.defineProperty(clonedEvent, 'target', {
                  writable: true,
                  value: {
                    value: newValue,
                    name
                  }
                });
                onChange(clonedEvent, child);
              }
            }
            if (!multiple) {
              update(false, event);
            }
          };
          const handleKeyDown = event => {
            if (!readOnly) {
              const validKeys = [' ', 'ArrowUp', 'ArrowDown',
              // The native select doesn't respond to enter on macOS, but it's recommended by
              // https://www.w3.org/WAI/ARIA/apg/patterns/combobox/examples/combobox-select-only/
              'Enter'];
              if (validKeys.indexOf(event.key) !== -1) {
                event.preventDefault();
                update(true, event);
              }
            }
          };
          const open = displayNode !== null && openState;
          const handleBlur = event => {
            // if open event.stopImmediatePropagation
            if (!open && onBlur) {
              // Preact support, target is read only property on a native event.
              Object.defineProperty(event, 'target', {
                writable: true,
                value: {
                  value,
                  name
                }
              });
              onBlur(event);
            }
          };
          delete other['aria-invalid'];
          let display;
          let displaySingle;
          const displayMultiple = [];
          let computeDisplay = false;

          // No need to display any value if the field is empty.
          if (isFilled({
            value
          }) || displayEmpty) {
            if (renderValue) {
              display = renderValue(value);
            } else {
              computeDisplay = true;
            }
          }
          const items = childrenArray.map(child => {
            if (! /*#__PURE__*/reactExports.isValidElement(child)) {
              return null;
            }
            let selected;
            if (multiple) {
              if (!Array.isArray(value)) {
                throw new Error(formatMuiErrorMessage(2));
              }
              selected = value.some(v => areEqualValues(v, child.props.value));
              if (selected && computeDisplay) {
                displayMultiple.push(child.props.children);
              }
            } else {
              selected = areEqualValues(value, child.props.value);
              if (selected && computeDisplay) {
                displaySingle = child.props.children;
              }
            }
            return /*#__PURE__*/reactExports.cloneElement(child, {
              'aria-selected': selected ? 'true' : 'false',
              onClick: handleItemClick(child),
              onKeyUp: event => {
                if (event.key === ' ') {
                  // otherwise our MenuItems dispatches a click event
                  // it's not behavior of the native <option> and causes
                  // the select to close immediately since we open on space keydown
                  event.preventDefault();
                }
                if (child.props.onKeyUp) {
                  child.props.onKeyUp(event);
                }
              },
              role: 'option',
              selected,
              value: undefined,
              // The value is most likely not a valid HTML attribute.
              'data-value': child.props.value // Instead, we provide it as a data attribute.
            });
          });

          if (computeDisplay) {
            if (multiple) {
              if (displayMultiple.length === 0) {
                display = null;
              } else {
                display = displayMultiple.reduce((output, child, index) => {
                  output.push(child);
                  if (index < displayMultiple.length - 1) {
                    output.push(', ');
                  }
                  return output;
                }, []);
              }
            } else {
              display = displaySingle;
            }
          }

          // Avoid performing a layout computation in the render method.
          let menuMinWidth = menuMinWidthState;
          if (!autoWidth && isOpenControlled && displayNode) {
            menuMinWidth = anchorElement.clientWidth;
          }
          let tabIndex;
          if (typeof tabIndexProp !== 'undefined') {
            tabIndex = tabIndexProp;
          } else {
            tabIndex = disabled ? null : 0;
          }
          const buttonId = SelectDisplayProps.id || (name ? `mui-component-select-${name}` : undefined);
          const ownerState = _extends({}, props, {
            variant,
            value,
            open,
            error
          });
          const classes = useUtilityClasses$3(ownerState);
          return /*#__PURE__*/jsxRuntimeExports.jsxs(reactExports.Fragment, {
            children: [/*#__PURE__*/jsxRuntimeExports.jsx(SelectSelect, _extends({
              ref: handleDisplayRef,
              tabIndex: tabIndex,
              role: "button",
              "aria-disabled": disabled ? 'true' : undefined,
              "aria-expanded": open ? 'true' : 'false',
              "aria-haspopup": "listbox",
              "aria-label": ariaLabel,
              "aria-labelledby": [labelId, buttonId].filter(Boolean).join(' ') || undefined,
              "aria-describedby": ariaDescribedby,
              onKeyDown: handleKeyDown,
              onMouseDown: disabled || readOnly ? null : handleMouseDown,
              onBlur: handleBlur,
              onFocus: onFocus
            }, SelectDisplayProps, {
              ownerState: ownerState,
              className: clsx(SelectDisplayProps.className, classes.select, className)
              // The id is required for proper a11y
              ,

              id: buttonId,
              children: isEmpty(display) ?
              // notranslate needed while Google Translate will not fix zero-width space issue
              _span || (_span = /*#__PURE__*/jsxRuntimeExports.jsx("span", {
                className: "notranslate",
                children: "\u200B"
              })) : display
            })), /*#__PURE__*/jsxRuntimeExports.jsx(SelectNativeInput, _extends({
              "aria-invalid": error,
              value: Array.isArray(value) ? value.join(',') : value,
              name: name,
              ref: inputRef,
              "aria-hidden": true,
              onChange: handleChange,
              tabIndex: -1,
              disabled: disabled,
              className: classes.nativeInput,
              autoFocus: autoFocus,
              ownerState: ownerState
            }, other)), /*#__PURE__*/jsxRuntimeExports.jsx(SelectIcon, {
              as: IconComponent,
              className: classes.icon,
              ownerState: ownerState
            }), /*#__PURE__*/jsxRuntimeExports.jsx(Menu$1, _extends({
              id: `menu-${name || ''}`,
              anchorEl: anchorElement,
              open: open,
              onClose: handleClose,
              anchorOrigin: {
                vertical: 'bottom',
                horizontal: 'center'
              },
              transformOrigin: {
                vertical: 'top',
                horizontal: 'center'
              }
            }, MenuProps, {
              MenuListProps: _extends({
                'aria-labelledby': labelId,
                role: 'listbox',
                disableListWrap: true
              }, MenuProps.MenuListProps),
              PaperProps: _extends({}, MenuProps.PaperProps, {
                style: _extends({
                  minWidth: menuMinWidth
                }, MenuProps.PaperProps != null ? MenuProps.PaperProps.style : null)
              }),
              children: items
            }))]
          });
        });
        const SelectInput$1 = SelectInput;
        const _excluded$2 = ["autoWidth", "children", "classes", "className", "defaultOpen", "displayEmpty", "IconComponent", "id", "input", "inputProps", "label", "labelId", "MenuProps", "multiple", "native", "onClose", "onOpen", "open", "renderValue", "SelectDisplayProps", "variant"];
        const useUtilityClasses$2 = ownerState => {
          const {
            classes
          } = ownerState;
          return classes;
        };
        const styledRootConfig = {
          name: 'MuiSelect',
          overridesResolver: (props, styles) => styles.root,
          shouldForwardProp: prop => rootShouldForwardProp(prop) && prop !== 'variant',
          slot: 'Root'
        };
        const StyledInput = styled$1(Input$1, styledRootConfig)('');
        const StyledOutlinedInput = styled$1(OutlinedInput$1, styledRootConfig)('');
        const StyledFilledInput = styled$1(FilledInput$1, styledRootConfig)('');
        const Select = /*#__PURE__*/reactExports.forwardRef(function Select(inProps, ref) {
          const props = useThemeProps({
            name: 'MuiSelect',
            props: inProps
          });
          const {
              autoWidth = false,
              children,
              classes: classesProp = {},
              className,
              defaultOpen = false,
              displayEmpty = false,
              IconComponent = ArrowDropDownIcon,
              id,
              input,
              inputProps,
              label,
              labelId,
              MenuProps,
              multiple = false,
              native = false,
              onClose,
              onOpen,
              open,
              renderValue,
              SelectDisplayProps,
              variant: variantProp = 'outlined'
            } = props,
            other = _objectWithoutPropertiesLoose(props, _excluded$2);
          const inputComponent = native ? NativeSelectInput$1 : SelectInput$1;
          const muiFormControl = useFormControl();
          const fcs = formControlState({
            props,
            muiFormControl,
            states: ['variant', 'error']
          });
          const variant = fcs.variant || variantProp;
          const ownerState = _extends({}, props, {
            variant,
            classes: classesProp
          });
          const classes = useUtilityClasses$2(ownerState);
          const InputComponent = input || {
            standard: /*#__PURE__*/jsxRuntimeExports.jsx(StyledInput, {
              ownerState: ownerState
            }),
            outlined: /*#__PURE__*/jsxRuntimeExports.jsx(StyledOutlinedInput, {
              label: label,
              ownerState: ownerState
            }),
            filled: /*#__PURE__*/jsxRuntimeExports.jsx(StyledFilledInput, {
              ownerState: ownerState
            })
          }[variant];
          const inputComponentRef = useForkRef(ref, InputComponent.ref);
          return /*#__PURE__*/jsxRuntimeExports.jsx(reactExports.Fragment, {
            children: /*#__PURE__*/reactExports.cloneElement(InputComponent, _extends({
              // Most of the logic is implemented in `SelectInput`.
              // The `Select` component is a simple API wrapper to expose something better to play with.
              inputComponent,
              inputProps: _extends({
                children,
                error: fcs.error,
                IconComponent,
                variant,
                type: undefined,
                // We render a select. We can ignore the type provided by the `Input`.
                multiple
              }, native ? {
                id
              } : {
                autoWidth,
                defaultOpen,
                displayEmpty,
                labelId,
                MenuProps,
                onClose,
                onOpen,
                open,
                renderValue,
                SelectDisplayProps: _extends({
                  id
                }, SelectDisplayProps)
              }, inputProps, {
                classes: inputProps ? deepmerge(classes, inputProps.classes) : classes
              }, input ? input.props.inputProps : {})
            }, multiple && native && variant === 'outlined' ? {
              notched: true
            } : {}, {
              ref: inputComponentRef,
              className: clsx(InputComponent.props.className, className)
            }, !input && {
              variant
            }, other))
          });
        });
        Select.muiName = 'Select';
        const Select$1 = exports('c', Select);
        function getSnackbarContentUtilityClass(slot) {
          return generateUtilityClass('MuiSnackbarContent', slot);
        }
        generateUtilityClasses('MuiSnackbarContent', ['root', 'message', 'action']);
        const _excluded$1 = ["action", "className", "message", "role"];
        const useUtilityClasses$1 = ownerState => {
          const {
            classes
          } = ownerState;
          const slots = {
            root: ['root'],
            action: ['action'],
            message: ['message']
          };
          return composeClasses(slots, getSnackbarContentUtilityClass, classes);
        };
        const SnackbarContentRoot = styled$1(Paper$1, {
          name: 'MuiSnackbarContent',
          slot: 'Root',
          overridesResolver: (props, styles) => styles.root
        })(({
          theme
        }) => {
          const emphasis = theme.palette.mode === 'light' ? 0.8 : 0.98;
          const backgroundColor = emphasize(theme.palette.background.default, emphasis);
          return _extends({}, theme.typography.body2, {
            color: theme.vars ? theme.vars.palette.SnackbarContent.color : theme.palette.getContrastText(backgroundColor),
            backgroundColor: theme.vars ? theme.vars.palette.SnackbarContent.bg : backgroundColor,
            display: 'flex',
            alignItems: 'center',
            flexWrap: 'wrap',
            padding: '6px 16px',
            borderRadius: (theme.vars || theme).shape.borderRadius,
            flexGrow: 1,
            [theme.breakpoints.up('sm')]: {
              flexGrow: 'initial',
              minWidth: 288
            }
          });
        });
        const SnackbarContentMessage = styled$1('div', {
          name: 'MuiSnackbarContent',
          slot: 'Message',
          overridesResolver: (props, styles) => styles.message
        })({
          padding: '8px 0'
        });
        const SnackbarContentAction = styled$1('div', {
          name: 'MuiSnackbarContent',
          slot: 'Action',
          overridesResolver: (props, styles) => styles.action
        })({
          display: 'flex',
          alignItems: 'center',
          marginLeft: 'auto',
          paddingLeft: 16,
          marginRight: -8
        });
        const SnackbarContent = /*#__PURE__*/reactExports.forwardRef(function SnackbarContent(inProps, ref) {
          const props = useThemeProps({
            props: inProps,
            name: 'MuiSnackbarContent'
          });
          const {
              action,
              className,
              message,
              role = 'alert'
            } = props,
            other = _objectWithoutPropertiesLoose(props, _excluded$1);
          const ownerState = props;
          const classes = useUtilityClasses$1(ownerState);
          return /*#__PURE__*/jsxRuntimeExports.jsxs(SnackbarContentRoot, _extends({
            role: role,
            square: true,
            elevation: 6,
            className: clsx(classes.root, className),
            ownerState: ownerState,
            ref: ref
          }, other, {
            children: [/*#__PURE__*/jsxRuntimeExports.jsx(SnackbarContentMessage, {
              className: classes.message,
              ownerState: ownerState,
              children: message
            }), action ? /*#__PURE__*/jsxRuntimeExports.jsx(SnackbarContentAction, {
              className: classes.action,
              ownerState: ownerState,
              children: action
            }) : null]
          }));
        });
        const SnackbarContent$1 = SnackbarContent;
        function getSnackbarUtilityClass(slot) {
          return generateUtilityClass('MuiSnackbar', slot);
        }
        generateUtilityClasses('MuiSnackbar', ['root', 'anchorOriginTopCenter', 'anchorOriginBottomCenter', 'anchorOriginTopRight', 'anchorOriginBottomRight', 'anchorOriginTopLeft', 'anchorOriginBottomLeft']);
        const _excluded = ["onEnter", "onExited"],
          _excluded2 = ["action", "anchorOrigin", "autoHideDuration", "children", "className", "ClickAwayListenerProps", "ContentProps", "disableWindowBlurListener", "message", "onBlur", "onClose", "onFocus", "onMouseEnter", "onMouseLeave", "open", "resumeHideDuration", "TransitionComponent", "transitionDuration", "TransitionProps"];
        const useUtilityClasses = ownerState => {
          const {
            classes,
            anchorOrigin
          } = ownerState;
          const slots = {
            root: ['root', `anchorOrigin${capitalize(anchorOrigin.vertical)}${capitalize(anchorOrigin.horizontal)}`]
          };
          return composeClasses(slots, getSnackbarUtilityClass, classes);
        };
        const SnackbarRoot = styled$1('div', {
          name: 'MuiSnackbar',
          slot: 'Root',
          overridesResolver: (props, styles) => {
            const {
              ownerState
            } = props;
            return [styles.root, styles[`anchorOrigin${capitalize(ownerState.anchorOrigin.vertical)}${capitalize(ownerState.anchorOrigin.horizontal)}`]];
          }
        })(({
          theme,
          ownerState
        }) => {
          const center = {
            left: '50%',
            right: 'auto',
            transform: 'translateX(-50%)'
          };
          return _extends({
            zIndex: (theme.vars || theme).zIndex.snackbar,
            position: 'fixed',
            display: 'flex',
            left: 8,
            right: 8,
            justifyContent: 'center',
            alignItems: 'center'
          }, ownerState.anchorOrigin.vertical === 'top' ? {
            top: 8
          } : {
            bottom: 8
          }, ownerState.anchorOrigin.horizontal === 'left' && {
            justifyContent: 'flex-start'
          }, ownerState.anchorOrigin.horizontal === 'right' && {
            justifyContent: 'flex-end'
          }, {
            [theme.breakpoints.up('sm')]: _extends({}, ownerState.anchorOrigin.vertical === 'top' ? {
              top: 24
            } : {
              bottom: 24
            }, ownerState.anchorOrigin.horizontal === 'center' && center, ownerState.anchorOrigin.horizontal === 'left' && {
              left: 24,
              right: 'auto'
            }, ownerState.anchorOrigin.horizontal === 'right' && {
              right: 24,
              left: 'auto'
            })
          });
        });
        const Snackbar = /*#__PURE__*/reactExports.forwardRef(function Snackbar(inProps, ref) {
          const props = useThemeProps({
            props: inProps,
            name: 'MuiSnackbar'
          });
          const theme = useTheme();
          const defaultTransitionDuration = {
            enter: theme.transitions.duration.enteringScreen,
            exit: theme.transitions.duration.leavingScreen
          };
          const {
              action,
              anchorOrigin: {
                vertical,
                horizontal
              } = {
                vertical: 'bottom',
                horizontal: 'left'
              },
              autoHideDuration = null,
              children,
              className,
              ClickAwayListenerProps,
              ContentProps,
              disableWindowBlurListener = false,
              message,
              open,
              TransitionComponent = Grow$1,
              transitionDuration = defaultTransitionDuration,
              TransitionProps: {
                onEnter,
                onExited
              } = {}
            } = props,
            TransitionProps = _objectWithoutPropertiesLoose(props.TransitionProps, _excluded),
            other = _objectWithoutPropertiesLoose(props, _excluded2);
          const ownerState = _extends({}, props, {
            anchorOrigin: {
              vertical,
              horizontal
            },
            autoHideDuration,
            disableWindowBlurListener,
            TransitionComponent,
            transitionDuration
          });
          const classes = useUtilityClasses(ownerState);
          const {
            getRootProps,
            onClickAway
          } = useSnackbar(_extends({}, ownerState, {
            ref
          }));
          const [exited, setExited] = reactExports.useState(true);
          const rootProps = useSlotProps({
            elementType: SnackbarRoot,
            getSlotProps: getRootProps,
            externalForwardedProps: other,
            ownerState,
            className: [classes.root, className]
          });
          const handleExited = node => {
            setExited(true);
            if (onExited) {
              onExited(node);
            }
          };
          const handleEnter = (node, isAppearing) => {
            setExited(false);
            if (onEnter) {
              onEnter(node, isAppearing);
            }
          };

          // So we only render active snackbars.
          if (!open && exited) {
            return null;
          }
          return /*#__PURE__*/jsxRuntimeExports.jsx(ClickAwayListener, _extends({
            onClickAway: onClickAway
          }, ClickAwayListenerProps, {
            children: /*#__PURE__*/jsxRuntimeExports.jsx(SnackbarRoot, _extends({}, rootProps, {
              children: /*#__PURE__*/jsxRuntimeExports.jsx(TransitionComponent, _extends({
                appear: true,
                in: open,
                timeout: transitionDuration,
                direction: vertical === 'top' ? 'down' : 'up',
                onEnter: handleEnter,
                onExited: handleExited
              }, TransitionProps, {
                children: children || /*#__PURE__*/jsxRuntimeExports.jsx(SnackbarContent$1, _extends({
                  message: message,
                  action: action
                }, ContentProps))
              }))
            }))
          }));
        });
        const Snackbar$1 = exports('S', Snackbar);
        const rtlLanguage = exports('r', ["ar"]);
        const setDocumentLang = exports('s', lang => {
          const dir = rtlLanguage.includes(lang) ? "rtl" : "ltr";
          document.documentElement.setAttribute("lang", lang);
          document.dir = dir;
        });
      }
    };
  });
})();
