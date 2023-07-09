import { m as createSvgIcon, j as jsxRuntimeExports, h as useNavigate, B as Box, n as TokenService, L as Link, e as IconButton } from "./index-ad8f0a8b.js";
import { L as LanguageSelector, A as AuthService } from "./index-42704ce5.js";
import { s as styles, a as styles$1, r as routes } from "./Logo.module-c4ee83ed.js";
const LogoutOutlined = createSvgIcon(/* @__PURE__ */ jsxRuntimeExports.jsx("path", {
  d: "m17 8-1.41 1.41L17.17 11H9v2h8.17l-1.58 1.58L17 16l4-4-4-4zM5 5h7V3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h7v-2H5V5z"
}), "LogoutOutlined");
const Logo = () => {
  const nav = useNavigate();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { className: styles.logo, onClick: () => nav("/"), children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    "span",
    {
      style: { color: "purple", fontWeight: "bold", fontSize: "x-large" },
      children: "Qlarr"
    }
  ) });
};
const Header = () => {
  const nav = useNavigate();
  const user = TokenService.getUser();
  const logout = () => {
    AuthService.logout();
    nav(routes.login);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { className: styles$1.header, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Logo, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { className: styles$1.userInfo, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(LanguageSelector, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: routes.profile, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { children: [
        user == null ? void 0 : user.firstName,
        " ",
        user == null ? void 0 : user.lastName
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(IconButton, { onClick: () => logout(), children: /* @__PURE__ */ jsxRuntimeExports.jsx(LogoutOutlined, {}) })
    ] })
  ] });
};
export {
  Header as H
};
//# sourceMappingURL=index-3e3a1a0b.js.map
