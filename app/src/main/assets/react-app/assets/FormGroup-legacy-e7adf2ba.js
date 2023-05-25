;
(function () {
  System.register(['./index-legacy-4fb9792c.js', './common-legacy-09fb4163.js'], function (exports, module) {
    'use strict';

    var generateUtilityClass, generateUtilityClasses, styled, _extends, reactExports, useThemeProps, _objectWithoutPropertiesLoose, jsxRuntimeExports, clsx, composeClasses, useFormControl, formControlState;
    return {
      setters: [module => {
        generateUtilityClass = module.q;
        generateUtilityClasses = module.n;
        styled = module.t;
        _extends = module.m;
        reactExports = module.r;
        useThemeProps = module.v;
        _objectWithoutPropertiesLoose = module._;
        jsxRuntimeExports = module.j;
        clsx = module.x;
        composeClasses = module.y;
      }, module => {
        useFormControl = module.a0;
        formControlState = module.a1;
      }],
      execute: function () {
        function getFormGroupUtilityClass(slot) {
          return generateUtilityClass('MuiFormGroup', slot);
        }
        generateUtilityClasses('MuiFormGroup', ['root', 'row', 'error']);
        const _excluded = ["className", "row"];
        const useUtilityClasses = ownerState => {
          const {
            classes,
            row,
            error
          } = ownerState;
          const slots = {
            root: ['root', row && 'row', error && 'error']
          };
          return composeClasses(slots, getFormGroupUtilityClass, classes);
        };
        const FormGroupRoot = styled('div', {
          name: 'MuiFormGroup',
          slot: 'Root',
          overridesResolver: (props, styles) => {
            const {
              ownerState
            } = props;
            return [styles.root, ownerState.row && styles.row];
          }
        })(({
          ownerState
        }) => _extends({
          display: 'flex',
          flexDirection: 'column',
          flexWrap: 'wrap'
        }, ownerState.row && {
          flexDirection: 'row'
        }));

        /**
         * `FormGroup` wraps controls such as `Checkbox` and `Switch`.
         * It provides compact row layout.
         * For the `Radio`, you should be using the `RadioGroup` component instead of this one.
         */
        const FormGroup = /*#__PURE__*/reactExports.forwardRef(function FormGroup(inProps, ref) {
          const props = useThemeProps({
            props: inProps,
            name: 'MuiFormGroup'
          });
          const {
              className,
              row = false
            } = props,
            other = _objectWithoutPropertiesLoose(props, _excluded);
          const muiFormControl = useFormControl();
          const fcs = formControlState({
            props,
            muiFormControl,
            states: ['error']
          });
          const ownerState = _extends({}, props, {
            row,
            error: fcs.error
          });
          const classes = useUtilityClasses(ownerState);
          return /*#__PURE__*/jsxRuntimeExports.jsx(FormGroupRoot, _extends({
            className: clsx(classes.root, className),
            ownerState: ownerState,
            ref: ref
          }, other));
        });
        const FormGroup$1 = exports('F', FormGroup);
      }
    };
  });
})();
