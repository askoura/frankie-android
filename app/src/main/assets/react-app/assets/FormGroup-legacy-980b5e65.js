;
(function () {
  System.register(['./index-legacy-99c8bdce.js', './common-legacy-ddf67078.js'], function (exports, module) {
    'use strict';

    var generateUtilityClass, generateUtilityClasses, styled, _extends, reactExports, useThemeProps, _objectWithoutPropertiesLoose, jsxRuntimeExports, clsx, composeClasses, useFormControl, formControlState;
    return {
      setters: [function (module) {
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
      }, function (module) {
        useFormControl = module.a0;
        formControlState = module.a1;
      }],
      execute: function execute() {
        function getFormGroupUtilityClass(slot) {
          return generateUtilityClass('MuiFormGroup', slot);
        }
        generateUtilityClasses('MuiFormGroup', ['root', 'row', 'error']);
        var _excluded = ["className", "row"];
        var useUtilityClasses = function useUtilityClasses(ownerState) {
          var classes = ownerState.classes,
            row = ownerState.row,
            error = ownerState.error;
          var slots = {
            root: ['root', row && 'row', error && 'error']
          };
          return composeClasses(slots, getFormGroupUtilityClass, classes);
        };
        var FormGroupRoot = styled('div', {
          name: 'MuiFormGroup',
          slot: 'Root',
          overridesResolver: function overridesResolver(props, styles) {
            var ownerState = props.ownerState;
            return [styles.root, ownerState.row && styles.row];
          }
        })(function (_ref) {
          var ownerState = _ref.ownerState;
          return _extends({
            display: 'flex',
            flexDirection: 'column',
            flexWrap: 'wrap'
          }, ownerState.row && {
            flexDirection: 'row'
          });
        });

        /**
         * `FormGroup` wraps controls such as `Checkbox` and `Switch`.
         * It provides compact row layout.
         * For the `Radio`, you should be using the `RadioGroup` component instead of this one.
         */
        var FormGroup = /*#__PURE__*/reactExports.forwardRef(function FormGroup(inProps, ref) {
          var props = useThemeProps({
            props: inProps,
            name: 'MuiFormGroup'
          });
          var className = props.className,
            _props$row = props.row,
            row = _props$row === void 0 ? false : _props$row,
            other = _objectWithoutPropertiesLoose(props, _excluded);
          var muiFormControl = useFormControl();
          var fcs = formControlState({
            props: props,
            muiFormControl: muiFormControl,
            states: ['error']
          });
          var ownerState = _extends({}, props, {
            row: row,
            error: fcs.error
          });
          var classes = useUtilityClasses(ownerState);
          return /*#__PURE__*/jsxRuntimeExports.jsx(FormGroupRoot, _extends({
            className: clsx(classes.root, className),
            ownerState: ownerState,
            ref: ref
          }, other));
        });
        var FormGroup$1 = exports('F', FormGroup);
      }
    };
  });
})();
