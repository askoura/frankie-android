import { j as jsxRuntimeExports, V as CookiesService, r as reactExports } from "./index-a534f6bd.js";
import { u as useTranslation, c as Select, d as MenuItem, s as setDocumentLang, r as rtlLanguage, S as Snackbar, A as Alert, D as Dialog, j as DialogContent, k as DialogActions, b as Button } from "./common-85d356ce.js";
import { D as DialogTitle } from "./AuthService-d83f305c.js";
const LanguageSelector = () => {
  const { i18n } = useTranslation();
  const handleChange = (event) => {
    CookiesService.setValue(event.target.value, "lang");
    i18n.changeLanguage(event.target.value);
    setDocumentLang(event.target.value);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    Select,
    {
      onChange: handleChange,
      value: i18n.language,
      sx: {
        ".MuiOutlinedInput-notchedOutline": {
          border: "none"
        }
      },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { value: "en", title: "English", children: "EN" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { value: "de", title: "German", children: "DE" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { value: "ar", title: "العربية", children: "AR" })
      ]
    }
  );
};
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
          /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { id: "alert-dialog-title-error", children: "Error" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(DialogContent, { children: t(`processed_errors.${error}`) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(DialogActions, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: () => handleClose(), children: "OK" }) })
        ]
      }
    );
  }
}
export {
  LanguageSelector as L,
  ProcessedError as P
};
