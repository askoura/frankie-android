import { j as jsxRuntimeExports, f as generateUtilityClasses, g as generateUtilityClass, h as capitalize, _ as _extends, r as reactExports, b as _objectWithoutPropertiesLoose, d as clsx, B as Box, R as React } from "./index-DqOHBPA_.js";
import { U as UserDelete } from "./index-_dzKkCYk.js";
import { f as createSvgIcon, h as styled, B as ButtonBase, e as useThemeProps, c as composeClasses, J as useService, E as useTranslation, K as useDispatch, O as setLoading, aq as PROCESSED_ERRORS, T as Typography, aH as Stack, ap as Button, I as IconButton, bG as Popover, M as MenuItem } from "./use-service-B2Fih2ge.js";
import { u as useForm, m as ROLES, F as FormProvider, R as RHFTextField, n as RHFMultiSelect, I as Iconify } from "./Web-DdmaLZWw.js";
import { c as create$3, a as create$6, o, L as LoadingButton } from "./yup-D0NbELJS.js";
import { b as Dialog } from "./DatePicker-9Pk1EwA1.js";
import { C as Card } from "./Card-CfNjVYcu.js";
import { T as TableContainer, a as Table, b as TableRow, c as TableBody } from "./TableRow-BC97XHD1.js";
import { a as tableCellClasses } from "./tableRowClasses-vPBqZyH3.js";
import { T as TableHead } from "./TableHead-B6L6rCGe.js";
import { T as TableCell } from "./TableCell-CZrIf-eW.js";
import { D as Divider } from "./Divider-DUpnd__V.js";
import "./Checkbox-47V_54xr.js";
import "./SwitchBase-rlcQTk7F.js";
import "./radioClasses-D8j8JIb8.js";
import "./FormControlLabel-BnMNrqju.js";
import "./TextField-Fj584c9C.js";
import "./Grid-nW54Jdfg.js";
const ArrowDownwardIcon = createSvgIcon(/* @__PURE__ */ jsxRuntimeExports.jsx("path", {
  d: "M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"
}), "ArrowDownward");
function getTableSortLabelUtilityClass(slot) {
  return generateUtilityClass("MuiTableSortLabel", slot);
}
const tableSortLabelClasses = generateUtilityClasses("MuiTableSortLabel", ["root", "active", "icon", "iconDirectionDesc", "iconDirectionAsc"]);
const tableSortLabelClasses$1 = tableSortLabelClasses;
const _excluded = ["active", "children", "className", "direction", "hideSortIcon", "IconComponent"];
const useUtilityClasses = (ownerState) => {
  const {
    classes,
    direction,
    active
  } = ownerState;
  const slots = {
    root: ["root", active && "active"],
    icon: ["icon", "iconDirection".concat(capitalize(direction))]
  };
  return composeClasses(slots, getTableSortLabelUtilityClass, classes);
};
const TableSortLabelRoot = styled(ButtonBase, {
  name: "MuiTableSortLabel",
  slot: "Root",
  overridesResolver: (props, styles2) => {
    const {
      ownerState
    } = props;
    return [styles2.root, ownerState.active && styles2.active];
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
    ["& .".concat(tableSortLabelClasses$1.icon)]: {
      opacity: 0.5
    }
  },
  ["&.".concat(tableSortLabelClasses$1.active)]: {
    color: (theme.vars || theme).palette.text.primary,
    ["& .".concat(tableSortLabelClasses$1.icon)]: {
      opacity: 1,
      color: (theme.vars || theme).palette.text.secondary
    }
  }
}));
const TableSortLabelIcon = styled("span", {
  name: "MuiTableSortLabel",
  slot: "Icon",
  overridesResolver: (props, styles2) => {
    const {
      ownerState
    } = props;
    return [styles2.icon, styles2["iconDirection".concat(capitalize(ownerState.direction))]];
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
const TableSortLabel = /* @__PURE__ */ reactExports.forwardRef(function TableSortLabel2(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiTableSortLabel"
  });
  const {
    active = false,
    children,
    className,
    direction = "asc",
    hideSortIcon = false,
    IconComponent = ArrowDownwardIcon
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded);
  const ownerState = _extends({}, props, {
    active,
    direction,
    hideSortIcon,
    IconComponent
  });
  const classes = useUtilityClasses(ownerState);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(TableSortLabelRoot, _extends({
    className: clsx(classes.root, className),
    component: "span",
    disableRipple: true,
    ownerState,
    ref
  }, other, {
    children: [children, hideSortIcon && !active ? null : /* @__PURE__ */ jsxRuntimeExports.jsx(TableSortLabelIcon, {
      as: IconComponent,
      className: clsx(classes.icon),
      ownerState
    })]
  }));
});
const TableSortLabel$1 = TableSortLabel;
const PersonAdd = createSvgIcon(/* @__PURE__ */ jsxRuntimeExports.jsx("path", {
  d: "M15 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm-9-2V7H4v3H1v2h3v3h2v-3h3v-2H6zm9 4c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
}), "PersonAdd");
const mainContainer$1 = "_mainContainer_1u62w_1";
const content = "_content_1u62w_9";
const styles$2 = {
  mainContainer: mainContainer$1,
  content
};
const addUser = "_addUser_6nyqh_1";
const styles$1 = {
  addUser
};
const mainContainer = "_mainContainer_sp6mp_1";
const createUserCard = "_createUserCard_sp6mp_9";
const formGroup = "_formGroup_sp6mp_13";
const errorText = "_errorText_sp6mp_17";
const styles = {
  mainContainer,
  createUserCard,
  formGroup,
  errorText
};
function AddEditUser({ userId, open, onClose }) {
  const userService = useService("user");
  const { t } = useTranslation("manage");
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
  const {
    setError,
    reset,
    handleSubmit,
    formState: { isSubmitting }
  } = methods;
  reactExports.useEffect(() => {
    if (userId) {
      dispatch(setLoading(true));
      userService.getUser({ userId }).then((response) => {
        dispatch(setLoading(false));
        reset(response);
      });
    }
  }, [reset, userId]);
  const onSubmit = handleSubmit(async (data) => {
    dispatch(setLoading(true));
    const { firstName, lastName, email, roles } = data;
    if (userId) {
      userService.updateUser({
        userId,
        data: { email, firstName, lastName, roles }
      }).then(() => {
        onClose();
      }).catch((processedError) => {
        if (processedError.name == PROCESSED_ERRORS.DUPLICATE_EMAIL.name) {
          setError("email", {
            type: "manual",
            message: t("processed_errors.".concat(processedError.name))
          });
        }
      }).finally(() => {
        dispatch(setLoading(false));
      });
    } else {
      userService.createUser({ email, firstName, lastName, roles }).then(() => {
        onClose();
      }).catch((processedError) => {
        if (processedError.name == PROCESSED_ERRORS.DUPLICATE_EMAIL.name) {
          setError("email", {
            type: "manual",
            message: t("processed_errors.".concat(processedError.name))
          });
        }
      }).finally(() => {
        dispatch(setLoading(false));
      });
    }
  });
  const OPTIONS = [
    { value: ROLES.SUPER_ADMIN, label: t("label.super_admin") },
    { value: ROLES.SURVEY_ADMIN, label: t("label.survey_admin") },
    { value: ROLES.ANALYST, label: t("label.analyst") },
    { value: ROLES.SURVEYOR, label: t("label.surveyor") }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Dialog, { open, onClose, maxWidth: "md", fullWidth: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { sx: { overflow: "visible" }, className: styles.createUserCard, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "h4", sx: { mb: 3 }, children: userId ? t("edit_user.title") : t("add_user.title") }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(FormProvider, { methods, onSubmit, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { spacing: 2.5, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(RHFTextField, { name: "firstName", label: t("label.first_name") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(RHFTextField, { name: "lastName", label: t("label.last_name") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(RHFTextField, { name: "email", label: t("label.email") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          RHFMultiSelect,
          {
            chip: true,
            checkbox: true,
            name: "roles",
            label: t("add_user.roles"),
            options: OPTIONS
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Box,
        {
          sx: {
            display: "flex",
            gap: "1rem",
            justifyContent: "flex-end",
            mt: "40px"
          },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              LoadingButton,
              {
                onClick: () => onClose(true),
                color: "inherit",
                size: "large",
                variant: "contained",
                children: t("add_user.cancel")
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              LoadingButton,
              {
                color: "inherit",
                size: "large",
                type: "submit",
                variant: "contained",
                loading: isSubmitting,
                children: t("add_user.save")
              }
            )
          ]
        }
      )
    ] })
  ] }) });
}
const UsersTable = () => {
  const userService = useService("user");
  const { t } = useTranslation("manage");
  const [users, setUsers] = reactExports.useState([]);
  const dispatch = useDispatch();
  const [open, setOpen] = reactExports.useState(null);
  const [orderDirection, setOrderDirection] = reactExports.useState("asc");
  const [orderBy, setOrderBy] = reactExports.useState("name");
  const [modalUserId, setModalUserId] = reactExports.useState(null);
  const [popoverUserId, setPopoverUserId] = reactExports.useState(null);
  const getUsers = () => {
    dispatch(setLoading(true));
    userService.getAllUsers().then((res) => {
      if (res) {
        setUsers(res);
      }
    }).finally(() => {
      dispatch(setLoading(false));
    });
  };
  const [userToDelete, setUserToDelete] = reactExports.useState(null);
  const onCloseModal = () => {
    setUserToDelete(null);
  };
  const deleteUser = () => {
    userService.deleteUser({ userId: userToDelete.id }).then(() => {
      onCloseModal();
      getUsers();
    }).catch((e) => {
    });
  };
  reactExports.useEffect(() => {
    getUsers();
  }, []);
  const handleRequestSort = (property) => {
    const isAsc = orderBy === property && orderDirection === "asc";
    setOrderDirection(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };
  const sortFunction = (array, comparator) => {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
      const order = comparator(a[0], b[0]);
      if (order !== 0)
        return order;
      return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
  };
  const getComparator = (order, orderBy2) => {
    return order === "desc" ? (a, b) => descendingComparator(a, b, orderBy2) : (a, b) => -descendingComparator(a, b, orderBy2);
  };
  const descendingComparator = (a, b, orderBy2) => {
    if (orderBy2 === "name") {
      const nameA = "".concat(a.firstName, " ").concat(a.lastName).toLowerCase();
      const nameB = "".concat(b.firstName, " ").concat(b.lastName).toLowerCase();
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
  const sortedUsers = sortFunction(
    users,
    getComparator(orderDirection, orderBy)
  );
  const [userModal, setUserModal] = reactExports.useState(false);
  const handleOpenModal = (userId = null) => {
    setModalUserId(userId);
    setUserModal(true);
  };
  const handleEditUser = (userId) => {
    handleOpenModal(userId);
    setOpen(null);
  };
  const handleCloseModal = (prop) => {
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
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { display: "flex", justifyContent: "space-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "h5", sx: { mb: 3 }, children: "Users" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { className: styles$1.addUser, onClick: () => handleOpenModal(), children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(PersonAdd, {}),
        t("users_manage.add_user")
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      TableContainer,
      {
        sx: {
          overflow: "unset",
          ["& .".concat(tableCellClasses.head)]: {
            color: "text.primary"
          },
          ["& .".concat(tableCellClasses.root)]: {
            bgcolor: "background.default",
            borderBottomColor: (theme) => theme.palette.divider
          }
        },
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Table, { sx: { minWidth: 650 }, "aria-label": "simple table", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { align: "left", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              TableSortLabel$1,
              {
                active: orderBy === "name",
                direction: orderBy === "name" ? orderDirection : "asc",
                onClick: () => handleRequestSort("name"),
                children: t("users_manage.name")
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { align: "left", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              TableSortLabel$1,
              {
                active: orderBy === "email",
                direction: orderBy === "email" ? orderDirection : "asc",
                onClick: () => handleRequestSort("email"),
                children: t("users_manage.email")
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { align: "left", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              TableSortLabel$1,
              {
                active: orderBy === "roles",
                direction: orderBy === "roles" ? orderDirection : "asc",
                onClick: () => handleRequestSort("roles"),
                children: t("users_manage.roles")
              }
            ) })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableBody, { children: sortedUsers.map((user) => {
            return /* @__PURE__ */ jsxRuntimeExports.jsxs(React.Fragment, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(TableCell, { align: "left", children: [
                  user.firstName,
                  " ",
                  user.lastName
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { align: "left", children: user.email }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { align: "left", children: user.roles.map((role) => t("label.".concat(role))).join(", ") }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { align: "right", padding: "none", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  IconButton,
                  {
                    onClick: (event) => handleOpen(event, user.id),
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "carbon:overflow-menu-vertical" })
                  }
                ) })
              ] }, user.id),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Popover,
                {
                  open: Boolean(open) && popoverUserId === user.id,
                  anchorEl: open,
                  onClose: handleClose,
                  anchorOrigin: { vertical: "top", horizontal: "right" },
                  transformOrigin: { vertical: "top", horizontal: "right" },
                  slotProps: {
                    paper: {
                      sx: { width: 160 }
                    }
                  },
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      MenuItem,
                      {
                        onClick: () => {
                          handleEditUser(user.id);
                        },
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "carbon:edit", sx: { mr: 1 } }),
                          " ",
                          t("users_manage.title_edit")
                        ]
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Divider, { sx: { borderStyle: "dashed", mt: 0.5 } }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      MenuItem,
                      {
                        onClick: () => {
                          setOpen(null);
                          setUserToDelete(user);
                        },
                        sx: { color: "error.main" },
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "carbon:trash-can", sx: { mr: 1 } }),
                          " ",
                          t("users_manage.title_delete")
                        ]
                      }
                    )
                  ]
                }
              )
            ] }, user.id);
          }) })
        ] })
      }
    ),
    Boolean(userToDelete) && /* @__PURE__ */ jsxRuntimeExports.jsx(
      UserDelete,
      {
        deleteUser,
        name: userToDelete.firstName + " " + userToDelete.lastName,
        open: Boolean(userToDelete),
        onClose: onCloseModal
      }
    ),
    userModal && /* @__PURE__ */ jsxRuntimeExports.jsx(
      AddEditUser,
      {
        userId: modalUserId,
        open: userModal,
        onClose: handleCloseModal
      }
    )
  ] });
};
function ManageUsers() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { className: styles$2.mainContainer, children: /* @__PURE__ */ jsxRuntimeExports.jsx(UsersTable, {}) });
}
export {
  ManageUsers as default
};
//# sourceMappingURL=index-BDJVjQpk.js.map
