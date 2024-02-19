;
(function () {
  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
  function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
  System.register(['./index-legacy-T3s18jo3.js', './Web-legacy-LDhM2X1u.js', './DatePicker-legacy-9Ey9K3I7.js', './Grid-legacy-ZQipiKyz.js', './TextField-legacy-vL2OdS5Q.js', './FormControlLabel-legacy-0Ne4M7i6.js', './Checkbox-legacy-8hCFdihe.js', './SwitchBase-legacy-VpMr3A_z.js'], function (exports, module) {
    'use strict';

    var createSvgIcon, jsxRuntimeExports, useTranslation, useNavigate, useDispatch, useParams, reactExports, setLoading, onApiError, Box, Card, Typography, onError, PROCESSED_ERRORS, AuthService;
    return {
      setters: [module => {
        createSvgIcon = module.c;
        jsxRuntimeExports = module.j;
        useTranslation = module.x;
        useNavigate = module.w;
        useDispatch = module.z;
        useParams = module.ap;
        reactExports = module.r;
        setLoading = module.D;
        onApiError = module.a3;
        Box = module.B;
        Card = module.bt;
        Typography = module.a0;
        onError = module.a7;
        PROCESSED_ERRORS = module.a4;
      }, module => {
        AuthService = module.A;
      }, null, null, null, null, null, null],
      execute: function execute() {
        var __vite_style__ = document.createElement('style');
        __vite_style__.textContent = "._card_ubg1u_1 {\n  padding: 5rem;\n  max-width: 550px;\n  width: 100%;\n  text-align: center;\n  border-radius: 13px !important;\n}\n\n._errorText_ubg1u_9 {\n  color: #eb5757;\n}\n";
        document.head.appendChild(__vite_style__);
        exports('default', ConfirmSignup);
        const MarkEmailRead = createSvgIcon( /*#__PURE__*/jsxRuntimeExports.jsx("path", {
          d: "M12 19c0-3.87 3.13-7 7-7 1.08 0 2.09.25 3 .68V6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h8.08c-.05-.33-.08-.66-.08-1zM4 6l8 5 8-5v2l-8 5-8-5V6zm13.34 16-3.54-3.54 1.41-1.41 2.12 2.12 4.24-4.24L23 16.34 17.34 22z"
        }), 'MarkEmailRead');
        const card = "_card_ubg1u_1";
        const errorText = "_errorText_ubg1u_9";
        const styles = {
          card: card,
          errorText: errorText
        };
        function ConfirmSignup() {
          const _useTranslation = useTranslation("manage"),
            t = _useTranslation.t;
          const navigate = useNavigate();
          const dispatch = useDispatch();
          const _useParams = useParams(),
            token = _useParams.token;
          const _reactExports$useStat = reactExports.useState(""),
            _reactExports$useStat2 = _slicedToArray(_reactExports$useStat, 2),
            error = _reactExports$useStat2[0],
            setError = _reactExports$useStat2[1];
          const _reactExports$useStat3 = reactExports.useState(false),
            _reactExports$useStat4 = _slicedToArray(_reactExports$useStat3, 2),
            success = _reactExports$useStat4[0],
            setSuccess = _reactExports$useStat4[1];
          const redirecOnSuccess = data => {
            navigate("/");
          };
          reactExports.useEffect(() => {
            confirmSignup();
          }, []);
          const confirmSignup = () => {
            dispatch(setLoading(true));
            AuthService.confirmSignup(token).then(data => {
              setSuccess(true);
              setTimeout(() => {
                redirecOnSuccess();
              }, 1e4);
            }).catch(e => {
              onApiError({
                error: e,
                globalErrorHandler: processedError => {
                  dispatch(onError(processedError));
                },
                locallErrorHandler: processedError => {
                  if (processedError.name == PROCESSED_ERRORS.USED_CONFIRMATION_TOKEN.name || processedError.name == PROCESSED_ERRORS.EXPIRED_CONFIRMATION_TOKEN.name) {
                    setError(processed);
                  }
                }
              });
            }).finally(() => {
              dispatch(setLoading(false));
            });
          };
          return /* @__PURE__ */jsxRuntimeExports.jsx(Box, {
            sx: {
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "calc(100vh - 80px)",
              overflow: "auto",
              width: "100vw",
              backgroundColor: "#f7f8fc"
            },
            children: /* @__PURE__ */jsxRuntimeExports.jsxs(Card, {
              className: styles.card,
              children: [success && /* @__PURE__ */jsxRuntimeExports.jsxs(Box, {
                sx: {
                  display: "flex",
                  flexDirection: "column",
                  gap: "3rem",
                  alignItems: "center"
                },
                children: [/* @__PURE__ */jsxRuntimeExports.jsx(MarkEmailRead, {
                  sx: {
                    fontSize: "5rem",
                    color: "#181735"
                  }
                }), /* @__PURE__ */jsxRuntimeExports.jsx(Typography, {
                  variant: "h5",
                  fontWeight: "600",
                  children: t("confirm_signup.success")
                }), /* @__PURE__ */jsxRuntimeExports.jsx(Typography, {
                  variant: "subtitle1",
                  children: t("confirm_signup.info")
                })]
              }), error && /* @__PURE__ */jsxRuntimeExports.jsx(Box, {
                className: styles.errorText,
                children: t(`processed_errors.${error}`)
              })]
            })
          });
        }
      }
    };
  });
})();
//# sourceMappingURL=index-legacy-N72ZFWyl.js.map
