;
(function () {
  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
  function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
  System.register(['./index-legacy-0a320ccd.js', './index-legacy-14699507.js', './UserService-legacy-beda20ca.js', './index-legacy-28828365.js', './roles-legacy-a94dbe90.js', './common-legacy-ff14325d.js', './Card-legacy-22580478.js', './FormGroup-legacy-5d636e6a.js', './TextField-legacy-c8da9d7d.js', './InputLabel-legacy-1a8a4001.js', './FormControlLabel-legacy-32aac4da.js', './Checkbox-legacy-bc1e9571.js', './AuthService-legacy-05326db5.js', './ArrowBack-legacy-de20e8b2.js', './LogoutOutlined-legacy-0fdd1448.js'], function (exports, module) {
    'use strict';

    var __vite_style__ = document.createElement('style');
    __vite_style__.textContent = "._mainContainer_3xykw_1 {\n  margin: auto;\n  max-width: 800px;\n  min-width: 300px;\n}\n\n._createUserCard_3xykw_7 {\n  padding: 25px;\n}\n\n._formGroup_3xykw_11 {\n  max-width: 400px;\n}\n\n._errorText_3xykw_15 {\n  color: #eb5757 !important;\n}\n";
    document.head.appendChild(__vite_style__);
    var useParams, useNavigate, reactExports, jsxRuntimeExports, LoadingIndicator, PROCESSED_ERRORS, processError, Header, routes, UserService, ProcessedError, ROLES, useTranslation, Box, Typography, Button, Card, FormGroup, TextField, FormControl, FormLabel, FormHelperText, FormControlLabel, Checkbox;
    return {
      setters: [function (module) {
        useParams = module.a;
        useNavigate = module.u;
        reactExports = module.r;
        jsxRuntimeExports = module.j;
        LoadingIndicator = module.d;
        PROCESSED_ERRORS = module.P;
        processError = module.p;
      }, function (module) {
        Header = module.H;
        routes = module.r;
      }, function (module) {
        UserService = module.U;
      }, function (module) {
        ProcessedError = module.P;
      }, function (module) {
        ROLES = module.R;
      }, function (module) {
        useTranslation = module.u;
        Box = module.B;
        Typography = module.T;
        Button = module.b;
      }, function (module) {
        Card = module.C;
      }, function (module) {
        FormGroup = module.F;
      }, function (module) {
        TextField = module.T;
      }, function (module) {
        FormControl = module.F;
        FormLabel = module.b;
        FormHelperText = module.a;
      }, function (module) {
        FormControlLabel = module.F;
      }, function (module) {
        Checkbox = module.C;
      }, null, null, null],
      execute: function execute() {
        exports('default', AddEditUser);
        var mainContainer = "_mainContainer_3xykw_1";
        var createUserCard = "_createUserCard_3xykw_7";
        var formGroup = "_formGroup_3xykw_11";
        var errorText = "_errorText_3xykw_15";
        var styles = {
          mainContainer: mainContainer,
          createUserCard: createUserCard,
          formGroup: formGroup,
          errorText: errorText
        };
        function AddEditUser(_ref) {
          var isEditing = _ref.isEditing;
          var _useParams = useParams(),
            userId = _useParams.userId;
          var navigate = useNavigate();
          var _useTranslation = useTranslation("manage"),
            t = _useTranslation.t;
          var _reactExports$useStat = reactExports.useState(""),
            _reactExports$useStat2 = _slicedToArray(_reactExports$useStat, 2),
            processedError = _reactExports$useStat2[0],
            setProcessedError = _reactExports$useStat2[1];
          var _reactExports$useStat3 = reactExports.useState(false),
            _reactExports$useStat4 = _slicedToArray(_reactExports$useStat3, 2),
            showError = _reactExports$useStat4[0],
            setShowError = _reactExports$useStat4[1];
          var _reactExports$useStat5 = reactExports.useState(""),
            _reactExports$useStat6 = _slicedToArray(_reactExports$useStat5, 2),
            email = _reactExports$useStat6[0],
            setEmail = _reactExports$useStat6[1];
          var _reactExports$useStat7 = reactExports.useState(""),
            _reactExports$useStat8 = _slicedToArray(_reactExports$useStat7, 2),
            emailError = _reactExports$useStat8[0],
            setEmailError = _reactExports$useStat8[1];
          var _reactExports$useStat9 = reactExports.useState(""),
            _reactExports$useStat10 = _slicedToArray(_reactExports$useStat9, 2),
            firstName = _reactExports$useStat10[0],
            setFirstName = _reactExports$useStat10[1];
          var _reactExports$useStat11 = reactExports.useState(""),
            _reactExports$useStat12 = _slicedToArray(_reactExports$useStat11, 2),
            firstNameError = _reactExports$useStat12[0],
            setFirstNameError = _reactExports$useStat12[1];
          var _reactExports$useStat13 = reactExports.useState(""),
            _reactExports$useStat14 = _slicedToArray(_reactExports$useStat13, 2),
            lastName = _reactExports$useStat14[0],
            setLastName = _reactExports$useStat14[1];
          var _reactExports$useStat15 = reactExports.useState(""),
            _reactExports$useStat16 = _slicedToArray(_reactExports$useStat15, 2),
            lastNameError = _reactExports$useStat16[0],
            setLastNameError = _reactExports$useStat16[1];
          var _reactExports$useStat17 = reactExports.useState([]),
            _reactExports$useStat18 = _slicedToArray(_reactExports$useStat17, 2),
            roles = _reactExports$useStat18[0],
            setRoles = _reactExports$useStat18[1];
          var _reactExports$useStat19 = reactExports.useState(""),
            _reactExports$useStat20 = _slicedToArray(_reactExports$useStat19, 2),
            rolesError = _reactExports$useStat20[0],
            setRolesError = _reactExports$useStat20[1];
          var onEmailChanged = function onEmailChanged(e) {
            setEmail(e.target.value);
            setEmailError("");
          };
          var onFirstNameChanged = function onFirstNameChanged(e) {
            setFirstName(e.target.value);
            setFirstNameError("");
          };
          var onLastChanged = function onLastChanged(e) {
            setLastName(e.target.value);
            setLastNameError("");
          };
          var onRolesChanged = function onRolesChanged(e) {
            if (e.target.checked) {
              setRoles([].concat(_toConsumableArray(roles), [e.target.name]));
            } else {
              setRoles(roles.filter(function (role) {
                return role !== e.target.name;
              }));
            }
          };
          var validate = function validate() {
            setEmailError("");
            setFirstNameError("");
            setLastNameError("");
            setRolesError("");
            if (firstName.length == 0) {
              setFirstNameError(t("firstname_required"));
              return false;
            }
            if (lastName.length == 0) {
              setLastNameError(t("lastname_required"));
              return false;
            }
            if (email.length == 0) {
              setEmailError(t("email_required"));
              return false;
            }
            if (roles.length == 0) {
              setRolesError(t("roles_required"));
              return false;
            }
            return true;
          };
          var _reactExports$useStat21 = reactExports.useState(false),
            _reactExports$useStat22 = _slicedToArray(_reactExports$useStat21, 2),
            loading = _reactExports$useStat22[0],
            setLoading = _reactExports$useStat22[1];
          var goUsers = function goUsers() {
            navigate(routes.manageUsers);
          };
          var onSubmit = function onSubmit() {
            if (!validate()) {
              return;
            }
            setLoading(true);
            if (isEditing) {
              UserService.updateUser({
                userId: userId,
                data: {
                  email: email,
                  firstName: firstName,
                  lastName: lastName,
                  roles: roles
                }
              }).then(function () {
                goUsers();
              }).catch(function (e) {
                console.log(e);
                var processed = processError(e);
                console.log(processed);
                switch (processed) {
                  case PROCESSED_ERRORS.NETWORK_ERR:
                  case PROCESSED_ERRORS.BACKEND_DOWN:
                    setShowError(true);
                    setProcessedError(processed);
                    break;
                  case PROCESSED_ERRORS.DUPLICATE_EMAIL:
                    setEmailError(t("processed_errors.".concat(processedError)));
                    break;
                }
              }).finally(function () {
                setLoading(false);
              });
            } else {
              UserService.createUser({
                email: email,
                firstName: firstName,
                lastName: lastName,
                roles: roles
              }).then(function () {
                goUsers();
              }).catch(function (e) {
                console.log(e);
                var processed = processError(e);
                console.log(processed);
                switch (processed) {
                  case PROCESSED_ERRORS.NETWORK_ERR:
                  case PROCESSED_ERRORS.BACKEND_DOWN:
                    setShowError(true);
                    setProcessedError(processed);
                    break;
                  case PROCESSED_ERRORS.DUPLICATE_EMAIL:
                    setEmailError(t("processed_errors.".concat(processedError)));
                    break;
                }
              }).finally(function () {
                setLoading(false);
              });
            }
          };
          reactExports.useEffect(function () {
            if (isEditing) {
              setLoading(true);
              UserService.getUser({
                userId: userId
              }).then(function (response) {
                var email2 = response.email,
                  firstName2 = response.firstName,
                  lastName2 = response.lastName,
                  roles2 = response.roles;
                setEmail(email2);
                setFirstName(firstName2);
                setLastName(lastName2);
                setRoles(roles2);
                setLoading(false);
              });
            }
          }, []);
          return /* @__PURE__ */jsxRuntimeExports.jsxs(Box, {
            className: styles.mainContainer,
            children: [/* @__PURE__ */jsxRuntimeExports.jsx(Header, {}), loading && /* @__PURE__ */jsxRuntimeExports.jsx(LoadingIndicator, {}), showError && /* @__PURE__ */jsxRuntimeExports.jsx(ProcessedError, {
              error: processedError,
              handleClose: function handleClose() {
                return setShowError(false);
              }
            }), /* @__PURE__ */jsxRuntimeExports.jsxs(Card, {
              className: styles.createUserCard,
              children: [/* @__PURE__ */jsxRuntimeExports.jsx(Typography, {
                variant: "h4",
                children: userId ? t("edit_user.title") : t("add_user.title")
              }), /* @__PURE__ */jsxRuntimeExports.jsxs(FormGroup, {
                className: styles.formGroup,
                children: [/* @__PURE__ */jsxRuntimeExports.jsx(TextField, {
                  error: firstNameError.length > 0,
                  required: true,
                  value: firstName,
                  id: "firstName",
                  label: t("label.first_name"),
                  name: "firstName",
                  onChange: onFirstNameChanged,
                  variant: "standard"
                }), /* @__PURE__ */jsxRuntimeExports.jsx(TextField, {
                  error: (lastNameError === null || lastNameError === void 0 ? void 0 : lastNameError.length) > 0,
                  id: "lastName",
                  value: lastName,
                  required: true,
                  onChange: onLastChanged,
                  label: t("label.last_name"),
                  name: "lastName",
                  variant: "standard"
                }), /* @__PURE__ */jsxRuntimeExports.jsx(TextField, {
                  required: true,
                  value: email,
                  error: (emailError === null || emailError === void 0 ? void 0 : emailError.length) > 0 || processedError == PROCESSED_ERRORS.DUPLICATE_EMAIL,
                  id: "email",
                  onChange: onEmailChanged,
                  label: t("label.email"),
                  name: "email",
                  variant: "standard"
                }), /* @__PURE__ */jsxRuntimeExports.jsxs(FormControl, {
                  sx: {
                    mt: "20px"
                  },
                  children: [/* @__PURE__ */jsxRuntimeExports.jsx(FormLabel, {
                    id: "radio-buttons-group-label",
                    children: t("add_user.roles")
                  }), /* @__PURE__ */jsxRuntimeExports.jsx(FormControlLabel, {
                    control: /* @__PURE__ */jsxRuntimeExports.jsx(Checkbox, {
                      checked: roles.indexOf(ROLES.SUPER_ADMIN) > -1,
                      onChange: onRolesChanged,
                      name: ROLES.SUPER_ADMIN
                    }),
                    label: t("label.super_admin")
                  }), /* @__PURE__ */jsxRuntimeExports.jsx(FormControlLabel, {
                    value: ROLES.SURVEY_ADMIN,
                    control: /* @__PURE__ */jsxRuntimeExports.jsx(Checkbox, {
                      checked: roles.indexOf(ROLES.SURVEY_ADMIN) > -1,
                      onChange: onRolesChanged,
                      name: ROLES.SURVEY_ADMIN
                    }),
                    label: t("label.survey_admin")
                  }), /* @__PURE__ */jsxRuntimeExports.jsx(FormControlLabel, {
                    value: ROLES.SURVEYOR,
                    control: /* @__PURE__ */jsxRuntimeExports.jsx(Checkbox, {
                      checked: roles.indexOf(ROLES.SURVEYOR) > -1,
                      onChange: onRolesChanged,
                      name: ROLES.SURVEYOR
                    }),
                    label: t("label.surveyor")
                  })]
                }), (firstNameError || lastNameError || emailError || rolesError) && /* @__PURE__ */jsxRuntimeExports.jsx(FormHelperText, {
                  className: styles.errorText,
                  children: firstNameError || lastNameError || emailError || rolesError
                })]
              }), /* @__PURE__ */jsxRuntimeExports.jsxs(Box, {
                sx: {
                  display: "flex",
                  justifyContent: "flex-end",
                  mt: "40px"
                },
                children: [/* @__PURE__ */jsxRuntimeExports.jsx(Button, {
                  onClick: goUsers,
                  children: t("add_user.cancel")
                }), /* @__PURE__ */jsxRuntimeExports.jsx(Button, {
                  onClick: onSubmit,
                  children: t("add_user.save")
                })]
              })]
            })]
          });
        }
      }
    };
  });
})();
