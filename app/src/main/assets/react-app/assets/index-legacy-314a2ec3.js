;
(function () {
  System.register(['./index-legacy-5baa22df.js', './UserService-legacy-5234d20f.js', './index-legacy-0834d3cd.js', './common-legacy-42d4b65f.js', './Card-legacy-59db49d3.js', './roles-legacy-66fb0e17.js', './Stack-legacy-7ef4de40.js', './DateUtils-legacy-89eb9ddb.js', './Edit-legacy-dd7b90a9.js', './index-legacy-21f45f79.js', './AuthService-legacy-2cb83699.js', './ArrowBack-legacy-599daa71.js', './LogoutOutlined-legacy-4b415b74.js'], function (exports, module) {
    'use strict';

    var __vite_style__ = document.createElement('style');
    __vite_style__.textContent = "._mainContainer_629d6_1 {\n  margin: auto;\n  max-width: 800px;\n  min-width: 300px;\n}\n\n._content_629d6_7 {\n  margin-top: 30px;\n}\n\n._loadingWrapper_629d6_11 {\n  width: 100%;\n  height: 100%;\n  text-align: center;\n  padding-top: 50px;\n}\n._byRoleWrap_1dxko_1 {\n  margin-top: 10px;\n  padding: 15px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n._surveyHeader_1yxw9_1 {\n  padding: 5px;\n  color: #fff;\n  text-transform: capitalize;\n}\n\n._contentCard_1yxw9_7 {\n  padding: 5px;\n}\n\n._actionBtn_1yxw9_11 {\n  margin-top: 30px;\n  display: flex;\n  justify-content: space-between;\n}\n";
    document.head.appendChild(__vite_style__);
    var createSvgIcon, jsxRuntimeExports, useNavigate, TokenService, Link, reactExports, SurveyService, CircularProgress, processError, PROCESSED_ERRORS, UserService, routes, Header, useTranslation, Box, Button, Typography, IconButton, Card, ROLES, isSurveyAdmin, Stack, dayMonthUeatFormat, serverDateTimeToLocalDateTime, Edit, ProcessedError;
    return {
      setters: [module => {
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
      }, module => {
        UserService = module.U;
      }, module => {
        routes = module.r;
        Header = module.H;
      }, module => {
        useTranslation = module.u;
        Box = module.B;
        Button = module.b;
        Typography = module.T;
        IconButton = module.a;
      }, module => {
        Card = module.C;
      }, module => {
        ROLES = module.R;
        isSurveyAdmin = module.i;
      }, module => {
        Stack = module.S;
      }, module => {
        dayMonthUeatFormat = module.d;
        serverDateTimeToLocalDateTime = module.s;
      }, module => {
        Edit = module.E;
      }, module => {
        ProcessedError = module.P;
      }, null, null, null],
      execute: function () {
        exports('default', Dashboard);
        const Add = createSvgIcon( /*#__PURE__*/jsxRuntimeExports.jsx("path", {
          d: "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"
        }), 'Add');
        const Palette = createSvgIcon( /*#__PURE__*/jsxRuntimeExports.jsx("path", {
          d: "M12 2C6.49 2 2 6.49 2 12s4.49 10 10 10c1.38 0 2.5-1.12 2.5-2.5 0-.61-.23-1.2-.64-1.67-.08-.1-.13-.21-.13-.33 0-.28.22-.5.5-.5H16c3.31 0 6-2.69 6-6 0-4.96-4.49-9-10-9zm5.5 11c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm-3-4c-.83 0-1.5-.67-1.5-1.5S13.67 6 14.5 6s1.5.67 1.5 1.5S15.33 9 14.5 9zM5 11.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5S7.33 13 6.5 13 5 12.33 5 11.5zm6-4c0 .83-.67 1.5-1.5 1.5S8 8.33 8 7.5 8.67 6 9.5 6s1.5.67 1.5 1.5z"
        }), 'Palette');
        const Preview = createSvgIcon( /*#__PURE__*/jsxRuntimeExports.jsx("path", {
          d: "M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm0 16H5V7h14v12zm-5.5-6c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5.67-1.5 1.5-1.5 1.5.67 1.5 1.5zM12 9c-2.73 0-5.06 1.66-6 4 .94 2.34 3.27 4 6 4s5.06-1.66 6-4c-.94-2.34-3.27-4-6-4zm0 6.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"
        }), 'Preview');
        const mainContainer = "_mainContainer_629d6_1";
        const content = "_content_629d6_7";
        const loadingWrapper = "_loadingWrapper_629d6_11";
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
          const {
            t
          } = useTranslation("manage");
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
              onClick: () => {
                navigate(routes.manageUsers);
              },
              children: t("manage_users")
            })]
          });
        };
        const HeaderContent = () => {
          const navigate = useNavigate();
          const {
            t
          } = useTranslation("manage");
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
          const {
            t
          } = useTranslation("manage");
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
                to: `/responses/${survey.id}`,
                children: [t("responses_count"), " ", survey === null || survey === void 0 ? void 0 : survey.responsesCount]
              }), /* @__PURE__ */jsxRuntimeExports.jsxs(Box, {
                className: styles.actionBtn,
                children: [isSurveyAdmin() && survey.status != STATUS.CLOSED && /* @__PURE__ */jsxRuntimeExports.jsx(Link, {
                  to: `/design-survey/${survey.id}`,
                  title: "Design",
                  children: /* @__PURE__ */jsxRuntimeExports.jsx(IconButton, {
                    children: /* @__PURE__ */jsxRuntimeExports.jsx(Palette, {})
                  })
                }), /* @__PURE__ */jsxRuntimeExports.jsx(Link, {
                  to: `/edit-survey/${survey.id}`,
                  title: "Edit",
                  children: /* @__PURE__ */jsxRuntimeExports.jsx(IconButton, {
                    children: /* @__PURE__ */jsxRuntimeExports.jsx(Edit, {})
                  })
                }), survey.status != STATUS.CLOSED && /* @__PURE__ */jsxRuntimeExports.jsx(Link, {
                  to: `/preview-survey/${survey.id}`,
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
          const [surveys, setSurveys] = reactExports.useState([]);
          const [fetchingSurveys, setFetchingSurveys] = reactExports.useState(true);
          const [countByRole, setCountByRole] = reactExports.useState(null);
          const [processedError, setProcessedError] = reactExports.useState("");
          const [showError, setShowError] = reactExports.useState(false);
          const user = TokenService.getUser();
          const isSuperAdmin = user.roles.includes(ROLES.SUPER_ADMIN);
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
              const processed = processError(e);
              switch (processed) {
                case PROCESSED_ERRORS.NETWORK_ERR:
                case PROCESSED_ERRORS.BACKEND_DOWN:
                  setShowError(true);
                  setProcessedError(processed);
                  break;
              }
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
            children: [/* @__PURE__ */jsxRuntimeExports.jsx(Header, {}), showError && /* @__PURE__ */jsxRuntimeExports.jsx(ProcessedError, {
              error: processedError,
              handleClose: () => setShowError(false)
            }), isSuperAdmin && /* @__PURE__ */jsxRuntimeExports.jsx(CountsByRole, {
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
