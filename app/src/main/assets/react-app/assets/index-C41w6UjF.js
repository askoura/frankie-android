import { j as jsxRuntimeExports, R as React, B as Box, r as reactExports, L as LoadingDots } from "./index-DqOHBPA_.js";
import { A as Accordion, a as AccordionSummary, d as default_1, b as AccordionDetails } from "./ExpandMore-C4KCK0FI.js";
import { f as createSvgIcon, K as useDispatch, E as useTranslation, A as useSelector, T as Typography, ar as surveyAttributeChanged, J as useService, ao as Modal, ap as Button, I as IconButton, aQ as Backdrop, aC as permissionsLoading, aD as permissionsReceived, j as Paper, aH as Stack } from "./use-service-B2Fih2ge.js";
import { i as isSurveyAdmin, w as SURVEY_STATUS, t as RHFSwitch, x as SURVEY, y as isSurveyor } from "./Web-DdmaLZWw.js";
import { U as UserDelete } from "./index-_dzKkCYk.js";
import { T as TableContainer, a as Table, b as TableRow, c as TableBody } from "./TableRow-BC97XHD1.js";
import { a as tableCellClasses } from "./tableRowClasses-vPBqZyH3.js";
import { T as TableHead } from "./TableHead-B6L6rCGe.js";
import { T as TableCell } from "./TableCell-CZrIf-eW.js";
import { T as TextField } from "./TextField-Fj584c9C.js";
import "./Checkbox-47V_54xr.js";
import "./SwitchBase-rlcQTk7F.js";
import "./DatePicker-9Pk1EwA1.js";
import "./Grid-nW54Jdfg.js";
import "./radioClasses-D8j8JIb8.js";
import "./FormControlLabel-BnMNrqju.js";
const Close = createSvgIcon(/* @__PURE__ */ jsxRuntimeExports.jsx("path", {
  d: "M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
}), "Close");
const mainContainer$4 = "_mainContainer_1vnym_1";
const loadingWrapper = "_loadingWrapper_1vnym_10";
const accordionContainer = "_accordionContainer_1vnym_17";
const accordionDetails = "_accordionDetails_1vnym_26";
const styles$5 = {
  mainContainer: mainContainer$4,
  loadingWrapper,
  accordionContainer,
  accordionDetails
};
const mainContainer$3 = "_mainContainer_11v9s_1";
const formControlCheckBox$1 = "_formControlCheckBox_11v9s_8";
const boxContainer$2 = "_boxContainer_11v9s_13";
const styles$4 = {
  mainContainer: mainContainer$3,
  formControlCheckBox: formControlCheckBox$1,
  boxContainer: boxContainer$2
};
function SurveyOffline() {
  const dispatch = useDispatch();
  const { t } = useTranslation("manage");
  const survey = useSelector((state) => state.editState.survey);
  const isDisabled = !isSurveyAdmin() || survey.status == SURVEY_STATUS.CLOSED;
  const onChangeCheckbox = (e) => {
    dispatch(
      surveyAttributeChanged({
        key: e.target.name,
        value: e.target.checked
      })
    );
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { className: styles$4.mainContainer, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { className: styles$4.boxContainer, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { color: "#1a2052", fontWeight: "600", children: t("edit_survey.background_audio") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        RHFSwitch,
        {
          disabled: isDisabled,
          name: SURVEY.BACKGROUND_AUDIO,
          checked: survey.backgroundAudio,
          onChange: onChangeCheckbox
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { className: styles$4.boxContainer, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { color: "#1a2052", fontWeight: "600", children: t("edit_survey.record_gps") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        RHFSwitch,
        {
          disabled: isDisabled,
          name: SURVEY.RECORD_GPS,
          checked: survey.recordGps,
          onChange: onChangeCheckbox
        }
      )
    ] })
  ] });
}
const SurveyOffline$1 = React.memo(SurveyOffline);
const mainContainer$2 = "_mainContainer_zkr72_1";
const formControlCheckBox = "_formControlCheckBox_zkr72_8";
const flexContainer$1 = "_flexContainer_zkr72_12";
const styles$3 = {
  mainContainer: mainContainer$2,
  formControlCheckBox,
  flexContainer: flexContainer$1
};
function SurveyPrivacy() {
  const dispatch = useDispatch();
  const { t } = useTranslation("manage");
  const survey = useSelector((state) => state.editState.survey);
  const isDisabled = !isSurveyAdmin() || survey.status == SURVEY_STATUS.CLOSED;
  const onChangeCheckbox = (e) => {
    dispatch(
      surveyAttributeChanged({
        key: e.target.name,
        value: e.target.checked
      })
    );
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { className: styles$3.mainContainer, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { className: styles$3.flexContainer, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { color: "#1a2052", fontWeight: "600", children: t("edit_survey.save_ip") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        RHFSwitch,
        {
          disabled: isDisabled,
          name: SURVEY.SAVE_IP,
          checked: survey.saveIp,
          onChange: onChangeCheckbox
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { className: styles$3.flexContainer, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { color: "#1a2052", fontWeight: "600", children: t("edit_survey.save_timings") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        RHFSwitch,
        {
          disabled: isDisabled,
          name: SURVEY.SAVE_TIMINGS,
          checked: survey.saveTimings,
          onChange: onChangeCheckbox
        }
      )
    ] })
  ] });
}
const SurveyPrivacy$1 = React.memo(SurveyPrivacy);
const wrapper = "_wrapper_1ks8g_1";
const action = "_action_1ks8g_13";
const userBlock = "_userBlock_1ks8g_18";
const styles$2 = {
  wrapper,
  action,
  userBlock
};
const AddPermission = ({
  open,
  onClose,
  addPermission,
  currentUserIds
}) => {
  const userService = useService("user");
  const { t } = useTranslation("manage");
  const [allUsers, setAllUsers] = reactExports.useState([]);
  const getAllUsers = () => {
    userService.getAllUsers().then((data) => {
      if (data) {
        setAllUsers(data);
      }
    });
  };
  reactExports.useEffect(() => {
    getAllUsers();
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Modal,
    {
      sx: {
        ".MuiBackdrop-root": {
          backgroundColor: "rgba(0, 0, 0, 0.3)"
        }
      },
      open,
      onClose,
      "aria-labelledby": "modal-modal-title",
      "aria-describedby": "modal-modal-description",
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { className: styles$2.wrapper, children: [
        allUsers.filter((user) => {
          return currentUserIds.indexOf(user.id) == -1;
        }).map((user) => {
          return /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { className: styles$2.userBlock, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { children: [
              user.firstName,
              " ",
              user.lastName
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                color: "primary",
                size: "small",
                type: "submit",
                variant: "contained",
                onClick: () => addPermission(user.id),
                children: t("action_btn.add")
              }
            )
          ] }, user.id);
        }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { className: styles$2.action, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: onClose, children: t("action_btn.cancel") }) })
      ] })
    }
  );
};
const mainContainer$1 = "_mainContainer_nmw9d_1";
const addUserButton = "_addUserButton_nmw9d_8";
const boxContainer$1 = "_boxContainer_nmw9d_13";
const tableBodyCell$1 = "_tableBodyCell_nmw9d_20";
const tableHeaderCell$1 = "_tableHeaderCell_nmw9d_25";
const styles$1 = {
  mainContainer: mainContainer$1,
  addUserButton,
  boxContainer: boxContainer$1,
  tableBodyCell: tableBodyCell$1,
  tableHeaderCell: tableHeaderCell$1
};
function SurveyUsers() {
  const surveyService = useService("survey");
  const dispatch = useDispatch();
  const { t } = useTranslation("manage");
  const survey = useSelector((state) => state.editState.survey);
  const fetching = useSelector((state) => state.editState.permissionsLoading);
  const permissionAll = useSelector((state) => state.editState.permissions);
  const isDisabled = fetching || !isSurveyAdmin() || survey.status == SURVEY_STATUS.CLOSED;
  const onChangeCheckbox = (e) => {
    dispatch(
      surveyAttributeChanged({
        key: e.target.name,
        value: e.target.checked
      })
    );
  };
  const loadPermissions = (surveyId) => {
    surveyService.getSurveyPermissionAll(surveyId).then((data) => {
      if (data) {
        dispatch(permissionsReceived(data));
      }
      dispatch(permissionsLoading(false));
    }).catch((err) => {
      processApirror();
    });
  };
  const [userToDelete, setUserToDelete] = reactExports.useState(null);
  const onCloseModal = () => {
    setUserToDelete(null);
  };
  const [addPermission, setAddPermission] = reactExports.useState(false);
  const onCloseModalAddPermission = () => {
    setAddPermission(false);
  };
  const processApirror = (e) => {
    dispatch(permissionsLoading(false));
  };
  const deleteUser = () => {
    dispatch(permissionsLoading(true));
    onCloseModal();
    surveyService.removePermission(survey.id, userToDelete.id).then(() => {
      loadPermissions(survey.id);
    }).catch((e) => {
      processApirror();
    });
  };
  const postPermission = (userId) => {
    onCloseModalAddPermission();
    dispatch(permissionsLoading(true));
    surveyService.addPermission(survey.id, userId).then(() => {
      loadPermissions(survey.id);
    }).catch((e) => {
      processApirror();
    });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { className: styles$1.mainContainer, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { className: styles$1.boxContainer, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { color: "#1a2052", fontWeight: "600", children: t("label.public_within_org") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        RHFSwitch,
        {
          disabled: isDisabled,
          name: SURVEY.PUBLIC_WITHIN_ORG,
          checked: survey.publicWithinOrg,
          onChange: onChangeCheckbox
        }
      )
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
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: styles$1.tableHeaderCell, align: "left", children: t("users_manage.name") }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: styles$1.tableHeaderCell, align: "left", children: t("users_manage.email") }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: styles$1.tableHeaderCell, align: "left", children: t("users_manage.roles") }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, {})
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableBody, { children: permissionAll == null ? void 0 : permissionAll.map(({ user }) => {
            return /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                TableCell,
                {
                  sx: {
                    color: "#1a2052",
                    fontWeight: "500"
                  },
                  align: "left",
                  children: [
                    user.firstName,
                    " ",
                    user.lastName
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: styles$1.tableBodyCell, align: "left", children: user.email }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: styles$1.tableBodyCell, align: "left", children: user.roles.map((role) => t("label.".concat(role))).join(", ") }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                TableCell,
                {
                  className: styles$1.tableBodyCell,
                  component: "th",
                  scope: "row",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    IconButton,
                    {
                      title: t("users_manage.title_delete"),
                      disabled: isDisabled,
                      onClick: () => {
                        setUserToDelete(user);
                      },
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(Close, { sx: { color: "#b9bdcc" } })
                    }
                  )
                }
              )
            ] }, user.id);
          }) })
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Button,
      {
        className: styles$1.addUserButton,
        disabled: isDisabled,
        color: "primary",
        size: "large",
        type: "submit",
        variant: "contained",
        onClick: () => {
          setAddPermission(true);
        },
        children: t("action_btn.add_user")
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
    addPermission && /* @__PURE__ */ jsxRuntimeExports.jsx(
      AddPermission,
      {
        currentUserIds: permissionAll.map((permission) => permission.user.id),
        addPermission: postPermission,
        open: addPermission,
        onClose: onCloseModalAddPermission
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Backdrop, { open: fetching, sx: { position: "absolute" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(LoadingDots, {}) })
  ] });
}
const SurveyUsers$1 = React.memo(SurveyUsers);
const mainContainer = "_mainContainer_zluda_1";
const boxContainer = "_boxContainer_zluda_8";
const tableBodyCell = "_tableBodyCell_zluda_15";
const tableHeaderCell = "_tableHeaderCell_zluda_19";
const flexContainer = "_flexContainer_zluda_23";
const styles = {
  mainContainer,
  boxContainer,
  tableBodyCell,
  tableHeaderCell,
  flexContainer
};
function SurveyQuota() {
  const surveyService = useService("survey");
  const dispatch = useDispatch();
  const { t } = useTranslation("manage");
  const survey = useSelector((state) => state.editState.survey);
  const [checked, setChecked] = reactExports.useState(survey.quota > 0);
  const [limit, setLimit] = reactExports.useState(survey.quota >= 0 ? survey.quota : "");
  const changeLimit = (value) => {
    const intValue = parseInt(value);
    if (Number.isInteger(intValue) && intValue >= 0) {
      setLimit(intValue);
      dispatch(
        surveyAttributeChanged({
          key: "quota",
          value: intValue
        })
      );
    }
  };
  const fetching = useSelector((state) => state.editState.permissionsLoading);
  const permissions = useSelector((state) => state.editState.permissions);
  const permissionAll = permissions == null ? void 0 : permissions.filter((permission) => {
    return isSurveyor(permission.user);
  });
  const onChangeCheckbox = (e) => {
    if (!e.target.checked) {
      setLimit("");
      dispatch(
        surveyAttributeChanged({
          key: "quota",
          value: -1
        })
      );
    }
    setChecked(e.target.checked);
  };
  const putPermissionBySurveyor = (userId, quota) => {
    const data = {
      quota
    };
    dispatch(permissionsLoading(true));
    surveyService.editPermission(survey.id, userId, data).then(() => {
      loadPermissions(survey.id);
    }).catch((err) => {
      dispatch(permissionsLoading(false));
    });
  };
  const loadPermissions = (surveyId) => {
    surveyService.getSurveyPermissionAll(surveyId).then((data) => {
      if (data) {
        dispatch(permissionsReceived(data));
      }
      dispatch(permissionsLoading(false));
    }).catch((err) => {
      dispatch(permissionsLoading(false));
    });
  };
  const isDisabled = fetching || !isSurveyAdmin() || survey.status == SURVEY_STATUS.CLOSED;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { className: styles.mainContainer, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { className: styles.boxContainer, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { className: styles.flexContainer, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { color: "#1a2052", fontWeight: "600", children: t("label.apply_quota") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            TextField,
            {
              variant: "standard",
              type: "number",
              sx: { width: 200 },
              disabled: !checked || isDisabled,
              label: t("label.total_responses_limit"),
              value: limit,
              onChange: (e) => {
                changeLimit(e.target.value);
              }
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          RHFSwitch,
          {
            disabled: isDisabled,
            checked,
            onChange: onChangeCheckbox
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { color: "#1a2052", mb: "10px", fontWeight: "600", variant: "h6", children: t("edit_survey.limit_responses") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableContainer, { sx: { boxShadow: "none" }, component: Paper, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Table,
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
            "aria-label": "simple table",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: styles.tableHeaderCell, align: "left", children: t("edit_survey.surveyor") }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: styles.tableHeaderCell, align: "left", children: t("users_manage.roles") }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: styles.tableHeaderCell, align: "left", children: t("edit_survey.count") }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: styles.tableHeaderCell, align: "left", children: t("edit_survey.limit") })
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TableBody, { children: permissionAll == null ? void 0 : permissionAll.map((permission) => {
                return /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(TableCell, { align: "left", className: styles.tableBodyCell, children: [
                    permission.user.firstName,
                    " ",
                    permission.user.lastName
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: styles.tableBodyCell, align: "left", children: permission.user.roles.map((role) => t("label.".concat(role))).join(", ") }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: styles.tableBodyCell, align: "left", children: permission.count }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: styles.tableBodyCell, align: "left", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    UserQuota,
                    {
                      t,
                      quota: permission.quota,
                      isDisabled,
                      onSubmit: (quota) => {
                        putPermissionBySurveyor(permission.user.id, quota);
                      }
                    }
                  ) })
                ] }, permission.user.id);
              }) })
            ]
          }
        ) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Backdrop, { open: fetching, sx: { position: "absolute" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(LoadingDots, {}) })
  ] });
}
function UserQuota({ t, isDisabled, quota, onSubmit }) {
  const [checked, setChecked] = reactExports.useState(quota > 0);
  const [limit, setLimit] = reactExports.useState(quota >= 0 ? quota : "");
  const onChangeCheckbox = (e) => {
    if (!e.target.checked) {
      setLimit("");
    }
    setChecked(e.target.checked);
  };
  const changeLimit = (value) => {
    const intValue = parseInt(value);
    if (Number.isInteger(intValue) && intValue >= 0) {
      setLimit(intValue);
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Box,
      {
        className: styles.boxContainer,
        sx: {
          marginBottom: ".5rem"
        },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { color: "#1a2052", fontWeight: "600", children: t("label.apply_quota") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            RHFSwitch,
            {
              disabled: isDisabled,
              checked,
              onChange: onChangeCheckbox
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { flexDirection: "row", alignItems: "center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        TextField,
        {
          type: "number",
          variant: "standard",
          label: t("label.responses_limit"),
          disabled: !checked || isDisabled,
          value: limit,
          onChange: (e) => {
            changeLimit(e.target.value);
          }
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Button,
        {
          color: "primary",
          size: "small",
          type: "submit",
          variant: "contained",
          onClick: () => onSubmit(limit == "" ? -1 : limit),
          disabled: limit == "" && quota < 0 || limit == quota,
          children: t("action_btn.save")
        }
      )
    ] })
  ] });
}
const SurveyQuota$1 = React.memo(SurveyQuota);
function EditSurvey() {
  const { t } = useTranslation("manage");
  const combinedSections = [
    {
      id: "offline",
      title: t("edit_survey.offline"),
      component: /* @__PURE__ */ jsxRuntimeExports.jsx(SurveyOffline$1, {})
    },
    {
      id: "privacy",
      title: t("edit_survey.privacy"),
      component: /* @__PURE__ */ jsxRuntimeExports.jsx(SurveyPrivacy$1, {})
    }
  ];
  const sections = [
    ,
    {
      id: "quotas",
      title: t("edit_survey.quotas"),
      component: /* @__PURE__ */ jsxRuntimeExports.jsx(SurveyQuota$1, {})
    },
    {
      id: "survey_users",
      title: t("edit_survey.survey_users"),
      component: /* @__PURE__ */ jsxRuntimeExports.jsx(SurveyUsers$1, {})
    }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { className: styles$5.mainContainer, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Box,
      {
        display: "flex",
        flexWrap: { xs: "wrap", sm: "wrap", md: "nowrap" },
        gap: 4,
        width: "100%",
        children: combinedSections.map((section) => {
          return /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Accordion,
            {
              className: styles$5.accordionContainer,
              defaultExpanded: true,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  AccordionSummary,
                  {
                    expandIcon: /* @__PURE__ */ jsxRuntimeExports.jsx(default_1, {}),
                    "aria-controls": "panel1a-content",
                    id: "panel1a-header",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { fontWeight: "600", color: "#1a2052", variant: "h5", children: section.title })
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(AccordionDetails, { className: styles$5.accordionDetails, children: section.component })
              ]
            },
            section.id
          );
        })
      }
    ),
    sections.map((section) => {
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Accordion,
        {
          className: styles$5.accordionContainer,
          defaultExpanded: true,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              AccordionSummary,
              {
                expandIcon: /* @__PURE__ */ jsxRuntimeExports.jsx(default_1, {}),
                "aria-controls": "panel1a-content",
                id: "panel1a-header",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { fontWeight: "600", color: "#1a2052", variant: "h5", children: section.title })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(AccordionDetails, { className: styles$5.accordionDetails, children: section.component })
          ]
        },
        section.id
      );
    })
  ] });
}
const index = React.memo(EditSurvey);
export {
  index as default
};
//# sourceMappingURL=index-C41w6UjF.js.map
