;
(function () {
  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
  function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
  System.register(['./index-legacy-BjrVJ6CZ.js', './Android-legacy-BIX_jJYw.js', './Grid-legacy-BNeeikxj.js'], function (exports, module) {
    'use strict';

    var reactExports, jsxRuntimeExports, useTheme, Box, useSelector, shallowEqual, useDispatch, buildResourceUrl, setDirty, valueChange, Grid;
    return {
      setters: [module => {
        reactExports = module.r;
        jsxRuntimeExports = module.m;
        useTheme = module.a6;
        Box = module.a3;
      }, module => {
        useSelector = module.A;
        shallowEqual = module.C;
        useDispatch = module.D;
        buildResourceUrl = module.X;
        setDirty = module.I;
        valueChange = module.E;
      }, module => {
        Grid = module.G;
      }],
      execute: function execute() {
        var __vite_style__ = document.createElement('style');
        __vite_style__.textContent = "._imageGrid_gkz8d_1 {\n  margin-top: 16px;\n}\n\n._imageContainer_gkz8d_5 {\n  background-size: contain;\n  background-position: center;\n  background-repeat: no-repeat;\n}\n\n._rankContainer_gkz8d_11 {\n  display: table;\n  text-align: center;\n  vertical-align: middle;\n  border: 1px solid transparent;\n  background-color: rgba(255, 255, 255, 0.7);\n}\n\n._rankValue_gkz8d_19 {\n  color: white;\n  display: table-cell;\n  vertical-align: middle;\n}\n";
        document.head.appendChild(__vite_style__);
        exports("default", ImageRanking);
        const imageGrid = "_imageGrid_gkz8d_1";
        const imageContainer = "_imageContainer_gkz8d_5";
        const rankContainer = "_rankContainer_gkz8d_11";
        const rankValue = "_rankValue_gkz8d_19";
        const styles = {
          imageGrid: imageGrid,
          imageContainer: imageContainer,
          rankContainer: rankContainer,
          rankValue: rankValue
        };
        function ImageRanking(props) {
          const values = useSelector(state => {
            let valuesMap = {};
            props.component.answers.forEach(element => {
              valuesMap[element.qualifiedCode] = state.runState.values[element.qualifiedCode].value;
            });
            return valuesMap;
          }, shallowEqual);
          const dispatch = useDispatch();
          const containerRef = reactExports.useRef(null);
          const _reactExports$useStat = reactExports.useState(800),
            _reactExports$useStat2 = _slicedToArray(_reactExports$useStat, 2),
            width = _reactExports$useStat2[0],
            setWidth = _reactExports$useStat2[1];
          reactExports.useEffect(() => {
            var _containerRef$current;
            setWidth(containerRef === null || containerRef === void 0 || (_containerRef$current = containerRef.current) === null || _containerRef$current === void 0 ? void 0 : _containerRef$current.offsetWidth);
          }, [containerRef]);
          const imageWidth = (width - props.component.columns * props.component.spacing * 2) / props.component.columns;
          const imageHeight = imageWidth / (props.component.imageAspectRatio || 1);
          reactExports.useEffect(() => {
            const resizeListener = () => {
              var _containerRef$current2;
              setWidth(containerRef === null || containerRef === void 0 || (_containerRef$current2 = containerRef.current) === null || _containerRef$current2 === void 0 ? void 0 : _containerRef$current2.offsetWidth);
            };
            window.addEventListener("resize", resizeListener);
            return () => {
              window.removeEventListener("resize", resizeListener);
            };
          }, []);
          const onItemClick = componentCode => {
            dispatch(setDirty(props.component.qualifiedCode));
            dispatch(setDirty(props.parentCode));
            if (+values[componentCode] > 0) {
              dispatch(valueChange({
                componentCode,
                undefined: void 0
              }));
            } else {
              let keys = Object.keys(values);
              let allValues = keys.map(key => values[key]);
              for (var i = 1; i <= keys.length; i++) {
                if (!allValues.includes(i)) {
                  dispatch(valueChange({
                    componentCode,
                    value: i
                  }));
                  return;
                }
              }
            }
          };
          useSelector(state => {
            return state.runState.values["Survey"].lang;
          });
          return /* @__PURE__ */jsxRuntimeExports.jsx(Grid, {
            ref: containerRef,
            container: true,
            className: styles.imageGrid,
            children: props.component.answers.map(option => {
              return /* @__PURE__ */jsxRuntimeExports.jsx(ImageRankingItem, {
                option,
                spacing: props.component.spacing,
                columns: props.component.columns,
                hideText: props.component.hideText,
                onClick: () => onItemClick(option.qualifiedCode),
                parentCode: props.component.qualifiedCode,
                imageHeight,
                imageWidth
              }, option.qualifiedCode);
            })
          });
        }
        function ImageRankingItem(props) {
          var _props$option$resourc, _props$option$content;
          const theme = useTheme();
          const state = useSelector(state2 => {
            let answerState = state2.runState.values[props.option.qualifiedCode];
            return {
              showAnswer: typeof (answerState === null || answerState === void 0 ? void 0 : answerState.relevance) == "undefined" || answerState.relevance,
              value: (answerState === null || answerState === void 0 ? void 0 : answerState.value) || 0
            };
          }, shallowEqual);
          const backgroundImage = (_props$option$resourc = props.option.resources) !== null && _props$option$resourc !== void 0 && _props$option$resourc.image ? `url('${buildResourceUrl(props.option.resources.image)}')` : "0";
          return /* @__PURE__ */jsxRuntimeExports.jsxs(Grid, {
            item: true,
            xs: 12 / props.columns,
            children: [/* @__PURE__ */jsxRuntimeExports.jsx(Box, {
              className: styles.imageContainer,
              onClick: () => props.onClick(),
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              style: {
                backgroundImage,
                backgroundColor: theme.palette.background.default,
                margin: props.spacing + "px",
                boxShadow: 2,
                height: props.imageHeight + "px",
                border: state.checked ? `2px solid ${theme.palette.primary.main}` : "2px solid transparent"
              },
              children: state.value > 0 && /* @__PURE__ */jsxRuntimeExports.jsx("div", {
                style: {
                  height: Math.min(props.imageHeight, props.imageWidth) + "px",
                  width: Math.min(props.imageHeight, props.imageWidth) + "px",
                  borderRadius: Math.min(props.imageHeight, props.imageWidth) / 2 + "px",
                  fontSize: Math.min(props.imageHeight, props.imageWidth) / 2 + "px"
                },
                className: styles.rankContainer,
                children: /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                  className: styles.rankValue,
                  style: {
                    color: theme.palette.primary.main
                  },
                  children: state.value
                })
              })
            }), !props.hideText && /* @__PURE__ */jsxRuntimeExports.jsx(Box, {
              sx: {
                fontFamily: theme.textStyles.text.font,
                color: theme.textStyles.text.color,
                fontSize: theme.textStyles.text.size
              },
              children: (_props$option$content = props.option.content) === null || _props$option$content === void 0 ? void 0 : _props$option$content.label
            })]
          }, props.option.code);
        }
      }
    };
  });
})();
//# sourceMappingURL=ImageRanking-legacy-BcliyXQX.js.map
