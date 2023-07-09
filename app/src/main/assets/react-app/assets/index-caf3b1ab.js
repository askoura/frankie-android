import { x as styled, T as Typography, r as reactExports, D as useThemeProps, _ as _objectWithoutPropertiesLoose, cQ as DialogContext, j as jsxRuntimeExports, s as _extends, H as clsx, N as composeClasses, cR as getDialogTitleUtilityClass, u as useTranslation, a3 as rtlLanguage, c3 as Snackbar, c4 as Alert, bi as Dialog, bt as DialogContent, bj as DialogActions, g as Button } from "./index-ad8f0a8b.js";
const _excluded = ["className", "id"];
const useUtilityClasses = (ownerState) => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ["root"]
  };
  return composeClasses(slots, getDialogTitleUtilityClass, classes);
};
const DialogTitleRoot = styled(Typography, {
  name: "MuiDialogTitle",
  slot: "Root",
  overridesResolver: (props, styles) => styles.root
})({
  padding: "16px 24px",
  flex: "0 0 auto"
});
const DialogTitle = /* @__PURE__ */ reactExports.forwardRef(function DialogTitle2(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiDialogTitle"
  });
  const {
    className,
    id: idProp
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded);
  const ownerState = props;
  const classes = useUtilityClasses(ownerState);
  const {
    titleId = idProp
  } = reactExports.useContext(DialogContext);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitleRoot, _extends({
    component: "h2",
    className: clsx(classes.root, className),
    ownerState,
    ref,
    variant: "h6",
    id: idProp != null ? idProp : titleId
  }, other));
});
const DialogTitle$1 = DialogTitle;
function ProcessedError({ error, variant, handleClose }) {
  const [dir, setDir] = reactExports.useState("ltr");
  const { t, i18n } = useTranslation("manage");
  reactExports.useEffect(() => {
    if (rtlLanguage.includes(i18n.language)) {
      setDir("rtl");
    } else {
      setDir("ltr");
    }
  }, [i18n.language]);
  if (variant === "toast") {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Snackbar, { open: true, autoHideDuration: 2e3, onClose: handleClose, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Alert,
      {
        variant: "standard",
        severity: "error",
        onClose: handleClose,
        dir,
        children: t(`processed_errors.${error}`)
      }
    ) });
  } else {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Dialog,
      {
        open: true,
        onClose: handleClose,
        "aria-labelledby": "alert-dialog-title-error",
        "aria-describedby": "alert-dialog-description",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle$1, { id: "alert-dialog-title-error", children: "Error" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(DialogContent, { children: t(`processed_errors.${error}`) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(DialogActions, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: () => handleClose(), children: "OK" }) })
        ]
      }
    );
  }
}
export {
  DialogTitle$1 as D,
  ProcessedError as P
};
//# sourceMappingURL=index-caf3b1ab.js.map
