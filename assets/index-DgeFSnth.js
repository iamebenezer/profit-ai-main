var r4 = Object.defineProperty;
var n4 = (t, e, r) => e in t ? r4(t, e, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: r
}) : t[e] = r;
var i4 = (t, e) => () => (e || t((e = {
    exports: {}
}).exports, e), e.exports);
var xn = (t, e, r) => n4(t, typeof e != "symbol" ? e + "" : e, r);
var $M = i4((VM, f1) => {
    function s4(t, e) {
        for (var r = 0; r < e.length; r++) {
            const n = e[r];
            if (typeof n != "string" && !Array.isArray(n)) {
                for (const i in n)
                    if (i !== "default" && !(i in t)) {
                        const s = Object.getOwnPropertyDescriptor(n, i);
                        s && Object.defineProperty(t, i, s.get ? s : {
                            enumerable: !0,
                            get: () => n[i]
                        })
                    }
            }
        }
        return Object.freeze(Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }))
    }(function() {
        const e = document.createElement("link").relList;
        if (e && e.supports && e.supports("modulepreload")) return;
        for (const i of document.querySelectorAll('link[rel="modulepreload"]')) n(i);
        new MutationObserver(i => {
            for (const s of i)
                if (s.type === "childList")
                    for (const o of s.addedNodes) o.tagName === "LINK" && o.rel === "modulepreload" && n(o)
        }).observe(document, {
            childList: !0,
            subtree: !0
        });

        function r(i) {
            const s = {};
            return i.integrity && (s.integrity = i.integrity), i.referrerPolicy && (s.referrerPolicy = i.referrerPolicy), i.crossOrigin === "use-credentials" ? s.credentials = "include" : i.crossOrigin === "anonymous" ? s.credentials = "omit" : s.credentials = "same-origin", s
        }

        function n(i) {
            if (i.ep) return;
            i.ep = !0;
            const s = r(i);
            fetch(i.href, s)
        }
    })();
    var Rl = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};

    function xl(t) {
        return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t
    }
    var em = {
            exports: {}
        },
        bu = {},
        tm = {
            exports: {}
        },
        re = {};
    /**
     * @license React
     * react.production.min.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */
    var _l = Symbol.for("react.element"),
        o4 = Symbol.for("react.portal"),
        a4 = Symbol.for("react.fragment"),
        l4 = Symbol.for("react.strict_mode"),
        u4 = Symbol.for("react.profiler"),
        c4 = Symbol.for("react.provider"),
        f4 = Symbol.for("react.context"),
        d4 = Symbol.for("react.forward_ref"),
        h4 = Symbol.for("react.suspense"),
        p4 = Symbol.for("react.memo"),
        m4 = Symbol.for("react.lazy"),
        Gd = Symbol.iterator;

    function g4(t) {
        return t === null || typeof t != "object" ? null : (t = Gd && t[Gd] || t["@@iterator"], typeof t == "function" ? t : null)
    }
    var rm = {
            isMounted: function() {
                return !1
            },
            enqueueForceUpdate: function() {},
            enqueueReplaceState: function() {},
            enqueueSetState: function() {}
        },
        nm = Object.assign,
        im = {};

    function ko(t, e, r) {
        this.props = t, this.context = e, this.refs = im, this.updater = r || rm
    }
    ko.prototype.isReactComponent = {};
    ko.prototype.setState = function(t, e) {
        if (typeof t != "object" && typeof t != "function" && t != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, t, e, "setState")
    };
    ko.prototype.forceUpdate = function(t) {
        this.updater.enqueueForceUpdate(this, t, "forceUpdate")
    };

    function sm() {}
    sm.prototype = ko.prototype;

    function d1(t, e, r) {
        this.props = t, this.context = e, this.refs = im, this.updater = r || rm
    }
    var h1 = d1.prototype = new sm;
    h1.constructor = d1;
    nm(h1, ko.prototype);
    h1.isPureReactComponent = !0;
    var Wd = Array.isArray,
        om = Object.prototype.hasOwnProperty,
        p1 = {
            current: null
        },
        am = {
            key: !0,
            ref: !0,
            __self: !0,
            __source: !0
        };

    function lm(t, e, r) {
        var n, i = {},
            s = null,
            o = null;
        if (e != null)
            for (n in e.ref !== void 0 && (o = e.ref), e.key !== void 0 && (s = "" + e.key), e) om.call(e, n) && !am.hasOwnProperty(n) && (i[n] = e[n]);
        var a = arguments.length - 2;
        if (a === 1) i.children = r;
        else if (1 < a) {
            for (var l = Array(a), u = 0; u < a; u++) l[u] = arguments[u + 2];
            i.children = l
        }
        if (t && t.defaultProps)
            for (n in a = t.defaultProps, a) i[n] === void 0 && (i[n] = a[n]);
        return {
            $$typeof: _l,
            type: t,
            key: s,
            ref: o,
            props: i,
            _owner: p1.current
        }
    }

    function v4(t, e) {
        return {
            $$typeof: _l,
            type: t.type,
            key: e,
            ref: t.ref,
            props: t.props,
            _owner: t._owner
        }
    }

    function m1(t) {
        return typeof t == "object" && t !== null && t.$$typeof === _l
    }

    function y4(t) {
        var e = {
            "=": "=0",
            ":": "=2"
        };
        return "$" + t.replace(/[=:]/g, function(r) {
            return e[r]
        })
    }
    var Qd = /\/+/g;

    function g2(t, e) {
        return typeof t == "object" && t !== null && t.key != null ? y4("" + t.key) : e.toString(36)
    }

    function p0(t, e, r, n, i) {
        var s = typeof t;
        (s === "undefined" || s === "boolean") && (t = null);
        var o = !1;
        if (t === null) o = !0;
        else switch (s) {
            case "string":
            case "number":
                o = !0;
                break;
            case "object":
                switch (t.$$typeof) {
                    case _l:
                    case o4:
                        o = !0
                }
        }
        if (o) return o = t, i = i(o), t = n === "" ? "." + g2(o, 0) : n, Wd(i) ? (r = "", t != null && (r = t.replace(Qd, "$&/") + "/"), p0(i, e, r, "", function(u) {
            return u
        })) : i != null && (m1(i) && (i = v4(i, r + (!i.key || o && o.key === i.key ? "" : ("" + i.key).replace(Qd, "$&/") + "/") + t)), e.push(i)), 1;
        if (o = 0, n = n === "" ? "." : n + ":", Wd(t))
            for (var a = 0; a < t.length; a++) {
                s = t[a];
                var l = n + g2(s, a);
                o += p0(s, e, r, l, i)
            } else if (l = g4(t), typeof l == "function")
                for (t = l.call(t), a = 0; !(s = t.next()).done;) s = s.value, l = n + g2(s, a++), o += p0(s, e, r, l, i);
            else if (s === "object") throw e = String(t), Error("Objects are not valid as a React child (found: " + (e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e) + "). If you meant to render a collection of children, use an array instead.");
        return o
    }

    function Nl(t, e, r) {
        if (t == null) return t;
        var n = [],
            i = 0;
        return p0(t, n, "", "", function(s) {
            return e.call(r, s, i++)
        }), n
    }

    function x4(t) {
        if (t._status === -1) {
            var e = t._result;
            e = e(), e.then(function(r) {
                (t._status === 0 || t._status === -1) && (t._status = 1, t._result = r)
            }, function(r) {
                (t._status === 0 || t._status === -1) && (t._status = 2, t._result = r)
            }), t._status === -1 && (t._status = 0, t._result = e)
        }
        if (t._status === 1) return t._result.default;
        throw t._result
    }
    var Ut = {
            current: null
        },
        m0 = {
            transition: null
        },
        _4 = {
            ReactCurrentDispatcher: Ut,
            ReactCurrentBatchConfig: m0,
            ReactCurrentOwner: p1
        };

    function um() {
        throw Error("act(...) is not supported in production builds of React.")
    }
    re.Children = {
        map: Nl,
        forEach: function(t, e, r) {
            Nl(t, function() {
                e.apply(this, arguments)
            }, r)
        },
        count: function(t) {
            var e = 0;
            return Nl(t, function() {
                e++
            }), e
        },
        toArray: function(t) {
            return Nl(t, function(e) {
                return e
            }) || []
        },
        only: function(t) {
            if (!m1(t)) throw Error("React.Children.only expected to receive a single React element child.");
            return t
        }
    };
    re.Component = ko;
    re.Fragment = a4;
    re.Profiler = u4;
    re.PureComponent = d1;
    re.StrictMode = l4;
    re.Suspense = h4;
    re.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = _4;
    re.act = um;
    re.cloneElement = function(t, e, r) {
        if (t == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + t + ".");
        var n = nm({}, t.props),
            i = t.key,
            s = t.ref,
            o = t._owner;
        if (e != null) {
            if (e.ref !== void 0 && (s = e.ref, o = p1.current), e.key !== void 0 && (i = "" + e.key), t.type && t.type.defaultProps) var a = t.type.defaultProps;
            for (l in e) om.call(e, l) && !am.hasOwnProperty(l) && (n[l] = e[l] === void 0 && a !== void 0 ? a[l] : e[l])
        }
        var l = arguments.length - 2;
        if (l === 1) n.children = r;
        else if (1 < l) {
            a = Array(l);
            for (var u = 0; u < l; u++) a[u] = arguments[u + 2];
            n.children = a
        }
        return {
            $$typeof: _l,
            type: t.type,
            key: i,
            ref: s,
            props: n,
            _owner: o
        }
    };
    re.createContext = function(t) {
        return t = {
            $$typeof: f4,
            _currentValue: t,
            _currentValue2: t,
            _threadCount: 0,
            Provider: null,
            Consumer: null,
            _defaultValue: null,
            _globalName: null
        }, t.Provider = {
            $$typeof: c4,
            _context: t
        }, t.Consumer = t
    };
    re.createElement = lm;
    re.createFactory = function(t) {
        var e = lm.bind(null, t);
        return e.type = t, e
    };
    re.createRef = function() {
        return {
            current: null
        }
    };
    re.forwardRef = function(t) {
        return {
            $$typeof: d4,
            render: t
        }
    };
    re.isValidElement = m1;
    re.lazy = function(t) {
        return {
            $$typeof: m4,
            _payload: {
                _status: -1,
                _result: t
            },
            _init: x4
        }
    };
    re.memo = function(t, e) {
        return {
            $$typeof: p4,
            type: t,
            compare: e === void 0 ? null : e
        }
    };
    re.startTransition = function(t) {
        var e = m0.transition;
        m0.transition = {};
        try {
            t()
        } finally {
            m0.transition = e
        }
    };
    re.unstable_act = um;
    re.useCallback = function(t, e) {
        return Ut.current.useCallback(t, e)
    };
    re.useContext = function(t) {
        return Ut.current.useContext(t)
    };
    re.useDebugValue = function() {};
    re.useDeferredValue = function(t) {
        return Ut.current.useDeferredValue(t)
    };
    re.useEffect = function(t, e) {
        return Ut.current.useEffect(t, e)
    };
    re.useId = function() {
        return Ut.current.useId()
    };
    re.useImperativeHandle = function(t, e, r) {
        return Ut.current.useImperativeHandle(t, e, r)
    };
    re.useInsertionEffect = function(t, e) {
        return Ut.current.useInsertionEffect(t, e)
    };
    re.useLayoutEffect = function(t, e) {
        return Ut.current.useLayoutEffect(t, e)
    };
    re.useMemo = function(t, e) {
        return Ut.current.useMemo(t, e)
    };
    re.useReducer = function(t, e, r) {
        return Ut.current.useReducer(t, e, r)
    };
    re.useRef = function(t) {
        return Ut.current.useRef(t)
    };
    re.useState = function(t) {
        return Ut.current.useState(t)
    };
    re.useSyncExternalStore = function(t, e, r) {
        return Ut.current.useSyncExternalStore(t, e, r)
    };
    re.useTransition = function() {
        return Ut.current.useTransition()
    };
    re.version = "18.3.1";
    tm.exports = re;
    var M = tm.exports;
    const Mr = xl(M),
        w4 = s4({
            __proto__: null,
            default: Mr
        }, [M]);
    /**
     * @license React
     * react-jsx-runtime.production.min.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */
    var C4 = M,
        A4 = Symbol.for("react.element"),
        S4 = Symbol.for("react.fragment"),
        k4 = Object.prototype.hasOwnProperty,
        P4 = C4.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        b4 = {
            key: !0,
            ref: !0,
            __self: !0,
            __source: !0
        };

    function cm(t, e, r) {
        var n, i = {},
            s = null,
            o = null;
        r !== void 0 && (s = "" + r), e.key !== void 0 && (s = "" + e.key), e.ref !== void 0 && (o = e.ref);
        for (n in e) k4.call(e, n) && !b4.hasOwnProperty(n) && (i[n] = e[n]);
        if (t && t.defaultProps)
            for (n in e = t.defaultProps, e) i[n] === void 0 && (i[n] = e[n]);
        return {
            $$typeof: A4,
            type: t,
            key: s,
            ref: o,
            props: i,
            _owner: P4.current
        }
    }
    bu.Fragment = S4;
    bu.jsx = cm;
    bu.jsxs = cm;
    em.exports = bu;
    var m = em.exports,
        Cc = {},
        fm = {
            exports: {}
        },
        xr = {},
        dm = {
            exports: {}
        },
        hm = {};
    /**
     * @license React
     * scheduler.production.min.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */
    (function(t) {
        function e(R, z) {
            var A = R.length;
            R.push(z);
            e: for (; 0 < A;) {
                var G = A - 1 >>> 1,
                    oe = R[G];
                if (0 < i(oe, z)) R[G] = z, R[A] = oe, A = G;
                else break e
            }
        }

        function r(R) {
            return R.length === 0 ? null : R[0]
        }

        function n(R) {
            if (R.length === 0) return null;
            var z = R[0],
                A = R.pop();
            if (A !== z) {
                R[0] = A;
                e: for (var G = 0, oe = R.length, yt = oe >>> 1; G < yt;) {
                    var ce = 2 * (G + 1) - 1,
                        Fe = R[ce],
                        Pe = ce + 1,
                        ye = R[Pe];
                    if (0 > i(Fe, A)) Pe < oe && 0 > i(ye, Fe) ? (R[G] = ye, R[Pe] = A, G = Pe) : (R[G] = Fe, R[ce] = A, G = ce);
                    else if (Pe < oe && 0 > i(ye, A)) R[G] = ye, R[Pe] = A, G = Pe;
                    else break e
                }
            }
            return z
        }

        function i(R, z) {
            var A = R.sortIndex - z.sortIndex;
            return A !== 0 ? A : R.id - z.id
        }
        if (typeof performance == "object" && typeof performance.now == "function") {
            var s = performance;
            t.unstable_now = function() {
                return s.now()
            }
        } else {
            var o = Date,
                a = o.now();
            t.unstable_now = function() {
                return o.now() - a
            }
        }
        var l = [],
            u = [],
            c = 1,
            f = null,
            d = 3,
            h = !1,
            y = !1,
            g = !1,
            w = typeof setTimeout == "function" ? setTimeout : null,
            v = typeof clearTimeout == "function" ? clearTimeout : null,
            p = typeof setImmediate < "u" ? setImmediate : null;
        typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);

        function x(R) {
            for (var z = r(u); z !== null;) {
                if (z.callback === null) n(u);
                else if (z.startTime <= R) n(u), z.sortIndex = z.expirationTime, e(l, z);
                else break;
                z = r(u)
            }
        }

        function _(R) {
            if (g = !1, x(R), !y)
                if (r(l) !== null) y = !0, W(C);
                else {
                    var z = r(u);
                    z !== null && B(_, z.startTime - R)
                }
        }

        function C(R, z) {
            y = !1, g && (g = !1, v(P), P = -1), h = !0;
            var A = d;
            try {
                for (x(z), f = r(l); f !== null && (!(f.expirationTime > z) || R && !I());) {
                    var G = f.callback;
                    if (typeof G == "function") {
                        f.callback = null, d = f.priorityLevel;
                        var oe = G(f.expirationTime <= z);
                        z = t.unstable_now(), typeof oe == "function" ? f.callback = oe : f === r(l) && n(l), x(z)
                    } else n(l);
                    f = r(l)
                }
                if (f !== null) var yt = !0;
                else {
                    var ce = r(u);
                    ce !== null && B(_, ce.startTime - z), yt = !1
                }
                return yt
            } finally {
                f = null, d = A, h = !1
            }
        }
        var k = !1,
            S = null,
            P = -1,
            T = 5,
            b = -1;

        function I() {
            return !(t.unstable_now() - b < T)
        }

        function L() {
            if (S !== null) {
                var R = t.unstable_now();
                b = R;
                var z = !0;
                try {
                    z = S(!0, R)
                } finally {
                    z ? H() : (k = !1, S = null)
                }
            } else k = !1
        }
        var H;
        if (typeof p == "function") H = function() {
            p(L)
        };
        else if (typeof MessageChannel < "u") {
            var V = new MessageChannel,
                X = V.port2;
            V.port1.onmessage = L, H = function() {
                X.postMessage(null)
            }
        } else H = function() {
            w(L, 0)
        };

        function W(R) {
            S = R, k || (k = !0, H())
        }

        function B(R, z) {
            P = w(function() {
                R(t.unstable_now())
            }, z)
        }
        t.unstable_IdlePriority = 5, t.unstable_ImmediatePriority = 1, t.unstable_LowPriority = 4, t.unstable_NormalPriority = 3, t.unstable_Profiling = null, t.unstable_UserBlockingPriority = 2, t.unstable_cancelCallback = function(R) {
            R.callback = null
        }, t.unstable_continueExecution = function() {
            y || h || (y = !0, W(C))
        }, t.unstable_forceFrameRate = function(R) {
            0 > R || 125 < R ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : T = 0 < R ? Math.floor(1e3 / R) : 5
        }, t.unstable_getCurrentPriorityLevel = function() {
            return d
        }, t.unstable_getFirstCallbackNode = function() {
            return r(l)
        }, t.unstable_next = function(R) {
            switch (d) {
                case 1:
                case 2:
                case 3:
                    var z = 3;
                    break;
                default:
                    z = d
            }
            var A = d;
            d = z;
            try {
                return R()
            } finally {
                d = A
            }
        }, t.unstable_pauseExecution = function() {}, t.unstable_requestPaint = function() {}, t.unstable_runWithPriority = function(R, z) {
            switch (R) {
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                    break;
                default:
                    R = 3
            }
            var A = d;
            d = R;
            try {
                return z()
            } finally {
                d = A
            }
        }, t.unstable_scheduleCallback = function(R, z, A) {
            var G = t.unstable_now();
            switch (typeof A == "object" && A !== null ? (A = A.delay, A = typeof A == "number" && 0 < A ? G + A : G) : A = G, R) {
                case 1:
                    var oe = -1;
                    break;
                case 2:
                    oe = 250;
                    break;
                case 5:
                    oe = 1073741823;
                    break;
                case 4:
                    oe = 1e4;
                    break;
                default:
                    oe = 5e3
            }
            return oe = A + oe, R = {
                id: c++,
                callback: z,
                priorityLevel: R,
                startTime: A,
                expirationTime: oe,
                sortIndex: -1
            }, A > G ? (R.sortIndex = A, e(u, R), r(l) === null && R === r(u) && (g ? (v(P), P = -1) : g = !0, B(_, A - G))) : (R.sortIndex = oe, e(l, R), y || h || (y = !0, W(C))), R
        }, t.unstable_shouldYield = I, t.unstable_wrapCallback = function(R) {
            var z = d;
            return function() {
                var A = d;
                d = z;
                try {
                    return R.apply(this, arguments)
                } finally {
                    d = A
                }
            }
        }
    })(hm);
    dm.exports = hm;
    var T4 = dm.exports;
    /**
     * @license React
     * react-dom.production.min.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */
    var E4 = M,
        vr = T4;

    function N(t) {
        for (var e = "https://reactjs.org/docs/error-decoder.html?invariant=" + t, r = 1; r < arguments.length; r++) e += "&args[]=" + encodeURIComponent(arguments[r]);
        return "Minified React error #" + t + "; visit " + e + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    }
    var pm = new Set,
        Ha = {};

    function ys(t, e) {
        co(t, e), co(t + "Capture", e)
    }

    function co(t, e) {
        for (Ha[t] = e, t = 0; t < e.length; t++) pm.add(e[t])
    }
    var jn = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"),
        Ac = Object.prototype.hasOwnProperty,
        j4 = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
        Yd = {},
        qd = {};

    function M4(t) {
        return Ac.call(qd, t) ? !0 : Ac.call(Yd, t) ? !1 : j4.test(t) ? qd[t] = !0 : (Yd[t] = !0, !1)
    }

    function R4(t, e, r, n) {
        if (r !== null && r.type === 0) return !1;
        switch (typeof e) {
            case "function":
            case "symbol":
                return !0;
            case "boolean":
                return n ? !1 : r !== null ? !r.acceptsBooleans : (t = t.toLowerCase().slice(0, 5), t !== "data-" && t !== "aria-");
            default:
                return !1
        }
    }

    function N4(t, e, r, n) {
        if (e === null || typeof e > "u" || R4(t, e, r, n)) return !0;
        if (n) return !1;
        if (r !== null) switch (r.type) {
            case 3:
                return !e;
            case 4:
                return e === !1;
            case 5:
                return isNaN(e);
            case 6:
                return isNaN(e) || 1 > e
        }
        return !1
    }

    function Gt(t, e, r, n, i, s, o) {
        this.acceptsBooleans = e === 2 || e === 3 || e === 4, this.attributeName = n, this.attributeNamespace = i, this.mustUseProperty = r, this.propertyName = t, this.type = e, this.sanitizeURL = s, this.removeEmptyString = o
    }
    var vt = {};
    "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t) {
        vt[t] = new Gt(t, 0, !1, t, null, !1, !1)
    });
    [
        ["acceptCharset", "accept-charset"],
        ["className", "class"],
        ["htmlFor", "for"],
        ["httpEquiv", "http-equiv"]
    ].forEach(function(t) {
        var e = t[0];
        vt[e] = new Gt(e, 1, !1, t[1], null, !1, !1)
    });
    ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(t) {
        vt[t] = new Gt(t, 2, !1, t.toLowerCase(), null, !1, !1)
    });
    ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(t) {
        vt[t] = new Gt(t, 2, !1, t, null, !1, !1)
    });
    "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t) {
        vt[t] = new Gt(t, 3, !1, t.toLowerCase(), null, !1, !1)
    });
    ["checked", "multiple", "muted", "selected"].forEach(function(t) {
        vt[t] = new Gt(t, 3, !0, t, null, !1, !1)
    });
    ["capture", "download"].forEach(function(t) {
        vt[t] = new Gt(t, 4, !1, t, null, !1, !1)
    });
    ["cols", "rows", "size", "span"].forEach(function(t) {
        vt[t] = new Gt(t, 6, !1, t, null, !1, !1)
    });
    ["rowSpan", "start"].forEach(function(t) {
        vt[t] = new Gt(t, 5, !1, t.toLowerCase(), null, !1, !1)
    });
    var g1 = /[\-:]([a-z])/g;

    function v1(t) {
        return t[1].toUpperCase()
    }
    "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t) {
        var e = t.replace(g1, v1);
        vt[e] = new Gt(e, 1, !1, t, null, !1, !1)
    });
    "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t) {
        var e = t.replace(g1, v1);
        vt[e] = new Gt(e, 1, !1, t, "http://www.w3.org/1999/xlink", !1, !1)
    });
    ["xml:base", "xml:lang", "xml:space"].forEach(function(t) {
        var e = t.replace(g1, v1);
        vt[e] = new Gt(e, 1, !1, t, "http://www.w3.org/XML/1998/namespace", !1, !1)
    });
    ["tabIndex", "crossOrigin"].forEach(function(t) {
        vt[t] = new Gt(t, 1, !1, t.toLowerCase(), null, !1, !1)
    });
    vt.xlinkHref = new Gt("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
    ["src", "href", "action", "formAction"].forEach(function(t) {
        vt[t] = new Gt(t, 1, !1, t.toLowerCase(), null, !0, !0)
    });

    function y1(t, e, r, n) {
        var i = vt.hasOwnProperty(e) ? vt[e] : null;
        (i !== null ? i.type !== 0 : n || !(2 < e.length) || e[0] !== "o" && e[0] !== "O" || e[1] !== "n" && e[1] !== "N") && (N4(e, r, i, n) && (r = null), n || i === null ? M4(e) && (r === null ? t.removeAttribute(e) : t.setAttribute(e, "" + r)) : i.mustUseProperty ? t[i.propertyName] = r === null ? i.type === 3 ? !1 : "" : r : (e = i.attributeName, n = i.attributeNamespace, r === null ? t.removeAttribute(e) : (i = i.type, r = i === 3 || i === 4 && r === !0 ? "" : "" + r, n ? t.setAttributeNS(n, e, r) : t.setAttribute(e, r))))
    }
    var zn = E4.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
        Ll = Symbol.for("react.element"),
        zs = Symbol.for("react.portal"),
        Is = Symbol.for("react.fragment"),
        x1 = Symbol.for("react.strict_mode"),
        Sc = Symbol.for("react.profiler"),
        mm = Symbol.for("react.provider"),
        gm = Symbol.for("react.context"),
        _1 = Symbol.for("react.forward_ref"),
        kc = Symbol.for("react.suspense"),
        Pc = Symbol.for("react.suspense_list"),
        w1 = Symbol.for("react.memo"),
        Yn = Symbol.for("react.lazy"),
        vm = Symbol.for("react.offscreen"),
        Kd = Symbol.iterator;

    function Uo(t) {
        return t === null || typeof t != "object" ? null : (t = Kd && t[Kd] || t["@@iterator"], typeof t == "function" ? t : null)
    }
    var Le = Object.assign,
        v2;

    function ia(t) {
        if (v2 === void 0) try {
            throw Error()
        } catch (r) {
            var e = r.stack.trim().match(/\n( *(at )?)/);
            v2 = e && e[1] || ""
        }
        return `
` + v2 + t
    }
    var y2 = !1;

    function x2(t, e) {
        if (!t || y2) return "";
        y2 = !0;
        var r = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        try {
            if (e)
                if (e = function() {
                        throw Error()
                    }, Object.defineProperty(e.prototype, "props", {
                        set: function() {
                            throw Error()
                        }
                    }), typeof Reflect == "object" && Reflect.construct) {
                    try {
                        Reflect.construct(e, [])
                    } catch (u) {
                        var n = u
                    }
                    Reflect.construct(t, [], e)
                } else {
                    try {
                        e.call()
                    } catch (u) {
                        n = u
                    }
                    t.call(e.prototype)
                }
            else {
                try {
                    throw Error()
                } catch (u) {
                    n = u
                }
                t()
            }
        } catch (u) {
            if (u && n && typeof u.stack == "string") {
                for (var i = u.stack.split(`
`), s = n.stack.split(`
`), o = i.length - 1, a = s.length - 1; 1 <= o && 0 <= a && i[o] !== s[a];) a--;
                for (; 1 <= o && 0 <= a; o--, a--)
                    if (i[o] !== s[a]) {
                        if (o !== 1 || a !== 1)
                            do
                                if (o--, a--, 0 > a || i[o] !== s[a]) {
                                    var l = `
` + i[o].replace(" at new ", " at ");
                                    return t.displayName && l.includes("<anonymous>") && (l = l.replace("<anonymous>", t.displayName)), l
                                }
                        while (1 <= o && 0 <= a);
                        break
                    }
            }
        } finally {
            y2 = !1, Error.prepareStackTrace = r
        }
        return (t = t ? t.displayName || t.name : "") ? ia(t) : ""
    }

    function L4(t) {
        switch (t.tag) {
            case 5:
                return ia(t.type);
            case 16:
                return ia("Lazy");
            case 13:
                return ia("Suspense");
            case 19:
                return ia("SuspenseList");
            case 0:
            case 2:
            case 15:
                return t = x2(t.type, !1), t;
            case 11:
                return t = x2(t.type.render, !1), t;
            case 1:
                return t = x2(t.type, !0), t;
            default:
                return ""
        }
    }

    function bc(t) {
        if (t == null) return null;
        if (typeof t == "function") return t.displayName || t.name || null;
        if (typeof t == "string") return t;
        switch (t) {
            case Is:
                return "Fragment";
            case zs:
                return "Portal";
            case Sc:
                return "Profiler";
            case x1:
                return "StrictMode";
            case kc:
                return "Suspense";
            case Pc:
                return "SuspenseList"
        }
        if (typeof t == "object") switch (t.$$typeof) {
            case gm:
                return (t.displayName || "Context") + ".Consumer";
            case mm:
                return (t._context.displayName || "Context") + ".Provider";
            case _1:
                var e = t.render;
                return t = t.displayName, t || (t = e.displayName || e.name || "", t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef"), t;
            case w1:
                return e = t.displayName || null, e !== null ? e : bc(t.type) || "Memo";
            case Yn:
                e = t._payload, t = t._init;
                try {
                    return bc(t(e))
                } catch {}
        }
        return null
    }

    function O4(t) {
        var e = t.type;
        switch (t.tag) {
            case 24:
                return "Cache";
            case 9:
                return (e.displayName || "Context") + ".Consumer";
            case 10:
                return (e._context.displayName || "Context") + ".Provider";
            case 18:
                return "DehydratedFragment";
            case 11:
                return t = e.render, t = t.displayName || t.name || "", e.displayName || (t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef");
            case 7:
                return "Fragment";
            case 5:
                return e;
            case 4:
                return "Portal";
            case 3:
                return "Root";
            case 6:
                return "Text";
            case 16:
                return bc(e);
            case 8:
                return e === x1 ? "StrictMode" : "Mode";
            case 22:
                return "Offscreen";
            case 12:
                return "Profiler";
            case 21:
                return "Scope";
            case 13:
                return "Suspense";
            case 19:
                return "SuspenseList";
            case 25:
                return "TracingMarker";
            case 1:
            case 0:
            case 17:
            case 2:
            case 14:
            case 15:
                if (typeof e == "function") return e.displayName || e.name || null;
                if (typeof e == "string") return e
        }
        return null
    }

    function xi(t) {
        switch (typeof t) {
            case "boolean":
            case "number":
            case "string":
            case "undefined":
                return t;
            case "object":
                return t;
            default:
                return ""
        }
    }

    function ym(t) {
        var e = t.type;
        return (t = t.nodeName) && t.toLowerCase() === "input" && (e === "checkbox" || e === "radio")
    }

    function z4(t) {
        var e = ym(t) ? "checked" : "value",
            r = Object.getOwnPropertyDescriptor(t.constructor.prototype, e),
            n = "" + t[e];
        if (!t.hasOwnProperty(e) && typeof r < "u" && typeof r.get == "function" && typeof r.set == "function") {
            var i = r.get,
                s = r.set;
            return Object.defineProperty(t, e, {
                configurable: !0,
                get: function() {
                    return i.call(this)
                },
                set: function(o) {
                    n = "" + o, s.call(this, o)
                }
            }), Object.defineProperty(t, e, {
                enumerable: r.enumerable
            }), {
                getValue: function() {
                    return n
                },
                setValue: function(o) {
                    n = "" + o
                },
                stopTracking: function() {
                    t._valueTracker = null, delete t[e]
                }
            }
        }
    }

    function Ol(t) {
        t._valueTracker || (t._valueTracker = z4(t))
    }

    function xm(t) {
        if (!t) return !1;
        var e = t._valueTracker;
        if (!e) return !0;
        var r = e.getValue(),
            n = "";
        return t && (n = ym(t) ? t.checked ? "true" : "false" : t.value), t = n, t !== r ? (e.setValue(t), !0) : !1
    }

    function I0(t) {
        if (t = t || (typeof document < "u" ? document : void 0), typeof t > "u") return null;
        try {
            return t.activeElement || t.body
        } catch {
            return t.body
        }
    }

    function Tc(t, e) {
        var r = e.checked;
        return Le({}, e, {
            defaultChecked: void 0,
            defaultValue: void 0,
            value: void 0,
            checked: r ? ? t._wrapperState.initialChecked
        })
    }

    function Zd(t, e) {
        var r = e.defaultValue == null ? "" : e.defaultValue,
            n = e.checked != null ? e.checked : e.defaultChecked;
        r = xi(e.value != null ? e.value : r), t._wrapperState = {
            initialChecked: n,
            initialValue: r,
            controlled: e.type === "checkbox" || e.type === "radio" ? e.checked != null : e.value != null
        }
    }

    function _m(t, e) {
        e = e.checked, e != null && y1(t, "checked", e, !1)
    }

    function Ec(t, e) {
        _m(t, e);
        var r = xi(e.value),
            n = e.type;
        if (r != null) n === "number" ? (r === 0 && t.value === "" || t.value != r) && (t.value = "" + r) : t.value !== "" + r && (t.value = "" + r);
        else if (n === "submit" || n === "reset") {
            t.removeAttribute("value");
            return
        }
        e.hasOwnProperty("value") ? jc(t, e.type, r) : e.hasOwnProperty("defaultValue") && jc(t, e.type, xi(e.defaultValue)), e.checked == null && e.defaultChecked != null && (t.defaultChecked = !!e.defaultChecked)
    }

    function Xd(t, e, r) {
        if (e.hasOwnProperty("value") || e.hasOwnProperty("defaultValue")) {
            var n = e.type;
            if (!(n !== "submit" && n !== "reset" || e.value !== void 0 && e.value !== null)) return;
            e = "" + t._wrapperState.initialValue, r || e === t.value || (t.value = e), t.defaultValue = e
        }
        r = t.name, r !== "" && (t.name = ""), t.defaultChecked = !!t._wrapperState.initialChecked, r !== "" && (t.name = r)
    }

    function jc(t, e, r) {
        (e !== "number" || I0(t.ownerDocument) !== t) && (r == null ? t.defaultValue = "" + t._wrapperState.initialValue : t.defaultValue !== "" + r && (t.defaultValue = "" + r))
    }
    var sa = Array.isArray;

    function Zs(t, e, r, n) {
        if (t = t.options, e) {
            e = {};
            for (var i = 0; i < r.length; i++) e["$" + r[i]] = !0;
            for (r = 0; r < t.length; r++) i = e.hasOwnProperty("$" + t[r].value), t[r].selected !== i && (t[r].selected = i), i && n && (t[r].defaultSelected = !0)
        } else {
            for (r = "" + xi(r), e = null, i = 0; i < t.length; i++) {
                if (t[i].value === r) {
                    t[i].selected = !0, n && (t[i].defaultSelected = !0);
                    return
                }
                e !== null || t[i].disabled || (e = t[i])
            }
            e !== null && (e.selected = !0)
        }
    }

    function Mc(t, e) {
        if (e.dangerouslySetInnerHTML != null) throw Error(N(91));
        return Le({}, e, {
            value: void 0,
            defaultValue: void 0,
            children: "" + t._wrapperState.initialValue
        })
    }

    function Jd(t, e) {
        var r = e.value;
        if (r == null) {
            if (r = e.children, e = e.defaultValue, r != null) {
                if (e != null) throw Error(N(92));
                if (sa(r)) {
                    if (1 < r.length) throw Error(N(93));
                    r = r[0]
                }
                e = r
            }
            e == null && (e = ""), r = e
        }
        t._wrapperState = {
            initialValue: xi(r)
        }
    }

    function wm(t, e) {
        var r = xi(e.value),
            n = xi(e.defaultValue);
        r != null && (r = "" + r, r !== t.value && (t.value = r), e.defaultValue == null && t.defaultValue !== r && (t.defaultValue = r)), n != null && (t.defaultValue = "" + n)
    }

    function eh(t) {
        var e = t.textContent;
        e === t._wrapperState.initialValue && e !== "" && e !== null && (t.value = e)
    }

    function Cm(t) {
        switch (t) {
            case "svg":
                return "http://www.w3.org/2000/svg";
            case "math":
                return "http://www.w3.org/1998/Math/MathML";
            default:
                return "http://www.w3.org/1999/xhtml"
        }
    }

    function Rc(t, e) {
        return t == null || t === "http://www.w3.org/1999/xhtml" ? Cm(e) : t === "http://www.w3.org/2000/svg" && e === "foreignObject" ? "http://www.w3.org/1999/xhtml" : t
    }
    var zl, Am = function(t) {
        return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(e, r, n, i) {
            MSApp.execUnsafeLocalFunction(function() {
                return t(e, r, n, i)
            })
        } : t
    }(function(t, e) {
        if (t.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in t) t.innerHTML = e;
        else {
            for (zl = zl || document.createElement("div"), zl.innerHTML = "<svg>" + e.valueOf().toString() + "</svg>", e = zl.firstChild; t.firstChild;) t.removeChild(t.firstChild);
            for (; e.firstChild;) t.appendChild(e.firstChild)
        }
    });

    function Va(t, e) {
        if (e) {
            var r = t.firstChild;
            if (r && r === t.lastChild && r.nodeType === 3) {
                r.nodeValue = e;
                return
            }
        }
        t.textContent = e
    }
    var va = {
            animationIterationCount: !0,
            aspectRatio: !0,
            borderImageOutset: !0,
            borderImageSlice: !0,
            borderImageWidth: !0,
            boxFlex: !0,
            boxFlexGroup: !0,
            boxOrdinalGroup: !0,
            columnCount: !0,
            columns: !0,
            flex: !0,
            flexGrow: !0,
            flexPositive: !0,
            flexShrink: !0,
            flexNegative: !0,
            flexOrder: !0,
            gridArea: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowSpan: !0,
            gridRowStart: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnSpan: !0,
            gridColumnStart: !0,
            fontWeight: !0,
            lineClamp: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            tabSize: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0,
            fillOpacity: !0,
            floodOpacity: !0,
            stopOpacity: !0,
            strokeDasharray: !0,
            strokeDashoffset: !0,
            strokeMiterlimit: !0,
            strokeOpacity: !0,
            strokeWidth: !0
        },
        I4 = ["Webkit", "ms", "Moz", "O"];
    Object.keys(va).forEach(function(t) {
        I4.forEach(function(e) {
            e = e + t.charAt(0).toUpperCase() + t.substring(1), va[e] = va[t]
        })
    });

    function Sm(t, e, r) {
        return e == null || typeof e == "boolean" || e === "" ? "" : r || typeof e != "number" || e === 0 || va.hasOwnProperty(t) && va[t] ? ("" + e).trim() : e + "px"
    }

    function km(t, e) {
        t = t.style;
        for (var r in e)
            if (e.hasOwnProperty(r)) {
                var n = r.indexOf("--") === 0,
                    i = Sm(r, e[r], n);
                r === "float" && (r = "cssFloat"), n ? t.setProperty(r, i) : t[r] = i
            }
    }
    var D4 = Le({
        menuitem: !0
    }, {
        area: !0,
        base: !0,
        br: !0,
        col: !0,
        embed: !0,
        hr: !0,
        img: !0,
        input: !0,
        keygen: !0,
        link: !0,
        meta: !0,
        param: !0,
        source: !0,
        track: !0,
        wbr: !0
    });

    function Nc(t, e) {
        if (e) {
            if (D4[t] && (e.children != null || e.dangerouslySetInnerHTML != null)) throw Error(N(137, t));
            if (e.dangerouslySetInnerHTML != null) {
                if (e.children != null) throw Error(N(60));
                if (typeof e.dangerouslySetInnerHTML != "object" || !("__html" in e.dangerouslySetInnerHTML)) throw Error(N(61))
            }
            if (e.style != null && typeof e.style != "object") throw Error(N(62))
        }
    }

    function Lc(t, e) {
        if (t.indexOf("-") === -1) return typeof e.is == "string";
        switch (t) {
            case "annotation-xml":
            case "color-profile":
            case "font-face":
            case "font-face-src":
            case "font-face-uri":
            case "font-face-format":
            case "font-face-name":
            case "missing-glyph":
                return !1;
            default:
                return !0
        }
    }
    var Oc = null;

    function C1(t) {
        return t = t.target || t.srcElement || window, t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === 3 ? t.parentNode : t
    }
    var zc = null,
        Xs = null,
        Js = null;

    function th(t) {
        if (t = Al(t)) {
            if (typeof zc != "function") throw Error(N(280));
            var e = t.stateNode;
            e && (e = Ru(e), zc(t.stateNode, t.type, e))
        }
    }

    function Pm(t) {
        Xs ? Js ? Js.push(t) : Js = [t] : Xs = t
    }

    function bm() {
        if (Xs) {
            var t = Xs,
                e = Js;
            if (Js = Xs = null, th(t), e)
                for (t = 0; t < e.length; t++) th(e[t])
        }
    }

    function Tm(t, e) {
        return t(e)
    }

    function Em() {}
    var _2 = !1;

    function jm(t, e, r) {
        if (_2) return t(e, r);
        _2 = !0;
        try {
            return Tm(t, e, r)
        } finally {
            _2 = !1, (Xs !== null || Js !== null) && (Em(), bm())
        }
    }

    function Ua(t, e) {
        var r = t.stateNode;
        if (r === null) return null;
        var n = Ru(r);
        if (n === null) return null;
        r = n[e];
        e: switch (e) {
            case "onClick":
            case "onClickCapture":
            case "onDoubleClick":
            case "onDoubleClickCapture":
            case "onMouseDown":
            case "onMouseDownCapture":
            case "onMouseMove":
            case "onMouseMoveCapture":
            case "onMouseUp":
            case "onMouseUpCapture":
            case "onMouseEnter":
                (n = !n.disabled) || (t = t.type, n = !(t === "button" || t === "input" || t === "select" || t === "textarea")), t = !n;
                break e;
            default:
                t = !1
        }
        if (t) return null;
        if (r && typeof r != "function") throw Error(N(231, e, typeof r));
        return r
    }
    var Ic = !1;
    if (jn) try {
        var Go = {};
        Object.defineProperty(Go, "passive", {
            get: function() {
                Ic = !0
            }
        }), window.addEventListener("test", Go, Go), window.removeEventListener("test", Go, Go)
    } catch {
        Ic = !1
    }

    function F4(t, e, r, n, i, s, o, a, l) {
        var u = Array.prototype.slice.call(arguments, 3);
        try {
            e.apply(r, u)
        } catch (c) {
            this.onError(c)
        }
    }
    var ya = !1,
        D0 = null,
        F0 = !1,
        Dc = null,
        B4 = {
            onError: function(t) {
                ya = !0, D0 = t
            }
        };

    function $4(t, e, r, n, i, s, o, a, l) {
        ya = !1, D0 = null, F4.apply(B4, arguments)
    }

    function H4(t, e, r, n, i, s, o, a, l) {
        if ($4.apply(this, arguments), ya) {
            if (ya) {
                var u = D0;
                ya = !1, D0 = null
            } else throw Error(N(198));
            F0 || (F0 = !0, Dc = u)
        }
    }

    function xs(t) {
        var e = t,
            r = t;
        if (t.alternate)
            for (; e.return;) e = e.return;
        else {
            t = e;
            do e = t, e.flags & 4098 && (r = e.return), t = e.return; while (t)
        }
        return e.tag === 3 ? r : null
    }

    function Mm(t) {
        if (t.tag === 13) {
            var e = t.memoizedState;
            if (e === null && (t = t.alternate, t !== null && (e = t.memoizedState)), e !== null) return e.dehydrated
        }
        return null
    }

    function rh(t) {
        if (xs(t) !== t) throw Error(N(188))
    }

    function V4(t) {
        var e = t.alternate;
        if (!e) {
            if (e = xs(t), e === null) throw Error(N(188));
            return e !== t ? null : t
        }
        for (var r = t, n = e;;) {
            var i = r.return;
            if (i === null) break;
            var s = i.alternate;
            if (s === null) {
                if (n = i.return, n !== null) {
                    r = n;
                    continue
                }
                break
            }
            if (i.child === s.child) {
                for (s = i.child; s;) {
                    if (s === r) return rh(i), t;
                    if (s === n) return rh(i), e;
                    s = s.sibling
                }
                throw Error(N(188))
            }
            if (r.return !== n.return) r = i, n = s;
            else {
                for (var o = !1, a = i.child; a;) {
                    if (a === r) {
                        o = !0, r = i, n = s;
                        break
                    }
                    if (a === n) {
                        o = !0, n = i, r = s;
                        break
                    }
                    a = a.sibling
                }
                if (!o) {
                    for (a = s.child; a;) {
                        if (a === r) {
                            o = !0, r = s, n = i;
                            break
                        }
                        if (a === n) {
                            o = !0, n = s, r = i;
                            break
                        }
                        a = a.sibling
                    }
                    if (!o) throw Error(N(189))
                }
            }
            if (r.alternate !== n) throw Error(N(190))
        }
        if (r.tag !== 3) throw Error(N(188));
        return r.stateNode.current === r ? t : e
    }

    function Rm(t) {
        return t = V4(t), t !== null ? Nm(t) : null
    }

    function Nm(t) {
        if (t.tag === 5 || t.tag === 6) return t;
        for (t = t.child; t !== null;) {
            var e = Nm(t);
            if (e !== null) return e;
            t = t.sibling
        }
        return null
    }
    var Lm = vr.unstable_scheduleCallback,
        nh = vr.unstable_cancelCallback,
        U4 = vr.unstable_shouldYield,
        G4 = vr.unstable_requestPaint,
        Ue = vr.unstable_now,
        W4 = vr.unstable_getCurrentPriorityLevel,
        A1 = vr.unstable_ImmediatePriority,
        Om = vr.unstable_UserBlockingPriority,
        B0 = vr.unstable_NormalPriority,
        Q4 = vr.unstable_LowPriority,
        zm = vr.unstable_IdlePriority,
        Tu = null,
        cn = null;

    function Y4(t) {
        if (cn && typeof cn.onCommitFiberRoot == "function") try {
            cn.onCommitFiberRoot(Tu, t, void 0, (t.current.flags & 128) === 128)
        } catch {}
    }
    var qr = Math.clz32 ? Math.clz32 : Z4,
        q4 = Math.log,
        K4 = Math.LN2;

    function Z4(t) {
        return t >>>= 0, t === 0 ? 32 : 31 - (q4(t) / K4 | 0) | 0
    }
    var Il = 64,
        Dl = 4194304;

    function oa(t) {
        switch (t & -t) {
            case 1:
                return 1;
            case 2:
                return 2;
            case 4:
                return 4;
            case 8:
                return 8;
            case 16:
                return 16;
            case 32:
                return 32;
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
                return t & 4194240;
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
                return t & 130023424;
            case 134217728:
                return 134217728;
            case 268435456:
                return 268435456;
            case 536870912:
                return 536870912;
            case 1073741824:
                return 1073741824;
            default:
                return t
        }
    }

    function $0(t, e) {
        var r = t.pendingLanes;
        if (r === 0) return 0;
        var n = 0,
            i = t.suspendedLanes,
            s = t.pingedLanes,
            o = r & 268435455;
        if (o !== 0) {
            var a = o & ~i;
            a !== 0 ? n = oa(a) : (s &= o, s !== 0 && (n = oa(s)))
        } else o = r & ~i, o !== 0 ? n = oa(o) : s !== 0 && (n = oa(s));
        if (n === 0) return 0;
        if (e !== 0 && e !== n && !(e & i) && (i = n & -n, s = e & -e, i >= s || i === 16 && (s & 4194240) !== 0)) return e;
        if (n & 4 && (n |= r & 16), e = t.entangledLanes, e !== 0)
            for (t = t.entanglements, e &= n; 0 < e;) r = 31 - qr(e), i = 1 << r, n |= t[r], e &= ~i;
        return n
    }

    function X4(t, e) {
        switch (t) {
            case 1:
            case 2:
            case 4:
                return e + 250;
            case 8:
            case 16:
            case 32:
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
                return e + 5e3;
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
                return -1;
            case 134217728:
            case 268435456:
            case 536870912:
            case 1073741824:
                return -1;
            default:
                return -1
        }
    }

    function J4(t, e) {
        for (var r = t.suspendedLanes, n = t.pingedLanes, i = t.expirationTimes, s = t.pendingLanes; 0 < s;) {
            var o = 31 - qr(s),
                a = 1 << o,
                l = i[o];
            l === -1 ? (!(a & r) || a & n) && (i[o] = X4(a, e)) : l <= e && (t.expiredLanes |= a), s &= ~a
        }
    }

    function Fc(t) {
        return t = t.pendingLanes & -1073741825, t !== 0 ? t : t & 1073741824 ? 1073741824 : 0
    }

    function Im() {
        var t = Il;
        return Il <<= 1, !(Il & 4194240) && (Il = 64), t
    }

    function w2(t) {
        for (var e = [], r = 0; 31 > r; r++) e.push(t);
        return e
    }

    function wl(t, e, r) {
        t.pendingLanes |= e, e !== 536870912 && (t.suspendedLanes = 0, t.pingedLanes = 0), t = t.eventTimes, e = 31 - qr(e), t[e] = r
    }

    function ev(t, e) {
        var r = t.pendingLanes & ~e;
        t.pendingLanes = e, t.suspendedLanes = 0, t.pingedLanes = 0, t.expiredLanes &= e, t.mutableReadLanes &= e, t.entangledLanes &= e, e = t.entanglements;
        var n = t.eventTimes;
        for (t = t.expirationTimes; 0 < r;) {
            var i = 31 - qr(r),
                s = 1 << i;
            e[i] = 0, n[i] = -1, t[i] = -1, r &= ~s
        }
    }

    function S1(t, e) {
        var r = t.entangledLanes |= e;
        for (t = t.entanglements; r;) {
            var n = 31 - qr(r),
                i = 1 << n;
            i & e | t[n] & e && (t[n] |= e), r &= ~i
        }
    }
    var de = 0;

    function Dm(t) {
        return t &= -t, 1 < t ? 4 < t ? t & 268435455 ? 16 : 536870912 : 4 : 1
    }
    var Fm, k1, Bm, $m, Hm, Bc = !1,
        Fl = [],
        oi = null,
        ai = null,
        li = null,
        Ga = new Map,
        Wa = new Map,
        Kn = [],
        tv = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");

    function ih(t, e) {
        switch (t) {
            case "focusin":
            case "focusout":
                oi = null;
                break;
            case "dragenter":
            case "dragleave":
                ai = null;
                break;
            case "mouseover":
            case "mouseout":
                li = null;
                break;
            case "pointerover":
            case "pointerout":
                Ga.delete(e.pointerId);
                break;
            case "gotpointercapture":
            case "lostpointercapture":
                Wa.delete(e.pointerId)
        }
    }

    function Wo(t, e, r, n, i, s) {
        return t === null || t.nativeEvent !== s ? (t = {
            blockedOn: e,
            domEventName: r,
            eventSystemFlags: n,
            nativeEvent: s,
            targetContainers: [i]
        }, e !== null && (e = Al(e), e !== null && k1(e)), t) : (t.eventSystemFlags |= n, e = t.targetContainers, i !== null && e.indexOf(i) === -1 && e.push(i), t)
    }

    function rv(t, e, r, n, i) {
        switch (e) {
            case "focusin":
                return oi = Wo(oi, t, e, r, n, i), !0;
            case "dragenter":
                return ai = Wo(ai, t, e, r, n, i), !0;
            case "mouseover":
                return li = Wo(li, t, e, r, n, i), !0;
            case "pointerover":
                var s = i.pointerId;
                return Ga.set(s, Wo(Ga.get(s) || null, t, e, r, n, i)), !0;
            case "gotpointercapture":
                return s = i.pointerId, Wa.set(s, Wo(Wa.get(s) || null, t, e, r, n, i)), !0
        }
        return !1
    }

    function Vm(t) {
        var e = Gi(t.target);
        if (e !== null) {
            var r = xs(e);
            if (r !== null) {
                if (e = r.tag, e === 13) {
                    if (e = Mm(r), e !== null) {
                        t.blockedOn = e, Hm(t.priority, function() {
                            Bm(r)
                        });
                        return
                    }
                } else if (e === 3 && r.stateNode.current.memoizedState.isDehydrated) {
                    t.blockedOn = r.tag === 3 ? r.stateNode.containerInfo : null;
                    return
                }
            }
        }
        t.blockedOn = null
    }

    function g0(t) {
        if (t.blockedOn !== null) return !1;
        for (var e = t.targetContainers; 0 < e.length;) {
            var r = $c(t.domEventName, t.eventSystemFlags, e[0], t.nativeEvent);
            if (r === null) {
                r = t.nativeEvent;
                var n = new r.constructor(r.type, r);
                Oc = n, r.target.dispatchEvent(n), Oc = null
            } else return e = Al(r), e !== null && k1(e), t.blockedOn = r, !1;
            e.shift()
        }
        return !0
    }

    function sh(t, e, r) {
        g0(t) && r.delete(e)
    }

    function nv() {
        Bc = !1, oi !== null && g0(oi) && (oi = null), ai !== null && g0(ai) && (ai = null), li !== null && g0(li) && (li = null), Ga.forEach(sh), Wa.forEach(sh)
    }

    function Qo(t, e) {
        t.blockedOn === e && (t.blockedOn = null, Bc || (Bc = !0, vr.unstable_scheduleCallback(vr.unstable_NormalPriority, nv)))
    }

    function Qa(t) {
        function e(i) {
            return Qo(i, t)
        }
        if (0 < Fl.length) {
            Qo(Fl[0], t);
            for (var r = 1; r < Fl.length; r++) {
                var n = Fl[r];
                n.blockedOn === t && (n.blockedOn = null)
            }
        }
        for (oi !== null && Qo(oi, t), ai !== null && Qo(ai, t), li !== null && Qo(li, t), Ga.forEach(e), Wa.forEach(e), r = 0; r < Kn.length; r++) n = Kn[r], n.blockedOn === t && (n.blockedOn = null);
        for (; 0 < Kn.length && (r = Kn[0], r.blockedOn === null);) Vm(r), r.blockedOn === null && Kn.shift()
    }
    var eo = zn.ReactCurrentBatchConfig,
        H0 = !0;

    function iv(t, e, r, n) {
        var i = de,
            s = eo.transition;
        eo.transition = null;
        try {
            de = 1, P1(t, e, r, n)
        } finally {
            de = i, eo.transition = s
        }
    }

    function sv(t, e, r, n) {
        var i = de,
            s = eo.transition;
        eo.transition = null;
        try {
            de = 4, P1(t, e, r, n)
        } finally {
            de = i, eo.transition = s
        }
    }

    function P1(t, e, r, n) {
        if (H0) {
            var i = $c(t, e, r, n);
            if (i === null) M2(t, e, n, V0, r), ih(t, n);
            else if (rv(i, t, e, r, n)) n.stopPropagation();
            else if (ih(t, n), e & 4 && -1 < tv.indexOf(t)) {
                for (; i !== null;) {
                    var s = Al(i);
                    if (s !== null && Fm(s), s = $c(t, e, r, n), s === null && M2(t, e, n, V0, r), s === i) break;
                    i = s
                }
                i !== null && n.stopPropagation()
            } else M2(t, e, n, null, r)
        }
    }
    var V0 = null;

    function $c(t, e, r, n) {
        if (V0 = null, t = C1(n), t = Gi(t), t !== null)
            if (e = xs(t), e === null) t = null;
            else if (r = e.tag, r === 13) {
            if (t = Mm(e), t !== null) return t;
            t = null
        } else if (r === 3) {
            if (e.stateNode.current.memoizedState.isDehydrated) return e.tag === 3 ? e.stateNode.containerInfo : null;
            t = null
        } else e !== t && (t = null);
        return V0 = t, null
    }

    function Um(t) {
        switch (t) {
            case "cancel":
            case "click":
            case "close":
            case "contextmenu":
            case "copy":
            case "cut":
            case "auxclick":
            case "dblclick":
            case "dragend":
            case "dragstart":
            case "drop":
            case "focusin":
            case "focusout":
            case "input":
            case "invalid":
            case "keydown":
            case "keypress":
            case "keyup":
            case "mousedown":
            case "mouseup":
            case "paste":
            case "pause":
            case "play":
            case "pointercancel":
            case "pointerdown":
            case "pointerup":
            case "ratechange":
            case "reset":
            case "resize":
            case "seeked":
            case "submit":
            case "touchcancel":
            case "touchend":
            case "touchstart":
            case "volumechange":
            case "change":
            case "selectionchange":
            case "textInput":
            case "compositionstart":
            case "compositionend":
            case "compositionupdate":
            case "beforeblur":
            case "afterblur":
            case "beforeinput":
            case "blur":
            case "fullscreenchange":
            case "focus":
            case "hashchange":
            case "popstate":
            case "select":
            case "selectstart":
                return 1;
            case "drag":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "mousemove":
            case "mouseout":
            case "mouseover":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "scroll":
            case "toggle":
            case "touchmove":
            case "wheel":
            case "mouseenter":
            case "mouseleave":
            case "pointerenter":
            case "pointerleave":
                return 4;
            case "message":
                switch (W4()) {
                    case A1:
                        return 1;
                    case Om:
                        return 4;
                    case B0:
                    case Q4:
                        return 16;
                    case zm:
                        return 536870912;
                    default:
                        return 16
                }
            default:
                return 16
        }
    }
    var Xn = null,
        b1 = null,
        v0 = null;

    function Gm() {
        if (v0) return v0;
        var t, e = b1,
            r = e.length,
            n, i = "value" in Xn ? Xn.value : Xn.textContent,
            s = i.length;
        for (t = 0; t < r && e[t] === i[t]; t++);
        var o = r - t;
        for (n = 1; n <= o && e[r - n] === i[s - n]; n++);
        return v0 = i.slice(t, 1 < n ? 1 - n : void 0)
    }

    function y0(t) {
        var e = t.keyCode;
        return "charCode" in t ? (t = t.charCode, t === 0 && e === 13 && (t = 13)) : t = e, t === 10 && (t = 13), 32 <= t || t === 13 ? t : 0
    }

    function Bl() {
        return !0
    }

    function oh() {
        return !1
    }

    function _r(t) {
        function e(r, n, i, s, o) {
            this._reactName = r, this._targetInst = i, this.type = n, this.nativeEvent = s, this.target = o, this.currentTarget = null;
            for (var a in t) t.hasOwnProperty(a) && (r = t[a], this[a] = r ? r(s) : s[a]);
            return this.isDefaultPrevented = (s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1) ? Bl : oh, this.isPropagationStopped = oh, this
        }
        return Le(e.prototype, {
            preventDefault: function() {
                this.defaultPrevented = !0;
                var r = this.nativeEvent;
                r && (r.preventDefault ? r.preventDefault() : typeof r.returnValue != "unknown" && (r.returnValue = !1), this.isDefaultPrevented = Bl)
            },
            stopPropagation: function() {
                var r = this.nativeEvent;
                r && (r.stopPropagation ? r.stopPropagation() : typeof r.cancelBubble != "unknown" && (r.cancelBubble = !0), this.isPropagationStopped = Bl)
            },
            persist: function() {},
            isPersistent: Bl
        }), e
    }
    var Po = {
            eventPhase: 0,
            bubbles: 0,
            cancelable: 0,
            timeStamp: function(t) {
                return t.timeStamp || Date.now()
            },
            defaultPrevented: 0,
            isTrusted: 0
        },
        T1 = _r(Po),
        Cl = Le({}, Po, {
            view: 0,
            detail: 0
        }),
        ov = _r(Cl),
        C2, A2, Yo, Eu = Le({}, Cl, {
            screenX: 0,
            screenY: 0,
            clientX: 0,
            clientY: 0,
            pageX: 0,
            pageY: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            getModifierState: E1,
            button: 0,
            buttons: 0,
            relatedTarget: function(t) {
                return t.relatedTarget === void 0 ? t.fromElement === t.srcElement ? t.toElement : t.fromElement : t.relatedTarget
            },
            movementX: function(t) {
                return "movementX" in t ? t.movementX : (t !== Yo && (Yo && t.type === "mousemove" ? (C2 = t.screenX - Yo.screenX, A2 = t.screenY - Yo.screenY) : A2 = C2 = 0, Yo = t), C2)
            },
            movementY: function(t) {
                return "movementY" in t ? t.movementY : A2
            }
        }),
        ah = _r(Eu),
        av = Le({}, Eu, {
            dataTransfer: 0
        }),
        lv = _r(av),
        uv = Le({}, Cl, {
            relatedTarget: 0
        }),
        S2 = _r(uv),
        cv = Le({}, Po, {
            animationName: 0,
            elapsedTime: 0,
            pseudoElement: 0
        }),
        fv = _r(cv),
        dv = Le({}, Po, {
            clipboardData: function(t) {
                return "clipboardData" in t ? t.clipboardData : window.clipboardData
            }
        }),
        hv = _r(dv),
        pv = Le({}, Po, {
            data: 0
        }),
        lh = _r(pv),
        mv = {
            Esc: "Escape",
            Spacebar: " ",
            Left: "ArrowLeft",
            Up: "ArrowUp",
            Right: "ArrowRight",
            Down: "ArrowDown",
            Del: "Delete",
            Win: "OS",
            Menu: "ContextMenu",
            Apps: "ContextMenu",
            Scroll: "ScrollLock",
            MozPrintableKey: "Unidentified"
        },
        gv = {
            8: "Backspace",
            9: "Tab",
            12: "Clear",
            13: "Enter",
            16: "Shift",
            17: "Control",
            18: "Alt",
            19: "Pause",
            20: "CapsLock",
            27: "Escape",
            32: " ",
            33: "PageUp",
            34: "PageDown",
            35: "End",
            36: "Home",
            37: "ArrowLeft",
            38: "ArrowUp",
            39: "ArrowRight",
            40: "ArrowDown",
            45: "Insert",
            46: "Delete",
            112: "F1",
            113: "F2",
            114: "F3",
            115: "F4",
            116: "F5",
            117: "F6",
            118: "F7",
            119: "F8",
            120: "F9",
            121: "F10",
            122: "F11",
            123: "F12",
            144: "NumLock",
            145: "ScrollLock",
            224: "Meta"
        },
        vv = {
            Alt: "altKey",
            Control: "ctrlKey",
            Meta: "metaKey",
            Shift: "shiftKey"
        };

    function yv(t) {
        var e = this.nativeEvent;
        return e.getModifierState ? e.getModifierState(t) : (t = vv[t]) ? !!e[t] : !1
    }

    function E1() {
        return yv
    }
    var xv = Le({}, Cl, {
            key: function(t) {
                if (t.key) {
                    var e = mv[t.key] || t.key;
                    if (e !== "Unidentified") return e
                }
                return t.type === "keypress" ? (t = y0(t), t === 13 ? "Enter" : String.fromCharCode(t)) : t.type === "keydown" || t.type === "keyup" ? gv[t.keyCode] || "Unidentified" : ""
            },
            code: 0,
            location: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            repeat: 0,
            locale: 0,
            getModifierState: E1,
            charCode: function(t) {
                return t.type === "keypress" ? y0(t) : 0
            },
            keyCode: function(t) {
                return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0
            },
            which: function(t) {
                return t.type === "keypress" ? y0(t) : t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0
            }
        }),
        _v = _r(xv),
        wv = Le({}, Eu, {
            pointerId: 0,
            width: 0,
            height: 0,
            pressure: 0,
            tangentialPressure: 0,
            tiltX: 0,
            tiltY: 0,
            twist: 0,
            pointerType: 0,
            isPrimary: 0
        }),
        uh = _r(wv),
        Cv = Le({}, Cl, {
            touches: 0,
            targetTouches: 0,
            changedTouches: 0,
            altKey: 0,
            metaKey: 0,
            ctrlKey: 0,
            shiftKey: 0,
            getModifierState: E1
        }),
        Av = _r(Cv),
        Sv = Le({}, Po, {
            propertyName: 0,
            elapsedTime: 0,
            pseudoElement: 0
        }),
        kv = _r(Sv),
        Pv = Le({}, Eu, {
            deltaX: function(t) {
                return "deltaX" in t ? t.deltaX : "wheelDeltaX" in t ? -t.wheelDeltaX : 0
            },
            deltaY: function(t) {
                return "deltaY" in t ? t.deltaY : "wheelDeltaY" in t ? -t.wheelDeltaY : "wheelDelta" in t ? -t.wheelDelta : 0
            },
            deltaZ: 0,
            deltaMode: 0
        }),
        bv = _r(Pv),
        Tv = [9, 13, 27, 32],
        j1 = jn && "CompositionEvent" in window,
        xa = null;
    jn && "documentMode" in document && (xa = document.documentMode);
    var Ev = jn && "TextEvent" in window && !xa,
        Wm = jn && (!j1 || xa && 8 < xa && 11 >= xa),
        ch = " ",
        fh = !1;

    function Qm(t, e) {
        switch (t) {
            case "keyup":
                return Tv.indexOf(e.keyCode) !== -1;
            case "keydown":
                return e.keyCode !== 229;
            case "keypress":
            case "mousedown":
            case "focusout":
                return !0;
            default:
                return !1
        }
    }

    function Ym(t) {
        return t = t.detail, typeof t == "object" && "data" in t ? t.data : null
    }
    var Ds = !1;

    function jv(t, e) {
        switch (t) {
            case "compositionend":
                return Ym(e);
            case "keypress":
                return e.which !== 32 ? null : (fh = !0, ch);
            case "textInput":
                return t = e.data, t === ch && fh ? null : t;
            default:
                return null
        }
    }

    function Mv(t, e) {
        if (Ds) return t === "compositionend" || !j1 && Qm(t, e) ? (t = Gm(), v0 = b1 = Xn = null, Ds = !1, t) : null;
        switch (t) {
            case "paste":
                return null;
            case "keypress":
                if (!(e.ctrlKey || e.altKey || e.metaKey) || e.ctrlKey && e.altKey) {
                    if (e.char && 1 < e.char.length) return e.char;
                    if (e.which) return String.fromCharCode(e.which)
                }
                return null;
            case "compositionend":
                return Wm && e.locale !== "ko" ? null : e.data;
            default:
                return null
        }
    }
    var Rv = {
        color: !0,
        date: !0,
        datetime: !0,
        "datetime-local": !0,
        email: !0,
        month: !0,
        number: !0,
        password: !0,
        range: !0,
        search: !0,
        tel: !0,
        text: !0,
        time: !0,
        url: !0,
        week: !0
    };

    function dh(t) {
        var e = t && t.nodeName && t.nodeName.toLowerCase();
        return e === "input" ? !!Rv[t.type] : e === "textarea"
    }

    function qm(t, e, r, n) {
        Pm(n), e = U0(e, "onChange"), 0 < e.length && (r = new T1("onChange", "change", null, r, n), t.push({
            event: r,
            listeners: e
        }))
    }
    var _a = null,
        Ya = null;

    function Nv(t) {
        og(t, 0)
    }

    function ju(t) {
        var e = $s(t);
        if (xm(e)) return t
    }

    function Lv(t, e) {
        if (t === "change") return e
    }
    var Km = !1;
    if (jn) {
        var k2;
        if (jn) {
            var P2 = "oninput" in document;
            if (!P2) {
                var hh = document.createElement("div");
                hh.setAttribute("oninput", "return;"), P2 = typeof hh.oninput == "function"
            }
            k2 = P2
        } else k2 = !1;
        Km = k2 && (!document.documentMode || 9 < document.documentMode)
    }

    function ph() {
        _a && (_a.detachEvent("onpropertychange", Zm), Ya = _a = null)
    }

    function Zm(t) {
        if (t.propertyName === "value" && ju(Ya)) {
            var e = [];
            qm(e, Ya, t, C1(t)), jm(Nv, e)
        }
    }

    function Ov(t, e, r) {
        t === "focusin" ? (ph(), _a = e, Ya = r, _a.attachEvent("onpropertychange", Zm)) : t === "focusout" && ph()
    }

    function zv(t) {
        if (t === "selectionchange" || t === "keyup" || t === "keydown") return ju(Ya)
    }

    function Iv(t, e) {
        if (t === "click") return ju(e)
    }

    function Dv(t, e) {
        if (t === "input" || t === "change") return ju(e)
    }

    function Fv(t, e) {
        return t === e && (t !== 0 || 1 / t === 1 / e) || t !== t && e !== e
    }
    var Zr = typeof Object.is == "function" ? Object.is : Fv;

    function qa(t, e) {
        if (Zr(t, e)) return !0;
        if (typeof t != "object" || t === null || typeof e != "object" || e === null) return !1;
        var r = Object.keys(t),
            n = Object.keys(e);
        if (r.length !== n.length) return !1;
        for (n = 0; n < r.length; n++) {
            var i = r[n];
            if (!Ac.call(e, i) || !Zr(t[i], e[i])) return !1
        }
        return !0
    }

    function mh(t) {
        for (; t && t.firstChild;) t = t.firstChild;
        return t
    }

    function gh(t, e) {
        var r = mh(t);
        t = 0;
        for (var n; r;) {
            if (r.nodeType === 3) {
                if (n = t + r.textContent.length, t <= e && n >= e) return {
                    node: r,
                    offset: e - t
                };
                t = n
            }
            e: {
                for (; r;) {
                    if (r.nextSibling) {
                        r = r.nextSibling;
                        break e
                    }
                    r = r.parentNode
                }
                r = void 0
            }
            r = mh(r)
        }
    }

    function Xm(t, e) {
        return t && e ? t === e ? !0 : t && t.nodeType === 3 ? !1 : e && e.nodeType === 3 ? Xm(t, e.parentNode) : "contains" in t ? t.contains(e) : t.compareDocumentPosition ? !!(t.compareDocumentPosition(e) & 16) : !1 : !1
    }

    function Jm() {
        for (var t = window, e = I0(); e instanceof t.HTMLIFrameElement;) {
            try {
                var r = typeof e.contentWindow.location.href == "string"
            } catch {
                r = !1
            }
            if (r) t = e.contentWindow;
            else break;
            e = I0(t.document)
        }
        return e
    }

    function M1(t) {
        var e = t && t.nodeName && t.nodeName.toLowerCase();
        return e && (e === "input" && (t.type === "text" || t.type === "search" || t.type === "tel" || t.type === "url" || t.type === "password") || e === "textarea" || t.contentEditable === "true")
    }

    function Bv(t) {
        var e = Jm(),
            r = t.focusedElem,
            n = t.selectionRange;
        if (e !== r && r && r.ownerDocument && Xm(r.ownerDocument.documentElement, r)) {
            if (n !== null && M1(r)) {
                if (e = n.start, t = n.end, t === void 0 && (t = e), "selectionStart" in r) r.selectionStart = e, r.selectionEnd = Math.min(t, r.value.length);
                else if (t = (e = r.ownerDocument || document) && e.defaultView || window, t.getSelection) {
                    t = t.getSelection();
                    var i = r.textContent.length,
                        s = Math.min(n.start, i);
                    n = n.end === void 0 ? s : Math.min(n.end, i), !t.extend && s > n && (i = n, n = s, s = i), i = gh(r, s);
                    var o = gh(r, n);
                    i && o && (t.rangeCount !== 1 || t.anchorNode !== i.node || t.anchorOffset !== i.offset || t.focusNode !== o.node || t.focusOffset !== o.offset) && (e = e.createRange(), e.setStart(i.node, i.offset), t.removeAllRanges(), s > n ? (t.addRange(e), t.extend(o.node, o.offset)) : (e.setEnd(o.node, o.offset), t.addRange(e)))
                }
            }
            for (e = [], t = r; t = t.parentNode;) t.nodeType === 1 && e.push({
                element: t,
                left: t.scrollLeft,
                top: t.scrollTop
            });
            for (typeof r.focus == "function" && r.focus(), r = 0; r < e.length; r++) t = e[r], t.element.scrollLeft = t.left, t.element.scrollTop = t.top
        }
    }
    var $v = jn && "documentMode" in document && 11 >= document.documentMode,
        Fs = null,
        Hc = null,
        wa = null,
        Vc = !1;

    function vh(t, e, r) {
        var n = r.window === r ? r.document : r.nodeType === 9 ? r : r.ownerDocument;
        Vc || Fs == null || Fs !== I0(n) || (n = Fs, "selectionStart" in n && M1(n) ? n = {
            start: n.selectionStart,
            end: n.selectionEnd
        } : (n = (n.ownerDocument && n.ownerDocument.defaultView || window).getSelection(), n = {
            anchorNode: n.anchorNode,
            anchorOffset: n.anchorOffset,
            focusNode: n.focusNode,
            focusOffset: n.focusOffset
        }), wa && qa(wa, n) || (wa = n, n = U0(Hc, "onSelect"), 0 < n.length && (e = new T1("onSelect", "select", null, e, r), t.push({
            event: e,
            listeners: n
        }), e.target = Fs)))
    }

    function $l(t, e) {
        var r = {};
        return r[t.toLowerCase()] = e.toLowerCase(), r["Webkit" + t] = "webkit" + e, r["Moz" + t] = "moz" + e, r
    }
    var Bs = {
            animationend: $l("Animation", "AnimationEnd"),
            animationiteration: $l("Animation", "AnimationIteration"),
            animationstart: $l("Animation", "AnimationStart"),
            transitionend: $l("Transition", "TransitionEnd")
        },
        b2 = {},
        eg = {};
    jn && (eg = document.createElement("div").style, "AnimationEvent" in window || (delete Bs.animationend.animation, delete Bs.animationiteration.animation, delete Bs.animationstart.animation), "TransitionEvent" in window || delete Bs.transitionend.transition);

    function Mu(t) {
        if (b2[t]) return b2[t];
        if (!Bs[t]) return t;
        var e = Bs[t],
            r;
        for (r in e)
            if (e.hasOwnProperty(r) && r in eg) return b2[t] = e[r];
        return t
    }
    var tg = Mu("animationend"),
        rg = Mu("animationiteration"),
        ng = Mu("animationstart"),
        ig = Mu("transitionend"),
        sg = new Map,
        yh = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");

    function ki(t, e) {
        sg.set(t, e), ys(e, [t])
    }
    for (var T2 = 0; T2 < yh.length; T2++) {
        var E2 = yh[T2],
            Hv = E2.toLowerCase(),
            Vv = E2[0].toUpperCase() + E2.slice(1);
        ki(Hv, "on" + Vv)
    }
    ki(tg, "onAnimationEnd");
    ki(rg, "onAnimationIteration");
    ki(ng, "onAnimationStart");
    ki("dblclick", "onDoubleClick");
    ki("focusin", "onFocus");
    ki("focusout", "onBlur");
    ki(ig, "onTransitionEnd");
    co("onMouseEnter", ["mouseout", "mouseover"]);
    co("onMouseLeave", ["mouseout", "mouseover"]);
    co("onPointerEnter", ["pointerout", "pointerover"]);
    co("onPointerLeave", ["pointerout", "pointerover"]);
    ys("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
    ys("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
    ys("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
    ys("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
    ys("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
    ys("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
    var aa = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
        Uv = new Set("cancel close invalid load scroll toggle".split(" ").concat(aa));

    function xh(t, e, r) {
        var n = t.type || "unknown-event";
        t.currentTarget = r, H4(n, e, void 0, t), t.currentTarget = null
    }

    function og(t, e) {
        e = (e & 4) !== 0;
        for (var r = 0; r < t.length; r++) {
            var n = t[r],
                i = n.event;
            n = n.listeners;
            e: {
                var s = void 0;
                if (e)
                    for (var o = n.length - 1; 0 <= o; o--) {
                        var a = n[o],
                            l = a.instance,
                            u = a.currentTarget;
                        if (a = a.listener, l !== s && i.isPropagationStopped()) break e;
                        xh(i, a, u), s = l
                    } else
                        for (o = 0; o < n.length; o++) {
                            if (a = n[o], l = a.instance, u = a.currentTarget, a = a.listener, l !== s && i.isPropagationStopped()) break e;
                            xh(i, a, u), s = l
                        }
            }
        }
        if (F0) throw t = Dc, F0 = !1, Dc = null, t
    }

    function xe(t, e) {
        var r = e[Yc];
        r === void 0 && (r = e[Yc] = new Set);
        var n = t + "__bubble";
        r.has(n) || (ag(e, t, 2, !1), r.add(n))
    }

    function j2(t, e, r) {
        var n = 0;
        e && (n |= 4), ag(r, t, n, e)
    }
    var Hl = "_reactListening" + Math.random().toString(36).slice(2);

    function Ka(t) {
        if (!t[Hl]) {
            t[Hl] = !0, pm.forEach(function(r) {
                r !== "selectionchange" && (Uv.has(r) || j2(r, !1, t), j2(r, !0, t))
            });
            var e = t.nodeType === 9 ? t : t.ownerDocument;
            e === null || e[Hl] || (e[Hl] = !0, j2("selectionchange", !1, e))
        }
    }

    function ag(t, e, r, n) {
        switch (Um(e)) {
            case 1:
                var i = iv;
                break;
            case 4:
                i = sv;
                break;
            default:
                i = P1
        }
        r = i.bind(null, e, r, t), i = void 0, !Ic || e !== "touchstart" && e !== "touchmove" && e !== "wheel" || (i = !0), n ? i !== void 0 ? t.addEventListener(e, r, {
            capture: !0,
            passive: i
        }) : t.addEventListener(e, r, !0) : i !== void 0 ? t.addEventListener(e, r, {
            passive: i
        }) : t.addEventListener(e, r, !1)
    }

    function M2(t, e, r, n, i) {
        var s = n;
        if (!(e & 1) && !(e & 2) && n !== null) e: for (;;) {
            if (n === null) return;
            var o = n.tag;
            if (o === 3 || o === 4) {
                var a = n.stateNode.containerInfo;
                if (a === i || a.nodeType === 8 && a.parentNode === i) break;
                if (o === 4)
                    for (o = n.return; o !== null;) {
                        var l = o.tag;
                        if ((l === 3 || l === 4) && (l = o.stateNode.containerInfo, l === i || l.nodeType === 8 && l.parentNode === i)) return;
                        o = o.return
                    }
                for (; a !== null;) {
                    if (o = Gi(a), o === null) return;
                    if (l = o.tag, l === 5 || l === 6) {
                        n = s = o;
                        continue e
                    }
                    a = a.parentNode
                }
            }
            n = n.return
        }
        jm(function() {
            var u = s,
                c = C1(r),
                f = [];
            e: {
                var d = sg.get(t);
                if (d !== void 0) {
                    var h = T1,
                        y = t;
                    switch (t) {
                        case "keypress":
                            if (y0(r) === 0) break e;
                        case "keydown":
                        case "keyup":
                            h = _v;
                            break;
                        case "focusin":
                            y = "focus", h = S2;
                            break;
                        case "focusout":
                            y = "blur", h = S2;
                            break;
                        case "beforeblur":
                        case "afterblur":
                            h = S2;
                            break;
                        case "click":
                            if (r.button === 2) break e;
                        case "auxclick":
                        case "dblclick":
                        case "mousedown":
                        case "mousemove":
                        case "mouseup":
                        case "mouseout":
                        case "mouseover":
                        case "contextmenu":
                            h = ah;
                            break;
                        case "drag":
                        case "dragend":
                        case "dragenter":
                        case "dragexit":
                        case "dragleave":
                        case "dragover":
                        case "dragstart":
                        case "drop":
                            h = lv;
                            break;
                        case "touchcancel":
                        case "touchend":
                        case "touchmove":
                        case "touchstart":
                            h = Av;
                            break;
                        case tg:
                        case rg:
                        case ng:
                            h = fv;
                            break;
                        case ig:
                            h = kv;
                            break;
                        case "scroll":
                            h = ov;
                            break;
                        case "wheel":
                            h = bv;
                            break;
                        case "copy":
                        case "cut":
                        case "paste":
                            h = hv;
                            break;
                        case "gotpointercapture":
                        case "lostpointercapture":
                        case "pointercancel":
                        case "pointerdown":
                        case "pointermove":
                        case "pointerout":
                        case "pointerover":
                        case "pointerup":
                            h = uh
                    }
                    var g = (e & 4) !== 0,
                        w = !g && t === "scroll",
                        v = g ? d !== null ? d + "Capture" : null : d;
                    g = [];
                    for (var p = u, x; p !== null;) {
                        x = p;
                        var _ = x.stateNode;
                        if (x.tag === 5 && _ !== null && (x = _, v !== null && (_ = Ua(p, v), _ != null && g.push(Za(p, _, x)))), w) break;
                        p = p.return
                    }
                    0 < g.length && (d = new h(d, y, null, r, c), f.push({
                        event: d,
                        listeners: g
                    }))
                }
            }
            if (!(e & 7)) {
                e: {
                    if (d = t === "mouseover" || t === "pointerover", h = t === "mouseout" || t === "pointerout", d && r !== Oc && (y = r.relatedTarget || r.fromElement) && (Gi(y) || y[Mn])) break e;
                    if ((h || d) && (d = c.window === c ? c : (d = c.ownerDocument) ? d.defaultView || d.parentWindow : window, h ? (y = r.relatedTarget || r.toElement, h = u, y = y ? Gi(y) : null, y !== null && (w = xs(y), y !== w || y.tag !== 5 && y.tag !== 6) && (y = null)) : (h = null, y = u), h !== y)) {
                        if (g = ah, _ = "onMouseLeave", v = "onMouseEnter", p = "mouse", (t === "pointerout" || t === "pointerover") && (g = uh, _ = "onPointerLeave", v = "onPointerEnter", p = "pointer"), w = h == null ? d : $s(h), x = y == null ? d : $s(y), d = new g(_, p + "leave", h, r, c), d.target = w, d.relatedTarget = x, _ = null, Gi(c) === u && (g = new g(v, p + "enter", y, r, c), g.target = x, g.relatedTarget = w, _ = g), w = _, h && y) t: {
                            for (g = h, v = y, p = 0, x = g; x; x = Ps(x)) p++;
                            for (x = 0, _ = v; _; _ = Ps(_)) x++;
                            for (; 0 < p - x;) g = Ps(g),
                            p--;
                            for (; 0 < x - p;) v = Ps(v),
                            x--;
                            for (; p--;) {
                                if (g === v || v !== null && g === v.alternate) break t;
                                g = Ps(g), v = Ps(v)
                            }
                            g = null
                        }
                        else g = null;
                        h !== null && _h(f, d, h, g, !1), y !== null && w !== null && _h(f, w, y, g, !0)
                    }
                }
                e: {
                    if (d = u ? $s(u) : window, h = d.nodeName && d.nodeName.toLowerCase(), h === "select" || h === "input" && d.type === "file") var C = Lv;
                    else if (dh(d))
                        if (Km) C = Dv;
                        else {
                            C = zv;
                            var k = Ov
                        }
                    else(h = d.nodeName) && h.toLowerCase() === "input" && (d.type === "checkbox" || d.type === "radio") && (C = Iv);
                    if (C && (C = C(t, u))) {
                        qm(f, C, r, c);
                        break e
                    }
                    k && k(t, d, u),
                    t === "focusout" && (k = d._wrapperState) && k.controlled && d.type === "number" && jc(d, "number", d.value)
                }
                switch (k = u ? $s(u) : window, t) {
                    case "focusin":
                        (dh(k) || k.contentEditable === "true") && (Fs = k, Hc = u, wa = null);
                        break;
                    case "focusout":
                        wa = Hc = Fs = null;
                        break;
                    case "mousedown":
                        Vc = !0;
                        break;
                    case "contextmenu":
                    case "mouseup":
                    case "dragend":
                        Vc = !1, vh(f, r, c);
                        break;
                    case "selectionchange":
                        if ($v) break;
                    case "keydown":
                    case "keyup":
                        vh(f, r, c)
                }
                var S;
                if (j1) e: {
                    switch (t) {
                        case "compositionstart":
                            var P = "onCompositionStart";
                            break e;
                        case "compositionend":
                            P = "onCompositionEnd";
                            break e;
                        case "compositionupdate":
                            P = "onCompositionUpdate";
                            break e
                    }
                    P = void 0
                }
                else Ds ? Qm(t, r) && (P = "onCompositionEnd") : t === "keydown" && r.keyCode === 229 && (P = "onCompositionStart");P && (Wm && r.locale !== "ko" && (Ds || P !== "onCompositionStart" ? P === "onCompositionEnd" && Ds && (S = Gm()) : (Xn = c, b1 = "value" in Xn ? Xn.value : Xn.textContent, Ds = !0)), k = U0(u, P), 0 < k.length && (P = new lh(P, t, null, r, c), f.push({
                    event: P,
                    listeners: k
                }), S ? P.data = S : (S = Ym(r), S !== null && (P.data = S)))),
                (S = Ev ? jv(t, r) : Mv(t, r)) && (u = U0(u, "onBeforeInput"), 0 < u.length && (c = new lh("onBeforeInput", "beforeinput", null, r, c), f.push({
                    event: c,
                    listeners: u
                }), c.data = S))
            }
            og(f, e)
        })
    }

    function Za(t, e, r) {
        return {
            instance: t,
            listener: e,
            currentTarget: r
        }
    }

    function U0(t, e) {
        for (var r = e + "Capture", n = []; t !== null;) {
            var i = t,
                s = i.stateNode;
            i.tag === 5 && s !== null && (i = s, s = Ua(t, r), s != null && n.unshift(Za(t, s, i)), s = Ua(t, e), s != null && n.push(Za(t, s, i))), t = t.return
        }
        return n
    }

    function Ps(t) {
        if (t === null) return null;
        do t = t.return; while (t && t.tag !== 5);
        return t || null
    }

    function _h(t, e, r, n, i) {
        for (var s = e._reactName, o = []; r !== null && r !== n;) {
            var a = r,
                l = a.alternate,
                u = a.stateNode;
            if (l !== null && l === n) break;
            a.tag === 5 && u !== null && (a = u, i ? (l = Ua(r, s), l != null && o.unshift(Za(r, l, a))) : i || (l = Ua(r, s), l != null && o.push(Za(r, l, a)))), r = r.return
        }
        o.length !== 0 && t.push({
            event: e,
            listeners: o
        })
    }
    var Gv = /\r\n?/g,
        Wv = /\u0000|\uFFFD/g;

    function wh(t) {
        return (typeof t == "string" ? t : "" + t).replace(Gv, `
`).replace(Wv, "")
    }

    function Vl(t, e, r) {
        if (e = wh(e), wh(t) !== e && r) throw Error(N(425))
    }

    function G0() {}
    var Uc = null,
        Gc = null;

    function Wc(t, e) {
        return t === "textarea" || t === "noscript" || typeof e.children == "string" || typeof e.children == "number" || typeof e.dangerouslySetInnerHTML == "object" && e.dangerouslySetInnerHTML !== null && e.dangerouslySetInnerHTML.__html != null
    }
    var Qc = typeof setTimeout == "function" ? setTimeout : void 0,
        Qv = typeof clearTimeout == "function" ? clearTimeout : void 0,
        Ch = typeof Promise == "function" ? Promise : void 0,
        Yv = typeof queueMicrotask == "function" ? queueMicrotask : typeof Ch < "u" ? function(t) {
            return Ch.resolve(null).then(t).catch(qv)
        } : Qc;

    function qv(t) {
        setTimeout(function() {
            throw t
        })
    }

    function R2(t, e) {
        var r = e,
            n = 0;
        do {
            var i = r.nextSibling;
            if (t.removeChild(r), i && i.nodeType === 8)
                if (r = i.data, r === "/$") {
                    if (n === 0) {
                        t.removeChild(i), Qa(e);
                        return
                    }
                    n--
                } else r !== "$" && r !== "$?" && r !== "$!" || n++;
            r = i
        } while (r);
        Qa(e)
    }

    function ui(t) {
        for (; t != null; t = t.nextSibling) {
            var e = t.nodeType;
            if (e === 1 || e === 3) break;
            if (e === 8) {
                if (e = t.data, e === "$" || e === "$!" || e === "$?") break;
                if (e === "/$") return null
            }
        }
        return t
    }

    function Ah(t) {
        t = t.previousSibling;
        for (var e = 0; t;) {
            if (t.nodeType === 8) {
                var r = t.data;
                if (r === "$" || r === "$!" || r === "$?") {
                    if (e === 0) return t;
                    e--
                } else r === "/$" && e++
            }
            t = t.previousSibling
        }
        return null
    }
    var bo = Math.random().toString(36).slice(2),
        on = "__reactFiber$" + bo,
        Xa = "__reactProps$" + bo,
        Mn = "__reactContainer$" + bo,
        Yc = "__reactEvents$" + bo,
        Kv = "__reactListeners$" + bo,
        Zv = "__reactHandles$" + bo;

    function Gi(t) {
        var e = t[on];
        if (e) return e;
        for (var r = t.parentNode; r;) {
            if (e = r[Mn] || r[on]) {
                if (r = e.alternate, e.child !== null || r !== null && r.child !== null)
                    for (t = Ah(t); t !== null;) {
                        if (r = t[on]) return r;
                        t = Ah(t)
                    }
                return e
            }
            t = r, r = t.parentNode
        }
        return null
    }

    function Al(t) {
        return t = t[on] || t[Mn], !t || t.tag !== 5 && t.tag !== 6 && t.tag !== 13 && t.tag !== 3 ? null : t
    }

    function $s(t) {
        if (t.tag === 5 || t.tag === 6) return t.stateNode;
        throw Error(N(33))
    }

    function Ru(t) {
        return t[Xa] || null
    }
    var qc = [],
        Hs = -1;

    function Pi(t) {
        return {
            current: t
        }
    }

    function Ce(t) {
        0 > Hs || (t.current = qc[Hs], qc[Hs] = null, Hs--)
    }

    function ve(t, e) {
        Hs++, qc[Hs] = t.current, t.current = e
    }
    var _i = {},
        Mt = Pi(_i),
        Kt = Pi(!1),
        as = _i;

    function fo(t, e) {
        var r = t.type.contextTypes;
        if (!r) return _i;
        var n = t.stateNode;
        if (n && n.__reactInternalMemoizedUnmaskedChildContext === e) return n.__reactInternalMemoizedMaskedChildContext;
        var i = {},
            s;
        for (s in r) i[s] = e[s];
        return n && (t = t.stateNode, t.__reactInternalMemoizedUnmaskedChildContext = e, t.__reactInternalMemoizedMaskedChildContext = i), i
    }

    function Zt(t) {
        return t = t.childContextTypes, t != null
    }

    function W0() {
        Ce(Kt), Ce(Mt)
    }

    function Sh(t, e, r) {
        if (Mt.current !== _i) throw Error(N(168));
        ve(Mt, e), ve(Kt, r)
    }

    function lg(t, e, r) {
        var n = t.stateNode;
        if (e = e.childContextTypes, typeof n.getChildContext != "function") return r;
        n = n.getChildContext();
        for (var i in n)
            if (!(i in e)) throw Error(N(108, O4(t) || "Unknown", i));
        return Le({}, r, n)
    }

    function Q0(t) {
        return t = (t = t.stateNode) && t.__reactInternalMemoizedMergedChildContext || _i, as = Mt.current, ve(Mt, t), ve(Kt, Kt.current), !0
    }

    function kh(t, e, r) {
        var n = t.stateNode;
        if (!n) throw Error(N(169));
        r ? (t = lg(t, e, as), n.__reactInternalMemoizedMergedChildContext = t, Ce(Kt), Ce(Mt), ve(Mt, t)) : Ce(Kt), ve(Kt, r)
    }
    var Cn = null,
        Nu = !1,
        N2 = !1;

    function ug(t) {
        Cn === null ? Cn = [t] : Cn.push(t)
    }

    function Xv(t) {
        Nu = !0, ug(t)
    }

    function bi() {
        if (!N2 && Cn !== null) {
            N2 = !0;
            var t = 0,
                e = de;
            try {
                var r = Cn;
                for (de = 1; t < r.length; t++) {
                    var n = r[t];
                    do n = n(!0); while (n !== null)
                }
                Cn = null, Nu = !1
            } catch (i) {
                throw Cn !== null && (Cn = Cn.slice(t + 1)), Lm(A1, bi), i
            } finally {
                de = e, N2 = !1
            }
        }
        return null
    }
    var Vs = [],
        Us = 0,
        Y0 = null,
        q0 = 0,
        Sr = [],
        kr = 0,
        ls = null,
        kn = 1,
        Pn = "";

    function Di(t, e) {
        Vs[Us++] = q0, Vs[Us++] = Y0, Y0 = t, q0 = e
    }

    function cg(t, e, r) {
        Sr[kr++] = kn, Sr[kr++] = Pn, Sr[kr++] = ls, ls = t;
        var n = kn;
        t = Pn;
        var i = 32 - qr(n) - 1;
        n &= ~(1 << i), r += 1;
        var s = 32 - qr(e) + i;
        if (30 < s) {
            var o = i - i % 5;
            s = (n & (1 << o) - 1).toString(32), n >>= o, i -= o, kn = 1 << 32 - qr(e) + i | r << i | n, Pn = s + t
        } else kn = 1 << s | r << i | n, Pn = t
    }

    function R1(t) {
        t.return !== null && (Di(t, 1), cg(t, 1, 0))
    }

    function N1(t) {
        for (; t === Y0;) Y0 = Vs[--Us], Vs[Us] = null, q0 = Vs[--Us], Vs[Us] = null;
        for (; t === ls;) ls = Sr[--kr], Sr[kr] = null, Pn = Sr[--kr], Sr[kr] = null, kn = Sr[--kr], Sr[kr] = null
    }
    var mr = null,
        hr = null,
        Se = !1,
        Qr = null;

    function fg(t, e) {
        var r = Tr(5, null, null, 0);
        r.elementType = "DELETED", r.stateNode = e, r.return = t, e = t.deletions, e === null ? (t.deletions = [r], t.flags |= 16) : e.push(r)
    }

    function Ph(t, e) {
        switch (t.tag) {
            case 5:
                var r = t.type;
                return e = e.nodeType !== 1 || r.toLowerCase() !== e.nodeName.toLowerCase() ? null : e, e !== null ? (t.stateNode = e, mr = t, hr = ui(e.firstChild), !0) : !1;
            case 6:
                return e = t.pendingProps === "" || e.nodeType !== 3 ? null : e, e !== null ? (t.stateNode = e, mr = t, hr = null, !0) : !1;
            case 13:
                return e = e.nodeType !== 8 ? null : e, e !== null ? (r = ls !== null ? {
                    id: kn,
                    overflow: Pn
                } : null, t.memoizedState = {
                    dehydrated: e,
                    treeContext: r,
                    retryLane: 1073741824
                }, r = Tr(18, null, null, 0), r.stateNode = e, r.return = t, t.child = r, mr = t, hr = null, !0) : !1;
            default:
                return !1
        }
    }

    function Kc(t) {
        return (t.mode & 1) !== 0 && (t.flags & 128) === 0
    }

    function Zc(t) {
        if (Se) {
            var e = hr;
            if (e) {
                var r = e;
                if (!Ph(t, e)) {
                    if (Kc(t)) throw Error(N(418));
                    e = ui(r.nextSibling);
                    var n = mr;
                    e && Ph(t, e) ? fg(n, r) : (t.flags = t.flags & -4097 | 2, Se = !1, mr = t)
                }
            } else {
                if (Kc(t)) throw Error(N(418));
                t.flags = t.flags & -4097 | 2, Se = !1, mr = t
            }
        }
    }

    function bh(t) {
        for (t = t.return; t !== null && t.tag !== 5 && t.tag !== 3 && t.tag !== 13;) t = t.return;
        mr = t
    }

    function Ul(t) {
        if (t !== mr) return !1;
        if (!Se) return bh(t), Se = !0, !1;
        var e;
        if ((e = t.tag !== 3) && !(e = t.tag !== 5) && (e = t.type, e = e !== "head" && e !== "body" && !Wc(t.type, t.memoizedProps)), e && (e = hr)) {
            if (Kc(t)) throw dg(), Error(N(418));
            for (; e;) fg(t, e), e = ui(e.nextSibling)
        }
        if (bh(t), t.tag === 13) {
            if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(N(317));
            e: {
                for (t = t.nextSibling, e = 0; t;) {
                    if (t.nodeType === 8) {
                        var r = t.data;
                        if (r === "/$") {
                            if (e === 0) {
                                hr = ui(t.nextSibling);
                                break e
                            }
                            e--
                        } else r !== "$" && r !== "$!" && r !== "$?" || e++
                    }
                    t = t.nextSibling
                }
                hr = null
            }
        } else hr = mr ? ui(t.stateNode.nextSibling) : null;
        return !0
    }

    function dg() {
        for (var t = hr; t;) t = ui(t.nextSibling)
    }

    function ho() {
        hr = mr = null, Se = !1
    }

    function L1(t) {
        Qr === null ? Qr = [t] : Qr.push(t)
    }
    var Jv = zn.ReactCurrentBatchConfig;

    function qo(t, e, r) {
        if (t = r.ref, t !== null && typeof t != "function" && typeof t != "object") {
            if (r._owner) {
                if (r = r._owner, r) {
                    if (r.tag !== 1) throw Error(N(309));
                    var n = r.stateNode
                }
                if (!n) throw Error(N(147, t));
                var i = n,
                    s = "" + t;
                return e !== null && e.ref !== null && typeof e.ref == "function" && e.ref._stringRef === s ? e.ref : (e = function(o) {
                    var a = i.refs;
                    o === null ? delete a[s] : a[s] = o
                }, e._stringRef = s, e)
            }
            if (typeof t != "string") throw Error(N(284));
            if (!r._owner) throw Error(N(290, t))
        }
        return t
    }

    function Gl(t, e) {
        throw t = Object.prototype.toString.call(e), Error(N(31, t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t))
    }

    function Th(t) {
        var e = t._init;
        return e(t._payload)
    }

    function hg(t) {
        function e(v, p) {
            if (t) {
                var x = v.deletions;
                x === null ? (v.deletions = [p], v.flags |= 16) : x.push(p)
            }
        }

        function r(v, p) {
            if (!t) return null;
            for (; p !== null;) e(v, p), p = p.sibling;
            return null
        }

        function n(v, p) {
            for (v = new Map; p !== null;) p.key !== null ? v.set(p.key, p) : v.set(p.index, p), p = p.sibling;
            return v
        }

        function i(v, p) {
            return v = hi(v, p), v.index = 0, v.sibling = null, v
        }

        function s(v, p, x) {
            return v.index = x, t ? (x = v.alternate, x !== null ? (x = x.index, x < p ? (v.flags |= 2, p) : x) : (v.flags |= 2, p)) : (v.flags |= 1048576, p)
        }

        function o(v) {
            return t && v.alternate === null && (v.flags |= 2), v
        }

        function a(v, p, x, _) {
            return p === null || p.tag !== 6 ? (p = B2(x, v.mode, _), p.return = v, p) : (p = i(p, x), p.return = v, p)
        }

        function l(v, p, x, _) {
            var C = x.type;
            return C === Is ? c(v, p, x.props.children, _, x.key) : p !== null && (p.elementType === C || typeof C == "object" && C !== null && C.$$typeof === Yn && Th(C) === p.type) ? (_ = i(p, x.props), _.ref = qo(v, p, x), _.return = v, _) : (_ = k0(x.type, x.key, x.props, null, v.mode, _), _.ref = qo(v, p, x), _.return = v, _)
        }

        function u(v, p, x, _) {
            return p === null || p.tag !== 4 || p.stateNode.containerInfo !== x.containerInfo || p.stateNode.implementation !== x.implementation ? (p = $2(x, v.mode, _), p.return = v, p) : (p = i(p, x.children || []), p.return = v, p)
        }

        function c(v, p, x, _, C) {
            return p === null || p.tag !== 7 ? (p = Xi(x, v.mode, _, C), p.return = v, p) : (p = i(p, x), p.return = v, p)
        }

        function f(v, p, x) {
            if (typeof p == "string" && p !== "" || typeof p == "number") return p = B2("" + p, v.mode, x), p.return = v, p;
            if (typeof p == "object" && p !== null) {
                switch (p.$$typeof) {
                    case Ll:
                        return x = k0(p.type, p.key, p.props, null, v.mode, x), x.ref = qo(v, null, p), x.return = v, x;
                    case zs:
                        return p = $2(p, v.mode, x), p.return = v, p;
                    case Yn:
                        var _ = p._init;
                        return f(v, _(p._payload), x)
                }
                if (sa(p) || Uo(p)) return p = Xi(p, v.mode, x, null), p.return = v, p;
                Gl(v, p)
            }
            return null
        }

        function d(v, p, x, _) {
            var C = p !== null ? p.key : null;
            if (typeof x == "string" && x !== "" || typeof x == "number") return C !== null ? null : a(v, p, "" + x, _);
            if (typeof x == "object" && x !== null) {
                switch (x.$$typeof) {
                    case Ll:
                        return x.key === C ? l(v, p, x, _) : null;
                    case zs:
                        return x.key === C ? u(v, p, x, _) : null;
                    case Yn:
                        return C = x._init, d(v, p, C(x._payload), _)
                }
                if (sa(x) || Uo(x)) return C !== null ? null : c(v, p, x, _, null);
                Gl(v, x)
            }
            return null
        }

        function h(v, p, x, _, C) {
            if (typeof _ == "string" && _ !== "" || typeof _ == "number") return v = v.get(x) || null, a(p, v, "" + _, C);
            if (typeof _ == "object" && _ !== null) {
                switch (_.$$typeof) {
                    case Ll:
                        return v = v.get(_.key === null ? x : _.key) || null, l(p, v, _, C);
                    case zs:
                        return v = v.get(_.key === null ? x : _.key) || null, u(p, v, _, C);
                    case Yn:
                        var k = _._init;
                        return h(v, p, x, k(_._payload), C)
                }
                if (sa(_) || Uo(_)) return v = v.get(x) || null, c(p, v, _, C, null);
                Gl(p, _)
            }
            return null
        }

        function y(v, p, x, _) {
            for (var C = null, k = null, S = p, P = p = 0, T = null; S !== null && P < x.length; P++) {
                S.index > P ? (T = S, S = null) : T = S.sibling;
                var b = d(v, S, x[P], _);
                if (b === null) {
                    S === null && (S = T);
                    break
                }
                t && S && b.alternate === null && e(v, S), p = s(b, p, P), k === null ? C = b : k.sibling = b, k = b, S = T
            }
            if (P === x.length) return r(v, S), Se && Di(v, P), C;
            if (S === null) {
                for (; P < x.length; P++) S = f(v, x[P], _), S !== null && (p = s(S, p, P), k === null ? C = S : k.sibling = S, k = S);
                return Se && Di(v, P), C
            }
            for (S = n(v, S); P < x.length; P++) T = h(S, v, P, x[P], _), T !== null && (t && T.alternate !== null && S.delete(T.key === null ? P : T.key), p = s(T, p, P), k === null ? C = T : k.sibling = T, k = T);
            return t && S.forEach(function(I) {
                return e(v, I)
            }), Se && Di(v, P), C
        }

        function g(v, p, x, _) {
            var C = Uo(x);
            if (typeof C != "function") throw Error(N(150));
            if (x = C.call(x), x == null) throw Error(N(151));
            for (var k = C = null, S = p, P = p = 0, T = null, b = x.next(); S !== null && !b.done; P++, b = x.next()) {
                S.index > P ? (T = S, S = null) : T = S.sibling;
                var I = d(v, S, b.value, _);
                if (I === null) {
                    S === null && (S = T);
                    break
                }
                t && S && I.alternate === null && e(v, S), p = s(I, p, P), k === null ? C = I : k.sibling = I, k = I, S = T
            }
            if (b.done) return r(v, S), Se && Di(v, P), C;
            if (S === null) {
                for (; !b.done; P++, b = x.next()) b = f(v, b.value, _), b !== null && (p = s(b, p, P), k === null ? C = b : k.sibling = b, k = b);
                return Se && Di(v, P), C
            }
            for (S = n(v, S); !b.done; P++, b = x.next()) b = h(S, v, P, b.value, _), b !== null && (t && b.alternate !== null && S.delete(b.key === null ? P : b.key), p = s(b, p, P), k === null ? C = b : k.sibling = b, k = b);
            return t && S.forEach(function(L) {
                return e(v, L)
            }), Se && Di(v, P), C
        }

        function w(v, p, x, _) {
            if (typeof x == "object" && x !== null && x.type === Is && x.key === null && (x = x.props.children), typeof x == "object" && x !== null) {
                switch (x.$$typeof) {
                    case Ll:
                        e: {
                            for (var C = x.key, k = p; k !== null;) {
                                if (k.key === C) {
                                    if (C = x.type, C === Is) {
                                        if (k.tag === 7) {
                                            r(v, k.sibling), p = i(k, x.props.children), p.return = v, v = p;
                                            break e
                                        }
                                    } else if (k.elementType === C || typeof C == "object" && C !== null && C.$$typeof === Yn && Th(C) === k.type) {
                                        r(v, k.sibling), p = i(k, x.props), p.ref = qo(v, k, x), p.return = v, v = p;
                                        break e
                                    }
                                    r(v, k);
                                    break
                                } else e(v, k);
                                k = k.sibling
                            }
                            x.type === Is ? (p = Xi(x.props.children, v.mode, _, x.key), p.return = v, v = p) : (_ = k0(x.type, x.key, x.props, null, v.mode, _), _.ref = qo(v, p, x), _.return = v, v = _)
                        }
                        return o(v);
                    case zs:
                        e: {
                            for (k = x.key; p !== null;) {
                                if (p.key === k)
                                    if (p.tag === 4 && p.stateNode.containerInfo === x.containerInfo && p.stateNode.implementation === x.implementation) {
                                        r(v, p.sibling), p = i(p, x.children || []), p.return = v, v = p;
                                        break e
                                    } else {
                                        r(v, p);
                                        break
                                    }
                                else e(v, p);
                                p = p.sibling
                            }
                            p = $2(x, v.mode, _),
                            p.return = v,
                            v = p
                        }
                        return o(v);
                    case Yn:
                        return k = x._init, w(v, p, k(x._payload), _)
                }
                if (sa(x)) return y(v, p, x, _);
                if (Uo(x)) return g(v, p, x, _);
                Gl(v, x)
            }
            return typeof x == "string" && x !== "" || typeof x == "number" ? (x = "" + x, p !== null && p.tag === 6 ? (r(v, p.sibling), p = i(p, x), p.return = v, v = p) : (r(v, p), p = B2(x, v.mode, _), p.return = v, v = p), o(v)) : r(v, p)
        }
        return w
    }
    var po = hg(!0),
        pg = hg(!1),
        K0 = Pi(null),
        Z0 = null,
        Gs = null,
        O1 = null;

    function z1() {
        O1 = Gs = Z0 = null
    }

    function I1(t) {
        var e = K0.current;
        Ce(K0), t._currentValue = e
    }

    function Xc(t, e, r) {
        for (; t !== null;) {
            var n = t.alternate;
            if ((t.childLanes & e) !== e ? (t.childLanes |= e, n !== null && (n.childLanes |= e)) : n !== null && (n.childLanes & e) !== e && (n.childLanes |= e), t === r) break;
            t = t.return
        }
    }

    function to(t, e) {
        Z0 = t, O1 = Gs = null, t = t.dependencies, t !== null && t.firstContext !== null && (t.lanes & e && (qt = !0), t.firstContext = null)
    }

    function Lr(t) {
        var e = t._currentValue;
        if (O1 !== t)
            if (t = {
                    context: t,
                    memoizedValue: e,
                    next: null
                }, Gs === null) {
                if (Z0 === null) throw Error(N(308));
                Gs = t, Z0.dependencies = {
                    lanes: 0,
                    firstContext: t
                }
            } else Gs = Gs.next = t;
        return e
    }
    var Wi = null;

    function D1(t) {
        Wi === null ? Wi = [t] : Wi.push(t)
    }

    function mg(t, e, r, n) {
        var i = e.interleaved;
        return i === null ? (r.next = r, D1(e)) : (r.next = i.next, i.next = r), e.interleaved = r, Rn(t, n)
    }

    function Rn(t, e) {
        t.lanes |= e;
        var r = t.alternate;
        for (r !== null && (r.lanes |= e), r = t, t = t.return; t !== null;) t.childLanes |= e, r = t.alternate, r !== null && (r.childLanes |= e), r = t, t = t.return;
        return r.tag === 3 ? r.stateNode : null
    }
    var qn = !1;

    function F1(t) {
        t.updateQueue = {
            baseState: t.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: {
                pending: null,
                interleaved: null,
                lanes: 0
            },
            effects: null
        }
    }

    function gg(t, e) {
        t = t.updateQueue, e.updateQueue === t && (e.updateQueue = {
            baseState: t.baseState,
            firstBaseUpdate: t.firstBaseUpdate,
            lastBaseUpdate: t.lastBaseUpdate,
            shared: t.shared,
            effects: t.effects
        })
    }

    function Tn(t, e) {
        return {
            eventTime: t,
            lane: e,
            tag: 0,
            payload: null,
            callback: null,
            next: null
        }
    }

    function ci(t, e, r) {
        var n = t.updateQueue;
        if (n === null) return null;
        if (n = n.shared, ae & 2) {
            var i = n.pending;
            return i === null ? e.next = e : (e.next = i.next, i.next = e), n.pending = e, Rn(t, r)
        }
        return i = n.interleaved, i === null ? (e.next = e, D1(n)) : (e.next = i.next, i.next = e), n.interleaved = e, Rn(t, r)
    }

    function x0(t, e, r) {
        if (e = e.updateQueue, e !== null && (e = e.shared, (r & 4194240) !== 0)) {
            var n = e.lanes;
            n &= t.pendingLanes, r |= n, e.lanes = r, S1(t, r)
        }
    }

    function Eh(t, e) {
        var r = t.updateQueue,
            n = t.alternate;
        if (n !== null && (n = n.updateQueue, r === n)) {
            var i = null,
                s = null;
            if (r = r.firstBaseUpdate, r !== null) {
                do {
                    var o = {
                        eventTime: r.eventTime,
                        lane: r.lane,
                        tag: r.tag,
                        payload: r.payload,
                        callback: r.callback,
                        next: null
                    };
                    s === null ? i = s = o : s = s.next = o, r = r.next
                } while (r !== null);
                s === null ? i = s = e : s = s.next = e
            } else i = s = e;
            r = {
                baseState: n.baseState,
                firstBaseUpdate: i,
                lastBaseUpdate: s,
                shared: n.shared,
                effects: n.effects
            }, t.updateQueue = r;
            return
        }
        t = r.lastBaseUpdate, t === null ? r.firstBaseUpdate = e : t.next = e, r.lastBaseUpdate = e
    }

    function X0(t, e, r, n) {
        var i = t.updateQueue;
        qn = !1;
        var s = i.firstBaseUpdate,
            o = i.lastBaseUpdate,
            a = i.shared.pending;
        if (a !== null) {
            i.shared.pending = null;
            var l = a,
                u = l.next;
            l.next = null, o === null ? s = u : o.next = u, o = l;
            var c = t.alternate;
            c !== null && (c = c.updateQueue, a = c.lastBaseUpdate, a !== o && (a === null ? c.firstBaseUpdate = u : a.next = u, c.lastBaseUpdate = l))
        }
        if (s !== null) {
            var f = i.baseState;
            o = 0, c = u = l = null, a = s;
            do {
                var d = a.lane,
                    h = a.eventTime;
                if ((n & d) === d) {
                    c !== null && (c = c.next = {
                        eventTime: h,
                        lane: 0,
                        tag: a.tag,
                        payload: a.payload,
                        callback: a.callback,
                        next: null
                    });
                    e: {
                        var y = t,
                            g = a;
                        switch (d = e, h = r, g.tag) {
                            case 1:
                                if (y = g.payload, typeof y == "function") {
                                    f = y.call(h, f, d);
                                    break e
                                }
                                f = y;
                                break e;
                            case 3:
                                y.flags = y.flags & -65537 | 128;
                            case 0:
                                if (y = g.payload, d = typeof y == "function" ? y.call(h, f, d) : y, d == null) break e;
                                f = Le({}, f, d);
                                break e;
                            case 2:
                                qn = !0
                        }
                    }
                    a.callback !== null && a.lane !== 0 && (t.flags |= 64, d = i.effects, d === null ? i.effects = [a] : d.push(a))
                } else h = {
                    eventTime: h,
                    lane: d,
                    tag: a.tag,
                    payload: a.payload,
                    callback: a.callback,
                    next: null
                }, c === null ? (u = c = h, l = f) : c = c.next = h, o |= d;
                if (a = a.next, a === null) {
                    if (a = i.shared.pending, a === null) break;
                    d = a, a = d.next, d.next = null, i.lastBaseUpdate = d, i.shared.pending = null
                }
            } while (!0);
            if (c === null && (l = f), i.baseState = l, i.firstBaseUpdate = u, i.lastBaseUpdate = c, e = i.shared.interleaved, e !== null) {
                i = e;
                do o |= i.lane, i = i.next; while (i !== e)
            } else s === null && (i.shared.lanes = 0);
            cs |= o, t.lanes = o, t.memoizedState = f
        }
    }

    function jh(t, e, r) {
        if (t = e.effects, e.effects = null, t !== null)
            for (e = 0; e < t.length; e++) {
                var n = t[e],
                    i = n.callback;
                if (i !== null) {
                    if (n.callback = null, n = r, typeof i != "function") throw Error(N(191, i));
                    i.call(n)
                }
            }
    }
    var Sl = {},
        fn = Pi(Sl),
        Ja = Pi(Sl),
        el = Pi(Sl);

    function Qi(t) {
        if (t === Sl) throw Error(N(174));
        return t
    }

    function B1(t, e) {
        switch (ve(el, e), ve(Ja, t), ve(fn, Sl), t = e.nodeType, t) {
            case 9:
            case 11:
                e = (e = e.documentElement) ? e.namespaceURI : Rc(null, "");
                break;
            default:
                t = t === 8 ? e.parentNode : e, e = t.namespaceURI || null, t = t.tagName, e = Rc(e, t)
        }
        Ce(fn), ve(fn, e)
    }

    function mo() {
        Ce(fn), Ce(Ja), Ce(el)
    }

    function vg(t) {
        Qi(el.current);
        var e = Qi(fn.current),
            r = Rc(e, t.type);
        e !== r && (ve(Ja, t), ve(fn, r))
    }

    function $1(t) {
        Ja.current === t && (Ce(fn), Ce(Ja))
    }
    var Ee = Pi(0);

    function J0(t) {
        for (var e = t; e !== null;) {
            if (e.tag === 13) {
                var r = e.memoizedState;
                if (r !== null && (r = r.dehydrated, r === null || r.data === "$?" || r.data === "$!")) return e
            } else if (e.tag === 19 && e.memoizedProps.revealOrder !== void 0) {
                if (e.flags & 128) return e
            } else if (e.child !== null) {
                e.child.return = e, e = e.child;
                continue
            }
            if (e === t) break;
            for (; e.sibling === null;) {
                if (e.return === null || e.return === t) return null;
                e = e.return
            }
            e.sibling.return = e.return, e = e.sibling
        }
        return null
    }
    var L2 = [];

    function H1() {
        for (var t = 0; t < L2.length; t++) L2[t]._workInProgressVersionPrimary = null;
        L2.length = 0
    }
    var _0 = zn.ReactCurrentDispatcher,
        O2 = zn.ReactCurrentBatchConfig,
        us = 0,
        Ne = null,
        Je = null,
        at = null,
        eu = !1,
        Ca = !1,
        tl = 0,
        e7 = 0;

    function At() {
        throw Error(N(321))
    }

    function V1(t, e) {
        if (e === null) return !1;
        for (var r = 0; r < e.length && r < t.length; r++)
            if (!Zr(t[r], e[r])) return !1;
        return !0
    }

    function U1(t, e, r, n, i, s) {
        if (us = s, Ne = e, e.memoizedState = null, e.updateQueue = null, e.lanes = 0, _0.current = t === null || t.memoizedState === null ? i7 : s7, t = r(n, i), Ca) {
            s = 0;
            do {
                if (Ca = !1, tl = 0, 25 <= s) throw Error(N(301));
                s += 1, at = Je = null, e.updateQueue = null, _0.current = o7, t = r(n, i)
            } while (Ca)
        }
        if (_0.current = tu, e = Je !== null && Je.next !== null, us = 0, at = Je = Ne = null, eu = !1, e) throw Error(N(300));
        return t
    }

    function G1() {
        var t = tl !== 0;
        return tl = 0, t
    }

    function rn() {
        var t = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null
        };
        return at === null ? Ne.memoizedState = at = t : at = at.next = t, at
    }

    function Or() {
        if (Je === null) {
            var t = Ne.alternate;
            t = t !== null ? t.memoizedState : null
        } else t = Je.next;
        var e = at === null ? Ne.memoizedState : at.next;
        if (e !== null) at = e, Je = t;
        else {
            if (t === null) throw Error(N(310));
            Je = t, t = {
                memoizedState: Je.memoizedState,
                baseState: Je.baseState,
                baseQueue: Je.baseQueue,
                queue: Je.queue,
                next: null
            }, at === null ? Ne.memoizedState = at = t : at = at.next = t
        }
        return at
    }

    function rl(t, e) {
        return typeof e == "function" ? e(t) : e
    }

    function z2(t) {
        var e = Or(),
            r = e.queue;
        if (r === null) throw Error(N(311));
        r.lastRenderedReducer = t;
        var n = Je,
            i = n.baseQueue,
            s = r.pending;
        if (s !== null) {
            if (i !== null) {
                var o = i.next;
                i.next = s.next, s.next = o
            }
            n.baseQueue = i = s, r.pending = null
        }
        if (i !== null) {
            s = i.next, n = n.baseState;
            var a = o = null,
                l = null,
                u = s;
            do {
                var c = u.lane;
                if ((us & c) === c) l !== null && (l = l.next = {
                    lane: 0,
                    action: u.action,
                    hasEagerState: u.hasEagerState,
                    eagerState: u.eagerState,
                    next: null
                }), n = u.hasEagerState ? u.eagerState : t(n, u.action);
                else {
                    var f = {
                        lane: c,
                        action: u.action,
                        hasEagerState: u.hasEagerState,
                        eagerState: u.eagerState,
                        next: null
                    };
                    l === null ? (a = l = f, o = n) : l = l.next = f, Ne.lanes |= c, cs |= c
                }
                u = u.next
            } while (u !== null && u !== s);
            l === null ? o = n : l.next = a, Zr(n, e.memoizedState) || (qt = !0), e.memoizedState = n, e.baseState = o, e.baseQueue = l, r.lastRenderedState = n
        }
        if (t = r.interleaved, t !== null) {
            i = t;
            do s = i.lane, Ne.lanes |= s, cs |= s, i = i.next; while (i !== t)
        } else i === null && (r.lanes = 0);
        return [e.memoizedState, r.dispatch]
    }

    function I2(t) {
        var e = Or(),
            r = e.queue;
        if (r === null) throw Error(N(311));
        r.lastRenderedReducer = t;
        var n = r.dispatch,
            i = r.pending,
            s = e.memoizedState;
        if (i !== null) {
            r.pending = null;
            var o = i = i.next;
            do s = t(s, o.action), o = o.next; while (o !== i);
            Zr(s, e.memoizedState) || (qt = !0), e.memoizedState = s, e.baseQueue === null && (e.baseState = s), r.lastRenderedState = s
        }
        return [s, n]
    }

    function yg() {}

    function xg(t, e) {
        var r = Ne,
            n = Or(),
            i = e(),
            s = !Zr(n.memoizedState, i);
        if (s && (n.memoizedState = i, qt = !0), n = n.queue, W1(Cg.bind(null, r, n, t), [t]), n.getSnapshot !== e || s || at !== null && at.memoizedState.tag & 1) {
            if (r.flags |= 2048, nl(9, wg.bind(null, r, n, i, e), void 0, null), ut === null) throw Error(N(349));
            us & 30 || _g(r, e, i)
        }
        return i
    }

    function _g(t, e, r) {
        t.flags |= 16384, t = {
            getSnapshot: e,
            value: r
        }, e = Ne.updateQueue, e === null ? (e = {
            lastEffect: null,
            stores: null
        }, Ne.updateQueue = e, e.stores = [t]) : (r = e.stores, r === null ? e.stores = [t] : r.push(t))
    }

    function wg(t, e, r, n) {
        e.value = r, e.getSnapshot = n, Ag(e) && Sg(t)
    }

    function Cg(t, e, r) {
        return r(function() {
            Ag(e) && Sg(t)
        })
    }

    function Ag(t) {
        var e = t.getSnapshot;
        t = t.value;
        try {
            var r = e();
            return !Zr(t, r)
        } catch {
            return !0
        }
    }

    function Sg(t) {
        var e = Rn(t, 1);
        e !== null && Kr(e, t, 1, -1)
    }

    function Mh(t) {
        var e = rn();
        return typeof t == "function" && (t = t()), e.memoizedState = e.baseState = t, t = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: rl,
            lastRenderedState: t
        }, e.queue = t, t = t.dispatch = n7.bind(null, Ne, t), [e.memoizedState, t]
    }

    function nl(t, e, r, n) {
        return t = {
            tag: t,
            create: e,
            destroy: r,
            deps: n,
            next: null
        }, e = Ne.updateQueue, e === null ? (e = {
            lastEffect: null,
            stores: null
        }, Ne.updateQueue = e, e.lastEffect = t.next = t) : (r = e.lastEffect, r === null ? e.lastEffect = t.next = t : (n = r.next, r.next = t, t.next = n, e.lastEffect = t)), t
    }

    function kg() {
        return Or().memoizedState
    }

    function w0(t, e, r, n) {
        var i = rn();
        Ne.flags |= t, i.memoizedState = nl(1 | e, r, void 0, n === void 0 ? null : n)
    }

    function Lu(t, e, r, n) {
        var i = Or();
        n = n === void 0 ? null : n;
        var s = void 0;
        if (Je !== null) {
            var o = Je.memoizedState;
            if (s = o.destroy, n !== null && V1(n, o.deps)) {
                i.memoizedState = nl(e, r, s, n);
                return
            }
        }
        Ne.flags |= t, i.memoizedState = nl(1 | e, r, s, n)
    }

    function Rh(t, e) {
        return w0(8390656, 8, t, e)
    }

    function W1(t, e) {
        return Lu(2048, 8, t, e)
    }

    function Pg(t, e) {
        return Lu(4, 2, t, e)
    }

    function bg(t, e) {
        return Lu(4, 4, t, e)
    }

    function Tg(t, e) {
        if (typeof e == "function") return t = t(), e(t),
            function() {
                e(null)
            };
        if (e != null) return t = t(), e.current = t,
            function() {
                e.current = null
            }
    }

    function Eg(t, e, r) {
        return r = r != null ? r.concat([t]) : null, Lu(4, 4, Tg.bind(null, e, t), r)
    }

    function Q1() {}

    function jg(t, e) {
        var r = Or();
        e = e === void 0 ? null : e;
        var n = r.memoizedState;
        return n !== null && e !== null && V1(e, n[1]) ? n[0] : (r.memoizedState = [t, e], t)
    }

    function Mg(t, e) {
        var r = Or();
        e = e === void 0 ? null : e;
        var n = r.memoizedState;
        return n !== null && e !== null && V1(e, n[1]) ? n[0] : (t = t(), r.memoizedState = [t, e], t)
    }

    function Rg(t, e, r) {
        return us & 21 ? (Zr(r, e) || (r = Im(), Ne.lanes |= r, cs |= r, t.baseState = !0), e) : (t.baseState && (t.baseState = !1, qt = !0), t.memoizedState = r)
    }

    function t7(t, e) {
        var r = de;
        de = r !== 0 && 4 > r ? r : 4, t(!0);
        var n = O2.transition;
        O2.transition = {};
        try {
            t(!1), e()
        } finally {
            de = r, O2.transition = n
        }
    }

    function Ng() {
        return Or().memoizedState
    }

    function r7(t, e, r) {
        var n = di(t);
        if (r = {
                lane: n,
                action: r,
                hasEagerState: !1,
                eagerState: null,
                next: null
            }, Lg(t)) Og(e, r);
        else if (r = mg(t, e, r, n), r !== null) {
            var i = Vt();
            Kr(r, t, n, i), zg(r, e, n)
        }
    }

    function n7(t, e, r) {
        var n = di(t),
            i = {
                lane: n,
                action: r,
                hasEagerState: !1,
                eagerState: null,
                next: null
            };
        if (Lg(t)) Og(e, i);
        else {
            var s = t.alternate;
            if (t.lanes === 0 && (s === null || s.lanes === 0) && (s = e.lastRenderedReducer, s !== null)) try {
                var o = e.lastRenderedState,
                    a = s(o, r);
                if (i.hasEagerState = !0, i.eagerState = a, Zr(a, o)) {
                    var l = e.interleaved;
                    l === null ? (i.next = i, D1(e)) : (i.next = l.next, l.next = i), e.interleaved = i;
                    return
                }
            } catch {} finally {}
            r = mg(t, e, i, n), r !== null && (i = Vt(), Kr(r, t, n, i), zg(r, e, n))
        }
    }

    function Lg(t) {
        var e = t.alternate;
        return t === Ne || e !== null && e === Ne
    }

    function Og(t, e) {
        Ca = eu = !0;
        var r = t.pending;
        r === null ? e.next = e : (e.next = r.next, r.next = e), t.pending = e
    }

    function zg(t, e, r) {
        if (r & 4194240) {
            var n = e.lanes;
            n &= t.pendingLanes, r |= n, e.lanes = r, S1(t, r)
        }
    }
    var tu = {
            readContext: Lr,
            useCallback: At,
            useContext: At,
            useEffect: At,
            useImperativeHandle: At,
            useInsertionEffect: At,
            useLayoutEffect: At,
            useMemo: At,
            useReducer: At,
            useRef: At,
            useState: At,
            useDebugValue: At,
            useDeferredValue: At,
            useTransition: At,
            useMutableSource: At,
            useSyncExternalStore: At,
            useId: At,
            unstable_isNewReconciler: !1
        },
        i7 = {
            readContext: Lr,
            useCallback: function(t, e) {
                return rn().memoizedState = [t, e === void 0 ? null : e], t
            },
            useContext: Lr,
            useEffect: Rh,
            useImperativeHandle: function(t, e, r) {
                return r = r != null ? r.concat([t]) : null, w0(4194308, 4, Tg.bind(null, e, t), r)
            },
            useLayoutEffect: function(t, e) {
                return w0(4194308, 4, t, e)
            },
            useInsertionEffect: function(t, e) {
                return w0(4, 2, t, e)
            },
            useMemo: function(t, e) {
                var r = rn();
                return e = e === void 0 ? null : e, t = t(), r.memoizedState = [t, e], t
            },
            useReducer: function(t, e, r) {
                var n = rn();
                return e = r !== void 0 ? r(e) : e, n.memoizedState = n.baseState = e, t = {
                    pending: null,
                    interleaved: null,
                    lanes: 0,
                    dispatch: null,
                    lastRenderedReducer: t,
                    lastRenderedState: e
                }, n.queue = t, t = t.dispatch = r7.bind(null, Ne, t), [n.memoizedState, t]
            },
            useRef: function(t) {
                var e = rn();
                return t = {
                    current: t
                }, e.memoizedState = t
            },
            useState: Mh,
            useDebugValue: Q1,
            useDeferredValue: function(t) {
                return rn().memoizedState = t
            },
            useTransition: function() {
                var t = Mh(!1),
                    e = t[0];
                return t = t7.bind(null, t[1]), rn().memoizedState = t, [e, t]
            },
            useMutableSource: function() {},
            useSyncExternalStore: function(t, e, r) {
                var n = Ne,
                    i = rn();
                if (Se) {
                    if (r === void 0) throw Error(N(407));
                    r = r()
                } else {
                    if (r = e(), ut === null) throw Error(N(349));
                    us & 30 || _g(n, e, r)
                }
                i.memoizedState = r;
                var s = {
                    value: r,
                    getSnapshot: e
                };
                return i.queue = s, Rh(Cg.bind(null, n, s, t), [t]), n.flags |= 2048, nl(9, wg.bind(null, n, s, r, e), void 0, null), r
            },
            useId: function() {
                var t = rn(),
                    e = ut.identifierPrefix;
                if (Se) {
                    var r = Pn,
                        n = kn;
                    r = (n & ~(1 << 32 - qr(n) - 1)).toString(32) + r, e = ":" + e + "R" + r, r = tl++, 0 < r && (e += "H" + r.toString(32)), e += ":"
                } else r = e7++, e = ":" + e + "r" + r.toString(32) + ":";
                return t.memoizedState = e
            },
            unstable_isNewReconciler: !1
        },
        s7 = {
            readContext: Lr,
            useCallback: jg,
            useContext: Lr,
            useEffect: W1,
            useImperativeHandle: Eg,
            useInsertionEffect: Pg,
            useLayoutEffect: bg,
            useMemo: Mg,
            useReducer: z2,
            useRef: kg,
            useState: function() {
                return z2(rl)
            },
            useDebugValue: Q1,
            useDeferredValue: function(t) {
                var e = Or();
                return Rg(e, Je.memoizedState, t)
            },
            useTransition: function() {
                var t = z2(rl)[0],
                    e = Or().memoizedState;
                return [t, e]
            },
            useMutableSource: yg,
            useSyncExternalStore: xg,
            useId: Ng,
            unstable_isNewReconciler: !1
        },
        o7 = {
            readContext: Lr,
            useCallback: jg,
            useContext: Lr,
            useEffect: W1,
            useImperativeHandle: Eg,
            useInsertionEffect: Pg,
            useLayoutEffect: bg,
            useMemo: Mg,
            useReducer: I2,
            useRef: kg,
            useState: function() {
                return I2(rl)
            },
            useDebugValue: Q1,
            useDeferredValue: function(t) {
                var e = Or();
                return Je === null ? e.memoizedState = t : Rg(e, Je.memoizedState, t)
            },
            useTransition: function() {
                var t = I2(rl)[0],
                    e = Or().memoizedState;
                return [t, e]
            },
            useMutableSource: yg,
            useSyncExternalStore: xg,
            useId: Ng,
            unstable_isNewReconciler: !1
        };

    function Gr(t, e) {
        if (t && t.defaultProps) {
            e = Le({}, e), t = t.defaultProps;
            for (var r in t) e[r] === void 0 && (e[r] = t[r]);
            return e
        }
        return e
    }

    function Jc(t, e, r, n) {
        e = t.memoizedState, r = r(n, e), r = r == null ? e : Le({}, e, r), t.memoizedState = r, t.lanes === 0 && (t.updateQueue.baseState = r)
    }
    var Ou = {
        isMounted: function(t) {
            return (t = t._reactInternals) ? xs(t) === t : !1
        },
        enqueueSetState: function(t, e, r) {
            t = t._reactInternals;
            var n = Vt(),
                i = di(t),
                s = Tn(n, i);
            s.payload = e, r != null && (s.callback = r), e = ci(t, s, i), e !== null && (Kr(e, t, i, n), x0(e, t, i))
        },
        enqueueReplaceState: function(t, e, r) {
            t = t._reactInternals;
            var n = Vt(),
                i = di(t),
                s = Tn(n, i);
            s.tag = 1, s.payload = e, r != null && (s.callback = r), e = ci(t, s, i), e !== null && (Kr(e, t, i, n), x0(e, t, i))
        },
        enqueueForceUpdate: function(t, e) {
            t = t._reactInternals;
            var r = Vt(),
                n = di(t),
                i = Tn(r, n);
            i.tag = 2, e != null && (i.callback = e), e = ci(t, i, n), e !== null && (Kr(e, t, n, r), x0(e, t, n))
        }
    };

    function Nh(t, e, r, n, i, s, o) {
        return t = t.stateNode, typeof t.shouldComponentUpdate == "function" ? t.shouldComponentUpdate(n, s, o) : e.prototype && e.prototype.isPureReactComponent ? !qa(r, n) || !qa(i, s) : !0
    }

    function Ig(t, e, r) {
        var n = !1,
            i = _i,
            s = e.contextType;
        return typeof s == "object" && s !== null ? s = Lr(s) : (i = Zt(e) ? as : Mt.current, n = e.contextTypes, s = (n = n != null) ? fo(t, i) : _i), e = new e(r, s), t.memoizedState = e.state !== null && e.state !== void 0 ? e.state : null, e.updater = Ou, t.stateNode = e, e._reactInternals = t, n && (t = t.stateNode, t.__reactInternalMemoizedUnmaskedChildContext = i, t.__reactInternalMemoizedMaskedChildContext = s), e
    }

    function Lh(t, e, r, n) {
        t = e.state, typeof e.componentWillReceiveProps == "function" && e.componentWillReceiveProps(r, n), typeof e.UNSAFE_componentWillReceiveProps == "function" && e.UNSAFE_componentWillReceiveProps(r, n), e.state !== t && Ou.enqueueReplaceState(e, e.state, null)
    }

    function ef(t, e, r, n) {
        var i = t.stateNode;
        i.props = r, i.state = t.memoizedState, i.refs = {}, F1(t);
        var s = e.contextType;
        typeof s == "object" && s !== null ? i.context = Lr(s) : (s = Zt(e) ? as : Mt.current, i.context = fo(t, s)), i.state = t.memoizedState, s = e.getDerivedStateFromProps, typeof s == "function" && (Jc(t, e, s, r), i.state = t.memoizedState), typeof e.getDerivedStateFromProps == "function" || typeof i.getSnapshotBeforeUpdate == "function" || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (e = i.state, typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(), e !== i.state && Ou.enqueueReplaceState(i, i.state, null), X0(t, r, i, n), i.state = t.memoizedState), typeof i.componentDidMount == "function" && (t.flags |= 4194308)
    }

    function go(t, e) {
        try {
            var r = "",
                n = e;
            do r += L4(n), n = n.return; while (n);
            var i = r
        } catch (s) {
            i = `
Error generating stack: ` + s.message + `
` + s.stack
        }
        return {
            value: t,
            source: e,
            stack: i,
            digest: null
        }
    }

    function D2(t, e, r) {
        return {
            value: t,
            source: null,
            stack: r ? ? null,
            digest: e ? ? null
        }
    }

    function tf(t, e) {
        try {
            console.error(e.value)
        } catch (r) {
            setTimeout(function() {
                throw r
            })
        }
    }
    var a7 = typeof WeakMap == "function" ? WeakMap : Map;

    function Dg(t, e, r) {
        r = Tn(-1, r), r.tag = 3, r.payload = {
            element: null
        };
        var n = e.value;
        return r.callback = function() {
            nu || (nu = !0, df = n), tf(t, e)
        }, r
    }

    function Fg(t, e, r) {
        r = Tn(-1, r), r.tag = 3;
        var n = t.type.getDerivedStateFromError;
        if (typeof n == "function") {
            var i = e.value;
            r.payload = function() {
                return n(i)
            }, r.callback = function() {
                tf(t, e)
            }
        }
        var s = t.stateNode;
        return s !== null && typeof s.componentDidCatch == "function" && (r.callback = function() {
            tf(t, e), typeof n != "function" && (fi === null ? fi = new Set([this]) : fi.add(this));
            var o = e.stack;
            this.componentDidCatch(e.value, {
                componentStack: o !== null ? o : ""
            })
        }), r
    }

    function Oh(t, e, r) {
        var n = t.pingCache;
        if (n === null) {
            n = t.pingCache = new a7;
            var i = new Set;
            n.set(e, i)
        } else i = n.get(e), i === void 0 && (i = new Set, n.set(e, i));
        i.has(r) || (i.add(r), t = w7.bind(null, t, e, r), e.then(t, t))
    }

    function zh(t) {
        do {
            var e;
            if ((e = t.tag === 13) && (e = t.memoizedState, e = e !== null ? e.dehydrated !== null : !0), e) return t;
            t = t.return
        } while (t !== null);
        return null
    }

    function Ih(t, e, r, n, i) {
        return t.mode & 1 ? (t.flags |= 65536, t.lanes = i, t) : (t === e ? t.flags |= 65536 : (t.flags |= 128, r.flags |= 131072, r.flags &= -52805, r.tag === 1 && (r.alternate === null ? r.tag = 17 : (e = Tn(-1, 1), e.tag = 2, ci(r, e, 1))), r.lanes |= 1), t)
    }
    var l7 = zn.ReactCurrentOwner,
        qt = !1;

    function It(t, e, r, n) {
        e.child = t === null ? pg(e, null, r, n) : po(e, t.child, r, n)
    }

    function Dh(t, e, r, n, i) {
        r = r.render;
        var s = e.ref;
        return to(e, i), n = U1(t, e, r, n, s, i), r = G1(), t !== null && !qt ? (e.updateQueue = t.updateQueue, e.flags &= -2053, t.lanes &= ~i, Nn(t, e, i)) : (Se && r && R1(e), e.flags |= 1, It(t, e, n, i), e.child)
    }

    function Fh(t, e, r, n, i) {
        if (t === null) {
            var s = r.type;
            return typeof s == "function" && !td(s) && s.defaultProps === void 0 && r.compare === null && r.defaultProps === void 0 ? (e.tag = 15, e.type = s, Bg(t, e, s, n, i)) : (t = k0(r.type, null, n, e, e.mode, i), t.ref = e.ref, t.return = e, e.child = t)
        }
        if (s = t.child, !(t.lanes & i)) {
            var o = s.memoizedProps;
            if (r = r.compare, r = r !== null ? r : qa, r(o, n) && t.ref === e.ref) return Nn(t, e, i)
        }
        return e.flags |= 1, t = hi(s, n), t.ref = e.ref, t.return = e, e.child = t
    }

    function Bg(t, e, r, n, i) {
        if (t !== null) {
            var s = t.memoizedProps;
            if (qa(s, n) && t.ref === e.ref)
                if (qt = !1, e.pendingProps = n = s, (t.lanes & i) !== 0) t.flags & 131072 && (qt = !0);
                else return e.lanes = t.lanes, Nn(t, e, i)
        }
        return rf(t, e, r, n, i)
    }

    function $g(t, e, r) {
        var n = e.pendingProps,
            i = n.children,
            s = t !== null ? t.memoizedState : null;
        if (n.mode === "hidden")
            if (!(e.mode & 1)) e.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            }, ve(Qs, lr), lr |= r;
            else {
                if (!(r & 1073741824)) return t = s !== null ? s.baseLanes | r : r, e.lanes = e.childLanes = 1073741824, e.memoizedState = {
                    baseLanes: t,
                    cachePool: null,
                    transitions: null
                }, e.updateQueue = null, ve(Qs, lr), lr |= t, null;
                e.memoizedState = {
                    baseLanes: 0,
                    cachePool: null,
                    transitions: null
                }, n = s !== null ? s.baseLanes : r, ve(Qs, lr), lr |= n
            }
        else s !== null ? (n = s.baseLanes | r, e.memoizedState = null) : n = r, ve(Qs, lr), lr |= n;
        return It(t, e, i, r), e.child
    }

    function Hg(t, e) {
        var r = e.ref;
        (t === null && r !== null || t !== null && t.ref !== r) && (e.flags |= 512, e.flags |= 2097152)
    }

    function rf(t, e, r, n, i) {
        var s = Zt(r) ? as : Mt.current;
        return s = fo(e, s), to(e, i), r = U1(t, e, r, n, s, i), n = G1(), t !== null && !qt ? (e.updateQueue = t.updateQueue, e.flags &= -2053, t.lanes &= ~i, Nn(t, e, i)) : (Se && n && R1(e), e.flags |= 1, It(t, e, r, i), e.child)
    }

    function Bh(t, e, r, n, i) {
        if (Zt(r)) {
            var s = !0;
            Q0(e)
        } else s = !1;
        if (to(e, i), e.stateNode === null) C0(t, e), Ig(e, r, n), ef(e, r, n, i), n = !0;
        else if (t === null) {
            var o = e.stateNode,
                a = e.memoizedProps;
            o.props = a;
            var l = o.context,
                u = r.contextType;
            typeof u == "object" && u !== null ? u = Lr(u) : (u = Zt(r) ? as : Mt.current, u = fo(e, u));
            var c = r.getDerivedStateFromProps,
                f = typeof c == "function" || typeof o.getSnapshotBeforeUpdate == "function";
            f || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (a !== n || l !== u) && Lh(e, o, n, u), qn = !1;
            var d = e.memoizedState;
            o.state = d, X0(e, n, o, i), l = e.memoizedState, a !== n || d !== l || Kt.current || qn ? (typeof c == "function" && (Jc(e, r, c, n), l = e.memoizedState), (a = qn || Nh(e, r, a, n, d, l, u)) ? (f || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount()), typeof o.componentDidMount == "function" && (e.flags |= 4194308)) : (typeof o.componentDidMount == "function" && (e.flags |= 4194308), e.memoizedProps = n, e.memoizedState = l), o.props = n, o.state = l, o.context = u, n = a) : (typeof o.componentDidMount == "function" && (e.flags |= 4194308), n = !1)
        } else {
            o = e.stateNode, gg(t, e), a = e.memoizedProps, u = e.type === e.elementType ? a : Gr(e.type, a), o.props = u, f = e.pendingProps, d = o.context, l = r.contextType, typeof l == "object" && l !== null ? l = Lr(l) : (l = Zt(r) ? as : Mt.current, l = fo(e, l));
            var h = r.getDerivedStateFromProps;
            (c = typeof h == "function" || typeof o.getSnapshotBeforeUpdate == "function") || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (a !== f || d !== l) && Lh(e, o, n, l), qn = !1, d = e.memoizedState, o.state = d, X0(e, n, o, i);
            var y = e.memoizedState;
            a !== f || d !== y || Kt.current || qn ? (typeof h == "function" && (Jc(e, r, h, n), y = e.memoizedState), (u = qn || Nh(e, r, u, n, d, y, l) || !1) ? (c || typeof o.UNSAFE_componentWillUpdate != "function" && typeof o.componentWillUpdate != "function" || (typeof o.componentWillUpdate == "function" && o.componentWillUpdate(n, y, l), typeof o.UNSAFE_componentWillUpdate == "function" && o.UNSAFE_componentWillUpdate(n, y, l)), typeof o.componentDidUpdate == "function" && (e.flags |= 4), typeof o.getSnapshotBeforeUpdate == "function" && (e.flags |= 1024)) : (typeof o.componentDidUpdate != "function" || a === t.memoizedProps && d === t.memoizedState || (e.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || a === t.memoizedProps && d === t.memoizedState || (e.flags |= 1024), e.memoizedProps = n, e.memoizedState = y), o.props = n, o.state = y, o.context = l, n = u) : (typeof o.componentDidUpdate != "function" || a === t.memoizedProps && d === t.memoizedState || (e.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || a === t.memoizedProps && d === t.memoizedState || (e.flags |= 1024), n = !1)
        }
        return nf(t, e, r, n, s, i)
    }

    function nf(t, e, r, n, i, s) {
        Hg(t, e);
        var o = (e.flags & 128) !== 0;
        if (!n && !o) return i && kh(e, r, !1), Nn(t, e, s);
        n = e.stateNode, l7.current = e;
        var a = o && typeof r.getDerivedStateFromError != "function" ? null : n.render();
        return e.flags |= 1, t !== null && o ? (e.child = po(e, t.child, null, s), e.child = po(e, null, a, s)) : It(t, e, a, s), e.memoizedState = n.state, i && kh(e, r, !0), e.child
    }

    function Vg(t) {
        var e = t.stateNode;
        e.pendingContext ? Sh(t, e.pendingContext, e.pendingContext !== e.context) : e.context && Sh(t, e.context, !1), B1(t, e.containerInfo)
    }

    function $h(t, e, r, n, i) {
        return ho(), L1(i), e.flags |= 256, It(t, e, r, n), e.child
    }
    var sf = {
        dehydrated: null,
        treeContext: null,
        retryLane: 0
    };

    function of (t) {
        return {
            baseLanes: t,
            cachePool: null,
            transitions: null
        }
    }

    function Ug(t, e, r) {
        var n = e.pendingProps,
            i = Ee.current,
            s = !1,
            o = (e.flags & 128) !== 0,
            a;
        if ((a = o) || (a = t !== null && t.memoizedState === null ? !1 : (i & 2) !== 0), a ? (s = !0, e.flags &= -129) : (t === null || t.memoizedState !== null) && (i |= 1), ve(Ee, i & 1), t === null) return Zc(e), t = e.memoizedState, t !== null && (t = t.dehydrated, t !== null) ? (e.mode & 1 ? t.data === "$!" ? e.lanes = 8 : e.lanes = 1073741824 : e.lanes = 1, null) : (o = n.children, t = n.fallback, s ? (n = e.mode, s = e.child, o = {
            mode: "hidden",
            children: o
        }, !(n & 1) && s !== null ? (s.childLanes = 0, s.pendingProps = o) : s = Du(o, n, 0, null), t = Xi(t, n, r, null), s.return = e, t.return = e, s.sibling = t, e.child = s, e.child.memoizedState = of (r), e.memoizedState = sf, t) : Y1(e, o));
        if (i = t.memoizedState, i !== null && (a = i.dehydrated, a !== null)) return u7(t, e, o, n, a, i, r);
        if (s) {
            s = n.fallback, o = e.mode, i = t.child, a = i.sibling;
            var l = {
                mode: "hidden",
                children: n.children
            };
            return !(o & 1) && e.child !== i ? (n = e.child, n.childLanes = 0, n.pendingProps = l, e.deletions = null) : (n = hi(i, l), n.subtreeFlags = i.subtreeFlags & 14680064), a !== null ? s = hi(a, s) : (s = Xi(s, o, r, null), s.flags |= 2), s.return = e, n.return = e, n.sibling = s, e.child = n, n = s, s = e.child, o = t.child.memoizedState, o = o === null ? of (r) : {
                baseLanes: o.baseLanes | r,
                cachePool: null,
                transitions: o.transitions
            }, s.memoizedState = o, s.childLanes = t.childLanes & ~r, e.memoizedState = sf, n
        }
        return s = t.child, t = s.sibling, n = hi(s, {
            mode: "visible",
            children: n.children
        }), !(e.mode & 1) && (n.lanes = r), n.return = e, n.sibling = null, t !== null && (r = e.deletions, r === null ? (e.deletions = [t], e.flags |= 16) : r.push(t)), e.child = n, e.memoizedState = null, n
    }

    function Y1(t, e) {
        return e = Du({
            mode: "visible",
            children: e
        }, t.mode, 0, null), e.return = t, t.child = e
    }

    function Wl(t, e, r, n) {
        return n !== null && L1(n), po(e, t.child, null, r), t = Y1(e, e.pendingProps.children), t.flags |= 2, e.memoizedState = null, t
    }

    function u7(t, e, r, n, i, s, o) {
        if (r) return e.flags & 256 ? (e.flags &= -257, n = D2(Error(N(422))), Wl(t, e, o, n)) : e.memoizedState !== null ? (e.child = t.child, e.flags |= 128, null) : (s = n.fallback, i = e.mode, n = Du({
            mode: "visible",
            children: n.children
        }, i, 0, null), s = Xi(s, i, o, null), s.flags |= 2, n.return = e, s.return = e, n.sibling = s, e.child = n, e.mode & 1 && po(e, t.child, null, o), e.child.memoizedState = of (o), e.memoizedState = sf, s);
        if (!(e.mode & 1)) return Wl(t, e, o, null);
        if (i.data === "$!") {
            if (n = i.nextSibling && i.nextSibling.dataset, n) var a = n.dgst;
            return n = a, s = Error(N(419)), n = D2(s, n, void 0), Wl(t, e, o, n)
        }
        if (a = (o & t.childLanes) !== 0, qt || a) {
            if (n = ut, n !== null) {
                switch (o & -o) {
                    case 4:
                        i = 2;
                        break;
                    case 16:
                        i = 8;
                        break;
                    case 64:
                    case 128:
                    case 256:
                    case 512:
                    case 1024:
                    case 2048:
                    case 4096:
                    case 8192:
                    case 16384:
                    case 32768:
                    case 65536:
                    case 131072:
                    case 262144:
                    case 524288:
                    case 1048576:
                    case 2097152:
                    case 4194304:
                    case 8388608:
                    case 16777216:
                    case 33554432:
                    case 67108864:
                        i = 32;
                        break;
                    case 536870912:
                        i = 268435456;
                        break;
                    default:
                        i = 0
                }
                i = i & (n.suspendedLanes | o) ? 0 : i, i !== 0 && i !== s.retryLane && (s.retryLane = i, Rn(t, i), Kr(n, t, i, -1))
            }
            return ed(), n = D2(Error(N(421))), Wl(t, e, o, n)
        }
        return i.data === "$?" ? (e.flags |= 128, e.child = t.child, e = C7.bind(null, t), i._reactRetry = e, null) : (t = s.treeContext, hr = ui(i.nextSibling), mr = e, Se = !0, Qr = null, t !== null && (Sr[kr++] = kn, Sr[kr++] = Pn, Sr[kr++] = ls, kn = t.id, Pn = t.overflow, ls = e), e = Y1(e, n.children), e.flags |= 4096, e)
    }

    function Hh(t, e, r) {
        t.lanes |= e;
        var n = t.alternate;
        n !== null && (n.lanes |= e), Xc(t.return, e, r)
    }

    function F2(t, e, r, n, i) {
        var s = t.memoizedState;
        s === null ? t.memoizedState = {
            isBackwards: e,
            rendering: null,
            renderingStartTime: 0,
            last: n,
            tail: r,
            tailMode: i
        } : (s.isBackwards = e, s.rendering = null, s.renderingStartTime = 0, s.last = n, s.tail = r, s.tailMode = i)
    }

    function Gg(t, e, r) {
        var n = e.pendingProps,
            i = n.revealOrder,
            s = n.tail;
        if (It(t, e, n.children, r), n = Ee.current, n & 2) n = n & 1 | 2, e.flags |= 128;
        else {
            if (t !== null && t.flags & 128) e: for (t = e.child; t !== null;) {
                if (t.tag === 13) t.memoizedState !== null && Hh(t, r, e);
                else if (t.tag === 19) Hh(t, r, e);
                else if (t.child !== null) {
                    t.child.return = t, t = t.child;
                    continue
                }
                if (t === e) break e;
                for (; t.sibling === null;) {
                    if (t.return === null || t.return === e) break e;
                    t = t.return
                }
                t.sibling.return = t.return, t = t.sibling
            }
            n &= 1
        }
        if (ve(Ee, n), !(e.mode & 1)) e.memoizedState = null;
        else switch (i) {
            case "forwards":
                for (r = e.child, i = null; r !== null;) t = r.alternate, t !== null && J0(t) === null && (i = r), r = r.sibling;
                r = i, r === null ? (i = e.child, e.child = null) : (i = r.sibling, r.sibling = null), F2(e, !1, i, r, s);
                break;
            case "backwards":
                for (r = null, i = e.child, e.child = null; i !== null;) {
                    if (t = i.alternate, t !== null && J0(t) === null) {
                        e.child = i;
                        break
                    }
                    t = i.sibling, i.sibling = r, r = i, i = t
                }
                F2(e, !0, r, null, s);
                break;
            case "together":
                F2(e, !1, null, null, void 0);
                break;
            default:
                e.memoizedState = null
        }
        return e.child
    }

    function C0(t, e) {
        !(e.mode & 1) && t !== null && (t.alternate = null, e.alternate = null, e.flags |= 2)
    }

    function Nn(t, e, r) {
        if (t !== null && (e.dependencies = t.dependencies), cs |= e.lanes, !(r & e.childLanes)) return null;
        if (t !== null && e.child !== t.child) throw Error(N(153));
        if (e.child !== null) {
            for (t = e.child, r = hi(t, t.pendingProps), e.child = r, r.return = e; t.sibling !== null;) t = t.sibling, r = r.sibling = hi(t, t.pendingProps), r.return = e;
            r.sibling = null
        }
        return e.child
    }

    function c7(t, e, r) {
        switch (e.tag) {
            case 3:
                Vg(e), ho();
                break;
            case 5:
                vg(e);
                break;
            case 1:
                Zt(e.type) && Q0(e);
                break;
            case 4:
                B1(e, e.stateNode.containerInfo);
                break;
            case 10:
                var n = e.type._context,
                    i = e.memoizedProps.value;
                ve(K0, n._currentValue), n._currentValue = i;
                break;
            case 13:
                if (n = e.memoizedState, n !== null) return n.dehydrated !== null ? (ve(Ee, Ee.current & 1), e.flags |= 128, null) : r & e.child.childLanes ? Ug(t, e, r) : (ve(Ee, Ee.current & 1), t = Nn(t, e, r), t !== null ? t.sibling : null);
                ve(Ee, Ee.current & 1);
                break;
            case 19:
                if (n = (r & e.childLanes) !== 0, t.flags & 128) {
                    if (n) return Gg(t, e, r);
                    e.flags |= 128
                }
                if (i = e.memoizedState, i !== null && (i.rendering = null, i.tail = null, i.lastEffect = null), ve(Ee, Ee.current), n) break;
                return null;
            case 22:
            case 23:
                return e.lanes = 0, $g(t, e, r)
        }
        return Nn(t, e, r)
    }
    var Wg, af, Qg, Yg;
    Wg = function(t, e) {
        for (var r = e.child; r !== null;) {
            if (r.tag === 5 || r.tag === 6) t.appendChild(r.stateNode);
            else if (r.tag !== 4 && r.child !== null) {
                r.child.return = r, r = r.child;
                continue
            }
            if (r === e) break;
            for (; r.sibling === null;) {
                if (r.return === null || r.return === e) return;
                r = r.return
            }
            r.sibling.return = r.return, r = r.sibling
        }
    };
    af = function() {};
    Qg = function(t, e, r, n) {
        var i = t.memoizedProps;
        if (i !== n) {
            t = e.stateNode, Qi(fn.current);
            var s = null;
            switch (r) {
                case "input":
                    i = Tc(t, i), n = Tc(t, n), s = [];
                    break;
                case "select":
                    i = Le({}, i, {
                        value: void 0
                    }), n = Le({}, n, {
                        value: void 0
                    }), s = [];
                    break;
                case "textarea":
                    i = Mc(t, i), n = Mc(t, n), s = [];
                    break;
                default:
                    typeof i.onClick != "function" && typeof n.onClick == "function" && (t.onclick = G0)
            }
            Nc(r, n);
            var o;
            r = null;
            for (u in i)
                if (!n.hasOwnProperty(u) && i.hasOwnProperty(u) && i[u] != null)
                    if (u === "style") {
                        var a = i[u];
                        for (o in a) a.hasOwnProperty(o) && (r || (r = {}), r[o] = "")
                    } else u !== "dangerouslySetInnerHTML" && u !== "children" && u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (Ha.hasOwnProperty(u) ? s || (s = []) : (s = s || []).push(u, null));
            for (u in n) {
                var l = n[u];
                if (a = i != null ? i[u] : void 0, n.hasOwnProperty(u) && l !== a && (l != null || a != null))
                    if (u === "style")
                        if (a) {
                            for (o in a) !a.hasOwnProperty(o) || l && l.hasOwnProperty(o) || (r || (r = {}), r[o] = "");
                            for (o in l) l.hasOwnProperty(o) && a[o] !== l[o] && (r || (r = {}), r[o] = l[o])
                        } else r || (s || (s = []), s.push(u, r)), r = l;
                else u === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0, a = a ? a.__html : void 0, l != null && a !== l && (s = s || []).push(u, l)) : u === "children" ? typeof l != "string" && typeof l != "number" || (s = s || []).push(u, "" + l) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && (Ha.hasOwnProperty(u) ? (l != null && u === "onScroll" && xe("scroll", t), s || a === l || (s = [])) : (s = s || []).push(u, l))
            }
            r && (s = s || []).push("style", r);
            var u = s;
            (e.updateQueue = u) && (e.flags |= 4)
        }
    };
    Yg = function(t, e, r, n) {
        r !== n && (e.flags |= 4)
    };

    function Ko(t, e) {
        if (!Se) switch (t.tailMode) {
            case "hidden":
                e = t.tail;
                for (var r = null; e !== null;) e.alternate !== null && (r = e), e = e.sibling;
                r === null ? t.tail = null : r.sibling = null;
                break;
            case "collapsed":
                r = t.tail;
                for (var n = null; r !== null;) r.alternate !== null && (n = r), r = r.sibling;
                n === null ? e || t.tail === null ? t.tail = null : t.tail.sibling = null : n.sibling = null
        }
    }

    function St(t) {
        var e = t.alternate !== null && t.alternate.child === t.child,
            r = 0,
            n = 0;
        if (e)
            for (var i = t.child; i !== null;) r |= i.lanes | i.childLanes, n |= i.subtreeFlags & 14680064, n |= i.flags & 14680064, i.return = t, i = i.sibling;
        else
            for (i = t.child; i !== null;) r |= i.lanes | i.childLanes, n |= i.subtreeFlags, n |= i.flags, i.return = t, i = i.sibling;
        return t.subtreeFlags |= n, t.childLanes = r, e
    }

    function f7(t, e, r) {
        var n = e.pendingProps;
        switch (N1(e), e.tag) {
            case 2:
            case 16:
            case 15:
            case 0:
            case 11:
            case 7:
            case 8:
            case 12:
            case 9:
            case 14:
                return St(e), null;
            case 1:
                return Zt(e.type) && W0(), St(e), null;
            case 3:
                return n = e.stateNode, mo(), Ce(Kt), Ce(Mt), H1(), n.pendingContext && (n.context = n.pendingContext, n.pendingContext = null), (t === null || t.child === null) && (Ul(e) ? e.flags |= 4 : t === null || t.memoizedState.isDehydrated && !(e.flags & 256) || (e.flags |= 1024, Qr !== null && (mf(Qr), Qr = null))), af(t, e), St(e), null;
            case 5:
                $1(e);
                var i = Qi(el.current);
                if (r = e.type, t !== null && e.stateNode != null) Qg(t, e, r, n, i), t.ref !== e.ref && (e.flags |= 512, e.flags |= 2097152);
                else {
                    if (!n) {
                        if (e.stateNode === null) throw Error(N(166));
                        return St(e), null
                    }
                    if (t = Qi(fn.current), Ul(e)) {
                        n = e.stateNode, r = e.type;
                        var s = e.memoizedProps;
                        switch (n[on] = e, n[Xa] = s, t = (e.mode & 1) !== 0, r) {
                            case "dialog":
                                xe("cancel", n), xe("close", n);
                                break;
                            case "iframe":
                            case "object":
                            case "embed":
                                xe("load", n);
                                break;
                            case "video":
                            case "audio":
                                for (i = 0; i < aa.length; i++) xe(aa[i], n);
                                break;
                            case "source":
                                xe("error", n);
                                break;
                            case "img":
                            case "image":
                            case "link":
                                xe("error", n), xe("load", n);
                                break;
                            case "details":
                                xe("toggle", n);
                                break;
                            case "input":
                                Zd(n, s), xe("invalid", n);
                                break;
                            case "select":
                                n._wrapperState = {
                                    wasMultiple: !!s.multiple
                                }, xe("invalid", n);
                                break;
                            case "textarea":
                                Jd(n, s), xe("invalid", n)
                        }
                        Nc(r, s), i = null;
                        for (var o in s)
                            if (s.hasOwnProperty(o)) {
                                var a = s[o];
                                o === "children" ? typeof a == "string" ? n.textContent !== a && (s.suppressHydrationWarning !== !0 && Vl(n.textContent, a, t), i = ["children", a]) : typeof a == "number" && n.textContent !== "" + a && (s.suppressHydrationWarning !== !0 && Vl(n.textContent, a, t), i = ["children", "" + a]) : Ha.hasOwnProperty(o) && a != null && o === "onScroll" && xe("scroll", n)
                            }
                        switch (r) {
                            case "input":
                                Ol(n), Xd(n, s, !0);
                                break;
                            case "textarea":
                                Ol(n), eh(n);
                                break;
                            case "select":
                            case "option":
                                break;
                            default:
                                typeof s.onClick == "function" && (n.onclick = G0)
                        }
                        n = i, e.updateQueue = n, n !== null && (e.flags |= 4)
                    } else {
                        o = i.nodeType === 9 ? i : i.ownerDocument, t === "http://www.w3.org/1999/xhtml" && (t = Cm(r)), t === "http://www.w3.org/1999/xhtml" ? r === "script" ? (t = o.createElement("div"), t.innerHTML = "<script><\/script>", t = t.removeChild(t.firstChild)) : typeof n.is == "string" ? t = o.createElement(r, {
                            is: n.is
                        }) : (t = o.createElement(r), r === "select" && (o = t, n.multiple ? o.multiple = !0 : n.size && (o.size = n.size))) : t = o.createElementNS(t, r), t[on] = e, t[Xa] = n, Wg(t, e, !1, !1), e.stateNode = t;
                        e: {
                            switch (o = Lc(r, n), r) {
                                case "dialog":
                                    xe("cancel", t), xe("close", t), i = n;
                                    break;
                                case "iframe":
                                case "object":
                                case "embed":
                                    xe("load", t), i = n;
                                    break;
                                case "video":
                                case "audio":
                                    for (i = 0; i < aa.length; i++) xe(aa[i], t);
                                    i = n;
                                    break;
                                case "source":
                                    xe("error", t), i = n;
                                    break;
                                case "img":
                                case "image":
                                case "link":
                                    xe("error", t), xe("load", t), i = n;
                                    break;
                                case "details":
                                    xe("toggle", t), i = n;
                                    break;
                                case "input":
                                    Zd(t, n), i = Tc(t, n), xe("invalid", t);
                                    break;
                                case "option":
                                    i = n;
                                    break;
                                case "select":
                                    t._wrapperState = {
                                        wasMultiple: !!n.multiple
                                    }, i = Le({}, n, {
                                        value: void 0
                                    }), xe("invalid", t);
                                    break;
                                case "textarea":
                                    Jd(t, n), i = Mc(t, n), xe("invalid", t);
                                    break;
                                default:
                                    i = n
                            }
                            Nc(r, i),
                            a = i;
                            for (s in a)
                                if (a.hasOwnProperty(s)) {
                                    var l = a[s];
                                    s === "style" ? km(t, l) : s === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0, l != null && Am(t, l)) : s === "children" ? typeof l == "string" ? (r !== "textarea" || l !== "") && Va(t, l) : typeof l == "number" && Va(t, "" + l) : s !== "suppressContentEditableWarning" && s !== "suppressHydrationWarning" && s !== "autoFocus" && (Ha.hasOwnProperty(s) ? l != null && s === "onScroll" && xe("scroll", t) : l != null && y1(t, s, l, o))
                                }
                            switch (r) {
                                case "input":
                                    Ol(t), Xd(t, n, !1);
                                    break;
                                case "textarea":
                                    Ol(t), eh(t);
                                    break;
                                case "option":
                                    n.value != null && t.setAttribute("value", "" + xi(n.value));
                                    break;
                                case "select":
                                    t.multiple = !!n.multiple, s = n.value, s != null ? Zs(t, !!n.multiple, s, !1) : n.defaultValue != null && Zs(t, !!n.multiple, n.defaultValue, !0);
                                    break;
                                default:
                                    typeof i.onClick == "function" && (t.onclick = G0)
                            }
                            switch (r) {
                                case "button":
                                case "input":
                                case "select":
                                case "textarea":
                                    n = !!n.autoFocus;
                                    break e;
                                case "img":
                                    n = !0;
                                    break e;
                                default:
                                    n = !1
                            }
                        }
                        n && (e.flags |= 4)
                    }
                    e.ref !== null && (e.flags |= 512, e.flags |= 2097152)
                }
                return St(e), null;
            case 6:
                if (t && e.stateNode != null) Yg(t, e, t.memoizedProps, n);
                else {
                    if (typeof n != "string" && e.stateNode === null) throw Error(N(166));
                    if (r = Qi(el.current), Qi(fn.current), Ul(e)) {
                        if (n = e.stateNode, r = e.memoizedProps, n[on] = e, (s = n.nodeValue !== r) && (t = mr, t !== null)) switch (t.tag) {
                            case 3:
                                Vl(n.nodeValue, r, (t.mode & 1) !== 0);
                                break;
                            case 5:
                                t.memoizedProps.suppressHydrationWarning !== !0 && Vl(n.nodeValue, r, (t.mode & 1) !== 0)
                        }
                        s && (e.flags |= 4)
                    } else n = (r.nodeType === 9 ? r : r.ownerDocument).createTextNode(n), n[on] = e, e.stateNode = n
                }
                return St(e), null;
            case 13:
                if (Ce(Ee), n = e.memoizedState, t === null || t.memoizedState !== null && t.memoizedState.dehydrated !== null) {
                    if (Se && hr !== null && e.mode & 1 && !(e.flags & 128)) dg(), ho(), e.flags |= 98560, s = !1;
                    else if (s = Ul(e), n !== null && n.dehydrated !== null) {
                        if (t === null) {
                            if (!s) throw Error(N(318));
                            if (s = e.memoizedState, s = s !== null ? s.dehydrated : null, !s) throw Error(N(317));
                            s[on] = e
                        } else ho(), !(e.flags & 128) && (e.memoizedState = null), e.flags |= 4;
                        St(e), s = !1
                    } else Qr !== null && (mf(Qr), Qr = null), s = !0;
                    if (!s) return e.flags & 65536 ? e : null
                }
                return e.flags & 128 ? (e.lanes = r, e) : (n = n !== null, n !== (t !== null && t.memoizedState !== null) && n && (e.child.flags |= 8192, e.mode & 1 && (t === null || Ee.current & 1 ? rt === 0 && (rt = 3) : ed())), e.updateQueue !== null && (e.flags |= 4), St(e), null);
            case 4:
                return mo(), af(t, e), t === null && Ka(e.stateNode.containerInfo), St(e), null;
            case 10:
                return I1(e.type._context), St(e), null;
            case 17:
                return Zt(e.type) && W0(), St(e), null;
            case 19:
                if (Ce(Ee), s = e.memoizedState, s === null) return St(e), null;
                if (n = (e.flags & 128) !== 0, o = s.rendering, o === null)
                    if (n) Ko(s, !1);
                    else {
                        if (rt !== 0 || t !== null && t.flags & 128)
                            for (t = e.child; t !== null;) {
                                if (o = J0(t), o !== null) {
                                    for (e.flags |= 128, Ko(s, !1), n = o.updateQueue, n !== null && (e.updateQueue = n, e.flags |= 4), e.subtreeFlags = 0, n = r, r = e.child; r !== null;) s = r, t = n, s.flags &= 14680066, o = s.alternate, o === null ? (s.childLanes = 0, s.lanes = t, s.child = null, s.subtreeFlags = 0, s.memoizedProps = null, s.memoizedState = null, s.updateQueue = null, s.dependencies = null, s.stateNode = null) : (s.childLanes = o.childLanes, s.lanes = o.lanes, s.child = o.child, s.subtreeFlags = 0, s.deletions = null, s.memoizedProps = o.memoizedProps, s.memoizedState = o.memoizedState, s.updateQueue = o.updateQueue, s.type = o.type, t = o.dependencies, s.dependencies = t === null ? null : {
                                        lanes: t.lanes,
                                        firstContext: t.firstContext
                                    }), r = r.sibling;
                                    return ve(Ee, Ee.current & 1 | 2), e.child
                                }
                                t = t.sibling
                            }
                        s.tail !== null && Ue() > vo && (e.flags |= 128, n = !0, Ko(s, !1), e.lanes = 4194304)
                    }
                else {
                    if (!n)
                        if (t = J0(o), t !== null) {
                            if (e.flags |= 128, n = !0, r = t.updateQueue, r !== null && (e.updateQueue = r, e.flags |= 4), Ko(s, !0), s.tail === null && s.tailMode === "hidden" && !o.alternate && !Se) return St(e), null
                        } else 2 * Ue() - s.renderingStartTime > vo && r !== 1073741824 && (e.flags |= 128, n = !0, Ko(s, !1), e.lanes = 4194304);
                    s.isBackwards ? (o.sibling = e.child, e.child = o) : (r = s.last, r !== null ? r.sibling = o : e.child = o, s.last = o)
                }
                return s.tail !== null ? (e = s.tail, s.rendering = e, s.tail = e.sibling, s.renderingStartTime = Ue(), e.sibling = null, r = Ee.current, ve(Ee, n ? r & 1 | 2 : r & 1), e) : (St(e), null);
            case 22:
            case 23:
                return J1(), n = e.memoizedState !== null, t !== null && t.memoizedState !== null !== n && (e.flags |= 8192), n && e.mode & 1 ? lr & 1073741824 && (St(e), e.subtreeFlags & 6 && (e.flags |= 8192)) : St(e), null;
            case 24:
                return null;
            case 25:
                return null
        }
        throw Error(N(156, e.tag))
    }

    function d7(t, e) {
        switch (N1(e), e.tag) {
            case 1:
                return Zt(e.type) && W0(), t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
            case 3:
                return mo(), Ce(Kt), Ce(Mt), H1(), t = e.flags, t & 65536 && !(t & 128) ? (e.flags = t & -65537 | 128, e) : null;
            case 5:
                return $1(e), null;
            case 13:
                if (Ce(Ee), t = e.memoizedState, t !== null && t.dehydrated !== null) {
                    if (e.alternate === null) throw Error(N(340));
                    ho()
                }
                return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
            case 19:
                return Ce(Ee), null;
            case 4:
                return mo(), null;
            case 10:
                return I1(e.type._context), null;
            case 22:
            case 23:
                return J1(), null;
            case 24:
                return null;
            default:
                return null
        }
    }
    var Ql = !1,
        bt = !1,
        h7 = typeof WeakSet == "function" ? WeakSet : Set,
        D = null;

    function Ws(t, e) {
        var r = t.ref;
        if (r !== null)
            if (typeof r == "function") try {
                r(null)
            } catch (n) {
                ze(t, e, n)
            } else r.current = null
    }

    function lf(t, e, r) {
        try {
            r()
        } catch (n) {
            ze(t, e, n)
        }
    }
    var Vh = !1;

    function p7(t, e) {
        if (Uc = H0, t = Jm(), M1(t)) {
            if ("selectionStart" in t) var r = {
                start: t.selectionStart,
                end: t.selectionEnd
            };
            else e: {
                r = (r = t.ownerDocument) && r.defaultView || window;
                var n = r.getSelection && r.getSelection();
                if (n && n.rangeCount !== 0) {
                    r = n.anchorNode;
                    var i = n.anchorOffset,
                        s = n.focusNode;
                    n = n.focusOffset;
                    try {
                        r.nodeType, s.nodeType
                    } catch {
                        r = null;
                        break e
                    }
                    var o = 0,
                        a = -1,
                        l = -1,
                        u = 0,
                        c = 0,
                        f = t,
                        d = null;
                    t: for (;;) {
                        for (var h; f !== r || i !== 0 && f.nodeType !== 3 || (a = o + i), f !== s || n !== 0 && f.nodeType !== 3 || (l = o + n), f.nodeType === 3 && (o += f.nodeValue.length), (h = f.firstChild) !== null;) d = f, f = h;
                        for (;;) {
                            if (f === t) break t;
                            if (d === r && ++u === i && (a = o), d === s && ++c === n && (l = o), (h = f.nextSibling) !== null) break;
                            f = d, d = f.parentNode
                        }
                        f = h
                    }
                    r = a === -1 || l === -1 ? null : {
                        start: a,
                        end: l
                    }
                } else r = null
            }
            r = r || {
                start: 0,
                end: 0
            }
        } else r = null;
        for (Gc = {
                focusedElem: t,
                selectionRange: r
            }, H0 = !1, D = e; D !== null;)
            if (e = D, t = e.child, (e.subtreeFlags & 1028) !== 0 && t !== null) t.return = e, D = t;
            else
                for (; D !== null;) {
                    e = D;
                    try {
                        var y = e.alternate;
                        if (e.flags & 1024) switch (e.tag) {
                            case 0:
                            case 11:
                            case 15:
                                break;
                            case 1:
                                if (y !== null) {
                                    var g = y.memoizedProps,
                                        w = y.memoizedState,
                                        v = e.stateNode,
                                        p = v.getSnapshotBeforeUpdate(e.elementType === e.type ? g : Gr(e.type, g), w);
                                    v.__reactInternalSnapshotBeforeUpdate = p
                                }
                                break;
                            case 3:
                                var x = e.stateNode.containerInfo;
                                x.nodeType === 1 ? x.textContent = "" : x.nodeType === 9 && x.documentElement && x.removeChild(x.documentElement);
                                break;
                            case 5:
                            case 6:
                            case 4:
                            case 17:
                                break;
                            default:
                                throw Error(N(163))
                        }
                    } catch (_) {
                        ze(e, e.return, _)
                    }
                    if (t = e.sibling, t !== null) {
                        t.return = e.return, D = t;
                        break
                    }
                    D = e.return
                }
        return y = Vh, Vh = !1, y
    }

    function Aa(t, e, r) {
        var n = e.updateQueue;
        if (n = n !== null ? n.lastEffect : null, n !== null) {
            var i = n = n.next;
            do {
                if ((i.tag & t) === t) {
                    var s = i.destroy;
                    i.destroy = void 0, s !== void 0 && lf(e, r, s)
                }
                i = i.next
            } while (i !== n)
        }
    }

    function zu(t, e) {
        if (e = e.updateQueue, e = e !== null ? e.lastEffect : null, e !== null) {
            var r = e = e.next;
            do {
                if ((r.tag & t) === t) {
                    var n = r.create;
                    r.destroy = n()
                }
                r = r.next
            } while (r !== e)
        }
    }

    function uf(t) {
        var e = t.ref;
        if (e !== null) {
            var r = t.stateNode;
            switch (t.tag) {
                case 5:
                    t = r;
                    break;
                default:
                    t = r
            }
            typeof e == "function" ? e(t) : e.current = t
        }
    }

    function qg(t) {
        var e = t.alternate;
        e !== null && (t.alternate = null, qg(e)), t.child = null, t.deletions = null, t.sibling = null, t.tag === 5 && (e = t.stateNode, e !== null && (delete e[on], delete e[Xa], delete e[Yc], delete e[Kv], delete e[Zv])), t.stateNode = null, t.return = null, t.dependencies = null, t.memoizedProps = null, t.memoizedState = null, t.pendingProps = null, t.stateNode = null, t.updateQueue = null
    }

    function Kg(t) {
        return t.tag === 5 || t.tag === 3 || t.tag === 4
    }

    function Uh(t) {
        e: for (;;) {
            for (; t.sibling === null;) {
                if (t.return === null || Kg(t.return)) return null;
                t = t.return
            }
            for (t.sibling.return = t.return, t = t.sibling; t.tag !== 5 && t.tag !== 6 && t.tag !== 18;) {
                if (t.flags & 2 || t.child === null || t.tag === 4) continue e;
                t.child.return = t, t = t.child
            }
            if (!(t.flags & 2)) return t.stateNode
        }
    }

    function cf(t, e, r) {
        var n = t.tag;
        if (n === 5 || n === 6) t = t.stateNode, e ? r.nodeType === 8 ? r.parentNode.insertBefore(t, e) : r.insertBefore(t, e) : (r.nodeType === 8 ? (e = r.parentNode, e.insertBefore(t, r)) : (e = r, e.appendChild(t)), r = r._reactRootContainer, r != null || e.onclick !== null || (e.onclick = G0));
        else if (n !== 4 && (t = t.child, t !== null))
            for (cf(t, e, r), t = t.sibling; t !== null;) cf(t, e, r), t = t.sibling
    }

    function ff(t, e, r) {
        var n = t.tag;
        if (n === 5 || n === 6) t = t.stateNode, e ? r.insertBefore(t, e) : r.appendChild(t);
        else if (n !== 4 && (t = t.child, t !== null))
            for (ff(t, e, r), t = t.sibling; t !== null;) ff(t, e, r), t = t.sibling
    }
    var pt = null,
        Wr = !1;

    function Un(t, e, r) {
        for (r = r.child; r !== null;) Zg(t, e, r), r = r.sibling
    }

    function Zg(t, e, r) {
        if (cn && typeof cn.onCommitFiberUnmount == "function") try {
            cn.onCommitFiberUnmount(Tu, r)
        } catch {}
        switch (r.tag) {
            case 5:
                bt || Ws(r, e);
            case 6:
                var n = pt,
                    i = Wr;
                pt = null, Un(t, e, r), pt = n, Wr = i, pt !== null && (Wr ? (t = pt, r = r.stateNode, t.nodeType === 8 ? t.parentNode.removeChild(r) : t.removeChild(r)) : pt.removeChild(r.stateNode));
                break;
            case 18:
                pt !== null && (Wr ? (t = pt, r = r.stateNode, t.nodeType === 8 ? R2(t.parentNode, r) : t.nodeType === 1 && R2(t, r), Qa(t)) : R2(pt, r.stateNode));
                break;
            case 4:
                n = pt, i = Wr, pt = r.stateNode.containerInfo, Wr = !0, Un(t, e, r), pt = n, Wr = i;
                break;
            case 0:
            case 11:
            case 14:
            case 15:
                if (!bt && (n = r.updateQueue, n !== null && (n = n.lastEffect, n !== null))) {
                    i = n = n.next;
                    do {
                        var s = i,
                            o = s.destroy;
                        s = s.tag, o !== void 0 && (s & 2 || s & 4) && lf(r, e, o), i = i.next
                    } while (i !== n)
                }
                Un(t, e, r);
                break;
            case 1:
                if (!bt && (Ws(r, e), n = r.stateNode, typeof n.componentWillUnmount == "function")) try {
                    n.props = r.memoizedProps, n.state = r.memoizedState, n.componentWillUnmount()
                } catch (a) {
                    ze(r, e, a)
                }
                Un(t, e, r);
                break;
            case 21:
                Un(t, e, r);
                break;
            case 22:
                r.mode & 1 ? (bt = (n = bt) || r.memoizedState !== null, Un(t, e, r), bt = n) : Un(t, e, r);
                break;
            default:
                Un(t, e, r)
        }
    }

    function Gh(t) {
        var e = t.updateQueue;
        if (e !== null) {
            t.updateQueue = null;
            var r = t.stateNode;
            r === null && (r = t.stateNode = new h7), e.forEach(function(n) {
                var i = A7.bind(null, t, n);
                r.has(n) || (r.add(n), n.then(i, i))
            })
        }
    }

    function Vr(t, e) {
        var r = e.deletions;
        if (r !== null)
            for (var n = 0; n < r.length; n++) {
                var i = r[n];
                try {
                    var s = t,
                        o = e,
                        a = o;
                    e: for (; a !== null;) {
                        switch (a.tag) {
                            case 5:
                                pt = a.stateNode, Wr = !1;
                                break e;
                            case 3:
                                pt = a.stateNode.containerInfo, Wr = !0;
                                break e;
                            case 4:
                                pt = a.stateNode.containerInfo, Wr = !0;
                                break e
                        }
                        a = a.return
                    }
                    if (pt === null) throw Error(N(160));
                    Zg(s, o, i), pt = null, Wr = !1;
                    var l = i.alternate;
                    l !== null && (l.return = null), i.return = null
                } catch (u) {
                    ze(i, e, u)
                }
            }
        if (e.subtreeFlags & 12854)
            for (e = e.child; e !== null;) Xg(e, t), e = e.sibling
    }

    function Xg(t, e) {
        var r = t.alternate,
            n = t.flags;
        switch (t.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
                if (Vr(e, t), tn(t), n & 4) {
                    try {
                        Aa(3, t, t.return), zu(3, t)
                    } catch (g) {
                        ze(t, t.return, g)
                    }
                    try {
                        Aa(5, t, t.return)
                    } catch (g) {
                        ze(t, t.return, g)
                    }
                }
                break;
            case 1:
                Vr(e, t), tn(t), n & 512 && r !== null && Ws(r, r.return);
                break;
            case 5:
                if (Vr(e, t), tn(t), n & 512 && r !== null && Ws(r, r.return), t.flags & 32) {
                    var i = t.stateNode;
                    try {
                        Va(i, "")
                    } catch (g) {
                        ze(t, t.return, g)
                    }
                }
                if (n & 4 && (i = t.stateNode, i != null)) {
                    var s = t.memoizedProps,
                        o = r !== null ? r.memoizedProps : s,
                        a = t.type,
                        l = t.updateQueue;
                    if (t.updateQueue = null, l !== null) try {
                        a === "input" && s.type === "radio" && s.name != null && _m(i, s), Lc(a, o);
                        var u = Lc(a, s);
                        for (o = 0; o < l.length; o += 2) {
                            var c = l[o],
                                f = l[o + 1];
                            c === "style" ? km(i, f) : c === "dangerouslySetInnerHTML" ? Am(i, f) : c === "children" ? Va(i, f) : y1(i, c, f, u)
                        }
                        switch (a) {
                            case "input":
                                Ec(i, s);
                                break;
                            case "textarea":
                                wm(i, s);
                                break;
                            case "select":
                                var d = i._wrapperState.wasMultiple;
                                i._wrapperState.wasMultiple = !!s.multiple;
                                var h = s.value;
                                h != null ? Zs(i, !!s.multiple, h, !1) : d !== !!s.multiple && (s.defaultValue != null ? Zs(i, !!s.multiple, s.defaultValue, !0) : Zs(i, !!s.multiple, s.multiple ? [] : "", !1))
                        }
                        i[Xa] = s
                    } catch (g) {
                        ze(t, t.return, g)
                    }
                }
                break;
            case 6:
                if (Vr(e, t), tn(t), n & 4) {
                    if (t.stateNode === null) throw Error(N(162));
                    i = t.stateNode, s = t.memoizedProps;
                    try {
                        i.nodeValue = s
                    } catch (g) {
                        ze(t, t.return, g)
                    }
                }
                break;
            case 3:
                if (Vr(e, t), tn(t), n & 4 && r !== null && r.memoizedState.isDehydrated) try {
                    Qa(e.containerInfo)
                } catch (g) {
                    ze(t, t.return, g)
                }
                break;
            case 4:
                Vr(e, t), tn(t);
                break;
            case 13:
                Vr(e, t), tn(t), i = t.child, i.flags & 8192 && (s = i.memoizedState !== null, i.stateNode.isHidden = s, !s || i.alternate !== null && i.alternate.memoizedState !== null || (Z1 = Ue())), n & 4 && Gh(t);
                break;
            case 22:
                if (c = r !== null && r.memoizedState !== null, t.mode & 1 ? (bt = (u = bt) || c, Vr(e, t), bt = u) : Vr(e, t), tn(t), n & 8192) {
                    if (u = t.memoizedState !== null, (t.stateNode.isHidden = u) && !c && t.mode & 1)
                        for (D = t, c = t.child; c !== null;) {
                            for (f = D = c; D !== null;) {
                                switch (d = D, h = d.child, d.tag) {
                                    case 0:
                                    case 11:
                                    case 14:
                                    case 15:
                                        Aa(4, d, d.return);
                                        break;
                                    case 1:
                                        Ws(d, d.return);
                                        var y = d.stateNode;
                                        if (typeof y.componentWillUnmount == "function") {
                                            n = d, r = d.return;
                                            try {
                                                e = n, y.props = e.memoizedProps, y.state = e.memoizedState, y.componentWillUnmount()
                                            } catch (g) {
                                                ze(n, r, g)
                                            }
                                        }
                                        break;
                                    case 5:
                                        Ws(d, d.return);
                                        break;
                                    case 22:
                                        if (d.memoizedState !== null) {
                                            Qh(f);
                                            continue
                                        }
                                }
                                h !== null ? (h.return = d, D = h) : Qh(f)
                            }
                            c = c.sibling
                        }
                    e: for (c = null, f = t;;) {
                        if (f.tag === 5) {
                            if (c === null) {
                                c = f;
                                try {
                                    i = f.stateNode, u ? (s = i.style, typeof s.setProperty == "function" ? s.setProperty("display", "none", "important") : s.display = "none") : (a = f.stateNode, l = f.memoizedProps.style, o = l != null && l.hasOwnProperty("display") ? l.display : null, a.style.display = Sm("display", o))
                                } catch (g) {
                                    ze(t, t.return, g)
                                }
                            }
                        } else if (f.tag === 6) {
                            if (c === null) try {
                                f.stateNode.nodeValue = u ? "" : f.memoizedProps
                            } catch (g) {
                                ze(t, t.return, g)
                            }
                        } else if ((f.tag !== 22 && f.tag !== 23 || f.memoizedState === null || f === t) && f.child !== null) {
                            f.child.return = f, f = f.child;
                            continue
                        }
                        if (f === t) break e;
                        for (; f.sibling === null;) {
                            if (f.return === null || f.return === t) break e;
                            c === f && (c = null), f = f.return
                        }
                        c === f && (c = null), f.sibling.return = f.return, f = f.sibling
                    }
                }
                break;
            case 19:
                Vr(e, t), tn(t), n & 4 && Gh(t);
                break;
            case 21:
                break;
            default:
                Vr(e, t), tn(t)
        }
    }

    function tn(t) {
        var e = t.flags;
        if (e & 2) {
            try {
                e: {
                    for (var r = t.return; r !== null;) {
                        if (Kg(r)) {
                            var n = r;
                            break e
                        }
                        r = r.return
                    }
                    throw Error(N(160))
                }
                switch (n.tag) {
                    case 5:
                        var i = n.stateNode;
                        n.flags & 32 && (Va(i, ""), n.flags &= -33);
                        var s = Uh(t);
                        ff(t, s, i);
                        break;
                    case 3:
                    case 4:
                        var o = n.stateNode.containerInfo,
                            a = Uh(t);
                        cf(t, a, o);
                        break;
                    default:
                        throw Error(N(161))
                }
            }
            catch (l) {
                ze(t, t.return, l)
            }
            t.flags &= -3
        }
        e & 4096 && (t.flags &= -4097)
    }

    function m7(t, e, r) {
        D = t, Jg(t)
    }

    function Jg(t, e, r) {
        for (var n = (t.mode & 1) !== 0; D !== null;) {
            var i = D,
                s = i.child;
            if (i.tag === 22 && n) {
                var o = i.memoizedState !== null || Ql;
                if (!o) {
                    var a = i.alternate,
                        l = a !== null && a.memoizedState !== null || bt;
                    a = Ql;
                    var u = bt;
                    if (Ql = o, (bt = l) && !u)
                        for (D = i; D !== null;) o = D, l = o.child, o.tag === 22 && o.memoizedState !== null ? Yh(i) : l !== null ? (l.return = o, D = l) : Yh(i);
                    for (; s !== null;) D = s, Jg(s), s = s.sibling;
                    D = i, Ql = a, bt = u
                }
                Wh(t)
            } else i.subtreeFlags & 8772 && s !== null ? (s.return = i, D = s) : Wh(t)
        }
    }

    function Wh(t) {
        for (; D !== null;) {
            var e = D;
            if (e.flags & 8772) {
                var r = e.alternate;
                try {
                    if (e.flags & 8772) switch (e.tag) {
                        case 0:
                        case 11:
                        case 15:
                            bt || zu(5, e);
                            break;
                        case 1:
                            var n = e.stateNode;
                            if (e.flags & 4 && !bt)
                                if (r === null) n.componentDidMount();
                                else {
                                    var i = e.elementType === e.type ? r.memoizedProps : Gr(e.type, r.memoizedProps);
                                    n.componentDidUpdate(i, r.memoizedState, n.__reactInternalSnapshotBeforeUpdate)
                                }
                            var s = e.updateQueue;
                            s !== null && jh(e, s, n);
                            break;
                        case 3:
                            var o = e.updateQueue;
                            if (o !== null) {
                                if (r = null, e.child !== null) switch (e.child.tag) {
                                    case 5:
                                        r = e.child.stateNode;
                                        break;
                                    case 1:
                                        r = e.child.stateNode
                                }
                                jh(e, o, r)
                            }
                            break;
                        case 5:
                            var a = e.stateNode;
                            if (r === null && e.flags & 4) {
                                r = a;
                                var l = e.memoizedProps;
                                switch (e.type) {
                                    case "button":
                                    case "input":
                                    case "select":
                                    case "textarea":
                                        l.autoFocus && r.focus();
                                        break;
                                    case "img":
                                        l.src && (r.src = l.src)
                                }
                            }
                            break;
                        case 6:
                            break;
                        case 4:
                            break;
                        case 12:
                            break;
                        case 13:
                            if (e.memoizedState === null) {
                                var u = e.alternate;
                                if (u !== null) {
                                    var c = u.memoizedState;
                                    if (c !== null) {
                                        var f = c.dehydrated;
                                        f !== null && Qa(f)
                                    }
                                }
                            }
                            break;
                        case 19:
                        case 17:
                        case 21:
                        case 22:
                        case 23:
                        case 25:
                            break;
                        default:
                            throw Error(N(163))
                    }
                    bt || e.flags & 512 && uf(e)
                } catch (d) {
                    ze(e, e.return, d)
                }
            }
            if (e === t) {
                D = null;
                break
            }
            if (r = e.sibling, r !== null) {
                r.return = e.return, D = r;
                break
            }
            D = e.return
        }
    }

    function Qh(t) {
        for (; D !== null;) {
            var e = D;
            if (e === t) {
                D = null;
                break
            }
            var r = e.sibling;
            if (r !== null) {
                r.return = e.return, D = r;
                break
            }
            D = e.return
        }
    }

    function Yh(t) {
        for (; D !== null;) {
            var e = D;
            try {
                switch (e.tag) {
                    case 0:
                    case 11:
                    case 15:
                        var r = e.return;
                        try {
                            zu(4, e)
                        } catch (l) {
                            ze(e, r, l)
                        }
                        break;
                    case 1:
                        var n = e.stateNode;
                        if (typeof n.componentDidMount == "function") {
                            var i = e.return;
                            try {
                                n.componentDidMount()
                            } catch (l) {
                                ze(e, i, l)
                            }
                        }
                        var s = e.return;
                        try {
                            uf(e)
                        } catch (l) {
                            ze(e, s, l)
                        }
                        break;
                    case 5:
                        var o = e.return;
                        try {
                            uf(e)
                        } catch (l) {
                            ze(e, o, l)
                        }
                }
            } catch (l) {
                ze(e, e.return, l)
            }
            if (e === t) {
                D = null;
                break
            }
            var a = e.sibling;
            if (a !== null) {
                a.return = e.return, D = a;
                break
            }
            D = e.return
        }
    }
    var g7 = Math.ceil,
        ru = zn.ReactCurrentDispatcher,
        q1 = zn.ReactCurrentOwner,
        Rr = zn.ReactCurrentBatchConfig,
        ae = 0,
        ut = null,
        Ke = null,
        gt = 0,
        lr = 0,
        Qs = Pi(0),
        rt = 0,
        il = null,
        cs = 0,
        Iu = 0,
        K1 = 0,
        Sa = null,
        Yt = null,
        Z1 = 0,
        vo = 1 / 0,
        _n = null,
        nu = !1,
        df = null,
        fi = null,
        Yl = !1,
        Jn = null,
        iu = 0,
        ka = 0,
        hf = null,
        A0 = -1,
        S0 = 0;

    function Vt() {
        return ae & 6 ? Ue() : A0 !== -1 ? A0 : A0 = Ue()
    }

    function di(t) {
        return t.mode & 1 ? ae & 2 && gt !== 0 ? gt & -gt : Jv.transition !== null ? (S0 === 0 && (S0 = Im()), S0) : (t = de, t !== 0 || (t = window.event, t = t === void 0 ? 16 : Um(t.type)), t) : 1
    }

    function Kr(t, e, r, n) {
        if (50 < ka) throw ka = 0, hf = null, Error(N(185));
        wl(t, r, n), (!(ae & 2) || t !== ut) && (t === ut && (!(ae & 2) && (Iu |= r), rt === 4 && Zn(t, gt)), Xt(t, n), r === 1 && ae === 0 && !(e.mode & 1) && (vo = Ue() + 500, Nu && bi()))
    }

    function Xt(t, e) {
        var r = t.callbackNode;
        J4(t, e);
        var n = $0(t, t === ut ? gt : 0);
        if (n === 0) r !== null && nh(r), t.callbackNode = null, t.callbackPriority = 0;
        else if (e = n & -n, t.callbackPriority !== e) {
            if (r != null && nh(r), e === 1) t.tag === 0 ? Xv(qh.bind(null, t)) : ug(qh.bind(null, t)), Yv(function() {
                !(ae & 6) && bi()
            }), r = null;
            else {
                switch (Dm(n)) {
                    case 1:
                        r = A1;
                        break;
                    case 4:
                        r = Om;
                        break;
                    case 16:
                        r = B0;
                        break;
                    case 536870912:
                        r = zm;
                        break;
                    default:
                        r = B0
                }
                r = a5(r, e5.bind(null, t))
            }
            t.callbackPriority = e, t.callbackNode = r
        }
    }

    function e5(t, e) {
        if (A0 = -1, S0 = 0, ae & 6) throw Error(N(327));
        var r = t.callbackNode;
        if (ro() && t.callbackNode !== r) return null;
        var n = $0(t, t === ut ? gt : 0);
        if (n === 0) return null;
        if (n & 30 || n & t.expiredLanes || e) e = su(t, n);
        else {
            e = n;
            var i = ae;
            ae |= 2;
            var s = r5();
            (ut !== t || gt !== e) && (_n = null, vo = Ue() + 500, Zi(t, e));
            do try {
                x7();
                break
            } catch (a) {
                t5(t, a)
            }
            while (!0);
            z1(), ru.current = s, ae = i, Ke !== null ? e = 0 : (ut = null, gt = 0, e = rt)
        }
        if (e !== 0) {
            if (e === 2 && (i = Fc(t), i !== 0 && (n = i, e = pf(t, i))), e === 1) throw r = il, Zi(t, 0), Zn(t, n), Xt(t, Ue()), r;
            if (e === 6) Zn(t, n);
            else {
                if (i = t.current.alternate, !(n & 30) && !v7(i) && (e = su(t, n), e === 2 && (s = Fc(t), s !== 0 && (n = s, e = pf(t, s))), e === 1)) throw r = il, Zi(t, 0), Zn(t, n), Xt(t, Ue()), r;
                switch (t.finishedWork = i, t.finishedLanes = n, e) {
                    case 0:
                    case 1:
                        throw Error(N(345));
                    case 2:
                        Fi(t, Yt, _n);
                        break;
                    case 3:
                        if (Zn(t, n), (n & 130023424) === n && (e = Z1 + 500 - Ue(), 10 < e)) {
                            if ($0(t, 0) !== 0) break;
                            if (i = t.suspendedLanes, (i & n) !== n) {
                                Vt(), t.pingedLanes |= t.suspendedLanes & i;
                                break
                            }
                            t.timeoutHandle = Qc(Fi.bind(null, t, Yt, _n), e);
                            break
                        }
                        Fi(t, Yt, _n);
                        break;
                    case 4:
                        if (Zn(t, n), (n & 4194240) === n) break;
                        for (e = t.eventTimes, i = -1; 0 < n;) {
                            var o = 31 - qr(n);
                            s = 1 << o, o = e[o], o > i && (i = o), n &= ~s
                        }
                        if (n = i, n = Ue() - n, n = (120 > n ? 120 : 480 > n ? 480 : 1080 > n ? 1080 : 1920 > n ? 1920 : 3e3 > n ? 3e3 : 4320 > n ? 4320 : 1960 * g7(n / 1960)) - n, 10 < n) {
                            t.timeoutHandle = Qc(Fi.bind(null, t, Yt, _n), n);
                            break
                        }
                        Fi(t, Yt, _n);
                        break;
                    case 5:
                        Fi(t, Yt, _n);
                        break;
                    default:
                        throw Error(N(329))
                }
            }
        }
        return Xt(t, Ue()), t.callbackNode === r ? e5.bind(null, t) : null
    }

    function pf(t, e) {
        var r = Sa;
        return t.current.memoizedState.isDehydrated && (Zi(t, e).flags |= 256), t = su(t, e), t !== 2 && (e = Yt, Yt = r, e !== null && mf(e)), t
    }

    function mf(t) {
        Yt === null ? Yt = t : Yt.push.apply(Yt, t)
    }

    function v7(t) {
        for (var e = t;;) {
            if (e.flags & 16384) {
                var r = e.updateQueue;
                if (r !== null && (r = r.stores, r !== null))
                    for (var n = 0; n < r.length; n++) {
                        var i = r[n],
                            s = i.getSnapshot;
                        i = i.value;
                        try {
                            if (!Zr(s(), i)) return !1
                        } catch {
                            return !1
                        }
                    }
            }
            if (r = e.child, e.subtreeFlags & 16384 && r !== null) r.return = e, e = r;
            else {
                if (e === t) break;
                for (; e.sibling === null;) {
                    if (e.return === null || e.return === t) return !0;
                    e = e.return
                }
                e.sibling.return = e.return, e = e.sibling
            }
        }
        return !0
    }

    function Zn(t, e) {
        for (e &= ~K1, e &= ~Iu, t.suspendedLanes |= e, t.pingedLanes &= ~e, t = t.expirationTimes; 0 < e;) {
            var r = 31 - qr(e),
                n = 1 << r;
            t[r] = -1, e &= ~n
        }
    }

    function qh(t) {
        if (ae & 6) throw Error(N(327));
        ro();
        var e = $0(t, 0);
        if (!(e & 1)) return Xt(t, Ue()), null;
        var r = su(t, e);
        if (t.tag !== 0 && r === 2) {
            var n = Fc(t);
            n !== 0 && (e = n, r = pf(t, n))
        }
        if (r === 1) throw r = il, Zi(t, 0), Zn(t, e), Xt(t, Ue()), r;
        if (r === 6) throw Error(N(345));
        return t.finishedWork = t.current.alternate, t.finishedLanes = e, Fi(t, Yt, _n), Xt(t, Ue()), null
    }

    function X1(t, e) {
        var r = ae;
        ae |= 1;
        try {
            return t(e)
        } finally {
            ae = r, ae === 0 && (vo = Ue() + 500, Nu && bi())
        }
    }

    function fs(t) {
        Jn !== null && Jn.tag === 0 && !(ae & 6) && ro();
        var e = ae;
        ae |= 1;
        var r = Rr.transition,
            n = de;
        try {
            if (Rr.transition = null, de = 1, t) return t()
        } finally {
            de = n, Rr.transition = r, ae = e, !(ae & 6) && bi()
        }
    }

    function J1() {
        lr = Qs.current, Ce(Qs)
    }

    function Zi(t, e) {
        t.finishedWork = null, t.finishedLanes = 0;
        var r = t.timeoutHandle;
        if (r !== -1 && (t.timeoutHandle = -1, Qv(r)), Ke !== null)
            for (r = Ke.return; r !== null;) {
                var n = r;
                switch (N1(n), n.tag) {
                    case 1:
                        n = n.type.childContextTypes, n != null && W0();
                        break;
                    case 3:
                        mo(), Ce(Kt), Ce(Mt), H1();
                        break;
                    case 5:
                        $1(n);
                        break;
                    case 4:
                        mo();
                        break;
                    case 13:
                        Ce(Ee);
                        break;
                    case 19:
                        Ce(Ee);
                        break;
                    case 10:
                        I1(n.type._context);
                        break;
                    case 22:
                    case 23:
                        J1()
                }
                r = r.return
            }
        if (ut = t, Ke = t = hi(t.current, null), gt = lr = e, rt = 0, il = null, K1 = Iu = cs = 0, Yt = Sa = null, Wi !== null) {
            for (e = 0; e < Wi.length; e++)
                if (r = Wi[e], n = r.interleaved, n !== null) {
                    r.interleaved = null;
                    var i = n.next,
                        s = r.pending;
                    if (s !== null) {
                        var o = s.next;
                        s.next = i, n.next = o
                    }
                    r.pending = n
                }
            Wi = null
        }
        return t
    }

    function t5(t, e) {
        do {
            var r = Ke;
            try {
                if (z1(), _0.current = tu, eu) {
                    for (var n = Ne.memoizedState; n !== null;) {
                        var i = n.queue;
                        i !== null && (i.pending = null), n = n.next
                    }
                    eu = !1
                }
                if (us = 0, at = Je = Ne = null, Ca = !1, tl = 0, q1.current = null, r === null || r.return === null) {
                    rt = 1, il = e, Ke = null;
                    break
                }
                e: {
                    var s = t,
                        o = r.return,
                        a = r,
                        l = e;
                    if (e = gt, a.flags |= 32768, l !== null && typeof l == "object" && typeof l.then == "function") {
                        var u = l,
                            c = a,
                            f = c.tag;
                        if (!(c.mode & 1) && (f === 0 || f === 11 || f === 15)) {
                            var d = c.alternate;
                            d ? (c.updateQueue = d.updateQueue, c.memoizedState = d.memoizedState, c.lanes = d.lanes) : (c.updateQueue = null, c.memoizedState = null)
                        }
                        var h = zh(o);
                        if (h !== null) {
                            h.flags &= -257, Ih(h, o, a, s, e), h.mode & 1 && Oh(s, u, e), e = h, l = u;
                            var y = e.updateQueue;
                            if (y === null) {
                                var g = new Set;
                                g.add(l), e.updateQueue = g
                            } else y.add(l);
                            break e
                        } else {
                            if (!(e & 1)) {
                                Oh(s, u, e), ed();
                                break e
                            }
                            l = Error(N(426))
                        }
                    } else if (Se && a.mode & 1) {
                        var w = zh(o);
                        if (w !== null) {
                            !(w.flags & 65536) && (w.flags |= 256), Ih(w, o, a, s, e), L1(go(l, a));
                            break e
                        }
                    }
                    s = l = go(l, a),
                    rt !== 4 && (rt = 2),
                    Sa === null ? Sa = [s] : Sa.push(s),
                    s = o;do {
                        switch (s.tag) {
                            case 3:
                                s.flags |= 65536, e &= -e, s.lanes |= e;
                                var v = Dg(s, l, e);
                                Eh(s, v);
                                break e;
                            case 1:
                                a = l;
                                var p = s.type,
                                    x = s.stateNode;
                                if (!(s.flags & 128) && (typeof p.getDerivedStateFromError == "function" || x !== null && typeof x.componentDidCatch == "function" && (fi === null || !fi.has(x)))) {
                                    s.flags |= 65536, e &= -e, s.lanes |= e;
                                    var _ = Fg(s, a, e);
                                    Eh(s, _);
                                    break e
                                }
                        }
                        s = s.return
                    } while (s !== null)
                }
                i5(r)
            } catch (C) {
                e = C, Ke === r && r !== null && (Ke = r = r.return);
                continue
            }
            break
        } while (!0)
    }

    function r5() {
        var t = ru.current;
        return ru.current = tu, t === null ? tu : t
    }

    function ed() {
        (rt === 0 || rt === 3 || rt === 2) && (rt = 4), ut === null || !(cs & 268435455) && !(Iu & 268435455) || Zn(ut, gt)
    }

    function su(t, e) {
        var r = ae;
        ae |= 2;
        var n = r5();
        (ut !== t || gt !== e) && (_n = null, Zi(t, e));
        do try {
            y7();
            break
        } catch (i) {
            t5(t, i)
        }
        while (!0);
        if (z1(), ae = r, ru.current = n, Ke !== null) throw Error(N(261));
        return ut = null, gt = 0, rt
    }

    function y7() {
        for (; Ke !== null;) n5(Ke)
    }

    function x7() {
        for (; Ke !== null && !U4();) n5(Ke)
    }

    function n5(t) {
        var e = o5(t.alternate, t, lr);
        t.memoizedProps = t.pendingProps, e === null ? i5(t) : Ke = e, q1.current = null
    }

    function i5(t) {
        var e = t;
        do {
            var r = e.alternate;
            if (t = e.return, e.flags & 32768) {
                if (r = d7(r, e), r !== null) {
                    r.flags &= 32767, Ke = r;
                    return
                }
                if (t !== null) t.flags |= 32768, t.subtreeFlags = 0, t.deletions = null;
                else {
                    rt = 6, Ke = null;
                    return
                }
            } else if (r = f7(r, e, lr), r !== null) {
                Ke = r;
                return
            }
            if (e = e.sibling, e !== null) {
                Ke = e;
                return
            }
            Ke = e = t
        } while (e !== null);
        rt === 0 && (rt = 5)
    }

    function Fi(t, e, r) {
        var n = de,
            i = Rr.transition;
        try {
            Rr.transition = null, de = 1, _7(t, e, r, n)
        } finally {
            Rr.transition = i, de = n
        }
        return null
    }

    function _7(t, e, r, n) {
        do ro(); while (Jn !== null);
        if (ae & 6) throw Error(N(327));
        r = t.finishedWork;
        var i = t.finishedLanes;
        if (r === null) return null;
        if (t.finishedWork = null, t.finishedLanes = 0, r === t.current) throw Error(N(177));
        t.callbackNode = null, t.callbackPriority = 0;
        var s = r.lanes | r.childLanes;
        if (ev(t, s), t === ut && (Ke = ut = null, gt = 0), !(r.subtreeFlags & 2064) && !(r.flags & 2064) || Yl || (Yl = !0, a5(B0, function() {
                return ro(), null
            })), s = (r.flags & 15990) !== 0, r.subtreeFlags & 15990 || s) {
            s = Rr.transition, Rr.transition = null;
            var o = de;
            de = 1;
            var a = ae;
            ae |= 4, q1.current = null, p7(t, r), Xg(r, t), Bv(Gc), H0 = !!Uc, Gc = Uc = null, t.current = r, m7(r), G4(), ae = a, de = o, Rr.transition = s
        } else t.current = r;
        if (Yl && (Yl = !1, Jn = t, iu = i), s = t.pendingLanes, s === 0 && (fi = null), Y4(r.stateNode), Xt(t, Ue()), e !== null)
            for (n = t.onRecoverableError, r = 0; r < e.length; r++) i = e[r], n(i.value, {
                componentStack: i.stack,
                digest: i.digest
            });
        if (nu) throw nu = !1, t = df, df = null, t;
        return iu & 1 && t.tag !== 0 && ro(), s = t.pendingLanes, s & 1 ? t === hf ? ka++ : (ka = 0, hf = t) : ka = 0, bi(), null
    }

    function ro() {
        if (Jn !== null) {
            var t = Dm(iu),
                e = Rr.transition,
                r = de;
            try {
                if (Rr.transition = null, de = 16 > t ? 16 : t, Jn === null) var n = !1;
                else {
                    if (t = Jn, Jn = null, iu = 0, ae & 6) throw Error(N(331));
                    var i = ae;
                    for (ae |= 4, D = t.current; D !== null;) {
                        var s = D,
                            o = s.child;
                        if (D.flags & 16) {
                            var a = s.deletions;
                            if (a !== null) {
                                for (var l = 0; l < a.length; l++) {
                                    var u = a[l];
                                    for (D = u; D !== null;) {
                                        var c = D;
                                        switch (c.tag) {
                                            case 0:
                                            case 11:
                                            case 15:
                                                Aa(8, c, s)
                                        }
                                        var f = c.child;
                                        if (f !== null) f.return = c, D = f;
                                        else
                                            for (; D !== null;) {
                                                c = D;
                                                var d = c.sibling,
                                                    h = c.return;
                                                if (qg(c), c === u) {
                                                    D = null;
                                                    break
                                                }
                                                if (d !== null) {
                                                    d.return = h, D = d;
                                                    break
                                                }
                                                D = h
                                            }
                                    }
                                }
                                var y = s.alternate;
                                if (y !== null) {
                                    var g = y.child;
                                    if (g !== null) {
                                        y.child = null;
                                        do {
                                            var w = g.sibling;
                                            g.sibling = null, g = w
                                        } while (g !== null)
                                    }
                                }
                                D = s
                            }
                        }
                        if (s.subtreeFlags & 2064 && o !== null) o.return = s, D = o;
                        else e: for (; D !== null;) {
                            if (s = D, s.flags & 2048) switch (s.tag) {
                                case 0:
                                case 11:
                                case 15:
                                    Aa(9, s, s.return)
                            }
                            var v = s.sibling;
                            if (v !== null) {
                                v.return = s.return, D = v;
                                break e
                            }
                            D = s.return
                        }
                    }
                    var p = t.current;
                    for (D = p; D !== null;) {
                        o = D;
                        var x = o.child;
                        if (o.subtreeFlags & 2064 && x !== null) x.return = o, D = x;
                        else e: for (o = p; D !== null;) {
                            if (a = D, a.flags & 2048) try {
                                switch (a.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        zu(9, a)
                                }
                            } catch (C) {
                                ze(a, a.return, C)
                            }
                            if (a === o) {
                                D = null;
                                break e
                            }
                            var _ = a.sibling;
                            if (_ !== null) {
                                _.return = a.return, D = _;
                                break e
                            }
                            D = a.return
                        }
                    }
                    if (ae = i, bi(), cn && typeof cn.onPostCommitFiberRoot == "function") try {
                        cn.onPostCommitFiberRoot(Tu, t)
                    } catch {}
                    n = !0
                }
                return n
            } finally {
                de = r, Rr.transition = e
            }
        }
        return !1
    }

    function Kh(t, e, r) {
        e = go(r, e), e = Dg(t, e, 1), t = ci(t, e, 1), e = Vt(), t !== null && (wl(t, 1, e), Xt(t, e))
    }

    function ze(t, e, r) {
        if (t.tag === 3) Kh(t, t, r);
        else
            for (; e !== null;) {
                if (e.tag === 3) {
                    Kh(e, t, r);
                    break
                } else if (e.tag === 1) {
                    var n = e.stateNode;
                    if (typeof e.type.getDerivedStateFromError == "function" || typeof n.componentDidCatch == "function" && (fi === null || !fi.has(n))) {
                        t = go(r, t), t = Fg(e, t, 1), e = ci(e, t, 1), t = Vt(), e !== null && (wl(e, 1, t), Xt(e, t));
                        break
                    }
                }
                e = e.return
            }
    }

    function w7(t, e, r) {
        var n = t.pingCache;
        n !== null && n.delete(e), e = Vt(), t.pingedLanes |= t.suspendedLanes & r, ut === t && (gt & r) === r && (rt === 4 || rt === 3 && (gt & 130023424) === gt && 500 > Ue() - Z1 ? Zi(t, 0) : K1 |= r), Xt(t, e)
    }

    function s5(t, e) {
        e === 0 && (t.mode & 1 ? (e = Dl, Dl <<= 1, !(Dl & 130023424) && (Dl = 4194304)) : e = 1);
        var r = Vt();
        t = Rn(t, e), t !== null && (wl(t, e, r), Xt(t, r))
    }

    function C7(t) {
        var e = t.memoizedState,
            r = 0;
        e !== null && (r = e.retryLane), s5(t, r)
    }

    function A7(t, e) {
        var r = 0;
        switch (t.tag) {
            case 13:
                var n = t.stateNode,
                    i = t.memoizedState;
                i !== null && (r = i.retryLane);
                break;
            case 19:
                n = t.stateNode;
                break;
            default:
                throw Error(N(314))
        }
        n !== null && n.delete(e), s5(t, r)
    }
    var o5;
    o5 = function(t, e, r) {
        if (t !== null)
            if (t.memoizedProps !== e.pendingProps || Kt.current) qt = !0;
            else {
                if (!(t.lanes & r) && !(e.flags & 128)) return qt = !1, c7(t, e, r);
                qt = !!(t.flags & 131072)
            }
        else qt = !1, Se && e.flags & 1048576 && cg(e, q0, e.index);
        switch (e.lanes = 0, e.tag) {
            case 2:
                var n = e.type;
                C0(t, e), t = e.pendingProps;
                var i = fo(e, Mt.current);
                to(e, r), i = U1(null, e, n, t, i, r);
                var s = G1();
                return e.flags |= 1, typeof i == "object" && i !== null && typeof i.render == "function" && i.$$typeof === void 0 ? (e.tag = 1, e.memoizedState = null, e.updateQueue = null, Zt(n) ? (s = !0, Q0(e)) : s = !1, e.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null, F1(e), i.updater = Ou, e.stateNode = i, i._reactInternals = e, ef(e, n, t, r), e = nf(null, e, n, !0, s, r)) : (e.tag = 0, Se && s && R1(e), It(null, e, i, r), e = e.child), e;
            case 16:
                n = e.elementType;
                e: {
                    switch (C0(t, e), t = e.pendingProps, i = n._init, n = i(n._payload), e.type = n, i = e.tag = k7(n), t = Gr(n, t), i) {
                        case 0:
                            e = rf(null, e, n, t, r);
                            break e;
                        case 1:
                            e = Bh(null, e, n, t, r);
                            break e;
                        case 11:
                            e = Dh(null, e, n, t, r);
                            break e;
                        case 14:
                            e = Fh(null, e, n, Gr(n.type, t), r);
                            break e
                    }
                    throw Error(N(306, n, ""))
                }
                return e;
            case 0:
                return n = e.type, i = e.pendingProps, i = e.elementType === n ? i : Gr(n, i), rf(t, e, n, i, r);
            case 1:
                return n = e.type, i = e.pendingProps, i = e.elementType === n ? i : Gr(n, i), Bh(t, e, n, i, r);
            case 3:
                e: {
                    if (Vg(e), t === null) throw Error(N(387));n = e.pendingProps,
                    s = e.memoizedState,
                    i = s.element,
                    gg(t, e),
                    X0(e, n, null, r);
                    var o = e.memoizedState;
                    if (n = o.element, s.isDehydrated)
                        if (s = {
                                element: n,
                                isDehydrated: !1,
                                cache: o.cache,
                                pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
                                transitions: o.transitions
                            }, e.updateQueue.baseState = s, e.memoizedState = s, e.flags & 256) {
                            i = go(Error(N(423)), e), e = $h(t, e, n, r, i);
                            break e
                        } else if (n !== i) {
                        i = go(Error(N(424)), e), e = $h(t, e, n, r, i);
                        break e
                    } else
                        for (hr = ui(e.stateNode.containerInfo.firstChild), mr = e, Se = !0, Qr = null, r = pg(e, null, n, r), e.child = r; r;) r.flags = r.flags & -3 | 4096, r = r.sibling;
                    else {
                        if (ho(), n === i) {
                            e = Nn(t, e, r);
                            break e
                        }
                        It(t, e, n, r)
                    }
                    e = e.child
                }
                return e;
            case 5:
                return vg(e), t === null && Zc(e), n = e.type, i = e.pendingProps, s = t !== null ? t.memoizedProps : null, o = i.children, Wc(n, i) ? o = null : s !== null && Wc(n, s) && (e.flags |= 32), Hg(t, e), It(t, e, o, r), e.child;
            case 6:
                return t === null && Zc(e), null;
            case 13:
                return Ug(t, e, r);
            case 4:
                return B1(e, e.stateNode.containerInfo), n = e.pendingProps, t === null ? e.child = po(e, null, n, r) : It(t, e, n, r), e.child;
            case 11:
                return n = e.type, i = e.pendingProps, i = e.elementType === n ? i : Gr(n, i), Dh(t, e, n, i, r);
            case 7:
                return It(t, e, e.pendingProps, r), e.child;
            case 8:
                return It(t, e, e.pendingProps.children, r), e.child;
            case 12:
                return It(t, e, e.pendingProps.children, r), e.child;
            case 10:
                e: {
                    if (n = e.type._context, i = e.pendingProps, s = e.memoizedProps, o = i.value, ve(K0, n._currentValue), n._currentValue = o, s !== null)
                        if (Zr(s.value, o)) {
                            if (s.children === i.children && !Kt.current) {
                                e = Nn(t, e, r);
                                break e
                            }
                        } else
                            for (s = e.child, s !== null && (s.return = e); s !== null;) {
                                var a = s.dependencies;
                                if (a !== null) {
                                    o = s.child;
                                    for (var l = a.firstContext; l !== null;) {
                                        if (l.context === n) {
                                            if (s.tag === 1) {
                                                l = Tn(-1, r & -r), l.tag = 2;
                                                var u = s.updateQueue;
                                                if (u !== null) {
                                                    u = u.shared;
                                                    var c = u.pending;
                                                    c === null ? l.next = l : (l.next = c.next, c.next = l), u.pending = l
                                                }
                                            }
                                            s.lanes |= r, l = s.alternate, l !== null && (l.lanes |= r), Xc(s.return, r, e), a.lanes |= r;
                                            break
                                        }
                                        l = l.next
                                    }
                                } else if (s.tag === 10) o = s.type === e.type ? null : s.child;
                                else if (s.tag === 18) {
                                    if (o = s.return, o === null) throw Error(N(341));
                                    o.lanes |= r, a = o.alternate, a !== null && (a.lanes |= r), Xc(o, r, e), o = s.sibling
                                } else o = s.child;
                                if (o !== null) o.return = s;
                                else
                                    for (o = s; o !== null;) {
                                        if (o === e) {
                                            o = null;
                                            break
                                        }
                                        if (s = o.sibling, s !== null) {
                                            s.return = o.return, o = s;
                                            break
                                        }
                                        o = o.return
                                    }
                                s = o
                            }
                    It(t, e, i.children, r),
                    e = e.child
                }
                return e;
            case 9:
                return i = e.type, n = e.pendingProps.children, to(e, r), i = Lr(i), n = n(i), e.flags |= 1, It(t, e, n, r), e.child;
            case 14:
                return n = e.type, i = Gr(n, e.pendingProps), i = Gr(n.type, i), Fh(t, e, n, i, r);
            case 15:
                return Bg(t, e, e.type, e.pendingProps, r);
            case 17:
                return n = e.type, i = e.pendingProps, i = e.elementType === n ? i : Gr(n, i), C0(t, e), e.tag = 1, Zt(n) ? (t = !0, Q0(e)) : t = !1, to(e, r), Ig(e, n, i), ef(e, n, i, r), nf(null, e, n, !0, t, r);
            case 19:
                return Gg(t, e, r);
            case 22:
                return $g(t, e, r)
        }
        throw Error(N(156, e.tag))
    };

    function a5(t, e) {
        return Lm(t, e)
    }

    function S7(t, e, r, n) {
        this.tag = t, this.key = r, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = e, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = n, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null
    }

    function Tr(t, e, r, n) {
        return new S7(t, e, r, n)
    }

    function td(t) {
        return t = t.prototype, !(!t || !t.isReactComponent)
    }

    function k7(t) {
        if (typeof t == "function") return td(t) ? 1 : 0;
        if (t != null) {
            if (t = t.$$typeof, t === _1) return 11;
            if (t === w1) return 14
        }
        return 2
    }

    function hi(t, e) {
        var r = t.alternate;
        return r === null ? (r = Tr(t.tag, e, t.key, t.mode), r.elementType = t.elementType, r.type = t.type, r.stateNode = t.stateNode, r.alternate = t, t.alternate = r) : (r.pendingProps = e, r.type = t.type, r.flags = 0, r.subtreeFlags = 0, r.deletions = null), r.flags = t.flags & 14680064, r.childLanes = t.childLanes, r.lanes = t.lanes, r.child = t.child, r.memoizedProps = t.memoizedProps, r.memoizedState = t.memoizedState, r.updateQueue = t.updateQueue, e = t.dependencies, r.dependencies = e === null ? null : {
            lanes: e.lanes,
            firstContext: e.firstContext
        }, r.sibling = t.sibling, r.index = t.index, r.ref = t.ref, r
    }

    function k0(t, e, r, n, i, s) {
        var o = 2;
        if (n = t, typeof t == "function") td(t) && (o = 1);
        else if (typeof t == "string") o = 5;
        else e: switch (t) {
            case Is:
                return Xi(r.children, i, s, e);
            case x1:
                o = 8, i |= 8;
                break;
            case Sc:
                return t = Tr(12, r, e, i | 2), t.elementType = Sc, t.lanes = s, t;
            case kc:
                return t = Tr(13, r, e, i), t.elementType = kc, t.lanes = s, t;
            case Pc:
                return t = Tr(19, r, e, i), t.elementType = Pc, t.lanes = s, t;
            case vm:
                return Du(r, i, s, e);
            default:
                if (typeof t == "object" && t !== null) switch (t.$$typeof) {
                    case mm:
                        o = 10;
                        break e;
                    case gm:
                        o = 9;
                        break e;
                    case _1:
                        o = 11;
                        break e;
                    case w1:
                        o = 14;
                        break e;
                    case Yn:
                        o = 16, n = null;
                        break e
                }
                throw Error(N(130, t == null ? t : typeof t, ""))
        }
        return e = Tr(o, r, e, i), e.elementType = t, e.type = n, e.lanes = s, e
    }

    function Xi(t, e, r, n) {
        return t = Tr(7, t, n, e), t.lanes = r, t
    }

    function Du(t, e, r, n) {
        return t = Tr(22, t, n, e), t.elementType = vm, t.lanes = r, t.stateNode = {
            isHidden: !1
        }, t
    }

    function B2(t, e, r) {
        return t = Tr(6, t, null, e), t.lanes = r, t
    }

    function $2(t, e, r) {
        return e = Tr(4, t.children !== null ? t.children : [], t.key, e), e.lanes = r, e.stateNode = {
            containerInfo: t.containerInfo,
            pendingChildren: null,
            implementation: t.implementation
        }, e
    }

    function P7(t, e, r, n, i) {
        this.tag = e, this.containerInfo = t, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = w2(0), this.expirationTimes = w2(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = w2(0), this.identifierPrefix = n, this.onRecoverableError = i, this.mutableSourceEagerHydrationData = null
    }

    function rd(t, e, r, n, i, s, o, a, l) {
        return t = new P7(t, e, r, a, l), e === 1 ? (e = 1, s === !0 && (e |= 8)) : e = 0, s = Tr(3, null, null, e), t.current = s, s.stateNode = t, s.memoizedState = {
            element: n,
            isDehydrated: r,
            cache: null,
            transitions: null,
            pendingSuspenseBoundaries: null
        }, F1(s), t
    }

    function b7(t, e, r) {
        var n = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
        return {
            $$typeof: zs,
            key: n == null ? null : "" + n,
            children: t,
            containerInfo: e,
            implementation: r
        }
    }

    function l5(t) {
        if (!t) return _i;
        t = t._reactInternals;
        e: {
            if (xs(t) !== t || t.tag !== 1) throw Error(N(170));
            var e = t;do {
                switch (e.tag) {
                    case 3:
                        e = e.stateNode.context;
                        break e;
                    case 1:
                        if (Zt(e.type)) {
                            e = e.stateNode.__reactInternalMemoizedMergedChildContext;
                            break e
                        }
                }
                e = e.return
            } while (e !== null);
            throw Error(N(171))
        }
        if (t.tag === 1) {
            var r = t.type;
            if (Zt(r)) return lg(t, r, e)
        }
        return e
    }

    function u5(t, e, r, n, i, s, o, a, l) {
        return t = rd(r, n, !0, t, i, s, o, a, l), t.context = l5(null), r = t.current, n = Vt(), i = di(r), s = Tn(n, i), s.callback = e ? ? null, ci(r, s, i), t.current.lanes = i, wl(t, i, n), Xt(t, n), t
    }

    function Fu(t, e, r, n) {
        var i = e.current,
            s = Vt(),
            o = di(i);
        return r = l5(r), e.context === null ? e.context = r : e.pendingContext = r, e = Tn(s, o), e.payload = {
            element: t
        }, n = n === void 0 ? null : n, n !== null && (e.callback = n), t = ci(i, e, o), t !== null && (Kr(t, i, o, s), x0(t, i, o)), o
    }

    function ou(t) {
        if (t = t.current, !t.child) return null;
        switch (t.child.tag) {
            case 5:
                return t.child.stateNode;
            default:
                return t.child.stateNode
        }
    }

    function Zh(t, e) {
        if (t = t.memoizedState, t !== null && t.dehydrated !== null) {
            var r = t.retryLane;
            t.retryLane = r !== 0 && r < e ? r : e
        }
    }

    function nd(t, e) {
        Zh(t, e), (t = t.alternate) && Zh(t, e)
    }

    function T7() {
        return null
    }
    var c5 = typeof reportError == "function" ? reportError : function(t) {
        console.error(t)
    };

    function id(t) {
        this._internalRoot = t
    }
    Bu.prototype.render = id.prototype.render = function(t) {
        var e = this._internalRoot;
        if (e === null) throw Error(N(409));
        Fu(t, e, null, null)
    };
    Bu.prototype.unmount = id.prototype.unmount = function() {
        var t = this._internalRoot;
        if (t !== null) {
            this._internalRoot = null;
            var e = t.containerInfo;
            fs(function() {
                Fu(null, t, null, null)
            }), e[Mn] = null
        }
    };

    function Bu(t) {
        this._internalRoot = t
    }
    Bu.prototype.unstable_scheduleHydration = function(t) {
        if (t) {
            var e = $m();
            t = {
                blockedOn: null,
                target: t,
                priority: e
            };
            for (var r = 0; r < Kn.length && e !== 0 && e < Kn[r].priority; r++);
            Kn.splice(r, 0, t), r === 0 && Vm(t)
        }
    };

    function sd(t) {
        return !(!t || t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11)
    }

    function $u(t) {
        return !(!t || t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11 && (t.nodeType !== 8 || t.nodeValue !== " react-mount-point-unstable "))
    }

    function Xh() {}

    function E7(t, e, r, n, i) {
        if (i) {
            if (typeof n == "function") {
                var s = n;
                n = function() {
                    var u = ou(o);
                    s.call(u)
                }
            }
            var o = u5(e, n, t, 0, null, !1, !1, "", Xh);
            return t._reactRootContainer = o, t[Mn] = o.current, Ka(t.nodeType === 8 ? t.parentNode : t), fs(), o
        }
        for (; i = t.lastChild;) t.removeChild(i);
        if (typeof n == "function") {
            var a = n;
            n = function() {
                var u = ou(l);
                a.call(u)
            }
        }
        var l = rd(t, 0, !1, null, null, !1, !1, "", Xh);
        return t._reactRootContainer = l, t[Mn] = l.current, Ka(t.nodeType === 8 ? t.parentNode : t), fs(function() {
            Fu(e, l, r, n)
        }), l
    }

    function Hu(t, e, r, n, i) {
        var s = r._reactRootContainer;
        if (s) {
            var o = s;
            if (typeof i == "function") {
                var a = i;
                i = function() {
                    var l = ou(o);
                    a.call(l)
                }
            }
            Fu(e, o, t, i)
        } else o = E7(r, e, t, i, n);
        return ou(o)
    }
    Fm = function(t) {
        switch (t.tag) {
            case 3:
                var e = t.stateNode;
                if (e.current.memoizedState.isDehydrated) {
                    var r = oa(e.pendingLanes);
                    r !== 0 && (S1(e, r | 1), Xt(e, Ue()), !(ae & 6) && (vo = Ue() + 500, bi()))
                }
                break;
            case 13:
                fs(function() {
                    var n = Rn(t, 1);
                    if (n !== null) {
                        var i = Vt();
                        Kr(n, t, 1, i)
                    }
                }), nd(t, 1)
        }
    };
    k1 = function(t) {
        if (t.tag === 13) {
            var e = Rn(t, 134217728);
            if (e !== null) {
                var r = Vt();
                Kr(e, t, 134217728, r)
            }
            nd(t, 134217728)
        }
    };
    Bm = function(t) {
        if (t.tag === 13) {
            var e = di(t),
                r = Rn(t, e);
            if (r !== null) {
                var n = Vt();
                Kr(r, t, e, n)
            }
            nd(t, e)
        }
    };
    $m = function() {
        return de
    };
    Hm = function(t, e) {
        var r = de;
        try {
            return de = t, e()
        } finally {
            de = r
        }
    };
    zc = function(t, e, r) {
        switch (e) {
            case "input":
                if (Ec(t, r), e = r.name, r.type === "radio" && e != null) {
                    for (r = t; r.parentNode;) r = r.parentNode;
                    for (r = r.querySelectorAll("input[name=" + JSON.stringify("" + e) + '][type="radio"]'), e = 0; e < r.length; e++) {
                        var n = r[e];
                        if (n !== t && n.form === t.form) {
                            var i = Ru(n);
                            if (!i) throw Error(N(90));
                            xm(n), Ec(n, i)
                        }
                    }
                }
                break;
            case "textarea":
                wm(t, r);
                break;
            case "select":
                e = r.value, e != null && Zs(t, !!r.multiple, e, !1)
        }
    };
    Tm = X1;
    Em = fs;
    var j7 = {
            usingClientEntryPoint: !1,
            Events: [Al, $s, Ru, Pm, bm, X1]
        },
        Zo = {
            findFiberByHostInstance: Gi,
            bundleType: 0,
            version: "18.3.1",
            rendererPackageName: "react-dom"
        },
        M7 = {
            bundleType: Zo.bundleType,
            version: Zo.version,
            rendererPackageName: Zo.rendererPackageName,
            rendererConfig: Zo.rendererConfig,
            overrideHookState: null,
            overrideHookStateDeletePath: null,
            overrideHookStateRenamePath: null,
            overrideProps: null,
            overridePropsDeletePath: null,
            overridePropsRenamePath: null,
            setErrorHandler: null,
            setSuspenseHandler: null,
            scheduleUpdate: null,
            currentDispatcherRef: zn.ReactCurrentDispatcher,
            findHostInstanceByFiber: function(t) {
                return t = Rm(t), t === null ? null : t.stateNode
            },
            findFiberByHostInstance: Zo.findFiberByHostInstance || T7,
            findHostInstancesForRefresh: null,
            scheduleRefresh: null,
            scheduleRoot: null,
            setRefreshHandler: null,
            getCurrentFiber: null,
            reconcilerVersion: "18.3.1-next-f1338f8080-20240426"
        };
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
        var ql = __REACT_DEVTOOLS_GLOBAL_HOOK__;
        if (!ql.isDisabled && ql.supportsFiber) try {
            Tu = ql.inject(M7), cn = ql
        } catch {}
    }
    xr.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = j7;
    xr.createPortal = function(t, e) {
        var r = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
        if (!sd(e)) throw Error(N(200));
        return b7(t, e, null, r)
    };
    xr.createRoot = function(t, e) {
        if (!sd(t)) throw Error(N(299));
        var r = !1,
            n = "",
            i = c5;
        return e != null && (e.unstable_strictMode === !0 && (r = !0), e.identifierPrefix !== void 0 && (n = e.identifierPrefix), e.onRecoverableError !== void 0 && (i = e.onRecoverableError)), e = rd(t, 1, !1, null, null, r, !1, n, i), t[Mn] = e.current, Ka(t.nodeType === 8 ? t.parentNode : t), new id(e)
    };
    xr.findDOMNode = function(t) {
        if (t == null) return null;
        if (t.nodeType === 1) return t;
        var e = t._reactInternals;
        if (e === void 0) throw typeof t.render == "function" ? Error(N(188)) : (t = Object.keys(t).join(","), Error(N(268, t)));
        return t = Rm(e), t = t === null ? null : t.stateNode, t
    };
    xr.flushSync = function(t) {
        return fs(t)
    };
    xr.hydrate = function(t, e, r) {
        if (!$u(e)) throw Error(N(200));
        return Hu(null, t, e, !0, r)
    };
    xr.hydrateRoot = function(t, e, r) {
        if (!sd(t)) throw Error(N(405));
        var n = r != null && r.hydratedSources || null,
            i = !1,
            s = "",
            o = c5;
        if (r != null && (r.unstable_strictMode === !0 && (i = !0), r.identifierPrefix !== void 0 && (s = r.identifierPrefix), r.onRecoverableError !== void 0 && (o = r.onRecoverableError)), e = u5(e, null, t, 1, r ? ? null, i, !1, s, o), t[Mn] = e.current, Ka(t), n)
            for (t = 0; t < n.length; t++) r = n[t], i = r._getVersion, i = i(r._source), e.mutableSourceEagerHydrationData == null ? e.mutableSourceEagerHydrationData = [r, i] : e.mutableSourceEagerHydrationData.push(r, i);
        return new Bu(e)
    };
    xr.render = function(t, e, r) {
        if (!$u(e)) throw Error(N(200));
        return Hu(null, t, e, !1, r)
    };
    xr.unmountComponentAtNode = function(t) {
        if (!$u(t)) throw Error(N(40));
        return t._reactRootContainer ? (fs(function() {
            Hu(null, null, t, !1, function() {
                t._reactRootContainer = null, t[Mn] = null
            })
        }), !0) : !1
    };
    xr.unstable_batchedUpdates = X1;
    xr.unstable_renderSubtreeIntoContainer = function(t, e, r, n) {
        if (!$u(r)) throw Error(N(200));
        if (t == null || t._reactInternals === void 0) throw Error(N(38));
        return Hu(t, e, r, !1, n)
    };
    xr.version = "18.3.1-next-f1338f8080-20240426";

    function f5() {
        if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(f5)
        } catch (t) {
            console.error(t)
        }
    }
    f5(), fm.exports = xr;
    var d5 = fm.exports,
        Jh = d5;
    Cc.createRoot = Jh.createRoot, Cc.hydrateRoot = Jh.hydrateRoot;
    const h5 = "/assets/logo-DlX-pHtK.png",
        R7 = "/assets/mobile-logo-CQzRp4dt.png";

    function wn(t) {
        if (t === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t
    }

    function p5(t, e) {
        t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e
    }
    /*!
     * GSAP 3.12.5
     * https://gsap.com
     *
     * @license Copyright 2008-2024, GreenSock. All rights reserved.
     * Subject to the terms at https://gsap.com/standard-license or for
     * Club GSAP members, the agreement issued with that membership.
     * @author: Jack Doyle, jack@greensock.com
     */
    var gr = {
            autoSleep: 120,
            force3D: "auto",
            nullTargetWarn: 1,
            units: {
                lineHeight: ""
            }
        },
        yo = {
            duration: .5,
            overwrite: !1,
            delay: 0
        },
        od, Et, ke, Er = 1e8,
        ge = 1 / Er,
        gf = Math.PI * 2,
        N7 = gf / 4,
        L7 = 0,
        m5 = Math.sqrt,
        O7 = Math.cos,
        z7 = Math.sin,
        ct = function(e) {
            return typeof e == "string"
        },
        Ie = function(e) {
            return typeof e == "function"
        },
        Ln = function(e) {
            return typeof e == "number"
        },
        ad = function(e) {
            return typeof e > "u"
        },
        pn = function(e) {
            return typeof e == "object"
        },
        Jt = function(e) {
            return e !== !1
        },
        ld = function() {
            return typeof window < "u"
        },
        Kl = function(e) {
            return Ie(e) || ct(e)
        },
        g5 = typeof ArrayBuffer == "function" && ArrayBuffer.isView || function() {},
        jt = Array.isArray,
        vf = /(?:-?\.?\d|\.)+/gi,
        v5 = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
        Ys = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
        H2 = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
        y5 = /[+-]=-?[.\d]+/,
        x5 = /[^,'"\[\]\s]+/gi,
        I7 = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
        je, nn, yf, ud, yr = {},
        au = {},
        _5, w5 = function(e) {
            return (au = ds(e, yr)) && nr
        },
        cd = function(e, r) {
            return console.warn("Invalid property", e, "set to", r, "Missing plugin? gsap.registerPlugin()")
        },
        sl = function(e, r) {
            return !r && console.warn(e)
        },
        C5 = function(e, r) {
            return e && (yr[e] = r) && au && (au[e] = r) || yr
        },
        ol = function() {
            return 0
        },
        D7 = {
            suppressEvents: !0,
            isStart: !0,
            kill: !1
        },
        P0 = {
            suppressEvents: !0,
            kill: !1
        },
        F7 = {
            suppressEvents: !0
        },
        fd = {},
        pi = [],
        xf = {},
        A5, cr = {},
        V2 = {},
        ep = 30,
        b0 = [],
        dd = "",
        hd = function(e) {
            var r = e[0],
                n, i;
            if (pn(r) || Ie(r) || (e = [e]), !(n = (r._gsap || {}).harness)) {
                for (i = b0.length; i-- && !b0[i].targetTest(r););
                n = b0[i]
            }
            for (i = e.length; i--;) e[i] && (e[i]._gsap || (e[i]._gsap = new Q5(e[i], n))) || e.splice(i, 1);
            return e
        },
        Ji = function(e) {
            return e._gsap || hd(jr(e))[0]._gsap
        },
        S5 = function(e, r, n) {
            return (n = e[r]) && Ie(n) ? e[r]() : ad(n) && e.getAttribute && e.getAttribute(r) || n
        },
        er = function(e, r) {
            return (e = e.split(",")).forEach(r) || e
        },
        Ve = function(e) {
            return Math.round(e * 1e5) / 1e5 || 0
        },
        lt = function(e) {
            return Math.round(e * 1e7) / 1e7 || 0
        },
        no = function(e, r) {
            var n = r.charAt(0),
                i = parseFloat(r.substr(2));
            return e = parseFloat(e), n === "+" ? e + i : n === "-" ? e - i : n === "*" ? e * i : e / i
        },
        B7 = function(e, r) {
            for (var n = r.length, i = 0; e.indexOf(r[i]) < 0 && ++i < n;);
            return i < n
        },
        lu = function() {
            var e = pi.length,
                r = pi.slice(0),
                n, i;
            for (xf = {}, pi.length = 0, n = 0; n < e; n++) i = r[n], i && i._lazy && (i.render(i._lazy[0], i._lazy[1], !0)._lazy = 0)
        },
        k5 = function(e, r, n, i) {
            pi.length && !Et && lu(), e.render(r, n, Et && r < 0 && (e._initted || e._startAt)), pi.length && !Et && lu()
        },
        P5 = function(e) {
            var r = parseFloat(e);
            return (r || r === 0) && (e + "").match(x5).length < 2 ? r : ct(e) ? e.trim() : e
        },
        b5 = function(e) {
            return e
        },
        zr = function(e, r) {
            for (var n in r) n in e || (e[n] = r[n]);
            return e
        },
        $7 = function(e) {
            return function(r, n) {
                for (var i in n) i in r || i === "duration" && e || i === "ease" || (r[i] = n[i])
            }
        },
        ds = function(e, r) {
            for (var n in r) e[n] = r[n];
            return e
        },
        tp = function t(e, r) {
            for (var n in r) n !== "__proto__" && n !== "constructor" && n !== "prototype" && (e[n] = pn(r[n]) ? t(e[n] || (e[n] = {}), r[n]) : r[n]);
            return e
        },
        uu = function(e, r) {
            var n = {},
                i;
            for (i in e) i in r || (n[i] = e[i]);
            return n
        },
        Pa = function(e) {
            var r = e.parent || je,
                n = e.keyframes ? $7(jt(e.keyframes)) : zr;
            if (Jt(e.inherit))
                for (; r;) n(e, r.vars.defaults), r = r.parent || r._dp;
            return e
        },
        H7 = function(e, r) {
            for (var n = e.length, i = n === r.length; i && n-- && e[n] === r[n];);
            return n < 0
        },
        T5 = function(e, r, n, i, s) {
            var o = e[i],
                a;
            if (s)
                for (a = r[s]; o && o[s] > a;) o = o._prev;
            return o ? (r._next = o._next, o._next = r) : (r._next = e[n], e[n] = r), r._next ? r._next._prev = r : e[i] = r, r._prev = o, r.parent = r._dp = e, r
        },
        Vu = function(e, r, n, i) {
            n === void 0 && (n = "_first"), i === void 0 && (i = "_last");
            var s = r._prev,
                o = r._next;
            s ? s._next = o : e[n] === r && (e[n] = o), o ? o._prev = s : e[i] === r && (e[i] = s), r._next = r._prev = r.parent = null
        },
        wi = function(e, r) {
            e.parent && (!r || e.parent.autoRemoveChildren) && e.parent.remove && e.parent.remove(e), e._act = 0
        },
        es = function(e, r) {
            if (e && (!r || r._end > e._dur || r._start < 0))
                for (var n = e; n;) n._dirty = 1, n = n.parent;
            return e
        },
        V7 = function(e) {
            for (var r = e.parent; r && r.parent;) r._dirty = 1, r.totalDuration(), r = r.parent;
            return e
        },
        _f = function(e, r, n, i) {
            return e._startAt && (Et ? e._startAt.revert(P0) : e.vars.immediateRender && !e.vars.autoRevert || e._startAt.render(r, !0, i))
        },
        U7 = function t(e) {
            return !e || e._ts && t(e.parent)
        },
        rp = function(e) {
            return e._repeat ? xo(e._tTime, e = e.duration() + e._rDelay) * e : 0
        },
        xo = function(e, r) {
            var n = Math.floor(e /= r);
            return e && n === e ? n - 1 : n
        },
        cu = function(e, r) {
            return (e - r._start) * r._ts + (r._ts >= 0 ? 0 : r._dirty ? r.totalDuration() : r._tDur)
        },
        Uu = function(e) {
            return e._end = lt(e._start + (e._tDur / Math.abs(e._ts || e._rts || ge) || 0))
        },
        Gu = function(e, r) {
            var n = e._dp;
            return n && n.smoothChildTiming && e._ts && (e._start = lt(n._time - (e._ts > 0 ? r / e._ts : ((e._dirty ? e.totalDuration() : e._tDur) - r) / -e._ts)), Uu(e), n._dirty || es(n, e)), e
        },
        E5 = function(e, r) {
            var n;
            if ((r._time || !r._dur && r._initted || r._start < e._time && (r._dur || !r.add)) && (n = cu(e.rawTime(), r), (!r._dur || kl(0, r.totalDuration(), n) - r._tTime > ge) && r.render(n, !0)), es(e, r)._dp && e._initted && e._time >= e._dur && e._ts) {
                if (e._dur < e.duration())
                    for (n = e; n._dp;) n.rawTime() >= 0 && n.totalTime(n._tTime), n = n._dp;
                e._zTime = -ge
            }
        },
        an = function(e, r, n, i) {
            return r.parent && wi(r), r._start = lt((Ln(n) ? n : n || e !== je ? Ar(e, n, r) : e._time) + r._delay), r._end = lt(r._start + (r.totalDuration() / Math.abs(r.timeScale()) || 0)), T5(e, r, "_first", "_last", e._sort ? "_start" : 0), wf(r) || (e._recent = r), i || E5(e, r), e._ts < 0 && Gu(e, e._tTime), e
        },
        j5 = function(e, r) {
            return (yr.ScrollTrigger || cd("scrollTrigger", r)) && yr.ScrollTrigger.create(r, e)
        },
        M5 = function(e, r, n, i, s) {
            if (md(e, r, s), !e._initted) return 1;
            if (!n && e._pt && !Et && (e._dur && e.vars.lazy !== !1 || !e._dur && e.vars.lazy) && A5 !== fr.frame) return pi.push(e), e._lazy = [s, i], 1
        },
        G7 = function t(e) {
            var r = e.parent;
            return r && r._ts && r._initted && !r._lock && (r.rawTime() < 0 || t(r))
        },
        wf = function(e) {
            var r = e.data;
            return r === "isFromStart" || r === "isStart"
        },
        W7 = function(e, r, n, i) {
            var s = e.ratio,
                o = r < 0 || !r && (!e._start && G7(e) && !(!e._initted && wf(e)) || (e._ts < 0 || e._dp._ts < 0) && !wf(e)) ? 0 : 1,
                a = e._rDelay,
                l = 0,
                u, c, f;
            if (a && e._repeat && (l = kl(0, e._tDur, r), c = xo(l, a), e._yoyo && c & 1 && (o = 1 - o), c !== xo(e._tTime, a) && (s = 1 - o, e.vars.repeatRefresh && e._initted && e.invalidate())), o !== s || Et || i || e._zTime === ge || !r && e._zTime) {
                if (!e._initted && M5(e, r, i, n, l)) return;
                for (f = e._zTime, e._zTime = r || (n ? ge : 0), n || (n = r && !f), e.ratio = o, e._from && (o = 1 - o), e._time = 0, e._tTime = l, u = e._pt; u;) u.r(o, u.d), u = u._next;
                r < 0 && _f(e, r, n, !0), e._onUpdate && !n && pr(e, "onUpdate"), l && e._repeat && !n && e.parent && pr(e, "onRepeat"), (r >= e._tDur || r < 0) && e.ratio === o && (o && wi(e, 1), !n && !Et && (pr(e, o ? "onComplete" : "onReverseComplete", !0), e._prom && e._prom()))
            } else e._zTime || (e._zTime = r)
        },
        Q7 = function(e, r, n) {
            var i;
            if (n > r)
                for (i = e._first; i && i._start <= n;) {
                    if (i.data === "isPause" && i._start > r) return i;
                    i = i._next
                } else
                    for (i = e._last; i && i._start >= n;) {
                        if (i.data === "isPause" && i._start < r) return i;
                        i = i._prev
                    }
        },
        _o = function(e, r, n, i) {
            var s = e._repeat,
                o = lt(r) || 0,
                a = e._tTime / e._tDur;
            return a && !i && (e._time *= o / e._dur), e._dur = o, e._tDur = s ? s < 0 ? 1e10 : lt(o * (s + 1) + e._rDelay * s) : o, a > 0 && !i && Gu(e, e._tTime = e._tDur * a), e.parent && Uu(e), n || es(e.parent, e), e
        },
        np = function(e) {
            return e instanceof Bt ? es(e) : _o(e, e._dur)
        },
        Y7 = {
            _start: 0,
            endTime: ol,
            totalDuration: ol
        },
        Ar = function t(e, r, n) {
            var i = e.labels,
                s = e._recent || Y7,
                o = e.duration() >= Er ? s.endTime(!1) : e._dur,
                a, l, u;
            return ct(r) && (isNaN(r) || r in i) ? (l = r.charAt(0), u = r.substr(-1) === "%", a = r.indexOf("="), l === "<" || l === ">" ? (a >= 0 && (r = r.replace(/=/, "")), (l === "<" ? s._start : s.endTime(s._repeat >= 0)) + (parseFloat(r.substr(1)) || 0) * (u ? (a < 0 ? s : n).totalDuration() / 100 : 1)) : a < 0 ? (r in i || (i[r] = o), i[r]) : (l = parseFloat(r.charAt(a - 1) + r.substr(a + 1)), u && n && (l = l / 100 * (jt(n) ? n[0] : n).totalDuration()), a > 1 ? t(e, r.substr(0, a - 1), n) + l : o + l)) : r == null ? o : +r
        },
        ba = function(e, r, n) {
            var i = Ln(r[1]),
                s = (i ? 2 : 1) + (e < 2 ? 0 : 1),
                o = r[s],
                a, l;
            if (i && (o.duration = r[1]), o.parent = n, e) {
                for (a = o, l = n; l && !("immediateRender" in a);) a = l.vars.defaults || {}, l = Jt(l.vars.inherit) && l.parent;
                o.immediateRender = Jt(a.immediateRender), e < 2 ? o.runBackwards = 1 : o.startAt = r[s - 1]
            }
            return new qe(r[0], o, r[s + 1])
        },
        Ti = function(e, r) {
            return e || e === 0 ? r(e) : r
        },
        kl = function(e, r, n) {
            return n < e ? e : n > r ? r : n
        },
        Tt = function(e, r) {
            return !ct(e) || !(r = I7.exec(e)) ? "" : r[1]
        },
        q7 = function(e, r, n) {
            return Ti(n, function(i) {
                return kl(e, r, i)
            })
        },
        Cf = [].slice,
        R5 = function(e, r) {
            return e && pn(e) && "length" in e && (!r && !e.length || e.length - 1 in e && pn(e[0])) && !e.nodeType && e !== nn
        },
        K7 = function(e, r, n) {
            return n === void 0 && (n = []), e.forEach(function(i) {
                var s;
                return ct(i) && !r || R5(i, 1) ? (s = n).push.apply(s, jr(i)) : n.push(i)
            }) || n
        },
        jr = function(e, r, n) {
            return ke && !r && ke.selector ? ke.selector(e) : ct(e) && !n && (yf || !wo()) ? Cf.call((r || ud).querySelectorAll(e), 0) : jt(e) ? K7(e, n) : R5(e) ? Cf.call(e, 0) : e ? [e] : []
        },
        Af = function(e) {
            return e = jr(e)[0] || sl("Invalid scope") || {},
                function(r) {
                    var n = e.current || e.nativeElement || e;
                    return jr(r, n.querySelectorAll ? n : n === e ? sl("Invalid scope") || ud.createElement("div") : e)
                }
        },
        N5 = function(e) {
            return e.sort(function() {
                return .5 - Math.random()
            })
        },
        L5 = function(e) {
            if (Ie(e)) return e;
            var r = pn(e) ? e : {
                    each: e
                },
                n = ts(r.ease),
                i = r.from || 0,
                s = parseFloat(r.base) || 0,
                o = {},
                a = i > 0 && i < 1,
                l = isNaN(i) || a,
                u = r.axis,
                c = i,
                f = i;
            return ct(i) ? c = f = {
                    center: .5,
                    edges: .5,
                    end: 1
                }[i] || 0 : !a && l && (c = i[0], f = i[1]),
                function(d, h, y) {
                    var g = (y || r).length,
                        w = o[g],
                        v, p, x, _, C, k, S, P, T;
                    if (!w) {
                        if (T = r.grid === "auto" ? 0 : (r.grid || [1, Er])[1], !T) {
                            for (S = -Er; S < (S = y[T++].getBoundingClientRect().left) && T < g;);
                            T < g && T--
                        }
                        for (w = o[g] = [], v = l ? Math.min(T, g) * c - .5 : i % T, p = T === Er ? 0 : l ? g * f / T - .5 : i / T | 0, S = 0, P = Er, k = 0; k < g; k++) x = k % T - v, _ = p - (k / T | 0), w[k] = C = u ? Math.abs(u === "y" ? _ : x) : m5(x * x + _ * _), C > S && (S = C), C < P && (P = C);
                        i === "random" && N5(w), w.max = S - P, w.min = P, w.v = g = (parseFloat(r.amount) || parseFloat(r.each) * (T > g ? g - 1 : u ? u === "y" ? g / T : T : Math.max(T, g / T)) || 0) * (i === "edges" ? -1 : 1), w.b = g < 0 ? s - g : s, w.u = Tt(r.amount || r.each) || 0, n = n && g < 0 ? U5(n) : n
                    }
                    return g = (w[d] - w.min) / w.max || 0, lt(w.b + (n ? n(g) : g) * w.v) + w.u
                }
        },
        Sf = function(e) {
            var r = Math.pow(10, ((e + "").split(".")[1] || "").length);
            return function(n) {
                var i = lt(Math.round(parseFloat(n) / e) * e * r);
                return (i - i % 1) / r + (Ln(n) ? 0 : Tt(n))
            }
        },
        O5 = function(e, r) {
            var n = jt(e),
                i, s;
            return !n && pn(e) && (i = n = e.radius || Er, e.values ? (e = jr(e.values), (s = !Ln(e[0])) && (i *= i)) : e = Sf(e.increment)), Ti(r, n ? Ie(e) ? function(o) {
                return s = e(o), Math.abs(s - o) <= i ? s : o
            } : function(o) {
                for (var a = parseFloat(s ? o.x : o), l = parseFloat(s ? o.y : 0), u = Er, c = 0, f = e.length, d, h; f--;) s ? (d = e[f].x - a, h = e[f].y - l, d = d * d + h * h) : d = Math.abs(e[f] - a), d < u && (u = d, c = f);
                return c = !i || u <= i ? e[c] : o, s || c === o || Ln(o) ? c : c + Tt(o)
            } : Sf(e))
        },
        z5 = function(e, r, n, i) {
            return Ti(jt(e) ? !r : n === !0 ? !!(n = 0) : !i, function() {
                return jt(e) ? e[~~(Math.random() * e.length)] : (n = n || 1e-5) && (i = n < 1 ? Math.pow(10, (n + "").length - 2) : 1) && Math.floor(Math.round((e - n / 2 + Math.random() * (r - e + n * .99)) / n) * n * i) / i
            })
        },
        Z7 = function() {
            for (var e = arguments.length, r = new Array(e), n = 0; n < e; n++) r[n] = arguments[n];
            return function(i) {
                return r.reduce(function(s, o) {
                    return o(s)
                }, i)
            }
        },
        X7 = function(e, r) {
            return function(n) {
                return e(parseFloat(n)) + (r || Tt(n))
            }
        },
        J7 = function(e, r, n) {
            return D5(e, r, 0, 1, n)
        },
        I5 = function(e, r, n) {
            return Ti(n, function(i) {
                return e[~~r(i)]
            })
        },
        e9 = function t(e, r, n) {
            var i = r - e;
            return jt(e) ? I5(e, t(0, e.length), r) : Ti(n, function(s) {
                return (i + (s - e) % i) % i + e
            })
        },
        t9 = function t(e, r, n) {
            var i = r - e,
                s = i * 2;
            return jt(e) ? I5(e, t(0, e.length - 1), r) : Ti(n, function(o) {
                return o = (s + (o - e) % s) % s || 0, e + (o > i ? s - o : o)
            })
        },
        al = function(e) {
            for (var r = 0, n = "", i, s, o, a; ~(i = e.indexOf("random(", r));) o = e.indexOf(")", i), a = e.charAt(i + 7) === "[", s = e.substr(i + 7, o - i - 7).match(a ? x5 : vf), n += e.substr(r, i - r) + z5(a ? s : +s[0], a ? 0 : +s[1], +s[2] || 1e-5), r = o + 1;
            return n + e.substr(r, e.length - r)
        },
        D5 = function(e, r, n, i, s) {
            var o = r - e,
                a = i - n;
            return Ti(s, function(l) {
                return n + ((l - e) / o * a || 0)
            })
        },
        r9 = function t(e, r, n, i) {
            var s = isNaN(e + r) ? 0 : function(h) {
                return (1 - h) * e + h * r
            };
            if (!s) {
                var o = ct(e),
                    a = {},
                    l, u, c, f, d;
                if (n === !0 && (i = 1) && (n = null), o) e = {
                    p: e
                }, r = {
                    p: r
                };
                else if (jt(e) && !jt(r)) {
                    for (c = [], f = e.length, d = f - 2, u = 1; u < f; u++) c.push(t(e[u - 1], e[u]));
                    f--, s = function(y) {
                        y *= f;
                        var g = Math.min(d, ~~y);
                        return c[g](y - g)
                    }, n = r
                } else i || (e = ds(jt(e) ? [] : {}, e));
                if (!c) {
                    for (l in r) pd.call(a, e, l, "get", r[l]);
                    s = function(y) {
                        return yd(y, a) || (o ? e.p : e)
                    }
                }
            }
            return Ti(n, s)
        },
        ip = function(e, r, n) {
            var i = e.labels,
                s = Er,
                o, a, l;
            for (o in i) a = i[o] - r, a < 0 == !!n && a && s > (a = Math.abs(a)) && (l = o, s = a);
            return l
        },
        pr = function(e, r, n) {
            var i = e.vars,
                s = i[r],
                o = ke,
                a = e._ctx,
                l, u, c;
            if (s) return l = i[r + "Params"], u = i.callbackScope || e, n && pi.length && lu(), a && (ke = a), c = l ? s.apply(u, l) : s.call(u), ke = o, c
        },
        la = function(e) {
            return wi(e), e.scrollTrigger && e.scrollTrigger.kill(!!Et), e.progress() < 1 && pr(e, "onInterrupt"), e
        },
        qs, F5 = [],
        B5 = function(e) {
            if (e)
                if (e = !e.name && e.default || e, ld() || e.headless) {
                    var r = e.name,
                        n = Ie(e),
                        i = r && !n && e.init ? function() {
                            this._props = []
                        } : e,
                        s = {
                            init: ol,
                            render: yd,
                            add: pd,
                            kill: y9,
                            modifier: v9,
                            rawVars: 0
                        },
                        o = {
                            targetTest: 0,
                            get: 0,
                            getSetter: vd,
                            aliases: {},
                            register: 0
                        };
                    if (wo(), e !== i) {
                        if (cr[r]) return;
                        zr(i, zr(uu(e, s), o)), ds(i.prototype, ds(s, uu(e, o))), cr[i.prop = r] = i, e.targetTest && (b0.push(i), fd[r] = 1), r = (r === "css" ? "CSS" : r.charAt(0).toUpperCase() + r.substr(1)) + "Plugin"
                    }
                    C5(r, i), e.register && e.register(nr, i, tr)
                } else F5.push(e)
        },
        me = 255,
        ua = {
            aqua: [0, me, me],
            lime: [0, me, 0],
            silver: [192, 192, 192],
            black: [0, 0, 0],
            maroon: [128, 0, 0],
            teal: [0, 128, 128],
            blue: [0, 0, me],
            navy: [0, 0, 128],
            white: [me, me, me],
            olive: [128, 128, 0],
            yellow: [me, me, 0],
            orange: [me, 165, 0],
            gray: [128, 128, 128],
            purple: [128, 0, 128],
            green: [0, 128, 0],
            red: [me, 0, 0],
            pink: [me, 192, 203],
            cyan: [0, me, me],
            transparent: [me, me, me, 0]
        },
        U2 = function(e, r, n) {
            return e += e < 0 ? 1 : e > 1 ? -1 : 0, (e * 6 < 1 ? r + (n - r) * e * 6 : e < .5 ? n : e * 3 < 2 ? r + (n - r) * (2 / 3 - e) * 6 : r) * me + .5 | 0
        },
        $5 = function(e, r, n) {
            var i = e ? Ln(e) ? [e >> 16, e >> 8 & me, e & me] : 0 : ua.black,
                s, o, a, l, u, c, f, d, h, y;
            if (!i) {
                if (e.substr(-1) === "," && (e = e.substr(0, e.length - 1)), ua[e]) i = ua[e];
                else if (e.charAt(0) === "#") {
                    if (e.length < 6 && (s = e.charAt(1), o = e.charAt(2), a = e.charAt(3), e = "#" + s + s + o + o + a + a + (e.length === 5 ? e.charAt(4) + e.charAt(4) : "")), e.length === 9) return i = parseInt(e.substr(1, 6), 16), [i >> 16, i >> 8 & me, i & me, parseInt(e.substr(7), 16) / 255];
                    e = parseInt(e.substr(1), 16), i = [e >> 16, e >> 8 & me, e & me]
                } else if (e.substr(0, 3) === "hsl") {
                    if (i = y = e.match(vf), !r) l = +i[0] % 360 / 360, u = +i[1] / 100, c = +i[2] / 100, o = c <= .5 ? c * (u + 1) : c + u - c * u, s = c * 2 - o, i.length > 3 && (i[3] *= 1), i[0] = U2(l + 1 / 3, s, o), i[1] = U2(l, s, o), i[2] = U2(l - 1 / 3, s, o);
                    else if (~e.indexOf("=")) return i = e.match(v5), n && i.length < 4 && (i[3] = 1), i
                } else i = e.match(vf) || ua.transparent;
                i = i.map(Number)
            }
            return r && !y && (s = i[0] / me, o = i[1] / me, a = i[2] / me, f = Math.max(s, o, a), d = Math.min(s, o, a), c = (f + d) / 2, f === d ? l = u = 0 : (h = f - d, u = c > .5 ? h / (2 - f - d) : h / (f + d), l = f === s ? (o - a) / h + (o < a ? 6 : 0) : f === o ? (a - s) / h + 2 : (s - o) / h + 4, l *= 60), i[0] = ~~(l + .5), i[1] = ~~(u * 100 + .5), i[2] = ~~(c * 100 + .5)), n && i.length < 4 && (i[3] = 1), i
        },
        H5 = function(e) {
            var r = [],
                n = [],
                i = -1;
            return e.split(mi).forEach(function(s) {
                var o = s.match(Ys) || [];
                r.push.apply(r, o), n.push(i += o.length + 1)
            }), r.c = n, r
        },
        sp = function(e, r, n) {
            var i = "",
                s = (e + i).match(mi),
                o = r ? "hsla(" : "rgba(",
                a = 0,
                l, u, c, f;
            if (!s) return e;
            if (s = s.map(function(d) {
                    return (d = $5(d, r, 1)) && o + (r ? d[0] + "," + d[1] + "%," + d[2] + "%," + d[3] : d.join(",")) + ")"
                }), n && (c = H5(e), l = n.c, l.join(i) !== c.c.join(i)))
                for (u = e.replace(mi, "1").split(Ys), f = u.length - 1; a < f; a++) i += u[a] + (~l.indexOf(a) ? s.shift() || o + "0,0,0,0)" : (c.length ? c : s.length ? s : n).shift());
            if (!u)
                for (u = e.split(mi), f = u.length - 1; a < f; a++) i += u[a] + s[a];
            return i + u[f]
        },
        mi = function() {
            var t = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",
                e;
            for (e in ua) t += "|" + e + "\\b";
            return new RegExp(t + ")", "gi")
        }(),
        n9 = /hsl[a]?\(/,
        V5 = function(e) {
            var r = e.join(" "),
                n;
            if (mi.lastIndex = 0, mi.test(r)) return n = n9.test(r), e[1] = sp(e[1], n), e[0] = sp(e[0], n, H5(e[1])), !0
        },
        ll, fr = function() {
            var t = Date.now,
                e = 500,
                r = 33,
                n = t(),
                i = n,
                s = 1e3 / 240,
                o = s,
                a = [],
                l, u, c, f, d, h, y = function g(w) {
                    var v = t() - i,
                        p = w === !0,
                        x, _, C, k;
                    if ((v > e || v < 0) && (n += v - r), i += v, C = i - n, x = C - o, (x > 0 || p) && (k = ++f.frame, d = C - f.time * 1e3, f.time = C = C / 1e3, o += x + (x >= s ? 4 : s - x), _ = 1), p || (l = u(g)), _)
                        for (h = 0; h < a.length; h++) a[h](C, d, k, w)
                };
            return f = {
                time: 0,
                frame: 0,
                tick: function() {
                    y(!0)
                },
                deltaRatio: function(w) {
                    return d / (1e3 / (w || 60))
                },
                wake: function() {
                    _5 && (!yf && ld() && (nn = yf = window, ud = nn.document || {}, yr.gsap = nr, (nn.gsapVersions || (nn.gsapVersions = [])).push(nr.version), w5(au || nn.GreenSockGlobals || !nn.gsap && nn || {}), F5.forEach(B5)), c = typeof requestAnimationFrame < "u" && requestAnimationFrame, l && f.sleep(), u = c || function(w) {
                        return setTimeout(w, o - f.time * 1e3 + 1 | 0)
                    }, ll = 1, y(2))
                },
                sleep: function() {
                    (c ? cancelAnimationFrame : clearTimeout)(l), ll = 0, u = ol
                },
                lagSmoothing: function(w, v) {
                    e = w || 1 / 0, r = Math.min(v || 33, e)
                },
                fps: function(w) {
                    s = 1e3 / (w || 240), o = f.time * 1e3 + s
                },
                add: function(w, v, p) {
                    var x = v ? function(_, C, k, S) {
                        w(_, C, k, S), f.remove(x)
                    } : w;
                    return f.remove(w), a[p ? "unshift" : "push"](x), wo(), x
                },
                remove: function(w, v) {
                    ~(v = a.indexOf(w)) && a.splice(v, 1) && h >= v && h--
                },
                _listeners: a
            }, f
        }(),
        wo = function() {
            return !ll && fr.wake()
        },
        se = {},
        i9 = /^[\d.\-M][\d.\-,\s]/,
        s9 = /["']/g,
        o9 = function(e) {
            for (var r = {}, n = e.substr(1, e.length - 3).split(":"), i = n[0], s = 1, o = n.length, a, l, u; s < o; s++) l = n[s], a = s !== o - 1 ? l.lastIndexOf(",") : l.length, u = l.substr(0, a), r[i] = isNaN(u) ? u.replace(s9, "").trim() : +u, i = l.substr(a + 1).trim();
            return r
        },
        a9 = function(e) {
            var r = e.indexOf("(") + 1,
                n = e.indexOf(")"),
                i = e.indexOf("(", r);
            return e.substring(r, ~i && i < n ? e.indexOf(")", n + 1) : n)
        },
        l9 = function(e) {
            var r = (e + "").split("("),
                n = se[r[0]];
            return n && r.length > 1 && n.config ? n.config.apply(null, ~e.indexOf("{") ? [o9(r[1])] : a9(e).split(",").map(P5)) : se._CE && i9.test(e) ? se._CE("", e) : n
        },
        U5 = function(e) {
            return function(r) {
                return 1 - e(1 - r)
            }
        },
        G5 = function t(e, r) {
            for (var n = e._first, i; n;) n instanceof Bt ? t(n, r) : n.vars.yoyoEase && (!n._yoyo || !n._repeat) && n._yoyo !== r && (n.timeline ? t(n.timeline, r) : (i = n._ease, n._ease = n._yEase, n._yEase = i, n._yoyo = r)), n = n._next
        },
        ts = function(e, r) {
            return e && (Ie(e) ? e : se[e] || l9(e)) || r
        },
        _s = function(e, r, n, i) {
            n === void 0 && (n = function(l) {
                return 1 - r(1 - l)
            }), i === void 0 && (i = function(l) {
                return l < .5 ? r(l * 2) / 2 : 1 - r((1 - l) * 2) / 2
            });
            var s = {
                    easeIn: r,
                    easeOut: n,
                    easeInOut: i
                },
                o;
            return er(e, function(a) {
                se[a] = yr[a] = s, se[o = a.toLowerCase()] = n;
                for (var l in s) se[o + (l === "easeIn" ? ".in" : l === "easeOut" ? ".out" : ".inOut")] = se[a + "." + l] = s[l]
            }), s
        },
        W5 = function(e) {
            return function(r) {
                return r < .5 ? (1 - e(1 - r * 2)) / 2 : .5 + e((r - .5) * 2) / 2
            }
        },
        G2 = function t(e, r, n) {
            var i = r >= 1 ? r : 1,
                s = (n || (e ? .3 : .45)) / (r < 1 ? r : 1),
                o = s / gf * (Math.asin(1 / i) || 0),
                a = function(c) {
                    return c === 1 ? 1 : i * Math.pow(2, -10 * c) * z7((c - o) * s) + 1
                },
                l = e === "out" ? a : e === "in" ? function(u) {
                    return 1 - a(1 - u)
                } : W5(a);
            return s = gf / s, l.config = function(u, c) {
                return t(e, u, c)
            }, l
        },
        W2 = function t(e, r) {
            r === void 0 && (r = 1.70158);
            var n = function(o) {
                    return o ? --o * o * ((r + 1) * o + r) + 1 : 0
                },
                i = e === "out" ? n : e === "in" ? function(s) {
                    return 1 - n(1 - s)
                } : W5(n);
            return i.config = function(s) {
                return t(e, s)
            }, i
        };
    er("Linear,Quad,Cubic,Quart,Quint,Strong", function(t, e) {
        var r = e < 5 ? e + 1 : e;
        _s(t + ",Power" + (r - 1), e ? function(n) {
            return Math.pow(n, r)
        } : function(n) {
            return n
        }, function(n) {
            return 1 - Math.pow(1 - n, r)
        }, function(n) {
            return n < .5 ? Math.pow(n * 2, r) / 2 : 1 - Math.pow((1 - n) * 2, r) / 2
        })
    });
    se.Linear.easeNone = se.none = se.Linear.easeIn;
    _s("Elastic", G2("in"), G2("out"), G2());
    (function(t, e) {
        var r = 1 / e,
            n = 2 * r,
            i = 2.5 * r,
            s = function(a) {
                return a < r ? t * a * a : a < n ? t * Math.pow(a - 1.5 / e, 2) + .75 : a < i ? t * (a -= 2.25 / e) * a + .9375 : t * Math.pow(a - 2.625 / e, 2) + .984375
            };
        _s("Bounce", function(o) {
            return 1 - s(1 - o)
        }, s)
    })(7.5625, 2.75);
    _s("Expo", function(t) {
        return t ? Math.pow(2, 10 * (t - 1)) : 0
    });
    _s("Circ", function(t) {
        return -(m5(1 - t * t) - 1)
    });
    _s("Sine", function(t) {
        return t === 1 ? 1 : -O7(t * N7) + 1
    });
    _s("Back", W2("in"), W2("out"), W2());
    se.SteppedEase = se.steps = yr.SteppedEase = {
        config: function(e, r) {
            e === void 0 && (e = 1);
            var n = 1 / e,
                i = e + (r ? 0 : 1),
                s = r ? 1 : 0,
                o = 1 - ge;
            return function(a) {
                return ((i * kl(0, o, a) | 0) + s) * n
            }
        }
    };
    yo.ease = se["quad.out"];
    er("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function(t) {
        return dd += t + "," + t + "Params,"
    });
    var Q5 = function(e, r) {
            this.id = L7++, e._gsap = this, this.target = e, this.harness = r, this.get = r ? r.get : S5, this.set = r ? r.getSetter : vd
        },
        ul = function() {
            function t(r) {
                this.vars = r, this._delay = +r.delay || 0, (this._repeat = r.repeat === 1 / 0 ? -2 : r.repeat || 0) && (this._rDelay = r.repeatDelay || 0, this._yoyo = !!r.yoyo || !!r.yoyoEase), this._ts = 1, _o(this, +r.duration, 1, 1), this.data = r.data, ke && (this._ctx = ke, ke.data.push(this)), ll || fr.wake()
            }
            var e = t.prototype;
            return e.delay = function(n) {
                return n || n === 0 ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + n - this._delay), this._delay = n, this) : this._delay
            }, e.duration = function(n) {
                return arguments.length ? this.totalDuration(this._repeat > 0 ? n + (n + this._rDelay) * this._repeat : n) : this.totalDuration() && this._dur
            }, e.totalDuration = function(n) {
                return arguments.length ? (this._dirty = 0, _o(this, this._repeat < 0 ? n : (n - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur
            }, e.totalTime = function(n, i) {
                if (wo(), !arguments.length) return this._tTime;
                var s = this._dp;
                if (s && s.smoothChildTiming && this._ts) {
                    for (Gu(this, n), !s._dp || s.parent || E5(s, this); s && s.parent;) s.parent._time !== s._start + (s._ts >= 0 ? s._tTime / s._ts : (s.totalDuration() - s._tTime) / -s._ts) && s.totalTime(s._tTime, !0), s = s.parent;
                    !this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && n < this._tDur || this._ts < 0 && n > 0 || !this._tDur && !n) && an(this._dp, this, this._start - this._delay)
                }
                return (this._tTime !== n || !this._dur && !i || this._initted && Math.abs(this._zTime) === ge || !n && !this._initted && (this.add || this._ptLookup)) && (this._ts || (this._pTime = n), k5(this, n, i)), this
            }, e.time = function(n, i) {
                return arguments.length ? this.totalTime(Math.min(this.totalDuration(), n + rp(this)) % (this._dur + this._rDelay) || (n ? this._dur : 0), i) : this._time
            }, e.totalProgress = function(n, i) {
                return arguments.length ? this.totalTime(this.totalDuration() * n, i) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.rawTime() > 0 ? 1 : 0
            }, e.progress = function(n, i) {
                return arguments.length ? this.totalTime(this.duration() * (this._yoyo && !(this.iteration() & 1) ? 1 - n : n) + rp(this), i) : this.duration() ? Math.min(1, this._time / this._dur) : this.rawTime() > 0 ? 1 : 0
            }, e.iteration = function(n, i) {
                var s = this.duration() + this._rDelay;
                return arguments.length ? this.totalTime(this._time + (n - 1) * s, i) : this._repeat ? xo(this._tTime, s) + 1 : 1
            }, e.timeScale = function(n, i) {
                if (!arguments.length) return this._rts === -ge ? 0 : this._rts;
                if (this._rts === n) return this;
                var s = this.parent && this._ts ? cu(this.parent._time, this) : this._tTime;
                return this._rts = +n || 0, this._ts = this._ps || n === -ge ? 0 : this._rts, this.totalTime(kl(-Math.abs(this._delay), this._tDur, s), i !== !1), Uu(this), V7(this)
            }, e.paused = function(n) {
                return arguments.length ? (this._ps !== n && (this._ps = n, n ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()), this._ts = this._act = 0) : (wo(), this._ts = this._rts, this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, this.progress() === 1 && Math.abs(this._zTime) !== ge && (this._tTime -= ge)))), this) : this._ps
            }, e.startTime = function(n) {
                if (arguments.length) {
                    this._start = n;
                    var i = this.parent || this._dp;
                    return i && (i._sort || !this.parent) && an(i, this, n - this._delay), this
                }
                return this._start
            }, e.endTime = function(n) {
                return this._start + (Jt(n) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1)
            }, e.rawTime = function(n) {
                var i = this.parent || this._dp;
                return i ? n && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? cu(i.rawTime(n), this) : this._tTime : this._tTime
            }, e.revert = function(n) {
                n === void 0 && (n = F7);
                var i = Et;
                return Et = n, (this._initted || this._startAt) && (this.timeline && this.timeline.revert(n), this.totalTime(-.01, n.suppressEvents)), this.data !== "nested" && n.kill !== !1 && this.kill(), Et = i, this
            }, e.globalTime = function(n) {
                for (var i = this, s = arguments.length ? n : i.rawTime(); i;) s = i._start + s / (Math.abs(i._ts) || 1), i = i._dp;
                return !this.parent && this._sat ? this._sat.globalTime(n) : s
            }, e.repeat = function(n) {
                return arguments.length ? (this._repeat = n === 1 / 0 ? -2 : n, np(this)) : this._repeat === -2 ? 1 / 0 : this._repeat
            }, e.repeatDelay = function(n) {
                if (arguments.length) {
                    var i = this._time;
                    return this._rDelay = n, np(this), i ? this.time(i) : this
                }
                return this._rDelay
            }, e.yoyo = function(n) {
                return arguments.length ? (this._yoyo = n, this) : this._yoyo
            }, e.seek = function(n, i) {
                return this.totalTime(Ar(this, n), Jt(i))
            }, e.restart = function(n, i) {
                return this.play().totalTime(n ? -this._delay : 0, Jt(i))
            }, e.play = function(n, i) {
                return n != null && this.seek(n, i), this.reversed(!1).paused(!1)
            }, e.reverse = function(n, i) {
                return n != null && this.seek(n || this.totalDuration(), i), this.reversed(!0).paused(!1)
            }, e.pause = function(n, i) {
                return n != null && this.seek(n, i), this.paused(!0)
            }, e.resume = function() {
                return this.paused(!1)
            }, e.reversed = function(n) {
                return arguments.length ? (!!n !== this.reversed() && this.timeScale(-this._rts || (n ? -ge : 0)), this) : this._rts < 0
            }, e.invalidate = function() {
                return this._initted = this._act = 0, this._zTime = -ge, this
            }, e.isActive = function() {
                var n = this.parent || this._dp,
                    i = this._start,
                    s;
                return !!(!n || this._ts && this._initted && n.isActive() && (s = n.rawTime(!0)) >= i && s < this.endTime(!0) - ge)
            }, e.eventCallback = function(n, i, s) {
                var o = this.vars;
                return arguments.length > 1 ? (i ? (o[n] = i, s && (o[n + "Params"] = s), n === "onUpdate" && (this._onUpdate = i)) : delete o[n], this) : o[n]
            }, e.then = function(n) {
                var i = this;
                return new Promise(function(s) {
                    var o = Ie(n) ? n : b5,
                        a = function() {
                            var u = i.then;
                            i.then = null, Ie(o) && (o = o(i)) && (o.then || o === i) && (i.then = u), s(o), i.then = u
                        };
                    i._initted && i.totalProgress() === 1 && i._ts >= 0 || !i._tTime && i._ts < 0 ? a() : i._prom = a
                })
            }, e.kill = function() {
                la(this)
            }, t
        }();
    zr(ul.prototype, {
        _time: 0,
        _start: 0,
        _end: 0,
        _tTime: 0,
        _tDur: 0,
        _dirty: 0,
        _repeat: 0,
        _yoyo: !1,
        parent: null,
        _initted: !1,
        _rDelay: 0,
        _ts: 1,
        _dp: 0,
        ratio: 0,
        _zTime: -ge,
        _prom: 0,
        _ps: !1,
        _rts: 1
    });
    var Bt = function(t) {
        p5(e, t);

        function e(n, i) {
            var s;
            return n === void 0 && (n = {}), s = t.call(this, n) || this, s.labels = {}, s.smoothChildTiming = !!n.smoothChildTiming, s.autoRemoveChildren = !!n.autoRemoveChildren, s._sort = Jt(n.sortChildren), je && an(n.parent || je, wn(s), i), n.reversed && s.reverse(), n.paused && s.paused(!0), n.scrollTrigger && j5(wn(s), n.scrollTrigger), s
        }
        var r = e.prototype;
        return r.to = function(i, s, o) {
            return ba(0, arguments, this), this
        }, r.from = function(i, s, o) {
            return ba(1, arguments, this), this
        }, r.fromTo = function(i, s, o, a) {
            return ba(2, arguments, this), this
        }, r.set = function(i, s, o) {
            return s.duration = 0, s.parent = this, Pa(s).repeatDelay || (s.repeat = 0), s.immediateRender = !!s.immediateRender, new qe(i, s, Ar(this, o), 1), this
        }, r.call = function(i, s, o) {
            return an(this, qe.delayedCall(0, i, s), o)
        }, r.staggerTo = function(i, s, o, a, l, u, c) {
            return o.duration = s, o.stagger = o.stagger || a, o.onComplete = u, o.onCompleteParams = c, o.parent = this, new qe(i, o, Ar(this, l)), this
        }, r.staggerFrom = function(i, s, o, a, l, u, c) {
            return o.runBackwards = 1, Pa(o).immediateRender = Jt(o.immediateRender), this.staggerTo(i, s, o, a, l, u, c)
        }, r.staggerFromTo = function(i, s, o, a, l, u, c, f) {
            return a.startAt = o, Pa(a).immediateRender = Jt(a.immediateRender), this.staggerTo(i, s, a, l, u, c, f)
        }, r.render = function(i, s, o) {
            var a = this._time,
                l = this._dirty ? this.totalDuration() : this._tDur,
                u = this._dur,
                c = i <= 0 ? 0 : lt(i),
                f = this._zTime < 0 != i < 0 && (this._initted || !u),
                d, h, y, g, w, v, p, x, _, C, k, S;
            if (this !== je && c > l && i >= 0 && (c = l), c !== this._tTime || o || f) {
                if (a !== this._time && u && (c += this._time - a, i += this._time - a), d = c, _ = this._start, x = this._ts, v = !x, f && (u || (a = this._zTime), (i || !s) && (this._zTime = i)), this._repeat) {
                    if (k = this._yoyo, w = u + this._rDelay, this._repeat < -1 && i < 0) return this.totalTime(w * 100 + i, s, o);
                    if (d = lt(c % w), c === l ? (g = this._repeat, d = u) : (g = ~~(c / w), g && g === c / w && (d = u, g--), d > u && (d = u)), C = xo(this._tTime, w), !a && this._tTime && C !== g && this._tTime - C * w - this._dur <= 0 && (C = g), k && g & 1 && (d = u - d, S = 1), g !== C && !this._lock) {
                        var P = k && C & 1,
                            T = P === (k && g & 1);
                        if (g < C && (P = !P), a = P ? 0 : c % u ? u : c, this._lock = 1, this.render(a || (S ? 0 : lt(g * w)), s, !u)._lock = 0, this._tTime = c, !s && this.parent && pr(this, "onRepeat"), this.vars.repeatRefresh && !S && (this.invalidate()._lock = 1), a && a !== this._time || v !== !this._ts || this.vars.onRepeat && !this.parent && !this._act) return this;
                        if (u = this._dur, l = this._tDur, T && (this._lock = 2, a = P ? u : -1e-4, this.render(a, !0), this.vars.repeatRefresh && !S && this.invalidate()), this._lock = 0, !this._ts && !v) return this;
                        G5(this, S)
                    }
                }
                if (this._hasPause && !this._forcing && this._lock < 2 && (p = Q7(this, lt(a), lt(d)), p && (c -= d - (d = p._start))), this._tTime = c, this._time = d, this._act = !x, this._initted || (this._onUpdate = this.vars.onUpdate, this._initted = 1, this._zTime = i, a = 0), !a && d && !s && !g && (pr(this, "onStart"), this._tTime !== c)) return this;
                if (d >= a && i >= 0)
                    for (h = this._first; h;) {
                        if (y = h._next, (h._act || d >= h._start) && h._ts && p !== h) {
                            if (h.parent !== this) return this.render(i, s, o);
                            if (h.render(h._ts > 0 ? (d - h._start) * h._ts : (h._dirty ? h.totalDuration() : h._tDur) + (d - h._start) * h._ts, s, o), d !== this._time || !this._ts && !v) {
                                p = 0, y && (c += this._zTime = -ge);
                                break
                            }
                        }
                        h = y
                    } else {
                        h = this._last;
                        for (var b = i < 0 ? i : d; h;) {
                            if (y = h._prev, (h._act || b <= h._end) && h._ts && p !== h) {
                                if (h.parent !== this) return this.render(i, s, o);
                                if (h.render(h._ts > 0 ? (b - h._start) * h._ts : (h._dirty ? h.totalDuration() : h._tDur) + (b - h._start) * h._ts, s, o || Et && (h._initted || h._startAt)), d !== this._time || !this._ts && !v) {
                                    p = 0, y && (c += this._zTime = b ? -ge : ge);
                                    break
                                }
                            }
                            h = y
                        }
                    }
                if (p && !s && (this.pause(), p.render(d >= a ? 0 : -ge)._zTime = d >= a ? 1 : -1, this._ts)) return this._start = _, Uu(this), this.render(i, s, o);
                this._onUpdate && !s && pr(this, "onUpdate", !0), (c === l && this._tTime >= this.totalDuration() || !c && a) && (_ === this._start || Math.abs(x) !== Math.abs(this._ts)) && (this._lock || ((i || !u) && (c === l && this._ts > 0 || !c && this._ts < 0) && wi(this, 1), !s && !(i < 0 && !a) && (c || a || !l) && (pr(this, c === l && i >= 0 ? "onComplete" : "onReverseComplete", !0), this._prom && !(c < l && this.timeScale() > 0) && this._prom())))
            }
            return this
        }, r.add = function(i, s) {
            var o = this;
            if (Ln(s) || (s = Ar(this, s, i)), !(i instanceof ul)) {
                if (jt(i)) return i.forEach(function(a) {
                    return o.add(a, s)
                }), this;
                if (ct(i)) return this.addLabel(i, s);
                if (Ie(i)) i = qe.delayedCall(0, i);
                else return this
            }
            return this !== i ? an(this, i, s) : this
        }, r.getChildren = function(i, s, o, a) {
            i === void 0 && (i = !0), s === void 0 && (s = !0), o === void 0 && (o = !0), a === void 0 && (a = -Er);
            for (var l = [], u = this._first; u;) u._start >= a && (u instanceof qe ? s && l.push(u) : (o && l.push(u), i && l.push.apply(l, u.getChildren(!0, s, o)))), u = u._next;
            return l
        }, r.getById = function(i) {
            for (var s = this.getChildren(1, 1, 1), o = s.length; o--;)
                if (s[o].vars.id === i) return s[o]
        }, r.remove = function(i) {
            return ct(i) ? this.removeLabel(i) : Ie(i) ? this.killTweensOf(i) : (Vu(this, i), i === this._recent && (this._recent = this._last), es(this))
        }, r.totalTime = function(i, s) {
            return arguments.length ? (this._forcing = 1, !this._dp && this._ts && (this._start = lt(fr.time - (this._ts > 0 ? i / this._ts : (this.totalDuration() - i) / -this._ts))), t.prototype.totalTime.call(this, i, s), this._forcing = 0, this) : this._tTime
        }, r.addLabel = function(i, s) {
            return this.labels[i] = Ar(this, s), this
        }, r.removeLabel = function(i) {
            return delete this.labels[i], this
        }, r.addPause = function(i, s, o) {
            var a = qe.delayedCall(0, s || ol, o);
            return a.data = "isPause", this._hasPause = 1, an(this, a, Ar(this, i))
        }, r.removePause = function(i) {
            var s = this._first;
            for (i = Ar(this, i); s;) s._start === i && s.data === "isPause" && wi(s), s = s._next
        }, r.killTweensOf = function(i, s, o) {
            for (var a = this.getTweensOf(i, o), l = a.length; l--;) ei !== a[l] && a[l].kill(i, s);
            return this
        }, r.getTweensOf = function(i, s) {
            for (var o = [], a = jr(i), l = this._first, u = Ln(s), c; l;) l instanceof qe ? B7(l._targets, a) && (u ? (!ei || l._initted && l._ts) && l.globalTime(0) <= s && l.globalTime(l.totalDuration()) > s : !s || l.isActive()) && o.push(l) : (c = l.getTweensOf(a, s)).length && o.push.apply(o, c), l = l._next;
            return o
        }, r.tweenTo = function(i, s) {
            s = s || {};
            var o = this,
                a = Ar(o, i),
                l = s,
                u = l.startAt,
                c = l.onStart,
                f = l.onStartParams,
                d = l.immediateRender,
                h, y = qe.to(o, zr({
                    ease: s.ease || "none",
                    lazy: !1,
                    immediateRender: !1,
                    time: a,
                    overwrite: "auto",
                    duration: s.duration || Math.abs((a - (u && "time" in u ? u.time : o._time)) / o.timeScale()) || ge,
                    onStart: function() {
                        if (o.pause(), !h) {
                            var w = s.duration || Math.abs((a - (u && "time" in u ? u.time : o._time)) / o.timeScale());
                            y._dur !== w && _o(y, w, 0, 1).render(y._time, !0, !0), h = 1
                        }
                        c && c.apply(y, f || [])
                    }
                }, s));
            return d ? y.render(0) : y
        }, r.tweenFromTo = function(i, s, o) {
            return this.tweenTo(s, zr({
                startAt: {
                    time: Ar(this, i)
                }
            }, o))
        }, r.recent = function() {
            return this._recent
        }, r.nextLabel = function(i) {
            return i === void 0 && (i = this._time), ip(this, Ar(this, i))
        }, r.previousLabel = function(i) {
            return i === void 0 && (i = this._time), ip(this, Ar(this, i), 1)
        }, r.currentLabel = function(i) {
            return arguments.length ? this.seek(i, !0) : this.previousLabel(this._time + ge)
        }, r.shiftChildren = function(i, s, o) {
            o === void 0 && (o = 0);
            for (var a = this._first, l = this.labels, u; a;) a._start >= o && (a._start += i, a._end += i), a = a._next;
            if (s)
                for (u in l) l[u] >= o && (l[u] += i);
            return es(this)
        }, r.invalidate = function(i) {
            var s = this._first;
            for (this._lock = 0; s;) s.invalidate(i), s = s._next;
            return t.prototype.invalidate.call(this, i)
        }, r.clear = function(i) {
            i === void 0 && (i = !0);
            for (var s = this._first, o; s;) o = s._next, this.remove(s), s = o;
            return this._dp && (this._time = this._tTime = this._pTime = 0), i && (this.labels = {}), es(this)
        }, r.totalDuration = function(i) {
            var s = 0,
                o = this,
                a = o._last,
                l = Er,
                u, c, f;
            if (arguments.length) return o.timeScale((o._repeat < 0 ? o.duration() : o.totalDuration()) / (o.reversed() ? -i : i));
            if (o._dirty) {
                for (f = o.parent; a;) u = a._prev, a._dirty && a.totalDuration(), c = a._start, c > l && o._sort && a._ts && !o._lock ? (o._lock = 1, an(o, a, c - a._delay, 1)._lock = 0) : l = c, c < 0 && a._ts && (s -= c, (!f && !o._dp || f && f.smoothChildTiming) && (o._start += c / o._ts, o._time -= c, o._tTime -= c), o.shiftChildren(-c, !1, -1 / 0), l = 0), a._end > s && a._ts && (s = a._end), a = u;
                _o(o, o === je && o._time > s ? o._time : s, 1, 1), o._dirty = 0
            }
            return o._tDur
        }, e.updateRoot = function(i) {
            if (je._ts && (k5(je, cu(i, je)), A5 = fr.frame), fr.frame >= ep) {
                ep += gr.autoSleep || 120;
                var s = je._first;
                if ((!s || !s._ts) && gr.autoSleep && fr._listeners.length < 2) {
                    for (; s && !s._ts;) s = s._next;
                    s || fr.sleep()
                }
            }
        }, e
    }(ul);
    zr(Bt.prototype, {
        _lock: 0,
        _hasPause: 0,
        _forcing: 0
    });
    var u9 = function(e, r, n, i, s, o, a) {
            var l = new tr(this._pt, e, r, 0, 1, J5, null, s),
                u = 0,
                c = 0,
                f, d, h, y, g, w, v, p;
            for (l.b = n, l.e = i, n += "", i += "", (v = ~i.indexOf("random(")) && (i = al(i)), o && (p = [n, i], o(p, e, r), n = p[0], i = p[1]), d = n.match(H2) || []; f = H2.exec(i);) y = f[0], g = i.substring(u, f.index), h ? h = (h + 1) % 5 : g.substr(-5) === "rgba(" && (h = 1), y !== d[c++] && (w = parseFloat(d[c - 1]) || 0, l._pt = {
                _next: l._pt,
                p: g || c === 1 ? g : ",",
                s: w,
                c: y.charAt(1) === "=" ? no(w, y) - w : parseFloat(y) - w,
                m: h && h < 4 ? Math.round : 0
            }, u = H2.lastIndex);
            return l.c = u < i.length ? i.substring(u, i.length) : "", l.fp = a, (y5.test(i) || v) && (l.e = 0), this._pt = l, l
        },
        pd = function(e, r, n, i, s, o, a, l, u, c) {
            Ie(i) && (i = i(s || 0, e, o));
            var f = e[r],
                d = n !== "get" ? n : Ie(f) ? u ? e[r.indexOf("set") || !Ie(e["get" + r.substr(3)]) ? r : "get" + r.substr(3)](u) : e[r]() : f,
                h = Ie(f) ? u ? p9 : Z5 : gd,
                y;
            if (ct(i) && (~i.indexOf("random(") && (i = al(i)), i.charAt(1) === "=" && (y = no(d, i) + (Tt(d) || 0), (y || y === 0) && (i = y))), !c || d !== i || kf) return !isNaN(d * i) && i !== "" ? (y = new tr(this._pt, e, r, +d || 0, i - (d || 0), typeof f == "boolean" ? g9 : X5, 0, h), u && (y.fp = u), a && y.modifier(a, this, e), this._pt = y) : (!f && !(r in e) && cd(r, i), u9.call(this, e, r, d, i, h, l || gr.stringFilter, u))
        },
        c9 = function(e, r, n, i, s) {
            if (Ie(e) && (e = Ta(e, s, r, n, i)), !pn(e) || e.style && e.nodeType || jt(e) || g5(e)) return ct(e) ? Ta(e, s, r, n, i) : e;
            var o = {},
                a;
            for (a in e) o[a] = Ta(e[a], s, r, n, i);
            return o
        },
        Y5 = function(e, r, n, i, s, o) {
            var a, l, u, c;
            if (cr[e] && (a = new cr[e]).init(s, a.rawVars ? r[e] : c9(r[e], i, s, o, n), n, i, o) !== !1 && (n._pt = l = new tr(n._pt, s, e, 0, 1, a.render, a, 0, a.priority), n !== qs))
                for (u = n._ptLookup[n._targets.indexOf(s)], c = a._props.length; c--;) u[a._props[c]] = l;
            return a
        },
        ei, kf, md = function t(e, r, n) {
            var i = e.vars,
                s = i.ease,
                o = i.startAt,
                a = i.immediateRender,
                l = i.lazy,
                u = i.onUpdate,
                c = i.runBackwards,
                f = i.yoyoEase,
                d = i.keyframes,
                h = i.autoRevert,
                y = e._dur,
                g = e._startAt,
                w = e._targets,
                v = e.parent,
                p = v && v.data === "nested" ? v.vars.targets : w,
                x = e._overwrite === "auto" && !od,
                _ = e.timeline,
                C, k, S, P, T, b, I, L, H, V, X, W, B;
            if (_ && (!d || !s) && (s = "none"), e._ease = ts(s, yo.ease), e._yEase = f ? U5(ts(f === !0 ? s : f, yo.ease)) : 0, f && e._yoyo && !e._repeat && (f = e._yEase, e._yEase = e._ease, e._ease = f), e._from = !_ && !!i.runBackwards, !_ || d && !i.stagger) {
                if (L = w[0] ? Ji(w[0]).harness : 0, W = L && i[L.prop], C = uu(i, fd), g && (g._zTime < 0 && g.progress(1), r < 0 && c && a && !h ? g.render(-1, !0) : g.revert(c && y ? P0 : D7), g._lazy = 0), o) {
                    if (wi(e._startAt = qe.set(w, zr({
                            data: "isStart",
                            overwrite: !1,
                            parent: v,
                            immediateRender: !0,
                            lazy: !g && Jt(l),
                            startAt: null,
                            delay: 0,
                            onUpdate: u && function() {
                                return pr(e, "onUpdate")
                            },
                            stagger: 0
                        }, o))), e._startAt._dp = 0, e._startAt._sat = e, r < 0 && (Et || !a && !h) && e._startAt.revert(P0), a && y && r <= 0 && n <= 0) {
                        r && (e._zTime = r);
                        return
                    }
                } else if (c && y && !g) {
                    if (r && (a = !1), S = zr({
                            overwrite: !1,
                            data: "isFromStart",
                            lazy: a && !g && Jt(l),
                            immediateRender: a,
                            stagger: 0,
                            parent: v
                        }, C), W && (S[L.prop] = W), wi(e._startAt = qe.set(w, S)), e._startAt._dp = 0, e._startAt._sat = e, r < 0 && (Et ? e._startAt.revert(P0) : e._startAt.render(-1, !0)), e._zTime = r, !a) t(e._startAt, ge, ge);
                    else if (!r) return
                }
                for (e._pt = e._ptCache = 0, l = y && Jt(l) || l && !y, k = 0; k < w.length; k++) {
                    if (T = w[k], I = T._gsap || hd(w)[k]._gsap, e._ptLookup[k] = V = {}, xf[I.id] && pi.length && lu(), X = p === w ? k : p.indexOf(T), L && (H = new L).init(T, W || C, e, X, p) !== !1 && (e._pt = P = new tr(e._pt, T, H.name, 0, 1, H.render, H, 0, H.priority), H._props.forEach(function(R) {
                            V[R] = P
                        }), H.priority && (b = 1)), !L || W)
                        for (S in C) cr[S] && (H = Y5(S, C, e, X, T, p)) ? H.priority && (b = 1) : V[S] = P = pd.call(e, T, S, "get", C[S], X, p, 0, i.stringFilter);
                    e._op && e._op[k] && e.kill(T, e._op[k]), x && e._pt && (ei = e, je.killTweensOf(T, V, e.globalTime(r)), B = !e.parent, ei = 0), e._pt && l && (xf[I.id] = 1)
                }
                b && e8(e), e._onInit && e._onInit(e)
            }
            e._onUpdate = u, e._initted = (!e._op || e._pt) && !B, d && r <= 0 && _.render(Er, !0, !0)
        },
        f9 = function(e, r, n, i, s, o, a, l) {
            var u = (e._pt && e._ptCache || (e._ptCache = {}))[r],
                c, f, d, h;
            if (!u)
                for (u = e._ptCache[r] = [], d = e._ptLookup, h = e._targets.length; h--;) {
                    if (c = d[h][r], c && c.d && c.d._pt)
                        for (c = c.d._pt; c && c.p !== r && c.fp !== r;) c = c._next;
                    if (!c) return kf = 1, e.vars[r] = "+=0", md(e, a), kf = 0, l ? sl(r + " not eligible for reset") : 1;
                    u.push(c)
                }
            for (h = u.length; h--;) f = u[h], c = f._pt || f, c.s = (i || i === 0) && !s ? i : c.s + (i || 0) + o * c.c, c.c = n - c.s, f.e && (f.e = Ve(n) + Tt(f.e)), f.b && (f.b = c.s + Tt(f.b))
        },
        d9 = function(e, r) {
            var n = e[0] ? Ji(e[0]).harness : 0,
                i = n && n.aliases,
                s, o, a, l;
            if (!i) return r;
            s = ds({}, r);
            for (o in i)
                if (o in s)
                    for (l = i[o].split(","), a = l.length; a--;) s[l[a]] = s[o];
            return s
        },
        h9 = function(e, r, n, i) {
            var s = r.ease || i || "power1.inOut",
                o, a;
            if (jt(r)) a = n[e] || (n[e] = []), r.forEach(function(l, u) {
                return a.push({
                    t: u / (r.length - 1) * 100,
                    v: l,
                    e: s
                })
            });
            else
                for (o in r) a = n[o] || (n[o] = []), o === "ease" || a.push({
                    t: parseFloat(e),
                    v: r[o],
                    e: s
                })
        },
        Ta = function(e, r, n, i, s) {
            return Ie(e) ? e.call(r, n, i, s) : ct(e) && ~e.indexOf("random(") ? al(e) : e
        },
        q5 = dd + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",
        K5 = {};
    er(q5 + ",id,stagger,delay,duration,paused,scrollTrigger", function(t) {
        return K5[t] = 1
    });
    var qe = function(t) {
        p5(e, t);

        function e(n, i, s, o) {
            var a;
            typeof i == "number" && (s.duration = i, i = s, s = null), a = t.call(this, o ? i : Pa(i)) || this;
            var l = a.vars,
                u = l.duration,
                c = l.delay,
                f = l.immediateRender,
                d = l.stagger,
                h = l.overwrite,
                y = l.keyframes,
                g = l.defaults,
                w = l.scrollTrigger,
                v = l.yoyoEase,
                p = i.parent || je,
                x = (jt(n) || g5(n) ? Ln(n[0]) : "length" in i) ? [n] : jr(n),
                _, C, k, S, P, T, b, I;
            if (a._targets = x.length ? hd(x) : sl("GSAP target " + n + " not found. https://gsap.com", !gr.nullTargetWarn) || [], a._ptLookup = [], a._overwrite = h, y || d || Kl(u) || Kl(c)) {
                if (i = a.vars, _ = a.timeline = new Bt({
                        data: "nested",
                        defaults: g || {},
                        targets: p && p.data === "nested" ? p.vars.targets : x
                    }), _.kill(), _.parent = _._dp = wn(a), _._start = 0, d || Kl(u) || Kl(c)) {
                    if (S = x.length, b = d && L5(d), pn(d))
                        for (P in d) ~q5.indexOf(P) && (I || (I = {}), I[P] = d[P]);
                    for (C = 0; C < S; C++) k = uu(i, K5), k.stagger = 0, v && (k.yoyoEase = v), I && ds(k, I), T = x[C], k.duration = +Ta(u, wn(a), C, T, x), k.delay = (+Ta(c, wn(a), C, T, x) || 0) - a._delay, !d && S === 1 && k.delay && (a._delay = c = k.delay, a._start += c, k.delay = 0), _.to(T, k, b ? b(C, T, x) : 0), _._ease = se.none;
                    _.duration() ? u = c = 0 : a.timeline = 0
                } else if (y) {
                    Pa(zr(_.vars.defaults, {
                        ease: "none"
                    })), _._ease = ts(y.ease || i.ease || "none");
                    var L = 0,
                        H, V, X;
                    if (jt(y)) y.forEach(function(W) {
                        return _.to(x, W, ">")
                    }), _.duration();
                    else {
                        k = {};
                        for (P in y) P === "ease" || P === "easeEach" || h9(P, y[P], k, y.easeEach);
                        for (P in k)
                            for (H = k[P].sort(function(W, B) {
                                    return W.t - B.t
                                }), L = 0, C = 0; C < H.length; C++) V = H[C], X = {
                                ease: V.e,
                                duration: (V.t - (C ? H[C - 1].t : 0)) / 100 * u
                            }, X[P] = V.v, _.to(x, X, L), L += X.duration;
                        _.duration() < u && _.to({}, {
                            duration: u - _.duration()
                        })
                    }
                }
                u || a.duration(u = _.duration())
            } else a.timeline = 0;
            return h === !0 && !od && (ei = wn(a), je.killTweensOf(x), ei = 0), an(p, wn(a), s), i.reversed && a.reverse(), i.paused && a.paused(!0), (f || !u && !y && a._start === lt(p._time) && Jt(f) && U7(wn(a)) && p.data !== "nested") && (a._tTime = -ge, a.render(Math.max(0, -c) || 0)), w && j5(wn(a), w), a
        }
        var r = e.prototype;
        return r.render = function(i, s, o) {
            var a = this._time,
                l = this._tDur,
                u = this._dur,
                c = i < 0,
                f = i > l - ge && !c ? l : i < ge ? 0 : i,
                d, h, y, g, w, v, p, x, _;
            if (!u) W7(this, i, s, o);
            else if (f !== this._tTime || !i || o || !this._initted && this._tTime || this._startAt && this._zTime < 0 !== c) {
                if (d = f, x = this.timeline, this._repeat) {
                    if (g = u + this._rDelay, this._repeat < -1 && c) return this.totalTime(g * 100 + i, s, o);
                    if (d = lt(f % g), f === l ? (y = this._repeat, d = u) : (y = ~~(f / g), y && y === lt(f / g) && (d = u, y--), d > u && (d = u)), v = this._yoyo && y & 1, v && (_ = this._yEase, d = u - d), w = xo(this._tTime, g), d === a && !o && this._initted && y === w) return this._tTime = f, this;
                    y !== w && (x && this._yEase && G5(x, v), this.vars.repeatRefresh && !v && !this._lock && this._time !== g && this._initted && (this._lock = o = 1, this.render(lt(g * y), !0).invalidate()._lock = 0))
                }
                if (!this._initted) {
                    if (M5(this, c ? i : d, o, s, f)) return this._tTime = 0, this;
                    if (a !== this._time && !(o && this.vars.repeatRefresh && y !== w)) return this;
                    if (u !== this._dur) return this.render(i, s, o)
                }
                if (this._tTime = f, this._time = d, !this._act && this._ts && (this._act = 1, this._lazy = 0), this.ratio = p = (_ || this._ease)(d / u), this._from && (this.ratio = p = 1 - p), d && !a && !s && !y && (pr(this, "onStart"), this._tTime !== f)) return this;
                for (h = this._pt; h;) h.r(p, h.d), h = h._next;
                x && x.render(i < 0 ? i : x._dur * x._ease(d / this._dur), s, o) || this._startAt && (this._zTime = i), this._onUpdate && !s && (c && _f(this, i, s, o), pr(this, "onUpdate")), this._repeat && y !== w && this.vars.onRepeat && !s && this.parent && pr(this, "onRepeat"), (f === this._tDur || !f) && this._tTime === f && (c && !this._onUpdate && _f(this, i, !0, !0), (i || !u) && (f === this._tDur && this._ts > 0 || !f && this._ts < 0) && wi(this, 1), !s && !(c && !a) && (f || a || v) && (pr(this, f === l ? "onComplete" : "onReverseComplete", !0), this._prom && !(f < l && this.timeScale() > 0) && this._prom()))
            }
            return this
        }, r.targets = function() {
            return this._targets
        }, r.invalidate = function(i) {
            return (!i || !this.vars.runBackwards) && (this._startAt = 0), this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0, this._ptLookup = [], this.timeline && this.timeline.invalidate(i), t.prototype.invalidate.call(this, i)
        }, r.resetTo = function(i, s, o, a, l) {
            ll || fr.wake(), this._ts || this.play();
            var u = Math.min(this._dur, (this._dp._time - this._start) * this._ts),
                c;
            return this._initted || md(this, u), c = this._ease(u / this._dur), f9(this, i, s, o, a, c, u, l) ? this.resetTo(i, s, o, a, 1) : (Gu(this, 0), this.parent || T5(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0), this.render(0))
        }, r.kill = function(i, s) {
            if (s === void 0 && (s = "all"), !i && (!s || s === "all")) return this._lazy = this._pt = 0, this.parent ? la(this) : this;
            if (this.timeline) {
                var o = this.timeline.totalDuration();
                return this.timeline.killTweensOf(i, s, ei && ei.vars.overwrite !== !0)._first || la(this), this.parent && o !== this.timeline.totalDuration() && _o(this, this._dur * this.timeline._tDur / o, 0, 1), this
            }
            var a = this._targets,
                l = i ? jr(i) : a,
                u = this._ptLookup,
                c = this._pt,
                f, d, h, y, g, w, v;
            if ((!s || s === "all") && H7(a, l)) return s === "all" && (this._pt = 0), la(this);
            for (f = this._op = this._op || [], s !== "all" && (ct(s) && (g = {}, er(s, function(p) {
                    return g[p] = 1
                }), s = g), s = d9(a, s)), v = a.length; v--;)
                if (~l.indexOf(a[v])) {
                    d = u[v], s === "all" ? (f[v] = s, y = d, h = {}) : (h = f[v] = f[v] || {}, y = s);
                    for (g in y) w = d && d[g], w && ((!("kill" in w.d) || w.d.kill(g) === !0) && Vu(this, w, "_pt"), delete d[g]), h !== "all" && (h[g] = 1)
                }
            return this._initted && !this._pt && c && la(this), this
        }, e.to = function(i, s) {
            return new e(i, s, arguments[2])
        }, e.from = function(i, s) {
            return ba(1, arguments)
        }, e.delayedCall = function(i, s, o, a) {
            return new e(s, 0, {
                immediateRender: !1,
                lazy: !1,
                overwrite: !1,
                delay: i,
                onComplete: s,
                onReverseComplete: s,
                onCompleteParams: o,
                onReverseCompleteParams: o,
                callbackScope: a
            })
        }, e.fromTo = function(i, s, o) {
            return ba(2, arguments)
        }, e.set = function(i, s) {
            return s.duration = 0, s.repeatDelay || (s.repeat = 0), new e(i, s)
        }, e.killTweensOf = function(i, s, o) {
            return je.killTweensOf(i, s, o)
        }, e
    }(ul);
    zr(qe.prototype, {
        _targets: [],
        _lazy: 0,
        _startAt: 0,
        _op: 0,
        _onInit: 0
    });
    er("staggerTo,staggerFrom,staggerFromTo", function(t) {
        qe[t] = function() {
            var e = new Bt,
                r = Cf.call(arguments, 0);
            return r.splice(t === "staggerFromTo" ? 5 : 4, 0, 0), e[t].apply(e, r)
        }
    });
    var gd = function(e, r, n) {
            return e[r] = n
        },
        Z5 = function(e, r, n) {
            return e[r](n)
        },
        p9 = function(e, r, n, i) {
            return e[r](i.fp, n)
        },
        m9 = function(e, r, n) {
            return e.setAttribute(r, n)
        },
        vd = function(e, r) {
            return Ie(e[r]) ? Z5 : ad(e[r]) && e.setAttribute ? m9 : gd
        },
        X5 = function(e, r) {
            return r.set(r.t, r.p, Math.round((r.s + r.c * e) * 1e6) / 1e6, r)
        },
        g9 = function(e, r) {
            return r.set(r.t, r.p, !!(r.s + r.c * e), r)
        },
        J5 = function(e, r) {
            var n = r._pt,
                i = "";
            if (!e && r.b) i = r.b;
            else if (e === 1 && r.e) i = r.e;
            else {
                for (; n;) i = n.p + (n.m ? n.m(n.s + n.c * e) : Math.round((n.s + n.c * e) * 1e4) / 1e4) + i, n = n._next;
                i += r.c
            }
            r.set(r.t, r.p, i, r)
        },
        yd = function(e, r) {
            for (var n = r._pt; n;) n.r(e, n.d), n = n._next
        },
        v9 = function(e, r, n, i) {
            for (var s = this._pt, o; s;) o = s._next, s.p === i && s.modifier(e, r, n), s = o
        },
        y9 = function(e) {
            for (var r = this._pt, n, i; r;) i = r._next, r.p === e && !r.op || r.op === e ? Vu(this, r, "_pt") : r.dep || (n = 1), r = i;
            return !n
        },
        x9 = function(e, r, n, i) {
            i.mSet(e, r, i.m.call(i.tween, n, i.mt), i)
        },
        e8 = function(e) {
            for (var r = e._pt, n, i, s, o; r;) {
                for (n = r._next, i = s; i && i.pr > r.pr;) i = i._next;
                (r._prev = i ? i._prev : o) ? r._prev._next = r: s = r, (r._next = i) ? i._prev = r : o = r, r = n
            }
            e._pt = s
        },
        tr = function() {
            function t(r, n, i, s, o, a, l, u, c) {
                this.t = n, this.s = s, this.c = o, this.p = i, this.r = a || X5, this.d = l || this, this.set = u || gd, this.pr = c || 0, this._next = r, r && (r._prev = this)
            }
            var e = t.prototype;
            return e.modifier = function(n, i, s) {
                this.mSet = this.mSet || this.set, this.set = x9, this.m = n, this.mt = s, this.tween = i
            }, t
        }();
    er(dd + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", function(t) {
        return fd[t] = 1
    });
    yr.TweenMax = yr.TweenLite = qe;
    yr.TimelineLite = yr.TimelineMax = Bt;
    je = new Bt({
        sortChildren: !1,
        defaults: yo,
        autoRemoveChildren: !0,
        id: "root",
        smoothChildTiming: !0
    });
    gr.stringFilter = V5;
    var rs = [],
        T0 = {},
        _9 = [],
        op = 0,
        w9 = 0,
        Q2 = function(e) {
            return (T0[e] || _9).map(function(r) {
                return r()
            })
        },
        Pf = function() {
            var e = Date.now(),
                r = [];
            e - op > 2 && (Q2("matchMediaInit"), rs.forEach(function(n) {
                var i = n.queries,
                    s = n.conditions,
                    o, a, l, u;
                for (a in i) o = nn.matchMedia(i[a]).matches, o && (l = 1), o !== s[a] && (s[a] = o, u = 1);
                u && (n.revert(), l && r.push(n))
            }), Q2("matchMediaRevert"), r.forEach(function(n) {
                return n.onMatch(n, function(i) {
                    return n.add(null, i)
                })
            }), op = e, Q2("matchMedia"))
        },
        t8 = function() {
            function t(r, n) {
                this.selector = n && Af(n), this.data = [], this._r = [], this.isReverted = !1, this.id = w9++, r && this.add(r)
            }
            var e = t.prototype;
            return e.add = function(n, i, s) {
                Ie(n) && (s = i, i = n, n = Ie);
                var o = this,
                    a = function() {
                        var u = ke,
                            c = o.selector,
                            f;
                        return u && u !== o && u.data.push(o), s && (o.selector = Af(s)), ke = o, f = i.apply(o, arguments), Ie(f) && o._r.push(f), ke = u, o.selector = c, o.isReverted = !1, f
                    };
                return o.last = a, n === Ie ? a(o, function(l) {
                    return o.add(null, l)
                }) : n ? o[n] = a : a
            }, e.ignore = function(n) {
                var i = ke;
                ke = null, n(this), ke = i
            }, e.getTweens = function() {
                var n = [];
                return this.data.forEach(function(i) {
                    return i instanceof t ? n.push.apply(n, i.getTweens()) : i instanceof qe && !(i.parent && i.parent.data === "nested") && n.push(i)
                }), n
            }, e.clear = function() {
                this._r.length = this.data.length = 0
            }, e.kill = function(n, i) {
                var s = this;
                if (n ? function() {
                        for (var a = s.getTweens(), l = s.data.length, u; l--;) u = s.data[l], u.data === "isFlip" && (u.revert(), u.getChildren(!0, !0, !1).forEach(function(c) {
                            return a.splice(a.indexOf(c), 1)
                        }));
                        for (a.map(function(c) {
                                return {
                                    g: c._dur || c._delay || c._sat && !c._sat.vars.immediateRender ? c.globalTime(0) : -1 / 0,
                                    t: c
                                }
                            }).sort(function(c, f) {
                                return f.g - c.g || -1 / 0
                            }).forEach(function(c) {
                                return c.t.revert(n)
                            }), l = s.data.length; l--;) u = s.data[l], u instanceof Bt ? u.data !== "nested" && (u.scrollTrigger && u.scrollTrigger.revert(), u.kill()) : !(u instanceof qe) && u.revert && u.revert(n);
                        s._r.forEach(function(c) {
                            return c(n, s)
                        }), s.isReverted = !0
                    }() : this.data.forEach(function(a) {
                        return a.kill && a.kill()
                    }), this.clear(), i)
                    for (var o = rs.length; o--;) rs[o].id === this.id && rs.splice(o, 1)
            }, e.revert = function(n) {
                this.kill(n || {})
            }, t
        }(),
        C9 = function() {
            function t(r) {
                this.contexts = [], this.scope = r, ke && ke.data.push(this)
            }
            var e = t.prototype;
            return e.add = function(n, i, s) {
                pn(n) || (n = {
                    matches: n
                });
                var o = new t8(0, s || this.scope),
                    a = o.conditions = {},
                    l, u, c;
                ke && !o.selector && (o.selector = ke.selector), this.contexts.push(o), i = o.add("onMatch", i), o.queries = n;
                for (u in n) u === "all" ? c = 1 : (l = nn.matchMedia(n[u]), l && (rs.indexOf(o) < 0 && rs.push(o), (a[u] = l.matches) && (c = 1), l.addListener ? l.addListener(Pf) : l.addEventListener("change", Pf)));
                return c && i(o, function(f) {
                    return o.add(null, f)
                }), this
            }, e.revert = function(n) {
                this.kill(n || {})
            }, e.kill = function(n) {
                this.contexts.forEach(function(i) {
                    return i.kill(n, !0)
                })
            }, t
        }(),
        fu = {
            registerPlugin: function() {
                for (var e = arguments.length, r = new Array(e), n = 0; n < e; n++) r[n] = arguments[n];
                r.forEach(function(i) {
                    return B5(i)
                })
            },
            timeline: function(e) {
                return new Bt(e)
            },
            getTweensOf: function(e, r) {
                return je.getTweensOf(e, r)
            },
            getProperty: function(e, r, n, i) {
                ct(e) && (e = jr(e)[0]);
                var s = Ji(e || {}).get,
                    o = n ? b5 : P5;
                return n === "native" && (n = ""), e && (r ? o((cr[r] && cr[r].get || s)(e, r, n, i)) : function(a, l, u) {
                    return o((cr[a] && cr[a].get || s)(e, a, l, u))
                })
            },
            quickSetter: function(e, r, n) {
                if (e = jr(e), e.length > 1) {
                    var i = e.map(function(c) {
                            return nr.quickSetter(c, r, n)
                        }),
                        s = i.length;
                    return function(c) {
                        for (var f = s; f--;) i[f](c)
                    }
                }
                e = e[0] || {};
                var o = cr[r],
                    a = Ji(e),
                    l = a.harness && (a.harness.aliases || {})[r] || r,
                    u = o ? function(c) {
                        var f = new o;
                        qs._pt = 0, f.init(e, n ? c + n : c, qs, 0, [e]), f.render(1, f), qs._pt && yd(1, qs)
                    } : a.set(e, l);
                return o ? u : function(c) {
                    return u(e, l, n ? c + n : c, a, 1)
                }
            },
            quickTo: function(e, r, n) {
                var i, s = nr.to(e, ds((i = {}, i[r] = "+=0.1", i.paused = !0, i), n || {})),
                    o = function(l, u, c) {
                        return s.resetTo(r, l, u, c)
                    };
                return o.tween = s, o
            },
            isTweening: function(e) {
                return je.getTweensOf(e, !0).length > 0
            },
            defaults: function(e) {
                return e && e.ease && (e.ease = ts(e.ease, yo.ease)), tp(yo, e || {})
            },
            config: function(e) {
                return tp(gr, e || {})
            },
            registerEffect: function(e) {
                var r = e.name,
                    n = e.effect,
                    i = e.plugins,
                    s = e.defaults,
                    o = e.extendTimeline;
                (i || "").split(",").forEach(function(a) {
                    return a && !cr[a] && !yr[a] && sl(r + " effect requires " + a + " plugin.")
                }), V2[r] = function(a, l, u) {
                    return n(jr(a), zr(l || {}, s), u)
                }, o && (Bt.prototype[r] = function(a, l, u) {
                    return this.add(V2[r](a, pn(l) ? l : (u = l) && {}, this), u)
                })
            },
            registerEase: function(e, r) {
                se[e] = ts(r)
            },
            parseEase: function(e, r) {
                return arguments.length ? ts(e, r) : se
            },
            getById: function(e) {
                return je.getById(e)
            },
            exportRoot: function(e, r) {
                e === void 0 && (e = {});
                var n = new Bt(e),
                    i, s;
                for (n.smoothChildTiming = Jt(e.smoothChildTiming), je.remove(n), n._dp = 0, n._time = n._tTime = je._time, i = je._first; i;) s = i._next, (r || !(!i._dur && i instanceof qe && i.vars.onComplete === i._targets[0])) && an(n, i, i._start - i._delay), i = s;
                return an(je, n, 0), n
            },
            context: function(e, r) {
                return e ? new t8(e, r) : ke
            },
            matchMedia: function(e) {
                return new C9(e)
            },
            matchMediaRefresh: function() {
                return rs.forEach(function(e) {
                    var r = e.conditions,
                        n, i;
                    for (i in r) r[i] && (r[i] = !1, n = 1);
                    n && e.revert()
                }) || Pf()
            },
            addEventListener: function(e, r) {
                var n = T0[e] || (T0[e] = []);
                ~n.indexOf(r) || n.push(r)
            },
            removeEventListener: function(e, r) {
                var n = T0[e],
                    i = n && n.indexOf(r);
                i >= 0 && n.splice(i, 1)
            },
            utils: {
                wrap: e9,
                wrapYoyo: t9,
                distribute: L5,
                random: z5,
                snap: O5,
                normalize: J7,
                getUnit: Tt,
                clamp: q7,
                splitColor: $5,
                toArray: jr,
                selector: Af,
                mapRange: D5,
                pipe: Z7,
                unitize: X7,
                interpolate: r9,
                shuffle: N5
            },
            install: w5,
            effects: V2,
            ticker: fr,
            updateRoot: Bt.updateRoot,
            plugins: cr,
            globalTimeline: je,
            core: {
                PropTween: tr,
                globals: C5,
                Tween: qe,
                Timeline: Bt,
                Animation: ul,
                getCache: Ji,
                _removeLinkedListItem: Vu,
                reverting: function() {
                    return Et
                },
                context: function(e) {
                    return e && ke && (ke.data.push(e), e._ctx = ke), ke
                },
                suppressOverwrites: function(e) {
                    return od = e
                }
            }
        };
    er("to,from,fromTo,delayedCall,set,killTweensOf", function(t) {
        return fu[t] = qe[t]
    });
    fr.add(Bt.updateRoot);
    qs = fu.to({}, {
        duration: 0
    });
    var A9 = function(e, r) {
            for (var n = e._pt; n && n.p !== r && n.op !== r && n.fp !== r;) n = n._next;
            return n
        },
        S9 = function(e, r) {
            var n = e._targets,
                i, s, o;
            for (i in r)
                for (s = n.length; s--;) o = e._ptLookup[s][i], o && (o = o.d) && (o._pt && (o = A9(o, i)), o && o.modifier && o.modifier(r[i], e, n[s], i))
        },
        Y2 = function(e, r) {
            return {
                name: e,
                rawVars: 1,
                init: function(i, s, o) {
                    o._onInit = function(a) {
                        var l, u;
                        if (ct(s) && (l = {}, er(s, function(c) {
                                return l[c] = 1
                            }), s = l), r) {
                            l = {};
                            for (u in s) l[u] = r(s[u]);
                            s = l
                        }
                        S9(a, s)
                    }
                }
            }
        },
        nr = fu.registerPlugin({
            name: "attr",
            init: function(e, r, n, i, s) {
                var o, a, l;
                this.tween = n;
                for (o in r) l = e.getAttribute(o) || "", a = this.add(e, "setAttribute", (l || 0) + "", r[o], i, s, 0, 0, o), a.op = o, a.b = l, this._props.push(o)
            },
            render: function(e, r) {
                for (var n = r._pt; n;) Et ? n.set(n.t, n.p, n.b, n) : n.r(e, n.d), n = n._next
            }
        }, {
            name: "endArray",
            init: function(e, r) {
                for (var n = r.length; n--;) this.add(e, n, e[n] || 0, r[n], 0, 0, 0, 0, 0, 1)
            }
        }, Y2("roundProps", Sf), Y2("modifiers"), Y2("snap", O5)) || fu;
    qe.version = Bt.version = nr.version = "3.12.5";
    _5 = 1;
    ld() && wo();
    se.Power0;
    se.Power1;
    se.Power2;
    se.Power3;
    se.Power4;
    se.Linear;
    se.Quad;
    se.Cubic;
    se.Quart;
    se.Quint;
    se.Strong;
    se.Elastic;
    se.Back;
    se.SteppedEase;
    se.Bounce;
    se.Sine;
    se.Expo;
    se.Circ;
    /*!
     * CSSPlugin 3.12.5
     * https://gsap.com
     *
     * Copyright 2008-2024, GreenSock. All rights reserved.
     * Subject to the terms at https://gsap.com/standard-license or for
     * Club GSAP members, the agreement issued with that membership.
     * @author: Jack Doyle, jack@greensock.com
     */
    var ap, ti, io, xd, Yi, lp, _d, k9 = function() {
            return typeof window < "u"
        },
        On = {},
        Bi = 180 / Math.PI,
        so = Math.PI / 180,
        bs = Math.atan2,
        up = 1e8,
        wd = /([A-Z])/g,
        P9 = /(left|right|width|margin|padding|x)/i,
        b9 = /[\s,\(]\S/,
        ln = {
            autoAlpha: "opacity,visibility",
            scale: "scaleX,scaleY",
            alpha: "opacity"
        },
        bf = function(e, r) {
            return r.set(r.t, r.p, Math.round((r.s + r.c * e) * 1e4) / 1e4 + r.u, r)
        },
        T9 = function(e, r) {
            return r.set(r.t, r.p, e === 1 ? r.e : Math.round((r.s + r.c * e) * 1e4) / 1e4 + r.u, r)
        },
        E9 = function(e, r) {
            return r.set(r.t, r.p, e ? Math.round((r.s + r.c * e) * 1e4) / 1e4 + r.u : r.b, r)
        },
        j9 = function(e, r) {
            var n = r.s + r.c * e;
            r.set(r.t, r.p, ~~(n + (n < 0 ? -.5 : .5)) + r.u, r)
        },
        r8 = function(e, r) {
            return r.set(r.t, r.p, e ? r.e : r.b, r)
        },
        n8 = function(e, r) {
            return r.set(r.t, r.p, e !== 1 ? r.b : r.e, r)
        },
        M9 = function(e, r, n) {
            return e.style[r] = n
        },
        R9 = function(e, r, n) {
            return e.style.setProperty(r, n)
        },
        N9 = function(e, r, n) {
            return e._gsap[r] = n
        },
        L9 = function(e, r, n) {
            return e._gsap.scaleX = e._gsap.scaleY = n
        },
        O9 = function(e, r, n, i, s) {
            var o = e._gsap;
            o.scaleX = o.scaleY = n, o.renderTransform(s, o)
        },
        z9 = function(e, r, n, i, s) {
            var o = e._gsap;
            o[r] = n, o.renderTransform(s, o)
        },
        Me = "transform",
        rr = Me + "Origin",
        I9 = function t(e, r) {
            var n = this,
                i = this.target,
                s = i.style,
                o = i._gsap;
            if (e in On && s) {
                if (this.tfm = this.tfm || {}, e !== "transform") e = ln[e] || e, ~e.indexOf(",") ? e.split(",").forEach(function(a) {
                    return n.tfm[a] = An(i, a)
                }) : this.tfm[e] = o.x ? o[e] : An(i, e), e === rr && (this.tfm.zOrigin = o.zOrigin);
                else return ln.transform.split(",").forEach(function(a) {
                    return t.call(n, a, r)
                });
                if (this.props.indexOf(Me) >= 0) return;
                o.svg && (this.svgo = i.getAttribute("data-svg-origin"), this.props.push(rr, r, "")), e = Me
            }(s || r) && this.props.push(e, r, s[e])
        },
        i8 = function(e) {
            e.translate && (e.removeProperty("translate"), e.removeProperty("scale"), e.removeProperty("rotate"))
        },
        D9 = function() {
            var e = this.props,
                r = this.target,
                n = r.style,
                i = r._gsap,
                s, o;
            for (s = 0; s < e.length; s += 3) e[s + 1] ? r[e[s]] = e[s + 2] : e[s + 2] ? n[e[s]] = e[s + 2] : n.removeProperty(e[s].substr(0, 2) === "--" ? e[s] : e[s].replace(wd, "-$1").toLowerCase());
            if (this.tfm) {
                for (o in this.tfm) i[o] = this.tfm[o];
                i.svg && (i.renderTransform(), r.setAttribute("data-svg-origin", this.svgo || "")), s = _d(), (!s || !s.isStart) && !n[Me] && (i8(n), i.zOrigin && n[rr] && (n[rr] += " " + i.zOrigin + "px", i.zOrigin = 0, i.renderTransform()), i.uncache = 1)
            }
        },
        s8 = function(e, r) {
            var n = {
                target: e,
                props: [],
                revert: D9,
                save: I9
            };
            return e._gsap || nr.core.getCache(e), r && r.split(",").forEach(function(i) {
                return n.save(i)
            }), n
        },
        o8, Tf = function(e, r) {
            var n = ti.createElementNS ? ti.createElementNS((r || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), e) : ti.createElement(e);
            return n && n.style ? n : ti.createElement(e)
        },
        dn = function t(e, r, n) {
            var i = getComputedStyle(e);
            return i[r] || i.getPropertyValue(r.replace(wd, "-$1").toLowerCase()) || i.getPropertyValue(r) || !n && t(e, Co(r) || r, 1) || ""
        },
        cp = "O,Moz,ms,Ms,Webkit".split(","),
        Co = function(e, r, n) {
            var i = r || Yi,
                s = i.style,
                o = 5;
            if (e in s && !n) return e;
            for (e = e.charAt(0).toUpperCase() + e.substr(1); o-- && !(cp[o] + e in s););
            return o < 0 ? null : (o === 3 ? "ms" : o >= 0 ? cp[o] : "") + e
        },
        Ef = function() {
            k9() && window.document && (ap = window, ti = ap.document, io = ti.documentElement, Yi = Tf("div") || {
                style: {}
            }, Tf("div"), Me = Co(Me), rr = Me + "Origin", Yi.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0", o8 = !!Co("perspective"), _d = nr.core.reverting, xd = 1)
        },
        q2 = function t(e) {
            var r = Tf("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"),
                n = this.parentNode,
                i = this.nextSibling,
                s = this.style.cssText,
                o;
            if (io.appendChild(r), r.appendChild(this), this.style.display = "block", e) try {
                o = this.getBBox(), this._gsapBBox = this.getBBox, this.getBBox = t
            } catch {} else this._gsapBBox && (o = this._gsapBBox());
            return n && (i ? n.insertBefore(this, i) : n.appendChild(this)), io.removeChild(r), this.style.cssText = s, o
        },
        fp = function(e, r) {
            for (var n = r.length; n--;)
                if (e.hasAttribute(r[n])) return e.getAttribute(r[n])
        },
        a8 = function(e) {
            var r;
            try {
                r = e.getBBox()
            } catch {
                r = q2.call(e, !0)
            }
            return r && (r.width || r.height) || e.getBBox === q2 || (r = q2.call(e, !0)), r && !r.width && !r.x && !r.y ? {
                x: +fp(e, ["x", "cx", "x1"]) || 0,
                y: +fp(e, ["y", "cy", "y1"]) || 0,
                width: 0,
                height: 0
            } : r
        },
        l8 = function(e) {
            return !!(e.getCTM && (!e.parentNode || e.ownerSVGElement) && a8(e))
        },
        hs = function(e, r) {
            if (r) {
                var n = e.style,
                    i;
                r in On && r !== rr && (r = Me), n.removeProperty ? (i = r.substr(0, 2), (i === "ms" || r.substr(0, 6) === "webkit") && (r = "-" + r), n.removeProperty(i === "--" ? r : r.replace(wd, "-$1").toLowerCase())) : n.removeAttribute(r)
            }
        },
        ri = function(e, r, n, i, s, o) {
            var a = new tr(e._pt, r, n, 0, 1, o ? n8 : r8);
            return e._pt = a, a.b = i, a.e = s, e._props.push(n), a
        },
        dp = {
            deg: 1,
            rad: 1,
            turn: 1
        },
        F9 = {
            grid: 1,
            flex: 1
        },
        Ci = function t(e, r, n, i) {
            var s = parseFloat(n) || 0,
                o = (n + "").trim().substr((s + "").length) || "px",
                a = Yi.style,
                l = P9.test(r),
                u = e.tagName.toLowerCase() === "svg",
                c = (u ? "client" : "offset") + (l ? "Width" : "Height"),
                f = 100,
                d = i === "px",
                h = i === "%",
                y, g, w, v;
            if (i === o || !s || dp[i] || dp[o]) return s;
            if (o !== "px" && !d && (s = t(e, r, n, "px")), v = e.getCTM && l8(e), (h || o === "%") && (On[r] || ~r.indexOf("adius"))) return y = v ? e.getBBox()[l ? "width" : "height"] : e[c], Ve(h ? s / y * f : s / 100 * y);
            if (a[l ? "width" : "height"] = f + (d ? o : i), g = ~r.indexOf("adius") || i === "em" && e.appendChild && !u ? e : e.parentNode, v && (g = (e.ownerSVGElement || {}).parentNode), (!g || g === ti || !g.appendChild) && (g = ti.body), w = g._gsap, w && h && w.width && l && w.time === fr.time && !w.uncache) return Ve(s / w.width * f);
            if (h && (r === "height" || r === "width")) {
                var p = e.style[r];
                e.style[r] = f + i, y = e[c], p ? e.style[r] = p : hs(e, r)
            } else(h || o === "%") && !F9[dn(g, "display")] && (a.position = dn(e, "position")), g === e && (a.position = "static"), g.appendChild(Yi), y = Yi[c], g.removeChild(Yi), a.position = "absolute";
            return l && h && (w = Ji(g), w.time = fr.time, w.width = g[c]), Ve(d ? y * s / f : y && s ? f / y * s : 0)
        },
        An = function(e, r, n, i) {
            var s;
            return xd || Ef(), r in ln && r !== "transform" && (r = ln[r], ~r.indexOf(",") && (r = r.split(",")[0])), On[r] && r !== "transform" ? (s = fl(e, i), s = r !== "transformOrigin" ? s[r] : s.svg ? s.origin : hu(dn(e, rr)) + " " + s.zOrigin + "px") : (s = e.style[r], (!s || s === "auto" || i || ~(s + "").indexOf("calc(")) && (s = du[r] && du[r](e, r, n) || dn(e, r) || S5(e, r) || (r === "opacity" ? 1 : 0))), n && !~(s + "").trim().indexOf(" ") ? Ci(e, r, s, n) + n : s
        },
        B9 = function(e, r, n, i) {
            if (!n || n === "none") {
                var s = Co(r, e, 1),
                    o = s && dn(e, s, 1);
                o && o !== n ? (r = s, n = o) : r === "borderColor" && (n = dn(e, "borderTopColor"))
            }
            var a = new tr(this._pt, e.style, r, 0, 1, J5),
                l = 0,
                u = 0,
                c, f, d, h, y, g, w, v, p, x, _, C;
            if (a.b = n, a.e = i, n += "", i += "", i === "auto" && (g = e.style[r], e.style[r] = i, i = dn(e, r) || i, g ? e.style[r] = g : hs(e, r)), c = [n, i], V5(c), n = c[0], i = c[1], d = n.match(Ys) || [], C = i.match(Ys) || [], C.length) {
                for (; f = Ys.exec(i);) w = f[0], p = i.substring(l, f.index), y ? y = (y + 1) % 5 : (p.substr(-5) === "rgba(" || p.substr(-5) === "hsla(") && (y = 1), w !== (g = d[u++] || "") && (h = parseFloat(g) || 0, _ = g.substr((h + "").length), w.charAt(1) === "=" && (w = no(h, w) + _), v = parseFloat(w), x = w.substr((v + "").length), l = Ys.lastIndex - x.length, x || (x = x || gr.units[r] || _, l === i.length && (i += x, a.e += x)), _ !== x && (h = Ci(e, r, g, x) || 0), a._pt = {
                    _next: a._pt,
                    p: p || u === 1 ? p : ",",
                    s: h,
                    c: v - h,
                    m: y && y < 4 || r === "zIndex" ? Math.round : 0
                });
                a.c = l < i.length ? i.substring(l, i.length) : ""
            } else a.r = r === "display" && i === "none" ? n8 : r8;
            return y5.test(i) && (a.e = 0), this._pt = a, a
        },
        hp = {
            top: "0%",
            bottom: "100%",
            left: "0%",
            right: "100%",
            center: "50%"
        },
        $9 = function(e) {
            var r = e.split(" "),
                n = r[0],
                i = r[1] || "50%";
            return (n === "top" || n === "bottom" || i === "left" || i === "right") && (e = n, n = i, i = e), r[0] = hp[n] || n, r[1] = hp[i] || i, r.join(" ")
        },
        H9 = function(e, r) {
            if (r.tween && r.tween._time === r.tween._dur) {
                var n = r.t,
                    i = n.style,
                    s = r.u,
                    o = n._gsap,
                    a, l, u;
                if (s === "all" || s === !0) i.cssText = "", l = 1;
                else
                    for (s = s.split(","), u = s.length; --u > -1;) a = s[u], On[a] && (l = 1, a = a === "transformOrigin" ? rr : Me), hs(n, a);
                l && (hs(n, Me), o && (o.svg && n.removeAttribute("transform"), fl(n, 1), o.uncache = 1, i8(i)))
            }
        },
        du = {
            clearProps: function(e, r, n, i, s) {
                if (s.data !== "isFromStart") {
                    var o = e._pt = new tr(e._pt, r, n, 0, 0, H9);
                    return o.u = i, o.pr = -10, o.tween = s, e._props.push(n), 1
                }
            }
        },
        cl = [1, 0, 0, 1, 0, 0],
        u8 = {},
        c8 = function(e) {
            return e === "matrix(1, 0, 0, 1, 0, 0)" || e === "none" || !e
        },
        pp = function(e) {
            var r = dn(e, Me);
            return c8(r) ? cl : r.substr(7).match(v5).map(Ve)
        },
        Cd = function(e, r) {
            var n = e._gsap || Ji(e),
                i = e.style,
                s = pp(e),
                o, a, l, u;
            return n.svg && e.getAttribute("transform") ? (l = e.transform.baseVal.consolidate().matrix, s = [l.a, l.b, l.c, l.d, l.e, l.f], s.join(",") === "1,0,0,1,0,0" ? cl : s) : (s === cl && !e.offsetParent && e !== io && !n.svg && (l = i.display, i.display = "block", o = e.parentNode, (!o || !e.offsetParent) && (u = 1, a = e.nextElementSibling, io.appendChild(e)), s = pp(e), l ? i.display = l : hs(e, "display"), u && (a ? o.insertBefore(e, a) : o ? o.appendChild(e) : io.removeChild(e))), r && s.length > 6 ? [s[0], s[1], s[4], s[5], s[12], s[13]] : s)
        },
        jf = function(e, r, n, i, s, o) {
            var a = e._gsap,
                l = s || Cd(e, !0),
                u = a.xOrigin || 0,
                c = a.yOrigin || 0,
                f = a.xOffset || 0,
                d = a.yOffset || 0,
                h = l[0],
                y = l[1],
                g = l[2],
                w = l[3],
                v = l[4],
                p = l[5],
                x = r.split(" "),
                _ = parseFloat(x[0]) || 0,
                C = parseFloat(x[1]) || 0,
                k, S, P, T;
            n ? l !== cl && (S = h * w - y * g) && (P = _ * (w / S) + C * (-g / S) + (g * p - w * v) / S, T = _ * (-y / S) + C * (h / S) - (h * p - y * v) / S, _ = P, C = T) : (k = a8(e), _ = k.x + (~x[0].indexOf("%") ? _ / 100 * k.width : _), C = k.y + (~(x[1] || x[0]).indexOf("%") ? C / 100 * k.height : C)), i || i !== !1 && a.smooth ? (v = _ - u, p = C - c, a.xOffset = f + (v * h + p * g) - v, a.yOffset = d + (v * y + p * w) - p) : a.xOffset = a.yOffset = 0, a.xOrigin = _, a.yOrigin = C, a.smooth = !!i, a.origin = r, a.originIsAbsolute = !!n, e.style[rr] = "0px 0px", o && (ri(o, a, "xOrigin", u, _), ri(o, a, "yOrigin", c, C), ri(o, a, "xOffset", f, a.xOffset), ri(o, a, "yOffset", d, a.yOffset)), e.setAttribute("data-svg-origin", _ + " " + C)
        },
        fl = function(e, r) {
            var n = e._gsap || new Q5(e);
            if ("x" in n && !r && !n.uncache) return n;
            var i = e.style,
                s = n.scaleX < 0,
                o = "px",
                a = "deg",
                l = getComputedStyle(e),
                u = dn(e, rr) || "0",
                c, f, d, h, y, g, w, v, p, x, _, C, k, S, P, T, b, I, L, H, V, X, W, B, R, z, A, G, oe, yt, ce, Fe;
            return c = f = d = g = w = v = p = x = _ = 0, h = y = 1, n.svg = !!(e.getCTM && l8(e)), l.translate && ((l.translate !== "none" || l.scale !== "none" || l.rotate !== "none") && (i[Me] = (l.translate !== "none" ? "translate3d(" + (l.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") " : "") + (l.rotate !== "none" ? "rotate(" + l.rotate + ") " : "") + (l.scale !== "none" ? "scale(" + l.scale.split(" ").join(",") + ") " : "") + (l[Me] !== "none" ? l[Me] : "")), i.scale = i.rotate = i.translate = "none"), S = Cd(e, n.svg), n.svg && (n.uncache ? (R = e.getBBox(), u = n.xOrigin - R.x + "px " + (n.yOrigin - R.y) + "px", B = "") : B = !r && e.getAttribute("data-svg-origin"), jf(e, B || u, !!B || n.originIsAbsolute, n.smooth !== !1, S)), C = n.xOrigin || 0, k = n.yOrigin || 0, S !== cl && (I = S[0], L = S[1], H = S[2], V = S[3], c = X = S[4], f = W = S[5], S.length === 6 ? (h = Math.sqrt(I * I + L * L), y = Math.sqrt(V * V + H * H), g = I || L ? bs(L, I) * Bi : 0, p = H || V ? bs(H, V) * Bi + g : 0, p && (y *= Math.abs(Math.cos(p * so))), n.svg && (c -= C - (C * I + k * H), f -= k - (C * L + k * V))) : (Fe = S[6], yt = S[7], A = S[8], G = S[9], oe = S[10], ce = S[11], c = S[12], f = S[13], d = S[14], P = bs(Fe, oe), w = P * Bi, P && (T = Math.cos(-P), b = Math.sin(-P), B = X * T + A * b, R = W * T + G * b, z = Fe * T + oe * b, A = X * -b + A * T, G = W * -b + G * T, oe = Fe * -b + oe * T, ce = yt * -b + ce * T, X = B, W = R, Fe = z), P = bs(-H, oe), v = P * Bi, P && (T = Math.cos(-P), b = Math.sin(-P), B = I * T - A * b, R = L * T - G * b, z = H * T - oe * b, ce = V * b + ce * T, I = B, L = R, H = z), P = bs(L, I), g = P * Bi, P && (T = Math.cos(P), b = Math.sin(P), B = I * T + L * b, R = X * T + W * b, L = L * T - I * b, W = W * T - X * b, I = B, X = R), w && Math.abs(w) + Math.abs(g) > 359.9 && (w = g = 0, v = 180 - v), h = Ve(Math.sqrt(I * I + L * L + H * H)), y = Ve(Math.sqrt(W * W + Fe * Fe)), P = bs(X, W), p = Math.abs(P) > 2e-4 ? P * Bi : 0, _ = ce ? 1 / (ce < 0 ? -ce : ce) : 0), n.svg && (B = e.getAttribute("transform"), n.forceCSS = e.setAttribute("transform", "") || !c8(dn(e, Me)), B && e.setAttribute("transform", B))), Math.abs(p) > 90 && Math.abs(p) < 270 && (s ? (h *= -1, p += g <= 0 ? 180 : -180, g += g <= 0 ? 180 : -180) : (y *= -1, p += p <= 0 ? 180 : -180)), r = r || n.uncache, n.x = c - ((n.xPercent = c && (!r && n.xPercent || (Math.round(e.offsetWidth / 2) === Math.round(-c) ? -50 : 0))) ? e.offsetWidth * n.xPercent / 100 : 0) + o, n.y = f - ((n.yPercent = f && (!r && n.yPercent || (Math.round(e.offsetHeight / 2) === Math.round(-f) ? -50 : 0))) ? e.offsetHeight * n.yPercent / 100 : 0) + o, n.z = d + o, n.scaleX = Ve(h), n.scaleY = Ve(y), n.rotation = Ve(g) + a, n.rotationX = Ve(w) + a, n.rotationY = Ve(v) + a, n.skewX = p + a, n.skewY = x + a, n.transformPerspective = _ + o, (n.zOrigin = parseFloat(u.split(" ")[2]) || !r && n.zOrigin || 0) && (i[rr] = hu(u)), n.xOffset = n.yOffset = 0, n.force3D = gr.force3D, n.renderTransform = n.svg ? U9 : o8 ? f8 : V9, n.uncache = 0, n
        },
        hu = function(e) {
            return (e = e.split(" "))[0] + " " + e[1]
        },
        K2 = function(e, r, n) {
            var i = Tt(r);
            return Ve(parseFloat(r) + parseFloat(Ci(e, "x", n + "px", i))) + i
        },
        V9 = function(e, r) {
            r.z = "0px", r.rotationY = r.rotationX = "0deg", r.force3D = 0, f8(e, r)
        },
        zi = "0deg",
        Xo = "0px",
        Ii = ") ",
        f8 = function(e, r) {
            var n = r || this,
                i = n.xPercent,
                s = n.yPercent,
                o = n.x,
                a = n.y,
                l = n.z,
                u = n.rotation,
                c = n.rotationY,
                f = n.rotationX,
                d = n.skewX,
                h = n.skewY,
                y = n.scaleX,
                g = n.scaleY,
                w = n.transformPerspective,
                v = n.force3D,
                p = n.target,
                x = n.zOrigin,
                _ = "",
                C = v === "auto" && e && e !== 1 || v === !0;
            if (x && (f !== zi || c !== zi)) {
                var k = parseFloat(c) * so,
                    S = Math.sin(k),
                    P = Math.cos(k),
                    T;
                k = parseFloat(f) * so, T = Math.cos(k), o = K2(p, o, S * T * -x), a = K2(p, a, -Math.sin(k) * -x), l = K2(p, l, P * T * -x + x)
            }
            w !== Xo && (_ += "perspective(" + w + Ii), (i || s) && (_ += "translate(" + i + "%, " + s + "%) "), (C || o !== Xo || a !== Xo || l !== Xo) && (_ += l !== Xo || C ? "translate3d(" + o + ", " + a + ", " + l + ") " : "translate(" + o + ", " + a + Ii), u !== zi && (_ += "rotate(" + u + Ii), c !== zi && (_ += "rotateY(" + c + Ii), f !== zi && (_ += "rotateX(" + f + Ii), (d !== zi || h !== zi) && (_ += "skew(" + d + ", " + h + Ii), (y !== 1 || g !== 1) && (_ += "scale(" + y + ", " + g + Ii), p.style[Me] = _ || "translate(0, 0)"
        },
        U9 = function(e, r) {
            var n = r || this,
                i = n.xPercent,
                s = n.yPercent,
                o = n.x,
                a = n.y,
                l = n.rotation,
                u = n.skewX,
                c = n.skewY,
                f = n.scaleX,
                d = n.scaleY,
                h = n.target,
                y = n.xOrigin,
                g = n.yOrigin,
                w = n.xOffset,
                v = n.yOffset,
                p = n.forceCSS,
                x = parseFloat(o),
                _ = parseFloat(a),
                C, k, S, P, T;
            l = parseFloat(l), u = parseFloat(u), c = parseFloat(c), c && (c = parseFloat(c), u += c, l += c), l || u ? (l *= so, u *= so, C = Math.cos(l) * f, k = Math.sin(l) * f, S = Math.sin(l - u) * -d, P = Math.cos(l - u) * d, u && (c *= so, T = Math.tan(u - c), T = Math.sqrt(1 + T * T), S *= T, P *= T, c && (T = Math.tan(c), T = Math.sqrt(1 + T * T), C *= T, k *= T)), C = Ve(C), k = Ve(k), S = Ve(S), P = Ve(P)) : (C = f, P = d, k = S = 0), (x && !~(o + "").indexOf("px") || _ && !~(a + "").indexOf("px")) && (x = Ci(h, "x", o, "px"), _ = Ci(h, "y", a, "px")), (y || g || w || v) && (x = Ve(x + y - (y * C + g * S) + w), _ = Ve(_ + g - (y * k + g * P) + v)), (i || s) && (T = h.getBBox(), x = Ve(x + i / 100 * T.width), _ = Ve(_ + s / 100 * T.height)), T = "matrix(" + C + "," + k + "," + S + "," + P + "," + x + "," + _ + ")", h.setAttribute("transform", T), p && (h.style[Me] = T)
        },
        G9 = function(e, r, n, i, s) {
            var o = 360,
                a = ct(s),
                l = parseFloat(s) * (a && ~s.indexOf("rad") ? Bi : 1),
                u = l - i,
                c = i + u + "deg",
                f, d;
            return a && (f = s.split("_")[1], f === "short" && (u %= o, u !== u % (o / 2) && (u += u < 0 ? o : -o)), f === "cw" && u < 0 ? u = (u + o * up) % o - ~~(u / o) * o : f === "ccw" && u > 0 && (u = (u - o * up) % o - ~~(u / o) * o)), e._pt = d = new tr(e._pt, r, n, i, u, T9), d.e = c, d.u = "deg", e._props.push(n), d
        },
        mp = function(e, r) {
            for (var n in r) e[n] = r[n];
            return e
        },
        W9 = function(e, r, n) {
            var i = mp({}, n._gsap),
                s = "perspective,force3D,transformOrigin,svgOrigin",
                o = n.style,
                a, l, u, c, f, d, h, y;
            i.svg ? (u = n.getAttribute("transform"), n.setAttribute("transform", ""), o[Me] = r, a = fl(n, 1), hs(n, Me), n.setAttribute("transform", u)) : (u = getComputedStyle(n)[Me], o[Me] = r, a = fl(n, 1), o[Me] = u);
            for (l in On) u = i[l], c = a[l], u !== c && s.indexOf(l) < 0 && (h = Tt(u), y = Tt(c), f = h !== y ? Ci(n, l, u, y) : parseFloat(u), d = parseFloat(c), e._pt = new tr(e._pt, a, l, f, d - f, bf), e._pt.u = y || 0, e._props.push(l));
            mp(a, i)
        };
    er("padding,margin,Width,Radius", function(t, e) {
        var r = "Top",
            n = "Right",
            i = "Bottom",
            s = "Left",
            o = (e < 3 ? [r, n, i, s] : [r + s, r + n, i + n, i + s]).map(function(a) {
                return e < 2 ? t + a : "border" + a + t
            });
        du[e > 1 ? "border" + t : t] = function(a, l, u, c, f) {
            var d, h;
            if (arguments.length < 4) return d = o.map(function(y) {
                return An(a, y, u)
            }), h = d.join(" "), h.split(d[0]).length === 5 ? d[0] : h;
            d = (c + "").split(" "), h = {}, o.forEach(function(y, g) {
                return h[y] = d[g] = d[g] || d[(g - 1) / 2 | 0]
            }), a.init(l, h, f)
        }
    });
    var d8 = {
        name: "css",
        register: Ef,
        targetTest: function(e) {
            return e.style && e.nodeType
        },
        init: function(e, r, n, i, s) {
            var o = this._props,
                a = e.style,
                l = n.vars.startAt,
                u, c, f, d, h, y, g, w, v, p, x, _, C, k, S, P;
            xd || Ef(), this.styles = this.styles || s8(e), P = this.styles.props, this.tween = n;
            for (g in r)
                if (g !== "autoRound" && (c = r[g], !(cr[g] && Y5(g, r, n, i, e, s)))) {
                    if (h = typeof c, y = du[g], h === "function" && (c = c.call(n, i, e, s), h = typeof c), h === "string" && ~c.indexOf("random(") && (c = al(c)), y) y(this, e, g, c, n) && (S = 1);
                    else if (g.substr(0, 2) === "--") u = (getComputedStyle(e).getPropertyValue(g) + "").trim(), c += "", mi.lastIndex = 0, mi.test(u) || (w = Tt(u), v = Tt(c)), v ? w !== v && (u = Ci(e, g, u, v) + v) : w && (c += w), this.add(a, "setProperty", u, c, i, s, 0, 0, g), o.push(g), P.push(g, 0, a[g]);
                    else if (h !== "undefined") {
                        if (l && g in l ? (u = typeof l[g] == "function" ? l[g].call(n, i, e, s) : l[g], ct(u) && ~u.indexOf("random(") && (u = al(u)), Tt(u + "") || u === "auto" || (u += gr.units[g] || Tt(An(e, g)) || ""), (u + "").charAt(1) === "=" && (u = An(e, g))) : u = An(e, g), d = parseFloat(u), p = h === "string" && c.charAt(1) === "=" && c.substr(0, 2), p && (c = c.substr(2)), f = parseFloat(c), g in ln && (g === "autoAlpha" && (d === 1 && An(e, "visibility") === "hidden" && f && (d = 0), P.push("visibility", 0, a.visibility), ri(this, a, "visibility", d ? "inherit" : "hidden", f ? "inherit" : "hidden", !f)), g !== "scale" && g !== "transform" && (g = ln[g], ~g.indexOf(",") && (g = g.split(",")[0]))), x = g in On, x) {
                            if (this.styles.save(g), _ || (C = e._gsap, C.renderTransform && !r.parseTransform || fl(e, r.parseTransform), k = r.smoothOrigin !== !1 && C.smooth, _ = this._pt = new tr(this._pt, a, Me, 0, 1, C.renderTransform, C, 0, -1), _.dep = 1), g === "scale") this._pt = new tr(this._pt, C, "scaleY", C.scaleY, (p ? no(C.scaleY, p + f) : f) - C.scaleY || 0, bf), this._pt.u = 0, o.push("scaleY", g), g += "X";
                            else if (g === "transformOrigin") {
                                P.push(rr, 0, a[rr]), c = $9(c), C.svg ? jf(e, c, 0, k, 0, this) : (v = parseFloat(c.split(" ")[2]) || 0, v !== C.zOrigin && ri(this, C, "zOrigin", C.zOrigin, v), ri(this, a, g, hu(u), hu(c)));
                                continue
                            } else if (g === "svgOrigin") {
                                jf(e, c, 1, k, 0, this);
                                continue
                            } else if (g in u8) {
                                G9(this, C, g, d, p ? no(d, p + c) : c);
                                continue
                            } else if (g === "smoothOrigin") {
                                ri(this, C, "smooth", C.smooth, c);
                                continue
                            } else if (g === "force3D") {
                                C[g] = c;
                                continue
                            } else if (g === "transform") {
                                W9(this, c, e);
                                continue
                            }
                        } else g in a || (g = Co(g) || g);
                        if (x || (f || f === 0) && (d || d === 0) && !b9.test(c) && g in a) w = (u + "").substr((d + "").length), f || (f = 0), v = Tt(c) || (g in gr.units ? gr.units[g] : w), w !== v && (d = Ci(e, g, u, v)), this._pt = new tr(this._pt, x ? C : a, g, d, (p ? no(d, p + f) : f) - d, !x && (v === "px" || g === "zIndex") && r.autoRound !== !1 ? j9 : bf), this._pt.u = v || 0, w !== v && v !== "%" && (this._pt.b = u, this._pt.r = E9);
                        else if (g in a) B9.call(this, e, g, u, p ? p + c : c);
                        else if (g in e) this.add(e, g, u || e[g], p ? p + c : c, i, s);
                        else if (g !== "parseTransform") {
                            cd(g, c);
                            continue
                        }
                        x || (g in a ? P.push(g, 0, a[g]) : P.push(g, 1, u || e[g])), o.push(g)
                    }
                }
            S && e8(this)
        },
        render: function(e, r) {
            if (r.tween._time || !_d())
                for (var n = r._pt; n;) n.r(e, n.d), n = n._next;
            else r.styles.revert()
        },
        get: An,
        aliases: ln,
        getSetter: function(e, r, n) {
            var i = ln[r];
            return i && i.indexOf(",") < 0 && (r = i), r in On && r !== rr && (e._gsap.x || An(e, "x")) ? n && lp === n ? r === "scale" ? L9 : N9 : (lp = n || {}) && (r === "scale" ? O9 : z9) : e.style && !ad(e.style[r]) ? M9 : ~r.indexOf("-") ? R9 : vd(e, r)
        },
        core: {
            _removeProperty: hs,
            _getMatrix: Cd
        }
    };
    nr.utils.checkPrefix = Co;
    nr.core.getStyleSaver = s8;
    (function(t, e, r, n) {
        var i = er(t + "," + e + "," + r, function(s) {
            On[s] = 1
        });
        er(e, function(s) {
            gr.units[s] = "deg", u8[s] = 1
        }), ln[i[13]] = t + "," + e, er(n, function(s) {
            var o = s.split(":");
            ln[o[1]] = i[o[0]]
        })
    })("x,y,z,scale,scaleX,scaleY,xPercent,yPercent", "rotation,rotationX,rotationY,skewX,skewY", "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");
    er("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function(t) {
        gr.units[t] = "px"
    });
    nr.registerPlugin(d8);
    var fe = nr.registerPlugin(d8) || nr;
    fe.core.Tween;
    /**
     * @remix-run/router v1.16.1
     *
     * Copyright (c) Remix Software Inc.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE.md file in the root directory of this source tree.
     *
     * @license MIT
     */
    function dl() {
        return dl = Object.assign ? Object.assign.bind() : function(t) {
            for (var e = 1; e < arguments.length; e++) {
                var r = arguments[e];
                for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n])
            }
            return t
        }, dl.apply(this, arguments)
    }
    var ni;
    (function(t) {
        t.Pop = "POP", t.Push = "PUSH", t.Replace = "REPLACE"
    })(ni || (ni = {}));
    const gp = "popstate";

    function Q9(t) {
        t === void 0 && (t = {});

        function e(n, i) {
            let {
                pathname: s,
                search: o,
                hash: a
            } = n.location;
            return Mf("", {
                pathname: s,
                search: o,
                hash: a
            }, i.state && i.state.usr || null, i.state && i.state.key || "default")
        }

        function r(n, i) {
            return typeof i == "string" ? i : pu(i)
        }
        return q9(e, r, null, t)
    }

    function De(t, e) {
        if (t === !1 || t === null || typeof t > "u") throw new Error(e)
    }

    function h8(t, e) {
        if (!t) {
            typeof console < "u" && console.warn(e);
            try {
                throw new Error(e)
            } catch {}
        }
    }

    function Y9() {
        return Math.random().toString(36).substr(2, 8)
    }

    function vp(t, e) {
        return {
            usr: t.state,
            key: t.key,
            idx: e
        }
    }

    function Mf(t, e, r, n) {
        return r === void 0 && (r = null), dl({
            pathname: typeof t == "string" ? t : t.pathname,
            search: "",
            hash: ""
        }, typeof e == "string" ? To(e) : e, {
            state: r,
            key: e && e.key || n || Y9()
        })
    }

    function pu(t) {
        let {
            pathname: e = "/",
            search: r = "",
            hash: n = ""
        } = t;
        return r && r !== "?" && (e += r.charAt(0) === "?" ? r : "?" + r), n && n !== "#" && (e += n.charAt(0) === "#" ? n : "#" + n), e
    }

    function To(t) {
        let e = {};
        if (t) {
            let r = t.indexOf("#");
            r >= 0 && (e.hash = t.substr(r), t = t.substr(0, r));
            let n = t.indexOf("?");
            n >= 0 && (e.search = t.substr(n), t = t.substr(0, n)), t && (e.pathname = t)
        }
        return e
    }

    function q9(t, e, r, n) {
        n === void 0 && (n = {});
        let {
            window: i = document.defaultView,
            v5Compat: s = !1
        } = n, o = i.history, a = ni.Pop, l = null, u = c();
        u == null && (u = 0, o.replaceState(dl({}, o.state, {
            idx: u
        }), ""));

        function c() {
            return (o.state || {
                idx: null
            }).idx
        }

        function f() {
            a = ni.Pop;
            let w = c(),
                v = w == null ? null : w - u;
            u = w, l && l({
                action: a,
                location: g.location,
                delta: v
            })
        }

        function d(w, v) {
            a = ni.Push;
            let p = Mf(g.location, w, v);
            u = c() + 1;
            let x = vp(p, u),
                _ = g.createHref(p);
            try {
                o.pushState(x, "", _)
            } catch (C) {
                if (C instanceof DOMException && C.name === "DataCloneError") throw C;
                i.location.assign(_)
            }
            s && l && l({
                action: a,
                location: g.location,
                delta: 1
            })
        }

        function h(w, v) {
            a = ni.Replace;
            let p = Mf(g.location, w, v);
            u = c();
            let x = vp(p, u),
                _ = g.createHref(p);
            o.replaceState(x, "", _), s && l && l({
                action: a,
                location: g.location,
                delta: 0
            })
        }

        function y(w) {
            let v = i.location.origin !== "null" ? i.location.origin : i.location.href,
                p = typeof w == "string" ? w : pu(w);
            return p = p.replace(/ $/, "%20"), De(v, "No window.location.(origin|href) available to create URL for href: " + p), new URL(p, v)
        }
        let g = {
            get action() {
                return a
            },
            get location() {
                return t(i, o)
            },
            listen(w) {
                if (l) throw new Error("A history only accepts one active listener");
                return i.addEventListener(gp, f), l = w, () => {
                    i.removeEventListener(gp, f), l = null
                }
            },
            createHref(w) {
                return e(i, w)
            },
            createURL: y,
            encodeLocation(w) {
                let v = y(w);
                return {
                    pathname: v.pathname,
                    search: v.search,
                    hash: v.hash
                }
            },
            push: d,
            replace: h,
            go(w) {
                return o.go(w)
            }
        };
        return g
    }
    var yp;
    (function(t) {
        t.data = "data", t.deferred = "deferred", t.redirect = "redirect", t.error = "error"
    })(yp || (yp = {}));

    function K9(t, e, r) {
        r === void 0 && (r = "/");
        let n = typeof e == "string" ? To(e) : e,
            i = Ao(n.pathname || "/", r);
        if (i == null) return null;
        let s = p8(t);
        Z9(s);
        let o = null;
        for (let a = 0; o == null && a < s.length; ++a) {
            let l = ly(i);
            o = oy(s[a], l)
        }
        return o
    }

    function p8(t, e, r, n) {
        e === void 0 && (e = []), r === void 0 && (r = []), n === void 0 && (n = "");
        let i = (s, o, a) => {
            let l = {
                relativePath: a === void 0 ? s.path || "" : a,
                caseSensitive: s.caseSensitive === !0,
                childrenIndex: o,
                route: s
            };
            l.relativePath.startsWith("/") && (De(l.relativePath.startsWith(n), 'Absolute route path "' + l.relativePath + '" nested under path ' + ('"' + n + '" is not valid. An absolute child route path ') + "must start with the combined path of all its parent routes."), l.relativePath = l.relativePath.slice(n.length));
            let u = gi([n, l.relativePath]),
                c = r.concat(l);
            s.children && s.children.length > 0 && (De(s.index !== !0, "Index routes must not have child routes. Please remove " + ('all child routes from route path "' + u + '".')), p8(s.children, e, c, u)), !(s.path == null && !s.index) && e.push({
                path: u,
                score: iy(u, s.index),
                routesMeta: c
            })
        };
        return t.forEach((s, o) => {
            var a;
            if (s.path === "" || !((a = s.path) != null && a.includes("?"))) i(s, o);
            else
                for (let l of m8(s.path)) i(s, o, l)
        }), e
    }

    function m8(t) {
        let e = t.split("/");
        if (e.length === 0) return [];
        let [r, ...n] = e, i = r.endsWith("?"), s = r.replace(/\?$/, "");
        if (n.length === 0) return i ? [s, ""] : [s];
        let o = m8(n.join("/")),
            a = [];
        return a.push(...o.map(l => l === "" ? s : [s, l].join("/"))), i && a.push(...o), a.map(l => t.startsWith("/") && l === "" ? "/" : l)
    }

    function Z9(t) {
        t.sort((e, r) => e.score !== r.score ? r.score - e.score : sy(e.routesMeta.map(n => n.childrenIndex), r.routesMeta.map(n => n.childrenIndex)))
    }
    const X9 = /^:[\w-]+$/,
        J9 = 3,
        ey = 2,
        ty = 1,
        ry = 10,
        ny = -2,
        xp = t => t === "*";

    function iy(t, e) {
        let r = t.split("/"),
            n = r.length;
        return r.some(xp) && (n += ny), e && (n += ey), r.filter(i => !xp(i)).reduce((i, s) => i + (X9.test(s) ? J9 : s === "" ? ty : ry), n)
    }

    function sy(t, e) {
        return t.length === e.length && t.slice(0, -1).every((n, i) => n === e[i]) ? t[t.length - 1] - e[e.length - 1] : 0
    }

    function oy(t, e) {
        let {
            routesMeta: r
        } = t, n = {}, i = "/", s = [];
        for (let o = 0; o < r.length; ++o) {
            let a = r[o],
                l = o === r.length - 1,
                u = i === "/" ? e : e.slice(i.length) || "/",
                c = Rf({
                    path: a.relativePath,
                    caseSensitive: a.caseSensitive,
                    end: l
                }, u);
            if (!c) return null;
            Object.assign(n, c.params);
            let f = a.route;
            s.push({
                params: n,
                pathname: gi([i, c.pathname]),
                pathnameBase: dy(gi([i, c.pathnameBase])),
                route: f
            }), c.pathnameBase !== "/" && (i = gi([i, c.pathnameBase]))
        }
        return s
    }

    function Rf(t, e) {
        typeof t == "string" && (t = {
            path: t,
            caseSensitive: !1,
            end: !0
        });
        let [r, n] = ay(t.path, t.caseSensitive, t.end), i = e.match(r);
        if (!i) return null;
        let s = i[0],
            o = s.replace(/(.)\/+$/, "$1"),
            a = i.slice(1);
        return {
            params: n.reduce((u, c, f) => {
                let {
                    paramName: d,
                    isOptional: h
                } = c;
                if (d === "*") {
                    let g = a[f] || "";
                    o = s.slice(0, s.length - g.length).replace(/(.)\/+$/, "$1")
                }
                const y = a[f];
                return h && !y ? u[d] = void 0 : u[d] = (y || "").replace(/%2F/g, "/"), u
            }, {}),
            pathname: s,
            pathnameBase: o,
            pattern: t
        }
    }

    function ay(t, e, r) {
        e === void 0 && (e = !1), r === void 0 && (r = !0), h8(t === "*" || !t.endsWith("*") || t.endsWith("/*"), 'Route path "' + t + '" will be treated as if it were ' + ('"' + t.replace(/\*$/, "/*") + '" because the `*` character must ') + "always follow a `/` in the pattern. To get rid of this warning, " + ('please change the route path to "' + t.replace(/\*$/, "/*") + '".'));
        let n = [],
            i = "^" + t.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, (o, a, l) => (n.push({
                paramName: a,
                isOptional: l != null
            }), l ? "/?([^\\/]+)?" : "/([^\\/]+)"));
        return t.endsWith("*") ? (n.push({
            paramName: "*"
        }), i += t === "*" || t === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : r ? i += "\\/*$" : t !== "" && t !== "/" && (i += "(?:(?=\\/|$))"), [new RegExp(i, e ? void 0 : "i"), n]
    }

    function ly(t) {
        try {
            return t.split("/").map(e => decodeURIComponent(e).replace(/\//g, "%2F")).join("/")
        } catch (e) {
            return h8(!1, 'The URL path "' + t + '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' + ("encoding (" + e + ").")), t
        }
    }

    function Ao(t, e) {
        if (e === "/") return t;
        if (!t.toLowerCase().startsWith(e.toLowerCase())) return null;
        let r = e.endsWith("/") ? e.length - 1 : e.length,
            n = t.charAt(r);
        return n && n !== "/" ? null : t.slice(r) || "/"
    }

    function uy(t, e) {
        e === void 0 && (e = "/");
        let {
            pathname: r,
            search: n = "",
            hash: i = ""
        } = typeof t == "string" ? To(t) : t;
        return {
            pathname: r ? r.startsWith("/") ? r : cy(r, e) : e,
            search: hy(n),
            hash: py(i)
        }
    }

    function cy(t, e) {
        let r = e.replace(/\/+$/, "").split("/");
        return t.split("/").forEach(i => {
            i === ".." ? r.length > 1 && r.pop() : i !== "." && r.push(i)
        }), r.length > 1 ? r.join("/") : "/"
    }

    function Z2(t, e, r, n) {
        return "Cannot include a '" + t + "' character in a manually specified " + ("`to." + e + "` field [" + JSON.stringify(n) + "].  Please separate it out to the ") + ("`to." + r + "` field. Alternatively you may provide the full path as ") + 'a string in <Link to="..."> and the router will parse it for you.'
    }

    function fy(t) {
        return t.filter((e, r) => r === 0 || e.route.path && e.route.path.length > 0)
    }

    function g8(t, e) {
        let r = fy(t);
        return e ? r.map((n, i) => i === t.length - 1 ? n.pathname : n.pathnameBase) : r.map(n => n.pathnameBase)
    }

    function v8(t, e, r, n) {
        n === void 0 && (n = !1);
        let i;
        typeof t == "string" ? i = To(t) : (i = dl({}, t), De(!i.pathname || !i.pathname.includes("?"), Z2("?", "pathname", "search", i)), De(!i.pathname || !i.pathname.includes("#"), Z2("#", "pathname", "hash", i)), De(!i.search || !i.search.includes("#"), Z2("#", "search", "hash", i)));
        let s = t === "" || i.pathname === "",
            o = s ? "/" : i.pathname,
            a;
        if (o == null) a = r;
        else {
            let f = e.length - 1;
            if (!n && o.startsWith("..")) {
                let d = o.split("/");
                for (; d[0] === "..";) d.shift(), f -= 1;
                i.pathname = d.join("/")
            }
            a = f >= 0 ? e[f] : "/"
        }
        let l = uy(i, a),
            u = o && o !== "/" && o.endsWith("/"),
            c = (s || o === ".") && r.endsWith("/");
        return !l.pathname.endsWith("/") && (u || c) && (l.pathname += "/"), l
    }
    const gi = t => t.join("/").replace(/\/\/+/g, "/"),
        dy = t => t.replace(/\/+$/, "").replace(/^\/*/, "/"),
        hy = t => !t || t === "?" ? "" : t.startsWith("?") ? t : "?" + t,
        py = t => !t || t === "#" ? "" : t.startsWith("#") ? t : "#" + t;

    function my(t) {
        return t != null && typeof t.status == "number" && typeof t.statusText == "string" && typeof t.internal == "boolean" && "data" in t
    }
    const y8 = ["post", "put", "patch", "delete"];
    new Set(y8);
    const gy = ["get", ...y8];
    new Set(gy);
    /**
     * React Router v6.23.1
     *
     * Copyright (c) Remix Software Inc.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE.md file in the root directory of this source tree.
     *
     * @license MIT
     */
    function hl() {
        return hl = Object.assign ? Object.assign.bind() : function(t) {
            for (var e = 1; e < arguments.length; e++) {
                var r = arguments[e];
                for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n])
            }
            return t
        }, hl.apply(this, arguments)
    }
    const Wu = M.createContext(null),
        x8 = M.createContext(null),
        Ei = M.createContext(null),
        Qu = M.createContext(null),
        ws = M.createContext({
            outlet: null,
            matches: [],
            isDataRoute: !1
        }),
        _8 = M.createContext(null);

    function vy(t, e) {
        let {
            relative: r
        } = e === void 0 ? {} : e;
        Pl() || De(!1);
        let {
            basename: n,
            navigator: i
        } = M.useContext(Ei), {
            hash: s,
            pathname: o,
            search: a
        } = Yu(t, {
            relative: r
        }), l = o;
        return n !== "/" && (l = o === "/" ? n : gi([n, o])), i.createHref({
            pathname: l,
            search: a,
            hash: s
        })
    }

    function Pl() {
        return M.useContext(Qu) != null
    }

    function ji() {
        return Pl() || De(!1), M.useContext(Qu).location
    }

    function w8(t) {
        M.useContext(Ei).static || M.useLayoutEffect(t)
    }

    function yy() {
        let {
            isDataRoute: t
        } = M.useContext(ws);
        return t ? My() : xy()
    }

    function xy() {
        Pl() || De(!1);
        let t = M.useContext(Wu),
            {
                basename: e,
                future: r,
                navigator: n
            } = M.useContext(Ei),
            {
                matches: i
            } = M.useContext(ws),
            {
                pathname: s
            } = ji(),
            o = JSON.stringify(g8(i, r.v7_relativeSplatPath)),
            a = M.useRef(!1);
        return w8(() => {
            a.current = !0
        }), M.useCallback(function(u, c) {
            if (c === void 0 && (c = {}), !a.current) return;
            if (typeof u == "number") {
                n.go(u);
                return
            }
            let f = v8(u, JSON.parse(o), s, c.relative === "path");
            t == null && e !== "/" && (f.pathname = f.pathname === "/" ? e : gi([e, f.pathname])), (c.replace ? n.replace : n.push)(f, c.state, c)
        }, [e, n, o, s, t])
    }

    function Yu(t, e) {
        let {
            relative: r
        } = e === void 0 ? {} : e, {
            future: n
        } = M.useContext(Ei), {
            matches: i
        } = M.useContext(ws), {
            pathname: s
        } = ji(), o = JSON.stringify(g8(i, n.v7_relativeSplatPath));
        return M.useMemo(() => v8(t, JSON.parse(o), s, r === "path"), [t, o, s, r])
    }

    function _y(t, e) {
        return wy(t, e)
    }

    function wy(t, e, r, n) {
        Pl() || De(!1);
        let {
            navigator: i
        } = M.useContext(Ei), {
            matches: s
        } = M.useContext(ws), o = s[s.length - 1], a = o ? o.params : {};
        o && o.pathname;
        let l = o ? o.pathnameBase : "/";
        o && o.route;
        let u = ji(),
            c;
        if (e) {
            var f;
            let w = typeof e == "string" ? To(e) : e;
            l === "/" || (f = w.pathname) != null && f.startsWith(l) || De(!1), c = w
        } else c = u;
        let d = c.pathname || "/",
            h = d;
        if (l !== "/") {
            let w = l.replace(/^\//, "").split("/");
            h = "/" + d.replace(/^\//, "").split("/").slice(w.length).join("/")
        }
        let y = K9(t, {
                pathname: h
            }),
            g = Py(y && y.map(w => Object.assign({}, w, {
                params: Object.assign({}, a, w.params),
                pathname: gi([l, i.encodeLocation ? i.encodeLocation(w.pathname).pathname : w.pathname]),
                pathnameBase: w.pathnameBase === "/" ? l : gi([l, i.encodeLocation ? i.encodeLocation(w.pathnameBase).pathname : w.pathnameBase])
            })), s, r, n);
        return e && g ? M.createElement(Qu.Provider, {
            value: {
                location: hl({
                    pathname: "/",
                    search: "",
                    hash: "",
                    state: null,
                    key: "default"
                }, c),
                navigationType: ni.Pop
            }
        }, g) : g
    }

    function Cy() {
        let t = jy(),
            e = my(t) ? t.status + " " + t.statusText : t instanceof Error ? t.message : JSON.stringify(t),
            r = t instanceof Error ? t.stack : null,
            i = {
                padding: "0.5rem",
                backgroundColor: "rgba(200,200,200, 0.5)"
            };
        return M.createElement(M.Fragment, null, M.createElement("h2", null, "Unexpected Application Error!"), M.createElement("h3", {
            style: {
                fontStyle: "italic"
            }
        }, e), r ? M.createElement("pre", {
            style: i
        }, r) : null, null)
    }
    const Ay = M.createElement(Cy, null);
    class Sy extends M.Component {
        constructor(e) {
            super(e), this.state = {
                location: e.location,
                revalidation: e.revalidation,
                error: e.error
            }
        }
        static getDerivedStateFromError(e) {
            return {
                error: e
            }
        }
        static getDerivedStateFromProps(e, r) {
            return r.location !== e.location || r.revalidation !== "idle" && e.revalidation === "idle" ? {
                error: e.error,
                location: e.location,
                revalidation: e.revalidation
            } : {
                error: e.error !== void 0 ? e.error : r.error,
                location: r.location,
                revalidation: e.revalidation || r.revalidation
            }
        }
        componentDidCatch(e, r) {
            console.error("React Router caught the following error during render", e, r)
        }
        render() {
            return this.state.error !== void 0 ? M.createElement(ws.Provider, {
                value: this.props.routeContext
            }, M.createElement(_8.Provider, {
                value: this.state.error,
                children: this.props.component
            })) : this.props.children
        }
    }

    function ky(t) {
        let {
            routeContext: e,
            match: r,
            children: n
        } = t, i = M.useContext(Wu);
        return i && i.static && i.staticContext && (r.route.errorElement || r.route.ErrorBoundary) && (i.staticContext._deepestRenderedBoundaryId = r.route.id), M.createElement(ws.Provider, {
            value: e
        }, n)
    }

    function Py(t, e, r, n) {
        var i;
        if (e === void 0 && (e = []), r === void 0 && (r = null), n === void 0 && (n = null), t == null) {
            var s;
            if ((s = r) != null && s.errors) t = r.matches;
            else return null
        }
        let o = t,
            a = (i = r) == null ? void 0 : i.errors;
        if (a != null) {
            let c = o.findIndex(f => f.route.id && (a == null ? void 0 : a[f.route.id]) !== void 0);
            c >= 0 || De(!1), o = o.slice(0, Math.min(o.length, c + 1))
        }
        let l = !1,
            u = -1;
        if (r && n && n.v7_partialHydration)
            for (let c = 0; c < o.length; c++) {
                let f = o[c];
                if ((f.route.HydrateFallback || f.route.hydrateFallbackElement) && (u = c), f.route.id) {
                    let {
                        loaderData: d,
                        errors: h
                    } = r, y = f.route.loader && d[f.route.id] === void 0 && (!h || h[f.route.id] === void 0);
                    if (f.route.lazy || y) {
                        l = !0, u >= 0 ? o = o.slice(0, u + 1) : o = [o[0]];
                        break
                    }
                }
            }
        return o.reduceRight((c, f, d) => {
            let h, y = !1,
                g = null,
                w = null;
            r && (h = a && f.route.id ? a[f.route.id] : void 0, g = f.route.errorElement || Ay, l && (u < 0 && d === 0 ? (y = !0, w = null) : u === d && (y = !0, w = f.route.hydrateFallbackElement || null)));
            let v = e.concat(o.slice(0, d + 1)),
                p = () => {
                    let x;
                    return h ? x = g : y ? x = w : f.route.Component ? x = M.createElement(f.route.Component, null) : f.route.element ? x = f.route.element : x = c, M.createElement(ky, {
                        match: f,
                        routeContext: {
                            outlet: c,
                            matches: v,
                            isDataRoute: r != null
                        },
                        children: x
                    })
                };
            return r && (f.route.ErrorBoundary || f.route.errorElement || d === 0) ? M.createElement(Sy, {
                location: r.location,
                revalidation: r.revalidation,
                component: g,
                error: h,
                children: p(),
                routeContext: {
                    outlet: null,
                    matches: v,
                    isDataRoute: !0
                }
            }) : p()
        }, null)
    }
    var C8 = function(t) {
            return t.UseBlocker = "useBlocker", t.UseRevalidator = "useRevalidator", t.UseNavigateStable = "useNavigate", t
        }(C8 || {}),
        mu = function(t) {
            return t.UseBlocker = "useBlocker", t.UseLoaderData = "useLoaderData", t.UseActionData = "useActionData", t.UseRouteError = "useRouteError", t.UseNavigation = "useNavigation", t.UseRouteLoaderData = "useRouteLoaderData", t.UseMatches = "useMatches", t.UseRevalidator = "useRevalidator", t.UseNavigateStable = "useNavigate", t.UseRouteId = "useRouteId", t
        }(mu || {});

    function by(t) {
        let e = M.useContext(Wu);
        return e || De(!1), e
    }

    function Ty(t) {
        let e = M.useContext(x8);
        return e || De(!1), e
    }

    function Ey(t) {
        let e = M.useContext(ws);
        return e || De(!1), e
    }

    function A8(t) {
        let e = Ey(),
            r = e.matches[e.matches.length - 1];
        return r.route.id || De(!1), r.route.id
    }

    function jy() {
        var t;
        let e = M.useContext(_8),
            r = Ty(mu.UseRouteError),
            n = A8(mu.UseRouteError);
        return e !== void 0 ? e : (t = r.errors) == null ? void 0 : t[n]
    }

    function My() {
        let {
            router: t
        } = by(C8.UseNavigateStable), e = A8(mu.UseNavigateStable), r = M.useRef(!1);
        return w8(() => {
            r.current = !0
        }), M.useCallback(function(i, s) {
            s === void 0 && (s = {}), r.current && (typeof i == "number" ? t.navigate(i) : t.navigate(i, hl({
                fromRouteId: e
            }, s)))
        }, [t, e])
    }

    function Nf(t) {
        De(!1)
    }

    function Ry(t) {
        let {
            basename: e = "/",
            children: r = null,
            location: n,
            navigationType: i = ni.Pop,
            navigator: s,
            static: o = !1,
            future: a
        } = t;
        Pl() && De(!1);
        let l = e.replace(/^\/*/, "/"),
            u = M.useMemo(() => ({
                basename: l,
                navigator: s,
                static: o,
                future: hl({
                    v7_relativeSplatPath: !1
                }, a)
            }), [l, a, s, o]);
        typeof n == "string" && (n = To(n));
        let {
            pathname: c = "/",
            search: f = "",
            hash: d = "",
            state: h = null,
            key: y = "default"
        } = n, g = M.useMemo(() => {
            let w = Ao(c, l);
            return w == null ? null : {
                location: {
                    pathname: w,
                    search: f,
                    hash: d,
                    state: h,
                    key: y
                },
                navigationType: i
            }
        }, [l, c, f, d, h, y, i]);
        return g == null ? null : M.createElement(Ei.Provider, {
            value: u
        }, M.createElement(Qu.Provider, {
            children: r,
            value: g
        }))
    }

    function Ny(t) {
        let {
            children: e,
            location: r
        } = t;
        return _y(Lf(e), r)
    }
    new Promise(() => {});

    function Lf(t, e) {
        e === void 0 && (e = []);
        let r = [];
        return M.Children.forEach(t, (n, i) => {
            if (!M.isValidElement(n)) return;
            let s = [...e, i];
            if (n.type === M.Fragment) {
                r.push.apply(r, Lf(n.props.children, s));
                return
            }
            n.type !== Nf && De(!1), !n.props.index || !n.props.children || De(!1);
            let o = {
                id: n.props.id || s.join("-"),
                caseSensitive: n.props.caseSensitive,
                element: n.props.element,
                Component: n.props.Component,
                index: n.props.index,
                path: n.props.path,
                loader: n.props.loader,
                action: n.props.action,
                errorElement: n.props.errorElement,
                ErrorBoundary: n.props.ErrorBoundary,
                hasErrorBoundary: n.props.ErrorBoundary != null || n.props.errorElement != null,
                shouldRevalidate: n.props.shouldRevalidate,
                handle: n.props.handle,
                lazy: n.props.lazy
            };
            n.props.children && (o.children = Lf(n.props.children, s)), r.push(o)
        }), r
    }
    /**
     * React Router DOM v6.23.1
     *
     * Copyright (c) Remix Software Inc.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE.md file in the root directory of this source tree.
     *
     * @license MIT
     */
    function gu() {
        return gu = Object.assign ? Object.assign.bind() : function(t) {
            for (var e = 1; e < arguments.length; e++) {
                var r = arguments[e];
                for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n])
            }
            return t
        }, gu.apply(this, arguments)
    }

    function S8(t, e) {
        if (t == null) return {};
        var r = {},
            n = Object.keys(t),
            i, s;
        for (s = 0; s < n.length; s++) i = n[s], !(e.indexOf(i) >= 0) && (r[i] = t[i]);
        return r
    }

    function Ly(t) {
        return !!(t.metaKey || t.altKey || t.ctrlKey || t.shiftKey)
    }

    function Oy(t, e) {
        return t.button === 0 && (!e || e === "_self") && !Ly(t)
    }
    const zy = ["onClick", "relative", "reloadDocument", "replace", "state", "target", "to", "preventScrollReset", "unstable_viewTransition"],
        Iy = ["aria-current", "caseSensitive", "className", "end", "style", "to", "unstable_viewTransition", "children"],
        Dy = "6";
    try {
        window.__reactRouterVersion = Dy
    } catch {}
    const Fy = M.createContext({
            isTransitioning: !1
        }),
        By = "startTransition",
        _p = w4[By];

    function $y(t) {
        let {
            basename: e,
            children: r,
            future: n,
            window: i
        } = t, s = M.useRef();
        s.current == null && (s.current = Q9({
            window: i,
            v5Compat: !0
        }));
        let o = s.current,
            [a, l] = M.useState({
                action: o.action,
                location: o.location
            }),
            {
                v7_startTransition: u
            } = n || {},
            c = M.useCallback(f => {
                u && _p ? _p(() => l(f)) : l(f)
            }, [l, u]);
        return M.useLayoutEffect(() => o.listen(c), [o, c]), M.createElement(Ry, {
            basename: e,
            children: r,
            location: a.location,
            navigationType: a.action,
            navigator: o,
            future: n
        })
    }
    const Hy = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u",
        Vy = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
        ps = M.forwardRef(function(e, r) {
            let {
                onClick: n,
                relative: i,
                reloadDocument: s,
                replace: o,
                state: a,
                target: l,
                to: u,
                preventScrollReset: c,
                unstable_viewTransition: f
            } = e, d = S8(e, zy), {
                basename: h
            } = M.useContext(Ei), y, g = !1;
            if (typeof u == "string" && Vy.test(u) && (y = u, Hy)) try {
                let x = new URL(window.location.href),
                    _ = u.startsWith("//") ? new URL(x.protocol + u) : new URL(u),
                    C = Ao(_.pathname, h);
                _.origin === x.origin && C != null ? u = C + _.search + _.hash : g = !0
            } catch {}
            let w = vy(u, {
                    relative: i
                }),
                v = Gy(u, {
                    replace: o,
                    state: a,
                    target: l,
                    preventScrollReset: c,
                    relative: i,
                    unstable_viewTransition: f
                });

            function p(x) {
                n && n(x), x.defaultPrevented || v(x)
            }
            return M.createElement("a", gu({}, d, {
                href: y || w,
                onClick: g || s ? n : p,
                ref: r,
                target: l
            }))
        }),
        k8 = M.forwardRef(function(e, r) {
            let {
                "aria-current": n = "page",
                caseSensitive: i = !1,
                className: s = "",
                end: o = !1,
                style: a,
                to: l,
                unstable_viewTransition: u,
                children: c
            } = e, f = S8(e, Iy), d = Yu(l, {
                relative: f.relative
            }), h = ji(), y = M.useContext(x8), {
                navigator: g,
                basename: w
            } = M.useContext(Ei), v = y != null && Wy(d) && u === !0, p = g.encodeLocation ? g.encodeLocation(d).pathname : d.pathname, x = h.pathname, _ = y && y.navigation && y.navigation.location ? y.navigation.location.pathname : null;
            i || (x = x.toLowerCase(), _ = _ ? _.toLowerCase() : null, p = p.toLowerCase()), _ && w && (_ = Ao(_, w) || _);
            const C = p !== "/" && p.endsWith("/") ? p.length - 1 : p.length;
            let k = x === p || !o && x.startsWith(p) && x.charAt(C) === "/",
                S = _ != null && (_ === p || !o && _.startsWith(p) && _.charAt(p.length) === "/"),
                P = {
                    isActive: k,
                    isPending: S,
                    isTransitioning: v
                },
                T = k ? n : void 0,
                b;
            typeof s == "function" ? b = s(P) : b = [s, k ? "active" : null, S ? "pending" : null, v ? "transitioning" : null].filter(Boolean).join(" ");
            let I = typeof a == "function" ? a(P) : a;
            return M.createElement(ps, gu({}, f, {
                "aria-current": T,
                className: b,
                ref: r,
                style: I,
                to: l,
                unstable_viewTransition: u
            }), typeof c == "function" ? c(P) : c)
        });
    var Of;
    (function(t) {
        t.UseScrollRestoration = "useScrollRestoration", t.UseSubmit = "useSubmit", t.UseSubmitFetcher = "useSubmitFetcher", t.UseFetcher = "useFetcher", t.useViewTransitionState = "useViewTransitionState"
    })(Of || (Of = {}));
    var wp;
    (function(t) {
        t.UseFetcher = "useFetcher", t.UseFetchers = "useFetchers", t.UseScrollRestoration = "useScrollRestoration"
    })(wp || (wp = {}));

    function Uy(t) {
        let e = M.useContext(Wu);
        return e || De(!1), e
    }

    function Gy(t, e) {
        let {
            target: r,
            replace: n,
            state: i,
            preventScrollReset: s,
            relative: o,
            unstable_viewTransition: a
        } = e === void 0 ? {} : e, l = yy(), u = ji(), c = Yu(t, {
            relative: o
        });
        return M.useCallback(f => {
            if (Oy(f, r)) {
                f.preventDefault();
                let d = n !== void 0 ? n : pu(u) === pu(c);
                l(t, {
                    replace: d,
                    state: i,
                    preventScrollReset: s,
                    relative: o,
                    unstable_viewTransition: a
                })
            }
        }, [u, l, c, n, i, r, t, s, o, a])
    }

    function Wy(t, e) {
        e === void 0 && (e = {});
        let r = M.useContext(Fy);
        r == null && De(!1);
        let {
            basename: n
        } = Uy(Of.useViewTransitionState), i = Yu(t, {
            relative: e.relative
        });
        if (!r.isTransitioning) return !1;
        let s = Ao(r.currentLocation.pathname, n) || r.currentLocation.pathname,
            o = Ao(r.nextLocation.pathname, n) || r.nextLocation.pathname;
        return Rf(i.pathname, o) != null || Rf(i.pathname, s) != null
    }
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    var zf = function() {
        return zf = Object.assign || function(e) {
            for (var r, n = 1, i = arguments.length; n < i; n++) {
                r = arguments[n];
                for (var s in r) Object.prototype.hasOwnProperty.call(r, s) && (e[s] = r[s])
            }
            return e
        }, zf.apply(this, arguments)
    };

    function Qy(t, e) {
        var r = {};
        for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && e.indexOf(n) < 0 && (r[n] = t[n]);
        if (t != null && typeof Object.getOwnPropertySymbols == "function")
            for (var i = 0, n = Object.getOwnPropertySymbols(t); i < n.length; i++) e.indexOf(n[i]) < 0 && Object.prototype.propertyIsEnumerable.call(t, n[i]) && (r[n[i]] = t[n[i]]);
        return r
    }
    var oo = "",
        Ea = null,
        E0 = null,
        P8 = null;

    function Ad() {
        oo = "", Ea !== null && Ea.disconnect(), E0 !== null && (window.clearTimeout(E0), E0 = null)
    }

    function Cp(t) {
        var e = ["BUTTON", "INPUT", "SELECT", "TEXTAREA"],
            r = ["A", "AREA"];
        return e.includes(t.tagName) && !t.hasAttribute("disabled") || r.includes(t.tagName) && t.hasAttribute("href")
    }

    function Ap() {
        var t = null;
        if (oo === "#") t = document.body;
        else {
            var e = oo.replace("#", "");
            t = document.getElementById(e), t === null && oo === "#top" && (t = document.body)
        }
        if (t !== null) {
            P8(t);
            var r = t.getAttribute("tabindex");
            return r === null && !Cp(t) && t.setAttribute("tabindex", -1), t.focus({
                preventScroll: !0
            }), r === null && !Cp(t) && (t.blur(), t.removeAttribute("tabindex")), Ad(), !0
        }
        return !1
    }

    function Yy(t) {
        window.setTimeout(function() {
            Ap() === !1 && (Ea === null && (Ea = new MutationObserver(Ap)), Ea.observe(document, {
                attributes: !0,
                childList: !0,
                subtree: !0
            }), E0 = window.setTimeout(function() {
                Ad()
            }, t || 1e4))
        }, 0)
    }

    function b8(t) {
        return Mr.forwardRef(function(e, r) {
            var n = "";
            typeof e.to == "string" && e.to.includes("#") ? n = "#" + e.to.split("#").slice(1).join("#") : typeof e.to == "object" && typeof e.to.hash == "string" && (n = e.to.hash);
            var i = {};
            t === k8 && (i.isActive = function(a, l) {
                return a && a.isExact && l.hash === n
            });

            function s(a) {
                Ad(), oo = e.elementId ? "#" + e.elementId : n, e.onClick && e.onClick(a), oo !== "" && !a.defaultPrevented && a.button === 0 && (!e.target || e.target === "_self") && !(a.metaKey || a.altKey || a.ctrlKey || a.shiftKey) && (P8 = e.scroll || function(l) {
                    return e.smooth ? l.scrollIntoView({
                        behavior: "smooth"
                    }) : l.scrollIntoView()
                }, Yy(e.timeout))
            }
            var o = Qy(e, ["scroll", "smooth", "timeout", "elementId"]);
            return Mr.createElement(t, zf({}, i, o, {
                onClick: s,
                ref: r
            }), e.children)
        })
    }
    var T8 = b8(ps);
    b8(k8);
    const E8 = "data:image/svg+xml,%3csvg%20width='20'%20height='21'%20viewBox='0%200%2020%2021'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_408_1407)'%3e%3cpath%20d='M10.0003%2018.4443C11.0949%2018.4457%2012.1789%2018.2308%2013.1902%2017.8119C14.2014%2017.393%2015.1199%2016.7784%2015.8928%2016.0034C16.6678%2015.2305%2017.2824%2014.312%2017.7013%2013.3008C18.1202%2012.2895%2018.3351%2011.2055%2018.3337%2010.1109C18.3351%209.01638%2018.1201%207.93234%2017.7013%206.92111C17.2824%205.90988%2016.6678%204.99139%2015.8928%204.21843C15.1199%203.44344%2014.2014%202.82884%2013.1902%202.40996C12.1789%201.99108%2011.0949%201.77618%2010.0003%201.77759C8.90578%201.7762%207.82174%201.99112%206.81051%202.41C5.79928%202.82887%204.88079%203.44346%204.10783%204.21843C3.33286%204.99139%202.71828%205.90988%202.2994%206.92111C1.88052%207.93234%201.6656%209.01638%201.667%2010.1109C1.66558%2011.2055%201.88049%2012.2895%202.29937%2013.3008C2.71825%2014.312%203.33284%2015.2305%204.10783%2016.0034C4.88079%2016.7784%205.79928%2017.393%206.81051%2017.8119C7.82174%2018.2307%208.90578%2018.4457%2010.0003%2018.4443Z'%20stroke='%238A73FA'%20stroke-width='2'%20stroke-linejoin='round'/%3e%3cpath%20d='M6.66699%2010.1108L9.16699%2012.6108L14.167%207.61084'%20stroke='%238A73FA'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_408_1407'%3e%3crect%20width='20'%20height='20'%20fill='white'%20transform='translate(0%200.11084)'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",
        Eo = "data:image/svg+xml,%3csvg%20width='25'%20height='24'%20viewBox='0%200%2025%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M18.5%207.05C18.5%206.78478%2018.3946%206.53043%2018.2071%206.34289C18.0196%206.15536%2017.7652%206.05%2017.5%206.05L9.5%206C9.23478%206%208.98043%206.10536%208.79289%206.29289C8.60536%206.48043%208.5%206.73478%208.5%207C8.5%207.26522%208.60536%207.51957%208.79289%207.70711C8.98043%207.89464%209.23478%208%209.5%208H15.06L6.79%2016.29C6.69627%2016.383%206.62188%2016.4936%206.57111%2016.6154C6.52034%2016.7373%206.4942%2016.868%206.4942%2017C6.4942%2017.132%206.52034%2017.2627%206.57111%2017.3846C6.62188%2017.5064%206.69627%2017.617%206.79%2017.71C6.88296%2017.8037%206.99356%2017.8781%207.11542%2017.9289C7.23728%2017.9797%207.36799%2018.0058%207.5%2018.0058C7.63201%2018.0058%207.76272%2017.9797%207.88458%2017.9289C8.00644%2017.8781%208.11704%2017.8037%208.21%2017.71L16.5%209.42V15C16.5%2015.2652%2016.6054%2015.5196%2016.7929%2015.7071C16.9804%2015.8946%2017.2348%2016%2017.5%2016C17.7652%2016%2018.0196%2015.8946%2018.2071%2015.7071C18.3946%2015.5196%2018.5%2015.2652%2018.5%2015V7.05Z'%20fill='white'/%3e%3c/svg%3e",
        qy = "data:image/svg+xml,%3csvg%20width='24'%20height='25'%20viewBox='0%200%2024%2025'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M18%209.46798V10.6108M18%209.46798C16.9878%209.46798%2016.0961%208.96291%2015.573%208.19601M18%209.46798C19.0122%209.46798%2019.9039%208.96291%2020.427%208.19601M15.573%208.19601L14.5004%208.89655M15.573%208.19601C15.2637%207.74243%2015.0833%207.19727%2015.0833%206.61084C15.0833%206.02448%2015.2636%205.47938%2015.5729%205.02584M20.427%208.19601L21.4996%208.89655M20.427%208.19601C20.7363%207.74243%2020.9167%207.19727%2020.9167%206.61084C20.9167%206.02448%2020.7364%205.47938%2020.4271%205.02584M18%203.7537C19.0123%203.7537%2019.9041%204.25884%2020.4271%205.02584M18%203.7537C16.9877%203.7537%2016.0959%204.25884%2015.5729%205.02584M18%203.7537V2.61084M20.4271%205.02584L21.5%204.32513M15.5729%205.02584L14.5%204.32513'%20stroke='%238A73FA'%20stroke-width='2.875'%20stroke-linecap='round'/%3e%3cpath%20d='M2%206.11084C2%204.71071%202%204.01064%202.27248%203.47586C2.51217%203.00546%202.89462%202.62301%203.36502%202.38332C3.8998%202.11084%204.59987%202.11084%206%202.11084C7.40013%202.11084%208.1002%202.11084%208.63498%202.38332C9.10538%202.62301%209.48783%203.00546%209.72752%203.47586C10%204.01064%2010%204.71071%2010%206.11084C10%207.51097%2010%208.21104%209.72752%208.74582C9.48783%209.21622%209.10538%209.59867%208.63498%209.83836C8.1002%2010.1108%207.40013%2010.1108%206%2010.1108C4.59987%2010.1108%203.8998%2010.1108%203.36502%209.83836C2.89462%209.59867%202.51217%209.21622%202.27248%208.74582C2%208.21104%202%207.51097%202%206.11084Z'%20fill='%23F0AC88'%20stroke='%23F0AC88'/%3e%3cpath%20d='M2%2018.1108C2%2016.7107%202%2016.0106%202.27248%2015.4758C2.51217%2015.0054%202.89462%2014.623%203.36502%2014.3833C3.8998%2014.1108%204.59987%2014.1108%206%2014.1108C7.40013%2014.1108%208.1002%2014.1108%208.63498%2014.3833C9.10538%2014.623%209.48783%2015.0054%209.72752%2015.4758C10%2016.0106%2010%2016.7107%2010%2018.1108C10%2019.5109%2010%2020.211%209.72752%2020.7458C9.48783%2021.2162%209.10538%2021.5986%208.63498%2021.8383C8.1002%2022.1108%207.40013%2022.1108%206%2022.1108C4.59987%2022.1108%203.8998%2022.1108%203.36502%2021.8383C2.89462%2021.5986%202.51217%2021.2162%202.27248%2020.7458C2%2020.211%202%2019.5109%202%2018.1108Z'%20fill='%23F0AC88'%20stroke='%23F0AC88'/%3e%3cpath%20d='M14%2018.1108C14%2016.7107%2014%2016.0106%2014.2725%2015.4758C14.5122%2015.0054%2014.8946%2014.623%2015.365%2014.3833C15.8998%2014.1108%2016.5999%2014.1108%2018%2014.1108C19.4001%2014.1108%2020.1002%2014.1108%2020.635%2014.3833C21.1054%2014.623%2021.4878%2015.0054%2021.7275%2015.4758C22%2016.0106%2022%2016.7107%2022%2018.1108C22%2019.5109%2022%2020.211%2021.7275%2020.7458C21.4878%2021.2162%2021.1054%2021.5986%2020.635%2021.8383C20.1002%2022.1108%2019.4001%2022.1108%2018%2022.1108C16.5999%2022.1108%2015.8998%2022.1108%2015.365%2021.8383C14.8946%2021.5986%2014.5122%2021.2162%2014.2725%2020.7458C14%2020.211%2014%2019.5109%2014%2018.1108Z'%20fill='%23F0AC88'%20stroke='%23F0AC88'/%3e%3c/svg%3e",
        Ky = "data:image/svg+xml,%3csvg%20width='24'%20height='25'%20viewBox='0%200%2024%2025'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M19.3903%2011.6468H18.0938C18.0689%2011.6468%2018.045%2011.6369%2018.0275%2011.6193C18.0099%2011.6017%2018%2011.5779%2018%2011.553V7.93241C18%207.44931%2017.8081%206.98598%2017.4665%206.64437C17.1249%206.30277%2016.6615%206.11085%2016.1784%206.11085H12.5578C12.5329%206.11085%2012.5091%206.10097%2012.4915%206.08339C12.4739%206.06581%2012.4641%206.04197%2012.4641%206.0171V4.72054C12.4641%203.44835%2011.4562%202.38335%2010.1841%202.36132C9.87583%202.35591%209.56961%202.41193%209.28327%202.52612C8.99692%202.64031%208.73618%202.81039%208.51627%203.02642C8.29635%203.24245%208.12166%203.50012%208.00238%203.78439C7.88311%204.06865%207.82164%204.37383%207.82156%204.6821V6.0171C7.82156%206.04197%207.81169%206.06581%207.7941%206.08339C7.77652%206.10097%207.75268%206.11085%207.72781%206.11085H4.10719C3.61509%206.11234%203.14357%206.30848%202.7956%206.65645C2.44763%207.00442%202.25148%207.47594%202.25%207.96804V11.2671C2.25%2011.292%202.25988%2011.3158%202.27746%2011.3334C2.29504%2011.351%202.31889%2011.3609%202.34375%2011.3609H3.60516C4.98188%2011.3609%206.12141%2012.5552%206.14062%2013.9319C6.16031%2015.3321%205.03859%2016.6109%203.64266%2016.6109H2.34375C2.31889%2016.6109%202.29504%2016.6207%202.27746%2016.6383C2.25988%2016.6559%202.25%2016.6797%202.25%2016.7046V20.0037C2.25148%2020.4958%202.44763%2020.9673%202.7956%2021.3153C3.14357%2021.6632%203.61509%2021.8594%204.10719%2021.8609H7.40625C7.43111%2021.8609%207.45496%2021.851%207.47254%2021.8334C7.49012%2021.8158%207.5%2021.792%207.5%2021.7671V20.786C7.5%2019.3666%208.66016%2018.1446%2010.0781%2018.1113C11.4891%2018.0785%2012.75%2019.0634%2012.75%2020.4682V21.7671C12.75%2021.792%2012.7599%2021.8158%2012.7775%2021.8334C12.795%2021.851%2012.8189%2021.8609%2012.8438%2021.8609H16.1784C16.6615%2021.8609%2017.1249%2021.6689%2017.4665%2021.3273C17.8081%2020.9857%2018%2020.5224%2018%2020.0393V16.383C18%2016.3582%2018.0099%2016.3343%2018.0275%2016.3167C18.045%2016.2992%2018.0689%2016.2893%2018.0938%2016.2893H19.4288C20.7239%2016.2893%2021.75%2015.2266%2021.75%2013.9268C21.75%2012.6269%2020.6625%2011.6468%2019.3903%2011.6468Z'%20fill='%23F0AC88'/%3e%3c/svg%3e",
        Zy = "data:image/svg+xml,%3csvg%20width='30'%20height='31'%20viewBox='0%200%2030%2031'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M16.875%204.48584C16.875%205.52138%2016.0355%206.36084%2015%206.36084C13.9645%206.36084%2013.125%205.52138%2013.125%204.48584C13.125%203.4503%2013.9645%202.61084%2015%202.61084C16.0355%202.61084%2016.875%203.4503%2016.875%204.48584Z'%20fill='%238A73FA'%20stroke='%238A73FA'%20stroke-width='1.5'/%3e%3cpath%20d='M15%206.36084V10.1108V6.36084Z'%20fill='%238A73FA'/%3e%3cpath%20d='M15%206.36084V10.1108'%20stroke='%238A73FA'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M23.75%2014.4858H24.375C25.5432%2014.4858%2026.1274%2014.4858%2026.5625%2014.7371C26.8475%2014.9016%2027.0842%2015.1383%2027.2487%2015.4233C27.5%2015.8585%2027.5%2016.4426%2027.5%2017.6108C27.5%2018.7791%2027.5%2019.3632%2027.2487%2019.7983C27.0842%2020.0833%2026.8475%2020.3201%2026.5625%2020.4846C26.1274%2020.7358%2025.5432%2020.7358%2024.375%2020.7358H23.75'%20fill='%23F0AC88'/%3e%3cpath%20d='M23.75%2014.4858H24.375C25.5432%2014.4858%2026.1274%2014.4858%2026.5625%2014.7371C26.8475%2014.9016%2027.0842%2015.1383%2027.2487%2015.4233C27.5%2015.8585%2027.5%2016.4426%2027.5%2017.6108C27.5%2018.7791%2027.5%2019.3632%2027.2487%2019.7983C27.0842%2020.0833%2026.8475%2020.3201%2026.5625%2020.4846C26.1274%2020.7358%2025.5432%2020.7358%2024.375%2020.7358H23.75'%20stroke='%23F0AC88'%20stroke-width='1.5'%20stroke-linejoin='round'/%3e%3cpath%20d='M6.25%2014.4858H5.625C4.45673%2014.4858%203.8726%2014.4858%203.4375%2014.7371C3.15246%2014.9016%202.91576%2015.1383%202.7512%2015.4233C2.5%2015.8585%202.5%2016.4426%202.5%2017.6108C2.5%2018.7791%202.5%2019.3632%202.7512%2019.7983C2.91576%2020.0833%203.15246%2020.3201%203.4375%2020.4846C3.8726%2020.7358%204.45673%2020.7358%205.625%2020.7358H6.25'%20fill='%23F0AC88'/%3e%3cpath%20d='M6.25%2014.4858H5.625C4.45672%2014.4858%203.8726%2014.4858%203.4375%2014.7371C3.15246%2014.9016%202.91576%2015.1383%202.7512%2015.4233C2.5%2015.8585%202.5%2016.4426%202.5%2017.6108C2.5%2018.7791%202.5%2019.3632%202.7512%2019.7983C2.91576%2020.0833%203.15246%2020.3201%203.4375%2020.4846C3.8726%2020.7358%204.45672%2020.7358%205.625%2020.7358H6.25'%20stroke='%23F0AC88'%20stroke-width='1.5'%20stroke-linejoin='round'/%3e%3cpath%20d='M13.75%2010.1108H16.25C19.7855%2010.1108%2021.5532%2010.1108%2022.6516%2011.2092C23.75%2012.3075%2023.75%2014.0753%2023.75%2017.6108C23.75%2021.1463%2023.75%2022.9141%2022.6516%2024.0125C21.5532%2025.1108%2019.7855%2025.1108%2016.25%2025.1108H15C15%2025.1108%2014.375%2027.6108%2010%2027.6108C10%2027.6108%2011.25%2026.35%2011.25%2025.0892C9.30819%2025.0307%208.14998%2024.8141%207.34835%2024.0125C6.25%2022.9141%206.25%2021.1463%206.25%2017.6108C6.25%2014.0753%206.25%2012.3075%207.34835%2011.2092C8.4467%2010.1108%2010.2145%2010.1108%2013.75%2010.1108Z'%20fill='%23C87143'%20stroke='%23F0AC88'%20stroke-width='1.5'%20stroke-linejoin='round'/%3e%3cpath%20d='M11.25%2015.1108V16.3608M18.75%2015.1108V16.3608'%20stroke='white'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M12.5%2020.7358C12.5%2020.7358%2013.3334%2021.3608%2015%2021.3608C16.6666%2021.3608%2017.5%2020.7358%2017.5%2020.7358'%20stroke='white'%20stroke-width='1.5'%20stroke-linecap='round'/%3e%3c/svg%3e",
        Xy = "data:image/svg+xml,%3csvg%20width='24'%20height='25'%20viewBox='0%200%2024%2025'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M6.25%2010.6109C8.59721%2010.6109%2010.5%208.70805%2010.5%206.36084C10.5%204.01363%208.59721%202.11084%206.25%202.11084C3.90279%202.11084%202%204.01363%202%206.36084C2%208.70805%203.90279%2010.6109%206.25%2010.6109Z'%20fill='%23F0AC88'%20stroke='%23F0AC88'/%3e%3cpath%20d='M17.75%2022.1108C20.0972%2022.1108%2022%2020.208%2022%2017.8608C22%2015.5136%2020.0972%2013.6108%2017.75%2013.6108C15.4028%2013.6108%2013.5%2015.5136%2013.5%2017.8608C13.5%2020.208%2015.4028%2022.1108%2017.75%2022.1108Z'%20fill='%23F0AC88'%20stroke='%23F0AC88'/%3e%3cpath%20d='M6.25%2022.1108C8.59721%2022.1108%2010.5%2020.208%2010.5%2017.8608C10.5%2015.5136%208.59721%2013.6108%206.25%2013.6108C3.90279%2013.6108%202%2015.5136%202%2017.8608C2%2020.208%203.90279%2022.1108%206.25%2022.1108Z'%20fill='%23F0AC88'%20stroke='%23F0AC88'/%3e%3cpath%20d='M20.8678%202.55017L21.5602%203.24254C22.146%203.82832%2022.146%204.77807%2021.5602%205.36386L17.9328%209.05953C17.6474%209.34487%2017.2824%209.53723%2016.8858%209.61132L14.6376%2010.0994C14.2827%2010.1764%2013.9666%209.86125%2014.0426%209.50608L14.5211%207.27076C14.5952%206.87407%2014.7876%206.50907%2015.0729%206.22372L18.7465%202.55017C19.3323%201.96439%2020.282%201.96439%2020.8678%202.55017Z'%20fill='%238A73FA'%20stroke='%238A73FA'/%3e%3c/svg%3e",
        Jy = "data:image/svg+xml,%3csvg%20width='25'%20height='25'%20viewBox='0%200%2025%2025'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M17%207.36084C17%209.70805%2015.0972%2011.6108%2012.75%2011.6108C10.4028%2011.6108%208.5%209.70805%208.5%207.36084C8.5%205.01363%2010.4028%203.11084%2012.75%203.11084C15.0972%203.11084%2017%205.01363%2017%207.36084Z'%20fill='%23F0AC88'%20stroke='%23F0AC88'%20stroke-width='1.5'/%3e%3cpath%20d='M23.5%2018.3608C23.5%2020.7081%2021.5972%2022.6108%2019.25%2022.6108C16.9028%2022.6108%2015%2020.7081%2015%2018.3608C15%2016.0136%2016.9028%2014.1108%2019.25%2014.1108C21.5972%2014.1108%2023.5%2016.0136%2023.5%2018.3608Z'%20fill='%238A73FA'%20stroke='%238A73FA'%20stroke-width='1.5'/%3e%3cpath%20d='M10.5%2018.3608C10.5%2020.7081%208.59721%2022.6108%206.25%2022.6108C3.90279%2022.6108%202%2020.7081%202%2018.3608C2%2016.0136%203.90279%2014.1108%206.25%2014.1108C8.59721%2014.1108%2010.5%2016.0136%2010.5%2018.3608Z'%20fill='%23F0AC88'%20stroke='%23F0AC88'%20stroke-width='1.5'/%3e%3c/svg%3e",
        j8 = [{
            name: "Dashboard",
            icon: qy,
            para: "Allows users to manage authentication, interact with GitHub repositories, track project data, and modify announcements",
            list: ["Auth", "Github integration", "Analytics", "Revenue", "Settings", "User Profile", "Modify channel announcements, templates, etc.", "Connect Telegram  channels"],
            button: !0,
            link: "http://app.microgpt.io",
            youtube: "https://www.youtube.com/embed/R95BQrmWID8?si=CDThDvCoH99VSRJW"
        }, {
            name: "Micro editor",
            para: "Combines lightweight yet strong editing capabilities with AI-powered code optimization and security checks",
            icon: Jy,
            list: ["Find ways to optimize code", "NLP Search", "Pinch to summarize", "Optimize code", "Auto code", "Security checks", "Auto organize folders", "Harmonize naming and namespaces"],
            link: "#",
            youtube: "https://www.youtube.com/embed/S4-La3rUjzI?si=ZSNT5MiXZvba0u6n",
            reversed: !0
        }, {
            name: "Editor Plugin",
            icon: Xy,
            para: "Includes capabilities such as error correction, code explanation, predictive suggestions, code search, and summary,",
            list: ["Find ways to optimize code", "Fix errors", "Logical errors", "Explain function of code", "Replace stubs", "Prediction", "NLP search", "Pinch to summarize"],
            link: "https://marketplace.visualstudio.com/items?itemName=MicroGPT.MicroGPT",
            button: !0,
            youtube: "https://www.youtube.com/embed/svOC5Uirseg?si=yUn-uDpEyPucgxCQ"
        }, {
            name: "Extension",
            icon: Ky,
            para: "Includes tools for code review, optimization, error resolution, and code logic explanation,",
            list: ["Find ways to optimize code", "Fix errors", "Logical errors", "Explain function of code", "Replace stubs"],
            link: "https://chromewebstore.google.com/detail/microgpt/gheibnaiccdpoeeacnkkcmacloeonhmc",
            button: !0,
            youtube: "https://www.youtube.com/embed/efONnz6xffg?si=KnwrWTG5xugIBLO3",
            reversed: !0
        }, {
            name: "Micro alerts",
            icon: Zy,
            para: "Detect updates and send them in a channel. Automates the delivery of update notifications and announcements",
            list: ["Detect GitHub commits", "Analyze changes with GPT", "Create an announcement based on the template created by user"],
            link: "http://app.microgpt.io/",
            button: !0,
            youtube: "https://www.youtube.com/embed/T8u0KV9KX5o?si=L1r-6z8jAht8OmQ9"
        }];

    function ex() {
        const t = j8;
        return m.jsx("div", {
            className: "case-tabs-grid grid justify-center -500:justify-start w-[90%] max-w-[1300px] gap-x-[120px] gap-y-[60px] -500:gap-[40px]",
            children: t.map(e => m.jsxs("div", {
                className: "text-white w-full max-w-[280px] flex flex-col gap-2",
                children: [m.jsxs("div", {
                    className: "flex gap-3",
                    children: [m.jsx("img", {
                        src: e.icon,
                        alt: ""
                    }), m.jsxs("span", {
                        children: [m.jsx("p", {
                            className: "uppercase text-[20px]",
                            children: e.name
                        }), e.para ? m.jsx("p", {
                            className: "text-xs text-white text-opacity-50",
                            children: e.para
                        }) : "", e.link === "#" ? m.jsx("p", {
                            className: "text-xs text-[#F0AC88] bg-[#F0AC8829] font-bold rounded-2xl p-[2px] mt-1 px-2 w-fit",
                            children: "Coming soon"
                        }) : ""]
                    })]
                }), m.jsx("hr", {
                    className: "border-opacity-20 border-white border-[1px]"
                }), m.jsx("ul", {
                    className: "flex flex-col gap-2 w-full",
                    children: e.list.map(r => m.jsxs("li", {
                        className: "flex items-start gap-2 w-[90%] -400:w-full",
                        children: [m.jsx("img", {
                            src: E8,
                            alt: ""
                        }), " ", r]
                    }, r + Math.random()))
                }), e.button ? m.jsxs("a", {
                    href: e.link,
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: "flex btn-arrow relative z-10 bg-white rounded-[8px] text-black min-w-[100px] max-w-[120px] p-[10px] py-1 justify-center font-bold gap-1",
                    children: ["Go to ", m.jsx("img", {
                        src: Eo,
                        className: "hackathon-arrow",
                        alt: ""
                    })]
                }) : ""]
            }, e.name))
        })
    }

    function ja(t) {
        function e(r) {
            const n = document.querySelector(".buy-micro-overlay"),
                i = document.querySelector("body");
            t.isBuy && (r.preventDefault(), i.classList.add("active"), n.classList.toggle("active"))
        }
        return m.jsx(m.Fragment, {
            children: m.jsx("a", {
                href: t.link ? t.link : "/",
                onClick: e,
                className: `purple-gradient-bg p-[1px] rounded-[10px] font-bold ${t.className}`,
                children: m.jsx("div", {
                    className: "bg-[#111111] rounded-[10px] font-bold text-[16px] -500:text-[14px] h-full w-full flex justify-center items-center",
                    children: m.jsx("p", {
                        children: t.content
                    })
                })
            })
        })
    }

    function M8() {
        ji(), M.useState(!1), M.useState(!1);
        const [t, e] = M.useState(!1);
        M.useEffect(() => {
            window.addEventListener("scroll", () => {
                const a = document.querySelector(".nav-desktop"),
                    l = document.querySelector(".nav-mobile");
                window.scrollY > 150 ? (a.classList.add("active"), l.classList.add("active")) : (a.classList.remove("active"), l.classList.remove("active"))
            })
        }, []);
        const r = [{
                name: "Home",
                link: "/"
            }, {
                name: "Features",
                link: "/#features",
                isSection: !0
            }, {
                name: "Innovation",
                link: "/innovation"
            }, {
                name: "Products",
                link: "/#products",
                isSection: !0,
                id: "prod-nav"
            }, {
                name: "Whitepaper",
                link: "https://microgpt.gitbook.io/microgpt"
            }, {
                name: "Pitchdeck",
                link: "/MicroGPT-Deck.pdf",
                pdf: !0
            }, {
                name: "Impression",
                link: "/microgpt-impression.pdf",
                pdf: !0
            }],
            n = M.useRef(null),
            i = M.useRef(null);

        function s() {
            const a = document.querySelector(".hamburger");
            let l = a.classList.contains("active");
            const u = document.querySelectorAll(".burger-bar"),
                c = document.querySelector(".nav-mobile");
            l ? (n.current.reverse(), i.current.reverse(), c.classList.add("active")) : (c.classList.remove("active"), n.current = fe.timeline().to(u[2], {
                y: -8,
                width: "100%",
                duration: .3,
                onComplete: () => {
                    fe.to(u[1], {
                        opacity: 0,
                        duration: .1
                    })
                }
            }).to(u[0], {
                rotate: 45,
                x: 0,
                duration: .3,
                onReverseComplete: () => {
                    fe.to(u[1], {
                        opacity: 1,
                        duration: .2
                    })
                }
            }), i.current = fe.timeline().to(u[0], {
                y: 8,
                width: "100%",
                duration: .3
            }).to(u[2], {
                rotate: -45,
                x: 0,
                duration: .3
            })), a.classList.toggle("active"), l = a.classList.contains("active"), fe.to(".nav-mobile-drawer", {
                left: l ? "0%" : "100%"
            })
        }

        function o() {
            document.getElementById("hero").scrollIntoView({
                behavior: "smooth",
                block: "end"
            })
        }
        return m.jsx(m.Fragment, {
            children: m.jsxs("nav", {
                className: "text-white z-[50] sticky top-0",
                children: [t && m.jsx("div", {
                    className: "micromsg-desktop flex justify-center items-center gap-[14px]  relative -1024:hidden",
                    children: m.jsxs("a", {
                        className: "hero-btn w-full h-fit py-2 text-center btn-arrow flex gap-2 items-center justify-center border-white border-opacity-80 font-bold  -500:text-sm -500:mt-[30px] hero-btn -500:p-[0.625rem] -500:w-[147px] -500:rounded-xl -500:px-4",
                        children: [m.jsxs("a", {
                            className: "text-center cursor-pointer text-lg",
                            href: "https://t.me/micro_drop_bot",
                            target: "_blank",
                            children: [" ", "Participate in 1M $MICRO AIRDROP"]
                        }), m.jsx("p", {
                            className: "absolute cursor-pointer -top-0 right-0",
                            onClick: () => {
                                e(!1)
                            },
                            children: m.jsx("svg", {
                                className: "cursor-pointer z-[52]",
                                width: "20px",
                                height: "20px",
                                viewBox: "0 0 24 24",
                                fill: "none",
                                xmlns: "http://www.w3.org/2000/svg",
                                children: m.jsx("path", {
                                    d: "M16 8L8 16M8.00001 8L16 16",
                                    stroke: "#fff",
                                    "stroke-width": "1.5",
                                    "stroke-linecap": "round",
                                    "stroke-linejoin": "round"
                                })
                            })
                        })]
                    })
                }), t && m.jsx("div", {
                    className: "micromsg-mobile  -1024:flex hidden justify-between  items-center z-[60] relative",
                    children: m.jsxs("a", {
                        className: "hero-btn w-full h-fit py-2 text-center btn-arrow flex gap-2 items-center justify-center border-white border-opacity-80 font-bold  -500:text-sm  hero-btn ",
                        children: [m.jsxs("a", {
                            className: "text-center cursor-pointer text-sm",
                            href: "https://t.me/micro_drop_bot",
                            target: "_blank",
                            children: [" ", "Participate in 1M $MICRO AIRDROP"]
                        }), m.jsx("p", {
                            className: "absolute cursor-pointer -top-0 right-0",
                            onClick: () => {
                                e(!1)
                            },
                            children: m.jsx("svg", {
                                className: "cursor-pointer z-[52]",
                                width: "20px",
                                height: "20px",
                                viewBox: "0 0 24 24",
                                fill: "none",
                                xmlns: "http://www.w3.org/2000/svg",
                                children: m.jsx("path", {
                                    d: "M16 8L8 16M8.00001 8L16 16",
                                    stroke: "#fff",
                                    "stroke-width": "1.5",
                                    "stroke-linecap": "round",
                                    "stroke-linejoin": "round"
                                })
                            })
                        })]
                    })
                }), m.jsxs("div", {
                    className: "nav-desktop flex justify-evenly items-center gap-[14px]  py-4 px-2 relative -1024:hidden",
                    children: [m.jsx("div", {
                        className: "absolute h-[70px] w-full overflow-hidden pointer-events-none z-[2]",
                        children: m.jsx("div", {
                            className: "w-[180px] h-[100px] bg-white blur-lg top-[50%] translate-y-[-50%] translate-x-[-50%] left-[50%] absolute opacity-0 duration-300 ease-in-out pointer-events-none"
                        })
                    }), m.jsx(ps, {
                        to: "/",
                        onClick: o,
                        children: m.jsx("img", {
                            src: h5,
                            alt: "",
                            className: "-1024:hidden h-[47px] relative z-[8]"
                        })
                    }), m.jsx("ul", {
                        className: "flex gap-[40px] -1200:gap-8 -1100:gap-[18px]   items-center justify-center -1024:flex-col",
                        children: r.map((a, l) => m.jsx(Sp, {
                            isMobile: !1,
                            link: a
                        }, `${a.name}navdesk`))
                    }), m.jsxs("div", {
                        className: "flex gap-[7px]",
                        children: [m.jsx("a", {
                            href: "https://marketplace.visualstudio.com/items?itemName=MicroGPT.MicroGPT",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className: "bg-white text-black font-bold w-[117px] py-3 rounded-[10px] p-[1px] flex justify-center items-center duration-300 ease-in-out hover:bg-opacity-70 relative z-[8]",
                            children: "Download"
                        }), m.jsx(ja, {
                            content: "Buy $MICRO",
                            isBuy: !0,
                            className: "w-[117px] h-[48px] z-[8]"
                        })]
                    })]
                }), m.jsxs("div", {
                    className: "nav-mobile-drawer hidden -1024:flex items-center  py-4 px-2 overflow-hidden fixed flex-col bg-[#111111] gap-5 -650:gap-3 w-full h-full left-[100%] top-0 justify-center",
                    children: [m.jsx("div", {
                        className: "w-[100px] h-[100px] bg-white ml-blur translate-x-[0%] absolute opacity-0 duration-300 ease-in-out pointer-events-none -1024:hidden"
                    }), m.jsx("ul", {
                        className: "flex gap-14 -1200:gap-8 -1100:gap-6 items-center justify-start -1024:flex-col -650:gap-3",
                        children: r.map((a, l) => m.jsx(Sp, {
                            isMobile: !0,
                            toggleNav: s,
                            link: a,
                            className: ""
                        }, `${a.name}navmob`))
                    }), m.jsx("a", {
                        href: "https://marketplace.visualstudio.com/items?itemName=MicroGPT.MicroGPT",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: "bg-white text-black font-bold w-[147px] py-3 rounded-[10px] p-[1px] flex justify-center items-center ",
                        children: "Download"
                    }), m.jsx(ja, {
                        content: "Buy $MICRO",
                        className: "w-[150px] h-[48px]"
                    }), m.jsx(ja, {
                        content: "Stake",
                        link: "https://stake.microgpt.io/",
                        className: "w-[150px] h-[48px]"
                    })]
                }), m.jsxs("div", {
                    className: "nav-mobile -1024:flex hidden justify-between px-5 items-center py-2 z-[60] relative",
                    children: [m.jsx(ps, {
                        to: "/",
                        onClick: () => {
                            o()
                        },
                        children: m.jsx("img", {
                            src: R7,
                            className: "h-[47px]",
                            alt: ""
                        })
                    }), m.jsxs("div", {
                        onClick: s,
                        className: "h-[25px] w-[25px] cursor-pointer hamburger flex flex-col gap-[5px] justify-center items-center",
                        children: [m.jsx("span", {
                            className: "burger-bar w-[60%] self-end translate-x-[-10%]"
                        }), m.jsx("span", {
                            className: "burger-bar w-full"
                        }), m.jsx("span", {
                            className: "burger-bar w-[60%] self-start translate-x-[10%]"
                        })]
                    })]
                })]
            })
        })
    }

    function Sp(t) {
        const {
            pathname: e
        } = ji();

        function r(n) {
            const i = n.currentTarget.textContent.toLowerCase(),
                s = document.getElementById("hero");
            i === "home" && s.scrollIntoView({
                behavior: "smooth",
                block: "end"
            })
        }
        if (!t.link.isSection && !t.link.pdf) return m.jsx(ps, {
            onClick: n => {
                r(n), t.isMobile && t.toggleNav()
            },
            target: t.link.name === "Whitepaper" ? "_blank" : "_self",
            rel: "noopener noreferrer",
            to: t.link.link,
            className: `${e.slice(1).includes(t.link.link)&&t.link.name!=="FAQ"||e.slice(1)===""&&t.link.name==="Home"?"text-opacity-100":"text-opacity-50 text-white"} cursor-pointer -1024:text-2xl -650:text-base hover:text-opacity-100 duration-300 z-[8]`,
            children: t.link.name
        }, t.link.name);
        if (t.link.isSection) return m.jsxs("div", {
            id: t.link.id,
            children: [" ", m.jsx(T8, {
                onClick: () => {
                    t.isMobile && t.toggleNav()
                },
                className: `${e.slice(1).includes(t.link.link)&&t.link.name!=="FAQ"||e.slice(1)===""&&t.link.name==="Home"?"text-opacity-100":"text-opacity-50 text-white"} cursor-pointer -1024:text-2xl -650:text-base hover:text-opacity-100 duration-300 relative z-[8]`,
                smooth: !0,
                to: t.link.link,
                children: t.link.name
            }), m.jsx("div", {
                className: "fixed left-[-100px] scale-[0.75]  w-[90%] -1200:scale-[0.7] -1100:scale-[0.6] -1100:w-[120%] -1100:top-[-50px] -1350:top-[-10px] -1350:w-[110%] -1200:top-[-10px] bg-[#2C2C2C] top-[-20px] products-dropdown rounded-3xl border-[1px] border-white border-opacity-[0.14] py-6 -1024:hidden",
                children: m.jsx(ex, {})
            })]
        });
        if (t.link.pdf) return m.jsx("a", {
            target: "_blank",
            rel: "noopener noreferrer",
            className: "text-opacity-50 text-white cursor-pointer -650:text-base -1024:text-2xl hover:text-opacity-100 duration-300 z-[8] relative",
            href: t.link.link,
            children: t.link.name
        })
    }
    const R8 = "data:image/svg+xml,%3csvg%20width='25'%20height='24'%20viewBox='0%200%2025%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cmask%20id='mask0_2003_51'%20style='mask-type:luminance'%20maskUnits='userSpaceOnUse'%20x='3'%20y='2'%20width='19'%20height='20'%3e%3cpath%20d='M3.75684%203.25635H21.2441V20.7437H3.75684V3.25635Z'%20fill='white'%20stroke='white'/%3e%3c/mask%3e%3cg%20mask='url(%23mask0_2003_51)'%3e%3cpath%20d='M17.8156%203.62256H20.6507L14.4575%2010.719L21.7441%2020.3773H16.0395L11.5682%2014.5208L6.45778%2020.3773H3.61998L10.2437%2012.7843L3.25684%203.62388H9.10675L13.1423%208.97595L17.8156%203.62256ZM16.8186%2018.6765H18.39L8.24841%205.23492H6.56342L16.8186%2018.6765Z'%20fill='white'/%3e%3c/g%3e%3c/svg%3e",
        N8 = "data:image/svg+xml,%3csvg%20width='25'%20height='24'%20viewBox='0%200%2025%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M22.4923%204.69281L22.4923%204.6928L22.4917%204.70112C22.467%205.04747%2022.3407%205.85089%2022.1666%206.95883L22.1592%207.00593C21.9841%208.12037%2021.7676%209.5038%2021.578%2010.9427L20.2837%2019.4326L20.2812%2019.4486L20.28%2019.4623L20.28%2019.4627L20.2799%2019.4635L20.2799%2019.4641L20.2796%2019.4663C20.2791%2019.4711%2020.278%2019.4799%2020.2763%2019.4922C20.2728%2019.5169%2020.2667%2019.5551%2020.2567%2019.6027C20.2363%2019.6994%2020.2015%2019.827%2020.1447%2019.9563C20.0279%2020.2225%2019.8554%2020.4216%2019.59%2020.4808C19.2792%2020.5501%2018.8062%2020.4293%2018.2988%2020.1915C17.8157%2019.965%2017.4177%2019.6885%2017.3134%2019.6049L17.3073%2019.6L17.301%2019.5953C17.2424%2019.5512%2017.0236%2019.4076%2016.7261%2019.2125C16.6641%2019.1718%2016.5986%2019.1288%2016.5305%2019.0841C16.1204%2018.8148%2015.5811%2018.4593%2015.0069%2018.0721C13.8481%2017.2907%2012.581%2016.4024%2011.9351%2015.8325L11.9351%2015.8324L11.9302%2015.8282C11.7796%2015.6988%2011.6799%2015.5531%2011.6597%2015.4256C11.6465%2015.3427%2011.6468%2015.1512%2011.988%2014.8518L11.9959%2014.8448L12.0036%2014.8376L17.6697%209.42686L17.6698%209.42697L17.6784%209.41833C17.8738%209.22237%2018.0652%208.96674%2018.1985%208.71802C18.265%208.59382%2018.3259%208.45493%2018.3614%208.31391C18.3934%208.18635%2018.4236%207.98336%2018.34%207.77962C18.236%207.52644%2018.0119%207.39621%2017.784%207.36758C17.5897%207.34316%2017.3888%207.38842%2017.2067%207.45128C16.8332%207.58022%2016.3232%207.86146%2015.6399%208.32731C15.6398%208.32737%2015.6397%208.32743%2015.6396%208.32749L8.1013%2013.4565C8.09994%2013.4572%208.09838%2013.4581%208.09662%2013.459C8.08274%2013.4661%208.05658%2013.4789%208.01833%2013.4944C7.94192%2013.5254%207.81702%2013.5676%207.64493%2013.5982C7.30375%2013.6589%206.76309%2013.6768%206.02997%2013.4566C6.02942%2013.4564%206.02887%2013.4563%206.02833%2013.4561L2.60556%2012.4001C2.59333%2012.3897%202.57983%2012.3774%202.56632%2012.3636C2.54281%2012.3396%202.52463%2012.3164%202.51265%2012.2964C2.50554%2012.2845%202.50227%2012.2765%202.50083%2012.2723C2.50602%2012.2578%202.52283%2012.2273%202.57138%2012.1786C2.68689%2012.0628%202.94282%2011.8909%203.46628%2011.6989L3.48713%2011.6913L3.50722%2011.6818C7.57435%209.76511%2012.3461%207.8187%2016.9795%205.9287C18.4746%205.31884%2019.9553%204.71485%2021.3933%204.11963L21.4005%204.11698C21.4102%204.1135%2021.426%204.10798%2021.447%204.10117C21.4893%204.08746%2021.5511%204.06902%2021.6252%204.05158C21.7794%204.01528%2021.959%203.99001%2022.1173%204.00381C22.2747%204.01754%2022.3556%204.06365%2022.3993%204.11507C22.442%204.16533%2022.5259%204.31114%2022.4923%204.69281ZM2.49912%2012.2823C2.49856%2012.2824%202.4984%2012.2796%202.50033%2012.2737C2.50064%2012.2793%202.49968%2012.2823%202.49912%2012.2823Z'%20fill='white'%20stroke='white'/%3e%3c/svg%3e",
        tx = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEkAAABICAYAAAC6L9h5AAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAPvSURBVHgB7ZyPddMwEMavTNARzAYdIWzACGECygQpE9ANBBN0BMEEZQNlg8IEHxJyW9eJrT93p8RJfu/da16fbUmf5dOdJJvowvIAcO3tI13YpRdn4+0JEedtTRciQYxelH2E/9/QueIbv/JmkYfx1tG5UCjOeYkVGtc3kovzdkunBHadshQOp+DcfSM+K4izT6yOloiv+C3aYrxdkzDvSJGrq6t7/+eTty3p89vbL1/mH1oqmI+FOFhvKzpm0KcRyPAJ/bF3CbFCo2+RFtQuRZwN3qYRm0yxQihwn2o09ve+InHwGpOF66ypBUgP589iJR3oQKxV4pjQ+0ylOPvqtyYt+jubO5zrVma+jjazfiuSor8rj6jDtRAL9QODgUSMBRkcFMSCzKhp58pQjZNGdN4M4qPQkRxbUqalSM+svDkIdXMfPP709t7//EqHBLoYqZ6FOBJ+RzmWuEAfB0F/hXI/1cQnbb19oXr/0FH0Vw4yvWrrTSyHE/NJfTL7wdsPqicEoNUrJegDSP8zWMm8+F/iktFd3ej44BsekI9DzNeqpjnAmw4OGOKSUYibOC/lGywYUS/yo+sUhxNpcP44q7e14iDmjjmzBMsSqb9GMplNnK81T348IjHK1hQH/XXXxCWjIHGRGolzB6k58YwCxURCfCy/YSniDCquLhLiMG6gh444gwakCq9eTQU/xknhwIjBShoyVXj1nWkgjkXLmVHJwhuJs6LWIPYaVuGQi47FxYHE/qfai+B1GHfQwzLEeVluotZAP8YJGNTfvPEj304ktAsAO6oAM2txpA2OPDpGejZCTyS87lw76ugYaZ8oLxJity2ZVDuIOIP6OrQSCW2i4zUJgxYi+YvcYMEBYIZIT8QFegJZ8CbhusxjXaoixAXywaBliBN6tRlcy6TEwsJEegA/Op7CYEIsLECkMFLdQz4A3IfztqmpP3FBnUjcAJAzkjoMRkmk4ziR0a0kWJQKAFNRcg6uv07yOOKCMkRfu0IUXP2NAuKCcgwEN2qhfktNLgcR6X/BEI6eUb7HILuuxAU8HOQfQQl/9aaOxAV8LBRWKyAn1iNxQb0/CNua16QM0q9izGEh1dMR/YEtKHhFDUG5c3fQuoGY7+JWSxzEhDb3VYw5sXRXckeVGYpVLA7erqQYTOdd46nhyWNH5417fjtx9lSm6HnG/IaIFwGQnjfPFSvczOrcsSko2xDhkI9ZhABzQH/KN+CwJ/tfBNDdSjMlVkdLA9FZtsBiyd80gW6CanHs7+KWANkE1Z6UOGMQnblDHfakxRmDsgT1vMQZg/RHpi6fL3tmJFb4u6YLuyA69/DFivY51oV6/gEaAZfnRfYLZwAAAABJRU5ErkJggg==",
        rx = "data:image/svg+xml,%3csvg%20width='25'%20height='24'%20viewBox='0%200%2025%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M15.5%202.5V4C15.5%205.41421%2015.5%206.12132%2015.9393%206.56066C16.3787%207%2017.0858%207%2018.5%207H20'%20stroke='white'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M4.5%2016V8C4.5%205.17157%204.5%203.75736%205.37868%202.87868C6.25736%202%207.67157%202%2010.5%202H14.6716C15.0803%202%2015.2847%202%2015.4685%202.07612C15.6522%202.15224%2015.7968%202.29676%2016.0858%202.58579L19.9142%206.41421C20.2032%206.70324%2020.3478%206.84776%2020.4239%207.03153C20.5%207.2153%2020.5%207.41968%2020.5%207.82843V16C20.5%2018.8284%2020.5%2020.2426%2019.6213%2021.1213C18.7426%2022%2017.3284%2022%2014.5%2022H10.5C7.67157%2022%206.25736%2022%205.37868%2021.1213C4.5%2020.2426%204.5%2018.8284%204.5%2016Z'%20stroke='white'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M8.5%2011H16.5M8.5%2014H16.5M8.5%2017H12.6708'%20stroke='white'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e",
        nx = "data:image/svg+xml,%3csvg%20width='25'%20height='24'%20viewBox='0%200%2025%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M12.5%206V20'%20stroke='white'%20stroke-width='1.5'%20stroke-linecap='round'/%3e%3cpath%20d='M6.48056%203.28544C9.82175%203.9216%2011.8131%205.25231%2012.5%206.01628C13.1869%205.25231%2015.1782%203.9216%2018.5194%203.28544C20.2121%202.96315%2021.0584%202.80201%2021.7792%203.41964C22.5%204.03727%2022.5%205.04022%2022.5%207.04612V14.255C22.5%2016.0891%2022.5%2017.0061%2022.0374%2017.5787C21.5748%2018.1512%2020.5564%2018.3451%2018.5194%2018.733C16.7037%2019.0787%2015.2866%2019.6295%2014.2608%2020.1831C13.2516%2020.7277%2012.747%2021%2012.5%2021C12.253%2021%2011.7484%2020.7277%2010.7392%2020.1831C9.71344%2019.6295%208.29633%2019.0787%206.48056%2018.733C4.44365%2018.3451%203.4252%2018.1512%202.9626%2017.5787C2.5%2017.0061%202.5%2016.0891%202.5%2014.255V7.04612C2.5%205.04022%202.5%204.03727%203.22078%203.41964C3.94157%202.80201%204.7879%202.96315%206.48056%203.28544Z'%20stroke='white'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e",
        ix = "/assets/hero-bg-1-B_FbBNmD.png",
        sx = "/assets/hero-bg-2-CUR4E7eH.png";
    /*!
     * @gsap/react 2.1.1
     * https://gsap.com
     *
     * Copyright 2008-2024, GreenSock. All rights reserved.
     * Subject to the terms at https://gsap.com/standard-license or for
     * Club GSAP members, the agreement issued with that membership.
     * @author: Jack Doyle, jack@greensock.com
     */
    let kp = typeof window < "u" ? M.useLayoutEffect : M.useEffect,
        Pp = t => t && !Array.isArray(t) && typeof t == "object",
        Zl = [],
        ox = {},
        L8 = fe;
    const In = (t, e = Zl) => {
        let r = ox;
        Pp(t) ? (r = t, t = null, e = "dependencies" in r ? r.dependencies : Zl) : Pp(e) && (r = e, e = "dependencies" in r ? r.dependencies : Zl), t && typeof t != "function" && console.warn("First parameter must be a function or config object");
        const {
            scope: n,
            revertOnUpdate: i
        } = r, s = M.useRef(!1), o = M.useRef(L8.context(() => {}, n)), a = M.useRef(u => o.current.add(null, u)), l = e && e.length && !i;
        return kp(() => {
            if (t && o.current.add(t, n), !l || !s.current) return () => o.current.revert()
        }, e), l && kp(() => (s.current = !0, () => o.current.revert()), Zl), {
            context: o.current,
            contextSafe: a.current
        }
    };
    In.register = t => {
        L8 = t
    };
    In.headless = !0;

    function ax() {
        const t = [{
            icon: R8,
            name: "X.com",
            link: "http://twitter.com/Micro_GPT"
        }, {
            icon: N8,
            name: "Telegram",
            link: "https://t.me/micro_gpt"
        }, {
            icon: tx,
            name: "Dextools",
            link: "https://www.dextools.io/app/en/ether/pair-explorer/0xc9a4ee825c558d4cf5057fb6229f122b33a224f2?t=1713551771607"
        }, {
            icon: rx,
            name: "White Paper",
            link: "https://microgpt.gitbook.io/microgpt"
        }, {
            icon: nx,
            name: "Pitch Deck",
            link: "/MicroGPT-Deck.pdf"
        }];
        return In(() => {
            fe.set(".hero-metal-2", {
                x: 100,
                opacity: 0
            }), fe.set(".hero-socials", {
                opacity: 0,
                y: 50
            }), fe.timeline().from(".hero-text", {
                y: 100,
                opacity: 0,
                stagger: .2,
                delay: .1,
                duration: 1,
                ease: "power3.inOut"
            }).from(".hero-btn", {
                scale: 0,
                y: 100,
                opacity: 0,
                duration: .4,
                delay: -.2,
                ease: "back.out(1)"
            }).from(".hero-metal-1", {
                opacity: 0,
                x: -100,
                duration: .8,
                ease: "power3.out",
                onStart: () => {
                    fe.to(".hero-metal-2", {
                        opacity: 1,
                        x: 0,
                        duration: .8,
                        ease: "power3.out"
                    }), fe.to(".hero-socials", {
                        opacity: 1,
                        y: 0,
                        duration: .4
                    })
                }
            }), fe.from(".hero-metal-cont", {
                y: 20,
                repeat: -1,
                yoyo: !0,
                duration: 2,
                ease: "power1.inOut"
            })
        }, []), m.jsxs("section", {
            id: "hero",
            className: "text-white flex flex-col justify-center items-center text-center gap-8 -500:gap-3 mt-[100px] -500:mt-[10px] relative py-[30px] -500:pt-[60px] hero",
            children: [m.jsxs("h1", {
                className: "grey-gradient-text text-[4rem] -768:text-5xl -768:max-w-[500px] -500:text-[2rem] max-w-[850px] font-extrabold tracking-tighter leading-[120%] z-[5] hero-text py-2 -500:py-0 -500:max-w-[320px]",
                children: [" ", "MicroGPT: Grammarly for code, saving time with a new ", m.jsx("br", {})]
            }), m.jsx("span", {
                className: "purple-gradient-text text-6xl font-extrabold -768:text-4xl py-[10px] -500:text-[2rem] -500:mt-[-10px] relative hero-text mt-[-25px] z-[5]",
                children: "< AI Agent >"
            }), m.jsx("p", {
                className: "max-w-[600px] font-normal z-[5] text-[1.25rem] -768:text-xl -500:text-sm hero-text -500:max-w-[300px]",
                children: "Streamlining coding by automating code generation, optimization, bug detection, and reviews to save time and resources"
            }), m.jsxs("div", {
                className: "flex justify-center items-center w-fit gap-8 -768:flex-col -500:gap-4",
                children: [m.jsxs("a", {
                    href: "https://marketplace.visualstudio.com/items?itemName=MicroGPT.MicroGPT",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: "hero-btn btn-arrow flex gap-2 items-center justify-start border-[1px] border-white border-opacity-80 font-bold rounded-2xl px-10 py-4 -500:text-sm -500:mt-[30px] hero-btn -500:p-[0.625rem] -500:w-[147px] -500:rounded-xl -500:px-4",
                    children: [m.jsx("p", {
                        children: " Get Started"
                    }), m.jsx("img", {
                        src: Eo,
                        alt: ""
                    })]
                }), m.jsx(ja, {
                    content: "Buy $MICRO",
                    isBuy: !0,
                    className: "w-[215px] h-[52px] -500:h-[42px] -500:w-[147px] hero-btn"
                }), m.jsx(ja, {
                    content: "Stake",
                    link: "https://stake.microgpt.io/",
                    className: "w-[170px] h-[52px] -500:h-[42px] -500:w-[147px] hero-btn"
                })]
            }), m.jsx("div", {
                className: "flex justify-center items-center gap-3 -500:gap-1 mt-[100px] -500:mt-[30px] z-[5] -500:gap-y-3 flex-wrap hero-socials",
                children: t.map(e => m.jsxs("a", {
                    target: "_blank",
                    rel: "noopener noreferrer",
                    href: e.link,
                    className: "flex justify-center items-center gap-2 rounded-[100px] text-sm border-white border-opacity-10 border-[1px] p-5 py-5 -500:py-4 -500:px-3 hover:bg-opacity-10 bg-white bg-opacity-0 cursor-pointer duration-300 ease-in-out -500:max-w-[130px]",
                    children: [m.jsx("img", {
                        src: e.icon,
                        className: "-500:max-w-[17px] max-w-[24px]",
                        alt: ""
                    }), " ", m.jsx("p", {
                        children: e.name
                    })]
                }, e.name))
            }), m.jsx("div", {
                className: "hero-metal-cont absolute left-0 top-[-15%] z-[1] max-w-[350px]  -950:max-w-[200px] -768:top-[-10%] -500:top-[-3%] -500:max-w-[170px] overflow-hidden",
                children: m.jsx("img", {
                    src: ix,
                    className: "hero-metal-1",
                    alt: ""
                })
            }), m.jsx("div", {
                className: "hero-metal-cont absolute right-0 top-[0%] z-[1] max-w-[350px] -950:max-w-[200px] -768:hidden overflow-hidden",
                children: m.jsx("img", {
                    src: sx,
                    className: " hero-metal-2",
                    alt: ""
                })
            })]
        })
    }

    function bp(t) {
        const e = M.useRef([]);
        return M.useRef(null), In(() => {
            e.current.forEach((r, n) => {
                fe.to(r, {
                    translateX: n == 0 ? "-102%" : "-100%",
                    ease: "none",
                    duration: t.time,
                    repeat: -1
                })
            })
        }, []), m.jsxs("div", {
            className: `relative whitespace-nowrap overflow-hidden h-[50px] -768:scale-[2] -500:scale-[3.2] items-center -500:h-[40px] image-carousel ${t.className}`,
            children: [m.jsx("div", {
                className: " h-[100px] w-[100px] absolute left-[0px]  -768:left-[18%] -500:left-[13%] black-blur z-[10]"
            }), m.jsx("div", {
                className: " h-[100px] w-[100px] absolute right-[0px] -768:right-[18%] -500:right-[13%]  black-blur-right z-[10]"
            }), m.jsx("img", {
                ref: r => e.current[0] = r,
                className: "trust-logos w-full inline-block",
                src: t.img,
                alt: ""
            }), m.jsx("img", {
                ref: r => e.current[1] = r,
                className: "trust-logos w-full inline-block relative translate-x-[2%]",
                src: t.img,
                alt: ""
            })]
        })
    }
    const Tp = "/assets/trusted-logos-1-ByXw_20i.png",
        lx = "/assets/code-snippet-ZXGxwy3j.png",
        Ep = "/assets/seedify-DgKClqIG.png",
        ux = "/assets/mexc-f0JGK_te.svg",
        cx = "data:image/svg+xml,%3csvg%20width='105'%20height='24'%20viewBox='0%200%20105%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_442_3925)'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M86.8404%207.13747H89.8142V4.16365H86.8404V7.13747ZM71.033%2012.0924C71.6027%2010.5846%2073.0561%209.51234%2074.7608%209.51234C76.4655%209.51234%2077.9231%2010.5846%2078.4885%2012.0924H71.033ZM74.7608%206.74376C71.033%206.74376%2068.009%209.76784%2068.009%2013.4956C68.009%2017.2233%2071.033%2020.2474%2074.7608%2020.2474C77.32%2020.2474%2079.544%2018.8233%2080.6875%2016.7291L78.1954%2015.5186C77.5001%2016.6956%2076.2226%2017.483%2074.7608%2017.483C72.9137%2017.483%2071.3597%2016.2265%2070.9074%2014.5176H78.6142V14.5218H81.4372C81.4875%2014.1867%2081.5126%2013.8432%2081.5126%2013.4956C81.5126%209.76784%2078.4927%206.74376%2074.7608%206.74376ZM82.3001%2019.8872H85.2739V16.9134H82.3001V19.8872ZM86.8404%2019.8872H89.8142V8.44428H86.8404V19.8872ZM98.1116%2017.483C95.9084%2017.483%2094.1242%2015.6987%2094.1242%2013.4956C94.1242%2011.2924%2095.9084%209.50815%2098.1116%209.50815C100.315%209.50815%20102.099%2011.2924%20102.099%2013.4956C102.099%2015.6987%20100.315%2017.483%2098.1116%2017.483ZM98.1116%206.74376C94.3838%206.74376%2091.3598%209.76784%2091.3598%2013.4956C91.3598%2017.2233%2094.3838%2020.2474%2098.1116%2020.2474C101.839%2020.2474%20104.863%2017.2233%20104.863%2013.4956C104.863%209.76784%20101.839%206.74376%2098.1116%206.74376ZM35.9378%2011.0076V14.082H40.0969C39.8791%2014.9616%2039.4519%2015.749%2038.8362%2016.3773C37.9063%2017.328%2036.6205%2017.8474%2035.2131%2017.8474C32.2896%2017.8474%2029.9105%2015.4684%2029.9105%2012.5406C29.9105%209.61705%2032.2896%207.23381%2035.2131%207.23381C36.7796%207.23381%2038.2205%207.90396%2039.2173%209.05999L41.5964%207.11234C40.0173%205.26103%2037.676%204.15527%2035.2131%204.15527C30.5933%204.15527%2026.8362%207.91653%2026.8362%2012.5364C26.8362%2017.1563%2030.5933%2020.9176%2035.2131%2020.9176C37.4582%2020.9176%2039.5231%2020.1092%2041.0351%2018.5637C42.3042%2017.2652%2043.1461%2015.4558%2043.3053%2013.6464C43.3849%2012.7626%2043.3932%2011.883%2043.343%2010.9993L35.9378%2011.0076ZM51.0833%2017.483C48.8844%2017.483%2047.0959%2015.6987%2047.0959%2013.4956C47.0959%2011.2924%2048.8802%209.50815%2051.0833%209.50815C53.2864%209.50815%2055.0707%2011.2924%2055.0707%2013.4956C55.0707%2015.6987%2053.2864%2017.483%2051.0833%2017.483ZM55.0707%208.05894C53.9524%207.238%2052.5744%206.75632%2051.0833%206.75632C47.3556%206.75632%2044.3357%209.7804%2044.3357%2013.5082C44.3357%2017.2359%2047.3597%2020.26%2051.0833%2020.26C52.5744%2020.26%2053.9524%2019.7741%2055.0707%2018.9574V19.8914H57.8351V7.12491H55.0707V8.05894ZM63.766%204.16365H61.0016V7.13747H59.3472V9.7469H61.0016V16.5741C61.0016%2017.2778%2061.0896%2017.8726%2061.2655%2018.3375C61.4372%2018.7982%2061.7053%2019.1584%2062.0194%2019.439C62.3378%2019.7239%2062.7105%2019.9458%2063.1545%2020.0757C63.6069%2020.2013%2064.1011%2020.2516%2064.6289%2020.2516C65.1734%2020.2516%2065.6592%2020.1972%2066.0697%2020.0841C66.455%2019.9794%2066.8236%2019.8328%2067.1629%2019.6485V17.5458C66.6184%2017.7804%2066.1074%2017.8684%2065.5252%2017.8935C64.9095%2017.9228%2064.5493%2017.7469%2064.2477%2017.4579C63.9294%2017.1563%2063.7618%2016.7626%2063.7618%2016.105V9.7469H67.1629V7.13747H63.7618V4.16365H63.766Z'%20fill='white'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M12.1388%2018.5928C8.49901%2018.5928%205.54613%2015.64%205.54613%2012.0002C5.54613%208.36038%208.49901%205.4075%2012.1388%205.4075V0.00854492C5.51681%200.00854492%200.151367%205.37818%200.151367%2012.0002C0.151367%2018.6222%205.51681%2023.9876%2012.1388%2023.9876C18.7566%2023.9876%2024.1262%2018.618%2024.1262%2012.0002H18.7315C18.7315%2015.6441%2015.7786%2018.5928%2012.1388%2018.5928Z'%20fill='white'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M12.1389%2012.0001H18.7316V5.40747H12.1389V12.0001Z'%20fill='white'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_442_3925'%3e%3crect%20width='104.712'%20height='24'%20fill='white'%20transform='translate(0.151367)'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",
        fx = "/assets/ape-terminal-BQGrbiu5.png";

    function dx() {
        const t = [{
            name: "Incubated by",
            imgs: [{
                img: Ep,
                link: "https://seedify.fund/"
            }]
        }, {
            name: "Launchpads",
            imgs: [{
                img: Ep,
                link: "https://seedify.fund/"
            }, {
                img: fx,
                link: "https://apeterminal.io"
            }]
        }, {
            name: "Exchanges",
            imgs: [{
                img: cx,
                link: "https://gate.io"
            }, {
                img: ux,
                link: "https://mexc.com"
            }]
        }];
        return In(() => {
            document.querySelectorAll(".trusted-move").forEach(r => {
                fe.from(r, {
                    y: 100,
                    opacity: 0,
                    scrollTrigger: {
                        trigger: r,
                        start: "top 85%"
                    }
                })
            }), fe.from(".code-snippet", {
                rotateX: 25,
                scrollTrigger: {
                    trigger: ".snippet-container",
                    start: "top 85%",
                    end: "bottom 85%",
                    scrub: !0
                }
            })
        }, []), m.jsxs("div", {
            className: "text-white sectionGap flex flex-col gap-3 overflow-hidden pb-[50px]",
            children: [m.jsx("h3", {
                className: "text-center font-bold px-2 text-xl -500:text-sm",
                children: "Trusted by multiple Professionals & Teams"
            }), m.jsxs("div", {
                className: "overflow-hidden",
                children: [m.jsx(bp, {
                    img: Tp,
                    time: 14,
                    className: "mt-[50px] -500:mt-[50px]"
                }), m.jsx(bp, {
                    img: Tp,
                    time: 12,
                    className: "mt-[50px] -500:mt-[20px]"
                })]
            }), m.jsx("div", {
                className: "flex flex-wrap -600:flex-col -600:items-center -600:gap-14 items-start gap-8 mt-[120px] w-[90%] mx-auto justify-around max-w-[1440px]",
                children: t.map(e => m.jsxs("div", {
                    className: "flex flex-col items-center gap-4",
                    children: [m.jsx("h3", {
                        className: "text-center font-bold px-2 text-xl",
                        children: e.name
                    }), m.jsx("div", {
                        className: "flex gap-5 -600:gap-0 items-center justify-center",
                        children: e.imgs.map(r => m.jsx("div", {
                            className: "flex gap-8 items-center justify-center -500:gap-3  w-fit max-w-[140px] mx-auto",
                            children: m.jsx("a", {
                                href: r.link,
                                className: " w-full -600:w-[80%]",
                                children: m.jsx("img", {
                                    src: r.img,
                                    alt: "icon"
                                })
                            })
                        }))
                    })]
                }))
            }), m.jsxs("div", {
                className: "trusted-move relative snippet-container h-[792px] flex justify-center items-center my-[100px] -500:my-[120px] -768:h-[500px] -500:h-[400px] -400:h-[200px]",
                children: [m.jsx("div", {
                    className: "snippet-blur bg-[#F0AC88] w-[25%] h-[25%] -400:h-[30%] -400:w-[30%] absolute top-[10%] -500:top-[15%] right-[20%]  "
                }), m.jsx("div", {
                    className: "snippet-blur bg-[#7929FF] w-[25%] h-[25%] -400:h-[30%] -400:w-[30%] absolute bottom-[25%] -500:bottom-[15%]  left-[20%]"
                }), m.jsx("img", {
                    src: lx,
                    className: "max-w-[1200px] w-full mx-auto  absolute code-snippet",
                    alt: ""
                })]
            })]
        })
    }
    const hx = "/assets/optimal-efficiency-93iF64h-.png",
        px = "/assets/efficiency-bots-CkGuprYg.png",
        mx = "/assets/efficiency-bots-mobile-Hg388LI4.png";

    function gx(t, e) {
        for (var r = 0; r < e.length; r++) {
            var n = e[r];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
        }
    }

    function vx(t, e, r) {
        return e && gx(t.prototype, e), t
    }
    /*!
     * Observer 3.12.5
     * https://gsap.com
     *
     * @license Copyright 2008-2024, GreenSock. All rights reserved.
     * Subject to the terms at https://gsap.com/standard-license or for
     * Club GSAP members, the agreement issued with that membership.
     * @author: Jack Doyle, jack@greensock.com
     */
    var mt, j0, dr, ii, si, ao, O8, $i, Ma, z8, bn, Ur, I8, D8 = function() {
            return mt || typeof window < "u" && (mt = window.gsap) && mt.registerPlugin && mt
        },
        F8 = 1,
        Ks = [],
        te = [],
        hn = [],
        Ra = Date.now,
        If = function(e, r) {
            return r
        },
        yx = function() {
            var e = Ma.core,
                r = e.bridge || {},
                n = e._scrollers,
                i = e._proxies;
            n.push.apply(n, te), i.push.apply(i, hn), te = n, hn = i, If = function(o, a) {
                return r[o](a)
            }
        },
        vi = function(e, r) {
            return ~hn.indexOf(e) && hn[hn.indexOf(e) + 1][r]
        },
        Na = function(e) {
            return !!~z8.indexOf(e)
        },
        Ot = function(e, r, n, i, s) {
            return e.addEventListener(r, n, {
                passive: i !== !1,
                capture: !!s
            })
        },
        Lt = function(e, r, n, i) {
            return e.removeEventListener(r, n, !!i)
        },
        Xl = "scrollLeft",
        Jl = "scrollTop",
        Df = function() {
            return bn && bn.isPressed || te.cache++
        },
        vu = function(e, r) {
            var n = function i(s) {
                if (s || s === 0) {
                    F8 && (dr.history.scrollRestoration = "manual");
                    var o = bn && bn.isPressed;
                    s = i.v = Math.round(s) || (bn && bn.iOS ? 1 : 0), e(s), i.cacheID = te.cache, o && If("ss", s)
                } else(r || te.cache !== i.cacheID || If("ref")) && (i.cacheID = te.cache, i.v = e());
                return i.v + i.offset
            };
            return n.offset = 0, e && n
        },
        $t = {
            s: Xl,
            p: "left",
            p2: "Left",
            os: "right",
            os2: "Right",
            d: "width",
            d2: "Width",
            a: "x",
            sc: vu(function(t) {
                return arguments.length ? dr.scrollTo(t, et.sc()) : dr.pageXOffset || ii[Xl] || si[Xl] || ao[Xl] || 0
            })
        },
        et = {
            s: Jl,
            p: "top",
            p2: "Top",
            os: "bottom",
            os2: "Bottom",
            d: "height",
            d2: "Height",
            a: "y",
            op: $t,
            sc: vu(function(t) {
                return arguments.length ? dr.scrollTo($t.sc(), t) : dr.pageYOffset || ii[Jl] || si[Jl] || ao[Jl] || 0
            })
        },
        Qt = function(e, r) {
            return (r && r._ctx && r._ctx.selector || mt.utils.toArray)(e)[0] || (typeof e == "string" && mt.config().nullTargetWarn !== !1 ? console.warn("Element not found:", e) : null)
        },
        Ai = function(e, r) {
            var n = r.s,
                i = r.sc;
            Na(e) && (e = ii.scrollingElement || si);
            var s = te.indexOf(e),
                o = i === et.sc ? 1 : 2;
            !~s && (s = te.push(e) - 1), te[s + o] || Ot(e, "scroll", Df);
            var a = te[s + o],
                l = a || (te[s + o] = vu(vi(e, n), !0) || (Na(e) ? i : vu(function(u) {
                    return arguments.length ? e[n] = u : e[n]
                })));
            return l.target = e, a || (l.smooth = mt.getProperty(e, "scrollBehavior") === "smooth"), l
        },
        Ff = function(e, r, n) {
            var i = e,
                s = e,
                o = Ra(),
                a = o,
                l = r || 50,
                u = Math.max(500, l * 3),
                c = function(y, g) {
                    var w = Ra();
                    g || w - o > l ? (s = i, i = y, a = o, o = w) : n ? i += y : i = s + (y - s) / (w - a) * (o - a)
                },
                f = function() {
                    s = i = n ? 0 : i, a = o = 0
                },
                d = function(y) {
                    var g = a,
                        w = s,
                        v = Ra();
                    return (y || y === 0) && y !== i && c(y), o === a || v - a > u ? 0 : (i + (n ? w : -w)) / ((n ? v : o) - g) * 1e3
                };
            return {
                update: c,
                reset: f,
                getVelocity: d
            }
        },
        Jo = function(e, r) {
            return r && !e._gsapAllow && e.preventDefault(), e.changedTouches ? e.changedTouches[0] : e
        },
        jp = function(e) {
            var r = Math.max.apply(Math, e),
                n = Math.min.apply(Math, e);
            return Math.abs(r) >= Math.abs(n) ? r : n
        },
        B8 = function() {
            Ma = mt.core.globals().ScrollTrigger, Ma && Ma.core && yx()
        },
        $8 = function(e) {
            return mt = e || D8(), !j0 && mt && typeof document < "u" && document.body && (dr = window, ii = document, si = ii.documentElement, ao = ii.body, z8 = [dr, ii, si, ao], mt.utils.clamp, I8 = mt.core.context || function() {}, $i = "onpointerenter" in ao ? "pointer" : "mouse", O8 = Ge.isTouch = dr.matchMedia && dr.matchMedia("(hover: none), (pointer: coarse)").matches ? 1 : "ontouchstart" in dr || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0 ? 2 : 0, Ur = Ge.eventTypes = ("ontouchstart" in si ? "touchstart,touchmove,touchcancel,touchend" : "onpointerdown" in si ? "pointerdown,pointermove,pointercancel,pointerup" : "mousedown,mousemove,mouseup,mouseup").split(","), setTimeout(function() {
                return F8 = 0
            }, 500), B8(), j0 = 1), j0
        };
    $t.op = et;
    te.cache = 0;
    var Ge = function() {
        function t(r) {
            this.init(r)
        }
        var e = t.prototype;
        return e.init = function(n) {
            j0 || $8(mt) || console.warn("Please gsap.registerPlugin(Observer)"), Ma || B8();
            var i = n.tolerance,
                s = n.dragMinimum,
                o = n.type,
                a = n.target,
                l = n.lineHeight,
                u = n.debounce,
                c = n.preventDefault,
                f = n.onStop,
                d = n.onStopDelay,
                h = n.ignore,
                y = n.wheelSpeed,
                g = n.event,
                w = n.onDragStart,
                v = n.onDragEnd,
                p = n.onDrag,
                x = n.onPress,
                _ = n.onRelease,
                C = n.onRight,
                k = n.onLeft,
                S = n.onUp,
                P = n.onDown,
                T = n.onChangeX,
                b = n.onChangeY,
                I = n.onChange,
                L = n.onToggleX,
                H = n.onToggleY,
                V = n.onHover,
                X = n.onHoverEnd,
                W = n.onMove,
                B = n.ignoreCheck,
                R = n.isNormalizer,
                z = n.onGestureStart,
                A = n.onGestureEnd,
                G = n.onWheel,
                oe = n.onEnable,
                yt = n.onDisable,
                ce = n.onClick,
                Fe = n.scrollSpeed,
                Pe = n.capture,
                ye = n.allowClicks,
                Rt = n.lockAxis,
                xt = n.onLockAxis;
            this.target = a = Qt(a) || si, this.vars = n, h && (h = mt.utils.toArray(h)), i = i || 1e-9, s = s || 0, y = y || 1, Fe = Fe || 1, o = o || "wheel,touch,pointer", u = u !== !1, l || (l = parseFloat(dr.getComputedStyle(ao).lineHeight) || 22);
            var Dn, Nt, Ir, le, Be, Wt, ir, E = this,
                sr = 0,
                gn = 0,
                Fn = n.passive || !c,
                We = Ai(a, $t),
                Bn = Ai(a, et),
                Mi = We(),
                Cs = Bn(),
                nt = ~o.indexOf("touch") && !~o.indexOf("pointer") && Ur[0] === "pointerdown",
                $n = Na(a),
                $e = a.ownerDocument || ii,
                Dr = [0, 0, 0],
                Cr = [0, 0, 0],
                vn = 0,
                Fo = function() {
                    return vn = Ra()
                },
                Qe = function(U, ue) {
                    return (E.event = U) && h && ~h.indexOf(U.target) || ue && nt && U.pointerType !== "touch" || B && B(U, ue)
                },
                El = function() {
                    E._vx.reset(), E._vy.reset(), Nt.pause(), f && f(E)
                },
                Hn = function() {
                    var U = E.deltaX = jp(Dr),
                        ue = E.deltaY = jp(Cr),
                        O = Math.abs(U) >= i,
                        q = Math.abs(ue) >= i;
                    I && (O || q) && I(E, U, ue, Dr, Cr), O && (C && E.deltaX > 0 && C(E), k && E.deltaX < 0 && k(E), T && T(E), L && E.deltaX < 0 != sr < 0 && L(E), sr = E.deltaX, Dr[0] = Dr[1] = Dr[2] = 0), q && (P && E.deltaY > 0 && P(E), S && E.deltaY < 0 && S(E), b && b(E), H && E.deltaY < 0 != gn < 0 && H(E), gn = E.deltaY, Cr[0] = Cr[1] = Cr[2] = 0), (le || Ir) && (W && W(E), Ir && (p(E), Ir = !1), le = !1), Wt && !(Wt = !1) && xt && xt(E), Be && (G(E), Be = !1), Dn = 0
                },
                As = function(U, ue, O) {
                    Dr[O] += U, Cr[O] += ue, E._vx.update(U), E._vy.update(ue), u ? Dn || (Dn = requestAnimationFrame(Hn)) : Hn()
                },
                Ss = function(U, ue) {
                    Rt && !ir && (E.axis = ir = Math.abs(U) > Math.abs(ue) ? "x" : "y", Wt = !0), ir !== "y" && (Dr[2] += U, E._vx.update(U, !0)), ir !== "x" && (Cr[2] += ue, E._vy.update(ue, !0)), u ? Dn || (Dn = requestAnimationFrame(Hn)) : Hn()
                },
                Vn = function(U) {
                    if (!Qe(U, 1)) {
                        U = Jo(U, c);
                        var ue = U.clientX,
                            O = U.clientY,
                            q = ue - E.x,
                            $ = O - E.y,
                            Q = E.isDragging;
                        E.x = ue, E.y = O, (Q || Math.abs(E.startX - ue) >= s || Math.abs(E.startY - O) >= s) && (p && (Ir = !0), Q || (E.isDragging = !0), Ss(q, $), Q || w && w(E))
                    }
                },
                Ri = E.onPress = function(Y) {
                    Qe(Y, 1) || Y && Y.button || (E.axis = ir = null, Nt.pause(), E.isPressed = !0, Y = Jo(Y), sr = gn = 0, E.startX = E.x = Y.clientX, E.startY = E.y = Y.clientY, E._vx.reset(), E._vy.reset(), Ot(R ? a : $e, Ur[1], Vn, Fn, !0), E.deltaX = E.deltaY = 0, x && x(E))
                },
                ee = E.onRelease = function(Y) {
                    if (!Qe(Y, 1)) {
                        Lt(R ? a : $e, Ur[1], Vn, !0);
                        var U = !isNaN(E.y - E.startY),
                            ue = E.isDragging,
                            O = ue && (Math.abs(E.x - E.startX) > 3 || Math.abs(E.y - E.startY) > 3),
                            q = Jo(Y);
                        !O && U && (E._vx.reset(), E._vy.reset(), c && ye && mt.delayedCall(.08, function() {
                            if (Ra() - vn > 300 && !Y.defaultPrevented) {
                                if (Y.target.click) Y.target.click();
                                else if ($e.createEvent) {
                                    var $ = $e.createEvent("MouseEvents");
                                    $.initMouseEvent("click", !0, !0, dr, 1, q.screenX, q.screenY, q.clientX, q.clientY, !1, !1, !1, !1, 0, null), Y.target.dispatchEvent($)
                                }
                            }
                        })), E.isDragging = E.isGesturing = E.isPressed = !1, f && ue && !R && Nt.restart(!0), v && ue && v(E), _ && _(E, O)
                    }
                },
                Ni = function(U) {
                    return U.touches && U.touches.length > 1 && (E.isGesturing = !0) && z(U, E.isDragging)
                },
                Fr = function() {
                    return (E.isGesturing = !1) || A(E)
                },
                Br = function(U) {
                    if (!Qe(U)) {
                        var ue = We(),
                            O = Bn();
                        As((ue - Mi) * Fe, (O - Cs) * Fe, 1), Mi = ue, Cs = O, f && Nt.restart(!0)
                    }
                },
                $r = function(U) {
                    if (!Qe(U)) {
                        U = Jo(U, c), G && (Be = !0);
                        var ue = (U.deltaMode === 1 ? l : U.deltaMode === 2 ? dr.innerHeight : 1) * y;
                        As(U.deltaX * ue, U.deltaY * ue, 0), f && !R && Nt.restart(!0)
                    }
                },
                Li = function(U) {
                    if (!Qe(U)) {
                        var ue = U.clientX,
                            O = U.clientY,
                            q = ue - E.x,
                            $ = O - E.y;
                        E.x = ue, E.y = O, le = !0, f && Nt.restart(!0), (q || $) && Ss(q, $)
                    }
                },
                ks = function(U) {
                    E.event = U, V(E)
                },
                yn = function(U) {
                    E.event = U, X(E)
                },
                Bo = function(U) {
                    return Qe(U) || Jo(U, c) && ce(E)
                };
            Nt = E._dc = mt.delayedCall(d || .25, El).pause(), E.deltaX = E.deltaY = 0, E._vx = Ff(0, 50, !0), E._vy = Ff(0, 50, !0), E.scrollX = We, E.scrollY = Bn, E.isDragging = E.isGesturing = E.isPressed = !1, I8(this), E.enable = function(Y) {
                return E.isEnabled || (Ot($n ? $e : a, "scroll", Df), o.indexOf("scroll") >= 0 && Ot($n ? $e : a, "scroll", Br, Fn, Pe), o.indexOf("wheel") >= 0 && Ot(a, "wheel", $r, Fn, Pe), (o.indexOf("touch") >= 0 && O8 || o.indexOf("pointer") >= 0) && (Ot(a, Ur[0], Ri, Fn, Pe), Ot($e, Ur[2], ee), Ot($e, Ur[3], ee), ye && Ot(a, "click", Fo, !0, !0), ce && Ot(a, "click", Bo), z && Ot($e, "gesturestart", Ni), A && Ot($e, "gestureend", Fr), V && Ot(a, $i + "enter", ks), X && Ot(a, $i + "leave", yn), W && Ot(a, $i + "move", Li)), E.isEnabled = !0, Y && Y.type && Ri(Y), oe && oe(E)), E
            }, E.disable = function() {
                E.isEnabled && (Ks.filter(function(Y) {
                    return Y !== E && Na(Y.target)
                }).length || Lt($n ? $e : a, "scroll", Df), E.isPressed && (E._vx.reset(), E._vy.reset(), Lt(R ? a : $e, Ur[1], Vn, !0)), Lt($n ? $e : a, "scroll", Br, Pe), Lt(a, "wheel", $r, Pe), Lt(a, Ur[0], Ri, Pe), Lt($e, Ur[2], ee), Lt($e, Ur[3], ee), Lt(a, "click", Fo, !0), Lt(a, "click", Bo), Lt($e, "gesturestart", Ni), Lt($e, "gestureend", Fr), Lt(a, $i + "enter", ks), Lt(a, $i + "leave", yn), Lt(a, $i + "move", Li), E.isEnabled = E.isPressed = E.isDragging = !1, yt && yt(E))
            }, E.kill = E.revert = function() {
                E.disable();
                var Y = Ks.indexOf(E);
                Y >= 0 && Ks.splice(Y, 1), bn === E && (bn = 0)
            }, Ks.push(E), R && Na(a) && (bn = E), E.enable(g)
        }, vx(t, [{
            key: "velocityX",
            get: function() {
                return this._vx.getVelocity()
            }
        }, {
            key: "velocityY",
            get: function() {
                return this._vy.getVelocity()
            }
        }]), t
    }();
    Ge.version = "3.12.5";
    Ge.create = function(t) {
        return new Ge(t)
    };
    Ge.register = $8;
    Ge.getAll = function() {
        return Ks.slice()
    };
    Ge.getById = function(t) {
        return Ks.filter(function(e) {
            return e.vars.id === t
        })[0]
    };
    D8() && mt.registerPlugin(Ge);
    /*!
     * ScrollTrigger 3.12.5
     * https://gsap.com
     *
     * @license Copyright 2008-2024, GreenSock. All rights reserved.
     * Subject to the terms at https://gsap.com/standard-license or for
     * Club GSAP members, the agreement issued with that membership.
     * @author: Jack Doyle, jack@greensock.com
     */
    var F, Ns, ie, Te, Yr, we, H8, yu, pl, La, ca, e0, kt, qu, Bf, Dt, Mp, Rp, Ls, V8, X2, U8, zt, $f, G8, W8, Wn, Hf, Sd, lo, kd, xu, Vf, J2, t0 = 1,
        Pt = Date.now,
        ec = Pt(),
        Nr = 0,
        fa = 0,
        Np = function(e, r, n) {
            var i = ur(e) && (e.substr(0, 6) === "clamp(" || e.indexOf("max") > -1);
            return n["_" + r + "Clamp"] = i, i ? e.substr(6, e.length - 7) : e
        },
        Lp = function(e, r) {
            return r && (!ur(e) || e.substr(0, 6) !== "clamp(") ? "clamp(" + e + ")" : e
        },
        xx = function t() {
            return fa && requestAnimationFrame(t)
        },
        Op = function() {
            return qu = 1
        },
        zp = function() {
            return qu = 0
        },
        sn = function(e) {
            return e
        },
        da = function(e) {
            return Math.round(e * 1e5) / 1e5 || 0
        },
        Q8 = function() {
            return typeof window < "u"
        },
        Y8 = function() {
            return F || Q8() && (F = window.gsap) && F.registerPlugin && F
        },
        ms = function(e) {
            return !!~H8.indexOf(e)
        },
        q8 = function(e) {
            return (e === "Height" ? kd : ie["inner" + e]) || Yr["client" + e] || we["client" + e]
        },
        K8 = function(e) {
            return vi(e, "getBoundingClientRect") || (ms(e) ? function() {
                return O0.width = ie.innerWidth, O0.height = kd, O0
            } : function() {
                return Sn(e)
            })
        },
        _x = function(e, r, n) {
            var i = n.d,
                s = n.d2,
                o = n.a;
            return (o = vi(e, "getBoundingClientRect")) ? function() {
                return o()[i]
            } : function() {
                return (r ? q8(s) : e["client" + s]) || 0
            }
        },
        wx = function(e, r) {
            return !r || ~hn.indexOf(e) ? K8(e) : function() {
                return O0
            }
        },
        un = function(e, r) {
            var n = r.s,
                i = r.d2,
                s = r.d,
                o = r.a;
            return Math.max(0, (n = "scroll" + i) && (o = vi(e, n)) ? o() - K8(e)()[s] : ms(e) ? (Yr[n] || we[n]) - q8(i) : e[n] - e["offset" + i])
        },
        r0 = function(e, r) {
            for (var n = 0; n < Ls.length; n += 3)(!r || ~r.indexOf(Ls[n + 1])) && e(Ls[n], Ls[n + 1], Ls[n + 2])
        },
        ur = function(e) {
            return typeof e == "string"
        },
        Ht = function(e) {
            return typeof e == "function"
        },
        ha = function(e) {
            return typeof e == "number"
        },
        Hi = function(e) {
            return typeof e == "object"
        },
        ea = function(e, r, n) {
            return e && e.progress(r ? 0 : 1) && n && e.pause()
        },
        tc = function(e, r) {
            if (e.enabled) {
                var n = e._ctx ? e._ctx.add(function() {
                    return r(e)
                }) : r(e);
                n && n.totalTime && (e.callbackAnimation = n)
            }
        },
        Ts = Math.abs,
        Z8 = "left",
        X8 = "top",
        Pd = "right",
        bd = "bottom",
        ns = "width",
        is = "height",
        Oa = "Right",
        za = "Left",
        Ia = "Top",
        Da = "Bottom",
        Ye = "padding",
        Pr = "margin",
        So = "Width",
        Td = "Height",
        Xe = "px",
        br = function(e) {
            return ie.getComputedStyle(e)
        },
        Cx = function(e) {
            var r = br(e).position;
            e.style.position = r === "absolute" || r === "fixed" ? r : "relative"
        },
        Ip = function(e, r) {
            for (var n in r) n in e || (e[n] = r[n]);
            return e
        },
        Sn = function(e, r) {
            var n = r && br(e)[Bf] !== "matrix(1, 0, 0, 1, 0, 0)" && F.to(e, {
                    x: 0,
                    y: 0,
                    xPercent: 0,
                    yPercent: 0,
                    rotation: 0,
                    rotationX: 0,
                    rotationY: 0,
                    scale: 1,
                    skewX: 0,
                    skewY: 0
                }).progress(1),
                i = e.getBoundingClientRect();
            return n && n.progress(0).kill(), i
        },
        _u = function(e, r) {
            var n = r.d2;
            return e["offset" + n] || e["client" + n] || 0
        },
        J8 = function(e) {
            var r = [],
                n = e.labels,
                i = e.duration(),
                s;
            for (s in n) r.push(n[s] / i);
            return r
        },
        Ax = function(e) {
            return function(r) {
                return F.utils.snap(J8(e), r)
            }
        },
        Ed = function(e) {
            var r = F.utils.snap(e),
                n = Array.isArray(e) && e.slice(0).sort(function(i, s) {
                    return i - s
                });
            return n ? function(i, s, o) {
                o === void 0 && (o = .001);
                var a;
                if (!s) return r(i);
                if (s > 0) {
                    for (i -= o, a = 0; a < n.length; a++)
                        if (n[a] >= i) return n[a];
                    return n[a - 1]
                } else
                    for (a = n.length, i += o; a--;)
                        if (n[a] <= i) return n[a];
                return n[0]
            } : function(i, s, o) {
                o === void 0 && (o = .001);
                var a = r(i);
                return !s || Math.abs(a - i) < o || a - i < 0 == s < 0 ? a : r(s < 0 ? i - e : i + e)
            }
        },
        Sx = function(e) {
            return function(r, n) {
                return Ed(J8(e))(r, n.direction)
            }
        },
        n0 = function(e, r, n, i) {
            return n.split(",").forEach(function(s) {
                return e(r, s, i)
            })
        },
        ot = function(e, r, n, i, s) {
            return e.addEventListener(r, n, {
                passive: !i,
                capture: !!s
            })
        },
        st = function(e, r, n, i) {
            return e.removeEventListener(r, n, !!i)
        },
        i0 = function(e, r, n) {
            n = n && n.wheelHandler, n && (e(r, "wheel", n), e(r, "touchmove", n))
        },
        Dp = {
            startColor: "green",
            endColor: "red",
            indent: 0,
            fontSize: "16px",
            fontWeight: "normal"
        },
        s0 = {
            toggleActions: "play",
            anticipatePin: 0
        },
        wu = {
            top: 0,
            left: 0,
            center: .5,
            bottom: 1,
            right: 1
        },
        M0 = function(e, r) {
            if (ur(e)) {
                var n = e.indexOf("="),
                    i = ~n ? +(e.charAt(n - 1) + 1) * parseFloat(e.substr(n + 1)) : 0;
                ~n && (e.indexOf("%") > n && (i *= r / 100), e = e.substr(0, n - 1)), e = i + (e in wu ? wu[e] * r : ~e.indexOf("%") ? parseFloat(e) * r / 100 : parseFloat(e) || 0)
            }
            return e
        },
        o0 = function(e, r, n, i, s, o, a, l) {
            var u = s.startColor,
                c = s.endColor,
                f = s.fontSize,
                d = s.indent,
                h = s.fontWeight,
                y = Te.createElement("div"),
                g = ms(n) || vi(n, "pinType") === "fixed",
                w = e.indexOf("scroller") !== -1,
                v = g ? we : n,
                p = e.indexOf("start") !== -1,
                x = p ? u : c,
                _ = "border-color:" + x + ";font-size:" + f + ";color:" + x + ";font-weight:" + h + ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
            return _ += "position:" + ((w || l) && g ? "fixed;" : "absolute;"), (w || l || !g) && (_ += (i === et ? Pd : bd) + ":" + (o + parseFloat(d)) + "px;"), a && (_ += "box-sizing:border-box;text-align:left;width:" + a.offsetWidth + "px;"), y._isStart = p, y.setAttribute("class", "gsap-marker-" + e + (r ? " marker-" + r : "")), y.style.cssText = _, y.innerText = r || r === 0 ? e + "-" + r : e, v.children[0] ? v.insertBefore(y, v.children[0]) : v.appendChild(y), y._offset = y["offset" + i.op.d2], R0(y, 0, i, p), y
        },
        R0 = function(e, r, n, i) {
            var s = {
                    display: "block"
                },
                o = n[i ? "os2" : "p2"],
                a = n[i ? "p2" : "os2"];
            e._isFlipped = i, s[n.a + "Percent"] = i ? -100 : 0, s[n.a] = i ? "1px" : 0, s["border" + o + So] = 1, s["border" + a + So] = 0, s[n.p] = r + "px", F.set(e, s)
        },
        J = [],
        Uf = {},
        ml, Fp = function() {
            return Pt() - Nr > 34 && (ml || (ml = requestAnimationFrame(En)))
        },
        Es = function() {
            (!zt || !zt.isPressed || zt.startX > we.clientWidth) && (te.cache++, zt ? ml || (ml = requestAnimationFrame(En)) : En(), Nr || vs("scrollStart"), Nr = Pt())
        },
        rc = function() {
            W8 = ie.innerWidth, G8 = ie.innerHeight
        },
        pa = function() {
            te.cache++, !kt && !U8 && !Te.fullscreenElement && !Te.webkitFullscreenElement && (!$f || W8 !== ie.innerWidth || Math.abs(ie.innerHeight - G8) > ie.innerHeight * .25) && yu.restart(!0)
        },
        gs = {},
        kx = [],
        e6 = function t() {
            return st(Z, "scrollEnd", t) || qi(!0)
        },
        vs = function(e) {
            return gs[e] && gs[e].map(function(r) {
                return r()
            }) || kx
        },
        ar = [],
        t6 = function(e) {
            for (var r = 0; r < ar.length; r += 5)(!e || ar[r + 4] && ar[r + 4].query === e) && (ar[r].style.cssText = ar[r + 1], ar[r].getBBox && ar[r].setAttribute("transform", ar[r + 2] || ""), ar[r + 3].uncache = 1)
        },
        jd = function(e, r) {
            var n;
            for (Dt = 0; Dt < J.length; Dt++) n = J[Dt], n && (!r || n._ctx === r) && (e ? n.kill(1) : n.revert(!0, !0));
            xu = !0, r && t6(r), r || vs("revert")
        },
        r6 = function(e, r) {
            te.cache++, (r || !Ft) && te.forEach(function(n) {
                return Ht(n) && n.cacheID++ && (n.rec = 0)
            }), ur(e) && (ie.history.scrollRestoration = Sd = e)
        },
        Ft, ss = 0,
        Bp, Px = function() {
            if (Bp !== ss) {
                var e = Bp = ss;
                requestAnimationFrame(function() {
                    return e === ss && qi(!0)
                })
            }
        },
        n6 = function() {
            we.appendChild(lo), kd = !zt && lo.offsetHeight || ie.innerHeight, we.removeChild(lo)
        },
        $p = function(e) {
            return pl(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(r) {
                return r.style.display = e ? "none" : "block"
            })
        },
        qi = function(e, r) {
            if (Nr && !e && !xu) {
                ot(Z, "scrollEnd", e6);
                return
            }
            n6(), Ft = Z.isRefreshing = !0, te.forEach(function(i) {
                return Ht(i) && ++i.cacheID && (i.rec = i())
            });
            var n = vs("refreshInit");
            V8 && Z.sort(), r || jd(), te.forEach(function(i) {
                Ht(i) && (i.smooth && (i.target.style.scrollBehavior = "auto"), i(0))
            }), J.slice(0).forEach(function(i) {
                return i.refresh()
            }), xu = !1, J.forEach(function(i) {
                if (i._subPinOffset && i.pin) {
                    var s = i.vars.horizontal ? "offsetWidth" : "offsetHeight",
                        o = i.pin[s];
                    i.revert(!0, 1), i.adjustPinSpacing(i.pin[s] - o), i.refresh()
                }
            }), Vf = 1, $p(!0), J.forEach(function(i) {
                var s = un(i.scroller, i._dir),
                    o = i.vars.end === "max" || i._endClamp && i.end > s,
                    a = i._startClamp && i.start >= s;
                (o || a) && i.setPositions(a ? s - 1 : i.start, o ? Math.max(a ? s : i.start + 1, s) : i.end, !0)
            }), $p(!1), Vf = 0, n.forEach(function(i) {
                return i && i.render && i.render(-1)
            }), te.forEach(function(i) {
                Ht(i) && (i.smooth && requestAnimationFrame(function() {
                    return i.target.style.scrollBehavior = "smooth"
                }), i.rec && i(i.rec))
            }), r6(Sd, 1), yu.pause(), ss++, Ft = 2, En(2), J.forEach(function(i) {
                return Ht(i.vars.onRefresh) && i.vars.onRefresh(i)
            }), Ft = Z.isRefreshing = !1, vs("refresh")
        },
        Gf = 0,
        N0 = 1,
        Fa, En = function(e) {
            if (e === 2 || !Ft && !xu) {
                Z.isUpdating = !0, Fa && Fa.update(0);
                var r = J.length,
                    n = Pt(),
                    i = n - ec >= 50,
                    s = r && J[0].scroll();
                if (N0 = Gf > s ? -1 : 1, Ft || (Gf = s), i && (Nr && !qu && n - Nr > 200 && (Nr = 0, vs("scrollEnd")), ca = ec, ec = n), N0 < 0) {
                    for (Dt = r; Dt-- > 0;) J[Dt] && J[Dt].update(0, i);
                    N0 = 1
                } else
                    for (Dt = 0; Dt < r; Dt++) J[Dt] && J[Dt].update(0, i);
                Z.isUpdating = !1
            }
            ml = 0
        },
        Wf = [Z8, X8, bd, Pd, Pr + Da, Pr + Oa, Pr + Ia, Pr + za, "display", "flexShrink", "float", "zIndex", "gridColumnStart", "gridColumnEnd", "gridRowStart", "gridRowEnd", "gridArea", "justifySelf", "alignSelf", "placeSelf", "order"],
        L0 = Wf.concat([ns, is, "boxSizing", "max" + So, "max" + Td, "position", Pr, Ye, Ye + Ia, Ye + Oa, Ye + Da, Ye + za]),
        bx = function(e, r, n) {
            uo(n);
            var i = e._gsap;
            if (i.spacerIsNative) uo(i.spacerState);
            else if (e._gsap.swappedIn) {
                var s = r.parentNode;
                s && (s.insertBefore(e, r), s.removeChild(r))
            }
            e._gsap.swappedIn = !1
        },
        nc = function(e, r, n, i) {
            if (!e._gsap.swappedIn) {
                for (var s = Wf.length, o = r.style, a = e.style, l; s--;) l = Wf[s], o[l] = n[l];
                o.position = n.position === "absolute" ? "absolute" : "relative", n.display === "inline" && (o.display = "inline-block"), a[bd] = a[Pd] = "auto", o.flexBasis = n.flexBasis || "auto", o.overflow = "visible", o.boxSizing = "border-box", o[ns] = _u(e, $t) + Xe, o[is] = _u(e, et) + Xe, o[Ye] = a[Pr] = a[X8] = a[Z8] = "0", uo(i), a[ns] = a["max" + So] = n[ns], a[is] = a["max" + Td] = n[is], a[Ye] = n[Ye], e.parentNode !== r && (e.parentNode.insertBefore(r, e), r.appendChild(e)), e._gsap.swappedIn = !0
            }
        },
        Tx = /([A-Z])/g,
        uo = function(e) {
            if (e) {
                var r = e.t.style,
                    n = e.length,
                    i = 0,
                    s, o;
                for ((e.t._gsap || F.core.getCache(e.t)).uncache = 1; i < n; i += 2) o = e[i + 1], s = e[i], o ? r[s] = o : r[s] && r.removeProperty(s.replace(Tx, "-$1").toLowerCase())
            }
        },
        a0 = function(e) {
            for (var r = L0.length, n = e.style, i = [], s = 0; s < r; s++) i.push(L0[s], n[L0[s]]);
            return i.t = e, i
        },
        Ex = function(e, r, n) {
            for (var i = [], s = e.length, o = n ? 8 : 0, a; o < s; o += 2) a = e[o], i.push(a, a in r ? r[a] : e[o + 1]);
            return i.t = e.t, i
        },
        O0 = {
            left: 0,
            top: 0
        },
        Hp = function(e, r, n, i, s, o, a, l, u, c, f, d, h, y) {
            Ht(e) && (e = e(l)), ur(e) && e.substr(0, 3) === "max" && (e = d + (e.charAt(4) === "=" ? M0("0" + e.substr(3), n) : 0));
            var g = h ? h.time() : 0,
                w, v, p;
            if (h && h.seek(0), isNaN(e) || (e = +e), ha(e)) h && (e = F.utils.mapRange(h.scrollTrigger.start, h.scrollTrigger.end, 0, d, e)), a && R0(a, n, i, !0);
            else {
                Ht(r) && (r = r(l));
                var x = (e || "0").split(" "),
                    _, C, k, S;
                p = Qt(r, l) || we, _ = Sn(p) || {}, (!_ || !_.left && !_.top) && br(p).display === "none" && (S = p.style.display, p.style.display = "block", _ = Sn(p), S ? p.style.display = S : p.style.removeProperty("display")), C = M0(x[0], _[i.d]), k = M0(x[1] || "0", n), e = _[i.p] - u[i.p] - c + C + s - k, a && R0(a, k, i, n - k < 20 || a._isStart && k > 20), n -= n - k
            }
            if (y && (l[y] = e || -.001, e < 0 && (e = 0)), o) {
                var P = e + n,
                    T = o._isStart;
                w = "scroll" + i.d2, R0(o, P, i, T && P > 20 || !T && (f ? Math.max(we[w], Yr[w]) : o.parentNode[w]) <= P + 1), f && (u = Sn(a), f && (o.style[i.op.p] = u[i.op.p] - i.op.m - o._offset + Xe))
            }
            return h && p && (w = Sn(p), h.seek(d), v = Sn(p), h._caScrollDist = w[i.p] - v[i.p], e = e / h._caScrollDist * d), h && h.seek(g), h ? e : Math.round(e)
        },
        jx = /(webkit|moz|length|cssText|inset)/i,
        Vp = function(e, r, n, i) {
            if (e.parentNode !== r) {
                var s = e.style,
                    o, a;
                if (r === we) {
                    e._stOrig = s.cssText, a = br(e);
                    for (o in a) !+o && !jx.test(o) && a[o] && typeof s[o] == "string" && o !== "0" && (s[o] = a[o]);
                    s.top = n, s.left = i
                } else s.cssText = e._stOrig;
                F.core.getCache(e).uncache = 1, r.appendChild(e)
            }
        },
        i6 = function(e, r, n) {
            var i = r,
                s = i;
            return function(o) {
                var a = Math.round(e());
                return a !== i && a !== s && Math.abs(a - i) > 3 && Math.abs(a - s) > 3 && (o = a, n && n()), s = i, i = o, o
            }
        },
        l0 = function(e, r, n) {
            var i = {};
            i[r.p] = "+=" + n, F.set(e, i)
        },
        Up = function(e, r) {
            var n = Ai(e, r),
                i = "_scroll" + r.p2,
                s = function o(a, l, u, c, f) {
                    var d = o.tween,
                        h = l.onComplete,
                        y = {};
                    u = u || n();
                    var g = i6(n, u, function() {
                        d.kill(), o.tween = 0
                    });
                    return f = c && f || 0, c = c || a - u, d && d.kill(), l[i] = a, l.inherit = !1, l.modifiers = y, y[i] = function() {
                        return g(u + c * d.ratio + f * d.ratio * d.ratio)
                    }, l.onUpdate = function() {
                        te.cache++, o.tween && En()
                    }, l.onComplete = function() {
                        o.tween = 0, h && h.call(d)
                    }, d = o.tween = F.to(e, l), d
                };
            return e[i] = n, n.wheelHandler = function() {
                return s.tween && s.tween.kill() && (s.tween = 0)
            }, ot(e, "wheel", n.wheelHandler), Z.isTouch && ot(e, "touchmove", n.wheelHandler), s
        },
        Z = function() {
            function t(r, n) {
                Ns || t.register(F) || console.warn("Please gsap.registerPlugin(ScrollTrigger)"), Hf(this), this.init(r, n)
            }
            var e = t.prototype;
            return e.init = function(n, i) {
                if (this.progress = this.start = 0, this.vars && this.kill(!0, !0), !fa) {
                    this.update = this.refresh = this.kill = sn;
                    return
                }
                n = Ip(ur(n) || ha(n) || n.nodeType ? {
                    trigger: n
                } : n, s0);
                var s = n,
                    o = s.onUpdate,
                    a = s.toggleClass,
                    l = s.id,
                    u = s.onToggle,
                    c = s.onRefresh,
                    f = s.scrub,
                    d = s.trigger,
                    h = s.pin,
                    y = s.pinSpacing,
                    g = s.invalidateOnRefresh,
                    w = s.anticipatePin,
                    v = s.onScrubComplete,
                    p = s.onSnapComplete,
                    x = s.once,
                    _ = s.snap,
                    C = s.pinReparent,
                    k = s.pinSpacer,
                    S = s.containerAnimation,
                    P = s.fastScrollEnd,
                    T = s.preventOverlaps,
                    b = n.horizontal || n.containerAnimation && n.horizontal !== !1 ? $t : et,
                    I = !f && f !== 0,
                    L = Qt(n.scroller || ie),
                    H = F.core.getCache(L),
                    V = ms(L),
                    X = ("pinType" in n ? n.pinType : vi(L, "pinType") || V && "fixed") === "fixed",
                    W = [n.onEnter, n.onLeave, n.onEnterBack, n.onLeaveBack],
                    B = I && n.toggleActions.split(" "),
                    R = "markers" in n ? n.markers : s0.markers,
                    z = V ? 0 : parseFloat(br(L)["border" + b.p2 + So]) || 0,
                    A = this,
                    G = n.onRefreshInit && function() {
                        return n.onRefreshInit(A)
                    },
                    oe = _x(L, V, b),
                    yt = wx(L, V),
                    ce = 0,
                    Fe = 0,
                    Pe = 0,
                    ye = Ai(L, b),
                    Rt, xt, Dn, Nt, Ir, le, Be, Wt, ir, E, sr, gn, Fn, We, Bn, Mi, Cs, nt, $n, $e, Dr, Cr, vn, Fo, Qe, El, Hn, As, Ss, Vn, Ri, ee, Ni, Fr, Br, $r, Li, ks, yn;
                if (A._startClamp = A._endClamp = !1, A._dir = b, w *= 45, A.scroller = L, A.scroll = S ? S.time.bind(S) : ye, Nt = ye(), A.vars = n, i = i || n.animation, "refreshPriority" in n && (V8 = 1, n.refreshPriority === -9999 && (Fa = A)), H.tweenScroll = H.tweenScroll || {
                        top: Up(L, et),
                        left: Up(L, $t)
                    }, A.tweenTo = Rt = H.tweenScroll[b.p], A.scrubDuration = function(O) {
                        Ni = ha(O) && O, Ni ? ee ? ee.duration(O) : ee = F.to(i, {
                            ease: "expo",
                            totalProgress: "+=0",
                            inherit: !1,
                            duration: Ni,
                            paused: !0,
                            onComplete: function() {
                                return v && v(A)
                            }
                        }) : (ee && ee.progress(1).kill(), ee = 0)
                    }, i && (i.vars.lazy = !1, i._initted && !A.isReverted || i.vars.immediateRender !== !1 && n.immediateRender !== !1 && i.duration() && i.render(0, !0, !0), A.animation = i.pause(), i.scrollTrigger = A, A.scrubDuration(f), Vn = 0, l || (l = i.vars.id)), _ && ((!Hi(_) || _.push) && (_ = {
                        snapTo: _
                    }), "scrollBehavior" in we.style && F.set(V ? [we, Yr] : L, {
                        scrollBehavior: "auto"
                    }), te.forEach(function(O) {
                        return Ht(O) && O.target === (V ? Te.scrollingElement || Yr : L) && (O.smooth = !1)
                    }), Dn = Ht(_.snapTo) ? _.snapTo : _.snapTo === "labels" ? Ax(i) : _.snapTo === "labelsDirectional" ? Sx(i) : _.directional !== !1 ? function(O, q) {
                        return Ed(_.snapTo)(O, Pt() - Fe < 500 ? 0 : q.direction)
                    } : F.utils.snap(_.snapTo), Fr = _.duration || {
                        min: .1,
                        max: 2
                    }, Fr = Hi(Fr) ? La(Fr.min, Fr.max) : La(Fr, Fr), Br = F.delayedCall(_.delay || Ni / 2 || .1, function() {
                        var O = ye(),
                            q = Pt() - Fe < 500,
                            $ = Rt.tween;
                        if ((q || Math.abs(A.getVelocity()) < 10) && !$ && !qu && ce !== O) {
                            var Q = (O - le) / We,
                                it = i && !I ? i.totalProgress() : Q,
                                ne = q ? 0 : (it - Ri) / (Pt() - ca) * 1e3 || 0,
                                He = F.utils.clamp(-Q, 1 - Q, Ts(ne / 2) * ne / .185),
                                _t = Q + (_.inertia === !1 ? 0 : He),
                                Oe, Ae, pe = _,
                                Hr = pe.onStart,
                                be = pe.onInterrupt,
                                or = pe.onComplete;
                            if (Oe = Dn(_t, A), ha(Oe) || (Oe = _t), Ae = Math.round(le + Oe * We), O <= Be && O >= le && Ae !== O) {
                                if ($ && !$._initted && $.data <= Ts(Ae - O)) return;
                                _.inertia === !1 && (He = Oe - Q), Rt(Ae, {
                                    duration: Fr(Ts(Math.max(Ts(_t - it), Ts(Oe - it)) * .185 / ne / .05 || 0)),
                                    ease: _.ease || "power3",
                                    data: Ts(Ae - O),
                                    onInterrupt: function() {
                                        return Br.restart(!0) && be && be(A)
                                    },
                                    onComplete: function() {
                                        A.update(), ce = ye(), i && (ee ? ee.resetTo("totalProgress", Oe, i._tTime / i._tDur) : i.progress(Oe)), Vn = Ri = i && !I ? i.totalProgress() : A.progress, p && p(A), or && or(A)
                                    }
                                }, O, He * We, Ae - O - He * We), Hr && Hr(A, Rt.tween)
                            }
                        } else A.isActive && ce !== O && Br.restart(!0)
                    }).pause()), l && (Uf[l] = A), d = A.trigger = Qt(d || h !== !0 && h), yn = d && d._gsap && d._gsap.stRevert, yn && (yn = yn(A)), h = h === !0 ? d : Qt(h), ur(a) && (a = {
                        targets: d,
                        className: a
                    }), h && (y === !1 || y === Pr || (y = !y && h.parentNode && h.parentNode.style && br(h.parentNode).display === "flex" ? !1 : Ye), A.pin = h, xt = F.core.getCache(h), xt.spacer ? Bn = xt.pinState : (k && (k = Qt(k), k && !k.nodeType && (k = k.current || k.nativeElement), xt.spacerIsNative = !!k, k && (xt.spacerState = a0(k))), xt.spacer = nt = k || Te.createElement("div"), nt.classList.add("pin-spacer"), l && nt.classList.add("pin-spacer-" + l), xt.pinState = Bn = a0(h)), n.force3D !== !1 && F.set(h, {
                        force3D: !0
                    }), A.spacer = nt = xt.spacer, Ss = br(h), Fo = Ss[y + b.os2], $e = F.getProperty(h), Dr = F.quickSetter(h, b.a, Xe), nc(h, nt, Ss), Cs = a0(h)), R) {
                    gn = Hi(R) ? Ip(R, Dp) : Dp, E = o0("scroller-start", l, L, b, gn, 0), sr = o0("scroller-end", l, L, b, gn, 0, E), $n = E["offset" + b.op.d2];
                    var Bo = Qt(vi(L, "content") || L);
                    Wt = this.markerStart = o0("start", l, Bo, b, gn, $n, 0, S), ir = this.markerEnd = o0("end", l, Bo, b, gn, $n, 0, S), S && (ks = F.quickSetter([Wt, ir], b.a, Xe)), !X && !(hn.length && vi(L, "fixedMarkers") === !0) && (Cx(V ? we : L), F.set([E, sr], {
                        force3D: !0
                    }), El = F.quickSetter(E, b.a, Xe), As = F.quickSetter(sr, b.a, Xe))
                }
                if (S) {
                    var Y = S.vars.onUpdate,
                        U = S.vars.onUpdateParams;
                    S.eventCallback("onUpdate", function() {
                        A.update(0, 0, 1), Y && Y.apply(S, U || [])
                    })
                }
                if (A.previous = function() {
                        return J[J.indexOf(A) - 1]
                    }, A.next = function() {
                        return J[J.indexOf(A) + 1]
                    }, A.revert = function(O, q) {
                        if (!q) return A.kill(!0);
                        var $ = O !== !1 || !A.enabled,
                            Q = kt;
                        $ !== A.isReverted && ($ && ($r = Math.max(ye(), A.scroll.rec || 0), Pe = A.progress, Li = i && i.progress()), Wt && [Wt, ir, E, sr].forEach(function(it) {
                            return it.style.display = $ ? "none" : "block"
                        }), $ && (kt = A, A.update($)), h && (!C || !A.isActive) && ($ ? bx(h, nt, Bn) : nc(h, nt, br(h), Qe)), $ || A.update($), kt = Q, A.isReverted = $)
                    }, A.refresh = function(O, q, $, Q) {
                        if (!((kt || !A.enabled) && !q)) {
                            if (h && O && Nr) {
                                ot(t, "scrollEnd", e6);
                                return
                            }!Ft && G && G(A), kt = A, Rt.tween && !$ && (Rt.tween.kill(), Rt.tween = 0), ee && ee.pause(), g && i && i.revert({
                                kill: !1
                            }).invalidate(), A.isReverted || A.revert(!0, !0), A._subPinOffset = !1;
                            var it = oe(),
                                ne = yt(),
                                He = S ? S.duration() : un(L, b),
                                _t = We <= .01,
                                Oe = 0,
                                Ae = Q || 0,
                                pe = Hi($) ? $.end : n.end,
                                Hr = n.endTrigger || d,
                                be = Hi($) ? $.start : n.start || (n.start === 0 || !d ? 0 : h ? "0 0" : "0 100%"),
                                or = A.pinnedContainer = n.pinnedContainer && Qt(n.pinnedContainer, A),
                                Xr = d && Math.max(0, J.indexOf(A)) || 0,
                                dt = Xr,
                                ht, wt, Oi, jl, Ct, Ze, Jr, m2, Ud, $o, en, Ho, Ml;
                            for (R && Hi($) && (Ho = F.getProperty(E, b.p), Ml = F.getProperty(sr, b.p)); dt--;) Ze = J[dt], Ze.end || Ze.refresh(0, 1) || (kt = A), Jr = Ze.pin, Jr && (Jr === d || Jr === h || Jr === or) && !Ze.isReverted && ($o || ($o = []), $o.unshift(Ze), Ze.revert(!0, !0)), Ze !== J[dt] && (Xr--, dt--);
                            for (Ht(be) && (be = be(A)), be = Np(be, "start", A), le = Hp(be, d, it, b, ye(), Wt, E, A, ne, z, X, He, S, A._startClamp && "_startClamp") || (h ? -.001 : 0), Ht(pe) && (pe = pe(A)), ur(pe) && !pe.indexOf("+=") && (~pe.indexOf(" ") ? pe = (ur(be) ? be.split(" ")[0] : "") + pe : (Oe = M0(pe.substr(2), it), pe = ur(be) ? be : (S ? F.utils.mapRange(0, S.duration(), S.scrollTrigger.start, S.scrollTrigger.end, le) : le) + Oe, Hr = d)), pe = Np(pe, "end", A), Be = Math.max(le, Hp(pe || (Hr ? "100% 0" : He), Hr, it, b, ye() + Oe, ir, sr, A, ne, z, X, He, S, A._endClamp && "_endClamp")) || -.001, Oe = 0, dt = Xr; dt--;) Ze = J[dt], Jr = Ze.pin, Jr && Ze.start - Ze._pinPush <= le && !S && Ze.end > 0 && (ht = Ze.end - (A._startClamp ? Math.max(0, Ze.start) : Ze.start), (Jr === d && Ze.start - Ze._pinPush < le || Jr === or) && isNaN(be) && (Oe += ht * (1 - Ze.progress)), Jr === h && (Ae += ht));
                            if (le += Oe, Be += Oe, A._startClamp && (A._startClamp += Oe), A._endClamp && !Ft && (A._endClamp = Be || -.001, Be = Math.min(Be, un(L, b))), We = Be - le || (le -= .01) && .001, _t && (Pe = F.utils.clamp(0, 1, F.utils.normalize(le, Be, $r))), A._pinPush = Ae, Wt && Oe && (ht = {}, ht[b.a] = "+=" + Oe, or && (ht[b.p] = "-=" + ye()), F.set([Wt, ir], ht)), h && !(Vf && A.end >= un(L, b))) ht = br(h), jl = b === et, Oi = ye(), Cr = parseFloat($e(b.a)) + Ae, !He && Be > 1 && (en = (V ? Te.scrollingElement || Yr : L).style, en = {
                                style: en,
                                value: en["overflow" + b.a.toUpperCase()]
                            }, V && br(we)["overflow" + b.a.toUpperCase()] !== "scroll" && (en.style["overflow" + b.a.toUpperCase()] = "scroll")), nc(h, nt, ht), Cs = a0(h), wt = Sn(h, !0), m2 = X && Ai(L, jl ? $t : et)(), y ? (Qe = [y + b.os2, We + Ae + Xe], Qe.t = nt, dt = y === Ye ? _u(h, b) + We + Ae : 0, dt && (Qe.push(b.d, dt + Xe), nt.style.flexBasis !== "auto" && (nt.style.flexBasis = dt + Xe)), uo(Qe), or && J.forEach(function(Vo) {
                                Vo.pin === or && Vo.vars.pinSpacing !== !1 && (Vo._subPinOffset = !0)
                            }), X && ye($r)) : (dt = _u(h, b), dt && nt.style.flexBasis !== "auto" && (nt.style.flexBasis = dt + Xe)), X && (Ct = {
                                top: wt.top + (jl ? Oi - le : m2) + Xe,
                                left: wt.left + (jl ? m2 : Oi - le) + Xe,
                                boxSizing: "border-box",
                                position: "fixed"
                            }, Ct[ns] = Ct["max" + So] = Math.ceil(wt.width) + Xe, Ct[is] = Ct["max" + Td] = Math.ceil(wt.height) + Xe, Ct[Pr] = Ct[Pr + Ia] = Ct[Pr + Oa] = Ct[Pr + Da] = Ct[Pr + za] = "0", Ct[Ye] = ht[Ye], Ct[Ye + Ia] = ht[Ye + Ia], Ct[Ye + Oa] = ht[Ye + Oa], Ct[Ye + Da] = ht[Ye + Da], Ct[Ye + za] = ht[Ye + za], Mi = Ex(Bn, Ct, C), Ft && ye(0)), i ? (Ud = i._initted, X2(1), i.render(i.duration(), !0, !0), vn = $e(b.a) - Cr + We + Ae, Hn = Math.abs(We - vn) > 1, X && Hn && Mi.splice(Mi.length - 2, 2), i.render(0, !0, !0), Ud || i.invalidate(!0), i.parent || i.totalTime(i.totalTime()), X2(0)) : vn = We, en && (en.value ? en.style["overflow" + b.a.toUpperCase()] = en.value : en.style.removeProperty("overflow-" + b.a));
                            else if (d && ye() && !S)
                                for (wt = d.parentNode; wt && wt !== we;) wt._pinOffset && (le -= wt._pinOffset, Be -= wt._pinOffset), wt = wt.parentNode;
                            $o && $o.forEach(function(Vo) {
                                return Vo.revert(!1, !0)
                            }), A.start = le, A.end = Be, Nt = Ir = Ft ? $r : ye(), !S && !Ft && (Nt < $r && ye($r), A.scroll.rec = 0), A.revert(!1, !0), Fe = Pt(), Br && (ce = -1, Br.restart(!0)), kt = 0, i && I && (i._initted || Li) && i.progress() !== Li && i.progress(Li || 0, !0).render(i.time(), !0, !0), (_t || Pe !== A.progress || S || g) && (i && !I && i.totalProgress(S && le < -.001 && !Pe ? F.utils.normalize(le, Be, 0) : Pe, !0), A.progress = _t || (Nt - le) / We === Pe ? 0 : Pe), h && y && (nt._pinOffset = Math.round(A.progress * vn)), ee && ee.invalidate(), isNaN(Ho) || (Ho -= F.getProperty(E, b.p), Ml -= F.getProperty(sr, b.p), l0(E, b, Ho), l0(Wt, b, Ho - (Q || 0)), l0(sr, b, Ml), l0(ir, b, Ml - (Q || 0))), _t && !Ft && A.update(), c && !Ft && !Fn && (Fn = !0, c(A), Fn = !1)
                        }
                    }, A.getVelocity = function() {
                        return (ye() - Ir) / (Pt() - ca) * 1e3 || 0
                    }, A.endAnimation = function() {
                        ea(A.callbackAnimation), i && (ee ? ee.progress(1) : i.paused() ? I || ea(i, A.direction < 0, 1) : ea(i, i.reversed()))
                    }, A.labelToScroll = function(O) {
                        return i && i.labels && (le || A.refresh() || le) + i.labels[O] / i.duration() * We || 0
                    }, A.getTrailing = function(O) {
                        var q = J.indexOf(A),
                            $ = A.direction > 0 ? J.slice(0, q).reverse() : J.slice(q + 1);
                        return (ur(O) ? $.filter(function(Q) {
                            return Q.vars.preventOverlaps === O
                        }) : $).filter(function(Q) {
                            return A.direction > 0 ? Q.end <= le : Q.start >= Be
                        })
                    }, A.update = function(O, q, $) {
                        if (!(S && !$ && !O)) {
                            var Q = Ft === !0 ? $r : A.scroll(),
                                it = O ? 0 : (Q - le) / We,
                                ne = it < 0 ? 0 : it > 1 ? 1 : it || 0,
                                He = A.progress,
                                _t, Oe, Ae, pe, Hr, be, or, Xr;
                            if (q && (Ir = Nt, Nt = S ? ye() : Q, _ && (Ri = Vn, Vn = i && !I ? i.totalProgress() : ne)), w && h && !kt && !t0 && Nr && (!ne && le < Q + (Q - Ir) / (Pt() - ca) * w ? ne = 1e-4 : ne === 1 && Be > Q + (Q - Ir) / (Pt() - ca) * w && (ne = .9999)), ne !== He && A.enabled) {
                                if (_t = A.isActive = !!ne && ne < 1, Oe = !!He && He < 1, be = _t !== Oe, Hr = be || !!ne != !!He, A.direction = ne > He ? 1 : -1, A.progress = ne, Hr && !kt && (Ae = ne && !He ? 0 : ne === 1 ? 1 : He === 1 ? 2 : 3, I && (pe = !be && B[Ae + 1] !== "none" && B[Ae + 1] || B[Ae], Xr = i && (pe === "complete" || pe === "reset" || pe in i))), T && (be || Xr) && (Xr || f || !i) && (Ht(T) ? T(A) : A.getTrailing(T).forEach(function(Oi) {
                                        return Oi.endAnimation()
                                    })), I || (ee && !kt && !t0 ? (ee._dp._time - ee._start !== ee._time && ee.render(ee._dp._time - ee._start), ee.resetTo ? ee.resetTo("totalProgress", ne, i._tTime / i._tDur) : (ee.vars.totalProgress = ne, ee.invalidate().restart())) : i && i.totalProgress(ne, !!(kt && (Fe || O)))), h) {
                                    if (O && y && (nt.style[y + b.os2] = Fo), !X) Dr(da(Cr + vn * ne));
                                    else if (Hr) {
                                        if (or = !O && ne > He && Be + 1 > Q && Q + 1 >= un(L, b), C)
                                            if (!O && (_t || or)) {
                                                var dt = Sn(h, !0),
                                                    ht = Q - le;
                                                Vp(h, we, dt.top + (b === et ? ht : 0) + Xe, dt.left + (b === et ? 0 : ht) + Xe)
                                            } else Vp(h, nt);
                                        uo(_t || or ? Mi : Cs), Hn && ne < 1 && _t || Dr(Cr + (ne === 1 && !or ? vn : 0))
                                    }
                                }
                                _ && !Rt.tween && !kt && !t0 && Br.restart(!0), a && (be || x && ne && (ne < 1 || !J2)) && pl(a.targets).forEach(function(Oi) {
                                    return Oi.classList[_t || x ? "add" : "remove"](a.className)
                                }), o && !I && !O && o(A), Hr && !kt ? (I && (Xr && (pe === "complete" ? i.pause().totalProgress(1) : pe === "reset" ? i.restart(!0).pause() : pe === "restart" ? i.restart(!0) : i[pe]()), o && o(A)), (be || !J2) && (u && be && tc(A, u), W[Ae] && tc(A, W[Ae]), x && (ne === 1 ? A.kill(!1, 1) : W[Ae] = 0), be || (Ae = ne === 1 ? 1 : 3, W[Ae] && tc(A, W[Ae]))), P && !_t && Math.abs(A.getVelocity()) > (ha(P) ? P : 2500) && (ea(A.callbackAnimation), ee ? ee.progress(1) : ea(i, pe === "reverse" ? 1 : !ne, 1))) : I && o && !kt && o(A)
                            }
                            if (As) {
                                var wt = S ? Q / S.duration() * (S._caScrollDist || 0) : Q;
                                El(wt + (E._isFlipped ? 1 : 0)), As(wt)
                            }
                            ks && ks(-Q / S.duration() * (S._caScrollDist || 0))
                        }
                    }, A.enable = function(O, q) {
                        A.enabled || (A.enabled = !0, ot(L, "resize", pa), V || ot(L, "scroll", Es), G && ot(t, "refreshInit", G), O !== !1 && (A.progress = Pe = 0, Nt = Ir = ce = ye()), q !== !1 && A.refresh())
                    }, A.getTween = function(O) {
                        return O && Rt ? Rt.tween : ee
                    }, A.setPositions = function(O, q, $, Q) {
                        if (S) {
                            var it = S.scrollTrigger,
                                ne = S.duration(),
                                He = it.end - it.start;
                            O = it.start + He * O / ne, q = it.start + He * q / ne
                        }
                        A.refresh(!1, !1, {
                            start: Lp(O, $ && !!A._startClamp),
                            end: Lp(q, $ && !!A._endClamp)
                        }, Q), A.update()
                    }, A.adjustPinSpacing = function(O) {
                        if (Qe && O) {
                            var q = Qe.indexOf(b.d) + 1;
                            Qe[q] = parseFloat(Qe[q]) + O + Xe, Qe[1] = parseFloat(Qe[1]) + O + Xe, uo(Qe)
                        }
                    }, A.disable = function(O, q) {
                        if (A.enabled && (O !== !1 && A.revert(!0, !0), A.enabled = A.isActive = !1, q || ee && ee.pause(), $r = 0, xt && (xt.uncache = 1), G && st(t, "refreshInit", G), Br && (Br.pause(), Rt.tween && Rt.tween.kill() && (Rt.tween = 0)), !V)) {
                            for (var $ = J.length; $--;)
                                if (J[$].scroller === L && J[$] !== A) return;
                            st(L, "resize", pa), V || st(L, "scroll", Es)
                        }
                    }, A.kill = function(O, q) {
                        A.disable(O, q), ee && !q && ee.kill(), l && delete Uf[l];
                        var $ = J.indexOf(A);
                        $ >= 0 && J.splice($, 1), $ === Dt && N0 > 0 && Dt--, $ = 0, J.forEach(function(Q) {
                            return Q.scroller === A.scroller && ($ = 1)
                        }), $ || Ft || (A.scroll.rec = 0), i && (i.scrollTrigger = null, O && i.revert({
                            kill: !1
                        }), q || i.kill()), Wt && [Wt, ir, E, sr].forEach(function(Q) {
                            return Q.parentNode && Q.parentNode.removeChild(Q)
                        }), Fa === A && (Fa = 0), h && (xt && (xt.uncache = 1), $ = 0, J.forEach(function(Q) {
                            return Q.pin === h && $++
                        }), $ || (xt.spacer = 0)), n.onKill && n.onKill(A)
                    }, J.push(A), A.enable(!1, !1), yn && yn(A), i && i.add && !We) {
                    var ue = A.update;
                    A.update = function() {
                        A.update = ue, le || Be || A.refresh()
                    }, F.delayedCall(.01, A.update), We = .01, le = Be = 0
                } else A.refresh();
                h && Px()
            }, t.register = function(n) {
                return Ns || (F = n || Y8(), Q8() && window.document && t.enable(), Ns = fa), Ns
            }, t.defaults = function(n) {
                if (n)
                    for (var i in n) s0[i] = n[i];
                return s0
            }, t.disable = function(n, i) {
                fa = 0, J.forEach(function(o) {
                    return o[i ? "kill" : "disable"](n)
                }), st(ie, "wheel", Es), st(Te, "scroll", Es), clearInterval(e0), st(Te, "touchcancel", sn), st(we, "touchstart", sn), n0(st, Te, "pointerdown,touchstart,mousedown", Op), n0(st, Te, "pointerup,touchend,mouseup", zp), yu.kill(), r0(st);
                for (var s = 0; s < te.length; s += 3) i0(st, te[s], te[s + 1]), i0(st, te[s], te[s + 2])
            }, t.enable = function() {
                if (ie = window, Te = document, Yr = Te.documentElement, we = Te.body, F && (pl = F.utils.toArray, La = F.utils.clamp, Hf = F.core.context || sn, X2 = F.core.suppressOverwrites || sn, Sd = ie.history.scrollRestoration || "auto", Gf = ie.pageYOffset, F.core.globals("ScrollTrigger", t), we)) {
                    fa = 1, lo = document.createElement("div"), lo.style.height = "100vh", lo.style.position = "absolute", n6(), xx(), Ge.register(F), t.isTouch = Ge.isTouch, Wn = Ge.isTouch && /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent), $f = Ge.isTouch === 1, ot(ie, "wheel", Es), H8 = [ie, Te, Yr, we], F.matchMedia ? (t.matchMedia = function(l) {
                        var u = F.matchMedia(),
                            c;
                        for (c in l) u.add(c, l[c]);
                        return u
                    }, F.addEventListener("matchMediaInit", function() {
                        return jd()
                    }), F.addEventListener("matchMediaRevert", function() {
                        return t6()
                    }), F.addEventListener("matchMedia", function() {
                        qi(0, 1), vs("matchMedia")
                    }), F.matchMedia("(orientation: portrait)", function() {
                        return rc(), rc
                    })) : console.warn("Requires GSAP 3.11.0 or later"), rc(), ot(Te, "scroll", Es);
                    var n = we.style,
                        i = n.borderTopStyle,
                        s = F.core.Animation.prototype,
                        o, a;
                    for (s.revert || Object.defineProperty(s, "revert", {
                            value: function() {
                                return this.time(-.01, !0)
                            }
                        }), n.borderTopStyle = "solid", o = Sn(we), et.m = Math.round(o.top + et.sc()) || 0, $t.m = Math.round(o.left + $t.sc()) || 0, i ? n.borderTopStyle = i : n.removeProperty("border-top-style"), e0 = setInterval(Fp, 250), F.delayedCall(.5, function() {
                            return t0 = 0
                        }), ot(Te, "touchcancel", sn), ot(we, "touchstart", sn), n0(ot, Te, "pointerdown,touchstart,mousedown", Op), n0(ot, Te, "pointerup,touchend,mouseup", zp), Bf = F.utils.checkPrefix("transform"), L0.push(Bf), Ns = Pt(), yu = F.delayedCall(.2, qi).pause(), Ls = [Te, "visibilitychange", function() {
                            var l = ie.innerWidth,
                                u = ie.innerHeight;
                            Te.hidden ? (Mp = l, Rp = u) : (Mp !== l || Rp !== u) && pa()
                        }, Te, "DOMContentLoaded", qi, ie, "load", qi, ie, "resize", pa], r0(ot), J.forEach(function(l) {
                            return l.enable(0, 1)
                        }), a = 0; a < te.length; a += 3) i0(st, te[a], te[a + 1]), i0(st, te[a], te[a + 2])
                }
            }, t.config = function(n) {
                "limitCallbacks" in n && (J2 = !!n.limitCallbacks);
                var i = n.syncInterval;
                i && clearInterval(e0) || (e0 = i) && setInterval(Fp, i), "ignoreMobileResize" in n && ($f = t.isTouch === 1 && n.ignoreMobileResize), "autoRefreshEvents" in n && (r0(st) || r0(ot, n.autoRefreshEvents || "none"), U8 = (n.autoRefreshEvents + "").indexOf("resize") === -1)
            }, t.scrollerProxy = function(n, i) {
                var s = Qt(n),
                    o = te.indexOf(s),
                    a = ms(s);
                ~o && te.splice(o, a ? 6 : 2), i && (a ? hn.unshift(ie, i, we, i, Yr, i) : hn.unshift(s, i))
            }, t.clearMatchMedia = function(n) {
                J.forEach(function(i) {
                    return i._ctx && i._ctx.query === n && i._ctx.kill(!0, !0)
                })
            }, t.isInViewport = function(n, i, s) {
                var o = (ur(n) ? Qt(n) : n).getBoundingClientRect(),
                    a = o[s ? ns : is] * i || 0;
                return s ? o.right - a > 0 && o.left + a < ie.innerWidth : o.bottom - a > 0 && o.top + a < ie.innerHeight
            }, t.positionInViewport = function(n, i, s) {
                ur(n) && (n = Qt(n));
                var o = n.getBoundingClientRect(),
                    a = o[s ? ns : is],
                    l = i == null ? a / 2 : i in wu ? wu[i] * a : ~i.indexOf("%") ? parseFloat(i) * a / 100 : parseFloat(i) || 0;
                return s ? (o.left + l) / ie.innerWidth : (o.top + l) / ie.innerHeight
            }, t.killAll = function(n) {
                if (J.slice(0).forEach(function(s) {
                        return s.vars.id !== "ScrollSmoother" && s.kill()
                    }), n !== !0) {
                    var i = gs.killAll || [];
                    gs = {}, i.forEach(function(s) {
                        return s()
                    })
                }
            }, t
        }();
    Z.version = "3.12.5";
    Z.saveStyles = function(t) {
        return t ? pl(t).forEach(function(e) {
            if (e && e.style) {
                var r = ar.indexOf(e);
                r >= 0 && ar.splice(r, 5), ar.push(e, e.style.cssText, e.getBBox && e.getAttribute("transform"), F.core.getCache(e), Hf())
            }
        }) : ar
    };
    Z.revert = function(t, e) {
        return jd(!t, e)
    };
    Z.create = function(t, e) {
        return new Z(t, e)
    };
    Z.refresh = function(t) {
        return t ? pa() : (Ns || Z.register()) && qi(!0)
    };
    Z.update = function(t) {
        return ++te.cache && En(t === !0 ? 2 : 0)
    };
    Z.clearScrollMemory = r6;
    Z.maxScroll = function(t, e) {
        return un(t, e ? $t : et)
    };
    Z.getScrollFunc = function(t, e) {
        return Ai(Qt(t), e ? $t : et)
    };
    Z.getById = function(t) {
        return Uf[t]
    };
    Z.getAll = function() {
        return J.filter(function(t) {
            return t.vars.id !== "ScrollSmoother"
        })
    };
    Z.isScrolling = function() {
        return !!Nr
    };
    Z.snapDirectional = Ed;
    Z.addEventListener = function(t, e) {
        var r = gs[t] || (gs[t] = []);
        ~r.indexOf(e) || r.push(e)
    };
    Z.removeEventListener = function(t, e) {
        var r = gs[t],
            n = r && r.indexOf(e);
        n >= 0 && r.splice(n, 1)
    };
    Z.batch = function(t, e) {
        var r = [],
            n = {},
            i = e.interval || .016,
            s = e.batchMax || 1e9,
            o = function(u, c) {
                var f = [],
                    d = [],
                    h = F.delayedCall(i, function() {
                        c(f, d), f = [], d = []
                    }).pause();
                return function(y) {
                    f.length || h.restart(!0), f.push(y.trigger), d.push(y), s <= f.length && h.progress(1)
                }
            },
            a;
        for (a in e) n[a] = a.substr(0, 2) === "on" && Ht(e[a]) && a !== "onRefreshInit" ? o(a, e[a]) : e[a];
        return Ht(s) && (s = s(), ot(Z, "refresh", function() {
            return s = e.batchMax()
        })), pl(t).forEach(function(l) {
            var u = {};
            for (a in n) u[a] = n[a];
            u.trigger = l, r.push(Z.create(u))
        }), r
    };
    var Gp = function(e, r, n, i) {
            return r > i ? e(i) : r < 0 && e(0), n > i ? (i - r) / (n - r) : n < 0 ? r / (r - n) : 1
        },
        ic = function t(e, r) {
            r === !0 ? e.style.removeProperty("touch-action") : e.style.touchAction = r === !0 ? "auto" : r ? "pan-" + r + (Ge.isTouch ? " pinch-zoom" : "") : "none", e === Yr && t(we, r)
        },
        u0 = {
            auto: 1,
            scroll: 1
        },
        Mx = function(e) {
            var r = e.event,
                n = e.target,
                i = e.axis,
                s = (r.changedTouches ? r.changedTouches[0] : r).target,
                o = s._gsap || F.core.getCache(s),
                a = Pt(),
                l;
            if (!o._isScrollT || a - o._isScrollT > 2e3) {
                for (; s && s !== we && (s.scrollHeight <= s.clientHeight && s.scrollWidth <= s.clientWidth || !(u0[(l = br(s)).overflowY] || u0[l.overflowX]));) s = s.parentNode;
                o._isScroll = s && s !== n && !ms(s) && (u0[(l = br(s)).overflowY] || u0[l.overflowX]), o._isScrollT = a
            }(o._isScroll || i === "x") && (r.stopPropagation(), r._gsapAllow = !0)
        },
        s6 = function(e, r, n, i) {
            return Ge.create({
                target: e,
                capture: !0,
                debounce: !1,
                lockAxis: !0,
                type: r,
                onWheel: i = i && Mx,
                onPress: i,
                onDrag: i,
                onScroll: i,
                onEnable: function() {
                    return n && ot(Te, Ge.eventTypes[0], Qp, !1, !0)
                },
                onDisable: function() {
                    return st(Te, Ge.eventTypes[0], Qp, !0)
                }
            })
        },
        Rx = /(input|label|select|textarea)/i,
        Wp, Qp = function(e) {
            var r = Rx.test(e.target.tagName);
            (r || Wp) && (e._gsapAllow = !0, Wp = r)
        },
        Nx = function(e) {
            Hi(e) || (e = {}), e.preventDefault = e.isNormalizer = e.allowClicks = !0, e.type || (e.type = "wheel,touch"), e.debounce = !!e.debounce, e.id = e.id || "normalizer";
            var r = e,
                n = r.normalizeScrollX,
                i = r.momentum,
                s = r.allowNestedScroll,
                o = r.onRelease,
                a, l, u = Qt(e.target) || Yr,
                c = F.core.globals().ScrollSmoother,
                f = c && c.get(),
                d = Wn && (e.content && Qt(e.content) || f && e.content !== !1 && !f.smooth() && f.content()),
                h = Ai(u, et),
                y = Ai(u, $t),
                g = 1,
                w = (Ge.isTouch && ie.visualViewport ? ie.visualViewport.scale * ie.visualViewport.width : ie.outerWidth) / ie.innerWidth,
                v = 0,
                p = Ht(i) ? function() {
                    return i(a)
                } : function() {
                    return i || 2.8
                },
                x, _, C = s6(u, e.type, !0, s),
                k = function() {
                    return _ = !1
                },
                S = sn,
                P = sn,
                T = function() {
                    l = un(u, et), P = La(Wn ? 1 : 0, l), n && (S = La(0, un(u, $t))), x = ss
                },
                b = function() {
                    d._gsap.y = da(parseFloat(d._gsap.y) + h.offset) + "px", d.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + parseFloat(d._gsap.y) + ", 0, 1)", h.offset = h.cacheID = 0
                },
                I = function() {
                    if (_) {
                        requestAnimationFrame(k);
                        var R = da(a.deltaY / 2),
                            z = P(h.v - R);
                        if (d && z !== h.v + h.offset) {
                            h.offset = z - h.v;
                            var A = da((parseFloat(d && d._gsap.y) || 0) - h.offset);
                            d.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + A + ", 0, 1)", d._gsap.y = A + "px", h.cacheID = te.cache, En()
                        }
                        return !0
                    }
                    h.offset && b(), _ = !0
                },
                L, H, V, X, W = function() {
                    T(), L.isActive() && L.vars.scrollY > l && (h() > l ? L.progress(1) && h(l) : L.resetTo("scrollY", l))
                };
            return d && F.set(d, {
                y: "+=0"
            }), e.ignoreCheck = function(B) {
                return Wn && B.type === "touchmove" && I() || g > 1.05 && B.type !== "touchstart" || a.isGesturing || B.touches && B.touches.length > 1
            }, e.onPress = function() {
                _ = !1;
                var B = g;
                g = da((ie.visualViewport && ie.visualViewport.scale || 1) / w), L.pause(), B !== g && ic(u, g > 1.01 ? !0 : n ? !1 : "x"), H = y(), V = h(), T(), x = ss
            }, e.onRelease = e.onGestureStart = function(B, R) {
                if (h.offset && b(), !R) X.restart(!0);
                else {
                    te.cache++;
                    var z = p(),
                        A, G;
                    n && (A = y(), G = A + z * .05 * -B.velocityX / .227, z *= Gp(y, A, G, un(u, $t)), L.vars.scrollX = S(G)), A = h(), G = A + z * .05 * -B.velocityY / .227, z *= Gp(h, A, G, un(u, et)), L.vars.scrollY = P(G), L.invalidate().duration(z).play(.01), (Wn && L.vars.scrollY >= l || A >= l - 1) && F.to({}, {
                        onUpdate: W,
                        duration: z
                    })
                }
                o && o(B)
            }, e.onWheel = function() {
                L._ts && L.pause(), Pt() - v > 1e3 && (x = 0, v = Pt())
            }, e.onChange = function(B, R, z, A, G) {
                if (ss !== x && T(), R && n && y(S(A[2] === R ? H + (B.startX - B.x) : y() + R - A[1])), z) {
                    h.offset && b();
                    var oe = G[2] === z,
                        yt = oe ? V + B.startY - B.y : h() + z - G[1],
                        ce = P(yt);
                    oe && yt !== ce && (V += ce - yt), h(ce)
                }(z || R) && En()
            }, e.onEnable = function() {
                ic(u, n ? !1 : "x"), Z.addEventListener("refresh", W), ot(ie, "resize", W), h.smooth && (h.target.style.scrollBehavior = "auto", h.smooth = y.smooth = !1), C.enable()
            }, e.onDisable = function() {
                ic(u, !0), st(ie, "resize", W), Z.removeEventListener("refresh", W), C.kill()
            }, e.lockAxis = e.lockAxis !== !1, a = new Ge(e), a.iOS = Wn, Wn && !h() && h(1), Wn && F.ticker.add(sn), X = a._dc, L = F.to(a, {
                ease: "power4",
                paused: !0,
                inherit: !1,
                scrollX: n ? "+=0.1" : "+=0",
                scrollY: "+=0.1",
                modifiers: {
                    scrollY: i6(h, h(), function() {
                        return L.pause()
                    })
                },
                onUpdate: En,
                onComplete: X.vars.onComplete
            }), a
        };
    Z.sort = function(t) {
        return J.sort(t || function(e, r) {
            return (e.vars.refreshPriority || 0) * -1e6 + e.start - (r.start + (r.vars.refreshPriority || 0) * -1e6)
        })
    };
    Z.observe = function(t) {
        return new Ge(t)
    };
    Z.normalizeScroll = function(t) {
        if (typeof t > "u") return zt;
        if (t === !0 && zt) return zt.enable();
        if (t === !1) {
            zt && zt.kill(), zt = t;
            return
        }
        var e = t instanceof Ge ? t : Nx(t);
        return zt && zt.target === e.target && zt.kill(), ms(e.target) && (zt = e), e
    };
    Z.core = {
        _getVelocityProp: Ff,
        _inputObserver: s6,
        _scrollers: te,
        _proxies: hn,
        bridge: {
            ss: function() {
                Nr || vs("scrollStart"), Nr = Pt()
            },
            ref: function() {
                return kt
            }
        }
    };
    Y8() && F.registerPlugin(Z);

    function jo(t) {
        return M.useRef(null), M.useRef(null), fe.registerPlugin(Z), M.useEffect(() => {
            document.querySelectorAll(".trans-line").forEach(r => {
                Z.create({
                    trigger: r.parentElement,
                    start: "top 90%",
                    end: "bottom 70%",
                    scrub: !0,
                    animation: fe.to(r, {
                        scaleY: 1
                    })
                })
            })
        }, []), m.jsx(m.Fragment, {
            children: m.jsx("div", {
                className: `h-[240px] -500:h-[148px] w-full flex justify-center items-center ${t.className}`,
                children: m.jsx("div", {
                    className: "trans-line h-full w-[1px] rounded-[40px] scale-y-0 origin-top"
                })
            })
        })
    }

    function Lx({
        className: t,
        height: e = 30,
        width: r = 30
    }) {
        return m.jsxs("div", {
            style: {
                height: `${e}px`,
                width: `${r}px`
            },
            className: `relative  ${t}`,
            children: [m.jsx("div", {
                className: "border-[4px] w-full left-0 top-0 h-full border-[#F0AC88] rounded-[50%]  absolute"
            }), m.jsx("div", {
                className: "border-[4px] w-full left-0 top-0 h-full rounded-[50%] border-x-[transparent] spinner rotate-0 border-[#F0AC88] border-t-white absolute"
            })]
        })
    }

    function Ox() {
        fe.registerPlugin(Z);
        const [t, e] = M.useState(0), [r, n] = M.useState(0), [i, s] = M.useState(0), [o, a] = M.useState(0), [l, u] = M.useState(0);
        M.useState("");
        const [c, f] = M.useState(""), v = [{
            suffix: c,
            prefix: "$",
            para: "Market Cap",
            fn: e,
            factor: .1,
            freq: 20,
            limit: 3.5,
            number: t,
            interval: void 0
        }, {
            suffix: "+",
            para: "Total Minutes Saved",
            fn: n,
            factor: 311,
            freq: 58,
            limit: 2e5,
            number: r,
            interval: void 0
        }, {
            suffix: "+",
            para: "Lines Of Code Analyzed",
            fn: s,
            factor: 417631,
            freq: 80,
            limit: 1e8,
            number: i,
            interval: void 0
        }, {
            suffix: "%",
            para: "Higher Satisfaction Rates Over Those Not Using MicroGPT",
            fn: a,
            factor: 5,
            freq: 100,
            limit: 75,
            number: o,
            interval: void 0
        }, {
            suffix: "%",
            para: "More Efficient Than The Same Group",
            fn: u,
            factor: 5,
            freq: 100,
            limit: 55,
            number: l,
            interval: void 0
        }];

        function p(k, S, P, T, b) {
            b = setInterval(() => {
                const I = document.querySelector(".stats-text");
                k(L => L >= T && I ? (fe.to(".stats-text", {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    ease: "power2.out"
                }), clearInterval(b), L) : L + S)
            }, P)
        }
        M.useEffect(() => (fe.set(".stats-text", {
            opacity: 0,
            y: 100
        }), fe.to(".stats-cont", {
            opacity: 1,
            delay: .2,
            scrollTrigger: {
                trigger: ".stats-cont",
                start: "30% 85%"
            },
            onStart: () => {
                v.slice(1).forEach(S => {
                    p(S.fn, S.factor, S.freq, S.limit, S.interval)
                })
            }
        }), () => {}), []);

        function x(k) {
            return k >= 1e9 ? (k / 1e9).toFixed(1) + "B" : k >= 1e6 ? (k / 1e6).toFixed(1) + "M" : k >= 1e3 ? (k / 1e3).toFixed(1) + "K" : k.toString()
        }
        const _ = M.useRef(!1);
        async function C() {
            _.current = !0;
            const k = await fetch("https://api.geckoterminal.com/api/v2/networks/eth/tokens/0x8cedb0680531d26e62abdbd0f4c5428b7fdc26d5", {
                method: "GET",
                headers: {
                    accept: "application/json"
                }
            });
            if (k.ok) {
                const S = await k.json();
                let {
                    total_supply: P,
                    price_usd: T
                } = S.data.attributes;
                P = Number(P) / Math.pow(10, 18), T = Number(T);
                const b = x(P * T),
                    I = Number(b.slice(0, -1)),
                    L = b.slice(-1),
                    H = v[0];
                f(L), p(H.fn, H.factor, H.freq, I - .1, H.interval)
            }
        }
        return M.useEffect(() => {
            _.current || C()
        }, []), m.jsxs("section", {
            className: " text-white mt-[0px] w-full px-5 max-w-[1440px] mx-auto",
            children: [m.jsxs("div", {
                className: "flex justify-center items-center gap-16 -768:flex-col",
                children: [m.jsx("img", {
                    src: hx,
                    className: "h-[318px] -500:h-[220px]",
                    alt: ""
                }), m.jsxs("div", {
                    className: "flex flex-col gap-4 items-start max-w-[420px] w-full ",
                    children: [m.jsx("h2", {
                        className: "sub-heading grey-gradient-text font-bold leading-[120%] text-left",
                        children: "Instant Project Kickstart in Minutes"
                    }), m.jsxs("p", {
                        className: "leading-[150%] text-left text-xl -500:text-base",
                        children: ["MicroGPT turns ideas into fully functional ", " ", m.jsx("span", {
                            className: "text-[#F0AC88] font-bold",
                            children: "MVPs"
                        }), ", in minutes, helping teams prototype faster than ever."]
                    })]
                })]
            }), m.jsxs("div", {
                className: "stats-robots stats-cont justify-center items-center relative mt-[160px] -768:mt-[100px] gap-16 -1100:gap-8 flex-col w-[95%] min-h-[500px] -1300:min-h-[430px] -1024:min-h-[initial] mx-auto",
                children: [m.jsx("img", {
                    src: px,
                    className: "h-full w-full absolute z-[3] -1024:relative -1024:h-[330px] -768:h-[230px] -650:hidden",
                    alt: ""
                }), m.jsx("img", {
                    src: mx,
                    className: "hidden -650:block h-[280px] -500:h-[200px] mx-auto -400:h-[180px]",
                    alt: ""
                }), m.jsxs("div", {
                    className: " h-full  w-full absolute -1024:relative eff-stats-gradient z-[5]",
                    children: [m.jsx("div", {
                        className: "bg-[#F0AC88] h-[150px] -768:hidden w-[150px] ml-blur absolute right-[0%] top-[30%]"
                    }), m.jsxs("div", {
                        className: "flex items-start text-white w-full justify-between absolute -1024:relative bottom-0 font-worksans -1024:flex-col -1024:gap-8 -1024:mt-8",
                        children: [m.jsx("div", {
                            className: "flex justify-between items-start w-[30%] -1024:w-full -1024:justify-center gap-16 -1024:gap-8",
                            children: v.slice(0, 2).map(k => m.jsx(Yp, {
                                stat: k
                            }, k.para + Math.random()))
                        }), m.jsx("div", {
                            className: "flex justify-between items-start w-[60%] -1024:w-full -1024:justify-center gap-16 -1024:gap-8 -1024:flex-wrap",
                            children: v.slice(2).map(k => m.jsx(Yp, {
                                stat: k
                            }, k.para + Math.random()))
                        })]
                    })]
                })]
            }), m.jsx("div", {
                className: "flex justify-center items-center mt-[100px]",
                children: m.jsx(jo, {
                    trigger: ".stats-robots"
                })
            })]
        })
    }

    function Yp({
        stat: t
    }) {
        return m.jsxs("div", {
            className: "flex flex-col items-center max-w-[230px] -1200:max-w-[250px] -1024:w-[250px] justify-center",
            children: [m.jsxs("span", {
                className: "flex justify-center items-center text-5xl -1200:text-[2rem] purple-gradient-text font-bold tracking-tighter",
                children: [m.jsx("p", {
                    children: t.prefix || ""
                }), m.jsx("p", {
                    children: t.number === 0 ? m.jsx(Lx, {
                        height: 23,
                        width: 23,
                        className: "ml-2"
                    }) : t.number.toLocaleString()
                }), m.jsx("p", {
                    children: t.suffix || ""
                })]
            }), m.jsx("p", {
                className: "text-sm text-opacity-70 text-white stats-text text-center",
                children: t.para
            })]
        })
    }
    const zx = "data:image/svg+xml,%3csvg%20width='120'%20height='131'%20viewBox='0%200%20120%20131'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M65.706%2085.9563C63.957%2087.7909%2062.0282%2088.8095%2059.9996%2088.8095C57.971%2088.8095%2056.0422%2087.7909%2054.2932%2085.9563M68.5592%20111.635L68.1882%20113.481C67.7888%20115.498%2067.5862%20116.505%2067.1326%20117.304C66.4335%20118.536%2065.3017%20119.463%2063.957%20119.906C63.0867%20120.195%2062.0539%20120.195%2059.9996%20120.195C57.9453%20120.195%2056.9124%20120.195%2056.0422%20119.909C54.697%20119.465%2053.5651%20118.537%2052.8666%20117.304C52.4129%20116.505%2052.2104%20115.498%2051.8109%20113.481L51.44%20111.635'%20fill='%238972FB'%20fill-opacity='0.71'/%3e%3cpath%20d='M65.7064%2085.9563C63.9574%2087.7909%2062.0286%2088.8095%2060%2088.8095C57.9714%2088.8095%2056.0426%2087.7909%2054.2936%2085.9563M46.8268%20106.208C46.5643%20105.421%2046.4331%20105.024%2046.4473%20104.705C46.4635%20104.374%2046.575%20104.056%2046.7684%20103.787C46.9619%20103.519%2047.2289%20103.312%2047.5373%20103.192C47.834%20103.075%2048.2506%20103.075%2049.078%20103.075H70.922C71.7523%20103.075%2072.166%20103.075%2072.4627%20103.19C72.7715%20103.31%2073.0388%20103.517%2073.2323%20103.785C73.4258%20104.054%2073.537%20104.374%2073.5526%20104.705C73.5669%20105.024%2073.4357%20105.418%2073.1732%20106.208C72.6881%20107.666%2072.4456%20108.397%2072.0718%20108.987C71.2901%20110.222%2070.0646%20111.109%2068.648%20111.467C67.969%20111.635%2067.2043%20111.635%2065.6721%20111.635H54.3279C52.7957%20111.635%2052.0282%20111.635%2051.352%20111.464C49.9358%20111.107%2048.7105%20110.22%2047.9281%20108.987C47.5544%20108.397%2047.3119%20107.666%2046.8268%20106.208ZM60%20101.649V88.8095V101.649Z'%20fill='%238972FB'/%3e%3ccircle%20cx='60'%20cy='49.1888'%20r='22.7091'%20fill='white'/%3e%3cg%20filter='url(%23filter0_i_8_620)'%3e%3cpath%20d='M60%2010.1946C82.05%2010.1946%20100%2027.9096%20100%2049.8596C100%2064.8896%2092.39%2075.8396%2086.1%2082.3296L84.68%2083.7446L83.33%2085.0046L82.07%2086.1046L80.42%2087.4546L78.78%2088.6746C77.575%2089.5246%2076.765%2090.7696%2076.03%2092.0646L75.005%2093.8846C73.815%2095.9346%2072.42%2097.6946%2069.465%2097.6946H50.535C47.585%2097.6946%2046.185%2095.9396%2044.995%2093.8846L44.405%2092.8446C43.545%2091.2846%2042.665%2089.6946%2041.22%2088.6746L40.06%2087.8196L39.065%2087.0446L37.93%2086.1046L36.67%2085.0046L35.32%2083.7446L33.895%2082.3296C27.61%2075.8396%2020%2064.8896%2020%2049.8596C20%2027.9096%2037.95%2010.1946%2060%2010.1946ZM68.535%2031.6596C67.674%2030.7987%2066.5285%2030.2815%2065.3134%2030.2051C64.0983%2030.1287%2062.897%2030.4983%2061.935%2031.2446L61.465%2031.6596L51.5%2041.6246C50.6307%2042.494%2050.1083%2043.6507%2050.031%2044.8777C49.9537%2046.1048%2050.3267%2047.3179%2051.08%2048.2896L51.5%2048.7646L57.93%2055.1946L51.465%2061.6596C50.5683%2062.5594%2050.0476%2063.7668%2050.0089%2065.0365C49.9701%2066.3062%2050.4161%2067.5431%2051.2562%2068.496C52.0964%2069.4488%2053.2678%2070.0461%2054.5324%2070.1666C55.797%2070.287%2057.06%2069.9216%2058.065%2069.1446L58.535%2068.7296L68.5%2058.7646C69.3693%2057.8952%2069.8917%2056.7385%2069.969%2055.5114C70.0463%2054.2844%2069.6733%2053.0712%2068.92%2052.0996L68.5%2051.6246L62.07%2045.1946L68.535%2038.7296C69.4724%2037.7919%2069.9989%2036.5204%2069.9989%2035.1946C69.9989%2033.8688%2069.4724%2032.5972%2068.535%2031.6596Z'%20fill='%23F0AC88'/%3e%3c/g%3e%3cdefs%3e%3cfilter%20id='filter0_i_8_620'%20x='20'%20y='10.1946'%20width='80'%20height='91.5'%20filterUnits='userSpaceOnUse'%20color-interpolation-filters='sRGB'%3e%3cfeFlood%20flood-opacity='0'%20result='BackgroundImageFix'/%3e%3cfeBlend%20mode='normal'%20in='SourceGraphic'%20in2='BackgroundImageFix'%20result='shape'/%3e%3cfeColorMatrix%20in='SourceAlpha'%20type='matrix'%20values='0%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%20127%200'%20result='hardAlpha'/%3e%3cfeOffset%20dy='4'/%3e%3cfeGaussianBlur%20stdDeviation='12.5'/%3e%3cfeComposite%20in2='hardAlpha'%20operator='arithmetic'%20k2='-1'%20k3='1'/%3e%3cfeColorMatrix%20type='matrix'%20values='0%200%200%200%201%200%200%200%200%201%200%200%200%200%201%200%200%200%200.7%200'/%3e%3cfeBlend%20mode='normal'%20in2='shape'%20result='effect1_innerShadow_8_620'/%3e%3c/filter%3e%3c/defs%3e%3c/svg%3e",
        Ix = "/assets/debug-CzUgSIBP.svg",
        Dx = "data:image/svg+xml,%3csvg%20width='130'%20height='135'%20viewBox='0%200%20130%20135'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M82.2723%2066.9804C82.0747%2058.4083%2075.0159%2051.5914%2066.442%2051.6928H25.6231V82.2676H52.0593V107.98C51.9477%20109.993%2052.243%20112.007%2052.9274%20113.903C53.6118%20115.8%2054.6713%20117.538%2056.0427%20119.016C57.4141%20120.494%2059.0692%20121.68%2060.9092%20122.503C62.7492%20123.327%2064.7363%20123.771%2066.7518%20123.81C68.8104%20123.79%2070.8448%20123.364%2072.7388%20122.558C74.6329%20121.751%2076.3496%20120.58%2077.7908%20119.11C79.232%20117.64%2080.3695%20115.9%2081.1384%20113.99C81.9073%20112.081%2082.2924%20110.038%2082.2719%20107.98L82.2723%2066.9804Z'%20fill='%238972FB'/%3e%3cpath%20d='M25.4426%2082.604C33.9714%2082.604%2040.8854%2075.69%2040.8854%2067.1613C40.8854%2058.6325%2033.9714%2051.7185%2025.4426%2051.7185C16.9138%2051.7185%209.99989%2058.6325%209.99989%2067.1613C9.99989%2075.69%2016.9138%2082.604%2025.4426%2082.604Z'%20fill='%236D56E3'/%3e%3cg%20filter='url(%23filter0_i_8_645)'%3e%3cpath%20d='M119.961%2026.0073C119.875%2017.4957%20112.951%2010.6418%20104.44%2010.6418H62.6909C54.759%2011.438%2048.7206%2018.1131%2048.7206%2026.0846C48.7206%2034.056%2054.7594%2040.7311%2062.6909%2041.5273H89.4373V67.2133C89.3519%2069.2724%2089.6838%2071.3275%2090.413%2073.2551C91.1422%2075.1827%2092.2535%2076.9429%2093.6803%2078.43C95.1071%2079.9171%2096.8198%2081.1004%2098.7156%2081.9088C100.611%2082.7171%20102.651%2083.1338%20104.712%2083.1338C106.773%2083.1338%20108.812%2082.7171%20110.708%2081.9088C112.604%2081.1004%20114.316%2079.9171%20115.743%2078.43C117.17%2076.9429%20118.281%2075.1827%20119.011%2073.2551C119.74%2071.3275%20120.072%2069.2724%20119.986%2067.2133L119.961%2026.0073Z'%20fill='%23F0AC88'/%3e%3c/g%3e%3cdefs%3e%3cfilter%20id='filter0_i_8_645'%20x='48.7206'%20y='10.6418'%20width='71.2788'%20height='76.4919'%20filterUnits='userSpaceOnUse'%20color-interpolation-filters='sRGB'%3e%3cfeFlood%20flood-opacity='0'%20result='BackgroundImageFix'/%3e%3cfeBlend%20mode='normal'%20in='SourceGraphic'%20in2='BackgroundImageFix'%20result='shape'/%3e%3cfeColorMatrix%20in='SourceAlpha'%20type='matrix'%20values='0%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%20127%200'%20result='hardAlpha'/%3e%3cfeOffset%20dy='4'/%3e%3cfeGaussianBlur%20stdDeviation='12.5'/%3e%3cfeComposite%20in2='hardAlpha'%20operator='arithmetic'%20k2='-1'%20k3='1'/%3e%3cfeColorMatrix%20type='matrix'%20values='0%200%200%200%201%200%200%200%200%201%200%200%200%200%201%200%200%200%200.7%200'/%3e%3cfeBlend%20mode='normal'%20in2='shape'%20result='effect1_innerShadow_8_645'/%3e%3c/filter%3e%3c/defs%3e%3c/svg%3e",
        Fx = "/assets/documentation-DWvgiitP.svg",
        Bx = "data:image/svg+xml,%3csvg%20width='104'%20height='105'%20viewBox='0%200%20104%20105'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_69_2159)'%3e%3cg%20filter='url(%23filter0_i_69_2159)'%3e%3cpath%20d='M63.3533%2011.73C64.1758%2011.9602%2064.9449%2012.3501%2065.6166%2012.8776C66.2883%2013.4052%2066.8495%2014.0599%2067.268%2014.8044C67.6866%2015.5489%2067.9543%2016.3686%2068.0558%2017.2166C68.1574%2018.0647%2068.0909%2018.9244%2067.86%2019.7467L48.659%2088.157C48.1935%2089.8172%2047.0877%2091.2244%2045.5847%2092.0691C44.0816%2092.9139%2042.3046%2093.127%2040.6445%2092.6615C38.9844%2092.1961%2037.5771%2091.0902%2036.7324%2089.5872C35.8876%2088.0842%2035.6745%2086.3072%2036.14%2084.647L55.341%2016.228C55.5716%2015.4059%2055.9619%2014.6373%2056.4896%2013.9661C57.0173%2013.2948%2057.6721%2012.7341%2058.4166%2012.316C59.161%2011.8979%2059.9806%2011.6306%2060.8284%2011.5293C61.6762%2011.428%2062.5356%2011.4947%2063.3577%2011.7257L63.3533%2011.73ZM32.76%2029.215C33.9772%2030.4338%2034.6609%2032.0859%2034.6609%2033.8084C34.6609%2035.5309%2033.9772%2037.1829%2032.76%2038.4017L18.98%2052.1947L32.7687%2065.9834C33.9875%2067.2027%2034.6719%2068.8563%2034.6715%2070.5804C34.6711%2072.3045%2033.9859%2073.9577%2032.7665%2075.1765C31.5471%2076.3953%2029.8935%2077.0798%2028.1695%2077.0794C26.4454%2077.079%2024.7921%2076.3937%2023.5733%2075.1744L5.18699%2056.788C3.96975%2055.5693%203.28604%2053.9172%203.28604%2052.1947C3.28604%2050.4722%203.96975%2048.8201%205.18699%2047.6014L23.569%2029.215C24.1726%2028.611%2024.8894%2028.1319%2025.6783%2027.8049C26.4671%2027.478%2027.3127%2027.3098%2028.1667%2027.3098C29.0206%2027.3098%2029.8662%2027.478%2030.6551%2027.8049C31.4439%2028.1319%2032.1564%2028.611%2032.76%2029.215Z'%20fill='%23F0AC88'/%3e%3c/g%3e%3cpath%20d='M69.7341%2036.2915C70.0894%2037.0888%2070.6016%2037.8064%2071.2402%2038.4015L85.0245%2052.1945L71.2359%2065.9831C70.6324%2066.5869%2070.1537%2067.3036%2069.8272%2068.0924C69.5007%2068.8812%2069.3328%2069.7265%2069.333%2070.5802C69.3332%2071.4338%2069.5015%2072.2791%2069.8284%2073.0677C70.1553%2073.8563%2070.6343%2074.5728%2071.238%2075.1763C71.8418%2075.7798%2072.5585%2076.2585%2073.3473%2076.5849C74.136%2076.9114%2074.9814%2077.0794%2075.8351%2077.0792C76.6887%2077.079%2077.534%2076.9106%2078.3226%2076.5838C79.1112%2076.2569%2079.8277%2075.7779%2080.4312%2075.1741L98.8132%2056.7878C100.032%2055.5689%20100.716%2053.9159%20100.716%2052.1923C100.716%2050.4687%20100.032%2048.8157%2098.8132%2047.5968L80.4269%2029.2148C79.8318%2028.5762%2079.1142%2028.064%2078.3169%2027.7087C77.5195%2027.3534%2076.6588%2027.1624%2075.7861%2027.147C74.9133%2027.1316%2074.0464%2027.2922%2073.237%2027.6191C72.4276%2027.946%2071.6924%2028.4326%2071.0752%2029.0498C70.458%2029.667%2069.9714%2030.4023%2069.6445%2031.2116C69.3175%2032.021%2069.157%2032.8879%2069.1724%2033.7607C69.1878%2034.6334%2069.3788%2035.4941%2069.7341%2036.2915Z'%20fill='%238972FB'/%3e%3c/g%3e%3cdefs%3e%3cfilter%20id='filter0_i_69_2159'%20x='3.28604'%20y='11.4834'%20width='64.8159'%20height='84.6194'%20filterUnits='userSpaceOnUse'%20color-interpolation-filters='sRGB'%3e%3cfeFlood%20flood-opacity='0'%20result='BackgroundImageFix'/%3e%3cfeBlend%20mode='normal'%20in='SourceGraphic'%20in2='BackgroundImageFix'%20result='shape'/%3e%3cfeColorMatrix%20in='SourceAlpha'%20type='matrix'%20values='0%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%20127%200'%20result='hardAlpha'/%3e%3cfeOffset%20dy='3.2'/%3e%3cfeGaussianBlur%20stdDeviation='10'/%3e%3cfeComposite%20in2='hardAlpha'%20operator='arithmetic'%20k2='-1'%20k3='1'/%3e%3cfeColorMatrix%20type='matrix'%20values='0%200%200%200%201%200%200%200%200%201%200%200%200%200%201%200%200%200%200.7%200'/%3e%3cfeBlend%20mode='normal'%20in2='shape'%20result='effect1_innerShadow_69_2159'/%3e%3c/filter%3e%3cclipPath%20id='clip0_69_2159'%3e%3crect%20width='104'%20height='104'%20fill='white'%20transform='translate(0%200.19458)'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",
        $x = "data:image/svg+xml,%3csvg%20width='107'%20height='108'%20viewBox='0%200%20107%20108'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M14%2025C14%2021.8174%2015.2537%2018.7652%2017.4854%2016.5147C19.7171%2014.2643%2022.7439%2013%2025.9%2013L81.225%2013C84.3811%2013%2087.4079%2014.2643%2089.6396%2016.5147C91.8713%2018.7652%2093.125%2021.8174%2093.125%2025C93.125%2028.1826%2091.8713%2031.2348%2089.6396%2033.4853C87.4079%2035.7357%2084.3811%2037%2081.225%2037H25.9C22.7439%2037%2019.7171%2035.7357%2017.4854%2033.4853C15.2537%2031.2348%2014%2028.1826%2014%2025ZM25.9%2019.8571C26.5697%2019.8571%2027.2329%2019.9902%2027.8517%2020.2486C28.4704%2020.5071%2029.0327%2020.8859%2029.5062%2021.3635C29.9798%2021.841%2030.3555%2022.408%2030.6118%2023.0319C30.8681%2023.6559%2031%2024.3246%2031%2025C31%2025.6754%2030.8681%2026.3441%2030.6118%2026.9681C30.3555%2027.592%2029.9798%2028.159%2029.5062%2028.6366C29.0327%2029.1141%2028.4704%2029.4929%2027.8517%2029.7514C27.2329%2030.0098%2026.5697%2030.1429%2025.9%2030.1429C24.5474%2030.1429%2023.2502%2029.601%2022.2938%2028.6366C21.3373%2027.6721%2020.8%2026.364%2020.8%2025C20.8%2023.636%2021.3373%2022.3279%2022.2938%2021.3635C23.2502%2020.399%2024.5474%2019.8571%2025.9%2019.8571Z'%20fill='%238972FB'/%3e%3cg%20filter='url(%23filter0_i_69_2151)'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M93.1251%2053.5C93.1251%2050.3174%2091.8713%2047.2652%2089.6396%2045.0147C87.408%2042.7643%2084.3812%2041.5%2081.2251%2041.5L25.9001%2041.5C22.744%2041.5%2019.7172%2042.7643%2017.4855%2045.0147C15.2538%2047.2652%2014.0001%2050.3174%2014.0001%2053.5C14.0001%2056.6826%2015.2538%2059.7348%2017.4855%2061.9853C19.7172%2064.2357%2022.744%2065.5%2025.9001%2065.5H81.2251C84.3812%2065.5%2087.408%2064.2357%2089.6396%2061.9853C91.8713%2059.7348%2093.1251%2056.6826%2093.1251%2053.5ZM81.2251%2048.3571C80.5553%2048.3571%2079.8922%2048.4902%2079.2734%2048.7486C78.6546%2049.0071%2078.0924%2049.3859%2077.6188%2049.8635C77.1453%2050.341%2076.7696%2050.908%2076.5133%2051.5319C76.257%2052.1559%2076.1251%2052.8246%2076.1251%2053.5C76.1251%2054.1754%2076.257%2054.8441%2076.5133%2055.4681C76.7696%2056.092%2077.1453%2056.659%2077.6188%2057.1366C78.0924%2057.6141%2078.6546%2057.9929%2079.2734%2058.2514C79.8922%2058.5098%2080.5553%2058.6429%2081.2251%2058.6429C82.5777%2058.6429%2083.8749%2058.101%2084.8313%2057.1366C85.7878%2056.1721%2086.3251%2054.864%2086.3251%2053.5C86.3251%2052.136%2085.7878%2050.8279%2084.8313%2049.8635C83.8749%2048.899%2082.5777%2048.3571%2081.2251%2048.3571Z'%20fill='%23F0AC88'/%3e%3c/g%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M14%2082C14%2078.8174%2015.2537%2075.7652%2017.4854%2073.5147C19.7171%2071.2643%2022.7439%2070%2025.9%2070L81.225%2070C84.3811%2070%2087.4079%2071.2643%2089.6396%2073.5147C91.8713%2075.7652%2093.125%2078.8174%2093.125%2082C93.125%2085.1826%2091.8713%2088.2348%2089.6396%2090.4853C87.4079%2092.7357%2084.3811%2094%2081.225%2094H25.9C22.7439%2094%2019.7171%2092.7357%2017.4854%2090.4853C15.2537%2088.2348%2014%2085.1826%2014%2082ZM25.9%2076.8571C26.5697%2076.8571%2027.2329%2076.9902%2027.8517%2077.2486C28.4704%2077.5071%2029.0327%2077.8859%2029.5062%2078.3635C29.9798%2078.841%2030.3555%2079.408%2030.6118%2080.0319C30.8681%2080.6559%2031%2081.3246%2031%2082C31%2082.6754%2030.8681%2083.3441%2030.6118%2083.9681C30.3555%2084.592%2029.9798%2085.159%2029.5062%2085.6366C29.0327%2086.1141%2028.4704%2086.4929%2027.8517%2086.7514C27.2329%2087.0098%2026.5697%2087.1429%2025.9%2087.1429C24.5474%2087.1429%2023.2502%2086.601%2022.2938%2085.6366C21.3373%2084.6721%2020.8%2083.364%2020.8%2082C20.8%2080.636%2021.3373%2079.3279%2022.2938%2078.3635C23.2502%2077.399%2024.5474%2076.8571%2025.9%2076.8571Z'%20fill='%238972FB'/%3e%3cdefs%3e%3cfilter%20id='filter0_i_69_2151'%20x='14.0001'%20y='41.5'%20width='79.125'%20height='26.4'%20filterUnits='userSpaceOnUse'%20color-interpolation-filters='sRGB'%3e%3cfeFlood%20flood-opacity='0'%20result='BackgroundImageFix'/%3e%3cfeBlend%20mode='normal'%20in='SourceGraphic'%20in2='BackgroundImageFix'%20result='shape'/%3e%3cfeColorMatrix%20in='SourceAlpha'%20type='matrix'%20values='0%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%20127%200'%20result='hardAlpha'/%3e%3cfeOffset%20dy='2.4'/%3e%3cfeGaussianBlur%20stdDeviation='7.5'/%3e%3cfeComposite%20in2='hardAlpha'%20operator='arithmetic'%20k2='-1'%20k3='1'/%3e%3cfeColorMatrix%20type='matrix'%20values='0%200%200%200%201%200%200%200%200%201%200%200%200%200%201%200%200%200%200.7%200'/%3e%3cfeBlend%20mode='normal'%20in2='shape'%20result='effect1_innerShadow_69_2151'/%3e%3c/filter%3e%3c/defs%3e%3c/svg%3e";

    function Hx() {
        return In(() => {
            document.querySelectorAll(".ml-card").forEach(e => {
                fe.from(e, {
                    y: 100,
                    opacity: 0,
                    scrollTrigger: {
                        trigger: e,
                        start: "top 95%"
                    }
                })
            })
        }, []), m.jsxs("section", {
            id: "features",
            className: "flex flex-col justify-center items-center mt-[30px] gap-16 px-2",
            children: [m.jsxs("h2", {
                className: "sub-heading font-bold text-center max-w-[650px] leading-10",
                children: [m.jsx("span", {
                    className: "grey-gradient-text",
                    children: "AI-Powered Tools to Build Smarter, Faster, and Better"
                }), m.jsx("span", {
                    className: "purple-gradient-text",
                    children: " super efficiently"
                })]
            }), m.jsxs("div", {
                className: "cases-cont flex flex-wrap justify-center items-center gap-3 -768:gap-4 relative max-w-[1200px]",
                children: [m.jsx("div", {
                    className: "bg-[#F0AC88] h-[200px] w-[200px] blur absolute right-[20%] top-[40%] -768:hidden"
                }), m.jsx("div", {
                    className: "bg-[#7929FF] h-[200px] w-[200px] blur absolute left-[10%] top-[40%] -768:hidden"
                }), m.jsx(js, {
                    heading: "Real-time, Context-aware Suggestions",
                    para: `Get instant code suggestions ranging from simple code snippets to entire
                functions, depending on the context of your existing code and past
                inputs`,
                    img: zx
                }), m.jsx(js, {
                    heading: "Custom Feedback to suit your style",
                    para: "Given the uniqueness of our individual coding journeys, MicroGPT allows you to adjust how much assistant it gives you, adapting to your preferences.",
                    img: $x
                }), m.jsx(js, {
                    heading: "Automated Code Refactoring",
                    para: "microGPT optimizes your existing code in line with standard coding practice at the snap of a finger.",
                    img: Dx
                }), m.jsx(js, {
                    heading: "Intelligent Debugging",
                    para: "Detect and resolve issues quickly with microGPT. Smart detection as you type make errors less likely.",
                    img: Ix
                }), m.jsx(js, {
                    heading: "Supports your coding language",
                    para: "Being able to speak multiple programming languages makes microGPT handy for various projects. ",
                    img: Bx
                }), m.jsx(js, {
                    heading: "Documentation Assistance",
                    para: "Generates in-line comments and documentation, making your project documentation always easy to update.",
                    img: Fx
                })]
            }), m.jsx(jo, {
                className: "mt-[100px]",
                trigger: ".cases-cont"
            })]
        })
    }

    function js(t) {
        return m.jsxs("div", {
            className: `ml-card flex flex-col gap-4 h-auto text-white p-6 bg-white bg-opacity-5 border-white border-[1px] border-opacity-20 rounded-2xl max-w-[380px] min-h-[370px] -768:min-h-fit ${t.className}`,
            children: [m.jsx("img", {
                className: "max-w-[100px] -768:max-w-[70px] h-[100] -768:h-[75px]",
                src: t.img,
                alt: ""
            }), m.jsx("h3", {
                className: "text-[1.75rem] -768:text-2xl font-extrabold tracking-tighter",
                children: t.heading
            }), m.jsx("p", {
                className: "text-[1.125rem] -500:text-base",
                children: t.para
            })]
        })
    }

    function Vx() {
        const t = j8;
        return m.jsxs("section", {
            className: "flex flex-col items-center max-w-[1300px] w-[90%] gap-[97px] -1024:gap-[80px]",
            children: [t.map(e => m.jsxs("div", {
                className: "text-white w-full flex flex-col",
                children: [m.jsxs("div", {
                    className: "flex flex-col items-center text-center gap-3 -500:gap-2",
                    children: [m.jsxs("span", {
                        className: "flex gap-2 items-center justify-center",
                        children: [m.jsx("img", {
                            src: e.icon,
                            alt: ""
                        }), m.jsx("p", {
                            className: "uppercase text-[20px]",
                            children: e.name
                        }), e.link === "#" ? m.jsx("p", {
                            className: "text-xs text-[#F0AC88] bg-[#F0AC8829] font-bold rounded-2xl p-[2px] mt-1 px-2 w-fit",
                            children: "Coming soon"
                        }) : ""]
                    }), m.jsx("p", {
                        className: "text-sm text-white text-opacity-50 max-w-[350px] -500:text-sm",
                        children: e.para
                    })]
                }), m.jsxs("div", {
                    className: `flex w-full justify-center items-center gap-[100px] mt-[49px] -1024:mt-[30px] ${e.reversed?"flex-row-reverse":""} -1024:flex-col-reverse -1024:gap-[30px]`,
                    children: [m.jsxs("ul", {
                        className: "flex flex-col gap-2 w-full max-w-[300px]",
                        children: [e.list.map(r => m.jsxs("li", {
                            className: "flex items-start gap-2 w-[90%] -400:w-full",
                            children: [m.jsx("img", {
                                src: E8,
                                alt: ""
                            }), " ", r]
                        }, r + Math.random())), e.button ? m.jsxs("a", {
                            href: e.link,
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className: "flex btn-arrow relative z-10 bg-white rounded-[8px] text-black min-w-[100px] max-w-[120px] p-[10px] py-1 justify-center font-bold gap-1 mt-2",
                            children: ["Go to ", m.jsx("img", {
                                src: Eo,
                                className: "hackathon-arrow",
                                alt: ""
                            })]
                        }) : ""]
                    }), m.jsx("div", {
                        className: "flex justify-center items-center w-full max-w-[420px] h-[303px] -500:h-[250px]",
                        children: m.jsx("iframe", {
                            className: " w-full h-full",
                            width: "",
                            height: "",
                            src: e.youtube,
                            title: "YouTube video player",
                            allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
                            referrerPolicy: "strict-origin-when-cross-origin",
                            allowFullScreen: !0
                        })
                    })]
                })]
            }, e.name)), m.jsx(jo, {
                className: "mb-[8px]"
            })]
        })
    }

    function Ux() {
        return m.jsxs("section", {
            id: "products",
            className: "flex flex-col items-center justify-center gap-8 mt-[30px] px-4",
            children: [m.jsx("h2", {
                className: "sub-heading grey-gradient-text font-extrabold",
                children: "Products"
            }), m.jsx(Vx, {})]
        })
    }
    const Gx = "/assets/gift-box-FABW7jWG.png";
    var Wx = Math.ceil,
        Qx = Math.max;

    function Yx(t, e, r, n) {
        for (var i = -1, s = Qx(Wx((e - t) / (r || 1)), 0), o = Array(s); s--;) o[n ? s : ++i] = t, t += r;
        return o
    }
    var qx = Yx;

    function Kx(t, e) {
        return t === e || t !== t && e !== e
    }
    var Md = Kx,
        Zx = typeof Rl == "object" && Rl && Rl.Object === Object && Rl,
        o6 = Zx,
        Xx = o6,
        Jx = typeof self == "object" && self && self.Object === Object && self,
        e_ = Xx || Jx || Function("return this")(),
        mn = e_,
        t_ = mn,
        r_ = t_.Symbol,
        Ku = r_,
        qp = Ku,
        a6 = Object.prototype,
        n_ = a6.hasOwnProperty,
        i_ = a6.toString,
        ta = qp ? qp.toStringTag : void 0;

    function s_(t) {
        var e = n_.call(t, ta),
            r = t[ta];
        try {
            t[ta] = void 0;
            var n = !0
        } catch {}
        var i = i_.call(t);
        return n && (e ? t[ta] = r : delete t[ta]), i
    }
    var o_ = s_,
        a_ = Object.prototype,
        l_ = a_.toString;

    function u_(t) {
        return l_.call(t)
    }
    var c_ = u_,
        Kp = Ku,
        f_ = o_,
        d_ = c_,
        h_ = "[object Null]",
        p_ = "[object Undefined]",
        Zp = Kp ? Kp.toStringTag : void 0;

    function m_(t) {
        return t == null ? t === void 0 ? p_ : h_ : Zp && Zp in Object(t) ? f_(t) : d_(t)
    }
    var bl = m_;

    function g_(t) {
        var e = typeof t;
        return t != null && (e == "object" || e == "function")
    }
    var Zu = g_,
        v_ = bl,
        y_ = Zu,
        x_ = "[object AsyncFunction]",
        __ = "[object Function]",
        w_ = "[object GeneratorFunction]",
        C_ = "[object Proxy]";

    function A_(t) {
        if (!y_(t)) return !1;
        var e = v_(t);
        return e == __ || e == w_ || e == x_ || e == C_
    }
    var l6 = A_,
        S_ = 9007199254740991;

    function k_(t) {
        return typeof t == "number" && t > -1 && t % 1 == 0 && t <= S_
    }
    var u6 = k_,
        P_ = l6,
        b_ = u6;

    function T_(t) {
        return t != null && b_(t.length) && !P_(t)
    }
    var c6 = T_,
        E_ = 9007199254740991,
        j_ = /^(?:0|[1-9]\d*)$/;

    function M_(t, e) {
        var r = typeof t;
        return e = e ? ? E_, !!e && (r == "number" || r != "symbol" && j_.test(t)) && t > -1 && t % 1 == 0 && t < e
    }
    var f6 = M_,
        R_ = Md,
        N_ = c6,
        L_ = f6,
        O_ = Zu;

    function z_(t, e, r) {
        if (!O_(r)) return !1;
        var n = typeof e;
        return (n == "number" ? N_(r) && L_(e, r.length) : n == "string" && e in r) ? R_(r[e], t) : !1
    }
    var I_ = z_,
        D_ = /\s/;

    function F_(t) {
        for (var e = t.length; e-- && D_.test(t.charAt(e)););
        return e
    }
    var B_ = F_,
        $_ = B_,
        H_ = /^\s+/;

    function V_(t) {
        return t && t.slice(0, $_(t) + 1).replace(H_, "")
    }
    var U_ = V_;

    function G_(t) {
        return t != null && typeof t == "object"
    }
    var Tl = G_,
        W_ = bl,
        Q_ = Tl,
        Y_ = "[object Symbol]";

    function q_(t) {
        return typeof t == "symbol" || Q_(t) && W_(t) == Y_
    }
    var d6 = q_,
        K_ = U_,
        Xp = Zu,
        Z_ = d6,
        Jp = NaN,
        X_ = /^[-+]0x[0-9a-f]+$/i,
        J_ = /^0b[01]+$/i,
        ew = /^0o[0-7]+$/i,
        tw = parseInt;

    function rw(t) {
        if (typeof t == "number") return t;
        if (Z_(t)) return Jp;
        if (Xp(t)) {
            var e = typeof t.valueOf == "function" ? t.valueOf() : t;
            t = Xp(e) ? e + "" : e
        }
        if (typeof t != "string") return t === 0 ? t : +t;
        t = K_(t);
        var r = J_.test(t);
        return r || ew.test(t) ? tw(t.slice(2), r ? 2 : 8) : X_.test(t) ? Jp : +t
    }
    var h6 = rw,
        nw = h6,
        e3 = 1 / 0,
        iw = 17976931348623157e292;

    function sw(t) {
        if (!t) return t === 0 ? t : 0;
        if (t = nw(t), t === e3 || t === -e3) {
            var e = t < 0 ? -1 : 1;
            return e * iw
        }
        return t === t ? t : 0
    }
    var p6 = sw,
        ow = qx,
        aw = I_,
        sc = p6;

    function lw(t) {
        return function(e, r, n) {
            return n && typeof n != "number" && aw(e, r, n) && (r = n = void 0), e = sc(e), r === void 0 ? (r = e, e = 0) : r = sc(r), n = n === void 0 ? e < r ? 1 : -1 : sc(n), ow(e, r, n, t)
        }
    }
    var uw = lw,
        cw = uw,
        fw = cw(),
        dw = fw;
    const hw = xl(dw);

    function Re() {
        return Re = Object.assign ? Object.assign.bind() : function(t) {
            for (var e = 1; e < arguments.length; e++) {
                var r = arguments[e];
                for (var n in r)({}).hasOwnProperty.call(r, n) && (t[n] = r[n])
            }
            return t
        }, Re.apply(null, arguments)
    }

    function m6(t, e) {
        if (t == null) return {};
        var r = {};
        for (var n in t)
            if ({}.hasOwnProperty.call(t, n)) {
                if (e.indexOf(n) >= 0) continue;
                r[n] = t[n]
            }
        return r
    }
    var g6 = {
            exports: {}
        },
        he = {};
    /** @license React v16.13.1
     * react-is.production.min.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */
    var ft = typeof Symbol == "function" && Symbol.for,
        Rd = ft ? Symbol.for("react.element") : 60103,
        Nd = ft ? Symbol.for("react.portal") : 60106,
        Xu = ft ? Symbol.for("react.fragment") : 60107,
        Ju = ft ? Symbol.for("react.strict_mode") : 60108,
        e2 = ft ? Symbol.for("react.profiler") : 60114,
        t2 = ft ? Symbol.for("react.provider") : 60109,
        r2 = ft ? Symbol.for("react.context") : 60110,
        Ld = ft ? Symbol.for("react.async_mode") : 60111,
        n2 = ft ? Symbol.for("react.concurrent_mode") : 60111,
        i2 = ft ? Symbol.for("react.forward_ref") : 60112,
        s2 = ft ? Symbol.for("react.suspense") : 60113,
        pw = ft ? Symbol.for("react.suspense_list") : 60120,
        o2 = ft ? Symbol.for("react.memo") : 60115,
        a2 = ft ? Symbol.for("react.lazy") : 60116,
        mw = ft ? Symbol.for("react.block") : 60121,
        gw = ft ? Symbol.for("react.fundamental") : 60117,
        vw = ft ? Symbol.for("react.responder") : 60118,
        yw = ft ? Symbol.for("react.scope") : 60119;

    function wr(t) {
        if (typeof t == "object" && t !== null) {
            var e = t.$$typeof;
            switch (e) {
                case Rd:
                    switch (t = t.type, t) {
                        case Ld:
                        case n2:
                        case Xu:
                        case e2:
                        case Ju:
                        case s2:
                            return t;
                        default:
                            switch (t = t && t.$$typeof, t) {
                                case r2:
                                case i2:
                                case a2:
                                case o2:
                                case t2:
                                    return t;
                                default:
                                    return e
                            }
                    }
                case Nd:
                    return e
            }
        }
    }

    function v6(t) {
        return wr(t) === n2
    }
    he.AsyncMode = Ld;
    he.ConcurrentMode = n2;
    he.ContextConsumer = r2;
    he.ContextProvider = t2;
    he.Element = Rd;
    he.ForwardRef = i2;
    he.Fragment = Xu;
    he.Lazy = a2;
    he.Memo = o2;
    he.Portal = Nd;
    he.Profiler = e2;
    he.StrictMode = Ju;
    he.Suspense = s2;
    he.isAsyncMode = function(t) {
        return v6(t) || wr(t) === Ld
    };
    he.isConcurrentMode = v6;
    he.isContextConsumer = function(t) {
        return wr(t) === r2
    };
    he.isContextProvider = function(t) {
        return wr(t) === t2
    };
    he.isElement = function(t) {
        return typeof t == "object" && t !== null && t.$$typeof === Rd
    };
    he.isForwardRef = function(t) {
        return wr(t) === i2
    };
    he.isFragment = function(t) {
        return wr(t) === Xu
    };
    he.isLazy = function(t) {
        return wr(t) === a2
    };
    he.isMemo = function(t) {
        return wr(t) === o2
    };
    he.isPortal = function(t) {
        return wr(t) === Nd
    };
    he.isProfiler = function(t) {
        return wr(t) === e2
    };
    he.isStrictMode = function(t) {
        return wr(t) === Ju
    };
    he.isSuspense = function(t) {
        return wr(t) === s2
    };
    he.isValidElementType = function(t) {
        return typeof t == "string" || typeof t == "function" || t === Xu || t === n2 || t === e2 || t === Ju || t === s2 || t === pw || typeof t == "object" && t !== null && (t.$$typeof === a2 || t.$$typeof === o2 || t.$$typeof === t2 || t.$$typeof === r2 || t.$$typeof === i2 || t.$$typeof === gw || t.$$typeof === vw || t.$$typeof === yw || t.$$typeof === mw)
    };
    he.typeOf = wr;
    g6.exports = he;
    var xw = g6.exports,
        Od = xw,
        _w = {
            childContextTypes: !0,
            contextType: !0,
            contextTypes: !0,
            defaultProps: !0,
            displayName: !0,
            getDefaultProps: !0,
            getDerivedStateFromError: !0,
            getDerivedStateFromProps: !0,
            mixins: !0,
            propTypes: !0,
            type: !0
        },
        ww = {
            name: !0,
            length: !0,
            prototype: !0,
            caller: !0,
            callee: !0,
            arguments: !0,
            arity: !0
        },
        Cw = {
            $$typeof: !0,
            render: !0,
            defaultProps: !0,
            displayName: !0,
            propTypes: !0
        },
        y6 = {
            $$typeof: !0,
            compare: !0,
            defaultProps: !0,
            displayName: !0,
            propTypes: !0,
            type: !0
        },
        zd = {};
    zd[Od.ForwardRef] = Cw;
    zd[Od.Memo] = y6;

    function t3(t) {
        return Od.isMemo(t) ? y6 : zd[t.$$typeof] || _w
    }
    var Aw = Object.defineProperty,
        Sw = Object.getOwnPropertyNames,
        r3 = Object.getOwnPropertySymbols,
        kw = Object.getOwnPropertyDescriptor,
        Pw = Object.getPrototypeOf,
        n3 = Object.prototype;

    function x6(t, e, r) {
        if (typeof e != "string") {
            if (n3) {
                var n = Pw(e);
                n && n !== n3 && x6(t, n, r)
            }
            var i = Sw(e);
            r3 && (i = i.concat(r3(e)));
            for (var s = t3(t), o = t3(e), a = 0; a < i.length; ++a) {
                var l = i[a];
                if (!ww[l] && !(r && r[l]) && !(o && o[l]) && !(s && s[l])) {
                    var u = kw(e, l);
                    try {
                        Aw(t, l, u)
                    } catch {}
                }
            }
        }
        return t
    }
    var bw = x6;
    const Tw = xl(bw);
    var _6 = {};
    Object.defineProperty(_6, "__esModule", {
        value: !0
    });
    _6.default = Ew;

    function Ew(t) {
        return t.displayName || t.name || (typeof t == "string" && t.length > 0 ? t : "Unknown")
    }

    function c0(t, e, r) {
        return e in t ? Object.defineProperty(t, e, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[e] = r, t
    }

    function Cu() {
        return Cu = Object.assign || function(t) {
            for (var e = 1; e < arguments.length; e++) {
                var r = arguments[e];
                for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n])
            }
            return t
        }, Cu.apply(this, arguments)
    }

    function jw(t, e) {
        t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e
    }

    function Gn(t) {
        if (t === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t
    }

    function Mw(t) {
        var e = function(r) {
            jw(n, r);

            function n() {
                for (var s, o = arguments.length, a = new Array(o), l = 0; l < o; l++) a[l] = arguments[l];
                return s = r.call.apply(r, [this].concat(a)) || this, c0(Gn(Gn(s)), "cachedTheme", void 0), c0(Gn(Gn(s)), "lastOuterTheme", void 0), c0(Gn(Gn(s)), "lastTheme", void 0), c0(Gn(Gn(s)), "renderProvider", function(u) {
                    var c = s.props.children;
                    return Mr.createElement(t.Provider, {
                        value: s.getTheme(u)
                    }, c)
                }), s
            }
            var i = n.prototype;
            return i.getTheme = function(o) {
                if (this.props.theme !== this.lastTheme || o !== this.lastOuterTheme || !this.cachedTheme)
                    if (this.lastOuterTheme = o, this.lastTheme = this.props.theme, typeof this.lastTheme == "function") {
                        var a = this.props.theme;
                        this.cachedTheme = a(o)
                    } else {
                        var l = this.props.theme;
                        this.cachedTheme = o ? Cu({}, o, l) : l
                    }
                return this.cachedTheme
            }, i.render = function() {
                var o = this.props.children;
                return o ? Mr.createElement(t.Consumer, null, this.renderProvider) : null
            }, n
        }(Mr.Component);
        return e
    }

    function Rw(t) {
        return function(r) {
            var n = Mr.forwardRef(function(i, s) {
                return Mr.createElement(t.Consumer, null, function(o) {
                    return Mr.createElement(r, Cu({
                        theme: o,
                        ref: s
                    }, i))
                })
            });
            return Tw(n, r), n
        }
    }

    function Nw(t) {
        var e = function() {
            var n = Mr.useContext(t);
            return n
        };
        return e
    }

    function Lw(t) {
        return {
            context: t,
            withTheme: Rw(t),
            useTheme: Nw(t),
            ThemeProvider: Mw(t)
        }
    }
    var w6 = M.createContext();
    Lw(w6);
    var i3 = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
            return typeof t
        } : function(t) {
            return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        },
        Mo = (typeof window > "u" ? "undefined" : i3(window)) === "object" && (typeof document > "u" ? "undefined" : i3(document)) === "object" && document.nodeType === 9;

    function gl(t) {
        "@babel/helpers - typeof";
        return gl = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
            return typeof e
        } : function(e) {
            return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }, gl(t)
    }

    function Ow(t, e) {
        if (gl(t) != "object" || !t) return t;
        var r = t[Symbol.toPrimitive];
        if (r !== void 0) {
            var n = r.call(t, e);
            if (gl(n) != "object") return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return String(t)
    }

    function zw(t) {
        var e = Ow(t, "string");
        return gl(e) == "symbol" ? e : e + ""
    }

    function Iw(t, e) {
        for (var r = 0; r < e.length; r++) {
            var n = e[r];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, zw(n.key), n)
        }
    }

    function Id(t, e, r) {
        return e && Iw(t.prototype, e), Object.defineProperty(t, "prototype", {
            writable: !1
        }), t
    }

    function Qf(t, e) {
        return Qf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, n) {
            return r.__proto__ = n, r
        }, Qf(t, e)
    }

    function C6(t, e) {
        t.prototype = Object.create(e.prototype), t.prototype.constructor = t, Qf(t, e)
    }

    function s3(t) {
        if (t === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t
    }
    var Dw = {}.constructor;

    function Yf(t) {
        if (t == null || typeof t != "object") return t;
        if (Array.isArray(t)) return t.map(Yf);
        if (t.constructor !== Dw) return t;
        var e = {};
        for (var r in t) e[r] = Yf(t[r]);
        return e
    }

    function l2(t, e, r) {
        t === void 0 && (t = "unnamed");
        var n = r.jss,
            i = Yf(e),
            s = n.plugins.onCreateRule(t, i, r);
        return s || (t[0], null)
    }
    var o3 = function(e, r) {
            for (var n = "", i = 0; i < e.length && e[i] !== "!important"; i++) n && (n += r), n += e[i];
            return n
        },
        os = function(e) {
            if (!Array.isArray(e)) return e;
            var r = "";
            if (Array.isArray(e[0]))
                for (var n = 0; n < e.length && e[n] !== "!important"; n++) r && (r += ", "), r += o3(e[n], " ");
            else r = o3(e, ", ");
            return e[e.length - 1] === "!important" && (r += " !important"), r
        };

    function Ro(t) {
        return t && t.format === !1 ? {
            linebreak: "",
            space: ""
        } : {
            linebreak: `
`,
            space: " "
        }
    }

    function ra(t, e) {
        for (var r = "", n = 0; n < e; n++) r += "  ";
        return r + t
    }

    function vl(t, e, r) {
        r === void 0 && (r = {});
        var n = "";
        if (!e) return n;
        var i = r,
            s = i.indent,
            o = s === void 0 ? 0 : s,
            a = e.fallbacks;
        r.format === !1 && (o = -1 / 0);
        var l = Ro(r),
            u = l.linebreak,
            c = l.space;
        if (t && o++, a)
            if (Array.isArray(a))
                for (var f = 0; f < a.length; f++) {
                    var d = a[f];
                    for (var h in d) {
                        var y = d[h];
                        y != null && (n && (n += u), n += ra(h + ":" + c + os(y) + ";", o))
                    }
                } else
                    for (var g in a) {
                        var w = a[g];
                        w != null && (n && (n += u), n += ra(g + ":" + c + os(w) + ";", o))
                    }
        for (var v in e) {
            var p = e[v];
            p != null && v !== "fallbacks" && (n && (n += u), n += ra(v + ":" + c + os(p) + ";", o))
        }
        return !n && !r.allowEmpty || !t ? n : (o--, n && (n = "" + u + n + u), ra("" + t + c + "{" + n, o) + ra("}", o))
    }
    var Fw = /([[\].#*$><+~=|^:(),"'`\s])/g,
        a3 = typeof CSS < "u" && CSS.escape,
        Dd = function(t) {
            return a3 ? a3(t) : t.replace(Fw, "\\$1")
        },
        A6 = function() {
            function t(r, n, i) {
                this.type = "style", this.isProcessed = !1;
                var s = i.sheet,
                    o = i.Renderer;
                this.key = r, this.options = i, this.style = n, s ? this.renderer = s.renderer : o && (this.renderer = new o)
            }
            var e = t.prototype;
            return e.prop = function(n, i, s) {
                if (i === void 0) return this.style[n];
                var o = s ? s.force : !1;
                if (!o && this.style[n] === i) return this;
                var a = i;
                (!s || s.process !== !1) && (a = this.options.jss.plugins.onChangeValue(i, n, this));
                var l = a == null || a === !1,
                    u = n in this.style;
                if (l && !u && !o) return this;
                var c = l && u;
                if (c ? delete this.style[n] : this.style[n] = a, this.renderable && this.renderer) return c ? this.renderer.removeProperty(this.renderable, n) : this.renderer.setProperty(this.renderable, n, a), this;
                var f = this.options.sheet;
                return f && f.attached, this
            }, t
        }(),
        qf = function(t) {
            C6(e, t);

            function e(n, i, s) {
                var o;
                o = t.call(this, n, i, s) || this;
                var a = s.selector,
                    l = s.scoped,
                    u = s.sheet,
                    c = s.generateId;
                return a ? o.selectorText = a : l !== !1 && (o.id = c(s3(s3(o)), u), o.selectorText = "." + Dd(o.id)), o
            }
            var r = e.prototype;
            return r.applyTo = function(i) {
                var s = this.renderer;
                if (s) {
                    var o = this.toJSON();
                    for (var a in o) s.setProperty(i, a, o[a])
                }
                return this
            }, r.toJSON = function() {
                var i = {};
                for (var s in this.style) {
                    var o = this.style[s];
                    typeof o != "object" ? i[s] = o : Array.isArray(o) && (i[s] = os(o))
                }
                return i
            }, r.toString = function(i) {
                var s = this.options.sheet,
                    o = s ? s.options.link : !1,
                    a = o ? Re({}, i, {
                        allowEmpty: !0
                    }) : i;
                return vl(this.selectorText, this.style, a)
            }, Id(e, [{
                key: "selector",
                set: function(i) {
                    if (i !== this.selectorText) {
                        this.selectorText = i;
                        var s = this.renderer,
                            o = this.renderable;
                        if (!(!o || !s)) {
                            var a = s.setSelector(o, i);
                            a || s.replaceRule(o, this)
                        }
                    }
                },
                get: function() {
                    return this.selectorText
                }
            }]), e
        }(A6),
        Bw = {
            onCreateRule: function(e, r, n) {
                return e[0] === "@" || n.parent && n.parent.type === "keyframes" ? null : new qf(e, r, n)
            }
        },
        oc = {
            indent: 1,
            children: !0
        },
        $w = /@([\w-]+)/,
        Hw = function() {
            function t(r, n, i) {
                this.type = "conditional", this.isProcessed = !1, this.key = r;
                var s = r.match($w);
                this.at = s ? s[1] : "unknown", this.query = i.name || "@" + this.at, this.options = i, this.rules = new u2(Re({}, i, {
                    parent: this
                }));
                for (var o in n) this.rules.add(o, n[o]);
                this.rules.process()
            }
            var e = t.prototype;
            return e.getRule = function(n) {
                return this.rules.get(n)
            }, e.indexOf = function(n) {
                return this.rules.indexOf(n)
            }, e.addRule = function(n, i, s) {
                var o = this.rules.add(n, i, s);
                return o ? (this.options.jss.plugins.onProcessRule(o), o) : null
            }, e.replaceRule = function(n, i, s) {
                var o = this.rules.replace(n, i, s);
                return o && this.options.jss.plugins.onProcessRule(o), o
            }, e.toString = function(n) {
                n === void 0 && (n = oc);
                var i = Ro(n),
                    s = i.linebreak;
                if (n.indent == null && (n.indent = oc.indent), n.children == null && (n.children = oc.children), n.children === !1) return this.query + " {}";
                var o = this.rules.toString(n);
                return o ? this.query + " {" + s + o + s + "}" : ""
            }, t
        }(),
        Vw = /@container|@media|@supports\s+/,
        Uw = {
            onCreateRule: function(e, r, n) {
                return Vw.test(e) ? new Hw(e, r, n) : null
            }
        },
        ac = {
            indent: 1,
            children: !0
        },
        Gw = /@keyframes\s+([\w-]+)/,
        Kf = function() {
            function t(r, n, i) {
                this.type = "keyframes", this.at = "@keyframes", this.isProcessed = !1;
                var s = r.match(Gw);
                s && s[1] ? this.name = s[1] : this.name = "noname", this.key = this.type + "-" + this.name, this.options = i;
                var o = i.scoped,
                    a = i.sheet,
                    l = i.generateId;
                this.id = o === !1 ? this.name : Dd(l(this, a)), this.rules = new u2(Re({}, i, {
                    parent: this
                }));
                for (var u in n) this.rules.add(u, n[u], Re({}, i, {
                    parent: this
                }));
                this.rules.process()
            }
            var e = t.prototype;
            return e.toString = function(n) {
                n === void 0 && (n = ac);
                var i = Ro(n),
                    s = i.linebreak;
                if (n.indent == null && (n.indent = ac.indent), n.children == null && (n.children = ac.children), n.children === !1) return this.at + " " + this.id + " {}";
                var o = this.rules.toString(n);
                return o && (o = "" + s + o + s), this.at + " " + this.id + " {" + o + "}"
            }, t
        }(),
        Ww = /@keyframes\s+/,
        Qw = /\$([\w-]+)/g,
        Zf = function(e, r) {
            return typeof e == "string" ? e.replace(Qw, function(n, i) {
                return i in r ? r[i] : n
            }) : e
        },
        l3 = function(e, r, n) {
            var i = e[r],
                s = Zf(i, n);
            s !== i && (e[r] = s)
        },
        Yw = {
            onCreateRule: function(e, r, n) {
                return typeof e == "string" && Ww.test(e) ? new Kf(e, r, n) : null
            },
            onProcessStyle: function(e, r, n) {
                return r.type !== "style" || !n || ("animation-name" in e && l3(e, "animation-name", n.keyframes), "animation" in e && l3(e, "animation", n.keyframes)), e
            },
            onChangeValue: function(e, r, n) {
                var i = n.options.sheet;
                if (!i) return e;
                switch (r) {
                    case "animation":
                        return Zf(e, i.keyframes);
                    case "animation-name":
                        return Zf(e, i.keyframes);
                    default:
                        return e
                }
            }
        },
        qw = function(t) {
            C6(e, t);

            function e() {
                return t.apply(this, arguments) || this
            }
            var r = e.prototype;
            return r.toString = function(i) {
                var s = this.options.sheet,
                    o = s ? s.options.link : !1,
                    a = o ? Re({}, i, {
                        allowEmpty: !0
                    }) : i;
                return vl(this.key, this.style, a)
            }, e
        }(A6),
        Kw = {
            onCreateRule: function(e, r, n) {
                return n.parent && n.parent.type === "keyframes" ? new qw(e, r, n) : null
            }
        },
        Zw = function() {
            function t(r, n, i) {
                this.type = "font-face", this.at = "@font-face", this.isProcessed = !1, this.key = r, this.style = n, this.options = i
            }
            var e = t.prototype;
            return e.toString = function(n) {
                var i = Ro(n),
                    s = i.linebreak;
                if (Array.isArray(this.style)) {
                    for (var o = "", a = 0; a < this.style.length; a++) o += vl(this.at, this.style[a]), this.style[a + 1] && (o += s);
                    return o
                }
                return vl(this.at, this.style, n)
            }, t
        }(),
        Xw = /@font-face/,
        Jw = {
            onCreateRule: function(e, r, n) {
                return Xw.test(e) ? new Zw(e, r, n) : null
            }
        },
        eC = function() {
            function t(r, n, i) {
                this.type = "viewport", this.at = "@viewport", this.isProcessed = !1, this.key = r, this.style = n, this.options = i
            }
            var e = t.prototype;
            return e.toString = function(n) {
                return vl(this.key, this.style, n)
            }, t
        }(),
        tC = {
            onCreateRule: function(e, r, n) {
                return e === "@viewport" || e === "@-ms-viewport" ? new eC(e, r, n) : null
            }
        },
        rC = function() {
            function t(r, n, i) {
                this.type = "simple", this.isProcessed = !1, this.key = r, this.value = n, this.options = i
            }
            var e = t.prototype;
            return e.toString = function(n) {
                if (Array.isArray(this.value)) {
                    for (var i = "", s = 0; s < this.value.length; s++) i += this.key + " " + this.value[s] + ";", this.value[s + 1] && (i += `
`);
                    return i
                }
                return this.key + " " + this.value + ";"
            }, t
        }(),
        nC = {
            "@charset": !0,
            "@import": !0,
            "@namespace": !0
        },
        iC = {
            onCreateRule: function(e, r, n) {
                return e in nC ? new rC(e, r, n) : null
            }
        },
        u3 = [Bw, Uw, Yw, Kw, Jw, tC, iC],
        sC = {
            process: !0
        },
        c3 = {
            force: !0,
            process: !0
        },
        u2 = function() {
            function t(r) {
                this.map = {}, this.raw = {}, this.index = [], this.counter = 0, this.options = r, this.classes = r.classes, this.keyframes = r.keyframes
            }
            var e = t.prototype;
            return e.add = function(n, i, s) {
                var o = this.options,
                    a = o.parent,
                    l = o.sheet,
                    u = o.jss,
                    c = o.Renderer,
                    f = o.generateId,
                    d = o.scoped,
                    h = Re({
                        classes: this.classes,
                        parent: a,
                        sheet: l,
                        jss: u,
                        Renderer: c,
                        generateId: f,
                        scoped: d,
                        name: n,
                        keyframes: this.keyframes,
                        selector: void 0
                    }, s),
                    y = n;
                n in this.raw && (y = n + "-d" + this.counter++), this.raw[y] = i, y in this.classes && (h.selector = "." + Dd(this.classes[y]));
                var g = l2(y, i, h);
                if (!g) return null;
                this.register(g);
                var w = h.index === void 0 ? this.index.length : h.index;
                return this.index.splice(w, 0, g), g
            }, e.replace = function(n, i, s) {
                var o = this.get(n),
                    a = this.index.indexOf(o);
                o && this.remove(o);
                var l = s;
                return a !== -1 && (l = Re({}, s, {
                    index: a
                })), this.add(n, i, l)
            }, e.get = function(n) {
                return this.map[n]
            }, e.remove = function(n) {
                this.unregister(n), delete this.raw[n.key], this.index.splice(this.index.indexOf(n), 1)
            }, e.indexOf = function(n) {
                return this.index.indexOf(n)
            }, e.process = function() {
                var n = this.options.jss.plugins;
                this.index.slice(0).forEach(n.onProcessRule, n)
            }, e.register = function(n) {
                this.map[n.key] = n, n instanceof qf ? (this.map[n.selector] = n, n.id && (this.classes[n.key] = n.id)) : n instanceof Kf && this.keyframes && (this.keyframes[n.name] = n.id)
            }, e.unregister = function(n) {
                delete this.map[n.key], n instanceof qf ? (delete this.map[n.selector], delete this.classes[n.key]) : n instanceof Kf && delete this.keyframes[n.name]
            }, e.update = function() {
                var n, i, s;
                if (typeof(arguments.length <= 0 ? void 0 : arguments[0]) == "string" ? (n = arguments.length <= 0 ? void 0 : arguments[0], i = arguments.length <= 1 ? void 0 : arguments[1], s = arguments.length <= 2 ? void 0 : arguments[2]) : (i = arguments.length <= 0 ? void 0 : arguments[0], s = arguments.length <= 1 ? void 0 : arguments[1], n = null), n) this.updateOne(this.get(n), i, s);
                else
                    for (var o = 0; o < this.index.length; o++) this.updateOne(this.index[o], i, s)
            }, e.updateOne = function(n, i, s) {
                s === void 0 && (s = sC);
                var o = this.options,
                    a = o.jss.plugins,
                    l = o.sheet;
                if (n.rules instanceof t) {
                    n.rules.update(i, s);
                    return
                }
                var u = n.style;
                if (a.onUpdate(i, n, l, s), s.process && u && u !== n.style) {
                    a.onProcessStyle(n.style, n, l);
                    for (var c in n.style) {
                        var f = n.style[c],
                            d = u[c];
                        f !== d && n.prop(c, f, c3)
                    }
                    for (var h in u) {
                        var y = n.style[h],
                            g = u[h];
                        y == null && y !== g && n.prop(h, null, c3)
                    }
                }
            }, e.toString = function(n) {
                for (var i = "", s = this.options.sheet, o = s ? s.options.link : !1, a = Ro(n), l = a.linebreak, u = 0; u < this.index.length; u++) {
                    var c = this.index[u],
                        f = c.toString(n);
                    !f && !o || (i && (i += l), i += f)
                }
                return i
            }, t
        }(),
        S6 = function() {
            function t(r, n) {
                this.attached = !1, this.deployed = !1, this.classes = {}, this.keyframes = {}, this.options = Re({}, n, {
                    sheet: this,
                    parent: this,
                    classes: this.classes,
                    keyframes: this.keyframes
                }), n.Renderer && (this.renderer = new n.Renderer(this)), this.rules = new u2(this.options);
                for (var i in r) this.rules.add(i, r[i]);
                this.rules.process()
            }
            var e = t.prototype;
            return e.attach = function() {
                return this.attached ? this : (this.renderer && this.renderer.attach(), this.attached = !0, this.deployed || this.deploy(), this)
            }, e.detach = function() {
                return this.attached ? (this.renderer && this.renderer.detach(), this.attached = !1, this) : this
            }, e.addRule = function(n, i, s) {
                var o = this.queue;
                this.attached && !o && (this.queue = []);
                var a = this.rules.add(n, i, s);
                return a ? (this.options.jss.plugins.onProcessRule(a), this.attached ? (this.deployed && (o ? o.push(a) : (this.insertRule(a), this.queue && (this.queue.forEach(this.insertRule, this), this.queue = void 0))), a) : (this.deployed = !1, a)) : null
            }, e.replaceRule = function(n, i, s) {
                var o = this.rules.get(n);
                if (!o) return this.addRule(n, i, s);
                var a = this.rules.replace(n, i, s);
                return a && this.options.jss.plugins.onProcessRule(a), this.attached ? (this.deployed && this.renderer && (a ? o.renderable && this.renderer.replaceRule(o.renderable, a) : this.renderer.deleteRule(o)), a) : (this.deployed = !1, a)
            }, e.insertRule = function(n) {
                this.renderer && this.renderer.insertRule(n)
            }, e.addRules = function(n, i) {
                var s = [];
                for (var o in n) {
                    var a = this.addRule(o, n[o], i);
                    a && s.push(a)
                }
                return s
            }, e.getRule = function(n) {
                return this.rules.get(n)
            }, e.deleteRule = function(n) {
                var i = typeof n == "object" ? n : this.rules.get(n);
                return !i || this.attached && !i.renderable ? !1 : (this.rules.remove(i), this.attached && i.renderable && this.renderer ? this.renderer.deleteRule(i.renderable) : !0)
            }, e.indexOf = function(n) {
                return this.rules.indexOf(n)
            }, e.deploy = function() {
                return this.renderer && this.renderer.deploy(), this.deployed = !0, this
            }, e.update = function() {
                var n;
                return (n = this.rules).update.apply(n, arguments), this
            }, e.updateOne = function(n, i, s) {
                return this.rules.updateOne(n, i, s), this
            }, e.toString = function(n) {
                return this.rules.toString(n)
            }, t
        }(),
        oC = function() {
            function t() {
                this.plugins = {
                    internal: [],
                    external: []
                }, this.registry = {}
            }
            var e = t.prototype;
            return e.onCreateRule = function(n, i, s) {
                for (var o = 0; o < this.registry.onCreateRule.length; o++) {
                    var a = this.registry.onCreateRule[o](n, i, s);
                    if (a) return a
                }
                return null
            }, e.onProcessRule = function(n) {
                if (!n.isProcessed) {
                    for (var i = n.options.sheet, s = 0; s < this.registry.onProcessRule.length; s++) this.registry.onProcessRule[s](n, i);
                    n.style && this.onProcessStyle(n.style, n, i), n.isProcessed = !0
                }
            }, e.onProcessStyle = function(n, i, s) {
                for (var o = 0; o < this.registry.onProcessStyle.length; o++) i.style = this.registry.onProcessStyle[o](i.style, i, s)
            }, e.onProcessSheet = function(n) {
                for (var i = 0; i < this.registry.onProcessSheet.length; i++) this.registry.onProcessSheet[i](n)
            }, e.onUpdate = function(n, i, s, o) {
                for (var a = 0; a < this.registry.onUpdate.length; a++) this.registry.onUpdate[a](n, i, s, o)
            }, e.onChangeValue = function(n, i, s) {
                for (var o = n, a = 0; a < this.registry.onChangeValue.length; a++) o = this.registry.onChangeValue[a](o, i, s);
                return o
            }, e.use = function(n, i) {
                i === void 0 && (i = {
                    queue: "external"
                });
                var s = this.plugins[i.queue];
                s.indexOf(n) === -1 && (s.push(n), this.registry = [].concat(this.plugins.external, this.plugins.internal).reduce(function(o, a) {
                    for (var l in a) l in o && o[l].push(a[l]);
                    return o
                }, {
                    onCreateRule: [],
                    onProcessRule: [],
                    onProcessStyle: [],
                    onProcessSheet: [],
                    onChangeValue: [],
                    onUpdate: []
                }))
            }, t
        }(),
        aC = function() {
            function t() {
                this.registry = []
            }
            var e = t.prototype;
            return e.add = function(n) {
                var i = this.registry,
                    s = n.options.index;
                if (i.indexOf(n) === -1) {
                    if (i.length === 0 || s >= this.index) {
                        i.push(n);
                        return
                    }
                    for (var o = 0; o < i.length; o++)
                        if (i[o].options.index > s) {
                            i.splice(o, 0, n);
                            return
                        }
                }
            }, e.reset = function() {
                this.registry = []
            }, e.remove = function(n) {
                var i = this.registry.indexOf(n);
                this.registry.splice(i, 1)
            }, e.toString = function(n) {
                for (var i = n === void 0 ? {} : n, s = i.attached, o = m6(i, ["attached"]), a = Ro(o), l = a.linebreak, u = "", c = 0; c < this.registry.length; c++) {
                    var f = this.registry[c];
                    s != null && f.attached !== s || (u && (u += l), u += f.toString(o))
                }
                return u
            }, Id(t, [{
                key: "index",
                get: function() {
                    return this.registry.length === 0 ? 0 : this.registry[this.registry.length - 1].options.index
                }
            }]), t
        }(),
        Ba = new aC,
        Xf = typeof globalThis < "u" ? globalThis : typeof window < "u" && window.Math === Math ? window : typeof self < "u" && self.Math === Math ? self : Function("return this")(),
        Jf = "2f1acc6c3a606b082e5eef5e54414ffb";
    Xf[Jf] == null && (Xf[Jf] = 0);
    var f3 = Xf[Jf]++,
        d3 = function(e) {
            e === void 0 && (e = {});
            var r = 0,
                n = function(s, o) {
                    r += 1;
                    var a = "",
                        l = "";
                    return o && (o.options.classNamePrefix && (l = o.options.classNamePrefix), o.options.jss.id != null && (a = String(o.options.jss.id))), e.minify ? "" + (l || "c") + f3 + a + r : l + s.key + "-" + f3 + (a ? "-" + a : "") + "-" + r
                };
            return n
        },
        k6 = function(e) {
            var r;
            return function() {
                return r || (r = e()), r
            }
        },
        lC = function(e, r) {
            try {
                return e.attributeStyleMap ? e.attributeStyleMap.get(r) : e.style.getPropertyValue(r)
            } catch {
                return ""
            }
        },
        uC = function(e, r, n) {
            try {
                var i = n;
                if (Array.isArray(n) && (i = os(n)), e.attributeStyleMap) e.attributeStyleMap.set(r, i);
                else {
                    var s = i ? i.indexOf("!important") : -1,
                        o = s > -1 ? i.substr(0, s - 1) : i;
                    e.style.setProperty(r, o, s > -1 ? "important" : "")
                }
            } catch {
                return !1
            }
            return !0
        },
        cC = function(e, r) {
            try {
                e.attributeStyleMap ? e.attributeStyleMap.delete(r) : e.style.removeProperty(r)
            } catch {}
        },
        fC = function(e, r) {
            return e.selectorText = r, e.selectorText === r
        },
        P6 = k6(function() {
            return document.querySelector("head")
        });

    function dC(t, e) {
        for (var r = 0; r < t.length; r++) {
            var n = t[r];
            if (n.attached && n.options.index > e.index && n.options.insertionPoint === e.insertionPoint) return n
        }
        return null
    }

    function hC(t, e) {
        for (var r = t.length - 1; r >= 0; r--) {
            var n = t[r];
            if (n.attached && n.options.insertionPoint === e.insertionPoint) return n
        }
        return null
    }

    function pC(t) {
        for (var e = P6(), r = 0; r < e.childNodes.length; r++) {
            var n = e.childNodes[r];
            if (n.nodeType === 8 && n.nodeValue.trim() === t) return n
        }
        return null
    }

    function mC(t) {
        var e = Ba.registry;
        if (e.length > 0) {
            var r = dC(e, t);
            if (r && r.renderer) return {
                parent: r.renderer.element.parentNode,
                node: r.renderer.element
            };
            if (r = hC(e, t), r && r.renderer) return {
                parent: r.renderer.element.parentNode,
                node: r.renderer.element.nextSibling
            }
        }
        var n = t.insertionPoint;
        if (n && typeof n == "string") {
            var i = pC(n);
            if (i) return {
                parent: i.parentNode,
                node: i.nextSibling
            }
        }
        return !1
    }

    function gC(t, e) {
        var r = e.insertionPoint,
            n = mC(e);
        if (n !== !1 && n.parent) {
            n.parent.insertBefore(t, n.node);
            return
        }
        if (r && typeof r.nodeType == "number") {
            var i = r,
                s = i.parentNode;
            s && s.insertBefore(t, i.nextSibling);
            return
        }
        P6().appendChild(t)
    }
    var vC = k6(function() {
            var t = document.querySelector('meta[property="csp-nonce"]');
            return t ? t.getAttribute("content") : null
        }),
        h3 = function(e, r, n) {
            try {
                "insertRule" in e ? e.insertRule(r, n) : "appendRule" in e && e.appendRule(r)
            } catch {
                return !1
            }
            return e.cssRules[n]
        },
        p3 = function(e, r) {
            var n = e.cssRules.length;
            return r === void 0 || r > n ? n : r
        },
        yC = function() {
            var e = document.createElement("style");
            return e.textContent = `
`, e
        },
        xC = function() {
            function t(r) {
                this.getPropertyValue = lC, this.setProperty = uC, this.removeProperty = cC, this.setSelector = fC, this.hasInsertedRules = !1, this.cssRules = [], r && Ba.add(r), this.sheet = r;
                var n = this.sheet ? this.sheet.options : {},
                    i = n.media,
                    s = n.meta,
                    o = n.element;
                this.element = o || yC(), this.element.setAttribute("data-jss", ""), i && this.element.setAttribute("media", i), s && this.element.setAttribute("data-meta", s);
                var a = vC();
                a && this.element.setAttribute("nonce", a)
            }
            var e = t.prototype;
            return e.attach = function() {
                if (!(this.element.parentNode || !this.sheet)) {
                    gC(this.element, this.sheet.options);
                    var n = !!(this.sheet && this.sheet.deployed);
                    this.hasInsertedRules && n && (this.hasInsertedRules = !1, this.deploy())
                }
            }, e.detach = function() {
                if (this.sheet) {
                    var n = this.element.parentNode;
                    n && n.removeChild(this.element), this.sheet.options.link && (this.cssRules = [], this.element.textContent = `
`)
                }
            }, e.deploy = function() {
                var n = this.sheet;
                if (n) {
                    if (n.options.link) {
                        this.insertRules(n.rules);
                        return
                    }
                    this.element.textContent = `
` + n.toString() + `
`
                }
            }, e.insertRules = function(n, i) {
                for (var s = 0; s < n.index.length; s++) this.insertRule(n.index[s], s, i)
            }, e.insertRule = function(n, i, s) {
                if (s === void 0 && (s = this.element.sheet), n.rules) {
                    var o = n,
                        a = s;
                    if (n.type === "conditional" || n.type === "keyframes") {
                        var l = p3(s, i);
                        if (a = h3(s, o.toString({
                                children: !1
                            }), l), a === !1) return !1;
                        this.refCssRule(n, l, a)
                    }
                    return this.insertRules(o.rules, a), a
                }
                var u = n.toString();
                if (!u) return !1;
                var c = p3(s, i),
                    f = h3(s, u, c);
                return f === !1 ? !1 : (this.hasInsertedRules = !0, this.refCssRule(n, c, f), f)
            }, e.refCssRule = function(n, i, s) {
                n.renderable = s, n.options.parent instanceof S6 && this.cssRules.splice(i, 0, s)
            }, e.deleteRule = function(n) {
                var i = this.element.sheet,
                    s = this.indexOf(n);
                return s === -1 ? !1 : (i.deleteRule(s), this.cssRules.splice(s, 1), !0)
            }, e.indexOf = function(n) {
                return this.cssRules.indexOf(n)
            }, e.replaceRule = function(n, i) {
                var s = this.indexOf(n);
                return s === -1 ? !1 : (this.element.sheet.deleteRule(s), this.cssRules.splice(s, 1), this.insertRule(i, s))
            }, e.getRules = function() {
                return this.element.sheet.cssRules
            }, t
        }(),
        _C = 0,
        wC = function() {
            function t(r) {
                this.id = _C++, this.version = "10.10.0", this.plugins = new oC, this.options = {
                    id: {
                        minify: !1
                    },
                    createGenerateId: d3,
                    Renderer: Mo ? xC : null,
                    plugins: []
                }, this.generateId = d3({
                    minify: !1
                });
                for (var n = 0; n < u3.length; n++) this.plugins.use(u3[n], {
                    queue: "internal"
                });
                this.setup(r)
            }
            var e = t.prototype;
            return e.setup = function(n) {
                return n === void 0 && (n = {}), n.createGenerateId && (this.options.createGenerateId = n.createGenerateId), n.id && (this.options.id = Re({}, this.options.id, n.id)), (n.createGenerateId || n.id) && (this.generateId = this.options.createGenerateId(this.options.id)), n.insertionPoint != null && (this.options.insertionPoint = n.insertionPoint), "Renderer" in n && (this.options.Renderer = n.Renderer), n.plugins && this.use.apply(this, n.plugins), this
            }, e.createStyleSheet = function(n, i) {
                i === void 0 && (i = {});
                var s = i,
                    o = s.index;
                typeof o != "number" && (o = Ba.index === 0 ? 0 : Ba.index + 1);
                var a = new S6(n, Re({}, i, {
                    jss: this,
                    generateId: i.generateId || this.generateId,
                    insertionPoint: this.options.insertionPoint,
                    Renderer: this.options.Renderer,
                    index: o
                }));
                return this.plugins.onProcessSheet(a), a
            }, e.removeStyleSheet = function(n) {
                return n.detach(), Ba.remove(n), this
            }, e.createRule = function(n, i, s) {
                if (i === void 0 && (i = {}), s === void 0 && (s = {}), typeof n == "object") return this.createRule(void 0, n, i);
                var o = Re({}, s, {
                    name: n,
                    jss: this,
                    Renderer: this.options.Renderer
                });
                o.generateId || (o.generateId = this.generateId), o.classes || (o.classes = {}), o.keyframes || (o.keyframes = {});
                var a = l2(n, i, o);
                return a && this.plugins.onProcessRule(a), a
            }, e.use = function() {
                for (var n = this, i = arguments.length, s = new Array(i), o = 0; o < i; o++) s[o] = arguments[o];
                return s.forEach(function(a) {
                    n.plugins.use(a)
                }), this
            }, t
        }(),
        b6 = function(e) {
            return new wC(e)
        },
        m3 = function() {
            function t() {
                this.length = 0, this.sheets = new WeakMap
            }
            var e = t.prototype;
            return e.get = function(n) {
                var i = this.sheets.get(n);
                return i && i.sheet
            }, e.add = function(n, i) {
                this.sheets.has(n) || (this.length++, this.sheets.set(n, {
                    sheet: i,
                    refs: 0
                }))
            }, e.manage = function(n) {
                var i = this.sheets.get(n);
                if (i) return i.refs === 0 && i.sheet.attach(), i.refs++, i.sheet
            }, e.unmanage = function(n) {
                var i = this.sheets.get(n);
                i && i.refs > 0 && (i.refs--, i.refs === 0 && i.sheet.detach())
            }, Id(t, [{
                key: "size",
                get: function() {
                    return this.length
                }
            }]), t
        }(),
        Fd = typeof CSS == "object" && CSS != null && "number" in CSS;

    function T6(t) {
        var e = null;
        for (var r in t) {
            var n = t[r],
                i = typeof n;
            if (i === "function") e || (e = {}), e[r] = n;
            else if (i === "object" && n !== null && !Array.isArray(n)) {
                var s = T6(n);
                s && (e || (e = {}), e[r] = s)
            }
        }
        return e
    }
    /**
     * A better abstraction over CSS.
     *
     * @copyright Oleg Isonen (Slobodskoi) / Isonen 2014-present
     * @website https://github.com/cssinjs/jss
     * @license MIT
     */
    b6();
    var E6 = Date.now(),
        lc = "fnValues" + E6,
        uc = "fnStyle" + ++E6,
        CC = function() {
            return {
                onCreateRule: function(r, n, i) {
                    if (typeof n != "function") return null;
                    var s = l2(r, {}, i);
                    return s[uc] = n, s
                },
                onProcessStyle: function(r, n) {
                    if (lc in n || uc in n) return r;
                    var i = {};
                    for (var s in r) {
                        var o = r[s];
                        typeof o == "function" && (delete r[s], i[s] = o)
                    }
                    return n[lc] = i, r
                },
                onUpdate: function(r, n, i, s) {
                    var o = n,
                        a = o[uc];
                    a && (o.style = a(r) || {});
                    var l = o[lc];
                    if (l)
                        for (var u in l) o.prop(u, l[u](r), s)
                }
            }
        };

    function AC(t) {
        var e, r = t.Symbol;
        return typeof r == "function" ? r.observable ? e = r.observable : (e = r("observable"), r.observable = e) : e = "@@observable", e
    }
    var Os;
    typeof self < "u" ? Os = self : typeof window < "u" ? Os = window : typeof global < "u" ? Os = global : typeof f1 < "u" ? Os = f1 : Os = Function("return this")();
    var g3 = AC(Os),
        v3 = function(e) {
            return e && e[g3] && e === e[g3]()
        },
        SC = function(e) {
            return {
                onCreateRule: function(n, i, s) {
                    if (!v3(i)) return null;
                    var o = i,
                        a = l2(n, {}, s);
                    return o.subscribe(function(l) {
                        for (var u in l) a.prop(u, l[u], e)
                    }), a
                },
                onProcessRule: function(n) {
                    if (!(n && n.type !== "style")) {
                        var i = n,
                            s = i.style,
                            o = function(c) {
                                var f = s[c];
                                if (!v3(f)) return "continue";
                                delete s[c], f.subscribe({
                                    next: function(h) {
                                        i.prop(c, h, e)
                                    }
                                })
                            };
                        for (var a in s) var l = o(a)
                    }
                }
            }
        },
        kC = /;\n/,
        PC = function(e) {
            for (var r = {}, n = e.split(kC), i = 0; i < n.length; i++) {
                var s = (n[i] || "").trim();
                if (s) {
                    var o = s.indexOf(":");
                    if (o !== -1) {
                        var a = s.substr(0, o).trim(),
                            l = s.substr(o + 1).trim();
                        r[a] = l
                    }
                }
            }
            return r
        },
        bC = function(e) {
            typeof e.style == "string" && (e.style = PC(e.style))
        };

    function TC() {
        return {
            onProcessRule: bC
        }
    }
    var yi = "@global",
        e1 = "@global ",
        EC = function() {
            function t(r, n, i) {
                this.type = "global", this.at = yi, this.isProcessed = !1, this.key = r, this.options = i, this.rules = new u2(Re({}, i, {
                    parent: this
                }));
                for (var s in n) this.rules.add(s, n[s]);
                this.rules.process()
            }
            var e = t.prototype;
            return e.getRule = function(n) {
                return this.rules.get(n)
            }, e.addRule = function(n, i, s) {
                var o = this.rules.add(n, i, s);
                return o && this.options.jss.plugins.onProcessRule(o), o
            }, e.replaceRule = function(n, i, s) {
                var o = this.rules.replace(n, i, s);
                return o && this.options.jss.plugins.onProcessRule(o), o
            }, e.indexOf = function(n) {
                return this.rules.indexOf(n)
            }, e.toString = function(n) {
                return this.rules.toString(n)
            }, t
        }(),
        jC = function() {
            function t(r, n, i) {
                this.type = "global", this.at = yi, this.isProcessed = !1, this.key = r, this.options = i;
                var s = r.substr(e1.length);
                this.rule = i.jss.createRule(s, n, Re({}, i, {
                    parent: this
                }))
            }
            var e = t.prototype;
            return e.toString = function(n) {
                return this.rule ? this.rule.toString(n) : ""
            }, t
        }(),
        MC = /\s*,\s*/g;

    function j6(t, e) {
        for (var r = t.split(MC), n = "", i = 0; i < r.length; i++) n += e + " " + r[i].trim(), r[i + 1] && (n += ", ");
        return n
    }

    function RC(t, e) {
        var r = t.options,
            n = t.style,
            i = n ? n[yi] : null;
        if (i) {
            for (var s in i) e.addRule(s, i[s], Re({}, r, {
                selector: j6(s, t.selector)
            }));
            delete n[yi]
        }
    }

    function NC(t, e) {
        var r = t.options,
            n = t.style;
        for (var i in n)
            if (!(i[0] !== "@" || i.substr(0, yi.length) !== yi)) {
                var s = j6(i.substr(yi.length), t.selector);
                e.addRule(s, n[i], Re({}, r, {
                    selector: s
                })), delete n[i]
            }
    }

    function LC() {
        function t(r, n, i) {
            if (!r) return null;
            if (r === yi) return new EC(r, n, i);
            if (r[0] === "@" && r.substr(0, e1.length) === e1) return new jC(r, n, i);
            var s = i.parent;
            return s && (s.type === "global" || s.options.parent && s.options.parent.type === "global") && (i.scoped = !1), !i.selector && i.scoped === !1 && (i.selector = r), null
        }

        function e(r, n) {
            r.type !== "style" || !n || (RC(r, n), NC(r, n))
        }
        return {
            onCreateRule: t,
            onProcessRule: e
        }
    }
    var z0 = function(e) {
            return e && typeof e == "object" && !Array.isArray(e)
        },
        cc = "extendCurrValue" + Date.now();

    function OC(t, e, r, n) {
        var i = typeof t.extend;
        if (i === "string") {
            if (!r) return;
            var s = r.getRule(t.extend);
            if (!s || s === e) return;
            var o = s.options.parent;
            if (o) {
                var a = o.rules.raw[t.extend];
                Ki(a, e, r, n)
            }
            return
        }
        if (Array.isArray(t.extend)) {
            for (var l = 0; l < t.extend.length; l++) {
                var u = t.extend[l],
                    c = typeof u == "string" ? Re({}, t, {
                        extend: u
                    }) : t.extend[l];
                Ki(c, e, r, n)
            }
            return
        }
        for (var f in t.extend) {
            if (f === "extend") {
                Ki(t.extend.extend, e, r, n);
                continue
            }
            if (z0(t.extend[f])) {
                f in n || (n[f] = {}), Ki(t.extend[f], e, r, n[f]);
                continue
            }
            n[f] = t.extend[f]
        }
    }

    function zC(t, e, r, n) {
        for (var i in t)
            if (i !== "extend") {
                if (z0(n[i]) && z0(t[i])) {
                    Ki(t[i], e, r, n[i]);
                    continue
                }
                if (z0(t[i])) {
                    n[i] = Ki(t[i], e, r);
                    continue
                }
                n[i] = t[i]
            }
    }

    function Ki(t, e, r, n) {
        return n === void 0 && (n = {}), OC(t, e, r, n), zC(t, e, r, n), n
    }

    function IC() {
        function t(r, n, i) {
            return "extend" in r ? Ki(r, n, i) : r
        }

        function e(r, n, i) {
            if (n !== "extend") return r;
            if (r == null || r === !1) {
                for (var s in i[cc]) i.prop(s, null);
                return i[cc] = null, null
            }
            if (typeof r == "object") {
                for (var o in r) i.prop(o, r[o]);
                i[cc] = r
            }
            return null
        }
        return {
            onProcessStyle: t,
            onChangeValue: e
        }
    }
    var y3 = /\s*,\s*/g,
        DC = /&/g,
        FC = /\$([\w-]+)/g;

    function BC() {
        function t(i, s) {
            return function(o, a) {
                var l = i.getRule(a) || s && s.getRule(a);
                return l ? l.selector : a
            }
        }

        function e(i, s) {
            for (var o = s.split(y3), a = i.split(y3), l = "", u = 0; u < o.length; u++)
                for (var c = o[u], f = 0; f < a.length; f++) {
                    var d = a[f];
                    l && (l += ", "), l += d.indexOf("&") !== -1 ? d.replace(DC, c) : c + " " + d
                }
            return l
        }

        function r(i, s, o) {
            if (o) return Re({}, o, {
                index: o.index + 1
            });
            var a = i.options.nestingLevel;
            a = a === void 0 ? 1 : a + 1;
            var l = Re({}, i.options, {
                nestingLevel: a,
                index: s.indexOf(i) + 1
            });
            return delete l.name, l
        }

        function n(i, s, o) {
            if (s.type !== "style") return i;
            var a = s,
                l = a.options.parent,
                u, c;
            for (var f in i) {
                var d = f.indexOf("&") !== -1,
                    h = f[0] === "@";
                if (!(!d && !h)) {
                    if (u = r(a, l, u), d) {
                        var y = e(f, a.selector);
                        c || (c = t(l, o)), y = y.replace(FC, c);
                        var g = a.key + "-" + f;
                        "replaceRule" in l ? l.replaceRule(g, i[f], Re({}, u, {
                            selector: y
                        })) : l.addRule(g, i[f], Re({}, u, {
                            selector: y
                        }))
                    } else h && l.addRule(f, {}, u).addRule(a.key, i[f], {
                        selector: a.selector
                    });
                    delete i[f]
                }
            }
            return i
        }
        return {
            onProcessStyle: n
        }
    }

    function t1(t, e) {
        if (!e) return !0;
        if (Array.isArray(e)) {
            for (var r = 0; r < e.length; r++) {
                var n = t1(t, e[r]);
                if (!n) return !1
            }
            return !0
        }
        if (e.indexOf(" ") > -1) return t1(t, e.split(" "));
        var i = t.options.parent;
        if (e[0] === "$") {
            var s = i.getRule(e.substr(1));
            return !s || s === t ? !1 : (i.classes[t.key] += " " + i.classes[s.key], !0)
        }
        return i.classes[t.key] += " " + e, !0
    }

    function $C() {
        function t(e, r) {
            return "composes" in e && (t1(r, e.composes), delete e.composes), e
        }
        return {
            onProcessStyle: t
        }
    }
    var HC = /[A-Z]/g,
        VC = /^ms-/,
        fc = {};

    function UC(t) {
        return "-" + t.toLowerCase()
    }

    function M6(t) {
        if (fc.hasOwnProperty(t)) return fc[t];
        var e = t.replace(HC, UC);
        return fc[t] = VC.test(e) ? "-" + e : e
    }

    function Au(t) {
        var e = {};
        for (var r in t) {
            var n = r.indexOf("--") === 0 ? r : M6(r);
            e[n] = t[r]
        }
        return t.fallbacks && (Array.isArray(t.fallbacks) ? e.fallbacks = t.fallbacks.map(Au) : e.fallbacks = Au(t.fallbacks)), e
    }

    function GC() {
        function t(r) {
            if (Array.isArray(r)) {
                for (var n = 0; n < r.length; n++) r[n] = Au(r[n]);
                return r
            }
            return Au(r)
        }

        function e(r, n, i) {
            if (n.indexOf("--") === 0) return r;
            var s = M6(n);
            return n === s ? r : (i.prop(s, r), null)
        }
        return {
            onProcessStyle: t,
            onChangeValue: e
        }
    }
    var j = Fd && CSS ? CSS.px : "px",
        f0 = Fd && CSS ? CSS.ms : "ms",
        Ms = Fd && CSS ? CSS.percent : "%",
        WC = {
            "animation-delay": f0,
            "animation-duration": f0,
            "background-position": j,
            "background-position-x": j,
            "background-position-y": j,
            "background-size": j,
            border: j,
            "border-bottom": j,
            "border-bottom-left-radius": j,
            "border-bottom-right-radius": j,
            "border-bottom-width": j,
            "border-left": j,
            "border-left-width": j,
            "border-radius": j,
            "border-right": j,
            "border-right-width": j,
            "border-top": j,
            "border-top-left-radius": j,
            "border-top-right-radius": j,
            "border-top-width": j,
            "border-width": j,
            "border-block": j,
            "border-block-end": j,
            "border-block-end-width": j,
            "border-block-start": j,
            "border-block-start-width": j,
            "border-block-width": j,
            "border-inline": j,
            "border-inline-end": j,
            "border-inline-end-width": j,
            "border-inline-start": j,
            "border-inline-start-width": j,
            "border-inline-width": j,
            "border-start-start-radius": j,
            "border-start-end-radius": j,
            "border-end-start-radius": j,
            "border-end-end-radius": j,
            margin: j,
            "margin-bottom": j,
            "margin-left": j,
            "margin-right": j,
            "margin-top": j,
            "margin-block": j,
            "margin-block-end": j,
            "margin-block-start": j,
            "margin-inline": j,
            "margin-inline-end": j,
            "margin-inline-start": j,
            padding: j,
            "padding-bottom": j,
            "padding-left": j,
            "padding-right": j,
            "padding-top": j,
            "padding-block": j,
            "padding-block-end": j,
            "padding-block-start": j,
            "padding-inline": j,
            "padding-inline-end": j,
            "padding-inline-start": j,
            "mask-position-x": j,
            "mask-position-y": j,
            "mask-size": j,
            height: j,
            width: j,
            "min-height": j,
            "max-height": j,
            "min-width": j,
            "max-width": j,
            bottom: j,
            left: j,
            top: j,
            right: j,
            inset: j,
            "inset-block": j,
            "inset-block-end": j,
            "inset-block-start": j,
            "inset-inline": j,
            "inset-inline-end": j,
            "inset-inline-start": j,
            "box-shadow": j,
            "text-shadow": j,
            "column-gap": j,
            "column-rule": j,
            "column-rule-width": j,
            "column-width": j,
            "font-size": j,
            "font-size-delta": j,
            "letter-spacing": j,
            "text-decoration-thickness": j,
            "text-indent": j,
            "text-stroke": j,
            "text-stroke-width": j,
            "word-spacing": j,
            motion: j,
            "motion-offset": j,
            outline: j,
            "outline-offset": j,
            "outline-width": j,
            perspective: j,
            "perspective-origin-x": Ms,
            "perspective-origin-y": Ms,
            "transform-origin": Ms,
            "transform-origin-x": Ms,
            "transform-origin-y": Ms,
            "transform-origin-z": Ms,
            "transition-delay": f0,
            "transition-duration": f0,
            "vertical-align": j,
            "flex-basis": j,
            "shape-margin": j,
            size: j,
            gap: j,
            grid: j,
            "grid-gap": j,
            "row-gap": j,
            "grid-row-gap": j,
            "grid-column-gap": j,
            "grid-template-rows": j,
            "grid-template-columns": j,
            "grid-auto-rows": j,
            "grid-auto-columns": j,
            "box-shadow-x": j,
            "box-shadow-y": j,
            "box-shadow-blur": j,
            "box-shadow-spread": j,
            "font-line-height": j,
            "text-shadow-x": j,
            "text-shadow-y": j,
            "text-shadow-blur": j
        };

    function R6(t) {
        var e = /(-[a-z])/g,
            r = function(o) {
                return o[1].toUpperCase()
            },
            n = {};
        for (var i in t) n[i] = t[i], n[i.replace(e, r)] = t[i];
        return n
    }
    var QC = R6(WC);

    function $a(t, e, r) {
        if (e == null) return e;
        if (Array.isArray(e))
            for (var n = 0; n < e.length; n++) e[n] = $a(t, e[n], r);
        else if (typeof e == "object")
            if (t === "fallbacks")
                for (var i in e) e[i] = $a(i, e[i], r);
            else
                for (var s in e) e[s] = $a(t + "-" + s, e[s], r);
        else if (typeof e == "number" && isNaN(e) === !1) {
            var o = r[t] || QC[t];
            return o && !(e === 0 && o === j) ? typeof o == "function" ? o(e).toString() : "" + e + o : e.toString()
        }
        return e
    }

    function YC(t) {
        t === void 0 && (t = {});
        var e = R6(t);

        function r(i, s) {
            if (s.type !== "style") return i;
            for (var o in i) i[o] = $a(o, i[o], e);
            return i
        }

        function n(i, s) {
            return $a(s, i, e)
        }
        return {
            onProcessStyle: r,
            onChangeValue: n
        }
    }
    var qC = {
            "background-size": !0,
            "background-position": !0,
            border: !0,
            "border-bottom": !0,
            "border-left": !0,
            "border-top": !0,
            "border-right": !0,
            "border-radius": !0,
            "border-image": !0,
            "border-width": !0,
            "border-style": !0,
            "border-color": !0,
            "box-shadow": !0,
            flex: !0,
            margin: !0,
            padding: !0,
            outline: !0,
            "transform-origin": !0,
            transform: !0,
            transition: !0
        },
        KC = {
            position: !0,
            size: !0
        },
        d0 = {
            padding: {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0
            },
            margin: {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0
            },
            background: {
                attachment: null,
                color: null,
                image: null,
                position: null,
                repeat: null
            },
            border: {
                width: null,
                style: null,
                color: null
            },
            "border-top": {
                width: null,
                style: null,
                color: null
            },
            "border-right": {
                width: null,
                style: null,
                color: null
            },
            "border-bottom": {
                width: null,
                style: null,
                color: null
            },
            "border-left": {
                width: null,
                style: null,
                color: null
            },
            outline: {
                width: null,
                style: null,
                color: null
            },
            "list-style": {
                type: null,
                position: null,
                image: null
            },
            transition: {
                property: null,
                duration: null,
                "timing-function": null,
                timingFunction: null,
                delay: null
            },
            animation: {
                name: null,
                duration: null,
                "timing-function": null,
                timingFunction: null,
                delay: null,
                "iteration-count": null,
                iterationCount: null,
                direction: null,
                "fill-mode": null,
                fillMode: null,
                "play-state": null,
                playState: null
            },
            "box-shadow": {
                x: 0,
                y: 0,
                blur: 0,
                spread: 0,
                color: null,
                inset: null
            },
            "text-shadow": {
                x: 0,
                y: 0,
                blur: null,
                color: null
            }
        },
        dc = {
            border: {
                radius: "border-radius",
                image: "border-image",
                width: "border-width",
                style: "border-style",
                color: "border-color"
            },
            "border-bottom": {
                width: "border-bottom-width",
                style: "border-bottom-style",
                color: "border-bottom-color"
            },
            "border-top": {
                width: "border-top-width",
                style: "border-top-style",
                color: "border-top-color"
            },
            "border-left": {
                width: "border-left-width",
                style: "border-left-style",
                color: "border-left-color"
            },
            "border-right": {
                width: "border-right-width",
                style: "border-right-style",
                color: "border-right-color"
            },
            background: {
                size: "background-size",
                image: "background-image"
            },
            font: {
                style: "font-style",
                variant: "font-variant",
                weight: "font-weight",
                stretch: "font-stretch",
                size: "font-size",
                family: "font-family",
                lineHeight: "line-height",
                "line-height": "line-height"
            },
            flex: {
                grow: "flex-grow",
                basis: "flex-basis",
                direction: "flex-direction",
                wrap: "flex-wrap",
                flow: "flex-flow",
                shrink: "flex-shrink"
            },
            align: {
                self: "align-self",
                items: "align-items",
                content: "align-content"
            },
            grid: {
                "template-columns": "grid-template-columns",
                templateColumns: "grid-template-columns",
                "template-rows": "grid-template-rows",
                templateRows: "grid-template-rows",
                "template-areas": "grid-template-areas",
                templateAreas: "grid-template-areas",
                template: "grid-template",
                "auto-columns": "grid-auto-columns",
                autoColumns: "grid-auto-columns",
                "auto-rows": "grid-auto-rows",
                autoRows: "grid-auto-rows",
                "auto-flow": "grid-auto-flow",
                autoFlow: "grid-auto-flow",
                row: "grid-row",
                column: "grid-column",
                "row-start": "grid-row-start",
                rowStart: "grid-row-start",
                "row-end": "grid-row-end",
                rowEnd: "grid-row-end",
                "column-start": "grid-column-start",
                columnStart: "grid-column-start",
                "column-end": "grid-column-end",
                columnEnd: "grid-column-end",
                area: "grid-area",
                gap: "grid-gap",
                "row-gap": "grid-row-gap",
                rowGap: "grid-row-gap",
                "column-gap": "grid-column-gap",
                columnGap: "grid-column-gap"
            }
        };

    function ZC(t, e, r) {
        return t.map(function(n) {
            return L6(n, e, r, !1, !0)
        })
    }

    function N6(t, e, r, n) {
        return r[e] == null ? t : t.length === 0 ? [] : Array.isArray(t[0]) ? N6(t[0], e, r, n) : typeof t[0] == "object" ? ZC(t, e, n) : [t]
    }

    function L6(t, e, r, n, i) {
        if (!(d0[e] || dc[e])) return [];
        var s = [];
        if (dc[e] && (t = XC(t, r, dc[e], n)), Object.keys(t).length)
            for (var o in d0[e]) {
                if (t[o]) {
                    Array.isArray(t[o]) ? s.push(KC[o] === null ? t[o] : t[o].join(" ")) : s.push(t[o]);
                    continue
                }
                d0[e][o] != null && s.push(d0[e][o])
            }
        return !s.length || i ? s : [s]
    }

    function XC(t, e, r, n) {
        for (var i in r) {
            var s = r[i];
            if (typeof t[i] < "u" && (n || !e.prop(s))) {
                var o, a = yl((o = {}, o[s] = t[i], o), e)[s];
                n ? e.style.fallbacks[s] = a : e.style[s] = a
            }
            delete t[i]
        }
        return t
    }

    function yl(t, e, r) {
        for (var n in t) {
            var i = t[n];
            if (Array.isArray(i)) {
                if (!Array.isArray(i[0])) {
                    if (n === "fallbacks") {
                        for (var s = 0; s < t.fallbacks.length; s++) t.fallbacks[s] = yl(t.fallbacks[s], e, !0);
                        continue
                    }
                    t[n] = N6(i, n, qC, e), t[n].length || delete t[n]
                }
            } else if (typeof i == "object") {
                if (n === "fallbacks") {
                    t.fallbacks = yl(t.fallbacks, e, !0);
                    continue
                }
                t[n] = L6(i, n, e, r), t[n].length || delete t[n]
            } else t[n] === "" && delete t[n]
        }
        return t
    }

    function JC() {
        function t(e, r) {
            if (!e || r.type !== "style") return e;
            if (Array.isArray(e)) {
                for (var n = 0; n < e.length; n++) e[n] = yl(e[n], r);
                return e
            }
            return yl(e, r)
        }
        return {
            onProcessStyle: t
        }
    }

    function r1(t, e) {
        (e == null || e > t.length) && (e = t.length);
        for (var r = 0, n = Array(e); r < e; r++) n[r] = t[r];
        return n
    }

    function eA(t) {
        if (Array.isArray(t)) return r1(t)
    }

    function tA(t) {
        if (typeof Symbol < "u" && t[Symbol.iterator] != null || t["@@iterator"] != null) return Array.from(t)
    }

    function rA(t, e) {
        if (t) {
            if (typeof t == "string") return r1(t, e);
            var r = {}.toString.call(t).slice(8, -1);
            return r === "Object" && t.constructor && (r = t.constructor.name), r === "Map" || r === "Set" ? Array.from(t) : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? r1(t, e) : void 0
        }
    }

    function nA() {
        throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
    }

    function iA(t) {
        return eA(t) || tA(t) || rA(t) || nA()
    }
    var ma = "",
        n1 = "",
        O6 = "",
        z6 = "",
        sA = Mo && "ontouchstart" in document.documentElement;
    if (Mo) {
        var hc = {
                Moz: "-moz-",
                ms: "-ms-",
                O: "-o-",
                Webkit: "-webkit-"
            },
            oA = document.createElement("p"),
            pc = oA.style,
            aA = "Transform";
        for (var mc in hc)
            if (mc + aA in pc) {
                ma = mc, n1 = hc[mc];
                break
            }
        ma === "Webkit" && "msHyphens" in pc && (ma = "ms", n1 = hc.ms, z6 = "edge"), ma === "Webkit" && "-apple-trailing-word" in pc && (O6 = "apple")
    }
    var K = {
        js: ma,
        css: n1,
        vendor: O6,
        browser: z6,
        isTouch: sA
    };

    function lA(t) {
        return t[1] === "-" || K.js === "ms" ? t : "@" + K.css + "keyframes" + t.substr(10)
    }
    var uA = {
            noPrefill: ["appearance"],
            supportedProperty: function(e) {
                return e !== "appearance" ? !1 : K.js === "ms" ? "-webkit-" + e : K.css + e
            }
        },
        cA = {
            noPrefill: ["color-adjust"],
            supportedProperty: function(e) {
                return e !== "color-adjust" ? !1 : K.js === "Webkit" ? K.css + "print-" + e : e
            }
        },
        fA = /[-\s]+(.)?/g;

    function dA(t, e) {
        return e ? e.toUpperCase() : ""
    }

    function Bd(t) {
        return t.replace(fA, dA)
    }

    function Si(t) {
        return Bd("-" + t)
    }
    var hA = {
            noPrefill: ["mask"],
            supportedProperty: function(e, r) {
                if (!/^mask/.test(e)) return !1;
                if (K.js === "Webkit") {
                    var n = "mask-image";
                    if (Bd(n) in r) return e;
                    if (K.js + Si(n) in r) return K.css + e
                }
                return e
            }
        },
        pA = {
            noPrefill: ["text-orientation"],
            supportedProperty: function(e) {
                return e !== "text-orientation" ? !1 : K.vendor === "apple" && !K.isTouch ? K.css + e : e
            }
        },
        mA = {
            noPrefill: ["transform"],
            supportedProperty: function(e, r, n) {
                return e !== "transform" ? !1 : n.transform ? e : K.css + e
            }
        },
        gA = {
            noPrefill: ["transition"],
            supportedProperty: function(e, r, n) {
                return e !== "transition" ? !1 : n.transition ? e : K.css + e
            }
        },
        vA = {
            noPrefill: ["writing-mode"],
            supportedProperty: function(e) {
                return e !== "writing-mode" ? !1 : K.js === "Webkit" || K.js === "ms" && K.browser !== "edge" ? K.css + e : e
            }
        },
        yA = {
            noPrefill: ["user-select"],
            supportedProperty: function(e) {
                return e !== "user-select" ? !1 : K.js === "Moz" || K.js === "ms" || K.vendor === "apple" ? K.css + e : e
            }
        },
        xA = {
            supportedProperty: function(e, r) {
                if (!/^break-/.test(e)) return !1;
                if (K.js === "Webkit") {
                    var n = "WebkitColumn" + Si(e);
                    return n in r ? K.css + "column-" + e : !1
                }
                if (K.js === "Moz") {
                    var i = "page" + Si(e);
                    return i in r ? "page-" + e : !1
                }
                return !1
            }
        },
        _A = {
            supportedProperty: function(e, r) {
                if (!/^(border|margin|padding)-inline/.test(e)) return !1;
                if (K.js === "Moz") return e;
                var n = e.replace("-inline", "");
                return K.js + Si(n) in r ? K.css + n : !1
            }
        },
        wA = {
            supportedProperty: function(e, r) {
                return Bd(e) in r ? e : !1
            }
        },
        CA = {
            supportedProperty: function(e, r) {
                var n = Si(e);
                return e[0] === "-" || e[0] === "-" && e[1] === "-" ? e : K.js + n in r ? K.css + e : K.js !== "Webkit" && "Webkit" + n in r ? "-webkit-" + e : !1
            }
        },
        AA = {
            supportedProperty: function(e) {
                return e.substring(0, 11) !== "scroll-snap" ? !1 : K.js === "ms" ? "" + K.css + e : e
            }
        },
        SA = {
            supportedProperty: function(e) {
                return e !== "overscroll-behavior" ? !1 : K.js === "ms" ? K.css + "scroll-chaining" : e
            }
        },
        kA = {
            "flex-grow": "flex-positive",
            "flex-shrink": "flex-negative",
            "flex-basis": "flex-preferred-size",
            "justify-content": "flex-pack",
            order: "flex-order",
            "align-items": "flex-align",
            "align-content": "flex-line-pack"
        },
        PA = {
            supportedProperty: function(e, r) {
                var n = kA[e];
                return n && K.js + Si(n) in r ? K.css + n : !1
            }
        },
        I6 = {
            flex: "box-flex",
            "flex-grow": "box-flex",
            "flex-direction": ["box-orient", "box-direction"],
            order: "box-ordinal-group",
            "align-items": "box-align",
            "flex-flow": ["box-orient", "box-direction"],
            "justify-content": "box-pack"
        },
        bA = Object.keys(I6),
        TA = function(e) {
            return K.css + e
        },
        EA = {
            supportedProperty: function(e, r, n) {
                var i = n.multiple;
                if (bA.indexOf(e) > -1) {
                    var s = I6[e];
                    if (!Array.isArray(s)) return K.js + Si(s) in r ? K.css + s : !1;
                    if (!i) return !1;
                    for (var o = 0; o < s.length; o++)
                        if (!(K.js + Si(s[0]) in r)) return !1;
                    return s.map(TA)
                }
                return !1
            }
        },
        D6 = [uA, cA, hA, pA, mA, gA, vA, yA, xA, _A, wA, CA, AA, SA, PA, EA],
        x3 = D6.filter(function(t) {
            return t.supportedProperty
        }).map(function(t) {
            return t.supportedProperty
        }),
        jA = D6.filter(function(t) {
            return t.noPrefill
        }).reduce(function(t, e) {
            return t.push.apply(t, iA(e.noPrefill)), t
        }, []),
        ga, Ui = {};
    if (Mo) {
        ga = document.createElement("p");
        var gc = window.getComputedStyle(document.documentElement, "");
        for (var vc in gc) isNaN(vc) || (Ui[gc[vc]] = gc[vc]);
        jA.forEach(function(t) {
            return delete Ui[t]
        })
    }

    function i1(t, e) {
        if (e === void 0 && (e = {}), !ga) return t;
        if (Ui[t] != null) return Ui[t];
        (t === "transition" || t === "transform") && (e[t] = t in ga.style);
        for (var r = 0; r < x3.length && (Ui[t] = x3[r](t, ga.style, e), !Ui[t]); r++);
        try {
            ga.style[t] = ""
        } catch {
            return !1
        }
        return Ui[t]
    }
    var Rs = {},
        MA = {
            transition: 1,
            "transition-property": 1,
            "-webkit-transition": 1,
            "-webkit-transition-property": 1
        },
        RA = /(^\s*[\w-]+)|, (\s*[\w-]+)(?![^()]*\))/g,
        Qn;

    function NA(t, e, r) {
        if (e === "var") return "var";
        if (e === "all") return "all";
        if (r === "all") return ", all";
        var n = e ? i1(e) : ", " + i1(r);
        return n || e || r
    }
    Mo && (Qn = document.createElement("p"));

    function _3(t, e) {
        var r = e;
        if (!Qn || t === "content") return e;
        if (typeof r != "string" || !isNaN(parseInt(r, 10))) return r;
        var n = t + r;
        if (Rs[n] != null) return Rs[n];
        try {
            Qn.style[t] = r
        } catch {
            return Rs[n] = !1, !1
        }
        if (MA[t]) r = r.replace(RA, NA);
        else if (Qn.style[t] === "" && (r = K.css + r, r === "-ms-flex" && (Qn.style[t] = "-ms-flexbox"), Qn.style[t] = r, Qn.style[t] === "")) return Rs[n] = !1, !1;
        return Qn.style[t] = "", Rs[n] = r, Rs[n]
    }

    function LA() {
        function t(i) {
            if (i.type === "keyframes") {
                var s = i;
                s.at = lA(s.at)
            }
        }

        function e(i) {
            for (var s in i) {
                var o = i[s];
                if (s === "fallbacks" && Array.isArray(o)) {
                    i[s] = o.map(e);
                    continue
                }
                var a = !1,
                    l = i1(s);
                l && l !== s && (a = !0);
                var u = !1,
                    c = _3(l, os(o));
                c && c !== o && (u = !0), (a || u) && (a && delete i[s], i[l || s] = c || o)
            }
            return i
        }

        function r(i, s) {
            return s.type !== "style" ? i : e(i)
        }

        function n(i, s) {
            return _3(s, os(i)) || i
        }
        return {
            onProcessRule: t,
            onProcessStyle: r,
            onChangeValue: n
        }
    }

    function OA() {
        var t = function(r, n) {
            return r.length === n.length ? r > n ? 1 : -1 : r.length - n.length
        };
        return {
            onProcessStyle: function(r, n) {
                if (n.type !== "style") return r;
                for (var i = {}, s = Object.keys(r).sort(t), o = 0; o < s.length; o++) i[s[o]] = r[s[o]];
                return i
            }
        }
    }
    var zA = function(e) {
            return e === void 0 && (e = {}), {
                plugins: [CC(), SC(e.observable), TC(), LC(), IC(), BC(), $C(), GC(), YC(e.defaultUnit), JC(), LA(), OA()]
            }
        },
        IA = Number.MIN_SAFE_INTEGER || -1e9,
        DA = function() {
            return IA++
        },
        FA = M.createContext({
            classNamePrefix: "",
            disableStylesGeneration: !1,
            isSSR: !Mo
        }),
        w3 = new Map,
        $d = function(e, r) {
            var n = e.managers;
            if (n) return n[r] || (n[r] = new m3), n[r];
            var i = w3.get(r);
            return i || (i = new m3, w3.set(r, i)), i
        },
        C3 = function(e) {
            var r = e.sheet,
                n = e.context,
                i = e.index,
                s = e.theme;
            if (r) {
                var o = $d(n, i);
                o.manage(s), n.registry && n.registry.add(r)
            }
        },
        BA = function(e) {
            if (e.sheet) {
                var r = $d(e.context, e.index);
                r.unmanage(e.theme)
            }
        },
        $A = b6(zA()),
        F6 = new WeakMap,
        B6 = function(e) {
            return F6.get(e)
        },
        HA = function(e, r) {
            F6.set(e, r)
        },
        VA = function(e) {
            var r = e.styles;
            return typeof r != "function" ? r : r(e.theme)
        };

    function UA(t, e) {
        var r;
        t.context.id && t.context.id.minify != null && (r = t.context.id.minify);
        var n = t.context.classNamePrefix || "";
        t.name && !r && (n += t.name.replace(/\s/g, "-") + "-");
        var i = "";
        return t.name && (i = t.name + ", "), i += typeof t.styles == "function" ? "Themed" : "Unthemed", Re({}, t.sheetOptions, {
            index: t.index,
            meta: i,
            classNamePrefix: n,
            link: e,
            generateId: t.sheetOptions && t.sheetOptions.generateId ? t.sheetOptions.generateId : t.context.generateId
        })
    }
    var GA = function(e) {
            if (!e.context.disableStylesGeneration) {
                var r = $d(e.context, e.index),
                    n = r.get(e.theme);
                if (n) return n;
                var i = e.context.jss || $A,
                    s = VA(e),
                    o = T6(s),
                    a = i.createStyleSheet(s, UA(e, o !== null));
                return HA(a, {
                    dynamicStyles: o,
                    styles: s
                }), r.add(e.theme, a), a
            }
        },
        WA = function(e, r) {
            for (var n in r) e.deleteRule(r[n])
        },
        QA = function(e, r, n) {
            for (var i in n) r.updateOne(n[i], e)
        },
        YA = function(e, r) {
            var n = B6(e);
            if (n) {
                var i = {};
                for (var s in n.dynamicStyles)
                    for (var o = e.rules.index.length, a = e.addRule(s, n.dynamicStyles[s]), l = o; l < e.rules.index.length; l++) {
                        var u = e.rules.index[l];
                        e.updateOne(u, r), i[a === u ? s : u.key] = u
                    }
                return i
            }
        },
        qA = function(e, r) {
            if (!r) return e.classes;
            var n = B6(e);
            if (!n) return e.classes;
            var i = {};
            for (var s in n.styles) i[s] = e.classes[s], s in r && (i[s] += " " + e.classes[r[s].key]);
            return i
        };

    function A3(t) {
        return t ? M.useEffect : Mr.useInsertionEffect || M.useLayoutEffect
    }
    var yc = {},
        KA = function(e, r) {
            r === void 0 && (r = {});
            var n = r,
                i = n.index,
                s = i === void 0 ? DA() : i,
                o = n.theming,
                a = n.name,
                l = m6(n, ["index", "theming", "name"]),
                u = o && o.context || w6,
                c = function(h) {
                    return typeof e == "function" && (h || M.useContext(u)) || yc
                },
                f = {};
            return function(h) {
                var y = M.useRef(!0),
                    g = M.useContext(FA),
                    w = c(h && h.theme),
                    v = M.useMemo(function() {
                        var C = GA({
                            context: g,
                            styles: e,
                            name: a,
                            theme: w,
                            index: s,
                            sheetOptions: l
                        });
                        return C && g.isSSR && C3({
                            index: s,
                            context: g,
                            sheet: C,
                            theme: w
                        }), [C, C ? YA(C, h) : null]
                    }, [g, w]),
                    p = v[0],
                    x = v[1];
                A3(g.isSSR)(function() {
                    p && x && !y.current && QA(h, p, x)
                }, [h]), A3(g.isSSR)(function() {
                    return p && C3({
                            index: s,
                            context: g,
                            sheet: p,
                            theme: w
                        }),
                        function() {
                            p && (BA({
                                index: s,
                                context: g,
                                sheet: p,
                                theme: w
                            }), x && WA(p, x))
                        }
                }, [p]);
                var _ = M.useMemo(function() {
                    return p && x ? qA(p, x) : f
                }, [p, x]);
                return M.useDebugValue(_), M.useDebugValue(w === yc ? "No theme" : w), M.useEffect(function() {
                    y.current = !1
                }), _
            }
        },
        ZA = p6;

    function XA(t) {
        var e = ZA(t),
            r = e % 1;
        return e === e ? r ? e - r : e : 0
    }
    var JA = XA;

    function eS(t, e) {
        for (var r = -1, n = t == null ? 0 : t.length, i = Array(n); ++r < n;) i[r] = e(t[r], r, t);
        return i
    }
    var tS = eS,
        rS = Array.isArray,
        c2 = rS,
        S3 = Ku,
        nS = tS,
        iS = c2,
        sS = d6,
        oS = 1 / 0,
        k3 = S3 ? S3.prototype : void 0,
        P3 = k3 ? k3.toString : void 0;

    function $6(t) {
        if (typeof t == "string") return t;
        if (iS(t)) return nS(t, $6) + "";
        if (sS(t)) return P3 ? P3.call(t) : "";
        var e = t + "";
        return e == "0" && 1 / t == -oS ? "-0" : e
    }
    var aS = $6,
        lS = aS;

    function uS(t) {
        return t == null ? "" : lS(t)
    }
    var cS = uS,
        fS = mn,
        dS = JA,
        hS = h6,
        b3 = cS,
        pS = fS.isFinite,
        mS = Math.min;

    function gS(t) {
        var e = Math[t];
        return function(r, n) {
            if (r = hS(r), n = n == null ? 0 : mS(dS(n), 292), n && pS(r)) {
                var i = (b3(r) + "e").split("e"),
                    s = e(i[0] + "e" + (+i[1] + n));
                return i = (b3(s) + "e").split("e"), +(i[0] + "e" + (+i[1] - n))
            }
            return e(r)
        }
    }
    var vS = gS,
        yS = vS,
        xS = yS("round"),
        _S = xS;
    const na = xl(_S);

    function wS() {
        this.__data__ = [], this.size = 0
    }
    var CS = wS,
        AS = Md;

    function SS(t, e) {
        for (var r = t.length; r--;)
            if (AS(t[r][0], e)) return r;
        return -1
    }
    var f2 = SS,
        kS = f2,
        PS = Array.prototype,
        bS = PS.splice;

    function TS(t) {
        var e = this.__data__,
            r = kS(e, t);
        if (r < 0) return !1;
        var n = e.length - 1;
        return r == n ? e.pop() : bS.call(e, r, 1), --this.size, !0
    }
    var ES = TS,
        jS = f2;

    function MS(t) {
        var e = this.__data__,
            r = jS(e, t);
        return r < 0 ? void 0 : e[r][1]
    }
    var RS = MS,
        NS = f2;

    function LS(t) {
        return NS(this.__data__, t) > -1
    }
    var OS = LS,
        zS = f2;

    function IS(t, e) {
        var r = this.__data__,
            n = zS(r, t);
        return n < 0 ? (++this.size, r.push([t, e])) : r[n][1] = e, this
    }
    var DS = IS,
        FS = CS,
        BS = ES,
        $S = RS,
        HS = OS,
        VS = DS;

    function No(t) {
        var e = -1,
            r = t == null ? 0 : t.length;
        for (this.clear(); ++e < r;) {
            var n = t[e];
            this.set(n[0], n[1])
        }
    }
    No.prototype.clear = FS;
    No.prototype.delete = BS;
    No.prototype.get = $S;
    No.prototype.has = HS;
    No.prototype.set = VS;
    var d2 = No,
        US = d2;

    function GS() {
        this.__data__ = new US, this.size = 0
    }
    var WS = GS;

    function QS(t) {
        var e = this.__data__,
            r = e.delete(t);
        return this.size = e.size, r
    }
    var YS = QS;

    function qS(t) {
        return this.__data__.get(t)
    }
    var KS = qS;

    function ZS(t) {
        return this.__data__.has(t)
    }
    var XS = ZS,
        JS = mn,
        ek = JS["__core-js_shared__"],
        tk = ek,
        xc = tk,
        T3 = function() {
            var t = /[^.]+$/.exec(xc && xc.keys && xc.keys.IE_PROTO || "");
            return t ? "Symbol(src)_1." + t : ""
        }();

    function rk(t) {
        return !!T3 && T3 in t
    }
    var nk = rk,
        ik = Function.prototype,
        sk = ik.toString;

    function ok(t) {
        if (t != null) {
            try {
                return sk.call(t)
            } catch {}
            try {
                return t + ""
            } catch {}
        }
        return ""
    }
    var H6 = ok,
        ak = l6,
        lk = nk,
        uk = Zu,
        ck = H6,
        fk = /[\\^$.*+?()[\]{}|]/g,
        dk = /^\[object .+?Constructor\]$/,
        hk = Function.prototype,
        pk = Object.prototype,
        mk = hk.toString,
        gk = pk.hasOwnProperty,
        vk = RegExp("^" + mk.call(gk).replace(fk, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");

    function yk(t) {
        if (!uk(t) || lk(t)) return !1;
        var e = ak(t) ? vk : dk;
        return e.test(ck(t))
    }
    var xk = yk;

    function _k(t, e) {
        return t == null ? void 0 : t[e]
    }
    var wk = _k,
        Ck = xk,
        Ak = wk;

    function Sk(t, e) {
        var r = Ak(t, e);
        return Ck(r) ? r : void 0
    }
    var Lo = Sk,
        kk = Lo,
        Pk = mn,
        bk = kk(Pk, "Map"),
        Hd = bk,
        Tk = Lo,
        Ek = Tk(Object, "create"),
        h2 = Ek,
        E3 = h2;

    function jk() {
        this.__data__ = E3 ? E3(null) : {}, this.size = 0
    }
    var Mk = jk;

    function Rk(t) {
        var e = this.has(t) && delete this.__data__[t];
        return this.size -= e ? 1 : 0, e
    }
    var Nk = Rk,
        Lk = h2,
        Ok = "__lodash_hash_undefined__",
        zk = Object.prototype,
        Ik = zk.hasOwnProperty;

    function Dk(t) {
        var e = this.__data__;
        if (Lk) {
            var r = e[t];
            return r === Ok ? void 0 : r
        }
        return Ik.call(e, t) ? e[t] : void 0
    }
    var Fk = Dk,
        Bk = h2,
        $k = Object.prototype,
        Hk = $k.hasOwnProperty;

    function Vk(t) {
        var e = this.__data__;
        return Bk ? e[t] !== void 0 : Hk.call(e, t)
    }
    var Uk = Vk,
        Gk = h2,
        Wk = "__lodash_hash_undefined__";

    function Qk(t, e) {
        var r = this.__data__;
        return this.size += this.has(t) ? 0 : 1, r[t] = Gk && e === void 0 ? Wk : e, this
    }
    var Yk = Qk,
        qk = Mk,
        Kk = Nk,
        Zk = Fk,
        Xk = Uk,
        Jk = Yk;

    function Oo(t) {
        var e = -1,
            r = t == null ? 0 : t.length;
        for (this.clear(); ++e < r;) {
            var n = t[e];
            this.set(n[0], n[1])
        }
    }
    Oo.prototype.clear = qk;
    Oo.prototype.delete = Kk;
    Oo.prototype.get = Zk;
    Oo.prototype.has = Xk;
    Oo.prototype.set = Jk;
    var eP = Oo,
        j3 = eP,
        tP = d2,
        rP = Hd;

    function nP() {
        this.size = 0, this.__data__ = {
            hash: new j3,
            map: new(rP || tP),
            string: new j3
        }
    }
    var iP = nP;

    function sP(t) {
        var e = typeof t;
        return e == "string" || e == "number" || e == "symbol" || e == "boolean" ? t !== "__proto__" : t === null
    }
    var oP = sP,
        aP = oP;

    function lP(t, e) {
        var r = t.__data__;
        return aP(e) ? r[typeof e == "string" ? "string" : "hash"] : r.map
    }
    var p2 = lP,
        uP = p2;

    function cP(t) {
        var e = uP(this, t).delete(t);
        return this.size -= e ? 1 : 0, e
    }
    var fP = cP,
        dP = p2;

    function hP(t) {
        return dP(this, t).get(t)
    }
    var pP = hP,
        mP = p2;

    function gP(t) {
        return mP(this, t).has(t)
    }
    var vP = gP,
        yP = p2;

    function xP(t, e) {
        var r = yP(this, t),
            n = r.size;
        return r.set(t, e), this.size += r.size == n ? 0 : 1, this
    }
    var _P = xP,
        wP = iP,
        CP = fP,
        AP = pP,
        SP = vP,
        kP = _P;

    function zo(t) {
        var e = -1,
            r = t == null ? 0 : t.length;
        for (this.clear(); ++e < r;) {
            var n = t[e];
            this.set(n[0], n[1])
        }
    }
    zo.prototype.clear = wP;
    zo.prototype.delete = CP;
    zo.prototype.get = AP;
    zo.prototype.has = SP;
    zo.prototype.set = kP;
    var V6 = zo,
        PP = d2,
        bP = Hd,
        TP = V6,
        EP = 200;

    function jP(t, e) {
        var r = this.__data__;
        if (r instanceof PP) {
            var n = r.__data__;
            if (!bP || n.length < EP - 1) return n.push([t, e]), this.size = ++r.size, this;
            r = this.__data__ = new TP(n)
        }
        return r.set(t, e), this.size = r.size, this
    }
    var MP = jP,
        RP = d2,
        NP = WS,
        LP = YS,
        OP = KS,
        zP = XS,
        IP = MP;

    function Io(t) {
        var e = this.__data__ = new RP(t);
        this.size = e.size
    }
    Io.prototype.clear = NP;
    Io.prototype.delete = LP;
    Io.prototype.get = OP;
    Io.prototype.has = zP;
    Io.prototype.set = IP;
    var DP = Io,
        FP = "__lodash_hash_undefined__";

    function BP(t) {
        return this.__data__.set(t, FP), this
    }
    var $P = BP;

    function HP(t) {
        return this.__data__.has(t)
    }
    var VP = HP,
        UP = V6,
        GP = $P,
        WP = VP;

    function Su(t) {
        var e = -1,
            r = t == null ? 0 : t.length;
        for (this.__data__ = new UP; ++e < r;) this.add(t[e])
    }
    Su.prototype.add = Su.prototype.push = GP;
    Su.prototype.has = WP;
    var QP = Su;

    function YP(t, e) {
        for (var r = -1, n = t == null ? 0 : t.length; ++r < n;)
            if (e(t[r], r, t)) return !0;
        return !1
    }
    var qP = YP;

    function KP(t, e) {
        return t.has(e)
    }
    var ZP = KP,
        XP = QP,
        JP = qP,
        eb = ZP,
        tb = 1,
        rb = 2;

    function nb(t, e, r, n, i, s) {
        var o = r & tb,
            a = t.length,
            l = e.length;
        if (a != l && !(o && l > a)) return !1;
        var u = s.get(t),
            c = s.get(e);
        if (u && c) return u == e && c == t;
        var f = -1,
            d = !0,
            h = r & rb ? new XP : void 0;
        for (s.set(t, e), s.set(e, t); ++f < a;) {
            var y = t[f],
                g = e[f];
            if (n) var w = o ? n(g, y, f, e, t, s) : n(y, g, f, t, e, s);
            if (w !== void 0) {
                if (w) continue;
                d = !1;
                break
            }
            if (h) {
                if (!JP(e, function(v, p) {
                        if (!eb(h, p) && (y === v || i(y, v, r, n, s))) return h.push(p)
                    })) {
                    d = !1;
                    break
                }
            } else if (!(y === g || i(y, g, r, n, s))) {
                d = !1;
                break
            }
        }
        return s.delete(t), s.delete(e), d
    }
    var U6 = nb,
        ib = mn,
        sb = ib.Uint8Array,
        ob = sb;

    function ab(t) {
        var e = -1,
            r = Array(t.size);
        return t.forEach(function(n, i) {
            r[++e] = [i, n]
        }), r
    }
    var lb = ab;

    function ub(t) {
        var e = -1,
            r = Array(t.size);
        return t.forEach(function(n) {
            r[++e] = n
        }), r
    }
    var cb = ub,
        M3 = Ku,
        R3 = ob,
        fb = Md,
        db = U6,
        hb = lb,
        pb = cb,
        mb = 1,
        gb = 2,
        vb = "[object Boolean]",
        yb = "[object Date]",
        xb = "[object Error]",
        _b = "[object Map]",
        wb = "[object Number]",
        Cb = "[object RegExp]",
        Ab = "[object Set]",
        Sb = "[object String]",
        kb = "[object Symbol]",
        Pb = "[object ArrayBuffer]",
        bb = "[object DataView]",
        N3 = M3 ? M3.prototype : void 0,
        _c = N3 ? N3.valueOf : void 0;

    function Tb(t, e, r, n, i, s, o) {
        switch (r) {
            case bb:
                if (t.byteLength != e.byteLength || t.byteOffset != e.byteOffset) return !1;
                t = t.buffer, e = e.buffer;
            case Pb:
                return !(t.byteLength != e.byteLength || !s(new R3(t), new R3(e)));
            case vb:
            case yb:
            case wb:
                return fb(+t, +e);
            case xb:
                return t.name == e.name && t.message == e.message;
            case Cb:
            case Sb:
                return t == e + "";
            case _b:
                var a = hb;
            case Ab:
                var l = n & mb;
                if (a || (a = pb), t.size != e.size && !l) return !1;
                var u = o.get(t);
                if (u) return u == e;
                n |= gb, o.set(t, e);
                var c = db(a(t), a(e), n, i, s, o);
                return o.delete(t), c;
            case kb:
                if (_c) return _c.call(t) == _c.call(e)
        }
        return !1
    }
    var Eb = Tb;

    function jb(t, e) {
        for (var r = -1, n = e.length, i = t.length; ++r < n;) t[i + r] = e[r];
        return t
    }
    var Mb = jb,
        Rb = Mb,
        Nb = c2;

    function Lb(t, e, r) {
        var n = e(t);
        return Nb(t) ? n : Rb(n, r(t))
    }
    var Ob = Lb;

    function zb(t, e) {
        for (var r = -1, n = t == null ? 0 : t.length, i = 0, s = []; ++r < n;) {
            var o = t[r];
            e(o, r, t) && (s[i++] = o)
        }
        return s
    }
    var Ib = zb;

    function Db() {
        return []
    }
    var Fb = Db,
        Bb = Ib,
        $b = Fb,
        Hb = Object.prototype,
        Vb = Hb.propertyIsEnumerable,
        L3 = Object.getOwnPropertySymbols,
        Ub = L3 ? function(t) {
            return t == null ? [] : (t = Object(t), Bb(L3(t), function(e) {
                return Vb.call(t, e)
            }))
        } : $b,
        Gb = Ub;

    function Wb(t, e) {
        for (var r = -1, n = Array(t); ++r < t;) n[r] = e(r);
        return n
    }
    var Qb = Wb,
        Yb = bl,
        qb = Tl,
        Kb = "[object Arguments]";

    function Zb(t) {
        return qb(t) && Yb(t) == Kb
    }
    var Xb = Zb,
        O3 = Xb,
        Jb = Tl,
        G6 = Object.prototype,
        eT = G6.hasOwnProperty,
        tT = G6.propertyIsEnumerable,
        rT = O3(function() {
            return arguments
        }()) ? O3 : function(t) {
            return Jb(t) && eT.call(t, "callee") && !tT.call(t, "callee")
        },
        nT = rT,
        ku = {
            exports: {}
        };

    function iT() {
        return !1
    }
    var sT = iT;
    ku.exports;
    (function(t, e) {
        var r = mn,
            n = sT,
            i = e && !e.nodeType && e,
            s = i && !0 && t && !t.nodeType && t,
            o = s && s.exports === i,
            a = o ? r.Buffer : void 0,
            l = a ? a.isBuffer : void 0,
            u = l || n;
        t.exports = u
    })(ku, ku.exports);
    var W6 = ku.exports,
        oT = bl,
        aT = u6,
        lT = Tl,
        uT = "[object Arguments]",
        cT = "[object Array]",
        fT = "[object Boolean]",
        dT = "[object Date]",
        hT = "[object Error]",
        pT = "[object Function]",
        mT = "[object Map]",
        gT = "[object Number]",
        vT = "[object Object]",
        yT = "[object RegExp]",
        xT = "[object Set]",
        _T = "[object String]",
        wT = "[object WeakMap]",
        CT = "[object ArrayBuffer]",
        AT = "[object DataView]",
        ST = "[object Float32Array]",
        kT = "[object Float64Array]",
        PT = "[object Int8Array]",
        bT = "[object Int16Array]",
        TT = "[object Int32Array]",
        ET = "[object Uint8Array]",
        jT = "[object Uint8ClampedArray]",
        MT = "[object Uint16Array]",
        RT = "[object Uint32Array]",
        _e = {};
    _e[ST] = _e[kT] = _e[PT] = _e[bT] = _e[TT] = _e[ET] = _e[jT] = _e[MT] = _e[RT] = !0;
    _e[uT] = _e[cT] = _e[CT] = _e[fT] = _e[AT] = _e[dT] = _e[hT] = _e[pT] = _e[mT] = _e[gT] = _e[vT] = _e[yT] = _e[xT] = _e[_T] = _e[wT] = !1;

    function NT(t) {
        return lT(t) && aT(t.length) && !!_e[oT(t)]
    }
    var LT = NT;

    function OT(t) {
        return function(e) {
            return t(e)
        }
    }
    var zT = OT,
        Pu = {
            exports: {}
        };
    Pu.exports;
    (function(t, e) {
        var r = o6,
            n = e && !e.nodeType && e,
            i = n && !0 && t && !t.nodeType && t,
            s = i && i.exports === n,
            o = s && r.process,
            a = function() {
                try {
                    var l = i && i.require && i.require("util").types;
                    return l || o && o.binding && o.binding("util")
                } catch {}
            }();
        t.exports = a
    })(Pu, Pu.exports);
    var IT = Pu.exports,
        DT = LT,
        FT = zT,
        z3 = IT,
        I3 = z3 && z3.isTypedArray,
        BT = I3 ? FT(I3) : DT,
        Q6 = BT,
        $T = Qb,
        HT = nT,
        VT = c2,
        UT = W6,
        GT = f6,
        WT = Q6,
        QT = Object.prototype,
        YT = QT.hasOwnProperty;

    function qT(t, e) {
        var r = VT(t),
            n = !r && HT(t),
            i = !r && !n && UT(t),
            s = !r && !n && !i && WT(t),
            o = r || n || i || s,
            a = o ? $T(t.length, String) : [],
            l = a.length;
        for (var u in t)(e || YT.call(t, u)) && !(o && (u == "length" || i && (u == "offset" || u == "parent") || s && (u == "buffer" || u == "byteLength" || u == "byteOffset") || GT(u, l))) && a.push(u);
        return a
    }
    var KT = qT,
        ZT = Object.prototype;

    function XT(t) {
        var e = t && t.constructor,
            r = typeof e == "function" && e.prototype || ZT;
        return t === r
    }
    var JT = XT;

    function eE(t, e) {
        return function(r) {
            return t(e(r))
        }
    }
    var tE = eE,
        rE = tE,
        nE = rE(Object.keys, Object),
        iE = nE,
        sE = JT,
        oE = iE,
        aE = Object.prototype,
        lE = aE.hasOwnProperty;

    function uE(t) {
        if (!sE(t)) return oE(t);
        var e = [];
        for (var r in Object(t)) lE.call(t, r) && r != "constructor" && e.push(r);
        return e
    }
    var cE = uE,
        fE = KT,
        dE = cE,
        hE = c6;

    function pE(t) {
        return hE(t) ? fE(t) : dE(t)
    }
    var mE = pE,
        gE = Ob,
        vE = Gb,
        yE = mE;

    function xE(t) {
        return gE(t, yE, vE)
    }
    var _E = xE,
        D3 = _E,
        wE = 1,
        CE = Object.prototype,
        AE = CE.hasOwnProperty;

    function SE(t, e, r, n, i, s) {
        var o = r & wE,
            a = D3(t),
            l = a.length,
            u = D3(e),
            c = u.length;
        if (l != c && !o) return !1;
        for (var f = l; f--;) {
            var d = a[f];
            if (!(o ? d in e : AE.call(e, d))) return !1
        }
        var h = s.get(t),
            y = s.get(e);
        if (h && y) return h == e && y == t;
        var g = !0;
        s.set(t, e), s.set(e, t);
        for (var w = o; ++f < l;) {
            d = a[f];
            var v = t[d],
                p = e[d];
            if (n) var x = o ? n(p, v, d, e, t, s) : n(v, p, d, t, e, s);
            if (!(x === void 0 ? v === p || i(v, p, r, n, s) : x)) {
                g = !1;
                break
            }
            w || (w = d == "constructor")
        }
        if (g && !w) {
            var _ = t.constructor,
                C = e.constructor;
            _ != C && "constructor" in t && "constructor" in e && !(typeof _ == "function" && _ instanceof _ && typeof C == "function" && C instanceof C) && (g = !1)
        }
        return s.delete(t), s.delete(e), g
    }
    var kE = SE,
        PE = Lo,
        bE = mn,
        TE = PE(bE, "DataView"),
        EE = TE,
        jE = Lo,
        ME = mn,
        RE = jE(ME, "Promise"),
        NE = RE,
        LE = Lo,
        OE = mn,
        zE = LE(OE, "Set"),
        IE = zE,
        DE = Lo,
        FE = mn,
        BE = DE(FE, "WeakMap"),
        $E = BE,
        s1 = EE,
        o1 = Hd,
        a1 = NE,
        l1 = IE,
        u1 = $E,
        Y6 = bl,
        Do = H6,
        F3 = "[object Map]",
        HE = "[object Object]",
        B3 = "[object Promise]",
        $3 = "[object Set]",
        H3 = "[object WeakMap]",
        V3 = "[object DataView]",
        VE = Do(s1),
        UE = Do(o1),
        GE = Do(a1),
        WE = Do(l1),
        QE = Do(u1),
        Vi = Y6;
    (s1 && Vi(new s1(new ArrayBuffer(1))) != V3 || o1 && Vi(new o1) != F3 || a1 && Vi(a1.resolve()) != B3 || l1 && Vi(new l1) != $3 || u1 && Vi(new u1) != H3) && (Vi = function(t) {
        var e = Y6(t),
            r = e == HE ? t.constructor : void 0,
            n = r ? Do(r) : "";
        if (n) switch (n) {
            case VE:
                return V3;
            case UE:
                return F3;
            case GE:
                return B3;
            case WE:
                return $3;
            case QE:
                return H3
        }
        return e
    });
    var YE = Vi,
        wc = DP,
        qE = U6,
        KE = Eb,
        ZE = kE,
        U3 = YE,
        G3 = c2,
        W3 = W6,
        XE = Q6,
        JE = 1,
        Q3 = "[object Arguments]",
        Y3 = "[object Array]",
        h0 = "[object Object]",
        ej = Object.prototype,
        q3 = ej.hasOwnProperty;

    function tj(t, e, r, n, i, s) {
        var o = G3(t),
            a = G3(e),
            l = o ? Y3 : U3(t),
            u = a ? Y3 : U3(e);
        l = l == Q3 ? h0 : l, u = u == Q3 ? h0 : u;
        var c = l == h0,
            f = u == h0,
            d = l == u;
        if (d && W3(t)) {
            if (!W3(e)) return !1;
            o = !0, c = !1
        }
        if (d && !c) return s || (s = new wc), o || XE(t) ? qE(t, e, r, n, i, s) : KE(t, e, l, r, n, i, s);
        if (!(r & JE)) {
            var h = c && q3.call(t, "__wrapped__"),
                y = f && q3.call(e, "__wrapped__");
            if (h || y) {
                var g = h ? t.value() : t,
                    w = y ? e.value() : e;
                return s || (s = new wc), i(g, w, r, n, s)
            }
        }
        return d ? (s || (s = new wc), ZE(t, e, r, n, i, s)) : !1
    }
    var rj = tj,
        nj = rj,
        K3 = Tl;

    function q6(t, e, r, n, i) {
        return t === e ? !0 : t == null || e == null || !K3(t) && !K3(e) ? t !== t && e !== e : nj(t, e, r, n, q6, i)
    }
    var ij = q6,
        sj = ij;

    function oj(t, e) {
        return sj(t, e)
    }
    var aj = oj;
    const lj = xl(aj);
    var tt = function() {
        return tt = Object.assign || function(e) {
            for (var r, n = 1, i = arguments.length; n < i; n++) {
                r = arguments[n];
                for (var s in r) Object.prototype.hasOwnProperty.call(r, s) && (e[s] = r[s])
            }
            return e
        }, tt.apply(this, arguments)
    };

    function uj(t, e) {
        var r = {};
        for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && e.indexOf(n) < 0 && (r[n] = t[n]);
        if (t != null && typeof Object.getOwnPropertySymbols == "function")
            for (var i = 0, n = Object.getOwnPropertySymbols(t); i < n.length; i++) e.indexOf(n[i]) < 0 && Object.prototype.propertyIsEnumerable.call(t, n[i]) && (r[n[i]] = t[n[i]]);
        return r
    }
    var c1 = function(t, e, r, n, i) {
            return (t - e) * (i - n) / (r - e) + n
        },
        K6 = function(t, e) {
            var r = t + e;
            return r > 360 ? r - 360 : r
        },
        Z6 = function() {
            return Math.random() > .5
        },
        X6 = [0, 0, 1],
        Vd = [
            [1, 1, 0],
            [1, 0, 1],
            [0, 1, 1],
            [1, 0, 0],
            [0, 1, 0], X6
        ],
        cj = function(t) {
            return !lj(Vd[t], X6) && Z6()
        },
        Z3 = 200,
        fj = 800,
        dj = .1,
        hj = .25,
        X3 = .5,
        pj = Vd.reduce(function(t, e, r) {
            var n;
            return tt(tt({}, t), (n = {}, n["@keyframes rotation-".concat(r)] = {
                "50%": {
                    transform: "rotate3d(".concat(e.map(function(i) {
                        return i / 2
                    }).join(), ", 180deg)")
                },
                "100%": {
                    transform: "rotate3d(".concat(e.join(), ", 360deg)")
                }
            }, n))
        }, {}),
        mj = function(t, e, r) {
            var n = typeof e == "string" ? e : "".concat(e, "px"),
                i = t.reduce(function(s, o, a) {
                    var l, u = c1(Math.abs(K6(o, 90) - 180), 0, 180, -r / 2, r / 2);
                    return tt(tt({}, s), (l = {}, l["@keyframes x-axis-".concat(a)] = {
                        to: {
                            transform: "translateX(".concat(u, "px)")
                        }
                    }, l))
                }, {});
            return tt({
                "@keyframes y-axis": {
                    to: {
                        transform: "translateY(".concat(n, ")")
                    }
                }
            }, i)
        },
        gj = function(t, e, r, n, i) {
            var s, o = Math.round(Math.random() * (fj - Z3) + Z3),
                a = Math.round(Math.random() * (Vd.length - 1)),
                l = e - Math.round(Math.random() * 1e3),
                u = Math.random() < dj,
                c = cj(a),
                f = u ? na(Math.random() * hj, 2) : 0,
                d = f * -1,
                h = f,
                y = na(Math.abs(c1(Math.abs(K6(t.degree, 90) - 180), 0, 180, -1, 1)), 4),
                g = na(Math.random() * X3, 4),
                w = na(Math.random() * r * (Z6() ? 1 : -1), 4),
                v = X3,
                p = na(Math.max(c1(Math.abs(t.degree - 180), 0, 180, r, -r), 0), 4);
            return s = {}, s["&#confetti-particle-".concat(i)] = {
                animation: "$x-axis-".concat(i, " ").concat(l, "ms forwards cubic-bezier(").concat(f, ", ").concat(d, ", ").concat(h, ", ").concat(y, ")"),
                "& > div": {
                    width: c ? n : Math.round(Math.random() * 4) + n / 2,
                    height: c ? n : Math.round(Math.random() * 2) + n,
                    animation: "$y-axis ".concat(l, "ms forwards cubic-bezier(").concat(g, ", ").concat(w, ", ").concat(v, ", ").concat(p, ")"),
                    "&:after": tt({
                        backgroundColor: t.color,
                        animation: "$rotation-".concat(a, " ").concat(o, "ms infinite linear")
                    }, c ? {
                        borderRadius: "50%"
                    } : {})
                }
            }, s
        },
        vj = function(t) {
            var e = t.particles,
                r = t.duration,
                n = t.height,
                i = t.width,
                s = t.force,
                o = t.particleSize,
                a = e.reduce(function(l, u, c) {
                    return tt(tt({}, l), gj(u, r, s, o, c))
                }, {});
            return KA(tt(tt(tt({}, pj), mj(e.map(function(l) {
                return l.degree
            }), n, i)), {
                container: {
                    width: 0,
                    height: 0,
                    position: "relative"
                },
                screen: {
                    position: "fixed",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    overflow: "hidden",
                    pointerEvents: "none"
                },
                particle: tt(tt({}, a), {
                    "& > div": {
                        position: "absolute",
                        left: 0,
                        top: 0,
                        "&:after": {
                            content: "''",
                            display: "block",
                            width: "100%",
                            height: "100%"
                        }
                    }
                })
            }), {
                name: "confetti-explosion"
            })
        },
        yj = .5,
        xj = 12,
        _j = "120vh",
        wj = 1e3,
        Cj = 100,
        Aj = 2200,
        Sj = ["#FFC700", "#FF0000", "#2E3191", "#41BBC7"],
        kj = function(t, e) {
            var r = 360 / t;
            return hw(t).map(function(n) {
                return {
                    color: e[n % e.length],
                    degree: r * n
                }
            })
        };

    function Pj(t) {
        var e = t.particleCount,
            r = e === void 0 ? Cj : e,
            n = t.duration,
            i = n === void 0 ? Aj : n,
            s = t.colors,
            o = s === void 0 ? Sj : s,
            a = t.particleSize,
            l = a === void 0 ? xj : a,
            u = t.force,
            c = u === void 0 ? yj : u,
            f = t.height,
            d = f === void 0 ? _j : f,
            h = t.width,
            y = h === void 0 ? wj : h,
            g = t.zIndex,
            w = t.onComplete,
            v = uj(t, ["particleCount", "duration", "colors", "particleSize", "force", "height", "width", "zIndex", "onComplete"]),
            p = M.useState(),
            x = p[0],
            _ = p[1],
            C = kj(r, o),
            k = vj({
                particles: C,
                duration: i,
                particleSize: l,
                force: c,
                width: y,
                height: d
            })(),
            S = M.useCallback(function(P) {
                if (P) {
                    var T = P.getBoundingClientRect(),
                        b = T.top,
                        I = T.left;
                    _({
                        top: b,
                        left: I
                    })
                }
            }, []);
        return M.useEffect(function() {
            if (typeof w == "function") {
                var P = setTimeout(w, i);
                return function() {
                    return clearTimeout(P)
                }
            }
        }, [i, w]), m.jsx("div", tt({
            ref: S,
            className: k.container
        }, v, {
            children: x && d5.createPortal(m.jsx("div", tt({
                className: k.screen
            }, g ? {
                style: {
                    zIndex: g
                }
            } : null, {
                children: m.jsx("div", tt({
                    style: {
                        position: "absolute",
                        top: x.top,
                        left: x.left
                    }
                }, {
                    children: C.map(function(P, T) {
                        return m.jsx("div", tt({
                            id: "confetti-particle-".concat(T),
                            className: k.particle
                        }, {
                            children: m.jsx("div", {})
                        }), P.degree)
                    })
                }))
            })), document.body)
        }))
    }

    function bj() {
        const t = M.useRef(null);
        fe.registerPlugin(Z);
        const [e, r] = M.useState(!1);
        return In(() => {
            Z.create({
                trigger: t.current,
                start: "top 65%",
                animation: fe.to(t.current, {
                    onStart: () => {
                        r(!0)
                    }
                })
            })
        }, []), m.jsxs("section", {
            ref: t,
            className: "flex flex-col justify-center items-center gap-5 mt-[66px] -500:mt-[46px] px-3",
            children: [e && m.jsx(Pj, {}), m.jsx("div", {
                className: "-768:max-w-[90px]",
                children: m.jsx("img", {
                    className: "hero-metal-cont h-[100px]",
                    src: Gx,
                    alt: ""
                })
            }), m.jsx("h2", {
                className: "sub-heading text-white font-bold !tracking-tight max-w-[700px] -500:text-[1.3rem] -500:leading-7 leading-[120%] ",
                children: m.jsxs("span", {
                    children: ["Introducing a pioneering ‘Code to Earn’ model that rewards your development efforts with", " ", m.jsx("span", {
                        className: "purple-gradient-text",
                        children: "$MICRO"
                    })]
                })
            }), m.jsxs("a", {
                href: "http://app.microgpt.io",
                target: "_blank",
                rel: "noopener noreferrer",
                className: "btn-arrow flex justify-center gap-2 items-center px-5 w-fit font-bold rounded-lg py-2 bg-white mt-[10px]",
                children: [m.jsx("p", {
                    children: "Discover more"
                }), m.jsx("img", {
                    src: Eo,
                    className: "black-diag-arrow",
                    alt: ""
                })]
            }), m.jsx(jo, {
                className: "mt-[78px] -500:mt-[46px]"
            })]
        })
    }
    const Tj = "data:image/svg+xml,%3csvg%20width='25'%20height='24'%20viewBox='0%200%2025%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M19.5%2012.998H13.5V18.998H11.5V12.998H5.5V10.998H11.5V4.99799H13.5V10.998H19.5V12.998Z'%20fill='white'/%3e%3c/svg%3e",
        Ej = "data:image/svg+xml,%3csvg%20width='258'%20height='21'%20viewBox='0%200%20258%2021'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M247.704%2010.8536C247.899%2010.6583%20247.899%2010.3417%20247.704%2010.1464L244.522%206.96447C244.327%206.7692%20244.01%206.7692%20243.815%206.96447C243.619%207.15973%20243.619%207.47631%20243.815%207.67157L246.643%2010.5L243.815%2013.3284C243.619%2013.5237%20243.619%2013.8403%20243.815%2014.0355C244.01%2014.2308%20244.327%2014.2308%20244.522%2014.0355L247.704%2010.8536ZM10.6498%2011H247.35V10H10.6498V11Z'%20fill='white'/%3e%3c/svg%3e",
        jj = "data:image/svg+xml,%3csvg%20width='29'%20height='19'%20viewBox='0%200%2029%2019'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M21.8536%2010.0865C22.0488%209.8912%2022.0488%209.57462%2021.8536%209.37936L18.6716%206.19738C18.4763%206.00211%2018.1597%206.00211%2017.9645%206.19738C17.7692%206.39264%2017.7692%206.70922%2017.9645%206.90448L20.7929%209.73291L17.9645%2012.5613C17.7692%2012.7566%2017.7692%2013.0732%2017.9645%2013.2684C18.1597%2013.4637%2018.4763%2013.4637%2018.6716%2013.2684L21.8536%2010.0865ZM7.5%2010.2329H21.5V9.23291H7.5V10.2329Z'%20fill='white'/%3e%3c/svg%3e",
        Mj = "data:image/svg+xml,%3csvg%20width='21'%20height='21'%20viewBox='0%200%2021%2021'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_8_681)'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M7.672%2011.834L10.502%2013.769L13.23%2011.887L19.345%2017.92C19.184%2017.972%2019.012%2018%2018.833%2018H2.167C1.947%2018%201.737%2017.957%201.544%2017.88L7.672%2011.834ZM20.5%206.876V16.333C20.5%2016.58%2020.446%2016.814%2020.35%2017.025L14.356%2011.111L20.5%206.876ZM0.500001%206.929L6.542%2011.061L0.606001%2016.919C0.535697%2016.7316%200.499788%2016.5331%200.500001%2016.333V6.929ZM18.833%203C19.753%203%2020.5%203.746%2020.5%204.667V5.253L10.498%2012.148L0.500001%205.31V4.667C0.500001%203.747%201.246%203%202.167%203H18.833Z'%20fill='white'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_8_681'%3e%3crect%20width='20'%20height='20'%20fill='white'%20transform='translate(0.5%200.5)'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e";

    function Rj() {
        const t = [{
            question: "What is MicroGPT",
            answer: `MicroGPT revolutionizes how developers work, offering contextual support at every stage of the software development process. From providing code completions and chat support within IDEs to explaining code and answering documentation queries on GitHub, MicroGPT enhances the entire development workflow. It enables developers to concentrate on adding value, fostering innovation, and experiencing greater job satisfaction.  <br> <br>

      By utilizing MicroGPT, developers can dedicate more time to solving complex problems and collaborating effectively, while reducing the time spent on repetitive and routine tasks. This shift in focus is reflected in the feedback from users; developers utilizing MicroGPT report a satisfaction rate up to 75% higher than those who do not, and they are up to 55% more efficient in coding. This efficiency does not come at the cost of quality, leading to the delivery of superior software at a faster pace.  <br> <br>

      MicroGPT stands out among AI coding assistants by integrating directly with top code editors such as Visual Studio Code, Visual Studio, JetBrains IDEs, and Neovim. It is also uniquely integrated into GitHub, unlike its competitors. With its widespread adoption by millions of individual users and tens of thousands of business clients, MicroGPT has become the most popular AI developer tool globally, offering a significant competitive edge that developers specifically request.
`
        }, {
            question: "What data has MicroGPT been trained on?",
            answer: "MicroGPT is powered by generative AI models developed by MicroGPT, OpenAI, and Microsoft. It has been trained on natural language text and source code from publicly available sources, including code in public repositories on GitHub."
        }, {
            question: "Is MicroGPT free?",
            answer: "Yes there is a freemium tier! But make sure to check out our pricing page to see which tier best suits you!"
        }, {
            question: "What languages, IDEs and platforms does MicroGPT support?",
            answer: `MicroGPT has been trained on a vast array of languages present in public repositories. The efficacy of its suggestions may vary based on the amount and diversity of the training data available for each language. For instance, languages like JavaScript, which are abundantly represented in public repositories, receive superior support from MicroGPT. Conversely, languages with less representation might yield less comprehensive or less accurate suggestions. <br> <br>

      MicroGPT can be utilized as an extension in multiple IDEs, including Visual Studio Code, Visual Studio, Vim, Neovim, the JetBrains IDEs suite, and Azure Data Studio. While code completion features are accessible across these extensions, the chat functionality is currently exclusive to Visual Studio Code, the JetBrains IDEs, and Visual Studio. MicroGPT is also accessible in terminals via the GitHub CLI. For enterprise users, MicroGPT is seamlessly integrated into GitHub.com through the MicroGPT Enterprise plan. GitHub Mobile will include MicroGPT features in all plans.

`
        }, {
            question: "Does MicroGPT ‘copy/paste’?",
            answer: "No, MicroGPT generates suggestions using probabilistic determination."
        }];

        function e(r) {
            const n = r.currentTarget.parentElement.querySelector(".faq-answer"),
                i = document.querySelectorAll(".faq-answer");

            function s(o) {
                fe.to(o, {
                    maxHeight: 0,
                    paddingTop: 0,
                    y: 10,
                    opacity: 0,
                    duration: .4,
                    marginTop: 0,
                    ease: "power2.inOut"
                })
            }
            n.classList.contains("active") ? s(n) : (i.forEach(o => {
                s(o), o.classList.remove("active")
            }), fe.to(n, {
                maxHeight: 700,
                paddingTop: 10,
                y: 0,
                opacity: 1,
                duration: .4,
                marginTop: 10,
                ease: "power2.inOut"
            })), n.classList.toggle("active")
        }
        return m.jsxs("section", {
            id: "faq",
            className: "flex justify-center items-center flex-col gap-8 mt-[40px] px-4",
            children: [m.jsx("h2", {
                className: "sub-heading grey-gradient-text tracking-tighter font-extrabold text-center",
                children: "FAQs"
            }), m.jsxs("div", {
                className: "max-w-[800px] flex flex-col gap-4 -500:gap-[6px]",
                children: [t.map(r => m.jsxs("div", {
                    className: "bg-white bg-opacity-5 border-white border-[1px] border-opacity-10 relative text-white rounded-lg p-4 px-8 -768:px-4",
                    children: [m.jsx("p", {
                        onClick: n => {
                            e(n)
                        },
                        className: "font-bold w-[90%] text-lg -500:text-sm cursor-pointer",
                        children: r.question
                    }), m.jsx("p", {
                        dangerouslySetInnerHTML: {
                            __html: r.answer
                        },
                        className: "faq-answer pt-0 max-h-0 opacity-0 translate-y-[10px] text-base -500:text-sm text-opacity-70 text-white"
                    }), m.jsx("button", {
                        onClick: n => {
                            e(n)
                        },
                        className: "absolute right-3 top-4 cursor-pointer max-w-[20px]",
                        children: m.jsx("img", {
                            src: Tj,
                            alt: "",
                            className: ""
                        })
                    })]
                }, r.question)), m.jsxs("div", {
                    className: "bg-[#DA95F233] bg-opacity-20 w-full rounded-lg flex justify-between items-center text-white p-4 px-5 gap-2 text-lg -500:text-sm -500:px-3 -400:text-xs -400:gap-0",
                    children: [m.jsx("p", {
                        className: "font-bold",
                        children: "For more Questions"
                    }), m.jsx("img", {
                        src: Ej,
                        className: " min-w-[20px] -768:max-w-[150px] flex-1 -500:hidden",
                        alt: ""
                    }), m.jsx("img", {
                        src: jj,
                        className: "hidden -500:flex  justify-center items-center min-w-[30px] -400:min-w-[20px] ",
                        alt: ""
                    }), m.jsxs("div", {
                        className: "flex justify-center items-center gap-2 flex-wrap -500:justify-end",
                        children: [m.jsx("img", {
                            src: Mj,
                            alt: ""
                        }), m.jsx("p", {
                            className: "",
                            children: "contact@microGPT.io"
                        })]
                    })]
                })]
            })]
        })
    }
    const Nj = "data:image/svg+xml,%3csvg%20width='32'%20height='33'%20viewBox='0%200%2032%2033'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M16.0017%2012.7204C14.9408%2012.7204%2013.9234%2013.1418%2013.1732%2013.892C12.4231%2014.6421%2012.0017%2015.6596%2012.0017%2016.7204C12.0017%2017.7813%2012.4231%2018.7987%2013.1732%2019.5488C13.9234%2020.299%2014.9408%2020.7204%2016.0017%2020.7204C17.0625%2020.7204%2018.0799%2020.299%2018.8301%2019.5488C19.5802%2018.7987%2020.0017%2017.7813%2020.0017%2016.7204C20.0017%2015.6596%2019.5802%2014.6421%2018.8301%2013.892C18.0799%2013.1418%2017.0625%2012.7204%2016.0017%2012.7204ZM16.0017%2010.0538C17.7698%2010.0538%2019.4655%2010.7561%2020.7157%2012.0064C21.9659%2013.2566%2022.6683%2014.9523%2022.6683%2016.7204C22.6683%2018.4885%2021.9659%2020.1842%2020.7157%2021.4345C19.4655%2022.6847%2017.7698%2023.3871%2016.0017%2023.3871C14.2335%2023.3871%2012.5379%2022.6847%2011.2876%2021.4345C10.0374%2020.1842%209.33499%2018.4885%209.33499%2016.7204C9.33499%2014.9523%2010.0374%2013.2566%2011.2876%2012.0064C12.5379%2010.7561%2014.2335%2010.0538%2016.0017%2010.0538ZM24.6683%209.72042C24.6683%2010.1624%2024.4927%2010.5864%2024.1802%2010.8989C23.8676%2011.2115%2023.4437%2011.3871%2023.0017%2011.3871C22.5596%2011.3871%2022.1357%2011.2115%2021.8231%2010.8989C21.5106%2010.5864%2021.335%2010.1624%2021.335%209.72042C21.335%209.27839%2021.5106%208.85447%2021.8231%208.54191C22.1357%208.22935%2022.5596%208.05375%2023.0017%208.05375C23.4437%208.05375%2023.8676%208.22935%2024.1802%208.54191C24.4927%208.85447%2024.6683%209.27839%2024.6683%209.72042ZM16.0017%206.05375C12.703%206.05375%2012.1643%206.06308%2010.6297%206.13108C9.58433%206.18042%208.88299%206.32042%208.23233%206.57375C7.6881%206.77425%207.19595%207.0946%206.79233%207.51108C6.37536%207.91458%206.05454%208.40674%205.85366%208.95108C5.60033%209.60442%205.46033%2010.3044%205.41233%2011.3484C5.34299%2012.8204%205.33366%2013.3351%205.33366%2016.7204C5.33366%2020.0204%205.34299%2020.5577%205.41099%2022.0924C5.46033%2023.1364%205.60033%2023.8391%205.85233%2024.4884C6.07899%2025.0684%206.34566%2025.4858%206.78833%2025.9284C7.23766%2026.3764%207.65499%2026.6444%208.22833%2026.8657C8.88699%2027.1204%209.58833%2027.2617%2010.6283%2027.3097C12.1003%2027.3791%2012.615%2027.3871%2016.0003%2027.3871C19.3003%2027.3871%2019.8377%2027.3778%2021.3723%2027.3097C22.415%2027.2604%2023.1163%2027.1204%2023.7683%2026.8684C24.3125%2026.6679%2024.8047%2026.3476%2025.2083%2025.9311C25.6577%2025.4831%2025.9257%2025.0657%2026.147%2024.4911C26.4003%2023.8351%2026.5417%2023.1338%2026.5897%2022.0911C26.659%2020.6204%2026.667%2020.1044%2026.667%2016.7204C26.667%2013.4218%2026.6577%2012.8831%2026.5897%2011.3484C26.5403%2010.3058%2026.399%209.60175%2026.147%208.95108C25.9465%208.40686%2025.6261%207.91471%2025.2097%207.51108C24.8062%207.09412%2024.314%206.7733%2023.7697%206.57242C23.1163%206.31908%2022.415%206.17909%2021.3723%206.13108C19.9017%206.06175%2019.387%206.05375%2016.0003%206.05375M16.0003%203.38708C19.623%203.38708%2020.075%203.40042%2021.4977%203.46708C22.9163%203.53375%2023.8843%203.75642%2024.7337%204.08709C25.6137%204.42575%2026.355%204.88442%2027.0963%205.62442C27.7746%206.29073%2028.2992%207.09705%2028.6337%207.98708C28.963%208.83642%2029.187%209.80442%2029.2537%2011.2244C29.3163%2012.6458%2029.3337%2013.0978%2029.3337%2016.7204C29.3337%2020.3431%2029.3203%2020.7951%2029.2537%2022.2164C29.187%2023.6378%2028.963%2024.6031%2028.6337%2025.4537C28.2992%2026.3438%2027.7746%2027.1501%2027.0963%2027.8164C26.43%2028.4947%2025.6237%2029.0193%2024.7337%2029.3538C23.8843%2029.6831%2022.9163%2029.9071%2021.4977%2029.9738C20.075%2030.0364%2019.623%2030.0537%2016.0003%2030.0537C12.3777%2030.0537%2011.9257%2030.0404%2010.503%2029.9738C9.08432%2029.9071%208.11766%2029.6831%207.26699%2029.3538C6.37695%2029.0193%205.57064%2028.4947%204.90433%2027.8164C4.22607%2027.1501%203.70141%2026.3438%203.36699%2025.4537C3.03633%2024.6044%202.81366%2023.6364%202.74699%2022.2164C2.68299%2020.7951%202.66699%2020.3431%202.66699%2016.7204C2.66699%2013.0978%202.68033%2012.6458%202.74699%2011.2244C2.81366%209.80308%203.03633%208.83775%203.36699%207.98708C3.70141%207.09705%204.22607%206.29073%204.90433%205.62442C5.57064%204.94616%206.37695%204.42151%207.26699%204.08709C8.11632%203.75642%209.08299%203.53375%2010.503%203.46708C11.927%203.40442%2012.379%203.38708%2016.0017%203.38708'%20fill='white'/%3e%3c/svg%3e",
        Lj = "data:image/svg+xml,%3csvg%20width='32'%20height='33'%20viewBox='0%200%2032%2033'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M22.1335%208.48046C21.2223%207.43983%2020.7201%206.10366%2020.7202%204.72046H16.6002V21.2538C16.5691%2022.1487%2016.1916%2022.9966%2015.5473%2023.6185C14.903%2024.2404%2014.0423%2024.5877%2013.1469%2024.5871C11.2535%2024.5871%209.68021%2023.0405%209.68021%2021.1205C9.68021%2018.8271%2011.8935%2017.1071%2014.1735%2017.8138V13.6005C9.57354%2012.9871%205.54688%2016.5605%205.54688%2021.1205C5.54688%2025.5605%209.22688%2028.7205%2013.1335%2028.7205C17.3202%2028.7205%2020.7202%2025.3205%2020.7202%2021.1205V12.7338C22.3909%2013.9336%2024.3967%2014.5773%2026.4535%2014.5738V10.4538C26.4535%2010.4538%2023.9469%2010.5738%2022.1335%208.48046Z'%20fill='white'/%3e%3c/svg%3e",
        Oj = "data:image/svg+xml,%3csvg%20width='32'%20height='33'%20viewBox='0%200%2032%2033'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_672_1825)'%3e%3cpath%20d='M10.666%208.72046C12.7877%208.72046%2014.8226%209.56331%2016.3229%2011.0636C17.8232%2012.5639%2018.666%2014.5987%2018.666%2016.7205C18.666%2018.8422%2017.8232%2020.877%2016.3229%2022.3773C14.8226%2023.8776%2012.7877%2024.7205%2010.666%2024.7205C8.54428%2024.7205%206.50945%2023.8776%205.00916%2022.3773C3.50887%2020.877%202.66602%2018.8422%202.66602%2016.7205C2.66602%2014.5987%203.50887%2012.5639%205.00916%2011.0636C6.50945%209.56331%208.54428%208.72046%2010.666%208.72046ZM22.666%2010.0538C24.666%2010.0538%2025.9993%2013.0391%2025.9993%2016.7205C25.9993%2020.4018%2024.666%2023.3871%2022.666%2023.3871C20.666%2023.3871%2019.3327%2020.4018%2019.3327%2016.7205C19.3327%2013.0391%2020.666%2010.0538%2022.666%2010.0538ZM27.9993%2010.7205C28.506%2010.7205%2028.9487%2011.8231%2029.1727%2013.7151L29.2353%2014.3058L29.2607%2014.6191L29.3007%2015.2778L29.314%2015.6231L29.33%2016.3445L29.3327%2016.7205L29.33%2017.0965L29.314%2017.8178L29.3007%2018.1645L29.2607%2018.8218L29.234%2019.1351L29.174%2019.7258C28.9487%2021.6191%2028.5073%2022.7205%2027.9993%2022.7205C27.4927%2022.7205%2027.05%2021.6178%2026.826%2019.7258L26.7633%2019.1351L26.738%2018.8218L26.698%2018.1631L26.6847%2017.8178L26.6687%2017.0965V16.3445L26.6847%2015.6231L26.698%2015.2765L26.738%2014.6191L26.7647%2014.3058L26.8247%2013.7151C27.05%2011.8218%2027.4913%2010.7205%2027.9993%2010.7205Z'%20fill='white'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_672_1825'%3e%3crect%20width='32'%20height='32'%20fill='white'%20transform='translate(0%200.720459)'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",
        zj = "data:image/svg+xml,%3csvg%20width='32'%20height='33'%20viewBox='0%200%2032%2033'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M16.3247%206.05383C17.0367%206.05783%2018.818%206.07517%2020.7113%206.15117L21.3834%206.1805C23.2887%206.26983%2025.1927%206.4245%2026.138%206.68717C27.398%207.04183%2028.3874%208.07383%2028.722%209.38317C29.2554%2011.4632%2029.322%2015.5192%2029.33%2016.5018L29.3314%2016.7045V16.9365C29.322%2017.9192%2029.2554%2021.9765%2028.722%2024.0552C28.3834%2025.3685%2027.3927%2026.4018%2026.138%2026.7512C25.1927%2027.0138%2023.2887%2027.1685%2021.3834%2027.2578L20.7113%2027.2885C18.818%2027.3632%2017.0367%2027.3818%2016.3247%2027.3845L16.0113%2027.3858H15.6713C14.1647%2027.3765%207.86335%2027.3085%205.85802%2026.7512C4.59935%2026.3965%203.60868%2025.3645%203.27402%2024.0552C2.74068%2021.9752%202.67402%2017.9192%202.66602%2016.9365V16.5018C2.67402%2015.5192%202.74068%2011.4618%203.27402%209.38317C3.61268%208.06983%204.60335%207.0365%205.85935%206.6885C7.86335%206.12983%2014.166%206.06183%2015.6727%206.05383H16.3247ZM13.3313%2012.0538V21.3872L21.3313%2016.7205L13.3313%2012.0538Z'%20fill='white'/%3e%3c/svg%3e",
        Ij = "data:image/svg+xml,%3csvg%20width='32'%20height='33'%20viewBox='0%200%2032%2033'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M9.25326%207.38712C9.2529%208.09436%208.97161%208.7725%208.47126%209.27234C7.97092%209.77219%207.2925%2010.0528%206.58526%2010.0525C5.87801%2010.0521%205.19987%209.77081%204.70003%209.27046C4.20018%208.77011%203.91957%208.09169%203.91992%207.38445C3.92028%206.67721%204.20157%205.99907%204.70191%205.49922C5.20226%204.99938%205.88068%204.71876%206.58792%204.71912C7.29517%204.71947%207.9733%205.00076%208.47315%205.50111C8.973%206.00145%209.25361%206.67987%209.25326%207.38712ZM9.33326%2012.0271H3.99992V28.7204H9.33326V12.0271ZM17.7599%2012.0271H12.4533V28.7204H17.7066V19.9605C17.7066%2015.0805%2024.0666%2014.6271%2024.0666%2019.9605V28.7204H29.3333V18.1471C29.3333%209.92045%2019.9199%2010.2271%2017.7066%2014.2671L17.7599%2012.0271Z'%20fill='white'/%3e%3c/svg%3e";

    function J6() {
        const t = [{
                name: "Home",
                link: "/"
            }, {
                name: "Innovators",
                link: "/innovators"
            }, {
                name: "FAQ",
                link: "/#faq"
            }],
            e = [{
                name: "Whitepaper",
                link: "https://microgpt.gitbook.io/microgpt"
            }, {
                name: "Pitchdeck",
                link: "/MicroGPT-Deck.pdf"
            }, {
                name: "Impression",
                link: "/microgpt-impression.pdf"
            }],
            r = [{
                name: "Disclaimer",
                link: "#"
            }, {
                name: "Privacy Policy",
                link: "#"
            }, {
                name: "Terms of Service",
                link: "#"
            }],
            n = [{
                icon: Ij,
                link: "https://www.linkedin.com/company/microgpt"
            }, {
                icon: R8,
                link: "http://twitter.com/Micro_GPT"
            }, {
                icon: Nj,
                link: "https://www.instagram.com/microgpt/"
            }, {
                icon: N8,
                link: "https://t.me/micro_gpt"
            }, {
                icon: Lj,
                link: "https://www.tiktok.com/@micro_gpt"
            }, {
                icon: Oj,
                link: "https://microgpt.medium.com/"
            }, {
                icon: zj,
                link: "https://www.youtube.com/@MicroGPTAI"
            }];

        function i(o) {
            const a = o.currentTarget.textContent.toLowerCase(),
                l = document.getElementById("hero");
            a === "home" && l.scrollIntoView({
                behavior: "smooth",
                block: "end"
            })
        }

        function s() {
            document.getElementById("hero").scrollIntoView({
                behavior: "smooth",
                block: "end"
            })
        }
        return m.jsxs("footer", {
            className: "py-24 px-20 -950:py-16 -950:px-12 -500:px-6",
            children: [m.jsxs("div", {
                className: "flex justify-between items-start w-full -950:flex-col gap-3 -950:gap-[100px] -950:items-start",
                children: [m.jsxs("div", {
                    className: "flex flex-col gap-[12px] max-w-[300px] items-start",
                    children: [m.jsx(ps, {
                        to: "/",
                        onClick: s,
                        children: m.jsx("img", {
                            src: h5,
                            className: "max-w-[200px] h-[47px]",
                            alt: ""
                        })
                    }), m.jsx("a", {
                        href: "https://www.assuredefi.com/projects/microgpt/",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: "uppercase purple-gradient-text font-[700]",
                        children: "Audited by AssureDefi"
                    }), m.jsx("p", {
                        className: "text-white text-opacity-50",
                        children: "Enhance your coding experience while earning rewards."
                    }), m.jsxs("div", {
                        className: "flex justify-center items-center text-white gap-12 mt-[12px] font-bold",
                        children: [m.jsx("a", {
                            className: "hover:text-opacity-50 text-white duration-300",
                            href: "https://t.me/micro_gpt",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            children: "Join Community"
                        }), m.jsx("a", {
                            className: "hover:text-opacity-50 text-white duration-300",
                            href: "https://marketplace.visualstudio.com/items?itemName=MicroGPT.MicroGPT",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            children: "Download"
                        })]
                    })]
                }), m.jsxs("div", {
                    className: "flex justify-between items-start gap-[150px] -768:gap-[60px] flex-wrap w-[55%] -950:w-[75%] -768:w-full -950:justify-start text-white font-bold",
                    children: [m.jsxs("div", {
                        children: [m.jsx("p", {
                            className: "text-white text-opacity-50 mb-3",
                            children: "Platform"
                        }), m.jsx("ul", {
                            className: "flex flex-col gap-3",
                            children: t.map(o => o.name !== "FAQ" ? m.jsx(ps, {
                                onClick: a => i(a),
                                className: "hover:text-opacity-50 text-white duration-300",
                                to: o.link,
                                children: o.name
                            }, `${o.name} footerlocker`) : m.jsx(T8, {
                                smooth: !0,
                                to: o.link,
                                className: "hover:text-opacity-50 text-white duration-300",
                                children: o.name
                            }, `${o.name} footerlocker`))
                        })]
                    }), m.jsxs("div", {
                        children: [m.jsx("p", {
                            className: "text-white text-opacity-50 mb-3",
                            children: "External Links"
                        }), m.jsx("ul", {
                            className: "flex flex-col gap-3",
                            children: e.map(o => m.jsxs("a", {
                                href: o.link,
                                target: "_blank",
                                rel: "noopener noreferrer",
                                children: [" ", m.jsx("li", {
                                    className: "hover:text-opacity-50 text-white duration-300",
                                    children: o.name
                                })]
                            }, `${o.name} footeresquer`))
                        })]
                    }), m.jsxs("div", {
                        children: [m.jsx("p", {
                            className: "text-white text-opacity-50 mb-3",
                            children: "Legal Links"
                        }), m.jsx("ul", {
                            className: "flex flex-col gap-3",
                            children: r.map(o => m.jsxs("a", {
                                href: o.link,
                                target: "_blank",
                                rel: "noopener noreferrer",
                                children: [" ", m.jsx("li", {
                                    className: "hover:text-opacity-50 text-white duration-300",
                                    children: o.name
                                })]
                            }, `${o.name} footeresquer`))
                        })]
                    })]
                })]
            }), m.jsxs("div", {
                className: "flex justify-between items-center  mt-[100px] -768:mt-[60px] -768:flex-col -768:items-start -768:w-full flex-wrap gap-[24px]",
                children: [m.jsxs("p", {
                    className: "text-[#FFFFFF80] max-w-[415px] -768:order-1 pr-2",
                    children: ["Address: ", m.jsx("br", {}), "Trust Company Complex, Ajeltake Road, Ajeltake Island, Majuro, Republic of the Marshall Islands MH 96960"]
                }), m.jsx("div", {
                    className: "flex text-white gap-2 -768:w-[100%] -768:order-2 flex-wrap",
                    children: n.map(o => m.jsx("a", {
                        href: o.link,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: "flex justify-center items-center rounded-[50%] text-sm border-white border-opacity-10 border-[1px] h-[74px] w-[74px]  hover:bg-opacity-10 bg-white bg-opacity-0 cursor-pointer duration-300 ease-in-out -500:flex-1 -768:h-[50px] -768:min-w-[50px] -768:max-w-[50px] -768:rounded-[50px]",
                        children: m.jsx("img", {
                            className: "w-[32px] -768:min-w-[24px] -768:h-[24px]",
                            src: o.icon,
                            alt: ""
                        })
                    }, `${o.link} footer`))
                })]
            }), m.jsxs("div", {
                className: "flex justify-center items-center mt-[70px] -768:mt-[40px] gap-[24px] -768:flex-col -768:items-start -768:gap-[16px]",
                children: [m.jsx("div", {
                    className: "bg-white bg-opacity-50 flex-1 h-[1px] -768:flex-none w-full -768:hidden"
                }), m.jsx("p", {
                    className: "text-white text-opacity-50",
                    children: "© Copyright 2024. All rights reserved"
                }), m.jsx("div", {
                    className: "bg-white bg-opacity-50 flex-1 h-[1px] -768:flex-none w-full"
                })]
            })]
        })
    }
    const Dj = "/assets/autobot-metal-1-CBMOjKga.png",
        Fj = "/assets/autobot-metal-2-BBVtMbWX.png",
        Bj = "/assets/autobot-metal-mobile-RPA0YJs3.png";

    function $j() {
        return m.jsxs("section", {
            className: "bg-[#A553D7] bg-opacity-[0.07] flex flex-col justify-center items-center gap-4 py-20 -500:py-28 sectionGap relative overflow-hidden",
            children: [m.jsxs("h2", {
                className: "text-white sub-heading font-bold max-w-[700px] -768:max-w-[600px] w-[90%] leading-[115%] relative z-[2]",
                children: ["Calling all", " ", m.jsx("span", {
                    className: "text-[#414141] line-through",
                    children: "autobots"
                }), " ", "developers! ", m.jsx("span", {
                    className: "purple-gradient-text",
                    children: "microGPT"
                }), " to your rescue"]
            }), m.jsx("p", {
                className: "text-[#FFFFFF80] relative z-[2] tracking-[10px] text-center -500:text-xs w-[90%] mt-[10px]",
                children: "TO ELEVATE YOUR CODING EXPERIENCE"
            }), m.jsxs("a", {
                href: "https://marketplace.visualstudio.com/items?itemName=MicroGPT.MicroGPT",
                target: "_blank",
                rel: "noopener noreferrer",
                className: "text-white btn-arrow flex gap-2 items-center justify-center border-[1px] border-white border-opacity-80 font-bold rounded-2xl px-10 py-4 -500:text-sm -500:mt-[30px] autobot-btn mt-4 relative z-[2] -500:p-[0.625rem] -500:w-[147px] -500:rounded-xl -500:px-4",
                children: [m.jsx("p", {
                    children: " Get Started"
                }), m.jsx("img", {
                    src: Eo,
                    alt: ""
                })]
            }), m.jsx("div", {
                className: "autobot-line absolute top-0 left-[50%] translate-x-[-50%] h-[2px] w-[50%]"
            }), m.jsx("img", {
                src: Dj,
                alt: "",
                className: "absolute left-0 top-[10%] max-w-[260px] -1100:max-w-[240px] -768:max-w-[200px] z-[1] -500:hidden hero-metal-cont"
            }), m.jsx("img", {
                src: Fj,
                alt: "",
                className: "absolute right-0 bottom-0 max-w-[500px] -1100:max-w-[240px] -768:max-w-[200px] z-[1] -500:hidden hero-metal-cont"
            }), m.jsx("img", {
                src: Bj,
                alt: "",
                className: "absolute right-0 bottom-0 hidden -500:block hero-metal-cont"
            })]
        })
    }
    const Hj = "data:image/svg+xml,%3csvg%20width='457'%20height='108'%20viewBox='0%200%20457%20108'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M454.648%204.94602C433.619%202.69401%20413.712%200.663809%20392.302%202.07532C333.254%205.96829%20279.015%2023.8156%20223.442%2044.3573C170.296%2064.0016%20118.643%2085.3036%2063.3969%2097.587C41.5498%20102.444%2021.7671%20103.676%207.10461e-05%20105.664'%20stroke='%23AAAAAA'%20stroke-width='3'%20stroke-linecap='round'%20stroke-dasharray='6%206'/%3e%3c/svg%3e",
        Vj = "data:image/svg+xml,%3csvg%20width='457'%20height='108'%20viewBox='0%200%20457%20108'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M2.35156%204.94602C23.3806%202.69401%2043.2882%200.663809%2064.6979%202.07532C123.746%205.96829%20177.985%2023.8156%20233.558%2044.3573C286.704%2064.0016%20338.357%2085.3036%20393.603%2097.587C415.45%20102.444%20435.233%20103.676%20457%20105.664'%20stroke='%23AAAAAA'%20stroke-width='3'%20stroke-linecap='round'%20stroke-dasharray='6%206'/%3e%3c/svg%3e",
        Uj = "/assets/platform-logo-CZ8SN7bP.svg",
        Gj = "data:image/svg+xml,%3csvg%20width='53'%20height='52'%20viewBox='0%200%2053%2052'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M17.9289%2024.4243C17.7282%2024.1679%2017.4356%2023.9997%2017.113%2023.9554C16.7905%2023.911%2016.4633%2023.994%2016.2009%2024.1867C16.0497%2024.3163%2015.9201%2024.4675%2015.8337%2024.6403L5.24968%2045.8299C4.92568%2046.4563%205.18488%2047.2123%205.81128%2047.5363C5.98408%2047.6659%206.20008%2047.6659%206.39448%2047.6659H21.1257C21.6009%2047.6659%2022.0545%2047.4067%2022.2705%2046.9747C25.4457%2040.3867%2023.4801%2030.3859%2017.9289%2024.4243ZM25.7049%205.1355C23.0706%209.20325%2021.5348%2013.8839%2021.2471%2018.7216C20.9594%2023.5593%2021.9297%2028.389%2024.0633%2032.7403L31.1697%2046.9747C31.4073%2047.4067%2031.8393%2047.6659%2032.3145%2047.6659H47.0457C47.3837%2047.6659%2047.7078%2047.5316%2047.9468%2047.2926C48.1858%2047.0536%2048.3201%2046.7295%2048.3201%2046.3915C48.3201%2046.1971%2048.3201%2046.0027%2048.1905%2045.8299C48.1905%2045.8299%2028.3617%206.1291%2027.8001%205.1355C27.7379%204.99405%2027.6472%204.86694%2027.5337%204.76213C27.4201%204.65732%2027.2862%204.57706%2027.1402%204.52638C26.9943%204.47569%2026.8394%204.45567%2026.6853%204.46757C26.5313%204.47946%2026.3813%204.52301%2026.2449%204.5955C26.0073%204.7035%2025.8129%204.8979%2025.7049%205.1355Z'%20fill='white'/%3e%3c/svg%3e",
        Wj = "data:image/svg+xml,%3csvg%20width='93'%20height='94'%20viewBox='0%200%2093%2094'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_8_727)'%3e%3cpath%20d='M29.0312%2034.5974H26.324V38.2108H29.0351C30.4789%2038.2108%2031.2047%2037.4889%2031.2047%2036.4022C31.2008%2035.1388%2030.2984%2034.5974%2029.0312%2034.5974ZM16.7432%2035.6802C16.7432%2034.7778%2016.0213%2034.4169%2014.9346%2034.4169H12.2274V37.1279H14.758C16.0213%2036.9474%2016.7432%2036.5865%2016.7432%2035.6802ZM40.5973%2040.0194H43.8498L42.2255%2035.8607L40.5973%2040.0194ZM15.2994%2040.0194H12.0469V42.7305H15.2994C16.5628%2042.7305%2017.2885%2042.189%2017.2885%2041.2866C17.2885%2040.3842%2016.5628%2040.0194%2015.2994%2040.0194ZM0.119873%200.98584V93.1458H92.2799V0.98584H0.119873ZM32.468%2012.5519H45.6584V16.1654H41.1426V27.551H36.9839V16.1654H32.468V12.5519ZM31.5618%2012.5519V15.9849H23.613V18.335H30.8399V21.5874H23.613V23.9375H31.7461V27.551H19.6348L19.4543%2012.5519H31.5618ZM21.4434%2041.8242C21.4434%2044.3548%2019.2738%2045.9791%2015.8408%2045.9791H8.07251V30.9839H15.8408C17.6495%2030.9839%2019.0933%2031.5254%2019.9957%2032.2473C20.541%2032.7887%2020.902%2033.695%2020.902%2034.7778C20.902%2036.5865%2019.9996%2037.4889%2018.5519%2038.2108C20.3605%2038.7522%2021.4434%2039.839%2021.4434%2041.8242ZM10.4188%2022.6703C11.1407%2023.5727%2011.8626%2024.1142%2012.7688%2024.1142C13.8517%2024.1142%2014.3944%2023.391%2014.397%2021.9446V12.3714H18.5519V21.9484C18.5519%2023.757%2018.0104%2025.2009%2017.108%2026.1033C16.2056%2027.0057%2014.758%2027.551%2012.9493%2027.551C10.2383%2027.7314%208.79443%2026.6447%207.71155%2025.2009L10.4188%2022.6703ZM42.5864%2081.5798H8.07251V75.7967H42.5864V81.5798ZM46.0194%2046.1634L44.9365%2043.4524H39.1535L38.0706%2046.1634H33.7314L33.8082%2045.983H31.2008L28.1288%2041.4671H26.324V45.983H22.1653V30.9839H29.2117C31.5618%2030.9839%2033.0056%2031.5254%2034.0924%2032.6121C34.9948%2033.5145%2035.3557%2034.6012%2035.3557%2036.045C35.3557%2038.3951%2034.0924%2039.839%2032.2837%2040.7452L34.6069%2044.1167L40.2325%2030.9878H44.2069L50.5314%2046.1673L46.0194%2046.1634ZM55.2354%2045.983H51.0805V30.9839H55.2354V45.983ZM70.4149%2045.983H66.8015L60.477%2037.8498V46.1634H56.3221V30.9839H60.116L66.26%2038.9366V30.9839H70.4149V45.983ZM77.8223%2046.1634C76.5505%2046.2594%2075.2724%2046.101%2074.0626%2045.6975C72.8527%2045.294%2071.7354%2044.6535%2070.7759%2043.8134L73.126%2041.1023C74.5698%2042.3657%2076.198%2042.911%2078.0066%2042.911C79.0895%2042.911%2079.8152%2042.55%2079.8152%2041.8281C79.8152%2041.1062%2079.2738%2040.9257%2077.2847%2040.3842C74.0322%2039.6623%2071.6821%2038.7561%2071.6821%2035.6841C71.6821%2032.973%2073.8517%2030.8034%2077.4652%2030.8034C79.9957%2030.8034%2081.981%2031.5254%2083.6092%2032.7926L81.4396%2035.6841C79.9919%2034.7778%2078.548%2034.2364%2077.2808%2034.2364C76.198%2034.2364%2075.837%2034.5974%2075.837%2035.1388C75.837%2035.8607%2076.3784%2036.0412%2078.3676%2036.5826C81.8005%2037.3046%2083.9701%2038.3913%2083.9701%2041.2828C83.9663%2044.3548%2081.62%2046.1634%2077.8223%2046.1634Z'%20fill='white'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_8_727'%3e%3crect%20width='92.16'%20height='92.16'%20fill='white'%20transform='translate(0.119873%200.98584)'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",
        Qj = "data:image/svg+xml,%3csvg%20width='93'%20height='94'%20viewBox='0%200%2093%2094'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_8_691)'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M8.85718%2020.7797L28.4607%200.98584V93.0177L8.85718%2073.454V20.7797Z'%20fill='white'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M84.6058%2020.9564L64.7584%200.98584L65.1605%2093.0177L84.7408%2073.4517L84.6058%2020.9564Z'%20fill='white'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M28.4583%201.11133L79.4291%2078.8842L65.1653%2093.1456L14.1683%2015.5453L28.4583%201.11133Z'%20fill='white'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M28.4614%2036.9931L28.4326%2040.0488L12.7776%2016.8792L14.2277%2015.396L28.4614%2036.9931Z'%20fill='white'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_8_691'%3e%3crect%20width='92.16'%20height='92.16'%20fill='white'%20transform='translate(0.719849%200.98584)'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",
        Yj = "data:image/svg+xml,%3csvg%20width='53'%20height='52'%20viewBox='0%200%2053%2052'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M13.9582%2032.3245C13.9582%2034.8934%2011.8594%2036.9921%209.29057%2036.9921C6.72171%2036.9921%204.62299%2034.8934%204.62299%2032.3245C4.62299%2029.7556%206.72171%2027.6569%209.29057%2027.6569H13.9582V32.3245ZM16.3108%2032.3245C16.3108%2029.7556%2018.4095%2027.6569%2020.9784%2027.6569C23.5472%2027.6569%2025.646%2029.7556%2025.646%2032.3245V44.0123C25.646%2046.5812%2023.5472%2048.6799%2020.9784%2048.6799C18.4095%2048.6799%2016.3108%2046.5812%2016.3108%2044.0123V32.3245ZM20.9784%2013.5808C18.4095%2013.5808%2016.3108%2011.482%2016.3108%208.91319C16.3108%206.34433%2018.4095%204.24561%2020.9784%204.24561C23.5472%204.24561%2025.646%206.34433%2025.646%208.91319V13.5808H20.9784ZM20.9784%2015.9334C23.5472%2015.9334%2025.646%2018.0321%2025.646%2020.601C25.646%2023.1699%2023.5472%2025.2686%2020.9784%2025.2686H9.29057C6.72171%2025.2686%204.62299%2023.1699%204.62299%2020.601C4.62299%2018.0321%206.72171%2015.9334%209.29057%2015.9334H20.9784ZM39.7221%2020.601C39.7221%2018.0321%2041.8208%2015.9334%2044.3897%2015.9334C46.9585%2015.9334%2049.0573%2018.0321%2049.0573%2020.601C49.0573%2023.1699%2046.9585%2025.2686%2044.3897%2025.2686H39.7221V20.601ZM37.3695%2020.601C37.3695%2023.1699%2035.2707%2025.2686%2032.7019%2025.2686C30.133%2025.2686%2028.0343%2023.1699%2028.0343%2020.601V8.91319C28.0343%206.34433%2030.133%204.24561%2032.7019%204.24561C35.2707%204.24561%2037.3695%206.34433%2037.3695%208.91319V20.601ZM32.7019%2039.3447C35.2707%2039.3447%2037.3695%2041.4435%2037.3695%2044.0123C37.3695%2046.5812%2035.2707%2048.6799%2032.7019%2048.6799C30.133%2048.6799%2028.0343%2046.5812%2028.0343%2044.0123V39.3447H32.7019ZM32.7019%2036.9921C30.133%2036.9921%2028.0343%2034.8934%2028.0343%2032.3245C28.0343%2029.7556%2030.133%2027.6569%2032.7019%2027.6569H44.3897C46.9585%2027.6569%2049.0573%2029.7556%2049.0573%2032.3245C49.0573%2034.8934%2046.9585%2036.9921%2044.3897%2036.9921H32.7019Z'%20fill='white'/%3e%3c/svg%3e",
        qj = "data:image/svg+xml,%3csvg%20width='102'%20height='102'%20viewBox='0%200%20102%20102'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_8_725)'%3e%3cpath%20d='M74.6487%200.930656C73.0471%200.908514%2071.4973%201.49722%2070.3143%202.57706H70.3101L70.1001%202.76606L36.6177%2039.7933L17.0751%2023.7661L15.3657%2022.2961C14.7761%2021.806%2014.0636%2021.4866%2013.3055%2021.3726C12.5474%2021.2586%2011.7725%2021.3543%2011.0649%2021.6493L11.0145%2021.6703L3.38307%2024.8203L3.05967%2024.9715L2.86227%2025.0891L2.70267%2025.1815L2.50107%2025.3243L2.37507%2025.4251L2.19027%2025.5763L2.03907%2025.7149L1.90467%2025.8619L1.76607%2026.0215L1.61907%2026.2063L1.51827%2026.3491L1.38387%2026.5591L1.29987%2026.7061L1.19907%2026.9161L1.11507%2027.1051L1.04787%2027.2899L0.980674%2027.4873L0.917674%2027.7183L0.875674%2027.8863L0.842074%2028.1131L0.816874%2028.3231L0.800074%2028.6717V73.4689C0.804959%2074.2935%201.0525%2075.0985%201.51184%2075.7834C1.97117%2076.4683%202.62197%2077.0028%203.38307%2077.3203L11.0145%2080.5291C11.7319%2080.8276%2012.518%2080.9213%2013.2854%2080.7997C14.0529%2080.6781%2014.7715%2080.3459%2015.3615%2079.8403L17.0751%2078.3703L36.6177%2062.3473L70.1043%2099.3703L70.4067%2099.6433L70.6461%2099.8533L70.8897%20100.03L71.1543%20100.214L71.4273%20100.374L71.7003%20100.525L71.9859%20100.655L72.2799%20100.781L72.5865%20100.886L72.8637%20100.97L73.1997%20101.054L73.4853%20101.113L73.8003%20101.155L74.1153%20101.189L74.4219%20101.201H74.7453L75.0729%20101.18L75.3543%20101.151L75.7197%20101.088L75.9717%20101.038L76.3077%20100.945L76.5933%20100.861L76.8873%20100.744L77.2653%20100.588L98.0301%2090.6049C98.7918%2090.2374%2099.4717%2089.7203%20100.029%2089.0845C100.161%2088.9322%20100.287%2088.7753%20100.407%2088.6141L100.424%2088.5847C100.543%2088.4139%20100.655%2088.2388%20100.76%2088.0597C100.853%2087.8946%20100.939%2087.7265%20101.02%2087.5557L101.058%2087.4843L101.226%2087.0307L101.289%2086.8753L101.415%2086.4259L101.453%2086.2705L101.524%2085.8505L101.558%2085.6405L101.583%2085.2625L101.6%2084.9265V17.0755C101.594%2016.865%20101.58%2016.6549%20101.558%2016.4455C101.43%2015.3961%20101.039%2014.3961%20100.422%2013.5373C99.8059%2012.6786%2098.9832%2011.9888%2098.0301%2011.5315L77.2653%201.54806C76.4486%201.15842%2075.5576%200.94928%2074.6529%200.934856L74.6487%200.930656ZM76.4001%2029.7301V72.4147L50.3685%2051.0787L76.4001%2029.7301ZM13.4001%2036.6769L26.4159%2051.0703L13.3959%2065.4595L13.4001%2036.6769Z'%20fill='white'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_8_725'%3e%3crect%20width='100.8'%20height='100.8'%20fill='white'%20transform='translate(0.800074%200.666016)'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",
        Kj = "data:image/svg+xml,%3csvg%20width='53'%20height='52'%20viewBox='0%200%2053%2052'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M25.1449%204.46594C25.1449%209.64994%2029.4001%2013.8619%2034.5409%2013.8619H38.3857V17.5339C38.3857%2022.7179%2042.5761%2026.9083%2047.7601%2026.9299V6.28034C47.7601%205.79913%2047.5689%205.33763%2047.2286%204.99737C46.8884%204.6571%2046.4269%204.46594%2045.9457%204.46594H25.1449ZM14.8633%2014.8339C14.8746%2017.3167%2015.8659%2019.6945%2017.6215%2021.4501C19.3771%2023.2057%2021.7549%2024.197%2024.2377%2024.2083H28.1257V27.9235C28.137%2030.4063%2029.1283%2032.7841%2030.8839%2034.5397C32.6395%2036.2953%2035.0173%2037.2866%2037.5001%2037.2979V16.6267C37.4945%2016.153%2037.3038%2015.7002%2036.9688%2015.3652C36.6338%2015.0302%2036.181%2014.8396%2035.7073%2014.8339H14.8633ZM4.56006%2025.2019C4.56006%2030.3859%208.77206%2034.5763%2013.9561%2034.5763H17.8009V38.2915C17.8225%2043.4539%2022.0129%2047.6659%2027.1753%2047.6659V26.9947C27.1753%2026.5135%2026.9841%2026.052%2026.6438%2025.7118C26.3036%2025.3715%2025.8421%2025.1803%2025.3609%2025.1803L4.56006%2025.2019Z'%20fill='white'/%3e%3c/svg%3e",
        Zj = "data:image/svg+xml,%3csvg%20width='102'%20height='102'%20viewBox='0%200%20102%20102'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M68.8375%2088.362C67.8849%2088.8225%2066.8121%2088.9735%2065.7694%2088.7939C64.7267%2088.6143%2063.7662%2088.113%2063.0226%2087.3603L30.7414%2057.7629L16.6798%2068.4918C16.046%2068.9739%2015.2633%2069.2183%2014.4678%2069.1827C13.6723%2069.147%2012.9146%2068.8334%2012.3265%2068.2965L7.81571%2064.17C7.46499%2063.8473%207.18504%2063.4553%206.99355%2063.0188C6.80206%2062.5823%206.70319%2062.1109%206.70319%2061.6343C6.70319%2061.1576%206.80206%2060.6862%206.99355%2060.2497C7.18504%2059.8133%207.46499%2059.4213%207.81571%2059.0985L20.0062%2047.916L7.81571%2036.7335C7.46499%2036.4108%207.18504%2036.0188%206.99355%2035.5823C6.80206%2035.1458%206.70319%2034.6744%206.70319%2034.1978C6.70319%2033.7211%206.80206%2033.2497%206.99355%2032.8132C7.18504%2032.3768%207.46499%2031.9848%207.81571%2031.662L12.3265%2027.5355C12.9153%2026.9996%2013.6735%2026.6871%2014.4689%2026.6526C15.2644%2026.618%2016.0468%2026.8636%2016.6798%2027.3465L30.7414%2038.0691L63.0226%208.47801C63.7695%207.73043%2064.7301%207.23316%2065.7716%207.05486C66.8132%206.87656%2067.8845%207.02602%2068.8375%207.48261L85.7026%2015.6348C87.4729%2016.4916%2088.6006%2018.2934%2088.6006%2020.2716V51.066H68.1382V29.2302L43.6438%2047.916L68.1382%2066.6018V51.066H88.6006V75.5667C88.6006%2077.5449%2087.4729%2079.3467%2085.7026%2080.2035L68.8375%2088.362Z'%20fill='white'/%3e%3c/svg%3e",
        Xj = "data:image/svg+xml,%3csvg%20width='53'%20height='52'%20viewBox='0%200%2053%2052'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M26.2805%204.46594C14.3573%204.46594%204.68054%2014.1427%204.68054%2026.0659C4.68054%2037.9891%2014.3573%2047.6659%2026.2805%2047.6659C38.2037%2047.6659%2047.8805%2037.9891%2047.8805%2026.0659C47.8805%2014.1427%2038.2037%204.46594%2026.2805%204.46594ZM36.3029%2019.1539C35.9789%2022.5667%2034.5749%2030.8611%2033.8621%2034.6843C33.5597%2036.3043%2032.9549%2036.8443%2032.3933%2036.9091C31.1405%2037.0171%2030.1901%2036.0883%2028.9805%2035.2891C27.0797%2034.0363%2025.9997%2033.2587%2024.1637%2032.0491C22.0253%2030.6451%2023.4077%2029.8675%2024.6389%2028.6147C24.9629%2028.2907%2030.4925%2023.2579%2030.6005%2022.8043C30.6155%2022.7356%2030.6135%2022.6643%2030.5947%2022.5966C30.5759%2022.5288%2030.5408%2022.4667%2030.4925%2022.4155C30.3629%2022.3075%2030.1901%2022.3507%2030.0389%2022.3723C29.8445%2022.4155%2026.8205%2024.4243%2020.9237%2028.3987C20.0597%2028.9819%2019.2821%2029.2843%2018.5909%2029.2627C17.8133%2029.2411%2016.3445%2028.8307%2015.2429%2028.4635C13.8821%2028.0315%2012.8237%2027.7939%2012.9101%2027.0379C12.9533%2026.6491%2013.4933%2026.2603%2014.5085%2025.8499C20.8157%2023.1067%2025.0061%2021.2923%2027.1013%2020.4283C33.1061%2017.9227%2034.3373%2017.4907%2035.1581%2017.4907C35.3309%2017.4907%2035.7413%2017.5339%2036.0005%2017.7499C36.2165%2017.9227%2036.2813%2018.1603%2036.3029%2018.3331C36.2813%2018.4627%2036.3245%2018.8515%2036.3029%2019.1539Z'%20fill='white'/%3e%3c/svg%3e";

    function Jj() {
        const t = [{
                icon: Yj,
                size: "90",
                opacity: "5"
            }, {
                icon: Xj,
                size: "90",
                opacity: "10"
            }, {
                icon: Qj,
                size: "129",
                opacity: "10"
            }, {
                icon: Zj,
                size: "158",
                opacity: "20"
            }],
            e = [{
                icon: qj,
                size: "158",
                opacity: "20"
            }, {
                icon: Wj,
                size: "129",
                opacity: "10"
            }, {
                icon: Gj,
                size: "90",
                opacity: "10"
            }, {
                icon: Kj,
                size: "90",
                opacity: "5"
            }];
        return In(() => {
            fe.from(".platform-logo", {
                scale: .9,
                ease: "power2.inOut",
                repeat: -1,
                yoyo: !0,
                duration: 1.2
            })
        }, []), m.jsxs("section", {
            className: "flex flex-col justify-center items-center relative w-full mt-[80px] -500:mt-[44px] py-0 ",
            children: [m.jsx("div", {
                className: "overflow-hidden w-full mx-auto flex justify-center items-center p-10 -1024:p-4",
                children: m.jsxs("h2", {
                    className: "sub-heading grey-gradient-text font-bold max-w-[600px] -768:max-w-[400px] -500:max-w-[350px] w-[100%] leading-10 relative ",
                    children: [m.jsx("img", {
                        src: Hj,
                        className: "absolute left-[0%] translate-x-[-115%] -1024:translate-x-[-93%] -500:translate-x-[-85%] top-[10%] scale-x-[1.4]  -1024:scale-100 -768:top-[70%]",
                        alt: ""
                    }), m.jsx("img", {
                        src: Vj,
                        className: "absolute right-[0%] translate-x-[115%] -1024:translate-x-[93%] -500:translate-x-[85%] top-[12%] scale-x-[1.4] -1024:scale-100 -768:top-[70%]",
                        alt: ""
                    }), "Seamless integration across", " ", m.jsx("span", {
                        className: "purple-gradient-text",
                        children: "multiple platforms"
                    })]
                })
            }), m.jsxs("div", {
                className: "flex justify-center w-[100%] items-center mt-8 gap-8 -1200:gap-3  px-2 -1024:flex-col relative",
                children: [m.jsxs("div", {
                    className: "flex justify-center items-center gap-8 -500:gap-[0.4rem] -1200:gap-3 flex-shrink relative overflow-hidden",
                    children: [m.jsx("div", {
                        className: " h-[100px] w-[20%] absolute left-[-40px] -1024:hidden platform-black-blur z-[10]"
                    }), t.map((r, n) => m.jsx("div", {
                        className: `rounded-[28.8px] bg-white bg-opacity-${r.opacity} p-4 flex justify-center items-center -1024:!h-[100px] -1024:rounded-[20px] -500:!h-[70px] -1024:!w-[100px] -500:!w-[70px] `,
                        style: {
                            height: `${r.size}px`
                        },
                        children: m.jsx("img", {
                            className: " h-full w-full ",
                            src: r.icon,
                            alt: ""
                        })
                    }, n + 70))]
                }), m.jsxs("div", {
                    className: " relative  h-[210px]  -1024:mb-8 -1024:h-[120px] -1024:!w-[120px] -500:h-[108px] -500:!w-[108px] -1024:order-[-1]",
                    children: [m.jsx("div", {
                        className: "h-[250px] w-[250px] -1024:w-[200px] -1024:h-[200px] ml-blur bg-[#6D00DBB2] absolute translate-x-[-50%] left-[50%] top-[50%] translate-y-[-50%] z-[1]"
                    }), m.jsx("img", {
                        className: "rounded-[46px] -1024:rounded-[23px]  platform-logo  p-8 -1024:p-4 w-full h-full  relative z-[3]",
                        src: Uj,
                        alt: ""
                    })]
                }), m.jsxs("div", {
                    className: "flex justify-center items-center gap-8 -1200:gap-3 -500:gap-[0.4rem] relative overflow-hidden",
                    children: [m.jsx("div", {
                        className: " h-[100px] w-[20%] absolute right-[-40px]  -1024:hidden  platform-black-blur-right z-[10]"
                    }), e.map((r, n) => m.jsx("div", {
                        style: {
                            height: `${r.size}px`
                        },
                        className: `rounded-[28.8px] bg-white bg-opacity-${r.opacity} p-4 flex justify-center items-center -1024:!h-[100px] -1024:w-[100px] -500:w-[70px] -1024:rounded-[20px] -500:!h-[70px]`,
                        children: m.jsx("img", {
                            className: "h-full w-full",
                            src: r.icon,
                            alt: ""
                        })
                    }, n + 50))]
                })]
            }), m.jsx(jo, {
                className: "mt-[50px] "
            })]
        })
    }
    const eM = "/assets/maj_team-m3y5Ejt8.svg",
        tM = "/assets/pikachu_team-C_yrkWVk.svg",
        rM = "/assets/robot_team-gD0uwWA2.svg",
        nM = "data:image/svg+xml,%3csvg%20width='43'%20height='49'%20viewBox='0%200%2043%2049'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20filter='url(%23filter0_b_4_1534)'%3e%3crect%20y='0.5'%20width='43'%20height='48'%20rx='21.5'%20fill='white'%20fill-opacity='0.2'/%3e%3cpath%20d='M15.5%2021L21.5%2027L27.5%2021'%20stroke='white'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/g%3e%3cdefs%3e%3cfilter%20id='filter0_b_4_1534'%20x='-20'%20y='-19.5'%20width='83'%20height='88'%20filterUnits='userSpaceOnUse'%20color-interpolation-filters='sRGB'%3e%3cfeFlood%20flood-opacity='0'%20result='BackgroundImageFix'/%3e%3cfeGaussianBlur%20in='BackgroundImageFix'%20stdDeviation='10'/%3e%3cfeComposite%20in2='SourceAlpha'%20operator='in'%20result='effect1_backgroundBlur_4_1534'/%3e%3cfeBlend%20mode='normal'%20in='SourceGraphic'%20in2='effect1_backgroundBlur_4_1534'%20result='shape'/%3e%3c/filter%3e%3c/defs%3e%3c/svg%3e";

    function iM() {
        const t = [{
            name: "Maj",
            subHeading: "Founder & CEO",
            para: "Maj, Founder and CEO of MicroGPT, brings extensive experience in game and software development to lead the creation of advanced AI tools for developers. His expertise drives MicroGPT's mission to transform productivity and innovation in the tech industry.",
            img: eM
        }, {
            name: "Reflex",
            subHeading: "Cofounder & CMO",
            para: "Reflex, Co-founder and CMO of MicroGPT, is a dynamic leader with a strategic vision for driving growth and brand presence in the tech industry. His expertise in marketing and innovation powers MicroGPT’s mission to make advanced AI tools accessible and transformative for developers worldwide.",
            img: rM
        }, {
            name: "Fuse",
            subHeading: "CTO",
            para: "Fuse, CTO of MicroGPT, is a technical powerhouse dedicated to advancing AI-driven solutions for developers. With a deep background in software engineering and innovation, Fuse leads the development of MicroGPT's cutting-edge tools, driving the platform’s commitment to scalability, efficiency, and transformative impact in the tech industry.",
            img: tM
        }];
        return m.jsxs("section", {
            className: "mt-[40px]",
            children: [m.jsxs("h2", {
                className: "sub-heading font-[800] grey-gradient-text",
                children: ["Meet the ", m.jsx("span", {
                    className: "purple-gradient-text",
                    children: "awesome team"
                })]
            }), m.jsx("div", {
                className: "flex gap-[24px] justify-center mt-[53px] flex-wrap",
                children: t.map((e, r) => m.jsx(sM, { ...e
                }, r))
            }), m.jsx(jo, {
                className: "mt-[64px]"
            })]
        })
    }

    function sM(t) {
        const [e, r] = M.useState(!0), n = M.useRef(null);

        function i() {
            r(!e)
        }
        return M.useEffect(() => {
            n.current.addEventListener("wheel", function(s) {
                s.stopPropagation()
            }, {
                passive: !1
            })
        }, []), m.jsx("div", {
            className: "purple-gradient-bg p-[1px] rounded-[16px] w-[90%] max-w-[384px] h-[586px] -650:h-[328px] -650:max-w-[343px]",
            children: m.jsxs("div", {
                className: "text-white flex flex-col items-start justify-center h-full w-full relative rounded-[16px] overflow-hidden",
                children: [m.jsx("img", {
                    src: t.img,
                    alt: "",
                    className: "absolute w-full h-full left-0 top-0 z-[2] object-center object-cover"
                }), m.jsx("div", {
                    className: `relative z-[3] h-full team-card-gradient flex flex-col justify-end p-[28px] duration-[200ms] ease-in-out ${e?"":"team-blur active"}`,
                    children: m.jsxs("div", {
                        ref: n,
                        className: ` duration-[500ms] ease-in relative ${e?"max-h-[180px] line-clamp-5":"max-h-[100%] line-clamp-[0]  -650:overflow-y-scroll custom-scroll"}`,
                        children: [m.jsx("img", {
                            onClick: i,
                            className: `-1024:block hidden absolute right-0 top-0 -1024:pointer-events-auto  ${e?"":"rotate-[180deg]"} duration-300 ease-in-out`,
                            src: nM,
                            alt: ""
                        }), m.jsxs("div", {
                            onMouseEnter: i,
                            onMouseLeave: i,
                            className: "-1024:pointer-events-none",
                            children: [m.jsx("h3", {
                                className: "text-[24px] font-bold -500:text-[18px] -500:leading-[24px]",
                                children: t.name
                            }), m.jsx("p", {
                                className: "text-[20px] mt-[8px] -500:mt-[5px] -500:text-[16px] -500:leading-[24px]",
                                children: t.subHeading
                            }), m.jsx("p", {
                                className: "mt-[16px] -500:mt-[12px] text-[#FFFFFFB2] text-[20px] leading-[30px]  -500:leading-[24px] -500:text-[16px]",
                                children: t.para
                            })]
                        })]
                    })
                })]
            })
        })
    }

    function oM() {
        fe.registerPlugin(Z), In(() => {
            document.querySelectorAll("section").forEach(r => {
                fe.from(r, {
                    y: 100,
                    opacity: 0,
                    scrollTrigger: {
                        trigger: r,
                        start: "top 85%"
                    }
                })
            })
        }, []);

        function t() {
            document.querySelector(".buy-micro-overlay").classList.remove("active")
        }
        return m.jsxs("main", {
            className: "",
            children: [m.jsx(M8, {}), m.jsx(ax, {}), m.jsx(dx, {}), m.jsx(Ox, {}), m.jsx(Hx, {}), m.jsx(Ux, {}), m.jsx(Jj, {}), m.jsx(bj, {}), m.jsx(iM, {}), m.jsx(Rj, {}), m.jsx($j, {}), m.jsx(J6, {}), m.jsx("div", {
                onClick: t,
                className: "fixed bg-black bg-opacity-80 w-full h-full top-0 left-0 z-[80] buy-micro-overlay opacity-0 pointer-events-none flex justify-center items-center",
                children: m.jsx("iframe", {
                    width: "400",
                    height: "500",
                    className: " w-[85%] max-w-[400px] h-[70%]",
                    allow: "clipboard-read *; clipboard-write *; web-share *; accelerometer *; autoplay *; camera *; gyroscope *; payment *; geolocation *",
                    src: "https://flooz.xyz/embed/trade?swapDisabled=true&swapNetwork=eth&swapLockToToken=true&onRampDisabled=false&onRampNetwork=eth&onRampAsDefault=true&onRampTokenAddress=ETH&onRampLockToken=true&network=eth&lightMode=false&backgroundColor=transparent&miniApp=false&miniappIntent=swap"
                })
            })]
        })
    }
    const aM = "/assets/students-BhjaOlL2.png",
        lM = "/assets/shg-CoDTbIqM.svg",
        uM = "/assets/shg-mobile-Cau-1NQM.svg";

    function cM() {
        return m.jsx("section", {
            className: "flex flex-col justify-center items-center relative",
            children: m.jsxs("div", {
                className: "text-center flex flex-col items-center sectionGap -500:!mt-[20px]",
                children: [m.jsxs("h1", {
                    className: "hero-heading relative mb-4",
                    children: [m.jsx("div", {
                        className: "innovator-hero-blur -500:h-[140px]"
                    }), "Innovation at its finest"]
                }), m.jsxs("div", {
                    className: "flex gap-7 flex-col items-center w-[90%] max-w-[1300px]",
                    children: [m.jsxs("div", {
                        className: "flex gap-6 w-full justify-center -1024:flex-col -1024:items-center -1024:max-w-[520px] ",
                        children: [m.jsxs("div", {
                            className: " relative rounded-[2rem] w-[50%] -1024:w-full text-left overflow-hidden",
                            children: [m.jsx("img", {
                                src: aM,
                                className: "absolute z-[1] h-full w-full object-cover",
                                alt: ""
                            }), m.jsxs("div", {
                                className: "flex flex-col justify-around gap-4 relative w-full h-full z-[3] bg-[#DF4F03] bg-opacity-70 p-6 ",
                                children: [m.jsx("p", {
                                    className: "font-extrabold text-4xl -650:text-2xl",
                                    children: "microGPT x Code Ninja"
                                }), m.jsx("p", {
                                    className: "text-2xl max-w-[320px] -650:text-base",
                                    children: "Acquiring a retail location for tutoring & code to earn"
                                }), m.jsxs("div", {
                                    className: "text-left",
                                    children: [m.jsx("p", {
                                        className: "font-extrabold text-[128px] tracking-tighter leading-[110%] -650:text-[4rem]",
                                        children: "300+"
                                    }), m.jsx("p", {
                                        className: "text-2xl font-bold",
                                        children: "STUDENTS"
                                    })]
                                })]
                            })]
                        }), m.jsxs("div", {
                            className: "flex flex-col gap-4 rounded-[2.5rem] bg-[#3F3182] w-[50%] -1024:w-full  text-left p-6 ",
                            children: [m.jsx("img", {
                                src: lM,
                                className: "-500:hidden",
                                alt: ""
                            }), m.jsx("img", {
                                src: uM,
                                className: "-500:block hidden max-h-[130px]",
                                alt: ""
                            }), m.jsxs("p", {
                                className: "text-[2rem] font-semibold -650:text-2xl",
                                children: [" ", "Signed up with", " ", m.jsx("span", {
                                    className: "text-[#A1C7FF]",
                                    children: "SydneyHoustonGroup"
                                })]
                            }), m.jsx("p", {
                                className: "text-white text-opacity-50 text-2xl -650:text-base",
                                children: "A premier marketing agency renowned for its strategic partnerships with major platforms like Snapchat, Reddit, to run crypto ads"
                            })]
                        })]
                    }), m.jsxs("div", {
                        className: "flex w-full justify-between bg-white bg-opacity-[0.04] -1024:gap-8 rounded-[32px] px-12 p-6 -1024:flex-col -1024:max-w-[520px]",
                        children: [m.jsxs("span", {
                            className: "flex flex-col items-start -1024:items-center",
                            children: [m.jsx("p", {
                                className: "purple-gradient-text text-3xl font-medium -650:text-base",
                                children: "Introducing microGPT's"
                            }), m.jsx("p", {
                                className: "purple-gradient-text text-8xl -1024:text-6xl font-extrabold tracking-tighter -650:text-[2.5rem]",
                                children: "Hackathon"
                            })]
                        }), m.jsxs("div", {
                            className: "w-full flex flex-col gap-3 items-center max-w-[275px] -1024:max-w-[initial]  justify-center",
                            children: [m.jsx("p", {
                                className: "text-3xl font-medium text-white text-opacity-50 -650:text-2xl",
                                children: "June 2024"
                            }), m.jsxs("a", {
                                href: "#",
                                className: "btn-arrow w-full font-bold bg-white bg-opacity-30 flex gap-3 items-center justify-center rounded-[50px] p-6 text[20px] text-[#000000] hover:bg-opacity-100 -650:p-[10px]",
                                children: ["Go to hackathon", " ", m.jsx("img", {
                                    className: "hackathon-arrow",
                                    src: Eo,
                                    alt: ""
                                })]
                            })]
                        })]
                    })]
                })]
            })
        })
    }

    function fM() {
        return m.jsxs("div", {
            className: "sectionGap flex -1100:flex-col -1100:gap-6 justify-between bg-white bg-opacity-5 w-[80%] mx-auto rounded-3xl py-12 px-12 relative overflow-hidden -500:p-4 -500:rounded-xl",
            children: [m.jsx("div", {
                className: "h-[70px] w-[400px] ml-blur bg-[#8A73FA] absolute left-[0%] -500:w-[250px] -500:top-[25%]"
            }), m.jsxs("div", {
                className: "text-white",
                children: [m.jsx("h3", {
                    className: "text-[2rem] font-bold -500:text-[1.25rem]",
                    children: "Join our newsletter"
                }), m.jsx("p", {
                    className: "text-base -500:text-sm",
                    children: "Stay updated with latest coding insights"
                })]
            }), m.jsxs("form", {
                className: "flex items-start text-base gap-4 w-[50%] -1100:w-full -768:flex-col",
                action: "",
                children: [m.jsxs("div", {
                    className: "w-[75%] -768:w-full",
                    children: [m.jsx("input", {
                        className: "w-full bg-transparent border-white border-[1px] border-opacity-10 outline-none p-4 py-3 rounded-xl mb-3 placeholder:text-white -500:text-sm",
                        type: "email",
                        placeholder: "Enter your email"
                    }), m.jsx("p", {
                        className: "-768:hidden",
                        children: "By subscribing, you agree with our Privacy Policy"
                    })]
                }), m.jsx("button", {
                    className: "font-bold bg-white text-black w-[140px] -768:w-full rounded-xl py-3 duration-300 ease-in-out hover:bg-opacity-70",
                    children: "Subscribe"
                }), m.jsx("p", {
                    className: "-500:text-xs -768:block hidden",
                    children: "By subscribing, you agree with our Privacy Policy"
                })]
            })]
        })
    }
    const dM = "/assets/0xgpu-BnRIWhoU.png",
        hM = "/assets/fuxion-UsX--tEk.png",
        pM = "/assets/hash-rent-uTKraG4r.png",
        mM = "/assets/bank-ai-DDloUyfP.png",
        gM = "/assets/agent-layer-DjUVQH30.png",
        vM = "/assets/kiverse-CwSmuVlr.png",
        yM = "/assets/opclouds-oFeLLyQV.png",
        xM = "/assets/artemis-ai-ChjIXJp_.png",
        _M = "/assets/volumint-C2ezKjzI.png",
        wM = "/assets/0xnumbers-Bw7bvup8.png",
        CM = "/assets/spectre-ai-xlcDi2Ao.png",
        AM = "/assets/self-opt-vafJFT0j.png",
        SM = "/assets/node-synapse-CBbUkqBq.png",
        kM = "/assets/ai-idiot-DwK38OMX.png",
        PM = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAkGBggGBQkIBwgKCQkKDRYODQwMDRoTFBAWHxwhIB8cHh4jJzIqIyUvJR4eKzssLzM1ODg4ISo9QTw2QTI3ODX/2wBDAQkKCg0LDRkODhk1JB4kNTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTX/wgARCAGQAZADASIAAhEBAxEB/8QAGgABAQEAAwEAAAAAAAAAAAAAAAYBAwQFAv/EABkBAQEAAwEAAAAAAAAAAAAAAAABAgQFA//aAAwDAQACEAMQAAABuAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOPk6rHrpxNSjTgo04KNOCjTgo04KNOCjTgo04KNOCjTgo04KNOCx5Ot2btgyAAAAAAAAAdbs9ZjJic0AAAAAAAAAAACt7HX7F6QMgAAAAAAAAHW7PWYyYnNAAAAAOT0WflPX4F89z8LDAgAAFdz8PNekDIAAAAAAAAB1uz1mMmJzQAAAAG4PT9uR+ntZfPjevdri6/pF8Xr0OsIz55uGaQJX83Fy3pAyAAAAAAAAAdbsEi1ka0askRqyEashGrLCOUE+8AYAOXi1bRm3pAshw2RqxqyR88ubdkFAAAAAAAAAAAAAAA8ydop2aIPEBuatnubekCgAAAAAAAAAAAAAAAAAAeZO0U7NIHgA3NWz3NvSBQAAAAAAAAAAAAAAAAAAPMnaKdmkDwAbmrZ7m3pAoAAAAAAAAAAAAAAAAAAHmTtFOzSB4ANzVs9zb0gUAAAAAAAAAAAAAAAAAADzJ2inZpA8AG5q2e5t6QKAAAAAAAAAAAAAAAAAAB5k7RTs0geADc1bPc29IFAAAAAAAAAAAAAAAAAAA8ydppqaWB4ANzVs9zb0gUAAAAAAAAAAAAAAAAAAB53omMdx1k5NPrB4tzVs9zb0gUAAAAAAAAAAAAAAAAAAABx8hJzzbTx5reHo1rPc29IFAAAAAAAAAAAAAAAAAAAAAA6E9YcDx5tHqCgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf/xAAmEAAABQQCAgIDAQAAAAAAAAAAAQIDBBIUNFAzQBAwBSARMYCQ/9oACAEBAAEFAv7/AFqoRftC/aF+0L9oX7Qv2hftC/aF+0L9oX7Qv2hftC/aF+0L9oX7Qv2hftC/aF+0L9oX7Qv2hftC/aCFEtPWkY/aj4/Wk43aY4OtJxu0xwdaTjdpnh60nG9iTIjQww8D+OUDhOkDZcT6meHrScb3MzVIDbqHSBpIwcdpQOA0YP44HAcIGVKvLXF1pON7yM0mzPCVksvo9z+WuLrScfooWps/o9z+W+Pr0JFCRQkUJFCRQkUJFCRQkUJE5JEx66SFCRQkUJ0c/H2M/H2M/H2M/H2M/H2M/H2M/H2M/H2M/H2M/H2M/H2M/H2M/g2MxBuMbKREJ0KQaFbF1lLyXmFMnsVJJZSIhtbORD/I/R7F+Kl4ltqbVsXGkup/wI//xAAkEQABAwMEAgMBAAAAAAAAAAABAAITAxBAITAxMhESIEFwYf/aAAgBAwEBPwH8COgUzlM5TOUzlM5TOUzlM5TOUzlM5TOUzkNRtu43m8bbuPmG+yjcF4I+LeNt3Gw2sRymuDl6tKNJqI1sONs6qBQKBQKD+p7fU+Li5oeSoMKt2uMat2uMat2uMat2uMat2uMat2uMatzcYxAPKfTLbDIqUvsZT6QOv4R//8QAFBEBAAAAAAAAAAAAAAAAAAAAkP/aAAgBAgEBPwEcf//EACkQAAAEBgEDBAMBAAAAAAAAAAABAkERMUBQcYEhICIwA1FykRASgJD/2gAIAQEABj8C/v8ANRsHDhw4cOHDhw4cOHDhw4cOHDhw4cOHDglE9OvFWjFOvFWjFOvFWjFOvFWjFOvHl7kxIdizI/YxwshIj2OUH9eJOKdePPBfcQ7Tj+OSHKCHESHCxwZGIG3QnFOvFBEjgIer9iKTj0r+R9CcU68UUUnDpX8j6E4qJEJEJEJEJEJEJEJEJEJEOCfySISISISKx7uW7lu5buW7lu5buW7lu5buW7lu5buUElG5xTwoQUUDuUFfY5l73KBlEhFPKbn+3pT9rnGShBRXKCv8Cf/EACkQAAECBQQBBQADAQAAAAAAAAEAMREgQXHwQFCh8VEQITBhsYCBkJH/2gAIAQEAAT8h/n+BgBErCFhCwhYQsIWELCFhCwhYQsIWELCFhCwhYQsIWELCFhCwhYQsIWELCFhCYICI0/P6vgNPyer4zT8nq+B0/J6vjdPyfy8+KBQ1XBHlxBN1h6MIghxD4eD0/J/MCQYgwKdnyVUUD+lfRhDcL8xiC/IZQq/9hfvVBHI8UDJx+n5PQDBRCoRB7ER4qH0H1LhPMnD6fl9FHLL6QkwnmTjNOREQK6JdEuiXRLol0S6JdEuiXRIAIB7GE9UGkjv/AMl0S6JdEoQ2Jq2eqDbU1bPVBtqatnqg21NWz1QbamrZ6oNtTVs9UG2pq2eqDbU1bPVBtqatnqg21NWz1QbamrZ6oNtTVs9UG2pm2eqDbV7sAGMERAwM1UG2uJ3vzdG0IS1QbbIcPelQUHjEmBjJVBttORiUKj0fmHrVBtvHECFXnZEEgIgRRVQbcIQXvN17Dx/UG3GEmPg1H+BP/9oADAMBAAIAAwAAABDzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzwf8AOOOOOOOOOOO/D8888888888A9999999999999L8888888888A9999998w19999B8888888888A999999t/1h5d9j8888888888Kwyyy2199pdsxy48888888888888888/8AfaPfPPPPPPPPPPPPPPPPPPPPvfaPfPPPPPPPPPPPPPPPPPPPPvfaPfPPPPPPPPPPPPPPPPPPPPvfaPfPPPPPPPPPPPPPPPPPPPPvfaPfPPPPPPPPPPPPPPPPPPPPvfaPfPPPPPPPPPPPPPPPPPPPM/faPfPPPPPPPPPPPPPPPPPPPAHvaPfPPPPPPPPPPPPPPPPPPPPGXqPfPPPPPPPPPPPPPPPPPPPPPPNNfPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP/xAAgEQEAAgICAgMBAAAAAAAAAAABADERQCEwIHEQQXBh/9oACAEDAQE/EPwJ5Huv/wD/AOeBeu3tJT12+bUY/QjxE8C5R12+dTieRB+I3CL+oQghcq6xgk957z3nv4zGjxCvjIOYf3AwBqViFbHYhWx2IVsdiFbHYhWx2IVql544+bEK1TcQ5kr4sQrWQTDLYhhhWwjhcK/B/wD/xAAdEQEBAAIBBQAAAAAAAAAAAAARAAFAcBAgMDFQ/9oACAECAQE/EOA2ZmZmZmZn5pst76FnzkRFnvOKM7WcbRxF/8QALBAAAQIEBQMDBAMAAAAAAAAAAQARITFx8CBAUFHRQWHxkbHBEDCBoYCQ4f/aAAgBAQABPxD+f7uL5gOWGyvjyr48q+PKvjyr48q+PKvjyr48q+PKvjyr48q+PKvjyr48q+PKvjyr48q+PKvjyr48q+PKvjyr48q+PKvjyr48p1ts4GLd8vcNs3CG5ssZqwbZsWuoIZUzVg2zYtcQyxmrBtmwYVjDLGasG33YYjTDgdwR1qCEUwZFgkUDR/BKcmPo57HUn0bQ92R8twJkER6hwirELuCPswXkBljNWDb7wUUAuCCxBTIEOETCPn8x7obhxzIFRNQZCoP2D7oS0R1ceoZG37AO+7n9o2U7DPsQhJIMSAIj+m/aFIxonBiCxDiBiMAMO1hljNWDbIS+REIPqERHSgDEVHyPRC5r6k6f6df9RkrFuwDY9Bl7Rtkg1wg7oGokfypPqZKxbsAtfwGW6oRgOCIgrxdeLrxdeLrxdeLrxdeLrxdeL8I3DIpHQ4xJVSKYCcSQTFyJK8XXi68XQYYQA2W+g2DY4xJVSKaVYNjjElVIppVg2OMSVUimlWDY4xJVSKaVYNjjElVIppVg2OMSVUimlWDY4xJVSKaVYNjjElVIppVg2OMSVUimlWDY4xJVSKaVYNjjElVIppVg2OMSVUimlDcdDjElVIppRYUHaMSA7t3iiGAxECCGIOISVUimliggAQZC7r7o/LoCJjcbjvhElVIpphwAAEIROxUYoQ3gPY4BJVSKaaCkDEDuiAcSSJ1dx39fqJKqRTTiHTesYggPgPaVEfMQQSDEEdCEJKqRTUDhkIgIh8iMTBmDxAbg9QpFNQ6o9FARBAm4KEv6CP/Z",
        bM = "/assets/zk-D5f_FcIg.jpg",
        TM = "/assets/arc-CkjBeq3g.jpg",
        EM = "/assets/bingo-CU4GBU9T.jpg",
        jM = "/assets/asset_link-JX6JaoVz.jpg",
        MM = "/assets/jup-DRdPJ20A.jpg",
        RM = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAABLFBMVEUAAAD////8/PwEBAR1dXW9vb1j6nHj4+P4+PgqKir7//5k6XLY5uQLRzsVSz4ASjln5HIFSz0pr3omsXr//vsnsXVd5HksrXowtm0cf1wprn+b6qDz//UISjmrq6sqs4B6enrKysqUlJTt7e1BQUHQ0NCtra1ISEg4ODjZ2dkXFxeFhYVbW1vOzs6ioqJYWFhnZ2chISEORj8APjH/+f/q/+JtbW0nLCgyJysvOTi72dPO6uauwr4iRT9dfnZHb2bl//sFPTWQpKKZuLIANijY7+tjfHies7AARSwAQiwVgFofcFOW3sVNp4Tc/fFzx6XH7dw6pnuX1bh/yqq26NKV1MNkuJwvp2yo8Lpd2H5z3Yht33nP+cxi7Wns//CF3ZKuzbSs5biZ6qfM2cm2BTWCAAAIVklEQVR4nO2cj1cTRxDHb3dD7nKRksBBakxiQsJvlV8BbUWlVVuxQolaRX6p9P//Hzp7RwS92x+Xaib33nyU53uRwHwzs7Ozu3PrOARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBZAuBbcAQcI2MYZs4OAI82GRGvEVsQ/8XLca5Vh/89yy2kYMjnEWTAzn8ceEbszlgweoVc5CCizsZFShp2fgwDNNMaoQgbZt9CMw5GVUoM6k+zfQdmd1sumSnkN3LqgsXPCt9jLnL2KYOyAqz9CG/k1En3jVN932BEKbZA3xSANut4pSzJWxzB0E4s5YujMI0a8iq2+W2w5CzeWyD0yOcDkuh0MO2NzXiMkgtMw1ja1kra8DaOSv/9WlEkZ0lFmyzTH8JlTEfOs69NB6ET2MhaxKFa5lm+oxlTeGa3WR/RbuAbXJKUgVpyDa2ySlJG6Qsa5P+KufWJdslbrbC9J59TXoJl5N+ZhCOlzZIITHdxTbbHuHcSSdP4jFvHdvwFDSY7fL+mhdZDttsW4Sz7A4gkLOx6N0jDxTQq5dOSedCzrFNtwScMJbSf32aWTnBWHQHVNjKRJCCjbkBBcrN7ywodJz5QRWy5mgohFSyXkjm/v3Cgwe//PrwhpIl7ZKjha0tAmaDFvdUdPnO+E+PfkpiA74ePdRFaXs0zmiE/kDCf7xXr0/EKZfLE+XNJ7s6hWwFW1yIkHW1ykTmP98EOeMxNuBPefy3332twhHZ/BauajL3Ofefbtbr5bhAAP55dEMjEOZ8bwFbXMiaslrxZZBugpJyjPDFzSe+odIZjcaMhrIgA/ufb9bHN+JBGvHsqVYhj0688VHvUPiM7zyrq/QBz00+5HKljz0prqo3633u/bE3UR4v17+lLMfm5uNdP9ArxA5TIaf7hnqHYpfdqE+EaTMhmW5sQJAaFbrI2/vyl2v2mDz2554chhtfnHh9Ohx/BkFqXFNh16Zyh0Itses/fvH1fH+l9MWLvSc+6xoV4mfThk7hw5svb94Mv2K8fPnXDuuaFeJuSEH8LLuak0//VfV2tXp7qnI7Rq9S3T+AN+pqmhCvgyxRu422uz81ValMT09Nxpmq/A01qW9SiN+Yod6hAMce9kDgJCis9LmmsPrKNwsEXNRUqt+h8F9XJkMXAiAJ/l45s1LpHULV6neNPuS4m9853Raavw+xGMmKubBafbdroxA9TMeSFAYB7/pQjx30qt/STzSTU723AbcJ0vDEG69yW28nKoRpDhTWXk9r6B1YKZT7pqtI6iTbKruCWhDU9vtRmZRL3+z6UqCpapMaG1A7YfmwlTgM5bIQFB724vPgVaZ5KwVyblQY9Q+hSJTTffJePQxBCFL/n+pUnDBCIfn0DuT3QDSbXcjZKsowlBvuTZa4rvB5ANbvvqvGozOSN1mpvqnJUdg11zSSBkqmkb9yLLliC6RA/+37n1VMT78/hBAFiYF5HDKspmEZpF5y1R1AAAbnRx9mVJx8OD6PQtQ8DkNwsml4IKFSyIKtj8ViMV9MABSe3IoGoW+pEOVxL6F+QERGKTs9AXn5byjmz/IzM6XiyanV+PtCG2MdLJyOqmCTCv2jUj4mMJ8/O8sXZ4pFCNI0ArFOvJVPMcnNl/OPxSSF0o/FfOmilsqFWP1DydM9Cxd9wemHfKLCErx4dnJqN/z6cJxs2kmsSSOFvHY0k+hAqfAsf7yV8lCfc9nmNuyhuKLevPCDrWMQkuTEUil/VjqqpW1bYC2EM331U0y+X4NMmk+aKqTC/HHKIJU+5MMX2FE34wV+7aJ4ljgZ5oulYvHjuc3C8CuF8sR72GE6qzYogEwqR1wpDswVJQhSu3L0SiHjCJP+7JianU+fLyS3Erg4+vxpJ/ltLZ1KT4xU9/68fy6pxdjaOj//V/WugvYZ0+1hKxTqYSEeuFBSc56wy9Ttdtmscj2rdeLQ+4d0q+6cHwSBPMTvE/TpQrndSX6vMPQWDf0qAoUPw9d2AhWg1nUUU5tw1rmuwW80GjNCV4g297iUE7cSloThYZLC/3d1j3+Nxo0ZoeU5GG1dfhWj1wiCsAsoMUqd8Glv1STL2cj0Dwm5ucGjrcI4YSdX8hiWr7XVPhyZ/iGwM1wghnISzZRKkhXKD0ej0B22mGQMGbGtv/Uip3sugyuy8FCJduA0GPq4Csol2cjcmCHkWYaGFYOJymW1dO7cCPjQFKTeukGh8t3hUmZ5BHxoeBzW+FhhQXPkyo0RMBTUzaYy/LaNTtD2TMtRjK5RvbkhI828oaR/ggi/G1M46lTBLHZbTIkKv38I0r2ukWvFeBIo9JPNHHILGBivuewKKkubn7KgabKSTcPYbW6ae4Ts9lqEo5700RszgEXN8odz8+mDdJCmnRO7NhVyB06p0Gr5IwN9TfchofYPCdPtF+am7SgNaWpT5DAVTkGTRzmzvf5pXqcQs38ovKJFg2v7YO+qbgUFkz5a+Q2T+ZJO4bz1Z69MyPLlxo9VoWdBJ1AGqaVCdShAqkG9f0hrmdV0LxHyAQcNa4jb++pMenm7laVly9poRwxTzcKJR7dA2H72+iUU3lUEs7pyyzpIJbrLajlO/1DonO9UUMqfpQlTjKNEJypG7uhuK/Psqy2hr/4Q7x9qaHdz7dOf/M6OrjZlzR8lwWCV5h6h9PcEuroFBtIZTUclLyRNdhCm+s8bfv+QtGmhmVPSXEs7Sa/nmqqf12w2hz9fCHMxnE4h+pZhDKHfQ7P4BL59h7o0w2nKMEgQg/RsKd6AJNAcV99L4ChGMEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEFg8R/gitPa/UdJSgAAAABJRU5ErkJggg==";

    function NM() {
        const t = [{
            image: dM,
            link: "https://x.com/zeroxgpu",
            heading: "0xgpu",
            para: "Empowering Crypto for next-gen AI Revolution and integration. #0xG"
        }, {
            image: hM,
            link: "https://x.com/Fuxionlabs",
            heading: "Fuxion Labs",
            para: "Your unified gateway to a connected Web3 future."
        }, {
            image: pM,
            link: "https://x.com/Hash_Rent",
            heading: "Hash Rent",
            para: "Platform for the crypto industry creates a decentralized network where GPU Power can be shared and rented."
        }, {
            image: mM,
            link: "https://x.com/Bank_AIETH",
            heading: "BANK AI",
            para: "$BANK - Providing a full suite of crypto services with assistance of AI and a platform to safely launch your own token with BANKPad."
        }, {
            image: gM,
            link: "https://x.com/Agent_Layer",
            heading: "Agent Layer",
            para: "AgentLayer- A Decentralized Autonomous ai agent blockchain and network."
        }, {
            image: vM,
            link: "https://x.com/KiverseGames",
            heading: "Kiverse Games",
            para: "The official account of Kiverse Games LLC"
        }, {
            image: yM,
            link: "https://x.com/opclouds_tech",
            heading: "OpClouds",
            para: "Transforming DePIN with decentralized computing resources as a service. GPU/VM rentals, GPU Cloud mining & AI Train-to-earn."
        }, {
            image: xM,
            link: "https://x.com/artemisai_erc",
            heading: "Artemis AI ",
            para: "Artemis AI is an innovative project offering  a suite of crypto trading tools."
        }, {
            image: _M,
            link: "https://x.com/VoluMint",
            heading: "VoluMint.",
            para: "Empowering crypto projects with #AI Automated CEX/DEX #Decentralized market solutions."
        }, {
            image: CM,
            link: "https://x.com/Spectre_AI",
            heading: "Spectre AI",
            para: "Spectre AI Prediction Tools for Blockchain - USE $SPECT all-in-one AI prediction, technical & sentiment analysis bots to your advantage."
        }, {
            image: AM,
            link: "https://x.com/selfoperatingai",
            heading: "Self Operating AI",
            para: "Effortless system control: Transform your text prompts into actions with AI-powered desktop application."
        }, {
            image: kM,
            link: "https://x.com/ai_idiot",
            heading: "AI Idiot",
            para: "Chatting bot! Crafted by the peanut minds at Closed AI, I do everything a regular AI would do, just... less efficiently."
        }, {
            image: SM,
            link: "https://x.com/NodeSynapse",
            heading: "NodeSynapse",
            para: "Node SynapseNodeSynapse offers lend-and-rent nodes, RDPs, TPUs, Web3 infrastructure, web hosting and GPU computing with a unique revenue-sharing model for token holders."
        }, {
            image: wM,
            link: "https://x.com/0xNumberEth",
            heading: "0xNumbers",
            para: "0xNumber enhancs security by generating unique, non-reusable numbers, preventing the risks associated with SIM swap fraud. This method ensures each number is singular and secure, offering a safer alternative to traditional number systems."
        }, {
            image: PM,
            link: "https://x.com/trusty_fi/status/1820824195955126449",
            heading: "TrustyFi",
            para: "TrustyFi is the first Web3 review platform that rewards users for leaving verified reviews, enabling protocols to focus on product development rather than marketing. It uses blockchain-verified reviews to build trust and transparency, rewarding users with TRST tokens for their contributions. TrustyFi aims to be the leading authority on reviews, fostering a reliable and transparent environment for investors and blockchain enthusiasts."
        }, {
            image: bM,
            link: "https://x.com/zk_agi/status/1821172570474848747",
            heading: "ZkAGI",
            para: "ZkAGI is the first privacy AI DePIN, integrating advanced technologies like artificial intelligence (AI) and blockchain. It’s a privacy-centric system that lets users and businesses leverage powerful AI capabilities securely, ensuring personal data remains protected. "
        }, {
            image: TM,
            link: "https://x.com/arc_algorithmic/status/1820731666458878012",
            heading: "ARC",
            para: "ARC is pioneeringly applied in the Web3 financial field. Through smart contract technology and automated yield prediction, it enables global license-free financial product spread hunting, optimizes asset yields, and ensures optimal platform returns."
        }, {
            image: EM,
            link: "https://x.com/arc_algorithmic/status/1820731666458878012",
            heading: "Bingo Box",
            para: "Bingo Box: A decentralized gaming platform ensuring fairness, sharing, and profit. Featuring classic games like Super Spin, Mystery Box, and Blind Box Battles. Join us to drive the future of Web3 and gaming!"
        }, {
            image: jM,
            link: "#",
            heading: "AssetLink",
            para: `🔮 AssetLink is an innovative multichain protocol leveraging blockchain technology to revolutionize real world assets tokenization, starting with real estate. It offers a secure, transparent, and efficient way for users to engage in real estate tokenization, enabling fractional ownership of property assets. 

      🙌 By democratizing access to real estate investments, AssetLink provides investors with opportunities for diversification, liquidity, and potential income generation, making it easier than ever to invest in the real estate market across the globe.`
        }, {
            image: MM,
            link: "#",
            heading: "Jup.bot",
            para: `⚡ Jup.bot is the ultimate Telegram trading bot on Solana that enables easily buy, sell, and store tokens directly from your Telegram app. It also helps explore Solana gems with AI-curated collections and execute trades faster than ever with direct connections to Jupiter DEX. 🚀 🌍❤
`
        }, {
            image: RM,
            link: "https://apeterminal.io",
            heading: "Ape Terminal",
            para: `Ape Terminal is Web3's most liquid primary market, connected to over $1.7B+ assets and servicing more than 500,000+ customers. We connect users with the most promising startups in crypto.
`
        }];
        return m.jsxs("section", {
            className: " flex flex-col justify-center items-center mt-[150px]",
            children: [m.jsxs("p", {
                className: "max-w-[650px] text-3xl font-bold text-center px-3 -650:text-[18px] -650:leading-[130%]",
                children: ["Below are our first innovators  —  pioneers, brave and curious. If you want to join them, Email", " ", m.jsx("span", {
                    className: "purple-gradient-text ",
                    children: "contact@microgpt.io"
                })]
            }), m.jsx("div", {
                className: "justify-center justify-items-center w-full innovators-cards-grid items-start gap-5 -768:gap-2 flex-wrap px-5 -768:px-3 mt-[50px] max-w-[1300px] mx-auto",
                children: t.reverse().map((e, r) => {
                    let n = 150;

                    function i(s) {
                        let o = s.currentTarget,
                            a = s.currentTarget.parentElement.querySelector("a").querySelector(".card-para"),
                            l = e.para.slice(0, n) + "...";
                        o.classList.contains("has-more") ? (a.textContent = l, o.textContent = "Read More", o.classList.remove("has-more")) : (a.textContent = e.para, o.textContent = "See Less", o.classList.add("has-more"))
                    }
                    return m.jsxs("div", {
                        className: "innovator-card flex flex-col items-start text-white gap-4 pb-6 -768:pb-[13px] -768:gap-2 p-3 -768:p-[6px] bg-white bg-opacity-5 rounded-3xl -768:rounded-xl max-w-[285px] -768:max-w-[169px] min-h-[380px] -768:min-h-[250px] ",
                        children: [m.jsxs("a", {
                            href: e.link,
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className: "innovator-card flex flex-col items-start gap-4",
                            children: [m.jsx("div", {
                                className: "overflow-hidden h-[188px] -768:h-[113px] rounded-xl flex justify-center items-center w-full",
                                children: m.jsx("img", {
                                    src: e.image,
                                    className: "hover:scale-110 duration-300 ease-in-out object-fit h-full w-full",
                                    alt: ""
                                })
                            }), m.jsx("p", {
                                className: "font-bold text-2xl -768:text-base",
                                children: e.heading
                            }), m.jsx("p", {
                                className: "text-base -768:text-xs text-white text-opacity-70 card-para",
                                children: e.para.slice(0, n) + "..."
                            })]
                        }, r), e.para.length > n && m.jsx("button", {
                            onClick: i,
                            children: "Read More"
                        })]
                    })
                })
            })]
        })
    }

    function LM() {
        return m.jsxs("main", {
            className: "text-white",
            children: [m.jsx(M8, {}), m.jsx(cM, {}), m.jsx(NM, {}), m.jsx(fM, {}), m.jsx(J6, {})]
        })
    }

    function e4(t, e, r) {
        return Math.max(t, Math.min(e, r))
    }
    class OM {
        advance(e) {
            var a;
            if (!this.isRunning) return;
            let r = !1;
            if (this.lerp) this.value = (n = this.value, i = this.to, s = 60 * this.lerp, o = e, function(l, u, c) {
                return (1 - c) * l + c * u
            }(n, i, 1 - Math.exp(-s * o))), Math.round(this.value) === this.to && (this.value = this.to, r = !0);
            else {
                this.currentTime += e;
                const l = e4(0, this.currentTime / this.duration, 1);
                r = l >= 1;
                const u = r ? 1 : this.easing(l);
                this.value = this.from + (this.to - this.from) * u
            }
            var n, i, s, o;
            (a = this.onUpdate) == null || a.call(this, this.value, r), r && this.stop()
        }
        stop() {
            this.isRunning = !1
        }
        fromTo(e, r, {
            lerp: n = .1,
            duration: i = 1,
            easing: s = l => l,
            onStart: o,
            onUpdate: a
        }) {
            this.from = this.value = e, this.to = r, this.lerp = n, this.duration = i, this.easing = s, this.currentTime = 0, this.isRunning = !0, o == null || o(), this.onUpdate = a
        }
    }
    class zM {
        constructor({
            wrapper: e,
            content: r,
            autoResize: n = !0,
            debounce: i = 250
        } = {}) {
            xn(this, "resize", () => {
                this.onWrapperResize(), this.onContentResize()
            });
            xn(this, "onWrapperResize", () => {
                this.wrapper === window ? (this.width = window.innerWidth, this.height = window.innerHeight) : (this.width = this.wrapper.clientWidth, this.height = this.wrapper.clientHeight)
            });
            xn(this, "onContentResize", () => {
                this.wrapper === window ? (this.scrollHeight = this.content.scrollHeight, this.scrollWidth = this.content.scrollWidth) : (this.scrollHeight = this.wrapper.scrollHeight, this.scrollWidth = this.wrapper.scrollWidth)
            });
            this.wrapper = e, this.content = r, n && (this.debouncedResize = function(s, o) {
                let a;
                return function() {
                    let l = arguments,
                        u = this;
                    clearTimeout(a), a = setTimeout(function() {
                        s.apply(u, l)
                    }, o)
                }
            }(this.resize, i), this.wrapper === window ? window.addEventListener("resize", this.debouncedResize, !1) : (this.wrapperResizeObserver = new ResizeObserver(this.debouncedResize), this.wrapperResizeObserver.observe(this.wrapper)), this.contentResizeObserver = new ResizeObserver(this.debouncedResize), this.contentResizeObserver.observe(this.content)), this.resize()
        }
        destroy() {
            var e, r;
            (e = this.wrapperResizeObserver) == null || e.disconnect(), (r = this.contentResizeObserver) == null || r.disconnect(), window.removeEventListener("resize", this.debouncedResize, !1)
        }
        get limit() {
            return {
                x: this.scrollWidth - this.width,
                y: this.scrollHeight - this.height
            }
        }
    }
    class t4 {
        constructor() {
            this.events = {}
        }
        emit(e, ...r) {
            let n = this.events[e] || [];
            for (let i = 0, s = n.length; i < s; i++) n[i](...r)
        }
        on(e, r) {
            var n;
            return (n = this.events[e]) != null && n.push(r) || (this.events[e] = [r]), () => {
                var i;
                this.events[e] = (i = this.events[e]) == null ? void 0 : i.filter(s => r !== s)
            }
        }
        off(e, r) {
            var n;
            this.events[e] = (n = this.events[e]) == null ? void 0 : n.filter(i => r !== i)
        }
        destroy() {
            this.events = {}
        }
    }
    const J3 = 100 / 6;
    class IM {
        constructor(e, {
            wheelMultiplier: r = 1,
            touchMultiplier: n = 1
        }) {
            xn(this, "onTouchStart", e => {
                const {
                    clientX: r,
                    clientY: n
                } = e.targetTouches ? e.targetTouches[0] : e;
                this.touchStart.x = r, this.touchStart.y = n, this.lastDelta = {
                    x: 0,
                    y: 0
                }, this.emitter.emit("scroll", {
                    deltaX: 0,
                    deltaY: 0,
                    event: e
                })
            });
            xn(this, "onTouchMove", e => {
                const {
                    clientX: r,
                    clientY: n
                } = e.targetTouches ? e.targetTouches[0] : e, i = -(r - this.touchStart.x) * this.touchMultiplier, s = -(n - this.touchStart.y) * this.touchMultiplier;
                this.touchStart.x = r, this.touchStart.y = n, this.lastDelta = {
                    x: i,
                    y: s
                }, this.emitter.emit("scroll", {
                    deltaX: i,
                    deltaY: s,
                    event: e
                })
            });
            xn(this, "onTouchEnd", e => {
                this.emitter.emit("scroll", {
                    deltaX: this.lastDelta.x,
                    deltaY: this.lastDelta.y,
                    event: e
                })
            });
            xn(this, "onWheel", e => {
                let {
                    deltaX: r,
                    deltaY: n,
                    deltaMode: i
                } = e;
                r *= i === 1 ? J3 : i === 2 ? this.windowWidth : 1, n *= i === 1 ? J3 : i === 2 ? this.windowHeight : 1, r *= this.wheelMultiplier, n *= this.wheelMultiplier, this.emitter.emit("scroll", {
                    deltaX: r,
                    deltaY: n,
                    event: e
                })
            });
            xn(this, "onWindowResize", () => {
                this.windowWidth = window.innerWidth, this.windowHeight = window.innerHeight
            });
            this.element = e, this.wheelMultiplier = r, this.touchMultiplier = n, this.touchStart = {
                x: null,
                y: null
            }, this.emitter = new t4, window.addEventListener("resize", this.onWindowResize, !1), this.onWindowResize(), this.element.addEventListener("wheel", this.onWheel, {
                passive: !1
            }), this.element.addEventListener("touchstart", this.onTouchStart, {
                passive: !1
            }), this.element.addEventListener("touchmove", this.onTouchMove, {
                passive: !1
            }), this.element.addEventListener("touchend", this.onTouchEnd, {
                passive: !1
            })
        }
        on(e, r) {
            return this.emitter.on(e, r)
        }
        destroy() {
            this.emitter.destroy(), window.removeEventListener("resize", this.onWindowResize, !1), this.element.removeEventListener("wheel", this.onWheel, {
                passive: !1
            }), this.element.removeEventListener("touchstart", this.onTouchStart, {
                passive: !1
            }), this.element.removeEventListener("touchmove", this.onTouchMove, {
                passive: !1
            }), this.element.removeEventListener("touchend", this.onTouchEnd, {
                passive: !1
            })
        }
    }
    class DM {
        constructor({
            wrapper: e = window,
            content: r = document.documentElement,
            wheelEventsTarget: n = e,
            eventsTarget: i = n,
            smoothWheel: s = !0,
            syncTouch: o = !1,
            syncTouchLerp: a = .075,
            touchInertiaMultiplier: l = 35,
            duration: u,
            easing: c = x => Math.min(1, 1.001 - Math.pow(2, -10 * x)),
            lerp: f = !u && .1,
            infinite: d = !1,
            orientation: h = "vertical",
            gestureOrientation: y = "vertical",
            touchMultiplier: g = 1,
            wheelMultiplier: w = 1,
            autoResize: v = !0,
            __experimental__naiveDimensions: p = !1
        } = {}) {
            this.__isSmooth = !1, this.__isScrolling = !1, this.__isStopped = !1, this.__isLocked = !1, this.onVirtualScroll = ({
                deltaX: x,
                deltaY: _,
                event: C
            }) => {
                if (C.ctrlKey) return;
                const k = C.type.includes("touch"),
                    S = C.type.includes("wheel");
                if (this.options.syncTouch && k && C.type === "touchstart" && !this.isStopped && !this.isLocked) return void this.reset();
                const P = x === 0 && _ === 0,
                    T = this.options.gestureOrientation === "vertical" && _ === 0 || this.options.gestureOrientation === "horizontal" && x === 0;
                if (P || T) return;
                let b = C.composedPath();
                if (b = b.slice(0, b.indexOf(this.rootElement)), b.find(V => {
                        var X, W, B, R, z;
                        return ((X = V.hasAttribute) === null || X === void 0 ? void 0 : X.call(V, "data-lenis-prevent")) || k && ((W = V.hasAttribute) === null || W === void 0 ? void 0 : W.call(V, "data-lenis-prevent-touch")) || S && ((B = V.hasAttribute) === null || B === void 0 ? void 0 : B.call(V, "data-lenis-prevent-wheel")) || ((R = V.classList) === null || R === void 0 ? void 0 : R.contains("lenis")) && !(!((z = V.classList) === null || z === void 0) && z.contains("lenis-stopped"))
                    })) return;
                if (this.isStopped || this.isLocked) return void C.preventDefault();
                if (this.isSmooth = this.options.syncTouch && k || this.options.smoothWheel && S, !this.isSmooth) return this.isScrolling = !1, void this.animate.stop();
                C.preventDefault();
                let I = _;
                this.options.gestureOrientation === "both" ? I = Math.abs(_) > Math.abs(x) ? _ : x : this.options.gestureOrientation === "horizontal" && (I = x);
                const L = k && this.options.syncTouch,
                    H = k && C.type === "touchend" && Math.abs(I) > 5;
                H && (I = this.velocity * this.options.touchInertiaMultiplier), this.scrollTo(this.targetScroll + I, Object.assign({
                    programmatic: !1
                }, L ? {
                    lerp: H ? this.options.syncTouchLerp : 1
                } : {
                    lerp: this.options.lerp,
                    duration: this.options.duration,
                    easing: this.options.easing
                }))
            }, this.onNativeScroll = () => {
                if (!this.__preventNextScrollEvent && !this.isScrolling) {
                    const x = this.animatedScroll;
                    this.animatedScroll = this.targetScroll = this.actualScroll, this.velocity = 0, this.direction = Math.sign(this.animatedScroll - x), this.emit()
                }
            }, window.lenisVersion = "1.0.42", e !== document.documentElement && e !== document.body || (e = window), this.options = {
                wrapper: e,
                content: r,
                wheelEventsTarget: n,
                eventsTarget: i,
                smoothWheel: s,
                syncTouch: o,
                syncTouchLerp: a,
                touchInertiaMultiplier: l,
                duration: u,
                easing: c,
                lerp: f,
                infinite: d,
                gestureOrientation: y,
                orientation: h,
                touchMultiplier: g,
                wheelMultiplier: w,
                autoResize: v,
                __experimental__naiveDimensions: p
            }, this.animate = new OM, this.emitter = new t4, this.dimensions = new zM({
                wrapper: e,
                content: r,
                autoResize: v
            }), this.toggleClassName("lenis", !0), this.velocity = 0, this.isLocked = !1, this.isStopped = !1, this.isSmooth = o || s, this.isScrolling = !1, this.targetScroll = this.animatedScroll = this.actualScroll, this.options.wrapper.addEventListener("scroll", this.onNativeScroll, !1), this.virtualScroll = new IM(i, {
                touchMultiplier: g,
                wheelMultiplier: w
            }), this.virtualScroll.on("scroll", this.onVirtualScroll)
        }
        destroy() {
            this.emitter.destroy(), this.options.wrapper.removeEventListener("scroll", this.onNativeScroll, !1), this.virtualScroll.destroy(), this.dimensions.destroy(), this.toggleClassName("lenis", !1), this.toggleClassName("lenis-smooth", !1), this.toggleClassName("lenis-scrolling", !1), this.toggleClassName("lenis-stopped", !1), this.toggleClassName("lenis-locked", !1)
        }
        on(e, r) {
            return this.emitter.on(e, r)
        }
        off(e, r) {
            return this.emitter.off(e, r)
        }
        setScroll(e) {
            this.isHorizontal ? this.rootElement.scrollLeft = e : this.rootElement.scrollTop = e
        }
        resize() {
            this.dimensions.resize()
        }
        emit() {
            this.emitter.emit("scroll", this)
        }
        reset() {
            this.isLocked = !1, this.isScrolling = !1, this.animatedScroll = this.targetScroll = this.actualScroll, this.velocity = 0, this.animate.stop()
        }
        start() {
            this.isStopped && (this.isStopped = !1, this.reset())
        }
        stop() {
            this.isStopped || (this.isStopped = !0, this.animate.stop(), this.reset())
        }
        raf(e) {
            const r = e - (this.time || e);
            this.time = e, this.animate.advance(.001 * r)
        }
        scrollTo(e, {
            offset: r = 0,
            immediate: n = !1,
            lock: i = !1,
            duration: s = this.options.duration,
            easing: o = this.options.easing,
            lerp: a = !s && this.options.lerp,
            onComplete: l,
            force: u = !1,
            programmatic: c = !0
        } = {}) {
            if (!this.isStopped && !this.isLocked || u) {
                if (["top", "left", "start"].includes(e)) e = 0;
                else if (["bottom", "right", "end"].includes(e)) e = this.limit;
                else {
                    let f;
                    if (typeof e == "string" ? f = document.querySelector(e) : e != null && e.nodeType && (f = e), f) {
                        if (this.options.wrapper !== window) {
                            const h = this.options.wrapper.getBoundingClientRect();
                            r -= this.isHorizontal ? h.left : h.top
                        }
                        const d = f.getBoundingClientRect();
                        e = (this.isHorizontal ? d.left : d.top) + this.animatedScroll
                    }
                }
                if (typeof e == "number") {
                    if (e += r, e = Math.round(e), this.options.infinite ? c && (this.targetScroll = this.animatedScroll = this.scroll) : e = e4(0, e, this.limit), n) return this.animatedScroll = this.targetScroll = e, this.setScroll(this.scroll), this.reset(), void(l == null || l(this));
                    if (!c) {
                        if (e === this.targetScroll) return;
                        this.targetScroll = e
                    }
                    this.animate.fromTo(this.animatedScroll, e, {
                        duration: s,
                        easing: o,
                        lerp: a,
                        onStart: () => {
                            i && (this.isLocked = !0), this.isScrolling = !0
                        },
                        onUpdate: (f, d) => {
                            this.isScrolling = !0, this.velocity = f - this.animatedScroll, this.direction = Math.sign(this.velocity), this.animatedScroll = f, this.setScroll(this.scroll), c && (this.targetScroll = f), d || this.emit(), d && (this.reset(), this.emit(), l == null || l(this), this.__preventNextScrollEvent = !0, requestAnimationFrame(() => {
                                delete this.__preventNextScrollEvent
                            }))
                        }
                    })
                }
            }
        }
        get rootElement() {
            return this.options.wrapper === window ? document.documentElement : this.options.wrapper
        }
        get limit() {
            return this.options.__experimental__naiveDimensions ? this.isHorizontal ? this.rootElement.scrollWidth - this.rootElement.clientWidth : this.rootElement.scrollHeight - this.rootElement.clientHeight : this.dimensions.limit[this.isHorizontal ? "x" : "y"]
        }
        get isHorizontal() {
            return this.options.orientation === "horizontal"
        }
        get actualScroll() {
            return this.isHorizontal ? this.rootElement.scrollLeft : this.rootElement.scrollTop
        }
        get scroll() {
            return this.options.infinite ? (e = this.animatedScroll, r = this.limit, (e % r + r) % r) : this.animatedScroll;
            var e, r
        }
        get progress() {
            return this.limit === 0 ? 1 : this.scroll / this.limit
        }
        get isSmooth() {
            return this.__isSmooth
        }
        set isSmooth(e) {
            this.__isSmooth !== e && (this.__isSmooth = e, this.toggleClassName("lenis-smooth", e))
        }
        get isScrolling() {
            return this.__isScrolling
        }
        set isScrolling(e) {
            this.__isScrolling !== e && (this.__isScrolling = e, this.toggleClassName("lenis-scrolling", e))
        }
        get isStopped() {
            return this.__isStopped
        }
        set isStopped(e) {
            this.__isStopped !== e && (this.__isStopped = e, this.toggleClassName("lenis-stopped", e))
        }
        get isLocked() {
            return this.__isLocked
        }
        set isLocked(e) {
            this.__isLocked !== e && (this.__isLocked = e, this.toggleClassName("lenis-locked", e))
        }
        get className() {
            let e = "lenis";
            return this.isStopped && (e += " lenis-stopped"), this.isLocked && (e += " lenis-locked"), this.isScrolling && (e += " lenis-scrolling"), this.isSmooth && (e += " lenis-smooth"), e
        }
        toggleClassName(e, r) {
            this.rootElement.classList.toggle(e, r), this.emitter.emit("className change", this)
        }
    }

    function FM() {
        return M.useEffect(() => {
            const t = new DM({
                    duration: 1.2,
                    easing: n => Math.min(1, 1.001 - Math.pow(2, -10 * n))
                }),
                e = document.querySelectorAll("iframe");
            t.on("scroll", ({
                velocity: n
            }) => {
                Math.abs(n) > .2 ? e.forEach(i => {
                    i.classList.add("active")
                }) : Math.abs(n) < .2 && e.forEach(i => {
                    i.classList.remove("active")
                })
            });

            function r(n) {
                t.raf(n), requestAnimationFrame(r)
            }
            requestAnimationFrame(r)
        }, []), m.jsx("main", {
            className: "",
            children: m.jsxs(Ny, {
                children: [m.jsx(Nf, {
                    path: "/",
                    element: m.jsx(oM, {})
                }), m.jsx(Nf, {
                    path: "/innovation",
                    element: m.jsx(LM, {})
                })]
            })
        })
    }

    function BM() {
        const {
            pathname: t
        } = ji();
        M.useEffect(() => {
            window.scrollTo(0, 0)
        }, [t])
    }
    Cc.createRoot(document.getElementById("root")).render(m.jsx(Mr.StrictMode, {
        children: m.jsxs($y, {
            children: [m.jsx(BM, {}), m.jsx(FM, {})]
        })
    }))
});
export default $M();