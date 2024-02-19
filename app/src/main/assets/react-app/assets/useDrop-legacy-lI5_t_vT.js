;
(function () {
  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
  function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
  System.register(['./index-legacy-T3s18jo3.js'], function (exports, module) {
    'use strict';

    var invariant, shallowEqual, wrapConnectorHooks, isRef, reactExports, useDragDropManager, useIsomorphicLayoutEffect, registerTarget, useOptionalFactory, useCollectedProps;
    return {
      setters: [module => {
        invariant = module.bz;
        shallowEqual = module.bA;
        wrapConnectorHooks = module.bB;
        isRef = module.bC;
        reactExports = module.r;
        useDragDropManager = module.bD;
        useIsomorphicLayoutEffect = module.bE;
        registerTarget = module.bF;
        useOptionalFactory = module.bG;
        useCollectedProps = module.bH;
      }],
      execute: function execute() {
        exports('u', useDrop);
        let isCallingCanDrop = false;
        class DropTargetMonitorImpl {
          receiveHandlerId(targetId) {
            this.targetId = targetId;
          }
          getHandlerId() {
            return this.targetId;
          }
          subscribeToStateChange(listener, options) {
            return this.internalMonitor.subscribeToStateChange(listener, options);
          }
          canDrop() {
            // Cut out early if the target id has not been set. This should prevent errors
            // where the user has an older version of dnd-core like in
            // https://github.com/react-dnd/react-dnd/issues/1310
            if (!this.targetId) {
              return false;
            }
            invariant(!isCallingCanDrop, 'You may not call monitor.canDrop() inside your canDrop() implementation. ' + 'Read more: http://react-dnd.github.io/react-dnd/docs/api/drop-target-monitor');
            try {
              isCallingCanDrop = true;
              return this.internalMonitor.canDropOnTarget(this.targetId);
            } finally {
              isCallingCanDrop = false;
            }
          }
          isOver(options) {
            if (!this.targetId) {
              return false;
            }
            return this.internalMonitor.isOverTarget(this.targetId, options);
          }
          getItemType() {
            return this.internalMonitor.getItemType();
          }
          getItem() {
            return this.internalMonitor.getItem();
          }
          getDropResult() {
            return this.internalMonitor.getDropResult();
          }
          didDrop() {
            return this.internalMonitor.didDrop();
          }
          getInitialClientOffset() {
            return this.internalMonitor.getInitialClientOffset();
          }
          getInitialSourceClientOffset() {
            return this.internalMonitor.getInitialSourceClientOffset();
          }
          getSourceClientOffset() {
            return this.internalMonitor.getSourceClientOffset();
          }
          getClientOffset() {
            return this.internalMonitor.getClientOffset();
          }
          getDifferenceFromInitialOffset() {
            return this.internalMonitor.getDifferenceFromInitialOffset();
          }
          constructor(manager) {
            this.targetId = null;
            this.internalMonitor = manager.getMonitor();
          }
        }
        class TargetConnector {
          get connectTarget() {
            return this.dropTarget;
          }
          reconnect() {
            // if nothing has changed then don't resubscribe
            const didChange = this.didHandlerIdChange() || this.didDropTargetChange() || this.didOptionsChange();
            if (didChange) {
              this.disconnectDropTarget();
            }
            const dropTarget = this.dropTarget;
            if (!this.handlerId) {
              return;
            }
            if (!dropTarget) {
              this.lastConnectedDropTarget = dropTarget;
              return;
            }
            if (didChange) {
              this.lastConnectedHandlerId = this.handlerId;
              this.lastConnectedDropTarget = dropTarget;
              this.lastConnectedDropTargetOptions = this.dropTargetOptions;
              this.unsubscribeDropTarget = this.backend.connectDropTarget(this.handlerId, dropTarget, this.dropTargetOptions);
            }
          }
          receiveHandlerId(newHandlerId) {
            if (newHandlerId === this.handlerId) {
              return;
            }
            this.handlerId = newHandlerId;
            this.reconnect();
          }
          get dropTargetOptions() {
            return this.dropTargetOptionsInternal;
          }
          set dropTargetOptions(options) {
            this.dropTargetOptionsInternal = options;
          }
          didHandlerIdChange() {
            return this.lastConnectedHandlerId !== this.handlerId;
          }
          didDropTargetChange() {
            return this.lastConnectedDropTarget !== this.dropTarget;
          }
          didOptionsChange() {
            return !shallowEqual(this.lastConnectedDropTargetOptions, this.dropTargetOptions);
          }
          disconnectDropTarget() {
            if (this.unsubscribeDropTarget) {
              this.unsubscribeDropTarget();
              this.unsubscribeDropTarget = undefined;
            }
          }
          get dropTarget() {
            return this.dropTargetNode || this.dropTargetRef && this.dropTargetRef.current;
          }
          clearDropTarget() {
            this.dropTargetRef = null;
            this.dropTargetNode = null;
          }
          constructor(backend) {
            this.hooks = wrapConnectorHooks({
              dropTarget: (node, options) => {
                this.clearDropTarget();
                this.dropTargetOptions = options;
                if (isRef(node)) {
                  this.dropTargetRef = node;
                } else {
                  this.dropTargetNode = node;
                }
                this.reconnect();
              }
            });
            this.handlerId = null;
            // The drop target may either be attached via ref or connect function
            this.dropTargetRef = null;
            this.dropTargetOptionsInternal = null;
            this.lastConnectedHandlerId = null;
            this.lastConnectedDropTarget = null;
            this.lastConnectedDropTargetOptions = null;
            this.backend = backend;
          }
        }
        function useConnectDropTarget(connector) {
          return reactExports.useMemo(() => connector.hooks.dropTarget(), [connector]);
        }
        function useDropTargetConnector(options) {
          const manager = useDragDropManager();
          const connector = reactExports.useMemo(() => new TargetConnector(manager.getBackend()), [manager]);
          useIsomorphicLayoutEffect(() => {
            connector.dropTargetOptions = options || null;
            connector.reconnect();
            return () => connector.disconnectDropTarget();
          }, [options]);
          return connector;
        }
        function useDropTargetMonitor() {
          const manager = useDragDropManager();
          return reactExports.useMemo(() => new DropTargetMonitorImpl(manager), [manager]);
        }

        /**
         * Internal utility hook to get an array-version of spec.accept.
         * The main utility here is that we aren't creating a new array on every render if a non-array spec.accept is passed in.
         * @param spec
         */
        function useAccept(spec) {
          const accept = spec.accept;
          return reactExports.useMemo(() => {
            invariant(spec.accept != null, 'accept must be defined');
            return Array.isArray(accept) ? accept : [accept];
          }, [accept]);
        }
        class DropTargetImpl {
          canDrop() {
            const spec = this.spec;
            const monitor = this.monitor;
            return spec.canDrop ? spec.canDrop(monitor.getItem(), monitor) : true;
          }
          hover() {
            const spec = this.spec;
            const monitor = this.monitor;
            if (spec.hover) {
              spec.hover(monitor.getItem(), monitor);
            }
          }
          drop() {
            const spec = this.spec;
            const monitor = this.monitor;
            if (spec.drop) {
              return spec.drop(monitor.getItem(), monitor);
            }
            return;
          }
          constructor(spec, monitor) {
            this.spec = spec;
            this.monitor = monitor;
          }
        }
        function useDropTarget(spec, monitor) {
          const dropTarget = reactExports.useMemo(() => new DropTargetImpl(spec, monitor), [monitor]);
          reactExports.useEffect(() => {
            dropTarget.spec = spec;
          }, [spec]);
          return dropTarget;
        }
        function useRegisteredDropTarget(spec, monitor, connector) {
          const manager = useDragDropManager();
          const dropTarget = useDropTarget(spec, monitor);
          const accept = useAccept(spec);
          useIsomorphicLayoutEffect(function registerDropTarget() {
            const _registerTarget = registerTarget(accept, dropTarget, manager),
              _registerTarget2 = _slicedToArray(_registerTarget, 2),
              handlerId = _registerTarget2[0],
              unregister = _registerTarget2[1];
            monitor.receiveHandlerId(handlerId);
            connector.receiveHandlerId(handlerId);
            return unregister;
          }, [manager, monitor, dropTarget, connector, accept.map(a => a.toString()).join('|')]);
        }

        /**
         * useDropTarget Hook
         * @param spec The drop target specification (object or function, function preferred)
         * @param deps The memoization deps array to use when evaluating spec changes
         */
        function useDrop(specArg, deps) {
          const spec = useOptionalFactory(specArg, deps);
          const monitor = useDropTargetMonitor();
          const connector = useDropTargetConnector(spec.options);
          useRegisteredDropTarget(spec, monitor, connector);
          return [useCollectedProps(spec.collect, monitor, connector), useConnectDropTarget(connector)];
        }
      }
    };
  });
})();
//# sourceMappingURL=useDrop-legacy-lI5_t_vT.js.map
