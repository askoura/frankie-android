;
(function () {
  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
  function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
  System.register(['./index-legacy-T3s18jo3.js', './UserService-legacy-idayBd14.js', './index-legacy-D22paHDg.js', './TableRow-legacy-QjxmKuUL.js', './TableHead-legacy-fccLWbma.js', './Web-legacy-LDhM2X1u.js', './DatePicker-legacy-9Ey9K3I7.js', './Grid-legacy-ZQipiKyz.js', './TextField-legacy-vL2OdS5Q.js', './FormControlLabel-legacy-0Ne4M7i6.js', './Checkbox-legacy-8hCFdihe.js', './SwitchBase-legacy-VpMr3A_z.js'], function (exports, module) {
    'use strict';

    var createSvgIcon, jsxRuntimeExports, useTranslation, useNavigate, reactExports, useDispatch, Paper, IconButton, Button, setLoading, Box, UserService, UserDelete, TableContainer, Table, TableRow, TableCell, TableBody, TableHead, Edit;
    return {
      setters: [module => {
        createSvgIcon = module.c;
        jsxRuntimeExports = module.j;
        useTranslation = module.x;
        useNavigate = module.w;
        reactExports = module.r;
        useDispatch = module.z;
        Paper = module.P;
        IconButton = module.I;
        Button = module.a1;
        setLoading = module.D;
        Box = module.B;
      }, module => {
        UserService = module.U;
      }, module => {
        UserDelete = module.U;
      }, module => {
        TableContainer = module.T;
        Table = module.a;
        TableRow = module.b;
        TableCell = module.c;
        TableBody = module.d;
      }, module => {
        TableHead = module.T;
      }, module => {
        Edit = module.E;
      }, null, null, null, null, null, null],
      execute: function execute() {
        var __vite_style__ = document.createElement('style');
        __vite_style__.textContent = "._mainContainer_196br_1 {\n  margin: auto;\n  max-width: 800px;\n  min-width: 300px;\n  height: calc(100vh - 80px);\n  overflow: auto;\n}\n\n._content_196br_9 {\n  margin-top: 30px;\n}\n._addUser_6nyqh_1 {\n  display: flex;\n  gap: 10px;\n  margin-top: 20px;\n  align-items: center;\n}\n";
        document.head.appendChild(__vite_style__);
        exports('default', ManageUsers);
        const Delete = createSvgIcon( /*#__PURE__*/jsxRuntimeExports.jsx("path", {
          d: "M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"
        }), 'Delete');
        const PersonAdd = createSvgIcon( /*#__PURE__*/jsxRuntimeExports.jsx("path", {
          d: "M15 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm-9-2V7H4v3H1v2h3v3h2v-3h3v-2H6zm9 4c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
        }), 'PersonAdd');
        const mainContainer = "_mainContainer_196br_1";
        const content = "_content_196br_9";
        const styles$1 = {
          mainContainer: mainContainer,
          content: content
        };
        const addUser = "_addUser_6nyqh_1";
        const styles = {
          addUser: addUser
        };
        const UsersTable = () => {
          const _useTranslation = useTranslation("manage"),
            t = _useTranslation.t;
          const navigate = useNavigate();
          const _reactExports$useStat = reactExports.useState([]),
            _reactExports$useStat2 = _slicedToArray(_reactExports$useStat, 2),
            users = _reactExports$useStat2[0],
            setUsers = _reactExports$useStat2[1];
          const dispatch = useDispatch();
          const getUsers = () => {
            dispatch(setLoading(true));
            UserService.getAllUsers().then(res => {
              if (res) {
                setUsers(res);
              }
            }).finally(() => {
              dispatch(setLoading(false));
            });
          };
          const _reactExports$useStat3 = reactExports.useState(null),
            _reactExports$useStat4 = _slicedToArray(_reactExports$useStat3, 2),
            userToDelete = _reactExports$useStat4[0],
            setUserToDelete = _reactExports$useStat4[1];
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
              onApiError({
                error: e,
                globalErrorHandler: processedError => {
                  dispatch(onError(processedError));
                }
              });
            });
          };
          reactExports.useEffect(() => {
            getUsers();
          }, []);
          return /* @__PURE__ */jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
            children: [/* @__PURE__ */jsxRuntimeExports.jsx(TableContainer, {
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
          return /* @__PURE__ */jsxRuntimeExports.jsx(Box, {
            className: styles$1.mainContainer,
            children: /* @__PURE__ */jsxRuntimeExports.jsx(UsersTable, {})
          });
        }
      }
    };
  });
})();
//# sourceMappingURL=index-legacy-u0S3Cv1J.js.map
