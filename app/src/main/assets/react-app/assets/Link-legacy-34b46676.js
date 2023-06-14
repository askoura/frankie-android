;
(function () {
  System.register(['./index-legacy-7ea9dd30.js', './common-legacy-4bc1ef15.js'], function (exports, module) {
    'use strict';

    var generateUtilityClasses, generateUtilityClass, getPath, alpha, styled, capitalize, _extends, reactExports, useThemeProps, _objectWithoutPropertiesLoose, useIsFocusVisible, useForkRef, jsxRuntimeExports, clsx, composeClasses, Typography;
    return {
      setters: [module => {
        generateUtilityClasses = module.n;
        generateUtilityClass = module.q;
        getPath = module.at;
        alpha = module.au;
        styled = module.t;
        capitalize = module.W;
        _extends = module.m;
        reactExports = module.r;
        useThemeProps = module.v;
        _objectWithoutPropertiesLoose = module._;
        useIsFocusVisible = module.av;
        useForkRef = module.X;
        jsxRuntimeExports = module.j;
        clsx = module.x;
        composeClasses = module.y;
      }, module => {
        Typography = module.T;
      }],
      execute: function () {
        function getLinkUtilityClass(slot) {
          return generateUtilityClass('MuiLink', slot);
        }
        const linkClasses = generateUtilityClasses('MuiLink', ['root', 'underlineNone', 'underlineHover', 'underlineAlways', 'button', 'focusVisible']);
        const linkClasses$1 = linkClasses;
        const colorTransformations = {
          primary: 'primary.main',
          textPrimary: 'text.primary',
          secondary: 'secondary.main',
          textSecondary: 'text.secondary',
          error: 'error.main'
        };
        const transformDeprecatedColors = color => {
          return colorTransformations[color] || color;
        };
        const getTextDecoration = ({
          theme,
          ownerState
        }) => {
          const transformedColor = transformDeprecatedColors(ownerState.color);
          const color = getPath(theme, `palette.${transformedColor}`, false) || ownerState.color;
          const channelColor = getPath(theme, `palette.${transformedColor}Channel`);
          if ('vars' in theme && channelColor) {
            return `rgba(${channelColor} / 0.4)`;
          }
          return alpha(color, 0.4);
        };
        const getTextDecoration$1 = getTextDecoration;
        const _excluded = ["className", "color", "component", "onBlur", "onFocus", "TypographyClasses", "underline", "variant", "sx"];
        const useUtilityClasses = ownerState => {
          const {
            classes,
            component,
            focusVisible,
            underline
          } = ownerState;
          const slots = {
            root: ['root', `underline${capitalize(underline)}`, component === 'button' && 'button', focusVisible && 'focusVisible']
          };
          return composeClasses(slots, getLinkUtilityClass, classes);
        };
        const LinkRoot = styled(Typography, {
          name: 'MuiLink',
          slot: 'Root',
          overridesResolver: (props, styles) => {
            const {
              ownerState
            } = props;
            return [styles.root, styles[`underline${capitalize(ownerState.underline)}`], ownerState.component === 'button' && styles.button];
          }
        })(({
          theme,
          ownerState
        }) => {
          return _extends({}, ownerState.underline === 'none' && {
            textDecoration: 'none'
          }, ownerState.underline === 'hover' && {
            textDecoration: 'none',
            '&:hover': {
              textDecoration: 'underline'
            }
          }, ownerState.underline === 'always' && _extends({
            textDecoration: 'underline'
          }, ownerState.color !== 'inherit' && {
            textDecorationColor: getTextDecoration$1({
              theme,
              ownerState
            })
          }, {
            '&:hover': {
              textDecorationColor: 'inherit'
            }
          }), ownerState.component === 'button' && {
            position: 'relative',
            WebkitTapHighlightColor: 'transparent',
            backgroundColor: 'transparent',
            // Reset default value
            // We disable the focus ring for mouse, touch and keyboard users.
            outline: 0,
            border: 0,
            margin: 0,
            // Remove the margin in Safari
            borderRadius: 0,
            padding: 0,
            // Remove the padding in Firefox
            cursor: 'pointer',
            userSelect: 'none',
            verticalAlign: 'middle',
            MozAppearance: 'none',
            // Reset
            WebkitAppearance: 'none',
            // Reset
            '&::-moz-focus-inner': {
              borderStyle: 'none' // Remove Firefox dotted outline.
            },

            [`&.${linkClasses$1.focusVisible}`]: {
              outline: 'auto'
            }
          });
        });
        const Link = /*#__PURE__*/reactExports.forwardRef(function Link(inProps, ref) {
          const props = useThemeProps({
            props: inProps,
            name: 'MuiLink'
          });
          const {
              className,
              color = 'primary',
              component = 'a',
              onBlur,
              onFocus,
              TypographyClasses,
              underline = 'always',
              variant = 'inherit',
              sx
            } = props,
            other = _objectWithoutPropertiesLoose(props, _excluded);
          const {
            isFocusVisibleRef,
            onBlur: handleBlurVisible,
            onFocus: handleFocusVisible,
            ref: focusVisibleRef
          } = useIsFocusVisible();
          const [focusVisible, setFocusVisible] = reactExports.useState(false);
          const handlerRef = useForkRef(ref, focusVisibleRef);
          const handleBlur = event => {
            handleBlurVisible(event);
            if (isFocusVisibleRef.current === false) {
              setFocusVisible(false);
            }
            if (onBlur) {
              onBlur(event);
            }
          };
          const handleFocus = event => {
            handleFocusVisible(event);
            if (isFocusVisibleRef.current === true) {
              setFocusVisible(true);
            }
            if (onFocus) {
              onFocus(event);
            }
          };
          const ownerState = _extends({}, props, {
            color,
            component,
            focusVisible,
            underline,
            variant
          });
          const classes = useUtilityClasses(ownerState);
          return /*#__PURE__*/jsxRuntimeExports.jsx(LinkRoot, _extends({
            color: color,
            className: clsx(classes.root, className),
            classes: TypographyClasses,
            component: component,
            onBlur: handleBlur,
            onFocus: handleFocus,
            ref: handlerRef,
            ownerState: ownerState,
            variant: variant,
            sx: [...(!Object.keys(colorTransformations).includes(color) ? [{
              color
            }] : []), ...(Array.isArray(sx) ? sx : [sx])]
          }, other));
        });
        const Link$1 = exports('L', Link);
      }
    };
  });
})();
