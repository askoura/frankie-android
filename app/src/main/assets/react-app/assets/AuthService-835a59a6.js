import { t as styled, r as reactExports, v as useThemeProps, _ as _objectWithoutPropertiesLoose, j as jsxRuntimeExports, m as _extends, x as clsx, y as composeClasses, bG as instance, T as TokenService, G as instance$1 } from "./index-bbbd1d1b.js";
import { T as Typography, Q as DialogContext, R as getDialogTitleUtilityClass } from "./common-cf84468d.js";
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
export {
  AuthService$1 as A,
  DialogTitle$1 as D
};
