var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// node_modules/react/cjs/react.development.js
var require_react_development = __commonJS({
  "node_modules/react/cjs/react.development.js"(exports, module) {
    "use strict";
    if (true) {
      (function () {
        "use strict";
        if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart === "function") {
          __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
        }
        var ReactVersion = "18.2.0";
        var REACT_ELEMENT_TYPE = Symbol.for("react.element");
        var REACT_PORTAL_TYPE = Symbol.for("react.portal");
        var REACT_FRAGMENT_TYPE = Symbol.for("react.fragment");
        var REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode");
        var REACT_PROFILER_TYPE = Symbol.for("react.profiler");
        var REACT_PROVIDER_TYPE = Symbol.for("react.provider");
        var REACT_CONTEXT_TYPE = Symbol.for("react.context");
        var REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref");
        var REACT_SUSPENSE_TYPE = Symbol.for("react.suspense");
        var REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list");
        var REACT_MEMO_TYPE = Symbol.for("react.memo");
        var REACT_LAZY_TYPE = Symbol.for("react.lazy");
        var REACT_OFFSCREEN_TYPE = Symbol.for("react.offscreen");
        var MAYBE_ITERATOR_SYMBOL = Symbol.iterator;
        var FAUX_ITERATOR_SYMBOL = "@@iterator";
        function getIteratorFn(maybeIterable) {
          if (maybeIterable === null || typeof maybeIterable !== "object") {
            return null;
          }
          var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];
          if (typeof maybeIterator === "function") {
            return maybeIterator;
          }
          return null;
        }
        var ReactCurrentDispatcher = {
          /**
           * @internal
           * @type {ReactComponent}
           */
          current: null
        };
        var ReactCurrentBatchConfig = {
          transition: null
        };
        var ReactCurrentActQueue = {
          current: null,
          // Used to reproduce behavior of `batchedUpdates` in legacy mode.
          isBatchingLegacy: false,
          didScheduleLegacyUpdate: false
        };
        var ReactCurrentOwner = {
          /**
           * @internal
           * @type {ReactComponent}
           */
          current: null
        };
        var ReactDebugCurrentFrame = {};
        var currentExtraStackFrame = null;
        function setExtraStackFrame(stack) {
          {
            currentExtraStackFrame = stack;
          }
        }
        {
          ReactDebugCurrentFrame.setExtraStackFrame = function (stack) {
            {
              currentExtraStackFrame = stack;
            }
          };
          ReactDebugCurrentFrame.getCurrentStack = null;
          ReactDebugCurrentFrame.getStackAddendum = function () {
            var stack = "";
            if (currentExtraStackFrame) {
              stack += currentExtraStackFrame;
            }
            var impl = ReactDebugCurrentFrame.getCurrentStack;
            if (impl) {
              stack += impl() || "";
            }
            return stack;
          };
        }
        var enableScopeAPI = false;
        var enableCacheElement = false;
        var enableTransitionTracing = false;
        var enableLegacyHidden = false;
        var enableDebugTracing = false;
        var ReactSharedInternals = {
          ReactCurrentDispatcher,
          ReactCurrentBatchConfig,
          ReactCurrentOwner
        };
        {
          ReactSharedInternals.ReactDebugCurrentFrame = ReactDebugCurrentFrame;
          ReactSharedInternals.ReactCurrentActQueue = ReactCurrentActQueue;
        }
        function warn(format) {
          {
            {
              for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                args[_key - 1] = arguments[_key];
              }
              printWarning("warn", format, args);
            }
          }
        }
        function error(format) {
          {
            {
              for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
                args[_key2 - 1] = arguments[_key2];
              }
              printWarning("error", format, args);
            }
          }
        }
        function printWarning(level, format, args) {
          {
            var ReactDebugCurrentFrame2 = ReactSharedInternals.ReactDebugCurrentFrame;
            var stack = ReactDebugCurrentFrame2.getStackAddendum();
            if (stack !== "") {
              format += "%s";
              args = args.concat([stack]);
            }
            var argsWithFormat = args.map(function (item) {
              return String(item);
            });
            argsWithFormat.unshift("Warning: " + format);
            Function.prototype.apply.call(console[level], console, argsWithFormat);
          }
        }
        var didWarnStateUpdateForUnmountedComponent = {};
        function warnNoop(publicInstance, callerName) {
          {
            var _constructor = publicInstance.constructor;
            var componentName = _constructor && (_constructor.displayName || _constructor.name) || "ReactClass";
            var warningKey = componentName + "." + callerName;
            if (didWarnStateUpdateForUnmountedComponent[warningKey]) {
              return;
            }
            error("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", callerName, componentName);
            didWarnStateUpdateForUnmountedComponent[warningKey] = true;
          }
        }
        var ReactNoopUpdateQueue = {
          /**
           * Checks whether or not this composite component is mounted.
           * @param {ReactClass} publicInstance The instance we want to test.
           * @return {boolean} True if mounted, false otherwise.
           * @protected
           * @final
           */
          isMounted: function (publicInstance) {
            return false;
          },
          /**
           * Forces an update. This should only be invoked when it is known with
           * certainty that we are **not** in a DOM transaction.
           *
           * You may want to call this when you know that some deeper aspect of the
           * component's state has changed but `setState` was not called.
           *
           * This will not invoke `shouldComponentUpdate`, but it will invoke
           * `componentWillUpdate` and `componentDidUpdate`.
           *
           * @param {ReactClass} publicInstance The instance that should rerender.
           * @param {?function} callback Called after component is updated.
           * @param {?string} callerName name of the calling function in the public API.
           * @internal
           */
          enqueueForceUpdate: function (publicInstance, callback, callerName) {
            warnNoop(publicInstance, "forceUpdate");
          },
          /**
           * Replaces all of the state. Always use this or `setState` to mutate state.
           * You should treat `this.state` as immutable.
           *
           * There is no guarantee that `this.state` will be immediately updated, so
           * accessing `this.state` after calling this method may return the old value.
           *
           * @param {ReactClass} publicInstance The instance that should rerender.
           * @param {object} completeState Next state.
           * @param {?function} callback Called after component is updated.
           * @param {?string} callerName name of the calling function in the public API.
           * @internal
           */
          enqueueReplaceState: function (publicInstance, completeState, callback, callerName) {
            warnNoop(publicInstance, "replaceState");
          },
          /**
           * Sets a subset of the state. This only exists because _pendingState is
           * internal. This provides a merging strategy that is not available to deep
           * properties which is confusing. TODO: Expose pendingState or don't use it
           * during the merge.
           *
           * @param {ReactClass} publicInstance The instance that should rerender.
           * @param {object} partialState Next partial state to be merged with state.
           * @param {?function} callback Called after component is updated.
           * @param {?string} Name of the calling function in the public API.
           * @internal
           */
          enqueueSetState: function (publicInstance, partialState, callback, callerName) {
            warnNoop(publicInstance, "setState");
          }
        };
        var assign = Object.assign;
        var emptyObject = {};
        {
          Object.freeze(emptyObject);
        }
        function Component(props, context, updater) {
          this.props = props;
          this.context = context;
          this.refs = emptyObject;
          this.updater = updater || ReactNoopUpdateQueue;
        }
        Component.prototype.isReactComponent = {};
        Component.prototype.setState = function (partialState, callback) {
          if (typeof partialState !== "object" && typeof partialState !== "function" && partialState != null) {
            throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
          }
          this.updater.enqueueSetState(this, partialState, callback, "setState");
        };
        Component.prototype.forceUpdate = function (callback) {
          this.updater.enqueueForceUpdate(this, callback, "forceUpdate");
        };
        {
          var deprecatedAPIs = {
            isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
            replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
          };
          var defineDeprecationWarning = function (methodName, info) {
            Object.defineProperty(Component.prototype, methodName, {
              get: function () {
                warn("%s(...) is deprecated in plain JavaScript React classes. %s", info[0], info[1]);
                return void 0;
              }
            });
          };
          for (var fnName in deprecatedAPIs) {
            if (deprecatedAPIs.hasOwnProperty(fnName)) {
              defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
            }
          }
        }
        function ComponentDummy() {
        }
        ComponentDummy.prototype = Component.prototype;
        function PureComponent(props, context, updater) {
          this.props = props;
          this.context = context;
          this.refs = emptyObject;
          this.updater = updater || ReactNoopUpdateQueue;
        }
        var pureComponentPrototype = PureComponent.prototype = new ComponentDummy();
        pureComponentPrototype.constructor = PureComponent;
        assign(pureComponentPrototype, Component.prototype);
        pureComponentPrototype.isPureReactComponent = true;
        function createRef() {
          var refObject = {
            current: null
          };
          {
            Object.seal(refObject);
          }
          return refObject;
        }
        var isArrayImpl = Array.isArray;
        function isArray(a) {
          return isArrayImpl(a);
        }
        function typeName(value) {
          {
            var hasToStringTag = typeof Symbol === "function" && Symbol.toStringTag;
            var type = hasToStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            return type;
          }
        }
        function willCoercionThrow(value) {
          {
            try {
              testStringCoercion(value);
              return false;
            } catch (e) {
              return true;
            }
          }
        }
        function testStringCoercion(value) {
          return "" + value;
        }
        function checkKeyStringCoercion(value) {
          {
            if (willCoercionThrow(value)) {
              error("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", typeName(value));
              return testStringCoercion(value);
            }
          }
        }
        function getWrappedName(outerType, innerType, wrapperName) {
          var displayName = outerType.displayName;
          if (displayName) {
            return displayName;
          }
          var functionName = innerType.displayName || innerType.name || "";
          return functionName !== "" ? wrapperName + "(" + functionName + ")" : wrapperName;
        }
        function getContextName(type) {
          return type.displayName || "Context";
        }
        function getComponentNameFromType(type) {
          if (type == null) {
            return null;
          }
          {
            if (typeof type.tag === "number") {
              error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue.");
            }
          }
          if (typeof type === "function") {
            return type.displayName || type.name || null;
          }
          if (typeof type === "string") {
            return type;
          }
          switch (type) {
            case REACT_FRAGMENT_TYPE:
              return "Fragment";
            case REACT_PORTAL_TYPE:
              return "Portal";
            case REACT_PROFILER_TYPE:
              return "Profiler";
            case REACT_STRICT_MODE_TYPE:
              return "StrictMode";
            case REACT_SUSPENSE_TYPE:
              return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
              return "SuspenseList";
          }
          if (typeof type === "object") {
            switch (type.$$typeof) {
              case REACT_CONTEXT_TYPE:
                var context = type;
                return getContextName(context) + ".Consumer";
              case REACT_PROVIDER_TYPE:
                var provider = type;
                return getContextName(provider._context) + ".Provider";
              case REACT_FORWARD_REF_TYPE:
                return getWrappedName(type, type.render, "ForwardRef");
              case REACT_MEMO_TYPE:
                var outerName = type.displayName || null;
                if (outerName !== null) {
                  return outerName;
                }
                return getComponentNameFromType(type.type) || "Memo";
              case REACT_LAZY_TYPE: {
                var lazyComponent = type;
                var payload = lazyComponent._payload;
                var init = lazyComponent._init;
                try {
                  return getComponentNameFromType(init(payload));
                } catch (x2) {
                  return null;
                }
              }
            }
          }
          return null;
        }
        var hasOwnProperty = Object.prototype.hasOwnProperty;
        var RESERVED_PROPS = {
          key: true,
          ref: true,
          __self: true,
          __source: true
        };
        var specialPropKeyWarningShown, specialPropRefWarningShown, didWarnAboutStringRefs;
        {
          didWarnAboutStringRefs = {};
        }
        function hasValidRef(config) {
          {
            if (hasOwnProperty.call(config, "ref")) {
              var getter = Object.getOwnPropertyDescriptor(config, "ref").get;
              if (getter && getter.isReactWarning) {
                return false;
              }
            }
          }
          return config.ref !== void 0;
        }
        function hasValidKey(config) {
          {
            if (hasOwnProperty.call(config, "key")) {
              var getter = Object.getOwnPropertyDescriptor(config, "key").get;
              if (getter && getter.isReactWarning) {
                return false;
              }
            }
          }
          return config.key !== void 0;
        }
        function defineKeyPropWarningGetter(props, displayName) {
          var warnAboutAccessingKey = function () {
            {
              if (!specialPropKeyWarningShown) {
                specialPropKeyWarningShown = true;
                error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", displayName);
              }
            }
          };
          warnAboutAccessingKey.isReactWarning = true;
          Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: true
          });
        }
        function defineRefPropWarningGetter(props, displayName) {
          var warnAboutAccessingRef = function () {
            {
              if (!specialPropRefWarningShown) {
                specialPropRefWarningShown = true;
                error("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", displayName);
              }
            }
          };
          warnAboutAccessingRef.isReactWarning = true;
          Object.defineProperty(props, "ref", {
            get: warnAboutAccessingRef,
            configurable: true
          });
        }
        function warnIfStringRefCannotBeAutoConverted(config) {
          {
            if (typeof config.ref === "string" && ReactCurrentOwner.current && config.__self && ReactCurrentOwner.current.stateNode !== config.__self) {
              var componentName = getComponentNameFromType(ReactCurrentOwner.current.type);
              if (!didWarnAboutStringRefs[componentName]) {
                error('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', componentName, config.ref);
                didWarnAboutStringRefs[componentName] = true;
              }
            }
          }
        }
        var ReactElement = function (type, key, ref, self, source, owner, props) {
          var element = {
            // This tag allows us to uniquely identify this as a React Element
            $$typeof: REACT_ELEMENT_TYPE,
            // Built-in properties that belong on the element
            type,
            key,
            ref,
            props,
            // Record the component responsible for creating this element.
            _owner: owner
          };
          {
            element._store = {};
            Object.defineProperty(element._store, "validated", {
              configurable: false,
              enumerable: false,
              writable: true,
              value: false
            });
            Object.defineProperty(element, "_self", {
              configurable: false,
              enumerable: false,
              writable: false,
              value: self
            });
            Object.defineProperty(element, "_source", {
              configurable: false,
              enumerable: false,
              writable: false,
              value: source
            });
            if (Object.freeze) {
              Object.freeze(element.props);
              Object.freeze(element);
            }
          }
          return element;
        };
        function createElement(type, config, children) {
          var propName;
          var props = {};
          var key = null;
          var ref = null;
          var self = null;
          var source = null;
          if (config != null) {
            if (hasValidRef(config)) {
              ref = config.ref;
              {
                warnIfStringRefCannotBeAutoConverted(config);
              }
            }
            if (hasValidKey(config)) {
              {
                checkKeyStringCoercion(config.key);
              }
              key = "" + config.key;
            }
            self = config.__self === void 0 ? null : config.__self;
            source = config.__source === void 0 ? null : config.__source;
            for (propName in config) {
              if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
                props[propName] = config[propName];
              }
            }
          }
          var childrenLength = arguments.length - 2;
          if (childrenLength === 1) {
            props.children = children;
          } else if (childrenLength > 1) {
            var childArray = Array(childrenLength);
            for (var i = 0; i < childrenLength; i++) {
              childArray[i] = arguments[i + 2];
            }
            {
              if (Object.freeze) {
                Object.freeze(childArray);
              }
            }
            props.children = childArray;
          }
          if (type && type.defaultProps) {
            var defaultProps = type.defaultProps;
            for (propName in defaultProps) {
              if (props[propName] === void 0) {
                props[propName] = defaultProps[propName];
              }
            }
          }
          {
            if (key || ref) {
              var displayName = typeof type === "function" ? type.displayName || type.name || "Unknown" : type;
              if (key) {
                defineKeyPropWarningGetter(props, displayName);
              }
              if (ref) {
                defineRefPropWarningGetter(props, displayName);
              }
            }
          }
          return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
        }
        function cloneAndReplaceKey(oldElement, newKey) {
          var newElement = ReactElement(oldElement.type, newKey, oldElement.ref, oldElement._self, oldElement._source, oldElement._owner, oldElement.props);
          return newElement;
        }
        function cloneElement(element, config, children) {
          if (element === null || element === void 0) {
            throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + element + ".");
          }
          var propName;
          var props = assign({}, element.props);
          var key = element.key;
          var ref = element.ref;
          var self = element._self;
          var source = element._source;
          var owner = element._owner;
          if (config != null) {
            if (hasValidRef(config)) {
              ref = config.ref;
              owner = ReactCurrentOwner.current;
            }
            if (hasValidKey(config)) {
              {
                checkKeyStringCoercion(config.key);
              }
              key = "" + config.key;
            }
            var defaultProps;
            if (element.type && element.type.defaultProps) {
              defaultProps = element.type.defaultProps;
            }
            for (propName in config) {
              if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
                if (config[propName] === void 0 && defaultProps !== void 0) {
                  props[propName] = defaultProps[propName];
                } else {
                  props[propName] = config[propName];
                }
              }
            }
          }
          var childrenLength = arguments.length - 2;
          if (childrenLength === 1) {
            props.children = children;
          } else if (childrenLength > 1) {
            var childArray = Array(childrenLength);
            for (var i = 0; i < childrenLength; i++) {
              childArray[i] = arguments[i + 2];
            }
            props.children = childArray;
          }
          return ReactElement(element.type, key, ref, self, source, owner, props);
        }
        function isValidElement(object) {
          return typeof object === "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
        }
        var SEPARATOR = ".";
        var SUBSEPARATOR = ":";
        function escape(key) {
          var escapeRegex = /[=:]/g;
          var escaperLookup = {
            "=": "=0",
            ":": "=2"
          };
          var escapedString = key.replace(escapeRegex, function (match) {
            return escaperLookup[match];
          });
          return "$" + escapedString;
        }
        var didWarnAboutMaps = false;
        var userProvidedKeyEscapeRegex = /\/+/g;
        function escapeUserProvidedKey(text) {
          return text.replace(userProvidedKeyEscapeRegex, "$&/");
        }
        function getElementKey(element, index) {
          if (typeof element === "object" && element !== null && element.key != null) {
            {
              checkKeyStringCoercion(element.key);
            }
            return escape("" + element.key);
          }
          return index.toString(36);
        }
        function mapIntoArray(children, array, escapedPrefix, nameSoFar, callback) {
          var type = typeof children;
          if (type === "undefined" || type === "boolean") {
            children = null;
          }
          var invokeCallback = false;
          if (children === null) {
            invokeCallback = true;
          } else {
            switch (type) {
              case "string":
              case "number":
                invokeCallback = true;
                break;
              case "object":
                switch (children.$$typeof) {
                  case REACT_ELEMENT_TYPE:
                  case REACT_PORTAL_TYPE:
                    invokeCallback = true;
                }
            }
          }
          if (invokeCallback) {
            var _child = children;
            var mappedChild = callback(_child);
            var childKey = nameSoFar === "" ? SEPARATOR + getElementKey(_child, 0) : nameSoFar;
            if (isArray(mappedChild)) {
              var escapedChildKey = "";
              if (childKey != null) {
                escapedChildKey = escapeUserProvidedKey(childKey) + "/";
              }
              mapIntoArray(mappedChild, array, escapedChildKey, "", function (c) {
                return c;
              });
            } else if (mappedChild != null) {
              if (isValidElement(mappedChild)) {
                {
                  if (mappedChild.key && (!_child || _child.key !== mappedChild.key)) {
                    checkKeyStringCoercion(mappedChild.key);
                  }
                }
                mappedChild = cloneAndReplaceKey(
                  mappedChild,
                  // Keep both the (mapped) and old keys if they differ, just as
                  // traverseAllChildren used to do for objects as children
                  escapedPrefix + // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
                  (mappedChild.key && (!_child || _child.key !== mappedChild.key) ? (
                    // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
                    // eslint-disable-next-line react-internal/safe-string-coercion
                    escapeUserProvidedKey("" + mappedChild.key) + "/"
                  ) : "") + childKey
                );
              }
              array.push(mappedChild);
            }
            return 1;
          }
          var child;
          var nextName;
          var subtreeCount = 0;
          var nextNamePrefix = nameSoFar === "" ? SEPARATOR : nameSoFar + SUBSEPARATOR;
          if (isArray(children)) {
            for (var i = 0; i < children.length; i++) {
              child = children[i];
              nextName = nextNamePrefix + getElementKey(child, i);
              subtreeCount += mapIntoArray(child, array, escapedPrefix, nextName, callback);
            }
          } else {
            var iteratorFn = getIteratorFn(children);
            if (typeof iteratorFn === "function") {
              var iterableChildren = children;
              {
                if (iteratorFn === iterableChildren.entries) {
                  if (!didWarnAboutMaps) {
                    warn("Using Maps as children is not supported. Use an array of keyed ReactElements instead.");
                  }
                  didWarnAboutMaps = true;
                }
              }
              var iterator = iteratorFn.call(iterableChildren);
              var step;
              var ii = 0;
              while (!(step = iterator.next()).done) {
                child = step.value;
                nextName = nextNamePrefix + getElementKey(child, ii++);
                subtreeCount += mapIntoArray(child, array, escapedPrefix, nextName, callback);
              }
            } else if (type === "object") {
              var childrenString = String(children);
              throw new Error("Objects are not valid as a React child (found: " + (childrenString === "[object Object]" ? "object with keys {" + Object.keys(children).join(", ") + "}" : childrenString) + "). If you meant to render a collection of children, use an array instead.");
            }
          }
          return subtreeCount;
        }
        function mapChildren(children, func, context) {
          if (children == null) {
            return children;
          }
          var result = [];
          var count = 0;
          mapIntoArray(children, result, "", "", function (child) {
            return func.call(context, child, count++);
          });
          return result;
        }
        function countChildren(children) {
          var n = 0;
          mapChildren(children, function () {
            n++;
          });
          return n;
        }
        function forEachChildren(children, forEachFunc, forEachContext) {
          mapChildren(children, function () {
            forEachFunc.apply(this, arguments);
          }, forEachContext);
        }
        function toArray(children) {
          return mapChildren(children, function (child) {
            return child;
          }) || [];
        }
        function onlyChild(children) {
          if (!isValidElement(children)) {
            throw new Error("React.Children.only expected to receive a single React element child.");
          }
          return children;
        }
        function createContext(defaultValue) {
          var context = {
            $$typeof: REACT_CONTEXT_TYPE,
            // As a workaround to support multiple concurrent renderers, we categorize
            // some renderers as primary and others as secondary. We only expect
            // there to be two concurrent renderers at most: React Native (primary) and
            // Fabric (secondary); React DOM (primary) and React ART (secondary).
            // Secondary renderers store their context values on separate fields.
            _currentValue: defaultValue,
            _currentValue2: defaultValue,
            // Used to track how many concurrent renderers this context currently
            // supports within in a single renderer. Such as parallel server rendering.
            _threadCount: 0,
            // These are circular
            Provider: null,
            Consumer: null,
            // Add these to use same hidden class in VM as ServerContext
            _defaultValue: null,
            _globalName: null
          };
          context.Provider = {
            $$typeof: REACT_PROVIDER_TYPE,
            _context: context
          };
          var hasWarnedAboutUsingNestedContextConsumers = false;
          var hasWarnedAboutUsingConsumerProvider = false;
          var hasWarnedAboutDisplayNameOnConsumer = false;
          {
            var Consumer = {
              $$typeof: REACT_CONTEXT_TYPE,
              _context: context
            };
            Object.defineProperties(Consumer, {
              Provider: {
                get: function () {
                  if (!hasWarnedAboutUsingConsumerProvider) {
                    hasWarnedAboutUsingConsumerProvider = true;
                    error("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?");
                  }
                  return context.Provider;
                },
                set: function (_Provider) {
                  context.Provider = _Provider;
                }
              },
              _currentValue: {
                get: function () {
                  return context._currentValue;
                },
                set: function (_currentValue) {
                  context._currentValue = _currentValue;
                }
              },
              _currentValue2: {
                get: function () {
                  return context._currentValue2;
                },
                set: function (_currentValue2) {
                  context._currentValue2 = _currentValue2;
                }
              },
              _threadCount: {
                get: function () {
                  return context._threadCount;
                },
                set: function (_threadCount) {
                  context._threadCount = _threadCount;
                }
              },
              Consumer: {
                get: function () {
                  if (!hasWarnedAboutUsingNestedContextConsumers) {
                    hasWarnedAboutUsingNestedContextConsumers = true;
                    error("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?");
                  }
                  return context.Consumer;
                }
              },
              displayName: {
                get: function () {
                  return context.displayName;
                },
                set: function (displayName) {
                  if (!hasWarnedAboutDisplayNameOnConsumer) {
                    warn("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", displayName);
                    hasWarnedAboutDisplayNameOnConsumer = true;
                  }
                }
              }
            });
            context.Consumer = Consumer;
          }
          {
            context._currentRenderer = null;
            context._currentRenderer2 = null;
          }
          return context;
        }
        var Uninitialized = -1;
        var Pending = 0;
        var Resolved = 1;
        var Rejected = 2;
        function lazyInitializer(payload) {
          if (payload._status === Uninitialized) {
            var ctor = payload._result;
            var thenable = ctor();
            thenable.then(function (moduleObject2) {
              if (payload._status === Pending || payload._status === Uninitialized) {
                var resolved = payload;
                resolved._status = Resolved;
                resolved._result = moduleObject2;
              }
            }, function (error2) {
              if (payload._status === Pending || payload._status === Uninitialized) {
                var rejected = payload;
                rejected._status = Rejected;
                rejected._result = error2;
              }
            });
            if (payload._status === Uninitialized) {
              var pending = payload;
              pending._status = Pending;
              pending._result = thenable;
            }
          }
          if (payload._status === Resolved) {
            var moduleObject = payload._result;
            {
              if (moduleObject === void 0) {
                error("lazy: Expected the result of a dynamic import() call. Instead received: %s\n\nYour code should look like: \n  const MyComponent = lazy(() => import('./MyComponent'))\n\nDid you accidentally put curly braces around the import?", moduleObject);
              }
            }
            {
              if (!("default" in moduleObject)) {
                error("lazy: Expected the result of a dynamic import() call. Instead received: %s\n\nYour code should look like: \n  const MyComponent = lazy(() => import('./MyComponent'))", moduleObject);
              }
            }
            return moduleObject.default;
          } else {
            throw payload._result;
          }
        }
        function lazy(ctor) {
          var payload = {
            // We use these fields to store the result.
            _status: Uninitialized,
            _result: ctor
          };
          var lazyType = {
            $$typeof: REACT_LAZY_TYPE,
            _payload: payload,
            _init: lazyInitializer
          };
          {
            var defaultProps;
            var propTypes;
            Object.defineProperties(lazyType, {
              defaultProps: {
                configurable: true,
                get: function () {
                  return defaultProps;
                },
                set: function (newDefaultProps) {
                  error("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it.");
                  defaultProps = newDefaultProps;
                  Object.defineProperty(lazyType, "defaultProps", {
                    enumerable: true
                  });
                }
              },
              propTypes: {
                configurable: true,
                get: function () {
                  return propTypes;
                },
                set: function (newPropTypes) {
                  error("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it.");
                  propTypes = newPropTypes;
                  Object.defineProperty(lazyType, "propTypes", {
                    enumerable: true
                  });
                }
              }
            });
          }
          return lazyType;
        }
        function forwardRef(render) {
          {
            if (render != null && render.$$typeof === REACT_MEMO_TYPE) {
              error("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).");
            } else if (typeof render !== "function") {
              error("forwardRef requires a render function but was given %s.", render === null ? "null" : typeof render);
            } else {
              if (render.length !== 0 && render.length !== 2) {
                error("forwardRef render functions accept exactly two parameters: props and ref. %s", render.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined.");
              }
            }
            if (render != null) {
              if (render.defaultProps != null || render.propTypes != null) {
                error("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
              }
            }
          }
          var elementType = {
            $$typeof: REACT_FORWARD_REF_TYPE,
            render
          };
          {
            var ownName;
            Object.defineProperty(elementType, "displayName", {
              enumerable: false,
              configurable: true,
              get: function () {
                return ownName;
              },
              set: function (name) {
                ownName = name;
                if (!render.name && !render.displayName) {
                  render.displayName = name;
                }
              }
            });
          }
          return elementType;
        }
        var REACT_MODULE_REFERENCE;
        {
          REACT_MODULE_REFERENCE = Symbol.for("react.module.reference");
        }
        function isValidElementType(type) {
          if (typeof type === "string" || typeof type === "function") {
            return true;
          }
          if (type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || enableDebugTracing || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || enableLegacyHidden || type === REACT_OFFSCREEN_TYPE || enableScopeAPI || enableCacheElement || enableTransitionTracing) {
            return true;
          }
          if (typeof type === "object" && type !== null) {
            if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || // This needs to include all possible module reference object
              // types supported by any Flight configuration anywhere since
              // we don't know which Flight build this will end up being used
              // with.
              type.$$typeof === REACT_MODULE_REFERENCE || type.getModuleId !== void 0) {
              return true;
            }
          }
          return false;
        }
        function memo(type, compare) {
          {
            if (!isValidElementType(type)) {
              error("memo: The first argument must be a component. Instead received: %s", type === null ? "null" : typeof type);
            }
          }
          var elementType = {
            $$typeof: REACT_MEMO_TYPE,
            type,
            compare: compare === void 0 ? null : compare
          };
          {
            var ownName;
            Object.defineProperty(elementType, "displayName", {
              enumerable: false,
              configurable: true,
              get: function () {
                return ownName;
              },
              set: function (name) {
                ownName = name;
                if (!type.name && !type.displayName) {
                  type.displayName = name;
                }
              }
            });
          }
          return elementType;
        }
        function resolveDispatcher() {
          var dispatcher = ReactCurrentDispatcher.current;
          {
            if (dispatcher === null) {
              error("Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.");
            }
          }
          return dispatcher;
        }
        function useContext(Context) {
          var dispatcher = resolveDispatcher();
          {
            if (Context._context !== void 0) {
              var realContext = Context._context;
              if (realContext.Consumer === Context) {
                error("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?");
              } else if (realContext.Provider === Context) {
                error("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
              }
            }
          }
          return dispatcher.useContext(Context);
        }
        function useState2(initialState) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useState(initialState);
        }
        function useReducer(reducer, initialArg, init) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useReducer(reducer, initialArg, init);
        }
        function useRef(initialValue) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useRef(initialValue);
        }
        function useEffect2(create, deps) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useEffect(create, deps);
        }
        function useInsertionEffect(create, deps) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useInsertionEffect(create, deps);
        }
        function useLayoutEffect(create, deps) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useLayoutEffect(create, deps);
        }
        function useCallback(callback, deps) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useCallback(callback, deps);
        }
        function useMemo(create, deps) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useMemo(create, deps);
        }
        function useImperativeHandle(ref, create, deps) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useImperativeHandle(ref, create, deps);
        }
        function useDebugValue(value, formatterFn) {
          {
            var dispatcher = resolveDispatcher();
            return dispatcher.useDebugValue(value, formatterFn);
          }
        }
        function useTransition() {
          var dispatcher = resolveDispatcher();
          return dispatcher.useTransition();
        }
        function useDeferredValue(value) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useDeferredValue(value);
        }
        function useId() {
          var dispatcher = resolveDispatcher();
          return dispatcher.useId();
        }
        function useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
        }
        var disabledDepth = 0;
        var prevLog;
        var prevInfo;
        var prevWarn;
        var prevError;
        var prevGroup;
        var prevGroupCollapsed;
        var prevGroupEnd;
        function disabledLog() {
        }
        disabledLog.__reactDisabledLog = true;
        function disableLogs() {
          {
            if (disabledDepth === 0) {
              prevLog = console.log;
              prevInfo = console.info;
              prevWarn = console.warn;
              prevError = console.error;
              prevGroup = console.group;
              prevGroupCollapsed = console.groupCollapsed;
              prevGroupEnd = console.groupEnd;
              var props = {
                configurable: true,
                enumerable: true,
                value: disabledLog,
                writable: true
              };
              Object.defineProperties(console, {
                info: props,
                log: props,
                warn: props,
                error: props,
                group: props,
                groupCollapsed: props,
                groupEnd: props
              });
            }
            disabledDepth++;
          }
        }
        function reenableLogs() {
          {
            disabledDepth--;
            if (disabledDepth === 0) {
              var props = {
                configurable: true,
                enumerable: true,
                writable: true
              };
              Object.defineProperties(console, {
                log: assign({}, props, {
                  value: prevLog
                }),
                info: assign({}, props, {
                  value: prevInfo
                }),
                warn: assign({}, props, {
                  value: prevWarn
                }),
                error: assign({}, props, {
                  value: prevError
                }),
                group: assign({}, props, {
                  value: prevGroup
                }),
                groupCollapsed: assign({}, props, {
                  value: prevGroupCollapsed
                }),
                groupEnd: assign({}, props, {
                  value: prevGroupEnd
                })
              });
            }
            if (disabledDepth < 0) {
              error("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
            }
          }
        }
        var ReactCurrentDispatcher$1 = ReactSharedInternals.ReactCurrentDispatcher;
        var prefix;
        function describeBuiltInComponentFrame(name, source, ownerFn) {
          {
            if (prefix === void 0) {
              try {
                throw Error();
              } catch (x2) {
                var match = x2.stack.trim().match(/\n( *(at )?)/);
                prefix = match && match[1] || "";
              }
            }
            return "\n" + prefix + name;
          }
        }
        var reentry = false;
        var componentFrameCache;
        {
          var PossiblyWeakMap = typeof WeakMap === "function" ? WeakMap : Map;
          componentFrameCache = new PossiblyWeakMap();
        }
        function describeNativeComponentFrame(fn, construct) {
          if (!fn || reentry) {
            return "";
          }
          {
            var frame = componentFrameCache.get(fn);
            if (frame !== void 0) {
              return frame;
            }
          }
          var control;
          reentry = true;
          var previousPrepareStackTrace = Error.prepareStackTrace;
          Error.prepareStackTrace = void 0;
          var previousDispatcher;
          {
            previousDispatcher = ReactCurrentDispatcher$1.current;
            ReactCurrentDispatcher$1.current = null;
            disableLogs();
          }
          try {
            if (construct) {
              var Fake = function () {
                throw Error();
              };
              Object.defineProperty(Fake.prototype, "props", {
                set: function () {
                  throw Error();
                }
              });
              if (typeof Reflect === "object" && Reflect.construct) {
                try {
                  Reflect.construct(Fake, []);
                } catch (x2) {
                  control = x2;
                }
                Reflect.construct(fn, [], Fake);
              } else {
                try {
                  Fake.call();
                } catch (x2) {
                  control = x2;
                }
                fn.call(Fake.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (x2) {
                control = x2;
              }
              fn();
            }
          } catch (sample) {
            if (sample && control && typeof sample.stack === "string") {
              var sampleLines = sample.stack.split("\n");
              var controlLines = control.stack.split("\n");
              var s = sampleLines.length - 1;
              var c = controlLines.length - 1;
              while (s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]) {
                c--;
              }
              for (; s >= 1 && c >= 0; s--, c--) {
                if (sampleLines[s] !== controlLines[c]) {
                  if (s !== 1 || c !== 1) {
                    do {
                      s--;
                      c--;
                      if (c < 0 || sampleLines[s] !== controlLines[c]) {
                        var _frame = "\n" + sampleLines[s].replace(" at new ", " at ");
                        if (fn.displayName && _frame.includes("<anonymous>")) {
                          _frame = _frame.replace("<anonymous>", fn.displayName);
                        }
                        {
                          if (typeof fn === "function") {
                            componentFrameCache.set(fn, _frame);
                          }
                        }
                        return _frame;
                      }
                    } while (s >= 1 && c >= 0);
                  }
                  break;
                }
              }
            }
          } finally {
            reentry = false;
            {
              ReactCurrentDispatcher$1.current = previousDispatcher;
              reenableLogs();
            }
            Error.prepareStackTrace = previousPrepareStackTrace;
          }
          var name = fn ? fn.displayName || fn.name : "";
          var syntheticFrame = name ? describeBuiltInComponentFrame(name) : "";
          {
            if (typeof fn === "function") {
              componentFrameCache.set(fn, syntheticFrame);
            }
          }
          return syntheticFrame;
        }
        function describeFunctionComponentFrame(fn, source, ownerFn) {
          {
            return describeNativeComponentFrame(fn, false);
          }
        }
        function shouldConstruct(Component2) {
          var prototype = Component2.prototype;
          return !!(prototype && prototype.isReactComponent);
        }
        function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {
          if (type == null) {
            return "";
          }
          if (typeof type === "function") {
            {
              return describeNativeComponentFrame(type, shouldConstruct(type));
            }
          }
          if (typeof type === "string") {
            return describeBuiltInComponentFrame(type);
          }
          switch (type) {
            case REACT_SUSPENSE_TYPE:
              return describeBuiltInComponentFrame("Suspense");
            case REACT_SUSPENSE_LIST_TYPE:
              return describeBuiltInComponentFrame("SuspenseList");
          }
          if (typeof type === "object") {
            switch (type.$$typeof) {
              case REACT_FORWARD_REF_TYPE:
                return describeFunctionComponentFrame(type.render);
              case REACT_MEMO_TYPE:
                return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);
              case REACT_LAZY_TYPE: {
                var lazyComponent = type;
                var payload = lazyComponent._payload;
                var init = lazyComponent._init;
                try {
                  return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
                } catch (x2) {
                }
              }
            }
          }
          return "";
        }
        var loggedTypeFailures = {};
        var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;
        function setCurrentlyValidatingElement(element) {
          {
            if (element) {
              var owner = element._owner;
              var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
              ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
            } else {
              ReactDebugCurrentFrame$1.setExtraStackFrame(null);
            }
          }
        }
        function checkPropTypes(typeSpecs, values, location, componentName, element) {
          {
            var has = Function.call.bind(hasOwnProperty);
            for (var typeSpecName in typeSpecs) {
              if (has(typeSpecs, typeSpecName)) {
                var error$1 = void 0;
                try {
                  if (typeof typeSpecs[typeSpecName] !== "function") {
                    var err = Error((componentName || "React class") + ": " + location + " type `" + typeSpecName + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof typeSpecs[typeSpecName] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                    err.name = "Invariant Violation";
                    throw err;
                  }
                  error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
                } catch (ex) {
                  error$1 = ex;
                }
                if (error$1 && !(error$1 instanceof Error)) {
                  setCurrentlyValidatingElement(element);
                  error("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", componentName || "React class", location, typeSpecName, typeof error$1);
                  setCurrentlyValidatingElement(null);
                }
                if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
                  loggedTypeFailures[error$1.message] = true;
                  setCurrentlyValidatingElement(element);
                  error("Failed %s type: %s", location, error$1.message);
                  setCurrentlyValidatingElement(null);
                }
              }
            }
          }
        }
        function setCurrentlyValidatingElement$1(element) {
          {
            if (element) {
              var owner = element._owner;
              var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
              setExtraStackFrame(stack);
            } else {
              setExtraStackFrame(null);
            }
          }
        }
        var propTypesMisspellWarningShown;
        {
          propTypesMisspellWarningShown = false;
        }
        function getDeclarationErrorAddendum() {
          if (ReactCurrentOwner.current) {
            var name = getComponentNameFromType(ReactCurrentOwner.current.type);
            if (name) {
              return "\n\nCheck the render method of `" + name + "`.";
            }
          }
          return "";
        }
        function getSourceInfoErrorAddendum(source) {
          if (source !== void 0) {
            var fileName = source.fileName.replace(/^.*[\\\/]/, "");
            var lineNumber = source.lineNumber;
            return "\n\nCheck your code at " + fileName + ":" + lineNumber + ".";
          }
          return "";
        }
        function getSourceInfoErrorAddendumForProps(elementProps) {
          if (elementProps !== null && elementProps !== void 0) {
            return getSourceInfoErrorAddendum(elementProps.__source);
          }
          return "";
        }
        var ownerHasKeyUseWarning = {};
        function getCurrentComponentErrorInfo(parentType) {
          var info = getDeclarationErrorAddendum();
          if (!info) {
            var parentName = typeof parentType === "string" ? parentType : parentType.displayName || parentType.name;
            if (parentName) {
              info = "\n\nCheck the top-level render call using <" + parentName + ">.";
            }
          }
          return info;
        }
        function validateExplicitKey(element, parentType) {
          if (!element._store || element._store.validated || element.key != null) {
            return;
          }
          element._store.validated = true;
          var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);
          if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
            return;
          }
          ownerHasKeyUseWarning[currentComponentErrorInfo] = true;
          var childOwner = "";
          if (element && element._owner && element._owner !== ReactCurrentOwner.current) {
            childOwner = " It was passed a child from " + getComponentNameFromType(element._owner.type) + ".";
          }
          {
            setCurrentlyValidatingElement$1(element);
            error('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner);
            setCurrentlyValidatingElement$1(null);
          }
        }
        function validateChildKeys(node, parentType) {
          if (typeof node !== "object") {
            return;
          }
          if (isArray(node)) {
            for (var i = 0; i < node.length; i++) {
              var child = node[i];
              if (isValidElement(child)) {
                validateExplicitKey(child, parentType);
              }
            }
          } else if (isValidElement(node)) {
            if (node._store) {
              node._store.validated = true;
            }
          } else if (node) {
            var iteratorFn = getIteratorFn(node);
            if (typeof iteratorFn === "function") {
              if (iteratorFn !== node.entries) {
                var iterator = iteratorFn.call(node);
                var step;
                while (!(step = iterator.next()).done) {
                  if (isValidElement(step.value)) {
                    validateExplicitKey(step.value, parentType);
                  }
                }
              }
            }
          }
        }
        function validatePropTypes(element) {
          {
            var type = element.type;
            if (type === null || type === void 0 || typeof type === "string") {
              return;
            }
            var propTypes;
            if (typeof type === "function") {
              propTypes = type.propTypes;
            } else if (typeof type === "object" && (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.
              // Inner props are checked in the reconciler.
              type.$$typeof === REACT_MEMO_TYPE)) {
              propTypes = type.propTypes;
            } else {
              return;
            }
            if (propTypes) {
              var name = getComponentNameFromType(type);
              checkPropTypes(propTypes, element.props, "prop", name, element);
            } else if (type.PropTypes !== void 0 && !propTypesMisspellWarningShown) {
              propTypesMisspellWarningShown = true;
              var _name = getComponentNameFromType(type);
              error("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", _name || "Unknown");
            }
            if (typeof type.getDefaultProps === "function" && !type.getDefaultProps.isReactClassApproved) {
              error("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
            }
          }
        }
        function validateFragmentProps(fragment) {
          {
            var keys = Object.keys(fragment.props);
            for (var i = 0; i < keys.length; i++) {
              var key = keys[i];
              if (key !== "children" && key !== "key") {
                setCurrentlyValidatingElement$1(fragment);
                error("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", key);
                setCurrentlyValidatingElement$1(null);
                break;
              }
            }
            if (fragment.ref !== null) {
              setCurrentlyValidatingElement$1(fragment);
              error("Invalid attribute `ref` supplied to `React.Fragment`.");
              setCurrentlyValidatingElement$1(null);
            }
          }
        }
        function createElementWithValidation(type, props, children) {
          var validType = isValidElementType(type);
          if (!validType) {
            var info = "";
            if (type === void 0 || typeof type === "object" && type !== null && Object.keys(type).length === 0) {
              info += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.";
            }
            var sourceInfo = getSourceInfoErrorAddendumForProps(props);
            if (sourceInfo) {
              info += sourceInfo;
            } else {
              info += getDeclarationErrorAddendum();
            }
            var typeString;
            if (type === null) {
              typeString = "null";
            } else if (isArray(type)) {
              typeString = "array";
            } else if (type !== void 0 && type.$$typeof === REACT_ELEMENT_TYPE) {
              typeString = "<" + (getComponentNameFromType(type.type) || "Unknown") + " />";
              info = " Did you accidentally export a JSX literal instead of a component?";
            } else {
              typeString = typeof type;
            }
            {
              error("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", typeString, info);
            }
          }
          var element = createElement.apply(this, arguments);
          if (element == null) {
            return element;
          }
          if (validType) {
            for (var i = 2; i < arguments.length; i++) {
              validateChildKeys(arguments[i], type);
            }
          }
          if (type === REACT_FRAGMENT_TYPE) {
            validateFragmentProps(element);
          } else {
            validatePropTypes(element);
          }
          return element;
        }
        var didWarnAboutDeprecatedCreateFactory = false;
        function createFactoryWithValidation(type) {
          var validatedFactory = createElementWithValidation.bind(null, type);
          validatedFactory.type = type;
          {
            if (!didWarnAboutDeprecatedCreateFactory) {
              didWarnAboutDeprecatedCreateFactory = true;
              warn("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.");
            }
            Object.defineProperty(validatedFactory, "type", {
              enumerable: false,
              get: function () {
                warn("Factory.type is deprecated. Access the class directly before passing it to createFactory.");
                Object.defineProperty(this, "type", {
                  value: type
                });
                return type;
              }
            });
          }
          return validatedFactory;
        }
        function cloneElementWithValidation(element, props, children) {
          var newElement = cloneElement.apply(this, arguments);
          for (var i = 2; i < arguments.length; i++) {
            validateChildKeys(arguments[i], newElement.type);
          }
          validatePropTypes(newElement);
          return newElement;
        }
        function startTransition(scope, options) {
          var prevTransition = ReactCurrentBatchConfig.transition;
          ReactCurrentBatchConfig.transition = {};
          var currentTransition = ReactCurrentBatchConfig.transition;
          {
            ReactCurrentBatchConfig.transition._updatedFibers = /* @__PURE__ */ new Set();
          }
          try {
            scope();
          } finally {
            ReactCurrentBatchConfig.transition = prevTransition;
            {
              if (prevTransition === null && currentTransition._updatedFibers) {
                var updatedFibersCount = currentTransition._updatedFibers.size;
                if (updatedFibersCount > 10) {
                  warn("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table.");
                }
                currentTransition._updatedFibers.clear();
              }
            }
          }
        }
        var didWarnAboutMessageChannel = false;
        var enqueueTaskImpl = null;
        function enqueueTask(task) {
          if (enqueueTaskImpl === null) {
            try {
              var requireString = ("require" + Math.random()).slice(0, 7);
              var nodeRequire = module && module[requireString];
              enqueueTaskImpl = nodeRequire.call(module, "timers").setImmediate;
            } catch (_err) {
              enqueueTaskImpl = function (callback) {
                {
                  if (didWarnAboutMessageChannel === false) {
                    didWarnAboutMessageChannel = true;
                    if (typeof MessageChannel === "undefined") {
                      error("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning.");
                    }
                  }
                }
                var channel = new MessageChannel();
                channel.port1.onmessage = callback;
                channel.port2.postMessage(void 0);
              };
            }
          }
          return enqueueTaskImpl(task);
        }
        var actScopeDepth = 0;
        var didWarnNoAwaitAct = false;
        function act(callback) {
          {
            var prevActScopeDepth = actScopeDepth;
            actScopeDepth++;
            if (ReactCurrentActQueue.current === null) {
              ReactCurrentActQueue.current = [];
            }
            var prevIsBatchingLegacy = ReactCurrentActQueue.isBatchingLegacy;
            var result;
            try {
              ReactCurrentActQueue.isBatchingLegacy = true;
              result = callback();
              if (!prevIsBatchingLegacy && ReactCurrentActQueue.didScheduleLegacyUpdate) {
                var queue = ReactCurrentActQueue.current;
                if (queue !== null) {
                  ReactCurrentActQueue.didScheduleLegacyUpdate = false;
                  flushActQueue(queue);
                }
              }
            } catch (error2) {
              popActScope(prevActScopeDepth);
              throw error2;
            } finally {
              ReactCurrentActQueue.isBatchingLegacy = prevIsBatchingLegacy;
            }
            if (result !== null && typeof result === "object" && typeof result.then === "function") {
              var thenableResult = result;
              var wasAwaited = false;
              var thenable = {
                then: function (resolve, reject) {
                  wasAwaited = true;
                  thenableResult.then(function (returnValue2) {
                    popActScope(prevActScopeDepth);
                    if (actScopeDepth === 0) {
                      recursivelyFlushAsyncActWork(returnValue2, resolve, reject);
                    } else {
                      resolve(returnValue2);
                    }
                  }, function (error2) {
                    popActScope(prevActScopeDepth);
                    reject(error2);
                  });
                }
              };
              {
                if (!didWarnNoAwaitAct && typeof Promise !== "undefined") {
                  Promise.resolve().then(function () {
                  }).then(function () {
                    if (!wasAwaited) {
                      didWarnNoAwaitAct = true;
                      error("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);");
                    }
                  });
                }
              }
              return thenable;
            } else {
              var returnValue = result;
              popActScope(prevActScopeDepth);
              if (actScopeDepth === 0) {
                var _queue = ReactCurrentActQueue.current;
                if (_queue !== null) {
                  flushActQueue(_queue);
                  ReactCurrentActQueue.current = null;
                }
                var _thenable = {
                  then: function (resolve, reject) {
                    if (ReactCurrentActQueue.current === null) {
                      ReactCurrentActQueue.current = [];
                      recursivelyFlushAsyncActWork(returnValue, resolve, reject);
                    } else {
                      resolve(returnValue);
                    }
                  }
                };
                return _thenable;
              } else {
                var _thenable2 = {
                  then: function (resolve, reject) {
                    resolve(returnValue);
                  }
                };
                return _thenable2;
              }
            }
          }
        }
        function popActScope(prevActScopeDepth) {
          {
            if (prevActScopeDepth !== actScopeDepth - 1) {
              error("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. ");
            }
            actScopeDepth = prevActScopeDepth;
          }
        }
        function recursivelyFlushAsyncActWork(returnValue, resolve, reject) {
          {
            var queue = ReactCurrentActQueue.current;
            if (queue !== null) {
              try {
                flushActQueue(queue);
                enqueueTask(function () {
                  if (queue.length === 0) {
                    ReactCurrentActQueue.current = null;
                    resolve(returnValue);
                  } else {
                    recursivelyFlushAsyncActWork(returnValue, resolve, reject);
                  }
                });
              } catch (error2) {
                reject(error2);
              }
            } else {
              resolve(returnValue);
            }
          }
        }
        var isFlushing = false;
        function flushActQueue(queue) {
          {
            if (!isFlushing) {
              isFlushing = true;
              var i = 0;
              try {
                for (; i < queue.length; i++) {
                  var callback = queue[i];
                  do {
                    callback = callback(true);
                  } while (callback !== null);
                }
                queue.length = 0;
              } catch (error2) {
                queue = queue.slice(i + 1);
                throw error2;
              } finally {
                isFlushing = false;
              }
            }
          }
        }
        var createElement$1 = createElementWithValidation;
        var cloneElement$1 = cloneElementWithValidation;
        var createFactory = createFactoryWithValidation;
        var Children = {
          map: mapChildren,
          forEach: forEachChildren,
          count: countChildren,
          toArray,
          only: onlyChild
        };
        exports.Children = Children;
        exports.Component = Component;
        exports.Fragment = REACT_FRAGMENT_TYPE;
        exports.Profiler = REACT_PROFILER_TYPE;
        exports.PureComponent = PureComponent;
        exports.StrictMode = REACT_STRICT_MODE_TYPE;
        exports.Suspense = REACT_SUSPENSE_TYPE;
        exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ReactSharedInternals;
        exports.cloneElement = cloneElement$1;
        exports.createContext = createContext;
        exports.createElement = createElement$1;
        exports.createFactory = createFactory;
        exports.createRef = createRef;
        exports.forwardRef = forwardRef;
        exports.isValidElement = isValidElement;
        exports.lazy = lazy;
        exports.memo = memo;
        exports.startTransition = startTransition;
        exports.unstable_act = act;
        exports.useCallback = useCallback;
        exports.useContext = useContext;
        exports.useDebugValue = useDebugValue;
        exports.useDeferredValue = useDeferredValue;
        exports.useEffect = useEffect2;
        exports.useId = useId;
        exports.useImperativeHandle = useImperativeHandle;
        exports.useInsertionEffect = useInsertionEffect;
        exports.useLayoutEffect = useLayoutEffect;
        exports.useMemo = useMemo;
        exports.useReducer = useReducer;
        exports.useRef = useRef;
        exports.useState = useState2;
        exports.useSyncExternalStore = useSyncExternalStore;
        exports.useTransition = useTransition;
        exports.version = ReactVersion;
        if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop === "function") {
          __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
        }
      })();
    }
  }
});

// node_modules/react/index.js
var require_react = __commonJS({
  "node_modules/react/index.js"(exports, module) {
    "use strict";
    if (false) {
      module.exports = null;
    } else {
      module.exports = require_react_development();
    }
  }
});

// src/index.tsx
var import_react = __toESM(require_react());

// node_modules/@extism/extism/dist/browser/mod.js
var Fe = Object.create;
var Lt = Object.defineProperty;
var Ce = Object.getOwnPropertyDescriptor;
var He = Object.getOwnPropertyNames;
var Te = Object.getPrototypeOf;
var Ye = Object.prototype.hasOwnProperty;
var Ke = (r, t, e) => t in r ? Lt(r, t, { enumerable: true, configurable: true, writable: true, value: e }) : r[t] = e;
var At = (r, t) => () => (t || r((t = { exports: {} }).exports, t), t.exports);
var ke = (r, t, e, s) => {
  if (t && typeof t == "object" || typeof t == "function")
    for (let n of He(t))
      !Ye.call(r, n) && n !== e && Lt(r, n, { get: () => t[n], enumerable: !(s = Ce(t, n)) || s.enumerable });
  return r;
};
var ze = (r, t, e) => (e = r != null ? Fe(Te(r)) : {}, ke(t || !r || !r.__esModule ? Lt(e, "default", { value: r, enumerable: true }) : e, r));
var it = (r, t, e) => (Ke(r, typeof t != "symbol" ? t + "" : t, e), e);
var wt = (r, t, e) => {
  if (!t.has(r))
    throw TypeError("Cannot " + e);
};
var h = (r, t, e) => (wt(r, t, "read from private field"), e ? e.call(r) : t.get(r));
var W = (r, t, e) => {
  if (t.has(r))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(r) : t.set(r, e);
};
var g = (r, t, e, s) => (wt(r, t, "write to private field"), s ? s.call(r, e) : t.set(r, e), e);
var z = (r, t, e) => (wt(r, t, "access private method"), e);
var le = At((Mn, oe) => {
  "use strict";
  oe.exports = ie;
  function ie(r, t, e) {
    r instanceof RegExp && (r = ne(r, e)), t instanceof RegExp && (t = ne(t, e));
    var s = re(r, t, e);
    return s && { start: s[0], end: s[1], pre: e.slice(0, s[0]), body: e.slice(s[0] + r.length, s[1]), post: e.slice(s[1] + t.length) };
  }
  function ne(r, t) {
    var e = t.match(r);
    return e ? e[0] : null;
  }
  ie.range = re;
  function re(r, t, e) {
    var s, n, i, o, l, a = e.indexOf(r), c = e.indexOf(t, a + 1), u = a;
    if (a >= 0 && c > 0) {
      if (r === t)
        return [a, c];
      for (s = [], i = e.length; u >= 0 && !l;)
        u == a ? (s.push(u), a = e.indexOf(r, u + 1)) : s.length == 1 ? l = [s.pop(), c] : (n = s.pop(), n < i && (i = n, o = c), c = e.indexOf(t, u + 1)), u = a < c && a >= 0 ? a : c;
      s.length && (l = [i, o]);
    }
    return l;
  }
});
var fe = At((Jn, pe) => {
  var ae = le();
  pe.exports = je;
  var ce = "\0SLASH" + Math.random() + "\0", ue = "\0OPEN" + Math.random() + "\0", Yt = "\0CLOSE" + Math.random() + "\0", de = "\0COMMA" + Math.random() + "\0", he = "\0PERIOD" + Math.random() + "\0";
  function Tt(r) {
    return parseInt(r, 10) == r ? parseInt(r, 10) : r.charCodeAt(0);
  }
  function Qe(r) {
    return r.split("\\\\").join(ce).split("\\{").join(ue).split("\\}").join(Yt).split("\\,").join(de).split("\\.").join(he);
  }
  function De(r) {
    return r.split(ce).join("\\").split(ue).join("{").split(Yt).join("}").split(de).join(",").split(he).join(".");
  }
  function me(r) {
    if (!r)
      return [""];
    var t = [], e = ae("{", "}", r);
    if (!e)
      return r.split(",");
    var s = e.pre, n = e.body, i = e.post, o = s.split(",");
    o[o.length - 1] += "{" + n + "}";
    var l = me(i);
    return i.length && (o[o.length - 1] += l.shift(), o.push.apply(o, l)), t.push.apply(t, o), t;
  }
  function je(r) {
    return r ? (r.substr(0, 2) === "{}" && (r = "\\{\\}" + r.substr(2)), dt(Qe(r), true).map(De)) : [];
  }
  function $e(r) {
    return "{" + r + "}";
  }
  function qe(r) {
    return /^-?0\d/.test(r);
  }
  function ts(r, t) {
    return r <= t;
  }
  function es(r, t) {
    return r >= t;
  }
  function dt(r, t) {
    var e = [], s = ae("{", "}", r);
    if (!s)
      return [r];
    var n = s.pre, i = s.post.length ? dt(s.post, false) : [""];
    if (/\$$/.test(s.pre))
      for (var o = 0; o < i.length; o++) {
        var l = n + "{" + s.body + "}" + i[o];
        e.push(l);
      }
    else {
      var a = /^-?\d+\.\.-?\d+(?:\.\.-?\d+)?$/.test(s.body), c = /^[a-zA-Z]\.\.[a-zA-Z](?:\.\.-?\d+)?$/.test(s.body), u = a || c, m = s.body.indexOf(",") >= 0;
      if (!u && !m)
        return s.post.match(/,.*\}/) ? (r = s.pre + "{" + s.body + Yt + s.post, dt(r)) : [r];
      var d;
      if (u)
        d = s.body.split(/\.\./);
      else if (d = me(s.body), d.length === 1 && (d = dt(d[0], false).map($e), d.length === 1))
        return i.map(function (Ee) {
          return s.pre + d[0] + Ee;
        });
      var f;
      if (u) {
        var b = Tt(d[0]), p = Tt(d[1]), R = Math.max(d[0].length, d[1].length), G = d.length == 3 ? Math.abs(Tt(d[2])) : 1, w = ts, C = p < b;
        C && (G *= -1, w = es);
        var K = d.some(qe);
        f = [];
        for (var k = b; w(k, p); k += G) {
          var N;
          if (c)
            N = String.fromCharCode(k), N === "\\" && (N = "");
          else if (N = String(k), K) {
            var Mt = R - N.length;
            if (Mt > 0) {
              var Jt = new Array(Mt + 1).join("0");
              k < 0 ? N = "-" + Jt + N.slice(1) : N = Jt + N;
            }
          }
          f.push(N);
        }
      } else {
        f = [];
        for (var Q = 0; Q < d.length; Q++)
          f.push.apply(f, dt(d[Q], false));
      }
      for (var Q = 0; Q < f.length; Q++)
        for (var o = 0; o < i.length; o++) {
          var l = n + f[Q] + i[o];
          (!t || u || l) && e.push(l);
        }
    }
    return e;
  }
});
var O = { allowSharedBufferCodec: false, manifestSupportsPaths: false, crossOriginChecksEnforced: true, fsAccess: false, hasWorkerCapability: typeof window < "u" ? window.crossOriginIsolated && typeof SharedArrayBuffer < "u" : true, supportsWasiPreview1: true };
async function Pt(r) {
  throw new Error("readFile not supported in this environment");
}
async function St(r, t) {
  if (r instanceof ArrayBuffer)
    return { wasm: [{ data: new Uint8Array(r) }] };
  if (typeof r == "string") {
    if (r.search(/^\s*\{/g) === 0)
      return JSON.parse(r);
    if (r.search(/^(https?|file):\/\//) !== 0)
      return { wasm: [{ path: r }] };
    r = new URL(r);
  }
  if (r instanceof URL) {
    let s = await t(r, { redirect: "follow" }), n = s.headers.get("content-type") || "application/octet-stream";
    switch (n.split(";")[0]) {
      case "application/octet-stream":
      case "application/wasm":
        return St(await s.arrayBuffer(), t);
      case "application/json":
      case "text/json":
        return St(JSON.parse(await s.text()), t);
      default:
        throw new TypeError(`While processing manifest URL "${r}"; expected content-type of "text/json", "application/json", "application/octet-stream", or "application/wasm"; got "${n}" after stripping off charset.`);
    }
  }
  if (!("wasm" in r))
    throw new TypeError('Expected "wasm" key in manifest');
  if (!Array.isArray(r.wasm))
    throw new TypeError('Expected "manifest.wasm" to be array');
  let e = r.wasm.findIndex((s) => !("data" in s) && !("url" in s) && !("path" in s));
  if (e > -1)
    throw new TypeError(`Expected every item in "manifest.wasm" to include either a "data", "url", or "path" key; got bad item at index ${e}`);
  return { ...r };
}
async function vt(r, t = fetch) {
  let e = await St(r, t);
  return e.config ??= {}, e;
}
async function Ut(r, t) {
  let e = [], s = await Promise.all(r.wasm.map(async (n, i) => {
    let o;
    if (n.data) {
      let l = n.data;
      l.buffer ? o = l.buffer : o = l;
    } else if (n.path) {
      let l = n.path;
      o = (await Pt(l)).buffer;
    } else
      o = await (await t(n.url, { headers: { accept: "application/wasm;q=0.9,application/octet-stream;q=0.8", "user-agent": "extism" } })).arrayBuffer();
    if (n.hash) {
      let l = new Uint8Array(await crypto.subtle.digest("SHA-256", o)), a = new Uint8Array(32), c = true;
      for (let m = 0; m < 32; ++m)
        a[m] = parseInt(n.hash.slice(m << 1, (m << 1) + 2), 16), c = c && a[m] === l[m];
      let u = () => [...l].map((m) => m.toString(16).padStart(2, "0")).join("");
      if (!c)
        throw new Error(`Plugin error: hash mismatch. Expected: ${n.hash}. Actual: ${u()}`);
      n.name ??= u();
    }
    return e[i] = n.name ?? String(i), o;
  }));
  return [e, s];
}
var bt;
var rt;
var Nt = class extends DataView {
  constructor(e) {
    super(e);
    W(this, rt, null);
  }
  json() {
    return JSON.parse(this.string());
  }
  arrayBuffer() {
    return this.buffer;
  }
  string() {
    return h(Nt, bt).decode(this.buffer);
  }
  bytes() {
    return h(this, rt) ?? g(this, rt, new Uint8Array(this.buffer)), h(this, rt);
  }
  setInt8(e, s) {
    throw new Error("Cannot set values on output");
  }
  setInt16(e, s, n) {
    throw new Error("Cannot set values on output");
  }
  setInt32(e, s, n) {
    throw new Error("Cannot set values on output");
  }
  setUint8(e, s) {
    throw new Error("Cannot set values on output");
  }
  setUint16(e, s, n) {
    throw new Error("Cannot set values on output");
  }
  setUint32(e, s, n) {
    throw new Error("Cannot set values on output");
  }
  setFloat32(e, s, n) {
    throw new Error("Cannot set values on output");
  }
  setFloat64(e, s, n) {
    throw new Error("Cannot set values on output");
  }
  setBigInt64(e, s, n) {
    throw new Error("Cannot set values on output");
  }
  setBigUint64(e, s, n) {
    throw new Error("Cannot set values on output");
  }
};
var H = Nt;
bt = /* @__PURE__ */ new WeakMap(), rt = /* @__PURE__ */ new WeakMap(), W(H, bt, new TextDecoder());
var _t = Symbol("begin");
var Zt = Symbol("end");
var Et = Symbol("env");
var ot = Symbol("get-block");
var yt = Symbol("import-state");
var Gt = Symbol("export-state");
var D = Symbol("store-value");
var lt = Symbol("reset");
var Z = class {
  buffer;
  view;
  local;
  get byteLength() {
    return this.buffer.byteLength;
  }
  constructor(t, e) {
    this.buffer = t, this.view = new DataView(this.buffer), this.local = e;
  }
  static indexToAddress(t) {
    return BigInt(t) << 48n;
  }
  static addressToIndex(t) {
    return Number(BigInt(t) >> 48n);
  }
  static maskAddress(t) {
    return Number(BigInt(t) & (1n << 48n) - 1n);
  }
};
var tt = class {
  #e;
  #t = [];
  #s;
  #n;
  #l;
  #i;
  #o;
  #r = /* @__PURE__ */ new Map();
  constructor(t, e, s) {
    this.#i = t, this.#s = e, this.#n = new TextDecoder(), this.#l = new TextEncoder(), this.#e = [], this.alloc(1), this.#o = s;
  }
  alloc(t) {
    let e = new Z(new this.#i(Number(t)), true), s = this.#t.length;
    return this.#t.push(e), Z.indexToAddress(s);
  }
  getVariable(t) {
    return this.#r.has(t) ? this.read(this.#r.get(t)) : null;
  }
  setVariable(t, e) {
    let s = this[D](e);
    if (s === null)
      return 0n;
    let n = this.#r.get(t) ?? null;
    return n !== null && (this.#t[n] = this.#t[s], this.#t[s] = null, s === this.#t.length - 1 && this.#t.pop()), this.#r.set(t, n ?? s), Z.indexToAddress(n ?? s);
  }
  read(t) {
    let e = Z.addressToIndex(t), s = this.#t[e];
    if (!s)
      return null;
    let n = !(s.buffer instanceof ArrayBuffer) && !O.allowSharedBufferCodec ? new Uint8Array(s.buffer).slice().buffer : s.buffer;
    return new H(n);
  }
  store(t) {
    let e = this[D](t);
    if (!e)
      throw new Error("failed to store output");
    return Z.indexToAddress(e);
  }
  [Et] = {
    alloc: (t) => this.alloc(t), free: (t) => {
      this.#t[Z.addressToIndex(t)] = null;
    }, load_u8: (t) => {
      let e = Z.addressToIndex(t), s = Z.maskAddress(t);
      return this.#t[e]?.view.getUint8(Number(s));
    }, load_u64: (t) => {
      let e = Z.addressToIndex(t), s = Z.maskAddress(t);
      return this.#t[e]?.view.getBigUint64(Number(s), true);
    }, store_u8: (t, e) => {
      let s = Z.addressToIndex(t), n = Z.maskAddress(t);
      this.#t[s]?.view.setUint8(Number(n), Number(e));
    }, store_u64: (t, e) => {
      let s = Z.addressToIndex(t), n = Z.maskAddress(t);
      this.#t[s]?.view.setBigUint64(Number(n), e, true);
    }, input_length: () => BigInt(this.#a?.byteLength ?? 0), input_load_u8: (t) => {
      let e = Z.maskAddress(t);
      return this.#a?.view.getUint8(Number(e));
    }, input_load_u64: (t) => {
      let e = Z.maskAddress(t);
      return this.#a?.view.getBigUint64(Number(e), true);
    }, output_set: (t, e) => {
      let s = Z.addressToIndex(t), n = this.#t[s];
      if (!n)
        throw new Error(`cannot assign to this block (addr=${t.toString(16).padStart(16, "0")}; length=${e})`);
      if (e > n.buffer.byteLength)
        throw new Error("length longer than target block");
      this.#e[this.#e.length - 1][1] = s;
    }, error_set: (t) => {
      let e = Z.addressToIndex(t);
      if (!this.#t[e])
        throw new Error("cannot assign to this block");
      this.#e[this.#e.length - 1][2] = e;
    }, config_get: (t) => {
      let e = this.read(t);
      if (e === null)
        return 0n;
      let s = e.string();
      return s in this.#o ? this.store(this.#o[s]) : 0n;
    }, var_get: (t) => {
      let e = this.read(t);
      if (e === null)
        return 0n;
      let s = e.string();
      return this.#r.has(s) ? Z.indexToAddress(this.#r.get(s)) : 0n;
    }, var_set: (t, e) => {
      let s = this.read(t);
      if (s === null)
        return 0n;
      let n = s.string();
      if (e === 0n)
        return this.#r.delete(n), 0n;
      this.#r.set(n, Z.addressToIndex(e));
    }, http_request: (t, e) => (this.#s.error("http_request is not enabled"), 0n), http_status_code: () => (this.#s.error("http_status_code is not enabled"), 0), length: (t) => {
      let e = Z.addressToIndex(t), s = this.#t[e];
      return s ? BigInt(s.buffer.byteLength) : 0n;
    }, log_warn: (t) => {
      let e = Z.addressToIndex(t), s = this.#t[e];
      if (!s)
        return this.#s.error(`failed to log(warn): bad block reference in addr 0x${t.toString(16).padStart(64, "0")}`);
      let n = this.#n.decode(s.buffer);
      this.#s.warn(n);
    }, log_info: (t) => {
      let e = Z.addressToIndex(t), s = this.#t[e];
      if (!s)
        return this.#s.error(`failed to log(info): bad block reference in addr 0x${t.toString(16).padStart(64, "0")}`);
      let n = this.#n.decode(s.buffer);
      this.#s.info(n);
    }, log_debug: (t) => {
      let e = Z.addressToIndex(t), s = this.#t[e];
      if (!s)
        return this.#s.error(`failed to log(debug): bad block reference in addr 0x${t.toString(16).padStart(64, "0")}`);
      let n = this.#n.decode(s.buffer);
      this.#s.debug(n);
    }, log_error: (t) => {
      let e = Z.addressToIndex(t), s = this.#t[e];
      if (!s)
        return this.#s.error(`failed to log(error): bad block reference in addr 0x${t.toString(16).padStart(64, "0")}`);
      let n = this.#n.decode(s.buffer);
      this.#s.error(n);
    }
  };
  get #a() {
    let t = this.#e[this.#e.length - 1][0];
    return t === null ? null : this.#t[t];
  }
  [lt]() {
    this.#t.length = 1, this.#e.length = 0;
  }
  [ot](t) {
    let e = this.#t[t];
    if (!e)
      throw new Error(`invalid block index: ${t}`);
    return e;
  }
  [yt](t, e = false) {
    for (let [s, n] of t.blocks) {
      if (s && e) {
        let i = new Uint8Array(new this.#i(Number(s.byteLength)));
        i.set(new Uint8Array(s)), s = i.buffer;
      }
      this.#t[n] = s ? new Z(s, false) : null;
    }
    this.#e = t.stack;
  }
  [Gt]() {
    return { stack: this.#e.slice(), blocks: this.#t.map((t, e) => t ? t.local ? (t.local = false, [t.buffer, e]) : null : [null, e]).filter(Boolean) };
  }
  [D](t) {
    if (!t)
      return null;
    if (typeof t == "string" && (t = this.#l.encode(t)), t instanceof Uint8Array) {
      if (t.buffer.constructor === this.#i) {
        let i = this.#t.length;
        return this.#t.push(new Z(t.buffer, true)), i;
      }
      let e = Z.addressToIndex(this.alloc(t.length)), s = this.#t[e];
      return new Uint8Array(s.buffer).set(t, 0), e;
    }
    return t;
  }
  [_t](t) {
    this.#e.push([t, null, null]);
  }
  [Zt]() {
    let [, t, e] = this.#e.pop(), s = e === null ? 1 : 0, n = e ?? t, i = [null, null];
    return n === null || this.#t[n] === null || (i[s] = n), i;
  }
};
var B = class {
  static read_bytes(t, e) {
    let s = new B();
    return s.buf = t.getUint32(e, true), s.buf_len = t.getUint32(e + 4, true), s;
  }
  static read_bytes_array(t, e, s) {
    let n = [];
    for (let i = 0; i < s; i++)
      n.push(B.read_bytes(t, e + 8 * i));
    return n;
  }
};
var M = class {
  static read_bytes(t, e) {
    let s = new M();
    return s.buf = t.getUint32(e, true), s.buf_len = t.getUint32(e + 4, true), s;
  }
  static read_bytes_array(t, e, s) {
    let n = [];
    for (let i = 0; i < s; i++)
      n.push(M.read_bytes(t, e + 8 * i));
    return n;
  }
};
var Qt = 0;
var Dt = 1;
var jt = 2;
var gt = 4;
var js = 1 << 0;
var $s = 1 << 1;
var qs = 1 << 2;
var tn = 1 << 3;
var en = 1 << 4;
var Xt = class {
  write_bytes(t, e) {
    t.setUint8(e, this.fs_filetype), t.setUint16(e + 2, this.fs_flags, true), t.setBigUint64(e + 8, this.fs_rights_base, true), t.setBigUint64(e + 16, this.fs_rights_inherited, true);
  }
  constructor(t, e) {
    this.fs_rights_base = 0n, this.fs_rights_inherited = 0n, this.fs_filetype = t, this.fs_flags = e;
  }
};
var sn = 1 << 0;
var nn = 1 << 1;
var rn = 1 << 2;
var on = 1 << 3;
var Oe = 1 << 0;
var Be = 1 << 1;
var Me = 1 << 2;
var Je = 1 << 3;
var Rt = class {
  write_bytes(t, e) {
    t.setBigUint64(e, this.dev, true), t.setBigUint64(e + 8, this.ino, true), t.setUint8(e + 16, this.filetype), t.setBigUint64(e + 24, this.nlink, true), t.setBigUint64(e + 32, this.size, true), t.setBigUint64(e + 38, this.atim, true), t.setBigUint64(e + 46, this.mtim, true), t.setBigUint64(e + 52, this.ctim, true);
  }
  constructor(t, e) {
    this.dev = 0n, this.ino = 0n, this.nlink = 0n, this.atim = 0n, this.mtim = 0n, this.ctim = 0n, this.filetype = t, this.size = e;
  }
};
var ln = 1 << 0;
var an = 1 << 0;
var cn = 1 << 0;
var un = 1 << 1;
var dn = 1 << 0;
var hn = 1 << 0;
var mn = 1 << 1;
var Ct = class {
  start(t) {
    this.inst = t, t.exports._start();
  }
  initialize(t) {
    this.inst = t, t.exports._initialize();
  }
  constructor(t, e, s) {
    this.args = [], this.env = [], this.fds = [], this.args = t, this.env = e, this.fds = s;
    let n = this;
    this.wasiImport = {
      args_sizes_get(i, o) {
        let l = new DataView(n.inst.exports.memory.buffer);
        l.setUint32(i, n.args.length, true);
        let a = 0;
        for (let c of n.args)
          a += c.length + 1;
        return l.setUint32(o, a, true), 0;
      }, args_get(i, o) {
        let l = new DataView(n.inst.exports.memory.buffer), a = new Uint8Array(n.inst.exports.memory.buffer), c = o;
        for (let u = 0; u < n.args.length; u++) {
          l.setUint32(i, o, true), i += 4;
          let m = new TextEncoder("utf-8").encode(n.args[u]);
          a.set(m, o), l.setUint8(o + m.length, 0), o += m.length + 1;
        }
        return 0;
      }, environ_sizes_get(i, o) {
        let l = new DataView(n.inst.exports.memory.buffer);
        l.setUint32(i, n.env.length, true);
        let a = 0;
        for (let c of n.env)
          a += c.length + 1;
        return l.setUint32(o, a, true), 0;
      }, environ_get(i, o) {
        let l = new DataView(n.inst.exports.memory.buffer), a = new Uint8Array(n.inst.exports.memory.buffer), c = o;
        for (let u = 0; u < e.length; u++) {
          l.setUint32(i, o, true), i += 4;
          let m = new TextEncoder("utf-8").encode(e[u]);
          a.set(m, o), l.setUint8(o + m.length, 0), o += m.length + 1;
        }
        return 0;
      }, clock_res_get(i, o) {
        throw "unimplemented";
      }, clock_time_get(i, o, l) {
        let a = new DataView(n.inst.exports.memory.buffer);
        if (i === 0)
          a.setBigUint64(l, BigInt((/* @__PURE__ */ new Date()).getTime()) * 1000000n, true);
        else if (i == 1) {
          let c;
          try {
            c = BigInt(Math.round(performance.now() * 1e6));
          } catch {
            c = 0n;
          }
          a.setBigUint64(l, c, true);
        } else
          a.setBigUint64(l, 0n, true);
        return 0;
      }, fd_advise(i, o, l, a) {
        return n.fds[i] != null ? n.fds[i].fd_advise(o, l, a) : 8;
      }, fd_allocate(i, o, l) {
        return n.fds[i] != null ? n.fds[i].fd_allocate(o, l) : 8;
      }, fd_close(i) {
        if (n.fds[i] != null) {
          let o = n.fds[i].fd_close();
          return n.fds[i] = void 0, o;
        } else
          return 8;
      }, fd_datasync(i) {
        return n.fds[i] != null ? n.fds[i].fd_datasync() : 8;
      }, fd_fdstat_get(i, o) {
        if (n.fds[i] != null) {
          let { ret: l, fdstat: a } = n.fds[i].fd_fdstat_get();
          return a?.write_bytes(new DataView(n.inst.exports.memory.buffer), o), l;
        } else
          return 8;
      }, fd_fdstat_set_flags(i, o) {
        return n.fds[i] != null ? n.fds[i].fd_fdstat_set_flags(o) : 8;
      }, fd_fdstat_set_rights(i, o, l) {
        return n.fds[i] != null ? n.fds[i].fd_fdstat_set_rights(o, l) : 8;
      }, fd_filestat_get(i, o) {
        if (n.fds[i] != null) {
          let { ret: l, filestat: a } = n.fds[i].fd_filestat_get();
          return a?.write_bytes(new DataView(n.inst.exports.memory.buffer), o), l;
        } else
          return 8;
      }, fd_filestat_set_size(i, o) {
        return n.fds[i] != null ? n.fds[i].fd_filestat_set_size(o) : 8;
      }, fd_filestat_set_times(i, o, l, a) {
        return n.fds[i] != null ? n.fds[i].fd_filestat_set_times(o, l, a) : 8;
      }, fd_pread(i, o, l, a, c) {
        let u = new DataView(n.inst.exports.memory.buffer), m = new Uint8Array(n.inst.exports.memory.buffer);
        if (n.fds[i] != null) {
          let d = B.read_bytes_array(u, o, l), { ret: f, nread: b } = n.fds[i].fd_pread(m, d, a);
          return u.setUint32(c, b, true), f;
        } else
          return 8;
      }, fd_prestat_get(i, o) {
        let l = new DataView(n.inst.exports.memory.buffer);
        if (n.fds[i] != null) {
          let { ret: a, prestat: c } = n.fds[i].fd_prestat_get();
          return c?.write_bytes(l, o), a;
        } else
          return 8;
      }, fd_prestat_dir_name(i, o, l) {
        if (n.fds[i] != null) {
          let { ret: a, prestat_dir_name: c } = n.fds[i].fd_prestat_dir_name();
          return c != null && new Uint8Array(n.inst.exports.memory.buffer).set(c, o), a;
        } else
          return 8;
      }, fd_pwrite(i, o, l, a, c) {
        let u = new DataView(n.inst.exports.memory.buffer), m = new Uint8Array(n.inst.exports.memory.buffer);
        if (n.fds[i] != null) {
          let d = M.read_bytes_array(u, o, l), { ret: f, nwritten: b } = n.fds[i].fd_pwrite(m, d, a);
          return u.setUint32(c, b, true), f;
        } else
          return 8;
      }, fd_read(i, o, l, a) {
        let c = new DataView(n.inst.exports.memory.buffer), u = new Uint8Array(n.inst.exports.memory.buffer);
        if (n.fds[i] != null) {
          let m = B.read_bytes_array(c, o, l), { ret: d, nread: f } = n.fds[i].fd_read(u, m);
          return c.setUint32(a, f, true), d;
        } else
          return 8;
      }, fd_readdir(i, o, l, a, c) {
        let u = new DataView(n.inst.exports.memory.buffer), m = new Uint8Array(n.inst.exports.memory.buffer);
        if (n.fds[i] != null) {
          let d = 0;
          for (; ;) {
            let { ret: f, dirent: b } = n.fds[i].fd_readdir_single(a);
            if (f != 0)
              return u.setUint32(c, d, true), f;
            if (b == null)
              break;
            if (l - d < b.head_length()) {
              d = l;
              break;
            }
            let p = new ArrayBuffer(b.head_length());
            if (b.write_head_bytes(new DataView(p), 0), m.set(new Uint8Array(p).slice(0, Math.min(p.byteLength, l - d)), o), o += b.head_length(), d += b.head_length(), l - d < b.name_length()) {
              d = l;
              break;
            }
            b.write_name_bytes(m, o, l - d), o += b.name_length(), d += b.name_length(), a = b.d_next;
          }
          return u.setUint32(c, d, true), 0;
        } else
          return 8;
      }, fd_renumber(i, o) {
        if (n.fds[i] != null && n.fds[o] != null) {
          let l = n.fds[o].fd_close();
          return l != 0 ? l : (n.fds[o] = n.fds[i], n.fds[i] = void 0, 0);
        } else
          return 8;
      }, fd_seek(i, o, l, a) {
        let c = new DataView(n.inst.exports.memory.buffer);
        if (n.fds[i] != null) {
          let { ret: u, offset: m } = n.fds[i].fd_seek(o, l);
          return c.setBigInt64(a, m, true), u;
        } else
          return 8;
      }, fd_sync(i) {
        return n.fds[i] != null ? n.fds[i].fd_sync() : 8;
      }, fd_tell(i, o) {
        let l = new DataView(n.inst.exports.memory.buffer);
        if (n.fds[i] != null) {
          let { ret: a, offset: c } = n.fds[i].fd_tell();
          return l.setBigUint64(o, c, true), a;
        } else
          return 8;
      }, fd_write(i, o, l, a) {
        let c = new DataView(n.inst.exports.memory.buffer), u = new Uint8Array(n.inst.exports.memory.buffer);
        if (n.fds[i] != null) {
          let m = M.read_bytes_array(c, o, l), { ret: d, nwritten: f } = n.fds[i].fd_write(u, m);
          return c.setUint32(a, f, true), d;
        } else
          return 8;
      }, path_create_directory(i, o, l) {
        let a = new Uint8Array(n.inst.exports.memory.buffer);
        if (n.fds[i] != null) {
          let c = new TextDecoder("utf-8").decode(a.slice(o, o + l));
          return n.fds[i].path_create_directory(c);
        }
      }, path_filestat_get(i, o, l, a, c) {
        let u = new DataView(n.inst.exports.memory.buffer), m = new Uint8Array(n.inst.exports.memory.buffer);
        if (n.fds[i] != null) {
          let d = new TextDecoder("utf-8").decode(m.slice(l, l + a)), { ret: f, filestat: b } = n.fds[i].path_filestat_get(o, d);
          return b?.write_bytes(u, c), f;
        } else
          return 8;
      }, path_filestat_set_times(i, o, l, a, c, u, m) {
        let d = new Uint8Array(n.inst.exports.memory.buffer);
        if (n.fds[i] != null) {
          let f = new TextDecoder("utf-8").decode(d.slice(l, l + a));
          return n.fds[i].path_filestat_set_times(o, f, c, u, m);
        } else
          return 8;
      }, path_link(i, o, l, a, c, u, m) {
        let d = new Uint8Array(n.inst.exports.memory.buffer);
        if (n.fds[i] != null && n.fds[c] != null) {
          let f = new TextDecoder("utf-8").decode(d.slice(l, l + a)), b = new TextDecoder("utf-8").decode(d.slice(u, u + m));
          return n.fds[c].path_link(i, o, f, b);
        } else
          return 8;
      }, path_open(i, o, l, a, c, u, m, d, f) {
        let b = new DataView(n.inst.exports.memory.buffer), p = new Uint8Array(n.inst.exports.memory.buffer);
        if (n.fds[i] != null) {
          let R = new TextDecoder("utf-8").decode(p.slice(l, l + a)), { ret: G, fd_obj: w } = n.fds[i].path_open(o, R, c, u, m, d);
          if (G != 0)
            return G;
          n.fds.push(w);
          let C = n.fds.length - 1;
          return b.setUint32(f, C, true), 0;
        } else
          return 8;
      }, path_readlink(i, o, l, a, c, u) {
        let m = new DataView(n.inst.exports.memory.buffer), d = new Uint8Array(n.inst.exports.memory.buffer);
        if (n.fds[i] != null) {
          let f = new TextDecoder("utf-8").decode(d.slice(o, o + l)), { ret: b, data: p } = n.fds[i].path_readlink(f);
          if (p != null) {
            if (p.length > c)
              return m.setUint32(u, 0, true), 8;
            d.set(p, a), m.setUint32(u, p.length, true);
          }
          return b;
        } else
          return 8;
      }, path_remove_directory(i, o, l) {
        let a = new Uint8Array(n.inst.exports.memory.buffer);
        if (n.fds[i] != null) {
          let c = new TextDecoder("utf-8").decode(a.slice(o, o + l));
          return n.fds[i].path_remove_directory(c);
        } else
          return 8;
      }, path_rename(i, o, l, a, c, u) {
        throw "FIXME what is the best abstraction for this?";
      }, path_symlink(i, o, l, a, c) {
        let u = new Uint8Array(n.inst.exports.memory.buffer);
        if (n.fds[l] != null) {
          let m = new TextDecoder("utf-8").decode(u.slice(i, i + o)), d = new TextDecoder("utf-8").decode(u.slice(a, a + c));
          return n.fds[l].path_symlink(m, d);
        } else
          return 8;
      }, path_unlink_file(i, o, l) {
        let a = new Uint8Array(n.inst.exports.memory.buffer);
        if (n.fds[i] != null) {
          let c = new TextDecoder("utf-8").decode(a.slice(o, o + l));
          return n.fds[i].path_unlink_file(c);
        } else
          return 8;
      }, poll_oneoff(i, o, l) {
        throw "async io not supported";
      }, proc_exit(i) {
        throw "exit with exit code " + i;
      }, proc_raise(i) {
        throw "raised signal " + i;
      }, sched_yield() {
      }, random_get(i, o) {
        let l = new Uint8Array(n.inst.exports.memory.buffer);
        for (let a = 0; a < o; a++)
          l[i + a] = Math.random() * 256 | 0;
      }, sock_recv(i, o, l) {
        throw "sockets not supported";
      }, sock_send(i, o, l) {
        throw "sockets not supported";
      }, sock_shutdown(i, o) {
        throw "sockets not supported";
      }
    };
  }
};
var at = class {
  fd_advise(t, e, s) {
    return -1;
  }
  fd_allocate(t, e) {
    return -1;
  }
  fd_close() {
    return 0;
  }
  fd_datasync() {
    return -1;
  }
  fd_fdstat_get() {
    return { ret: -1, fdstat: null };
  }
  fd_fdstat_set_flags(t) {
    return -1;
  }
  fd_fdstat_set_rights(t, e) {
    return -1;
  }
  fd_filestat_get() {
    return { ret: -1, filestat: null };
  }
  fd_filestat_set_size(t) {
    return -1;
  }
  fd_filestat_set_times(t, e, s) {
    return -1;
  }
  fd_pread(t, e, s) {
    return { ret: -1, nread: 0 };
  }
  fd_prestat_get() {
    return { ret: -1, prestat: null };
  }
  fd_prestat_dir_name(t, e) {
    return { ret: -1, prestat_dir_name: null };
  }
  fd_pwrite(t, e, s) {
    return { ret: -1, nwritten: 0 };
  }
  fd_read(t, e) {
    return { ret: -1, nread: 0 };
  }
  fd_readdir_single(t) {
    return { ret: -1, dirent: null };
  }
  fd_seek(t, e) {
    return { ret: -1, offset: 0n };
  }
  fd_sync() {
    return 0;
  }
  fd_tell() {
    return { ret: -1, offset: 0n };
  }
  fd_write(t, e) {
    return { ret: -1, nwritten: 0 };
  }
  path_create_directory(t) {
    return -1;
  }
  path_filestat_get(t, e) {
    return { ret: -1, filestat: null };
  }
  path_filestat_set_times(t, e, s, n, i) {
    return -1;
  }
  path_link(t, e, s, n) {
    return -1;
  }
  path_open(t, e, s, n, i, o) {
    return { ret: -1, fd_obj: null };
  }
  path_readlink(t) {
    return { ret: -1, data: null };
  }
  path_remove_directory(t) {
    return -1;
  }
  path_rename(t, e, s) {
    return -1;
  }
  path_symlink(t, e) {
    return -1;
  }
  path_unlink_file(t) {
    return -1;
  }
};
var J = class {
  get size() {
    return BigInt(this.data.byteLength);
  }
  stat() {
    return new Rt(gt, this.size);
  }
  truncate() {
    this.data = new Uint8Array([]);
  }
  constructor(t) {
    this.data = new Uint8Array(t);
  }
};
var j = class extends at {
  fd_fdstat_get() {
    return { ret: 0, fdstat: new Xt(gt, 0) };
  }
  fd_read(t, e) {
    let s = 0;
    for (let n of e)
      if (this.file_pos < this.file.data.byteLength) {
        let i = this.file.data.slice(Number(this.file_pos), Number(this.file_pos + BigInt(n.buf_len)));
        t.set(i, n.buf), this.file_pos += BigInt(i.length), s += i.length;
      } else
        break;
    return { ret: 0, nread: s };
  }
  fd_seek(t, e) {
    let s;
    switch (e) {
      case Qt:
        s = t;
        break;
      case Dt:
        s = this.file_pos + t;
        break;
      case jt:
        s = BigInt(this.file.data.byteLength) + t;
        break;
      default:
        return { ret: 28, offset: 0n };
    }
    return s < 0 ? { ret: 28, offset: 0n } : (this.file_pos = s, { ret: 0, offset: this.file_pos });
  }
  fd_write(t, e) {
    let s = 0;
    for (let n of e) {
      let i = t.slice(n.buf, n.buf + n.buf_len);
      if (this.file_pos + BigInt(i.byteLength) > this.file.size) {
        let o = this.file.data;
        this.file.data = new Uint8Array(Number(this.file_pos + BigInt(i.byteLength))), this.file.data.set(o);
      }
      this.file.data.set(i.slice(0, Number(this.file.size - this.file_pos)), Number(this.file_pos)), this.file_pos += BigInt(i.byteLength), s += n.buf_len;
    }
    return { ret: 0, nwritten: s };
  }
  fd_filestat_get() {
    return { ret: 0, filestat: this.file.stat() };
  }
  constructor(t) {
    super(), this.file_pos = 0n, this.file = t;
  }
};
async function qt(r) {
  let t = [], e = [], s = [new j(new J([])), new j(new J([])), new j(new J([]))], n = new Ct(t, e, s);
  return {
    async importObject() {
      return n.wasiImport;
    }, async initialize(i) {
      let o = i.exports.memory;
      if (!o)
        throw new Error("The module has to export a default memory.");
      if (i.exports._initialize) {
        let l = i.exports._initialize;
        n.initialize ? n.initialize({
          exports: {
            memory: o, _initialize: () => {
              l();
            }
          }
        }) : l();
      } else
        i.exports._start && n.start({
          exports: {
            memory: o, _start: () => {
            }
          }
        });
    }
  };
}
var ct = "extism:host/env";
var Ht = class {
  #e;
  #t;
  #s;
  #n = false;
  constructor(t, e, s) {
    this.#e = t, this.#s = e, this.#t = s;
  }
  async reset() {
    return this.isActive() ? false : (this.#e[lt](), true);
  }
  isActive() {
    return this.#n;
  }
  async functionExists(t) {
    try {
      let e = [].concat(t), [s, n] = e.length === 2 ? [this.lookupTarget(e[0]), e[1]] : [this.#t.find((o) => WebAssembly.Module.exports(o.module.module).find((a) => a.name === e[0] && a.kind === "function")), e[0]];
      return !(!s || !s.module.instance.exports[n]);
    } catch {
      return false;
    }
  }
  async callBlock(t, e) {
    this.#n = true;
    let s = [].concat(t), [n, i] = s.length === 2 ? [this.lookupTarget(s[0]), s[1]] : [this.#t.find((l) => WebAssembly.Module.exports(l.module.module).find((c) => c.name === s[0] && c.kind === "function")), s[0]];
    if (!n)
      throw Error(`Plugin error: target "${s.join('" "')}" does not exist`);
    let o = n.module.instance.exports[i];
    if (!o)
      throw Error(`Plugin error: function "${s.join('" "')}" does not exist`);
    this.#e[_t](e ?? null);
    try {
      return o(), this.#e[Zt]();
    } catch (l) {
      throw this.#e[Zt](), l;
    } finally {
      this.#n = false;
    }
  }
  async call(t, e) {
    let s = this.#e[D](e), [n, i] = await this.callBlock(t, s), o = n !== null, l = n ?? i;
    if (l === null)
      return null;
    let a = this.#e[ot](l);
    if (!a)
      return null;
    let c = new H(a.buffer);
    if (o)
      throw new Error(`Plugin-originated error: ${c.string()}`);
    return c;
  }
  lookupTarget(t) {
    let e = String(t ?? "0"), s = this.#s.findIndex((n) => n === e);
    if (s === -1)
      throw new Error(`no module named "${t}"`);
    return this.#t[s];
  }
  async getExports(t) {
    return WebAssembly.Module.exports(this.lookupTarget(t).module.module) || [];
  }
  async getImports(t) {
    return WebAssembly.Module.imports(this.lookupTarget(t).module.module) || [];
  }
  async getInstance(t) {
    return this.lookupTarget(t).module.instance;
  }
  async close() {
  }
};
async function te(r, t, e, s = new tt(ArrayBuffer, r.logger, r.config)) {
  let n = r.wasiEnabled ? await qt(r.allowedPaths) : null, i = { ...n ? { wasi_snapshot_preview1: await n.importObject() } : {}, [ct]: s[Et], env: {} };
  for (let l in r.functions) {
    i[l] = i[l] || {};
    for (let a in r.functions[l])
      i[l][a] = r.functions[l][a].bind(null, s);
  }
  let o = await Promise.all(e.map(async (l) => {
    let a = await WebAssembly.instantiate(l, i);
    n && await n?.initialize(a.instance);
    let c = a.instance.exports.hs_init ? "haskell" : a.instance.exports._initialize ? "reactor" : a.instance.exports._start ? "command" : "none";
    return (a.instance.exports.hs_init ? a.instance.exports.hs_init : () => {
    })(), { module: a, guestType: c };
  }));
  return new Ht(s, t, o);
}
var ee = new URL("data:text/javascript;base64,dmFyIGZ0PU9iamVjdC5kZWZpbmVQcm9wZXJ0eTt2YXIgdXQ9KHUsdCxyKT0+dCBpbiB1P2Z0KHUsdCx7ZW51bWVyYWJsZTohMCxjb25maWd1cmFibGU6ITAsd3JpdGFibGU6ITAsdmFsdWU6cn0pOnVbdF09cjt2YXIgRz0odSx0LHIpPT4odXQodSx0eXBlb2YgdCE9InN5bWJvbCI/dCsiIjp0LHIpLHIpLFE9KHUsdCxyKT0+e2lmKCF0Lmhhcyh1KSl0aHJvdyBUeXBlRXJyb3IoIkNhbm5vdCAiK3IpfTt2YXIgUz0odSx0LHIpPT4oUSh1LHQsInJlYWQgZnJvbSBwcml2YXRlIGZpZWxkIikscj9yLmNhbGwodSk6dC5nZXQodSkpLE09KHUsdCxyKT0+e2lmKHQuaGFzKHUpKXRocm93IFR5cGVFcnJvcigiQ2Fubm90IGFkZCB0aGUgc2FtZSBwcml2YXRlIG1lbWJlciBtb3JlIHRoYW4gb25jZSIpO3QgaW5zdGFuY2VvZiBXZWFrU2V0P3QuYWRkKHUpOnQuc2V0KHUscil9LFo9KHUsdCxyLHMpPT4oUSh1LHQsIndyaXRlIHRvIHByaXZhdGUgZmllbGQiKSxzP3MuY2FsbCh1LHIpOnQuc2V0KHUscikscik7dmFyIHE9e29uKHUsdCl7YWRkRXZlbnRMaXN0ZW5lcih1LHI9Pnt0KHIuZGF0YSl9KX0scG9zdE1lc3NhZ2UodSx0PVtdKXtzZWxmLnBvc3RNZXNzYWdlKHUsdCl9fTt2YXIgRCxJLEg9Y2xhc3MgZXh0ZW5kcyBEYXRhVmlld3tjb25zdHJ1Y3RvcihyKXtzdXBlcihyKTtNKHRoaXMsSSxudWxsKX1qc29uKCl7cmV0dXJuIEpTT04ucGFyc2UodGhpcy5zdHJpbmcoKSl9YXJyYXlCdWZmZXIoKXtyZXR1cm4gdGhpcy5idWZmZXJ9c3RyaW5nKCl7cmV0dXJuIFMoSCxEKS5kZWNvZGUodGhpcy5idWZmZXIpfWJ5dGVzKCl7cmV0dXJuIFModGhpcyxJKT8/Wih0aGlzLEksbmV3IFVpbnQ4QXJyYXkodGhpcy5idWZmZXIpKSxTKHRoaXMsSSl9c2V0SW50OChyLHMpe3Rocm93IG5ldyBFcnJvcigiQ2Fubm90IHNldCB2YWx1ZXMgb24gb3V0cHV0Iil9c2V0SW50MTYocixzLGUpe3Rocm93IG5ldyBFcnJvcigiQ2Fubm90IHNldCB2YWx1ZXMgb24gb3V0cHV0Iil9c2V0SW50MzIocixzLGUpe3Rocm93IG5ldyBFcnJvcigiQ2Fubm90IHNldCB2YWx1ZXMgb24gb3V0cHV0Iil9c2V0VWludDgocixzKXt0aHJvdyBuZXcgRXJyb3IoIkNhbm5vdCBzZXQgdmFsdWVzIG9uIG91dHB1dCIpfXNldFVpbnQxNihyLHMsZSl7dGhyb3cgbmV3IEVycm9yKCJDYW5ub3Qgc2V0IHZhbHVlcyBvbiBvdXRwdXQiKX1zZXRVaW50MzIocixzLGUpe3Rocm93IG5ldyBFcnJvcigiQ2Fubm90IHNldCB2YWx1ZXMgb24gb3V0cHV0Iil9c2V0RmxvYXQzMihyLHMsZSl7dGhyb3cgbmV3IEVycm9yKCJDYW5ub3Qgc2V0IHZhbHVlcyBvbiBvdXRwdXQiKX1zZXRGbG9hdDY0KHIscyxlKXt0aHJvdyBuZXcgRXJyb3IoIkNhbm5vdCBzZXQgdmFsdWVzIG9uIG91dHB1dCIpfXNldEJpZ0ludDY0KHIscyxlKXt0aHJvdyBuZXcgRXJyb3IoIkNhbm5vdCBzZXQgdmFsdWVzIG9uIG91dHB1dCIpfXNldEJpZ1VpbnQ2NChyLHMsZSl7dGhyb3cgbmV3IEVycm9yKCJDYW5ub3Qgc2V0IHZhbHVlcyBvbiBvdXRwdXQiKX19LHc9SDtEPW5ldyBXZWFrTWFwLEk9bmV3IFdlYWtNYXAsTSh3LEQsbmV3IFRleHREZWNvZGVyKTt2YXIgSj17YWxsb3dTaGFyZWRCdWZmZXJDb2RlYzohMSxtYW5pZmVzdFN1cHBvcnRzUGF0aHM6ITEsY3Jvc3NPcmlnaW5DaGVja3NFbmZvcmNlZDohMCxmc0FjY2VzczohMSxoYXNXb3JrZXJDYXBhYmlsaXR5OnR5cGVvZiB3aW5kb3c8InUiP3dpbmRvdy5jcm9zc09yaWdpbklzb2xhdGVkJiZ0eXBlb2YgU2hhcmVkQXJyYXlCdWZmZXI8InUiOiEwLHN1cHBvcnRzV2FzaVByZXZpZXcxOiEwfTt2YXIgdj1TeW1ib2woImJlZ2luIiksTD1TeW1ib2woImVuZCIpLFY9U3ltYm9sKCJlbnYiKSxXPVN5bWJvbCgiZ2V0LWJsb2NrIiksQz1TeW1ib2woImltcG9ydC1zdGF0ZSIpLEY9U3ltYm9sKCJleHBvcnQtc3RhdGUiKSxUPVN5bWJvbCgic3RvcmUtdmFsdWUiKSxZPVN5bWJvbCgicmVzZXQiKSxfPWNsYXNze2J1ZmZlcjt2aWV3O2xvY2FsO2dldCBieXRlTGVuZ3RoKCl7cmV0dXJuIHRoaXMuYnVmZmVyLmJ5dGVMZW5ndGh9Y29uc3RydWN0b3IodCxyKXt0aGlzLmJ1ZmZlcj10LHRoaXMudmlldz1uZXcgRGF0YVZpZXcodGhpcy5idWZmZXIpLHRoaXMubG9jYWw9cn1zdGF0aWMgaW5kZXhUb0FkZHJlc3ModCl7cmV0dXJuIEJpZ0ludCh0KTw8NDhufXN0YXRpYyBhZGRyZXNzVG9JbmRleCh0KXtyZXR1cm4gTnVtYmVyKEJpZ0ludCh0KT4+NDhuKX1zdGF0aWMgbWFza0FkZHJlc3ModCl7cmV0dXJuIE51bWJlcihCaWdJbnQodCkmKDFuPDw0OG4pLTFuKX19LEE9Y2xhc3N7I2U7I3Q9W107I3I7I247I2w7I2k7I287I3M9bmV3IE1hcDtjb25zdHJ1Y3Rvcih0LHIscyl7dGhpcy4jaT10LHRoaXMuI3I9cix0aGlzLiNuPW5ldyBUZXh0RGVjb2Rlcix0aGlzLiNsPW5ldyBUZXh0RW5jb2Rlcix0aGlzLiNlPVtdLHRoaXMuYWxsb2MoMSksdGhpcy4jbz1zfWFsbG9jKHQpe2xldCByPW5ldyBfKG5ldyB0aGlzLiNpKE51bWJlcih0KSksITApLHM9dGhpcy4jdC5sZW5ndGg7cmV0dXJuIHRoaXMuI3QucHVzaChyKSxfLmluZGV4VG9BZGRyZXNzKHMpfWdldFZhcmlhYmxlKHQpe3JldHVybiB0aGlzLiNzLmhhcyh0KT90aGlzLnJlYWQodGhpcy4jcy5nZXQodCkpOm51bGx9c2V0VmFyaWFibGUodCxyKXtsZXQgcz10aGlzW1RdKHIpO2lmKHM9PT1udWxsKXJldHVybiAwbjtsZXQgZT10aGlzLiNzLmdldCh0KT8/bnVsbDtyZXR1cm4gZSE9PW51bGwmJih0aGlzLiN0W2VdPXRoaXMuI3Rbc10sdGhpcy4jdFtzXT1udWxsLHM9PT10aGlzLiN0Lmxlbmd0aC0xJiZ0aGlzLiN0LnBvcCgpKSx0aGlzLiNzLnNldCh0LGU/P3MpLF8uaW5kZXhUb0FkZHJlc3MoZT8/cyl9cmVhZCh0KXtsZXQgcj1fLmFkZHJlc3NUb0luZGV4KHQpLHM9dGhpcy4jdFtyXTtpZighcylyZXR1cm4gbnVsbDtsZXQgZT0hKHMuYnVmZmVyIGluc3RhbmNlb2YgQXJyYXlCdWZmZXIpJiYhSi5hbGxvd1NoYXJlZEJ1ZmZlckNvZGVjP25ldyBVaW50OEFycmF5KHMuYnVmZmVyKS5zbGljZSgpLmJ1ZmZlcjpzLmJ1ZmZlcjtyZXR1cm4gbmV3IHcoZSl9c3RvcmUodCl7bGV0IHI9dGhpc1tUXSh0KTtpZighcil0aHJvdyBuZXcgRXJyb3IoImZhaWxlZCB0byBzdG9yZSBvdXRwdXQiKTtyZXR1cm4gXy5pbmRleFRvQWRkcmVzcyhyKX1bVl09e2FsbG9jOnQ9PnRoaXMuYWxsb2ModCksZnJlZTp0PT57dGhpcy4jdFtfLmFkZHJlc3NUb0luZGV4KHQpXT1udWxsfSxsb2FkX3U4OnQ9PntsZXQgcj1fLmFkZHJlc3NUb0luZGV4KHQpLHM9Xy5tYXNrQWRkcmVzcyh0KTtyZXR1cm4gdGhpcy4jdFtyXT8udmlldy5nZXRVaW50OChOdW1iZXIocykpfSxsb2FkX3U2NDp0PT57bGV0IHI9Xy5hZGRyZXNzVG9JbmRleCh0KSxzPV8ubWFza0FkZHJlc3ModCk7cmV0dXJuIHRoaXMuI3Rbcl0/LnZpZXcuZ2V0QmlnVWludDY0KE51bWJlcihzKSwhMCl9LHN0b3JlX3U4Oih0LHIpPT57bGV0IHM9Xy5hZGRyZXNzVG9JbmRleCh0KSxlPV8ubWFza0FkZHJlc3ModCk7dGhpcy4jdFtzXT8udmlldy5zZXRVaW50OChOdW1iZXIoZSksTnVtYmVyKHIpKX0sc3RvcmVfdTY0Oih0LHIpPT57bGV0IHM9Xy5hZGRyZXNzVG9JbmRleCh0KSxlPV8ubWFza0FkZHJlc3ModCk7dGhpcy4jdFtzXT8udmlldy5zZXRCaWdVaW50NjQoTnVtYmVyKGUpLHIsITApfSxpbnB1dF9sZW5ndGg6KCk9PkJpZ0ludCh0aGlzLiNhPy5ieXRlTGVuZ3RoPz8wKSxpbnB1dF9sb2FkX3U4OnQ9PntsZXQgcj1fLm1hc2tBZGRyZXNzKHQpO3JldHVybiB0aGlzLiNhPy52aWV3LmdldFVpbnQ4KE51bWJlcihyKSl9LGlucHV0X2xvYWRfdTY0OnQ9PntsZXQgcj1fLm1hc2tBZGRyZXNzKHQpO3JldHVybiB0aGlzLiNhPy52aWV3LmdldEJpZ1VpbnQ2NChOdW1iZXIociksITApfSxvdXRwdXRfc2V0Oih0LHIpPT57bGV0IHM9Xy5hZGRyZXNzVG9JbmRleCh0KSxlPXRoaXMuI3Rbc107aWYoIWUpdGhyb3cgbmV3IEVycm9yKGBjYW5ub3QgYXNzaWduIHRvIHRoaXMgYmxvY2sgKGFkZHI9JHt0LnRvU3RyaW5nKDE2KS5wYWRTdGFydCgxNiwiMCIpfTsgbGVuZ3RoPSR7cn0pYCk7aWYocj5lLmJ1ZmZlci5ieXRlTGVuZ3RoKXRocm93IG5ldyBFcnJvcigibGVuZ3RoIGxvbmdlciB0aGFuIHRhcmdldCBibG9jayIpO3RoaXMuI2VbdGhpcy4jZS5sZW5ndGgtMV1bMV09c30sZXJyb3Jfc2V0OnQ9PntsZXQgcj1fLmFkZHJlc3NUb0luZGV4KHQpO2lmKCF0aGlzLiN0W3JdKXRocm93IG5ldyBFcnJvcigiY2Fubm90IGFzc2lnbiB0byB0aGlzIGJsb2NrIik7dGhpcy4jZVt0aGlzLiNlLmxlbmd0aC0xXVsyXT1yfSxjb25maWdfZ2V0OnQ9PntsZXQgcj10aGlzLnJlYWQodCk7aWYocj09PW51bGwpcmV0dXJuIDBuO2xldCBzPXIuc3RyaW5nKCk7cmV0dXJuIHMgaW4gdGhpcy4jbz90aGlzLnN0b3JlKHRoaXMuI29bc10pOjBufSx2YXJfZ2V0OnQ9PntsZXQgcj10aGlzLnJlYWQodCk7aWYocj09PW51bGwpcmV0dXJuIDBuO2xldCBzPXIuc3RyaW5nKCk7cmV0dXJuIHRoaXMuI3MuaGFzKHMpP18uaW5kZXhUb0FkZHJlc3ModGhpcy4jcy5nZXQocykpOjBufSx2YXJfc2V0Oih0LHIpPT57bGV0IHM9dGhpcy5yZWFkKHQpO2lmKHM9PT1udWxsKXJldHVybiAwbjtsZXQgZT1zLnN0cmluZygpO2lmKHI9PT0wbilyZXR1cm4gdGhpcy4jcy5kZWxldGUoZSksMG47dGhpcy4jcy5zZXQoZSxfLmFkZHJlc3NUb0luZGV4KHIpKX0saHR0cF9yZXF1ZXN0Oih0LHIpPT4odGhpcy4jci5lcnJvcigiaHR0cF9yZXF1ZXN0IGlzIG5vdCBlbmFibGVkIiksMG4pLGh0dHBfc3RhdHVzX2NvZGU6KCk9Pih0aGlzLiNyLmVycm9yKCJodHRwX3N0YXR1c19jb2RlIGlzIG5vdCBlbmFibGVkIiksMCksbGVuZ3RoOnQ9PntsZXQgcj1fLmFkZHJlc3NUb0luZGV4KHQpLHM9dGhpcy4jdFtyXTtyZXR1cm4gcz9CaWdJbnQocy5idWZmZXIuYnl0ZUxlbmd0aCk6MG59LGxvZ193YXJuOnQ9PntsZXQgcj1fLmFkZHJlc3NUb0luZGV4KHQpLHM9dGhpcy4jdFtyXTtpZighcylyZXR1cm4gdGhpcy4jci5lcnJvcihgZmFpbGVkIHRvIGxvZyh3YXJuKTogYmFkIGJsb2NrIHJlZmVyZW5jZSBpbiBhZGRyIDB4JHt0LnRvU3RyaW5nKDE2KS5wYWRTdGFydCg2NCwiMCIpfWApO2xldCBlPXRoaXMuI24uZGVjb2RlKHMuYnVmZmVyKTt0aGlzLiNyLndhcm4oZSl9LGxvZ19pbmZvOnQ9PntsZXQgcj1fLmFkZHJlc3NUb0luZGV4KHQpLHM9dGhpcy4jdFtyXTtpZighcylyZXR1cm4gdGhpcy4jci5lcnJvcihgZmFpbGVkIHRvIGxvZyhpbmZvKTogYmFkIGJsb2NrIHJlZmVyZW5jZSBpbiBhZGRyIDB4JHt0LnRvU3RyaW5nKDE2KS5wYWRTdGFydCg2NCwiMCIpfWApO2xldCBlPXRoaXMuI24uZGVjb2RlKHMuYnVmZmVyKTt0aGlzLiNyLmluZm8oZSl9LGxvZ19kZWJ1Zzp0PT57bGV0IHI9Xy5hZGRyZXNzVG9JbmRleCh0KSxzPXRoaXMuI3Rbcl07aWYoIXMpcmV0dXJuIHRoaXMuI3IuZXJyb3IoYGZhaWxlZCB0byBsb2coZGVidWcpOiBiYWQgYmxvY2sgcmVmZXJlbmNlIGluIGFkZHIgMHgke3QudG9TdHJpbmcoMTYpLnBhZFN0YXJ0KDY0LCIwIil9YCk7bGV0IGU9dGhpcy4jbi5kZWNvZGUocy5idWZmZXIpO3RoaXMuI3IuZGVidWcoZSl9LGxvZ19lcnJvcjp0PT57bGV0IHI9Xy5hZGRyZXNzVG9JbmRleCh0KSxzPXRoaXMuI3Rbcl07aWYoIXMpcmV0dXJuIHRoaXMuI3IuZXJyb3IoYGZhaWxlZCB0byBsb2coZXJyb3IpOiBiYWQgYmxvY2sgcmVmZXJlbmNlIGluIGFkZHIgMHgke3QudG9TdHJpbmcoMTYpLnBhZFN0YXJ0KDY0LCIwIil9YCk7bGV0IGU9dGhpcy4jbi5kZWNvZGUocy5idWZmZXIpO3RoaXMuI3IuZXJyb3IoZSl9fTtnZXQjYSgpe2xldCB0PXRoaXMuI2VbdGhpcy4jZS5sZW5ndGgtMV1bMF07cmV0dXJuIHQ9PT1udWxsP251bGw6dGhpcy4jdFt0XX1bWV0oKXt0aGlzLiN0Lmxlbmd0aD0xLHRoaXMuI2UubGVuZ3RoPTB9W1ddKHQpe2xldCByPXRoaXMuI3RbdF07aWYoIXIpdGhyb3cgbmV3IEVycm9yKGBpbnZhbGlkIGJsb2NrIGluZGV4OiAke3R9YCk7cmV0dXJuIHJ9W0NdKHQscj0hMSl7Zm9yKGxldFtzLGVdb2YgdC5ibG9ja3Mpe2lmKHMmJnIpe2xldCBuPW5ldyBVaW50OEFycmF5KG5ldyB0aGlzLiNpKE51bWJlcihzLmJ5dGVMZW5ndGgpKSk7bi5zZXQobmV3IFVpbnQ4QXJyYXkocykpLHM9bi5idWZmZXJ9dGhpcy4jdFtlXT1zP25ldyBfKHMsITEpOm51bGx9dGhpcy4jZT10LnN0YWNrfVtGXSgpe3JldHVybntzdGFjazp0aGlzLiNlLnNsaWNlKCksYmxvY2tzOnRoaXMuI3QubWFwKCh0LHIpPT50P3QubG9jYWw/KHQubG9jYWw9ITEsW3QuYnVmZmVyLHJdKTpudWxsOltudWxsLHJdKS5maWx0ZXIoQm9vbGVhbil9fVtUXSh0KXtpZighdClyZXR1cm4gbnVsbDtpZih0eXBlb2YgdD09InN0cmluZyImJih0PXRoaXMuI2wuZW5jb2RlKHQpKSx0IGluc3RhbmNlb2YgVWludDhBcnJheSl7aWYodC5idWZmZXIuY29uc3RydWN0b3I9PT10aGlzLiNpKXtsZXQgbj10aGlzLiN0Lmxlbmd0aDtyZXR1cm4gdGhpcy4jdC5wdXNoKG5ldyBfKHQuYnVmZmVyLCEwKSksbn1sZXQgcj1fLmFkZHJlc3NUb0luZGV4KHRoaXMuYWxsb2ModC5sZW5ndGgpKSxzPXRoaXMuI3Rbcl07cmV0dXJuIG5ldyBVaW50OEFycmF5KHMuYnVmZmVyKS5zZXQodCwwKSxyfXJldHVybiB0fVt2XSh0KXt0aGlzLiNlLnB1c2goW3QsbnVsbCxudWxsXSl9W0xdKCl7bGV0Wyx0LHJdPXRoaXMuI2UucG9wKCkscz1yPT09bnVsbD8xOjAsZT1yPz90LG49W251bGwsbnVsbF07cmV0dXJuIGU9PT1udWxsfHx0aGlzLiN0W2VdPT09bnVsbHx8KG5bc109ZSksbn19O3ZhciBtPWNsYXNze3N0YXRpYyByZWFkX2J5dGVzKHQscil7bGV0IHM9bmV3IG07cmV0dXJuIHMuYnVmPXQuZ2V0VWludDMyKHIsITApLHMuYnVmX2xlbj10LmdldFVpbnQzMihyKzQsITApLHN9c3RhdGljIHJlYWRfYnl0ZXNfYXJyYXkodCxyLHMpe2xldCBlPVtdO2ZvcihsZXQgbj0wO248cztuKyspZS5wdXNoKG0ucmVhZF9ieXRlcyh0LHIrOCpuKSk7cmV0dXJuIGV9fSx4PWNsYXNze3N0YXRpYyByZWFkX2J5dGVzKHQscil7bGV0IHM9bmV3IHg7cmV0dXJuIHMuYnVmPXQuZ2V0VWludDMyKHIsITApLHMuYnVmX2xlbj10LmdldFVpbnQzMihyKzQsITApLHN9c3RhdGljIHJlYWRfYnl0ZXNfYXJyYXkodCxyLHMpe2xldCBlPVtdO2ZvcihsZXQgbj0wO248cztuKyspZS5wdXNoKHgucmVhZF9ieXRlcyh0LHIrOCpuKSk7cmV0dXJuIGV9fSx0dD0wLGV0PTEscnQ9Mjt2YXIgQj00O3ZhciBOdD0xPDwwLFN0PTE8PDEsRHQ9MTw8MixMdD0xPDwzLEN0PTE8PDQsaz1jbGFzc3t3cml0ZV9ieXRlcyh0LHIpe3Quc2V0VWludDgocix0aGlzLmZzX2ZpbGV0eXBlKSx0LnNldFVpbnQxNihyKzIsdGhpcy5mc19mbGFncywhMCksdC5zZXRCaWdVaW50NjQocis4LHRoaXMuZnNfcmlnaHRzX2Jhc2UsITApLHQuc2V0QmlnVWludDY0KHIrMTYsdGhpcy5mc19yaWdodHNfaW5oZXJpdGVkLCEwKX1jb25zdHJ1Y3Rvcih0LHIpe3RoaXMuZnNfcmlnaHRzX2Jhc2U9MG4sdGhpcy5mc19yaWdodHNfaW5oZXJpdGVkPTBuLHRoaXMuZnNfZmlsZXR5cGU9dCx0aGlzLmZzX2ZsYWdzPXJ9fSxGdD0xPDwwLGt0PTE8PDEsVXQ9MTw8MixCdD0xPDwzLGN0PTE8PDAsZHQ9MTw8MSxfdD0xPDwyLGh0PTE8PDMsVT1jbGFzc3t3cml0ZV9ieXRlcyh0LHIpe3Quc2V0QmlnVWludDY0KHIsdGhpcy5kZXYsITApLHQuc2V0QmlnVWludDY0KHIrOCx0aGlzLmlubywhMCksdC5zZXRVaW50OChyKzE2LHRoaXMuZmlsZXR5cGUpLHQuc2V0QmlnVWludDY0KHIrMjQsdGhpcy5ubGluaywhMCksdC5zZXRCaWdVaW50NjQociszMix0aGlzLnNpemUsITApLHQuc2V0QmlnVWludDY0KHIrMzgsdGhpcy5hdGltLCEwKSx0LnNldEJpZ1VpbnQ2NChyKzQ2LHRoaXMubXRpbSwhMCksdC5zZXRCaWdVaW50NjQocis1Mix0aGlzLmN0aW0sITApfWNvbnN0cnVjdG9yKHQscil7dGhpcy5kZXY9MG4sdGhpcy5pbm89MG4sdGhpcy5ubGluaz0wbix0aGlzLmF0aW09MG4sdGhpcy5tdGltPTBuLHRoaXMuY3RpbT0wbix0aGlzLmZpbGV0eXBlPXQsdGhpcy5zaXplPXJ9fTt2YXIgUHQ9MTw8MCxHdD0xPDwwO3ZhciBNdD0xPDwwLEh0PTE8PDEsdnQ9MTw8MCxWdD0xPDwwLFd0PTE8PDE7dmFyIHo9Y2xhc3N7c3RhcnQodCl7dGhpcy5pbnN0PXQsdC5leHBvcnRzLl9zdGFydCgpfWluaXRpYWxpemUodCl7dGhpcy5pbnN0PXQsdC5leHBvcnRzLl9pbml0aWFsaXplKCl9Y29uc3RydWN0b3IodCxyLHMpe3RoaXMuYXJncz1bXSx0aGlzLmVudj1bXSx0aGlzLmZkcz1bXSx0aGlzLmFyZ3M9dCx0aGlzLmVudj1yLHRoaXMuZmRzPXM7bGV0IGU9dGhpczt0aGlzLndhc2lJbXBvcnQ9e2FyZ3Nfc2l6ZXNfZ2V0KG4saSl7bGV0IG89bmV3IERhdGFWaWV3KGUuaW5zdC5leHBvcnRzLm1lbW9yeS5idWZmZXIpO28uc2V0VWludDMyKG4sZS5hcmdzLmxlbmd0aCwhMCk7bGV0IGE9MDtmb3IobGV0IGwgb2YgZS5hcmdzKWErPWwubGVuZ3RoKzE7cmV0dXJuIG8uc2V0VWludDMyKGksYSwhMCksMH0sYXJnc19nZXQobixpKXtsZXQgbz1uZXcgRGF0YVZpZXcoZS5pbnN0LmV4cG9ydHMubWVtb3J5LmJ1ZmZlciksYT1uZXcgVWludDhBcnJheShlLmluc3QuZXhwb3J0cy5tZW1vcnkuYnVmZmVyKSxsPWk7Zm9yKGxldCBmPTA7ZjxlLmFyZ3MubGVuZ3RoO2YrKyl7by5zZXRVaW50MzIobixpLCEwKSxuKz00O2xldCBjPW5ldyBUZXh0RW5jb2RlcigidXRmLTgiKS5lbmNvZGUoZS5hcmdzW2ZdKTthLnNldChjLGkpLG8uc2V0VWludDgoaStjLmxlbmd0aCwwKSxpKz1jLmxlbmd0aCsxfXJldHVybiAwfSxlbnZpcm9uX3NpemVzX2dldChuLGkpe2xldCBvPW5ldyBEYXRhVmlldyhlLmluc3QuZXhwb3J0cy5tZW1vcnkuYnVmZmVyKTtvLnNldFVpbnQzMihuLGUuZW52Lmxlbmd0aCwhMCk7bGV0IGE9MDtmb3IobGV0IGwgb2YgZS5lbnYpYSs9bC5sZW5ndGgrMTtyZXR1cm4gby5zZXRVaW50MzIoaSxhLCEwKSwwfSxlbnZpcm9uX2dldChuLGkpe2xldCBvPW5ldyBEYXRhVmlldyhlLmluc3QuZXhwb3J0cy5tZW1vcnkuYnVmZmVyKSxhPW5ldyBVaW50OEFycmF5KGUuaW5zdC5leHBvcnRzLm1lbW9yeS5idWZmZXIpLGw9aTtmb3IobGV0IGY9MDtmPHIubGVuZ3RoO2YrKyl7by5zZXRVaW50MzIobixpLCEwKSxuKz00O2xldCBjPW5ldyBUZXh0RW5jb2RlcigidXRmLTgiKS5lbmNvZGUocltmXSk7YS5zZXQoYyxpKSxvLnNldFVpbnQ4KGkrYy5sZW5ndGgsMCksaSs9Yy5sZW5ndGgrMX1yZXR1cm4gMH0sY2xvY2tfcmVzX2dldChuLGkpe3Rocm93InVuaW1wbGVtZW50ZWQifSxjbG9ja190aW1lX2dldChuLGksbyl7bGV0IGE9bmV3IERhdGFWaWV3KGUuaW5zdC5leHBvcnRzLm1lbW9yeS5idWZmZXIpO2lmKG49PT0wKWEuc2V0QmlnVWludDY0KG8sQmlnSW50KG5ldyBEYXRlKCkuZ2V0VGltZSgpKSoxMDAwMDAwbiwhMCk7ZWxzZSBpZihuPT0xKXtsZXQgbDt0cnl7bD1CaWdJbnQoTWF0aC5yb3VuZChwZXJmb3JtYW5jZS5ub3coKSoxZTYpKX1jYXRjaHtsPTBufWEuc2V0QmlnVWludDY0KG8sbCwhMCl9ZWxzZSBhLnNldEJpZ1VpbnQ2NChvLDBuLCEwKTtyZXR1cm4gMH0sZmRfYWR2aXNlKG4saSxvLGEpe3JldHVybiBlLmZkc1tuXSE9bnVsbD9lLmZkc1tuXS5mZF9hZHZpc2UoaSxvLGEpOjh9LGZkX2FsbG9jYXRlKG4saSxvKXtyZXR1cm4gZS5mZHNbbl0hPW51bGw/ZS5mZHNbbl0uZmRfYWxsb2NhdGUoaSxvKTo4fSxmZF9jbG9zZShuKXtpZihlLmZkc1tuXSE9bnVsbCl7bGV0IGk9ZS5mZHNbbl0uZmRfY2xvc2UoKTtyZXR1cm4gZS5mZHNbbl09dm9pZCAwLGl9ZWxzZSByZXR1cm4gOH0sZmRfZGF0YXN5bmMobil7cmV0dXJuIGUuZmRzW25dIT1udWxsP2UuZmRzW25dLmZkX2RhdGFzeW5jKCk6OH0sZmRfZmRzdGF0X2dldChuLGkpe2lmKGUuZmRzW25dIT1udWxsKXtsZXR7cmV0Om8sZmRzdGF0OmF9PWUuZmRzW25dLmZkX2Zkc3RhdF9nZXQoKTtyZXR1cm4gYT8ud3JpdGVfYnl0ZXMobmV3IERhdGFWaWV3KGUuaW5zdC5leHBvcnRzLm1lbW9yeS5idWZmZXIpLGkpLG99ZWxzZSByZXR1cm4gOH0sZmRfZmRzdGF0X3NldF9mbGFncyhuLGkpe3JldHVybiBlLmZkc1tuXSE9bnVsbD9lLmZkc1tuXS5mZF9mZHN0YXRfc2V0X2ZsYWdzKGkpOjh9LGZkX2Zkc3RhdF9zZXRfcmlnaHRzKG4saSxvKXtyZXR1cm4gZS5mZHNbbl0hPW51bGw/ZS5mZHNbbl0uZmRfZmRzdGF0X3NldF9yaWdodHMoaSxvKTo4fSxmZF9maWxlc3RhdF9nZXQobixpKXtpZihlLmZkc1tuXSE9bnVsbCl7bGV0e3JldDpvLGZpbGVzdGF0OmF9PWUuZmRzW25dLmZkX2ZpbGVzdGF0X2dldCgpO3JldHVybiBhPy53cml0ZV9ieXRlcyhuZXcgRGF0YVZpZXcoZS5pbnN0LmV4cG9ydHMubWVtb3J5LmJ1ZmZlciksaSksb31lbHNlIHJldHVybiA4fSxmZF9maWxlc3RhdF9zZXRfc2l6ZShuLGkpe3JldHVybiBlLmZkc1tuXSE9bnVsbD9lLmZkc1tuXS5mZF9maWxlc3RhdF9zZXRfc2l6ZShpKTo4fSxmZF9maWxlc3RhdF9zZXRfdGltZXMobixpLG8sYSl7cmV0dXJuIGUuZmRzW25dIT1udWxsP2UuZmRzW25dLmZkX2ZpbGVzdGF0X3NldF90aW1lcyhpLG8sYSk6OH0sZmRfcHJlYWQobixpLG8sYSxsKXtsZXQgZj1uZXcgRGF0YVZpZXcoZS5pbnN0LmV4cG9ydHMubWVtb3J5LmJ1ZmZlciksYz1uZXcgVWludDhBcnJheShlLmluc3QuZXhwb3J0cy5tZW1vcnkuYnVmZmVyKTtpZihlLmZkc1tuXSE9bnVsbCl7bGV0IGQ9bS5yZWFkX2J5dGVzX2FycmF5KGYsaSxvKSx7cmV0OmIsbnJlYWQ6cH09ZS5mZHNbbl0uZmRfcHJlYWQoYyxkLGEpO3JldHVybiBmLnNldFVpbnQzMihsLHAsITApLGJ9ZWxzZSByZXR1cm4gOH0sZmRfcHJlc3RhdF9nZXQobixpKXtsZXQgbz1uZXcgRGF0YVZpZXcoZS5pbnN0LmV4cG9ydHMubWVtb3J5LmJ1ZmZlcik7aWYoZS5mZHNbbl0hPW51bGwpe2xldHtyZXQ6YSxwcmVzdGF0Omx9PWUuZmRzW25dLmZkX3ByZXN0YXRfZ2V0KCk7cmV0dXJuIGw/LndyaXRlX2J5dGVzKG8saSksYX1lbHNlIHJldHVybiA4fSxmZF9wcmVzdGF0X2Rpcl9uYW1lKG4saSxvKXtpZihlLmZkc1tuXSE9bnVsbCl7bGV0e3JldDphLHByZXN0YXRfZGlyX25hbWU6bH09ZS5mZHNbbl0uZmRfcHJlc3RhdF9kaXJfbmFtZSgpO3JldHVybiBsIT1udWxsJiZuZXcgVWludDhBcnJheShlLmluc3QuZXhwb3J0cy5tZW1vcnkuYnVmZmVyKS5zZXQobCxpKSxhfWVsc2UgcmV0dXJuIDh9LGZkX3B3cml0ZShuLGksbyxhLGwpe2xldCBmPW5ldyBEYXRhVmlldyhlLmluc3QuZXhwb3J0cy5tZW1vcnkuYnVmZmVyKSxjPW5ldyBVaW50OEFycmF5KGUuaW5zdC5leHBvcnRzLm1lbW9yeS5idWZmZXIpO2lmKGUuZmRzW25dIT1udWxsKXtsZXQgZD14LnJlYWRfYnl0ZXNfYXJyYXkoZixpLG8pLHtyZXQ6Yixud3JpdHRlbjpwfT1lLmZkc1tuXS5mZF9wd3JpdGUoYyxkLGEpO3JldHVybiBmLnNldFVpbnQzMihsLHAsITApLGJ9ZWxzZSByZXR1cm4gOH0sZmRfcmVhZChuLGksbyxhKXtsZXQgbD1uZXcgRGF0YVZpZXcoZS5pbnN0LmV4cG9ydHMubWVtb3J5LmJ1ZmZlciksZj1uZXcgVWludDhBcnJheShlLmluc3QuZXhwb3J0cy5tZW1vcnkuYnVmZmVyKTtpZihlLmZkc1tuXSE9bnVsbCl7bGV0IGM9bS5yZWFkX2J5dGVzX2FycmF5KGwsaSxvKSx7cmV0OmQsbnJlYWQ6Yn09ZS5mZHNbbl0uZmRfcmVhZChmLGMpO3JldHVybiBsLnNldFVpbnQzMihhLGIsITApLGR9ZWxzZSByZXR1cm4gOH0sZmRfcmVhZGRpcihuLGksbyxhLGwpe2xldCBmPW5ldyBEYXRhVmlldyhlLmluc3QuZXhwb3J0cy5tZW1vcnkuYnVmZmVyKSxjPW5ldyBVaW50OEFycmF5KGUuaW5zdC5leHBvcnRzLm1lbW9yeS5idWZmZXIpO2lmKGUuZmRzW25dIT1udWxsKXtsZXQgZD0wO2Zvcig7Oyl7bGV0e3JldDpiLGRpcmVudDpwfT1lLmZkc1tuXS5mZF9yZWFkZGlyX3NpbmdsZShhKTtpZihiIT0wKXJldHVybiBmLnNldFVpbnQzMihsLGQsITApLGI7aWYocD09bnVsbClicmVhaztpZihvLWQ8cC5oZWFkX2xlbmd0aCgpKXtkPW87YnJlYWt9bGV0IEU9bmV3IEFycmF5QnVmZmVyKHAuaGVhZF9sZW5ndGgoKSk7aWYocC53cml0ZV9oZWFkX2J5dGVzKG5ldyBEYXRhVmlldyhFKSwwKSxjLnNldChuZXcgVWludDhBcnJheShFKS5zbGljZSgwLE1hdGgubWluKEUuYnl0ZUxlbmd0aCxvLWQpKSxpKSxpKz1wLmhlYWRfbGVuZ3RoKCksZCs9cC5oZWFkX2xlbmd0aCgpLG8tZDxwLm5hbWVfbGVuZ3RoKCkpe2Q9bzticmVha31wLndyaXRlX25hbWVfYnl0ZXMoYyxpLG8tZCksaSs9cC5uYW1lX2xlbmd0aCgpLGQrPXAubmFtZV9sZW5ndGgoKSxhPXAuZF9uZXh0fXJldHVybiBmLnNldFVpbnQzMihsLGQsITApLDB9ZWxzZSByZXR1cm4gOH0sZmRfcmVudW1iZXIobixpKXtpZihlLmZkc1tuXSE9bnVsbCYmZS5mZHNbaV0hPW51bGwpe2xldCBvPWUuZmRzW2ldLmZkX2Nsb3NlKCk7cmV0dXJuIG8hPTA/bzooZS5mZHNbaV09ZS5mZHNbbl0sZS5mZHNbbl09dm9pZCAwLDApfWVsc2UgcmV0dXJuIDh9LGZkX3NlZWsobixpLG8sYSl7bGV0IGw9bmV3IERhdGFWaWV3KGUuaW5zdC5leHBvcnRzLm1lbW9yeS5idWZmZXIpO2lmKGUuZmRzW25dIT1udWxsKXtsZXR7cmV0OmYsb2Zmc2V0OmN9PWUuZmRzW25dLmZkX3NlZWsoaSxvKTtyZXR1cm4gbC5zZXRCaWdJbnQ2NChhLGMsITApLGZ9ZWxzZSByZXR1cm4gOH0sZmRfc3luYyhuKXtyZXR1cm4gZS5mZHNbbl0hPW51bGw/ZS5mZHNbbl0uZmRfc3luYygpOjh9LGZkX3RlbGwobixpKXtsZXQgbz1uZXcgRGF0YVZpZXcoZS5pbnN0LmV4cG9ydHMubWVtb3J5LmJ1ZmZlcik7aWYoZS5mZHNbbl0hPW51bGwpe2xldHtyZXQ6YSxvZmZzZXQ6bH09ZS5mZHNbbl0uZmRfdGVsbCgpO3JldHVybiBvLnNldEJpZ1VpbnQ2NChpLGwsITApLGF9ZWxzZSByZXR1cm4gOH0sZmRfd3JpdGUobixpLG8sYSl7bGV0IGw9bmV3IERhdGFWaWV3KGUuaW5zdC5leHBvcnRzLm1lbW9yeS5idWZmZXIpLGY9bmV3IFVpbnQ4QXJyYXkoZS5pbnN0LmV4cG9ydHMubWVtb3J5LmJ1ZmZlcik7aWYoZS5mZHNbbl0hPW51bGwpe2xldCBjPXgucmVhZF9ieXRlc19hcnJheShsLGksbykse3JldDpkLG53cml0dGVuOmJ9PWUuZmRzW25dLmZkX3dyaXRlKGYsYyk7cmV0dXJuIGwuc2V0VWludDMyKGEsYiwhMCksZH1lbHNlIHJldHVybiA4fSxwYXRoX2NyZWF0ZV9kaXJlY3RvcnkobixpLG8pe2xldCBhPW5ldyBVaW50OEFycmF5KGUuaW5zdC5leHBvcnRzLm1lbW9yeS5idWZmZXIpO2lmKGUuZmRzW25dIT1udWxsKXtsZXQgbD1uZXcgVGV4dERlY29kZXIoInV0Zi04IikuZGVjb2RlKGEuc2xpY2UoaSxpK28pKTtyZXR1cm4gZS5mZHNbbl0ucGF0aF9jcmVhdGVfZGlyZWN0b3J5KGwpfX0scGF0aF9maWxlc3RhdF9nZXQobixpLG8sYSxsKXtsZXQgZj1uZXcgRGF0YVZpZXcoZS5pbnN0LmV4cG9ydHMubWVtb3J5LmJ1ZmZlciksYz1uZXcgVWludDhBcnJheShlLmluc3QuZXhwb3J0cy5tZW1vcnkuYnVmZmVyKTtpZihlLmZkc1tuXSE9bnVsbCl7bGV0IGQ9bmV3IFRleHREZWNvZGVyKCJ1dGYtOCIpLmRlY29kZShjLnNsaWNlKG8sbythKSkse3JldDpiLGZpbGVzdGF0OnB9PWUuZmRzW25dLnBhdGhfZmlsZXN0YXRfZ2V0KGksZCk7cmV0dXJuIHA/LndyaXRlX2J5dGVzKGYsbCksYn1lbHNlIHJldHVybiA4fSxwYXRoX2ZpbGVzdGF0X3NldF90aW1lcyhuLGksbyxhLGwsZixjKXtsZXQgZD1uZXcgVWludDhBcnJheShlLmluc3QuZXhwb3J0cy5tZW1vcnkuYnVmZmVyKTtpZihlLmZkc1tuXSE9bnVsbCl7bGV0IGI9bmV3IFRleHREZWNvZGVyKCJ1dGYtOCIpLmRlY29kZShkLnNsaWNlKG8sbythKSk7cmV0dXJuIGUuZmRzW25dLnBhdGhfZmlsZXN0YXRfc2V0X3RpbWVzKGksYixsLGYsYyl9ZWxzZSByZXR1cm4gOH0scGF0aF9saW5rKG4saSxvLGEsbCxmLGMpe2xldCBkPW5ldyBVaW50OEFycmF5KGUuaW5zdC5leHBvcnRzLm1lbW9yeS5idWZmZXIpO2lmKGUuZmRzW25dIT1udWxsJiZlLmZkc1tsXSE9bnVsbCl7bGV0IGI9bmV3IFRleHREZWNvZGVyKCJ1dGYtOCIpLmRlY29kZShkLnNsaWNlKG8sbythKSkscD1uZXcgVGV4dERlY29kZXIoInV0Zi04IikuZGVjb2RlKGQuc2xpY2UoZixmK2MpKTtyZXR1cm4gZS5mZHNbbF0ucGF0aF9saW5rKG4saSxiLHApfWVsc2UgcmV0dXJuIDh9LHBhdGhfb3BlbihuLGksbyxhLGwsZixjLGQsYil7bGV0IHA9bmV3IERhdGFWaWV3KGUuaW5zdC5leHBvcnRzLm1lbW9yeS5idWZmZXIpLEU9bmV3IFVpbnQ4QXJyYXkoZS5pbnN0LmV4cG9ydHMubWVtb3J5LmJ1ZmZlcik7aWYoZS5mZHNbbl0hPW51bGwpe2xldCBvdD1uZXcgVGV4dERlY29kZXIoInV0Zi04IikuZGVjb2RlKEUuc2xpY2UobyxvK2EpKSx7cmV0OiQsZmRfb2JqOmF0fT1lLmZkc1tuXS5wYXRoX29wZW4oaSxvdCxsLGYsYyxkKTtpZigkIT0wKXJldHVybiAkO2UuZmRzLnB1c2goYXQpO2xldCBsdD1lLmZkcy5sZW5ndGgtMTtyZXR1cm4gcC5zZXRVaW50MzIoYixsdCwhMCksMH1lbHNlIHJldHVybiA4fSxwYXRoX3JlYWRsaW5rKG4saSxvLGEsbCxmKXtsZXQgYz1uZXcgRGF0YVZpZXcoZS5pbnN0LmV4cG9ydHMubWVtb3J5LmJ1ZmZlciksZD1uZXcgVWludDhBcnJheShlLmluc3QuZXhwb3J0cy5tZW1vcnkuYnVmZmVyKTtpZihlLmZkc1tuXSE9bnVsbCl7bGV0IGI9bmV3IFRleHREZWNvZGVyKCJ1dGYtOCIpLmRlY29kZShkLnNsaWNlKGksaStvKSkse3JldDpwLGRhdGE6RX09ZS5mZHNbbl0ucGF0aF9yZWFkbGluayhiKTtpZihFIT1udWxsKXtpZihFLmxlbmd0aD5sKXJldHVybiBjLnNldFVpbnQzMihmLDAsITApLDg7ZC5zZXQoRSxhKSxjLnNldFVpbnQzMihmLEUubGVuZ3RoLCEwKX1yZXR1cm4gcH1lbHNlIHJldHVybiA4fSxwYXRoX3JlbW92ZV9kaXJlY3RvcnkobixpLG8pe2xldCBhPW5ldyBVaW50OEFycmF5KGUuaW5zdC5leHBvcnRzLm1lbW9yeS5idWZmZXIpO2lmKGUuZmRzW25dIT1udWxsKXtsZXQgbD1uZXcgVGV4dERlY29kZXIoInV0Zi04IikuZGVjb2RlKGEuc2xpY2UoaSxpK28pKTtyZXR1cm4gZS5mZHNbbl0ucGF0aF9yZW1vdmVfZGlyZWN0b3J5KGwpfWVsc2UgcmV0dXJuIDh9LHBhdGhfcmVuYW1lKG4saSxvLGEsbCxmKXt0aHJvdyJGSVhNRSB3aGF0IGlzIHRoZSBiZXN0IGFic3RyYWN0aW9uIGZvciB0aGlzPyJ9LHBhdGhfc3ltbGluayhuLGksbyxhLGwpe2xldCBmPW5ldyBVaW50OEFycmF5KGUuaW5zdC5leHBvcnRzLm1lbW9yeS5idWZmZXIpO2lmKGUuZmRzW29dIT1udWxsKXtsZXQgYz1uZXcgVGV4dERlY29kZXIoInV0Zi04IikuZGVjb2RlKGYuc2xpY2UobixuK2kpKSxkPW5ldyBUZXh0RGVjb2RlcigidXRmLTgiKS5kZWNvZGUoZi5zbGljZShhLGErbCkpO3JldHVybiBlLmZkc1tvXS5wYXRoX3N5bWxpbmsoYyxkKX1lbHNlIHJldHVybiA4fSxwYXRoX3VubGlua19maWxlKG4saSxvKXtsZXQgYT1uZXcgVWludDhBcnJheShlLmluc3QuZXhwb3J0cy5tZW1vcnkuYnVmZmVyKTtpZihlLmZkc1tuXSE9bnVsbCl7bGV0IGw9bmV3IFRleHREZWNvZGVyKCJ1dGYtOCIpLmRlY29kZShhLnNsaWNlKGksaStvKSk7cmV0dXJuIGUuZmRzW25dLnBhdGhfdW5saW5rX2ZpbGUobCl9ZWxzZSByZXR1cm4gOH0scG9sbF9vbmVvZmYobixpLG8pe3Rocm93ImFzeW5jIGlvIG5vdCBzdXBwb3J0ZWQifSxwcm9jX2V4aXQobil7dGhyb3ciZXhpdCB3aXRoIGV4aXQgY29kZSAiK259LHByb2NfcmFpc2Uobil7dGhyb3cicmFpc2VkIHNpZ25hbCAiK259LHNjaGVkX3lpZWxkKCl7fSxyYW5kb21fZ2V0KG4saSl7bGV0IG89bmV3IFVpbnQ4QXJyYXkoZS5pbnN0LmV4cG9ydHMubWVtb3J5LmJ1ZmZlcik7Zm9yKGxldCBhPTA7YTxpO2ErKylvW24rYV09TWF0aC5yYW5kb20oKSoyNTZ8MH0sc29ja19yZWN2KG4saSxvKXt0aHJvdyJzb2NrZXRzIG5vdCBzdXBwb3J0ZWQifSxzb2NrX3NlbmQobixpLG8pe3Rocm93InNvY2tldHMgbm90IHN1cHBvcnRlZCJ9LHNvY2tfc2h1dGRvd24obixpKXt0aHJvdyJzb2NrZXRzIG5vdCBzdXBwb3J0ZWQifX19fTt2YXIgTj1jbGFzc3tmZF9hZHZpc2UodCxyLHMpe3JldHVybi0xfWZkX2FsbG9jYXRlKHQscil7cmV0dXJuLTF9ZmRfY2xvc2UoKXtyZXR1cm4gMH1mZF9kYXRhc3luYygpe3JldHVybi0xfWZkX2Zkc3RhdF9nZXQoKXtyZXR1cm57cmV0Oi0xLGZkc3RhdDpudWxsfX1mZF9mZHN0YXRfc2V0X2ZsYWdzKHQpe3JldHVybi0xfWZkX2Zkc3RhdF9zZXRfcmlnaHRzKHQscil7cmV0dXJuLTF9ZmRfZmlsZXN0YXRfZ2V0KCl7cmV0dXJue3JldDotMSxmaWxlc3RhdDpudWxsfX1mZF9maWxlc3RhdF9zZXRfc2l6ZSh0KXtyZXR1cm4tMX1mZF9maWxlc3RhdF9zZXRfdGltZXModCxyLHMpe3JldHVybi0xfWZkX3ByZWFkKHQscixzKXtyZXR1cm57cmV0Oi0xLG5yZWFkOjB9fWZkX3ByZXN0YXRfZ2V0KCl7cmV0dXJue3JldDotMSxwcmVzdGF0Om51bGx9fWZkX3ByZXN0YXRfZGlyX25hbWUodCxyKXtyZXR1cm57cmV0Oi0xLHByZXN0YXRfZGlyX25hbWU6bnVsbH19ZmRfcHdyaXRlKHQscixzKXtyZXR1cm57cmV0Oi0xLG53cml0dGVuOjB9fWZkX3JlYWQodCxyKXtyZXR1cm57cmV0Oi0xLG5yZWFkOjB9fWZkX3JlYWRkaXJfc2luZ2xlKHQpe3JldHVybntyZXQ6LTEsZGlyZW50Om51bGx9fWZkX3NlZWsodCxyKXtyZXR1cm57cmV0Oi0xLG9mZnNldDowbn19ZmRfc3luYygpe3JldHVybiAwfWZkX3RlbGwoKXtyZXR1cm57cmV0Oi0xLG9mZnNldDowbn19ZmRfd3JpdGUodCxyKXtyZXR1cm57cmV0Oi0xLG53cml0dGVuOjB9fXBhdGhfY3JlYXRlX2RpcmVjdG9yeSh0KXtyZXR1cm4tMX1wYXRoX2ZpbGVzdGF0X2dldCh0LHIpe3JldHVybntyZXQ6LTEsZmlsZXN0YXQ6bnVsbH19cGF0aF9maWxlc3RhdF9zZXRfdGltZXModCxyLHMsZSxuKXtyZXR1cm4tMX1wYXRoX2xpbmsodCxyLHMsZSl7cmV0dXJuLTF9cGF0aF9vcGVuKHQscixzLGUsbixpKXtyZXR1cm57cmV0Oi0xLGZkX29iajpudWxsfX1wYXRoX3JlYWRsaW5rKHQpe3JldHVybntyZXQ6LTEsZGF0YTpudWxsfX1wYXRoX3JlbW92ZV9kaXJlY3RvcnkodCl7cmV0dXJuLTF9cGF0aF9yZW5hbWUodCxyLHMpe3JldHVybi0xfXBhdGhfc3ltbGluayh0LHIpe3JldHVybi0xfXBhdGhfdW5saW5rX2ZpbGUodCl7cmV0dXJuLTF9fTt2YXIgUj1jbGFzc3tnZXQgc2l6ZSgpe3JldHVybiBCaWdJbnQodGhpcy5kYXRhLmJ5dGVMZW5ndGgpfXN0YXQoKXtyZXR1cm4gbmV3IFUoQix0aGlzLnNpemUpfXRydW5jYXRlKCl7dGhpcy5kYXRhPW5ldyBVaW50OEFycmF5KFtdKX1jb25zdHJ1Y3Rvcih0KXt0aGlzLmRhdGE9bmV3IFVpbnQ4QXJyYXkodCl9fTt2YXIgeT1jbGFzcyBleHRlbmRzIE57ZmRfZmRzdGF0X2dldCgpe3JldHVybntyZXQ6MCxmZHN0YXQ6bmV3IGsoQiwwKX19ZmRfcmVhZCh0LHIpe2xldCBzPTA7Zm9yKGxldCBlIG9mIHIpaWYodGhpcy5maWxlX3Bvczx0aGlzLmZpbGUuZGF0YS5ieXRlTGVuZ3RoKXtsZXQgbj10aGlzLmZpbGUuZGF0YS5zbGljZShOdW1iZXIodGhpcy5maWxlX3BvcyksTnVtYmVyKHRoaXMuZmlsZV9wb3MrQmlnSW50KGUuYnVmX2xlbikpKTt0LnNldChuLGUuYnVmKSx0aGlzLmZpbGVfcG9zKz1CaWdJbnQobi5sZW5ndGgpLHMrPW4ubGVuZ3RofWVsc2UgYnJlYWs7cmV0dXJue3JldDowLG5yZWFkOnN9fWZkX3NlZWsodCxyKXtsZXQgcztzd2l0Y2gocil7Y2FzZSB0dDpzPXQ7YnJlYWs7Y2FzZSBldDpzPXRoaXMuZmlsZV9wb3MrdDticmVhaztjYXNlIHJ0OnM9QmlnSW50KHRoaXMuZmlsZS5kYXRhLmJ5dGVMZW5ndGgpK3Q7YnJlYWs7ZGVmYXVsdDpyZXR1cm57cmV0OjI4LG9mZnNldDowbn19cmV0dXJuIHM8MD97cmV0OjI4LG9mZnNldDowbn06KHRoaXMuZmlsZV9wb3M9cyx7cmV0OjAsb2Zmc2V0OnRoaXMuZmlsZV9wb3N9KX1mZF93cml0ZSh0LHIpe2xldCBzPTA7Zm9yKGxldCBlIG9mIHIpe2xldCBuPXQuc2xpY2UoZS5idWYsZS5idWYrZS5idWZfbGVuKTtpZih0aGlzLmZpbGVfcG9zK0JpZ0ludChuLmJ5dGVMZW5ndGgpPnRoaXMuZmlsZS5zaXplKXtsZXQgaT10aGlzLmZpbGUuZGF0YTt0aGlzLmZpbGUuZGF0YT1uZXcgVWludDhBcnJheShOdW1iZXIodGhpcy5maWxlX3BvcytCaWdJbnQobi5ieXRlTGVuZ3RoKSkpLHRoaXMuZmlsZS5kYXRhLnNldChpKX10aGlzLmZpbGUuZGF0YS5zZXQobi5zbGljZSgwLE51bWJlcih0aGlzLmZpbGUuc2l6ZS10aGlzLmZpbGVfcG9zKSksTnVtYmVyKHRoaXMuZmlsZV9wb3MpKSx0aGlzLmZpbGVfcG9zKz1CaWdJbnQobi5ieXRlTGVuZ3RoKSxzKz1lLmJ1Zl9sZW59cmV0dXJue3JldDowLG53cml0dGVuOnN9fWZkX2ZpbGVzdGF0X2dldCgpe3JldHVybntyZXQ6MCxmaWxlc3RhdDp0aGlzLmZpbGUuc3RhdCgpfX1jb25zdHJ1Y3Rvcih0KXtzdXBlcigpLHRoaXMuZmlsZV9wb3M9MG4sdGhpcy5maWxlPXR9fTthc3luYyBmdW5jdGlvbiBzdCh1KXtsZXQgdD1bXSxyPVtdLHM9W25ldyB5KG5ldyBSKFtdKSksbmV3IHkobmV3IFIoW10pKSxuZXcgeShuZXcgUihbXSkpXSxlPW5ldyB6KHQscixzKTtyZXR1cm57YXN5bmMgaW1wb3J0T2JqZWN0KCl7cmV0dXJuIGUud2FzaUltcG9ydH0sYXN5bmMgaW5pdGlhbGl6ZShuKXtsZXQgaT1uLmV4cG9ydHMubWVtb3J5O2lmKCFpKXRocm93IG5ldyBFcnJvcigiVGhlIG1vZHVsZSBoYXMgdG8gZXhwb3J0IGEgZGVmYXVsdCBtZW1vcnkuIik7aWYobi5leHBvcnRzLl9pbml0aWFsaXplKXtsZXQgbz1uLmV4cG9ydHMuX2luaXRpYWxpemU7ZS5pbml0aWFsaXplP2UuaW5pdGlhbGl6ZSh7ZXhwb3J0czp7bWVtb3J5OmksX2luaXRpYWxpemU6KCk9PntvKCl9fX0pOm8oKX1lbHNlIG4uZXhwb3J0cy5fc3RhcnQmJmUuc3RhcnQoe2V4cG9ydHM6e21lbW9yeTppLF9zdGFydDooKT0+e319fSl9fX12YXIgbXQ9ImV4dGlzbTpob3N0L2VudiIsWD1jbGFzc3sjZTsjdDsjcjsjbj0hMTtjb25zdHJ1Y3Rvcih0LHIscyl7dGhpcy4jZT10LHRoaXMuI3I9cix0aGlzLiN0PXN9YXN5bmMgcmVzZXQoKXtyZXR1cm4gdGhpcy5pc0FjdGl2ZSgpPyExOih0aGlzLiNlW1ldKCksITApfWlzQWN0aXZlKCl7cmV0dXJuIHRoaXMuI259YXN5bmMgZnVuY3Rpb25FeGlzdHModCl7dHJ5e2xldCByPVtdLmNvbmNhdCh0KSxbcyxlXT1yLmxlbmd0aD09PTI/W3RoaXMubG9va3VwVGFyZ2V0KHJbMF0pLHJbMV1dOlt0aGlzLiN0LmZpbmQoaT0+V2ViQXNzZW1ibHkuTW9kdWxlLmV4cG9ydHMoaS5tb2R1bGUubW9kdWxlKS5maW5kKGE9PmEubmFtZT09PXJbMF0mJmEua2luZD09PSJmdW5jdGlvbiIpKSxyWzBdXTtyZXR1cm4hKCFzfHwhcy5tb2R1bGUuaW5zdGFuY2UuZXhwb3J0c1tlXSl9Y2F0Y2h7cmV0dXJuITF9fWFzeW5jIGNhbGxCbG9jayh0LHIpe3RoaXMuI249ITA7bGV0IHM9W10uY29uY2F0KHQpLFtlLG5dPXMubGVuZ3RoPT09Mj9bdGhpcy5sb29rdXBUYXJnZXQoc1swXSksc1sxXV06W3RoaXMuI3QuZmluZChvPT5XZWJBc3NlbWJseS5Nb2R1bGUuZXhwb3J0cyhvLm1vZHVsZS5tb2R1bGUpLmZpbmQobD0+bC5uYW1lPT09c1swXSYmbC5raW5kPT09ImZ1bmN0aW9uIikpLHNbMF1dO2lmKCFlKXRocm93IEVycm9yKGBQbHVnaW4gZXJyb3I6IHRhcmdldCAiJHtzLmpvaW4oJyIgIicpfSIgZG9lcyBub3QgZXhpc3RgKTtsZXQgaT1lLm1vZHVsZS5pbnN0YW5jZS5leHBvcnRzW25dO2lmKCFpKXRocm93IEVycm9yKGBQbHVnaW4gZXJyb3I6IGZ1bmN0aW9uICIke3Muam9pbignIiAiJyl9IiBkb2VzIG5vdCBleGlzdGApO3RoaXMuI2Vbdl0ocj8/bnVsbCk7dHJ5e3JldHVybiBpKCksdGhpcy4jZVtMXSgpfWNhdGNoKG8pe3Rocm93IHRoaXMuI2VbTF0oKSxvfWZpbmFsbHl7dGhpcy4jbj0hMX19YXN5bmMgY2FsbCh0LHIpe2xldCBzPXRoaXMuI2VbVF0ociksW2Usbl09YXdhaXQgdGhpcy5jYWxsQmxvY2sodCxzKSxpPWUhPT1udWxsLG89ZT8/bjtpZihvPT09bnVsbClyZXR1cm4gbnVsbDtsZXQgYT10aGlzLiNlW1ddKG8pO2lmKCFhKXJldHVybiBudWxsO2xldCBsPW5ldyB3KGEuYnVmZmVyKTtpZihpKXRocm93IG5ldyBFcnJvcihgUGx1Z2luLW9yaWdpbmF0ZWQgZXJyb3I6ICR7bC5zdHJpbmcoKX1gKTtyZXR1cm4gbH1sb29rdXBUYXJnZXQodCl7bGV0IHI9U3RyaW5nKHQ/PyIwIikscz10aGlzLiNyLmZpbmRJbmRleChlPT5lPT09cik7aWYocz09PS0xKXRocm93IG5ldyBFcnJvcihgbm8gbW9kdWxlIG5hbWVkICIke3R9ImApO3JldHVybiB0aGlzLiN0W3NdfWFzeW5jIGdldEV4cG9ydHModCl7cmV0dXJuIFdlYkFzc2VtYmx5Lk1vZHVsZS5leHBvcnRzKHRoaXMubG9va3VwVGFyZ2V0KHQpLm1vZHVsZS5tb2R1bGUpfHxbXX1hc3luYyBnZXRJbXBvcnRzKHQpe3JldHVybiBXZWJBc3NlbWJseS5Nb2R1bGUuaW1wb3J0cyh0aGlzLmxvb2t1cFRhcmdldCh0KS5tb2R1bGUubW9kdWxlKXx8W119YXN5bmMgZ2V0SW5zdGFuY2UodCl7cmV0dXJuIHRoaXMubG9va3VwVGFyZ2V0KHQpLm1vZHVsZS5pbnN0YW5jZX1hc3luYyBjbG9zZSgpe319O2FzeW5jIGZ1bmN0aW9uIGl0KHUsdCxyLHM9bmV3IEEoQXJyYXlCdWZmZXIsdS5sb2dnZXIsdS5jb25maWcpKXtsZXQgZT11Lndhc2lFbmFibGVkP2F3YWl0IHN0KHUuYWxsb3dlZFBhdGhzKTpudWxsLG49ey4uLmU/e3dhc2lfc25hcHNob3RfcHJldmlldzE6YXdhaXQgZS5pbXBvcnRPYmplY3QoKX06e30sW210XTpzW1ZdLGVudjp7fX07Zm9yKGxldCBvIGluIHUuZnVuY3Rpb25zKXtuW29dPW5bb118fHt9O2ZvcihsZXQgYSBpbiB1LmZ1bmN0aW9uc1tvXSluW29dW2FdPXUuZnVuY3Rpb25zW29dW2FdLmJpbmQobnVsbCxzKX1sZXQgaT1hd2FpdCBQcm9taXNlLmFsbChyLm1hcChhc3luYyBvPT57bGV0IGE9YXdhaXQgV2ViQXNzZW1ibHkuaW5zdGFudGlhdGUobyxuKTtlJiZhd2FpdCBlPy5pbml0aWFsaXplKGEuaW5zdGFuY2UpO2xldCBsPWEuaW5zdGFuY2UuZXhwb3J0cy5oc19pbml0PyJoYXNrZWxsIjphLmluc3RhbmNlLmV4cG9ydHMuX2luaXRpYWxpemU/InJlYWN0b3IiOmEuaW5zdGFuY2UuZXhwb3J0cy5fc3RhcnQ/ImNvbW1hbmQiOiJub25lIjtyZXR1cm4oYS5pbnN0YW5jZS5leHBvcnRzLmhzX2luaXQ/YS5pbnN0YW5jZS5leHBvcnRzLmhzX2luaXQ6KCk9Pnt9KSgpLHttb2R1bGU6YSxndWVzdFR5cGU6bH19KSk7cmV0dXJuIG5ldyBYKHMsdCxpKX12YXIgUD01ZTMsaj1jbGFzc3tob3N0RmxhZztzaGFyZWREYXRhO3NoYXJlZERhdGFWaWV3O3BsdWdpbjtwb3J0O2R5bmFtaWNIYW5kbGVycztjb250ZXh0O2NvbnN0cnVjdG9yKHQpe2lmKCF0KXRocm93IG5ldyBFcnJvcigiVGhpcyBzaG91bGQgYmUgdW5yZWFjaGFibGU6IHRoaXMgbW9kdWxlIHNob3VsZCBvbmx5IGJlIGludm9rZWQgYXMgYSB3ZWIgd29ya2VyLiIpO3RoaXMuc2hhcmVkRGF0YT1udWxsLHRoaXMuc2hhcmVkRGF0YVZpZXc9bnVsbCx0aGlzLmhvc3RGbGFnPW51bGwsdGhpcy5wb3J0PXQsdGhpcy5wb3J0Lm9uKCJtZXNzYWdlIixyPT50aGlzLmhhbmRsZU1lc3NhZ2UocikpLHRoaXMucG9ydC5wb3N0TWVzc2FnZSh7dHlwZToiaW5pdGlhbGl6ZWQifSksdGhpcy5keW5hbWljSGFuZGxlcnM9bmV3IE1hcCx0aGlzLmR5bmFtaWNIYW5kbGVycy5zZXQoImNhbGwiLGFzeW5jKHIscyxlLG4pPT57aWYoIXRoaXMuY29udGV4dCl0aHJvdyBuZXcgRXJyb3IoImludmFsaWQgc3RhdGU6IG5vIGNvbnRleHQgYXZhaWxhYmxlIHRvIHdvcmtlciByZWFjdG9yIik7dGhpcy5jb250ZXh0W0NdKG4pO2xldCBpPWF3YWl0IHRoaXMucGx1Z2luPy5jYWxsQmxvY2socyxlKS50aGVuKG89PltudWxsLG9dLG89PltvLG51bGxdKTtuPXRoaXMuY29udGV4dFtGXSgpO2ZvcihsZXRbb11vZiBuLmJsb2NrcylvJiZyLnB1c2gobyk7cmV0dXJuIGlbMF0mJihpWzBdPXtvcmlnaW5hbFN0YWNrOmlbMF0/LnN0YWNrLG1lc3NhZ2U6aVswXT8ubWVzc2FnZX0pLHtyZXN1bHRzOmksc3RhdGU6bn19KSx0aGlzLmR5bmFtaWNIYW5kbGVycy5zZXQoInJlc2V0Iixhc3luYyByPT50aGlzLnBsdWdpbj8ucmVzZXQoKSksdGhpcy5keW5hbWljSGFuZGxlcnMuc2V0KCJnZXRFeHBvcnRzIixhc3luYyhyLHMpPT50aGlzLnBsdWdpbj8uZ2V0RXhwb3J0cyhzKSksdGhpcy5keW5hbWljSGFuZGxlcnMuc2V0KCJnZXRJbXBvcnRzIixhc3luYyhyLHMpPT50aGlzLnBsdWdpbj8uZ2V0SW1wb3J0cyhzKSksdGhpcy5keW5hbWljSGFuZGxlcnMuc2V0KCJmdW5jdGlvbkV4aXN0cyIsYXN5bmMocixzKT0+dGhpcy5wbHVnaW4/LmZ1bmN0aW9uRXhpc3RzKHMpKX1hc3luYyBoYW5kbGVNZXNzYWdlKHQpe3N3aXRjaCh0LnR5cGUpe2Nhc2UiaW5pdCI6cmV0dXJuIGF3YWl0IHRoaXMuaGFuZGxlSW5pdCh0KTtjYXNlImludm9rZSI6cmV0dXJuIGF3YWl0IHRoaXMuaGFuZGxlSW52b2tlKHQpfX1hc3luYyBoYW5kbGVJbnZva2UodCl7bGV0IHI9dGhpcy5keW5hbWljSGFuZGxlcnMuZ2V0KHQuaGFuZGxlcik7aWYoIXIpcmV0dXJuIHRoaXMucG9ydC5wb3N0TWVzc2FnZSh7dHlwZToicmV0dXJuIixyZXN1bHQ6W2BubyBoYW5kbGVyIHJlZ2lzdGVyZWQgZm9yICR7dC5oYW5kbGVyfWAsbnVsbF19KTtsZXQgcz1bXSxlPWF3YWl0IHIocywuLi50LmFyZ3N8fFtdKS50aGVuKG49PltudWxsLG5dLG49PltuLG51bGxdKTtyZXR1cm4gZVswXSYmKGVbMF09e29yaWdpbmFsU3RhY2s6ZVswXT8uc3RhY2ssbWVzc2FnZTplWzBdPy5tZXNzYWdlfSksdGhpcy5wb3J0LnBvc3RNZXNzYWdlKHt0eXBlOiJyZXR1cm4iLHJlc3VsdHM6ZX0scyl9YXN5bmMgaGFuZGxlSW5pdCh0KXt0aGlzLnNoYXJlZERhdGE9dC5zaGFyZWREYXRhLHRoaXMuc2hhcmVkRGF0YVZpZXc9bmV3IERhdGFWaWV3KHQuc2hhcmVkRGF0YSksdGhpcy5ob3N0RmxhZz1uZXcgSW50MzJBcnJheSh0aGlzLnNoYXJlZERhdGEpO2xldCByPU9iamVjdC5mcm9tRW50cmllcyhPYmplY3QuZW50cmllcyh0LmZ1bmN0aW9ucykubWFwKChbbCxmXSk9PltsLE9iamVjdC5mcm9tRW50cmllcyhmLm1hcChjPT5bYywoZCwuLi5iKT0+dGhpcy5jYWxsSG9zdChkLGwsYyxiKV0pKV0pKSx7dHlwZTpzLG1vZHVsZXM6ZSxmdW5jdGlvbnM6biwuLi5pfT10LG89bD0+Zj0+dGhpcy5wb3J0LnBvc3RNZXNzYWdlKHt0eXBlOiJsb2ciLGxldmVsOmwsbWVzc2FnZTpmfSksYT1PYmplY3QuZnJvbUVudHJpZXMoWyJpbmZvIiwiZGVidWciLCJ3YXJuIiwiZXJyb3IiXS5tYXAobD0+W2wsbyhsKV0pKTt0aGlzLmNvbnRleHQ9bmV3IEEoQXJyYXlCdWZmZXIsYSx0LmNvbmZpZyksdGhpcy5wbHVnaW49YXdhaXQgaXQoey4uLmksZnVuY3Rpb25zOnIsZmV0Y2gsbG9nZ2VyOmF9LHQubmFtZXMsZSx0aGlzLmNvbnRleHQpLHRoaXMucG9ydC5wb3N0TWVzc2FnZSh7dHlwZToicmVhZHkifSl9Y2FsbEhvc3QodCxyLHMsZSl7aWYoIXRoaXMuaG9zdEZsYWcpdGhyb3cgbmV3IEVycm9yKCJhdHRlbXB0ZWQgdG8gY2FsbCBob3N0IGJlZm9yZSByZWNlaXZpbmcgc2hhcmVkIGFycmF5IGJ1ZmZlciIpO2xldCBuPXRbRl0oKTt0aGlzLnBvcnQucG9zdE1lc3NhZ2Uoe3R5cGU6Imludm9rZSIsbmFtZXNwYWNlOnIsZnVuYzpzLGFyZ3M6ZSxzdGF0ZTpufSk7bGV0IGk9bmV3IE8odGhpcy5zaGFyZWREYXRhKSxvPVtdLGE7ZG97bGV0IGw9aS5yZWFkVWludDgoKTtzd2l0Y2gobCl7Y2FzZSAwOnJldHVybiBuLmJsb2Nrcz1vLHRbQ10obiksaS5jbG9zZSgpLHRoaXMuaG9zdEZsYWdbMF09Ty5TQUJfQkFTRV9PRkZTRVQsYTtjYXNlIDE6YT1pLnJlYWRVaW50NjQoKTticmVhaztjYXNlIDI6YT1pLnJlYWRGbG9hdDY0KCk7YnJlYWs7Y2FzZSAzOmE9dm9pZCAwO2JyZWFrO2Nhc2UgNDp7bGV0IGY9aS5yZWFkVWludDMyKCksYz1pLnJlYWRVaW50MzIoKTtpZighYylvLnB1c2goW251bGwsZl0pO2Vsc2V7bGV0IGQ9bmV3IFVpbnQ4QXJyYXkoYyk7aS5yZWFkKGQpLG8ucHVzaChbZC5idWZmZXIsZl0pfX1icmVhaztkZWZhdWx0OnRocm93IG5ldyBFcnJvcihgaW52YWxpZCBzZWN0aW9uIHR5cGU9IiR7bH0iOyBwbGVhc2Ugb3BlbiBhbiBpc3N1ZSAoaHR0cHM6Ly9naXRodWIuY29tL2V4dGlzbS9qcy1zZGsvaXNzdWVzL25ldz90aXRsZT1zaGFyZWQrYXJyYXkrYnVmZmVyK2JhZCtzZWN0aW9uK3R5cGUrJHtsfSZsYWJlbHM9YnVnKWApfX13aGlsZSgxKX19O25ldyBqKHEpO3ZhciBnPWNsYXNze2lucHV0O2ZsYWc7aW5wdXRPZmZzZXQ7c2NyYXRjaDtzY3JhdGNoVmlldztleHBlY3RlZDtjb25zdHJ1Y3Rvcih0KXt0aGlzLmlucHV0PXQsdGhpcy5pbnB1dE9mZnNldD1nLlNBQl9CQVNFX09GRlNFVCx0aGlzLmZsYWc9bmV3IEludDMyQXJyYXkodGhpcy5pbnB1dCksdGhpcy5zY3JhdGNoPW5ldyBBcnJheUJ1ZmZlcig4KSx0aGlzLnNjcmF0Y2hWaWV3PW5ldyBEYXRhVmlldyh0aGlzLnNjcmF0Y2gpLHRoaXMuZXhwZWN0ZWQ9MCx0aGlzLnB1bGwoITEpfWdldCBhdmFpbGFibGUoKXtyZXR1cm4gdGhpcy5mbGFnWzBdLXRoaXMuaW5wdXRPZmZzZXR9Y2xvc2UoKXtmb3IoO0F0b21pY3MuY29tcGFyZUV4Y2hhbmdlKHRoaXMuZmxhZyxnLlNBQl9JRFgsdGhpcy5leHBlY3RlZCxnLlNBQl9CQVNFX09GRlNFVCkhPT1nLlNBQl9CQVNFX09GRlNFVDspO0F0b21pY3Mubm90aWZ5KHRoaXMuZmxhZyxnLlNBQl9JRFgsUCl9cHVsbCh0PSEwKXtpZih0KXtmb3IoO0F0b21pY3MuY29tcGFyZUV4Y2hhbmdlKHRoaXMuZmxhZyxnLlNBQl9JRFgsdGhpcy5leHBlY3RlZCxnLlNBQl9CQVNFX09GRlNFVCkhPT1nLlNBQl9CQVNFX09GRlNFVDspO0F0b21pY3Mubm90aWZ5KHRoaXMuZmxhZyxnLlNBQl9JRFgsUCl9bGV0IHI9QXRvbWljcy53YWl0KHRoaXMuZmxhZywwLGcuU0FCX0JBU0VfT0ZGU0VULFApO2lmKHRoaXMuZXhwZWN0ZWQ9QXRvbWljcy5sb2FkKHRoaXMuZmxhZywwKSxyPT09InRpbWVkLW91dCIpdGhyb3cgbmV3IEVycm9yKGBXb3JrZXIgdGltZWQgb3V0IHdhaXRpbmcgZm9yIHJlc3BvbnNlIGZyb20gaG9zdCBhZnRlciAke1B9bXMgJHt0aGlzLmZsYWdbMF19YCk7dGhpcy5pbnB1dE9mZnNldD1nLlNBQl9CQVNFX09GRlNFVH1yZWFkKHQpe2lmKHQuYnl0ZUxlbmd0aDx0aGlzLmF2YWlsYWJsZSl7dC5zZXQobmV3IFVpbnQ4QXJyYXkodGhpcy5pbnB1dCkuc3ViYXJyYXkodGhpcy5pbnB1dE9mZnNldCx0aGlzLmlucHV0T2Zmc2V0K3QuYnl0ZUxlbmd0aCkpLHRoaXMuaW5wdXRPZmZzZXQrPXQuYnl0ZUxlbmd0aDtyZXR1cm59bGV0IHI9MCxzPXRoaXMuYXZhaWxhYmxlO2Rve2lmKHQuc2V0KG5ldyBVaW50OEFycmF5KHRoaXMuaW5wdXQpLnN1YmFycmF5KHRoaXMuaW5wdXRPZmZzZXQsdGhpcy5pbnB1dE9mZnNldCtzKSxyKSxyKz1zLHRoaXMuaW5wdXRPZmZzZXQrPXMscj09PXQuYnl0ZUxlbmd0aHx8dGhpcy5hdmFpbGFibGU8MClicmVhazt0aGlzLnB1bGwoKSxzPU1hdGgubWluKE1hdGgubWF4KHRoaXMuYXZhaWxhYmxlLDApLHQuYnl0ZUxlbmd0aC1yKX13aGlsZShyIT09dC5ieXRlTGVuZ3RoKX1yZWFkVWludDgoKXtyZXR1cm4gdGhpcy5yZWFkKG5ldyBVaW50OEFycmF5KHRoaXMuc2NyYXRjaCkuc3ViYXJyYXkoMCwxKSksdGhpcy5zY3JhdGNoVmlldy5nZXRVaW50OCgwKX1yZWFkVWludDMyKCl7cmV0dXJuIHRoaXMucmVhZChuZXcgVWludDhBcnJheSh0aGlzLnNjcmF0Y2gpLnN1YmFycmF5KDAsNCkpLHRoaXMuc2NyYXRjaFZpZXcuZ2V0VWludDMyKDAsITApfXJlYWRVaW50NjQoKXtyZXR1cm4gdGhpcy5yZWFkKG5ldyBVaW50OEFycmF5KHRoaXMuc2NyYXRjaCkpLHRoaXMuc2NyYXRjaFZpZXcuZ2V0QmlnVWludDY0KDAsITApfXJlYWRGbG9hdDY0KCl7cmV0dXJuIHRoaXMucmVhZChuZXcgVWludDhBcnJheSh0aGlzLnNjcmF0Y2gpKSx0aGlzLnNjcmF0Y2hWaWV3LmdldEZsb2F0NjQoMCwhMCl9fSxPPWc7RyhPLCJTQUJfSURYIiwwKSxHKE8sIlNBQl9CQVNFX09GRlNFVCIsNCk7Ci8vIyBzb3VyY2VNYXBwaW5nVVJMPXdvcmtlci5qcy5tYXAK");
var se = /* @__PURE__ */ new WeakMap();
var ut = class extends (window.Worker || Object) {
  constructor(t) {
    super(t, { type: "module", credentials: "omit", name: "extism-worker", crossOriginIsolated: true });
  }
  on(t, e) {
    let s = (n) => e(n.data);
    se.set(e, s), this.addEventListener(t, s);
  }
  removeListener(t, e) {
    let s = se.get(e);
    s && this.removeEventListener(t, s);
  }
  once(t, e) {
    let s = this;
    this.addEventListener(t, function n(...i) {
      s.removeEventListener(t, n), e.call(s, ...i);
    });
  }
};
var Ve = ze(fe(), 1);
var ht = (r) => {
  if (typeof r != "string")
    throw new TypeError("invalid pattern");
  if (r.length > 65536)
    throw new TypeError("pattern is too long");
};
var ss = { "[:alnum:]": ["\\p{L}\\p{Nl}\\p{Nd}", true], "[:alpha:]": ["\\p{L}\\p{Nl}", true], "[:ascii:]": ["\\x00-\\x7f", false], "[:blank:]": ["\\p{Zs}\\t", true], "[:cntrl:]": ["\\p{Cc}", true], "[:digit:]": ["\\p{Nd}", true], "[:graph:]": ["\\p{Z}\\p{C}", true, true], "[:lower:]": ["\\p{Ll}", true], "[:print:]": ["\\p{C}", true], "[:punct:]": ["\\p{P}", true], "[:space:]": ["\\p{Z}\\t\\r\\n\\v\\f", true], "[:upper:]": ["\\p{Lu}", true], "[:word:]": ["\\p{L}\\p{Nl}\\p{Nd}\\p{Pc}", true], "[:xdigit:]": ["A-Fa-f0-9", false] };
var mt = (r) => r.replace(/[[\]\\-]/g, "\\$&");
var ns = (r) => r.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
var be = (r) => r.join("");
var Ze = (r, t) => {
  let e = t;
  if (r.charAt(e) !== "[")
    throw new Error("not in a brace expression");
  let s = [], n = [], i = e + 1, o = false, l = false, a = false, c = false, u = e, m = "";
  t:
  for (; i < r.length;) {
    let p = r.charAt(i);
    if ((p === "!" || p === "^") && i === e + 1) {
      c = true, i++;
      continue;
    }
    if (p === "]" && o && !a) {
      u = i + 1;
      break;
    }
    if (o = true, p === "\\" && !a) {
      a = true, i++;
      continue;
    }
    if (p === "[" && !a) {
      for (let [R, [G, w, C]] of Object.entries(ss))
        if (r.startsWith(R, i)) {
          if (m)
            return ["$.", false, r.length - e, true];
          i += R.length, C ? n.push(G) : s.push(G), l = l || w;
          continue t;
        }
    }
    if (a = false, m) {
      p > m ? s.push(mt(m) + "-" + mt(p)) : p === m && s.push(mt(p)), m = "", i++;
      continue;
    }
    if (r.startsWith("-]", i + 1)) {
      s.push(mt(p + "-")), i += 2;
      continue;
    }
    if (r.startsWith("-", i + 1)) {
      m = p, i += 2;
      continue;
    }
    s.push(mt(p)), i++;
  }
  if (u < i)
    return ["", false, 0, false];
  if (!s.length && !n.length)
    return ["$.", false, r.length - e, true];
  if (n.length === 0 && s.length === 1 && /^\\?.$/.test(s[0]) && !c) {
    let p = s[0].length === 2 ? s[0].slice(-1) : s[0];
    return [ns(p), false, u - e, false];
  }
  let d = "[" + (c ? "^" : "") + be(s) + "]", f = "[" + (c ? "" : "^") + be(n) + "]";
  return [s.length && n.length ? "(" + d + "|" + f + ")" : s.length ? d : f, l, u - e, true];
};
var A = (r, { windowsPathsNoEscape: t = false } = {}) => t ? r.replace(/\[([^\/\\])\]/g, "$1") : r.replace(/((?!\\).|^)\[([^\/\\])\]/g, "$1$2").replace(/\\([^\/])/g, "$1");
var is = /* @__PURE__ */ new Set(["!", "?", "+", "*", "@"]);
var ye = (r) => is.has(r);
var rs = "(?!(?:^|/)\\.\\.?(?:$|/))";
var xt = "(?!\\.)";
var os = /* @__PURE__ */ new Set(["[", "."]);
var ls = /* @__PURE__ */ new Set(["..", "."]);
var as = new Set("().*{}+?[]^$\\!");
var cs = (r) => r.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
var kt = "[^/]";
var Ge = kt + "*?";
var Xe = kt + "+?";
var V;
var I;
var T;
var X;
var x;
var P;
var $;
var v;
var Y;
var q;
var pt;
var Vt;
var Re;
var et;
var Wt;
var ft;
var Kt;
var It;
var ge;
var S = class {
  constructor(t, e, s = {}) {
    W(this, Vt);
    W(this, ft);
    it(this, "type");
    W(this, V, void 0);
    W(this, I, void 0);
    W(this, T, false);
    W(this, X, []);
    W(this, x, void 0);
    W(this, P, void 0);
    W(this, $, void 0);
    W(this, v, false);
    W(this, Y, void 0);
    W(this, q, void 0);
    W(this, pt, false);
    this.type = t, t && g(this, I, true), g(this, x, e), g(this, V, h(this, x) ? h(h(this, x), V) : this), g(this, Y, h(this, V) === this ? s : h(h(this, V), Y)), g(this, $, h(this, V) === this ? [] : h(h(this, V), $)), t === "!" && !h(h(this, V), v) && h(this, $).push(this), g(this, P, h(this, x) ? h(h(this, x), X).length : 0);
  }
  get hasMagic() {
    if (h(this, I) !== void 0)
      return h(this, I);
    for (let t of h(this, X))
      if (typeof t != "string" && (t.type || t.hasMagic))
        return g(this, I, true);
    return h(this, I);
  }
  toString() {
    return h(this, q) !== void 0 ? h(this, q) : this.type ? g(this, q, this.type + "(" + h(this, X).map((t) => String(t)).join("|") + ")") : g(this, q, h(this, X).map((t) => String(t)).join(""));
  }
  push(...t) {
    for (let e of t)
      if (e !== "") {
        if (typeof e != "string" && !(e instanceof S && h(e, x) === this))
          throw new Error("invalid part: " + e);
        h(this, X).push(e);
      }
  }
  toJSON() {
    let t = this.type === null ? h(this, X).slice().map((e) => typeof e == "string" ? e : e.toJSON()) : [this.type, ...h(this, X).map((e) => e.toJSON())];
    return this.isStart() && !this.type && t.unshift([]), this.isEnd() && (this === h(this, V) || h(h(this, V), v) && h(this, x)?.type === "!") && t.push({}), t;
  }
  isStart() {
    if (h(this, V) === this)
      return true;
    if (!h(this, x)?.isStart())
      return false;
    if (h(this, P) === 0)
      return true;
    let t = h(this, x);
    for (let e = 0; e < h(this, P); e++) {
      let s = h(t, X)[e];
      if (!(s instanceof S && s.type === "!"))
        return false;
    }
    return true;
  }
  isEnd() {
    if (h(this, V) === this || h(this, x)?.type === "!")
      return true;
    if (!h(this, x)?.isEnd())
      return false;
    if (!this.type)
      return h(this, x)?.isEnd();
    let t = h(this, x) ? h(h(this, x), X).length : 0;
    return h(this, P) === t - 1;
  }
  copyIn(t) {
    typeof t == "string" ? this.push(t) : this.push(t.clone(this));
  }
  clone(t) {
    let e = new S(this.type, t);
    for (let s of h(this, X))
      e.copyIn(s);
    return e;
  }
  static fromGlob(t, e = {}) {
    var n;
    let s = new S(null, void 0, e);
    return z(n = S, et, Wt).call(n, t, s, 0, e), s;
  }
  toMMPattern() {
    if (this !== h(this, V))
      return h(this, V).toMMPattern();
    let t = this.toString(), [e, s, n, i] = this.toRegExpSource();
    if (!(n || h(this, I) || h(this, Y).nocase && !h(this, Y).nocaseMagicOnly && t.toUpperCase() !== t.toLowerCase()))
      return s;
    let l = (h(this, Y).nocase ? "i" : "") + (i ? "u" : "");
    return Object.assign(new RegExp(`^${e}$`, l), { _src: e, _glob: t });
  }
  toRegExpSource(t) {
    let e = t ?? !!h(this, Y).dot;
    if (h(this, V) === this && z(this, Vt, Re).call(this), !this.type) {
      let a = this.isStart() && this.isEnd(), c = h(this, X).map((f) => {
        var w;
        let [b, p, R, G] = typeof f == "string" ? z(w = S, It, ge).call(w, f, h(this, I), a) : f.toRegExpSource(t);
        return g(this, I, h(this, I) || R), g(this, T, h(this, T) || G), b;
      }).join(""), u = "";
      if (this.isStart() && typeof h(this, X)[0] == "string" && !(h(this, X).length === 1 && ls.has(h(this, X)[0]))) {
        let b = os, p = e && b.has(c.charAt(0)) || c.startsWith("\\.") && b.has(c.charAt(2)) || c.startsWith("\\.\\.") && b.has(c.charAt(4)), R = !e && !t && b.has(c.charAt(0));
        u = p ? rs : R ? xt : "";
      }
      let m = "";
      return this.isEnd() && h(h(this, V), v) && h(this, x)?.type === "!" && (m = "(?:$|\\/)"), [u + c + m, A(c), g(this, I, !!h(this, I)), h(this, T)];
    }
    let s = this.type === "*" || this.type === "+", n = this.type === "!" ? "(?:(?!(?:" : "(?:", i = z(this, ft, Kt).call(this, e);
    if (this.isStart() && this.isEnd() && !i && this.type !== "!") {
      let a = this.toString();
      return g(this, X, [a]), this.type = null, g(this, I, void 0), [a, A(this.toString()), false, false];
    }
    let o = !s || t || e || !xt ? "" : z(this, ft, Kt).call(this, true);
    o === i && (o = ""), o && (i = `(?:${i})(?:${o})*?`);
    let l = "";
    if (this.type === "!" && h(this, pt))
      l = (this.isStart() && !e ? xt : "") + Xe;
    else {
      let a = this.type === "!" ? "))" + (this.isStart() && !e && !t ? xt : "") + Ge + ")" : this.type === "@" ? ")" : this.type === "?" ? ")?" : this.type === "+" && o ? ")" : this.type === "*" && o ? ")?" : `)${this.type}`;
      l = n + i + a;
    }
    return [l, A(i), g(this, I, !!h(this, I)), h(this, T)];
  }
};
var U = S;
V = /* @__PURE__ */ new WeakMap(), I = /* @__PURE__ */ new WeakMap(), T = /* @__PURE__ */ new WeakMap(), X = /* @__PURE__ */ new WeakMap(), x = /* @__PURE__ */ new WeakMap(), P = /* @__PURE__ */ new WeakMap(), $ = /* @__PURE__ */ new WeakMap(), v = /* @__PURE__ */ new WeakMap(), Y = /* @__PURE__ */ new WeakMap(), q = /* @__PURE__ */ new WeakMap(), pt = /* @__PURE__ */ new WeakMap(), Vt = /* @__PURE__ */ new WeakSet(), Re = function () {
  if (this !== h(this, V))
    throw new Error("should only call on root");
  if (h(this, v))
    return this;
  this.toString(), g(this, v, true);
  let t;
  for (; t = h(this, $).pop();) {
    if (t.type !== "!")
      continue;
    let e = t, s = h(e, x);
    for (; s;) {
      for (let n = h(e, P) + 1; !s.type && n < h(s, X).length; n++)
        for (let i of h(t, X)) {
          if (typeof i == "string")
            throw new Error("string part in extglob AST??");
          i.copyIn(h(s, X)[n]);
        }
      e = s, s = h(e, x);
    }
  }
  return this;
}, et = /* @__PURE__ */ new WeakSet(), Wt = function (t, e, s, n) {
  var f, b;
  let i = false, o = false, l = -1, a = false;
  if (e.type === null) {
    let p = s, R = "";
    for (; p < t.length;) {
      let G = t.charAt(p++);
      if (i || G === "\\") {
        i = !i, R += G;
        continue;
      }
      if (o) {
        p === l + 1 ? (G === "^" || G === "!") && (a = true) : G === "]" && !(p === l + 2 && a) && (o = false), R += G;
        continue;
      } else if (G === "[") {
        o = true, l = p, a = false, R += G;
        continue;
      }
      if (!n.noext && ye(G) && t.charAt(p) === "(") {
        e.push(R), R = "";
        let w = new S(G, e);
        p = z(f = S, et, Wt).call(f, t, w, p, n), e.push(w);
        continue;
      }
      R += G;
    }
    return e.push(R), p;
  }
  let c = s + 1, u = new S(null, e), m = [], d = "";
  for (; c < t.length;) {
    let p = t.charAt(c++);
    if (i || p === "\\") {
      i = !i, d += p;
      continue;
    }
    if (o) {
      c === l + 1 ? (p === "^" || p === "!") && (a = true) : p === "]" && !(c === l + 2 && a) && (o = false), d += p;
      continue;
    } else if (p === "[") {
      o = true, l = c, a = false, d += p;
      continue;
    }
    if (ye(p) && t.charAt(c) === "(") {
      u.push(d), d = "";
      let R = new S(p, u);
      u.push(R), c = z(b = S, et, Wt).call(b, t, R, c, n);
      continue;
    }
    if (p === "|") {
      u.push(d), d = "", m.push(u), u = new S(null, e);
      continue;
    }
    if (p === ")")
      return d === "" && h(e, X).length === 0 && g(e, pt, true), u.push(d), d = "", e.push(...m, u), c;
    d += p;
  }
  return e.type = null, g(e, I, void 0), g(e, X, [t.substring(s - 1)]), c;
}, ft = /* @__PURE__ */ new WeakSet(), Kt = function (t) {
  return h(this, X).map((e) => {
    if (typeof e == "string")
      throw new Error("string type in extglob ast??");
    let [s, n, i, o] = e.toRegExpSource(t);
    return g(this, T, h(this, T) || o), s;
  }).filter((e) => !(this.isStart() && this.isEnd()) || !!e).join("|");
}, It = /* @__PURE__ */ new WeakSet(), ge = function (t, e, s = false) {
  let n = false, i = "", o = false;
  for (let l = 0; l < t.length; l++) {
    let a = t.charAt(l);
    if (n) {
      n = false, i += (as.has(a) ? "\\" : "") + a;
      continue;
    }
    if (a === "\\") {
      l === t.length - 1 ? i += "\\\\" : n = true;
      continue;
    }
    if (a === "[") {
      let [c, u, m, d] = Ze(t, l);
      if (m) {
        i += c, o = o || u, l += m - 1, e = e || d;
        continue;
      }
    }
    if (a === "*") {
      s && t === "*" ? i += Xe : i += Ge, e = true;
      continue;
    }
    if (a === "?") {
      i += kt, e = true;
      continue;
    }
    i += cs(a);
  }
  return [i, A(t), !!e, o];
}, W(U, et), W(U, It);
var zt = (r, { windowsPathsNoEscape: t = false } = {}) => t ? r.replace(/[?*()[\]]/g, "[$&]") : r.replace(/[?*()[\]\\]/g, "\\$&");
var L = (r, t, e = {}) => (ht(t), !e.nocomment && t.charAt(0) === "#" ? false : new st(t, e).match(r));
var us = /^\*+([^+@!?\*\[\(]*)$/;
var ds = (r) => (t) => !t.startsWith(".") && t.endsWith(r);
var hs = (r) => (t) => t.endsWith(r);
var ms = (r) => (r = r.toLowerCase(), (t) => !t.startsWith(".") && t.toLowerCase().endsWith(r));
var ps = (r) => (r = r.toLowerCase(), (t) => t.toLowerCase().endsWith(r));
var fs = /^\*+\.\*+$/;
var bs = (r) => !r.startsWith(".") && r.includes(".");
var Zs = (r) => r !== "." && r !== ".." && r.includes(".");
var ys = /^\.\*+$/;
var Gs = (r) => r !== "." && r !== ".." && r.startsWith(".");
var Xs = /^\*+$/;
var Rs = (r) => r.length !== 0 && !r.startsWith(".");
var gs = (r) => r.length !== 0 && r !== "." && r !== "..";
var xs = /^\?+([^+@!?\*\[\(]*)?$/;
var Ws = ([r, t = ""]) => {
  let e = Ie([r]);
  return t ? (t = t.toLowerCase(), (s) => e(s) && s.toLowerCase().endsWith(t)) : e;
};
var Vs = ([r, t = ""]) => {
  let e = Le([r]);
  return t ? (t = t.toLowerCase(), (s) => e(s) && s.toLowerCase().endsWith(t)) : e;
};
var Is = ([r, t = ""]) => {
  let e = Le([r]);
  return t ? (s) => e(s) && s.endsWith(t) : e;
};
var Ls = ([r, t = ""]) => {
  let e = Ie([r]);
  return t ? (s) => e(s) && s.endsWith(t) : e;
};
var Ie = ([r]) => {
  let t = r.length;
  return (e) => e.length === t && !e.startsWith(".");
};
var Le = ([r]) => {
  let t = r.length;
  return (e) => e.length === t && e !== "." && e !== "..";
};
var we = typeof process == "object" && process ? typeof process.env == "object" && process.env && process.env.__MINIMATCH_TESTING_PLATFORM__ || process.platform : "posix";
var xe = { win32: { sep: "\\" }, posix: { sep: "/" } };
var ws = we === "win32" ? xe.win32.sep : xe.posix.sep;
L.sep = ws;
var E = Symbol("globstar **");
L.GLOBSTAR = E;
var Ss = "[^/]";
var Ns = Ss + "*?";
var _s = "(?:(?!(?:\\/|^)(?:\\.{1,2})($|\\/)).)*?";
var Es = "(?:(?!(?:\\/|^)\\.).)*?";
var Fs = (r, t = {}) => (e) => L(e, r, t);
L.filter = Fs;
var _ = (r, t = {}) => Object.assign({}, r, t);
var Cs = (r) => {
  if (!r || typeof r != "object" || !Object.keys(r).length)
    return L;
  let t = L;
  return Object.assign((s, n, i = {}) => t(s, n, _(r, i)), {
    Minimatch: class extends t.Minimatch {
      constructor(n, i = {}) {
        super(n, _(r, i));
      }
      static defaults(n) {
        return t.defaults(_(r, n)).Minimatch;
      }
    }, AST: class extends t.AST {
      constructor(n, i, o = {}) {
        super(n, i, _(r, o));
      }
      static fromGlob(n, i = {}) {
        return t.AST.fromGlob(n, _(r, i));
      }
    }, unescape: (s, n = {}) => t.unescape(s, _(r, n)), escape: (s, n = {}) => t.escape(s, _(r, n)), filter: (s, n = {}) => t.filter(s, _(r, n)), defaults: (s) => t.defaults(_(r, s)), makeRe: (s, n = {}) => t.makeRe(s, _(r, n)), braceExpand: (s, n = {}) => t.braceExpand(s, _(r, n)), match: (s, n, i = {}) => t.match(s, n, _(r, i)), sep: t.sep, GLOBSTAR: E
  });
};
L.defaults = Cs;
var Se = (r, t = {}) => (ht(r), t.nobrace || !/\{(?:(?!\{).)*\}/.test(r) ? [r] : (0, Ve.default)(r));
L.braceExpand = Se;
var Hs = (r, t = {}) => new st(r, t).makeRe();
L.makeRe = Hs;
var Ts = (r, t, e = {}) => {
  let s = new st(t, e);
  return r = r.filter((n) => s.match(n)), s.options.nonull && !r.length && r.push(t), r;
};
L.match = Ts;
var We = /[?*]|[+@!]\(.*?\)|\[|\]/;
var Ys = (r) => r.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
var st = class {
  options;
  set;
  pattern;
  windowsPathsNoEscape;
  nonegate;
  negate;
  comment;
  empty;
  preserveMultipleSlashes;
  partial;
  globSet;
  globParts;
  nocase;
  isWindows;
  platform;
  windowsNoMagicRoot;
  regexp;
  constructor(t, e = {}) {
    ht(t), e = e || {}, this.options = e, this.pattern = t, this.platform = e.platform || we, this.isWindows = this.platform === "win32", this.windowsPathsNoEscape = !!e.windowsPathsNoEscape || e.allowWindowsEscape === false, this.windowsPathsNoEscape && (this.pattern = this.pattern.replace(/\\/g, "/")), this.preserveMultipleSlashes = !!e.preserveMultipleSlashes, this.regexp = null, this.negate = false, this.nonegate = !!e.nonegate, this.comment = false, this.empty = false, this.partial = !!e.partial, this.nocase = !!this.options.nocase, this.windowsNoMagicRoot = e.windowsNoMagicRoot !== void 0 ? e.windowsNoMagicRoot : !!(this.isWindows && this.nocase), this.globSet = [], this.globParts = [], this.set = [], this.make();
  }
  hasMagic() {
    if (this.options.magicalBraces && this.set.length > 1)
      return true;
    for (let t of this.set)
      for (let e of t)
        if (typeof e != "string")
          return true;
    return false;
  }
  debug(...t) {
  }
  make() {
    let t = this.pattern, e = this.options;
    if (!e.nocomment && t.charAt(0) === "#") {
      this.comment = true;
      return;
    }
    if (!t) {
      this.empty = true;
      return;
    }
    this.parseNegate(), this.globSet = [...new Set(this.braceExpand())], e.debug && (this.debug = (...i) => console.error(...i)), this.debug(this.pattern, this.globSet);
    let s = this.globSet.map((i) => this.slashSplit(i));
    this.globParts = this.preprocess(s), this.debug(this.pattern, this.globParts);
    let n = this.globParts.map((i, o, l) => {
      if (this.isWindows && this.windowsNoMagicRoot) {
        let a = i[0] === "" && i[1] === "" && (i[2] === "?" || !We.test(i[2])) && !We.test(i[3]), c = /^[a-z]:/i.test(i[0]);
        if (a)
          return [...i.slice(0, 4), ...i.slice(4).map((u) => this.parse(u))];
        if (c)
          return [i[0], ...i.slice(1).map((u) => this.parse(u))];
      }
      return i.map((a) => this.parse(a));
    });
    if (this.debug(this.pattern, n), this.set = n.filter((i) => i.indexOf(false) === -1), this.isWindows)
      for (let i = 0; i < this.set.length; i++) {
        let o = this.set[i];
        o[0] === "" && o[1] === "" && this.globParts[i][2] === "?" && typeof o[3] == "string" && /^[a-z]:$/i.test(o[3]) && (o[2] = "?");
      }
    this.debug(this.pattern, this.set);
  }
  preprocess(t) {
    if (this.options.noglobstar)
      for (let s = 0; s < t.length; s++)
        for (let n = 0; n < t[s].length; n++)
          t[s][n] === "**" && (t[s][n] = "*");
    let { optimizationLevel: e = 1 } = this.options;
    return e >= 2 ? (t = this.firstPhasePreProcess(t), t = this.secondPhasePreProcess(t)) : e >= 1 ? t = this.levelOneOptimize(t) : t = this.adjascentGlobstarOptimize(t), t;
  }
  adjascentGlobstarOptimize(t) {
    return t.map((e) => {
      let s = -1;
      for (; (s = e.indexOf("**", s + 1)) !== -1;) {
        let n = s;
        for (; e[n + 1] === "**";)
          n++;
        n !== s && e.splice(s, n - s);
      }
      return e;
    });
  }
  levelOneOptimize(t) {
    return t.map((e) => (e = e.reduce((s, n) => {
      let i = s[s.length - 1];
      return n === "**" && i === "**" ? s : n === ".." && i && i !== ".." && i !== "." && i !== "**" ? (s.pop(), s) : (s.push(n), s);
    }, []), e.length === 0 ? [""] : e));
  }
  levelTwoFileOptimize(t) {
    Array.isArray(t) || (t = this.slashSplit(t));
    let e = false;
    do {
      if (e = false, !this.preserveMultipleSlashes) {
        for (let n = 1; n < t.length - 1; n++) {
          let i = t[n];
          n === 1 && i === "" && t[0] === "" || (i === "." || i === "") && (e = true, t.splice(n, 1), n--);
        }
        t[0] === "." && t.length === 2 && (t[1] === "." || t[1] === "") && (e = true, t.pop());
      }
      let s = 0;
      for (; (s = t.indexOf("..", s + 1)) !== -1;) {
        let n = t[s - 1];
        n && n !== "." && n !== ".." && n !== "**" && (e = true, t.splice(s - 1, 2), s -= 2);
      }
    } while (e);
    return t.length === 0 ? [""] : t;
  }
  firstPhasePreProcess(t) {
    let e = false;
    do {
      e = false;
      for (let s of t) {
        let n = -1;
        for (; (n = s.indexOf("**", n + 1)) !== -1;) {
          let o = n;
          for (; s[o + 1] === "**";)
            o++;
          o > n && s.splice(n + 1, o - n);
          let l = s[n + 1], a = s[n + 2], c = s[n + 3];
          if (l !== ".." || !a || a === "." || a === ".." || !c || c === "." || c === "..")
            continue;
          e = true, s.splice(n, 1);
          let u = s.slice(0);
          u[n] = "**", t.push(u), n--;
        }
        if (!this.preserveMultipleSlashes) {
          for (let o = 1; o < s.length - 1; o++) {
            let l = s[o];
            o === 1 && l === "" && s[0] === "" || (l === "." || l === "") && (e = true, s.splice(o, 1), o--);
          }
          s[0] === "." && s.length === 2 && (s[1] === "." || s[1] === "") && (e = true, s.pop());
        }
        let i = 0;
        for (; (i = s.indexOf("..", i + 1)) !== -1;) {
          let o = s[i - 1];
          if (o && o !== "." && o !== ".." && o !== "**") {
            e = true;
            let a = i === 1 && s[i + 1] === "**" ? ["."] : [];
            s.splice(i - 1, 2, ...a), s.length === 0 && s.push(""), i -= 2;
          }
        }
      }
    } while (e);
    return t;
  }
  secondPhasePreProcess(t) {
    for (let e = 0; e < t.length - 1; e++)
      for (let s = e + 1; s < t.length; s++) {
        let n = this.partsMatch(t[e], t[s], !this.preserveMultipleSlashes);
        !n || (t[e] = n, t[s] = []);
      }
    return t.filter((e) => e.length);
  }
  partsMatch(t, e, s = false) {
    let n = 0, i = 0, o = [], l = "";
    for (; n < t.length && i < e.length;)
      if (t[n] === e[i])
        o.push(l === "b" ? e[i] : t[n]), n++, i++;
      else if (s && t[n] === "**" && e[i] === t[n + 1])
        o.push(t[n]), n++;
      else if (s && e[i] === "**" && t[n] === e[i + 1])
        o.push(e[i]), i++;
      else if (t[n] === "*" && e[i] && (this.options.dot || !e[i].startsWith(".")) && e[i] !== "**") {
        if (l === "b")
          return false;
        l = "a", o.push(t[n]), n++, i++;
      } else if (e[i] === "*" && t[n] && (this.options.dot || !t[n].startsWith(".")) && t[n] !== "**") {
        if (l === "a")
          return false;
        l = "b", o.push(e[i]), n++, i++;
      } else
        return false;
    return t.length === e.length && o;
  }
  parseNegate() {
    if (this.nonegate)
      return;
    let t = this.pattern, e = false, s = 0;
    for (let n = 0; n < t.length && t.charAt(n) === "!"; n++)
      e = !e, s++;
    s && (this.pattern = t.slice(s)), this.negate = e;
  }
  matchOne(t, e, s = false) {
    let n = this.options;
    if (this.isWindows) {
      let p = typeof t[0] == "string" && /^[a-z]:$/i.test(t[0]), R = !p && t[0] === "" && t[1] === "" && t[2] === "?" && /^[a-z]:$/i.test(t[3]), G = typeof e[0] == "string" && /^[a-z]:$/i.test(e[0]), w = !G && e[0] === "" && e[1] === "" && e[2] === "?" && typeof e[3] == "string" && /^[a-z]:$/i.test(e[3]), C = R ? 3 : p ? 0 : void 0, K = w ? 3 : G ? 0 : void 0;
      if (typeof C == "number" && typeof K == "number") {
        let [k, N] = [t[C], e[K]];
        k.toLowerCase() === N.toLowerCase() && (e[K] = k, K > C ? e = e.slice(K) : C > K && (t = t.slice(C)));
      }
    }
    let { optimizationLevel: i = 1 } = this.options;
    i >= 2 && (t = this.levelTwoFileOptimize(t)), this.debug("matchOne", this, { file: t, pattern: e }), this.debug("matchOne", t.length, e.length);
    for (var o = 0, l = 0, a = t.length, c = e.length; o < a && l < c; o++, l++) {
      this.debug("matchOne loop");
      var u = e[l], m = t[o];
      if (this.debug(e, u, m), u === false)
        return false;
      if (u === E) {
        this.debug("GLOBSTAR", [e, u, m]);
        var d = o, f = l + 1;
        if (f === c) {
          for (this.debug("** at the end"); o < a; o++)
            if (t[o] === "." || t[o] === ".." || !n.dot && t[o].charAt(0) === ".")
              return false;
          return true;
        }
        for (; d < a;) {
          var b = t[d];
          if (this.debug(`
globstar while`, t, d, e, f, b), this.matchOne(t.slice(d), e.slice(f), s))
            return this.debug("globstar found match!", d, a, b), true;
          if (b === "." || b === ".." || !n.dot && b.charAt(0) === ".") {
            this.debug("dot detected!", t, d, e, f);
            break;
          }
          this.debug("globstar swallow a segment, and continue"), d++;
        }
        return !!(s && (this.debug(`
>>> no match, partial?`, t, d, e, f), d === a));
      }
      let p;
      if (typeof u == "string" ? (p = m === u, this.debug("string match", u, m, p)) : (p = u.test(m), this.debug("pattern match", u, m, p)), !p)
        return false;
    }
    if (o === a && l === c)
      return true;
    if (o === a)
      return s;
    if (l === c)
      return o === a - 1 && t[o] === "";
    throw new Error("wtf?");
  }
  braceExpand() {
    return Se(this.pattern, this.options);
  }
  parse(t) {
    ht(t);
    let e = this.options;
    if (t === "**")
      return E;
    if (t === "")
      return "";
    let s, n = null;
    (s = t.match(Xs)) ? n = e.dot ? gs : Rs : (s = t.match(us)) ? n = (e.nocase ? e.dot ? ps : ms : e.dot ? hs : ds)(s[1]) : (s = t.match(xs)) ? n = (e.nocase ? e.dot ? Vs : Ws : e.dot ? Is : Ls)(s) : (s = t.match(fs)) ? n = e.dot ? Zs : bs : (s = t.match(ys)) && (n = Gs);
    let i = U.fromGlob(t, this.options).toMMPattern();
    return n ? Object.assign(i, { test: n }) : i;
  }
  makeRe() {
    if (this.regexp || this.regexp === false)
      return this.regexp;
    let t = this.set;
    if (!t.length)
      return this.regexp = false, this.regexp;
    let e = this.options, s = e.noglobstar ? Ns : e.dot ? _s : Es, n = new Set(e.nocase ? ["i"] : []), i = t.map((a) => {
      let c = a.map((u) => {
        if (u instanceof RegExp)
          for (let m of u.flags.split(""))
            n.add(m);
        return typeof u == "string" ? Ys(u) : u === E ? E : u._src;
      });
      return c.forEach((u, m) => {
        let d = c[m + 1], f = c[m - 1];
        u !== E || f === E || (f === void 0 ? d !== void 0 && d !== E ? c[m + 1] = "(?:\\/|" + s + "\\/)?" + d : c[m] = s : d === void 0 ? c[m - 1] = f + "(?:\\/|" + s + ")?" : d !== E && (c[m - 1] = f + "(?:\\/|\\/" + s + "\\/)" + d, c[m + 1] = E));
      }), c.filter((u) => u !== E).join("/");
    }).join("|"), [o, l] = t.length > 1 ? ["(?:", ")"] : ["", ""];
    i = "^" + o + i + l + "$", this.negate && (i = "^(?!" + i + ").+$");
    try {
      this.regexp = new RegExp(i, [...n].join(""));
    } catch {
      this.regexp = false;
    }
    return this.regexp;
  }
  slashSplit(t) {
    return this.preserveMultipleSlashes ? t.split("/") : this.isWindows && /^\/\/[^\/]+/.test(t) ? ["", ...t.split(/\/+/)] : t.split(/\/+/);
  }
  match(t, e = this.partial) {
    if (this.debug("match", t, this.pattern), this.comment)
      return false;
    if (this.empty)
      return t === "";
    if (t === "/" && e)
      return true;
    let s = this.options;
    this.isWindows && (t = t.split("\\").join("/"));
    let n = this.slashSplit(t);
    this.debug(this.pattern, "split", n);
    let i = this.set;
    this.debug(this.pattern, "set", i);
    let o = n[n.length - 1];
    if (!o)
      for (let l = n.length - 2; !o && l >= 0; l--)
        o = n[l];
    for (let l = 0; l < i.length; l++) {
      let a = i[l], c = n;
      if (s.matchBase && a.length === 1 && (c = [o]), this.matchOne(c, a, e))
        return s.flipNegate ? true : !this.negate;
    }
    return s.flipNegate ? false : this.negate;
  }
  static defaults(t) {
    return L.defaults(t).Minimatch;
  }
};
L.AST = U;
L.Minimatch = st;
L.escape = zt;
L.unescape = A;
function Ne(r, t) {
  return L(r, t);
}
var Ks = 5e3;
var ks = Atomics.waitAsync || (() => {
  let r = `onmessage = ev => {
    const [b, i, v] = ev.data
    const f = new Int32Array(b)
    postMessage(Atomics.wait(f, i, v));
  }`, t = new Blob([r], { type: "text/javascript" }), e = URL.createObjectURL(t), s = new ut(e);
  return (n, i, o) => {
    let l = new Promise((a) => {
      s.once("message", (c) => {
        a(c);
      });
    });
    return s.postMessage([n.buffer, i, o]), { async: true, value: l };
  };
})();
var Ot = class {
  worker;
  sharedData;
  sharedDataView;
  hostFlag;
  opts;
  #e;
  #t = null;
  constructor(t, e, s, n) {
    this.worker = t, this.sharedData = e, this.sharedDataView = new DataView(e), this.hostFlag = new Int32Array(e), this.opts = s, this.#e = n, this.hostFlag[0] = nt.SAB_BASE_OFFSET, this.worker.on("message", (i) => this.#s(i));
  }
  async reset() {
    return this.isActive() ? false : (await this.#i("reset"), this.#e[lt](), true);
  }
  isActive() {
    return Boolean(this.#t);
  }
  async #s(t) {
    switch (t?.type) {
      case "invoke":
        return this.#o(t);
      case "return":
        return this.#l(t);
      case "log":
        return this.#n(t);
    }
  }
  #n(t) {
    let e = this.opts.logger[t.level];
    typeof e != "function" ? this.opts.logger?.error(`failed to find loglevel="${t.level}" on logger: message=${t.message}`) : e.call(this.opts.logger, t.message);
  }
  #l(t) {
    let e = this.#t || null;
    if (e === null)
      throw new Error('received "return" call with no corresponding request');
    this.#t = null;
    let [s, n] = e;
    if (!Array.isArray(t.results) || t.results.length !== 2)
      return n(new Error('received malformed "return"'));
    let [i, o] = t.results;
    i ? n(i) : s(o);
  }
  async #i(t, ...e) {
    if (this.#t)
      throw new Error("plugin is not reentrant");
    let s, n, i = new Promise((o, l) => {
      s = o, n = l;
    });
    return this.#t = [s, n], this.worker.postMessage({ type: "invoke", handler: t, args: e }), i;
  }
  async functionExists(t) {
    return await this.#i("functionExists", t);
  }
  async call(t, e) {
    let s = this.#e[D](e), [n, i] = await this.callBlock(t, s), o = n !== null, l = n ?? i;
    if (l === null)
      return null;
    let a = this.#e[ot](l);
    if (a === null)
      return null;
    let c = new H(O.allowSharedBufferCodec ? a.buffer : new Uint8Array(a.buffer).slice().buffer);
    if (o) {
      let u = new TextDecoder().decode(c);
      throw new Error(`Plugin-originated error: ${u}`);
    }
    return c;
  }
  async callBlock(t, e) {
    let s = this.#e[Gt](), { results: n, state: i } = await this.#i("call", t, e, s);
    this.#e[yt](i, true);
    let [o, l] = n;
    if (o)
      throw o;
    return l;
  }
  async #o(t) {
    let e = new nt(this.sharedData), n = (this.opts.functions[t.namespace] ?? {})[t.func];
    try {
      if (!n)
        throw Error(`Plugin error: host function "${t.namespace}" "${t.func}" does not exist`);
      this.#e[yt](t.state, true);
      let i = await n(this.#e, ...t.args), { blocks: o } = this.#e[Gt](), l;
      for (let [a, c] of o)
        l = e.writeUint8(4), l && await l, l = e.writeUint32(c), l && await l, l = e.writeUint32(a?.byteLength || 0), l && await l, a && (l = e.write(a), l && await l);
      typeof i == "bigint" ? (l = e.writeUint8(1), l && await l, l = e.writeUint64(i), l && await l) : typeof i == "number" ? (l = e.writeUint8(2), l && await l, l = e.writeFloat64(i), l && await l) : (l = e.writeUint8(3), l && await l), l = e.writeUint8(0), l && await l, await e.flush();
    } catch (i) {
      this.close();
      let [, o] = this.#t;
      return this.#t = null, o(i);
    }
  }
  async getExports(t) {
    return await this.#i("getExports", t ?? "0");
  }
  async getImports(t) {
    return await this.#i("getImports", t ?? "0");
  }
  async getInstance() {
    throw new Error("todo");
  }
  async close() {
    this.worker && (this.worker.terminate(), this.worker = null);
  }
};
var Bt = class {
  fetch;
  lastStatusCode;
  allowedHosts;
  constructor(t, e) {
    this.fetch = t, this.allowedHosts = e, this.lastStatusCode = 0;
  }
  contribute(t) {
    t[ct] ??= {}, t[ct].http_request = (e, s, n) => this.makeRequest(e, s, n), t[ct].http_status_code = () => this.lastStatusCode;
  }
  async makeRequest(t, e, s) {
    let n = t.read(e);
    if (n === null)
      return 0n;
    let { header: i, url: o, method: l } = n.json(), a = l ?? "GET", c = new URL(o);
    if (!this.allowedHosts.some((p) => p === c.hostname || Ne(c.hostname, p)))
      throw new Error(`Call error: HTTP request to "${c}" is not allowed (no allowedHosts match "${c.hostname}")`);
    let m = s === 0n || a === "GET" || a === "HEAD" ? null : t.read(s)?.bytes(), d = this.fetch, f = await d(o, { headers: i, method: a, ...m ? { body: m.slice() } : {} });
    return this.lastStatusCode = f.status, t.store(new Uint8Array(await f.arrayBuffer()));
  }
};
async function _e(r, t, e) {
  let s = new ut(ee), n = new tt(SharedArrayBuffer, r.logger, r.config);
  new Bt(r.fetch, r.allowedHosts).contribute(r.functions), await new Promise((d, f) => {
    s.on("message", function b(p) {
      p?.type !== "initialized" && f(new Error(`received unexpected message (type=${p?.type})`)), s.removeListener("message", b), d(null);
    });
  });
  let o = new SharedArrayBuffer(r.sharedArrayBufferSize), { fetch: l, logger: a, ...c } = r, u = { ...c, type: "init", functions: Object.fromEntries(Object.entries(r.functions || {}).map(([d, f]) => [d, Object.keys(f)])), names: t, modules: e, sharedData: o }, m = new Promise((d, f) => {
    s.on("message", function b(p) {
      p?.type !== "ready" && f(new Error(`received unexpected message (type=${p?.type})`)), s.removeListener("message", b), d(null);
    });
  });
  return s.postMessage(u, e), await m, new Ot(s, o, r, n);
}
var F = class {
  output;
  scratch;
  scratchView;
  outputOffset;
  flag;
  constructor(t) {
    this.scratch = new ArrayBuffer(8), this.scratchView = new DataView(this.scratch), this.output = t, this.outputOffset = F.SAB_BASE_OFFSET, this.flag = new Int32Array(this.output);
  }
  async flush() {
    if (this.outputOffset === F.SAB_BASE_OFFSET)
      return;
    let t = this.outputOffset;
    for (this.outputOffset = F.SAB_BASE_OFFSET; Atomics.compareExchange(this.flag, F.SAB_IDX, F.SAB_BASE_OFFSET, t) !== t;)
      ;
    Atomics.notify(this.flag, F.SAB_IDX, 1);
    let e = ks(this.flag, F.SAB_IDX, t, Ks), s;
    try {
      s = setInterval(() => {
      }, 0), e.async && (e.value = await e.value);
    } finally {
      clearInterval(s);
    }
    if (e.value === "timed-out")
      throw new Error(`encountered timeout while flushing host function to worker memory ${this.flag[0]}`);
  }
  async spanningWrite(t) {
    let e = 0, s = this.output.byteLength - this.outputOffset, n = 1 + Math.floor((t.byteLength - s) / (this.output.byteLength - F.SAB_BASE_OFFSET)), i = (t.byteLength - s) % (this.output.byteLength - F.SAB_BASE_OFFSET);
    do
      new Uint8Array(this.output).set(t.subarray(e, e + s), this.outputOffset), this.outputOffset += s, e += s, await this.flush(), s = this.output.byteLength - F.SAB_BASE_OFFSET, --n;
    while (n != 0);
    i && this.write(t.subarray(e, e + i));
  }
  write(t) {
    if (t.byteLength + this.outputOffset < this.output.byteLength) {
      new Uint8Array(this.output).set(new Uint8Array(t), this.outputOffset), this.outputOffset += t.byteLength;
      return;
    }
    return this.spanningWrite(new Uint8Array(t));
  }
  writeUint8(t) {
    return this.scratchView.setUint8(0, t), this.write(this.scratch.slice(0, 1));
  }
  writeUint32(t) {
    return this.scratchView.setUint32(0, t, true), this.write(this.scratch.slice(0, 4));
  }
  writeUint64(t) {
    return this.scratchView.setBigUint64(0, t, true), this.write(this.scratch.slice(0, 8));
  }
  writeFloat64(t) {
    return this.scratchView.setFloat64(0, t, true), this.write(this.scratch.slice(0, 8));
  }
};
var nt = F;
it(nt, "SAB_IDX", 0), it(nt, "SAB_BASE_OFFSET", 4);
async function zs(r, t = {}) {
  if (r = await vt(await Promise.resolve(r)), t = { ...t }, t.useWasi ??= false, t.functions = t.functions || {}, t.allowedPaths ??= {}, t.allowedHosts ??= [].concat(t.allowedHosts || []), t.logger ??= console, t.config ??= {}, t.runInWorker ??= O.hasWorkerCapability, t.runInWorker && !O.hasWorkerCapability)
    throw new Error("Cannot enable off-thread wasm; current context is not `crossOriginIsolated` (see https://mdn.io/crossOriginIsolated)");
  let [e, s] = await Ut(r, t.fetch ?? fetch), n = { allowedHosts: t.allowedHosts, allowedPaths: t.allowedPaths, functions: t.functions, fetch: t.fetch || fetch, wasiEnabled: t.useWasi, logger: t.logger, config: t.config, sharedArrayBufferSize: Number(t.sharedArrayBufferSize) || 1 << 16 };
  return (t.runInWorker ? _e : te)(n, e, s);
}
var Wi = zs;

// src/index.tsx
var usePlugin = (manifest, options) => {
  const [plugin, setPlugin] = (0, import_react.useState)(null);
  const [loading, setLoading] = (0, import_react.useState)(false);
  (0, import_react.useEffect)(() => {
    setLoading(true);
    Wi(manifest, options).then((p) => {
      setPlugin(p);
    }).catch((e) => console.error(e)).finally(() => setLoading(false));
  }, [manifest, options]);
  return {
    plugin, loading, useFunction: makeUseFunction(plugin), makeUseVars: () => {
    }
  };
};
var makeUseFunction = (plugin) => {
  return (functionName, input) => {
    const [output, setOutput] = (0, import_react.useState)();
    const [loading, setLoading] = (0, import_react.useState)(false);
    (0, import_react.useEffect)(() => {
      setLoading(true);
      plugin?.call(functionName, input).then((v2) => {
        setOutput(v2);
      }).catch((e) => console.error(e)).finally(() => setLoading(false));
    }, [plugin, functionName, input]);
    return { output, loading };
  };
};
var makeUseVars = (plugin) => {
  return (functionName, input) => {
    const [output, setOutput] = (0, import_react.useState)();
    (0, import_react.useEffect)(() => {
      plugin?.call(functionName, input).then((v2) => {
        setOutput(v2);
      });
    }, [plugin]);
    return output;
  };
};
var ExtismPlugin = ({ source, functionName = "render", options, props, children }) => {
  const { plugin } = usePlugin(source);
  const [output, setOutput] = (0, import_react.useState)(null);
  (0, import_react.useEffect)(() => {
    plugin?.call(functionName, props).then((val) => {
      setOutput(val);
    }).catch((e) => {
      console.error(e);
    });
  }, [plugin, props]);
  if (!children) {
    return /* @__PURE__ */ import_react.default.createElement("div", { dangerouslySetInnerHTML: { __html: new TextDecoder().decode(output?.buffer) } });
  } else if (typeof children === "function") {
    return children(output);
  } else {
    return /* @__PURE__ */ import_react.default.createElement(import_react.default.Fragment, null, children);
  }
};
export {
  ExtismPlugin,
  makeUseFunction,
  makeUseVars,
  usePlugin
};
/*! Bundled license information:

react/cjs/react.development.js:
  (**
   * @license React
   * react.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)
*/
