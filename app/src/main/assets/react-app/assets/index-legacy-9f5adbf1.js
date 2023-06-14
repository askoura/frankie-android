;
(function () {
  System.register(['./index-legacy-7ea9dd30.js', './index-legacy-b5afa760.js', './UserService-legacy-2eb980c7.js', './index-legacy-dd4323a6.js', './index-legacy-5f8fc065.js', './common-legacy-4bc1ef15.js', './TableRow-legacy-e7898fd3.js', './Edit-legacy-0476dc4f.js', './AuthService-legacy-0ac1bda4.js', './ArrowBack-legacy-44a0a74f.js', './LogoutOutlined-legacy-8c2aad8d.js'], function (exports, module) {
    'use strict';

    var __vite_style__ = document.createElement('style');
    __vite_style__.textContent = "._mainContainer_l2mhs_1 {\n  margin: auto;\n  max-width: 800px;\n  min-width: 300px;\n}\n\n._content_l2mhs_7 {\n  margin-top: 30px;\n}\n._addUser_6nyqh_1 {\n  display: flex;\n  gap: 10px;\n  margin-top: 20px;\n  align-items: center;\n}\n";
    document.head.appendChild(__vite_style__);
    var createSvgIcon, jsxRuntimeExports, useNavigate, reactExports, LoadingIndicator, processError, PROCESSED_ERRORS, Header, UserService, Delete, UserDelete, ProcessedError, useTranslation, Paper, IconButton, Button, Box, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Edit;
    return {
      setters: [module => {
        createSvgIcon = module.c;
        jsxRuntimeExports = module.j;
        useNavigate = module.u;
        reactExports = module.r;
        LoadingIndicator = module.d;
        processError = module.p;
        PROCESSED_ERRORS = module.P;
      }, module => {
        Header = module.H;
      }, module => {
        UserService = module.U;
      }, module => {
        Delete = module.D;
        UserDelete = module.U;
      }, module => {
        ProcessedError = module.P;
      }, module => {
        useTranslation = module.u;
        Paper = module.P;
        IconButton = module.a;
        Button = module.b;
        Box = module.B;
      }, module => {
        TableContainer = module.T;
        Table = module.a;
        TableHead = module.b;
        TableRow = module.c;
        TableCell = module.d;
        TableBody = module.e;
      }, module => {
        Edit = module.E;
      }, null, null, null],
      execute: function () {
        exports('default', ManageUsers);
        const PersonAdd = createSvgIcon( /*#__PURE__*/jsxRuntimeExports.jsx("path", {
          d: "M15 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm-9-2V7H4v3H1v2h3v3h2v-3h3v-2H6zm9 4c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
        }), 'PersonAdd');
        const mainContainer = "_mainContainer_l2mhs_1";
        const content = "_content_l2mhs_7";
        const styles$1 = {
          mainContainer: mainContainer,
          content: content
        };
        const addUser = "_addUser_6nyqh_1";
        const styles = {
          addUser: addUser
        };
        const UsersTable = () => {
          const {
            t
          } = useTranslation("manage");
          const navigate = useNavigate();
          const [loading, setLoading] = reactExports.useState(false);
          const [users, setUsers] = reactExports.useState([]);
          const [processedError, setProcessedError] = reactExports.useState("");
          const [showError, setShowError] = reactExports.useState(false);
          const getUsers = () => {
            setLoading(true);
            UserService.getAllUsers().then(res => {
              if (res) {
                setUsers(res);
              }
            }).finally(() => {
              setLoading(false);
            });
          };
          const [userToDelete, setUserToDelete] = reactExports.useState(null);
          const onCloseModal = () => {
            setUserToDelete(null);
          };
          const deleteUser = () => {
            UserService.deleteUser({
              userId: userToDelete.id
            }).then(() => {
              onCloseModal();
              getUsers();
            }).catch(e => {
              const processed = processError(e);
              switch (processed) {
                case PROCESSED_ERRORS.NETWORK_ERR:
                case PROCESSED_ERRORS.BACKEND_DOWN:
                  setShowError(true);
                  setProcessedError(processed);
                  break;
              }
            });
          };
          reactExports.useEffect(() => {
            getUsers();
          }, []);
          return /* @__PURE__ */jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
            children: [loading && /* @__PURE__ */jsxRuntimeExports.jsx(LoadingIndicator, {}), showError && /* @__PURE__ */jsxRuntimeExports.jsx(ProcessedError, {
              error: processedError,
              handleClose: () => setShowError(false)
            }), /* @__PURE__ */jsxRuntimeExports.jsx(TableContainer, {
              component: Paper,
              children: /* @__PURE__ */jsxRuntimeExports.jsxs(Table, {
                sx: {
                  minWidth: 650
                },
                "aria-label": "simple table",
                children: [/* @__PURE__ */jsxRuntimeExports.jsx(TableHead, {
                  children: /* @__PURE__ */jsxRuntimeExports.jsxs(TableRow, {
                    children: [/* @__PURE__ */jsxRuntimeExports.jsx(TableCell, {}), /* @__PURE__ */jsxRuntimeExports.jsx(TableCell, {
                      align: "left",
                      children: t("users_manage.name")
                    }), /* @__PURE__ */jsxRuntimeExports.jsx(TableCell, {
                      align: "left",
                      children: t("users_manage.email")
                    }), /* @__PURE__ */jsxRuntimeExports.jsx(TableCell, {
                      align: "left",
                      children: t("users_manage.roles")
                    })]
                  })
                }), /* @__PURE__ */jsxRuntimeExports.jsx(TableBody, {
                  children: users.map(user => {
                    return /* @__PURE__ */jsxRuntimeExports.jsxs(TableRow, {
                      children: [/* @__PURE__ */jsxRuntimeExports.jsxs(TableCell, {
                        component: "th",
                        scope: "row",
                        children: [/* @__PURE__ */jsxRuntimeExports.jsx(IconButton, {
                          title: t("users_manage.title_delete"),
                          onClick: () => {
                            setUserToDelete(user);
                          },
                          children: /* @__PURE__ */jsxRuntimeExports.jsx(Delete, {})
                        }), /* @__PURE__ */jsxRuntimeExports.jsx(IconButton, {
                          title: t("users_manage.title_edit"),
                          onClick: () => {
                            navigate(`/edit-user/${user.id}`);
                          },
                          children: /* @__PURE__ */jsxRuntimeExports.jsx(Edit, {})
                        })]
                      }), /* @__PURE__ */jsxRuntimeExports.jsxs(TableCell, {
                        align: "left",
                        children: [user.firstName, " ", user.lastName]
                      }), /* @__PURE__ */jsxRuntimeExports.jsx(TableCell, {
                        align: "left",
                        children: user.email
                      }), /* @__PURE__ */jsxRuntimeExports.jsx(TableCell, {
                        align: "left",
                        children: user.roles.map(role => t(`label.${role}`)).join(", ")
                      })]
                    }, user.id);
                  })
                })]
              })
            }), /* @__PURE__ */jsxRuntimeExports.jsxs(Button, {
              className: styles.addUser,
              onClick: () => {
                navigate("/add-user");
              },
              children: [/* @__PURE__ */jsxRuntimeExports.jsx(PersonAdd, {}), t("users_manage.add_user")]
            }), Boolean(userToDelete) && /* @__PURE__ */jsxRuntimeExports.jsx(UserDelete, {
              deleteUser,
              name: userToDelete.firstName + " " + userToDelete.lastName,
              open: Boolean(userToDelete),
              onClose: onCloseModal
            })]
          });
        };
        function ManageUsers() {
          return /* @__PURE__ */jsxRuntimeExports.jsxs(Box, {
            className: styles$1.mainContainer,
            children: [/* @__PURE__ */jsxRuntimeExports.jsx(Header, {}), /* @__PURE__ */jsxRuntimeExports.jsx(UsersTable, {})]
          });
        }
      }
    };
  });
})();
