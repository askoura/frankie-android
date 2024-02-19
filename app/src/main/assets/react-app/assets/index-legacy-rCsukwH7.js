;
(function () {
  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
  function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
  System.register(['./index-legacy-T3s18jo3.js', './UserService-legacy-idayBd14.js', './Web-legacy-LDhM2X1u.js', './FormControlLabel-legacy-0Ne4M7i6.js', './DatePicker-legacy-9Ey9K3I7.js', './Grid-legacy-ZQipiKyz.js', './TextField-legacy-vL2OdS5Q.js', './Checkbox-legacy-8hCFdihe.js', './SwitchBase-legacy-VpMr3A_z.js'], function (exports, module) {
    'use strict';

    var createSvgIcon, jsxRuntimeExports, useNavigate, useTranslation, Card, Box, Button, Typography, TokenService, Link, reactExports, useDispatch, SurveyService, CircularProgress, onError, UserService, routes, ROLES, dayMonthUeatFormat, serverDateTimeToLocalDateTime, Stack;
    return {
      setters: [module => {
        createSvgIcon = module.c;
        jsxRuntimeExports = module.j;
        useNavigate = module.w;
        useTranslation = module.x;
        Card = module.bt;
        Box = module.B;
        Button = module.a1;
        Typography = module.a0;
        TokenService = module.T;
        Link = module.bK;
        reactExports = module.r;
        useDispatch = module.z;
        SurveyService = module.a2;
        CircularProgress = module.an;
        onError = module.a7;
      }, module => {
        UserService = module.U;
      }, module => {
        routes = module.r;
        ROLES = module.R;
        dayMonthUeatFormat = module.d;
        serverDateTimeToLocalDateTime = module.s;
      }, module => {
        Stack = module.S;
      }, null, null, null, null, null],
      execute: function execute() {
        var __vite_style__ = document.createElement('style');
        __vite_style__.textContent = "._mainContainer_7v3z2_1 {\n  margin: auto;\n  padding-right: 16px;\n  padding-left: 16px;\n  min-width: 300px;\n  height: calc(100vh - 80px);\n  overflow: auto;\n}\n\n._content_7v3z2_10 {\n  margin-top: 30px;\n}\n\n._loadingWrapper_7v3z2_14 {\n  width: 100%;\n  height: 100%;\n  text-align: center;\n  padding-top: 50px;\n}\n._byRoleWrap_1dxko_1 {\n  margin-top: 10px;\n  padding: 15px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n._surveyHeader_1yxw9_1 {\n  padding: 5px;\n  color: #fff;\n  text-transform: capitalize;\n}\n\n._contentCard_1yxw9_7 {\n  padding: 5px;\n}\n\n._actionBtn_1yxw9_11 {\n  margin-top: 30px;\n  display: flex;\n  justify-content: space-between;\n}\n";
        document.head.appendChild(__vite_style__);
        exports('default', Dashboard);
        const Add = createSvgIcon( /*#__PURE__*/jsxRuntimeExports.jsx("path", {
          d: "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"
        }), 'Add');
        const mainContainer = "_mainContainer_7v3z2_1";
        const content = "_content_7v3z2_10";
        const loadingWrapper = "_loadingWrapper_7v3z2_14";
        const styles$2 = {
          mainContainer: mainContainer,
          content: content,
          loadingWrapper: loadingWrapper
        };
        const byRoleWrap = "_byRoleWrap_1dxko_1";
        const styles$1 = {
          byRoleWrap: byRoleWrap
        };
        const CountsByRole = ({
          countByRole
        }) => {
          const navigate = useNavigate();
          const _useTranslation = useTranslation("manage"),
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
                  children: [countByRole === null || countByRole === void 0 ? void 0 : countByRole.surveyor, " ", t("surveyors"), ","]
                })]
              }), /* @__PURE__ */jsxRuntimeExports.jsxs(Box, {
                component: "span",
                children: [" ", t("registered")]
              })]
            }), /* @__PURE__ */jsxRuntimeExports.jsx(Button, {
              onClick: () => {
                navigate(routes.manageUsers);
              },
              children: t("manage_users")
            })]
          });
        };
        const HeaderContent = () => {
          const navigate = useNavigate();
          const _useTranslation2 = useTranslation("manage"),
            t = _useTranslation2.t;
          const clickAdd = () => {
            navigate(routes.createSurvey);
          };
          const shouldShowClickAdd = () => {
            const roles = TokenService.getUser().roles;
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
        const surveyHeader = "_surveyHeader_1yxw9_1";
        const contentCard = "_contentCard_1yxw9_7";
        const actionBtn = "_actionBtn_1yxw9_11";
        const styles = {
          surveyHeader: surveyHeader,
          contentCard: contentCard,
          actionBtn: actionBtn
        };
        const STATUS = {
          DRAFT: "draft",
          CLOSED: "closed",
          ACTIVE: "active",
          EXPIRED: "expired",
          SCHEDULED: "schedules"
        };
        const BG = {
          LIGHTBLUE: "lightblue",
          RED: "red",
          GREEN: "green",
          ORANGE: "orange",
          GRAY: "gray"
        };
        const status = survey => {
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
        const bgHeader = status2 => {
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
        const Survey = ({
          survey
        }) => {
          var _survey$latestVersion;
          const _useTranslation3 = useTranslation("manage"),
            t = _useTranslation3.t;
          const surveyStatus = status(survey);
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
              children: [/* @__PURE__ */jsxRuntimeExports.jsx(Link, {
                to: `/design-survey/${survey.id}`,
                title: "Design",
                children: /* @__PURE__ */jsxRuntimeExports.jsx(Typography, {
                  variant: "h5",
                  children: survey.name
                })
              }), /* @__PURE__ */jsxRuntimeExports.jsxs(Box, {
                sx: {
                  mt: "5px"
                },
                children: [t("added"), dayMonthUeatFormat(serverDateTimeToLocalDateTime(survey.creationDate))]
              }), /* @__PURE__ */jsxRuntimeExports.jsxs(Box, {
                children: [t("last_modified"), " ", dayMonthUeatFormat(serverDateTimeToLocalDateTime(survey.lastModified))]
              }), t("responses_count"), " ", survey === null || survey === void 0 ? void 0 : survey.responsesCount, (survey === null || survey === void 0 || (_survey$latestVersion = survey.latestVersion) === null || _survey$latestVersion === void 0 ? void 0 : _survey$latestVersion.published) === false && /* @__PURE__ */jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
                children: [" ", /* @__PURE__ */jsxRuntimeExports.jsx("br", {}), " ", /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                  children: "Unpublished Changes"
                }), " "]
              })]
            })]
          });
        };
        function Dashboard() {
          const _reactExports$useStat = reactExports.useState([]),
            _reactExports$useStat2 = _slicedToArray(_reactExports$useStat, 2),
            surveys = _reactExports$useStat2[0],
            setSurveys = _reactExports$useStat2[1];
          const _reactExports$useStat3 = reactExports.useState(true),
            _reactExports$useStat4 = _slicedToArray(_reactExports$useStat3, 2),
            fetchingSurveys = _reactExports$useStat4[0],
            setFetchingSurveys = _reactExports$useStat4[1];
          const _reactExports$useStat5 = reactExports.useState(null),
            _reactExports$useStat6 = _slicedToArray(_reactExports$useStat5, 2),
            countByRole = _reactExports$useStat6[0],
            setCountByRole = _reactExports$useStat6[1];
          const user = TokenService.getUser();
          const isSuperAdmin = user.roles.includes(ROLES.SUPER_ADMIN);
          const dispatch = useDispatch();
          reactExports.useEffect(() => {
            if (isSuperAdmin) {
              UserService.getCountByRole().then(res => {
                if (res) {
                  setCountByRole(res);
                }
              });
            }
            const processApirror = e => {
              setFetchingSurveys(false);
              onApiError({
                error: e,
                globalErrorHandler: processedError => {
                  dispatch(onError(processedError));
                }
              });
            };
            SurveyService.getAllSurveys().then(data => {
              if (data) {
                setFetchingSurveys(false);
                setSurveys(data);
              }
            }).catch(e => processApirror(e));
          }, []);
          return /* @__PURE__ */jsxRuntimeExports.jsxs(Box, {
            className: styles$2.mainContainer,
            children: [isSuperAdmin && /* @__PURE__ */jsxRuntimeExports.jsx(CountsByRole, {
              countByRole
            }), /* @__PURE__ */jsxRuntimeExports.jsxs(Box, {
              className: styles$2.content,
              children: [/* @__PURE__ */jsxRuntimeExports.jsx(HeaderContent, {}), /* @__PURE__ */jsxRuntimeExports.jsx(Stack, {
                flexDirection: "row",
                gap: 4,
                flexWrap: "wrap",
                children: !fetchingSurveys ? surveys === null || surveys === void 0 ? void 0 : surveys.map(survey => {
                  return /* @__PURE__ */jsxRuntimeExports.jsx(Survey, {
                    survey
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
//# sourceMappingURL=index-legacy-rCsukwH7.js.map
