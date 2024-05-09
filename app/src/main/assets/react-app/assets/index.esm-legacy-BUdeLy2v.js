;
(function () {
  const _excluded = ["onSuccess", "onError", "useOneTap", "promptMomentNotification", "type", "theme", "size", "text", "shape", "logo_alignment", "width", "locale", "click_listener", "containerProps"];
  function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
  function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : String(i); }
  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
  function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
  function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
  System.register(['./index-legacy-vEA8K-LS.js'], function (exports, module) {
    'use strict';

    var reactExports, React;
    return {
      setters: [module => {
        reactExports = module.r;
        React = module.R;
      }],
      execute: function execute() {
        exports({
          G: GoogleOAuthProvider,
          a: GoogleLogin
        });
        function useLoadGsiScript(options = {}) {
          const nonce = options.nonce,
            onScriptLoadSuccess = options.onScriptLoadSuccess,
            onScriptLoadError = options.onScriptLoadError;
          const _reactExports$useStat = reactExports.useState(false),
            _reactExports$useStat2 = _slicedToArray(_reactExports$useStat, 2),
            scriptLoadedSuccessfully = _reactExports$useStat2[0],
            setScriptLoadedSuccessfully = _reactExports$useStat2[1];
          const onScriptLoadSuccessRef = reactExports.useRef(onScriptLoadSuccess);
          onScriptLoadSuccessRef.current = onScriptLoadSuccess;
          const onScriptLoadErrorRef = reactExports.useRef(onScriptLoadError);
          onScriptLoadErrorRef.current = onScriptLoadError;
          reactExports.useEffect(() => {
            const scriptTag = document.createElement('script');
            scriptTag.src = 'https://accounts.google.com/gsi/client';
            scriptTag.async = true;
            scriptTag.defer = true;
            scriptTag.nonce = nonce;
            scriptTag.onload = () => {
              var _a;
              setScriptLoadedSuccessfully(true);
              (_a = onScriptLoadSuccessRef.current) === null || _a === void 0 ? void 0 : _a.call(onScriptLoadSuccessRef);
            };
            scriptTag.onerror = () => {
              var _a;
              setScriptLoadedSuccessfully(false);
              (_a = onScriptLoadErrorRef.current) === null || _a === void 0 ? void 0 : _a.call(onScriptLoadErrorRef);
            };
            document.body.appendChild(scriptTag);
            return () => {
              document.body.removeChild(scriptTag);
            };
          }, [nonce]);
          return scriptLoadedSuccessfully;
        }
        const GoogleOAuthContext = reactExports.createContext(null);
        function GoogleOAuthProvider({
          clientId,
          nonce,
          onScriptLoadSuccess,
          onScriptLoadError,
          children
        }) {
          const scriptLoadedSuccessfully = useLoadGsiScript({
            nonce,
            onScriptLoadSuccess,
            onScriptLoadError
          });
          const contextValue = reactExports.useMemo(() => ({
            clientId,
            scriptLoadedSuccessfully
          }), [clientId, scriptLoadedSuccessfully]);
          return React.createElement(GoogleOAuthContext.Provider, {
            value: contextValue
          }, children);
        }
        function useGoogleOAuth() {
          const context = reactExports.useContext(GoogleOAuthContext);
          if (!context) {
            throw new Error('Google OAuth components must be used within GoogleOAuthProvider');
          }
          return context;
        }
        function extractClientId(credentialResponse) {
          var _a;
          const clientId = (_a = credentialResponse === null || credentialResponse === void 0 ? void 0 : credentialResponse.clientId) !== null && _a !== void 0 ? _a : credentialResponse === null || credentialResponse === void 0 ? void 0 : credentialResponse.client_id;
          return clientId;
        }
        const containerHeightMap = {
          large: 40,
          medium: 32,
          small: 20
        };
        function GoogleLogin(_ref) {
          let onSuccess = _ref.onSuccess,
            onError = _ref.onError,
            useOneTap = _ref.useOneTap,
            promptMomentNotification = _ref.promptMomentNotification,
            _ref$type = _ref.type,
            type = _ref$type === void 0 ? 'standard' : _ref$type,
            _ref$theme = _ref.theme,
            theme = _ref$theme === void 0 ? 'outline' : _ref$theme,
            _ref$size = _ref.size,
            size = _ref$size === void 0 ? 'large' : _ref$size,
            text = _ref.text,
            shape = _ref.shape,
            logo_alignment = _ref.logo_alignment,
            width = _ref.width,
            locale = _ref.locale,
            click_listener = _ref.click_listener,
            containerProps = _ref.containerProps,
            props = _objectWithoutProperties(_ref, _excluded);
          const btnContainerRef = reactExports.useRef(null);
          const _useGoogleOAuth = useGoogleOAuth(),
            clientId = _useGoogleOAuth.clientId,
            scriptLoadedSuccessfully = _useGoogleOAuth.scriptLoadedSuccessfully;
          const onSuccessRef = reactExports.useRef(onSuccess);
          onSuccessRef.current = onSuccess;
          const onErrorRef = reactExports.useRef(onError);
          onErrorRef.current = onError;
          const promptMomentNotificationRef = reactExports.useRef(promptMomentNotification);
          promptMomentNotificationRef.current = promptMomentNotification;
          reactExports.useEffect(() => {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j;
            if (!scriptLoadedSuccessfully) return;
            (_c = (_b = (_a = window === null || window === void 0 ? void 0 : window.google) === null || _a === void 0 ? void 0 : _a.accounts) === null || _b === void 0 ? void 0 : _b.id) === null || _c === void 0 ? void 0 : _c.initialize(_objectSpread({
              client_id: clientId,
              callback: credentialResponse => {
                var _a;
                if (!(credentialResponse === null || credentialResponse === void 0 ? void 0 : credentialResponse.credential)) {
                  return (_a = onErrorRef.current) === null || _a === void 0 ? void 0 : _a.call(onErrorRef);
                }
                const credential = credentialResponse.credential,
                  select_by = credentialResponse.select_by;
                onSuccessRef.current({
                  credential,
                  clientId: extractClientId(credentialResponse),
                  select_by
                });
              }
            }, props));
            (_f = (_e = (_d = window === null || window === void 0 ? void 0 : window.google) === null || _d === void 0 ? void 0 : _d.accounts) === null || _e === void 0 ? void 0 : _e.id) === null || _f === void 0 ? void 0 : _f.renderButton(btnContainerRef.current, {
              type,
              theme,
              size,
              text,
              shape,
              logo_alignment,
              width,
              locale,
              click_listener
            });
            if (useOneTap) (_j = (_h = (_g = window === null || window === void 0 ? void 0 : window.google) === null || _g === void 0 ? void 0 : _g.accounts) === null || _h === void 0 ? void 0 : _h.id) === null || _j === void 0 ? void 0 : _j.prompt(promptMomentNotificationRef.current);
            return () => {
              var _a, _b, _c;
              if (useOneTap) (_c = (_b = (_a = window === null || window === void 0 ? void 0 : window.google) === null || _a === void 0 ? void 0 : _a.accounts) === null || _b === void 0 ? void 0 : _b.id) === null || _c === void 0 ? void 0 : _c.cancel();
            };
            // eslint-disable-next-line react-hooks/exhaustive-deps
          }, [clientId, scriptLoadedSuccessfully, useOneTap, type, theme, size, text, shape, logo_alignment, width, locale]);
          return React.createElement("div", _objectSpread(_objectSpread({}, containerProps), {}, {
            ref: btnContainerRef,
            style: _objectSpread({
              height: containerHeightMap[size]
            }, containerProps === null || containerProps === void 0 ? void 0 : containerProps.style)
          }));
        }
      }
    };
  });
})();
//# sourceMappingURL=index.esm-legacy-BUdeLy2v.js.map
