;
(function () {
  System.register(['./index-legacy-7ea9dd30.js', './index-legacy-011b54a6.js', './common-legacy-4bc1ef15.js', './ArrowBack-legacy-44a0a74f.js', './useDispatch-legacy-7bde5599.js', './Card-legacy-165faae3.js', './common-legacy-4815f98b.js', './InputLabel-legacy-17368547.js', './FormControlLabel-legacy-bfc668f7.js', './TextField-legacy-6c19fbee.js', './Checkbox-legacy-7b706655.js', './TableRow-legacy-e7898fd3.js', './Link-legacy-34b46676.js', './index-legacy-72166459.js', './DatePicker-legacy-c0586043.js', './Toolbar-legacy-6c6f2a9a.js', './FormGroup-legacy-090122b5.js', './KeyboardArrowRight-legacy-5ab575a4.js', './InputAdornment-legacy-d731ef96.js'], function (exports, module) {
    'use strict';

    var __vite_style__ = document.createElement('style');
    __vite_style__.textContent = "._mainContainer_1sjy5_1 {\n  margin: auto;\n}\n\n._drawer_1sjy5_5 {\n  padding: 16px;\n}\n\n._surveyDesignError_1sjy5_9 {\n  position: absolute;\n  text-align: center;\n  font-size: 32px;\n  padding: 16px;\n  top: 33%;\n  right: 20%;\n  left: 20%;\n  color: red;\n  margin: 16px;\n  border: 2px dashed gray;\n  border-radius: 4px;\n}._errorContent_sv3yb_1 {\n  max-width: 500px;\n  margin: auto;\n}\n._groupCard_1t5ma_1 {\n  padding: 8px;\n  margin: 8px;\n}\n\n._groupTitle_1t5ma_6 {\n  font-weight: bolder;\n}\n\n._questionTitle_1t5ma_10 {\n  display: flex;\n  padding: 8px;\n  margin: 8px;\n}\n\n._validationIcon_1t5ma_16 {\n  margin-left: 8px;\n  margin-right: 8px;\n  color: green;\n  font-size: 1.2rem;\n}\n\n._bullet_1t5ma_23 {\n  margin-right: 8px;\n  margin-left: 8px;\n  font-size: 1.2rem;\n}\n._surveyContent_aitfd_1 {\n  margin: 10px 30px;\n}\n\n._surveyGroups_aitfd_5 {\n  margin: auto;\n  max-width: 800px;\n  min-width: 300px;\n}\n\n._cardImage_aitfd_11 {\n  max-height: 22.5vw;\n  height: 160px;\n  margin: 12px auto;\n  background-size: cover;\n  background-position: center;\n  border: 1px solid;\n  border-radius: 8px;\n}\n._wrapper_1hpga_1 {\n  display: flex;\n  align-items: center;\n  width: 100%;\n  margin-top: 10px;\n  margin-bottom: 0;\n  line-height: 16px;\n  letter-spacing: 0.3px;\n}\n\n._icon_1hpga_11 {\n  margin-right: 12px;\n  transform: rotate(180deg);\n}\n._questionItem_1sx0f_1 {\n  margin-bottom: 15px;\n  width: 50%;\n}\n\n._questionItem_1sx0f_1:last-child {\n  margin-bottom: 0;\n}\n\n@media only screen and (max-width: 767px) {\n  ._questionItem_1sx0f_1 {\n    width: 100%;\n  }\n}\n._questionItem_169qj_1 {\n  margin-bottom: 15px;\n  width: 50%;\n}\n\n._questionItem_169qj_1:last-child {\n  margin-bottom: 0;\n}\n\n@media (max-width: 767px) {\n  ._questionItem_169qj_1 {\n    width: 100%;\n  }\n}\n._questionItem_7ep8w_1 {\n  margin-bottom: 15px;\n  width: 50%;\n}\n\n._questionItem_7ep8w_1:last-child {\n  margin-bottom: 0;\n}\n\n@media screen and (max-width: 767px) {\n  ._questionItem_7ep8w_1 {\n    width: 100%;\n  }\n}\n._questionItem_pxk6e_1 {\n  margin-bottom: 15px;\n}\n\n._questionItem_pxk6e_1:last-child {\n  margin-bottom: 0;\n}\n\n@media screen and (max-width: 767px) {\n  ._questionItem_pxk6e_1 {\n    width: 100%;\n  }\n}\n\n._paragraph_pxk6e_15 {\n  width: 100%;\n}\n\n._wordCount_pxk6e_19 {\n  text-align: end;\n}\n/*!\n * Quill Editor v1.3.7\n * https://quilljs.com/\n * Copyright (c) 2014, Jason Chen\n * Copyright (c) 2013, salesforce.com\n */\n.ql-container {\n  box-sizing: border-box;\n  font-family: Helvetica, Arial, sans-serif;\n  font-size: 13px;\n  height: 100%;\n  margin: 0px;\n  position: relative;\n}\n.ql-container.ql-disabled .ql-tooltip {\n  visibility: hidden;\n}\n.ql-container.ql-disabled .ql-editor ul[data-checked] > li::before {\n  pointer-events: none;\n}\n.ql-clipboard {\n  left: -100000px;\n  height: 1px;\n  overflow-y: hidden;\n  position: absolute;\n  top: 50%;\n}\n.ql-clipboard p {\n  margin: 0;\n  padding: 0;\n}\n.ql-editor {\n  box-sizing: border-box;\n  line-height: 1.42;\n  height: 100%;\n  outline: none;\n  overflow-y: auto;\n  padding: 12px 15px;\n  tab-size: 4;\n  -moz-tab-size: 4;\n  text-align: left;\n  white-space: pre-wrap;\n  word-wrap: break-word;\n}\n.ql-editor > * {\n  cursor: text;\n}\n.ql-editor p,\n.ql-editor ol,\n.ql-editor ul,\n.ql-editor pre,\n.ql-editor blockquote,\n.ql-editor h1,\n.ql-editor h2,\n.ql-editor h3,\n.ql-editor h4,\n.ql-editor h5,\n.ql-editor h6 {\n  margin: 0;\n  padding: 0;\n  counter-reset: list-1 list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;\n}\n.ql-editor ol,\n.ql-editor ul {\n  padding-left: 1.5em;\n}\n.ql-editor ol > li,\n.ql-editor ul > li {\n  list-style-type: none;\n}\n.ql-editor ul > li::before {\n  content: '\\2022';\n}\n.ql-editor ul[data-checked=true],\n.ql-editor ul[data-checked=false] {\n  pointer-events: none;\n}\n.ql-editor ul[data-checked=true] > li *,\n.ql-editor ul[data-checked=false] > li * {\n  pointer-events: all;\n}\n.ql-editor ul[data-checked=true] > li::before,\n.ql-editor ul[data-checked=false] > li::before {\n  color: #777;\n  cursor: pointer;\n  pointer-events: all;\n}\n.ql-editor ul[data-checked=true] > li::before {\n  content: '\\2611';\n}\n.ql-editor ul[data-checked=false] > li::before {\n  content: '\\2610';\n}\n.ql-editor li::before {\n  display: inline-block;\n  white-space: nowrap;\n  width: 1.2em;\n}\n.ql-editor li:not(.ql-direction-rtl)::before {\n  margin-left: -1.5em;\n  margin-right: 0.3em;\n  text-align: right;\n}\n.ql-editor li.ql-direction-rtl::before {\n  margin-left: 0.3em;\n  margin-right: -1.5em;\n}\n.ql-editor ol li:not(.ql-direction-rtl),\n.ql-editor ul li:not(.ql-direction-rtl) {\n  padding-left: 1.5em;\n}\n.ql-editor ol li.ql-direction-rtl,\n.ql-editor ul li.ql-direction-rtl {\n  padding-right: 1.5em;\n}\n.ql-editor ol li {\n  counter-reset: list-1 list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;\n  counter-increment: list-0;\n}\n.ql-editor ol li:before {\n  content: counter(list-0, decimal) '. ';\n}\n.ql-editor ol li.ql-indent-1 {\n  counter-increment: list-1;\n}\n.ql-editor ol li.ql-indent-1:before {\n  content: counter(list-1, lower-alpha) '. ';\n}\n.ql-editor ol li.ql-indent-1 {\n  counter-reset: list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;\n}\n.ql-editor ol li.ql-indent-2 {\n  counter-increment: list-2;\n}\n.ql-editor ol li.ql-indent-2:before {\n  content: counter(list-2, lower-roman) '. ';\n}\n.ql-editor ol li.ql-indent-2 {\n  counter-reset: list-3 list-4 list-5 list-6 list-7 list-8 list-9;\n}\n.ql-editor ol li.ql-indent-3 {\n  counter-increment: list-3;\n}\n.ql-editor ol li.ql-indent-3:before {\n  content: counter(list-3, decimal) '. ';\n}\n.ql-editor ol li.ql-indent-3 {\n  counter-reset: list-4 list-5 list-6 list-7 list-8 list-9;\n}\n.ql-editor ol li.ql-indent-4 {\n  counter-increment: list-4;\n}\n.ql-editor ol li.ql-indent-4:before {\n  content: counter(list-4, lower-alpha) '. ';\n}\n.ql-editor ol li.ql-indent-4 {\n  counter-reset: list-5 list-6 list-7 list-8 list-9;\n}\n.ql-editor ol li.ql-indent-5 {\n  counter-increment: list-5;\n}\n.ql-editor ol li.ql-indent-5:before {\n  content: counter(list-5, lower-roman) '. ';\n}\n.ql-editor ol li.ql-indent-5 {\n  counter-reset: list-6 list-7 list-8 list-9;\n}\n.ql-editor ol li.ql-indent-6 {\n  counter-increment: list-6;\n}\n.ql-editor ol li.ql-indent-6:before {\n  content: counter(list-6, decimal) '. ';\n}\n.ql-editor ol li.ql-indent-6 {\n  counter-reset: list-7 list-8 list-9;\n}\n.ql-editor ol li.ql-indent-7 {\n  counter-increment: list-7;\n}\n.ql-editor ol li.ql-indent-7:before {\n  content: counter(list-7, lower-alpha) '. ';\n}\n.ql-editor ol li.ql-indent-7 {\n  counter-reset: list-8 list-9;\n}\n.ql-editor ol li.ql-indent-8 {\n  counter-increment: list-8;\n}\n.ql-editor ol li.ql-indent-8:before {\n  content: counter(list-8, lower-roman) '. ';\n}\n.ql-editor ol li.ql-indent-8 {\n  counter-reset: list-9;\n}\n.ql-editor ol li.ql-indent-9 {\n  counter-increment: list-9;\n}\n.ql-editor ol li.ql-indent-9:before {\n  content: counter(list-9, decimal) '. ';\n}\n.ql-editor .ql-indent-1:not(.ql-direction-rtl) {\n  padding-left: 3em;\n}\n.ql-editor li.ql-indent-1:not(.ql-direction-rtl) {\n  padding-left: 4.5em;\n}\n.ql-editor .ql-indent-1.ql-direction-rtl.ql-align-right {\n  padding-right: 3em;\n}\n.ql-editor li.ql-indent-1.ql-direction-rtl.ql-align-right {\n  padding-right: 4.5em;\n}\n.ql-editor .ql-indent-2:not(.ql-direction-rtl) {\n  padding-left: 6em;\n}\n.ql-editor li.ql-indent-2:not(.ql-direction-rtl) {\n  padding-left: 7.5em;\n}\n.ql-editor .ql-indent-2.ql-direction-rtl.ql-align-right {\n  padding-right: 6em;\n}\n.ql-editor li.ql-indent-2.ql-direction-rtl.ql-align-right {\n  padding-right: 7.5em;\n}\n.ql-editor .ql-indent-3:not(.ql-direction-rtl) {\n  padding-left: 9em;\n}\n.ql-editor li.ql-indent-3:not(.ql-direction-rtl) {\n  padding-left: 10.5em;\n}\n.ql-editor .ql-indent-3.ql-direction-rtl.ql-align-right {\n  padding-right: 9em;\n}\n.ql-editor li.ql-indent-3.ql-direction-rtl.ql-align-right {\n  padding-right: 10.5em;\n}\n.ql-editor .ql-indent-4:not(.ql-direction-rtl) {\n  padding-left: 12em;\n}\n.ql-editor li.ql-indent-4:not(.ql-direction-rtl) {\n  padding-left: 13.5em;\n}\n.ql-editor .ql-indent-4.ql-direction-rtl.ql-align-right {\n  padding-right: 12em;\n}\n.ql-editor li.ql-indent-4.ql-direction-rtl.ql-align-right {\n  padding-right: 13.5em;\n}\n.ql-editor .ql-indent-5:not(.ql-direction-rtl) {\n  padding-left: 15em;\n}\n.ql-editor li.ql-indent-5:not(.ql-direction-rtl) {\n  padding-left: 16.5em;\n}\n.ql-editor .ql-indent-5.ql-direction-rtl.ql-align-right {\n  padding-right: 15em;\n}\n.ql-editor li.ql-indent-5.ql-direction-rtl.ql-align-right {\n  padding-right: 16.5em;\n}\n.ql-editor .ql-indent-6:not(.ql-direction-rtl) {\n  padding-left: 18em;\n}\n.ql-editor li.ql-indent-6:not(.ql-direction-rtl) {\n  padding-left: 19.5em;\n}\n.ql-editor .ql-indent-6.ql-direction-rtl.ql-align-right {\n  padding-right: 18em;\n}\n.ql-editor li.ql-indent-6.ql-direction-rtl.ql-align-right {\n  padding-right: 19.5em;\n}\n.ql-editor .ql-indent-7:not(.ql-direction-rtl) {\n  padding-left: 21em;\n}\n.ql-editor li.ql-indent-7:not(.ql-direction-rtl) {\n  padding-left: 22.5em;\n}\n.ql-editor .ql-indent-7.ql-direction-rtl.ql-align-right {\n  padding-right: 21em;\n}\n.ql-editor li.ql-indent-7.ql-direction-rtl.ql-align-right {\n  padding-right: 22.5em;\n}\n.ql-editor .ql-indent-8:not(.ql-direction-rtl) {\n  padding-left: 24em;\n}\n.ql-editor li.ql-indent-8:not(.ql-direction-rtl) {\n  padding-left: 25.5em;\n}\n.ql-editor .ql-indent-8.ql-direction-rtl.ql-align-right {\n  padding-right: 24em;\n}\n.ql-editor li.ql-indent-8.ql-direction-rtl.ql-align-right {\n  padding-right: 25.5em;\n}\n.ql-editor .ql-indent-9:not(.ql-direction-rtl) {\n  padding-left: 27em;\n}\n.ql-editor li.ql-indent-9:not(.ql-direction-rtl) {\n  padding-left: 28.5em;\n}\n.ql-editor .ql-indent-9.ql-direction-rtl.ql-align-right {\n  padding-right: 27em;\n}\n.ql-editor li.ql-indent-9.ql-direction-rtl.ql-align-right {\n  padding-right: 28.5em;\n}\n.ql-editor .ql-video {\n  display: block;\n  max-width: 100%;\n}\n.ql-editor .ql-video.ql-align-center {\n  margin: 0 auto;\n}\n.ql-editor .ql-video.ql-align-right {\n  margin: 0 0 0 auto;\n}\n.ql-editor .ql-bg-black {\n  background-color: #000;\n}\n.ql-editor .ql-bg-red {\n  background-color: #e60000;\n}\n.ql-editor .ql-bg-orange {\n  background-color: #f90;\n}\n.ql-editor .ql-bg-yellow {\n  background-color: #ff0;\n}\n.ql-editor .ql-bg-green {\n  background-color: #008a00;\n}\n.ql-editor .ql-bg-blue {\n  background-color: #06c;\n}\n.ql-editor .ql-bg-purple {\n  background-color: #93f;\n}\n.ql-editor .ql-color-white {\n  color: #fff;\n}\n.ql-editor .ql-color-red {\n  color: #e60000;\n}\n.ql-editor .ql-color-orange {\n  color: #f90;\n}\n.ql-editor .ql-color-yellow {\n  color: #ff0;\n}\n.ql-editor .ql-color-green {\n  color: #008a00;\n}\n.ql-editor .ql-color-blue {\n  color: #06c;\n}\n.ql-editor .ql-color-purple {\n  color: #93f;\n}\n.ql-editor .ql-font-serif {\n  font-family: Georgia, Times New Roman, serif;\n}\n.ql-editor .ql-font-monospace {\n  font-family: Monaco, Courier New, monospace;\n}\n.ql-editor .ql-size-small {\n  font-size: 0.75em;\n}\n.ql-editor .ql-size-large {\n  font-size: 1.5em;\n}\n.ql-editor .ql-size-huge {\n  font-size: 2.5em;\n}\n.ql-editor .ql-direction-rtl {\n  direction: rtl;\n  text-align: inherit;\n}\n.ql-editor .ql-align-center {\n  text-align: center;\n}\n.ql-editor .ql-align-justify {\n  text-align: justify;\n}\n.ql-editor .ql-align-right {\n  text-align: right;\n}\n.ql-editor.ql-blank::before {\n  color: rgba(0,0,0,0.6);\n  content: attr(data-placeholder);\n  font-style: italic;\n  left: 15px;\n  pointer-events: none;\n  position: absolute;\n  right: 15px;\n}\n.rtl {\n  direction: rtl !important;\n  text-align: right !important;\n}\n\n.no-padding {\n  padding: 0 !important;\n}\n\n.no-padding > :last-child {\n  margin-bottom: 0;\n}\n\n.no-padding > :first-child {\n  margin-top: 0;\n}\n._wrapper_2goe7_1 {\n  width: 50%;\n}\n\n@media only screen and (max-width: 768px) {\n  ._wrapper_2goe7_1 {\n    width: 100%;\n  }\n}\n._content_vh4hz_1 {\n  width: 100%;\n  margin: 0;\n  letter-spacing: 0.1px;\n  word-break: break-word;\n}\n\n._content_vh4hz_1._question_vh4hz_8 {\n  margin-bottom: 4px;\n}\n\n._content_vh4hz_1 ._required_vh4hz_12 {\n  margin-left: 5px;\n}\n\n._header_vh4hz_16 {\n  margin-bottom: 12px;\n}\n\n._textDescription_vh4hz_20 {\n  max-width: 100%;\n  margin-bottom: 4px;\n}\n\n._groupQuestion_vh4hz_25 {\n  margin-bottom: 12px;\n  padding: 24px;\n  border-style: solid;\n  border-width: 1px;\n  border-radius: 8px;\n  word-wrap: break-word;\n  page-break-inside: avoid;\n  transition: all 200ms cubic-bezier(0, 0, 0.2, 1);\n}\n._imageContainer_mdpfi_1 {\n  background-size: contain;\n  background-position: center;\n  background-repeat: no-repeat;\n}\n\n._imageGrid_mdpfi_7 {\n  margin-top: 16px;\n}\n\n._selection_mdpfi_11 {\n  border-radius: 0 !important;\n  background-color: #ffffffcc !important;\n}\n._imageGrid_1uvun_1 {\n  margin-top: 16px;\n}\n\n._imageContainer_1uvun_5 {\n  background-size: contain;\n  background-position: center;\n  background-repeat: no-repeat;\n}\n\n._selection_1uvun_11 {\n  border-radius: 0 !important;\n  background-color: #ffffffcc !important;\n}\n._dragContainer_spv9x_1 {\n  border: 1px solid transparent;\n  border-radius: 4px;\n  height: 100%;\n  margin: auto 8px;\n}\n\n._rankingItem_spv9x_8 {\n  margin: 8px;\n  padding: 8px;\n}\n._signatureCanvas_1bkvb_1 {\n  background-color: white;\n  border: 1px solid transparent;\n  border-radius: 4px;\n  width: 100%;\n  margin: auto;\n  text-align: center;\n}\n\n._container_1bkvb_10 {\n  padding: 8px;\n}\n\n._buttonContainer_1bkvb_14 {\n  text-align: end;\n}._imageGrid_gkz8d_1 {\n  margin-top: 16px;\n}\n\n._imageContainer_gkz8d_5 {\n  background-size: contain;\n  background-position: center;\n  background-repeat: no-repeat;\n}\n\n._rankContainer_gkz8d_11 {\n  display: table;\n  text-align: center;\n  vertical-align: middle;\n  border: 1px solid transparent;\n  background-color: rgba(255, 255, 255, 0.7);\n}\n\n._rankValue_gkz8d_19 {\n  color: white;\n  display: table-cell;\n  vertical-align: middle;\n}\n._choicesContainer_iaaeb_1 {\n  display: flex;\n  width: 100%;\n  table-layout: fixed;\n  margin-bottom: 16px;\n  justify-content: space-between;\n}\n\n._choice_iaaeb_1 {\n  padding: 8px;\n  width: 100%;\n  margin: 1px;\n  font-weight: bold;\n  font-size: larger;\n  border: 1px solid;\n  text-align: center;\n}\n\n._choiceLabels_iaaeb_19 {\n  margin-top: 16px;\n  display: flex;\n  justify-content: space-between;\n}\n\n._container_bvkr6_2 {\n  text-align: center;\n}\n._container_bvkr6_2 {\n  text-align: center;\n}\n._container_bvkr6_2 {\n  text-align: center;\n}._textHeader_vleqj_1 {\n  max-width: 100%;\n}\n\n._textDescription_vleqj_5 {\n  max-width: 100%;\n  margin-top: 8px;\n}\n._titleRow_vleqj_9 {\n  display: block;\n  justify-content: space-between;\n  align-items: center;\n  box-align: center;\n  margin: 24px;\n  flex-wrap: wrap;\n  box-pack: justify;\n}\n\n._groupHeader_vleqj_19 {\n  border: 1px solid transparent;\n  border-top-right-radius: 8px;\n  border-top-left-radius: 8px;\n}\n";
    document.head.appendChild(__vite_style__);
    var generateUtilityClass, generateUtilityClasses, styled, capitalize, _extends, reactExports, useThemeProps, _objectWithoutPropertiesLoose, jsxRuntimeExports, clsx, composeClasses, useForkRef, debounce, ownerWindow, rootShouldForwardProp, requireCreateSvgIcon, interopRequireDefaultExports, useTheme$1, useSelector, stripTags, jump, navigatePrevious, navigateNext, valueChange, setDirty, React, fileTypesToMimesArray, previewUrl, uploadFile, useTheme$2, DragDropContext, ConnectedDroppable, PublicDraggable, orderChange, getAugmentedNamespace, commonjsGlobal, getDefaultExportFromCjs, downloadFileAsBase64, uploadDataUrl, langChange, useLocation, continueNavigation, stateReceived, setFetching, loadScript, createTheme, defualtTheme, createCache, prefixer, stylisRTLPlugin, useNavigate, CacheProvider, processError, PROCESSED_ERRORS, startNavigation, ErrorOutlineOutlined, RadioGroup, Radio, DateTimePicker, TimePicker, propTypesExports, ReactPlayer, CardMedia, ThemeProvider, Layout, createBox, Paper, useTheme, Transition, reflow, getTransitionProps, Modal, useTranslation, rtlLanguage, Snackbar, Alert, Button, Box$2, TextareaAutosize, Select, MenuItem, IconButton, Typography, default_1$3, useDispatch, Card, buildResourceUrl, FormControl, InputLabel, FormControlLabel, TextField, Checkbox, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Link, dayjs, AdapterDayjs, LocalizationProvider, DatePicker, Grid, Toolbar;
    return {
      setters: [module => {
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
        fileTypesToMimesArray = module.a7;
        previewUrl = module.B;
        uploadFile = module.a8;
        useTheme$2 = module.a9;
        DragDropContext = module.aa;
        ConnectedDroppable = module.ab;
        PublicDraggable = module.ac;
        orderChange = module.ad;
        getAugmentedNamespace = module.ae;
        commonjsGlobal = module.z;
        getDefaultExportFromCjs = module.A;
        downloadFileAsBase64 = module.af;
        uploadDataUrl = module.ag;
        langChange = module.ah;
        useLocation = module.D;
        continueNavigation = module.ai;
        stateReceived = module.aj;
        setFetching = module.ak;
        loadScript = module.al;
        createTheme = module.am;
        defualtTheme = module.an;
        createCache = module.ao;
        prefixer = module.ap;
        stylisRTLPlugin = module.aq;
        useNavigate = module.u;
        CacheProvider = module.ar;
        processError = module.p;
        PROCESSED_ERRORS = module.P;
        startNavigation = module.as;
      }, module => {
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
      }, module => {
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
      }, module => {
        default_1$3 = module.d;
      }, module => {
        useDispatch = module.u;
      }, module => {
        Card = module.C;
      }, module => {
        buildResourceUrl = module.b;
      }, module => {
        FormControl = module.F;
        InputLabel = module.I;
      }, module => {
        FormControlLabel = module.F;
      }, module => {
        TextField = module.T;
      }, module => {
        Checkbox = module.C;
      }, module => {
        TableContainer = module.T;
        Table = module.a;
        TableHead = module.b;
        TableRow = module.c;
        TableCell = module.d;
        TableBody = module.e;
      }, module => {
        Link = module.L;
      }, module => {
        dayjs = module.d;
        AdapterDayjs = module.A;
      }, module => {
        LocalizationProvider = module.L;
        DatePicker = module.D;
        Grid = module.G;
      }, module => {
        Toolbar = module.T;
      }, null, null, null],
      execute: function () {
        exports('default', RunSurvey);
        const Box = createBox();
        const Box$1 = Box;
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
        function getAppBarUtilityClass(slot) {
          return generateUtilityClass('MuiAppBar', slot);
        }
        generateUtilityClasses('MuiAppBar', ['root', 'positionFixed', 'positionAbsolute', 'positionSticky', 'positionStatic', 'positionRelative', 'colorDefault', 'colorPrimary', 'colorSecondary', 'colorInherit', 'colorTransparent']);
        const _excluded$2 = ["className", "color", "enableColorOnDark", "position"];
        const useUtilityClasses$1 = ownerState => {
          const {
            color,
            position,
            classes
          } = ownerState;
          const slots = {
            root: ['root', `color${capitalize(color)}`, `position${capitalize(position)}`]
          };
          return composeClasses(slots, getAppBarUtilityClass, classes);
        };

        // var2 is the fallback.
        // Ex. var1: 'var(--a)', var2: 'var(--b)'; return: 'var(--a, var(--b))'
        const joinVars = (var1, var2) => var1 ? `${var1 == null ? void 0 : var1.replace(')', '')}, ${var2})` : var2;
        const AppBarRoot = styled(Paper, {
          name: 'MuiAppBar',
          slot: 'Root',
          overridesResolver: (props, styles) => {
            const {
              ownerState
            } = props;
            return [styles.root, styles[`position${capitalize(ownerState.position)}`], styles[`color${capitalize(ownerState.color)}`]];
          }
        })(({
          theme,
          ownerState
        }) => {
          const backgroundColorDefault = theme.palette.mode === 'light' ? theme.palette.grey[100] : theme.palette.grey[900];
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
        const AppBar = /*#__PURE__*/reactExports.forwardRef(function AppBar(inProps, ref) {
          const props = useThemeProps({
            props: inProps,
            name: 'MuiAppBar'
          });
          const {
              className,
              color = 'primary',
              enableColorOnDark = false,
              position = 'fixed'
            } = props,
            other = _objectWithoutPropertiesLoose(props, _excluded$2);
          const ownerState = _extends({}, props, {
            color,
            position,
            enableColorOnDark
          });
          const classes = useUtilityClasses$1(ownerState);
          return /*#__PURE__*/jsxRuntimeExports.jsx(AppBarRoot, _extends({
            square: true,
            component: "header",
            ownerState: ownerState,
            elevation: 4,
            className: clsx(classes.root, className, position === 'fixed' && 'mui-fixed'),
            ref: ref
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
            transform = computedStyle.getPropertyValue('-webkit-transform') || computedStyle.getPropertyValue('transform');
          }
          let offsetX = 0;
          let offsetY = 0;
          if (transform && transform !== 'none' && typeof transform === 'string') {
            const transformValues = transform.split('(')[1].split(')')[0].split(',');
            offsetX = parseInt(transformValues[4], 10);
            offsetY = parseInt(transformValues[5], 10);
          }
          if (direction === 'left') {
            if (containerRect) {
              return `translateX(${containerRect.right + offsetX - rect.left}px)`;
            }
            return `translateX(${containerWindow.innerWidth + offsetX - rect.left}px)`;
          }
          if (direction === 'right') {
            if (containerRect) {
              return `translateX(-${rect.right - containerRect.left - offsetX}px)`;
            }
            return `translateX(-${rect.left + rect.width - offsetX}px)`;
          }
          if (direction === 'up') {
            if (containerRect) {
              return `translateY(${containerRect.bottom + offsetY - rect.top}px)`;
            }
            return `translateY(${containerWindow.innerHeight + offsetY - rect.top}px)`;
          }

          // direction === 'down'
          if (containerRect) {
            return `translateY(-${rect.top - containerRect.top + rect.height - offsetY}px)`;
          }
          return `translateY(-${rect.top + rect.height - offsetY}px)`;
        }
        function resolveContainer(containerPropProp) {
          return typeof containerPropProp === 'function' ? containerPropProp() : containerPropProp;
        }
        function setTranslateValue(direction, node, containerProp) {
          const resolvedContainer = resolveContainer(containerProp);
          const transform = getTranslateValue(direction, node, resolvedContainer);
          if (transform) {
            node.style.webkitTransform = transform;
            node.style.transform = transform;
          }
        }

        /**
         * The Slide transition is used by the [Drawer](/material-ui/react-drawer/) component.
         * It uses [react-transition-group](https://github.com/reactjs/react-transition-group) internally.
         */
        const Slide = /*#__PURE__*/reactExports.forwardRef(function Slide(props, ref) {
          const theme = useTheme();
          const defaultEasing = {
            enter: theme.transitions.easing.easeOut,
            exit: theme.transitions.easing.sharp
          };
          const defaultTimeout = {
            enter: theme.transitions.duration.enteringScreen,
            exit: theme.transitions.duration.leavingScreen
          };
          const {
              addEndListener,
              appear = true,
              children,
              container: containerProp,
              direction = 'down',
              easing: easingProp = defaultEasing,
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
              TransitionComponent = Transition
            } = props,
            other = _objectWithoutPropertiesLoose(props, _excluded$1);
          const childrenRef = reactExports.useRef(null);
          const handleRef = useForkRef(children.ref, childrenRef, ref);
          const normalizedTransitionCallback = callback => isAppearing => {
            if (callback) {
              // onEnterXxx and onExitXxx callbacks have a different arguments.length value.
              if (isAppearing === undefined) {
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
          const handleEntered = normalizedTransitionCallback(onEntered);
          const handleExiting = normalizedTransitionCallback(onExiting);
          const handleExit = normalizedTransitionCallback(node => {
            const transitionProps = getTransitionProps({
              timeout,
              style,
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
          const handleExited = normalizedTransitionCallback(node => {
            // No need for transitions when the component is hidden
            node.style.webkitTransition = '';
            node.style.transition = '';
            if (onExited) {
              onExited(node);
            }
          });
          const handleAddEndListener = next => {
            if (addEndListener) {
              // Old call signature before `react-transition-group` implemented `nodeRef`
              addEndListener(childrenRef.current, next);
            }
          };
          const updatePosition = reactExports.useCallback(() => {
            if (childrenRef.current) {
              setTranslateValue(direction, childrenRef.current, containerProp);
            }
          }, [direction, containerProp]);
          reactExports.useEffect(() => {
            // Skip configuration where the position is screen size invariant.
            if (inProp || direction === 'down' || direction === 'right') {
              return undefined;
            }
            const handleResize = debounce(() => {
              if (childrenRef.current) {
                setTranslateValue(direction, childrenRef.current, containerProp);
              }
            });
            const containerWindow = ownerWindow(childrenRef.current);
            containerWindow.addEventListener('resize', handleResize);
            return () => {
              handleResize.clear();
              containerWindow.removeEventListener('resize', handleResize);
            };
          }, [direction, inProp, containerProp]);
          reactExports.useEffect(() => {
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
            children: (state, childProps) => {
              return /*#__PURE__*/reactExports.cloneElement(children, _extends({
                ref: handleRef,
                style: _extends({
                  visibility: state === 'exited' && !inProp ? 'hidden' : undefined
                }, style, children.props.style)
              }, childProps));
            }
          }));
        });
        const Slide$1 = Slide;
        function getDrawerUtilityClass(slot) {
          return generateUtilityClass('MuiDrawer', slot);
        }
        generateUtilityClasses('MuiDrawer', ['root', 'docked', 'paper', 'paperAnchorLeft', 'paperAnchorRight', 'paperAnchorTop', 'paperAnchorBottom', 'paperAnchorDockedLeft', 'paperAnchorDockedRight', 'paperAnchorDockedTop', 'paperAnchorDockedBottom', 'modal']);
        const _excluded = ["BackdropProps"],
          _excluded2 = ["anchor", "BackdropProps", "children", "className", "elevation", "hideBackdrop", "ModalProps", "onClose", "open", "PaperProps", "SlideProps", "TransitionComponent", "transitionDuration", "variant"];
        const overridesResolver = (props, styles) => {
          const {
            ownerState
          } = props;
          return [styles.root, (ownerState.variant === 'permanent' || ownerState.variant === 'persistent') && styles.docked, styles.modal];
        };
        const useUtilityClasses = ownerState => {
          const {
            classes,
            anchor,
            variant
          } = ownerState;
          const slots = {
            root: ['root'],
            docked: [(variant === 'permanent' || variant === 'persistent') && 'docked'],
            modal: ['modal'],
            paper: ['paper', `paperAnchor${capitalize(anchor)}`, variant !== 'temporary' && `paperAnchorDocked${capitalize(anchor)}`]
          };
          return composeClasses(slots, getDrawerUtilityClass, classes);
        };
        const DrawerRoot = styled(Modal, {
          name: 'MuiDrawer',
          slot: 'Root',
          overridesResolver
        })(({
          theme
        }) => ({
          zIndex: (theme.vars || theme).zIndex.drawer
        }));
        const DrawerDockedRoot = styled('div', {
          shouldForwardProp: rootShouldForwardProp,
          name: 'MuiDrawer',
          slot: 'Docked',
          skipVariantsResolver: false,
          overridesResolver
        })({
          flex: '0 0 auto'
        });
        const DrawerPaper = styled(Paper, {
          name: 'MuiDrawer',
          slot: 'Paper',
          overridesResolver: (props, styles) => {
            const {
              ownerState
            } = props;
            return [styles.paper, styles[`paperAnchor${capitalize(ownerState.anchor)}`], ownerState.variant !== 'temporary' && styles[`paperAnchorDocked${capitalize(ownerState.anchor)}`]];
          }
        })(({
          theme,
          ownerState
        }) => _extends({
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
          borderRight: `1px solid ${(theme.vars || theme).palette.divider}`
        }, ownerState.anchor === 'top' && ownerState.variant !== 'temporary' && {
          borderBottom: `1px solid ${(theme.vars || theme).palette.divider}`
        }, ownerState.anchor === 'right' && ownerState.variant !== 'temporary' && {
          borderLeft: `1px solid ${(theme.vars || theme).palette.divider}`
        }, ownerState.anchor === 'bottom' && ownerState.variant !== 'temporary' && {
          borderTop: `1px solid ${(theme.vars || theme).palette.divider}`
        }));
        const oppositeDirection = {
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
        const Drawer = /*#__PURE__*/reactExports.forwardRef(function Drawer(inProps, ref) {
          const props = useThemeProps({
            props: inProps,
            name: 'MuiDrawer'
          });
          const theme = useTheme();
          const defaultTransitionDuration = {
            enter: theme.transitions.duration.enteringScreen,
            exit: theme.transitions.duration.leavingScreen
          };
          const {
              anchor: anchorProp = 'left',
              BackdropProps,
              children,
              className,
              elevation = 16,
              hideBackdrop = false,
              ModalProps: {
                BackdropProps: BackdropPropsProp
              } = {},
              onClose,
              open = false,
              PaperProps = {},
              SlideProps,
              // eslint-disable-next-line react/prop-types
              TransitionComponent = Slide$1,
              transitionDuration = defaultTransitionDuration,
              variant = 'temporary'
            } = props,
            ModalProps = _objectWithoutPropertiesLoose(props.ModalProps, _excluded),
            other = _objectWithoutPropertiesLoose(props, _excluded2);

          // Let's assume that the Drawer will always be rendered on user space.
          // We use this state is order to skip the appear transition during the
          // initial mount of the component.
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
          const drawer = /*#__PURE__*/jsxRuntimeExports.jsx(DrawerPaper, _extends({
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
          const slidingDrawer = /*#__PURE__*/jsxRuntimeExports.jsx(TransitionComponent, _extends({
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
              transitionDuration
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
        const Drawer$1 = Drawer;
        const mainContainer = "_mainContainer_1sjy5_1";
        const drawer = "_drawer_1sjy5_5";
        const surveyDesignError = "_surveyDesignError_1sjy5_9";
        const styles$k = {
          mainContainer: mainContainer,
          drawer: drawer,
          surveyDesignError: surveyDesignError
        };
        const errorContent = "_errorContent_sv3yb_1";
        const styles$j = {
          errorContent: errorContent
        };
        function ErrorMessage(props) {
          const [open, setOpen] = reactExports.useState(true);
          const [dir, setDir] = reactExports.useState("ltr");
          const handleClose = () => {
            setOpen(false);
          };
          const {
            i18n
          } = useTranslation("run");
          reactExports.useEffect(() => {
            if (rtlLanguage.includes(i18n.language)) {
              setDir("rtl");
            } else {
              setDir("ltr");
            }
          }, [i18n.language]);
          if (props.variant === "toast") {
            return /* @__PURE__ */jsxRuntimeExports.jsx(Snackbar, {
              open,
              autoHideDuration: 6e3,
              onClose: handleClose,
              children: /* @__PURE__ */jsxRuntimeExports.jsx(Alert, {
                variant: "standard",
                severity: props.severity || "error",
                onClose: handleClose,
                dir,
                children: props.error.message
              })
            });
          } else {
            return /* @__PURE__ */jsxRuntimeExports.jsx("div", {
              className: `error-page ${props.className || ""}`,
              children: /* @__PURE__ */jsxRuntimeExports.jsx("div", {
                className: styles$j.errorContent,
                children: /* @__PURE__ */jsxRuntimeExports.jsx(Alert, {
                  onClose: handleClose,
                  severity: props.severity || "error",
                  variant: "standard",
                  dir,
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
        const groupCard = "_groupCard_1t5ma_1";
        const groupTitle = "_groupTitle_1t5ma_6";
        const questionTitle = "_questionTitle_1t5ma_10";
        const validationIcon = "_validationIcon_1t5ma_16";
        const bullet = "_bullet_1t5ma_23";
        const styles$i = {
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
            return state.runState.navProps.allowJump;
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
              dispatch(jump({
                ...props.navigationIndex,
                groupId: groupCode
              }));
            }
          };
          const onQuestionClicked = questionCode => {
            if (isQuestionClickable(questionCode)) {
              dispatch(jump({
                ...props.navigationIndex,
                questionId: questionCode
              }));
            }
          };
          return /* @__PURE__ */jsxRuntimeExports.jsx("div", {
            className: styles$i.surveyContent,
            children: props.survey && props.survey.groups ? props.survey.groups.filter(group => relevance_map[group.code] && group.groupType != "END").map(group => {
              return /* @__PURE__ */jsxRuntimeExports.jsxs(Card, {
                onClick: () => onGroupClicked(group.code),
                className: styles$i.groupCard,
                style: {
                  backgroundColor: isCurrentGroup(group.code) ? "beige" : theme.palette.background.paper,
                  cursor: isGroupClickable(group.code) ? "pointer" : "default"
                },
                children: [/* @__PURE__ */jsxRuntimeExports.jsxs(Box$1, {
                  className: styles$i.groupTitle,
                  children: [stripTags(group.content.label), " "]
                }), group.questions.filter(question => relevance_map[question.code]).map(question => {
                  return /* @__PURE__ */jsxRuntimeExports.jsxs(Box$1, {
                    onClick: () => onQuestionClicked(question.code),
                    className: styles$i.questionTitle,
                    style: {
                      backgroundColor: isCurrentQuestion(question.code) ? "beige" : "inherit",
                      cursor: isGroupClickable(group.code) ? "inherit" : isQuestionClickable(group.code) ? "pointer" : "default"
                    },
                    children: [validity_map[question.code] ? /* @__PURE__ */jsxRuntimeExports.jsx(default_1$1, {
                      className: styles$i.validationIcon
                    }) : /* @__PURE__ */jsxRuntimeExports.jsx(default_1, {
                      className: styles$i.bullet
                    }), stripTags(question.content.label)]
                  }, question.code);
                })]
              }, group.code);
            }) : ""
          });
        }
        function Navigation(props) {
          const state = useSelector(state2 => {
            return {
              has_previous: state2.runState.values.Survey.has_previous && state2.runState.navProps.allowPrevious,
              has_next: state2.runState.values.Survey.has_next,
              can_save: state2.runState.navProps.allowIncomplete
            };
          }, shallowEqual);
          const dispatch = useDispatch();
          const {
            t,
            i18n
          } = useTranslation("run");
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
        const surveyContent = "_surveyContent_aitfd_1";
        const surveyGroups = "_surveyGroups_aitfd_5";
        const cardImage = "_cardImage_aitfd_11";
        const styles$h = {
          surveyContent: surveyContent,
          surveyGroups: surveyGroups,
          cardImage: cardImage
        };
        const FORM_ID = "frankie-form";
        const wrapper$1 = "_wrapper_1hpga_1";
        const icon = "_icon_1hpga_11";
        const styles$g = {
          wrapper: wrapper$1,
          icon: icon
        };
        function ValidationItem(props) {
          const {
            t
          } = useTranslation(["run"]);
          function messages() {
            let validationMessage = "";
            if (props.validation.content && props.validation.isCustomErrorActive) {
              validationMessage = props.validation.content;
            } else {
              var translationKey = props.name.replace(/[0-9]/g, "");
              validationMessage = t(translationKey, {
                ...props.validation
              });
            }
            if (validationMessage) {
              return /* @__PURE__ */jsxRuntimeExports.jsxs(Box$2, {
                sx: {
                  color: "error.main"
                },
                className: styles$g.wrapper,
                children: [/* @__PURE__ */jsxRuntimeExports.jsx(ErrorOutlineOutlined, {}), validationMessage]
              });
            } else {
              return "";
            }
          }
          return messages();
        }
        function Validation(props) {
          const validation = useSelector(state => {
            if (!props.component.validation) {
              return {};
            } else {
              var validation2 = {};
              Object.keys(props.component.validation).forEach(key => {
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
              let array = Object.keys(props.component.validation).filter(key => validation[key]);
              let limit = props.limit ? props.limit : array.length;
              return array.slice(0, limit).map((key, index) => {
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
          const state = useSelector(state2 => {
            let questionState = state2.runState.values[props.component.qualifiedCode];
            return {
              value: (questionState === null || questionState === void 0 ? void 0 : questionState.value) || ""
            };
          }, shallowEqual);
          const dispatch = useDispatch();
          const handleChange = event => {
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
              children: props.component.answers.map(option => {
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
          const theme = useTheme();
          const showChoice = () => {
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
          const theme = useTheme();
          const nestedTextChild = props.Choice.answers[0];
          const state = useSelector(state2 => {
            let choiceState = state2.runState.values[props.Choice.qualifiedCode];
            let childState = state2.runState.values[nestedTextChild.qualifiedCode];
            let show_errors = state2.runState.values.Survey.show_errors;
            let isChildDirty = state2.templateState[nestedTextChild.qualifiedCode];
            return {
              showChoice: typeof (choiceState === null || choiceState === void 0 ? void 0 : choiceState.relevance) === "undefined" || choiceState.relevance,
              childInvalid: (show_errors || isChildDirty) && (childState === null || childState === void 0 ? void 0 : childState.relevance) === true && (childState === null || childState === void 0 ? void 0 : childState.validity) === false,
              value: (childState === null || childState === void 0 ? void 0 : childState.value) || ""
            };
          }, shallowEqual);
          const dispatch = useDispatch();
          const handleChange = event => {
            dispatch(valueChange({
              componentCode: event.target.name,
              value: event.target.value
            }));
          };
          const handleFocus = event => {
            dispatch(valueChange({
              componentCode: props.parentCode,
              value: props.Choice.code
            }));
          };
          const lostFocus = event => {
            dispatch(setDirty(event.target.name));
          };
          const textInput = reactExports.useRef();
          const onButtonClick = event => {
            if (event.target.checked) {
              textInput.current.focus();
            }
          };
          const showChoice = () => {
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
        const questionItem$3 = "_questionItem_1sx0f_1";
        const styles$f = {
          questionItem: questionItem$3
        };
        function TextQuestion(props) {
          var _props$component$vali, _props$component$vali2;
          const theme = useTheme();
          const state = useSelector(state2 => {
            let questionState = state2.runState.values[props.component.qualifiedCode];
            let show_errors = state2.runState.values.Survey.show_errors;
            let isDirty = state2.templateState[props.component.qualifiedCode];
            let validity = questionState === null || questionState === void 0 ? void 0 : questionState.validity;
            let invalid = (show_errors || isDirty) && validity === false;
            return {
              value: (questionState === null || questionState === void 0 ? void 0 : questionState.value) || "",
              invalid
            };
          }, shallowEqual);
          const dispatch = useDispatch();
          const handleChange = event => {
            dispatch(valueChange({
              componentCode: event.target.name,
              value: event.target.value
            }));
          };
          const lostFocus = event => {
            dispatch(setDirty(event.target.name));
          };
          return /* @__PURE__ */jsxRuntimeExports.jsx("div", {
            className: styles$f.questionItem,
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
        const questionItem$2 = "_questionItem_169qj_1";
        const styles$e = {
          questionItem: questionItem$2
        };
        function EmailQuestion(props) {
          var _props$component$vali3, _props$component$vali4;
          const theme = useTheme();
          const state = useSelector(state2 => {
            let questionState = state2.runState.values[props.component.qualifiedCode];
            let show_errors = state2.runState.values.Survey.show_errors;
            let isDirty = state2.templateState[props.component.qualifiedCode];
            let validity = questionState === null || questionState === void 0 ? void 0 : questionState.validity;
            let invalid = (show_errors || isDirty) && validity === false;
            return {
              value: (questionState === null || questionState === void 0 ? void 0 : questionState.value) || "",
              invalid
            };
          }, shallowEqual);
          const dispatch = useDispatch();
          const handleChange = event => {
            dispatch(valueChange({
              componentCode: event.target.name,
              value: event.target.value
            }));
          };
          const lostFocus = event => {
            dispatch(setDirty(event.target.name));
          };
          return /* @__PURE__ */jsxRuntimeExports.jsx("div", {
            className: styles$e.questionItem,
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
        const questionItem$1 = "_questionItem_7ep8w_1";
        const styles$d = {
          questionItem: questionItem$1
        };
        function NumberQuestion(props) {
          var _props$component$vali5, _props$component$vali6;
          const theme = useTheme();
          const state = useSelector(state2 => {
            let questionState = state2.runState.values[props.component.qualifiedCode];
            let show_errors = state2.runState.values.Survey.show_errors;
            let isDirty = state2.templateState[props.component.qualifiedCode];
            let validity = questionState === null || questionState === void 0 ? void 0 : questionState.validity;
            let invalid = (show_errors || isDirty) && validity === false;
            return {
              value: (questionState === null || questionState === void 0 ? void 0 : questionState.value) === void 0 ? "" : questionState === null || questionState === void 0 ? void 0 : questionState.value,
              invalid
            };
          }, shallowEqual);
          const dispatch = useDispatch();
          const handleChange = event => {
            const regex = props.component.allowDecimal ? /^[0-9]*[.]*[0-9]*$/ : /^[0-9]*$/;
            if (event.target.value === "" || regex.test(event.target.value)) {
              let output = +event.target.value;
              const moreZeroesRegex = /^[0][.][0]+$/;
              dispatch(valueChange({
                componentCode: event.target.name,
                value: event.target.value === "" || isNaN(output) || event.target.value.endsWith(".") || moreZeroesRegex.test(event.target.value) ? event.target.value : output
              }));
            }
          };
          const lostFocus = event => {
            dispatch(setDirty(event.target.name));
          };
          return /* @__PURE__ */jsxRuntimeExports.jsx("div", {
            className: styles$d.questionItem,
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
              children: props.component.answers.map(option => {
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
          const theme = useTheme();
          const state = useSelector(state2 => {
            var _props$Answer;
            let answerState = state2.runState.values[(_props$Answer = props.Answer) === null || _props$Answer === void 0 ? void 0 : _props$Answer.qualifiedCode];
            return {
              showAnswer: typeof (answerState === null || answerState === void 0 ? void 0 : answerState.relevance) == "undefined" || answerState.relevance,
              checked: (answerState === null || answerState === void 0 ? void 0 : answerState.value) || false
            };
          }, shallowEqual);
          const dispatch = useDispatch();
          const handleChange = event => {
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
          const theme = useTheme();
          const nestedTextChild = props.Answer.answers[0];
          const state = useSelector(state2 => {
            var _state2$textChild;
            let own = state2.runState.values[props.Answer.qualifiedCode];
            let textChild = state2.runState.values[nestedTextChild.qualifiedCode];
            let show_errors = state2.runState.values.Survey.show_errors;
            let isChildDirty = state2.templateState[nestedTextChild.qualifiedCode];
            return {
              showAnswer: typeof (own === null || own === void 0 ? void 0 : own.relevance) === "undefined" || own.relevance,
              childInvalid: (show_errors || isChildDirty) && (textChild === null || textChild === void 0 ? void 0 : textChild.relevance) === true && (textChild === null || textChild === void 0 ? void 0 : textChild.validity) === false,
              checked: (own === null || own === void 0 ? void 0 : own.value) || false,
              textValue: (textChild === null || textChild === void 0 ? void 0 : textChild.value) || "",
              textRelevance: (_state2$textChild = state2.textChild) === null || _state2$textChild === void 0 ? void 0 : _state2$textChild.relevance
            };
          }, shallowEqual);
          const dispatch = useDispatch();
          const onButtonClick = event => {
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
          const handleChange = event => {
            dispatch(valueChange({
              componentCode: event.target.name,
              value: event.target.value
            }));
          };
          const textInput = reactExports.useRef();
          const handleFocus = event => {
            dispatch(valueChange({
              componentCode: props.Answer.qualifiedCode,
              value: true
            }));
          };
          const lostFocus = event => {
            dispatch(setDirty(event.target.name));
          };
          const showAnswer = () => {
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
          const theme = useTheme$1();
          let columns = props.component.answers.filter(answer => answer.type == "column");
          let rows = props.component.answers.filter(answer => answer.type == "row");
          return /* @__PURE__ */jsxRuntimeExports.jsx(TableContainer, {
            children: /* @__PURE__ */jsxRuntimeExports.jsxs(Table, {
              children: [/* @__PURE__ */jsxRuntimeExports.jsx(TableHead, {
                children: /* @__PURE__ */jsxRuntimeExports.jsxs(TableRow, {
                  children: [/* @__PURE__ */jsxRuntimeExports.jsx(TableCell, {}, "content"), columns.map(option => {
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
                children: rows.map(answer => {
                  return /* @__PURE__ */jsxRuntimeExports.jsx(React.Fragment, {
                    children: /* @__PURE__ */jsxRuntimeExports.jsx(SCQArrayRow, {
                      answer,
                      choices: columns
                    }, answer.qualifiedCode)
                  }, answer.qualifiedCode);
                })
              })]
            })
          });
        }
        function SCQArrayRow(props) {
          const theme = useTheme$1();
          const state = useSelector(state2 => {
            var _state2$runState$valu, _state2$runState$valu2, _state2$runState$valu3;
            return {
              show_errors: state2.runState.values.Survey.show_errors,
              validity: (_state2$runState$valu = state2.runState.values[props.answer.qualifiedCode]) === null || _state2$runState$valu === void 0 ? void 0 : _state2$runState$valu.validity,
              value: (_state2$runState$valu2 = state2.runState.values[props.answer.qualifiedCode]) === null || _state2$runState$valu2 === void 0 ? void 0 : _state2$runState$valu2.value,
              relevance: (_state2$runState$valu3 = state2.runState.values[props.answer.qualifiedCode]) === null || _state2$runState$valu3 === void 0 ? void 0 : _state2$runState$valu3.relevance
            };
          }, shallowEqual);
          const dispatch = useDispatch();
          const handleChange = event => {
            dispatch(valueChange({
              componentCode: event.target.name,
              value: event.target.value
            }));
          };
          const invalid = (state.show_errors || state.isDirty) && state.validity === false;
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
              }), props.choices.map(option => {
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
        const Input = styled("input")({
          display: "none"
        });
        function FileUpload(props) {
          var _props$component$vali7, _props$component$vali8, _props$component$vali9, _props$component$vali10;
          const theme = useTheme();
          let accepted = fileTypesToMimesArray((_props$component$vali7 = props.component.validation) === null || _props$component$vali7 === void 0 ? void 0 : (_props$component$vali8 = _props$component$vali7.validation_file_types) === null || _props$component$vali8 === void 0 ? void 0 : _props$component$vali8.fileTypes);
          let maxFileSize = (_props$component$vali9 = props.component.validation) === null || _props$component$vali9 === void 0 ? void 0 : (_props$component$vali10 = _props$component$vali9.validation_max_file_size) === null || _props$component$vali10 === void 0 ? void 0 : _props$component$vali10.max_size;
          const state = useSelector(state2 => {
            let questionState = state2.runState.values[props.component.qualifiedCode];
            return questionState === null || questionState === void 0 ? void 0 : questionState.value;
          });
          const dispatch = useDispatch();
          const [selectedFile, setSelectedFile] = reactExports.useState();
          const invalidSelectedFile = selectedFile && accepted && !accepted.includes(selectedFile.type);
          const invalidSize = selectedFile && maxFileSize && selectedFile.size / 1024 > maxFileSize;
          const changeHandler = event => {
            dispatch(setDirty(props.component.qualifiedCode));
            setSelectedFile(event.target.files[0]);
          };
          const uploadSelectedFile = () => {
            uploadFile(props.component.qualifiedCode, selectedFile).then(response => {
              resetSelectedFile();
              dispatch(valueChange({
                componentCode: props.component.qualifiedCode,
                value: response
              }));
            }).catch(err => {
              console.error(err);
            });
          };
          const resetSelectedFile = () => {
            setSelectedFile(void 0);
          };
          const onButtonClick = event => {
            if (window["Android"]) {
              const code = props.component.qualifiedCode;
              event.preventDefault();
              window["Android"].selectFile(code, (accepted === null || accepted === void 0 ? void 0 : accepted.join(",")) || "", maxFileSize || -1);
              window["onFileSelected" + code] = (name, size, type) => {
                dispatch(setDirty(props.component.qualifiedCode));
                setSelectedFile({
                  name,
                  size,
                  type
                });
              };
            }
          };
          let shouldUpload = selectedFile && !invalidSelectedFile && !invalidSize;
          return /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
            children: [/* @__PURE__ */jsxRuntimeExports.jsxs("label", {
              htmlFor: "contained-button-file",
              children: [/* @__PURE__ */jsxRuntimeExports.jsx(Input, {
                id: "contained-button-file",
                type: "file",
                accept: accepted ? accepted.join(",") : void 0,
                onChange: changeHandler
              }), /* @__PURE__ */jsxRuntimeExports.jsx(Button, {
                onClick: onButtonClick,
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
            }), invalidSize && /* @__PURE__ */jsxRuntimeExports.jsxs(React.Fragment, {
              children: [/* @__PURE__ */jsxRuntimeExports.jsx("br", {}), /* @__PURE__ */jsxRuntimeExports.jsx(ValidationItem, {
                name: "validation_max_file_size",
                validation: props.component.validation.validation_max_file_size
              })]
            }), invalidSelectedFile && /* @__PURE__ */jsxRuntimeExports.jsxs(React.Fragment, {
              children: [/* @__PURE__ */jsxRuntimeExports.jsx("br", {}), /* @__PURE__ */jsxRuntimeExports.jsx(ValidationItem, {
                name: "validation_file_types",
                validation: props.component.validation.validation_file_types
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
        const questionItem = "_questionItem_pxk6e_1";
        const paragraph = "_paragraph_pxk6e_15";
        const wordCount = "_wordCount_pxk6e_19";
        const styles$c = {
          questionItem: questionItem,
          paragraph: paragraph,
          wordCount: wordCount
        };
        function ParagraphQuestion(props) {
          var _props$component$vali11, _props$component$vali12;
          const state = useSelector(state2 => {
            let questionState = state2.runState.values[props.component.qualifiedCode];
            let show_errors = state2.runState.values.Survey.show_errors;
            let isDirty = state2.templateState[props.component.qualifiedCode];
            let validity = questionState === null || questionState === void 0 ? void 0 : questionState.validity;
            let invalid = (show_errors || isDirty) && validity === false;
            let value = (questionState === null || questionState === void 0 ? void 0 : questionState.value) || "";
            return {
              value,
              wordCount: window.FrankieScripts ? window.FrankieScripts.wordCount(value) : 0,
              invalid
            };
          }, shallowEqual);
          const dispatch = useDispatch();
          const {
            t
          } = useTranslation("run");
          const handleChange = event => {
            dispatch(valueChange({
              componentCode: event.target.name,
              value: event.target.value
            }));
          };
          const lostFocus = event => {
            dispatch(setDirty(event.target.name));
          };
          return /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
            className: styles$c.questionItem,
            children: [/* @__PURE__ */jsxRuntimeExports.jsx(TextareaAutosize, {
              className: styles$c.paragraph,
              required: (_props$component$vali11 = props.component.validation) !== null && _props$component$vali11 !== void 0 && (_props$component$vali12 = _props$component$vali11.validation_required) !== null && _props$component$vali12 !== void 0 && _props$component$vali12.isActive ? true : false,
              id: props.component.qualifiedCode,
              name: props.component.qualifiedCode,
              minRows: props.component.minRows || 2,
              label: props.component.content.hint || "",
              onChange: handleChange,
              onBlur: lostFocus,
              value: state.value
            }), props.component.showWordCount ? /* @__PURE__ */jsxRuntimeExports.jsx("div", {
              className: styles$c.wordCount,
              children: /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                children: t("word_count", {
                  count: state.wordCount
                })
              })
            }) : ""]
          });
        }
        const quill_core = '';
        const content$1 = '';
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
        const wrapper = "_wrapper_2goe7_1";
        const styles$b = {
          wrapper: wrapper
        };
        function DateTimeQuestion(props) {
          const theme = useTheme$2();
          const state = useSelector(state2 => {
            let own = state2.runState.values[props.component.qualifiedCode];
            let show_errors = state2.runState.values.Survey.show_errors;
            let isDirty = state2.templateState[props.component.qualifiedCode];
            return {
              invalid: (show_errors || isDirty) && (own === null || own === void 0 ? void 0 : own.validity) === false,
              value: own !== null && own !== void 0 && own.value ? dayjs(window.FrankieScripts.sqlDateTimeToDate(own === null || own === void 0 ? void 0 : own.value)) : null
            };
          }, shallowEqual);
          const dispatch = useDispatch();
          const handleDateChange = date => {
            let finalDate = date === null ? void 0 : date.toDate();
            dispatch(valueChange({
              componentCode: props.component.qualifiedCode,
              value: props.component.type == "date_time" ? window.FrankieScripts.toSqlDateTime(finalDate) : props.component.type == "time" ? window.FrankieScripts.toSqlDateTimeIgnoreDate(finalDate) : window.FrankieScripts.toSqlDateTimeIgnoreTime(finalDate)
            }));
          };
          const dateFormat = props.component.dateFormat ? props.component.dateFormat : "DD.MM.YYYY";
          return /* @__PURE__ */jsxRuntimeExports.jsx("div", {
            className: styles$b.wrapper,
            children: /* @__PURE__ */jsxRuntimeExports.jsx(LocalizationProvider, {
              dateAdapter: AdapterDayjs,
              adapterLocale: "ar-sa",
              children: props.component.type == "date_time" ? /* @__PURE__ */jsxRuntimeExports.jsx(DateTimePicker, {
                renderInput: props2 => /* @__PURE__ */jsxRuntimeExports.jsx(TextField, {
                  onKeyDown: e => e.preventDefault(),
                  ...props2
                }),
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
                renderInput: params => /* @__PURE__ */jsxRuntimeExports.jsx(TextField, {
                  onKeyDown: e => e.preventDefault(),
                  ...params
                }),
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
                renderInput: params => /* @__PURE__ */jsxRuntimeExports.jsx(TextField, {
                  onKeyDown: e => e.preventDefault(),
                  ...params
                }),
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
        const content = "_content_vh4hz_1";
        const question = "_question_vh4hz_8";
        const required = "_required_vh4hz_12";
        const header = "_header_vh4hz_16";
        const textDescription$1 = "_textDescription_vh4hz_20";
        const groupQuestion = "_groupQuestion_vh4hz_25";
        const styles$a = {
          content: content,
          question: question,
          required: required,
          header: header,
          textDescription: textDescription$1,
          groupQuestion: groupQuestion
        };
        const imageContainer$2 = "_imageContainer_mdpfi_1";
        const imageGrid$2 = "_imageGrid_mdpfi_7";
        const selection$1 = "_selection_mdpfi_11";
        const styles$9 = {
          imageContainer: imageContainer$2,
          imageGrid: imageGrid$2,
          selection: selection$1
        };
        function ImageScq(props) {
          const theme = useTheme$1();
          const containerRef = reactExports.useRef(null);
          const [width, setWidth] = reactExports.useState(800);
          reactExports.useEffect(() => {
            var _containerRef$current;
            setWidth(containerRef === null || containerRef === void 0 ? void 0 : (_containerRef$current = containerRef.current) === null || _containerRef$current === void 0 ? void 0 : _containerRef$current.offsetWidth);
          }, [containerRef]);
          const imageHeight = (width - props.component.columns * props.component.spacing * 2) / props.component.columns / (props.component.imageAspectRatio || 1);
          const state = useSelector(state2 => {
            let questionState = state2.runState.values[props.component.qualifiedCode];
            let show_errors = state2.runState.values.Survey.show_errors;
            let isDirty = state2.templateState[props.component.qualifiedCode];
            return {
              value: (questionState === null || questionState === void 0 ? void 0 : questionState.value) || "",
              showValidation: (show_errors || isDirty) && (questionState === null || questionState === void 0 ? void 0 : questionState.validity) === false
            };
          }, shallowEqual);
          const dispatch = useDispatch();
          const handleChange = (componentCode, value) => {
            dispatch(valueChange({
              componentCode,
              value
            }));
          };
          reactExports.useEffect(() => {
            const resizeListener = () => {
              var _containerRef$current2;
              setWidth(containerRef === null || containerRef === void 0 ? void 0 : (_containerRef$current2 = containerRef.current) === null || _containerRef$current2 === void 0 ? void 0 : _containerRef$current2.offsetWidth);
            };
            window.addEventListener("resize", resizeListener);
            return () => {
              window.removeEventListener("resize", resizeListener);
            };
          }, []);
          return /* @__PURE__ */jsxRuntimeExports.jsx(Grid, {
            ref: containerRef,
            container: true,
            className: styles$9.imageGrid,
            children: props.component.answers.map(option => {
              var _option$resources, _option$resources2;
              const backgroundImage = (_option$resources = option.resources) !== null && _option$resources !== void 0 && _option$resources.image ? `url('${buildResourceUrl((_option$resources2 = option.resources) === null || _option$resources2 === void 0 ? void 0 : _option$resources2.image)}')` : "0";
              return /* @__PURE__ */jsxRuntimeExports.jsxs(Grid, {
                item: true,
                xs: 12 / props.component.columns,
                children: [/* @__PURE__ */jsxRuntimeExports.jsx(Card, {
                  className: styles$9.imageContainer,
                  onClick: () => handleChange(props.component.qualifiedCode, option.code),
                  style: {
                    backgroundImage,
                    backgroundColor: theme.palette.background.default,
                    margin: props.component.spacing + "px",
                    height: imageHeight + "px",
                    border: state.value === option.code ? `2px solid ${theme.palette.primary.main}` : "2px solid transparent"
                  },
                  children: /* @__PURE__ */jsxRuntimeExports.jsx(Radio, {
                    className: styles$9.selection,
                    checked: state.value === option.code,
                    onChange: event => handleChange(event.target.name, event.target.value),
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
        const imageGrid$1 = "_imageGrid_1uvun_1";
        const imageContainer$1 = "_imageContainer_1uvun_5";
        const selection = "_selection_1uvun_11";
        const styles$8 = {
          imageGrid: imageGrid$1,
          imageContainer: imageContainer$1,
          selection: selection
        };
        function ImageMcq(props) {
          const containerRef = reactExports.useRef(null);
          const [width, setWidth] = reactExports.useState(800);
          reactExports.useEffect(() => {
            var _containerRef$current3;
            setWidth(containerRef === null || containerRef === void 0 ? void 0 : (_containerRef$current3 = containerRef.current) === null || _containerRef$current3 === void 0 ? void 0 : _containerRef$current3.offsetWidth);
          }, [containerRef]);
          const imageHeight = (width - props.component.columns * props.component.spacing * 2) / props.component.columns / (props.component.imageAspectRatio || 1);
          reactExports.useEffect(() => {
            const resizeListener = () => {
              var _containerRef$current4;
              setWidth(containerRef === null || containerRef === void 0 ? void 0 : (_containerRef$current4 = containerRef.current) === null || _containerRef$current4 === void 0 ? void 0 : _containerRef$current4.offsetWidth);
            };
            window.addEventListener("resize", resizeListener);
            return () => {
              window.removeEventListener("resize", resizeListener);
            };
          }, []);
          return /* @__PURE__ */jsxRuntimeExports.jsx(Grid, {
            ref: containerRef,
            container: true,
            className: styles$8.imageGrid,
            children: props.component.answers.map(option => {
              return /* @__PURE__ */jsxRuntimeExports.jsx(ImageMcqItem, {
                option,
                spacing: props.component.spacing,
                columns: props.component.columns,
                hideText: props.component.hideText,
                parentCode: props.component.qualifiedCode,
                imageHeight
              }, option.qualifiedCode);
            })
          });
        }
        function ImageMcqItem(props) {
          var _props$option$resourc, _props$option$resourc2;
          const theme = useTheme$1();
          const state = useSelector(state2 => {
            let answerState = state2.runState.values[props.option.qualifiedCode];
            return {
              showAnswer: typeof (answerState === null || answerState === void 0 ? void 0 : answerState.relevance) == "undefined" || answerState.relevance,
              checked: (answerState === null || answerState === void 0 ? void 0 : answerState.value) || false
            };
          }, shallowEqual);
          const dispatch = useDispatch();
          const handleChange = (componentCode, value) => {
            dispatch(valueChange({
              componentCode,
              value
            }));
            dispatch(setDirty(componentCode));
            dispatch(setDirty(props.parentCode));
          };
          const backgroundImage = (_props$option$resourc = props.option.resources) !== null && _props$option$resourc !== void 0 && _props$option$resourc.image ? `url('${buildResourceUrl((_props$option$resourc2 = props.option.resources) === null || _props$option$resourc2 === void 0 ? void 0 : _props$option$resourc2.image)}')` : "0";
          return /* @__PURE__ */jsxRuntimeExports.jsxs(Grid, {
            item: true,
            xs: 12 / props.columns,
            children: [/* @__PURE__ */jsxRuntimeExports.jsx(Card, {
              className: styles$8.imageContainer,
              onClick: () => handleChange(props.option.qualifiedCode, !state.checked),
              style: {
                backgroundImage,
                backgroundColor: theme.palette.background.default,
                margin: props.spacing + "px",
                height: props.imageHeight + "px",
                border: state.checked ? `2px solid ${theme.palette.primary.main}` : "2px solid transparent"
              },
              children: /* @__PURE__ */jsxRuntimeExports.jsx(Checkbox, {
                className: styles$8.selection,
                onChange: event => handleChange(props.option.qualifiedCode, !state.checked),
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
        const dragContainer = "_dragContainer_spv9x_1";
        const rankingItem = "_rankingItem_spv9x_8";
        const styles$7 = {
          dragContainer: dragContainer,
          rankingItem: rankingItem
        };
        function Ranking(props) {
          const dispatch = useDispatch();
          const state = useSelector(state2 => {
            let valuesMap = {};
            props.component.answers.forEach(element => {
              valuesMap[element.qualifiedCode] = state2.runState.values[element.qualifiedCode].value;
            });
            return valuesMap;
          }, shallowEqual);
          const order = useSelector(state2 => {
            let valuesMap = {};
            props.component.answers.forEach(element => {
              if (state2.runState.order) {
                valuesMap[element.qualifiedCode] = state2.runState.order[element.qualifiedCode];
              } else {
                valuesMap[element.qualifiedCode] = state2.runState.values[element.qualifiedCode].order + 1;
              }
            });
            return valuesMap;
          }, shallowEqual);
          const maxIndex = indexObj => {
            let max = 0;
            let keys = Object.keys(indexObj);
            keys.forEach(key => {
              if (indexObj[key] > max) {
                max = indexObj[key];
              }
            });
            return max;
          };
          const onDoubleclick = (draggableId, droppableIteemId, index) => {
            onDropEvent({
              draggableId,
              source: {
                droppableId: droppableIteemId,
                index
              },
              destination: {
                droppableId: droppableIteemId == "source" ? "answer" : "source",
                index: droppableIteemId == "source" ? maxIndex(state) : maxIndex(order)
              }
            });
          };
          const onDropEvent = event => {
            let unOrderer = {
              ...order
            };
            if (!event.destination) {
              return;
            } else if (event.destination.droppableId == "answer" && event.source.droppableId == "source") {
              props.component.answers.forEach(answer => {
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
              props.component.answers.forEach(answer => {
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
              props.component.answers.forEach(answer => {
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
              props.component.answers.forEach(answer => {
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
              onDragEnd: event => {
                onDropEvent(event);
              },
              children: [/* @__PURE__ */jsxRuntimeExports.jsx(ConnectedDroppable, {
                droppableId: "source",
                type: "ranking" + props.component.qualifiedCode,
                children: provided => /* @__PURE__ */jsxRuntimeExports.jsxs(Box$1, {
                  className: styles$7.dragContainer,
                  sx: {
                    backgroundColor: "background.default"
                  },
                  ref: provided.innerRef,
                  ...provided.droppableProps,
                  children: [props.component.answers.filter(option => !state[option.qualifiedCode]).sort(function (a, b) {
                    return order[a.qualifiedCode] - order[b.qualifiedCode];
                  }).map((option, index) => {
                    return /* @__PURE__ */jsxRuntimeExports.jsx(PublicDraggable, {
                      draggableId: option.qualifiedCode,
                      index,
                      children: provided2 => /* @__PURE__ */jsxRuntimeExports.jsx(Box$1, {
                        onDoubleClick: () => onDoubleclick(option.qualifiedCode, "source", index),
                        className: styles$7.rankingItem,
                        sx: {
                          backgroundColor: "background.paper"
                        },
                        ref: provided2.innerRef,
                        ...provided2.draggableProps,
                        ...provided2.dragHandleProps,
                        children: option.content.label
                      })
                    }, option.qualifiedCode);
                  }), provided.placeholder]
                })
              }), /* @__PURE__ */jsxRuntimeExports.jsx(ConnectedDroppable, {
                droppableId: "answer",
                type: "ranking" + props.component.qualifiedCode,
                children: provided => /* @__PURE__ */jsxRuntimeExports.jsxs(Box$1, {
                  ref: provided.innerRef,
                  ...provided.droppableProps,
                  className: styles$7.dragContainer,
                  sx: {
                    backgroundColor: "background.default"
                  },
                  children: [props.component.answers.filter(option => +state[option.qualifiedCode] > 0).sort(function (a, b) {
                    return state[a.qualifiedCode] - state[b.qualifiedCode];
                  }).map((option, index) => {
                    return /* @__PURE__ */jsxRuntimeExports.jsx(PublicDraggable, {
                      draggableId: option.qualifiedCode,
                      index,
                      children: provided2 => /* @__PURE__ */jsxRuntimeExports.jsx(Box$1, {
                        onDoubleClick: () => onDoubleclick(option.qualifiedCode, "answer", index),
                        className: styles$7.rankingItem,
                        sx: {
                          backgroundColor: "background.paper"
                        },
                        ref: provided2.innerRef,
                        ...provided2.draggableProps,
                        ...provided2.dragHandleProps,
                        children: option.content.label
                      })
                    }, option.qualifiedCode);
                  }), provided.placeholder]
                })
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
        const signature_pad = /*#__PURE__*/Object.freeze( /*#__PURE__*/Object.defineProperty({
          __proto__: null,
          default: SignaturePad
        }, Symbol.toStringTag, {
          value: 'Module'
        }));
        const require$$2 = /*@__PURE__*/getAugmentedNamespace(signature_pad);
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
                return !t || "object" != typeof t && "function" != typeof t ? e : t;
              }
              function u(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
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
                    value: function () {
                      this._sigPad = new h.default(this._canvas, this._excludeOurProps()), this._resizeCanvas(), this.on();
                    }
                  }, {
                    key: "componentWillUnmount",
                    value: function () {
                      this.off();
                    }
                  }, {
                    key: "componentDidUpdate",
                    value: function () {
                      Object.assign(this._sigPad, this._excludeOurProps());
                    }
                  }, {
                    key: "render",
                    value: function () {
                      var e = this,
                        t = this.props.canvasProps;
                      return d.default.createElement("canvas", s({
                        ref: function (t) {
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
        const SignatureCanvas = /*@__PURE__*/getDefaultExportFromCjs(buildExports);
        const signatureCanvas = "_signatureCanvas_1bkvb_1";
        const container$3 = "_container_1bkvb_10";
        const buttonContainer = "_buttonContainer_1bkvb_14";
        const styles$6 = {
          signatureCanvas: signatureCanvas,
          container: container$3,
          buttonContainer: buttonContainer
        };
        function Signature(props) {
          const [submitEnabled, setSubmitEnabled] = reactExports.useState(false);
          const [clearEnabled, setClearEnabled] = reactExports.useState(false);
          const [signature, setSignature] = reactExports.useState(void 0);
          const state = useSelector(state2 => {
            let questionState = state2.runState.values[props.component.qualifiedCode];
            return questionState === null || questionState === void 0 ? void 0 : questionState.value;
          });
          const containerRef = reactExports.useRef(null);
          const [canvasWidth, setCanvasWidth] = reactExports.useState(400);
          reactExports.useEffect(() => {
            var _containerRef$current5;
            setCanvasWidth(containerRef === null || containerRef === void 0 ? void 0 : (_containerRef$current5 = containerRef.current) === null || _containerRef$current5 === void 0 ? void 0 : _containerRef$current5.offsetWidth);
          }, [containerRef]);
          reactExports.useEffect(() => {
            const resizeListener = () => {
              var _containerRef$current6;
              setCanvasWidth(containerRef === null || containerRef === void 0 ? void 0 : (_containerRef$current6 = containerRef.current) === null || _containerRef$current6 === void 0 ? void 0 : _containerRef$current6.offsetWidth);
            };
            window.addEventListener("resize", resizeListener);
            return () => {
              window.removeEventListener("resize", resizeListener);
            };
          }, []);
          const sigCanvas = reactExports.useRef();
          const dispatch = useDispatch();
          const clear = () => {
            sigCanvas.current.clear();
            setSignature(void 0);
            setClearEnabled(false);
            setSubmitEnabled(false);
          };
          const submit = () => {
            const dataUrl = sigCanvas.current.toDataURL("image/png");
            uploadDataUrl(props.component.qualifiedCode, dataUrl, `signature-${props.component.qualifiedCode}.png`).then(response => {
              dispatch(valueChange({
                componentCode: props.component.qualifiedCode,
                value: response
              }));
            }).catch(err => {
              console.error(err);
            });
          };
          reactExports.useEffect(() => {
            if (state && state.stored_filename) {
              setClearEnabled(true);
              downloadFileAsBase64(previewUrl(state.stored_filename)).then(response => {
                setSubmitEnabled(false);
                setSignature(response);
              });
            }
          }, [state]);
          return /* @__PURE__ */jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
            children: [/* @__PURE__ */jsxRuntimeExports.jsx(Box$1, {
              sx: {
                backgroundColor: "background.default"
              },
              className: styles$6.container,
              children: /* @__PURE__ */jsxRuntimeExports.jsx(Box$1, {
                ref: containerRef,
                sx: {
                  maxWidth: Math.min(canvasWidth, 400) + "px"
                },
                className: styles$6.signatureCanvas,
                children: signature ? /* @__PURE__ */jsxRuntimeExports.jsx("img", {
                  src: signature,
                  style: {
                    width: Math.min(canvasWidth, 400) + "px",
                    height: "200px"
                  }
                }) : /* @__PURE__ */jsxRuntimeExports.jsx(SignatureCanvas, {
                  penColor: "red",
                  clearOnResize: true,
                  onBegin: () => {
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
              className: styles$6.buttonContainer,
              children: [/* @__PURE__ */jsxRuntimeExports.jsx(Button, {
                onClick: () => clear(),
                disabled: !clearEnabled,
                children: "Clear"
              }), /* @__PURE__ */jsxRuntimeExports.jsx(Button, {
                onClick: () => submit(),
                disabled: !submitEnabled,
                children: "Submit"
              })]
            })]
          });
        }
        function VideoDisplay(props) {
          var _props$component$reso, _props$component$reso2;
          const videUrl = (_props$component$reso = props.component.resources) !== null && _props$component$reso !== void 0 && _props$component$reso.videoUrl ? buildResourceUrl(props.component.resources.videoUrl) : "";
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
          const imageUrl = (_props$component$reso3 = props.component.resources) !== null && _props$component$reso3 !== void 0 && _props$component$reso3.imageUrl ? buildResourceUrl(props.component.resources.imageUrl) : "";
          return ((_props$component$reso4 = props.component.resources) === null || _props$component$reso4 === void 0 ? void 0 : _props$component$reso4.imageUrl) && /* @__PURE__ */jsxRuntimeExports.jsx("div", {
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
        const imageGrid = "_imageGrid_gkz8d_1";
        const imageContainer = "_imageContainer_gkz8d_5";
        const rankContainer = "_rankContainer_gkz8d_11";
        const rankValue = "_rankValue_gkz8d_19";
        const styles$5 = {
          imageGrid: imageGrid,
          imageContainer: imageContainer,
          rankContainer: rankContainer,
          rankValue: rankValue
        };
        function ImageRanking(props) {
          const values = useSelector(state => {
            let valuesMap = {};
            props.component.answers.forEach(element => {
              valuesMap[element.qualifiedCode] = state.runState.values[element.qualifiedCode].value;
            });
            return valuesMap;
          }, shallowEqual);
          const dispatch = useDispatch();
          const containerRef = reactExports.useRef(null);
          const [width, setWidth] = reactExports.useState(800);
          reactExports.useEffect(() => {
            var _containerRef$current7;
            setWidth(containerRef === null || containerRef === void 0 ? void 0 : (_containerRef$current7 = containerRef.current) === null || _containerRef$current7 === void 0 ? void 0 : _containerRef$current7.offsetWidth);
          }, [containerRef]);
          const imageWidth = (width - props.component.columns * props.component.spacing * 2) / props.component.columns;
          const imageHeight = imageWidth / (props.component.imageAspectRatio || 1);
          reactExports.useEffect(() => {
            const resizeListener = () => {
              var _containerRef$current8;
              setWidth(containerRef === null || containerRef === void 0 ? void 0 : (_containerRef$current8 = containerRef.current) === null || _containerRef$current8 === void 0 ? void 0 : _containerRef$current8.offsetWidth);
            };
            window.addEventListener("resize", resizeListener);
            return () => {
              window.removeEventListener("resize", resizeListener);
            };
          }, []);
          const onItemClick = componentCode => {
            dispatch(setDirty(props.component.qualifiedCode));
            dispatch(setDirty(props.parentCode));
            if (+values[componentCode] > 0) {
              dispatch(valueChange({
                componentCode,
                undefined: void 0
              }));
            } else {
              let keys = Object.keys(values);
              let allValues = keys.map(key => values[key]);
              for (var i = 1; i <= keys.length; i++) {
                if (!allValues.includes(i)) {
                  dispatch(valueChange({
                    componentCode,
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
            className: styles$5.imageGrid,
            children: props.component.answers.map(option => {
              return /* @__PURE__ */jsxRuntimeExports.jsx(ImageRankingItem, {
                option,
                spacing: props.component.spacing,
                columns: props.component.columns,
                hideText: props.component.hideText,
                onClick: () => onItemClick(option.qualifiedCode),
                parentCode: props.component.qualifiedCode,
                imageHeight,
                imageWidth
              }, option.qualifiedCode);
            })
          });
        }
        function ImageRankingItem(props) {
          var _props$option$resourc3;
          const theme = useTheme$1();
          const state = useSelector(state2 => {
            let answerState = state2.runState.values[props.option.qualifiedCode];
            return {
              showAnswer: typeof (answerState === null || answerState === void 0 ? void 0 : answerState.relevance) == "undefined" || answerState.relevance,
              value: (answerState === null || answerState === void 0 ? void 0 : answerState.value) || 0
            };
          }, shallowEqual);
          const backgroundImage = (_props$option$resourc3 = props.option.resources) !== null && _props$option$resourc3 !== void 0 && _props$option$resourc3.image ? `url('${buildResourceUrl(props.option.resources.image)}')` : "0";
          return /* @__PURE__ */jsxRuntimeExports.jsxs(Grid, {
            item: true,
            xs: 12 / props.columns,
            children: [/* @__PURE__ */jsxRuntimeExports.jsx(Box$2, {
              className: styles$5.imageContainer,
              onClick: () => props.onClick(),
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              style: {
                backgroundImage,
                backgroundColor: theme.palette.background.default,
                margin: props.spacing + "px",
                boxShadow: 2,
                height: props.imageHeight + "px",
                border: state.checked ? `2px solid ${theme.palette.primary.main}` : "2px solid transparent"
              },
              children: state.value > 0 && /* @__PURE__ */jsxRuntimeExports.jsx("div", {
                style: {
                  height: Math.min(props.imageHeight, props.imageWidth) + "px",
                  width: Math.min(props.imageHeight, props.imageWidth) + "px",
                  borderRadius: Math.min(props.imageHeight, props.imageWidth) / 2 + "px",
                  fontSize: Math.min(props.imageHeight, props.imageWidth) / 2 + "px"
                },
                className: styles$5.rankContainer,
                children: /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                  className: styles$5.rankValue,
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
        const choicesContainer = "_choicesContainer_iaaeb_1";
        const choice = "_choice_iaaeb_1";
        const choiceLabels = "_choiceLabels_iaaeb_19";
        const styles$4 = {
          choicesContainer: choicesContainer,
          choice: choice,
          choiceLabels: choiceLabels
        };
        function NPS(props) {
          const theme = useTheme$1();
          const dispatch = useDispatch();
          let columns = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
          const state = useSelector(state2 => {
            return state2.runState.values[props.component.qualifiedCode].value;
          }, shallowEqual);
          const handleChange = option => {
            dispatch(valueChange({
              componentCode: props.component.qualifiedCode,
              value: option
            }));
            dispatch(setDirty(props.component.qualifiedCode));
          };
          return /* @__PURE__ */jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
            children: [/* @__PURE__ */jsxRuntimeExports.jsxs(Box$2, {
              className: styles$4.choiceLabels,
              children: [/* @__PURE__ */jsxRuntimeExports.jsx(Box$2, {
                children: props.component.content.lower_bound_hint
              }), /* @__PURE__ */jsxRuntimeExports.jsx(Box$2, {
                children: props.component.content.higher_bound_hint
              })]
            }), /* @__PURE__ */jsxRuntimeExports.jsx(Box$2, {
              className: styles$4.choicesContainer,
              children: columns.map(option => {
                const isSelected = state == option;
                return /* @__PURE__ */jsxRuntimeExports.jsx(Box$2, {
                  className: styles$4.choice,
                  onClick: () => handleChange(option),
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
        const container$2 = "_container_bvkr6_2";
        const styles$3 = {
          container: container$2
        };
        function PhotoCapture(props) {
          var _component$content;
          const component = props.component;
          const state = useSelector(state2 => {
            return state2.runState.values[component.qualifiedCode];
          });
          const dispatch = useDispatch();
          const onImageClick = () => {
            var _component$validation, _component$validation2;
            const code = component.qualifiedCode;
            const maxFileSize = ((_component$validation = component.validation) === null || _component$validation === void 0 ? void 0 : (_component$validation2 = _component$validation.validation_max_file_size) === null || _component$validation2 === void 0 ? void 0 : _component$validation2.max_size) || -1;
            if (window["Android"]) {
              window["Android"].capturePhoto(code, maxFileSize);
              window["onPhotoCaptured" + code] = value => {
                dispatch(valueChange({
                  componentCode: code,
                  value
                }));
              };
            } else {
              console.log("no android device!!");
            }
          };
          return /* @__PURE__ */jsxRuntimeExports.jsxs(Box$1, {
            className: styles$3.container,
            sx: {
              maxHeight: "400px"
            },
            children: [!state.value || !state.value.stored_filename ? /* @__PURE__ */jsxRuntimeExports.jsx("img", {
              onClick: onImageClick,
              src: "/camera.png",
              style: {
                maxHeight: "200px",
                maxWidth: "100%"
              }
            }) : /* @__PURE__ */jsxRuntimeExports.jsx("img", {
              onClick: onImageClick,
              src: previewUrl(state.value.stored_filename),
              style: {
                maxHeight: "100%",
                maxWidth: "100%"
              }
            }), /* @__PURE__ */jsxRuntimeExports.jsx("br", {}), component.showHint && /* @__PURE__ */jsxRuntimeExports.jsx("span", {
              children: (_component$content = component.content) === null || _component$content === void 0 ? void 0 : _component$content.hint
            })]
          });
        }
        const container$1 = "_container_bvkr6_2";
        const styles$2 = {
          container: container$1
        };
        function VideoCapture(props) {
          var _component$content2;
          const component = props.component;
          const state = useSelector(state2 => {
            return state2.runState.values[component.qualifiedCode];
          });
          const dispatch = useDispatch();
          const onImageClick = () => {
            var _component$validation3, _component$validation4;
            const code = component.qualifiedCode;
            const maxFileSize = ((_component$validation3 = component.validation) === null || _component$validation3 === void 0 ? void 0 : (_component$validation4 = _component$validation3.validation_max_file_size) === null || _component$validation4 === void 0 ? void 0 : _component$validation4.max_size) || -1;
            if (window["Android"]) {
              window["Android"].captureVideo(code, maxFileSize);
              window["onVideoCaptured" + code] = value => {
                dispatch(valueChange({
                  componentCode: code,
                  value
                }));
              };
            } else {
              console.log("no android device!!");
            }
          };
          return /* @__PURE__ */jsxRuntimeExports.jsxs(Box$1, {
            className: styles$2.container,
            children: [!state.value || !state.value.stored_filename ? /* @__PURE__ */jsxRuntimeExports.jsx("img", {
              onClick: onImageClick,
              src: "/video.png",
              style: {
                maxHeight: "200px"
              }
            }) : /* @__PURE__ */jsxRuntimeExports.jsx("div", {
              style: {
                position: "relative",
                marginTop: "16px",
                // 16:9 aspect ratio
                paddingTop: "56%"
              },
              children: /* @__PURE__ */jsxRuntimeExports.jsx(ReactPlayer, {
                url: previewUrl(state.value.stored_filename),
                loop: false,
                light: true,
                controls: true,
                config: {
                  forceAudio: false
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
            }), /* @__PURE__ */jsxRuntimeExports.jsx("br", {}), component.showHint && /* @__PURE__ */jsxRuntimeExports.jsx("span", {
              children: (_component$content2 = component.content) === null || _component$content2 === void 0 ? void 0 : _component$content2.hint
            })]
          });
        }
        const container = "_container_bvkr6_2";
        const styles$1 = {
          container: container
        };
        function Barcode(props) {
          var _component$content3, _props$component$vali13, _props$component$vali14;
          const theme = useTheme$1();
          const component = props.component;
          const state = useSelector(state2 => {
            return state2.runState.values[component.qualifiedCode];
          });
          const dispatch = useDispatch();
          const onImageClick = () => {
            const code = component.qualifiedCode;
            if (window["Android"]) {
              window["Android"].scanBarcode(code);
              window["onBarcodeScanned" + code] = value => {
                dispatch(valueChange({
                  componentCode: code,
                  value
                }));
              };
            } else {
              console.log("no android device!!");
            }
          };
          return /* @__PURE__ */jsxRuntimeExports.jsxs(Box$1, {
            className: styles$1.container,
            children: [/* @__PURE__ */jsxRuntimeExports.jsx("img", {
              onClick: onImageClick,
              src: "/barcode.png",
              style: {
                maxHeight: "200px"
              }
            }), /* @__PURE__ */jsxRuntimeExports.jsx("br", {}), component.showHint && /* @__PURE__ */jsxRuntimeExports.jsx("span", {
              children: (_component$content3 = component.content) === null || _component$content3 === void 0 ? void 0 : _component$content3.hint
            }), /* @__PURE__ */jsxRuntimeExports.jsx(TextField, {
              variant: "standard",
              required: (_props$component$vali13 = props.component.validation) !== null && _props$component$vali13 !== void 0 && (_props$component$vali14 = _props$component$vali13.validation_required) !== null && _props$component$vali14 !== void 0 && _props$component$vali14.isActive ? true : false,
              disabled: true,
              value: state.value,
              InputProps: {
                sx: {
                  fontFamily: theme.textStyles.text.font,
                  color: theme.textStyles.text.color,
                  fontSize: theme.textStyles.text.size
                }
              }
            })]
          });
        }
        function Question(props) {
          console.log("rendering: " + props.component.code);
          const theme = useTheme();
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
          const showDescription = props.component.content.description && stripTags(props.component.content.description).length > 0;
          const showTitle = props.component.content.label && stripTags(props.component.content.label).length > 0;
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
            className: `${styles$a.groupQuestion}`,
            children: [showHeader && /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
              className: styles$a.header,
              children: [showTitle && /* @__PURE__ */jsxRuntimeExports.jsx(Box$2, {
                style: {
                  fontFamily: theme.textStyles.question.font,
                  color: theme.textStyles.text.color,
                  fontSize: theme.textStyles.question.size
                },
                children: /* @__PURE__ */jsxRuntimeExports.jsx(Content, {
                  className: `${styles$a.content} ${styles$a.question}`,
                  name: "label",
                  lang: props.lang,
                  elementCode: props.component.qualifiedCode,
                  content: props.component.content.label
                })
              }), showDescription && /* @__PURE__ */jsxRuntimeExports.jsx(Box$2, {
                className: styles$a.textDescription,
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
        const textHeader = "_textHeader_vleqj_1";
        const textDescription = "_textDescription_vleqj_5";
        const titleRow = "_titleRow_vleqj_9";
        const groupHeader = "_groupHeader_vleqj_19";
        const styles = {
          textHeader: textHeader,
          textDescription: textDescription,
          titleRow: titleRow,
          groupHeader: groupHeader
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
              }), props.group && props.group.questions ? props.group.questions.filter(quest => quest.inCurrentNavigation).map(quest => /* @__PURE__ */jsxRuntimeExports.jsx(Question, {
                component: quest,
                lang: props.lang
              }, quest.code)) : ""]
            });
          };
          return state.showGroup && (props.group ? showGroup() : "");
        }
        function Survey({
          navigationIndex,
          survey,
          lang
        }) {
          var _survey$resources;
          const theme = useTheme();
          return /* @__PURE__ */jsxRuntimeExports.jsx("form", {
            id: FORM_ID,
            className: styles$h.surveyPage,
            style: {
              fontFamily: theme.textStyles.text.font,
              color: theme.textStyles.text.color,
              fontSize: theme.textStyles.text.size
            },
            children: /* @__PURE__ */jsxRuntimeExports.jsx("div", {
              className: styles$h.surveyContent,
              children: /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                className: styles$h.surveyGroups,
                children: [(_survey$resources = survey.resources) !== null && _survey$resources !== void 0 && _survey$resources.headerImage ? /* @__PURE__ */jsxRuntimeExports.jsx(CardMedia, {
                  className: styles$h.cardImage,
                  component: "img",
                  image: buildResourceUrl(survey.resources.headerImage)
                }) : null, survey && survey.groups ? survey.groups.filter(group => group.inCurrentNavigation).map(group => /* @__PURE__ */jsxRuntimeExports.jsx(Group, {
                  group,
                  lang: lang.code
                }, group.code)) : "", /* @__PURE__ */jsxRuntimeExports.jsx(Navigation, {
                  navigationIndex
                })]
              })
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
          const {
            t
          } = useTranslation("run");
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
                children: props.lang.langName
              }), props.additionalLang ? props.additionalLang.map((lang, index) => {
                return /* @__PURE__ */jsxRuntimeExports.jsx(MenuItem, {
                  value: lang.code,
                  children: lang.langName
                }, index);
              }) : ""]
            })]
          });
        }
        function RunSurvey({
          preview
        }) {
          var _data$survey, _data$survey2, _data$survey3, _data$survey3$content;
          const location = useLocation();
          const searchParams = new URLSearchParams(location.search);
          const responseId = searchParams.get("response_id");
          const lang = searchParams.get("lang");
          const [expanded, setExpanded] = React.useState(COLLAPSE);
          const [render, setRender] = React.useState(false);
          const [surveyError, setSurveyError] = React.useState(false);
          window["handleBack"] = () => {
            const result = expanded === EXPAND;
            setExpanded(COLLAPSE);
            return result;
          };
          const data = useSelector(state => {
            return state.runState.data;
          }, shallowEqual);
          const navigation = useSelector(state => {
            return state.runState.navigation;
          }, shallowEqual);
          const [error, setError] = reactExports.useState(null);
          const {
            t,
            i18n
          } = useTranslation("run");
          const dispatch = useDispatch();
          reactExports.useEffect(() => {
            if (navigation) {
              setExpanded(COLLAPSE_IMMEDIATE);
              setError(null);
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
            const procesed = processError(error2);
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
          const startNav = () => {
            startNavigation(lang, preview).then(response => {
              setRender(true);
              dispatch(stateReceived(response));
              sessionStorage.setItem("responseId", response.responseId);
              i18n.changeLanguage(response.lang.code);
              dispatch(setFetching(false));
            }).catch(err => {
              handleError(err);
            });
          };
          const continueNav = (payload, responseId2) => {
            continueNavigation(payload, responseId2, preview).then(response => {
              dispatch(stateReceived(response));
              i18n.changeLanguage(response.lang.code);
            }).catch(err => {
              setError({
                errorType: "click",
                message: err.message
              });
            });
          };
          reactExports.useEffect(() => {
            document.body.style.overflow = "scroll";
            dispatch(setFetching(true));
            setError(null);
            loadScript(preview).then(() => {
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
          const theme = React.useCallback(createTheme({
            ...defualtTheme(data === null || data === void 0 ? void 0 : (_data$survey = data.survey) === null || _data$survey === void 0 ? void 0 : _data$survey.theme),
            direction: rtlLanguage.includes(i18n.language) ? "rtl" : "ltr"
          }), [i18n.language, data === null || data === void 0 ? void 0 : (_data$survey2 = data.survey) === null || _data$survey2 === void 0 ? void 0 : _data$survey2.theme]);
          const cacheRtl = createCache({
            key: rtlLanguage.includes(i18n.language) ? "muirtl" : "muiltr",
            stylisPlugins: rtlLanguage.includes(i18n.language) ? [prefixer, stylisRTLPlugin] : null
          });
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
          const showBack = window["Android"] || preview;
          return /* @__PURE__ */jsxRuntimeExports.jsx(CacheProvider, {
            value: cacheRtl,
            children: /* @__PURE__ */jsxRuntimeExports.jsx(ThemeProvider, {
              theme,
              children: /* @__PURE__ */jsxRuntimeExports.jsxs(Layout, {
                onClick: toggleDrawer(false),
                onKeyDown: toggleDrawer(false),
                children: [render && /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                  className: styles$k.mainContainer,
                  children: [/* @__PURE__ */jsxRuntimeExports.jsx(AppBar$1, {
                    position: "fixed",
                    children: /* @__PURE__ */jsxRuntimeExports.jsxs(Toolbar, {
                      children: [showBack && /* @__PURE__ */jsxRuntimeExports.jsx(IconButton, {
                        size: "large",
                        edge: "start",
                        color: "inherit",
                        "aria-label": "menu",
                        sx: {
                          mr: 2
                        },
                        onClick: onBackClick,
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
                    error
                  }, "Survey"), /* @__PURE__ */jsxRuntimeExports.jsx(Drawer$1, {
                    anchor: "left",
                    transitionDuration: expanded !== COLLAPSE_IMMEDIATE ? 500 : 0,
                    open: expanded == EXPAND,
                    onClose: toggleDrawer(false),
                    children: /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                      className: styles$k.drawer,
                      children: [/* @__PURE__ */jsxRuntimeExports.jsx(ChangeLang, {
                        lang: data === null || data === void 0 ? void 0 : data.lang,
                        additionalLang: data === null || data === void 0 ? void 0 : data.additionalLang
                      }), /* @__PURE__ */jsxRuntimeExports.jsx(SurveyIndexMemo, {
                        className: styles$k.surveyIndex,
                        navigationIndex: data === null || data === void 0 ? void 0 : data.navigationIndex,
                        survey: data === null || data === void 0 ? void 0 : data.survey
                      })]
                    })
                  })]
                }), error ? /* @__PURE__ */jsxRuntimeExports.jsx(ErrorMessage, {
                  error,
                  variant: "toast"
                }) : null, surveyError && /* @__PURE__ */jsxRuntimeExports.jsx(Box$2, {
                  className: styles$k.surveyDesignError,
                  children: /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                    children: t(`processed_errors.${surveyError}`)
                  })
                })]
              })
            })
          });
        }
        const SurveyMemo = React.memo(Survey);
        const SurveyIndexMemo = React.memo(SurveyIndex);
        const COLLAPSE_IMMEDIATE = "COLLAPSE_IMMEDIATE";
        const COLLAPSE = "COLLAPSE";
        const EXPAND = "EXPAND";
      }
    };
  });
})();
