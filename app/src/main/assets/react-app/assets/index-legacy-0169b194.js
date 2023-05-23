;
(function () {
  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
  function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
  System.register(['./index-legacy-13317357.js', './common-legacy-88dbaa5f.js', './AuthService-legacy-ffa71593.js'], function (exports, module) {
    'use strict';

    var jsxRuntimeExports, CookiesService, reactExports, useTranslation, Select, MenuItem, setDocumentLang, rtlLanguage, Snackbar, Alert, Dialog, DialogContent, DialogActions, Button, DialogTitle;
    return {
      setters: [function (module) {
        jsxRuntimeExports = module.j;
        CookiesService = module.V;
        reactExports = module.r;
      }, function (module) {
        useTranslation = module.u;
        Select = module.c;
        MenuItem = module.d;
        setDocumentLang = module.s;
        rtlLanguage = module.r;
        Snackbar = module.S;
        Alert = module.A;
        Dialog = module.D;
        DialogContent = module.j;
        DialogActions = module.k;
        Button = module.b;
      }, function (module) {
        DialogTitle = module.D;
      }],
      execute: function execute() {
        exports('P', ProcessedError);
        var LanguageSelector = exports('L', function () {
          var _useTranslation = useTranslation(),
            i18n = _useTranslation.i18n;
          var handleChange = function handleChange(event) {
            CookiesService.setValue(event.target.value, "lang");
            i18n.changeLanguage(event.target.value);
            setDocumentLang(event.target.value);
          };
          return /* @__PURE__ */jsxRuntimeExports.jsxs(Select, {
            onChange: handleChange,
            value: i18n.language,
            sx: {
              ".MuiOutlinedInput-notchedOutline": {
                border: "none"
              }
            },
            children: [/* @__PURE__ */jsxRuntimeExports.jsx(MenuItem, {
              value: "en",
              title: "English",
              children: "EN"
            }), /* @__PURE__ */jsxRuntimeExports.jsx(MenuItem, {
              value: "de",
              title: "German",
              children: "DE"
            }), /* @__PURE__ */jsxRuntimeExports.jsx(MenuItem, {
              value: "ar",
              title: "العربية",
              children: "AR"
            })]
          });
        });
        function ProcessedError(_ref) {
          var error = _ref.error,
            variant = _ref.variant,
            handleClose = _ref.handleClose;
          var _reactExports$useStat = reactExports.useState("ltr"),
            _reactExports$useStat2 = _slicedToArray(_reactExports$useStat, 2),
            dir = _reactExports$useStat2[0],
            setDir = _reactExports$useStat2[1];
          var _useTranslation2 = useTranslation("manage"),
            t = _useTranslation2.t,
            i18n = _useTranslation2.i18n;
          reactExports.useEffect(function () {
            if (rtlLanguage.includes(i18n.language)) {
              setDir("rtl");
            } else {
              setDir("ltr");
            }
          }, [i18n.language]);
          if (variant === "toast") {
            return /* @__PURE__ */jsxRuntimeExports.jsx(Snackbar, {
              open: true,
              autoHideDuration: 2e3,
              onClose: handleClose,
              children: /* @__PURE__ */jsxRuntimeExports.jsx(Alert, {
                variant: "standard",
                severity: "error",
                onClose: handleClose,
                dir: dir,
                children: t("processed_errors.".concat(error))
              })
            });
          } else {
            return /* @__PURE__ */jsxRuntimeExports.jsxs(Dialog, {
              open: true,
              onClose: handleClose,
              "aria-labelledby": "alert-dialog-title-error",
              "aria-describedby": "alert-dialog-description",
              children: [/* @__PURE__ */jsxRuntimeExports.jsx(DialogTitle, {
                id: "alert-dialog-title-error",
                children: "Error"
              }), /* @__PURE__ */jsxRuntimeExports.jsx(DialogContent, {
                children: t("processed_errors.".concat(error))
              }), /* @__PURE__ */jsxRuntimeExports.jsx(DialogActions, {
                children: /* @__PURE__ */jsxRuntimeExports.jsx(Button, {
                  onClick: function onClick() {
                    return handleClose();
                  },
                  children: "OK"
                })
              })]
            });
          }
        }
      }
    };
  });
})();
