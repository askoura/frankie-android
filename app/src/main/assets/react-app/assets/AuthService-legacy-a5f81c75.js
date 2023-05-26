;
(function () {
  System.register(['./index-legacy-c8bd5c71.js', './common-legacy-fa39557a.js'], function (exports, module) {
    'use strict';

    var styled, reactExports, useThemeProps, _objectWithoutPropertiesLoose, jsxRuntimeExports, _extends, clsx, composeClasses, instance, TokenService, instance$1, Typography, DialogContext, getDialogTitleUtilityClass;
    return {
      setters: [module => {
        styled = module.t;
        reactExports = module.r;
        useThemeProps = module.v;
        _objectWithoutPropertiesLoose = module._;
        jsxRuntimeExports = module.j;
        _extends = module.m;
        clsx = module.x;
        composeClasses = module.y;
        instance = module.bF;
        TokenService = module.T;
        instance$1 = module.G;
      }, module => {
        Typography = module.T;
        DialogContext = module.Q;
        getDialogTitleUtilityClass = module.R;
      }],
      execute: function () {
        const _excluded = ["className", "id"];
        const useUtilityClasses = ownerState => {
          const {
            classes
          } = ownerState;
          const slots = {
            root: ['root']
          };
          return composeClasses(slots, getDialogTitleUtilityClass, classes);
        };
        const DialogTitleRoot = styled(Typography, {
          name: 'MuiDialogTitle',
          slot: 'Root',
          overridesResolver: (props, styles) => styles.root
        })({
          padding: '16px 24px',
          flex: '0 0 auto'
        });
        const DialogTitle = /*#__PURE__*/reactExports.forwardRef(function DialogTitle(inProps, ref) {
          const props = useThemeProps({
            props: inProps,
            name: 'MuiDialogTitle'
          });
          const {
              className,
              id: idProp
            } = props,
            other = _objectWithoutPropertiesLoose(props, _excluded);
          const ownerState = props;
          const classes = useUtilityClasses(ownerState);
          const {
            titleId = idProp
          } = reactExports.useContext(DialogContext);
          return /*#__PURE__*/jsxRuntimeExports.jsx(DialogTitleRoot, _extends({
            component: "h2",
            className: clsx(classes.root, className),
            ownerState: ownerState,
            ref: ref,
            variant: "h6",
            id: idProp != null ? idProp : titleId
          }, other));
        });
        const DialogTitle$1 = exports('D', DialogTitle);
        class AuthService {
          async login(email, password) {
            return instance.post("/user/login", {
              email,
              password
            }).then(response => {
              if (response.data) {
                TokenService.setSession(response.data);
              }
              return response.data;
            });
          }
          async signup({
            email,
            password,
            domain,
            firstName,
            lastName
          }) {
            return instance.post("/user/signup", {
              email,
              password,
              domain,
              firstName,
              lastName
            }).then(response => {
              return response.data;
            });
          }
          async confirmSignup(token) {
            return instance.post("/user/confirm_admin", {
              token
            }).then(response => {
              if (response.data) {
                TokenService.setSession(response.data);
              }
              return response.data;
            });
          }
          async forgotPassword(email) {
            return instance.post("/user/forgot_password", {
              email
            }).then(response => {
              return response.data;
            });
          }
          async resetPassword(refreshToken, newPassword) {
            return instance.post("/user/reset_password", {
              refreshToken,
              newPassword
            }).then(response => {
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
        const AuthService$1 = exports('A', new AuthService());
      }
    };
  });
})();
