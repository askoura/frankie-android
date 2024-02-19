;
(function () {
  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
  function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
  System.register(['./index-legacy-T3s18jo3.js', './Web-legacy-LDhM2X1u.js', './TableRow-legacy-QjxmKuUL.js', './TableHead-legacy-fccLWbma.js', './DatePicker-legacy-9Ey9K3I7.js', './Grid-legacy-ZQipiKyz.js', './TextField-legacy-vL2OdS5Q.js', './FormControlLabel-legacy-0Ne4M7i6.js', './Checkbox-legacy-8hCFdihe.js', './SwitchBase-legacy-VpMr3A_z.js'], function (exports, module) {
    'use strict';

    var React, useTranslation, reactExports, useDispatch, jsxRuntimeExports, Box, CircularProgress, Paper, previewUrl, SurveyService, onApiError, onError, formatlocalDateTime, serverDateTimeToLocalDateTime, TableContainer, Table, TableRow, TableCell, TableBody, TableHead;
    return {
      setters: [module => {
        React = module.R;
        useTranslation = module.x;
        reactExports = module.r;
        useDispatch = module.z;
        jsxRuntimeExports = module.j;
        Box = module.B;
        CircularProgress = module.an;
        Paper = module.P;
        previewUrl = module.b8;
        SurveyService = module.a2;
        onApiError = module.a3;
        onError = module.a7;
      }, module => {
        formatlocalDateTime = module.f;
        serverDateTimeToLocalDateTime = module.s;
      }, module => {
        TableContainer = module.T;
        Table = module.a;
        TableRow = module.b;
        TableCell = module.c;
        TableBody = module.d;
      }, module => {
        TableHead = module.T;
      }, null, null, null, null, null, null],
      execute: function execute() {
        var __vite_style__ = document.createElement('style');
        __vite_style__.textContent = "._mainContainer_18m15_1 {\n  margin: auto;\n  padding-top: 16px;\n  max-width: 800px;\n  min-width: 300px;\n  height: calc(100vh - 80px);\n  overflow: auto;\n}\n\n._loadingWrapper_18m15_10 {\n  width: 100%;\n  height: 100%;\n  text-align: center;\n  padding-top: 100px;\n}\n";
        document.head.appendChild(__vite_style__);
        const mainContainer = "_mainContainer_18m15_1";
        const loadingWrapper = "_loadingWrapper_18m15_10";
        const styles = {
          mainContainer: mainContainer,
          loadingWrapper: loadingWrapper
        };
        function ResponsesEvent({
          responseId
        }) {
          const _useTranslation = useTranslation("manage"),
            t = _useTranslation.t;
          const _reactExports$useStat = reactExports.useState(true),
            _reactExports$useStat2 = _slicedToArray(_reactExports$useStat, 2),
            fetching = _reactExports$useStat2[0],
            setFetching = _reactExports$useStat2[1];
          const dispatch = useDispatch();
          const processApirror = e => {
            setFetching(false);
            onApiError({
              error: e,
              globalErrorHandler: processedError => {
                dispatch(onError(processedError));
              }
            });
          };
          const _reactExports$useStat3 = reactExports.useState(null),
            _reactExports$useStat4 = _slicedToArray(_reactExports$useStat3, 2),
            eventResponse = _reactExports$useStat4[0],
            setEventResponse = _reactExports$useStat4[1];
          const fetchResponses = () => {
            setFetching(true);
            SurveyService.eventResponse(responseId).then(data => {
              if (data) {
                setEventResponse(data.data);
              }
              setFetching(false);
            }).catch(err => {
              processApirror(err);
            });
          };
          reactExports.useEffect(() => {
            fetchResponses();
          }, []);
          return /* @__PURE__ */jsxRuntimeExports.jsx(Box, {
            className: styles.mainContainer,
            children: fetching ? /* @__PURE__ */jsxRuntimeExports.jsx("div", {
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
                  children: eventResponse === null || eventResponse === void 0 ? void 0 : eventResponse.map(event => {
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
                        }) : event.name == "VoiceRecording" ? /* @__PURE__ */jsxRuntimeExports.jsxs("audio", {
                          controls: true,
                          children: [/* @__PURE__ */jsxRuntimeExports.jsx("source", {
                            src: previewUrl(event.fileName),
                            type: "audio/mp4"
                          }), "File not Supported"]
                        }) : event.name == "Location" ? /* @__PURE__ */jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
                          children: [/* @__PURE__ */jsxRuntimeExports.jsxs(Box, {
                            children: [/* @__PURE__ */jsxRuntimeExports.jsx("strong", {
                              children: t("label.latitude")
                            }), ":", " ", event.latitude]
                          }), /* @__PURE__ */jsxRuntimeExports.jsxs(Box, {
                            children: [/* @__PURE__ */jsxRuntimeExports.jsx("strong", {
                              children: t("label.longitude")
                            }), ":", " ", event.longitude]
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
            })
          });
        }
        const index = exports('default', React.memo(ResponsesEvent));
      }
    };
  });
})();
//# sourceMappingURL=index-legacy-B8zgDPpJ.js.map
