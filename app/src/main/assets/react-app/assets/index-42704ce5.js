import { cN as instance, n as TokenService, cA as instance$1, u as useTranslation, j as jsxRuntimeExports, A as Select, M as MenuItem, cO as CookiesService, cP as setDocumentLang } from "./index-ad8f0a8b.js";
class AuthService {
  async login(email, password) {
    return instance.post("/user/login", {
      email,
      password
    }).then((response) => {
      if (response.data) {
        TokenService.setSession(response.data);
      }
      return response.data;
    });
  }
  async signup({ email, password, domain, firstName, lastName }) {
    return instance.post("/user/signup", {
      email,
      password,
      domain,
      firstName,
      lastName
    }).then((response) => {
      return response.data;
    });
  }
  async confirmSignup(token) {
    return instance.post("/user/confirm_admin", {
      token
    }).then((response) => {
      if (response.data) {
        TokenService.setSession(response.data);
      }
      return response.data;
    });
  }
  async forgotPassword(email) {
    return instance.post("/user/forgot_password", {
      email
    }).then((response) => {
      return response.data;
    });
  }
  async resetPassword(refreshToken, newPassword) {
    return instance.post("/user/reset_password", { refreshToken, newPassword }).then((response) => {
      if (response.data) {
        TokenService.setSession(response.data);
      }
      return response.data;
    });
  }
  async logout() {
    try {
      TokenService.removeSession();
      const response = await instance$1.post("/logout");
      return response.status == 200;
    } catch (error) {
      TokenService.removeSession();
    }
  }
}
const AuthService$1 = new AuthService();
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
export {
  AuthService$1 as A,
  LanguageSelector as L
};
//# sourceMappingURL=index-42704ce5.js.map
