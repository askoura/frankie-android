;
(function () {
  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
  function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
  System.register(['./index-legacy-T3s18jo3.js', './RadioGroupContext-legacy-1wuSM4bn.js', './FormGroup-legacy-aaf9eppM.js'], function (exports, module) {
    'use strict';

    var reactExports, _objectWithoutPropertiesLoose, useControlled, useForkRef, useId, jsxRuntimeExports, _extends, RadioGroupContext, FormGroup$1;
    return {
      setters: [module => {
        reactExports = module.r;
        _objectWithoutPropertiesLoose = module.e;
        useControlled = module.a_;
        useForkRef = module.i;
        useId = module.a$;
        jsxRuntimeExports = module.j;
        _extends = module._;
      }, module => {
        RadioGroupContext = module.R;
      }, module => {
        FormGroup$1 = module.F;
      }],
      execute: function execute() {
        const _excluded = ["actions", "children", "defaultValue", "name", "onChange", "value"];
        const RadioGroup = /* @__PURE__ */reactExports.forwardRef(function RadioGroup2(props, ref) {
          const actions = props.actions,
            children = props.children,
            defaultValue = props.defaultValue,
            nameProp = props.name,
            onChange = props.onChange,
            valueProp = props.value,
            other = _objectWithoutPropertiesLoose(props, _excluded);
          const rootRef = reactExports.useRef(null);
          const _useControlled = useControlled({
              controlled: valueProp,
              default: defaultValue,
              name: "RadioGroup"
            }),
            _useControlled2 = _slicedToArray(_useControlled, 2),
            value = _useControlled2[0],
            setValueState = _useControlled2[1];
          reactExports.useImperativeHandle(actions, () => ({
            focus: () => {
              let input = rootRef.current.querySelector("input:not(:disabled):checked");
              if (!input) {
                input = rootRef.current.querySelector("input:not(:disabled)");
              }
              if (input) {
                input.focus();
              }
            }
          }), []);
          const handleRef = useForkRef(ref, rootRef);
          const name = useId(nameProp);
          const contextValue = reactExports.useMemo(() => ({
            name,
            onChange(event) {
              setValueState(event.target.value);
              if (onChange) {
                onChange(event, event.target.value);
              }
            },
            value
          }), [name, onChange, setValueState, value]);
          return /* @__PURE__ */jsxRuntimeExports.jsx(RadioGroupContext.Provider, {
            value: contextValue,
            children: /* @__PURE__ */jsxRuntimeExports.jsx(FormGroup$1, _extends({
              role: "radiogroup",
              ref: handleRef
            }, other, {
              children
            }))
          });
        });
        const FormGroup = exports('F', RadioGroup);
      }
    };
  });
})();
//# sourceMappingURL=RadioGroup-legacy-q7mgYtEx.js.map
