;
(function () {
  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
  function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
  System.register(['./index-legacy-bc4d1445.js', './common-legacy-e4fabe10.js', './index-legacy-134a0306.js', './index-legacy-f3e074d0.js', './DateUtils-legacy-9d062644.js', './TableRow-legacy-6a50dae4.js', './AuthService-legacy-33b4639d.js', './ArrowBack-legacy-7280d160.js', './LogoutOutlined-legacy-0975a2ec.js'], function (exports, module) {
    'use strict';

    var __vite_style__ = document.createElement('style');
    __vite_style__.textContent = "._mainContainer_1gfdk_1 {\n  margin: auto;\n  max-width: 800px;\n  min-width: 300px;\n}\n\n._loadingWrapper_1gfdk_7 {\n  width: 100%;\n  height: 100%;\n  text-align: center;\n  padding-top: 100px;\n}\n";
    document.head.appendChild(__vite_style__);
    var reactExports, useParams, jsxRuntimeExports, CircularProgress, SurveyService, processError, PROCESSED_ERRORS, useTranslation, rtlLanguage, Box, Typography, Paper, Header, ProcessedError, formatlocalDateTime, serverDateTimeToLocalDateTime, TableContainer, Table, TableHead, TableRow, TableCell, TableBody;
    return {
      setters: [function (module) {
        reactExports = module.r;
        useParams = module.a;
        jsxRuntimeExports = module.j;
        CircularProgress = module.C;
        SurveyService = module.S;
        processError = module.p;
        PROCESSED_ERRORS = module.P;
      }, function (module) {
        useTranslation = module.u;
        rtlLanguage = module.r;
        Box = module.B;
        Typography = module.T;
        Paper = module.P;
      }, function (module) {
        Header = module.H;
      }, function (module) {
        ProcessedError = module.P;
      }, function (module) {
        formatlocalDateTime = module.f;
        serverDateTimeToLocalDateTime = module.s;
      }, function (module) {
        TableContainer = module.T;
        Table = module.a;
        TableHead = module.b;
        TableRow = module.c;
        TableCell = module.d;
        TableBody = module.e;
      }, null, null, null],
      execute: function execute() {
        exports('default', ResponsesSurvey);
        var mainContainer = "_mainContainer_1gfdk_1";
        var loadingWrapper = "_loadingWrapper_1gfdk_7";
        var styles = {
          mainContainer: mainContainer,
          loadingWrapper: loadingWrapper
        };
        function ResponsesSurvey() {
          var _useTranslation = useTranslation("manage"),
            t = _useTranslation.t,
            i18n = _useTranslation.i18n;
          rtlLanguage.includes(i18n.language) ? "rtl" : "ltr";
          var _reactExports$useStat = reactExports.useState(true),
            _reactExports$useStat2 = _slicedToArray(_reactExports$useStat, 2),
            fetching = _reactExports$useStat2[0],
            setFetching = _reactExports$useStat2[1];
          var _reactExports$useStat3 = reactExports.useState(""),
            _reactExports$useStat4 = _slicedToArray(_reactExports$useStat3, 2),
            processedError = _reactExports$useStat4[0],
            setProcessedError = _reactExports$useStat4[1];
          var _reactExports$useStat5 = reactExports.useState(false),
            _reactExports$useStat6 = _slicedToArray(_reactExports$useStat5, 2),
            showError = _reactExports$useStat6[0],
            setShowError = _reactExports$useStat6[1];
          var _useParams = useParams(),
            surveyId = _useParams.surveyId,
            responseId = _useParams.responseId;
          var processApirror = function processApirror(e) {
            setFetching(false);
            var processed = processError(e);
            switch (processed) {
              case PROCESSED_ERRORS.NETWORK_ERR:
              case PROCESSED_ERRORS.BACKEND_DOWN:
                setShowError(true);
                setProcessedError(processed);
                break;
            }
          };
          var _reactExports$useStat7 = reactExports.useState(null),
            _reactExports$useStat8 = _slicedToArray(_reactExports$useStat7, 2),
            eventResponse = _reactExports$useStat8[0],
            setEventResponse = _reactExports$useStat8[1];
          var fetchResponses = function fetchResponses() {
            setFetching(true);
            SurveyService.eventResponse(surveyId, responseId).then(function (data) {
              if (data) {
                setEventResponse(data.data);
              }
              setFetching(false);
            }).catch(function (err) {
              processApirror(err);
            });
          };
          reactExports.useEffect(function () {
            fetchResponses();
          }, []);
          return /* @__PURE__ */jsxRuntimeExports.jsxs(Box, {
            className: styles.mainContainer,
            children: [showError && /* @__PURE__ */jsxRuntimeExports.jsx(ProcessedError, {
              error: processedError,
              handleClose: function handleClose() {
                return setShowError(false);
              }
            }), /* @__PURE__ */jsxRuntimeExports.jsx(Header, {}), /* @__PURE__ */jsxRuntimeExports.jsx(Typography, {
              variant: "h4",
              sx: {
                mb: "10px"
              },
              children: t("event_response.title")
            }), fetching ? /* @__PURE__ */jsxRuntimeExports.jsx("div", {
              className: styles.loadingWrapper,
              children: /* @__PURE__ */jsxRuntimeExports.jsx(CircularProgress, {})
            }) : /* @__PURE__ */jsxRuntimeExports.jsx(TableContainer, {
              component: Paper,
              children: /* @__PURE__ */jsxRuntimeExports.jsxs(Table, {
                sx: {
                  minWidth: 650
                },
                "aria-label": "simple table",
                children: [/* @__PURE__ */jsxRuntimeExports.jsx(TableHead, {
                  children: eventResponse && /* @__PURE__ */jsxRuntimeExports.jsxs(TableRow, {
                    children: [/* @__PURE__ */jsxRuntimeExports.jsx(TableCell, {
                      align: "left",
                      children: t("event_response.name")
                    }, "name"), /* @__PURE__ */jsxRuntimeExports.jsx(TableCell, {
                      align: "left",
                      children: t("event_response.time")
                    }, "time"), /* @__PURE__ */jsxRuntimeExports.jsx(TableCell, {
                      align: "left",
                      children: t("event_response.details")
                    }, "details")]
                  })
                }), /* @__PURE__ */jsxRuntimeExports.jsx(TableBody, {
                  children: eventResponse === null || eventResponse === void 0 ? void 0 : eventResponse.map(function (event) {
                    var _event$direction;
                    return /* @__PURE__ */jsxRuntimeExports.jsxs(TableRow, {
                      sx: {
                        minHeight: "100px"
                      },
                      children: [/* @__PURE__ */jsxRuntimeExports.jsx(TableCell, {
                        align: "left",
                        children: event.name
                      }, "name"), /* @__PURE__ */jsxRuntimeExports.jsx(TableCell, {
                        align: "left",
                        children: formatlocalDateTime(serverDateTimeToLocalDateTime(event.time))
                      }, "time"), /* @__PURE__ */jsxRuntimeExports.jsx(TableCell, {
                        align: "left",
                        children: event.name == "Navigation" ? /* @__PURE__ */jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
                          children: [/* @__PURE__ */jsxRuntimeExports.jsxs(Box, {
                            children: [/* @__PURE__ */jsxRuntimeExports.jsx("strong", {
                              children: t("label.from")
                            }), ": ", event.from]
                          }), /* @__PURE__ */jsxRuntimeExports.jsxs(Box, {
                            children: [/* @__PURE__ */jsxRuntimeExports.jsx("strong", {
                              children: t("label.to")
                            }), ": ", event.to]
                          }), /* @__PURE__ */jsxRuntimeExports.jsxs(Box, {
                            children: [/* @__PURE__ */jsxRuntimeExports.jsx("strong", {
                              children: t("event_response.direction")
                            }), ":", " ", (_event$direction = event.direction) === null || _event$direction === void 0 ? void 0 : _event$direction.name]
                          })]
                        }) : /* @__PURE__ */jsxRuntimeExports.jsxs(Box, {
                          children: [/* @__PURE__ */jsxRuntimeExports.jsx("strong", {
                            children: t("label.code")
                          }), ": ", event.code]
                        })
                      }, "details")]
                    }, event.time);
                  })
                })]
              })
            })]
          });
        }
      }
    };
  });
})();
