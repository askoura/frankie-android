import { j as jsxRuntimeExports, r as reactExports, q as interopRequireDefaultExports, B as Box, L as LoadingDots } from "./index-DqOHBPA_.js";
import { f as createSvgIcon, p as useTheme, T as Typography, V as PropTypes, D as requireCreateSvgIcon, E as useTranslation, aH as Stack, I as IconButton, J as useService, K as useDispatch, O as setLoading, aq as PROCESSED_ERRORS, aF as Container, C as TokenService } from "./use-service-B2Fih2ge.js";
import { c as useWidth, S as SavingSurvey, d as default_1$4, i as isSurveyAdmin, E as Edit, e as serverDateTimeToLocalDateTime, f as RHFSelect, u as useForm, h as localDateToServerDateTime, F as FormProvider, R as RHFTextField, j as SURVEY_MODE, k as SurveyClone, m as ROLES } from "./Web-DdmaLZWw.js";
import { R as RouterLink } from "./router-link-Ch5XuWHI.js";
import { L as Link } from "./Link-DhG8SfhC.js";
import { e as dayjs } from "./DatePicker-9Pk1EwA1.js";
import { d as default_1$5 } from "./Delete-CTssxX93.js";
import { C as Card } from "./Card-CfNjVYcu.js";
import { D as Divider } from "./Divider-DUpnd__V.js";
import { c as create$3, a as create$6, o, L as LoadingButton } from "./yup-D0NbELJS.js";
import { T as TablePagination } from "./TablePagination-BsI9RbB4.js";
import "./Checkbox-47V_54xr.js";
import "./SwitchBase-rlcQTk7F.js";
import "./radioClasses-D8j8JIb8.js";
import "./tableRowClasses-vPBqZyH3.js";
import "./FormControlLabel-BnMNrqju.js";
import "./TextField-Fj584c9C.js";
import "./Grid-nW54Jdfg.js";
import "./TableCell-CZrIf-eW.js";
import "./Toolbar-ANEXYwkQ.js";
const Send = createSvgIcon(/* @__PURE__ */ jsxRuntimeExports.jsx("path", {
  d: "M2.01 21 23 12 2.01 3 2 10l15 2-15 2z"
}), "Send");
const Stop = createSvgIcon(/* @__PURE__ */ jsxRuntimeExports.jsx("path", {
  d: "M6 6h12v12H6z"
}), "Stop");
const mainContainer = "_mainContainer_1sp6k_1";
const content = "_content_1sp6k_8";
const loadingWrapper = "_loadingWrapper_1sp6k_12";
const allButton = "_allButton_1sp6k_19";
const styles$3 = {
  mainContainer,
  content,
  loadingWrapper,
  allButton
};
const surveyHeader = "_surveyHeader_1bod0_1";
const contentCard = "_contentCard_1bod0_7";
const actionBtn = "_actionBtn_1bod0_11";
const card = "_card_1bod0_16";
const cardContent$1 = "_cardContent_1bod0_21";
const imageContainer = "_imageContainer_1bod0_27";
const surveyContent = "_surveyContent_1bod0_34";
const surveyTitle = "_surveyTitle_1bod0_42";
const surveyStatus = "_surveyStatus_1bod0_47";
const badge = "_badge_1bod0_53";
const textTransform = "_textTransform_1bod0_59";
const surveyResponse = "_surveyResponse_1bod0_63";
const surveyActions = "_surveyActions_1bod0_70";
const iconButton = "_iconButton_1bod0_80";
const styles$2 = {
  surveyHeader,
  contentCard,
  actionBtn,
  card,
  cardContent: cardContent$1,
  imageContainer,
  surveyContent,
  surveyTitle,
  surveyStatus,
  badge,
  textTransform,
  surveyResponse,
  surveyActions,
  iconButton
};
function remToPx(value) {
  return Math.round(parseFloat(value) * 16);
}
function useTypography(variant) {
  const theme = useTheme();
  const breakpoints = useWidth();
  const key = theme.breakpoints.up(breakpoints === "xl" ? "lg" : breakpoints);
  const hasResponsive = variant === "h1" || variant === "h2" || variant === "h3" || variant === "h4" || variant === "h5" || variant === "h6";
  const getFont = hasResponsive && theme.typography[variant][key] ? theme.typography[variant][key] : theme.typography[variant];
  const fontSize = remToPx(getFont.fontSize);
  const lineHeight = Number(theme.typography[variant].lineHeight) * fontSize;
  const { fontWeight, letterSpacing } = theme.typography[variant];
  return { fontSize, lineHeight, fontWeight, letterSpacing };
}
const TextMaxLine = reactExports.forwardRef(
  ({ asLink, variant = "body1", line = 2, persistent = false, children, sx, ...other }, ref) => {
    const { lineHeight } = useTypography(variant);
    const styles2 = {
      overflow: "hidden",
      textOverflow: "ellipsis",
      display: "-webkit-box",
      WebkitLineClamp: line,
      WebkitBoxOrient: "vertical",
      ...persistent && {
        height: lineHeight * line
      },
      ...sx
    };
    if (asLink) {
      return /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { color: "inherit", ref, variant, sx: { ...styles2 }, ...other, children });
    }
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { ref, variant, sx: { ...styles2 }, ...other, children });
  }
);
TextMaxLine.propTypes = {
  asLink: PropTypes.bool,
  children: PropTypes.node,
  line: PropTypes.number,
  persistent: PropTypes.bool,
  sx: PropTypes.object,
  variant: PropTypes.oneOf([
    "body1",
    "body2",
    "button",
    "caption",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "inherit",
    "overline",
    "subtitle1",
    "subtitle2"
  ])
};
function fDate(date, newFormat) {
  const fm = newFormat || "DD MMM YYYY";
  return date ? dayjs(date).format(fm) : "";
}
var FormatQuote = {};
var _interopRequireDefault$3 = interopRequireDefaultExports;
Object.defineProperty(FormatQuote, "__esModule", {
  value: true
});
var default_1$3 = FormatQuote.default = void 0;
var _createSvgIcon$3 = _interopRequireDefault$3(requireCreateSvgIcon());
var _jsxRuntime$3 = jsxRuntimeExports;
var _default$3 = (0, _createSvgIcon$3.default)(/* @__PURE__ */ (0, _jsxRuntime$3.jsx)("path", {
  d: "M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"
}), "FormatQuote");
default_1$3 = FormatQuote.default = _default$3;
var Warning = {};
var _interopRequireDefault$2 = interopRequireDefaultExports;
Object.defineProperty(Warning, "__esModule", {
  value: true
});
var default_1$2 = Warning.default = void 0;
var _createSvgIcon$2 = _interopRequireDefault$2(requireCreateSvgIcon());
var _jsxRuntime$2 = jsxRuntimeExports;
var _default$2 = (0, _createSvgIcon$2.default)(/* @__PURE__ */ (0, _jsxRuntime$2.jsx)("path", {
  d: "M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"
}), "Warning");
default_1$2 = Warning.default = _default$2;
var Shield = {};
var _interopRequireDefault$1 = interopRequireDefaultExports;
Object.defineProperty(Shield, "__esModule", {
  value: true
});
var default_1$1 = Shield.default = void 0;
var _createSvgIcon$1 = _interopRequireDefault$1(requireCreateSvgIcon());
var _jsxRuntime$1 = jsxRuntimeExports;
var _default$1 = (0, _createSvgIcon$1.default)(/* @__PURE__ */ (0, _jsxRuntime$1.jsx)("path", {
  d: "M12 1 3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"
}), "Shield");
default_1$1 = Shield.default = _default$1;
var FileCopy = {};
var _interopRequireDefault = interopRequireDefaultExports;
Object.defineProperty(FileCopy, "__esModule", {
  value: true
});
var default_1 = FileCopy.default = void 0;
var _createSvgIcon = _interopRequireDefault(requireCreateSvgIcon());
var _jsxRuntime = jsxRuntimeExports;
var _default = (0, _createSvgIcon.default)(/* @__PURE__ */ (0, _jsxRuntime.jsx)("path", {
  d: "M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm-1 4 6 6v10c0 1.1-.9 2-2 2H7.99C6.89 23 6 22.1 6 21l.01-14c0-1.1.89-2 1.99-2h7zm-1 7h5.5L14 6.5V12z"
}), "FileCopy");
default_1 = FileCopy.default = _default;
const STATUS = {
  DRAFT: "draft",
  CLOSED: "closed",
  ACTIVE: "active",
  EXPIRED: "expired",
  SCHEDULED: "scheduled"
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
      return "#e9db3e";
    case STATUS.CLOSED:
      return "#d32f2f";
    case STATUS.EXPIRED:
      return "#9d4435";
    case STATUS.SCHEDULED:
      return "#607d8b";
    case STATUS.ACTIVE:
      return "#669834";
    default:
      return;
  }
};
const Survey = ({
  survey,
  example = false,
  onClone,
  onDelete,
  onClose
}) => {
  const { t } = useTranslation("manage");
  const surveyStatus2 = status(survey);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SavingSurvey, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Card,
      {
        sx: {
          "&:hover": {
            boxShadow: (theme) => theme.customShadows.z24
          }
        },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { sx: { p: 3, pb: 0 }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { spacing: 0.5, sx: { mt: 0, mb: 2 }, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Link,
                {
                  component: survey.status !== "closed" ? RouterLink : void 0,
                  href: example ? "/guest/preview/".concat(survey.id) : "/design-survey/".concat(survey.id),
                  color: "inherit",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(TextMaxLine, { variant: "h4", line: 1, children: survey.name })
                }
              ),
              !example && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Stack,
                  {
                    direction: "row",
                    alignItems: "center",
                    spacing: 0.5,
                    sx: { typography: "body2", color: "text.secondary" },
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "span",
                        {
                          style: {
                            backgroundColor: bgHeader(surveyStatus2)
                          },
                          className: styles$2.badge
                        }
                      ),
                      " ",
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        Typography,
                        {
                          variant: "subtitle2",
                          className: styles$2.textTransform,
                          children: t("status.".concat(surveyStatus2))
                        }
                      )
                    ]
                  }
                ),
                !example && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Stack,
                  {
                    direction: "row",
                    alignItems: "center",
                    spacing: 0.5,
                    sx: { typography: "body2", color: "text.secondary" },
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(default_1$1, {}),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        Typography,
                        {
                          variant: "subtitle2",
                          className: styles$2.textTransform,
                          children: survey.publicWithinOrg ? "Public" : "Private"
                        }
                      )
                    ]
                  }
                ),
                !example && survey.status !== "closed" && survey.latestVersion.published === false && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Stack,
                  {
                    direction: "row",
                    alignItems: "center",
                    spacing: 0.5,
                    sx: { typography: "body2", color: "text.secondary" },
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(default_1$2, {}),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        Typography,
                        {
                          variant: "subtitle2",
                          className: styles$2.textTransform,
                          children: "has unpublished Changes"
                        }
                      )
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Stack,
                  {
                    direction: "row",
                    alignItems: "center",
                    spacing: 0.5,
                    sx: { typography: "body2", color: "text.secondary" },
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(default_1$4, {}),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        Typography,
                        {
                          variant: "subtitle2",
                          className: styles$2.textTransform,
                          children: [
                            "Complete Responses: ",
                            survey.completeResponseCount
                          ]
                        }
                      )
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Stack,
                  {
                    direction: "row",
                    alignItems: "center",
                    spacing: 0.5,
                    sx: { typography: "body2", color: "text.secondary" },
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(default_1$3, {}),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        Typography,
                        {
                          variant: "subtitle2",
                          className: styles$2.textTransform,
                          children: survey.surveyQuota > 0 ? "Quota: " + survey.surveyQuota : "No Quota"
                        }
                      )
                    ]
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Typography, { variant: "caption", sx: { color: "text.disabled" }, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Created" }),
              ": ",
              fDate(survey.creationDate)
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Typography, { variant: "caption", sx: { color: "text.disabled" }, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Last Modified" }),
              ": ",
              fDate(survey.lastModified)
            ] }),
            !example && survey.startDate && /* @__PURE__ */ jsxRuntimeExports.jsxs(Typography, { variant: "caption", sx: { color: "text.disabled" }, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Start Date" }),
              ": ",
              fDate(survey.startDate)
            ] }),
            !example && survey.endDate && /* @__PURE__ */ jsxRuntimeExports.jsxs(Typography, { variant: "caption", sx: { color: "text.disabled" }, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "End Date" }),
              ": ",
              fDate(survey.endDate)
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Divider, { sx: { borderStyle: "dashed", my: 2 } }),
          !example && isSurveyAdmin() && /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Stack,
            {
              sx: {
                p: 3,
                pt: 0,
                typography: "body2",
                color: "text.secondary",
                textTransform: "capitalize"
              },
              className: styles$2.surveyActions,
              children: [
                survey.status !== "closed" && /* @__PURE__ */ jsxRuntimeExports.jsx(
                  IconButton,
                  {
                    component: RouterLink,
                    href: "/design-survey/".concat(survey.id),
                    className: styles$2.iconButton,
                    "aria-label": "edit",
                    size: "large",
                    onClick: () => {
                    },
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(Edit, { color: "primary" })
                  }
                ),
                (survey.status === "draft" || survey.status === "active" && survey.latestVersion.published === false) && /* @__PURE__ */ jsxRuntimeExports.jsx(
                  IconButton,
                  {
                    className: styles$2.iconButton,
                    "aria-label": "send",
                    component: RouterLink,
                    href: "/launch/".concat(survey.id),
                    size: "large",
                    onClick: () => {
                    },
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { color: "primary" })
                  }
                ),
                survey.status === "active" && /* @__PURE__ */ jsxRuntimeExports.jsx(
                  IconButton,
                  {
                    className: styles$2.iconButton,
                    "aria-label": "stop",
                    size: "large",
                    onClick: () => onClose(survey.id),
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(Stop, { color: "primary" })
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  IconButton,
                  {
                    className: styles$2.iconButton,
                    "aria-label": "stop",
                    size: "large",
                    onClick: onClone,
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(default_1, { color: "primary" })
                  }
                ),
                survey.status !== STATUS.ACTIVE && /* @__PURE__ */ jsxRuntimeExports.jsx(
                  IconButton,
                  {
                    className: styles$2.iconButton,
                    "aria-label": "delete",
                    size: "large",
                    onClick: () => onDelete(survey.id),
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(default_1$5, { color: "primary" })
                  }
                )
              ]
            }
          )
        ]
      }
    )
  ] });
};
const HeaderContent = ({
  sort,
  filter,
  onFilterSelected,
  onSortSelected
}) => {
  const sort_options = [
    { value: "responses_desc", label: "survey_sort_options.responses_desc" },
    {
      value: "last_modified_desc",
      label: "survey_sort_options.last_modified_desc"
    }
  ];
  const filter_options = [
    { value: "all", label: "status.all" },
    { value: STATUS.ACTIVE, label: "status.".concat(STATUS.ACTIVE) },
    { value: STATUS.SCHEDULED, label: "status.".concat(STATUS.SCHEDULED) },
    { value: STATUS.DRAFT, label: "status.".concat(STATUS.DRAFT) },
    { value: STATUS.EXPIRED, label: "status.".concat(STATUS.EXPIRED) },
    { value: STATUS.CLOSED, label: "status.".concat(STATUS.CLOSED) }
  ];
  const { t } = useTranslation("manage");
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    Box,
    {
      rowGap: 2.5,
      columnGap: 2,
      display: "grid",
      gridTemplateColumns: { xs: "repeat(1, 1fr)", md: "repeat(2, 1fr)" },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Typography,
          {
            variant: "h5",
            flex: "1",
            textTransform: "uppercase",
            fontWeight: "600",
            children: t("my_surveys")
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Stack,
          {
            width: "100%",
            spacing: 2.5,
            direction: { xs: "column", md: "row" },
            alignItems: "center",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                RHFSelect,
                {
                  onChange: onSortSelected,
                  native: true,
                  value: sort,
                  name: "Status",
                  label: "Status",
                  children: sort_options.map((option) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: option.value, children: t(option.label) }, option.value))
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                RHFSelect,
                {
                  onChange: onFilterSelected,
                  native: true,
                  value: filter,
                  name: "Status",
                  label: "Status",
                  children: filter_options.map((option) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: option.value, children: t(option.label) }, option.value))
                }
              )
            ]
          }
        )
      ]
    }
  );
};
const sliderContainer = "_sliderContainer_1ra03_1";
const sliderStyle = "_sliderStyle_1ra03_7";
const surveyName = "_surveyName_1ra03_11";
const cardContent = "_cardContent_1ra03_16";
const cardLink = "_cardLink_1ra03_26";
const nextArrow = "_nextArrow_1ra03_42";
const backArrow = "_backArrow_1ra03_49";
const styles$1 = {
  sliderContainer,
  sliderStyle,
  surveyName,
  cardContent,
  cardLink,
  nextArrow,
  backArrow
};
const TemplateSlider = ({ surveys }) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { className: styles$1.sliderContainer, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Typography,
      {
        variant: "h5",
        marginBottom: 2,
        fontWeight: 600,
        color: "#181735",
        children: "Surveys Forms"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        style: {
          width: "100%",
          overflow: "auto",
          display: "flex",
          gap: "40px"
        },
        children: surveys.map((survey, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { sx: { minWidth: "21rem", margin: "1rem 0rem" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Survey, { survey, example: true }, survey.id) }, index))
      }
    )
  ] });
};
const createUserCard = "_createUserCard_zrfc2_1";
const formGroup = "_formGroup_zrfc2_9";
const rightContainer = "_rightContainer_zrfc2_16";
const createButton = "_createButton_zrfc2_24";
const surveyNameInput = "_surveyNameInput_zrfc2_39";
const selectInput = "_selectInput_zrfc2_55";
const errorText = "_errorText_zrfc2_63";
const styles = {
  createUserCard,
  formGroup,
  rightContainer,
  createButton,
  surveyNameInput,
  selectInput,
  errorText
};
const surveyMode_options = [
  { value: SURVEY_MODE.WEB, label: "mode.".concat(SURVEY_MODE.WEB) },
  { value: SURVEY_MODE.OFFLINE, label: "mode.".concat(SURVEY_MODE.OFFLINE) },
  { value: SURVEY_MODE.MIXED, label: "mode.".concat(SURVEY_MODE.MIXED) }
];
function CreateSurvey({ onSurveyCreated }) {
  const surveyService = useService("survey");
  const { t } = useTranslation("manage");
  const dispatch = useDispatch();
  const defaultValues = {
    surveyName: "",
    surveyMode: SURVEY_MODE.MIXED,
    surveyActiveFrom: "",
    surveyActiveTo: ""
  };
  const CreateSurveySchema = create$3().shape({
    surveyName: create$6().required(t("survey_required"))
  });
  const methods = useForm({
    resolver: o(CreateSurveySchema),
    defaultValues
  });
  const {
    setError,
    reset,
    handleSubmit,
    formState: { isSubmitting }
  } = methods;
  const onSubmit = handleSubmit(async (data) => {
    dispatch(setLoading(true));
    const model = {
      name: data.surveyName,
      usage: data.surveyMode
    };
    if (data.surveyActiveFrom) {
      model.startDate = localDateToServerDateTime(surveyActiveFrom);
    }
    if (data.surveyActiveTo) {
      model.endDate = localDateToServerDateTime(surveyActiveTo);
    }
    surveyService.createSurvey(model).then(() => {
      if (onSurveyCreated) {
        onSurveyCreated();
        reset();
      }
    }).catch((processedError) => {
      if (processedError.name == PROCESSED_ERRORS.DUPLICATE_SURVEY_NAME.name) {
        setError("surveyName", {
          type: "manual",
          message: t("processed_errors.".concat(processedError.name))
        });
      } else if (processedError.name == PROCESSED_ERRORS.INVALID_SURVEY_DATES.name) {
        setError("surveyActiveFrom", {
          type: "manual",
          message: t("processed_errors.".concat(processedError.name))
        });
      }
    }).finally(() => {
      dispatch(setLoading(false));
    });
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: styles.createUserCard, children: /* @__PURE__ */ jsxRuntimeExports.jsx(FormProvider, { methods, onSubmit, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
    Box,
    {
      rowGap: 2.5,
      columnGap: 2,
      display: "grid",
      gridTemplateColumns: { xs: "repeat(1, 1fr)", md: "repeat(3, 1fr)" },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(RHFTextField, { name: "surveyName", label: "Survey Name" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(RHFSelect, { name: "surveyMode", label: "Survey Mode", children: surveyMode_options.map((option) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: option.value, children: t(option.label) }, option.value)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          LoadingButton,
          {
            fullWidth: true,
            size: "large",
            color: "primary",
            type: "submit",
            variant: "contained",
            loading: isSubmitting,
            children: t("action_btn.create")
          }
        )
      ]
    }
  ) }) });
}
function Dashboard() {
  var _a;
  const surveyService = useService("survey");
  const [surveys, setSurveys] = reactExports.useState(null);
  const [guestSurveys, setGuestSurveys] = reactExports.useState([]);
  const [fetchingSurveys, setFetchingSurveys] = reactExports.useState(true);
  const [page, setPage] = reactExports.useState(1);
  const [perPage, setPerPage] = reactExports.useState(5);
  const [status2, setStatus] = reactExports.useState("all");
  const [sortBy, setSortBy] = reactExports.useState("last_modified_desc");
  const [openCloneModal, setOpenCloneModal] = reactExports.useState(false);
  const [cloningSurvey, setCloningSurvey] = reactExports.useState();
  const dispatch = useDispatch();
  const { t } = useTranslation("manage");
  const processApirror = (e) => {
    setFetchingSurveys(false);
  };
  const fetchSurveys = () => {
    surveyService.getAllSurveys(page, perPage, status2, sortBy).then((data) => {
      if (data) {
        setFetchingSurveys(false);
        setSurveys(data);
      }
    }).catch((e) => processApirror());
  };
  reactExports.useEffect(() => {
    fetchSurveys();
  }, [page, perPage, sortBy, status2]);
  reactExports.useEffect(() => {
    surveyService.getGuestsSurveys().then((data) => {
      if (data) {
        setGuestSurveys(data);
      }
    }).catch((e) => processApirror());
  }, []);
  const handleSurveyStatusChange = (id, newStatus) => {
    setSurveys((prevState) => ({
      ...prevState,
      surveys: prevState.surveys.map(
        (survey) => survey.id === id ? { ...survey, status: newStatus } : survey
      )
    }));
  };
  const shouldShowClickAdd = () => {
    const roles = TokenService.getUser().roles;
    if (roles.indexOf(ROLES.SUPER_ADMIN) > -1 || roles.indexOf(ROLES.SURVEY_ADMIN) > -1) {
      return true;
    }
    return false;
  };
  const onDelete = (survey) => {
    if (window.confirm(
      t("edit_survey.delete_survey", { survey_name: survey.name })
    )) {
      deleteSurvey(survey.id);
    }
  };
  const onClose = (survey) => {
    if (window.confirm(
      t("edit_survey.close_survey", { survey_name: survey.name })
    )) {
      closeSurvey(survey.id);
    }
  };
  const onClone = (survey) => {
    setCloningSurvey(survey);
    setOpenCloneModal(true);
  };
  const deleteSurvey = (id) => {
    dispatch(setLoading(true));
    surveyService.deleteSurvey(id).then(() => {
      fetchSurveys();
    }).catch((e) => {
      dispatch(setLoading(false));
    }).finally(() => {
      dispatch(setLoading(false));
    });
  };
  const closeSurvey = (id) => {
    dispatch(setLoading(true));
    surveyService.closeSurvey(id).then((data) => {
      handleSurveyStatusChange(id, "closed");
    }).catch((processedError) => {
      if (processedError.name == PROCESSED_ERRORS.INVALID_SURVEY_DATES.name) {
        setSurveyDateError(t("processed_errors.".concat(processed.name)));
      }
    }).finally(() => {
      dispatch(setLoading(false));
    });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { className: styles$3.mainContainer, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Container, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { className: styles$3.content, children: [
        shouldShowClickAdd() && /* @__PURE__ */ jsxRuntimeExports.jsx(CreateSurvey, { onSurveyCreated: fetchSurveys }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          HeaderContent,
          {
            filter: status2,
            onFilterSelected: (el) => {
              setPage(1);
              setStatus(el.target.value);
            },
            sort: sortBy,
            onSortSelected: (el) => {
              setPage(1);
              setSortBy(el.target.value);
            }
          }
        ),
        !fetchingSurveys ? /* @__PURE__ */ jsxRuntimeExports.jsx(
          Box,
          {
            sx: {
              mt: 3,
              columnGap: 4,
              display: "grid",
              rowGap: { xs: 4, md: 5 },
              gridTemplateColumns: {
                xs: "repeat(1, 1fr)",
                sm: "repeat(2, 1fr)",
                md: "repeat(3, 1fr)"
              }
            },
            children: (_a = surveys == null ? void 0 : surveys.surveys) == null ? void 0 : _a.map((survey) => {
              return /* @__PURE__ */ jsxRuntimeExports.jsx(
                Survey,
                {
                  survey,
                  onStatusChange: handleSurveyStatusChange,
                  onClone: () => onClone(survey),
                  onDelete: () => onDelete(survey),
                  onClose: () => onClose(survey)
                },
                survey.id
              );
            })
          }
        ) : /* @__PURE__ */ jsxRuntimeExports.jsx(LoadingDots, {}),
        surveys && /* @__PURE__ */ jsxRuntimeExports.jsx(
          TablePagination,
          {
            rowsPerPageOptions: [5, 10, 20, 50],
            component: "div",
            labelDisplayedRows: ({ from, to, count, page: page2 }) => {
              return t("responses.label_displayed_rows", { from, to, count });
            },
            labelRowsPerPage: t("responses.label_rows_per_page"),
            count: surveys == null ? void 0 : surveys.totalCount,
            rowsPerPage: perPage,
            page: page - 1,
            onPageChange: (event, newPage) => {
              setPage(newPage + 1);
            },
            onRowsPerPageChange: (event) => {
              setPerPage(parseInt(event.target.value, 10));
              setPage(1);
            }
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TemplateSlider, { surveys: guestSurveys })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      SurveyClone,
      {
        open: openCloneModal,
        onClose: (cloned) => {
          setOpenCloneModal(false);
          if (cloned) {
            fetchSurveys();
          }
        },
        survey: cloningSurvey
      }
    )
  ] });
}
export {
  Dashboard as default
};
//# sourceMappingURL=index-rYStx7jj.js.map
