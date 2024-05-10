;
(function () {
  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
  function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
  System.register(['./index-legacy-vEA8K-LS.js', './Delete-legacy-B8XrK9VC.js', './use-service-legacy-Bcxdqe8R.js', './Web-legacy-BheMkDx6.js', './DatePicker-legacy-BnaJqr5R.js', './TableRow-legacy-BZZ4sy_S.js', './TableHead-legacy-D-0jq4Dv.js', './TableCell-legacy-Dp59XReJ.js', './TablePagination-legacy-DkCQFPSP.js', './Checkbox-legacy-DVZrBJdJ.js', './SwitchBase-legacy-CDK6BOac.js', './radioClasses-legacy-Dh2-Btlo.js', './tableRowClasses-legacy-vYv7lYPf.js', './FormControlLabel-legacy-CId-AnH7.js', './TextField-legacy-Dx6AYM0D.js', './Grid-legacy-Dnj6MD-w.js', './Toolbar-legacy-BeIwS6lj.js'], function (exports, module) {
    'use strict';

    var jsxRuntimeExports, interopRequireDefaultExports, Box, commonjsGlobal, getDefaultExportFromCjs, React, reactExports, useParams, LoadingDots, Link, default_1$1, createSvgIcon, requireCreateSvgIcon, useTranslation, Modal, Typography, Button, useService, useDispatch, Paper, stripTags, IconButton, truncateWithEllipsis, previewUrl, RHFSwitch, formatlocalDateTime, serverDateTimeToLocalDateTime, Tabs, Tab, TableContainer, Table, TableRow, TableBody, TableHead, TableCell, TablePagination;
    return {
      setters: [module => {
        jsxRuntimeExports = module.j;
        interopRequireDefaultExports = module.q;
        Box = module.B;
        commonjsGlobal = module.p;
        getDefaultExportFromCjs = module.w;
        React = module.R;
        reactExports = module.r;
        useParams = module.u;
        LoadingDots = module.L;
        Link = module.al;
      }, module => {
        default_1$1 = module.d;
      }, module => {
        createSvgIcon = module.f;
        requireCreateSvgIcon = module.D;
        useTranslation = module.E;
        Modal = module.ao;
        Typography = module.T;
        Button = module.ap;
        useService = module.J;
        useDispatch = module.K;
        Paper = module.j;
        stripTags = module.bh;
        IconButton = module.I;
        truncateWithEllipsis = module.bH;
        previewUrl = module.a_;
      }, module => {
        RHFSwitch = module.t;
        formatlocalDateTime = module.v;
        serverDateTimeToLocalDateTime = module.e;
      }, module => {
        Tabs = module.T;
        Tab = module.a;
      }, module => {
        TableContainer = module.T;
        Table = module.a;
        TableRow = module.b;
        TableBody = module.c;
      }, module => {
        TableHead = module.T;
      }, module => {
        TableCell = module.T;
      }, module => {
        TablePagination = module.T;
      }, null, null, null, null, null, null, null, null],
      execute: function execute() {
        var __vite_style__ = document.createElement('style');
        __vite_style__.textContent = "._mainContainer_14aat_1 {\n  margin: auto;\n  padding: 2rem 3rem;\n  min-width: 300px;\n  height: 100%;\n  overflow: auto;\n  display: flex;\n  flex-direction: column;\n  gap: 60px;\n}\n\n._loadingWrapper_14aat_12 {\n  width: 100%;\n  height: 100%;\n  text-align: center;\n  padding-top: 100px;\n}\n\n._cardContent_14aat_19 {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 2rem 1.5rem;\n  border-radius: 18px;\n  background-color: #fff;\n}\n._wrapper_d86h8_1 {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  background: #ffffff;\n  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);\n  border-radius: 8px;\n  padding: 20px;\n}\n\n._action_d86h8_12{\n  text-align: end;\n  margin-top: 16px;\n}\n";
        document.head.appendChild(__vite_style__);
        const ArrowOutward = createSvgIcon( /*#__PURE__*/jsxRuntimeExports.jsx("path", {
          d: "M6 6v2h8.59L5 17.59 6.41 19 16 9.41V18h2V6z"
        }), 'ArrowOutward');
        var Event = {};
        var _interopRequireDefault = interopRequireDefaultExports;
        Object.defineProperty(Event, "__esModule", {
          value: true
        });
        var default_1 = Event.default = void 0;
        var _createSvgIcon = _interopRequireDefault(requireCreateSvgIcon());
        var _jsxRuntime = jsxRuntimeExports;
        var _default = (0, _createSvgIcon.default)( /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
          d: "M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z"
        }), 'Event');
        default_1 = Event.default = _default;
        const mainContainer = "_mainContainer_14aat_1";
        const loadingWrapper = "_loadingWrapper_14aat_12";
        const cardContent = "_cardContent_14aat_19";
        const styles$1 = {
          mainContainer: mainContainer,
          loadingWrapper: loadingWrapper,
          cardContent: cardContent
        };
        const wrapper = "_wrapper_d86h8_1";
        const action = "_action_d86h8_12";
        const styles = {
          wrapper: wrapper,
          action: action
        };
        const ResponseDelete = ({
          open,
          onClose,
          onDelete
        }) => {
          const _useTranslation = useTranslation("manage"),
            t = _useTranslation.t;
          return /* @__PURE__ */jsxRuntimeExports.jsx(Modal, {
            sx: {
              ".MuiBackdrop-root": {
                backgroundColor: "rgba(0, 0, 0, 0.3)"
              }
            },
            open,
            onClose,
            "aria-labelledby": "modal-modal-title",
            "aria-describedby": "modal-modal-description",
            children: /* @__PURE__ */jsxRuntimeExports.jsxs(Box, {
              className: styles.wrapper,
              children: [/* @__PURE__ */jsxRuntimeExports.jsx(Typography, {
                children: t("responses.title_delete_response")
              }), /* @__PURE__ */jsxRuntimeExports.jsxs(Box, {
                className: styles.action,
                children: [/* @__PURE__ */jsxRuntimeExports.jsx(Button, {
                  onClick: onDelete,
                  children: t("action_btn.delete")
                }), /* @__PURE__ */jsxRuntimeExports.jsx(Button, {
                  onClick: onClose,
                  children: t("action_btn.cancel")
                })]
              })]
            })
          });
        };
        var FileSaver_min = {
          exports: {}
        };
        (function (module, exports) {
          (function (a, b) {
            b();
          })(commonjsGlobal, function () {
            function b(a, b) {
              return "undefined" == typeof b ? b = {
                autoBom: !1
              } : "object" != typeof b && (console.warn("Deprecated: Expected third argument to be a object"), b = {
                autoBom: !b
              }), b.autoBom && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(a.type) ? new Blob(["\uFEFF", a], {
                type: a.type
              }) : a;
            }
            function c(a, b, c) {
              var d = new XMLHttpRequest();
              d.open("GET", a), d.responseType = "blob", d.onload = function () {
                g(d.response, b, c);
              }, d.onerror = function () {
                console.error("could not download file");
              }, d.send();
            }
            function d(a) {
              var b = new XMLHttpRequest();
              b.open("HEAD", a, !1);
              try {
                b.send();
              } catch (a) {}
              return 200 <= b.status && 299 >= b.status;
            }
            function e(a) {
              try {
                a.dispatchEvent(new MouseEvent("click"));
              } catch (c) {
                var b = document.createEvent("MouseEvents");
                b.initMouseEvent("click", !0, !0, window, 0, 0, 0, 80, 20, !1, !1, !1, !1, 0, null), a.dispatchEvent(b);
              }
            }
            var f = "object" == typeof window && window.window === window ? window : "object" == typeof self && self.self === self ? self : "object" == typeof commonjsGlobal && commonjsGlobal.global === commonjsGlobal ? commonjsGlobal : void 0,
              a = f.navigator && /Macintosh/.test(navigator.userAgent) && /AppleWebKit/.test(navigator.userAgent) && !/Safari/.test(navigator.userAgent),
              g = f.saveAs || ("object" != typeof window || window !== f ? function () {} : "download" in HTMLAnchorElement.prototype && !a ? function (b, g, h) {
                var i = f.URL || f.webkitURL,
                  j = document.createElement("a");
                g = g || b.name || "download", j.download = g, j.rel = "noopener", "string" == typeof b ? (j.href = b, j.origin === location.origin ? e(j) : d(j.href) ? c(b, g, h) : e(j, j.target = "_blank")) : (j.href = i.createObjectURL(b), setTimeout(function () {
                  i.revokeObjectURL(j.href);
                }, 4E4), setTimeout(function () {
                  e(j);
                }, 0));
              } : "msSaveOrOpenBlob" in navigator ? function (f, g, h) {
                if (g = g || f.name || "download", "string" != typeof f) navigator.msSaveOrOpenBlob(b(f, h), g);else if (d(f)) c(f, g, h);else {
                  var i = document.createElement("a");
                  i.href = f, i.target = "_blank", setTimeout(function () {
                    e(i);
                  });
                }
              } : function (b, d, e, g) {
                if (g = g || open("", "_blank"), g && (g.document.title = g.document.body.innerText = "downloading..."), "string" == typeof b) return c(b, d, e);
                var h = "application/octet-stream" === b.type,
                  i = /constructor/i.test(f.HTMLElement) || f.safari,
                  j = /CriOS\/[\d]+/.test(navigator.userAgent);
                if ((j || h && i || a) && "undefined" != typeof FileReader) {
                  var k = new FileReader();
                  k.onloadend = function () {
                    var a = k.result;
                    a = j ? a : a.replace(/^data:[^;]*;/, "data:attachment/file;"), g ? g.location.href = a : location = a, g = null;
                  }, k.readAsDataURL(b);
                } else {
                  var l = f.URL || f.webkitURL,
                    m = l.createObjectURL(b);
                  g ? g.location = m : location.href = m, g = null, setTimeout(function () {
                    l.revokeObjectURL(m);
                  }, 4E4);
                }
              });
            f.saveAs = g.saveAs = g, module.exports = g;
          });
        })(FileSaver_min);
        var FileSaver_minExports = FileSaver_min.exports;
        const FileSaver = /*@__PURE__*/getDefaultExportFromCjs(FileSaver_minExports);
        function ResponsesSurvey({
          viewEvents
        }) {
          const surveyService = useService("survey");
          const _useTranslation2 = useTranslation("manage"),
            t = _useTranslation2.t;
          const _reactExports$useStat = reactExports.useState(true),
            _reactExports$useStat2 = _slicedToArray(_reactExports$useStat, 2),
            fetching = _reactExports$useStat2[0],
            setFetching = _reactExports$useStat2[1];
          useDispatch();
          const _reactExports$useStat3 = reactExports.useState(false),
            _reactExports$useStat4 = _slicedToArray(_reactExports$useStat3, 2),
            dbResponses = _reactExports$useStat4[0],
            setDbResponses = _reactExports$useStat4[1];
          const _reactExports$useStat5 = reactExports.useState("none"),
            _reactExports$useStat6 = _slicedToArray(_reactExports$useStat5, 2),
            completeResponses = _reactExports$useStat6[0],
            setCompleteResponses = _reactExports$useStat6[1];
          const _reactExports$useStat7 = reactExports.useState(null),
            _reactExports$useStat8 = _slicedToArray(_reactExports$useStat7, 2),
            surveyor = _reactExports$useStat8[0],
            setSurveyor = _reactExports$useStat8[1];
          const _useParams = useParams(),
            surveyId = _useParams.surveyId;
          const processApirror = e => {
            setFetching(false);
          };
          const _reactExports$useStat9 = reactExports.useState(null),
            _reactExports$useStat10 = _slicedToArray(_reactExports$useStat9, 2),
            allResponse = _reactExports$useStat10[0],
            setAllResponse = _reactExports$useStat10[1];
          const _reactExports$useStat11 = reactExports.useState(1),
            _reactExports$useStat12 = _slicedToArray(_reactExports$useStat11, 2),
            page = _reactExports$useStat12[0],
            setPage = _reactExports$useStat12[1];
          const _reactExports$useStat13 = reactExports.useState(10),
            _reactExports$useStat14 = _slicedToArray(_reactExports$useStat13, 2),
            rowsPerPage = _reactExports$useStat14[0],
            setRowsPerPage = _reactExports$useStat14[1];
          const exportResponses = () => {
            setFetching(true);
            surveyService.exportResponses(surveyId, dbResponses, completeResponses).then(data => {
              if (data) {
                var file = new File([data], `${surveyId}-responses-export.csv`, {
                  type: "text/csv;charset=utf-8"
                });
                FileSaver.saveAs(file);
              }
              setFetching(false);
            }).catch(err => {
              processApirror();
            });
          };
          const onSurveyorClicked = response => {
            setCompleteResponses("none");
            setSurveyor(response.surveyorID);
          };
          const findBoolean = response => {
            switch (response) {
              case "true":
                return true;
              case "false":
                return false;
              case "none":
              default:
                return void 0;
            }
          };
          const fetchResponses = () => {
            setFetching(true);
            const updateCompleteResponses = findBoolean(completeResponses);
            surveyService.allResponse(surveyId, dbResponses, page, rowsPerPage, updateCompleteResponses, surveyor).then(data => {
              if (data) {
                setAllResponse(data);
              }
              setFetching(false);
            }).catch(err => {
              processApirror();
            });
          };
          reactExports.useEffect(() => {
            fetchResponses();
          }, [page, rowsPerPage, dbResponses, completeResponses, surveyor]);
          const _reactExports$useStat15 = reactExports.useState(),
            _reactExports$useStat16 = _slicedToArray(_reactExports$useStat15, 2),
            responseToDelete = _reactExports$useStat16[0],
            setResponseToDelete = _reactExports$useStat16[1];
          const onCloseModal = () => {
            setResponseToDelete(null);
          };
          const deleteResponse = () => {
            onCloseModal();
            surveyService.deleteResponse(surveyId, responseToDelete.id).then(() => {
              fetchResponses();
            }).catch(e => {
              processApirror();
            });
          };
          const tabValues = {
            SHOW_ALL: "none",
            SHOW_COMPLETED: "true",
            SHOW_INCOMPLETE: "false"
          };
          return /* @__PURE__ */jsxRuntimeExports.jsxs(Box, {
            className: styles$1.mainContainer,
            children: [/* @__PURE__ */jsxRuntimeExports.jsxs(Box, {
              display: "flex",
              flexWrap: {
                xs: "wrap",
                sm: "wrap",
                md: "nowrap"
              },
              gap: 10,
              children: [/* @__PURE__ */jsxRuntimeExports.jsxs(Box, {
                width: "100%",
                className: styles$1.cardContent,
                children: [/* @__PURE__ */jsxRuntimeExports.jsx(Typography, {
                  variant: "h5",
                  color: "primary",
                  fontWeight: 600,
                  children: t("responses.raw_values")
                }), /* @__PURE__ */jsxRuntimeExports.jsx(RHFSwitch, {
                  checked: dbResponses,
                  onChange: event => {
                    setDbResponses(event.target.checked);
                  }
                })]
              }), /* @__PURE__ */jsxRuntimeExports.jsxs(Box, {
                width: "100%",
                className: styles$1.cardContent,
                children: [/* @__PURE__ */jsxRuntimeExports.jsx(Typography, {
                  variant: "h5",
                  color: "primary",
                  fontWeight: 600,
                  children: t("responses.export")
                }), /* @__PURE__ */jsxRuntimeExports.jsx(Button, {
                  sx: {
                    minWidth: "50px"
                  },
                  color: "primary",
                  disabled: surveyor || false,
                  size: "small",
                  variant: "contained",
                  onClick: () => exportResponses(),
                  children: /* @__PURE__ */jsxRuntimeExports.jsx(ArrowOutward, {})
                })]
              })]
            }), /* @__PURE__ */jsxRuntimeExports.jsxs(Box, {
              display: "flex",
              alignItems: "center",
              sx: {
                borderBottom: 1,
                borderColor: "divider"
              },
              children: [/* @__PURE__ */jsxRuntimeExports.jsx(Typography, {
                color: "primary",
                variant: "h4",
                fontWeight: 600,
                sx: {
                  width: "33%"
                },
                children: t("responses.filter_completed")
              }), /* @__PURE__ */jsxRuntimeExports.jsxs(Tabs, {
                sx: {
                  width: "100%"
                },
                value: completeResponses,
                onChange: (event, newValue) => {
                  setPage(1);
                  setCompleteResponses(newValue);
                },
                textColor: "primary",
                indicatorColor: "primary",
                variant: "fullWidth",
                children: [/* @__PURE__ */jsxRuntimeExports.jsx(Tab, {
                  disabled: surveyor || false,
                  label: t("responses.filter_completed_show_all"),
                  value: tabValues.SHOW_ALL
                }), /* @__PURE__ */jsxRuntimeExports.jsx(Tab, {
                  disabled: surveyor || false,
                  label: t("responses.filter_completed_show_completed"),
                  value: tabValues.SHOW_COMPLETED
                }), /* @__PURE__ */jsxRuntimeExports.jsx(Tab, {
                  disabled: surveyor || false,
                  label: t("responses.filter_completed_show_incomplete"),
                  value: tabValues.SHOW_INCOMPLETE
                })]
              })]
            }), surveyor && /* @__PURE__ */jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
              children: [/* @__PURE__ */jsxRuntimeExports.jsx("br", {}), /* @__PURE__ */jsxRuntimeExports.jsx(Button, {
                sx: {
                  margin: "8px"
                },
                onClick: () => setSurveyor(null),
                children: t("responses.reset_surveyor_filter")
              })]
            }), fetching ? /* @__PURE__ */jsxRuntimeExports.jsx("div", {
              className: styles$1.loadingWrapper,
              children: /* @__PURE__ */jsxRuntimeExports.jsx(LoadingDots, {})
            }) : /* @__PURE__ */jsxRuntimeExports.jsxs(Paper, {
              sx: {
                width: "100%",
                background: "transparent",
                mb: 2
              },
              children: [/* @__PURE__ */jsxRuntimeExports.jsx(TableContainer, {
                component: Paper,
                children: /* @__PURE__ */jsxRuntimeExports.jsxs(Table, {
                  sx: {
                    minWidth: 650
                  },
                  "aria-label": "simple table",
                  children: [/* @__PURE__ */jsxRuntimeExports.jsx(TableHead, {
                    children: allResponse && /* @__PURE__ */jsxRuntimeExports.jsxs(TableRow, {
                      children: [/* @__PURE__ */jsxRuntimeExports.jsx(TableCell, {}, "btns"), /* @__PURE__ */jsxRuntimeExports.jsx(TableCell, {
                        align: "left",
                        children: "ID"
                      }, "id"), /* @__PURE__ */jsxRuntimeExports.jsx(TableCell, {
                        align: "left",
                        children: t("responses.preview")
                      }, "preview"), /* @__PURE__ */jsxRuntimeExports.jsx(TableCell, {
                        align: "left",
                        children: t("label.surveyor")
                      }, "surveyor"), /* @__PURE__ */jsxRuntimeExports.jsx(TableCell, {
                        align: "left",
                        children: t("responses.version")
                      }, "version"), /* @__PURE__ */jsxRuntimeExports.jsx(TableCell, {
                        align: "left",
                        children: t("responses.ip_addr")
                      }, "ip"), /* @__PURE__ */jsxRuntimeExports.jsx(TableCell, {
                        align: "left",
                        children: t("responses.start_date")
                      }, "start_date"), /* @__PURE__ */jsxRuntimeExports.jsx(TableCell, {
                        align: "left",
                        children: t("responses.submit_date")
                      }, "submit_date"), /* @__PURE__ */jsxRuntimeExports.jsx(TableCell, {
                        align: "left",
                        children: t("responses.lang")
                      }, "lang"), Object.values(allResponse === null || allResponse === void 0 ? void 0 : allResponse.columnNames).map(label => {
                        return /* @__PURE__ */jsxRuntimeExports.jsx(TableCell, {
                          align: "left",
                          children: stripTags(label)
                        }, label);
                      })]
                    })
                  }), /* @__PURE__ */jsxRuntimeExports.jsx(TableBody, {
                    children: allResponse === null || allResponse === void 0 ? void 0 : allResponse.responses.map(response => {
                      return /* @__PURE__ */jsxRuntimeExports.jsxs(TableRow, {
                        sx: {
                          minHeight: "100px"
                        },
                        children: [/* @__PURE__ */jsxRuntimeExports.jsx(TableCell, {
                          align: "left",
                          children: /* @__PURE__ */jsxRuntimeExports.jsxs(Box, {
                            sx: {
                              display: "flex"
                            },
                            children: [/* @__PURE__ */jsxRuntimeExports.jsx(IconButton, {
                              onClick: () => {
                                setResponseToDelete(response);
                              },
                              children: /* @__PURE__ */jsxRuntimeExports.jsx(default_1$1, {})
                            }), response.hasEvents && /* @__PURE__ */jsxRuntimeExports.jsx(IconButton, {
                              onClick: () => viewEvents(response.id),
                              children: /* @__PURE__ */jsxRuntimeExports.jsx(default_1, {})
                            })]
                          })
                        }, "btns"), /* @__PURE__ */jsxRuntimeExports.jsx(TableCell, {
                          align: "left",
                          children: response.id
                        }, "id"), /* @__PURE__ */jsxRuntimeExports.jsx(TableCell, {
                          align: "left",
                          children: JSON.stringify(response.preview)
                        }, "preview"), /* @__PURE__ */jsxRuntimeExports.jsx(TableCell, {
                          align: "left",
                          children: response.surveyorName ? /* @__PURE__ */jsxRuntimeExports.jsx(Link, {
                            onClick: () => {
                              onSurveyorClicked(response);
                            },
                            children: response.surveyorName
                          }) : ""
                        }, "surveyor"), /* @__PURE__ */jsxRuntimeExports.jsx(TableCell, {
                          align: "left",
                          children: response.version
                        }, "version"), /* @__PURE__ */jsxRuntimeExports.jsx(TableCell, {
                          align: "left",
                          children: response.ipAddress
                        }, "ip"), /* @__PURE__ */jsxRuntimeExports.jsx(TableCell, {
                          align: "left",
                          children: formatlocalDateTime(serverDateTimeToLocalDateTime(response.startDate))
                        }, "startDate"), /* @__PURE__ */jsxRuntimeExports.jsx(TableCell, {
                          align: "left",
                          children: response.submitDate ? formatlocalDateTime(serverDateTimeToLocalDateTime(response.submitDate)) : " - "
                        }, "submitDate"), /* @__PURE__ */jsxRuntimeExports.jsx(TableCell, {
                          align: "left",
                          children: response.lang.code
                        }, "lang"), response.values.map((value, index) => {
                          return /* @__PURE__ */jsxRuntimeExports.jsx(TableCell, {
                            align: "left",
                            children: value === null || value === void 0 || value === "" ? " - " : typeof value === "string" ? truncateWithEllipsis(value, 25) : typeof value === "object" && "size" in value && "filename" in value && "stored_filename" in value ? /* @__PURE__ */jsxRuntimeExports.jsxs("a", {
                              target: "_blank",
                              download: value.stored_filename,
                              href: previewUrl(value.stored_filename),
                              children: [value.filename, " -", Math.round(value.size / 1e3) + "K"]
                            }) : JSON.stringify(value)
                          }, index);
                        })]
                      }, response.id);
                    })
                  })]
                })
              }), /* @__PURE__ */jsxRuntimeExports.jsx(TablePagination, {
                rowsPerPageOptions: [10, 25, 50, 100],
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
                count: allResponse === null || allResponse === void 0 ? void 0 : allResponse.totalCount,
                rowsPerPage,
                page: page - 1,
                onPageChange: (event, newPage) => {
                  setPage(newPage + 1);
                },
                onRowsPerPageChange: event => {
                  setRowsPerPage(parseInt(event.target.value, 10));
                  setPage(1);
                }
              })]
            }), Boolean(responseToDelete) && /* @__PURE__ */jsxRuntimeExports.jsx(ResponseDelete, {
              onDelete: deleteResponse,
              open: Boolean(responseToDelete),
              onClose: onCloseModal
            })]
          });
        }
        const index = exports("default", React.memo(ResponsesSurvey));
      }
    };
  });
})();
//# sourceMappingURL=index-legacy-C5wQn-XT.js.map