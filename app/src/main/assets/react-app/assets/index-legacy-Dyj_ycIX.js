;
(function () {
  const _excluded = ["asLink", "variant", "line", "persistent", "children", "sx"];
  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
  function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
  function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
  function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : String(i); }
  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
  function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
  System.register(['./index-legacy-vEA8K-LS.js', './use-service-legacy-Bcxdqe8R.js', './Web-legacy-BheMkDx6.js', './router-link-legacy-DKg-tKvm.js', './Link-legacy-HyZ4K89i.js', './DatePicker-legacy-BnaJqr5R.js', './Delete-legacy-B8XrK9VC.js', './Card-legacy-DxmmOhD2.js', './Divider-legacy-DjNNgC-t.js', './yup-legacy-DfFsT9pC.js', './TablePagination-legacy-DkCQFPSP.js', './Checkbox-legacy-DVZrBJdJ.js', './SwitchBase-legacy-CDK6BOac.js', './radioClasses-legacy-Dh2-Btlo.js', './tableRowClasses-legacy-vYv7lYPf.js', './FormControlLabel-legacy-CId-AnH7.js', './TextField-legacy-Dx6AYM0D.js', './Grid-legacy-Dnj6MD-w.js', './TableCell-legacy-Dp59XReJ.js', './Toolbar-legacy-BeIwS6lj.js'], function (exports, module) {
    'use strict';

    var jsxRuntimeExports, reactExports, interopRequireDefaultExports, Box, LoadingDots, createSvgIcon, useTheme, Typography, PropTypes, requireCreateSvgIcon, useTranslation, Stack, IconButton, useService, useDispatch, setLoading, PROCESSED_ERRORS, Container, TokenService, useWidth, SavingSurvey, default_1$4, isSurveyAdmin, Edit, serverDateTimeToLocalDateTime, RHFSelect, useForm, localDateToServerDateTime, FormProvider, RHFTextField, SURVEY_MODE, SurveyClone, ROLES, RouterLink, Link, dayjs, default_1$5, Card, Divider, create$3, create$6, o, LoadingButton, TablePagination;
    return {
      setters: [module => {
        jsxRuntimeExports = module.j;
        reactExports = module.r;
        interopRequireDefaultExports = module.q;
        Box = module.B;
        LoadingDots = module.L;
      }, module => {
        createSvgIcon = module.f;
        useTheme = module.p;
        Typography = module.T;
        PropTypes = module.V;
        requireCreateSvgIcon = module.D;
        useTranslation = module.E;
        Stack = module.aH;
        IconButton = module.I;
        useService = module.J;
        useDispatch = module.K;
        setLoading = module.O;
        PROCESSED_ERRORS = module.aq;
        Container = module.aF;
        TokenService = module.C;
      }, module => {
        useWidth = module.c;
        SavingSurvey = module.S;
        default_1$4 = module.d;
        isSurveyAdmin = module.i;
        Edit = module.E;
        serverDateTimeToLocalDateTime = module.e;
        RHFSelect = module.f;
        useForm = module.u;
        localDateToServerDateTime = module.h;
        FormProvider = module.F;
        RHFTextField = module.R;
        SURVEY_MODE = module.j;
        SurveyClone = module.k;
        ROLES = module.m;
      }, module => {
        RouterLink = module.R;
      }, module => {
        Link = module.L;
      }, module => {
        dayjs = module.e;
      }, module => {
        default_1$5 = module.d;
      }, module => {
        Card = module.C;
      }, module => {
        Divider = module.D;
      }, module => {
        create$3 = module.c;
        create$6 = module.a;
        o = module.o;
        LoadingButton = module.L;
      }, module => {
        TablePagination = module.T;
      }, null, null, null, null, null, null, null, null, null],
      execute: function execute() {
        var __vite_style__ = document.createElement('style');
        __vite_style__.textContent = "._mainContainer_1sp6k_1 {\n  margin: auto;\n  min-width: 300px;\n  height: calc(100vh - 64px);\n  overflow: auto;\n}\n\n._content_1sp6k_8 {\n  margin-top: 30px;\n}\n\n._loadingWrapper_1sp6k_12 {\n  width: 100%;\n  height: 100%;\n  text-align: center;\n  padding-top: 50px;\n}\n\n._allButton_1sp6k_19 {\n  margin-top: 2rem !important;\n  background-color: #16205b !important;\n  color: #fff !important;\n  border-radius: 50px !important;\n  font-size: 1.5rem !important;\n  padding: 0.25rem 6rem !important;\n  text-transform: none !important;\n}\n\n@media only screen and (max-width: 1024px) {\n  ._content_1sp6k_8 {\n    padding: 0 1rem;\n  }\n}\n._surveyHeader_1bod0_1 {\n  padding: 5px;\n  color: #fff;\n  text-transform: capitalize;\n}\n\n._contentCard_1bod0_7 {\n  padding: 5px;\n}\n\n._actionBtn_1bod0_11 {\n  margin-top: 30px;\n  display: flex;\n  justify-content: space-between;\n}\n._card_1bod0_16 {\n  border-radius: 5px !important;\n  box-shadow: none !important;\n  border: 1px solid #d7d7d7;\n}\n._cardContent_1bod0_21 {\n  display: flex;\n  align-items: center;\n  gap: 2rem;\n}\n\n._imageContainer_1bod0_27 {\n  padding: 1rem;\n  background-color: #f7f8fc;\n  display: flex;\n  justify-content: center;\n}\n\n._surveyContent_1bod0_34 {\n  display: flex;\n  align-items: center;\n  gap: 7rem;\n  flex: 1;\n  width: 100%;\n}\n\n._surveyTitle_1bod0_42 {\n  width: 13rem;\n  color: #181735;\n}\n\n._surveyStatus_1bod0_47 {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  width: 5rem;\n}\n._badge_1bod0_53 {\n  height: 0.5rem;\n  width: 0.5rem;\n  border-radius: 99999px;\n}\n\n._textTransform_1bod0_59 {\n  text-transform: capitalize;\n}\n\n._surveyResponse_1bod0_63 {\n  display: flex;\n  align-items: center;\n  width: 9rem;\n  gap: 0.5rem;\n}\n\n._surveyActions_1bod0_70 {\n  display: flex;\n  flex-direction: row !important;\n  justify-content: flex-start;\n  gap: 0.5rem;\n  margin-right: 1rem;\n  flex: auto;\n  width: 15rem;\n}\n\n._iconButton_1bod0_80 {\n  border: 2px solid #d7d7d7 !important;\n  border-radius: 14px !important;\n  padding: 0.3rem 1rem !important;\n  height: fit-content;\n}\n\n@media only screen and (max-width: 1024px) {\n  ._cardContent_1bod0_21 {\n    flex-direction: column;\n    padding: 0rem 1rem 1rem 1rem;\n  }\n  ._surveyContent_1bod0_34 {\n    flex-direction: column;\n    gap: 1rem;\n    align-items: flex-start;\n  }\n\n  ._imageContainer_1bod0_27 {\n    width: 100%;\n  }\n  ._surveyActions_1bod0_70 {\n    width: 100%;\n  }\n}\n\n@media only screen and (min-width: 1024px) and (max-width: 1440px) {\n  ._surveyContent_1bod0_34 {\n    gap: 2rem;\n  }\n  ._surveyResponse_1bod0_63 {\n    width: 7rem;\n  }\n}\n._sliderContainer_1ra03_1 {\n  margin-top: 2rem;\n  background-color: #f7f7f9;\n  padding: 2rem;\n}\n\n._sliderStyle_1ra03_7 {\n  padding: 0 7rem;\n}\n\n._surveyName_1ra03_11{\n  display: block;\n  margin: 8px 8px 8px 8px;\n}\n\n._cardContent_1ra03_16 {\n  padding: 2rem 0rem;\n  border-radius: 20px;\n  background-color: #fff;\n  gap: 1rem;\n  margin: 8px;\n  padding: 1rem;\n  text-align: center;\n}\n\n._cardLink_1ra03_26 {\n  padding: 0.5rem 2.25rem;\n  border-radius: 9999px;\n  background-color: #04bdf3;\n  text-align: center;\n  width: fit-content;\n  font-weight: 600;\n  display: block;\n  margin: 8px;\n}\n@media only screen and (max-width: 751px) {\n  ._sliderStyle_1ra03_7 {\n    padding: 0rem 1rem;\n  }\n}\n\n._nextArrow_1ra03_42 {\n  cursor: pointer;\n  position: absolute;\n  top: 40%;\n  right: 65px;\n  transform: translateY(-50%);\n}\n._backArrow_1ra03_49 {\n  cursor: pointer;\n  position: absolute;\n  top: 40%;\n  left: 60px;\n  transform: translate(0, -50%);\n}\n.slick-slide {\n  margin-right: 1rem;\n}\n.slick-list {\n  height: 200px;\n}\n@media only screen and (max-width: 751px) {\n  .slick-slide {\n    margin-right: 0rem;\n  }\n}\n._createUserCard_zrfc2_1._createUserCard_zrfc2_1 {\n  padding: 2rem;\n  border-radius: 20px;\n  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,\n    rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;\n  margin-bottom: 50px;\n}\n\n._formGroup_zrfc2_9._formGroup_zrfc2_9 {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  gap: 2rem;\n}\n._rightContainer_zrfc2_16._rightContainer_zrfc2_16 {\n  display: flex;\n  flex-direction: row;\n  gap: 2.5rem;\n  flex: auto;\n  justify-content: flex-end;\n}\n\n._createButton_zrfc2_24._createButton_zrfc2_24 {\n  text-transform: none;\n  color: white;\n  padding: 0.75rem 7rem;\n  background-color: #04bdf3;\n  border-radius: 20px;\n  height: fit-content;\n  transition: background-color 0.3s ease, color 0.3s ease, border 0.3s ease;\n}\n._createButton_zrfc2_24._createButton_zrfc2_24:hover {\n  border: 1px solid #04bdf3;\n  color: #04bdf3;\n  background-color: #fff;\n}\n\n._surveyNameInput_zrfc2_39 {\n  padding-left: 14px;\n}\n\n@media only screen and (max-width: 768px) {\n  ._createUserCard_zrfc2_1._createUserCard_zrfc2_1 {\n    padding: 1rem;\n  }\n  ._formGroup_zrfc2_9._formGroup_zrfc2_9 {\n    flex-direction: column;\n  }\n  ._rightContainer_zrfc2_16._rightContainer_zrfc2_16 {\n    width: 100%;\n    flex-direction: column;\n    gap: 2rem;\n  }\n  ._selectInput_zrfc2_55 {\n    width: 100% !important;\n  }\n  ._surveyNameInput_zrfc2_39._surveyNameInput_zrfc2_39 {\n    width: 100%;\n  }\n}\n\n._errorText_zrfc2_63 {\n  color: #eb5757 !important;\n  padding-left: 14px;\n}\n";
        document.head.appendChild(__vite_style__);
        exports("default", Dashboard);
        const Send = createSvgIcon( /*#__PURE__*/jsxRuntimeExports.jsx("path", {
          d: "M2.01 21 23 12 2.01 3 2 10l15 2-15 2z"
        }), 'Send');
        const Stop = createSvgIcon( /*#__PURE__*/jsxRuntimeExports.jsx("path", {
          d: "M6 6h12v12H6z"
        }), 'Stop');
        const mainContainer = "_mainContainer_1sp6k_1";
        const content = "_content_1sp6k_8";
        const loadingWrapper = "_loadingWrapper_1sp6k_12";
        const allButton = "_allButton_1sp6k_19";
        const styles$3 = {
          mainContainer: mainContainer,
          content: content,
          loadingWrapper: loadingWrapper,
          allButton: allButton
        };
        const surveyHeader = "_surveyHeader_1bod0_1";
        const contentCard = "_contentCard_1bod0_7";
        const actionBtn = "_actionBtn_1bod0_11";
        const card = "_card_1bod0_16";
        const cardContent$1 = "_cardContent_1bod0_21";
        const imageContainer = "_imageContainer_1bod0_27";
        const surveyContent = "_surveyContent_1bod0_34";
        const surveyTitle = "_surveyTitle_1bod0_42";
        const surveyStatus = "_surveyStatus_1bod0_47";
        const badge = "_badge_1bod0_53";
        const textTransform = "_textTransform_1bod0_59";
        const surveyResponse = "_surveyResponse_1bod0_63";
        const surveyActions = "_surveyActions_1bod0_70";
        const iconButton = "_iconButton_1bod0_80";
        const styles$2 = {
          surveyHeader: surveyHeader,
          contentCard: contentCard,
          actionBtn: actionBtn,
          card: card,
          cardContent: cardContent$1,
          imageContainer: imageContainer,
          surveyContent: surveyContent,
          surveyTitle: surveyTitle,
          surveyStatus: surveyStatus,
          badge: badge,
          textTransform: textTransform,
          surveyResponse: surveyResponse,
          surveyActions: surveyActions,
          iconButton: iconButton
        };

        // ----------------------------------------------------------------------

        function remToPx(value) {
          return Math.round(parseFloat(value) * 16);
        }
        function useTypography(variant) {
          const theme = useTheme();
          const breakpoints = useWidth();
          const key = theme.breakpoints.up(breakpoints === 'xl' ? 'lg' : breakpoints);
          const hasResponsive = variant === 'h1' || variant === 'h2' || variant === 'h3' || variant === 'h4' || variant === 'h5' || variant === 'h6';
          const getFont = hasResponsive && theme.typography[variant][key] ? theme.typography[variant][key] : theme.typography[variant];
          const fontSize = remToPx(getFont.fontSize);
          const lineHeight = Number(theme.typography[variant].lineHeight) * fontSize;
          const _theme$typography$var = theme.typography[variant],
            fontWeight = _theme$typography$var.fontWeight,
            letterSpacing = _theme$typography$var.letterSpacing;
          return {
            fontSize,
            lineHeight,
            fontWeight,
            letterSpacing
          };
        }
        const TextMaxLine = reactExports.forwardRef((_ref, ref) => {
          let asLink = _ref.asLink,
            _ref$variant = _ref.variant,
            variant = _ref$variant === void 0 ? "body1" : _ref$variant,
            _ref$line = _ref.line,
            line = _ref$line === void 0 ? 2 : _ref$line,
            _ref$persistent = _ref.persistent,
            persistent = _ref$persistent === void 0 ? false : _ref$persistent,
            children = _ref.children,
            sx = _ref.sx,
            other = _objectWithoutProperties(_ref, _excluded);
          const _useTypography = useTypography(variant),
            lineHeight = _useTypography.lineHeight;
          const styles = _objectSpread(_objectSpread({
            overflow: "hidden",
            textOverflow: "ellipsis",
            display: "-webkit-box",
            WebkitLineClamp: line,
            WebkitBoxOrient: "vertical"
          }, persistent && {
            height: lineHeight * line
          }), sx);
          if (asLink) {
            return /* @__PURE__ */jsxRuntimeExports.jsx(Link, _objectSpread(_objectSpread({
              color: "inherit",
              ref,
              variant,
              sx: _objectSpread({}, styles)
            }, other), {}, {
              children
            }));
          }
          return /* @__PURE__ */jsxRuntimeExports.jsx(Typography, _objectSpread(_objectSpread({
            ref,
            variant,
            sx: _objectSpread({}, styles)
          }, other), {}, {
            children
          }));
        });
        TextMaxLine.propTypes = {
          asLink: PropTypes.bool,
          children: PropTypes.node,
          line: PropTypes.number,
          persistent: PropTypes.bool,
          sx: PropTypes.object,
          variant: PropTypes.oneOf(["body1", "body2", "button", "caption", "h1", "h2", "h3", "h4", "h5", "h6", "inherit", "overline", "subtitle1", "subtitle2"])
        };
        function fDate(date, newFormat) {
          const fm = newFormat || "DD MMM YYYY";
          return date ? dayjs(date).format(fm) : "";
        }
        var FormatQuote = {};
        var _interopRequireDefault$3 = interopRequireDefaultExports;
        Object.defineProperty(FormatQuote, "__esModule", {
          value: true
        });
        var default_1$3 = FormatQuote.default = void 0;
        var _createSvgIcon$3 = _interopRequireDefault$3(requireCreateSvgIcon());
        var _jsxRuntime$3 = jsxRuntimeExports;
        var _default$3 = (0, _createSvgIcon$3.default)( /*#__PURE__*/(0, _jsxRuntime$3.jsx)("path", {
          d: "M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"
        }), 'FormatQuote');
        default_1$3 = FormatQuote.default = _default$3;
        var Warning = {};
        var _interopRequireDefault$2 = interopRequireDefaultExports;
        Object.defineProperty(Warning, "__esModule", {
          value: true
        });
        var default_1$2 = Warning.default = void 0;
        var _createSvgIcon$2 = _interopRequireDefault$2(requireCreateSvgIcon());
        var _jsxRuntime$2 = jsxRuntimeExports;
        var _default$2 = (0, _createSvgIcon$2.default)( /*#__PURE__*/(0, _jsxRuntime$2.jsx)("path", {
          d: "M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"
        }), 'Warning');
        default_1$2 = Warning.default = _default$2;
        var Shield = {};
        var _interopRequireDefault$1 = interopRequireDefaultExports;
        Object.defineProperty(Shield, "__esModule", {
          value: true
        });
        var default_1$1 = Shield.default = void 0;
        var _createSvgIcon$1 = _interopRequireDefault$1(requireCreateSvgIcon());
        var _jsxRuntime$1 = jsxRuntimeExports;
        var _default$1 = (0, _createSvgIcon$1.default)( /*#__PURE__*/(0, _jsxRuntime$1.jsx)("path", {
          d: "M12 1 3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"
        }), 'Shield');
        default_1$1 = Shield.default = _default$1;
        var FileCopy = {};
        var _interopRequireDefault = interopRequireDefaultExports;
        Object.defineProperty(FileCopy, "__esModule", {
          value: true
        });
        var default_1 = FileCopy.default = void 0;
        var _createSvgIcon = _interopRequireDefault(requireCreateSvgIcon());
        var _jsxRuntime = jsxRuntimeExports;
        var _default = (0, _createSvgIcon.default)( /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
          d: "M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm-1 4 6 6v10c0 1.1-.9 2-2 2H7.99C6.89 23 6 22.1 6 21l.01-14c0-1.1.89-2 1.99-2h7zm-1 7h5.5L14 6.5V12z"
        }), 'FileCopy');
        default_1 = FileCopy.default = _default;
        const STATUS = {
          DRAFT: "draft",
          CLOSED: "closed",
          ACTIVE: "active",
          EXPIRED: "expired",
          SCHEDULED: "scheduled"
        };
        const status = survey => {
          switch (survey.status) {
            case "draft":
              return STATUS.DRAFT;
            case "closed":
              return STATUS.CLOSED;
            case "active":
              if (survey.endDate && serverDateTimeToLocalDateTime(survey.endDate) < Date.now()) {
                return STATUS.EXPIRED;
              } else if (survey.startDate && serverDateTimeToLocalDateTime(survey.startDate) > Date.now()) {
                return STATUS.SCHEDULED;
              } else {
                return STATUS.ACTIVE;
              }
            default:
              return STATUS.DRAFT;
          }
        };
        const bgHeader = status2 => {
          switch (status2) {
            case STATUS.DRAFT:
              return "#e9db3e";
            case STATUS.CLOSED:
              return "#d32f2f";
            case STATUS.EXPIRED:
              return "#9d4435";
            case STATUS.SCHEDULED:
              return "#607d8b";
            case STATUS.ACTIVE:
              return "#669834";
            default:
              return;
          }
        };
        const Survey = ({
          survey,
          example = false,
          onClone,
          onDelete,
          onClose
        }) => {
          const _useTranslation = useTranslation("manage"),
            t = _useTranslation.t;
          const surveyStatus = status(survey);
          return /* @__PURE__ */jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
            children: [/* @__PURE__ */jsxRuntimeExports.jsx(SavingSurvey, {}), /* @__PURE__ */jsxRuntimeExports.jsxs(Card, {
              sx: {
                "&:hover": {
                  boxShadow: theme => theme.customShadows.z24
                }
              },
              children: [/* @__PURE__ */jsxRuntimeExports.jsxs(Stack, {
                sx: {
                  p: 3,
                  pb: 0
                },
                children: [/* @__PURE__ */jsxRuntimeExports.jsxs(Stack, {
                  spacing: 0.5,
                  sx: {
                    mt: 0,
                    mb: 2
                  },
                  children: [/* @__PURE__ */jsxRuntimeExports.jsx(Link, {
                    component: survey.status !== "closed" ? RouterLink : void 0,
                    href: example ? `/guest/preview/${survey.id}` : `/design-survey/${survey.id}`,
                    color: "inherit",
                    children: /* @__PURE__ */jsxRuntimeExports.jsx(TextMaxLine, {
                      variant: "h4",
                      line: 1,
                      children: survey.name
                    })
                  }), !example && /* @__PURE__ */jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
                    children: [/* @__PURE__ */jsxRuntimeExports.jsxs(Stack, {
                      direction: "row",
                      alignItems: "center",
                      spacing: 0.5,
                      sx: {
                        typography: "body2",
                        color: "text.secondary"
                      },
                      children: [/* @__PURE__ */jsxRuntimeExports.jsx("span", {
                        style: {
                          backgroundColor: bgHeader(surveyStatus)
                        },
                        className: styles$2.badge
                      }), " ", /* @__PURE__ */jsxRuntimeExports.jsx(Typography, {
                        variant: "subtitle2",
                        className: styles$2.textTransform,
                        children: t(`status.${surveyStatus}`)
                      })]
                    }), !example && /* @__PURE__ */jsxRuntimeExports.jsxs(Stack, {
                      direction: "row",
                      alignItems: "center",
                      spacing: 0.5,
                      sx: {
                        typography: "body2",
                        color: "text.secondary"
                      },
                      children: [/* @__PURE__ */jsxRuntimeExports.jsx(default_1$1, {}), /* @__PURE__ */jsxRuntimeExports.jsx(Typography, {
                        variant: "subtitle2",
                        className: styles$2.textTransform,
                        children: survey.publicWithinOrg ? "Public" : "Private"
                      })]
                    }), !example && survey.status !== "closed" && survey.latestVersion.published === false && /* @__PURE__ */jsxRuntimeExports.jsxs(Stack, {
                      direction: "row",
                      alignItems: "center",
                      spacing: 0.5,
                      sx: {
                        typography: "body2",
                        color: "text.secondary"
                      },
                      children: [/* @__PURE__ */jsxRuntimeExports.jsx(default_1$2, {}), /* @__PURE__ */jsxRuntimeExports.jsx(Typography, {
                        variant: "subtitle2",
                        className: styles$2.textTransform,
                        children: "has unpublished Changes"
                      })]
                    }), /* @__PURE__ */jsxRuntimeExports.jsxs(Stack, {
                      direction: "row",
                      alignItems: "center",
                      spacing: 0.5,
                      sx: {
                        typography: "body2",
                        color: "text.secondary"
                      },
                      children: [/* @__PURE__ */jsxRuntimeExports.jsx(default_1$4, {}), /* @__PURE__ */jsxRuntimeExports.jsxs(Typography, {
                        variant: "subtitle2",
                        className: styles$2.textTransform,
                        children: ["Complete Responses: ", survey.completeResponseCount]
                      })]
                    }), /* @__PURE__ */jsxRuntimeExports.jsxs(Stack, {
                      direction: "row",
                      alignItems: "center",
                      spacing: 0.5,
                      sx: {
                        typography: "body2",
                        color: "text.secondary"
                      },
                      children: [/* @__PURE__ */jsxRuntimeExports.jsx(default_1$3, {}), /* @__PURE__ */jsxRuntimeExports.jsx(Typography, {
                        variant: "subtitle2",
                        className: styles$2.textTransform,
                        children: survey.surveyQuota > 0 ? "Quota: " + survey.surveyQuota : "No Quota"
                      })]
                    })]
                  })]
                }), /* @__PURE__ */jsxRuntimeExports.jsxs(Typography, {
                  variant: "caption",
                  sx: {
                    color: "text.disabled"
                  },
                  children: [/* @__PURE__ */jsxRuntimeExports.jsx("strong", {
                    children: "Created"
                  }), ": ", fDate(survey.creationDate)]
                }), /* @__PURE__ */jsxRuntimeExports.jsxs(Typography, {
                  variant: "caption",
                  sx: {
                    color: "text.disabled"
                  },
                  children: [/* @__PURE__ */jsxRuntimeExports.jsx("strong", {
                    children: "Last Modified"
                  }), ": ", fDate(survey.lastModified)]
                }), !example && survey.startDate && /* @__PURE__ */jsxRuntimeExports.jsxs(Typography, {
                  variant: "caption",
                  sx: {
                    color: "text.disabled"
                  },
                  children: [/* @__PURE__ */jsxRuntimeExports.jsx("strong", {
                    children: "Start Date"
                  }), ": ", fDate(survey.startDate)]
                }), !example && survey.endDate && /* @__PURE__ */jsxRuntimeExports.jsxs(Typography, {
                  variant: "caption",
                  sx: {
                    color: "text.disabled"
                  },
                  children: [/* @__PURE__ */jsxRuntimeExports.jsx("strong", {
                    children: "End Date"
                  }), ": ", fDate(survey.endDate)]
                })]
              }), /* @__PURE__ */jsxRuntimeExports.jsx(Divider, {
                sx: {
                  borderStyle: "dashed",
                  my: 2
                }
              }), !example && isSurveyAdmin() && /* @__PURE__ */jsxRuntimeExports.jsxs(Stack, {
                sx: {
                  p: 3,
                  pt: 0,
                  typography: "body2",
                  color: "text.secondary",
                  textTransform: "capitalize"
                },
                className: styles$2.surveyActions,
                children: [survey.status !== "closed" && /* @__PURE__ */jsxRuntimeExports.jsx(IconButton, {
                  component: RouterLink,
                  href: `/design-survey/${survey.id}`,
                  className: styles$2.iconButton,
                  "aria-label": "edit",
                  size: "large",
                  onClick: () => {},
                  children: /* @__PURE__ */jsxRuntimeExports.jsx(Edit, {
                    color: "primary"
                  })
                }), (survey.status === "draft" || survey.status === "active" && survey.latestVersion.published === false) && /* @__PURE__ */jsxRuntimeExports.jsx(IconButton, {
                  className: styles$2.iconButton,
                  "aria-label": "send",
                  component: RouterLink,
                  href: `/launch/${survey.id}`,
                  size: "large",
                  onClick: () => {},
                  children: /* @__PURE__ */jsxRuntimeExports.jsx(Send, {
                    color: "primary"
                  })
                }), survey.status === "active" && /* @__PURE__ */jsxRuntimeExports.jsx(IconButton, {
                  className: styles$2.iconButton,
                  "aria-label": "stop",
                  size: "large",
                  onClick: () => onClose(survey.id),
                  children: /* @__PURE__ */jsxRuntimeExports.jsx(Stop, {
                    color: "primary"
                  })
                }), /* @__PURE__ */jsxRuntimeExports.jsx(IconButton, {
                  className: styles$2.iconButton,
                  "aria-label": "stop",
                  size: "large",
                  onClick: onClone,
                  children: /* @__PURE__ */jsxRuntimeExports.jsx(default_1, {
                    color: "primary"
                  })
                }), survey.status !== STATUS.ACTIVE && /* @__PURE__ */jsxRuntimeExports.jsx(IconButton, {
                  className: styles$2.iconButton,
                  "aria-label": "delete",
                  size: "large",
                  onClick: () => onDelete(survey.id),
                  children: /* @__PURE__ */jsxRuntimeExports.jsx(default_1$5, {
                    color: "primary"
                  })
                })]
              })]
            })]
          });
        };
        const HeaderContent = ({
          sort,
          filter,
          onFilterSelected,
          onSortSelected
        }) => {
          const sort_options = [{
            value: "responses_desc",
            label: "survey_sort_options.responses_desc"
          }, {
            value: "last_modified_desc",
            label: "survey_sort_options.last_modified_desc"
          }];
          const filter_options = [{
            value: "all",
            label: `status.all`
          }, {
            value: STATUS.ACTIVE,
            label: `status.${STATUS.ACTIVE}`
          }, {
            value: STATUS.SCHEDULED,
            label: `status.${STATUS.SCHEDULED}`
          }, {
            value: STATUS.DRAFT,
            label: `status.${STATUS.DRAFT}`
          }, {
            value: STATUS.EXPIRED,
            label: `status.${STATUS.EXPIRED}`
          }, {
            value: STATUS.CLOSED,
            label: `status.${STATUS.CLOSED}`
          }];
          const _useTranslation2 = useTranslation("manage"),
            t = _useTranslation2.t;
          return /* @__PURE__ */jsxRuntimeExports.jsxs(Box, {
            rowGap: 2.5,
            columnGap: 2,
            display: "grid",
            gridTemplateColumns: {
              xs: "repeat(1, 1fr)",
              md: "repeat(2, 1fr)"
            },
            children: [/* @__PURE__ */jsxRuntimeExports.jsx(Typography, {
              variant: "h5",
              flex: "1",
              textTransform: "uppercase",
              fontWeight: "600",
              children: t("my_surveys")
            }), /* @__PURE__ */jsxRuntimeExports.jsxs(Stack, {
              width: "100%",
              spacing: 2.5,
              direction: {
                xs: "column",
                md: "row"
              },
              alignItems: "center",
              children: [/* @__PURE__ */jsxRuntimeExports.jsx(RHFSelect, {
                onChange: onSortSelected,
                native: true,
                value: sort,
                name: "Status",
                label: "Status",
                children: sort_options.map(option => /* @__PURE__ */jsxRuntimeExports.jsx("option", {
                  value: option.value,
                  children: t(option.label)
                }, option.value))
              }), /* @__PURE__ */jsxRuntimeExports.jsx(RHFSelect, {
                onChange: onFilterSelected,
                native: true,
                value: filter,
                name: "Status",
                label: "Status",
                children: filter_options.map(option => /* @__PURE__ */jsxRuntimeExports.jsx("option", {
                  value: option.value,
                  children: t(option.label)
                }, option.value))
              })]
            })]
          });
        };
        const sliderContainer = "_sliderContainer_1ra03_1";
        const sliderStyle = "_sliderStyle_1ra03_7";
        const surveyName = "_surveyName_1ra03_11";
        const cardContent = "_cardContent_1ra03_16";
        const cardLink = "_cardLink_1ra03_26";
        const nextArrow = "_nextArrow_1ra03_42";
        const backArrow = "_backArrow_1ra03_49";
        const styles$1 = {
          sliderContainer: sliderContainer,
          sliderStyle: sliderStyle,
          surveyName: surveyName,
          cardContent: cardContent,
          cardLink: cardLink,
          nextArrow: nextArrow,
          backArrow: backArrow
        };
        const TemplateSlider = ({
          surveys
        }) => {
          return /* @__PURE__ */jsxRuntimeExports.jsxs(Box, {
            className: styles$1.sliderContainer,
            children: [/* @__PURE__ */jsxRuntimeExports.jsx(Typography, {
              variant: "h5",
              marginBottom: 2,
              fontWeight: 600,
              color: "#181735",
              children: "Surveys Forms"
            }), /* @__PURE__ */jsxRuntimeExports.jsx("div", {
              style: {
                width: "100%",
                overflow: "auto",
                display: "flex",
                gap: "40px"
              },
              children: surveys.map((survey, index) => /* @__PURE__ */jsxRuntimeExports.jsx(Box, {
                sx: {
                  minWidth: "21rem",
                  margin: "1rem 0rem"
                },
                children: /* @__PURE__ */jsxRuntimeExports.jsx(Survey, {
                  survey,
                  example: true
                }, survey.id)
              }, index))
            })]
          });
        };
        const createUserCard = "_createUserCard_zrfc2_1";
        const formGroup = "_formGroup_zrfc2_9";
        const rightContainer = "_rightContainer_zrfc2_16";
        const createButton = "_createButton_zrfc2_24";
        const surveyNameInput = "_surveyNameInput_zrfc2_39";
        const selectInput = "_selectInput_zrfc2_55";
        const errorText = "_errorText_zrfc2_63";
        const styles = {
          createUserCard: createUserCard,
          formGroup: formGroup,
          rightContainer: rightContainer,
          createButton: createButton,
          surveyNameInput: surveyNameInput,
          selectInput: selectInput,
          errorText: errorText
        };
        const surveyMode_options = [{
          value: SURVEY_MODE.WEB,
          label: `mode.${SURVEY_MODE.WEB}`
        }, {
          value: SURVEY_MODE.OFFLINE,
          label: `mode.${SURVEY_MODE.OFFLINE}`
        }, {
          value: SURVEY_MODE.MIXED,
          label: `mode.${SURVEY_MODE.MIXED}`
        }];
        function CreateSurvey({
          onSurveyCreated
        }) {
          const surveyService = useService("survey");
          const _useTranslation3 = useTranslation("manage"),
            t = _useTranslation3.t;
          const dispatch = useDispatch();
          const defaultValues = {
            surveyName: "",
            surveyMode: SURVEY_MODE.MIXED,
            surveyActiveFrom: "",
            surveyActiveTo: ""
          };
          const CreateSurveySchema = create$3().shape({
            surveyName: create$6().required(t("survey_required"))
          });
          const methods = useForm({
            resolver: o(CreateSurveySchema),
            defaultValues
          });
          const setError = methods.setError,
            reset = methods.reset,
            handleSubmit = methods.handleSubmit,
            isSubmitting = methods.formState.isSubmitting;
          const onSubmit = handleSubmit( /*#__PURE__*/function () {
            var _ref2 = _asyncToGenerator(function* (data) {
              dispatch(setLoading(true));
              const model = {
                name: data.surveyName,
                usage: data.surveyMode
              };
              if (data.surveyActiveFrom) {
                model.startDate = localDateToServerDateTime(surveyActiveFrom);
              }
              if (data.surveyActiveTo) {
                model.endDate = localDateToServerDateTime(surveyActiveTo);
              }
              surveyService.createSurvey(model).then(() => {
                if (onSurveyCreated) {
                  onSurveyCreated();
                  reset();
                }
              }).catch(processedError => {
                if (processedError.name == PROCESSED_ERRORS.DUPLICATE_SURVEY_NAME.name) {
                  setError("surveyName", {
                    type: "manual",
                    message: t(`processed_errors.${processedError.name}`)
                  });
                } else if (processedError.name == PROCESSED_ERRORS.INVALID_SURVEY_DATES.name) {
                  setError("surveyActiveFrom", {
                    type: "manual",
                    message: t(`processed_errors.${processedError.name}`)
                  });
                }
              }).finally(() => {
                dispatch(setLoading(false));
              });
            });
            return function (_x) {
              return _ref2.apply(this, arguments);
            };
          }());
          return /* @__PURE__ */jsxRuntimeExports.jsx(Card, {
            className: styles.createUserCard,
            children: /* @__PURE__ */jsxRuntimeExports.jsx(FormProvider, {
              methods,
              onSubmit,
              children: /* @__PURE__ */jsxRuntimeExports.jsxs(Box, {
                rowGap: 2.5,
                columnGap: 2,
                display: "grid",
                gridTemplateColumns: {
                  xs: "repeat(1, 1fr)",
                  md: "repeat(3, 1fr)"
                },
                children: [/* @__PURE__ */jsxRuntimeExports.jsx(RHFTextField, {
                  name: "surveyName",
                  label: "Survey Name"
                }), /* @__PURE__ */jsxRuntimeExports.jsx(RHFSelect, {
                  name: "surveyMode",
                  label: "Survey Mode",
                  children: surveyMode_options.map(option => /* @__PURE__ */jsxRuntimeExports.jsx("option", {
                    value: option.value,
                    children: t(option.label)
                  }, option.value))
                }), /* @__PURE__ */jsxRuntimeExports.jsx(LoadingButton, {
                  fullWidth: true,
                  size: "large",
                  color: "primary",
                  type: "submit",
                  variant: "contained",
                  loading: isSubmitting,
                  children: t("action_btn.create")
                })]
              })
            })
          });
        }
        function Dashboard() {
          var _surveys$surveys;
          const surveyService = useService("survey");
          const _reactExports$useStat = reactExports.useState(null),
            _reactExports$useStat2 = _slicedToArray(_reactExports$useStat, 2),
            surveys = _reactExports$useStat2[0],
            setSurveys = _reactExports$useStat2[1];
          const _reactExports$useStat3 = reactExports.useState([]),
            _reactExports$useStat4 = _slicedToArray(_reactExports$useStat3, 2),
            guestSurveys = _reactExports$useStat4[0],
            setGuestSurveys = _reactExports$useStat4[1];
          const _reactExports$useStat5 = reactExports.useState(true),
            _reactExports$useStat6 = _slicedToArray(_reactExports$useStat5, 2),
            fetchingSurveys = _reactExports$useStat6[0],
            setFetchingSurveys = _reactExports$useStat6[1];
          const _reactExports$useStat7 = reactExports.useState(1),
            _reactExports$useStat8 = _slicedToArray(_reactExports$useStat7, 2),
            page = _reactExports$useStat8[0],
            setPage = _reactExports$useStat8[1];
          const _reactExports$useStat9 = reactExports.useState(5),
            _reactExports$useStat10 = _slicedToArray(_reactExports$useStat9, 2),
            perPage = _reactExports$useStat10[0],
            setPerPage = _reactExports$useStat10[1];
          const _reactExports$useStat11 = reactExports.useState("all"),
            _reactExports$useStat12 = _slicedToArray(_reactExports$useStat11, 2),
            status = _reactExports$useStat12[0],
            setStatus = _reactExports$useStat12[1];
          const _reactExports$useStat13 = reactExports.useState("last_modified_desc"),
            _reactExports$useStat14 = _slicedToArray(_reactExports$useStat13, 2),
            sortBy = _reactExports$useStat14[0],
            setSortBy = _reactExports$useStat14[1];
          const _reactExports$useStat15 = reactExports.useState(false),
            _reactExports$useStat16 = _slicedToArray(_reactExports$useStat15, 2),
            openCloneModal = _reactExports$useStat16[0],
            setOpenCloneModal = _reactExports$useStat16[1];
          const _reactExports$useStat17 = reactExports.useState(),
            _reactExports$useStat18 = _slicedToArray(_reactExports$useStat17, 2),
            cloningSurvey = _reactExports$useStat18[0],
            setCloningSurvey = _reactExports$useStat18[1];
          const dispatch = useDispatch();
          const _useTranslation4 = useTranslation("manage"),
            t = _useTranslation4.t;
          const processApirror = e => {
            setFetchingSurveys(false);
          };
          const fetchSurveys = () => {
            surveyService.getAllSurveys(page, perPage, status, sortBy).then(data => {
              if (data) {
                setFetchingSurveys(false);
                setSurveys(data);
              }
            }).catch(e => processApirror());
          };
          reactExports.useEffect(() => {
            fetchSurveys();
          }, [page, perPage, sortBy, status]);
          reactExports.useEffect(() => {
            surveyService.getGuestsSurveys().then(data => {
              if (data) {
                setGuestSurveys(data);
              }
            }).catch(e => processApirror());
          }, []);
          const handleSurveyStatusChange = (id, newStatus) => {
            setSurveys(prevState => _objectSpread(_objectSpread({}, prevState), {}, {
              surveys: prevState.surveys.map(survey => survey.id === id ? _objectSpread(_objectSpread({}, survey), {}, {
                status: newStatus
              }) : survey)
            }));
          };
          const shouldShowClickAdd = () => {
            const roles = TokenService.getUser().roles;
            if (roles.indexOf(ROLES.SUPER_ADMIN) > -1 || roles.indexOf(ROLES.SURVEY_ADMIN) > -1) {
              return true;
            }
            return false;
          };
          const _onDelete = survey => {
            if (window.confirm(t("edit_survey.delete_survey", {
              survey_name: survey.name
            }))) {
              deleteSurvey(survey.id);
            }
          };
          const _onClose = survey => {
            if (window.confirm(t("edit_survey.close_survey", {
              survey_name: survey.name
            }))) {
              closeSurvey(survey.id);
            }
          };
          const _onClone = survey => {
            setCloningSurvey(survey);
            setOpenCloneModal(true);
          };
          const deleteSurvey = id => {
            dispatch(setLoading(true));
            surveyService.deleteSurvey(id).then(() => {
              fetchSurveys();
            }).catch(e => {
              dispatch(setLoading(false));
            }).finally(() => {
              dispatch(setLoading(false));
            });
          };
          const closeSurvey = id => {
            dispatch(setLoading(true));
            surveyService.closeSurvey(id).then(data => {
              handleSurveyStatusChange(id, "closed");
            }).catch(processedError => {
              if (processedError.name == PROCESSED_ERRORS.INVALID_SURVEY_DATES.name) {
                setSurveyDateError(t(`processed_errors.${processed.name}`));
              }
            }).finally(() => {
              dispatch(setLoading(false));
            });
          };
          return /* @__PURE__ */jsxRuntimeExports.jsxs(Box, {
            className: styles$3.mainContainer,
            children: [/* @__PURE__ */jsxRuntimeExports.jsxs(Container, {
              children: [/* @__PURE__ */jsxRuntimeExports.jsxs(Box, {
                className: styles$3.content,
                children: [shouldShowClickAdd() && /* @__PURE__ */jsxRuntimeExports.jsx(CreateSurvey, {
                  onSurveyCreated: fetchSurveys
                }), /* @__PURE__ */jsxRuntimeExports.jsx(HeaderContent, {
                  filter: status,
                  onFilterSelected: el => {
                    setPage(1);
                    setStatus(el.target.value);
                  },
                  sort: sortBy,
                  onSortSelected: el => {
                    setPage(1);
                    setSortBy(el.target.value);
                  }
                }), !fetchingSurveys ? /* @__PURE__ */jsxRuntimeExports.jsx(Box, {
                  sx: {
                    mt: 3,
                    columnGap: 4,
                    display: "grid",
                    rowGap: {
                      xs: 4,
                      md: 5
                    },
                    gridTemplateColumns: {
                      xs: "repeat(1, 1fr)",
                      sm: "repeat(2, 1fr)",
                      md: "repeat(3, 1fr)"
                    }
                  },
                  children: surveys === null || surveys === void 0 || (_surveys$surveys = surveys.surveys) === null || _surveys$surveys === void 0 ? void 0 : _surveys$surveys.map(survey => {
                    return /* @__PURE__ */jsxRuntimeExports.jsx(Survey, {
                      survey,
                      onStatusChange: handleSurveyStatusChange,
                      onClone: () => _onClone(survey),
                      onDelete: () => _onDelete(survey),
                      onClose: () => _onClose(survey)
                    }, survey.id);
                  })
                }) : /* @__PURE__ */jsxRuntimeExports.jsx(LoadingDots, {}), surveys && /* @__PURE__ */jsxRuntimeExports.jsx(TablePagination, {
                  rowsPerPageOptions: [5, 10, 20, 50],
                  component: "div",
                  labelDisplayedRows: ({
                    from,
                    to,
                    count,
                    page: page2
                  }) => {
                    return t("responses.label_displayed_rows", {
                      from,
                      to,
                      count
                    });
                  },
                  labelRowsPerPage: t("responses.label_rows_per_page"),
                  count: surveys === null || surveys === void 0 ? void 0 : surveys.totalCount,
                  rowsPerPage: perPage,
                  page: page - 1,
                  onPageChange: (event, newPage) => {
                    setPage(newPage + 1);
                  },
                  onRowsPerPageChange: event => {
                    setPerPage(parseInt(event.target.value, 10));
                    setPage(1);
                  }
                })]
              }), /* @__PURE__ */jsxRuntimeExports.jsx(TemplateSlider, {
                surveys: guestSurveys
              })]
            }), /* @__PURE__ */jsxRuntimeExports.jsx(SurveyClone, {
              open: openCloneModal,
              onClose: cloned => {
                setOpenCloneModal(false);
                if (cloned) {
                  fetchSurveys();
                }
              },
              survey: cloningSurvey
            })]
          });
        }
      }
    };
  });
})();
//# sourceMappingURL=index-legacy-Dyj_ycIX.js.map
