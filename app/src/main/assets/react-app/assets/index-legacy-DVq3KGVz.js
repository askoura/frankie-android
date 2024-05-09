;
(function () {
  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
  function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
  System.register(['./index-legacy-vEA8K-LS.js', './Web-legacy-BheMkDx6.js', './use-service-legacy-Bcxdqe8R.js', './TableRow-legacy-BZZ4sy_S.js', './TableHead-legacy-D-0jq4Dv.js', './TableCell-legacy-Dp59XReJ.js', './Checkbox-legacy-DVZrBJdJ.js', './SwitchBase-legacy-CDK6BOac.js', './DatePicker-legacy-BnaJqr5R.js', './Grid-legacy-Dnj6MD-w.js', './radioClasses-legacy-Dh2-Btlo.js', './tableRowClasses-legacy-vYv7lYPf.js', './FormControlLabel-legacy-CId-AnH7.js', './TextField-legacy-Dx6AYM0D.js'], function (exports, module) {
    'use strict';

    var React, reactExports, jsxRuntimeExports, Box, LoadingDots, formatlocalDateTime, serverDateTimeToLocalDateTime, useService, useTranslation, useDispatch, Paper, previewUrl, TableContainer, Table, TableRow, TableBody, TableHead, TableCell;
    return {
      setters: [module => {
        React = module.R;
        reactExports = module.r;
        jsxRuntimeExports = module.j;
        Box = module.B;
        LoadingDots = module.L;
      }, module => {
        formatlocalDateTime = module.v;
        serverDateTimeToLocalDateTime = module.e;
      }, module => {
        useService = module.J;
        useTranslation = module.E;
        useDispatch = module.K;
        Paper = module.j;
        previewUrl = module.a_;
      }, module => {
        TableContainer = module.T;
        Table = module.a;
        TableRow = module.b;
        TableBody = module.c;
      }, module => {
        TableHead = module.T;
      }, module => {
        TableCell = module.T;
      }, null, null, null, null, null, null, null, null],
      execute: function execute() {
        var __vite_style__ = document.createElement('style');
        __vite_style__.textContent = "._mainContainer_xvbke_1 {\n  margin: auto;\n  padding-top: 16px;\n  max-width: 800px;\n  min-width: 300px;\n  height: 100%;\n  overflow: auto;\n}\n\n._loadingWrapper_xvbke_10 {\n  width: 100%;\n  height: 100%;\n  text-align: center;\n  padding-top: 100px;\n}\n";
        document.head.appendChild(__vite_style__);
        const mainContainer = "_mainContainer_xvbke_1";
        const loadingWrapper = "_loadingWrapper_xvbke_10";
        const styles = {
          mainContainer: mainContainer,
          loadingWrapper: loadingWrapper
        };
        function ResponsesEvent({
          responseId
        }) {
          const surveyService = useService("survey");
          const _useTranslation = useTranslation("manage"),
            t = _useTranslation.t;
          const _reactExports$useStat = reactExports.useState(true),
            _reactExports$useStat2 = _slicedToArray(_reactExports$useStat, 2),
            fetching = _reactExports$useStat2[0],
            setFetching = _reactExports$useStat2[1];
          useDispatch();
          const processApirror = e => {
            setFetching(false);
          };
          const _reactExports$useStat3 = reactExports.useState(null),
            _reactExports$useStat4 = _slicedToArray(_reactExports$useStat3, 2),
            eventResponse = _reactExports$useStat4[0],
            setEventResponse = _reactExports$useStat4[1];
          const fetchResponses = () => {
            setFetching(true);
            surveyService.eventResponse(responseId).then(data => {
              if (data) {
                setEventResponse(data.data);
              }
              setFetching(false);
            }).catch(err => {
              processApirror();
            });
          };
          reactExports.useEffect(() => {
            fetchResponses();
          }, []);
          return /* @__PURE__ */jsxRuntimeExports.jsx(Box, {
            className: styles.mainContainer,
            children: fetching ? /* @__PURE__ */jsxRuntimeExports.jsx("div", {
              className: styles.loadingWrapper,
              children: /* @__PURE__ */jsxRuntimeExports.jsx(LoadingDots, {})
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
        const index = exports("default", React.memo(ResponsesEvent));
      }
    };
  });
})();
//# sourceMappingURL=index-legacy-DVq3KGVz.js.map
