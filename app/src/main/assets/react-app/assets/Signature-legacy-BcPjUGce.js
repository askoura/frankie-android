;
(function () {
  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
  function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
  System.register(['./index-legacy-y70fvrxI.js', './Android-legacy-CkMEONVX.js'], function (exports, module) {
    'use strict';

    var getAugmentedNamespace, commonjsGlobal, reactExports, getDefaultExportFromCjs, jsxRuntimeExports, propTypesExports, useService, useSelector, useDispatch, downloadFileAsBase64, previewUrl, Box, Button, uploadDataUrl, valueChange;
    return {
      setters: [module => {
        getAugmentedNamespace = module.P;
        commonjsGlobal = module.a1;
        reactExports = module.r;
        getDefaultExportFromCjs = module.e;
        jsxRuntimeExports = module.m;
      }, module => {
        propTypesExports = module.J;
        useService = module.K;
        useSelector = module.A;
        useDispatch = module.D;
        downloadFileAsBase64 = module.L;
        previewUrl = module.N;
        Box = module.O;
        Button = module.v;
        uploadDataUrl = module.Q;
        valueChange = module.E;
      }],
      execute: function execute() {
        var __vite_style__ = document.createElement('style');
        __vite_style__.textContent = "._signatureCanvas_1bkvb_1 {\n  background-color: white;\n  border: 1px solid transparent;\n  border-radius: 4px;\n  width: 100%;\n  margin: auto;\n  text-align: center;\n}\n\n._container_1bkvb_10 {\n  padding: 8px;\n}\n\n._buttonContainer_1bkvb_14 {\n  text-align: end;\n}";
        document.head.appendChild(__vite_style__);
        exports("default", Signature);
        var build$1 = {
          exports: {}
        };

        /*!
         * Signature Pad v2.3.2
         * https://github.com/szimek/signature_pad
         *
         * Copyright 2017 Szymon Nowak
         * Released under the MIT license
         *
         * The main idea and some parts of the code (e.g. drawing variable width Bézier curve) are taken from:
         * http://corner.squareup.com/2012/07/smoother-signatures.html
         *
         * Implementation of interpolation using cubic Bézier curves is taken from:
         * http://benknowscode.wordpress.com/2012/09/14/path-interpolation-using-cubic-bezier-and-control-point-estimation-in-javascript
         *
         * Algorithm for approximated length of a Bézier curve is taken from:
         * http://www.lemoda.net/maths/bezier-length/index.html
         *
         */

        function Point(x, y, time) {
          this.x = x;
          this.y = y;
          this.time = time || new Date().getTime();
        }
        Point.prototype.velocityFrom = function (start) {
          return this.time !== start.time ? this.distanceTo(start) / (this.time - start.time) : 1;
        };
        Point.prototype.distanceTo = function (start) {
          return Math.sqrt(Math.pow(this.x - start.x, 2) + Math.pow(this.y - start.y, 2));
        };
        Point.prototype.equals = function (other) {
          return this.x === other.x && this.y === other.y && this.time === other.time;
        };
        function Bezier(startPoint, control1, control2, endPoint) {
          this.startPoint = startPoint;
          this.control1 = control1;
          this.control2 = control2;
          this.endPoint = endPoint;
        }

        // Returns approximated length.
        Bezier.prototype.length = function () {
          var steps = 10;
          var length = 0;
          var px = void 0;
          var py = void 0;
          for (var i = 0; i <= steps; i += 1) {
            var t = i / steps;
            var cx = this._point(t, this.startPoint.x, this.control1.x, this.control2.x, this.endPoint.x);
            var cy = this._point(t, this.startPoint.y, this.control1.y, this.control2.y, this.endPoint.y);
            if (i > 0) {
              var xdiff = cx - px;
              var ydiff = cy - py;
              length += Math.sqrt(xdiff * xdiff + ydiff * ydiff);
            }
            px = cx;
            py = cy;
          }
          return length;
        };

        /* eslint-disable no-multi-spaces, space-in-parens */
        Bezier.prototype._point = function (t, start, c1, c2, end) {
          return start * (1.0 - t) * (1.0 - t) * (1.0 - t) + 3.0 * c1 * (1.0 - t) * (1.0 - t) * t + 3.0 * c2 * (1.0 - t) * t * t + end * t * t * t;
        };

        /* eslint-disable */

        // http://stackoverflow.com/a/27078401/815507
        function throttle(func, wait, options) {
          var context, args, result;
          var timeout = null;
          var previous = 0;
          if (!options) options = {};
          var later = function later() {
            previous = options.leading === false ? 0 : Date.now();
            timeout = null;
            result = func.apply(context, args);
            if (!timeout) context = args = null;
          };
          return function () {
            var now = Date.now();
            if (!previous && options.leading === false) previous = now;
            var remaining = wait - (now - previous);
            context = this;
            args = arguments;
            if (remaining <= 0 || remaining > wait) {
              if (timeout) {
                clearTimeout(timeout);
                timeout = null;
              }
              previous = now;
              result = func.apply(context, args);
              if (!timeout) context = args = null;
            } else if (!timeout && options.trailing !== false) {
              timeout = setTimeout(later, remaining);
            }
            return result;
          };
        }
        function SignaturePad(canvas, options) {
          var self = this;
          var opts = options || {};
          this.velocityFilterWeight = opts.velocityFilterWeight || 0.7;
          this.minWidth = opts.minWidth || 0.5;
          this.maxWidth = opts.maxWidth || 2.5;
          this.throttle = 'throttle' in opts ? opts.throttle : 16; // in miliseconds
          this.minDistance = 'minDistance' in opts ? opts.minDistance : 5;
          if (this.throttle) {
            this._strokeMoveUpdate = throttle(SignaturePad.prototype._strokeUpdate, this.throttle);
          } else {
            this._strokeMoveUpdate = SignaturePad.prototype._strokeUpdate;
          }
          this.dotSize = opts.dotSize || function () {
            return (this.minWidth + this.maxWidth) / 2;
          };
          this.penColor = opts.penColor || 'black';
          this.backgroundColor = opts.backgroundColor || 'rgba(0,0,0,0)';
          this.onBegin = opts.onBegin;
          this.onEnd = opts.onEnd;
          this._canvas = canvas;
          this._ctx = canvas.getContext('2d');
          this.clear();

          // We need add these inline so they are available to unbind while still having
          // access to 'self' we could use _.bind but it's not worth adding a dependency.
          this._handleMouseDown = function (event) {
            if (event.which === 1) {
              self._mouseButtonDown = true;
              self._strokeBegin(event);
            }
          };
          this._handleMouseMove = function (event) {
            if (self._mouseButtonDown) {
              self._strokeMoveUpdate(event);
            }
          };
          this._handleMouseUp = function (event) {
            if (event.which === 1 && self._mouseButtonDown) {
              self._mouseButtonDown = false;
              self._strokeEnd(event);
            }
          };
          this._handleTouchStart = function (event) {
            if (event.targetTouches.length === 1) {
              var touch = event.changedTouches[0];
              self._strokeBegin(touch);
            }
          };
          this._handleTouchMove = function (event) {
            // Prevent scrolling.
            event.preventDefault();
            var touch = event.targetTouches[0];
            self._strokeMoveUpdate(touch);
          };
          this._handleTouchEnd = function (event) {
            var wasCanvasTouched = event.target === self._canvas;
            if (wasCanvasTouched) {
              event.preventDefault();
              self._strokeEnd(event);
            }
          };

          // Enable mouse and touch event handlers
          this.on();
        }

        // Public methods
        SignaturePad.prototype.clear = function () {
          var ctx = this._ctx;
          var canvas = this._canvas;
          ctx.fillStyle = this.backgroundColor;
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          ctx.fillRect(0, 0, canvas.width, canvas.height);
          this._data = [];
          this._reset();
          this._isEmpty = true;
        };
        SignaturePad.prototype.fromDataURL = function (dataUrl) {
          var _this = this;
          var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
          var image = new Image();
          var ratio = options.ratio || window.devicePixelRatio || 1;
          var width = options.width || this._canvas.width / ratio;
          var height = options.height || this._canvas.height / ratio;
          this._reset();
          image.src = dataUrl;
          image.onload = function () {
            _this._ctx.drawImage(image, 0, 0, width, height);
          };
          this._isEmpty = false;
        };
        SignaturePad.prototype.toDataURL = function (type) {
          var _canvas;
          switch (type) {
            case 'image/svg+xml':
              return this._toSVG();
            default:
              for (var _len = arguments.length, options = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                options[_key - 1] = arguments[_key];
              }
              return (_canvas = this._canvas).toDataURL.apply(_canvas, [type].concat(options));
          }
        };
        SignaturePad.prototype.on = function () {
          this._handleMouseEvents();
          this._handleTouchEvents();
        };
        SignaturePad.prototype.off = function () {
          this._canvas.removeEventListener('mousedown', this._handleMouseDown);
          this._canvas.removeEventListener('mousemove', this._handleMouseMove);
          document.removeEventListener('mouseup', this._handleMouseUp);
          this._canvas.removeEventListener('touchstart', this._handleTouchStart);
          this._canvas.removeEventListener('touchmove', this._handleTouchMove);
          this._canvas.removeEventListener('touchend', this._handleTouchEnd);
        };
        SignaturePad.prototype.isEmpty = function () {
          return this._isEmpty;
        };

        // Private methods
        SignaturePad.prototype._strokeBegin = function (event) {
          this._data.push([]);
          this._reset();
          this._strokeUpdate(event);
          if (typeof this.onBegin === 'function') {
            this.onBegin(event);
          }
        };
        SignaturePad.prototype._strokeUpdate = function (event) {
          var x = event.clientX;
          var y = event.clientY;
          var point = this._createPoint(x, y);
          var lastPointGroup = this._data[this._data.length - 1];
          var lastPoint = lastPointGroup && lastPointGroup[lastPointGroup.length - 1];
          var isLastPointTooClose = lastPoint && point.distanceTo(lastPoint) < this.minDistance;

          // Skip this point if it's too close to the previous one
          if (!(lastPoint && isLastPointTooClose)) {
            var _addPoint = this._addPoint(point),
              curve = _addPoint.curve,
              widths = _addPoint.widths;
            if (curve && widths) {
              this._drawCurve(curve, widths.start, widths.end);
            }
            this._data[this._data.length - 1].push({
              x: point.x,
              y: point.y,
              time: point.time,
              color: this.penColor
            });
          }
        };
        SignaturePad.prototype._strokeEnd = function (event) {
          var canDrawCurve = this.points.length > 2;
          var point = this.points[0]; // Point instance

          if (!canDrawCurve && point) {
            this._drawDot(point);
          }
          if (point) {
            var lastPointGroup = this._data[this._data.length - 1];
            var lastPoint = lastPointGroup[lastPointGroup.length - 1]; // plain object

            // When drawing a dot, there's only one point in a group, so without this check
            // such group would end up with exactly the same 2 points.
            if (!point.equals(lastPoint)) {
              lastPointGroup.push({
                x: point.x,
                y: point.y,
                time: point.time,
                color: this.penColor
              });
            }
          }
          if (typeof this.onEnd === 'function') {
            this.onEnd(event);
          }
        };
        SignaturePad.prototype._handleMouseEvents = function () {
          this._mouseButtonDown = false;
          this._canvas.addEventListener('mousedown', this._handleMouseDown);
          this._canvas.addEventListener('mousemove', this._handleMouseMove);
          document.addEventListener('mouseup', this._handleMouseUp);
        };
        SignaturePad.prototype._handleTouchEvents = function () {
          // Pass touch events to canvas element on mobile IE11 and Edge.
          this._canvas.style.msTouchAction = 'none';
          this._canvas.style.touchAction = 'none';
          this._canvas.addEventListener('touchstart', this._handleTouchStart);
          this._canvas.addEventListener('touchmove', this._handleTouchMove);
          this._canvas.addEventListener('touchend', this._handleTouchEnd);
        };
        SignaturePad.prototype._reset = function () {
          this.points = [];
          this._lastVelocity = 0;
          this._lastWidth = (this.minWidth + this.maxWidth) / 2;
          this._ctx.fillStyle = this.penColor;
        };
        SignaturePad.prototype._createPoint = function (x, y, time) {
          var rect = this._canvas.getBoundingClientRect();
          return new Point(x - rect.left, y - rect.top, time || new Date().getTime());
        };
        SignaturePad.prototype._addPoint = function (point) {
          var points = this.points;
          var tmp = void 0;
          points.push(point);
          if (points.length > 2) {
            // To reduce the initial lag make it work with 3 points
            // by copying the first point to the beginning.
            if (points.length === 3) points.unshift(points[0]);
            tmp = this._calculateCurveControlPoints(points[0], points[1], points[2]);
            var c2 = tmp.c2;
            tmp = this._calculateCurveControlPoints(points[1], points[2], points[3]);
            var c3 = tmp.c1;
            var curve = new Bezier(points[1], c2, c3, points[2]);
            var widths = this._calculateCurveWidths(curve);

            // Remove the first element from the list,
            // so that we always have no more than 4 points in points array.
            points.shift();
            return {
              curve: curve,
              widths: widths
            };
          }
          return {};
        };
        SignaturePad.prototype._calculateCurveControlPoints = function (s1, s2, s3) {
          var dx1 = s1.x - s2.x;
          var dy1 = s1.y - s2.y;
          var dx2 = s2.x - s3.x;
          var dy2 = s2.y - s3.y;
          var m1 = {
            x: (s1.x + s2.x) / 2.0,
            y: (s1.y + s2.y) / 2.0
          };
          var m2 = {
            x: (s2.x + s3.x) / 2.0,
            y: (s2.y + s3.y) / 2.0
          };
          var l1 = Math.sqrt(dx1 * dx1 + dy1 * dy1);
          var l2 = Math.sqrt(dx2 * dx2 + dy2 * dy2);
          var dxm = m1.x - m2.x;
          var dym = m1.y - m2.y;
          var k = l2 / (l1 + l2);
          var cm = {
            x: m2.x + dxm * k,
            y: m2.y + dym * k
          };
          var tx = s2.x - cm.x;
          var ty = s2.y - cm.y;
          return {
            c1: new Point(m1.x + tx, m1.y + ty),
            c2: new Point(m2.x + tx, m2.y + ty)
          };
        };
        SignaturePad.prototype._calculateCurveWidths = function (curve) {
          var startPoint = curve.startPoint;
          var endPoint = curve.endPoint;
          var widths = {
            start: null,
            end: null
          };
          var velocity = this.velocityFilterWeight * endPoint.velocityFrom(startPoint) + (1 - this.velocityFilterWeight) * this._lastVelocity;
          var newWidth = this._strokeWidth(velocity);
          widths.start = this._lastWidth;
          widths.end = newWidth;
          this._lastVelocity = velocity;
          this._lastWidth = newWidth;
          return widths;
        };
        SignaturePad.prototype._strokeWidth = function (velocity) {
          return Math.max(this.maxWidth / (velocity + 1), this.minWidth);
        };
        SignaturePad.prototype._drawPoint = function (x, y, size) {
          var ctx = this._ctx;
          ctx.moveTo(x, y);
          ctx.arc(x, y, size, 0, 2 * Math.PI, false);
          this._isEmpty = false;
        };
        SignaturePad.prototype._drawCurve = function (curve, startWidth, endWidth) {
          var ctx = this._ctx;
          var widthDelta = endWidth - startWidth;
          var drawSteps = Math.floor(curve.length());
          ctx.beginPath();
          for (var i = 0; i < drawSteps; i += 1) {
            // Calculate the Bezier (x, y) coordinate for this step.
            var t = i / drawSteps;
            var tt = t * t;
            var ttt = tt * t;
            var u = 1 - t;
            var uu = u * u;
            var uuu = uu * u;
            var x = uuu * curve.startPoint.x;
            x += 3 * uu * t * curve.control1.x;
            x += 3 * u * tt * curve.control2.x;
            x += ttt * curve.endPoint.x;
            var y = uuu * curve.startPoint.y;
            y += 3 * uu * t * curve.control1.y;
            y += 3 * u * tt * curve.control2.y;
            y += ttt * curve.endPoint.y;
            var width = startWidth + ttt * widthDelta;
            this._drawPoint(x, y, width);
          }
          ctx.closePath();
          ctx.fill();
        };
        SignaturePad.prototype._drawDot = function (point) {
          var ctx = this._ctx;
          var width = typeof this.dotSize === 'function' ? this.dotSize() : this.dotSize;
          ctx.beginPath();
          this._drawPoint(point.x, point.y, width);
          ctx.closePath();
          ctx.fill();
        };
        SignaturePad.prototype._fromData = function (pointGroups, drawCurve, drawDot) {
          for (var i = 0; i < pointGroups.length; i += 1) {
            var group = pointGroups[i];
            if (group.length > 1) {
              for (var j = 0; j < group.length; j += 1) {
                var rawPoint = group[j];
                var point = new Point(rawPoint.x, rawPoint.y, rawPoint.time);
                var color = rawPoint.color;
                if (j === 0) {
                  // First point in a group. Nothing to draw yet.

                  // All points in the group have the same color, so it's enough to set
                  // penColor just at the beginning.
                  this.penColor = color;
                  this._reset();
                  this._addPoint(point);
                } else if (j !== group.length - 1) {
                  // Middle point in a group.
                  var _addPoint2 = this._addPoint(point),
                    curve = _addPoint2.curve,
                    widths = _addPoint2.widths;
                  if (curve && widths) {
                    drawCurve(curve, widths, color);
                  }
                } else ;
              }
            } else {
              this._reset();
              var _rawPoint = group[0];
              drawDot(_rawPoint);
            }
          }
        };
        SignaturePad.prototype._toSVG = function () {
          var _this2 = this;
          var pointGroups = this._data;
          var canvas = this._canvas;
          var ratio = Math.max(window.devicePixelRatio || 1, 1);
          var minX = 0;
          var minY = 0;
          var maxX = canvas.width / ratio;
          var maxY = canvas.height / ratio;
          var svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
          svg.setAttributeNS(null, 'width', canvas.width);
          svg.setAttributeNS(null, 'height', canvas.height);
          this._fromData(pointGroups, function (curve, widths, color) {
            var path = document.createElement('path');

            // Need to check curve for NaN values, these pop up when drawing
            // lines on the canvas that are not continuous. E.g. Sharp corners
            // or stopping mid-stroke and than continuing without lifting mouse.
            if (!isNaN(curve.control1.x) && !isNaN(curve.control1.y) && !isNaN(curve.control2.x) && !isNaN(curve.control2.y)) {
              var attr = 'M ' + curve.startPoint.x.toFixed(3) + ',' + curve.startPoint.y.toFixed(3) + ' ' + ('C ' + curve.control1.x.toFixed(3) + ',' + curve.control1.y.toFixed(3) + ' ') + (curve.control2.x.toFixed(3) + ',' + curve.control2.y.toFixed(3) + ' ') + (curve.endPoint.x.toFixed(3) + ',' + curve.endPoint.y.toFixed(3));
              path.setAttribute('d', attr);
              path.setAttribute('stroke-width', (widths.end * 2.25).toFixed(3));
              path.setAttribute('stroke', color);
              path.setAttribute('fill', 'none');
              path.setAttribute('stroke-linecap', 'round');
              svg.appendChild(path);
            }
          }, function (rawPoint) {
            var circle = document.createElement('circle');
            var dotSize = typeof _this2.dotSize === 'function' ? _this2.dotSize() : _this2.dotSize;
            circle.setAttribute('r', dotSize);
            circle.setAttribute('cx', rawPoint.x);
            circle.setAttribute('cy', rawPoint.y);
            circle.setAttribute('fill', rawPoint.color);
            svg.appendChild(circle);
          });
          var prefix = 'data:image/svg+xml;base64,';
          var header = '<svg' + ' xmlns="http://www.w3.org/2000/svg"' + ' xmlns:xlink="http://www.w3.org/1999/xlink"' + (' viewBox="' + minX + ' ' + minY + ' ' + maxX + ' ' + maxY + '"') + (' width="' + maxX + '"') + (' height="' + maxY + '"') + '>';
          var body = svg.innerHTML;

          // IE hack for missing innerHTML property on SVGElement
          if (body === undefined) {
            var dummy = document.createElement('dummy');
            var nodes = svg.childNodes;
            dummy.innerHTML = '';
            for (var i = 0; i < nodes.length; i += 1) {
              dummy.appendChild(nodes[i].cloneNode(true));
            }
            body = dummy.innerHTML;
          }
          var footer = '</svg>';
          var data = header + body + footer;
          return prefix + btoa(data);
        };
        SignaturePad.prototype.fromData = function (pointGroups) {
          var _this3 = this;
          this.clear();
          this._fromData(pointGroups, function (curve, widths) {
            return _this3._drawCurve(curve, widths.start, widths.end);
          }, function (rawPoint) {
            return _this3._drawDot(rawPoint);
          });
          this._data = pointGroups;
        };
        SignaturePad.prototype.toData = function () {
          return this._data;
        };
        const signature_pad = /*#__PURE__*/Object.freeze( /*#__PURE__*/Object.defineProperty({
          __proto__: null,
          default: SignaturePad
        }, Symbol.toStringTag, {
          value: 'Module'
        }));
        const require$$2 = /*@__PURE__*/getAugmentedNamespace(signature_pad);
        var build = {
          exports: {}
        };
        var hasRequiredBuild;
        function requireBuild() {
          if (hasRequiredBuild) return build.exports;
          hasRequiredBuild = 1;
          (function (module, exports) {
            !function (e, t) {
              module.exports = t();
            }(commonjsGlobal, function () {
              return function (e) {
                function t(n) {
                  if (r[n]) return r[n].exports;
                  var o = r[n] = {
                    exports: {},
                    id: n,
                    loaded: !1
                  };
                  return e[n].call(o.exports, o, o.exports, t), o.loaded = !0, o.exports;
                }
                var r = {};
                return t.m = e, t.c = r, t.p = "", t(0);
              }([function (e, t) {
                function r(e) {
                  var t = e.getContext("2d"),
                    r = e.width,
                    n = e.height,
                    o = t.getImageData(0, 0, r, n).data,
                    f = a(!0, r, n, o),
                    i = a(!1, r, n, o),
                    c = u(!0, r, n, o),
                    d = u(!1, r, n, o),
                    p = d - c + 1,
                    l = i - f + 1,
                    s = t.getImageData(c, f, p, l);
                  return e.width = p, e.height = l, t.clearRect(0, 0, p, l), t.putImageData(s, 0, 0), e;
                }
                function n(e, t, r, n) {
                  return {
                    red: n[4 * (r * t + e)],
                    green: n[4 * (r * t + e) + 1],
                    blue: n[4 * (r * t + e) + 2],
                    alpha: n[4 * (r * t + e) + 3]
                  };
                }
                function o(e, t, r, o) {
                  return n(e, t, r, o).alpha;
                }
                function a(e, t, r, n) {
                  for (var a = e ? 1 : -1, u = e ? 0 : r - 1, f = u; e ? f < r : f > -1; f += a) for (var i = 0; i < t; i++) if (o(i, f, t, n)) return f;
                  return null;
                }
                function u(e, t, r, n) {
                  for (var a = e ? 1 : -1, u = e ? 0 : t - 1, f = u; e ? f < t : f > -1; f += a) for (var i = 0; i < r; i++) if (o(f, i, t, n)) return f;
                  return null;
                }
                Object.defineProperty(t, "__esModule", {
                  value: !0
                }), t.default = r;
              }]);
            });
          })(build);
          return build.exports;
        }
        (function (module, exports) {
          !function (e, t) {
            module.exports = t(propTypesExports, reactExports, require$$2, requireBuild());
          }(commonjsGlobal, function (e, t, n, r) {
            return function (e) {
              function t(r) {
                if (n[r]) return n[r].exports;
                var a = n[r] = {
                  exports: {},
                  id: r,
                  loaded: !1
                };
                return e[r].call(a.exports, a, a.exports, t), a.loaded = !0, a.exports;
              }
              var n = {};
              return t.m = e, t.c = n, t.p = "", t(0);
            }([function (e, t, n) {
              function r(e) {
                return e && e.__esModule ? e : {
                  default: e
                };
              }
              function a(e, t) {
                var n = {};
                for (var r in e) t.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
                return n;
              }
              function o(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
              }
              function i(e, t) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != typeof t && "function" != typeof t ? e : t;
              }
              function u(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                  constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                  }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
              }
              Object.defineProperty(t, "__esModule", {
                value: !0
              });
              var s = Object.assign || function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                  }
                  return e;
                },
                c = function () {
                  function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                      var r = t[n];
                      r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
                    }
                  }
                  return function (t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t;
                  };
                }(),
                f = n(1),
                p = r(f),
                l = n(2),
                d = r(l),
                v = n(3),
                h = r(v),
                _ = n(4),
                g = r(_),
                m = function (e) {
                  function t() {
                    var e, n, r, u;
                    o(this, t);
                    for (var s = arguments.length, c = Array(s), f = 0; f < s; f++) c[f] = arguments[f];
                    return n = r = i(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(c))), r._sigPad = null, r._excludeOurProps = function () {
                      var e = r.props,
                        t = (e.canvasProps, e.clearOnResize, a(e, ["canvasProps", "clearOnResize"]));
                      return t;
                    }, r.getCanvas = function () {
                      return r._canvas;
                    }, r.getTrimmedCanvas = function () {
                      var e = document.createElement("canvas");
                      return e.width = r._canvas.width, e.height = r._canvas.height, e.getContext("2d").drawImage(r._canvas, 0, 0), (0, g.default)(e);
                    }, r.getSignaturePad = function () {
                      return r._sigPad;
                    }, r._checkClearOnResize = function () {
                      r.props.clearOnResize && r._resizeCanvas();
                    }, r._resizeCanvas = function () {
                      var e = r.props.canvasProps || {},
                        t = e.width,
                        n = e.height;
                      if (!t || !n) {
                        var a = r._canvas,
                          o = Math.max(window.devicePixelRatio || 1, 1);
                        t || (a.width = a.offsetWidth * o), n || (a.height = a.offsetHeight * o), a.getContext("2d").scale(o, o), r.clear();
                      }
                    }, r.on = function () {
                      return window.addEventListener("resize", r._checkClearOnResize), r._sigPad.on();
                    }, r.off = function () {
                      return window.removeEventListener("resize", r._checkClearOnResize), r._sigPad.off();
                    }, r.clear = function () {
                      return r._sigPad.clear();
                    }, r.isEmpty = function () {
                      return r._sigPad.isEmpty();
                    }, r.fromDataURL = function (e, t) {
                      return r._sigPad.fromDataURL(e, t);
                    }, r.toDataURL = function (e, t) {
                      return r._sigPad.toDataURL(e, t);
                    }, r.fromData = function (e) {
                      return r._sigPad.fromData(e);
                    }, r.toData = function () {
                      return r._sigPad.toData();
                    }, u = n, i(r, u);
                  }
                  return u(t, e), c(t, [{
                    key: "componentDidMount",
                    value: function value() {
                      this._sigPad = new h.default(this._canvas, this._excludeOurProps()), this._resizeCanvas(), this.on();
                    }
                  }, {
                    key: "componentWillUnmount",
                    value: function value() {
                      this.off();
                    }
                  }, {
                    key: "componentDidUpdate",
                    value: function value() {
                      Object.assign(this._sigPad, this._excludeOurProps());
                    }
                  }, {
                    key: "render",
                    value: function value() {
                      var e = this,
                        t = this.props.canvasProps;
                      return d.default.createElement("canvas", s({
                        ref: function ref(t) {
                          e._canvas = t;
                        }
                      }, t));
                    }
                  }]), t;
                }(l.Component);
              m.propTypes = {
                velocityFilterWeight: p.default.number,
                minWidth: p.default.number,
                maxWidth: p.default.number,
                minDistance: p.default.number,
                dotSize: p.default.oneOfType([p.default.number, p.default.func]),
                penColor: p.default.string,
                throttle: p.default.number,
                onEnd: p.default.func,
                onBegin: p.default.func,
                canvasProps: p.default.object,
                clearOnResize: p.default.bool
              }, m.defaultProps = {
                clearOnResize: !0
              }, t.default = m;
            }, function (t, n) {
              t.exports = e;
            }, function (e, n) {
              e.exports = t;
            }, function (e, t) {
              e.exports = n;
            }, function (e, t) {
              e.exports = r;
            }]);
          });
        })(build$1);
        var buildExports = build$1.exports;
        const SignatureCanvas = /*@__PURE__*/getDefaultExportFromCjs(buildExports);
        const signatureCanvas = "_signatureCanvas_1bkvb_1";
        const container = "_container_1bkvb_10";
        const buttonContainer = "_buttonContainer_1bkvb_14";
        const styles = {
          signatureCanvas: signatureCanvas,
          container: container,
          buttonContainer: buttonContainer
        };
        function Signature(props) {
          const runService = useService("run");
          const _reactExports$useStat = reactExports.useState(false),
            _reactExports$useStat2 = _slicedToArray(_reactExports$useStat, 2),
            submitEnabled = _reactExports$useStat2[0],
            setSubmitEnabled = _reactExports$useStat2[1];
          const _reactExports$useStat3 = reactExports.useState(false),
            _reactExports$useStat4 = _slicedToArray(_reactExports$useStat3, 2),
            clearEnabled = _reactExports$useStat4[0],
            setClearEnabled = _reactExports$useStat4[1];
          const _reactExports$useStat5 = reactExports.useState(void 0),
            _reactExports$useStat6 = _slicedToArray(_reactExports$useStat5, 2),
            signature = _reactExports$useStat6[0],
            setSignature = _reactExports$useStat6[1];
          const state = useSelector(state2 => {
            let questionState = state2.runState.values[props.component.qualifiedCode];
            return questionState === null || questionState === void 0 ? void 0 : questionState.value;
          });
          const containerRef = reactExports.useRef(null);
          const _reactExports$useStat7 = reactExports.useState(400),
            _reactExports$useStat8 = _slicedToArray(_reactExports$useStat7, 2),
            canvasWidth = _reactExports$useStat8[0],
            setCanvasWidth = _reactExports$useStat8[1];
          reactExports.useEffect(() => {
            var _containerRef$current;
            setCanvasWidth(containerRef === null || containerRef === void 0 || (_containerRef$current = containerRef.current) === null || _containerRef$current === void 0 ? void 0 : _containerRef$current.offsetWidth);
          }, [containerRef]);
          reactExports.useEffect(() => {
            const resizeListener = () => {
              var _containerRef$current2;
              setCanvasWidth(containerRef === null || containerRef === void 0 || (_containerRef$current2 = containerRef.current) === null || _containerRef$current2 === void 0 ? void 0 : _containerRef$current2.offsetWidth);
            };
            window.addEventListener("resize", resizeListener);
            return () => {
              window.removeEventListener("resize", resizeListener);
            };
          }, []);
          const preview = useSelector(state2 => {
            return state2.runState.preview;
          });
          const sigCanvas = reactExports.useRef();
          const dispatch = useDispatch();
          const clear = () => {
            var _sigCanvas$current;
            (_sigCanvas$current = sigCanvas.current) === null || _sigCanvas$current === void 0 || _sigCanvas$current.clear();
            setSignature(void 0);
            setClearEnabled(false);
            setSubmitEnabled(false);
          };
          const submit = () => {
            const dataUrl = sigCanvas.current.toDataURL("image/png");
            uploadDataUrl(runService, props.component.qualifiedCode, preview, dataUrl, `signature-${props.component.qualifiedCode}.png`).then(response => {
              dispatch(valueChange({
                componentCode: props.component.qualifiedCode,
                value: response
              }));
            }).catch(err => {
              console.error(err);
            });
          };
          reactExports.useEffect(() => {
            if (state && state.stored_filename) {
              setClearEnabled(true);
              downloadFileAsBase64(previewUrl(state.stored_filename)).then(response => {
                setSubmitEnabled(false);
                setSignature(response);
              });
            }
          }, [state]);
          return /* @__PURE__ */jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
            children: [/* @__PURE__ */jsxRuntimeExports.jsx(Box, {
              sx: {
                backgroundColor: "background.default"
              },
              className: styles.container,
              children: /* @__PURE__ */jsxRuntimeExports.jsx(Box, {
                ref: containerRef,
                sx: {
                  maxWidth: Math.min(canvasWidth, 400) + "px"
                },
                className: styles.signatureCanvas,
                children: signature ? /* @__PURE__ */jsxRuntimeExports.jsx("img", {
                  src: signature,
                  style: {
                    width: Math.min(canvasWidth, 400) + "px",
                    height: "200px"
                  }
                }) : /* @__PURE__ */jsxRuntimeExports.jsx(SignatureCanvas, {
                  penColor: "red",
                  clearOnResize: true,
                  onBegin: () => {
                    setSubmitEnabled(true);
                    setClearEnabled(true);
                  },
                  ref: sigCanvas,
                  canvasProps: {
                    width: Math.min(canvasWidth, 400),
                    height: 200
                  }
                })
              })
            }), /* @__PURE__ */jsxRuntimeExports.jsx("br", {}), /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
              className: styles.buttonContainer,
              children: [/* @__PURE__ */jsxRuntimeExports.jsx(Button, {
                onClick: () => clear(),
                disabled: !clearEnabled,
                children: "Clear"
              }), /* @__PURE__ */jsxRuntimeExports.jsx(Button, {
                onClick: () => submit(),
                disabled: !submitEnabled,
                children: "Submit"
              })]
            })]
          });
        }
      }
    };
  });
})();
//# sourceMappingURL=Signature-legacy-BcPjUGce.js.map
