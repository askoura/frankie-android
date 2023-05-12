;
(function () {
  function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
  function _toArray(arr) { return _arrayWithHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableRest(); }
  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
  function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
  System.register(['./index-legacy-bc4d1445.js', './common-legacy-e4fabe10.js'], function (exports, module) {
    'use strict';

    var generateUtilityClass, generateUtilityClasses, styled, _extends, reactExports, useThemeProps, duration, _objectWithoutPropertiesLoose, useForkRef, jsxRuntimeExports, clsx, composeClasses, useControlled, requireCreateSvgIcon, interopRequireDefaultExports, getDefaultExportFromCjs, Transition, useTheme, getTransitionProps, Paper, ButtonBase;
    return {
      setters: [function (module) {
        generateUtilityClass = module.w;
        generateUtilityClasses = module.v;
        styled = module.x;
        _extends = module.t;
        reactExports = module.r;
        useThemeProps = module.y;
        duration = module.bI;
        _objectWithoutPropertiesLoose = module._;
        useForkRef = module.Y;
        jsxRuntimeExports = module.j;
        clsx = module.A;
        composeClasses = module.B;
        useControlled = module.aG;
        requireCreateSvgIcon = module.i;
        interopRequireDefaultExports = module.k;
        getDefaultExportFromCjs = module.ah;
      }, function (module) {
        Transition = module.m;
        useTheme = module.f;
        getTransitionProps = module.o;
        Paper = module.P;
        ButtonBase = module.t;
      }],
      execute: function execute() {
        function getCollapseUtilityClass(slot) {
          return generateUtilityClass('MuiCollapse', slot);
        }
        generateUtilityClasses('MuiCollapse', ['root', 'horizontal', 'vertical', 'entered', 'hidden', 'wrapper', 'wrapperInner']);
        var _excluded$3 = ["addEndListener", "children", "className", "collapsedSize", "component", "easing", "in", "onEnter", "onEntered", "onEntering", "onExit", "onExited", "onExiting", "orientation", "style", "timeout", "TransitionComponent"];
        var useUtilityClasses$3 = function useUtilityClasses$3(ownerState) {
          var orientation = ownerState.orientation,
            classes = ownerState.classes;
          var slots = {
            root: ['root', "".concat(orientation)],
            entered: ['entered'],
            hidden: ['hidden'],
            wrapper: ['wrapper', "".concat(orientation)],
            wrapperInner: ['wrapperInner', "".concat(orientation)]
          };
          return composeClasses(slots, getCollapseUtilityClass, classes);
        };
        var CollapseRoot = styled('div', {
          name: 'MuiCollapse',
          slot: 'Root',
          overridesResolver: function overridesResolver(props, styles) {
            var ownerState = props.ownerState;
            return [styles.root, styles[ownerState.orientation], ownerState.state === 'entered' && styles.entered, ownerState.state === 'exited' && !ownerState.in && ownerState.collapsedSize === '0px' && styles.hidden];
          }
        })(function (_ref) {
          var theme = _ref.theme,
            ownerState = _ref.ownerState;
          return _extends({
            height: 0,
            overflow: 'hidden',
            transition: theme.transitions.create('height')
          }, ownerState.orientation === 'horizontal' && {
            height: 'auto',
            width: 0,
            transition: theme.transitions.create('width')
          }, ownerState.state === 'entered' && _extends({
            height: 'auto',
            overflow: 'visible'
          }, ownerState.orientation === 'horizontal' && {
            width: 'auto'
          }), ownerState.state === 'exited' && !ownerState.in && ownerState.collapsedSize === '0px' && {
            visibility: 'hidden'
          });
        });
        var CollapseWrapper = styled('div', {
          name: 'MuiCollapse',
          slot: 'Wrapper',
          overridesResolver: function overridesResolver(props, styles) {
            return styles.wrapper;
          }
        })(function (_ref2) {
          var ownerState = _ref2.ownerState;
          return _extends({
            // Hack to get children with a negative margin to not falsify the height computation.
            display: 'flex',
            width: '100%'
          }, ownerState.orientation === 'horizontal' && {
            width: 'auto',
            height: '100%'
          });
        });
        var CollapseWrapperInner = styled('div', {
          name: 'MuiCollapse',
          slot: 'WrapperInner',
          overridesResolver: function overridesResolver(props, styles) {
            return styles.wrapperInner;
          }
        })(function (_ref3) {
          var ownerState = _ref3.ownerState;
          return _extends({
            width: '100%'
          }, ownerState.orientation === 'horizontal' && {
            width: 'auto',
            height: '100%'
          });
        });

        /**
         * The Collapse transition is used by the
         * [Vertical Stepper](/material-ui/react-stepper/#vertical-stepper) StepContent component.
         * It uses [react-transition-group](https://github.com/reactjs/react-transition-group) internally.
         */
        var Collapse = /*#__PURE__*/reactExports.forwardRef(function Collapse(inProps, ref) {
          var props = useThemeProps({
            props: inProps,
            name: 'MuiCollapse'
          });
          var addEndListener = props.addEndListener,
            _children = props.children,
            className = props.className,
            _props$collapsedSize = props.collapsedSize,
            collapsedSizeProp = _props$collapsedSize === void 0 ? '0px' : _props$collapsedSize,
            component = props.component,
            easing = props.easing,
            inProp = props.in,
            onEnter = props.onEnter,
            onEntered = props.onEntered,
            onEntering = props.onEntering,
            onExit = props.onExit,
            onExited = props.onExited,
            onExiting = props.onExiting,
            _props$orientation = props.orientation,
            orientation = _props$orientation === void 0 ? 'vertical' : _props$orientation,
            style = props.style,
            _props$timeout = props.timeout,
            timeout = _props$timeout === void 0 ? duration.standard : _props$timeout,
            _props$TransitionComp = props.TransitionComponent,
            TransitionComponent = _props$TransitionComp === void 0 ? Transition : _props$TransitionComp,
            other = _objectWithoutPropertiesLoose(props, _excluded$3);
          var ownerState = _extends({}, props, {
            orientation: orientation,
            collapsedSize: collapsedSizeProp
          });
          var classes = useUtilityClasses$3(ownerState);
          var theme = useTheme();
          var timer = reactExports.useRef();
          var wrapperRef = reactExports.useRef(null);
          var autoTransitionDuration = reactExports.useRef();
          var collapsedSize = typeof collapsedSizeProp === 'number' ? "".concat(collapsedSizeProp, "px") : collapsedSizeProp;
          var isHorizontal = orientation === 'horizontal';
          var size = isHorizontal ? 'width' : 'height';
          reactExports.useEffect(function () {
            return function () {
              clearTimeout(timer.current);
            };
          }, []);
          var nodeRef = reactExports.useRef(null);
          var handleRef = useForkRef(ref, nodeRef);
          var normalizedTransitionCallback = function normalizedTransitionCallback(callback) {
            return function (maybeIsAppearing) {
              if (callback) {
                var node = nodeRef.current;

                // onEnterXxx and onExitXxx callbacks have a different arguments.length value.
                if (maybeIsAppearing === undefined) {
                  callback(node);
                } else {
                  callback(node, maybeIsAppearing);
                }
              }
            };
          };
          var getWrapperSize = function getWrapperSize() {
            return wrapperRef.current ? wrapperRef.current[isHorizontal ? 'clientWidth' : 'clientHeight'] : 0;
          };
          var handleEnter = normalizedTransitionCallback(function (node, isAppearing) {
            if (wrapperRef.current && isHorizontal) {
              // Set absolute position to get the size of collapsed content
              wrapperRef.current.style.position = 'absolute';
            }
            node.style[size] = collapsedSize;
            if (onEnter) {
              onEnter(node, isAppearing);
            }
          });
          var handleEntering = normalizedTransitionCallback(function (node, isAppearing) {
            var wrapperSize = getWrapperSize();
            if (wrapperRef.current && isHorizontal) {
              // After the size is read reset the position back to default
              wrapperRef.current.style.position = '';
            }
            var _getTransitionProps = getTransitionProps({
                style: style,
                timeout: timeout,
                easing: easing
              }, {
                mode: 'enter'
              }),
              transitionDuration = _getTransitionProps.duration,
              transitionTimingFunction = _getTransitionProps.easing;
            if (timeout === 'auto') {
              var duration2 = theme.transitions.getAutoHeightDuration(wrapperSize);
              node.style.transitionDuration = "".concat(duration2, "ms");
              autoTransitionDuration.current = duration2;
            } else {
              node.style.transitionDuration = typeof transitionDuration === 'string' ? transitionDuration : "".concat(transitionDuration, "ms");
            }
            node.style[size] = "".concat(wrapperSize, "px");
            node.style.transitionTimingFunction = transitionTimingFunction;
            if (onEntering) {
              onEntering(node, isAppearing);
            }
          });
          var handleEntered = normalizedTransitionCallback(function (node, isAppearing) {
            node.style[size] = 'auto';
            if (onEntered) {
              onEntered(node, isAppearing);
            }
          });
          var handleExit = normalizedTransitionCallback(function (node) {
            node.style[size] = "".concat(getWrapperSize(), "px");
            if (onExit) {
              onExit(node);
            }
          });
          var handleExited = normalizedTransitionCallback(onExited);
          var handleExiting = normalizedTransitionCallback(function (node) {
            var wrapperSize = getWrapperSize();
            var _getTransitionProps2 = getTransitionProps({
                style: style,
                timeout: timeout,
                easing: easing
              }, {
                mode: 'exit'
              }),
              transitionDuration = _getTransitionProps2.duration,
              transitionTimingFunction = _getTransitionProps2.easing;
            if (timeout === 'auto') {
              // TODO: rename getAutoHeightDuration to something more generic (width support)
              // Actually it just calculates animation duration based on size
              var duration2 = theme.transitions.getAutoHeightDuration(wrapperSize);
              node.style.transitionDuration = "".concat(duration2, "ms");
              autoTransitionDuration.current = duration2;
            } else {
              node.style.transitionDuration = typeof transitionDuration === 'string' ? transitionDuration : "".concat(transitionDuration, "ms");
            }
            node.style[size] = collapsedSize;
            node.style.transitionTimingFunction = transitionTimingFunction;
            if (onExiting) {
              onExiting(node);
            }
          });
          var handleAddEndListener = function handleAddEndListener(next) {
            if (timeout === 'auto') {
              timer.current = setTimeout(next, autoTransitionDuration.current || 0);
            }
            if (addEndListener) {
              // Old call signature before `react-transition-group` implemented `nodeRef`
              addEndListener(nodeRef.current, next);
            }
          };
          return /*#__PURE__*/jsxRuntimeExports.jsx(TransitionComponent, _extends({
            in: inProp,
            onEnter: handleEnter,
            onEntered: handleEntered,
            onEntering: handleEntering,
            onExit: handleExit,
            onExited: handleExited,
            onExiting: handleExiting,
            addEndListener: handleAddEndListener,
            nodeRef: nodeRef,
            timeout: timeout === 'auto' ? null : timeout
          }, other, {
            children: function children(state, childProps) {
              return /*#__PURE__*/jsxRuntimeExports.jsx(CollapseRoot, _extends({
                as: component,
                className: clsx(classes.root, className, {
                  'entered': classes.entered,
                  'exited': !inProp && collapsedSize === '0px' && classes.hidden
                }[state]),
                style: _extends(_defineProperty({}, isHorizontal ? 'minWidth' : 'minHeight', collapsedSize), style),
                ownerState: _extends({}, ownerState, {
                  state: state
                }),
                ref: handleRef
              }, childProps, {
                children: /*#__PURE__*/jsxRuntimeExports.jsx(CollapseWrapper, {
                  ownerState: _extends({}, ownerState, {
                    state: state
                  }),
                  className: classes.wrapper,
                  ref: wrapperRef,
                  children: /*#__PURE__*/jsxRuntimeExports.jsx(CollapseWrapperInner, {
                    ownerState: _extends({}, ownerState, {
                      state: state
                    }),
                    className: classes.wrapperInner,
                    children: _children
                  })
                })
              }));
            }
          }));
        });
        Collapse.muiSupportAuto = true;
        var Collapse$1 = exports('C', Collapse);

        /**
         * @ignore - internal component.
         * @type {React.Context<{} | {expanded: boolean, disabled: boolean, toggle: () => void}>}
         */
        var AccordionContext = /*#__PURE__*/reactExports.createContext({});
        var AccordionContext$1 = AccordionContext;
        function getAccordionUtilityClass(slot) {
          return generateUtilityClass('MuiAccordion', slot);
        }
        var accordionClasses = generateUtilityClasses('MuiAccordion', ['root', 'rounded', 'expanded', 'disabled', 'gutters', 'region']);
        var accordionClasses$1 = accordionClasses;
        var _excluded$2 = ["children", "className", "defaultExpanded", "disabled", "disableGutters", "expanded", "onChange", "square", "TransitionComponent", "TransitionProps"];
        var useUtilityClasses$2 = function useUtilityClasses$2(ownerState) {
          var classes = ownerState.classes,
            square = ownerState.square,
            expanded = ownerState.expanded,
            disabled = ownerState.disabled,
            disableGutters = ownerState.disableGutters;
          var slots = {
            root: ['root', !square && 'rounded', expanded && 'expanded', disabled && 'disabled', !disableGutters && 'gutters'],
            region: ['region']
          };
          return composeClasses(slots, getAccordionUtilityClass, classes);
        };
        var AccordionRoot = styled(Paper, {
          name: 'MuiAccordion',
          slot: 'Root',
          overridesResolver: function overridesResolver(props, styles) {
            var ownerState = props.ownerState;
            return [_defineProperty({}, "& .".concat(accordionClasses$1.region), styles.region), styles.root, !ownerState.square && styles.rounded, !ownerState.disableGutters && styles.gutters];
          }
        })(function (_ref5) {
          var _ref6;
          var theme = _ref5.theme;
          var transition = {
            duration: theme.transitions.duration.shortest
          };
          return _ref6 = {
            position: 'relative',
            transition: theme.transitions.create(['margin'], transition),
            overflowAnchor: 'none',
            // Keep the same scrolling position
            '&:before': {
              position: 'absolute',
              left: 0,
              top: -1,
              right: 0,
              height: 1,
              content: '""',
              opacity: 1,
              backgroundColor: (theme.vars || theme).palette.divider,
              transition: theme.transitions.create(['opacity', 'background-color'], transition)
            },
            '&:first-of-type': {
              '&:before': {
                display: 'none'
              }
            }
          }, _defineProperty(_ref6, "&.".concat(accordionClasses$1.expanded), {
            '&:before': {
              opacity: 0
            },
            '&:first-of-type': {
              marginTop: 0
            },
            '&:last-of-type': {
              marginBottom: 0
            },
            '& + &': {
              '&:before': {
                display: 'none'
              }
            }
          }), _defineProperty(_ref6, "&.".concat(accordionClasses$1.disabled), {
            backgroundColor: (theme.vars || theme).palette.action.disabledBackground
          }), _ref6;
        }, function (_ref7) {
          var theme = _ref7.theme,
            ownerState = _ref7.ownerState;
          return _extends({}, !ownerState.square && {
            borderRadius: 0,
            '&:first-of-type': {
              borderTopLeftRadius: (theme.vars || theme).shape.borderRadius,
              borderTopRightRadius: (theme.vars || theme).shape.borderRadius
            },
            '&:last-of-type': {
              borderBottomLeftRadius: (theme.vars || theme).shape.borderRadius,
              borderBottomRightRadius: (theme.vars || theme).shape.borderRadius,
              // Fix a rendering issue on Edge
              '@supports (-ms-ime-align: auto)': {
                borderBottomLeftRadius: 0,
                borderBottomRightRadius: 0
              }
            }
          }, !ownerState.disableGutters && _defineProperty({}, "&.".concat(accordionClasses$1.expanded), {
            margin: '16px 0'
          }));
        });
        var Accordion = /*#__PURE__*/reactExports.forwardRef(function Accordion(inProps, ref) {
          var props = useThemeProps({
            props: inProps,
            name: 'MuiAccordion'
          });
          var childrenProp = props.children,
            className = props.className,
            _props$defaultExpande = props.defaultExpanded,
            defaultExpanded = _props$defaultExpande === void 0 ? false : _props$defaultExpande,
            _props$disabled = props.disabled,
            disabled = _props$disabled === void 0 ? false : _props$disabled,
            _props$disableGutters = props.disableGutters,
            disableGutters = _props$disableGutters === void 0 ? false : _props$disableGutters,
            expandedProp = props.expanded,
            onChange = props.onChange,
            _props$square = props.square,
            square = _props$square === void 0 ? false : _props$square,
            _props$TransitionComp2 = props.TransitionComponent,
            TransitionComponent = _props$TransitionComp2 === void 0 ? Collapse$1 : _props$TransitionComp2,
            TransitionProps = props.TransitionProps,
            other = _objectWithoutPropertiesLoose(props, _excluded$2);
          var _useControlled = useControlled({
              controlled: expandedProp,
              default: defaultExpanded,
              name: 'Accordion',
              state: 'expanded'
            }),
            _useControlled2 = _slicedToArray(_useControlled, 2),
            expanded = _useControlled2[0],
            setExpandedState = _useControlled2[1];
          var handleChange = reactExports.useCallback(function (event) {
            setExpandedState(!expanded);
            if (onChange) {
              onChange(event, !expanded);
            }
          }, [expanded, onChange, setExpandedState]);
          var _reactExports$Childre = reactExports.Children.toArray(childrenProp),
            _reactExports$Childre2 = _toArray(_reactExports$Childre),
            summary = _reactExports$Childre2[0],
            children = _reactExports$Childre2.slice(1);
          var contextValue = reactExports.useMemo(function () {
            return {
              expanded: expanded,
              disabled: disabled,
              disableGutters: disableGutters,
              toggle: handleChange
            };
          }, [expanded, disabled, disableGutters, handleChange]);
          var ownerState = _extends({}, props, {
            square: square,
            disabled: disabled,
            disableGutters: disableGutters,
            expanded: expanded
          });
          var classes = useUtilityClasses$2(ownerState);
          return /*#__PURE__*/jsxRuntimeExports.jsxs(AccordionRoot, _extends({
            className: clsx(classes.root, className),
            ref: ref,
            ownerState: ownerState,
            square: square
          }, other, {
            children: [/*#__PURE__*/jsxRuntimeExports.jsx(AccordionContext$1.Provider, {
              value: contextValue,
              children: summary
            }), /*#__PURE__*/jsxRuntimeExports.jsx(TransitionComponent, _extends({
              in: expanded,
              timeout: "auto"
            }, TransitionProps, {
              children: /*#__PURE__*/jsxRuntimeExports.jsx("div", {
                "aria-labelledby": summary.props.id,
                id: summary.props['aria-controls'],
                role: "region",
                className: classes.region,
                children: children
              })
            }))]
          }));
        });
        var Accordion$1 = exports('A', Accordion);
        function getAccordionDetailsUtilityClass(slot) {
          return generateUtilityClass('MuiAccordionDetails', slot);
        }
        generateUtilityClasses('MuiAccordionDetails', ['root']);
        var _excluded$1 = ["className"];
        var useUtilityClasses$1 = function useUtilityClasses$1(ownerState) {
          var classes = ownerState.classes;
          var slots = {
            root: ['root']
          };
          return composeClasses(slots, getAccordionDetailsUtilityClass, classes);
        };
        var AccordionDetailsRoot = styled('div', {
          name: 'MuiAccordionDetails',
          slot: 'Root',
          overridesResolver: function overridesResolver(props, styles) {
            return styles.root;
          }
        })(function (_ref9) {
          var theme = _ref9.theme;
          return {
            padding: theme.spacing(1, 2, 2)
          };
        });
        var AccordionDetails = /*#__PURE__*/reactExports.forwardRef(function AccordionDetails(inProps, ref) {
          var props = useThemeProps({
            props: inProps,
            name: 'MuiAccordionDetails'
          });
          var className = props.className,
            other = _objectWithoutPropertiesLoose(props, _excluded$1);
          var ownerState = props;
          var classes = useUtilityClasses$1(ownerState);
          return /*#__PURE__*/jsxRuntimeExports.jsx(AccordionDetailsRoot, _extends({
            className: clsx(classes.root, className),
            ref: ref,
            ownerState: ownerState
          }, other));
        });
        var AccordionDetails$1 = exports('e', AccordionDetails);
        function getAccordionSummaryUtilityClass(slot) {
          return generateUtilityClass('MuiAccordionSummary', slot);
        }
        var accordionSummaryClasses = generateUtilityClasses('MuiAccordionSummary', ['root', 'expanded', 'focusVisible', 'disabled', 'gutters', 'contentGutters', 'content', 'expandIconWrapper']);
        var accordionSummaryClasses$1 = accordionSummaryClasses;
        var _excluded = ["children", "className", "expandIcon", "focusVisibleClassName", "onClick"];
        var useUtilityClasses = function useUtilityClasses(ownerState) {
          var classes = ownerState.classes,
            expanded = ownerState.expanded,
            disabled = ownerState.disabled,
            disableGutters = ownerState.disableGutters;
          var slots = {
            root: ['root', expanded && 'expanded', disabled && 'disabled', !disableGutters && 'gutters'],
            focusVisible: ['focusVisible'],
            content: ['content', expanded && 'expanded', !disableGutters && 'contentGutters'],
            expandIconWrapper: ['expandIconWrapper', expanded && 'expanded']
          };
          return composeClasses(slots, getAccordionSummaryUtilityClass, classes);
        };
        var AccordionSummaryRoot = styled(ButtonBase, {
          name: 'MuiAccordionSummary',
          slot: 'Root',
          overridesResolver: function overridesResolver(props, styles) {
            return styles.root;
          }
        })(function (_ref10) {
          var _extends3;
          var theme = _ref10.theme,
            ownerState = _ref10.ownerState;
          var transition = {
            duration: theme.transitions.duration.shortest
          };
          return _extends((_extends3 = {
            display: 'flex',
            minHeight: 48,
            padding: theme.spacing(0, 2),
            transition: theme.transitions.create(['min-height', 'background-color'], transition)
          }, _defineProperty(_extends3, "&.".concat(accordionSummaryClasses$1.focusVisible), {
            backgroundColor: (theme.vars || theme).palette.action.focus
          }), _defineProperty(_extends3, "&.".concat(accordionSummaryClasses$1.disabled), {
            opacity: (theme.vars || theme).palette.action.disabledOpacity
          }), _defineProperty(_extends3, "&:hover:not(.".concat(accordionSummaryClasses$1.disabled, ")"), {
            cursor: 'pointer'
          }), _extends3), !ownerState.disableGutters && _defineProperty({}, "&.".concat(accordionSummaryClasses$1.expanded), {
            minHeight: 64
          }));
        });
        var AccordionSummaryContent = styled('div', {
          name: 'MuiAccordionSummary',
          slot: 'Content',
          overridesResolver: function overridesResolver(props, styles) {
            return styles.content;
          }
        })(function (_ref12) {
          var theme = _ref12.theme,
            ownerState = _ref12.ownerState;
          return _extends({
            display: 'flex',
            flexGrow: 1,
            margin: '12px 0'
          }, !ownerState.disableGutters && _defineProperty({
            transition: theme.transitions.create(['margin'], {
              duration: theme.transitions.duration.shortest
            })
          }, "&.".concat(accordionSummaryClasses$1.expanded), {
            margin: '20px 0'
          }));
        });
        var AccordionSummaryExpandIconWrapper = styled('div', {
          name: 'MuiAccordionSummary',
          slot: 'ExpandIconWrapper',
          overridesResolver: function overridesResolver(props, styles) {
            return styles.expandIconWrapper;
          }
        })(function (_ref14) {
          var theme = _ref14.theme;
          return _defineProperty({
            display: 'flex',
            color: (theme.vars || theme).palette.action.active,
            transform: 'rotate(0deg)',
            transition: theme.transitions.create('transform', {
              duration: theme.transitions.duration.shortest
            })
          }, "&.".concat(accordionSummaryClasses$1.expanded), {
            transform: 'rotate(180deg)'
          });
        });
        var AccordionSummary = /*#__PURE__*/reactExports.forwardRef(function AccordionSummary(inProps, ref) {
          var props = useThemeProps({
            props: inProps,
            name: 'MuiAccordionSummary'
          });
          var children = props.children,
            className = props.className,
            expandIcon = props.expandIcon,
            focusVisibleClassName = props.focusVisibleClassName,
            onClick = props.onClick,
            other = _objectWithoutPropertiesLoose(props, _excluded);
          var _reactExports$useCont = reactExports.useContext(AccordionContext$1),
            _reactExports$useCont2 = _reactExports$useCont.disabled,
            disabled = _reactExports$useCont2 === void 0 ? false : _reactExports$useCont2,
            disableGutters = _reactExports$useCont.disableGutters,
            expanded = _reactExports$useCont.expanded,
            toggle = _reactExports$useCont.toggle;
          var handleChange = function handleChange(event) {
            if (toggle) {
              toggle(event);
            }
            if (onClick) {
              onClick(event);
            }
          };
          var ownerState = _extends({}, props, {
            expanded: expanded,
            disabled: disabled,
            disableGutters: disableGutters
          });
          var classes = useUtilityClasses(ownerState);
          return /*#__PURE__*/jsxRuntimeExports.jsxs(AccordionSummaryRoot, _extends({
            focusRipple: false,
            disableRipple: true,
            disabled: disabled,
            component: "div",
            "aria-expanded": expanded,
            className: clsx(classes.root, className),
            focusVisibleClassName: clsx(classes.focusVisible, focusVisibleClassName),
            onClick: handleChange,
            ref: ref,
            ownerState: ownerState
          }, other, {
            children: [/*#__PURE__*/jsxRuntimeExports.jsx(AccordionSummaryContent, {
              className: classes.content,
              ownerState: ownerState,
              children: children
            }), expandIcon && /*#__PURE__*/jsxRuntimeExports.jsx(AccordionSummaryExpandIconWrapper, {
              className: classes.expandIconWrapper,
              ownerState: ownerState,
              children: expandIcon
            })]
          }));
        });
        var AccordionSummary$1 = exports('a', AccordionSummary);
        var ExpandMore = {};
        var _interopRequireDefault$1 = interopRequireDefaultExports;
        Object.defineProperty(ExpandMore, "__esModule", {
          value: true
        });
        var default_1$1 = exports('b', ExpandMore.default = void 0);
        var _createSvgIcon$1 = _interopRequireDefault$1(requireCreateSvgIcon());
        var _jsxRuntime$1 = jsxRuntimeExports;
        var _default$1 = (0, _createSvgIcon$1.default)( /*#__PURE__*/(0, _jsxRuntime$1.jsx)("path", {
          d: "M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"
        }), 'ExpandMore');
        exports('b', default_1$1 = ExpandMore.default = _default$1);
        var ContentCopy = {};
        var _interopRequireDefault = interopRequireDefaultExports;
        Object.defineProperty(ContentCopy, "__esModule", {
          value: true
        });
        var default_1 = exports('d', ContentCopy.default = void 0);
        var _createSvgIcon = _interopRequireDefault(requireCreateSvgIcon());
        var _jsxRuntime = jsxRuntimeExports;
        var _default = (0, _createSvgIcon.default)( /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
          d: "M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"
        }), 'ContentCopy');
        exports('d', default_1 = ContentCopy.default = _default);
        var classnames = {
          exports: {}
        };

        /*!
        	Copyright (c) 2018 Jed Watson.
        	Licensed under the MIT License (MIT), see
        	http://jedwatson.github.io/classnames
        */

        (function (module) {
          /* global define */

          (function () {
            var hasOwn = {}.hasOwnProperty;
            function classNames() {
              var classes = [];
              for (var i = 0; i < arguments.length; i++) {
                var arg = arguments[i];
                if (!arg) continue;
                var argType = _typeof(arg);
                if (argType === 'string' || argType === 'number') {
                  classes.push(arg);
                } else if (Array.isArray(arg)) {
                  if (arg.length) {
                    var inner = classNames.apply(null, arg);
                    if (inner) {
                      classes.push(inner);
                    }
                  }
                } else if (argType === 'object') {
                  if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes('[native code]')) {
                    classes.push(arg.toString());
                    continue;
                  }
                  for (var key in arg) {
                    if (hasOwn.call(arg, key) && arg[key]) {
                      classes.push(key);
                    }
                  }
                }
              }
              return classes.join(' ');
            }
            if (module.exports) {
              classNames.default = classNames;
              module.exports = classNames;
            } else {
              window.classNames = classNames;
            }
          })();
        })(classnames);
        var classnamesExports = classnames.exports;
        var classNames = exports('c', /*@__PURE__*/getDefaultExportFromCjs(classnamesExports));
      }
    };
  });
})();
