import { c as createSvgIcon, j as jsxRuntimeExports, w as useNavigate, x as useTranslation, bt as Card, B as Box, a1 as Button, a0 as Typography, T as TokenService, bK as Link, r as reactExports, z as useDispatch, a2 as SurveyService, an as CircularProgress, a7 as onError } from "./index-RBnW6nvi.js";
import { U as UserService } from "./UserService-armPMgIn.js";
import { r as routes, R as ROLES, d as dayMonthUeatFormat, s as serverDateTimeToLocalDateTime } from "./Web-KOHZ4PI_.js";
import { S as Stack } from "./FormControlLabel-B-3jdeza.js";
import "./DatePicker-AVKIEE0b.js";
import "./Grid-q5yBxj4Y.js";
import "./TextField-lJ98NZsg.js";
import "./Checkbox-HSUkhdvK.js";
import "./SwitchBase-naWSSwc-.js";
const Add = createSvgIcon(/* @__PURE__ */ jsxRuntimeExports.jsx("path", {
  d: "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"
}), "Add");
const mainContainer = "_mainContainer_7v3z2_1";
const content = "_content_7v3z2_10";
const loadingWrapper = "_loadingWrapper_7v3z2_14";
const styles$2 = {
  mainContainer,
  content,
  loadingWrapper
};
const byRoleWrap = "_byRoleWrap_1dxko_1";
const styles$1 = {
  byRoleWrap
};
const CountsByRole = ({ countByRole }) => {
  const navigate = useNavigate();
  const { t } = useTranslation("manage");
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: styles$1.byRoleWrap, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { component: "b", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { component: "span", children: [
          countByRole == null ? void 0 : countByRole.superAdmin,
          " ",
          t("super_admins"),
          " ,"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { component: "span", children: [
          countByRole == null ? void 0 : countByRole.surveyAdmin,
          " ",
          t("admins"),
          ","
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { component: "span", children: [
          countByRole == null ? void 0 : countByRole.surveyor,
          " ",
          t("surveyors"),
          ","
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { component: "span", children: [
        " ",
        t("registered")
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Button,
      {
        onClick: () => {
          navigate(routes.manageUsers);
        },
        children: t("manage_users")
      }
    )
  ] });
};
const HeaderContent = () => {
  const navigate = useNavigate();
  const { t } = useTranslation("manage");
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
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Stack,
    {
      sx: { p: "10px" },
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { flexDirection: "row", alignItems: "center", gap: 2, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { sx: { fontSize: "20px" }, children: t("my_surveys") }),
        shouldShowClickAdd() && /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { onClick: clickAdd, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Add, {}),
          t("new_survey")
        ] })
      ] })
    }
  );
};
const surveyHeader = "_surveyHeader_1yxw9_1";
const contentCard = "_contentCard_1yxw9_7";
const actionBtn = "_actionBtn_1yxw9_11";
const styles = {
  surveyHeader,
  contentCard,
  actionBtn
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
const status = (survey) => {
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
const bgHeader = (status2) => {
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
const Survey = ({ survey }) => {
  var _a;
  const { t } = useTranslation("manage");
  const surveyStatus = status(survey);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { sx: { borderRadius: "10px" }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Box,
      {
        className: styles.surveyHeader,
        sx: { background: bgHeader(surveyStatus) },
        children: surveyStatus
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { className: styles.contentCard, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/design-survey/".concat(survey.id), title: "Design", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "h5", children: survey.name }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { sx: { mt: "5px" }, children: [
        t("added"),
        dayMonthUeatFormat(
          serverDateTimeToLocalDateTime(survey.creationDate)
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { children: [
        t("last_modified"),
        " ",
        dayMonthUeatFormat(
          serverDateTimeToLocalDateTime(survey.lastModified)
        )
      ] }),
      t("responses_count"),
      " ",
      survey == null ? void 0 : survey.responsesCount,
      ((_a = survey == null ? void 0 : survey.latestVersion) == null ? void 0 : _a.published) === false && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Unpublished Changes" }),
        " "
      ] })
    ] })
  ] });
};
function Dashboard() {
  const [surveys, setSurveys] = reactExports.useState([]);
  const [fetchingSurveys, setFetchingSurveys] = reactExports.useState(true);
  const [countByRole, setCountByRole] = reactExports.useState(null);
  const user = TokenService.getUser();
  const isSuperAdmin = user.roles.includes(ROLES.SUPER_ADMIN);
  const dispatch = useDispatch();
  reactExports.useEffect(() => {
    if (isSuperAdmin) {
      UserService.getCountByRole().then((res) => {
        if (res) {
          setCountByRole(res);
        }
      });
    }
    const processApirror = (e) => {
      setFetchingSurveys(false);
      onApiError({
        error: e,
        globalErrorHandler: (processedError) => {
          dispatch(onError(processedError));
        }
      });
    };
    SurveyService.getAllSurveys().then((data) => {
      if (data) {
        setFetchingSurveys(false);
        setSurveys(data);
      }
    }).catch((e) => processApirror(e));
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { className: styles$2.mainContainer, children: [
    isSuperAdmin && /* @__PURE__ */ jsxRuntimeExports.jsx(CountsByRole, { countByRole }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { className: styles$2.content, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(HeaderContent, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Stack, { flexDirection: "row", gap: 4, flexWrap: "wrap", children: !fetchingSurveys ? surveys == null ? void 0 : surveys.map((survey) => {
        return /* @__PURE__ */ jsxRuntimeExports.jsx(Survey, { survey }, survey.id);
      }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: styles$2.loadingWrapper, children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircularProgress, {}) }) })
    ] })
  ] });
}
export {
  Dashboard as default
};
//# sourceMappingURL=index-XBlUbiBf.js.map