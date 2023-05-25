;
(function () {
  System.register(['./index-legacy-4fb9792c.js', './common-legacy-09fb4163.js', './AuthService-legacy-d2677483.js'], function (exports, module) {
    'use strict';

    var jsxRuntimeExports, CookiesService, reactExports, useTranslation, Select, MenuItem, setDocumentLang, rtlLanguage, Snackbar, Alert, Dialog, DialogContent, DialogActions, Button, DialogTitle;
    return {
      setters: [module => {
        jsxRuntimeExports = module.j;
        CookiesService = module.V;
        reactExports = module.r;
      }, module => {
        useTranslation = module.u;
        Select = module.c;
        MenuItem = module.d;
        setDocumentLang = module.s;
        rtlLanguage = module.r;
        Snackbar = module.S;
        Alert = module.A;
        Dialog = module.D;
        DialogContent = module.j;
        DialogActions = module.k;
        Button = module.b;
      }, module => {
        DialogTitle = module.D;
      }],
      execute: function () {
        exports('P', ProcessedError);
        const LanguageSelector = exports('L', () => {
          const {
            i18n
          } = useTranslation();
          const handleChange = event => {
            CookiesService.setValue(event.target.value, "lang");
            i18n.changeLanguage(event.target.value);
            setDocumentLang(event.target.value);
          };
          return /* @__PURE__ */jsxRuntimeExports.jsxs(Select, {
            onChange: handleChange,
            value: i18n.language,
            sx: {
              ".MuiOutlinedInput-notchedOutline": {
                border: "none"
              }
            },
            children: [/* @__PURE__ */jsxRuntimeExports.jsx(MenuItem, {
              value: "en",
              title: "English",
              children: "EN"
            }), /* @__PURE__ */jsxRuntimeExports.jsx(MenuItem, {
              value: "de",
              title: "German",
              children: "DE"
            }), /* @__PURE__ */jsxRuntimeExports.jsx(MenuItem, {
              value: "ar",
              title: "العربية",
              children: "AR"
            })]
          });
        });
        function ProcessedError({
          error,
          variant,
          handleClose
        }) {
          const [dir, setDir] = reactExports.useState("ltr");
          const {
            t,
            i18n
          } = useTranslation("manage");
          reactExports.useEffect(() => {
            if (rtlLanguage.includes(i18n.language)) {
              setDir("rtl");
            } else {
              setDir("ltr");
            }
          }, [i18n.language]);
          if (variant === "toast") {
            return /* @__PURE__ */jsxRuntimeExports.jsx(Snackbar, {
              open: true,
              autoHideDuration: 2e3,
              onClose: handleClose,
              children: /* @__PURE__ */jsxRuntimeExports.jsx(Alert, {
                variant: "standard",
                severity: "error",
                onClose: handleClose,
                dir,
                children: t(`processed_errors.${error}`)
              })
            });
          } else {
            return /* @__PURE__ */jsxRuntimeExports.jsxs(Dialog, {
              open: true,
              onClose: handleClose,
              "aria-labelledby": "alert-dialog-title-error",
              "aria-describedby": "alert-dialog-description",
              children: [/* @__PURE__ */jsxRuntimeExports.jsx(DialogTitle, {
                id: "alert-dialog-title-error",
                children: "Error"
              }), /* @__PURE__ */jsxRuntimeExports.jsx(DialogContent, {
                children: t(`processed_errors.${error}`)
              }), /* @__PURE__ */jsxRuntimeExports.jsx(DialogActions, {
                children: /* @__PURE__ */jsxRuntimeExports.jsx(Button, {
                  onClick: () => handleClose(),
                  children: "OK"
                })
              })]
            });
          }
        }
      }
    };
  });
})();
