;
(function () {
  function _slicedToArray2(arr, i) { return _arrayWithHoles2(arr) || _iterableToArrayLimit2(arr, i) || _unsupportedIterableToArray2(arr, i) || _nonIterableRest2(); }
  function _nonIterableRest2() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
  function _unsupportedIterableToArray2(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray2(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray2(o, minLen); }
  function _arrayLikeToArray2(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
  function _iterableToArrayLimit2(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
  function _arrayWithHoles2(arr) { if (Array.isArray(arr)) return arr; }
  function _typeof2(obj) { "@babel/helpers - typeof"; return _typeof2 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof2(obj); }
  function _defineProperty2(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof2(key) === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (_typeof2(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof2(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
  System.register(['./index-legacy-bc4d1445.js', './FormControlLabel-legacy-e4451f07.js', './FormGroup-legacy-2e722597.js', './common-legacy-e4fabe10.js', './DatePicker-legacy-a1914527.js', './KeyboardArrowRight-legacy-95d2f3dd.js'], function (exports, module) {
    'use strict';

    var __vite_style__ = document.createElement('style');
    __vite_style__.textContent = "._main_1b9ly_1 {\n  position: relative;\n  min-height: 100vh;\n}\n";
    document.head.appendChild(__vite_style__);
    var getDefaultExportFromCjs, reactExports, jsxRuntimeExports, _extends$1, useTheme$1, ThemeContext$2, _objectWithoutPropertiesLoose, THEME_ID, generateUtilityClass, generateUtilityClasses, styled, useThemeProps, clsx, composeClasses, createSvgIcon, rootShouldForwardProp, capitalize, alpha, createChainedFunction, useControlled, useForkRef, useId, useEnhancedEffect, debounce, ownerWindow, useEventCallback, ownerDocument, useSelector, LoadingIndicator, getAugmentedNamespace, memoizeOne_esm, commonjsGlobal, SwitchBase, FormGroup, ButtonBase, useTheme$2, useSlotProps, Box, Typography, Button, useUtils, useLocaleText, Clock, parsePickerInputValue, getPickersToolbarUtilityClass, PickersToolbar, pickersToolbarClasses, useMeridiemMode, arrayIncludes, useValidation, createIsAfterIgnoreDatePart, usePickerState, DesktopWrapper, KeyboardDateInput, CalendarOrClockPicker, MobileWrapper, PureDateInput, useMediaQuery, useDefaultDates, parseNonNullablePickerDate, validateDate, WrapperVariantContext, DateRange, Time, KeyboardArrowLeft, KeyboardArrowRight;
    return {
      setters: [function (module) {
        getDefaultExportFromCjs = module.ah;
        reactExports = module.r;
        jsxRuntimeExports = module.j;
        _extends$1 = module.t;
        useTheme$1 = module.bK;
        ThemeContext$2 = module.bL;
        _objectWithoutPropertiesLoose = module._;
        THEME_ID = module.bM;
        generateUtilityClass = module.w;
        generateUtilityClasses = module.v;
        styled = module.x;
        useThemeProps = module.y;
        clsx = module.A;
        composeClasses = module.B;
        createSvgIcon = module.c;
        rootShouldForwardProp = module.a0;
        capitalize = module.X;
        alpha = module.ax;
        createChainedFunction = module.bN;
        useControlled = module.aG;
        useForkRef = module.Y;
        useId = module.z;
        useEnhancedEffect = module.aH;
        debounce = module.Z;
        ownerWindow = module.$;
        useEventCallback = module.aI;
        ownerDocument = module.aJ;
        useSelector = module.d;
        LoadingIndicator = module.e;
        getAugmentedNamespace = module.af;
        memoizeOne_esm = module.bO;
        commonjsGlobal = module.ag;
      }, function (module) {
        SwitchBase = module.S;
      }, function (module) {
        FormGroup = module.F;
      }, function (module) {
        ButtonBase = module.t;
        useTheme$2 = module.f;
        useSlotProps = module.J;
        Box = module.B;
        Typography = module.T;
        Button = module.b;
      }, function (module) {
        useUtils = module.u;
        useLocaleText = module.a;
        Clock = module.C;
        parsePickerInputValue = module.p;
        getPickersToolbarUtilityClass = module.g;
        PickersToolbar = module.b;
        pickersToolbarClasses = module.c;
        useMeridiemMode = module.d;
        arrayIncludes = module.e;
        useValidation = module.f;
        createIsAfterIgnoreDatePart = module.h;
        usePickerState = module.i;
        DesktopWrapper = module.j;
        KeyboardDateInput = module.K;
        CalendarOrClockPicker = module.k;
        MobileWrapper = module.M;
        PureDateInput = module.l;
        useMediaQuery = module.m;
        useDefaultDates = module.n;
        parseNonNullablePickerDate = module.o;
        validateDate = module.v;
        WrapperVariantContext = module.W;
        DateRange = module.q;
        Time = module.T;
      }, function (module) {
        KeyboardArrowLeft = module.a;
        KeyboardArrowRight = module.K;
      }],
      execute: function execute() {
        exports({
          L: Layout,
          c: ThemeProvider
        });
        var propTypes$1 = {
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

        /**
         * Copyright (c) 2013-present, Facebook, Inc.
         *
         * This source code is licensed under the MIT license found in the
         * LICENSE file in the root directory of this source tree.
         */

        {
          // By explicitly using `prop-types` you are opting into new production behavior.
          // http://fb.me/prop-types-in-prod
          propTypes$1.exports = factoryWithThrowingShims();
        }
        var propTypesExports = exports('p', propTypes$1.exports);
        var PropTypes = exports('P', /*@__PURE__*/getDefaultExportFromCjs(propTypesExports));

        // Source from https://github.com/alitaheri/normalize-scroll-left
        var cachedType;

        /**
         * Based on the jquery plugin https://github.com/othree/jquery.rtl-scroll-type
         *
         * Types of scrollLeft, assuming scrollWidth=100 and direction is rtl.
         *
         * Type             | <- Most Left | Most Right -> | Initial
         * ---------------- | ------------ | ------------- | -------
         * default          | 0            | 100           | 100
         * negative (spec*) | -100         | 0             | 0
         * reverse          | 100          | 0             | 0
         *
         * Edge 85: default
         * Safari 14: negative
         * Chrome 85: negative
         * Firefox 81: negative
         * IE11: reverse
         *
         * spec* https://drafts.csswg.org/cssom-view/#dom-window-scroll
         */
        function detectScrollType() {
          if (cachedType) {
            return cachedType;
          }
          var dummy = document.createElement('div');
          var container = document.createElement('div');
          container.style.width = '10px';
          container.style.height = '1px';
          dummy.appendChild(container);
          dummy.dir = 'rtl';
          dummy.style.fontSize = '14px';
          dummy.style.width = '4px';
          dummy.style.height = '1px';
          dummy.style.position = 'absolute';
          dummy.style.top = '-1000px';
          dummy.style.overflow = 'scroll';
          document.body.appendChild(dummy);
          cachedType = 'reverse';
          if (dummy.scrollLeft > 0) {
            cachedType = 'default';
          } else {
            dummy.scrollLeft = 1;
            if (dummy.scrollLeft === 0) {
              cachedType = 'negative';
            }
          }
          document.body.removeChild(dummy);
          return cachedType;
        }

        // Based on https://stackoverflow.com/a/24394376
        function getNormalizedScrollLeft(element, direction) {
          var scrollLeft = element.scrollLeft;

          // Perform the calculations only when direction is rtl to avoid messing up the ltr behavior
          if (direction !== 'rtl') {
            return scrollLeft;
          }
          var type = detectScrollType();
          switch (type) {
            case 'negative':
              return element.scrollWidth - element.clientWidth + scrollLeft;
            case 'reverse':
              return element.scrollWidth - element.clientWidth - scrollLeft;
            default:
              return scrollLeft;
          }
        }
        var ThemeContext = /*#__PURE__*/reactExports.createContext(null);
        var ThemeContext$1 = ThemeContext;
        function useTheme() {
          var theme = reactExports.useContext(ThemeContext$1);
          return theme;
        }
        var hasSymbol = typeof Symbol === 'function' && Symbol.for;
        var nested = hasSymbol ? Symbol.for('mui.nested') : '__THEME_NESTED__';
        function mergeOuterLocalTheme(outerTheme, localTheme) {
          if (typeof localTheme === 'function') {
            var mergedTheme = localTheme(outerTheme);
            return mergedTheme;
          }
          return _extends$1({}, outerTheme, localTheme);
        }

        /**
         * This component takes a `theme` prop.
         * It makes the `theme` available down the React tree thanks to React context.
         * This component should preferably be used at **the root of your component tree**.
         */
        function ThemeProvider$2(props) {
          var children = props.children,
            localTheme = props.theme;
          var outerTheme = useTheme();
          var theme = reactExports.useMemo(function () {
            var output = outerTheme === null ? localTheme : mergeOuterLocalTheme(outerTheme, localTheme);
            if (output != null) {
              output[nested] = outerTheme !== null;
            }
            return output;
          }, [localTheme, outerTheme]);
          return /*#__PURE__*/jsxRuntimeExports.jsx(ThemeContext$1.Provider, {
            value: theme,
            children: children
          });
        }
        var EMPTY_THEME = {};
        function useThemeScoping(themeId, upperTheme, localTheme) {
          var isPrivate = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
          return reactExports.useMemo(function () {
            var resolvedTheme = themeId ? upperTheme[themeId] || upperTheme : upperTheme;
            if (typeof localTheme === 'function') {
              var mergedTheme = localTheme(resolvedTheme);
              var result = themeId ? _extends$1({}, upperTheme, _defineProperty2({}, themeId, mergedTheme)) : mergedTheme;
              // must return a function for the private theme to NOT merge with the upper theme.
              // see the test case "use provided theme from a callback" in ThemeProvider.test.js
              if (isPrivate) {
                return function () {
                  return result;
                };
              }
              return result;
            }
            return themeId ? _extends$1({}, upperTheme, _defineProperty2({}, themeId, localTheme)) : _extends$1({}, upperTheme, localTheme);
          }, [themeId, upperTheme, localTheme, isPrivate]);
        }

        /**
         * This component makes the `theme` available down the React tree.
         * It should preferably be used at **the root of your component tree**.
         *
         * <ThemeProvider theme={theme}> // existing use case
         * <ThemeProvider theme={{ id: theme }}> // theme scoping
         */
        function ThemeProvider$1(props) {
          var children = props.children,
            localTheme = props.theme,
            themeId = props.themeId;
          var upperTheme = useTheme$1(EMPTY_THEME);
          var upperPrivateTheme = useTheme() || EMPTY_THEME;
          var engineTheme = useThemeScoping(themeId, upperTheme, localTheme);
          var privateTheme = useThemeScoping(themeId, upperPrivateTheme, localTheme, true);
          return /*#__PURE__*/jsxRuntimeExports.jsx(ThemeProvider$2, {
            theme: privateTheme,
            children: /*#__PURE__*/jsxRuntimeExports.jsx(ThemeContext$2.Provider, {
              value: engineTheme,
              children: children
            })
          });
        }
        var _excluded$i = ["theme"];
        function ThemeProvider(_ref) {
          var themeInput = _ref.theme,
            props = _objectWithoutPropertiesLoose(_ref, _excluded$i);
          var scopedTheme = themeInput[THEME_ID];
          return /*#__PURE__*/jsxRuntimeExports.jsx(ThemeProvider$1, _extends$1({}, props, {
            themeId: scopedTheme ? THEME_ID : undefined,
            theme: scopedTheme || themeInput
          }));
        }
        function getCardMediaUtilityClass(slot) {
          return generateUtilityClass('MuiCardMedia', slot);
        }
        generateUtilityClasses('MuiCardMedia', ['root', 'media', 'img']);
        var _excluded$h = ["children", "className", "component", "image", "src", "style"];
        var useUtilityClasses$9 = function useUtilityClasses$9(ownerState) {
          var classes = ownerState.classes,
            isMediaComponent = ownerState.isMediaComponent,
            isImageComponent = ownerState.isImageComponent;
          var slots = {
            root: ['root', isMediaComponent && 'media', isImageComponent && 'img']
          };
          return composeClasses(slots, getCardMediaUtilityClass, classes);
        };
        var CardMediaRoot = styled('div', {
          name: 'MuiCardMedia',
          slot: 'Root',
          overridesResolver: function overridesResolver(props, styles) {
            var ownerState = props.ownerState;
            var isMediaComponent = ownerState.isMediaComponent,
              isImageComponent = ownerState.isImageComponent;
            return [styles.root, isMediaComponent && styles.media, isImageComponent && styles.img];
          }
        })(function (_ref3) {
          var ownerState = _ref3.ownerState;
          return _extends$1({
            display: 'block',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center'
          }, ownerState.isMediaComponent && {
            width: '100%'
          }, ownerState.isImageComponent && {
            // ⚠️ object-fit is not supported by IE11.
            objectFit: 'cover'
          });
        });
        var MEDIA_COMPONENTS = ['video', 'audio', 'picture', 'iframe', 'img'];
        var IMAGE_COMPONENTS = ['picture', 'img'];
        var CardMedia = /*#__PURE__*/reactExports.forwardRef(function CardMedia(inProps, ref) {
          var props = useThemeProps({
            props: inProps,
            name: 'MuiCardMedia'
          });
          var children = props.children,
            className = props.className,
            _props$component = props.component,
            component = _props$component === void 0 ? 'div' : _props$component,
            image = props.image,
            src = props.src,
            style = props.style,
            other = _objectWithoutPropertiesLoose(props, _excluded$h);
          var isMediaComponent = MEDIA_COMPONENTS.indexOf(component) !== -1;
          var composedStyle = !isMediaComponent && image ? _extends$1({
            backgroundImage: "url(\"".concat(image, "\")")
          }, style) : style;
          var ownerState = _extends$1({}, props, {
            component: component,
            isMediaComponent: isMediaComponent,
            isImageComponent: IMAGE_COMPONENTS.indexOf(component) !== -1
          });
          var classes = useUtilityClasses$9(ownerState);
          return /*#__PURE__*/jsxRuntimeExports.jsx(CardMediaRoot, _extends$1({
            className: clsx(classes.root, className),
            as: component,
            role: !isMediaComponent && image ? 'img' : undefined,
            ref: ref,
            style: composedStyle,
            ownerState: ownerState,
            src: isMediaComponent ? image || src : undefined
          }, other, {
            children: children
          }));
        });
        var CardMedia$1 = exports('C', CardMedia);
        var RadioButtonUncheckedIcon = createSvgIcon( /*#__PURE__*/jsxRuntimeExports.jsx("path", {
          d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
        }), 'RadioButtonUnchecked');
        var RadioButtonCheckedIcon = createSvgIcon( /*#__PURE__*/jsxRuntimeExports.jsx("path", {
          d: "M8.465 8.465C9.37 7.56 10.62 7 12 7C14.76 7 17 9.24 17 12C17 13.38 16.44 14.63 15.535 15.535C14.63 16.44 13.38 17 12 17C9.24 17 7 14.76 7 12C7 10.62 7.56 9.37 8.465 8.465Z"
        }), 'RadioButtonChecked');
        var RadioButtonIconRoot = styled('span')({
          position: 'relative',
          display: 'flex'
        });
        var RadioButtonIconBackground = styled(RadioButtonUncheckedIcon)({
          // Scale applied to prevent dot misalignment in Safari
          transform: 'scale(1)'
        });
        var RadioButtonIconDot = styled(RadioButtonCheckedIcon)(function (_ref4) {
          var theme = _ref4.theme,
            ownerState = _ref4.ownerState;
          return _extends$1({
            left: 0,
            position: 'absolute',
            transform: 'scale(0)',
            transition: theme.transitions.create('transform', {
              easing: theme.transitions.easing.easeIn,
              duration: theme.transitions.duration.shortest
            })
          }, ownerState.checked && {
            transform: 'scale(1)',
            transition: theme.transitions.create('transform', {
              easing: theme.transitions.easing.easeOut,
              duration: theme.transitions.duration.shortest
            })
          });
        });

        /**
         * @ignore - internal component.
         */
        function RadioButtonIcon(props) {
          var _props$checked = props.checked,
            checked = _props$checked === void 0 ? false : _props$checked,
            _props$classes = props.classes,
            classes = _props$classes === void 0 ? {} : _props$classes,
            fontSize = props.fontSize;
          var ownerState = _extends$1({}, props, {
            checked: checked
          });
          return /*#__PURE__*/jsxRuntimeExports.jsxs(RadioButtonIconRoot, {
            className: classes.root,
            ownerState: ownerState,
            children: [/*#__PURE__*/jsxRuntimeExports.jsx(RadioButtonIconBackground, {
              fontSize: fontSize,
              className: classes.background,
              ownerState: ownerState
            }), /*#__PURE__*/jsxRuntimeExports.jsx(RadioButtonIconDot, {
              fontSize: fontSize,
              className: classes.dot,
              ownerState: ownerState
            })]
          });
        }

        /**
         * @ignore - internal component.
         */
        var RadioGroupContext = /*#__PURE__*/reactExports.createContext(undefined);
        var RadioGroupContext$1 = RadioGroupContext;
        function useRadioGroup() {
          return reactExports.useContext(RadioGroupContext$1);
        }
        function getRadioUtilityClass(slot) {
          return generateUtilityClass('MuiRadio', slot);
        }
        var radioClasses = generateUtilityClasses('MuiRadio', ['root', 'checked', 'disabled', 'colorPrimary', 'colorSecondary']);
        var radioClasses$1 = radioClasses;
        var _excluded$g = ["checked", "checkedIcon", "color", "icon", "name", "onChange", "size", "className"];
        var useUtilityClasses$8 = function useUtilityClasses$8(ownerState) {
          var classes = ownerState.classes,
            color = ownerState.color;
          var slots = {
            root: ['root', "color".concat(capitalize(color))]
          };
          return _extends$1({}, classes, composeClasses(slots, getRadioUtilityClass, classes));
        };
        var RadioRoot = styled(SwitchBase, {
          shouldForwardProp: function shouldForwardProp(prop) {
            return rootShouldForwardProp(prop) || prop === 'classes';
          },
          name: 'MuiRadio',
          slot: 'Root',
          overridesResolver: function overridesResolver(props, styles) {
            var ownerState = props.ownerState;
            return [styles.root, styles["color".concat(capitalize(ownerState.color))]];
          }
        })(function (_ref5) {
          var theme = _ref5.theme,
            ownerState = _ref5.ownerState;
          return _extends$1({
            color: (theme.vars || theme).palette.text.secondary
          }, !ownerState.disableRipple && {
            '&:hover': {
              backgroundColor: theme.vars ? "rgba(".concat(ownerState.color === 'default' ? theme.vars.palette.action.activeChannel : theme.vars.palette[ownerState.color].mainChannel, " / ").concat(theme.vars.palette.action.hoverOpacity, ")") : alpha(ownerState.color === 'default' ? theme.palette.action.active : theme.palette[ownerState.color].main, theme.palette.action.hoverOpacity),
              // Reset on touch devices, it doesn't add specificity
              '@media (hover: none)': {
                backgroundColor: 'transparent'
              }
            }
          }, ownerState.color !== 'default' && _defineProperty2({}, "&.".concat(radioClasses$1.checked), {
            color: (theme.vars || theme).palette[ownerState.color].main
          }), _defineProperty2({}, "&.".concat(radioClasses$1.disabled), {
            color: (theme.vars || theme).palette.action.disabled
          }));
        });
        function areEqualValues(a, b) {
          if (_typeof2(b) === 'object' && b !== null) {
            return a === b;
          }

          // The value could be a number, the DOM will stringify it anyway.
          return String(a) === String(b);
        }
        var defaultCheckedIcon = /*#__PURE__*/jsxRuntimeExports.jsx(RadioButtonIcon, {
          checked: true
        });
        var defaultIcon = /*#__PURE__*/jsxRuntimeExports.jsx(RadioButtonIcon, {});
        var Radio = /*#__PURE__*/reactExports.forwardRef(function Radio(inProps, ref) {
          var _defaultIcon$props$fo, _defaultCheckedIcon$p;
          var props = useThemeProps({
            props: inProps,
            name: 'MuiRadio'
          });
          var checkedProp = props.checked,
            _props$checkedIcon = props.checkedIcon,
            checkedIcon = _props$checkedIcon === void 0 ? defaultCheckedIcon : _props$checkedIcon,
            _props$color = props.color,
            color = _props$color === void 0 ? 'primary' : _props$color,
            _props$icon = props.icon,
            icon = _props$icon === void 0 ? defaultIcon : _props$icon,
            nameProp = props.name,
            onChangeProp = props.onChange,
            _props$size = props.size,
            size = _props$size === void 0 ? 'medium' : _props$size,
            className = props.className,
            other = _objectWithoutPropertiesLoose(props, _excluded$g);
          var ownerState = _extends$1({}, props, {
            color: color,
            size: size
          });
          var classes = useUtilityClasses$8(ownerState);
          var radioGroup = useRadioGroup();
          var checked = checkedProp;
          var onChange = createChainedFunction(onChangeProp, radioGroup && radioGroup.onChange);
          var name = nameProp;
          if (radioGroup) {
            if (typeof checked === 'undefined') {
              checked = areEqualValues(radioGroup.value, props.value);
            }
            if (typeof name === 'undefined') {
              name = radioGroup.name;
            }
          }
          return /*#__PURE__*/jsxRuntimeExports.jsx(RadioRoot, _extends$1({
            type: "radio",
            icon: /*#__PURE__*/reactExports.cloneElement(icon, {
              fontSize: (_defaultIcon$props$fo = defaultIcon.props.fontSize) != null ? _defaultIcon$props$fo : size
            }),
            checkedIcon: /*#__PURE__*/reactExports.cloneElement(checkedIcon, {
              fontSize: (_defaultCheckedIcon$p = defaultCheckedIcon.props.fontSize) != null ? _defaultCheckedIcon$p : size
            }),
            ownerState: ownerState,
            classes: classes,
            name: name,
            checked: checked,
            onChange: onChange,
            ref: ref,
            className: clsx(classes.root, className)
          }, other));
        });
        var Radio$1 = exports('a', Radio);
        var _excluded$f = ["actions", "children", "defaultValue", "name", "onChange", "value"];
        var RadioGroup = /*#__PURE__*/reactExports.forwardRef(function RadioGroup(props, ref) {
          var actions = props.actions,
            children = props.children,
            defaultValue = props.defaultValue,
            nameProp = props.name,
            _onChange = props.onChange,
            valueProp = props.value,
            other = _objectWithoutPropertiesLoose(props, _excluded$f);
          var rootRef = reactExports.useRef(null);
          var _useControlled = useControlled({
              controlled: valueProp,
              default: defaultValue,
              name: 'RadioGroup'
            }),
            _useControlled2 = _slicedToArray2(_useControlled, 2),
            value = _useControlled2[0],
            setValueState = _useControlled2[1];
          reactExports.useImperativeHandle(actions, function () {
            return {
              focus: function focus() {
                var input = rootRef.current.querySelector('input:not(:disabled):checked');
                if (!input) {
                  input = rootRef.current.querySelector('input:not(:disabled)');
                }
                if (input) {
                  input.focus();
                }
              }
            };
          }, []);
          var handleRef = useForkRef(ref, rootRef);
          var name = useId(nameProp);
          var contextValue = reactExports.useMemo(function () {
            return {
              name: name,
              onChange: function onChange(event) {
                setValueState(event.target.value);
                if (_onChange) {
                  _onChange(event, event.target.value);
                }
              },
              value: value
            };
          }, [name, _onChange, setValueState, value]);
          return /*#__PURE__*/jsxRuntimeExports.jsx(RadioGroupContext$1.Provider, {
            value: contextValue,
            children: /*#__PURE__*/jsxRuntimeExports.jsx(FormGroup, _extends$1({
              role: "radiogroup",
              ref: handleRef
            }, other, {
              children: children
            }))
          });
        });
        var RadioGroup$1 = exports('R', RadioGroup);
        function getTabUtilityClass(slot) {
          return generateUtilityClass('MuiTab', slot);
        }
        var tabClasses = generateUtilityClasses('MuiTab', ['root', 'labelIcon', 'textColorInherit', 'textColorPrimary', 'textColorSecondary', 'selected', 'disabled', 'fullWidth', 'wrapped', 'iconWrapper']);
        var tabClasses$1 = tabClasses;
        var _excluded$e = ["className", "disabled", "disableFocusRipple", "fullWidth", "icon", "iconPosition", "indicator", "label", "onChange", "onClick", "onFocus", "selected", "selectionFollowsFocus", "textColor", "value", "wrapped"];
        var useUtilityClasses$7 = function useUtilityClasses$7(ownerState) {
          var classes = ownerState.classes,
            textColor = ownerState.textColor,
            fullWidth = ownerState.fullWidth,
            wrapped = ownerState.wrapped,
            icon = ownerState.icon,
            label = ownerState.label,
            selected = ownerState.selected,
            disabled = ownerState.disabled;
          var slots = {
            root: ['root', icon && label && 'labelIcon', "textColor".concat(capitalize(textColor)), fullWidth && 'fullWidth', wrapped && 'wrapped', selected && 'selected', disabled && 'disabled'],
            iconWrapper: ['iconWrapper']
          };
          return composeClasses(slots, getTabUtilityClass, classes);
        };
        var TabRoot = styled(ButtonBase, {
          name: 'MuiTab',
          slot: 'Root',
          overridesResolver: function overridesResolver(props, styles) {
            var ownerState = props.ownerState;
            return [styles.root, ownerState.label && ownerState.icon && styles.labelIcon, styles["textColor".concat(capitalize(ownerState.textColor))], ownerState.fullWidth && styles.fullWidth, ownerState.wrapped && styles.wrapped];
          }
        })(function (_ref7) {
          var _ref9, _ref10, _ref11;
          var theme = _ref7.theme,
            ownerState = _ref7.ownerState;
          return _extends$1({}, theme.typography.button, {
            maxWidth: 360,
            minWidth: 90,
            position: 'relative',
            minHeight: 48,
            flexShrink: 0,
            padding: '12px 16px',
            overflow: 'hidden',
            whiteSpace: 'normal',
            textAlign: 'center'
          }, ownerState.label && {
            flexDirection: ownerState.iconPosition === 'top' || ownerState.iconPosition === 'bottom' ? 'column' : 'row'
          }, {
            lineHeight: 1.25
          }, ownerState.icon && ownerState.label && _defineProperty2({
            minHeight: 72,
            paddingTop: 9,
            paddingBottom: 9
          }, "& > .".concat(tabClasses$1.iconWrapper), _extends$1({}, ownerState.iconPosition === 'top' && {
            marginBottom: 6
          }, ownerState.iconPosition === 'bottom' && {
            marginTop: 6
          }, ownerState.iconPosition === 'start' && {
            marginRight: theme.spacing(1)
          }, ownerState.iconPosition === 'end' && {
            marginLeft: theme.spacing(1)
          })), ownerState.textColor === 'inherit' && (_ref9 = {
            color: 'inherit',
            opacity: 0.6
          }, _defineProperty2(_ref9, "&.".concat(tabClasses$1.selected), {
            opacity: 1
          }), _defineProperty2(_ref9, "&.".concat(tabClasses$1.disabled), {
            opacity: (theme.vars || theme).palette.action.disabledOpacity
          }), _ref9), ownerState.textColor === 'primary' && (_ref10 = {
            color: (theme.vars || theme).palette.text.secondary
          }, _defineProperty2(_ref10, "&.".concat(tabClasses$1.selected), {
            color: (theme.vars || theme).palette.primary.main
          }), _defineProperty2(_ref10, "&.".concat(tabClasses$1.disabled), {
            color: (theme.vars || theme).palette.text.disabled
          }), _ref10), ownerState.textColor === 'secondary' && (_ref11 = {
            color: (theme.vars || theme).palette.text.secondary
          }, _defineProperty2(_ref11, "&.".concat(tabClasses$1.selected), {
            color: (theme.vars || theme).palette.secondary.main
          }), _defineProperty2(_ref11, "&.".concat(tabClasses$1.disabled), {
            color: (theme.vars || theme).palette.text.disabled
          }), _ref11), ownerState.fullWidth && {
            flexShrink: 1,
            flexGrow: 1,
            flexBasis: 0,
            maxWidth: 'none'
          }, ownerState.wrapped && {
            fontSize: theme.typography.pxToRem(12)
          });
        });
        var Tab = /*#__PURE__*/reactExports.forwardRef(function Tab(inProps, ref) {
          var props = useThemeProps({
            props: inProps,
            name: 'MuiTab'
          });
          var className = props.className,
            _props$disabled = props.disabled,
            disabled = _props$disabled === void 0 ? false : _props$disabled,
            _props$disableFocusRi = props.disableFocusRipple,
            disableFocusRipple = _props$disableFocusRi === void 0 ? false : _props$disableFocusRi,
            fullWidth = props.fullWidth,
            iconProp = props.icon,
            _props$iconPosition = props.iconPosition,
            iconPosition = _props$iconPosition === void 0 ? 'top' : _props$iconPosition,
            indicator = props.indicator,
            label = props.label,
            onChange = props.onChange,
            onClick = props.onClick,
            onFocus = props.onFocus,
            selected = props.selected,
            selectionFollowsFocus = props.selectionFollowsFocus,
            _props$textColor = props.textColor,
            textColor = _props$textColor === void 0 ? 'inherit' : _props$textColor,
            value = props.value,
            _props$wrapped = props.wrapped,
            wrapped = _props$wrapped === void 0 ? false : _props$wrapped,
            other = _objectWithoutPropertiesLoose(props, _excluded$e);
          var ownerState = _extends$1({}, props, {
            disabled: disabled,
            disableFocusRipple: disableFocusRipple,
            selected: selected,
            icon: !!iconProp,
            iconPosition: iconPosition,
            label: !!label,
            fullWidth: fullWidth,
            textColor: textColor,
            wrapped: wrapped
          });
          var classes = useUtilityClasses$7(ownerState);
          var icon = iconProp && label && /*#__PURE__*/reactExports.isValidElement(iconProp) ? /*#__PURE__*/reactExports.cloneElement(iconProp, {
            className: clsx(classes.iconWrapper, iconProp.props.className)
          }) : iconProp;
          var handleClick = function handleClick(event) {
            if (!selected && onChange) {
              onChange(event, value);
            }
            if (onClick) {
              onClick(event);
            }
          };
          var handleFocus = function handleFocus(event) {
            if (selectionFollowsFocus && !selected && onChange) {
              onChange(event, value);
            }
            if (onFocus) {
              onFocus(event);
            }
          };
          return /*#__PURE__*/jsxRuntimeExports.jsxs(TabRoot, _extends$1({
            focusRipple: !disableFocusRipple,
            className: clsx(classes.root, className),
            ref: ref,
            role: "tab",
            "aria-selected": selected,
            disabled: disabled,
            onClick: handleClick,
            onFocus: handleFocus,
            ownerState: ownerState,
            tabIndex: selected ? 0 : -1
          }, other, {
            children: [iconPosition === 'top' || iconPosition === 'start' ? /*#__PURE__*/jsxRuntimeExports.jsxs(reactExports.Fragment, {
              children: [icon, label]
            }) : /*#__PURE__*/jsxRuntimeExports.jsxs(reactExports.Fragment, {
              children: [label, icon]
            }), indicator]
          }));
        });
        var Tab$1 = Tab;
        function easeInOutSin(time) {
          return (1 + Math.sin(Math.PI * time - Math.PI / 2)) / 2;
        }
        function animate(property, element, to) {
          var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
          var cb = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : function () {};
          var _options$ease = options.ease,
            ease = _options$ease === void 0 ? easeInOutSin : _options$ease,
            _options$duration = options.duration,
            duration = _options$duration === void 0 ? 300 : _options$duration;
          var start = null;
          var from = element[property];
          var cancelled = false;
          var cancel = function cancel() {
            cancelled = true;
          };
          var step = function step(timestamp) {
            if (cancelled) {
              cb(new Error('Animation cancelled'));
              return;
            }
            if (start === null) {
              start = timestamp;
            }
            var time = Math.min(1, (timestamp - start) / duration);
            element[property] = ease(time) * (to - from) + from;
            if (time >= 1) {
              requestAnimationFrame(function () {
                cb(null);
              });
              return;
            }
            requestAnimationFrame(step);
          };
          if (from === to) {
            cb(new Error('Element already at target position'));
            return cancel;
          }
          requestAnimationFrame(step);
          return cancel;
        }
        var _excluded$d = ["onChange"];
        var styles$1 = {
          width: 99,
          height: 99,
          position: 'absolute',
          top: -9999,
          overflow: 'scroll'
        };

        /**
         * @ignore - internal component.
         * The component originates from https://github.com/STORIS/react-scrollbar-size.
         * It has been moved into the core in order to minimize the bundle size.
         */
        function ScrollbarSize(props) {
          var onChange = props.onChange,
            other = _objectWithoutPropertiesLoose(props, _excluded$d);
          var scrollbarHeight = reactExports.useRef();
          var nodeRef = reactExports.useRef(null);
          var setMeasurements = function setMeasurements() {
            scrollbarHeight.current = nodeRef.current.offsetHeight - nodeRef.current.clientHeight;
          };
          useEnhancedEffect(function () {
            var handleResize = debounce(function () {
              var prevHeight = scrollbarHeight.current;
              setMeasurements();
              if (prevHeight !== scrollbarHeight.current) {
                onChange(scrollbarHeight.current);
              }
            });
            var containerWindow = ownerWindow(nodeRef.current);
            containerWindow.addEventListener('resize', handleResize);
            return function () {
              handleResize.clear();
              containerWindow.removeEventListener('resize', handleResize);
            };
          }, [onChange]);
          reactExports.useEffect(function () {
            setMeasurements();
            onChange(scrollbarHeight.current);
          }, [onChange]);
          return /*#__PURE__*/jsxRuntimeExports.jsx("div", _extends$1({
            style: styles$1,
            ref: nodeRef
          }, other));
        }
        function getTabScrollButtonUtilityClass(slot) {
          return generateUtilityClass('MuiTabScrollButton', slot);
        }
        var tabScrollButtonClasses = generateUtilityClasses('MuiTabScrollButton', ['root', 'vertical', 'horizontal', 'disabled']);
        var tabScrollButtonClasses$1 = tabScrollButtonClasses;
        var _excluded$c = ["className", "slots", "slotProps", "direction", "orientation", "disabled"];
        var useUtilityClasses$6 = function useUtilityClasses$6(ownerState) {
          var classes = ownerState.classes,
            orientation = ownerState.orientation,
            disabled = ownerState.disabled;
          var slots = {
            root: ['root', orientation, disabled && 'disabled']
          };
          return composeClasses(slots, getTabScrollButtonUtilityClass, classes);
        };
        var TabScrollButtonRoot = styled(ButtonBase, {
          name: 'MuiTabScrollButton',
          slot: 'Root',
          overridesResolver: function overridesResolver(props, styles) {
            var ownerState = props.ownerState;
            return [styles.root, ownerState.orientation && styles[ownerState.orientation]];
          }
        })(function (_ref12) {
          var ownerState = _ref12.ownerState;
          return _extends$1(_defineProperty2({
            width: 40,
            flexShrink: 0,
            opacity: 0.8
          }, "&.".concat(tabScrollButtonClasses$1.disabled), {
            opacity: 0
          }), ownerState.orientation === 'vertical' && {
            width: '100%',
            height: 40,
            '& svg': {
              transform: "rotate(".concat(ownerState.isRtl ? -90 : 90, "deg)")
            }
          });
        });
        var TabScrollButton = /*#__PURE__*/reactExports.forwardRef(function TabScrollButton(inProps, ref) {
          var _slots$StartScrollBut, _slots$EndScrollButto;
          var props = useThemeProps({
            props: inProps,
            name: 'MuiTabScrollButton'
          });
          var className = props.className,
            _props$slots = props.slots,
            slots = _props$slots === void 0 ? {} : _props$slots,
            _props$slotProps = props.slotProps,
            slotProps = _props$slotProps === void 0 ? {} : _props$slotProps,
            direction = props.direction,
            other = _objectWithoutPropertiesLoose(props, _excluded$c);
          var theme = useTheme$2();
          var isRtl = theme.direction === 'rtl';
          var ownerState = _extends$1({
            isRtl: isRtl
          }, props);
          var classes = useUtilityClasses$6(ownerState);
          var StartButtonIcon = (_slots$StartScrollBut = slots.StartScrollButtonIcon) != null ? _slots$StartScrollBut : KeyboardArrowLeft;
          var EndButtonIcon = (_slots$EndScrollButto = slots.EndScrollButtonIcon) != null ? _slots$EndScrollButto : KeyboardArrowRight;
          var startButtonIconProps = useSlotProps({
            elementType: StartButtonIcon,
            externalSlotProps: slotProps.startScrollButtonIcon,
            additionalProps: {
              fontSize: 'small'
            },
            ownerState: ownerState
          });
          var endButtonIconProps = useSlotProps({
            elementType: EndButtonIcon,
            externalSlotProps: slotProps.endScrollButtonIcon,
            additionalProps: {
              fontSize: 'small'
            },
            ownerState: ownerState
          });
          return /*#__PURE__*/jsxRuntimeExports.jsx(TabScrollButtonRoot, _extends$1({
            component: "div",
            className: clsx(classes.root, className),
            ref: ref,
            role: null,
            ownerState: ownerState,
            tabIndex: null
          }, other, {
            children: direction === 'left' ? /*#__PURE__*/jsxRuntimeExports.jsx(StartButtonIcon, _extends$1({}, startButtonIconProps)) : /*#__PURE__*/jsxRuntimeExports.jsx(EndButtonIcon, _extends$1({}, endButtonIconProps))
          }));
        });
        var TabScrollButton$1 = TabScrollButton;
        function getTabsUtilityClass(slot) {
          return generateUtilityClass('MuiTabs', slot);
        }
        var tabsClasses = generateUtilityClasses('MuiTabs', ['root', 'vertical', 'flexContainer', 'flexContainerVertical', 'centered', 'scroller', 'fixed', 'scrollableX', 'scrollableY', 'hideScrollbar', 'scrollButtons', 'scrollButtonsHideMobile', 'indicator']);
        var tabsClasses$1 = tabsClasses;
        var _excluded$b = ["aria-label", "aria-labelledby", "action", "centered", "children", "className", "component", "allowScrollButtonsMobile", "indicatorColor", "onChange", "orientation", "ScrollButtonComponent", "scrollButtons", "selectionFollowsFocus", "slots", "slotProps", "TabIndicatorProps", "TabScrollButtonProps", "textColor", "value", "variant", "visibleScrollbar"];
        var nextItem = function nextItem(list, item) {
          if (list === item) {
            return list.firstChild;
          }
          if (item && item.nextElementSibling) {
            return item.nextElementSibling;
          }
          return list.firstChild;
        };
        var previousItem = function previousItem(list, item) {
          if (list === item) {
            return list.lastChild;
          }
          if (item && item.previousElementSibling) {
            return item.previousElementSibling;
          }
          return list.lastChild;
        };
        var moveFocus = function moveFocus(list, currentFocus, traversalFunction) {
          var wrappedOnce = false;
          var nextFocus = traversalFunction(list, currentFocus);
          while (nextFocus) {
            // Prevent infinite loop.
            if (nextFocus === list.firstChild) {
              if (wrappedOnce) {
                return;
              }
              wrappedOnce = true;
            }

            // Same logic as useAutocomplete.js
            var nextFocusDisabled = nextFocus.disabled || nextFocus.getAttribute('aria-disabled') === 'true';
            if (!nextFocus.hasAttribute('tabindex') || nextFocusDisabled) {
              // Move to the next element.
              nextFocus = traversalFunction(list, nextFocus);
            } else {
              nextFocus.focus();
              return;
            }
          }
        };
        var useUtilityClasses$5 = function useUtilityClasses$5(ownerState) {
          var vertical = ownerState.vertical,
            fixed = ownerState.fixed,
            hideScrollbar = ownerState.hideScrollbar,
            scrollableX = ownerState.scrollableX,
            scrollableY = ownerState.scrollableY,
            centered = ownerState.centered,
            scrollButtonsHideMobile = ownerState.scrollButtonsHideMobile,
            classes = ownerState.classes;
          var slots = {
            root: ['root', vertical && 'vertical'],
            scroller: ['scroller', fixed && 'fixed', hideScrollbar && 'hideScrollbar', scrollableX && 'scrollableX', scrollableY && 'scrollableY'],
            flexContainer: ['flexContainer', vertical && 'flexContainerVertical', centered && 'centered'],
            indicator: ['indicator'],
            scrollButtons: ['scrollButtons', scrollButtonsHideMobile && 'scrollButtonsHideMobile'],
            scrollableX: [scrollableX && 'scrollableX'],
            hideScrollbar: [hideScrollbar && 'hideScrollbar']
          };
          return composeClasses(slots, getTabsUtilityClass, classes);
        };
        var TabsRoot = styled('div', {
          name: 'MuiTabs',
          slot: 'Root',
          overridesResolver: function overridesResolver(props, styles) {
            var ownerState = props.ownerState;
            return [_defineProperty2({}, "& .".concat(tabsClasses$1.scrollButtons), styles.scrollButtons), _defineProperty2({}, "& .".concat(tabsClasses$1.scrollButtons), ownerState.scrollButtonsHideMobile && styles.scrollButtonsHideMobile), styles.root, ownerState.vertical && styles.vertical];
          }
        })(function (_ref15) {
          var ownerState = _ref15.ownerState,
            theme = _ref15.theme;
          return _extends$1({
            overflow: 'hidden',
            minHeight: 48,
            // Add iOS momentum scrolling for iOS < 13.0
            WebkitOverflowScrolling: 'touch',
            display: 'flex'
          }, ownerState.vertical && {
            flexDirection: 'column'
          }, ownerState.scrollButtonsHideMobile && _defineProperty2({}, "& .".concat(tabsClasses$1.scrollButtons), _defineProperty2({}, theme.breakpoints.down('sm'), {
            display: 'none'
          })));
        });
        var TabsScroller = styled('div', {
          name: 'MuiTabs',
          slot: 'Scroller',
          overridesResolver: function overridesResolver(props, styles) {
            var ownerState = props.ownerState;
            return [styles.scroller, ownerState.fixed && styles.fixed, ownerState.hideScrollbar && styles.hideScrollbar, ownerState.scrollableX && styles.scrollableX, ownerState.scrollableY && styles.scrollableY];
          }
        })(function (_ref17) {
          var ownerState = _ref17.ownerState;
          return _extends$1({
            position: 'relative',
            display: 'inline-block',
            flex: '1 1 auto',
            whiteSpace: 'nowrap'
          }, ownerState.fixed && {
            overflowX: 'hidden',
            width: '100%'
          }, ownerState.hideScrollbar && {
            // Hide dimensionless scrollbar on macOS
            scrollbarWidth: 'none',
            // Firefox
            '&::-webkit-scrollbar': {
              display: 'none' // Safari + Chrome
            }
          }, ownerState.scrollableX && {
            overflowX: 'auto',
            overflowY: 'hidden'
          }, ownerState.scrollableY && {
            overflowY: 'auto',
            overflowX: 'hidden'
          });
        });
        var FlexContainer = styled('div', {
          name: 'MuiTabs',
          slot: 'FlexContainer',
          overridesResolver: function overridesResolver(props, styles) {
            var ownerState = props.ownerState;
            return [styles.flexContainer, ownerState.vertical && styles.flexContainerVertical, ownerState.centered && styles.centered];
          }
        })(function (_ref18) {
          var ownerState = _ref18.ownerState;
          return _extends$1({
            display: 'flex'
          }, ownerState.vertical && {
            flexDirection: 'column'
          }, ownerState.centered && {
            justifyContent: 'center'
          });
        });
        var TabsIndicator = styled('span', {
          name: 'MuiTabs',
          slot: 'Indicator',
          overridesResolver: function overridesResolver(props, styles) {
            return styles.indicator;
          }
        })(function (_ref19) {
          var ownerState = _ref19.ownerState,
            theme = _ref19.theme;
          return _extends$1({
            position: 'absolute',
            height: 2,
            bottom: 0,
            width: '100%',
            transition: theme.transitions.create()
          }, ownerState.indicatorColor === 'primary' && {
            backgroundColor: (theme.vars || theme).palette.primary.main
          }, ownerState.indicatorColor === 'secondary' && {
            backgroundColor: (theme.vars || theme).palette.secondary.main
          }, ownerState.vertical && {
            height: '100%',
            width: 2,
            right: 0
          });
        });
        var TabsScrollbarSize = styled(ScrollbarSize, {
          name: 'MuiTabs',
          slot: 'ScrollbarSize'
        })({
          overflowX: 'auto',
          overflowY: 'hidden',
          // Hide dimensionless scrollbar on macOS
          scrollbarWidth: 'none',
          // Firefox
          '&::-webkit-scrollbar': {
            display: 'none' // Safari + Chrome
          }
        });

        var defaultIndicatorStyle = {};
        var Tabs = /*#__PURE__*/reactExports.forwardRef(function Tabs(inProps, ref) {
          var props = useThemeProps({
            props: inProps,
            name: 'MuiTabs'
          });
          var theme = useTheme$2();
          var isRtl = theme.direction === 'rtl';
          var ariaLabel = props['aria-label'],
            ariaLabelledBy = props['aria-labelledby'],
            action = props.action,
            _props$centered = props.centered,
            centered = _props$centered === void 0 ? false : _props$centered,
            childrenProp = props.children,
            className = props.className,
            _props$component2 = props.component,
            component = _props$component2 === void 0 ? 'div' : _props$component2,
            _props$allowScrollBut = props.allowScrollButtonsMobile,
            allowScrollButtonsMobile = _props$allowScrollBut === void 0 ? false : _props$allowScrollBut,
            _props$indicatorColor = props.indicatorColor,
            indicatorColor = _props$indicatorColor === void 0 ? 'primary' : _props$indicatorColor,
            onChange = props.onChange,
            _props$orientation = props.orientation,
            orientation = _props$orientation === void 0 ? 'horizontal' : _props$orientation,
            _props$ScrollButtonCo = props.ScrollButtonComponent,
            ScrollButtonComponent = _props$ScrollButtonCo === void 0 ? TabScrollButton$1 : _props$ScrollButtonCo,
            _props$scrollButtons = props.scrollButtons,
            scrollButtons = _props$scrollButtons === void 0 ? 'auto' : _props$scrollButtons,
            selectionFollowsFocus = props.selectionFollowsFocus,
            _props$slots2 = props.slots,
            slots = _props$slots2 === void 0 ? {} : _props$slots2,
            _props$slotProps2 = props.slotProps,
            slotProps = _props$slotProps2 === void 0 ? {} : _props$slotProps2,
            _props$TabIndicatorPr = props.TabIndicatorProps,
            TabIndicatorProps = _props$TabIndicatorPr === void 0 ? {} : _props$TabIndicatorPr,
            _props$TabScrollButto = props.TabScrollButtonProps,
            TabScrollButtonProps = _props$TabScrollButto === void 0 ? {} : _props$TabScrollButto,
            _props$textColor2 = props.textColor,
            textColor = _props$textColor2 === void 0 ? 'primary' : _props$textColor2,
            value = props.value,
            _props$variant = props.variant,
            variant = _props$variant === void 0 ? 'standard' : _props$variant,
            _props$visibleScrollb = props.visibleScrollbar,
            visibleScrollbar = _props$visibleScrollb === void 0 ? false : _props$visibleScrollb,
            other = _objectWithoutPropertiesLoose(props, _excluded$b);
          var scrollable = variant === 'scrollable';
          var vertical = orientation === 'vertical';
          var scrollStart = vertical ? 'scrollTop' : 'scrollLeft';
          var start = vertical ? 'top' : 'left';
          var end = vertical ? 'bottom' : 'right';
          var clientSize = vertical ? 'clientHeight' : 'clientWidth';
          var size = vertical ? 'height' : 'width';
          var ownerState = _extends$1({}, props, {
            component: component,
            allowScrollButtonsMobile: allowScrollButtonsMobile,
            indicatorColor: indicatorColor,
            orientation: orientation,
            vertical: vertical,
            scrollButtons: scrollButtons,
            textColor: textColor,
            variant: variant,
            visibleScrollbar: visibleScrollbar,
            fixed: !scrollable,
            hideScrollbar: scrollable && !visibleScrollbar,
            scrollableX: scrollable && !vertical,
            scrollableY: scrollable && vertical,
            centered: centered && !scrollable,
            scrollButtonsHideMobile: !allowScrollButtonsMobile
          });
          var classes = useUtilityClasses$5(ownerState);
          var startScrollButtonIconProps = useSlotProps({
            elementType: slots.StartScrollButtonIcon,
            externalSlotProps: slotProps.startScrollButtonIcon,
            ownerState: ownerState
          });
          var endScrollButtonIconProps = useSlotProps({
            elementType: slots.EndScrollButtonIcon,
            externalSlotProps: slotProps.endScrollButtonIcon,
            ownerState: ownerState
          });
          var _reactExports$useStat = reactExports.useState(false),
            _reactExports$useStat2 = _slicedToArray2(_reactExports$useStat, 2),
            mounted = _reactExports$useStat2[0],
            setMounted = _reactExports$useStat2[1];
          var _reactExports$useStat3 = reactExports.useState(defaultIndicatorStyle),
            _reactExports$useStat4 = _slicedToArray2(_reactExports$useStat3, 2),
            indicatorStyle = _reactExports$useStat4[0],
            setIndicatorStyle = _reactExports$useStat4[1];
          var _reactExports$useStat5 = reactExports.useState({
              start: false,
              end: false
            }),
            _reactExports$useStat6 = _slicedToArray2(_reactExports$useStat5, 2),
            displayScroll = _reactExports$useStat6[0],
            setDisplayScroll = _reactExports$useStat6[1];
          var _reactExports$useStat7 = reactExports.useState({
              overflow: 'hidden',
              scrollbarWidth: 0
            }),
            _reactExports$useStat8 = _slicedToArray2(_reactExports$useStat7, 2),
            scrollerStyle = _reactExports$useStat8[0],
            setScrollerStyle = _reactExports$useStat8[1];
          var valueToIndex = new Map();
          var tabsRef = reactExports.useRef(null);
          var tabListRef = reactExports.useRef(null);
          var getTabsMeta = function getTabsMeta() {
            var tabsNode = tabsRef.current;
            var tabsMeta;
            if (tabsNode) {
              var rect = tabsNode.getBoundingClientRect();
              // create a new object with ClientRect class props + scrollLeft
              tabsMeta = {
                clientWidth: tabsNode.clientWidth,
                scrollLeft: tabsNode.scrollLeft,
                scrollTop: tabsNode.scrollTop,
                scrollLeftNormalized: getNormalizedScrollLeft(tabsNode, theme.direction),
                scrollWidth: tabsNode.scrollWidth,
                top: rect.top,
                bottom: rect.bottom,
                left: rect.left,
                right: rect.right
              };
            }
            var tabMeta;
            if (tabsNode && value !== false) {
              var _children = tabListRef.current.children;
              if (_children.length > 0) {
                var tab = _children[valueToIndex.get(value)];
                tabMeta = tab ? tab.getBoundingClientRect() : null;
              }
            }
            return {
              tabsMeta: tabsMeta,
              tabMeta: tabMeta
            };
          };
          var updateIndicatorState = useEventCallback(function () {
            var _newIndicatorStyle;
            var _getTabsMeta = getTabsMeta(),
              tabsMeta = _getTabsMeta.tabsMeta,
              tabMeta = _getTabsMeta.tabMeta;
            var startValue = 0;
            var startIndicator;
            if (vertical) {
              startIndicator = 'top';
              if (tabMeta && tabsMeta) {
                startValue = tabMeta.top - tabsMeta.top + tabsMeta.scrollTop;
              }
            } else {
              startIndicator = isRtl ? 'right' : 'left';
              if (tabMeta && tabsMeta) {
                var correction = isRtl ? tabsMeta.scrollLeftNormalized + tabsMeta.clientWidth - tabsMeta.scrollWidth : tabsMeta.scrollLeft;
                startValue = (isRtl ? -1 : 1) * (tabMeta[startIndicator] - tabsMeta[startIndicator] + correction);
              }
            }
            var newIndicatorStyle = (_newIndicatorStyle = {}, _defineProperty2(_newIndicatorStyle, startIndicator, startValue), _defineProperty2(_newIndicatorStyle, size, tabMeta ? tabMeta[size] : 0), _newIndicatorStyle);

            // IE11 support, replace with Number.isNaN
            // eslint-disable-next-line no-restricted-globals
            if (isNaN(indicatorStyle[startIndicator]) || isNaN(indicatorStyle[size])) {
              setIndicatorStyle(newIndicatorStyle);
            } else {
              var dStart = Math.abs(indicatorStyle[startIndicator] - newIndicatorStyle[startIndicator]);
              var dSize = Math.abs(indicatorStyle[size] - newIndicatorStyle[size]);
              if (dStart >= 1 || dSize >= 1) {
                setIndicatorStyle(newIndicatorStyle);
              }
            }
          });
          var scroll = function scroll(scrollValue) {
            var _ref20 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
              _ref20$animation = _ref20.animation,
              animation = _ref20$animation === void 0 ? true : _ref20$animation;
            if (animation) {
              animate(scrollStart, tabsRef.current, scrollValue, {
                duration: theme.transitions.duration.standard
              });
            } else {
              tabsRef.current[scrollStart] = scrollValue;
            }
          };
          var moveTabsScroll = function moveTabsScroll(delta) {
            var scrollValue = tabsRef.current[scrollStart];
            if (vertical) {
              scrollValue += delta;
            } else {
              scrollValue += delta * (isRtl ? -1 : 1);
              // Fix for Edge
              scrollValue *= isRtl && detectScrollType() === 'reverse' ? -1 : 1;
            }
            scroll(scrollValue);
          };
          var getScrollSize = function getScrollSize() {
            var containerSize = tabsRef.current[clientSize];
            var totalSize = 0;
            var children = Array.from(tabListRef.current.children);
            for (var i = 0; i < children.length; i += 1) {
              var tab = children[i];
              if (totalSize + tab[clientSize] > containerSize) {
                // If the first item is longer than the container size, then only scroll
                // by the container size.
                if (i === 0) {
                  totalSize = containerSize;
                }
                break;
              }
              totalSize += tab[clientSize];
            }
            return totalSize;
          };
          var handleStartScrollClick = function handleStartScrollClick() {
            moveTabsScroll(-1 * getScrollSize());
          };
          var handleEndScrollClick = function handleEndScrollClick() {
            moveTabsScroll(getScrollSize());
          };

          // TODO Remove <ScrollbarSize /> as browser support for hiding the scrollbar
          // with CSS improves.
          var handleScrollbarSizeChange = reactExports.useCallback(function (scrollbarWidth) {
            setScrollerStyle({
              overflow: null,
              scrollbarWidth: scrollbarWidth
            });
          }, []);
          var getConditionalElements = function getConditionalElements() {
            var conditionalElements = {};
            conditionalElements.scrollbarSizeListener = scrollable ? /*#__PURE__*/jsxRuntimeExports.jsx(TabsScrollbarSize, {
              onChange: handleScrollbarSizeChange,
              className: clsx(classes.scrollableX, classes.hideScrollbar)
            }) : null;
            var scrollButtonsActive = displayScroll.start || displayScroll.end;
            var showScrollButtons = scrollable && (scrollButtons === 'auto' && scrollButtonsActive || scrollButtons === true);
            conditionalElements.scrollButtonStart = showScrollButtons ? /*#__PURE__*/jsxRuntimeExports.jsx(ScrollButtonComponent, _extends$1({
              slots: {
                StartScrollButtonIcon: slots.StartScrollButtonIcon
              },
              slotProps: {
                startScrollButtonIcon: startScrollButtonIconProps
              },
              orientation: orientation,
              direction: isRtl ? 'right' : 'left',
              onClick: handleStartScrollClick,
              disabled: !displayScroll.start
            }, TabScrollButtonProps, {
              className: clsx(classes.scrollButtons, TabScrollButtonProps.className)
            })) : null;
            conditionalElements.scrollButtonEnd = showScrollButtons ? /*#__PURE__*/jsxRuntimeExports.jsx(ScrollButtonComponent, _extends$1({
              slots: {
                EndScrollButtonIcon: slots.EndScrollButtonIcon
              },
              slotProps: {
                endScrollButtonIcon: endScrollButtonIconProps
              },
              orientation: orientation,
              direction: isRtl ? 'left' : 'right',
              onClick: handleEndScrollClick,
              disabled: !displayScroll.end
            }, TabScrollButtonProps, {
              className: clsx(classes.scrollButtons, TabScrollButtonProps.className)
            })) : null;
            return conditionalElements;
          };
          var scrollSelectedIntoView = useEventCallback(function (animation) {
            var _getTabsMeta2 = getTabsMeta(),
              tabsMeta = _getTabsMeta2.tabsMeta,
              tabMeta = _getTabsMeta2.tabMeta;
            if (!tabMeta || !tabsMeta) {
              return;
            }
            if (tabMeta[start] < tabsMeta[start]) {
              // left side of button is out of view
              var nextScrollStart = tabsMeta[scrollStart] + (tabMeta[start] - tabsMeta[start]);
              scroll(nextScrollStart, {
                animation: animation
              });
            } else if (tabMeta[end] > tabsMeta[end]) {
              // right side of button is out of view
              var _nextScrollStart = tabsMeta[scrollStart] + (tabMeta[end] - tabsMeta[end]);
              scroll(_nextScrollStart, {
                animation: animation
              });
            }
          });
          var updateScrollButtonState = useEventCallback(function () {
            if (scrollable && scrollButtons !== false) {
              var _tabsRef$current = tabsRef.current,
                scrollTop = _tabsRef$current.scrollTop,
                scrollHeight = _tabsRef$current.scrollHeight,
                clientHeight = _tabsRef$current.clientHeight,
                scrollWidth = _tabsRef$current.scrollWidth,
                clientWidth = _tabsRef$current.clientWidth;
              var showStartScroll;
              var showEndScroll;
              if (vertical) {
                showStartScroll = scrollTop > 1;
                showEndScroll = scrollTop < scrollHeight - clientHeight - 1;
              } else {
                var scrollLeft = getNormalizedScrollLeft(tabsRef.current, theme.direction);
                // use 1 for the potential rounding error with browser zooms.
                showStartScroll = isRtl ? scrollLeft < scrollWidth - clientWidth - 1 : scrollLeft > 1;
                showEndScroll = !isRtl ? scrollLeft < scrollWidth - clientWidth - 1 : scrollLeft > 1;
              }
              if (showStartScroll !== displayScroll.start || showEndScroll !== displayScroll.end) {
                setDisplayScroll({
                  start: showStartScroll,
                  end: showEndScroll
                });
              }
            }
          });
          reactExports.useEffect(function () {
            var handleResize = debounce(function () {
              // If the Tabs component is replaced by Suspense with a fallback, the last
              // ResizeObserver's handler that runs because of the change in the layout is trying to
              // access a dom node that is no longer there (as the fallback component is being shown instead).
              // See https://github.com/mui/material-ui/issues/33276
              // TODO: Add tests that will ensure the component is not failing when
              // replaced by Suspense with a fallback, once React is updated to version 18
              if (tabsRef.current) {
                updateIndicatorState();
                updateScrollButtonState();
              }
            });
            var win = ownerWindow(tabsRef.current);
            win.addEventListener('resize', handleResize);
            var resizeObserver;
            if (typeof ResizeObserver !== 'undefined') {
              resizeObserver = new ResizeObserver(handleResize);
              Array.from(tabListRef.current.children).forEach(function (child) {
                resizeObserver.observe(child);
              });
            }
            return function () {
              handleResize.clear();
              win.removeEventListener('resize', handleResize);
              if (resizeObserver) {
                resizeObserver.disconnect();
              }
            };
          }, [updateIndicatorState, updateScrollButtonState]);
          var handleTabsScroll = reactExports.useMemo(function () {
            return debounce(function () {
              updateScrollButtonState();
            });
          }, [updateScrollButtonState]);
          reactExports.useEffect(function () {
            return function () {
              handleTabsScroll.clear();
            };
          }, [handleTabsScroll]);
          reactExports.useEffect(function () {
            setMounted(true);
          }, []);
          reactExports.useEffect(function () {
            updateIndicatorState();
            updateScrollButtonState();
          });
          reactExports.useEffect(function () {
            // Don't animate on the first render.
            scrollSelectedIntoView(defaultIndicatorStyle !== indicatorStyle);
          }, [scrollSelectedIntoView, indicatorStyle]);
          reactExports.useImperativeHandle(action, function () {
            return {
              updateIndicator: updateIndicatorState,
              updateScrollButtons: updateScrollButtonState
            };
          }, [updateIndicatorState, updateScrollButtonState]);
          var indicator = /*#__PURE__*/jsxRuntimeExports.jsx(TabsIndicator, _extends$1({}, TabIndicatorProps, {
            className: clsx(classes.indicator, TabIndicatorProps.className),
            ownerState: ownerState,
            style: _extends$1({}, indicatorStyle, TabIndicatorProps.style)
          }));
          var childIndex = 0;
          var children = reactExports.Children.map(childrenProp, function (child) {
            if (! /*#__PURE__*/reactExports.isValidElement(child)) {
              return null;
            }
            var childValue = child.props.value === undefined ? childIndex : child.props.value;
            valueToIndex.set(childValue, childIndex);
            var selected = childValue === value;
            childIndex += 1;
            return /*#__PURE__*/reactExports.cloneElement(child, _extends$1({
              fullWidth: variant === 'fullWidth',
              indicator: selected && !mounted && indicator,
              selected: selected,
              selectionFollowsFocus: selectionFollowsFocus,
              onChange: onChange,
              textColor: textColor,
              value: childValue
            }, childIndex === 1 && value === false && !child.props.tabIndex ? {
              tabIndex: 0
            } : {}));
          });
          var handleKeyDown = function handleKeyDown(event) {
            var list = tabListRef.current;
            var currentFocus = ownerDocument(list).activeElement;
            // Keyboard navigation assumes that [role="tab"] are siblings
            // though we might warn in the future about nested, interactive elements
            // as a a11y violation
            var role = currentFocus.getAttribute('role');
            if (role !== 'tab') {
              return;
            }
            var previousItemKey = orientation === 'horizontal' ? 'ArrowLeft' : 'ArrowUp';
            var nextItemKey = orientation === 'horizontal' ? 'ArrowRight' : 'ArrowDown';
            if (orientation === 'horizontal' && isRtl) {
              // swap previousItemKey with nextItemKey
              previousItemKey = 'ArrowRight';
              nextItemKey = 'ArrowLeft';
            }
            switch (event.key) {
              case previousItemKey:
                event.preventDefault();
                moveFocus(list, currentFocus, previousItem);
                break;
              case nextItemKey:
                event.preventDefault();
                moveFocus(list, currentFocus, nextItem);
                break;
              case 'Home':
                event.preventDefault();
                moveFocus(list, null, nextItem);
                break;
              case 'End':
                event.preventDefault();
                moveFocus(list, null, previousItem);
                break;
            }
          };
          var conditionalElements = getConditionalElements();
          return /*#__PURE__*/jsxRuntimeExports.jsxs(TabsRoot, _extends$1({
            className: clsx(classes.root, className),
            ownerState: ownerState,
            ref: ref,
            as: component
          }, other, {
            children: [conditionalElements.scrollButtonStart, conditionalElements.scrollbarSizeListener, /*#__PURE__*/jsxRuntimeExports.jsxs(TabsScroller, {
              className: classes.scroller,
              ownerState: ownerState,
              style: _defineProperty2({
                overflow: scrollerStyle.overflow
              }, vertical ? "margin".concat(isRtl ? 'Left' : 'Right') : 'marginBottom', visibleScrollbar ? undefined : -scrollerStyle.scrollbarWidth),
              ref: tabsRef,
              onScroll: handleTabsScroll,
              children: [/*#__PURE__*/jsxRuntimeExports.jsx(FlexContainer, {
                "aria-label": ariaLabel,
                "aria-labelledby": ariaLabelledBy,
                "aria-orientation": orientation === 'vertical' ? 'vertical' : null,
                className: classes.flexContainer,
                ownerState: ownerState,
                onKeyDown: handleKeyDown,
                ref: tabListRef,
                role: "tablist",
                children: children
              }), mounted && indicator]
            }), conditionalElements.scrollButtonEnd]
          }));
        });
        var Tabs$1 = Tabs;
        var ErrorOutlineOutlined = exports('E', createSvgIcon( /*#__PURE__*/jsxRuntimeExports.jsx("path", {
          d: "M11 15h2v2h-2v-2zm0-8h2v6h-2V7zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
        }), 'ErrorOutlineOutlined'));
        var main = "_main_1b9ly_1";
        var styles = {
          main: main
        };
        function Layout(props) {
          var isLoading = useSelector(function (state) {
            return state.templateState.isLoading;
          });
          return /* @__PURE__ */jsxRuntimeExports.jsxs(Box, {
            className: styles.main,
            sx: {
              backgroundColor: "background.default",
              color: "text.primary"
            },
            children: [isLoading ? /* @__PURE__ */jsxRuntimeExports.jsx(LoadingIndicator, {}) : null, props.children]
          });
        }
        function useTimePickerDefaultizedProps(props, name) {
          var _themeProps$ampm;

          // This is technically unsound if the type parameters appear in optional props.
          // Optional props can be filled by `useThemeProps` with types that don't match the type parameters.
          var themeProps = useThemeProps({
            props: props,
            name: name
          });
          var utils = useUtils();
          var ampm = (_themeProps$ampm = themeProps.ampm) != null ? _themeProps$ampm : utils.is12HourCycleInCurrentLocale();
          var localeText = useLocaleText();
          var getOpenDialogAriaText = localeText.openTimePickerDialogue;
          return _extends$1({
            ampm: ampm,
            openTo: 'hours',
            views: ['hours', 'minutes'],
            acceptRegex: ampm ? /[\dapAP]/gi : /\d/gi,
            disableMaskedInput: false,
            getOpenDialogAriaText: getOpenDialogAriaText,
            inputFormat: ampm ? utils.formats.fullTime12h : utils.formats.fullTime24h
          }, themeProps, {
            components: _extends$1({
              OpenPickerIcon: Clock
            }, themeProps.components)
          });
        }
        var timePickerValueManager = {
          emptyValue: null,
          parseInput: parsePickerInputValue,
          getTodayValue: function getTodayValue(utils) {
            return utils.date();
          },
          areValuesEqual: function areValuesEqual(utils, a, b) {
            return utils.isEqual(a, b);
          },
          valueReducer: function valueReducer(utils, lastValidValue, newValue) {
            if (!lastValidValue || !utils.isValid(newValue)) {
              return newValue;
            }
            return utils.mergeDateAndTime(lastValidValue, newValue);
          }
        };
        function getPickersToolbarTextUtilityClass(slot) {
          // TODO v6: Rename 'PrivatePickersToolbarText' to 'MuiPickersToolbarText' to follow convention
          return generateUtilityClass('PrivatePickersToolbarText', slot);
        } // TODO v6: Rename 'PrivatePickersToolbarText' to 'MuiPickersToolbarText' to follow convention

        var pickersToolbarTextClasses = generateUtilityClasses('PrivatePickersToolbarText', ['root', 'selected']);
        var _excluded$a = ["className", "selected", "value"];
        var useUtilityClasses$4 = function useUtilityClasses$4(ownerState) {
          var classes = ownerState.classes,
            selected = ownerState.selected;
          var slots = {
            root: ['root', selected && 'selected']
          };
          return composeClasses(slots, getPickersToolbarTextUtilityClass, classes);
        };
        var PickersToolbarTextRoot = styled(Typography, {
          name: 'PrivatePickersToolbarText',
          slot: 'Root',
          overridesResolver: function overridesResolver(_, styles) {
            return [styles.root, _defineProperty2({}, "&.".concat(pickersToolbarTextClasses.selected), styles.selected)];
          }
        })(function (_ref22) {
          var theme = _ref22.theme;
          return _defineProperty2({
            transition: theme.transitions.create('color'),
            color: theme.palette.text.secondary
          }, "&.".concat(pickersToolbarTextClasses.selected), {
            color: theme.palette.text.primary
          });
        });
        var PickersToolbarText = /*#__PURE__*/reactExports.forwardRef(function PickersToolbarText(props, ref) {
          // TODO v6: add 'useThemeProps' once the component class names are aligned
          var className = props.className,
            value = props.value,
            other = _objectWithoutPropertiesLoose(props, _excluded$a);
          var classes = useUtilityClasses$4(props);
          return /*#__PURE__*/jsxRuntimeExports.jsx(PickersToolbarTextRoot, _extends$1({
            ref: ref,
            className: clsx(className, classes.root),
            component: "span"
          }, other, {
            children: value
          }));
        });
        var _excluded$9 = ["align", "className", "selected", "typographyClassName", "value", "variant"];
        var useUtilityClasses$3 = function useUtilityClasses$3(ownerState) {
          var classes = ownerState.classes;
          var slots = {
            root: ['root']
          };
          return composeClasses(slots, getPickersToolbarUtilityClass, classes);
        };
        var PickersToolbarButtonRoot = styled(Button, {
          name: 'MuiPickersToolbarButton',
          slot: 'Root',
          overridesResolver: function overridesResolver(_, styles) {
            return styles.root;
          }
        })({
          padding: 0,
          minWidth: 16,
          textTransform: 'none'
        });
        var PickersToolbarButton = /*#__PURE__*/reactExports.forwardRef(function PickersToolbarButton(inProps, ref) {
          var props = useThemeProps({
            props: inProps,
            name: 'MuiPickersToolbarButton'
          });
          var align = props.align,
            className = props.className,
            selected = props.selected,
            typographyClassName = props.typographyClassName,
            value = props.value,
            variant = props.variant,
            other = _objectWithoutPropertiesLoose(props, _excluded$9);
          var classes = useUtilityClasses$3(props);
          return /*#__PURE__*/jsxRuntimeExports.jsx(PickersToolbarButtonRoot, _extends$1({
            variant: "text",
            ref: ref,
            className: clsx(className, classes.root)
          }, other, {
            children: /*#__PURE__*/jsxRuntimeExports.jsx(PickersToolbarText, {
              align: align,
              className: typographyClassName,
              variant: variant,
              value: value,
              selected: selected
            })
          }));
        });
        function getTimePickerToolbarUtilityClass(slot) {
          return generateUtilityClass('MuiTimePickerToolbar', slot);
        }
        var timePickerToolbarClasses = generateUtilityClasses('MuiTimePickerToolbar', ['root', 'separator', 'hourMinuteLabel', 'hourMinuteLabelLandscape', 'hourMinuteLabelReverse', 'ampmSelection', 'ampmLandscape', 'ampmLabel']);
        var _excluded$8 = ["ampm", "ampmInClock", "parsedValue", "isLandscape", "isMobileKeyboardViewOpen", "onChange", "openView", "setOpenView", "toggleMobileKeyboardView", "toolbarTitle", "views", "disabled", "readOnly"];
        var useUtilityClasses$2 = function useUtilityClasses$2(ownerState) {
          var theme = ownerState.theme,
            isLandscape = ownerState.isLandscape,
            classes = ownerState.classes;
          var slots = {
            root: ['root'],
            separator: ['separator'],
            hourMinuteLabel: ['hourMinuteLabel', isLandscape && 'hourMinuteLabelLandscape', theme.direction === 'rtl' && 'hourMinuteLabelReverse'],
            ampmSelection: ['ampmSelection', isLandscape && 'ampmLandscape'],
            ampmLabel: ['ampmLabel']
          };
          return composeClasses(slots, getTimePickerToolbarUtilityClass, classes);
        };
        var TimePickerToolbarRoot = styled(PickersToolbar, {
          name: 'MuiTimePickerToolbar',
          slot: 'Root',
          overridesResolver: function overridesResolver(props, styles) {
            return styles.root;
          }
        })(_defineProperty2({}, "& .".concat(pickersToolbarClasses.penIconButtonLandscape), {
          marginTop: 'auto'
        }));
        var TimePickerToolbarSeparator = styled(PickersToolbarText, {
          name: 'MuiTimePickerToolbar',
          slot: 'Separator',
          overridesResolver: function overridesResolver(props, styles) {
            return styles.separator;
          }
        })({
          outline: 0,
          margin: '0 4px 0 2px',
          cursor: 'default'
        });
        var TimePickerToolbarHourMinuteLabel = styled('div', {
          name: 'MuiTimePickerToolbar',
          slot: 'HourMinuteLabel',
          overridesResolver: function overridesResolver(props, styles) {
            var _ref24;
            return [(_ref24 = {}, _defineProperty2(_ref24, "&.".concat(timePickerToolbarClasses.hourMinuteLabelLandscape), styles.hourMinuteLabelLandscape), _defineProperty2(_ref24, "&.".concat(timePickerToolbarClasses.hourMinuteLabelReverse), styles.hourMinuteLabelReverse), _ref24), styles.hourMinuteLabel];
          }
        })(function (_ref25) {
          var theme = _ref25.theme,
            ownerState = _ref25.ownerState;
          return _extends$1({
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'flex-end'
          }, ownerState.isLandscape && {
            marginTop: 'auto'
          }, theme.direction === 'rtl' && {
            flexDirection: 'row-reverse'
          });
        });
        var TimePickerToolbarAmPmSelection = styled('div', {
          name: 'MuiTimePickerToolbar',
          slot: 'AmPmSelection',
          overridesResolver: function overridesResolver(props, styles) {
            return [_defineProperty2({}, ".".concat(timePickerToolbarClasses.ampmLabel), styles.ampmLabel), _defineProperty2({}, "&.".concat(timePickerToolbarClasses.ampmLandscape), styles.ampmLandscape), styles.ampmSelection];
          }
        })(function (_ref28) {
          var ownerState = _ref28.ownerState;
          return _extends$1({
            display: 'flex',
            flexDirection: 'column',
            marginRight: 'auto',
            marginLeft: 12
          }, ownerState.isLandscape && {
            margin: '4px 0 auto',
            flexDirection: 'row',
            justifyContent: 'space-around',
            flexBasis: '100%'
          }, _defineProperty2({}, "& .".concat(timePickerToolbarClasses.ampmLabel), {
            fontSize: 17
          }));
        });
        /**
         * @ignore - internal component.
         */

        function TimePickerToolbar(inProps) {
          var props = useThemeProps({
            props: inProps,
            name: 'MuiTimePickerToolbar'
          });
          var ampm = props.ampm,
            ampmInClock = props.ampmInClock,
            parsedValue = props.parsedValue,
            isLandscape = props.isLandscape,
            isMobileKeyboardViewOpen = props.isMobileKeyboardViewOpen,
            onChange = props.onChange,
            openView = props.openView,
            setOpenView = props.setOpenView,
            toggleMobileKeyboardView = props.toggleMobileKeyboardView,
            toolbarTitleProp = props.toolbarTitle,
            views = props.views,
            disabled = props.disabled,
            readOnly = props.readOnly,
            other = _objectWithoutPropertiesLoose(props, _excluded$8);
          var utils = useUtils();
          var localeText = useLocaleText();
          var toolbarTitle = toolbarTitleProp != null ? toolbarTitleProp : localeText.timePickerDefaultToolbarTitle;
          var theme = useTheme$2();
          var showAmPmControl = Boolean(ampm && !ampmInClock);
          var _useMeridiemMode = useMeridiemMode(parsedValue, ampm, onChange),
            meridiemMode = _useMeridiemMode.meridiemMode,
            handleMeridiemChange = _useMeridiemMode.handleMeridiemChange;
          var formatHours = function formatHours(time) {
            return ampm ? utils.format(time, 'hours12h') : utils.format(time, 'hours24h');
          };
          var ownerState = props;
          var classes = useUtilityClasses$2(_extends$1({}, ownerState, {
            theme: theme
          }));
          var separator = /*#__PURE__*/jsxRuntimeExports.jsx(TimePickerToolbarSeparator, {
            tabIndex: -1,
            value: ":",
            variant: "h3",
            selected: false,
            className: classes.separator
          });
          return /*#__PURE__*/jsxRuntimeExports.jsxs(TimePickerToolbarRoot, _extends$1({
            viewType: "clock",
            landscapeDirection: "row",
            toolbarTitle: toolbarTitle,
            isLandscape: isLandscape,
            isMobileKeyboardViewOpen: isMobileKeyboardViewOpen,
            toggleMobileKeyboardView: toggleMobileKeyboardView,
            ownerState: ownerState,
            className: classes.root
          }, other, {
            children: [/*#__PURE__*/jsxRuntimeExports.jsxs(TimePickerToolbarHourMinuteLabel, {
              className: classes.hourMinuteLabel,
              ownerState: ownerState,
              children: [arrayIncludes(views, 'hours') && /*#__PURE__*/jsxRuntimeExports.jsx(PickersToolbarButton, {
                tabIndex: -1,
                variant: "h3",
                onClick: function onClick() {
                  return setOpenView('hours');
                },
                selected: openView === 'hours',
                value: parsedValue ? formatHours(parsedValue) : '--'
              }), arrayIncludes(views, ['hours', 'minutes']) && separator, arrayIncludes(views, 'minutes') && /*#__PURE__*/jsxRuntimeExports.jsx(PickersToolbarButton, {
                tabIndex: -1,
                variant: "h3",
                onClick: function onClick() {
                  return setOpenView('minutes');
                },
                selected: openView === 'minutes',
                value: parsedValue ? utils.format(parsedValue, 'minutes') : '--'
              }), arrayIncludes(views, ['minutes', 'seconds']) && separator, arrayIncludes(views, 'seconds') && /*#__PURE__*/jsxRuntimeExports.jsx(PickersToolbarButton, {
                variant: "h3",
                onClick: function onClick() {
                  return setOpenView('seconds');
                },
                selected: openView === 'seconds',
                value: parsedValue ? utils.format(parsedValue, 'seconds') : '--'
              })]
            }), showAmPmControl && /*#__PURE__*/jsxRuntimeExports.jsxs(TimePickerToolbarAmPmSelection, {
              className: classes.ampmSelection,
              ownerState: ownerState,
              children: [/*#__PURE__*/jsxRuntimeExports.jsx(PickersToolbarButton, {
                disableRipple: true,
                variant: "subtitle2",
                selected: meridiemMode === 'am',
                typographyClassName: classes.ampmLabel,
                value: utils.getMeridiemText('am'),
                onClick: readOnly ? undefined : function () {
                  return handleMeridiemChange('am');
                },
                disabled: disabled
              }), /*#__PURE__*/jsxRuntimeExports.jsx(PickersToolbarButton, {
                disableRipple: true,
                variant: "subtitle2",
                selected: meridiemMode === 'pm',
                typographyClassName: classes.ampmLabel,
                value: utils.getMeridiemText('pm'),
                onClick: readOnly ? undefined : function () {
                  return handleMeridiemChange('pm');
                },
                disabled: disabled
              })]
            })]
          }));
        }
        var validateTime = function validateTime(_ref29) {
          var adapter = _ref29.adapter,
            value = _ref29.value,
            props = _ref29.props;
          var minTime = props.minTime,
            maxTime = props.maxTime,
            minutesStep = props.minutesStep,
            shouldDisableTime = props.shouldDisableTime,
            disableIgnoringDatePartForTimeValidation = props.disableIgnoringDatePartForTimeValidation;
          var date = adapter.utils.date(value);
          var isAfter = createIsAfterIgnoreDatePart(disableIgnoringDatePartForTimeValidation, adapter.utils);
          if (value === null) {
            return null;
          }
          switch (true) {
            case !adapter.utils.isValid(value):
              return 'invalidDate';
            case Boolean(minTime && isAfter(minTime, date)):
              return 'minTime';
            case Boolean(maxTime && isAfter(date, maxTime)):
              return 'maxTime';
            case Boolean(shouldDisableTime && shouldDisableTime(adapter.utils.getHours(date), 'hours')):
              return 'shouldDisableTime-hours';
            case Boolean(shouldDisableTime && shouldDisableTime(adapter.utils.getMinutes(date), 'minutes')):
              return 'shouldDisableTime-minutes';
            case Boolean(shouldDisableTime && shouldDisableTime(adapter.utils.getSeconds(date), 'seconds')):
              return 'shouldDisableTime-seconds';
            case Boolean(minutesStep && adapter.utils.getMinutes(date) % minutesStep !== 0):
              return 'minutesStep';
            default:
              return null;
          }
        };
        var isSameTimeError = function isSameTimeError(a, b) {
          return a === b;
        };
        var useTimeValidation = function useTimeValidation(props) {
          return useValidation(props, validateTime, isSameTimeError);
        };
        var _excluded$7 = ["onChange", "PaperProps", "PopperProps", "ToolbarComponent", "TransitionComponent", "value", "components", "componentsProps"];

        /**
         *
         * Demos:
         *
         * - [Time Picker](https://mui.com/x/react-date-pickers/time-picker/)
         *
         * API:
         *
         * - [DesktopTimePicker API](https://mui.com/x/api/date-pickers/desktop-time-picker/)
         */
        var DesktopTimePicker = /*#__PURE__*/reactExports.forwardRef(function DesktopTimePicker(inProps, ref) {
          var props = useTimePickerDefaultizedProps(inProps, 'MuiDesktopTimePicker');
          var validationError = useTimeValidation(props) !== null;
          var _usePickerState = usePickerState(props, timePickerValueManager),
            pickerProps = _usePickerState.pickerProps,
            inputProps = _usePickerState.inputProps,
            wrapperProps = _usePickerState.wrapperProps;
          var PaperProps = props.PaperProps,
            PopperProps = props.PopperProps,
            _props$ToolbarCompone = props.ToolbarComponent,
            ToolbarComponent = _props$ToolbarCompone === void 0 ? TimePickerToolbar : _props$ToolbarCompone,
            TransitionComponent = props.TransitionComponent,
            components = props.components,
            componentsProps = props.componentsProps,
            other = _objectWithoutPropertiesLoose(props, _excluded$7);
          var DateInputProps = _extends$1({}, inputProps, other, {
            components: components,
            componentsProps: componentsProps,
            ref: ref,
            validationError: validationError
          });
          return /*#__PURE__*/jsxRuntimeExports.jsx(DesktopWrapper, _extends$1({}, wrapperProps, {
            DateInputProps: DateInputProps,
            KeyboardDateInputComponent: KeyboardDateInput,
            PopperProps: PopperProps,
            PaperProps: PaperProps,
            TransitionComponent: TransitionComponent,
            components: components,
            componentsProps: componentsProps,
            children: /*#__PURE__*/jsxRuntimeExports.jsx(CalendarOrClockPicker, _extends$1({}, pickerProps, {
              autoFocus: true,
              toolbarTitle: props.label || props.toolbarTitle,
              ToolbarComponent: ToolbarComponent,
              DateInputProps: DateInputProps,
              components: components,
              componentsProps: componentsProps
            }, other))
          }));
        });
        var _excluded$6 = ["ToolbarComponent", "value", "onChange", "components", "componentsProps"];

        /**
         *
         * Demos:
         *
         * - [Time Picker](https://mui.com/x/react-date-pickers/time-picker/)
         *
         * API:
         *
         * - [MobileTimePicker API](https://mui.com/x/api/date-pickers/mobile-time-picker/)
         */
        var MobileTimePicker = /*#__PURE__*/reactExports.forwardRef(function MobileTimePicker(inProps, ref) {
          var props = useTimePickerDefaultizedProps(inProps, 'MuiMobileTimePicker');
          var validationError = useTimeValidation(props) !== null;
          var _usePickerState2 = usePickerState(props, timePickerValueManager),
            pickerProps = _usePickerState2.pickerProps,
            inputProps = _usePickerState2.inputProps,
            wrapperProps = _usePickerState2.wrapperProps; // Note that we are passing down all the value without spread.
          // It saves us >1kb gzip and make any prop available automatically on any level down.

          var _props$ToolbarCompone2 = props.ToolbarComponent,
            ToolbarComponent = _props$ToolbarCompone2 === void 0 ? TimePickerToolbar : _props$ToolbarCompone2,
            components = props.components,
            componentsProps = props.componentsProps,
            other = _objectWithoutPropertiesLoose(props, _excluded$6);
          var DateInputProps = _extends$1({}, inputProps, other, {
            components: components,
            componentsProps: componentsProps,
            ref: ref,
            validationError: validationError
          });
          return /*#__PURE__*/jsxRuntimeExports.jsx(MobileWrapper, _extends$1({}, other, wrapperProps, {
            DateInputProps: DateInputProps,
            PureDateInputComponent: PureDateInput,
            components: components,
            componentsProps: componentsProps,
            children: /*#__PURE__*/jsxRuntimeExports.jsx(CalendarOrClockPicker, _extends$1({}, pickerProps, {
              autoFocus: true,
              toolbarTitle: props.label || props.toolbarTitle,
              ToolbarComponent: ToolbarComponent,
              DateInputProps: DateInputProps,
              components: components,
              componentsProps: componentsProps
            }, other))
          }));
        });
        var _excluded$5 = ["desktopModeMediaQuery", "DialogProps", "PopperProps", "TransitionComponent"];

        /**
         *
         * Demos:
         *
         * - [Pickers](https://mui.com/x/react-date-pickers/)
         * - [Time Picker](https://mui.com/x/react-date-pickers/time-picker/)
         *
         * API:
         *
         * - [TimePicker API](https://mui.com/x/api/date-pickers/time-picker/)
         */
        var TimePicker = exports('T', /*#__PURE__*/reactExports.forwardRef(function TimePicker(inProps, ref) {
          var props = useThemeProps({
            props: inProps,
            name: 'MuiTimePicker'
          });
          var _props$desktopModeMed = props.desktopModeMediaQuery,
            desktopModeMediaQuery = _props$desktopModeMed === void 0 ? '@media (pointer: fine)' : _props$desktopModeMed,
            DialogProps = props.DialogProps,
            PopperProps = props.PopperProps,
            TransitionComponent = props.TransitionComponent,
            other = _objectWithoutPropertiesLoose(props, _excluded$5); // defaults to `true` in environments where `window.matchMedia` would not be available (i.e. test/jsdom)

          var isDesktop = useMediaQuery(desktopModeMediaQuery, {
            defaultMatches: true
          });
          if (isDesktop) {
            return /*#__PURE__*/jsxRuntimeExports.jsx(DesktopTimePicker, _extends$1({
              ref: ref,
              PopperProps: PopperProps,
              TransitionComponent: TransitionComponent
            }, other));
          }
          return /*#__PURE__*/jsxRuntimeExports.jsx(MobileTimePicker, _extends$1({
            ref: ref,
            DialogProps: DialogProps
          }, other));
        }));
        function useDateTimePickerDefaultizedProps(props, name) {
          var _themeProps$ampm, _themeProps$minDateTi, _themeProps$maxDateTi, _themeProps$minDateTi2, _themeProps$maxDateTi2;

          // This is technically unsound if the type parameters appear in optional props.
          // Optional props can be filled by `useThemeProps` with types that don't match the type parameters.
          var themeProps = useThemeProps({
            props: props,
            name: name
          });
          var utils = useUtils();
          var defaultDates = useDefaultDates();
          var ampm = (_themeProps$ampm = themeProps.ampm) != null ? _themeProps$ampm : utils.is12HourCycleInCurrentLocale();
          if (themeProps.orientation != null && themeProps.orientation !== 'portrait') {
            throw new Error('We are not supporting custom orientation for DateTimePicker yet :(');
          }
          return _extends$1({
            ampm: ampm,
            orientation: 'portrait',
            openTo: 'day',
            views: ['year', 'day', 'hours', 'minutes'],
            ampmInClock: true,
            acceptRegex: ampm ? /[\dap]/gi : /\d/gi,
            disableMaskedInput: false,
            inputFormat: ampm ? utils.formats.keyboardDateTime12h : utils.formats.keyboardDateTime24h,
            disableIgnoringDatePartForTimeValidation: Boolean(themeProps.minDateTime || themeProps.maxDateTime),
            disablePast: false,
            disableFuture: false
          }, themeProps, {
            minDate: parseNonNullablePickerDate(utils, (_themeProps$minDateTi = themeProps.minDateTime) != null ? _themeProps$minDateTi : themeProps.minDate, defaultDates.minDate),
            maxDate: parseNonNullablePickerDate(utils, (_themeProps$maxDateTi = themeProps.maxDateTime) != null ? _themeProps$maxDateTi : themeProps.maxDate, defaultDates.maxDate),
            minTime: (_themeProps$minDateTi2 = themeProps.minDateTime) != null ? _themeProps$minDateTi2 : themeProps.minTime,
            maxTime: (_themeProps$maxDateTi2 = themeProps.maxDateTime) != null ? _themeProps$maxDateTi2 : themeProps.maxTime
          });
        }
        var dateTimePickerValueManager = {
          emptyValue: null,
          getTodayValue: function getTodayValue(utils) {
            return utils.date();
          },
          parseInput: parsePickerInputValue,
          areValuesEqual: function areValuesEqual(utils, a, b) {
            return utils.isEqual(a, b);
          }
        };
        var resolveViewTypeFromView = function resolveViewTypeFromView(view) {
          switch (view) {
            case 'year':
            case 'month':
            case 'day':
              return 'calendar';
            default:
              return 'clock';
          }
        };
        function getDateTimePickerToolbarUtilityClass(slot) {
          return generateUtilityClass('MuiDateTimePickerToolbar', slot);
        }
        generateUtilityClasses('MuiDateTimePickerToolbar', ['root', 'dateContainer', 'timeContainer', 'separator']);
        var _excluded$4 = ["ampm", "parsedValue", "isMobileKeyboardViewOpen", "onChange", "openView", "setOpenView", "toggleMobileKeyboardView", "toolbarFormat", "toolbarPlaceholder", "toolbarTitle", "views"];
        var useUtilityClasses$1 = function useUtilityClasses$1(ownerState) {
          var classes = ownerState.classes;
          var slots = {
            root: ['root'],
            dateContainer: ['dateContainer'],
            timeContainer: ['timeContainer'],
            separator: ['separator']
          };
          return composeClasses(slots, getDateTimePickerToolbarUtilityClass, classes);
        };
        var DateTimePickerToolbarRoot = styled(PickersToolbar, {
          name: 'MuiDateTimePickerToolbar',
          slot: 'Root',
          overridesResolver: function overridesResolver(props, styles) {
            return styles.root;
          }
        })(function (_ref30) {
          var theme = _ref30.theme;
          return _defineProperty2({
            paddingLeft: 16,
            paddingRight: 16,
            justifyContent: 'space-around',
            position: 'relative'
          }, "& .".concat(pickersToolbarClasses.penIconButton), _extends$1({
            position: 'absolute',
            top: 8
          }, theme.direction === 'rtl' ? {
            left: 8
          } : {
            right: 8
          }));
        });
        var DateTimePickerToolbarDateContainer = styled('div', {
          name: 'MuiDateTimePickerToolbar',
          slot: 'DateContainer',
          overridesResolver: function overridesResolver(props, styles) {
            return styles.dateContainer;
          }
        })({
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start'
        });
        var DateTimePickerToolbarTimeContainer = styled('div', {
          name: 'MuiDateTimePickerToolbar',
          slot: 'TimeContainer',
          overridesResolver: function overridesResolver(props, styles) {
            return styles.timeContainer;
          }
        })({
          display: 'flex'
        });
        var DateTimePickerToolbarSeparator = styled(PickersToolbarText, {
          name: 'MuiDateTimePickerToolbar',
          slot: 'Separator',
          overridesResolver: function overridesResolver(props, styles) {
            return styles.separator;
          }
        })({
          margin: '0 4px 0 2px',
          cursor: 'default'
        });
        /**
         * @ignore - internal component.
         */

        function DateTimePickerToolbar(inProps) {
          var props = useThemeProps({
            props: inProps,
            name: 'MuiDateTimePickerToolbar'
          });
          var ampm = props.ampm,
            parsedValue = props.parsedValue,
            isMobileKeyboardViewOpen = props.isMobileKeyboardViewOpen,
            openView = props.openView,
            setOpenView = props.setOpenView,
            toggleMobileKeyboardView = props.toggleMobileKeyboardView,
            toolbarFormat = props.toolbarFormat,
            _props$toolbarPlaceho = props.toolbarPlaceholder,
            toolbarPlaceholder = _props$toolbarPlaceho === void 0 ? '––' : _props$toolbarPlaceho,
            toolbarTitleProp = props.toolbarTitle,
            views = props.views,
            other = _objectWithoutPropertiesLoose(props, _excluded$4);
          var ownerState = props;
          var utils = useUtils();
          var localeText = useLocaleText();
          var classes = useUtilityClasses$1(ownerState);
          var toolbarTitle = toolbarTitleProp != null ? toolbarTitleProp : localeText.dateTimePickerDefaultToolbarTitle;
          var formatHours = function formatHours(time) {
            return ampm ? utils.format(time, 'hours12h') : utils.format(time, 'hours24h');
          };
          var dateText = reactExports.useMemo(function () {
            if (!parsedValue) {
              return toolbarPlaceholder;
            }
            if (toolbarFormat) {
              return utils.formatByString(parsedValue, toolbarFormat);
            }
            return utils.format(parsedValue, 'shortDate');
          }, [parsedValue, toolbarFormat, toolbarPlaceholder, utils]);
          return /*#__PURE__*/jsxRuntimeExports.jsxs(DateTimePickerToolbarRoot, _extends$1({
            toolbarTitle: toolbarTitle,
            isMobileKeyboardViewOpen: isMobileKeyboardViewOpen,
            toggleMobileKeyboardView: toggleMobileKeyboardView,
            className: classes.root,
            viewType: resolveViewTypeFromView(openView)
          }, other, {
            isLandscape: false,
            ownerState: ownerState,
            children: [/*#__PURE__*/jsxRuntimeExports.jsxs(DateTimePickerToolbarDateContainer, {
              className: classes.dateContainer,
              ownerState: ownerState,
              children: [views.includes('year') && /*#__PURE__*/jsxRuntimeExports.jsx(PickersToolbarButton, {
                tabIndex: -1,
                variant: "subtitle1",
                onClick: function onClick() {
                  return setOpenView('year');
                },
                selected: openView === 'year',
                value: parsedValue ? utils.format(parsedValue, 'year') : '–'
              }), views.includes('day') && /*#__PURE__*/jsxRuntimeExports.jsx(PickersToolbarButton, {
                tabIndex: -1,
                variant: "h4",
                onClick: function onClick() {
                  return setOpenView('day');
                },
                selected: openView === 'day',
                value: dateText
              })]
            }), /*#__PURE__*/jsxRuntimeExports.jsxs(DateTimePickerToolbarTimeContainer, {
              className: classes.timeContainer,
              ownerState: ownerState,
              children: [views.includes('hours') && /*#__PURE__*/jsxRuntimeExports.jsx(PickersToolbarButton, {
                variant: "h3",
                onClick: function onClick() {
                  return setOpenView('hours');
                },
                selected: openView === 'hours',
                value: parsedValue ? formatHours(parsedValue) : '--'
              }), views.includes('minutes') && /*#__PURE__*/jsxRuntimeExports.jsxs(reactExports.Fragment, {
                children: [/*#__PURE__*/jsxRuntimeExports.jsx(DateTimePickerToolbarSeparator, {
                  variant: "h3",
                  value: ":",
                  className: classes.separator,
                  ownerState: ownerState
                }), /*#__PURE__*/jsxRuntimeExports.jsx(PickersToolbarButton, {
                  variant: "h3",
                  onClick: function onClick() {
                    return setOpenView('minutes');
                  },
                  selected: openView === 'minutes',
                  value: parsedValue ? utils.format(parsedValue, 'minutes') : '--'
                })]
              }), views.includes('seconds') && /*#__PURE__*/jsxRuntimeExports.jsxs(reactExports.Fragment, {
                children: [/*#__PURE__*/jsxRuntimeExports.jsx(DateTimePickerToolbarSeparator, {
                  variant: "h3",
                  value: ":",
                  className: classes.separator,
                  ownerState: ownerState
                }), /*#__PURE__*/jsxRuntimeExports.jsx(PickersToolbarButton, {
                  variant: "h3",
                  onClick: function onClick() {
                    return setOpenView('seconds');
                  },
                  selected: openView === 'seconds',
                  value: parsedValue ? utils.format(parsedValue, 'seconds') : '--'
                })]
              })]
            })]
          }));
        }
        var _excluded$3 = ["minDate", "maxDate", "disableFuture", "shouldDisableDate", "disablePast"];
        var validateDateTime = function validateDateTime(_ref32) {
          var props = _ref32.props,
            value = _ref32.value,
            adapter = _ref32.adapter;
          var minDate = props.minDate,
            maxDate = props.maxDate,
            disableFuture = props.disableFuture,
            shouldDisableDate = props.shouldDisableDate,
            disablePast = props.disablePast,
            timeValidationProps = _objectWithoutPropertiesLoose(props, _excluded$3);
          var dateValidationResult = validateDate({
            adapter: adapter,
            value: value,
            props: {
              minDate: minDate,
              maxDate: maxDate,
              disableFuture: disableFuture,
              shouldDisableDate: shouldDisableDate,
              disablePast: disablePast
            }
          });
          if (dateValidationResult !== null) {
            return dateValidationResult;
          }
          return validateTime({
            adapter: adapter,
            value: value,
            props: timeValidationProps
          });
        };
        var isSameDateTimeError = function isSameDateTimeError(a, b) {
          return a === b;
        };
        function useDateTimeValidation(props) {
          return useValidation(props, validateDateTime, isSameDateTimeError);
        }
        function getDateTimePickerTabsUtilityClass(slot) {
          return generateUtilityClass('MuiDateTimePickerTabs', slot);
        }
        generateUtilityClasses('MuiDateTimePickerTabs', ['root']);
        var viewToTab = function viewToTab(openView) {
          if (['day', 'month', 'year'].includes(openView)) {
            return 'date';
          }
          return 'time';
        };
        var tabToView = function tabToView(tab) {
          if (tab === 'date') {
            return 'day';
          }
          return 'hours';
        };
        var useUtilityClasses = function useUtilityClasses(ownerState) {
          var classes = ownerState.classes;
          var slots = {
            root: ['root']
          };
          return composeClasses(slots, getDateTimePickerTabsUtilityClass, classes);
        };
        var DateTimePickerTabsRoot = styled(Tabs$1, {
          name: 'MuiDateTimePickerTabs',
          slot: 'Root',
          overridesResolver: function overridesResolver(_, styles) {
            return styles.root;
          }
        })(function (_ref33) {
          var ownerState = _ref33.ownerState,
            theme = _ref33.theme;
          return _extends$1({
            boxShadow: "0 -1px 0 0 inset ".concat(theme.palette.divider)
          }, ownerState.wrapperVariant === 'desktop' && _defineProperty2({
            order: 1,
            boxShadow: "0 1px 0 0 inset ".concat(theme.palette.divider)
          }, "& .".concat(tabsClasses$1.indicator), {
            bottom: 'auto',
            top: 0
          }));
        });
        var DateTimePickerTabs = function DateTimePickerTabs(inProps) {
          var props = useThemeProps({
            props: inProps,
            name: 'MuiDateTimePickerTabs'
          });
          var _props$dateRangeIcon = props.dateRangeIcon,
            dateRangeIcon = _props$dateRangeIcon === void 0 ? /*#__PURE__*/jsxRuntimeExports.jsx(DateRange, {}) : _props$dateRangeIcon,
            onChange = props.onChange,
            _props$timeIcon = props.timeIcon,
            timeIcon = _props$timeIcon === void 0 ? /*#__PURE__*/jsxRuntimeExports.jsx(Time, {}) : _props$timeIcon,
            view = props.view;
          var localeText = useLocaleText();
          var wrapperVariant = reactExports.useContext(WrapperVariantContext);
          var ownerState = _extends$1({}, props, {
            wrapperVariant: wrapperVariant
          });
          var classes = useUtilityClasses(ownerState);
          var handleChange = function handleChange(event, value) {
            onChange(tabToView(value));
          };
          return /*#__PURE__*/jsxRuntimeExports.jsxs(DateTimePickerTabsRoot, {
            ownerState: ownerState,
            variant: "fullWidth",
            value: viewToTab(view),
            onChange: handleChange,
            className: classes.root,
            children: [/*#__PURE__*/jsxRuntimeExports.jsx(Tab$1, {
              value: "date",
              "aria-label": localeText.dateTableLabel,
              icon: /*#__PURE__*/jsxRuntimeExports.jsx(reactExports.Fragment, {
                children: dateRangeIcon
              })
            }), /*#__PURE__*/jsxRuntimeExports.jsx(Tab$1, {
              value: "time",
              "aria-label": localeText.timeTableLabel,
              icon: /*#__PURE__*/jsxRuntimeExports.jsx(reactExports.Fragment, {
                children: timeIcon
              })
            })]
          });
        };
        var _excluded$2 = ["onChange", "PaperProps", "PopperProps", "ToolbarComponent", "TransitionComponent", "value", "components", "componentsProps", "hideTabs"];

        /**
         *
         * Demos:
         *
         * - [Date Time Picker](https://mui.com/x/react-date-pickers/date-time-picker/)
         *
         * API:
         *
         * - [DesktopDateTimePicker API](https://mui.com/x/api/date-pickers/desktop-date-time-picker/)
         */
        var DesktopDateTimePicker = /*#__PURE__*/reactExports.forwardRef(function DesktopDateTimePicker(inProps, ref) {
          var props = useDateTimePickerDefaultizedProps(inProps, 'MuiDesktopDateTimePicker');
          var validationError = useDateTimeValidation(props) !== null;
          var _usePickerState3 = usePickerState(props, dateTimePickerValueManager),
            pickerProps = _usePickerState3.pickerProps,
            inputProps = _usePickerState3.inputProps,
            wrapperProps = _usePickerState3.wrapperProps;
          var PaperProps = props.PaperProps,
            PopperProps = props.PopperProps,
            _props$ToolbarCompone3 = props.ToolbarComponent,
            ToolbarComponent = _props$ToolbarCompone3 === void 0 ? DateTimePickerToolbar : _props$ToolbarCompone3,
            TransitionComponent = props.TransitionComponent,
            providedComponents = props.components,
            componentsProps = props.componentsProps,
            _props$hideTabs = props.hideTabs,
            hideTabs = _props$hideTabs === void 0 ? true : _props$hideTabs,
            other = _objectWithoutPropertiesLoose(props, _excluded$2);
          var components = reactExports.useMemo(function () {
            return _extends$1({
              Tabs: DateTimePickerTabs
            }, providedComponents);
          }, [providedComponents]);
          var AllDateInputProps = _extends$1({}, inputProps, other, {
            components: components,
            componentsProps: componentsProps,
            ref: ref,
            validationError: validationError
          });
          return /*#__PURE__*/jsxRuntimeExports.jsx(DesktopWrapper, _extends$1({}, wrapperProps, {
            DateInputProps: AllDateInputProps,
            KeyboardDateInputComponent: KeyboardDateInput,
            PopperProps: PopperProps,
            PaperProps: PaperProps,
            TransitionComponent: TransitionComponent,
            components: components,
            componentsProps: componentsProps,
            children: /*#__PURE__*/jsxRuntimeExports.jsx(CalendarOrClockPicker, _extends$1({}, pickerProps, {
              autoFocus: true,
              toolbarTitle: props.label || props.toolbarTitle,
              ToolbarComponent: ToolbarComponent,
              DateInputProps: AllDateInputProps,
              components: components,
              componentsProps: componentsProps,
              hideTabs: hideTabs
            }, other))
          }));
        });
        var _excluded$1 = ["ToolbarComponent", "value", "onChange", "components", "componentsProps", "hideTabs"];

        /**
         *
         * Demos:
         *
         * - [Date Time Picker](https://mui.com/x/react-date-pickers/date-time-picker/)
         *
         * API:
         *
         * - [MobileDateTimePicker API](https://mui.com/x/api/date-pickers/mobile-date-time-picker/)
         */
        var MobileDateTimePicker = /*#__PURE__*/reactExports.forwardRef(function MobileDateTimePicker(inProps, ref) {
          var props = useDateTimePickerDefaultizedProps(inProps, 'MuiMobileDateTimePicker');
          var validationError = useDateTimeValidation(props) !== null;
          var _usePickerState4 = usePickerState(props, dateTimePickerValueManager),
            pickerProps = _usePickerState4.pickerProps,
            inputProps = _usePickerState4.inputProps,
            wrapperProps = _usePickerState4.wrapperProps; // Note that we are passing down all the value without spread.
          // It saves us >1kb gzip and make any prop available automatically on any level down.

          var _props$ToolbarCompone4 = props.ToolbarComponent,
            ToolbarComponent = _props$ToolbarCompone4 === void 0 ? DateTimePickerToolbar : _props$ToolbarCompone4,
            providedComponents = props.components,
            componentsProps = props.componentsProps,
            _props$hideTabs2 = props.hideTabs,
            hideTabs = _props$hideTabs2 === void 0 ? false : _props$hideTabs2,
            other = _objectWithoutPropertiesLoose(props, _excluded$1);
          var components = reactExports.useMemo(function () {
            return _extends$1({
              Tabs: DateTimePickerTabs
            }, providedComponents);
          }, [providedComponents]);
          var DateInputProps = _extends$1({}, inputProps, other, {
            components: components,
            componentsProps: componentsProps,
            ref: ref,
            validationError: validationError
          });
          return /*#__PURE__*/jsxRuntimeExports.jsx(MobileWrapper, _extends$1({}, other, wrapperProps, {
            DateInputProps: DateInputProps,
            PureDateInputComponent: PureDateInput,
            components: components,
            componentsProps: componentsProps,
            children: /*#__PURE__*/jsxRuntimeExports.jsx(CalendarOrClockPicker, _extends$1({}, pickerProps, {
              autoFocus: true,
              toolbarTitle: props.label || props.toolbarTitle,
              ToolbarComponent: ToolbarComponent,
              DateInputProps: DateInputProps,
              components: components,
              componentsProps: componentsProps,
              hideTabs: hideTabs
            }, other))
          }));
        });
        var _excluded = ["desktopModeMediaQuery", "DialogProps", "PopperProps", "TransitionComponent"];

        /**
         *
         * Demos:
         *
         * - [Date Time Picker](https://mui.com/x/react-date-pickers/date-time-picker/)
         * - [Pickers](https://mui.com/x/react-date-pickers/)
         *
         * API:
         *
         * - [DateTimePicker API](https://mui.com/x/api/date-pickers/date-time-picker/)
         */
        var DateTimePicker = exports('D', /*#__PURE__*/reactExports.forwardRef(function DateTimePicker(inProps, ref) {
          var props = useThemeProps({
            props: inProps,
            name: 'MuiDateTimePicker'
          });
          var _props$desktopModeMed2 = props.desktopModeMediaQuery,
            desktopModeMediaQuery = _props$desktopModeMed2 === void 0 ? '@media (pointer: fine)' : _props$desktopModeMed2,
            DialogProps = props.DialogProps,
            PopperProps = props.PopperProps,
            TransitionComponent = props.TransitionComponent,
            other = _objectWithoutPropertiesLoose(props, _excluded); // defaults to `true` in environments where `window.matchMedia` would not be available (i.e. test/jsdom)

          var isDesktop = useMediaQuery(desktopModeMediaQuery, {
            defaultMatches: true
          });
          if (isDesktop) {
            return /*#__PURE__*/jsxRuntimeExports.jsx(DesktopDateTimePicker, _extends$1({
              ref: ref,
              PopperProps: PopperProps,
              TransitionComponent: TransitionComponent
            }, other));
          }
          return /*#__PURE__*/jsxRuntimeExports.jsx(MobileDateTimePicker, _extends$1({
            ref: ref,
            DialogProps: DialogProps
          }, other));
        }));
        var lib = {};
        var players = {};
        var utils = {};
        var loadScript = function load(src, opts, cb) {
          var head = document.head || document.getElementsByTagName('head')[0];
          var script = document.createElement('script');
          if (typeof opts === 'function') {
            cb = opts;
            opts = {};
          }
          opts = opts || {};
          cb = cb || function () {};
          script.type = opts.type || 'text/javascript';
          script.charset = opts.charset || 'utf8';
          script.async = 'async' in opts ? !!opts.async : true;
          script.src = src;
          if (opts.attrs) {
            setAttributes(script, opts.attrs);
          }
          if (opts.text) {
            script.text = '' + opts.text;
          }
          var onend = 'onload' in script ? stdOnEnd : ieOnEnd;
          onend(script, cb);

          // some good legacy browsers (firefox) fail the 'in' detection above
          // so as a fallback we always set onload
          // old IE will ignore this and new IE will set onload
          if (!script.onload) {
            stdOnEnd(script, cb);
          }
          head.appendChild(script);
        };
        function setAttributes(script, attrs) {
          for (var attr in attrs) {
            script.setAttribute(attr, attrs[attr]);
          }
        }
        function stdOnEnd(script, cb) {
          script.onload = function () {
            this.onerror = this.onload = null;
            cb(null, script);
          };
          script.onerror = function () {
            // this.onload = null here is necessary
            // because even IE9 works not like others
            this.onerror = this.onload = null;
            cb(new Error('Failed to load ' + this.src), script);
          };
        }
        function ieOnEnd(script, cb) {
          script.onreadystatechange = function () {
            if (this.readyState != 'complete' && this.readyState != 'loaded') return;
            this.onreadystatechange = null;
            cb(null, script); // there is no way to catch loading errors in IE8
          };
        }

        var isMergeableObject = function isMergeableObject(value) {
          return isNonNullObject(value) && !isSpecial(value);
        };
        function isNonNullObject(value) {
          return !!value && _typeof2(value) === 'object';
        }
        function isSpecial(value) {
          var stringValue = Object.prototype.toString.call(value);
          return stringValue === '[object RegExp]' || stringValue === '[object Date]' || isReactElement(value);
        }

        // see https://github.com/facebook/react/blob/b5ac963fb791d1298e7f396236383bc955f916c1/src/isomorphic/classic/element/ReactElement.js#L21-L25
        var canUseSymbol = typeof Symbol === 'function' && Symbol.for;
        var REACT_ELEMENT_TYPE = canUseSymbol ? Symbol.for('react.element') : 0xeac7;
        function isReactElement(value) {
          return value.$$typeof === REACT_ELEMENT_TYPE;
        }
        function emptyTarget(val) {
          return Array.isArray(val) ? [] : {};
        }
        function cloneUnlessOtherwiseSpecified(value, options) {
          return options.clone !== false && options.isMergeableObject(value) ? deepmerge(emptyTarget(value), value, options) : value;
        }
        function defaultArrayMerge(target, source, options) {
          return target.concat(source).map(function (element) {
            return cloneUnlessOtherwiseSpecified(element, options);
          });
        }
        function getMergeFunction(key, options) {
          if (!options.customMerge) {
            return deepmerge;
          }
          var customMerge = options.customMerge(key);
          return typeof customMerge === 'function' ? customMerge : deepmerge;
        }
        function getEnumerableOwnPropertySymbols(target) {
          return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(target).filter(function (symbol) {
            return Object.propertyIsEnumerable.call(target, symbol);
          }) : [];
        }
        function getKeys(target) {
          return Object.keys(target).concat(getEnumerableOwnPropertySymbols(target));
        }
        function propertyIsOnObject(object, property) {
          try {
            return property in object;
          } catch (_) {
            return false;
          }
        }

        // Protects from prototype poisoning and unexpected merging up the prototype chain.
        function propertyIsUnsafe(target, key) {
          return propertyIsOnObject(target, key) // Properties are safe to merge if they don't exist in the target yet,
          && !(Object.hasOwnProperty.call(target, key) // unsafe if they exist up the prototype chain,
          && Object.propertyIsEnumerable.call(target, key)); // and also unsafe if they're nonenumerable.
        }

        function mergeObject(target, source, options) {
          var destination = {};
          if (options.isMergeableObject(target)) {
            getKeys(target).forEach(function (key) {
              destination[key] = cloneUnlessOtherwiseSpecified(target[key], options);
            });
          }
          getKeys(source).forEach(function (key) {
            if (propertyIsUnsafe(target, key)) {
              return;
            }
            if (propertyIsOnObject(target, key) && options.isMergeableObject(source[key])) {
              destination[key] = getMergeFunction(key, options)(target[key], source[key], options);
            } else {
              destination[key] = cloneUnlessOtherwiseSpecified(source[key], options);
            }
          });
          return destination;
        }
        function deepmerge(target, source, options) {
          options = options || {};
          options.arrayMerge = options.arrayMerge || defaultArrayMerge;
          options.isMergeableObject = options.isMergeableObject || isMergeableObject;
          // cloneUnlessOtherwiseSpecified is added to `options` so that custom arrayMerge()
          // implementations can use it. The caller may not replace it.
          options.cloneUnlessOtherwiseSpecified = cloneUnlessOtherwiseSpecified;
          var sourceIsArray = Array.isArray(source);
          var targetIsArray = Array.isArray(target);
          var sourceAndTargetTypesMatch = sourceIsArray === targetIsArray;
          if (!sourceAndTargetTypesMatch) {
            return cloneUnlessOtherwiseSpecified(source, options);
          } else if (sourceIsArray) {
            return options.arrayMerge(target, source, options);
          } else {
            return mergeObject(target, source, options);
          }
        }
        deepmerge.all = function deepmergeAll(array, options) {
          if (!Array.isArray(array)) {
            throw new Error('first argument should be an array');
          }
          return array.reduce(function (prev, next) {
            return deepmerge(prev, next, options);
          }, {});
        };
        var deepmerge_1 = deepmerge;
        var cjs = deepmerge_1;
        Object.defineProperty(utils, "__esModule", {
          value: true
        });
        utils.parseStartTime = parseStartTime;
        utils.parseEndTime = parseEndTime;
        utils.randomString = randomString;
        utils.queryString = queryString;
        utils.getSDK = getSDK;
        utils.getConfig = getConfig;
        utils.omit = omit;
        utils.callPlayer = callPlayer;
        utils.isMediaStream = isMediaStream;
        utils.isBlobUrl = isBlobUrl;
        utils.supportsWebKitPresentationMode = supportsWebKitPresentationMode;
        var _loadScript = _interopRequireDefault$2(loadScript);
        var _deepmerge$1 = _interopRequireDefault$2(cjs);
        function _interopRequireDefault$2(obj) {
          return obj && obj.__esModule ? obj : {
            "default": obj
          };
        }
        function _slicedToArray(arr, i) {
          return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray$2(arr, i) || _nonIterableRest();
        }
        function _nonIterableRest() {
          throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
        function _unsupportedIterableToArray$2(o, minLen) {
          if (!o) return;
          if (typeof o === "string") return _arrayLikeToArray$2(o, minLen);
          var n = Object.prototype.toString.call(o).slice(8, -1);
          if (n === "Object" && o.constructor) n = o.constructor.name;
          if (n === "Map" || n === "Set") return Array.from(o);
          if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$2(o, minLen);
        }
        function _arrayLikeToArray$2(arr, len) {
          if (len == null || len > arr.length) len = arr.length;
          for (var i = 0, arr2 = new Array(len); i < len; i++) {
            arr2[i] = arr[i];
          }
          return arr2;
        }
        function _iterableToArrayLimit(arr, i) {
          if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
          var _arr = [];
          var _n = true;
          var _d = false;
          var _e = undefined;
          try {
            for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
              _arr.push(_s.value);
              if (i && _arr.length === i) break;
            }
          } catch (err) {
            _d = true;
            _e = err;
          } finally {
            try {
              if (!_n && _i["return"] != null) _i["return"]();
            } finally {
              if (_d) throw _e;
            }
          }
          return _arr;
        }
        function _arrayWithHoles(arr) {
          if (Array.isArray(arr)) return arr;
        }
        var MATCH_START_QUERY = /[?&#](?:start|t)=([0-9hms]+)/;
        var MATCH_END_QUERY = /[?&#]end=([0-9hms]+)/;
        var MATCH_START_STAMP = /(\d+)(h|m|s)/g;
        var MATCH_NUMERIC = /^\d+$/; // Parse YouTube URL for a start time param, ie ?t=1h14m30s
        // and return the start time in seconds

        function parseTimeParam(url, pattern) {
          if (url instanceof Array) {
            return undefined;
          }
          var match = url.match(pattern);
          if (match) {
            var stamp = match[1];
            if (stamp.match(MATCH_START_STAMP)) {
              return parseTimeString(stamp);
            }
            if (MATCH_NUMERIC.test(stamp)) {
              return parseInt(stamp);
            }
          }
          return undefined;
        }
        function parseTimeString(stamp) {
          var seconds = 0;
          var array = MATCH_START_STAMP.exec(stamp);
          while (array !== null) {
            var _array = array,
              _array2 = _slicedToArray(_array, 3),
              count = _array2[1],
              period = _array2[2];
            if (period === 'h') seconds += parseInt(count, 10) * 60 * 60;
            if (period === 'm') seconds += parseInt(count, 10) * 60;
            if (period === 's') seconds += parseInt(count, 10);
            array = MATCH_START_STAMP.exec(stamp);
          }
          return seconds;
        }
        function parseStartTime(url) {
          return parseTimeParam(url, MATCH_START_QUERY);
        }
        function parseEndTime(url) {
          return parseTimeParam(url, MATCH_END_QUERY);
        } // http://stackoverflow.com/a/38622545

        function randomString() {
          return Math.random().toString(36).substr(2, 5);
        }
        function queryString(object) {
          return Object.keys(object).map(function (key) {
            return "".concat(key, "=").concat(object[key]);
          }).join('&');
        }
        function getGlobal(key) {
          if (window[key]) {
            return window[key];
          }
          if (window.exports && window.exports[key]) {
            return window.exports[key];
          }
          if (window.module && window.module.exports && window.module.exports[key]) {
            return window.module.exports[key];
          }
          return null;
        } // Util function to load an external SDK
        // or return the SDK if it is already loaded

        var requests = {};
        function getSDK(url, sdkGlobal) {
          var sdkReady = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
          var isLoaded = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : function () {
            return true;
          };
          var fetchScript = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : _loadScript["default"];
          var existingGlobal = getGlobal(sdkGlobal);
          if (existingGlobal && isLoaded(existingGlobal)) {
            return Promise.resolve(existingGlobal);
          }
          return new Promise(function (resolve, reject) {
            // If we are already loading the SDK, add the resolve and reject
            // functions to the existing array of requests
            if (requests[url]) {
              requests[url].push({
                resolve: resolve,
                reject: reject
              });
              return;
            }
            requests[url] = [{
              resolve: resolve,
              reject: reject
            }];
            var onLoaded = function onLoaded(sdk) {
              // When loaded, resolve all pending request promises
              requests[url].forEach(function (request) {
                return request.resolve(sdk);
              });
            };
            if (sdkReady) {
              var previousOnReady = window[sdkReady];
              window[sdkReady] = function () {
                if (previousOnReady) previousOnReady();
                onLoaded(getGlobal(sdkGlobal));
              };
            }
            fetchScript(url, function (err) {
              if (err) {
                // Loading the SDK failed – reject all requests and
                // reset the array of requests for this SDK
                requests[url].forEach(function (request) {
                  return request.reject(err);
                });
                requests[url] = null;
              } else if (!sdkReady) {
                onLoaded(getGlobal(sdkGlobal));
              }
            });
          });
        }
        function getConfig(props, defaultProps) {
          return (0, _deepmerge$1["default"])(defaultProps.config, props.config);
        }
        function omit(object) {
          var _ref;
          for (var _len = arguments.length, arrays = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            arrays[_key - 1] = arguments[_key];
          }
          var omitKeys = (_ref = []).concat.apply(_ref, arrays);
          var output = {};
          var keys = Object.keys(object);
          for (var _i2 = 0, _keys = keys; _i2 < _keys.length; _i2++) {
            var key = _keys[_i2];
            if (omitKeys.indexOf(key) === -1) {
              output[key] = object[key];
            }
          }
          return output;
        }
        function callPlayer(method) {
          var _this$player;

          // Util method for calling a method on this.player
          // but guard against errors and console.warn instead
          if (!this.player || !this.player[method]) {
            var message = "ReactPlayer: ".concat(this.constructor.displayName, " player could not call %c").concat(method, "%c \u2013 ");
            if (!this.player) {
              message += 'The player was not available';
            } else if (!this.player[method]) {
              message += 'The method was not available';
            }
            console.warn(message, 'font-weight: bold', '');
            return null;
          }
          for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
            args[_key2 - 1] = arguments[_key2];
          }
          return (_this$player = this.player)[method].apply(_this$player, args);
        }
        function isMediaStream(url) {
          return typeof window !== 'undefined' && typeof window.MediaStream !== 'undefined' && url instanceof window.MediaStream;
        }
        function isBlobUrl(url) {
          return /^blob:/.test(url);
        }
        function supportsWebKitPresentationMode() {
          var video = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document.createElement('video');
          // Check if Safari supports PiP, and is not on mobile (other than iPad)
          // iPhone safari appears to "support" PiP through the check, however PiP does not function
          var notMobile = /iPhone|iPod/.test(navigator.userAgent) === false;
          return video.webkitSupportsPresentationMode && typeof video.webkitSetPresentationMode === 'function' && notMobile;
        }
        var patterns = {};
        Object.defineProperty(patterns, "__esModule", {
          value: true
        });
        patterns.canPlay = patterns.FLV_EXTENSIONS = patterns.DASH_EXTENSIONS = patterns.HLS_EXTENSIONS = patterns.VIDEO_EXTENSIONS = patterns.AUDIO_EXTENSIONS = patterns.MATCH_URL_KALTURA = patterns.MATCH_URL_VIDYARD = patterns.MATCH_URL_MIXCLOUD = patterns.MATCH_URL_DAILYMOTION = patterns.MATCH_URL_TWITCH_CHANNEL = patterns.MATCH_URL_TWITCH_VIDEO = patterns.MATCH_URL_WISTIA = patterns.MATCH_URL_STREAMABLE = patterns.MATCH_URL_FACEBOOK_WATCH = patterns.MATCH_URL_FACEBOOK = patterns.MATCH_URL_VIMEO = patterns.MATCH_URL_SOUNDCLOUD = patterns.MATCH_URL_YOUTUBE = void 0;
        var _utils$1 = utils;
        function _createForOfIteratorHelper(o, allowArrayLike) {
          var it;
          if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
            if (Array.isArray(o) || (it = _unsupportedIterableToArray$1(o)) || allowArrayLike && o && typeof o.length === "number") {
              if (it) o = it;
              var i = 0;
              var F = function F() {};
              return {
                s: F,
                n: function n() {
                  if (i >= o.length) return {
                    done: true
                  };
                  return {
                    done: false,
                    value: o[i++]
                  };
                },
                e: function e(_e) {
                  throw _e;
                },
                f: F
              };
            }
            throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
          }
          var normalCompletion = true,
            didErr = false,
            err;
          return {
            s: function s() {
              it = o[Symbol.iterator]();
            },
            n: function n() {
              var step = it.next();
              normalCompletion = step.done;
              return step;
            },
            e: function e(_e2) {
              didErr = true;
              err = _e2;
            },
            f: function f() {
              try {
                if (!normalCompletion && it["return"] != null) it["return"]();
              } finally {
                if (didErr) throw err;
              }
            }
          };
        }
        function _unsupportedIterableToArray$1(o, minLen) {
          if (!o) return;
          if (typeof o === "string") return _arrayLikeToArray$1(o, minLen);
          var n = Object.prototype.toString.call(o).slice(8, -1);
          if (n === "Object" && o.constructor) n = o.constructor.name;
          if (n === "Map" || n === "Set") return Array.from(o);
          if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$1(o, minLen);
        }
        function _arrayLikeToArray$1(arr, len) {
          if (len == null || len > arr.length) len = arr.length;
          for (var i = 0, arr2 = new Array(len); i < len; i++) {
            arr2[i] = arr[i];
          }
          return arr2;
        }
        var MATCH_URL_YOUTUBE = /(?:youtu\.be\/|youtube(?:-nocookie)?\.com\/(?:embed\/|v\/|watch\/|watch\?v=|watch\?.+&v=|shorts\/|live\/))((\w|-){11})|youtube\.com\/playlist\?list=|youtube\.com\/user\//;
        patterns.MATCH_URL_YOUTUBE = MATCH_URL_YOUTUBE;
        var MATCH_URL_SOUNDCLOUD = /(?:soundcloud\.com|snd\.sc)\/[^.]+$/;
        patterns.MATCH_URL_SOUNDCLOUD = MATCH_URL_SOUNDCLOUD;
        var MATCH_URL_VIMEO = /vimeo\.com\/(?!progressive_redirect).+/;
        patterns.MATCH_URL_VIMEO = MATCH_URL_VIMEO;
        var MATCH_URL_FACEBOOK = /^https?:\/\/(www\.)?facebook\.com.*\/(video(s)?|watch|story)(\.php?|\/).+$/;
        patterns.MATCH_URL_FACEBOOK = MATCH_URL_FACEBOOK;
        var MATCH_URL_FACEBOOK_WATCH = /^https?:\/\/fb\.watch\/.+$/;
        patterns.MATCH_URL_FACEBOOK_WATCH = MATCH_URL_FACEBOOK_WATCH;
        var MATCH_URL_STREAMABLE = /streamable\.com\/([a-z0-9]+)$/;
        patterns.MATCH_URL_STREAMABLE = MATCH_URL_STREAMABLE;
        var MATCH_URL_WISTIA = /(?:wistia\.(?:com|net)|wi\.st)\/(?:medias|embed)\/(?:iframe\/)?(.*)$/;
        patterns.MATCH_URL_WISTIA = MATCH_URL_WISTIA;
        var MATCH_URL_TWITCH_VIDEO = /(?:www\.|go\.)?twitch\.tv\/videos\/(\d+)($|\?)/;
        patterns.MATCH_URL_TWITCH_VIDEO = MATCH_URL_TWITCH_VIDEO;
        var MATCH_URL_TWITCH_CHANNEL = /(?:www\.|go\.)?twitch\.tv\/([a-zA-Z0-9_]+)($|\?)/;
        patterns.MATCH_URL_TWITCH_CHANNEL = MATCH_URL_TWITCH_CHANNEL;
        var MATCH_URL_DAILYMOTION = /^(?:(?:https?):)?(?:\/\/)?(?:www\.)?(?:(?:dailymotion\.com(?:\/embed)?\/video)|dai\.ly)\/([a-zA-Z0-9]+)(?:_[\w_-]+)?(?:[\w.#_-]+)?/;
        patterns.MATCH_URL_DAILYMOTION = MATCH_URL_DAILYMOTION;
        var MATCH_URL_MIXCLOUD = /mixcloud\.com\/([^/]+\/[^/]+)/;
        patterns.MATCH_URL_MIXCLOUD = MATCH_URL_MIXCLOUD;
        var MATCH_URL_VIDYARD = /vidyard.com\/(?:watch\/)?([a-zA-Z0-9-_]+)/;
        patterns.MATCH_URL_VIDYARD = MATCH_URL_VIDYARD;
        var MATCH_URL_KALTURA = /^https?:\/\/[a-zA-Z]+\.kaltura.(com|org)\/p\/([0-9]+)\/sp\/([0-9]+)00\/embedIframeJs\/uiconf_id\/([0-9]+)\/partner_id\/([0-9]+)(.*)entry_id.([a-zA-Z0-9-_].*)$/;
        patterns.MATCH_URL_KALTURA = MATCH_URL_KALTURA;
        var AUDIO_EXTENSIONS = /\.(m4a|m4b|mp4a|mpga|mp2|mp2a|mp3|m2a|m3a|wav|weba|aac|oga|spx)($|\?)/i;
        patterns.AUDIO_EXTENSIONS = AUDIO_EXTENSIONS;
        var VIDEO_EXTENSIONS = /\.(mp4|og[gv]|webm|mov|m4v)(#t=[,\d+]+)?($|\?)/i;
        patterns.VIDEO_EXTENSIONS = VIDEO_EXTENSIONS;
        var HLS_EXTENSIONS = /\.(m3u8)($|\?)/i;
        patterns.HLS_EXTENSIONS = HLS_EXTENSIONS;
        var DASH_EXTENSIONS = /\.(mpd)($|\?)/i;
        patterns.DASH_EXTENSIONS = DASH_EXTENSIONS;
        var FLV_EXTENSIONS = /\.(flv)($|\?)/i;
        patterns.FLV_EXTENSIONS = FLV_EXTENSIONS;
        var canPlayFile = function canPlayFile(url) {
          if (url instanceof Array) {
            var _iterator = _createForOfIteratorHelper(url),
              _step;
            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var item = _step.value;
                if (typeof item === 'string' && canPlayFile(item)) {
                  return true;
                }
                if (canPlayFile(item.src)) {
                  return true;
                }
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }
            return false;
          }
          if ((0, _utils$1.isMediaStream)(url) || (0, _utils$1.isBlobUrl)(url)) {
            return true;
          }
          return AUDIO_EXTENSIONS.test(url) || VIDEO_EXTENSIONS.test(url) || HLS_EXTENSIONS.test(url) || DASH_EXTENSIONS.test(url) || FLV_EXTENSIONS.test(url);
        };
        var canPlay = {
          youtube: function youtube(url) {
            if (url instanceof Array) {
              return url.every(function (item) {
                return MATCH_URL_YOUTUBE.test(item);
              });
            }
            return MATCH_URL_YOUTUBE.test(url);
          },
          soundcloud: function soundcloud(url) {
            return MATCH_URL_SOUNDCLOUD.test(url) && !AUDIO_EXTENSIONS.test(url);
          },
          vimeo: function vimeo(url) {
            return MATCH_URL_VIMEO.test(url) && !VIDEO_EXTENSIONS.test(url) && !HLS_EXTENSIONS.test(url);
          },
          facebook: function facebook(url) {
            return MATCH_URL_FACEBOOK.test(url) || MATCH_URL_FACEBOOK_WATCH.test(url);
          },
          streamable: function streamable(url) {
            return MATCH_URL_STREAMABLE.test(url);
          },
          wistia: function wistia(url) {
            return MATCH_URL_WISTIA.test(url);
          },
          twitch: function twitch(url) {
            return MATCH_URL_TWITCH_VIDEO.test(url) || MATCH_URL_TWITCH_CHANNEL.test(url);
          },
          dailymotion: function dailymotion(url) {
            return MATCH_URL_DAILYMOTION.test(url);
          },
          mixcloud: function mixcloud(url) {
            return MATCH_URL_MIXCLOUD.test(url);
          },
          vidyard: function vidyard(url) {
            return MATCH_URL_VIDYARD.test(url);
          },
          kaltura: function kaltura(url) {
            return MATCH_URL_KALTURA.test(url);
          },
          file: canPlayFile
        };
        patterns.canPlay = canPlay;
        var YouTube = {};
        var hasRequiredYouTube;
        function requireYouTube() {
          if (hasRequiredYouTube) return YouTube;
          hasRequiredYouTube = 1;
          (function (exports) {
            function _typeof(obj) {
              "@babel/helpers - typeof";

              if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
                _typeof = function _typeof(obj) {
                  return typeof obj;
                };
              } else {
                _typeof = function _typeof(obj) {
                  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
                };
              }
              return _typeof(obj);
            }
            Object.defineProperty(exports, "__esModule", {
              value: true
            });
            exports["default"] = void 0;
            var _react = _interopRequireWildcard(reactExports);
            var _utils = utils;
            var _patterns = patterns;
            function _getRequireWildcardCache() {
              if (typeof WeakMap !== "function") return null;
              var cache = new WeakMap();
              _getRequireWildcardCache = function _getRequireWildcardCache() {
                return cache;
              };
              return cache;
            }
            function _interopRequireWildcard(obj) {
              if (obj && obj.__esModule) {
                return obj;
              }
              if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
                return {
                  "default": obj
                };
              }
              var cache = _getRequireWildcardCache();
              if (cache && cache.has(obj)) {
                return cache.get(obj);
              }
              var newObj = {};
              var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
              for (var key in obj) {
                if (Object.prototype.hasOwnProperty.call(obj, key)) {
                  var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
                  if (desc && (desc.get || desc.set)) {
                    Object.defineProperty(newObj, key, desc);
                  } else {
                    newObj[key] = obj[key];
                  }
                }
              }
              newObj["default"] = obj;
              if (cache) {
                cache.set(obj, newObj);
              }
              return newObj;
            }
            function ownKeys(object, enumerableOnly) {
              var keys = Object.keys(object);
              if (Object.getOwnPropertySymbols) {
                var symbols = Object.getOwnPropertySymbols(object);
                if (enumerableOnly) symbols = symbols.filter(function (sym) {
                  return Object.getOwnPropertyDescriptor(object, sym).enumerable;
                });
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
            function _slicedToArray(arr, i) {
              return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
            }
            function _nonIterableRest() {
              throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
            }
            function _unsupportedIterableToArray(o, minLen) {
              if (!o) return;
              if (typeof o === "string") return _arrayLikeToArray(o, minLen);
              var n = Object.prototype.toString.call(o).slice(8, -1);
              if (n === "Object" && o.constructor) n = o.constructor.name;
              if (n === "Map" || n === "Set") return Array.from(o);
              if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
            }
            function _arrayLikeToArray(arr, len) {
              if (len == null || len > arr.length) len = arr.length;
              for (var i = 0, arr2 = new Array(len); i < len; i++) {
                arr2[i] = arr[i];
              }
              return arr2;
            }
            function _iterableToArrayLimit(arr, i) {
              if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
              var _arr = [];
              var _n = true;
              var _d = false;
              var _e = undefined;
              try {
                for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
                  _arr.push(_s.value);
                  if (i && _arr.length === i) break;
                }
              } catch (err) {
                _d = true;
                _e = err;
              } finally {
                try {
                  if (!_n && _i["return"] != null) _i["return"]();
                } finally {
                  if (_d) throw _e;
                }
              }
              return _arr;
            }
            function _arrayWithHoles(arr) {
              if (Array.isArray(arr)) return arr;
            }
            function _classCallCheck(instance, Constructor) {
              if (!(instance instanceof Constructor)) {
                throw new TypeError("Cannot call a class as a function");
              }
            }
            function _defineProperties(target, props) {
              for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor) descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
              }
            }
            function _createClass(Constructor, protoProps, staticProps) {
              if (protoProps) _defineProperties(Constructor.prototype, protoProps);
              if (staticProps) _defineProperties(Constructor, staticProps);
              return Constructor;
            }
            function _inherits(subClass, superClass) {
              if (typeof superClass !== "function" && superClass !== null) {
                throw new TypeError("Super expression must either be null or a function");
              }
              subClass.prototype = Object.create(superClass && superClass.prototype, {
                constructor: {
                  value: subClass,
                  writable: true,
                  configurable: true
                }
              });
              if (superClass) _setPrototypeOf(subClass, superClass);
            }
            function _setPrototypeOf(o, p) {
              _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
                o.__proto__ = p;
                return o;
              };
              return _setPrototypeOf(o, p);
            }
            function _createSuper(Derived) {
              var hasNativeReflectConstruct = _isNativeReflectConstruct();
              return function _createSuperInternal() {
                var Super = _getPrototypeOf(Derived),
                  result;
                if (hasNativeReflectConstruct) {
                  var NewTarget = _getPrototypeOf(this).constructor;
                  result = Reflect.construct(Super, arguments, NewTarget);
                } else {
                  result = Super.apply(this, arguments);
                }
                return _possibleConstructorReturn(this, result);
              };
            }
            function _possibleConstructorReturn(self, call) {
              if (call && (_typeof(call) === "object" || typeof call === "function")) {
                return call;
              }
              return _assertThisInitialized(self);
            }
            function _assertThisInitialized(self) {
              if (self === void 0) {
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
              }
              return self;
            }
            function _isNativeReflectConstruct() {
              if (typeof Reflect === "undefined" || !Reflect.construct) return false;
              if (Reflect.construct.sham) return false;
              if (typeof Proxy === "function") return true;
              try {
                Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
                return true;
              } catch (e) {
                return false;
              }
            }
            function _getPrototypeOf(o) {
              _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
                return o.__proto__ || Object.getPrototypeOf(o);
              };
              return _getPrototypeOf(o);
            }
            function _defineProperty(obj, key, value) {
              if (key in obj) {
                Object.defineProperty(obj, key, {
                  value: value,
                  enumerable: true,
                  configurable: true,
                  writable: true
                });
              } else {
                obj[key] = value;
              }
              return obj;
            }
            var SDK_URL = 'https://www.youtube.com/iframe_api';
            var SDK_GLOBAL = 'YT';
            var SDK_GLOBAL_READY = 'onYouTubeIframeAPIReady';
            var MATCH_PLAYLIST = /[?&](?:list|channel)=([a-zA-Z0-9_-]+)/;
            var MATCH_USER_UPLOADS = /user\/([a-zA-Z0-9_-]+)\/?/;
            var MATCH_NOCOOKIE = /youtube-nocookie\.com/;
            var NOCOOKIE_HOST = 'https://www.youtube-nocookie.com';
            var YouTube = /*#__PURE__*/function (_Component) {
              _inherits(YouTube, _Component);
              var _super = _createSuper(YouTube);
              function YouTube() {
                var _this;
                _classCallCheck(this, YouTube);
                for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                  args[_key] = arguments[_key];
                }
                _this = _super.call.apply(_super, [this].concat(args));
                _defineProperty(_assertThisInitialized(_this), "callPlayer", _utils.callPlayer);
                _defineProperty(_assertThisInitialized(_this), "parsePlaylist", function (url) {
                  if (url instanceof Array) {
                    return {
                      listType: 'playlist',
                      playlist: url.map(_this.getID).join(',')
                    };
                  }
                  if (MATCH_PLAYLIST.test(url)) {
                    var _url$match = url.match(MATCH_PLAYLIST),
                      _url$match2 = _slicedToArray(_url$match, 2),
                      playlistId = _url$match2[1];
                    return {
                      listType: 'playlist',
                      list: playlistId.replace(/^UC/, 'UU')
                    };
                  }
                  if (MATCH_USER_UPLOADS.test(url)) {
                    var _url$match3 = url.match(MATCH_USER_UPLOADS),
                      _url$match4 = _slicedToArray(_url$match3, 2),
                      username = _url$match4[1];
                    return {
                      listType: 'user_uploads',
                      list: username
                    };
                  }
                  return {};
                });
                _defineProperty(_assertThisInitialized(_this), "onStateChange", function (event) {
                  var data = event.data;
                  var _this$props = _this.props,
                    onPlay = _this$props.onPlay,
                    onPause = _this$props.onPause,
                    onBuffer = _this$props.onBuffer,
                    onBufferEnd = _this$props.onBufferEnd,
                    onEnded = _this$props.onEnded,
                    onReady = _this$props.onReady,
                    loop = _this$props.loop,
                    _this$props$config = _this$props.config,
                    playerVars = _this$props$config.playerVars,
                    onUnstarted = _this$props$config.onUnstarted;
                  var _window$SDK_GLOBAL$Pl = window[SDK_GLOBAL].PlayerState,
                    UNSTARTED = _window$SDK_GLOBAL$Pl.UNSTARTED,
                    PLAYING = _window$SDK_GLOBAL$Pl.PLAYING,
                    PAUSED = _window$SDK_GLOBAL$Pl.PAUSED,
                    BUFFERING = _window$SDK_GLOBAL$Pl.BUFFERING,
                    ENDED = _window$SDK_GLOBAL$Pl.ENDED,
                    CUED = _window$SDK_GLOBAL$Pl.CUED;
                  if (data === UNSTARTED) onUnstarted();
                  if (data === PLAYING) {
                    onPlay();
                    onBufferEnd();
                  }
                  if (data === PAUSED) onPause();
                  if (data === BUFFERING) onBuffer();
                  if (data === ENDED) {
                    var isPlaylist = !!_this.callPlayer('getPlaylist'); // Only loop manually if not playing a playlist

                    if (loop && !isPlaylist) {
                      if (playerVars.start) {
                        _this.seekTo(playerVars.start);
                      } else {
                        _this.play();
                      }
                    }
                    onEnded();
                  }
                  if (data === CUED) onReady();
                });
                _defineProperty(_assertThisInitialized(_this), "mute", function () {
                  _this.callPlayer('mute');
                });
                _defineProperty(_assertThisInitialized(_this), "unmute", function () {
                  _this.callPlayer('unMute');
                });
                _defineProperty(_assertThisInitialized(_this), "ref", function (container) {
                  _this.container = container;
                });
                return _this;
              }
              _createClass(YouTube, [{
                key: "componentDidMount",
                value: function componentDidMount() {
                  this.props.onMount && this.props.onMount(this);
                }
              }, {
                key: "getID",
                value: function getID(url) {
                  if (!url || url instanceof Array || MATCH_PLAYLIST.test(url)) {
                    return null;
                  }
                  return url.match(_patterns.MATCH_URL_YOUTUBE)[1];
                }
              }, {
                key: "load",
                value: function load(url, isReady) {
                  var _this2 = this;
                  var _this$props2 = this.props,
                    playing = _this$props2.playing,
                    muted = _this$props2.muted,
                    playsinline = _this$props2.playsinline,
                    controls = _this$props2.controls,
                    loop = _this$props2.loop,
                    config = _this$props2.config,
                    _onError = _this$props2.onError;
                  var playerVars = config.playerVars,
                    embedOptions = config.embedOptions;
                  var id = this.getID(url);
                  if (isReady) {
                    if (MATCH_PLAYLIST.test(url) || MATCH_USER_UPLOADS.test(url) || url instanceof Array) {
                      this.player.loadPlaylist(this.parsePlaylist(url));
                      return;
                    }
                    this.player.cueVideoById({
                      videoId: id,
                      startSeconds: (0, _utils.parseStartTime)(url) || playerVars.start,
                      endSeconds: (0, _utils.parseEndTime)(url) || playerVars.end
                    });
                    return;
                  }
                  (0, _utils.getSDK)(SDK_URL, SDK_GLOBAL, SDK_GLOBAL_READY, function (YT) {
                    return YT.loaded;
                  }).then(function (YT) {
                    if (!_this2.container) return;
                    _this2.player = new YT.Player(_this2.container, _objectSpread({
                      width: '100%',
                      height: '100%',
                      videoId: id,
                      playerVars: _objectSpread(_objectSpread({
                        autoplay: playing ? 1 : 0,
                        mute: muted ? 1 : 0,
                        controls: controls ? 1 : 0,
                        start: (0, _utils.parseStartTime)(url),
                        end: (0, _utils.parseEndTime)(url),
                        origin: window.location.origin,
                        playsinline: playsinline ? 1 : 0
                      }, _this2.parsePlaylist(url)), playerVars),
                      events: {
                        onReady: function onReady() {
                          if (loop) {
                            _this2.player.setLoop(true); // Enable playlist looping
                          }

                          _this2.props.onReady();
                        },
                        onPlaybackRateChange: function onPlaybackRateChange(event) {
                          return _this2.props.onPlaybackRateChange(event.data);
                        },
                        onStateChange: _this2.onStateChange,
                        onError: function onError(event) {
                          return _onError(event.data);
                        }
                      },
                      host: MATCH_NOCOOKIE.test(url) ? NOCOOKIE_HOST : undefined
                    }, embedOptions));
                  }, _onError);
                  if (embedOptions.events) {
                    console.warn('Using `embedOptions.events` will likely break things. Use ReactPlayer’s callback props instead, eg onReady, onPlay, onPause');
                  }
                }
              }, {
                key: "play",
                value: function play() {
                  this.callPlayer('playVideo');
                }
              }, {
                key: "pause",
                value: function pause() {
                  this.callPlayer('pauseVideo');
                }
              }, {
                key: "stop",
                value: function stop() {
                  if (!document.body.contains(this.callPlayer('getIframe'))) return;
                  this.callPlayer('stopVideo');
                }
              }, {
                key: "seekTo",
                value: function seekTo(amount) {
                  this.callPlayer('seekTo', amount);
                  if (!this.props.playing) {
                    this.pause();
                  }
                }
              }, {
                key: "setVolume",
                value: function setVolume(fraction) {
                  this.callPlayer('setVolume', fraction * 100);
                }
              }, {
                key: "setPlaybackRate",
                value: function setPlaybackRate(rate) {
                  this.callPlayer('setPlaybackRate', rate);
                }
              }, {
                key: "setLoop",
                value: function setLoop(loop) {
                  this.callPlayer('setLoop', loop);
                }
              }, {
                key: "getDuration",
                value: function getDuration() {
                  return this.callPlayer('getDuration');
                }
              }, {
                key: "getCurrentTime",
                value: function getCurrentTime() {
                  return this.callPlayer('getCurrentTime');
                }
              }, {
                key: "getSecondsLoaded",
                value: function getSecondsLoaded() {
                  return this.callPlayer('getVideoLoadedFraction') * this.getDuration();
                }
              }, {
                key: "render",
                value: function render() {
                  var display = this.props.display;
                  var style = {
                    width: '100%',
                    height: '100%',
                    display: display
                  };
                  return /*#__PURE__*/_react["default"].createElement("div", {
                    style: style
                  }, /*#__PURE__*/_react["default"].createElement("div", {
                    ref: this.ref
                  }));
                }
              }]);
              return YouTube;
            }(_react.Component);
            exports["default"] = YouTube;
            _defineProperty(YouTube, "displayName", 'YouTube');
            _defineProperty(YouTube, "canPlay", _patterns.canPlay.youtube);
          })(YouTube);
          return YouTube;
        }
        var SoundCloud = {};
        var hasRequiredSoundCloud;
        function requireSoundCloud() {
          if (hasRequiredSoundCloud) return SoundCloud;
          hasRequiredSoundCloud = 1;
          (function (exports) {
            function _typeof(obj) {
              "@babel/helpers - typeof";

              if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
                _typeof = function _typeof(obj) {
                  return typeof obj;
                };
              } else {
                _typeof = function _typeof(obj) {
                  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
                };
              }
              return _typeof(obj);
            }
            Object.defineProperty(exports, "__esModule", {
              value: true
            });
            exports["default"] = void 0;
            var _react = _interopRequireWildcard(reactExports);
            var _utils = utils;
            var _patterns = patterns;
            function _getRequireWildcardCache() {
              if (typeof WeakMap !== "function") return null;
              var cache = new WeakMap();
              _getRequireWildcardCache = function _getRequireWildcardCache() {
                return cache;
              };
              return cache;
            }
            function _interopRequireWildcard(obj) {
              if (obj && obj.__esModule) {
                return obj;
              }
              if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
                return {
                  "default": obj
                };
              }
              var cache = _getRequireWildcardCache();
              if (cache && cache.has(obj)) {
                return cache.get(obj);
              }
              var newObj = {};
              var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
              for (var key in obj) {
                if (Object.prototype.hasOwnProperty.call(obj, key)) {
                  var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
                  if (desc && (desc.get || desc.set)) {
                    Object.defineProperty(newObj, key, desc);
                  } else {
                    newObj[key] = obj[key];
                  }
                }
              }
              newObj["default"] = obj;
              if (cache) {
                cache.set(obj, newObj);
              }
              return newObj;
            }
            function ownKeys(object, enumerableOnly) {
              var keys = Object.keys(object);
              if (Object.getOwnPropertySymbols) {
                var symbols = Object.getOwnPropertySymbols(object);
                if (enumerableOnly) symbols = symbols.filter(function (sym) {
                  return Object.getOwnPropertyDescriptor(object, sym).enumerable;
                });
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
            function _classCallCheck(instance, Constructor) {
              if (!(instance instanceof Constructor)) {
                throw new TypeError("Cannot call a class as a function");
              }
            }
            function _defineProperties(target, props) {
              for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor) descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
              }
            }
            function _createClass(Constructor, protoProps, staticProps) {
              if (protoProps) _defineProperties(Constructor.prototype, protoProps);
              if (staticProps) _defineProperties(Constructor, staticProps);
              return Constructor;
            }
            function _inherits(subClass, superClass) {
              if (typeof superClass !== "function" && superClass !== null) {
                throw new TypeError("Super expression must either be null or a function");
              }
              subClass.prototype = Object.create(superClass && superClass.prototype, {
                constructor: {
                  value: subClass,
                  writable: true,
                  configurable: true
                }
              });
              if (superClass) _setPrototypeOf(subClass, superClass);
            }
            function _setPrototypeOf(o, p) {
              _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
                o.__proto__ = p;
                return o;
              };
              return _setPrototypeOf(o, p);
            }
            function _createSuper(Derived) {
              var hasNativeReflectConstruct = _isNativeReflectConstruct();
              return function _createSuperInternal() {
                var Super = _getPrototypeOf(Derived),
                  result;
                if (hasNativeReflectConstruct) {
                  var NewTarget = _getPrototypeOf(this).constructor;
                  result = Reflect.construct(Super, arguments, NewTarget);
                } else {
                  result = Super.apply(this, arguments);
                }
                return _possibleConstructorReturn(this, result);
              };
            }
            function _possibleConstructorReturn(self, call) {
              if (call && (_typeof(call) === "object" || typeof call === "function")) {
                return call;
              }
              return _assertThisInitialized(self);
            }
            function _assertThisInitialized(self) {
              if (self === void 0) {
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
              }
              return self;
            }
            function _isNativeReflectConstruct() {
              if (typeof Reflect === "undefined" || !Reflect.construct) return false;
              if (Reflect.construct.sham) return false;
              if (typeof Proxy === "function") return true;
              try {
                Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
                return true;
              } catch (e) {
                return false;
              }
            }
            function _getPrototypeOf(o) {
              _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
                return o.__proto__ || Object.getPrototypeOf(o);
              };
              return _getPrototypeOf(o);
            }
            function _defineProperty(obj, key, value) {
              if (key in obj) {
                Object.defineProperty(obj, key, {
                  value: value,
                  enumerable: true,
                  configurable: true,
                  writable: true
                });
              } else {
                obj[key] = value;
              }
              return obj;
            }
            var SDK_URL = 'https://w.soundcloud.com/player/api.js';
            var SDK_GLOBAL = 'SC';
            var SoundCloud = /*#__PURE__*/function (_Component) {
              _inherits(SoundCloud, _Component);
              var _super = _createSuper(SoundCloud);
              function SoundCloud() {
                var _this;
                _classCallCheck(this, SoundCloud);
                for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                  args[_key] = arguments[_key];
                }
                _this = _super.call.apply(_super, [this].concat(args));
                _defineProperty(_assertThisInitialized(_this), "callPlayer", _utils.callPlayer);
                _defineProperty(_assertThisInitialized(_this), "duration", null);
                _defineProperty(_assertThisInitialized(_this), "currentTime", null);
                _defineProperty(_assertThisInitialized(_this), "fractionLoaded", null);
                _defineProperty(_assertThisInitialized(_this), "mute", function () {
                  _this.setVolume(0);
                });
                _defineProperty(_assertThisInitialized(_this), "unmute", function () {
                  if (_this.props.volume !== null) {
                    _this.setVolume(_this.props.volume);
                  }
                });
                _defineProperty(_assertThisInitialized(_this), "ref", function (iframe) {
                  _this.iframe = iframe;
                });
                return _this;
              }
              _createClass(SoundCloud, [{
                key: "componentDidMount",
                value: function componentDidMount() {
                  this.props.onMount && this.props.onMount(this);
                }
              }, {
                key: "load",
                value: function load(url, isReady) {
                  var _this2 = this;
                  (0, _utils.getSDK)(SDK_URL, SDK_GLOBAL).then(function (SC) {
                    if (!_this2.iframe) return;
                    var _SC$Widget$Events = SC.Widget.Events,
                      PLAY = _SC$Widget$Events.PLAY,
                      PLAY_PROGRESS = _SC$Widget$Events.PLAY_PROGRESS,
                      PAUSE = _SC$Widget$Events.PAUSE,
                      FINISH = _SC$Widget$Events.FINISH,
                      ERROR = _SC$Widget$Events.ERROR;
                    if (!isReady) {
                      _this2.player = SC.Widget(_this2.iframe);
                      _this2.player.bind(PLAY, _this2.props.onPlay);
                      _this2.player.bind(PAUSE, function () {
                        var remaining = _this2.duration - _this2.currentTime;
                        if (remaining < 0.05) {
                          // Prevent onPause firing right before onEnded
                          return;
                        }
                        _this2.props.onPause();
                      });
                      _this2.player.bind(PLAY_PROGRESS, function (e) {
                        _this2.currentTime = e.currentPosition / 1000;
                        _this2.fractionLoaded = e.loadedProgress;
                      });
                      _this2.player.bind(FINISH, function () {
                        return _this2.props.onEnded();
                      });
                      _this2.player.bind(ERROR, function (e) {
                        return _this2.props.onError(e);
                      });
                    }
                    _this2.player.load(url, _objectSpread(_objectSpread({}, _this2.props.config.options), {}, {
                      callback: function callback() {
                        _this2.player.getDuration(function (duration) {
                          _this2.duration = duration / 1000;
                          _this2.props.onReady();
                        });
                      }
                    }));
                  });
                }
              }, {
                key: "play",
                value: function play() {
                  this.callPlayer('play');
                }
              }, {
                key: "pause",
                value: function pause() {
                  this.callPlayer('pause');
                }
              }, {
                key: "stop",
                value: function stop() {// Nothing to do
                }
              }, {
                key: "seekTo",
                value: function seekTo(seconds) {
                  this.callPlayer('seekTo', seconds * 1000);
                }
              }, {
                key: "setVolume",
                value: function setVolume(fraction) {
                  this.callPlayer('setVolume', fraction * 100);
                }
              }, {
                key: "getDuration",
                value: function getDuration() {
                  return this.duration;
                }
              }, {
                key: "getCurrentTime",
                value: function getCurrentTime() {
                  return this.currentTime;
                }
              }, {
                key: "getSecondsLoaded",
                value: function getSecondsLoaded() {
                  return this.fractionLoaded * this.duration;
                }
              }, {
                key: "render",
                value: function render() {
                  var display = this.props.display;
                  var style = {
                    width: '100%',
                    height: '100%',
                    display: display
                  };
                  return /*#__PURE__*/_react["default"].createElement("iframe", {
                    ref: this.ref,
                    src: "https://w.soundcloud.com/player/?url=".concat(encodeURIComponent(this.props.url)),
                    style: style,
                    frameBorder: 0,
                    allow: "autoplay"
                  });
                }
              }]);
              return SoundCloud;
            }(_react.Component);
            exports["default"] = SoundCloud;
            _defineProperty(SoundCloud, "displayName", 'SoundCloud');
            _defineProperty(SoundCloud, "canPlay", _patterns.canPlay.soundcloud);
            _defineProperty(SoundCloud, "loopOnEnded", true);
          })(SoundCloud);
          return SoundCloud;
        }
        var Vimeo = {};
        var hasRequiredVimeo;
        function requireVimeo() {
          if (hasRequiredVimeo) return Vimeo;
          hasRequiredVimeo = 1;
          (function (exports) {
            function _typeof(obj) {
              "@babel/helpers - typeof";

              if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
                _typeof = function _typeof(obj) {
                  return typeof obj;
                };
              } else {
                _typeof = function _typeof(obj) {
                  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
                };
              }
              return _typeof(obj);
            }
            Object.defineProperty(exports, "__esModule", {
              value: true
            });
            exports["default"] = void 0;
            var _react = _interopRequireWildcard(reactExports);
            var _utils = utils;
            var _patterns = patterns;
            function _getRequireWildcardCache() {
              if (typeof WeakMap !== "function") return null;
              var cache = new WeakMap();
              _getRequireWildcardCache = function _getRequireWildcardCache() {
                return cache;
              };
              return cache;
            }
            function _interopRequireWildcard(obj) {
              if (obj && obj.__esModule) {
                return obj;
              }
              if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
                return {
                  "default": obj
                };
              }
              var cache = _getRequireWildcardCache();
              if (cache && cache.has(obj)) {
                return cache.get(obj);
              }
              var newObj = {};
              var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
              for (var key in obj) {
                if (Object.prototype.hasOwnProperty.call(obj, key)) {
                  var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
                  if (desc && (desc.get || desc.set)) {
                    Object.defineProperty(newObj, key, desc);
                  } else {
                    newObj[key] = obj[key];
                  }
                }
              }
              newObj["default"] = obj;
              if (cache) {
                cache.set(obj, newObj);
              }
              return newObj;
            }
            function ownKeys(object, enumerableOnly) {
              var keys = Object.keys(object);
              if (Object.getOwnPropertySymbols) {
                var symbols = Object.getOwnPropertySymbols(object);
                if (enumerableOnly) symbols = symbols.filter(function (sym) {
                  return Object.getOwnPropertyDescriptor(object, sym).enumerable;
                });
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
            function _classCallCheck(instance, Constructor) {
              if (!(instance instanceof Constructor)) {
                throw new TypeError("Cannot call a class as a function");
              }
            }
            function _defineProperties(target, props) {
              for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor) descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
              }
            }
            function _createClass(Constructor, protoProps, staticProps) {
              if (protoProps) _defineProperties(Constructor.prototype, protoProps);
              if (staticProps) _defineProperties(Constructor, staticProps);
              return Constructor;
            }
            function _inherits(subClass, superClass) {
              if (typeof superClass !== "function" && superClass !== null) {
                throw new TypeError("Super expression must either be null or a function");
              }
              subClass.prototype = Object.create(superClass && superClass.prototype, {
                constructor: {
                  value: subClass,
                  writable: true,
                  configurable: true
                }
              });
              if (superClass) _setPrototypeOf(subClass, superClass);
            }
            function _setPrototypeOf(o, p) {
              _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
                o.__proto__ = p;
                return o;
              };
              return _setPrototypeOf(o, p);
            }
            function _createSuper(Derived) {
              var hasNativeReflectConstruct = _isNativeReflectConstruct();
              return function _createSuperInternal() {
                var Super = _getPrototypeOf(Derived),
                  result;
                if (hasNativeReflectConstruct) {
                  var NewTarget = _getPrototypeOf(this).constructor;
                  result = Reflect.construct(Super, arguments, NewTarget);
                } else {
                  result = Super.apply(this, arguments);
                }
                return _possibleConstructorReturn(this, result);
              };
            }
            function _possibleConstructorReturn(self, call) {
              if (call && (_typeof(call) === "object" || typeof call === "function")) {
                return call;
              }
              return _assertThisInitialized(self);
            }
            function _assertThisInitialized(self) {
              if (self === void 0) {
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
              }
              return self;
            }
            function _isNativeReflectConstruct() {
              if (typeof Reflect === "undefined" || !Reflect.construct) return false;
              if (Reflect.construct.sham) return false;
              if (typeof Proxy === "function") return true;
              try {
                Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
                return true;
              } catch (e) {
                return false;
              }
            }
            function _getPrototypeOf(o) {
              _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
                return o.__proto__ || Object.getPrototypeOf(o);
              };
              return _getPrototypeOf(o);
            }
            function _defineProperty(obj, key, value) {
              if (key in obj) {
                Object.defineProperty(obj, key, {
                  value: value,
                  enumerable: true,
                  configurable: true,
                  writable: true
                });
              } else {
                obj[key] = value;
              }
              return obj;
            }
            var SDK_URL = 'https://player.vimeo.com/api/player.js';
            var SDK_GLOBAL = 'Vimeo';
            var Vimeo = /*#__PURE__*/function (_Component) {
              _inherits(Vimeo, _Component);
              var _super = _createSuper(Vimeo);
              function Vimeo() {
                var _this;
                _classCallCheck(this, Vimeo);
                for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                  args[_key] = arguments[_key];
                }
                _this = _super.call.apply(_super, [this].concat(args));
                _defineProperty(_assertThisInitialized(_this), "callPlayer", _utils.callPlayer);
                _defineProperty(_assertThisInitialized(_this), "duration", null);
                _defineProperty(_assertThisInitialized(_this), "currentTime", null);
                _defineProperty(_assertThisInitialized(_this), "secondsLoaded", null);
                _defineProperty(_assertThisInitialized(_this), "mute", function () {
                  _this.setMuted(true);
                });
                _defineProperty(_assertThisInitialized(_this), "unmute", function () {
                  _this.setMuted(false);
                });
                _defineProperty(_assertThisInitialized(_this), "ref", function (container) {
                  _this.container = container;
                });
                return _this;
              }
              _createClass(Vimeo, [{
                key: "componentDidMount",
                value: function componentDidMount() {
                  this.props.onMount && this.props.onMount(this);
                }
              }, {
                key: "load",
                value: function load(url) {
                  var _this2 = this;
                  this.duration = null;
                  (0, _utils.getSDK)(SDK_URL, SDK_GLOBAL).then(function (Vimeo) {
                    if (!_this2.container) return;
                    var _this2$props$config = _this2.props.config,
                      playerOptions = _this2$props$config.playerOptions,
                      title = _this2$props$config.title;
                    _this2.player = new Vimeo.Player(_this2.container, _objectSpread({
                      url: url,
                      autoplay: _this2.props.playing,
                      muted: _this2.props.muted,
                      loop: _this2.props.loop,
                      playsinline: _this2.props.playsinline,
                      controls: _this2.props.controls
                    }, playerOptions));
                    _this2.player.ready().then(function () {
                      var iframe = _this2.container.querySelector('iframe');
                      iframe.style.width = '100%';
                      iframe.style.height = '100%';
                      if (title) {
                        iframe.title = title;
                      }
                    })["catch"](_this2.props.onError);
                    _this2.player.on('loaded', function () {
                      _this2.props.onReady();
                      _this2.refreshDuration();
                    });
                    _this2.player.on('play', function () {
                      _this2.props.onPlay();
                      _this2.refreshDuration();
                    });
                    _this2.player.on('pause', _this2.props.onPause);
                    _this2.player.on('seeked', function (e) {
                      return _this2.props.onSeek(e.seconds);
                    });
                    _this2.player.on('ended', _this2.props.onEnded);
                    _this2.player.on('error', _this2.props.onError);
                    _this2.player.on('timeupdate', function (_ref) {
                      var seconds = _ref.seconds;
                      _this2.currentTime = seconds;
                    });
                    _this2.player.on('progress', function (_ref2) {
                      var seconds = _ref2.seconds;
                      _this2.secondsLoaded = seconds;
                    });
                    _this2.player.on('bufferstart', _this2.props.onBuffer);
                    _this2.player.on('bufferend', _this2.props.onBufferEnd);
                    _this2.player.on('playbackratechange', function (e) {
                      return _this2.props.onPlaybackRateChange(e.playbackRate);
                    });
                  }, this.props.onError);
                }
              }, {
                key: "refreshDuration",
                value: function refreshDuration() {
                  var _this3 = this;
                  this.player.getDuration().then(function (duration) {
                    _this3.duration = duration;
                  });
                }
              }, {
                key: "play",
                value: function play() {
                  var promise = this.callPlayer('play');
                  if (promise) {
                    promise["catch"](this.props.onError);
                  }
                }
              }, {
                key: "pause",
                value: function pause() {
                  this.callPlayer('pause');
                }
              }, {
                key: "stop",
                value: function stop() {
                  this.callPlayer('unload');
                }
              }, {
                key: "seekTo",
                value: function seekTo(seconds) {
                  this.callPlayer('setCurrentTime', seconds);
                }
              }, {
                key: "setVolume",
                value: function setVolume(fraction) {
                  this.callPlayer('setVolume', fraction);
                }
              }, {
                key: "setMuted",
                value: function setMuted(muted) {
                  this.callPlayer('setMuted', muted);
                }
              }, {
                key: "setLoop",
                value: function setLoop(loop) {
                  this.callPlayer('setLoop', loop);
                }
              }, {
                key: "setPlaybackRate",
                value: function setPlaybackRate(rate) {
                  this.callPlayer('setPlaybackRate', rate);
                }
              }, {
                key: "getDuration",
                value: function getDuration() {
                  return this.duration;
                }
              }, {
                key: "getCurrentTime",
                value: function getCurrentTime() {
                  return this.currentTime;
                }
              }, {
                key: "getSecondsLoaded",
                value: function getSecondsLoaded() {
                  return this.secondsLoaded;
                }
              }, {
                key: "render",
                value: function render() {
                  var display = this.props.display;
                  var style = {
                    width: '100%',
                    height: '100%',
                    overflow: 'hidden',
                    display: display
                  };
                  return /*#__PURE__*/_react["default"].createElement("div", {
                    key: this.props.url,
                    ref: this.ref,
                    style: style
                  });
                }
              }]);
              return Vimeo;
            }(_react.Component);
            exports["default"] = Vimeo;
            _defineProperty(Vimeo, "displayName", 'Vimeo');
            _defineProperty(Vimeo, "canPlay", _patterns.canPlay.vimeo);
            _defineProperty(Vimeo, "forceLoad", true);
          })(Vimeo);
          return Vimeo;
        }
        var Facebook = {};
        var hasRequiredFacebook;
        function requireFacebook() {
          if (hasRequiredFacebook) return Facebook;
          hasRequiredFacebook = 1;
          (function (exports) {
            function _typeof(obj) {
              "@babel/helpers - typeof";

              if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
                _typeof = function _typeof(obj) {
                  return typeof obj;
                };
              } else {
                _typeof = function _typeof(obj) {
                  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
                };
              }
              return _typeof(obj);
            }
            Object.defineProperty(exports, "__esModule", {
              value: true
            });
            exports["default"] = void 0;
            var _react = _interopRequireWildcard(reactExports);
            var _utils = utils;
            var _patterns = patterns;
            function _getRequireWildcardCache() {
              if (typeof WeakMap !== "function") return null;
              var cache = new WeakMap();
              _getRequireWildcardCache = function _getRequireWildcardCache() {
                return cache;
              };
              return cache;
            }
            function _interopRequireWildcard(obj) {
              if (obj && obj.__esModule) {
                return obj;
              }
              if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
                return {
                  "default": obj
                };
              }
              var cache = _getRequireWildcardCache();
              if (cache && cache.has(obj)) {
                return cache.get(obj);
              }
              var newObj = {};
              var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
              for (var key in obj) {
                if (Object.prototype.hasOwnProperty.call(obj, key)) {
                  var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
                  if (desc && (desc.get || desc.set)) {
                    Object.defineProperty(newObj, key, desc);
                  } else {
                    newObj[key] = obj[key];
                  }
                }
              }
              newObj["default"] = obj;
              if (cache) {
                cache.set(obj, newObj);
              }
              return newObj;
            }
            function _extends() {
              _extends = Object.assign || function (target) {
                for (var i = 1; i < arguments.length; i++) {
                  var source = arguments[i];
                  for (var key in source) {
                    if (Object.prototype.hasOwnProperty.call(source, key)) {
                      target[key] = source[key];
                    }
                  }
                }
                return target;
              };
              return _extends.apply(this, arguments);
            }
            function _classCallCheck(instance, Constructor) {
              if (!(instance instanceof Constructor)) {
                throw new TypeError("Cannot call a class as a function");
              }
            }
            function _defineProperties(target, props) {
              for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor) descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
              }
            }
            function _createClass(Constructor, protoProps, staticProps) {
              if (protoProps) _defineProperties(Constructor.prototype, protoProps);
              if (staticProps) _defineProperties(Constructor, staticProps);
              return Constructor;
            }
            function _inherits(subClass, superClass) {
              if (typeof superClass !== "function" && superClass !== null) {
                throw new TypeError("Super expression must either be null or a function");
              }
              subClass.prototype = Object.create(superClass && superClass.prototype, {
                constructor: {
                  value: subClass,
                  writable: true,
                  configurable: true
                }
              });
              if (superClass) _setPrototypeOf(subClass, superClass);
            }
            function _setPrototypeOf(o, p) {
              _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
                o.__proto__ = p;
                return o;
              };
              return _setPrototypeOf(o, p);
            }
            function _createSuper(Derived) {
              var hasNativeReflectConstruct = _isNativeReflectConstruct();
              return function _createSuperInternal() {
                var Super = _getPrototypeOf(Derived),
                  result;
                if (hasNativeReflectConstruct) {
                  var NewTarget = _getPrototypeOf(this).constructor;
                  result = Reflect.construct(Super, arguments, NewTarget);
                } else {
                  result = Super.apply(this, arguments);
                }
                return _possibleConstructorReturn(this, result);
              };
            }
            function _possibleConstructorReturn(self, call) {
              if (call && (_typeof(call) === "object" || typeof call === "function")) {
                return call;
              }
              return _assertThisInitialized(self);
            }
            function _assertThisInitialized(self) {
              if (self === void 0) {
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
              }
              return self;
            }
            function _isNativeReflectConstruct() {
              if (typeof Reflect === "undefined" || !Reflect.construct) return false;
              if (Reflect.construct.sham) return false;
              if (typeof Proxy === "function") return true;
              try {
                Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
                return true;
              } catch (e) {
                return false;
              }
            }
            function _getPrototypeOf(o) {
              _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
                return o.__proto__ || Object.getPrototypeOf(o);
              };
              return _getPrototypeOf(o);
            }
            function _defineProperty(obj, key, value) {
              if (key in obj) {
                Object.defineProperty(obj, key, {
                  value: value,
                  enumerable: true,
                  configurable: true,
                  writable: true
                });
              } else {
                obj[key] = value;
              }
              return obj;
            }
            var SDK_URL = 'https://connect.facebook.net/en_US/sdk.js';
            var SDK_GLOBAL = 'FB';
            var SDK_GLOBAL_READY = 'fbAsyncInit';
            var PLAYER_ID_PREFIX = 'facebook-player-';
            var Facebook = /*#__PURE__*/function (_Component) {
              _inherits(Facebook, _Component);
              var _super = _createSuper(Facebook);
              function Facebook() {
                var _this;
                _classCallCheck(this, Facebook);
                for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                  args[_key] = arguments[_key];
                }
                _this = _super.call.apply(_super, [this].concat(args));
                _defineProperty(_assertThisInitialized(_this), "callPlayer", _utils.callPlayer);
                _defineProperty(_assertThisInitialized(_this), "playerID", _this.props.config.playerId || "".concat(PLAYER_ID_PREFIX).concat((0, _utils.randomString)()));
                _defineProperty(_assertThisInitialized(_this), "mute", function () {
                  _this.callPlayer('mute');
                });
                _defineProperty(_assertThisInitialized(_this), "unmute", function () {
                  _this.callPlayer('unmute');
                });
                return _this;
              }
              _createClass(Facebook, [{
                key: "componentDidMount",
                value: function componentDidMount() {
                  this.props.onMount && this.props.onMount(this);
                }
              }, {
                key: "load",
                value: function load(url, isReady) {
                  var _this2 = this;
                  if (isReady) {
                    (0, _utils.getSDK)(SDK_URL, SDK_GLOBAL, SDK_GLOBAL_READY).then(function (FB) {
                      return FB.XFBML.parse();
                    });
                    return;
                  }
                  (0, _utils.getSDK)(SDK_URL, SDK_GLOBAL, SDK_GLOBAL_READY).then(function (FB) {
                    FB.init({
                      appId: _this2.props.config.appId,
                      xfbml: true,
                      version: _this2.props.config.version
                    });
                    FB.Event.subscribe('xfbml.render', function (msg) {
                      // Here we know the SDK has loaded, even if onReady/onPlay
                      // is not called due to a video that cannot be embedded
                      _this2.props.onLoaded();
                    });
                    FB.Event.subscribe('xfbml.ready', function (msg) {
                      if (msg.type === 'video' && msg.id === _this2.playerID) {
                        _this2.player = msg.instance;
                        _this2.player.subscribe('startedPlaying', _this2.props.onPlay);
                        _this2.player.subscribe('paused', _this2.props.onPause);
                        _this2.player.subscribe('finishedPlaying', _this2.props.onEnded);
                        _this2.player.subscribe('startedBuffering', _this2.props.onBuffer);
                        _this2.player.subscribe('finishedBuffering', _this2.props.onBufferEnd);
                        _this2.player.subscribe('error', _this2.props.onError);
                        if (_this2.props.muted) {
                          _this2.callPlayer('mute');
                        } else {
                          _this2.callPlayer('unmute');
                        }
                        _this2.props.onReady(); // For some reason Facebook have added `visibility: hidden`
                        // to the iframe when autoplay fails, so here we set it back

                        document.getElementById(_this2.playerID).querySelector('iframe').style.visibility = 'visible';
                      }
                    });
                  });
                }
              }, {
                key: "play",
                value: function play() {
                  this.callPlayer('play');
                }
              }, {
                key: "pause",
                value: function pause() {
                  this.callPlayer('pause');
                }
              }, {
                key: "stop",
                value: function stop() {// Nothing to do
                }
              }, {
                key: "seekTo",
                value: function seekTo(seconds) {
                  this.callPlayer('seek', seconds);
                }
              }, {
                key: "setVolume",
                value: function setVolume(fraction) {
                  this.callPlayer('setVolume', fraction);
                }
              }, {
                key: "getDuration",
                value: function getDuration() {
                  return this.callPlayer('getDuration');
                }
              }, {
                key: "getCurrentTime",
                value: function getCurrentTime() {
                  return this.callPlayer('getCurrentPosition');
                }
              }, {
                key: "getSecondsLoaded",
                value: function getSecondsLoaded() {
                  return null;
                }
              }, {
                key: "render",
                value: function render() {
                  var attributes = this.props.config.attributes;
                  var style = {
                    width: '100%',
                    height: '100%'
                  };
                  return /*#__PURE__*/_react["default"].createElement("div", _extends({
                    style: style,
                    id: this.playerID,
                    className: "fb-video",
                    "data-href": this.props.url,
                    "data-autoplay": this.props.playing ? 'true' : 'false',
                    "data-allowfullscreen": "true",
                    "data-controls": this.props.controls ? 'true' : 'false'
                  }, attributes));
                }
              }]);
              return Facebook;
            }(_react.Component);
            exports["default"] = Facebook;
            _defineProperty(Facebook, "displayName", 'Facebook');
            _defineProperty(Facebook, "canPlay", _patterns.canPlay.facebook);
            _defineProperty(Facebook, "loopOnEnded", true);
          })(Facebook);
          return Facebook;
        }
        var Streamable = {};
        var hasRequiredStreamable;
        function requireStreamable() {
          if (hasRequiredStreamable) return Streamable;
          hasRequiredStreamable = 1;
          (function (exports) {
            function _typeof(obj) {
              "@babel/helpers - typeof";

              if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
                _typeof = function _typeof(obj) {
                  return typeof obj;
                };
              } else {
                _typeof = function _typeof(obj) {
                  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
                };
              }
              return _typeof(obj);
            }
            Object.defineProperty(exports, "__esModule", {
              value: true
            });
            exports["default"] = void 0;
            var _react = _interopRequireWildcard(reactExports);
            var _utils = utils;
            var _patterns = patterns;
            function _getRequireWildcardCache() {
              if (typeof WeakMap !== "function") return null;
              var cache = new WeakMap();
              _getRequireWildcardCache = function _getRequireWildcardCache() {
                return cache;
              };
              return cache;
            }
            function _interopRequireWildcard(obj) {
              if (obj && obj.__esModule) {
                return obj;
              }
              if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
                return {
                  "default": obj
                };
              }
              var cache = _getRequireWildcardCache();
              if (cache && cache.has(obj)) {
                return cache.get(obj);
              }
              var newObj = {};
              var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
              for (var key in obj) {
                if (Object.prototype.hasOwnProperty.call(obj, key)) {
                  var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
                  if (desc && (desc.get || desc.set)) {
                    Object.defineProperty(newObj, key, desc);
                  } else {
                    newObj[key] = obj[key];
                  }
                }
              }
              newObj["default"] = obj;
              if (cache) {
                cache.set(obj, newObj);
              }
              return newObj;
            }
            function _classCallCheck(instance, Constructor) {
              if (!(instance instanceof Constructor)) {
                throw new TypeError("Cannot call a class as a function");
              }
            }
            function _defineProperties(target, props) {
              for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor) descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
              }
            }
            function _createClass(Constructor, protoProps, staticProps) {
              if (protoProps) _defineProperties(Constructor.prototype, protoProps);
              if (staticProps) _defineProperties(Constructor, staticProps);
              return Constructor;
            }
            function _inherits(subClass, superClass) {
              if (typeof superClass !== "function" && superClass !== null) {
                throw new TypeError("Super expression must either be null or a function");
              }
              subClass.prototype = Object.create(superClass && superClass.prototype, {
                constructor: {
                  value: subClass,
                  writable: true,
                  configurable: true
                }
              });
              if (superClass) _setPrototypeOf(subClass, superClass);
            }
            function _setPrototypeOf(o, p) {
              _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
                o.__proto__ = p;
                return o;
              };
              return _setPrototypeOf(o, p);
            }
            function _createSuper(Derived) {
              var hasNativeReflectConstruct = _isNativeReflectConstruct();
              return function _createSuperInternal() {
                var Super = _getPrototypeOf(Derived),
                  result;
                if (hasNativeReflectConstruct) {
                  var NewTarget = _getPrototypeOf(this).constructor;
                  result = Reflect.construct(Super, arguments, NewTarget);
                } else {
                  result = Super.apply(this, arguments);
                }
                return _possibleConstructorReturn(this, result);
              };
            }
            function _possibleConstructorReturn(self, call) {
              if (call && (_typeof(call) === "object" || typeof call === "function")) {
                return call;
              }
              return _assertThisInitialized(self);
            }
            function _assertThisInitialized(self) {
              if (self === void 0) {
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
              }
              return self;
            }
            function _isNativeReflectConstruct() {
              if (typeof Reflect === "undefined" || !Reflect.construct) return false;
              if (Reflect.construct.sham) return false;
              if (typeof Proxy === "function") return true;
              try {
                Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
                return true;
              } catch (e) {
                return false;
              }
            }
            function _getPrototypeOf(o) {
              _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
                return o.__proto__ || Object.getPrototypeOf(o);
              };
              return _getPrototypeOf(o);
            }
            function _defineProperty(obj, key, value) {
              if (key in obj) {
                Object.defineProperty(obj, key, {
                  value: value,
                  enumerable: true,
                  configurable: true,
                  writable: true
                });
              } else {
                obj[key] = value;
              }
              return obj;
            }
            var SDK_URL = 'https://cdn.embed.ly/player-0.1.0.min.js';
            var SDK_GLOBAL = 'playerjs';
            var Streamable = /*#__PURE__*/function (_Component) {
              _inherits(Streamable, _Component);
              var _super = _createSuper(Streamable);
              function Streamable() {
                var _this;
                _classCallCheck(this, Streamable);
                for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                  args[_key] = arguments[_key];
                }
                _this = _super.call.apply(_super, [this].concat(args));
                _defineProperty(_assertThisInitialized(_this), "callPlayer", _utils.callPlayer);
                _defineProperty(_assertThisInitialized(_this), "duration", null);
                _defineProperty(_assertThisInitialized(_this), "currentTime", null);
                _defineProperty(_assertThisInitialized(_this), "secondsLoaded", null);
                _defineProperty(_assertThisInitialized(_this), "mute", function () {
                  _this.callPlayer('mute');
                });
                _defineProperty(_assertThisInitialized(_this), "unmute", function () {
                  _this.callPlayer('unmute');
                });
                _defineProperty(_assertThisInitialized(_this), "ref", function (iframe) {
                  _this.iframe = iframe;
                });
                return _this;
              }
              _createClass(Streamable, [{
                key: "componentDidMount",
                value: function componentDidMount() {
                  this.props.onMount && this.props.onMount(this);
                }
              }, {
                key: "load",
                value: function load(url) {
                  var _this2 = this;
                  (0, _utils.getSDK)(SDK_URL, SDK_GLOBAL).then(function (playerjs) {
                    if (!_this2.iframe) return;
                    _this2.player = new playerjs.Player(_this2.iframe);
                    _this2.player.setLoop(_this2.props.loop);
                    _this2.player.on('ready', _this2.props.onReady);
                    _this2.player.on('play', _this2.props.onPlay);
                    _this2.player.on('pause', _this2.props.onPause);
                    _this2.player.on('seeked', _this2.props.onSeek);
                    _this2.player.on('ended', _this2.props.onEnded);
                    _this2.player.on('error', _this2.props.onError);
                    _this2.player.on('timeupdate', function (_ref) {
                      var duration = _ref.duration,
                        seconds = _ref.seconds;
                      _this2.duration = duration;
                      _this2.currentTime = seconds;
                    });
                    _this2.player.on('buffered', function (_ref2) {
                      var percent = _ref2.percent;
                      if (_this2.duration) {
                        _this2.secondsLoaded = _this2.duration * percent;
                      }
                    });
                    if (_this2.props.muted) {
                      _this2.player.mute();
                    }
                  }, this.props.onError);
                }
              }, {
                key: "play",
                value: function play() {
                  this.callPlayer('play');
                }
              }, {
                key: "pause",
                value: function pause() {
                  this.callPlayer('pause');
                }
              }, {
                key: "stop",
                value: function stop() {// Nothing to do
                }
              }, {
                key: "seekTo",
                value: function seekTo(seconds) {
                  this.callPlayer('setCurrentTime', seconds);
                }
              }, {
                key: "setVolume",
                value: function setVolume(fraction) {
                  this.callPlayer('setVolume', fraction * 100);
                }
              }, {
                key: "setLoop",
                value: function setLoop(loop) {
                  this.callPlayer('setLoop', loop);
                }
              }, {
                key: "getDuration",
                value: function getDuration() {
                  return this.duration;
                }
              }, {
                key: "getCurrentTime",
                value: function getCurrentTime() {
                  return this.currentTime;
                }
              }, {
                key: "getSecondsLoaded",
                value: function getSecondsLoaded() {
                  return this.secondsLoaded;
                }
              }, {
                key: "render",
                value: function render() {
                  var id = this.props.url.match(_patterns.MATCH_URL_STREAMABLE)[1];
                  var style = {
                    width: '100%',
                    height: '100%'
                  };
                  return /*#__PURE__*/_react["default"].createElement("iframe", {
                    ref: this.ref,
                    src: "https://streamable.com/o/".concat(id),
                    frameBorder: "0",
                    scrolling: "no",
                    style: style,
                    allow: "encrypted-media; autoplay; fullscreen;"
                  });
                }
              }]);
              return Streamable;
            }(_react.Component);
            exports["default"] = Streamable;
            _defineProperty(Streamable, "displayName", 'Streamable');
            _defineProperty(Streamable, "canPlay", _patterns.canPlay.streamable);
          })(Streamable);
          return Streamable;
        }
        var Wistia = {};
        var hasRequiredWistia;
        function requireWistia() {
          if (hasRequiredWistia) return Wistia;
          hasRequiredWistia = 1;
          (function (exports) {
            function _typeof(obj) {
              "@babel/helpers - typeof";

              if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
                _typeof = function _typeof(obj) {
                  return typeof obj;
                };
              } else {
                _typeof = function _typeof(obj) {
                  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
                };
              }
              return _typeof(obj);
            }
            Object.defineProperty(exports, "__esModule", {
              value: true
            });
            exports["default"] = void 0;
            var _react = _interopRequireWildcard(reactExports);
            var _utils = utils;
            var _patterns = patterns;
            function _getRequireWildcardCache() {
              if (typeof WeakMap !== "function") return null;
              var cache = new WeakMap();
              _getRequireWildcardCache = function _getRequireWildcardCache() {
                return cache;
              };
              return cache;
            }
            function _interopRequireWildcard(obj) {
              if (obj && obj.__esModule) {
                return obj;
              }
              if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
                return {
                  "default": obj
                };
              }
              var cache = _getRequireWildcardCache();
              if (cache && cache.has(obj)) {
                return cache.get(obj);
              }
              var newObj = {};
              var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
              for (var key in obj) {
                if (Object.prototype.hasOwnProperty.call(obj, key)) {
                  var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
                  if (desc && (desc.get || desc.set)) {
                    Object.defineProperty(newObj, key, desc);
                  } else {
                    newObj[key] = obj[key];
                  }
                }
              }
              newObj["default"] = obj;
              if (cache) {
                cache.set(obj, newObj);
              }
              return newObj;
            }
            function ownKeys(object, enumerableOnly) {
              var keys = Object.keys(object);
              if (Object.getOwnPropertySymbols) {
                var symbols = Object.getOwnPropertySymbols(object);
                if (enumerableOnly) symbols = symbols.filter(function (sym) {
                  return Object.getOwnPropertyDescriptor(object, sym).enumerable;
                });
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
            function _classCallCheck(instance, Constructor) {
              if (!(instance instanceof Constructor)) {
                throw new TypeError("Cannot call a class as a function");
              }
            }
            function _defineProperties(target, props) {
              for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor) descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
              }
            }
            function _createClass(Constructor, protoProps, staticProps) {
              if (protoProps) _defineProperties(Constructor.prototype, protoProps);
              if (staticProps) _defineProperties(Constructor, staticProps);
              return Constructor;
            }
            function _inherits(subClass, superClass) {
              if (typeof superClass !== "function" && superClass !== null) {
                throw new TypeError("Super expression must either be null or a function");
              }
              subClass.prototype = Object.create(superClass && superClass.prototype, {
                constructor: {
                  value: subClass,
                  writable: true,
                  configurable: true
                }
              });
              if (superClass) _setPrototypeOf(subClass, superClass);
            }
            function _setPrototypeOf(o, p) {
              _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
                o.__proto__ = p;
                return o;
              };
              return _setPrototypeOf(o, p);
            }
            function _createSuper(Derived) {
              var hasNativeReflectConstruct = _isNativeReflectConstruct();
              return function _createSuperInternal() {
                var Super = _getPrototypeOf(Derived),
                  result;
                if (hasNativeReflectConstruct) {
                  var NewTarget = _getPrototypeOf(this).constructor;
                  result = Reflect.construct(Super, arguments, NewTarget);
                } else {
                  result = Super.apply(this, arguments);
                }
                return _possibleConstructorReturn(this, result);
              };
            }
            function _possibleConstructorReturn(self, call) {
              if (call && (_typeof(call) === "object" || typeof call === "function")) {
                return call;
              }
              return _assertThisInitialized(self);
            }
            function _assertThisInitialized(self) {
              if (self === void 0) {
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
              }
              return self;
            }
            function _isNativeReflectConstruct() {
              if (typeof Reflect === "undefined" || !Reflect.construct) return false;
              if (Reflect.construct.sham) return false;
              if (typeof Proxy === "function") return true;
              try {
                Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
                return true;
              } catch (e) {
                return false;
              }
            }
            function _getPrototypeOf(o) {
              _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
                return o.__proto__ || Object.getPrototypeOf(o);
              };
              return _getPrototypeOf(o);
            }
            function _defineProperty(obj, key, value) {
              if (key in obj) {
                Object.defineProperty(obj, key, {
                  value: value,
                  enumerable: true,
                  configurable: true,
                  writable: true
                });
              } else {
                obj[key] = value;
              }
              return obj;
            }
            var SDK_URL = 'https://fast.wistia.com/assets/external/E-v1.js';
            var SDK_GLOBAL = 'Wistia';
            var PLAYER_ID_PREFIX = 'wistia-player-';
            var Wistia = /*#__PURE__*/function (_Component) {
              _inherits(Wistia, _Component);
              var _super = _createSuper(Wistia);
              function Wistia() {
                var _this;
                _classCallCheck(this, Wistia);
                for (var _len = arguments.length, _args = new Array(_len), _key = 0; _key < _len; _key++) {
                  _args[_key] = arguments[_key];
                }
                _this = _super.call.apply(_super, [this].concat(_args));
                _defineProperty(_assertThisInitialized(_this), "callPlayer", _utils.callPlayer);
                _defineProperty(_assertThisInitialized(_this), "playerID", _this.props.config.playerId || "".concat(PLAYER_ID_PREFIX).concat((0, _utils.randomString)()));
                _defineProperty(_assertThisInitialized(_this), "onPlay", function () {
                  var _this$props;
                  return (_this$props = _this.props).onPlay.apply(_this$props, arguments);
                });
                _defineProperty(_assertThisInitialized(_this), "onPause", function () {
                  var _this$props2;
                  return (_this$props2 = _this.props).onPause.apply(_this$props2, arguments);
                });
                _defineProperty(_assertThisInitialized(_this), "onSeek", function () {
                  var _this$props3;
                  return (_this$props3 = _this.props).onSeek.apply(_this$props3, arguments);
                });
                _defineProperty(_assertThisInitialized(_this), "onEnded", function () {
                  var _this$props4;
                  return (_this$props4 = _this.props).onEnded.apply(_this$props4, arguments);
                });
                _defineProperty(_assertThisInitialized(_this), "onPlaybackRateChange", function () {
                  var _this$props5;
                  return (_this$props5 = _this.props).onPlaybackRateChange.apply(_this$props5, arguments);
                });
                _defineProperty(_assertThisInitialized(_this), "mute", function () {
                  _this.callPlayer('mute');
                });
                _defineProperty(_assertThisInitialized(_this), "unmute", function () {
                  _this.callPlayer('unmute');
                });
                return _this;
              }
              _createClass(Wistia, [{
                key: "componentDidMount",
                value: function componentDidMount() {
                  this.props.onMount && this.props.onMount(this);
                }
              }, {
                key: "load",
                value: function load(url) {
                  var _this2 = this;
                  var _this$props6 = this.props,
                    playing = _this$props6.playing,
                    muted = _this$props6.muted,
                    controls = _this$props6.controls,
                    _onReady = _this$props6.onReady,
                    config = _this$props6.config,
                    onError = _this$props6.onError;
                  (0, _utils.getSDK)(SDK_URL, SDK_GLOBAL).then(function (Wistia) {
                    if (config.customControls) {
                      config.customControls.forEach(function (control) {
                        return Wistia.defineControl(control);
                      });
                    }
                    window._wq = window._wq || [];
                    window._wq.push({
                      id: _this2.playerID,
                      options: _objectSpread({
                        autoPlay: playing,
                        silentAutoPlay: 'allow',
                        muted: muted,
                        controlsVisibleOnLoad: controls,
                        fullscreenButton: controls,
                        playbar: controls,
                        playbackRateControl: controls,
                        qualityControl: controls,
                        volumeControl: controls,
                        settingsControl: controls,
                        smallPlayButton: controls
                      }, config.options),
                      onReady: function onReady(player) {
                        _this2.player = player;
                        _this2.unbind();
                        _this2.player.bind('play', _this2.onPlay);
                        _this2.player.bind('pause', _this2.onPause);
                        _this2.player.bind('seek', _this2.onSeek);
                        _this2.player.bind('end', _this2.onEnded);
                        _this2.player.bind('playbackratechange', _this2.onPlaybackRateChange);
                        _onReady();
                      }
                    });
                  }, onError);
                }
              }, {
                key: "unbind",
                value: function unbind() {
                  this.player.unbind('play', this.onPlay);
                  this.player.unbind('pause', this.onPause);
                  this.player.unbind('seek', this.onSeek);
                  this.player.unbind('end', this.onEnded);
                  this.player.unbind('playbackratechange', this.onPlaybackRateChange);
                } // Proxy methods to prevent listener leaks
              }, {
                key: "play",
                value: function play() {
                  this.callPlayer('play');
                }
              }, {
                key: "pause",
                value: function pause() {
                  this.callPlayer('pause');
                }
              }, {
                key: "stop",
                value: function stop() {
                  this.unbind();
                  this.callPlayer('remove');
                }
              }, {
                key: "seekTo",
                value: function seekTo(seconds) {
                  this.callPlayer('time', seconds);
                }
              }, {
                key: "setVolume",
                value: function setVolume(fraction) {
                  this.callPlayer('volume', fraction);
                }
              }, {
                key: "setPlaybackRate",
                value: function setPlaybackRate(rate) {
                  this.callPlayer('playbackRate', rate);
                }
              }, {
                key: "getDuration",
                value: function getDuration() {
                  return this.callPlayer('duration');
                }
              }, {
                key: "getCurrentTime",
                value: function getCurrentTime() {
                  return this.callPlayer('time');
                }
              }, {
                key: "getSecondsLoaded",
                value: function getSecondsLoaded() {
                  return null;
                }
              }, {
                key: "render",
                value: function render() {
                  var url = this.props.url;
                  var videoID = url && url.match(_patterns.MATCH_URL_WISTIA)[1];
                  var className = "wistia_embed wistia_async_".concat(videoID);
                  var style = {
                    width: '100%',
                    height: '100%'
                  };
                  return /*#__PURE__*/_react["default"].createElement("div", {
                    id: this.playerID,
                    key: videoID,
                    className: className,
                    style: style
                  });
                }
              }]);
              return Wistia;
            }(_react.Component);
            exports["default"] = Wistia;
            _defineProperty(Wistia, "displayName", 'Wistia');
            _defineProperty(Wistia, "canPlay", _patterns.canPlay.wistia);
            _defineProperty(Wistia, "loopOnEnded", true);
          })(Wistia);
          return Wistia;
        }
        var Twitch = {};
        var hasRequiredTwitch;
        function requireTwitch() {
          if (hasRequiredTwitch) return Twitch;
          hasRequiredTwitch = 1;
          (function (exports) {
            function _typeof(obj) {
              "@babel/helpers - typeof";

              if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
                _typeof = function _typeof(obj) {
                  return typeof obj;
                };
              } else {
                _typeof = function _typeof(obj) {
                  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
                };
              }
              return _typeof(obj);
            }
            Object.defineProperty(exports, "__esModule", {
              value: true
            });
            exports["default"] = void 0;
            var _react = _interopRequireWildcard(reactExports);
            var _utils = utils;
            var _patterns = patterns;
            function _getRequireWildcardCache() {
              if (typeof WeakMap !== "function") return null;
              var cache = new WeakMap();
              _getRequireWildcardCache = function _getRequireWildcardCache() {
                return cache;
              };
              return cache;
            }
            function _interopRequireWildcard(obj) {
              if (obj && obj.__esModule) {
                return obj;
              }
              if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
                return {
                  "default": obj
                };
              }
              var cache = _getRequireWildcardCache();
              if (cache && cache.has(obj)) {
                return cache.get(obj);
              }
              var newObj = {};
              var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
              for (var key in obj) {
                if (Object.prototype.hasOwnProperty.call(obj, key)) {
                  var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
                  if (desc && (desc.get || desc.set)) {
                    Object.defineProperty(newObj, key, desc);
                  } else {
                    newObj[key] = obj[key];
                  }
                }
              }
              newObj["default"] = obj;
              if (cache) {
                cache.set(obj, newObj);
              }
              return newObj;
            }
            function ownKeys(object, enumerableOnly) {
              var keys = Object.keys(object);
              if (Object.getOwnPropertySymbols) {
                var symbols = Object.getOwnPropertySymbols(object);
                if (enumerableOnly) symbols = symbols.filter(function (sym) {
                  return Object.getOwnPropertyDescriptor(object, sym).enumerable;
                });
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
            function _classCallCheck(instance, Constructor) {
              if (!(instance instanceof Constructor)) {
                throw new TypeError("Cannot call a class as a function");
              }
            }
            function _defineProperties(target, props) {
              for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor) descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
              }
            }
            function _createClass(Constructor, protoProps, staticProps) {
              if (protoProps) _defineProperties(Constructor.prototype, protoProps);
              if (staticProps) _defineProperties(Constructor, staticProps);
              return Constructor;
            }
            function _inherits(subClass, superClass) {
              if (typeof superClass !== "function" && superClass !== null) {
                throw new TypeError("Super expression must either be null or a function");
              }
              subClass.prototype = Object.create(superClass && superClass.prototype, {
                constructor: {
                  value: subClass,
                  writable: true,
                  configurable: true
                }
              });
              if (superClass) _setPrototypeOf(subClass, superClass);
            }
            function _setPrototypeOf(o, p) {
              _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
                o.__proto__ = p;
                return o;
              };
              return _setPrototypeOf(o, p);
            }
            function _createSuper(Derived) {
              var hasNativeReflectConstruct = _isNativeReflectConstruct();
              return function _createSuperInternal() {
                var Super = _getPrototypeOf(Derived),
                  result;
                if (hasNativeReflectConstruct) {
                  var NewTarget = _getPrototypeOf(this).constructor;
                  result = Reflect.construct(Super, arguments, NewTarget);
                } else {
                  result = Super.apply(this, arguments);
                }
                return _possibleConstructorReturn(this, result);
              };
            }
            function _possibleConstructorReturn(self, call) {
              if (call && (_typeof(call) === "object" || typeof call === "function")) {
                return call;
              }
              return _assertThisInitialized(self);
            }
            function _assertThisInitialized(self) {
              if (self === void 0) {
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
              }
              return self;
            }
            function _isNativeReflectConstruct() {
              if (typeof Reflect === "undefined" || !Reflect.construct) return false;
              if (Reflect.construct.sham) return false;
              if (typeof Proxy === "function") return true;
              try {
                Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
                return true;
              } catch (e) {
                return false;
              }
            }
            function _getPrototypeOf(o) {
              _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
                return o.__proto__ || Object.getPrototypeOf(o);
              };
              return _getPrototypeOf(o);
            }
            function _defineProperty(obj, key, value) {
              if (key in obj) {
                Object.defineProperty(obj, key, {
                  value: value,
                  enumerable: true,
                  configurable: true,
                  writable: true
                });
              } else {
                obj[key] = value;
              }
              return obj;
            }
            var SDK_URL = 'https://player.twitch.tv/js/embed/v1.js';
            var SDK_GLOBAL = 'Twitch';
            var PLAYER_ID_PREFIX = 'twitch-player-';
            var Twitch = /*#__PURE__*/function (_Component) {
              _inherits(Twitch, _Component);
              var _super = _createSuper(Twitch);
              function Twitch() {
                var _this;
                _classCallCheck(this, Twitch);
                for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                  args[_key] = arguments[_key];
                }
                _this = _super.call.apply(_super, [this].concat(args));
                _defineProperty(_assertThisInitialized(_this), "callPlayer", _utils.callPlayer);
                _defineProperty(_assertThisInitialized(_this), "playerID", _this.props.config.playerId || "".concat(PLAYER_ID_PREFIX).concat((0, _utils.randomString)()));
                _defineProperty(_assertThisInitialized(_this), "mute", function () {
                  _this.callPlayer('setMuted', true);
                });
                _defineProperty(_assertThisInitialized(_this), "unmute", function () {
                  _this.callPlayer('setMuted', false);
                });
                return _this;
              }
              _createClass(Twitch, [{
                key: "componentDidMount",
                value: function componentDidMount() {
                  this.props.onMount && this.props.onMount(this);
                }
              }, {
                key: "load",
                value: function load(url, isReady) {
                  var _this2 = this;
                  var _this$props = this.props,
                    playsinline = _this$props.playsinline,
                    onError = _this$props.onError,
                    config = _this$props.config,
                    controls = _this$props.controls;
                  var isChannel = _patterns.MATCH_URL_TWITCH_CHANNEL.test(url);
                  var id = isChannel ? url.match(_patterns.MATCH_URL_TWITCH_CHANNEL)[1] : url.match(_patterns.MATCH_URL_TWITCH_VIDEO)[1];
                  if (isReady) {
                    if (isChannel) {
                      this.player.setChannel(id);
                    } else {
                      this.player.setVideo('v' + id);
                    }
                    return;
                  }
                  (0, _utils.getSDK)(SDK_URL, SDK_GLOBAL).then(function (Twitch) {
                    _this2.player = new Twitch.Player(_this2.playerID, _objectSpread({
                      video: isChannel ? '' : id,
                      channel: isChannel ? id : '',
                      height: '100%',
                      width: '100%',
                      playsinline: playsinline,
                      autoplay: _this2.props.playing,
                      muted: _this2.props.muted,
                      // https://github.com/CookPete/react-player/issues/733#issuecomment-549085859
                      controls: isChannel ? true : controls,
                      time: (0, _utils.parseStartTime)(url)
                    }, config.options));
                    var _Twitch$Player = Twitch.Player,
                      READY = _Twitch$Player.READY,
                      PLAYING = _Twitch$Player.PLAYING,
                      PAUSE = _Twitch$Player.PAUSE,
                      ENDED = _Twitch$Player.ENDED,
                      ONLINE = _Twitch$Player.ONLINE,
                      OFFLINE = _Twitch$Player.OFFLINE,
                      SEEK = _Twitch$Player.SEEK;
                    _this2.player.addEventListener(READY, _this2.props.onReady);
                    _this2.player.addEventListener(PLAYING, _this2.props.onPlay);
                    _this2.player.addEventListener(PAUSE, _this2.props.onPause);
                    _this2.player.addEventListener(ENDED, _this2.props.onEnded);
                    _this2.player.addEventListener(SEEK, _this2.props.onSeek); // Prevent weird isLoading behaviour when streams are offline

                    _this2.player.addEventListener(ONLINE, _this2.props.onLoaded);
                    _this2.player.addEventListener(OFFLINE, _this2.props.onLoaded);
                  }, onError);
                }
              }, {
                key: "play",
                value: function play() {
                  this.callPlayer('play');
                }
              }, {
                key: "pause",
                value: function pause() {
                  this.callPlayer('pause');
                }
              }, {
                key: "stop",
                value: function stop() {
                  this.callPlayer('pause');
                }
              }, {
                key: "seekTo",
                value: function seekTo(seconds) {
                  this.callPlayer('seek', seconds);
                }
              }, {
                key: "setVolume",
                value: function setVolume(fraction) {
                  this.callPlayer('setVolume', fraction);
                }
              }, {
                key: "getDuration",
                value: function getDuration() {
                  return this.callPlayer('getDuration');
                }
              }, {
                key: "getCurrentTime",
                value: function getCurrentTime() {
                  return this.callPlayer('getCurrentTime');
                }
              }, {
                key: "getSecondsLoaded",
                value: function getSecondsLoaded() {
                  return null;
                }
              }, {
                key: "render",
                value: function render() {
                  var style = {
                    width: '100%',
                    height: '100%'
                  };
                  return /*#__PURE__*/_react["default"].createElement("div", {
                    style: style,
                    id: this.playerID
                  });
                }
              }]);
              return Twitch;
            }(_react.Component);
            exports["default"] = Twitch;
            _defineProperty(Twitch, "displayName", 'Twitch');
            _defineProperty(Twitch, "canPlay", _patterns.canPlay.twitch);
            _defineProperty(Twitch, "loopOnEnded", true);
          })(Twitch);
          return Twitch;
        }
        var DailyMotion = {};
        var hasRequiredDailyMotion;
        function requireDailyMotion() {
          if (hasRequiredDailyMotion) return DailyMotion;
          hasRequiredDailyMotion = 1;
          (function (exports) {
            function _typeof(obj) {
              "@babel/helpers - typeof";

              if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
                _typeof = function _typeof(obj) {
                  return typeof obj;
                };
              } else {
                _typeof = function _typeof(obj) {
                  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
                };
              }
              return _typeof(obj);
            }
            Object.defineProperty(exports, "__esModule", {
              value: true
            });
            exports["default"] = void 0;
            var _react = _interopRequireWildcard(reactExports);
            var _utils = utils;
            var _patterns = patterns;
            function _getRequireWildcardCache() {
              if (typeof WeakMap !== "function") return null;
              var cache = new WeakMap();
              _getRequireWildcardCache = function _getRequireWildcardCache() {
                return cache;
              };
              return cache;
            }
            function _interopRequireWildcard(obj) {
              if (obj && obj.__esModule) {
                return obj;
              }
              if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
                return {
                  "default": obj
                };
              }
              var cache = _getRequireWildcardCache();
              if (cache && cache.has(obj)) {
                return cache.get(obj);
              }
              var newObj = {};
              var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
              for (var key in obj) {
                if (Object.prototype.hasOwnProperty.call(obj, key)) {
                  var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
                  if (desc && (desc.get || desc.set)) {
                    Object.defineProperty(newObj, key, desc);
                  } else {
                    newObj[key] = obj[key];
                  }
                }
              }
              newObj["default"] = obj;
              if (cache) {
                cache.set(obj, newObj);
              }
              return newObj;
            }
            function ownKeys(object, enumerableOnly) {
              var keys = Object.keys(object);
              if (Object.getOwnPropertySymbols) {
                var symbols = Object.getOwnPropertySymbols(object);
                if (enumerableOnly) symbols = symbols.filter(function (sym) {
                  return Object.getOwnPropertyDescriptor(object, sym).enumerable;
                });
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
            function _slicedToArray(arr, i) {
              return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
            }
            function _nonIterableRest() {
              throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
            }
            function _unsupportedIterableToArray(o, minLen) {
              if (!o) return;
              if (typeof o === "string") return _arrayLikeToArray(o, minLen);
              var n = Object.prototype.toString.call(o).slice(8, -1);
              if (n === "Object" && o.constructor) n = o.constructor.name;
              if (n === "Map" || n === "Set") return Array.from(o);
              if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
            }
            function _arrayLikeToArray(arr, len) {
              if (len == null || len > arr.length) len = arr.length;
              for (var i = 0, arr2 = new Array(len); i < len; i++) {
                arr2[i] = arr[i];
              }
              return arr2;
            }
            function _iterableToArrayLimit(arr, i) {
              if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
              var _arr = [];
              var _n = true;
              var _d = false;
              var _e = undefined;
              try {
                for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
                  _arr.push(_s.value);
                  if (i && _arr.length === i) break;
                }
              } catch (err) {
                _d = true;
                _e = err;
              } finally {
                try {
                  if (!_n && _i["return"] != null) _i["return"]();
                } finally {
                  if (_d) throw _e;
                }
              }
              return _arr;
            }
            function _arrayWithHoles(arr) {
              if (Array.isArray(arr)) return arr;
            }
            function _classCallCheck(instance, Constructor) {
              if (!(instance instanceof Constructor)) {
                throw new TypeError("Cannot call a class as a function");
              }
            }
            function _defineProperties(target, props) {
              for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor) descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
              }
            }
            function _createClass(Constructor, protoProps, staticProps) {
              if (protoProps) _defineProperties(Constructor.prototype, protoProps);
              if (staticProps) _defineProperties(Constructor, staticProps);
              return Constructor;
            }
            function _inherits(subClass, superClass) {
              if (typeof superClass !== "function" && superClass !== null) {
                throw new TypeError("Super expression must either be null or a function");
              }
              subClass.prototype = Object.create(superClass && superClass.prototype, {
                constructor: {
                  value: subClass,
                  writable: true,
                  configurable: true
                }
              });
              if (superClass) _setPrototypeOf(subClass, superClass);
            }
            function _setPrototypeOf(o, p) {
              _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
                o.__proto__ = p;
                return o;
              };
              return _setPrototypeOf(o, p);
            }
            function _createSuper(Derived) {
              var hasNativeReflectConstruct = _isNativeReflectConstruct();
              return function _createSuperInternal() {
                var Super = _getPrototypeOf(Derived),
                  result;
                if (hasNativeReflectConstruct) {
                  var NewTarget = _getPrototypeOf(this).constructor;
                  result = Reflect.construct(Super, arguments, NewTarget);
                } else {
                  result = Super.apply(this, arguments);
                }
                return _possibleConstructorReturn(this, result);
              };
            }
            function _possibleConstructorReturn(self, call) {
              if (call && (_typeof(call) === "object" || typeof call === "function")) {
                return call;
              }
              return _assertThisInitialized(self);
            }
            function _assertThisInitialized(self) {
              if (self === void 0) {
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
              }
              return self;
            }
            function _isNativeReflectConstruct() {
              if (typeof Reflect === "undefined" || !Reflect.construct) return false;
              if (Reflect.construct.sham) return false;
              if (typeof Proxy === "function") return true;
              try {
                Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
                return true;
              } catch (e) {
                return false;
              }
            }
            function _getPrototypeOf(o) {
              _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
                return o.__proto__ || Object.getPrototypeOf(o);
              };
              return _getPrototypeOf(o);
            }
            function _defineProperty(obj, key, value) {
              if (key in obj) {
                Object.defineProperty(obj, key, {
                  value: value,
                  enumerable: true,
                  configurable: true,
                  writable: true
                });
              } else {
                obj[key] = value;
              }
              return obj;
            }
            var SDK_URL = 'https://api.dmcdn.net/all.js';
            var SDK_GLOBAL = 'DM';
            var SDK_GLOBAL_READY = 'dmAsyncInit';
            var DailyMotion = /*#__PURE__*/function (_Component) {
              _inherits(DailyMotion, _Component);
              var _super = _createSuper(DailyMotion);
              function DailyMotion() {
                var _this;
                _classCallCheck(this, DailyMotion);
                for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                  args[_key] = arguments[_key];
                }
                _this = _super.call.apply(_super, [this].concat(args));
                _defineProperty(_assertThisInitialized(_this), "callPlayer", _utils.callPlayer);
                _defineProperty(_assertThisInitialized(_this), "onDurationChange", function () {
                  var duration = _this.getDuration();
                  _this.props.onDuration(duration);
                });
                _defineProperty(_assertThisInitialized(_this), "mute", function () {
                  _this.callPlayer('setMuted', true);
                });
                _defineProperty(_assertThisInitialized(_this), "unmute", function () {
                  _this.callPlayer('setMuted', false);
                });
                _defineProperty(_assertThisInitialized(_this), "ref", function (container) {
                  _this.container = container;
                });
                return _this;
              }
              _createClass(DailyMotion, [{
                key: "componentDidMount",
                value: function componentDidMount() {
                  this.props.onMount && this.props.onMount(this);
                }
              }, {
                key: "load",
                value: function load(url) {
                  var _this2 = this;
                  var _this$props = this.props,
                    controls = _this$props.controls,
                    config = _this$props.config,
                    onError = _this$props.onError,
                    playing = _this$props.playing;
                  var _url$match = url.match(_patterns.MATCH_URL_DAILYMOTION),
                    _url$match2 = _slicedToArray(_url$match, 2),
                    id = _url$match2[1];
                  if (this.player) {
                    this.player.load(id, {
                      start: (0, _utils.parseStartTime)(url),
                      autoplay: playing
                    });
                    return;
                  }
                  (0, _utils.getSDK)(SDK_URL, SDK_GLOBAL, SDK_GLOBAL_READY, function (DM) {
                    return DM.player;
                  }).then(function (DM) {
                    if (!_this2.container) return;
                    var Player = DM.player;
                    _this2.player = new Player(_this2.container, {
                      width: '100%',
                      height: '100%',
                      video: id,
                      params: _objectSpread({
                        controls: controls,
                        autoplay: _this2.props.playing,
                        mute: _this2.props.muted,
                        start: (0, _utils.parseStartTime)(url),
                        origin: window.location.origin
                      }, config.params),
                      events: {
                        apiready: _this2.props.onReady,
                        seeked: function seeked() {
                          return _this2.props.onSeek(_this2.player.currentTime);
                        },
                        video_end: _this2.props.onEnded,
                        durationchange: _this2.onDurationChange,
                        pause: _this2.props.onPause,
                        playing: _this2.props.onPlay,
                        waiting: _this2.props.onBuffer,
                        error: function error(event) {
                          return onError(event);
                        }
                      }
                    });
                  }, onError);
                }
              }, {
                key: "play",
                value: function play() {
                  this.callPlayer('play');
                }
              }, {
                key: "pause",
                value: function pause() {
                  this.callPlayer('pause');
                }
              }, {
                key: "stop",
                value: function stop() {// Nothing to do
                }
              }, {
                key: "seekTo",
                value: function seekTo(seconds) {
                  this.callPlayer('seek', seconds);
                }
              }, {
                key: "setVolume",
                value: function setVolume(fraction) {
                  this.callPlayer('setVolume', fraction);
                }
              }, {
                key: "getDuration",
                value: function getDuration() {
                  return this.player.duration || null;
                }
              }, {
                key: "getCurrentTime",
                value: function getCurrentTime() {
                  return this.player.currentTime;
                }
              }, {
                key: "getSecondsLoaded",
                value: function getSecondsLoaded() {
                  return this.player.bufferedTime;
                }
              }, {
                key: "render",
                value: function render() {
                  var display = this.props.display;
                  var style = {
                    width: '100%',
                    height: '100%',
                    display: display
                  };
                  return /*#__PURE__*/_react["default"].createElement("div", {
                    style: style
                  }, /*#__PURE__*/_react["default"].createElement("div", {
                    ref: this.ref
                  }));
                }
              }]);
              return DailyMotion;
            }(_react.Component);
            exports["default"] = DailyMotion;
            _defineProperty(DailyMotion, "displayName", 'DailyMotion');
            _defineProperty(DailyMotion, "canPlay", _patterns.canPlay.dailymotion);
            _defineProperty(DailyMotion, "loopOnEnded", true);
          })(DailyMotion);
          return DailyMotion;
        }
        var Mixcloud = {};
        var hasRequiredMixcloud;
        function requireMixcloud() {
          if (hasRequiredMixcloud) return Mixcloud;
          hasRequiredMixcloud = 1;
          (function (exports) {
            function _typeof(obj) {
              "@babel/helpers - typeof";

              if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
                _typeof = function _typeof(obj) {
                  return typeof obj;
                };
              } else {
                _typeof = function _typeof(obj) {
                  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
                };
              }
              return _typeof(obj);
            }
            Object.defineProperty(exports, "__esModule", {
              value: true
            });
            exports["default"] = void 0;
            var _react = _interopRequireWildcard(reactExports);
            var _utils = utils;
            var _patterns = patterns;
            function _getRequireWildcardCache() {
              if (typeof WeakMap !== "function") return null;
              var cache = new WeakMap();
              _getRequireWildcardCache = function _getRequireWildcardCache() {
                return cache;
              };
              return cache;
            }
            function _interopRequireWildcard(obj) {
              if (obj && obj.__esModule) {
                return obj;
              }
              if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
                return {
                  "default": obj
                };
              }
              var cache = _getRequireWildcardCache();
              if (cache && cache.has(obj)) {
                return cache.get(obj);
              }
              var newObj = {};
              var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
              for (var key in obj) {
                if (Object.prototype.hasOwnProperty.call(obj, key)) {
                  var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
                  if (desc && (desc.get || desc.set)) {
                    Object.defineProperty(newObj, key, desc);
                  } else {
                    newObj[key] = obj[key];
                  }
                }
              }
              newObj["default"] = obj;
              if (cache) {
                cache.set(obj, newObj);
              }
              return newObj;
            }
            function ownKeys(object, enumerableOnly) {
              var keys = Object.keys(object);
              if (Object.getOwnPropertySymbols) {
                var symbols = Object.getOwnPropertySymbols(object);
                if (enumerableOnly) symbols = symbols.filter(function (sym) {
                  return Object.getOwnPropertyDescriptor(object, sym).enumerable;
                });
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
            function _classCallCheck(instance, Constructor) {
              if (!(instance instanceof Constructor)) {
                throw new TypeError("Cannot call a class as a function");
              }
            }
            function _defineProperties(target, props) {
              for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor) descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
              }
            }
            function _createClass(Constructor, protoProps, staticProps) {
              if (protoProps) _defineProperties(Constructor.prototype, protoProps);
              if (staticProps) _defineProperties(Constructor, staticProps);
              return Constructor;
            }
            function _inherits(subClass, superClass) {
              if (typeof superClass !== "function" && superClass !== null) {
                throw new TypeError("Super expression must either be null or a function");
              }
              subClass.prototype = Object.create(superClass && superClass.prototype, {
                constructor: {
                  value: subClass,
                  writable: true,
                  configurable: true
                }
              });
              if (superClass) _setPrototypeOf(subClass, superClass);
            }
            function _setPrototypeOf(o, p) {
              _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
                o.__proto__ = p;
                return o;
              };
              return _setPrototypeOf(o, p);
            }
            function _createSuper(Derived) {
              var hasNativeReflectConstruct = _isNativeReflectConstruct();
              return function _createSuperInternal() {
                var Super = _getPrototypeOf(Derived),
                  result;
                if (hasNativeReflectConstruct) {
                  var NewTarget = _getPrototypeOf(this).constructor;
                  result = Reflect.construct(Super, arguments, NewTarget);
                } else {
                  result = Super.apply(this, arguments);
                }
                return _possibleConstructorReturn(this, result);
              };
            }
            function _possibleConstructorReturn(self, call) {
              if (call && (_typeof(call) === "object" || typeof call === "function")) {
                return call;
              }
              return _assertThisInitialized(self);
            }
            function _assertThisInitialized(self) {
              if (self === void 0) {
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
              }
              return self;
            }
            function _isNativeReflectConstruct() {
              if (typeof Reflect === "undefined" || !Reflect.construct) return false;
              if (Reflect.construct.sham) return false;
              if (typeof Proxy === "function") return true;
              try {
                Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
                return true;
              } catch (e) {
                return false;
              }
            }
            function _getPrototypeOf(o) {
              _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
                return o.__proto__ || Object.getPrototypeOf(o);
              };
              return _getPrototypeOf(o);
            }
            function _defineProperty(obj, key, value) {
              if (key in obj) {
                Object.defineProperty(obj, key, {
                  value: value,
                  enumerable: true,
                  configurable: true,
                  writable: true
                });
              } else {
                obj[key] = value;
              }
              return obj;
            }
            var SDK_URL = 'https://widget.mixcloud.com/media/js/widgetApi.js';
            var SDK_GLOBAL = 'Mixcloud';
            var Mixcloud = /*#__PURE__*/function (_Component) {
              _inherits(Mixcloud, _Component);
              var _super = _createSuper(Mixcloud);
              function Mixcloud() {
                var _this;
                _classCallCheck(this, Mixcloud);
                for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                  args[_key] = arguments[_key];
                }
                _this = _super.call.apply(_super, [this].concat(args));
                _defineProperty(_assertThisInitialized(_this), "callPlayer", _utils.callPlayer);
                _defineProperty(_assertThisInitialized(_this), "duration", null);
                _defineProperty(_assertThisInitialized(_this), "currentTime", null);
                _defineProperty(_assertThisInitialized(_this), "secondsLoaded", null);
                _defineProperty(_assertThisInitialized(_this), "mute", function () {// No volume support
                });
                _defineProperty(_assertThisInitialized(_this), "unmute", function () {// No volume support
                });
                _defineProperty(_assertThisInitialized(_this), "ref", function (iframe) {
                  _this.iframe = iframe;
                });
                return _this;
              }
              _createClass(Mixcloud, [{
                key: "componentDidMount",
                value: function componentDidMount() {
                  this.props.onMount && this.props.onMount(this);
                }
              }, {
                key: "load",
                value: function load(url) {
                  var _this2 = this;
                  (0, _utils.getSDK)(SDK_URL, SDK_GLOBAL).then(function (Mixcloud) {
                    _this2.player = Mixcloud.PlayerWidget(_this2.iframe);
                    _this2.player.ready.then(function () {
                      _this2.player.events.play.on(_this2.props.onPlay);
                      _this2.player.events.pause.on(_this2.props.onPause);
                      _this2.player.events.ended.on(_this2.props.onEnded);
                      _this2.player.events.error.on(_this2.props.error);
                      _this2.player.events.progress.on(function (seconds, duration) {
                        _this2.currentTime = seconds;
                        _this2.duration = duration;
                      });
                      _this2.props.onReady();
                    });
                  }, this.props.onError);
                }
              }, {
                key: "play",
                value: function play() {
                  this.callPlayer('play');
                }
              }, {
                key: "pause",
                value: function pause() {
                  this.callPlayer('pause');
                }
              }, {
                key: "stop",
                value: function stop() {// Nothing to do
                }
              }, {
                key: "seekTo",
                value: function seekTo(seconds) {
                  this.callPlayer('seek', seconds);
                }
              }, {
                key: "setVolume",
                value: function setVolume(fraction) {// No volume support
                }
              }, {
                key: "getDuration",
                value: function getDuration() {
                  return this.duration;
                }
              }, {
                key: "getCurrentTime",
                value: function getCurrentTime() {
                  return this.currentTime;
                }
              }, {
                key: "getSecondsLoaded",
                value: function getSecondsLoaded() {
                  return null;
                }
              }, {
                key: "render",
                value: function render() {
                  var _this$props = this.props,
                    url = _this$props.url,
                    config = _this$props.config;
                  var id = url.match(_patterns.MATCH_URL_MIXCLOUD)[1];
                  var style = {
                    width: '100%',
                    height: '100%'
                  };
                  var query = (0, _utils.queryString)(_objectSpread(_objectSpread({}, config.options), {}, {
                    feed: "/".concat(id, "/")
                  })); // We have to give the iframe a key here to prevent a
                  // weird dialog appearing when loading a new track

                  return /*#__PURE__*/_react["default"].createElement("iframe", {
                    key: id,
                    ref: this.ref,
                    style: style,
                    src: "https://www.mixcloud.com/widget/iframe/?".concat(query),
                    frameBorder: "0",
                    allow: "autoplay"
                  });
                }
              }]);
              return Mixcloud;
            }(_react.Component);
            exports["default"] = Mixcloud;
            _defineProperty(Mixcloud, "displayName", 'Mixcloud');
            _defineProperty(Mixcloud, "canPlay", _patterns.canPlay.mixcloud);
            _defineProperty(Mixcloud, "loopOnEnded", true);
          })(Mixcloud);
          return Mixcloud;
        }
        var Vidyard = {};
        var hasRequiredVidyard;
        function requireVidyard() {
          if (hasRequiredVidyard) return Vidyard;
          hasRequiredVidyard = 1;
          (function (exports) {
            function _typeof(obj) {
              "@babel/helpers - typeof";

              if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
                _typeof = function _typeof(obj) {
                  return typeof obj;
                };
              } else {
                _typeof = function _typeof(obj) {
                  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
                };
              }
              return _typeof(obj);
            }
            Object.defineProperty(exports, "__esModule", {
              value: true
            });
            exports["default"] = void 0;
            var _react = _interopRequireWildcard(reactExports);
            var _utils = utils;
            var _patterns = patterns;
            function _getRequireWildcardCache() {
              if (typeof WeakMap !== "function") return null;
              var cache = new WeakMap();
              _getRequireWildcardCache = function _getRequireWildcardCache() {
                return cache;
              };
              return cache;
            }
            function _interopRequireWildcard(obj) {
              if (obj && obj.__esModule) {
                return obj;
              }
              if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
                return {
                  "default": obj
                };
              }
              var cache = _getRequireWildcardCache();
              if (cache && cache.has(obj)) {
                return cache.get(obj);
              }
              var newObj = {};
              var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
              for (var key in obj) {
                if (Object.prototype.hasOwnProperty.call(obj, key)) {
                  var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
                  if (desc && (desc.get || desc.set)) {
                    Object.defineProperty(newObj, key, desc);
                  } else {
                    newObj[key] = obj[key];
                  }
                }
              }
              newObj["default"] = obj;
              if (cache) {
                cache.set(obj, newObj);
              }
              return newObj;
            }
            function ownKeys(object, enumerableOnly) {
              var keys = Object.keys(object);
              if (Object.getOwnPropertySymbols) {
                var symbols = Object.getOwnPropertySymbols(object);
                if (enumerableOnly) symbols = symbols.filter(function (sym) {
                  return Object.getOwnPropertyDescriptor(object, sym).enumerable;
                });
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
            function _classCallCheck(instance, Constructor) {
              if (!(instance instanceof Constructor)) {
                throw new TypeError("Cannot call a class as a function");
              }
            }
            function _defineProperties(target, props) {
              for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor) descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
              }
            }
            function _createClass(Constructor, protoProps, staticProps) {
              if (protoProps) _defineProperties(Constructor.prototype, protoProps);
              if (staticProps) _defineProperties(Constructor, staticProps);
              return Constructor;
            }
            function _inherits(subClass, superClass) {
              if (typeof superClass !== "function" && superClass !== null) {
                throw new TypeError("Super expression must either be null or a function");
              }
              subClass.prototype = Object.create(superClass && superClass.prototype, {
                constructor: {
                  value: subClass,
                  writable: true,
                  configurable: true
                }
              });
              if (superClass) _setPrototypeOf(subClass, superClass);
            }
            function _setPrototypeOf(o, p) {
              _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
                o.__proto__ = p;
                return o;
              };
              return _setPrototypeOf(o, p);
            }
            function _createSuper(Derived) {
              var hasNativeReflectConstruct = _isNativeReflectConstruct();
              return function _createSuperInternal() {
                var Super = _getPrototypeOf(Derived),
                  result;
                if (hasNativeReflectConstruct) {
                  var NewTarget = _getPrototypeOf(this).constructor;
                  result = Reflect.construct(Super, arguments, NewTarget);
                } else {
                  result = Super.apply(this, arguments);
                }
                return _possibleConstructorReturn(this, result);
              };
            }
            function _possibleConstructorReturn(self, call) {
              if (call && (_typeof(call) === "object" || typeof call === "function")) {
                return call;
              }
              return _assertThisInitialized(self);
            }
            function _assertThisInitialized(self) {
              if (self === void 0) {
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
              }
              return self;
            }
            function _isNativeReflectConstruct() {
              if (typeof Reflect === "undefined" || !Reflect.construct) return false;
              if (Reflect.construct.sham) return false;
              if (typeof Proxy === "function") return true;
              try {
                Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
                return true;
              } catch (e) {
                return false;
              }
            }
            function _getPrototypeOf(o) {
              _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
                return o.__proto__ || Object.getPrototypeOf(o);
              };
              return _getPrototypeOf(o);
            }
            function _defineProperty(obj, key, value) {
              if (key in obj) {
                Object.defineProperty(obj, key, {
                  value: value,
                  enumerable: true,
                  configurable: true,
                  writable: true
                });
              } else {
                obj[key] = value;
              }
              return obj;
            }
            var SDK_URL = 'https://play.vidyard.com/embed/v4.js';
            var SDK_GLOBAL = 'VidyardV4';
            var SDK_GLOBAL_READY = 'onVidyardAPI';
            var Vidyard = /*#__PURE__*/function (_Component) {
              _inherits(Vidyard, _Component);
              var _super = _createSuper(Vidyard);
              function Vidyard() {
                var _this;
                _classCallCheck(this, Vidyard);
                for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                  args[_key] = arguments[_key];
                }
                _this = _super.call.apply(_super, [this].concat(args));
                _defineProperty(_assertThisInitialized(_this), "callPlayer", _utils.callPlayer);
                _defineProperty(_assertThisInitialized(_this), "mute", function () {
                  _this.setVolume(0);
                });
                _defineProperty(_assertThisInitialized(_this), "unmute", function () {
                  if (_this.props.volume !== null) {
                    _this.setVolume(_this.props.volume);
                  }
                });
                _defineProperty(_assertThisInitialized(_this), "ref", function (container) {
                  _this.container = container;
                });
                return _this;
              }
              _createClass(Vidyard, [{
                key: "componentDidMount",
                value: function componentDidMount() {
                  this.props.onMount && this.props.onMount(this);
                }
              }, {
                key: "load",
                value: function load(url) {
                  var _this2 = this;
                  var _this$props = this.props,
                    playing = _this$props.playing,
                    config = _this$props.config,
                    onError = _this$props.onError,
                    onDuration = _this$props.onDuration;
                  var id = url && url.match(_patterns.MATCH_URL_VIDYARD)[1];
                  if (this.player) {
                    this.stop();
                  }
                  (0, _utils.getSDK)(SDK_URL, SDK_GLOBAL, SDK_GLOBAL_READY).then(function (Vidyard) {
                    if (!_this2.container) return;
                    Vidyard.api.addReadyListener(function (data, player) {
                      if (_this2.player) {
                        return;
                      }
                      _this2.player = player;
                      _this2.player.on('ready', _this2.props.onReady);
                      _this2.player.on('play', _this2.props.onPlay);
                      _this2.player.on('pause', _this2.props.onPause);
                      _this2.player.on('seek', _this2.props.onSeek);
                      _this2.player.on('playerComplete', _this2.props.onEnded);
                    }, id);
                    Vidyard.api.renderPlayer(_objectSpread({
                      uuid: id,
                      container: _this2.container,
                      autoplay: playing ? 1 : 0
                    }, config.options));
                    Vidyard.api.getPlayerMetadata(id).then(function (meta) {
                      _this2.duration = meta.length_in_seconds;
                      onDuration(meta.length_in_seconds);
                    });
                  }, onError);
                }
              }, {
                key: "play",
                value: function play() {
                  this.callPlayer('play');
                }
              }, {
                key: "pause",
                value: function pause() {
                  this.callPlayer('pause');
                }
              }, {
                key: "stop",
                value: function stop() {
                  window.VidyardV4.api.destroyPlayer(this.player);
                }
              }, {
                key: "seekTo",
                value: function seekTo(amount) {
                  this.callPlayer('seek', amount);
                }
              }, {
                key: "setVolume",
                value: function setVolume(fraction) {
                  this.callPlayer('setVolume', fraction);
                }
              }, {
                key: "setPlaybackRate",
                value: function setPlaybackRate(rate) {
                  this.callPlayer('setPlaybackSpeed', rate);
                }
              }, {
                key: "getDuration",
                value: function getDuration() {
                  return this.duration;
                }
              }, {
                key: "getCurrentTime",
                value: function getCurrentTime() {
                  return this.callPlayer('currentTime');
                }
              }, {
                key: "getSecondsLoaded",
                value: function getSecondsLoaded() {
                  return null;
                }
              }, {
                key: "render",
                value: function render() {
                  var display = this.props.display;
                  var style = {
                    width: '100%',
                    height: '100%',
                    display: display
                  };
                  return /*#__PURE__*/_react["default"].createElement("div", {
                    style: style
                  }, /*#__PURE__*/_react["default"].createElement("div", {
                    ref: this.ref
                  }));
                }
              }]);
              return Vidyard;
            }(_react.Component);
            exports["default"] = Vidyard;
            _defineProperty(Vidyard, "displayName", 'Vidyard');
            _defineProperty(Vidyard, "canPlay", _patterns.canPlay.vidyard);
          })(Vidyard);
          return Vidyard;
        }
        var Kaltura = {};
        var hasRequiredKaltura;
        function requireKaltura() {
          if (hasRequiredKaltura) return Kaltura;
          hasRequiredKaltura = 1;
          (function (exports) {
            function _typeof(obj) {
              "@babel/helpers - typeof";

              if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
                _typeof = function _typeof(obj) {
                  return typeof obj;
                };
              } else {
                _typeof = function _typeof(obj) {
                  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
                };
              }
              return _typeof(obj);
            }
            Object.defineProperty(exports, "__esModule", {
              value: true
            });
            exports["default"] = void 0;
            var _react = _interopRequireWildcard(reactExports);
            var _utils = utils;
            var _patterns = patterns;
            function _getRequireWildcardCache() {
              if (typeof WeakMap !== "function") return null;
              var cache = new WeakMap();
              _getRequireWildcardCache = function _getRequireWildcardCache() {
                return cache;
              };
              return cache;
            }
            function _interopRequireWildcard(obj) {
              if (obj && obj.__esModule) {
                return obj;
              }
              if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
                return {
                  "default": obj
                };
              }
              var cache = _getRequireWildcardCache();
              if (cache && cache.has(obj)) {
                return cache.get(obj);
              }
              var newObj = {};
              var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
              for (var key in obj) {
                if (Object.prototype.hasOwnProperty.call(obj, key)) {
                  var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
                  if (desc && (desc.get || desc.set)) {
                    Object.defineProperty(newObj, key, desc);
                  } else {
                    newObj[key] = obj[key];
                  }
                }
              }
              newObj["default"] = obj;
              if (cache) {
                cache.set(obj, newObj);
              }
              return newObj;
            }
            function _classCallCheck(instance, Constructor) {
              if (!(instance instanceof Constructor)) {
                throw new TypeError("Cannot call a class as a function");
              }
            }
            function _defineProperties(target, props) {
              for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor) descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
              }
            }
            function _createClass(Constructor, protoProps, staticProps) {
              if (protoProps) _defineProperties(Constructor.prototype, protoProps);
              if (staticProps) _defineProperties(Constructor, staticProps);
              return Constructor;
            }
            function _inherits(subClass, superClass) {
              if (typeof superClass !== "function" && superClass !== null) {
                throw new TypeError("Super expression must either be null or a function");
              }
              subClass.prototype = Object.create(superClass && superClass.prototype, {
                constructor: {
                  value: subClass,
                  writable: true,
                  configurable: true
                }
              });
              if (superClass) _setPrototypeOf(subClass, superClass);
            }
            function _setPrototypeOf(o, p) {
              _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
                o.__proto__ = p;
                return o;
              };
              return _setPrototypeOf(o, p);
            }
            function _createSuper(Derived) {
              var hasNativeReflectConstruct = _isNativeReflectConstruct();
              return function _createSuperInternal() {
                var Super = _getPrototypeOf(Derived),
                  result;
                if (hasNativeReflectConstruct) {
                  var NewTarget = _getPrototypeOf(this).constructor;
                  result = Reflect.construct(Super, arguments, NewTarget);
                } else {
                  result = Super.apply(this, arguments);
                }
                return _possibleConstructorReturn(this, result);
              };
            }
            function _possibleConstructorReturn(self, call) {
              if (call && (_typeof(call) === "object" || typeof call === "function")) {
                return call;
              }
              return _assertThisInitialized(self);
            }
            function _assertThisInitialized(self) {
              if (self === void 0) {
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
              }
              return self;
            }
            function _isNativeReflectConstruct() {
              if (typeof Reflect === "undefined" || !Reflect.construct) return false;
              if (Reflect.construct.sham) return false;
              if (typeof Proxy === "function") return true;
              try {
                Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
                return true;
              } catch (e) {
                return false;
              }
            }
            function _getPrototypeOf(o) {
              _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
                return o.__proto__ || Object.getPrototypeOf(o);
              };
              return _getPrototypeOf(o);
            }
            function _defineProperty(obj, key, value) {
              if (key in obj) {
                Object.defineProperty(obj, key, {
                  value: value,
                  enumerable: true,
                  configurable: true,
                  writable: true
                });
              } else {
                obj[key] = value;
              }
              return obj;
            }
            var SDK_URL = 'https://cdn.embed.ly/player-0.1.0.min.js';
            var SDK_GLOBAL = 'playerjs';
            var Kaltura = /*#__PURE__*/function (_Component) {
              _inherits(Kaltura, _Component);
              var _super = _createSuper(Kaltura);
              function Kaltura() {
                var _this;
                _classCallCheck(this, Kaltura);
                for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                  args[_key] = arguments[_key];
                }
                _this = _super.call.apply(_super, [this].concat(args));
                _defineProperty(_assertThisInitialized(_this), "callPlayer", _utils.callPlayer);
                _defineProperty(_assertThisInitialized(_this), "duration", null);
                _defineProperty(_assertThisInitialized(_this), "currentTime", null);
                _defineProperty(_assertThisInitialized(_this), "secondsLoaded", null);
                _defineProperty(_assertThisInitialized(_this), "mute", function () {
                  _this.callPlayer('mute');
                });
                _defineProperty(_assertThisInitialized(_this), "unmute", function () {
                  _this.callPlayer('unmute');
                });
                _defineProperty(_assertThisInitialized(_this), "ref", function (iframe) {
                  _this.iframe = iframe;
                });
                return _this;
              }
              _createClass(Kaltura, [{
                key: "componentDidMount",
                value: function componentDidMount() {
                  this.props.onMount && this.props.onMount(this);
                }
              }, {
                key: "load",
                value: function load(url) {
                  var _this2 = this;
                  (0, _utils.getSDK)(SDK_URL, SDK_GLOBAL).then(function (playerjs) {
                    if (!_this2.iframe) return;
                    _this2.player = new playerjs.Player(_this2.iframe);
                    _this2.player.on('ready', function () {
                      // An arbitrary timeout is required otherwise
                      // the event listeners won’t work
                      setTimeout(function () {
                        _this2.player.isReady = true;
                        _this2.player.setLoop(_this2.props.loop);
                        if (_this2.props.muted) {
                          _this2.player.mute();
                        }
                        _this2.addListeners(_this2.player, _this2.props);
                        _this2.props.onReady();
                      }, 500);
                    });
                  }, this.props.onError);
                }
              }, {
                key: "addListeners",
                value: function addListeners(player, props) {
                  var _this3 = this;
                  player.on('play', props.onPlay);
                  player.on('pause', props.onPause);
                  player.on('ended', props.onEnded);
                  player.on('error', props.onError);
                  player.on('timeupdate', function (_ref) {
                    var duration = _ref.duration,
                      seconds = _ref.seconds;
                    _this3.duration = duration;
                    _this3.currentTime = seconds;
                  });
                }
              }, {
                key: "play",
                value: function play() {
                  this.callPlayer('play');
                }
              }, {
                key: "pause",
                value: function pause() {
                  this.callPlayer('pause');
                }
              }, {
                key: "stop",
                value: function stop() {// Nothing to do
                }
              }, {
                key: "seekTo",
                value: function seekTo(seconds) {
                  this.callPlayer('setCurrentTime', seconds);
                }
              }, {
                key: "setVolume",
                value: function setVolume(fraction) {
                  this.callPlayer('setVolume', fraction);
                }
              }, {
                key: "setLoop",
                value: function setLoop(loop) {
                  this.callPlayer('setLoop', loop);
                }
              }, {
                key: "getDuration",
                value: function getDuration() {
                  return this.duration;
                }
              }, {
                key: "getCurrentTime",
                value: function getCurrentTime() {
                  return this.currentTime;
                }
              }, {
                key: "getSecondsLoaded",
                value: function getSecondsLoaded() {
                  return this.secondsLoaded;
                }
              }, {
                key: "render",
                value: function render() {
                  var style = {
                    width: '100%',
                    height: '100%'
                  };
                  return /*#__PURE__*/_react["default"].createElement("iframe", {
                    ref: this.ref,
                    src: this.props.url,
                    frameBorder: "0",
                    scrolling: "no",
                    style: style,
                    allow: "encrypted-media; autoplay; fullscreen;",
                    referrerPolicy: "no-referrer-when-downgrade"
                  });
                }
              }]);
              return Kaltura;
            }(_react.Component);
            exports["default"] = Kaltura;
            _defineProperty(Kaltura, "displayName", 'Kaltura');
            _defineProperty(Kaltura, "canPlay", _patterns.canPlay.kaltura);
          })(Kaltura);
          return Kaltura;
        }
        var FilePlayer = {};
        var hasRequiredFilePlayer;
        function requireFilePlayer() {
          if (hasRequiredFilePlayer) return FilePlayer;
          hasRequiredFilePlayer = 1;
          (function (exports) {
            function _typeof(obj) {
              "@babel/helpers - typeof";

              if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
                _typeof = function _typeof(obj) {
                  return typeof obj;
                };
              } else {
                _typeof = function _typeof(obj) {
                  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
                };
              }
              return _typeof(obj);
            }
            Object.defineProperty(exports, "__esModule", {
              value: true
            });
            exports["default"] = void 0;
            var _react = _interopRequireWildcard(reactExports);
            var _utils = utils;
            var _patterns = patterns;
            function _getRequireWildcardCache() {
              if (typeof WeakMap !== "function") return null;
              var cache = new WeakMap();
              _getRequireWildcardCache = function _getRequireWildcardCache() {
                return cache;
              };
              return cache;
            }
            function _interopRequireWildcard(obj) {
              if (obj && obj.__esModule) {
                return obj;
              }
              if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
                return {
                  "default": obj
                };
              }
              var cache = _getRequireWildcardCache();
              if (cache && cache.has(obj)) {
                return cache.get(obj);
              }
              var newObj = {};
              var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
              for (var key in obj) {
                if (Object.prototype.hasOwnProperty.call(obj, key)) {
                  var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
                  if (desc && (desc.get || desc.set)) {
                    Object.defineProperty(newObj, key, desc);
                  } else {
                    newObj[key] = obj[key];
                  }
                }
              }
              newObj["default"] = obj;
              if (cache) {
                cache.set(obj, newObj);
              }
              return newObj;
            }
            function _extends() {
              _extends = Object.assign || function (target) {
                for (var i = 1; i < arguments.length; i++) {
                  var source = arguments[i];
                  for (var key in source) {
                    if (Object.prototype.hasOwnProperty.call(source, key)) {
                      target[key] = source[key];
                    }
                  }
                }
                return target;
              };
              return _extends.apply(this, arguments);
            }
            function _classCallCheck(instance, Constructor) {
              if (!(instance instanceof Constructor)) {
                throw new TypeError("Cannot call a class as a function");
              }
            }
            function _defineProperties(target, props) {
              for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor) descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
              }
            }
            function _createClass(Constructor, protoProps, staticProps) {
              if (protoProps) _defineProperties(Constructor.prototype, protoProps);
              if (staticProps) _defineProperties(Constructor, staticProps);
              return Constructor;
            }
            function _inherits(subClass, superClass) {
              if (typeof superClass !== "function" && superClass !== null) {
                throw new TypeError("Super expression must either be null or a function");
              }
              subClass.prototype = Object.create(superClass && superClass.prototype, {
                constructor: {
                  value: subClass,
                  writable: true,
                  configurable: true
                }
              });
              if (superClass) _setPrototypeOf(subClass, superClass);
            }
            function _setPrototypeOf(o, p) {
              _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
                o.__proto__ = p;
                return o;
              };
              return _setPrototypeOf(o, p);
            }
            function _createSuper(Derived) {
              var hasNativeReflectConstruct = _isNativeReflectConstruct();
              return function _createSuperInternal() {
                var Super = _getPrototypeOf(Derived),
                  result;
                if (hasNativeReflectConstruct) {
                  var NewTarget = _getPrototypeOf(this).constructor;
                  result = Reflect.construct(Super, arguments, NewTarget);
                } else {
                  result = Super.apply(this, arguments);
                }
                return _possibleConstructorReturn(this, result);
              };
            }
            function _possibleConstructorReturn(self, call) {
              if (call && (_typeof(call) === "object" || typeof call === "function")) {
                return call;
              }
              return _assertThisInitialized(self);
            }
            function _assertThisInitialized(self) {
              if (self === void 0) {
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
              }
              return self;
            }
            function _isNativeReflectConstruct() {
              if (typeof Reflect === "undefined" || !Reflect.construct) return false;
              if (Reflect.construct.sham) return false;
              if (typeof Proxy === "function") return true;
              try {
                Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
                return true;
              } catch (e) {
                return false;
              }
            }
            function _getPrototypeOf(o) {
              _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
                return o.__proto__ || Object.getPrototypeOf(o);
              };
              return _getPrototypeOf(o);
            }
            function _defineProperty(obj, key, value) {
              if (key in obj) {
                Object.defineProperty(obj, key, {
                  value: value,
                  enumerable: true,
                  configurable: true,
                  writable: true
                });
              } else {
                obj[key] = value;
              }
              return obj;
            }
            var HAS_NAVIGATOR = typeof navigator !== 'undefined';
            var IS_IPAD_PRO = HAS_NAVIGATOR && navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1;
            var IS_IOS = HAS_NAVIGATOR && (/iPad|iPhone|iPod/.test(navigator.userAgent) || IS_IPAD_PRO) && !window.MSStream;
            var IS_SAFARI = HAS_NAVIGATOR && /^((?!chrome|android).)*safari/i.test(navigator.userAgent) && !window.MSStream;
            var HLS_SDK_URL = 'https://cdn.jsdelivr.net/npm/hls.js@VERSION/dist/hls.min.js';
            var HLS_GLOBAL = 'Hls';
            var DASH_SDK_URL = 'https://cdnjs.cloudflare.com/ajax/libs/dashjs/VERSION/dash.all.min.js';
            var DASH_GLOBAL = 'dashjs';
            var FLV_SDK_URL = 'https://cdn.jsdelivr.net/npm/flv.js@VERSION/dist/flv.min.js';
            var FLV_GLOBAL = 'flvjs';
            var MATCH_DROPBOX_URL = /www\.dropbox\.com\/.+/;
            var MATCH_CLOUDFLARE_STREAM = /https:\/\/watch\.cloudflarestream\.com\/([a-z0-9]+)/;
            var REPLACE_CLOUDFLARE_STREAM = 'https://videodelivery.net/{id}/manifest/video.m3u8';
            var FilePlayer = /*#__PURE__*/function (_Component) {
              _inherits(FilePlayer, _Component);
              var _super = _createSuper(FilePlayer);
              function FilePlayer() {
                var _this;
                _classCallCheck(this, FilePlayer);
                for (var _len = arguments.length, _args = new Array(_len), _key = 0; _key < _len; _key++) {
                  _args[_key] = arguments[_key];
                }
                _this = _super.call.apply(_super, [this].concat(_args));
                _defineProperty(_assertThisInitialized(_this), "onReady", function () {
                  var _this$props;
                  return (_this$props = _this.props).onReady.apply(_this$props, arguments);
                });
                _defineProperty(_assertThisInitialized(_this), "onPlay", function () {
                  var _this$props2;
                  return (_this$props2 = _this.props).onPlay.apply(_this$props2, arguments);
                });
                _defineProperty(_assertThisInitialized(_this), "onBuffer", function () {
                  var _this$props3;
                  return (_this$props3 = _this.props).onBuffer.apply(_this$props3, arguments);
                });
                _defineProperty(_assertThisInitialized(_this), "onBufferEnd", function () {
                  var _this$props4;
                  return (_this$props4 = _this.props).onBufferEnd.apply(_this$props4, arguments);
                });
                _defineProperty(_assertThisInitialized(_this), "onPause", function () {
                  var _this$props5;
                  return (_this$props5 = _this.props).onPause.apply(_this$props5, arguments);
                });
                _defineProperty(_assertThisInitialized(_this), "onEnded", function () {
                  var _this$props6;
                  return (_this$props6 = _this.props).onEnded.apply(_this$props6, arguments);
                });
                _defineProperty(_assertThisInitialized(_this), "onError", function () {
                  var _this$props7;
                  return (_this$props7 = _this.props).onError.apply(_this$props7, arguments);
                });
                _defineProperty(_assertThisInitialized(_this), "onPlayBackRateChange", function (event) {
                  return _this.props.onPlaybackRateChange(event.target.playbackRate);
                });
                _defineProperty(_assertThisInitialized(_this), "onEnablePIP", function () {
                  var _this$props8;
                  return (_this$props8 = _this.props).onEnablePIP.apply(_this$props8, arguments);
                });
                _defineProperty(_assertThisInitialized(_this), "onDisablePIP", function (e) {
                  var _this$props9 = _this.props,
                    onDisablePIP = _this$props9.onDisablePIP,
                    playing = _this$props9.playing;
                  onDisablePIP(e);
                  if (playing) {
                    _this.play();
                  }
                });
                _defineProperty(_assertThisInitialized(_this), "onPresentationModeChange", function (e) {
                  if (_this.player && (0, _utils.supportsWebKitPresentationMode)(_this.player)) {
                    var webkitPresentationMode = _this.player.webkitPresentationMode;
                    if (webkitPresentationMode === 'picture-in-picture') {
                      _this.onEnablePIP(e);
                    } else if (webkitPresentationMode === 'inline') {
                      _this.onDisablePIP(e);
                    }
                  }
                });
                _defineProperty(_assertThisInitialized(_this), "onSeek", function (e) {
                  _this.props.onSeek(e.target.currentTime);
                });
                _defineProperty(_assertThisInitialized(_this), "mute", function () {
                  _this.player.muted = true;
                });
                _defineProperty(_assertThisInitialized(_this), "unmute", function () {
                  _this.player.muted = false;
                });
                _defineProperty(_assertThisInitialized(_this), "renderSourceElement", function (source, index) {
                  if (typeof source === 'string') {
                    return /*#__PURE__*/_react["default"].createElement("source", {
                      key: index,
                      src: source
                    });
                  }
                  return /*#__PURE__*/_react["default"].createElement("source", _extends({
                    key: index
                  }, source));
                });
                _defineProperty(_assertThisInitialized(_this), "renderTrack", function (track, index) {
                  return /*#__PURE__*/_react["default"].createElement("track", _extends({
                    key: index
                  }, track));
                });
                _defineProperty(_assertThisInitialized(_this), "ref", function (player) {
                  if (_this.player) {
                    // Store previous player to be used by removeListeners()
                    _this.prevPlayer = _this.player;
                  }
                  _this.player = player;
                });
                return _this;
              }
              _createClass(FilePlayer, [{
                key: "componentDidMount",
                value: function componentDidMount() {
                  this.props.onMount && this.props.onMount(this);
                  this.addListeners(this.player);
                  this.player.src = this.getSource(this.props.url); // Ensure src is set in strict mode

                  if (IS_IOS) {
                    this.player.load();
                  }
                }
              }, {
                key: "componentDidUpdate",
                value: function componentDidUpdate(prevProps) {
                  if (this.shouldUseAudio(this.props) !== this.shouldUseAudio(prevProps)) {
                    this.removeListeners(this.prevPlayer, prevProps.url);
                    this.addListeners(this.player);
                  }
                  if (this.props.url !== prevProps.url && !(0, _utils.isMediaStream)(this.props.url)) {
                    this.player.srcObject = null;
                  }
                }
              }, {
                key: "componentWillUnmount",
                value: function componentWillUnmount() {
                  this.player.src = '';
                  this.removeListeners(this.player);
                  if (this.hls) {
                    this.hls.destroy();
                  }
                }
              }, {
                key: "addListeners",
                value: function addListeners(player) {
                  var _this$props10 = this.props,
                    url = _this$props10.url,
                    playsinline = _this$props10.playsinline;
                  player.addEventListener('play', this.onPlay);
                  player.addEventListener('waiting', this.onBuffer);
                  player.addEventListener('playing', this.onBufferEnd);
                  player.addEventListener('pause', this.onPause);
                  player.addEventListener('seeked', this.onSeek);
                  player.addEventListener('ended', this.onEnded);
                  player.addEventListener('error', this.onError);
                  player.addEventListener('ratechange', this.onPlayBackRateChange);
                  player.addEventListener('enterpictureinpicture', this.onEnablePIP);
                  player.addEventListener('leavepictureinpicture', this.onDisablePIP);
                  player.addEventListener('webkitpresentationmodechanged', this.onPresentationModeChange);
                  if (!this.shouldUseHLS(url)) {
                    // onReady is handled by hls.js
                    player.addEventListener('canplay', this.onReady);
                  }
                  if (playsinline) {
                    player.setAttribute('playsinline', '');
                    player.setAttribute('webkit-playsinline', '');
                    player.setAttribute('x5-playsinline', '');
                  }
                }
              }, {
                key: "removeListeners",
                value: function removeListeners(player, url) {
                  player.removeEventListener('canplay', this.onReady);
                  player.removeEventListener('play', this.onPlay);
                  player.removeEventListener('waiting', this.onBuffer);
                  player.removeEventListener('playing', this.onBufferEnd);
                  player.removeEventListener('pause', this.onPause);
                  player.removeEventListener('seeked', this.onSeek);
                  player.removeEventListener('ended', this.onEnded);
                  player.removeEventListener('error', this.onError);
                  player.removeEventListener('ratechange', this.onPlayBackRateChange);
                  player.removeEventListener('enterpictureinpicture', this.onEnablePIP);
                  player.removeEventListener('leavepictureinpicture', this.onDisablePIP);
                  player.removeEventListener('webkitpresentationmodechanged', this.onPresentationModeChange);
                  if (!this.shouldUseHLS(url)) {
                    // onReady is handled by hls.js
                    player.removeEventListener('canplay', this.onReady);
                  }
                } // Proxy methods to prevent listener leaks
              }, {
                key: "shouldUseAudio",
                value: function shouldUseAudio(props) {
                  if (props.config.forceVideo) {
                    return false;
                  }
                  if (props.config.attributes.poster) {
                    return false; // Use <video> so that poster is shown
                  }

                  return _patterns.AUDIO_EXTENSIONS.test(props.url) || props.config.forceAudio;
                }
              }, {
                key: "shouldUseHLS",
                value: function shouldUseHLS(url) {
                  if (this.props.config.forceHLS) {
                    return true;
                  }
                  if (IS_SAFARI && this.props.config.forceSafariHLS) {
                    return true;
                  }
                  if (IS_IOS) {
                    return false;
                  }
                  return _patterns.HLS_EXTENSIONS.test(url) || MATCH_CLOUDFLARE_STREAM.test(url);
                }
              }, {
                key: "shouldUseDASH",
                value: function shouldUseDASH(url) {
                  return _patterns.DASH_EXTENSIONS.test(url) || this.props.config.forceDASH;
                }
              }, {
                key: "shouldUseFLV",
                value: function shouldUseFLV(url) {
                  return _patterns.FLV_EXTENSIONS.test(url) || this.props.config.forceFLV;
                }
              }, {
                key: "load",
                value: function load(url) {
                  var _this2 = this;
                  var _this$props$config = this.props.config,
                    hlsVersion = _this$props$config.hlsVersion,
                    hlsOptions = _this$props$config.hlsOptions,
                    dashVersion = _this$props$config.dashVersion,
                    flvVersion = _this$props$config.flvVersion;
                  if (this.hls) {
                    this.hls.destroy();
                  }
                  if (this.dash) {
                    this.dash.reset();
                  }
                  if (this.shouldUseHLS(url)) {
                    (0, _utils.getSDK)(HLS_SDK_URL.replace('VERSION', hlsVersion), HLS_GLOBAL).then(function (Hls) {
                      _this2.hls = new Hls(hlsOptions);
                      _this2.hls.on(Hls.Events.MANIFEST_PARSED, function () {
                        _this2.props.onReady();
                      });
                      _this2.hls.on(Hls.Events.ERROR, function (e, data) {
                        _this2.props.onError(e, data, _this2.hls, Hls);
                      });
                      if (MATCH_CLOUDFLARE_STREAM.test(url)) {
                        var id = url.match(MATCH_CLOUDFLARE_STREAM)[1];
                        _this2.hls.loadSource(REPLACE_CLOUDFLARE_STREAM.replace('{id}', id));
                      } else {
                        _this2.hls.loadSource(url);
                      }
                      _this2.hls.attachMedia(_this2.player);
                      _this2.props.onLoaded();
                    });
                  }
                  if (this.shouldUseDASH(url)) {
                    (0, _utils.getSDK)(DASH_SDK_URL.replace('VERSION', dashVersion), DASH_GLOBAL).then(function (dashjs) {
                      _this2.dash = dashjs.MediaPlayer().create();
                      _this2.dash.initialize(_this2.player, url, _this2.props.playing);
                      _this2.dash.on('error', _this2.props.onError);
                      if (parseInt(dashVersion) < 3) {
                        _this2.dash.getDebug().setLogToBrowserConsole(false);
                      } else {
                        _this2.dash.updateSettings({
                          debug: {
                            logLevel: dashjs.Debug.LOG_LEVEL_NONE
                          }
                        });
                      }
                      _this2.props.onLoaded();
                    });
                  }
                  if (this.shouldUseFLV(url)) {
                    (0, _utils.getSDK)(FLV_SDK_URL.replace('VERSION', flvVersion), FLV_GLOBAL).then(function (flvjs) {
                      _this2.flv = flvjs.createPlayer({
                        type: 'flv',
                        url: url
                      });
                      _this2.flv.attachMediaElement(_this2.player);
                      _this2.flv.on(flvjs.Events.ERROR, function (e, data) {
                        _this2.props.onError(e, data, _this2.flv, flvjs);
                      });
                      _this2.flv.load();
                      _this2.props.onLoaded();
                    });
                  }
                  if (url instanceof Array) {
                    // When setting new urls (<source>) on an already loaded video,
                    // HTMLMediaElement.load() is needed to reset the media element
                    // and restart the media resource. Just replacing children source
                    // dom nodes is not enough
                    this.player.load();
                  } else if ((0, _utils.isMediaStream)(url)) {
                    try {
                      this.player.srcObject = url;
                    } catch (e) {
                      this.player.src = window.URL.createObjectURL(url);
                    }
                  }
                }
              }, {
                key: "play",
                value: function play() {
                  var promise = this.player.play();
                  if (promise) {
                    promise["catch"](this.props.onError);
                  }
                }
              }, {
                key: "pause",
                value: function pause() {
                  this.player.pause();
                }
              }, {
                key: "stop",
                value: function stop() {
                  this.player.removeAttribute('src');
                  if (this.dash) {
                    this.dash.reset();
                  }
                }
              }, {
                key: "seekTo",
                value: function seekTo(seconds) {
                  this.player.currentTime = seconds;
                }
              }, {
                key: "setVolume",
                value: function setVolume(fraction) {
                  this.player.volume = fraction;
                }
              }, {
                key: "enablePIP",
                value: function enablePIP() {
                  if (this.player.requestPictureInPicture && document.pictureInPictureElement !== this.player) {
                    this.player.requestPictureInPicture();
                  } else if ((0, _utils.supportsWebKitPresentationMode)(this.player) && this.player.webkitPresentationMode !== 'picture-in-picture') {
                    this.player.webkitSetPresentationMode('picture-in-picture');
                  }
                }
              }, {
                key: "disablePIP",
                value: function disablePIP() {
                  if (document.exitPictureInPicture && document.pictureInPictureElement === this.player) {
                    document.exitPictureInPicture();
                  } else if ((0, _utils.supportsWebKitPresentationMode)(this.player) && this.player.webkitPresentationMode !== 'inline') {
                    this.player.webkitSetPresentationMode('inline');
                  }
                }
              }, {
                key: "setPlaybackRate",
                value: function setPlaybackRate(rate) {
                  try {
                    this.player.playbackRate = rate;
                  } catch (error) {
                    this.props.onError(error);
                  }
                }
              }, {
                key: "getDuration",
                value: function getDuration() {
                  if (!this.player) return null;
                  var _this$player = this.player,
                    duration = _this$player.duration,
                    seekable = _this$player.seekable; // on iOS, live streams return Infinity for the duration
                  // so instead we use the end of the seekable timerange

                  if (duration === Infinity && seekable.length > 0) {
                    return seekable.end(seekable.length - 1);
                  }
                  return duration;
                }
              }, {
                key: "getCurrentTime",
                value: function getCurrentTime() {
                  if (!this.player) return null;
                  return this.player.currentTime;
                }
              }, {
                key: "getSecondsLoaded",
                value: function getSecondsLoaded() {
                  if (!this.player) return null;
                  var buffered = this.player.buffered;
                  if (buffered.length === 0) {
                    return 0;
                  }
                  var end = buffered.end(buffered.length - 1);
                  var duration = this.getDuration();
                  if (end > duration) {
                    return duration;
                  }
                  return end;
                }
              }, {
                key: "getSource",
                value: function getSource(url) {
                  var useHLS = this.shouldUseHLS(url);
                  var useDASH = this.shouldUseDASH(url);
                  var useFLV = this.shouldUseFLV(url);
                  if (url instanceof Array || (0, _utils.isMediaStream)(url) || useHLS || useDASH || useFLV) {
                    return undefined;
                  }
                  if (MATCH_DROPBOX_URL.test(url)) {
                    return url.replace('www.dropbox.com', 'dl.dropboxusercontent.com');
                  }
                  return url;
                }
              }, {
                key: "render",
                value: function render() {
                  var _this$props11 = this.props,
                    url = _this$props11.url,
                    playing = _this$props11.playing,
                    loop = _this$props11.loop,
                    controls = _this$props11.controls,
                    muted = _this$props11.muted,
                    config = _this$props11.config,
                    width = _this$props11.width,
                    height = _this$props11.height;
                  var useAudio = this.shouldUseAudio(this.props);
                  var Element = useAudio ? 'audio' : 'video';
                  var style = {
                    width: width === 'auto' ? width : '100%',
                    height: height === 'auto' ? height : '100%'
                  };
                  return /*#__PURE__*/_react["default"].createElement(Element, _extends({
                    ref: this.ref,
                    src: this.getSource(url),
                    style: style,
                    preload: "auto",
                    autoPlay: playing || undefined,
                    controls: controls,
                    muted: muted,
                    loop: loop
                  }, config.attributes), url instanceof Array && url.map(this.renderSourceElement), config.tracks.map(this.renderTrack));
                }
              }]);
              return FilePlayer;
            }(_react.Component);
            exports["default"] = FilePlayer;
            _defineProperty(FilePlayer, "displayName", 'FilePlayer');
            _defineProperty(FilePlayer, "canPlay", _patterns.canPlay.file);
          })(FilePlayer);
          return FilePlayer;
        }
        (function (exports) {
          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports["default"] = void 0;
          var _react = reactExports;
          var _utils = utils;
          var _patterns = patterns;
          function _typeof(obj) {
            "@babel/helpers - typeof";

            if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
              _typeof = function _typeof(obj) {
                return typeof obj;
              };
            } else {
              _typeof = function _typeof(obj) {
                return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
              };
            }
            return _typeof(obj);
          }
          function _getRequireWildcardCache() {
            if (typeof WeakMap !== "function") return null;
            var cache = new WeakMap();
            _getRequireWildcardCache = function _getRequireWildcardCache() {
              return cache;
            };
            return cache;
          }
          function _interopRequireWildcard(obj) {
            if (obj && obj.__esModule) {
              return obj;
            }
            if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
              return {
                "default": obj
              };
            }
            var cache = _getRequireWildcardCache();
            if (cache && cache.has(obj)) {
              return cache.get(obj);
            }
            var newObj = {};
            var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var key in obj) {
              if (Object.prototype.hasOwnProperty.call(obj, key)) {
                var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
                if (desc && (desc.get || desc.set)) {
                  Object.defineProperty(newObj, key, desc);
                } else {
                  newObj[key] = obj[key];
                }
              }
            }
            newObj["default"] = obj;
            if (cache) {
              cache.set(obj, newObj);
            }
            return newObj;
          }
          var _default = [{
            key: 'youtube',
            name: 'YouTube',
            canPlay: _patterns.canPlay.youtube,
            lazyPlayer: /*#__PURE__*/(0, _react.lazy)(function () {
              return Promise.resolve().then(function () {
                return _interopRequireWildcard(requireYouTube());
              });
            })
          }, {
            key: 'soundcloud',
            name: 'SoundCloud',
            canPlay: _patterns.canPlay.soundcloud,
            lazyPlayer: /*#__PURE__*/(0, _react.lazy)(function () {
              return Promise.resolve().then(function () {
                return _interopRequireWildcard(requireSoundCloud());
              });
            })
          }, {
            key: 'vimeo',
            name: 'Vimeo',
            canPlay: _patterns.canPlay.vimeo,
            lazyPlayer: /*#__PURE__*/(0, _react.lazy)(function () {
              return Promise.resolve().then(function () {
                return _interopRequireWildcard(requireVimeo());
              });
            })
          }, {
            key: 'facebook',
            name: 'Facebook',
            canPlay: _patterns.canPlay.facebook,
            lazyPlayer: /*#__PURE__*/(0, _react.lazy)(function () {
              return Promise.resolve().then(function () {
                return _interopRequireWildcard(requireFacebook());
              });
            })
          }, {
            key: 'streamable',
            name: 'Streamable',
            canPlay: _patterns.canPlay.streamable,
            lazyPlayer: /*#__PURE__*/(0, _react.lazy)(function () {
              return Promise.resolve().then(function () {
                return _interopRequireWildcard(requireStreamable());
              });
            })
          }, {
            key: 'wistia',
            name: 'Wistia',
            canPlay: _patterns.canPlay.wistia,
            lazyPlayer: /*#__PURE__*/(0, _react.lazy)(function () {
              return Promise.resolve().then(function () {
                return _interopRequireWildcard(requireWistia());
              });
            })
          }, {
            key: 'twitch',
            name: 'Twitch',
            canPlay: _patterns.canPlay.twitch,
            lazyPlayer: /*#__PURE__*/(0, _react.lazy)(function () {
              return Promise.resolve().then(function () {
                return _interopRequireWildcard(requireTwitch());
              });
            })
          }, {
            key: 'dailymotion',
            name: 'DailyMotion',
            canPlay: _patterns.canPlay.dailymotion,
            lazyPlayer: /*#__PURE__*/(0, _react.lazy)(function () {
              return Promise.resolve().then(function () {
                return _interopRequireWildcard(requireDailyMotion());
              });
            })
          }, {
            key: 'mixcloud',
            name: 'Mixcloud',
            canPlay: _patterns.canPlay.mixcloud,
            lazyPlayer: /*#__PURE__*/(0, _react.lazy)(function () {
              return Promise.resolve().then(function () {
                return _interopRequireWildcard(requireMixcloud());
              });
            })
          }, {
            key: 'vidyard',
            name: 'Vidyard',
            canPlay: _patterns.canPlay.vidyard,
            lazyPlayer: /*#__PURE__*/(0, _react.lazy)(function () {
              return Promise.resolve().then(function () {
                return _interopRequireWildcard(requireVidyard());
              });
            })
          }, {
            key: 'kaltura',
            name: 'Kaltura',
            canPlay: _patterns.canPlay.kaltura,
            lazyPlayer: /*#__PURE__*/(0, _react.lazy)(function () {
              return Promise.resolve().then(function () {
                return _interopRequireWildcard(requireKaltura());
              });
            })
          }, {
            key: 'file',
            name: 'FilePlayer',
            canPlay: _patterns.canPlay.file,
            canEnablePIP: function canEnablePIP(url) {
              return _patterns.canPlay.file(url) && (document.pictureInPictureEnabled || (0, _utils.supportsWebKitPresentationMode)()) && !_patterns.AUDIO_EXTENSIONS.test(url);
            },
            lazyPlayer: /*#__PURE__*/(0, _react.lazy)(function () {
              return Promise.resolve().then(function () {
                return _interopRequireWildcard(requireFilePlayer());
              });
            })
          }];
          exports["default"] = _default;
        })(players);
        var ReactPlayer$1 = {};
        var require$$2 = /*@__PURE__*/getAugmentedNamespace(memoizeOne_esm);

        /* global Map:readonly, Set:readonly, ArrayBuffer:readonly */

        var hasElementType = typeof Element !== 'undefined';
        var hasMap = typeof Map === 'function';
        var hasSet = typeof Set === 'function';
        var hasArrayBuffer = typeof ArrayBuffer === 'function' && !!ArrayBuffer.isView;

        // Note: We **don't** need `envHasBigInt64Array` in fde es6/index.js

        function equal(a, b) {
          // START: fast-deep-equal es6/index.js 3.1.3
          if (a === b) return true;
          if (a && b && _typeof2(a) == 'object' && _typeof2(b) == 'object') {
            if (a.constructor !== b.constructor) return false;
            var length, i, keys;
            if (Array.isArray(a)) {
              length = a.length;
              if (length != b.length) return false;
              for (i = length; i-- !== 0;) if (!equal(a[i], b[i])) return false;
              return true;
            }

            // START: Modifications:
            // 1. Extra `has<Type> &&` helpers in initial condition allow es6 code
            //    to co-exist with es5.
            // 2. Replace `for of` with es5 compliant iteration using `for`.
            //    Basically, take:
            //
            //    ```js
            //    for (i of a.entries())
            //      if (!b.has(i[0])) return false;
            //    ```
            //
            //    ... and convert to:
            //
            //    ```js
            //    it = a.entries();
            //    while (!(i = it.next()).done)
            //      if (!b.has(i.value[0])) return false;
            //    ```
            //
            //    **Note**: `i` access switches to `i.value`.
            var it;
            if (hasMap && a instanceof Map && b instanceof Map) {
              if (a.size !== b.size) return false;
              it = a.entries();
              while (!(i = it.next()).done) if (!b.has(i.value[0])) return false;
              it = a.entries();
              while (!(i = it.next()).done) if (!equal(i.value[1], b.get(i.value[0]))) return false;
              return true;
            }
            if (hasSet && a instanceof Set && b instanceof Set) {
              if (a.size !== b.size) return false;
              it = a.entries();
              while (!(i = it.next()).done) if (!b.has(i.value[0])) return false;
              return true;
            }
            // END: Modifications

            if (hasArrayBuffer && ArrayBuffer.isView(a) && ArrayBuffer.isView(b)) {
              length = a.length;
              if (length != b.length) return false;
              for (i = length; i-- !== 0;) if (a[i] !== b[i]) return false;
              return true;
            }
            if (a.constructor === RegExp) return a.source === b.source && a.flags === b.flags;
            // START: Modifications:
            // Apply guards for `Object.create(null)` handling. See:
            // - https://github.com/FormidableLabs/react-fast-compare/issues/64
            // - https://github.com/epoberezkin/fast-deep-equal/issues/49
            if (a.valueOf !== Object.prototype.valueOf && typeof a.valueOf === 'function' && typeof b.valueOf === 'function') return a.valueOf() === b.valueOf();
            if (a.toString !== Object.prototype.toString && typeof a.toString === 'function' && typeof b.toString === 'function') return a.toString() === b.toString();
            // END: Modifications

            keys = Object.keys(a);
            length = keys.length;
            if (length !== Object.keys(b).length) return false;
            for (i = length; i-- !== 0;) if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return false;
            // END: fast-deep-equal

            // START: react-fast-compare
            // custom handling for DOM elements
            if (hasElementType && a instanceof Element) return false;

            // custom handling for React/Preact
            for (i = length; i-- !== 0;) {
              if ((keys[i] === '_owner' || keys[i] === '__v' || keys[i] === '__o') && a.$$typeof) {
                // React-specific: avoid traversing React elements' _owner
                // Preact-specific: avoid traversing Preact elements' __v and __o
                //    __v = $_original / $_vnode
                //    __o = $_owner
                // These properties contain circular references and are not needed when
                // comparing the actual elements (and not their owners)
                // .$$typeof and ._store on just reasonable markers of elements

                continue;
              }

              // all other properties should be traversed as usual
              if (!equal(a[keys[i]], b[keys[i]])) return false;
            }
            // END: react-fast-compare

            // START: fast-deep-equal
            return true;
          }
          return a !== a && b !== b;
        }
        // end fast-deep-equal

        var reactFastCompare = function isEqual(a, b) {
          try {
            return equal(a, b);
          } catch (error) {
            if ((error.message || '').match(/stack|recursion/i)) {
              // warn on circular references, don't crash
              // browsers give this different errors name and messages:
              // chrome/safari: "RangeError", "Maximum call stack size exceeded"
              // firefox: "InternalError", too much recursion"
              // edge: "Error", "Out of stack space"
              console.warn('react-fast-compare cannot handle circular refs');
              return false;
            }
            // some other error. we should definitely know about these
            throw error;
          }
        };
        var props = {};
        Object.defineProperty(props, "__esModule", {
          value: true
        });
        props.defaultProps = props.propTypes = void 0;
        var _propTypes = _interopRequireDefault$1(propTypesExports);
        function _interopRequireDefault$1(obj) {
          return obj && obj.__esModule ? obj : {
            "default": obj
          };
        }
        var string = _propTypes["default"].string,
          bool = _propTypes["default"].bool,
          number = _propTypes["default"].number,
          array = _propTypes["default"].array,
          oneOfType = _propTypes["default"].oneOfType,
          shape = _propTypes["default"].shape,
          object = _propTypes["default"].object,
          func = _propTypes["default"].func,
          node = _propTypes["default"].node;
        var propTypes = {
          url: oneOfType([string, array, object]),
          playing: bool,
          loop: bool,
          controls: bool,
          volume: number,
          muted: bool,
          playbackRate: number,
          width: oneOfType([string, number]),
          height: oneOfType([string, number]),
          style: object,
          progressInterval: number,
          playsinline: bool,
          pip: bool,
          stopOnUnmount: bool,
          light: oneOfType([bool, string, object]),
          playIcon: node,
          previewTabIndex: number,
          fallback: node,
          oEmbedUrl: string,
          wrapper: oneOfType([string, func, shape({
            render: func.isRequired
          })]),
          config: shape({
            soundcloud: shape({
              options: object
            }),
            youtube: shape({
              playerVars: object,
              embedOptions: object,
              onUnstarted: func
            }),
            facebook: shape({
              appId: string,
              version: string,
              playerId: string,
              attributes: object
            }),
            dailymotion: shape({
              params: object
            }),
            vimeo: shape({
              playerOptions: object,
              title: string
            }),
            file: shape({
              attributes: object,
              tracks: array,
              forceVideo: bool,
              forceAudio: bool,
              forceHLS: bool,
              forceSafariHLS: bool,
              forceDASH: bool,
              forceFLV: bool,
              hlsOptions: object,
              hlsVersion: string,
              dashVersion: string,
              flvVersion: string
            }),
            wistia: shape({
              options: object,
              playerId: string,
              customControls: array
            }),
            mixcloud: shape({
              options: object
            }),
            twitch: shape({
              options: object,
              playerId: string
            }),
            vidyard: shape({
              options: object
            })
          }),
          onReady: func,
          onStart: func,
          onPlay: func,
          onPause: func,
          onBuffer: func,
          onBufferEnd: func,
          onEnded: func,
          onError: func,
          onDuration: func,
          onSeek: func,
          onPlaybackRateChange: func,
          onProgress: func,
          onClickPreview: func,
          onEnablePIP: func,
          onDisablePIP: func
        };
        props.propTypes = propTypes;
        var noop = function noop() {};
        var defaultProps = {
          playing: false,
          loop: false,
          controls: false,
          volume: null,
          muted: false,
          playbackRate: 1,
          width: '640px',
          height: '360px',
          style: {},
          progressInterval: 1000,
          playsinline: false,
          pip: false,
          stopOnUnmount: true,
          light: false,
          fallback: null,
          wrapper: 'div',
          previewTabIndex: 0,
          oEmbedUrl: 'https://noembed.com/embed?url={url}',
          config: {
            soundcloud: {
              options: {
                visual: true,
                // Undocumented, but makes player fill container and look better
                buying: false,
                liking: false,
                download: false,
                sharing: false,
                show_comments: false,
                show_playcount: false
              }
            },
            youtube: {
              playerVars: {
                playsinline: 1,
                showinfo: 0,
                rel: 0,
                iv_load_policy: 3,
                modestbranding: 1
              },
              embedOptions: {},
              onUnstarted: noop
            },
            facebook: {
              appId: '1309697205772819',
              version: 'v3.3',
              playerId: null,
              attributes: {}
            },
            dailymotion: {
              params: {
                api: 1,
                'endscreen-enable': false
              }
            },
            vimeo: {
              playerOptions: {
                autopause: false,
                byline: false,
                portrait: false,
                title: false
              },
              title: null
            },
            file: {
              attributes: {},
              tracks: [],
              forceVideo: false,
              forceAudio: false,
              forceHLS: false,
              forceDASH: false,
              forceFLV: false,
              hlsOptions: {},
              hlsVersion: '1.1.4',
              dashVersion: '3.1.3',
              flvVersion: '1.5.0'
            },
            wistia: {
              options: {},
              playerId: null,
              customControls: null
            },
            mixcloud: {
              options: {
                hide_cover: 1
              }
            },
            twitch: {
              options: {},
              playerId: null
            },
            vidyard: {
              options: {}
            }
          },
          onReady: noop,
          onStart: noop,
          onPlay: noop,
          onPause: noop,
          onBuffer: noop,
          onBufferEnd: noop,
          onEnded: noop,
          onError: noop,
          onDuration: noop,
          onSeek: noop,
          onPlaybackRateChange: noop,
          onProgress: noop,
          onClickPreview: noop,
          onEnablePIP: noop,
          onDisablePIP: noop
        };
        props.defaultProps = defaultProps;
        var Player = {};
        (function (exports) {
          function _typeof(obj) {
            "@babel/helpers - typeof";

            if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
              _typeof = function _typeof(obj) {
                return typeof obj;
              };
            } else {
              _typeof = function _typeof(obj) {
                return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
              };
            }
            return _typeof(obj);
          }
          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports["default"] = void 0;
          var _react = _interopRequireWildcard(reactExports);
          var _reactFastCompare = _interopRequireDefault(reactFastCompare);
          var _props = props;
          var _utils = utils;
          function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
              "default": obj
            };
          }
          function _getRequireWildcardCache() {
            if (typeof WeakMap !== "function") return null;
            var cache = new WeakMap();
            _getRequireWildcardCache = function _getRequireWildcardCache() {
              return cache;
            };
            return cache;
          }
          function _interopRequireWildcard(obj) {
            if (obj && obj.__esModule) {
              return obj;
            }
            if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
              return {
                "default": obj
              };
            }
            var cache = _getRequireWildcardCache();
            if (cache && cache.has(obj)) {
              return cache.get(obj);
            }
            var newObj = {};
            var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var key in obj) {
              if (Object.prototype.hasOwnProperty.call(obj, key)) {
                var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
                if (desc && (desc.get || desc.set)) {
                  Object.defineProperty(newObj, key, desc);
                } else {
                  newObj[key] = obj[key];
                }
              }
            }
            newObj["default"] = obj;
            if (cache) {
              cache.set(obj, newObj);
            }
            return newObj;
          }
          function _extends() {
            _extends = Object.assign || function (target) {
              for (var i = 1; i < arguments.length; i++) {
                var source = arguments[i];
                for (var key in source) {
                  if (Object.prototype.hasOwnProperty.call(source, key)) {
                    target[key] = source[key];
                  }
                }
              }
              return target;
            };
            return _extends.apply(this, arguments);
          }
          function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
              throw new TypeError("Cannot call a class as a function");
            }
          }
          function _defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
              var descriptor = props[i];
              descriptor.enumerable = descriptor.enumerable || false;
              descriptor.configurable = true;
              if ("value" in descriptor) descriptor.writable = true;
              Object.defineProperty(target, descriptor.key, descriptor);
            }
          }
          function _createClass(Constructor, protoProps, staticProps) {
            if (protoProps) _defineProperties(Constructor.prototype, protoProps);
            if (staticProps) _defineProperties(Constructor, staticProps);
            return Constructor;
          }
          function _inherits(subClass, superClass) {
            if (typeof superClass !== "function" && superClass !== null) {
              throw new TypeError("Super expression must either be null or a function");
            }
            subClass.prototype = Object.create(superClass && superClass.prototype, {
              constructor: {
                value: subClass,
                writable: true,
                configurable: true
              }
            });
            if (superClass) _setPrototypeOf(subClass, superClass);
          }
          function _setPrototypeOf(o, p) {
            _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
              o.__proto__ = p;
              return o;
            };
            return _setPrototypeOf(o, p);
          }
          function _createSuper(Derived) {
            var hasNativeReflectConstruct = _isNativeReflectConstruct();
            return function _createSuperInternal() {
              var Super = _getPrototypeOf(Derived),
                result;
              if (hasNativeReflectConstruct) {
                var NewTarget = _getPrototypeOf(this).constructor;
                result = Reflect.construct(Super, arguments, NewTarget);
              } else {
                result = Super.apply(this, arguments);
              }
              return _possibleConstructorReturn(this, result);
            };
          }
          function _possibleConstructorReturn(self, call) {
            if (call && (_typeof(call) === "object" || typeof call === "function")) {
              return call;
            }
            return _assertThisInitialized(self);
          }
          function _assertThisInitialized(self) {
            if (self === void 0) {
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            }
            return self;
          }
          function _isNativeReflectConstruct() {
            if (typeof Reflect === "undefined" || !Reflect.construct) return false;
            if (Reflect.construct.sham) return false;
            if (typeof Proxy === "function") return true;
            try {
              Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
              return true;
            } catch (e) {
              return false;
            }
          }
          function _getPrototypeOf(o) {
            _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
              return o.__proto__ || Object.getPrototypeOf(o);
            };
            return _getPrototypeOf(o);
          }
          function _defineProperty(obj, key, value) {
            if (key in obj) {
              Object.defineProperty(obj, key, {
                value: value,
                enumerable: true,
                configurable: true,
                writable: true
              });
            } else {
              obj[key] = value;
            }
            return obj;
          }
          var SEEK_ON_PLAY_EXPIRY = 5000;
          var Player = /*#__PURE__*/function (_Component) {
            _inherits(Player, _Component);
            var _super = _createSuper(Player);
            function Player() {
              var _this;
              _classCallCheck(this, Player);
              for (var _len = arguments.length, _args = new Array(_len), _key = 0; _key < _len; _key++) {
                _args[_key] = arguments[_key];
              }
              _this = _super.call.apply(_super, [this].concat(_args));
              _defineProperty(_assertThisInitialized(_this), "mounted", false);
              _defineProperty(_assertThisInitialized(_this), "isReady", false);
              _defineProperty(_assertThisInitialized(_this), "isPlaying", false);
              _defineProperty(_assertThisInitialized(_this), "isLoading", true);
              _defineProperty(_assertThisInitialized(_this), "loadOnReady", null);
              _defineProperty(_assertThisInitialized(_this), "startOnPlay", true);
              _defineProperty(_assertThisInitialized(_this), "seekOnPlay", null);
              _defineProperty(_assertThisInitialized(_this), "onDurationCalled", false);
              _defineProperty(_assertThisInitialized(_this), "handlePlayerMount", function (player) {
                if (_this.player) {
                  _this.progress(); // Ensure onProgress is still called in strict mode

                  return; // Return here to prevent loading twice in strict mode
                }

                _this.player = player;
                _this.player.load(_this.props.url);
                _this.progress();
              });
              _defineProperty(_assertThisInitialized(_this), "getInternalPlayer", function (key) {
                if (!_this.player) return null;
                return _this.player[key];
              });
              _defineProperty(_assertThisInitialized(_this), "progress", function () {
                if (_this.props.url && _this.player && _this.isReady) {
                  var playedSeconds = _this.getCurrentTime() || 0;
                  var loadedSeconds = _this.getSecondsLoaded();
                  var duration = _this.getDuration();
                  if (duration) {
                    var progress = {
                      playedSeconds: playedSeconds,
                      played: playedSeconds / duration
                    };
                    if (loadedSeconds !== null) {
                      progress.loadedSeconds = loadedSeconds;
                      progress.loaded = loadedSeconds / duration;
                    } // Only call onProgress if values have changed

                    if (progress.playedSeconds !== _this.prevPlayed || progress.loadedSeconds !== _this.prevLoaded) {
                      _this.props.onProgress(progress);
                    }
                    _this.prevPlayed = progress.playedSeconds;
                    _this.prevLoaded = progress.loadedSeconds;
                  }
                }
                _this.progressTimeout = setTimeout(_this.progress, _this.props.progressFrequency || _this.props.progressInterval);
              });
              _defineProperty(_assertThisInitialized(_this), "handleReady", function () {
                if (!_this.mounted) return;
                _this.isReady = true;
                _this.isLoading = false;
                var _this$props = _this.props,
                  onReady = _this$props.onReady,
                  playing = _this$props.playing,
                  volume = _this$props.volume,
                  muted = _this$props.muted;
                onReady();
                if (!muted && volume !== null) {
                  _this.player.setVolume(volume);
                }
                if (_this.loadOnReady) {
                  _this.player.load(_this.loadOnReady, true);
                  _this.loadOnReady = null;
                } else if (playing) {
                  _this.player.play();
                }
                _this.handleDurationCheck();
              });
              _defineProperty(_assertThisInitialized(_this), "handlePlay", function () {
                _this.isPlaying = true;
                _this.isLoading = false;
                var _this$props2 = _this.props,
                  onStart = _this$props2.onStart,
                  onPlay = _this$props2.onPlay,
                  playbackRate = _this$props2.playbackRate;
                if (_this.startOnPlay) {
                  if (_this.player.setPlaybackRate && playbackRate !== 1) {
                    _this.player.setPlaybackRate(playbackRate);
                  }
                  onStart();
                  _this.startOnPlay = false;
                }
                onPlay();
                if (_this.seekOnPlay) {
                  _this.seekTo(_this.seekOnPlay);
                  _this.seekOnPlay = null;
                }
                _this.handleDurationCheck();
              });
              _defineProperty(_assertThisInitialized(_this), "handlePause", function (e) {
                _this.isPlaying = false;
                if (!_this.isLoading) {
                  _this.props.onPause(e);
                }
              });
              _defineProperty(_assertThisInitialized(_this), "handleEnded", function () {
                var _this$props3 = _this.props,
                  activePlayer = _this$props3.activePlayer,
                  loop = _this$props3.loop,
                  onEnded = _this$props3.onEnded;
                if (activePlayer.loopOnEnded && loop) {
                  _this.seekTo(0);
                }
                if (!loop) {
                  _this.isPlaying = false;
                  onEnded();
                }
              });
              _defineProperty(_assertThisInitialized(_this), "handleError", function () {
                var _this$props4;
                _this.isLoading = false;
                (_this$props4 = _this.props).onError.apply(_this$props4, arguments);
              });
              _defineProperty(_assertThisInitialized(_this), "handleDurationCheck", function () {
                clearTimeout(_this.durationCheckTimeout);
                var duration = _this.getDuration();
                if (duration) {
                  if (!_this.onDurationCalled) {
                    _this.props.onDuration(duration);
                    _this.onDurationCalled = true;
                  }
                } else {
                  _this.durationCheckTimeout = setTimeout(_this.handleDurationCheck, 100);
                }
              });
              _defineProperty(_assertThisInitialized(_this), "handleLoaded", function () {
                // Sometimes we know loading has stopped but onReady/onPlay are never called
                // so this provides a way for players to avoid getting stuck
                _this.isLoading = false;
              });
              return _this;
            }
            _createClass(Player, [{
              key: "componentDidMount",
              value: function componentDidMount() {
                this.mounted = true;
              }
            }, {
              key: "componentWillUnmount",
              value: function componentWillUnmount() {
                clearTimeout(this.progressTimeout);
                clearTimeout(this.durationCheckTimeout);
                if (this.isReady && this.props.stopOnUnmount) {
                  this.player.stop();
                  if (this.player.disablePIP) {
                    this.player.disablePIP();
                  }
                }
                this.mounted = false;
              }
            }, {
              key: "componentDidUpdate",
              value: function componentDidUpdate(prevProps) {
                var _this2 = this;

                // If there isn’t a player available, don’t do anything
                if (!this.player) {
                  return;
                } // Invoke player methods based on changed props

                var _this$props5 = this.props,
                  url = _this$props5.url,
                  playing = _this$props5.playing,
                  volume = _this$props5.volume,
                  muted = _this$props5.muted,
                  playbackRate = _this$props5.playbackRate,
                  pip = _this$props5.pip,
                  loop = _this$props5.loop,
                  activePlayer = _this$props5.activePlayer,
                  disableDeferredLoading = _this$props5.disableDeferredLoading;
                if (!(0, _reactFastCompare["default"])(prevProps.url, url)) {
                  if (this.isLoading && !activePlayer.forceLoad && !disableDeferredLoading && !(0, _utils.isMediaStream)(url)) {
                    console.warn("ReactPlayer: the attempt to load ".concat(url, " is being deferred until the player has loaded"));
                    this.loadOnReady = url;
                    return;
                  }
                  this.isLoading = true;
                  this.startOnPlay = true;
                  this.onDurationCalled = false;
                  this.player.load(url, this.isReady);
                }
                if (!prevProps.playing && playing && !this.isPlaying) {
                  this.player.play();
                }
                if (prevProps.playing && !playing && this.isPlaying) {
                  this.player.pause();
                }
                if (!prevProps.pip && pip && this.player.enablePIP) {
                  this.player.enablePIP();
                }
                if (prevProps.pip && !pip && this.player.disablePIP) {
                  this.player.disablePIP();
                }
                if (prevProps.volume !== volume && volume !== null) {
                  this.player.setVolume(volume);
                }
                if (prevProps.muted !== muted) {
                  if (muted) {
                    this.player.mute();
                  } else {
                    this.player.unmute();
                    if (volume !== null) {
                      // Set volume next tick to fix a bug with DailyMotion
                      setTimeout(function () {
                        return _this2.player.setVolume(volume);
                      });
                    }
                  }
                }
                if (prevProps.playbackRate !== playbackRate && this.player.setPlaybackRate) {
                  this.player.setPlaybackRate(playbackRate);
                }
                if (prevProps.loop !== loop && this.player.setLoop) {
                  this.player.setLoop(loop);
                }
              }
            }, {
              key: "getDuration",
              value: function getDuration() {
                if (!this.isReady) return null;
                return this.player.getDuration();
              }
            }, {
              key: "getCurrentTime",
              value: function getCurrentTime() {
                if (!this.isReady) return null;
                return this.player.getCurrentTime();
              }
            }, {
              key: "getSecondsLoaded",
              value: function getSecondsLoaded() {
                if (!this.isReady) return null;
                return this.player.getSecondsLoaded();
              }
            }, {
              key: "seekTo",
              value: function seekTo(amount, type) {
                var _this3 = this;

                // When seeking before player is ready, store value and seek later
                if (!this.isReady) {
                  if (amount !== 0) {
                    this.seekOnPlay = amount;
                    setTimeout(function () {
                      _this3.seekOnPlay = null;
                    }, SEEK_ON_PLAY_EXPIRY);
                  }
                  return;
                }
                var isFraction = !type ? amount > 0 && amount < 1 : type === 'fraction';
                if (isFraction) {
                  // Convert fraction to seconds based on duration
                  var duration = this.player.getDuration();
                  if (!duration) {
                    console.warn('ReactPlayer: could not seek using fraction – duration not yet available');
                    return;
                  }
                  this.player.seekTo(duration * amount);
                  return;
                }
                this.player.seekTo(amount);
              }
            }, {
              key: "render",
              value: function render() {
                var Player = this.props.activePlayer;
                if (!Player) {
                  return null;
                }
                return /*#__PURE__*/_react["default"].createElement(Player, _extends({}, this.props, {
                  onMount: this.handlePlayerMount,
                  onReady: this.handleReady,
                  onPlay: this.handlePlay,
                  onPause: this.handlePause,
                  onEnded: this.handleEnded,
                  onLoaded: this.handleLoaded,
                  onError: this.handleError
                }));
              }
            }]);
            return Player;
          }(_react.Component);
          exports["default"] = Player;
          _defineProperty(Player, "displayName", 'Player');
          _defineProperty(Player, "propTypes", _props.propTypes);
          _defineProperty(Player, "defaultProps", _props.defaultProps);
        })(Player);
        var Preview$1 = {};
        var hasRequiredPreview;
        function requirePreview() {
          if (hasRequiredPreview) return Preview$1;
          hasRequiredPreview = 1;
          (function (exports) {
            function _typeof(obj) {
              "@babel/helpers - typeof";

              if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
                _typeof = function _typeof(obj) {
                  return typeof obj;
                };
              } else {
                _typeof = function _typeof(obj) {
                  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
                };
              }
              return _typeof(obj);
            }
            Object.defineProperty(exports, "__esModule", {
              value: true
            });
            exports["default"] = void 0;
            var _react = _interopRequireWildcard(reactExports);
            function _getRequireWildcardCache() {
              if (typeof WeakMap !== "function") return null;
              var cache = new WeakMap();
              _getRequireWildcardCache = function _getRequireWildcardCache() {
                return cache;
              };
              return cache;
            }
            function _interopRequireWildcard(obj) {
              if (obj && obj.__esModule) {
                return obj;
              }
              if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
                return {
                  "default": obj
                };
              }
              var cache = _getRequireWildcardCache();
              if (cache && cache.has(obj)) {
                return cache.get(obj);
              }
              var newObj = {};
              var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
              for (var key in obj) {
                if (Object.prototype.hasOwnProperty.call(obj, key)) {
                  var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
                  if (desc && (desc.get || desc.set)) {
                    Object.defineProperty(newObj, key, desc);
                  } else {
                    newObj[key] = obj[key];
                  }
                }
              }
              newObj["default"] = obj;
              if (cache) {
                cache.set(obj, newObj);
              }
              return newObj;
            }
            function ownKeys(object, enumerableOnly) {
              var keys = Object.keys(object);
              if (Object.getOwnPropertySymbols) {
                var symbols = Object.getOwnPropertySymbols(object);
                if (enumerableOnly) symbols = symbols.filter(function (sym) {
                  return Object.getOwnPropertyDescriptor(object, sym).enumerable;
                });
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
            function _classCallCheck(instance, Constructor) {
              if (!(instance instanceof Constructor)) {
                throw new TypeError("Cannot call a class as a function");
              }
            }
            function _defineProperties(target, props) {
              for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor) descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
              }
            }
            function _createClass(Constructor, protoProps, staticProps) {
              if (protoProps) _defineProperties(Constructor.prototype, protoProps);
              if (staticProps) _defineProperties(Constructor, staticProps);
              return Constructor;
            }
            function _inherits(subClass, superClass) {
              if (typeof superClass !== "function" && superClass !== null) {
                throw new TypeError("Super expression must either be null or a function");
              }
              subClass.prototype = Object.create(superClass && superClass.prototype, {
                constructor: {
                  value: subClass,
                  writable: true,
                  configurable: true
                }
              });
              if (superClass) _setPrototypeOf(subClass, superClass);
            }
            function _setPrototypeOf(o, p) {
              _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
                o.__proto__ = p;
                return o;
              };
              return _setPrototypeOf(o, p);
            }
            function _createSuper(Derived) {
              var hasNativeReflectConstruct = _isNativeReflectConstruct();
              return function _createSuperInternal() {
                var Super = _getPrototypeOf(Derived),
                  result;
                if (hasNativeReflectConstruct) {
                  var NewTarget = _getPrototypeOf(this).constructor;
                  result = Reflect.construct(Super, arguments, NewTarget);
                } else {
                  result = Super.apply(this, arguments);
                }
                return _possibleConstructorReturn(this, result);
              };
            }
            function _possibleConstructorReturn(self, call) {
              if (call && (_typeof(call) === "object" || typeof call === "function")) {
                return call;
              }
              return _assertThisInitialized(self);
            }
            function _assertThisInitialized(self) {
              if (self === void 0) {
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
              }
              return self;
            }
            function _isNativeReflectConstruct() {
              if (typeof Reflect === "undefined" || !Reflect.construct) return false;
              if (Reflect.construct.sham) return false;
              if (typeof Proxy === "function") return true;
              try {
                Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
                return true;
              } catch (e) {
                return false;
              }
            }
            function _getPrototypeOf(o) {
              _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
                return o.__proto__ || Object.getPrototypeOf(o);
              };
              return _getPrototypeOf(o);
            }
            function _defineProperty(obj, key, value) {
              if (key in obj) {
                Object.defineProperty(obj, key, {
                  value: value,
                  enumerable: true,
                  configurable: true,
                  writable: true
                });
              } else {
                obj[key] = value;
              }
              return obj;
            }
            var ICON_SIZE = '64px';
            var cache = {};
            var Preview = /*#__PURE__*/function (_Component) {
              _inherits(Preview, _Component);
              var _super = _createSuper(Preview);
              function Preview() {
                var _this;
                _classCallCheck(this, Preview);
                for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                  args[_key] = arguments[_key];
                }
                _this = _super.call.apply(_super, [this].concat(args));
                _defineProperty(_assertThisInitialized(_this), "mounted", false);
                _defineProperty(_assertThisInitialized(_this), "state", {
                  image: null
                });
                _defineProperty(_assertThisInitialized(_this), "handleKeyPress", function (e) {
                  if (e.key === 'Enter' || e.key === ' ') {
                    _this.props.onClick();
                  }
                });
                return _this;
              }
              _createClass(Preview, [{
                key: "componentDidMount",
                value: function componentDidMount() {
                  this.mounted = true;
                  this.fetchImage(this.props);
                }
              }, {
                key: "componentDidUpdate",
                value: function componentDidUpdate(prevProps) {
                  var _this$props = this.props,
                    url = _this$props.url,
                    light = _this$props.light;
                  if (prevProps.url !== url || prevProps.light !== light) {
                    this.fetchImage(this.props);
                  }
                }
              }, {
                key: "componentWillUnmount",
                value: function componentWillUnmount() {
                  this.mounted = false;
                }
              }, {
                key: "fetchImage",
                value: function fetchImage(_ref) {
                  var _this2 = this;
                  var url = _ref.url,
                    light = _ref.light,
                    oEmbedUrl = _ref.oEmbedUrl;
                  if ( /*#__PURE__*/_react["default"].isValidElement(light)) {
                    return;
                  }
                  if (typeof light === 'string') {
                    this.setState({
                      image: light
                    });
                    return;
                  }
                  if (cache[url]) {
                    this.setState({
                      image: cache[url]
                    });
                    return;
                  }
                  this.setState({
                    image: null
                  });
                  return window.fetch(oEmbedUrl.replace('{url}', url)).then(function (response) {
                    return response.json();
                  }).then(function (data) {
                    if (data.thumbnail_url && _this2.mounted) {
                      var image = data.thumbnail_url.replace('height=100', 'height=480').replace('-d_295x166', '-d_640');
                      _this2.setState({
                        image: image
                      });
                      cache[url] = image;
                    }
                  });
                }
              }, {
                key: "render",
                value: function render() {
                  var _this$props2 = this.props,
                    light = _this$props2.light,
                    onClick = _this$props2.onClick,
                    playIcon = _this$props2.playIcon,
                    previewTabIndex = _this$props2.previewTabIndex;
                  var image = this.state.image;
                  var isElement = /*#__PURE__*/_react["default"].isValidElement(light);
                  var flexCenter = {
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  };
                  var styles = {
                    preview: _objectSpread({
                      width: '100%',
                      height: '100%',
                      backgroundImage: image && !isElement ? "url(".concat(image, ")") : undefined,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      cursor: 'pointer'
                    }, flexCenter),
                    shadow: _objectSpread({
                      background: 'radial-gradient(rgb(0, 0, 0, 0.3), rgba(0, 0, 0, 0) 60%)',
                      borderRadius: ICON_SIZE,
                      width: ICON_SIZE,
                      height: ICON_SIZE,
                      position: isElement ? 'absolute' : undefined
                    }, flexCenter),
                    playIcon: {
                      borderStyle: 'solid',
                      borderWidth: '16px 0 16px 26px',
                      borderColor: 'transparent transparent transparent white',
                      marginLeft: '7px'
                    }
                  };
                  var defaultPlayIcon = /*#__PURE__*/_react["default"].createElement("div", {
                    style: styles.shadow,
                    className: "react-player__shadow"
                  }, /*#__PURE__*/_react["default"].createElement("div", {
                    style: styles.playIcon,
                    className: "react-player__play-icon"
                  }));
                  return /*#__PURE__*/_react["default"].createElement("div", {
                    style: styles.preview,
                    className: "react-player__preview",
                    onClick: onClick,
                    tabIndex: previewTabIndex,
                    onKeyPress: this.handleKeyPress
                  }, isElement ? light : null, playIcon || defaultPlayIcon);
                }
              }]);
              return Preview;
            }(_react.Component);
            exports["default"] = Preview;
          })(Preview$1);
          return Preview$1;
        }
        Object.defineProperty(ReactPlayer$1, "__esModule", {
          value: true
        });
        ReactPlayer$1.createReactPlayer = void 0;
        var _react = _interopRequireWildcard(reactExports);
        var _deepmerge = _interopRequireDefault(cjs);
        var _memoizeOne = _interopRequireDefault(require$$2);
        var _reactFastCompare = _interopRequireDefault(reactFastCompare);
        var _props = props;
        var _utils = utils;
        var _Player3 = _interopRequireDefault(Player);
        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : {
            "default": obj
          };
        }
        function _typeof(obj) {
          "@babel/helpers - typeof";

          if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
            _typeof = function _typeof(obj) {
              return typeof obj;
            };
          } else {
            _typeof = function _typeof(obj) {
              return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
            };
          }
          return _typeof(obj);
        }
        function ownKeys(object, enumerableOnly) {
          var keys = Object.keys(object);
          if (Object.getOwnPropertySymbols) {
            var symbols = Object.getOwnPropertySymbols(object);
            if (enumerableOnly) symbols = symbols.filter(function (sym) {
              return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
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
        function _extends() {
          _extends = Object.assign || function (target) {
            for (var i = 1; i < arguments.length; i++) {
              var source = arguments[i];
              for (var key in source) {
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                  target[key] = source[key];
                }
              }
            }
            return target;
          };
          return _extends.apply(this, arguments);
        }
        function _toConsumableArray(arr) {
          return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
        }
        function _nonIterableSpread() {
          throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
        function _unsupportedIterableToArray(o, minLen) {
          if (!o) return;
          if (typeof o === "string") return _arrayLikeToArray(o, minLen);
          var n = Object.prototype.toString.call(o).slice(8, -1);
          if (n === "Object" && o.constructor) n = o.constructor.name;
          if (n === "Map" || n === "Set") return Array.from(o);
          if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
        }
        function _iterableToArray(iter) {
          if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
        }
        function _arrayWithoutHoles(arr) {
          if (Array.isArray(arr)) return _arrayLikeToArray(arr);
        }
        function _arrayLikeToArray(arr, len) {
          if (len == null || len > arr.length) len = arr.length;
          for (var i = 0, arr2 = new Array(len); i < len; i++) {
            arr2[i] = arr[i];
          }
          return arr2;
        }
        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }
        function _defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }
        function _createClass(Constructor, protoProps, staticProps) {
          if (protoProps) _defineProperties(Constructor.prototype, protoProps);
          if (staticProps) _defineProperties(Constructor, staticProps);
          return Constructor;
        }
        function _inherits(subClass, superClass) {
          if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function");
          }
          subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: {
              value: subClass,
              writable: true,
              configurable: true
            }
          });
          if (superClass) _setPrototypeOf(subClass, superClass);
        }
        function _setPrototypeOf(o, p) {
          _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
            o.__proto__ = p;
            return o;
          };
          return _setPrototypeOf(o, p);
        }
        function _createSuper(Derived) {
          var hasNativeReflectConstruct = _isNativeReflectConstruct();
          return function _createSuperInternal() {
            var Super = _getPrototypeOf(Derived),
              result;
            if (hasNativeReflectConstruct) {
              var NewTarget = _getPrototypeOf(this).constructor;
              result = Reflect.construct(Super, arguments, NewTarget);
            } else {
              result = Super.apply(this, arguments);
            }
            return _possibleConstructorReturn(this, result);
          };
        }
        function _possibleConstructorReturn(self, call) {
          if (call && (_typeof(call) === "object" || typeof call === "function")) {
            return call;
          }
          return _assertThisInitialized(self);
        }
        function _assertThisInitialized(self) {
          if (self === void 0) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          }
          return self;
        }
        function _isNativeReflectConstruct() {
          if (typeof Reflect === "undefined" || !Reflect.construct) return false;
          if (Reflect.construct.sham) return false;
          if (typeof Proxy === "function") return true;
          try {
            Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
            return true;
          } catch (e) {
            return false;
          }
        }
        function _getPrototypeOf(o) {
          _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
            return o.__proto__ || Object.getPrototypeOf(o);
          };
          return _getPrototypeOf(o);
        }
        function _defineProperty(obj, key, value) {
          if (key in obj) {
            Object.defineProperty(obj, key, {
              value: value,
              enumerable: true,
              configurable: true,
              writable: true
            });
          } else {
            obj[key] = value;
          }
          return obj;
        }
        function _getRequireWildcardCache() {
          if (typeof WeakMap !== "function") return null;
          var cache = new WeakMap();
          _getRequireWildcardCache = function _getRequireWildcardCache() {
            return cache;
          };
          return cache;
        }
        function _interopRequireWildcard(obj) {
          if (obj && obj.__esModule) {
            return obj;
          }
          if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
            return {
              "default": obj
            };
          }
          var cache = _getRequireWildcardCache();
          if (cache && cache.has(obj)) {
            return cache.get(obj);
          }
          var newObj = {};
          var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var key in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, key)) {
              var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
              if (desc && (desc.get || desc.set)) {
                Object.defineProperty(newObj, key, desc);
              } else {
                newObj[key] = obj[key];
              }
            }
          }
          newObj["default"] = obj;
          if (cache) {
            cache.set(obj, newObj);
          }
          return newObj;
        }
        var Preview = /*#__PURE__*/(0, _react.lazy)(function () {
          return Promise.resolve().then(function () {
            return _interopRequireWildcard(requirePreview());
          });
        });
        var IS_BROWSER = typeof window !== 'undefined' && window.document;
        var IS_GLOBAL = typeof commonjsGlobal !== 'undefined' && commonjsGlobal.window && commonjsGlobal.window.document;
        var SUPPORTED_PROPS = Object.keys(_props.propTypes); // Return null when rendering on the server
        // as Suspense is not supported yet

        var UniversalSuspense = IS_BROWSER || IS_GLOBAL ? _react.Suspense : function () {
          return null;
        };
        var customPlayers = [];
        var createReactPlayer = function createReactPlayer(players, fallback) {
          var _class, _temp;
          return _temp = _class = /*#__PURE__*/function (_Component) {
            _inherits(ReactPlayer, _Component);
            var _super = _createSuper(ReactPlayer);
            function ReactPlayer() {
              var _this;
              _classCallCheck(this, ReactPlayer);
              for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = arguments[_key];
              }
              _this = _super.call.apply(_super, [this].concat(args));
              _defineProperty(_assertThisInitialized(_this), "state", {
                showPreview: !!_this.props.light
              });
              _defineProperty(_assertThisInitialized(_this), "references", {
                wrapper: function wrapper(_wrapper) {
                  _this.wrapper = _wrapper;
                },
                player: function player(_player) {
                  _this.player = _player;
                }
              });
              _defineProperty(_assertThisInitialized(_this), "handleClickPreview", function (e) {
                _this.setState({
                  showPreview: false
                });
                _this.props.onClickPreview(e);
              });
              _defineProperty(_assertThisInitialized(_this), "showPreview", function () {
                _this.setState({
                  showPreview: true
                });
              });
              _defineProperty(_assertThisInitialized(_this), "getDuration", function () {
                if (!_this.player) return null;
                return _this.player.getDuration();
              });
              _defineProperty(_assertThisInitialized(_this), "getCurrentTime", function () {
                if (!_this.player) return null;
                return _this.player.getCurrentTime();
              });
              _defineProperty(_assertThisInitialized(_this), "getSecondsLoaded", function () {
                if (!_this.player) return null;
                return _this.player.getSecondsLoaded();
              });
              _defineProperty(_assertThisInitialized(_this), "getInternalPlayer", function () {
                var key = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'player';
                if (!_this.player) return null;
                return _this.player.getInternalPlayer(key);
              });
              _defineProperty(_assertThisInitialized(_this), "seekTo", function (fraction, type) {
                if (!_this.player) return null;
                _this.player.seekTo(fraction, type);
              });
              _defineProperty(_assertThisInitialized(_this), "handleReady", function () {
                _this.props.onReady(_assertThisInitialized(_this));
              });
              _defineProperty(_assertThisInitialized(_this), "getActivePlayer", (0, _memoizeOne["default"])(function (url) {
                for (var _i = 0, _arr = [].concat(customPlayers, _toConsumableArray(players)); _i < _arr.length; _i++) {
                  var player = _arr[_i];
                  if (player.canPlay(url)) {
                    return player;
                  }
                }
                if (fallback) {
                  return fallback;
                }
                return null;
              }));
              _defineProperty(_assertThisInitialized(_this), "getConfig", (0, _memoizeOne["default"])(function (url, key) {
                var config = _this.props.config;
                return _deepmerge["default"].all([_props.defaultProps.config, _props.defaultProps.config[key] || {}, config, config[key] || {}]);
              }));
              _defineProperty(_assertThisInitialized(_this), "getAttributes", (0, _memoizeOne["default"])(function (url) {
                return (0, _utils.omit)(_this.props, SUPPORTED_PROPS);
              }));
              _defineProperty(_assertThisInitialized(_this), "renderActivePlayer", function (url) {
                if (!url) return null;
                var player = _this.getActivePlayer(url);
                if (!player) return null;
                var config = _this.getConfig(url, player.key);
                return /*#__PURE__*/_react["default"].createElement(_Player3["default"], _extends({}, _this.props, {
                  key: player.key,
                  ref: _this.references.player,
                  config: config,
                  activePlayer: player.lazyPlayer || player,
                  onReady: _this.handleReady
                }));
              });
              return _this;
            }
            _createClass(ReactPlayer, [{
              key: "shouldComponentUpdate",
              value: function shouldComponentUpdate(nextProps, nextState) {
                return !(0, _reactFastCompare["default"])(this.props, nextProps) || !(0, _reactFastCompare["default"])(this.state, nextState);
              }
            }, {
              key: "componentDidUpdate",
              value: function componentDidUpdate(prevProps) {
                var light = this.props.light;
                if (!prevProps.light && light) {
                  this.setState({
                    showPreview: true
                  });
                }
                if (prevProps.light && !light) {
                  this.setState({
                    showPreview: false
                  });
                }
              }
            }, {
              key: "renderPreview",
              value: function renderPreview(url) {
                if (!url) return null;
                var _this$props = this.props,
                  light = _this$props.light,
                  playIcon = _this$props.playIcon,
                  previewTabIndex = _this$props.previewTabIndex,
                  oEmbedUrl = _this$props.oEmbedUrl;
                return /*#__PURE__*/_react["default"].createElement(Preview, {
                  url: url,
                  light: light,
                  playIcon: playIcon,
                  previewTabIndex: previewTabIndex,
                  oEmbedUrl: oEmbedUrl,
                  onClick: this.handleClickPreview
                });
              }
            }, {
              key: "render",
              value: function render() {
                var _this$props2 = this.props,
                  url = _this$props2.url,
                  style = _this$props2.style,
                  width = _this$props2.width,
                  height = _this$props2.height,
                  fallback = _this$props2.fallback,
                  Wrapper = _this$props2.wrapper;
                var showPreview = this.state.showPreview;
                var attributes = this.getAttributes(url);
                var wrapperRef = typeof Wrapper === 'string' ? this.references.wrapper : undefined;
                return /*#__PURE__*/_react["default"].createElement(Wrapper, _extends({
                  ref: wrapperRef,
                  style: _objectSpread(_objectSpread({}, style), {}, {
                    width: width,
                    height: height
                  })
                }, attributes), /*#__PURE__*/_react["default"].createElement(UniversalSuspense, {
                  fallback: fallback
                }, showPreview ? this.renderPreview(url) : this.renderActivePlayer(url)));
              }
            }]);
            return ReactPlayer;
          }(_react.Component), _defineProperty(_class, "displayName", 'ReactPlayer'), _defineProperty(_class, "propTypes", _props.propTypes), _defineProperty(_class, "defaultProps", _props.defaultProps), _defineProperty(_class, "addCustomPlayer", function (player) {
            customPlayers.push(player);
          }), _defineProperty(_class, "removeCustomPlayers", function () {
            customPlayers.length = 0;
          }), _defineProperty(_class, "canPlay", function (url) {
            for (var _i2 = 0, _arr2 = [].concat(customPlayers, _toConsumableArray(players)); _i2 < _arr2.length; _i2++) {
              var _Player = _arr2[_i2];
              if (_Player.canPlay(url)) {
                return true;
              }
            }
            return false;
          }), _defineProperty(_class, "canEnablePIP", function (url) {
            for (var _i3 = 0, _arr3 = [].concat(customPlayers, _toConsumableArray(players)); _i3 < _arr3.length; _i3++) {
              var _Player2 = _arr3[_i3];
              if (_Player2.canEnablePIP && _Player2.canEnablePIP(url)) {
                return true;
              }
            }
            return false;
          }), _temp;
        };
        ReactPlayer$1.createReactPlayer = createReactPlayer;
        (function (exports) {
          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports["default"] = void 0;
          var _players = _interopRequireDefault(players);
          var _ReactPlayer = ReactPlayer$1;
          function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
              "default": obj
            };
          }

          // Fall back to FilePlayer if nothing else can play the URL
          var fallback = _players["default"][_players["default"].length - 1];
          var _default = (0, _ReactPlayer.createReactPlayer)(_players["default"], fallback);
          exports["default"] = _default;
        })(lib);
        var ReactPlayer = exports('b', /*@__PURE__*/getDefaultExportFromCjs(lib));
      }
    };
  });
})();
