;
(function () {
  System.register(['./index-legacy-23e2ff21.js', './common-legacy-594d3ceb.js', './index-legacy-d69c410e.js', './index-legacy-2c5c28ac.js', './DateUtils-legacy-89eb9ddb.js', './TableRow-legacy-2e060d19.js', './AuthService-legacy-6db348de.js', './ArrowBack-legacy-f3473451.js', './LogoutOutlined-legacy-89bd80ca.js'], function (exports, module) {
    'use strict';

    var __vite_style__ = document.createElement('style');
    __vite_style__.textContent = "._mainContainer_1gfdk_1 {\n  margin: auto;\n  max-width: 800px;\n  min-width: 300px;\n}\n\n._loadingWrapper_1gfdk_7 {\n  width: 100%;\n  height: 100%;\n  text-align: center;\n  padding-top: 100px;\n}\n";
    document.head.appendChild(__vite_style__);
    var reactExports, useParams, jsxRuntimeExports, CircularProgress, SurveyService, processError, PROCESSED_ERRORS, useTranslation, rtlLanguage, Box, Typography, Paper, Header, ProcessedError, formatlocalDateTime, serverDateTimeToLocalDateTime, TableContainer, Table, TableHead, TableRow, TableCell, TableBody;
    return {
      setters: [module => {
        reactExports = module.r;
        useParams = module.a;
        jsxRuntimeExports = module.j;
        CircularProgress = module.C;
        SurveyService = module.S;
        processError = module.p;
        PROCESSED_ERRORS = module.P;
      }, module => {
        useTranslation = module.u;
        rtlLanguage = module.r;
        Box = module.B;
        Typography = module.T;
        Paper = module.P;
      }, module => {
        Header = module.H;
      }, module => {
        ProcessedError = module.P;
      }, module => {
        formatlocalDateTime = module.f;
        serverDateTimeToLocalDateTime = module.s;
      }, module => {
        TableContainer = module.T;
        Table = module.a;
        TableHead = module.b;
        TableRow = module.c;
        TableCell = module.d;
        TableBody = module.e;
      }, null, null, null],
      execute: function () {
        exports('default', ResponsesSurvey);
        const mainContainer = "_mainContainer_1gfdk_1";
        const loadingWrapper = "_loadingWrapper_1gfdk_7";
        const styles = {
          mainContainer: mainContainer,
          loadingWrapper: loadingWrapper
        };
        function ResponsesSurvey() {
          const {
            t,
            i18n
          } = useTranslation("manage");
          rtlLanguage.includes(i18n.language) ? "rtl" : "ltr";
          const [fetching, setFetching] = reactExports.useState(true);
          const [processedError, setProcessedError] = reactExports.useState("");
          const [showError, setShowError] = reactExports.useState(false);
          const {
            surveyId,
            responseId
          } = useParams();
          const processApirror = e => {
            setFetching(false);
            const processed = processError(e);
            switch (processed) {
              case PROCESSED_ERRORS.NETWORK_ERR:
              case PROCESSED_ERRORS.BACKEND_DOWN:
                setShowError(true);
                setProcessedError(processed);
                break;
            }
          };
          const [eventResponse, setEventResponse] = reactExports.useState(null);
          const fetchResponses = () => {
            setFetching(true);
            SurveyService.eventResponse(surveyId, responseId).then(data => {
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
          return /* @__PURE__ */jsxRuntimeExports.jsxs(Box, {
            className: styles.mainContainer,
            children: [showError && /* @__PURE__ */jsxRuntimeExports.jsx(ProcessedError, {
              error: processedError,
              handleClose: () => setShowError(false)
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
