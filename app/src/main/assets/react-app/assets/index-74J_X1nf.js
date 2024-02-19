import { c as createSvgIcon, j as jsxRuntimeExports, x as useTranslation, w as useNavigate, r as reactExports, z as useDispatch, P as Paper, I as IconButton, a1 as Button, D as setLoading, B as Box } from "./index-RBnW6nvi.js";
import { U as UserService } from "./UserService-armPMgIn.js";
import { U as UserDelete } from "./index-l1Dse2n9.js";
import { T as TableContainer, a as Table, b as TableRow, c as TableCell, d as TableBody } from "./TableRow-esdE-LAL.js";
import { T as TableHead } from "./TableHead-OntCKomL.js";
import { E as Edit } from "./Web-KOHZ4PI_.js";
import "./DatePicker-AVKIEE0b.js";
import "./Grid-q5yBxj4Y.js";
import "./TextField-lJ98NZsg.js";
import "./FormControlLabel-B-3jdeza.js";
import "./Checkbox-HSUkhdvK.js";
import "./SwitchBase-naWSSwc-.js";
const Delete = createSvgIcon(/* @__PURE__ */ jsxRuntimeExports.jsx("path", {
  d: "M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"
}), "Delete");
const PersonAdd = createSvgIcon(/* @__PURE__ */ jsxRuntimeExports.jsx("path", {
  d: "M15 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm-9-2V7H4v3H1v2h3v3h2v-3h3v-2H6zm9 4c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
}), "PersonAdd");
const mainContainer = "_mainContainer_196br_1";
const content = "_content_196br_9";
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
                  navigate("/edit-user/".concat(user.id));
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
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { align: "left", children: user.roles.map((role) => t("label.".concat(role))).join(", ") })
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
//# sourceMappingURL=index-74J_X1nf.js.map
