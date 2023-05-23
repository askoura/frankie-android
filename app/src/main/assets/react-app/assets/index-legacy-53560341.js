;
(function () {
  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
  function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
  System.register(['./index-legacy-99c8bdce.js', './UserService-legacy-dd52f6c0.js', './index-legacy-079123c8.js', './common-legacy-ddf67078.js', './Card-legacy-546eef4a.js', './roles-legacy-bc9370bd.js', './Stack-legacy-43ce0828.js', './DateUtils-legacy-9d062644.js', './Edit-legacy-9f6111db.js', './index-legacy-bffbe42c.js', './AuthService-legacy-302554fd.js', './ArrowBack-legacy-2cc9add9.js', './LogoutOutlined-legacy-d64ecb63.js'], function (exports, module) {
    'use strict';

    var __vite_style__ = document.createElement('style');
    __vite_style__.textContent = "._mainContainer_629d6_1 {\n  margin: auto;\n  max-width: 800px;\n  min-width: 300px;\n}\n\n._content_629d6_7 {\n  margin-top: 30px;\n}\n\n._loadingWrapper_629d6_11 {\n  width: 100%;\n  height: 100%;\n  text-align: center;\n  padding-top: 50px;\n}\n._byRoleWrap_1dxko_1 {\n  margin-top: 10px;\n  padding: 15px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n._surveyHeader_1yxw9_1 {\n  padding: 5px;\n  color: #fff;\n  text-transform: capitalize;\n}\n\n._contentCard_1yxw9_7 {\n  padding: 5px;\n}\n\n._actionBtn_1yxw9_11 {\n  margin-top: 30px;\n  display: flex;\n  justify-content: space-between;\n}\n";
    document.head.appendChild(__vite_style__);
    var createSvgIcon, jsxRuntimeExports, useNavigate, TokenService, Link, reactExports, SurveyService, CircularProgress, processError, PROCESSED_ERRORS, UserService, routes, Header, useTranslation, Box, Button, Typography, IconButton, Card, ROLES, isSurveyAdmin, Stack, dayMonthUeatFormat, serverDateTimeToLocalDateTime, Edit, ProcessedError;
    return {
      setters: [function (module) {
        createSvgIcon = module.c;
        jsxRuntimeExports = module.j;
        useNavigate = module.u;
        TokenService = module.T;
        Link = module.L;
        reactExports = module.r;
        SurveyService = module.S;
        CircularProgress = module.C;
        processError = module.p;
        PROCESSED_ERRORS = module.P;
      }, function (module) {
        UserService = module.U;
      }, function (module) {
        routes = module.r;
        Header = module.H;
      }, function (module) {
        useTranslation = module.u;
        Box = module.B;
        Button = module.b;
        Typography = module.T;
        IconButton = module.a;
      }, function (module) {
        Card = module.C;
      }, function (module) {
        ROLES = module.R;
        isSurveyAdmin = module.i;
      }, function (module) {
        Stack = module.S;
      }, function (module) {
        dayMonthUeatFormat = module.d;
        serverDateTimeToLocalDateTime = module.s;
      }, function (module) {
        Edit = module.E;
      }, function (module) {
        ProcessedError = module.P;
      }, null, null, null],
      execute: function execute() {
        exports('default', Dashboard);
        var Add = createSvgIcon( /*#__PURE__*/jsxRuntimeExports.jsx("path", {
          d: "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"
        }), 'Add');
        var Palette = createSvgIcon( /*#__PURE__*/jsxRuntimeExports.jsx("path", {
          d: "M12 2C6.49 2 2 6.49 2 12s4.49 10 10 10c1.38 0 2.5-1.12 2.5-2.5 0-.61-.23-1.2-.64-1.67-.08-.1-.13-.21-.13-.33 0-.28.22-.5.5-.5H16c3.31 0 6-2.69 6-6 0-4.96-4.49-9-10-9zm5.5 11c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm-3-4c-.83 0-1.5-.67-1.5-1.5S13.67 6 14.5 6s1.5.67 1.5 1.5S15.33 9 14.5 9zM5 11.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5S7.33 13 6.5 13 5 12.33 5 11.5zm6-4c0 .83-.67 1.5-1.5 1.5S8 8.33 8 7.5 8.67 6 9.5 6s1.5.67 1.5 1.5z"
        }), 'Palette');
        var Preview = createSvgIcon( /*#__PURE__*/jsxRuntimeExports.jsx("path", {
          d: "M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm0 16H5V7h14v12zm-5.5-6c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5.67-1.5 1.5-1.5 1.5.67 1.5 1.5zM12 9c-2.73 0-5.06 1.66-6 4 .94 2.34 3.27 4 6 4s5.06-1.66 6-4c-.94-2.34-3.27-4-6-4zm0 6.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"
        }), 'Preview');
        var mainContainer = "_mainContainer_629d6_1";
        var content = "_content_629d6_7";
        var loadingWrapper = "_loadingWrapper_629d6_11";
        var styles$2 = {
          mainContainer: mainContainer,
          content: content,
          loadingWrapper: loadingWrapper
        };
        var byRoleWrap = "_byRoleWrap_1dxko_1";
        var styles$1 = {
          byRoleWrap: byRoleWrap
        };
        var CountsByRole = function CountsByRole(_ref) {
          var countByRole = _ref.countByRole;
          var navigate = useNavigate();
          var _useTranslation = useTranslation("manage"),
            t = _useTranslation.t;
          return /* @__PURE__ */jsxRuntimeExports.jsxs(Card, {
            className: styles$1.byRoleWrap,
            children: [/* @__PURE__ */jsxRuntimeExports.jsxs(Box, {
              children: [/* @__PURE__ */jsxRuntimeExports.jsxs(Box, {
                component: "b",
                children: [/* @__PURE__ */jsxRuntimeExports.jsxs(Box, {
                  component: "span",
                  children: [countByRole === null || countByRole === void 0 ? void 0 : countByRole.superAdmin, " ", t("super_admins"), " ,"]
                }), /* @__PURE__ */jsxRuntimeExports.jsxs(Box, {
                  component: "span",
                  children: [countByRole === null || countByRole === void 0 ? void 0 : countByRole.surveyAdmin, " ", t("admins"), ","]
                }), /* @__PURE__ */jsxRuntimeExports.jsxs(Box, {
                  component: "span",
                  children: [countByRole === null || countByRole === void 0 ? void 0 : countByRole.analyst, " ", t("analysts"), ","]
                }), /* @__PURE__ */jsxRuntimeExports.jsxs(Box, {
                  component: "span",
                  children: [countByRole === null || countByRole === void 0 ? void 0 : countByRole.surveyor, " ", t("surveyors"), ","]
                }), /* @__PURE__ */jsxRuntimeExports.jsxs(Box, {
                  component: "span",
                  children: [countByRole === null || countByRole === void 0 ? void 0 : countByRole.surveyorAuditor, " ", t("surveyor_auditor")]
                })]
              }), /* @__PURE__ */jsxRuntimeExports.jsxs(Box, {
                component: "span",
                children: [" ", t("registered")]
              })]
            }), /* @__PURE__ */jsxRuntimeExports.jsx(Button, {
              onClick: function onClick() {
                navigate(routes.manageUsers);
              },
              children: t("manage_users")
            })]
          });
        };
        var HeaderContent = function HeaderContent() {
          var navigate = useNavigate();
          var _useTranslation2 = useTranslation("manage"),
            t = _useTranslation2.t;
          var clickAdd = function clickAdd() {
            navigate(routes.createSurvey);
          };
          var shouldShowClickAdd = function shouldShowClickAdd() {
            var roles = TokenService.getUser().roles;
            if (roles.indexOf(ROLES.SUPER_ADMIN) > -1 || roles.indexOf(ROLES.SURVEY_ADMIN) > -1) {
              return true;
            }
            return false;
          };
          return /* @__PURE__ */jsxRuntimeExports.jsx(Stack, {
            sx: {
              p: "10px"
            },
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            children: /* @__PURE__ */jsxRuntimeExports.jsxs(Stack, {
              flexDirection: "row",
              alignItems: "center",
              gap: 2,
              children: [/* @__PURE__ */jsxRuntimeExports.jsx(Typography, {
                sx: {
                  fontSize: "20px"
                },
                children: t("my_surveys")
              }), shouldShowClickAdd() && /* @__PURE__ */jsxRuntimeExports.jsxs(Button, {
                onClick: clickAdd,
                children: [/* @__PURE__ */jsxRuntimeExports.jsx(Add, {}), t("new_survey")]
              })]
            })
          });
        };
        var surveyHeader = "_surveyHeader_1yxw9_1";
        var contentCard = "_contentCard_1yxw9_7";
        var actionBtn = "_actionBtn_1yxw9_11";
        var styles = {
          surveyHeader: surveyHeader,
          contentCard: contentCard,
          actionBtn: actionBtn
        };
        var STATUS = {
          DRAFT: "draft",
          CLOSED: "closed",
          ACTIVE: "active",
          EXPIRED: "expired",
          SCHEDULED: "schedules"
        };
        var BG = {
          LIGHTBLUE: "lightblue",
          RED: "red",
          GREEN: "green",
          ORANGE: "orange",
          GRAY: "gray"
        };
        var status = function status(survey) {
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
        var bgHeader = function bgHeader(status2) {
          switch (status2) {
            case STATUS.DRAFT:
              return BG.LIGHTBLUE;
            case STATUS.CLOSED:
              return BG.RED;
            case STATUS.EXPIRED:
              return BG.ORANGE;
            case STATUS.SCHEDULED:
              return BG.GRAY;
            case STATUS.ACTIVE:
              return BG.GREEN;
            default:
              return;
          }
        };
        var Survey = function Survey(_ref2) {
          var survey = _ref2.survey;
          var _useTranslation3 = useTranslation("manage"),
            t = _useTranslation3.t;
          var surveyStatus = status(survey);
          return /* @__PURE__ */jsxRuntimeExports.jsxs(Card, {
            sx: {
              borderRadius: "10px"
            },
            children: [/* @__PURE__ */jsxRuntimeExports.jsx(Box, {
              className: styles.surveyHeader,
              sx: {
                background: bgHeader(surveyStatus)
              },
              children: surveyStatus
            }), /* @__PURE__ */jsxRuntimeExports.jsxs(Box, {
              className: styles.contentCard,
              children: [/* @__PURE__ */jsxRuntimeExports.jsx(Typography, {
                variant: "h5",
                children: survey.name
              }), /* @__PURE__ */jsxRuntimeExports.jsxs(Box, {
                sx: {
                  mt: "5px"
                },
                children: [t("added"), dayMonthUeatFormat(serverDateTimeToLocalDateTime(survey.creationDate))]
              }), /* @__PURE__ */jsxRuntimeExports.jsxs(Box, {
                children: [t("last_modified"), " ", dayMonthUeatFormat(serverDateTimeToLocalDateTime(survey.lastModified))]
              }), /* @__PURE__ */jsxRuntimeExports.jsxs(Link, {
                to: "/responses/".concat(survey.id),
                children: [t("responses_count"), " ", survey === null || survey === void 0 ? void 0 : survey.responsesCount]
              }), /* @__PURE__ */jsxRuntimeExports.jsxs(Box, {
                className: styles.actionBtn,
                children: [isSurveyAdmin() && survey.status != STATUS.CLOSED && /* @__PURE__ */jsxRuntimeExports.jsx(Link, {
                  to: "/design-survey/".concat(survey.id),
                  title: "Design",
                  children: /* @__PURE__ */jsxRuntimeExports.jsx(IconButton, {
                    children: /* @__PURE__ */jsxRuntimeExports.jsx(Palette, {})
                  })
                }), /* @__PURE__ */jsxRuntimeExports.jsx(Link, {
                  to: "/edit-survey/".concat(survey.id),
                  title: "Edit",
                  children: /* @__PURE__ */jsxRuntimeExports.jsx(IconButton, {
                    children: /* @__PURE__ */jsxRuntimeExports.jsx(Edit, {})
                  })
                }), survey.status != STATUS.CLOSED && /* @__PURE__ */jsxRuntimeExports.jsx(Link, {
                  to: "/preview-survey/".concat(survey.id),
                  title: "Preview",
                  children: /* @__PURE__ */jsxRuntimeExports.jsx(IconButton, {
                    children: /* @__PURE__ */jsxRuntimeExports.jsx(Preview, {})
                  })
                })]
              })]
            })]
          });
        };
        function Dashboard() {
          var _reactExports$useStat = reactExports.useState([]),
            _reactExports$useStat2 = _slicedToArray(_reactExports$useStat, 2),
            surveys = _reactExports$useStat2[0],
            setSurveys = _reactExports$useStat2[1];
          var _reactExports$useStat3 = reactExports.useState(true),
            _reactExports$useStat4 = _slicedToArray(_reactExports$useStat3, 2),
            fetchingSurveys = _reactExports$useStat4[0],
            setFetchingSurveys = _reactExports$useStat4[1];
          var _reactExports$useStat5 = reactExports.useState(null),
            _reactExports$useStat6 = _slicedToArray(_reactExports$useStat5, 2),
            countByRole = _reactExports$useStat6[0],
            setCountByRole = _reactExports$useStat6[1];
          var _reactExports$useStat7 = reactExports.useState(""),
            _reactExports$useStat8 = _slicedToArray(_reactExports$useStat7, 2),
            processedError = _reactExports$useStat8[0],
            setProcessedError = _reactExports$useStat8[1];
          var _reactExports$useStat9 = reactExports.useState(false),
            _reactExports$useStat10 = _slicedToArray(_reactExports$useStat9, 2),
            showError = _reactExports$useStat10[0],
            setShowError = _reactExports$useStat10[1];
          var user = TokenService.getUser();
          var isSuperAdmin = user.roles.includes(ROLES.SUPER_ADMIN);
          reactExports.useEffect(function () {
            if (isSuperAdmin) {
              UserService.getCountByRole().then(function (res) {
                if (res) {
                  setCountByRole(res);
                }
              });
            }
            var processApirror = function processApirror(e) {
              setFetchingSurveys(false);
              var processed = processError(e);
              switch (processed) {
                case PROCESSED_ERRORS.NETWORK_ERR:
                case PROCESSED_ERRORS.BACKEND_DOWN:
                  setShowError(true);
                  setProcessedError(processed);
                  break;
              }
            };
            SurveyService.getAllSurveys().then(function (data) {
              if (data) {
                setFetchingSurveys(false);
                setSurveys(data);
              }
            }).catch(function (e) {
              return processApirror(e);
            });
          }, []);
          return /* @__PURE__ */jsxRuntimeExports.jsxs(Box, {
            className: styles$2.mainContainer,
            children: [/* @__PURE__ */jsxRuntimeExports.jsx(Header, {}), showError && /* @__PURE__ */jsxRuntimeExports.jsx(ProcessedError, {
              error: processedError,
              handleClose: function handleClose() {
                return setShowError(false);
              }
            }), isSuperAdmin && /* @__PURE__ */jsxRuntimeExports.jsx(CountsByRole, {
              countByRole: countByRole
            }), /* @__PURE__ */jsxRuntimeExports.jsxs(Box, {
              className: styles$2.content,
              children: [/* @__PURE__ */jsxRuntimeExports.jsx(HeaderContent, {}), /* @__PURE__ */jsxRuntimeExports.jsx(Stack, {
                flexDirection: "row",
                gap: 4,
                flexWrap: "wrap",
                children: !fetchingSurveys ? surveys === null || surveys === void 0 ? void 0 : surveys.map(function (survey) {
                  return /* @__PURE__ */jsxRuntimeExports.jsx(Survey, {
                    survey: survey
                  }, survey.id);
                }) : /* @__PURE__ */jsxRuntimeExports.jsx("div", {
                  className: styles$2.loadingWrapper,
                  children: /* @__PURE__ */jsxRuntimeExports.jsx(CircularProgress, {})
                })
              })]
            })]
          });
        }
      }
    };
  });
})();
