;
(function () {
  System.register(['./index-legacy-4fb9792c.js', './common-legacy-09fb4163.js', './InputAdornment-legacy-02205919.js'], function (exports, module) {
    'use strict';

    var generateUtilityClass, generateUtilityClasses, reactExports, _objectWithoutPropertiesLoose, ownerDocument, jsxRuntimeExports, _extends, useForkRef, useEnhancedEffect, composeClasses, _inheritsLoose, React, styled, useTheme, useThemeProps, clsx, resolveBreakpointValues, handleBreakpoints, getThemeProps, React$1, createSvgIcon, useEventCallback, useControlled, useId, alpha, useTheme$2, capitalize, Portal, useSlotProps, useClassNamesOverride, forceReflow, Transition, useTheme$1, extendSxProp, IconButton, Typography, Button, DialogActions, Paper, FocusTrap, Grow, TransitionGroup, Fade, ButtonBase, Dialog, dialogClasses, DialogContent, InputAdornment;
    return {
      setters: [module => {
        generateUtilityClass = module.q;
        generateUtilityClasses = module.n;
        reactExports = module.r;
        _objectWithoutPropertiesLoose = module._;
        ownerDocument = module.aF;
        jsxRuntimeExports = module.j;
        _extends = module.m;
        useForkRef = module.X;
        useEnhancedEffect = module.aD;
        composeClasses = module.y;
        _inheritsLoose = module.bO;
        React = module.R;
        styled = module.t;
        useTheme = module.bG;
        useThemeProps = module.v;
        clsx = module.x;
        resolveBreakpointValues = module.M;
        handleBreakpoints = module.K;
        getThemeProps = module.bP;
        React$1 = module.bQ;
        createSvgIcon = module.c;
        useEventCallback = module.aE;
        useControlled = module.aC;
        useId = module.w;
        alpha = module.at;
        useTheme$2 = module.a8;
        capitalize = module.W;
      }, module => {
        Portal = module.U;
        useSlotProps = module.J;
        useClassNamesOverride = module.V;
        forceReflow = module.W;
        Transition = module.m;
        useTheme$1 = module.f;
        extendSxProp = module.h;
        IconButton = module.a;
        Typography = module.T;
        Button = module.b;
        DialogActions = module.k;
        Paper = module.P;
        FocusTrap = module.X;
        Grow = module.K;
        TransitionGroup = module.Y;
        Fade = module.Z;
        ButtonBase = module.t;
        Dialog = module.D;
        dialogClasses = module.$;
        DialogContent = module.j;
      }, module => {
        InputAdornment = module.I;
      }],
      execute: function () {
        exports({
          L: LocalizationProvider,
          M: MobileWrapper,
          d: useMeridiemMode,
          e: arrayIncludes,
          f: useValidation,
          g: getPickersToolbarUtilityClass,
          j: DesktopWrapper,
          k: CalendarOrClockPicker,
          m: useMediaQuery
        });
        var top = 'top';
        var bottom = 'bottom';
        var right = 'right';
        var left = 'left';
        var auto = 'auto';
        var basePlacements = [top, bottom, right, left];
        var start = 'start';
        var end = 'end';
        var clippingParents = 'clippingParents';
        var viewport = 'viewport';
        var popper = 'popper';
        var reference = 'reference';
        var variationPlacements = /*#__PURE__*/basePlacements.reduce(function (acc, placement) {
          return acc.concat([placement + "-" + start, placement + "-" + end]);
        }, []);
        var placements = /*#__PURE__*/[].concat(basePlacements, [auto]).reduce(function (acc, placement) {
          return acc.concat([placement, placement + "-" + start, placement + "-" + end]);
        }, []); // modifiers that need to read the DOM

        var beforeRead = 'beforeRead';
        var read = 'read';
        var afterRead = 'afterRead'; // pure-logic modifiers

        var beforeMain = 'beforeMain';
        var main = 'main';
        var afterMain = 'afterMain'; // modifier with the purpose to write to the DOM (or write into a framework state)

        var beforeWrite = 'beforeWrite';
        var write = 'write';
        var afterWrite = 'afterWrite';
        var modifierPhases = [beforeRead, read, afterRead, beforeMain, main, afterMain, beforeWrite, write, afterWrite];
        function getNodeName(element) {
          return element ? (element.nodeName || '').toLowerCase() : null;
        }
        function getWindow(node) {
          if (node == null) {
            return window;
          }
          if (node.toString() !== '[object Window]') {
            var ownerDocument = node.ownerDocument;
            return ownerDocument ? ownerDocument.defaultView || window : window;
          }
          return node;
        }
        function isElement(node) {
          var OwnElement = getWindow(node).Element;
          return node instanceof OwnElement || node instanceof Element;
        }
        function isHTMLElement$1(node) {
          var OwnElement = getWindow(node).HTMLElement;
          return node instanceof OwnElement || node instanceof HTMLElement;
        }
        function isShadowRoot(node) {
          // IE 11 has no ShadowRoot
          if (typeof ShadowRoot === 'undefined') {
            return false;
          }
          var OwnElement = getWindow(node).ShadowRoot;
          return node instanceof OwnElement || node instanceof ShadowRoot;
        }

        // and applies them to the HTMLElements such as popper and arrow

        function applyStyles(_ref) {
          var state = _ref.state;
          Object.keys(state.elements).forEach(function (name) {
            var style = state.styles[name] || {};
            var attributes = state.attributes[name] || {};
            var element = state.elements[name]; // arrow is optional + virtual elements

            if (!isHTMLElement$1(element) || !getNodeName(element)) {
              return;
            } // Flow doesn't support to extend this property, but it's the most
            // effective way to apply styles to an HTMLElement
            // $FlowFixMe[cannot-write]

            Object.assign(element.style, style);
            Object.keys(attributes).forEach(function (name) {
              var value = attributes[name];
              if (value === false) {
                element.removeAttribute(name);
              } else {
                element.setAttribute(name, value === true ? '' : value);
              }
            });
          });
        }
        function effect$2(_ref2) {
          var state = _ref2.state;
          var initialStyles = {
            popper: {
              position: state.options.strategy,
              left: '0',
              top: '0',
              margin: '0'
            },
            arrow: {
              position: 'absolute'
            },
            reference: {}
          };
          Object.assign(state.elements.popper.style, initialStyles.popper);
          state.styles = initialStyles;
          if (state.elements.arrow) {
            Object.assign(state.elements.arrow.style, initialStyles.arrow);
          }
          return function () {
            Object.keys(state.elements).forEach(function (name) {
              var element = state.elements[name];
              var attributes = state.attributes[name] || {};
              var styleProperties = Object.keys(state.styles.hasOwnProperty(name) ? state.styles[name] : initialStyles[name]); // Set all values to an empty string to unset them

              var style = styleProperties.reduce(function (style, property) {
                style[property] = '';
                return style;
              }, {}); // arrow is optional + virtual elements

              if (!isHTMLElement$1(element) || !getNodeName(element)) {
                return;
              }
              Object.assign(element.style, style);
              Object.keys(attributes).forEach(function (attribute) {
                element.removeAttribute(attribute);
              });
            });
          };
        } // eslint-disable-next-line import/no-unused-modules

        const applyStyles$1 = {
          name: 'applyStyles',
          enabled: true,
          phase: 'write',
          fn: applyStyles,
          effect: effect$2,
          requires: ['computeStyles']
        };
        function getBasePlacement(placement) {
          return placement.split('-')[0];
        }
        var max = Math.max;
        var min = Math.min;
        var round = Math.round;
        function getUAString() {
          var uaData = navigator.userAgentData;
          if (uaData != null && uaData.brands && Array.isArray(uaData.brands)) {
            return uaData.brands.map(function (item) {
              return item.brand + "/" + item.version;
            }).join(' ');
          }
          return navigator.userAgent;
        }
        function isLayoutViewport() {
          return !/^((?!chrome|android).)*safari/i.test(getUAString());
        }
        function getBoundingClientRect(element, includeScale, isFixedStrategy) {
          if (includeScale === void 0) {
            includeScale = false;
          }
          if (isFixedStrategy === void 0) {
            isFixedStrategy = false;
          }
          var clientRect = element.getBoundingClientRect();
          var scaleX = 1;
          var scaleY = 1;
          if (includeScale && isHTMLElement$1(element)) {
            scaleX = element.offsetWidth > 0 ? round(clientRect.width) / element.offsetWidth || 1 : 1;
            scaleY = element.offsetHeight > 0 ? round(clientRect.height) / element.offsetHeight || 1 : 1;
          }
          var _ref = isElement(element) ? getWindow(element) : window,
            visualViewport = _ref.visualViewport;
          var addVisualOffsets = !isLayoutViewport() && isFixedStrategy;
          var x = (clientRect.left + (addVisualOffsets && visualViewport ? visualViewport.offsetLeft : 0)) / scaleX;
          var y = (clientRect.top + (addVisualOffsets && visualViewport ? visualViewport.offsetTop : 0)) / scaleY;
          var width = clientRect.width / scaleX;
          var height = clientRect.height / scaleY;
          return {
            width: width,
            height: height,
            top: y,
            right: x + width,
            bottom: y + height,
            left: x,
            x: x,
            y: y
          };
        }

        // means it doesn't take into account transforms.

        function getLayoutRect(element) {
          var clientRect = getBoundingClientRect(element); // Use the clientRect sizes if it's not been transformed.
          // Fixes https://github.com/popperjs/popper-core/issues/1223

          var width = element.offsetWidth;
          var height = element.offsetHeight;
          if (Math.abs(clientRect.width - width) <= 1) {
            width = clientRect.width;
          }
          if (Math.abs(clientRect.height - height) <= 1) {
            height = clientRect.height;
          }
          return {
            x: element.offsetLeft,
            y: element.offsetTop,
            width: width,
            height: height
          };
        }
        function contains(parent, child) {
          var rootNode = child.getRootNode && child.getRootNode(); // First, attempt with faster native method

          if (parent.contains(child)) {
            return true;
          } // then fallback to custom implementation with Shadow DOM support
          else if (rootNode && isShadowRoot(rootNode)) {
            var next = child;
            do {
              if (next && parent.isSameNode(next)) {
                return true;
              } // $FlowFixMe[prop-missing]: need a better way to handle this...

              next = next.parentNode || next.host;
            } while (next);
          } // Give up, the result is false

          return false;
        }
        function getComputedStyle(element) {
          return getWindow(element).getComputedStyle(element);
        }
        function isTableElement(element) {
          return ['table', 'td', 'th'].indexOf(getNodeName(element)) >= 0;
        }
        function getDocumentElement(element) {
          // $FlowFixMe[incompatible-return]: assume body is always available
          return ((isElement(element) ? element.ownerDocument :
          // $FlowFixMe[prop-missing]
          element.document) || window.document).documentElement;
        }
        function getParentNode(element) {
          if (getNodeName(element) === 'html') {
            return element;
          }
          return (
            // this is a quicker (but less type safe) way to save quite some bytes from the bundle
            // $FlowFixMe[incompatible-return]
            // $FlowFixMe[prop-missing]
            element.assignedSlot ||
            // step into the shadow DOM of the parent of a slotted node
            element.parentNode || (
            // DOM Element detected
            isShadowRoot(element) ? element.host : null) ||
            // ShadowRoot detected
            // $FlowFixMe[incompatible-call]: HTMLElement is a Node
            getDocumentElement(element) // fallback
          );
        }

        function getTrueOffsetParent(element) {
          if (!isHTMLElement$1(element) ||
          // https://github.com/popperjs/popper-core/issues/837
          getComputedStyle(element).position === 'fixed') {
            return null;
          }
          return element.offsetParent;
        } // `.offsetParent` reports `null` for fixed elements, while absolute elements
        // return the containing block

        function getContainingBlock(element) {
          var isFirefox = /firefox/i.test(getUAString());
          var isIE = /Trident/i.test(getUAString());
          if (isIE && isHTMLElement$1(element)) {
            // In IE 9, 10 and 11 fixed elements containing block is always established by the viewport
            var elementCss = getComputedStyle(element);
            if (elementCss.position === 'fixed') {
              return null;
            }
          }
          var currentNode = getParentNode(element);
          if (isShadowRoot(currentNode)) {
            currentNode = currentNode.host;
          }
          while (isHTMLElement$1(currentNode) && ['html', 'body'].indexOf(getNodeName(currentNode)) < 0) {
            var css = getComputedStyle(currentNode); // This is non-exhaustive but covers the most common CSS properties that
            // create a containing block.
            // https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#identifying_the_containing_block

            if (css.transform !== 'none' || css.perspective !== 'none' || css.contain === 'paint' || ['transform', 'perspective'].indexOf(css.willChange) !== -1 || isFirefox && css.willChange === 'filter' || isFirefox && css.filter && css.filter !== 'none') {
              return currentNode;
            } else {
              currentNode = currentNode.parentNode;
            }
          }
          return null;
        } // Gets the closest ancestor positioned element. Handles some edge cases,
        // such as table ancestors and cross browser bugs.

        function getOffsetParent(element) {
          var window = getWindow(element);
          var offsetParent = getTrueOffsetParent(element);
          while (offsetParent && isTableElement(offsetParent) && getComputedStyle(offsetParent).position === 'static') {
            offsetParent = getTrueOffsetParent(offsetParent);
          }
          if (offsetParent && (getNodeName(offsetParent) === 'html' || getNodeName(offsetParent) === 'body' && getComputedStyle(offsetParent).position === 'static')) {
            return window;
          }
          return offsetParent || getContainingBlock(element) || window;
        }
        function getMainAxisFromPlacement(placement) {
          return ['top', 'bottom'].indexOf(placement) >= 0 ? 'x' : 'y';
        }
        function within(min$1, value, max$1) {
          return max(min$1, min(value, max$1));
        }
        function withinMaxClamp(min, value, max) {
          var v = within(min, value, max);
          return v > max ? max : v;
        }
        function getFreshSideObject() {
          return {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
          };
        }
        function mergePaddingObject(paddingObject) {
          return Object.assign({}, getFreshSideObject(), paddingObject);
        }
        function expandToHashMap(value, keys) {
          return keys.reduce(function (hashMap, key) {
            hashMap[key] = value;
            return hashMap;
          }, {});
        }
        var toPaddingObject = function toPaddingObject(padding, state) {
          padding = typeof padding === 'function' ? padding(Object.assign({}, state.rects, {
            placement: state.placement
          })) : padding;
          return mergePaddingObject(typeof padding !== 'number' ? padding : expandToHashMap(padding, basePlacements));
        };
        function arrow(_ref) {
          var _state$modifiersData$;
          var state = _ref.state,
            name = _ref.name,
            options = _ref.options;
          var arrowElement = state.elements.arrow;
          var popperOffsets = state.modifiersData.popperOffsets;
          var basePlacement = getBasePlacement(state.placement);
          var axis = getMainAxisFromPlacement(basePlacement);
          var isVertical = [left, right].indexOf(basePlacement) >= 0;
          var len = isVertical ? 'height' : 'width';
          if (!arrowElement || !popperOffsets) {
            return;
          }
          var paddingObject = toPaddingObject(options.padding, state);
          var arrowRect = getLayoutRect(arrowElement);
          var minProp = axis === 'y' ? top : left;
          var maxProp = axis === 'y' ? bottom : right;
          var endDiff = state.rects.reference[len] + state.rects.reference[axis] - popperOffsets[axis] - state.rects.popper[len];
          var startDiff = popperOffsets[axis] - state.rects.reference[axis];
          var arrowOffsetParent = getOffsetParent(arrowElement);
          var clientSize = arrowOffsetParent ? axis === 'y' ? arrowOffsetParent.clientHeight || 0 : arrowOffsetParent.clientWidth || 0 : 0;
          var centerToReference = endDiff / 2 - startDiff / 2; // Make sure the arrow doesn't overflow the popper if the center point is
          // outside of the popper bounds

          var min = paddingObject[minProp];
          var max = clientSize - arrowRect[len] - paddingObject[maxProp];
          var center = clientSize / 2 - arrowRect[len] / 2 + centerToReference;
          var offset = within(min, center, max); // Prevents breaking syntax highlighting...

          var axisProp = axis;
          state.modifiersData[name] = (_state$modifiersData$ = {}, _state$modifiersData$[axisProp] = offset, _state$modifiersData$.centerOffset = offset - center, _state$modifiersData$);
        }
        function effect$1(_ref2) {
          var state = _ref2.state,
            options = _ref2.options;
          var _options$element = options.element,
            arrowElement = _options$element === void 0 ? '[data-popper-arrow]' : _options$element;
          if (arrowElement == null) {
            return;
          } // CSS selector

          if (typeof arrowElement === 'string') {
            arrowElement = state.elements.popper.querySelector(arrowElement);
            if (!arrowElement) {
              return;
            }
          }
          if (!contains(state.elements.popper, arrowElement)) {
            return;
          }
          state.elements.arrow = arrowElement;
        } // eslint-disable-next-line import/no-unused-modules

        const arrow$1 = {
          name: 'arrow',
          enabled: true,
          phase: 'main',
          fn: arrow,
          effect: effect$1,
          requires: ['popperOffsets'],
          requiresIfExists: ['preventOverflow']
        };
        function getVariation(placement) {
          return placement.split('-')[1];
        }
        var unsetSides = {
          top: 'auto',
          right: 'auto',
          bottom: 'auto',
          left: 'auto'
        }; // Round the offsets to the nearest suitable subpixel based on the DPR.
        // Zooming can change the DPR, but it seems to report a value that will
        // cleanly divide the values into the appropriate subpixels.

        function roundOffsetsByDPR(_ref, win) {
          var x = _ref.x,
            y = _ref.y;
          var dpr = win.devicePixelRatio || 1;
          return {
            x: round(x * dpr) / dpr || 0,
            y: round(y * dpr) / dpr || 0
          };
        }
        function mapToStyles(_ref2) {
          var _Object$assign2;
          var popper = _ref2.popper,
            popperRect = _ref2.popperRect,
            placement = _ref2.placement,
            variation = _ref2.variation,
            offsets = _ref2.offsets,
            position = _ref2.position,
            gpuAcceleration = _ref2.gpuAcceleration,
            adaptive = _ref2.adaptive,
            roundOffsets = _ref2.roundOffsets,
            isFixed = _ref2.isFixed;
          var _offsets$x = offsets.x,
            x = _offsets$x === void 0 ? 0 : _offsets$x,
            _offsets$y = offsets.y,
            y = _offsets$y === void 0 ? 0 : _offsets$y;
          var _ref3 = typeof roundOffsets === 'function' ? roundOffsets({
            x: x,
            y: y
          }) : {
            x: x,
            y: y
          };
          x = _ref3.x;
          y = _ref3.y;
          var hasX = offsets.hasOwnProperty('x');
          var hasY = offsets.hasOwnProperty('y');
          var sideX = left;
          var sideY = top;
          var win = window;
          if (adaptive) {
            var offsetParent = getOffsetParent(popper);
            var heightProp = 'clientHeight';
            var widthProp = 'clientWidth';
            if (offsetParent === getWindow(popper)) {
              offsetParent = getDocumentElement(popper);
              if (getComputedStyle(offsetParent).position !== 'static' && position === 'absolute') {
                heightProp = 'scrollHeight';
                widthProp = 'scrollWidth';
              }
            } // $FlowFixMe[incompatible-cast]: force type refinement, we compare offsetParent with window above, but Flow doesn't detect it

            offsetParent = offsetParent;
            if (placement === top || (placement === left || placement === right) && variation === end) {
              sideY = bottom;
              var offsetY = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.height :
              // $FlowFixMe[prop-missing]
              offsetParent[heightProp];
              y -= offsetY - popperRect.height;
              y *= gpuAcceleration ? 1 : -1;
            }
            if (placement === left || (placement === top || placement === bottom) && variation === end) {
              sideX = right;
              var offsetX = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.width :
              // $FlowFixMe[prop-missing]
              offsetParent[widthProp];
              x -= offsetX - popperRect.width;
              x *= gpuAcceleration ? 1 : -1;
            }
          }
          var commonStyles = Object.assign({
            position: position
          }, adaptive && unsetSides);
          var _ref4 = roundOffsets === true ? roundOffsetsByDPR({
            x: x,
            y: y
          }, getWindow(popper)) : {
            x: x,
            y: y
          };
          x = _ref4.x;
          y = _ref4.y;
          if (gpuAcceleration) {
            var _Object$assign;
            return Object.assign({}, commonStyles, (_Object$assign = {}, _Object$assign[sideY] = hasY ? '0' : '', _Object$assign[sideX] = hasX ? '0' : '', _Object$assign.transform = (win.devicePixelRatio || 1) <= 1 ? "translate(" + x + "px, " + y + "px)" : "translate3d(" + x + "px, " + y + "px, 0)", _Object$assign));
          }
          return Object.assign({}, commonStyles, (_Object$assign2 = {}, _Object$assign2[sideY] = hasY ? y + "px" : '', _Object$assign2[sideX] = hasX ? x + "px" : '', _Object$assign2.transform = '', _Object$assign2));
        }
        function computeStyles(_ref5) {
          var state = _ref5.state,
            options = _ref5.options;
          var _options$gpuAccelerat = options.gpuAcceleration,
            gpuAcceleration = _options$gpuAccelerat === void 0 ? true : _options$gpuAccelerat,
            _options$adaptive = options.adaptive,
            adaptive = _options$adaptive === void 0 ? true : _options$adaptive,
            _options$roundOffsets = options.roundOffsets,
            roundOffsets = _options$roundOffsets === void 0 ? true : _options$roundOffsets;
          var commonStyles = {
            placement: getBasePlacement(state.placement),
            variation: getVariation(state.placement),
            popper: state.elements.popper,
            popperRect: state.rects.popper,
            gpuAcceleration: gpuAcceleration,
            isFixed: state.options.strategy === 'fixed'
          };
          if (state.modifiersData.popperOffsets != null) {
            state.styles.popper = Object.assign({}, state.styles.popper, mapToStyles(Object.assign({}, commonStyles, {
              offsets: state.modifiersData.popperOffsets,
              position: state.options.strategy,
              adaptive: adaptive,
              roundOffsets: roundOffsets
            })));
          }
          if (state.modifiersData.arrow != null) {
            state.styles.arrow = Object.assign({}, state.styles.arrow, mapToStyles(Object.assign({}, commonStyles, {
              offsets: state.modifiersData.arrow,
              position: 'absolute',
              adaptive: false,
              roundOffsets: roundOffsets
            })));
          }
          state.attributes.popper = Object.assign({}, state.attributes.popper, {
            'data-popper-placement': state.placement
          });
        } // eslint-disable-next-line import/no-unused-modules

        const computeStyles$1 = {
          name: 'computeStyles',
          enabled: true,
          phase: 'beforeWrite',
          fn: computeStyles,
          data: {}
        };
        var passive = {
          passive: true
        };
        function effect(_ref) {
          var state = _ref.state,
            instance = _ref.instance,
            options = _ref.options;
          var _options$scroll = options.scroll,
            scroll = _options$scroll === void 0 ? true : _options$scroll,
            _options$resize = options.resize,
            resize = _options$resize === void 0 ? true : _options$resize;
          var window = getWindow(state.elements.popper);
          var scrollParents = [].concat(state.scrollParents.reference, state.scrollParents.popper);
          if (scroll) {
            scrollParents.forEach(function (scrollParent) {
              scrollParent.addEventListener('scroll', instance.update, passive);
            });
          }
          if (resize) {
            window.addEventListener('resize', instance.update, passive);
          }
          return function () {
            if (scroll) {
              scrollParents.forEach(function (scrollParent) {
                scrollParent.removeEventListener('scroll', instance.update, passive);
              });
            }
            if (resize) {
              window.removeEventListener('resize', instance.update, passive);
            }
          };
        } // eslint-disable-next-line import/no-unused-modules

        const eventListeners = {
          name: 'eventListeners',
          enabled: true,
          phase: 'write',
          fn: function fn() {},
          effect: effect,
          data: {}
        };
        var hash$1 = {
          left: 'right',
          right: 'left',
          bottom: 'top',
          top: 'bottom'
        };
        function getOppositePlacement(placement) {
          return placement.replace(/left|right|bottom|top/g, function (matched) {
            return hash$1[matched];
          });
        }
        var hash = {
          start: 'end',
          end: 'start'
        };
        function getOppositeVariationPlacement(placement) {
          return placement.replace(/start|end/g, function (matched) {
            return hash[matched];
          });
        }
        function getWindowScroll(node) {
          var win = getWindow(node);
          var scrollLeft = win.pageXOffset;
          var scrollTop = win.pageYOffset;
          return {
            scrollLeft: scrollLeft,
            scrollTop: scrollTop
          };
        }
        function getWindowScrollBarX(element) {
          // If <html> has a CSS width greater than the viewport, then this will be
          // incorrect for RTL.
          // Popper 1 is broken in this case and never had a bug report so let's assume
          // it's not an issue. I don't think anyone ever specifies width on <html>
          // anyway.
          // Browsers where the left scrollbar doesn't cause an issue report `0` for
          // this (e.g. Edge 2019, IE11, Safari)
          return getBoundingClientRect(getDocumentElement(element)).left + getWindowScroll(element).scrollLeft;
        }
        function getViewportRect(element, strategy) {
          var win = getWindow(element);
          var html = getDocumentElement(element);
          var visualViewport = win.visualViewport;
          var width = html.clientWidth;
          var height = html.clientHeight;
          var x = 0;
          var y = 0;
          if (visualViewport) {
            width = visualViewport.width;
            height = visualViewport.height;
            var layoutViewport = isLayoutViewport();
            if (layoutViewport || !layoutViewport && strategy === 'fixed') {
              x = visualViewport.offsetLeft;
              y = visualViewport.offsetTop;
            }
          }
          return {
            width: width,
            height: height,
            x: x + getWindowScrollBarX(element),
            y: y
          };
        }

        // of the `<html>` and `<body>` rect bounds if horizontally scrollable

        function getDocumentRect(element) {
          var _element$ownerDocumen;
          var html = getDocumentElement(element);
          var winScroll = getWindowScroll(element);
          var body = (_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body;
          var width = max(html.scrollWidth, html.clientWidth, body ? body.scrollWidth : 0, body ? body.clientWidth : 0);
          var height = max(html.scrollHeight, html.clientHeight, body ? body.scrollHeight : 0, body ? body.clientHeight : 0);
          var x = -winScroll.scrollLeft + getWindowScrollBarX(element);
          var y = -winScroll.scrollTop;
          if (getComputedStyle(body || html).direction === 'rtl') {
            x += max(html.clientWidth, body ? body.clientWidth : 0) - width;
          }
          return {
            width: width,
            height: height,
            x: x,
            y: y
          };
        }
        function isScrollParent(element) {
          // Firefox wants us to check `-x` and `-y` variations as well
          var _getComputedStyle = getComputedStyle(element),
            overflow = _getComputedStyle.overflow,
            overflowX = _getComputedStyle.overflowX,
            overflowY = _getComputedStyle.overflowY;
          return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX);
        }
        function getScrollParent(node) {
          if (['html', 'body', '#document'].indexOf(getNodeName(node)) >= 0) {
            // $FlowFixMe[incompatible-return]: assume body is always available
            return node.ownerDocument.body;
          }
          if (isHTMLElement$1(node) && isScrollParent(node)) {
            return node;
          }
          return getScrollParent(getParentNode(node));
        }

        /*
        given a DOM element, return the list of all scroll parents, up the list of ancesors
        until we get to the top window object. This list is what we attach scroll listeners
        to, because if any of these parent elements scroll, we'll need to re-calculate the
        reference element's position.
        */

        function listScrollParents(element, list) {
          var _element$ownerDocumen;
          if (list === void 0) {
            list = [];
          }
          var scrollParent = getScrollParent(element);
          var isBody = scrollParent === ((_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body);
          var win = getWindow(scrollParent);
          var target = isBody ? [win].concat(win.visualViewport || [], isScrollParent(scrollParent) ? scrollParent : []) : scrollParent;
          var updatedList = list.concat(target);
          return isBody ? updatedList :
          // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
          updatedList.concat(listScrollParents(getParentNode(target)));
        }
        function rectToClientRect(rect) {
          return Object.assign({}, rect, {
            left: rect.x,
            top: rect.y,
            right: rect.x + rect.width,
            bottom: rect.y + rect.height
          });
        }
        function getInnerBoundingClientRect(element, strategy) {
          var rect = getBoundingClientRect(element, false, strategy === 'fixed');
          rect.top = rect.top + element.clientTop;
          rect.left = rect.left + element.clientLeft;
          rect.bottom = rect.top + element.clientHeight;
          rect.right = rect.left + element.clientWidth;
          rect.width = element.clientWidth;
          rect.height = element.clientHeight;
          rect.x = rect.left;
          rect.y = rect.top;
          return rect;
        }
        function getClientRectFromMixedType(element, clippingParent, strategy) {
          return clippingParent === viewport ? rectToClientRect(getViewportRect(element, strategy)) : isElement(clippingParent) ? getInnerBoundingClientRect(clippingParent, strategy) : rectToClientRect(getDocumentRect(getDocumentElement(element)));
        } // A "clipping parent" is an overflowable container with the characteristic of
        // clipping (or hiding) overflowing elements with a position different from
        // `initial`

        function getClippingParents(element) {
          var clippingParents = listScrollParents(getParentNode(element));
          var canEscapeClipping = ['absolute', 'fixed'].indexOf(getComputedStyle(element).position) >= 0;
          var clipperElement = canEscapeClipping && isHTMLElement$1(element) ? getOffsetParent(element) : element;
          if (!isElement(clipperElement)) {
            return [];
          } // $FlowFixMe[incompatible-return]: https://github.com/facebook/flow/issues/1414

          return clippingParents.filter(function (clippingParent) {
            return isElement(clippingParent) && contains(clippingParent, clipperElement) && getNodeName(clippingParent) !== 'body';
          });
        } // Gets the maximum area that the element is visible in due to any number of
        // clipping parents

        function getClippingRect(element, boundary, rootBoundary, strategy) {
          var mainClippingParents = boundary === 'clippingParents' ? getClippingParents(element) : [].concat(boundary);
          var clippingParents = [].concat(mainClippingParents, [rootBoundary]);
          var firstClippingParent = clippingParents[0];
          var clippingRect = clippingParents.reduce(function (accRect, clippingParent) {
            var rect = getClientRectFromMixedType(element, clippingParent, strategy);
            accRect.top = max(rect.top, accRect.top);
            accRect.right = min(rect.right, accRect.right);
            accRect.bottom = min(rect.bottom, accRect.bottom);
            accRect.left = max(rect.left, accRect.left);
            return accRect;
          }, getClientRectFromMixedType(element, firstClippingParent, strategy));
          clippingRect.width = clippingRect.right - clippingRect.left;
          clippingRect.height = clippingRect.bottom - clippingRect.top;
          clippingRect.x = clippingRect.left;
          clippingRect.y = clippingRect.top;
          return clippingRect;
        }
        function computeOffsets(_ref) {
          var reference = _ref.reference,
            element = _ref.element,
            placement = _ref.placement;
          var basePlacement = placement ? getBasePlacement(placement) : null;
          var variation = placement ? getVariation(placement) : null;
          var commonX = reference.x + reference.width / 2 - element.width / 2;
          var commonY = reference.y + reference.height / 2 - element.height / 2;
          var offsets;
          switch (basePlacement) {
            case top:
              offsets = {
                x: commonX,
                y: reference.y - element.height
              };
              break;
            case bottom:
              offsets = {
                x: commonX,
                y: reference.y + reference.height
              };
              break;
            case right:
              offsets = {
                x: reference.x + reference.width,
                y: commonY
              };
              break;
            case left:
              offsets = {
                x: reference.x - element.width,
                y: commonY
              };
              break;
            default:
              offsets = {
                x: reference.x,
                y: reference.y
              };
          }
          var mainAxis = basePlacement ? getMainAxisFromPlacement(basePlacement) : null;
          if (mainAxis != null) {
            var len = mainAxis === 'y' ? 'height' : 'width';
            switch (variation) {
              case start:
                offsets[mainAxis] = offsets[mainAxis] - (reference[len] / 2 - element[len] / 2);
                break;
              case end:
                offsets[mainAxis] = offsets[mainAxis] + (reference[len] / 2 - element[len] / 2);
                break;
            }
          }
          return offsets;
        }
        function detectOverflow(state, options) {
          if (options === void 0) {
            options = {};
          }
          var _options = options,
            _options$placement = _options.placement,
            placement = _options$placement === void 0 ? state.placement : _options$placement,
            _options$strategy = _options.strategy,
            strategy = _options$strategy === void 0 ? state.strategy : _options$strategy,
            _options$boundary = _options.boundary,
            boundary = _options$boundary === void 0 ? clippingParents : _options$boundary,
            _options$rootBoundary = _options.rootBoundary,
            rootBoundary = _options$rootBoundary === void 0 ? viewport : _options$rootBoundary,
            _options$elementConte = _options.elementContext,
            elementContext = _options$elementConte === void 0 ? popper : _options$elementConte,
            _options$altBoundary = _options.altBoundary,
            altBoundary = _options$altBoundary === void 0 ? false : _options$altBoundary,
            _options$padding = _options.padding,
            padding = _options$padding === void 0 ? 0 : _options$padding;
          var paddingObject = mergePaddingObject(typeof padding !== 'number' ? padding : expandToHashMap(padding, basePlacements));
          var altContext = elementContext === popper ? reference : popper;
          var popperRect = state.rects.popper;
          var element = state.elements[altBoundary ? altContext : elementContext];
          var clippingClientRect = getClippingRect(isElement(element) ? element : element.contextElement || getDocumentElement(state.elements.popper), boundary, rootBoundary, strategy);
          var referenceClientRect = getBoundingClientRect(state.elements.reference);
          var popperOffsets = computeOffsets({
            reference: referenceClientRect,
            element: popperRect,
            strategy: 'absolute',
            placement: placement
          });
          var popperClientRect = rectToClientRect(Object.assign({}, popperRect, popperOffsets));
          var elementClientRect = elementContext === popper ? popperClientRect : referenceClientRect; // positive = overflowing the clipping rect
          // 0 or negative = within the clipping rect

          var overflowOffsets = {
            top: clippingClientRect.top - elementClientRect.top + paddingObject.top,
            bottom: elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom,
            left: clippingClientRect.left - elementClientRect.left + paddingObject.left,
            right: elementClientRect.right - clippingClientRect.right + paddingObject.right
          };
          var offsetData = state.modifiersData.offset; // Offsets can be applied only to the popper element

          if (elementContext === popper && offsetData) {
            var offset = offsetData[placement];
            Object.keys(overflowOffsets).forEach(function (key) {
              var multiply = [right, bottom].indexOf(key) >= 0 ? 1 : -1;
              var axis = [top, bottom].indexOf(key) >= 0 ? 'y' : 'x';
              overflowOffsets[key] += offset[axis] * multiply;
            });
          }
          return overflowOffsets;
        }
        function computeAutoPlacement(state, options) {
          if (options === void 0) {
            options = {};
          }
          var _options = options,
            placement = _options.placement,
            boundary = _options.boundary,
            rootBoundary = _options.rootBoundary,
            padding = _options.padding,
            flipVariations = _options.flipVariations,
            _options$allowedAutoP = _options.allowedAutoPlacements,
            allowedAutoPlacements = _options$allowedAutoP === void 0 ? placements : _options$allowedAutoP;
          var variation = getVariation(placement);
          var placements$1 = variation ? flipVariations ? variationPlacements : variationPlacements.filter(function (placement) {
            return getVariation(placement) === variation;
          }) : basePlacements;
          var allowedPlacements = placements$1.filter(function (placement) {
            return allowedAutoPlacements.indexOf(placement) >= 0;
          });
          if (allowedPlacements.length === 0) {
            allowedPlacements = placements$1;
          } // $FlowFixMe[incompatible-type]: Flow seems to have problems with two array unions...

          var overflows = allowedPlacements.reduce(function (acc, placement) {
            acc[placement] = detectOverflow(state, {
              placement: placement,
              boundary: boundary,
              rootBoundary: rootBoundary,
              padding: padding
            })[getBasePlacement(placement)];
            return acc;
          }, {});
          return Object.keys(overflows).sort(function (a, b) {
            return overflows[a] - overflows[b];
          });
        }
        function getExpandedFallbackPlacements(placement) {
          if (getBasePlacement(placement) === auto) {
            return [];
          }
          var oppositePlacement = getOppositePlacement(placement);
          return [getOppositeVariationPlacement(placement), oppositePlacement, getOppositeVariationPlacement(oppositePlacement)];
        }
        function flip(_ref) {
          var state = _ref.state,
            options = _ref.options,
            name = _ref.name;
          if (state.modifiersData[name]._skip) {
            return;
          }
          var _options$mainAxis = options.mainAxis,
            checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis,
            _options$altAxis = options.altAxis,
            checkAltAxis = _options$altAxis === void 0 ? true : _options$altAxis,
            specifiedFallbackPlacements = options.fallbackPlacements,
            padding = options.padding,
            boundary = options.boundary,
            rootBoundary = options.rootBoundary,
            altBoundary = options.altBoundary,
            _options$flipVariatio = options.flipVariations,
            flipVariations = _options$flipVariatio === void 0 ? true : _options$flipVariatio,
            allowedAutoPlacements = options.allowedAutoPlacements;
          var preferredPlacement = state.options.placement;
          var basePlacement = getBasePlacement(preferredPlacement);
          var isBasePlacement = basePlacement === preferredPlacement;
          var fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipVariations ? [getOppositePlacement(preferredPlacement)] : getExpandedFallbackPlacements(preferredPlacement));
          var placements = [preferredPlacement].concat(fallbackPlacements).reduce(function (acc, placement) {
            return acc.concat(getBasePlacement(placement) === auto ? computeAutoPlacement(state, {
              placement: placement,
              boundary: boundary,
              rootBoundary: rootBoundary,
              padding: padding,
              flipVariations: flipVariations,
              allowedAutoPlacements: allowedAutoPlacements
            }) : placement);
          }, []);
          var referenceRect = state.rects.reference;
          var popperRect = state.rects.popper;
          var checksMap = new Map();
          var makeFallbackChecks = true;
          var firstFittingPlacement = placements[0];
          for (var i = 0; i < placements.length; i++) {
            var placement = placements[i];
            var _basePlacement = getBasePlacement(placement);
            var isStartVariation = getVariation(placement) === start;
            var isVertical = [top, bottom].indexOf(_basePlacement) >= 0;
            var len = isVertical ? 'width' : 'height';
            var overflow = detectOverflow(state, {
              placement: placement,
              boundary: boundary,
              rootBoundary: rootBoundary,
              altBoundary: altBoundary,
              padding: padding
            });
            var mainVariationSide = isVertical ? isStartVariation ? right : left : isStartVariation ? bottom : top;
            if (referenceRect[len] > popperRect[len]) {
              mainVariationSide = getOppositePlacement(mainVariationSide);
            }
            var altVariationSide = getOppositePlacement(mainVariationSide);
            var checks = [];
            if (checkMainAxis) {
              checks.push(overflow[_basePlacement] <= 0);
            }
            if (checkAltAxis) {
              checks.push(overflow[mainVariationSide] <= 0, overflow[altVariationSide] <= 0);
            }
            if (checks.every(function (check) {
              return check;
            })) {
              firstFittingPlacement = placement;
              makeFallbackChecks = false;
              break;
            }
            checksMap.set(placement, checks);
          }
          if (makeFallbackChecks) {
            // `2` may be desired in some cases – research later
            var numberOfChecks = flipVariations ? 3 : 1;
            var _loop = function _loop(_i) {
              var fittingPlacement = placements.find(function (placement) {
                var checks = checksMap.get(placement);
                if (checks) {
                  return checks.slice(0, _i).every(function (check) {
                    return check;
                  });
                }
              });
              if (fittingPlacement) {
                firstFittingPlacement = fittingPlacement;
                return "break";
              }
            };
            for (var _i = numberOfChecks; _i > 0; _i--) {
              var _ret = _loop(_i);
              if (_ret === "break") break;
            }
          }
          if (state.placement !== firstFittingPlacement) {
            state.modifiersData[name]._skip = true;
            state.placement = firstFittingPlacement;
            state.reset = true;
          }
        } // eslint-disable-next-line import/no-unused-modules

        const flip$1 = {
          name: 'flip',
          enabled: true,
          phase: 'main',
          fn: flip,
          requiresIfExists: ['offset'],
          data: {
            _skip: false
          }
        };
        function getSideOffsets(overflow, rect, preventedOffsets) {
          if (preventedOffsets === void 0) {
            preventedOffsets = {
              x: 0,
              y: 0
            };
          }
          return {
            top: overflow.top - rect.height - preventedOffsets.y,
            right: overflow.right - rect.width + preventedOffsets.x,
            bottom: overflow.bottom - rect.height + preventedOffsets.y,
            left: overflow.left - rect.width - preventedOffsets.x
          };
        }
        function isAnySideFullyClipped(overflow) {
          return [top, right, bottom, left].some(function (side) {
            return overflow[side] >= 0;
          });
        }
        function hide(_ref) {
          var state = _ref.state,
            name = _ref.name;
          var referenceRect = state.rects.reference;
          var popperRect = state.rects.popper;
          var preventedOffsets = state.modifiersData.preventOverflow;
          var referenceOverflow = detectOverflow(state, {
            elementContext: 'reference'
          });
          var popperAltOverflow = detectOverflow(state, {
            altBoundary: true
          });
          var referenceClippingOffsets = getSideOffsets(referenceOverflow, referenceRect);
          var popperEscapeOffsets = getSideOffsets(popperAltOverflow, popperRect, preventedOffsets);
          var isReferenceHidden = isAnySideFullyClipped(referenceClippingOffsets);
          var hasPopperEscaped = isAnySideFullyClipped(popperEscapeOffsets);
          state.modifiersData[name] = {
            referenceClippingOffsets: referenceClippingOffsets,
            popperEscapeOffsets: popperEscapeOffsets,
            isReferenceHidden: isReferenceHidden,
            hasPopperEscaped: hasPopperEscaped
          };
          state.attributes.popper = Object.assign({}, state.attributes.popper, {
            'data-popper-reference-hidden': isReferenceHidden,
            'data-popper-escaped': hasPopperEscaped
          });
        } // eslint-disable-next-line import/no-unused-modules

        const hide$1 = {
          name: 'hide',
          enabled: true,
          phase: 'main',
          requiresIfExists: ['preventOverflow'],
          fn: hide
        };
        function distanceAndSkiddingToXY(placement, rects, offset) {
          var basePlacement = getBasePlacement(placement);
          var invertDistance = [left, top].indexOf(basePlacement) >= 0 ? -1 : 1;
          var _ref = typeof offset === 'function' ? offset(Object.assign({}, rects, {
              placement: placement
            })) : offset,
            skidding = _ref[0],
            distance = _ref[1];
          skidding = skidding || 0;
          distance = (distance || 0) * invertDistance;
          return [left, right].indexOf(basePlacement) >= 0 ? {
            x: distance,
            y: skidding
          } : {
            x: skidding,
            y: distance
          };
        }
        function offset(_ref2) {
          var state = _ref2.state,
            options = _ref2.options,
            name = _ref2.name;
          var _options$offset = options.offset,
            offset = _options$offset === void 0 ? [0, 0] : _options$offset;
          var data = placements.reduce(function (acc, placement) {
            acc[placement] = distanceAndSkiddingToXY(placement, state.rects, offset);
            return acc;
          }, {});
          var _data$state$placement = data[state.placement],
            x = _data$state$placement.x,
            y = _data$state$placement.y;
          if (state.modifiersData.popperOffsets != null) {
            state.modifiersData.popperOffsets.x += x;
            state.modifiersData.popperOffsets.y += y;
          }
          state.modifiersData[name] = data;
        } // eslint-disable-next-line import/no-unused-modules

        const offset$1 = {
          name: 'offset',
          enabled: true,
          phase: 'main',
          requires: ['popperOffsets'],
          fn: offset
        };
        function popperOffsets(_ref) {
          var state = _ref.state,
            name = _ref.name;
          // Offsets are the actual position the popper needs to have to be
          // properly positioned near its reference element
          // This is the most basic placement, and will be adjusted by
          // the modifiers in the next step
          state.modifiersData[name] = computeOffsets({
            reference: state.rects.reference,
            element: state.rects.popper,
            strategy: 'absolute',
            placement: state.placement
          });
        } // eslint-disable-next-line import/no-unused-modules

        const popperOffsets$1 = {
          name: 'popperOffsets',
          enabled: true,
          phase: 'read',
          fn: popperOffsets,
          data: {}
        };
        function getAltAxis(axis) {
          return axis === 'x' ? 'y' : 'x';
        }
        function preventOverflow(_ref) {
          var state = _ref.state,
            options = _ref.options,
            name = _ref.name;
          var _options$mainAxis = options.mainAxis,
            checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis,
            _options$altAxis = options.altAxis,
            checkAltAxis = _options$altAxis === void 0 ? false : _options$altAxis,
            boundary = options.boundary,
            rootBoundary = options.rootBoundary,
            altBoundary = options.altBoundary,
            padding = options.padding,
            _options$tether = options.tether,
            tether = _options$tether === void 0 ? true : _options$tether,
            _options$tetherOffset = options.tetherOffset,
            tetherOffset = _options$tetherOffset === void 0 ? 0 : _options$tetherOffset;
          var overflow = detectOverflow(state, {
            boundary: boundary,
            rootBoundary: rootBoundary,
            padding: padding,
            altBoundary: altBoundary
          });
          var basePlacement = getBasePlacement(state.placement);
          var variation = getVariation(state.placement);
          var isBasePlacement = !variation;
          var mainAxis = getMainAxisFromPlacement(basePlacement);
          var altAxis = getAltAxis(mainAxis);
          var popperOffsets = state.modifiersData.popperOffsets;
          var referenceRect = state.rects.reference;
          var popperRect = state.rects.popper;
          var tetherOffsetValue = typeof tetherOffset === 'function' ? tetherOffset(Object.assign({}, state.rects, {
            placement: state.placement
          })) : tetherOffset;
          var normalizedTetherOffsetValue = typeof tetherOffsetValue === 'number' ? {
            mainAxis: tetherOffsetValue,
            altAxis: tetherOffsetValue
          } : Object.assign({
            mainAxis: 0,
            altAxis: 0
          }, tetherOffsetValue);
          var offsetModifierState = state.modifiersData.offset ? state.modifiersData.offset[state.placement] : null;
          var data = {
            x: 0,
            y: 0
          };
          if (!popperOffsets) {
            return;
          }
          if (checkMainAxis) {
            var _offsetModifierState$;
            var mainSide = mainAxis === 'y' ? top : left;
            var altSide = mainAxis === 'y' ? bottom : right;
            var len = mainAxis === 'y' ? 'height' : 'width';
            var offset = popperOffsets[mainAxis];
            var min$1 = offset + overflow[mainSide];
            var max$1 = offset - overflow[altSide];
            var additive = tether ? -popperRect[len] / 2 : 0;
            var minLen = variation === start ? referenceRect[len] : popperRect[len];
            var maxLen = variation === start ? -popperRect[len] : -referenceRect[len]; // We need to include the arrow in the calculation so the arrow doesn't go
            // outside the reference bounds

            var arrowElement = state.elements.arrow;
            var arrowRect = tether && arrowElement ? getLayoutRect(arrowElement) : {
              width: 0,
              height: 0
            };
            var arrowPaddingObject = state.modifiersData['arrow#persistent'] ? state.modifiersData['arrow#persistent'].padding : getFreshSideObject();
            var arrowPaddingMin = arrowPaddingObject[mainSide];
            var arrowPaddingMax = arrowPaddingObject[altSide]; // If the reference length is smaller than the arrow length, we don't want
            // to include its full size in the calculation. If the reference is small
            // and near the edge of a boundary, the popper can overflow even if the
            // reference is not overflowing as well (e.g. virtual elements with no
            // width or height)

            var arrowLen = within(0, referenceRect[len], arrowRect[len]);
            var minOffset = isBasePlacement ? referenceRect[len] / 2 - additive - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis : minLen - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis;
            var maxOffset = isBasePlacement ? -referenceRect[len] / 2 + additive + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis : maxLen + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis;
            var arrowOffsetParent = state.elements.arrow && getOffsetParent(state.elements.arrow);
            var clientOffset = arrowOffsetParent ? mainAxis === 'y' ? arrowOffsetParent.clientTop || 0 : arrowOffsetParent.clientLeft || 0 : 0;
            var offsetModifierValue = (_offsetModifierState$ = offsetModifierState == null ? void 0 : offsetModifierState[mainAxis]) != null ? _offsetModifierState$ : 0;
            var tetherMin = offset + minOffset - offsetModifierValue - clientOffset;
            var tetherMax = offset + maxOffset - offsetModifierValue;
            var preventedOffset = within(tether ? min(min$1, tetherMin) : min$1, offset, tether ? max(max$1, tetherMax) : max$1);
            popperOffsets[mainAxis] = preventedOffset;
            data[mainAxis] = preventedOffset - offset;
          }
          if (checkAltAxis) {
            var _offsetModifierState$2;
            var _mainSide = mainAxis === 'x' ? top : left;
            var _altSide = mainAxis === 'x' ? bottom : right;
            var _offset = popperOffsets[altAxis];
            var _len = altAxis === 'y' ? 'height' : 'width';
            var _min = _offset + overflow[_mainSide];
            var _max = _offset - overflow[_altSide];
            var isOriginSide = [top, left].indexOf(basePlacement) !== -1;
            var _offsetModifierValue = (_offsetModifierState$2 = offsetModifierState == null ? void 0 : offsetModifierState[altAxis]) != null ? _offsetModifierState$2 : 0;
            var _tetherMin = isOriginSide ? _min : _offset - referenceRect[_len] - popperRect[_len] - _offsetModifierValue + normalizedTetherOffsetValue.altAxis;
            var _tetherMax = isOriginSide ? _offset + referenceRect[_len] + popperRect[_len] - _offsetModifierValue - normalizedTetherOffsetValue.altAxis : _max;
            var _preventedOffset = tether && isOriginSide ? withinMaxClamp(_tetherMin, _offset, _tetherMax) : within(tether ? _tetherMin : _min, _offset, tether ? _tetherMax : _max);
            popperOffsets[altAxis] = _preventedOffset;
            data[altAxis] = _preventedOffset - _offset;
          }
          state.modifiersData[name] = data;
        } // eslint-disable-next-line import/no-unused-modules

        const preventOverflow$1 = {
          name: 'preventOverflow',
          enabled: true,
          phase: 'main',
          fn: preventOverflow,
          requiresIfExists: ['offset']
        };
        function getHTMLElementScroll(element) {
          return {
            scrollLeft: element.scrollLeft,
            scrollTop: element.scrollTop
          };
        }
        function getNodeScroll(node) {
          if (node === getWindow(node) || !isHTMLElement$1(node)) {
            return getWindowScroll(node);
          } else {
            return getHTMLElementScroll(node);
          }
        }
        function isElementScaled(element) {
          var rect = element.getBoundingClientRect();
          var scaleX = round(rect.width) / element.offsetWidth || 1;
          var scaleY = round(rect.height) / element.offsetHeight || 1;
          return scaleX !== 1 || scaleY !== 1;
        } // Returns the composite rect of an element relative to its offsetParent.
        // Composite means it takes into account transforms as well as layout.

        function getCompositeRect(elementOrVirtualElement, offsetParent, isFixed) {
          if (isFixed === void 0) {
            isFixed = false;
          }
          var isOffsetParentAnElement = isHTMLElement$1(offsetParent);
          var offsetParentIsScaled = isHTMLElement$1(offsetParent) && isElementScaled(offsetParent);
          var documentElement = getDocumentElement(offsetParent);
          var rect = getBoundingClientRect(elementOrVirtualElement, offsetParentIsScaled, isFixed);
          var scroll = {
            scrollLeft: 0,
            scrollTop: 0
          };
          var offsets = {
            x: 0,
            y: 0
          };
          if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
            if (getNodeName(offsetParent) !== 'body' ||
            // https://github.com/popperjs/popper-core/issues/1078
            isScrollParent(documentElement)) {
              scroll = getNodeScroll(offsetParent);
            }
            if (isHTMLElement$1(offsetParent)) {
              offsets = getBoundingClientRect(offsetParent, true);
              offsets.x += offsetParent.clientLeft;
              offsets.y += offsetParent.clientTop;
            } else if (documentElement) {
              offsets.x = getWindowScrollBarX(documentElement);
            }
          }
          return {
            x: rect.left + scroll.scrollLeft - offsets.x,
            y: rect.top + scroll.scrollTop - offsets.y,
            width: rect.width,
            height: rect.height
          };
        }
        function order(modifiers) {
          var map = new Map();
          var visited = new Set();
          var result = [];
          modifiers.forEach(function (modifier) {
            map.set(modifier.name, modifier);
          }); // On visiting object, check for its dependencies and visit them recursively

          function sort(modifier) {
            visited.add(modifier.name);
            var requires = [].concat(modifier.requires || [], modifier.requiresIfExists || []);
            requires.forEach(function (dep) {
              if (!visited.has(dep)) {
                var depModifier = map.get(dep);
                if (depModifier) {
                  sort(depModifier);
                }
              }
            });
            result.push(modifier);
          }
          modifiers.forEach(function (modifier) {
            if (!visited.has(modifier.name)) {
              // check for visited object
              sort(modifier);
            }
          });
          return result;
        }
        function orderModifiers(modifiers) {
          // order based on dependencies
          var orderedModifiers = order(modifiers); // order based on phase

          return modifierPhases.reduce(function (acc, phase) {
            return acc.concat(orderedModifiers.filter(function (modifier) {
              return modifier.phase === phase;
            }));
          }, []);
        }
        function debounce(fn) {
          var pending;
          return function () {
            if (!pending) {
              pending = new Promise(function (resolve) {
                Promise.resolve().then(function () {
                  pending = undefined;
                  resolve(fn());
                });
              });
            }
            return pending;
          };
        }
        function mergeByName(modifiers) {
          var merged = modifiers.reduce(function (merged, current) {
            var existing = merged[current.name];
            merged[current.name] = existing ? Object.assign({}, existing, current, {
              options: Object.assign({}, existing.options, current.options),
              data: Object.assign({}, existing.data, current.data)
            }) : current;
            return merged;
          }, {}); // IE11 does not support Object.values

          return Object.keys(merged).map(function (key) {
            return merged[key];
          });
        }
        var DEFAULT_OPTIONS = {
          placement: 'bottom',
          modifiers: [],
          strategy: 'absolute'
        };
        function areValidElements() {
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          return !args.some(function (element) {
            return !(element && typeof element.getBoundingClientRect === 'function');
          });
        }
        function popperGenerator(generatorOptions) {
          if (generatorOptions === void 0) {
            generatorOptions = {};
          }
          var _generatorOptions = generatorOptions,
            _generatorOptions$def = _generatorOptions.defaultModifiers,
            defaultModifiers = _generatorOptions$def === void 0 ? [] : _generatorOptions$def,
            _generatorOptions$def2 = _generatorOptions.defaultOptions,
            defaultOptions = _generatorOptions$def2 === void 0 ? DEFAULT_OPTIONS : _generatorOptions$def2;
          return function createPopper(reference, popper, options) {
            if (options === void 0) {
              options = defaultOptions;
            }
            var state = {
              placement: 'bottom',
              orderedModifiers: [],
              options: Object.assign({}, DEFAULT_OPTIONS, defaultOptions),
              modifiersData: {},
              elements: {
                reference: reference,
                popper: popper
              },
              attributes: {},
              styles: {}
            };
            var effectCleanupFns = [];
            var isDestroyed = false;
            var instance = {
              state: state,
              setOptions: function setOptions(setOptionsAction) {
                var options = typeof setOptionsAction === 'function' ? setOptionsAction(state.options) : setOptionsAction;
                cleanupModifierEffects();
                state.options = Object.assign({}, defaultOptions, state.options, options);
                state.scrollParents = {
                  reference: isElement(reference) ? listScrollParents(reference) : reference.contextElement ? listScrollParents(reference.contextElement) : [],
                  popper: listScrollParents(popper)
                }; // Orders the modifiers based on their dependencies and `phase`
                // properties

                var orderedModifiers = orderModifiers(mergeByName([].concat(defaultModifiers, state.options.modifiers))); // Strip out disabled modifiers

                state.orderedModifiers = orderedModifiers.filter(function (m) {
                  return m.enabled;
                }); // Validate the provided modifiers so that the consumer will get warned

                runModifierEffects();
                return instance.update();
              },
              // Sync update – it will always be executed, even if not necessary. This
              // is useful for low frequency updates where sync behavior simplifies the
              // logic.
              // For high frequency updates (e.g. `resize` and `scroll` events), always
              // prefer the async Popper#update method
              forceUpdate: function forceUpdate() {
                if (isDestroyed) {
                  return;
                }
                var _state$elements = state.elements,
                  reference = _state$elements.reference,
                  popper = _state$elements.popper; // Don't proceed if `reference` or `popper` are not valid elements
                // anymore

                if (!areValidElements(reference, popper)) {
                  return;
                } // Store the reference and popper rects to be read by modifiers

                state.rects = {
                  reference: getCompositeRect(reference, getOffsetParent(popper), state.options.strategy === 'fixed'),
                  popper: getLayoutRect(popper)
                }; // Modifiers have the ability to reset the current update cycle. The
                // most common use case for this is the `flip` modifier changing the
                // placement, which then needs to re-run all the modifiers, because the
                // logic was previously ran for the previous placement and is therefore
                // stale/incorrect

                state.reset = false;
                state.placement = state.options.placement; // On each update cycle, the `modifiersData` property for each modifier
                // is filled with the initial data specified by the modifier. This means
                // it doesn't persist and is fresh on each update.
                // To ensure persistent data, use `${name}#persistent`

                state.orderedModifiers.forEach(function (modifier) {
                  return state.modifiersData[modifier.name] = Object.assign({}, modifier.data);
                });
                for (var index = 0; index < state.orderedModifiers.length; index++) {
                  if (state.reset === true) {
                    state.reset = false;
                    index = -1;
                    continue;
                  }
                  var _state$orderedModifie = state.orderedModifiers[index],
                    fn = _state$orderedModifie.fn,
                    _state$orderedModifie2 = _state$orderedModifie.options,
                    _options = _state$orderedModifie2 === void 0 ? {} : _state$orderedModifie2,
                    name = _state$orderedModifie.name;
                  if (typeof fn === 'function') {
                    state = fn({
                      state: state,
                      options: _options,
                      name: name,
                      instance: instance
                    }) || state;
                  }
                }
              },
              // Async and optimistically optimized update – it will not be executed if
              // not necessary (debounced to run at most once-per-tick)
              update: debounce(function () {
                return new Promise(function (resolve) {
                  instance.forceUpdate();
                  resolve(state);
                });
              }),
              destroy: function destroy() {
                cleanupModifierEffects();
                isDestroyed = true;
              }
            };
            if (!areValidElements(reference, popper)) {
              return instance;
            }
            instance.setOptions(options).then(function (state) {
              if (!isDestroyed && options.onFirstUpdate) {
                options.onFirstUpdate(state);
              }
            }); // Modifiers have the ability to execute arbitrary code before the first
            // update cycle runs. They will be executed in the same order as the update
            // cycle. This is useful when a modifier adds some persistent data that
            // other modifiers need to use, but the modifier is run after the dependent
            // one.

            function runModifierEffects() {
              state.orderedModifiers.forEach(function (_ref3) {
                var name = _ref3.name,
                  _ref3$options = _ref3.options,
                  options = _ref3$options === void 0 ? {} : _ref3$options,
                  effect = _ref3.effect;
                if (typeof effect === 'function') {
                  var cleanupFn = effect({
                    state: state,
                    name: name,
                    instance: instance,
                    options: options
                  });
                  var noopFn = function noopFn() {};
                  effectCleanupFns.push(cleanupFn || noopFn);
                }
              });
            }
            function cleanupModifierEffects() {
              effectCleanupFns.forEach(function (fn) {
                return fn();
              });
              effectCleanupFns = [];
            }
            return instance;
          };
        }
        var defaultModifiers = [eventListeners, popperOffsets$1, computeStyles$1, applyStyles$1, offset$1, flip$1, preventOverflow$1, arrow$1, hide$1];
        var createPopper = /*#__PURE__*/popperGenerator({
          defaultModifiers: defaultModifiers
        }); // eslint-disable-next-line import/no-unused-modules

        function getPopperUtilityClass(slot) {
          return generateUtilityClass('MuiPopper', slot);
        }
        generateUtilityClasses('MuiPopper', ['root']);
        const _excluded$k = ["anchorEl", "children", "component", "direction", "disablePortal", "modifiers", "open", "placement", "popperOptions", "popperRef", "slotProps", "slots", "TransitionProps", "ownerState"],
          _excluded2 = ["anchorEl", "children", "container", "direction", "disablePortal", "keepMounted", "modifiers", "open", "placement", "popperOptions", "popperRef", "style", "transition", "slotProps", "slots"];
        function flipPlacement(placement, direction) {
          if (direction === 'ltr') {
            return placement;
          }
          switch (placement) {
            case 'bottom-end':
              return 'bottom-start';
            case 'bottom-start':
              return 'bottom-end';
            case 'top-end':
              return 'top-start';
            case 'top-start':
              return 'top-end';
            default:
              return placement;
          }
        }
        function resolveAnchorEl(anchorEl) {
          return typeof anchorEl === 'function' ? anchorEl() : anchorEl;
        }
        function isHTMLElement(element) {
          return element.nodeType !== undefined;
        }
        const useUtilityClasses$k = () => {
          const slots = {
            root: ['root']
          };
          return composeClasses(slots, useClassNamesOverride(getPopperUtilityClass));
        };
        const defaultPopperOptions = {};
        const PopperTooltip = /*#__PURE__*/reactExports.forwardRef(function PopperTooltip(props, ref) {
          var _ref;
          const {
              anchorEl,
              children,
              component,
              direction,
              disablePortal,
              modifiers,
              open,
              placement: initialPlacement,
              popperOptions,
              popperRef: popperRefProp,
              slotProps = {},
              slots = {},
              TransitionProps
            } = props,
            other = _objectWithoutPropertiesLoose(props, _excluded$k);
          const tooltipRef = reactExports.useRef(null);
          const ownRef = useForkRef(tooltipRef, ref);
          const popperRef = reactExports.useRef(null);
          const handlePopperRef = useForkRef(popperRef, popperRefProp);
          const handlePopperRefRef = reactExports.useRef(handlePopperRef);
          useEnhancedEffect(() => {
            handlePopperRefRef.current = handlePopperRef;
          }, [handlePopperRef]);
          reactExports.useImperativeHandle(popperRefProp, () => popperRef.current, []);
          const rtlPlacement = flipPlacement(initialPlacement, direction);
          /**
           * placement initialized from prop but can change during lifetime if modifiers.flip.
           * modifiers.flip is essentially a flip for controlled/uncontrolled behavior
           */
          const [placement, setPlacement] = reactExports.useState(rtlPlacement);
          const [resolvedAnchorElement, setResolvedAnchorElement] = reactExports.useState(resolveAnchorEl(anchorEl));
          reactExports.useEffect(() => {
            if (popperRef.current) {
              popperRef.current.forceUpdate();
            }
          });
          reactExports.useEffect(() => {
            if (anchorEl) {
              setResolvedAnchorElement(resolveAnchorEl(anchorEl));
            }
          }, [anchorEl]);
          useEnhancedEffect(() => {
            if (!resolvedAnchorElement || !open) {
              return undefined;
            }
            const handlePopperUpdate = data => {
              setPlacement(data.placement);
            };
            let popperModifiers = [{
              name: 'preventOverflow',
              options: {
                altBoundary: disablePortal
              }
            }, {
              name: 'flip',
              options: {
                altBoundary: disablePortal
              }
            }, {
              name: 'onUpdate',
              enabled: true,
              phase: 'afterWrite',
              fn: ({
                state
              }) => {
                handlePopperUpdate(state);
              }
            }];
            if (modifiers != null) {
              popperModifiers = popperModifiers.concat(modifiers);
            }
            if (popperOptions && popperOptions.modifiers != null) {
              popperModifiers = popperModifiers.concat(popperOptions.modifiers);
            }
            const popper = createPopper(resolvedAnchorElement, tooltipRef.current, _extends({
              placement: rtlPlacement
            }, popperOptions, {
              modifiers: popperModifiers
            }));
            handlePopperRefRef.current(popper);
            return () => {
              popper.destroy();
              handlePopperRefRef.current(null);
            };
          }, [resolvedAnchorElement, disablePortal, modifiers, open, popperOptions, rtlPlacement]);
          const childProps = {
            placement: placement
          };
          if (TransitionProps !== null) {
            childProps.TransitionProps = TransitionProps;
          }
          const classes = useUtilityClasses$k();
          const Root = (_ref = component != null ? component : slots.root) != null ? _ref : 'div';
          const rootProps = useSlotProps({
            elementType: Root,
            externalSlotProps: slotProps.root,
            externalForwardedProps: other,
            additionalProps: {
              role: 'tooltip',
              ref: ownRef
            },
            ownerState: props,
            className: classes.root
          });
          return /*#__PURE__*/jsxRuntimeExports.jsx(Root, _extends({}, rootProps, {
            children: typeof children === 'function' ? children(childProps) : children
          }));
        });

        /**
         * Poppers rely on the 3rd party library [Popper.js](https://popper.js.org/docs/v2/) for positioning.
         *
         * Demos:
         *
         * - [Popper](https://mui.com/base/react-popper/)
         *
         * API:
         *
         * - [Popper API](https://mui.com/base/react-popper/components-api/#popper)
         */
        const Popper$2 = /*#__PURE__*/reactExports.forwardRef(function Popper(props, ref) {
          const {
              anchorEl,
              children,
              container: containerProp,
              direction = 'ltr',
              disablePortal = false,
              keepMounted = false,
              modifiers,
              open,
              placement = 'bottom',
              popperOptions = defaultPopperOptions,
              popperRef,
              style,
              transition = false,
              slotProps = {},
              slots = {}
            } = props,
            other = _objectWithoutPropertiesLoose(props, _excluded2);
          const [exited, setExited] = reactExports.useState(true);
          const handleEnter = () => {
            setExited(false);
          };
          const handleExited = () => {
            setExited(true);
          };
          if (!keepMounted && !open && (!transition || exited)) {
            return null;
          }

          // If the container prop is provided, use that
          // If the anchorEl prop is provided, use its parent body element as the container
          // If neither are provided let the Modal take care of choosing the container
          let container;
          if (containerProp) {
            container = containerProp;
          } else if (anchorEl) {
            const resolvedAnchorEl = resolveAnchorEl(anchorEl);
            container = resolvedAnchorEl && isHTMLElement(resolvedAnchorEl) ? ownerDocument(resolvedAnchorEl).body : ownerDocument(null).body;
          }
          const display = !open && keepMounted && (!transition || exited) ? 'none' : undefined;
          const transitionProps = transition ? {
            in: open,
            onEnter: handleEnter,
            onExited: handleExited
          } : undefined;
          return /*#__PURE__*/jsxRuntimeExports.jsx(Portal, {
            disablePortal: disablePortal,
            container: container,
            children: /*#__PURE__*/jsxRuntimeExports.jsx(PopperTooltip, _extends({
              anchorEl: anchorEl,
              direction: direction,
              disablePortal: disablePortal,
              modifiers: modifiers,
              ref: ref,
              open: transition ? !exited : open,
              placement: placement,
              popperOptions: popperOptions,
              popperRef: popperRef,
              slotProps: slotProps,
              slots: slots
            }, other, {
              style: _extends({
                // Prevents scroll issue, waiting for Popper.js to add this style once initiated.
                position: 'fixed',
                // Fix Popper.js display issue
                top: 0,
                left: 0,
                display
              }, style),
              TransitionProps: transitionProps,
              children: children
            }))
          });
        });
        const BasePopper = Popper$2;

        /**
         * Checks if a given element has a CSS class.
         * 
         * @param element the element
         * @param className the CSS class name
         */
        function hasClass(element, className) {
          if (element.classList) return !!className && element.classList.contains(className);
          return (" " + (element.className.baseVal || element.className) + " ").indexOf(" " + className + " ") !== -1;
        }

        /**
         * Adds a CSS class to a given element.
         * 
         * @param element the element
         * @param className the CSS class name
         */

        function addClass(element, className) {
          if (element.classList) element.classList.add(className);else if (!hasClass(element, className)) if (typeof element.className === 'string') element.className = element.className + " " + className;else element.setAttribute('class', (element.className && element.className.baseVal || '') + " " + className);
        }
        function replaceClassName(origClass, classToRemove) {
          return origClass.replace(new RegExp("(^|\\s)" + classToRemove + "(?:\\s|$)", 'g'), '$1').replace(/\s+/g, ' ').replace(/^\s*|\s*$/g, '');
        }
        /**
         * Removes a CSS class from a given element.
         * 
         * @param element the element
         * @param className the CSS class name
         */

        function removeClass$1(element, className) {
          if (element.classList) {
            element.classList.remove(className);
          } else if (typeof element.className === 'string') {
            element.className = replaceClassName(element.className, className);
          } else {
            element.setAttribute('class', replaceClassName(element.className && element.className.baseVal || '', className));
          }
        }
        var _addClass = function addClass$1(node, classes) {
          return node && classes && classes.split(' ').forEach(function (c) {
            return addClass(node, c);
          });
        };
        var removeClass = function removeClass(node, classes) {
          return node && classes && classes.split(' ').forEach(function (c) {
            return removeClass$1(node, c);
          });
        };
        /**
         * A transition component inspired by the excellent
         * [ng-animate](https://docs.angularjs.org/api/ngAnimate) library, you should
         * use it if you're using CSS transitions or animations. It's built upon the
         * [`Transition`](https://reactcommunity.org/react-transition-group/transition)
         * component, so it inherits all of its props.
         *
         * `CSSTransition` applies a pair of class names during the `appear`, `enter`,
         * and `exit` states of the transition. The first class is applied and then a
         * second `*-active` class in order to activate the CSS transition. After the
         * transition, matching `*-done` class names are applied to persist the
         * transition state.
         *
         * ```jsx
         * function App() {
         *   const [inProp, setInProp] = useState(false);
         *   return (
         *     <div>
         *       <CSSTransition in={inProp} timeout={200} classNames="my-node">
         *         <div>
         *           {"I'll receive my-node-* classes"}
         *         </div>
         *       </CSSTransition>
         *       <button type="button" onClick={() => setInProp(true)}>
         *         Click to Enter
         *       </button>
         *     </div>
         *   );
         * }
         * ```
         *
         * When the `in` prop is set to `true`, the child component will first receive
         * the class `example-enter`, then the `example-enter-active` will be added in
         * the next tick. `CSSTransition` [forces a
         * reflow](https://github.com/reactjs/react-transition-group/blob/5007303e729a74be66a21c3e2205e4916821524b/src/CSSTransition.js#L208-L215)
         * between before adding the `example-enter-active`. This is an important trick
         * because it allows us to transition between `example-enter` and
         * `example-enter-active` even though they were added immediately one after
         * another. Most notably, this is what makes it possible for us to animate
         * _appearance_.
         *
         * ```css
         * .my-node-enter {
         *   opacity: 0;
         * }
         * .my-node-enter-active {
         *   opacity: 1;
         *   transition: opacity 200ms;
         * }
         * .my-node-exit {
         *   opacity: 1;
         * }
         * .my-node-exit-active {
         *   opacity: 0;
         *   transition: opacity 200ms;
         * }
         * ```
         *
         * `*-active` classes represent which styles you want to animate **to**, so it's
         * important to add `transition` declaration only to them, otherwise transitions
         * might not behave as intended! This might not be obvious when the transitions
         * are symmetrical, i.e. when `*-enter-active` is the same as `*-exit`, like in
         * the example above (minus `transition`), but it becomes apparent in more
         * complex transitions.
         *
         * **Note**: If you're using the
         * [`appear`](http://reactcommunity.org/react-transition-group/transition#Transition-prop-appear)
         * prop, make sure to define styles for `.appear-*` classes as well.
         */

        var CSSTransition = /*#__PURE__*/function (_React$Component) {
          _inheritsLoose(CSSTransition, _React$Component);
          function CSSTransition() {
            var _this;
            for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
              args[_key] = arguments[_key];
            }
            _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
            _this.appliedClasses = {
              appear: {},
              enter: {},
              exit: {}
            };
            _this.onEnter = function (maybeNode, maybeAppearing) {
              var _this$resolveArgument = _this.resolveArguments(maybeNode, maybeAppearing),
                node = _this$resolveArgument[0],
                appearing = _this$resolveArgument[1];
              _this.removeClasses(node, 'exit');
              _this.addClass(node, appearing ? 'appear' : 'enter', 'base');
              if (_this.props.onEnter) {
                _this.props.onEnter(maybeNode, maybeAppearing);
              }
            };
            _this.onEntering = function (maybeNode, maybeAppearing) {
              var _this$resolveArgument2 = _this.resolveArguments(maybeNode, maybeAppearing),
                node = _this$resolveArgument2[0],
                appearing = _this$resolveArgument2[1];
              var type = appearing ? 'appear' : 'enter';
              _this.addClass(node, type, 'active');
              if (_this.props.onEntering) {
                _this.props.onEntering(maybeNode, maybeAppearing);
              }
            };
            _this.onEntered = function (maybeNode, maybeAppearing) {
              var _this$resolveArgument3 = _this.resolveArguments(maybeNode, maybeAppearing),
                node = _this$resolveArgument3[0],
                appearing = _this$resolveArgument3[1];
              var type = appearing ? 'appear' : 'enter';
              _this.removeClasses(node, type);
              _this.addClass(node, type, 'done');
              if (_this.props.onEntered) {
                _this.props.onEntered(maybeNode, maybeAppearing);
              }
            };
            _this.onExit = function (maybeNode) {
              var _this$resolveArgument4 = _this.resolveArguments(maybeNode),
                node = _this$resolveArgument4[0];
              _this.removeClasses(node, 'appear');
              _this.removeClasses(node, 'enter');
              _this.addClass(node, 'exit', 'base');
              if (_this.props.onExit) {
                _this.props.onExit(maybeNode);
              }
            };
            _this.onExiting = function (maybeNode) {
              var _this$resolveArgument5 = _this.resolveArguments(maybeNode),
                node = _this$resolveArgument5[0];
              _this.addClass(node, 'exit', 'active');
              if (_this.props.onExiting) {
                _this.props.onExiting(maybeNode);
              }
            };
            _this.onExited = function (maybeNode) {
              var _this$resolveArgument6 = _this.resolveArguments(maybeNode),
                node = _this$resolveArgument6[0];
              _this.removeClasses(node, 'exit');
              _this.addClass(node, 'exit', 'done');
              if (_this.props.onExited) {
                _this.props.onExited(maybeNode);
              }
            };
            _this.resolveArguments = function (maybeNode, maybeAppearing) {
              return _this.props.nodeRef ? [_this.props.nodeRef.current, maybeNode] // here `maybeNode` is actually `appearing`
              : [maybeNode, maybeAppearing];
            };
            _this.getClassNames = function (type) {
              var classNames = _this.props.classNames;
              var isStringClassNames = typeof classNames === 'string';
              var prefix = isStringClassNames && classNames ? classNames + "-" : '';
              var baseClassName = isStringClassNames ? "" + prefix + type : classNames[type];
              var activeClassName = isStringClassNames ? baseClassName + "-active" : classNames[type + "Active"];
              var doneClassName = isStringClassNames ? baseClassName + "-done" : classNames[type + "Done"];
              return {
                baseClassName: baseClassName,
                activeClassName: activeClassName,
                doneClassName: doneClassName
              };
            };
            return _this;
          }
          var _proto = CSSTransition.prototype;
          _proto.addClass = function addClass(node, type, phase) {
            var className = this.getClassNames(type)[phase + "ClassName"];
            var _this$getClassNames = this.getClassNames('enter'),
              doneClassName = _this$getClassNames.doneClassName;
            if (type === 'appear' && phase === 'done' && doneClassName) {
              className += " " + doneClassName;
            } // This is to force a repaint,
            // which is necessary in order to transition styles when adding a class name.

            if (phase === 'active') {
              if (node) forceReflow(node);
            }
            if (className) {
              this.appliedClasses[type][phase] = className;
              _addClass(node, className);
            }
          };
          _proto.removeClasses = function removeClasses(node, type) {
            var _this$appliedClasses$ = this.appliedClasses[type],
              baseClassName = _this$appliedClasses$.base,
              activeClassName = _this$appliedClasses$.active,
              doneClassName = _this$appliedClasses$.done;
            this.appliedClasses[type] = {};
            if (baseClassName) {
              removeClass(node, baseClassName);
            }
            if (activeClassName) {
              removeClass(node, activeClassName);
            }
            if (doneClassName) {
              removeClass(node, doneClassName);
            }
          };
          _proto.render = function render() {
            var _this$props = this.props;
            _this$props.classNames;
            var props = _objectWithoutPropertiesLoose(_this$props, ["classNames"]);
            return /*#__PURE__*/React.createElement(Transition, _extends({}, props, {
              onEnter: this.onEnter,
              onEntered: this.onEntered,
              onEntering: this.onEntering,
              onExit: this.onExit,
              onExiting: this.onExiting,
              onExited: this.onExited
            }));
          };
          return CSSTransition;
        }(React.Component);
        CSSTransition.defaultProps = {
          classNames: ''
        };
        CSSTransition.propTypes = {};
        const CSSTransition$1 = CSSTransition;
        const _excluded$j = ["anchorEl", "component", "components", "componentsProps", "container", "disablePortal", "keepMounted", "modifiers", "open", "placement", "popperOptions", "popperRef", "transition", "slots", "slotProps"];
        const PopperRoot = styled(BasePopper, {
          name: 'MuiPopper',
          slot: 'Root',
          overridesResolver: (props, styles) => styles.root
        })({});

        /**
         *
         * Demos:
         *
         * - [Autocomplete](https://mui.com/material-ui/react-autocomplete/)
         * - [Menu](https://mui.com/material-ui/react-menu/)
         * - [Popper](https://mui.com/material-ui/react-popper/)
         *
         * API:
         *
         * - [Popper API](https://mui.com/material-ui/api/popper/)
         */
        const Popper = /*#__PURE__*/reactExports.forwardRef(function Popper(inProps, ref) {
          var _slots$root;
          const theme = useTheme();
          const props = useThemeProps({
            props: inProps,
            name: 'MuiPopper'
          });
          const {
              anchorEl,
              component,
              components,
              componentsProps,
              container,
              disablePortal,
              keepMounted,
              modifiers,
              open,
              placement,
              popperOptions,
              popperRef,
              transition,
              slots,
              slotProps
            } = props,
            other = _objectWithoutPropertiesLoose(props, _excluded$j);
          const RootComponent = (_slots$root = slots == null ? void 0 : slots.root) != null ? _slots$root : components == null ? void 0 : components.Root;
          const otherProps = _extends({
            anchorEl,
            component,
            container,
            disablePortal,
            keepMounted,
            modifiers,
            open,
            placement,
            popperOptions,
            popperRef,
            transition
          }, other);
          return /*#__PURE__*/jsxRuntimeExports.jsx(PopperRoot, _extends({
            direction: theme == null ? void 0 : theme.direction,
            slots: {
              root: RootComponent
            },
            slotProps: slotProps != null ? slotProps : componentsProps
          }, otherProps, {
            ref: ref
          }));
        });
        const Popper$1 = exports('P', Popper);

        /**
         * @ignore - internal component.
         */
        const GridContext = /*#__PURE__*/reactExports.createContext();
        const GridContext$1 = GridContext;
        function getGridUtilityClass(slot) {
          return generateUtilityClass('MuiGrid', slot);
        }
        const SPACINGS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        const DIRECTIONS = ['column-reverse', 'column', 'row-reverse', 'row'];
        const WRAPS = ['nowrap', 'wrap-reverse', 'wrap'];
        const GRID_SIZES = ['auto', true, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
        const gridClasses = generateUtilityClasses('MuiGrid', ['root', 'container', 'item', 'zeroMinWidth',
        // spacings
        ...SPACINGS.map(spacing => `spacing-xs-${spacing}`),
        // direction values
        ...DIRECTIONS.map(direction => `direction-xs-${direction}`),
        // wrap values
        ...WRAPS.map(wrap => `wrap-xs-${wrap}`),
        // grid sizes for all breakpoints
        ...GRID_SIZES.map(size => `grid-xs-${size}`), ...GRID_SIZES.map(size => `grid-sm-${size}`), ...GRID_SIZES.map(size => `grid-md-${size}`), ...GRID_SIZES.map(size => `grid-lg-${size}`), ...GRID_SIZES.map(size => `grid-xl-${size}`)]);
        const gridClasses$1 = gridClasses;
        const _excluded$i = ["className", "columns", "columnSpacing", "component", "container", "direction", "item", "rowSpacing", "spacing", "wrap", "zeroMinWidth"];
        function getOffset(val) {
          const parse = parseFloat(val);
          return `${parse}${String(val).replace(String(parse), '') || 'px'}`;
        }
        function generateGrid({
          theme,
          ownerState
        }) {
          let size;
          return theme.breakpoints.keys.reduce((globalStyles, breakpoint) => {
            // Use side effect over immutability for better performance.
            let styles = {};
            if (ownerState[breakpoint]) {
              size = ownerState[breakpoint];
            }
            if (!size) {
              return globalStyles;
            }
            if (size === true) {
              // For the auto layouting
              styles = {
                flexBasis: 0,
                flexGrow: 1,
                maxWidth: '100%'
              };
            } else if (size === 'auto') {
              styles = {
                flexBasis: 'auto',
                flexGrow: 0,
                flexShrink: 0,
                maxWidth: 'none',
                width: 'auto'
              };
            } else {
              const columnsBreakpointValues = resolveBreakpointValues({
                values: ownerState.columns,
                breakpoints: theme.breakpoints.values
              });
              const columnValue = typeof columnsBreakpointValues === 'object' ? columnsBreakpointValues[breakpoint] : columnsBreakpointValues;
              if (columnValue === undefined || columnValue === null) {
                return globalStyles;
              }
              // Keep 7 significant numbers.
              const width = `${Math.round(size / columnValue * 10e7) / 10e5}%`;
              let more = {};
              if (ownerState.container && ownerState.item && ownerState.columnSpacing !== 0) {
                const themeSpacing = theme.spacing(ownerState.columnSpacing);
                if (themeSpacing !== '0px') {
                  const fullWidth = `calc(${width} + ${getOffset(themeSpacing)})`;
                  more = {
                    flexBasis: fullWidth,
                    maxWidth: fullWidth
                  };
                }
              }

              // Close to the bootstrap implementation:
              // https://github.com/twbs/bootstrap/blob/8fccaa2439e97ec72a4b7dc42ccc1f649790adb0/scss/mixins/_grid.scss#L41
              styles = _extends({
                flexBasis: width,
                flexGrow: 0,
                maxWidth: width
              }, more);
            }

            // No need for a media query for the first size.
            if (theme.breakpoints.values[breakpoint] === 0) {
              Object.assign(globalStyles, styles);
            } else {
              globalStyles[theme.breakpoints.up(breakpoint)] = styles;
            }
            return globalStyles;
          }, {});
        }
        function generateDirection({
          theme,
          ownerState
        }) {
          const directionValues = resolveBreakpointValues({
            values: ownerState.direction,
            breakpoints: theme.breakpoints.values
          });
          return handleBreakpoints({
            theme
          }, directionValues, propValue => {
            const output = {
              flexDirection: propValue
            };
            if (propValue.indexOf('column') === 0) {
              output[`& > .${gridClasses$1.item}`] = {
                maxWidth: 'none'
              };
            }
            return output;
          });
        }

        /**
         * Extracts zero value breakpoint keys before a non-zero value breakpoint key.
         * @example { xs: 0, sm: 0, md: 2, lg: 0, xl: 0 } or [0, 0, 2, 0, 0]
         * @returns [xs, sm]
         */
        function extractZeroValueBreakpointKeys({
          breakpoints,
          values
        }) {
          let nonZeroKey = '';
          Object.keys(values).forEach(key => {
            if (nonZeroKey !== '') {
              return;
            }
            if (values[key] !== 0) {
              nonZeroKey = key;
            }
          });
          const sortedBreakpointKeysByValue = Object.keys(breakpoints).sort((a, b) => {
            return breakpoints[a] - breakpoints[b];
          });
          return sortedBreakpointKeysByValue.slice(0, sortedBreakpointKeysByValue.indexOf(nonZeroKey));
        }
        function generateRowGap({
          theme,
          ownerState
        }) {
          const {
            container,
            rowSpacing
          } = ownerState;
          let styles = {};
          if (container && rowSpacing !== 0) {
            const rowSpacingValues = resolveBreakpointValues({
              values: rowSpacing,
              breakpoints: theme.breakpoints.values
            });
            let zeroValueBreakpointKeys;
            if (typeof rowSpacingValues === 'object') {
              zeroValueBreakpointKeys = extractZeroValueBreakpointKeys({
                breakpoints: theme.breakpoints.values,
                values: rowSpacingValues
              });
            }
            styles = handleBreakpoints({
              theme
            }, rowSpacingValues, (propValue, breakpoint) => {
              var _zeroValueBreakpointK;
              const themeSpacing = theme.spacing(propValue);
              if (themeSpacing !== '0px') {
                return {
                  marginTop: `-${getOffset(themeSpacing)}`,
                  [`& > .${gridClasses$1.item}`]: {
                    paddingTop: getOffset(themeSpacing)
                  }
                };
              }
              if ((_zeroValueBreakpointK = zeroValueBreakpointKeys) != null && _zeroValueBreakpointK.includes(breakpoint)) {
                return {};
              }
              return {
                marginTop: 0,
                [`& > .${gridClasses$1.item}`]: {
                  paddingTop: 0
                }
              };
            });
          }
          return styles;
        }
        function generateColumnGap({
          theme,
          ownerState
        }) {
          const {
            container,
            columnSpacing
          } = ownerState;
          let styles = {};
          if (container && columnSpacing !== 0) {
            const columnSpacingValues = resolveBreakpointValues({
              values: columnSpacing,
              breakpoints: theme.breakpoints.values
            });
            let zeroValueBreakpointKeys;
            if (typeof columnSpacingValues === 'object') {
              zeroValueBreakpointKeys = extractZeroValueBreakpointKeys({
                breakpoints: theme.breakpoints.values,
                values: columnSpacingValues
              });
            }
            styles = handleBreakpoints({
              theme
            }, columnSpacingValues, (propValue, breakpoint) => {
              var _zeroValueBreakpointK2;
              const themeSpacing = theme.spacing(propValue);
              if (themeSpacing !== '0px') {
                return {
                  width: `calc(100% + ${getOffset(themeSpacing)})`,
                  marginLeft: `-${getOffset(themeSpacing)}`,
                  [`& > .${gridClasses$1.item}`]: {
                    paddingLeft: getOffset(themeSpacing)
                  }
                };
              }
              if ((_zeroValueBreakpointK2 = zeroValueBreakpointKeys) != null && _zeroValueBreakpointK2.includes(breakpoint)) {
                return {};
              }
              return {
                width: '100%',
                marginLeft: 0,
                [`& > .${gridClasses$1.item}`]: {
                  paddingLeft: 0
                }
              };
            });
          }
          return styles;
        }
        function resolveSpacingStyles(spacing, breakpoints, styles = {}) {
          // undefined/null or `spacing` <= 0
          if (!spacing || spacing <= 0) {
            return [];
          }
          // in case of string/number `spacing`
          if (typeof spacing === 'string' && !Number.isNaN(Number(spacing)) || typeof spacing === 'number') {
            return [styles[`spacing-xs-${String(spacing)}`]];
          }
          // in case of object `spacing`
          const spacingStyles = [];
          breakpoints.forEach(breakpoint => {
            const value = spacing[breakpoint];
            if (Number(value) > 0) {
              spacingStyles.push(styles[`spacing-${breakpoint}-${String(value)}`]);
            }
          });
          return spacingStyles;
        }

        // Default CSS values
        // flex: '0 1 auto',
        // flexDirection: 'row',
        // alignItems: 'flex-start',
        // flexWrap: 'nowrap',
        // justifyContent: 'flex-start',
        const GridRoot = styled('div', {
          name: 'MuiGrid',
          slot: 'Root',
          overridesResolver: (props, styles) => {
            const {
              ownerState
            } = props;
            const {
              container,
              direction,
              item,
              spacing,
              wrap,
              zeroMinWidth,
              breakpoints
            } = ownerState;
            let spacingStyles = [];

            // in case of grid item
            if (container) {
              spacingStyles = resolveSpacingStyles(spacing, breakpoints, styles);
            }
            const breakpointsStyles = [];
            breakpoints.forEach(breakpoint => {
              const value = ownerState[breakpoint];
              if (value) {
                breakpointsStyles.push(styles[`grid-${breakpoint}-${String(value)}`]);
              }
            });
            return [styles.root, container && styles.container, item && styles.item, zeroMinWidth && styles.zeroMinWidth, ...spacingStyles, direction !== 'row' && styles[`direction-xs-${String(direction)}`], wrap !== 'wrap' && styles[`wrap-xs-${String(wrap)}`], ...breakpointsStyles];
          }
        })(({
          ownerState
        }) => _extends({
          boxSizing: 'border-box'
        }, ownerState.container && {
          display: 'flex',
          flexWrap: 'wrap',
          width: '100%'
        }, ownerState.item && {
          margin: 0 // For instance, it's useful when used with a `figure` element.
        }, ownerState.zeroMinWidth && {
          minWidth: 0
        }, ownerState.wrap !== 'wrap' && {
          flexWrap: ownerState.wrap
        }), generateDirection, generateRowGap, generateColumnGap, generateGrid);
        function resolveSpacingClasses(spacing, breakpoints) {
          // undefined/null or `spacing` <= 0
          if (!spacing || spacing <= 0) {
            return [];
          }
          // in case of string/number `spacing`
          if (typeof spacing === 'string' && !Number.isNaN(Number(spacing)) || typeof spacing === 'number') {
            return [`spacing-xs-${String(spacing)}`];
          }
          // in case of object `spacing`
          const classes = [];
          breakpoints.forEach(breakpoint => {
            const value = spacing[breakpoint];
            if (Number(value) > 0) {
              const className = `spacing-${breakpoint}-${String(value)}`;
              classes.push(className);
            }
          });
          return classes;
        }
        const useUtilityClasses$j = ownerState => {
          const {
            classes,
            container,
            direction,
            item,
            spacing,
            wrap,
            zeroMinWidth,
            breakpoints
          } = ownerState;
          let spacingClasses = [];

          // in case of grid item
          if (container) {
            spacingClasses = resolveSpacingClasses(spacing, breakpoints);
          }
          const breakpointsClasses = [];
          breakpoints.forEach(breakpoint => {
            const value = ownerState[breakpoint];
            if (value) {
              breakpointsClasses.push(`grid-${breakpoint}-${String(value)}`);
            }
          });
          const slots = {
            root: ['root', container && 'container', item && 'item', zeroMinWidth && 'zeroMinWidth', ...spacingClasses, direction !== 'row' && `direction-xs-${String(direction)}`, wrap !== 'wrap' && `wrap-xs-${String(wrap)}`, ...breakpointsClasses]
          };
          return composeClasses(slots, getGridUtilityClass, classes);
        };
        const Grid = /*#__PURE__*/reactExports.forwardRef(function Grid(inProps, ref) {
          const themeProps = useThemeProps({
            props: inProps,
            name: 'MuiGrid'
          });
          const {
            breakpoints
          } = useTheme$1();
          const props = extendSxProp(themeProps);
          const {
              className,
              columns: columnsProp,
              columnSpacing: columnSpacingProp,
              component = 'div',
              container = false,
              direction = 'row',
              item = false,
              rowSpacing: rowSpacingProp,
              spacing = 0,
              wrap = 'wrap',
              zeroMinWidth = false
            } = props,
            other = _objectWithoutPropertiesLoose(props, _excluded$i);
          const rowSpacing = rowSpacingProp || spacing;
          const columnSpacing = columnSpacingProp || spacing;
          const columnsContext = reactExports.useContext(GridContext$1);

          // columns set with default breakpoint unit of 12
          const columns = container ? columnsProp || 12 : columnsContext;
          const breakpointsValues = {};
          const otherFiltered = _extends({}, other);
          breakpoints.keys.forEach(breakpoint => {
            if (other[breakpoint] != null) {
              breakpointsValues[breakpoint] = other[breakpoint];
              delete otherFiltered[breakpoint];
            }
          });
          const ownerState = _extends({}, props, {
            columns,
            container,
            direction,
            item,
            rowSpacing,
            columnSpacing,
            wrap,
            zeroMinWidth,
            spacing
          }, breakpointsValues, {
            breakpoints: breakpoints.keys
          });
          const classes = useUtilityClasses$j(ownerState);
          return /*#__PURE__*/jsxRuntimeExports.jsx(GridContext$1.Provider, {
            value: columns,
            children: /*#__PURE__*/jsxRuntimeExports.jsx(GridRoot, _extends({
              ownerState: ownerState,
              className: clsx(classes.root, className),
              as: component,
              ref: ref
            }, otherFiltered))
          });
        });
        const Grid$1 = exports('G', Grid);

        /**
         * @deprecated Not used internally. Use `MediaQueryListEvent` from lib.dom.d.ts instead.
         */

        function useMediaQueryOld(query, defaultMatches, matchMedia, ssrMatchMedia, noSsr) {
          const [match, setMatch] = reactExports.useState(() => {
            if (noSsr && matchMedia) {
              return matchMedia(query).matches;
            }
            if (ssrMatchMedia) {
              return ssrMatchMedia(query).matches;
            }

            // Once the component is mounted, we rely on the
            // event listeners to return the correct matches value.
            return defaultMatches;
          });
          useEnhancedEffect(() => {
            let active = true;
            if (!matchMedia) {
              return undefined;
            }
            const queryList = matchMedia(query);
            const updateMatch = () => {
              // Workaround Safari wrong implementation of matchMedia
              // TODO can we remove it?
              // https://github.com/mui/material-ui/pull/17315#issuecomment-528286677
              if (active) {
                setMatch(queryList.matches);
              }
            };
            updateMatch();
            // TODO: Use `addEventListener` once support for Safari < 14 is dropped
            queryList.addListener(updateMatch);
            return () => {
              active = false;
              queryList.removeListener(updateMatch);
            };
          }, [query, matchMedia]);
          return match;
        }

        // eslint-disable-next-line no-useless-concat -- Workaround for https://github.com/webpack/webpack/issues/14814
        const maybeReactUseSyncExternalStore = React$1['useSyncExternalStore' + ''];
        function useMediaQueryNew(query, defaultMatches, matchMedia, ssrMatchMedia, noSsr) {
          const getDefaultSnapshot = reactExports.useCallback(() => defaultMatches, [defaultMatches]);
          const getServerSnapshot = reactExports.useMemo(() => {
            if (noSsr && matchMedia) {
              return () => matchMedia(query).matches;
            }
            if (ssrMatchMedia !== null) {
              const {
                matches
              } = ssrMatchMedia(query);
              return () => matches;
            }
            return getDefaultSnapshot;
          }, [getDefaultSnapshot, query, ssrMatchMedia, noSsr, matchMedia]);
          const [getSnapshot, subscribe] = reactExports.useMemo(() => {
            if (matchMedia === null) {
              return [getDefaultSnapshot, () => () => {}];
            }
            const mediaQueryList = matchMedia(query);
            return [() => mediaQueryList.matches, notify => {
              // TODO: Use `addEventListener` once support for Safari < 14 is dropped
              mediaQueryList.addListener(notify);
              return () => {
                mediaQueryList.removeListener(notify);
              };
            }];
          }, [getDefaultSnapshot, matchMedia, query]);
          const match = maybeReactUseSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
          return match;
        }
        function useMediaQuery(queryInput, options = {}) {
          const theme = useTheme();
          // Wait for jsdom to support the match media feature.
          // All the browsers MUI support have this built-in.
          // This defensive check is here for simplicity.
          // Most of the time, the match media logic isn't central to people tests.
          const supportMatchMedia = typeof window !== 'undefined' && typeof window.matchMedia !== 'undefined';
          const {
            defaultMatches = false,
            matchMedia = supportMatchMedia ? window.matchMedia : null,
            ssrMatchMedia = null,
            noSsr = false
          } = getThemeProps({
            name: 'MuiUseMediaQuery',
            props: options,
            theme
          });
          let query = typeof queryInput === 'function' ? queryInput(theme) : queryInput;
          query = query.replace(/^@media( ?)/m, '');

          // TODO: Drop `useMediaQueryOld` and use  `use-sync-external-store` shim in `useMediaQueryNew` once the package is stable
          const useMediaQueryImplementation = maybeReactUseSyncExternalStore !== undefined ? useMediaQueryNew : useMediaQueryOld;
          const match = useMediaQueryImplementation(query, defaultMatches, matchMedia, ssrMatchMedia, noSsr);
          return match;
        }
        const getPickersLocalization = pickersTranslations => {
          return {
            components: {
              MuiLocalizationProvider: {
                defaultProps: {
                  localeText: _extends({}, pickersTranslations)
                }
              }
            }
          };
        };
        const enUSPickers = {
          // Calendar navigation
          previousMonth: 'Previous month',
          nextMonth: 'Next month',
          // View navigation
          openPreviousView: 'open previous view',
          openNextView: 'open next view',
          calendarViewSwitchingButtonAriaLabel: view => view === 'year' ? 'year view is open, switch to calendar view' : 'calendar view is open, switch to year view',
          inputModeToggleButtonAriaLabel: (isKeyboardInputOpen, viewType) => isKeyboardInputOpen ? `text input view is open, go to ${viewType} view` : `${viewType} view is open, go to text input view`,
          // DateRange placeholders
          start: 'Start',
          end: 'End',
          // Action bar
          cancelButtonLabel: 'Cancel',
          clearButtonLabel: 'Clear',
          okButtonLabel: 'OK',
          todayButtonLabel: 'Today',
          // Toolbar titles
          datePickerDefaultToolbarTitle: 'Select date',
          dateTimePickerDefaultToolbarTitle: 'Select date & time',
          timePickerDefaultToolbarTitle: 'Select time',
          dateRangePickerDefaultToolbarTitle: 'Select date range',
          // Clock labels
          clockLabelText: (view, time, adapter) => `Select ${view}. ${time === null ? 'No time selected' : `Selected time is ${adapter.format(time, 'fullTime')}`}`,
          hoursClockNumberText: hours => `${hours} hours`,
          minutesClockNumberText: minutes => `${minutes} minutes`,
          secondsClockNumberText: seconds => `${seconds} seconds`,
          // Open picker labels
          openDatePickerDialogue: (rawValue, utils) => rawValue && utils.isValid(utils.date(rawValue)) ? `Choose date, selected date is ${utils.format(utils.date(rawValue), 'fullDate')}` : 'Choose date',
          openTimePickerDialogue: (rawValue, utils) => rawValue && utils.isValid(utils.date(rawValue)) ? `Choose time, selected time is ${utils.format(utils.date(rawValue), 'fullTime')}` : 'Choose time',
          // Table labels
          timeTableLabel: 'pick time',
          dateTableLabel: 'pick date'
        };
        const DEFAULT_LOCALE = enUSPickers;
        getPickersLocalization(enUSPickers);
        const MuiPickersAdapterContext = /*#__PURE__*/reactExports.createContext(null);
        /**
         * @ignore - do not document.
         */

        function LocalizationProvider(inProps) {
          const props = useThemeProps({
            props: inProps,
            name: 'MuiLocalizationProvider'
          });
          const {
            children,
            dateAdapter: Utils,
            dateFormats,
            dateLibInstance,
            locale,
            adapterLocale,
            localeText
          } = props;
          const utils = reactExports.useMemo(() => new Utils({
            locale: adapterLocale != null ? adapterLocale : locale,
            formats: dateFormats,
            instance: dateLibInstance
          }), [Utils, locale, adapterLocale, dateFormats, dateLibInstance]);
          const defaultDates = reactExports.useMemo(() => {
            return {
              minDate: utils.date('1900-01-01T00:00:00.000'),
              maxDate: utils.date('2099-12-31T00:00:00.000')
            };
          }, [utils]);
          const contextValue = reactExports.useMemo(() => {
            return {
              utils,
              defaultDates,
              localeText: _extends({}, DEFAULT_LOCALE, localeText != null ? localeText : {})
            };
          }, [defaultDates, utils, localeText]);
          return /*#__PURE__*/jsxRuntimeExports.jsx(MuiPickersAdapterContext.Provider, {
            value: contextValue,
            children: children
          });
        }
        const useLocalizationContext = () => {
          const localization = reactExports.useContext(MuiPickersAdapterContext);
          if (localization === null) {
            throw new Error('MUI: Can not find utils in context. It looks like you forgot to wrap your component in LocalizationProvider, or pass dateAdapter prop directly.');
          }
          return localization;
        };
        const useUtils = exports('u', () => useLocalizationContext().utils);
        const useDefaultDates = exports('n', () => useLocalizationContext().defaultDates);
        const useLocaleText = exports('a', () => useLocalizationContext().localeText);
        const useNow = () => {
          const utils = useUtils();
          const now = reactExports.useRef(utils.date());
          return now.current;
        };
        const findClosestEnabledDate = ({
          date,
          disableFuture,
          disablePast,
          maxDate,
          minDate,
          isDateDisabled,
          utils
        }) => {
          const today = utils.startOfDay(utils.date());
          if (disablePast && utils.isBefore(minDate, today)) {
            minDate = today;
          }
          if (disableFuture && utils.isAfter(maxDate, today)) {
            maxDate = today;
          }
          let forward = date;
          let backward = date;
          if (utils.isBefore(date, minDate)) {
            forward = utils.date(minDate);
            backward = null;
          }
          if (utils.isAfter(date, maxDate)) {
            if (backward) {
              backward = utils.date(maxDate);
            }
            forward = null;
          }
          while (forward || backward) {
            if (forward && utils.isAfter(forward, maxDate)) {
              forward = null;
            }
            if (backward && utils.isBefore(backward, minDate)) {
              backward = null;
            }
            if (forward) {
              if (!isDateDisabled(forward)) {
                return forward;
              }
              forward = utils.addDays(forward, 1);
            }
            if (backward) {
              if (!isDateDisabled(backward)) {
                return backward;
              }
              backward = utils.addDays(backward, -1);
            }
          }
          return null;
        };
        const parsePickerInputValue = exports('p', (utils, value) => {
          const parsedValue = utils.date(value);
          return utils.isValid(parsedValue) ? parsedValue : null;
        });
        const parseNonNullablePickerDate = exports('o', (utils, value, defaultValue) => {
          if (value == null) {
            return defaultValue;
          }
          const parsedValue = utils.date(value);
          const isDateValid = utils.isValid(parsedValue);
          if (isDateValid) {
            return parsedValue;
          }
          return defaultValue;
        });
        const isYearOnlyView = views => views.length === 1 && views[0] === 'year';
        const isYearAndMonthViews = views => views.length === 2 && views.indexOf('month') !== -1 && views.indexOf('year') !== -1;
        const getFormatAndMaskByViews = (views, utils) => {
          if (isYearOnlyView(views)) {
            return {
              inputFormat: utils.formats.year
            };
          }
          if (isYearAndMonthViews(views)) {
            return {
              disableMaskedInput: true,
              inputFormat: utils.formats.monthAndYear
            };
          }
          return {
            inputFormat: utils.formats.keyboardDate
          };
        };
        function useDatePickerDefaultizedProps(props, name) {
          var _themeProps$views;
          const utils = useUtils();
          const defaultDates = useDefaultDates(); // This is technically unsound if the type parameters appear in optional props.
          // Optional props can be filled by `useThemeProps` with types that don't match the type parameters.

          const themeProps = useThemeProps({
            props,
            name
          });
          const views = (_themeProps$views = themeProps.views) != null ? _themeProps$views : ['year', 'day'];
          return _extends({
            openTo: 'day',
            disableFuture: false,
            disablePast: false
          }, getFormatAndMaskByViews(views, utils), themeProps, {
            views,
            minDate: parseNonNullablePickerDate(utils, themeProps.minDate, defaultDates.minDate),
            maxDate: parseNonNullablePickerDate(utils, themeProps.maxDate, defaultDates.maxDate)
          });
        }
        const datePickerValueManager = {
          emptyValue: null,
          getTodayValue: utils => utils.date(),
          parseInput: parsePickerInputValue,
          areValuesEqual: (utils, a, b) => utils.isEqual(a, b)
        };
        const ArrowDropDown = createSvgIcon( /*#__PURE__*/jsxRuntimeExports.jsx("path", {
          d: "M7 10l5 5 5-5z"
        }), 'ArrowDropDown');
        /**
         * @ignore - internal component.
         */

        const ArrowLeft = createSvgIcon( /*#__PURE__*/jsxRuntimeExports.jsx("path", {
          d: "M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"
        }), 'ArrowLeft');
        /**
         * @ignore - internal component.
         */

        const ArrowRight = createSvgIcon( /*#__PURE__*/jsxRuntimeExports.jsx("path", {
          d: "M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"
        }), 'ArrowRight');
        /**
         * @ignore - internal component.
         */

        const Calendar = createSvgIcon( /*#__PURE__*/jsxRuntimeExports.jsx("path", {
          d: "M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z"
        }), 'Calendar');
        /**
         * @ignore - internal component.
         */

        const Clock$1 = exports('C', createSvgIcon( /*#__PURE__*/jsxRuntimeExports.jsxs(reactExports.Fragment, {
          children: [/*#__PURE__*/jsxRuntimeExports.jsx("path", {
            d: "M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
          }), /*#__PURE__*/jsxRuntimeExports.jsx("path", {
            d: "M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"
          })]
        }), 'Clock'));
        /**
         * @ignore - internal component.
         */

        const DateRange = exports('q', createSvgIcon( /*#__PURE__*/jsxRuntimeExports.jsx("path", {
          d: "M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z"
        }), 'DateRange'));
        /**
         * @ignore - internal component.
         */

        const Pen = createSvgIcon( /*#__PURE__*/jsxRuntimeExports.jsx("path", {
          d: "M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 00-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"
        }), 'Pen');
        /**
         * @ignore - internal component.
         */

        const Time = exports('T', createSvgIcon( /*#__PURE__*/jsxRuntimeExports.jsxs(reactExports.Fragment, {
          children: [/*#__PURE__*/jsxRuntimeExports.jsx("path", {
            d: "M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
          }), /*#__PURE__*/jsxRuntimeExports.jsx("path", {
            d: "M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"
          })]
        }), 'Time'));
        function getPickersToolbarUtilityClass(slot) {
          return generateUtilityClass('MuiPickersToolbar', slot);
        }
        const pickersToolbarClasses = exports('c', generateUtilityClasses('MuiPickersToolbar', ['root', 'content', 'penIconButton', 'penIconButtonLandscape']));
        const useUtilityClasses$i = ownerState => {
          const {
            classes,
            isLandscape
          } = ownerState;
          const slots = {
            root: ['root'],
            content: ['content'],
            penIconButton: ['penIconButton', isLandscape && 'penIconButtonLandscape']
          };
          return composeClasses(slots, getPickersToolbarUtilityClass, classes);
        };
        const PickersToolbarRoot = styled('div', {
          name: 'MuiPickersToolbar',
          slot: 'Root',
          overridesResolver: (props, styles) => styles.root
        })(({
          theme,
          ownerState
        }) => _extends({
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          padding: theme.spacing(2, 3)
        }, ownerState.isLandscape && {
          height: 'auto',
          maxWidth: 160,
          padding: 16,
          justifyContent: 'flex-start',
          flexWrap: 'wrap'
        }));
        const PickersToolbarContent = styled(Grid$1, {
          name: 'MuiPickersToolbar',
          slot: 'Content',
          overridesResolver: (props, styles) => styles.content
        })(({
          ownerState
        }) => _extends({
          flex: 1
        }, !ownerState.isLandscape && {
          alignItems: 'center'
        }));
        const PickersToolbarPenIconButton = styled(IconButton, {
          name: 'MuiPickersToolbar',
          slot: 'PenIconButton',
          overridesResolver: (props, styles) => [{
            [`&.${pickersToolbarClasses.penIconButtonLandscape}`]: styles.penIconButtonLandscape
          }, styles.penIconButton]
        })({});
        const getViewTypeIcon = viewType => viewType === 'clock' ? /*#__PURE__*/jsxRuntimeExports.jsx(Clock$1, {
          color: "inherit"
        }) : /*#__PURE__*/jsxRuntimeExports.jsx(Calendar, {
          color: "inherit"
        });
        const PickersToolbar = exports('b', /*#__PURE__*/reactExports.forwardRef(function PickersToolbar(inProps, ref) {
          const props = useThemeProps({
            props: inProps,
            name: 'MuiPickersToolbar'
          });
          const {
            children,
            className,
            getMobileKeyboardInputViewButtonText,
            isLandscape,
            isMobileKeyboardViewOpen,
            landscapeDirection = 'column',
            toggleMobileKeyboardView,
            toolbarTitle,
            viewType = 'calendar'
          } = props;
          const ownerState = props;
          const localeText = useLocaleText();
          const classes = useUtilityClasses$i(ownerState);
          return /*#__PURE__*/jsxRuntimeExports.jsxs(PickersToolbarRoot, {
            ref: ref,
            className: clsx(classes.root, className),
            ownerState: ownerState,
            children: [/*#__PURE__*/jsxRuntimeExports.jsx(Typography, {
              color: "text.secondary",
              variant: "overline",
              children: toolbarTitle
            }), /*#__PURE__*/jsxRuntimeExports.jsxs(PickersToolbarContent, {
              container: true,
              justifyContent: "space-between",
              className: classes.content,
              ownerState: ownerState,
              direction: isLandscape ? landscapeDirection : 'row',
              alignItems: isLandscape ? 'flex-start' : 'flex-end',
              children: [children, /*#__PURE__*/jsxRuntimeExports.jsx(PickersToolbarPenIconButton, {
                onClick: toggleMobileKeyboardView,
                className: classes.penIconButton,
                ownerState: ownerState,
                color: "inherit",
                "aria-label": getMobileKeyboardInputViewButtonText ? getMobileKeyboardInputViewButtonText(isMobileKeyboardViewOpen, viewType) : localeText.inputModeToggleButtonAriaLabel(isMobileKeyboardViewOpen, viewType),
                children: isMobileKeyboardViewOpen ? getViewTypeIcon(viewType) : /*#__PURE__*/jsxRuntimeExports.jsx(Pen, {
                  color: "inherit"
                })
              })]
            })]
          });
        }));
        function getDatePickerToolbarUtilityClass(slot) {
          return generateUtilityClass('MuiDatePickerToolbar', slot);
        }
        generateUtilityClasses('MuiDatePickerToolbar', ['root', 'title']);
        const _excluded$h = ["parsedValue", "isLandscape", "isMobileKeyboardViewOpen", "onChange", "toggleMobileKeyboardView", "toolbarFormat", "toolbarPlaceholder", "toolbarTitle", "views"];
        const useUtilityClasses$h = ownerState => {
          const {
            classes
          } = ownerState;
          const slots = {
            root: ['root'],
            title: ['title']
          };
          return composeClasses(slots, getDatePickerToolbarUtilityClass, classes);
        };
        const DatePickerToolbarRoot = styled(PickersToolbar, {
          name: 'MuiDatePickerToolbar',
          slot: 'Root',
          overridesResolver: (_, styles) => styles.root
        })({});
        const DatePickerToolbarTitle = styled(Typography, {
          name: 'MuiDatePickerToolbar',
          slot: 'Title',
          overridesResolver: (_, styles) => styles.title
        })(({
          ownerState
        }) => _extends({}, ownerState.isLandscape && {
          margin: 'auto 16px auto auto'
        }));

        /**
         * @ignore - internal component.
         */
        const DatePickerToolbar = /*#__PURE__*/reactExports.forwardRef(function DatePickerToolbar(inProps, ref) {
          const props = useThemeProps({
            props: inProps,
            name: 'MuiDatePickerToolbar'
          });
          const {
              parsedValue,
              isLandscape,
              isMobileKeyboardViewOpen,
              toggleMobileKeyboardView,
              toolbarFormat,
              toolbarPlaceholder = '––',
              toolbarTitle: toolbarTitleProp,
              views
            } = props,
            other = _objectWithoutPropertiesLoose(props, _excluded$h);
          const utils = useUtils();
          const localeText = useLocaleText();
          const classes = useUtilityClasses$h(props);
          const toolbarTitle = toolbarTitleProp != null ? toolbarTitleProp : localeText.datePickerDefaultToolbarTitle;
          const dateText = reactExports.useMemo(() => {
            if (!parsedValue) {
              return toolbarPlaceholder;
            }
            if (toolbarFormat) {
              return utils.formatByString(parsedValue, toolbarFormat);
            }
            if (isYearOnlyView(views)) {
              return utils.format(parsedValue, 'year');
            }
            if (isYearAndMonthViews(views)) {
              return utils.format(parsedValue, 'month');
            } // Little localization hack (Google is doing the same for android native pickers):
            // For english localization it is convenient to include weekday into the date "Mon, Jun 1".
            // For other locales using strings like "June 1", without weekday.

            return /en/.test(utils.getCurrentLocaleCode()) ? utils.format(parsedValue, 'normalDateWithWeekday') : utils.format(parsedValue, 'normalDate');
          }, [parsedValue, toolbarFormat, toolbarPlaceholder, utils, views]);
          const ownerState = props;
          return /*#__PURE__*/jsxRuntimeExports.jsx(DatePickerToolbarRoot, _extends({
            ref: ref,
            toolbarTitle: toolbarTitle,
            isMobileKeyboardViewOpen: isMobileKeyboardViewOpen,
            toggleMobileKeyboardView: toggleMobileKeyboardView,
            isLandscape: isLandscape,
            className: classes.root
          }, other, {
            children: /*#__PURE__*/jsxRuntimeExports.jsx(DatePickerToolbarTitle, {
              variant: "h4",
              align: isLandscape ? 'left' : 'center',
              ownerState: ownerState,
              className: classes.title,
              children: dateText
            })
          }));
        });

        /**
         * TODO consider getting rid from wrapper variant
         * @ignore - internal component.
         */
        const WrapperVariantContext = exports('W', /*#__PURE__*/reactExports.createContext(null));
        const _excluded$g = ["onAccept", "onClear", "onCancel", "onSetToday", "actions"];
        const PickersActionBar = props => {
          const {
              onAccept,
              onClear,
              onCancel,
              onSetToday,
              actions
            } = props,
            other = _objectWithoutPropertiesLoose(props, _excluded$g);
          const wrapperVariant = reactExports.useContext(WrapperVariantContext);
          const localeText = useLocaleText();
          const actionsArray = typeof actions === 'function' ? actions(wrapperVariant) : actions;
          if (actionsArray == null || actionsArray.length === 0) {
            return null;
          }
          const buttons = actionsArray == null ? void 0 : actionsArray.map(actionType => {
            switch (actionType) {
              case 'clear':
                return /*#__PURE__*/jsxRuntimeExports.jsx(Button, {
                  onClick: onClear,
                  children: localeText.clearButtonLabel
                }, actionType);
              case 'cancel':
                return /*#__PURE__*/jsxRuntimeExports.jsx(Button, {
                  onClick: onCancel,
                  children: localeText.cancelButtonLabel
                }, actionType);
              case 'accept':
                return /*#__PURE__*/jsxRuntimeExports.jsx(Button, {
                  onClick: onAccept,
                  children: localeText.okButtonLabel
                }, actionType);
              case 'today':
                return /*#__PURE__*/jsxRuntimeExports.jsx(Button, {
                  onClick: onSetToday,
                  children: localeText.todayButtonLabel
                }, actionType);
              default:
                return null;
            }
          });
          return /*#__PURE__*/jsxRuntimeExports.jsx(DialogActions, _extends({}, other, {
            children: buttons
          }));
        };
        function getPickersPopperUtilityClass(slot) {
          return generateUtilityClass('MuiPickersPopper', slot);
        }
        generateUtilityClasses('MuiPickersPopper', ['root', 'paper']);

        /* Use it instead of .includes method for IE support */
        function arrayIncludes(array, itemOrItems) {
          if (Array.isArray(itemOrItems)) {
            return itemOrItems.every(item => array.indexOf(item) !== -1);
          }
          return array.indexOf(itemOrItems) !== -1;
        }
        const onSpaceOrEnter = (innerFn, onFocus) => event => {
          if (event.key === 'Enter' || event.key === ' ') {
            innerFn(event); // prevent any side effects

            event.preventDefault();
            event.stopPropagation();
          }
          if (onFocus) {
            onFocus(event);
          }
        };
        const getActiveElement = (root = document) => {
          const activeEl = root.activeElement;
          if (!activeEl) {
            return null;
          }
          if (activeEl.shadowRoot) {
            return getActiveElement(activeEl.shadowRoot);
          }
          return activeEl;
        };
        const _excluded$f = ["onClick", "onTouchStart"];
        const useUtilityClasses$g = ownerState => {
          const {
            classes
          } = ownerState;
          const slots = {
            root: ['root'],
            paper: ['paper']
          };
          return composeClasses(slots, getPickersPopperUtilityClass, classes);
        };
        const PickersPopperRoot = styled(Popper$1, {
          name: 'MuiPickersPopper',
          slot: 'Root',
          overridesResolver: (_, styles) => styles.root
        })(({
          theme
        }) => ({
          zIndex: theme.zIndex.modal
        }));
        const PickersPopperPaper = styled(Paper, {
          name: 'MuiPickersPopper',
          slot: 'Paper',
          overridesResolver: (_, styles) => styles.paper
        })(({
          ownerState
        }) => _extends({
          transformOrigin: 'top center',
          outline: 0
        }, ownerState.placement === 'top' && {
          transformOrigin: 'bottom center'
        }));
        function clickedRootScrollbar(event, doc) {
          return doc.documentElement.clientWidth < event.clientX || doc.documentElement.clientHeight < event.clientY;
        }

        /**
         * Based on @mui/material/ClickAwayListener without the customization.
         * We can probably strip away even more since children won't be portaled.
         * @param {boolean} active Only listen to clicks when the popper is opened.
         * @param {(event: MouseEvent | TouchEvent) => void} onClickAway The callback to call when clicking outside the popper.
         * @returns {Array} The ref and event handler to listen to the outside clicks.
         */
        function useClickAwayListener(active, onClickAway) {
          const movedRef = reactExports.useRef(false);
          const syntheticEventRef = reactExports.useRef(false);
          const nodeRef = reactExports.useRef(null);
          const activatedRef = reactExports.useRef(false);
          reactExports.useEffect(() => {
            if (!active) {
              return undefined;
            } // Ensure that this hook is not "activated" synchronously.
            // https://github.com/facebook/react/issues/20074

            function armClickAwayListener() {
              activatedRef.current = true;
            }
            document.addEventListener('mousedown', armClickAwayListener, true);
            document.addEventListener('touchstart', armClickAwayListener, true);
            return () => {
              document.removeEventListener('mousedown', armClickAwayListener, true);
              document.removeEventListener('touchstart', armClickAwayListener, true);
              activatedRef.current = false;
            };
          }, [active]); // The handler doesn't take event.defaultPrevented into account:
          //
          // event.preventDefault() is meant to stop default behaviors like
          // clicking a checkbox to check it, hitting a button to submit a form,
          // and hitting left arrow to move the cursor in a text input etc.
          // Only special HTML elements have these default behaviors.

          const handleClickAway = useEventCallback(event => {
            if (!activatedRef.current) {
              return;
            } // Given developers can stop the propagation of the synthetic event,
            // we can only be confident with a positive value.

            const insideReactTree = syntheticEventRef.current;
            syntheticEventRef.current = false;
            const doc = ownerDocument(nodeRef.current); // 1. IE11 support, which trigger the handleClickAway even after the unbind
            // 2. The child might render null.
            // 3. Behave like a blur listener.

            if (!nodeRef.current ||
            // is a TouchEvent?
            'clientX' in event && clickedRootScrollbar(event, doc)) {
              return;
            } // Do not act if user performed touchmove

            if (movedRef.current) {
              movedRef.current = false;
              return;
            }
            let insideDOM; // If not enough, can use https://github.com/DieterHolvoet/event-propagation-path/blob/master/propagationPath.js

            if (event.composedPath) {
              insideDOM = event.composedPath().indexOf(nodeRef.current) > -1;
            } else {
              insideDOM = !doc.documentElement.contains(event.target) || nodeRef.current.contains(event.target);
            }
            if (!insideDOM && !insideReactTree) {
              onClickAway(event);
            }
          }); // Keep track of mouse/touch events that bubbled up through the portal.

          const handleSynthetic = () => {
            syntheticEventRef.current = true;
          };
          reactExports.useEffect(() => {
            if (active) {
              const doc = ownerDocument(nodeRef.current);
              const handleTouchMove = () => {
                movedRef.current = true;
              };
              doc.addEventListener('touchstart', handleClickAway);
              doc.addEventListener('touchmove', handleTouchMove);
              return () => {
                doc.removeEventListener('touchstart', handleClickAway);
                doc.removeEventListener('touchmove', handleTouchMove);
              };
            }
            return undefined;
          }, [active, handleClickAway]);
          reactExports.useEffect(() => {
            // TODO This behavior is not tested automatically
            // It's unclear whether this is due to different update semantics in test (batched in act() vs discrete on click).
            // Or if this is a timing related issues due to different Transition components
            // Once we get rid of all the manual scheduling (e.g. setTimeout(update, 0)) we can revisit this code+test.
            if (active) {
              const doc = ownerDocument(nodeRef.current);
              doc.addEventListener('click', handleClickAway);
              return () => {
                doc.removeEventListener('click', handleClickAway); // cleanup `handleClickAway`

                syntheticEventRef.current = false;
              };
            }
            return undefined;
          }, [active, handleClickAway]);
          return [nodeRef, handleSynthetic, handleSynthetic];
        }
        function PickersPopper(inProps) {
          var _components$ActionBar;
          const props = useThemeProps({
            props: inProps,
            name: 'MuiPickersPopper'
          });
          const {
            anchorEl,
            children,
            containerRef = null,
            onBlur,
            onClose,
            onClear,
            onAccept,
            onCancel,
            onSetToday,
            open,
            PopperProps,
            role,
            TransitionComponent = Grow,
            TrapFocusProps,
            PaperProps = {},
            components,
            componentsProps
          } = props;
          reactExports.useEffect(() => {
            function handleKeyDown(nativeEvent) {
              // IE11, Edge (prior to using Bink?) use 'Esc'
              if (open && (nativeEvent.key === 'Escape' || nativeEvent.key === 'Esc')) {
                onClose();
              }
            }
            document.addEventListener('keydown', handleKeyDown);
            return () => {
              document.removeEventListener('keydown', handleKeyDown);
            };
          }, [onClose, open]);
          const lastFocusedElementRef = reactExports.useRef(null);
          reactExports.useEffect(() => {
            if (role === 'tooltip') {
              return;
            }
            if (open) {
              lastFocusedElementRef.current = getActiveElement(document);
            } else if (lastFocusedElementRef.current && lastFocusedElementRef.current instanceof HTMLElement) {
              // make sure the button is flushed with updated label, before returning focus to it
              // avoids issue, where screen reader could fail to announce selected date after selection
              setTimeout(() => {
                if (lastFocusedElementRef.current instanceof HTMLElement) {
                  lastFocusedElementRef.current.focus();
                }
              });
            }
          }, [open, role]);
          const [clickAwayRef, onPaperClick, onPaperTouchStart] = useClickAwayListener(open, onBlur != null ? onBlur : onClose);
          const paperRef = reactExports.useRef(null);
          const handleRef = useForkRef(paperRef, containerRef);
          const handlePaperRef = useForkRef(handleRef, clickAwayRef);
          const ownerState = props;
          const classes = useUtilityClasses$g(ownerState);
          const {
              onClick: onPaperClickProp,
              onTouchStart: onPaperTouchStartProp
            } = PaperProps,
            otherPaperProps = _objectWithoutPropertiesLoose(PaperProps, _excluded$f);
          const handleKeyDown = event => {
            if (event.key === 'Escape') {
              // stop the propagation to avoid closing parent modal
              event.stopPropagation();
              onClose();
            }
          };
          const ActionBar = (_components$ActionBar = components == null ? void 0 : components.ActionBar) != null ? _components$ActionBar : PickersActionBar;
          const PaperContent = (components == null ? void 0 : components.PaperContent) || reactExports.Fragment;
          return /*#__PURE__*/jsxRuntimeExports.jsx(PickersPopperRoot, _extends({
            transition: true,
            role: role,
            open: open,
            anchorEl: anchorEl,
            onKeyDown: handleKeyDown,
            className: classes.root
          }, PopperProps, {
            children: ({
              TransitionProps,
              placement
            }) => /*#__PURE__*/jsxRuntimeExports.jsx(FocusTrap, _extends({
              open: open,
              disableAutoFocus: true // pickers are managing focus position manually
              // without this prop the focus is returned to the button before `aria-label` is updated
              // which would force screen readers to read too old label
              ,

              disableRestoreFocus: true,
              disableEnforceFocus: role === 'tooltip',
              isEnabled: () => true
            }, TrapFocusProps, {
              children: /*#__PURE__*/jsxRuntimeExports.jsx(TransitionComponent, _extends({}, TransitionProps, {
                children: /*#__PURE__*/jsxRuntimeExports.jsx(PickersPopperPaper, _extends({
                  tabIndex: -1,
                  elevation: 8,
                  ref: handlePaperRef,
                  onClick: event => {
                    onPaperClick(event);
                    if (onPaperClickProp) {
                      onPaperClickProp(event);
                    }
                  },
                  onTouchStart: event => {
                    onPaperTouchStart(event);
                    if (onPaperTouchStartProp) {
                      onPaperTouchStartProp(event);
                    }
                  },
                  ownerState: _extends({}, ownerState, {
                    placement
                  }),
                  className: classes.paper
                }, otherPaperProps, {
                  children: /*#__PURE__*/jsxRuntimeExports.jsxs(PaperContent, _extends({}, componentsProps == null ? void 0 : componentsProps.paperContent, {
                    children: [children, /*#__PURE__*/jsxRuntimeExports.jsx(ActionBar, _extends({
                      onAccept: onAccept,
                      onClear: onClear,
                      onCancel: onCancel,
                      onSetToday: onSetToday,
                      actions: []
                    }, componentsProps == null ? void 0 : componentsProps.actionBar))]
                  }))
                }))
              }))
            }))
          }));
        }
        function DesktopWrapper(props) {
          const {
            children,
            DateInputProps,
            KeyboardDateInputComponent,
            onClear,
            onDismiss,
            onCancel,
            onAccept,
            onSetToday,
            open,
            PopperProps,
            PaperProps,
            TransitionComponent,
            components,
            componentsProps
          } = props;
          const ownInputRef = reactExports.useRef(null);
          const inputRef = useForkRef(DateInputProps.inputRef, ownInputRef);
          return /*#__PURE__*/jsxRuntimeExports.jsxs(WrapperVariantContext.Provider, {
            value: "desktop",
            children: [/*#__PURE__*/jsxRuntimeExports.jsx(KeyboardDateInputComponent, _extends({}, DateInputProps, {
              inputRef: inputRef
            })), /*#__PURE__*/jsxRuntimeExports.jsx(PickersPopper, {
              role: "dialog",
              open: open,
              anchorEl: ownInputRef.current,
              TransitionComponent: TransitionComponent,
              PopperProps: PopperProps,
              PaperProps: PaperProps,
              onClose: onDismiss,
              onCancel: onCancel,
              onClear: onClear,
              onAccept: onAccept,
              onSetToday: onSetToday,
              components: components,
              componentsProps: componentsProps,
              children: children
            })]
          });
        }
        function useViews({
          onChange,
          onViewChange,
          openTo,
          view,
          views
        }) {
          var _views, _views2;
          const [openView, setOpenView] = useControlled({
            name: 'Picker',
            state: 'view',
            controlled: view,
            default: openTo && arrayIncludes(views, openTo) ? openTo : views[0]
          });
          const previousView = (_views = views[views.indexOf(openView) - 1]) != null ? _views : null;
          const nextView = (_views2 = views[views.indexOf(openView) + 1]) != null ? _views2 : null;
          const changeView = reactExports.useCallback(newView => {
            setOpenView(newView);
            if (onViewChange) {
              onViewChange(newView);
            }
          }, [setOpenView, onViewChange]);
          const openNext = reactExports.useCallback(() => {
            if (nextView) {
              changeView(nextView);
            }
          }, [nextView, changeView]);
          const handleChangeAndOpenNext = reactExports.useCallback((date, currentViewSelectionState) => {
            const isSelectionFinishedOnCurrentView = currentViewSelectionState === 'finish';
            const globalSelectionState = isSelectionFinishedOnCurrentView && Boolean(nextView) ? 'partial' : currentViewSelectionState;
            onChange(date, globalSelectionState);
            if (isSelectionFinishedOnCurrentView) {
              openNext();
            }
          }, [nextView, onChange, openNext]);
          return {
            handleChangeAndOpenNext,
            nextView,
            previousView,
            openNext,
            openView,
            setOpenView: changeView
          };
        }
        const CLOCK_WIDTH = 220;
        const CLOCK_HOUR_WIDTH = 36;
        const clockCenter = {
          x: CLOCK_WIDTH / 2,
          y: CLOCK_WIDTH / 2
        };
        const baseClockPoint = {
          x: clockCenter.x,
          y: 0
        };
        const cx = baseClockPoint.x - clockCenter.x;
        const cy = baseClockPoint.y - clockCenter.y;
        const rad2deg = rad => rad * (180 / Math.PI);
        const getAngleValue = (step, offsetX, offsetY) => {
          const x = offsetX - clockCenter.x;
          const y = offsetY - clockCenter.y;
          const atan = Math.atan2(cx, cy) - Math.atan2(x, y);
          let deg = rad2deg(atan);
          deg = Math.round(deg / step) * step;
          deg %= 360;
          const value = Math.floor(deg / step) || 0;
          const delta = x ** 2 + y ** 2;
          const distance = Math.sqrt(delta);
          return {
            value,
            distance
          };
        };
        const getMinutes = (offsetX, offsetY, step = 1) => {
          const angleStep = step * 6;
          let {
            value
          } = getAngleValue(angleStep, offsetX, offsetY);
          value = value * step % 60;
          return value;
        };
        const getHours = (offsetX, offsetY, ampm) => {
          const {
            value,
            distance
          } = getAngleValue(30, offsetX, offsetY);
          let hour = value || 12;
          if (!ampm) {
            if (distance < CLOCK_WIDTH / 2 - CLOCK_HOUR_WIDTH) {
              hour += 12;
              hour %= 24;
            }
          } else {
            hour %= 12;
          }
          return hour;
        };
        function getClockPointerUtilityClass(slot) {
          return generateUtilityClass('MuiClockPointer', slot);
        }
        generateUtilityClasses('MuiClockPointer', ['root', 'thumb']);
        const _excluded$e = ["className", "hasSelected", "isInner", "type", "value"];
        const useUtilityClasses$f = ownerState => {
          const {
            classes
          } = ownerState;
          const slots = {
            root: ['root'],
            thumb: ['thumb']
          };
          return composeClasses(slots, getClockPointerUtilityClass, classes);
        };
        const ClockPointerRoot = styled('div', {
          name: 'MuiClockPointer',
          slot: 'Root',
          overridesResolver: (_, styles) => styles.root
        })(({
          theme,
          ownerState
        }) => _extends({
          width: 2,
          backgroundColor: theme.palette.primary.main,
          position: 'absolute',
          left: 'calc(50% - 1px)',
          bottom: '50%',
          transformOrigin: 'center bottom 0px'
        }, ownerState.shouldAnimate && {
          transition: theme.transitions.create(['transform', 'height'])
        }));
        const ClockPointerThumb = styled('div', {
          name: 'MuiClockPointer',
          slot: 'Thumb',
          overridesResolver: (_, styles) => styles.thumb
        })(({
          theme,
          ownerState
        }) => _extends({
          width: 4,
          height: 4,
          backgroundColor: theme.palette.primary.contrastText,
          borderRadius: '50%',
          position: 'absolute',
          top: -21,
          left: `calc(50% - ${CLOCK_HOUR_WIDTH / 2}px)`,
          border: `${(CLOCK_HOUR_WIDTH - 4) / 2}px solid ${theme.palette.primary.main}`,
          boxSizing: 'content-box'
        }, ownerState.hasSelected && {
          backgroundColor: theme.palette.primary.main
        }));
        /**
         * @ignore - internal component.
         */

        function ClockPointer(inProps) {
          const props = useThemeProps({
            props: inProps,
            name: 'MuiClockPointer'
          });
          const {
              className,
              isInner,
              type,
              value
            } = props,
            other = _objectWithoutPropertiesLoose(props, _excluded$e);
          const previousType = reactExports.useRef(type);
          reactExports.useEffect(() => {
            previousType.current = type;
          }, [type]);
          const ownerState = _extends({}, props, {
            shouldAnimate: previousType.current !== type
          });
          const classes = useUtilityClasses$f(ownerState);
          const getAngleStyle = () => {
            const max = type === 'hours' ? 12 : 60;
            let angle = 360 / max * value;
            if (type === 'hours' && value > 12) {
              angle -= 360; // round up angle to max 360 degrees
            }

            return {
              height: Math.round((isInner ? 0.26 : 0.4) * CLOCK_WIDTH),
              transform: `rotateZ(${angle}deg)`
            };
          };
          return /*#__PURE__*/jsxRuntimeExports.jsx(ClockPointerRoot, _extends({
            style: getAngleStyle(),
            className: clsx(className, classes.root),
            ownerState: ownerState
          }, other, {
            children: /*#__PURE__*/jsxRuntimeExports.jsx(ClockPointerThumb, {
              ownerState: ownerState,
              className: classes.thumb
            })
          }));
        }
        function getClockUtilityClass(slot) {
          return generateUtilityClass('MuiClock', slot);
        }
        generateUtilityClasses('MuiClock', ['root', 'clock', 'wrapper', 'squareMask', 'pin', 'amButton', 'pmButton']);
        const useUtilityClasses$e = ownerState => {
          const {
            classes
          } = ownerState;
          const slots = {
            root: ['root'],
            clock: ['clock'],
            wrapper: ['wrapper'],
            squareMask: ['squareMask'],
            pin: ['pin'],
            amButton: ['amButton'],
            pmButton: ['pmButton']
          };
          return composeClasses(slots, getClockUtilityClass, classes);
        };
        const ClockRoot = styled('div', {
          name: 'MuiClock',
          slot: 'Root',
          overridesResolver: (_, styles) => styles.root
        })(({
          theme
        }) => ({
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          margin: theme.spacing(2)
        }));
        const ClockClock = styled('div', {
          name: 'MuiClock',
          slot: 'Clock',
          overridesResolver: (_, styles) => styles.clock
        })({
          backgroundColor: 'rgba(0,0,0,.07)',
          borderRadius: '50%',
          height: 220,
          width: 220,
          flexShrink: 0,
          position: 'relative',
          pointerEvents: 'none'
        });
        const ClockWrapper = styled('div', {
          name: 'MuiClock',
          slot: 'Wrapper',
          overridesResolver: (_, styles) => styles.wrapper
        })({
          '&:focus': {
            outline: 'none'
          }
        });
        const ClockSquareMask = styled('div', {
          name: 'MuiClock',
          slot: 'SquareMask',
          overridesResolver: (_, styles) => styles.squareMask
        })(({
          ownerState
        }) => _extends({
          width: '100%',
          height: '100%',
          position: 'absolute',
          pointerEvents: 'auto',
          outline: 0,
          // Disable scroll capabilities.
          touchAction: 'none',
          userSelect: 'none'
        }, ownerState.disabled ? {} : {
          '@media (pointer: fine)': {
            cursor: 'pointer',
            borderRadius: '50%'
          },
          '&:active': {
            cursor: 'move'
          }
        }));
        const ClockPin = styled('div', {
          name: 'MuiClock',
          slot: 'Pin',
          overridesResolver: (_, styles) => styles.pin
        })(({
          theme
        }) => ({
          width: 6,
          height: 6,
          borderRadius: '50%',
          backgroundColor: theme.palette.primary.main,
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)'
        }));
        const ClockAmButton = styled(IconButton, {
          name: 'MuiClock',
          slot: 'AmButton',
          overridesResolver: (_, styles) => styles.amButton
        })(({
          theme,
          ownerState
        }) => _extends({
          zIndex: 1,
          position: 'absolute',
          bottom: ownerState.ampmInClock ? 64 : 8,
          left: 8
        }, ownerState.meridiemMode === 'am' && {
          backgroundColor: theme.palette.primary.main,
          color: theme.palette.primary.contrastText,
          '&:hover': {
            backgroundColor: theme.palette.primary.light
          }
        }));
        const ClockPmButton = styled(IconButton, {
          name: 'MuiClock',
          slot: 'PmButton',
          overridesResolver: (_, styles) => styles.pmButton
        })(({
          theme,
          ownerState
        }) => _extends({
          zIndex: 1,
          position: 'absolute',
          bottom: ownerState.ampmInClock ? 64 : 8,
          right: 8
        }, ownerState.meridiemMode === 'pm' && {
          backgroundColor: theme.palette.primary.main,
          color: theme.palette.primary.contrastText,
          '&:hover': {
            backgroundColor: theme.palette.primary.light
          }
        }));
        /**
         * @ignore - internal component.
         */

        function Clock(inProps) {
          const props = useThemeProps({
            props: inProps,
            name: 'MuiClock'
          });
          const {
            ampm,
            ampmInClock,
            autoFocus,
            children,
            date,
            getClockLabelText,
            handleMeridiemChange,
            isTimeDisabled,
            meridiemMode,
            minutesStep = 1,
            onChange,
            selectedId,
            type,
            value,
            disabled,
            readOnly,
            className
          } = props;
          const ownerState = props;
          const utils = useUtils();
          const wrapperVariant = reactExports.useContext(WrapperVariantContext);
          const isMoving = reactExports.useRef(false);
          const classes = useUtilityClasses$e(ownerState);
          const isSelectedTimeDisabled = isTimeDisabled(value, type);
          const isPointerInner = !ampm && type === 'hours' && (value < 1 || value > 12);
          const handleValueChange = (newValue, isFinish) => {
            if (disabled || readOnly) {
              return;
            }
            if (isTimeDisabled(newValue, type)) {
              return;
            }
            onChange(newValue, isFinish);
          };
          const setTime = (event, isFinish) => {
            let {
              offsetX,
              offsetY
            } = event;
            if (offsetX === undefined) {
              const rect = event.target.getBoundingClientRect();
              offsetX = event.changedTouches[0].clientX - rect.left;
              offsetY = event.changedTouches[0].clientY - rect.top;
            }
            const newSelectedValue = type === 'seconds' || type === 'minutes' ? getMinutes(offsetX, offsetY, minutesStep) : getHours(offsetX, offsetY, Boolean(ampm));
            handleValueChange(newSelectedValue, isFinish);
          };
          const handleTouchMove = event => {
            isMoving.current = true;
            setTime(event, 'shallow');
          };
          const handleTouchEnd = event => {
            if (isMoving.current) {
              setTime(event, 'finish');
              isMoving.current = false;
            }
          };
          const handleMouseMove = event => {
            // event.buttons & PRIMARY_MOUSE_BUTTON
            if (event.buttons > 0) {
              setTime(event.nativeEvent, 'shallow');
            }
          };
          const handleMouseUp = event => {
            if (isMoving.current) {
              isMoving.current = false;
            }
            setTime(event.nativeEvent, 'finish');
          };
          const hasSelected = reactExports.useMemo(() => {
            if (type === 'hours') {
              return true;
            }
            return value % 5 === 0;
          }, [type, value]);
          const keyboardControlStep = type === 'minutes' ? minutesStep : 1;
          const listboxRef = reactExports.useRef(null); // Since this is rendered when a Popper is opened we can't use passive effects.
          // Focusing in passive effects in Popper causes scroll jump.

          useEnhancedEffect(() => {
            if (autoFocus) {
              // The ref not being resolved would be a bug in MUI.
              listboxRef.current.focus();
            }
          }, [autoFocus]);
          const handleKeyDown = event => {
            // TODO: Why this early exit?
            if (isMoving.current) {
              return;
            }
            switch (event.key) {
              case 'Home':
                // annulate both hours and minutes
                handleValueChange(0, 'partial');
                event.preventDefault();
                break;
              case 'End':
                handleValueChange(type === 'minutes' ? 59 : 23, 'partial');
                event.preventDefault();
                break;
              case 'ArrowUp':
                handleValueChange(value + keyboardControlStep, 'partial');
                event.preventDefault();
                break;
              case 'ArrowDown':
                handleValueChange(value - keyboardControlStep, 'partial');
                event.preventDefault();
                break;
            }
          };
          return /*#__PURE__*/jsxRuntimeExports.jsxs(ClockRoot, {
            className: clsx(className, classes.root),
            children: [/*#__PURE__*/jsxRuntimeExports.jsxs(ClockClock, {
              className: classes.clock,
              children: [/*#__PURE__*/jsxRuntimeExports.jsx(ClockSquareMask, {
                onTouchMove: handleTouchMove,
                onTouchEnd: handleTouchEnd,
                onMouseUp: handleMouseUp,
                onMouseMove: handleMouseMove,
                ownerState: {
                  disabled
                },
                className: classes.squareMask
              }), !isSelectedTimeDisabled && /*#__PURE__*/jsxRuntimeExports.jsxs(reactExports.Fragment, {
                children: [/*#__PURE__*/jsxRuntimeExports.jsx(ClockPin, {
                  className: classes.pin
                }), date && /*#__PURE__*/jsxRuntimeExports.jsx(ClockPointer, {
                  type: type,
                  value: value,
                  isInner: isPointerInner,
                  hasSelected: hasSelected
                })]
              }), /*#__PURE__*/jsxRuntimeExports.jsx(ClockWrapper, {
                "aria-activedescendant": selectedId,
                "aria-label": getClockLabelText(type, date, utils),
                ref: listboxRef,
                role: "listbox",
                onKeyDown: handleKeyDown,
                tabIndex: 0,
                className: classes.wrapper,
                children: children
              })]
            }), ampm && (wrapperVariant === 'desktop' || ampmInClock) && /*#__PURE__*/jsxRuntimeExports.jsxs(reactExports.Fragment, {
              children: [/*#__PURE__*/jsxRuntimeExports.jsx(ClockAmButton, {
                onClick: readOnly ? undefined : () => handleMeridiemChange('am'),
                disabled: disabled || meridiemMode === null,
                ownerState: ownerState,
                className: classes.amButton,
                children: /*#__PURE__*/jsxRuntimeExports.jsx(Typography, {
                  variant: "caption",
                  children: "AM"
                })
              }), /*#__PURE__*/jsxRuntimeExports.jsx(ClockPmButton, {
                disabled: disabled || meridiemMode === null,
                onClick: readOnly ? undefined : () => handleMeridiemChange('pm'),
                ownerState: ownerState,
                className: classes.pmButton,
                children: /*#__PURE__*/jsxRuntimeExports.jsx(Typography, {
                  variant: "caption",
                  children: "PM"
                })
              })]
            })]
          });
        }
        const buildDeprecatedPropsWarning = message => {
          {
            return () => {};
          }
        };
        function getClockNumberUtilityClass(slot) {
          return generateUtilityClass('MuiClockNumber', slot);
        }
        const clockNumberClasses = generateUtilityClasses('MuiClockNumber', ['root', 'selected', 'disabled']);
        const _excluded$d = ["className", "disabled", "index", "inner", "label", "selected"];
        const useUtilityClasses$d = ownerState => {
          const {
            classes,
            selected,
            disabled
          } = ownerState;
          const slots = {
            root: ['root', selected && 'selected', disabled && 'disabled']
          };
          return composeClasses(slots, getClockNumberUtilityClass, classes);
        };
        const ClockNumberRoot = styled('span', {
          name: 'MuiClockNumber',
          slot: 'Root',
          overridesResolver: (_, styles) => [styles.root, {
            [`&.${clockNumberClasses.disabled}`]: styles.disabled
          }, {
            [`&.${clockNumberClasses.selected}`]: styles.selected
          }]
        })(({
          theme,
          ownerState
        }) => _extends({
          height: CLOCK_HOUR_WIDTH,
          width: CLOCK_HOUR_WIDTH,
          position: 'absolute',
          left: `calc((100% - ${CLOCK_HOUR_WIDTH}px) / 2)`,
          display: 'inline-flex',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: '50%',
          color: theme.palette.text.primary,
          fontFamily: theme.typography.fontFamily,
          '&:focused': {
            backgroundColor: theme.palette.background.paper
          },
          [`&.${clockNumberClasses.selected}`]: {
            color: theme.palette.primary.contrastText
          },
          [`&.${clockNumberClasses.disabled}`]: {
            pointerEvents: 'none',
            color: theme.palette.text.disabled
          }
        }, ownerState.inner && _extends({}, theme.typography.body2, {
          color: theme.palette.text.secondary
        })));
        /**
         * @ignore - internal component.
         */

        function ClockNumber(inProps) {
          const props = useThemeProps({
            props: inProps,
            name: 'MuiClockNumber'
          });
          const {
              className,
              disabled,
              index,
              inner,
              label,
              selected
            } = props,
            other = _objectWithoutPropertiesLoose(props, _excluded$d);
          const ownerState = props;
          const classes = useUtilityClasses$d(ownerState);
          const angle = index % 12 / 12 * Math.PI * 2 - Math.PI / 2;
          const length = (CLOCK_WIDTH - CLOCK_HOUR_WIDTH - 2) / 2 * (inner ? 0.65 : 1);
          const x = Math.round(Math.cos(angle) * length);
          const y = Math.round(Math.sin(angle) * length);
          return /*#__PURE__*/jsxRuntimeExports.jsx(ClockNumberRoot, _extends({
            className: clsx(className, classes.root),
            "aria-disabled": disabled ? true : undefined,
            "aria-selected": selected ? true : undefined,
            role: "option",
            style: {
              transform: `translate(${x}px, ${y + (CLOCK_WIDTH - CLOCK_HOUR_WIDTH) / 2}px`
            },
            ownerState: ownerState
          }, other, {
            children: label
          }));
        }

        /**
         * @ignore - internal component.
         */
        const getHourNumbers = ({
          ampm,
          date,
          getClockNumberText,
          isDisabled,
          selectedId,
          utils
        }) => {
          const currentHours = date ? utils.getHours(date) : null;
          const hourNumbers = [];
          const startHour = ampm ? 1 : 0;
          const endHour = ampm ? 12 : 23;
          const isSelected = hour => {
            if (currentHours === null) {
              return false;
            }
            if (ampm) {
              if (hour === 12) {
                return currentHours === 12 || currentHours === 0;
              }
              return currentHours === hour || currentHours - 12 === hour;
            }
            return currentHours === hour;
          };
          for (let hour = startHour; hour <= endHour; hour += 1) {
            let label = hour.toString();
            if (hour === 0) {
              label = '00';
            }
            const inner = !ampm && (hour === 0 || hour > 12);
            label = utils.formatNumber(label);
            const selected = isSelected(hour);
            hourNumbers.push( /*#__PURE__*/jsxRuntimeExports.jsx(ClockNumber, {
              id: selected ? selectedId : undefined,
              index: hour,
              inner: inner,
              selected: selected,
              disabled: isDisabled(hour),
              label: label,
              "aria-label": getClockNumberText(label)
            }, hour));
          }
          return hourNumbers;
        };
        const getMinutesNumbers = ({
          utils,
          value,
          isDisabled,
          getClockNumberText,
          selectedId
        }) => {
          const f = utils.formatNumber;
          return [[5, f('05')], [10, f('10')], [15, f('15')], [20, f('20')], [25, f('25')], [30, f('30')], [35, f('35')], [40, f('40')], [45, f('45')], [50, f('50')], [55, f('55')], [0, f('00')]].map(([numberValue, label], index) => {
            const selected = numberValue === value;
            return /*#__PURE__*/jsxRuntimeExports.jsx(ClockNumber, {
              label: label,
              id: selected ? selectedId : undefined,
              index: index + 1,
              inner: false,
              disabled: isDisabled(numberValue),
              selected: selected,
              "aria-label": getClockNumberText(label)
            }, numberValue);
          });
        };
        function getPickersArrowSwitcherUtilityClass(slot) {
          return generateUtilityClass('MuiPickersArrowSwitcher', slot);
        }
        generateUtilityClasses('MuiPickersArrowSwitcher', ['root', 'spacer', 'button']);
        const _excluded$c = ["children", "className", "components", "componentsProps", "isLeftDisabled", "isLeftHidden", "isRightDisabled", "isRightHidden", "leftArrowButtonText", "onLeftClick", "onRightClick", "rightArrowButtonText"];
        const useUtilityClasses$c = ownerState => {
          const {
            classes
          } = ownerState;
          const slots = {
            root: ['root'],
            spacer: ['spacer'],
            button: ['button']
          };
          return composeClasses(slots, getPickersArrowSwitcherUtilityClass, classes);
        };
        const PickersArrowSwitcherRoot = styled('div', {
          name: 'MuiPickersArrowSwitcher',
          slot: 'Root',
          overridesResolver: (props, styles) => styles.root
        })({
          display: 'flex'
        });
        const PickersArrowSwitcherSpacer = styled('div', {
          name: 'MuiPickersArrowSwitcher',
          slot: 'Spacer',
          overridesResolver: (props, styles) => styles.spacer
        })(({
          theme
        }) => ({
          width: theme.spacing(3)
        }));
        const PickersArrowSwitcherButton = styled(IconButton, {
          name: 'MuiPickersArrowSwitcher',
          slot: 'Button',
          overridesResolver: (props, styles) => styles.button
        })(({
          ownerState
        }) => _extends({}, ownerState.hidden && {
          visibility: 'hidden'
        }));
        const PickersArrowSwitcher = /*#__PURE__*/reactExports.forwardRef(function PickersArrowSwitcher(inProps, ref) {
          const props = useThemeProps({
            props: inProps,
            name: 'MuiPickersArrowSwitcher'
          });
          const {
              children,
              className,
              components,
              componentsProps,
              isLeftDisabled,
              isLeftHidden,
              isRightDisabled,
              isRightHidden,
              leftArrowButtonText,
              onLeftClick,
              onRightClick,
              rightArrowButtonText
            } = props,
            other = _objectWithoutPropertiesLoose(props, _excluded$c);
          const theme = useTheme$1();
          const isRtl = theme.direction === 'rtl';
          const leftArrowButtonProps = (componentsProps == null ? void 0 : componentsProps.leftArrowButton) || {};
          const LeftArrowIcon = (components == null ? void 0 : components.LeftArrowIcon) || ArrowLeft;
          const rightArrowButtonProps = (componentsProps == null ? void 0 : componentsProps.rightArrowButton) || {};
          const RightArrowIcon = (components == null ? void 0 : components.RightArrowIcon) || ArrowRight;
          const ownerState = props;
          const classes = useUtilityClasses$c(ownerState);
          return /*#__PURE__*/jsxRuntimeExports.jsxs(PickersArrowSwitcherRoot, _extends({
            ref: ref,
            className: clsx(classes.root, className),
            ownerState: ownerState
          }, other, {
            children: [/*#__PURE__*/jsxRuntimeExports.jsx(PickersArrowSwitcherButton, _extends({
              as: components == null ? void 0 : components.LeftArrowButton,
              size: "small",
              "aria-label": leftArrowButtonText,
              title: leftArrowButtonText,
              disabled: isLeftDisabled,
              edge: "end",
              onClick: onLeftClick
            }, leftArrowButtonProps, {
              className: clsx(classes.button, leftArrowButtonProps.className),
              ownerState: _extends({}, ownerState, leftArrowButtonProps, {
                hidden: isLeftHidden
              }),
              children: isRtl ? /*#__PURE__*/jsxRuntimeExports.jsx(RightArrowIcon, {}) : /*#__PURE__*/jsxRuntimeExports.jsx(LeftArrowIcon, {})
            })), children ? /*#__PURE__*/jsxRuntimeExports.jsx(Typography, {
              variant: "subtitle1",
              component: "span",
              children: children
            }) : /*#__PURE__*/jsxRuntimeExports.jsx(PickersArrowSwitcherSpacer, {
              className: classes.spacer,
              ownerState: ownerState
            }), /*#__PURE__*/jsxRuntimeExports.jsx(PickersArrowSwitcherButton, _extends({
              as: components == null ? void 0 : components.RightArrowButton,
              size: "small",
              "aria-label": rightArrowButtonText,
              title: rightArrowButtonText,
              edge: "start",
              disabled: isRightDisabled,
              onClick: onRightClick
            }, rightArrowButtonProps, {
              className: clsx(classes.button, rightArrowButtonProps.className),
              ownerState: _extends({}, ownerState, rightArrowButtonProps, {
                hidden: isRightHidden
              }),
              children: isRtl ? /*#__PURE__*/jsxRuntimeExports.jsx(LeftArrowIcon, {}) : /*#__PURE__*/jsxRuntimeExports.jsx(RightArrowIcon, {})
            }))]
          }));
        });
        const getMeridiem = (date, utils) => {
          if (!date) {
            return null;
          }
          return utils.getHours(date) >= 12 ? 'pm' : 'am';
        };
        const convertValueToMeridiem = (value, meridiem, ampm) => {
          if (ampm) {
            const currentMeridiem = value >= 12 ? 'pm' : 'am';
            if (currentMeridiem !== meridiem) {
              return meridiem === 'am' ? value - 12 : value + 12;
            }
          }
          return value;
        };
        const convertToMeridiem = (time, meridiem, ampm, utils) => {
          const newHoursAmount = convertValueToMeridiem(utils.getHours(time), meridiem, ampm);
          return utils.setHours(time, newHoursAmount);
        };
        const getSecondsInDay = (date, utils) => {
          return utils.getHours(date) * 3600 + utils.getMinutes(date) * 60 + utils.getSeconds(date);
        };
        const createIsAfterIgnoreDatePart = exports('h', (disableIgnoringDatePartForTimeValidation = false, utils) => (dateLeft, dateRight) => {
          if (disableIgnoringDatePartForTimeValidation) {
            return utils.isAfter(dateLeft, dateRight);
          }
          return getSecondsInDay(dateLeft, utils) > getSecondsInDay(dateRight, utils);
        });
        function useNextMonthDisabled(month, {
          disableFuture,
          maxDate
        }) {
          const utils = useUtils();
          return reactExports.useMemo(() => {
            const now = utils.date();
            const lastEnabledMonth = utils.startOfMonth(disableFuture && utils.isBefore(now, maxDate) ? now : maxDate);
            return !utils.isAfter(lastEnabledMonth, month);
          }, [disableFuture, maxDate, month, utils]);
        }
        function usePreviousMonthDisabled(month, {
          disablePast,
          minDate
        }) {
          const utils = useUtils();
          return reactExports.useMemo(() => {
            const now = utils.date();
            const firstEnabledMonth = utils.startOfMonth(disablePast && utils.isAfter(now, minDate) ? now : minDate);
            return !utils.isBefore(firstEnabledMonth, month);
          }, [disablePast, minDate, month, utils]);
        }
        function useMeridiemMode(date, ampm, onChange) {
          const utils = useUtils();
          const meridiemMode = getMeridiem(date, utils);
          const handleMeridiemChange = reactExports.useCallback(mode => {
            const timeWithMeridiem = date == null ? null : convertToMeridiem(date, mode, Boolean(ampm), utils);
            onChange(timeWithMeridiem, 'partial');
          }, [ampm, date, onChange, utils]);
          return {
            meridiemMode,
            handleMeridiemChange
          };
        }
        function getClockPickerUtilityClass(slot) {
          return generateUtilityClass('MuiClockPicker', slot);
        }
        generateUtilityClasses('MuiClockPicker', ['root', 'arrowSwitcher']);
        const DAY_SIZE = 36;
        const DAY_MARGIN = 2;
        const DIALOG_WIDTH = 320;
        const VIEW_HEIGHT = 358;
        const PickerViewRoot = styled('div')({
          overflowX: 'hidden',
          width: DIALOG_WIDTH,
          maxHeight: VIEW_HEIGHT,
          display: 'flex',
          flexDirection: 'column',
          margin: '0 auto'
        });
        const useUtilityClasses$b = ownerState => {
          const {
            classes
          } = ownerState;
          const slots = {
            root: ['root'],
            arrowSwitcher: ['arrowSwitcher']
          };
          return composeClasses(slots, getClockPickerUtilityClass, classes);
        };
        const ClockPickerRoot = styled(PickerViewRoot, {
          name: 'MuiClockPicker',
          slot: 'Root',
          overridesResolver: (props, styles) => styles.root
        })({
          display: 'flex',
          flexDirection: 'column'
        });
        const ClockPickerArrowSwitcher = styled(PickersArrowSwitcher, {
          name: 'MuiClockPicker',
          slot: 'ArrowSwitcher',
          overridesResolver: (props, styles) => styles.arrowSwitcher
        })({
          position: 'absolute',
          right: 12,
          top: 15
        });
        const deprecatedPropsWarning$1 = buildDeprecatedPropsWarning();
        /**
         *
         * API:
         *
         * - [ClockPicker API](https://mui.com/x/api/date-pickers/clock-picker/)
         */

        const ClockPicker = /*#__PURE__*/reactExports.forwardRef(function ClockPicker(inProps, ref) {
          const props = useThemeProps({
            props: inProps,
            name: 'MuiClockPicker'
          });
          const {
            ampm = false,
            ampmInClock = false,
            autoFocus,
            components,
            componentsProps,
            date,
            disableIgnoringDatePartForTimeValidation,
            getClockLabelText: getClockLabelTextProp,
            getHoursClockNumberText: getHoursClockNumberTextProp,
            getMinutesClockNumberText: getMinutesClockNumberTextProp,
            getSecondsClockNumberText: getSecondsClockNumberTextProp,
            leftArrowButtonText: leftArrowButtonTextProp,
            maxTime,
            minTime,
            minutesStep = 1,
            rightArrowButtonText: rightArrowButtonTextProp,
            shouldDisableTime,
            showViewSwitcher,
            onChange,
            view,
            views = ['hours', 'minutes'],
            openTo,
            onViewChange,
            className,
            disabled,
            readOnly
          } = props;
          deprecatedPropsWarning$1({
            leftArrowButtonText: leftArrowButtonTextProp,
            rightArrowButtonText: rightArrowButtonTextProp,
            getClockLabelText: getClockLabelTextProp,
            getHoursClockNumberText: getHoursClockNumberTextProp,
            getMinutesClockNumberText: getMinutesClockNumberTextProp,
            getSecondsClockNumberText: getSecondsClockNumberTextProp
          });
          const localeText = useLocaleText();
          const leftArrowButtonText = leftArrowButtonTextProp != null ? leftArrowButtonTextProp : localeText.openPreviousView;
          const rightArrowButtonText = rightArrowButtonTextProp != null ? rightArrowButtonTextProp : localeText.openNextView;
          const getClockLabelText = getClockLabelTextProp != null ? getClockLabelTextProp : localeText.clockLabelText;
          const getHoursClockNumberText = getHoursClockNumberTextProp != null ? getHoursClockNumberTextProp : localeText.hoursClockNumberText;
          const getMinutesClockNumberText = getMinutesClockNumberTextProp != null ? getMinutesClockNumberTextProp : localeText.minutesClockNumberText;
          const getSecondsClockNumberText = getSecondsClockNumberTextProp != null ? getSecondsClockNumberTextProp : localeText.secondsClockNumberText;
          const {
            openView,
            setOpenView,
            nextView,
            previousView,
            handleChangeAndOpenNext
          } = useViews({
            view,
            views,
            openTo,
            onViewChange,
            onChange
          });
          const now = useNow();
          const utils = useUtils();
          const dateOrMidnight = reactExports.useMemo(() => date || utils.setSeconds(utils.setMinutes(utils.setHours(now, 0), 0), 0), [date, now, utils]);
          const {
            meridiemMode,
            handleMeridiemChange
          } = useMeridiemMode(dateOrMidnight, ampm, handleChangeAndOpenNext);
          const isTimeDisabled = reactExports.useCallback((rawValue, viewType) => {
            const isAfter = createIsAfterIgnoreDatePart(disableIgnoringDatePartForTimeValidation, utils);
            const containsValidTime = ({
              start,
              end
            }) => {
              if (minTime && isAfter(minTime, end)) {
                return false;
              }
              if (maxTime && isAfter(start, maxTime)) {
                return false;
              }
              return true;
            };
            const isValidValue = (value, step = 1) => {
              if (value % step !== 0) {
                return false;
              }
              if (shouldDisableTime) {
                return !shouldDisableTime(value, viewType);
              }
              return true;
            };
            switch (viewType) {
              case 'hours':
                {
                  const value = convertValueToMeridiem(rawValue, meridiemMode, ampm);
                  const dateWithNewHours = utils.setHours(dateOrMidnight, value);
                  const start = utils.setSeconds(utils.setMinutes(dateWithNewHours, 0), 0);
                  const end = utils.setSeconds(utils.setMinutes(dateWithNewHours, 59), 59);
                  return !containsValidTime({
                    start,
                    end
                  }) || !isValidValue(value);
                }
              case 'minutes':
                {
                  const dateWithNewMinutes = utils.setMinutes(dateOrMidnight, rawValue);
                  const start = utils.setSeconds(dateWithNewMinutes, 0);
                  const end = utils.setSeconds(dateWithNewMinutes, 59);
                  return !containsValidTime({
                    start,
                    end
                  }) || !isValidValue(rawValue, minutesStep);
                }
              case 'seconds':
                {
                  const dateWithNewSeconds = utils.setSeconds(dateOrMidnight, rawValue);
                  const start = dateWithNewSeconds;
                  const end = dateWithNewSeconds;
                  return !containsValidTime({
                    start,
                    end
                  }) || !isValidValue(rawValue);
                }
              default:
                throw new Error('not supported');
            }
          }, [ampm, dateOrMidnight, disableIgnoringDatePartForTimeValidation, maxTime, meridiemMode, minTime, minutesStep, shouldDisableTime, utils]);
          const selectedId = useId();
          const viewProps = reactExports.useMemo(() => {
            switch (openView) {
              case 'hours':
                {
                  const handleHoursChange = (value, isFinish) => {
                    const valueWithMeridiem = convertValueToMeridiem(value, meridiemMode, ampm);
                    handleChangeAndOpenNext(utils.setHours(dateOrMidnight, valueWithMeridiem), isFinish);
                  };
                  return {
                    onChange: handleHoursChange,
                    value: utils.getHours(dateOrMidnight),
                    children: getHourNumbers({
                      date,
                      utils,
                      ampm,
                      onChange: handleHoursChange,
                      getClockNumberText: getHoursClockNumberText,
                      isDisabled: value => disabled || isTimeDisabled(value, 'hours'),
                      selectedId
                    })
                  };
                }
              case 'minutes':
                {
                  const minutesValue = utils.getMinutes(dateOrMidnight);
                  const handleMinutesChange = (value, isFinish) => {
                    handleChangeAndOpenNext(utils.setMinutes(dateOrMidnight, value), isFinish);
                  };
                  return {
                    value: minutesValue,
                    onChange: handleMinutesChange,
                    children: getMinutesNumbers({
                      utils,
                      value: minutesValue,
                      onChange: handleMinutesChange,
                      getClockNumberText: getMinutesClockNumberText,
                      isDisabled: value => disabled || isTimeDisabled(value, 'minutes'),
                      selectedId
                    })
                  };
                }
              case 'seconds':
                {
                  const secondsValue = utils.getSeconds(dateOrMidnight);
                  const handleSecondsChange = (value, isFinish) => {
                    handleChangeAndOpenNext(utils.setSeconds(dateOrMidnight, value), isFinish);
                  };
                  return {
                    value: secondsValue,
                    onChange: handleSecondsChange,
                    children: getMinutesNumbers({
                      utils,
                      value: secondsValue,
                      onChange: handleSecondsChange,
                      getClockNumberText: getSecondsClockNumberText,
                      isDisabled: value => disabled || isTimeDisabled(value, 'seconds'),
                      selectedId
                    })
                  };
                }
              default:
                throw new Error('You must provide the type for ClockView');
            }
          }, [openView, utils, date, ampm, getHoursClockNumberText, getMinutesClockNumberText, getSecondsClockNumberText, meridiemMode, handleChangeAndOpenNext, dateOrMidnight, isTimeDisabled, selectedId, disabled]);
          const ownerState = props;
          const classes = useUtilityClasses$b(ownerState);
          return /*#__PURE__*/jsxRuntimeExports.jsxs(ClockPickerRoot, {
            ref: ref,
            className: clsx(classes.root, className),
            ownerState: ownerState,
            children: [showViewSwitcher && /*#__PURE__*/jsxRuntimeExports.jsx(ClockPickerArrowSwitcher, {
              className: classes.arrowSwitcher,
              leftArrowButtonText: leftArrowButtonText,
              rightArrowButtonText: rightArrowButtonText,
              components: components,
              componentsProps: componentsProps,
              onLeftClick: () => setOpenView(previousView),
              onRightClick: () => setOpenView(nextView),
              isLeftDisabled: !previousView,
              isRightDisabled: !nextView,
              ownerState: ownerState
            }), /*#__PURE__*/jsxRuntimeExports.jsx(Clock, _extends({
              autoFocus: autoFocus,
              date: date,
              ampmInClock: ampmInClock,
              type: openView,
              ampm: ampm,
              getClockLabelText: getClockLabelText,
              minutesStep: minutesStep,
              isTimeDisabled: isTimeDisabled,
              meridiemMode: meridiemMode,
              handleMeridiemChange: handleMeridiemChange,
              selectedId: selectedId,
              disabled: disabled,
              readOnly: readOnly
            }, viewProps))]
          });
        });
        function getPickersMonthUtilityClass(slot) {
          // TODO v6 Rename 'PrivatePickersMonth' to 'MuiPickersMonth' to follow convention
          return generateUtilityClass('PrivatePickersMonth', slot);
        }
        const pickersMonthClasses = generateUtilityClasses(
        // TODO v6 Rename 'PrivatePickersMonth' to 'MuiPickersMonth' to follow convention
        'PrivatePickersMonth', ['root', 'selected']);
        const _excluded$b = ["disabled", "onSelect", "selected", "value", "tabIndex", "hasFocus", "onFocus", "onBlur"];
        const useUtilityClasses$a = ownerState => {
          const {
            classes,
            selected
          } = ownerState;
          const slots = {
            root: ['root', selected && 'selected']
          };
          return composeClasses(slots, getPickersMonthUtilityClass, classes);
        };
        const PickersMonthRoot = styled(Typography, {
          name: 'PrivatePickersMonth',
          slot: 'Root',
          overridesResolver: (_, styles) => [styles.root, {
            [`&.${pickersMonthClasses.selected}`]: styles.selected
          }]
        })(({
          theme
        }) => _extends({
          flex: '1 0 33.33%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'unset',
          backgroundColor: 'transparent',
          border: 0,
          outline: 0
        }, theme.typography.subtitle1, {
          margin: '8px 0',
          height: 36,
          borderRadius: 18,
          cursor: 'pointer',
          '&:focus, &:hover': {
            backgroundColor: alpha(theme.palette.action.active, theme.palette.action.hoverOpacity)
          },
          '&:disabled': {
            pointerEvents: 'none',
            color: theme.palette.text.secondary
          },
          [`&.${pickersMonthClasses.selected}`]: {
            color: theme.palette.primary.contrastText,
            backgroundColor: theme.palette.primary.main,
            '&:focus, &:hover': {
              backgroundColor: theme.palette.primary.dark
            }
          }
        }));
        const noop$2 = () => {};
        /**
         * @ignore - do not document.
         */

        const PickersMonth = props => {
          // TODO v6 add 'useThemeProps' once the component class names are aligned
          const {
              disabled,
              onSelect,
              selected,
              value,
              tabIndex,
              hasFocus,
              onFocus = noop$2,
              onBlur = noop$2
            } = props,
            other = _objectWithoutPropertiesLoose(props, _excluded$b);
          const classes = useUtilityClasses$a(props);
          const handleSelection = () => {
            onSelect(value);
          };
          const ref = reactExports.useRef(null);
          useEnhancedEffect(() => {
            if (hasFocus) {
              var _ref$current;
              (_ref$current = ref.current) == null ? void 0 : _ref$current.focus();
            }
          }, [hasFocus]);
          return /*#__PURE__*/jsxRuntimeExports.jsx(PickersMonthRoot, _extends({
            ref: ref,
            component: "button",
            type: "button",
            className: classes.root,
            tabIndex: tabIndex,
            onClick: handleSelection,
            onKeyDown: onSpaceOrEnter(handleSelection),
            color: selected ? 'primary' : undefined,
            variant: selected ? 'h5' : 'subtitle1',
            disabled: disabled,
            onFocus: event => onFocus(event, value),
            onBlur: event => onBlur(event, value)
          }, other));
        };
        function getMonthPickerUtilityClass(slot) {
          return generateUtilityClass('MuiMonthPicker', slot);
        }
        generateUtilityClasses('MuiMonthPicker', ['root']);
        const _excluded$a = ["className", "date", "disabled", "disableFuture", "disablePast", "maxDate", "minDate", "onChange", "shouldDisableMonth", "readOnly", "disableHighlightToday", "autoFocus", "onMonthFocus", "hasFocus", "onFocusedViewChange"];
        const useUtilityClasses$9 = ownerState => {
          const {
            classes
          } = ownerState;
          const slots = {
            root: ['root']
          };
          return composeClasses(slots, getMonthPickerUtilityClass, classes);
        };
        function useMonthPickerDefaultizedProps(props, name) {
          const utils = useUtils();
          const defaultDates = useDefaultDates();
          const themeProps = useThemeProps({
            props,
            name
          });
          return _extends({
            disableFuture: false,
            disablePast: false
          }, themeProps, {
            minDate: parseNonNullablePickerDate(utils, themeProps.minDate, defaultDates.minDate),
            maxDate: parseNonNullablePickerDate(utils, themeProps.maxDate, defaultDates.maxDate)
          });
        }
        const MonthPickerRoot = styled('div', {
          name: 'MuiMonthPicker',
          slot: 'Root',
          overridesResolver: (props, styles) => styles.root
        })({
          width: 310,
          display: 'flex',
          flexWrap: 'wrap',
          alignContent: 'stretch',
          margin: '0 4px'
        });
        const MonthPicker = /*#__PURE__*/reactExports.forwardRef(function MonthPicker(inProps, ref) {
          const utils = useUtils();
          const now = useNow();
          const props = useMonthPickerDefaultizedProps(inProps, 'MuiMonthPicker');
          const {
              className,
              date,
              disabled,
              disableFuture,
              disablePast,
              maxDate,
              minDate,
              onChange,
              shouldDisableMonth,
              readOnly,
              disableHighlightToday,
              autoFocus = false,
              onMonthFocus,
              hasFocus,
              onFocusedViewChange
            } = props,
            other = _objectWithoutPropertiesLoose(props, _excluded$a);
          const ownerState = props;
          const classes = useUtilityClasses$9(ownerState);
          const theme = useTheme$2();
          const selectedDateOrStartOfMonth = reactExports.useMemo(() => date != null ? date : utils.startOfMonth(now), [now, utils, date]);
          const selectedMonth = reactExports.useMemo(() => {
            if (date != null) {
              return utils.getMonth(date);
            }
            if (disableHighlightToday) {
              return null;
            }
            return utils.getMonth(now);
          }, [now, date, utils, disableHighlightToday]);
          const [focusedMonth, setFocusedMonth] = reactExports.useState(() => selectedMonth || utils.getMonth(now));
          const isMonthDisabled = reactExports.useCallback(month => {
            const firstEnabledMonth = utils.startOfMonth(disablePast && utils.isAfter(now, minDate) ? now : minDate);
            const lastEnabledMonth = utils.startOfMonth(disableFuture && utils.isBefore(now, maxDate) ? now : maxDate);
            if (utils.isBefore(month, firstEnabledMonth)) {
              return true;
            }
            if (utils.isAfter(month, lastEnabledMonth)) {
              return true;
            }
            if (!shouldDisableMonth) {
              return false;
            }
            return shouldDisableMonth(month);
          }, [disableFuture, disablePast, maxDate, minDate, now, shouldDisableMonth, utils]);
          const onMonthSelect = month => {
            if (readOnly) {
              return;
            }
            const newDate = utils.setMonth(selectedDateOrStartOfMonth, month);
            onChange(newDate, 'finish');
          };
          const [internalHasFocus, setInternalHasFocus] = useControlled({
            name: 'MonthPicker',
            state: 'hasFocus',
            controlled: hasFocus,
            default: autoFocus
          });
          const changeHasFocus = reactExports.useCallback(newHasFocus => {
            setInternalHasFocus(newHasFocus);
            if (onFocusedViewChange) {
              onFocusedViewChange(newHasFocus);
            }
          }, [setInternalHasFocus, onFocusedViewChange]);
          const focusMonth = reactExports.useCallback(month => {
            if (!isMonthDisabled(utils.setMonth(selectedDateOrStartOfMonth, month))) {
              setFocusedMonth(month);
              changeHasFocus(true);
              if (onMonthFocus) {
                onMonthFocus(month);
              }
            }
          }, [isMonthDisabled, utils, selectedDateOrStartOfMonth, changeHasFocus, onMonthFocus]);
          reactExports.useEffect(() => {
            setFocusedMonth(prevFocusedMonth => selectedMonth !== null && prevFocusedMonth !== selectedMonth ? selectedMonth : prevFocusedMonth);
          }, [selectedMonth]);
          const handleKeyDown = useEventCallback(event => {
            const monthsInYear = 12;
            const monthsInRow = 3;
            switch (event.key) {
              case 'ArrowUp':
                focusMonth((monthsInYear + focusedMonth - monthsInRow) % monthsInYear);
                event.preventDefault();
                break;
              case 'ArrowDown':
                focusMonth((monthsInYear + focusedMonth + monthsInRow) % monthsInYear);
                event.preventDefault();
                break;
              case 'ArrowLeft':
                focusMonth((monthsInYear + focusedMonth + (theme.direction === 'ltr' ? -1 : 1)) % monthsInYear);
                event.preventDefault();
                break;
              case 'ArrowRight':
                focusMonth((monthsInYear + focusedMonth + (theme.direction === 'ltr' ? 1 : -1)) % monthsInYear);
                event.preventDefault();
                break;
            }
          });
          const handleMonthFocus = reactExports.useCallback((event, month) => {
            focusMonth(month);
          }, [focusMonth]);
          const handleMonthBlur = reactExports.useCallback(() => {
            changeHasFocus(false);
          }, [changeHasFocus]);
          const currentMonthNumber = utils.getMonth(now);
          return /*#__PURE__*/jsxRuntimeExports.jsx(MonthPickerRoot, _extends({
            ref: ref,
            className: clsx(classes.root, className),
            ownerState: ownerState,
            onKeyDown: handleKeyDown
          }, other, {
            children: utils.getMonthArray(selectedDateOrStartOfMonth).map(month => {
              const monthNumber = utils.getMonth(month);
              const monthText = utils.format(month, 'monthShort');
              const isDisabled = disabled || isMonthDisabled(month);
              return /*#__PURE__*/jsxRuntimeExports.jsx(PickersMonth, {
                value: monthNumber,
                selected: monthNumber === selectedMonth,
                tabIndex: monthNumber === focusedMonth && !isDisabled ? 0 : -1,
                hasFocus: internalHasFocus && monthNumber === focusedMonth,
                onSelect: onMonthSelect,
                onFocus: handleMonthFocus,
                onBlur: handleMonthBlur,
                disabled: isDisabled,
                "aria-current": currentMonthNumber === monthNumber ? 'date' : undefined,
                children: monthText
              }, monthText);
            })
          }));
        });
        function useValidation(props, validate, isSameError) {
          const {
            value,
            onError
          } = props;
          const adapter = useLocalizationContext();
          const previousValidationErrorRef = reactExports.useRef(null);
          const validationError = validate({
            adapter,
            value,
            props
          });
          reactExports.useEffect(() => {
            if (onError && !isSameError(validationError, previousValidationErrorRef.current)) {
              onError(validationError, value);
            }
            previousValidationErrorRef.current = validationError;
          }, [isSameError, onError, previousValidationErrorRef, validationError, value]);
          return validationError;
        }
        const validateDate = exports('v', ({
          props,
          value,
          adapter
        }) => {
          const now = adapter.utils.date();
          const date = adapter.utils.date(value);
          const minDate = parseNonNullablePickerDate(adapter.utils, props.minDate, adapter.defaultDates.minDate);
          const maxDate = parseNonNullablePickerDate(adapter.utils, props.maxDate, adapter.defaultDates.maxDate);
          if (date === null) {
            return null;
          }
          switch (true) {
            case !adapter.utils.isValid(value):
              return 'invalidDate';
            case Boolean(props.shouldDisableDate && props.shouldDisableDate(date)):
              return 'shouldDisableDate';
            case Boolean(props.disableFuture && adapter.utils.isAfterDay(date, now)):
              return 'disableFuture';
            case Boolean(props.disablePast && adapter.utils.isBeforeDay(date, now)):
              return 'disablePast';
            case Boolean(minDate && adapter.utils.isBeforeDay(date, minDate)):
              return 'minDate';
            case Boolean(maxDate && adapter.utils.isAfterDay(date, maxDate)):
              return 'maxDate';
            default:
              return null;
          }
        });
        const useIsDayDisabled = ({
          shouldDisableDate,
          minDate,
          maxDate,
          disableFuture,
          disablePast
        }) => {
          const adapter = useLocalizationContext();
          return reactExports.useCallback(day => validateDate({
            adapter,
            value: day,
            props: {
              shouldDisableDate,
              minDate,
              maxDate,
              disableFuture,
              disablePast
            }
          }) !== null, [adapter, shouldDisableDate, minDate, maxDate, disableFuture, disablePast]);
        };
        const isSameDateError = (a, b) => a === b;
        const useDateValidation = props => useValidation(props, validateDate, isSameDateError);
        const createCalendarStateReducer = (reduceAnimations, disableSwitchToMonthOnDayFocus, utils) => (state, action) => {
          switch (action.type) {
            case 'changeMonth':
              return _extends({}, state, {
                slideDirection: action.direction,
                currentMonth: action.newMonth,
                isMonthSwitchingAnimating: !reduceAnimations
              });
            case 'finishMonthSwitchingAnimation':
              return _extends({}, state, {
                isMonthSwitchingAnimating: false
              });
            case 'changeFocusedDay':
              {
                if (state.focusedDay != null && action.focusedDay != null && utils.isSameDay(action.focusedDay, state.focusedDay)) {
                  return state;
                }
                const needMonthSwitch = action.focusedDay != null && !disableSwitchToMonthOnDayFocus && !utils.isSameMonth(state.currentMonth, action.focusedDay);
                return _extends({}, state, {
                  focusedDay: action.focusedDay,
                  isMonthSwitchingAnimating: needMonthSwitch && !reduceAnimations && !action.withoutMonthSwitchingAnimation,
                  currentMonth: needMonthSwitch ? utils.startOfMonth(action.focusedDay) : state.currentMonth,
                  slideDirection: action.focusedDay != null && utils.isAfterDay(action.focusedDay, state.currentMonth) ? 'left' : 'right'
                });
              }
            default:
              throw new Error('missing support');
          }
        };
        const useCalendarState = ({
          date,
          defaultCalendarMonth,
          disableFuture,
          disablePast,
          disableSwitchToMonthOnDayFocus = false,
          maxDate,
          minDate,
          onMonthChange,
          reduceAnimations,
          shouldDisableDate
        }) => {
          var _ref;
          const now = useNow();
          const utils = useUtils();
          const reducerFn = reactExports.useRef(createCalendarStateReducer(Boolean(reduceAnimations), disableSwitchToMonthOnDayFocus, utils)).current;
          const [calendarState, dispatch] = reactExports.useReducer(reducerFn, {
            isMonthSwitchingAnimating: false,
            focusedDay: date || now,
            currentMonth: utils.startOfMonth((_ref = date != null ? date : defaultCalendarMonth) != null ? _ref : now),
            slideDirection: 'left'
          });
          const handleChangeMonth = reactExports.useCallback(payload => {
            dispatch(_extends({
              type: 'changeMonth'
            }, payload));
            if (onMonthChange) {
              onMonthChange(payload.newMonth);
            }
          }, [onMonthChange]);
          const changeMonth = reactExports.useCallback(newDate => {
            const newDateRequested = newDate != null ? newDate : now;
            if (utils.isSameMonth(newDateRequested, calendarState.currentMonth)) {
              return;
            }
            handleChangeMonth({
              newMonth: utils.startOfMonth(newDateRequested),
              direction: utils.isAfterDay(newDateRequested, calendarState.currentMonth) ? 'left' : 'right'
            });
          }, [calendarState.currentMonth, handleChangeMonth, now, utils]);
          const isDateDisabled = useIsDayDisabled({
            shouldDisableDate,
            minDate,
            maxDate,
            disableFuture,
            disablePast
          });
          const onMonthSwitchingAnimationEnd = reactExports.useCallback(() => {
            dispatch({
              type: 'finishMonthSwitchingAnimation'
            });
          }, []);
          const changeFocusedDay = reactExports.useCallback((newFocusedDate, withoutMonthSwitchingAnimation) => {
            if (!isDateDisabled(newFocusedDate)) {
              dispatch({
                type: 'changeFocusedDay',
                focusedDay: newFocusedDate,
                withoutMonthSwitchingAnimation
              });
            }
          }, [isDateDisabled]);
          return {
            calendarState,
            changeMonth,
            changeFocusedDay,
            isDateDisabled,
            onMonthSwitchingAnimationEnd,
            handleChangeMonth
          };
        };
        const getPickersFadeTransitionGroupUtilityClass = slot => generateUtilityClass('MuiPickersFadeTransitionGroup', slot);
        generateUtilityClasses('MuiPickersFadeTransitionGroup', ['root']);
        const useUtilityClasses$8 = ownerState => {
          const {
            classes
          } = ownerState;
          const slots = {
            root: ['root']
          };
          return composeClasses(slots, getPickersFadeTransitionGroupUtilityClass, classes);
        };
        const animationDuration = 500;
        const PickersFadeTransitionGroupRoot = styled(TransitionGroup, {
          name: 'MuiPickersFadeTransitionGroup',
          slot: 'Root',
          overridesResolver: (_, styles) => styles.root
        })({
          display: 'block',
          position: 'relative'
        });
        /**
         * @ignore - do not document.
         */

        function PickersFadeTransitionGroup(inProps) {
          const props = useThemeProps({
            props: inProps,
            name: 'MuiPickersFadeTransitionGroup'
          });
          const {
            children,
            className,
            reduceAnimations,
            transKey
          } = props;
          const classes = useUtilityClasses$8(props);
          if (reduceAnimations) {
            return children;
          }
          return /*#__PURE__*/jsxRuntimeExports.jsx(PickersFadeTransitionGroupRoot, {
            className: clsx(classes.root, className),
            children: /*#__PURE__*/jsxRuntimeExports.jsx(Fade, {
              appear: false,
              mountOnEnter: true,
              unmountOnExit: true,
              timeout: {
                appear: animationDuration,
                enter: animationDuration / 2,
                exit: 0
              },
              children: children
            }, transKey)
          });
        }
        function getPickersDayUtilityClass(slot) {
          return generateUtilityClass('MuiPickersDay', slot);
        }
        const pickersDayClasses = generateUtilityClasses('MuiPickersDay', ['root', 'dayWithMargin', 'dayOutsideMonth', 'hiddenDaySpacingFiller', 'today', 'selected', 'disabled']);
        const _excluded$9 = ["autoFocus", "className", "day", "disabled", "disableHighlightToday", "disableMargin", "hidden", "isAnimating", "onClick", "onDaySelect", "onFocus", "onBlur", "onKeyDown", "onMouseDown", "outsideCurrentMonth", "selected", "showDaysOutsideCurrentMonth", "children", "today"];
        const useUtilityClasses$7 = ownerState => {
          const {
            selected,
            disableMargin,
            disableHighlightToday,
            today,
            disabled,
            outsideCurrentMonth,
            showDaysOutsideCurrentMonth,
            classes
          } = ownerState;
          const slots = {
            root: ['root', selected && 'selected', disabled && 'disabled', !disableMargin && 'dayWithMargin', !disableHighlightToday && today && 'today', outsideCurrentMonth && showDaysOutsideCurrentMonth && 'dayOutsideMonth', outsideCurrentMonth && !showDaysOutsideCurrentMonth && 'hiddenDaySpacingFiller'],
            hiddenDaySpacingFiller: ['hiddenDaySpacingFiller']
          };
          return composeClasses(slots, getPickersDayUtilityClass, classes);
        };
        const styleArg = ({
          theme,
          ownerState
        }) => _extends({}, theme.typography.caption, {
          width: DAY_SIZE,
          height: DAY_SIZE,
          borderRadius: '50%',
          padding: 0,
          // background required here to prevent collides with the other days when animating with transition group
          backgroundColor: theme.palette.background.paper,
          color: theme.palette.text.primary,
          '&:hover': {
            backgroundColor: alpha(theme.palette.action.active, theme.palette.action.hoverOpacity)
          },
          '&:focus': {
            backgroundColor: alpha(theme.palette.action.active, theme.palette.action.hoverOpacity),
            [`&.${pickersDayClasses.selected}`]: {
              willChange: 'background-color',
              backgroundColor: theme.palette.primary.dark
            }
          },
          [`&.${pickersDayClasses.selected}`]: {
            color: theme.palette.primary.contrastText,
            backgroundColor: theme.palette.primary.main,
            fontWeight: theme.typography.fontWeightMedium,
            transition: theme.transitions.create('background-color', {
              duration: theme.transitions.duration.short
            }),
            '&:hover': {
              willChange: 'background-color',
              backgroundColor: theme.palette.primary.dark
            }
          },
          [`&.${pickersDayClasses.disabled}`]: {
            color: theme.palette.text.disabled
          }
        }, !ownerState.disableMargin && {
          margin: `0 ${DAY_MARGIN}px`
        }, ownerState.outsideCurrentMonth && ownerState.showDaysOutsideCurrentMonth && {
          color: theme.palette.text.secondary
        }, !ownerState.disableHighlightToday && ownerState.today && {
          [`&:not(.${pickersDayClasses.selected})`]: {
            border: `1px solid ${theme.palette.text.secondary}`
          }
        });
        const overridesResolver = (props, styles) => {
          const {
            ownerState
          } = props;
          return [styles.root, !ownerState.disableMargin && styles.dayWithMargin, !ownerState.disableHighlightToday && ownerState.today && styles.today, !ownerState.outsideCurrentMonth && ownerState.showDaysOutsideCurrentMonth && styles.dayOutsideMonth, ownerState.outsideCurrentMonth && !ownerState.showDaysOutsideCurrentMonth && styles.hiddenDaySpacingFiller];
        };
        const PickersDayRoot = styled(ButtonBase, {
          name: 'MuiPickersDay',
          slot: 'Root',
          overridesResolver
        })(styleArg);
        const PickersDayFiller = styled('div', {
          name: 'MuiPickersDay',
          slot: 'Root',
          overridesResolver
        })(({
          theme,
          ownerState
        }) => _extends({}, styleArg({
          theme,
          ownerState
        }), {
          // visibility: 'hidden' does not work here as it hides the element from screen readers as well
          opacity: 0,
          pointerEvents: 'none'
        }));
        const noop$1 = () => {};
        const PickersDayRaw = /*#__PURE__*/reactExports.forwardRef(function PickersDay(inProps, forwardedRef) {
          const props = useThemeProps({
            props: inProps,
            name: 'MuiPickersDay'
          });
          const {
              autoFocus = false,
              className,
              day,
              disabled = false,
              disableHighlightToday = false,
              disableMargin = false,
              isAnimating,
              onClick,
              onDaySelect,
              onFocus = noop$1,
              onBlur = noop$1,
              onKeyDown = noop$1,
              onMouseDown,
              outsideCurrentMonth,
              selected = false,
              showDaysOutsideCurrentMonth = false,
              children,
              today: isToday = false
            } = props,
            other = _objectWithoutPropertiesLoose(props, _excluded$9);
          const ownerState = _extends({}, props, {
            autoFocus,
            disabled,
            disableHighlightToday,
            disableMargin,
            selected,
            showDaysOutsideCurrentMonth,
            today: isToday
          });
          const classes = useUtilityClasses$7(ownerState);
          const utils = useUtils();
          const ref = reactExports.useRef(null);
          const handleRef = useForkRef(ref, forwardedRef); // Since this is rendered when a Popper is opened we can't use passive effects.
          // Focusing in passive effects in Popper causes scroll jump.

          useEnhancedEffect(() => {
            if (autoFocus && !disabled && !isAnimating && !outsideCurrentMonth) {
              // ref.current being null would be a bug in MUI
              ref.current.focus();
            }
          }, [autoFocus, disabled, isAnimating, outsideCurrentMonth]); // For day outside of current month, move focus from mouseDown to mouseUp
          // Goal: have the onClick ends before sliding to the new month

          const handleMouseDown = event => {
            if (onMouseDown) {
              onMouseDown(event);
            }
            if (outsideCurrentMonth) {
              event.preventDefault();
            }
          };
          const handleClick = event => {
            if (!disabled) {
              onDaySelect(day, 'finish');
            }
            if (outsideCurrentMonth) {
              event.currentTarget.focus();
            }
            if (onClick) {
              onClick(event);
            }
          };
          if (outsideCurrentMonth && !showDaysOutsideCurrentMonth) {
            return /*#__PURE__*/jsxRuntimeExports.jsx(PickersDayFiller, {
              className: clsx(classes.root, classes.hiddenDaySpacingFiller, className),
              ownerState: ownerState,
              role: other.role
            });
          }
          return /*#__PURE__*/jsxRuntimeExports.jsx(PickersDayRoot, _extends({
            className: clsx(classes.root, className),
            ownerState: ownerState,
            ref: handleRef,
            centerRipple: true,
            disabled: disabled,
            tabIndex: selected ? 0 : -1,
            onKeyDown: event => onKeyDown(event, day),
            onFocus: event => onFocus(event, day),
            onBlur: event => onBlur(event, day),
            onClick: handleClick,
            onMouseDown: handleMouseDown
          }, other, {
            children: !children ? utils.format(day, 'dayOfMonth') : children
          }));
        });
        const areDayPropsEqual = (prevProps, nextProps) => {
          return prevProps.autoFocus === nextProps.autoFocus && prevProps.isAnimating === nextProps.isAnimating && prevProps.today === nextProps.today && prevProps.disabled === nextProps.disabled && prevProps.selected === nextProps.selected && prevProps.disableMargin === nextProps.disableMargin && prevProps.showDaysOutsideCurrentMonth === nextProps.showDaysOutsideCurrentMonth && prevProps.disableHighlightToday === nextProps.disableHighlightToday && prevProps.className === nextProps.className && prevProps.sx === nextProps.sx && prevProps.outsideCurrentMonth === nextProps.outsideCurrentMonth && prevProps.onFocus === nextProps.onFocus && prevProps.onBlur === nextProps.onBlur && prevProps.onDaySelect === nextProps.onDaySelect;
        };
        /**
         *
         * Demos:
         *
         * - [Date Picker](https://mui.com/x/react-date-pickers/date-picker/)
         *
         * API:
         *
         * - [PickersDay API](https://mui.com/x/api/date-pickers/pickers-day/)
         */

        const PickersDay = /*#__PURE__*/reactExports.memo(PickersDayRaw, areDayPropsEqual);
        const getPickersSlideTransitionUtilityClass = slot =>
        // TODO v6: Rename 'PrivatePickersSlideTransition' to 'MuiPickersSlideTransition' to follow convention
        generateUtilityClass('PrivatePickersSlideTransition', slot);
        const pickersSlideTransitionClasses = generateUtilityClasses(
        // TODO v6: Rename 'PrivatePickersSlideTransition' to 'MuiPickersSlideTransition' to follow convention
        'PrivatePickersSlideTransition', ['root', 'slideEnter-left', 'slideEnter-right', 'slideEnterActive', 'slideExit', 'slideExitActiveLeft-left', 'slideExitActiveLeft-right']);
        const _excluded$8 = ["children", "className", "reduceAnimations", "slideDirection", "transKey"];
        const useUtilityClasses$6 = ownerState => {
          const {
            classes
          } = ownerState;
          const slots = {
            root: ['root']
          };
          return composeClasses(slots, getPickersSlideTransitionUtilityClass, classes);
        };
        const slideAnimationDuration = 350;
        const PickersSlideTransitionRoot = styled(TransitionGroup, {
          name: 'PrivatePickersSlideTransition',
          slot: 'Root',
          overridesResolver: (_, styles) => [styles.root, {
            [`.${pickersSlideTransitionClasses['slideEnter-left']}`]: styles['slideEnter-left']
          }, {
            [`.${pickersSlideTransitionClasses['slideEnter-right']}`]: styles['slideEnter-right']
          }, {
            [`.${pickersSlideTransitionClasses.slideEnterActive}`]: styles.slideEnterActive
          }, {
            [`.${pickersSlideTransitionClasses.slideExit}`]: styles.slideExit
          }, {
            [`.${pickersSlideTransitionClasses['slideExitActiveLeft-left']}`]: styles['slideExitActiveLeft-left']
          }, {
            [`.${pickersSlideTransitionClasses['slideExitActiveLeft-right']}`]: styles['slideExitActiveLeft-right']
          }]
        })(({
          theme
        }) => {
          const slideTransition = theme.transitions.create('transform', {
            duration: slideAnimationDuration,
            easing: 'cubic-bezier(0.35, 0.8, 0.4, 1)'
          });
          return {
            display: 'block',
            position: 'relative',
            overflowX: 'hidden',
            '& > *': {
              position: 'absolute',
              top: 0,
              right: 0,
              left: 0
            },
            [`& .${pickersSlideTransitionClasses['slideEnter-left']}`]: {
              willChange: 'transform',
              transform: 'translate(100%)',
              zIndex: 1
            },
            [`& .${pickersSlideTransitionClasses['slideEnter-right']}`]: {
              willChange: 'transform',
              transform: 'translate(-100%)',
              zIndex: 1
            },
            [`& .${pickersSlideTransitionClasses.slideEnterActive}`]: {
              transform: 'translate(0%)',
              transition: slideTransition
            },
            [`& .${pickersSlideTransitionClasses.slideExit}`]: {
              transform: 'translate(0%)'
            },
            [`& .${pickersSlideTransitionClasses['slideExitActiveLeft-left']}`]: {
              willChange: 'transform',
              transform: 'translate(-100%)',
              transition: slideTransition,
              zIndex: 0
            },
            [`& .${pickersSlideTransitionClasses['slideExitActiveLeft-right']}`]: {
              willChange: 'transform',
              transform: 'translate(100%)',
              transition: slideTransition,
              zIndex: 0
            }
          };
        });
        /**
         * @ignore - do not document.
         */

        const PickersSlideTransition = props => {
          // TODO v6: add 'useThemeProps' once the component class names are aligned
          const {
              children,
              className,
              reduceAnimations,
              slideDirection,
              transKey
            } = props,
            other = _objectWithoutPropertiesLoose(props, _excluded$8);
          const classes = useUtilityClasses$6(props);
          if (reduceAnimations) {
            return /*#__PURE__*/jsxRuntimeExports.jsx("div", {
              className: clsx(classes.root, className),
              children: children
            });
          }
          const transitionClasses = {
            exit: pickersSlideTransitionClasses.slideExit,
            enterActive: pickersSlideTransitionClasses.slideEnterActive,
            enter: pickersSlideTransitionClasses[`slideEnter-${slideDirection}`],
            exitActive: pickersSlideTransitionClasses[`slideExitActiveLeft-${slideDirection}`]
          };
          return /*#__PURE__*/jsxRuntimeExports.jsx(PickersSlideTransitionRoot, {
            className: clsx(classes.root, className),
            childFactory: element => /*#__PURE__*/reactExports.cloneElement(element, {
              classNames: transitionClasses
            }),
            role: "presentation",
            children: /*#__PURE__*/jsxRuntimeExports.jsx(CSSTransition$1, _extends({
              mountOnEnter: true,
              unmountOnExit: true,
              timeout: slideAnimationDuration,
              classNames: transitionClasses
            }, other, {
              children: children
            }), transKey)
          });
        };
        const getDayPickerUtilityClass = slot => generateUtilityClass('MuiDayPicker', slot);
        generateUtilityClasses('MuiDayPicker', ['header', 'weekDayLabel', 'loadingContainer', 'slideTransition', 'monthContainer', 'weekContainer']);
        const useUtilityClasses$5 = ownerState => {
          const {
            classes
          } = ownerState;
          const slots = {
            header: ['header'],
            weekDayLabel: ['weekDayLabel'],
            loadingContainer: ['loadingContainer'],
            slideTransition: ['slideTransition'],
            monthContainer: ['monthContainer'],
            weekContainer: ['weekContainer']
          };
          return composeClasses(slots, getDayPickerUtilityClass, classes);
        };
        const defaultDayOfWeekFormatter = day => day.charAt(0).toUpperCase();
        const weeksContainerHeight = (DAY_SIZE + DAY_MARGIN * 2) * 6;
        const PickersCalendarDayHeader = styled('div', {
          name: 'MuiDayPicker',
          slot: 'Header',
          overridesResolver: (_, styles) => styles.header
        })({
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        });
        const PickersCalendarWeekDayLabel = styled(Typography, {
          name: 'MuiDayPicker',
          slot: 'WeekDayLabel',
          overridesResolver: (_, styles) => styles.weekDayLabel
        })(({
          theme
        }) => ({
          width: 36,
          height: 40,
          margin: '0 2px',
          textAlign: 'center',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          color: theme.palette.text.secondary
        }));
        const PickersCalendarLoadingContainer = styled('div', {
          name: 'MuiDayPicker',
          slot: 'LoadingContainer',
          overridesResolver: (_, styles) => styles.loadingContainer
        })({
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: weeksContainerHeight
        });
        const PickersCalendarSlideTransition = styled(PickersSlideTransition, {
          name: 'MuiDayPicker',
          slot: 'SlideTransition',
          overridesResolver: (_, styles) => styles.slideTransition
        })({
          minHeight: weeksContainerHeight
        });
        const PickersCalendarWeekContainer = styled('div', {
          name: 'MuiDayPicker',
          slot: 'MonthContainer',
          overridesResolver: (_, styles) => styles.monthContainer
        })({
          overflow: 'hidden'
        });
        const PickersCalendarWeek = styled('div', {
          name: 'MuiDayPicker',
          slot: 'WeekContainer',
          overridesResolver: (_, styles) => styles.weekContainer
        })({
          margin: `${DAY_MARGIN}px 0`,
          display: 'flex',
          justifyContent: 'center'
        });
        /**
         * @ignore - do not document.
         */

        function DayPicker(inProps) {
          const now = useNow();
          const utils = useUtils();
          const props = useThemeProps({
            props: inProps,
            name: 'MuiDayPicker'
          });
          const classes = useUtilityClasses$5(props);
          const {
            onFocusedDayChange,
            className,
            currentMonth,
            selectedDays,
            disabled,
            disableHighlightToday,
            focusedDay,
            isMonthSwitchingAnimating,
            loading,
            onSelectedDaysChange,
            onMonthSwitchingAnimationEnd,
            readOnly,
            reduceAnimations,
            renderDay,
            renderLoading = () => /*#__PURE__*/jsxRuntimeExports.jsx("span", {
              children: "..."
            }),
            showDaysOutsideCurrentMonth,
            slideDirection,
            TransitionProps,
            disablePast,
            disableFuture,
            minDate,
            maxDate,
            shouldDisableDate,
            dayOfWeekFormatter = defaultDayOfWeekFormatter,
            hasFocus,
            onFocusedViewChange,
            gridLabelId
          } = props;
          const isDateDisabled = useIsDayDisabled({
            shouldDisableDate,
            minDate,
            maxDate,
            disablePast,
            disableFuture
          });
          const [internalFocusedDay, setInternalFocusedDay] = reactExports.useState(() => focusedDay || now);
          const changeHasFocus = reactExports.useCallback(newHasFocus => {
            if (onFocusedViewChange) {
              onFocusedViewChange(newHasFocus);
            }
          }, [onFocusedViewChange]);
          const handleDaySelect = reactExports.useCallback((day, isFinish = 'finish') => {
            if (readOnly) {
              return;
            }
            onSelectedDaysChange(day, isFinish);
          }, [onSelectedDaysChange, readOnly]);
          const focusDay = reactExports.useCallback(day => {
            if (!isDateDisabled(day)) {
              onFocusedDayChange(day);
              setInternalFocusedDay(day);
              changeHasFocus(true);
            }
          }, [isDateDisabled, onFocusedDayChange, changeHasFocus]);
          const theme = useTheme$1();
          function handleKeyDown(event, day) {
            switch (event.key) {
              case 'ArrowUp':
                focusDay(utils.addDays(day, -7));
                event.preventDefault();
                break;
              case 'ArrowDown':
                focusDay(utils.addDays(day, 7));
                event.preventDefault();
                break;
              case 'ArrowLeft':
                {
                  const newFocusedDayDefault = utils.addDays(day, theme.direction === 'ltr' ? -1 : 1);
                  const nextAvailableMonth = theme.direction === 'ltr' ? utils.getPreviousMonth(day) : utils.getNextMonth(day);
                  const closestDayToFocus = findClosestEnabledDate({
                    utils,
                    date: newFocusedDayDefault,
                    minDate: theme.direction === 'ltr' ? utils.startOfMonth(nextAvailableMonth) : newFocusedDayDefault,
                    maxDate: theme.direction === 'ltr' ? newFocusedDayDefault : utils.endOfMonth(nextAvailableMonth),
                    isDateDisabled
                  });
                  focusDay(closestDayToFocus || newFocusedDayDefault);
                  event.preventDefault();
                  break;
                }
              case 'ArrowRight':
                {
                  const newFocusedDayDefault = utils.addDays(day, theme.direction === 'ltr' ? 1 : -1);
                  const nextAvailableMonth = theme.direction === 'ltr' ? utils.getNextMonth(day) : utils.getPreviousMonth(day);
                  const closestDayToFocus = findClosestEnabledDate({
                    utils,
                    date: newFocusedDayDefault,
                    minDate: theme.direction === 'ltr' ? newFocusedDayDefault : utils.startOfMonth(nextAvailableMonth),
                    maxDate: theme.direction === 'ltr' ? utils.endOfMonth(nextAvailableMonth) : newFocusedDayDefault,
                    isDateDisabled
                  });
                  focusDay(closestDayToFocus || newFocusedDayDefault);
                  event.preventDefault();
                  break;
                }
              case 'Home':
                focusDay(utils.startOfWeek(day));
                event.preventDefault();
                break;
              case 'End':
                focusDay(utils.endOfWeek(day));
                event.preventDefault();
                break;
              case 'PageUp':
                focusDay(utils.getNextMonth(day));
                event.preventDefault();
                break;
              case 'PageDown':
                focusDay(utils.getPreviousMonth(day));
                event.preventDefault();
                break;
            }
          }
          function handleFocus(event, day) {
            focusDay(day);
          }
          function handleBlur(event, day) {
            if (hasFocus && utils.isSameDay(internalFocusedDay, day)) {
              changeHasFocus(false);
            }
          }
          const currentMonthNumber = utils.getMonth(currentMonth);
          const validSelectedDays = selectedDays.filter(day => !!day).map(day => utils.startOfDay(day)); // need a new ref whenever the `key` of the transition changes: http://reactcommunity.org/react-transition-group/transition/#Transition-prop-nodeRef.

          const transitionKey = currentMonthNumber; // eslint-disable-next-line react-hooks/exhaustive-deps

          const slideNodeRef = reactExports.useMemo(() => /*#__PURE__*/reactExports.createRef(), [transitionKey]);
          const startOfCurrentWeek = utils.startOfWeek(now);
          const focusableDay = reactExports.useMemo(() => {
            const startOfMonth = utils.startOfMonth(currentMonth);
            const endOfMonth = utils.endOfMonth(currentMonth);
            if (isDateDisabled(internalFocusedDay) || utils.isAfterDay(internalFocusedDay, endOfMonth) || utils.isBeforeDay(internalFocusedDay, startOfMonth)) {
              return findClosestEnabledDate({
                utils,
                date: internalFocusedDay,
                minDate: startOfMonth,
                maxDate: endOfMonth,
                disablePast,
                disableFuture,
                isDateDisabled
              });
            }
            return internalFocusedDay;
          }, [currentMonth, disableFuture, disablePast, internalFocusedDay, isDateDisabled, utils]);
          return /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
            role: "grid",
            "aria-labelledby": gridLabelId,
            children: [/*#__PURE__*/jsxRuntimeExports.jsx(PickersCalendarDayHeader, {
              role: "row",
              className: classes.header,
              children: utils.getWeekdays().map((day, i) => {
                var _dayOfWeekFormatter;
                return /*#__PURE__*/jsxRuntimeExports.jsx(PickersCalendarWeekDayLabel, {
                  variant: "caption",
                  role: "columnheader",
                  "aria-label": utils.format(utils.addDays(startOfCurrentWeek, i), 'weekday'),
                  className: classes.weekDayLabel,
                  children: (_dayOfWeekFormatter = dayOfWeekFormatter == null ? void 0 : dayOfWeekFormatter(day)) != null ? _dayOfWeekFormatter : day
                }, day + i.toString());
              })
            }), loading ? /*#__PURE__*/jsxRuntimeExports.jsx(PickersCalendarLoadingContainer, {
              className: classes.loadingContainer,
              children: renderLoading()
            }) : /*#__PURE__*/jsxRuntimeExports.jsx(PickersCalendarSlideTransition, _extends({
              transKey: transitionKey,
              onExited: onMonthSwitchingAnimationEnd,
              reduceAnimations: reduceAnimations,
              slideDirection: slideDirection,
              className: clsx(className, classes.slideTransition)
            }, TransitionProps, {
              nodeRef: slideNodeRef,
              children: /*#__PURE__*/jsxRuntimeExports.jsx(PickersCalendarWeekContainer, {
                ref: slideNodeRef,
                role: "rowgroup",
                className: classes.monthContainer,
                children: utils.getWeekArray(currentMonth).map(week => /*#__PURE__*/jsxRuntimeExports.jsx(PickersCalendarWeek, {
                  role: "row",
                  className: classes.weekContainer,
                  children: week.map(day => {
                    const isFocusableDay = focusableDay !== null && utils.isSameDay(day, focusableDay);
                    const isSelected = validSelectedDays.some(selectedDay => utils.isSameDay(selectedDay, day));
                    const isToday = utils.isSameDay(day, now);
                    const pickersDayProps = {
                      key: day == null ? void 0 : day.toString(),
                      day,
                      isAnimating: isMonthSwitchingAnimating,
                      disabled: disabled || isDateDisabled(day),
                      autoFocus: hasFocus && isFocusableDay,
                      today: isToday,
                      outsideCurrentMonth: utils.getMonth(day) !== currentMonthNumber,
                      selected: isSelected,
                      disableHighlightToday,
                      showDaysOutsideCurrentMonth,
                      onKeyDown: handleKeyDown,
                      onFocus: handleFocus,
                      onBlur: handleBlur,
                      onDaySelect: handleDaySelect,
                      tabIndex: isFocusableDay ? 0 : -1,
                      role: 'gridcell',
                      'aria-selected': isSelected
                    };
                    if (isToday) {
                      pickersDayProps['aria-current'] = 'date';
                    }
                    return renderDay ? renderDay(day, validSelectedDays, pickersDayProps) : /*#__PURE__*/reactExports.createElement(PickersDay, _extends({}, pickersDayProps, {
                      key: pickersDayProps.key
                    }));
                  })
                }, `week-${week[0]}`))
              })
            }))]
          });
        }
        const getPickersCalendarHeaderUtilityClass = slot => generateUtilityClass('MuiPickersCalendarHeader', slot);
        generateUtilityClasses('MuiPickersCalendarHeader', ['root', 'labelContainer', 'label', 'switchViewButton', 'switchViewIcon']);
        const useUtilityClasses$4 = ownerState => {
          const {
            classes
          } = ownerState;
          const slots = {
            root: ['root'],
            labelContainer: ['labelContainer'],
            label: ['label'],
            switchViewButton: ['switchViewButton'],
            switchViewIcon: ['switchViewIcon']
          };
          return composeClasses(slots, getPickersCalendarHeaderUtilityClass, classes);
        };
        const PickersCalendarHeaderRoot = styled('div', {
          name: 'MuiPickersCalendarHeader',
          slot: 'Root',
          overridesResolver: (_, styles) => styles.root
        })({
          display: 'flex',
          alignItems: 'center',
          marginTop: 16,
          marginBottom: 8,
          paddingLeft: 24,
          paddingRight: 12,
          // prevent jumping in safari
          maxHeight: 30,
          minHeight: 30
        });
        const PickersCalendarHeaderLabelContainer = styled('div', {
          name: 'MuiPickersCalendarHeader',
          slot: 'LabelContainer',
          overridesResolver: (_, styles) => styles.labelContainer
        })(({
          theme
        }) => _extends({
          display: 'flex',
          maxHeight: 30,
          overflow: 'hidden',
          alignItems: 'center',
          cursor: 'pointer',
          marginRight: 'auto'
        }, theme.typography.body1, {
          fontWeight: theme.typography.fontWeightMedium
        }));
        const PickersCalendarHeaderLabel = styled('div', {
          name: 'MuiPickersCalendarHeader',
          slot: 'Label',
          overridesResolver: (_, styles) => styles.label
        })({
          marginRight: 6
        });
        const PickersCalendarHeaderSwitchViewButton = styled(IconButton, {
          name: 'MuiPickersCalendarHeader',
          slot: 'SwitchViewButton',
          overridesResolver: (_, styles) => styles.switchViewButton
        })({
          marginRight: 'auto'
        });
        const PickersCalendarHeaderSwitchViewIcon = styled(ArrowDropDown, {
          name: 'MuiPickersCalendarHeader',
          slot: 'SwitchViewIcon',
          overridesResolver: (_, styles) => styles.switchViewIcon
        })(({
          theme,
          ownerState
        }) => _extends({
          willChange: 'transform',
          transition: theme.transitions.create('transform'),
          transform: 'rotate(0deg)'
        }, ownerState.openView === 'year' && {
          transform: 'rotate(180deg)'
        }));
        const deprecatedPropsWarning = buildDeprecatedPropsWarning();
        /**
         * @ignore - do not document.
         */

        function PickersCalendarHeader(inProps) {
          const props = useThemeProps({
            props: inProps,
            name: 'MuiPickersCalendarHeader'
          });
          const {
            components = {},
            componentsProps = {},
            currentMonth: month,
            disabled,
            disableFuture,
            disablePast,
            getViewSwitchingButtonText: getViewSwitchingButtonTextProp,
            leftArrowButtonText: leftArrowButtonTextProp,
            maxDate,
            minDate,
            onMonthChange,
            onViewChange,
            openView: currentView,
            reduceAnimations,
            rightArrowButtonText: rightArrowButtonTextProp,
            views,
            labelId
          } = props;
          deprecatedPropsWarning({
            leftArrowButtonText: leftArrowButtonTextProp,
            rightArrowButtonText: rightArrowButtonTextProp,
            getViewSwitchingButtonText: getViewSwitchingButtonTextProp
          });
          const localeText = useLocaleText();
          const leftArrowButtonText = leftArrowButtonTextProp != null ? leftArrowButtonTextProp : localeText.previousMonth;
          const rightArrowButtonText = rightArrowButtonTextProp != null ? rightArrowButtonTextProp : localeText.nextMonth;
          const getViewSwitchingButtonText = getViewSwitchingButtonTextProp != null ? getViewSwitchingButtonTextProp : localeText.calendarViewSwitchingButtonAriaLabel;
          const utils = useUtils();
          const classes = useUtilityClasses$4(props);
          const switchViewButtonProps = componentsProps.switchViewButton || {};
          const selectNextMonth = () => onMonthChange(utils.getNextMonth(month), 'left');
          const selectPreviousMonth = () => onMonthChange(utils.getPreviousMonth(month), 'right');
          const isNextMonthDisabled = useNextMonthDisabled(month, {
            disableFuture,
            maxDate
          });
          const isPreviousMonthDisabled = usePreviousMonthDisabled(month, {
            disablePast,
            minDate
          });
          const handleToggleView = () => {
            if (views.length === 1 || !onViewChange || disabled) {
              return;
            }
            if (views.length === 2) {
              onViewChange(views.find(view => view !== currentView) || views[0]);
            } else {
              // switching only between first 2
              const nextIndexToOpen = views.indexOf(currentView) !== 0 ? 0 : 1;
              onViewChange(views[nextIndexToOpen]);
            }
          }; // No need to display more information

          if (views.length === 1 && views[0] === 'year') {
            return null;
          }
          const ownerState = props;
          return /*#__PURE__*/jsxRuntimeExports.jsxs(PickersCalendarHeaderRoot, {
            ownerState: ownerState,
            className: classes.root,
            children: [/*#__PURE__*/jsxRuntimeExports.jsxs(PickersCalendarHeaderLabelContainer, {
              role: "presentation",
              onClick: handleToggleView,
              ownerState: ownerState // putting this on the label item element below breaks when using transition
              ,

              "aria-live": "polite",
              className: classes.labelContainer,
              children: [/*#__PURE__*/jsxRuntimeExports.jsx(PickersFadeTransitionGroup, {
                reduceAnimations: reduceAnimations,
                transKey: utils.format(month, 'monthAndYear'),
                children: /*#__PURE__*/jsxRuntimeExports.jsx(PickersCalendarHeaderLabel, {
                  id: labelId,
                  ownerState: ownerState,
                  className: classes.label,
                  children: utils.format(month, 'monthAndYear')
                })
              }), views.length > 1 && !disabled && /*#__PURE__*/jsxRuntimeExports.jsx(PickersCalendarHeaderSwitchViewButton, _extends({
                size: "small",
                as: components.SwitchViewButton,
                "aria-label": getViewSwitchingButtonText(currentView),
                className: classes.switchViewButton
              }, switchViewButtonProps, {
                children: /*#__PURE__*/jsxRuntimeExports.jsx(PickersCalendarHeaderSwitchViewIcon, {
                  as: components.SwitchViewIcon,
                  ownerState: ownerState,
                  className: classes.switchViewIcon
                })
              }))]
            }), /*#__PURE__*/jsxRuntimeExports.jsx(Fade, {
              in: currentView === 'day',
              children: /*#__PURE__*/jsxRuntimeExports.jsx(PickersArrowSwitcher, {
                leftArrowButtonText: leftArrowButtonText,
                rightArrowButtonText: rightArrowButtonText,
                components: components,
                componentsProps: componentsProps,
                onLeftClick: selectPreviousMonth,
                onRightClick: selectNextMonth,
                isLeftDisabled: isPreviousMonthDisabled,
                isRightDisabled: isNextMonthDisabled
              })
            })]
          });
        }
        function getPickersYearUtilityClass(slot) {
          // TODO v6: Rename 'PrivatePickersYear' to 'MuiPickersYear' to follow convention
          return generateUtilityClass('PrivatePickersYear', slot);
        } // TODO v6: Rename 'PrivatePickersYear' to 'MuiPickersYear' to follow convention

        const pickersYearClasses = generateUtilityClasses('PrivatePickersYear', ['root', 'modeDesktop', 'modeMobile', 'yearButton', 'selected', 'disabled']);
        const _excluded$7 = ["autoFocus", "className", "children", "disabled", "onClick", "onKeyDown", "value", "tabIndex", "onFocus", "onBlur"];
        const useUtilityClasses$3 = ownerState => {
          const {
            wrapperVariant,
            disabled,
            selected,
            classes
          } = ownerState;
          const slots = {
            root: ['root', wrapperVariant && `mode${capitalize(wrapperVariant)}`],
            yearButton: ['yearButton', disabled && 'disabled', selected && 'selected']
          };
          return composeClasses(slots, getPickersYearUtilityClass, classes);
        };
        const PickersYearRoot = styled('div', {
          name: 'PrivatePickersYear',
          slot: 'Root',
          overridesResolver: (_, styles) => [styles.root, {
            [`&.${pickersYearClasses.modeDesktop}`]: styles.modeDesktop
          }, {
            [`&.${pickersYearClasses.modeMobile}`]: styles.modeMobile
          }]
        })(({
          ownerState
        }) => _extends({
          flexBasis: '33.3%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }, (ownerState == null ? void 0 : ownerState.wrapperVariant) === 'desktop' && {
          flexBasis: '25%'
        }));
        const PickersYearButton = styled('button', {
          name: 'PrivatePickersYear',
          slot: 'Button',
          overridesResolver: (_, styles) => [styles.button, {
            [`&.${pickersYearClasses.disabled}`]: styles.disabled
          }, {
            [`&.${pickersYearClasses.selected}`]: styles.selected
          }]
        })(({
          theme
        }) => _extends({
          color: 'unset',
          backgroundColor: 'transparent',
          border: 0,
          outline: 0
        }, theme.typography.subtitle1, {
          margin: '8px 0',
          height: 36,
          width: 72,
          borderRadius: 18,
          cursor: 'pointer',
          '&:focus, &:hover': {
            backgroundColor: alpha(theme.palette.action.active, theme.palette.action.hoverOpacity)
          },
          [`&.${pickersYearClasses.disabled}`]: {
            color: theme.palette.text.secondary
          },
          [`&.${pickersYearClasses.selected}`]: {
            color: theme.palette.primary.contrastText,
            backgroundColor: theme.palette.primary.main,
            '&:focus, &:hover': {
              backgroundColor: theme.palette.primary.dark
            }
          }
        }));
        const noop = () => {};
        /**
         * @ignore - internal component.
         */

        const PickersYear = /*#__PURE__*/reactExports.forwardRef(function PickersYear(props, forwardedRef) {
          // TODO v6: add 'useThemeProps' once the component class names are aligned
          const {
              autoFocus,
              className,
              children,
              disabled,
              onClick,
              onKeyDown,
              value,
              tabIndex,
              onFocus = noop,
              onBlur = noop
            } = props,
            other = _objectWithoutPropertiesLoose(props, _excluded$7);
          const ref = reactExports.useRef(null);
          const refHandle = useForkRef(ref, forwardedRef);
          const wrapperVariant = reactExports.useContext(WrapperVariantContext);
          const ownerState = _extends({}, props, {
            wrapperVariant
          });
          const classes = useUtilityClasses$3(ownerState); // We can't forward the `autoFocus` to the button because it is a native button, not a MUI Button

          reactExports.useEffect(() => {
            if (autoFocus) {
              // `ref.current` being `null` would be a bug in MUI.
              ref.current.focus();
            }
          }, [autoFocus]);
          return /*#__PURE__*/jsxRuntimeExports.jsx(PickersYearRoot, {
            className: clsx(classes.root, className),
            ownerState: ownerState,
            children: /*#__PURE__*/jsxRuntimeExports.jsx(PickersYearButton, _extends({
              ref: refHandle,
              disabled: disabled,
              type: "button",
              tabIndex: disabled ? -1 : tabIndex,
              onClick: event => onClick(event, value),
              onKeyDown: event => onKeyDown(event, value),
              onFocus: event => onFocus(event, value),
              onBlur: event => onBlur(event, value),
              className: classes.yearButton,
              ownerState: ownerState
            }, other, {
              children: children
            }))
          });
        });
        function getYearPickerUtilityClass(slot) {
          return generateUtilityClass('MuiYearPicker', slot);
        }
        generateUtilityClasses('MuiYearPicker', ['root']);
        const useUtilityClasses$2 = ownerState => {
          const {
            classes
          } = ownerState;
          const slots = {
            root: ['root']
          };
          return composeClasses(slots, getYearPickerUtilityClass, classes);
        };
        function useYearPickerDefaultizedProps(props, name) {
          const utils = useUtils();
          const defaultDates = useDefaultDates();
          const themeProps = useThemeProps({
            props,
            name
          });
          return _extends({
            disablePast: false,
            disableFuture: false
          }, themeProps, {
            minDate: parseNonNullablePickerDate(utils, themeProps.minDate, defaultDates.minDate),
            maxDate: parseNonNullablePickerDate(utils, themeProps.maxDate, defaultDates.maxDate)
          });
        }
        const YearPickerRoot = styled('div', {
          name: 'MuiYearPicker',
          slot: 'Root',
          overridesResolver: (props, styles) => styles.root
        })({
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          overflowY: 'auto',
          height: '100%',
          padding: '0 4px',
          maxHeight: '304px'
        });
        const YearPicker = /*#__PURE__*/reactExports.forwardRef(function YearPicker(inProps, ref) {
          const now = useNow();
          const theme = useTheme$1();
          const utils = useUtils();
          const props = useYearPickerDefaultizedProps(inProps, 'MuiYearPicker');
          const {
            autoFocus,
            className,
            date,
            disabled,
            disableFuture,
            disablePast,
            maxDate,
            minDate,
            onChange,
            readOnly,
            shouldDisableYear,
            disableHighlightToday,
            onYearFocus,
            hasFocus,
            onFocusedViewChange
          } = props;
          const ownerState = props;
          const classes = useUtilityClasses$2(ownerState);
          const selectedDateOrStartOfYear = reactExports.useMemo(() => date != null ? date : utils.startOfYear(now), [now, utils, date]);
          const currentYear = reactExports.useMemo(() => {
            if (date != null) {
              return utils.getYear(date);
            }
            if (disableHighlightToday) {
              return null;
            }
            return utils.getYear(now);
          }, [now, date, utils, disableHighlightToday]);
          const wrapperVariant = reactExports.useContext(WrapperVariantContext);
          const selectedYearRef = reactExports.useRef(null);
          const [focusedYear, setFocusedYear] = reactExports.useState(() => currentYear || utils.getYear(now));
          const [internalHasFocus, setInternalHasFocus] = useControlled({
            name: 'YearPicker',
            state: 'hasFocus',
            controlled: hasFocus,
            default: autoFocus
          });
          const changeHasFocus = reactExports.useCallback(newHasFocus => {
            setInternalHasFocus(newHasFocus);
            if (onFocusedViewChange) {
              onFocusedViewChange(newHasFocus);
            }
          }, [setInternalHasFocus, onFocusedViewChange]);
          const isYearDisabled = reactExports.useCallback(dateToValidate => {
            if (disablePast && utils.isBeforeYear(dateToValidate, now)) {
              return true;
            }
            if (disableFuture && utils.isAfterYear(dateToValidate, now)) {
              return true;
            }
            if (minDate && utils.isBeforeYear(dateToValidate, minDate)) {
              return true;
            }
            if (maxDate && utils.isAfterYear(dateToValidate, maxDate)) {
              return true;
            }
            if (shouldDisableYear && shouldDisableYear(dateToValidate)) {
              return true;
            }
            return false;
          }, [disableFuture, disablePast, maxDate, minDate, now, shouldDisableYear, utils]);
          const handleYearSelection = (event, year, isFinish = 'finish') => {
            if (readOnly) {
              return;
            }
            const newDate = utils.setYear(selectedDateOrStartOfYear, year);
            onChange(newDate, isFinish);
          };
          const focusYear = reactExports.useCallback(year => {
            if (!isYearDisabled(utils.setYear(selectedDateOrStartOfYear, year))) {
              setFocusedYear(year);
              changeHasFocus(true);
              onYearFocus == null ? void 0 : onYearFocus(year);
            }
          }, [isYearDisabled, utils, selectedDateOrStartOfYear, changeHasFocus, onYearFocus]);
          reactExports.useEffect(() => {
            setFocusedYear(prevFocusedYear => currentYear !== null && prevFocusedYear !== currentYear ? currentYear : prevFocusedYear);
          }, [currentYear]);
          const yearsInRow = wrapperVariant === 'desktop' ? 4 : 3;
          const handleKeyDown = reactExports.useCallback((event, year) => {
            switch (event.key) {
              case 'ArrowUp':
                focusYear(year - yearsInRow);
                event.preventDefault();
                break;
              case 'ArrowDown':
                focusYear(year + yearsInRow);
                event.preventDefault();
                break;
              case 'ArrowLeft':
                focusYear(year + (theme.direction === 'ltr' ? -1 : 1));
                event.preventDefault();
                break;
              case 'ArrowRight':
                focusYear(year + (theme.direction === 'ltr' ? 1 : -1));
                event.preventDefault();
                break;
            }
          }, [focusYear, theme.direction, yearsInRow]);
          const handleFocus = reactExports.useCallback((event, year) => {
            focusYear(year);
          }, [focusYear]);
          const handleBlur = reactExports.useCallback((event, year) => {
            if (focusedYear === year) {
              changeHasFocus(false);
            }
          }, [focusedYear, changeHasFocus]);
          const nowYear = utils.getYear(now);
          const scrollerRef = reactExports.useRef(null);
          const handleRef = useForkRef(ref, scrollerRef);
          reactExports.useEffect(() => {
            if (autoFocus || scrollerRef.current === null) {
              return;
            }
            const tabbableButton = scrollerRef.current.querySelector('[tabindex="0"]');
            if (!tabbableButton) {
              return;
            } // Taken from useScroll in x-data-grid, but vertically centered

            const offsetHeight = tabbableButton.offsetHeight;
            const offsetTop = tabbableButton.offsetTop;
            const clientHeight = scrollerRef.current.clientHeight;
            const scrollTop = scrollerRef.current.scrollTop;
            const elementBottom = offsetTop + offsetHeight;
            if (offsetHeight > clientHeight || offsetTop < scrollTop) {
              // Button already visible
              return;
            }
            scrollerRef.current.scrollTop = elementBottom - clientHeight / 2 - offsetHeight / 2;
          }, [autoFocus]);
          return /*#__PURE__*/jsxRuntimeExports.jsx(YearPickerRoot, {
            ref: handleRef,
            className: clsx(classes.root, className),
            ownerState: ownerState,
            children: utils.getYearRange(minDate, maxDate).map(year => {
              const yearNumber = utils.getYear(year);
              const selected = yearNumber === currentYear;
              return /*#__PURE__*/jsxRuntimeExports.jsx(PickersYear, {
                selected: selected,
                value: yearNumber,
                onClick: handleYearSelection,
                onKeyDown: handleKeyDown,
                autoFocus: internalHasFocus && yearNumber === focusedYear,
                ref: selected ? selectedYearRef : undefined,
                disabled: disabled || isYearDisabled(year),
                tabIndex: yearNumber === focusedYear ? 0 : -1,
                onFocus: handleFocus,
                onBlur: handleBlur,
                "aria-current": nowYear === yearNumber ? 'date' : undefined,
                children: utils.format(year, 'year')
              }, utils.format(year, 'year'));
            })
          });
        });
        const defaultReduceAnimations = typeof navigator !== 'undefined' && /(android)/i.test(navigator.userAgent);
        const getCalendarPickerUtilityClass = slot => generateUtilityClass('MuiCalendarPicker', slot);
        generateUtilityClasses('MuiCalendarPicker', ['root', 'viewTransitionContainer']);
        const _excluded$6 = ["autoFocus", "onViewChange", "date", "disableFuture", "disablePast", "defaultCalendarMonth", "onChange", "onYearChange", "onMonthChange", "reduceAnimations", "shouldDisableDate", "shouldDisableMonth", "shouldDisableYear", "view", "views", "openTo", "className", "disabled", "readOnly", "minDate", "maxDate", "disableHighlightToday", "focusedView", "onFocusedViewChange", "classes"];
        const useUtilityClasses$1 = ownerState => {
          const {
            classes
          } = ownerState;
          const slots = {
            root: ['root'],
            viewTransitionContainer: ['viewTransitionContainer']
          };
          return composeClasses(slots, getCalendarPickerUtilityClass, classes);
        };
        function useCalendarPickerDefaultizedProps(props, name) {
          const utils = useUtils();
          const defaultDates = useDefaultDates();
          const themeProps = useThemeProps({
            props,
            name
          });
          return _extends({
            loading: false,
            disablePast: false,
            disableFuture: false,
            openTo: 'day',
            views: ['year', 'day'],
            reduceAnimations: defaultReduceAnimations,
            renderLoading: () => /*#__PURE__*/jsxRuntimeExports.jsx("span", {
              children: "..."
            })
          }, themeProps, {
            minDate: parseNonNullablePickerDate(utils, themeProps.minDate, defaultDates.minDate),
            maxDate: parseNonNullablePickerDate(utils, themeProps.maxDate, defaultDates.maxDate)
          });
        }
        const CalendarPickerRoot = styled(PickerViewRoot, {
          name: 'MuiCalendarPicker',
          slot: 'Root',
          overridesResolver: (props, styles) => styles.root
        })({
          display: 'flex',
          flexDirection: 'column'
        });
        const CalendarPickerViewTransitionContainer = styled(PickersFadeTransitionGroup, {
          name: 'MuiCalendarPicker',
          slot: 'ViewTransitionContainer',
          overridesResolver: (props, styles) => styles.viewTransitionContainer
        })({});

        /**
         *
         * Demos:
         *
         * - [Date Picker](https://mui.com/x/react-date-pickers/date-picker/)
         *
         * API:
         *
         * - [CalendarPicker API](https://mui.com/x/api/date-pickers/calendar-picker/)
         */
        const CalendarPicker = /*#__PURE__*/reactExports.forwardRef(function CalendarPicker(inProps, ref) {
          const utils = useUtils();
          const id = useId();
          const props = useCalendarPickerDefaultizedProps(inProps, 'MuiCalendarPicker');
          const {
              autoFocus,
              onViewChange,
              date,
              disableFuture,
              disablePast,
              defaultCalendarMonth,
              onChange,
              onYearChange,
              onMonthChange,
              reduceAnimations,
              shouldDisableDate,
              shouldDisableMonth,
              shouldDisableYear,
              view,
              views,
              openTo,
              className,
              disabled,
              readOnly,
              minDate,
              maxDate,
              disableHighlightToday,
              focusedView,
              onFocusedViewChange
            } = props,
            other = _objectWithoutPropertiesLoose(props, _excluded$6);
          const {
            openView,
            setOpenView,
            openNext
          } = useViews({
            view,
            views,
            openTo,
            onChange,
            onViewChange
          });
          const {
            calendarState,
            changeFocusedDay,
            changeMonth,
            handleChangeMonth,
            isDateDisabled,
            onMonthSwitchingAnimationEnd
          } = useCalendarState({
            date,
            defaultCalendarMonth,
            reduceAnimations,
            onMonthChange,
            minDate,
            maxDate,
            shouldDisableDate,
            disablePast,
            disableFuture
          });
          const handleDateMonthChange = reactExports.useCallback((newDate, selectionState) => {
            const startOfMonth = utils.startOfMonth(newDate);
            const endOfMonth = utils.endOfMonth(newDate);
            const closestEnabledDate = isDateDisabled(newDate) ? findClosestEnabledDate({
              utils,
              date: newDate,
              minDate: utils.isBefore(minDate, startOfMonth) ? startOfMonth : minDate,
              maxDate: utils.isAfter(maxDate, endOfMonth) ? endOfMonth : maxDate,
              disablePast,
              disableFuture,
              isDateDisabled
            }) : newDate;
            if (closestEnabledDate) {
              onChange(closestEnabledDate, selectionState);
              onMonthChange == null ? void 0 : onMonthChange(startOfMonth);
            } else {
              openNext();
              changeMonth(startOfMonth);
            }
            changeFocusedDay(closestEnabledDate, true);
          }, [changeFocusedDay, disableFuture, disablePast, isDateDisabled, maxDate, minDate, onChange, onMonthChange, changeMonth, openNext, utils]);
          const handleDateYearChange = reactExports.useCallback((newDate, selectionState) => {
            const startOfYear = utils.startOfYear(newDate);
            const endOfYear = utils.endOfYear(newDate);
            const closestEnabledDate = isDateDisabled(newDate) ? findClosestEnabledDate({
              utils,
              date: newDate,
              minDate: utils.isBefore(minDate, startOfYear) ? startOfYear : minDate,
              maxDate: utils.isAfter(maxDate, endOfYear) ? endOfYear : maxDate,
              disablePast,
              disableFuture,
              isDateDisabled
            }) : newDate;
            if (closestEnabledDate) {
              onChange(closestEnabledDate, selectionState);
              onYearChange == null ? void 0 : onYearChange(closestEnabledDate);
            } else {
              openNext();
              changeMonth(startOfYear);
            }
            changeFocusedDay(closestEnabledDate, true);
          }, [changeFocusedDay, disableFuture, disablePast, isDateDisabled, maxDate, minDate, onChange, onYearChange, openNext, utils, changeMonth]);
          const onSelectedDayChange = reactExports.useCallback((day, isFinish) => {
            if (date && day) {
              // If there is a date already selected, then we want to keep its time
              return onChange(utils.mergeDateAndTime(day, date), isFinish);
            }
            return onChange(day, isFinish);
          }, [utils, date, onChange]);
          reactExports.useEffect(() => {
            if (date) {
              changeMonth(date);
            }
          }, [date]); // eslint-disable-line

          const ownerState = props;
          const classes = useUtilityClasses$1(ownerState);
          const baseDateValidationProps = {
            disablePast,
            disableFuture,
            maxDate,
            minDate
          }; // When disabled, limit the view to the selected date

          const minDateWithDisabled = disabled && date || minDate;
          const maxDateWithDisabled = disabled && date || maxDate;
          const commonViewProps = {
            disableHighlightToday,
            readOnly,
            disabled
          };
          const gridLabelId = `${id}-grid-label`;
          const [internalFocusedView, setInternalFocusedView] = useControlled({
            name: 'DayPicker',
            state: 'focusedView',
            controlled: focusedView,
            default: autoFocus ? openView : null
          });
          const hasFocus = internalFocusedView !== null;
          const handleFocusedViewChange = useEventCallback(eventView => newHasFocus => {
            if (onFocusedViewChange) {
              // Use the calendar or clock logic
              onFocusedViewChange(eventView)(newHasFocus);
              return;
            } // If alone, do the local modifications

            if (newHasFocus) {
              setInternalFocusedView(eventView);
            } else {
              setInternalFocusedView(prevView => prevView === eventView ? null : prevView);
            }
          });
          const prevOpenViewRef = reactExports.useRef(openView);
          reactExports.useEffect(() => {
            // Set focus to the button when switching from a view to another
            if (prevOpenViewRef.current === openView) {
              return;
            }
            prevOpenViewRef.current = openView;
            handleFocusedViewChange(openView)(true);
          }, [openView, handleFocusedViewChange]);
          return /*#__PURE__*/jsxRuntimeExports.jsxs(CalendarPickerRoot, {
            ref: ref,
            className: clsx(classes.root, className),
            ownerState: ownerState,
            children: [/*#__PURE__*/jsxRuntimeExports.jsx(PickersCalendarHeader, _extends({}, other, {
              views: views,
              openView: openView,
              currentMonth: calendarState.currentMonth,
              onViewChange: setOpenView,
              onMonthChange: (newMonth, direction) => handleChangeMonth({
                newMonth,
                direction
              }),
              minDate: minDateWithDisabled,
              maxDate: maxDateWithDisabled,
              disabled: disabled,
              disablePast: disablePast,
              disableFuture: disableFuture,
              reduceAnimations: reduceAnimations,
              labelId: gridLabelId
            })), /*#__PURE__*/jsxRuntimeExports.jsx(CalendarPickerViewTransitionContainer, {
              reduceAnimations: reduceAnimations,
              className: classes.viewTransitionContainer,
              transKey: openView,
              ownerState: ownerState,
              children: /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
                children: [openView === 'year' && /*#__PURE__*/jsxRuntimeExports.jsx(YearPicker, _extends({}, other, baseDateValidationProps, commonViewProps, {
                  autoFocus: autoFocus,
                  date: date,
                  onChange: handleDateYearChange,
                  shouldDisableYear: shouldDisableYear,
                  hasFocus: hasFocus,
                  onFocusedViewChange: handleFocusedViewChange('year')
                })), openView === 'month' && /*#__PURE__*/jsxRuntimeExports.jsx(MonthPicker, _extends({}, baseDateValidationProps, commonViewProps, {
                  autoFocus: autoFocus,
                  hasFocus: hasFocus,
                  className: className,
                  date: date,
                  onChange: handleDateMonthChange,
                  shouldDisableMonth: shouldDisableMonth,
                  onFocusedViewChange: handleFocusedViewChange('month')
                })), openView === 'day' && /*#__PURE__*/jsxRuntimeExports.jsx(DayPicker, _extends({}, other, calendarState, baseDateValidationProps, commonViewProps, {
                  autoFocus: autoFocus,
                  onMonthSwitchingAnimationEnd: onMonthSwitchingAnimationEnd,
                  onFocusedDayChange: changeFocusedDay,
                  reduceAnimations: reduceAnimations,
                  selectedDays: [date],
                  onSelectedDaysChange: onSelectedDayChange,
                  shouldDisableDate: shouldDisableDate,
                  hasFocus: hasFocus,
                  onFocusedViewChange: handleFocusedViewChange('day'),
                  gridLabelId: gridLabelId
                }))]
              })
            })]
          });
        });
        const useRifm = props => {
          const [, refresh] = reactExports.useReducer(c => c + 1, 0);
          const valueRef = reactExports.useRef(null);
          const {
            replace,
            append
          } = props;
          const userValue = replace ? replace(props.format(props.value)) : props.format(props.value); // state of delete button see comments below about inputType support

          const isDeleleteButtonDownRef = reactExports.useRef(false);
          const onChange = evt => {
            const eventValue = evt.target.value;
            valueRef.current = [eventValue,
            // eventValue
            evt.target,
            // input
            eventValue.length > userValue.length,
            // isSizeIncreaseOperation
            isDeleleteButtonDownRef.current,
            // isDeleleteButtonDown
            userValue === props.format(eventValue) // isNoOperation
            ];
            // that allows us to calculate right cursor position after formatting (see getCursorPosition)
            // then we format new value and call props.onChange with masked/formatted value
            // and finally we are able to set cursor position into right place

            refresh();
          }; // React prints warn on server in non production mode about useLayoutEffect usage
          // in both cases it's noop

          {
            reactExports.useLayoutEffect(() => {
              if (valueRef.current == null) return;
              let [eventValue, input, isSizeIncreaseOperation, isDeleleteButtonDown,
              // No operation means that value itself hasn't been changed, BTW cursor, selection etc can be changed
              isNoOperation] = valueRef.current;
              valueRef.current = null; // this usually occurs on deleting special symbols like ' here 123'123.00
              // in case of isDeleleteButtonDown cursor should move differently vs backspace

              const deleteWasNoOp = isDeleleteButtonDown && isNoOperation;
              const valueAfterSelectionStart = eventValue.slice(input.selectionStart);
              const acceptedCharIndexAfterDelete = valueAfterSelectionStart.search(props.accept || /\d/g);
              const charsToSkipAfterDelete = acceptedCharIndexAfterDelete !== -1 ? acceptedCharIndexAfterDelete : 0; // Create string from only accepted symbols

              const clean = str => (str.match(props.accept || /\d/g) || []).join('');
              const valueBeforeSelectionStart = clean(eventValue.substr(0, input.selectionStart)); // trying to find cursor position in formatted value having knowledge about valueBeforeSelectionStart
              // This works because we assume that format doesn't change the order of accepted symbols.
              // Imagine we have formatter which adds ' symbol between numbers, and by default we refuse all non numeric symbols
              // for example we had input = 1'2|'4 (| means cursor position) then user entered '3' symbol
              // inputValue = 1'23'|4 so valueBeforeSelectionStart = 123 and formatted value = 1'2'3'4
              // calling getCursorPosition("1'2'3'4") will give us position after 3, 1'2'3|'4
              // so for formatting just this function to determine cursor position after formatting is enough
              // with masking we need to do some additional checks see `mask` below

              const getCursorPosition = val => {
                let start = 0;
                let cleanPos = 0;
                for (let i = 0; i !== valueBeforeSelectionStart.length; ++i) {
                  let newPos = val.indexOf(valueBeforeSelectionStart[i], start) + 1;
                  let newCleanPos = clean(val).indexOf(valueBeforeSelectionStart[i], cleanPos) + 1; // this skips position change if accepted symbols order was broken
                  // For example fixes edge case with fixed point numbers:
                  // You have '0|.00', then press 1, it becomes 01|.00 and after format 1.00, this breaks our assumption
                  // that order of accepted symbols is not changed after format,
                  // so here we don't update start position if other accepted symbols was inbetween current and new position

                  if (newCleanPos - cleanPos > 1) {
                    newPos = start;
                    newCleanPos = cleanPos;
                  }
                  cleanPos = Math.max(newCleanPos, cleanPos);
                  start = Math.max(start, newPos);
                }
                return start;
              }; // Masking part, for masks if size of mask is above some value
              // we need to replace symbols instead of do nothing as like in format

              if (props.mask === true && isSizeIncreaseOperation && !isNoOperation) {
                let start = getCursorPosition(eventValue);
                const c = clean(eventValue.substr(start))[0];
                start = eventValue.indexOf(c, start);
                eventValue = `${eventValue.substr(0, start)}${eventValue.substr(start + 1)}`;
              }
              let formattedValue = props.format(eventValue);
              if (append != null &&
              // cursor at the end
              input.selectionStart === eventValue.length && !isNoOperation) {
                if (isSizeIncreaseOperation) {
                  formattedValue = append(formattedValue);
                } else {
                  // If after delete last char is special character and we use append
                  // delete it too
                  // was: "12-3|" backspace pressed, then should be "12|"
                  if (clean(formattedValue.slice(-1)) === '') {
                    formattedValue = formattedValue.slice(0, -1);
                  }
                }
              }
              const replacedValue = replace ? replace(formattedValue) : formattedValue;
              if (userValue === replacedValue) {
                // if nothing changed for formatted value, just refresh so userValue will be used at render
                refresh();
              } else {
                props.onChange(replacedValue);
              }
              return () => {
                let start = getCursorPosition(formattedValue); // Visually improves working with masked values,
                // like cursor jumping over refused symbols
                // as an example date mask: was "5|1-24-3" then user pressed "6"
                // it becomes "56-|12-43" with this code, and "56|-12-43" without

                if (props.mask != null && (isSizeIncreaseOperation || isDeleleteButtonDown && !deleteWasNoOp)) {
                  while (formattedValue[start] && clean(formattedValue[start]) === '') {
                    start += 1;
                  }
                }
                input.selectionStart = input.selectionEnd = start + (deleteWasNoOp ? 1 + charsToSkipAfterDelete : 0);
              };
            });
          }
          reactExports.useEffect(() => {
            // until https://developer.mozilla.org/en-US/docs/Web/API/InputEvent/inputType will be supported
            // by all major browsers (now supported by: +chrome, +safari, ?edge, !firefox)
            // there is no way I found to distinguish in onChange
            // backspace or delete was called in some situations
            // firefox track https://bugzilla.mozilla.org/show_bug.cgi?id=1447239
            const handleKeyDown = evt => {
              if (evt.code === 'Delete') {
                isDeleleteButtonDownRef.current = true;
              }
            };
            const handleKeyUp = evt => {
              if (evt.code === 'Delete') {
                isDeleleteButtonDownRef.current = false;
              }
            };
            document.addEventListener('keydown', handleKeyDown);
            document.addEventListener('keyup', handleKeyUp);
            return () => {
              document.removeEventListener('keydown', handleKeyDown);
              document.removeEventListener('keyup', handleKeyUp);
            };
          }, []);
          return {
            value: valueRef.current != null ? valueRef.current[0] : userValue,
            onChange
          };
        };
        const getDisplayDate = (utils, rawValue, inputFormat) => {
          const date = utils.date(rawValue);
          const isEmpty = rawValue === null;
          if (isEmpty) {
            return '';
          }
          return utils.isValid(date) ? utils.formatByString(
          // TODO: should `isValid` narrow `TDate | null` to `NonNullable<TDate>`?
          // Either we allow `TDate | null` to be valid and guard against calling `formatByString` with `null`.
          // Or we ensure `formatByString` is callable with `null`.
          date, inputFormat) : '';
        };
        const MASK_USER_INPUT_SYMBOL = '_';
        const staticDateWith2DigitTokens = '2019-11-21T22:30:00.000';
        const staticDateWith1DigitTokens = '2019-01-01T09:00:00.000';
        function getMaskFromCurrentFormat(mask, format, acceptRegex, utils) {
          if (mask) {
            return mask;
          }
          const formattedDateWith1Digit = utils.formatByString(utils.date(staticDateWith1DigitTokens), format);
          const inferredFormatPatternWith1Digits = formattedDateWith1Digit.replace(acceptRegex, MASK_USER_INPUT_SYMBOL);
          const inferredFormatPatternWith2Digits = utils.formatByString(utils.date(staticDateWith2DigitTokens), format).replace(acceptRegex, '_');
          if (inferredFormatPatternWith1Digits === inferredFormatPatternWith2Digits) {
            return inferredFormatPatternWith1Digits;
          }
          return '';
        }
        function checkMaskIsValidForCurrentFormat(mask, format, acceptRegex, utils) {
          if (!mask) {
            return false;
          }
          const formattedDateWith1Digit = utils.formatByString(utils.date(staticDateWith1DigitTokens), format);
          const inferredFormatPatternWith1Digits = formattedDateWith1Digit.replace(acceptRegex, MASK_USER_INPUT_SYMBOL);
          const inferredFormatPatternWith2Digits = utils.formatByString(utils.date(staticDateWith2DigitTokens), format).replace(acceptRegex, '_');
          const isMaskValid = inferredFormatPatternWith2Digits === inferredFormatPatternWith1Digits && mask === inferredFormatPatternWith2Digits;
          if (!isMaskValid && utils.lib !== 'luxon' && "production" !== 'production') {
            if (format.includes('MMM')) {
              console.warn([`Mask does not support literals such as 'MMM'.`, `Either use numbers with fix length or disable mask feature with 'disableMaskedInput' prop`, `Falling down to uncontrolled no-mask input.`].join('\n'));
            } else if (inferredFormatPatternWith2Digits && inferredFormatPatternWith2Digits !== inferredFormatPatternWith1Digits) {
              console.warn([`Mask does not support numbers with variable length such as 'M'.`, `Either use numbers with fix length or disable mask feature with 'disableMaskedInput' prop`, `Falling down to uncontrolled no-mask input.`].join('\n'));
            } else if (mask) {
              console.warn([`The mask "${mask}" you passed is not valid for the format used ${format}.`, `Falling down to uncontrolled no-mask input.`].join('\n'));
            }
          }
          return isMaskValid;
        }
        const maskedDateFormatter = (mask, acceptRegexp) => value => {
          let outputCharIndex = 0;
          return value.split('').map((char, inputCharIndex) => {
            acceptRegexp.lastIndex = 0;
            if (outputCharIndex > mask.length - 1) {
              return '';
            }
            const maskChar = mask[outputCharIndex];
            const nextMaskChar = mask[outputCharIndex + 1];
            const acceptedChar = acceptRegexp.test(char) ? char : '';
            const formattedChar = maskChar === MASK_USER_INPUT_SYMBOL ? acceptedChar : maskChar + acceptedChar;
            outputCharIndex += formattedChar.length;
            const isLastCharacter = inputCharIndex === value.length - 1;
            if (isLastCharacter && nextMaskChar && nextMaskChar !== MASK_USER_INPUT_SYMBOL) {
              // when cursor at the end of mask part (e.g. month) prerender next symbol "21" -> "21/"
              return formattedChar ? formattedChar + nextMaskChar : '';
            }
            return formattedChar;
          }).join('');
        };
        const useMaskedInput = ({
          acceptRegex = /[\d]/gi,
          disabled,
          disableMaskedInput,
          ignoreInvalidInputs,
          inputFormat,
          inputProps,
          label,
          mask,
          onChange,
          rawValue,
          readOnly,
          rifmFormatter,
          TextFieldProps,
          validationError
        }) => {
          const utils = useUtils();
          const formatHelperText = utils.getFormatHelperText(inputFormat);
          const {
            shouldUseMaskedInput,
            maskToUse
          } = reactExports.useMemo(() => {
            // formatting of dates is a quite slow thing, so do not make useless .format calls
            if (disableMaskedInput) {
              return {
                shouldUseMaskedInput: false,
                maskToUse: ''
              };
            }
            const computedMaskToUse = getMaskFromCurrentFormat(mask, inputFormat, acceptRegex, utils);
            return {
              shouldUseMaskedInput: checkMaskIsValidForCurrentFormat(computedMaskToUse, inputFormat, acceptRegex, utils),
              maskToUse: computedMaskToUse
            };
          }, [acceptRegex, disableMaskedInput, inputFormat, mask, utils]);
          const formatter = reactExports.useMemo(() => shouldUseMaskedInput && maskToUse ? maskedDateFormatter(maskToUse, acceptRegex) : st => st, [acceptRegex, maskToUse, shouldUseMaskedInput]); // TODO: Implement with controlled vs uncontrolled `rawValue`

          const parsedValue = rawValue === null ? null : utils.date(rawValue); // Track the value of the input

          const [innerInputValue, setInnerInputValue] = reactExports.useState(parsedValue); // control the input text

          const [innerDisplayedInputValue, setInnerDisplayedInputValue] = reactExports.useState(getDisplayDate(utils, rawValue, inputFormat)); // Inspired from autocomplete: https://github.com/mui/material-ui/blob/2c89d036dc2e16f100528f161600dffc83241768/packages/mui-base/src/AutocompleteUnstyled/useAutocomplete.js#L185:L201

          const prevRawValue = reactExports.useRef();
          const prevLocale = reactExports.useRef(utils.locale);
          const prevInputFormat = reactExports.useRef(inputFormat);
          reactExports.useEffect(() => {
            const rawValueHasChanged = rawValue !== prevRawValue.current;
            const localeHasChanged = utils.locale !== prevLocale.current;
            const inputFormatHasChanged = inputFormat !== prevInputFormat.current;
            prevRawValue.current = rawValue;
            prevLocale.current = utils.locale;
            prevInputFormat.current = inputFormat;
            if (!rawValueHasChanged && !localeHasChanged && !inputFormatHasChanged) {
              return;
            }
            const newParsedValue = rawValue === null ? null : utils.date(rawValue);
            const isAcceptedValue = rawValue === null || utils.isValid(newParsedValue);
            let innerEqualsParsed = innerInputValue === null && newParsedValue === null; // equal by being both null

            if (innerInputValue !== null && newParsedValue !== null) {
              const areEqual = utils.isEqual(innerInputValue, newParsedValue);
              if (areEqual) {
                innerEqualsParsed = true;
              } else {
                const diff = Math.abs(utils.getDiff(innerInputValue, newParsedValue)); // diff in ms

                innerEqualsParsed = diff === 0 ? areEqual // if no diff, use equal to test the time-zone
                : diff < 1000; // accept a difference bellow 1s
              }
            }

            if (!localeHasChanged && !inputFormatHasChanged && (!isAcceptedValue || innerEqualsParsed)) {
              return;
            } // When dev set a new valid value, we trust them

            const newDisplayDate = getDisplayDate(utils, rawValue, inputFormat);
            setInnerInputValue(newParsedValue);
            setInnerDisplayedInputValue(newDisplayDate);
          }, [utils, rawValue, inputFormat, innerInputValue]);
          const handleChange = text => {
            const finalString = text === '' || text === mask ? '' : text;
            setInnerDisplayedInputValue(finalString);
            const date = finalString === null ? null : utils.parse(finalString, inputFormat);
            if (ignoreInvalidInputs && !utils.isValid(date)) {
              return;
            }
            setInnerInputValue(date);
            onChange(date, finalString || undefined);
          };
          const rifmProps = useRifm({
            value: innerDisplayedInputValue,
            onChange: handleChange,
            format: rifmFormatter || formatter
          });
          const inputStateArgs = shouldUseMaskedInput ? rifmProps : {
            value: innerDisplayedInputValue,
            onChange: event => {
              handleChange(event.currentTarget.value);
            }
          };
          return _extends({
            label,
            disabled,
            error: validationError,
            inputProps: _extends({}, inputStateArgs, {
              disabled,
              placeholder: formatHelperText,
              readOnly,
              type: shouldUseMaskedInput ? 'tel' : 'text'
            }, inputProps)
          }, TextFieldProps);
        };
        const _excluded$5 = ["className", "components", "disableOpenPicker", "getOpenDialogAriaText", "InputAdornmentProps", "InputProps", "inputRef", "openPicker", "OpenPickerButtonProps", "renderInput"];
        const KeyboardDateInput = exports('K', /*#__PURE__*/reactExports.forwardRef(function KeyboardDateInput(props, ref) {
          const {
              className,
              components = {},
              disableOpenPicker,
              getOpenDialogAriaText: getOpenDialogAriaTextProp,
              InputAdornmentProps,
              InputProps,
              inputRef,
              openPicker,
              OpenPickerButtonProps,
              renderInput
            } = props,
            other = _objectWithoutPropertiesLoose(props, _excluded$5);
          const localeText = useLocaleText();
          const getOpenDialogAriaText = getOpenDialogAriaTextProp != null ? getOpenDialogAriaTextProp : localeText.openDatePickerDialogue;
          const utils = useUtils();
          const textFieldProps = useMaskedInput(other);
          const adornmentPosition = (InputAdornmentProps == null ? void 0 : InputAdornmentProps.position) || 'end';
          const OpenPickerIcon = components.OpenPickerIcon || Calendar;
          return renderInput(_extends({
            ref,
            inputRef,
            className
          }, textFieldProps, {
            InputProps: _extends({}, InputProps, {
              [`${adornmentPosition}Adornment`]: disableOpenPicker ? undefined : /*#__PURE__*/jsxRuntimeExports.jsx(InputAdornment, _extends({
                position: adornmentPosition
              }, InputAdornmentProps, {
                children: /*#__PURE__*/jsxRuntimeExports.jsx(IconButton, _extends({
                  edge: adornmentPosition,
                  disabled: other.disabled || other.readOnly,
                  "aria-label": getOpenDialogAriaText(other.rawValue, utils)
                }, OpenPickerButtonProps, {
                  onClick: openPicker,
                  children: /*#__PURE__*/jsxRuntimeExports.jsx(OpenPickerIcon, {})
                }))
              }))
            })
          }));
        }));
        function getOrientation() {
          if (typeof window === 'undefined') {
            return 'portrait';
          }
          if (window.screen && window.screen.orientation && window.screen.orientation.angle) {
            return Math.abs(window.screen.orientation.angle) === 90 ? 'landscape' : 'portrait';
          } // Support IOS safari

          if (window.orientation) {
            return Math.abs(Number(window.orientation)) === 90 ? 'landscape' : 'portrait';
          }
          return 'portrait';
        }
        const useIsLandscape = (views, customOrientation) => {
          const [orientation, setOrientation] = reactExports.useState(getOrientation);
          useEnhancedEffect(() => {
            const eventHandler = () => {
              setOrientation(getOrientation());
            };
            window.addEventListener('orientationchange', eventHandler);
            return () => {
              window.removeEventListener('orientationchange', eventHandler);
            };
          }, []);
          if (arrayIncludes(views, ['hours', 'minutes', 'seconds'])) {
            // could not display 13:34:44 in landscape mode
            return false;
          }
          const orientationToUse = customOrientation || orientation;
          return orientationToUse === 'landscape';
        };
        const useFocusManagement = ({
          autoFocus,
          openView
        }) => {
          const [focusedView, setFocusedView] = reactExports.useState(autoFocus ? openView : null);
          const setFocusedViewCallback = reactExports.useCallback(view => newHasFocus => {
            if (newHasFocus) {
              setFocusedView(view);
            } else {
              setFocusedView(prevFocusedView => view === prevFocusedView ? null : prevFocusedView);
            }
          }, []);
          return {
            focusedView,
            setFocusedView: setFocusedViewCallback
          };
        };
        function getCalendarOrClockPickerUtilityClass(slot) {
          return generateUtilityClass('MuiCalendarOrClockPicker', slot);
        }
        generateUtilityClasses('MuiCalendarOrClockPicker', ['root', 'mobileKeyboardInputView']);
        const _excluded$4 = ["autoFocus", "className", "parsedValue", "DateInputProps", "isMobileKeyboardViewOpen", "onDateChange", "onViewChange", "openTo", "orientation", "showToolbar", "toggleMobileKeyboardView", "ToolbarComponent", "toolbarFormat", "toolbarPlaceholder", "toolbarTitle", "views", "dateRangeIcon", "timeIcon", "hideTabs", "classes"];
        const useUtilityClasses = ownerState => {
          const {
            classes
          } = ownerState;
          const slots = {
            root: ['root'],
            mobileKeyboardInputView: ['mobileKeyboardInputView']
          };
          return composeClasses(slots, getCalendarOrClockPickerUtilityClass, classes);
        };
        const MobileKeyboardInputView = styled('div', {
          name: 'MuiCalendarOrClockPicker',
          slot: 'MobileKeyboardInputView',
          overridesResolver: (_, styles) => styles.mobileKeyboardInputView
        })({
          padding: '16px 24px'
        });
        const PickerRoot = styled('div', {
          name: 'MuiCalendarOrClockPicker',
          slot: 'Root',
          overridesResolver: (_, styles) => styles.root
        })(({
          ownerState
        }) => _extends({
          display: 'flex',
          flexDirection: 'column'
        }, ownerState.isLandscape && {
          flexDirection: 'row'
        }));
        const MobileKeyboardTextFieldProps = {
          fullWidth: true
        };
        const isDatePickerView = view => view === 'year' || view === 'month' || view === 'day';
        const isTimePickerView = view => view === 'hours' || view === 'minutes' || view === 'seconds';
        function CalendarOrClockPicker(inProps) {
          var _other$components, _other$componentsProp;
          const props = useThemeProps({
            props: inProps,
            name: 'MuiCalendarOrClockPicker'
          });
          const {
              autoFocus,
              parsedValue,
              DateInputProps,
              isMobileKeyboardViewOpen,
              onDateChange,
              onViewChange,
              openTo,
              orientation,
              showToolbar,
              toggleMobileKeyboardView,
              ToolbarComponent = () => null,
              toolbarFormat,
              toolbarPlaceholder,
              toolbarTitle,
              views,
              dateRangeIcon,
              timeIcon,
              hideTabs
            } = props,
            other = _objectWithoutPropertiesLoose(props, _excluded$4);
          const TabsComponent = (_other$components = other.components) == null ? void 0 : _other$components.Tabs;
          const isLandscape = useIsLandscape(views, orientation);
          const wrapperVariant = reactExports.useContext(WrapperVariantContext);
          const classes = useUtilityClasses(props);
          const toShowToolbar = showToolbar != null ? showToolbar : wrapperVariant !== 'desktop';
          const showTabs = !hideTabs && typeof window !== 'undefined' && window.innerHeight > 667;
          const handleDateChange = reactExports.useCallback((newDate, selectionState) => {
            onDateChange(newDate, wrapperVariant, selectionState);
          }, [onDateChange, wrapperVariant]);
          const handleViewChange = reactExports.useCallback(newView => {
            if (isMobileKeyboardViewOpen) {
              toggleMobileKeyboardView();
            }
            if (onViewChange) {
              onViewChange(newView);
            }
          }, [isMobileKeyboardViewOpen, onViewChange, toggleMobileKeyboardView]);
          const {
            openView,
            setOpenView,
            handleChangeAndOpenNext
          } = useViews({
            view: undefined,
            views,
            openTo,
            onChange: handleDateChange,
            onViewChange: handleViewChange
          });
          const {
            focusedView,
            setFocusedView
          } = useFocusManagement({
            autoFocus,
            openView
          });
          return /*#__PURE__*/jsxRuntimeExports.jsxs(PickerRoot, {
            ownerState: {
              isLandscape
            },
            className: classes.root,
            children: [toShowToolbar && /*#__PURE__*/jsxRuntimeExports.jsx(ToolbarComponent, _extends({}, other, {
              views: views,
              isLandscape: isLandscape,
              parsedValue: parsedValue,
              onChange: handleDateChange,
              setOpenView: setOpenView,
              openView: openView,
              toolbarTitle: toolbarTitle,
              toolbarFormat: toolbarFormat,
              toolbarPlaceholder: toolbarPlaceholder,
              isMobileKeyboardViewOpen: isMobileKeyboardViewOpen,
              toggleMobileKeyboardView: toggleMobileKeyboardView
            })), showTabs && !!TabsComponent && /*#__PURE__*/jsxRuntimeExports.jsx(TabsComponent, _extends({
              dateRangeIcon: dateRangeIcon,
              timeIcon: timeIcon,
              view: openView,
              onChange: setOpenView
            }, (_other$componentsProp = other.componentsProps) == null ? void 0 : _other$componentsProp.tabs)), /*#__PURE__*/jsxRuntimeExports.jsx(PickerViewRoot, {
              children: isMobileKeyboardViewOpen ? /*#__PURE__*/jsxRuntimeExports.jsx(MobileKeyboardInputView, {
                className: classes.mobileKeyboardInputView,
                children: /*#__PURE__*/jsxRuntimeExports.jsx(KeyboardDateInput, _extends({}, DateInputProps, {
                  ignoreInvalidInputs: true,
                  disableOpenPicker: true,
                  TextFieldProps: MobileKeyboardTextFieldProps
                }))
              }) : /*#__PURE__*/jsxRuntimeExports.jsxs(reactExports.Fragment, {
                children: [isDatePickerView(openView) && /*#__PURE__*/jsxRuntimeExports.jsx(CalendarPicker, _extends({
                  autoFocus: autoFocus,
                  date: parsedValue,
                  onViewChange: setOpenView,
                  onChange: handleChangeAndOpenNext,
                  view: openView // Unclear why the predicate `isDatePickerView` does not imply the casted type
                  ,

                  views: views.filter(isDatePickerView),
                  focusedView: focusedView,
                  onFocusedViewChange: setFocusedView
                }, other)), isTimePickerView(openView) && /*#__PURE__*/jsxRuntimeExports.jsx(ClockPicker, _extends({}, other, {
                  autoFocus: autoFocus,
                  date: parsedValue,
                  view: openView // Unclear why the predicate `isDatePickerView` does not imply the casted type
                  ,

                  views: views.filter(isTimePickerView),
                  onChange: handleChangeAndOpenNext,
                  onViewChange: setOpenView,
                  showViewSwitcher: wrapperVariant === 'desktop'
                }))]
              })
            })]
          });
        }
        const useOpenState = ({
          open,
          onOpen,
          onClose
        }) => {
          const isControllingOpenProp = reactExports.useRef(typeof open === 'boolean').current;
          const [openState, setIsOpenState] = reactExports.useState(false); // It is required to update inner state in useEffect in order to avoid situation when
          // Our component is not mounted yet, but `open` state is set to `true` (e.g. initially opened)

          reactExports.useEffect(() => {
            if (isControllingOpenProp) {
              if (typeof open !== 'boolean') {
                throw new Error('You must not mix controlling and uncontrolled mode for `open` prop');
              }
              setIsOpenState(open);
            }
          }, [isControllingOpenProp, open]);
          const setIsOpen = reactExports.useCallback(newIsOpen => {
            if (!isControllingOpenProp) {
              setIsOpenState(newIsOpen);
            }
            if (newIsOpen && onOpen) {
              onOpen();
            }
            if (!newIsOpen && onClose) {
              onClose();
            }
          }, [isControllingOpenProp, onOpen, onClose]);
          return {
            isOpen: openState,
            setIsOpen
          };
        };
        const usePickerState = exports('i', (props, valueManager) => {
          const {
            onAccept,
            onChange,
            value,
            closeOnSelect
          } = props;
          const utils = useUtils();
          const {
            isOpen,
            setIsOpen
          } = useOpenState(props);
          const parsedDateValue = reactExports.useMemo(() => valueManager.parseInput(utils, value), [valueManager, utils, value]);
          const [lastValidDateValue, setLastValidDateValue] = reactExports.useState(parsedDateValue);
          const [dateState, setDateState] = reactExports.useState(() => ({
            committed: parsedDateValue,
            draft: parsedDateValue,
            resetFallback: parsedDateValue
          }));
          const setDate = reactExports.useCallback(params => {
            setDateState(prev => {
              switch (params.action) {
                case 'setAll':
                case 'acceptAndClose':
                  {
                    return {
                      draft: params.value,
                      committed: params.value,
                      resetFallback: params.value
                    };
                  }
                case 'setCommitted':
                  {
                    return _extends({}, prev, {
                      draft: params.value,
                      committed: params.value
                    });
                  }
                case 'setDraft':
                  {
                    return _extends({}, prev, {
                      draft: params.value
                    });
                  }
                default:
                  {
                    return prev;
                  }
              }
            });
            if (params.forceOnChangeCall || !params.skipOnChangeCall && !valueManager.areValuesEqual(utils, dateState.committed, params.value)) {
              onChange(params.value);
            }
            if (params.action === 'acceptAndClose') {
              setIsOpen(false);
              if (onAccept && !valueManager.areValuesEqual(utils, dateState.resetFallback, params.value)) {
                onAccept(params.value);
              }
            }
          }, [onAccept, onChange, setIsOpen, dateState, utils, valueManager]);
          reactExports.useEffect(() => {
            if (utils.isValid(parsedDateValue)) {
              setLastValidDateValue(parsedDateValue);
            }
          }, [utils, parsedDateValue]);
          reactExports.useEffect(() => {
            if (isOpen) {
              // Update all dates in state to equal the current prop value
              setDate({
                action: 'setAll',
                value: parsedDateValue,
                skipOnChangeCall: true
              });
            }
          }, [isOpen]); // eslint-disable-line react-hooks/exhaustive-deps
          // Set the draft and committed date to equal the new prop value.

          if (!valueManager.areValuesEqual(utils, dateState.committed, parsedDateValue)) {
            setDate({
              action: 'setCommitted',
              value: parsedDateValue,
              skipOnChangeCall: true
            });
          }
          const wrapperProps = reactExports.useMemo(() => ({
            open: isOpen,
            onClear: () => {
              // Reset all date in state to the empty value and close picker.
              setDate({
                value: valueManager.emptyValue,
                action: 'acceptAndClose',
                // force `onChange` in cases like input (value) === `Invalid date`
                forceOnChangeCall: !valueManager.areValuesEqual(utils, value, valueManager.emptyValue)
              });
            },
            onAccept: () => {
              // Set all date in state to equal the current draft value and close picker.
              setDate({
                value: dateState.draft,
                action: 'acceptAndClose',
                // force `onChange` in cases like input (value) === `Invalid date`
                forceOnChangeCall: !valueManager.areValuesEqual(utils, value, parsedDateValue)
              });
            },
            onDismiss: () => {
              // Set all dates in state to equal the last committed date.
              // e.g. Reset the state to the last committed value.
              setDate({
                value: dateState.committed,
                action: 'acceptAndClose'
              });
            },
            onCancel: () => {
              // Set all dates in state to equal the last accepted date and close picker.
              // e.g. Reset the state to the last accepted value
              setDate({
                value: dateState.resetFallback,
                action: 'acceptAndClose'
              });
            },
            onSetToday: () => {
              // Set all dates in state to equal today and close picker.
              setDate({
                value: valueManager.getTodayValue(utils),
                action: 'acceptAndClose'
              });
            }
          }), [setDate, isOpen, utils, dateState, valueManager, value, parsedDateValue]); // Mobile keyboard view is a special case.
          // When it's open picker should work like closed, because we are just showing text field

          const [isMobileKeyboardViewOpen, setMobileKeyboardViewOpen] = reactExports.useState(false);
          const pickerProps = reactExports.useMemo(() => ({
            parsedValue: dateState.draft,
            isMobileKeyboardViewOpen,
            toggleMobileKeyboardView: () => setMobileKeyboardViewOpen(!isMobileKeyboardViewOpen),
            onDateChange: (newDate, wrapperVariant, selectionState = 'partial') => {
              switch (selectionState) {
                case 'shallow':
                  {
                    // Update the `draft` state but do not fire `onChange`
                    return setDate({
                      action: 'setDraft',
                      value: newDate,
                      skipOnChangeCall: true
                    });
                  }
                case 'partial':
                  {
                    // Update the `draft` state and fire `onChange`
                    return setDate({
                      action: 'setDraft',
                      value: newDate
                    });
                  }
                case 'finish':
                  {
                    if (closeOnSelect != null ? closeOnSelect : wrapperVariant === 'desktop') {
                      // Set all dates in state to equal the new date and close picker.
                      return setDate({
                        value: newDate,
                        action: 'acceptAndClose'
                      });
                    } // Updates the `committed` state and fire `onChange`

                    return setDate({
                      value: newDate,
                      action: 'setCommitted'
                    });
                  }
                default:
                  {
                    throw new Error('MUI: Invalid selectionState passed to `onDateChange`');
                  }
              }
            }
          }), [setDate, isMobileKeyboardViewOpen, dateState.draft, closeOnSelect]);
          const handleInputChange = reactExports.useCallback((newParsedValue, keyboardInputValue) => {
            const cleanParsedValue = valueManager.valueReducer ? valueManager.valueReducer(utils, lastValidDateValue, newParsedValue) : newParsedValue;
            onChange(cleanParsedValue, keyboardInputValue);
          }, [onChange, valueManager, lastValidDateValue, utils]);
          const inputProps = reactExports.useMemo(() => ({
            onChange: handleInputChange,
            open: isOpen,
            rawValue: value,
            openPicker: () => setIsOpen(true)
          }), [handleInputChange, isOpen, value, setIsOpen]);
          const pickerState = {
            pickerProps,
            inputProps,
            wrapperProps
          };
          reactExports.useDebugValue(pickerState, () => ({
            MuiPickerState: {
              dateState,
              other: pickerState
            }
          }));
          return pickerState;
        });
        const _excluded$3 = ["onChange", "PopperProps", "PaperProps", "ToolbarComponent", "TransitionComponent", "value", "components", "componentsProps"];

        /**
         *
         * Demos:
         *
         * - [Date Picker](https://mui.com/x/react-date-pickers/date-picker/)
         *
         * API:
         *
         * - [DesktopDatePicker API](https://mui.com/x/api/date-pickers/desktop-date-picker/)
         */
        const DesktopDatePicker = /*#__PURE__*/reactExports.forwardRef(function DesktopDatePicker(inProps, ref) {
          const props = useDatePickerDefaultizedProps(inProps, 'MuiDesktopDatePicker');
          const validationError = useDateValidation(props) !== null;
          const {
            pickerProps,
            inputProps,
            wrapperProps
          } = usePickerState(props, datePickerValueManager);
          const {
              PopperProps,
              PaperProps,
              ToolbarComponent = DatePickerToolbar,
              TransitionComponent,
              components,
              componentsProps
            } = props,
            other = _objectWithoutPropertiesLoose(props, _excluded$3);
          const AllDateInputProps = _extends({}, inputProps, other, {
            components,
            componentsProps,
            ref,
            validationError
          });
          return /*#__PURE__*/jsxRuntimeExports.jsx(DesktopWrapper, _extends({}, wrapperProps, {
            DateInputProps: AllDateInputProps,
            KeyboardDateInputComponent: KeyboardDateInput,
            PopperProps: PopperProps,
            PaperProps: PaperProps,
            TransitionComponent: TransitionComponent,
            components: components,
            componentsProps: componentsProps,
            children: /*#__PURE__*/jsxRuntimeExports.jsx(CalendarOrClockPicker, _extends({}, pickerProps, {
              autoFocus: true,
              toolbarTitle: props.label || props.toolbarTitle,
              ToolbarComponent: ToolbarComponent,
              DateInputProps: AllDateInputProps,
              components: components,
              componentsProps: componentsProps
            }, other))
          }));
        });
        const PickersModalDialogRoot = styled(Dialog)({
          [`& .${dialogClasses.container}`]: {
            outline: 0
          },
          [`& .${dialogClasses.paper}`]: {
            outline: 0,
            minWidth: DIALOG_WIDTH
          }
        });
        const PickersModalDialogContent = styled(DialogContent)({
          '&:first-of-type': {
            padding: 0
          }
        });
        const PickersModalDialog = props => {
          var _components$ActionBar;
          const {
            children,
            DialogProps = {},
            onAccept,
            onClear,
            onDismiss,
            onCancel,
            onSetToday,
            open,
            components,
            componentsProps
          } = props;
          const ActionBar = (_components$ActionBar = components == null ? void 0 : components.ActionBar) != null ? _components$ActionBar : PickersActionBar;
          return /*#__PURE__*/jsxRuntimeExports.jsxs(PickersModalDialogRoot, _extends({
            open: open,
            onClose: onDismiss
          }, DialogProps, {
            children: [/*#__PURE__*/jsxRuntimeExports.jsx(PickersModalDialogContent, {
              children: children
            }), /*#__PURE__*/jsxRuntimeExports.jsx(ActionBar, _extends({
              onAccept: onAccept,
              onClear: onClear,
              onCancel: onCancel,
              onSetToday: onSetToday,
              actions: ['cancel', 'accept']
            }, componentsProps == null ? void 0 : componentsProps.actionBar))]
          }));
        };
        const _excluded$2 = ["children", "DateInputProps", "DialogProps", "onAccept", "onClear", "onDismiss", "onCancel", "onSetToday", "open", "PureDateInputComponent", "components", "componentsProps"];
        function MobileWrapper(props) {
          const {
              children,
              DateInputProps,
              DialogProps,
              onAccept,
              onClear,
              onDismiss,
              onCancel,
              onSetToday,
              open,
              PureDateInputComponent,
              components,
              componentsProps
            } = props,
            other = _objectWithoutPropertiesLoose(props, _excluded$2);
          return /*#__PURE__*/jsxRuntimeExports.jsxs(WrapperVariantContext.Provider, {
            value: "mobile",
            children: [/*#__PURE__*/jsxRuntimeExports.jsx(PureDateInputComponent, _extends({
              components: components
            }, other, DateInputProps)), /*#__PURE__*/jsxRuntimeExports.jsx(PickersModalDialog, {
              DialogProps: DialogProps,
              onAccept: onAccept,
              onClear: onClear,
              onDismiss: onDismiss,
              onCancel: onCancel,
              onSetToday: onSetToday,
              open: open,
              components: components,
              componentsProps: componentsProps,
              children: children
            })]
          });
        }

        // TODO: why is this called "Pure*" when it's not memoized? Does "Pure" mean "readonly"?
        const PureDateInput = exports('l', /*#__PURE__*/reactExports.forwardRef(function PureDateInput(props, ref) {
          const {
            disabled,
            getOpenDialogAriaText: getOpenDialogAriaTextProp,
            inputFormat,
            InputProps,
            inputRef,
            label,
            openPicker: onOpen,
            rawValue,
            renderInput,
            TextFieldProps = {},
            validationError,
            className
          } = props;
          const localeText = useLocaleText(); // The prop can not be deprecated
          // Default is "Choose date, ...", but time pickers override it with "Choose time, ..."

          const getOpenDialogAriaText = getOpenDialogAriaTextProp != null ? getOpenDialogAriaTextProp : localeText.openDatePickerDialogue;
          const utils = useUtils();
          const PureDateInputProps = reactExports.useMemo(() => _extends({}, InputProps, {
            readOnly: true
          }), [InputProps]);
          const inputValue = getDisplayDate(utils, rawValue, inputFormat);
          const handleOnClick = useEventCallback(event => {
            event.stopPropagation();
            onOpen();
          });
          return renderInput(_extends({
            label,
            disabled,
            ref,
            inputRef,
            error: validationError,
            InputProps: PureDateInputProps,
            className
          }, !props.readOnly && !props.disabled && {
            onClick: handleOnClick
          }, {
            inputProps: _extends({
              disabled,
              readOnly: true,
              'aria-readonly': true,
              'aria-label': getOpenDialogAriaText(rawValue, utils),
              value: inputValue
            }, !props.readOnly && {
              onClick: handleOnClick
            }, {
              onKeyDown: onSpaceOrEnter(onOpen)
            })
          }, TextFieldProps));
        }));
        const _excluded$1 = ["ToolbarComponent", "value", "onChange", "components", "componentsProps"];

        /**
         *
         * Demos:
         *
         * - [Date Picker](https://mui.com/x/react-date-pickers/date-picker/)
         *
         * API:
         *
         * - [MobileDatePicker API](https://mui.com/x/api/date-pickers/mobile-date-picker/)
         */
        const MobileDatePicker = /*#__PURE__*/reactExports.forwardRef(function MobileDatePicker(inProps, ref) {
          const props = useDatePickerDefaultizedProps(inProps, 'MuiMobileDatePicker');
          const validationError = useDateValidation(props) !== null;
          const {
            pickerProps,
            inputProps,
            wrapperProps
          } = usePickerState(props, datePickerValueManager); // Note that we are passing down all the value without spread.
          // It saves us >1kb gzip and make any prop available automatically on any level down.

          const {
              ToolbarComponent = DatePickerToolbar,
              components,
              componentsProps
            } = props,
            other = _objectWithoutPropertiesLoose(props, _excluded$1);
          const DateInputProps = _extends({}, inputProps, other, {
            components,
            componentsProps,
            ref,
            validationError
          });
          return /*#__PURE__*/jsxRuntimeExports.jsx(MobileWrapper, _extends({}, other, wrapperProps, {
            DateInputProps: DateInputProps,
            PureDateInputComponent: PureDateInput,
            components: components,
            componentsProps: componentsProps,
            children: /*#__PURE__*/jsxRuntimeExports.jsx(CalendarOrClockPicker, _extends({}, pickerProps, {
              autoFocus: true,
              toolbarTitle: props.label || props.toolbarTitle,
              ToolbarComponent: ToolbarComponent,
              DateInputProps: DateInputProps,
              components: components,
              componentsProps: componentsProps
            }, other))
          }));
        });
        const _excluded = ["desktopModeMediaQuery", "DialogProps", "PopperProps", "TransitionComponent"];

        /**
         *
         * Demos:
         *
         * - [Date Picker](https://mui.com/x/react-date-pickers/date-picker/)
         * - [Pickers](https://mui.com/x/react-date-pickers/)
         *
         * API:
         *
         * - [DatePicker API](https://mui.com/x/api/date-pickers/date-picker/)
         */
        const DatePicker = exports('D', /*#__PURE__*/reactExports.forwardRef(function DatePicker(inProps, ref) {
          const props = useThemeProps({
            props: inProps,
            name: 'MuiDatePicker'
          });
          const {
              desktopModeMediaQuery = '@media (pointer: fine)',
              DialogProps,
              PopperProps,
              TransitionComponent
            } = props,
            other = _objectWithoutPropertiesLoose(props, _excluded); // defaults to `true` in environments where `window.matchMedia` would not be available (i.e. test/jsdom)

          const isDesktop = useMediaQuery(desktopModeMediaQuery, {
            defaultMatches: true
          });
          if (isDesktop) {
            return /*#__PURE__*/jsxRuntimeExports.jsx(DesktopDatePicker, _extends({
              ref: ref,
              PopperProps: PopperProps,
              TransitionComponent: TransitionComponent
            }, other));
          }
          return /*#__PURE__*/jsxRuntimeExports.jsx(MobileDatePicker, _extends({
            ref: ref,
            DialogProps: DialogProps
          }, other));
        }));
      }
    };
  });
})();
