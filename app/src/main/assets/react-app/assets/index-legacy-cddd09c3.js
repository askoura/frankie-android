;
(function () {
  function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
  function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
  function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
  function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
  System.register(['./index-legacy-2ed052c8.js', './index-legacy-d59b65f7.js', './common-legacy-fd659671.js', './ArrowBack-legacy-93a6a0e9.js', './useDispatch-legacy-9bd01023.js', './Card-legacy-c685385d.js', './common-legacy-66f847f3.js', './InputLabel-legacy-b3ce6ce8.js', './FormControlLabel-legacy-ed03c9b7.js', './TextField-legacy-217b7f4c.js', './Checkbox-legacy-2a682871.js', './TableRow-legacy-3cbce76a.js', './Link-legacy-f66514cd.js', './index-legacy-d964c565.js', './DatePicker-legacy-41ebef37.js', './Toolbar-legacy-5c27cd33.js', './FormGroup-legacy-56dee9ee.js', './KeyboardArrowRight-legacy-4d9ad9d0.js', './InputAdornment-legacy-27f92800.js'], function (exports, module) {
    'use strict';

    var __vite_style__ = document.createElement('style');
    __vite_style__.textContent = "._mainContainer_1sjy5_1 {\n  margin: auto;\n}\n\n._drawer_1sjy5_5 {\n  padding: 16px;\n}\n\n._surveyDesignError_1sjy5_9 {\n  position: absolute;\n  text-align: center;\n  font-size: 32px;\n  padding: 16px;\n  top: 33%;\n  right: 20%;\n  left: 20%;\n  color: red;\n  margin: 16px;\n  border: 2px dashed gray;\n  border-radius: 4px;\n}._errorContent_sv3yb_1 {\n  max-width: 500px;\n  margin: auto;\n}\n._groupCard_1t5ma_1 {\n  padding: 8px;\n  margin: 8px;\n}\n\n._groupTitle_1t5ma_6 {\n  font-weight: bolder;\n}\n\n._questionTitle_1t5ma_10 {\n  display: flex;\n  padding: 8px;\n  margin: 8px;\n}\n\n._validationIcon_1t5ma_16 {\n  margin-left: 8px;\n  margin-right: 8px;\n  color: green;\n  font-size: 1.2rem;\n}\n\n._bullet_1t5ma_23 {\n  margin-right: 8px;\n  margin-left: 8px;\n  font-size: 1.2rem;\n}\n._surveyContent_aitfd_1 {\n  margin: 10px 30px;\n}\n\n._surveyGroups_aitfd_5 {\n  margin: auto;\n  max-width: 800px;\n  min-width: 300px;\n}\n\n._cardImage_aitfd_11 {\n  max-height: 22.5vw;\n  height: 160px;\n  margin: 12px auto;\n  background-size: cover;\n  background-position: center;\n  border: 1px solid;\n  border-radius: 8px;\n}\n._wrapper_1hpga_1 {\n  display: flex;\n  align-items: center;\n  width: 100%;\n  margin-top: 10px;\n  margin-bottom: 0;\n  line-height: 16px;\n  letter-spacing: 0.3px;\n}\n\n._icon_1hpga_11 {\n  margin-right: 12px;\n  transform: rotate(180deg);\n}\n._questionItem_1sx0f_1 {\n  margin-bottom: 15px;\n  width: 50%;\n}\n\n._questionItem_1sx0f_1:last-child {\n  margin-bottom: 0;\n}\n\n@media only screen and (max-width: 767px) {\n  ._questionItem_1sx0f_1 {\n    width: 100%;\n  }\n}\n._questionItem_169qj_1 {\n  margin-bottom: 15px;\n  width: 50%;\n}\n\n._questionItem_169qj_1:last-child {\n  margin-bottom: 0;\n}\n\n@media (max-width: 767px) {\n  ._questionItem_169qj_1 {\n    width: 100%;\n  }\n}\n._questionItem_7ep8w_1 {\n  margin-bottom: 15px;\n  width: 50%;\n}\n\n._questionItem_7ep8w_1:last-child {\n  margin-bottom: 0;\n}\n\n@media screen and (max-width: 767px) {\n  ._questionItem_7ep8w_1 {\n    width: 100%;\n  }\n}\n._questionItem_pxk6e_1 {\n  margin-bottom: 15px;\n}\n\n._questionItem_pxk6e_1:last-child {\n  margin-bottom: 0;\n}\n\n@media screen and (max-width: 767px) {\n  ._questionItem_pxk6e_1 {\n    width: 100%;\n  }\n}\n\n._paragraph_pxk6e_15 {\n  width: 100%;\n}\n\n._wordCount_pxk6e_19 {\n  text-align: end;\n}\n/*!\n * Quill Editor v1.3.7\n * https://quilljs.com/\n * Copyright (c) 2014, Jason Chen\n * Copyright (c) 2013, salesforce.com\n */\n.ql-container {\n  box-sizing: border-box;\n  font-family: Helvetica, Arial, sans-serif;\n  font-size: 13px;\n  height: 100%;\n  margin: 0px;\n  position: relative;\n}\n.ql-container.ql-disabled .ql-tooltip {\n  visibility: hidden;\n}\n.ql-container.ql-disabled .ql-editor ul[data-checked] > li::before {\n  pointer-events: none;\n}\n.ql-clipboard {\n  left: -100000px;\n  height: 1px;\n  overflow-y: hidden;\n  position: absolute;\n  top: 50%;\n}\n.ql-clipboard p {\n  margin: 0;\n  padding: 0;\n}\n.ql-editor {\n  box-sizing: border-box;\n  line-height: 1.42;\n  height: 100%;\n  outline: none;\n  overflow-y: auto;\n  padding: 12px 15px;\n  tab-size: 4;\n  -moz-tab-size: 4;\n  text-align: left;\n  white-space: pre-wrap;\n  word-wrap: break-word;\n}\n.ql-editor > * {\n  cursor: text;\n}\n.ql-editor p,\n.ql-editor ol,\n.ql-editor ul,\n.ql-editor pre,\n.ql-editor blockquote,\n.ql-editor h1,\n.ql-editor h2,\n.ql-editor h3,\n.ql-editor h4,\n.ql-editor h5,\n.ql-editor h6 {\n  margin: 0;\n  padding: 0;\n  counter-reset: list-1 list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;\n}\n.ql-editor ol,\n.ql-editor ul {\n  padding-left: 1.5em;\n}\n.ql-editor ol > li,\n.ql-editor ul > li {\n  list-style-type: none;\n}\n.ql-editor ul > li::before {\n  content: '\\2022';\n}\n.ql-editor ul[data-checked=true],\n.ql-editor ul[data-checked=false] {\n  pointer-events: none;\n}\n.ql-editor ul[data-checked=true] > li *,\n.ql-editor ul[data-checked=false] > li * {\n  pointer-events: all;\n}\n.ql-editor ul[data-checked=true] > li::before,\n.ql-editor ul[data-checked=false] > li::before {\n  color: #777;\n  cursor: pointer;\n  pointer-events: all;\n}\n.ql-editor ul[data-checked=true] > li::before {\n  content: '\\2611';\n}\n.ql-editor ul[data-checked=false] > li::before {\n  content: '\\2610';\n}\n.ql-editor li::before {\n  display: inline-block;\n  white-space: nowrap;\n  width: 1.2em;\n}\n.ql-editor li:not(.ql-direction-rtl)::before {\n  margin-left: -1.5em;\n  margin-right: 0.3em;\n  text-align: right;\n}\n.ql-editor li.ql-direction-rtl::before {\n  margin-left: 0.3em;\n  margin-right: -1.5em;\n}\n.ql-editor ol li:not(.ql-direction-rtl),\n.ql-editor ul li:not(.ql-direction-rtl) {\n  padding-left: 1.5em;\n}\n.ql-editor ol li.ql-direction-rtl,\n.ql-editor ul li.ql-direction-rtl {\n  padding-right: 1.5em;\n}\n.ql-editor ol li {\n  counter-reset: list-1 list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;\n  counter-increment: list-0;\n}\n.ql-editor ol li:before {\n  content: counter(list-0, decimal) '. ';\n}\n.ql-editor ol li.ql-indent-1 {\n  counter-increment: list-1;\n}\n.ql-editor ol li.ql-indent-1:before {\n  content: counter(list-1, lower-alpha) '. ';\n}\n.ql-editor ol li.ql-indent-1 {\n  counter-reset: list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;\n}\n.ql-editor ol li.ql-indent-2 {\n  counter-increment: list-2;\n}\n.ql-editor ol li.ql-indent-2:before {\n  content: counter(list-2, lower-roman) '. ';\n}\n.ql-editor ol li.ql-indent-2 {\n  counter-reset: list-3 list-4 list-5 list-6 list-7 list-8 list-9;\n}\n.ql-editor ol li.ql-indent-3 {\n  counter-increment: list-3;\n}\n.ql-editor ol li.ql-indent-3:before {\n  content: counter(list-3, decimal) '. ';\n}\n.ql-editor ol li.ql-indent-3 {\n  counter-reset: list-4 list-5 list-6 list-7 list-8 list-9;\n}\n.ql-editor ol li.ql-indent-4 {\n  counter-increment: list-4;\n}\n.ql-editor ol li.ql-indent-4:before {\n  content: counter(list-4, lower-alpha) '. ';\n}\n.ql-editor ol li.ql-indent-4 {\n  counter-reset: list-5 list-6 list-7 list-8 list-9;\n}\n.ql-editor ol li.ql-indent-5 {\n  counter-increment: list-5;\n}\n.ql-editor ol li.ql-indent-5:before {\n  content: counter(list-5, lower-roman) '. ';\n}\n.ql-editor ol li.ql-indent-5 {\n  counter-reset: list-6 list-7 list-8 list-9;\n}\n.ql-editor ol li.ql-indent-6 {\n  counter-increment: list-6;\n}\n.ql-editor ol li.ql-indent-6:before {\n  content: counter(list-6, decimal) '. ';\n}\n.ql-editor ol li.ql-indent-6 {\n  counter-reset: list-7 list-8 list-9;\n}\n.ql-editor ol li.ql-indent-7 {\n  counter-increment: list-7;\n}\n.ql-editor ol li.ql-indent-7:before {\n  content: counter(list-7, lower-alpha) '. ';\n}\n.ql-editor ol li.ql-indent-7 {\n  counter-reset: list-8 list-9;\n}\n.ql-editor ol li.ql-indent-8 {\n  counter-increment: list-8;\n}\n.ql-editor ol li.ql-indent-8:before {\n  content: counter(list-8, lower-roman) '. ';\n}\n.ql-editor ol li.ql-indent-8 {\n  counter-reset: list-9;\n}\n.ql-editor ol li.ql-indent-9 {\n  counter-increment: list-9;\n}\n.ql-editor ol li.ql-indent-9:before {\n  content: counter(list-9, decimal) '. ';\n}\n.ql-editor .ql-indent-1:not(.ql-direction-rtl) {\n  padding-left: 3em;\n}\n.ql-editor li.ql-indent-1:not(.ql-direction-rtl) {\n  padding-left: 4.5em;\n}\n.ql-editor .ql-indent-1.ql-direction-rtl.ql-align-right {\n  padding-right: 3em;\n}\n.ql-editor li.ql-indent-1.ql-direction-rtl.ql-align-right {\n  padding-right: 4.5em;\n}\n.ql-editor .ql-indent-2:not(.ql-direction-rtl) {\n  padding-left: 6em;\n}\n.ql-editor li.ql-indent-2:not(.ql-direction-rtl) {\n  padding-left: 7.5em;\n}\n.ql-editor .ql-indent-2.ql-direction-rtl.ql-align-right {\n  padding-right: 6em;\n}\n.ql-editor li.ql-indent-2.ql-direction-rtl.ql-align-right {\n  padding-right: 7.5em;\n}\n.ql-editor .ql-indent-3:not(.ql-direction-rtl) {\n  padding-left: 9em;\n}\n.ql-editor li.ql-indent-3:not(.ql-direction-rtl) {\n  padding-left: 10.5em;\n}\n.ql-editor .ql-indent-3.ql-direction-rtl.ql-align-right {\n  padding-right: 9em;\n}\n.ql-editor li.ql-indent-3.ql-direction-rtl.ql-align-right {\n  padding-right: 10.5em;\n}\n.ql-editor .ql-indent-4:not(.ql-direction-rtl) {\n  padding-left: 12em;\n}\n.ql-editor li.ql-indent-4:not(.ql-direction-rtl) {\n  padding-left: 13.5em;\n}\n.ql-editor .ql-indent-4.ql-direction-rtl.ql-align-right {\n  padding-right: 12em;\n}\n.ql-editor li.ql-indent-4.ql-direction-rtl.ql-align-right {\n  padding-right: 13.5em;\n}\n.ql-editor .ql-indent-5:not(.ql-direction-rtl) {\n  padding-left: 15em;\n}\n.ql-editor li.ql-indent-5:not(.ql-direction-rtl) {\n  padding-left: 16.5em;\n}\n.ql-editor .ql-indent-5.ql-direction-rtl.ql-align-right {\n  padding-right: 15em;\n}\n.ql-editor li.ql-indent-5.ql-direction-rtl.ql-align-right {\n  padding-right: 16.5em;\n}\n.ql-editor .ql-indent-6:not(.ql-direction-rtl) {\n  padding-left: 18em;\n}\n.ql-editor li.ql-indent-6:not(.ql-direction-rtl) {\n  padding-left: 19.5em;\n}\n.ql-editor .ql-indent-6.ql-direction-rtl.ql-align-right {\n  padding-right: 18em;\n}\n.ql-editor li.ql-indent-6.ql-direction-rtl.ql-align-right {\n  padding-right: 19.5em;\n}\n.ql-editor .ql-indent-7:not(.ql-direction-rtl) {\n  padding-left: 21em;\n}\n.ql-editor li.ql-indent-7:not(.ql-direction-rtl) {\n  padding-left: 22.5em;\n}\n.ql-editor .ql-indent-7.ql-direction-rtl.ql-align-right {\n  padding-right: 21em;\n}\n.ql-editor li.ql-indent-7.ql-direction-rtl.ql-align-right {\n  padding-right: 22.5em;\n}\n.ql-editor .ql-indent-8:not(.ql-direction-rtl) {\n  padding-left: 24em;\n}\n.ql-editor li.ql-indent-8:not(.ql-direction-rtl) {\n  padding-left: 25.5em;\n}\n.ql-editor .ql-indent-8.ql-direction-rtl.ql-align-right {\n  padding-right: 24em;\n}\n.ql-editor li.ql-indent-8.ql-direction-rtl.ql-align-right {\n  padding-right: 25.5em;\n}\n.ql-editor .ql-indent-9:not(.ql-direction-rtl) {\n  padding-left: 27em;\n}\n.ql-editor li.ql-indent-9:not(.ql-direction-rtl) {\n  padding-left: 28.5em;\n}\n.ql-editor .ql-indent-9.ql-direction-rtl.ql-align-right {\n  padding-right: 27em;\n}\n.ql-editor li.ql-indent-9.ql-direction-rtl.ql-align-right {\n  padding-right: 28.5em;\n}\n.ql-editor .ql-video {\n  display: block;\n  max-width: 100%;\n}\n.ql-editor .ql-video.ql-align-center {\n  margin: 0 auto;\n}\n.ql-editor .ql-video.ql-align-right {\n  margin: 0 0 0 auto;\n}\n.ql-editor .ql-bg-black {\n  background-color: #000;\n}\n.ql-editor .ql-bg-red {\n  background-color: #e60000;\n}\n.ql-editor .ql-bg-orange {\n  background-color: #f90;\n}\n.ql-editor .ql-bg-yellow {\n  background-color: #ff0;\n}\n.ql-editor .ql-bg-green {\n  background-color: #008a00;\n}\n.ql-editor .ql-bg-blue {\n  background-color: #06c;\n}\n.ql-editor .ql-bg-purple {\n  background-color: #93f;\n}\n.ql-editor .ql-color-white {\n  color: #fff;\n}\n.ql-editor .ql-color-red {\n  color: #e60000;\n}\n.ql-editor .ql-color-orange {\n  color: #f90;\n}\n.ql-editor .ql-color-yellow {\n  color: #ff0;\n}\n.ql-editor .ql-color-green {\n  color: #008a00;\n}\n.ql-editor .ql-color-blue {\n  color: #06c;\n}\n.ql-editor .ql-color-purple {\n  color: #93f;\n}\n.ql-editor .ql-font-serif {\n  font-family: Georgia, Times New Roman, serif;\n}\n.ql-editor .ql-font-monospace {\n  font-family: Monaco, Courier New, monospace;\n}\n.ql-editor .ql-size-small {\n  font-size: 0.75em;\n}\n.ql-editor .ql-size-large {\n  font-size: 1.5em;\n}\n.ql-editor .ql-size-huge {\n  font-size: 2.5em;\n}\n.ql-editor .ql-direction-rtl {\n  direction: rtl;\n  text-align: inherit;\n}\n.ql-editor .ql-align-center {\n  text-align: center;\n}\n.ql-editor .ql-align-justify {\n  text-align: justify;\n}\n.ql-editor .ql-align-right {\n  text-align: right;\n}\n.ql-editor.ql-blank::before {\n  color: rgba(0,0,0,0.6);\n  content: attr(data-placeholder);\n  font-style: italic;\n  left: 15px;\n  pointer-events: none;\n  position: absolute;\n  right: 15px;\n}\n.rtl {\n  direction: rtl !important;\n  text-align: right !important;\n}\n\n.no-padding {\n  padding: 0 !important;\n}\n\n.no-padding > :last-child {\n  margin-bottom: 0;\n}\n\n.no-padding > :first-child {\n  margin-top: 0;\n}\n._wrapper_2goe7_1 {\n  width: 50%;\n}\n\n@media only screen and (max-width: 768px) {\n  ._wrapper_2goe7_1 {\n    width: 100%;\n  }\n}\n._content_vh4hz_1 {\n  width: 100%;\n  margin: 0;\n  letter-spacing: 0.1px;\n  word-break: break-word;\n}\n\n._content_vh4hz_1._question_vh4hz_8 {\n  margin-bottom: 4px;\n}\n\n._content_vh4hz_1 ._required_vh4hz_12 {\n  margin-left: 5px;\n}\n\n._header_vh4hz_16 {\n  margin-bottom: 12px;\n}\n\n._textDescription_vh4hz_20 {\n  max-width: 100%;\n  margin-bottom: 4px;\n}\n\n._groupQuestion_vh4hz_25 {\n  margin-bottom: 12px;\n  padding: 24px;\n  border-style: solid;\n  border-width: 1px;\n  border-radius: 8px;\n  word-wrap: break-word;\n  page-break-inside: avoid;\n  transition: all 200ms cubic-bezier(0, 0, 0.2, 1);\n}\n._imageContainer_mdpfi_1 {\n  background-size: contain;\n  background-position: center;\n  background-repeat: no-repeat;\n}\n\n._imageGrid_mdpfi_7 {\n  margin-top: 16px;\n}\n\n._selection_mdpfi_11 {\n  border-radius: 0 !important;\n  background-color: #ffffffcc !important;\n}\n._imageGrid_1uvun_1 {\n  margin-top: 16px;\n}\n\n._imageContainer_1uvun_5 {\n  background-size: contain;\n  background-position: center;\n  background-repeat: no-repeat;\n}\n\n._selection_1uvun_11 {\n  border-radius: 0 !important;\n  background-color: #ffffffcc !important;\n}\n._dragContainer_spv9x_1 {\n  border: 1px solid transparent;\n  border-radius: 4px;\n  height: 100%;\n  margin: auto 8px;\n}\n\n._rankingItem_spv9x_8 {\n  margin: 8px;\n  padding: 8px;\n}\n._signatureCanvas_1bkvb_1 {\n  background-color: white;\n  border: 1px solid transparent;\n  border-radius: 4px;\n  width: 100%;\n  margin: auto;\n  text-align: center;\n}\n\n._container_1bkvb_10 {\n  padding: 8px;\n}\n\n._buttonContainer_1bkvb_14 {\n  text-align: end;\n}._imageGrid_gkz8d_1 {\n  margin-top: 16px;\n}\n\n._imageContainer_gkz8d_5 {\n  background-size: contain;\n  background-position: center;\n  background-repeat: no-repeat;\n}\n\n._rankContainer_gkz8d_11 {\n  display: table;\n  text-align: center;\n  vertical-align: middle;\n  border: 1px solid transparent;\n  background-color: rgba(255, 255, 255, 0.7);\n}\n\n._rankValue_gkz8d_19 {\n  color: white;\n  display: table-cell;\n  vertical-align: middle;\n}\n._choicesContainer_iaaeb_1 {\n  display: flex;\n  width: 100%;\n  table-layout: fixed;\n  margin-bottom: 16px;\n  justify-content: space-between;\n}\n\n._choice_iaaeb_1 {\n  padding: 8px;\n  width: 100%;\n  margin: 1px;\n  font-weight: bold;\n  font-size: larger;\n  border: 1px solid;\n  text-align: center;\n}\n\n._choiceLabels_iaaeb_19 {\n  margin-top: 16px;\n  display: flex;\n  justify-content: space-between;\n}\n\n._container_bvkr6_2 {\n  text-align: center;\n}._textHeader_vleqj_1 {\n  max-width: 100%;\n}\n\n._textDescription_vleqj_5 {\n  max-width: 100%;\n  margin-top: 8px;\n}\n._titleRow_vleqj_9 {\n  display: block;\n  justify-content: space-between;\n  align-items: center;\n  box-align: center;\n  margin: 24px;\n  flex-wrap: wrap;\n  box-pack: justify;\n}\n\n._groupHeader_vleqj_19 {\n  border: 1px solid transparent;\n  border-top-right-radius: 8px;\n  border-top-left-radius: 8px;\n}\n";
    document.head.appendChild(__vite_style__);
    var generateUtilityClass, generateUtilityClasses, styled, capitalize, _extends, reactExports, useThemeProps, _objectWithoutPropertiesLoose, jsxRuntimeExports, clsx, composeClasses, useForkRef, debounce, ownerWindow, rootShouldForwardProp, requireCreateSvgIcon, interopRequireDefaultExports, useTheme$1, useSelector, stripTags, jump, navigatePrevious, navigateNext, valueChange, setDirty, React, previewUrl, uploadFile, useTheme$2, DragDropContext, ConnectedDroppable, PublicDraggable, orderChange, getAugmentedNamespace, commonjsGlobal, getDefaultExportFromCjs, downloadFileAsBase64, uploadDataUrl, langChange, useLocation, continueNavigation, stateReceived, setFetching, loadScript, createTheme, defualtTheme, createCache, prefixer, stylisRTLPlugin, useNavigate, CacheProvider, processError, PROCESSED_ERRORS, startNavigation, ErrorOutlineOutlined, RadioGroup, Radio, DateTimePicker, TimePicker, propTypesExports, ReactPlayer, CardMedia, ThemeProvider, Layout, createBox, Paper, useTheme, Transition, reflow, getTransitionProps, Modal, useTranslation, rtlLanguage, Snackbar, Alert, Button, Box$2, TextareaAutosize, Select, MenuItem, IconButton, Typography, default_1$3, useDispatch, Card, buildResourceUrl, FormControl, InputLabel, FormControlLabel, TextField, Checkbox, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Link, dayjs, AdapterDayjs, LocalizationProvider, DatePicker, Grid, Toolbar;
    return {
      setters: [function (module) {
        generateUtilityClass = module.q;
        generateUtilityClasses = module.n;
        styled = module.t;
        capitalize = module.W;
        _extends = module.m;
        reactExports = module.r;
        useThemeProps = module.v;
        _objectWithoutPropertiesLoose = module._;
        jsxRuntimeExports = module.j;
        clsx = module.x;
        composeClasses = module.y;
        useForkRef = module.X;
        debounce = module.Y;
        ownerWindow = module.Z;
        rootShouldForwardProp = module.$;
        requireCreateSvgIcon = module.g;
        interopRequireDefaultExports = module.i;
        useTheme$1 = module.a0;
        useSelector = module.b;
        stripTags = module.a1;
        jump = module.a2;
        navigatePrevious = module.a3;
        navigateNext = module.a4;
        valueChange = module.a5;
        setDirty = module.a6;
        React = module.R;
        previewUrl = module.B;
        uploadFile = module.a7;
        useTheme$2 = module.a8;
        DragDropContext = module.a9;
        ConnectedDroppable = module.aa;
        PublicDraggable = module.ab;
        orderChange = module.ac;
        getAugmentedNamespace = module.ad;
        commonjsGlobal = module.z;
        getDefaultExportFromCjs = module.A;
        downloadFileAsBase64 = module.ae;
        uploadDataUrl = module.af;
        langChange = module.ag;
        useLocation = module.D;
        continueNavigation = module.ah;
        stateReceived = module.ai;
        setFetching = module.aj;
        loadScript = module.ak;
        createTheme = module.al;
        defualtTheme = module.am;
        createCache = module.an;
        prefixer = module.ao;
        stylisRTLPlugin = module.ap;
        useNavigate = module.u;
        CacheProvider = module.aq;
        processError = module.p;
        PROCESSED_ERRORS = module.P;
        startNavigation = module.ar;
      }, function (module) {
        ErrorOutlineOutlined = module.E;
        RadioGroup = module.R;
        Radio = module.a;
        DateTimePicker = module.D;
        TimePicker = module.T;
        propTypesExports = module.p;
        ReactPlayer = module.b;
        CardMedia = module.C;
        ThemeProvider = module.c;
        Layout = module.L;
      }, function (module) {
        createBox = module.l;
        Paper = module.P;
        useTheme = module.f;
        Transition = module.m;
        reflow = module.n;
        getTransitionProps = module.o;
        Modal = module.M;
        useTranslation = module.u;
        rtlLanguage = module.r;
        Snackbar = module.S;
        Alert = module.A;
        Button = module.b;
        Box$2 = module.B;
        TextareaAutosize = module.p;
        Select = module.c;
        MenuItem = module.d;
        IconButton = module.a;
        Typography = module.T;
      }, function (module) {
        default_1$3 = module.d;
      }, function (module) {
        useDispatch = module.u;
      }, function (module) {
        Card = module.C;
      }, function (module) {
        buildResourceUrl = module.b;
      }, function (module) {
        FormControl = module.F;
        InputLabel = module.I;
      }, function (module) {
        FormControlLabel = module.F;
      }, function (module) {
        TextField = module.T;
      }, function (module) {
        Checkbox = module.C;
      }, function (module) {
        TableContainer = module.T;
        Table = module.a;
        TableHead = module.b;
        TableRow = module.c;
        TableCell = module.d;
        TableBody = module.e;
      }, function (module) {
        Link = module.L;
      }, function (module) {
        dayjs = module.d;
        AdapterDayjs = module.A;
      }, function (module) {
        LocalizationProvider = module.L;
        DatePicker = module.D;
        Grid = module.G;
      }, function (module) {
        Toolbar = module.T;
      }, null, null, null],
      execute: function execute() {
        exports('default', RunSurvey);
        var Box = createBox();
        var Box$1 = Box;
        function is(x, y) {
          if (x === y) {
            return x !== 0 || y !== 0 || 1 / x === 1 / y;
          } else {
            return x !== x && y !== y;
          }
        }
        function shallowEqual(objA, objB) {
          if (is(objA, objB)) return true;
          if (_typeof(objA) !== 'object' || objA === null || _typeof(objB) !== 'object' || objB === null) {
            return false;
          }
          var keysA = Object.keys(objA);
          var keysB = Object.keys(objB);
          if (keysA.length !== keysB.length) return false;
          for (var i = 0; i < keysA.length; i++) {
            if (!Object.prototype.hasOwnProperty.call(objB, keysA[i]) || !is(objA[keysA[i]], objB[keysA[i]])) {
              return false;
            }
          }
          return true;
        }
        function getAppBarUtilityClass(slot) {
          return generateUtilityClass('MuiAppBar', slot);
        }
        generateUtilityClasses('MuiAppBar', ['root', 'positionFixed', 'positionAbsolute', 'positionSticky', 'positionStatic', 'positionRelative', 'colorDefault', 'colorPrimary', 'colorSecondary', 'colorInherit', 'colorTransparent']);
        var _excluded$2 = ["className", "color", "enableColorOnDark", "position"];
        var useUtilityClasses$1 = function useUtilityClasses$1(ownerState) {
          var color = ownerState.color,
            position = ownerState.position,
            classes = ownerState.classes;
          var slots = {
            root: ['root', "color".concat(capitalize(color)), "position".concat(capitalize(position))]
          };
          return composeClasses(slots, getAppBarUtilityClass, classes);
        };

        // var2 is the fallback.
        // Ex. var1: 'var(--a)', var2: 'var(--b)'; return: 'var(--a, var(--b))'
        var joinVars = function joinVars(var1, var2) {
          return var1 ? "".concat(var1 == null ? void 0 : var1.replace(')', ''), ", ").concat(var2, ")") : var2;
        };
        var AppBarRoot = styled(Paper, {
          name: 'MuiAppBar',
          slot: 'Root',
          overridesResolver: function overridesResolver(props, styles) {
            var ownerState = props.ownerState;
            return [styles.root, styles["position".concat(capitalize(ownerState.position))], styles["color".concat(capitalize(ownerState.color))]];
          }
        })(function (_ref) {
          var theme = _ref.theme,
            ownerState = _ref.ownerState;
          var backgroundColorDefault = theme.palette.mode === 'light' ? theme.palette.grey[100] : theme.palette.grey[900];
          return _extends({
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            boxSizing: 'border-box',
            // Prevent padding issue with the Modal and fixed positioned AppBar.
            flexShrink: 0
          }, ownerState.position === 'fixed' && {
            position: 'fixed',
            zIndex: (theme.vars || theme).zIndex.appBar,
            top: 0,
            left: 'auto',
            right: 0,
            '@media print': {
              // Prevent the app bar to be visible on each printed page.
              position: 'absolute'
            }
          }, ownerState.position === 'absolute' && {
            position: 'absolute',
            zIndex: (theme.vars || theme).zIndex.appBar,
            top: 0,
            left: 'auto',
            right: 0
          }, ownerState.position === 'sticky' && {
            // ⚠️ sticky is not supported by IE11.
            position: 'sticky',
            zIndex: (theme.vars || theme).zIndex.appBar,
            top: 0,
            left: 'auto',
            right: 0
          }, ownerState.position === 'static' && {
            position: 'static'
          }, ownerState.position === 'relative' && {
            position: 'relative'
          }, !theme.vars && _extends({}, ownerState.color === 'default' && {
            backgroundColor: backgroundColorDefault,
            color: theme.palette.getContrastText(backgroundColorDefault)
          }, ownerState.color && ownerState.color !== 'default' && ownerState.color !== 'inherit' && ownerState.color !== 'transparent' && {
            backgroundColor: theme.palette[ownerState.color].main,
            color: theme.palette[ownerState.color].contrastText
          }, ownerState.color === 'inherit' && {
            color: 'inherit'
          }, theme.palette.mode === 'dark' && !ownerState.enableColorOnDark && {
            backgroundColor: null,
            color: null
          }, ownerState.color === 'transparent' && _extends({
            backgroundColor: 'transparent',
            color: 'inherit'
          }, theme.palette.mode === 'dark' && {
            backgroundImage: 'none'
          })), theme.vars && _extends({}, ownerState.color === 'default' && {
            '--AppBar-background': ownerState.enableColorOnDark ? theme.vars.palette.AppBar.defaultBg : joinVars(theme.vars.palette.AppBar.darkBg, theme.vars.palette.AppBar.defaultBg),
            '--AppBar-color': ownerState.enableColorOnDark ? theme.vars.palette.text.primary : joinVars(theme.vars.palette.AppBar.darkColor, theme.vars.palette.text.primary)
          }, ownerState.color && !ownerState.color.match(/^(default|inherit|transparent)$/) && {
            '--AppBar-background': ownerState.enableColorOnDark ? theme.vars.palette[ownerState.color].main : joinVars(theme.vars.palette.AppBar.darkBg, theme.vars.palette[ownerState.color].main),
            '--AppBar-color': ownerState.enableColorOnDark ? theme.vars.palette[ownerState.color].contrastText : joinVars(theme.vars.palette.AppBar.darkColor, theme.vars.palette[ownerState.color].contrastText)
          }, {
            backgroundColor: 'var(--AppBar-background)',
            color: ownerState.color === 'inherit' ? 'inherit' : 'var(--AppBar-color)'
          }, ownerState.color === 'transparent' && {
            backgroundImage: 'none',
            backgroundColor: 'transparent',
            color: 'inherit'
          }));
        });
        var AppBar = /*#__PURE__*/reactExports.forwardRef(function AppBar(inProps, ref) {
          var props = useThemeProps({
            props: inProps,
            name: 'MuiAppBar'
          });
          var className = props.className,
            _props$color = props.color,
            color = _props$color === void 0 ? 'primary' : _props$color,
            _props$enableColorOnD = props.enableColorOnDark,
            enableColorOnDark = _props$enableColorOnD === void 0 ? false : _props$enableColorOnD,
            _props$position = props.position,
            position = _props$position === void 0 ? 'fixed' : _props$position,
            other = _objectWithoutPropertiesLoose(props, _excluded$2);
          var ownerState = _extends({}, props, {
            color: color,
            position: position,
            enableColorOnDark: enableColorOnDark
          });
          var classes = useUtilityClasses$1(ownerState);
          return /*#__PURE__*/jsxRuntimeExports.jsx(AppBarRoot, _extends({
            square: true,
            component: "header",
            ownerState: ownerState,
            elevation: 4,
            className: clsx(classes.root, className, position === 'fixed' && 'mui-fixed'),
            ref: ref
          }, other));
        });
        var AppBar$1 = AppBar;
        var _excluded$1 = ["addEndListener", "appear", "children", "container", "direction", "easing", "in", "onEnter", "onEntered", "onEntering", "onExit", "onExited", "onExiting", "style", "timeout", "TransitionComponent"];
        function getTranslateValue(direction, node, resolvedContainer) {
          var rect = node.getBoundingClientRect();
          var containerRect = resolvedContainer && resolvedContainer.getBoundingClientRect();
          var containerWindow = ownerWindow(node);
          var transform;
          if (node.fakeTransform) {
            transform = node.fakeTransform;
          } else {
            var computedStyle = containerWindow.getComputedStyle(node);
            transform = computedStyle.getPropertyValue('-webkit-transform') || computedStyle.getPropertyValue('transform');
          }
          var offsetX = 0;
          var offsetY = 0;
          if (transform && transform !== 'none' && typeof transform === 'string') {
            var transformValues = transform.split('(')[1].split(')')[0].split(',');
            offsetX = parseInt(transformValues[4], 10);
            offsetY = parseInt(transformValues[5], 10);
          }
          if (direction === 'left') {
            if (containerRect) {
              return "translateX(".concat(containerRect.right + offsetX - rect.left, "px)");
            }
            return "translateX(".concat(containerWindow.innerWidth + offsetX - rect.left, "px)");
          }
          if (direction === 'right') {
            if (containerRect) {
              return "translateX(-".concat(rect.right - containerRect.left - offsetX, "px)");
            }
            return "translateX(-".concat(rect.left + rect.width - offsetX, "px)");
          }
          if (direction === 'up') {
            if (containerRect) {
              return "translateY(".concat(containerRect.bottom + offsetY - rect.top, "px)");
            }
            return "translateY(".concat(containerWindow.innerHeight + offsetY - rect.top, "px)");
          }

          // direction === 'down'
          if (containerRect) {
            return "translateY(-".concat(rect.top - containerRect.top + rect.height - offsetY, "px)");
          }
          return "translateY(-".concat(rect.top + rect.height - offsetY, "px)");
        }
        function resolveContainer(containerPropProp) {
          return typeof containerPropProp === 'function' ? containerPropProp() : containerPropProp;
        }
        function setTranslateValue(direction, node, containerProp) {
          var resolvedContainer = resolveContainer(containerProp);
          var transform = getTranslateValue(direction, node, resolvedContainer);
          if (transform) {
            node.style.webkitTransform = transform;
            node.style.transform = transform;
          }
        }

        /**
         * The Slide transition is used by the [Drawer](/material-ui/react-drawer/) component.
         * It uses [react-transition-group](https://github.com/reactjs/react-transition-group) internally.
         */
        var Slide = /*#__PURE__*/reactExports.forwardRef(function Slide(props, ref) {
          var theme = useTheme();
          var defaultEasing = {
            enter: theme.transitions.easing.easeOut,
            exit: theme.transitions.easing.sharp
          };
          var defaultTimeout = {
            enter: theme.transitions.duration.enteringScreen,
            exit: theme.transitions.duration.leavingScreen
          };
          var addEndListener = props.addEndListener,
            _props$appear = props.appear,
            appear = _props$appear === void 0 ? true : _props$appear,
            _children = props.children,
            containerProp = props.container,
            _props$direction = props.direction,
            direction = _props$direction === void 0 ? 'down' : _props$direction,
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
          var childrenRef = reactExports.useRef(null);
          var handleRef = useForkRef(_children.ref, childrenRef, ref);
          var normalizedTransitionCallback = function normalizedTransitionCallback(callback) {
            return function (isAppearing) {
              if (callback) {
                // onEnterXxx and onExitXxx callbacks have a different arguments.length value.
                if (isAppearing === undefined) {
                  callback(childrenRef.current);
                } else {
                  callback(childrenRef.current, isAppearing);
                }
              }
            };
          };
          var handleEnter = normalizedTransitionCallback(function (node, isAppearing) {
            setTranslateValue(direction, node, containerProp);
            reflow(node);
            if (onEnter) {
              onEnter(node, isAppearing);
            }
          });
          var handleEntering = normalizedTransitionCallback(function (node, isAppearing) {
            var transitionProps = getTransitionProps({
              timeout: timeout,
              style: style,
              easing: easingProp
            }, {
              mode: 'enter'
            });
            node.style.webkitTransition = theme.transitions.create('-webkit-transform', _extends({}, transitionProps));
            node.style.transition = theme.transitions.create('transform', _extends({}, transitionProps));
            node.style.webkitTransform = 'none';
            node.style.transform = 'none';
            if (onEntering) {
              onEntering(node, isAppearing);
            }
          });
          var handleEntered = normalizedTransitionCallback(onEntered);
          var handleExiting = normalizedTransitionCallback(onExiting);
          var handleExit = normalizedTransitionCallback(function (node) {
            var transitionProps = getTransitionProps({
              timeout: timeout,
              style: style,
              easing: easingProp
            }, {
              mode: 'exit'
            });
            node.style.webkitTransition = theme.transitions.create('-webkit-transform', transitionProps);
            node.style.transition = theme.transitions.create('transform', transitionProps);
            setTranslateValue(direction, node, containerProp);
            if (onExit) {
              onExit(node);
            }
          });
          var handleExited = normalizedTransitionCallback(function (node) {
            // No need for transitions when the component is hidden
            node.style.webkitTransition = '';
            node.style.transition = '';
            if (onExited) {
              onExited(node);
            }
          });
          var handleAddEndListener = function handleAddEndListener(next) {
            if (addEndListener) {
              // Old call signature before `react-transition-group` implemented `nodeRef`
              addEndListener(childrenRef.current, next);
            }
          };
          var updatePosition = reactExports.useCallback(function () {
            if (childrenRef.current) {
              setTranslateValue(direction, childrenRef.current, containerProp);
            }
          }, [direction, containerProp]);
          reactExports.useEffect(function () {
            // Skip configuration where the position is screen size invariant.
            if (inProp || direction === 'down' || direction === 'right') {
              return undefined;
            }
            var handleResize = debounce(function () {
              if (childrenRef.current) {
                setTranslateValue(direction, childrenRef.current, containerProp);
              }
            });
            var containerWindow = ownerWindow(childrenRef.current);
            containerWindow.addEventListener('resize', handleResize);
            return function () {
              handleResize.clear();
              containerWindow.removeEventListener('resize', handleResize);
            };
          }, [direction, inProp, containerProp]);
          reactExports.useEffect(function () {
            if (!inProp) {
              // We need to update the position of the drawer when the direction change and
              // when it's hidden.
              updatePosition();
            }
          }, [inProp, updatePosition]);
          return /*#__PURE__*/jsxRuntimeExports.jsx(TransitionComponent, _extends({
            nodeRef: childrenRef,
            onEnter: handleEnter,
            onEntered: handleEntered,
            onEntering: handleEntering,
            onExit: handleExit,
            onExited: handleExited,
            onExiting: handleExiting,
            addEndListener: handleAddEndListener,
            appear: appear,
            in: inProp,
            timeout: timeout
          }, other, {
            children: function children(state, childProps) {
              return /*#__PURE__*/reactExports.cloneElement(_children, _extends({
                ref: handleRef,
                style: _extends({
                  visibility: state === 'exited' && !inProp ? 'hidden' : undefined
                }, style, _children.props.style)
              }, childProps));
            }
          }));
        });
        var Slide$1 = Slide;
        function getDrawerUtilityClass(slot) {
          return generateUtilityClass('MuiDrawer', slot);
        }
        generateUtilityClasses('MuiDrawer', ['root', 'docked', 'paper', 'paperAnchorLeft', 'paperAnchorRight', 'paperAnchorTop', 'paperAnchorBottom', 'paperAnchorDockedLeft', 'paperAnchorDockedRight', 'paperAnchorDockedTop', 'paperAnchorDockedBottom', 'modal']);
        var _excluded = ["BackdropProps"],
          _excluded2 = ["anchor", "BackdropProps", "children", "className", "elevation", "hideBackdrop", "ModalProps", "onClose", "open", "PaperProps", "SlideProps", "TransitionComponent", "transitionDuration", "variant"];
        var overridesResolver = function overridesResolver(props, styles) {
          var ownerState = props.ownerState;
          return [styles.root, (ownerState.variant === 'permanent' || ownerState.variant === 'persistent') && styles.docked, styles.modal];
        };
        var useUtilityClasses = function useUtilityClasses(ownerState) {
          var classes = ownerState.classes,
            anchor = ownerState.anchor,
            variant = ownerState.variant;
          var slots = {
            root: ['root'],
            docked: [(variant === 'permanent' || variant === 'persistent') && 'docked'],
            modal: ['modal'],
            paper: ['paper', "paperAnchor".concat(capitalize(anchor)), variant !== 'temporary' && "paperAnchorDocked".concat(capitalize(anchor))]
          };
          return composeClasses(slots, getDrawerUtilityClass, classes);
        };
        var DrawerRoot = styled(Modal, {
          name: 'MuiDrawer',
          slot: 'Root',
          overridesResolver: overridesResolver
        })(function (_ref2) {
          var theme = _ref2.theme;
          return {
            zIndex: (theme.vars || theme).zIndex.drawer
          };
        });
        var DrawerDockedRoot = styled('div', {
          shouldForwardProp: rootShouldForwardProp,
          name: 'MuiDrawer',
          slot: 'Docked',
          skipVariantsResolver: false,
          overridesResolver: overridesResolver
        })({
          flex: '0 0 auto'
        });
        var DrawerPaper = styled(Paper, {
          name: 'MuiDrawer',
          slot: 'Paper',
          overridesResolver: function overridesResolver(props, styles) {
            var ownerState = props.ownerState;
            return [styles.paper, styles["paperAnchor".concat(capitalize(ownerState.anchor))], ownerState.variant !== 'temporary' && styles["paperAnchorDocked".concat(capitalize(ownerState.anchor))]];
          }
        })(function (_ref3) {
          var theme = _ref3.theme,
            ownerState = _ref3.ownerState;
          return _extends({
            overflowY: 'auto',
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
            flex: '1 0 auto',
            zIndex: (theme.vars || theme).zIndex.drawer,
            // Add iOS momentum scrolling for iOS < 13.0
            WebkitOverflowScrolling: 'touch',
            // temporary style
            position: 'fixed',
            top: 0,
            // We disable the focus ring for mouse, touch and keyboard users.
            // At some point, it would be better to keep it for keyboard users.
            // :focus-ring CSS pseudo-class will help.
            outline: 0
          }, ownerState.anchor === 'left' && {
            left: 0
          }, ownerState.anchor === 'top' && {
            top: 0,
            left: 0,
            right: 0,
            height: 'auto',
            maxHeight: '100%'
          }, ownerState.anchor === 'right' && {
            right: 0
          }, ownerState.anchor === 'bottom' && {
            top: 'auto',
            left: 0,
            bottom: 0,
            right: 0,
            height: 'auto',
            maxHeight: '100%'
          }, ownerState.anchor === 'left' && ownerState.variant !== 'temporary' && {
            borderRight: "1px solid ".concat((theme.vars || theme).palette.divider)
          }, ownerState.anchor === 'top' && ownerState.variant !== 'temporary' && {
            borderBottom: "1px solid ".concat((theme.vars || theme).palette.divider)
          }, ownerState.anchor === 'right' && ownerState.variant !== 'temporary' && {
            borderLeft: "1px solid ".concat((theme.vars || theme).palette.divider)
          }, ownerState.anchor === 'bottom' && ownerState.variant !== 'temporary' && {
            borderTop: "1px solid ".concat((theme.vars || theme).palette.divider)
          });
        });
        var oppositeDirection = {
          left: 'right',
          right: 'left',
          top: 'down',
          bottom: 'up'
        };
        function isHorizontal(anchor) {
          return ['left', 'right'].indexOf(anchor) !== -1;
        }
        function getAnchor(theme, anchor) {
          return theme.direction === 'rtl' && isHorizontal(anchor) ? oppositeDirection[anchor] : anchor;
        }

        /**
         * The props of the [Modal](/material-ui/api/modal/) component are available
         * when `variant="temporary"` is set.
         */
        var Drawer = /*#__PURE__*/reactExports.forwardRef(function Drawer(inProps, ref) {
          var props = useThemeProps({
            props: inProps,
            name: 'MuiDrawer'
          });
          var theme = useTheme();
          var defaultTransitionDuration = {
            enter: theme.transitions.duration.enteringScreen,
            exit: theme.transitions.duration.leavingScreen
          };
          var _props$anchor = props.anchor,
            anchorProp = _props$anchor === void 0 ? 'left' : _props$anchor,
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
            variant = _props$variant === void 0 ? 'temporary' : _props$variant,
            ModalProps = _objectWithoutPropertiesLoose(props.ModalProps, _excluded),
            other = _objectWithoutPropertiesLoose(props, _excluded2);

          // Let's assume that the Drawer will always be rendered on user space.
          // We use this state is order to skip the appear transition during the
          // initial mount of the component.
          var mounted = reactExports.useRef(false);
          reactExports.useEffect(function () {
            mounted.current = true;
          }, []);
          var anchorInvariant = getAnchor(theme, anchorProp);
          var anchor = anchorProp;
          var ownerState = _extends({}, props, {
            anchor: anchor,
            elevation: elevation,
            open: open,
            variant: variant
          }, other);
          var classes = useUtilityClasses(ownerState);
          var drawer = /*#__PURE__*/jsxRuntimeExports.jsx(DrawerPaper, _extends({
            elevation: variant === 'temporary' ? elevation : 0,
            square: true
          }, PaperProps, {
            className: clsx(classes.paper, PaperProps.className),
            ownerState: ownerState,
            children: children
          }));
          if (variant === 'permanent') {
            return /*#__PURE__*/jsxRuntimeExports.jsx(DrawerDockedRoot, _extends({
              className: clsx(classes.root, classes.docked, className),
              ownerState: ownerState,
              ref: ref
            }, other, {
              children: drawer
            }));
          }
          var slidingDrawer = /*#__PURE__*/jsxRuntimeExports.jsx(TransitionComponent, _extends({
            in: open,
            direction: oppositeDirection[anchorInvariant],
            timeout: transitionDuration,
            appear: mounted.current
          }, SlideProps, {
            children: drawer
          }));
          if (variant === 'persistent') {
            return /*#__PURE__*/jsxRuntimeExports.jsx(DrawerDockedRoot, _extends({
              className: clsx(classes.root, classes.docked, className),
              ownerState: ownerState,
              ref: ref
            }, other, {
              children: slidingDrawer
            }));
          }

          // variant === temporary
          return /*#__PURE__*/jsxRuntimeExports.jsx(DrawerRoot, _extends({
            BackdropProps: _extends({}, BackdropProps, BackdropPropsProp, {
              transitionDuration: transitionDuration
            }),
            className: clsx(classes.root, classes.modal, className),
            open: open,
            ownerState: ownerState,
            onClose: onClose,
            hideBackdrop: hideBackdrop,
            ref: ref
          }, other, ModalProps, {
            children: slidingDrawer
          }));
        });
        var Drawer$1 = Drawer;
        var mainContainer = "_mainContainer_1sjy5_1";
        var drawer = "_drawer_1sjy5_5";
        var surveyDesignError = "_surveyDesignError_1sjy5_9";
        var styles$i = {
          mainContainer: mainContainer,
          drawer: drawer,
          surveyDesignError: surveyDesignError
        };
        var errorContent = "_errorContent_sv3yb_1";
        var styles$h = {
          errorContent: errorContent
        };
        function ErrorMessage(props) {
          var _reactExports$useStat = reactExports.useState(true),
            _reactExports$useStat2 = _slicedToArray(_reactExports$useStat, 2),
            open = _reactExports$useStat2[0],
            setOpen = _reactExports$useStat2[1];
          var _reactExports$useStat3 = reactExports.useState("ltr"),
            _reactExports$useStat4 = _slicedToArray(_reactExports$useStat3, 2),
            dir = _reactExports$useStat4[0],
            setDir = _reactExports$useStat4[1];
          var handleClose = function handleClose() {
            setOpen(false);
          };
          var _useTranslation = useTranslation("run"),
            i18n = _useTranslation.i18n;
          reactExports.useEffect(function () {
            if (rtlLanguage.includes(i18n.language)) {
              setDir("rtl");
            } else {
              setDir("ltr");
            }
          }, [i18n.language]);
          if (props.variant === "toast") {
            return /* @__PURE__ */jsxRuntimeExports.jsx(Snackbar, {
              open: open,
              autoHideDuration: 6e3,
              onClose: handleClose,
              children: /* @__PURE__ */jsxRuntimeExports.jsx(Alert, {
                variant: "standard",
                severity: props.severity || "error",
                onClose: handleClose,
                dir: dir,
                children: props.error.message
              })
            });
          } else {
            return /* @__PURE__ */jsxRuntimeExports.jsx("div", {
              className: "error-page ".concat(props.className || ""),
              children: /* @__PURE__ */jsxRuntimeExports.jsx("div", {
                className: styles$h.errorContent,
                children: /* @__PURE__ */jsxRuntimeExports.jsx(Alert, {
                  onClose: handleClose,
                  severity: props.severity || "error",
                  variant: "standard",
                  dir: dir,
                  children: props.error.message
                })
              })
            });
          }
        }
        var Menu = {};
        var _interopRequireDefault$2 = interopRequireDefaultExports;
        Object.defineProperty(Menu, "__esModule", {
          value: true
        });
        var default_1$2 = Menu.default = void 0;
        var _createSvgIcon$2 = _interopRequireDefault$2(requireCreateSvgIcon());
        var _jsxRuntime$2 = jsxRuntimeExports;
        var _default$2 = (0, _createSvgIcon$2.default)( /*#__PURE__*/(0, _jsxRuntime$2.jsx)("path", {
          d: "M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"
        }), 'Menu');
        default_1$2 = Menu.default = _default$2;
        var groupCard = "_groupCard_1t5ma_1";
        var groupTitle = "_groupTitle_1t5ma_6";
        var questionTitle = "_questionTitle_1t5ma_10";
        var validationIcon = "_validationIcon_1t5ma_16";
        var bullet = "_bullet_1t5ma_23";
        var styles$g = {
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
          var theme = useTheme$1();
          var dispatch = useDispatch();
          var relevance_map = useSelector(function (state) {
            return state.runState.values["Survey"].relevance_map;
          }, shallowEqual);
          var validity_map = useSelector(function (state) {
            return state.runState.values["Survey"].validity_map;
          }, shallowEqual);
          var canJump = useSelector(function (state) {
            return state.runState.navProps.allowJump;
          }, shallowEqual);
          var isCurrentGroup = function isCurrentGroup(groupCode) {
            return props.navigationIndex.name == "group" && groupCode == props.navigationIndex.groupId;
          };
          var isCurrentQuestion = function isCurrentQuestion(questionCode) {
            return props.navigationIndex.name == "question" && questionCode == props.navigationIndex.questionId;
          };
          var isGroupClickable = function isGroupClickable(groupCode) {
            return canJump && !isCurrentGroup(groupCode) && props.navigationIndex.name == "group";
          };
          var isQuestionClickable = function isQuestionClickable(questionCode) {
            return canJump && !isCurrentQuestion(questionCode) && props.navigationIndex.name == "question";
          };
          var onGroupClicked = function onGroupClicked(groupCode) {
            if (isGroupClickable(groupCode)) {
              dispatch(jump(_objectSpread(_objectSpread({}, props.navigationIndex), {}, {
                groupId: groupCode
              })));
            }
          };
          var onQuestionClicked = function onQuestionClicked(questionCode) {
            if (isQuestionClickable(questionCode)) {
              dispatch(jump(_objectSpread(_objectSpread({}, props.navigationIndex), {}, {
                questionId: questionCode
              })));
            }
          };
          return /* @__PURE__ */jsxRuntimeExports.jsx("div", {
            className: styles$g.surveyContent,
            children: props.survey && props.survey.groups ? props.survey.groups.filter(function (group) {
              return relevance_map[group.code] && group.groupType != "END";
            }).map(function (group) {
              return /* @__PURE__ */jsxRuntimeExports.jsxs(Card, {
                onClick: function onClick() {
                  return onGroupClicked(group.code);
                },
                className: styles$g.groupCard,
                style: {
                  backgroundColor: isCurrentGroup(group.code) ? "beige" : theme.palette.background.paper,
                  cursor: isGroupClickable(group.code) ? "pointer" : "default"
                },
                children: [/* @__PURE__ */jsxRuntimeExports.jsxs(Box$1, {
                  className: styles$g.groupTitle,
                  children: [stripTags(group.content.label), " "]
                }), group.questions.filter(function (question) {
                  return relevance_map[question.code];
                }).map(function (question) {
                  return /* @__PURE__ */jsxRuntimeExports.jsxs(Box$1, {
                    onClick: function onClick() {
                      return onQuestionClicked(question.code);
                    },
                    className: styles$g.questionTitle,
                    style: {
                      backgroundColor: isCurrentQuestion(question.code) ? "beige" : "inherit",
                      cursor: isGroupClickable(group.code) ? "inherit" : isQuestionClickable(group.code) ? "pointer" : "default"
                    },
                    children: [validity_map[question.code] ? /* @__PURE__ */jsxRuntimeExports.jsx(default_1$1, {
                      className: styles$g.validationIcon
                    }) : /* @__PURE__ */jsxRuntimeExports.jsx(default_1, {
                      className: styles$g.bullet
                    }), stripTags(question.content.label)]
                  }, question.code);
                })]
              }, group.code);
            }) : ""
          });
        }
        function Navigation(props) {
          var state = useSelector(function (state2) {
            return {
              has_previous: state2.runState.values.Survey.has_previous && state2.runState.navProps.allowPrevious,
              has_next: state2.runState.values.Survey.has_next,
              can_save: state2.runState.navProps.allowIncomplete
            };
          }, shallowEqual);
          var dispatch = useDispatch();
          var _useTranslation2 = useTranslation("run"),
            t = _useTranslation2.t,
            i18n = _useTranslation2.i18n;
          var isRtl = rtlLanguage.includes(i18n.language);
          var previous = function previous() {
            dispatch(navigatePrevious());
          };
          var next = function next() {
            dispatch(navigateNext());
          };
          return props.navigationIndex.name == "end" ? "" : /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
            className: "pb-10 ta-center",
            children: [state.has_previous ? /* @__PURE__ */jsxRuntimeExports.jsx(Button, {
              variant: "contained",
              className: isRtl ? "ml-14" : "mr-14",
              onClick: function onClick() {
                previous();
              },
              children: t("previous")
            }) : "", /* @__PURE__ */jsxRuntimeExports.jsx(Button, {
              variant: "contained",
              onClick: function onClick() {
                next();
              },
              children: state.has_next ? t("next") : t("finish")
            })]
          });
        }
        var surveyContent = "_surveyContent_aitfd_1";
        var surveyGroups = "_surveyGroups_aitfd_5";
        var cardImage = "_cardImage_aitfd_11";
        var styles$f = {
          surveyContent: surveyContent,
          surveyGroups: surveyGroups,
          cardImage: cardImage
        };
        var FORM_ID = "frankie-form";
        var wrapper$1 = "_wrapper_1hpga_1";
        var icon = "_icon_1hpga_11";
        var styles$e = {
          wrapper: wrapper$1,
          icon: icon
        };
        function ValidationItem(props) {
          var _useTranslation3 = useTranslation(["run"]),
            t = _useTranslation3.t;
          function messages() {
            var validationMessage = "";
            if (props.validation.content && props.validation.isCustomErrorActive) {
              validationMessage = props.validation.content;
            } else {
              var translationKey = props.name.replace(/[0-9]/g, "");
              validationMessage = t(translationKey, _objectSpread({}, props.validation));
            }
            if (validationMessage) {
              return /* @__PURE__ */jsxRuntimeExports.jsxs(Box$2, {
                sx: {
                  color: "error.main"
                },
                className: styles$e.wrapper,
                children: [/* @__PURE__ */jsxRuntimeExports.jsx(ErrorOutlineOutlined, {}), validationMessage]
              });
            } else {
              return "";
            }
          }
          return messages();
        }
        function Validation(props) {
          var validation = useSelector(function (state) {
            if (!props.component.validation) {
              return {};
            } else {
              var validation2 = {};
              Object.keys(props.component.validation).forEach(function (key) {
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
              var array = Object.keys(props.component.validation).filter(function (key) {
                return validation[key];
              });
              var limit = props.limit ? props.limit : array.length;
              return array.slice(0, limit).map(function (key, index) {
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
        function SCQ(props) {
          var state = useSelector(function (state2) {
            var questionState = state2.runState.values[props.component.qualifiedCode];
            return {
              value: (questionState === null || questionState === void 0 ? void 0 : questionState.value) || ""
            };
          }, shallowEqual);
          var dispatch = useDispatch();
          var handleChange = function handleChange(event) {
            dispatch(valueChange({
              componentCode: event.target.name,
              value: event.target.value
            }));
          };
          return /* @__PURE__ */jsxRuntimeExports.jsx(FormControl, {
            component: "fieldset",
            children: /* @__PURE__ */jsxRuntimeExports.jsx(RadioGroup, {
              name: props.component.qualifiedCode,
              value: state.value,
              onChange: handleChange,
              children: props.component.answers.map(function (option) {
                if (option.type === "other") {
                  return /* @__PURE__ */jsxRuntimeExports.jsx(ScqChoiceOther, {
                    parentCode: props.component.qualifiedCode,
                    Choice: option
                  }, option.qualifiedCode);
                } else {
                  return /* @__PURE__ */jsxRuntimeExports.jsx(ScqChoice, {
                    Choice: option
                  }, option.qualifiedCode);
                }
              })
            })
          });
        }
        function ScqChoice(props) {
          var theme = useTheme();
          var showChoice = function showChoice() {
            return /* @__PURE__ */jsxRuntimeExports.jsx(FormControlLabel, {
              control: /* @__PURE__ */jsxRuntimeExports.jsx(Radio, {}),
              label: /* @__PURE__ */jsxRuntimeExports.jsx(Box$2, {
                sx: {
                  fontFamily: theme.textStyles.text.font,
                  color: theme.textStyles.text.color,
                  fontSize: theme.textStyles.text.size
                },
                children: props.Choice.content.label
              }),
              value: props.Choice.code
            }, props.Choice.qualifiedCode);
          };
          return showChoice ? showChoice() : "";
        }
        function ScqChoiceOther(props) {
          var theme = useTheme();
          var nestedTextChild = props.Choice.answers[0];
          var state = useSelector(function (state2) {
            var choiceState = state2.runState.values[props.Choice.qualifiedCode];
            var childState = state2.runState.values[nestedTextChild.qualifiedCode];
            var show_errors = state2.runState.values.Survey.show_errors;
            var isChildDirty = state2.templateState[nestedTextChild.qualifiedCode];
            return {
              showChoice: typeof (choiceState === null || choiceState === void 0 ? void 0 : choiceState.relevance) === "undefined" || choiceState.relevance,
              childInvalid: (show_errors || isChildDirty) && (childState === null || childState === void 0 ? void 0 : childState.relevance) === true && (childState === null || childState === void 0 ? void 0 : childState.validity) === false,
              value: (childState === null || childState === void 0 ? void 0 : childState.value) || ""
            };
          }, shallowEqual);
          var dispatch = useDispatch();
          var handleChange = function handleChange(event) {
            dispatch(valueChange({
              componentCode: event.target.name,
              value: event.target.value
            }));
          };
          var handleFocus = function handleFocus(event) {
            dispatch(valueChange({
              componentCode: props.parentCode,
              value: props.Choice.code
            }));
          };
          var lostFocus = function lostFocus(event) {
            dispatch(setDirty(event.target.name));
          };
          var textInput = reactExports.useRef();
          var onButtonClick = function onButtonClick(event) {
            if (event.target.checked) {
              textInput.current.focus();
            }
          };
          var showChoice = function showChoice() {
            var _state$textChild, _nestedTextChild$vali;
            return /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
              className: "text-left d-flex",
              children: [/* @__PURE__ */jsxRuntimeExports.jsx(FormControlLabel, {
                control: /* @__PURE__ */jsxRuntimeExports.jsx(Radio, {}),
                label: /* @__PURE__ */jsxRuntimeExports.jsx("div", {
                  className: "w-100",
                  children: /* @__PURE__ */jsxRuntimeExports.jsx(TextField, {
                    variant: "standard",
                    required: ((_state$textChild = state.textChild) === null || _state$textChild === void 0 ? void 0 : _state$textChild.relevance) && ((_nestedTextChild$vali = nestedTextChild.validation) === null || _nestedTextChild$vali === void 0 ? void 0 : _nestedTextChild$vali.required),
                    inputRef: textInput,
                    id: nestedTextChild.qualifiedCode,
                    name: nestedTextChild.qualifiedCode,
                    label: props.Choice.content.label,
                    onChange: handleChange,
                    onFocus: handleFocus,
                    onBlur: lostFocus,
                    value: state.value,
                    InputProps: {
                      sx: {
                        fontFamily: theme.textStyles.text.font,
                        color: theme.textStyles.text.color,
                        fontSize: theme.textStyles.text.size
                      }
                    },
                    helperText: state.childInvalid ? /* @__PURE__ */jsxRuntimeExports.jsx(Validation, {
                      component: nestedTextChild,
                      limit: 1
                    }) : ""
                  })
                }),
                onChange: onButtonClick,
                value: props.Choice.code
              }, props.Choice.qualifiedCode), /* @__PURE__ */jsxRuntimeExports.jsx("p", {})]
            });
          };
          return state.showChoice ? showChoice() : "";
        }
        var questionItem$3 = "_questionItem_1sx0f_1";
        var styles$d = {
          questionItem: questionItem$3
        };
        function TextQuestion(props) {
          var _props$component$vali, _props$component$vali2;
          var theme = useTheme();
          var state = useSelector(function (state2) {
            var questionState = state2.runState.values[props.component.qualifiedCode];
            var show_errors = state2.runState.values.Survey.show_errors;
            var isDirty = state2.templateState[props.component.qualifiedCode];
            var validity = questionState === null || questionState === void 0 ? void 0 : questionState.validity;
            var invalid = (show_errors || isDirty) && validity === false;
            return {
              value: (questionState === null || questionState === void 0 ? void 0 : questionState.value) || "",
              invalid: invalid
            };
          }, shallowEqual);
          var dispatch = useDispatch();
          var handleChange = function handleChange(event) {
            dispatch(valueChange({
              componentCode: event.target.name,
              value: event.target.value
            }));
          };
          var lostFocus = function lostFocus(event) {
            dispatch(setDirty(event.target.name));
          };
          return /* @__PURE__ */jsxRuntimeExports.jsx("div", {
            className: styles$d.questionItem,
            children: /* @__PURE__ */jsxRuntimeExports.jsx(TextField, {
              variant: "standard",
              required: (_props$component$vali = props.component.validation) !== null && _props$component$vali !== void 0 && (_props$component$vali2 = _props$component$vali.validation_required) !== null && _props$component$vali2 !== void 0 && _props$component$vali2.isActive ? true : false,
              id: props.component.qualifiedCode,
              name: props.component.qualifiedCode,
              label: props.component.content.hint || "",
              onChange: handleChange,
              onBlur: lostFocus,
              inputProps: {
                maxLength: props.component.maxChars || void 0
              },
              value: state.value,
              error: state.invalid,
              InputProps: {
                sx: {
                  fontFamily: theme.textStyles.text.font,
                  color: theme.textStyles.text.color,
                  fontSize: theme.textStyles.text.size
                }
              }
            })
          });
        }
        var questionItem$2 = "_questionItem_169qj_1";
        var styles$c = {
          questionItem: questionItem$2
        };
        function EmailQuestion(props) {
          var _props$component$vali3, _props$component$vali4;
          var theme = useTheme();
          var state = useSelector(function (state2) {
            var questionState = state2.runState.values[props.component.qualifiedCode];
            var show_errors = state2.runState.values.Survey.show_errors;
            var isDirty = state2.templateState[props.component.qualifiedCode];
            var validity = questionState === null || questionState === void 0 ? void 0 : questionState.validity;
            var invalid = (show_errors || isDirty) && validity === false;
            return {
              value: (questionState === null || questionState === void 0 ? void 0 : questionState.value) || "",
              invalid: invalid
            };
          }, shallowEqual);
          var dispatch = useDispatch();
          var handleChange = function handleChange(event) {
            dispatch(valueChange({
              componentCode: event.target.name,
              value: event.target.value
            }));
          };
          var lostFocus = function lostFocus(event) {
            dispatch(setDirty(event.target.name));
          };
          return /* @__PURE__ */jsxRuntimeExports.jsx("div", {
            className: styles$c.questionItem,
            children: /* @__PURE__ */jsxRuntimeExports.jsx(TextField, {
              variant: "standard",
              required: (_props$component$vali3 = props.component.validation) !== null && _props$component$vali3 !== void 0 && (_props$component$vali4 = _props$component$vali3.validation_required) !== null && _props$component$vali4 !== void 0 && _props$component$vali4.isActive ? true : false,
              id: props.component.qualifiedCode,
              name: props.component.qualifiedCode,
              label: props.component.content.hint || "",
              onChange: handleChange,
              onBlur: lostFocus,
              inputProps: {
                type: "email",
                maxLength: props.component.maxChars || void 0
              },
              value: state.value,
              error: state.invalid,
              InputProps: {
                sx: {
                  fontFamily: theme.textStyles.text.font,
                  color: theme.textStyles.text.color,
                  fontSize: theme.textStyles.text.size
                }
              }
            })
          });
        }
        var questionItem$1 = "_questionItem_7ep8w_1";
        var styles$b = {
          questionItem: questionItem$1
        };
        function NumberQuestion(props) {
          var _props$component$vali5, _props$component$vali6;
          var theme = useTheme();
          var state = useSelector(function (state2) {
            var questionState = state2.runState.values[props.component.qualifiedCode];
            var show_errors = state2.runState.values.Survey.show_errors;
            var isDirty = state2.templateState[props.component.qualifiedCode];
            var validity = questionState === null || questionState === void 0 ? void 0 : questionState.validity;
            var invalid = (show_errors || isDirty) && validity === false;
            return {
              value: (questionState === null || questionState === void 0 ? void 0 : questionState.value) === void 0 ? "" : questionState === null || questionState === void 0 ? void 0 : questionState.value,
              invalid: invalid
            };
          }, shallowEqual);
          var dispatch = useDispatch();
          var handleChange = function handleChange(event) {
            var regex = props.component.allowDecimal ? /^[0-9]*[.]*[0-9]*$/ : /^[0-9]*$/;
            if (event.target.value === "" || regex.test(event.target.value)) {
              var output = +event.target.value;
              var moreZeroesRegex = /^[0][.][0]+$/;
              dispatch(valueChange({
                componentCode: event.target.name,
                value: event.target.value === "" || isNaN(output) || event.target.value.endsWith(".") || moreZeroesRegex.test(event.target.value) ? event.target.value : output
              }));
            }
          };
          var lostFocus = function lostFocus(event) {
            dispatch(setDirty(event.target.name));
          };
          return /* @__PURE__ */jsxRuntimeExports.jsx("div", {
            className: styles$b.questionItem,
            children: /* @__PURE__ */jsxRuntimeExports.jsx(TextField, {
              variant: "standard",
              required: (_props$component$vali5 = props.component.validation) !== null && _props$component$vali5 !== void 0 && (_props$component$vali6 = _props$component$vali5.validation_required) !== null && _props$component$vali6 !== void 0 && _props$component$vali6.isActive ? true : false,
              id: props.component.qualifiedCode,
              name: props.component.qualifiedCode,
              label: props.component.content.hint || "",
              onChange: handleChange,
              onBlur: lostFocus,
              inputProps: {
                maxLength: props.component.maxChars || void 0
              },
              value: state.value,
              error: state.invalid,
              InputProps: {
                sx: {
                  fontFamily: theme.textStyles.text.font,
                  color: theme.textStyles.text.color,
                  fontSize: theme.textStyles.text.size
                }
              }
            })
          });
        }
        function MCQ(props) {
          return /* @__PURE__ */jsxRuntimeExports.jsx(FormControl, {
            component: "fieldset",
            children: /* @__PURE__ */jsxRuntimeExports.jsx(RadioGroup, {
              children: props.component.answers.map(function (option) {
                if (option.type === "other") {
                  return /* @__PURE__ */jsxRuntimeExports.jsx(McqAnswerOther, {
                    Answer: option,
                    parentCode: props.component.qualifiedCode
                  }, option.qualifiedCode);
                } else {
                  return /* @__PURE__ */jsxRuntimeExports.jsx(McqAnswer, {
                    Answer: option,
                    parentCode: props.component.qualifiedCode
                  }, option.qualifiedCode);
                }
              })
            })
          });
        }
        function McqAnswer(props) {
          var theme = useTheme();
          var state = useSelector(function (state2) {
            var _props$Answer;
            var answerState = state2.runState.values[(_props$Answer = props.Answer) === null || _props$Answer === void 0 ? void 0 : _props$Answer.qualifiedCode];
            return {
              showAnswer: typeof (answerState === null || answerState === void 0 ? void 0 : answerState.relevance) == "undefined" || answerState.relevance,
              checked: (answerState === null || answerState === void 0 ? void 0 : answerState.value) || false
            };
          }, shallowEqual);
          var dispatch = useDispatch();
          var handleChange = function handleChange(event) {
            dispatch(valueChange({
              componentCode: event.target.name,
              value: event.target.checked
            }));
            dispatch(setDirty(event.target.name));
            dispatch(setDirty(props.parentCode));
          };
          return state.showAnswer ? /* @__PURE__ */jsxRuntimeExports.jsx(FormControlLabel, {
            control: /* @__PURE__ */jsxRuntimeExports.jsx(Checkbox, {
              checked: state.checked,
              onChange: handleChange,
              name: props.Answer.qualifiedCode
            }),
            label: /* @__PURE__ */jsxRuntimeExports.jsx(Box$2, {
              sx: {
                fontFamily: theme.textStyles.text.font,
                fontSize: theme.textStyles.text.size
              },
              children: props.Answer.content.label
            })
          }) : "";
        }
        function McqAnswerOther(props) {
          var theme = useTheme();
          var nestedTextChild = props.Answer.answers[0];
          var state = useSelector(function (state2) {
            var _state2$textChild;
            var own = state2.runState.values[props.Answer.qualifiedCode];
            var textChild = state2.runState.values[nestedTextChild.qualifiedCode];
            var show_errors = state2.runState.values.Survey.show_errors;
            var isChildDirty = state2.templateState[nestedTextChild.qualifiedCode];
            return {
              showAnswer: typeof (own === null || own === void 0 ? void 0 : own.relevance) === "undefined" || own.relevance,
              childInvalid: (show_errors || isChildDirty) && (textChild === null || textChild === void 0 ? void 0 : textChild.relevance) === true && (textChild === null || textChild === void 0 ? void 0 : textChild.validity) === false,
              checked: (own === null || own === void 0 ? void 0 : own.value) || false,
              textValue: (textChild === null || textChild === void 0 ? void 0 : textChild.value) || "",
              textRelevance: (_state2$textChild = state2.textChild) === null || _state2$textChild === void 0 ? void 0 : _state2$textChild.relevance
            };
          }, shallowEqual);
          var dispatch = useDispatch();
          var onButtonClick = function onButtonClick(event) {
            dispatch(valueChange({
              componentCode: event.target.name,
              value: event.target.checked
            }));
            dispatch(setDirty(event.target.name));
            dispatch(setDirty(props.parentCode));
            if (event.target.checked) {
              textInput.current.focus();
            }
          };
          var handleChange = function handleChange(event) {
            dispatch(valueChange({
              componentCode: event.target.name,
              value: event.target.value
            }));
          };
          var textInput = reactExports.useRef();
          var handleFocus = function handleFocus(event) {
            dispatch(valueChange({
              componentCode: props.Answer.qualifiedCode,
              value: true
            }));
          };
          var lostFocus = function lostFocus(event) {
            dispatch(setDirty(event.target.name));
          };
          var showAnswer = function showAnswer() {
            var _nestedTextChild$vali2;
            return /* @__PURE__ */jsxRuntimeExports.jsx(FormControlLabel, {
              control: /* @__PURE__ */jsxRuntimeExports.jsx(Checkbox, {
                checked: state.checked,
                onChange: onButtonClick,
                name: props.Answer.qualifiedCode
              }),
              label: /* @__PURE__ */jsxRuntimeExports.jsx("div", {
                className: "w-100",
                children: /* @__PURE__ */jsxRuntimeExports.jsx(TextField, {
                  variant: "standard",
                  required: state.textRelevance && ((_nestedTextChild$vali2 = nestedTextChild.validation) === null || _nestedTextChild$vali2 === void 0 ? void 0 : _nestedTextChild$vali2.required),
                  inputRef: textInput,
                  id: nestedTextChild.qualifiedCode,
                  name: nestedTextChild.qualifiedCode,
                  label: props.Answer.content.label,
                  onChange: handleChange,
                  onFocus: handleFocus,
                  onBlur: lostFocus,
                  value: state.textValue,
                  InputProps: {
                    sx: {
                      fontFamily: theme.textStyles.text.font,
                      color: theme.textStyles.text.color,
                      fontSize: theme.textStyles.text.size
                    }
                  },
                  helperText: state.childInvalid ? /* @__PURE__ */jsxRuntimeExports.jsx(Validation, {
                    component: nestedTextChild,
                    limit: 1
                  }) : ""
                })
              })
            });
          };
          return state.showAnswer ? showAnswer() : "";
        }
        function SCQArray(props) {
          var theme = useTheme$1();
          var columns = props.component.answers.filter(function (answer) {
            return answer.type == "column";
          });
          var rows = props.component.answers.filter(function (answer) {
            return answer.type == "row";
          });
          return /* @__PURE__ */jsxRuntimeExports.jsx(TableContainer, {
            children: /* @__PURE__ */jsxRuntimeExports.jsxs(Table, {
              children: [/* @__PURE__ */jsxRuntimeExports.jsx(TableHead, {
                children: /* @__PURE__ */jsxRuntimeExports.jsxs(TableRow, {
                  children: [/* @__PURE__ */jsxRuntimeExports.jsx(TableCell, {}, "content"), columns.map(function (option) {
                    return /* @__PURE__ */jsxRuntimeExports.jsx(TableCell, {
                      sx: {
                        fontFamily: theme.textStyles.text.font,
                        color: theme.textStyles.text.color,
                        fontSize: theme.textStyles.text.size
                      },
                      children: option.content.label
                    }, option.qualifiedCode);
                  })]
                })
              }), /* @__PURE__ */jsxRuntimeExports.jsx(TableBody, {
                children: rows.map(function (answer) {
                  return /* @__PURE__ */jsxRuntimeExports.jsx(React.Fragment, {
                    children: /* @__PURE__ */jsxRuntimeExports.jsx(SCQArrayRow, {
                      answer: answer,
                      choices: columns
                    }, answer.qualifiedCode)
                  }, answer.qualifiedCode);
                })
              })]
            })
          });
        }
        function SCQArrayRow(props) {
          var theme = useTheme$1();
          var state = useSelector(function (state2) {
            var _state2$runState$valu, _state2$runState$valu2, _state2$runState$valu3;
            return {
              show_errors: state2.runState.values.Survey.show_errors,
              validity: (_state2$runState$valu = state2.runState.values[props.answer.qualifiedCode]) === null || _state2$runState$valu === void 0 ? void 0 : _state2$runState$valu.validity,
              value: (_state2$runState$valu2 = state2.runState.values[props.answer.qualifiedCode]) === null || _state2$runState$valu2 === void 0 ? void 0 : _state2$runState$valu2.value,
              relevance: (_state2$runState$valu3 = state2.runState.values[props.answer.qualifiedCode]) === null || _state2$runState$valu3 === void 0 ? void 0 : _state2$runState$valu3.relevance
            };
          }, shallowEqual);
          var dispatch = useDispatch();
          var handleChange = function handleChange(event) {
            dispatch(valueChange({
              componentCode: event.target.name,
              value: event.target.value
            }));
          };
          var invalid = (state.show_errors || state.isDirty) && state.validity === false;
          return typeof state.relevance === "undefined" || state.relevance ? /* @__PURE__ */jsxRuntimeExports.jsxs(React.Fragment, {
            children: [/* @__PURE__ */jsxRuntimeExports.jsxs(TableRow, {
              children: [/* @__PURE__ */jsxRuntimeExports.jsx(TableCell, {
                sx: {
                  fontFamily: theme.textStyles.text.font,
                  color: theme.textStyles.text.color,
                  fontSize: theme.textStyles.text.size,
                  borderBottom: invalid ? "0" : "",
                  padding: "8px"
                },
                children: props.answer.content.label
              }), props.choices.map(function (option) {
                return /* @__PURE__ */jsxRuntimeExports.jsx(TableCell, {
                  component: "th",
                  scope: "row",
                  sx: {
                    borderBottom: invalid ? "0" : "",
                    padding: "8px"
                  },
                  children: /* @__PURE__ */jsxRuntimeExports.jsx(Radio, {
                    name: props.answer.qualifiedCode,
                    onChange: handleChange,
                    checked: state.value === option.code,
                    value: option.code
                  })
                }, option.code);
              })]
            }, props.answer.code), invalid ? /* @__PURE__ */jsxRuntimeExports.jsx(TableRow, {
              children: /* @__PURE__ */jsxRuntimeExports.jsx(TableCell, {
                sx: {
                  padding: "8px"
                },
                colSpan: props.choices ? props.choices.length + 1 : 1,
                children: /* @__PURE__ */jsxRuntimeExports.jsx(Validation, {
                  component: props.answer
                })
              })
            }) : ""]
          }) : "";
        }
        var Input = styled("input")({
          display: "none"
        });
        function FileUpload(props) {
          var theme = useTheme();
          var state = useSelector(function (state2) {
            var questionState = state2.runState.values[props.component.qualifiedCode];
            return questionState === null || questionState === void 0 ? void 0 : questionState.value;
          });
          var dispatch = useDispatch();
          var _reactExports$useStat5 = reactExports.useState(),
            _reactExports$useStat6 = _slicedToArray(_reactExports$useStat5, 2),
            selectedFile = _reactExports$useStat6[0],
            setSelectedFile = _reactExports$useStat6[1];
          var changeHandler = function changeHandler(event) {
            setSelectedFile(event.target.files[0]);
          };
          var uploadSelectedFile = function uploadSelectedFile() {
            uploadFile(props.component.qualifiedCode, selectedFile).then(function (response) {
              resetSelectedFile();
              dispatch(valueChange({
                componentCode: props.component.qualifiedCode,
                value: response
              }));
            }).catch(function (err) {
              console.error(err);
            });
          };
          var resetSelectedFile = function resetSelectedFile() {
            setSelectedFile(void 0);
          };
          var shouldUpload = selectedFile && (!props.component.validation || !props.component.validation.max_file_size || props.component.validation.max_file_size.max_size > selectedFile.size / 1e3);
          return /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
            children: [/* @__PURE__ */jsxRuntimeExports.jsxs("label", {
              htmlFor: "contained-button-file",
              children: [/* @__PURE__ */jsxRuntimeExports.jsx(Input, {
                id: "contained-button-file",
                type: "file",
                onChange: changeHandler
              }), /* @__PURE__ */jsxRuntimeExports.jsx(Button, {
                variant: "contained",
                component: "span",
                children: "Choose File"
              })]
            }), !selectedFile ? "" : /* @__PURE__ */jsxRuntimeExports.jsxs(React.Fragment, {
              children: [/* @__PURE__ */jsxRuntimeExports.jsxs("span", {
                children: [" ", selectedFile.name, " - ", Math.round(selectedFile.size / 1e3), "K"]
              }), shouldUpload ? /* @__PURE__ */jsxRuntimeExports.jsx(Button, {
                variant: "text",
                onClick: uploadSelectedFile,
                children: "Upload"
              }) : "", /* @__PURE__ */jsxRuntimeExports.jsx(Button, {
                sx: {
                  fontFamily: theme.textStyles.text.font,
                  fontSize: theme.textStyles.text.size
                },
                variant: "text",
                onClick: resetSelectedFile,
                children: "Cancel"
              })]
            }), !selectedFile || !props.component.validation || !props.component.validation.max_file_size || props.component.validation.max_file_size.max_size > selectedFile.size / 1e3 ? "" : /* @__PURE__ */jsxRuntimeExports.jsxs(React.Fragment, {
              children: [/* @__PURE__ */jsxRuntimeExports.jsx("br", {}), /* @__PURE__ */jsxRuntimeExports.jsx(ValidationItem, {
                name: "max_file_size",
                validation: props.component.validation.max_file_size
              })]
            }), !state || !state.stored_filename ? "" : /* @__PURE__ */jsxRuntimeExports.jsxs(React.Fragment, {
              children: [/* @__PURE__ */jsxRuntimeExports.jsx("br", {}), /* @__PURE__ */jsxRuntimeExports.jsxs(Link, {
                target: "_blank",
                href: previewUrl(state.stored_filename),
                children: [state.filename, " - ", Math.round(state.size / 1e3), "K"]
              })]
            })]
          });
        }
        var questionItem = "_questionItem_pxk6e_1";
        var paragraph = "_paragraph_pxk6e_15";
        var wordCount = "_wordCount_pxk6e_19";
        var styles$a = {
          questionItem: questionItem,
          paragraph: paragraph,
          wordCount: wordCount
        };
        function ParagraphQuestion(props) {
          var _props$component$vali7, _props$component$vali8;
          var state = useSelector(function (state2) {
            var questionState = state2.runState.values[props.component.qualifiedCode];
            var show_errors = state2.runState.values.Survey.show_errors;
            var isDirty = state2.templateState[props.component.qualifiedCode];
            var validity = questionState === null || questionState === void 0 ? void 0 : questionState.validity;
            var invalid = (show_errors || isDirty) && validity === false;
            var value = (questionState === null || questionState === void 0 ? void 0 : questionState.value) || "";
            return {
              value: value,
              wordCount: window.FrankieScripts ? window.FrankieScripts.wordCount(value) : 0,
              invalid: invalid
            };
          }, shallowEqual);
          var dispatch = useDispatch();
          var _useTranslation4 = useTranslation("run"),
            t = _useTranslation4.t;
          var handleChange = function handleChange(event) {
            dispatch(valueChange({
              componentCode: event.target.name,
              value: event.target.value
            }));
          };
          var lostFocus = function lostFocus(event) {
            dispatch(setDirty(event.target.name));
          };
          return /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
            className: styles$a.questionItem,
            children: [/* @__PURE__ */jsxRuntimeExports.jsx(TextareaAutosize, {
              className: styles$a.paragraph,
              required: (_props$component$vali7 = props.component.validation) !== null && _props$component$vali7 !== void 0 && (_props$component$vali8 = _props$component$vali7.validation_required) !== null && _props$component$vali8 !== void 0 && _props$component$vali8.isActive ? true : false,
              id: props.component.qualifiedCode,
              name: props.component.qualifiedCode,
              minRows: props.component.minRows || 2,
              label: props.component.content.hint || "",
              onChange: handleChange,
              onBlur: lostFocus,
              value: state.value
            }), props.component.showWordCount ? /* @__PURE__ */jsxRuntimeExports.jsx("div", {
              className: styles$a.wordCount,
              children: /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                children: t("word_count", {
                  count: state.wordCount
                })
              })
            }) : ""]
          });
        }
        var quill_core = '';
        var content$1 = '';
        function Content(props) {
          var isComplex = props.content && props.content.search(/data-instruction/) >= 0;
          var state = useSelector(function (state2) {
            if (!props.content || !isComplex || !state2.runState.values[props.elementCode] || !props.name || !props.lang) {
              return void 0;
            } else {
              return state2.runState.values[props.elementCode]["reference_".concat(props.name, "_").concat(props.lang)];
            }
          });
          var lang = useSelector(function (state2) {
            return state2.runState.values["Survey"].lang;
          });
          var isRtl = rtlLanguage.includes(lang);
          if (!props.content) {
            return "";
          } else if (!isComplex) {
            return /* @__PURE__ */jsxRuntimeExports.jsx("div", {
              className: "".concat(isRtl ? "rtl" : "ltr", " ql-editor no-padding"),
              dangerouslySetInnerHTML: {
                __html: props.content
              }
            });
          } else {
            return /* @__PURE__ */jsxRuntimeExports.jsx("div", {
              className: "".concat(isRtl ? "rtl" : "ltr", " ql-editor no-padding"),
              dangerouslySetInnerHTML: {
                __html: replaceMentions(props.content, state)
              }
            });
          }
        }
        function replaceMentions(html, referenceValue) {
          var doc = document.createElement("div");
          doc.innerHTML = html;
          doc.querySelectorAll("span[data-instruction]").forEach(function (el) {
            var attribute = el.getAttribute("data-instruction");
            if (attribute && referenceValue) {
              var attrArray = attribute.split(".");
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
        var wrapper = "_wrapper_2goe7_1";
        var styles$9 = {
          wrapper: wrapper
        };
        function DateTimeQuestion(props) {
          var theme = useTheme$2();
          var state = useSelector(function (state2) {
            var own = state2.runState.values[props.component.qualifiedCode];
            var show_errors = state2.runState.values.Survey.show_errors;
            var isDirty = state2.templateState[props.component.qualifiedCode];
            return {
              invalid: (show_errors || isDirty) && (own === null || own === void 0 ? void 0 : own.validity) === false,
              value: own !== null && own !== void 0 && own.value ? dayjs(window.FrankieScripts.sqlDateTimeToDate(own === null || own === void 0 ? void 0 : own.value)) : null
            };
          }, shallowEqual);
          var dispatch = useDispatch();
          var handleDateChange = function handleDateChange(date) {
            var finalDate = date === null ? void 0 : date.toDate();
            dispatch(valueChange({
              componentCode: props.component.qualifiedCode,
              value: props.component.type == "date_time" ? window.FrankieScripts.toSqlDateTime(finalDate) : props.component.type == "time" ? window.FrankieScripts.toSqlDateTimeIgnoreDate(finalDate) : window.FrankieScripts.toSqlDateTimeIgnoreTime(finalDate)
            }));
          };
          var dateFormat = props.component.dateFormat ? props.component.dateFormat : "DD.MM.YYYY";
          return /* @__PURE__ */jsxRuntimeExports.jsx("div", {
            className: styles$9.wrapper,
            children: /* @__PURE__ */jsxRuntimeExports.jsx(LocalizationProvider, {
              dateAdapter: AdapterDayjs,
              adapterLocale: "ar-sa",
              children: props.component.type == "date_time" ? /* @__PURE__ */jsxRuntimeExports.jsx(DateTimePicker, {
                renderInput: function renderInput(props2) {
                  return /* @__PURE__ */jsxRuntimeExports.jsx(TextField, _objectSpread({
                    onKeyDown: function onKeyDown(e) {
                      return e.preventDefault();
                    }
                  }, props2));
                },
                margin: "normal",
                value: state.value,
                inputFormat: dateFormat + " " + (props.component.fullDayFormat ? "HH:mm" : "hh:mm A"),
                ampm: props.component.fullDayFormat ? false : true,
                openTo: "year",
                views: ["year", "month", "day", "hours", "minutes"],
                id: props.component.qualifiedCode,
                minDate: props.component.minDate ? dayjs(window.FrankieScripts.dateStringToDate(props.component.minDate)) : void 0,
                maxDate: props.component.maxDate ? dayjs(window.FrankieScripts.dateStringToDate(props.component.maxDate)) : void 0,
                error: state.invalid,
                onChange: handleDateChange,
                InputProps: {
                  sx: {
                    fontFamily: theme.textStyles.text.font,
                    fontSize: theme.textStyles.text.size,
                    color: theme.textStyles.text.color
                  }
                }
              }) : props.component.type == "time" ? /* @__PURE__ */jsxRuntimeExports.jsx(TimePicker, {
                renderInput: function renderInput(params) {
                  return /* @__PURE__ */jsxRuntimeExports.jsx(TextField, _objectSpread({
                    onKeyDown: function onKeyDown(e) {
                      return e.preventDefault();
                    }
                  }, params));
                },
                margin: "normal",
                openTo: "hours",
                views: ["hours", "minutes"],
                ampm: props.component.fullDayFormat ? false : true,
                inputFormat: props.component.fullDayFormat ? "HH:mm" : "hh:mm A",
                id: props.component.qualifiedCode,
                value: state.value,
                error: state.invalid,
                onChange: handleDateChange,
                InputProps: {
                  sx: {
                    fontFamily: theme.textStyles.text.font,
                    color: theme.textStyles.text.color,
                    fontSize: theme.textStyles.text.size
                  }
                }
              }) : /* @__PURE__ */jsxRuntimeExports.jsx(DatePicker, {
                renderInput: function renderInput(params) {
                  return /* @__PURE__ */jsxRuntimeExports.jsx(TextField, _objectSpread({
                    onKeyDown: function onKeyDown(e) {
                      return e.preventDefault();
                    }
                  }, params));
                },
                margin: "normal",
                openTo: "year",
                views: ["year", "month", "day"],
                ampm: props.component.fullDayFormat ? false : true,
                id: props.component.qualifiedCode,
                inputFormat: dateFormat,
                value: state.value,
                minDate: props.component.minDate ? window.FrankieScripts.dateStringToDate(props.component.minDate) : void 0,
                maxDate: props.component.maxDate ? window.FrankieScripts.dateStringToDate(props.component.maxDate) : void 0,
                error: state.invalid,
                onChange: handleDateChange,
                InputProps: {
                  sx: {
                    fontFamily: theme.textStyles.text.font,
                    fontSize: theme.textStyles.text.size
                  }
                }
              })
            })
          });
        }
        var content = "_content_vh4hz_1";
        var question = "_question_vh4hz_8";
        var required = "_required_vh4hz_12";
        var header = "_header_vh4hz_16";
        var textDescription$1 = "_textDescription_vh4hz_20";
        var groupQuestion = "_groupQuestion_vh4hz_25";
        var styles$8 = {
          content: content,
          question: question,
          required: required,
          header: header,
          textDescription: textDescription$1,
          groupQuestion: groupQuestion
        };
        var imageContainer$2 = "_imageContainer_mdpfi_1";
        var imageGrid$2 = "_imageGrid_mdpfi_7";
        var selection$1 = "_selection_mdpfi_11";
        var styles$7 = {
          imageContainer: imageContainer$2,
          imageGrid: imageGrid$2,
          selection: selection$1
        };
        function ImageScq(props) {
          var theme = useTheme$1();
          var containerRef = reactExports.useRef(null);
          var _reactExports$useStat7 = reactExports.useState(800),
            _reactExports$useStat8 = _slicedToArray(_reactExports$useStat7, 2),
            width = _reactExports$useStat8[0],
            setWidth = _reactExports$useStat8[1];
          reactExports.useEffect(function () {
            var _containerRef$current;
            setWidth(containerRef === null || containerRef === void 0 ? void 0 : (_containerRef$current = containerRef.current) === null || _containerRef$current === void 0 ? void 0 : _containerRef$current.offsetWidth);
          }, [containerRef]);
          var imageHeight = (width - props.component.columns * props.component.spacing * 2) / props.component.columns / (props.component.imageAspectRatio || 1);
          var state = useSelector(function (state2) {
            var questionState = state2.runState.values[props.component.qualifiedCode];
            var show_errors = state2.runState.values.Survey.show_errors;
            var isDirty = state2.templateState[props.component.qualifiedCode];
            return {
              value: (questionState === null || questionState === void 0 ? void 0 : questionState.value) || "",
              showValidation: (show_errors || isDirty) && (questionState === null || questionState === void 0 ? void 0 : questionState.validity) === false
            };
          }, shallowEqual);
          var dispatch = useDispatch();
          var handleChange = function handleChange(componentCode, value) {
            dispatch(valueChange({
              componentCode: componentCode,
              value: value
            }));
          };
          reactExports.useEffect(function () {
            var resizeListener = function resizeListener() {
              var _containerRef$current2;
              setWidth(containerRef === null || containerRef === void 0 ? void 0 : (_containerRef$current2 = containerRef.current) === null || _containerRef$current2 === void 0 ? void 0 : _containerRef$current2.offsetWidth);
            };
            window.addEventListener("resize", resizeListener);
            return function () {
              window.removeEventListener("resize", resizeListener);
            };
          }, []);
          return /* @__PURE__ */jsxRuntimeExports.jsx(Grid, {
            ref: containerRef,
            container: true,
            className: styles$7.imageGrid,
            children: props.component.answers.map(function (option) {
              var _option$resources, _option$resources2;
              var backgroundImage = (_option$resources = option.resources) !== null && _option$resources !== void 0 && _option$resources.image ? "url('".concat(buildResourceUrl((_option$resources2 = option.resources) === null || _option$resources2 === void 0 ? void 0 : _option$resources2.image), "')") : "0";
              return /* @__PURE__ */jsxRuntimeExports.jsxs(Grid, {
                item: true,
                xs: 12 / props.component.columns,
                children: [/* @__PURE__ */jsxRuntimeExports.jsx(Card, {
                  className: styles$7.imageContainer,
                  onClick: function onClick() {
                    return handleChange(props.component.qualifiedCode, option.code);
                  },
                  style: {
                    backgroundImage: backgroundImage,
                    backgroundColor: theme.palette.background.default,
                    margin: props.component.spacing + "px",
                    height: imageHeight + "px",
                    border: state.value === option.code ? "2px solid ".concat(theme.palette.primary.main) : "2px solid transparent"
                  },
                  children: /* @__PURE__ */jsxRuntimeExports.jsx(Radio, {
                    className: styles$7.selection,
                    checked: state.value === option.code,
                    onChange: function onChange(event) {
                      return handleChange(event.target.name, event.target.value);
                    },
                    value: option.code,
                    name: props.component.qualifiedCode
                  })
                }), !props.component.hideText && /* @__PURE__ */jsxRuntimeExports.jsx(Box$2, {
                  sx: {
                    fontFamily: theme.textStyles.text.font,
                    color: theme.textStyles.text.color,
                    fontSize: theme.textStyles.text.size
                  },
                  children: option.content.label
                })]
              }, option.code);
            })
          });
        }
        var imageGrid$1 = "_imageGrid_1uvun_1";
        var imageContainer$1 = "_imageContainer_1uvun_5";
        var selection = "_selection_1uvun_11";
        var styles$6 = {
          imageGrid: imageGrid$1,
          imageContainer: imageContainer$1,
          selection: selection
        };
        function ImageMcq(props) {
          var containerRef = reactExports.useRef(null);
          var _reactExports$useStat9 = reactExports.useState(800),
            _reactExports$useStat10 = _slicedToArray(_reactExports$useStat9, 2),
            width = _reactExports$useStat10[0],
            setWidth = _reactExports$useStat10[1];
          reactExports.useEffect(function () {
            var _containerRef$current3;
            setWidth(containerRef === null || containerRef === void 0 ? void 0 : (_containerRef$current3 = containerRef.current) === null || _containerRef$current3 === void 0 ? void 0 : _containerRef$current3.offsetWidth);
          }, [containerRef]);
          var imageHeight = (width - props.component.columns * props.component.spacing * 2) / props.component.columns / (props.component.imageAspectRatio || 1);
          reactExports.useEffect(function () {
            var resizeListener = function resizeListener() {
              var _containerRef$current4;
              setWidth(containerRef === null || containerRef === void 0 ? void 0 : (_containerRef$current4 = containerRef.current) === null || _containerRef$current4 === void 0 ? void 0 : _containerRef$current4.offsetWidth);
            };
            window.addEventListener("resize", resizeListener);
            return function () {
              window.removeEventListener("resize", resizeListener);
            };
          }, []);
          return /* @__PURE__ */jsxRuntimeExports.jsx(Grid, {
            ref: containerRef,
            container: true,
            className: styles$6.imageGrid,
            children: props.component.answers.map(function (option) {
              return /* @__PURE__ */jsxRuntimeExports.jsx(ImageMcqItem, {
                option: option,
                spacing: props.component.spacing,
                columns: props.component.columns,
                hideText: props.component.hideText,
                parentCode: props.component.qualifiedCode,
                imageHeight: imageHeight
              }, option.qualifiedCode);
            })
          });
        }
        function ImageMcqItem(props) {
          var _props$option$resourc, _props$option$resourc2;
          var theme = useTheme$1();
          var state = useSelector(function (state2) {
            var answerState = state2.runState.values[props.option.qualifiedCode];
            return {
              showAnswer: typeof (answerState === null || answerState === void 0 ? void 0 : answerState.relevance) == "undefined" || answerState.relevance,
              checked: (answerState === null || answerState === void 0 ? void 0 : answerState.value) || false
            };
          }, shallowEqual);
          var dispatch = useDispatch();
          var handleChange = function handleChange(componentCode, value) {
            dispatch(valueChange({
              componentCode: componentCode,
              value: value
            }));
            dispatch(setDirty(componentCode));
            dispatch(setDirty(props.parentCode));
          };
          var backgroundImage = (_props$option$resourc = props.option.resources) !== null && _props$option$resourc !== void 0 && _props$option$resourc.image ? "url('".concat(buildResourceUrl((_props$option$resourc2 = props.option.resources) === null || _props$option$resourc2 === void 0 ? void 0 : _props$option$resourc2.image), "')") : "0";
          return /* @__PURE__ */jsxRuntimeExports.jsxs(Grid, {
            item: true,
            xs: 12 / props.columns,
            children: [/* @__PURE__ */jsxRuntimeExports.jsx(Card, {
              className: styles$6.imageContainer,
              onClick: function onClick() {
                return handleChange(props.option.qualifiedCode, !state.checked);
              },
              style: {
                backgroundImage: backgroundImage,
                backgroundColor: theme.palette.background.default,
                margin: props.spacing + "px",
                height: props.imageHeight + "px",
                border: state.checked ? "2px solid ".concat(theme.palette.primary.main) : "2px solid transparent"
              },
              children: /* @__PURE__ */jsxRuntimeExports.jsx(Checkbox, {
                className: styles$6.selection,
                onChange: function onChange(event) {
                  return handleChange(props.option.qualifiedCode, !state.checked);
                },
                checked: state.checked
              })
            }), !props.hideText && /* @__PURE__ */jsxRuntimeExports.jsx(Box$2, {
              sx: {
                fontFamily: theme.textStyles.text.font,
                color: theme.textStyles.text.color,
                fontSize: theme.textStyles.text.size
              },
              children: props.option.content.label
            })]
          }, props.option.code);
        }
        var dragContainer = "_dragContainer_spv9x_1";
        var rankingItem = "_rankingItem_spv9x_8";
        var styles$5 = {
          dragContainer: dragContainer,
          rankingItem: rankingItem
        };
        function Ranking(props) {
          var dispatch = useDispatch();
          var state = useSelector(function (state2) {
            var valuesMap = {};
            props.component.answers.forEach(function (element) {
              valuesMap[element.qualifiedCode] = state2.runState.values[element.qualifiedCode].value;
            });
            return valuesMap;
          }, shallowEqual);
          var order = useSelector(function (state2) {
            var valuesMap = {};
            props.component.answers.forEach(function (element) {
              if (state2.runState.order) {
                valuesMap[element.qualifiedCode] = state2.runState.order[element.qualifiedCode];
              } else {
                valuesMap[element.qualifiedCode] = state2.runState.values[element.qualifiedCode].order + 1;
              }
            });
            return valuesMap;
          }, shallowEqual);
          var maxIndex = function maxIndex(indexObj) {
            var max = 0;
            var keys = Object.keys(indexObj);
            keys.forEach(function (key) {
              if (indexObj[key] > max) {
                max = indexObj[key];
              }
            });
            return max;
          };
          var onDoubleclick = function onDoubleclick(draggableId, droppableIteemId, index) {
            onDropEvent({
              draggableId: draggableId,
              source: {
                droppableId: droppableIteemId,
                index: index
              },
              destination: {
                droppableId: droppableIteemId == "source" ? "answer" : "source",
                index: droppableIteemId == "source" ? maxIndex(state) : maxIndex(order)
              }
            });
          };
          var onDropEvent = function onDropEvent(event) {
            var unOrderer = _objectSpread({}, order);
            if (!event.destination) {
              return;
            } else if (event.destination.droppableId == "answer" && event.source.droppableId == "source") {
              props.component.answers.forEach(function (answer) {
                if (answer.qualifiedCode == event.draggableId) {
                  unOrderer[answer.qualifiedCode] = void 0;
                  dispatch(valueChange({
                    componentCode: event.draggableId,
                    value: event.destination.index + 1
                  }));
                } else if (+state[answer.qualifiedCode] >= event.destination.index + 1) {
                  dispatch(valueChange({
                    componentCode: answer.qualifiedCode,
                    value: state[answer.qualifiedCode] + 1
                  }));
                } else if (+order[answer.qualifiedCode] >= event.source.index + 1) {
                  unOrderer[answer.qualifiedCode] = unOrderer[answer.qualifiedCode] - 1;
                }
              });
            } else if (event.destination.droppableId == "answer" && event.source.droppableId == "answer") {
              props.component.answers.forEach(function (answer) {
                if (answer.qualifiedCode == event.draggableId) {
                  dispatch(valueChange({
                    componentCode: event.draggableId,
                    value: event.destination.index + 1
                  }));
                } else if (+state[answer.qualifiedCode] > event.source.index + 1 && +state[answer.qualifiedCode] <= event.destination.index + 1) {
                  dispatch(valueChange({
                    componentCode: answer.qualifiedCode,
                    value: state[answer.qualifiedCode] - 1
                  }));
                } else if (+state[answer.qualifiedCode] < event.source.index + 1 && +state[answer.qualifiedCode] >= event.destination.index + 1) {
                  dispatch(valueChange({
                    componentCode: answer.qualifiedCode,
                    value: state[answer.qualifiedCode] + 1
                  }));
                }
              });
            } else if (event.destination.droppableId == "source" && event.source.droppableId == "answer") {
              props.component.answers.forEach(function (answer) {
                if (answer.qualifiedCode == event.draggableId) {
                  unOrderer[answer.qualifiedCode] = event.destination.index + 1;
                  dispatch(valueChange({
                    componentCode: event.draggableId,
                    value: void 0
                  }));
                } else if (+state[answer.qualifiedCode] > event.source.index + 1) {
                  dispatch(valueChange({
                    componentCode: answer.qualifiedCode,
                    value: state[answer.qualifiedCode] - 1
                  }));
                } else if (+order[answer.qualifiedCode] >= event.destination.index + 1) {
                  unOrderer[answer.qualifiedCode] = unOrderer[answer.qualifiedCode] + 1;
                }
              });
            } else if (event.destination.droppableId == "source" && event.source.droppableId == "source") {
              props.component.answers.forEach(function (answer) {
                if (answer.qualifiedCode == event.draggableId) {
                  unOrderer[answer.qualifiedCode] = event.destination.index + 1;
                } else if (+order[answer.qualifiedCode] > event.source.index + 1 && +order[answer.qualifiedCode] <= event.destination.index + 1) {
                  unOrderer[answer.qualifiedCode] = unOrderer[answer.qualifiedCode] - 1;
                } else if (+order[answer.qualifiedCode] < event.source.index + 1 && +order[answer.qualifiedCode] >= event.destination.index + 1) {
                  unOrderer[answer.qualifiedCode] = unOrderer[answer.qualifiedCode] + 1;
                }
              });
            }
            dispatch(orderChange(unOrderer));
          };
          return /* @__PURE__ */jsxRuntimeExports.jsx("div", {
            style: {
              display: "grid",
              gridTemplateColumns: "1fr 1fr"
            },
            children: /* @__PURE__ */jsxRuntimeExports.jsxs(DragDropContext, {
              onDragEnd: function onDragEnd(event) {
                onDropEvent(event);
              },
              children: [/* @__PURE__ */jsxRuntimeExports.jsx(ConnectedDroppable, {
                droppableId: "source",
                type: "ranking" + props.component.qualifiedCode,
                children: function children(provided) {
                  return /* @__PURE__ */jsxRuntimeExports.jsxs(Box$1, _objectSpread(_objectSpread({
                    className: styles$5.dragContainer,
                    sx: {
                      backgroundColor: "background.default"
                    },
                    ref: provided.innerRef
                  }, provided.droppableProps), {}, {
                    children: [props.component.answers.filter(function (option) {
                      return !state[option.qualifiedCode];
                    }).sort(function (a, b) {
                      return order[a.qualifiedCode] - order[b.qualifiedCode];
                    }).map(function (option, index) {
                      return /* @__PURE__ */jsxRuntimeExports.jsx(PublicDraggable, {
                        draggableId: option.qualifiedCode,
                        index: index,
                        children: function children(provided2) {
                          return /* @__PURE__ */jsxRuntimeExports.jsx(Box$1, _objectSpread(_objectSpread(_objectSpread({
                            onDoubleClick: function onDoubleClick() {
                              return onDoubleclick(option.qualifiedCode, "source", index);
                            },
                            className: styles$5.rankingItem,
                            sx: {
                              backgroundColor: "background.paper"
                            },
                            ref: provided2.innerRef
                          }, provided2.draggableProps), provided2.dragHandleProps), {}, {
                            children: option.content.label
                          }));
                        }
                      }, option.qualifiedCode);
                    }), provided.placeholder]
                  }));
                }
              }), /* @__PURE__ */jsxRuntimeExports.jsx(ConnectedDroppable, {
                droppableId: "answer",
                type: "ranking" + props.component.qualifiedCode,
                children: function children(provided) {
                  return /* @__PURE__ */jsxRuntimeExports.jsxs(Box$1, _objectSpread(_objectSpread({
                    ref: provided.innerRef
                  }, provided.droppableProps), {}, {
                    className: styles$5.dragContainer,
                    sx: {
                      backgroundColor: "background.default"
                    },
                    children: [props.component.answers.filter(function (option) {
                      return +state[option.qualifiedCode] > 0;
                    }).sort(function (a, b) {
                      return state[a.qualifiedCode] - state[b.qualifiedCode];
                    }).map(function (option, index) {
                      return /* @__PURE__ */jsxRuntimeExports.jsx(PublicDraggable, {
                        draggableId: option.qualifiedCode,
                        index: index,
                        children: function children(provided2) {
                          return /* @__PURE__ */jsxRuntimeExports.jsx(Box$1, _objectSpread(_objectSpread(_objectSpread({
                            onDoubleClick: function onDoubleClick() {
                              return onDoubleclick(option.qualifiedCode, "answer", index);
                            },
                            className: styles$5.rankingItem,
                            sx: {
                              backgroundColor: "background.paper"
                            },
                            ref: provided2.innerRef
                          }, provided2.draggableProps), provided2.dragHandleProps), {}, {
                            children: option.content.label
                          }));
                        }
                      }, option.qualifiedCode);
                    }), provided.placeholder]
                  }));
                }
              })]
            })
          });
        }
        var build$1 = {
          exports: {}
        };

        /*!
         * Signature Pad v2.3.2
         * https://github.com/szimek/signature_pad
         *
         * Copyright 2017 Szymon Nowak
         * Released under the MIT license
         *
         * The main idea and some parts of the code (e.g. drawing variable width Bézier curve) are taken from:
         * http://corner.squareup.com/2012/07/smoother-signatures.html
         *
         * Implementation of interpolation using cubic Bézier curves is taken from:
         * http://benknowscode.wordpress.com/2012/09/14/path-interpolation-using-cubic-bezier-and-control-point-estimation-in-javascript
         *
         * Algorithm for approximated length of a Bézier curve is taken from:
         * http://www.lemoda.net/maths/bezier-length/index.html
         *
         */

        function Point(x, y, time) {
          this.x = x;
          this.y = y;
          this.time = time || new Date().getTime();
        }
        Point.prototype.velocityFrom = function (start) {
          return this.time !== start.time ? this.distanceTo(start) / (this.time - start.time) : 1;
        };
        Point.prototype.distanceTo = function (start) {
          return Math.sqrt(Math.pow(this.x - start.x, 2) + Math.pow(this.y - start.y, 2));
        };
        Point.prototype.equals = function (other) {
          return this.x === other.x && this.y === other.y && this.time === other.time;
        };
        function Bezier(startPoint, control1, control2, endPoint) {
          this.startPoint = startPoint;
          this.control1 = control1;
          this.control2 = control2;
          this.endPoint = endPoint;
        }

        // Returns approximated length.
        Bezier.prototype.length = function () {
          var steps = 10;
          var length = 0;
          var px = void 0;
          var py = void 0;
          for (var i = 0; i <= steps; i += 1) {
            var t = i / steps;
            var cx = this._point(t, this.startPoint.x, this.control1.x, this.control2.x, this.endPoint.x);
            var cy = this._point(t, this.startPoint.y, this.control1.y, this.control2.y, this.endPoint.y);
            if (i > 0) {
              var xdiff = cx - px;
              var ydiff = cy - py;
              length += Math.sqrt(xdiff * xdiff + ydiff * ydiff);
            }
            px = cx;
            py = cy;
          }
          return length;
        };

        /* eslint-disable no-multi-spaces, space-in-parens */
        Bezier.prototype._point = function (t, start, c1, c2, end) {
          return start * (1.0 - t) * (1.0 - t) * (1.0 - t) + 3.0 * c1 * (1.0 - t) * (1.0 - t) * t + 3.0 * c2 * (1.0 - t) * t * t + end * t * t * t;
        };

        /* eslint-disable */

        // http://stackoverflow.com/a/27078401/815507
        function throttle(func, wait, options) {
          var context, args, result;
          var timeout = null;
          var previous = 0;
          if (!options) options = {};
          var later = function later() {
            previous = options.leading === false ? 0 : Date.now();
            timeout = null;
            result = func.apply(context, args);
            if (!timeout) context = args = null;
          };
          return function () {
            var now = Date.now();
            if (!previous && options.leading === false) previous = now;
            var remaining = wait - (now - previous);
            context = this;
            args = arguments;
            if (remaining <= 0 || remaining > wait) {
              if (timeout) {
                clearTimeout(timeout);
                timeout = null;
              }
              previous = now;
              result = func.apply(context, args);
              if (!timeout) context = args = null;
            } else if (!timeout && options.trailing !== false) {
              timeout = setTimeout(later, remaining);
            }
            return result;
          };
        }
        function SignaturePad(canvas, options) {
          var self = this;
          var opts = options || {};
          this.velocityFilterWeight = opts.velocityFilterWeight || 0.7;
          this.minWidth = opts.minWidth || 0.5;
          this.maxWidth = opts.maxWidth || 2.5;
          this.throttle = 'throttle' in opts ? opts.throttle : 16; // in miliseconds
          this.minDistance = 'minDistance' in opts ? opts.minDistance : 5;
          if (this.throttle) {
            this._strokeMoveUpdate = throttle(SignaturePad.prototype._strokeUpdate, this.throttle);
          } else {
            this._strokeMoveUpdate = SignaturePad.prototype._strokeUpdate;
          }
          this.dotSize = opts.dotSize || function () {
            return (this.minWidth + this.maxWidth) / 2;
          };
          this.penColor = opts.penColor || 'black';
          this.backgroundColor = opts.backgroundColor || 'rgba(0,0,0,0)';
          this.onBegin = opts.onBegin;
          this.onEnd = opts.onEnd;
          this._canvas = canvas;
          this._ctx = canvas.getContext('2d');
          this.clear();

          // We need add these inline so they are available to unbind while still having
          // access to 'self' we could use _.bind but it's not worth adding a dependency.
          this._handleMouseDown = function (event) {
            if (event.which === 1) {
              self._mouseButtonDown = true;
              self._strokeBegin(event);
            }
          };
          this._handleMouseMove = function (event) {
            if (self._mouseButtonDown) {
              self._strokeMoveUpdate(event);
            }
          };
          this._handleMouseUp = function (event) {
            if (event.which === 1 && self._mouseButtonDown) {
              self._mouseButtonDown = false;
              self._strokeEnd(event);
            }
          };
          this._handleTouchStart = function (event) {
            if (event.targetTouches.length === 1) {
              var touch = event.changedTouches[0];
              self._strokeBegin(touch);
            }
          };
          this._handleTouchMove = function (event) {
            // Prevent scrolling.
            event.preventDefault();
            var touch = event.targetTouches[0];
            self._strokeMoveUpdate(touch);
          };
          this._handleTouchEnd = function (event) {
            var wasCanvasTouched = event.target === self._canvas;
            if (wasCanvasTouched) {
              event.preventDefault();
              self._strokeEnd(event);
            }
          };

          // Enable mouse and touch event handlers
          this.on();
        }

        // Public methods
        SignaturePad.prototype.clear = function () {
          var ctx = this._ctx;
          var canvas = this._canvas;
          ctx.fillStyle = this.backgroundColor;
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          ctx.fillRect(0, 0, canvas.width, canvas.height);
          this._data = [];
          this._reset();
          this._isEmpty = true;
        };
        SignaturePad.prototype.fromDataURL = function (dataUrl) {
          var _this = this;
          var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
          var image = new Image();
          var ratio = options.ratio || window.devicePixelRatio || 1;
          var width = options.width || this._canvas.width / ratio;
          var height = options.height || this._canvas.height / ratio;
          this._reset();
          image.src = dataUrl;
          image.onload = function () {
            _this._ctx.drawImage(image, 0, 0, width, height);
          };
          this._isEmpty = false;
        };
        SignaturePad.prototype.toDataURL = function (type) {
          var _canvas;
          switch (type) {
            case 'image/svg+xml':
              return this._toSVG();
            default:
              for (var _len = arguments.length, options = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                options[_key - 1] = arguments[_key];
              }
              return (_canvas = this._canvas).toDataURL.apply(_canvas, [type].concat(options));
          }
        };
        SignaturePad.prototype.on = function () {
          this._handleMouseEvents();
          this._handleTouchEvents();
        };
        SignaturePad.prototype.off = function () {
          this._canvas.removeEventListener('mousedown', this._handleMouseDown);
          this._canvas.removeEventListener('mousemove', this._handleMouseMove);
          document.removeEventListener('mouseup', this._handleMouseUp);
          this._canvas.removeEventListener('touchstart', this._handleTouchStart);
          this._canvas.removeEventListener('touchmove', this._handleTouchMove);
          this._canvas.removeEventListener('touchend', this._handleTouchEnd);
        };
        SignaturePad.prototype.isEmpty = function () {
          return this._isEmpty;
        };

        // Private methods
        SignaturePad.prototype._strokeBegin = function (event) {
          this._data.push([]);
          this._reset();
          this._strokeUpdate(event);
          if (typeof this.onBegin === 'function') {
            this.onBegin(event);
          }
        };
        SignaturePad.prototype._strokeUpdate = function (event) {
          var x = event.clientX;
          var y = event.clientY;
          var point = this._createPoint(x, y);
          var lastPointGroup = this._data[this._data.length - 1];
          var lastPoint = lastPointGroup && lastPointGroup[lastPointGroup.length - 1];
          var isLastPointTooClose = lastPoint && point.distanceTo(lastPoint) < this.minDistance;

          // Skip this point if it's too close to the previous one
          if (!(lastPoint && isLastPointTooClose)) {
            var _addPoint = this._addPoint(point),
              curve = _addPoint.curve,
              widths = _addPoint.widths;
            if (curve && widths) {
              this._drawCurve(curve, widths.start, widths.end);
            }
            this._data[this._data.length - 1].push({
              x: point.x,
              y: point.y,
              time: point.time,
              color: this.penColor
            });
          }
        };
        SignaturePad.prototype._strokeEnd = function (event) {
          var canDrawCurve = this.points.length > 2;
          var point = this.points[0]; // Point instance

          if (!canDrawCurve && point) {
            this._drawDot(point);
          }
          if (point) {
            var lastPointGroup = this._data[this._data.length - 1];
            var lastPoint = lastPointGroup[lastPointGroup.length - 1]; // plain object

            // When drawing a dot, there's only one point in a group, so without this check
            // such group would end up with exactly the same 2 points.
            if (!point.equals(lastPoint)) {
              lastPointGroup.push({
                x: point.x,
                y: point.y,
                time: point.time,
                color: this.penColor
              });
            }
          }
          if (typeof this.onEnd === 'function') {
            this.onEnd(event);
          }
        };
        SignaturePad.prototype._handleMouseEvents = function () {
          this._mouseButtonDown = false;
          this._canvas.addEventListener('mousedown', this._handleMouseDown);
          this._canvas.addEventListener('mousemove', this._handleMouseMove);
          document.addEventListener('mouseup', this._handleMouseUp);
        };
        SignaturePad.prototype._handleTouchEvents = function () {
          // Pass touch events to canvas element on mobile IE11 and Edge.
          this._canvas.style.msTouchAction = 'none';
          this._canvas.style.touchAction = 'none';
          this._canvas.addEventListener('touchstart', this._handleTouchStart);
          this._canvas.addEventListener('touchmove', this._handleTouchMove);
          this._canvas.addEventListener('touchend', this._handleTouchEnd);
        };
        SignaturePad.prototype._reset = function () {
          this.points = [];
          this._lastVelocity = 0;
          this._lastWidth = (this.minWidth + this.maxWidth) / 2;
          this._ctx.fillStyle = this.penColor;
        };
        SignaturePad.prototype._createPoint = function (x, y, time) {
          var rect = this._canvas.getBoundingClientRect();
          return new Point(x - rect.left, y - rect.top, time || new Date().getTime());
        };
        SignaturePad.prototype._addPoint = function (point) {
          var points = this.points;
          var tmp = void 0;
          points.push(point);
          if (points.length > 2) {
            // To reduce the initial lag make it work with 3 points
            // by copying the first point to the beginning.
            if (points.length === 3) points.unshift(points[0]);
            tmp = this._calculateCurveControlPoints(points[0], points[1], points[2]);
            var c2 = tmp.c2;
            tmp = this._calculateCurveControlPoints(points[1], points[2], points[3]);
            var c3 = tmp.c1;
            var curve = new Bezier(points[1], c2, c3, points[2]);
            var widths = this._calculateCurveWidths(curve);

            // Remove the first element from the list,
            // so that we always have no more than 4 points in points array.
            points.shift();
            return {
              curve: curve,
              widths: widths
            };
          }
          return {};
        };
        SignaturePad.prototype._calculateCurveControlPoints = function (s1, s2, s3) {
          var dx1 = s1.x - s2.x;
          var dy1 = s1.y - s2.y;
          var dx2 = s2.x - s3.x;
          var dy2 = s2.y - s3.y;
          var m1 = {
            x: (s1.x + s2.x) / 2.0,
            y: (s1.y + s2.y) / 2.0
          };
          var m2 = {
            x: (s2.x + s3.x) / 2.0,
            y: (s2.y + s3.y) / 2.0
          };
          var l1 = Math.sqrt(dx1 * dx1 + dy1 * dy1);
          var l2 = Math.sqrt(dx2 * dx2 + dy2 * dy2);
          var dxm = m1.x - m2.x;
          var dym = m1.y - m2.y;
          var k = l2 / (l1 + l2);
          var cm = {
            x: m2.x + dxm * k,
            y: m2.y + dym * k
          };
          var tx = s2.x - cm.x;
          var ty = s2.y - cm.y;
          return {
            c1: new Point(m1.x + tx, m1.y + ty),
            c2: new Point(m2.x + tx, m2.y + ty)
          };
        };
        SignaturePad.prototype._calculateCurveWidths = function (curve) {
          var startPoint = curve.startPoint;
          var endPoint = curve.endPoint;
          var widths = {
            start: null,
            end: null
          };
          var velocity = this.velocityFilterWeight * endPoint.velocityFrom(startPoint) + (1 - this.velocityFilterWeight) * this._lastVelocity;
          var newWidth = this._strokeWidth(velocity);
          widths.start = this._lastWidth;
          widths.end = newWidth;
          this._lastVelocity = velocity;
          this._lastWidth = newWidth;
          return widths;
        };
        SignaturePad.prototype._strokeWidth = function (velocity) {
          return Math.max(this.maxWidth / (velocity + 1), this.minWidth);
        };
        SignaturePad.prototype._drawPoint = function (x, y, size) {
          var ctx = this._ctx;
          ctx.moveTo(x, y);
          ctx.arc(x, y, size, 0, 2 * Math.PI, false);
          this._isEmpty = false;
        };
        SignaturePad.prototype._drawCurve = function (curve, startWidth, endWidth) {
          var ctx = this._ctx;
          var widthDelta = endWidth - startWidth;
          var drawSteps = Math.floor(curve.length());
          ctx.beginPath();
          for (var i = 0; i < drawSteps; i += 1) {
            // Calculate the Bezier (x, y) coordinate for this step.
            var t = i / drawSteps;
            var tt = t * t;
            var ttt = tt * t;
            var u = 1 - t;
            var uu = u * u;
            var uuu = uu * u;
            var x = uuu * curve.startPoint.x;
            x += 3 * uu * t * curve.control1.x;
            x += 3 * u * tt * curve.control2.x;
            x += ttt * curve.endPoint.x;
            var y = uuu * curve.startPoint.y;
            y += 3 * uu * t * curve.control1.y;
            y += 3 * u * tt * curve.control2.y;
            y += ttt * curve.endPoint.y;
            var width = startWidth + ttt * widthDelta;
            this._drawPoint(x, y, width);
          }
          ctx.closePath();
          ctx.fill();
        };
        SignaturePad.prototype._drawDot = function (point) {
          var ctx = this._ctx;
          var width = typeof this.dotSize === 'function' ? this.dotSize() : this.dotSize;
          ctx.beginPath();
          this._drawPoint(point.x, point.y, width);
          ctx.closePath();
          ctx.fill();
        };
        SignaturePad.prototype._fromData = function (pointGroups, drawCurve, drawDot) {
          for (var i = 0; i < pointGroups.length; i += 1) {
            var group = pointGroups[i];
            if (group.length > 1) {
              for (var j = 0; j < group.length; j += 1) {
                var rawPoint = group[j];
                var point = new Point(rawPoint.x, rawPoint.y, rawPoint.time);
                var color = rawPoint.color;
                if (j === 0) {
                  // First point in a group. Nothing to draw yet.

                  // All points in the group have the same color, so it's enough to set
                  // penColor just at the beginning.
                  this.penColor = color;
                  this._reset();
                  this._addPoint(point);
                } else if (j !== group.length - 1) {
                  // Middle point in a group.
                  var _addPoint2 = this._addPoint(point),
                    curve = _addPoint2.curve,
                    widths = _addPoint2.widths;
                  if (curve && widths) {
                    drawCurve(curve, widths, color);
                  }
                } else ;
              }
            } else {
              this._reset();
              var _rawPoint = group[0];
              drawDot(_rawPoint);
            }
          }
        };
        SignaturePad.prototype._toSVG = function () {
          var _this2 = this;
          var pointGroups = this._data;
          var canvas = this._canvas;
          var ratio = Math.max(window.devicePixelRatio || 1, 1);
          var minX = 0;
          var minY = 0;
          var maxX = canvas.width / ratio;
          var maxY = canvas.height / ratio;
          var svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
          svg.setAttributeNS(null, 'width', canvas.width);
          svg.setAttributeNS(null, 'height', canvas.height);
          this._fromData(pointGroups, function (curve, widths, color) {
            var path = document.createElement('path');

            // Need to check curve for NaN values, these pop up when drawing
            // lines on the canvas that are not continuous. E.g. Sharp corners
            // or stopping mid-stroke and than continuing without lifting mouse.
            if (!isNaN(curve.control1.x) && !isNaN(curve.control1.y) && !isNaN(curve.control2.x) && !isNaN(curve.control2.y)) {
              var attr = 'M ' + curve.startPoint.x.toFixed(3) + ',' + curve.startPoint.y.toFixed(3) + ' ' + ('C ' + curve.control1.x.toFixed(3) + ',' + curve.control1.y.toFixed(3) + ' ') + (curve.control2.x.toFixed(3) + ',' + curve.control2.y.toFixed(3) + ' ') + (curve.endPoint.x.toFixed(3) + ',' + curve.endPoint.y.toFixed(3));
              path.setAttribute('d', attr);
              path.setAttribute('stroke-width', (widths.end * 2.25).toFixed(3));
              path.setAttribute('stroke', color);
              path.setAttribute('fill', 'none');
              path.setAttribute('stroke-linecap', 'round');
              svg.appendChild(path);
            }
          }, function (rawPoint) {
            var circle = document.createElement('circle');
            var dotSize = typeof _this2.dotSize === 'function' ? _this2.dotSize() : _this2.dotSize;
            circle.setAttribute('r', dotSize);
            circle.setAttribute('cx', rawPoint.x);
            circle.setAttribute('cy', rawPoint.y);
            circle.setAttribute('fill', rawPoint.color);
            svg.appendChild(circle);
          });
          var prefix = 'data:image/svg+xml;base64,';
          var header = '<svg' + ' xmlns="http://www.w3.org/2000/svg"' + ' xmlns:xlink="http://www.w3.org/1999/xlink"' + (' viewBox="' + minX + ' ' + minY + ' ' + maxX + ' ' + maxY + '"') + (' width="' + maxX + '"') + (' height="' + maxY + '"') + '>';
          var body = svg.innerHTML;

          // IE hack for missing innerHTML property on SVGElement
          if (body === undefined) {
            var dummy = document.createElement('dummy');
            var nodes = svg.childNodes;
            dummy.innerHTML = '';
            for (var i = 0; i < nodes.length; i += 1) {
              dummy.appendChild(nodes[i].cloneNode(true));
            }
            body = dummy.innerHTML;
          }
          var footer = '</svg>';
          var data = header + body + footer;
          return prefix + btoa(data);
        };
        SignaturePad.prototype.fromData = function (pointGroups) {
          var _this3 = this;
          this.clear();
          this._fromData(pointGroups, function (curve, widths) {
            return _this3._drawCurve(curve, widths.start, widths.end);
          }, function (rawPoint) {
            return _this3._drawDot(rawPoint);
          });
          this._data = pointGroups;
        };
        SignaturePad.prototype.toData = function () {
          return this._data;
        };
        var signature_pad = /*#__PURE__*/Object.freeze( /*#__PURE__*/Object.defineProperty({
          __proto__: null,
          default: SignaturePad
        }, Symbol.toStringTag, {
          value: 'Module'
        }));
        var require$$2 = /*@__PURE__*/getAugmentedNamespace(signature_pad);
        var build = {
          exports: {}
        };
        var hasRequiredBuild;
        function requireBuild() {
          if (hasRequiredBuild) return build.exports;
          hasRequiredBuild = 1;
          (function (module, exports) {
            !function (e, t) {
              module.exports = t();
            }(commonjsGlobal, function () {
              return function (e) {
                function t(n) {
                  if (r[n]) return r[n].exports;
                  var o = r[n] = {
                    exports: {},
                    id: n,
                    loaded: !1
                  };
                  return e[n].call(o.exports, o, o.exports, t), o.loaded = !0, o.exports;
                }
                var r = {};
                return t.m = e, t.c = r, t.p = "", t(0);
              }([function (e, t) {
                function r(e) {
                  var t = e.getContext("2d"),
                    r = e.width,
                    n = e.height,
                    o = t.getImageData(0, 0, r, n).data,
                    f = a(!0, r, n, o),
                    i = a(!1, r, n, o),
                    c = u(!0, r, n, o),
                    d = u(!1, r, n, o),
                    p = d - c + 1,
                    l = i - f + 1,
                    s = t.getImageData(c, f, p, l);
                  return e.width = p, e.height = l, t.clearRect(0, 0, p, l), t.putImageData(s, 0, 0), e;
                }
                function n(e, t, r, n) {
                  return {
                    red: n[4 * (r * t + e)],
                    green: n[4 * (r * t + e) + 1],
                    blue: n[4 * (r * t + e) + 2],
                    alpha: n[4 * (r * t + e) + 3]
                  };
                }
                function o(e, t, r, o) {
                  return n(e, t, r, o).alpha;
                }
                function a(e, t, r, n) {
                  for (var a = e ? 1 : -1, u = e ? 0 : r - 1, f = u; e ? f < r : f > -1; f += a) for (var i = 0; i < t; i++) if (o(i, f, t, n)) return f;
                  return null;
                }
                function u(e, t, r, n) {
                  for (var a = e ? 1 : -1, u = e ? 0 : t - 1, f = u; e ? f < t : f > -1; f += a) for (var i = 0; i < r; i++) if (o(f, i, t, n)) return f;
                  return null;
                }
                Object.defineProperty(t, "__esModule", {
                  value: !0
                }), t.default = r;
              }]);
            });
          })(build);
          return build.exports;
        }
        (function (module, exports) {
          !function (e, t) {
            module.exports = t(propTypesExports, reactExports, require$$2, requireBuild());
          }(commonjsGlobal, function (e, t, n, r) {
            return function (e) {
              function t(r) {
                if (n[r]) return n[r].exports;
                var a = n[r] = {
                  exports: {},
                  id: r,
                  loaded: !1
                };
                return e[r].call(a.exports, a, a.exports, t), a.loaded = !0, a.exports;
              }
              var n = {};
              return t.m = e, t.c = n, t.p = "", t(0);
            }([function (e, t, n) {
              function r(e) {
                return e && e.__esModule ? e : {
                  default: e
                };
              }
              function a(e, t) {
                var n = {};
                for (var r in e) t.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
                return n;
              }
              function o(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
              }
              function i(e, t) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != _typeof(t) && "function" != typeof t ? e : t;
              }
              function u(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + _typeof(t));
                e.prototype = Object.create(t && t.prototype, {
                  constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                  }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
              }
              Object.defineProperty(t, "__esModule", {
                value: !0
              });
              var s = Object.assign || function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                  }
                  return e;
                },
                c = function () {
                  function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                      var r = t[n];
                      r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
                    }
                  }
                  return function (t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t;
                  };
                }(),
                f = n(1),
                p = r(f),
                l = n(2),
                d = r(l),
                v = n(3),
                h = r(v),
                _ = n(4),
                g = r(_),
                m = function (e) {
                  function t() {
                    var e, n, r, u;
                    o(this, t);
                    for (var s = arguments.length, c = Array(s), f = 0; f < s; f++) c[f] = arguments[f];
                    return n = r = i(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(c))), r._sigPad = null, r._excludeOurProps = function () {
                      var e = r.props,
                        t = (e.canvasProps, e.clearOnResize, a(e, ["canvasProps", "clearOnResize"]));
                      return t;
                    }, r.getCanvas = function () {
                      return r._canvas;
                    }, r.getTrimmedCanvas = function () {
                      var e = document.createElement("canvas");
                      return e.width = r._canvas.width, e.height = r._canvas.height, e.getContext("2d").drawImage(r._canvas, 0, 0), (0, g.default)(e);
                    }, r.getSignaturePad = function () {
                      return r._sigPad;
                    }, r._checkClearOnResize = function () {
                      r.props.clearOnResize && r._resizeCanvas();
                    }, r._resizeCanvas = function () {
                      var e = r.props.canvasProps || {},
                        t = e.width,
                        n = e.height;
                      if (!t || !n) {
                        var a = r._canvas,
                          o = Math.max(window.devicePixelRatio || 1, 1);
                        t || (a.width = a.offsetWidth * o), n || (a.height = a.offsetHeight * o), a.getContext("2d").scale(o, o), r.clear();
                      }
                    }, r.on = function () {
                      return window.addEventListener("resize", r._checkClearOnResize), r._sigPad.on();
                    }, r.off = function () {
                      return window.removeEventListener("resize", r._checkClearOnResize), r._sigPad.off();
                    }, r.clear = function () {
                      return r._sigPad.clear();
                    }, r.isEmpty = function () {
                      return r._sigPad.isEmpty();
                    }, r.fromDataURL = function (e, t) {
                      return r._sigPad.fromDataURL(e, t);
                    }, r.toDataURL = function (e, t) {
                      return r._sigPad.toDataURL(e, t);
                    }, r.fromData = function (e) {
                      return r._sigPad.fromData(e);
                    }, r.toData = function () {
                      return r._sigPad.toData();
                    }, u = n, i(r, u);
                  }
                  return u(t, e), c(t, [{
                    key: "componentDidMount",
                    value: function value() {
                      this._sigPad = new h.default(this._canvas, this._excludeOurProps()), this._resizeCanvas(), this.on();
                    }
                  }, {
                    key: "componentWillUnmount",
                    value: function value() {
                      this.off();
                    }
                  }, {
                    key: "componentDidUpdate",
                    value: function value() {
                      Object.assign(this._sigPad, this._excludeOurProps());
                    }
                  }, {
                    key: "render",
                    value: function value() {
                      var e = this,
                        t = this.props.canvasProps;
                      return d.default.createElement("canvas", s({
                        ref: function ref(t) {
                          e._canvas = t;
                        }
                      }, t));
                    }
                  }]), t;
                }(l.Component);
              m.propTypes = {
                velocityFilterWeight: p.default.number,
                minWidth: p.default.number,
                maxWidth: p.default.number,
                minDistance: p.default.number,
                dotSize: p.default.oneOfType([p.default.number, p.default.func]),
                penColor: p.default.string,
                throttle: p.default.number,
                onEnd: p.default.func,
                onBegin: p.default.func,
                canvasProps: p.default.object,
                clearOnResize: p.default.bool
              }, m.defaultProps = {
                clearOnResize: !0
              }, t.default = m;
            }, function (t, n) {
              t.exports = e;
            }, function (e, n) {
              e.exports = t;
            }, function (e, t) {
              e.exports = n;
            }, function (e, t) {
              e.exports = r;
            }]);
          });
        })(build$1);
        var buildExports = build$1.exports;
        var SignatureCanvas = /*@__PURE__*/getDefaultExportFromCjs(buildExports);
        var signatureCanvas = "_signatureCanvas_1bkvb_1";
        var container$1 = "_container_1bkvb_10";
        var buttonContainer = "_buttonContainer_1bkvb_14";
        var styles$4 = {
          signatureCanvas: signatureCanvas,
          container: container$1,
          buttonContainer: buttonContainer
        };
        function Signature(props) {
          var _reactExports$useStat11 = reactExports.useState(false),
            _reactExports$useStat12 = _slicedToArray(_reactExports$useStat11, 2),
            submitEnabled = _reactExports$useStat12[0],
            setSubmitEnabled = _reactExports$useStat12[1];
          var _reactExports$useStat13 = reactExports.useState(false),
            _reactExports$useStat14 = _slicedToArray(_reactExports$useStat13, 2),
            clearEnabled = _reactExports$useStat14[0],
            setClearEnabled = _reactExports$useStat14[1];
          var state = useSelector(function (state2) {
            var questionState = state2.runState.values[props.component.qualifiedCode];
            return questionState === null || questionState === void 0 ? void 0 : questionState.value;
          });
          var containerRef = reactExports.useRef(null);
          var _reactExports$useStat15 = reactExports.useState(400),
            _reactExports$useStat16 = _slicedToArray(_reactExports$useStat15, 2),
            canvasWidth = _reactExports$useStat16[0],
            setCanvasWidth = _reactExports$useStat16[1];
          reactExports.useEffect(function () {
            var _containerRef$current5;
            setCanvasWidth(containerRef === null || containerRef === void 0 ? void 0 : (_containerRef$current5 = containerRef.current) === null || _containerRef$current5 === void 0 ? void 0 : _containerRef$current5.offsetWidth);
          }, [containerRef]);
          reactExports.useEffect(function () {
            var resizeListener = function resizeListener() {
              var _containerRef$current6;
              setCanvasWidth(containerRef === null || containerRef === void 0 ? void 0 : (_containerRef$current6 = containerRef.current) === null || _containerRef$current6 === void 0 ? void 0 : _containerRef$current6.offsetWidth);
            };
            window.addEventListener("resize", resizeListener);
            return function () {
              window.removeEventListener("resize", resizeListener);
            };
          }, []);
          var sigCanvas = reactExports.useRef();
          var dispatch = useDispatch();
          var clear = function clear() {
            sigCanvas.current.clear();
            setClearEnabled(false);
            setSubmitEnabled(false);
          };
          var submit = function submit() {
            var dataUrl = sigCanvas.current.toDataURL("image/png");
            uploadDataUrl(props.component.qualifiedCode, dataUrl, "signature-".concat(props.component.qualifiedCode, ".png")).then(function (response) {
              dispatch(valueChange({
                componentCode: props.component.qualifiedCode,
                value: response
              }));
            }).catch(function (err) {
              console.error(err);
            });
          };
          reactExports.useEffect(function () {
            if (state && state.stored_filename) {
              downloadFileAsBase64(previewUrl(state.stored_filename)).then(function (response) {
                sigCanvas.current.fromDataURL(response);
              });
            }
          }, [state]);
          reactExports.useEffect(function () {
            if (state && state.stored_filename) {
              downloadFileAsBase64(previewUrl(state.stored_filename)).then(function (response) {
                setSubmitEnabled(false);
                sigCanvas.current.fromDataURL(response);
              });
            }
          }, [state]);
          return /* @__PURE__ */jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
            children: [/* @__PURE__ */jsxRuntimeExports.jsx(Box$1, {
              sx: {
                backgroundColor: "background.default"
              },
              className: styles$4.container,
              children: /* @__PURE__ */jsxRuntimeExports.jsx(Box$1, {
                ref: containerRef,
                sx: {
                  maxWidth: Math.min(canvasWidth, 400) + "px"
                },
                className: styles$4.signatureCanvas,
                children: /* @__PURE__ */jsxRuntimeExports.jsx(SignatureCanvas, {
                  penColor: "red",
                  clearOnResize: true,
                  onBegin: function onBegin() {
                    setSubmitEnabled(true);
                    setClearEnabled(true);
                  },
                  ref: sigCanvas,
                  canvasProps: {
                    width: Math.min(canvasWidth, 400),
                    height: 200
                  }
                })
              })
            }), /* @__PURE__ */jsxRuntimeExports.jsx("br", {}), /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
              className: styles$4.buttonContainer,
              children: [/* @__PURE__ */jsxRuntimeExports.jsx(Button, {
                onClick: function onClick() {
                  return clear();
                },
                disabled: !clearEnabled,
                children: "Clear"
              }), /* @__PURE__ */jsxRuntimeExports.jsx(Button, {
                onClick: function onClick() {
                  return submit();
                },
                disabled: !submitEnabled,
                children: "Submit"
              })]
            })]
          });
        }
        function VideoDisplay(props) {
          var _props$component$reso, _props$component$reso2;
          var videUrl = (_props$component$reso = props.component.resources) !== null && _props$component$reso !== void 0 && _props$component$reso.videoUrl ? buildResourceUrl(props.component.resources.videoUrl) : "";
          useTheme$1();
          return ((_props$component$reso2 = props.component.resources) === null || _props$component$reso2 === void 0 ? void 0 : _props$component$reso2.videoUrl) && /* @__PURE__ */jsxRuntimeExports.jsx("div", {
            style: {
              position: "relative",
              marginTop: "16px",
              // 16:9 aspect ratio
              paddingTop: props.component.audio_only ? "10%" : "56%"
            },
            children: /* @__PURE__ */jsxRuntimeExports.jsx(ReactPlayer, {
              url: videUrl,
              loop: props.component.loop || false,
              light: true,
              controls: true,
              config: {
                forceAudio: props.component.audio_only || false
              },
              style: {
                backgroundColor: "black",
                position: "absolute",
                top: "0",
                left: "0"
              },
              volume: 1,
              width: "100%",
              height: "100%"
            })
          });
        }
        function ImageDisplay(props) {
          var _props$component$reso3, _props$component$reso4;
          var imageUrl = (_props$component$reso3 = props.component.resources) !== null && _props$component$reso3 !== void 0 && _props$component$reso3.imageUrl ? buildResourceUrl(props.component.resources.imageUrl) : "";
          return ((_props$component$reso4 = props.component.resources) === null || _props$component$reso4 === void 0 ? void 0 : _props$component$reso4.imageUrl) && /* @__PURE__ */jsxRuntimeExports.jsx("img", {
            style: {
              width: "100%"
            },
            src: imageUrl
          });
        }
        var imageGrid = "_imageGrid_gkz8d_1";
        var imageContainer = "_imageContainer_gkz8d_5";
        var rankContainer = "_rankContainer_gkz8d_11";
        var rankValue = "_rankValue_gkz8d_19";
        var styles$3 = {
          imageGrid: imageGrid,
          imageContainer: imageContainer,
          rankContainer: rankContainer,
          rankValue: rankValue
        };
        function ImageRanking(props) {
          var values = useSelector(function (state) {
            var valuesMap = {};
            props.component.answers.forEach(function (element) {
              valuesMap[element.qualifiedCode] = state.runState.values[element.qualifiedCode].value;
            });
            return valuesMap;
          }, shallowEqual);
          var dispatch = useDispatch();
          var containerRef = reactExports.useRef(null);
          var _reactExports$useStat17 = reactExports.useState(800),
            _reactExports$useStat18 = _slicedToArray(_reactExports$useStat17, 2),
            width = _reactExports$useStat18[0],
            setWidth = _reactExports$useStat18[1];
          reactExports.useEffect(function () {
            var _containerRef$current7;
            setWidth(containerRef === null || containerRef === void 0 ? void 0 : (_containerRef$current7 = containerRef.current) === null || _containerRef$current7 === void 0 ? void 0 : _containerRef$current7.offsetWidth);
          }, [containerRef]);
          var imageWidth = (width - props.component.columns * props.component.spacing * 2) / props.component.columns;
          var imageHeight = imageWidth / (props.component.imageAspectRatio || 1);
          reactExports.useEffect(function () {
            var resizeListener = function resizeListener() {
              var _containerRef$current8;
              setWidth(containerRef === null || containerRef === void 0 ? void 0 : (_containerRef$current8 = containerRef.current) === null || _containerRef$current8 === void 0 ? void 0 : _containerRef$current8.offsetWidth);
            };
            window.addEventListener("resize", resizeListener);
            return function () {
              window.removeEventListener("resize", resizeListener);
            };
          }, []);
          var onItemClick = function onItemClick(componentCode) {
            dispatch(setDirty(props.component.qualifiedCode));
            dispatch(setDirty(props.parentCode));
            if (+values[componentCode] > 0) {
              dispatch(valueChange({
                componentCode: componentCode,
                undefined: void 0
              }));
            } else {
              var keys = Object.keys(values);
              var allValues = keys.map(function (key) {
                return values[key];
              });
              for (var i = 1; i <= keys.length; i++) {
                if (!allValues.includes(i)) {
                  dispatch(valueChange({
                    componentCode: componentCode,
                    value: i
                  }));
                  return;
                }
              }
            }
          };
          return /* @__PURE__ */jsxRuntimeExports.jsx(Grid, {
            ref: containerRef,
            container: true,
            className: styles$3.imageGrid,
            children: props.component.answers.map(function (option) {
              return /* @__PURE__ */jsxRuntimeExports.jsx(ImageRankingItem, {
                option: option,
                spacing: props.component.spacing,
                columns: props.component.columns,
                hideText: props.component.hideText,
                onClick: function onClick() {
                  return onItemClick(option.qualifiedCode);
                },
                parentCode: props.component.qualifiedCode,
                imageHeight: imageHeight,
                imageWidth: imageWidth
              }, option.qualifiedCode);
            })
          });
        }
        function ImageRankingItem(props) {
          var _props$option$resourc3;
          var theme = useTheme$1();
          var state = useSelector(function (state2) {
            var answerState = state2.runState.values[props.option.qualifiedCode];
            return {
              showAnswer: typeof (answerState === null || answerState === void 0 ? void 0 : answerState.relevance) == "undefined" || answerState.relevance,
              value: (answerState === null || answerState === void 0 ? void 0 : answerState.value) || 0
            };
          }, shallowEqual);
          var backgroundImage = (_props$option$resourc3 = props.option.resources) !== null && _props$option$resourc3 !== void 0 && _props$option$resourc3.image ? "url('".concat(buildResourceUrl(props.option.resources.image), "')") : "0";
          return /* @__PURE__ */jsxRuntimeExports.jsxs(Grid, {
            item: true,
            xs: 12 / props.columns,
            children: [/* @__PURE__ */jsxRuntimeExports.jsx(Box$2, {
              className: styles$3.imageContainer,
              onClick: function onClick() {
                return props.onClick();
              },
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              style: {
                backgroundImage: backgroundImage,
                backgroundColor: theme.palette.background.default,
                margin: props.spacing + "px",
                boxShadow: 2,
                height: props.imageHeight + "px",
                border: state.checked ? "2px solid ".concat(theme.palette.primary.main) : "2px solid transparent"
              },
              children: state.value > 0 && /* @__PURE__ */jsxRuntimeExports.jsx("div", {
                style: {
                  height: Math.min(props.imageHeight, props.imageWidth) + "px",
                  width: Math.min(props.imageHeight, props.imageWidth) + "px",
                  borderRadius: Math.min(props.imageHeight, props.imageWidth) / 2 + "px",
                  fontSize: Math.min(props.imageHeight, props.imageWidth) / 2 + "px"
                },
                className: styles$3.rankContainer,
                children: /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                  className: styles$3.rankValue,
                  style: {
                    color: theme.palette.primary.main
                  },
                  children: state.value
                })
              })
            }), !props.hideText && /* @__PURE__ */jsxRuntimeExports.jsx(Box$2, {
              sx: {
                fontFamily: theme.textStyles.text.font,
                color: theme.textStyles.text.color,
                fontSize: theme.textStyles.text.size
              },
              children: props.option.content.label
            })]
          }, props.option.code);
        }
        var choicesContainer = "_choicesContainer_iaaeb_1";
        var choice = "_choice_iaaeb_1";
        var choiceLabels = "_choiceLabels_iaaeb_19";
        var styles$2 = {
          choicesContainer: choicesContainer,
          choice: choice,
          choiceLabels: choiceLabels
        };
        function NPS(props) {
          var theme = useTheme$1();
          var dispatch = useDispatch();
          var columns = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
          var state = useSelector(function (state2) {
            return state2.runState.values[props.component.qualifiedCode].value;
          }, shallowEqual);
          var handleChange = function handleChange(option) {
            dispatch(valueChange({
              componentCode: props.component.qualifiedCode,
              value: option
            }));
            dispatch(setDirty(props.component.qualifiedCode));
          };
          return /* @__PURE__ */jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
            children: [/* @__PURE__ */jsxRuntimeExports.jsxs(Box$2, {
              className: styles$2.choiceLabels,
              children: [/* @__PURE__ */jsxRuntimeExports.jsx(Box$2, {
                children: props.component.content.lower_bound_hint
              }), /* @__PURE__ */jsxRuntimeExports.jsx(Box$2, {
                children: props.component.content.higher_bound_hint
              })]
            }), /* @__PURE__ */jsxRuntimeExports.jsx(Box$2, {
              className: styles$2.choicesContainer,
              children: columns.map(function (option) {
                var isSelected = state == option;
                return /* @__PURE__ */jsxRuntimeExports.jsx(Box$2, {
                  className: styles$2.choice,
                  onClick: function onClick() {
                    return handleChange(option);
                  },
                  sx: {
                    color: isSelected ? "background.paper" : theme.textStyles.text.color,
                    backgroundColor: isSelected ? "primary.main" : "background.paper"
                  },
                  children: option
                }, option);
              })
            })]
          });
        }
        var container = "_container_bvkr6_2";
        var styles$1 = {
          container: container
        };
        function PhotoCapture(props) {
          var _component$content;
          var component = props.component;
          var state = useSelector(function (state2) {
            return state2.runState.values[component.qualifiedCode];
          });
          console.log(props.component);
          var dispatch = useDispatch();
          var onImageClick = function onImageClick() {
            var code = component.qualifiedCode;
            if (window["Android"]) {
              window["Android"].capturePhoto(code);
              window["onPhotoCatpured" + code] = function (value) {
                dispatch(valueChange({
                  componentCode: code,
                  value: value
                }));
              };
            } else {
              console.log("no android device!!");
            }
          };
          return /* @__PURE__ */jsxRuntimeExports.jsxs(Box$1, {
            className: styles$1.container,
            children: [!state.value || !state.value.stored_filename ? /* @__PURE__ */jsxRuntimeExports.jsx("img", {
              onClick: onImageClick,
              src: "/camera.png",
              style: {
                maxHeight: "200px"
              }
            }) : /* @__PURE__ */jsxRuntimeExports.jsx("img", {
              onClick: onImageClick,
              src: previewUrl(state.value.stored_filename),
              style: {
                maxHeight: "400px"
              }
            }), /* @__PURE__ */jsxRuntimeExports.jsx("br", {}), component.showHint && /* @__PURE__ */jsxRuntimeExports.jsx("span", {
              children: (_component$content = component.content) === null || _component$content === void 0 ? void 0 : _component$content.hint
            })]
          });
        }
        function Question(props) {
          console.log("rendering: " + props.component.code);
          var theme = useTheme();
          var state = useSelector(function (state2) {
            var questionState = state2.runState.values[props.component.qualifiedCode];
            var show_errors = state2.runState.values.Survey.show_errors;
            var isDirty = state2.templateState[props.component.qualifiedCode];
            var validity = questionState === null || questionState === void 0 ? void 0 : questionState.validity;
            var invalid = (show_errors || isDirty) && validity === false;
            return {
              showQuestion: typeof (questionState === null || questionState === void 0 ? void 0 : questionState.relevance) === "undefined" || (questionState === null || questionState === void 0 ? void 0 : questionState.relevance),
              invalid: invalid,
              showValidation: invalid
            };
          }, shallowEqual);
          var showDescription = props.component.content.description && stripTags(props.component.content.description).length > 0;
          var showTitle = props.component.content.label && stripTags(props.component.content.label).length > 0;
          var showHeader = showTitle || showDescription;
          var showQuestion = function showQuestion() {
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
              case "email":
                return /* @__PURE__ */jsxRuntimeExports.jsx(EmailQuestion, {
                  component: props.component
                }, props.component.qualifiedCode);
              case "image_scq":
                return /* @__PURE__ */jsxRuntimeExports.jsx(ImageScq, {
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
            className: "".concat(styles$8.groupQuestion),
            children: [showHeader && /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
              className: styles$8.header,
              children: [showTitle && /* @__PURE__ */jsxRuntimeExports.jsx(Box$2, {
                style: {
                  fontFamily: theme.textStyles.question.font,
                  color: theme.textStyles.text.color,
                  fontSize: theme.textStyles.question.size
                },
                children: /* @__PURE__ */jsxRuntimeExports.jsx(Content, {
                  className: "".concat(styles$8.content, " ").concat(styles$8.question),
                  name: "label",
                  lang: props.lang,
                  elementCode: props.component.qualifiedCode,
                  content: props.component.content.label
                })
              }), showDescription && /* @__PURE__ */jsxRuntimeExports.jsx(Box$2, {
                className: styles$8.textDescription,
                children: /* @__PURE__ */jsxRuntimeExports.jsx(Content, {
                  elementCode: props.component.code,
                  name: "description",
                  lang: props.lang,
                  content: props.component.content.description
                })
              })]
            }), showQuestion(), !state.showValidation ? "" : /* @__PURE__ */jsxRuntimeExports.jsx(Validation, {
              component: props.component
            })]
          }) : "";
        }
        var textHeader = "_textHeader_vleqj_1";
        var textDescription = "_textDescription_vleqj_5";
        var titleRow = "_titleRow_vleqj_9";
        var groupHeader = "_groupHeader_vleqj_19";
        var styles = {
          textHeader: textHeader,
          textDescription: textDescription,
          titleRow: titleRow,
          groupHeader: groupHeader
        };
        function Group(props) {
          var theme = useTheme();
          var state = useSelector(function (state2) {
            var groupState = state2.runState.values[props.group.code];
            return {
              showGroup: typeof (groupState === null || groupState === void 0 ? void 0 : groupState.relevance) === "undefined" || groupState.relevance
            };
          }, shallowEqual);
          var showGroup = function showGroup() {
            var _props$group$content, _props$group$content2;
            return /* @__PURE__ */jsxRuntimeExports.jsxs(React.Fragment, {
              children: [/* @__PURE__ */jsxRuntimeExports.jsxs(Box$2, {
                sx: {
                  borderColor: "grey.500",
                  boxShadow: 1,
                  backgroundColor: "background.paper"
                },
                className: "card-custom",
                children: [/* @__PURE__ */jsxRuntimeExports.jsx(Box$2, {
                  sx: {
                    backgroundColor: "primary.main",
                    height: "8px"
                  },
                  className: styles.groupHeader
                }), /* @__PURE__ */jsxRuntimeExports.jsxs(Box$2, {
                  sx: {
                    backgroundColor: "background.paper"
                  },
                  className: styles.titleRow,
                  children: [/* @__PURE__ */jsxRuntimeExports.jsx("div", {
                    className: styles.textHeader,
                    style: {
                      fontFamily: theme.textStyles.group.font,
                      color: theme.textStyles.group.color,
                      fontSize: theme.textStyles.group.size
                    },
                    children: /* @__PURE__ */jsxRuntimeExports.jsx(Content, {
                      elementCode: props.group.code,
                      name: "label",
                      lang: props.lang,
                      content: (_props$group$content = props.group.content) === null || _props$group$content === void 0 ? void 0 : _props$group$content.label
                    })
                  }), /* @__PURE__ */jsxRuntimeExports.jsx(Box$2, {
                    className: styles.textDescription,
                    children: /* @__PURE__ */jsxRuntimeExports.jsx(Content, {
                      elementCode: props.group.code,
                      name: "description",
                      lang: props.lang,
                      content: (_props$group$content2 = props.group.content) === null || _props$group$content2 === void 0 ? void 0 : _props$group$content2.description
                    })
                  })]
                })]
              }), props.group && props.group.questions ? props.group.questions.filter(function (quest) {
                return quest.inCurrentNavigation;
              }).map(function (quest) {
                return /* @__PURE__ */jsxRuntimeExports.jsx(Question, {
                  component: quest,
                  lang: props.lang
                }, quest.code);
              }) : ""]
            });
          };
          return state.showGroup && (props.group ? showGroup() : "");
        }
        function Survey(_ref4) {
          var _survey$resources;
          var navigationIndex = _ref4.navigationIndex,
            survey = _ref4.survey,
            lang = _ref4.lang;
          var theme = useTheme();
          return /* @__PURE__ */jsxRuntimeExports.jsx("form", {
            id: FORM_ID,
            className: styles$f.surveyPage,
            style: {
              fontFamily: theme.textStyles.text.font,
              color: theme.textStyles.text.color,
              fontSize: theme.textStyles.text.size
            },
            children: /* @__PURE__ */jsxRuntimeExports.jsx("div", {
              className: styles$f.surveyContent,
              children: /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                className: styles$f.surveyGroups,
                children: [(_survey$resources = survey.resources) !== null && _survey$resources !== void 0 && _survey$resources.headerImage ? /* @__PURE__ */jsxRuntimeExports.jsx(CardMedia, {
                  className: styles$f.cardImage,
                  component: "img",
                  image: buildResourceUrl(survey.resources.headerImage)
                }) : null, survey && survey.groups ? survey.groups.filter(function (group) {
                  return group.inCurrentNavigation;
                }).map(function (group) {
                  return /* @__PURE__ */jsxRuntimeExports.jsx(Group, {
                    group: group,
                    lang: lang.code
                  }, group.code);
                }) : "", /* @__PURE__ */jsxRuntimeExports.jsx(Navigation, {
                  navigationIndex: navigationIndex
                })]
              })
            })
          });
        }
        function ChangeLang(props) {
          useSelector(function (state2) {
            return {
              navigate: state2.runState.navigate,
              lang: state2.runState.lang
            };
          }, shallowEqual);
          var dispatch = useDispatch();
          var _useTranslation5 = useTranslation("run"),
            t = _useTranslation5.t;
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
              onChange: function onChange(event) {
                dispatch(langChange({
                  lang: event.target.value
                }));
              },
              children: [/* @__PURE__ */jsxRuntimeExports.jsx(MenuItem, {
                value: props.lang.code,
                children: props.lang.langName
              }), props.additionalLang ? props.additionalLang.map(function (lang, index) {
                return /* @__PURE__ */jsxRuntimeExports.jsx(MenuItem, {
                  value: lang.code,
                  children: lang.langName
                }, index);
              }) : ""]
            })]
          });
        }
        function RunSurvey(_ref5) {
          var _data$survey, _data$survey2, _data$survey3, _data$survey3$content;
          var preview = _ref5.preview;
          var location = useLocation();
          var searchParams = new URLSearchParams(location.search);
          var responseId = searchParams.get("response_id");
          var lang = searchParams.get("lang");
          var _React$useState = React.useState(COLLAPSE),
            _React$useState2 = _slicedToArray(_React$useState, 2),
            expanded = _React$useState2[0],
            setExpanded = _React$useState2[1];
          var _React$useState3 = React.useState(false),
            _React$useState4 = _slicedToArray(_React$useState3, 2),
            render = _React$useState4[0],
            setRender = _React$useState4[1];
          var _React$useState5 = React.useState(false),
            _React$useState6 = _slicedToArray(_React$useState5, 2),
            surveyError = _React$useState6[0],
            setSurveyError = _React$useState6[1];
          window["handleBack"] = function () {
            var result = expanded === EXPAND;
            setExpanded(COLLAPSE);
            return result;
          };
          var data = useSelector(function (state) {
            return state.runState.data;
          }, shallowEqual);
          var navigation = useSelector(function (state) {
            return state.runState.navigation;
          }, shallowEqual);
          var _reactExports$useStat19 = reactExports.useState(null),
            _reactExports$useStat20 = _slicedToArray(_reactExports$useStat19, 2),
            error = _reactExports$useStat20[0],
            setError = _reactExports$useStat20[1];
          var _useTranslation6 = useTranslation("run"),
            t = _useTranslation6.t,
            i18n = _useTranslation6.i18n;
          var dispatch = useDispatch();
          reactExports.useEffect(function () {
            if (navigation) {
              setExpanded(COLLAPSE_IMMEDIATE);
              setError(null);
              continueNav(navigation, data.responseId);
            }
          }, [navigation]);
          reactExports.useEffect(function () {
            if (rtlLanguage.includes(i18n.language)) {
              document.dir = "rtl";
            } else {
              document.dir = "ltr";
            }
          }, [i18n.language]);
          var handleError = function handleError(error2) {
            var procesed = processError(error2);
            if ([PROCESSED_ERRORS.SURVEY_DESIGN_ERROR, PROCESSED_ERRORS.SURVEY_NOT_ACTIVE, PROCESSED_ERRORS.SURVEY_CLOSED, PROCESSED_ERRORS.SURVEY_EXPIRED, PROCESSED_ERRORS.SURVEY_SCHEDULED].indexOf(procesed) > -1) {
              setSurveyError(procesed);
            } else {
              setError({
                errorType: "startup",
                message: error2.message
              });
            }
            dispatch(setFetching(false));
          };
          var startNav = function startNav() {
            startNavigation(lang, preview).then(function (response) {
              setRender(true);
              dispatch(stateReceived(response));
              sessionStorage.setItem("responseId", response.responseId);
              i18n.changeLanguage(response.lang.code);
              dispatch(setFetching(false));
            }).catch(function (err) {
              handleError(err);
            });
          };
          var continueNav = function continueNav(payload, responseId2) {
            continueNavigation(payload, responseId2, preview).then(function (response) {
              dispatch(stateReceived(response));
              i18n.changeLanguage(response.lang.code);
            }).catch(function (err) {
              setError({
                errorType: "click",
                message: err.message
              });
            });
          };
          reactExports.useEffect(function () {
            document.body.style.overflow = "scroll";
            dispatch(setFetching(true));
            setError(null);
            loadScript(preview).then(function () {
              if (responseId) {
                continueNav({
                  navigationDirection: {
                    name: "RESUME"
                  }
                }, responseId);
              } else {
                startNav();
              }
            }).catch(function (err) {
              handleError(err);
            });
          }, []);
          var theme = React.useCallback(createTheme(_objectSpread(_objectSpread({}, defualtTheme(data === null || data === void 0 ? void 0 : (_data$survey = data.survey) === null || _data$survey === void 0 ? void 0 : _data$survey.theme)), {}, {
            direction: rtlLanguage.includes(i18n.language) ? "rtl" : "ltr"
          })), [i18n.language, data === null || data === void 0 ? void 0 : (_data$survey2 = data.survey) === null || _data$survey2 === void 0 ? void 0 : _data$survey2.theme]);
          var cacheRtl = createCache({
            key: rtlLanguage.includes(i18n.language) ? "muirtl" : "muiltr",
            stylisPlugins: rtlLanguage.includes(i18n.language) ? [prefixer, stylisRTLPlugin] : null
          });
          var toggleDrawer = function toggleDrawer(open) {
            return function (event) {
              if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
                return;
              }
              setExpanded(open ? EXPAND : COLLAPSE);
            };
          };
          var navigate = useNavigate();
          return /* @__PURE__ */jsxRuntimeExports.jsx(CacheProvider, {
            value: cacheRtl,
            children: /* @__PURE__ */jsxRuntimeExports.jsx(ThemeProvider, {
              theme: theme,
              children: /* @__PURE__ */jsxRuntimeExports.jsxs(Layout, {
                onClick: toggleDrawer(false),
                onKeyDown: toggleDrawer(false),
                children: [render && /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                  className: styles$i.mainContainer,
                  children: [/* @__PURE__ */jsxRuntimeExports.jsx(AppBar$1, {
                    position: "fixed",
                    children: /* @__PURE__ */jsxRuntimeExports.jsxs(Toolbar, {
                      children: [/* @__PURE__ */jsxRuntimeExports.jsx(IconButton, {
                        size: "large",
                        edge: "start",
                        color: "inherit",
                        "aria-label": "menu",
                        sx: {
                          mr: 2
                        },
                        onClick: function onClick() {
                          return navigate(-1);
                        },
                        children: /* @__PURE__ */jsxRuntimeExports.jsx(default_1$3, {})
                      }), /* @__PURE__ */jsxRuntimeExports.jsx(IconButton, {
                        size: "large",
                        edge: "start",
                        color: "inherit",
                        "aria-label": "menu",
                        sx: {
                          mr: 2
                        },
                        onClick: toggleDrawer(true),
                        children: /* @__PURE__ */jsxRuntimeExports.jsx(default_1$2, {})
                      }), /* @__PURE__ */jsxRuntimeExports.jsx(Typography, {
                        variant: "h5",
                        component: "div",
                        sx: {
                          flexGrow: 1
                        },
                        children: data === null || data === void 0 ? void 0 : (_data$survey3 = data.survey) === null || _data$survey3 === void 0 ? void 0 : (_data$survey3$content = _data$survey3.content) === null || _data$survey3$content === void 0 ? void 0 : _data$survey3$content.label
                      })]
                    })
                  }), /* @__PURE__ */jsxRuntimeExports.jsx(Toolbar, {}), /* @__PURE__ */jsxRuntimeExports.jsx(SurveyMemo, {
                    survey: data === null || data === void 0 ? void 0 : data.survey,
                    navigationIndex: data === null || data === void 0 ? void 0 : data.navigationIndex,
                    lang: data === null || data === void 0 ? void 0 : data.lang,
                    additionalLang: data === null || data === void 0 ? void 0 : data.additionalLang,
                    error: error
                  }, "Survey"), /* @__PURE__ */jsxRuntimeExports.jsx(Drawer$1, {
                    anchor: "left",
                    transitionDuration: expanded !== COLLAPSE_IMMEDIATE ? 500 : 0,
                    open: expanded == EXPAND,
                    onClose: toggleDrawer(false),
                    children: /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                      className: styles$i.drawer,
                      children: [/* @__PURE__ */jsxRuntimeExports.jsx(ChangeLang, {
                        lang: data === null || data === void 0 ? void 0 : data.lang,
                        additionalLang: data === null || data === void 0 ? void 0 : data.additionalLang
                      }), /* @__PURE__ */jsxRuntimeExports.jsx(SurveyIndexMemo, {
                        className: styles$i.surveyIndex,
                        navigationIndex: data === null || data === void 0 ? void 0 : data.navigationIndex,
                        survey: data === null || data === void 0 ? void 0 : data.survey
                      })]
                    })
                  })]
                }), error ? /* @__PURE__ */jsxRuntimeExports.jsx(ErrorMessage, {
                  error: error,
                  variant: "toast"
                }) : null, surveyError && /* @__PURE__ */jsxRuntimeExports.jsx(Box$2, {
                  className: styles$i.surveyDesignError,
                  children: /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                    children: t("processed_errors.".concat(surveyError))
                  })
                })]
              })
            })
          });
        }
        var SurveyMemo = React.memo(Survey);
        var SurveyIndexMemo = React.memo(SurveyIndex);
        var COLLAPSE_IMMEDIATE = "COLLAPSE_IMMEDIATE";
        var COLLAPSE = "COLLAPSE";
        var EXPAND = "EXPAND";
      }
    };
  });
})();
