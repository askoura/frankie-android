;
(function () {
  System.register(['./index-legacy-23e2ff21.js', './common-legacy-594d3ceb.js'], function (exports, module) {
    'use strict';

    var generateUtilityClass, generateUtilityClasses, styled, reactExports, useThemeProps, _objectWithoutPropertiesLoose, _extends, jsxRuntimeExports, clsx, composeClasses, Paper;
    return {
      setters: [module => {
        generateUtilityClass = module.q;
        generateUtilityClasses = module.n;
        styled = module.t;
        reactExports = module.r;
        useThemeProps = module.v;
        _objectWithoutPropertiesLoose = module._;
        _extends = module.m;
        jsxRuntimeExports = module.j;
        clsx = module.x;
        composeClasses = module.y;
      }, module => {
        Paper = module.P;
      }],
      execute: function () {
        function getCardUtilityClass(slot) {
          return generateUtilityClass('MuiCard', slot);
        }
        generateUtilityClasses('MuiCard', ['root']);
        const _excluded = ["className", "raised"];
        const useUtilityClasses = ownerState => {
          const {
            classes
          } = ownerState;
          const slots = {
            root: ['root']
          };
          return composeClasses(slots, getCardUtilityClass, classes);
        };
        const CardRoot = styled(Paper, {
          name: 'MuiCard',
          slot: 'Root',
          overridesResolver: (props, styles) => styles.root
        })(() => {
          return {
            overflow: 'hidden'
          };
        });
        const Card = /*#__PURE__*/reactExports.forwardRef(function Card(inProps, ref) {
          const props = useThemeProps({
            props: inProps,
            name: 'MuiCard'
          });
          const {
              className,
              raised = false
            } = props,
            other = _objectWithoutPropertiesLoose(props, _excluded);
          const ownerState = _extends({}, props, {
            raised
          });
          const classes = useUtilityClasses(ownerState);
          return /*#__PURE__*/jsxRuntimeExports.jsx(CardRoot, _extends({
            className: clsx(classes.root, className),
            elevation: raised ? 8 : undefined,
            ref: ref,
            ownerState: ownerState
          }, other));
        });
        const Card$1 = exports('C', Card);
      }
    };
  });
})();
