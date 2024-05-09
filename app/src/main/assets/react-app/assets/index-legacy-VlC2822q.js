;
(function () {
  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
  function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
  System.register(['./index-legacy-vEA8K-LS.js', './index-legacy-I7ODOz65.js', './use-service-legacy-Bcxdqe8R.js', './Web-legacy-BheMkDx6.js', './yup-legacy-DfFsT9pC.js', './DatePicker-legacy-BnaJqr5R.js', './Card-legacy-DxmmOhD2.js', './TableRow-legacy-BZZ4sy_S.js', './tableRowClasses-legacy-vYv7lYPf.js', './TableHead-legacy-D-0jq4Dv.js', './TableCell-legacy-Dp59XReJ.js', './Divider-legacy-DjNNgC-t.js', './Checkbox-legacy-DVZrBJdJ.js', './SwitchBase-legacy-CDK6BOac.js', './radioClasses-legacy-Dh2-Btlo.js', './FormControlLabel-legacy-CId-AnH7.js', './TextField-legacy-Dx6AYM0D.js', './Grid-legacy-Dnj6MD-w.js'], function (exports, module) {
    'use strict';

    var jsxRuntimeExports, generateUtilityClasses, generateUtilityClass, capitalize, _extends, reactExports, _objectWithoutPropertiesLoose, clsx, Box, React, UserDelete, createSvgIcon, styled, ButtonBase, useThemeProps, composeClasses, useService, useTranslation, useDispatch, setLoading, PROCESSED_ERRORS, Typography, Stack, Button, IconButton, Popover, MenuItem, useForm, ROLES, FormProvider, RHFTextField, RHFMultiSelect, Iconify, create$3, create$6, o, LoadingButton, Dialog, Card, TableContainer, Table, TableRow, TableBody, tableCellClasses, TableHead, TableCell, Divider;
    return {
      setters: [module => {
        jsxRuntimeExports = module.j;
        generateUtilityClasses = module.f;
        generateUtilityClass = module.g;
        capitalize = module.h;
        _extends = module._;
        reactExports = module.r;
        _objectWithoutPropertiesLoose = module.b;
        clsx = module.d;
        Box = module.B;
        React = module.R;
      }, module => {
        UserDelete = module.U;
      }, module => {
        createSvgIcon = module.f;
        styled = module.h;
        ButtonBase = module.B;
        useThemeProps = module.e;
        composeClasses = module.c;
        useService = module.J;
        useTranslation = module.E;
        useDispatch = module.K;
        setLoading = module.O;
        PROCESSED_ERRORS = module.aq;
        Typography = module.T;
        Stack = module.aH;
        Button = module.ap;
        IconButton = module.I;
        Popover = module.bG;
        MenuItem = module.M;
      }, module => {
        useForm = module.u;
        ROLES = module.m;
        FormProvider = module.F;
        RHFTextField = module.R;
        RHFMultiSelect = module.n;
        Iconify = module.I;
      }, module => {
        create$3 = module.c;
        create$6 = module.a;
        o = module.o;
        LoadingButton = module.L;
      }, module => {
        Dialog = module.b;
      }, module => {
        Card = module.C;
      }, module => {
        TableContainer = module.T;
        Table = module.a;
        TableRow = module.b;
        TableBody = module.c;
      }, module => {
        tableCellClasses = module.a;
      }, module => {
        TableHead = module.T;
      }, module => {
        TableCell = module.T;
      }, module => {
        Divider = module.D;
      }, null, null, null, null, null, null],
      execute: function execute() {
        var __vite_style__ = document.createElement('style');
        __vite_style__.textContent = "._mainContainer_1u62w_1 {\n  margin: auto;\n  max-width: 800px;\n  min-width: 300px;\n  height: calc(100vh - 64px);\n  overflow: auto;\n}\n\n._content_1u62w_9 {\n  margin-top: 30px;\n}\n._addUser_6nyqh_1 {\n  display: flex;\n  gap: 10px;\n  margin-top: 20px;\n  align-items: center;\n}\n._mainContainer_sp6mp_1 {\n  margin: auto;\n  max-width: 800px;\n  min-width: 300px;\n  height: calc(100vh - 64px);\n  overflow: auto;\n}\n\n._createUserCard_sp6mp_9 {\n  padding: 25px;\n}\n\n._formGroup_sp6mp_13 {\n  max-width: 400px;\n}\n\n._errorText_sp6mp_17 {\n  color: #eb5757 !important;\n}\n";
        document.head.appendChild(__vite_style__);
        exports("default", ManageUsers);
        const ArrowDownwardIcon = createSvgIcon( /*#__PURE__*/jsxRuntimeExports.jsx("path", {
          d: "M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"
        }), 'ArrowDownward');
        function getTableSortLabelUtilityClass(slot) {
          return generateUtilityClass('MuiTableSortLabel', slot);
        }
        const tableSortLabelClasses = generateUtilityClasses('MuiTableSortLabel', ['root', 'active', 'icon', 'iconDirectionDesc', 'iconDirectionAsc']);
        const tableSortLabelClasses$1 = tableSortLabelClasses;
        const _excluded = ["active", "children", "className", "direction", "hideSortIcon", "IconComponent"];
        const useUtilityClasses = ownerState => {
          const classes = ownerState.classes,
            direction = ownerState.direction,
            active = ownerState.active;
          const slots = {
            root: ["root", active && "active"],
            icon: ["icon", `iconDirection${capitalize(direction)}`]
          };
          return composeClasses(slots, getTableSortLabelUtilityClass, classes);
        };
        const TableSortLabelRoot = styled(ButtonBase, {
          name: "MuiTableSortLabel",
          slot: "Root",
          overridesResolver: (props, styles) => {
            const ownerState = props.ownerState;
            return [styles.root, ownerState.active && styles.active];
          }
        })(({
          theme
        }) => ({
          cursor: "pointer",
          display: "inline-flex",
          justifyContent: "flex-start",
          flexDirection: "inherit",
          alignItems: "center",
          "&:focus": {
            color: (theme.vars || theme).palette.text.secondary
          },
          "&:hover": {
            color: (theme.vars || theme).palette.text.secondary,
            [`& .${tableSortLabelClasses$1.icon}`]: {
              opacity: 0.5
            }
          },
          [`&.${tableSortLabelClasses$1.active}`]: {
            color: (theme.vars || theme).palette.text.primary,
            [`& .${tableSortLabelClasses$1.icon}`]: {
              opacity: 1,
              color: (theme.vars || theme).palette.text.secondary
            }
          }
        }));
        const TableSortLabelIcon = styled("span", {
          name: "MuiTableSortLabel",
          slot: "Icon",
          overridesResolver: (props, styles) => {
            const ownerState = props.ownerState;
            return [styles.icon, styles[`iconDirection${capitalize(ownerState.direction)}`]];
          }
        })(({
          theme,
          ownerState
        }) => _extends({
          fontSize: 18,
          marginRight: 4,
          marginLeft: 4,
          opacity: 0,
          transition: theme.transitions.create(["opacity", "transform"], {
            duration: theme.transitions.duration.shorter
          }),
          userSelect: "none"
        }, ownerState.direction === "desc" && {
          transform: "rotate(0deg)"
        }, ownerState.direction === "asc" && {
          transform: "rotate(180deg)"
        }));
        const TableSortLabel = /* @__PURE__ */reactExports.forwardRef(function TableSortLabel2(inProps, ref) {
          const props = useThemeProps({
            props: inProps,
            name: "MuiTableSortLabel"
          });
          const _props$active = props.active,
            active = _props$active === void 0 ? false : _props$active,
            children = props.children,
            className = props.className,
            _props$direction = props.direction,
            direction = _props$direction === void 0 ? "asc" : _props$direction,
            _props$hideSortIcon = props.hideSortIcon,
            hideSortIcon = _props$hideSortIcon === void 0 ? false : _props$hideSortIcon,
            _props$IconComponent = props.IconComponent,
            IconComponent = _props$IconComponent === void 0 ? ArrowDownwardIcon : _props$IconComponent,
            other = _objectWithoutPropertiesLoose(props, _excluded);
          const ownerState = _extends({}, props, {
            active,
            direction,
            hideSortIcon,
            IconComponent
          });
          const classes = useUtilityClasses(ownerState);
          return /* @__PURE__ */jsxRuntimeExports.jsxs(TableSortLabelRoot, _extends({
            className: clsx(classes.root, className),
            component: "span",
            disableRipple: true,
            ownerState,
            ref
          }, other, {
            children: [children, hideSortIcon && !active ? null : /* @__PURE__ */jsxRuntimeExports.jsx(TableSortLabelIcon, {
              as: IconComponent,
              className: clsx(classes.icon),
              ownerState
            })]
          }));
        });
        const TableSortLabel$1 = TableSortLabel;
        const PersonAdd = createSvgIcon( /*#__PURE__*/jsxRuntimeExports.jsx("path", {
          d: "M15 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm-9-2V7H4v3H1v2h3v3h2v-3h3v-2H6zm9 4c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
        }), 'PersonAdd');
        const mainContainer$1 = "_mainContainer_1u62w_1";
        const content = "_content_1u62w_9";
        const styles$2 = {
          mainContainer: mainContainer$1,
          content: content
        };
        const addUser = "_addUser_6nyqh_1";
        const styles$1 = {
          addUser: addUser
        };
        const mainContainer = "_mainContainer_sp6mp_1";
        const createUserCard = "_createUserCard_sp6mp_9";
        const formGroup = "_formGroup_sp6mp_13";
        const errorText = "_errorText_sp6mp_17";
        const styles = {
          mainContainer: mainContainer,
          createUserCard: createUserCard,
          formGroup: formGroup,
          errorText: errorText
        };
        function AddEditUser({
          userId,
          open,
          onClose
        }) {
          const userService = useService("user");
          const _useTranslation = useTranslation("manage"),
            t = _useTranslation.t;
          const dispatch = useDispatch();
          const AddUserSchema = create$3().shape({
            email: create$6().required("Email is required").email("That is not an email")
          });
          const defaultValues = {
            firstName: "",
            lastName: "",
            email: "",
            roles: []
          };
          const methods = useForm({
            resolver: o(AddUserSchema),
            defaultValues
          });
          const setError = methods.setError,
            reset = methods.reset,
            handleSubmit = methods.handleSubmit,
            isSubmitting = methods.formState.isSubmitting;
          reactExports.useEffect(() => {
            if (userId) {
              dispatch(setLoading(true));
              userService.getUser({
                userId
              }).then(response => {
                dispatch(setLoading(false));
                reset(response);
              });
            }
          }, [reset, userId]);
          const onSubmit = handleSubmit( /*#__PURE__*/function () {
            var _ref = _asyncToGenerator(function* (data) {
              dispatch(setLoading(true));
              const firstName = data.firstName,
                lastName = data.lastName,
                email = data.email,
                roles = data.roles;
              if (userId) {
                userService.updateUser({
                  userId,
                  data: {
                    email,
                    firstName,
                    lastName,
                    roles
                  }
                }).then(() => {
                  onClose();
                }).catch(processedError => {
                  if (processedError.name == PROCESSED_ERRORS.DUPLICATE_EMAIL.name) {
                    setError("email", {
                      type: "manual",
                      message: t(`processed_errors.${processedError.name}`)
                    });
                  }
                }).finally(() => {
                  dispatch(setLoading(false));
                });
              } else {
                userService.createUser({
                  email,
                  firstName,
                  lastName,
                  roles
                }).then(() => {
                  onClose();
                }).catch(processedError => {
                  if (processedError.name == PROCESSED_ERRORS.DUPLICATE_EMAIL.name) {
                    setError("email", {
                      type: "manual",
                      message: t(`processed_errors.${processedError.name}`)
                    });
                  }
                }).finally(() => {
                  dispatch(setLoading(false));
                });
              }
            });
            return function (_x) {
              return _ref.apply(this, arguments);
            };
          }());
          const OPTIONS = [{
            value: ROLES.SUPER_ADMIN,
            label: t("label.super_admin")
          }, {
            value: ROLES.SURVEY_ADMIN,
            label: t("label.survey_admin")
          }, {
            value: ROLES.ANALYST,
            label: t("label.analyst")
          }, {
            value: ROLES.SURVEYOR,
            label: t("label.surveyor")
          }];
          return /* @__PURE__ */jsxRuntimeExports.jsx(Dialog, {
            open,
            onClose,
            maxWidth: "md",
            fullWidth: true,
            children: /* @__PURE__ */jsxRuntimeExports.jsxs(Card, {
              sx: {
                overflow: "visible"
              },
              className: styles.createUserCard,
              children: [/* @__PURE__ */jsxRuntimeExports.jsx(Typography, {
                variant: "h4",
                sx: {
                  mb: 3
                },
                children: userId ? t("edit_user.title") : t("add_user.title")
              }), /* @__PURE__ */jsxRuntimeExports.jsxs(FormProvider, {
                methods,
                onSubmit,
                children: [/* @__PURE__ */jsxRuntimeExports.jsxs(Stack, {
                  spacing: 2.5,
                  children: [/* @__PURE__ */jsxRuntimeExports.jsx(RHFTextField, {
                    name: "firstName",
                    label: t("label.first_name")
                  }), /* @__PURE__ */jsxRuntimeExports.jsx(RHFTextField, {
                    name: "lastName",
                    label: t("label.last_name")
                  }), /* @__PURE__ */jsxRuntimeExports.jsx(RHFTextField, {
                    name: "email",
                    label: t("label.email")
                  }), /* @__PURE__ */jsxRuntimeExports.jsx(RHFMultiSelect, {
                    chip: true,
                    checkbox: true,
                    name: "roles",
                    label: t("add_user.roles"),
                    options: OPTIONS
                  })]
                }), /* @__PURE__ */jsxRuntimeExports.jsxs(Box, {
                  sx: {
                    display: "flex",
                    gap: "1rem",
                    justifyContent: "flex-end",
                    mt: "40px"
                  },
                  children: [/* @__PURE__ */jsxRuntimeExports.jsx(LoadingButton, {
                    onClick: () => onClose(true),
                    color: "inherit",
                    size: "large",
                    variant: "contained",
                    children: t("add_user.cancel")
                  }), /* @__PURE__ */jsxRuntimeExports.jsx(LoadingButton, {
                    color: "inherit",
                    size: "large",
                    type: "submit",
                    variant: "contained",
                    loading: isSubmitting,
                    children: t("add_user.save")
                  })]
                })]
              })]
            })
          });
        }
        const UsersTable = () => {
          const userService = useService("user");
          const _useTranslation2 = useTranslation("manage"),
            t = _useTranslation2.t;
          const _reactExports$useStat = reactExports.useState([]),
            _reactExports$useStat2 = _slicedToArray(_reactExports$useStat, 2),
            users = _reactExports$useStat2[0],
            setUsers = _reactExports$useStat2[1];
          const dispatch = useDispatch();
          const _reactExports$useStat3 = reactExports.useState(null),
            _reactExports$useStat4 = _slicedToArray(_reactExports$useStat3, 2),
            open = _reactExports$useStat4[0],
            setOpen = _reactExports$useStat4[1];
          const _reactExports$useStat5 = reactExports.useState("asc"),
            _reactExports$useStat6 = _slicedToArray(_reactExports$useStat5, 2),
            orderDirection = _reactExports$useStat6[0],
            setOrderDirection = _reactExports$useStat6[1];
          const _reactExports$useStat7 = reactExports.useState("name"),
            _reactExports$useStat8 = _slicedToArray(_reactExports$useStat7, 2),
            orderBy = _reactExports$useStat8[0],
            setOrderBy = _reactExports$useStat8[1];
          const _reactExports$useStat9 = reactExports.useState(null),
            _reactExports$useStat10 = _slicedToArray(_reactExports$useStat9, 2),
            modalUserId = _reactExports$useStat10[0],
            setModalUserId = _reactExports$useStat10[1];
          const _reactExports$useStat11 = reactExports.useState(null),
            _reactExports$useStat12 = _slicedToArray(_reactExports$useStat11, 2),
            popoverUserId = _reactExports$useStat12[0],
            setPopoverUserId = _reactExports$useStat12[1];
          const getUsers = () => {
            dispatch(setLoading(true));
            userService.getAllUsers().then(res => {
              if (res) {
                setUsers(res);
              }
            }).finally(() => {
              dispatch(setLoading(false));
            });
          };
          const _reactExports$useStat13 = reactExports.useState(null),
            _reactExports$useStat14 = _slicedToArray(_reactExports$useStat13, 2),
            userToDelete = _reactExports$useStat14[0],
            setUserToDelete = _reactExports$useStat14[1];
          const onCloseModal = () => {
            setUserToDelete(null);
          };
          const deleteUser = () => {
            userService.deleteUser({
              userId: userToDelete.id
            }).then(() => {
              onCloseModal();
              getUsers();
            }).catch(e => {});
          };
          reactExports.useEffect(() => {
            getUsers();
          }, []);
          const handleRequestSort = property => {
            const isAsc = orderBy === property && orderDirection === "asc";
            setOrderDirection(isAsc ? "desc" : "asc");
            setOrderBy(property);
          };
          const sortFunction = (array, comparator) => {
            const stabilizedThis = array.map((el, index) => [el, index]);
            stabilizedThis.sort((a, b) => {
              const order = comparator(a[0], b[0]);
              if (order !== 0) return order;
              return a[1] - b[1];
            });
            return stabilizedThis.map(el => el[0]);
          };
          const getComparator = (order, orderBy2) => {
            return order === "desc" ? (a, b) => descendingComparator(a, b, orderBy2) : (a, b) => -descendingComparator(a, b, orderBy2);
          };
          const descendingComparator = (a, b, orderBy2) => {
            if (orderBy2 === "name") {
              const nameA = `${a.firstName} ${a.lastName}`.toLowerCase();
              const nameB = `${b.firstName} ${b.lastName}`.toLowerCase();
              if (nameB < nameA) {
                return -1;
              }
              if (nameB > nameA) {
                return 1;
              }
              return 0;
            } else {
              if (b[orderBy2] < a[orderBy2]) {
                return -1;
              }
              if (b[orderBy2] > a[orderBy2]) {
                return 1;
              }
              return 0;
            }
          };
          const sortedUsers = sortFunction(users, getComparator(orderDirection, orderBy));
          const _reactExports$useStat15 = reactExports.useState(false),
            _reactExports$useStat16 = _slicedToArray(_reactExports$useStat15, 2),
            userModal = _reactExports$useStat16[0],
            setUserModal = _reactExports$useStat16[1];
          const handleOpenModal = (userId = null) => {
            setModalUserId(userId);
            setUserModal(true);
          };
          const handleEditUser = userId => {
            handleOpenModal(userId);
            setOpen(null);
          };
          const handleCloseModal = prop => {
            setUserModal(false);
            if (!prop) {
              getUsers();
            }
          };
          const handleOpen = reactExports.useCallback((event, userId) => {
            setOpen(event.currentTarget);
            setPopoverUserId(userId);
          }, []);
          const handleClose = reactExports.useCallback(() => {
            setOpen(null);
            setPopoverUserId(null);
          }, []);
          return /* @__PURE__ */jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
            children: [/* @__PURE__ */jsxRuntimeExports.jsxs(Box, {
              display: "flex",
              justifyContent: "space-between",
              children: [/* @__PURE__ */jsxRuntimeExports.jsx(Typography, {
                variant: "h5",
                sx: {
                  mb: 3
                },
                children: "Users"
              }), /* @__PURE__ */jsxRuntimeExports.jsxs(Button, {
                className: styles$1.addUser,
                onClick: () => handleOpenModal(),
                children: [/* @__PURE__ */jsxRuntimeExports.jsx(PersonAdd, {}), t("users_manage.add_user")]
              })]
            }), /* @__PURE__ */jsxRuntimeExports.jsx(TableContainer, {
              sx: {
                overflow: "unset",
                [`& .${tableCellClasses.head}`]: {
                  color: "text.primary"
                },
                [`& .${tableCellClasses.root}`]: {
                  bgcolor: "background.default",
                  borderBottomColor: theme => theme.palette.divider
                }
              },
              children: /* @__PURE__ */jsxRuntimeExports.jsxs(Table, {
                sx: {
                  minWidth: 650
                },
                "aria-label": "simple table",
                children: [/* @__PURE__ */jsxRuntimeExports.jsx(TableHead, {
                  children: /* @__PURE__ */jsxRuntimeExports.jsxs(TableRow, {
                    children: [/* @__PURE__ */jsxRuntimeExports.jsx(TableCell, {
                      align: "left",
                      children: /* @__PURE__ */jsxRuntimeExports.jsx(TableSortLabel$1, {
                        active: orderBy === "name",
                        direction: orderBy === "name" ? orderDirection : "asc",
                        onClick: () => handleRequestSort("name"),
                        children: t("users_manage.name")
                      })
                    }), /* @__PURE__ */jsxRuntimeExports.jsx(TableCell, {
                      align: "left",
                      children: /* @__PURE__ */jsxRuntimeExports.jsx(TableSortLabel$1, {
                        active: orderBy === "email",
                        direction: orderBy === "email" ? orderDirection : "asc",
                        onClick: () => handleRequestSort("email"),
                        children: t("users_manage.email")
                      })
                    }), /* @__PURE__ */jsxRuntimeExports.jsx(TableCell, {
                      align: "left",
                      children: /* @__PURE__ */jsxRuntimeExports.jsx(TableSortLabel$1, {
                        active: orderBy === "roles",
                        direction: orderBy === "roles" ? orderDirection : "asc",
                        onClick: () => handleRequestSort("roles"),
                        children: t("users_manage.roles")
                      })
                    })]
                  })
                }), /* @__PURE__ */jsxRuntimeExports.jsx(TableBody, {
                  children: sortedUsers.map(user => {
                    return /* @__PURE__ */jsxRuntimeExports.jsxs(React.Fragment, {
                      children: [/* @__PURE__ */jsxRuntimeExports.jsxs(TableRow, {
                        children: [/* @__PURE__ */jsxRuntimeExports.jsxs(TableCell, {
                          align: "left",
                          children: [user.firstName, " ", user.lastName]
                        }), /* @__PURE__ */jsxRuntimeExports.jsx(TableCell, {
                          align: "left",
                          children: user.email
                        }), /* @__PURE__ */jsxRuntimeExports.jsx(TableCell, {
                          align: "left",
                          children: user.roles.map(role => t(`label.${role}`)).join(", ")
                        }), /* @__PURE__ */jsxRuntimeExports.jsx(TableCell, {
                          align: "right",
                          padding: "none",
                          children: /* @__PURE__ */jsxRuntimeExports.jsx(IconButton, {
                            onClick: event => handleOpen(event, user.id),
                            children: /* @__PURE__ */jsxRuntimeExports.jsx(Iconify, {
                              icon: "carbon:overflow-menu-vertical"
                            })
                          })
                        })]
                      }, user.id), /* @__PURE__ */jsxRuntimeExports.jsxs(Popover, {
                        open: Boolean(open) && popoverUserId === user.id,
                        anchorEl: open,
                        onClose: handleClose,
                        anchorOrigin: {
                          vertical: "top",
                          horizontal: "right"
                        },
                        transformOrigin: {
                          vertical: "top",
                          horizontal: "right"
                        },
                        slotProps: {
                          paper: {
                            sx: {
                              width: 160
                            }
                          }
                        },
                        children: [/* @__PURE__ */jsxRuntimeExports.jsxs(MenuItem, {
                          onClick: () => {
                            handleEditUser(user.id);
                          },
                          children: [/* @__PURE__ */jsxRuntimeExports.jsx(Iconify, {
                            icon: "carbon:edit",
                            sx: {
                              mr: 1
                            }
                          }), " ", t("users_manage.title_edit")]
                        }), /* @__PURE__ */jsxRuntimeExports.jsx(Divider, {
                          sx: {
                            borderStyle: "dashed",
                            mt: 0.5
                          }
                        }), /* @__PURE__ */jsxRuntimeExports.jsxs(MenuItem, {
                          onClick: () => {
                            setOpen(null);
                            setUserToDelete(user);
                          },
                          sx: {
                            color: "error.main"
                          },
                          children: [/* @__PURE__ */jsxRuntimeExports.jsx(Iconify, {
                            icon: "carbon:trash-can",
                            sx: {
                              mr: 1
                            }
                          }), " ", t("users_manage.title_delete")]
                        })]
                      })]
                    }, user.id);
                  })
                })]
              })
            }), Boolean(userToDelete) && /* @__PURE__ */jsxRuntimeExports.jsx(UserDelete, {
              deleteUser,
              name: userToDelete.firstName + " " + userToDelete.lastName,
              open: Boolean(userToDelete),
              onClose: onCloseModal
            }), userModal && /* @__PURE__ */jsxRuntimeExports.jsx(AddEditUser, {
              userId: modalUserId,
              open: userModal,
              onClose: handleCloseModal
            })]
          });
        };
        function ManageUsers() {
          return /* @__PURE__ */jsxRuntimeExports.jsx(Box, {
            className: styles$2.mainContainer,
            children: /* @__PURE__ */jsxRuntimeExports.jsx(UsersTable, {})
          });
        }
      }
    };
  });
})();
//# sourceMappingURL=index-legacy-VlC2822q.js.map
