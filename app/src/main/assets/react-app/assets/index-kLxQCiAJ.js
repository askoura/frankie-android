import { c as createSvgIcon, j as jsxRuntimeExports, R as React, z as useDispatch, x as useTranslation, E as useSelector, B as Box, a0 as Typography, a5 as surveyAttributeChanged, r as reactExports, $ as Modal, a1 as Button, P as Paper, I as IconButton, bP as Backdrop, an as CircularProgress, au as permissionsLoading, a2 as SurveyService, av as permissionsReceived, a3 as onApiError, a7 as onError } from "./index-RBnW6nvi.js";
import { A as Accordion, a as AccordionSummary, d as default_1, b as AccordionDetails } from "./ExpandMore-ekVSEAg2.js";
import { i as isSurveyAdmin, b as SURVEY_STATUS, c as SURVEY, e as isSurveyor } from "./Web-KOHZ4PI_.js";
import { S as Switch } from "./Switch-HSw-OeVt.js";
import { U as UserDelete } from "./index-l1Dse2n9.js";
import { U as UserService } from "./UserService-armPMgIn.js";
import { T as TableContainer, a as Table, b as TableRow, c as TableCell, d as TableBody } from "./TableRow-esdE-LAL.js";
import { T as TableHead } from "./TableHead-OntCKomL.js";
import { T as TextField } from "./TextField-lJ98NZsg.js";
import { S as Stack } from "./FormControlLabel-B-3jdeza.js";
import "./DatePicker-AVKIEE0b.js";
import "./Grid-q5yBxj4Y.js";
import "./Checkbox-HSUkhdvK.js";
import "./SwitchBase-naWSSwc-.js";
const Close = createSvgIcon(/* @__PURE__ */ jsxRuntimeExports.jsx("path", {
  d: "M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
}), "Close");
const mainContainer$4 = "_mainContainer_axt4j_1";
const loadingWrapper = "_loadingWrapper_axt4j_11";
const styles$5 = {
  mainContainer: mainContainer$4,
  loadingWrapper
};
const mainContainer$3 = "_mainContainer_19672_1";
const formControlCheckBox$1 = "_formControlCheckBox_19672_9";
const styles$4 = {
  mainContainer: mainContainer$3,
  formControlCheckBox: formControlCheckBox$1
};
const useCustomSwitchStyles = () => {
  return {
    width: 53,
    height: 26,
    padding: 0,
    "& .MuiSwitch-switchBase": {
      padding: "0px",
      top: "2px",
      transform: "translateX(3px)",
      "&.Mui-checked": {
        top: "2px",
        transform: "translateX(29px)",
        color: "#fff",
        "& + .MuiSwitch-track": {
          backgroundColor: "#eff1fd",
          opacity: 1
        },
        "& .MuiSwitch-thumb": {
          width: 21,
          height: 21,
          boxShadow: "none",
          backgroundColor: "#04bdf3"
        }
      }
    },
    "& .MuiSwitch-thumb": {
      width: 21,
      height: 21,
      boxShadow: "none"
    },
    "& .MuiSwitch-track": {
      borderRadius: 13,
      backgroundColor: "#eff1fd",
      opacity: 1,
      "&:before, &:after": {
        content: '""',
        position: "absolute",
        top: "50%",
        transform: "translateY(-50%)",
        width: 24,
        height: 24
      }
    }
  };
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
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Box,
      {
        sx: {
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between"
        },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { color: "#1a2052", fontWeight: "600", children: t("edit_survey.background_audio") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Switch,
            {
              disabled: isDisabled,
              name: SURVEY.BACKGROUND_AUDIO,
              checked: survey.backgroundAudio,
              onChange: onChangeCheckbox,
              sx: useCustomSwitchStyles
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Box,
      {
        sx: {
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between"
        },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { color: "#1a2052", fontWeight: "600", children: t("edit_survey.record_gps") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Switch,
            {
              disabled: isDisabled,
              name: SURVEY.RECORD_GPS,
              checked: survey.recordGps,
              onChange: onChangeCheckbox,
              sx: useCustomSwitchStyles
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Box,
      {
        sx: {
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between"
        },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { color: "#1a2052", fontWeight: "600", children: t("edit_survey.can_lock_survey") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Switch,
            {
              disabled: isDisabled,
              name: SURVEY.CAN_LOCK_SURVEY,
              checked: survey.canLockSurvey,
              onChange: onChangeCheckbox,
              sx: useCustomSwitchStyles
            }
          )
        ]
      }
    )
  ] });
}
const SurveyOffline$1 = React.memo(SurveyOffline);
const mainContainer$2 = "_mainContainer_19672_1";
const formControlCheckBox = "_formControlCheckBox_19672_9";
const styles$3 = {
  mainContainer: mainContainer$2,
  formControlCheckBox
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
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Box,
      {
        sx: {
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between"
        },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { color: "#1a2052", fontWeight: "600", children: t("edit_survey.save_ip") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Switch,
            {
              disabled: isDisabled,
              name: SURVEY.SAVE_IP,
              checked: survey.saveIp,
              onChange: onChangeCheckbox,
              sx: useCustomSwitchStyles
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Box,
      {
        sx: {
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between"
        },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { color: "#1a2052", fontWeight: "600", children: t("edit_survey.save_timings") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Switch,
            {
              disabled: isDisabled,
              name: SURVEY.SAVE_TIMINGS,
              checked: survey.saveTimings,
              onChange: onChangeCheckbox,
              sx: useCustomSwitchStyles
            }
          )
        ]
      }
    )
  ] });
}
const SurveyPrivacy$1 = React.memo(SurveyPrivacy);
const wrapper = "_wrapper_1um7m_1";
const action = "_action_1um7m_13";
const userBlock = "_userBlock_1um7m_18";
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
  const { t } = useTranslation("manage");
  const [allUsers, setAllUsers] = reactExports.useState([]);
  const getAllUsers = () => {
    UserService.getAllUsers().then((data) => {
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
            /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: () => addPermission(user.id), children: t("action_btn.add") })
          ] }, user.id);
        }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { className: styles$2.action, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: onClose, children: t("action_btn.cancel") }) })
      ] })
    }
  );
};
const mainContainer$1 = "_mainContainer_15lvw_1";
const addUserButton = "_addUserButton_15lvw_9";
const styles$1 = {
  mainContainer: mainContainer$1,
  addUserButton
};
function SurveyUsers() {
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
    SurveyService.getSurveyPermissionAll(surveyId).then((data) => {
      if (data) {
        dispatch(permissionsReceived(data));
      }
      dispatch(permissionsLoading(false));
    }).catch((err) => {
      processApirror(err);
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
    onApiError({
      error: e,
      globalErrorHandler: (processedError) => {
        dispatch(onError(processedError));
      }
    });
  };
  const deleteUser = () => {
    dispatch(permissionsLoading(true));
    onCloseModal();
    SurveyService.removePermission(survey.id, userToDelete.id).then(() => {
      loadPermissions(survey.id);
    }).catch((e) => {
      processApirror(e);
    });
  };
  const postPermission = (userId) => {
    onCloseModalAddPermission();
    dispatch(permissionsLoading(true));
    SurveyService.addPermission(survey.id, userId).then(() => {
      loadPermissions(survey.id);
    }).catch((e) => {
      processApirror(e);
    });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { className: styles$1.mainContainer, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Box,
      {
        sx: {
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between"
        },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { color: "#1a2052", fontWeight: "600", children: t("label.public_within_org") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Switch,
            {
              disabled: isDisabled,
              name: SURVEY.PUBLIC_WITHIN_ORG,
              checked: survey.publicWithinOrg,
              onChange: onChangeCheckbox,
              sx: useCustomSwitchStyles
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(TableContainer, { sx: { boxShadow: "none" }, component: Paper, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Table, { sx: { minWidth: 650 }, "aria-label": "simple table", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          TableCell,
          {
            sx: {
              color: "#1a2052"
            },
            align: "left",
            children: t("users_manage.name")
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          TableCell,
          {
            sx: {
              color: "#1a2052"
            },
            align: "left",
            children: t("users_manage.email")
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          TableCell,
          {
            sx: {
              color: "#1a2052"
            },
            align: "left",
            children: t("users_manage.roles")
          }
        ),
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
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            TableCell,
            {
              sx: {
                color: "#1a2052",
                fontWeight: "500"
              },
              align: "left",
              children: user.email
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            TableCell,
            {
              sx: {
                color: "#1a2052",
                fontWeight: "500"
              },
              align: "left",
              children: user.roles.map((role) => t("label.".concat(role))).join(", ")
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            TableCell,
            {
              sx: {
                color: "#1a2052",
                fontWeight: "500"
              },
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
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Button,
      {
        disabled: isDisabled,
        className: styles$1.addUserButton,
        sx: { ml: "auto", mb: "10px", display: "flex", textTransform: "none" },
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
    /* @__PURE__ */ jsxRuntimeExports.jsx(Backdrop, { open: fetching, sx: { position: "absolute" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircularProgress, {}) })
  ] });
}
const SurveyUsers$1 = React.memo(SurveyUsers);
const mainContainer = "_mainContainer_2nff4_1";
const styles = {
  mainContainer
};
function SurveyQuota() {
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
    SurveyService.editPermission(survey.id, userId, data).then(() => {
      loadPermissions(survey.id);
    }).catch((err) => {
      dispatch(permissionsLoading(false));
    });
  };
  const loadPermissions = (surveyId) => {
    SurveyService.getSurveyPermissionAll(surveyId).then((data) => {
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
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Box,
        {
          sx: {
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between"
          },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Box,
              {
                sx: {
                  width: "100%",
                  display: "flex",
                  alignItems: "end",
                  gap: "1rem"
                },
                children: [
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
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Switch,
              {
                disabled: isDisabled,
                checked,
                onChange: onChangeCheckbox,
                sx: useCustomSwitchStyles
              }
            )
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { color: "#1a2052", mb: "10px", fontWeight: "600", variant: "h6", children: t("edit_survey.limit_responses") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableContainer, { sx: { boxShadow: "none" }, component: Paper, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Table,
          {
            sx: {
              minWidth: 650
            },
            "aria-label": "simple table",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  TableCell,
                  {
                    sx: {
                      color: "#1a2052"
                    },
                    align: "left",
                    children: t("edit_survey.surveyor")
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  TableCell,
                  {
                    sx: {
                      color: "#1a2052"
                    },
                    align: "left",
                    children: t("users_manage.roles")
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  TableCell,
                  {
                    sx: {
                      color: "#1a2052"
                    },
                    align: "left",
                    children: t("edit_survey.count")
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  TableCell,
                  {
                    sx: {
                      color: "#1a2052"
                    },
                    align: "left",
                    children: t("edit_survey.limit")
                  }
                )
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TableBody, { children: permissionAll == null ? void 0 : permissionAll.map((permission) => {
                return /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    TableCell,
                    {
                      align: "left",
                      sx: {
                        color: "#1a2052",
                        fontWeight: "500"
                      },
                      children: [
                        permission.user.firstName,
                        " ",
                        permission.user.lastName
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    TableCell,
                    {
                      sx: {
                        color: "#1a2052",
                        fontWeight: "500"
                      },
                      align: "left",
                      children: permission.user.roles.map((role) => t("label.".concat(role))).join(", ")
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    TableCell,
                    {
                      sx: {
                        color: "#1a2052",
                        fontWeight: "500"
                      },
                      align: "left",
                      children: permission.count
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    TableCell,
                    {
                      sx: {
                        color: "#1a2052",
                        fontWeight: "500"
                      },
                      align: "left",
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                        UserQuota,
                        {
                          t,
                          quota: permission.quota,
                          isDisabled,
                          onSubmit: (quota) => {
                            putPermissionBySurveyor(permission.user.id, quota);
                          }
                        }
                      )
                    }
                  )
                ] }, permission.user.id);
              }) })
            ]
          }
        ) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Backdrop, { open: fetching, sx: { position: "absolute" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircularProgress, {}) })
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
        sx: {
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: ".5rem"
        },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { color: "#1a2052", fontWeight: "600", children: t("label.apply_quota") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Switch,
            {
              disabled: isDisabled,
              checked,
              onChange: onChangeCheckbox,
              sx: useCustomSwitchStyles
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { flexDirection: "row", alignItems: "bottom", children: [
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
  const sections = [
    {
      id: "offline",
      title: t("edit_survey.offline"),
      component: /* @__PURE__ */ jsxRuntimeExports.jsx(SurveyOffline$1, {})
    },
    {
      id: "quotas",
      title: t("edit_survey.quotas"),
      component: /* @__PURE__ */ jsxRuntimeExports.jsx(SurveyQuota$1, {})
    },
    {
      id: "survey_users",
      title: t("edit_survey.survey_users"),
      component: /* @__PURE__ */ jsxRuntimeExports.jsx(SurveyUsers$1, {})
    },
    {
      id: "privacy",
      title: t("edit_survey.privacy"),
      component: /* @__PURE__ */ jsxRuntimeExports.jsx(SurveyPrivacy$1, {})
    }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { className: styles$5.mainContainer, children: sections.map((section) => {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Accordion,
      {
        sx: {
          boxShadow: "none",
          borderRadius: "15px",
          "&.MuiAccordion-root:first-of-type": {
            borderRadius: "15px"
          },
          "&.MuiPaper-root:before": {
            display: "none"
          },
          padding: "2rem"
        },
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
          /* @__PURE__ */ jsxRuntimeExports.jsx(AccordionDetails, { sx: { paddingLeft: "3rem" }, children: section.component })
        ]
      },
      section.id
    );
  }) });
}
const index = React.memo(EditSurvey);
export {
  index as default
};
//# sourceMappingURL=index-kLxQCiAJ.js.map
