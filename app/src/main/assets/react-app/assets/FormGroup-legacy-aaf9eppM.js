;
(function () {
  System.register(['./index-legacy-T3s18jo3.js'], function (exports, module) {
    'use strict';

    var generateUtilityClass, generateUtilityClasses, styled, _extends, reactExports, useThemeProps, _objectWithoutPropertiesLoose, useFormControl, formControlState, jsxRuntimeExports, clsx, composeClasses;
    return {
      setters: [module => {
        generateUtilityClass = module.a;
        generateUtilityClasses = module.g;
        styled = module.s;
        _extends = module._;
        reactExports = module.r;
        useThemeProps = module.u;
        _objectWithoutPropertiesLoose = module.e;
        useFormControl = module.aS;
        formControlState = module.bn;
        jsxRuntimeExports = module.j;
        clsx = module.f;
        composeClasses = module.h;
      }],
      execute: function execute() {
        function getFormGroupUtilityClass(slot) {
          return generateUtilityClass('MuiFormGroup', slot);
        }
        generateUtilityClasses('MuiFormGroup', ['root', 'row', 'error']);
        const _excluded = ["className", "row"];
        const useUtilityClasses = ownerState => {
          const classes = ownerState.classes,
            row = ownerState.row,
            error = ownerState.error;
          const slots = {
            root: ["root", row && "row", error && "error"]
          };
          return composeClasses(slots, getFormGroupUtilityClass, classes);
        };
        const FormGroupRoot = styled("div", {
          name: "MuiFormGroup",
          slot: "Root",
          overridesResolver: (props, styles) => {
            const ownerState = props.ownerState;
            return [styles.root, ownerState.row && styles.row];
          }
        })(({
          ownerState
        }) => _extends({
          display: "flex",
          flexDirection: "column",
          flexWrap: "wrap"
        }, ownerState.row && {
          flexDirection: "row"
        }));
        const FormGroup = /* @__PURE__ */reactExports.forwardRef(function FormGroup2(inProps, ref) {
          const props = useThemeProps({
            props: inProps,
            name: "MuiFormGroup"
          });
          const className = props.className,
            _props$row = props.row,
            row = _props$row === void 0 ? false : _props$row,
            other = _objectWithoutPropertiesLoose(props, _excluded);
          const muiFormControl = useFormControl();
          const fcs = formControlState({
            props,
            muiFormControl,
            states: ["error"]
          });
          const ownerState = _extends({}, props, {
            row,
            error: fcs.error
          });
          const classes = useUtilityClasses(ownerState);
          return /* @__PURE__ */jsxRuntimeExports.jsx(FormGroupRoot, _extends({
            className: clsx(classes.root, className),
            ownerState,
            ref
          }, other));
        });
        const FormGroup$1 = exports('F', FormGroup);
      }
    };
  });
})();
//# sourceMappingURL=FormGroup-legacy-aaf9eppM.js.map
