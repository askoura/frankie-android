;
(function () {
  var _templateObject, _templateObject2, _templateObject3, _templateObject4;
  function _defineProperty2(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
  function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray2(arr) || _nonIterableSpread(); }
  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
  function _slicedToArray2(arr, i) { return _arrayWithHoles2(arr) || _iterableToArrayLimit2(arr, i) || _unsupportedIterableToArray2(arr, i) || _nonIterableRest2(); }
  function _nonIterableRest2() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
  function _unsupportedIterableToArray2(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
  function _iterableToArrayLimit2(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
  function _arrayWithHoles2(arr) { if (Array.isArray(arr)) return arr; }
  System.register(['./index-legacy-bc4d1445.js'], function (exports, module) {
    'use strict';

    var _arrayWithHoles, _unsupportedIterableToArray, _nonIterableRest, reactExports, I18nContext, ReportNamespaces, getDefaults, _defineProperty, getI18n, _extends, clsx, _objectWithoutPropertiesLoose, useForkRef, useEventCallback, ownerDocument, jsxRuntimeExports, useEnhancedEffect, setRef, reactDomExports, ownerWindow, generateUtilityClass, generateUtilityClasses, createChainedFunction, composeClasses, debounce, Global, useTheme$1, defaultSxConfig, isPlainObject, styled, styleFunctionSx, THEME_ID, defaultTheme$1, React, _inheritsLoose, ReactDOM, _assertThisInitialized, styled$1, alpha, useThemeProps, keyframes, useIsFocusVisible, capitalize, createSvgIcon, darken, lighten, formatMuiErrorMessage, createTheme, ClassNameGenerator, rootShouldForwardProp, resolveProps, useId, deepmerge, slotShouldForwardProp, useControlled, emphasize;
    return {
      setters: [function (module) {
        _arrayWithHoles = module.bV;
        _unsupportedIterableToArray = module.bf;
        _nonIterableRest = module.bW;
        reactExports = module.r;
        I18nContext = module.aB;
        ReportNamespaces = module.bX;
        getDefaults = module.aC;
        _defineProperty = module.aD;
        getI18n = module.aF;
        _extends = module.t;
        clsx = module.A;
        _objectWithoutPropertiesLoose = module._;
        useForkRef = module.Y;
        useEventCallback = module.aI;
        ownerDocument = module.aJ;
        jsxRuntimeExports = module.j;
        useEnhancedEffect = module.aH;
        setRef = module.aK;
        reactDomExports = module.aM;
        ownerWindow = module.$;
        generateUtilityClass = module.w;
        generateUtilityClasses = module.v;
        createChainedFunction = module.bN;
        composeClasses = module.B;
        debounce = module.Z;
        Global = module.bY;
        useTheme$1 = module.a9;
        defaultSxConfig = module.bZ;
        isPlainObject = module.b_;
        styled = module.b$;
        styleFunctionSx = module.c0;
        THEME_ID = module.bM;
        defaultTheme$1 = module.c1;
        React = module.R;
        _inheritsLoose = module.bR;
        ReactDOM = module.c2;
        _assertThisInitialized = module.bk;
        styled$1 = module.x;
        alpha = module.ax;
        useThemeProps = module.y;
        keyframes = module.c3;
        useIsFocusVisible = module.ay;
        capitalize = module.X;
        createSvgIcon = module.c;
        darken = module.aA;
        lighten = module.az;
        formatMuiErrorMessage = module.c4;
        createTheme = module.ap;
        ClassNameGenerator = module.c5;
        rootShouldForwardProp = module.a0;
        resolveProps = module.c6;
        useId = module.z;
        deepmerge = module.Q;
        slotShouldForwardProp = module.aL;
        useControlled = module.aG;
        emphasize = module.c7;
      }],
      execute: function execute() {
        var _styled$;
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
          var documentWidth = doc.documentElement.clientWidth;
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
        var defaultContextValue = {
          disableDefaultClasses: false
        };
        var ClassNameConfiguratorContext = /*#__PURE__*/reactExports.createContext(defaultContextValue);
        /**
         * @ignore - internal hook.
         *
         * Wraps the `generateUtilityClass` function and controls how the classes are generated.
         * Currently it only affects whether the classes are applied or not.
         *
         * @returns Function to be called with the `generateUtilityClass` function specific to a component to generate the classes.
         */
        function useClassNamesOverride(generateUtilityClass) {
          var _reactExports$useCont = reactExports.useContext(ClassNameConfiguratorContext),
            disableDefaultClasses = _reactExports$useCont.disableDefaultClasses;
          return function (slot) {
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
        function extractEventHandlers(object) {
          var excludeKeys = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
          if (object === undefined) {
            return {};
          }
          var result = {};
          Object.keys(object).filter(function (prop) {
            return prop.match(/^on[A-Z]/) && typeof object[prop] === 'function' && !excludeKeys.includes(prop);
          }).forEach(function (prop) {
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
          var result = {};
          Object.keys(object).filter(function (prop) {
            return !(prop.match(/^on[A-Z]/) && typeof object[prop] === 'function');
          }).forEach(function (prop) {
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
          var getSlotProps = parameters.getSlotProps,
            additionalProps = parameters.additionalProps,
            externalSlotProps = parameters.externalSlotProps,
            externalForwardedProps = parameters.externalForwardedProps,
            className = parameters.className;
          if (!getSlotProps) {
            // The simpler case - getSlotProps is not defined, so no internal event handlers are defined,
            // so we can simply merge all the props without having to worry about extracting event handlers.
            var _joinedClasses = clsx(externalForwardedProps == null ? void 0 : externalForwardedProps.className, externalSlotProps == null ? void 0 : externalSlotProps.className, className, additionalProps == null ? void 0 : additionalProps.className);
            var _mergedStyle = _extends({}, additionalProps == null ? void 0 : additionalProps.style, externalForwardedProps == null ? void 0 : externalForwardedProps.style, externalSlotProps == null ? void 0 : externalSlotProps.style);
            var _props = _extends({}, additionalProps, externalForwardedProps, externalSlotProps);
            if (_joinedClasses.length > 0) {
              _props.className = _joinedClasses;
            }
            if (Object.keys(_mergedStyle).length > 0) {
              _props.style = _mergedStyle;
            }
            return {
              props: _props,
              internalRef: undefined
            };
          }

          // In this case, getSlotProps is responsible for calling the external event handlers.
          // We don't need to include them in the merged props because of this.

          var eventHandlers = extractEventHandlers(_extends({}, externalForwardedProps, externalSlotProps));
          var componentsPropsWithoutEventHandlers = omitEventHandlers(externalSlotProps);
          var otherPropsWithoutEventHandlers = omitEventHandlers(externalForwardedProps);
          var internalSlotProps = getSlotProps(eventHandlers);

          // The order of classes is important here.
          // Emotion (that we use in libraries consuming Base UI) depends on this order
          // to properly override style. It requires the most important classes to be last
          // (see https://github.com/mui/material-ui/pull/33205) for the related discussion.
          var joinedClasses = clsx(internalSlotProps == null ? void 0 : internalSlotProps.className, additionalProps == null ? void 0 : additionalProps.className, className, externalForwardedProps == null ? void 0 : externalForwardedProps.className, externalSlotProps == null ? void 0 : externalSlotProps.className);
          var mergedStyle = _extends({}, internalSlotProps == null ? void 0 : internalSlotProps.style, additionalProps == null ? void 0 : additionalProps.style, externalForwardedProps == null ? void 0 : externalForwardedProps.style, externalSlotProps == null ? void 0 : externalSlotProps.style);
          var props = _extends({}, internalSlotProps, additionalProps, otherPropsWithoutEventHandlers, componentsPropsWithoutEventHandlers);
          if (joinedClasses.length > 0) {
            props.className = joinedClasses;
          }
          if (Object.keys(mergedStyle).length > 0) {
            props.style = mergedStyle;
          }
          return {
            props: props,
            internalRef: internalSlotProps.ref
          };
        }
        var _excluded$x = ["elementType", "externalSlotProps", "ownerState"];
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
          var elementType = parameters.elementType,
            externalSlotProps = parameters.externalSlotProps,
            ownerState = parameters.ownerState,
            rest = _objectWithoutPropertiesLoose(parameters, _excluded$x);
          var resolvedComponentsProps = resolveComponentProps(externalSlotProps, ownerState);
          var _mergeSlotProps = mergeSlotProps(_extends({}, rest, {
              externalSlotProps: resolvedComponentsProps
            })),
            mergedProps = _mergeSlotProps.props,
            internalRef = _mergeSlotProps.internalRef;
          var ref = useForkRef(internalRef, resolvedComponentsProps == null ? void 0 : resolvedComponentsProps.ref, (_parameters$additiona = parameters.additionalProps) == null ? void 0 : _parameters$additiona.ref);
          var props = appendOwnerState(elementType, _extends({}, mergedProps, {
            ref: ref
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
          var children = props.children,
            _props$disableReactTr = props.disableReactTree,
            disableReactTree = _props$disableReactTr === void 0 ? false : _props$disableReactTr,
            _props$mouseEvent = props.mouseEvent,
            mouseEvent = _props$mouseEvent === void 0 ? 'onClick' : _props$mouseEvent,
            onClickAway = props.onClickAway,
            _props$touchEvent = props.touchEvent,
            touchEvent = _props$touchEvent === void 0 ? 'onTouchEnd' : _props$touchEvent;
          var movedRef = reactExports.useRef(false);
          var nodeRef = reactExports.useRef(null);
          var activatedRef = reactExports.useRef(false);
          var syntheticEventRef = reactExports.useRef(false);
          reactExports.useEffect(function () {
            // Ensure that this component is not "activated" synchronously.
            // https://github.com/facebook/react/issues/20074
            setTimeout(function () {
              activatedRef.current = true;
            }, 0);
            return function () {
              activatedRef.current = false;
            };
          }, []);
          var handleRef = useForkRef(
          // @ts-expect-error TODO upstream fix
          children.ref, nodeRef);

          // The handler doesn't take event.defaultPrevented into account:
          //
          // event.preventDefault() is meant to stop default behaviors like
          // clicking a checkbox to check it, hitting a button to submit a form,
          // and hitting left arrow to move the cursor in a text input etc.
          // Only special HTML elements have these default behaviors.
          var handleClickAway = useEventCallback(function (event) {
            // Given developers can stop the propagation of the synthetic event,
            // we can only be confident with a positive value.
            var insideReactTree = syntheticEventRef.current;
            syntheticEventRef.current = false;
            var doc = ownerDocument(nodeRef.current);

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
            var insideDOM;

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
          var createHandleSynthetic = function createHandleSynthetic(handlerName) {
            return function (event) {
              syntheticEventRef.current = true;
              var childrenPropsHandler = children.props[handlerName];
              if (childrenPropsHandler) {
                childrenPropsHandler(event);
              }
            };
          };
          var childrenProps = {
            ref: handleRef
          };
          if (touchEvent !== false) {
            childrenProps[touchEvent] = createHandleSynthetic(touchEvent);
          }
          reactExports.useEffect(function () {
            if (touchEvent !== false) {
              var mappedTouchEvent = mapEventPropToEvent(touchEvent);
              var doc = ownerDocument(nodeRef.current);
              var handleTouchMove = function handleTouchMove() {
                movedRef.current = true;
              };
              doc.addEventListener(mappedTouchEvent, handleClickAway);
              doc.addEventListener('touchmove', handleTouchMove);
              return function () {
                doc.removeEventListener(mappedTouchEvent, handleClickAway);
                doc.removeEventListener('touchmove', handleTouchMove);
              };
            }
            return undefined;
          }, [handleClickAway, touchEvent]);
          if (mouseEvent !== false) {
            childrenProps[mouseEvent] = createHandleSynthetic(mouseEvent);
          }
          reactExports.useEffect(function () {
            if (mouseEvent !== false) {
              var mappedMouseEvent = mapEventPropToEvent(mouseEvent);
              var doc = ownerDocument(nodeRef.current);
              doc.addEventListener(mappedMouseEvent, handleClickAway);
              return function () {
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
        var candidatesSelector = ['input', 'select', 'textarea', 'a[href]', 'button', '[tabindex]', 'audio[controls]', 'video[controls]', '[contenteditable]:not([contenteditable="false"])'].join(',');
        function getTabIndex(node) {
          var tabindexAttr = parseInt(node.getAttribute('tabindex') || '', 10);
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
          var getRadio = function getRadio(selector) {
            return node.ownerDocument.querySelector("input[type=\"radio\"]".concat(selector));
          };
          var roving = getRadio("[name=\"".concat(node.name, "\"]:checked"));
          if (!roving) {
            roving = getRadio("[name=\"".concat(node.name, "\"]"));
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
          var regularTabNodes = [];
          var orderedTabNodes = [];
          Array.from(root.querySelectorAll(candidatesSelector)).forEach(function (node, i) {
            var nodeTabIndex = getTabIndex(node);
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
          return orderedTabNodes.sort(function (a, b) {
            return a.tabIndex === b.tabIndex ? a.documentOrder - b.documentOrder : a.tabIndex - b.tabIndex;
          }).map(function (a) {
            return a.node;
          }).concat(regularTabNodes);
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
          var children = props.children,
            _props$disableAutoFoc = props.disableAutoFocus,
            disableAutoFocus = _props$disableAutoFoc === void 0 ? false : _props$disableAutoFoc,
            _props$disableEnforce = props.disableEnforceFocus,
            disableEnforceFocus = _props$disableEnforce === void 0 ? false : _props$disableEnforce,
            _props$disableRestore = props.disableRestoreFocus,
            disableRestoreFocus = _props$disableRestore === void 0 ? false : _props$disableRestore,
            _props$getTabbable = props.getTabbable,
            getTabbable = _props$getTabbable === void 0 ? defaultGetTabbable : _props$getTabbable,
            _props$isEnabled = props.isEnabled,
            isEnabled = _props$isEnabled === void 0 ? defaultIsEnabled : _props$isEnabled,
            open = props.open;
          var ignoreNextEnforceFocus = reactExports.useRef(false);
          var sentinelStart = reactExports.useRef(null);
          var sentinelEnd = reactExports.useRef(null);
          var nodeToRestore = reactExports.useRef(null);
          var reactFocusEventTarget = reactExports.useRef(null);
          // This variable is useful when disableAutoFocus is true.
          // It waits for the active element to move into the component to activate.
          var activated = reactExports.useRef(false);
          var rootRef = reactExports.useRef(null);
          // @ts-expect-error TODO upstream fix
          var handleRef = useForkRef(children.ref, rootRef);
          var lastKeydown = reactExports.useRef(null);
          reactExports.useEffect(function () {
            // We might render an empty child.
            if (!open || !rootRef.current) {
              return;
            }
            activated.current = !disableAutoFocus;
          }, [disableAutoFocus, open]);
          reactExports.useEffect(function () {
            // We might render an empty child.
            if (!open || !rootRef.current) {
              return;
            }
            var doc = ownerDocument(rootRef.current);
            if (!rootRef.current.contains(doc.activeElement)) {
              if (!rootRef.current.hasAttribute('tabIndex')) {
                rootRef.current.setAttribute('tabIndex', '-1');
              }
              if (activated.current) {
                rootRef.current.focus();
              }
            }
            return function () {
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
          reactExports.useEffect(function () {
            // We might render an empty child.
            if (!open || !rootRef.current) {
              return;
            }
            var doc = ownerDocument(rootRef.current);
            var contain = function contain(nativeEvent) {
              var rootElement = rootRef.current;

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
                var tabbable = [];
                if (doc.activeElement === sentinelStart.current || doc.activeElement === sentinelEnd.current) {
                  tabbable = getTabbable(rootRef.current);
                }
                if (tabbable.length > 0) {
                  var _lastKeydown$current, _lastKeydown$current2;
                  var isShiftTab = Boolean(((_lastKeydown$current = lastKeydown.current) == null ? void 0 : _lastKeydown$current.shiftKey) && ((_lastKeydown$current2 = lastKeydown.current) == null ? void 0 : _lastKeydown$current2.key) === 'Tab');
                  var focusNext = tabbable[0];
                  var focusPrevious = tabbable[tabbable.length - 1];
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
            var loopFocus = function loopFocus(nativeEvent) {
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
            var interval = setInterval(function () {
              if (doc.activeElement && doc.activeElement.tagName === 'BODY') {
                contain(null);
              }
            }, 50);
            return function () {
              clearInterval(interval);
              doc.removeEventListener('focusin', contain);
              doc.removeEventListener('keydown', loopFocus, true);
            };
          }, [disableAutoFocus, disableEnforceFocus, disableRestoreFocus, isEnabled, open, getTabbable]);
          var onFocus = function onFocus(event) {
            if (nodeToRestore.current === null) {
              nodeToRestore.current = event.relatedTarget;
            }
            activated.current = true;
            reactFocusEventTarget.current = event.target;
            var childrenPropsHandler = children.props.onFocus;
            if (childrenPropsHandler) {
              childrenPropsHandler(event);
            }
          };
          var handleFocusSentinel = function handleFocusSentinel(event) {
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
              onFocus: onFocus
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
        var Portal = /*#__PURE__*/reactExports.forwardRef(function Portal(props, ref) {
          var children = props.children,
            container = props.container,
            _props$disablePortal = props.disablePortal,
            disablePortal = _props$disablePortal === void 0 ? false : _props$disablePortal;
          var _reactExports$useStat = reactExports.useState(null),
            _reactExports$useStat2 = _slicedToArray2(_reactExports$useStat, 2),
            mountNode = _reactExports$useStat2[0],
            setMountNode = _reactExports$useStat2[1];
          // @ts-expect-error TODO upstream fix
          var handleRef = useForkRef( /*#__PURE__*/reactExports.isValidElement(children) ? children.ref : null, ref);
          useEnhancedEffect(function () {
            if (!disablePortal) {
              setMountNode(getContainer$1(container) || document.body);
            }
          }, [container, disablePortal]);
          useEnhancedEffect(function () {
            if (mountNode && !disablePortal) {
              setRef(ref, mountNode);
              return function () {
                setRef(ref, null);
              };
            }
            return undefined;
          }, [ref, mountNode, disablePortal]);
          if (disablePortal) {
            if ( /*#__PURE__*/reactExports.isValidElement(children)) {
              var newProps = {
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
        var Portal$1 = exports('U', Portal);

        // Is a vertical scrollbar displayed?
        function isOverflowing(container) {
          var doc = ownerDocument(container);
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
          var forbiddenTagNames = ['TEMPLATE', 'SCRIPT', 'STYLE', 'LINK', 'MAP', 'META', 'NOSCRIPT', 'PICTURE', 'COL', 'COLGROUP', 'PARAM', 'SLOT', 'SOURCE', 'TRACK'];
          var isForbiddenTagName = forbiddenTagNames.indexOf(element.tagName) !== -1;
          var isInputHidden = element.tagName === 'INPUT' && element.getAttribute('type') === 'hidden';
          return isForbiddenTagName || isInputHidden;
        }
        function ariaHiddenSiblings(container, mountElement, currentElement, elementsToExclude, show) {
          var blacklist = [mountElement, currentElement].concat(_toConsumableArray(elementsToExclude));
          [].forEach.call(container.children, function (element) {
            var isNotExcludedElement = blacklist.indexOf(element) === -1;
            var isNotForbiddenElement = !isAriaHiddenForbiddenOnElement(element);
            if (isNotExcludedElement && isNotForbiddenElement) {
              ariaHidden(element, show);
            }
          });
        }
        function findIndexOf(items, callback) {
          var idx = -1;
          items.some(function (item, index) {
            if (callback(item)) {
              idx = index;
              return true;
            }
            return false;
          });
          return idx;
        }
        function handleContainer(containerInfo, props) {
          var restoreStyle = [];
          var container = containerInfo.container;
          if (!props.disableScrollLock) {
            if (isOverflowing(container)) {
              // Compute the size before applying overflow hidden to avoid any scroll jumps.
              var scrollbarSize = getScrollbarSize(ownerDocument(container));
              restoreStyle.push({
                value: container.style.paddingRight,
                property: 'padding-right',
                el: container
              });
              // Use computed style, here to get the real padding to add our scrollbar width.
              container.style.paddingRight = "".concat(getPaddingRight(container) + scrollbarSize, "px");

              // .mui-fixed is a global helper.
              var fixedElements = ownerDocument(container).querySelectorAll('.mui-fixed');
              [].forEach.call(fixedElements, function (element) {
                restoreStyle.push({
                  value: element.style.paddingRight,
                  property: 'padding-right',
                  el: element
                });
                element.style.paddingRight = "".concat(getPaddingRight(element) + scrollbarSize, "px");
              });
            }
            var scrollContainer;
            if (container.parentNode instanceof DocumentFragment) {
              scrollContainer = ownerDocument(container).body;
            } else {
              // Improve Gatsby support
              // https://css-tricks.com/snippets/css/force-vertical-scrollbar/
              var parent = container.parentElement;
              var containerWindow = ownerWindow(container);
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
          var restore = function restore() {
            restoreStyle.forEach(function (_ref4) {
              var value = _ref4.value,
                el = _ref4.el,
                property = _ref4.property;
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
          var hiddenSiblings = [];
          [].forEach.call(container.children, function (element) {
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
        var ModalManager = /*#__PURE__*/function () {
          function ModalManager() {
            _classCallCheck(this, ModalManager);
            this.containers = void 0;
            this.modals = void 0;
            this.modals = [];
            this.containers = [];
          }
          _createClass(ModalManager, [{
            key: "add",
            value: function add(modal, container) {
              var modalIndex = this.modals.indexOf(modal);
              if (modalIndex !== -1) {
                return modalIndex;
              }
              modalIndex = this.modals.length;
              this.modals.push(modal);

              // If the modal we are adding is already in the DOM.
              if (modal.modalRef) {
                ariaHidden(modal.modalRef, false);
              }
              var hiddenSiblings = getHiddenSiblings(container);
              ariaHiddenSiblings(container, modal.mount, modal.modalRef, hiddenSiblings, true);
              var containerIndex = findIndexOf(this.containers, function (item) {
                return item.container === container;
              });
              if (containerIndex !== -1) {
                this.containers[containerIndex].modals.push(modal);
                return modalIndex;
              }
              this.containers.push({
                modals: [modal],
                container: container,
                restore: null,
                hiddenSiblings: hiddenSiblings
              });
              return modalIndex;
            }
          }, {
            key: "mount",
            value: function mount(modal, props) {
              var containerIndex = findIndexOf(this.containers, function (item) {
                return item.modals.indexOf(modal) !== -1;
              });
              var containerInfo = this.containers[containerIndex];
              if (!containerInfo.restore) {
                containerInfo.restore = handleContainer(containerInfo, props);
              }
            }
          }, {
            key: "remove",
            value: function remove(modal) {
              var ariaHiddenState = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
              var modalIndex = this.modals.indexOf(modal);
              if (modalIndex === -1) {
                return modalIndex;
              }
              var containerIndex = findIndexOf(this.containers, function (item) {
                return item.modals.indexOf(modal) !== -1;
              });
              var containerInfo = this.containers[containerIndex];
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
                var nextTop = containerInfo.modals[containerInfo.modals.length - 1];
                // as soon as a modal is adding its modalRef is undefined. it can't set
                // aria-hidden because the dom element doesn't exist either
                // when modal was unmounted before modalRef gets null
                if (nextTop.modalRef) {
                  ariaHidden(nextTop.modalRef, false);
                }
              }
              return modalIndex;
            }
          }, {
            key: "isTopModal",
            value: function isTopModal(modal) {
              return this.modals.length > 0 && this.modals[this.modals.length - 1] === modal;
            }
          }]);
          return ModalManager;
        }();
        function getModalUtilityClass(slot) {
          return generateUtilityClass('MuiModal', slot);
        }
        generateUtilityClasses('MuiModal', ['root', 'hidden', 'backdrop']);
        var _excluded$w = ["children", "closeAfterTransition", "component", "container", "disableAutoFocus", "disableEnforceFocus", "disableEscapeKeyDown", "disablePortal", "disableRestoreFocus", "disableScrollLock", "hideBackdrop", "keepMounted", "manager", "onBackdropClick", "onClose", "onKeyDown", "open", "onTransitionEnter", "onTransitionExited", "slotProps", "slots"];
        var useUtilityClasses$n = function useUtilityClasses$n(ownerState) {
          var open = ownerState.open,
            exited = ownerState.exited;
          var slots = {
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
        var defaultManager = new ModalManager();

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
        var Modal$2 = /*#__PURE__*/reactExports.forwardRef(function Modal(props, forwardedRef) {
          var _props$ariaHidden, _ref;
          var children = props.children,
            _props$closeAfterTran = props.closeAfterTransition,
            closeAfterTransition = _props$closeAfterTran === void 0 ? false : _props$closeAfterTran,
            component = props.component,
            container = props.container,
            _props$disableAutoFoc2 = props.disableAutoFocus,
            disableAutoFocus = _props$disableAutoFoc2 === void 0 ? false : _props$disableAutoFoc2,
            _props$disableEnforce2 = props.disableEnforceFocus,
            disableEnforceFocus = _props$disableEnforce2 === void 0 ? false : _props$disableEnforce2,
            _props$disableEscapeK = props.disableEscapeKeyDown,
            disableEscapeKeyDown = _props$disableEscapeK === void 0 ? false : _props$disableEscapeK,
            _props$disablePortal2 = props.disablePortal,
            disablePortal = _props$disablePortal2 === void 0 ? false : _props$disablePortal2,
            _props$disableRestore2 = props.disableRestoreFocus,
            disableRestoreFocus = _props$disableRestore2 === void 0 ? false : _props$disableRestore2,
            _props$disableScrollL = props.disableScrollLock,
            disableScrollLock = _props$disableScrollL === void 0 ? false : _props$disableScrollL,
            _props$hideBackdrop = props.hideBackdrop,
            hideBackdrop = _props$hideBackdrop === void 0 ? false : _props$hideBackdrop,
            _props$keepMounted = props.keepMounted,
            keepMounted = _props$keepMounted === void 0 ? false : _props$keepMounted,
            _props$manager = props.manager,
            manager = _props$manager === void 0 ? defaultManager : _props$manager,
            onBackdropClick = props.onBackdropClick,
            onClose = props.onClose,
            onKeyDown = props.onKeyDown,
            open = props.open,
            onTransitionEnter = props.onTransitionEnter,
            onTransitionExited = props.onTransitionExited,
            _props$slotProps = props.slotProps,
            slotProps = _props$slotProps === void 0 ? {} : _props$slotProps,
            _props$slots = props.slots,
            slots = _props$slots === void 0 ? {} : _props$slots,
            other = _objectWithoutPropertiesLoose(props, _excluded$w);
          var _reactExports$useStat3 = reactExports.useState(!open),
            _reactExports$useStat4 = _slicedToArray2(_reactExports$useStat3, 2),
            exited = _reactExports$useStat4[0],
            setExited = _reactExports$useStat4[1];
          var modal = reactExports.useRef({});
          var mountNodeRef = reactExports.useRef(null);
          var modalRef = reactExports.useRef(null);
          var handleRef = useForkRef(modalRef, forwardedRef);
          var hasTransition = getHasTransition(children);
          var ariaHiddenProp = (_props$ariaHidden = props['aria-hidden']) != null ? _props$ariaHidden : true;
          var getDoc = function getDoc() {
            return ownerDocument(mountNodeRef.current);
          };
          var getModal = function getModal() {
            modal.current.modalRef = modalRef.current;
            modal.current.mountNode = mountNodeRef.current;
            return modal.current;
          };
          var handleMounted = function handleMounted() {
            manager.mount(getModal(), {
              disableScrollLock: disableScrollLock
            });

            // Fix a bug on Chrome where the scroll isn't initially 0.
            if (modalRef.current) {
              modalRef.current.scrollTop = 0;
            }
          };
          var handleOpen = useEventCallback(function () {
            var resolvedContainer = getContainer(container) || getDoc().body;
            manager.add(getModal(), resolvedContainer);

            // The element was already mounted.
            if (modalRef.current) {
              handleMounted();
            }
          });
          var isTopModal = reactExports.useCallback(function () {
            return manager.isTopModal(getModal());
          }, [manager]);
          var handlePortalRef = useEventCallback(function (node) {
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
          var handleClose = reactExports.useCallback(function () {
            manager.remove(getModal(), ariaHiddenProp);
          }, [manager, ariaHiddenProp]);
          reactExports.useEffect(function () {
            return function () {
              handleClose();
            };
          }, [handleClose]);
          reactExports.useEffect(function () {
            if (open) {
              handleOpen();
            } else if (!hasTransition || !closeAfterTransition) {
              handleClose();
            }
          }, [open, handleClose, hasTransition, closeAfterTransition, handleOpen]);
          var ownerState = _extends({}, props, {
            closeAfterTransition: closeAfterTransition,
            disableAutoFocus: disableAutoFocus,
            disableEnforceFocus: disableEnforceFocus,
            disableEscapeKeyDown: disableEscapeKeyDown,
            disablePortal: disablePortal,
            disableRestoreFocus: disableRestoreFocus,
            disableScrollLock: disableScrollLock,
            exited: exited,
            hideBackdrop: hideBackdrop,
            keepMounted: keepMounted
          });
          var classes = useUtilityClasses$n(ownerState);
          var handleEnter = function handleEnter() {
            setExited(false);
            if (onTransitionEnter) {
              onTransitionEnter();
            }
          };
          var handleExited = function handleExited() {
            setExited(true);
            if (onTransitionExited) {
              onTransitionExited();
            }
            if (closeAfterTransition) {
              handleClose();
            }
          };
          var handleBackdropClick = function handleBackdropClick(event) {
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
          var handleKeyDown = function handleKeyDown(event) {
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
          var childProps = {};
          if (children.props.tabIndex === undefined) {
            childProps.tabIndex = '-1';
          }

          // It's a Transition like component
          if (hasTransition) {
            childProps.onEnter = createChainedFunction(handleEnter, children.props.onEnter);
            childProps.onExited = createChainedFunction(handleExited, children.props.onExited);
          }
          var Root = (_ref = component != null ? component : slots.root) != null ? _ref : 'div';
          var rootProps = useSlotProps({
            elementType: Root,
            externalSlotProps: slotProps.root,
            externalForwardedProps: other,
            additionalProps: {
              ref: handleRef,
              role: 'presentation',
              onKeyDown: handleKeyDown
            },
            className: classes.root,
            ownerState: ownerState
          });
          var BackdropComponent = slots.backdrop;
          var backdropProps = useSlotProps({
            elementType: BackdropComponent,
            externalSlotProps: slotProps.backdrop,
            additionalProps: {
              'aria-hidden': true,
              onClick: handleBackdropClick,
              open: open
            },
            className: classes.backdrop,
            ownerState: ownerState
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
        var ModalUnstyled = Modal$2;

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
          var _parameters$autoHideD = parameters.autoHideDuration,
            autoHideDuration = _parameters$autoHideD === void 0 ? null : _parameters$autoHideD,
            _parameters$disableWi = parameters.disableWindowBlurListener,
            disableWindowBlurListener = _parameters$disableWi === void 0 ? false : _parameters$disableWi,
            onClose = parameters.onClose,
            open = parameters.open,
            ref = parameters.ref,
            resumeHideDuration = parameters.resumeHideDuration;
          var timerAutoHide = reactExports.useRef();
          reactExports.useEffect(function () {
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
            return function () {
              document.removeEventListener('keydown', handleKeyDown);
            };
          }, [open, onClose]);
          var handleClose = useEventCallback(function (event, reason) {
            onClose == null ? void 0 : onClose(event, reason);
          });
          var setAutoHideTimer = useEventCallback(function (autoHideDurationParam) {
            if (!onClose || autoHideDurationParam == null) {
              return;
            }
            clearTimeout(timerAutoHide.current);
            timerAutoHide.current = setTimeout(function () {
              handleClose(null, 'timeout');
            }, autoHideDurationParam);
          });
          reactExports.useEffect(function () {
            if (open) {
              setAutoHideTimer(autoHideDuration);
            }
            return function () {
              clearTimeout(timerAutoHide.current);
            };
          }, [open, autoHideDuration, setAutoHideTimer]);
          var handleClickAway = function handleClickAway(event) {
            onClose == null ? void 0 : onClose(event, 'clickaway');
          };

          // Pause the timer when the user is interacting with the Snackbar
          // or when the user hide the window.
          var handlePause = function handlePause() {
            clearTimeout(timerAutoHide.current);
          };

          // Restart the timer when the user is no longer interacting with the Snackbar
          // or when the window is shown back.
          var handleResume = reactExports.useCallback(function () {
            if (autoHideDuration != null) {
              setAutoHideTimer(resumeHideDuration != null ? resumeHideDuration : autoHideDuration * 0.5);
            }
          }, [autoHideDuration, resumeHideDuration, setAutoHideTimer]);
          var createHandleBlur = function createHandleBlur(otherHandlers) {
            return function (event) {
              var onBlurCallback = otherHandlers.onBlur;
              onBlurCallback == null ? void 0 : onBlurCallback(event);
              handleResume();
            };
          };
          var createHandleFocus = function createHandleFocus(otherHandlers) {
            return function (event) {
              var onFocusCallback = otherHandlers.onFocus;
              onFocusCallback == null ? void 0 : onFocusCallback(event);
              handlePause();
            };
          };
          var createMouseEnter = function createMouseEnter(otherHandlers) {
            return function (event) {
              var onMouseEnterCallback = otherHandlers.onMouseEnter;
              onMouseEnterCallback == null ? void 0 : onMouseEnterCallback(event);
              handlePause();
            };
          };
          var createMouseLeave = function createMouseLeave(otherHandlers) {
            return function (event) {
              var onMouseLeaveCallback = otherHandlers.onMouseLeave;
              onMouseLeaveCallback == null ? void 0 : onMouseLeaveCallback(event);
              handleResume();
            };
          };
          reactExports.useEffect(function () {
            // TODO: window global should be refactored here
            if (!disableWindowBlurListener && open) {
              window.addEventListener('focus', handleResume);
              window.addEventListener('blur', handlePause);
              return function () {
                window.removeEventListener('focus', handleResume);
                window.removeEventListener('blur', handlePause);
              };
            }
            return undefined;
          }, [disableWindowBlurListener, handleResume, open]);
          var getRootProps = function getRootProps() {
            var otherHandlers = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            var propsEventHandlers = extractEventHandlers(parameters);
            var externalEventHandlers = _extends({}, propsEventHandlers, otherHandlers);
            return _extends({
              ref: ref,
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
            getRootProps: getRootProps,
            onClickAway: handleClickAway
          };
        }
        var _excluded$v = ["onChange", "maxRows", "minRows", "style", "value"];
        function getStyleValue(value) {
          return parseInt(value, 10) || 0;
        }
        var styles$2 = {
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
        var TextareaAutosize = /*#__PURE__*/reactExports.forwardRef(function TextareaAutosize(props, ref) {
          var onChange = props.onChange,
            maxRows = props.maxRows,
            _props$minRows = props.minRows,
            minRows = _props$minRows === void 0 ? 1 : _props$minRows,
            style = props.style,
            value = props.value,
            other = _objectWithoutPropertiesLoose(props, _excluded$v);
          var _reactExports$useRef = reactExports.useRef(value != null),
            isControlled = _reactExports$useRef.current;
          var inputRef = reactExports.useRef(null);
          var handleRef = useForkRef(ref, inputRef);
          var shadowRef = reactExports.useRef(null);
          var renders = reactExports.useRef(0);
          var _reactExports$useStat5 = reactExports.useState({
              outerHeightStyle: 0
            }),
            _reactExports$useStat6 = _slicedToArray2(_reactExports$useStat5, 2),
            state = _reactExports$useStat6[0],
            setState = _reactExports$useStat6[1];
          var getUpdatedState = reactExports.useCallback(function () {
            var input = inputRef.current;
            var containerWindow = ownerWindow(input);
            var computedStyle = containerWindow.getComputedStyle(input);

            // If input's width is shrunk and it's not visible, don't sync height.
            if (computedStyle.width === '0px') {
              return {
                outerHeightStyle: 0
              };
            }
            var inputShallow = shadowRef.current;
            inputShallow.style.width = computedStyle.width;
            inputShallow.value = input.value || props.placeholder || 'x';
            if (inputShallow.value.slice(-1) === '\n') {
              // Certain fonts which overflow the line height will cause the textarea
              // to report a different scrollHeight depending on whether the last line
              // is empty. Make it non-empty to avoid this issue.
              inputShallow.value += ' ';
            }
            var boxSizing = computedStyle.boxSizing;
            var padding = getStyleValue(computedStyle.paddingBottom) + getStyleValue(computedStyle.paddingTop);
            var border = getStyleValue(computedStyle.borderBottomWidth) + getStyleValue(computedStyle.borderTopWidth);

            // The height of the inner content
            var innerHeight = inputShallow.scrollHeight;

            // Measure height of a textarea with a single row
            inputShallow.value = 'x';
            var singleRowHeight = inputShallow.scrollHeight;

            // The height of the outer content
            var outerHeight = innerHeight;
            if (minRows) {
              outerHeight = Math.max(Number(minRows) * singleRowHeight, outerHeight);
            }
            if (maxRows) {
              outerHeight = Math.min(Number(maxRows) * singleRowHeight, outerHeight);
            }
            outerHeight = Math.max(outerHeight, singleRowHeight);

            // Take the box sizing into account for applying this value as a style.
            var outerHeightStyle = outerHeight + (boxSizing === 'border-box' ? padding + border : 0);
            var overflow = Math.abs(outerHeight - innerHeight) <= 1;
            return {
              outerHeightStyle: outerHeightStyle,
              overflow: overflow
            };
          }, [maxRows, minRows, props.placeholder]);
          var updateState = function updateState(prevState, newState) {
            var outerHeightStyle = newState.outerHeightStyle,
              overflow = newState.overflow;
            // Need a large enough difference to update the height.
            // This prevents infinite rendering loop.
            if (renders.current < 20 && (outerHeightStyle > 0 && Math.abs((prevState.outerHeightStyle || 0) - outerHeightStyle) > 1 || prevState.overflow !== overflow)) {
              renders.current += 1;
              return {
                overflow: overflow,
                outerHeightStyle: outerHeightStyle
              };
            }
            return prevState;
          };
          var syncHeight = reactExports.useCallback(function () {
            var newState = getUpdatedState();
            if (isEmpty$2(newState)) {
              return;
            }
            setState(function (prevState) {
              return updateState(prevState, newState);
            });
          }, [getUpdatedState]);
          var syncHeightWithFlushSync = function syncHeightWithFlushSync() {
            var newState = getUpdatedState();
            if (isEmpty$2(newState)) {
              return;
            }

            // In React 18, state updates in a ResizeObserver's callback are happening after the paint which causes flickering
            // when doing some visual updates in it. Using flushSync ensures that the dom will be painted after the states updates happen
            // Related issue - https://github.com/facebook/react/issues/24331
            reactDomExports.flushSync(function () {
              setState(function (prevState) {
                return updateState(prevState, newState);
              });
            });
          };
          reactExports.useEffect(function () {
            var handleResize = debounce(function () {
              renders.current = 0;

              // If the TextareaAutosize component is replaced by Suspense with a fallback, the last
              // ResizeObserver's handler that runs because of the change in the layout is trying to
              // access a dom node that is no longer there (as the fallback component is being shown instead).
              // See https://github.com/mui/material-ui/issues/32640
              if (inputRef.current) {
                syncHeightWithFlushSync();
              }
            });
            var resizeObserver;
            var input = inputRef.current;
            var containerWindow = ownerWindow(input);
            containerWindow.addEventListener('resize', handleResize);
            if (typeof ResizeObserver !== 'undefined') {
              resizeObserver = new ResizeObserver(handleResize);
              resizeObserver.observe(input);
            }
            return function () {
              handleResize.clear();
              containerWindow.removeEventListener('resize', handleResize);
              if (resizeObserver) {
                resizeObserver.disconnect();
              }
            };
          });
          useEnhancedEffect(function () {
            syncHeight();
          });
          reactExports.useEffect(function () {
            renders.current = 0;
          }, [value]);
          var handleChange = function handleChange(event) {
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
        var TextareaAutosize$1 = exports('p', TextareaAutosize);
        function isEmpty$1(obj) {
          return obj === undefined || obj === null || Object.keys(obj).length === 0;
        }
        function GlobalStyles$2(props) {
          var styles = props.styles,
            _props$defaultTheme = props.defaultTheme,
            defaultTheme = _props$defaultTheme === void 0 ? {} : _props$defaultTheme;
          var globalStyles = typeof styles === 'function' ? function (themeInput) {
            return styles(isEmpty$1(themeInput) ? defaultTheme : themeInput);
          } : styles;
          return /*#__PURE__*/jsxRuntimeExports.jsx(Global, {
            styles: globalStyles
          });
        }
        function GlobalStyles$1(_ref5) {
          var styles = _ref5.styles,
            themeId = _ref5.themeId,
            _ref5$defaultTheme = _ref5.defaultTheme,
            defaultTheme = _ref5$defaultTheme === void 0 ? {} : _ref5$defaultTheme;
          var upperTheme = useTheme$1(defaultTheme);
          var globalStyles = typeof styles === 'function' ? styles(themeId ? upperTheme[themeId] || upperTheme : upperTheme) : styles;
          return /*#__PURE__*/jsxRuntimeExports.jsx(GlobalStyles$2, {
            styles: globalStyles
          });
        }
        var _excluded$u = ["sx"];
        var splitProps = function splitProps(props) {
          var _props$theme$unstable, _props$theme;
          var result = {
            systemProps: {},
            otherProps: {}
          };
          var config = (_props$theme$unstable = props == null ? void 0 : (_props$theme = props.theme) == null ? void 0 : _props$theme.unstable_sxConfig) != null ? _props$theme$unstable : defaultSxConfig;
          Object.keys(props).forEach(function (prop) {
            if (config[prop]) {
              result.systemProps[prop] = props[prop];
            } else {
              result.otherProps[prop] = props[prop];
            }
          });
          return result;
        };
        function extendSxProp(props) {
          var inSx = props.sx,
            other = _objectWithoutPropertiesLoose(props, _excluded$u);
          var _splitProps = splitProps(other),
            systemProps = _splitProps.systemProps,
            otherProps = _splitProps.otherProps;
          var finalSx;
          if (Array.isArray(inSx)) {
            finalSx = [systemProps].concat(_toConsumableArray(inSx));
          } else if (typeof inSx === 'function') {
            finalSx = function finalSx() {
              var result = inSx.apply(void 0, arguments);
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
        var _excluded$t = ["className", "component"];
        function createBox() {
          var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
          var themeId = options.themeId,
            defaultTheme = options.defaultTheme,
            _options$defaultClass = options.defaultClassName,
            defaultClassName = _options$defaultClass === void 0 ? 'MuiBox-root' : _options$defaultClass,
            generateClassName = options.generateClassName;
          var BoxRoot = styled('div', {
            shouldForwardProp: function shouldForwardProp(prop) {
              return prop !== 'theme' && prop !== 'sx' && prop !== 'as';
            }
          })(styleFunctionSx);
          var Box = /*#__PURE__*/reactExports.forwardRef(function Box(inProps, ref) {
            var theme = useTheme$1(defaultTheme);
            var _extendSxProp = extendSxProp(inProps),
              className = _extendSxProp.className,
              _extendSxProp$compone = _extendSxProp.component,
              component = _extendSxProp$compone === void 0 ? 'div' : _extendSxProp$compone,
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
          var theme = useTheme$1(defaultTheme$1);
          return theme[THEME_ID] || theme;
        }

        // Inspired by https://github.com/material-components/material-components-ios/blob/bca36107405594d5b7b16265a5b0ed698f85a5ee/components/Elevation/src/UIColor%2BMaterialElevation.m#L61
        var getOverlayAlpha = function getOverlayAlpha(elevation) {
          var alphaValue;
          if (elevation < 1) {
            alphaValue = 5.11916 * Math.pow(elevation, 2);
          } else {
            alphaValue = 4.5 * Math.log(elevation + 1) + 2;
          }
          return (alphaValue / 100).toFixed(2);
        };
        var getOverlayAlpha$1 = getOverlayAlpha;
        var config = {
          disabled: false
        };
        var TransitionGroupContext = React.createContext(null);
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
        var Transition$1 = exports('m', Transition);

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
        var TransitionGroup$1 = exports('Y', TransitionGroup);
        var reflow = exports('n', function (node) {
          return node.scrollTop;
        });
        function getTransitionProps(props, options) {
          var _style$transitionDura, _style$transitionTimi;
          var timeout = props.timeout,
            easing = props.easing,
            _props$style = props.style,
            style = _props$style === void 0 ? {} : _props$style;
          return {
            duration: (_style$transitionDura = style.transitionDuration) != null ? _style$transitionDura : typeof timeout === 'number' ? timeout : timeout[options.mode] || 0,
            easing: (_style$transitionTimi = style.transitionTimingFunction) != null ? _style$transitionTimi : _typeof(easing) === 'object' ? easing[options.mode] : easing,
            delay: style.transitionDelay
          };
        }
        function getPaperUtilityClass(slot) {
          return generateUtilityClass('MuiPaper', slot);
        }
        generateUtilityClasses('MuiPaper', ['root', 'rounded', 'outlined', 'elevation', 'elevation0', 'elevation1', 'elevation2', 'elevation3', 'elevation4', 'elevation5', 'elevation6', 'elevation7', 'elevation8', 'elevation9', 'elevation10', 'elevation11', 'elevation12', 'elevation13', 'elevation14', 'elevation15', 'elevation16', 'elevation17', 'elevation18', 'elevation19', 'elevation20', 'elevation21', 'elevation22', 'elevation23', 'elevation24']);
        var _excluded$s = ["className", "component", "elevation", "square", "variant"];
        var useUtilityClasses$m = function useUtilityClasses$m(ownerState) {
          var square = ownerState.square,
            elevation = ownerState.elevation,
            variant = ownerState.variant,
            classes = ownerState.classes;
          var slots = {
            root: ['root', variant, !square && 'rounded', variant === 'elevation' && "elevation".concat(elevation)]
          };
          return composeClasses(slots, getPaperUtilityClass, classes);
        };
        var PaperRoot = styled$1('div', {
          name: 'MuiPaper',
          slot: 'Root',
          overridesResolver: function overridesResolver(props, styles) {
            var ownerState = props.ownerState;
            return [styles.root, styles[ownerState.variant], !ownerState.square && styles.rounded, ownerState.variant === 'elevation' && styles["elevation".concat(ownerState.elevation)]];
          }
        })(function (_ref6) {
          var theme = _ref6.theme,
            ownerState = _ref6.ownerState;
          var _theme$vars$overlays;
          return _extends({
            backgroundColor: (theme.vars || theme).palette.background.paper,
            color: (theme.vars || theme).palette.text.primary,
            transition: theme.transitions.create('box-shadow')
          }, !ownerState.square && {
            borderRadius: theme.shape.borderRadius
          }, ownerState.variant === 'outlined' && {
            border: "1px solid ".concat((theme.vars || theme).palette.divider)
          }, ownerState.variant === 'elevation' && _extends({
            boxShadow: (theme.vars || theme).shadows[ownerState.elevation]
          }, !theme.vars && theme.palette.mode === 'dark' && {
            backgroundImage: "linear-gradient(".concat(alpha('#fff', getOverlayAlpha$1(ownerState.elevation)), ", ").concat(alpha('#fff', getOverlayAlpha$1(ownerState.elevation)), ")")
          }, theme.vars && {
            backgroundImage: (_theme$vars$overlays = theme.vars.overlays) == null ? void 0 : _theme$vars$overlays[ownerState.elevation]
          }));
        });
        var Paper = /*#__PURE__*/reactExports.forwardRef(function Paper(inProps, ref) {
          var props = useThemeProps({
            props: inProps,
            name: 'MuiPaper'
          });
          var className = props.className,
            _props$component = props.component,
            component = _props$component === void 0 ? 'div' : _props$component,
            _props$elevation = props.elevation,
            elevation = _props$elevation === void 0 ? 1 : _props$elevation,
            _props$square = props.square,
            square = _props$square === void 0 ? false : _props$square,
            _props$variant = props.variant,
            variant = _props$variant === void 0 ? 'elevation' : _props$variant,
            other = _objectWithoutPropertiesLoose(props, _excluded$s);
          var ownerState = _extends({}, props, {
            component: component,
            elevation: elevation,
            square: square,
            variant: variant
          });
          var classes = useUtilityClasses$m(ownerState);
          return /*#__PURE__*/jsxRuntimeExports.jsx(PaperRoot, _extends({
            as: component,
            ownerState: ownerState,
            className: clsx(classes.root, className),
            ref: ref
          }, other));
        });
        var Paper$1 = exports('P', Paper);
        function Ripple(props) {
          var className = props.className,
            classes = props.classes,
            _props$pulsate = props.pulsate,
            pulsate = _props$pulsate === void 0 ? false : _props$pulsate,
            rippleX = props.rippleX,
            rippleY = props.rippleY,
            rippleSize = props.rippleSize,
            inProp = props.in,
            onExited = props.onExited,
            timeout = props.timeout;
          var _reactExports$useStat7 = reactExports.useState(false),
            _reactExports$useStat8 = _slicedToArray2(_reactExports$useStat7, 2),
            leaving = _reactExports$useStat8[0],
            setLeaving = _reactExports$useStat8[1];
          var rippleClassName = clsx(className, classes.ripple, classes.rippleVisible, pulsate && classes.ripplePulsate);
          var rippleStyles = {
            width: rippleSize,
            height: rippleSize,
            top: -(rippleSize / 2) + rippleY,
            left: -(rippleSize / 2) + rippleX
          };
          var childClassName = clsx(classes.child, leaving && classes.childLeaving, pulsate && classes.childPulsate);
          if (!inProp && !leaving) {
            setLeaving(true);
          }
          reactExports.useEffect(function () {
            if (!inProp && onExited != null) {
              // react-transition-group#onExited
              var timeoutId = setTimeout(onExited, timeout);
              return function () {
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
        var touchRippleClasses = generateUtilityClasses('MuiTouchRipple', ['root', 'ripple', 'rippleVisible', 'ripplePulsate', 'child', 'childLeaving', 'childPulsate']);
        var touchRippleClasses$1 = touchRippleClasses;
        var _excluded$r = ["center", "classes", "className"];
        var _ = function _(t) {
            return t;
          },
          _t,
          _t2,
          _t3,
          _t4;
        var DURATION = 550;
        var DELAY_RIPPLE = 80;
        var enterKeyframe = keyframes(_t || (_t = _(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  0% {\n    transform: scale(0);\n    opacity: 0.1;\n  }\n\n  100% {\n    transform: scale(1);\n    opacity: 0.3;\n  }\n"])))));
        var exitKeyframe = keyframes(_t2 || (_t2 = _(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  0% {\n    opacity: 1;\n  }\n\n  100% {\n    opacity: 0;\n  }\n"])))));
        var pulsateKeyframe = keyframes(_t3 || (_t3 = _(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  0% {\n    transform: scale(1);\n  }\n\n  50% {\n    transform: scale(0.92);\n  }\n\n  100% {\n    transform: scale(1);\n  }\n"])))));
        var TouchRippleRoot = styled$1('span', {
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
        var TouchRippleRipple = styled$1(Ripple, {
          name: 'MuiTouchRipple',
          slot: 'Ripple'
        })(_t4 || (_t4 = _(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  opacity: 0;\n  position: absolute;\n\n  &.", " {\n    opacity: 0.3;\n    transform: scale(1);\n    animation-name: ", ";\n    animation-duration: ", "ms;\n    animation-timing-function: ", ";\n  }\n\n  &.", " {\n    animation-duration: ", "ms;\n  }\n\n  & .", " {\n    opacity: 1;\n    display: block;\n    width: 100%;\n    height: 100%;\n    border-radius: 50%;\n    background-color: currentColor;\n  }\n\n  & .", " {\n    opacity: 0;\n    animation-name: ", ";\n    animation-duration: ", "ms;\n    animation-timing-function: ", ";\n  }\n\n  & .", " {\n    position: absolute;\n    /* @noflip */\n    left: 0px;\n    top: 0;\n    animation-name: ", ";\n    animation-duration: 2500ms;\n    animation-timing-function: ", ";\n    animation-iteration-count: infinite;\n    animation-delay: 200ms;\n  }\n"])), 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)), touchRippleClasses$1.rippleVisible, enterKeyframe, DURATION, function (_ref7) {
          var theme = _ref7.theme;
          return theme.transitions.easing.easeInOut;
        }, touchRippleClasses$1.ripplePulsate, function (_ref8) {
          var theme = _ref8.theme;
          return theme.transitions.duration.shorter;
        }, touchRippleClasses$1.child, touchRippleClasses$1.childLeaving, exitKeyframe, DURATION, function (_ref9) {
          var theme = _ref9.theme;
          return theme.transitions.easing.easeInOut;
        }, touchRippleClasses$1.childPulsate, pulsateKeyframe, function (_ref10) {
          var theme = _ref10.theme;
          return theme.transitions.easing.easeInOut;
        });

        /**
         * @ignore - internal component.
         *
         * TODO v5: Make private
         */
        var TouchRipple = /*#__PURE__*/reactExports.forwardRef(function TouchRipple(inProps, ref) {
          var props = useThemeProps({
            props: inProps,
            name: 'MuiTouchRipple'
          });
          var _props$center = props.center,
            centerProp = _props$center === void 0 ? false : _props$center,
            _props$classes = props.classes,
            classes = _props$classes === void 0 ? {} : _props$classes,
            className = props.className,
            other = _objectWithoutPropertiesLoose(props, _excluded$r);
          var _reactExports$useStat9 = reactExports.useState([]),
            _reactExports$useStat10 = _slicedToArray2(_reactExports$useStat9, 2),
            ripples = _reactExports$useStat10[0],
            setRipples = _reactExports$useStat10[1];
          var nextKey = reactExports.useRef(0);
          var rippleCallback = reactExports.useRef(null);
          reactExports.useEffect(function () {
            if (rippleCallback.current) {
              rippleCallback.current();
              rippleCallback.current = null;
            }
          }, [ripples]);

          // Used to filter out mouse emulated events on mobile.
          var ignoringMouseDown = reactExports.useRef(false);
          // We use a timer in order to only show the ripples for touch "click" like events.
          // We don't want to display the ripple for touch scroll events.
          var startTimer = reactExports.useRef(null);

          // This is the hook called once the previous timeout is ready.
          var startTimerCommit = reactExports.useRef(null);
          var container = reactExports.useRef(null);
          reactExports.useEffect(function () {
            return function () {
              clearTimeout(startTimer.current);
            };
          }, []);
          var startCommit = reactExports.useCallback(function (params) {
            var pulsate = params.pulsate,
              rippleX = params.rippleX,
              rippleY = params.rippleY,
              rippleSize = params.rippleSize,
              cb = params.cb;
            setRipples(function (oldRipples) {
              return [].concat(_toConsumableArray(oldRipples), [/*#__PURE__*/jsxRuntimeExports.jsx(TouchRippleRipple, {
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
            });
            nextKey.current += 1;
            rippleCallback.current = cb;
          }, [classes]);
          var start = reactExports.useCallback(function () {
            var event = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
            var cb = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function () {};
            var _options$pulsate = options.pulsate,
              pulsate = _options$pulsate === void 0 ? false : _options$pulsate,
              _options$center = options.center,
              center = _options$center === void 0 ? centerProp || options.pulsate : _options$center,
              _options$fakeElement = options.fakeElement,
              fakeElement = _options$fakeElement === void 0 ? false : _options$fakeElement;
            if ((event == null ? void 0 : event.type) === 'mousedown' && ignoringMouseDown.current) {
              ignoringMouseDown.current = false;
              return;
            }
            if ((event == null ? void 0 : event.type) === 'touchstart') {
              ignoringMouseDown.current = true;
            }
            var element = fakeElement ? null : container.current;
            var rect = element ? element.getBoundingClientRect() : {
              width: 0,
              height: 0,
              left: 0,
              top: 0
            };

            // Get the size of the ripple
            var rippleX;
            var rippleY;
            var rippleSize;
            if (center || event === undefined || event.clientX === 0 && event.clientY === 0 || !event.clientX && !event.touches) {
              rippleX = Math.round(rect.width / 2);
              rippleY = Math.round(rect.height / 2);
            } else {
              var _ref11 = event.touches && event.touches.length > 0 ? event.touches[0] : event,
                clientX = _ref11.clientX,
                clientY = _ref11.clientY;
              rippleX = Math.round(clientX - rect.left);
              rippleY = Math.round(clientY - rect.top);
            }
            if (center) {
              rippleSize = Math.sqrt((2 * Math.pow(rect.width, 2) + Math.pow(rect.height, 2)) / 3);

              // For some reason the animation is broken on Mobile Chrome if the size is even.
              if (rippleSize % 2 === 0) {
                rippleSize += 1;
              }
            } else {
              var sizeX = Math.max(Math.abs((element ? element.clientWidth : 0) - rippleX), rippleX) * 2 + 2;
              var sizeY = Math.max(Math.abs((element ? element.clientHeight : 0) - rippleY), rippleY) * 2 + 2;
              rippleSize = Math.sqrt(Math.pow(sizeX, 2) + Math.pow(sizeY, 2));
            }

            // Touche devices
            if (event != null && event.touches) {
              // check that this isn't another touchstart due to multitouch
              // otherwise we will only clear a single timer when unmounting while two
              // are running
              if (startTimerCommit.current === null) {
                // Prepare the ripple effect.
                startTimerCommit.current = function () {
                  startCommit({
                    pulsate: pulsate,
                    rippleX: rippleX,
                    rippleY: rippleY,
                    rippleSize: rippleSize,
                    cb: cb
                  });
                };
                // Delay the execution of the ripple effect.
                startTimer.current = setTimeout(function () {
                  if (startTimerCommit.current) {
                    startTimerCommit.current();
                    startTimerCommit.current = null;
                  }
                }, DELAY_RIPPLE); // We have to make a tradeoff with this value.
              }
            } else {
              startCommit({
                pulsate: pulsate,
                rippleX: rippleX,
                rippleY: rippleY,
                rippleSize: rippleSize,
                cb: cb
              });
            }
          }, [centerProp, startCommit]);
          var pulsate = reactExports.useCallback(function () {
            start({}, {
              pulsate: true
            });
          }, [start]);
          var stop = reactExports.useCallback(function (event, cb) {
            clearTimeout(startTimer.current);

            // The touch interaction occurs too quickly.
            // We still want to show ripple effect.
            if ((event == null ? void 0 : event.type) === 'touchend' && startTimerCommit.current) {
              startTimerCommit.current();
              startTimerCommit.current = null;
              startTimer.current = setTimeout(function () {
                stop(event, cb);
              });
              return;
            }
            startTimerCommit.current = null;
            setRipples(function (oldRipples) {
              if (oldRipples.length > 0) {
                return oldRipples.slice(1);
              }
              return oldRipples;
            });
            rippleCallback.current = cb;
          }, []);
          reactExports.useImperativeHandle(ref, function () {
            return {
              pulsate: pulsate,
              start: start,
              stop: stop
            };
          }, [pulsate, start, stop]);
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
        var TouchRipple$1 = TouchRipple;
        function getButtonBaseUtilityClass(slot) {
          return generateUtilityClass('MuiButtonBase', slot);
        }
        var buttonBaseClasses = generateUtilityClasses('MuiButtonBase', ['root', 'disabled', 'focusVisible']);
        var buttonBaseClasses$1 = buttonBaseClasses;
        var _excluded$q = ["action", "centerRipple", "children", "className", "component", "disabled", "disableRipple", "disableTouchRipple", "focusRipple", "focusVisibleClassName", "LinkComponent", "onBlur", "onClick", "onContextMenu", "onDragLeave", "onFocus", "onFocusVisible", "onKeyDown", "onKeyUp", "onMouseDown", "onMouseLeave", "onMouseUp", "onTouchEnd", "onTouchMove", "onTouchStart", "tabIndex", "TouchRippleProps", "touchRippleRef", "type"];
        var useUtilityClasses$l = function useUtilityClasses$l(ownerState) {
          var disabled = ownerState.disabled,
            focusVisible = ownerState.focusVisible,
            focusVisibleClassName = ownerState.focusVisibleClassName,
            classes = ownerState.classes;
          var slots = {
            root: ['root', disabled && 'disabled', focusVisible && 'focusVisible']
          };
          var composedClasses = composeClasses(slots, getButtonBaseUtilityClass, classes);
          if (focusVisible && focusVisibleClassName) {
            composedClasses.root += " ".concat(focusVisibleClassName);
          }
          return composedClasses;
        };
        var ButtonBaseRoot = styled$1('button', {
          name: 'MuiButtonBase',
          slot: 'Root',
          overridesResolver: function overridesResolver(props, styles) {
            return styles.root;
          }
        })((_styled$ = {
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
          }
        }, _defineProperty2(_styled$, "&.".concat(buttonBaseClasses$1.disabled), {
          pointerEvents: 'none',
          // Disable link interactions
          cursor: 'default'
        }), _defineProperty2(_styled$, '@media print', {
          colorAdjust: 'exact'
        }), _styled$));

        /**
         * `ButtonBase` contains as few styles as possible.
         * It aims to be a simple building block for creating a button.
         * It contains a load of style reset and some focus/ripple logic.
         */
        var ButtonBase = /*#__PURE__*/reactExports.forwardRef(function ButtonBase(inProps, ref) {
          var props = useThemeProps({
            props: inProps,
            name: 'MuiButtonBase'
          });
          var action = props.action,
            _props$centerRipple = props.centerRipple,
            centerRipple = _props$centerRipple === void 0 ? false : _props$centerRipple,
            children = props.children,
            className = props.className,
            _props$component2 = props.component,
            component = _props$component2 === void 0 ? 'button' : _props$component2,
            _props$disabled = props.disabled,
            disabled = _props$disabled === void 0 ? false : _props$disabled,
            _props$disableRipple = props.disableRipple,
            disableRipple = _props$disableRipple === void 0 ? false : _props$disableRipple,
            _props$disableTouchRi = props.disableTouchRipple,
            disableTouchRipple = _props$disableTouchRi === void 0 ? false : _props$disableTouchRi,
            _props$focusRipple = props.focusRipple,
            focusRipple = _props$focusRipple === void 0 ? false : _props$focusRipple,
            _props$LinkComponent = props.LinkComponent,
            LinkComponent = _props$LinkComponent === void 0 ? 'a' : _props$LinkComponent,
            onBlur = props.onBlur,
            onClick = props.onClick,
            onContextMenu = props.onContextMenu,
            onDragLeave = props.onDragLeave,
            onFocus = props.onFocus,
            onFocusVisible = props.onFocusVisible,
            onKeyDown = props.onKeyDown,
            onKeyUp = props.onKeyUp,
            onMouseDown = props.onMouseDown,
            onMouseLeave = props.onMouseLeave,
            onMouseUp = props.onMouseUp,
            onTouchEnd = props.onTouchEnd,
            onTouchMove = props.onTouchMove,
            onTouchStart = props.onTouchStart,
            _props$tabIndex = props.tabIndex,
            tabIndex = _props$tabIndex === void 0 ? 0 : _props$tabIndex,
            TouchRippleProps = props.TouchRippleProps,
            touchRippleRef = props.touchRippleRef,
            type = props.type,
            other = _objectWithoutPropertiesLoose(props, _excluded$q);
          var buttonRef = reactExports.useRef(null);
          var rippleRef = reactExports.useRef(null);
          var handleRippleRef = useForkRef(rippleRef, touchRippleRef);
          var _useIsFocusVisible = useIsFocusVisible(),
            isFocusVisibleRef = _useIsFocusVisible.isFocusVisibleRef,
            handleFocusVisible = _useIsFocusVisible.onFocus,
            handleBlurVisible = _useIsFocusVisible.onBlur,
            focusVisibleRef = _useIsFocusVisible.ref;
          var _reactExports$useStat11 = reactExports.useState(false),
            _reactExports$useStat12 = _slicedToArray2(_reactExports$useStat11, 2),
            focusVisible = _reactExports$useStat12[0],
            setFocusVisible = _reactExports$useStat12[1];
          if (disabled && focusVisible) {
            setFocusVisible(false);
          }
          reactExports.useImperativeHandle(action, function () {
            return {
              focusVisible: function focusVisible() {
                setFocusVisible(true);
                buttonRef.current.focus();
              }
            };
          }, []);
          var _reactExports$useStat13 = reactExports.useState(false),
            _reactExports$useStat14 = _slicedToArray2(_reactExports$useStat13, 2),
            mountedState = _reactExports$useStat14[0],
            setMountedState = _reactExports$useStat14[1];
          reactExports.useEffect(function () {
            setMountedState(true);
          }, []);
          var enableTouchRipple = mountedState && !disableRipple && !disabled;
          reactExports.useEffect(function () {
            if (focusVisible && focusRipple && !disableRipple && mountedState) {
              rippleRef.current.pulsate();
            }
          }, [disableRipple, focusRipple, focusVisible, mountedState]);
          function useRippleHandler(rippleAction, eventCallback) {
            var skipRippleAction = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : disableTouchRipple;
            return useEventCallback(function (event) {
              if (eventCallback) {
                eventCallback(event);
              }
              var ignore = skipRippleAction;
              if (!ignore && rippleRef.current) {
                rippleRef.current[rippleAction](event);
              }
              return true;
            });
          }
          var handleMouseDown = useRippleHandler('start', onMouseDown);
          var handleContextMenu = useRippleHandler('stop', onContextMenu);
          var handleDragLeave = useRippleHandler('stop', onDragLeave);
          var handleMouseUp = useRippleHandler('stop', onMouseUp);
          var handleMouseLeave = useRippleHandler('stop', function (event) {
            if (focusVisible) {
              event.preventDefault();
            }
            if (onMouseLeave) {
              onMouseLeave(event);
            }
          });
          var handleTouchStart = useRippleHandler('start', onTouchStart);
          var handleTouchEnd = useRippleHandler('stop', onTouchEnd);
          var handleTouchMove = useRippleHandler('stop', onTouchMove);
          var handleBlur = useRippleHandler('stop', function (event) {
            handleBlurVisible(event);
            if (isFocusVisibleRef.current === false) {
              setFocusVisible(false);
            }
            if (onBlur) {
              onBlur(event);
            }
          }, false);
          var handleFocus = useEventCallback(function (event) {
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
          var isNonNativeButton = function isNonNativeButton() {
            var button = buttonRef.current;
            return component && component !== 'button' && !(button.tagName === 'A' && button.href);
          };

          /**
           * IE11 shim for https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/repeat
           */
          var keydownRef = reactExports.useRef(false);
          var handleKeyDown = useEventCallback(function (event) {
            // Check if key is already down to avoid repeats being counted as multiple activations
            if (focusRipple && !keydownRef.current && focusVisible && rippleRef.current && event.key === ' ') {
              keydownRef.current = true;
              rippleRef.current.stop(event, function () {
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
          var handleKeyUp = useEventCallback(function (event) {
            // calling preventDefault in keyUp on a <button> will not dispatch a click event if Space is pressed
            // https://codesandbox.io/s/button-keyup-preventdefault-dn7f0
            if (focusRipple && event.key === ' ' && rippleRef.current && focusVisible && !event.defaultPrevented) {
              keydownRef.current = false;
              rippleRef.current.stop(event, function () {
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
          var ComponentProp = component;
          if (ComponentProp === 'button' && (other.href || other.to)) {
            ComponentProp = LinkComponent;
          }
          var buttonProps = {};
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
          var handleRef = useForkRef(ref, focusVisibleRef, buttonRef);
          var ownerState = _extends({}, props, {
            centerRipple: centerRipple,
            component: component,
            disabled: disabled,
            disableRipple: disableRipple,
            disableTouchRipple: disableTouchRipple,
            focusRipple: focusRipple,
            tabIndex: tabIndex,
            focusVisible: focusVisible
          });
          var classes = useUtilityClasses$l(ownerState);
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
        var ButtonBase$1 = exports('t', ButtonBase);
        function getAlertUtilityClass(slot) {
          return generateUtilityClass('MuiAlert', slot);
        }
        var alertClasses = generateUtilityClasses('MuiAlert', ['root', 'action', 'icon', 'message', 'filled', 'filledSuccess', 'filledInfo', 'filledWarning', 'filledError', 'outlined', 'outlinedSuccess', 'outlinedInfo', 'outlinedWarning', 'outlinedError', 'standard', 'standardSuccess', 'standardInfo', 'standardWarning', 'standardError']);
        var alertClasses$1 = alertClasses;
        function getIconButtonUtilityClass(slot) {
          return generateUtilityClass('MuiIconButton', slot);
        }
        var iconButtonClasses = generateUtilityClasses('MuiIconButton', ['root', 'disabled', 'colorInherit', 'colorPrimary', 'colorSecondary', 'colorError', 'colorInfo', 'colorSuccess', 'colorWarning', 'edgeStart', 'edgeEnd', 'sizeSmall', 'sizeMedium', 'sizeLarge']);
        var iconButtonClasses$1 = iconButtonClasses;
        var _excluded$p = ["edge", "children", "className", "color", "disabled", "disableFocusRipple", "size"];
        var useUtilityClasses$k = function useUtilityClasses$k(ownerState) {
          var classes = ownerState.classes,
            disabled = ownerState.disabled,
            color = ownerState.color,
            edge = ownerState.edge,
            size = ownerState.size;
          var slots = {
            root: ['root', disabled && 'disabled', color !== 'default' && "color".concat(capitalize(color)), edge && "edge".concat(capitalize(edge)), "size".concat(capitalize(size))]
          };
          return composeClasses(slots, getIconButtonUtilityClass, classes);
        };
        var IconButtonRoot = styled$1(ButtonBase$1, {
          name: 'MuiIconButton',
          slot: 'Root',
          overridesResolver: function overridesResolver(props, styles) {
            var ownerState = props.ownerState;
            return [styles.root, ownerState.color !== 'default' && styles["color".concat(capitalize(ownerState.color))], ownerState.edge && styles["edge".concat(capitalize(ownerState.edge))], styles["size".concat(capitalize(ownerState.size))]];
          }
        })(function (_ref12) {
          var theme = _ref12.theme,
            ownerState = _ref12.ownerState;
          return _extends({
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
              backgroundColor: theme.vars ? "rgba(".concat(theme.vars.palette.action.activeChannel, " / ").concat(theme.vars.palette.action.hoverOpacity, ")") : alpha(theme.palette.action.active, theme.palette.action.hoverOpacity),
              // Reset on touch devices, it doesn't add specificity
              '@media (hover: none)': {
                backgroundColor: 'transparent'
              }
            }
          }, ownerState.edge === 'start' && {
            marginLeft: ownerState.size === 'small' ? -3 : -12
          }, ownerState.edge === 'end' && {
            marginRight: ownerState.size === 'small' ? -3 : -12
          });
        }, function (_ref13) {
          var theme = _ref13.theme,
            ownerState = _ref13.ownerState;
          var _palette;
          var palette = (_palette = (theme.vars || theme).palette) == null ? void 0 : _palette[ownerState.color];
          return _extends({}, ownerState.color === 'inherit' && {
            color: 'inherit'
          }, ownerState.color !== 'inherit' && ownerState.color !== 'default' && _extends({
            color: palette == null ? void 0 : palette.main
          }, !ownerState.disableRipple && {
            '&:hover': _extends({}, palette && {
              backgroundColor: theme.vars ? "rgba(".concat(palette.mainChannel, " / ").concat(theme.vars.palette.action.hoverOpacity, ")") : alpha(palette.main, theme.palette.action.hoverOpacity)
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
          }, _defineProperty2({}, "&.".concat(iconButtonClasses$1.disabled), {
            backgroundColor: 'transparent',
            color: (theme.vars || theme).palette.action.disabled
          }));
        });

        /**
         * Refer to the [Icons](/material-ui/icons/) section of the documentation
         * regarding the available icon options.
         */
        var IconButton = /*#__PURE__*/reactExports.forwardRef(function IconButton(inProps, ref) {
          var props = useThemeProps({
            props: inProps,
            name: 'MuiIconButton'
          });
          var _props$edge = props.edge,
            edge = _props$edge === void 0 ? false : _props$edge,
            children = props.children,
            className = props.className,
            _props$color = props.color,
            color = _props$color === void 0 ? 'default' : _props$color,
            _props$disabled2 = props.disabled,
            disabled = _props$disabled2 === void 0 ? false : _props$disabled2,
            _props$disableFocusRi = props.disableFocusRipple,
            disableFocusRipple = _props$disableFocusRi === void 0 ? false : _props$disableFocusRi,
            _props$size = props.size,
            size = _props$size === void 0 ? 'medium' : _props$size,
            other = _objectWithoutPropertiesLoose(props, _excluded$p);
          var ownerState = _extends({}, props, {
            edge: edge,
            color: color,
            disabled: disabled,
            disableFocusRipple: disableFocusRipple,
            size: size
          });
          var classes = useUtilityClasses$k(ownerState);
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
        var IconButton$1 = exports('a', IconButton);
        var SuccessOutlinedIcon = createSvgIcon( /*#__PURE__*/jsxRuntimeExports.jsx("path", {
          d: "M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2, 4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0, 0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z"
        }), 'SuccessOutlined');
        var ReportProblemOutlinedIcon = createSvgIcon( /*#__PURE__*/jsxRuntimeExports.jsx("path", {
          d: "M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z"
        }), 'ReportProblemOutlined');
        var ErrorOutlineIcon = createSvgIcon( /*#__PURE__*/jsxRuntimeExports.jsx("path", {
          d: "M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
        }), 'ErrorOutline');
        var InfoOutlinedIcon = createSvgIcon( /*#__PURE__*/jsxRuntimeExports.jsx("path", {
          d: "M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20, 12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10, 10 0 0,0 12,2M11,17H13V11H11V17Z"
        }), 'InfoOutlined');
        var ClearIcon = exports('C', createSvgIcon( /*#__PURE__*/jsxRuntimeExports.jsx("path", {
          d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
        }), 'Close'));
        var _excluded$o = ["action", "children", "className", "closeText", "color", "components", "componentsProps", "icon", "iconMapping", "onClose", "role", "severity", "slotProps", "slots", "variant"];
        var useUtilityClasses$j = function useUtilityClasses$j(ownerState) {
          var variant = ownerState.variant,
            color = ownerState.color,
            severity = ownerState.severity,
            classes = ownerState.classes;
          var slots = {
            root: ['root', "".concat(variant).concat(capitalize(color || severity)), "".concat(variant)],
            icon: ['icon'],
            message: ['message'],
            action: ['action']
          };
          return composeClasses(slots, getAlertUtilityClass, classes);
        };
        var AlertRoot = styled$1(Paper$1, {
          name: 'MuiAlert',
          slot: 'Root',
          overridesResolver: function overridesResolver(props, styles) {
            var ownerState = props.ownerState;
            return [styles.root, styles[ownerState.variant], styles["".concat(ownerState.variant).concat(capitalize(ownerState.color || ownerState.severity))]];
          }
        })(function (_ref14) {
          var theme = _ref14.theme,
            ownerState = _ref14.ownerState;
          var getColor = theme.palette.mode === 'light' ? darken : lighten;
          var getBackgroundColor = theme.palette.mode === 'light' ? lighten : darken;
          var color = ownerState.color || ownerState.severity;
          return _extends({}, theme.typography.body2, {
            backgroundColor: 'transparent',
            display: 'flex',
            padding: '6px 16px'
          }, color && ownerState.variant === 'standard' && _defineProperty2({
            color: theme.vars ? theme.vars.palette.Alert["".concat(color, "Color")] : getColor(theme.palette[color].light, 0.6),
            backgroundColor: theme.vars ? theme.vars.palette.Alert["".concat(color, "StandardBg")] : getBackgroundColor(theme.palette[color].light, 0.9)
          }, "& .".concat(alertClasses$1.icon), theme.vars ? {
            color: theme.vars.palette.Alert["".concat(color, "IconColor")]
          } : {
            color: theme.palette[color].main
          }), color && ownerState.variant === 'outlined' && _defineProperty2({
            color: theme.vars ? theme.vars.palette.Alert["".concat(color, "Color")] : getColor(theme.palette[color].light, 0.6),
            border: "1px solid ".concat((theme.vars || theme).palette[color].light)
          }, "& .".concat(alertClasses$1.icon), theme.vars ? {
            color: theme.vars.palette.Alert["".concat(color, "IconColor")]
          } : {
            color: theme.palette[color].main
          }), color && ownerState.variant === 'filled' && _extends({
            fontWeight: theme.typography.fontWeightMedium
          }, theme.vars ? {
            color: theme.vars.palette.Alert["".concat(color, "FilledColor")],
            backgroundColor: theme.vars.palette.Alert["".concat(color, "FilledBg")]
          } : {
            backgroundColor: theme.palette.mode === 'dark' ? theme.palette[color].dark : theme.palette[color].main,
            color: theme.palette.getContrastText(theme.palette[color].main)
          }));
        });
        var AlertIcon = styled$1('div', {
          name: 'MuiAlert',
          slot: 'Icon',
          overridesResolver: function overridesResolver(props, styles) {
            return styles.icon;
          }
        })({
          marginRight: 12,
          padding: '7px 0',
          display: 'flex',
          fontSize: 22,
          opacity: 0.9
        });
        var AlertMessage = styled$1('div', {
          name: 'MuiAlert',
          slot: 'Message',
          overridesResolver: function overridesResolver(props, styles) {
            return styles.message;
          }
        })({
          padding: '8px 0',
          minWidth: 0,
          overflow: 'auto'
        });
        var AlertAction = styled$1('div', {
          name: 'MuiAlert',
          slot: 'Action',
          overridesResolver: function overridesResolver(props, styles) {
            return styles.action;
          }
        })({
          display: 'flex',
          alignItems: 'flex-start',
          padding: '4px 0 0 16px',
          marginLeft: 'auto',
          marginRight: -8
        });
        var defaultIconMapping = {
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
        var Alert = /*#__PURE__*/reactExports.forwardRef(function Alert(inProps, ref) {
          var _ref, _slots$closeButton, _ref2, _slots$closeIcon, _slotProps$closeButto, _slotProps$closeIcon;
          var props = useThemeProps({
            props: inProps,
            name: 'MuiAlert'
          });
          var action = props.action,
            children = props.children,
            className = props.className,
            _props$closeText = props.closeText,
            closeText = _props$closeText === void 0 ? 'Close' : _props$closeText,
            color = props.color,
            _props$components = props.components,
            components = _props$components === void 0 ? {} : _props$components,
            _props$componentsProp = props.componentsProps,
            componentsProps = _props$componentsProp === void 0 ? {} : _props$componentsProp,
            icon = props.icon,
            _props$iconMapping = props.iconMapping,
            iconMapping = _props$iconMapping === void 0 ? defaultIconMapping : _props$iconMapping,
            onClose = props.onClose,
            _props$role = props.role,
            role = _props$role === void 0 ? 'alert' : _props$role,
            _props$severity = props.severity,
            severity = _props$severity === void 0 ? 'success' : _props$severity,
            _props$slotProps2 = props.slotProps,
            slotProps = _props$slotProps2 === void 0 ? {} : _props$slotProps2,
            _props$slots2 = props.slots,
            slots = _props$slots2 === void 0 ? {} : _props$slots2,
            _props$variant2 = props.variant,
            variant = _props$variant2 === void 0 ? 'standard' : _props$variant2,
            other = _objectWithoutPropertiesLoose(props, _excluded$o);
          var ownerState = _extends({}, props, {
            color: color,
            severity: severity,
            variant: variant
          });
          var classes = useUtilityClasses$j(ownerState);
          var AlertCloseButton = (_ref = (_slots$closeButton = slots.closeButton) != null ? _slots$closeButton : components.CloseButton) != null ? _ref : IconButton$1;
          var AlertCloseIcon = (_ref2 = (_slots$closeIcon = slots.closeIcon) != null ? _slots$closeIcon : components.CloseIcon) != null ? _ref2 : ClearIcon;
          var closeButtonProps = (_slotProps$closeButto = slotProps.closeButton) != null ? _slotProps$closeButto : componentsProps.closeButton;
          var closeIconProps = (_slotProps$closeIcon = slotProps.closeIcon) != null ? _slotProps$closeIcon : componentsProps.closeIcon;
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
        var Alert$1 = exports('A', Alert);
        function getTypographyUtilityClass(slot) {
          return generateUtilityClass('MuiTypography', slot);
        }
        generateUtilityClasses('MuiTypography', ['root', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'subtitle1', 'subtitle2', 'body1', 'body2', 'inherit', 'button', 'caption', 'overline', 'alignLeft', 'alignRight', 'alignCenter', 'alignJustify', 'noWrap', 'gutterBottom', 'paragraph']);
        var _excluded$n = ["align", "className", "component", "gutterBottom", "noWrap", "paragraph", "variant", "variantMapping"];
        var useUtilityClasses$i = function useUtilityClasses$i(ownerState) {
          var align = ownerState.align,
            gutterBottom = ownerState.gutterBottom,
            noWrap = ownerState.noWrap,
            paragraph = ownerState.paragraph,
            variant = ownerState.variant,
            classes = ownerState.classes;
          var slots = {
            root: ['root', variant, ownerState.align !== 'inherit' && "align".concat(capitalize(align)), gutterBottom && 'gutterBottom', noWrap && 'noWrap', paragraph && 'paragraph']
          };
          return composeClasses(slots, getTypographyUtilityClass, classes);
        };
        var TypographyRoot = styled$1('span', {
          name: 'MuiTypography',
          slot: 'Root',
          overridesResolver: function overridesResolver(props, styles) {
            var ownerState = props.ownerState;
            return [styles.root, ownerState.variant && styles[ownerState.variant], ownerState.align !== 'inherit' && styles["align".concat(capitalize(ownerState.align))], ownerState.noWrap && styles.noWrap, ownerState.gutterBottom && styles.gutterBottom, ownerState.paragraph && styles.paragraph];
          }
        })(function (_ref17) {
          var theme = _ref17.theme,
            ownerState = _ref17.ownerState;
          return _extends({
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
          });
        });
        var defaultVariantMapping = {
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
        var colorTransformations = {
          primary: 'primary.main',
          textPrimary: 'text.primary',
          secondary: 'secondary.main',
          textSecondary: 'text.secondary',
          error: 'error.main'
        };
        var transformDeprecatedColors = function transformDeprecatedColors(color) {
          return colorTransformations[color] || color;
        };
        var Typography = /*#__PURE__*/reactExports.forwardRef(function Typography(inProps, ref) {
          var themeProps = useThemeProps({
            props: inProps,
            name: 'MuiTypography'
          });
          var color = transformDeprecatedColors(themeProps.color);
          var props = extendSxProp(_extends({}, themeProps, {
            color: color
          }));
          var _props$align = props.align,
            align = _props$align === void 0 ? 'inherit' : _props$align,
            className = props.className,
            component = props.component,
            _props$gutterBottom = props.gutterBottom,
            gutterBottom = _props$gutterBottom === void 0 ? false : _props$gutterBottom,
            _props$noWrap = props.noWrap,
            noWrap = _props$noWrap === void 0 ? false : _props$noWrap,
            _props$paragraph = props.paragraph,
            paragraph = _props$paragraph === void 0 ? false : _props$paragraph,
            _props$variant3 = props.variant,
            variant = _props$variant3 === void 0 ? 'body1' : _props$variant3,
            _props$variantMapping = props.variantMapping,
            variantMapping = _props$variantMapping === void 0 ? defaultVariantMapping : _props$variantMapping,
            other = _objectWithoutPropertiesLoose(props, _excluded$n);
          var ownerState = _extends({}, props, {
            align: align,
            color: color,
            className: className,
            component: component,
            gutterBottom: gutterBottom,
            noWrap: noWrap,
            paragraph: paragraph,
            variant: variant,
            variantMapping: variantMapping
          });
          var Component = component || (paragraph ? 'p' : variantMapping[variant] || defaultVariantMapping[variant]) || 'span';
          var classes = useUtilityClasses$i(ownerState);
          return /*#__PURE__*/jsxRuntimeExports.jsx(TypographyRoot, _extends({
            as: Component,
            ref: ref,
            ownerState: ownerState,
            className: clsx(classes.root, className)
          }, other));
        });
        var Typography$1 = exports('T', Typography);
        function formControlState(_ref18) {
          var props = _ref18.props,
            states = _ref18.states,
            muiFormControl = _ref18.muiFormControl;
          return states.reduce(function (acc, state) {
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
        var FormControlContext = /*#__PURE__*/reactExports.createContext(undefined);
        var FormControlContext$1 = exports('a2', FormControlContext);
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
        function isFilled(obj) {
          var SSR = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
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
        var inputBaseClasses = generateUtilityClasses('MuiInputBase', ['root', 'formControl', 'focused', 'disabled', 'adornedStart', 'adornedEnd', 'error', 'sizeSmall', 'multiline', 'colorSecondary', 'fullWidth', 'hiddenLabel', 'readOnly', 'input', 'inputSizeSmall', 'inputMultiline', 'inputTypeSearch', 'inputAdornedStart', 'inputAdornedEnd', 'inputHiddenLabel']);
        var inputBaseClasses$1 = exports('x', inputBaseClasses);
        var _excluded$m = ["aria-describedby", "autoComplete", "autoFocus", "className", "color", "components", "componentsProps", "defaultValue", "disabled", "disableInjectingGlobalStyles", "endAdornment", "error", "fullWidth", "id", "inputComponent", "inputProps", "inputRef", "margin", "maxRows", "minRows", "multiline", "name", "onBlur", "onChange", "onClick", "onFocus", "onKeyDown", "onKeyUp", "placeholder", "readOnly", "renderSuffix", "rows", "size", "slotProps", "slots", "startAdornment", "type", "value"];
        var rootOverridesResolver = function rootOverridesResolver(props, styles) {
          var ownerState = props.ownerState;
          return [styles.root, ownerState.formControl && styles.formControl, ownerState.startAdornment && styles.adornedStart, ownerState.endAdornment && styles.adornedEnd, ownerState.error && styles.error, ownerState.size === 'small' && styles.sizeSmall, ownerState.multiline && styles.multiline, ownerState.color && styles["color".concat(capitalize(ownerState.color))], ownerState.fullWidth && styles.fullWidth, ownerState.hiddenLabel && styles.hiddenLabel];
        };
        var inputOverridesResolver = function inputOverridesResolver(props, styles) {
          var ownerState = props.ownerState;
          return [styles.input, ownerState.size === 'small' && styles.inputSizeSmall, ownerState.multiline && styles.inputMultiline, ownerState.type === 'search' && styles.inputTypeSearch, ownerState.startAdornment && styles.inputAdornedStart, ownerState.endAdornment && styles.inputAdornedEnd, ownerState.hiddenLabel && styles.inputHiddenLabel];
        };
        var useUtilityClasses$h = function useUtilityClasses$h(ownerState) {
          var classes = ownerState.classes,
            color = ownerState.color,
            disabled = ownerState.disabled,
            error = ownerState.error,
            endAdornment = ownerState.endAdornment,
            focused = ownerState.focused,
            formControl = ownerState.formControl,
            fullWidth = ownerState.fullWidth,
            hiddenLabel = ownerState.hiddenLabel,
            multiline = ownerState.multiline,
            readOnly = ownerState.readOnly,
            size = ownerState.size,
            startAdornment = ownerState.startAdornment,
            type = ownerState.type;
          var slots = {
            root: ['root', "color".concat(capitalize(color)), disabled && 'disabled', error && 'error', fullWidth && 'fullWidth', focused && 'focused', formControl && 'formControl', size === 'small' && 'sizeSmall', multiline && 'multiline', startAdornment && 'adornedStart', endAdornment && 'adornedEnd', hiddenLabel && 'hiddenLabel', readOnly && 'readOnly'],
            input: ['input', disabled && 'disabled', type === 'search' && 'inputTypeSearch', multiline && 'inputMultiline', size === 'small' && 'inputSizeSmall', hiddenLabel && 'inputHiddenLabel', startAdornment && 'inputAdornedStart', endAdornment && 'inputAdornedEnd', readOnly && 'readOnly']
          };
          return composeClasses(slots, getInputBaseUtilityClass, classes);
        };
        var InputBaseRoot = styled$1('div', {
          name: 'MuiInputBase',
          slot: 'Root',
          overridesResolver: rootOverridesResolver
        })(function (_ref19) {
          var theme = _ref19.theme,
            ownerState = _ref19.ownerState;
          return _extends({}, theme.typography.body1, _defineProperty2({
            color: (theme.vars || theme).palette.text.primary,
            lineHeight: '1.4375em',
            // 23px
            boxSizing: 'border-box',
            // Prevent padding issue with fullWidth.
            position: 'relative',
            cursor: 'text',
            display: 'inline-flex',
            alignItems: 'center'
          }, "&.".concat(inputBaseClasses$1.disabled), {
            color: (theme.vars || theme).palette.text.disabled,
            cursor: 'default'
          }), ownerState.multiline && _extends({
            padding: '4px 0 5px'
          }, ownerState.size === 'small' && {
            paddingTop: 1
          }), ownerState.fullWidth && {
            width: '100%'
          });
        });
        var InputBaseComponent = styled$1('input', {
          name: 'MuiInputBase',
          slot: 'Input',
          overridesResolver: inputOverridesResolver
        })(function (_ref20) {
          var _extends4;
          var theme = _ref20.theme,
            ownerState = _ref20.ownerState;
          var light = theme.palette.mode === 'light';
          var placeholder = _extends({
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
          var placeholderHidden = {
            opacity: '0 !important'
          };
          var placeholderVisible = theme.vars ? {
            opacity: theme.vars.opacity.inputPlaceholder
          } : {
            opacity: light ? 0.42 : 0.5
          };
          return _extends((_extends4 = {
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
            }
          }, _defineProperty2(_extends4, "label[data-shrink=false] + .".concat(inputBaseClasses$1.formControl, " &"), {
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
          }), _defineProperty2(_extends4, "&.".concat(inputBaseClasses$1.disabled), {
            opacity: 1,
            // Reset iOS opacity
            WebkitTextFillColor: (theme.vars || theme).palette.text.disabled // Fix opacity Safari bug
          }), _defineProperty2(_extends4, '&:-webkit-autofill', {
            animationDuration: '5000s',
            animationName: 'mui-auto-fill'
          }), _extends4), ownerState.size === 'small' && {
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
        var inputGlobalStyles = /*#__PURE__*/jsxRuntimeExports.jsx(GlobalStyles, {
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
        var InputBase = /*#__PURE__*/reactExports.forwardRef(function InputBase(inProps, ref) {
          var _slotProps$input;
          var props = useThemeProps({
            props: inProps,
            name: 'MuiInputBase'
          });
          var ariaDescribedby = props['aria-describedby'],
            autoComplete = props.autoComplete,
            autoFocus = props.autoFocus,
            className = props.className,
            _props$components2 = props.components,
            components = _props$components2 === void 0 ? {} : _props$components2,
            _props$componentsProp2 = props.componentsProps,
            componentsProps = _props$componentsProp2 === void 0 ? {} : _props$componentsProp2,
            defaultValue = props.defaultValue,
            disabled = props.disabled,
            disableInjectingGlobalStyles = props.disableInjectingGlobalStyles,
            endAdornment = props.endAdornment,
            _props$fullWidth = props.fullWidth,
            fullWidth = _props$fullWidth === void 0 ? false : _props$fullWidth,
            id = props.id,
            _props$inputComponent = props.inputComponent,
            inputComponent = _props$inputComponent === void 0 ? 'input' : _props$inputComponent,
            _props$inputProps = props.inputProps,
            inputPropsProp = _props$inputProps === void 0 ? {} : _props$inputProps,
            inputRefProp = props.inputRef,
            maxRows = props.maxRows,
            minRows = props.minRows,
            _props$multiline = props.multiline,
            multiline = _props$multiline === void 0 ? false : _props$multiline,
            name = props.name,
            onBlur = props.onBlur,
            onChange = props.onChange,
            onClick = props.onClick,
            onFocus = props.onFocus,
            onKeyDown = props.onKeyDown,
            onKeyUp = props.onKeyUp,
            placeholder = props.placeholder,
            readOnly = props.readOnly,
            renderSuffix = props.renderSuffix,
            rows = props.rows,
            _props$slotProps3 = props.slotProps,
            slotProps = _props$slotProps3 === void 0 ? {} : _props$slotProps3,
            _props$slots3 = props.slots,
            slots = _props$slots3 === void 0 ? {} : _props$slots3,
            startAdornment = props.startAdornment,
            _props$type = props.type,
            type = _props$type === void 0 ? 'text' : _props$type,
            valueProp = props.value,
            other = _objectWithoutPropertiesLoose(props, _excluded$m);
          var value = inputPropsProp.value != null ? inputPropsProp.value : valueProp;
          var _reactExports$useRef2 = reactExports.useRef(value != null),
            isControlled = _reactExports$useRef2.current;
          var inputRef = reactExports.useRef();
          var handleInputRefWarning = reactExports.useCallback(function (instance) {}, []);
          var handleInputRef = useForkRef(inputRef, inputRefProp, inputPropsProp.ref, handleInputRefWarning);
          var _reactExports$useStat15 = reactExports.useState(false),
            _reactExports$useStat16 = _slicedToArray2(_reactExports$useStat15, 2),
            focused = _reactExports$useStat16[0],
            setFocused = _reactExports$useStat16[1];
          var muiFormControl = useFormControl();
          var fcs = formControlState({
            props: props,
            muiFormControl: muiFormControl,
            states: ['color', 'disabled', 'error', 'hiddenLabel', 'size', 'required', 'filled']
          });
          fcs.focused = muiFormControl ? muiFormControl.focused : focused;

          // The blur won't fire when the disabled state is set on a focused input.
          // We need to book keep the focused state manually.
          reactExports.useEffect(function () {
            if (!muiFormControl && disabled && focused) {
              setFocused(false);
              if (onBlur) {
                onBlur();
              }
            }
          }, [muiFormControl, disabled, focused, onBlur]);
          var onFilled = muiFormControl && muiFormControl.onFilled;
          var onEmpty = muiFormControl && muiFormControl.onEmpty;
          var checkDirty = reactExports.useCallback(function (obj) {
            if (isFilled(obj)) {
              if (onFilled) {
                onFilled();
              }
            } else if (onEmpty) {
              onEmpty();
            }
          }, [onFilled, onEmpty]);
          useEnhancedEffect(function () {
            if (isControlled) {
              checkDirty({
                value: value
              });
            }
          }, [value, checkDirty, isControlled]);
          var handleFocus = function handleFocus(event) {
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
          var handleBlur = function handleBlur(event) {
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
          var handleChange = function handleChange(event) {
            if (!isControlled) {
              var element = event.target || inputRef.current;
              if (element == null) {
                throw new Error(formatMuiErrorMessage(1));
              }
              checkDirty({
                value: element.value
              });
            }
            for (var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
              args[_key3 - 1] = arguments[_key3];
            }
            if (inputPropsProp.onChange) {
              inputPropsProp.onChange.apply(inputPropsProp, [event].concat(args));
            }

            // Perform in the willUpdate
            if (onChange) {
              onChange.apply(void 0, [event].concat(args));
            }
          };

          // Check the input state on mount, in case it was filled by the user
          // or auto filled by the browser before the hydration (for SSR).
          reactExports.useEffect(function () {
            checkDirty(inputRef.current);
            // eslint-disable-next-line react-hooks/exhaustive-deps
          }, []);
          var handleClick = function handleClick(event) {
            if (inputRef.current && event.currentTarget === event.target) {
              inputRef.current.focus();
            }
            if (onClick) {
              onClick(event);
            }
          };
          var InputComponent = inputComponent;
          var inputProps = inputPropsProp;
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
                maxRows: maxRows,
                minRows: minRows
              }, inputProps);
            }
            InputComponent = TextareaAutosize$1;
          }
          var handleAutoFill = function handleAutoFill(event) {
            // Provide a fake value as Chrome might not let you access it for security reasons.
            checkDirty(event.animationName === 'mui-auto-fill-cancel' ? inputRef.current : {
              value: 'x'
            });
          };
          reactExports.useEffect(function () {
            if (muiFormControl) {
              muiFormControl.setAdornedStart(Boolean(startAdornment));
            }
          }, [muiFormControl, startAdornment]);
          var ownerState = _extends({}, props, {
            color: fcs.color || 'primary',
            disabled: fcs.disabled,
            endAdornment: endAdornment,
            error: fcs.error,
            focused: fcs.focused,
            formControl: muiFormControl,
            fullWidth: fullWidth,
            hiddenLabel: fcs.hiddenLabel,
            multiline: multiline,
            size: fcs.size,
            startAdornment: startAdornment,
            type: type
          });
          var classes = useUtilityClasses$h(ownerState);
          var Root = slots.root || components.Root || InputBaseRoot;
          var rootProps = slotProps.root || componentsProps.root || {};
          var Input = slots.input || components.Input || InputBaseComponent;
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
                startAdornment: startAdornment
              })) : null]
            }))]
          });
        });
        var InputBase$1 = exports('g', InputBase);
        function getInputUtilityClass(slot) {
          return generateUtilityClass('MuiInput', slot);
        }
        var inputClasses = _extends({}, inputBaseClasses$1, generateUtilityClasses('MuiInput', ['root', 'underline', 'input']));
        var inputClasses$1 = exports('v', inputClasses);
        function getOutlinedInputUtilityClass(slot) {
          return generateUtilityClass('MuiOutlinedInput', slot);
        }
        var outlinedInputClasses = _extends({}, inputBaseClasses$1, generateUtilityClasses('MuiOutlinedInput', ['root', 'notchedOutline', 'input']));
        var outlinedInputClasses$1 = exports('y', outlinedInputClasses);
        function getFilledInputUtilityClass(slot) {
          return generateUtilityClass('MuiFilledInput', slot);
        }
        var filledInputClasses = _extends({}, inputBaseClasses$1, generateUtilityClasses('MuiFilledInput', ['root', 'underline', 'input']));
        var filledInputClasses$1 = exports('z', filledInputClasses);
        var ArrowDropDownIcon = exports('E', createSvgIcon( /*#__PURE__*/jsxRuntimeExports.jsx("path", {
          d: "M7 10l5 5 5-5z"
        }), 'ArrowDropDown'));
        var _excluded$l = ["addEndListener", "appear", "children", "easing", "in", "onEnter", "onEntered", "onEntering", "onExit", "onExited", "onExiting", "style", "timeout", "TransitionComponent"];
        var styles$1 = {
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
        var Fade = /*#__PURE__*/reactExports.forwardRef(function Fade(props, ref) {
          var theme = useTheme();
          var defaultTimeout = {
            enter: theme.transitions.duration.enteringScreen,
            exit: theme.transitions.duration.leavingScreen
          };
          var addEndListener = props.addEndListener,
            _props$appear = props.appear,
            appear = _props$appear === void 0 ? true : _props$appear,
            _children = props.children,
            easing = props.easing,
            inProp = props.in,
            onEnter = props.onEnter,
            onEntered = props.onEntered,
            onEntering = props.onEntering,
            onExit = props.onExit,
            onExited = props.onExited,
            onExiting = props.onExiting,
            style = props.style,
            _props$timeout = props.timeout,
            timeout = _props$timeout === void 0 ? defaultTimeout : _props$timeout,
            _props$TransitionComp = props.TransitionComponent,
            TransitionComponent = _props$TransitionComp === void 0 ? Transition$1 : _props$TransitionComp,
            other = _objectWithoutPropertiesLoose(props, _excluded$l);
          var nodeRef = reactExports.useRef(null);
          var handleRef = useForkRef(nodeRef, _children.ref, ref);
          var normalizedTransitionCallback = function normalizedTransitionCallback(callback) {
            return function (maybeIsAppearing) {
              if (callback) {
                var node = nodeRef.current;

                // onEnterXxx and onExitXxx callbacks have a different arguments.length value.
                if (maybeIsAppearing === undefined) {
                  callback(node);
                } else {
                  callback(node, maybeIsAppearing);
                }
              }
            };
          };
          var handleEntering = normalizedTransitionCallback(onEntering);
          var handleEnter = normalizedTransitionCallback(function (node, isAppearing) {
            reflow(node); // So the animation always start from the start.

            var transitionProps = getTransitionProps({
              style: style,
              timeout: timeout,
              easing: easing
            }, {
              mode: 'enter'
            });
            node.style.webkitTransition = theme.transitions.create('opacity', transitionProps);
            node.style.transition = theme.transitions.create('opacity', transitionProps);
            if (onEnter) {
              onEnter(node, isAppearing);
            }
          });
          var handleEntered = normalizedTransitionCallback(onEntered);
          var handleExiting = normalizedTransitionCallback(onExiting);
          var handleExit = normalizedTransitionCallback(function (node) {
            var transitionProps = getTransitionProps({
              style: style,
              timeout: timeout,
              easing: easing
            }, {
              mode: 'exit'
            });
            node.style.webkitTransition = theme.transitions.create('opacity', transitionProps);
            node.style.transition = theme.transitions.create('opacity', transitionProps);
            if (onExit) {
              onExit(node);
            }
          });
          var handleExited = normalizedTransitionCallback(onExited);
          var handleAddEndListener = function handleAddEndListener(next) {
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
            children: function children(state, childProps) {
              return /*#__PURE__*/reactExports.cloneElement(_children, _extends({
                style: _extends({
                  opacity: 0,
                  visibility: state === 'exited' && !inProp ? 'hidden' : undefined
                }, styles$1[state], style, _children.props.style),
                ref: handleRef
              }, childProps));
            }
          }));
        });
        var Fade$1 = exports('Z', Fade);
        function getBackdropUtilityClass(slot) {
          return generateUtilityClass('MuiBackdrop', slot);
        }
        generateUtilityClasses('MuiBackdrop', ['root', 'invisible']);
        var _excluded$k = ["children", "className", "component", "components", "componentsProps", "invisible", "open", "slotProps", "slots", "TransitionComponent", "transitionDuration"];
        var useUtilityClasses$g = function useUtilityClasses$g(ownerState) {
          var classes = ownerState.classes,
            invisible = ownerState.invisible;
          var slots = {
            root: ['root', invisible && 'invisible']
          };
          return composeClasses(slots, getBackdropUtilityClass, classes);
        };
        var BackdropRoot = styled$1('div', {
          name: 'MuiBackdrop',
          slot: 'Root',
          overridesResolver: function overridesResolver(props, styles) {
            var ownerState = props.ownerState;
            return [styles.root, ownerState.invisible && styles.invisible];
          }
        })(function (_ref21) {
          var ownerState = _ref21.ownerState;
          return _extends({
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
          });
        });
        var Backdrop = /*#__PURE__*/reactExports.forwardRef(function Backdrop(inProps, ref) {
          var _slotProps$root, _ref, _slots$root;
          var props = useThemeProps({
            props: inProps,
            name: 'MuiBackdrop'
          });
          var children = props.children,
            className = props.className,
            _props$component3 = props.component,
            component = _props$component3 === void 0 ? 'div' : _props$component3,
            _props$components3 = props.components,
            components = _props$components3 === void 0 ? {} : _props$components3,
            _props$componentsProp3 = props.componentsProps,
            componentsProps = _props$componentsProp3 === void 0 ? {} : _props$componentsProp3,
            _props$invisible = props.invisible,
            invisible = _props$invisible === void 0 ? false : _props$invisible,
            open = props.open,
            _props$slotProps4 = props.slotProps,
            slotProps = _props$slotProps4 === void 0 ? {} : _props$slotProps4,
            _props$slots4 = props.slots,
            slots = _props$slots4 === void 0 ? {} : _props$slots4,
            _props$TransitionComp2 = props.TransitionComponent,
            TransitionComponent = _props$TransitionComp2 === void 0 ? Fade$1 : _props$TransitionComp2,
            transitionDuration = props.transitionDuration,
            other = _objectWithoutPropertiesLoose(props, _excluded$k);
          var ownerState = _extends({}, props, {
            component: component,
            invisible: invisible
          });
          var classes = useUtilityClasses$g(ownerState);
          var rootSlotProps = (_slotProps$root = slotProps.root) != null ? _slotProps$root : componentsProps.root;
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
        var Backdrop$1 = exports('e', Backdrop);
        var defaultTheme = createTheme();
        var Box = createBox({
          themeId: THEME_ID,
          defaultTheme: defaultTheme,
          defaultClassName: 'MuiBox-root',
          generateClassName: ClassNameGenerator.generate
        });
        var Box$1 = exports('B', Box);
        function getButtonUtilityClass(slot) {
          return generateUtilityClass('MuiButton', slot);
        }
        var buttonClasses = generateUtilityClasses('MuiButton', ['root', 'text', 'textInherit', 'textPrimary', 'textSecondary', 'textSuccess', 'textError', 'textInfo', 'textWarning', 'outlined', 'outlinedInherit', 'outlinedPrimary', 'outlinedSecondary', 'outlinedSuccess', 'outlinedError', 'outlinedInfo', 'outlinedWarning', 'contained', 'containedInherit', 'containedPrimary', 'containedSecondary', 'containedSuccess', 'containedError', 'containedInfo', 'containedWarning', 'disableElevation', 'focusVisible', 'disabled', 'colorInherit', 'textSizeSmall', 'textSizeMedium', 'textSizeLarge', 'outlinedSizeSmall', 'outlinedSizeMedium', 'outlinedSizeLarge', 'containedSizeSmall', 'containedSizeMedium', 'containedSizeLarge', 'sizeMedium', 'sizeSmall', 'sizeLarge', 'fullWidth', 'startIcon', 'endIcon', 'iconSizeSmall', 'iconSizeMedium', 'iconSizeLarge']);
        var buttonClasses$1 = buttonClasses;

        /**
         * @ignore - internal component.
         */
        var ButtonGroupContext = /*#__PURE__*/reactExports.createContext({});
        var ButtonGroupContext$1 = exports('F', ButtonGroupContext);
        var _excluded$j = ["children", "color", "component", "className", "disabled", "disableElevation", "disableFocusRipple", "endIcon", "focusVisibleClassName", "fullWidth", "size", "startIcon", "type", "variant"];
        var useUtilityClasses$f = function useUtilityClasses$f(ownerState) {
          var color = ownerState.color,
            disableElevation = ownerState.disableElevation,
            fullWidth = ownerState.fullWidth,
            size = ownerState.size,
            variant = ownerState.variant,
            classes = ownerState.classes;
          var slots = {
            root: ['root', variant, "".concat(variant).concat(capitalize(color)), "size".concat(capitalize(size)), "".concat(variant, "Size").concat(capitalize(size)), color === 'inherit' && 'colorInherit', disableElevation && 'disableElevation', fullWidth && 'fullWidth'],
            label: ['label'],
            startIcon: ['startIcon', "iconSize".concat(capitalize(size))],
            endIcon: ['endIcon', "iconSize".concat(capitalize(size))]
          };
          var composedClasses = composeClasses(slots, getButtonUtilityClass, classes);
          return _extends({}, classes, composedClasses);
        };
        var commonIconStyles = function commonIconStyles(ownerState) {
          return _extends({}, ownerState.size === 'small' && {
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
        };
        var ButtonRoot = styled$1(ButtonBase$1, {
          shouldForwardProp: function shouldForwardProp(prop) {
            return rootShouldForwardProp(prop) || prop === 'classes';
          },
          name: 'MuiButton',
          slot: 'Root',
          overridesResolver: function overridesResolver(props, styles) {
            var ownerState = props.ownerState;
            return [styles.root, styles[ownerState.variant], styles["".concat(ownerState.variant).concat(capitalize(ownerState.color))], styles["size".concat(capitalize(ownerState.size))], styles["".concat(ownerState.variant, "Size").concat(capitalize(ownerState.size))], ownerState.color === 'inherit' && styles.colorInherit, ownerState.disableElevation && styles.disableElevation, ownerState.fullWidth && styles.fullWidth];
          }
        })(function (_ref22) {
          var _extends5;
          var theme = _ref22.theme,
            ownerState = _ref22.ownerState;
          var _theme$palette$getCon, _theme$palette;
          var inheritContainedBackgroundColor = theme.palette.mode === 'light' ? theme.palette.grey[300] : theme.palette.grey[800];
          var inheritContainedHoverBackgroundColor = theme.palette.mode === 'light' ? theme.palette.grey.A100 : theme.palette.grey[700];
          return _extends({}, theme.typography.button, (_extends5 = {
            minWidth: 64,
            padding: '6px 16px',
            borderRadius: (theme.vars || theme).shape.borderRadius,
            transition: theme.transitions.create(['background-color', 'box-shadow', 'border-color', 'color'], {
              duration: theme.transitions.duration.short
            }),
            '&:hover': _extends({
              textDecoration: 'none',
              backgroundColor: theme.vars ? "rgba(".concat(theme.vars.palette.text.primaryChannel, " / ").concat(theme.vars.palette.action.hoverOpacity, ")") : alpha(theme.palette.text.primary, theme.palette.action.hoverOpacity),
              // Reset on touch devices, it doesn't add specificity
              '@media (hover: none)': {
                backgroundColor: 'transparent'
              }
            }, ownerState.variant === 'text' && ownerState.color !== 'inherit' && {
              backgroundColor: theme.vars ? "rgba(".concat(theme.vars.palette[ownerState.color].mainChannel, " / ").concat(theme.vars.palette.action.hoverOpacity, ")") : alpha(theme.palette[ownerState.color].main, theme.palette.action.hoverOpacity),
              // Reset on touch devices, it doesn't add specificity
              '@media (hover: none)': {
                backgroundColor: 'transparent'
              }
            }, ownerState.variant === 'outlined' && ownerState.color !== 'inherit' && {
              border: "1px solid ".concat((theme.vars || theme).palette[ownerState.color].main),
              backgroundColor: theme.vars ? "rgba(".concat(theme.vars.palette[ownerState.color].mainChannel, " / ").concat(theme.vars.palette.action.hoverOpacity, ")") : alpha(theme.palette[ownerState.color].main, theme.palette.action.hoverOpacity),
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
            })
          }, _defineProperty2(_extends5, "&.".concat(buttonClasses$1.focusVisible), _extends({}, ownerState.variant === 'contained' && {
            boxShadow: (theme.vars || theme).shadows[6]
          })), _defineProperty2(_extends5, "&.".concat(buttonClasses$1.disabled), _extends({
            color: (theme.vars || theme).palette.action.disabled
          }, ownerState.variant === 'outlined' && {
            border: "1px solid ".concat((theme.vars || theme).palette.action.disabledBackground)
          }, ownerState.variant === 'contained' && {
            color: (theme.vars || theme).palette.action.disabled,
            boxShadow: (theme.vars || theme).shadows[0],
            backgroundColor: (theme.vars || theme).palette.action.disabledBackground
          })), _extends5), ownerState.variant === 'text' && {
            padding: '6px 8px'
          }, ownerState.variant === 'text' && ownerState.color !== 'inherit' && {
            color: (theme.vars || theme).palette[ownerState.color].main
          }, ownerState.variant === 'outlined' && {
            padding: '5px 15px',
            border: '1px solid currentColor'
          }, ownerState.variant === 'outlined' && ownerState.color !== 'inherit' && {
            color: (theme.vars || theme).palette[ownerState.color].main,
            border: theme.vars ? "1px solid rgba(".concat(theme.vars.palette[ownerState.color].mainChannel, " / 0.5)") : "1px solid ".concat(alpha(theme.palette[ownerState.color].main, 0.5))
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
        }, function (_ref23) {
          var _ref24;
          var ownerState = _ref23.ownerState;
          return ownerState.disableElevation && (_ref24 = {
            boxShadow: 'none',
            '&:hover': {
              boxShadow: 'none'
            }
          }, _defineProperty2(_ref24, "&.".concat(buttonClasses$1.focusVisible), {
            boxShadow: 'none'
          }), _defineProperty2(_ref24, '&:active', {
            boxShadow: 'none'
          }), _defineProperty2(_ref24, "&.".concat(buttonClasses$1.disabled), {
            boxShadow: 'none'
          }), _ref24);
        });
        var ButtonStartIcon = styled$1('span', {
          name: 'MuiButton',
          slot: 'StartIcon',
          overridesResolver: function overridesResolver(props, styles) {
            var ownerState = props.ownerState;
            return [styles.startIcon, styles["iconSize".concat(capitalize(ownerState.size))]];
          }
        })(function (_ref25) {
          var ownerState = _ref25.ownerState;
          return _extends({
            display: 'inherit',
            marginRight: 8,
            marginLeft: -4
          }, ownerState.size === 'small' && {
            marginLeft: -2
          }, commonIconStyles(ownerState));
        });
        var ButtonEndIcon = styled$1('span', {
          name: 'MuiButton',
          slot: 'EndIcon',
          overridesResolver: function overridesResolver(props, styles) {
            var ownerState = props.ownerState;
            return [styles.endIcon, styles["iconSize".concat(capitalize(ownerState.size))]];
          }
        })(function (_ref26) {
          var ownerState = _ref26.ownerState;
          return _extends({
            display: 'inherit',
            marginRight: -4,
            marginLeft: 8
          }, ownerState.size === 'small' && {
            marginRight: -2
          }, commonIconStyles(ownerState));
        });
        var Button = /*#__PURE__*/reactExports.forwardRef(function Button(inProps, ref) {
          // props priority: `inProps` > `contextProps` > `themeDefaultProps`
          var contextProps = reactExports.useContext(ButtonGroupContext$1);
          var resolvedProps = resolveProps(contextProps, inProps);
          var props = useThemeProps({
            props: resolvedProps,
            name: 'MuiButton'
          });
          var children = props.children,
            _props$color2 = props.color,
            color = _props$color2 === void 0 ? 'primary' : _props$color2,
            _props$component4 = props.component,
            component = _props$component4 === void 0 ? 'button' : _props$component4,
            className = props.className,
            _props$disabled3 = props.disabled,
            disabled = _props$disabled3 === void 0 ? false : _props$disabled3,
            _props$disableElevati = props.disableElevation,
            disableElevation = _props$disableElevati === void 0 ? false : _props$disableElevati,
            _props$disableFocusRi2 = props.disableFocusRipple,
            disableFocusRipple = _props$disableFocusRi2 === void 0 ? false : _props$disableFocusRi2,
            endIconProp = props.endIcon,
            focusVisibleClassName = props.focusVisibleClassName,
            _props$fullWidth2 = props.fullWidth,
            fullWidth = _props$fullWidth2 === void 0 ? false : _props$fullWidth2,
            _props$size2 = props.size,
            size = _props$size2 === void 0 ? 'medium' : _props$size2,
            startIconProp = props.startIcon,
            type = props.type,
            _props$variant4 = props.variant,
            variant = _props$variant4 === void 0 ? 'text' : _props$variant4,
            other = _objectWithoutPropertiesLoose(props, _excluded$j);
          var ownerState = _extends({}, props, {
            color: color,
            component: component,
            disabled: disabled,
            disableElevation: disableElevation,
            disableFocusRipple: disableFocusRipple,
            fullWidth: fullWidth,
            size: size,
            type: type,
            variant: variant
          });
          var classes = useUtilityClasses$f(ownerState);
          var startIcon = startIconProp && /*#__PURE__*/jsxRuntimeExports.jsx(ButtonStartIcon, {
            className: classes.startIcon,
            ownerState: ownerState,
            children: startIconProp
          });
          var endIcon = endIconProp && /*#__PURE__*/jsxRuntimeExports.jsx(ButtonEndIcon, {
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
        var Button$1 = exports('b', Button);
        var _excluded$i = ["BackdropComponent", "BackdropProps", "classes", "className", "closeAfterTransition", "children", "container", "component", "components", "componentsProps", "disableAutoFocus", "disableEnforceFocus", "disableEscapeKeyDown", "disablePortal", "disableRestoreFocus", "disableScrollLock", "hideBackdrop", "keepMounted", "onBackdropClick", "onClose", "open", "slotProps", "slots", "theme"];
        var ModalRoot = styled$1('div', {
          name: 'MuiModal',
          slot: 'Root',
          overridesResolver: function overridesResolver(props, styles) {
            var ownerState = props.ownerState;
            return [styles.root, !ownerState.open && ownerState.exited && styles.hidden];
          }
        })(function (_ref27) {
          var theme = _ref27.theme,
            ownerState = _ref27.ownerState;
          return _extends({
            position: 'fixed',
            zIndex: (theme.vars || theme).zIndex.modal,
            right: 0,
            bottom: 0,
            top: 0,
            left: 0
          }, !ownerState.open && ownerState.exited && {
            visibility: 'hidden'
          });
        });
        var ModalBackdrop = styled$1(Backdrop$1, {
          name: 'MuiModal',
          slot: 'Backdrop',
          overridesResolver: function overridesResolver(props, styles) {
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
        var Modal = /*#__PURE__*/reactExports.forwardRef(function Modal(inProps, ref) {
          var _ref, _slots$root, _ref2, _slots$backdrop, _slotProps$root, _slotProps$backdrop;
          var props = useThemeProps({
            name: 'MuiModal',
            props: inProps
          });
          var _props$BackdropCompon = props.BackdropComponent,
            BackdropComponent = _props$BackdropCompon === void 0 ? ModalBackdrop : _props$BackdropCompon,
            BackdropProps = props.BackdropProps,
            classes = props.classes,
            className = props.className,
            _props$closeAfterTran2 = props.closeAfterTransition,
            closeAfterTransition = _props$closeAfterTran2 === void 0 ? false : _props$closeAfterTran2,
            children = props.children,
            container = props.container,
            component = props.component,
            _props$components4 = props.components,
            components = _props$components4 === void 0 ? {} : _props$components4,
            _props$componentsProp4 = props.componentsProps,
            componentsProps = _props$componentsProp4 === void 0 ? {} : _props$componentsProp4,
            _props$disableAutoFoc3 = props.disableAutoFocus,
            disableAutoFocus = _props$disableAutoFoc3 === void 0 ? false : _props$disableAutoFoc3,
            _props$disableEnforce3 = props.disableEnforceFocus,
            disableEnforceFocus = _props$disableEnforce3 === void 0 ? false : _props$disableEnforce3,
            _props$disableEscapeK2 = props.disableEscapeKeyDown,
            disableEscapeKeyDown = _props$disableEscapeK2 === void 0 ? false : _props$disableEscapeK2,
            _props$disablePortal3 = props.disablePortal,
            disablePortal = _props$disablePortal3 === void 0 ? false : _props$disablePortal3,
            _props$disableRestore3 = props.disableRestoreFocus,
            disableRestoreFocus = _props$disableRestore3 === void 0 ? false : _props$disableRestore3,
            _props$disableScrollL2 = props.disableScrollLock,
            disableScrollLock = _props$disableScrollL2 === void 0 ? false : _props$disableScrollL2,
            _props$hideBackdrop2 = props.hideBackdrop,
            hideBackdrop = _props$hideBackdrop2 === void 0 ? false : _props$hideBackdrop2,
            _props$keepMounted2 = props.keepMounted,
            keepMounted = _props$keepMounted2 === void 0 ? false : _props$keepMounted2,
            onBackdropClick = props.onBackdropClick,
            onClose = props.onClose,
            open = props.open,
            slotProps = props.slotProps,
            slots = props.slots,
            theme = props.theme,
            other = _objectWithoutPropertiesLoose(props, _excluded$i);
          var _reactExports$useStat17 = reactExports.useState(true),
            _reactExports$useStat18 = _slicedToArray2(_reactExports$useStat17, 2),
            exited = _reactExports$useStat18[0],
            setExited = _reactExports$useStat18[1];
          var commonProps = {
            container: container,
            closeAfterTransition: closeAfterTransition,
            disableAutoFocus: disableAutoFocus,
            disableEnforceFocus: disableEnforceFocus,
            disableEscapeKeyDown: disableEscapeKeyDown,
            disablePortal: disablePortal,
            disableRestoreFocus: disableRestoreFocus,
            disableScrollLock: disableScrollLock,
            hideBackdrop: hideBackdrop,
            keepMounted: keepMounted,
            onBackdropClick: onBackdropClick,
            onClose: onClose,
            open: open
          };
          var ownerState = _extends({}, props, commonProps, {
            exited: exited
          });
          var RootSlot = (_ref = (_slots$root = slots == null ? void 0 : slots.root) != null ? _slots$root : components.Root) != null ? _ref : ModalRoot;
          var BackdropSlot = (_ref2 = (_slots$backdrop = slots == null ? void 0 : slots.backdrop) != null ? _slots$backdrop : components.Backdrop) != null ? _ref2 : BackdropComponent;
          var rootSlotProps = (_slotProps$root = slotProps == null ? void 0 : slotProps.root) != null ? _slotProps$root : componentsProps.root;
          var backdropSlotProps = (_slotProps$backdrop = slotProps == null ? void 0 : slotProps.backdrop) != null ? _slotProps$backdrop : componentsProps.backdrop;
          return /*#__PURE__*/jsxRuntimeExports.jsx(ModalUnstyled, _extends({
            slots: {
              root: RootSlot,
              backdrop: BackdropSlot
            },
            slotProps: {
              root: function root() {
                return _extends({}, resolveComponentProps(rootSlotProps, ownerState), !isHostComponent(RootSlot) && {
                  as: component,
                  theme: theme
                }, {
                  className: clsx(className, rootSlotProps == null ? void 0 : rootSlotProps.className, classes == null ? void 0 : classes.root, !ownerState.open && ownerState.exited && (classes == null ? void 0 : classes.hidden))
                });
              },
              backdrop: function backdrop() {
                return _extends({}, BackdropProps, resolveComponentProps(backdropSlotProps, ownerState), {
                  className: clsx(backdropSlotProps == null ? void 0 : backdropSlotProps.className, classes == null ? void 0 : classes.backdrop)
                });
              }
            },
            onTransitionEnter: function onTransitionEnter() {
              return setExited(false);
            },
            onTransitionExited: function onTransitionExited() {
              return setExited(true);
            },
            ref: ref
          }, other, commonProps, {
            children: children
          }));
        });
        var Modal$1 = exports('M', Modal);
        function getDialogUtilityClass(slot) {
          return generateUtilityClass('MuiDialog', slot);
        }
        var dialogClasses = generateUtilityClasses('MuiDialog', ['root', 'scrollPaper', 'scrollBody', 'container', 'paper', 'paperScrollPaper', 'paperScrollBody', 'paperWidthFalse', 'paperWidthXs', 'paperWidthSm', 'paperWidthMd', 'paperWidthLg', 'paperWidthXl', 'paperFullWidth', 'paperFullScreen']);
        var dialogClasses$1 = exports('$', dialogClasses);
        var DialogContext = /*#__PURE__*/reactExports.createContext({});
        var DialogContext$1 = exports('Q', DialogContext);
        var _excluded$h = ["aria-describedby", "aria-labelledby", "BackdropComponent", "BackdropProps", "children", "className", "disableEscapeKeyDown", "fullScreen", "fullWidth", "maxWidth", "onBackdropClick", "onClose", "open", "PaperComponent", "PaperProps", "scroll", "TransitionComponent", "transitionDuration", "TransitionProps"];
        var DialogBackdrop = styled$1(Backdrop$1, {
          name: 'MuiDialog',
          slot: 'Backdrop',
          overrides: function overrides(props, styles) {
            return styles.backdrop;
          }
        })({
          // Improve scrollable dialog support.
          zIndex: -1
        });
        var useUtilityClasses$e = function useUtilityClasses$e(ownerState) {
          var classes = ownerState.classes,
            scroll = ownerState.scroll,
            maxWidth = ownerState.maxWidth,
            fullWidth = ownerState.fullWidth,
            fullScreen = ownerState.fullScreen;
          var slots = {
            root: ['root'],
            container: ['container', "scroll".concat(capitalize(scroll))],
            paper: ['paper', "paperScroll".concat(capitalize(scroll)), "paperWidth".concat(capitalize(String(maxWidth))), fullWidth && 'paperFullWidth', fullScreen && 'paperFullScreen']
          };
          return composeClasses(slots, getDialogUtilityClass, classes);
        };
        var DialogRoot = styled$1(Modal$1, {
          name: 'MuiDialog',
          slot: 'Root',
          overridesResolver: function overridesResolver(props, styles) {
            return styles.root;
          }
        })({
          '@media print': {
            // Use !important to override the Modal inline-style.
            position: 'absolute !important'
          }
        });
        var DialogContainer = styled$1('div', {
          name: 'MuiDialog',
          slot: 'Container',
          overridesResolver: function overridesResolver(props, styles) {
            var ownerState = props.ownerState;
            return [styles.container, styles["scroll".concat(capitalize(ownerState.scroll))]];
          }
        })(function (_ref28) {
          var ownerState = _ref28.ownerState;
          return _extends({
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
          });
        });
        var DialogPaper = styled$1(Paper$1, {
          name: 'MuiDialog',
          slot: 'Paper',
          overridesResolver: function overridesResolver(props, styles) {
            var ownerState = props.ownerState;
            return [styles.paper, styles["scrollPaper".concat(capitalize(ownerState.scroll))], styles["paperWidth".concat(capitalize(String(ownerState.maxWidth)))], ownerState.fullWidth && styles.paperFullWidth, ownerState.fullScreen && styles.paperFullScreen];
          }
        })(function (_ref29) {
          var theme = _ref29.theme,
            ownerState = _ref29.ownerState;
          return _extends({
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
          }, ownerState.maxWidth === 'xs' && _defineProperty2({
            maxWidth: theme.breakpoints.unit === 'px' ? Math.max(theme.breakpoints.values.xs, 444) : "".concat(theme.breakpoints.values.xs).concat(theme.breakpoints.unit)
          }, "&.".concat(dialogClasses$1.paperScrollBody), _defineProperty2({}, theme.breakpoints.down(Math.max(theme.breakpoints.values.xs, 444) + 32 * 2), {
            maxWidth: 'calc(100% - 64px)'
          })), ownerState.maxWidth && ownerState.maxWidth !== 'xs' && _defineProperty2({
            maxWidth: "".concat(theme.breakpoints.values[ownerState.maxWidth]).concat(theme.breakpoints.unit)
          }, "&.".concat(dialogClasses$1.paperScrollBody), _defineProperty2({}, theme.breakpoints.down(theme.breakpoints.values[ownerState.maxWidth] + 32 * 2), {
            maxWidth: 'calc(100% - 64px)'
          })), ownerState.fullWidth && {
            width: 'calc(100% - 64px)'
          }, ownerState.fullScreen && _defineProperty2({
            margin: 0,
            width: '100%',
            maxWidth: '100%',
            height: '100%',
            maxHeight: 'none',
            borderRadius: 0
          }, "&.".concat(dialogClasses$1.paperScrollBody), {
            margin: 0,
            maxWidth: '100%'
          }));
        });

        /**
         * Dialogs are overlaid modal paper based components with a backdrop.
         */
        var Dialog = /*#__PURE__*/reactExports.forwardRef(function Dialog(inProps, ref) {
          var props = useThemeProps({
            props: inProps,
            name: 'MuiDialog'
          });
          var theme = useTheme();
          var defaultTransitionDuration = {
            enter: theme.transitions.duration.enteringScreen,
            exit: theme.transitions.duration.leavingScreen
          };
          var ariaDescribedby = props['aria-describedby'],
            ariaLabelledbyProp = props['aria-labelledby'],
            BackdropComponent = props.BackdropComponent,
            BackdropProps = props.BackdropProps,
            children = props.children,
            className = props.className,
            _props$disableEscapeK3 = props.disableEscapeKeyDown,
            disableEscapeKeyDown = _props$disableEscapeK3 === void 0 ? false : _props$disableEscapeK3,
            _props$fullScreen = props.fullScreen,
            fullScreen = _props$fullScreen === void 0 ? false : _props$fullScreen,
            _props$fullWidth3 = props.fullWidth,
            fullWidth = _props$fullWidth3 === void 0 ? false : _props$fullWidth3,
            _props$maxWidth = props.maxWidth,
            maxWidth = _props$maxWidth === void 0 ? 'sm' : _props$maxWidth,
            onBackdropClick = props.onBackdropClick,
            onClose = props.onClose,
            open = props.open,
            _props$PaperComponent = props.PaperComponent,
            PaperComponent = _props$PaperComponent === void 0 ? Paper$1 : _props$PaperComponent,
            _props$PaperProps = props.PaperProps,
            PaperProps = _props$PaperProps === void 0 ? {} : _props$PaperProps,
            _props$scroll = props.scroll,
            scroll = _props$scroll === void 0 ? 'paper' : _props$scroll,
            _props$TransitionComp3 = props.TransitionComponent,
            TransitionComponent = _props$TransitionComp3 === void 0 ? Fade$1 : _props$TransitionComp3,
            _props$transitionDura = props.transitionDuration,
            transitionDuration = _props$transitionDura === void 0 ? defaultTransitionDuration : _props$transitionDura,
            TransitionProps = props.TransitionProps,
            other = _objectWithoutPropertiesLoose(props, _excluded$h);
          var ownerState = _extends({}, props, {
            disableEscapeKeyDown: disableEscapeKeyDown,
            fullScreen: fullScreen,
            fullWidth: fullWidth,
            maxWidth: maxWidth,
            scroll: scroll
          });
          var classes = useUtilityClasses$e(ownerState);
          var backdropClick = reactExports.useRef();
          var handleMouseDown = function handleMouseDown(event) {
            // We don't want to close the dialog when clicking the dialog content.
            // Make sure the event starts and ends on the same DOM element.
            backdropClick.current = event.target === event.currentTarget;
          };
          var handleBackdropClick = function handleBackdropClick(event) {
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
          var ariaLabelledby = useId(ariaLabelledbyProp);
          var dialogContextValue = reactExports.useMemo(function () {
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
                transitionDuration: transitionDuration,
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
        var Dialog$1 = exports('D', Dialog);
        function getDialogActionsUtilityClass(slot) {
          return generateUtilityClass('MuiDialogActions', slot);
        }
        generateUtilityClasses('MuiDialogActions', ['root', 'spacing']);
        var _excluded$g = ["className", "disableSpacing"];
        var useUtilityClasses$d = function useUtilityClasses$d(ownerState) {
          var classes = ownerState.classes,
            disableSpacing = ownerState.disableSpacing;
          var slots = {
            root: ['root', !disableSpacing && 'spacing']
          };
          return composeClasses(slots, getDialogActionsUtilityClass, classes);
        };
        var DialogActionsRoot = styled$1('div', {
          name: 'MuiDialogActions',
          slot: 'Root',
          overridesResolver: function overridesResolver(props, styles) {
            var ownerState = props.ownerState;
            return [styles.root, !ownerState.disableSpacing && styles.spacing];
          }
        })(function (_ref33) {
          var ownerState = _ref33.ownerState;
          return _extends({
            display: 'flex',
            alignItems: 'center',
            padding: 8,
            justifyContent: 'flex-end',
            flex: '0 0 auto'
          }, !ownerState.disableSpacing && {
            '& > :not(:first-of-type)': {
              marginLeft: 8
            }
          });
        });
        var DialogActions = /*#__PURE__*/reactExports.forwardRef(function DialogActions(inProps, ref) {
          var props = useThemeProps({
            props: inProps,
            name: 'MuiDialogActions'
          });
          var className = props.className,
            _props$disableSpacing = props.disableSpacing,
            disableSpacing = _props$disableSpacing === void 0 ? false : _props$disableSpacing,
            other = _objectWithoutPropertiesLoose(props, _excluded$g);
          var ownerState = _extends({}, props, {
            disableSpacing: disableSpacing
          });
          var classes = useUtilityClasses$d(ownerState);
          return /*#__PURE__*/jsxRuntimeExports.jsx(DialogActionsRoot, _extends({
            className: clsx(classes.root, className),
            ownerState: ownerState,
            ref: ref
          }, other));
        });
        var DialogActions$1 = exports('k', DialogActions);
        function getDialogContentUtilityClass(slot) {
          return generateUtilityClass('MuiDialogContent', slot);
        }
        generateUtilityClasses('MuiDialogContent', ['root', 'dividers']);
        function getDialogTitleUtilityClass(slot) {
          return generateUtilityClass('MuiDialogTitle', slot);
        }
        var dialogTitleClasses = generateUtilityClasses('MuiDialogTitle', ['root']);
        var dialogTitleClasses$1 = dialogTitleClasses;
        var _excluded$f = ["className", "dividers"];
        var useUtilityClasses$c = function useUtilityClasses$c(ownerState) {
          var classes = ownerState.classes,
            dividers = ownerState.dividers;
          var slots = {
            root: ['root', dividers && 'dividers']
          };
          return composeClasses(slots, getDialogContentUtilityClass, classes);
        };
        var DialogContentRoot = styled$1('div', {
          name: 'MuiDialogContent',
          slot: 'Root',
          overridesResolver: function overridesResolver(props, styles) {
            var ownerState = props.ownerState;
            return [styles.root, ownerState.dividers && styles.dividers];
          }
        })(function (_ref34) {
          var theme = _ref34.theme,
            ownerState = _ref34.ownerState;
          return _extends({
            flex: '1 1 auto',
            // Add iOS momentum scrolling for iOS < 13.0
            WebkitOverflowScrolling: 'touch',
            overflowY: 'auto',
            padding: '20px 24px'
          }, ownerState.dividers ? {
            padding: '16px 24px',
            borderTop: "1px solid ".concat((theme.vars || theme).palette.divider),
            borderBottom: "1px solid ".concat((theme.vars || theme).palette.divider)
          } : _defineProperty2({}, ".".concat(dialogTitleClasses$1.root, " + &"), {
            paddingTop: 0
          }));
        });
        var DialogContent = /*#__PURE__*/reactExports.forwardRef(function DialogContent(inProps, ref) {
          var props = useThemeProps({
            props: inProps,
            name: 'MuiDialogContent'
          });
          var className = props.className,
            _props$dividers = props.dividers,
            dividers = _props$dividers === void 0 ? false : _props$dividers,
            other = _objectWithoutPropertiesLoose(props, _excluded$f);
          var ownerState = _extends({}, props, {
            dividers: dividers
          });
          var classes = useUtilityClasses$c(ownerState);
          return /*#__PURE__*/jsxRuntimeExports.jsx(DialogContentRoot, _extends({
            className: clsx(classes.root, className),
            ownerState: ownerState,
            ref: ref
          }, other));
        });
        var DialogContent$1 = exports('j', DialogContent);
        var dividerClasses = generateUtilityClasses('MuiDivider', ['root', 'absolute', 'fullWidth', 'inset', 'middle', 'flexItem', 'light', 'vertical', 'withChildren', 'withChildrenVertical', 'textAlignRight', 'textAlignLeft', 'wrapper', 'wrapperVertical']);
        var dividerClasses$1 = dividerClasses;
        var _excluded$e = ["disableUnderline", "components", "componentsProps", "fullWidth", "hiddenLabel", "inputComponent", "multiline", "slotProps", "slots", "type"];
        var useUtilityClasses$b = function useUtilityClasses$b(ownerState) {
          var classes = ownerState.classes,
            disableUnderline = ownerState.disableUnderline;
          var slots = {
            root: ['root', !disableUnderline && 'underline'],
            input: ['input']
          };
          var composedClasses = composeClasses(slots, getFilledInputUtilityClass, classes);
          return _extends({}, classes, composedClasses);
        };
        var FilledInputRoot = styled$1(InputBaseRoot, {
          shouldForwardProp: function shouldForwardProp(prop) {
            return rootShouldForwardProp(prop) || prop === 'classes';
          },
          name: 'MuiFilledInput',
          slot: 'Root',
          overridesResolver: function overridesResolver(props, styles) {
            var ownerState = props.ownerState;
            return [].concat(_toConsumableArray(rootOverridesResolver(props, styles)), [!ownerState.disableUnderline && styles.underline]);
          }
        })(function (_ref36) {
          var _extends6, _ref37;
          var theme = _ref36.theme,
            ownerState = _ref36.ownerState;
          var _palette;
          var light = theme.palette.mode === 'light';
          var bottomLineColor = light ? 'rgba(0, 0, 0, 0.42)' : 'rgba(255, 255, 255, 0.7)';
          var backgroundColor = light ? 'rgba(0, 0, 0, 0.06)' : 'rgba(255, 255, 255, 0.09)';
          var hoverBackground = light ? 'rgba(0, 0, 0, 0.09)' : 'rgba(255, 255, 255, 0.13)';
          var disabledBackground = light ? 'rgba(0, 0, 0, 0.12)' : 'rgba(255, 255, 255, 0.12)';
          return _extends((_extends6 = {
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
            }
          }, _defineProperty2(_extends6, "&.".concat(filledInputClasses$1.focused), {
            backgroundColor: theme.vars ? theme.vars.palette.FilledInput.bg : backgroundColor
          }), _defineProperty2(_extends6, "&.".concat(filledInputClasses$1.disabled), {
            backgroundColor: theme.vars ? theme.vars.palette.FilledInput.disabledBg : disabledBackground
          }), _extends6), !ownerState.disableUnderline && (_ref37 = {
            '&:after': {
              borderBottom: "2px solid ".concat((_palette = (theme.vars || theme).palette[ownerState.color || 'primary']) == null ? void 0 : _palette.main),
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
            }
          }, _defineProperty2(_ref37, "&.".concat(filledInputClasses$1.focused, ":after"), {
            // translateX(0) is a workaround for Safari transform scale bug
            // See https://github.com/mui/material-ui/issues/31766
            transform: 'scaleX(1) translateX(0)'
          }), _defineProperty2(_ref37, "&.".concat(filledInputClasses$1.error), {
            '&:before, &:after': {
              borderBottomColor: (theme.vars || theme).palette.error.main
            }
          }), _defineProperty2(_ref37, '&:before', {
            borderBottom: "1px solid ".concat(theme.vars ? "rgba(".concat(theme.vars.palette.common.onBackgroundChannel, " / ").concat(theme.vars.opacity.inputUnderline, ")") : bottomLineColor),
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
          }), _defineProperty2(_ref37, "&:hover:not(.".concat(filledInputClasses$1.disabled, ", .").concat(filledInputClasses$1.error, "):before"), {
            borderBottom: "1px solid ".concat((theme.vars || theme).palette.text.primary)
          }), _defineProperty2(_ref37, "&.".concat(filledInputClasses$1.disabled, ":before"), {
            borderBottomStyle: 'dotted'
          }), _ref37), ownerState.startAdornment && {
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
        var FilledInputInput = styled$1(InputBaseComponent, {
          name: 'MuiFilledInput',
          slot: 'Input',
          overridesResolver: inputOverridesResolver
        })(function (_ref38) {
          var theme = _ref38.theme,
            ownerState = _ref38.ownerState;
          return _extends({
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
          }, theme.vars && _defineProperty2({
            '&:-webkit-autofill': {
              borderTopLeftRadius: 'inherit',
              borderTopRightRadius: 'inherit'
            }
          }, theme.getColorSchemeSelector('dark'), {
            '&:-webkit-autofill': {
              WebkitBoxShadow: '0 0 0 100px #266798 inset',
              WebkitTextFillColor: '#fff',
              caretColor: '#fff'
            }
          }), ownerState.size === 'small' && {
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
          });
        });
        var FilledInput = /*#__PURE__*/reactExports.forwardRef(function FilledInput(inProps, ref) {
          var _ref, _slots$root, _ref2, _slots$input;
          var props = useThemeProps({
            props: inProps,
            name: 'MuiFilledInput'
          });
          var _props$components5 = props.components,
            components = _props$components5 === void 0 ? {} : _props$components5,
            componentsPropsProp = props.componentsProps,
            _props$fullWidth4 = props.fullWidth,
            fullWidth = _props$fullWidth4 === void 0 ? false : _props$fullWidth4,
            _props$inputComponent2 = props.inputComponent,
            inputComponent = _props$inputComponent2 === void 0 ? 'input' : _props$inputComponent2,
            _props$multiline2 = props.multiline,
            multiline = _props$multiline2 === void 0 ? false : _props$multiline2,
            slotProps = props.slotProps,
            _props$slots5 = props.slots,
            slots = _props$slots5 === void 0 ? {} : _props$slots5,
            _props$type2 = props.type,
            type = _props$type2 === void 0 ? 'text' : _props$type2,
            other = _objectWithoutPropertiesLoose(props, _excluded$e);
          var ownerState = _extends({}, props, {
            fullWidth: fullWidth,
            inputComponent: inputComponent,
            multiline: multiline,
            type: type
          });
          var classes = useUtilityClasses$b(props);
          var filledInputComponentsProps = {
            root: {
              ownerState: ownerState
            },
            input: {
              ownerState: ownerState
            }
          };
          var componentsProps = (slotProps != null ? slotProps : componentsPropsProp) ? deepmerge(slotProps != null ? slotProps : componentsPropsProp, filledInputComponentsProps) : filledInputComponentsProps;
          var RootSlot = (_ref = (_slots$root = slots.root) != null ? _slots$root : components.Root) != null ? _ref : FilledInputRoot;
          var InputSlot = (_ref2 = (_slots$input = slots.input) != null ? _slots$input : components.Input) != null ? _ref2 : FilledInputInput;
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
        var FilledInput$1 = exports('a3', FilledInput);
        var _excluded$d = ["addEndListener", "appear", "children", "easing", "in", "onEnter", "onEntered", "onEntering", "onExit", "onExited", "onExiting", "style", "timeout", "TransitionComponent"];
        function getScale(value) {
          return "scale(".concat(value, ", ").concat(Math.pow(value, 2), ")");
        }
        var styles = {
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
        var isWebKit154 = typeof navigator !== 'undefined' && /^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent) && /(os |version\/)15(.|_)4/i.test(navigator.userAgent);

        /**
         * The Grow transition is used by the [Tooltip](/material-ui/react-tooltip/) and
         * [Popover](/material-ui/react-popover/) components.
         * It uses [react-transition-group](https://github.com/reactjs/react-transition-group) internally.
         */
        var Grow = /*#__PURE__*/reactExports.forwardRef(function Grow(props, ref) {
          var addEndListener = props.addEndListener,
            _props$appear2 = props.appear,
            appear = _props$appear2 === void 0 ? true : _props$appear2,
            _children2 = props.children,
            easing = props.easing,
            inProp = props.in,
            onEnter = props.onEnter,
            onEntered = props.onEntered,
            onEntering = props.onEntering,
            onExit = props.onExit,
            onExited = props.onExited,
            onExiting = props.onExiting,
            style = props.style,
            _props$timeout2 = props.timeout,
            timeout = _props$timeout2 === void 0 ? 'auto' : _props$timeout2,
            _props$TransitionComp4 = props.TransitionComponent,
            TransitionComponent = _props$TransitionComp4 === void 0 ? Transition$1 : _props$TransitionComp4,
            other = _objectWithoutPropertiesLoose(props, _excluded$d);
          var timer = reactExports.useRef();
          var autoTimeout = reactExports.useRef();
          var theme = useTheme();
          var nodeRef = reactExports.useRef(null);
          var handleRef = useForkRef(nodeRef, _children2.ref, ref);
          var normalizedTransitionCallback = function normalizedTransitionCallback(callback) {
            return function (maybeIsAppearing) {
              if (callback) {
                var node = nodeRef.current;

                // onEnterXxx and onExitXxx callbacks have a different arguments.length value.
                if (maybeIsAppearing === undefined) {
                  callback(node);
                } else {
                  callback(node, maybeIsAppearing);
                }
              }
            };
          };
          var handleEntering = normalizedTransitionCallback(onEntering);
          var handleEnter = normalizedTransitionCallback(function (node, isAppearing) {
            reflow(node); // So the animation always start from the start.

            var _getTransitionProps = getTransitionProps({
                style: style,
                timeout: timeout,
                easing: easing
              }, {
                mode: 'enter'
              }),
              transitionDuration = _getTransitionProps.duration,
              delay = _getTransitionProps.delay,
              transitionTimingFunction = _getTransitionProps.easing;
            var duration;
            if (timeout === 'auto') {
              duration = theme.transitions.getAutoHeightDuration(node.clientHeight);
              autoTimeout.current = duration;
            } else {
              duration = transitionDuration;
            }
            node.style.transition = [theme.transitions.create('opacity', {
              duration: duration,
              delay: delay
            }), theme.transitions.create('transform', {
              duration: isWebKit154 ? duration : duration * 0.666,
              delay: delay,
              easing: transitionTimingFunction
            })].join(',');
            if (onEnter) {
              onEnter(node, isAppearing);
            }
          });
          var handleEntered = normalizedTransitionCallback(onEntered);
          var handleExiting = normalizedTransitionCallback(onExiting);
          var handleExit = normalizedTransitionCallback(function (node) {
            var _getTransitionProps2 = getTransitionProps({
                style: style,
                timeout: timeout,
                easing: easing
              }, {
                mode: 'exit'
              }),
              transitionDuration = _getTransitionProps2.duration,
              delay = _getTransitionProps2.delay,
              transitionTimingFunction = _getTransitionProps2.easing;
            var duration;
            if (timeout === 'auto') {
              duration = theme.transitions.getAutoHeightDuration(node.clientHeight);
              autoTimeout.current = duration;
            } else {
              duration = transitionDuration;
            }
            node.style.transition = [theme.transitions.create('opacity', {
              duration: duration,
              delay: delay
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
          var handleExited = normalizedTransitionCallback(onExited);
          var handleAddEndListener = function handleAddEndListener(next) {
            if (timeout === 'auto') {
              timer.current = setTimeout(next, autoTimeout.current || 0);
            }
            if (addEndListener) {
              // Old call signature before `react-transition-group` implemented `nodeRef`
              addEndListener(nodeRef.current, next);
            }
          };
          reactExports.useEffect(function () {
            return function () {
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
            children: function children(state, childProps) {
              return /*#__PURE__*/reactExports.cloneElement(_children2, _extends({
                style: _extends({
                  opacity: 0,
                  transform: getScale(0.75),
                  visibility: state === 'exited' && !inProp ? 'hidden' : undefined
                }, styles[state], style, _children2.props.style),
                ref: handleRef
              }, childProps));
            }
          }));
        });
        Grow.muiSupportAuto = true;
        var Grow$1 = exports('K', Grow);
        var _excluded$c = ["disableUnderline", "components", "componentsProps", "fullWidth", "inputComponent", "multiline", "slotProps", "slots", "type"];
        var useUtilityClasses$a = function useUtilityClasses$a(ownerState) {
          var classes = ownerState.classes,
            disableUnderline = ownerState.disableUnderline;
          var slots = {
            root: ['root', !disableUnderline && 'underline'],
            input: ['input']
          };
          var composedClasses = composeClasses(slots, getInputUtilityClass, classes);
          return _extends({}, classes, composedClasses);
        };
        var InputRoot = styled$1(InputBaseRoot, {
          shouldForwardProp: function shouldForwardProp(prop) {
            return rootShouldForwardProp(prop) || prop === 'classes';
          },
          name: 'MuiInput',
          slot: 'Root',
          overridesResolver: function overridesResolver(props, styles) {
            var ownerState = props.ownerState;
            return [].concat(_toConsumableArray(rootOverridesResolver(props, styles)), [!ownerState.disableUnderline && styles.underline]);
          }
        })(function (_ref40) {
          var _ref41;
          var theme = _ref40.theme,
            ownerState = _ref40.ownerState;
          var light = theme.palette.mode === 'light';
          var bottomLineColor = light ? 'rgba(0, 0, 0, 0.42)' : 'rgba(255, 255, 255, 0.7)';
          if (theme.vars) {
            bottomLineColor = "rgba(".concat(theme.vars.palette.common.onBackgroundChannel, " / ").concat(theme.vars.opacity.inputUnderline, ")");
          }
          return _extends({
            position: 'relative'
          }, ownerState.formControl && {
            'label + &': {
              marginTop: 16
            }
          }, !ownerState.disableUnderline && (_ref41 = {
            '&:after': {
              borderBottom: "2px solid ".concat((theme.vars || theme).palette[ownerState.color].main),
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
            }
          }, _defineProperty2(_ref41, "&.".concat(inputClasses$1.focused, ":after"), {
            // translateX(0) is a workaround for Safari transform scale bug
            // See https://github.com/mui/material-ui/issues/31766
            transform: 'scaleX(1) translateX(0)'
          }), _defineProperty2(_ref41, "&.".concat(inputClasses$1.error), {
            '&:before, &:after': {
              borderBottomColor: (theme.vars || theme).palette.error.main
            }
          }), _defineProperty2(_ref41, '&:before', {
            borderBottom: "1px solid ".concat(bottomLineColor),
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
          }), _defineProperty2(_ref41, "&:hover:not(.".concat(inputClasses$1.disabled, ", .").concat(inputClasses$1.error, "):before"), {
            borderBottom: "2px solid ".concat((theme.vars || theme).palette.text.primary),
            // Reset on touch devices, it doesn't add specificity
            '@media (hover: none)': {
              borderBottom: "1px solid ".concat(bottomLineColor)
            }
          }), _defineProperty2(_ref41, "&.".concat(inputClasses$1.disabled, ":before"), {
            borderBottomStyle: 'dotted'
          }), _ref41));
        });
        var InputInput = styled$1(InputBaseComponent, {
          name: 'MuiInput',
          slot: 'Input',
          overridesResolver: inputOverridesResolver
        })({});
        var Input = /*#__PURE__*/reactExports.forwardRef(function Input(inProps, ref) {
          var _ref, _slots$root, _ref2, _slots$input;
          var props = useThemeProps({
            props: inProps,
            name: 'MuiInput'
          });
          var disableUnderline = props.disableUnderline,
            _props$components6 = props.components,
            components = _props$components6 === void 0 ? {} : _props$components6,
            componentsPropsProp = props.componentsProps,
            _props$fullWidth5 = props.fullWidth,
            fullWidth = _props$fullWidth5 === void 0 ? false : _props$fullWidth5,
            _props$inputComponent3 = props.inputComponent,
            inputComponent = _props$inputComponent3 === void 0 ? 'input' : _props$inputComponent3,
            _props$multiline3 = props.multiline,
            multiline = _props$multiline3 === void 0 ? false : _props$multiline3,
            slotProps = props.slotProps,
            _props$slots6 = props.slots,
            slots = _props$slots6 === void 0 ? {} : _props$slots6,
            _props$type3 = props.type,
            type = _props$type3 === void 0 ? 'text' : _props$type3,
            other = _objectWithoutPropertiesLoose(props, _excluded$c);
          var classes = useUtilityClasses$a(props);
          var ownerState = {
            disableUnderline: disableUnderline
          };
          var inputComponentsProps = {
            root: {
              ownerState: ownerState
            }
          };
          var componentsProps = (slotProps != null ? slotProps : componentsPropsProp) ? deepmerge(slotProps != null ? slotProps : componentsPropsProp, inputComponentsProps) : inputComponentsProps;
          var RootSlot = (_ref = (_slots$root = slots.root) != null ? _slots$root : components.Root) != null ? _ref : InputRoot;
          var InputSlot = (_ref2 = (_slots$input = slots.input) != null ? _slots$input : components.Input) != null ? _ref2 : InputInput;
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
        var Input$1 = exports('I', Input);

        /**
         * @ignore - internal component.
         */
        var ListContext = /*#__PURE__*/reactExports.createContext({});
        var ListContext$1 = exports('L', ListContext);
        function getListUtilityClass(slot) {
          return generateUtilityClass('MuiList', slot);
        }
        generateUtilityClasses('MuiList', ['root', 'padding', 'dense', 'subheader']);
        var _excluded$b = ["children", "className", "component", "dense", "disablePadding", "subheader"];
        var useUtilityClasses$9 = function useUtilityClasses$9(ownerState) {
          var classes = ownerState.classes,
            disablePadding = ownerState.disablePadding,
            dense = ownerState.dense,
            subheader = ownerState.subheader;
          var slots = {
            root: ['root', !disablePadding && 'padding', dense && 'dense', subheader && 'subheader']
          };
          return composeClasses(slots, getListUtilityClass, classes);
        };
        var ListRoot = styled$1('ul', {
          name: 'MuiList',
          slot: 'Root',
          overridesResolver: function overridesResolver(props, styles) {
            var ownerState = props.ownerState;
            return [styles.root, !ownerState.disablePadding && styles.padding, ownerState.dense && styles.dense, ownerState.subheader && styles.subheader];
          }
        })(function (_ref42) {
          var ownerState = _ref42.ownerState;
          return _extends({
            listStyle: 'none',
            margin: 0,
            padding: 0,
            position: 'relative'
          }, !ownerState.disablePadding && {
            paddingTop: 8,
            paddingBottom: 8
          }, ownerState.subheader && {
            paddingTop: 0
          });
        });
        var List = /*#__PURE__*/reactExports.forwardRef(function List(inProps, ref) {
          var props = useThemeProps({
            props: inProps,
            name: 'MuiList'
          });
          var children = props.children,
            className = props.className,
            _props$component5 = props.component,
            component = _props$component5 === void 0 ? 'ul' : _props$component5,
            _props$dense = props.dense,
            dense = _props$dense === void 0 ? false : _props$dense,
            _props$disablePadding = props.disablePadding,
            disablePadding = _props$disablePadding === void 0 ? false : _props$disablePadding,
            subheader = props.subheader,
            other = _objectWithoutPropertiesLoose(props, _excluded$b);
          var context = reactExports.useMemo(function () {
            return {
              dense: dense
            };
          }, [dense]);
          var ownerState = _extends({}, props, {
            component: component,
            dense: dense,
            disablePadding: disablePadding
          });
          var classes = useUtilityClasses$9(ownerState);
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
        var List$1 = List;
        var listItemIconClasses = generateUtilityClasses('MuiListItemIcon', ['root', 'alignItemsFlexStart']);
        var listItemIconClasses$1 = listItemIconClasses;
        function getListItemTextUtilityClass(slot) {
          return generateUtilityClass('MuiListItemText', slot);
        }
        var listItemTextClasses = generateUtilityClasses('MuiListItemText', ['root', 'multiline', 'dense', 'inset', 'primary', 'secondary']);
        var listItemTextClasses$1 = exports('G', listItemTextClasses);
        var _excluded$a = ["actions", "autoFocus", "autoFocusItem", "children", "className", "disabledItemsFocusable", "disableListWrap", "onKeyDown", "variant"];
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
          var text = nextFocus.innerText;
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
          var wrappedOnce = false;
          var nextFocus = traversalFunction(list, currentFocus, currentFocus ? disableListWrap : false);
          while (nextFocus) {
            // Prevent infinite loop.
            if (nextFocus === list.firstChild) {
              if (wrappedOnce) {
                return false;
              }
              wrappedOnce = true;
            }

            // Same logic as useAutocomplete.js
            var nextFocusDisabled = disabledItemsFocusable ? false : nextFocus.disabled || nextFocus.getAttribute('aria-disabled') === 'true';
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
        var MenuList = /*#__PURE__*/reactExports.forwardRef(function MenuList(props, ref) {
          var actions = props.actions,
            _props$autoFocus = props.autoFocus,
            autoFocus = _props$autoFocus === void 0 ? false : _props$autoFocus,
            _props$autoFocusItem = props.autoFocusItem,
            autoFocusItem = _props$autoFocusItem === void 0 ? false : _props$autoFocusItem,
            children = props.children,
            className = props.className,
            _props$disabledItemsF = props.disabledItemsFocusable,
            disabledItemsFocusable = _props$disabledItemsF === void 0 ? false : _props$disabledItemsF,
            _props$disableListWra = props.disableListWrap,
            disableListWrap = _props$disableListWra === void 0 ? false : _props$disableListWra,
            onKeyDown = props.onKeyDown,
            _props$variant5 = props.variant,
            variant = _props$variant5 === void 0 ? 'selectedMenu' : _props$variant5,
            other = _objectWithoutPropertiesLoose(props, _excluded$a);
          var listRef = reactExports.useRef(null);
          var textCriteriaRef = reactExports.useRef({
            keys: [],
            repeating: true,
            previousKeyMatched: true,
            lastTime: null
          });
          useEnhancedEffect(function () {
            if (autoFocus) {
              listRef.current.focus();
            }
          }, [autoFocus]);
          reactExports.useImperativeHandle(actions, function () {
            return {
              adjustStyleForScrollbar: function adjustStyleForScrollbar(containerElement, theme) {
                // Let's ignore that piece of logic if users are already overriding the width
                // of the menu.
                var noExplicitWidth = !listRef.current.style.width;
                if (containerElement.clientHeight < listRef.current.clientHeight && noExplicitWidth) {
                  var scrollbarSize = "".concat(getScrollbarSize(ownerDocument(containerElement)), "px");
                  listRef.current.style[theme.direction === 'rtl' ? 'paddingLeft' : 'paddingRight'] = scrollbarSize;
                  listRef.current.style.width = "calc(100% + ".concat(scrollbarSize, ")");
                }
                return listRef.current;
              }
            };
          }, []);
          var handleKeyDown = function handleKeyDown(event) {
            var list = listRef.current;
            var key = event.key;
            /**
             * @type {Element} - will always be defined since we are in a keydown handler
             * attached to an element. A keydown event is either dispatched to the activeElement
             * or document.body or document.documentElement. Only the first case will
             * trigger this specific handler.
             */
            var currentFocus = ownerDocument(list).activeElement;
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
              var criteria = textCriteriaRef.current;
              var lowerKey = key.toLowerCase();
              var currTime = performance.now();
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
              var keepFocusOnCurrent = currentFocus && !criteria.repeating && textCriteriaMatches(currentFocus, criteria);
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
          var handleRef = useForkRef(listRef, ref);

          /**
           * the index of the item should receive focus
           * in a `variant="selectedMenu"` it's the first `selected` item
           * otherwise it's the very first item.
           */
          var activeItemIndex = -1;
          // since we inject focus related props into children we have to do a lookahead
          // to check if there is a `selected` item. We're looking for the last `selected`
          // item and use the first valid item as a fallback
          reactExports.Children.forEach(children, function (child, index) {
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
          var items = reactExports.Children.map(children, function (child, index) {
            if (index === activeItemIndex) {
              var newChildProps = {};
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
        var MenuList$1 = MenuList;
        function getPopoverUtilityClass(slot) {
          return generateUtilityClass('MuiPopover', slot);
        }
        generateUtilityClasses('MuiPopover', ['root', 'paper']);
        var _excluded$9 = ["onEntering"],
          _excluded2$2 = ["action", "anchorEl", "anchorOrigin", "anchorPosition", "anchorReference", "children", "className", "container", "elevation", "marginThreshold", "open", "PaperProps", "transformOrigin", "TransitionComponent", "transitionDuration", "TransitionProps"];
        function getOffsetTop(rect, vertical) {
          var offset = 0;
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
          var offset = 0;
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
          return [transformOrigin.horizontal, transformOrigin.vertical].map(function (n) {
            return typeof n === 'number' ? "".concat(n, "px") : n;
          }).join(' ');
        }
        function resolveAnchorEl(anchorEl) {
          return typeof anchorEl === 'function' ? anchorEl() : anchorEl;
        }
        var useUtilityClasses$8 = function useUtilityClasses$8(ownerState) {
          var classes = ownerState.classes;
          var slots = {
            root: ['root'],
            paper: ['paper']
          };
          return composeClasses(slots, getPopoverUtilityClass, classes);
        };
        var PopoverRoot = styled$1(Modal$1, {
          name: 'MuiPopover',
          slot: 'Root',
          overridesResolver: function overridesResolver(props, styles) {
            return styles.root;
          }
        })({});
        var PopoverPaper = styled$1(Paper$1, {
          name: 'MuiPopover',
          slot: 'Paper',
          overridesResolver: function overridesResolver(props, styles) {
            return styles.paper;
          }
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
        var Popover = /*#__PURE__*/reactExports.forwardRef(function Popover(inProps, ref) {
          var props = useThemeProps({
            props: inProps,
            name: 'MuiPopover'
          });
          var action = props.action,
            anchorEl = props.anchorEl,
            _props$anchorOrigin = props.anchorOrigin,
            anchorOrigin = _props$anchorOrigin === void 0 ? {
              vertical: 'top',
              horizontal: 'left'
            } : _props$anchorOrigin,
            anchorPosition = props.anchorPosition,
            _props$anchorReferenc = props.anchorReference,
            anchorReference = _props$anchorReferenc === void 0 ? 'anchorEl' : _props$anchorReferenc,
            children = props.children,
            className = props.className,
            containerProp = props.container,
            _props$elevation2 = props.elevation,
            elevation = _props$elevation2 === void 0 ? 8 : _props$elevation2,
            _props$marginThreshol = props.marginThreshold,
            marginThreshold = _props$marginThreshol === void 0 ? 16 : _props$marginThreshol,
            open = props.open,
            _props$PaperProps2 = props.PaperProps,
            PaperProps = _props$PaperProps2 === void 0 ? {} : _props$PaperProps2,
            _props$transformOrigi = props.transformOrigin,
            transformOrigin = _props$transformOrigi === void 0 ? {
              vertical: 'top',
              horizontal: 'left'
            } : _props$transformOrigi,
            _props$TransitionComp5 = props.TransitionComponent,
            TransitionComponent = _props$TransitionComp5 === void 0 ? Grow$1 : _props$TransitionComp5,
            _props$transitionDura2 = props.transitionDuration,
            transitionDurationProp = _props$transitionDura2 === void 0 ? 'auto' : _props$transitionDura2,
            _props$TransitionProp = props.TransitionProps,
            _props$TransitionProp2 = _props$TransitionProp === void 0 ? {} : _props$TransitionProp,
            onEntering = _props$TransitionProp2.onEntering,
            TransitionProps = _objectWithoutPropertiesLoose(props.TransitionProps, _excluded$9),
            other = _objectWithoutPropertiesLoose(props, _excluded2$2);
          var paperRef = reactExports.useRef();
          var handlePaperRef = useForkRef(paperRef, PaperProps.ref);
          var ownerState = _extends({}, props, {
            anchorOrigin: anchorOrigin,
            anchorReference: anchorReference,
            elevation: elevation,
            marginThreshold: marginThreshold,
            PaperProps: PaperProps,
            transformOrigin: transformOrigin,
            TransitionComponent: TransitionComponent,
            transitionDuration: transitionDurationProp,
            TransitionProps: TransitionProps
          });
          var classes = useUtilityClasses$8(ownerState);

          // Returns the top/left offset of the position
          // to attach to on the anchor element (or body if none is provided)
          var getAnchorOffset = reactExports.useCallback(function () {
            if (anchorReference === 'anchorPosition') {
              return anchorPosition;
            }
            var resolvedAnchorEl = resolveAnchorEl(anchorEl);

            // If an anchor element wasn't provided, just use the parent body element of this Popover
            var anchorElement = resolvedAnchorEl && resolvedAnchorEl.nodeType === 1 ? resolvedAnchorEl : ownerDocument(paperRef.current).body;
            var anchorRect = anchorElement.getBoundingClientRect();
            return {
              top: anchorRect.top + getOffsetTop(anchorRect, anchorOrigin.vertical),
              left: anchorRect.left + getOffsetLeft(anchorRect, anchorOrigin.horizontal)
            };
          }, [anchorEl, anchorOrigin.horizontal, anchorOrigin.vertical, anchorPosition, anchorReference]);

          // Returns the base transform origin using the element
          var getTransformOrigin = reactExports.useCallback(function (elemRect) {
            return {
              vertical: getOffsetTop(elemRect, transformOrigin.vertical),
              horizontal: getOffsetLeft(elemRect, transformOrigin.horizontal)
            };
          }, [transformOrigin.horizontal, transformOrigin.vertical]);
          var getPositioningStyle = reactExports.useCallback(function (element) {
            var elemRect = {
              width: element.offsetWidth,
              height: element.offsetHeight
            };

            // Get the transform origin point on the element itself
            var elemTransformOrigin = getTransformOrigin(elemRect);
            if (anchorReference === 'none') {
              return {
                top: null,
                left: null,
                transformOrigin: getTransformOriginValue(elemTransformOrigin)
              };
            }

            // Get the offset of the anchoring element
            var anchorOffset = getAnchorOffset();

            // Calculate element positioning
            var top = anchorOffset.top - elemTransformOrigin.vertical;
            var left = anchorOffset.left - elemTransformOrigin.horizontal;
            var bottom = top + elemRect.height;
            var right = left + elemRect.width;

            // Use the parent window of the anchorEl if provided
            var containerWindow = ownerWindow(resolveAnchorEl(anchorEl));

            // Window thresholds taking required margin into account
            var heightThreshold = containerWindow.innerHeight - marginThreshold;
            var widthThreshold = containerWindow.innerWidth - marginThreshold;

            // Check if the vertical axis needs shifting
            if (top < marginThreshold) {
              var diff = top - marginThreshold;
              top -= diff;
              elemTransformOrigin.vertical += diff;
            } else if (bottom > heightThreshold) {
              var _diff = bottom - heightThreshold;
              top -= _diff;
              elemTransformOrigin.vertical += _diff;
            }

            // Check if the horizontal axis needs shifting
            if (left < marginThreshold) {
              var _diff2 = left - marginThreshold;
              left -= _diff2;
              elemTransformOrigin.horizontal += _diff2;
            } else if (right > widthThreshold) {
              var _diff3 = right - widthThreshold;
              left -= _diff3;
              elemTransformOrigin.horizontal += _diff3;
            }
            return {
              top: "".concat(Math.round(top), "px"),
              left: "".concat(Math.round(left), "px"),
              transformOrigin: getTransformOriginValue(elemTransformOrigin)
            };
          }, [anchorEl, anchorReference, getAnchorOffset, getTransformOrigin, marginThreshold]);
          var _reactExports$useStat19 = reactExports.useState(open),
            _reactExports$useStat20 = _slicedToArray2(_reactExports$useStat19, 2),
            isPositioned = _reactExports$useStat20[0],
            setIsPositioned = _reactExports$useStat20[1];
          var setPositioningStyles = reactExports.useCallback(function () {
            var element = paperRef.current;
            if (!element) {
              return;
            }
            var positioning = getPositioningStyle(element);
            if (positioning.top !== null) {
              element.style.top = positioning.top;
            }
            if (positioning.left !== null) {
              element.style.left = positioning.left;
            }
            element.style.transformOrigin = positioning.transformOrigin;
            setIsPositioned(true);
          }, [getPositioningStyle]);
          var handleEntering = function handleEntering(element, isAppearing) {
            if (onEntering) {
              onEntering(element, isAppearing);
            }
            setPositioningStyles();
          };
          var handleExited = function handleExited() {
            setIsPositioned(false);
          };
          reactExports.useEffect(function () {
            if (open) {
              setPositioningStyles();
            }
          });
          reactExports.useImperativeHandle(action, function () {
            return open ? {
              updatePosition: function updatePosition() {
                setPositioningStyles();
              }
            } : null;
          }, [open, setPositioningStyles]);
          reactExports.useEffect(function () {
            if (!open) {
              return undefined;
            }
            var handleResize = debounce(function () {
              setPositioningStyles();
            });
            var containerWindow = ownerWindow(anchorEl);
            containerWindow.addEventListener('resize', handleResize);
            return function () {
              handleResize.clear();
              containerWindow.removeEventListener('resize', handleResize);
            };
          }, [anchorEl, open, setPositioningStyles]);
          var transitionDuration = transitionDurationProp;
          if (transitionDurationProp === 'auto' && !TransitionComponent.muiSupportAuto) {
            transitionDuration = undefined;
          }

          // If the container prop is provided, use that
          // If the anchorEl prop is provided, use its parent body element as the container
          // If neither are provided let the Modal take care of choosing the container
          var container = containerProp || (anchorEl ? ownerDocument(resolveAnchorEl(anchorEl)).body : undefined);
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
        var Popover$1 = exports('O', Popover);
        function getMenuUtilityClass(slot) {
          return generateUtilityClass('MuiMenu', slot);
        }
        generateUtilityClasses('MuiMenu', ['root', 'paper', 'list']);
        var _excluded$8 = ["onEntering"],
          _excluded2$1 = ["autoFocus", "children", "disableAutoFocusItem", "MenuListProps", "onClose", "open", "PaperProps", "PopoverClasses", "transitionDuration", "TransitionProps", "variant"];
        var RTL_ORIGIN = {
          vertical: 'top',
          horizontal: 'right'
        };
        var LTR_ORIGIN = {
          vertical: 'top',
          horizontal: 'left'
        };
        var useUtilityClasses$7 = function useUtilityClasses$7(ownerState) {
          var classes = ownerState.classes;
          var slots = {
            root: ['root'],
            paper: ['paper'],
            list: ['list']
          };
          return composeClasses(slots, getMenuUtilityClass, classes);
        };
        var MenuRoot = styled$1(Popover$1, {
          shouldForwardProp: function shouldForwardProp(prop) {
            return rootShouldForwardProp(prop) || prop === 'classes';
          },
          name: 'MuiMenu',
          slot: 'Root',
          overridesResolver: function overridesResolver(props, styles) {
            return styles.root;
          }
        })({});
        var MenuPaper = styled$1(Paper$1, {
          name: 'MuiMenu',
          slot: 'Paper',
          overridesResolver: function overridesResolver(props, styles) {
            return styles.paper;
          }
        })({
          // specZ: The maximum height of a simple menu should be one or more rows less than the view
          // height. This ensures a tappable area outside of the simple menu with which to dismiss
          // the menu.
          maxHeight: 'calc(100% - 96px)',
          // Add iOS momentum scrolling for iOS < 13.0
          WebkitOverflowScrolling: 'touch'
        });
        var MenuMenuList = styled$1(MenuList$1, {
          name: 'MuiMenu',
          slot: 'List',
          overridesResolver: function overridesResolver(props, styles) {
            return styles.list;
          }
        })({
          // We disable the focus ring for mouse, touch and keyboard users.
          outline: 0
        });
        var Menu = /*#__PURE__*/reactExports.forwardRef(function Menu(inProps, ref) {
          var props = useThemeProps({
            props: inProps,
            name: 'MuiMenu'
          });
          var _props$autoFocus2 = props.autoFocus,
            autoFocus = _props$autoFocus2 === void 0 ? true : _props$autoFocus2,
            children = props.children,
            _props$disableAutoFoc4 = props.disableAutoFocusItem,
            disableAutoFocusItem = _props$disableAutoFoc4 === void 0 ? false : _props$disableAutoFoc4,
            _props$MenuListProps = props.MenuListProps,
            MenuListProps = _props$MenuListProps === void 0 ? {} : _props$MenuListProps,
            onClose = props.onClose,
            open = props.open,
            _props$PaperProps3 = props.PaperProps,
            PaperProps = _props$PaperProps3 === void 0 ? {} : _props$PaperProps3,
            PopoverClasses = props.PopoverClasses,
            _props$transitionDura3 = props.transitionDuration,
            transitionDuration = _props$transitionDura3 === void 0 ? 'auto' : _props$transitionDura3,
            _props$TransitionProp3 = props.TransitionProps,
            _props$TransitionProp4 = _props$TransitionProp3 === void 0 ? {} : _props$TransitionProp3,
            onEntering = _props$TransitionProp4.onEntering,
            _props$variant6 = props.variant,
            variant = _props$variant6 === void 0 ? 'selectedMenu' : _props$variant6,
            TransitionProps = _objectWithoutPropertiesLoose(props.TransitionProps, _excluded$8),
            other = _objectWithoutPropertiesLoose(props, _excluded2$1);
          var theme = useTheme();
          var isRtl = theme.direction === 'rtl';
          var ownerState = _extends({}, props, {
            autoFocus: autoFocus,
            disableAutoFocusItem: disableAutoFocusItem,
            MenuListProps: MenuListProps,
            onEntering: onEntering,
            PaperProps: PaperProps,
            transitionDuration: transitionDuration,
            TransitionProps: TransitionProps,
            variant: variant
          });
          var classes = useUtilityClasses$7(ownerState);
          var autoFocusItem = autoFocus && !disableAutoFocusItem && open;
          var menuListActionsRef = reactExports.useRef(null);
          var handleEntering = function handleEntering(element, isAppearing) {
            if (menuListActionsRef.current) {
              menuListActionsRef.current.adjustStyleForScrollbar(element, theme);
            }
            if (onEntering) {
              onEntering(element, isAppearing);
            }
          };
          var handleListKeyDown = function handleListKeyDown(event) {
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
          var activeItemIndex = -1;
          // since we inject focus related props into children we have to do a lookahead
          // to check if there is a `selected` item. We're looking for the last `selected`
          // item and use the first valid item as a fallback
          reactExports.Children.map(children, function (child, index) {
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
        var Menu$1 = Menu;
        function getMenuItemUtilityClass(slot) {
          return generateUtilityClass('MuiMenuItem', slot);
        }
        var menuItemClasses = generateUtilityClasses('MuiMenuItem', ['root', 'focusVisible', 'dense', 'disabled', 'divider', 'gutters', 'selected']);
        var menuItemClasses$1 = menuItemClasses;
        var _excluded$7 = ["autoFocus", "component", "dense", "divider", "disableGutters", "focusVisibleClassName", "role", "tabIndex", "className"];
        var overridesResolver = function overridesResolver(props, styles) {
          var ownerState = props.ownerState;
          return [styles.root, ownerState.dense && styles.dense, ownerState.divider && styles.divider, !ownerState.disableGutters && styles.gutters];
        };
        var useUtilityClasses$6 = function useUtilityClasses$6(ownerState) {
          var disabled = ownerState.disabled,
            dense = ownerState.dense,
            divider = ownerState.divider,
            disableGutters = ownerState.disableGutters,
            selected = ownerState.selected,
            classes = ownerState.classes;
          var slots = {
            root: ['root', dense && 'dense', disabled && 'disabled', !disableGutters && 'gutters', divider && 'divider', selected && 'selected']
          };
          var composedClasses = composeClasses(slots, getMenuItemUtilityClass, classes);
          return _extends({}, classes, composedClasses);
        };
        var MenuItemRoot = styled$1(ButtonBase$1, {
          shouldForwardProp: function shouldForwardProp(prop) {
            return rootShouldForwardProp(prop) || prop === 'classes';
          },
          name: 'MuiMenuItem',
          slot: 'Root',
          overridesResolver: overridesResolver
        })(function (_ref43) {
          var _extends7;
          var theme = _ref43.theme,
            ownerState = _ref43.ownerState;
          return _extends({}, theme.typography.body1, {
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
            borderBottom: "1px solid ".concat((theme.vars || theme).palette.divider),
            backgroundClip: 'padding-box'
          }, (_extends7 = {
            '&:hover': {
              textDecoration: 'none',
              backgroundColor: (theme.vars || theme).palette.action.hover,
              // Reset on touch devices, it doesn't add specificity
              '@media (hover: none)': {
                backgroundColor: 'transparent'
              }
            }
          }, _defineProperty2(_extends7, "&.".concat(menuItemClasses$1.selected), _defineProperty2({
            backgroundColor: theme.vars ? "rgba(".concat(theme.vars.palette.primary.mainChannel, " / ").concat(theme.vars.palette.action.selectedOpacity, ")") : alpha(theme.palette.primary.main, theme.palette.action.selectedOpacity)
          }, "&.".concat(menuItemClasses$1.focusVisible), {
            backgroundColor: theme.vars ? "rgba(".concat(theme.vars.palette.primary.mainChannel, " / calc(").concat(theme.vars.palette.action.selectedOpacity, " + ").concat(theme.vars.palette.action.focusOpacity, "))") : alpha(theme.palette.primary.main, theme.palette.action.selectedOpacity + theme.palette.action.focusOpacity)
          })), _defineProperty2(_extends7, "&.".concat(menuItemClasses$1.selected, ":hover"), {
            backgroundColor: theme.vars ? "rgba(".concat(theme.vars.palette.primary.mainChannel, " / calc(").concat(theme.vars.palette.action.selectedOpacity, " + ").concat(theme.vars.palette.action.hoverOpacity, "))") : alpha(theme.palette.primary.main, theme.palette.action.selectedOpacity + theme.palette.action.hoverOpacity),
            // Reset on touch devices, it doesn't add specificity
            '@media (hover: none)': {
              backgroundColor: theme.vars ? "rgba(".concat(theme.vars.palette.primary.mainChannel, " / ").concat(theme.vars.palette.action.selectedOpacity, ")") : alpha(theme.palette.primary.main, theme.palette.action.selectedOpacity)
            }
          }), _defineProperty2(_extends7, "&.".concat(menuItemClasses$1.focusVisible), {
            backgroundColor: (theme.vars || theme).palette.action.focus
          }), _defineProperty2(_extends7, "&.".concat(menuItemClasses$1.disabled), {
            opacity: (theme.vars || theme).palette.action.disabledOpacity
          }), _defineProperty2(_extends7, "& + .".concat(dividerClasses$1.root), {
            marginTop: theme.spacing(1),
            marginBottom: theme.spacing(1)
          }), _defineProperty2(_extends7, "& + .".concat(dividerClasses$1.inset), {
            marginLeft: 52
          }), _defineProperty2(_extends7, "& .".concat(listItemTextClasses$1.root), {
            marginTop: 0,
            marginBottom: 0
          }), _defineProperty2(_extends7, "& .".concat(listItemTextClasses$1.inset), {
            paddingLeft: 36
          }), _defineProperty2(_extends7, "& .".concat(listItemIconClasses$1.root), {
            minWidth: 36
          }), _extends7), !ownerState.dense && _defineProperty2({}, theme.breakpoints.up('sm'), {
            minHeight: 'auto'
          }), ownerState.dense && _extends({
            minHeight: 32,
            // https://m2.material.io/components/menus#specs > Dense
            paddingTop: 4,
            paddingBottom: 4
          }, theme.typography.body2, _defineProperty2({}, "& .".concat(listItemIconClasses$1.root, " svg"), {
            fontSize: '1.25rem'
          })));
        });
        var MenuItem = /*#__PURE__*/reactExports.forwardRef(function MenuItem(inProps, ref) {
          var props = useThemeProps({
            props: inProps,
            name: 'MuiMenuItem'
          });
          var _props$autoFocus3 = props.autoFocus,
            autoFocus = _props$autoFocus3 === void 0 ? false : _props$autoFocus3,
            _props$component6 = props.component,
            component = _props$component6 === void 0 ? 'li' : _props$component6,
            _props$dense2 = props.dense,
            dense = _props$dense2 === void 0 ? false : _props$dense2,
            _props$divider = props.divider,
            divider = _props$divider === void 0 ? false : _props$divider,
            _props$disableGutters = props.disableGutters,
            disableGutters = _props$disableGutters === void 0 ? false : _props$disableGutters,
            focusVisibleClassName = props.focusVisibleClassName,
            _props$role2 = props.role,
            role = _props$role2 === void 0 ? 'menuitem' : _props$role2,
            tabIndexProp = props.tabIndex,
            className = props.className,
            other = _objectWithoutPropertiesLoose(props, _excluded$7);
          var context = reactExports.useContext(ListContext$1);
          var childContext = reactExports.useMemo(function () {
            return {
              dense: dense || context.dense || false,
              disableGutters: disableGutters
            };
          }, [context.dense, dense, disableGutters]);
          var menuItemRef = reactExports.useRef(null);
          useEnhancedEffect(function () {
            if (autoFocus) {
              if (menuItemRef.current) {
                menuItemRef.current.focus();
              }
            }
          }, [autoFocus]);
          var ownerState = _extends({}, props, {
            dense: childContext.dense,
            divider: divider,
            disableGutters: disableGutters
          });
          var classes = useUtilityClasses$6(props);
          var handleRef = useForkRef(menuItemRef, ref);
          var tabIndex;
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
        var MenuItem$1 = exports('d', MenuItem);
        function getNativeSelectUtilityClasses(slot) {
          return generateUtilityClass('MuiNativeSelect', slot);
        }
        var nativeSelectClasses = generateUtilityClasses('MuiNativeSelect', ['root', 'select', 'multiple', 'filled', 'outlined', 'standard', 'disabled', 'icon', 'iconOpen', 'iconFilled', 'iconOutlined', 'iconStandard', 'nativeInput', 'error']);
        var nativeSelectClasses$1 = nativeSelectClasses;
        var _excluded$6 = ["className", "disabled", "error", "IconComponent", "inputRef", "variant"];
        var useUtilityClasses$5 = function useUtilityClasses$5(ownerState) {
          var classes = ownerState.classes,
            variant = ownerState.variant,
            disabled = ownerState.disabled,
            multiple = ownerState.multiple,
            open = ownerState.open,
            error = ownerState.error;
          var slots = {
            select: ['select', variant, disabled && 'disabled', multiple && 'multiple', error && 'error'],
            icon: ['icon', "icon".concat(capitalize(variant)), open && 'iconOpen', disabled && 'disabled']
          };
          return composeClasses(slots, getNativeSelectUtilityClasses, classes);
        };
        var nativeSelectSelectStyles = function nativeSelectSelectStyles(_ref45) {
          var _extends9;
          var ownerState = _ref45.ownerState,
            theme = _ref45.theme;
          return _extends((_extends9 = {
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
              backgroundColor: "rgba(".concat(theme.vars.palette.common.onBackgroundChannel, " / 0.05)")
            } : {
              backgroundColor: theme.palette.mode === 'light' ? 'rgba(0, 0, 0, 0.05)' : 'rgba(255, 255, 255, 0.05)'
            }, {
              borderRadius: 0 // Reset Chrome style
            }),

            // Remove IE11 arrow
            '&::-ms-expand': {
              display: 'none'
            }
          }, _defineProperty2(_extends9, "&.".concat(nativeSelectClasses$1.disabled), {
            cursor: 'default'
          }), _defineProperty2(_extends9, '&[multiple]', {
            height: 'auto'
          }), _defineProperty2(_extends9, '&:not([multiple]) option, &:not([multiple]) optgroup', {
            backgroundColor: (theme.vars || theme).palette.background.paper
          }), _defineProperty2(_extends9, '&&&', {
            paddingRight: 24,
            minWidth: 16 // So it doesn't collapse.
          }), _extends9), ownerState.variant === 'filled' && {
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
        };
        var NativeSelectSelect = styled$1('select', {
          name: 'MuiNativeSelect',
          slot: 'Select',
          shouldForwardProp: rootShouldForwardProp,
          overridesResolver: function overridesResolver(props, styles) {
            var ownerState = props.ownerState;
            return [styles.select, styles[ownerState.variant], ownerState.error && styles.error, _defineProperty2({}, "&.".concat(nativeSelectClasses$1.multiple), styles.multiple)];
          }
        })(nativeSelectSelectStyles);
        var nativeSelectIconStyles = function nativeSelectIconStyles(_ref47) {
          var ownerState = _ref47.ownerState,
            theme = _ref47.theme;
          return _extends(_defineProperty2({
            // We use a position absolute over a flexbox in order to forward the pointer events
            // to the input and to support wrapping tags..
            position: 'absolute',
            right: 0,
            top: 'calc(50% - .5em)',
            // Center vertically, height is 1em
            pointerEvents: 'none',
            // Don't block pointer events on the select under the icon.
            color: (theme.vars || theme).palette.action.active
          }, "&.".concat(nativeSelectClasses$1.disabled), {
            color: (theme.vars || theme).palette.action.disabled
          }), ownerState.open && {
            transform: 'rotate(180deg)'
          }, ownerState.variant === 'filled' && {
            right: 7
          }, ownerState.variant === 'outlined' && {
            right: 7
          });
        };
        var NativeSelectIcon = styled$1('svg', {
          name: 'MuiNativeSelect',
          slot: 'Icon',
          overridesResolver: function overridesResolver(props, styles) {
            var ownerState = props.ownerState;
            return [styles.icon, ownerState.variant && styles["icon".concat(capitalize(ownerState.variant))], ownerState.open && styles.iconOpen];
          }
        })(nativeSelectIconStyles);

        /**
         * @ignore - internal component.
         */
        var NativeSelectInput = /*#__PURE__*/reactExports.forwardRef(function NativeSelectInput(props, ref) {
          var className = props.className,
            disabled = props.disabled,
            error = props.error,
            IconComponent = props.IconComponent,
            inputRef = props.inputRef,
            _props$variant7 = props.variant,
            variant = _props$variant7 === void 0 ? 'standard' : _props$variant7,
            other = _objectWithoutPropertiesLoose(props, _excluded$6);
          var ownerState = _extends({}, props, {
            disabled: disabled,
            variant: variant,
            error: error
          });
          var classes = useUtilityClasses$5(ownerState);
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
        var NativeSelectInput$1 = NativeSelectInput;
        var _span$1;
        var _excluded$5 = ["children", "classes", "className", "label", "notched"];
        var NotchedOutlineRoot$1 = styled$1('fieldset')({
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
        var NotchedOutlineLegend = styled$1('legend')(function (_ref48) {
          var ownerState = _ref48.ownerState,
            theme = _ref48.theme;
          return _extends({
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
          }));
        });

        /**
         * @ignore - internal component.
         */
        function NotchedOutline(props) {
          var className = props.className,
            label = props.label,
            notched = props.notched,
            other = _objectWithoutPropertiesLoose(props, _excluded$5);
          var withLabel = label != null && label !== '';
          var ownerState = _extends({}, props, {
            notched: notched,
            withLabel: withLabel
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
        var _excluded$4 = ["components", "fullWidth", "inputComponent", "label", "multiline", "notched", "slots", "type"];
        var useUtilityClasses$4 = function useUtilityClasses$4(ownerState) {
          var classes = ownerState.classes;
          var slots = {
            root: ['root'],
            notchedOutline: ['notchedOutline'],
            input: ['input']
          };
          var composedClasses = composeClasses(slots, getOutlinedInputUtilityClass, classes);
          return _extends({}, classes, composedClasses);
        };
        var OutlinedInputRoot = styled$1(InputBaseRoot, {
          shouldForwardProp: function shouldForwardProp(prop) {
            return rootShouldForwardProp(prop) || prop === 'classes';
          },
          name: 'MuiOutlinedInput',
          slot: 'Root',
          overridesResolver: rootOverridesResolver
        })(function (_ref49) {
          var _extends11;
          var theme = _ref49.theme,
            ownerState = _ref49.ownerState;
          var borderColor = theme.palette.mode === 'light' ? 'rgba(0, 0, 0, 0.23)' : 'rgba(255, 255, 255, 0.23)';
          return _extends((_extends11 = {
            position: 'relative',
            borderRadius: (theme.vars || theme).shape.borderRadius
          }, _defineProperty2(_extends11, "&:hover .".concat(outlinedInputClasses$1.notchedOutline), {
            borderColor: (theme.vars || theme).palette.text.primary
          }), _defineProperty2(_extends11, '@media (hover: none)', _defineProperty2({}, "&:hover .".concat(outlinedInputClasses$1.notchedOutline), {
            borderColor: theme.vars ? "rgba(".concat(theme.vars.palette.common.onBackgroundChannel, " / 0.23)") : borderColor
          })), _defineProperty2(_extends11, "&.".concat(outlinedInputClasses$1.focused, " .").concat(outlinedInputClasses$1.notchedOutline), {
            borderColor: (theme.vars || theme).palette[ownerState.color].main,
            borderWidth: 2
          }), _defineProperty2(_extends11, "&.".concat(outlinedInputClasses$1.error, " .").concat(outlinedInputClasses$1.notchedOutline), {
            borderColor: (theme.vars || theme).palette.error.main
          }), _defineProperty2(_extends11, "&.".concat(outlinedInputClasses$1.disabled, " .").concat(outlinedInputClasses$1.notchedOutline), {
            borderColor: (theme.vars || theme).palette.action.disabled
          }), _extends11), ownerState.startAdornment && {
            paddingLeft: 14
          }, ownerState.endAdornment && {
            paddingRight: 14
          }, ownerState.multiline && _extends({
            padding: '16.5px 14px'
          }, ownerState.size === 'small' && {
            padding: '8.5px 14px'
          }));
        });
        var NotchedOutlineRoot = styled$1(NotchedOutline, {
          name: 'MuiOutlinedInput',
          slot: 'NotchedOutline',
          overridesResolver: function overridesResolver(props, styles) {
            return styles.notchedOutline;
          }
        })(function (_ref50) {
          var theme = _ref50.theme;
          var borderColor = theme.palette.mode === 'light' ? 'rgba(0, 0, 0, 0.23)' : 'rgba(255, 255, 255, 0.23)';
          return {
            borderColor: theme.vars ? "rgba(".concat(theme.vars.palette.common.onBackgroundChannel, " / 0.23)") : borderColor
          };
        });
        var OutlinedInputInput = styled$1(InputBaseComponent, {
          name: 'MuiOutlinedInput',
          slot: 'Input',
          overridesResolver: inputOverridesResolver
        })(function (_ref51) {
          var theme = _ref51.theme,
            ownerState = _ref51.ownerState;
          return _extends({
            padding: '16.5px 14px'
          }, !theme.vars && {
            '&:-webkit-autofill': {
              WebkitBoxShadow: theme.palette.mode === 'light' ? null : '0 0 0 100px #266798 inset',
              WebkitTextFillColor: theme.palette.mode === 'light' ? null : '#fff',
              caretColor: theme.palette.mode === 'light' ? null : '#fff',
              borderRadius: 'inherit'
            }
          }, theme.vars && _defineProperty2({
            '&:-webkit-autofill': {
              borderRadius: 'inherit'
            }
          }, theme.getColorSchemeSelector('dark'), {
            '&:-webkit-autofill': {
              WebkitBoxShadow: '0 0 0 100px #266798 inset',
              WebkitTextFillColor: '#fff',
              caretColor: '#fff'
            }
          }), ownerState.size === 'small' && {
            padding: '8.5px 14px'
          }, ownerState.multiline && {
            padding: 0
          }, ownerState.startAdornment && {
            paddingLeft: 0
          }, ownerState.endAdornment && {
            paddingRight: 0
          });
        });
        var OutlinedInput = /*#__PURE__*/reactExports.forwardRef(function OutlinedInput(inProps, ref) {
          var _ref, _slots$root, _ref2, _slots$input, _React$Fragment;
          var props = useThemeProps({
            props: inProps,
            name: 'MuiOutlinedInput'
          });
          var _props$components7 = props.components,
            components = _props$components7 === void 0 ? {} : _props$components7,
            _props$fullWidth6 = props.fullWidth,
            fullWidth = _props$fullWidth6 === void 0 ? false : _props$fullWidth6,
            _props$inputComponent4 = props.inputComponent,
            inputComponent = _props$inputComponent4 === void 0 ? 'input' : _props$inputComponent4,
            label = props.label,
            _props$multiline4 = props.multiline,
            multiline = _props$multiline4 === void 0 ? false : _props$multiline4,
            notched = props.notched,
            _props$slots7 = props.slots,
            slots = _props$slots7 === void 0 ? {} : _props$slots7,
            _props$type4 = props.type,
            type = _props$type4 === void 0 ? 'text' : _props$type4,
            other = _objectWithoutPropertiesLoose(props, _excluded$4);
          var classes = useUtilityClasses$4(props);
          var muiFormControl = useFormControl();
          var fcs = formControlState({
            props: props,
            muiFormControl: muiFormControl,
            states: ['required']
          });
          var ownerState = _extends({}, props, {
            color: fcs.color || 'primary',
            disabled: fcs.disabled,
            error: fcs.error,
            focused: fcs.focused,
            formControl: muiFormControl,
            fullWidth: fullWidth,
            hiddenLabel: fcs.hiddenLabel,
            multiline: multiline,
            size: fcs.size,
            type: type
          });
          var RootSlot = (_ref = (_slots$root = slots.root) != null ? _slots$root : components.Root) != null ? _ref : OutlinedInputRoot;
          var InputSlot = (_ref2 = (_slots$input = slots.input) != null ? _slots$input : components.Input) != null ? _ref2 : OutlinedInputInput;
          return /*#__PURE__*/jsxRuntimeExports.jsx(InputBase$1, _extends({
            slots: {
              root: RootSlot,
              input: InputSlot
            },
            renderSuffix: function renderSuffix(state) {
              return /*#__PURE__*/jsxRuntimeExports.jsx(NotchedOutlineRoot, {
                ownerState: ownerState,
                className: classes.notchedOutline,
                label: label != null && label !== '' && fcs.required ? _React$Fragment || (_React$Fragment = /*#__PURE__*/jsxRuntimeExports.jsxs(reactExports.Fragment, {
                  children: [label, "\u2009", '*']
                })) : label,
                notched: typeof notched !== 'undefined' ? notched : Boolean(state.startAdornment || state.filled || state.focused)
              });
            },
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
        var OutlinedInput$1 = exports('a4', OutlinedInput);
        function getSelectUtilityClasses(slot) {
          return generateUtilityClass('MuiSelect', slot);
        }
        var selectClasses = generateUtilityClasses('MuiSelect', ['select', 'multiple', 'filled', 'outlined', 'standard', 'disabled', 'focused', 'icon', 'iconOpen', 'iconFilled', 'iconOutlined', 'iconStandard', 'nativeInput', 'error']);
        var selectClasses$1 = selectClasses;
        var _span;
        var _excluded$3 = ["aria-describedby", "aria-label", "autoFocus", "autoWidth", "children", "className", "defaultOpen", "defaultValue", "disabled", "displayEmpty", "error", "IconComponent", "inputRef", "labelId", "MenuProps", "multiple", "name", "onBlur", "onChange", "onClose", "onFocus", "onOpen", "open", "readOnly", "renderValue", "SelectDisplayProps", "tabIndex", "type", "value", "variant"];
        var SelectSelect = styled$1('div', {
          name: 'MuiSelect',
          slot: 'Select',
          overridesResolver: function overridesResolver(props, styles) {
            var ownerState = props.ownerState;
            return [// Win specificity over the input base
            _defineProperty2({}, "&.".concat(selectClasses$1.select), styles.select), _defineProperty2({}, "&.".concat(selectClasses$1.select), styles[ownerState.variant]), _defineProperty2({}, "&.".concat(selectClasses$1.error), styles.error), _defineProperty2({}, "&.".concat(selectClasses$1.multiple), styles.multiple)];
          }
        })(nativeSelectSelectStyles, _defineProperty2({}, "&.".concat(selectClasses$1.select), {
          height: 'auto',
          // Resets for multiple select with chips
          minHeight: '1.4375em',
          // Required for select\text-field height consistency
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
          overflow: 'hidden'
        }));
        var SelectIcon = styled$1('svg', {
          name: 'MuiSelect',
          slot: 'Icon',
          overridesResolver: function overridesResolver(props, styles) {
            var ownerState = props.ownerState;
            return [styles.icon, ownerState.variant && styles["icon".concat(capitalize(ownerState.variant))], ownerState.open && styles.iconOpen];
          }
        })(nativeSelectIconStyles);
        var SelectNativeInput = styled$1('input', {
          shouldForwardProp: function shouldForwardProp(prop) {
            return slotShouldForwardProp(prop) && prop !== 'classes';
          },
          name: 'MuiSelect',
          slot: 'NativeInput',
          overridesResolver: function overridesResolver(props, styles) {
            return styles.nativeInput;
          }
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
          if (_typeof(b) === 'object' && b !== null) {
            return a === b;
          }

          // The value could be a number, the DOM will stringify it anyway.
          return String(a) === String(b);
        }
        function isEmpty(display) {
          return display == null || typeof display === 'string' && !display.trim();
        }
        var useUtilityClasses$3 = function useUtilityClasses$3(ownerState) {
          var classes = ownerState.classes,
            variant = ownerState.variant,
            disabled = ownerState.disabled,
            multiple = ownerState.multiple,
            open = ownerState.open,
            error = ownerState.error;
          var slots = {
            select: ['select', variant, disabled && 'disabled', multiple && 'multiple', error && 'error'],
            icon: ['icon', "icon".concat(capitalize(variant)), open && 'iconOpen', disabled && 'disabled'],
            nativeInput: ['nativeInput']
          };
          return composeClasses(slots, getSelectUtilityClasses, classes);
        };

        /**
         * @ignore - internal component.
         */
        var SelectInput = /*#__PURE__*/reactExports.forwardRef(function SelectInput(props, ref) {
          var ariaDescribedby = props['aria-describedby'],
            ariaLabel = props['aria-label'],
            autoFocus = props.autoFocus,
            autoWidth = props.autoWidth,
            children = props.children,
            className = props.className,
            defaultOpen = props.defaultOpen,
            defaultValue = props.defaultValue,
            disabled = props.disabled,
            displayEmpty = props.displayEmpty,
            _props$error = props.error,
            error = _props$error === void 0 ? false : _props$error,
            IconComponent = props.IconComponent,
            inputRefProp = props.inputRef,
            labelId = props.labelId,
            _props$MenuProps = props.MenuProps,
            MenuProps = _props$MenuProps === void 0 ? {} : _props$MenuProps,
            multiple = props.multiple,
            name = props.name,
            onBlur = props.onBlur,
            onChange = props.onChange,
            onClose = props.onClose,
            onFocus = props.onFocus,
            onOpen = props.onOpen,
            openProp = props.open,
            readOnly = props.readOnly,
            renderValue = props.renderValue,
            _props$SelectDisplayP = props.SelectDisplayProps,
            SelectDisplayProps = _props$SelectDisplayP === void 0 ? {} : _props$SelectDisplayP,
            tabIndexProp = props.tabIndex,
            valueProp = props.value,
            _props$variant8 = props.variant,
            variant = _props$variant8 === void 0 ? 'standard' : _props$variant8,
            other = _objectWithoutPropertiesLoose(props, _excluded$3);
          var _useControlled = useControlled({
              controlled: valueProp,
              default: defaultValue,
              name: 'Select'
            }),
            _useControlled2 = _slicedToArray2(_useControlled, 2),
            value = _useControlled2[0],
            setValueState = _useControlled2[1];
          var _useControlled3 = useControlled({
              controlled: openProp,
              default: defaultOpen,
              name: 'Select'
            }),
            _useControlled4 = _slicedToArray2(_useControlled3, 2),
            openState = _useControlled4[0],
            setOpenState = _useControlled4[1];
          var inputRef = reactExports.useRef(null);
          var displayRef = reactExports.useRef(null);
          var _reactExports$useStat21 = reactExports.useState(null),
            _reactExports$useStat22 = _slicedToArray2(_reactExports$useStat21, 2),
            displayNode = _reactExports$useStat22[0],
            setDisplayNode = _reactExports$useStat22[1];
          var _reactExports$useRef3 = reactExports.useRef(openProp != null),
            isOpenControlled = _reactExports$useRef3.current;
          var _reactExports$useStat23 = reactExports.useState(),
            _reactExports$useStat24 = _slicedToArray2(_reactExports$useStat23, 2),
            menuMinWidthState = _reactExports$useStat24[0],
            setMenuMinWidthState = _reactExports$useStat24[1];
          var handleRef = useForkRef(ref, inputRefProp);
          var handleDisplayRef = reactExports.useCallback(function (node) {
            displayRef.current = node;
            if (node) {
              setDisplayNode(node);
            }
          }, []);
          var anchorElement = displayNode == null ? void 0 : displayNode.parentNode;
          reactExports.useImperativeHandle(handleRef, function () {
            return {
              focus: function focus() {
                displayRef.current.focus();
              },
              node: inputRef.current,
              value: value
            };
          }, [value]);

          // Resize menu on `defaultOpen` automatic toggle.
          reactExports.useEffect(function () {
            if (defaultOpen && openState && displayNode && !isOpenControlled) {
              setMenuMinWidthState(autoWidth ? null : anchorElement.clientWidth);
              displayRef.current.focus();
            }
            // eslint-disable-next-line react-hooks/exhaustive-deps
          }, [displayNode, autoWidth]);
          // `isOpenControlled` is ignored because the component should never switch between controlled and uncontrolled modes.
          // `defaultOpen` and `openState` are ignored to avoid unnecessary callbacks.
          reactExports.useEffect(function () {
            if (autoFocus) {
              displayRef.current.focus();
            }
          }, [autoFocus]);
          reactExports.useEffect(function () {
            if (!labelId) {
              return undefined;
            }
            var label = ownerDocument(displayRef.current).getElementById(labelId);
            if (label) {
              var handler = function handler() {
                if (getSelection().isCollapsed) {
                  displayRef.current.focus();
                }
              };
              label.addEventListener('click', handler);
              return function () {
                label.removeEventListener('click', handler);
              };
            }
            return undefined;
          }, [labelId]);
          var update = function update(open, event) {
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
          var handleMouseDown = function handleMouseDown(event) {
            // Ignore everything but left-click
            if (event.button !== 0) {
              return;
            }
            // Hijack the default focus behavior.
            event.preventDefault();
            displayRef.current.focus();
            update(true, event);
          };
          var handleClose = function handleClose(event) {
            update(false, event);
          };
          var childrenArray = reactExports.Children.toArray(children);

          // Support autofill.
          var handleChange = function handleChange(event) {
            var index = childrenArray.map(function (child) {
              return child.props.value;
            }).indexOf(event.target.value);
            if (index === -1) {
              return;
            }
            var child = childrenArray[index];
            setValueState(child.props.value);
            if (onChange) {
              onChange(event, child);
            }
          };
          var handleItemClick = function handleItemClick(child) {
            return function (event) {
              var newValue;

              // We use the tabindex attribute to signal the available options.
              if (!event.currentTarget.hasAttribute('tabindex')) {
                return;
              }
              if (multiple) {
                newValue = Array.isArray(value) ? value.slice() : [];
                var itemIndex = value.indexOf(child.props.value);
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
                  var nativeEvent = event.nativeEvent || event;
                  var clonedEvent = new nativeEvent.constructor(nativeEvent.type, nativeEvent);
                  Object.defineProperty(clonedEvent, 'target', {
                    writable: true,
                    value: {
                      value: newValue,
                      name: name
                    }
                  });
                  onChange(clonedEvent, child);
                }
              }
              if (!multiple) {
                update(false, event);
              }
            };
          };
          var handleKeyDown = function handleKeyDown(event) {
            if (!readOnly) {
              var validKeys = [' ', 'ArrowUp', 'ArrowDown',
              // The native select doesn't respond to enter on macOS, but it's recommended by
              // https://www.w3.org/WAI/ARIA/apg/patterns/combobox/examples/combobox-select-only/
              'Enter'];
              if (validKeys.indexOf(event.key) !== -1) {
                event.preventDefault();
                update(true, event);
              }
            }
          };
          var open = displayNode !== null && openState;
          var handleBlur = function handleBlur(event) {
            // if open event.stopImmediatePropagation
            if (!open && onBlur) {
              // Preact support, target is read only property on a native event.
              Object.defineProperty(event, 'target', {
                writable: true,
                value: {
                  value: value,
                  name: name
                }
              });
              onBlur(event);
            }
          };
          delete other['aria-invalid'];
          var display;
          var displaySingle;
          var displayMultiple = [];
          var computeDisplay = false;

          // No need to display any value if the field is empty.
          if (isFilled({
            value: value
          }) || displayEmpty) {
            if (renderValue) {
              display = renderValue(value);
            } else {
              computeDisplay = true;
            }
          }
          var items = childrenArray.map(function (child) {
            if (! /*#__PURE__*/reactExports.isValidElement(child)) {
              return null;
            }
            var selected;
            if (multiple) {
              if (!Array.isArray(value)) {
                throw new Error(formatMuiErrorMessage(2));
              }
              selected = value.some(function (v) {
                return areEqualValues(v, child.props.value);
              });
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
              onKeyUp: function onKeyUp(event) {
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
              selected: selected,
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
                display = displayMultiple.reduce(function (output, child, index) {
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
          var menuMinWidth = menuMinWidthState;
          if (!autoWidth && isOpenControlled && displayNode) {
            menuMinWidth = anchorElement.clientWidth;
          }
          var tabIndex;
          if (typeof tabIndexProp !== 'undefined') {
            tabIndex = tabIndexProp;
          } else {
            tabIndex = disabled ? null : 0;
          }
          var buttonId = SelectDisplayProps.id || (name ? "mui-component-select-".concat(name) : undefined);
          var ownerState = _extends({}, props, {
            variant: variant,
            value: value,
            open: open,
            error: error
          });
          var classes = useUtilityClasses$3(ownerState);
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
              id: "menu-".concat(name || ''),
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
        var SelectInput$1 = SelectInput;
        var _excluded$2 = ["autoWidth", "children", "classes", "className", "defaultOpen", "displayEmpty", "IconComponent", "id", "input", "inputProps", "label", "labelId", "MenuProps", "multiple", "native", "onClose", "onOpen", "open", "renderValue", "SelectDisplayProps", "variant"];
        var useUtilityClasses$2 = function useUtilityClasses$2(ownerState) {
          var classes = ownerState.classes;
          return classes;
        };
        var styledRootConfig = {
          name: 'MuiSelect',
          overridesResolver: function overridesResolver(props, styles) {
            return styles.root;
          },
          shouldForwardProp: function shouldForwardProp(prop) {
            return rootShouldForwardProp(prop) && prop !== 'variant';
          },
          slot: 'Root'
        };
        var StyledInput = styled$1(Input$1, styledRootConfig)('');
        var StyledOutlinedInput = styled$1(OutlinedInput$1, styledRootConfig)('');
        var StyledFilledInput = styled$1(FilledInput$1, styledRootConfig)('');
        var Select = /*#__PURE__*/reactExports.forwardRef(function Select(inProps, ref) {
          var props = useThemeProps({
            name: 'MuiSelect',
            props: inProps
          });
          var _props$autoWidth = props.autoWidth,
            autoWidth = _props$autoWidth === void 0 ? false : _props$autoWidth,
            children = props.children,
            _props$classes2 = props.classes,
            classesProp = _props$classes2 === void 0 ? {} : _props$classes2,
            className = props.className,
            _props$defaultOpen = props.defaultOpen,
            defaultOpen = _props$defaultOpen === void 0 ? false : _props$defaultOpen,
            _props$displayEmpty = props.displayEmpty,
            displayEmpty = _props$displayEmpty === void 0 ? false : _props$displayEmpty,
            _props$IconComponent = props.IconComponent,
            IconComponent = _props$IconComponent === void 0 ? ArrowDropDownIcon : _props$IconComponent,
            id = props.id,
            input = props.input,
            inputProps = props.inputProps,
            label = props.label,
            labelId = props.labelId,
            MenuProps = props.MenuProps,
            _props$multiple = props.multiple,
            multiple = _props$multiple === void 0 ? false : _props$multiple,
            _props$native = props.native,
            native = _props$native === void 0 ? false : _props$native,
            onClose = props.onClose,
            onOpen = props.onOpen,
            open = props.open,
            renderValue = props.renderValue,
            SelectDisplayProps = props.SelectDisplayProps,
            _props$variant9 = props.variant,
            variantProp = _props$variant9 === void 0 ? 'outlined' : _props$variant9,
            other = _objectWithoutPropertiesLoose(props, _excluded$2);
          var inputComponent = native ? NativeSelectInput$1 : SelectInput$1;
          var muiFormControl = useFormControl();
          var fcs = formControlState({
            props: props,
            muiFormControl: muiFormControl,
            states: ['variant', 'error']
          });
          var variant = fcs.variant || variantProp;
          var ownerState = _extends({}, props, {
            variant: variant,
            classes: classesProp
          });
          var classes = useUtilityClasses$2(ownerState);
          var InputComponent = input || {
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
          var inputComponentRef = useForkRef(ref, InputComponent.ref);
          return /*#__PURE__*/jsxRuntimeExports.jsx(reactExports.Fragment, {
            children: /*#__PURE__*/reactExports.cloneElement(InputComponent, _extends({
              // Most of the logic is implemented in `SelectInput`.
              // The `Select` component is a simple API wrapper to expose something better to play with.
              inputComponent: inputComponent,
              inputProps: _extends({
                children: children,
                error: fcs.error,
                IconComponent: IconComponent,
                variant: variant,
                type: undefined,
                // We render a select. We can ignore the type provided by the `Input`.
                multiple: multiple
              }, native ? {
                id: id
              } : {
                autoWidth: autoWidth,
                defaultOpen: defaultOpen,
                displayEmpty: displayEmpty,
                labelId: labelId,
                MenuProps: MenuProps,
                onClose: onClose,
                onOpen: onOpen,
                open: open,
                renderValue: renderValue,
                SelectDisplayProps: _extends({
                  id: id
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
              variant: variant
            }, other))
          });
        });
        Select.muiName = 'Select';
        var Select$1 = exports('c', Select);
        function getSnackbarContentUtilityClass(slot) {
          return generateUtilityClass('MuiSnackbarContent', slot);
        }
        generateUtilityClasses('MuiSnackbarContent', ['root', 'message', 'action']);
        var _excluded$1 = ["action", "className", "message", "role"];
        var useUtilityClasses$1 = function useUtilityClasses$1(ownerState) {
          var classes = ownerState.classes;
          var slots = {
            root: ['root'],
            action: ['action'],
            message: ['message']
          };
          return composeClasses(slots, getSnackbarContentUtilityClass, classes);
        };
        var SnackbarContentRoot = styled$1(Paper$1, {
          name: 'MuiSnackbarContent',
          slot: 'Root',
          overridesResolver: function overridesResolver(props, styles) {
            return styles.root;
          }
        })(function (_ref57) {
          var theme = _ref57.theme;
          var emphasis = theme.palette.mode === 'light' ? 0.8 : 0.98;
          var backgroundColor = emphasize(theme.palette.background.default, emphasis);
          return _extends({}, theme.typography.body2, _defineProperty2({
            color: theme.vars ? theme.vars.palette.SnackbarContent.color : theme.palette.getContrastText(backgroundColor),
            backgroundColor: theme.vars ? theme.vars.palette.SnackbarContent.bg : backgroundColor,
            display: 'flex',
            alignItems: 'center',
            flexWrap: 'wrap',
            padding: '6px 16px',
            borderRadius: (theme.vars || theme).shape.borderRadius,
            flexGrow: 1
          }, theme.breakpoints.up('sm'), {
            flexGrow: 'initial',
            minWidth: 288
          }));
        });
        var SnackbarContentMessage = styled$1('div', {
          name: 'MuiSnackbarContent',
          slot: 'Message',
          overridesResolver: function overridesResolver(props, styles) {
            return styles.message;
          }
        })({
          padding: '8px 0'
        });
        var SnackbarContentAction = styled$1('div', {
          name: 'MuiSnackbarContent',
          slot: 'Action',
          overridesResolver: function overridesResolver(props, styles) {
            return styles.action;
          }
        })({
          display: 'flex',
          alignItems: 'center',
          marginLeft: 'auto',
          paddingLeft: 16,
          marginRight: -8
        });
        var SnackbarContent = /*#__PURE__*/reactExports.forwardRef(function SnackbarContent(inProps, ref) {
          var props = useThemeProps({
            props: inProps,
            name: 'MuiSnackbarContent'
          });
          var action = props.action,
            className = props.className,
            message = props.message,
            _props$role3 = props.role,
            role = _props$role3 === void 0 ? 'alert' : _props$role3,
            other = _objectWithoutPropertiesLoose(props, _excluded$1);
          var ownerState = props;
          var classes = useUtilityClasses$1(ownerState);
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
        var SnackbarContent$1 = SnackbarContent;
        function getSnackbarUtilityClass(slot) {
          return generateUtilityClass('MuiSnackbar', slot);
        }
        generateUtilityClasses('MuiSnackbar', ['root', 'anchorOriginTopCenter', 'anchorOriginBottomCenter', 'anchorOriginTopRight', 'anchorOriginBottomRight', 'anchorOriginTopLeft', 'anchorOriginBottomLeft']);
        var _excluded = ["onEnter", "onExited"],
          _excluded2 = ["action", "anchorOrigin", "autoHideDuration", "children", "className", "ClickAwayListenerProps", "ContentProps", "disableWindowBlurListener", "message", "onBlur", "onClose", "onFocus", "onMouseEnter", "onMouseLeave", "open", "resumeHideDuration", "TransitionComponent", "transitionDuration", "TransitionProps"];
        var useUtilityClasses = function useUtilityClasses(ownerState) {
          var classes = ownerState.classes,
            anchorOrigin = ownerState.anchorOrigin;
          var slots = {
            root: ['root', "anchorOrigin".concat(capitalize(anchorOrigin.vertical)).concat(capitalize(anchorOrigin.horizontal))]
          };
          return composeClasses(slots, getSnackbarUtilityClass, classes);
        };
        var SnackbarRoot = styled$1('div', {
          name: 'MuiSnackbar',
          slot: 'Root',
          overridesResolver: function overridesResolver(props, styles) {
            var ownerState = props.ownerState;
            return [styles.root, styles["anchorOrigin".concat(capitalize(ownerState.anchorOrigin.vertical)).concat(capitalize(ownerState.anchorOrigin.horizontal))]];
          }
        })(function (_ref58) {
          var theme = _ref58.theme,
            ownerState = _ref58.ownerState;
          var center = {
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
          }, _defineProperty2({}, theme.breakpoints.up('sm'), _extends({}, ownerState.anchorOrigin.vertical === 'top' ? {
            top: 24
          } : {
            bottom: 24
          }, ownerState.anchorOrigin.horizontal === 'center' && center, ownerState.anchorOrigin.horizontal === 'left' && {
            left: 24,
            right: 'auto'
          }, ownerState.anchorOrigin.horizontal === 'right' && {
            right: 24,
            left: 'auto'
          })));
        });
        var Snackbar = /*#__PURE__*/reactExports.forwardRef(function Snackbar(inProps, ref) {
          var props = useThemeProps({
            props: inProps,
            name: 'MuiSnackbar'
          });
          var theme = useTheme();
          var defaultTransitionDuration = {
            enter: theme.transitions.duration.enteringScreen,
            exit: theme.transitions.duration.leavingScreen
          };
          var action = props.action,
            _props$anchorOrigin2 = props.anchorOrigin,
            _props$anchorOrigin3 = _props$anchorOrigin2 === void 0 ? {
              vertical: 'bottom',
              horizontal: 'left'
            } : _props$anchorOrigin2,
            vertical = _props$anchorOrigin3.vertical,
            horizontal = _props$anchorOrigin3.horizontal,
            _props$autoHideDurati = props.autoHideDuration,
            autoHideDuration = _props$autoHideDurati === void 0 ? null : _props$autoHideDurati,
            children = props.children,
            className = props.className,
            ClickAwayListenerProps = props.ClickAwayListenerProps,
            ContentProps = props.ContentProps,
            _props$disableWindowB = props.disableWindowBlurListener,
            disableWindowBlurListener = _props$disableWindowB === void 0 ? false : _props$disableWindowB,
            message = props.message,
            open = props.open,
            _props$TransitionComp6 = props.TransitionComponent,
            TransitionComponent = _props$TransitionComp6 === void 0 ? Grow$1 : _props$TransitionComp6,
            _props$transitionDura4 = props.transitionDuration,
            transitionDuration = _props$transitionDura4 === void 0 ? defaultTransitionDuration : _props$transitionDura4,
            _props$TransitionProp5 = props.TransitionProps,
            _props$TransitionProp6 = _props$TransitionProp5 === void 0 ? {} : _props$TransitionProp5,
            onEnter = _props$TransitionProp6.onEnter,
            onExited = _props$TransitionProp6.onExited,
            TransitionProps = _objectWithoutPropertiesLoose(props.TransitionProps, _excluded),
            other = _objectWithoutPropertiesLoose(props, _excluded2);
          var ownerState = _extends({}, props, {
            anchorOrigin: {
              vertical: vertical,
              horizontal: horizontal
            },
            autoHideDuration: autoHideDuration,
            disableWindowBlurListener: disableWindowBlurListener,
            TransitionComponent: TransitionComponent,
            transitionDuration: transitionDuration
          });
          var classes = useUtilityClasses(ownerState);
          var _useSnackbar = useSnackbar(_extends({}, ownerState, {
              ref: ref
            })),
            getRootProps = _useSnackbar.getRootProps,
            onClickAway = _useSnackbar.onClickAway;
          var _reactExports$useStat25 = reactExports.useState(true),
            _reactExports$useStat26 = _slicedToArray2(_reactExports$useStat25, 2),
            exited = _reactExports$useStat26[0],
            setExited = _reactExports$useStat26[1];
          var rootProps = useSlotProps({
            elementType: SnackbarRoot,
            getSlotProps: getRootProps,
            externalForwardedProps: other,
            ownerState: ownerState,
            className: [classes.root, className]
          });
          var handleExited = function handleExited(node) {
            setExited(true);
            if (onExited) {
              onExited(node);
            }
          };
          var handleEnter = function handleEnter(node, isAppearing) {
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
        var Snackbar$1 = exports('S', Snackbar);
        var rtlLanguage = exports('r', ["ar"]);
        var setDocumentLang = exports('s', function (lang) {
          var dir = rtlLanguage.includes(lang) ? "rtl" : "ltr";
          document.documentElement.setAttribute("lang", lang);
          document.dir = dir;
        });
      }
    };
  });
})();
