;
(function () {
  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
  function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
  System.register(['./index-legacy-0a320ccd.js', './AuthService-legacy-05326db5.js', './common-legacy-ead0190d.js', './index-legacy-1e533d6a.js', './common-legacy-ff14325d.js', './Card-legacy-22580478.js', './index-legacy-28828365.js'], function (exports, module) {
    'use strict';

    var __vite_style__ = document.createElement('style');
    __vite_style__.textContent = "._card_1seyg_1 {\n  padding: 20px;\n  max-width: 400px;\n  width: 100%;\n  text-align: center;\n}\n\n._errorText_1seyg_8 {\n  color: #eb5757;\n}\n";
    document.head.appendChild(__vite_style__);
    var useNavigate, useParams, reactExports, processError, PROCESSED_ERRORS, jsxRuntimeExports, AuthService, hostnameSubdomain, urlWithSubdomain, AuthWrap, useTranslation, Box, Card;
    return {
      setters: [function (module) {
        useNavigate = module.u;
        useParams = module.a;
        reactExports = module.r;
        processError = module.p;
        PROCESSED_ERRORS = module.P;
        jsxRuntimeExports = module.j;
      }, function (module) {
        AuthService = module.A;
      }, function (module) {
        hostnameSubdomain = module.h;
        urlWithSubdomain = module.u;
      }, function (module) {
        AuthWrap = module.A;
      }, function (module) {
        useTranslation = module.u;
        Box = module.B;
      }, function (module) {
        Card = module.C;
      }, null],
      execute: function execute() {
        exports('default', ConfirmSignup);
        var card = "_card_1seyg_1";
        var errorText = "_errorText_1seyg_8";
        var styles = {
          card: card,
          errorText: errorText
        };
        function ConfirmSignup() {
          var _useTranslation = useTranslation("manage"),
            t = _useTranslation.t;
          var navigate = useNavigate();
          var _useParams = useParams(),
            token = _useParams.token;
          var _reactExports$useStat = reactExports.useState(false),
            _reactExports$useStat2 = _slicedToArray(_reactExports$useStat, 2),
            loading = _reactExports$useStat2[0],
            setLoading = _reactExports$useStat2[1];
          var _reactExports$useStat3 = reactExports.useState(""),
            _reactExports$useStat4 = _slicedToArray(_reactExports$useStat3, 2),
            processedError = _reactExports$useStat4[0],
            setProcessedError = _reactExports$useStat4[1];
          var _reactExports$useStat5 = reactExports.useState(false),
            _reactExports$useStat6 = _slicedToArray(_reactExports$useStat5, 2),
            success = _reactExports$useStat6[0],
            setSuccess = _reactExports$useStat6[1];
          var _reactExports$useStat7 = reactExports.useState(false),
            _reactExports$useStat8 = _slicedToArray(_reactExports$useStat7, 2),
            showError = _reactExports$useStat8[0],
            setShowError = _reactExports$useStat8[1];
          var redirecOnSuccess = function redirecOnSuccess(data) {
            var subdomain = hostnameSubdomain();
            if (subdomain === data.subdomain) {
              navigate("/");
            } else {
              window.location.replace(urlWithSubdomain(data.subdomain));
            }
          };
          reactExports.useEffect(function () {
            confirmSignup();
          }, []);
          var confirmSignup = function confirmSignup() {
            setLoading(true);
            AuthService.confirmSignup(token).then(function (data) {
              setSuccess(true);
              setTimeout(function () {
                redirecOnSuccess(data);
              }, 1e4);
            }).catch(function (e) {
              setSuccess(false);
              var processed = processError(e);
              switch (processed) {
                case PROCESSED_ERRORS.NETWORK_ERR:
                case PROCESSED_ERRORS.BACKEND_DOWN:
                  setShowError(true);
                  setProcessedError(processed);
                  break;
                case PROCESSED_ERRORS.USED_CONFIRMATION_TOKEN:
                case PROCESSED_ERRORS.EXPIRED_CONFIRMATION_TOKEN:
                  setProcessedError(processed);
                  break;
              }
            }).finally(function () {
              setLoading(false);
            });
          };
          return /* @__PURE__ */jsxRuntimeExports.jsx(AuthWrap, {
            loading: loading,
            showError: showError,
            processedError: processedError,
            handleClose: function handleClose() {
              return setShowError(false);
            },
            children: /* @__PURE__ */jsxRuntimeExports.jsxs(Card, {
              className: styles.card,
              children: [success && t("confirm_signup.success"), processedError && /* @__PURE__ */jsxRuntimeExports.jsx(Box, {
                className: styles.errorText,
                children: t("processed_errors.".concat(processedError))
              })]
            })
          });
        }
      }
    };
  });
})();
