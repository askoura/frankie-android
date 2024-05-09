;
(function () {
  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
  function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
  function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
  function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : String(i); }
  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  System.register(['./index-legacy-vEA8K-LS.js', './use-service-legacy-Bcxdqe8R.js', './index-legacy-B_GMe52E.js', './Toolbar-legacy-BeIwS6lj.js', './Card-legacy-DxmmOhD2.js'], function (exports, module) {
    'use strict';

    var generateUtilityClasses, createBox, ClassNameGenerator, generateUtilityClass, capitalize, _extends, reactExports, _objectWithoutPropertiesLoose, jsxRuntimeExports, clsx, React, __vitePreload, Box$2, LoadingDots, interopRequireDefaultExports, useTheme$1, useLocation, createTheme, useNavigate, CacheProvider, styled, Paper, useThemeProps, composeClasses, useTheme, useForkRef, debounce, ownerWindow, Transition, reflow, getTransitionProps, Modal, rootShouldForwardProp, getDrawerUtilityClass, useSelector, useDispatch, useTranslation, rtlLanguage, Button, navigatePrevious, navigateNext, stripTags, buildResourceUrl, requireCreateSvgIcon, IconButton, FormControl, InputLabel, Select, langChange, MenuItem, jump, useService, setFetching, continueNavigation, stateReceived, loadScript, defualtTheme, cacheRtl, ThemeProvider, ErrorLayout, processError, PROCESSED_ERRORS, startNavigation, DndProvider, HTML5Backend, CardMedia, Toolbar, Card;
    return {
      setters: [module => {
        generateUtilityClasses = module.f;
        createBox = module.aj;
        ClassNameGenerator = module.ad;
        generateUtilityClass = module.g;
        capitalize = module.h;
        _extends = module._;
        reactExports = module.r;
        _objectWithoutPropertiesLoose = module.b;
        jsxRuntimeExports = module.j;
        clsx = module.d;
        React = module.R;
        __vitePreload = module.z;
        Box$2 = module.B;
        LoadingDots = module.L;
        interopRequireDefaultExports = module.q;
        useTheme$1 = module.y;
        useLocation = module.t;
        createTheme = module.x;
        useNavigate = module.s;
        CacheProvider = module.C;
      }, module => {
        styled = module.h;
        Paper = module.j;
        useThemeProps = module.e;
        composeClasses = module.c;
        useTheme = module.p;
        useForkRef = module.b;
        debounce = module.aU;
        ownerWindow = module.aV;
        Transition = module.aN;
        reflow = module.bc;
        getTransitionProps = module.bd;
        Modal = module.ao;
        rootShouldForwardProp = module.b8;
        getDrawerUtilityClass = module.be;
        useSelector = module.A;
        useDispatch = module.K;
        useTranslation = module.E;
        rtlLanguage = module.ab;
        Button = module.ap;
        navigatePrevious = module.bf;
        navigateNext = module.bg;
        stripTags = module.bh;
        buildResourceUrl = module.b3;
        requireCreateSvgIcon = module.D;
        IconButton = module.I;
        FormControl = module.ag;
        InputLabel = module.ah;
        Select = module.S;
        langChange = module.bi;
        MenuItem = module.M;
        jump = module.bj;
        useService = module.J;
        setFetching = module.bk;
        continueNavigation = module.bl;
        stateReceived = module.bm;
        loadScript = module.bn;
        defualtTheme = module.bo;
        cacheRtl = module.ae;
        ThemeProvider = module.ac;
        ErrorLayout = module.Q;
        processError = module.bp;
        PROCESSED_ERRORS = module.aq;
        startNavigation = module.bq;
      }, module => {
        DndProvider = module.D;
        HTML5Backend = module.H;
        CardMedia = module.C;
      }, module => {
        Toolbar = module.T;
      }, module => {
        Card = module.C;
      }],
      execute: function execute() {
        var __vite_style__ = document.createElement('style');
        __vite_style__.textContent = "._mainContainer_93c68_1 {\n  margin: auto;\n  height: 100vh;\n}\n\n._surveyDesignError_93c68_6 {\n  position: absolute;\n  text-align: center;\n  font-size: 32px;\n  padding: 16px;\n  top: 33%;\n  right: 20%;\n  left: 20%;\n  color: red;\n  margin: 16px;\n  border: 2px dashed gray;\n  border-radius: 4px;\n}._surveyContent_11qtt_1 {\n  margin: 0;\n}\n\n._surveyGroups_11qtt_5 {\n  margin: auto;\n  max-width: 800px;\n  min-width: 300px;\n}\n\n._cardImage_11qtt_11 {\n  max-height: 22.5vw;\n  height: 160px;\n  margin: 12px auto;\n  background-size: cover;\n  background-position: center;\n  border-radius: 8px;\n}\n._content_ukoxz_1 {\n  width: 100%;\n  margin: 0;\n  letter-spacing: 0.1px;\n  word-break: break-word;\n}\n\n._content_ukoxz_1._question_ukoxz_8 {\n  margin-bottom: 4px;\n}\n\n._content_ukoxz_1 ._required_ukoxz_12 {\n  margin-left: 5px;\n}\n\n._header_ukoxz_16 {\n  margin-bottom: 12px;\n}\n\n._textDescription_ukoxz_20 {\n  max-width: 100%;\n  margin-bottom: 4px;\n}\n\n._groupQuestion_ukoxz_25 {\n  padding: 1rem;\n  word-wrap: break-word;\n  page-break-inside: avoid;\n  transition: all 200ms cubic-bezier(0, 0, 0.2, 1);\n}\n/*!\n * Quill Editor v1.3.7\n * https://quilljs.com/\n * Copyright (c) 2014, Jason Chen\n * Copyright (c) 2013, salesforce.com\n */\n.ql-container {\n  box-sizing: border-box;\n  font-family: Helvetica, Arial, sans-serif;\n  font-size: 13px;\n  height: 100%;\n  margin: 0px;\n  position: relative;\n}\n.ql-container.ql-disabled .ql-tooltip {\n  visibility: hidden;\n}\n.ql-container.ql-disabled .ql-editor ul[data-checked] > li::before {\n  pointer-events: none;\n}\n.ql-clipboard {\n  left: -100000px;\n  height: 1px;\n  overflow-y: hidden;\n  position: absolute;\n  top: 50%;\n}\n.ql-clipboard p {\n  margin: 0;\n  padding: 0;\n}\n.ql-editor {\n  box-sizing: border-box;\n  line-height: 1.42;\n  height: 100%;\n  outline: none;\n  overflow-y: auto;\n  padding: 12px 15px;\n  tab-size: 4;\n  -moz-tab-size: 4;\n  text-align: left;\n  white-space: pre-wrap;\n  word-wrap: break-word;\n}\n.ql-editor > * {\n  cursor: text;\n}\n.ql-editor p,\n.ql-editor ol,\n.ql-editor ul,\n.ql-editor pre,\n.ql-editor blockquote,\n.ql-editor h1,\n.ql-editor h2,\n.ql-editor h3,\n.ql-editor h4,\n.ql-editor h5,\n.ql-editor h6 {\n  margin: 0;\n  padding: 0;\n  counter-reset: list-1 list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;\n}\n.ql-editor ol,\n.ql-editor ul {\n  padding-left: 1.5em;\n}\n.ql-editor ol > li,\n.ql-editor ul > li {\n  list-style-type: none;\n}\n.ql-editor ul > li::before {\n  content: '\\2022';\n}\n.ql-editor ul[data-checked=true],\n.ql-editor ul[data-checked=false] {\n  pointer-events: none;\n}\n.ql-editor ul[data-checked=true] > li *,\n.ql-editor ul[data-checked=false] > li * {\n  pointer-events: all;\n}\n.ql-editor ul[data-checked=true] > li::before,\n.ql-editor ul[data-checked=false] > li::before {\n  color: #777;\n  cursor: pointer;\n  pointer-events: all;\n}\n.ql-editor ul[data-checked=true] > li::before {\n  content: '\\2611';\n}\n.ql-editor ul[data-checked=false] > li::before {\n  content: '\\2610';\n}\n.ql-editor li::before {\n  display: inline-block;\n  white-space: nowrap;\n  width: 1.2em;\n}\n.ql-editor li:not(.ql-direction-rtl)::before {\n  margin-left: -1.5em;\n  margin-right: 0.3em;\n  text-align: right;\n}\n.ql-editor li.ql-direction-rtl::before {\n  margin-left: 0.3em;\n  margin-right: -1.5em;\n}\n.ql-editor ol li:not(.ql-direction-rtl),\n.ql-editor ul li:not(.ql-direction-rtl) {\n  padding-left: 1.5em;\n}\n.ql-editor ol li.ql-direction-rtl,\n.ql-editor ul li.ql-direction-rtl {\n  padding-right: 1.5em;\n}\n.ql-editor ol li {\n  counter-reset: list-1 list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;\n  counter-increment: list-0;\n}\n.ql-editor ol li:before {\n  content: counter(list-0, decimal) '. ';\n}\n.ql-editor ol li.ql-indent-1 {\n  counter-increment: list-1;\n}\n.ql-editor ol li.ql-indent-1:before {\n  content: counter(list-1, lower-alpha) '. ';\n}\n.ql-editor ol li.ql-indent-1 {\n  counter-reset: list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;\n}\n.ql-editor ol li.ql-indent-2 {\n  counter-increment: list-2;\n}\n.ql-editor ol li.ql-indent-2:before {\n  content: counter(list-2, lower-roman) '. ';\n}\n.ql-editor ol li.ql-indent-2 {\n  counter-reset: list-3 list-4 list-5 list-6 list-7 list-8 list-9;\n}\n.ql-editor ol li.ql-indent-3 {\n  counter-increment: list-3;\n}\n.ql-editor ol li.ql-indent-3:before {\n  content: counter(list-3, decimal) '. ';\n}\n.ql-editor ol li.ql-indent-3 {\n  counter-reset: list-4 list-5 list-6 list-7 list-8 list-9;\n}\n.ql-editor ol li.ql-indent-4 {\n  counter-increment: list-4;\n}\n.ql-editor ol li.ql-indent-4:before {\n  content: counter(list-4, lower-alpha) '. ';\n}\n.ql-editor ol li.ql-indent-4 {\n  counter-reset: list-5 list-6 list-7 list-8 list-9;\n}\n.ql-editor ol li.ql-indent-5 {\n  counter-increment: list-5;\n}\n.ql-editor ol li.ql-indent-5:before {\n  content: counter(list-5, lower-roman) '. ';\n}\n.ql-editor ol li.ql-indent-5 {\n  counter-reset: list-6 list-7 list-8 list-9;\n}\n.ql-editor ol li.ql-indent-6 {\n  counter-increment: list-6;\n}\n.ql-editor ol li.ql-indent-6:before {\n  content: counter(list-6, decimal) '. ';\n}\n.ql-editor ol li.ql-indent-6 {\n  counter-reset: list-7 list-8 list-9;\n}\n.ql-editor ol li.ql-indent-7 {\n  counter-increment: list-7;\n}\n.ql-editor ol li.ql-indent-7:before {\n  content: counter(list-7, lower-alpha) '. ';\n}\n.ql-editor ol li.ql-indent-7 {\n  counter-reset: list-8 list-9;\n}\n.ql-editor ol li.ql-indent-8 {\n  counter-increment: list-8;\n}\n.ql-editor ol li.ql-indent-8:before {\n  content: counter(list-8, lower-roman) '. ';\n}\n.ql-editor ol li.ql-indent-8 {\n  counter-reset: list-9;\n}\n.ql-editor ol li.ql-indent-9 {\n  counter-increment: list-9;\n}\n.ql-editor ol li.ql-indent-9:before {\n  content: counter(list-9, decimal) '. ';\n}\n.ql-editor .ql-indent-1:not(.ql-direction-rtl) {\n  padding-left: 3em;\n}\n.ql-editor li.ql-indent-1:not(.ql-direction-rtl) {\n  padding-left: 4.5em;\n}\n.ql-editor .ql-indent-1.ql-direction-rtl.ql-align-right {\n  padding-right: 3em;\n}\n.ql-editor li.ql-indent-1.ql-direction-rtl.ql-align-right {\n  padding-right: 4.5em;\n}\n.ql-editor .ql-indent-2:not(.ql-direction-rtl) {\n  padding-left: 6em;\n}\n.ql-editor li.ql-indent-2:not(.ql-direction-rtl) {\n  padding-left: 7.5em;\n}\n.ql-editor .ql-indent-2.ql-direction-rtl.ql-align-right {\n  padding-right: 6em;\n}\n.ql-editor li.ql-indent-2.ql-direction-rtl.ql-align-right {\n  padding-right: 7.5em;\n}\n.ql-editor .ql-indent-3:not(.ql-direction-rtl) {\n  padding-left: 9em;\n}\n.ql-editor li.ql-indent-3:not(.ql-direction-rtl) {\n  padding-left: 10.5em;\n}\n.ql-editor .ql-indent-3.ql-direction-rtl.ql-align-right {\n  padding-right: 9em;\n}\n.ql-editor li.ql-indent-3.ql-direction-rtl.ql-align-right {\n  padding-right: 10.5em;\n}\n.ql-editor .ql-indent-4:not(.ql-direction-rtl) {\n  padding-left: 12em;\n}\n.ql-editor li.ql-indent-4:not(.ql-direction-rtl) {\n  padding-left: 13.5em;\n}\n.ql-editor .ql-indent-4.ql-direction-rtl.ql-align-right {\n  padding-right: 12em;\n}\n.ql-editor li.ql-indent-4.ql-direction-rtl.ql-align-right {\n  padding-right: 13.5em;\n}\n.ql-editor .ql-indent-5:not(.ql-direction-rtl) {\n  padding-left: 15em;\n}\n.ql-editor li.ql-indent-5:not(.ql-direction-rtl) {\n  padding-left: 16.5em;\n}\n.ql-editor .ql-indent-5.ql-direction-rtl.ql-align-right {\n  padding-right: 15em;\n}\n.ql-editor li.ql-indent-5.ql-direction-rtl.ql-align-right {\n  padding-right: 16.5em;\n}\n.ql-editor .ql-indent-6:not(.ql-direction-rtl) {\n  padding-left: 18em;\n}\n.ql-editor li.ql-indent-6:not(.ql-direction-rtl) {\n  padding-left: 19.5em;\n}\n.ql-editor .ql-indent-6.ql-direction-rtl.ql-align-right {\n  padding-right: 18em;\n}\n.ql-editor li.ql-indent-6.ql-direction-rtl.ql-align-right {\n  padding-right: 19.5em;\n}\n.ql-editor .ql-indent-7:not(.ql-direction-rtl) {\n  padding-left: 21em;\n}\n.ql-editor li.ql-indent-7:not(.ql-direction-rtl) {\n  padding-left: 22.5em;\n}\n.ql-editor .ql-indent-7.ql-direction-rtl.ql-align-right {\n  padding-right: 21em;\n}\n.ql-editor li.ql-indent-7.ql-direction-rtl.ql-align-right {\n  padding-right: 22.5em;\n}\n.ql-editor .ql-indent-8:not(.ql-direction-rtl) {\n  padding-left: 24em;\n}\n.ql-editor li.ql-indent-8:not(.ql-direction-rtl) {\n  padding-left: 25.5em;\n}\n.ql-editor .ql-indent-8.ql-direction-rtl.ql-align-right {\n  padding-right: 24em;\n}\n.ql-editor li.ql-indent-8.ql-direction-rtl.ql-align-right {\n  padding-right: 25.5em;\n}\n.ql-editor .ql-indent-9:not(.ql-direction-rtl) {\n  padding-left: 27em;\n}\n.ql-editor li.ql-indent-9:not(.ql-direction-rtl) {\n  padding-left: 28.5em;\n}\n.ql-editor .ql-indent-9.ql-direction-rtl.ql-align-right {\n  padding-right: 27em;\n}\n.ql-editor li.ql-indent-9.ql-direction-rtl.ql-align-right {\n  padding-right: 28.5em;\n}\n.ql-editor .ql-video {\n  display: block;\n  max-width: 100%;\n}\n.ql-editor .ql-video.ql-align-center {\n  margin: 0 auto;\n}\n.ql-editor .ql-video.ql-align-right {\n  margin: 0 0 0 auto;\n}\n.ql-editor .ql-bg-black {\n  background-color: #000;\n}\n.ql-editor .ql-bg-red {\n  background-color: #e60000;\n}\n.ql-editor .ql-bg-orange {\n  background-color: #f90;\n}\n.ql-editor .ql-bg-yellow {\n  background-color: #ff0;\n}\n.ql-editor .ql-bg-green {\n  background-color: #008a00;\n}\n.ql-editor .ql-bg-blue {\n  background-color: #06c;\n}\n.ql-editor .ql-bg-purple {\n  background-color: #93f;\n}\n.ql-editor .ql-color-white {\n  color: #fff;\n}\n.ql-editor .ql-color-red {\n  color: #e60000;\n}\n.ql-editor .ql-color-orange {\n  color: #f90;\n}\n.ql-editor .ql-color-yellow {\n  color: #ff0;\n}\n.ql-editor .ql-color-green {\n  color: #008a00;\n}\n.ql-editor .ql-color-blue {\n  color: #06c;\n}\n.ql-editor .ql-color-purple {\n  color: #93f;\n}\n.ql-editor .ql-font-serif {\n  font-family: Georgia, Times New Roman, serif;\n}\n.ql-editor .ql-font-monospace {\n  font-family: Monaco, Courier New, monospace;\n}\n.ql-editor .ql-size-small {\n  font-size: 0.75em;\n}\n.ql-editor .ql-size-large {\n  font-size: 1.5em;\n}\n.ql-editor .ql-size-huge {\n  font-size: 2.5em;\n}\n.ql-editor .ql-direction-rtl {\n  direction: rtl;\n  text-align: inherit;\n}\n.ql-editor .ql-align-center {\n  text-align: center;\n}\n.ql-editor .ql-align-justify {\n  text-align: justify;\n}\n.ql-editor .ql-align-right {\n  text-align: right;\n}\n.ql-editor.ql-blank::before {\n  color: rgba(0,0,0,0.6);\n  content: attr(data-placeholder);\n  font-style: italic;\n  left: 15px;\n  pointer-events: none;\n  position: absolute;\n  right: 15px;\n}\n.rtl {\n  direction: rtl !important;\n  text-align: right !important;\n}\n\n.no-padding {\n  padding: 0 !important;\n}\n\n.no-padding > :last-child {\n  margin-bottom: 0;\n}\n\n.no-padding > :first-child {\n  margin-top: 0;\n}\n._textDescription_54bec_1 {\n  max-width: 100%;\n  margin-top: 8px;\n}\n\n._titleRow_54bec_6 {\n  display: block;\n  justify-content: space-between;\n  align-items: center;\n  box-align: center;\n  margin: 24px;\n  flex-wrap: wrap;\n  box-pack: justify;\n}\n\n._groupHeader_54bec_16 {\n  padding: 1rem;\n}\n\n._topLevel_54bec_20 {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  max-width: 800px;\n  min-width: 350px;\n  margin-right: 16px;\n  margin-left: 16px;\n  padding: 2rem 0rem;\n  margin: auto;\n  position: relative;\n}\n\n._drawer_k998h_2 {\n  padding: 16px;\n}._groupCard_1t5ma_1 {\n  padding: 8px;\n  margin: 8px;\n}\n\n._groupTitle_1t5ma_6 {\n  font-weight: bolder;\n}\n\n._questionTitle_1t5ma_10 {\n  display: flex;\n  padding: 8px;\n  margin: 8px;\n}\n\n._validationIcon_1t5ma_16 {\n  margin-left: 8px;\n  margin-right: 8px;\n  color: green;\n  font-size: 1.2rem;\n}\n\n._bullet_1t5ma_23 {\n  margin-right: 8px;\n  margin-left: 8px;\n  font-size: 1.2rem;\n}\n";
        document.head.appendChild(__vite_style__);
        exports({
          R: RunSurvey,
          s: shallowEqual
        });
        const boxClasses = generateUtilityClasses('MuiBox', ['root']);
        const boxClasses$1 = boxClasses;
        const Box = createBox({
          defaultClassName: boxClasses$1.root,
          generateClassName: ClassNameGenerator.generate
        });
        const Box$1 = exports("B", Box);
        function getAppBarUtilityClass(slot) {
          return generateUtilityClass('MuiAppBar', slot);
        }
        generateUtilityClasses('MuiAppBar', ['root', 'positionFixed', 'positionAbsolute', 'positionSticky', 'positionStatic', 'positionRelative', 'colorDefault', 'colorPrimary', 'colorSecondary', 'colorInherit', 'colorTransparent', 'colorError', 'colorInfo', 'colorSuccess', 'colorWarning']);
        const _excluded$2 = ["className", "color", "enableColorOnDark", "position"];
        const useUtilityClasses$1 = ownerState => {
          const color = ownerState.color,
            position = ownerState.position,
            classes = ownerState.classes;
          const slots = {
            root: ["root", `color${capitalize(color)}`, `position${capitalize(position)}`]
          };
          return composeClasses(slots, getAppBarUtilityClass, classes);
        };
        const joinVars = (var1, var2) => var1 ? `${var1 == null ? void 0 : var1.replace(")", "")}, ${var2})` : var2;
        const AppBarRoot = styled(Paper, {
          name: "MuiAppBar",
          slot: "Root",
          overridesResolver: (props, styles) => {
            const ownerState = props.ownerState;
            return [styles.root, styles[`position${capitalize(ownerState.position)}`], styles[`color${capitalize(ownerState.color)}`]];
          }
        })(({
          theme,
          ownerState
        }) => {
          const backgroundColorDefault = theme.palette.mode === "light" ? theme.palette.grey[100] : theme.palette.grey[900];
          return _extends({
            display: "flex",
            flexDirection: "column",
            width: "100%",
            boxSizing: "border-box",
            // Prevent padding issue with the Modal and fixed positioned AppBar.
            flexShrink: 0
          }, ownerState.position === "fixed" && {
            position: "fixed",
            zIndex: (theme.vars || theme).zIndex.appBar,
            top: 0,
            left: "auto",
            right: 0,
            "@media print": {
              // Prevent the app bar to be visible on each printed page.
              position: "absolute"
            }
          }, ownerState.position === "absolute" && {
            position: "absolute",
            zIndex: (theme.vars || theme).zIndex.appBar,
            top: 0,
            left: "auto",
            right: 0
          }, ownerState.position === "sticky" && {
            // ⚠️ sticky is not supported by IE11.
            position: "sticky",
            zIndex: (theme.vars || theme).zIndex.appBar,
            top: 0,
            left: "auto",
            right: 0
          }, ownerState.position === "static" && {
            position: "static"
          }, ownerState.position === "relative" && {
            position: "relative"
          }, !theme.vars && _extends({}, ownerState.color === "default" && {
            backgroundColor: backgroundColorDefault,
            color: theme.palette.getContrastText(backgroundColorDefault)
          }, ownerState.color && ownerState.color !== "default" && ownerState.color !== "inherit" && ownerState.color !== "transparent" && {
            backgroundColor: theme.palette[ownerState.color].main,
            color: theme.palette[ownerState.color].contrastText
          }, ownerState.color === "inherit" && {
            color: "inherit"
          }, theme.palette.mode === "dark" && !ownerState.enableColorOnDark && {
            backgroundColor: null,
            color: null
          }, ownerState.color === "transparent" && _extends({
            backgroundColor: "transparent",
            color: "inherit"
          }, theme.palette.mode === "dark" && {
            backgroundImage: "none"
          })), theme.vars && _extends({}, ownerState.color === "default" && {
            "--AppBar-background": ownerState.enableColorOnDark ? theme.vars.palette.AppBar.defaultBg : joinVars(theme.vars.palette.AppBar.darkBg, theme.vars.palette.AppBar.defaultBg),
            "--AppBar-color": ownerState.enableColorOnDark ? theme.vars.palette.text.primary : joinVars(theme.vars.palette.AppBar.darkColor, theme.vars.palette.text.primary)
          }, ownerState.color && !ownerState.color.match(/^(default|inherit|transparent)$/) && {
            "--AppBar-background": ownerState.enableColorOnDark ? theme.vars.palette[ownerState.color].main : joinVars(theme.vars.palette.AppBar.darkBg, theme.vars.palette[ownerState.color].main),
            "--AppBar-color": ownerState.enableColorOnDark ? theme.vars.palette[ownerState.color].contrastText : joinVars(theme.vars.palette.AppBar.darkColor, theme.vars.palette[ownerState.color].contrastText)
          }, {
            backgroundColor: "var(--AppBar-background)",
            color: ownerState.color === "inherit" ? "inherit" : "var(--AppBar-color)"
          }, ownerState.color === "transparent" && {
            backgroundImage: "none",
            backgroundColor: "transparent",
            color: "inherit"
          }));
        });
        const AppBar = /* @__PURE__ */reactExports.forwardRef(function AppBar2(inProps, ref) {
          const props = useThemeProps({
            props: inProps,
            name: "MuiAppBar"
          });
          const className = props.className,
            _props$color = props.color,
            color = _props$color === void 0 ? "primary" : _props$color,
            _props$enableColorOnD = props.enableColorOnDark,
            enableColorOnDark = _props$enableColorOnD === void 0 ? false : _props$enableColorOnD,
            _props$position = props.position,
            position = _props$position === void 0 ? "fixed" : _props$position,
            other = _objectWithoutPropertiesLoose(props, _excluded$2);
          const ownerState = _extends({}, props, {
            color,
            position,
            enableColorOnDark
          });
          const classes = useUtilityClasses$1(ownerState);
          return /* @__PURE__ */jsxRuntimeExports.jsx(AppBarRoot, _extends({
            square: true,
            component: "header",
            ownerState,
            elevation: 4,
            className: clsx(classes.root, className, position === "fixed" && "mui-fixed"),
            ref
          }, other));
        });
        const AppBar$1 = AppBar;
        const _excluded$1 = ["addEndListener", "appear", "children", "container", "direction", "easing", "in", "onEnter", "onEntered", "onEntering", "onExit", "onExited", "onExiting", "style", "timeout", "TransitionComponent"];
        function getTranslateValue(direction, node, resolvedContainer) {
          const rect = node.getBoundingClientRect();
          const containerRect = resolvedContainer && resolvedContainer.getBoundingClientRect();
          const containerWindow = ownerWindow(node);
          let transform;
          if (node.fakeTransform) {
            transform = node.fakeTransform;
          } else {
            const computedStyle = containerWindow.getComputedStyle(node);
            transform = computedStyle.getPropertyValue("-webkit-transform") || computedStyle.getPropertyValue("transform");
          }
          let offsetX = 0;
          let offsetY = 0;
          if (transform && transform !== "none" && typeof transform === "string") {
            const transformValues = transform.split("(")[1].split(")")[0].split(",");
            offsetX = parseInt(transformValues[4], 10);
            offsetY = parseInt(transformValues[5], 10);
          }
          if (direction === "left") {
            if (containerRect) {
              return `translateX(${containerRect.right + offsetX - rect.left}px)`;
            }
            return `translateX(${containerWindow.innerWidth + offsetX - rect.left}px)`;
          }
          if (direction === "right") {
            if (containerRect) {
              return `translateX(-${rect.right - containerRect.left - offsetX}px)`;
            }
            return `translateX(-${rect.left + rect.width - offsetX}px)`;
          }
          if (direction === "up") {
            if (containerRect) {
              return `translateY(${containerRect.bottom + offsetY - rect.top}px)`;
            }
            return `translateY(${containerWindow.innerHeight + offsetY - rect.top}px)`;
          }
          if (containerRect) {
            return `translateY(-${rect.top - containerRect.top + rect.height - offsetY}px)`;
          }
          return `translateY(-${rect.top + rect.height - offsetY}px)`;
        }
        function resolveContainer(containerPropProp) {
          return typeof containerPropProp === "function" ? containerPropProp() : containerPropProp;
        }
        function setTranslateValue(direction, node, containerProp) {
          const resolvedContainer = resolveContainer(containerProp);
          const transform = getTranslateValue(direction, node, resolvedContainer);
          if (transform) {
            node.style.webkitTransform = transform;
            node.style.transform = transform;
          }
        }
        const Slide = /* @__PURE__ */reactExports.forwardRef(function Slide2(props, ref) {
          const theme = useTheme();
          const defaultEasing = {
            enter: theme.transitions.easing.easeOut,
            exit: theme.transitions.easing.sharp
          };
          const defaultTimeout = {
            enter: theme.transitions.duration.enteringScreen,
            exit: theme.transitions.duration.leavingScreen
          };
          const addEndListener = props.addEndListener,
            _props$appear = props.appear,
            appear = _props$appear === void 0 ? true : _props$appear,
            _children = props.children,
            containerProp = props.container,
            _props$direction = props.direction,
            direction = _props$direction === void 0 ? "down" : _props$direction,
            _props$easing = props.easing,
            easingProp = _props$easing === void 0 ? defaultEasing : _props$easing,
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
            TransitionComponent = _props$TransitionComp === void 0 ? Transition : _props$TransitionComp,
            other = _objectWithoutPropertiesLoose(props, _excluded$1);
          const childrenRef = reactExports.useRef(null);
          const handleRef = useForkRef(_children.ref, childrenRef, ref);
          const normalizedTransitionCallback = callback => isAppearing => {
            if (callback) {
              if (isAppearing === void 0) {
                callback(childrenRef.current);
              } else {
                callback(childrenRef.current, isAppearing);
              }
            }
          };
          const handleEnter = normalizedTransitionCallback((node, isAppearing) => {
            setTranslateValue(direction, node, containerProp);
            reflow(node);
            if (onEnter) {
              onEnter(node, isAppearing);
            }
          });
          const handleEntering = normalizedTransitionCallback((node, isAppearing) => {
            const transitionProps = getTransitionProps({
              timeout,
              style,
              easing: easingProp
            }, {
              mode: "enter"
            });
            node.style.webkitTransition = theme.transitions.create("-webkit-transform", _extends({}, transitionProps));
            node.style.transition = theme.transitions.create("transform", _extends({}, transitionProps));
            node.style.webkitTransform = "none";
            node.style.transform = "none";
            if (onEntering) {
              onEntering(node, isAppearing);
            }
          });
          const handleEntered = normalizedTransitionCallback(onEntered);
          const handleExiting = normalizedTransitionCallback(onExiting);
          const handleExit = normalizedTransitionCallback(node => {
            const transitionProps = getTransitionProps({
              timeout,
              style,
              easing: easingProp
            }, {
              mode: "exit"
            });
            node.style.webkitTransition = theme.transitions.create("-webkit-transform", transitionProps);
            node.style.transition = theme.transitions.create("transform", transitionProps);
            setTranslateValue(direction, node, containerProp);
            if (onExit) {
              onExit(node);
            }
          });
          const handleExited = normalizedTransitionCallback(node => {
            node.style.webkitTransition = "";
            node.style.transition = "";
            if (onExited) {
              onExited(node);
            }
          });
          const handleAddEndListener = next => {
            if (addEndListener) {
              addEndListener(childrenRef.current, next);
            }
          };
          const updatePosition = reactExports.useCallback(() => {
            if (childrenRef.current) {
              setTranslateValue(direction, childrenRef.current, containerProp);
            }
          }, [direction, containerProp]);
          reactExports.useEffect(() => {
            if (inProp || direction === "down" || direction === "right") {
              return void 0;
            }
            const handleResize = debounce(() => {
              if (childrenRef.current) {
                setTranslateValue(direction, childrenRef.current, containerProp);
              }
            });
            const containerWindow = ownerWindow(childrenRef.current);
            containerWindow.addEventListener("resize", handleResize);
            return () => {
              handleResize.clear();
              containerWindow.removeEventListener("resize", handleResize);
            };
          }, [direction, inProp, containerProp]);
          reactExports.useEffect(() => {
            if (!inProp) {
              updatePosition();
            }
          }, [inProp, updatePosition]);
          return /* @__PURE__ */jsxRuntimeExports.jsx(TransitionComponent, _extends({
            nodeRef: childrenRef,
            onEnter: handleEnter,
            onEntered: handleEntered,
            onEntering: handleEntering,
            onExit: handleExit,
            onExited: handleExited,
            onExiting: handleExiting,
            addEndListener: handleAddEndListener,
            appear,
            in: inProp,
            timeout
          }, other, {
            children: (state, childProps) => {
              return /* @__PURE__ */reactExports.cloneElement(_children, _extends({
                ref: handleRef,
                style: _extends({
                  visibility: state === "exited" && !inProp ? "hidden" : void 0
                }, style, _children.props.style)
              }, childProps));
            }
          }));
        });
        const Slide$1 = Slide;
        const _excluded = ["BackdropProps"],
          _excluded2 = ["anchor", "BackdropProps", "children", "className", "elevation", "hideBackdrop", "ModalProps", "onClose", "open", "PaperProps", "SlideProps", "TransitionComponent", "transitionDuration", "variant"];
        const overridesResolver = (props, styles) => {
          const ownerState = props.ownerState;
          return [styles.root, (ownerState.variant === "permanent" || ownerState.variant === "persistent") && styles.docked, styles.modal];
        };
        const useUtilityClasses = ownerState => {
          const classes = ownerState.classes,
            anchor = ownerState.anchor,
            variant = ownerState.variant;
          const slots = {
            root: ["root"],
            docked: [(variant === "permanent" || variant === "persistent") && "docked"],
            modal: ["modal"],
            paper: ["paper", `paperAnchor${capitalize(anchor)}`, variant !== "temporary" && `paperAnchorDocked${capitalize(anchor)}`]
          };
          return composeClasses(slots, getDrawerUtilityClass, classes);
        };
        const DrawerRoot = styled(Modal, {
          name: "MuiDrawer",
          slot: "Root",
          overridesResolver
        })(({
          theme
        }) => ({
          zIndex: (theme.vars || theme).zIndex.drawer
        }));
        const DrawerDockedRoot = styled("div", {
          shouldForwardProp: rootShouldForwardProp,
          name: "MuiDrawer",
          slot: "Docked",
          skipVariantsResolver: false,
          overridesResolver
        })({
          flex: "0 0 auto"
        });
        const DrawerPaper = styled(Paper, {
          name: "MuiDrawer",
          slot: "Paper",
          overridesResolver: (props, styles) => {
            const ownerState = props.ownerState;
            return [styles.paper, styles[`paperAnchor${capitalize(ownerState.anchor)}`], ownerState.variant !== "temporary" && styles[`paperAnchorDocked${capitalize(ownerState.anchor)}`]];
          }
        })(({
          theme,
          ownerState
        }) => _extends({
          overflowY: "auto",
          display: "flex",
          flexDirection: "column",
          height: "100%",
          flex: "1 0 auto",
          zIndex: (theme.vars || theme).zIndex.drawer,
          // Add iOS momentum scrolling for iOS < 13.0
          WebkitOverflowScrolling: "touch",
          // temporary style
          position: "fixed",
          top: 0,
          // We disable the focus ring for mouse, touch and keyboard users.
          // At some point, it would be better to keep it for keyboard users.
          // :focus-ring CSS pseudo-class will help.
          outline: 0
        }, ownerState.anchor === "left" && {
          left: 0
        }, ownerState.anchor === "top" && {
          top: 0,
          left: 0,
          right: 0,
          height: "auto",
          maxHeight: "100%"
        }, ownerState.anchor === "right" && {
          right: 0
        }, ownerState.anchor === "bottom" && {
          top: "auto",
          left: 0,
          bottom: 0,
          right: 0,
          height: "auto",
          maxHeight: "100%"
        }, ownerState.anchor === "left" && ownerState.variant !== "temporary" && {
          borderRight: `1px solid ${(theme.vars || theme).palette.divider}`
        }, ownerState.anchor === "top" && ownerState.variant !== "temporary" && {
          borderBottom: `1px solid ${(theme.vars || theme).palette.divider}`
        }, ownerState.anchor === "right" && ownerState.variant !== "temporary" && {
          borderLeft: `1px solid ${(theme.vars || theme).palette.divider}`
        }, ownerState.anchor === "bottom" && ownerState.variant !== "temporary" && {
          borderTop: `1px solid ${(theme.vars || theme).palette.divider}`
        }));
        const oppositeDirection = {
          left: "right",
          right: "left",
          top: "down",
          bottom: "up"
        };
        function isHorizontal(anchor) {
          return ["left", "right"].indexOf(anchor) !== -1;
        }
        function getAnchor(theme, anchor) {
          return theme.direction === "rtl" && isHorizontal(anchor) ? oppositeDirection[anchor] : anchor;
        }
        const Drawer = /* @__PURE__ */reactExports.forwardRef(function Drawer2(inProps, ref) {
          const props = useThemeProps({
            props: inProps,
            name: "MuiDrawer"
          });
          const theme = useTheme();
          const defaultTransitionDuration = {
            enter: theme.transitions.duration.enteringScreen,
            exit: theme.transitions.duration.leavingScreen
          };
          const _props$anchor = props.anchor,
            anchorProp = _props$anchor === void 0 ? "left" : _props$anchor,
            BackdropProps = props.BackdropProps,
            children = props.children,
            className = props.className,
            _props$elevation = props.elevation,
            elevation = _props$elevation === void 0 ? 16 : _props$elevation,
            _props$hideBackdrop = props.hideBackdrop,
            hideBackdrop = _props$hideBackdrop === void 0 ? false : _props$hideBackdrop,
            _props$ModalProps = props.ModalProps,
            _props$ModalProps2 = _props$ModalProps === void 0 ? {} : _props$ModalProps,
            BackdropPropsProp = _props$ModalProps2.BackdropProps,
            onClose = props.onClose,
            _props$open = props.open,
            open = _props$open === void 0 ? false : _props$open,
            _props$PaperProps = props.PaperProps,
            PaperProps = _props$PaperProps === void 0 ? {} : _props$PaperProps,
            SlideProps = props.SlideProps,
            _props$TransitionComp2 = props.TransitionComponent,
            TransitionComponent = _props$TransitionComp2 === void 0 ? Slide$1 : _props$TransitionComp2,
            _props$transitionDura = props.transitionDuration,
            transitionDuration = _props$transitionDura === void 0 ? defaultTransitionDuration : _props$transitionDura,
            _props$variant = props.variant,
            variant = _props$variant === void 0 ? "temporary" : _props$variant,
            ModalProps = _objectWithoutPropertiesLoose(props.ModalProps, _excluded),
            other = _objectWithoutPropertiesLoose(props, _excluded2);
          const mounted = reactExports.useRef(false);
          reactExports.useEffect(() => {
            mounted.current = true;
          }, []);
          const anchorInvariant = getAnchor(theme, anchorProp);
          const anchor = anchorProp;
          const ownerState = _extends({}, props, {
            anchor,
            elevation,
            open,
            variant
          }, other);
          const classes = useUtilityClasses(ownerState);
          const drawer = /* @__PURE__ */jsxRuntimeExports.jsx(DrawerPaper, _extends({
            elevation: variant === "temporary" ? elevation : 0,
            square: true
          }, PaperProps, {
            className: clsx(classes.paper, PaperProps.className),
            ownerState,
            children
          }));
          if (variant === "permanent") {
            return /* @__PURE__ */jsxRuntimeExports.jsx(DrawerDockedRoot, _extends({
              className: clsx(classes.root, classes.docked, className),
              ownerState,
              ref
            }, other, {
              children: drawer
            }));
          }
          const slidingDrawer = /* @__PURE__ */jsxRuntimeExports.jsx(TransitionComponent, _extends({
            in: open,
            direction: oppositeDirection[anchorInvariant],
            timeout: transitionDuration,
            appear: mounted.current
          }, SlideProps, {
            children: drawer
          }));
          if (variant === "persistent") {
            return /* @__PURE__ */jsxRuntimeExports.jsx(DrawerDockedRoot, _extends({
              className: clsx(classes.root, classes.docked, className),
              ownerState,
              ref
            }, other, {
              children: slidingDrawer
            }));
          }
          return /* @__PURE__ */jsxRuntimeExports.jsx(DrawerRoot, _extends({
            BackdropProps: _extends({}, BackdropProps, BackdropPropsProp, {
              transitionDuration
            }),
            className: clsx(classes.root, classes.modal, className),
            open,
            ownerState,
            onClose,
            hideBackdrop,
            ref
          }, other, ModalProps, {
            children: slidingDrawer
          }));
        });
        const Drawer$1 = Drawer;
        function is(x, y) {
          if (x === y) {
            return x !== 0 || y !== 0 || 1 / x === 1 / y;
          } else {
            return x !== x && y !== y;
          }
        }
        function shallowEqual(objA, objB) {
          if (is(objA, objB)) return true;
          if (typeof objA !== 'object' || objA === null || typeof objB !== 'object' || objB === null) {
            return false;
          }
          const keysA = Object.keys(objA);
          const keysB = Object.keys(objB);
          if (keysA.length !== keysB.length) return false;
          for (let i = 0; i < keysA.length; i++) {
            if (!Object.prototype.hasOwnProperty.call(objB, keysA[i]) || !is(objA[keysA[i]], objB[keysA[i]])) {
              return false;
            }
          }
          return true;
        }
        const mainContainer = "_mainContainer_93c68_1";
        const surveyDesignError = "_surveyDesignError_93c68_6";
        const styles$5 = {
          mainContainer: mainContainer,
          surveyDesignError: surveyDesignError
        };
        function Navigation(props) {
          const state = useSelector(state2 => {
            return {
              has_previous: state2.runState.values.Survey.has_previous && state2.runState.data.survey.allowPrevious,
              has_next: state2.runState.values.Survey.has_next,
              can_save: state2.runState.data.survey.allowIncomplete
            };
          }, shallowEqual);
          const dispatch = useDispatch();
          const _useTranslation = useTranslation("run"),
            t = _useTranslation.t,
            i18n = _useTranslation.i18n;
          const isRtl = rtlLanguage.includes(i18n.language);
          const previous = () => {
            dispatch(navigatePrevious());
          };
          const next = () => {
            dispatch(navigateNext());
          };
          return props.navigationIndex.name == "end" ? "" : /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
            className: "pb-10 ta-center",
            children: [state.has_previous ? /* @__PURE__ */jsxRuntimeExports.jsx(Button, {
              variant: "contained",
              className: isRtl ? "ml-14" : "mr-14",
              onClick: () => {
                previous();
              },
              children: t("previous")
            }) : "", /* @__PURE__ */jsxRuntimeExports.jsx(Button, {
              variant: "contained",
              onClick: () => {
                next();
              },
              children: state.has_next ? t("next") : t("finish")
            })]
          });
        }
        const surveyContent = "_surveyContent_11qtt_1";
        const surveyGroups = "_surveyGroups_11qtt_5";
        const cardImage = "_cardImage_11qtt_11";
        const styles$4 = {
          surveyContent: surveyContent,
          surveyGroups: surveyGroups,
          cardImage: cardImage
        };
        const FORM_ID = "frankie-form";
        const content = "_content_ukoxz_1";
        const question = "_question_ukoxz_8";
        const required = "_required_ukoxz_12";
        const header = "_header_ukoxz_16";
        const textDescription$1 = "_textDescription_ukoxz_20";
        const groupQuestion = "_groupQuestion_ukoxz_25";
        const styles$3 = {
          content: content,
          question: question,
          required: required,
          header: header,
          textDescription: textDescription$1,
          groupQuestion: groupQuestion
        };
        const DateTimeQuestion = React.lazy(() => __vitePreload(() => module.import('./DateTimeQuestion-legacy-BpVTSXMR.js'), false ? "__VITE_PRELOAD__" : void 0));
        const SCQ = React.lazy(() => __vitePreload(() => module.import('./Scq-legacy-COyYt2MQ.js'), false ? "__VITE_PRELOAD__" : void 0));
        const SCQArray = React.lazy(() => __vitePreload(() => module.import('./SCQArray-legacy-DuQKSFlM.js'), false ? "__VITE_PRELOAD__" : void 0));
        const Signature = React.lazy(() => __vitePreload(() => module.import('./Signature-legacy-D96L56r_.js'), false ? "__VITE_PRELOAD__" : void 0));
        const PhotoCapture = React.lazy(() => __vitePreload(() => module.import('./PhotoCapture-legacy-D8d5SRit.js'), false ? "__VITE_PRELOAD__" : void 0));
        const VideoCapture = React.lazy(() => __vitePreload(() => module.import('./VideoCapture-legacy-B3gyMZ48.js'), false ? "__VITE_PRELOAD__" : void 0));
        const MCQ = React.lazy(() => __vitePreload(() => module.import('./Mcq-legacy-Cs73gHCQ.js'), false ? "__VITE_PRELOAD__" : void 0));
        const NumberQuestion = React.lazy(() => __vitePreload(() => module.import('./NumberQuestion-legacy-C1qI6bQS.js'), false ? "__VITE_PRELOAD__" : void 0));
        const TextQuestion = React.lazy(() => __vitePreload(() => module.import('./TextQuestion-legacy-CK8Q9_TU.js'), false ? "__VITE_PRELOAD__" : void 0));
        const VideoDisplay = React.lazy(() => __vitePreload(() => module.import('./VideoDisplay-legacy-DAHbRyQY.js'), false ? "__VITE_PRELOAD__" : void 0));
        const ImageDisplay = React.lazy(() => __vitePreload(() => module.import('./ImageDisplay-legacy-DTxoi7CM.js'), false ? "__VITE_PRELOAD__" : void 0));
        const ImageRanking = React.lazy(() => __vitePreload(() => module.import('./ImageRanking-legacy-DR4Ku08Y.js'), false ? "__VITE_PRELOAD__" : void 0));
        const ParagraphQuestion = React.lazy(() => __vitePreload(() => module.import('./ParagraphQuestion-legacy-CICr8Nil.js'), false ? "__VITE_PRELOAD__" : void 0));
        const Barcode = React.lazy(() => __vitePreload(() => module.import('./Barcode-legacy-Dcdt9xI1.js'), false ? "__VITE_PRELOAD__" : void 0));
        const EmailQuestion = React.lazy(() => __vitePreload(() => module.import('./EmailQuestion-legacy-BdrSWWGE.js'), false ? "__VITE_PRELOAD__" : void 0));
        const ImageScq = React.lazy(() => __vitePreload(() => module.import('./ImageScq-legacy-V5RacVyv.js'), false ? "__VITE_PRELOAD__" : void 0));
        const ImageMcq = React.lazy(() => __vitePreload(() => module.import('./ImageMcq-legacy-C6nxrEjn.js'), false ? "__VITE_PRELOAD__" : void 0));
        const Ranking = React.lazy(() => __vitePreload(() => module.import('./Ranking-legacy-5_Wki8bT.js'), false ? "__VITE_PRELOAD__" : void 0));
        const NPS = React.lazy(() => __vitePreload(() => module.import('./NPS-legacy-7emXHXlk.js'), false ? "__VITE_PRELOAD__" : void 0));
        const Content$2 = React.lazy(() => __vitePreload(() => Promise.resolve().then(() => index$1), false ? "__VITE_PRELOAD__" : void 0));
        const Validation = React.lazy(() => __vitePreload(() => module.import('./index-legacy-Hr2g2OW7.js'), false ? "__VITE_PRELOAD__" : void 0));
        const FileUpload = React.lazy(() => __vitePreload(() => module.import('./FileUpload-legacy-CZbElcIZ.js'), false ? "__VITE_PRELOAD__" : void 0));
        const IconScq = React.lazy(() => __vitePreload(() => module.import('./IconScq-legacy-CQnttpyP.js'), false ? "__VITE_PRELOAD__" : void 0));
        const IconMcq = React.lazy(() => __vitePreload(() => module.import('./IconMcq-legacy-D7C2f0HZ.js'), false ? "__VITE_PRELOAD__" : void 0));
        const SCQIconArray = React.lazy(() => __vitePreload(() => module.import('./SCQIconArray-legacy-CLRquhi9.js'), false ? "__VITE_PRELOAD__" : void 0));
        function Question(props) {
          var _props$component$cont, _props$component$cont2, _props$component$cont3, _props$component$cont4;
          console.log("rendering: " + props.component.code);
          const state = useSelector(state2 => {
            let questionState = state2.runState.values[props.component.qualifiedCode];
            let show_errors = state2.runState.values.Survey.show_errors;
            let isDirty = state2.templateState[props.component.qualifiedCode];
            let validity = questionState === null || questionState === void 0 ? void 0 : questionState.validity;
            let invalid = (show_errors || isDirty) && validity === false;
            return {
              showQuestion: typeof (questionState === null || questionState === void 0 ? void 0 : questionState.relevance) === "undefined" || (questionState === null || questionState === void 0 ? void 0 : questionState.relevance),
              invalid,
              showValidation: invalid
            };
          }, shallowEqual);
          const theme = useTheme();
          const showDescription = ((_props$component$cont = props.component.content) === null || _props$component$cont === void 0 ? void 0 : _props$component$cont.description) && stripTags(props.component.content.description).length > 0;
          const showTitle = ((_props$component$cont2 = props.component.content) === null || _props$component$cont2 === void 0 ? void 0 : _props$component$cont2.label) && stripTags((_props$component$cont3 = props.component.content) === null || _props$component$cont3 === void 0 ? void 0 : _props$component$cont3.label).length > 0;
          const showHeader = showTitle || showDescription;
          const showQuestion = () => {
            switch (props.component.type) {
              case "date_time":
                return /* @__PURE__ */jsxRuntimeExports.jsx(DateTimeQuestion, {
                  component: props.component
                }, props.component.qualifiedCode);
              case "date":
                return /* @__PURE__ */jsxRuntimeExports.jsx(DateTimeQuestion, {
                  component: props.component
                }, props.component.qualifiedCode);
              case "time":
                return /* @__PURE__ */jsxRuntimeExports.jsx(DateTimeQuestion, {
                  component: props.component
                }, props.component.qualifiedCode);
              case "scq":
                return /* @__PURE__ */jsxRuntimeExports.jsx(SCQ, {
                  component: props.component
                }, props.component.qualifiedCode);
              case "scq_array":
                return /* @__PURE__ */jsxRuntimeExports.jsx(SCQArray, {
                  component: props.component
                }, props.component.qualifiedCode);
              case "scq_icon_array":
                return /* @__PURE__ */jsxRuntimeExports.jsx(SCQIconArray, {
                  component: props.component
                }, props.component.qualifiedCode);
              case "file_upload":
                return /* @__PURE__ */jsxRuntimeExports.jsx(FileUpload, {
                  component: props.component
                }, props.component.qualifiedCode);
              case "signature":
                return /* @__PURE__ */jsxRuntimeExports.jsx(Signature, {
                  component: props.component
                }, props.component.qualifiedCode);
              case "photo_capture":
                return /* @__PURE__ */jsxRuntimeExports.jsx(PhotoCapture, {
                  component: props.component
                }, props.component.qualifiedCode);
              case "video_capture":
                return /* @__PURE__ */jsxRuntimeExports.jsx(VideoCapture, {
                  component: props.component
                }, props.component.qualifiedCode);
              case "mcq":
                return /* @__PURE__ */jsxRuntimeExports.jsx(MCQ, {
                  component: props.component
                }, props.component.qualifiedCode);
              case "number":
                return /* @__PURE__ */jsxRuntimeExports.jsx(NumberQuestion, {
                  component: props.component
                }, props.component.qualifiedCode);
              case "text":
                return /* @__PURE__ */jsxRuntimeExports.jsx(TextQuestion, {
                  component: props.component
                }, props.component.qualifiedCode);
              case "video_display":
                return /* @__PURE__ */jsxRuntimeExports.jsx(VideoDisplay, {
                  component: props.component
                }, props.component.qualifiedCode);
              case "image_display":
                return /* @__PURE__ */jsxRuntimeExports.jsx(ImageDisplay, {
                  component: props.component
                }, props.component.qualifiedCode);
              case "image_ranking":
                return /* @__PURE__ */jsxRuntimeExports.jsx(ImageRanking, {
                  component: props.component
                }, props.component.qualifiedCode);
              case "paragraph":
                return /* @__PURE__ */jsxRuntimeExports.jsx(ParagraphQuestion, {
                  component: props.component
                }, props.component.qualifiedCode);
              case "barcode":
                return /* @__PURE__ */jsxRuntimeExports.jsx(Barcode, {
                  component: props.component
                }, props.component.qualifiedCode);
              case "email":
                return /* @__PURE__ */jsxRuntimeExports.jsx(EmailQuestion, {
                  component: props.component
                }, props.component.qualifiedCode);
              case "image_scq":
                return /* @__PURE__ */jsxRuntimeExports.jsx(ImageScq, {
                  component: props.component
                }, props.component.qualifiedCode);
              case "icon_scq":
                return /* @__PURE__ */jsxRuntimeExports.jsx(IconScq, {
                  component: props.component
                }, props.component.qualifiedCode);
              case "icon_mcq":
                return /* @__PURE__ */jsxRuntimeExports.jsx(IconMcq, {
                  component: props.component
                }, props.component.qualifiedCode);
              case "image_mcq":
                return /* @__PURE__ */jsxRuntimeExports.jsx(ImageMcq, {
                  component: props.component
                }, props.component.qualifiedCode);
              case "ranking":
                return /* @__PURE__ */jsxRuntimeExports.jsx(Ranking, {
                  component: props.component
                }, props.component.qualifiedCode);
              case "nps":
                return /* @__PURE__ */jsxRuntimeExports.jsx(NPS, {
                  component: props.component
                }, props.component.qualifiedCode);
              default:
                return "";
            }
          };
          return state.showQuestion ? /* @__PURE__ */jsxRuntimeExports.jsxs(Box$2, {
            sx: {
              borderColor: state.invalid ? "error.main" : "grey.500",
              backgroundColor: "background.paper"
            },
            className: `${styles$3.groupQuestion}`,
            children: [showHeader && /* @__PURE__ */jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
              children: [showTitle && /* @__PURE__ */jsxRuntimeExports.jsx(Box$2, {
                style: {
                  fontFamily: theme.textStyles.question.font,
                  color: theme.textStyles.text.color,
                  fontSize: theme.textStyles.question.size
                },
                children: /* @__PURE__ */jsxRuntimeExports.jsx(Content$2, {
                  className: `${styles$3.content} ${styles$3.question}`,
                  name: "label",
                  lang: props.lang,
                  elementCode: props.component.qualifiedCode,
                  content: (_props$component$cont4 = props.component.content) === null || _props$component$cont4 === void 0 ? void 0 : _props$component$cont4.label
                })
              }), showDescription && /* @__PURE__ */jsxRuntimeExports.jsx(Box$2, {
                className: styles$3.textDescription,
                children: /* @__PURE__ */jsxRuntimeExports.jsx(Content$2, {
                  elementCode: props.component.code,
                  name: "description",
                  lang: props.lang,
                  content: props.component.content.description
                })
              })]
            }), /* @__PURE__ */jsxRuntimeExports.jsx(reactExports.Suspense, {
              fallback: /* @__PURE__ */jsxRuntimeExports.jsx(LoadingDots, {}),
              children: showQuestion()
            }), /* @__PURE__ */jsxRuntimeExports.jsx(reactExports.Suspense, {
              fallback: /* @__PURE__ */jsxRuntimeExports.jsx(LoadingDots, {}),
              children: !state.showValidation ? /* @__PURE__ */jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, {}) : /* @__PURE__ */jsxRuntimeExports.jsx(Validation, {
                component: props.component
              })
            })]
          }) : "";
        }
        const Question$1 = React.memo(Question);
        function Content(props) {
          const isComplex = props.content && props.content.search(/data-instruction/) >= 0;
          const state = useSelector(state2 => {
            if (!props.content || !isComplex || !state2.runState.values[props.elementCode] || !props.name || !props.lang) {
              return void 0;
            } else {
              return state2.runState.values[props.elementCode][`reference_${props.name}_${props.lang}`];
            }
          });
          const lang = useSelector(state2 => {
            return state2.runState.values["Survey"].lang;
          });
          const isRtl = rtlLanguage.includes(lang);
          if (!props.content) {
            return "";
          } else if (!isComplex) {
            return /* @__PURE__ */jsxRuntimeExports.jsx("div", {
              className: `${isRtl ? "rtl" : "ltr"} ql-editor no-padding`,
              dangerouslySetInnerHTML: {
                __html: props.content
              }
            });
          } else {
            return /* @__PURE__ */jsxRuntimeExports.jsx("div", {
              className: `${isRtl ? "rtl" : "ltr"} ql-editor no-padding`,
              dangerouslySetInnerHTML: {
                __html: replaceMentions(props.content, state)
              }
            });
          }
        }
        const Content$1 = React.memo(Content);
        function replaceMentions(html, referenceValue) {
          let doc = document.createElement("div");
          doc.innerHTML = html;
          doc.querySelectorAll("span[data-instruction]").forEach(function (el) {
            let attribute = el.getAttribute("data-instruction");
            if (attribute && referenceValue) {
              let attrArray = attribute.split(".");
              if (attrArray && attrArray.length == 2 && referenceValue[attrArray[0]] && referenceValue[attrArray[0]][attrArray[1]]) {
                el.replaceWith(referenceValue[attrArray[0]][attrArray[1]]);
              } else {
                el.replaceWith("");
              }
            } else {
              el.replaceWith("");
            }
          });
          return doc.innerHTML;
        }
        const index$1 = /*#__PURE__*/Object.freeze( /*#__PURE__*/Object.defineProperty({
          __proto__: null,
          default: Content$1
        }, Symbol.toStringTag, {
          value: 'Module'
        }));
        const textDescription = "_textDescription_54bec_1";
        const titleRow = "_titleRow_54bec_6";
        const groupHeader = "_groupHeader_54bec_16";
        const topLevel = "_topLevel_54bec_20";
        const styles$2 = {
          textDescription: textDescription,
          titleRow: titleRow,
          groupHeader: groupHeader,
          topLevel: topLevel
        };
        function Group(props) {
          const theme = useTheme();
          const state = useSelector(state2 => {
            let groupState = state2.runState.values[props.group.code];
            return {
              showGroup: typeof (groupState === null || groupState === void 0 ? void 0 : groupState.relevance) === "undefined" || groupState.relevance
            };
          }, shallowEqual);
          const showGroup = () => {
            var _props$group$content, _props$group$content2, _props$group$content3;
            return /* @__PURE__ */jsxRuntimeExports.jsxs(Paper, {
              className: styles$2.topLevel,
              children: [/* @__PURE__ */jsxRuntimeExports.jsx("div", {
                className: styles$2.groupHeader,
                style: {
                  fontFamily: theme.textStyles.group.font,
                  color: theme.textStyles.group.color,
                  fontSize: theme.textStyles.group.size
                },
                children: /* @__PURE__ */jsxRuntimeExports.jsx(Content$1, {
                  elementCode: props.group.code,
                  name: "label",
                  lang: props.lang,
                  content: (_props$group$content = props.group.content) === null || _props$group$content === void 0 ? void 0 : _props$group$content.label
                })
              }), ((_props$group$content2 = props.group.content) === null || _props$group$content2 === void 0 ? void 0 : _props$group$content2.description) && /* @__PURE__ */jsxRuntimeExports.jsx(Box$2, {
                className: styles$2.textDescription,
                children: /* @__PURE__ */jsxRuntimeExports.jsx(Content$1, {
                  elementCode: props.group.code,
                  name: "description",
                  lang: props.lang,
                  content: (_props$group$content3 = props.group.content) === null || _props$group$content3 === void 0 ? void 0 : _props$group$content3.description
                })
              }), props.group && props.group.questions ? props.group.questions.filter(quest => quest.inCurrentNavigation).map(quest => /* @__PURE__ */jsxRuntimeExports.jsx(Question$1, {
                component: quest,
                lang: props.lang
              }, quest.code)) : ""]
            });
          };
          return state.showGroup && (props.group ? showGroup() : "");
        }
        const Group$1 = React.memo(Group);
        function Survey({
          navigationIndex,
          survey,
          lang
        }) {
          var _survey$resources;
          const theme = useTheme();
          return /* @__PURE__ */jsxRuntimeExports.jsx(DndProvider, {
            backend: HTML5Backend,
            children: /* @__PURE__ */jsxRuntimeExports.jsx("form", {
              id: FORM_ID,
              className: styles$4.surveyPage,
              style: {
                backgroundColor: theme.palette.background.default,
                fontFamily: theme.textStyles.text.font,
                color: theme.textStyles.text.color,
                fontSize: theme.textStyles.text.size
              },
              children: /* @__PURE__ */jsxRuntimeExports.jsx("div", {
                className: styles$4.surveyContent,
                children: /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                  className: styles$4.surveyGroups,
                  children: [(_survey$resources = survey.resources) !== null && _survey$resources !== void 0 && _survey$resources.headerImage ? /* @__PURE__ */jsxRuntimeExports.jsx(CardMedia, {
                    className: styles$4.cardImage,
                    component: "img",
                    image: buildResourceUrl(survey.resources.headerImage)
                  }) : null, survey && survey.groups ? survey.groups.filter(group => group.inCurrentNavigation).map(group => /* @__PURE__ */jsxRuntimeExports.jsx(Group$1, {
                    group,
                    lang: lang.code
                  }, group.code)) : "", /* @__PURE__ */jsxRuntimeExports.jsx(Navigation, {
                    navigationIndex
                  })]
                })
              })
            })
          });
        }
        var Menu = {};
        var _interopRequireDefault$3 = interopRequireDefaultExports;
        Object.defineProperty(Menu, "__esModule", {
          value: true
        });
        var default_1$3 = Menu.default = void 0;
        var _createSvgIcon$3 = _interopRequireDefault$3(requireCreateSvgIcon());
        var _jsxRuntime$3 = jsxRuntimeExports;
        var _default$3 = (0, _createSvgIcon$3.default)( /*#__PURE__*/(0, _jsxRuntime$3.jsx)("path", {
          d: "M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"
        }), 'Menu');
        default_1$3 = Menu.default = _default$3;
        var ArrowBack = {};
        var _interopRequireDefault$2 = interopRequireDefaultExports;
        Object.defineProperty(ArrowBack, "__esModule", {
          value: true
        });
        var default_1$2 = ArrowBack.default = void 0;
        var _createSvgIcon$2 = _interopRequireDefault$2(requireCreateSvgIcon());
        var _jsxRuntime$2 = jsxRuntimeExports;
        var _default$2 = (0, _createSvgIcon$2.default)( /*#__PURE__*/(0, _jsxRuntime$2.jsx)("path", {
          d: "M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"
        }), 'ArrowBack');
        default_1$2 = ArrowBack.default = _default$2;
        function SurveyAppBar({
          showBack,
          label,
          onBackClick,
          toggleDrawer
        }) {
          return /* @__PURE__ */jsxRuntimeExports.jsx(AppBar$1, {
            position: "fixed",
            children: /* @__PURE__ */jsxRuntimeExports.jsxs(Toolbar, {
              style: {
                fontSize: "32px",
                lineHeight: "1.334",
                fontWeight: "400"
              },
              children: [showBack && /* @__PURE__ */jsxRuntimeExports.jsx(IconButton, {
                size: "large",
                edge: "start",
                color: "inherit",
                "aria-label": "menu",
                sx: {
                  mr: 2
                },
                onClick: onBackClick,
                children: /* @__PURE__ */jsxRuntimeExports.jsx(default_1$2, {})
              }), /* @__PURE__ */jsxRuntimeExports.jsx(IconButton, {
                size: "large",
                edge: "start",
                color: "inherit",
                "aria-label": "menu",
                sx: {
                  mr: 2
                },
                onClick: toggleDrawer(true),
                children: /* @__PURE__ */jsxRuntimeExports.jsx(default_1$3, {})
              }), /* @__PURE__ */jsxRuntimeExports.jsx(Content$1, {
                elementCode: "Survey",
                name: "label",
                content: label
              })]
            })
          });
        }
        function ChangeLang(props) {
          useSelector(state2 => {
            return {
              navigate: state2.runState.navigate,
              lang: state2.runState.lang
            };
          }, shallowEqual);
          const dispatch = useDispatch();
          const _useTranslation2 = useTranslation("run"),
            t = _useTranslation2.t;
          return /* @__PURE__ */jsxRuntimeExports.jsxs(FormControl, {
            variant: "standard",
            children: [/* @__PURE__ */jsxRuntimeExports.jsx(InputLabel, {
              id: "change-lang-label",
              children: t("lang")
            }), /* @__PURE__ */jsxRuntimeExports.jsxs(Select, {
              labelId: "change-lang-label",
              sx: {
                backgroundColor: "background.paper",
                color: "primary.main"
              },
              id: "ChangeLang",
              label: t("lang"),
              value: props.lang.code,
              onChange: event => {
                dispatch(langChange({
                  lang: event.target.value
                }));
              },
              children: [/* @__PURE__ */jsxRuntimeExports.jsx(MenuItem, {
                value: props.lang.code,
                children: props.lang.name
              }), props.additionalLang ? props.additionalLang.map((lang, index) => {
                return /* @__PURE__ */jsxRuntimeExports.jsx(MenuItem, {
                  value: lang.code,
                  children: lang.name
                }, index);
              }) : ""]
            })]
          });
        }
        const drawer = "_drawer_k998h_2";
        const styles$1 = {
          drawer: drawer
        };
        const groupCard = "_groupCard_1t5ma_1";
        const groupTitle = "_groupTitle_1t5ma_6";
        const questionTitle = "_questionTitle_1t5ma_10";
        const validationIcon = "_validationIcon_1t5ma_16";
        const bullet = "_bullet_1t5ma_23";
        const styles = {
          groupCard: groupCard,
          groupTitle: groupTitle,
          questionTitle: questionTitle,
          validationIcon: validationIcon,
          bullet: bullet
        };
        var CheckCircle = {};
        var _interopRequireDefault$1 = interopRequireDefaultExports;
        Object.defineProperty(CheckCircle, "__esModule", {
          value: true
        });
        var default_1$1 = CheckCircle.default = void 0;
        var _createSvgIcon$1 = _interopRequireDefault$1(requireCreateSvgIcon());
        var _jsxRuntime$1 = jsxRuntimeExports;
        var _default$1 = (0, _createSvgIcon$1.default)( /*#__PURE__*/(0, _jsxRuntime$1.jsx)("path", {
          d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
        }), 'CheckCircle');
        default_1$1 = CheckCircle.default = _default$1;
        var Circle = {};
        var _interopRequireDefault = interopRequireDefaultExports;
        Object.defineProperty(Circle, "__esModule", {
          value: true
        });
        var default_1 = Circle.default = void 0;
        var _createSvgIcon = _interopRequireDefault(requireCreateSvgIcon());
        var _jsxRuntime = jsxRuntimeExports;
        var _default = (0, _createSvgIcon.default)( /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
          d: "M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2z"
        }), 'Circle');
        default_1 = Circle.default = _default;
        function SurveyIndex(props) {
          const theme = useTheme$1();
          const dispatch = useDispatch();
          const relevance_map = useSelector(state => {
            return state.runState.values["Survey"].relevance_map;
          }, shallowEqual);
          const validity_map = useSelector(state => {
            return state.runState.values["Survey"].validity_map;
          }, shallowEqual);
          const canJump = useSelector(state => {
            return state.runState.data.survey.allowJump;
          }, shallowEqual);
          const isCurrentGroup = groupCode => {
            return props.navigationIndex.name == "group" && groupCode == props.navigationIndex.groupId;
          };
          const isCurrentQuestion = questionCode => {
            return props.navigationIndex.name == "question" && questionCode == props.navigationIndex.questionId;
          };
          const isGroupClickable = groupCode => canJump && !isCurrentGroup(groupCode) && props.navigationIndex.name == "group";
          const isQuestionClickable = questionCode => canJump && !isCurrentQuestion(questionCode) && props.navigationIndex.name == "question";
          const onGroupClicked = groupCode => {
            if (isGroupClickable(groupCode)) {
              dispatch(jump(_objectSpread(_objectSpread({}, props.navigationIndex), {}, {
                groupId: groupCode
              })));
            }
          };
          const onQuestionClicked = questionCode => {
            if (isQuestionClickable(questionCode)) {
              dispatch(jump(_objectSpread(_objectSpread({}, props.navigationIndex), {}, {
                questionId: questionCode
              })));
            }
          };
          return /* @__PURE__ */jsxRuntimeExports.jsx("div", {
            className: styles.surveyContent,
            children: props.survey && props.survey.groups ? props.survey.groups.filter(group => relevance_map[group.code] && group.groupType != "END").map(group => {
              var _group$content;
              return /* @__PURE__ */jsxRuntimeExports.jsxs(Card, {
                onClick: () => onGroupClicked(group.code),
                className: styles.groupCard,
                style: {
                  backgroundColor: isCurrentGroup(group.code) ? "beige" : theme.palette.background.paper,
                  cursor: isGroupClickable(group.code) ? "pointer" : "default"
                },
                children: [/* @__PURE__ */jsxRuntimeExports.jsxs(Box$1, {
                  className: styles.groupTitle,
                  children: [stripTags((_group$content = group.content) === null || _group$content === void 0 ? void 0 : _group$content.label), " "]
                }), group.questions.filter(question => relevance_map[question.code]).map(question => {
                  var _question$content;
                  return /* @__PURE__ */jsxRuntimeExports.jsxs(Box$1, {
                    onClick: () => onQuestionClicked(question.code),
                    className: styles.questionTitle,
                    style: {
                      backgroundColor: isCurrentQuestion(question.code) ? "beige" : "inherit",
                      cursor: isGroupClickable(group.code) ? "inherit" : isQuestionClickable(group.code) ? "pointer" : "default"
                    },
                    children: [validity_map[question.code] ? /* @__PURE__ */jsxRuntimeExports.jsx(default_1$1, {
                      className: styles.validationIcon
                    }) : /* @__PURE__ */jsxRuntimeExports.jsx(default_1, {
                      className: styles.bullet
                    }), stripTags((_question$content = question.content) === null || _question$content === void 0 ? void 0 : _question$content.label)]
                  }, question.code);
                })]
              }, group.code);
            }) : ""
          });
        }
        function SurveyDrawer({
          survey,
          navigationIndex,
          lang,
          expanded,
          additionalLang,
          toggleDrawer
        }) {
          return /* @__PURE__ */jsxRuntimeExports.jsx(Drawer$1, {
            anchor: "left",
            transitionDuration: expanded !== COLLAPSE_IMMEDIATE ? 500 : 0,
            open: expanded == EXPAND,
            onClose: toggleDrawer(false),
            children: /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
              className: styles$1.drawer,
              children: [/* @__PURE__ */jsxRuntimeExports.jsx(ChangeLang, {
                lang,
                additionalLang
              }), /* @__PURE__ */jsxRuntimeExports.jsx(SurveyIndex, {
                navigationIndex,
                survey
              })]
            })
          });
        }
        const SurveyDrawer$1 = React.memo(SurveyDrawer);
        const COLLAPSE_IMMEDIATE = "COLLAPSE_IMMEDIATE";
        const COLLAPSE = "COLLAPSE";
        const EXPAND = "EXPAND";
        function RunSurvey({
          preview,
          guest,
          mode
        }) {
          var _data$survey, _data$survey2, _data$survey3;
          const runService = useService("run");
          const location = useLocation();
          const searchParams = new URLSearchParams(location.search);
          const responseId = searchParams.get("response_id");
          const lang = searchParams.get("lang");
          const _React$useState = React.useState(COLLAPSE),
            _React$useState2 = _slicedToArray(_React$useState, 2),
            expanded = _React$useState2[0],
            setExpanded = _React$useState2[1];
          const _React$useState3 = React.useState(false),
            _React$useState4 = _slicedToArray(_React$useState3, 2),
            render = _React$useState4[0],
            setRender = _React$useState4[1];
          const _React$useState5 = React.useState(false),
            _React$useState6 = _slicedToArray(_React$useState5, 2),
            error = _React$useState6[0],
            setError = _React$useState6[1];
          const _React$useState7 = React.useState(false),
            _React$useState8 = _slicedToArray(_React$useState7, 2),
            inlineError = _React$useState8[0],
            setInlineError = _React$useState8[1];
          window["handleBack"] = () => {
            const result = expanded === EXPAND;
            setExpanded(COLLAPSE);
            return result;
          };
          const data = useSelector(state => {
            return state.runState.data;
          }, shallowEqual);
          const isLoading = useSelector(state => state.templateState.isLoading);
          const navigation = useSelector(state => {
            return state.runState.navigation;
          }, shallowEqual);
          const _useTranslation3 = useTranslation("run"),
            t = _useTranslation3.t,
            i18n = _useTranslation3.i18n;
          const dispatch = useDispatch();
          reactExports.useEffect(() => {
            if (navigation) {
              setExpanded(COLLAPSE_IMMEDIATE);
              continueNav(navigation, data.responseId);
            }
          }, [navigation]);
          reactExports.useEffect(() => {
            if (rtlLanguage.includes(i18n.language)) {
              document.dir = "rtl";
            } else {
              document.dir = "ltr";
            }
          }, [i18n.language]);
          const handleError = error2 => {
            console.log("eee", error2);
            const procesed = processError(error2);
            if ([PROCESSED_ERRORS.SURVEY_DESIGN_ERROR, PROCESSED_ERRORS.SURVEY_NOT_ACTIVE, PROCESSED_ERRORS.SURVEY_CLOSED, PROCESSED_ERRORS.SURVEY_EXPIRED, PROCESSED_ERRORS.SURVEY_SCHEDULED].indexOf(procesed) > -1) {
              setInlineError(procesed);
            } else {
              setError(procesed);
            }
            dispatch(setFetching(false));
          };
          const startNav = () => {
            startNavigation(runService, lang, preview, guest, mode).then(response => {
              setRender(true);
              dispatch(stateReceived({
                response,
                preview
              }));
              sessionStorage.setItem("responseId", response.responseId);
              i18n.changeLanguage(response.lang.code);
              dispatch(setFetching(false));
            }).catch(err => {
              handleError(err);
            });
          };
          const continueNav = (payload, responseId2) => {
            dispatch(setFetching(true));
            continueNavigation(runService, payload, responseId2, preview, guest, mode).then(response => {
              setRender(true);
              dispatch(stateReceived({
                response,
                preview
              }));
              sessionStorage.setItem("responseId", response.responseId);
              i18n.changeLanguage(response.lang.code);
              dispatch(setFetching(false));
            }).catch(err => {
              handleError(err);
            });
          };
          reactExports.useEffect(() => {
            document.body.style.overflow = "visible";
            dispatch(setFetching(true));
            loadScript(runService, preview, guest).then(() => {
              if (responseId) {
                continueNav({
                  navigationDirection: {
                    name: "RESUME"
                  }
                }, responseId);
              } else {
                startNav();
              }
            }).catch(err => {
              handleError(err);
            });
          }, []);
          const theme = React.useCallback(createTheme(_objectSpread(_objectSpread({}, defualtTheme(data === null || data === void 0 || (_data$survey = data.survey) === null || _data$survey === void 0 ? void 0 : _data$survey.theme)), {}, {
            direction: rtlLanguage.includes(i18n.language) ? "rtl" : "ltr"
          })), [i18n.language, data === null || data === void 0 || (_data$survey2 = data.survey) === null || _data$survey2 === void 0 ? void 0 : _data$survey2.theme]);
          const cacheRtlMemo = reactExports.useMemo(() => cacheRtl(i18n.language), [i18n.language]);
          const toggleDrawer = open => event => {
            if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
              return;
            }
            setExpanded(open ? EXPAND : COLLAPSE);
          };
          const navigate = useNavigate();
          const onBackClick = () => {
            if (window["Android"]) {
              window["Android"].onBackPressed();
            } else {
              navigate(-1);
            }
          };
          const showBack = window["Android"] || mode == "offline" && navigate.length > 1;
          return /* @__PURE__ */jsxRuntimeExports.jsx(CacheProvider, {
            value: cacheRtlMemo,
            children: /* @__PURE__ */jsxRuntimeExports.jsxs(ThemeProvider, {
              theme,
              children: [error && /* @__PURE__ */jsxRuntimeExports.jsx(ErrorLayout, {
                error,
                setErrorSeen: () => {
                  setError(null);
                }
              }), isLoading ? /* @__PURE__ */jsxRuntimeExports.jsx(LoadingDots, {}) : null, render && /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                className: styles$5.mainContainer,
                style: {
                  backgroundColor: theme.palette.background.default,
                  fontFamily: theme.textStyles.text.font,
                  color: theme.textStyles.text.color,
                  fontSize: theme.textStyles.text.size
                },
                children: [/* @__PURE__ */jsxRuntimeExports.jsx(SurveyAppBar, {
                  toggleDrawer,
                  onBackClick,
                  label: data === null || data === void 0 || (_data$survey3 = data.survey) === null || _data$survey3 === void 0 || (_data$survey3 = _data$survey3.content) === null || _data$survey3 === void 0 ? void 0 : _data$survey3.label,
                  showBack
                }), /* @__PURE__ */jsxRuntimeExports.jsx(Toolbar, {}), /* @__PURE__ */jsxRuntimeExports.jsx(SurveyMemo, {
                  survey: data === null || data === void 0 ? void 0 : data.survey,
                  navigationIndex: data === null || data === void 0 ? void 0 : data.navigationIndex,
                  lang: data === null || data === void 0 ? void 0 : data.lang,
                  additionalLang: data === null || data === void 0 ? void 0 : data.additionalLang
                }, "Survey"), /* @__PURE__ */jsxRuntimeExports.jsx(SurveyDrawer$1, {
                  survey: data === null || data === void 0 ? void 0 : data.survey,
                  expanded,
                  navigationIndex: data === null || data === void 0 ? void 0 : data.navigationIndex,
                  lang: data === null || data === void 0 ? void 0 : data.lang,
                  additionalLang: data === null || data === void 0 ? void 0 : data.additionalLang,
                  toggleDrawer
                })]
              }), inlineError && /* @__PURE__ */jsxRuntimeExports.jsx(Box$2, {
                className: styles$5.surveyDesignError,
                children: /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                  children: t(`processed_errors.${inlineError.name}`)
                })
              })]
            })
          });
        }
        const SurveyMemo = React.memo(Survey);
        const index = /*#__PURE__*/Object.freeze( /*#__PURE__*/Object.defineProperty({
          __proto__: null,
          default: RunSurvey
        }, Symbol.toStringTag, {
          value: 'Module'
        }));
        exports("i", index);
      }
    };
  });
})();
//# sourceMappingURL=index-legacy-DP2zntN1.js.map
