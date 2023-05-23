;
(function () {
  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
  function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
  System.register(['./index-legacy-13317357.js', './index-legacy-fa9f22d6.js', './UserService-legacy-65c9fb37.js', './index-legacy-1361522a.js', './index-legacy-0169b194.js', './common-legacy-88dbaa5f.js', './TableRow-legacy-847ac79f.js', './Edit-legacy-0118b155.js', './AuthService-legacy-ffa71593.js', './ArrowBack-legacy-43da8595.js', './LogoutOutlined-legacy-6e704e74.js'], function (exports, module) {
    'use strict';

    var __vite_style__ = document.createElement('style');
    __vite_style__.textContent = "._mainContainer_l2mhs_1 {\n  margin: auto;\n  max-width: 800px;\n  min-width: 300px;\n}\n\n._content_l2mhs_7 {\n  margin-top: 30px;\n}\n._addUser_6nyqh_1 {\n  display: flex;\n  gap: 10px;\n  margin-top: 20px;\n  align-items: center;\n}\n";
    document.head.appendChild(__vite_style__);
    var createSvgIcon, jsxRuntimeExports, useNavigate, reactExports, LoadingIndicator, processError, PROCESSED_ERRORS, Header, UserService, Delete, UserDelete, ProcessedError, useTranslation, Paper, IconButton, Button, Box, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Edit;
    return {
      setters: [function (module) {
        createSvgIcon = module.c;
        jsxRuntimeExports = module.j;
        useNavigate = module.u;
        reactExports = module.r;
        LoadingIndicator = module.d;
        processError = module.p;
        PROCESSED_ERRORS = module.P;
      }, function (module) {
        Header = module.H;
      }, function (module) {
        UserService = module.U;
      }, function (module) {
        Delete = module.D;
        UserDelete = module.U;
      }, function (module) {
        ProcessedError = module.P;
      }, function (module) {
        useTranslation = module.u;
        Paper = module.P;
        IconButton = module.a;
        Button = module.b;
        Box = module.B;
      }, function (module) {
        TableContainer = module.T;
        Table = module.a;
        TableHead = module.b;
        TableRow = module.c;
        TableCell = module.d;
        TableBody = module.e;
      }, function (module) {
        Edit = module.E;
      }, null, null, null],
      execute: function execute() {
        exports('default', ManageUsers);
        var PersonAdd = createSvgIcon( /*#__PURE__*/jsxRuntimeExports.jsx("path", {
          d: "M15 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm-9-2V7H4v3H1v2h3v3h2v-3h3v-2H6zm9 4c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
        }), 'PersonAdd');
        var mainContainer = "_mainContainer_l2mhs_1";
        var content = "_content_l2mhs_7";
        var styles$1 = {
          mainContainer: mainContainer,
          content: content
        };
        var addUser = "_addUser_6nyqh_1";
        var styles = {
          addUser: addUser
        };
        var UsersTable = function UsersTable() {
          var _useTranslation = useTranslation("manage"),
            t = _useTranslation.t;
          var navigate = useNavigate();
          var _reactExports$useStat = reactExports.useState(false),
            _reactExports$useStat2 = _slicedToArray(_reactExports$useStat, 2),
            loading = _reactExports$useStat2[0],
            setLoading = _reactExports$useStat2[1];
          var _reactExports$useStat3 = reactExports.useState([]),
            _reactExports$useStat4 = _slicedToArray(_reactExports$useStat3, 2),
            users = _reactExports$useStat4[0],
            setUsers = _reactExports$useStat4[1];
          var _reactExports$useStat5 = reactExports.useState(""),
            _reactExports$useStat6 = _slicedToArray(_reactExports$useStat5, 2),
            processedError = _reactExports$useStat6[0],
            setProcessedError = _reactExports$useStat6[1];
          var _reactExports$useStat7 = reactExports.useState(false),
            _reactExports$useStat8 = _slicedToArray(_reactExports$useStat7, 2),
            showError = _reactExports$useStat8[0],
            setShowError = _reactExports$useStat8[1];
          var getUsers = function getUsers() {
            setLoading(true);
            UserService.getAllUsers().then(function (res) {
              if (res) {
                setUsers(res);
              }
            }).finally(function () {
              setLoading(false);
            });
          };
          var _reactExports$useStat9 = reactExports.useState(null),
            _reactExports$useStat10 = _slicedToArray(_reactExports$useStat9, 2),
            userToDelete = _reactExports$useStat10[0],
            setUserToDelete = _reactExports$useStat10[1];
          var onCloseModal = function onCloseModal() {
            setUserToDelete(null);
          };
          var deleteUser = function deleteUser() {
            UserService.deleteUser({
              userId: userToDelete.id
            }).then(function () {
              onCloseModal();
              getUsers();
            }).catch(function (e) {
              var processed = processError(e);
              switch (processed) {
                case PROCESSED_ERRORS.NETWORK_ERR:
                case PROCESSED_ERRORS.BACKEND_DOWN:
                  setShowError(true);
                  setProcessedError(processed);
                  break;
              }
            });
          };
          reactExports.useEffect(function () {
            getUsers();
          }, []);
          return /* @__PURE__ */jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
            children: [loading && /* @__PURE__ */jsxRuntimeExports.jsx(LoadingIndicator, {}), showError && /* @__PURE__ */jsxRuntimeExports.jsx(ProcessedError, {
              error: processedError,
              handleClose: function handleClose() {
                return setShowError(false);
              }
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
                  children: users.map(function (user) {
                    return /* @__PURE__ */jsxRuntimeExports.jsxs(TableRow, {
                      children: [/* @__PURE__ */jsxRuntimeExports.jsxs(TableCell, {
                        component: "th",
                        scope: "row",
                        children: [/* @__PURE__ */jsxRuntimeExports.jsx(IconButton, {
                          title: t("users_manage.title_delete"),
                          onClick: function onClick() {
                            setUserToDelete(user);
                          },
                          children: /* @__PURE__ */jsxRuntimeExports.jsx(Delete, {})
                        }), /* @__PURE__ */jsxRuntimeExports.jsx(IconButton, {
                          title: t("users_manage.title_edit"),
                          onClick: function onClick() {
                            navigate("/edit-user/".concat(user.id));
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
                        children: user.roles.map(function (role) {
                          return t("label.".concat(role));
                        }).join(", ")
                      })]
                    }, user.id);
                  })
                })]
              })
            }), /* @__PURE__ */jsxRuntimeExports.jsxs(Button, {
              className: styles.addUser,
              onClick: function onClick() {
                navigate("/add-user");
              },
              children: [/* @__PURE__ */jsxRuntimeExports.jsx(PersonAdd, {}), t("users_manage.add_user")]
            }), Boolean(userToDelete) && /* @__PURE__ */jsxRuntimeExports.jsx(UserDelete, {
              deleteUser: deleteUser,
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
