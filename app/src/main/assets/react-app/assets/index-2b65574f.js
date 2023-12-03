import { n as createSvgIcon, j as jsxRuntimeExports, u as useTranslation, a as useNavigate, r as reactExports, i as useDispatch, E as TableContainer, G as Paper, H as Table, J as TableHead, K as TableRow, M as TableCell, N as TableBody, f as IconButton, O as Delete, h as Button, Q as UserDelete, s as setLoading, U as UserService, B as Box } from "./index-a69683b4.js";
const Edit = createSvgIcon(/* @__PURE__ */ jsxRuntimeExports.jsx("path", {
  d: "M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"
}), "Edit");
const PersonAdd = createSvgIcon(/* @__PURE__ */ jsxRuntimeExports.jsx("path", {
  d: "M15 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm-9-2V7H4v3H1v2h3v3h2v-3h3v-2H6zm9 4c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
}), "PersonAdd");
const mainContainer = "_mainContainer_l2mhs_1";
const content = "_content_l2mhs_7";
const styles$1 = {
  mainContainer,
  content
};
const addUser = "_addUser_6nyqh_1";
const styles = {
  addUser
};
const UsersTable = () => {
  const { t } = useTranslation("manage");
  const navigate = useNavigate();
  const [users, setUsers] = reactExports.useState([]);
  const dispatch = useDispatch();
  const getUsers = () => {
    dispatch(setLoading(true));
    UserService.getAllUsers().then((res) => {
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
    UserService.deleteUser({ userId: userToDelete.id }).then(() => {
      onCloseModal();
      getUsers();
    }).catch((e) => {
      onApiError({
        error: e,
        globalErrorHandler: (processedError) => {
          dispatch(onError(processedError));
        }
      });
    });
  };
  reactExports.useEffect(() => {
    getUsers();
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(TableContainer, { component: Paper, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Table, { sx: { minWidth: 650 }, "aria-label": "simple table", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { align: "left", children: t("users_manage.name") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { align: "left", children: t("users_manage.email") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { align: "left", children: t("users_manage.roles") })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TableBody, { children: users.map((user) => {
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(TableCell, { component: "th", scope: "row", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              IconButton,
              {
                title: t("users_manage.title_delete"),
                onClick: () => {
                  setUserToDelete(user);
                },
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(Delete, {})
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              IconButton,
              {
                title: t("users_manage.title_edit"),
                onClick: () => {
                  navigate(`/edit-user/${user.id}`);
                },
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(Edit, {})
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(TableCell, { align: "left", children: [
            user.firstName,
            " ",
            user.lastName
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { align: "left", children: user.email }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { align: "left", children: user.roles.map((role) => t(`label.${role}`)).join(", ") })
        ] }, user.id);
      }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Button,
      {
        className: styles.addUser,
        onClick: () => {
          navigate("/add-user");
        },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(PersonAdd, {}),
          t("users_manage.add_user")
        ]
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
    )
  ] });
};
function ManageUsers() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { className: styles$1.mainContainer, children: /* @__PURE__ */ jsxRuntimeExports.jsx(UsersTable, {}) });
}
export {
  ManageUsers as default
};
//# sourceMappingURL=index-2b65574f.js.map
