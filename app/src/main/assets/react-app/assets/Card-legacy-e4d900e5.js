;
(function () {
  System.register(['./index-legacy-bc4d1445.js', './common-legacy-e4fabe10.js'], function (exports, module) {
    'use strict';

    var generateUtilityClass, generateUtilityClasses, styled, reactExports, useThemeProps, _objectWithoutPropertiesLoose, _extends, jsxRuntimeExports, clsx, composeClasses, Paper;
    return {
      setters: [function (module) {
        generateUtilityClass = module.w;
        generateUtilityClasses = module.v;
        styled = module.x;
        reactExports = module.r;
        useThemeProps = module.y;
        _objectWithoutPropertiesLoose = module._;
        _extends = module.t;
        jsxRuntimeExports = module.j;
        clsx = module.A;
        composeClasses = module.B;
      }, function (module) {
        Paper = module.P;
      }],
      execute: function execute() {
        function getCardUtilityClass(slot) {
          return generateUtilityClass('MuiCard', slot);
        }
        generateUtilityClasses('MuiCard', ['root']);
        var _excluded = ["className", "raised"];
        var useUtilityClasses = function useUtilityClasses(ownerState) {
          var classes = ownerState.classes;
          var slots = {
            root: ['root']
          };
          return composeClasses(slots, getCardUtilityClass, classes);
        };
        var CardRoot = styled(Paper, {
          name: 'MuiCard',
          slot: 'Root',
          overridesResolver: function overridesResolver(props, styles) {
            return styles.root;
          }
        })(function () {
          return {
            overflow: 'hidden'
          };
        });
        var Card = /*#__PURE__*/reactExports.forwardRef(function Card(inProps, ref) {
          var props = useThemeProps({
            props: inProps,
            name: 'MuiCard'
          });
          var className = props.className,
            _props$raised = props.raised,
            raised = _props$raised === void 0 ? false : _props$raised,
            other = _objectWithoutPropertiesLoose(props, _excluded);
          var ownerState = _extends({}, props, {
            raised: raised
          });
          var classes = useUtilityClasses(ownerState);
          return /*#__PURE__*/jsxRuntimeExports.jsx(CardRoot, _extends({
            className: clsx(classes.root, className),
            elevation: raised ? 8 : undefined,
            ref: ref,
            ownerState: ownerState
          }, other));
        });
        var Card$1 = exports('C', Card);
      }
    };
  });
})();