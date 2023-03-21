var zh = Object.defineProperty;
var Kt = (i,r,t)=>(typeof r != "symbol" && (r += ""),
r in i ? zh(i, r, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: t
}) : i[r] = t);
var Or = typeof globalThis != "undefined" ? globalThis : typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : {};
function Ke(i, r, t) {
    return t = {
        path: r,
        exports: {},
        require: function(e, n) {
            return Vh(e, n == null ? t.path : n)
        }
    },
    i(t, t.exports),
    t.exports
}
function Vh() {
    throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")
}
var Yh = Ke(function(i, r) {
    (function(t) {
        var e = t.Promise
          , n = e && "resolve"in e && "reject"in e && "all"in e && "race"in e && function() {
            var _;
            return new e(function(C) {
                _ = C
            }
            ),
            typeof _ == "function"
        }();
        r ? (r.Promise = n ? e : P,
        r.Polyfill = P) : n || (t.Promise = P);
        var s = "pending"
          , a = "sealed"
          , o = "fulfilled"
          , h = "rejected"
          , u = function() {};
        function l(_) {
            return Object.prototype.toString.call(_) === "[object Array]"
        }
        var f = typeof setImmediate != "undefined" ? setImmediate : setTimeout, c = [], d;
        function p() {
            for (var _ = 0; _ < c.length; _++)
                c[_][0](c[_][1]);
            c = [],
            d = !1
        }
        function v(_, C) {
            c.push([_, C]),
            d || (d = !0,
            f(p, 0))
        }
        function m(_, C) {
            function O(B) {
                y(C, B)
            }
            function X(B) {
                x(C, B)
            }
            try {
                _(O, X)
            } catch (B) {
                X(B)
            }
        }
        function g(_) {
            var C = _.owner
              , O = C.state_
              , X = C.data_
              , B = _[O]
              , A = _.then;
            if (typeof B == "function") {
                O = o;
                try {
                    X = B(X)
                } catch (F) {
                    x(A, F)
                }
            }
            w(A, X) || (O === o && y(A, X),
            O === h && x(A, X))
        }
        function w(_, C) {
            var O;
            try {
                if (_ === C)
                    throw new TypeError("A promises callback cannot return that same promise.");
                if (C && (typeof C == "function" || typeof C == "object")) {
                    var X = C.then;
                    if (typeof X == "function")
                        return X.call(C, function(B) {
                            O || (O = !0,
                            C !== B ? y(_, B) : I(_, B))
                        }, function(B) {
                            O || (O = !0,
                            x(_, B))
                        }),
                        !0
                }
            } catch (B) {
                return O || x(_, B),
                !0
            }
            return !1
        }
        function y(_, C) {
            (_ === C || !w(_, C)) && I(_, C)
        }
        function I(_, C) {
            _.state_ === s && (_.state_ = a,
            _.data_ = C,
            v(D, _))
        }
        function x(_, C) {
            _.state_ === s && (_.state_ = a,
            _.data_ = C,
            v(U, _))
        }
        function b(_) {
            var C = _.then_;
            _.then_ = void 0;
            for (var O = 0; O < C.length; O++)
                g(C[O])
        }
        function D(_) {
            _.state_ = o,
            b(_)
        }
        function U(_) {
            _.state_ = h,
            b(_)
        }
        function P(_) {
            if (typeof _ != "function")
                throw new TypeError("Promise constructor takes a function argument");
            if (!(this instanceof P))
                throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");
            this.then_ = [],
            m(_, this)
        }
        P.prototype = {
            constructor: P,
            state_: s,
            then_: null,
            data_: void 0,
            then: function(_, C) {
                var O = {
                    owner: this,
                    then: new this.constructor(u),
                    fulfilled: _,
                    rejected: C
                };
                return this.state_ === o || this.state_ === h ? v(g, O) : this.then_.push(O),
                O.then
            },
            catch: function(_) {
                return this.then(null, _)
            }
        },
        P.all = function(_) {
            var C = this;
            if (!l(_))
                throw new TypeError("You must pass an array to Promise.all().");
            return new C(function(O, X) {
                var B = []
                  , A = 0;
                function F(Yt) {
                    return A++,
                    function(Wt) {
                        B[Yt] = Wt,
                        --A || O(B)
                    }
                }
                for (var E = 0, lt; E < _.length; E++)
                    lt = _[E],
                    lt && typeof lt.then == "function" ? lt.then(F(E), X) : B[E] = lt;
                A || O(B)
            }
            )
        }
        ,
        P.race = function(_) {
            var C = this;
            if (!l(_))
                throw new TypeError("You must pass an array to Promise.race().");
            return new C(function(O, X) {
                for (var B = 0, A; B < _.length; B++)
                    A = _[B],
                    A && typeof A.then == "function" ? A.then(O, X) : O(A)
            }
            )
        }
        ,
        P.resolve = function(_) {
            var C = this;
            return _ && typeof _ == "object" && _.constructor === C ? _ : new C(function(O) {
                O(_)
            }
            )
        }
        ,
        P.reject = function(_) {
            var C = this;
            return new C(function(O, X) {
                X(_)
            }
            )
        }
    }
    )(typeof window != "undefined" ? window : typeof Or != "undefined" ? Or : typeof self != "undefined" ? self : Or)
});
var Zs = Object.getOwnPropertySymbols
  , Wh = Object.prototype.hasOwnProperty
  , qh = Object.prototype.propertyIsEnumerable;
function $h(i) {
    if (i == null)
        throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(i)
}
function Zh() {
    try {
        if (!Object.assign)
            return !1;
        var i = new String("abc");
        if (i[5] = "de",
        Object.getOwnPropertyNames(i)[0] === "5")
            return !1;
        for (var r = {}, t = 0; t < 10; t++)
            r["_" + String.fromCharCode(t)] = t;
        var e = Object.getOwnPropertyNames(r).map(function(s) {
            return r[s]
        });
        if (e.join("") !== "0123456789")
            return !1;
        var n = {};
        return "abcdefghijklmnopqrst".split("").forEach(function(s) {
            n[s] = s
        }),
        Object.keys(Object.assign({}, n)).join("") === "abcdefghijklmnopqrst"
    } catch (s) {
        return !1
    }
}
var Kh = Zh() ? Object.assign : function(i, r) {
    for (var t, e = $h(i), n, s = 1; s < arguments.length; s++) {
        t = Object(arguments[s]);
        for (var a in t)
            Wh.call(t, a) && (e[a] = t[a]);
        if (Zs) {
            n = Zs(t);
            for (var o = 0; o < n.length; o++)
                qh.call(t, n[o]) && (e[n[o]] = t[n[o]])
        }
    }
    return e
}
;
window.Promise || (window.Promise = Yh.Polyfill);
Object.assign || (Object.assign = Kh);
var Jh = 16;
Date.now && Date.prototype.getTime || (Date.now = function() {
    return new Date().getTime()
}
);
window.performance && window.performance.now || (Ks = Date.now(),
window.performance || (window.performance = {}),
window.performance.now = function() {
    return Date.now() - Ks
}
);
var Ks, xi = Date.now(), Js = ["ms", "moz", "webkit", "o"];
for (var bi = 0; bi < Js.length && !window.requestAnimationFrame; ++bi)
    Rr = Js[bi],
    window.requestAnimationFrame = window[Rr + "RequestAnimationFrame"],
    window.cancelAnimationFrame = window[Rr + "CancelAnimationFrame"] || window[Rr + "CancelRequestAnimationFrame"];
var Rr;
window.requestAnimationFrame || (window.requestAnimationFrame = function(i) {
    if (typeof i != "function")
        throw new TypeError(i + "is not a function");
    var r = Date.now()
      , t = Jh + xi - r;
    return t < 0 && (t = 0),
    xi = r,
    window.setTimeout(function() {
        xi = Date.now(),
        i(performance.now())
    }, t)
}
);
window.cancelAnimationFrame || (window.cancelAnimationFrame = function(i) {
    return clearTimeout(i)
}
);
Math.sign || (Math.sign = function(r) {
    return r = Number(r),
    r === 0 || isNaN(r) ? r : r > 0 ? 1 : -1
}
);
Number.isInteger || (Number.isInteger = function(r) {
    return typeof r == "number" && isFinite(r) && Math.floor(r) === r
}
);
window.ArrayBuffer || (window.ArrayBuffer = Array);
window.Float32Array || (window.Float32Array = Array);
window.Uint32Array || (window.Uint32Array = Array);
window.Uint16Array || (window.Uint16Array = Array);
window.Uint8Array || (window.Uint8Array = Array);
window.Int32Array || (window.Int32Array = Array);
var Ti = /iPhone/i
  , Qs = /iPod/i
  , ta = /iPad/i
  , ea = /\biOS-universal(?:.+)Mac\b/i
  , wi = /\bAndroid(?:.+)Mobile\b/i
  , ra = /Android/i
  , Ee = /(?:SD4930UR|\bSilk(?:.+)Mobile\b)/i
  , Mr = /Silk/i
  , Bt = /Windows Phone/i
  , ia = /\bWindows(?:.+)ARM\b/i
  , na = /BlackBerry/i
  , sa = /BB10/i
  , aa = /Opera Mini/i
  , oa = /\b(CriOS|Chrome)(?:.+)Mobile/i
  , ha = /Mobile(?:.+)Firefox\b/i
  , ua = function(i) {
    return typeof i != "undefined" && i.platform === "MacIntel" && typeof i.maxTouchPoints == "number" && i.maxTouchPoints > 1 && typeof MSStream == "undefined"
};
function Qh(i) {
    return function(r) {
        return r.test(i)
    }
}
function tu(i) {
    var r = {
        userAgent: "",
        platform: "",
        maxTouchPoints: 0
    };
    !i && typeof navigator != "undefined" ? r = {
        userAgent: navigator.userAgent,
        platform: navigator.platform,
        maxTouchPoints: navigator.maxTouchPoints || 0
    } : typeof i == "string" ? r.userAgent = i : i && i.userAgent && (r = {
        userAgent: i.userAgent,
        platform: i.platform,
        maxTouchPoints: i.maxTouchPoints || 0
    });
    var t = r.userAgent
      , e = t.split("[FBAN");
    typeof e[1] != "undefined" && (t = e[0]),
    e = t.split("Twitter"),
    typeof e[1] != "undefined" && (t = e[0]);
    var n = Qh(t)
      , s = {
        apple: {
            phone: n(Ti) && !n(Bt),
            ipod: n(Qs),
            tablet: !n(Ti) && (n(ta) || ua(r)) && !n(Bt),
            universal: n(ea),
            device: (n(Ti) || n(Qs) || n(ta) || n(ea) || ua(r)) && !n(Bt)
        },
        amazon: {
            phone: n(Ee),
            tablet: !n(Ee) && n(Mr),
            device: n(Ee) || n(Mr)
        },
        android: {
            phone: !n(Bt) && n(Ee) || !n(Bt) && n(wi),
            tablet: !n(Bt) && !n(Ee) && !n(wi) && (n(Mr) || n(ra)),
            device: !n(Bt) && (n(Ee) || n(Mr) || n(wi) || n(ra)) || n(/\bokhttp\b/i)
        },
        windows: {
            phone: n(Bt),
            tablet: n(ia),
            device: n(Bt) || n(ia)
        },
        other: {
            blackberry: n(na),
            blackberry10: n(sa),
            opera: n(aa),
            firefox: n(ha),
            chrome: n(oa),
            device: n(na) || n(sa) || n(aa) || n(ha) || n(oa)
        },
        any: !1,
        phone: !1,
        tablet: !1
    };
    return s.any = s.apple.device || s.android.device || s.windows.device || s.other.device,
    s.phone = s.apple.phone || s.android.phone || s.windows.phone,
    s.tablet = s.apple.tablet || s.android.tablet || s.windows.tablet,
    s
}
var ct = tu(window.navigator);
function eu(i) {
    var r = !0;
    if (ct.tablet || ct.phone) {
        if (ct.apple.device) {
            var t = navigator.userAgent.match(/OS (\d+)_(\d+)?/);
            if (t) {
                var e = parseInt(t[1], 10);
                e < 11 && (r = !1)
            }
        }
        if (ct.android.device) {
            var t = navigator.userAgent.match(/Android\s([0-9.]*)/);
            if (t) {
                var e = parseInt(t[1], 10);
                e < 7 && (r = !1)
            }
        }
    }
    return r ? i : 4
}
function ru() {
    return !ct.apple.device
}
var R = {
    MIPMAP_TEXTURES: 1,
    ANISOTROPIC_LEVEL: 0,
    RESOLUTION: 1,
    FILTER_RESOLUTION: 1,
    SPRITE_MAX_TEXTURES: eu(32),
    SPRITE_BATCH_SIZE: 4096,
    RENDER_OPTIONS: {
        view: null,
        antialias: !1,
        autoDensity: !1,
        transparent: !1,
        backgroundColor: 0,
        clearBeforeRender: !0,
        preserveDrawingBuffer: !1,
        width: 800,
        height: 600,
        legacy: !1
    },
    GC_MODE: 0,
    GC_MAX_IDLE: 60 * 60,
    GC_MAX_CHECK_COUNT: 60 * 10,
    WRAP_MODE: 33071,
    SCALE_MODE: 1,
    PRECISION_VERTEX: "highp",
    PRECISION_FRAGMENT: ct.apple.device ? "highp" : "mediump",
    CAN_UPLOAD_SAME_BUFFER: ru(),
    CREATE_IMAGE_BITMAP: !1,
    ROUND_PIXELS: !1
}
  , Ae = Ke(function(i) {
    var r = Object.prototype.hasOwnProperty
      , t = "~";
    function e() {}
    Object.create && (e.prototype = Object.create(null),
    new e().__proto__ || (t = !1));
    function n(h, u, l) {
        this.fn = h,
        this.context = u,
        this.once = l || !1
    }
    function s(h, u, l, f, c) {
        if (typeof l != "function")
            throw new TypeError("The listener must be a function");
        var d = new n(l,f || h,c)
          , p = t ? t + u : u;
        return h._events[p] ? h._events[p].fn ? h._events[p] = [h._events[p], d] : h._events[p].push(d) : (h._events[p] = d,
        h._eventsCount++),
        h
    }
    function a(h, u) {
        --h._eventsCount == 0 ? h._events = new e : delete h._events[u]
    }
    function o() {
        this._events = new e,
        this._eventsCount = 0
    }
    o.prototype.eventNames = function() {
        var u = [], l, f;
        if (this._eventsCount === 0)
            return u;
        for (f in l = this._events)
            r.call(l, f) && u.push(t ? f.slice(1) : f);
        return Object.getOwnPropertySymbols ? u.concat(Object.getOwnPropertySymbols(l)) : u
    }
    ,
    o.prototype.listeners = function(u) {
        var l = t ? t + u : u
          , f = this._events[l];
        if (!f)
            return [];
        if (f.fn)
            return [f.fn];
        for (var c = 0, d = f.length, p = new Array(d); c < d; c++)
            p[c] = f[c].fn;
        return p
    }
    ,
    o.prototype.listenerCount = function(u) {
        var l = t ? t + u : u
          , f = this._events[l];
        return f ? f.fn ? 1 : f.length : 0
    }
    ,
    o.prototype.emit = function(u, l, f, c, d, p) {
        var v = t ? t + u : u;
        if (!this._events[v])
            return !1;
        var m = this._events[v], g = arguments.length, w, y;
        if (m.fn) {
            switch (m.once && this.removeListener(u, m.fn, void 0, !0),
            g) {
            case 1:
                return m.fn.call(m.context),
                !0;
            case 2:
                return m.fn.call(m.context, l),
                !0;
            case 3:
                return m.fn.call(m.context, l, f),
                !0;
            case 4:
                return m.fn.call(m.context, l, f, c),
                !0;
            case 5:
                return m.fn.call(m.context, l, f, c, d),
                !0;
            case 6:
                return m.fn.call(m.context, l, f, c, d, p),
                !0
            }
            for (y = 1,
            w = new Array(g - 1); y < g; y++)
                w[y - 1] = arguments[y];
            m.fn.apply(m.context, w)
        } else {
            var I = m.length, x;
            for (y = 0; y < I; y++)
                switch (m[y].once && this.removeListener(u, m[y].fn, void 0, !0),
                g) {
                case 1:
                    m[y].fn.call(m[y].context);
                    break;
                case 2:
                    m[y].fn.call(m[y].context, l);
                    break;
                case 3:
                    m[y].fn.call(m[y].context, l, f);
                    break;
                case 4:
                    m[y].fn.call(m[y].context, l, f, c);
                    break;
                default:
                    if (!w)
                        for (x = 1,
                        w = new Array(g - 1); x < g; x++)
                            w[x - 1] = arguments[x];
                    m[y].fn.apply(m[y].context, w)
                }
        }
        return !0
    }
    ,
    o.prototype.on = function(u, l, f) {
        return s(this, u, l, f, !1)
    }
    ,
    o.prototype.once = function(u, l, f) {
        return s(this, u, l, f, !0)
    }
    ,
    o.prototype.removeListener = function(u, l, f, c) {
        var d = t ? t + u : u;
        if (!this._events[d])
            return this;
        if (!l)
            return a(this, d),
            this;
        var p = this._events[d];
        if (p.fn)
            p.fn === l && (!c || p.once) && (!f || p.context === f) && a(this, d);
        else {
            for (var v = 0, m = [], g = p.length; v < g; v++)
                (p[v].fn !== l || c && !p[v].once || f && p[v].context !== f) && m.push(p[v]);
            m.length ? this._events[d] = m.length === 1 ? m[0] : m : a(this, d)
        }
        return this
    }
    ,
    o.prototype.removeAllListeners = function(u) {
        var l;
        return u ? (l = t ? t + u : u,
        this._events[l] && a(this, l)) : (this._events = new e,
        this._eventsCount = 0),
        this
    }
    ,
    o.prototype.off = o.prototype.removeListener,
    o.prototype.addListener = o.prototype.on,
    o.prefixed = t,
    o.EventEmitter = o,
    i.exports = o
})
  , Lr = Fr
  , iu = Fr;
function Fr(i, r, t) {
    t = t || 2;
    var e = r && r.length
      , n = e ? r[0] * t : i.length
      , s = la(i, 0, n, t, !0)
      , a = [];
    if (!s || s.next === s.prev)
        return a;
    var o, h, u, l, f, c, d;
    if (e && (s = nu(i, r, s, t)),
    i.length > 80 * t) {
        o = u = i[0],
        h = l = i[1];
        for (var p = t; p < n; p += t)
            f = i[p],
            c = i[p + 1],
            f < o && (o = f),
            c < h && (h = c),
            f > u && (u = f),
            c > l && (l = c);
        d = Math.max(u - o, l - h),
        d = d !== 0 ? 1 / d : 0
    }
    return Je(s, a, t, o, h, d),
    a
}
function la(i, r, t, e, n) {
    var s, a;
    if (n === Pi(i, r, t, e) > 0)
        for (s = r; s < t; s += e)
            a = fa(s, i[s], i[s + 1], a);
    else
        for (s = t - e; s >= r; s -= e)
            a = fa(s, i[s], i[s + 1], a);
    return a && Nr(a, a.next) && (Qe(a),
    a = a.next),
    a
}
function Jt(i, r) {
    if (!i)
        return i;
    r || (r = i);
    var t = i, e;
    do
        if (e = !1,
        !t.steiner && (Nr(t, t.next) || K(t.prev, t, t.next) === 0)) {
            if (Qe(t),
            t = r = t.prev,
            t === t.next)
                break;
            e = !0
        } else
            t = t.next;
    while (e || t !== r);
    return r
}
function Je(i, r, t, e, n, s, a) {
    if (!!i) {
        !a && s && uu(i, e, n, s);
        for (var o = i, h, u; i.prev !== i.next; ) {
            if (h = i.prev,
            u = i.next,
            s ? au(i, e, n, s) : su(i)) {
                r.push(h.i / t),
                r.push(i.i / t),
                r.push(u.i / t),
                Qe(i),
                i = u.next,
                o = u.next;
                continue
            }
            if (i = u,
            i === o) {
                a ? a === 1 ? (i = ou(Jt(i), r, t),
                Je(i, r, t, e, n, s, 2)) : a === 2 && hu(i, r, t, e, n, s) : Je(Jt(i), r, t, e, n, s, 1);
                break
            }
        }
    }
}
function su(i) {
    var r = i.prev
      , t = i
      , e = i.next;
    if (K(r, t, e) >= 0)
        return !1;
    for (var n = i.next.next; n !== i.prev; ) {
        if (Oe(r.x, r.y, t.x, t.y, e.x, e.y, n.x, n.y) && K(n.prev, n, n.next) >= 0)
            return !1;
        n = n.next
    }
    return !0
}
function au(i, r, t, e) {
    var n = i.prev
      , s = i
      , a = i.next;
    if (K(n, s, a) >= 0)
        return !1;
    for (var o = n.x < s.x ? n.x < a.x ? n.x : a.x : s.x < a.x ? s.x : a.x, h = n.y < s.y ? n.y < a.y ? n.y : a.y : s.y < a.y ? s.y : a.y, u = n.x > s.x ? n.x > a.x ? n.x : a.x : s.x > a.x ? s.x : a.x, l = n.y > s.y ? n.y > a.y ? n.y : a.y : s.y > a.y ? s.y : a.y, f = Ii(o, h, r, t, e), c = Ii(u, l, r, t, e), d = i.prevZ, p = i.nextZ; d && d.z >= f && p && p.z <= c; ) {
        if (d !== i.prev && d !== i.next && Oe(n.x, n.y, s.x, s.y, a.x, a.y, d.x, d.y) && K(d.prev, d, d.next) >= 0 || (d = d.prevZ,
        p !== i.prev && p !== i.next && Oe(n.x, n.y, s.x, s.y, a.x, a.y, p.x, p.y) && K(p.prev, p, p.next) >= 0))
            return !1;
        p = p.nextZ
    }
    for (; d && d.z >= f; ) {
        if (d !== i.prev && d !== i.next && Oe(n.x, n.y, s.x, s.y, a.x, a.y, d.x, d.y) && K(d.prev, d, d.next) >= 0)
            return !1;
        d = d.prevZ
    }
    for (; p && p.z <= c; ) {
        if (p !== i.prev && p !== i.next && Oe(n.x, n.y, s.x, s.y, a.x, a.y, p.x, p.y) && K(p.prev, p, p.next) >= 0)
            return !1;
        p = p.nextZ
    }
    return !0
}
function ou(i, r, t) {
    var e = i;
    do {
        var n = e.prev
          , s = e.next.next;
        !Nr(n, s) && ca(n, e, e.next, s) && tr(n, s) && tr(s, n) && (r.push(n.i / t),
        r.push(e.i / t),
        r.push(s.i / t),
        Qe(e),
        Qe(e.next),
        e = i = s),
        e = e.next
    } while (e !== i);
    return Jt(e)
}
function hu(i, r, t, e, n, s) {
    var a = i;
    do {
        for (var o = a.next.next; o !== a.prev; ) {
            if (a.i !== o.i && lu(a, o)) {
                var h = da(a, o);
                a = Jt(a, a.next),
                h = Jt(h, h.next),
                Je(a, r, t, e, n, s),
                Je(h, r, t, e, n, s);
                return
            }
            o = o.next
        }
        a = a.next
    } while (a !== i)
}
function nu(i, r, t, e) {
    var n = [], s, a, o, h, u;
    for (s = 0,
    a = r.length; s < a; s++)
        o = r[s] * e,
        h = s < a - 1 ? r[s + 1] * e : i.length,
        u = la(i, o, h, e, !1),
        u === u.next && (u.steiner = !0),
        n.push(du(u));
    for (n.sort(fu),
    s = 0; s < n.length; s++)
        cu(n[s], t),
        t = Jt(t, t.next);
    return t
}
function fu(i, r) {
    return i.x - r.x
}
function cu(i, r) {
    if (r = pu(i, r),
    r) {
        var t = da(r, i);
        Jt(r, r.next),
        Jt(t, t.next)
    }
}
function pu(i, r) {
    var t = r, e = i.x, n = i.y, s = -Infinity, a;
    do {
        if (n <= t.y && n >= t.next.y && t.next.y !== t.y) {
            var o = t.x + (n - t.y) * (t.next.x - t.x) / (t.next.y - t.y);
            if (o <= e && o > s) {
                if (s = o,
                o === e) {
                    if (n === t.y)
                        return t;
                    if (n === t.next.y)
                        return t.next
                }
                a = t.x < t.next.x ? t : t.next
            }
        }
        t = t.next
    } while (t !== r);
    if (!a)
        return null;
    if (e === s)
        return a;
    var h = a, u = a.x, l = a.y, f = Infinity, c;
    t = a;
    do
        e >= t.x && t.x >= u && e !== t.x && Oe(n < l ? e : s, n, u, l, n < l ? s : e, n, t.x, t.y) && (c = Math.abs(n - t.y) / (e - t.x),
        tr(t, i) && (c < f || c === f && (t.x > a.x || t.x === a.x && vu(a, t))) && (a = t,
        f = c)),
        t = t.next;
    while (t !== h);
    return a
}
function vu(i, r) {
    return K(i.prev, i, r.prev) < 0 && K(r.next, i, i.next) < 0
}
function uu(i, r, t, e) {
    var n = i;
    do
        n.z === null && (n.z = Ii(n.x, n.y, r, t, e)),
        n.prevZ = n.prev,
        n.nextZ = n.next,
        n = n.next;
    while (n !== i);
    n.prevZ.nextZ = null,
    n.prevZ = null,
    mu(n)
}
function mu(i) {
    var r, t, e, n, s, a, o, h, u = 1;
    do {
        for (t = i,
        i = null,
        s = null,
        a = 0; t; ) {
            for (a++,
            e = t,
            o = 0,
            r = 0; r < u && (o++,
            e = e.nextZ,
            !!e); r++)
                ;
            for (h = u; o > 0 || h > 0 && e; )
                o !== 0 && (h === 0 || !e || t.z <= e.z) ? (n = t,
                t = t.nextZ,
                o--) : (n = e,
                e = e.nextZ,
                h--),
                s ? s.nextZ = n : i = n,
                n.prevZ = s,
                s = n;
            t = e
        }
        s.nextZ = null,
        u *= 2
    } while (a > 1);
    return i
}
function Ii(i, r, t, e, n) {
    return i = 32767 * (i - t) * n,
    r = 32767 * (r - e) * n,
    i = (i | i << 8) & 16711935,
    i = (i | i << 4) & 252645135,
    i = (i | i << 2) & 858993459,
    i = (i | i << 1) & 1431655765,
    r = (r | r << 8) & 16711935,
    r = (r | r << 4) & 252645135,
    r = (r | r << 2) & 858993459,
    r = (r | r << 1) & 1431655765,
    i | r << 1
}
function du(i) {
    var r = i
      , t = i;
    do
        (r.x < t.x || r.x === t.x && r.y < t.y) && (t = r),
        r = r.next;
    while (r !== i);
    return t
}
function Oe(i, r, t, e, n, s, a, o) {
    return (n - a) * (r - o) - (i - a) * (s - o) >= 0 && (i - a) * (e - o) - (t - a) * (r - o) >= 0 && (t - a) * (s - o) - (n - a) * (e - o) >= 0
}
function lu(i, r) {
    return i.next.i !== r.i && i.prev.i !== r.i && !yu(i, r) && (tr(i, r) && tr(r, i) && gu(i, r) && (K(i.prev, i, r.prev) || K(i, r.prev, r)) || Nr(i, r) && K(i.prev, i, i.next) > 0 && K(r.prev, r, r.next) > 0)
}
function K(i, r, t) {
    return (r.y - i.y) * (t.x - r.x) - (r.x - i.x) * (t.y - r.y)
}
function Nr(i, r) {
    return i.x === r.x && i.y === r.y
}
function ca(i, r, t, e) {
    var n = Ur(K(i, r, t))
      , s = Ur(K(i, r, e))
      , a = Ur(K(t, e, i))
      , o = Ur(K(t, e, r));
    return !!(n !== s && a !== o || n === 0 && Dr(i, t, r) || s === 0 && Dr(i, e, r) || a === 0 && Dr(t, i, e) || o === 0 && Dr(t, r, e))
}
function Dr(i, r, t) {
    return r.x <= Math.max(i.x, t.x) && r.x >= Math.min(i.x, t.x) && r.y <= Math.max(i.y, t.y) && r.y >= Math.min(i.y, t.y)
}
function Ur(i) {
    return i > 0 ? 1 : i < 0 ? -1 : 0
}
function yu(i, r) {
    var t = i;
    do {
        if (t.i !== i.i && t.next.i !== i.i && t.i !== r.i && t.next.i !== r.i && ca(t, t.next, i, r))
            return !0;
        t = t.next
    } while (t !== i);
    return !1
}
function tr(i, r) {
    return K(i.prev, i, i.next) < 0 ? K(i, r, i.next) >= 0 && K(i, i.prev, r) >= 0 : K(i, r, i.prev) < 0 || K(i, i.next, r) < 0
}
function gu(i, r) {
    var t = i
      , e = !1
      , n = (i.x + r.x) / 2
      , s = (i.y + r.y) / 2;
    do
        t.y > s != t.next.y > s && t.next.y !== t.y && n < (t.next.x - t.x) * (s - t.y) / (t.next.y - t.y) + t.x && (e = !e),
        t = t.next;
    while (t !== i);
    return e
}
function da(i, r) {
    var t = new Si(i.i,i.x,i.y)
      , e = new Si(r.i,r.x,r.y)
      , n = i.next
      , s = r.prev;
    return i.next = r,
    r.prev = i,
    t.next = n,
    n.prev = t,
    e.next = t,
    t.prev = e,
    s.next = e,
    e.prev = s,
    e
}
function fa(i, r, t, e) {
    var n = new Si(i,r,t);
    return e ? (n.next = e.next,
    n.prev = e,
    e.next.prev = n,
    e.next = n) : (n.prev = n,
    n.next = n),
    n
}
function Qe(i) {
    i.next.prev = i.prev,
    i.prev.next = i.next,
    i.prevZ && (i.prevZ.nextZ = i.nextZ),
    i.nextZ && (i.nextZ.prevZ = i.prevZ)
}
function Si(i, r, t) {
    this.i = i,
    this.x = r,
    this.y = t,
    this.prev = null,
    this.next = null,
    this.z = null,
    this.prevZ = null,
    this.nextZ = null,
    this.steiner = !1
}
Fr.deviation = function(i, r, t, e) {
    var n = r && r.length
      , s = n ? r[0] * t : i.length
      , a = Math.abs(Pi(i, 0, s, t));
    if (n)
        for (var o = 0, h = r.length; o < h; o++) {
            var u = r[o] * t
              , l = o < h - 1 ? r[o + 1] * t : i.length;
            a -= Math.abs(Pi(i, u, l, t))
        }
    var f = 0;
    for (o = 0; o < e.length; o += 3) {
        var c = e[o] * t
          , d = e[o + 1] * t
          , p = e[o + 2] * t;
        f += Math.abs((i[c] - i[p]) * (i[d + 1] - i[c + 1]) - (i[c] - i[d]) * (i[p + 1] - i[c + 1]))
    }
    return a === 0 && f === 0 ? 0 : Math.abs((f - a) / a)
}
;
function Pi(i, r, t, e) {
    for (var n = 0, s = r, a = t - e; s < t; s += e)
        n += (i[a] - i[s]) * (i[s + 1] + i[a + 1]),
        a = s;
    return n
}
Fr.flatten = function(i) {
    for (var r = i[0][0].length, t = {
        vertices: [],
        holes: [],
        dimensions: r
    }, e = 0, n = 0; n < i.length; n++) {
        for (var s = 0; s < i[n].length; s++)
            for (var a = 0; a < r; a++)
                t.vertices.push(i[n][s][a]);
        n > 0 && (e += i[n - 1].length,
        t.holes.push(e))
    }
    return t
}
;
Lr.default = iu;
var Ci = 2147483647
  , er = 36
  , pa = 1
  , Ei = 26
  , _u = 38
  , xu = 700
  , bu = 72
  , Tu = 128
  , wu = "-"
  , Pu = /[^\x20-\x7E]/
  , Iu = /[\x2E\u3002\uFF0E\uFF61]/g
  , Su = {
    overflow: "Overflow: input needs wider integers to process",
    "not-basic": "Illegal input >= 0x80 (not a basic code point)",
    "invalid-input": "Invalid input"
}
  , Ai = er - pa
  , Re = Math.floor
  , Oi = String.fromCharCode;
function va(i) {
    throw new RangeError(Su[i])
}
function Cu(i, r) {
    for (var t = i.length, e = []; t--; )
        e[t] = r(i[t]);
    return e
}
function Eu(i, r) {
    var t = i.split("@")
      , e = "";
    t.length > 1 && (e = t[0] + "@",
    i = t[1]),
    i = i.replace(Iu, ".");
    var n = i.split(".")
      , s = Cu(n, r).join(".");
    return e + s
}
function Au(i) {
    for (var r = [], t = 0, e = i.length, n, s; t < e; )
        n = i.charCodeAt(t++),
        n >= 55296 && n <= 56319 && t < e ? (s = i.charCodeAt(t++),
        (s & 64512) == 56320 ? r.push(((n & 1023) << 10) + (s & 1023) + 65536) : (r.push(n),
        t--)) : r.push(n);
    return r
}
function ma(i, r) {
    return i + 22 + 75 * (i < 26) - ((r != 0) << 5)
}
function Ou(i, r, t) {
    var e = 0;
    for (i = t ? Re(i / xu) : i >> 1,
    i += Re(i / r); i > Ai * Ei >> 1; e += er)
        i = Re(i / Ai);
    return Re(e + (Ai + 1) * i / (i + _u))
}
function Ru(i) {
    var r, t, e, n, s, a, o, h, u, l, f, c = [], d, p, v, m;
    for (i = Au(i),
    d = i.length,
    r = Tu,
    t = 0,
    s = bu,
    a = 0; a < d; ++a)
        f = i[a],
        f < 128 && c.push(Oi(f));
    for (e = n = c.length,
    n && c.push(wu); e < d; ) {
        for (o = Ci,
        a = 0; a < d; ++a)
            f = i[a],
            f >= r && f < o && (o = f);
        for (p = e + 1,
        o - r > Re((Ci - t) / p) && va("overflow"),
        t += (o - r) * p,
        r = o,
        a = 0; a < d; ++a)
            if (f = i[a],
            f < r && ++t > Ci && va("overflow"),
            f == r) {
                for (h = t,
                u = er; l = u <= s ? pa : u >= s + Ei ? Ei : u - s,
                !(h < l); u += er)
                    m = h - l,
                    v = er - l,
                    c.push(Oi(ma(l + m % v, 0))),
                    h = Re(m / v);
                c.push(Oi(ma(h, 0))),
                s = Ou(t, p, e == n),
                t = 0,
                ++e
            }
        ++t,
        ++r
    }
    return c.join("")
}
function Mu(i) {
    return Eu(i, function(r) {
        return Pu.test(r) ? "xn--" + Ru(r) : r
    })
}
function Br(i) {
    return i === null
}
function Fu(i) {
    return i == null
}
function Ri(i) {
    return typeof i == "string"
}
function ya(i) {
    return typeof i == "object" && i !== null
}
function Lu(i, r) {
    return Object.prototype.hasOwnProperty.call(i, r)
}
var ga = Array.isArray || function(i) {
    return Object.prototype.toString.call(i) === "[object Array]"
}
;
function rr(i) {
    switch (typeof i) {
    case "string":
        return i;
    case "boolean":
        return i ? "true" : "false";
    case "number":
        return isFinite(i) ? i : "";
    default:
        return ""
    }
}
function Du(i, r, t, e) {
    return r = r || "&",
    t = t || "=",
    i === null && (i = void 0),
    typeof i == "object" ? _a(Nu(i), function(n) {
        var s = encodeURIComponent(rr(n)) + t;
        return ga(i[n]) ? _a(i[n], function(a) {
            return s + encodeURIComponent(rr(a))
        }).join(r) : s + encodeURIComponent(rr(i[n]))
    }).join(r) : e ? encodeURIComponent(rr(e)) + t + encodeURIComponent(rr(i)) : ""
}
function _a(i, r) {
    if (i.map)
        return i.map(r);
    for (var t = [], e = 0; e < i.length; e++)
        t.push(r(i[e], e));
    return t
}
var Nu = Object.keys || function(i) {
    var r = [];
    for (var t in i)
        Object.prototype.hasOwnProperty.call(i, t) && r.push(t);
    return r
}
;
function xa(i, r, t, e) {
    r = r || "&",
    t = t || "=";
    var n = {};
    if (typeof i != "string" || i.length === 0)
        return n;
    var s = /\+/g;
    i = i.split(r);
    var a = 1e3;
    e && typeof e.maxKeys == "number" && (a = e.maxKeys);
    var o = i.length;
    a > 0 && o > a && (o = a);
    for (var h = 0; h < o; ++h) {
        var u = i[h].replace(s, "%20"), l = u.indexOf(t), f, c, d, p;
        l >= 0 ? (f = u.substr(0, l),
        c = u.substr(l + 1)) : (f = u,
        c = ""),
        d = decodeURIComponent(f),
        p = decodeURIComponent(c),
        Lu(n, d) ? ga(n[d]) ? n[d].push(p) : n[d] = [n[d], p] : n[d] = p
    }
    return n
}
var ba = {
    parse: ir,
    resolve: Bu,
    resolveObject: ku,
    format: Uu,
    Url: Et
};
function Et() {
    this.protocol = null,
    this.slashes = null,
    this.auth = null,
    this.host = null,
    this.port = null,
    this.hostname = null,
    this.hash = null,
    this.search = null,
    this.query = null,
    this.pathname = null,
    this.path = null,
    this.href = null
}
var Xu = /^([a-z0-9.+-]+:)/i
  , Gu = /:[0-9]*$/
  , ju = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/
  , Hu = ["<", ">", '"', "`", " ", "\r", `
`, "	"]
  , zu = ["{", "}", "|", "\\", "^", "`"].concat(Hu)
  , Mi = ["'"].concat(zu)
  , Ta = ["%", "/", "?", ";", "#"].concat(Mi)
  , wa = ["/", "?", "#"]
  , Vu = 255
  , Pa = /^[+a-z0-9A-Z_-]{0,63}$/
  , Yu = /^([+a-z0-9A-Z_-]{0,63})(.*)$/
  , Wu = {
    javascript: !0,
    "javascript:": !0
}
  , Fi = {
    javascript: !0,
    "javascript:": !0
}
  , Me = {
    http: !0,
    https: !0,
    ftp: !0,
    gopher: !0,
    file: !0,
    "http:": !0,
    "https:": !0,
    "ftp:": !0,
    "gopher:": !0,
    "file:": !0
};
function ir(i, r, t) {
    if (i && ya(i) && i instanceof Et)
        return i;
    var e = new Et;
    return e.parse(i, r, t),
    e
}
Et.prototype.parse = function(i, r, t) {
    return Ia(this, i, r, t)
}
;
function Ia(i, r, t, e) {
    if (!Ri(r))
        throw new TypeError("Parameter 'url' must be a string, not " + typeof r);
    var n = r.indexOf("?")
      , s = n !== -1 && n < r.indexOf("#") ? "?" : "#"
      , a = r.split(s)
      , o = /\\/g;
    a[0] = a[0].replace(o, "/"),
    r = a.join(s);
    var h = r;
    if (h = h.trim(),
    !e && r.split("#").length === 1) {
        var u = ju.exec(h);
        if (u)
            return i.path = h,
            i.href = h,
            i.pathname = u[1],
            u[2] ? (i.search = u[2],
            t ? i.query = xa(i.search.substr(1)) : i.query = i.search.substr(1)) : t && (i.search = "",
            i.query = {}),
            i
    }
    var l = Xu.exec(h);
    if (l) {
        l = l[0];
        var f = l.toLowerCase();
        i.protocol = f,
        h = h.substr(l.length)
    }
    if (e || l || h.match(/^\/\/[^@\/]+@[^@\/]+/)) {
        var c = h.substr(0, 2) === "//";
        c && !(l && Fi[l]) && (h = h.substr(2),
        i.slashes = !0)
    }
    var d, p, v, m;
    if (!Fi[l] && (c || l && !Me[l])) {
        var g = -1;
        for (d = 0; d < wa.length; d++)
            p = h.indexOf(wa[d]),
            p !== -1 && (g === -1 || p < g) && (g = p);
        var w, y;
        for (g === -1 ? y = h.lastIndexOf("@") : y = h.lastIndexOf("@", g),
        y !== -1 && (w = h.slice(0, y),
        h = h.slice(y + 1),
        i.auth = decodeURIComponent(w)),
        g = -1,
        d = 0; d < Ta.length; d++)
            p = h.indexOf(Ta[d]),
            p !== -1 && (g === -1 || p < g) && (g = p);
        g === -1 && (g = h.length),
        i.host = h.slice(0, g),
        h = h.slice(g),
        Sa(i),
        i.hostname = i.hostname || "";
        var I = i.hostname[0] === "[" && i.hostname[i.hostname.length - 1] === "]";
        if (!I) {
            var x = i.hostname.split(/\./);
            for (d = 0,
            v = x.length; d < v; d++) {
                var b = x[d];
                if (!!b && !b.match(Pa)) {
                    for (var D = "", U = 0, P = b.length; U < P; U++)
                        b.charCodeAt(U) > 127 ? D += "x" : D += b[U];
                    if (!D.match(Pa)) {
                        var _ = x.slice(0, d)
                          , C = x.slice(d + 1)
                          , O = b.match(Yu);
                        O && (_.push(O[1]),
                        C.unshift(O[2])),
                        C.length && (h = "/" + C.join(".") + h),
                        i.hostname = _.join(".");
                        break
                    }
                }
            }
        }
        i.hostname.length > Vu ? i.hostname = "" : i.hostname = i.hostname.toLowerCase(),
        I || (i.hostname = Mu(i.hostname)),
        m = i.port ? ":" + i.port : "";
        var X = i.hostname || "";
        i.host = X + m,
        i.href += i.host,
        I && (i.hostname = i.hostname.substr(1, i.hostname.length - 2),
        h[0] !== "/" && (h = "/" + h))
    }
    if (!Wu[f])
        for (d = 0,
        v = Mi.length; d < v; d++) {
            var B = Mi[d];
            if (h.indexOf(B) !== -1) {
                var A = encodeURIComponent(B);
                A === B && (A = escape(B)),
                h = h.split(B).join(A)
            }
        }
    var F = h.indexOf("#");
    F !== -1 && (i.hash = h.substr(F),
    h = h.slice(0, F));
    var E = h.indexOf("?");
    if (E !== -1 ? (i.search = h.substr(E),
    i.query = h.substr(E + 1),
    t && (i.query = xa(i.query)),
    h = h.slice(0, E)) : t && (i.search = "",
    i.query = {}),
    h && (i.pathname = h),
    Me[f] && i.hostname && !i.pathname && (i.pathname = "/"),
    i.pathname || i.search) {
        m = i.pathname || "";
        var lt = i.search || "";
        i.path = m + lt
    }
    return i.href = Li(i),
    i
}
function Uu(i) {
    return Ri(i) && (i = Ia({}, i)),
    Li(i)
}
function Li(i) {
    var r = i.auth || "";
    r && (r = encodeURIComponent(r),
    r = r.replace(/%3A/i, ":"),
    r += "@");
    var t = i.protocol || ""
      , e = i.pathname || ""
      , n = i.hash || ""
      , s = !1
      , a = "";
    i.host ? s = r + i.host : i.hostname && (s = r + (i.hostname.indexOf(":") === -1 ? i.hostname : "[" + this.hostname + "]"),
    i.port && (s += ":" + i.port)),
    i.query && ya(i.query) && Object.keys(i.query).length && (a = Du(i.query));
    var o = i.search || a && "?" + a || "";
    return t && t.substr(-1) !== ":" && (t += ":"),
    i.slashes || (!t || Me[t]) && s !== !1 ? (s = "//" + (s || ""),
    e && e.charAt(0) !== "/" && (e = "/" + e)) : s || (s = ""),
    n && n.charAt(0) !== "#" && (n = "#" + n),
    o && o.charAt(0) !== "?" && (o = "?" + o),
    e = e.replace(/[?#]/g, function(h) {
        return encodeURIComponent(h)
    }),
    o = o.replace("#", "%23"),
    t + s + e + o + n
}
Et.prototype.format = function() {
    return Li(this)
}
;
function Bu(i, r) {
    return ir(i, !1, !0).resolve(r)
}
Et.prototype.resolve = function(i) {
    return this.resolveObject(ir(i, !1, !0)).format()
}
;
function ku(i, r) {
    return i ? ir(i, !1, !0).resolveObject(r) : r
}
Et.prototype.resolveObject = function(i) {
    if (Ri(i)) {
        var r = new Et;
        r.parse(i, !1, !0),
        i = r
    }
    for (var t = new Et, e = Object.keys(this), n = 0; n < e.length; n++) {
        var s = e[n];
        t[s] = this[s]
    }
    if (t.hash = i.hash,
    i.href === "")
        return t.href = t.format(),
        t;
    if (i.slashes && !i.protocol) {
        for (var a = Object.keys(i), o = 0; o < a.length; o++) {
            var h = a[o];
            h !== "protocol" && (t[h] = i[h])
        }
        return Me[t.protocol] && t.hostname && !t.pathname && (t.path = t.pathname = "/"),
        t.href = t.format(),
        t
    }
    var u;
    if (i.protocol && i.protocol !== t.protocol) {
        if (!Me[i.protocol]) {
            for (var l = Object.keys(i), f = 0; f < l.length; f++) {
                var c = l[f];
                t[c] = i[c]
            }
            return t.href = t.format(),
            t
        }
        if (t.protocol = i.protocol,
        !i.host && !Fi[i.protocol]) {
            for (u = (i.pathname || "").split("/"); u.length && !(i.host = u.shift()); )
                ;
            i.host || (i.host = ""),
            i.hostname || (i.hostname = ""),
            u[0] !== "" && u.unshift(""),
            u.length < 2 && u.unshift(""),
            t.pathname = u.join("/")
        } else
            t.pathname = i.pathname;
        if (t.search = i.search,
        t.query = i.query,
        t.host = i.host || "",
        t.auth = i.auth,
        t.hostname = i.hostname || i.host,
        t.port = i.port,
        t.pathname || t.search) {
            var d = t.pathname || ""
              , p = t.search || "";
            t.path = d + p
        }
        return t.slashes = t.slashes || i.slashes,
        t.href = t.format(),
        t
    }
    var v = t.pathname && t.pathname.charAt(0) === "/"
      , m = i.host || i.pathname && i.pathname.charAt(0) === "/"
      , g = m || v || t.host && i.pathname
      , w = g
      , y = t.pathname && t.pathname.split("/") || []
      , I = t.protocol && !Me[t.protocol];
    u = i.pathname && i.pathname.split("/") || [],
    I && (t.hostname = "",
    t.port = null,
    t.host && (y[0] === "" ? y[0] = t.host : y.unshift(t.host)),
    t.host = "",
    i.protocol && (i.hostname = null,
    i.port = null,
    i.host && (u[0] === "" ? u[0] = i.host : u.unshift(i.host)),
    i.host = null),
    g = g && (u[0] === "" || y[0] === ""));
    var x;
    if (m)
        t.host = i.host || i.host === "" ? i.host : t.host,
        t.hostname = i.hostname || i.hostname === "" ? i.hostname : t.hostname,
        t.search = i.search,
        t.query = i.query,
        y = u;
    else if (u.length)
        y || (y = []),
        y.pop(),
        y = y.concat(u),
        t.search = i.search,
        t.query = i.query;
    else if (!Fu(i.search))
        return I && (t.hostname = t.host = y.shift(),
        x = t.host && t.host.indexOf("@") > 0 ? t.host.split("@") : !1,
        x && (t.auth = x.shift(),
        t.host = t.hostname = x.shift())),
        t.search = i.search,
        t.query = i.query,
        (!Br(t.pathname) || !Br(t.search)) && (t.path = (t.pathname ? t.pathname : "") + (t.search ? t.search : "")),
        t.href = t.format(),
        t;
    if (!y.length)
        return t.pathname = null,
        t.search ? t.path = "/" + t.search : t.path = null,
        t.href = t.format(),
        t;
    for (var b = y.slice(-1)[0], D = (t.host || i.host || y.length > 1) && (b === "." || b === "..") || b === "", U = 0, P = y.length; P >= 0; P--)
        b = y[P],
        b === "." ? y.splice(P, 1) : b === ".." ? (y.splice(P, 1),
        U++) : U && (y.splice(P, 1),
        U--);
    if (!g && !w)
        for (; U--; U)
            y.unshift("..");
    g && y[0] !== "" && (!y[0] || y[0].charAt(0) !== "/") && y.unshift(""),
    D && y.join("/").substr(-1) !== "/" && y.push("");
    var _ = y[0] === "" || y[0] && y[0].charAt(0) === "/";
    return I && (t.hostname = t.host = _ ? "" : y.length ? y.shift() : "",
    x = t.host && t.host.indexOf("@") > 0 ? t.host.split("@") : !1,
    x && (t.auth = x.shift(),
    t.host = t.hostname = x.shift())),
    g = g || t.host && y.length,
    g && !_ && y.unshift(""),
    y.length ? t.pathname = y.join("/") : (t.pathname = null,
    t.path = null),
    (!Br(t.pathname) || !Br(t.search)) && (t.path = (t.pathname ? t.pathname : "") + (t.search ? t.search : "")),
    t.auth = i.auth || t.auth,
    t.slashes = t.slashes || i.slashes,
    t.href = t.format(),
    t
}
;
Et.prototype.parseHost = function() {
    return Sa(this)
}
;
function Sa(i) {
    var r = i.host
      , t = Gu.exec(r);
    t && (t = t[0],
    t !== ":" && (i.port = t.substr(1)),
    r = r.substr(0, r.length - t.length)),
    r && (i.hostname = r)
}
var Tt;
(function(i) {
    i[i.WEBGL_LEGACY = 0] = "WEBGL_LEGACY",
    i[i.WEBGL = 1] = "WEBGL",
    i[i.WEBGL2 = 2] = "WEBGL2"
}
)(Tt || (Tt = {}));
var ae;
(function(i) {
    i[i.UNKNOWN = 0] = "UNKNOWN",
    i[i.WEBGL = 1] = "WEBGL",
    i[i.CANVAS = 2] = "CANVAS"
}
)(ae || (ae = {}));
var Fe;
(function(i) {
    i[i.COLOR = 16384] = "COLOR",
    i[i.DEPTH = 256] = "DEPTH",
    i[i.STENCIL = 1024] = "STENCIL"
}
)(Fe || (Fe = {}));
var M;
(function(i) {
    i[i.NORMAL = 0] = "NORMAL",
    i[i.ADD = 1] = "ADD",
    i[i.MULTIPLY = 2] = "MULTIPLY",
    i[i.SCREEN = 3] = "SCREEN",
    i[i.OVERLAY = 4] = "OVERLAY",
    i[i.DARKEN = 5] = "DARKEN",
    i[i.LIGHTEN = 6] = "LIGHTEN",
    i[i.COLOR_DODGE = 7] = "COLOR_DODGE",
    i[i.COLOR_BURN = 8] = "COLOR_BURN",
    i[i.HARD_LIGHT = 9] = "HARD_LIGHT",
    i[i.SOFT_LIGHT = 10] = "SOFT_LIGHT",
    i[i.DIFFERENCE = 11] = "DIFFERENCE",
    i[i.EXCLUSION = 12] = "EXCLUSION",
    i[i.HUE = 13] = "HUE",
    i[i.SATURATION = 14] = "SATURATION",
    i[i.COLOR = 15] = "COLOR",
    i[i.LUMINOSITY = 16] = "LUMINOSITY",
    i[i.NORMAL_NPM = 17] = "NORMAL_NPM",
    i[i.ADD_NPM = 18] = "ADD_NPM",
    i[i.SCREEN_NPM = 19] = "SCREEN_NPM",
    i[i.NONE = 20] = "NONE",
    i[i.SRC_OVER = 0] = "SRC_OVER",
    i[i.SRC_IN = 21] = "SRC_IN",
    i[i.SRC_OUT = 22] = "SRC_OUT",
    i[i.SRC_ATOP = 23] = "SRC_ATOP",
    i[i.DST_OVER = 24] = "DST_OVER",
    i[i.DST_IN = 25] = "DST_IN",
    i[i.DST_OUT = 26] = "DST_OUT",
    i[i.DST_ATOP = 27] = "DST_ATOP",
    i[i.ERASE = 26] = "ERASE",
    i[i.SUBTRACT = 28] = "SUBTRACT",
    i[i.XOR = 29] = "XOR"
}
)(M || (M = {}));
var dt;
(function(i) {
    i[i.POINTS = 0] = "POINTS",
    i[i.LINES = 1] = "LINES",
    i[i.LINE_LOOP = 2] = "LINE_LOOP",
    i[i.LINE_STRIP = 3] = "LINE_STRIP",
    i[i.TRIANGLES = 4] = "TRIANGLES",
    i[i.TRIANGLE_STRIP = 5] = "TRIANGLE_STRIP",
    i[i.TRIANGLE_FAN = 6] = "TRIANGLE_FAN"
}
)(dt || (dt = {}));
var oe;
(function(i) {
    i[i.RGBA = 6408] = "RGBA",
    i[i.RGB = 6407] = "RGB",
    i[i.ALPHA = 6406] = "ALPHA",
    i[i.LUMINANCE = 6409] = "LUMINANCE",
    i[i.LUMINANCE_ALPHA = 6410] = "LUMINANCE_ALPHA",
    i[i.DEPTH_COMPONENT = 6402] = "DEPTH_COMPONENT",
    i[i.DEPTH_STENCIL = 34041] = "DEPTH_STENCIL"
}
)(oe || (oe = {}));
var kt;
(function(i) {
    i[i.TEXTURE_2D = 3553] = "TEXTURE_2D",
    i[i.TEXTURE_CUBE_MAP = 34067] = "TEXTURE_CUBE_MAP",
    i[i.TEXTURE_2D_ARRAY = 35866] = "TEXTURE_2D_ARRAY",
    i[i.TEXTURE_CUBE_MAP_POSITIVE_X = 34069] = "TEXTURE_CUBE_MAP_POSITIVE_X",
    i[i.TEXTURE_CUBE_MAP_NEGATIVE_X = 34070] = "TEXTURE_CUBE_MAP_NEGATIVE_X",
    i[i.TEXTURE_CUBE_MAP_POSITIVE_Y = 34071] = "TEXTURE_CUBE_MAP_POSITIVE_Y",
    i[i.TEXTURE_CUBE_MAP_NEGATIVE_Y = 34072] = "TEXTURE_CUBE_MAP_NEGATIVE_Y",
    i[i.TEXTURE_CUBE_MAP_POSITIVE_Z = 34073] = "TEXTURE_CUBE_MAP_POSITIVE_Z",
    i[i.TEXTURE_CUBE_MAP_NEGATIVE_Z = 34074] = "TEXTURE_CUBE_MAP_NEGATIVE_Z"
}
)(kt || (kt = {}));
var et;
(function(i) {
    i[i.UNSIGNED_BYTE = 5121] = "UNSIGNED_BYTE",
    i[i.UNSIGNED_SHORT = 5123] = "UNSIGNED_SHORT",
    i[i.UNSIGNED_SHORT_5_6_5 = 33635] = "UNSIGNED_SHORT_5_6_5",
    i[i.UNSIGNED_SHORT_4_4_4_4 = 32819] = "UNSIGNED_SHORT_4_4_4_4",
    i[i.UNSIGNED_SHORT_5_5_5_1 = 32820] = "UNSIGNED_SHORT_5_5_5_1",
    i[i.FLOAT = 5126] = "FLOAT",
    i[i.HALF_FLOAT = 36193] = "HALF_FLOAT"
}
)(et || (et = {}));
var pt;
(function(i) {
    i[i.NEAREST = 0] = "NEAREST",
    i[i.LINEAR = 1] = "LINEAR"
}
)(pt || (pt = {}));
var At;
(function(i) {
    i[i.CLAMP = 33071] = "CLAMP",
    i[i.REPEAT = 10497] = "REPEAT",
    i[i.MIRRORED_REPEAT = 33648] = "MIRRORED_REPEAT"
}
)(At || (At = {}));
var he;
(function(i) {
    i[i.OFF = 0] = "OFF",
    i[i.POW2 = 1] = "POW2",
    i[i.ON = 2] = "ON"
}
)(he || (he = {}));
var Ot;
(function(i) {
    i[i.NPM = 0] = "NPM",
    i[i.UNPACK = 1] = "UNPACK",
    i[i.PMA = 2] = "PMA",
    i[i.NO_PREMULTIPLIED_ALPHA = 0] = "NO_PREMULTIPLIED_ALPHA",
    i[i.PREMULTIPLY_ON_UPLOAD = 1] = "PREMULTIPLY_ON_UPLOAD",
    i[i.PREMULTIPLY_ALPHA = 2] = "PREMULTIPLY_ALPHA"
}
)(Ot || (Ot = {}));
var _t;
(function(i) {
    i[i.NO = 0] = "NO",
    i[i.YES = 1] = "YES",
    i[i.AUTO = 2] = "AUTO",
    i[i.BLEND = 0] = "BLEND",
    i[i.CLEAR = 1] = "CLEAR",
    i[i.BLIT = 2] = "BLIT"
}
)(_t || (_t = {}));
var nr;
(function(i) {
    i[i.AUTO = 0] = "AUTO",
    i[i.MANUAL = 1] = "MANUAL"
}
)(nr || (nr = {}));
var xt;
(function(i) {
    i.LOW = "lowp",
    i.MEDIUM = "mediump",
    i.HIGH = "highp"
}
)(xt || (xt = {}));
var ht;
(function(i) {
    i[i.NONE = 0] = "NONE",
    i[i.SCISSOR = 1] = "SCISSOR",
    i[i.STENCIL = 2] = "STENCIL",
    i[i.SPRITE = 3] = "SPRITE"
}
)(ht || (ht = {}));
var Qt;
(function(i) {
    i[i.NONE = 0] = "NONE",
    i[i.LOW = 2] = "LOW",
    i[i.MEDIUM = 4] = "MEDIUM",
    i[i.HIGH = 8] = "HIGH"
}
)(Qt || (Qt = {}));
R.RETINA_PREFIX = /@([0-9\.]+)x/;
R.FAIL_IF_MAJOR_PERFORMANCE_CAVEAT = !0;
var Ni = !1
  , Ca = "5.3.7";
function qu() {
    Ni = !0
}
function Ea(i) {
    var r;
    if (!Ni) {
        if (navigator.userAgent.toLowerCase().indexOf("chrome") > -1) {
            var t = [`
 %c %c %c PixiJS ` + Ca + " - \u2730 " + i + ` \u2730  %c  %c  http://www.pixijs.com/  %c %c \u2665%c\u2665%c\u2665 

`, "background: #ff66a5; padding:5px 0;", "background: #ff66a5; padding:5px 0;", "color: #ff66a5; background: #030307; padding:5px 0;", "background: #ff66a5; padding:5px 0;", "background: #ffc3dc; padding:5px 0;", "background: #ff66a5; padding:5px 0;", "color: #ff2424; background: #fff; padding:5px 0;", "color: #ff2424; background: #fff; padding:5px 0;", "color: #ff2424; background: #fff; padding:5px 0;"];
            (r = window.console).log.apply(r, t)
        } else
            window.console && window.console.log("PixiJS " + Ca + " - " + i + " - http://www.pixijs.com/");
        Ni = !0
    }
}
var Di;
function Aa() {
    return typeof Di == "undefined" && (Di = function() {
        var r = {
            stencil: !0,
            failIfMajorPerformanceCaveat: R.FAIL_IF_MAJOR_PERFORMANCE_CAVEAT
        };
        try {
            if (!window.WebGLRenderingContext)
                return !1;
            var t = document.createElement("canvas")
              , e = t.getContext("webgl", r) || t.getContext("experimental-webgl", r)
              , n = !!(e && e.getContextAttributes().stencil);
            if (e) {
                var s = e.getExtension("WEBGL_lose_context");
                s && s.loseContext()
            }
            return e = null,
            n
        } catch (a) {
            return !1
        }
    }()),
    Di
}
function ue(i, r) {
    return r === void 0 && (r = []),
    r[0] = (i >> 16 & 255) / 255,
    r[1] = (i >> 8 & 255) / 255,
    r[2] = (i & 255) / 255,
    r
}
function Ui(i) {
    var r = i.toString(16);
    return r = "000000".substr(0, 6 - r.length) + r,
    "#" + r
}
function Bi(i) {
    return typeof i == "string" && i[0] === "#" && (i = i.substr(1)),
    parseInt(i, 16)
}
function $u(i) {
    return (i[0] * 255 << 16) + (i[1] * 255 << 8) + (i[2] * 255 | 0)
}
function Zu() {
    for (var i = [], r = [], t = 0; t < 32; t++)
        i[t] = t,
        r[t] = t;
    i[M.NORMAL_NPM] = M.NORMAL,
    i[M.ADD_NPM] = M.ADD,
    i[M.SCREEN_NPM] = M.SCREEN,
    r[M.NORMAL] = M.NORMAL_NPM,
    r[M.ADD] = M.ADD_NPM,
    r[M.SCREEN] = M.SCREEN_NPM;
    var e = [];
    return e.push(r),
    e.push(i),
    e
}
var ki = Zu();
function Xi(i, r) {
    return ki[r ? 1 : 0][i]
}
function Oa(i, r, t, e) {
    return t = t || new Float32Array(4),
    e || e === void 0 ? (t[0] = i[0] * r,
    t[1] = i[1] * r,
    t[2] = i[2] * r) : (t[0] = i[0],
    t[1] = i[1],
    t[2] = i[2]),
    t[3] = r,
    t
}
function kr(i, r) {
    if (r === 1)
        return (r * 255 << 24) + i;
    if (r === 0)
        return 0;
    var t = i >> 16 & 255
      , e = i >> 8 & 255
      , n = i & 255;
    return t = t * r + .5 | 0,
    e = e * r + .5 | 0,
    n = n * r + .5 | 0,
    (r * 255 << 24) + (t << 16) + (e << 8) + n
}
function Gi(i, r, t, e) {
    return t = t || new Float32Array(4),
    t[0] = (i >> 16 & 255) / 255,
    t[1] = (i >> 8 & 255) / 255,
    t[2] = (i & 255) / 255,
    (e || e === void 0) && (t[0] *= r,
    t[1] *= r,
    t[2] *= r),
    t[3] = r,
    t
}
function Ra(i, r) {
    r === void 0 && (r = null);
    var t = i * 6;
    if (r = r || new Uint16Array(t),
    r.length !== t)
        throw new Error("Out buffer length is incorrect, got " + r.length + " and expected " + t);
    for (var e = 0, n = 0; e < t; e += 6,
    n += 4)
        r[e + 0] = n + 0,
        r[e + 1] = n + 1,
        r[e + 2] = n + 2,
        r[e + 3] = n + 0,
        r[e + 4] = n + 2,
        r[e + 5] = n + 3;
    return r
}
function Ma(i) {
    if (i.BYTES_PER_ELEMENT === 4)
        return i instanceof Float32Array ? "Float32Array" : i instanceof Uint32Array ? "Uint32Array" : "Int32Array";
    if (i.BYTES_PER_ELEMENT === 2) {
        if (i instanceof Uint16Array)
            return "Uint16Array"
    } else if (i.BYTES_PER_ELEMENT === 1 && i instanceof Uint8Array)
        return "Uint8Array";
    return null
}
var Ku = {
    Float32Array,
    Uint32Array,
    Int32Array,
    Uint8Array
};
function Ju(i, r) {
    for (var t = 0, e = 0, n = {}, s = 0; s < i.length; s++)
        e += r[s],
        t += i[s].length;
    for (var a = new ArrayBuffer(t * 4), o = null, h = 0, s = 0; s < i.length; s++) {
        var u = r[s]
          , l = i[s]
          , f = Ma(l);
        n[f] || (n[f] = new Ku[f](a)),
        o = n[f];
        for (var c = 0; c < l.length; c++) {
            var d = (c / u | 0) * e + h
              , p = c % u;
            o[d + p] = l[c]
        }
        h += u
    }
    return new Float32Array(a)
}
function sr(i) {
    return i += i === 0 ? 1 : 0,
    --i,
    i |= i >>> 1,
    i |= i >>> 2,
    i |= i >>> 4,
    i |= i >>> 8,
    i |= i >>> 16,
    i + 1
}
function ji(i) {
    return !(i & i - 1) && !!i
}
function Hi(i) {
    var r = (i > 65535 ? 1 : 0) << 4;
    i >>>= r;
    var t = (i > 255 ? 1 : 0) << 3;
    return i >>>= t,
    r |= t,
    t = (i > 15 ? 1 : 0) << 2,
    i >>>= t,
    r |= t,
    t = (i > 3 ? 1 : 0) << 1,
    i >>>= t,
    r |= t,
    r | i >> 1
}
function le(i, r, t) {
    var e = i.length, n;
    if (!(r >= e || t === 0)) {
        t = r + t > e ? e - r : t;
        var s = e - t;
        for (n = r; n < s; ++n)
            i[n] = i[n + t];
        i.length = s
    }
}
function fe(i) {
    return i === 0 ? 0 : i < 0 ? -1 : 1
}
var Qu = 0;
function ce() {
    return ++Qu
}
var Fa = {};
function T(i, r, t) {
    if (t === void 0 && (t = 3),
    !Fa[r]) {
        var e = new Error().stack;
        typeof e == "undefined" ? console.warn("PixiJS Deprecation Warning: ", r + `
Deprecated since v` + i) : (e = e.split(`
`).splice(t).join(`
`),
        console.groupCollapsed ? (console.groupCollapsed("%cPixiJS Deprecation Warning: %c%s", "color:#614108;background:#fffbe6", "font-weight:normal;color:#614108;background:#fffbe6", r + `
Deprecated since v` + i),
        console.warn(e),
        console.groupEnd()) : (console.warn("PixiJS Deprecation Warning: ", r + `
Deprecated since v` + i),
        console.warn(e))),
        Fa[r] = !0
    }
}
var zi = {}
  , ft = Object.create(null)
  , bt = Object.create(null);
function tl() {
    var i;
    for (i in ft)
        ft[i].destroy();
    for (i in bt)
        bt[i].destroy()
}
function el() {
    var i;
    for (i in ft)
        delete ft[i];
    for (i in bt)
        delete bt[i]
}
var Vi = function() {
    function i(r, t, e) {
        this.canvas = document.createElement("canvas"),
        this.context = this.canvas.getContext("2d"),
        this.resolution = e || R.RESOLUTION,
        this.resize(r, t)
    }
    return i.prototype.clear = function() {
        this.context.setTransform(1, 0, 0, 1, 0, 0),
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)
    }
    ,
    i.prototype.resize = function(r, t) {
        this.canvas.width = r * this.resolution,
        this.canvas.height = t * this.resolution
    }
    ,
    i.prototype.destroy = function() {
        this.context = null,
        this.canvas = null
    }
    ,
    Object.defineProperty(i.prototype, "width", {
        get: function() {
            return this.canvas.width
        },
        set: function(r) {
            this.canvas.width = r
        },
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(i.prototype, "height", {
        get: function() {
            return this.canvas.height
        },
        set: function(r) {
            this.canvas.height = r
        },
        enumerable: !1,
        configurable: !0
    }),
    i
}();
function La(i) {
    var r = i.width, t = i.height, e = i.getContext("2d"), n = e.getImageData(0, 0, r, t), s = n.data, a = s.length, o = {
        top: null,
        left: null,
        right: null,
        bottom: null
    }, h = null, u, l, f;
    for (u = 0; u < a; u += 4)
        s[u + 3] !== 0 && (l = u / 4 % r,
        f = ~~(u / 4 / r),
        o.top === null && (o.top = f),
        (o.left === null || l < o.left) && (o.left = l),
        (o.right === null || o.right < l) && (o.right = l + 1),
        (o.bottom === null || o.bottom < f) && (o.bottom = f));
    return o.top !== null && (r = o.right - o.left,
    t = o.bottom - o.top + 1,
    h = e.getImageData(o.left, o.top, r, t)),
    {
        height: t,
        width: r,
        data: h
    }
}
var Na = /^\s*data:(?:([\w-]+)\/([\w+.-]+))?(?:;charset=([\w-]+))?(?:;(base64))?,(.*)/i;
function rl(i) {
    var r = Na.exec(i);
    if (r)
        return {
            mediaType: r[1] ? r[1].toLowerCase() : void 0,
            subType: r[2] ? r[2].toLowerCase() : void 0,
            charset: r[3] ? r[3].toLowerCase() : void 0,
            encoding: r[4] ? r[4].toLowerCase() : void 0,
            data: r[5]
        }
}
var Xr;
function Da(i, r) {
    if (r === void 0 && (r = window.location),
    i.indexOf("data:") === 0)
        return "";
    r = r || window.location,
    Xr || (Xr = document.createElement("a")),
    Xr.href = i;
    var t = ir(Xr.href)
      , e = !t.port && r.port === "" || t.port === r.port;
    return t.hostname !== r.hostname || !e || t.protocol !== r.protocol ? "anonymous" : ""
}
function ar(i, r) {
    var t = R.RETINA_PREFIX.exec(i);
    return t ? parseFloat(t[1]) : r !== void 0 ? r : 1
}
var Ua = Object.freeze({
    __proto__: null,
    BaseTextureCache: bt,
    CanvasRenderTarget: Vi,
    DATA_URI: Na,
    ProgramCache: zi,
    TextureCache: ft,
    clearTextureCache: el,
    correctBlendMode: Xi,
    createIndicesForQuads: Ra,
    decomposeDataUri: rl,
    deprecation: T,
    destroyTextureCache: tl,
    determineCrossOrigin: Da,
    getBufferType: Ma,
    getResolutionOfUrl: ar,
    hex2rgb: ue,
    hex2string: Ui,
    interleaveTypedArrays: Ju,
    isPow2: ji,
    isWebGLSupported: Aa,
    log2: Hi,
    nextPow2: sr,
    premultiplyBlendMode: ki,
    premultiplyRgba: Oa,
    premultiplyTint: kr,
    premultiplyTintToRgba: Gi,
    removeItems: le,
    rgb2hex: $u,
    sayHello: Ea,
    sign: fe,
    skipHello: qu,
    string2hex: Bi,
    trimCanvas: La,
    uid: ce,
    isMobile: ct,
    EventEmitter: Ae,
    earcut: Lr,
    url: ba
});
var de = Math.PI * 2, Yi = 180 / Math.PI, Wi = Math.PI / 180, J;
(function(i) {
    i[i.POLY = 0] = "POLY",
    i[i.RECT = 1] = "RECT",
    i[i.CIRC = 2] = "CIRC",
    i[i.ELIP = 3] = "ELIP",
    i[i.RREC = 4] = "RREC"
}
)(J || (J = {}));
var j = function() {
    function i(r, t, e, n) {
        r === void 0 && (r = 0),
        t === void 0 && (t = 0),
        e === void 0 && (e = 0),
        n === void 0 && (n = 0),
        this.x = Number(r),
        this.y = Number(t),
        this.width = Number(e),
        this.height = Number(n),
        this.type = J.RECT
    }
    return Object.defineProperty(i.prototype, "left", {
        get: function() {
            return this.x
        },
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(i.prototype, "right", {
        get: function() {
            return this.x + this.width
        },
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(i.prototype, "top", {
        get: function() {
            return this.y
        },
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(i.prototype, "bottom", {
        get: function() {
            return this.y + this.height
        },
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(i, "EMPTY", {
        get: function() {
            return new i(0,0,0,0)
        },
        enumerable: !1,
        configurable: !0
    }),
    i.prototype.clone = function() {
        return new i(this.x,this.y,this.width,this.height)
    }
    ,
    i.prototype.copyFrom = function(r) {
        return this.x = r.x,
        this.y = r.y,
        this.width = r.width,
        this.height = r.height,
        this
    }
    ,
    i.prototype.copyTo = function(r) {
        return r.x = this.x,
        r.y = this.y,
        r.width = this.width,
        r.height = this.height,
        r
    }
    ,
    i.prototype.contains = function(r, t) {
        return this.width <= 0 || this.height <= 0 ? !1 : r >= this.x && r < this.x + this.width && t >= this.y && t < this.y + this.height
    }
    ,
    i.prototype.pad = function(r, t) {
        return r === void 0 && (r = 0),
        t === void 0 && (t = r),
        this.x -= r,
        this.y -= t,
        this.width += r * 2,
        this.height += t * 2,
        this
    }
    ,
    i.prototype.fit = function(r) {
        var t = Math.max(this.x, r.x)
          , e = Math.min(this.x + this.width, r.x + r.width)
          , n = Math.max(this.y, r.y)
          , s = Math.min(this.y + this.height, r.y + r.height);
        return this.x = t,
        this.width = Math.max(e - t, 0),
        this.y = n,
        this.height = Math.max(s - n, 0),
        this
    }
    ,
    i.prototype.ceil = function(r, t) {
        r === void 0 && (r = 1),
        t === void 0 && (t = .001);
        var e = Math.ceil((this.x + this.width - t) * r) / r
          , n = Math.ceil((this.y + this.height - t) * r) / r;
        return this.x = Math.floor((this.x + t) * r) / r,
        this.y = Math.floor((this.y + t) * r) / r,
        this.width = e - this.x,
        this.height = n - this.y,
        this
    }
    ,
    i.prototype.enlarge = function(r) {
        var t = Math.min(this.x, r.x)
          , e = Math.max(this.x + this.width, r.x + r.width)
          , n = Math.min(this.y, r.y)
          , s = Math.max(this.y + this.height, r.y + r.height);
        return this.x = t,
        this.width = e - t,
        this.y = n,
        this.height = s - n,
        this
    }
    ,
    i
}()
  , Le = function() {
    function i(r, t, e) {
        r === void 0 && (r = 0),
        t === void 0 && (t = 0),
        e === void 0 && (e = 0),
        this.x = r,
        this.y = t,
        this.radius = e,
        this.type = J.CIRC
    }
    return i.prototype.clone = function() {
        return new i(this.x,this.y,this.radius)
    }
    ,
    i.prototype.contains = function(r, t) {
        if (this.radius <= 0)
            return !1;
        var e = this.radius * this.radius
          , n = this.x - r
          , s = this.y - t;
        return n *= n,
        s *= s,
        n + s <= e
    }
    ,
    i.prototype.getBounds = function() {
        return new j(this.x - this.radius,this.y - this.radius,this.radius * 2,this.radius * 2)
    }
    ,
    i
}()
  , qi = function() {
    function i(r, t, e, n) {
        r === void 0 && (r = 0),
        t === void 0 && (t = 0),
        e === void 0 && (e = 0),
        n === void 0 && (n = 0),
        this.x = r,
        this.y = t,
        this.width = e,
        this.height = n,
        this.type = J.ELIP
    }
    return i.prototype.clone = function() {
        return new i(this.x,this.y,this.width,this.height)
    }
    ,
    i.prototype.contains = function(r, t) {
        if (this.width <= 0 || this.height <= 0)
            return !1;
        var e = (r - this.x) / this.width
          , n = (t - this.y) / this.height;
        return e *= e,
        n *= n,
        e + n <= 1
    }
    ,
    i.prototype.getBounds = function() {
        return new j(this.x - this.width,this.y - this.height,this.width,this.height)
    }
    ,
    i
}()
  , pe = function() {
    function i() {
        for (var r = arguments, t = [], e = 0; e < arguments.length; e++)
            t[e] = r[e];
        var n = Array.isArray(t[0]) ? t[0] : t;
        if (typeof n[0] != "number") {
            for (var s = [], a = 0, o = n.length; a < o; a++)
                s.push(n[a].x, n[a].y);
            n = s
        }
        this.points = n,
        this.type = J.POLY,
        this.closeStroke = !0
    }
    return i.prototype.clone = function() {
        var r = this.points.slice()
          , t = new i(r);
        return t.closeStroke = this.closeStroke,
        t
    }
    ,
    i.prototype.contains = function(r, t) {
        for (var e = !1, n = this.points.length / 2, s = 0, a = n - 1; s < n; a = s++) {
            var o = this.points[s * 2]
              , h = this.points[s * 2 + 1]
              , u = this.points[a * 2]
              , l = this.points[a * 2 + 1]
              , f = h > t != l > t && r < (u - o) * ((t - h) / (l - h)) + o;
            f && (e = !e)
        }
        return e
    }
    ,
    i
}()
  , $i = function() {
    function i(r, t, e, n, s) {
        r === void 0 && (r = 0),
        t === void 0 && (t = 0),
        e === void 0 && (e = 0),
        n === void 0 && (n = 0),
        s === void 0 && (s = 20),
        this.x = r,
        this.y = t,
        this.width = e,
        this.height = n,
        this.radius = s,
        this.type = J.RREC
    }
    return i.prototype.clone = function() {
        return new i(this.x,this.y,this.width,this.height,this.radius)
    }
    ,
    i.prototype.contains = function(r, t) {
        if (this.width <= 0 || this.height <= 0)
            return !1;
        if (r >= this.x && r <= this.x + this.width && t >= this.y && t <= this.y + this.height) {
            if (t >= this.y + this.radius && t <= this.y + this.height - this.radius || r >= this.x + this.radius && r <= this.x + this.width - this.radius)
                return !0;
            var e = r - (this.x + this.radius)
              , n = t - (this.y + this.radius)
              , s = this.radius * this.radius;
            if (e * e + n * n <= s || (e = r - (this.x + this.width - this.radius),
            e * e + n * n <= s) || (n = t - (this.y + this.height - this.radius),
            e * e + n * n <= s) || (e = r - (this.x + this.radius),
            e * e + n * n <= s))
                return !0
        }
        return !1
    }
    ,
    i
}()
  , V = function() {
    function i(r, t) {
        r === void 0 && (r = 0),
        t === void 0 && (t = 0),
        this.x = r,
        this.y = t
    }
    return i.prototype.clone = function() {
        return new i(this.x,this.y)
    }
    ,
    i.prototype.copyFrom = function(r) {
        return this.set(r.x, r.y),
        this
    }
    ,
    i.prototype.copyTo = function(r) {
        return r.set(this.x, this.y),
        r
    }
    ,
    i.prototype.equals = function(r) {
        return r.x === this.x && r.y === this.y
    }
    ,
    i.prototype.set = function(r, t) {
        return r === void 0 && (r = 0),
        t === void 0 && (t = r),
        this.x = r,
        this.y = t,
        this
    }
    ,
    i
}()
  , te = function() {
    function i(r, t, e, n) {
        e === void 0 && (e = 0),
        n === void 0 && (n = 0),
        this._x = e,
        this._y = n,
        this.cb = r,
        this.scope = t
    }
    return i.prototype.clone = function(r, t) {
        return r === void 0 && (r = this.cb),
        t === void 0 && (t = this.scope),
        new i(r,t,this._x,this._y)
    }
    ,
    i.prototype.set = function(r, t) {
        return r === void 0 && (r = 0),
        t === void 0 && (t = r),
        (this._x !== r || this._y !== t) && (this._x = r,
        this._y = t,
        this.cb.call(this.scope)),
        this
    }
    ,
    i.prototype.copyFrom = function(r) {
        return (this._x !== r.x || this._y !== r.y) && (this._x = r.x,
        this._y = r.y,
        this.cb.call(this.scope)),
        this
    }
    ,
    i.prototype.copyTo = function(r) {
        return r.set(this._x, this._y),
        r
    }
    ,
    i.prototype.equals = function(r) {
        return r.x === this._x && r.y === this._y
    }
    ,
    Object.defineProperty(i.prototype, "x", {
        get: function() {
            return this._x
        },
        set: function(r) {
            this._x !== r && (this._x = r,
            this.cb.call(this.scope))
        },
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(i.prototype, "y", {
        get: function() {
            return this._y
        },
        set: function(r) {
            this._y !== r && (this._y = r,
            this.cb.call(this.scope))
        },
        enumerable: !1,
        configurable: !0
    }),
    i
}()
  , rt = function() {
    function i(r, t, e, n, s, a) {
        r === void 0 && (r = 1),
        t === void 0 && (t = 0),
        e === void 0 && (e = 0),
        n === void 0 && (n = 1),
        s === void 0 && (s = 0),
        a === void 0 && (a = 0),
        this.array = null,
        this.a = r,
        this.b = t,
        this.c = e,
        this.d = n,
        this.tx = s,
        this.ty = a
    }
    return i.prototype.fromArray = function(r) {
        this.a = r[0],
        this.b = r[1],
        this.c = r[3],
        this.d = r[4],
        this.tx = r[2],
        this.ty = r[5]
    }
    ,
    i.prototype.set = function(r, t, e, n, s, a) {
        return this.a = r,
        this.b = t,
        this.c = e,
        this.d = n,
        this.tx = s,
        this.ty = a,
        this
    }
    ,
    i.prototype.toArray = function(r, t) {
        this.array || (this.array = new Float32Array(9));
        var e = t || this.array;
        return r ? (e[0] = this.a,
        e[1] = this.b,
        e[2] = 0,
        e[3] = this.c,
        e[4] = this.d,
        e[5] = 0,
        e[6] = this.tx,
        e[7] = this.ty,
        e[8] = 1) : (e[0] = this.a,
        e[1] = this.c,
        e[2] = this.tx,
        e[3] = this.b,
        e[4] = this.d,
        e[5] = this.ty,
        e[6] = 0,
        e[7] = 0,
        e[8] = 1),
        e
    }
    ,
    i.prototype.apply = function(r, t) {
        t = t || new V;
        var e = r.x
          , n = r.y;
        return t.x = this.a * e + this.c * n + this.tx,
        t.y = this.b * e + this.d * n + this.ty,
        t
    }
    ,
    i.prototype.applyInverse = function(r, t) {
        t = t || new V;
        var e = 1 / (this.a * this.d + this.c * -this.b)
          , n = r.x
          , s = r.y;
        return t.x = this.d * e * n + -this.c * e * s + (this.ty * this.c - this.tx * this.d) * e,
        t.y = this.a * e * s + -this.b * e * n + (-this.ty * this.a + this.tx * this.b) * e,
        t
    }
    ,
    i.prototype.translate = function(r, t) {
        return this.tx += r,
        this.ty += t,
        this
    }
    ,
    i.prototype.scale = function(r, t) {
        return this.a *= r,
        this.d *= t,
        this.c *= r,
        this.b *= t,
        this.tx *= r,
        this.ty *= t,
        this
    }
    ,
    i.prototype.rotate = function(r) {
        var t = Math.cos(r)
          , e = Math.sin(r)
          , n = this.a
          , s = this.c
          , a = this.tx;
        return this.a = n * t - this.b * e,
        this.b = n * e + this.b * t,
        this.c = s * t - this.d * e,
        this.d = s * e + this.d * t,
        this.tx = a * t - this.ty * e,
        this.ty = a * e + this.ty * t,
        this
    }
    ,
    i.prototype.append = function(r) {
        var t = this.a
          , e = this.b
          , n = this.c
          , s = this.d;
        return this.a = r.a * t + r.b * n,
        this.b = r.a * e + r.b * s,
        this.c = r.c * t + r.d * n,
        this.d = r.c * e + r.d * s,
        this.tx = r.tx * t + r.ty * n + this.tx,
        this.ty = r.tx * e + r.ty * s + this.ty,
        this
    }
    ,
    i.prototype.setTransform = function(r, t, e, n, s, a, o, h, u) {
        return this.a = Math.cos(o + u) * s,
        this.b = Math.sin(o + u) * s,
        this.c = -Math.sin(o - h) * a,
        this.d = Math.cos(o - h) * a,
        this.tx = r - (e * this.a + n * this.c),
        this.ty = t - (e * this.b + n * this.d),
        this
    }
    ,
    i.prototype.prepend = function(r) {
        var t = this.tx;
        if (r.a !== 1 || r.b !== 0 || r.c !== 0 || r.d !== 1) {
            var e = this.a
              , n = this.c;
            this.a = e * r.a + this.b * r.c,
            this.b = e * r.b + this.b * r.d,
            this.c = n * r.a + this.d * r.c,
            this.d = n * r.b + this.d * r.d
        }
        return this.tx = t * r.a + this.ty * r.c + r.tx,
        this.ty = t * r.b + this.ty * r.d + r.ty,
        this
    }
    ,
    i.prototype.decompose = function(r) {
        var t = this.a
          , e = this.b
          , n = this.c
          , s = this.d
          , a = -Math.atan2(-n, s)
          , o = Math.atan2(e, t)
          , h = Math.abs(a + o);
        return h < 1e-5 || Math.abs(de - h) < 1e-5 ? (r.rotation = o,
        r.skew.x = r.skew.y = 0) : (r.rotation = 0,
        r.skew.x = a,
        r.skew.y = o),
        r.scale.x = Math.sqrt(t * t + e * e),
        r.scale.y = Math.sqrt(n * n + s * s),
        r.position.x = this.tx,
        r.position.y = this.ty,
        r
    }
    ,
    i.prototype.invert = function() {
        var r = this.a
          , t = this.b
          , e = this.c
          , n = this.d
          , s = this.tx
          , a = r * n - t * e;
        return this.a = n / a,
        this.b = -t / a,
        this.c = -e / a,
        this.d = r / a,
        this.tx = (e * this.ty - n * s) / a,
        this.ty = -(r * this.ty - t * s) / a,
        this
    }
    ,
    i.prototype.identity = function() {
        return this.a = 1,
        this.b = 0,
        this.c = 0,
        this.d = 1,
        this.tx = 0,
        this.ty = 0,
        this
    }
    ,
    i.prototype.clone = function() {
        var r = new i;
        return r.a = this.a,
        r.b = this.b,
        r.c = this.c,
        r.d = this.d,
        r.tx = this.tx,
        r.ty = this.ty,
        r
    }
    ,
    i.prototype.copyTo = function(r) {
        return r.a = this.a,
        r.b = this.b,
        r.c = this.c,
        r.d = this.d,
        r.tx = this.tx,
        r.ty = this.ty,
        r
    }
    ,
    i.prototype.copyFrom = function(r) {
        return this.a = r.a,
        this.b = r.b,
        this.c = r.c,
        this.d = r.d,
        this.tx = r.tx,
        this.ty = r.ty,
        this
    }
    ,
    Object.defineProperty(i, "IDENTITY", {
        get: function() {
            return new i
        },
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(i, "TEMP_MATRIX", {
        get: function() {
            return new i
        },
        enumerable: !1,
        configurable: !0
    }),
    i
}()
  , ve = [1, 1, 0, -1, -1, -1, 0, 1, 1, 1, 0, -1, -1, -1, 0, 1]
  , me = [0, 1, 1, 1, 0, -1, -1, -1, 0, 1, 1, 1, 0, -1, -1, -1]
  , ye = [0, -1, -1, -1, 0, 1, 1, 1, 0, 1, 1, 1, 0, -1, -1, -1]
  , ge = [1, 1, 0, -1, -1, -1, 0, 1, -1, -1, 0, 1, 1, 1, 0, -1]
  , Zi = []
  , Ba = []
  , Gr = Math.sign;
function il() {
    for (var i = 0; i < 16; i++) {
        var r = [];
        Zi.push(r);
        for (var t = 0; t < 16; t++)
            for (var e = Gr(ve[i] * ve[t] + ye[i] * me[t]), n = Gr(me[i] * ve[t] + ge[i] * me[t]), s = Gr(ve[i] * ye[t] + ye[i] * ge[t]), a = Gr(me[i] * ye[t] + ge[i] * ge[t]), o = 0; o < 16; o++)
                if (ve[o] === e && me[o] === n && ye[o] === s && ge[o] === a) {
                    r.push(o);
                    break
                }
    }
    for (var i = 0; i < 16; i++) {
        var h = new rt;
        h.set(ve[i], me[i], ye[i], ge[i], 0, 0),
        Ba.push(h)
    }
}
il();
var Z = {
    E: 0,
    SE: 1,
    S: 2,
    SW: 3,
    W: 4,
    NW: 5,
    N: 6,
    NE: 7,
    MIRROR_VERTICAL: 8,
    MAIN_DIAGONAL: 10,
    MIRROR_HORIZONTAL: 12,
    REVERSE_DIAGONAL: 14,
    uX: function(i) {
        return ve[i]
    },
    uY: function(i) {
        return me[i]
    },
    vX: function(i) {
        return ye[i]
    },
    vY: function(i) {
        return ge[i]
    },
    inv: function(i) {
        return i & 8 ? i & 15 : -i & 7
    },
    add: function(i, r) {
        return Zi[i][r]
    },
    sub: function(i, r) {
        return Zi[i][Z.inv(r)]
    },
    rotate180: function(i) {
        return i ^ 4
    },
    isVertical: function(i) {
        return (i & 3) == 2
    },
    byDirection: function(i, r) {
        return Math.abs(i) * 2 <= Math.abs(r) ? r >= 0 ? Z.S : Z.N : Math.abs(r) * 2 <= Math.abs(i) ? i > 0 ? Z.E : Z.W : r > 0 ? i > 0 ? Z.SE : Z.SW : i > 0 ? Z.NE : Z.NW
    },
    matrixAppendRotationInv: function(i, r, t, e) {
        t === void 0 && (t = 0),
        e === void 0 && (e = 0);
        var n = Ba[Z.inv(r)];
        n.tx = t,
        n.ty = e,
        i.append(n)
    }
}
  , jr = function() {
    function i() {
        this.worldTransform = new rt,
        this.localTransform = new rt,
        this.position = new te(this.onChange,this,0,0),
        this.scale = new te(this.onChange,this,1,1),
        this.pivot = new te(this.onChange,this,0,0),
        this.skew = new te(this.updateSkew,this,0,0),
        this._rotation = 0,
        this._cx = 1,
        this._sx = 0,
        this._cy = 0,
        this._sy = 1,
        this._localID = 0,
        this._currentLocalID = 0,
        this._worldID = 0,
        this._parentID = 0
    }
    return i.prototype.onChange = function() {
        this._localID++
    }
    ,
    i.prototype.updateSkew = function() {
        this._cx = Math.cos(this._rotation + this.skew.y),
        this._sx = Math.sin(this._rotation + this.skew.y),
        this._cy = -Math.sin(this._rotation - this.skew.x),
        this._sy = Math.cos(this._rotation - this.skew.x),
        this._localID++
    }
    ,
    i.prototype.updateLocalTransform = function() {
        var r = this.localTransform;
        this._localID !== this._currentLocalID && (r.a = this._cx * this.scale.x,
        r.b = this._sx * this.scale.x,
        r.c = this._cy * this.scale.y,
        r.d = this._sy * this.scale.y,
        r.tx = this.position.x - (this.pivot.x * r.a + this.pivot.y * r.c),
        r.ty = this.position.y - (this.pivot.x * r.b + this.pivot.y * r.d),
        this._currentLocalID = this._localID,
        this._parentID = -1)
    }
    ,
    i.prototype.updateTransform = function(r) {
        var t = this.localTransform;
        if (this._localID !== this._currentLocalID && (t.a = this._cx * this.scale.x,
        t.b = this._sx * this.scale.x,
        t.c = this._cy * this.scale.y,
        t.d = this._sy * this.scale.y,
        t.tx = this.position.x - (this.pivot.x * t.a + this.pivot.y * t.c),
        t.ty = this.position.y - (this.pivot.x * t.b + this.pivot.y * t.d),
        this._currentLocalID = this._localID,
        this._parentID = -1),
        this._parentID !== r._worldID) {
            var e = r.worldTransform
              , n = this.worldTransform;
            n.a = t.a * e.a + t.b * e.c,
            n.b = t.a * e.b + t.b * e.d,
            n.c = t.c * e.a + t.d * e.c,
            n.d = t.c * e.b + t.d * e.d,
            n.tx = t.tx * e.a + t.ty * e.c + e.tx,
            n.ty = t.tx * e.b + t.ty * e.d + e.ty,
            this._parentID = r._worldID,
            this._worldID++
        }
    }
    ,
    i.prototype.setFromMatrix = function(r) {
        r.decompose(this),
        this._localID++
    }
    ,
    Object.defineProperty(i.prototype, "rotation", {
        get: function() {
            return this._rotation
        },
        set: function(r) {
            this._rotation !== r && (this._rotation = r,
            this.updateSkew())
        },
        enumerable: !1,
        configurable: !0
    }),
    i.IDENTITY = new i,
    i
}();
R.SORTABLE_CHILDREN = !1;
var Ne = function() {
    function i() {
        this.minX = Infinity,
        this.minY = Infinity,
        this.maxX = -Infinity,
        this.maxY = -Infinity,
        this.rect = null,
        this.updateID = -1
    }
    return i.prototype.isEmpty = function() {
        return this.minX > this.maxX || this.minY > this.maxY
    }
    ,
    i.prototype.clear = function() {
        this.minX = Infinity,
        this.minY = Infinity,
        this.maxX = -Infinity,
        this.maxY = -Infinity
    }
    ,
    i.prototype.getRectangle = function(r) {
        return this.minX > this.maxX || this.minY > this.maxY ? j.EMPTY : (r = r || new j(0,0,1,1),
        r.x = this.minX,
        r.y = this.minY,
        r.width = this.maxX - this.minX,
        r.height = this.maxY - this.minY,
        r)
    }
    ,
    i.prototype.addPoint = function(r) {
        this.minX = Math.min(this.minX, r.x),
        this.maxX = Math.max(this.maxX, r.x),
        this.minY = Math.min(this.minY, r.y),
        this.maxY = Math.max(this.maxY, r.y)
    }
    ,
    i.prototype.addQuad = function(r) {
        var t = this.minX
          , e = this.minY
          , n = this.maxX
          , s = this.maxY
          , a = r[0]
          , o = r[1];
        t = a < t ? a : t,
        e = o < e ? o : e,
        n = a > n ? a : n,
        s = o > s ? o : s,
        a = r[2],
        o = r[3],
        t = a < t ? a : t,
        e = o < e ? o : e,
        n = a > n ? a : n,
        s = o > s ? o : s,
        a = r[4],
        o = r[5],
        t = a < t ? a : t,
        e = o < e ? o : e,
        n = a > n ? a : n,
        s = o > s ? o : s,
        a = r[6],
        o = r[7],
        t = a < t ? a : t,
        e = o < e ? o : e,
        n = a > n ? a : n,
        s = o > s ? o : s,
        this.minX = t,
        this.minY = e,
        this.maxX = n,
        this.maxY = s
    }
    ,
    i.prototype.addFrame = function(r, t, e, n, s) {
        this.addFrameMatrix(r.worldTransform, t, e, n, s)
    }
    ,
    i.prototype.addFrameMatrix = function(r, t, e, n, s) {
        var a = r.a
          , o = r.b
          , h = r.c
          , u = r.d
          , l = r.tx
          , f = r.ty
          , c = this.minX
          , d = this.minY
          , p = this.maxX
          , v = this.maxY
          , m = a * t + h * e + l
          , g = o * t + u * e + f;
        c = m < c ? m : c,
        d = g < d ? g : d,
        p = m > p ? m : p,
        v = g > v ? g : v,
        m = a * n + h * e + l,
        g = o * n + u * e + f,
        c = m < c ? m : c,
        d = g < d ? g : d,
        p = m > p ? m : p,
        v = g > v ? g : v,
        m = a * t + h * s + l,
        g = o * t + u * s + f,
        c = m < c ? m : c,
        d = g < d ? g : d,
        p = m > p ? m : p,
        v = g > v ? g : v,
        m = a * n + h * s + l,
        g = o * n + u * s + f,
        c = m < c ? m : c,
        d = g < d ? g : d,
        p = m > p ? m : p,
        v = g > v ? g : v,
        this.minX = c,
        this.minY = d,
        this.maxX = p,
        this.maxY = v
    }
    ,
    i.prototype.addVertexData = function(r, t, e) {
        for (var n = this.minX, s = this.minY, a = this.maxX, o = this.maxY, h = t; h < e; h += 2) {
            var u = r[h]
              , l = r[h + 1];
            n = u < n ? u : n,
            s = l < s ? l : s,
            a = u > a ? u : a,
            o = l > o ? l : o
        }
        this.minX = n,
        this.minY = s,
        this.maxX = a,
        this.maxY = o
    }
    ,
    i.prototype.addVertices = function(r, t, e, n) {
        this.addVerticesMatrix(r.worldTransform, t, e, n)
    }
    ,
    i.prototype.addVerticesMatrix = function(r, t, e, n, s, a) {
        s === void 0 && (s = 0),
        a === void 0 && (a = s);
        for (var o = r.a, h = r.b, u = r.c, l = r.d, f = r.tx, c = r.ty, d = this.minX, p = this.minY, v = this.maxX, m = this.maxY, g = e; g < n; g += 2) {
            var w = t[g]
              , y = t[g + 1]
              , I = o * w + u * y + f
              , x = l * y + h * w + c;
            d = Math.min(d, I - s),
            v = Math.max(v, I + s),
            p = Math.min(p, x - a),
            m = Math.max(m, x + a)
        }
        this.minX = d,
        this.minY = p,
        this.maxX = v,
        this.maxY = m
    }
    ,
    i.prototype.addBounds = function(r) {
        var t = this.minX
          , e = this.minY
          , n = this.maxX
          , s = this.maxY;
        this.minX = r.minX < t ? r.minX : t,
        this.minY = r.minY < e ? r.minY : e,
        this.maxX = r.maxX > n ? r.maxX : n,
        this.maxY = r.maxY > s ? r.maxY : s
    }
    ,
    i.prototype.addBoundsMask = function(r, t) {
        var e = r.minX > t.minX ? r.minX : t.minX
          , n = r.minY > t.minY ? r.minY : t.minY
          , s = r.maxX < t.maxX ? r.maxX : t.maxX
          , a = r.maxY < t.maxY ? r.maxY : t.maxY;
        if (e <= s && n <= a) {
            var o = this.minX
              , h = this.minY
              , u = this.maxX
              , l = this.maxY;
            this.minX = e < o ? e : o,
            this.minY = n < h ? n : h,
            this.maxX = s > u ? s : u,
            this.maxY = a > l ? a : l
        }
    }
    ,
    i.prototype.addBoundsMatrix = function(r, t) {
        this.addFrameMatrix(t, r.minX, r.minY, r.maxX, r.maxY)
    }
    ,
    i.prototype.addBoundsArea = function(r, t) {
        var e = r.minX > t.x ? r.minX : t.x
          , n = r.minY > t.y ? r.minY : t.y
          , s = r.maxX < t.x + t.width ? r.maxX : t.x + t.width
          , a = r.maxY < t.y + t.height ? r.maxY : t.y + t.height;
        if (e <= s && n <= a) {
            var o = this.minX
              , h = this.minY
              , u = this.maxX
              , l = this.maxY;
            this.minX = e < o ? e : o,
            this.minY = n < h ? n : h,
            this.maxX = s > u ? s : u,
            this.maxY = a > l ? a : l
        }
    }
    ,
    i.prototype.pad = function(r, t) {
        r === void 0 && (r = 0),
        t === void 0 && (t = r),
        this.isEmpty() || (this.minX -= r,
        this.maxX += r,
        this.minY -= t,
        this.maxY += t)
    }
    ,
    i.prototype.addFramePad = function(r, t, e, n, s, a) {
        r -= s,
        t -= a,
        e += s,
        n += a,
        this.minX = this.minX < r ? this.minX : r,
        this.maxX = this.maxX > e ? this.maxX : e,
        this.minY = this.minY < t ? this.minY : t,
        this.maxY = this.maxY > n ? this.maxY : n
    }
    ,
    i
}();
var Ki = function(i, r) {
    return Ki = Object.setPrototypeOf || {
        __proto__: []
    }instanceof Array && function(t, e) {
        t.__proto__ = e
    }
    || function(t, e) {
        for (var n in e)
            e.hasOwnProperty(n) && (t[n] = e[n])
    }
    ,
    Ki(i, r)
};
function Ji(i, r) {
    Ki(i, r);
    function t() {
        this.constructor = i
    }
    i.prototype = r === null ? Object.create(r) : (t.prototype = r.prototype,
    new t)
}
var Q = function(i) {
    Ji(r, i);
    function r() {
        var t = i.call(this) || this;
        return t.tempDisplayObjectParent = null,
        t.transform = new jr,
        t.alpha = 1,
        t.visible = !0,
        t.renderable = !0,
        t.parent = null,
        t.worldAlpha = 1,
        t._lastSortedIndex = 0,
        t._zIndex = 0,
        t.filterArea = null,
        t.filters = null,
        t._enabledFilters = null,
        t._bounds = new Ne,
        t._localBounds = null,
        t._boundsID = 0,
        t._boundsRect = null,
        t._localBoundsRect = null,
        t._mask = null,
        t._destroyed = !1,
        t.isSprite = !1,
        t.isMask = !1,
        t
    }
    return r.mixin = function(t) {
        for (var e = Object.keys(t), n = 0; n < e.length; ++n) {
            var s = e[n];
            Object.defineProperty(r.prototype, s, Object.getOwnPropertyDescriptor(t, s))
        }
    }
    ,
    r.prototype._recursivePostUpdateTransform = function() {
        this.parent ? (this.parent._recursivePostUpdateTransform(),
        this.transform.updateTransform(this.parent.transform)) : this.transform.updateTransform(this._tempDisplayObjectParent.transform)
    }
    ,
    r.prototype.updateTransform = function() {
        this._boundsID++,
        this.transform.updateTransform(this.parent.transform),
        this.worldAlpha = this.alpha * this.parent.worldAlpha
    }
    ,
    r.prototype.getBounds = function(t, e) {
        return t || (this.parent ? (this._recursivePostUpdateTransform(),
        this.updateTransform()) : (this.parent = this._tempDisplayObjectParent,
        this.updateTransform(),
        this.parent = null)),
        this._bounds.updateID !== this._boundsID && (this.calculateBounds(),
        this._bounds.updateID = this._boundsID),
        e || (this._boundsRect || (this._boundsRect = new j),
        e = this._boundsRect),
        this._bounds.getRectangle(e)
    }
    ,
    r.prototype.getLocalBounds = function(t) {
        t || (this._localBoundsRect || (this._localBoundsRect = new j),
        t = this._localBoundsRect),
        this._localBounds || (this._localBounds = new Ne);
        var e = this.transform
          , n = this.parent;
        this.parent = null,
        this.transform = this._tempDisplayObjectParent.transform;
        var s = this._bounds
          , a = this._boundsID;
        this._bounds = this._localBounds;
        var o = this.getBounds(!1, t);
        return this.parent = n,
        this.transform = e,
        this._bounds = s,
        this._bounds.updateID += this._boundsID - a,
        o
    }
    ,
    r.prototype.toGlobal = function(t, e, n) {
        return n === void 0 && (n = !1),
        n || (this._recursivePostUpdateTransform(),
        this.parent ? this.displayObjectUpdateTransform() : (this.parent = this._tempDisplayObjectParent,
        this.displayObjectUpdateTransform(),
        this.parent = null)),
        this.worldTransform.apply(t, e)
    }
    ,
    r.prototype.toLocal = function(t, e, n, s) {
        return e && (t = e.toGlobal(t, n, s)),
        s || (this._recursivePostUpdateTransform(),
        this.parent ? this.displayObjectUpdateTransform() : (this.parent = this._tempDisplayObjectParent,
        this.displayObjectUpdateTransform(),
        this.parent = null)),
        this.worldTransform.applyInverse(t, n)
    }
    ,
    r.prototype.setParent = function(t) {
        if (!t || !t.addChild)
            throw new Error("setParent: Argument must be a Container");
        return t.addChild(this),
        t
    }
    ,
    r.prototype.setTransform = function(t, e, n, s, a, o, h, u, l) {
        return t === void 0 && (t = 0),
        e === void 0 && (e = 0),
        n === void 0 && (n = 1),
        s === void 0 && (s = 1),
        a === void 0 && (a = 0),
        o === void 0 && (o = 0),
        h === void 0 && (h = 0),
        u === void 0 && (u = 0),
        l === void 0 && (l = 0),
        this.position.x = t,
        this.position.y = e,
        this.scale.x = n || 1,
        this.scale.y = s || 1,
        this.rotation = a,
        this.skew.x = o,
        this.skew.y = h,
        this.pivot.x = u,
        this.pivot.y = l,
        this
    }
    ,
    r.prototype.destroy = function(t) {
        this.parent && this.parent.removeChild(this),
        this.removeAllListeners(),
        this.transform = null,
        this.parent = null,
        this._bounds = null,
        this._mask = null,
        this.filters = null,
        this.filterArea = null,
        this.hitArea = null,
        this.interactive = !1,
        this.interactiveChildren = !1,
        this._destroyed = !0
    }
    ,
    Object.defineProperty(r.prototype, "_tempDisplayObjectParent", {
        get: function() {
            return this.tempDisplayObjectParent === null && (this.tempDisplayObjectParent = new Hr),
            this.tempDisplayObjectParent
        },
        enumerable: !1,
        configurable: !0
    }),
    r.prototype.enableTempParent = function() {
        var t = this.parent;
        return this.parent = this._tempDisplayObjectParent,
        t
    }
    ,
    r.prototype.disableTempParent = function(t) {
        this.parent = t
    }
    ,
    Object.defineProperty(r.prototype, "x", {
        get: function() {
            return this.position.x
        },
        set: function(t) {
            this.transform.position.x = t
        },
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(r.prototype, "y", {
        get: function() {
            return this.position.y
        },
        set: function(t) {
            this.transform.position.y = t
        },
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(r.prototype, "worldTransform", {
        get: function() {
            return this.transform.worldTransform
        },
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(r.prototype, "localTransform", {
        get: function() {
            return this.transform.localTransform
        },
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(r.prototype, "position", {
        get: function() {
            return this.transform.position
        },
        set: function(t) {
            this.transform.position.copyFrom(t)
        },
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(r.prototype, "scale", {
        get: function() {
            return this.transform.scale
        },
        set: function(t) {
            this.transform.scale.copyFrom(t)
        },
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(r.prototype, "pivot", {
        get: function() {
            return this.transform.pivot
        },
        set: function(t) {
            this.transform.pivot.copyFrom(t)
        },
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(r.prototype, "skew", {
        get: function() {
            return this.transform.skew
        },
        set: function(t) {
            this.transform.skew.copyFrom(t)
        },
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(r.prototype, "rotation", {
        get: function() {
            return this.transform.rotation
        },
        set: function(t) {
            this.transform.rotation = t
        },
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(r.prototype, "angle", {
        get: function() {
            return this.transform.rotation * Yi
        },
        set: function(t) {
            this.transform.rotation = t * Wi
        },
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(r.prototype, "zIndex", {
        get: function() {
            return this._zIndex
        },
        set: function(t) {
            this._zIndex = t,
            this.parent && (this.parent.sortDirty = !0)
        },
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(r.prototype, "worldVisible", {
        get: function() {
            var t = this;
            do {
                if (!t.visible)
                    return !1;
                t = t.parent
            } while (t);
            return !0
        },
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(r.prototype, "mask", {
        get: function() {
            return this._mask
        },
        set: function(t) {
            if (this._mask) {
                var e = this._mask.maskObject || this._mask;
                e.renderable = !0,
                e.isMask = !1
            }
            if (this._mask = t,
            this._mask) {
                var e = this._mask.maskObject || this._mask;
                e.renderable = !1,
                e.isMask = !0
            }
        },
        enumerable: !1,
        configurable: !0
    }),
    r
}(Ae)
  , Hr = function(i) {
    Ji(r, i);
    function r() {
        var t = i !== null && i.apply(this, arguments) || this;
        return t.sortDirty = null,
        t
    }
    return r
}(Q);
Q.prototype.displayObjectUpdateTransform = Q.prototype.updateTransform;
function nl(i, r) {
    return i.zIndex === r.zIndex ? i._lastSortedIndex - r._lastSortedIndex : i.zIndex - r.zIndex
}
var ot = function(i) {
    Ji(r, i);
    function r() {
        var t = i.call(this) || this;
        return t.children = [],
        t.sortableChildren = R.SORTABLE_CHILDREN,
        t.sortDirty = !1,
        t
    }
    return r.prototype.onChildrenChange = function(t) {}
    ,
    r.prototype.addChild = function() {
        for (var t = arguments, e = [], n = 0; n < arguments.length; n++)
            e[n] = t[n];
        if (e.length > 1)
            for (var s = 0; s < e.length; s++)
                this.addChild(e[s]);
        else {
            var a = e[0];
            a.parent && a.parent.removeChild(a),
            a.parent = this,
            this.sortDirty = !0,
            a.transform._parentID = -1,
            this.children.push(a),
            this._boundsID++,
            this.onChildrenChange(this.children.length - 1),
            this.emit("childAdded", a, this, this.children.length - 1),
            a.emit("added", this)
        }
        return e[0]
    }
    ,
    r.prototype.addChildAt = function(t, e) {
        if (e < 0 || e > this.children.length)
            throw new Error(t + "addChildAt: The index " + e + " supplied is out of bounds " + this.children.length);
        return t.parent && t.parent.removeChild(t),
        t.parent = this,
        this.sortDirty = !0,
        t.transform._parentID = -1,
        this.children.splice(e, 0, t),
        this._boundsID++,
        this.onChildrenChange(e),
        t.emit("added", this),
        this.emit("childAdded", t, this, e),
        t
    }
    ,
    r.prototype.swapChildren = function(t, e) {
        if (t !== e) {
            var n = this.getChildIndex(t)
              , s = this.getChildIndex(e);
            this.children[n] = e,
            this.children[s] = t,
            this.onChildrenChange(n < s ? n : s)
        }
    }
    ,
    r.prototype.getChildIndex = function(t) {
        var e = this.children.indexOf(t);
        if (e === -1)
            throw new Error("The supplied DisplayObject must be a child of the caller");
        return e
    }
    ,
    r.prototype.setChildIndex = function(t, e) {
        if (e < 0 || e >= this.children.length)
            throw new Error("The index " + e + " supplied is out of bounds " + this.children.length);
        var n = this.getChildIndex(t);
        le(this.children, n, 1),
        this.children.splice(e, 0, t),
        this.onChildrenChange(e)
    }
    ,
    r.prototype.getChildAt = function(t) {
        if (t < 0 || t >= this.children.length)
            throw new Error("getChildAt: Index (" + t + ") does not exist.");
        return this.children[t]
    }
    ,
    r.prototype.removeChild = function() {
        for (var t = arguments, e = [], n = 0; n < arguments.length; n++)
            e[n] = t[n];
        if (e.length > 1)
            for (var s = 0; s < e.length; s++)
                this.removeChild(e[s]);
        else {
            var a = e[0]
              , o = this.children.indexOf(a);
            if (o === -1)
                return null;
            a.parent = null,
            a.transform._parentID = -1,
            le(this.children, o, 1),
            this._boundsID++,
            this.onChildrenChange(o),
            a.emit("removed", this),
            this.emit("childRemoved", a, this, o)
        }
        return e[0]
    }
    ,
    r.prototype.removeChildAt = function(t) {
        var e = this.getChildAt(t);
        return e.parent = null,
        e.transform._parentID = -1,
        le(this.children, t, 1),
        this._boundsID++,
        this.onChildrenChange(t),
        e.emit("removed", this),
        this.emit("childRemoved", e, this, t),
        e
    }
    ,
    r.prototype.removeChildren = function(t, e) {
        t === void 0 && (t = 0),
        e === void 0 && (e = this.children.length);
        var n = t, s = e, a = s - n, o;
        if (a > 0 && a <= s) {
            o = this.children.splice(n, a);
            for (var h = 0; h < o.length; ++h)
                o[h].parent = null,
                o[h].transform && (o[h].transform._parentID = -1);
            this._boundsID++,
            this.onChildrenChange(t);
            for (var h = 0; h < o.length; ++h)
                o[h].emit("removed", this),
                this.emit("childRemoved", o[h], this, h);
            return o
        } else if (a === 0 && this.children.length === 0)
            return [];
        throw new RangeError("removeChildren: numeric values are outside the acceptable range.")
    }
    ,
    r.prototype.sortChildren = function() {
        for (var t = !1, e = 0, n = this.children.length; e < n; ++e) {
            var s = this.children[e];
            s._lastSortedIndex = e,
            !t && s.zIndex !== 0 && (t = !0)
        }
        t && this.children.length > 1 && this.children.sort(nl),
        this.sortDirty = !1
    }
    ,
    r.prototype.updateTransform = function() {
        this.sortableChildren && this.sortDirty && this.sortChildren(),
        this._boundsID++,
        this.transform.updateTransform(this.parent.transform),
        this.worldAlpha = this.alpha * this.parent.worldAlpha;
        for (var t = 0, e = this.children.length; t < e; ++t) {
            var n = this.children[t];
            n.visible && n.updateTransform()
        }
    }
    ,
    r.prototype.calculateBounds = function() {
        this._bounds.clear(),
        this._calculateBounds();
        for (var t = 0; t < this.children.length; t++) {
            var e = this.children[t];
            if (!(!e.visible || !e.renderable))
                if (e.calculateBounds(),
                e._mask) {
                    var n = e._mask.maskObject || e._mask;
                    n.calculateBounds(),
                    this._bounds.addBoundsMask(e._bounds, n._bounds)
                } else
                    e.filterArea ? this._bounds.addBoundsArea(e._bounds, e.filterArea) : this._bounds.addBounds(e._bounds)
        }
        this._bounds.updateID = this._boundsID
    }
    ,
    r.prototype.getLocalBounds = function(t, e) {
        e === void 0 && (e = !1);
        var n = i.prototype.getLocalBounds.call(this, t);
        if (!e)
            for (var s = 0, a = this.children.length; s < a; ++s) {
                var o = this.children[s];
                o.visible && o.updateTransform()
            }
        return n
    }
    ,
    r.prototype._calculateBounds = function() {}
    ,
    r.prototype.render = function(t) {
        if (!(!this.visible || this.worldAlpha <= 0 || !this.renderable))
            if (this._mask || this.filters && this.filters.length)
                this.renderAdvanced(t);
            else {
                this._render(t);
                for (var e = 0, n = this.children.length; e < n; ++e)
                    this.children[e].render(t)
            }
    }
    ,
    r.prototype.renderAdvanced = function(t) {
        t.batch.flush();
        var e = this.filters
          , n = this._mask;
        if (e) {
            this._enabledFilters || (this._enabledFilters = []),
            this._enabledFilters.length = 0;
            for (var s = 0; s < e.length; s++)
                e[s].enabled && this._enabledFilters.push(e[s]);
            this._enabledFilters.length && t.filter.push(this, this._enabledFilters)
        }
        n && t.mask.push(this, this._mask),
        this._render(t);
        for (var s = 0, a = this.children.length; s < a; s++)
            this.children[s].render(t);
        t.batch.flush(),
        n && t.mask.pop(this),
        e && this._enabledFilters && this._enabledFilters.length && t.filter.pop()
    }
    ,
    r.prototype._render = function(t) {}
    ,
    r.prototype.destroy = function(t) {
        i.prototype.destroy.call(this),
        this.sortDirty = !1;
        var e = typeof t == "boolean" ? t : t && t.children
          , n = this.removeChildren(0, this.children.length);
        if (e)
            for (var s = 0; s < n.length; ++s)
                n[s].destroy(t)
    }
    ,
    Object.defineProperty(r.prototype, "width", {
        get: function() {
            return this.scale.x * this.getLocalBounds().width
        },
        set: function(t) {
            var e = this.getLocalBounds().width;
            e !== 0 ? this.scale.x = t / e : this.scale.x = 1,
            this._width = t
        },
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(r.prototype, "height", {
        get: function() {
            return this.scale.y * this.getLocalBounds().height
        },
        set: function(t) {
            var e = this.getLocalBounds().height;
            e !== 0 ? this.scale.y = t / e : this.scale.y = 1,
            this._height = t
        },
        enumerable: !1,
        configurable: !0
    }),
    r
}(Q);
ot.prototype.containerUpdateTransform = ot.prototype.updateTransform;
var Qi = {
    accessible: !1,
    accessibleTitle: null,
    accessibleHint: null,
    tabIndex: 0,
    _accessibleActive: !1,
    _accessibleDiv: null,
    accessibleType: "button",
    accessiblePointerEvents: "auto",
    accessibleChildren: !0,
    renderId: -1
};
Q.mixin(Qi);
var sl = 9
  , zr = 100
  , al = 0
  , ol = 0
  , ka = 2
  , Xa = 1
  , hl = -1e3
  , ul = -1e3
  , ll = 2
  , tn = function() {
    function i(r) {
        this._hookDiv = null,
        (ct.tablet || ct.phone) && this.createTouchHook();
        var t = document.createElement("div");
        t.style.width = zr + "px",
        t.style.height = zr + "px",
        t.style.position = "absolute",
        t.style.top = al + "px",
        t.style.left = ol + "px",
        t.style.zIndex = ka.toString(),
        this.div = t,
        this.pool = [],
        this.renderId = 0,
        this.debug = !1,
        this.renderer = r,
        this.children = [],
        this._onKeyDown = this._onKeyDown.bind(this),
        this._onMouseMove = this._onMouseMove.bind(this),
        this._isActive = !1,
        this._isMobileAccessibility = !1,
        this.androidUpdateCount = 0,
        this.androidUpdateFrequency = 500,
        window.addEventListener("keydown", this._onKeyDown, !1)
    }
    return Object.defineProperty(i.prototype, "isActive", {
        get: function() {
            return this._isActive
        },
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(i.prototype, "isMobileAccessibility", {
        get: function() {
            return this._isMobileAccessibility
        },
        enumerable: !1,
        configurable: !0
    }),
    i.prototype.createTouchHook = function() {
        var r = this
          , t = document.createElement("button");
        t.style.width = Xa + "px",
        t.style.height = Xa + "px",
        t.style.position = "absolute",
        t.style.top = hl + "px",
        t.style.left = ul + "px",
        t.style.zIndex = ll.toString(),
        t.style.backgroundColor = "#FF0000",
        t.title = "select to enable accessability for this content",
        t.addEventListener("focus", function() {
            r._isMobileAccessibility = !0,
            r.activate(),
            r.destroyTouchHook()
        }),
        document.body.appendChild(t),
        this._hookDiv = t
    }
    ,
    i.prototype.destroyTouchHook = function() {
        !this._hookDiv || (document.body.removeChild(this._hookDiv),
        this._hookDiv = null)
    }
    ,
    i.prototype.activate = function() {
        this._isActive || (this._isActive = !0,
        window.document.addEventListener("mousemove", this._onMouseMove, !0),
        window.removeEventListener("keydown", this._onKeyDown, !1),
        this.renderer.on("postrender", this.update, this),
        this.renderer.view.parentNode && this.renderer.view.parentNode.appendChild(this.div))
    }
    ,
    i.prototype.deactivate = function() {
        !this._isActive || this._isMobileAccessibility || (this._isActive = !1,
        window.document.removeEventListener("mousemove", this._onMouseMove, !0),
        window.addEventListener("keydown", this._onKeyDown, !1),
        this.renderer.off("postrender", this.update),
        this.div.parentNode && this.div.parentNode.removeChild(this.div))
    }
    ,
    i.prototype.updateAccessibleObjects = function(r) {
        if (!(!r.visible || !r.accessibleChildren)) {
            r.accessible && r.interactive && (r._accessibleActive || this.addChild(r),
            r.renderId = this.renderId);
            for (var t = r.children, e = 0; e < t.length; e++)
                this.updateAccessibleObjects(t[e])
        }
    }
    ,
    i.prototype.update = function() {
        var r = performance.now();
        if (!(ct.android.device && r < this.androidUpdateCount) && (this.androidUpdateCount = r + this.androidUpdateFrequency,
        !!this.renderer.renderingToScreen)) {
            this.renderer._lastObjectRendered && this.updateAccessibleObjects(this.renderer._lastObjectRendered);
            var t = this.renderer.view.getBoundingClientRect()
              , e = this.renderer.resolution
              , n = t.width / this.renderer.width * e
              , s = t.height / this.renderer.height * e
              , a = this.div;
            a.style.left = t.left + "px",
            a.style.top = t.top + "px",
            a.style.width = this.renderer.width + "px",
            a.style.height = this.renderer.height + "px";
            for (var o = 0; o < this.children.length; o++) {
                var h = this.children[o];
                if (h.renderId !== this.renderId)
                    h._accessibleActive = !1,
                    le(this.children, o, 1),
                    this.div.removeChild(h._accessibleDiv),
                    this.pool.push(h._accessibleDiv),
                    h._accessibleDiv = null,
                    o--;
                else {
                    a = h._accessibleDiv;
                    var u = h.hitArea
                      , l = h.worldTransform;
                    h.hitArea ? (a.style.left = (l.tx + u.x * l.a) * n + "px",
                    a.style.top = (l.ty + u.y * l.d) * s + "px",
                    a.style.width = u.width * l.a * n + "px",
                    a.style.height = u.height * l.d * s + "px") : (u = h.getBounds(),
                    this.capHitArea(u),
                    a.style.left = u.x * n + "px",
                    a.style.top = u.y * s + "px",
                    a.style.width = u.width * n + "px",
                    a.style.height = u.height * s + "px",
                    a.title !== h.accessibleTitle && h.accessibleTitle !== null && (a.title = h.accessibleTitle),
                    a.getAttribute("aria-label") !== h.accessibleHint && h.accessibleHint !== null && a.setAttribute("aria-label", h.accessibleHint)),
                    (h.accessibleTitle !== a.title || h.tabIndex !== a.tabIndex) && (a.title = h.accessibleTitle,
                    a.tabIndex = h.tabIndex,
                    this.debug && this.updateDebugHTML(a))
                }
            }
            this.renderId++
        }
    }
    ,
    i.prototype.updateDebugHTML = function(r) {
        r.innerHTML = "type: " + r.type + "</br> title : " + r.title + "</br> tabIndex: " + r.tabIndex
    }
    ,
    i.prototype.capHitArea = function(r) {
        r.x < 0 && (r.width += r.x,
        r.x = 0),
        r.y < 0 && (r.height += r.y,
        r.y = 0),
        r.x + r.width > this.renderer.width && (r.width = this.renderer.width - r.x),
        r.y + r.height > this.renderer.height && (r.height = this.renderer.height - r.y)
    }
    ,
    i.prototype.addChild = function(r) {
        var t = this.pool.pop();
        t || (t = document.createElement("button"),
        t.style.width = zr + "px",
        t.style.height = zr + "px",
        t.style.backgroundColor = this.debug ? "rgba(255,255,255,0.5)" : "transparent",
        t.style.position = "absolute",
        t.style.zIndex = ka.toString(),
        t.style.borderStyle = "none",
        navigator.userAgent.toLowerCase().indexOf("chrome") > -1 ? t.setAttribute("aria-live", "off") : t.setAttribute("aria-live", "polite"),
        navigator.userAgent.match(/rv:.*Gecko\//) ? t.setAttribute("aria-relevant", "additions") : t.setAttribute("aria-relevant", "text"),
        t.addEventListener("click", this._onClick.bind(this)),
        t.addEventListener("focus", this._onFocus.bind(this)),
        t.addEventListener("focusout", this._onFocusOut.bind(this))),
        t.style.pointerEvents = r.accessiblePointerEvents,
        t.type = r.accessibleType,
        r.accessibleTitle && r.accessibleTitle !== null ? t.title = r.accessibleTitle : (!r.accessibleHint || r.accessibleHint === null) && (t.title = "displayObject " + r.tabIndex),
        r.accessibleHint && r.accessibleHint !== null && t.setAttribute("aria-label", r.accessibleHint),
        this.debug && this.updateDebugHTML(t),
        r._accessibleActive = !0,
        r._accessibleDiv = t,
        t.displayObject = r,
        this.children.push(r),
        this.div.appendChild(r._accessibleDiv),
        r._accessibleDiv.tabIndex = r.tabIndex
    }
    ,
    i.prototype._onClick = function(r) {
        var t = this.renderer.plugins.interaction;
        t.dispatchEvent(r.target.displayObject, "click", t.eventData),
        t.dispatchEvent(r.target.displayObject, "pointertap", t.eventData),
        t.dispatchEvent(r.target.displayObject, "tap", t.eventData)
    }
    ,
    i.prototype._onFocus = function(r) {
        r.target.getAttribute("aria-live") || r.target.setAttribute("aria-live", "assertive");
        var t = this.renderer.plugins.interaction;
        t.dispatchEvent(r.target.displayObject, "mouseover", t.eventData)
    }
    ,
    i.prototype._onFocusOut = function(r) {
        r.target.getAttribute("aria-live") || r.target.setAttribute("aria-live", "polite");
        var t = this.renderer.plugins.interaction;
        t.dispatchEvent(r.target.displayObject, "mouseout", t.eventData)
    }
    ,
    i.prototype._onKeyDown = function(r) {
        r.keyCode === sl && this.activate()
    }
    ,
    i.prototype._onMouseMove = function(r) {
        r.movementX === 0 && r.movementY === 0 || this.deactivate()
    }
    ,
    i.prototype.destroy = function() {
        this.destroyTouchHook(),
        this.div = null,
        window.document.removeEventListener("mousemove", this._onMouseMove, !0),
        window.removeEventListener("keydown", this._onKeyDown),
        this.pool = null,
        this.children = null,
        this.renderer = null
    }
    ,
    i
}();
R.TARGET_FPMS = .06;
var wt;
(function(i) {
    i[i.INTERACTION = 50] = "INTERACTION",
    i[i.HIGH = 25] = "HIGH",
    i[i.NORMAL = 0] = "NORMAL",
    i[i.LOW = -25] = "LOW",
    i[i.UTILITY = -50] = "UTILITY"
}
)(wt || (wt = {}));
var en = function() {
    function i(r, t, e, n) {
        t === void 0 && (t = null),
        e === void 0 && (e = 0),
        n === void 0 && (n = !1),
        this.fn = r,
        this.context = t,
        this.priority = e,
        this.once = n,
        this.next = null,
        this.previous = null,
        this._destroyed = !1
    }
    return i.prototype.match = function(r, t) {
        return t === void 0 && (t = null),
        this.fn === r && this.context === t
    }
    ,
    i.prototype.emit = function(r) {
        this.fn && (this.context ? this.fn.call(this.context, r) : this.fn(r));
        var t = this.next;
        return this.once && this.destroy(!0),
        this._destroyed && (this.next = null),
        t
    }
    ,
    i.prototype.connect = function(r) {
        this.previous = r,
        r.next && (r.next.previous = this),
        this.next = r.next,
        r.next = this
    }
    ,
    i.prototype.destroy = function(r) {
        r === void 0 && (r = !1),
        this._destroyed = !0,
        this.fn = null,
        this.context = null,
        this.previous && (this.previous.next = this.next),
        this.next && (this.next.previous = this.previous);
        var t = this.next;
        return this.next = r ? null : t,
        this.previous = null,
        t
    }
    ,
    i
}()
  , it = function() {
    function i() {
        var r = this;
        this._head = new en(null,null,Infinity),
        this._requestId = null,
        this._maxElapsedMS = 100,
        this._minElapsedMS = 0,
        this.autoStart = !1,
        this.deltaTime = 1,
        this.deltaMS = 1 / R.TARGET_FPMS,
        this.elapsedMS = 1 / R.TARGET_FPMS,
        this.lastTime = -1,
        this.speed = 1,
        this.started = !1,
        this._protected = !1,
        this._lastFrame = -1,
        this._tick = function(t) {
            r._requestId = null,
            r.started && (r.update(t),
            r.started && r._requestId === null && r._head.next && (r._requestId = requestAnimationFrame(r._tick)))
        }
    }
    return i.prototype._requestIfNeeded = function() {
        this._requestId === null && this._head.next && (this.lastTime = performance.now(),
        this._lastFrame = this.lastTime,
        this._requestId = requestAnimationFrame(this._tick))
    }
    ,
    i.prototype._cancelIfNeeded = function() {
        this._requestId !== null && (cancelAnimationFrame(this._requestId),
        this._requestId = null)
    }
    ,
    i.prototype._startIfPossible = function() {
        this.started ? this._requestIfNeeded() : this.autoStart && this.start()
    }
    ,
    i.prototype.add = function(r, t, e) {
        return e === void 0 && (e = wt.NORMAL),
        this._addListener(new en(r,t,e))
    }
    ,
    i.prototype.addOnce = function(r, t, e) {
        return e === void 0 && (e = wt.NORMAL),
        this._addListener(new en(r,t,e,!0))
    }
    ,
    i.prototype._addListener = function(r) {
        var t = this._head.next
          , e = this._head;
        if (!t)
            r.connect(e);
        else {
            for (; t; ) {
                if (r.priority > t.priority) {
                    r.connect(e);
                    break
                }
                e = t,
                t = t.next
            }
            r.previous || r.connect(e)
        }
        return this._startIfPossible(),
        this
    }
    ,
    i.prototype.remove = function(r, t) {
        for (var e = this._head.next; e; )
            e.match(r, t) ? e = e.destroy() : e = e.next;
        return this._head.next || this._cancelIfNeeded(),
        this
    }
    ,
    Object.defineProperty(i.prototype, "count", {
        get: function() {
            if (!this._head)
                return 0;
            for (var r = 0, t = this._head; t = t.next; )
                r++;
            return r
        },
        enumerable: !1,
        configurable: !0
    }),
    i.prototype.start = function() {
        this.started || (this.started = !0,
        this._requestIfNeeded())
    }
    ,
    i.prototype.stop = function() {
        this.started && (this.started = !1,
        this._cancelIfNeeded())
    }
    ,
    i.prototype.destroy = function() {
        if (!this._protected) {
            this.stop();
            for (var r = this._head.next; r; )
                r = r.destroy(!0);
            this._head.destroy(),
            this._head = null
        }
    }
    ,
    i.prototype.update = function(r) {
        r === void 0 && (r = performance.now());
        var t;
        if (r > this.lastTime) {
            if (t = this.elapsedMS = r - this.lastTime,
            t > this._maxElapsedMS && (t = this._maxElapsedMS),
            t *= this.speed,
            this._minElapsedMS) {
                var e = r - this._lastFrame | 0;
                if (e < this._minElapsedMS)
                    return;
                this._lastFrame = r - e % this._minElapsedMS
            }
            this.deltaMS = t,
            this.deltaTime = this.deltaMS * R.TARGET_FPMS;
            for (var n = this._head, s = n.next; s; )
                s = s.emit(this.deltaTime);
            n.next || this._cancelIfNeeded()
        } else
            this.deltaTime = this.deltaMS = this.elapsedMS = 0;
        this.lastTime = r
    }
    ,
    Object.defineProperty(i.prototype, "FPS", {
        get: function() {
            return 1e3 / this.elapsedMS
        },
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(i.prototype, "minFPS", {
        get: function() {
            return 1e3 / this._maxElapsedMS
        },
        set: function(r) {
            var t = Math.min(this.maxFPS, r)
              , e = Math.min(Math.max(0, t) / 1e3, R.TARGET_FPMS);
            this._maxElapsedMS = 1 / e
        },
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(i.prototype, "maxFPS", {
        get: function() {
            return this._minElapsedMS ? Math.round(1e3 / this._minElapsedMS) : 0
        },
        set: function(r) {
            if (r === 0)
                this._minElapsedMS = 0;
            else {
                var t = Math.max(this.minFPS, r);
                this._minElapsedMS = 1 / (t / 1e3)
            }
        },
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(i, "shared", {
        get: function() {
            if (!i._shared) {
                var r = i._shared = new i;
                r.autoStart = !0,
                r._protected = !0
            }
            return i._shared
        },
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(i, "system", {
        get: function() {
            if (!i._system) {
                var r = i._system = new i;
                r.autoStart = !0,
                r._protected = !0
            }
            return i._system
        },
        enumerable: !1,
        configurable: !0
    }),
    i
}()
  , rn = function() {
    function i() {}
    return i.init = function(r) {
        var t = this;
        r = Object.assign({
            autoStart: !0,
            sharedTicker: !1
        }, r),
        Object.defineProperty(this, "ticker", {
            set: function(e) {
                this._ticker && this._ticker.remove(this.render, this),
                this._ticker = e,
                e && e.add(this.render, this, wt.LOW)
            },
            get: function() {
                return this._ticker
            }
        }),
        this.stop = function() {
            t._ticker.stop()
        }
        ,
        this.start = function() {
            t._ticker.start()
        }
        ,
        this._ticker = null,
        this.ticker = r.sharedTicker ? it.shared : new it,
        r.autoStart && this.start()
    }
    ,
    i.destroy = function() {
        if (this._ticker) {
            var r = this._ticker;
            this.ticker = null,
            r.destroy()
        }
    }
    ,
    i
}();
var Vr = function() {
    function i() {
        this.pressure = 0,
        this.rotationAngle = 0,
        this.twist = 0,
        this.tangentialPressure = 0,
        this.global = new V,
        this.target = null,
        this.originalEvent = null,
        this.identifier = null,
        this.isPrimary = !1,
        this.button = 0,
        this.buttons = 0,
        this.width = 0,
        this.height = 0,
        this.tiltX = 0,
        this.tiltY = 0,
        this.pointerType = null,
        this.pressure = 0,
        this.rotationAngle = 0,
        this.twist = 0,
        this.tangentialPressure = 0
    }
    return Object.defineProperty(i.prototype, "pointerId", {
        get: function() {
            return this.identifier
        },
        enumerable: !1,
        configurable: !0
    }),
    i.prototype.getLocalPosition = function(r, t, e) {
        return r.worldTransform.applyInverse(e || this.global, t)
    }
    ,
    i.prototype.copyEvent = function(r) {
        "isPrimary"in r && r.isPrimary && (this.isPrimary = !0),
        this.button = "button"in r && r.button;
        var t = "buttons"in r && r.buttons;
        this.buttons = Number.isInteger(t) ? t : "which"in r && r.which,
        this.width = "width"in r && r.width,
        this.height = "height"in r && r.height,
        this.tiltX = "tiltX"in r && r.tiltX,
        this.tiltY = "tiltY"in r && r.tiltY,
        this.pointerType = "pointerType"in r && r.pointerType,
        this.pressure = "pressure"in r && r.pressure,
        this.rotationAngle = "rotationAngle"in r && r.rotationAngle,
        this.twist = "twist"in r && r.twist || 0,
        this.tangentialPressure = "tangentialPressure"in r && r.tangentialPressure || 0
    }
    ,
    i.prototype.reset = function() {
        this.isPrimary = !1
    }
    ,
    i
}();
var nn = function(i, r) {
    return nn = Object.setPrototypeOf || {
        __proto__: []
    }instanceof Array && function(t, e) {
        t.__proto__ = e
    }
    || function(t, e) {
        for (var n in e)
            e.hasOwnProperty(n) && (t[n] = e[n])
    }
    ,
    nn(i, r)
};
function fl(i, r) {
    nn(i, r);
    function t() {
        this.constructor = i
    }
    i.prototype = r === null ? Object.create(r) : (t.prototype = r.prototype,
    new t)
}
var sn = function() {
    function i() {
        this.stopped = !1,
        this.stopsPropagatingAt = null,
        this.stopPropagationHint = !1,
        this.target = null,
        this.currentTarget = null,
        this.type = null,
        this.data = null
    }
    return i.prototype.stopPropagation = function() {
        this.stopped = !0,
        this.stopPropagationHint = !0,
        this.stopsPropagatingAt = this.currentTarget
    }
    ,
    i.prototype.reset = function() {
        this.stopped = !1,
        this.stopsPropagatingAt = null,
        this.stopPropagationHint = !1,
        this.currentTarget = null,
        this.target = null
    }
    ,
    i
}()
  , or = function() {
    function i(r) {
        this._pointerId = r,
        this._flags = i.FLAGS.NONE
    }
    return i.prototype._doSet = function(r, t) {
        t ? this._flags = this._flags | r : this._flags = this._flags & ~r
    }
    ,
    Object.defineProperty(i.prototype, "pointerId", {
        get: function() {
            return this._pointerId
        },
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(i.prototype, "flags", {
        get: function() {
            return this._flags
        },
        set: function(r) {
            this._flags = r
        },
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(i.prototype, "none", {
        get: function() {
            return this._flags === i.FLAGS.NONE
        },
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(i.prototype, "over", {
        get: function() {
            return (this._flags & i.FLAGS.OVER) != 0
        },
        set: function(r) {
            this._doSet(i.FLAGS.OVER, r)
        },
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(i.prototype, "rightDown", {
        get: function() {
            return (this._flags & i.FLAGS.RIGHT_DOWN) != 0
        },
        set: function(r) {
            this._doSet(i.FLAGS.RIGHT_DOWN, r)
        },
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(i.prototype, "leftDown", {
        get: function() {
            return (this._flags & i.FLAGS.LEFT_DOWN) != 0
        },
        set: function(r) {
            this._doSet(i.FLAGS.LEFT_DOWN, r)
        },
        enumerable: !1,
        configurable: !0
    }),
    i.FLAGS = Object.freeze({
        NONE: 0,
        OVER: 1 << 0,
        LEFT_DOWN: 1 << 1,
        RIGHT_DOWN: 1 << 2
    }),
    i
}()
  , cl = function() {
    function i() {
        this._tempPoint = new V
    }
    return i.prototype.recursiveFindHit = function(r, t, e, n, s) {
        if (!t || !t.visible)
            return !1;
        var a = r.data.global;
        s = t.interactive || s;
        var o = !1
          , h = s
          , u = !0;
        if (t.hitArea ? (n && (t.worldTransform.applyInverse(a, this._tempPoint),
        t.hitArea.contains(this._tempPoint.x, this._tempPoint.y) ? o = !0 : (n = !1,
        u = !1)),
        h = !1) : t._mask && n && (t._mask.containsPoint && t._mask.containsPoint(a) || (n = !1)),
        u && t.interactiveChildren && t.children)
            for (var l = t.children, f = l.length - 1; f >= 0; f--) {
                var c = l[f]
                  , d = this.recursiveFindHit(r, c, e, n, h);
                if (d) {
                    if (!c.parent)
                        continue;
                    h = !1,
                    d && (r.target && (n = !1),
                    o = !0)
                }
            }
        return s && (n && !r.target && !t.hitArea && t.containsPoint && t.containsPoint(a) && (o = !0),
        t.interactive && (o && !r.target && (r.target = t),
        e && e(r, t, !!o))),
        o
    }
    ,
    i.prototype.findHit = function(r, t, e, n) {
        this.recursiveFindHit(r, t, e, n, !1)
    }
    ,
    i
}()
  , an = {
    interactive: !1,
    interactiveChildren: !0,
    hitArea: null,
    get buttonMode() {
        return this.cursor === "pointer"
    },
    set buttonMode(i) {
        i ? this.cursor = "pointer" : this.cursor === "pointer" && (this.cursor = null)
    },
    cursor: null,
    get trackedPointers() {
        return this._trackedPointers === void 0 && (this._trackedPointers = {}),
        this._trackedPointers
    },
    _trackedPointers: void 0
};
Q.mixin(an);
var Yr = 1
  , Wr = {
    target: null,
    data: {
        global: null
    }
}
  , on = function(i) {
    fl(r, i);
    function r(t, e) {
        var n = i.call(this) || this;
        return e = e || {},
        n.renderer = t,
        n.autoPreventDefault = e.autoPreventDefault !== void 0 ? e.autoPreventDefault : !0,
        n.interactionFrequency = e.interactionFrequency || 10,
        n.mouse = new Vr,
        n.mouse.identifier = Yr,
        n.mouse.global.set(-999999),
        n.activeInteractionData = {},
        n.activeInteractionData[Yr] = n.mouse,
        n.interactionDataPool = [],
        n.eventData = new sn,
        n.interactionDOMElement = null,
        n.moveWhenInside = !1,
        n.eventsAdded = !1,
        n.tickerAdded = !1,
        n.mouseOverRenderer = !1,
        n.supportsTouchEvents = "ontouchstart"in window,
        n.supportsPointerEvents = !!window.PointerEvent,
        n.onPointerUp = n.onPointerUp.bind(n),
        n.processPointerUp = n.processPointerUp.bind(n),
        n.onPointerCancel = n.onPointerCancel.bind(n),
        n.processPointerCancel = n.processPointerCancel.bind(n),
        n.onPointerDown = n.onPointerDown.bind(n),
        n.processPointerDown = n.processPointerDown.bind(n),
        n.onPointerMove = n.onPointerMove.bind(n),
        n.processPointerMove = n.processPointerMove.bind(n),
        n.onPointerOut = n.onPointerOut.bind(n),
        n.processPointerOverOut = n.processPointerOverOut.bind(n),
        n.onPointerOver = n.onPointerOver.bind(n),
        n.cursorStyles = {
            default: "inherit",
            pointer: "pointer"
        },
        n.currentCursorMode = null,
        n.cursor = null,
        n.resolution = 1,
        n.delayedEvents = [],
        n.search = new cl,
        n._tempDisplayObject = new Hr,
        n._useSystemTicker = e.useSystemTicker !== void 0 ? e.useSystemTicker : !0,
        n.setTargetElement(n.renderer.view, n.renderer.resolution),
        n
    }
    return Object.defineProperty(r.prototype, "useSystemTicker", {
        get: function() {
            return this._useSystemTicker
        },
        set: function(t) {
            this._useSystemTicker = t,
            t ? this.addTickerListener() : this.removeTickerListener()
        },
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(r.prototype, "lastObjectRendered", {
        get: function() {
            return this.renderer._lastObjectRendered || this._tempDisplayObject
        },
        enumerable: !1,
        configurable: !0
    }),
    r.prototype.hitTest = function(t, e) {
        return Wr.target = null,
        Wr.data.global = t,
        e || (e = this.lastObjectRendered),
        this.processInteractive(Wr, e, null, !0),
        Wr.target
    }
    ,
    r.prototype.setTargetElement = function(t, e) {
        e === void 0 && (e = 1),
        this.removeTickerListener(),
        this.removeEvents(),
        this.interactionDOMElement = t,
        this.resolution = e,
        this.addEvents(),
        this.addTickerListener()
    }
    ,
    r.prototype.addTickerListener = function() {
        this.tickerAdded || !this.interactionDOMElement || !this._useSystemTicker || (it.system.add(this.tickerUpdate, this, wt.INTERACTION),
        this.tickerAdded = !0)
    }
    ,
    r.prototype.removeTickerListener = function() {
        !this.tickerAdded || (it.system.remove(this.tickerUpdate, this),
        this.tickerAdded = !1)
    }
    ,
    r.prototype.addEvents = function() {
        if (!(this.eventsAdded || !this.interactionDOMElement)) {
            var t = this.interactionDOMElement.style;
            window.navigator.msPointerEnabled ? (t.msContentZooming = "none",
            t.msTouchAction = "none") : this.supportsPointerEvents && (t.touchAction = "none"),
            this.supportsPointerEvents ? (window.document.addEventListener("pointermove", this.onPointerMove, !0),
            this.interactionDOMElement.addEventListener("pointerdown", this.onPointerDown, !0),
            this.interactionDOMElement.addEventListener("pointerleave", this.onPointerOut, !0),
            this.interactionDOMElement.addEventListener("pointerover", this.onPointerOver, !0),
            window.addEventListener("pointercancel", this.onPointerCancel, !0),
            window.addEventListener("pointerup", this.onPointerUp, !0)) : (window.document.addEventListener("mousemove", this.onPointerMove, !0),
            this.interactionDOMElement.addEventListener("mousedown", this.onPointerDown, !0),
            this.interactionDOMElement.addEventListener("mouseout", this.onPointerOut, !0),
            this.interactionDOMElement.addEventListener("mouseover", this.onPointerOver, !0),
            window.addEventListener("mouseup", this.onPointerUp, !0)),
            this.supportsTouchEvents && (this.interactionDOMElement.addEventListener("touchstart", this.onPointerDown, !0),
            this.interactionDOMElement.addEventListener("touchcancel", this.onPointerCancel, !0),
            this.interactionDOMElement.addEventListener("touchend", this.onPointerUp, !0),
            this.interactionDOMElement.addEventListener("touchmove", this.onPointerMove, !0)),
            this.eventsAdded = !0
        }
    }
    ,
    r.prototype.removeEvents = function() {
        if (!(!this.eventsAdded || !this.interactionDOMElement)) {
            var t = this.interactionDOMElement.style;
            window.navigator.msPointerEnabled ? (t.msContentZooming = "",
            t.msTouchAction = "") : this.supportsPointerEvents && (t.touchAction = ""),
            this.supportsPointerEvents ? (window.document.removeEventListener("pointermove", this.onPointerMove, !0),
            this.interactionDOMElement.removeEventListener("pointerdown", this.onPointerDown, !0),
            this.interactionDOMElement.removeEventListener("pointerleave", this.onPointerOut, !0),
            this.interactionDOMElement.removeEventListener("pointerover", this.onPointerOver, !0),
            window.removeEventListener("pointercancel", this.onPointerCancel, !0),
            window.removeEventListener("pointerup", this.onPointerUp, !0)) : (window.document.removeEventListener("mousemove", this.onPointerMove, !0),
            this.interactionDOMElement.removeEventListener("mousedown", this.onPointerDown, !0),
            this.interactionDOMElement.removeEventListener("mouseout", this.onPointerOut, !0),
            this.interactionDOMElement.removeEventListener("mouseover", this.onPointerOver, !0),
            window.removeEventListener("mouseup", this.onPointerUp, !0)),
            this.supportsTouchEvents && (this.interactionDOMElement.removeEventListener("touchstart", this.onPointerDown, !0),
            this.interactionDOMElement.removeEventListener("touchcancel", this.onPointerCancel, !0),
            this.interactionDOMElement.removeEventListener("touchend", this.onPointerUp, !0),
            this.interactionDOMElement.removeEventListener("touchmove", this.onPointerMove, !0)),
            this.interactionDOMElement = null,
            this.eventsAdded = !1
        }
    }
    ,
    r.prototype.tickerUpdate = function(t) {
        this._deltaTime += t,
        !(this._deltaTime < this.interactionFrequency) && (this._deltaTime = 0,
        this.update())
    }
    ,
    r.prototype.update = function() {
        if (!!this.interactionDOMElement) {
            if (this._didMove) {
                this._didMove = !1;
                return
            }
            this.cursor = null;
            for (var t in this.activeInteractionData)
                if (this.activeInteractionData.hasOwnProperty(t)) {
                    var e = this.activeInteractionData[t];
                    if (e.originalEvent && e.pointerType !== "touch") {
                        var n = this.configureInteractionEventForDOMEvent(this.eventData, e.originalEvent, e);
                        this.processInteractive(n, this.lastObjectRendered, this.processPointerOverOut, !0)
                    }
                }
            this.setCursorMode(this.cursor)
        }
    }
    ,
    r.prototype.setCursorMode = function(t) {
        if (t = t || "default",
        this.currentCursorMode !== t) {
            this.currentCursorMode = t;
            var e = this.cursorStyles[t];
            if (e)
                switch (typeof e) {
                case "string":
                    this.interactionDOMElement.style.cursor = e;
                    break;
                case "function":
                    e(t);
                    break;
                case "object":
                    Object.assign(this.interactionDOMElement.style, e);
                    break
                }
            else
                typeof t == "string" && !Object.prototype.hasOwnProperty.call(this.cursorStyles, t) && (this.interactionDOMElement.style.cursor = t)
        }
    }
    ,
    r.prototype.dispatchEvent = function(t, e, n) {
        (!n.stopPropagationHint || t === n.stopsPropagatingAt) && (n.currentTarget = t,
        n.type = e,
        t.emit(e, n),
        t[e] && t[e](n))
    }
    ,
    r.prototype.delayDispatchEvent = function(t, e, n) {
        this.delayedEvents.push({
            displayObject: t,
            eventString: e,
            eventData: n
        })
    }
    ,
    r.prototype.mapPositionToPoint = function(t, e, n) {
        var s;
        this.interactionDOMElement.parentElement ? s = this.interactionDOMElement.getBoundingClientRect() : s = {
            x: 0,
            y: 0,
            width: 0,
            height: 0
        };
        var a = 1 / this.resolution;
        t.x = (e - s.left) * (this.interactionDOMElement.width / s.width) * a,
        t.y = (n - s.top) * (this.interactionDOMElement.height / s.height) * a
    }
    ,
    r.prototype.processInteractive = function(t, e, n, s) {
        var a = this.search.findHit(t, e, n, s)
          , o = this.delayedEvents;
        if (!o.length)
            return a;
        t.stopPropagationHint = !1;
        var h = o.length;
        this.delayedEvents = [];
        for (var u = 0; u < h; u++) {
            var l = o[u]
              , f = l.displayObject
              , c = l.eventString
              , d = l.eventData;
            d.stopsPropagatingAt === f && (d.stopPropagationHint = !0),
            this.dispatchEvent(f, c, d)
        }
        return a
    }
    ,
    r.prototype.onPointerDown = function(t) {
        if (!(this.supportsTouchEvents && t.pointerType === "touch")) {
            var e = this.normalizeToPointerData(t);
            if (this.autoPreventDefault && e[0].isNormalized) {
                var n = t.cancelable || !("cancelable"in t);
                n && t.preventDefault()
            }
            for (var s = e.length, a = 0; a < s; a++) {
                var o = e[a]
                  , h = this.getInteractionDataForPointerId(o)
                  , u = this.configureInteractionEventForDOMEvent(this.eventData, o, h);
                if (u.data.originalEvent = t,
                this.processInteractive(u, this.lastObjectRendered, this.processPointerDown, !0),
                this.emit("pointerdown", u),
                o.pointerType === "touch")
                    this.emit("touchstart", u);
                else if (o.pointerType === "mouse" || o.pointerType === "pen") {
                    var l = o.button === 2;
                    this.emit(l ? "rightdown" : "mousedown", this.eventData)
                }
            }
        }
    }
    ,
    r.prototype.processPointerDown = function(t, e, n) {
        var s = t.data
          , a = t.data.identifier;
        if (n) {
            if (e.trackedPointers[a] || (e.trackedPointers[a] = new or(a)),
            this.dispatchEvent(e, "pointerdown", t),
            s.pointerType === "touch")
                this.dispatchEvent(e, "touchstart", t);
            else if (s.pointerType === "mouse" || s.pointerType === "pen") {
                var o = s.button === 2;
                o ? e.trackedPointers[a].rightDown = !0 : e.trackedPointers[a].leftDown = !0,
                this.dispatchEvent(e, o ? "rightdown" : "mousedown", t)
            }
        }
    }
    ,
    r.prototype.onPointerComplete = function(t, e, n) {
        for (var s = this.normalizeToPointerData(t), a = s.length, o = t.target !== this.interactionDOMElement ? "outside" : "", h = 0; h < a; h++) {
            var u = s[h]
              , l = this.getInteractionDataForPointerId(u)
              , f = this.configureInteractionEventForDOMEvent(this.eventData, u, l);
            if (f.data.originalEvent = t,
            this.processInteractive(f, this.lastObjectRendered, n, e || !o),
            this.emit(e ? "pointercancel" : "pointerup" + o, f),
            u.pointerType === "mouse" || u.pointerType === "pen") {
                var c = u.button === 2;
                this.emit(c ? "rightup" + o : "mouseup" + o, f)
            } else
                u.pointerType === "touch" && (this.emit(e ? "touchcancel" : "touchend" + o, f),
                this.releaseInteractionDataForPointerId(u.pointerId))
        }
    }
    ,
    r.prototype.onPointerCancel = function(t) {
        this.supportsTouchEvents && t.pointerType === "touch" || this.onPointerComplete(t, !0, this.processPointerCancel)
    }
    ,
    r.prototype.processPointerCancel = function(t, e) {
        var n = t.data
          , s = t.data.identifier;
        e.trackedPointers[s] !== void 0 && (delete e.trackedPointers[s],
        this.dispatchEvent(e, "pointercancel", t),
        n.pointerType === "touch" && this.dispatchEvent(e, "touchcancel", t))
    }
    ,
    r.prototype.onPointerUp = function(t) {
        this.supportsTouchEvents && t.pointerType === "touch" || this.onPointerComplete(t, !1, this.processPointerUp)
    }
    ,
    r.prototype.processPointerUp = function(t, e, n) {
        var s = t.data
          , a = t.data.identifier
          , o = e.trackedPointers[a]
          , h = s.pointerType === "touch"
          , u = s.pointerType === "mouse" || s.pointerType === "pen"
          , l = !1;
        if (u) {
            var f = s.button === 2
              , c = or.FLAGS
              , d = f ? c.RIGHT_DOWN : c.LEFT_DOWN
              , p = o !== void 0 && o.flags & d;
            n ? (this.dispatchEvent(e, f ? "rightup" : "mouseup", t),
            p && (this.dispatchEvent(e, f ? "rightclick" : "click", t),
            l = !0)) : p && this.dispatchEvent(e, f ? "rightupoutside" : "mouseupoutside", t),
            o && (f ? o.rightDown = !1 : o.leftDown = !1)
        }
        n ? (this.dispatchEvent(e, "pointerup", t),
        h && this.dispatchEvent(e, "touchend", t),
        o && ((!u || l) && this.dispatchEvent(e, "pointertap", t),
        h && (this.dispatchEvent(e, "tap", t),
        o.over = !1))) : o && (this.dispatchEvent(e, "pointerupoutside", t),
        h && this.dispatchEvent(e, "touchendoutside", t)),
        o && o.none && delete e.trackedPointers[a]
    }
    ,
    r.prototype.onPointerMove = function(t) {
        if (!(this.supportsTouchEvents && t.pointerType === "touch")) {
            var e = this.normalizeToPointerData(t);
            (e[0].pointerType === "mouse" || e[0].pointerType === "pen") && (this._didMove = !0,
            this.cursor = null);
            for (var n = e.length, s = 0; s < n; s++) {
                var a = e[s]
                  , o = this.getInteractionDataForPointerId(a)
                  , h = this.configureInteractionEventForDOMEvent(this.eventData, a, o);
                h.data.originalEvent = t,
                this.processInteractive(h, this.lastObjectRendered, this.processPointerMove, !0),
                this.emit("pointermove", h),
                a.pointerType === "touch" && this.emit("touchmove", h),
                (a.pointerType === "mouse" || a.pointerType === "pen") && this.emit("mousemove", h)
            }
            e[0].pointerType === "mouse" && this.setCursorMode(this.cursor)
        }
    }
    ,
    r.prototype.processPointerMove = function(t, e, n) {
        var s = t.data
          , a = s.pointerType === "touch"
          , o = s.pointerType === "mouse" || s.pointerType === "pen";
        o && this.processPointerOverOut(t, e, n),
        (!this.moveWhenInside || n) && (this.dispatchEvent(e, "pointermove", t),
        a && this.dispatchEvent(e, "touchmove", t),
        o && this.dispatchEvent(e, "mousemove", t))
    }
    ,
    r.prototype.onPointerOut = function(t) {
        if (!(this.supportsTouchEvents && t.pointerType === "touch")) {
            var e = this.normalizeToPointerData(t)
              , n = e[0];
            n.pointerType === "mouse" && (this.mouseOverRenderer = !1,
            this.setCursorMode(null));
            var s = this.getInteractionDataForPointerId(n)
              , a = this.configureInteractionEventForDOMEvent(this.eventData, n, s);
            a.data.originalEvent = n,
            this.processInteractive(a, this.lastObjectRendered, this.processPointerOverOut, !1),
            this.emit("pointerout", a),
            n.pointerType === "mouse" || n.pointerType === "pen" ? this.emit("mouseout", a) : this.releaseInteractionDataForPointerId(s.identifier)
        }
    }
    ,
    r.prototype.processPointerOverOut = function(t, e, n) {
        var s = t.data
          , a = t.data.identifier
          , o = s.pointerType === "mouse" || s.pointerType === "pen"
          , h = e.trackedPointers[a];
        n && !h && (h = e.trackedPointers[a] = new or(a)),
        h !== void 0 && (n && this.mouseOverRenderer ? (h.over || (h.over = !0,
        this.delayDispatchEvent(e, "pointerover", t),
        o && this.delayDispatchEvent(e, "mouseover", t)),
        o && this.cursor === null && (this.cursor = e.cursor)) : h.over && (h.over = !1,
        this.dispatchEvent(e, "pointerout", this.eventData),
        o && this.dispatchEvent(e, "mouseout", t),
        h.none && delete e.trackedPointers[a]))
    }
    ,
    r.prototype.onPointerOver = function(t) {
        var e = this.normalizeToPointerData(t)
          , n = e[0]
          , s = this.getInteractionDataForPointerId(n)
          , a = this.configureInteractionEventForDOMEvent(this.eventData, n, s);
        a.data.originalEvent = n,
        n.pointerType === "mouse" && (this.mouseOverRenderer = !0),
        this.emit("pointerover", a),
        (n.pointerType === "mouse" || n.pointerType === "pen") && this.emit("mouseover", a)
    }
    ,
    r.prototype.getInteractionDataForPointerId = function(t) {
        var e = t.pointerId, n;
        return e === Yr || t.pointerType === "mouse" ? n = this.mouse : this.activeInteractionData[e] ? n = this.activeInteractionData[e] : (n = this.interactionDataPool.pop() || new Vr,
        n.identifier = e,
        this.activeInteractionData[e] = n),
        n.copyEvent(t),
        n
    }
    ,
    r.prototype.releaseInteractionDataForPointerId = function(t) {
        var e = this.activeInteractionData[t];
        e && (delete this.activeInteractionData[t],
        e.reset(),
        this.interactionDataPool.push(e))
    }
    ,
    r.prototype.configureInteractionEventForDOMEvent = function(t, e, n) {
        return t.data = n,
        this.mapPositionToPoint(n.global, e.clientX, e.clientY),
        e.pointerType === "touch" && (e.globalX = n.global.x,
        e.globalY = n.global.y),
        n.originalEvent = e,
        t.reset(),
        t
    }
    ,
    r.prototype.normalizeToPointerData = function(t) {
        var e = [];
        if (this.supportsTouchEvents && t instanceof TouchEvent)
            for (var n = 0, s = t.changedTouches.length; n < s; n++) {
                var a = t.changedTouches[n];
                typeof a.button == "undefined" && (a.button = t.touches.length ? 1 : 0),
                typeof a.buttons == "undefined" && (a.buttons = t.touches.length ? 1 : 0),
                typeof a.isPrimary == "undefined" && (a.isPrimary = t.touches.length === 1 && t.type === "touchstart"),
                typeof a.width == "undefined" && (a.width = a.radiusX || 1),
                typeof a.height == "undefined" && (a.height = a.radiusY || 1),
                typeof a.tiltX == "undefined" && (a.tiltX = 0),
                typeof a.tiltY == "undefined" && (a.tiltY = 0),
                typeof a.pointerType == "undefined" && (a.pointerType = "touch"),
                typeof a.pointerId == "undefined" && (a.pointerId = a.identifier || 0),
                typeof a.pressure == "undefined" && (a.pressure = a.force || .5),
                typeof a.twist == "undefined" && (a.twist = 0),
                typeof a.tangentialPressure == "undefined" && (a.tangentialPressure = 0),
                typeof a.layerX == "undefined" && (a.layerX = a.offsetX = a.clientX),
                typeof a.layerY == "undefined" && (a.layerY = a.offsetY = a.clientY),
                a.isNormalized = !0,
                e.push(a)
            }
        else if (t instanceof MouseEvent && (!this.supportsPointerEvents || !(t instanceof window.PointerEvent))) {
            var o = t;
            typeof o.isPrimary == "undefined" && (o.isPrimary = !0),
            typeof o.width == "undefined" && (o.width = 1),
            typeof o.height == "undefined" && (o.height = 1),
            typeof o.tiltX == "undefined" && (o.tiltX = 0),
            typeof o.tiltY == "undefined" && (o.tiltY = 0),
            typeof o.pointerType == "undefined" && (o.pointerType = "mouse"),
            typeof o.pointerId == "undefined" && (o.pointerId = Yr),
            typeof o.pressure == "undefined" && (o.pressure = .5),
            typeof o.twist == "undefined" && (o.twist = 0),
            typeof o.tangentialPressure == "undefined" && (o.tangentialPressure = 0),
            o.isNormalized = !0,
            e.push(o)
        } else
            e.push(t);
        return e
    }
    ,
    r.prototype.destroy = function() {
        this.removeEvents(),
        this.removeTickerListener(),
        this.removeAllListeners(),
        this.renderer = null,
        this.mouse = null,
        this.eventData = null,
        this.interactionDOMElement = null,
        this.onPointerDown = null,
        this.processPointerDown = null,
        this.onPointerUp = null,
        this.processPointerUp = null,
        this.onPointerCancel = null,
        this.processPointerCancel = null,
        this.onPointerMove = null,
        this.processPointerMove = null,
        this.onPointerOut = null,
        this.processPointerOverOut = null,
        this.onPointerOver = null,
        this.search = null
    }
    ,
    r
}(Ae);
var st = function() {
    function i(r) {
        this.items = [],
        this._name = r,
        this._aliasCount = 0
    }
    return i.prototype.emit = function(r, t, e, n, s, a, o, h) {
        if (arguments.length > 8)
            throw new Error("max arguments reached");
        var u = this
          , l = u.name
          , f = u.items;
        this._aliasCount++;
        for (var c = 0, d = f.length; c < d; c++)
            f[c][l](r, t, e, n, s, a, o, h);
        return f === this.items && this._aliasCount--,
        this
    }
    ,
    i.prototype.ensureNonAliasedItems = function() {
        this._aliasCount > 0 && this.items.length > 1 && (this._aliasCount = 0,
        this.items = this.items.slice(0))
    }
    ,
    i.prototype.add = function(r) {
        return r[this._name] && (this.ensureNonAliasedItems(),
        this.remove(r),
        this.items.push(r)),
        this
    }
    ,
    i.prototype.remove = function(r) {
        var t = this.items.indexOf(r);
        return t !== -1 && (this.ensureNonAliasedItems(),
        this.items.splice(t, 1)),
        this
    }
    ,
    i.prototype.contains = function(r) {
        return this.items.indexOf(r) !== -1
    }
    ,
    i.prototype.removeAll = function() {
        return this.ensureNonAliasedItems(),
        this.items.length = 0,
        this
    }
    ,
    i.prototype.destroy = function() {
        this.removeAll(),
        this.items = null,
        this._name = null
    }
    ,
    Object.defineProperty(i.prototype, "empty", {
        get: function() {
            return this.items.length === 0
        },
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(i.prototype, "name", {
        get: function() {
            return this._name
        },
        enumerable: !1,
        configurable: !0
    }),
    i
}();
Object.defineProperties(st.prototype, {
    dispatch: {
        value: st.prototype.emit
    },
    run: {
        value: st.prototype.emit
    }
});
R.PREFER_ENV = ct.any ? Tt.WEBGL : Tt.WEBGL2;
R.STRICT_TEXTURE_CACHE = !1;
var qr = [];
function hn(i, r) {
    if (!i)
        return null;
    var t = "";
    if (typeof i == "string") {
        var e = /\.(\w{3,4})(?:$|\?|#)/i.exec(i);
        e && (t = e[1].toLowerCase())
    }
    for (var n = qr.length - 1; n >= 0; --n) {
        var s = qr[n];
        if (s.test && s.test(i, t))
            return new s(i,r)
    }
    throw new Error("Unrecognized source type to auto-detect Resource")
}
var un = function(i, r) {
    return un = Object.setPrototypeOf || {
        __proto__: []
    }instanceof Array && function(t, e) {
        t.__proto__ = e
    }
    || function(t, e) {
        for (var n in e)
            e.hasOwnProperty(n) && (t[n] = e[n])
    }
    ,
    un(i, r)
};
function k(i, r) {
    un(i, r);
    function t() {
        this.constructor = i
    }
    i.prototype = r === null ? Object.create(r) : (t.prototype = r.prototype,
    new t)
}
var De = function() {
    function i(r, t) {
        r === void 0 && (r = 0),
        t === void 0 && (t = 0),
        this._width = r,
        this._height = t,
        this.destroyed = !1,
        this.internal = !1,
        this.onResize = new st("setRealSize"),
        this.onUpdate = new st("update"),
        this.onError = new st("onError")
    }
    return i.prototype.bind = function(r) {
        this.onResize.add(r),
        this.onUpdate.add(r),
        this.onError.add(r),
        (this._width || this._height) && this.onResize.emit(this._width, this._height)
    }
    ,
    i.prototype.unbind = function(r) {
        this.onResize.remove(r),
        this.onUpdate.remove(r),
        this.onError.remove(r)
    }
    ,
    i.prototype.resize = function(r, t) {
        (r !== this._width || t !== this._height) && (this._width = r,
        this._height = t,
        this.onResize.emit(r, t))
    }
    ,
    Object.defineProperty(i.prototype, "valid", {
        get: function() {
            return !!this._width && !!this._height
        },
        enumerable: !1,
        configurable: !0
    }),
    i.prototype.update = function() {
        this.destroyed || this.onUpdate.emit()
    }
    ,
    i.prototype.load = function() {
        return Promise.resolve(this)
    }
    ,
    Object.defineProperty(i.prototype, "width", {
        get: function() {
            return this._width
        },
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(i.prototype, "height", {
        get: function() {
            return this._height
        },
        enumerable: !1,
        configurable: !0
    }),
    i.prototype.style = function(r, t, e) {
        return !1
    }
    ,
    i.prototype.dispose = function() {}
    ,
    i.prototype.destroy = function() {
        this.destroyed || (this.destroyed = !0,
        this.dispose(),
        this.onError.removeAll(),
        this.onError = null,
        this.onResize.removeAll(),
        this.onResize = null,
        this.onUpdate.removeAll(),
        this.onUpdate = null)
    }
    ,
    i.test = function(r, t) {
        return !1
    }
    ,
    i
}()
  , $r = function(i) {
    k(r, i);
    function r(t, e) {
        var n = this
          , s = e || {}
          , a = s.width
          , o = s.height;
        if (!a || !o)
            throw new Error("BufferResource width or height invalid");
        return n = i.call(this, a, o) || this,
        n.data = t,
        n
    }
    return r.prototype.upload = function(t, e, n) {
        var s = t.gl;
        return s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL, e.alphaMode === Ot.UNPACK),
        n.width === e.width && n.height === e.height ? s.texSubImage2D(e.target, 0, 0, 0, e.width, e.height, e.format, e.type, this.data) : (n.width = e.width,
        n.height = e.height,
        s.texImage2D(e.target, 0, n.internalFormat, e.width, e.height, 0, e.format, n.type, this.data)),
        !0
    }
    ,
    r.prototype.dispose = function() {
        this.data = null
    }
    ,
    r.test = function(t) {
        return t instanceof Float32Array || t instanceof Uint8Array || t instanceof Uint32Array
    }
    ,
    r
}(De)
  , dl = {
    scaleMode: pt.NEAREST,
    format: oe.RGBA,
    alphaMode: Ot.NPM
}
  , q = function(i) {
    k(r, i);
    function r(t, e) {
        t === void 0 && (t = null),
        e === void 0 && (e = null);
        var n = i.call(this) || this;
        e = e || {};
        var s = e.alphaMode
          , a = e.mipmap
          , o = e.anisotropicLevel
          , h = e.scaleMode
          , u = e.width
          , l = e.height
          , f = e.wrapMode
          , c = e.format
          , d = e.type
          , p = e.target
          , v = e.resolution
          , m = e.resourceOptions;
        return t && !(t instanceof De) && (t = hn(t, m),
        t.internal = !0),
        n.width = u || 0,
        n.height = l || 0,
        n.resolution = v || R.RESOLUTION,
        n.mipmap = a !== void 0 ? a : R.MIPMAP_TEXTURES,
        n.anisotropicLevel = o !== void 0 ? o : R.ANISOTROPIC_LEVEL,
        n.wrapMode = f || R.WRAP_MODE,
        n.scaleMode = h !== void 0 ? h : R.SCALE_MODE,
        n.format = c || oe.RGBA,
        n.type = d || et.UNSIGNED_BYTE,
        n.target = p || kt.TEXTURE_2D,
        n.alphaMode = s !== void 0 ? s : Ot.UNPACK,
        e.premultiplyAlpha !== void 0 && (n.premultiplyAlpha = e.premultiplyAlpha),
        n.uid = ce(),
        n.touched = 0,
        n.isPowerOfTwo = !1,
        n._refreshPOT(),
        n._glTextures = {},
        n.dirtyId = 0,
        n.dirtyStyleId = 0,
        n.cacheId = null,
        n.valid = u > 0 && l > 0,
        n.textureCacheIds = [],
        n.destroyed = !1,
        n.resource = null,
        n._batchEnabled = 0,
        n._batchLocation = 0,
        n.parentTextureArray = null,
        n.setResource(t),
        n
    }
    return Object.defineProperty(r.prototype, "realWidth", {
        get: function() {
            return Math.ceil(this.width * this.resolution - 1e-4)
        },
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(r.prototype, "realHeight", {
        get: function() {
            return Math.ceil(this.height * this.resolution - 1e-4)
        },
        enumerable: !1,
        configurable: !0
    }),
    r.prototype.setStyle = function(t, e) {
        var n;
        return t !== void 0 && t !== this.scaleMode && (this.scaleMode = t,
        n = !0),
        e !== void 0 && e !== this.mipmap && (this.mipmap = e,
        n = !0),
        n && this.dirtyStyleId++,
        this
    }
    ,
    r.prototype.setSize = function(t, e, n) {
        return this.resolution = n || this.resolution,
        this.width = t,
        this.height = e,
        this._refreshPOT(),
        this.update(),
        this
    }
    ,
    r.prototype.setRealSize = function(t, e, n) {
        return this.resolution = n || this.resolution,
        this.width = t / this.resolution,
        this.height = e / this.resolution,
        this._refreshPOT(),
        this.update(),
        this
    }
    ,
    r.prototype._refreshPOT = function() {
        this.isPowerOfTwo = ji(this.realWidth) && ji(this.realHeight)
    }
    ,
    r.prototype.setResolution = function(t) {
        var e = this.resolution;
        return e === t ? this : (this.resolution = t,
        this.valid && (this.width = this.width * e / t,
        this.height = this.height * e / t,
        this.emit("update", this)),
        this._refreshPOT(),
        this)
    }
    ,
    r.prototype.setResource = function(t) {
        if (this.resource === t)
            return this;
        if (this.resource)
            throw new Error("Resource can be set only once");
        return t.bind(this),
        this.resource = t,
        this
    }
    ,
    r.prototype.update = function() {
        this.valid ? (this.dirtyId++,
        this.dirtyStyleId++,
        this.emit("update", this)) : this.width > 0 && this.height > 0 && (this.valid = !0,
        this.emit("loaded", this),
        this.emit("update", this))
    }
    ,
    r.prototype.onError = function(t) {
        this.emit("error", this, t)
    }
    ,
    r.prototype.destroy = function() {
        this.resource && (this.resource.unbind(this),
        this.resource.internal && this.resource.destroy(),
        this.resource = null),
        this.cacheId && (delete bt[this.cacheId],
        delete ft[this.cacheId],
        this.cacheId = null),
        this.dispose(),
        r.removeFromCache(this),
        this.textureCacheIds = null,
        this.destroyed = !0
    }
    ,
    r.prototype.dispose = function() {
        this.emit("dispose", this)
    }
    ,
    r.prototype.castToBaseTexture = function() {
        return this
    }
    ,
    r.from = function(t, e, n) {
        n === void 0 && (n = R.STRICT_TEXTURE_CACHE);
        var s = typeof t == "string"
          , a = null;
        s ? a = t : (t._pixiId || (t._pixiId = "pixiid_" + ce()),
        a = t._pixiId);
        var o = bt[a];
        if (s && n && !o)
            throw new Error('The cacheId "' + a + '" does not exist in BaseTextureCache.');
        return o || (o = new r(t,e),
        o.cacheId = a,
        r.addToCache(o, a)),
        o
    }
    ,
    r.fromBuffer = function(t, e, n, s) {
        t = t || new Float32Array(e * n * 4);
        var a = new $r(t,{
            width: e,
            height: n
        })
          , o = t instanceof Float32Array ? et.FLOAT : et.UNSIGNED_BYTE;
        return new r(a,Object.assign(dl, s || {
            width: e,
            height: n,
            type: o
        }))
    }
    ,
    r.addToCache = function(t, e) {
        e && (t.textureCacheIds.indexOf(e) === -1 && t.textureCacheIds.push(e),
        bt[e] && console.warn("BaseTexture added to the cache with an id [" + e + "] that already had an entry"),
        bt[e] = t)
    }
    ,
    r.removeFromCache = function(t) {
        if (typeof t == "string") {
            var e = bt[t];
            if (e) {
                var n = e.textureCacheIds.indexOf(t);
                return n > -1 && e.textureCacheIds.splice(n, 1),
                delete bt[t],
                e
            }
        } else if (t && t.textureCacheIds) {
            for (var s = 0; s < t.textureCacheIds.length; ++s)
                delete bt[t.textureCacheIds[s]];
            return t.textureCacheIds.length = 0,
            t
        }
        return null
    }
    ,
    r._globalBatch = 0,
    r
}(Ae)
  , ln = function(i) {
    k(r, i);
    function r(t, e) {
        var n = this
          , s = e || {}
          , a = s.width
          , o = s.height;
        n = i.call(this, a, o) || this,
        n.items = [],
        n.itemDirtyIds = [];
        for (var h = 0; h < t; h++) {
            var u = new q;
            n.items.push(u),
            n.itemDirtyIds.push(-2)
        }
        return n.length = t,
        n._load = null,
        n.baseTexture = null,
        n
    }
    return r.prototype.initFromArray = function(t, e) {
        for (var n = 0; n < this.length; n++)
            !t[n] || (t[n].castToBaseTexture ? this.addBaseTextureAt(t[n].castToBaseTexture(), n) : t[n]instanceof De ? this.addResourceAt(t[n], n) : this.addResourceAt(hn(t[n], e), n))
    }
    ,
    r.prototype.dispose = function() {
        for (var t = 0, e = this.length; t < e; t++)
            this.items[t].destroy();
        this.items = null,
        this.itemDirtyIds = null,
        this._load = null
    }
    ,
    r.prototype.addResourceAt = function(t, e) {
        if (!this.items[e])
            throw new Error("Index " + e + " is out of bounds");
        return t.valid && !this.valid && this.resize(t.width, t.height),
        this.items[e].setResource(t),
        this
    }
    ,
    r.prototype.bind = function(t) {
        if (this.baseTexture !== null)
            throw new Error("Only one base texture per TextureArray is allowed");
        i.prototype.bind.call(this, t);
        for (var e = 0; e < this.length; e++)
            this.items[e].parentTextureArray = t,
            this.items[e].on("update", t.update, t)
    }
    ,
    r.prototype.unbind = function(t) {
        i.prototype.unbind.call(this, t);
        for (var e = 0; e < this.length; e++)
            this.items[e].parentTextureArray = null,
            this.items[e].off("update", t.update, t)
    }
    ,
    r.prototype.load = function() {
        var t = this;
        if (this._load)
            return this._load;
        var e = this.items.map(function(s) {
            return s.resource
        }).filter(function(s) {
            return s
        })
          , n = e.map(function(s) {
            return s.load()
        });
        return this._load = Promise.all(n).then(function() {
            var s = t.items[0]
              , a = s.realWidth
              , o = s.realHeight;
            return t.resize(a, o),
            Promise.resolve(t)
        }),
        this._load
    }
    ,
    r
}(De)
  , Ga = function(i) {
    k(r, i);
    function r(t, e) {
        var n = this, s = e || {}, a = s.width, o = s.height, h, u;
        return Array.isArray(t) ? (h = t,
        u = t.length) : u = t,
        n = i.call(this, u, {
            width: a,
            height: o
        }) || this,
        h && n.initFromArray(h, e),
        n
    }
    return r.prototype.addBaseTextureAt = function(t, e) {
        if (t.resource)
            this.addResourceAt(t.resource, e);
        else
            throw new Error("ArrayResource does not support RenderTexture");
        return this
    }
    ,
    r.prototype.bind = function(t) {
        i.prototype.bind.call(this, t),
        t.target = kt.TEXTURE_2D_ARRAY
    }
    ,
    r.prototype.upload = function(t, e, n) {
        var s = this
          , a = s.length
          , o = s.itemDirtyIds
          , h = s.items
          , u = t.gl;
        n.dirtyId < 0 && u.texImage3D(u.TEXTURE_2D_ARRAY, 0, e.format, this._width, this._height, a, 0, e.format, e.type, null);
        for (var l = 0; l < a; l++) {
            var f = h[l];
            o[l] < f.dirtyId && (o[l] = f.dirtyId,
            f.valid && u.texSubImage3D(u.TEXTURE_2D_ARRAY, 0, 0, 0, l, f.resource.width, f.resource.height, 1, e.format, e.type, f.resource.source))
        }
        return !0
    }
    ,
    r
}(ln)
  , Xt = function(i) {
    k(r, i);
    function r(t) {
        var e = this
          , n = t
          , s = n.naturalWidth || n.videoWidth || n.width
          , a = n.naturalHeight || n.videoHeight || n.height;
        return e = i.call(this, s, a) || this,
        e.source = t,
        e.noSubImage = !1,
        e
    }
    return r.crossOrigin = function(t, e, n) {
        n === void 0 && e.indexOf("data:") !== 0 ? t.crossOrigin = Da(e) : n !== !1 && (t.crossOrigin = typeof n == "string" ? n : "anonymous")
    }
    ,
    r.prototype.upload = function(t, e, n, s) {
        var a = t.gl
          , o = e.realWidth
          , h = e.realHeight;
        return s = s || this.source,
        a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL, e.alphaMode === Ot.UNPACK),
        !this.noSubImage && e.target === a.TEXTURE_2D && n.width === o && n.height === h ? a.texSubImage2D(a.TEXTURE_2D, 0, 0, 0, e.format, e.type, s) : (n.width = o,
        n.height = h,
        a.texImage2D(e.target, 0, e.format, e.format, e.type, s)),
        !0
    }
    ,
    r.prototype.update = function() {
        if (!this.destroyed) {
            var t = this.source
              , e = t.naturalWidth || t.videoWidth || t.width
              , n = t.naturalHeight || t.videoHeight || t.height;
            this.resize(e, n),
            i.prototype.update.call(this)
        }
    }
    ,
    r.prototype.dispose = function() {
        this.source = null
    }
    ,
    r
}(De)
  , fn = function(i) {
    k(r, i);
    function r() {
        return i !== null && i.apply(this, arguments) || this
    }
    return r.test = function(t) {
        var e = window.OffscreenCanvas;
        return e && t instanceof e ? !0 : t instanceof HTMLCanvasElement
    }
    ,
    r
}(Xt)
  , ja = function(i) {
    k(r, i);
    function r(t, e) {
        var n = this
          , s = e || {}
          , a = s.width
          , o = s.height
          , h = s.autoLoad
          , u = s.linkBaseTexture;
        if (t && t.length !== r.SIDES)
            throw new Error("Invalid length. Got " + t.length + ", expected 6");
        n = i.call(this, 6, {
            width: a,
            height: o
        }) || this;
        for (var l = 0; l < r.SIDES; l++)
            n.items[l].target = kt.TEXTURE_CUBE_MAP_POSITIVE_X + l;
        return n.linkBaseTexture = u !== !1,
        t && n.initFromArray(t, e),
        h !== !1 && n.load(),
        n
    }
    return r.prototype.bind = function(t) {
        i.prototype.bind.call(this, t),
        t.target = kt.TEXTURE_CUBE_MAP
    }
    ,
    r.prototype.addBaseTextureAt = function(t, e, n) {
        if (n === void 0 && (n = this.linkBaseTexture),
        !this.items[e])
            throw new Error("Index " + e + " is out of bounds");
        if (!this.linkBaseTexture || t.parentTextureArray || Object.keys(t._glTextures).length > 0)
            if (t.resource)
                this.addResourceAt(t.resource, e);
            else
                throw new Error("CubeResource does not support copying of renderTexture.");
        else
            t.target = kt.TEXTURE_CUBE_MAP_POSITIVE_X + e,
            t.parentTextureArray = this.baseTexture,
            this.items[e] = t;
        return t.valid && !this.valid && this.resize(t.realWidth, t.realHeight),
        this.items[e] = t,
        this
    }
    ,
    r.prototype.upload = function(t, e, n) {
        for (var s = this.itemDirtyIds, a = 0; a < r.SIDES; a++) {
            var o = this.items[a];
            s[a] < o.dirtyId && (o.valid && o.resource ? (o.resource.upload(t, o, n),
            s[a] = o.dirtyId) : s[a] < -1 && (t.gl.texImage2D(o.target, 0, n.internalFormat, e.realWidth, e.realHeight, 0, e.format, n.type, null),
            s[a] = -1))
        }
        return !0
    }
    ,
    r.test = function(t) {
        return Array.isArray(t) && t.length === r.SIDES
    }
    ,
    r.SIDES = 6,
    r
}(ln)
  , cn = function(i) {
    k(r, i);
    function r(t, e) {
        var n = this;
        if (e = e || {},
        !(t instanceof HTMLImageElement)) {
            var s = new Image;
            Xt.crossOrigin(s, t, e.crossorigin),
            s.src = t,
            t = s
        }
        return n = i.call(this, t) || this,
        !t.complete && !!n._width && !!n._height && (n._width = 0,
        n._height = 0),
        n.url = t.src,
        n._process = null,
        n.preserveBitmap = !1,
        n.createBitmap = (e.createBitmap !== void 0 ? e.createBitmap : R.CREATE_IMAGE_BITMAP) && !!window.createImageBitmap,
        n.alphaMode = typeof e.alphaMode == "number" ? e.alphaMode : null,
        e.premultiplyAlpha !== void 0 && (n.premultiplyAlpha = e.premultiplyAlpha),
        n.bitmap = null,
        n._load = null,
        e.autoLoad !== !1 && n.load(),
        n
    }
    return r.prototype.load = function(t) {
        var e = this;
        return this._load ? this._load : (t !== void 0 && (this.createBitmap = t),
        this._load = new Promise(function(n, s) {
            var a = e.source;
            e.url = a.src;
            var o = function() {
                e.destroyed || (a.onload = null,
                a.onerror = null,
                e.resize(a.width, a.height),
                e._load = null,
                e.createBitmap ? n(e.process()) : n(e))
            };
            a.complete && a.src ? o() : (a.onload = o,
            a.onerror = function(h) {
                s(h),
                e.onError.emit(h)
            }
            )
        }
        ),
        this._load)
    }
    ,
    r.prototype.process = function() {
        var t = this
          , e = this.source;
        return this._process !== null ? this._process : this.bitmap !== null || !window.createImageBitmap ? Promise.resolve(this) : (this._process = window.createImageBitmap(e, 0, 0, e.width, e.height, {
            premultiplyAlpha: this.alphaMode === Ot.UNPACK ? "premultiply" : "none"
        }).then(function(n) {
            return t.destroyed ? Promise.reject() : (t.bitmap = n,
            t.update(),
            t._process = null,
            Promise.resolve(t))
        }),
        this._process)
    }
    ,
    r.prototype.upload = function(t, e, n) {
        if (typeof this.alphaMode == "number" && (e.alphaMode = this.alphaMode),
        !this.createBitmap)
            return i.prototype.upload.call(this, t, e, n);
        if (!this.bitmap && (this.process(),
        !this.bitmap))
            return !1;
        if (i.prototype.upload.call(this, t, e, n, this.bitmap),
        !this.preserveBitmap) {
            var s = !0
              , a = e._glTextures;
            for (var o in a) {
                var h = a[o];
                if (h !== n && h.dirtyId !== e.dirtyId) {
                    s = !1;
                    break
                }
            }
            s && (this.bitmap.close && this.bitmap.close(),
            this.bitmap = null)
        }
        return !0
    }
    ,
    r.prototype.dispose = function() {
        this.source.onload = null,
        this.source.onerror = null,
        i.prototype.dispose.call(this),
        this.bitmap && (this.bitmap.close(),
        this.bitmap = null),
        this._process = null,
        this._load = null
    }
    ,
    r.test = function(t) {
        return typeof t == "string" || t instanceof HTMLImageElement
    }
    ,
    r
}(Xt)
  , Ha = function(i) {
    k(r, i);
    function r(t, e) {
        var n = this;
        return e = e || {},
        n = i.call(this, document.createElement("canvas")) || this,
        n._width = 0,
        n._height = 0,
        n.svg = t,
        n.scale = e.scale || 1,
        n._overrideWidth = e.width,
        n._overrideHeight = e.height,
        n._resolve = null,
        n._crossorigin = e.crossorigin,
        n._load = null,
        e.autoLoad !== !1 && n.load(),
        n
    }
    return r.prototype.load = function() {
        var t = this;
        return this._load ? this._load : (this._load = new Promise(function(e) {
            if (t._resolve = function() {
                t.resize(t.source.width, t.source.height),
                e(t)
            }
            ,
            /^\<svg/.test(t.svg.trim())) {
                if (!btoa)
                    throw new Error("Your browser doesn't support base64 conversions.");
                t.svg = "data:image/svg+xml;base64," + btoa(unescape(encodeURIComponent(t.svg)))
            }
            t._loadSvg()
        }
        ),
        this._load)
    }
    ,
    r.prototype._loadSvg = function() {
        var t = this
          , e = new Image;
        Xt.crossOrigin(e, this.svg, this._crossorigin),
        e.src = this.svg,
        e.onerror = function(n) {
            !t._resolve || (e.onerror = null,
            t.onError.emit(n))
        }
        ,
        e.onload = function() {
            if (!!t._resolve) {
                var n = e.width
                  , s = e.height;
                if (!n || !s)
                    throw new Error("The SVG image must have width and height defined (in pixels), canvas API needs them.");
                var a = n * t.scale
                  , o = s * t.scale;
                (t._overrideWidth || t._overrideHeight) && (a = t._overrideWidth || t._overrideHeight / s * n,
                o = t._overrideHeight || t._overrideWidth / n * s),
                a = Math.round(a),
                o = Math.round(o);
                var h = t.source;
                h.width = a,
                h.height = o,
                h._pixiId = "canvas_" + ce(),
                h.getContext("2d").drawImage(e, 0, 0, n, s, 0, 0, a, o),
                t._resolve(),
                t._resolve = null
            }
        }
    }
    ,
    r.getSize = function(t) {
        var e = r.SVG_SIZE.exec(t)
          , n = {};
        return e && (n[e[1]] = Math.round(parseFloat(e[3])),
        n[e[5]] = Math.round(parseFloat(e[7]))),
        n
    }
    ,
    r.prototype.dispose = function() {
        i.prototype.dispose.call(this),
        this._resolve = null,
        this._crossorigin = null
    }
    ,
    r.test = function(t, e) {
        return e === "svg" || typeof t == "string" && /^data:image\/svg\+xml(;(charset=utf8|utf8))?;base64/.test(t) || typeof t == "string" && t.indexOf("<svg") === 0
    }
    ,
    r.SVG_SIZE = /<svg[^>]*(?:\s(width|height)=('|")(\d*(?:\.\d+)?)(?:px)?('|"))[^>]*(?:\s(width|height)=('|")(\d*(?:\.\d+)?)(?:px)?('|"))[^>]*>/i,
    r
}(Xt)
  , za = function(i) {
    k(r, i);
    function r(t, e) {
        var n = this;
        if (e = e || {},
        !(t instanceof HTMLVideoElement)) {
            var s = document.createElement("video");
            s.setAttribute("preload", "auto"),
            s.setAttribute("webkit-playsinline", ""),
            s.setAttribute("playsinline", ""),
            typeof t == "string" && (t = [t]);
            var a = t[0].src || t[0];
            Xt.crossOrigin(s, a, e.crossorigin);
            for (var o = 0; o < t.length; ++o) {
                var h = document.createElement("source")
                  , u = t[o]
                  , l = u.src
                  , f = u.mime;
                l = l || t[o];
                var c = l.split("?").shift().toLowerCase()
                  , d = c.substr(c.lastIndexOf(".") + 1);
                f = f || r.MIME_TYPES[d] || "video/" + d,
                h.src = l,
                h.type = f,
                s.appendChild(h)
            }
            t = s
        }
        return n = i.call(this, t) || this,
        n.noSubImage = !0,
        n._autoUpdate = !0,
        n._isConnectedToTicker = !1,
        n._updateFPS = e.updateFPS || 0,
        n._msToNextUpdate = 0,
        n.autoPlay = e.autoPlay !== !1,
        n._load = null,
        n._resolve = null,
        n._onCanPlay = n._onCanPlay.bind(n),
        n._onError = n._onError.bind(n),
        e.autoLoad !== !1 && n.load(),
        n
    }
    return r.prototype.update = function(t) {
        if (!this.destroyed) {
            var e = it.shared.elapsedMS * this.source.playbackRate;
            this._msToNextUpdate = Math.floor(this._msToNextUpdate - e),
            (!this._updateFPS || this._msToNextUpdate <= 0) && (i.prototype.update.call(this),
            this._msToNextUpdate = this._updateFPS ? Math.floor(1e3 / this._updateFPS) : 0)
        }
    }
    ,
    r.prototype.load = function() {
        var t = this;
        if (this._load)
            return this._load;
        var e = this.source;
        return (e.readyState === e.HAVE_ENOUGH_DATA || e.readyState === e.HAVE_FUTURE_DATA) && e.width && e.height && (e.complete = !0),
        e.addEventListener("play", this._onPlayStart.bind(this)),
        e.addEventListener("pause", this._onPlayStop.bind(this)),
        this._isSourceReady() ? this._onCanPlay() : (e.addEventListener("canplay", this._onCanPlay),
        e.addEventListener("canplaythrough", this._onCanPlay),
        e.addEventListener("error", this._onError, !0)),
        this._load = new Promise(function(n) {
            t.valid ? n(t) : (t._resolve = n,
            e.load())
        }
        ),
        this._load
    }
    ,
    r.prototype._onError = function(t) {
        this.source.removeEventListener("error", this._onError, !0),
        this.onError.emit(t)
    }
    ,
    r.prototype._isSourcePlaying = function() {
        var t = this.source;
        return t.currentTime > 0 && t.paused === !1 && t.ended === !1 && t.readyState > 2
    }
    ,
    r.prototype._isSourceReady = function() {
        var t = this.source;
        return t.readyState === 3 || t.readyState === 4
    }
    ,
    r.prototype._onPlayStart = function() {
        this.valid || this._onCanPlay(),
        this.autoUpdate && !this._isConnectedToTicker && (it.shared.add(this.update, this),
        this._isConnectedToTicker = !0)
    }
    ,
    r.prototype._onPlayStop = function() {
        this._isConnectedToTicker && (it.shared.remove(this.update, this),
        this._isConnectedToTicker = !1)
    }
    ,
    r.prototype._onCanPlay = function() {
        var t = this.source;
        t.removeEventListener("canplay", this._onCanPlay),
        t.removeEventListener("canplaythrough", this._onCanPlay);
        var e = this.valid;
        this.resize(t.videoWidth, t.videoHeight),
        !e && this._resolve && (this._resolve(this),
        this._resolve = null),
        this._isSourcePlaying() ? this._onPlayStart() : this.autoPlay && t.play()
    }
    ,
    r.prototype.dispose = function() {
        this._isConnectedToTicker && it.shared.remove(this.update, this);
        var t = this.source;
        t && (t.removeEventListener("error", this._onError, !0),
        t.pause(),
        t.src = "",
        t.load()),
        i.prototype.dispose.call(this)
    }
    ,
    Object.defineProperty(r.prototype, "autoUpdate", {
        get: function() {
            return this._autoUpdate
        },
        set: function(t) {
            t !== this._autoUpdate && (this._autoUpdate = t,
            !this._autoUpdate && this._isConnectedToTicker ? (it.shared.remove(this.update, this),
            this._isConnectedToTicker = !1) : this._autoUpdate && !this._isConnectedToTicker && this._isSourcePlaying() && (it.shared.add(this.update, this),
            this._isConnectedToTicker = !0))
        },
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(r.prototype, "updateFPS", {
        get: function() {
            return this._updateFPS
        },
        set: function(t) {
            t !== this._updateFPS && (this._updateFPS = t)
        },
        enumerable: !1,
        configurable: !0
    }),
    r.test = function(t, e) {
        return t instanceof HTMLVideoElement || r.TYPES.indexOf(e) > -1
    }
    ,
    r.TYPES = ["mp4", "m4v", "webm", "ogg", "ogv", "h264", "avi", "mov"],
    r.MIME_TYPES = {
        ogv: "video/ogg",
        mov: "video/quicktime",
        m4v: "video/mp4"
    },
    r
}(Xt)
  , Va = function(i) {
    k(r, i);
    function r() {
        return i !== null && i.apply(this, arguments) || this
    }
    return r.test = function(t) {
        return !!window.createImageBitmap && t instanceof ImageBitmap
    }
    ,
    r
}(Xt);
qr.push(cn, Va, fn, za, Ha, $r, ja, Ga);
var Ya = {
    Resource: De,
    BaseImageResource: Xt,
    INSTALLED: qr,
    autoDetectResource: hn,
    AbstractMultiResource: ln,
    ArrayResource: Ga,
    BufferResource: $r,
    CanvasResource: fn,
    CubeResource: ja,
    ImageResource: cn,
    SVGResource: Ha,
    VideoResource: za,
    ImageBitmapResource: Va
}
  , ut = function() {
    function i(r) {
        this.renderer = r
    }
    return i.prototype.destroy = function() {
        this.renderer = null
    }
    ,
    i
}()
  , pl = function(i) {
    k(r, i);
    function r() {
        return i !== null && i.apply(this, arguments) || this
    }
    return r.prototype.upload = function(t, e, n) {
        var s = t.gl;
        return s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL, e.alphaMode === Ot.UNPACK),
        n.width === e.width && n.height === e.height ? s.texSubImage2D(e.target, 0, 0, 0, e.width, e.height, e.format, e.type, this.data) : (n.width = e.width,
        n.height = e.height,
        s.texImage2D(e.target, 0, t.context.webGLVersion === 1 ? s.DEPTH_COMPONENT : s.DEPTH_COMPONENT16, e.width, e.height, 0, e.format, e.type, this.data)),
        !0
    }
    ,
    r
}($r)
  , hr = function() {
    function i(r, t) {
        this.width = Math.ceil(r || 100),
        this.height = Math.ceil(t || 100),
        this.stencil = !1,
        this.depth = !1,
        this.dirtyId = 0,
        this.dirtyFormat = 0,
        this.dirtySize = 0,
        this.depthTexture = null,
        this.colorTextures = [],
        this.glFramebuffers = {},
        this.disposeRunner = new st("disposeFramebuffer"),
        this.multisample = Qt.NONE
    }
    return Object.defineProperty(i.prototype, "colorTexture", {
        get: function() {
            return this.colorTextures[0]
        },
        enumerable: !1,
        configurable: !0
    }),
    i.prototype.addColorTexture = function(r, t) {
        return r === void 0 && (r = 0),
        this.colorTextures[r] = t || new q(null,{
            scaleMode: pt.NEAREST,
            resolution: 1,
            mipmap: he.OFF,
            width: this.width,
            height: this.height
        }),
        this.dirtyId++,
        this.dirtyFormat++,
        this
    }
    ,
    i.prototype.addDepthTexture = function(r) {
        return this.depthTexture = r || new q(new pl(null,{
            width: this.width,
            height: this.height
        }),{
            scaleMode: pt.NEAREST,
            resolution: 1,
            width: this.width,
            height: this.height,
            mipmap: he.OFF,
            format: oe.DEPTH_COMPONENT,
            type: et.UNSIGNED_SHORT
        }),
        this.dirtyId++,
        this.dirtyFormat++,
        this
    }
    ,
    i.prototype.enableDepth = function() {
        return this.depth = !0,
        this.dirtyId++,
        this.dirtyFormat++,
        this
    }
    ,
    i.prototype.enableStencil = function() {
        return this.stencil = !0,
        this.dirtyId++,
        this.dirtyFormat++,
        this
    }
    ,
    i.prototype.resize = function(r, t) {
        if (r = Math.ceil(r),
        t = Math.ceil(t),
        !(r === this.width && t === this.height)) {
            this.width = r,
            this.height = t,
            this.dirtyId++,
            this.dirtySize++;
            for (var e = 0; e < this.colorTextures.length; e++) {
                var n = this.colorTextures[e]
                  , s = n.resolution;
                n.setSize(r / s, t / s)
            }
            if (this.depthTexture) {
                var s = this.depthTexture.resolution;
                this.depthTexture.setSize(r / s, t / s)
            }
        }
    }
    ,
    i.prototype.dispose = function() {
        this.disposeRunner.emit(this, !1)
    }
    ,
    i.prototype.destroyDepthTexture = function() {
        this.depthTexture && (this.depthTexture.destroy(),
        this.depthTexture = null,
        ++this.dirtyId,
        ++this.dirtyFormat)
    }
    ,
    i
}()
  , Ue = function(i) {
    k(r, i);
    function r(t) {
        var e = this;
        if (typeof t == "number") {
            var n = arguments[0]
              , s = arguments[1]
              , a = arguments[2]
              , o = arguments[3];
            t = {
                width: n,
                height: s,
                scaleMode: a,
                resolution: o
            }
        }
        e = i.call(this, null, t) || this;
        var h = t || {}
          , u = h.width
          , l = h.height;
        return e.mipmap = 0,
        e.width = Math.ceil(u) || 100,
        e.height = Math.ceil(l) || 100,
        e.valid = !0,
        e.clearColor = [0, 0, 0, 0],
        e.framebuffer = new hr(e.width * e.resolution,e.height * e.resolution).addColorTexture(0, e),
        e.maskStack = [],
        e.filterStack = [{}],
        e
    }
    return r.prototype.resize = function(t, e) {
        t = Math.ceil(t),
        e = Math.ceil(e),
        this.framebuffer.resize(t * this.resolution, e * this.resolution)
    }
    ,
    r.prototype.dispose = function() {
        this.framebuffer.dispose(),
        i.prototype.dispose.call(this)
    }
    ,
    r.prototype.destroy = function() {
        i.prototype.destroy.call(this),
        this.framebuffer.destroyDepthTexture(),
        this.framebuffer = null
    }
    ,
    r
}(q)
  , Zr = function() {
    function i() {
        this.x0 = 0,
        this.y0 = 0,
        this.x1 = 1,
        this.y1 = 0,
        this.x2 = 1,
        this.y2 = 1,
        this.x3 = 0,
        this.y3 = 1,
        this.uvsFloat32 = new Float32Array(8)
    }
    return i.prototype.set = function(r, t, e) {
        var n = t.width
          , s = t.height;
        if (e) {
            var a = r.width / 2 / n
              , o = r.height / 2 / s
              , h = r.x / n + a
              , u = r.y / s + o;
            e = Z.add(e, Z.NW),
            this.x0 = h + a * Z.uX(e),
            this.y0 = u + o * Z.uY(e),
            e = Z.add(e, 2),
            this.x1 = h + a * Z.uX(e),
            this.y1 = u + o * Z.uY(e),
            e = Z.add(e, 2),
            this.x2 = h + a * Z.uX(e),
            this.y2 = u + o * Z.uY(e),
            e = Z.add(e, 2),
            this.x3 = h + a * Z.uX(e),
            this.y3 = u + o * Z.uY(e)
        } else
            this.x0 = r.x / n,
            this.y0 = r.y / s,
            this.x1 = (r.x + r.width) / n,
            this.y1 = r.y / s,
            this.x2 = (r.x + r.width) / n,
            this.y2 = (r.y + r.height) / s,
            this.x3 = r.x / n,
            this.y3 = (r.y + r.height) / s;
        this.uvsFloat32[0] = this.x0,
        this.uvsFloat32[1] = this.y0,
        this.uvsFloat32[2] = this.x1,
        this.uvsFloat32[3] = this.y1,
        this.uvsFloat32[4] = this.x2,
        this.uvsFloat32[5] = this.y2,
        this.uvsFloat32[6] = this.x3,
        this.uvsFloat32[7] = this.y3
    }
    ,
    i
}()
  , Wa = new Zr
  , L = function(i) {
    k(r, i);
    function r(t, e, n, s, a, o) {
        var h = i.call(this) || this;
        if (h.noFrame = !1,
        e || (h.noFrame = !0,
        e = new j(0,0,1,1)),
        t instanceof r && (t = t.baseTexture),
        h.baseTexture = t,
        h._frame = e,
        h.trim = s,
        h.valid = !1,
        h._uvs = Wa,
        h.uvMatrix = null,
        h.orig = n || e,
        h._rotate = Number(a || 0),
        a === !0)
            h._rotate = 2;
        else if (h._rotate % 2 != 0)
            throw new Error("attempt to use diamond-shaped UVs. If you are sure, set rotation manually");
        return h.defaultAnchor = o ? new V(o.x,o.y) : new V(0,0),
        h._updateID = 0,
        h.textureCacheIds = [],
        t.valid ? h.noFrame ? t.valid && h.onBaseTextureUpdated(t) : h.frame = e : t.once("loaded", h.onBaseTextureUpdated, h),
        h.noFrame && t.on("update", h.onBaseTextureUpdated, h),
        h
    }
    return r.prototype.update = function() {
        this.baseTexture.resource && this.baseTexture.resource.update()
    }
    ,
    r.prototype.onBaseTextureUpdated = function(t) {
        if (this.noFrame) {
            if (!this.baseTexture.valid)
                return;
            this._frame.width = t.width,
            this._frame.height = t.height,
            this.valid = !0,
            this.updateUvs()
        } else
            this.frame = this._frame;
        this.emit("update", this)
    }
    ,
    r.prototype.destroy = function(t) {
        if (this.baseTexture) {
            if (t) {
                var e = this.baseTexture;
                e && e.url && ft[e.url] && r.removeFromCache(e.url),
                this.baseTexture.destroy()
            }
            this.baseTexture.off("loaded", this.onBaseTextureUpdated, this),
            this.baseTexture.off("update", this.onBaseTextureUpdated, this),
            this.baseTexture = null
        }
        this._frame = null,
        this._uvs = null,
        this.trim = null,
        this.orig = null,
        this.valid = !1,
        r.removeFromCache(this),
        this.textureCacheIds = null
    }
    ,
    r.prototype.clone = function() {
        return new r(this.baseTexture,this.frame.clone(),this.orig.clone(),this.trim && this.trim.clone(),this.rotate,this.defaultAnchor)
    }
    ,
    r.prototype.updateUvs = function() {
        this._uvs === Wa && (this._uvs = new Zr),
        this._uvs.set(this._frame, this.baseTexture, this.rotate),
        this._updateID++
    }
    ,
    r.from = function(t, e, n) {
        e === void 0 && (e = {}),
        n === void 0 && (n = R.STRICT_TEXTURE_CACHE);
        var s = typeof t == "string"
          , a = null;
        s ? a = t : (t._pixiId || (t._pixiId = "pixiid_" + ce()),
        a = t._pixiId);
        var o = ft[a];
        if (s && n && !o)
            throw new Error('The cacheId "' + a + '" does not exist in TextureCache.');
        return o || (e.resolution || (e.resolution = ar(t)),
        o = new r(new q(t,e)),
        o.baseTexture.cacheId = a,
        q.addToCache(o.baseTexture, a),
        r.addToCache(o, a)),
        o
    }
    ,
    r.fromURL = function(t, e) {
        var n = Object.assign({
            autoLoad: !1
        }, e == null ? void 0 : e.resourceOptions)
          , s = r.from(t, Object.assign({
            resourceOptions: n
        }, e), !1)
          , a = s.baseTexture.resource;
        return s.baseTexture.valid ? Promise.resolve(s) : a.load().then(function() {
            return Promise.resolve(s)
        })
    }
    ,
    r.fromBuffer = function(t, e, n, s) {
        return new r(q.fromBuffer(t, e, n, s))
    }
    ,
    r.fromLoader = function(t, e, n) {
        var s = new cn(t);
        s.url = e;
        var a = new q(s,{
            scaleMode: R.SCALE_MODE,
            resolution: ar(e)
        })
          , o = new r(a);
        return n || (n = e),
        q.addToCache(o.baseTexture, n),
        r.addToCache(o, n),
        n !== e && (q.addToCache(o.baseTexture, e),
        r.addToCache(o, e)),
        o
    }
    ,
    r.addToCache = function(t, e) {
        e && (t.textureCacheIds.indexOf(e) === -1 && t.textureCacheIds.push(e),
        ft[e] && console.warn("Texture added to the cache with an id [" + e + "] that already had an entry"),
        ft[e] = t)
    }
    ,
    r.removeFromCache = function(t) {
        if (typeof t == "string") {
            var e = ft[t];
            if (e) {
                var n = e.textureCacheIds.indexOf(t);
                return n > -1 && e.textureCacheIds.splice(n, 1),
                delete ft[t],
                e
            }
        } else if (t && t.textureCacheIds) {
            for (var s = 0; s < t.textureCacheIds.length; ++s)
                ft[t.textureCacheIds[s]] === t && delete ft[t.textureCacheIds[s]];
            return t.textureCacheIds.length = 0,
            t
        }
        return null
    }
    ,
    Object.defineProperty(r.prototype, "resolution", {
        get: function() {
            return this.baseTexture.resolution
        },
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(r.prototype, "frame", {
        get: function() {
            return this._frame
        },
        set: function(t) {
            this._frame = t,
            this.noFrame = !1;
            var e = t.x
              , n = t.y
              , s = t.width
              , a = t.height
              , o = e + s > this.baseTexture.width
              , h = n + a > this.baseTexture.height;
            if (o || h) {
                var u = o && h ? "and" : "or"
                  , l = "X: " + e + " + " + s + " = " + (e + s) + " > " + this.baseTexture.width
                  , f = "Y: " + n + " + " + a + " = " + (n + a) + " > " + this.baseTexture.height;
                throw new Error("Texture Error: frame does not fit inside the base Texture dimensions: " + (l + " " + u + " " + f))
            }
            this.valid = s && a && this.baseTexture.valid,
            !this.trim && !this.rotate && (this.orig = t),
            this.valid && this.updateUvs()
        },
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(r.prototype, "rotate", {
        get: function() {
            return this._rotate
        },
        set: function(t) {
            this._rotate = t,
            this.valid && this.updateUvs()
        },
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(r.prototype, "width", {
        get: function() {
            return this.orig.width
        },
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(r.prototype, "height", {
        get: function() {
            return this.orig.height
        },
        enumerable: !1,
        configurable: !0
    }),
    r.prototype.castToBaseTexture = function() {
        return this.baseTexture
    }
    ,
    r
}(Ae);
function vl() {
    var i = document.createElement("canvas");
    i.width = 16,
    i.height = 16;
    var r = i.getContext("2d");
    return r.fillStyle = "white",
    r.fillRect(0, 0, 16, 16),
    new L(new q(new fn(i)))
}
function Kr(i) {
    i.destroy = function() {}
    ,
    i.on = function() {}
    ,
    i.once = function() {}
    ,
    i.emit = function() {}
}
L.EMPTY = new L(new q);
Kr(L.EMPTY);
Kr(L.EMPTY.baseTexture);
L.WHITE = vl();
Kr(L.WHITE);
Kr(L.WHITE.baseTexture);
var ee = function(i) {
    k(r, i);
    function r(t, e) {
        var n = this
          , s = null;
        if (!(t instanceof Ue)) {
            var a = arguments[1]
              , o = arguments[2]
              , h = arguments[3]
              , u = arguments[4];
            console.warn("Please use RenderTexture.create(" + a + ", " + o + ") instead of the ctor directly."),
            s = arguments[0],
            e = null,
            t = new Ue({
                width: a,
                height: o,
                scaleMode: h,
                resolution: u
            })
        }
        return n = i.call(this, t, e) || this,
        n.legacyRenderer = s,
        n.valid = !0,
        n.filterFrame = null,
        n.filterPoolKey = null,
        n.updateUvs(),
        n
    }
    return Object.defineProperty(r.prototype, "framebuffer", {
        get: function() {
            return this.baseTexture.framebuffer
        },
        enumerable: !1,
        configurable: !0
    }),
    r.prototype.resize = function(t, e, n) {
        n === void 0 && (n = !0),
        t = Math.ceil(t),
        e = Math.ceil(e),
        this.valid = t > 0 && e > 0,
        this._frame.width = this.orig.width = t,
        this._frame.height = this.orig.height = e,
        n && this.baseTexture.resize(t, e),
        this.updateUvs()
    }
    ,
    r.prototype.setResolution = function(t) {
        var e = this.baseTexture;
        e.resolution !== t && (e.setResolution(t),
        this.resize(e.width, e.height, !1))
    }
    ,
    r.create = function(t) {
        return typeof t == "number" && (t = {
            width: t,
            height: arguments[1],
            scaleMode: arguments[2],
            resolution: arguments[3]
        }),
        new r(new Ue(t))
    }
    ,
    r
}(L)
  , dn = function() {
    function i(r) {
        this.texturePool = {},
        this.textureOptions = r || {},
        this.enableFullScreen = !1,
        this._pixelsWidth = 0,
        this._pixelsHeight = 0
    }
    return i.prototype.createTexture = function(r, t) {
        var e = new Ue(Object.assign({
            width: r,
            height: t,
            resolution: 1
        }, this.textureOptions));
        return new ee(e)
    }
    ,
    i.prototype.getOptimalTexture = function(r, t, e) {
        e === void 0 && (e = 1);
        var n = i.SCREEN_KEY;
        r *= e,
        t *= e,
        (!this.enableFullScreen || r !== this._pixelsWidth || t !== this._pixelsHeight) && (r = sr(r),
        t = sr(t),
        n = (r & 65535) << 16 | t & 65535),
        this.texturePool[n] || (this.texturePool[n] = []);
        var s = this.texturePool[n].pop();
        return s || (s = this.createTexture(r, t)),
        s.filterPoolKey = n,
        s.setResolution(e),
        s
    }
    ,
    i.prototype.getFilterTexture = function(r, t) {
        var e = this.getOptimalTexture(r.width, r.height, t || r.resolution);
        return e.filterFrame = r.filterFrame,
        e
    }
    ,
    i.prototype.returnTexture = function(r) {
        var t = r.filterPoolKey;
        r.filterFrame = null,
        this.texturePool[t].push(r)
    }
    ,
    i.prototype.returnFilterTexture = function(r) {
        this.returnTexture(r)
    }
    ,
    i.prototype.clear = function(r) {
        if (r = r !== !1,
        r)
            for (var t in this.texturePool) {
                var e = this.texturePool[t];
                if (e)
                    for (var n = 0; n < e.length; n++)
                        e[n].destroy(!0)
            }
        this.texturePool = {}
    }
    ,
    i.prototype.setScreenSize = function(r) {
        if (!(r.width === this._pixelsWidth && r.height === this._pixelsHeight)) {
            var t = i.SCREEN_KEY
              , e = this.texturePool[t];
            if (this.enableFullScreen = r.width > 0 && r.height > 0,
            e)
                for (var n = 0; n < e.length; n++)
                    e[n].destroy(!0);
            this.texturePool[t] = [],
            this._pixelsWidth = r.width,
            this._pixelsHeight = r.height
        }
    }
    ,
    i.SCREEN_KEY = "screen",
    i
}()
  , Jr = function() {
    function i(r, t, e, n, s, a, o) {
        t === void 0 && (t = 0),
        e === void 0 && (e = !1),
        n === void 0 && (n = 5126),
        this.buffer = r,
        this.size = t,
        this.normalized = e,
        this.type = n,
        this.stride = s,
        this.start = a,
        this.instance = o
    }
    return i.prototype.destroy = function() {
        this.buffer = null
    }
    ,
    i.from = function(r, t, e, n, s) {
        return new i(r,t,e,n,s)
    }
    ,
    i
}()
  , ml = 0
  , nt = function() {
    function i(r, t, e) {
        t === void 0 && (t = !0),
        e === void 0 && (e = !1),
        this.data = r || new Float32Array(1),
        this._glBuffers = {},
        this._updateID = 0,
        this.index = e,
        this.static = t,
        this.id = ml++,
        this.disposeRunner = new st("disposeBuffer")
    }
    return i.prototype.update = function(r) {
        this.data = r || this.data,
        this._updateID++
    }
    ,
    i.prototype.dispose = function() {
        this.disposeRunner.emit(this, !1)
    }
    ,
    i.prototype.destroy = function() {
        this.dispose(),
        this.data = null
    }
    ,
    i.from = function(r) {
        return r instanceof Array && (r = new Float32Array(r)),
        new i(r)
    }
    ,
    i
}();
function qa(i) {
    if (i.BYTES_PER_ELEMENT === 4)
        return i instanceof Float32Array ? "Float32Array" : i instanceof Uint32Array ? "Uint32Array" : "Int32Array";
    if (i.BYTES_PER_ELEMENT === 2) {
        if (i instanceof Uint16Array)
            return "Uint16Array"
    } else if (i.BYTES_PER_ELEMENT === 1 && i instanceof Uint8Array)
        return "Uint8Array";
    return null
}
var yl = {
    Float32Array,
    Uint32Array,
    Int32Array,
    Uint8Array
};
function gl(i, r) {
    for (var t = 0, e = 0, n = {}, s = 0; s < i.length; s++)
        e += r[s],
        t += i[s].length;
    for (var a = new ArrayBuffer(t * 4), o = null, h = 0, s = 0; s < i.length; s++) {
        var u = r[s]
          , l = i[s]
          , f = qa(l);
        n[f] || (n[f] = new yl[f](a)),
        o = n[f];
        for (var c = 0; c < l.length; c++) {
            var d = (c / u | 0) * e + h
              , p = c % u;
            o[d + p] = l[c]
        }
        h += u
    }
    return new Float32Array(a)
}
var $a = {
    5126: 4,
    5123: 2,
    5121: 1
}
  , _l = 0
  , xl = {
    Float32Array,
    Uint32Array,
    Int32Array,
    Uint8Array,
    Uint16Array
}
  , _e = function() {
    function i(r, t) {
        r === void 0 && (r = []),
        t === void 0 && (t = {}),
        this.buffers = r,
        this.indexBuffer = null,
        this.attributes = t,
        this.glVertexArrayObjects = {},
        this.id = _l++,
        this.instanced = !1,
        this.instanceCount = 1,
        this.disposeRunner = new st("disposeGeometry"),
        this.refCount = 0
    }
    return i.prototype.addAttribute = function(r, t, e, n, s, a, o, h) {
        if (e === void 0 && (e = 0),
        n === void 0 && (n = !1),
        h === void 0 && (h = !1),
        !t)
            throw new Error("You must pass a buffer when creating an attribute");
        t instanceof nt || (t instanceof Array && (t = new Float32Array(t)),
        t = new nt(t));
        var u = r.split("|");
        if (u.length > 1) {
            for (var l = 0; l < u.length; l++)
                this.addAttribute(u[l], t, e, n, s);
            return this
        }
        var f = this.buffers.indexOf(t);
        return f === -1 && (this.buffers.push(t),
        f = this.buffers.length - 1),
        this.attributes[r] = new Jr(f,e,n,s,a,o,h),
        this.instanced = this.instanced || h,
        this
    }
    ,
    i.prototype.getAttribute = function(r) {
        return this.attributes[r]
    }
    ,
    i.prototype.getBuffer = function(r) {
        return this.buffers[this.getAttribute(r).buffer]
    }
    ,
    i.prototype.addIndex = function(r) {
        return r instanceof nt || (r instanceof Array && (r = new Uint16Array(r)),
        r = new nt(r)),
        r.index = !0,
        this.indexBuffer = r,
        this.buffers.indexOf(r) === -1 && this.buffers.push(r),
        this
    }
    ,
    i.prototype.getIndex = function() {
        return this.indexBuffer
    }
    ,
    i.prototype.interleave = function() {
        if (this.buffers.length === 1 || this.buffers.length === 2 && this.indexBuffer)
            return this;
        var r = [], t = [], e = new nt, n;
        for (n in this.attributes) {
            var s = this.attributes[n]
              , a = this.buffers[s.buffer];
            r.push(a.data),
            t.push(s.size * $a[s.type] / 4),
            s.buffer = 0
        }
        for (e.data = gl(r, t),
        n = 0; n < this.buffers.length; n++)
            this.buffers[n] !== this.indexBuffer && this.buffers[n].destroy();
        return this.buffers = [e],
        this.indexBuffer && this.buffers.push(this.indexBuffer),
        this
    }
    ,
    i.prototype.getSize = function() {
        for (var r in this.attributes) {
            var t = this.attributes[r]
              , e = this.buffers[t.buffer];
            return e.data.length / (t.stride / 4 || t.size)
        }
        return 0
    }
    ,
    i.prototype.dispose = function() {
        this.disposeRunner.emit(this, !1)
    }
    ,
    i.prototype.destroy = function() {
        this.dispose(),
        this.buffers = null,
        this.indexBuffer = null,
        this.attributes = null
    }
    ,
    i.prototype.clone = function() {
        for (var r = new i, t = 0; t < this.buffers.length; t++)
            r.buffers[t] = new nt(this.buffers[t].data.slice(0));
        for (var t in this.attributes) {
            var e = this.attributes[t];
            r.attributes[t] = new Jr(e.buffer,e.size,e.normalized,e.type,e.stride,e.start,e.instance)
        }
        return this.indexBuffer && (r.indexBuffer = r.buffers[this.buffers.indexOf(this.indexBuffer)],
        r.indexBuffer.index = !0),
        r
    }
    ,
    i.merge = function(r) {
        for (var t = new i, e = [], n = [], s = [], a, o = 0; o < r.length; o++) {
            a = r[o];
            for (var h = 0; h < a.buffers.length; h++)
                n[h] = n[h] || 0,
                n[h] += a.buffers[h].data.length,
                s[h] = 0
        }
        for (var o = 0; o < a.buffers.length; o++)
            e[o] = new xl[qa(a.buffers[o].data)](n[o]),
            t.buffers[o] = new nt(e[o]);
        for (var o = 0; o < r.length; o++) {
            a = r[o];
            for (var h = 0; h < a.buffers.length; h++)
                e[h].set(a.buffers[h].data, s[h]),
                s[h] += a.buffers[h].data.length
        }
        if (t.attributes = a.attributes,
        a.indexBuffer) {
            t.indexBuffer = t.buffers[a.buffers.indexOf(a.indexBuffer)],
            t.indexBuffer.index = !0;
            for (var u = 0, l = 0, f = 0, c = 0, o = 0; o < a.buffers.length; o++)
                if (a.buffers[o] !== a.indexBuffer) {
                    c = o;
                    break
                }
            for (var o in a.attributes) {
                var d = a.attributes[o];
                (d.buffer | 0) === c && (l += d.size * $a[d.type] / 4)
            }
            for (var o = 0; o < r.length; o++) {
                for (var p = r[o].indexBuffer.data, h = 0; h < p.length; h++)
                    t.indexBuffer.data[h + f] += u;
                u += a.buffers[c].data.length / l,
                f += p.length
            }
        }
        return t
    }
    ,
    i
}()
  , pn = function(i) {
    k(r, i);
    function r() {
        var t = i.call(this) || this;
        return t.addAttribute("aVertexPosition", new Float32Array([0, 0, 1, 0, 1, 1, 0, 1])).addIndex([0, 1, 3, 2]),
        t
    }
    return r
}(_e)
  , Qr = function(i) {
    k(r, i);
    function r() {
        var t = i.call(this) || this;
        return t.vertices = new Float32Array([-1, -1, 1, -1, 1, 1, -1, 1]),
        t.uvs = new Float32Array([0, 0, 1, 0, 1, 1, 0, 1]),
        t.vertexBuffer = new nt(t.vertices),
        t.uvBuffer = new nt(t.uvs),
        t.addAttribute("aVertexPosition", t.vertexBuffer).addAttribute("aTextureCoord", t.uvBuffer).addIndex([0, 1, 2, 0, 2, 3]),
        t
    }
    return r.prototype.map = function(t, e) {
        var n = 0
          , s = 0;
        return this.uvs[0] = n,
        this.uvs[1] = s,
        this.uvs[2] = n + e.width / t.width,
        this.uvs[3] = s,
        this.uvs[4] = n + e.width / t.width,
        this.uvs[5] = s + e.height / t.height,
        this.uvs[6] = n,
        this.uvs[7] = s + e.height / t.height,
        n = e.x,
        s = e.y,
        this.vertices[0] = n,
        this.vertices[1] = s,
        this.vertices[2] = n + e.width,
        this.vertices[3] = s,
        this.vertices[4] = n + e.width,
        this.vertices[5] = s + e.height,
        this.vertices[6] = n,
        this.vertices[7] = s + e.height,
        this.invalidate(),
        this
    }
    ,
    r.prototype.invalidate = function() {
        return this.vertexBuffer._updateID++,
        this.uvBuffer._updateID++,
        this
    }
    ,
    r
}(_e)
  , bl = 0
  , Gt = function() {
    function i(r, t) {
        this.uniforms = r,
        this.group = !0,
        this.syncUniforms = {},
        this.dirtyId = 0,
        this.id = bl++,
        this.static = !!t
    }
    return i.prototype.update = function() {
        this.dirtyId++
    }
    ,
    i.prototype.add = function(r, t, e) {
        this.uniforms[r] = new i(t,e)
    }
    ,
    i.from = function(r, t) {
        return new i(r,t)
    }
    ,
    i
}()
  , vn = function() {
    function i() {
        this.renderTexture = null,
        this.target = null,
        this.legacy = !1,
        this.resolution = 1,
        this.sourceFrame = new j,
        this.destinationFrame = new j,
        this.filters = []
    }
    return i.prototype.clear = function() {
        this.target = null,
        this.filters = null,
        this.renderTexture = null
    }
    ,
    i
}()
  , Za = function(i) {
    k(r, i);
    function r(t) {
        var e = i.call(this, t) || this;
        return e.defaultFilterStack = [{}],
        e.texturePool = new dn,
        e.texturePool.setScreenSize(t.view),
        e.statePool = [],
        e.quad = new pn,
        e.quadUv = new Qr,
        e.tempRect = new j,
        e.activeState = {},
        e.globalUniforms = new Gt({
            outputFrame: e.tempRect,
            inputSize: new Float32Array(4),
            inputPixel: new Float32Array(4),
            inputClamp: new Float32Array(4),
            resolution: 1,
            filterArea: new Float32Array(4),
            filterClamp: new Float32Array(4)
        },!0),
        e.forceClear = !1,
        e.useMaxPadding = !1,
        e
    }
    return r.prototype.push = function(t, e) {
        for (var n = this.renderer, s = this.defaultFilterStack, a = this.statePool.pop() || new vn, o = e[0].resolution, h = e[0].padding, u = e[0].autoFit, l = e[0].legacy, f = 1; f < e.length; f++) {
            var c = e[f];
            o = Math.min(o, c.resolution),
            h = this.useMaxPadding ? Math.max(h, c.padding) : h + c.padding,
            u = u && c.autoFit,
            l = l || c.legacy
        }
        s.length === 1 && (this.defaultFilterStack[0].renderTexture = n.renderTexture.current),
        s.push(a),
        a.resolution = o,
        a.legacy = l,
        a.target = t,
        a.sourceFrame.copyFrom(t.filterArea || t.getBounds(!0)),
        a.sourceFrame.pad(h),
        u && a.sourceFrame.fit(this.renderer.renderTexture.sourceFrame),
        a.sourceFrame.ceil(o),
        a.renderTexture = this.getOptimalFilterTexture(a.sourceFrame.width, a.sourceFrame.height, o),
        a.filters = e,
        a.destinationFrame.width = a.renderTexture.width,
        a.destinationFrame.height = a.renderTexture.height;
        var d = this.tempRect;
        d.width = a.sourceFrame.width,
        d.height = a.sourceFrame.height,
        a.renderTexture.filterFrame = a.sourceFrame,
        n.renderTexture.bind(a.renderTexture, a.sourceFrame, d),
        n.renderTexture.clear()
    }
    ,
    r.prototype.pop = function() {
        var t = this.defaultFilterStack
          , e = t.pop()
          , n = e.filters;
        this.activeState = e;
        var s = this.globalUniforms.uniforms;
        s.outputFrame = e.sourceFrame,
        s.resolution = e.resolution;
        var a = s.inputSize
          , o = s.inputPixel
          , h = s.inputClamp;
        if (a[0] = e.destinationFrame.width,
        a[1] = e.destinationFrame.height,
        a[2] = 1 / a[0],
        a[3] = 1 / a[1],
        o[0] = a[0] * e.resolution,
        o[1] = a[1] * e.resolution,
        o[2] = 1 / o[0],
        o[3] = 1 / o[1],
        h[0] = .5 * o[2],
        h[1] = .5 * o[3],
        h[2] = e.sourceFrame.width * a[2] - .5 * o[2],
        h[3] = e.sourceFrame.height * a[3] - .5 * o[3],
        e.legacy) {
            var u = s.filterArea;
            u[0] = e.destinationFrame.width,
            u[1] = e.destinationFrame.height,
            u[2] = e.sourceFrame.x,
            u[3] = e.sourceFrame.y,
            s.filterClamp = s.inputClamp
        }
        this.globalUniforms.update();
        var l = t[t.length - 1];
        if (e.renderTexture.framebuffer.multisample > 1 && this.renderer.framebuffer.blit(),
        n.length === 1)
            n[0].apply(this, e.renderTexture, l.renderTexture, _t.BLEND, e),
            this.returnFilterTexture(e.renderTexture);
        else {
            var f = e.renderTexture
              , c = this.getOptimalFilterTexture(f.width, f.height, e.resolution);
            c.filterFrame = f.filterFrame;
            var d = 0;
            for (d = 0; d < n.length - 1; ++d) {
                n[d].apply(this, f, c, _t.CLEAR, e);
                var p = f;
                f = c,
                c = p
            }
            n[d].apply(this, f, l.renderTexture, _t.BLEND, e),
            this.returnFilterTexture(f),
            this.returnFilterTexture(c)
        }
        e.clear(),
        this.statePool.push(e)
    }
    ,
    r.prototype.bindAndClear = function(t, e) {
        if (e === void 0 && (e = _t.CLEAR),
        t && t.filterFrame) {
            var n = this.tempRect;
            n.width = t.filterFrame.width,
            n.height = t.filterFrame.height,
            this.renderer.renderTexture.bind(t, t.filterFrame, n)
        } else
            this.renderer.renderTexture.bind(t);
        typeof e == "boolean" && (e = e ? _t.CLEAR : _t.BLEND,
        T("5.2.1", "Use CLEAR_MODES when using clear applyFilter option")),
        (e === _t.CLEAR || e === _t.BLIT && this.forceClear) && this.renderer.renderTexture.clear()
    }
    ,
    r.prototype.applyFilter = function(t, e, n, s) {
        var a = this.renderer;
        this.bindAndClear(n, s),
        t.uniforms.uSampler = e,
        t.uniforms.filterGlobals = this.globalUniforms,
        a.state.set(t.state),
        a.shader.bind(t),
        t.legacy ? (this.quadUv.map(e._frame, e.filterFrame),
        a.geometry.bind(this.quadUv),
        a.geometry.draw(dt.TRIANGLES)) : (a.geometry.bind(this.quad),
        a.geometry.draw(dt.TRIANGLE_STRIP))
    }
    ,
    r.prototype.calculateSpriteMatrix = function(t, e) {
        var n = this.activeState
          , s = n.sourceFrame
          , a = n.destinationFrame
          , o = e._texture.orig
          , h = t.set(a.width, 0, 0, a.height, s.x, s.y)
          , u = e.worldTransform.copyTo(rt.TEMP_MATRIX);
        return u.invert(),
        h.prepend(u),
        h.scale(1 / o.width, 1 / o.height),
        h.translate(e.anchor.x, e.anchor.y),
        h
    }
    ,
    r.prototype.destroy = function() {
        this.texturePool.clear(!1)
    }
    ,
    r.prototype.getOptimalFilterTexture = function(t, e, n) {
        return n === void 0 && (n = 1),
        this.texturePool.getOptimalTexture(t, e, n)
    }
    ,
    r.prototype.getFilterTexture = function(t, e) {
        if (typeof t == "number") {
            var n = t;
            t = e,
            e = n
        }
        t = t || this.activeState.renderTexture;
        var s = this.texturePool.getOptimalTexture(t.width, t.height, e || t.resolution);
        return s.filterFrame = t.filterFrame,
        s
    }
    ,
    r.prototype.returnFilterTexture = function(t) {
        this.texturePool.returnTexture(t)
    }
    ,
    r.prototype.emptyPool = function() {
        this.texturePool.clear(!0)
    }
    ,
    r.prototype.resize = function() {
        this.texturePool.setScreenSize(this.renderer.view)
    }
    ,
    r
}(ut)
  , Be = function() {
    function i(r) {
        this.renderer = r
    }
    return i.prototype.flush = function() {}
    ,
    i.prototype.destroy = function() {
        this.renderer = null
    }
    ,
    i.prototype.start = function() {}
    ,
    i.prototype.stop = function() {
        this.flush()
    }
    ,
    i.prototype.render = function(r) {}
    ,
    i
}()
  , Ka = function(i) {
    k(r, i);
    function r(t) {
        var e = i.call(this, t) || this;
        return e.emptyRenderer = new Be(t),
        e.currentRenderer = e.emptyRenderer,
        e
    }
    return r.prototype.setObjectRenderer = function(t) {
        this.currentRenderer !== t && (this.currentRenderer.stop(),
        this.currentRenderer = t,
        this.currentRenderer.start())
    }
    ,
    r.prototype.flush = function() {
        this.setObjectRenderer(this.emptyRenderer)
    }
    ,
    r.prototype.reset = function() {
        this.setObjectRenderer(this.emptyRenderer)
    }
    ,
    r.prototype.copyBoundTextures = function(t, e) {
        for (var n = this.renderer.texture.boundTextures, s = e - 1; s >= 0; --s)
            t[s] = n[s] || null,
            t[s] && (t[s]._batchLocation = s)
    }
    ,
    r.prototype.boundArray = function(t, e, n, s) {
        for (var a = t.elements, o = t.ids, h = t.count, u = 0, l = 0; l < h; l++) {
            var f = a[l]
              , c = f._batchLocation;
            if (c >= 0 && c < s && e[c] === f) {
                o[l] = c;
                continue
            }
            for (; u < s; ) {
                var d = e[u];
                if (d && d._batchEnabled === n && d._batchLocation === u) {
                    u++;
                    continue
                }
                o[l] = u,
                f._batchLocation = u,
                e[u] = f;
                break
            }
        }
    }
    ,
    r
}(ut)
  , Ja = 0
  , Qa = function(i) {
    k(r, i);
    function r(t) {
        var e = i.call(this, t) || this;
        return e.webGLVersion = 1,
        e.extensions = {},
        e.supports = {
            uint32Indices: !1
        },
        e.handleContextLost = e.handleContextLost.bind(e),
        e.handleContextRestored = e.handleContextRestored.bind(e),
        t.view.addEventListener("webglcontextlost", e.handleContextLost, !1),
        t.view.addEventListener("webglcontextrestored", e.handleContextRestored, !1),
        e
    }
    return Object.defineProperty(r.prototype, "isLost", {
        get: function() {
            return !this.gl || this.gl.isContextLost()
        },
        enumerable: !1,
        configurable: !0
    }),
    r.prototype.contextChange = function(t) {
        this.gl = t,
        this.renderer.gl = t,
        this.renderer.CONTEXT_UID = Ja++,
        t.isContextLost() && t.getExtension("WEBGL_lose_context") && t.getExtension("WEBGL_lose_context").restoreContext()
    }
    ,
    r.prototype.initFromContext = function(t) {
        this.gl = t,
        this.validateContext(t),
        this.renderer.gl = t,
        this.renderer.CONTEXT_UID = Ja++,
        this.renderer.runners.contextChange.emit(t)
    }
    ,
    r.prototype.initFromOptions = function(t) {
        var e = this.createContext(this.renderer.view, t);
        this.initFromContext(e)
    }
    ,
    r.prototype.createContext = function(t, e) {
        var n;
        if (R.PREFER_ENV >= Tt.WEBGL2 && (n = t.getContext("webgl2", e)),
        n)
            this.webGLVersion = 2;
        else if (this.webGLVersion = 1,
        n = t.getContext("webgl", e) || t.getContext("experimental-webgl", e),
        !n)
            throw new Error("This browser does not support WebGL. Try using the canvas renderer");
        return this.gl = n,
        this.getExtensions(),
        this.gl
    }
    ,
    r.prototype.getExtensions = function() {
        var t = this.gl;
        this.webGLVersion === 1 ? Object.assign(this.extensions, {
            drawBuffers: t.getExtension("WEBGL_draw_buffers"),
            depthTexture: t.getExtension("WEBGL_depth_texture"),
            loseContext: t.getExtension("WEBGL_lose_context"),
            vertexArrayObject: t.getExtension("OES_vertex_array_object") || t.getExtension("MOZ_OES_vertex_array_object") || t.getExtension("WEBKIT_OES_vertex_array_object"),
            anisotropicFiltering: t.getExtension("EXT_texture_filter_anisotropic"),
            uint32ElementIndex: t.getExtension("OES_element_index_uint"),
            floatTexture: t.getExtension("OES_texture_float"),
            floatTextureLinear: t.getExtension("OES_texture_float_linear"),
            textureHalfFloat: t.getExtension("OES_texture_half_float"),
            textureHalfFloatLinear: t.getExtension("OES_texture_half_float_linear")
        }) : this.webGLVersion === 2 && Object.assign(this.extensions, {
            anisotropicFiltering: t.getExtension("EXT_texture_filter_anisotropic"),
            colorBufferFloat: t.getExtension("EXT_color_buffer_float"),
            floatTextureLinear: t.getExtension("OES_texture_float_linear")
        })
    }
    ,
    r.prototype.handleContextLost = function(t) {
        t.preventDefault()
    }
    ,
    r.prototype.handleContextRestored = function() {
        this.renderer.runners.contextChange.emit(this.gl)
    }
    ,
    r.prototype.destroy = function() {
        var t = this.renderer.view;
        t.removeEventListener("webglcontextlost", this.handleContextLost),
        t.removeEventListener("webglcontextrestored", this.handleContextRestored),
        this.gl.useProgram(null),
        this.extensions.loseContext && this.extensions.loseContext.loseContext()
    }
    ,
    r.prototype.postrender = function() {
        this.renderer.renderingToScreen && this.gl.flush()
    }
    ,
    r.prototype.validateContext = function(t) {
        var e = t.getContextAttributes()
          , n = "WebGL2RenderingContext"in window && t instanceof window.WebGL2RenderingContext;
        n && (this.webGLVersion = 2),
        e.stencil || console.warn("Provided WebGL context does not have a stencil buffer, masks may not render correctly");
        var s = n || !!t.getExtension("OES_element_index_uint");
        this.supports.uint32Indices = s,
        s || console.warn("Provided WebGL context does not support 32 index buffer, complex graphics may not render correctly")
    }
    ,
    r
}(ut)
  , mn = function() {
    function i(r) {
        this.framebuffer = r,
        this.stencil = null,
        this.dirtyId = 0,
        this.dirtyFormat = 0,
        this.dirtySize = 0,
        this.multisample = Qt.NONE,
        this.msaaBuffer = null,
        this.blitFramebuffer = null
    }
    return i
}()
  , Tl = new j
  , to = function(i) {
    k(r, i);
    function r(t) {
        var e = i.call(this, t) || this;
        return e.managedFramebuffers = [],
        e.unknownFramebuffer = new hr(10,10),
        e.msaaSamples = null,
        e
    }
    return r.prototype.contextChange = function() {
        var t = this.gl = this.renderer.gl;
        if (this.CONTEXT_UID = this.renderer.CONTEXT_UID,
        this.current = this.unknownFramebuffer,
        this.viewport = new j,
        this.hasMRT = !0,
        this.writeDepthTexture = !0,
        this.disposeAll(!0),
        this.renderer.context.webGLVersion === 1) {
            var e = this.renderer.context.extensions.drawBuffers
              , n = this.renderer.context.extensions.depthTexture;
            R.PREFER_ENV === Tt.WEBGL_LEGACY && (e = null,
            n = null),
            e ? t.drawBuffers = function(s) {
                return e.drawBuffersWEBGL(s)
            }
            : (this.hasMRT = !1,
            t.drawBuffers = function() {}
            ),
            n || (this.writeDepthTexture = !1)
        } else
            this.msaaSamples = t.getInternalformatParameter(t.RENDERBUFFER, t.RGBA8, t.SAMPLES)
    }
    ,
    r.prototype.bind = function(t, e) {
        var n = this.gl;
        if (t) {
            var s = t.glFramebuffers[this.CONTEXT_UID] || this.initFramebuffer(t);
            this.current !== t && (this.current = t,
            n.bindFramebuffer(n.FRAMEBUFFER, s.framebuffer)),
            s.dirtyId !== t.dirtyId && (s.dirtyId = t.dirtyId,
            s.dirtyFormat !== t.dirtyFormat ? (s.dirtyFormat = t.dirtyFormat,
            this.updateFramebuffer(t)) : s.dirtySize !== t.dirtySize && (s.dirtySize = t.dirtySize,
            this.resizeFramebuffer(t)));
            for (var a = 0; a < t.colorTextures.length; a++) {
                var o = t.colorTextures[a];
                this.renderer.texture.unbind(o.parentTextureArray || o)
            }
            t.depthTexture && this.renderer.texture.unbind(t.depthTexture),
            e ? this.setViewport(e.x, e.y, e.width, e.height) : this.setViewport(0, 0, t.width, t.height)
        } else
            this.current && (this.current = null,
            n.bindFramebuffer(n.FRAMEBUFFER, null)),
            e ? this.setViewport(e.x, e.y, e.width, e.height) : this.setViewport(0, 0, this.renderer.width, this.renderer.height)
    }
    ,
    r.prototype.setViewport = function(t, e, n, s) {
        var a = this.viewport;
        (a.width !== n || a.height !== s || a.x !== t || a.y !== e) && (a.x = t,
        a.y = e,
        a.width = n,
        a.height = s,
        this.gl.viewport(t, e, n, s))
    }
    ,
    Object.defineProperty(r.prototype, "size", {
        get: function() {
            return this.current ? {
                x: 0,
                y: 0,
                width: this.current.width,
                height: this.current.height
            } : {
                x: 0,
                y: 0,
                width: this.renderer.width,
                height: this.renderer.height
            }
        },
        enumerable: !1,
        configurable: !0
    }),
    r.prototype.clear = function(t, e, n, s, a) {
        a === void 0 && (a = Fe.COLOR | Fe.DEPTH);
        var o = this.gl;
        o.clearColor(t, e, n, s),
        o.clear(a)
    }
    ,
    r.prototype.initFramebuffer = function(t) {
        var e = this.gl
          , n = new mn(e.createFramebuffer());
        return n.multisample = this.detectSamples(t.multisample),
        t.glFramebuffers[this.CONTEXT_UID] = n,
        this.managedFramebuffers.push(t),
        t.disposeRunner.add(this),
        n
    }
    ,
    r.prototype.resizeFramebuffer = function(t) {
        var e = this.gl
          , n = t.glFramebuffers[this.CONTEXT_UID];
        n.stencil && (e.bindRenderbuffer(e.RENDERBUFFER, n.stencil),
        e.renderbufferStorage(e.RENDERBUFFER, e.DEPTH_STENCIL, t.width, t.height));
        for (var s = t.colorTextures, a = 0; a < s.length; a++)
            this.renderer.texture.bind(s[a], 0);
        t.depthTexture && this.renderer.texture.bind(t.depthTexture, 0)
    }
    ,
    r.prototype.updateFramebuffer = function(t) {
        var e = this.gl
          , n = t.glFramebuffers[this.CONTEXT_UID]
          , s = t.colorTextures
          , a = s.length;
        e.drawBuffers || (a = Math.min(a, 1)),
        n.multisample > 1 && (n.msaaBuffer = e.createRenderbuffer(),
        e.bindRenderbuffer(e.RENDERBUFFER, n.msaaBuffer),
        e.renderbufferStorageMultisample(e.RENDERBUFFER, n.multisample, e.RGBA8, t.width, t.height),
        e.framebufferRenderbuffer(e.FRAMEBUFFER, e.COLOR_ATTACHMENT0, e.RENDERBUFFER, n.msaaBuffer));
        for (var o = [], h = 0; h < a; h++)
            if (!(h === 0 && n.multisample > 1)) {
                var u = t.colorTextures[h]
                  , l = u.parentTextureArray || u;
                this.renderer.texture.bind(l, 0),
                e.framebufferTexture2D(e.FRAMEBUFFER, e.COLOR_ATTACHMENT0 + h, u.target, l._glTextures[this.CONTEXT_UID].texture, 0),
                o.push(e.COLOR_ATTACHMENT0 + h)
            }
        if (o.length > 1 && e.drawBuffers(o),
        t.depthTexture) {
            var f = this.writeDepthTexture;
            if (f) {
                var c = t.depthTexture;
                this.renderer.texture.bind(c, 0),
                e.framebufferTexture2D(e.FRAMEBUFFER, e.DEPTH_ATTACHMENT, e.TEXTURE_2D, c._glTextures[this.CONTEXT_UID].texture, 0)
            }
        }
        !n.stencil && (t.stencil || t.depth) && (n.stencil = e.createRenderbuffer(),
        e.bindRenderbuffer(e.RENDERBUFFER, n.stencil),
        e.renderbufferStorage(e.RENDERBUFFER, e.DEPTH_STENCIL, t.width, t.height),
        t.depthTexture || e.framebufferRenderbuffer(e.FRAMEBUFFER, e.DEPTH_STENCIL_ATTACHMENT, e.RENDERBUFFER, n.stencil))
    }
    ,
    r.prototype.detectSamples = function(t) {
        var e = this.msaaSamples
          , n = Qt.NONE;
        if (t <= 1 || e === null)
            return n;
        for (var s = 0; s < e.length; s++)
            if (e[s] <= t) {
                n = e[s];
                break
            }
        return n === 1 && (n = Qt.NONE),
        n
    }
    ,
    r.prototype.blit = function(t, e, n) {
        var s = this
          , a = s.current
          , o = s.renderer
          , h = s.gl
          , u = s.CONTEXT_UID;
        if (o.context.webGLVersion === 2 && !!a) {
            var l = a.glFramebuffers[u];
            if (!!l) {
                if (!t) {
                    if (l.multisample <= 1)
                        return;
                    l.blitFramebuffer || (l.blitFramebuffer = new hr(a.width,a.height),
                    l.blitFramebuffer.addColorTexture(0, a.colorTextures[0])),
                    t = l.blitFramebuffer,
                    t.width = a.width,
                    t.height = a.height
                }
                e || (e = Tl,
                e.width = a.width,
                e.height = a.height),
                n || (n = e);
                var f = e.width === n.width && e.height === n.height;
                this.bind(t),
                h.bindFramebuffer(h.READ_FRAMEBUFFER, l.framebuffer),
                h.blitFramebuffer(e.x, e.y, e.width, e.height, n.x, n.y, n.width, n.height, h.COLOR_BUFFER_BIT, f ? h.NEAREST : h.LINEAR)
            }
        }
    }
    ,
    r.prototype.disposeFramebuffer = function(t, e) {
        var n = t.glFramebuffers[this.CONTEXT_UID]
          , s = this.gl;
        if (!!n) {
            delete t.glFramebuffers[this.CONTEXT_UID];
            var a = this.managedFramebuffers.indexOf(t);
            a >= 0 && this.managedFramebuffers.splice(a, 1),
            t.disposeRunner.remove(this),
            e || (s.deleteFramebuffer(n.framebuffer),
            n.stencil && s.deleteRenderbuffer(n.stencil))
        }
    }
    ,
    r.prototype.disposeAll = function(t) {
        var e = this.managedFramebuffers;
        this.managedFramebuffers = [];
        for (var n = 0; n < e.length; n++)
            this.disposeFramebuffer(e[n], t)
    }
    ,
    r.prototype.forceStencil = function() {
        var t = this.current;
        if (!!t) {
            var e = t.glFramebuffers[this.CONTEXT_UID];
            if (!(!e || e.stencil)) {
                t.enableStencil();
                var n = t.width
                  , s = t.height
                  , a = this.gl
                  , o = a.createRenderbuffer();
                a.bindRenderbuffer(a.RENDERBUFFER, o),
                a.renderbufferStorage(a.RENDERBUFFER, a.DEPTH_STENCIL, n, s),
                e.stencil = o,
                a.framebufferRenderbuffer(a.FRAMEBUFFER, a.DEPTH_STENCIL_ATTACHMENT, a.RENDERBUFFER, o)
            }
        }
    }
    ,
    r.prototype.reset = function() {
        this.current = this.unknownFramebuffer,
        this.viewport = new j
    }
    ,
    r
}(ut)
  , wl = function() {
    function i(r) {
        this.buffer = r || null,
        this.updateID = -1,
        this.byteLength = -1,
        this.refCount = 0
    }
    return i
}()
  , yn = {
    5126: 4,
    5123: 2,
    5121: 1
}
  , eo = function(i) {
    k(r, i);
    function r(t) {
        var e = i.call(this, t) || this;
        return e._activeGeometry = null,
        e._activeVao = null,
        e.hasVao = !0,
        e.hasInstance = !0,
        e.canUseUInt32ElementIndex = !1,
        e.managedGeometries = {},
        e.managedBuffers = {},
        e
    }
    return r.prototype.contextChange = function() {
        this.disposeAll(!0);
        var t = this.gl = this.renderer.gl
          , e = this.renderer.context;
        if (this.CONTEXT_UID = this.renderer.CONTEXT_UID,
        e.webGLVersion !== 2) {
            var n = this.renderer.context.extensions.vertexArrayObject;
            R.PREFER_ENV === Tt.WEBGL_LEGACY && (n = null),
            n ? (t.createVertexArray = function() {
                return n.createVertexArrayOES()
            }
            ,
            t.bindVertexArray = function(a) {
                return n.bindVertexArrayOES(a)
            }
            ,
            t.deleteVertexArray = function(a) {
                return n.deleteVertexArrayOES(a)
            }
            ) : (this.hasVao = !1,
            t.createVertexArray = function() {
                return null
            }
            ,
            t.bindVertexArray = function() {
                return null
            }
            ,
            t.deleteVertexArray = function() {
                return null
            }
            )
        }
        if (e.webGLVersion !== 2) {
            var s = t.getExtension("ANGLE_instanced_arrays");
            s ? (t.vertexAttribDivisor = function(a, o) {
                return s.vertexAttribDivisorANGLE(a, o)
            }
            ,
            t.drawElementsInstanced = function(a, o, h, u, l) {
                return s.drawElementsInstancedANGLE(a, o, h, u, l)
            }
            ,
            t.drawArraysInstanced = function(a, o, h, u) {
                return s.drawArraysInstancedANGLE(a, o, h, u)
            }
            ) : this.hasInstance = !1
        }
        this.canUseUInt32ElementIndex = e.webGLVersion === 2 || !!e.extensions.uint32ElementIndex
    }
    ,
    r.prototype.bind = function(t, e) {
        e = e || this.renderer.shader.shader;
        var n = this.gl
          , s = t.glVertexArrayObjects[this.CONTEXT_UID]
          , a = !1;
        s || (this.managedGeometries[t.id] = t,
        t.disposeRunner.add(this),
        t.glVertexArrayObjects[this.CONTEXT_UID] = s = {},
        a = !0);
        var o = s[e.program.id] || this.initGeometryVao(t, e.program, a);
        this._activeGeometry = t,
        this._activeVao !== o && (this._activeVao = o,
        this.hasVao ? n.bindVertexArray(o) : this.activateVao(t, e.program)),
        this.updateBuffers()
    }
    ,
    r.prototype.reset = function() {
        this.unbind()
    }
    ,
    r.prototype.updateBuffers = function() {
        for (var t = this._activeGeometry, e = this.gl, n = 0; n < t.buffers.length; n++) {
            var s = t.buffers[n]
              , a = s._glBuffers[this.CONTEXT_UID];
            if (s._updateID !== a.updateID) {
                a.updateID = s._updateID;
                var o = s.index ? e.ELEMENT_ARRAY_BUFFER : e.ARRAY_BUFFER;
                if (e.bindBuffer(o, a.buffer),
                this._boundBuffer = a,
                a.byteLength >= s.data.byteLength)
                    e.bufferSubData(o, 0, s.data);
                else {
                    var h = s.static ? e.STATIC_DRAW : e.DYNAMIC_DRAW;
                    a.byteLength = s.data.byteLength,
                    e.bufferData(o, s.data, h)
                }
            }
        }
    }
    ,
    r.prototype.checkCompatibility = function(t, e) {
        var n = t.attributes
          , s = e.attributeData;
        for (var a in s)
            if (!n[a])
                throw new Error('shader and geometry incompatible, geometry missing the "' + a + '" attribute')
    }
    ,
    r.prototype.getSignature = function(t, e) {
        var n = t.attributes
          , s = e.attributeData
          , a = ["g", t.id];
        for (var o in n)
            s[o] && a.push(o);
        return a.join("-")
    }
    ,
    r.prototype.initGeometryVao = function(t, e, n) {
        n === void 0 && (n = !0),
        this.checkCompatibility(t, e);
        var s = this.gl
          , a = this.CONTEXT_UID
          , o = this.getSignature(t, e)
          , h = t.glVertexArrayObjects[this.CONTEXT_UID]
          , u = h[o];
        if (u)
            return h[e.id] = u,
            u;
        var l = t.buffers
          , f = t.attributes
          , c = {}
          , d = {};
        for (var p in l)
            c[p] = 0,
            d[p] = 0;
        for (var p in f)
            !f[p].size && e.attributeData[p] ? f[p].size = e.attributeData[p].size : f[p].size || console.warn("PIXI Geometry attribute '" + p + "' size cannot be determined (likely the bound shader does not have the attribute)"),
            c[f[p].buffer] += f[p].size * yn[f[p].type];
        for (var p in f) {
            var v = f[p]
              , m = v.size;
            v.stride === void 0 && (c[v.buffer] === m * yn[v.type] ? v.stride = 0 : v.stride = c[v.buffer]),
            v.start === void 0 && (v.start = d[v.buffer],
            d[v.buffer] += m * yn[v.type])
        }
        u = s.createVertexArray(),
        s.bindVertexArray(u);
        for (var g = 0; g < l.length; g++) {
            var w = l[g];
            w._glBuffers[a] || (w._glBuffers[a] = new wl(s.createBuffer()),
            this.managedBuffers[w.id] = w,
            w.disposeRunner.add(this)),
            n && w._glBuffers[a].refCount++
        }
        return this.activateVao(t, e),
        this._activeVao = u,
        h[e.id] = u,
        h[o] = u,
        u
    }
    ,
    r.prototype.disposeBuffer = function(t, e) {
        if (!!this.managedBuffers[t.id]) {
            delete this.managedBuffers[t.id];
            var n = t._glBuffers[this.CONTEXT_UID]
              , s = this.gl;
            t.disposeRunner.remove(this),
            !!n && (e || s.deleteBuffer(n.buffer),
            delete t._glBuffers[this.CONTEXT_UID])
        }
    }
    ,
    r.prototype.disposeGeometry = function(t, e) {
        if (!!this.managedGeometries[t.id]) {
            delete this.managedGeometries[t.id];
            var n = t.glVertexArrayObjects[this.CONTEXT_UID]
              , s = this.gl
              , a = t.buffers;
            if (t.disposeRunner.remove(this),
            !!n) {
                for (var o = 0; o < a.length; o++) {
                    var h = a[o]._glBuffers[this.CONTEXT_UID];
                    h.refCount--,
                    h.refCount === 0 && !e && this.disposeBuffer(a[o], e)
                }
                if (!e) {
                    for (var u in n)
                        if (u[0] === "g") {
                            var l = n[u];
                            this._activeVao === l && this.unbind(),
                            s.deleteVertexArray(l)
                        }
                }
                delete t.glVertexArrayObjects[this.CONTEXT_UID]
            }
        }
    }
    ,
    r.prototype.disposeAll = function(t) {
        for (var e = Object.keys(this.managedGeometries), n = 0; n < e.length; n++)
            this.disposeGeometry(this.managedGeometries[e[n]], t);
        e = Object.keys(this.managedBuffers);
        for (var n = 0; n < e.length; n++)
            this.disposeBuffer(this.managedBuffers[e[n]], t)
    }
    ,
    r.prototype.activateVao = function(t, e) {
        var n = this.gl
          , s = this.CONTEXT_UID
          , a = t.buffers
          , o = t.attributes;
        t.indexBuffer && n.bindBuffer(n.ELEMENT_ARRAY_BUFFER, t.indexBuffer._glBuffers[s].buffer);
        var h = null;
        for (var u in o) {
            var l = o[u]
              , f = a[l.buffer]
              , c = f._glBuffers[s];
            if (e.attributeData[u]) {
                h !== c && (n.bindBuffer(n.ARRAY_BUFFER, c.buffer),
                h = c);
                var d = e.attributeData[u].location;
                if (n.enableVertexAttribArray(d),
                n.vertexAttribPointer(d, l.size, l.type || n.FLOAT, l.normalized, l.stride, l.start),
                l.instance)
                    if (this.hasInstance)
                        n.vertexAttribDivisor(d, 1);
                    else
                        throw new Error("geometry error, GPU Instancing is not supported on this device")
            }
        }
    }
    ,
    r.prototype.draw = function(t, e, n, s) {
        var a = this.gl
          , o = this._activeGeometry;
        if (o.indexBuffer) {
            var h = o.indexBuffer.data.BYTES_PER_ELEMENT
              , u = h === 2 ? a.UNSIGNED_SHORT : a.UNSIGNED_INT;
            h === 2 || h === 4 && this.canUseUInt32ElementIndex ? o.instanced ? a.drawElementsInstanced(t, e || o.indexBuffer.data.length, u, (n || 0) * h, s || 1) : a.drawElements(t, e || o.indexBuffer.data.length, u, (n || 0) * h) : console.warn("unsupported index buffer type: uint32")
        } else
            o.instanced ? a.drawArraysInstanced(t, n, e || o.getSize(), s || 1) : a.drawArrays(t, n, e || o.getSize());
        return this
    }
    ,
    r.prototype.unbind = function() {
        this.gl.bindVertexArray(null),
        this._activeVao = null,
        this._activeGeometry = null
    }
    ,
    r
}(ut)
  , gn = function() {
    function i(r) {
        r === void 0 && (r = null),
        this.type = ht.NONE,
        this.autoDetect = !0,
        this.maskObject = r || null,
        this.pooled = !1,
        this.isMaskData = !0,
        this._stencilCounter = 0,
        this._scissorCounter = 0,
        this._scissorRect = null,
        this._target = null
    }
    return i.prototype.reset = function() {
        this.pooled && (this.maskObject = null,
        this.type = ht.NONE,
        this.autoDetect = !0),
        this._target = null
    }
    ,
    i.prototype.copyCountersOrReset = function(r) {
        r ? (this._stencilCounter = r._stencilCounter,
        this._scissorCounter = r._scissorCounter,
        this._scissorRect = r._scissorRect) : (this._stencilCounter = 0,
        this._scissorCounter = 0,
        this._scissorRect = null)
    }
    ,
    i
}();
function ro(i, r, t) {
    var e = i.createShader(r);
    return i.shaderSource(e, t),
    i.compileShader(e),
    e
}
function io(i, r, t, e) {
    var n = ro(i, i.VERTEX_SHADER, r)
      , s = ro(i, i.FRAGMENT_SHADER, t)
      , a = i.createProgram();
    if (i.attachShader(a, n),
    i.attachShader(a, s),
    e)
        for (var o in e)
            i.bindAttribLocation(a, e[o], o);
    return i.linkProgram(a),
    i.getProgramParameter(a, i.LINK_STATUS) || (i.getShaderParameter(n, i.COMPILE_STATUS) || (console.warn(r),
    console.error(i.getShaderInfoLog(n))),
    i.getShaderParameter(s, i.COMPILE_STATUS) || (console.warn(t),
    console.error(i.getShaderInfoLog(s))),
    console.error("Pixi.js Error: Could not initialize shader."),
    console.error("gl.VALIDATE_STATUS", i.getProgramParameter(a, i.VALIDATE_STATUS)),
    console.error("gl.getError()", i.getError()),
    i.getProgramInfoLog(a) !== "" && console.warn("Pixi.js Warning: gl.getProgramInfoLog()", i.getProgramInfoLog(a)),
    i.deleteProgram(a),
    a = null),
    i.deleteShader(n),
    i.deleteShader(s),
    a
}
function _n(i) {
    for (var r = new Array(i), t = 0; t < r.length; t++)
        r[t] = !1;
    return r
}
function no(i, r) {
    switch (i) {
    case "float":
        return 0;
    case "vec2":
        return new Float32Array(2 * r);
    case "vec3":
        return new Float32Array(3 * r);
    case "vec4":
        return new Float32Array(4 * r);
    case "int":
    case "sampler2D":
    case "sampler2DArray":
        return 0;
    case "ivec2":
        return new Int32Array(2 * r);
    case "ivec3":
        return new Int32Array(3 * r);
    case "ivec4":
        return new Int32Array(4 * r);
    case "bool":
        return !1;
    case "bvec2":
        return _n(2 * r);
    case "bvec3":
        return _n(3 * r);
    case "bvec4":
        return _n(4 * r);
    case "mat2":
        return new Float32Array([1, 0, 0, 1]);
    case "mat3":
        return new Float32Array([1, 0, 0, 0, 1, 0, 0, 0, 1]);
    case "mat4":
        return new Float32Array([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1])
    }
    return null
}
var so = {}
  , ur = so;
function ao() {
    if (ur === so || ur && ur.isContextLost()) {
        var i = document.createElement("canvas")
          , r = void 0;
        R.PREFER_ENV >= Tt.WEBGL2 && (r = i.getContext("webgl2", {})),
        r || (r = i.getContext("webgl", {}) || i.getContext("experimental-webgl", {}),
        r ? r.getExtension("WEBGL_draw_buffers") : r = null),
        ur = r
    }
    return ur
}
var ti;
function Pl() {
    if (!ti) {
        ti = xt.MEDIUM;
        var i = ao();
        if (i && i.getShaderPrecisionFormat) {
            var r = i.getShaderPrecisionFormat(i.FRAGMENT_SHADER, i.HIGH_FLOAT);
            ti = r.precision ? xt.HIGH : xt.MEDIUM
        }
    }
    return ti
}
function oo(i, r, t) {
    if (i.substring(0, 9) !== "precision") {
        var e = r;
        return r === xt.HIGH && t !== xt.HIGH && (e = xt.MEDIUM),
        "precision " + e + ` float;
` + i
    } else if (t !== xt.HIGH && i.substring(0, 15) === "precision highp")
        return i.replace("precision highp", "precision mediump");
    return i
}
var Il = {
    float: 1,
    vec2: 2,
    vec3: 3,
    vec4: 4,
    int: 1,
    ivec2: 2,
    ivec3: 3,
    ivec4: 4,
    bool: 1,
    bvec2: 2,
    bvec3: 3,
    bvec4: 4,
    mat2: 4,
    mat3: 9,
    mat4: 16,
    sampler2D: 1
};
function Sl(i) {
    return Il[i]
}
var ei = null
  , ho = {
    FLOAT: "float",
    FLOAT_VEC2: "vec2",
    FLOAT_VEC3: "vec3",
    FLOAT_VEC4: "vec4",
    INT: "int",
    INT_VEC2: "ivec2",
    INT_VEC3: "ivec3",
    INT_VEC4: "ivec4",
    BOOL: "bool",
    BOOL_VEC2: "bvec2",
    BOOL_VEC3: "bvec3",
    BOOL_VEC4: "bvec4",
    FLOAT_MAT2: "mat2",
    FLOAT_MAT3: "mat3",
    FLOAT_MAT4: "mat4",
    SAMPLER_2D: "sampler2D",
    INT_SAMPLER_2D: "sampler2D",
    UNSIGNED_INT_SAMPLER_2D: "sampler2D",
    SAMPLER_CUBE: "samplerCube",
    INT_SAMPLER_CUBE: "samplerCube",
    UNSIGNED_INT_SAMPLER_CUBE: "samplerCube",
    SAMPLER_2D_ARRAY: "sampler2DArray",
    INT_SAMPLER_2D_ARRAY: "sampler2DArray",
    UNSIGNED_INT_SAMPLER_2D_ARRAY: "sampler2DArray"
};
function uo(i, r) {
    if (!ei) {
        var t = Object.keys(ho);
        ei = {};
        for (var e = 0; e < t.length; ++e) {
            var n = t[e];
            ei[i[n]] = ho[n]
        }
    }
    return ei[r]
}
var lr = [{
    test: function(i) {
        return i.type === "float" && i.size === 1
    },
    code: function(i) {
        return `
            if(uv["` + i + '"] !== ud["' + i + `"].value)
            {
                ud["` + i + '"].value = uv["' + i + `"]
                gl.uniform1f(ud["` + i + '"].location, uv["' + i + `"])
            }
            `
    }
}, {
    test: function(i) {
        return (i.type === "sampler2D" || i.type === "samplerCube" || i.type === "sampler2DArray") && i.size === 1 && !i.isArray
    },
    code: function(i) {
        return `t = syncData.textureCount++;

            renderer.texture.bind(uv["` + i + `"], t);

            if(ud["` + i + `"].value !== t)
            {
                ud["` + i + `"].value = t;
                gl.uniform1i(ud["` + i + `"].location, t);
; // eslint-disable-line max-len
            }`
    }
}, {
    test: function(i, r) {
        return i.type === "mat3" && i.size === 1 && r.a !== void 0
    },
    code: function(i) {
        return `
            gl.uniformMatrix3fv(ud["` + i + '"].location, false, uv["' + i + `"].toArray(true));
            `
    }
}, {
    test: function(i, r) {
        return i.type === "vec2" && i.size === 1 && r.x !== void 0
    },
    code: function(i) {
        return `
                cv = ud["` + i + `"].value;
                v = uv["` + i + `"];

                if(cv[0] !== v.x || cv[1] !== v.y)
                {
                    cv[0] = v.x;
                    cv[1] = v.y;
                    gl.uniform2f(ud["` + i + `"].location, v.x, v.y);
                }`
    }
}, {
    test: function(i) {
        return i.type === "vec2" && i.size === 1
    },
    code: function(i) {
        return `
                cv = ud["` + i + `"].value;
                v = uv["` + i + `"];

                if(cv[0] !== v[0] || cv[1] !== v[1])
                {
                    cv[0] = v[0];
                    cv[1] = v[1];
                    gl.uniform2f(ud["` + i + `"].location, v[0], v[1]);
                }
            `
    }
}, {
    test: function(i, r) {
        return i.type === "vec4" && i.size === 1 && r.width !== void 0
    },
    code: function(i) {
        return `
                cv = ud["` + i + `"].value;
                v = uv["` + i + `"];

                if(cv[0] !== v.x || cv[1] !== v.y || cv[2] !== v.width || cv[3] !== v.height)
                {
                    cv[0] = v.x;
                    cv[1] = v.y;
                    cv[2] = v.width;
                    cv[3] = v.height;
                    gl.uniform4f(ud["` + i + `"].location, v.x, v.y, v.width, v.height)
                }`
    }
}, {
    test: function(i) {
        return i.type === "vec4" && i.size === 1
    },
    code: function(i) {
        return `
                cv = ud["` + i + `"].value;
                v = uv["` + i + `"];

                if(cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2] || cv[3] !== v[3])
                {
                    cv[0] = v[0];
                    cv[1] = v[1];
                    cv[2] = v[2];
                    cv[3] = v[3];

                    gl.uniform4f(ud["` + i + `"].location, v[0], v[1], v[2], v[3])
                }`
    }
}]
  , Cl = {
    float: `
    if(cv !== v)
    {
        cv.v = v;
        gl.uniform1f(location, v)
    }`,
    vec2: `
    if(cv[0] !== v[0] || cv[1] !== v[1])
    {
        cv[0] = v[0];
        cv[1] = v[1];
        gl.uniform2f(location, v[0], v[1])
    }`,
    vec3: `
    if(cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2])
    {
        cv[0] = v[0];
        cv[1] = v[1];
        cv[2] = v[2];

        gl.uniform3f(location, v[0], v[1], v[2])
    }`,
    vec4: "gl.uniform4f(location, v[0], v[1], v[2], v[3])",
    int: "gl.uniform1i(location, v)",
    ivec2: "gl.uniform2i(location, v[0], v[1])",
    ivec3: "gl.uniform3i(location, v[0], v[1], v[2])",
    ivec4: "gl.uniform4i(location, v[0], v[1], v[2], v[3])",
    bool: "gl.uniform1i(location, v)",
    bvec2: "gl.uniform2i(location, v[0], v[1])",
    bvec3: "gl.uniform3i(location, v[0], v[1], v[2])",
    bvec4: "gl.uniform4i(location, v[0], v[1], v[2], v[3])",
    mat2: "gl.uniformMatrix2fv(location, false, v)",
    mat3: "gl.uniformMatrix3fv(location, false, v)",
    mat4: "gl.uniformMatrix4fv(location, false, v)",
    sampler2D: "gl.uniform1i(location, v)",
    samplerCube: "gl.uniform1i(location, v)",
    sampler2DArray: "gl.uniform1i(location, v)"
}
  , El = {
    float: "gl.uniform1fv(location, v)",
    vec2: "gl.uniform2fv(location, v)",
    vec3: "gl.uniform3fv(location, v)",
    vec4: "gl.uniform4fv(location, v)",
    mat4: "gl.uniformMatrix4fv(location, false, v)",
    mat3: "gl.uniformMatrix3fv(location, false, v)",
    mat2: "gl.uniformMatrix2fv(location, false, v)",
    int: "gl.uniform1iv(location, v)",
    ivec2: "gl.uniform2iv(location, v)",
    ivec3: "gl.uniform3iv(location, v)",
    ivec4: "gl.uniform4iv(location, v)",
    bool: "gl.uniform1iv(location, v)",
    bvec2: "gl.uniform2iv(location, v)",
    bvec3: "gl.uniform3iv(location, v)",
    bvec4: "gl.uniform4iv(location, v)",
    sampler2D: "gl.uniform1iv(location, v)",
    samplerCube: "gl.uniform1iv(location, v)",
    sampler2DArray: "gl.uniform1iv(location, v)"
};
function Al(i, r) {
    var t = [`
        var v = null;
        var cv = null
        var t = 0;
        var gl = renderer.gl
    `];
    for (var e in i.uniforms) {
        var n = r[e];
        if (!n) {
            i.uniforms[e].group && t.push(`
                    renderer.shader.syncUniformGroup(uv["` + e + `"], syncData);
                `);
            continue
        }
        for (var s = i.uniforms[e], a = !1, o = 0; o < lr.length; o++)
            if (lr[o].test(n, s)) {
                t.push(lr[o].code(e, s)),
                a = !0;
                break
            }
        if (!a) {
            var h = n.size === 1 ? Cl : El
              , u = h[n.type].replace("location", 'ud["' + e + '"].location');
            t.push(`
            cv = ud["` + e + `"].value;
            v = uv["` + e + `"];
            ` + u + ";")
        }
    }
    return new Function("ud","uv","renderer","syncData",t.join(`
`))
}
var Ol = ["precision mediump float;", "void main(void){", "float test = 0.1;", "%forloop%", "gl_FragColor = vec4(0.0);", "}"].join(`
`);
function Rl(i) {
    for (var r = "", t = 0; t < i; ++t)
        t > 0 && (r += `
else `),
        t < i - 1 && (r += "if(test == " + t + ".0){}");
    return r
}
function xn(i, r) {
    if (i === 0)
        throw new Error("Invalid value of `0` passed to `checkMaxIfStatementsInShader`");
    for (var t = r.createShader(r.FRAGMENT_SHADER); ; ) {
        var e = Ol.replace(/%forloop%/gi, Rl(i));
        if (r.shaderSource(t, e),
        r.compileShader(t),
        !r.getShaderParameter(t, r.COMPILE_STATUS))
            i = i / 2 | 0;
        else
            break
    }
    return i
}
var fr;
function Ml() {
    if (typeof fr == "boolean")
        return fr;
    try {
        var i = new Function("param1","param2","param3","return param1[param2] === param3;");
        fr = i({
            a: "b"
        }, "a", "b") === !0
    } catch (r) {
        fr = !1
    }
    return fr
}
var Fl = `varying vec2 vTextureCoord;

uniform sampler2D uSampler;

void main(void){
   gl_FragColor *= texture2D(uSampler, vTextureCoord);
}`
  , Ll = `attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void){
   gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
   vTextureCoord = aTextureCoord;
}
`
  , Nl = 0
  , ri = {}
  , ke = function() {
    function i(r, t, e) {
        e === void 0 && (e = "pixi-shader"),
        this.id = Nl++,
        this.vertexSrc = r || i.defaultVertexSrc,
        this.fragmentSrc = t || i.defaultFragmentSrc,
        this.vertexSrc = this.vertexSrc.trim(),
        this.fragmentSrc = this.fragmentSrc.trim(),
        this.vertexSrc.substring(0, 8) !== "#version" && (e = e.replace(/\s+/g, "-"),
        ri[e] ? (ri[e]++,
        e += "-" + ri[e]) : ri[e] = 1,
        this.vertexSrc = "#define SHADER_NAME " + e + `
` + this.vertexSrc,
        this.fragmentSrc = "#define SHADER_NAME " + e + `
` + this.fragmentSrc,
        this.vertexSrc = oo(this.vertexSrc, R.PRECISION_VERTEX, xt.HIGH),
        this.fragmentSrc = oo(this.fragmentSrc, R.PRECISION_FRAGMENT, Pl())),
        this.extractData(this.vertexSrc, this.fragmentSrc),
        this.glPrograms = {},
        this.syncUniforms = null
    }
    return i.prototype.extractData = function(r, t) {
        var e = ao();
        if (e) {
            var n = io(e, r, t);
            this.attributeData = this.getAttributeData(n, e),
            this.uniformData = this.getUniformData(n, e),
            e.deleteProgram(n)
        } else
            this.uniformData = {},
            this.attributeData = {}
    }
    ,
    i.prototype.getAttributeData = function(r, t) {
        for (var e = {}, n = [], s = t.getProgramParameter(r, t.ACTIVE_ATTRIBUTES), a = 0; a < s; a++) {
            var o = t.getActiveAttrib(r, a)
              , h = uo(t, o.type)
              , u = {
                type: h,
                name: o.name,
                size: Sl(h),
                location: 0
            };
            e[o.name] = u,
            n.push(u)
        }
        n.sort(function(l, f) {
            return l.name > f.name ? 1 : -1
        });
        for (var a = 0; a < n.length; a++)
            n[a].location = a;
        return e
    }
    ,
    i.prototype.getUniformData = function(r, t) {
        for (var e = {}, n = t.getProgramParameter(r, t.ACTIVE_UNIFORMS), s = 0; s < n; s++) {
            var a = t.getActiveUniform(r, s)
              , o = a.name.replace(/\[.*?\]$/, "")
              , h = a.name.match(/\[.*?\]$/)
              , u = uo(t, a.type);
            e[o] = {
                type: u,
                size: a.size,
                isArray: h,
                value: no(u, a.size)
            }
        }
        return e
    }
    ,
    Object.defineProperty(i, "defaultVertexSrc", {
        get: function() {
            return Ll
        },
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(i, "defaultFragmentSrc", {
        get: function() {
            return Fl
        },
        enumerable: !1,
        configurable: !0
    }),
    i.from = function(r, t, e) {
        var n = r + t
          , s = zi[n];
        return s || (zi[n] = s = new i(r,t,e)),
        s
    }
    ,
    i
}()
  , jt = function() {
    function i(r, t) {
        this.program = r,
        t ? t instanceof Gt ? this.uniformGroup = t : this.uniformGroup = new Gt(t) : this.uniformGroup = new Gt({});
        for (var e in r.uniformData)
            this.uniformGroup.uniforms[e]instanceof Array && (this.uniformGroup.uniforms[e] = new Float32Array(this.uniformGroup.uniforms[e]))
    }
    return i.prototype.checkUniformExists = function(r, t) {
        if (t.uniforms[r])
            return !0;
        for (var e in t.uniforms) {
            var n = t.uniforms[e];
            if (n.group && this.checkUniformExists(r, n))
                return !0
        }
        return !1
    }
    ,
    i.prototype.destroy = function() {
        this.uniformGroup = null
    }
    ,
    Object.defineProperty(i.prototype, "uniforms", {
        get: function() {
            return this.uniformGroup.uniforms
        },
        enumerable: !1,
        configurable: !0
    }),
    i.from = function(r, t, e) {
        var n = ke.from(r, t);
        return new i(n,e)
    }
    ,
    i
}()
  , bn = 0
  , Tn = 1
  , wn = 2
  , Pn = 3
  , In = 4
  , Ht = function() {
    function i() {
        this.data = 0,
        this.blendMode = M.NORMAL,
        this.polygonOffset = 0,
        this.blend = !0
    }
    return Object.defineProperty(i.prototype, "blend", {
        get: function() {
            return !!(this.data & 1 << bn)
        },
        set: function(r) {
            !!(this.data & 1 << bn) !== r && (this.data ^= 1 << bn)
        },
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(i.prototype, "offsets", {
        get: function() {
            return !!(this.data & 1 << Tn)
        },
        set: function(r) {
            !!(this.data & 1 << Tn) !== r && (this.data ^= 1 << Tn)
        },
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(i.prototype, "culling", {
        get: function() {
            return !!(this.data & 1 << wn)
        },
        set: function(r) {
            !!(this.data & 1 << wn) !== r && (this.data ^= 1 << wn)
        },
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(i.prototype, "depthTest", {
        get: function() {
            return !!(this.data & 1 << Pn)
        },
        set: function(r) {
            !!(this.data & 1 << Pn) !== r && (this.data ^= 1 << Pn)
        },
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(i.prototype, "clockwiseFrontFace", {
        get: function() {
            return !!(this.data & 1 << In)
        },
        set: function(r) {
            !!(this.data & 1 << In) !== r && (this.data ^= 1 << In)
        },
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(i.prototype, "blendMode", {
        get: function() {
            return this._blendMode
        },
        set: function(r) {
            this.blend = r !== M.NONE,
            this._blendMode = r
        },
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(i.prototype, "polygonOffset", {
        get: function() {
            return this._polygonOffset
        },
        set: function(r) {
            this.offsets = !!r,
            this._polygonOffset = r
        },
        enumerable: !1,
        configurable: !0
    }),
    i.for2d = function() {
        var r = new i;
        return r.depthTest = !1,
        r.blend = !0,
        r
    }
    ,
    i
}()
  , Dl = `attribute vec2 aVertexPosition;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

uniform vec4 inputSize;
uniform vec4 outputFrame;

vec4 filterVertexPosition( void )
{
    vec2 position = aVertexPosition * max(outputFrame.zw, vec2(0.)) + outputFrame.xy;

    return vec4((projectionMatrix * vec3(position, 1.0)).xy, 0.0, 1.0);
}

vec2 filterTextureCoord( void )
{
    return aVertexPosition * (outputFrame.zw * inputSize.zw);
}

void main(void)
{
    gl_Position = filterVertexPosition();
    vTextureCoord = filterTextureCoord();
}
`
  , Ul = `varying vec2 vTextureCoord;

uniform sampler2D uSampler;

void main(void){
   gl_FragColor = texture2D(uSampler, vTextureCoord);
}
`
  , Rt = function(i) {
    k(r, i);
    function r(t, e, n) {
        var s = this
          , a = ke.from(t || r.defaultVertexSrc, e || r.defaultFragmentSrc);
        return s = i.call(this, a, n) || this,
        s.padding = 0,
        s.resolution = R.FILTER_RESOLUTION,
        s.enabled = !0,
        s.autoFit = !0,
        s.legacy = !!s.program.attributeData.aTextureCoord,
        s.state = new Ht,
        s
    }
    return r.prototype.apply = function(t, e, n, s, a) {
        t.applyFilter(this, e, n, s)
    }
    ,
    Object.defineProperty(r.prototype, "blendMode", {
        get: function() {
            return this.state.blendMode
        },
        set: function(t) {
            this.state.blendMode = t
        },
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(r, "defaultVertexSrc", {
        get: function() {
            return Dl
        },
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(r, "defaultFragmentSrc", {
        get: function() {
            return Ul
        },
        enumerable: !1,
        configurable: !0
    }),
    r
}(jt)
  , Bl = `attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;
uniform mat3 otherMatrix;

varying vec2 vMaskCoord;
varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);

    vTextureCoord = aTextureCoord;
    vMaskCoord = ( otherMatrix * vec3( aTextureCoord, 1.0)  ).xy;
}
`
  , kl = `varying vec2 vMaskCoord;
varying vec2 vTextureCoord;

uniform sampler2D uSampler;
uniform sampler2D mask;
uniform float alpha;
uniform float npmAlpha;
uniform vec4 maskClamp;

void main(void)
{
    float clip = step(3.5,
        step(maskClamp.x, vMaskCoord.x) +
        step(maskClamp.y, vMaskCoord.y) +
        step(vMaskCoord.x, maskClamp.z) +
        step(vMaskCoord.y, maskClamp.w));

    vec4 original = texture2D(uSampler, vTextureCoord);
    vec4 masky = texture2D(mask, vMaskCoord);
    float alphaMul = 1.0 - npmAlpha * (1.0 - masky.a);

    original *= (alphaMul * masky.r * alpha * clip);

    gl_FragColor = original;
}
`
  , lo = new rt
  , cr = function() {
    function i(r, t) {
        this._texture = r,
        this.mapCoord = new rt,
        this.uClampFrame = new Float32Array(4),
        this.uClampOffset = new Float32Array(2),
        this._textureID = -1,
        this._updateID = 0,
        this.clampOffset = 0,
        this.clampMargin = typeof t == "undefined" ? .5 : t,
        this.isSimple = !1
    }
    return Object.defineProperty(i.prototype, "texture", {
        get: function() {
            return this._texture
        },
        set: function(r) {
            this._texture = r,
            this._textureID = -1
        },
        enumerable: !1,
        configurable: !0
    }),
    i.prototype.multiplyUvs = function(r, t) {
        t === void 0 && (t = r);
        for (var e = this.mapCoord, n = 0; n < r.length; n += 2) {
            var s = r[n]
              , a = r[n + 1];
            t[n] = s * e.a + a * e.c + e.tx,
            t[n + 1] = s * e.b + a * e.d + e.ty
        }
        return t
    }
    ,
    i.prototype.update = function(r) {
        var t = this._texture;
        if (!t || !t.valid || !r && this._textureID === t._updateID)
            return !1;
        this._textureID = t._updateID,
        this._updateID++;
        var e = t._uvs;
        this.mapCoord.set(e.x1 - e.x0, e.y1 - e.y0, e.x3 - e.x0, e.y3 - e.y0, e.x0, e.y0);
        var n = t.orig
          , s = t.trim;
        s && (lo.set(n.width / s.width, 0, 0, n.height / s.height, -s.x / s.width, -s.y / s.height),
        this.mapCoord.append(lo));
        var a = t.baseTexture
          , o = this.uClampFrame
          , h = this.clampMargin / a.resolution
          , u = this.clampOffset;
        return o[0] = (t._frame.x + h + u) / a.width,
        o[1] = (t._frame.y + h + u) / a.height,
        o[2] = (t._frame.x + t._frame.width - h + u) / a.width,
        o[3] = (t._frame.y + t._frame.height - h + u) / a.height,
        this.uClampOffset[0] = u / a.realWidth,
        this.uClampOffset[1] = u / a.realHeight,
        this.isSimple = t._frame.width === a.width && t._frame.height === a.height && t.rotate === 0,
        !0
    }
    ,
    i
}()
  , Sn = function(i) {
    k(r, i);
    function r(t) {
        var e = this
          , n = new rt;
        return e = i.call(this, Bl, kl) || this,
        t.renderable = !1,
        e.maskSprite = t,
        e.maskMatrix = n,
        e
    }
    return r.prototype.apply = function(t, e, n, s) {
        var a = this.maskSprite
          , o = a._texture;
        !o.valid || (o.uvMatrix || (o.uvMatrix = new cr(o,0)),
        o.uvMatrix.update(),
        this.uniforms.npmAlpha = o.baseTexture.alphaMode ? 0 : 1,
        this.uniforms.mask = o,
        this.uniforms.otherMatrix = t.calculateSpriteMatrix(this.maskMatrix, a).prepend(o.uvMatrix.mapCoord),
        this.uniforms.alpha = a.worldAlpha,
        this.uniforms.maskClamp = o.uvMatrix.uClampFrame,
        t.applyFilter(this, e, n, s))
    }
    ,
    r
}(Rt)
  , fo = function(i) {
    k(r, i);
    function r(t) {
        var e = i.call(this, t) || this;
        return e.enableScissor = !1,
        e.alphaMaskPool = [],
        e.maskDataPool = [],
        e.maskStack = [],
        e.alphaMaskIndex = 0,
        e
    }
    return r.prototype.setMaskStack = function(t) {
        this.maskStack = t,
        this.renderer.scissor.setMaskStack(t),
        this.renderer.stencil.setMaskStack(t)
    }
    ,
    r.prototype.push = function(t, e) {
        var n = e;
        if (!n.isMaskData) {
            var s = this.maskDataPool.pop() || new gn;
            s.pooled = !0,
            s.maskObject = e,
            n = s
        }
        switch (n.autoDetect && this.detect(n),
        n.copyCountersOrReset(this.maskStack[this.maskStack.length - 1]),
        n._target = t,
        n.type) {
        case ht.SCISSOR:
            this.maskStack.push(n),
            this.renderer.scissor.push(n);
            break;
        case ht.STENCIL:
            this.maskStack.push(n),
            this.renderer.stencil.push(n);
            break;
        case ht.SPRITE:
            n.copyCountersOrReset(null),
            this.pushSpriteMask(n),
            this.maskStack.push(n);
            break
        }
    }
    ,
    r.prototype.pop = function(t) {
        var e = this.maskStack.pop();
        if (!(!e || e._target !== t)) {
            switch (e.type) {
            case ht.SCISSOR:
                this.renderer.scissor.pop();
                break;
            case ht.STENCIL:
                this.renderer.stencil.pop(e.maskObject);
                break;
            case ht.SPRITE:
                this.popSpriteMask();
                break
            }
            e.reset(),
            e.pooled && this.maskDataPool.push(e)
        }
    }
    ,
    r.prototype.detect = function(t) {
        var e = t.maskObject;
        if (e.isSprite) {
            t.type = ht.SPRITE;
            return
        }
        if (t.type = ht.STENCIL,
        this.enableScissor && e.isFastRect && e.isFastRect()) {
            var n = e.worldTransform
              , s = Math.atan2(n.b, n.a)
              , a = Math.atan2(n.d, n.c);
            s = Math.round(s * (180 / Math.PI) * 100),
            a = Math.round(a * (180 / Math.PI) * 100) - s,
            s = (s % 9e3 + 9e3) % 9e3,
            a = (a % 18e3 + 18e3) % 18e3,
            s === 0 && a === 9e3 && (t.type = ht.SCISSOR)
        }
    }
    ,
    r.prototype.pushSpriteMask = function(t) {
        var e = t.maskObject
          , n = t._target
          , s = this.alphaMaskPool[this.alphaMaskIndex];
        s || (s = this.alphaMaskPool[this.alphaMaskIndex] = [new Sn(e)]),
        s[0].resolution = this.renderer.resolution,
        s[0].maskSprite = e;
        var a = n.filterArea;
        n.filterArea = e.getBounds(!0),
        this.renderer.filter.push(n, s),
        n.filterArea = a,
        this.alphaMaskIndex++
    }
    ,
    r.prototype.popSpriteMask = function() {
        this.renderer.filter.pop(),
        this.alphaMaskIndex--
    }
    ,
    r
}(ut)
  , co = function(i) {
    k(r, i);
    function r(t) {
        var e = i.call(this, t) || this;
        return e.maskStack = [],
        e.glConst = 0,
        e
    }
    return r.prototype.getStackLength = function() {
        return this.maskStack.length
    }
    ,
    r.prototype.setMaskStack = function(t) {
        var e = this.renderer.gl
          , n = this.getStackLength();
        this.maskStack = t;
        var s = this.getStackLength();
        s !== n && (s === 0 ? e.disable(this.glConst) : (e.enable(this.glConst),
        this._useCurrent()))
    }
    ,
    r.prototype._useCurrent = function() {}
    ,
    r.prototype.destroy = function() {
        i.prototype.destroy.call(this),
        this.maskStack = null
    }
    ,
    r
}(ut)
  , po = function(i) {
    k(r, i);
    function r(t) {
        var e = i.call(this, t) || this;
        return e.glConst = WebGLRenderingContext.SCISSOR_TEST,
        e
    }
    return r.prototype.getStackLength = function() {
        var t = this.maskStack[this.maskStack.length - 1];
        return t ? t._scissorCounter : 0
    }
    ,
    r.prototype.push = function(t) {
        var e = t.maskObject;
        e.renderable = !0;
        var n = t._scissorRect
          , s = e.getBounds(!0)
          , a = this.renderer.gl;
        e.renderable = !1,
        n ? s.fit(n) : a.enable(a.SCISSOR_TEST),
        t._scissorCounter++,
        t._scissorRect = s,
        this._useCurrent()
    }
    ,
    r.prototype.pop = function() {
        var t = this.renderer.gl;
        this.getStackLength() > 0 ? this._useCurrent() : t.disable(t.SCISSOR_TEST)
    }
    ,
    r.prototype._useCurrent = function() {
        var t = this.maskStack[this.maskStack.length - 1]._scissorRect
          , e = this.renderer.renderTexture.current
          , n = this.renderer.projection
          , s = n.transform
          , a = n.sourceFrame
          , o = n.destinationFrame
          , h = e ? e.resolution : this.renderer.resolution
          , u = (t.x - a.x) * h + o.x
          , l = (t.y - a.y) * h + o.y
          , f = t.width * h
          , c = t.height * h;
        s && (u += s.tx * h,
        l += s.ty * h),
        e || (l = this.renderer.height - c - l),
        this.renderer.gl.scissor(u, l, f, c)
    }
    ,
    r
}(co)
  , vo = function(i) {
    k(r, i);
    function r(t) {
        var e = i.call(this, t) || this;
        return e.glConst = WebGLRenderingContext.STENCIL_TEST,
        e
    }
    return r.prototype.getStackLength = function() {
        var t = this.maskStack[this.maskStack.length - 1];
        return t ? t._stencilCounter : 0
    }
    ,
    r.prototype.push = function(t) {
        var e = t.maskObject
          , n = this.renderer.gl
          , s = t._stencilCounter;
        s === 0 && (this.renderer.framebuffer.forceStencil(),
        n.enable(n.STENCIL_TEST)),
        t._stencilCounter++,
        n.colorMask(!1, !1, !1, !1),
        n.stencilFunc(n.EQUAL, s, this._getBitwiseMask()),
        n.stencilOp(n.KEEP, n.KEEP, n.INCR),
        e.renderable = !0,
        e.render(this.renderer),
        this.renderer.batch.flush(),
        e.renderable = !1,
        this._useCurrent()
    }
    ,
    r.prototype.pop = function(t) {
        var e = this.renderer.gl;
        this.getStackLength() === 0 ? (e.disable(e.STENCIL_TEST),
        e.clear(e.STENCIL_BUFFER_BIT),
        e.clearStencil(0)) : (e.colorMask(!1, !1, !1, !1),
        e.stencilOp(e.KEEP, e.KEEP, e.DECR),
        t.renderable = !0,
        t.render(this.renderer),
        this.renderer.batch.flush(),
        t.renderable = !1,
        this._useCurrent())
    }
    ,
    r.prototype._useCurrent = function() {
        var t = this.renderer.gl;
        t.colorMask(!0, !0, !0, !0),
        t.stencilFunc(t.EQUAL, this.getStackLength(), this._getBitwiseMask()),
        t.stencilOp(t.KEEP, t.KEEP, t.KEEP)
    }
    ,
    r.prototype._getBitwiseMask = function() {
        return (1 << this.getStackLength()) - 1
    }
    ,
    r
}(co)
  , mo = function(i) {
    k(r, i);
    function r(t) {
        var e = i.call(this, t) || this;
        return e.destinationFrame = null,
        e.sourceFrame = null,
        e.defaultFrame = null,
        e.projectionMatrix = new rt,
        e.transform = null,
        e
    }
    return r.prototype.update = function(t, e, n, s) {
        this.destinationFrame = t || this.destinationFrame || this.defaultFrame,
        this.sourceFrame = e || this.sourceFrame || t,
        this.calculateProjection(this.destinationFrame, this.sourceFrame, n, s),
        this.transform && this.projectionMatrix.append(this.transform);
        var a = this.renderer;
        a.globalUniforms.uniforms.projectionMatrix = this.projectionMatrix,
        a.globalUniforms.update(),
        a.shader.shader && a.shader.syncUniformGroup(a.shader.shader.uniforms.globals)
    }
    ,
    r.prototype.calculateProjection = function(t, e, n, s) {
        var a = this.projectionMatrix
          , o = s ? -1 : 1;
        a.identity(),
        a.a = 1 / e.width * 2,
        a.d = o * (1 / e.height * 2),
        a.tx = -1 - e.x * a.a,
        a.ty = -o - e.y * a.d
    }
    ,
    r.prototype.setTransform = function(t) {}
    ,
    r
}(ut)
  , xe = new j
  , dr = new j
  , pr = new j
  , yo = function(i) {
    k(r, i);
    function r(t) {
        var e = i.call(this, t) || this;
        return e.clearColor = t._backgroundColorRgba,
        e.defaultMaskStack = [],
        e.current = null,
        e.sourceFrame = new j,
        e.destinationFrame = new j,
        e
    }
    return r.prototype.bind = function(t, e, n) {
        t === void 0 && (t = null);
        var s = this.renderer;
        this.current = t;
        var a, o, h;
        t ? (a = t.baseTexture,
        h = a.resolution,
        e || (xe.width = t.frame.width,
        xe.height = t.frame.height,
        e = xe),
        n || (dr.x = t.frame.x,
        dr.y = t.frame.y,
        dr.width = e.width,
        dr.height = e.height,
        n = dr),
        o = a.framebuffer) : (h = s.resolution,
        e || (xe.width = s.screen.width,
        xe.height = s.screen.height,
        e = xe),
        n || (n = xe,
        n.width = e.width,
        n.height = e.height)),
        pr.x = n.x * h,
        pr.y = n.y * h,
        pr.width = n.width * h,
        pr.height = n.height * h,
        this.renderer.framebuffer.bind(o, pr),
        this.renderer.projection.update(n, e, h, !o),
        t ? this.renderer.mask.setMaskStack(a.maskStack) : this.renderer.mask.setMaskStack(this.defaultMaskStack),
        this.sourceFrame.copyFrom(e),
        this.destinationFrame.copyFrom(n)
    }
    ,
    r.prototype.clear = function(t, e) {
        this.current ? t = t || this.current.baseTexture.clearColor : t = t || this.clearColor,
        this.renderer.framebuffer.clear(t[0], t[1], t[2], t[3], e)
    }
    ,
    r.prototype.resize = function() {
        this.bind(null)
    }
    ,
    r.prototype.reset = function() {
        this.bind(null)
    }
    ,
    r
}(ut)
  , go = function() {
    function i() {}
    return i
}()
  , Cn = function() {
    function i(r, t) {
        this.program = r,
        this.uniformData = t,
        this.uniformGroups = {}
    }
    return i.prototype.destroy = function() {
        this.uniformData = null,
        this.uniformGroups = null,
        this.program = null
    }
    ,
    i
}()
  , Xl = 0
  , _o = {
    textureCount: 0
}
  , xo = function(i) {
    k(r, i);
    function r(t) {
        var e = i.call(this, t) || this;
        return e.destroyed = !1,
        e.systemCheck(),
        e.gl = null,
        e.shader = null,
        e.program = null,
        e.cache = {},
        e.id = Xl++,
        e
    }
    return r.prototype.systemCheck = function() {
        if (!Ml())
            throw new Error("Current environment does not allow unsafe-eval, please use @pixi/unsafe-eval module to enable support.")
    }
    ,
    r.prototype.contextChange = function(t) {
        this.gl = t,
        this.reset()
    }
    ,
    r.prototype.bind = function(t, e) {
        t.uniforms.globals = this.renderer.globalUniforms;
        var n = t.program
          , s = n.glPrograms[this.renderer.CONTEXT_UID] || this.generateShader(t);
        return this.shader = t,
        this.program !== n && (this.program = n,
        this.gl.useProgram(s.program)),
        e || (_o.textureCount = 0,
        this.syncUniformGroup(t.uniformGroup, _o)),
        s
    }
    ,
    r.prototype.setUniforms = function(t) {
        var e = this.shader.program
          , n = e.glPrograms[this.renderer.CONTEXT_UID];
        e.syncUniforms(n.uniformData, t, this.renderer)
    }
    ,
    r.prototype.syncUniformGroup = function(t, e) {
        var n = this.getglProgram();
        (!t.static || t.dirtyId !== n.uniformGroups[t.id]) && (n.uniformGroups[t.id] = t.dirtyId,
        this.syncUniforms(t, n, e))
    }
    ,
    r.prototype.syncUniforms = function(t, e, n) {
        var s = t.syncUniforms[this.shader.program.id] || this.createSyncGroups(t);
        s(e.uniformData, t.uniforms, this.renderer, n)
    }
    ,
    r.prototype.createSyncGroups = function(t) {
        var e = this.getSignature(t, this.shader.program.uniformData);
        return this.cache[e] || (this.cache[e] = Al(t, this.shader.program.uniformData)),
        t.syncUniforms[this.shader.program.id] = this.cache[e],
        t.syncUniforms[this.shader.program.id]
    }
    ,
    r.prototype.getSignature = function(t, e) {
        var n = t.uniforms
          , s = [];
        for (var a in n)
            s.push(a),
            e[a] && s.push(e[a].type);
        return s.join("-")
    }
    ,
    r.prototype.getglProgram = function() {
        return this.shader ? this.shader.program.glPrograms[this.renderer.CONTEXT_UID] : null
    }
    ,
    r.prototype.generateShader = function(t) {
        var e = this.gl
          , n = t.program
          , s = {};
        for (var a in n.attributeData)
            s[a] = n.attributeData[a].location;
        var o = io(e, n.vertexSrc, n.fragmentSrc, s)
          , h = {};
        for (var a in n.uniformData) {
            var u = n.uniformData[a];
            h[a] = {
                location: e.getUniformLocation(o, a),
                value: no(u.type, u.size)
            }
        }
        var l = new Cn(o,h);
        return n.glPrograms[this.renderer.CONTEXT_UID] = l,
        l
    }
    ,
    r.prototype.reset = function() {
        this.program = null,
        this.shader = null
    }
    ,
    r.prototype.destroy = function() {
        this.destroyed = !0
    }
    ,
    r
}(ut);
function Gl(i, r) {
    return r === void 0 && (r = []),
    r[M.NORMAL] = [i.ONE, i.ONE_MINUS_SRC_ALPHA],
    r[M.ADD] = [i.ONE, i.ONE],
    r[M.MULTIPLY] = [i.DST_COLOR, i.ONE_MINUS_SRC_ALPHA, i.ONE, i.ONE_MINUS_SRC_ALPHA],
    r[M.SCREEN] = [i.ONE, i.ONE_MINUS_SRC_COLOR, i.ONE, i.ONE_MINUS_SRC_ALPHA],
    r[M.OVERLAY] = [i.ONE, i.ONE_MINUS_SRC_ALPHA],
    r[M.DARKEN] = [i.ONE, i.ONE_MINUS_SRC_ALPHA],
    r[M.LIGHTEN] = [i.ONE, i.ONE_MINUS_SRC_ALPHA],
    r[M.COLOR_DODGE] = [i.ONE, i.ONE_MINUS_SRC_ALPHA],
    r[M.COLOR_BURN] = [i.ONE, i.ONE_MINUS_SRC_ALPHA],
    r[M.HARD_LIGHT] = [i.ONE, i.ONE_MINUS_SRC_ALPHA],
    r[M.SOFT_LIGHT] = [i.ONE, i.ONE_MINUS_SRC_ALPHA],
    r[M.DIFFERENCE] = [i.ONE, i.ONE_MINUS_SRC_ALPHA],
    r[M.EXCLUSION] = [i.ONE, i.ONE_MINUS_SRC_ALPHA],
    r[M.HUE] = [i.ONE, i.ONE_MINUS_SRC_ALPHA],
    r[M.SATURATION] = [i.ONE, i.ONE_MINUS_SRC_ALPHA],
    r[M.COLOR] = [i.ONE, i.ONE_MINUS_SRC_ALPHA],
    r[M.LUMINOSITY] = [i.ONE, i.ONE_MINUS_SRC_ALPHA],
    r[M.NONE] = [0, 0],
    r[M.NORMAL_NPM] = [i.SRC_ALPHA, i.ONE_MINUS_SRC_ALPHA, i.ONE, i.ONE_MINUS_SRC_ALPHA],
    r[M.ADD_NPM] = [i.SRC_ALPHA, i.ONE, i.ONE, i.ONE],
    r[M.SCREEN_NPM] = [i.SRC_ALPHA, i.ONE_MINUS_SRC_COLOR, i.ONE, i.ONE_MINUS_SRC_ALPHA],
    r[M.SRC_IN] = [i.DST_ALPHA, i.ZERO],
    r[M.SRC_OUT] = [i.ONE_MINUS_DST_ALPHA, i.ZERO],
    r[M.SRC_ATOP] = [i.DST_ALPHA, i.ONE_MINUS_SRC_ALPHA],
    r[M.DST_OVER] = [i.ONE_MINUS_DST_ALPHA, i.ONE],
    r[M.DST_IN] = [i.ZERO, i.SRC_ALPHA],
    r[M.DST_OUT] = [i.ZERO, i.ONE_MINUS_SRC_ALPHA],
    r[M.DST_ATOP] = [i.ONE_MINUS_DST_ALPHA, i.SRC_ALPHA],
    r[M.XOR] = [i.ONE_MINUS_DST_ALPHA, i.ONE_MINUS_SRC_ALPHA],
    r[M.SUBTRACT] = [i.ONE, i.ONE, i.ONE, i.ONE, i.FUNC_REVERSE_SUBTRACT, i.FUNC_ADD],
    r
}
var jl = 0
  , Hl = 1
  , zl = 2
  , Vl = 3
  , Yl = 4
  , bo = function(i) {
    k(r, i);
    function r(t) {
        var e = i.call(this, t) || this;
        return e.gl = null,
        e.stateId = 0,
        e.polygonOffset = 0,
        e.blendMode = M.NONE,
        e._blendEq = !1,
        e.map = [],
        e.map[jl] = e.setBlend,
        e.map[Hl] = e.setOffset,
        e.map[zl] = e.setCullFace,
        e.map[Vl] = e.setDepthTest,
        e.map[Yl] = e.setFrontFace,
        e.checks = [],
        e.defaultState = new Ht,
        e.defaultState.blend = !0,
        e
    }
    return r.prototype.contextChange = function(t) {
        this.gl = t,
        this.blendModes = Gl(t),
        this.set(this.defaultState),
        this.reset()
    }
    ,
    r.prototype.set = function(t) {
        if (t = t || this.defaultState,
        this.stateId !== t.data) {
            for (var e = this.stateId ^ t.data, n = 0; e; )
                e & 1 && this.map[n].call(this, !!(t.data & 1 << n)),
                e = e >> 1,
                n++;
            this.stateId = t.data
        }
        for (var n = 0; n < this.checks.length; n++)
            this.checks[n](this, t)
    }
    ,
    r.prototype.forceState = function(t) {
        t = t || this.defaultState;
        for (var e = 0; e < this.map.length; e++)
            this.map[e].call(this, !!(t.data & 1 << e));
        for (var e = 0; e < this.checks.length; e++)
            this.checks[e](this, t);
        this.stateId = t.data
    }
    ,
    r.prototype.setBlend = function(t) {
        this.updateCheck(r.checkBlendMode, t),
        this.gl[t ? "enable" : "disable"](this.gl.BLEND)
    }
    ,
    r.prototype.setOffset = function(t) {
        this.updateCheck(r.checkPolygonOffset, t),
        this.gl[t ? "enable" : "disable"](this.gl.POLYGON_OFFSET_FILL)
    }
    ,
    r.prototype.setDepthTest = function(t) {
        this.gl[t ? "enable" : "disable"](this.gl.DEPTH_TEST)
    }
    ,
    r.prototype.setCullFace = function(t) {
        this.gl[t ? "enable" : "disable"](this.gl.CULL_FACE)
    }
    ,
    r.prototype.setFrontFace = function(t) {
        this.gl.frontFace(this.gl[t ? "CW" : "CCW"])
    }
    ,
    r.prototype.setBlendMode = function(t) {
        if (t !== this.blendMode) {
            this.blendMode = t;
            var e = this.blendModes[t]
              , n = this.gl;
            e.length === 2 ? n.blendFunc(e[0], e[1]) : n.blendFuncSeparate(e[0], e[1], e[2], e[3]),
            e.length === 6 ? (this._blendEq = !0,
            n.blendEquationSeparate(e[4], e[5])) : this._blendEq && (this._blendEq = !1,
            n.blendEquationSeparate(n.FUNC_ADD, n.FUNC_ADD))
        }
    }
    ,
    r.prototype.setPolygonOffset = function(t, e) {
        this.gl.polygonOffset(t, e)
    }
    ,
    r.prototype.reset = function() {
        this.gl.pixelStorei(this.gl.UNPACK_FLIP_Y_WEBGL, !1),
        this.forceState(this.defaultState),
        this._blendEq = !0,
        this.blendMode = -1,
        this.setBlendMode(0)
    }
    ,
    r.prototype.updateCheck = function(t, e) {
        var n = this.checks.indexOf(t);
        e && n === -1 ? this.checks.push(t) : !e && n !== -1 && this.checks.splice(n, 1)
    }
    ,
    r.checkBlendMode = function(t, e) {
        t.setBlendMode(e.blendMode)
    }
    ,
    r.checkPolygonOffset = function(t, e) {
        t.setPolygonOffset(1, e.polygonOffset)
    }
    ,
    r
}(ut)
  , To = function(i) {
    k(r, i);
    function r(t) {
        var e = i.call(this, t) || this;
        return e.count = 0,
        e.checkCount = 0,
        e.maxIdle = R.GC_MAX_IDLE,
        e.checkCountMax = R.GC_MAX_CHECK_COUNT,
        e.mode = R.GC_MODE,
        e
    }
    return r.prototype.postrender = function() {
        !this.renderer.renderingToScreen || (this.count++,
        this.mode !== nr.MANUAL && (this.checkCount++,
        this.checkCount > this.checkCountMax && (this.checkCount = 0,
        this.run())))
    }
    ,
    r.prototype.run = function() {
        for (var t = this.renderer.texture, e = t.managedTextures, n = !1, s = 0; s < e.length; s++) {
            var a = e[s];
            !a.framebuffer && this.count - a.touched > this.maxIdle && (t.destroyTexture(a, !0),
            e[s] = null,
            n = !0)
        }
        if (n) {
            for (var o = 0, s = 0; s < e.length; s++)
                e[s] !== null && (e[o++] = e[s]);
            e.length = o
        }
    }
    ,
    r.prototype.unload = function(t) {
        var e, n = this.renderer.texture;
        ((e = t._texture) === null || e === void 0 ? void 0 : e.framebuffer) && n.destroyTexture(t._texture);
        for (var s = t.children.length - 1; s >= 0; s--)
            this.unload(t.children[s])
    }
    ,
    r
}(ut)
  , vr = function() {
    function i(r) {
        this.texture = r,
        this.width = -1,
        this.height = -1,
        this.dirtyId = -1,
        this.dirtyStyleId = -1,
        this.mipmap = !1,
        this.wrapMode = 33071,
        this.type = 6408,
        this.internalFormat = 5121
    }
    return i
}()
  , wo = function(i) {
    k(r, i);
    function r(t) {
        var e = i.call(this, t) || this;
        return e.boundTextures = [],
        e.currentLocation = -1,
        e.managedTextures = [],
        e._unknownBoundTextures = !1,
        e.unknownTexture = new q,
        e
    }
    return r.prototype.contextChange = function() {
        var t = this.gl = this.renderer.gl;
        this.CONTEXT_UID = this.renderer.CONTEXT_UID,
        this.webGLVersion = this.renderer.context.webGLVersion;
        var e = t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS);
        this.boundTextures.length = e;
        for (var n = 0; n < e; n++)
            this.boundTextures[n] = null;
        this.emptyTextures = {};
        var s = new vr(t.createTexture());
        t.bindTexture(t.TEXTURE_2D, s.texture),
        t.texImage2D(t.TEXTURE_2D, 0, t.RGBA, 1, 1, 0, t.RGBA, t.UNSIGNED_BYTE, new Uint8Array(4)),
        this.emptyTextures[t.TEXTURE_2D] = s,
        this.emptyTextures[t.TEXTURE_CUBE_MAP] = new vr(t.createTexture()),
        t.bindTexture(t.TEXTURE_CUBE_MAP, this.emptyTextures[t.TEXTURE_CUBE_MAP].texture);
        for (var n = 0; n < 6; n++)
            t.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X + n, 0, t.RGBA, 1, 1, 0, t.RGBA, t.UNSIGNED_BYTE, null);
        t.texParameteri(t.TEXTURE_CUBE_MAP, t.TEXTURE_MAG_FILTER, t.LINEAR),
        t.texParameteri(t.TEXTURE_CUBE_MAP, t.TEXTURE_MIN_FILTER, t.LINEAR);
        for (var n = 0; n < this.boundTextures.length; n++)
            this.bind(null, n)
    }
    ,
    r.prototype.bind = function(t, e) {
        e === void 0 && (e = 0);
        var n = this.gl;
        if (t) {
            if (t = t.castToBaseTexture(),
            t.parentTextureArray)
                return;
            if (t.valid) {
                t.touched = this.renderer.textureGC.count;
                var s = t._glTextures[this.CONTEXT_UID] || this.initTexture(t);
                this.boundTextures[e] !== t && (this.currentLocation !== e && (this.currentLocation = e,
                n.activeTexture(n.TEXTURE0 + e)),
                n.bindTexture(t.target, s.texture)),
                s.dirtyId !== t.dirtyId && (this.currentLocation !== e && (this.currentLocation = e,
                n.activeTexture(n.TEXTURE0 + e)),
                this.updateTexture(t)),
                this.boundTextures[e] = t
            }
        } else
            this.currentLocation !== e && (this.currentLocation = e,
            n.activeTexture(n.TEXTURE0 + e)),
            n.bindTexture(n.TEXTURE_2D, this.emptyTextures[n.TEXTURE_2D].texture),
            this.boundTextures[e] = null
    }
    ,
    r.prototype.reset = function() {
        this._unknownBoundTextures = !0,
        this.currentLocation = -1;
        for (var t = 0; t < this.boundTextures.length; t++)
            this.boundTextures[t] = this.unknownTexture
    }
    ,
    r.prototype.unbind = function(t) {
        var e = this
          , n = e.gl
          , s = e.boundTextures;
        if (this._unknownBoundTextures) {
            this._unknownBoundTextures = !1;
            for (var a = 0; a < s.length; a++)
                s[a] === this.unknownTexture && this.bind(null, a)
        }
        for (var a = 0; a < s.length; a++)
            s[a] === t && (this.currentLocation !== a && (n.activeTexture(n.TEXTURE0 + a),
            this.currentLocation = a),
            n.bindTexture(t.target, this.emptyTextures[t.target].texture),
            s[a] = null)
    }
    ,
    r.prototype.initTexture = function(t) {
        var e = new vr(this.gl.createTexture());
        return e.dirtyId = -1,
        t._glTextures[this.CONTEXT_UID] = e,
        this.managedTextures.push(t),
        t.on("dispose", this.destroyTexture, this),
        e
    }
    ,
    r.prototype.initTextureType = function(t, e) {
        if (e.internalFormat = t.format,
        e.type = t.type,
        this.webGLVersion === 2) {
            var n = this.renderer.gl;
            t.type === n.FLOAT && t.format === n.RGBA && (e.internalFormat = n.RGBA32F),
            t.type === et.HALF_FLOAT && (e.type = n.HALF_FLOAT),
            e.type === n.HALF_FLOAT && t.format === n.RGBA && (e.internalFormat = n.RGBA16F)
        }
    }
    ,
    r.prototype.updateTexture = function(t) {
        var e = t._glTextures[this.CONTEXT_UID];
        if (!!e) {
            var n = this.renderer;
            if (this.initTextureType(t, e),
            !(t.resource && t.resource.upload(n, t, e))) {
                var s = t.realWidth
                  , a = t.realHeight
                  , o = n.gl;
                (e.width !== s || e.height !== a || e.dirtyId < 0) && (e.width = s,
                e.height = a,
                o.texImage2D(t.target, 0, e.internalFormat, s, a, 0, t.format, e.type, null))
            }
            t.dirtyStyleId !== e.dirtyStyleId && this.updateTextureStyle(t),
            e.dirtyId = t.dirtyId
        }
    }
    ,
    r.prototype.destroyTexture = function(t, e) {
        var n = this.gl;
        if (t = t.castToBaseTexture(),
        t._glTextures[this.CONTEXT_UID] && (this.unbind(t),
        n.deleteTexture(t._glTextures[this.CONTEXT_UID].texture),
        t.off("dispose", this.destroyTexture, this),
        delete t._glTextures[this.CONTEXT_UID],
        !e)) {
            var s = this.managedTextures.indexOf(t);
            s !== -1 && le(this.managedTextures, s, 1)
        }
    }
    ,
    r.prototype.updateTextureStyle = function(t) {
        var e = t._glTextures[this.CONTEXT_UID];
        !e || ((t.mipmap === he.POW2 || this.webGLVersion !== 2) && !t.isPowerOfTwo ? e.mipmap = !1 : e.mipmap = t.mipmap >= 1,
        this.webGLVersion !== 2 && !t.isPowerOfTwo ? e.wrapMode = At.CLAMP : e.wrapMode = t.wrapMode,
        t.resource && t.resource.style(this.renderer, t, e) || this.setStyle(t, e),
        e.dirtyStyleId = t.dirtyStyleId)
    }
    ,
    r.prototype.setStyle = function(t, e) {
        var n = this.gl;
        if (e.mipmap && n.generateMipmap(t.target),
        n.texParameteri(t.target, n.TEXTURE_WRAP_S, e.wrapMode),
        n.texParameteri(t.target, n.TEXTURE_WRAP_T, e.wrapMode),
        e.mipmap) {
            n.texParameteri(t.target, n.TEXTURE_MIN_FILTER, t.scaleMode === pt.LINEAR ? n.LINEAR_MIPMAP_LINEAR : n.NEAREST_MIPMAP_NEAREST);
            var s = this.renderer.context.extensions.anisotropicFiltering;
            if (s && t.anisotropicLevel > 0 && t.scaleMode === pt.LINEAR) {
                var a = Math.min(t.anisotropicLevel, n.getParameter(s.MAX_TEXTURE_MAX_ANISOTROPY_EXT));
                n.texParameterf(t.target, s.TEXTURE_MAX_ANISOTROPY_EXT, a)
            }
        } else
            n.texParameteri(t.target, n.TEXTURE_MIN_FILTER, t.scaleMode === pt.LINEAR ? n.LINEAR : n.NEAREST);
        n.texParameteri(t.target, n.TEXTURE_MAG_FILTER, t.scaleMode === pt.LINEAR ? n.LINEAR : n.NEAREST)
    }
    ,
    r
}(ut)
  , Po = {
    FilterSystem: Za,
    BatchSystem: Ka,
    ContextSystem: Qa,
    FramebufferSystem: to,
    GeometrySystem: eo,
    MaskSystem: fo,
    ScissorSystem: po,
    StencilSystem: vo,
    ProjectionSystem: mo,
    RenderTextureSystem: yo,
    ShaderSystem: xo,
    StateSystem: bo,
    TextureGCSystem: To,
    TextureSystem: wo
}
  , En = new rt
  , An = function(i) {
    k(r, i);
    function r(t, e) {
        t === void 0 && (t = ae.UNKNOWN);
        var n = i.call(this) || this;
        return e = Object.assign({}, R.RENDER_OPTIONS, e),
        e.roundPixels && (R.ROUND_PIXELS = e.roundPixels,
        T("5.0.0", "Renderer roundPixels option is deprecated, please use PIXI.settings.ROUND_PIXELS", 2)),
        n.options = e,
        n.type = t,
        n.screen = new j(0,0,e.width,e.height),
        n.view = e.view || document.createElement("canvas"),
        n.resolution = e.resolution || R.RESOLUTION,
        n.transparent = e.transparent,
        n.autoDensity = e.autoDensity || e.autoResize || !1,
        n.preserveDrawingBuffer = e.preserveDrawingBuffer,
        n.clearBeforeRender = e.clearBeforeRender,
        n._backgroundColor = 0,
        n._backgroundColorRgba = [0, 0, 0, 0],
        n._backgroundColorString = "#000000",
        n.backgroundColor = e.backgroundColor || n._backgroundColor,
        n._lastObjectRendered = null,
        n.plugins = {},
        n
    }
    return r.prototype.initPlugins = function(t) {
        for (var e in t)
            this.plugins[e] = new t[e](this)
    }
    ,
    Object.defineProperty(r.prototype, "width", {
        get: function() {
            return this.view.width
        },
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(r.prototype, "height", {
        get: function() {
            return this.view.height
        },
        enumerable: !1,
        configurable: !0
    }),
    r.prototype.resize = function(t, e) {
        this.screen.width = t,
        this.screen.height = e,
        this.view.width = t * this.resolution,
        this.view.height = e * this.resolution,
        this.autoDensity && (this.view.style.width = t + "px",
        this.view.style.height = e + "px"),
        this.emit("resize", t, e)
    }
    ,
    r.prototype.generateTexture = function(t, e, n, s) {
        s = s || t.getLocalBounds(null, !0),
        s.width === 0 && (s.width = 1),
        s.height === 0 && (s.height = 1);
        var a = ee.create({
            width: s.width | 0,
            height: s.height | 0,
            scaleMode: e,
            resolution: n
        });
        return En.tx = -s.x,
        En.ty = -s.y,
        this.render(t, a, !1, En, !!t.parent),
        a
    }
    ,
    r.prototype.destroy = function(t) {
        for (var e in this.plugins)
            this.plugins[e].destroy(),
            this.plugins[e] = null;
        t && this.view.parentNode && this.view.parentNode.removeChild(this.view);
        var n = this;
        n.plugins = null,
        n.type = ae.UNKNOWN,
        n.view = null,
        n.screen = null,
        n._tempDisplayObjectParent = null,
        n.options = null,
        this._backgroundColorRgba = null,
        this._backgroundColorString = null,
        this._lastObjectRendered = null
    }
    ,
    Object.defineProperty(r.prototype, "backgroundColor", {
        get: function() {
            return this._backgroundColor
        },
        set: function(t) {
            this._backgroundColor = t,
            this._backgroundColorString = Ui(t),
            ue(t, this._backgroundColorRgba)
        },
        enumerable: !1,
        configurable: !0
    }),
    r
}(Ae)
  , Mt = function(i) {
    k(r, i);
    function r(t) {
        var e = i.call(this, ae.WEBGL, t) || this;
        return t = e.options,
        e.gl = null,
        e.CONTEXT_UID = 0,
        e.runners = {
            destroy: new st("destroy"),
            contextChange: new st("contextChange"),
            reset: new st("reset"),
            update: new st("update"),
            postrender: new st("postrender"),
            prerender: new st("prerender"),
            resize: new st("resize")
        },
        e.globalUniforms = new Gt({
            projectionMatrix: new rt
        },!0),
        e.addSystem(fo, "mask").addSystem(Qa, "context").addSystem(bo, "state").addSystem(xo, "shader").addSystem(wo, "texture").addSystem(eo, "geometry").addSystem(to, "framebuffer").addSystem(po, "scissor").addSystem(vo, "stencil").addSystem(mo, "projection").addSystem(To, "textureGC").addSystem(Za, "filter").addSystem(yo, "renderTexture").addSystem(Ka, "batch"),
        e.initPlugins(r.__plugins),
        t.context ? e.context.initFromContext(t.context) : e.context.initFromOptions({
            alpha: !!e.transparent,
            antialias: t.antialias,
            premultipliedAlpha: e.transparent && e.transparent !== "notMultiplied",
            stencil: !0,
            preserveDrawingBuffer: t.preserveDrawingBuffer,
            powerPreference: e.options.powerPreference
        }),
        e.renderingToScreen = !0,
        Ea(e.context.webGLVersion === 2 ? "WebGL 2" : "WebGL 1"),
        e.resize(e.options.width, e.options.height),
        e
    }
    return r.create = function(t) {
        if (Aa())
            return new r(t);
        throw new Error('WebGL unsupported in this browser, use "pixi.js-legacy" for fallback canvas2d support.')
    }
    ,
    r.prototype.addSystem = function(t, e) {
        e || (e = t.name);
        var n = new t(this);
        if (this[e])
            throw new Error('Whoops! The name "' + e + '" is already in use');
        this[e] = n;
        for (var s in this.runners)
            this.runners[s].add(n);
        return this
    }
    ,
    r.prototype.render = function(t, e, n, s, a) {
        if (this.renderingToScreen = !e,
        this.runners.prerender.emit(),
        this.emit("prerender"),
        this.projection.transform = s,
        !this.context.isLost) {
            if (e || (this._lastObjectRendered = t),
            !a) {
                var o = t.enableTempParent();
                t.updateTransform(),
                t.disableTempParent(o)
            }
            this.renderTexture.bind(e),
            this.batch.currentRenderer.start(),
            (n !== void 0 ? n : this.clearBeforeRender) && this.renderTexture.clear(),
            t.render(this),
            this.batch.currentRenderer.flush(),
            e && e.baseTexture.update(),
            this.runners.postrender.emit(),
            this.projection.transform = null,
            this.emit("postrender")
        }
    }
    ,
    r.prototype.resize = function(t, e) {
        i.prototype.resize.call(this, t, e),
        this.runners.resize.emit(t, e)
    }
    ,
    r.prototype.reset = function() {
        return this.runners.reset.emit(),
        this
    }
    ,
    r.prototype.clear = function() {
        this.renderTexture.bind(),
        this.renderTexture.clear()
    }
    ,
    r.prototype.destroy = function(t) {
        this.runners.destroy.emit();
        for (var e in this.runners)
            this.runners[e].destroy();
        i.prototype.destroy.call(this, t),
        this.gl = null
    }
    ,
    r.registerPlugin = function(t, e) {
        r.__plugins = r.__plugins || {},
        r.__plugins[t] = e
    }
    ,
    r
}(An);
function On(i) {
    return Mt.create(i)
}
var Rn = `attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`
  , ii = `attribute vec2 aVertexPosition;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

uniform vec4 inputSize;
uniform vec4 outputFrame;

vec4 filterVertexPosition( void )
{
    vec2 position = aVertexPosition * max(outputFrame.zw, vec2(0.)) + outputFrame.xy;

    return vec4((projectionMatrix * vec3(position, 1.0)).xy, 0.0, 1.0);
}

vec2 filterTextureCoord( void )
{
    return aVertexPosition * (outputFrame.zw * inputSize.zw);
}

void main(void)
{
    gl_Position = filterVertexPosition();
    vTextureCoord = filterTextureCoord();
}
`
  , mr = function() {
    function i() {
        this.texArray = null,
        this.blend = 0,
        this.type = dt.TRIANGLES,
        this.start = 0,
        this.size = 0,
        this.data = null
    }
    return i
}()
  , yr = function() {
    function i() {
        this.elements = [],
        this.ids = [],
        this.count = 0
    }
    return i.prototype.clear = function() {
        for (var r = 0; r < this.count; r++)
            this.elements[r] = null;
        this.count = 0
    }
    ,
    i
}()
  , Mn = function() {
    function i(r) {
        this.rawBinaryData = new ArrayBuffer(r),
        this.uint32View = new Uint32Array(this.rawBinaryData),
        this.float32View = new Float32Array(this.rawBinaryData)
    }
    return Object.defineProperty(i.prototype, "int8View", {
        get: function() {
            return this._int8View || (this._int8View = new Int8Array(this.rawBinaryData)),
            this._int8View
        },
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(i.prototype, "uint8View", {
        get: function() {
            return this._uint8View || (this._uint8View = new Uint8Array(this.rawBinaryData)),
            this._uint8View
        },
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(i.prototype, "int16View", {
        get: function() {
            return this._int16View || (this._int16View = new Int16Array(this.rawBinaryData)),
            this._int16View
        },
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(i.prototype, "uint16View", {
        get: function() {
            return this._uint16View || (this._uint16View = new Uint16Array(this.rawBinaryData)),
            this._uint16View
        },
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(i.prototype, "int32View", {
        get: function() {
            return this._int32View || (this._int32View = new Int32Array(this.rawBinaryData)),
            this._int32View
        },
        enumerable: !1,
        configurable: !0
    }),
    i.prototype.view = function(r) {
        return this[r + "View"]
    }
    ,
    i.prototype.destroy = function() {
        this.rawBinaryData = null,
        this._int8View = null,
        this._uint8View = null,
        this._int16View = null,
        this._uint16View = null,
        this._int32View = null,
        this.uint32View = null,
        this.float32View = null
    }
    ,
    i.sizeOf = function(r) {
        switch (r) {
        case "int8":
        case "uint8":
            return 1;
        case "int16":
        case "uint16":
            return 2;
        case "int32":
        case "uint32":
        case "float32":
            return 4;
        default:
            throw new Error(r + " isn't a valid view type")
        }
    }
    ,
    i
}()
  , Fn = function(i) {
    k(r, i);
    function r(t) {
        var e = i.call(this, t) || this;
        return e.shaderGenerator = null,
        e.geometryClass = null,
        e.vertexSize = null,
        e.state = Ht.for2d(),
        e.size = R.SPRITE_BATCH_SIZE * 4,
        e._vertexCount = 0,
        e._indexCount = 0,
        e._bufferedElements = [],
        e._bufferedTextures = [],
        e._bufferSize = 0,
        e._shader = null,
        e._packedGeometries = [],
        e._packedGeometryPoolSize = 2,
        e._flushId = 0,
        e._aBuffers = {},
        e._iBuffers = {},
        e.MAX_TEXTURES = 1,
        e.renderer.on("prerender", e.onPrerender, e),
        t.runners.contextChange.add(e),
        e._dcIndex = 0,
        e._aIndex = 0,
        e._iIndex = 0,
        e._attributeBuffer = null,
        e._indexBuffer = null,
        e._tempBoundTextures = [],
        e
    }
    return r.prototype.contextChange = function() {
        var t = this.renderer.gl;
        R.PREFER_ENV === Tt.WEBGL_LEGACY ? this.MAX_TEXTURES = 1 : (this.MAX_TEXTURES = Math.min(t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS), R.SPRITE_MAX_TEXTURES),
        this.MAX_TEXTURES = xn(this.MAX_TEXTURES, t)),
        this._shader = this.shaderGenerator.generateShader(this.MAX_TEXTURES);
        for (var e = 0; e < this._packedGeometryPoolSize; e++)
            this._packedGeometries[e] = new this.geometryClass;
        this.initFlushBuffers()
    }
    ,
    r.prototype.initFlushBuffers = function() {
        for (var t = r._drawCallPool, e = r._textureArrayPool, n = this.size / 4, s = Math.floor(n / this.MAX_TEXTURES) + 1; t.length < n; )
            t.push(new mr);
        for (; e.length < s; )
            e.push(new yr);
        for (var a = 0; a < this.MAX_TEXTURES; a++)
            this._tempBoundTextures[a] = null
    }
    ,
    r.prototype.onPrerender = function() {
        this._flushId = 0
    }
    ,
    r.prototype.render = function(t) {
        !t._texture.valid || (this._vertexCount + t.vertexData.length / 2 > this.size && this.flush(),
        this._vertexCount += t.vertexData.length / 2,
        this._indexCount += t.indices.length,
        this._bufferedTextures[this._bufferSize] = t._texture.baseTexture,
        this._bufferedElements[this._bufferSize++] = t)
    }
    ,
    r.prototype.buildTexturesAndDrawCalls = function() {
        var t = this
          , e = t._bufferedTextures
          , n = t.MAX_TEXTURES
          , s = r._textureArrayPool
          , a = this.renderer.batch
          , o = this._tempBoundTextures
          , h = this.renderer.textureGC.count
          , u = ++q._globalBatch
          , l = 0
          , f = s[0]
          , c = 0;
        a.copyBoundTextures(o, n);
        for (var d = 0; d < this._bufferSize; ++d) {
            var p = e[d];
            e[d] = null,
            p._batchEnabled !== u && (f.count >= n && (a.boundArray(f, o, u, n),
            this.buildDrawCalls(f, c, d),
            c = d,
            f = s[++l],
            ++u),
            p._batchEnabled = u,
            p.touched = h,
            f.elements[f.count++] = p)
        }
        f.count > 0 && (a.boundArray(f, o, u, n),
        this.buildDrawCalls(f, c, this._bufferSize),
        ++l,
        ++u);
        for (var d = 0; d < o.length; d++)
            o[d] = null;
        q._globalBatch = u
    }
    ,
    r.prototype.buildDrawCalls = function(t, e, n) {
        var s = this
          , a = s._bufferedElements
          , o = s._attributeBuffer
          , h = s._indexBuffer
          , u = s.vertexSize
          , l = r._drawCallPool
          , f = this._dcIndex
          , c = this._aIndex
          , d = this._iIndex
          , p = l[f];
        p.start = this._iIndex,
        p.texArray = t;
        for (var v = e; v < n; ++v) {
            var m = a[v]
              , g = m._texture.baseTexture
              , w = ki[g.alphaMode ? 1 : 0][m.blendMode];
            a[v] = null,
            e < v && p.blend !== w && (p.size = d - p.start,
            e = v,
            p = l[++f],
            p.texArray = t,
            p.start = d),
            this.packInterleavedGeometry(m, o, h, c, d),
            c += m.vertexData.length / 2 * u,
            d += m.indices.length,
            p.blend = w
        }
        e < n && (p.size = d - p.start,
        ++f),
        this._dcIndex = f,
        this._aIndex = c,
        this._iIndex = d
    }
    ,
    r.prototype.bindAndClearTexArray = function(t) {
        for (var e = this.renderer.texture, n = 0; n < t.count; n++)
            e.bind(t.elements[n], t.ids[n]),
            t.elements[n] = null;
        t.count = 0
    }
    ,
    r.prototype.updateGeometry = function() {
        var t = this
          , e = t._packedGeometries
          , n = t._attributeBuffer
          , s = t._indexBuffer;
        R.CAN_UPLOAD_SAME_BUFFER ? (e[this._flushId]._buffer.update(n.rawBinaryData),
        e[this._flushId]._indexBuffer.update(s),
        this.renderer.geometry.updateBuffers()) : (this._packedGeometryPoolSize <= this._flushId && (this._packedGeometryPoolSize++,
        e[this._flushId] = new this.geometryClass),
        e[this._flushId]._buffer.update(n.rawBinaryData),
        e[this._flushId]._indexBuffer.update(s),
        this.renderer.geometry.bind(e[this._flushId]),
        this.renderer.geometry.updateBuffers(),
        this._flushId++)
    }
    ,
    r.prototype.drawBatches = function() {
        for (var t = this._dcIndex, e = this.renderer, n = e.gl, s = e.state, a = r._drawCallPool, o = null, h = 0; h < t; h++) {
            var u = a[h]
              , l = u.texArray
              , f = u.type
              , c = u.size
              , d = u.start
              , p = u.blend;
            o !== l && (o = l,
            this.bindAndClearTexArray(l)),
            this.state.blendMode = p,
            s.set(this.state),
            n.drawElements(f, c, n.UNSIGNED_SHORT, d * 2)
        }
    }
    ,
    r.prototype.flush = function() {
        this._vertexCount !== 0 && (this._attributeBuffer = this.getAttributeBuffer(this._vertexCount),
        this._indexBuffer = this.getIndexBuffer(this._indexCount),
        this._aIndex = 0,
        this._iIndex = 0,
        this._dcIndex = 0,
        this.buildTexturesAndDrawCalls(),
        this.updateGeometry(),
        this.drawBatches(),
        this._bufferSize = 0,
        this._vertexCount = 0,
        this._indexCount = 0)
    }
    ,
    r.prototype.start = function() {
        this.renderer.state.set(this.state),
        this.renderer.shader.bind(this._shader),
        R.CAN_UPLOAD_SAME_BUFFER && this.renderer.geometry.bind(this._packedGeometries[this._flushId])
    }
    ,
    r.prototype.stop = function() {
        this.flush()
    }
    ,
    r.prototype.destroy = function() {
        for (var t = 0; t < this._packedGeometryPoolSize; t++)
            this._packedGeometries[t] && this._packedGeometries[t].destroy();
        this.renderer.off("prerender", this.onPrerender, this),
        this._aBuffers = null,
        this._iBuffers = null,
        this._packedGeometries = null,
        this._attributeBuffer = null,
        this._indexBuffer = null,
        this._shader && (this._shader.destroy(),
        this._shader = null),
        i.prototype.destroy.call(this)
    }
    ,
    r.prototype.getAttributeBuffer = function(t) {
        var e = sr(Math.ceil(t / 8))
          , n = Hi(e)
          , s = e * 8;
        this._aBuffers.length <= n && (this._iBuffers.length = n + 1);
        var a = this._aBuffers[s];
        return a || (this._aBuffers[s] = a = new Mn(s * this.vertexSize * 4)),
        a
    }
    ,
    r.prototype.getIndexBuffer = function(t) {
        var e = sr(Math.ceil(t / 12))
          , n = Hi(e)
          , s = e * 12;
        this._iBuffers.length <= n && (this._iBuffers.length = n + 1);
        var a = this._iBuffers[n];
        return a || (this._iBuffers[n] = a = new Uint16Array(s)),
        a
    }
    ,
    r.prototype.packInterleavedGeometry = function(t, e, n, s, a) {
        for (var o = e.uint32View, h = e.float32View, u = s / this.vertexSize, l = t.uvs, f = t.indices, c = t.vertexData, d = t._texture.baseTexture._batchLocation, p = Math.min(t.worldAlpha, 1), v = p < 1 && t._texture.baseTexture.alphaMode ? kr(t._tintRGB, p) : t._tintRGB + (p * 255 << 24), m = 0; m < c.length; m += 2)
            h[s++] = c[m],
            h[s++] = c[m + 1],
            h[s++] = l[m],
            h[s++] = l[m + 1],
            o[s++] = v,
            h[s++] = d;
        for (var m = 0; m < f.length; m++)
            n[a++] = u + f[m]
    }
    ,
    r._drawCallPool = [],
    r._textureArrayPool = [],
    r
}(Be)
  , Ln = function() {
    function i(r, t) {
        if (this.vertexSrc = r,
        this.fragTemplate = t,
        this.programCache = {},
        this.defaultGroupCache = {},
        t.indexOf("%count%") < 0)
            throw new Error('Fragment template must contain "%count%".');
        if (t.indexOf("%forloop%") < 0)
            throw new Error('Fragment template must contain "%forloop%".')
    }
    return i.prototype.generateShader = function(r) {
        if (!this.programCache[r]) {
            for (var t = new Int32Array(r), e = 0; e < r; e++)
                t[e] = e;
            this.defaultGroupCache[r] = Gt.from({
                uSamplers: t
            }, !0);
            var n = this.fragTemplate;
            n = n.replace(/%count%/gi, "" + r),
            n = n.replace(/%forloop%/gi, this.generateSampleSrc(r)),
            this.programCache[r] = new ke(this.vertexSrc,n)
        }
        var s = {
            tint: new Float32Array([1, 1, 1, 1]),
            translationMatrix: new rt,
            default: this.defaultGroupCache[r]
        };
        return new jt(this.programCache[r],s)
    }
    ,
    i.prototype.generateSampleSrc = function(r) {
        var t = "";
        t += `
`,
        t += `
`;
        for (var e = 0; e < r; e++)
            e > 0 && (t += `
else `),
            e < r - 1 && (t += "if(vTextureId < " + e + ".5)"),
            t += `
{`,
            t += `
	color = texture2D(uSamplers[` + e + "], vTextureCoord);",
            t += `
}`;
        return t += `
`,
        t += `
`,
        t
    }
    ,
    i
}()
  , ni = function(i) {
    k(r, i);
    function r(t) {
        t === void 0 && (t = !1);
        var e = i.call(this) || this;
        return e._buffer = new nt(null,t,!1),
        e._indexBuffer = new nt(null,t,!0),
        e.addAttribute("aVertexPosition", e._buffer, 2, !1, et.FLOAT).addAttribute("aTextureCoord", e._buffer, 2, !1, et.FLOAT).addAttribute("aColor", e._buffer, 4, !0, et.UNSIGNED_BYTE).addAttribute("aTextureId", e._buffer, 1, !0, et.FLOAT).addIndex(e._indexBuffer),
        e
    }
    return r
}(_e)
  , Io = `precision highp float;
attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;
attribute vec4 aColor;
attribute float aTextureId;

uniform mat3 projectionMatrix;
uniform mat3 translationMatrix;
uniform vec4 tint;

varying vec2 vTextureCoord;
varying vec4 vColor;
varying float vTextureId;

void main(void){
    gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);

    vTextureCoord = aTextureCoord;
    vTextureId = aTextureId;
    vColor = aColor * tint;
}
`
  , So = `varying vec2 vTextureCoord;
varying vec4 vColor;
varying float vTextureId;
uniform sampler2D uSamplers[%count%];

void main(void){
    vec4 color;
    %forloop%
    gl_FragColor = color * vColor;
}
`
  , Nn = function() {
    function i() {}
    return i.create = function(r) {
        var t = Object.assign({
            vertex: Io,
            fragment: So,
            geometryClass: ni,
            vertexSize: 6
        }, r)
          , e = t.vertex
          , n = t.fragment
          , s = t.vertexSize
          , a = t.geometryClass;
        return function(o) {
            k(h, o);
            function h(u) {
                var l = o.call(this, u) || this;
                return l.shaderGenerator = new Ln(e,n),
                l.geometryClass = a,
                l.vertexSize = s,
                l
            }
            return h
        }(Fn)
    }
    ,
    Object.defineProperty(i, "defaultVertexSrc", {
        get: function() {
            return Io
        },
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(i, "defaultFragmentTemplate", {
        get: function() {
            return So
        },
        enumerable: !1,
        configurable: !0
    }),
    i
}()
  , Dn = Nn.create();
var re = function() {
    function i(r) {
        var t = this;
        r = Object.assign({
            forceCanvas: !1
        }, r),
        this.renderer = On(r),
        this.stage = new ot,
        i._plugins.forEach(function(e) {
            e.init.call(t, r)
        })
    }
    return i.registerPlugin = function(r) {
        i._plugins.push(r)
    }
    ,
    i.prototype.render = function() {
        this.renderer.render(this.stage)
    }
    ,
    Object.defineProperty(i.prototype, "view", {
        get: function() {
            return this.renderer.view
        },
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(i.prototype, "screen", {
        get: function() {
            return this.renderer.screen
        },
        enumerable: !1,
        configurable: !0
    }),
    i.prototype.destroy = function(r, t) {
        var e = this
          , n = i._plugins.slice(0);
        n.reverse(),
        n.forEach(function(s) {
            s.destroy.call(e)
        }),
        this.stage.destroy(t),
        this.stage = null,
        this.renderer.destroy(r),
        this.renderer = null
    }
    ,
    i
}();
re._plugins = [];
var Wl = function() {
    function i() {}
    return i.init = function(r) {
        var t = this;
        Object.defineProperty(this, "resizeTo", {
            set: function(e) {
                window.removeEventListener("resize", this.queueResize),
                this._resizeTo = e,
                e && (window.addEventListener("resize", this.queueResize),
                this.resize())
            },
            get: function() {
                return this._resizeTo
            }
        }),
        this.queueResize = function() {
            !t._resizeTo || (t.cancelResize(),
            t._resizeId = requestAnimationFrame(function() {
                return t.resize()
            }))
        }
        ,
        this.cancelResize = function() {
            t._resizeId && (cancelAnimationFrame(t._resizeId),
            t._resizeId = null)
        }
        ,
        this.resize = function() {
            if (!!t._resizeTo) {
                t.cancelResize();
                var e, n;
                if (t._resizeTo === window)
                    e = window.innerWidth,
                    n = window.innerHeight;
                else {
                    var s = t._resizeTo
                      , a = s.clientWidth
                      , o = s.clientHeight;
                    e = a,
                    n = o
                }
                t.renderer.resize(e, n)
            }
        }
        ,
        this._resizeId = null,
        this._resizeTo = null,
        this.resizeTo = r.resizeTo || null
    }
    ,
    i.destroy = function() {
        this.cancelResize(),
        this.cancelResize = null,
        this.queueResize = null,
        this.resizeTo = null,
        this.resize = null
    }
    ,
    i
}();
re.registerPlugin(Wl);
var Co = new j
  , Eo = 4
  , Un = function() {
    function i(r) {
        this.renderer = r,
        r.extract = this
    }
    return i.prototype.image = function(r, t, e) {
        var n = new Image;
        return n.src = this.base64(r, t, e),
        n
    }
    ,
    i.prototype.base64 = function(r, t, e) {
        return this.canvas(r).toDataURL(t, e)
    }
    ,
    i.prototype.canvas = function(r) {
        var t = this.renderer, e, n, s = !1, a, o = !1;
        r && (r instanceof ee ? a = r : (a = this.renderer.generateTexture(r),
        o = !0)),
        a ? (e = a.baseTexture.resolution,
        n = a.frame,
        s = !1,
        t.renderTexture.bind(a)) : (e = this.renderer.resolution,
        s = !0,
        n = Co,
        n.width = this.renderer.width,
        n.height = this.renderer.height,
        t.renderTexture.bind(null));
        var h = Math.floor(n.width * e + 1e-4)
          , u = Math.floor(n.height * e + 1e-4)
          , l = new Vi(h,u,1)
          , f = new Uint8Array(Eo * h * u)
          , c = t.gl;
        c.readPixels(n.x * e, n.y * e, h, u, c.RGBA, c.UNSIGNED_BYTE, f);
        var d = l.context.getImageData(0, 0, h, u);
        if (i.arrayPostDivide(f, d.data),
        l.context.putImageData(d, 0, 0),
        s) {
            var p = new Vi(l.width,l.height,1);
            p.context.scale(1, -1),
            p.context.drawImage(l.canvas, 0, -u),
            l.destroy(),
            l = p
        }
        return o && a.destroy(!0),
        l.canvas
    }
    ,
    i.prototype.pixels = function(r) {
        var t = this.renderer, e, n, s, a = !1;
        r && (r instanceof ee ? s = r : (s = this.renderer.generateTexture(r),
        a = !0)),
        s ? (e = s.baseTexture.resolution,
        n = s.frame,
        t.renderTexture.bind(s)) : (e = t.resolution,
        n = Co,
        n.width = t.width,
        n.height = t.height,
        t.renderTexture.bind(null));
        var o = n.width * e
          , h = n.height * e
          , u = new Uint8Array(Eo * o * h)
          , l = t.gl;
        return l.readPixels(n.x * e, n.y * e, o, h, l.RGBA, l.UNSIGNED_BYTE, u),
        a && s.destroy(!0),
        i.arrayPostDivide(u, u),
        u
    }
    ,
    i.prototype.destroy = function() {
        this.renderer.extract = null,
        this.renderer = null
    }
    ,
    i.arrayPostDivide = function(r, t) {
        for (var e = 0; e < r.length; e += 4) {
            var n = t[e + 3] = r[e + 3];
            n !== 0 ? (t[e] = Math.round(Math.min(r[e] * 255 / n, 255)),
            t[e + 1] = Math.round(Math.min(r[e + 1] * 255 / n, 255)),
            t[e + 2] = Math.round(Math.min(r[e + 2] * 255 / n, 255))) : (t[e] = r[e],
            t[e + 1] = r[e + 1],
            t[e + 2] = r[e + 2])
        }
    }
    ,
    i
}();
function ql(i, r) {
    if (!!i) {
        r = r || {};
        for (var t = {
            key: ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"],
            q: {
                name: "queryKey",
                parser: /(?:^|&)([^&=]*)=?([^&]*)/g
            },
            parser: {
                strict: /^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,
                loose: /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/
            }
        }, e = t.parser[r.strictMode ? "strict" : "loose"].exec(i), n = {}, s = 14; s--; )
            n[t.key[s]] = e[s] || "";
        return n[t.q.name] = {},
        n[t.key[12]].replace(t.q.parser, function(a, o, h) {
            o && (n[t.q.name][o] = h)
        }),
        n
    }
}
var Ao = ql
  , gr = class {
    constructor(r, t=!1, e) {
        this._fn = r,
        this._once = t,
        this._thisArg = e,
        this._next = this._prev = this._owner = null
    }
    detach() {
        return this._owner === null ? !1 : (this._owner.detach(this),
        !0)
    }
}
;
function Oo(i, r) {
    return i._head ? (i._tail._next = r,
    r._prev = i._tail,
    i._tail = r) : (i._head = r,
    i._tail = r),
    r._owner = i,
    r
}
var Ft = class {
    constructor() {
        this._head = this._tail = void 0
    }
    handlers(r=!1) {
        let t = this._head;
        if (r)
            return !!t;
        let e = [];
        for (; t; )
            e.push(t),
            t = t._next;
        return e
    }
    has(r) {
        if (!(r instanceof gr))
            throw new Error("MiniSignal#has(): First arg must be a MiniSignalBinding object.");
        return r._owner === this
    }
    dispatch() {
        let r = this._head;
        if (!r)
            return !1;
        for (; r; )
            r._once && this.detach(r),
            r._fn.apply(r._thisArg, arguments),
            r = r._next;
        return !0
    }
    add(r, t=null) {
        if (typeof r != "function")
            throw new Error("MiniSignal#add(): First arg must be a Function.");
        return Oo(this, new gr(r,!1,t))
    }
    once(r, t=null) {
        if (typeof r != "function")
            throw new Error("MiniSignal#once(): First arg must be a Function.");
        return Oo(this, new gr(r,!0,t))
    }
    detach(r) {
        if (!(r instanceof gr))
            throw new Error("MiniSignal#detach(): First arg must be a MiniSignalBinding object.");
        return r._owner !== this ? this : (r._prev && (r._prev._next = r._next),
        r._next && (r._next._prev = r._prev),
        r === this._head ? (this._head = r._next,
        r._next === null && (this._tail = null)) : r === this._tail && (this._tail = r._prev,
        this._tail._next = null),
        r._owner = null,
        this)
    }
    detachAll() {
        let r = this._head;
        if (!r)
            return this;
        for (this._head = this._tail = null; r; )
            r._owner = null,
            r = r._next;
        return this
    }
}
;
function be() {}
function Ro(i, r, t, e) {
    var n = 0
      , s = i.length;
    (function a(o) {
        if (o || n === s) {
            t && t(o);
            return
        }
        e ? setTimeout(function() {
            r(i[n++], a)
        }, 1) : r(i[n++], a)
    }
    )()
}
function $l(i) {
    return function() {
        if (i === null)
            throw new Error("Callback was already called.");
        var t = i;
        i = null,
        t.apply(this, arguments)
    }
}
function Zl(i, r) {
    if (r == null)
        r = 1;
    else if (r === 0)
        throw new Error("Concurrency must not be zero");
    var t = 0
      , e = {
        _tasks: [],
        concurrency: r,
        saturated: be,
        unsaturated: be,
        buffer: r / 4,
        empty: be,
        drain: be,
        error: be,
        started: !1,
        paused: !1,
        push: function(o, h) {
            n(o, !1, h)
        },
        kill: function() {
            t = 0,
            e.drain = be,
            e.started = !1,
            e._tasks = []
        },
        unshift: function(o, h) {
            n(o, !0, h)
        },
        process: function() {
            for (; !e.paused && t < e.concurrency && e._tasks.length; ) {
                var o = e._tasks.shift();
                e._tasks.length === 0 && e.empty(),
                t += 1,
                t === e.concurrency && e.saturated(),
                i(o.data, $l(s(o)))
            }
        },
        length: function() {
            return e._tasks.length
        },
        running: function() {
            return t
        },
        idle: function() {
            return e._tasks.length + t === 0
        },
        pause: function() {
            e.paused !== !0 && (e.paused = !0)
        },
        resume: function() {
            if (e.paused !== !1) {
                e.paused = !1;
                for (var o = 1; o <= e.concurrency; o++)
                    e.process()
            }
        }
    };
    function n(a, o, h) {
        if (h != null && typeof h != "function")
            throw new Error("task callback must be a function");
        if (e.started = !0,
        a == null && e.idle()) {
            setTimeout(function() {
                return e.drain()
            }, 1);
            return
        }
        var u = {
            data: a,
            callback: typeof h == "function" ? h : be
        };
        o ? e._tasks.unshift(u) : e._tasks.push(u),
        setTimeout(function() {
            return e.process()
        }, 1)
    }
    function s(a) {
        return function() {
            t -= 1,
            a.callback.apply(a, arguments),
            arguments[0] != null && e.error(arguments[0], a.data),
            t <= e.concurrency - e.buffer && e.unsaturated(),
            e.idle() && e.drain(),
            e.process()
        }
    }
    return e
}
var Bn = {};
function Kl(i, r) {
    var t = this;
    Bn[i.url] ? (i.data = Bn[i.url],
    i.complete()) : i.onComplete.once(function() {
        return Bn[t.url] = t.data
    }),
    r()
}
function Mo(i, r) {
    for (var t = 0; t < r.length; t++) {
        var e = r[t];
        e.enumerable = e.enumerable || !1,
        e.configurable = !0,
        "value"in e && (e.writable = !0),
        Object.defineProperty(i, e.key, e)
    }
}
function Fo(i, r, t) {
    return r && Mo(i.prototype, r),
    t && Mo(i, t),
    i
}
var Jl = !!(window.XDomainRequest && !("withCredentials"in new XMLHttpRequest))
  , si = null
  , Ql = 0
  , Lo = 200
  , tf = 204
  , ef = 1223
  , rf = 2;
function nf() {}
var N = function() {
    i.setExtensionLoadType = function(e, n) {
        No(i._loadTypeMap, e, n)
    }
    ,
    i.setExtensionXhrType = function(e, n) {
        No(i._xhrTypeMap, e, n)
    }
    ;
    function i(t, e, n) {
        if (typeof t != "string" || typeof e != "string")
            throw new Error("Both name and url are required for constructing a resource.");
        n = n || {},
        this._flags = 0,
        this._setFlag(i.STATUS_FLAGS.DATA_URL, e.indexOf("data:") === 0),
        this.name = t,
        this.url = e,
        this.extension = this._getExtension(),
        this.data = null,
        this.crossOrigin = n.crossOrigin === !0 ? "anonymous" : n.crossOrigin,
        this.timeout = n.timeout || 0,
        this.loadType = n.loadType || this._determineLoadType(),
        this.xhrType = n.xhrType,
        this.metadata = n.metadata || {},
        this.error = null,
        this.xhr = null,
        this.children = [],
        this.type = i.TYPE.UNKNOWN,
        this.progressChunk = 0,
        this._dequeue = nf,
        this._onLoadBinding = null,
        this._elementTimer = 0,
        this._boundComplete = this.complete.bind(this),
        this._boundOnError = this._onError.bind(this),
        this._boundOnProgress = this._onProgress.bind(this),
        this._boundOnTimeout = this._onTimeout.bind(this),
        this._boundXhrOnError = this._xhrOnError.bind(this),
        this._boundXhrOnTimeout = this._xhrOnTimeout.bind(this),
        this._boundXhrOnAbort = this._xhrOnAbort.bind(this),
        this._boundXhrOnLoad = this._xhrOnLoad.bind(this),
        this.onStart = new Ft,
        this.onProgress = new Ft,
        this.onComplete = new Ft,
        this.onAfterMiddleware = new Ft
    }
    var r = i.prototype;
    return r.complete = function() {
        this._clearEvents(),
        this._finish()
    }
    ,
    r.abort = function(e) {
        if (!this.error) {
            if (this.error = new Error(e),
            this._clearEvents(),
            this.xhr)
                this.xhr.abort();
            else if (this.xdr)
                this.xdr.abort();
            else if (this.data)
                if (this.data.src)
                    this.data.src = i.EMPTY_GIF;
                else
                    for (; this.data.firstChild; )
                        this.data.removeChild(this.data.firstChild);
            this._finish()
        }
    }
    ,
    r.load = function(e) {
        var n = this;
        if (!this.isLoading) {
            if (this.isComplete) {
                e && setTimeout(function() {
                    return e(n)
                }, 1);
                return
            } else
                e && this.onComplete.once(e);
            switch (this._setFlag(i.STATUS_FLAGS.LOADING, !0),
            this.onStart.dispatch(this),
            (this.crossOrigin === !1 || typeof this.crossOrigin != "string") && (this.crossOrigin = this._determineCrossOrigin(this.url)),
            this.loadType) {
            case i.LOAD_TYPE.IMAGE:
                this.type = i.TYPE.IMAGE,
                this._loadElement("image");
                break;
            case i.LOAD_TYPE.AUDIO:
                this.type = i.TYPE.AUDIO,
                this._loadSourceElement("audio");
                break;
            case i.LOAD_TYPE.VIDEO:
                this.type = i.TYPE.VIDEO,
                this._loadSourceElement("video");
                break;
            case i.LOAD_TYPE.XHR:
            default:
                Jl && this.crossOrigin ? this._loadXdr() : this._loadXhr();
                break
            }
        }
    }
    ,
    r._hasFlag = function(e) {
        return (this._flags & e) != 0
    }
    ,
    r._setFlag = function(e, n) {
        this._flags = n ? this._flags | e : this._flags & ~e
    }
    ,
    r._clearEvents = function() {
        clearTimeout(this._elementTimer),
        this.data && this.data.removeEventListener && (this.data.removeEventListener("error", this._boundOnError, !1),
        this.data.removeEventListener("load", this._boundComplete, !1),
        this.data.removeEventListener("progress", this._boundOnProgress, !1),
        this.data.removeEventListener("canplaythrough", this._boundComplete, !1)),
        this.xhr && (this.xhr.removeEventListener ? (this.xhr.removeEventListener("error", this._boundXhrOnError, !1),
        this.xhr.removeEventListener("timeout", this._boundXhrOnTimeout, !1),
        this.xhr.removeEventListener("abort", this._boundXhrOnAbort, !1),
        this.xhr.removeEventListener("progress", this._boundOnProgress, !1),
        this.xhr.removeEventListener("load", this._boundXhrOnLoad, !1)) : (this.xhr.onerror = null,
        this.xhr.ontimeout = null,
        this.xhr.onprogress = null,
        this.xhr.onload = null))
    }
    ,
    r._finish = function() {
        if (this.isComplete)
            throw new Error("Complete called again for an already completed resource.");
        this._setFlag(i.STATUS_FLAGS.COMPLETE, !0),
        this._setFlag(i.STATUS_FLAGS.LOADING, !1),
        this.onComplete.dispatch(this)
    }
    ,
    r._loadElement = function(e) {
        this.metadata.loadElement ? this.data = this.metadata.loadElement : e === "image" && typeof window.Image != "undefined" ? this.data = new Image : this.data = document.createElement(e),
        this.crossOrigin && (this.data.crossOrigin = this.crossOrigin),
        this.metadata.skipSource || (this.data.src = this.url),
        this.data.addEventListener("error", this._boundOnError, !1),
        this.data.addEventListener("load", this._boundComplete, !1),
        this.data.addEventListener("progress", this._boundOnProgress, !1),
        this.timeout && (this._elementTimer = setTimeout(this._boundOnTimeout, this.timeout))
    }
    ,
    r._loadSourceElement = function(e) {
        if (this.metadata.loadElement ? this.data = this.metadata.loadElement : e === "audio" && typeof window.Audio != "undefined" ? this.data = new Audio : this.data = document.createElement(e),
        this.data === null) {
            this.abort("Unsupported element: " + e);
            return
        }
        if (this.crossOrigin && (this.data.crossOrigin = this.crossOrigin),
        !this.metadata.skipSource)
            if (navigator.isCocoonJS)
                this.data.src = Array.isArray(this.url) ? this.url[0] : this.url;
            else if (Array.isArray(this.url))
                for (var n = this.metadata.mimeType, s = 0; s < this.url.length; ++s)
                    this.data.appendChild(this._createSource(e, this.url[s], Array.isArray(n) ? n[s] : n));
            else {
                var a = this.metadata.mimeType;
                this.data.appendChild(this._createSource(e, this.url, Array.isArray(a) ? a[0] : a))
            }
        this.data.addEventListener("error", this._boundOnError, !1),
        this.data.addEventListener("load", this._boundComplete, !1),
        this.data.addEventListener("progress", this._boundOnProgress, !1),
        this.data.addEventListener("canplaythrough", this._boundComplete, !1),
        this.data.load(),
        this.timeout && (this._elementTimer = setTimeout(this._boundOnTimeout, this.timeout))
    }
    ,
    r._loadXhr = function() {
        typeof this.xhrType != "string" && (this.xhrType = this._determineXhrType());
        var e = this.xhr = new XMLHttpRequest;
        e.open("GET", this.url, !0),
        e.timeout = this.timeout,
        this.xhrType === i.XHR_RESPONSE_TYPE.JSON || this.xhrType === i.XHR_RESPONSE_TYPE.DOCUMENT ? e.responseType = i.XHR_RESPONSE_TYPE.TEXT : e.responseType = this.xhrType,
        e.addEventListener("error", this._boundXhrOnError, !1),
        e.addEventListener("timeout", this._boundXhrOnTimeout, !1),
        e.addEventListener("abort", this._boundXhrOnAbort, !1),
        e.addEventListener("progress", this._boundOnProgress, !1),
        e.addEventListener("load", this._boundXhrOnLoad, !1),
        e.send()
    }
    ,
    r._loadXdr = function() {
        typeof this.xhrType != "string" && (this.xhrType = this._determineXhrType());
        var e = this.xhr = new XDomainRequest;
        e.timeout = this.timeout || 5e3,
        e.onerror = this._boundXhrOnError,
        e.ontimeout = this._boundXhrOnTimeout,
        e.onprogress = this._boundOnProgress,
        e.onload = this._boundXhrOnLoad,
        e.open("GET", this.url, !0),
        setTimeout(function() {
            return e.send()
        }, 1)
    }
    ,
    r._createSource = function(e, n, s) {
        s || (s = e + "/" + this._getExtension(n));
        var a = document.createElement("source");
        return a.src = n,
        a.type = s,
        a
    }
    ,
    r._onError = function(e) {
        this.abort("Failed to load element using: " + e.target.nodeName)
    }
    ,
    r._onProgress = function(e) {
        e && e.lengthComputable && this.onProgress.dispatch(this, e.loaded / e.total)
    }
    ,
    r._onTimeout = function() {
        this.abort("Load timed out.")
    }
    ,
    r._xhrOnError = function() {
        var e = this.xhr;
        this.abort(kn(e) + " Request failed. Status: " + e.status + ', text: "' + e.statusText + '"')
    }
    ,
    r._xhrOnTimeout = function() {
        var e = this.xhr;
        this.abort(kn(e) + " Request timed out.")
    }
    ,
    r._xhrOnAbort = function() {
        var e = this.xhr;
        this.abort(kn(e) + " Request was aborted by the user.")
    }
    ,
    r._xhrOnLoad = function() {
        var e = this.xhr
          , n = ""
          , s = typeof e.status == "undefined" ? Lo : e.status;
        (e.responseType === "" || e.responseType === "text" || typeof e.responseType == "undefined") && (n = e.responseText),
        s === Ql && (n.length > 0 || e.responseType === i.XHR_RESPONSE_TYPE.BUFFER) ? s = Lo : s === ef && (s = tf);
        var a = s / 100 | 0;
        if (a === rf)
            if (this.xhrType === i.XHR_RESPONSE_TYPE.TEXT)
                this.data = n,
                this.type = i.TYPE.TEXT;
            else if (this.xhrType === i.XHR_RESPONSE_TYPE.JSON)
                try {
                    this.data = JSON.parse(n),
                    this.type = i.TYPE.JSON
                } catch (u) {
                    this.abort("Error trying to parse loaded json: " + u);
                    return
                }
            else if (this.xhrType === i.XHR_RESPONSE_TYPE.DOCUMENT)
                try {
                    if (window.DOMParser) {
                        var o = new DOMParser;
                        this.data = o.parseFromString(n, "text/xml")
                    } else {
                        var h = document.createElement("div");
                        h.innerHTML = n,
                        this.data = h
                    }
                    this.type = i.TYPE.XML
                } catch (u) {
                    this.abort("Error trying to parse loaded xml: " + u);
                    return
                }
            else
                this.data = e.response || n;
        else {
            this.abort("[" + e.status + "] " + e.statusText + ": " + e.responseURL);
            return
        }
        this.complete()
    }
    ,
    r._determineCrossOrigin = function(e, n) {
        if (e.indexOf("data:") === 0)
            return "";
        if (window.origin !== window.location.origin)
            return "anonymous";
        n = n || window.location,
        si || (si = document.createElement("a")),
        si.href = e,
        e = Ao(si.href, {
            strictMode: !0
        });
        var s = !e.port && n.port === "" || e.port === n.port
          , a = e.protocol ? e.protocol + ":" : "";
        return e.host !== n.hostname || !s || a !== n.protocol ? "anonymous" : ""
    }
    ,
    r._determineXhrType = function() {
        return i._xhrTypeMap[this.extension] || i.XHR_RESPONSE_TYPE.TEXT
    }
    ,
    r._determineLoadType = function() {
        return i._loadTypeMap[this.extension] || i.LOAD_TYPE.XHR
    }
    ,
    r._getExtension = function() {
        var e = this.url
          , n = "";
        if (this.isDataUrl) {
            var s = e.indexOf("/");
            n = e.substring(s + 1, e.indexOf(";", s))
        } else {
            var a = e.indexOf("?")
              , o = e.indexOf("#")
              , h = Math.min(a > -1 ? a : e.length, o > -1 ? o : e.length);
            e = e.substring(0, h),
            n = e.substring(e.lastIndexOf(".") + 1)
        }
        return n.toLowerCase()
    }
    ,
    r._getMimeFromXhrType = function(e) {
        switch (e) {
        case i.XHR_RESPONSE_TYPE.BUFFER:
            return "application/octet-binary";
        case i.XHR_RESPONSE_TYPE.BLOB:
            return "application/blob";
        case i.XHR_RESPONSE_TYPE.DOCUMENT:
            return "application/xml";
        case i.XHR_RESPONSE_TYPE.JSON:
            return "application/json";
        case i.XHR_RESPONSE_TYPE.DEFAULT:
        case i.XHR_RESPONSE_TYPE.TEXT:
        default:
            return "text/plain"
        }
    }
    ,
    Fo(i, [{
        key: "isDataUrl",
        get: function() {
            return this._hasFlag(i.STATUS_FLAGS.DATA_URL)
        }
    }, {
        key: "isComplete",
        get: function() {
            return this._hasFlag(i.STATUS_FLAGS.COMPLETE)
        }
    }, {
        key: "isLoading",
        get: function() {
            return this._hasFlag(i.STATUS_FLAGS.LOADING)
        }
    }]),
    i
}();
N.STATUS_FLAGS = {
    NONE: 0,
    DATA_URL: 1 << 0,
    COMPLETE: 1 << 1,
    LOADING: 1 << 2
};
N.TYPE = {
    UNKNOWN: 0,
    JSON: 1,
    XML: 2,
    IMAGE: 3,
    AUDIO: 4,
    VIDEO: 5,
    TEXT: 6
};
N.LOAD_TYPE = {
    XHR: 1,
    IMAGE: 2,
    AUDIO: 3,
    VIDEO: 4
};
N.XHR_RESPONSE_TYPE = {
    DEFAULT: "text",
    BUFFER: "arraybuffer",
    BLOB: "blob",
    DOCUMENT: "document",
    JSON: "json",
    TEXT: "text"
};
N._loadTypeMap = {
    gif: N.LOAD_TYPE.IMAGE,
    png: N.LOAD_TYPE.IMAGE,
    bmp: N.LOAD_TYPE.IMAGE,
    jpg: N.LOAD_TYPE.IMAGE,
    jpeg: N.LOAD_TYPE.IMAGE,
    tif: N.LOAD_TYPE.IMAGE,
    tiff: N.LOAD_TYPE.IMAGE,
    webp: N.LOAD_TYPE.IMAGE,
    tga: N.LOAD_TYPE.IMAGE,
    svg: N.LOAD_TYPE.IMAGE,
    "svg+xml": N.LOAD_TYPE.IMAGE,
    mp3: N.LOAD_TYPE.AUDIO,
    ogg: N.LOAD_TYPE.AUDIO,
    wav: N.LOAD_TYPE.AUDIO,
    mp4: N.LOAD_TYPE.VIDEO,
    webm: N.LOAD_TYPE.VIDEO
};
N._xhrTypeMap = {
    xhtml: N.XHR_RESPONSE_TYPE.DOCUMENT,
    html: N.XHR_RESPONSE_TYPE.DOCUMENT,
    htm: N.XHR_RESPONSE_TYPE.DOCUMENT,
    xml: N.XHR_RESPONSE_TYPE.DOCUMENT,
    tmx: N.XHR_RESPONSE_TYPE.DOCUMENT,
    svg: N.XHR_RESPONSE_TYPE.DOCUMENT,
    tsx: N.XHR_RESPONSE_TYPE.DOCUMENT,
    gif: N.XHR_RESPONSE_TYPE.BLOB,
    png: N.XHR_RESPONSE_TYPE.BLOB,
    bmp: N.XHR_RESPONSE_TYPE.BLOB,
    jpg: N.XHR_RESPONSE_TYPE.BLOB,
    jpeg: N.XHR_RESPONSE_TYPE.BLOB,
    tif: N.XHR_RESPONSE_TYPE.BLOB,
    tiff: N.XHR_RESPONSE_TYPE.BLOB,
    webp: N.XHR_RESPONSE_TYPE.BLOB,
    tga: N.XHR_RESPONSE_TYPE.BLOB,
    json: N.XHR_RESPONSE_TYPE.JSON,
    text: N.XHR_RESPONSE_TYPE.TEXT,
    txt: N.XHR_RESPONSE_TYPE.TEXT,
    ttf: N.XHR_RESPONSE_TYPE.BUFFER,
    otf: N.XHR_RESPONSE_TYPE.BUFFER
};
N.EMPTY_GIF = "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==";
function No(i, r, t) {
    r && r.indexOf(".") === 0 && (r = r.substring(1)),
    !!r && (i[r] = t)
}
function kn(i) {
    return i.toString().replace("object ", "")
}
var sf = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function af(i) {
    for (var r = "", t = 0; t < i.length; ) {
        for (var e = [0, 0, 0], n = [0, 0, 0, 0], s = 0; s < e.length; ++s)
            t < i.length ? e[s] = i.charCodeAt(t++) & 255 : e[s] = 0;
        n[0] = e[0] >> 2,
        n[1] = (e[0] & 3) << 4 | e[1] >> 4,
        n[2] = (e[1] & 15) << 2 | e[2] >> 6,
        n[3] = e[2] & 63;
        var a = t - (i.length - 1);
        switch (a) {
        case 2:
            n[3] = 64,
            n[2] = 64;
            break;
        case 1:
            n[3] = 64;
            break
        }
        for (var o = 0; o < n.length; ++o)
            r += sf.charAt(n[o])
    }
    return r
}
var Do = window.URL || window.webkitURL;
function of(i, r) {
    if (!i.data) {
        r();
        return
    }
    if (i.xhr && i.xhrType === N.XHR_RESPONSE_TYPE.BLOB) {
        if (!window.Blob || typeof i.data == "string") {
            var t = i.xhr.getResponseHeader("content-type");
            if (t && t.indexOf("image") === 0) {
                i.data = new Image,
                i.data.src = "data:" + t + ";base64," + af(i.xhr.responseText),
                i.type = N.TYPE.IMAGE,
                i.data.onload = function() {
                    i.data.onload = null,
                    r()
                }
                ;
                return
            }
        } else if (i.data.type.indexOf("image") === 0) {
            var e = Do.createObjectURL(i.data);
            i.blob = i.data,
            i.data = new Image,
            i.data.src = e,
            i.type = N.TYPE.IMAGE,
            i.data.onload = function() {
                Do.revokeObjectURL(e),
                i.data.onload = null,
                r()
            }
            ;
            return
        }
    }
    r()
}
var hf = {
    caching: Kl,
    parsing: of
}
  , Xn = 100
  , uf = /(#[\w-]+)?$/
  , zt = function() {
    function i(t, e) {
        var n = this;
        t === void 0 && (t = ""),
        e === void 0 && (e = 10),
        this.baseUrl = t,
        this.progress = 0,
        this.loading = !1,
        this.defaultQueryString = "",
        this._beforeMiddleware = [],
        this._afterMiddleware = [],
        this._resourcesParsing = [],
        this._boundLoadResource = function(o, h) {
            return n._loadResource(o, h)
        }
        ,
        this._queue = Zl(this._boundLoadResource, e),
        this._queue.pause(),
        this.resources = {},
        this.onProgress = new Ft,
        this.onError = new Ft,
        this.onLoad = new Ft,
        this.onStart = new Ft,
        this.onComplete = new Ft;
        for (var s = 0; s < i._defaultBeforeMiddleware.length; ++s)
            this.pre(i._defaultBeforeMiddleware[s]);
        for (var a = 0; a < i._defaultAfterMiddleware.length; ++a)
            this.use(i._defaultAfterMiddleware[a])
    }
    var r = i.prototype;
    return r.add = function(e, n, s, a) {
        if (Array.isArray(e)) {
            for (var o = 0; o < e.length; ++o)
                this.add(e[o]);
            return this
        }
        if (typeof e == "object" && (a = n || e.callback || e.onComplete,
        s = e,
        n = e.url,
        e = e.name || e.key || e.url),
        typeof n != "string" && (a = s,
        s = n,
        n = e),
        typeof n != "string")
            throw new Error("No url passed to add resource to loader.");
        if (typeof s == "function" && (a = s,
        s = null),
        this.loading && (!s || !s.parentResource))
            throw new Error("Cannot add resources while the loader is running.");
        if (this.resources[e])
            throw new Error('Resource named "' + e + '" already exists.');
        if (n = this._prepareUrl(n),
        this.resources[e] = new N(e,n,s),
        typeof a == "function" && this.resources[e].onAfterMiddleware.once(a),
        this.loading) {
            for (var h = s.parentResource, u = [], l = 0; l < h.children.length; ++l)
                h.children[l].isComplete || u.push(h.children[l]);
            var f = h.progressChunk * (u.length + 1)
              , c = f / (u.length + 2);
            h.children.push(this.resources[e]),
            h.progressChunk = c;
            for (var d = 0; d < u.length; ++d)
                u[d].progressChunk = c;
            this.resources[e].progressChunk = c
        }
        return this._queue.push(this.resources[e]),
        this
    }
    ,
    r.pre = function(e) {
        return this._beforeMiddleware.push(e),
        this
    }
    ,
    r.use = function(e) {
        return this._afterMiddleware.push(e),
        this
    }
    ,
    r.reset = function() {
        this.progress = 0,
        this.loading = !1,
        this._queue.kill(),
        this._queue.pause();
        for (var e in this.resources) {
            var n = this.resources[e];
            n._onLoadBinding && n._onLoadBinding.detach(),
            n.isLoading && n.abort()
        }
        return this.resources = {},
        this
    }
    ,
    r.load = function(e) {
        if (typeof e == "function" && this.onComplete.once(e),
        this.loading)
            return this;
        if (this._queue.idle())
            this._onStart(),
            this._onComplete();
        else {
            for (var n = this._queue._tasks.length, s = Xn / n, a = 0; a < this._queue._tasks.length; ++a)
                this._queue._tasks[a].data.progressChunk = s;
            this._onStart(),
            this._queue.resume()
        }
        return this
    }
    ,
    r._prepareUrl = function(e) {
        var n = Ao(e, {
            strictMode: !0
        }), s;
        if (n.protocol || !n.path || e.indexOf("//") === 0 ? s = e : this.baseUrl.length && this.baseUrl.lastIndexOf("/") !== this.baseUrl.length - 1 && e.charAt(0) !== "/" ? s = this.baseUrl + "/" + e : s = this.baseUrl + e,
        this.defaultQueryString) {
            var a = uf.exec(s)[0];
            s = s.substr(0, s.length - a.length),
            s.indexOf("?") !== -1 ? s += "&" + this.defaultQueryString : s += "?" + this.defaultQueryString,
            s += a
        }
        return s
    }
    ,
    r._loadResource = function(e, n) {
        var s = this;
        e._dequeue = n,
        Ro(this._beforeMiddleware, function(a, o) {
            a.call(s, e, function() {
                o(e.isComplete ? {} : null)
            })
        }, function() {
            e.isComplete ? s._onLoad(e) : (e._onLoadBinding = e.onComplete.once(s._onLoad, s),
            e.load())
        }, !0)
    }
    ,
    r._onStart = function() {
        this.progress = 0,
        this.loading = !0,
        this.onStart.dispatch(this)
    }
    ,
    r._onComplete = function() {
        this.progress = Xn,
        this.loading = !1,
        this.onComplete.dispatch(this, this.resources)
    }
    ,
    r._onLoad = function(e) {
        var n = this;
        e._onLoadBinding = null,
        this._resourcesParsing.push(e),
        e._dequeue(),
        Ro(this._afterMiddleware, function(s, a) {
            s.call(n, e, a)
        }, function() {
            e.onAfterMiddleware.dispatch(e),
            n.progress = Math.min(Xn, n.progress + e.progressChunk),
            n.onProgress.dispatch(n, e),
            e.error ? n.onError.dispatch(e.error, n, e) : n.onLoad.dispatch(n, e),
            n._resourcesParsing.splice(n._resourcesParsing.indexOf(e), 1),
            n._queue.idle() && n._resourcesParsing.length === 0 && n._onComplete()
        }, !0)
    }
    ,
    Fo(i, [{
        key: "concurrency",
        get: function() {
            return this._queue.concurrency
        },
        set: function(e) {
            this._queue.concurrency = e
        }
    }]),
    i
}();
zt._defaultBeforeMiddleware = [];
zt._defaultAfterMiddleware = [];
zt.pre = function(r) {
    return zt._defaultBeforeMiddleware.push(r),
    zt
}
;
zt.use = function(r) {
    return zt._defaultAfterMiddleware.push(r),
    zt
}
;
var Xe = N;
var Gn = function(i, r) {
    return Gn = Object.setPrototypeOf || {
        __proto__: []
    }instanceof Array && function(t, e) {
        t.__proto__ = e
    }
    || function(t, e) {
        for (var n in e)
            e.hasOwnProperty(n) && (t[n] = e[n])
    }
    ,
    Gn(i, r)
};
function lf(i, r) {
    Gn(i, r);
    function t() {
        this.constructor = i
    }
    i.prototype = r === null ? Object.create(r) : (t.prototype = r.prototype,
    new t)
}
var jn = function() {
    function i() {}
    return i.use = function(r, t) {
        r.data && r.type === N.TYPE.IMAGE && (r.texture = L.fromLoader(r.data, r.url, r.name)),
        t()
    }
    ,
    i
}()
  , Y = function(i) {
    lf(r, i);
    function r(t, e) {
        for (var n = i.call(this, t, e) || this, s = 0; s < r._plugins.length; ++s) {
            var a = r._plugins[s]
              , o = a.pre
              , h = a.use;
            o && n.pre(o),
            h && n.use(h)
        }
        return n._protected = !1,
        n
    }
    return r.prototype.destroy = function() {
        this._protected || this.reset()
    }
    ,
    Object.defineProperty(r, "shared", {
        get: function() {
            var t = r._shared;
            return t || (t = new r,
            t._protected = !0,
            r._shared = t),
            t
        },
        enumerable: !1,
        configurable: !0
    }),
    r.registerPlugin = function(t) {
        return r._plugins.push(t),
        t.add && t.add(),
        r
    }
    ,
    r._plugins = [],
    r
}(zt);
Y.registerPlugin({
    use: hf.parsing
});
Y.registerPlugin(jn);
var Hn = function() {
    function i() {}
    return i.init = function(r) {
        r = Object.assign({
            sharedLoader: !1
        }, r),
        this.loader = r.sharedLoader ? Y.shared : new Y
    }
    ,
    i.destroy = function() {
        this.loader && (this.loader.destroy(),
        this.loader = null)
    }
    ,
    i
}();
var zn = function(i, r) {
    return zn = Object.setPrototypeOf || {
        __proto__: []
    }instanceof Array && function(t, e) {
        t.__proto__ = e
    }
    || function(t, e) {
        for (var n in e)
            e.hasOwnProperty(n) && (t[n] = e[n])
    }
    ,
    zn(i, r)
};
function Uo(i, r) {
    zn(i, r);
    function t() {
        this.constructor = i
    }
    i.prototype = r === null ? Object.create(r) : (t.prototype = r.prototype,
    new t)
}
var ai = function(i) {
    Uo(r, i);
    function r(t, e, n, s) {
        t === void 0 && (t = 1500),
        n === void 0 && (n = 16384),
        s === void 0 && (s = !1);
        var a = i.call(this) || this
          , o = 16384;
        return n > o && (n = o),
        a._properties = [!1, !0, !1, !1, !1],
        a._maxSize = t,
        a._batchSize = n,
        a._buffers = null,
        a._bufferUpdateIDs = [],
        a._updateID = 0,
        a.interactiveChildren = !1,
        a.blendMode = M.NORMAL,
        a.autoResize = s,
        a.roundPixels = !0,
        a.baseTexture = null,
        a.setProperties(e),
        a._tint = 0,
        a.tintRgb = new Float32Array(4),
        a.tint = 16777215,
        a
    }
    return r.prototype.setProperties = function(t) {
        t && (this._properties[0] = "vertices"in t || "scale"in t ? !!t.vertices || !!t.scale : this._properties[0],
        this._properties[1] = "position"in t ? !!t.position : this._properties[1],
        this._properties[2] = "rotation"in t ? !!t.rotation : this._properties[2],
        this._properties[3] = "uvs"in t ? !!t.uvs : this._properties[3],
        this._properties[4] = "tint"in t || "alpha"in t ? !!t.tint || !!t.alpha : this._properties[4])
    }
    ,
    r.prototype.updateTransform = function() {
        this.displayObjectUpdateTransform()
    }
    ,
    Object.defineProperty(r.prototype, "tint", {
        get: function() {
            return this._tint
        },
        set: function(t) {
            this._tint = t,
            ue(t, this.tintRgb)
        },
        enumerable: !1,
        configurable: !0
    }),
    r.prototype.render = function(t) {
        var e = this;
        !this.visible || this.worldAlpha <= 0 || !this.children.length || !this.renderable || (this.baseTexture || (this.baseTexture = this.children[0]._texture.baseTexture,
        this.baseTexture.valid || this.baseTexture.once("update", function() {
            return e.onChildrenChange(0)
        })),
        t.batch.setObjectRenderer(t.plugins.particle),
        t.plugins.particle.render(this))
    }
    ,
    r.prototype.onChildrenChange = function(t) {
        for (var e = Math.floor(t / this._batchSize); this._bufferUpdateIDs.length < e; )
            this._bufferUpdateIDs.push(0);
        this._bufferUpdateIDs[e] = ++this._updateID
    }
    ,
    r.prototype.dispose = function() {
        if (this._buffers) {
            for (var t = 0; t < this._buffers.length; ++t)
                this._buffers[t].destroy();
            this._buffers = null
        }
    }
    ,
    r.prototype.destroy = function(t) {
        i.prototype.destroy.call(this, t),
        this.dispose(),
        this._properties = null,
        this._buffers = null,
        this._bufferUpdateIDs = null
    }
    ,
    r
}(ot)
  , Bo = function() {
    function i(r, t, e) {
        this.geometry = new _e,
        this.indexBuffer = null,
        this.size = e,
        this.dynamicProperties = [],
        this.staticProperties = [];
        for (var n = 0; n < r.length; ++n) {
            var s = r[n];
            s = {
                attributeName: s.attributeName,
                size: s.size,
                uploadFunction: s.uploadFunction,
                type: s.type || et.FLOAT,
                offset: s.offset
            },
            t[n] ? this.dynamicProperties.push(s) : this.staticProperties.push(s)
        }
        this.staticStride = 0,
        this.staticBuffer = null,
        this.staticData = null,
        this.staticDataUint32 = null,
        this.dynamicStride = 0,
        this.dynamicBuffer = null,
        this.dynamicData = null,
        this.dynamicDataUint32 = null,
        this._updateID = 0,
        this.initBuffers()
    }
    return i.prototype.initBuffers = function() {
        var r = this.geometry
          , t = 0;
        this.indexBuffer = new nt(Ra(this.size),!0,!0),
        r.addIndex(this.indexBuffer),
        this.dynamicStride = 0;
        for (var e = 0; e < this.dynamicProperties.length; ++e) {
            var n = this.dynamicProperties[e];
            n.offset = t,
            t += n.size,
            this.dynamicStride += n.size
        }
        var s = new ArrayBuffer(this.size * this.dynamicStride * 4 * 4);
        this.dynamicData = new Float32Array(s),
        this.dynamicDataUint32 = new Uint32Array(s),
        this.dynamicBuffer = new nt(this.dynamicData,!1,!1);
        var a = 0;
        this.staticStride = 0;
        for (var e = 0; e < this.staticProperties.length; ++e) {
            var n = this.staticProperties[e];
            n.offset = a,
            a += n.size,
            this.staticStride += n.size
        }
        var o = new ArrayBuffer(this.size * this.staticStride * 4 * 4);
        this.staticData = new Float32Array(o),
        this.staticDataUint32 = new Uint32Array(o),
        this.staticBuffer = new nt(this.staticData,!0,!1);
        for (var e = 0; e < this.dynamicProperties.length; ++e) {
            var n = this.dynamicProperties[e];
            r.addAttribute(n.attributeName, this.dynamicBuffer, 0, n.type === et.UNSIGNED_BYTE, n.type, this.dynamicStride * 4, n.offset * 4)
        }
        for (var e = 0; e < this.staticProperties.length; ++e) {
            var n = this.staticProperties[e];
            r.addAttribute(n.attributeName, this.staticBuffer, 0, n.type === et.UNSIGNED_BYTE, n.type, this.staticStride * 4, n.offset * 4)
        }
    }
    ,
    i.prototype.uploadDynamic = function(r, t, e) {
        for (var n = 0; n < this.dynamicProperties.length; n++) {
            var s = this.dynamicProperties[n];
            s.uploadFunction(r, t, e, s.type === et.UNSIGNED_BYTE ? this.dynamicDataUint32 : this.dynamicData, this.dynamicStride, s.offset)
        }
        this.dynamicBuffer._updateID++
    }
    ,
    i.prototype.uploadStatic = function(r, t, e) {
        for (var n = 0; n < this.staticProperties.length; n++) {
            var s = this.staticProperties[n];
            s.uploadFunction(r, t, e, s.type === et.UNSIGNED_BYTE ? this.staticDataUint32 : this.staticData, this.staticStride, s.offset)
        }
        this.staticBuffer._updateID++
    }
    ,
    i.prototype.destroy = function() {
        this.indexBuffer = null,
        this.dynamicProperties = null,
        this.dynamicBuffer = null,
        this.dynamicData = null,
        this.dynamicDataUint32 = null,
        this.staticProperties = null,
        this.staticBuffer = null,
        this.staticData = null,
        this.staticDataUint32 = null,
        this.geometry.destroy()
    }
    ,
    i
}()
  , ff = `varying vec2 vTextureCoord;
varying vec4 vColor;

uniform sampler2D uSampler;

void main(void){
    vec4 color = texture2D(uSampler, vTextureCoord) * vColor;
    gl_FragColor = color;
}`
  , cf = `attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;
attribute vec4 aColor;

attribute vec2 aPositionCoord;
attribute float aRotation;

uniform mat3 translationMatrix;
uniform vec4 uColor;

varying vec2 vTextureCoord;
varying vec4 vColor;

void main(void){
    float x = (aVertexPosition.x) * cos(aRotation) - (aVertexPosition.y) * sin(aRotation);
    float y = (aVertexPosition.x) * sin(aRotation) + (aVertexPosition.y) * cos(aRotation);

    vec2 v = vec2(x, y);
    v = v + aPositionCoord;

    gl_Position = vec4((translationMatrix * vec3(v, 1.0)).xy, 0.0, 1.0);

    vTextureCoord = aTextureCoord;
    vColor = aColor * uColor;
}
`
  , Vn = function(i) {
    Uo(r, i);
    function r(t) {
        var e = i.call(this, t) || this;
        return e.shader = null,
        e.properties = null,
        e.tempMatrix = new rt,
        e.properties = [{
            attributeName: "aVertexPosition",
            size: 2,
            uploadFunction: e.uploadVertices,
            offset: 0
        }, {
            attributeName: "aPositionCoord",
            size: 2,
            uploadFunction: e.uploadPosition,
            offset: 0
        }, {
            attributeName: "aRotation",
            size: 1,
            uploadFunction: e.uploadRotation,
            offset: 0
        }, {
            attributeName: "aTextureCoord",
            size: 2,
            uploadFunction: e.uploadUvs,
            offset: 0
        }, {
            attributeName: "aColor",
            size: 1,
            type: et.UNSIGNED_BYTE,
            uploadFunction: e.uploadTint,
            offset: 0
        }],
        e.shader = jt.from(cf, ff, {}),
        e.state = Ht.for2d(),
        e
    }
    return r.prototype.render = function(t) {
        var e = t.children
          , n = t._maxSize
          , s = t._batchSize
          , a = this.renderer
          , o = e.length;
        if (o !== 0) {
            o > n && !t.autoResize && (o = n);
            var h = t._buffers;
            h || (h = t._buffers = this.generateBuffers(t));
            var u = e[0]._texture.baseTexture;
            this.state.blendMode = Xi(t.blendMode, u.alphaMode),
            a.state.set(this.state);
            var l = a.gl
              , f = t.worldTransform.copyTo(this.tempMatrix);
            f.prepend(a.globalUniforms.uniforms.projectionMatrix),
            this.shader.uniforms.translationMatrix = f.toArray(!0),
            this.shader.uniforms.uColor = Oa(t.tintRgb, t.worldAlpha, this.shader.uniforms.uColor, u.alphaMode),
            this.shader.uniforms.uSampler = u,
            this.renderer.shader.bind(this.shader);
            for (var c = !1, d = 0, p = 0; d < o; d += s,
            p += 1) {
                var v = o - d;
                v > s && (v = s),
                p >= h.length && h.push(this._generateOneMoreBuffer(t));
                var m = h[p];
                m.uploadDynamic(e, d, v);
                var g = t._bufferUpdateIDs[p] || 0;
                c = c || m._updateID < g,
                c && (m._updateID = t._updateID,
                m.uploadStatic(e, d, v)),
                a.geometry.bind(m.geometry),
                l.drawElements(l.TRIANGLES, v * 6, l.UNSIGNED_SHORT, 0)
            }
        }
    }
    ,
    r.prototype.generateBuffers = function(t) {
        for (var e = [], n = t._maxSize, s = t._batchSize, a = t._properties, o = 0; o < n; o += s)
            e.push(new Bo(this.properties,a,s));
        return e
    }
    ,
    r.prototype._generateOneMoreBuffer = function(t) {
        var e = t._batchSize
          , n = t._properties;
        return new Bo(this.properties,n,e)
    }
    ,
    r.prototype.uploadVertices = function(t, e, n, s, a, o) {
        for (var h = 0, u = 0, l = 0, f = 0, c = 0; c < n; ++c) {
            var d = t[e + c]
              , p = d._texture
              , v = d.scale.x
              , m = d.scale.y
              , g = p.trim
              , w = p.orig;
            g ? (u = g.x - d.anchor.x * w.width,
            h = u + g.width,
            f = g.y - d.anchor.y * w.height,
            l = f + g.height) : (h = w.width * (1 - d.anchor.x),
            u = w.width * -d.anchor.x,
            l = w.height * (1 - d.anchor.y),
            f = w.height * -d.anchor.y),
            s[o] = u * v,
            s[o + 1] = f * m,
            s[o + a] = h * v,
            s[o + a + 1] = f * m,
            s[o + a * 2] = h * v,
            s[o + a * 2 + 1] = l * m,
            s[o + a * 3] = u * v,
            s[o + a * 3 + 1] = l * m,
            o += a * 4
        }
    }
    ,
    r.prototype.uploadPosition = function(t, e, n, s, a, o) {
        for (var h = 0; h < n; h++) {
            var u = t[e + h].position;
            s[o] = u.x,
            s[o + 1] = u.y,
            s[o + a] = u.x,
            s[o + a + 1] = u.y,
            s[o + a * 2] = u.x,
            s[o + a * 2 + 1] = u.y,
            s[o + a * 3] = u.x,
            s[o + a * 3 + 1] = u.y,
            o += a * 4
        }
    }
    ,
    r.prototype.uploadRotation = function(t, e, n, s, a, o) {
        for (var h = 0; h < n; h++) {
            var u = t[e + h].rotation;
            s[o] = u,
            s[o + a] = u,
            s[o + a * 2] = u,
            s[o + a * 3] = u,
            o += a * 4
        }
    }
    ,
    r.prototype.uploadUvs = function(t, e, n, s, a, o) {
        for (var h = 0; h < n; ++h) {
            var u = t[e + h]._texture._uvs;
            u ? (s[o] = u.x0,
            s[o + 1] = u.y0,
            s[o + a] = u.x1,
            s[o + a + 1] = u.y1,
            s[o + a * 2] = u.x2,
            s[o + a * 2 + 1] = u.y2,
            s[o + a * 3] = u.x3,
            s[o + a * 3 + 1] = u.y3,
            o += a * 4) : (s[o] = 0,
            s[o + 1] = 0,
            s[o + a] = 0,
            s[o + a + 1] = 0,
            s[o + a * 2] = 0,
            s[o + a * 2 + 1] = 0,
            s[o + a * 3] = 0,
            s[o + a * 3 + 1] = 0,
            o += a * 4)
        }
    }
    ,
    r.prototype.uploadTint = function(t, e, n, s, a, o) {
        for (var h = 0; h < n; ++h) {
            var u = t[e + h]
              , l = u._texture.baseTexture.alphaMode > 0
              , f = u.alpha
              , c = f < 1 && l ? kr(u._tintRGB, f) : u._tintRGB + (f * 255 << 24);
            s[o] = c,
            s[o + a] = c,
            s[o + a * 2] = c,
            s[o + a * 3] = c,
            o += a * 4
        }
    }
    ,
    r.prototype.destroy = function() {
        i.prototype.destroy.call(this),
        this.shader && (this.shader.destroy(),
        this.shader = null),
        this.tempMatrix = null
    }
    ,
    r
}(Be);
var Lt;
(function(i) {
    i.MITER = "miter",
    i.BEVEL = "bevel",
    i.ROUND = "round"
}
)(Lt || (Lt = {}));
var Nt;
(function(i) {
    i.BUTT = "butt",
    i.ROUND = "round",
    i.SQUARE = "square"
}
)(Nt || (Nt = {}));
var Te = {
    adaptive: !0,
    maxLength: 10,
    minSegments: 8,
    maxSegments: 2048,
    epsilon: 1e-4,
    _segmentsCount: function(i, r) {
        if (r === void 0 && (r = 20),
        !this.adaptive || !i || isNaN(i))
            return r;
        var t = Math.ceil(i / this.maxLength);
        return t < this.minSegments ? t = this.minSegments : t > this.maxSegments && (t = this.maxSegments),
        t
    }
}
  , oi = function() {
    function i() {
        this.color = 16777215,
        this.alpha = 1,
        this.texture = L.WHITE,
        this.matrix = null,
        this.visible = !1,
        this.reset()
    }
    return i.prototype.clone = function() {
        var r = new i;
        return r.color = this.color,
        r.alpha = this.alpha,
        r.texture = this.texture,
        r.matrix = this.matrix,
        r.visible = this.visible,
        r
    }
    ,
    i.prototype.reset = function() {
        this.color = 16777215,
        this.alpha = 1,
        this.texture = L.WHITE,
        this.matrix = null,
        this.visible = !1
    }
    ,
    i.prototype.destroy = function() {
        this.texture = null,
        this.matrix = null
    }
    ,
    i
}();
var Yn = function(i, r) {
    return Yn = Object.setPrototypeOf || {
        __proto__: []
    }instanceof Array && function(t, e) {
        t.__proto__ = e
    }
    || function(t, e) {
        for (var n in e)
            e.hasOwnProperty(n) && (t[n] = e[n])
    }
    ,
    Yn(i, r)
};
function hi(i, r) {
    Yn(i, r);
    function t() {
        this.constructor = i
    }
    i.prototype = r === null ? Object.create(r) : (t.prototype = r.prototype,
    new t)
}
var Wn = {
    build: function(i) {
        i.points = i.shape.points.slice()
    },
    triangulate: function(i, r) {
        var t = i.points
          , e = i.holes
          , n = r.points
          , s = r.indices;
        if (t.length >= 6) {
            for (var a = [], o = 0; o < e.length; o++) {
                var h = e[o];
                a.push(t.length / 2),
                t = t.concat(h.points)
            }
            var u = Lr(t, a, 2);
            if (!u)
                return;
            for (var l = n.length / 2, o = 0; o < u.length; o += 3)
                s.push(u[o] + l),
                s.push(u[o + 1] + l),
                s.push(u[o + 2] + l);
            for (var o = 0; o < t.length; o++)
                n.push(t[o])
        }
    }
}
  , qn = {
    build: function(i) {
        var r = i.shape, t = i.points, e = r.x, n = r.y, s, a;
        if (t.length = 0,
        i.type === J.CIRC)
            s = r.radius,
            a = r.radius;
        else {
            var o = i.shape;
            s = o.width,
            a = o.height
        }
        if (!(s === 0 || a === 0)) {
            var h = Math.floor(30 * Math.sqrt(r.radius)) || Math.floor(15 * Math.sqrt(s + a));
            h /= 2.3;
            for (var u = Math.PI * 2 / h, l = 0; l < h - .5; l++)
                t.push(e + Math.sin(-u * l) * s, n + Math.cos(-u * l) * a);
            t.push(t[0], t[1])
        }
    },
    triangulate: function(i, r) {
        var t = i.points
          , e = r.points
          , n = r.indices
          , s = e.length / 2
          , a = s
          , o = i.shape
          , h = i.matrix
          , u = o.x
          , l = o.y;
        e.push(i.matrix ? h.a * u + h.c * l + h.tx : u, i.matrix ? h.b * u + h.d * l + h.ty : l);
        for (var f = 0; f < t.length; f += 2)
            e.push(t[f], t[f + 1]),
            n.push(s++, a, s)
    }
}
  , ko = {
    build: function(i) {
        var r = i.shape
          , t = r.x
          , e = r.y
          , n = r.width
          , s = r.height
          , a = i.points;
        a.length = 0,
        a.push(t, e, t + n, e, t + n, e + s, t, e + s)
    },
    triangulate: function(i, r) {
        var t = i.points
          , e = r.points
          , n = e.length / 2;
        e.push(t[0], t[1], t[2], t[3], t[6], t[7], t[4], t[5]),
        r.indices.push(n, n + 1, n + 2, n + 1, n + 2, n + 3)
    }
};
function Ge(i, r, t) {
    var e = r - i;
    return i + e * t
}
function ui(i, r, t, e, n, s, a) {
    a === void 0 && (a = []);
    for (var o = 20, h = a, u = 0, l = 0, f = 0, c = 0, d = 0, p = 0, v = 0, m = 0; v <= o; ++v)
        m = v / o,
        u = Ge(i, t, m),
        l = Ge(r, e, m),
        f = Ge(t, n, m),
        c = Ge(e, s, m),
        d = Ge(u, f, m),
        p = Ge(l, c, m),
        h.push(d, p);
    return h
}
var Xo = {
    build: function(i) {
        var r = i.shape
          , t = i.points
          , e = r.x
          , n = r.y
          , s = r.width
          , a = r.height
          , o = Math.max(0, Math.min(r.radius, Math.min(s, a) / 2));
        t.length = 0,
        o ? (ui(e, n + o, e, n, e + o, n, t),
        ui(e + s - o, n, e + s, n, e + s, n + o, t),
        ui(e + s, n + a - o, e + s, n + a, e + s - o, n + a, t),
        ui(e + o, n + a, e, n + a, e, n + a - o, t)) : t.push(e, n, e + s, n, e + s, n + a, e, n + a)
    },
    triangulate: function(i, r) {
        for (var t = i.points, e = r.points, n = r.indices, s = e.length / 2, a = Lr(t, null, 2), o = 0, h = a.length; o < h; o += 3)
            n.push(a[o] + s),
            n.push(a[o + 1] + s),
            n.push(a[o + 2] + s);
        for (var o = 0, h = t.length; o < h; o++)
            e.push(t[o], t[++o])
    }
};
function Go(i, r, t, e, n, s, a, o) {
    var h = i - t * n, u = r - e * n, l = i + t * s, f = r + e * s, c, d;
    a ? (c = e,
    d = -t) : (c = -e,
    d = t);
    var p = h + c
      , v = u + d
      , m = l + c
      , g = f + d;
    return o.push(p, v),
    o.push(m, g),
    2
}
function je(i, r, t, e, n, s, a, o) {
    var h = t - i
      , u = e - r
      , l = Math.atan2(h, u)
      , f = Math.atan2(n - i, s - r);
    o && l < f ? l += Math.PI * 2 : !o && l > f && (f += Math.PI * 2);
    var c = l
      , d = f - l
      , p = Math.abs(d)
      , v = Math.sqrt(h * h + u * u)
      , m = (15 * p * Math.sqrt(v) / Math.PI >> 0) + 1
      , g = d / m;
    if (c += g,
    o) {
        a.push(i, r),
        a.push(t, e);
        for (var w = 1, y = c; w < m; w++,
        y += g)
            a.push(i, r),
            a.push(i + Math.sin(y) * v, r + Math.cos(y) * v);
        a.push(i, r),
        a.push(n, s)
    } else {
        a.push(t, e),
        a.push(i, r);
        for (var w = 1, y = c; w < m; w++,
        y += g)
            a.push(i + Math.sin(y) * v, r + Math.cos(y) * v),
            a.push(i, r);
        a.push(n, s),
        a.push(i, r)
    }
    return m * 2
}
function df(i, r) {
    var t = i.shape
      , e = i.points || t.points.slice()
      , n = r.closePointEps;
    if (e.length !== 0) {
        var s = i.lineStyle
          , a = new V(e[0],e[1])
          , o = new V(e[e.length - 2],e[e.length - 1])
          , h = t.type !== J.POLY || t.closeStroke
          , u = Math.abs(a.x - o.x) < n && Math.abs(a.y - o.y) < n;
        if (h) {
            e = e.slice(),
            u && (e.pop(),
            e.pop(),
            o.set(e[e.length - 2], e[e.length - 1]));
            var l = (a.x + o.x) * .5
              , f = (o.y + a.y) * .5;
            e.unshift(l, f),
            e.push(l, f)
        }
        var c = r.points
          , d = e.length / 2
          , p = e.length
          , v = c.length / 2
          , m = s.width / 2
          , g = m * m
          , w = s.miterLimit * s.miterLimit
          , y = e[0]
          , I = e[1]
          , x = e[2]
          , b = e[3]
          , D = 0
          , U = 0
          , P = -(I - b)
          , _ = y - x
          , C = 0
          , O = 0
          , X = Math.sqrt(P * P + _ * _);
        P /= X,
        _ /= X,
        P *= m,
        _ *= m;
        var B = s.alignment
          , A = (1 - B) * 2
          , F = B * 2;
        h || (s.cap === Nt.ROUND ? p += je(y - P * (A - F) * .5, I - _ * (A - F) * .5, y - P * A, I - _ * A, y + P * F, I + _ * F, c, !0) + 2 : s.cap === Nt.SQUARE && (p += Go(y, I, P, _, A, F, !0, c))),
        c.push(y - P * A, I - _ * A),
        c.push(y + P * F, I + _ * F);
        for (var E = 1; E < d - 1; ++E) {
            y = e[(E - 1) * 2],
            I = e[(E - 1) * 2 + 1],
            x = e[E * 2],
            b = e[E * 2 + 1],
            D = e[(E + 1) * 2],
            U = e[(E + 1) * 2 + 1],
            P = -(I - b),
            _ = y - x,
            X = Math.sqrt(P * P + _ * _),
            P /= X,
            _ /= X,
            P *= m,
            _ *= m,
            C = -(b - U),
            O = x - D,
            X = Math.sqrt(C * C + O * O),
            C /= X,
            O /= X,
            C *= m,
            O *= m;
            var lt = x - y
              , Yt = I - b
              , Wt = x - D
              , qt = U - b
              , St = Yt * Wt - qt * lt
              , ne = St < 0;
            if (Math.abs(St) < .1) {
                c.push(x - P * A, b - _ * A),
                c.push(x + P * F, b + _ * F);
                continue
            }
            var Ze = (-P + y) * (-_ + b) - (-P + x) * (-_ + I)
              , Se = (-C + D) * (-O + b) - (-C + x) * (-O + U)
              , $t = (lt * Se - Wt * Ze) / St
              , Ut = (qt * Ze - Yt * Se) / St
              , Zt = ($t - x) * ($t - x) + (Ut - b) * (Ut - b)
              , z = x + ($t - x) * A
              , gt = b + (Ut - b) * A
              , at = x - ($t - x) * F
              , G = b - (Ut - b) * F
              , Ct = Math.min(lt * lt + Yt * Yt, Wt * Wt + qt * qt)
              , se = ne ? A : F
              , Ce = Ct + se * se * g
              , Cr = Zt <= Ce;
            Cr ? s.join === Lt.BEVEL || Zt / g > w ? (ne ? (c.push(z, gt),
            c.push(x + P * F, b + _ * F),
            c.push(z, gt),
            c.push(x + C * F, b + O * F)) : (c.push(x - P * A, b - _ * A),
            c.push(at, G),
            c.push(x - C * A, b - O * A),
            c.push(at, G)),
            p += 2) : s.join === Lt.ROUND ? ne ? (c.push(z, gt),
            c.push(x + P * F, b + _ * F),
            p += je(x, b, x + P * F, b + _ * F, x + C * F, b + O * F, c, !0) + 4,
            c.push(z, gt),
            c.push(x + C * F, b + O * F)) : (c.push(x - P * A, b - _ * A),
            c.push(at, G),
            p += je(x, b, x - P * A, b - _ * A, x - C * A, b - O * A, c, !1) + 4,
            c.push(x - C * A, b - O * A),
            c.push(at, G)) : (c.push(z, gt),
            c.push(at, G)) : (c.push(x - P * A, b - _ * A),
            c.push(x + P * F, b + _ * F),
            s.join === Lt.BEVEL || Zt / g > w || (s.join === Lt.ROUND ? ne ? p += je(x, b, x + P * F, b + _ * F, x + C * F, b + O * F, c, !0) + 2 : p += je(x, b, x - P * A, b - _ * A, x - C * A, b - O * A, c, !1) + 2 : (ne ? (c.push(at, G),
            c.push(at, G)) : (c.push(z, gt),
            c.push(z, gt)),
            p += 2)),
            c.push(x - C * A, b - O * A),
            c.push(x + C * F, b + O * F),
            p += 2)
        }
        y = e[(d - 2) * 2],
        I = e[(d - 2) * 2 + 1],
        x = e[(d - 1) * 2],
        b = e[(d - 1) * 2 + 1],
        P = -(I - b),
        _ = y - x,
        X = Math.sqrt(P * P + _ * _),
        P /= X,
        _ /= X,
        P *= m,
        _ *= m,
        c.push(x - P * A, b - _ * A),
        c.push(x + P * F, b + _ * F),
        h || (s.cap === Nt.ROUND ? p += je(x - P * (A - F) * .5, b - _ * (A - F) * .5, x - P * A, b - _ * A, x + P * F, b + _ * F, c, !1) + 2 : s.cap === Nt.SQUARE && (p += Go(x, b, P, _, A, F, !1, c)));
        for (var Er = r.indices, Ar = Te.epsilon * Te.epsilon, E = v; E < p + v - 2; ++E)
            y = c[E * 2],
            I = c[E * 2 + 1],
            x = c[(E + 1) * 2],
            b = c[(E + 1) * 2 + 1],
            D = c[(E + 2) * 2],
            U = c[(E + 2) * 2 + 1],
            !(Math.abs(y * (b - U) + x * (U - I) + D * (I - b)) < Ar) && Er.push(E, E + 1, E + 2)
    }
}
function pf(i, r) {
    var t = 0
      , e = i.shape
      , n = i.points || e.points
      , s = e.type !== J.POLY || e.closeStroke;
    if (n.length !== 0) {
        var a = r.points
          , o = r.indices
          , h = n.length / 2
          , u = a.length / 2
          , l = u;
        for (a.push(n[0], n[1]),
        t = 1; t < h; t++)
            a.push(n[t * 2], n[t * 2 + 1]),
            o.push(l, l + 1),
            l++;
        s && o.push(l, u)
    }
}
function $n(i, r) {
    i.lineStyle.native ? pf(i, r) : df(i, r)
}
var jo = function(i) {
    hi(r, i);
    function r(t, e, n, s, a, o) {
        o === void 0 && (o = 0);
        var h = this;
        a = a || s / 2;
        for (var u = -1 * Math.PI / 2 + o, l = n * 2, f = de / l, c = [], d = 0; d < l; d++) {
            var p = d % 2 ? a : s
              , v = d * f + u;
            c.push(t + p * Math.cos(v), e + p * Math.sin(v))
        }
        return h = i.call(this, c) || this,
        h
    }
    return r
}(pe), Zn = function() {
    function i() {}
    return i.curveTo = function(r, t, e, n, s, a) {
        var o = a[a.length - 2]
          , h = a[a.length - 1]
          , u = h - t
          , l = o - r
          , f = n - t
          , c = e - r
          , d = Math.abs(u * c - l * f);
        if (d < 1e-8 || s === 0)
            return (a[a.length - 2] !== r || a[a.length - 1] !== t) && a.push(r, t),
            null;
        var p = u * u + l * l
          , v = f * f + c * c
          , m = u * f + l * c
          , g = s * Math.sqrt(p) / d
          , w = s * Math.sqrt(v) / d
          , y = g * m / p
          , I = w * m / v
          , x = g * c + w * l
          , b = g * f + w * u
          , D = l * (w + y)
          , U = u * (w + y)
          , P = c * (g + I)
          , _ = f * (g + I)
          , C = Math.atan2(U - b, D - x)
          , O = Math.atan2(_ - b, P - x);
        return {
            cx: x + r,
            cy: b + t,
            radius: s,
            startAngle: C,
            endAngle: O,
            anticlockwise: l * f > c * u
        }
    }
    ,
    i.arc = function(r, t, e, n, s, a, o, h, u) {
        for (var l = o - a, f = Te._segmentsCount(Math.abs(l) * s, Math.ceil(Math.abs(l) / de) * 40), c = l / (f * 2), d = c * 2, p = Math.cos(c), v = Math.sin(c), m = f - 1, g = m % 1 / m, w = 0; w <= m; ++w) {
            var y = w + g * w
              , I = c + a + d * y
              , x = Math.cos(I)
              , b = -Math.sin(I);
            u.push((p * x + v * b) * s + e, (p * -b + v * x) * s + n)
        }
    }
    ,
    i
}(), Ho = function() {
    function i() {}
    return i.curveLength = function(r, t, e, n, s, a, o, h) {
        for (var u = 10, l = 0, f = 0, c = 0, d = 0, p = 0, v = 0, m = 0, g = 0, w = 0, y = 0, I = 0, x = r, b = t, D = 1; D <= u; ++D)
            f = D / u,
            c = f * f,
            d = c * f,
            p = 1 - f,
            v = p * p,
            m = v * p,
            g = m * r + 3 * v * f * e + 3 * p * c * s + d * o,
            w = m * t + 3 * v * f * n + 3 * p * c * a + d * h,
            y = x - g,
            I = b - w,
            x = g,
            b = w,
            l += Math.sqrt(y * y + I * I);
        return l
    }
    ,
    i.curveTo = function(r, t, e, n, s, a, o) {
        var h = o[o.length - 2]
          , u = o[o.length - 1];
        o.length -= 2;
        var l = Te._segmentsCount(i.curveLength(h, u, r, t, e, n, s, a))
          , f = 0
          , c = 0
          , d = 0
          , p = 0
          , v = 0;
        o.push(h, u);
        for (var m = 1, g = 0; m <= l; ++m)
            g = m / l,
            f = 1 - g,
            c = f * f,
            d = c * f,
            p = g * g,
            v = p * g,
            o.push(d * h + 3 * c * g * r + 3 * f * p * e + v * s, d * u + 3 * c * g * t + 3 * f * p * n + v * a)
    }
    ,
    i
}(), zo = function() {
    function i() {}
    return i.curveLength = function(r, t, e, n, s, a) {
        var o = r - 2 * e + s
          , h = t - 2 * n + a
          , u = 2 * e - 2 * r
          , l = 2 * n - 2 * t
          , f = 4 * (o * o + h * h)
          , c = 4 * (o * u + h * l)
          , d = u * u + l * l
          , p = 2 * Math.sqrt(f + c + d)
          , v = Math.sqrt(f)
          , m = 2 * f * v
          , g = 2 * Math.sqrt(d)
          , w = c / v;
        return (m * p + v * c * (p - g) + (4 * d * f - c * c) * Math.log((2 * v + w + p) / (w + g))) / (4 * m)
    }
    ,
    i.curveTo = function(r, t, e, n, s) {
        for (var a = s[s.length - 2], o = s[s.length - 1], h = Te._segmentsCount(i.curveLength(a, o, r, t, e, n)), u = 0, l = 0, f = 1; f <= h; ++f) {
            var c = f / h;
            u = a + (r - a) * c,
            l = o + (t - o) * c,
            s.push(u + (r + (e - r) * c - u) * c, l + (t + (n - t) * c - l) * c)
        }
    }
    ,
    i
}(), Vo = function() {
    function i() {
        this.reset()
    }
    return i.prototype.begin = function(r, t, e) {
        this.reset(),
        this.style = r,
        this.start = t,
        this.attribStart = e
    }
    ,
    i.prototype.end = function(r, t) {
        this.attribSize = t - this.attribStart,
        this.size = r - this.start
    }
    ,
    i.prototype.reset = function() {
        this.style = null,
        this.size = 0,
        this.start = 0,
        this.attribStart = 0,
        this.attribSize = 0
    }
    ,
    i
}(), we, li = (we = {},
we[J.POLY] = Wn,
we[J.CIRC] = qn,
we[J.ELIP] = qn,
we[J.RECT] = ko,
we[J.RREC] = Xo,
we), Kn = [], _r = [], Yo = {
    buildPoly: Wn,
    buildCircle: qn,
    buildRectangle: ko,
    buildRoundedRectangle: Xo,
    FILL_COMMANDS: li,
    BATCH_POOL: Kn,
    DRAW_CALL_POOL: _r,
    buildLine: $n,
    Star: jo,
    ArcUtils: Zn,
    BezierUtils: Ho,
    QuadraticUtils: zo,
    BatchPart: Vo
}, fi = function() {
    function i(r, t, e, n) {
        t === void 0 && (t = null),
        e === void 0 && (e = null),
        n === void 0 && (n = null),
        this.shape = r,
        this.lineStyle = e,
        this.fillStyle = t,
        this.matrix = n,
        this.type = r.type,
        this.points = [],
        this.holes = []
    }
    return i.prototype.clone = function() {
        return new i(this.shape,this.fillStyle,this.lineStyle,this.matrix)
    }
    ,
    i.prototype.destroy = function() {
        this.shape = null,
        this.holes.length = 0,
        this.holes = null,
        this.points.length = 0,
        this.points = null,
        this.lineStyle = null,
        this.fillStyle = null
    }
    ,
    i
}(), He = new V, vf = new Ne, Jn = function(i) {
    hi(r, i);
    function r() {
        var t = i.call(this) || this;
        return t.uvsFloat32 = null,
        t.indicesUint16 = null,
        t.points = [],
        t.colors = [],
        t.uvs = [],
        t.indices = [],
        t.textureIds = [],
        t.graphicsData = [],
        t.dirty = 0,
        t.batchDirty = -1,
        t.cacheDirty = -1,
        t.clearDirty = 0,
        t.drawCalls = [],
        t.batches = [],
        t.shapeIndex = 0,
        t._bounds = new Ne,
        t.boundsDirty = -1,
        t.boundsPadding = 0,
        t.batchable = !1,
        t.indicesUint16 = null,
        t.uvsFloat32 = null,
        t.closePointEps = 1e-4,
        t
    }
    return Object.defineProperty(r.prototype, "bounds", {
        get: function() {
            return this.boundsDirty !== this.dirty && (this.boundsDirty = this.dirty,
            this.calculateBounds()),
            this._bounds
        },
        enumerable: !1,
        configurable: !0
    }),
    r.prototype.invalidate = function() {
        this.boundsDirty = -1,
        this.dirty++,
        this.batchDirty++,
        this.shapeIndex = 0,
        this.points.length = 0,
        this.colors.length = 0,
        this.uvs.length = 0,
        this.indices.length = 0,
        this.textureIds.length = 0;
        for (var t = 0; t < this.drawCalls.length; t++)
            this.drawCalls[t].texArray.clear(),
            _r.push(this.drawCalls[t]);
        this.drawCalls.length = 0;
        for (var t = 0; t < this.batches.length; t++) {
            var e = this.batches[t];
            e.reset(),
            Kn.push(e)
        }
        this.batches.length = 0
    }
    ,
    r.prototype.clear = function() {
        return this.graphicsData.length > 0 && (this.invalidate(),
        this.clearDirty++,
        this.graphicsData.length = 0),
        this
    }
    ,
    r.prototype.drawShape = function(t, e, n, s) {
        e === void 0 && (e = null),
        n === void 0 && (n = null),
        s === void 0 && (s = null);
        var a = new fi(t,e,n,s);
        return this.graphicsData.push(a),
        this.dirty++,
        this
    }
    ,
    r.prototype.drawHole = function(t, e) {
        if (e === void 0 && (e = null),
        !this.graphicsData.length)
            return null;
        var n = new fi(t,null,null,e)
          , s = this.graphicsData[this.graphicsData.length - 1];
        return n.lineStyle = s.lineStyle,
        s.holes.push(n),
        this.dirty++,
        this
    }
    ,
    r.prototype.destroy = function() {
        i.prototype.destroy.call(this);
        for (var t = 0; t < this.graphicsData.length; ++t)
            this.graphicsData[t].destroy();
        this.points.length = 0,
        this.points = null,
        this.colors.length = 0,
        this.colors = null,
        this.uvs.length = 0,
        this.uvs = null,
        this.indices.length = 0,
        this.indices = null,
        this.indexBuffer.destroy(),
        this.indexBuffer = null,
        this.graphicsData.length = 0,
        this.graphicsData = null,
        this.drawCalls.length = 0,
        this.drawCalls = null,
        this.batches.length = 0,
        this.batches = null,
        this._bounds = null
    }
    ,
    r.prototype.containsPoint = function(t) {
        for (var e = this.graphicsData, n = 0; n < e.length; ++n) {
            var s = e[n];
            if (!!s.fillStyle.visible && s.shape && (s.matrix ? s.matrix.applyInverse(t, He) : He.copyFrom(t),
            s.shape.contains(He.x, He.y))) {
                var a = !1;
                if (s.holes)
                    for (var o = 0; o < s.holes.length; o++) {
                        var h = s.holes[o];
                        if (h.shape.contains(He.x, He.y)) {
                            a = !0;
                            break
                        }
                    }
                if (!a)
                    return !0
            }
        }
        return !1
    }
    ,
    r.prototype.updateBatches = function(t) {
        if (!this.graphicsData.length) {
            this.batchable = !0;
            return
        }
        if (!!this.validateBatching()) {
            this.cacheDirty = this.dirty;
            var e = this.uvs
              , n = this.graphicsData
              , s = null
              , a = null;
            this.batches.length > 0 && (s = this.batches[this.batches.length - 1],
            a = s.style);
            for (var o = this.shapeIndex; o < n.length; o++) {
                this.shapeIndex++;
                var h = n[o]
                  , u = h.fillStyle
                  , l = h.lineStyle
                  , f = li[h.type];
                f.build(h),
                h.matrix && this.transformPoints(h.points, h.matrix);
                for (var c = 0; c < 2; c++) {
                    var d = c === 0 ? u : l;
                    if (!!d.visible) {
                        var p = d.texture.baseTexture
                          , v = this.indices.length
                          , m = this.points.length / 2;
                        p.wrapMode = At.REPEAT,
                        c === 0 ? this.processFill(h) : this.processLine(h);
                        var g = this.points.length / 2 - m;
                        g !== 0 && (s && !this._compareStyles(a, d) && (s.end(v, m),
                        s = null),
                        s || (s = Kn.pop() || new Vo,
                        s.begin(d, v, m),
                        this.batches.push(s),
                        a = d),
                        this.addUvs(this.points, e, d.texture, m, g, d.matrix))
                    }
                }
            }
            var w = this.indices.length
              , y = this.points.length / 2;
            if (s && s.end(w, y),
            this.batches.length === 0) {
                this.batchable = !0;
                return
            }
            if (this.indicesUint16 && this.indices.length === this.indicesUint16.length)
                this.indicesUint16.set(this.indices);
            else {
                var I = y > 65535 && t;
                this.indicesUint16 = I ? new Uint32Array(this.indices) : new Uint16Array(this.indices)
            }
            this.batchable = this.isBatchable(),
            this.batchable ? this.packBatches() : this.buildDrawCalls()
        }
    }
    ,
    r.prototype._compareStyles = function(t, e) {
        return !(!t || !e || t.texture.baseTexture !== e.texture.baseTexture || t.color + t.alpha !== e.color + e.alpha || !!t.native != !!e.native)
    }
    ,
    r.prototype.validateBatching = function() {
        if (this.dirty === this.cacheDirty || !this.graphicsData.length)
            return !1;
        for (var t = 0, e = this.graphicsData.length; t < e; t++) {
            var n = this.graphicsData[t]
              , s = n.fillStyle
              , a = n.lineStyle;
            if (s && !s.texture.baseTexture.valid || a && !a.texture.baseTexture.valid)
                return !1
        }
        return !0
    }
    ,
    r.prototype.packBatches = function() {
        this.batchDirty++,
        this.uvsFloat32 = new Float32Array(this.uvs);
        for (var t = this.batches, e = 0, n = t.length; e < n; e++)
            for (var s = t[e], a = 0; a < s.size; a++) {
                var o = s.start + a;
                this.indicesUint16[o] = this.indicesUint16[o] - s.attribStart
            }
    }
    ,
    r.prototype.isBatchable = function() {
        if (this.points.length > 65535 * 2)
            return !1;
        for (var t = this.batches, e = 0; e < t.length; e++)
            if (t[e].style.native)
                return !1;
        return this.points.length < r.BATCHABLE_SIZE * 2
    }
    ,
    r.prototype.buildDrawCalls = function() {
        for (var t = ++q._globalBatch, e = 0; e < this.drawCalls.length; e++)
            this.drawCalls[e].texArray.clear(),
            _r.push(this.drawCalls[e]);
        this.drawCalls.length = 0;
        var n = this.colors
          , s = this.textureIds
          , a = _r.pop();
        a || (a = new mr,
        a.texArray = new yr),
        a.texArray.count = 0,
        a.start = 0,
        a.size = 0,
        a.type = dt.TRIANGLES;
        var o = 0
          , h = null
          , u = 0
          , l = !1
          , f = dt.TRIANGLES
          , c = 0;
        this.drawCalls.push(a);
        for (var e = 0; e < this.batches.length; e++) {
            var d = this.batches[e]
              , p = 8
              , v = d.style
              , m = v.texture.baseTexture;
            l !== !!v.native && (l = !!v.native,
            f = l ? dt.LINES : dt.TRIANGLES,
            h = null,
            o = p,
            t++),
            h !== m && (h = m,
            m._batchEnabled !== t && (o === p && (t++,
            o = 0,
            a.size > 0 && (a = _r.pop(),
            a || (a = new mr,
            a.texArray = new yr),
            this.drawCalls.push(a)),
            a.start = c,
            a.size = 0,
            a.texArray.count = 0,
            a.type = f),
            m.touched = 1,
            m._batchEnabled = t,
            m._batchLocation = o,
            m.wrapMode = 10497,
            a.texArray.elements[a.texArray.count++] = m,
            o++)),
            a.size += d.size,
            c += d.size,
            u = m._batchLocation,
            this.addColors(n, v.color, v.alpha, d.attribSize),
            this.addTextureIds(s, u, d.attribSize)
        }
        q._globalBatch = t,
        this.packAttributes()
    }
    ,
    r.prototype.packAttributes = function() {
        for (var t = this.points, e = this.uvs, n = this.colors, s = this.textureIds, a = new ArrayBuffer(t.length * 3 * 4), o = new Float32Array(a), h = new Uint32Array(a), u = 0, l = 0; l < t.length / 2; l++)
            o[u++] = t[l * 2],
            o[u++] = t[l * 2 + 1],
            o[u++] = e[l * 2],
            o[u++] = e[l * 2 + 1],
            h[u++] = n[l],
            o[u++] = s[l];
        this._buffer.update(a),
        this._indexBuffer.update(this.indicesUint16)
    }
    ,
    r.prototype.processFill = function(t) {
        if (t.holes.length)
            this.processHoles(t.holes),
            Wn.triangulate(t, this);
        else {
            var e = li[t.type];
            e.triangulate(t, this)
        }
    }
    ,
    r.prototype.processLine = function(t) {
        $n(t, this);
        for (var e = 0; e < t.holes.length; e++)
            $n(t.holes[e], this)
    }
    ,
    r.prototype.processHoles = function(t) {
        for (var e = 0; e < t.length; e++) {
            var n = t[e]
              , s = li[n.type];
            s.build(n),
            n.matrix && this.transformPoints(n.points, n.matrix)
        }
    }
    ,
    r.prototype.calculateBounds = function() {
        var t = this._bounds
          , e = vf
          , n = rt.IDENTITY;
        this._bounds.clear(),
        e.clear();
        for (var s = 0; s < this.graphicsData.length; s++) {
            var a = this.graphicsData[s]
              , o = a.shape
              , h = a.type
              , u = a.lineStyle
              , l = a.matrix || rt.IDENTITY
              , f = 0;
            if (u && u.visible) {
                var c = u.alignment;
                f = u.width,
                h === J.POLY ? f = f * (.5 + Math.abs(.5 - c)) : f = f * Math.max(0, c)
            }
            if (n !== l && (e.isEmpty() || (t.addBoundsMatrix(e, n),
            e.clear()),
            n = l),
            h === J.RECT || h === J.RREC) {
                var d = o;
                e.addFramePad(d.x, d.y, d.x + d.width, d.y + d.height, f, f)
            } else if (h === J.CIRC) {
                var p = o;
                e.addFramePad(p.x, p.y, p.x, p.y, p.radius + f, p.radius + f)
            } else if (h === J.ELIP) {
                var v = o;
                e.addFramePad(v.x, v.y, v.x, v.y, v.width + f, v.height + f)
            } else {
                var m = o;
                t.addVerticesMatrix(n, m.points, 0, m.points.length, f, f)
            }
        }
        e.isEmpty() || t.addBoundsMatrix(e, n),
        t.pad(this.boundsPadding, this.boundsPadding)
    }
    ,
    r.prototype.transformPoints = function(t, e) {
        for (var n = 0; n < t.length / 2; n++) {
            var s = t[n * 2]
              , a = t[n * 2 + 1];
            t[n * 2] = e.a * s + e.c * a + e.tx,
            t[n * 2 + 1] = e.b * s + e.d * a + e.ty
        }
    }
    ,
    r.prototype.addColors = function(t, e, n, s) {
        for (var a = (e >> 16) + (e & 65280) + ((e & 255) << 16), o = kr(a, n); s-- > 0; )
            t.push(o)
    }
    ,
    r.prototype.addTextureIds = function(t, e, n) {
        for (; n-- > 0; )
            t.push(e)
    }
    ,
    r.prototype.addUvs = function(t, e, n, s, a, o) {
        o === void 0 && (o = null);
        for (var h = 0, u = e.length, l = n.frame; h < a; ) {
            var f = t[(s + h) * 2]
              , c = t[(s + h) * 2 + 1];
            if (o) {
                var d = o.a * f + o.c * c + o.tx;
                c = o.b * f + o.d * c + o.ty,
                f = d
            }
            h++,
            e.push(f / l.width, c / l.height)
        }
        var p = n.baseTexture;
        (l.width < p.width || l.height < p.height) && this.adjustUvs(e, n, u, a)
    }
    ,
    r.prototype.adjustUvs = function(t, e, n, s) {
        for (var a = e.baseTexture, o = 1e-6, h = n + s * 2, u = e.frame, l = u.width / a.width, f = u.height / a.height, c = u.x / u.width, d = u.y / u.height, p = Math.floor(t[n] + o), v = Math.floor(t[n + 1] + o), m = n + 2; m < h; m += 2)
            p = Math.min(p, Math.floor(t[m] + o)),
            v = Math.min(v, Math.floor(t[m + 1] + o));
        c -= p,
        d -= v;
        for (var m = n; m < h; m += 2)
            t[m] = (t[m] + c) * l,
            t[m + 1] = (t[m + 1] + d) * f
    }
    ,
    r.BATCHABLE_SIZE = 100,
    r
}(ni), Qn = function(i) {
    hi(r, i);
    function r() {
        var t = i !== null && i.apply(this, arguments) || this;
        return t.width = 0,
        t.alignment = .5,
        t.native = !1,
        t.cap = Nt.BUTT,
        t.join = Lt.MITER,
        t.miterLimit = 10,
        t
    }
    return r.prototype.clone = function() {
        var t = new r;
        return t.color = this.color,
        t.alpha = this.alpha,
        t.texture = this.texture,
        t.matrix = this.matrix,
        t.visible = this.visible,
        t.width = this.width,
        t.alignment = this.alignment,
        t.native = this.native,
        t.cap = this.cap,
        t.join = this.join,
        t.miterLimit = this.miterLimit,
        t
    }
    ,
    r.prototype.reset = function() {
        i.prototype.reset.call(this),
        this.color = 0,
        this.alignment = .5,
        this.width = 0,
        this.native = !1
    }
    ,
    r
}(oi), mf = new Float32Array(3), ts = {}, ze = function(i) {
    hi(r, i);
    function r(t) {
        t === void 0 && (t = null);
        var e = i.call(this) || this;
        return e._geometry = t || new Jn,
        e._geometry.refCount++,
        e.shader = null,
        e.state = Ht.for2d(),
        e._fillStyle = new oi,
        e._lineStyle = new Qn,
        e._matrix = null,
        e._holeMode = !1,
        e.currentPath = null,
        e.batches = [],
        e.batchTint = -1,
        e.batchDirty = -1,
        e.vertexData = null,
        e.pluginName = "batch",
        e._transformID = -1,
        e.tint = 16777215,
        e.blendMode = M.NORMAL,
        e
    }
    return Object.defineProperty(r.prototype, "geometry", {
        get: function() {
            return this._geometry
        },
        enumerable: !1,
        configurable: !0
    }),
    r.prototype.clone = function() {
        return this.finishPoly(),
        new r(this._geometry)
    }
    ,
    Object.defineProperty(r.prototype, "blendMode", {
        get: function() {
            return this.state.blendMode
        },
        set: function(t) {
            this.state.blendMode = t
        },
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(r.prototype, "tint", {
        get: function() {
            return this._tint
        },
        set: function(t) {
            this._tint = t
        },
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(r.prototype, "fill", {
        get: function() {
            return this._fillStyle
        },
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(r.prototype, "line", {
        get: function() {
            return this._lineStyle
        },
        enumerable: !1,
        configurable: !0
    }),
    r.prototype.lineStyle = function(t) {
        if (t === void 0 && (t = null),
        typeof t == "number") {
            var e = arguments;
            t = {
                width: e[0] || 0,
                color: e[1] || 0,
                alpha: e[2] !== void 0 ? e[2] : 1,
                alignment: e[3] !== void 0 ? e[3] : .5,
                native: !!e[4]
            }
        }
        return this.lineTextureStyle(t)
    }
    ,
    r.prototype.lineTextureStyle = function(t) {
        if (typeof t == "number") {
            T("v5.2.0", "Please use object-based options for Graphics#lineTextureStyle");
            var e = arguments
              , n = e[0]
              , s = e[1]
              , a = e[2]
              , o = e[3]
              , h = e[4]
              , u = e[5]
              , l = e[6];
            t = {
                width: n,
                texture: s,
                color: a,
                alpha: o,
                matrix: h,
                alignment: u,
                native: l
            },
            Object.keys(t).forEach(function(c) {
                return t[c] === void 0 && delete t[c]
            })
        }
        t = Object.assign({
            width: 0,
            texture: L.WHITE,
            color: t && t.texture ? 16777215 : 0,
            alpha: 1,
            matrix: null,
            alignment: .5,
            native: !1,
            cap: Nt.BUTT,
            join: Lt.MITER,
            miterLimit: 10
        }, t),
        this.currentPath && this.startPoly();
        var f = t.width > 0 && t.alpha > 0;
        return f ? (t.matrix && (t.matrix = t.matrix.clone(),
        t.matrix.invert()),
        Object.assign(this._lineStyle, {
            visible: f
        }, t)) : this._lineStyle.reset(),
        this
    }
    ,
    r.prototype.startPoly = function() {
        if (this.currentPath) {
            var t = this.currentPath.points
              , e = this.currentPath.points.length;
            e > 2 && (this.drawShape(this.currentPath),
            this.currentPath = new pe,
            this.currentPath.closeStroke = !1,
            this.currentPath.points.push(t[e - 2], t[e - 1]))
        } else
            this.currentPath = new pe,
            this.currentPath.closeStroke = !1
    }
    ,
    r.prototype.finishPoly = function() {
        this.currentPath && (this.currentPath.points.length > 2 ? (this.drawShape(this.currentPath),
        this.currentPath = null) : this.currentPath.points.length = 0)
    }
    ,
    r.prototype.moveTo = function(t, e) {
        return this.startPoly(),
        this.currentPath.points[0] = t,
        this.currentPath.points[1] = e,
        this
    }
    ,
    r.prototype.lineTo = function(t, e) {
        this.currentPath || this.moveTo(0, 0);
        var n = this.currentPath.points
          , s = n[n.length - 2]
          , a = n[n.length - 1];
        return (s !== t || a !== e) && n.push(t, e),
        this
    }
    ,
    r.prototype._initCurve = function(t, e) {
        t === void 0 && (t = 0),
        e === void 0 && (e = 0),
        this.currentPath ? this.currentPath.points.length === 0 && (this.currentPath.points = [t, e]) : this.moveTo(t, e)
    }
    ,
    r.prototype.quadraticCurveTo = function(t, e, n, s) {
        this._initCurve();
        var a = this.currentPath.points;
        return a.length === 0 && this.moveTo(0, 0),
        zo.curveTo(t, e, n, s, a),
        this
    }
    ,
    r.prototype.bezierCurveTo = function(t, e, n, s, a, o) {
        return this._initCurve(),
        Ho.curveTo(t, e, n, s, a, o, this.currentPath.points),
        this
    }
    ,
    r.prototype.arcTo = function(t, e, n, s, a) {
        this._initCurve(t, e);
        var o = this.currentPath.points
          , h = Zn.curveTo(t, e, n, s, a, o);
        if (h) {
            var u = h.cx
              , l = h.cy
              , f = h.radius
              , c = h.startAngle
              , d = h.endAngle
              , p = h.anticlockwise;
            this.arc(u, l, f, c, d, p)
        }
        return this
    }
    ,
    r.prototype.arc = function(t, e, n, s, a, o) {
        if (o === void 0 && (o = !1),
        s === a)
            return this;
        !o && a <= s ? a += de : o && s <= a && (s += de);
        var h = a - s;
        if (h === 0)
            return this;
        var u = t + Math.cos(s) * n
          , l = e + Math.sin(s) * n
          , f = this._geometry.closePointEps
          , c = this.currentPath ? this.currentPath.points : null;
        if (c) {
            var d = Math.abs(c[c.length - 2] - u)
              , p = Math.abs(c[c.length - 1] - l);
            d < f && p < f || c.push(u, l)
        } else
            this.moveTo(u, l),
            c = this.currentPath.points;
        return Zn.arc(u, l, t, e, n, s, a, o, c),
        this
    }
    ,
    r.prototype.beginFill = function(t, e) {
        return t === void 0 && (t = 0),
        e === void 0 && (e = 1),
        this.beginTextureFill({
            texture: L.WHITE,
            color: t,
            alpha: e
        })
    }
    ,
    r.prototype.beginTextureFill = function(t) {
        if (t instanceof L) {
            T("v5.2.0", "Please use object-based options for Graphics#beginTextureFill");
            var e = arguments
              , n = e[0]
              , s = e[1]
              , a = e[2]
              , o = e[3];
            t = {
                texture: n,
                color: s,
                alpha: a,
                matrix: o
            },
            Object.keys(t).forEach(function(u) {
                return t[u] === void 0 && delete t[u]
            })
        }
        t = Object.assign({
            texture: L.WHITE,
            color: 16777215,
            alpha: 1,
            matrix: null
        }, t),
        this.currentPath && this.startPoly();
        var h = t.alpha > 0;
        return h ? (t.matrix && (t.matrix = t.matrix.clone(),
        t.matrix.invert()),
        Object.assign(this._fillStyle, {
            visible: h
        }, t)) : this._fillStyle.reset(),
        this
    }
    ,
    r.prototype.endFill = function() {
        return this.finishPoly(),
        this._fillStyle.reset(),
        this
    }
    ,
    r.prototype.drawRect = function(t, e, n, s) {
        return this.drawShape(new j(t,e,n,s))
    }
    ,
    r.prototype.drawRoundedRect = function(t, e, n, s, a) {
        return this.drawShape(new $i(t,e,n,s,a))
    }
    ,
    r.prototype.drawCircle = function(t, e, n) {
        return this.drawShape(new Le(t,e,n))
    }
    ,
    r.prototype.drawEllipse = function(t, e, n, s) {
        return this.drawShape(new qi(t,e,n,s))
    }
    ,
    r.prototype.drawPolygon = function() {
        for (var t = arguments, e = [], n = 0; n < arguments.length; n++)
            e[n] = t[n];
        var s, a = !0, o = e[0];
        o.points ? (a = o.closeStroke,
        s = o.points) : Array.isArray(e[0]) ? s = e[0] : s = e;
        var h = new pe(s);
        return h.closeStroke = a,
        this.drawShape(h),
        this
    }
    ,
    r.prototype.drawShape = function(t) {
        return this._holeMode ? this._geometry.drawHole(t, this._matrix) : this._geometry.drawShape(t, this._fillStyle.clone(), this._lineStyle.clone(), this._matrix),
        this
    }
    ,
    r.prototype.drawStar = function(t, e, n, s, a, o) {
        return o === void 0 && (o = 0),
        this.drawPolygon(new jo(t,e,n,s,a,o))
    }
    ,
    r.prototype.clear = function() {
        return this._geometry.clear(),
        this._lineStyle.reset(),
        this._fillStyle.reset(),
        this._boundsID++,
        this._matrix = null,
        this._holeMode = !1,
        this.currentPath = null,
        this
    }
    ,
    r.prototype.isFastRect = function() {
        var t = this._geometry.graphicsData;
        return t.length === 1 && t[0].shape.type === J.RECT && !(t[0].lineStyle.visible && t[0].lineStyle.width)
    }
    ,
    r.prototype._render = function(t) {
        this.finishPoly();
        var e = this._geometry
          , n = t.context.supports.uint32Indices;
        e.updateBatches(n),
        e.batchable ? (this.batchDirty !== e.batchDirty && this._populateBatches(),
        this._renderBatched(t)) : (t.batch.flush(),
        this._renderDirect(t))
    }
    ,
    r.prototype._populateBatches = function() {
        var t = this._geometry
          , e = this.blendMode
          , n = t.batches.length;
        this.batchTint = -1,
        this._transformID = -1,
        this.batchDirty = t.batchDirty,
        this.batches.length = n,
        this.vertexData = new Float32Array(t.points);
        for (var s = 0; s < n; s++) {
            var a = t.batches[s]
              , o = a.style.color
              , h = new Float32Array(this.vertexData.buffer,a.attribStart * 4 * 2,a.attribSize * 2)
              , u = new Float32Array(t.uvsFloat32.buffer,a.attribStart * 4 * 2,a.attribSize * 2)
              , l = new Uint16Array(t.indicesUint16.buffer,a.start * 2,a.size)
              , f = {
                vertexData: h,
                blendMode: e,
                indices: l,
                uvs: u,
                _batchRGB: ue(o),
                _tintRGB: o,
                _texture: a.style.texture,
                alpha: a.style.alpha,
                worldAlpha: 1
            };
            this.batches[s] = f
        }
    }
    ,
    r.prototype._renderBatched = function(t) {
        if (!!this.batches.length) {
            t.batch.setObjectRenderer(t.plugins[this.pluginName]),
            this.calculateVertices(),
            this.calculateTints();
            for (var e = 0, n = this.batches.length; e < n; e++) {
                var s = this.batches[e];
                s.worldAlpha = this.worldAlpha * s.alpha,
                t.plugins[this.pluginName].render(s)
            }
        }
    }
    ,
    r.prototype._renderDirect = function(t) {
        var e = this._resolveDirectShader(t)
          , n = this._geometry
          , s = this.tint
          , a = this.worldAlpha
          , o = e.uniforms
          , h = n.drawCalls;
        o.translationMatrix = this.transform.worldTransform,
        o.tint[0] = (s >> 16 & 255) / 255 * a,
        o.tint[1] = (s >> 8 & 255) / 255 * a,
        o.tint[2] = (s & 255) / 255 * a,
        o.tint[3] = a,
        t.shader.bind(e),
        t.geometry.bind(n, e),
        t.state.set(this.state);
        for (var u = 0, l = h.length; u < l; u++)
            this._renderDrawCallDirect(t, n.drawCalls[u])
    }
    ,
    r.prototype._renderDrawCallDirect = function(t, e) {
        for (var n = e.texArray, s = e.type, a = e.size, o = e.start, h = n.count, u = 0; u < h; u++)
            t.texture.bind(n.elements[u], u);
        t.geometry.draw(s, a, o)
    }
    ,
    r.prototype._resolveDirectShader = function(t) {
        var e = this.shader
          , n = this.pluginName;
        if (!e) {
            if (!ts[n]) {
                for (var s = t.plugins.batch.MAX_TEXTURES, a = new Int32Array(s), o = 0; o < s; o++)
                    a[o] = o;
                var h = {
                    tint: new Float32Array([1, 1, 1, 1]),
                    translationMatrix: new rt,
                    default: Gt.from({
                        uSamplers: a
                    }, !0)
                }
                  , u = t.plugins[n]._shader.program;
                ts[n] = new jt(u,h)
            }
            e = ts[n]
        }
        return e
    }
    ,
    r.prototype._calculateBounds = function() {
        this.finishPoly();
        var t = this._geometry;
        if (!!t.graphicsData.length) {
            var e = t.bounds
              , n = e.minX
              , s = e.minY
              , a = e.maxX
              , o = e.maxY;
            this._bounds.addFrame(this.transform, n, s, a, o)
        }
    }
    ,
    r.prototype.containsPoint = function(t) {
        return this.worldTransform.applyInverse(t, r._TEMP_POINT),
        this._geometry.containsPoint(r._TEMP_POINT)
    }
    ,
    r.prototype.calculateTints = function() {
        if (this.batchTint !== this.tint) {
            this.batchTint = this.tint;
            for (var t = ue(this.tint, mf), e = 0; e < this.batches.length; e++) {
                var n = this.batches[e]
                  , s = n._batchRGB
                  , a = t[0] * s[0] * 255
                  , o = t[1] * s[1] * 255
                  , h = t[2] * s[2] * 255
                  , u = (a << 16) + (o << 8) + (h | 0);
                n._tintRGB = (u >> 16) + (u & 65280) + ((u & 255) << 16)
            }
        }
    }
    ,
    r.prototype.calculateVertices = function() {
        var t = this.transform._worldID;
        if (this._transformID !== t) {
            this._transformID = t;
            for (var e = this.transform.worldTransform, n = e.a, s = e.b, a = e.c, o = e.d, h = e.tx, u = e.ty, l = this._geometry.points, f = this.vertexData, c = 0, d = 0; d < l.length; d += 2) {
                var p = l[d]
                  , v = l[d + 1];
                f[c++] = n * p + a * v + h,
                f[c++] = o * v + s * p + u
            }
        }
    }
    ,
    r.prototype.closePath = function() {
        var t = this.currentPath;
        return t && (t.closeStroke = !0),
        this
    }
    ,
    r.prototype.setMatrix = function(t) {
        return this._matrix = t,
        this
    }
    ,
    r.prototype.beginHole = function() {
        return this.finishPoly(),
        this._holeMode = !0,
        this
    }
    ,
    r.prototype.endHole = function() {
        return this.finishPoly(),
        this._holeMode = !1,
        this
    }
    ,
    r.prototype.destroy = function(t) {
        this._geometry.refCount--,
        this._geometry.refCount === 0 && this._geometry.dispose(),
        this._matrix = null,
        this.currentPath = null,
        this._lineStyle.destroy(),
        this._lineStyle = null,
        this._fillStyle.destroy(),
        this._fillStyle = null,
        this._geometry = null,
        this.shader = null,
        this.vertexData = null,
        this.batches.length = 0,
        this.batches = null,
        i.prototype.destroy.call(this, t)
    }
    ,
    r._TEMP_POINT = new V,
    r
}(ot);
var es = function(i, r) {
    return es = Object.setPrototypeOf || {
        __proto__: []
    }instanceof Array && function(t, e) {
        t.__proto__ = e
    }
    || function(t, e) {
        for (var n in e)
            e.hasOwnProperty(n) && (t[n] = e[n])
    }
    ,
    es(i, r)
};
function yf(i, r) {
    es(i, r);
    function t() {
        this.constructor = i
    }
    i.prototype = r === null ? Object.create(r) : (t.prototype = r.prototype,
    new t)
}
var xr = new V
  , gf = new Uint16Array([0, 1, 2, 0, 2, 3])
  , vt = function(i) {
    yf(r, i);
    function r(t) {
        var e = i.call(this) || this;
        return e._anchor = new te(e._onAnchorUpdate,e,t ? t.defaultAnchor.x : 0,t ? t.defaultAnchor.y : 0),
        e._texture = null,
        e._width = 0,
        e._height = 0,
        e._tint = null,
        e._tintRGB = null,
        e.tint = 16777215,
        e.blendMode = M.NORMAL,
        e._cachedTint = 16777215,
        e.uvs = null,
        e.texture = t || L.EMPTY,
        e.vertexData = new Float32Array(8),
        e.vertexTrimmedData = null,
        e._transformID = -1,
        e._textureID = -1,
        e._transformTrimmedID = -1,
        e._textureTrimmedID = -1,
        e.indices = gf,
        e.pluginName = "batch",
        e.isSprite = !0,
        e._roundPixels = R.ROUND_PIXELS,
        e
    }
    return r.prototype._onTextureUpdate = function() {
        this._textureID = -1,
        this._textureTrimmedID = -1,
        this._cachedTint = 16777215,
        this._width && (this.scale.x = fe(this.scale.x) * this._width / this._texture.orig.width),
        this._height && (this.scale.y = fe(this.scale.y) * this._height / this._texture.orig.height)
    }
    ,
    r.prototype._onAnchorUpdate = function() {
        this._transformID = -1,
        this._transformTrimmedID = -1
    }
    ,
    r.prototype.calculateVertices = function() {
        var t = this._texture;
        if (!(this._transformID === this.transform._worldID && this._textureID === t._updateID)) {
            this._textureID !== t._updateID && (this.uvs = this._texture._uvs.uvsFloat32),
            this._transformID = this.transform._worldID,
            this._textureID = t._updateID;
            var e = this.transform.worldTransform
              , n = e.a
              , s = e.b
              , a = e.c
              , o = e.d
              , h = e.tx
              , u = e.ty
              , l = this.vertexData
              , f = t.trim
              , c = t.orig
              , d = this._anchor
              , p = 0
              , v = 0
              , m = 0
              , g = 0;
            if (f ? (v = f.x - d._x * c.width,
            p = v + f.width,
            g = f.y - d._y * c.height,
            m = g + f.height) : (v = -d._x * c.width,
            p = v + c.width,
            g = -d._y * c.height,
            m = g + c.height),
            l[0] = n * v + a * g + h,
            l[1] = o * g + s * v + u,
            l[2] = n * p + a * g + h,
            l[3] = o * g + s * p + u,
            l[4] = n * p + a * m + h,
            l[5] = o * m + s * p + u,
            l[6] = n * v + a * m + h,
            l[7] = o * m + s * v + u,
            this._roundPixels)
                for (var w = R.RESOLUTION, y = 0; y < l.length; ++y)
                    l[y] = Math.round((l[y] * w | 0) / w)
        }
    }
    ,
    r.prototype.calculateTrimmedVertices = function() {
        if (!this.vertexTrimmedData)
            this.vertexTrimmedData = new Float32Array(8);
        else if (this._transformTrimmedID === this.transform._worldID && this._textureTrimmedID === this._texture._updateID)
            return;
        this._transformTrimmedID = this.transform._worldID,
        this._textureTrimmedID = this._texture._updateID;
        var t = this._texture
          , e = this.vertexTrimmedData
          , n = t.orig
          , s = this._anchor
          , a = this.transform.worldTransform
          , o = a.a
          , h = a.b
          , u = a.c
          , l = a.d
          , f = a.tx
          , c = a.ty
          , d = -s._x * n.width
          , p = d + n.width
          , v = -s._y * n.height
          , m = v + n.height;
        e[0] = o * d + u * v + f,
        e[1] = l * v + h * d + c,
        e[2] = o * p + u * v + f,
        e[3] = l * v + h * p + c,
        e[4] = o * p + u * m + f,
        e[5] = l * m + h * p + c,
        e[6] = o * d + u * m + f,
        e[7] = l * m + h * d + c
    }
    ,
    r.prototype._render = function(t) {
        this.calculateVertices(),
        t.batch.setObjectRenderer(t.plugins[this.pluginName]),
        t.plugins[this.pluginName].render(this)
    }
    ,
    r.prototype._calculateBounds = function() {
        var t = this._texture.trim
          , e = this._texture.orig;
        !t || t.width === e.width && t.height === e.height ? (this.calculateVertices(),
        this._bounds.addQuad(this.vertexData)) : (this.calculateTrimmedVertices(),
        this._bounds.addQuad(this.vertexTrimmedData))
    }
    ,
    r.prototype.getLocalBounds = function(t) {
        return this.children.length === 0 ? (this._bounds.minX = this._texture.orig.width * -this._anchor._x,
        this._bounds.minY = this._texture.orig.height * -this._anchor._y,
        this._bounds.maxX = this._texture.orig.width * (1 - this._anchor._x),
        this._bounds.maxY = this._texture.orig.height * (1 - this._anchor._y),
        t || (this._localBoundsRect || (this._localBoundsRect = new j),
        t = this._localBoundsRect),
        this._bounds.getRectangle(t)) : i.prototype.getLocalBounds.call(this, t)
    }
    ,
    r.prototype.containsPoint = function(t) {
        this.worldTransform.applyInverse(t, xr);
        var e = this._texture.orig.width
          , n = this._texture.orig.height
          , s = -e * this.anchor.x
          , a = 0;
        return !!(xr.x >= s && xr.x < s + e && (a = -n * this.anchor.y,
        xr.y >= a && xr.y < a + n))
    }
    ,
    r.prototype.destroy = function(t) {
        i.prototype.destroy.call(this, t),
        this._texture.off("update", this._onTextureUpdate, this),
        this._anchor = null;
        var e = typeof t == "boolean" ? t : t && t.texture;
        if (e) {
            var n = typeof t == "boolean" ? t : t && t.baseTexture;
            this._texture.destroy(!!n)
        }
        this._texture = null
    }
    ,
    r.from = function(t, e) {
        var n = t instanceof L ? t : L.from(t, e);
        return new r(n)
    }
    ,
    Object.defineProperty(r.prototype, "roundPixels", {
        get: function() {
            return this._roundPixels
        },
        set: function(t) {
            this._roundPixels !== t && (this._transformID = -1),
            this._roundPixels = t
        },
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(r.prototype, "width", {
        get: function() {
            return Math.abs(this.scale.x) * this._texture.orig.width
        },
        set: function(t) {
            var e = fe(this.scale.x) || 1;
            this.scale.x = e * t / this._texture.orig.width,
            this._width = t
        },
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(r.prototype, "height", {
        get: function() {
            return Math.abs(this.scale.y) * this._texture.orig.height
        },
        set: function(t) {
            var e = fe(this.scale.y) || 1;
            this.scale.y = e * t / this._texture.orig.height,
            this._height = t
        },
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(r.prototype, "anchor", {
        get: function() {
            return this._anchor
        },
        set: function(t) {
            this._anchor.copyFrom(t)
        },
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(r.prototype, "tint", {
        get: function() {
            return this._tint
        },
        set: function(t) {
            this._tint = t,
            this._tintRGB = (t >> 16) + (t & 65280) + ((t & 255) << 16)
        },
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(r.prototype, "texture", {
        get: function() {
            return this._texture
        },
        set: function(t) {
            this._texture !== t && (this._texture && this._texture.off("update", this._onTextureUpdate, this),
            this._texture = t || L.EMPTY,
            this._cachedTint = 16777215,
            this._textureID = -1,
            this._textureTrimmedID = -1,
            t && (t.baseTexture.valid ? this._onTextureUpdate() : t.once("update", this._onTextureUpdate, this)))
        },
        enumerable: !1,
        configurable: !0
    }),
    r
}(ot);
var rs = function(i, r) {
    return rs = Object.setPrototypeOf || {
        __proto__: []
    }instanceof Array && function(t, e) {
        t.__proto__ = e
    }
    || function(t, e) {
        for (var n in e)
            e.hasOwnProperty(n) && (t[n] = e[n])
    }
    ,
    rs(i, r)
};
function _f(i, r) {
    rs(i, r);
    function t() {
        this.constructor = i
    }
    i.prototype = r === null ? Object.create(r) : (t.prototype = r.prototype,
    new t)
}
var Pe;
(function(i) {
    i[i.LINEAR_VERTICAL = 0] = "LINEAR_VERTICAL",
    i[i.LINEAR_HORIZONTAL = 1] = "LINEAR_HORIZONTAL"
}
)(Pe || (Pe = {}));
var is = {
    align: "left",
    breakWords: !1,
    dropShadow: !1,
    dropShadowAlpha: 1,
    dropShadowAngle: Math.PI / 6,
    dropShadowBlur: 0,
    dropShadowColor: "black",
    dropShadowDistance: 5,
    fill: "black",
    fillGradientType: Pe.LINEAR_VERTICAL,
    fillGradientStops: [],
    fontFamily: "Arial",
    fontSize: 26,
    fontStyle: "normal",
    fontVariant: "normal",
    fontWeight: "normal",
    letterSpacing: 0,
    lineHeight: 0,
    lineJoin: "miter",
    miterLimit: 10,
    padding: 0,
    stroke: "black",
    strokeThickness: 0,
    textBaseline: "alphabetic",
    trim: !1,
    whiteSpace: "pre",
    wordWrap: !1,
    wordWrapWidth: 100,
    leading: 0
}
  , xf = ["serif", "sans-serif", "monospace", "cursive", "fantasy", "system-ui"]
  , mt = function() {
    function i(r) {
        this.styleID = 0,
        this.reset(),
        ss(this, r, r)
    }
    return i.prototype.clone = function() {
        var r = {};
        return ss(r, this, is),
        new i(r)
    }
    ,
    i.prototype.reset = function() {
        ss(this, is, is)
    }
    ,
    Object.defineProperty(i.prototype, "align", {
        get: function() {
            return this._align
        },
        set: function(r) {
            this._align !== r && (this._align = r,
            this.styleID++)
        },
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(i.prototype, "breakWords", {
        get: function() {
            return this._breakWords
        },
        set: function(r) {
            this._breakWords !== r && (this._breakWords = r,
            this.styleID++)
        },
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(i.prototype, "dropShadow", {
        get: function() {
            return this._dropShadow
        },
        set: function(r) {
            this._dropShadow !== r && (this._dropShadow = r,
            this.styleID++)
        },
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(i.prototype, "dropShadowAlpha", {
        get: function() {
            return this._dropShadowAlpha
        },
        set: function(r) {
            this._dropShadowAlpha !== r && (this._dropShadowAlpha = r,
            this.styleID++)
        },
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(i.prototype, "dropShadowAngle", {
        get: function() {
            return this._dropShadowAngle
        },
        set: function(r) {
            this._dropShadowAngle !== r && (this._dropShadowAngle = r,
            this.styleID++)
        },
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(i.prototype, "dropShadowBlur", {
        get: function() {
            return this._dropShadowBlur
        },
        set: function(r) {
            this._dropShadowBlur !== r && (this._dropShadowBlur = r,
            this.styleID++)
        },
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(i.prototype, "dropShadowColor", {
        get: function() {
            return this._dropShadowColor
        },
        set: function(r) {
            var t = ns(r);
            this._dropShadowColor !== t && (this._dropShadowColor = t,
            this.styleID++)
        },
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(i.prototype, "dropShadowDistance", {
        get: function() {
            return this._dropShadowDistance
        },
        set: function(r) {
            this._dropShadowDistance !== r && (this._dropShadowDistance = r,
            this.styleID++)
        },
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(i.prototype, "fill", {
        get: function() {
            return this._fill
        },
        set: function(r) {
            var t = ns(r);
            this._fill !== t && (this._fill = t,
            this.styleID++)
        },
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(i.prototype, "fillGradientType", {
        get: function() {
            return this._fillGradientType
        },
        set: function(r) {
            this._fillGradientType !== r && (this._fillGradientType = r,
            this.styleID++)
        },
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(i.prototype, "fillGradientStops", {
        get: function() {
            return this._fillGradientStops
        },
        set: function(r) {
            bf(this._fillGradientStops, r) || (this._fillGradientStops = r,
            this.styleID++)
        },
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(i.prototype, "fontFamily", {
        get: function() {
            return this._fontFamily
        },
        set: function(r) {
            this.fontFamily !== r && (this._fontFamily = r,
            this.styleID++)
        },
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(i.prototype, "fontSize", {
        get: function() {
            return this._fontSize
        },
        set: function(r) {
            this._fontSize !== r && (this._fontSize = r,
            this.styleID++)
        },
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(i.prototype, "fontStyle", {
        get: function() {
            return this._fontStyle
        },
        set: function(r) {
            this._fontStyle !== r && (this._fontStyle = r,
            this.styleID++)
        },
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(i.prototype, "fontVariant", {
        get: function() {
            return this._fontVariant
        },
        set: function(r) {
            this._fontVariant !== r && (this._fontVariant = r,
            this.styleID++)
        },
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(i.prototype, "fontWeight", {
        get: function() {
            return this._fontWeight
        },
        set: function(r) {
            this._fontWeight !== r && (this._fontWeight = r,
            this.styleID++)
        },
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(i.prototype, "letterSpacing", {
        get: function() {
            return this._letterSpacing
        },
        set: function(r) {
            this._letterSpacing !== r && (this._letterSpacing = r,
            this.styleID++)
        },
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(i.prototype, "lineHeight", {
        get: function() {
            return this._lineHeight
        },
        set: function(r) {
            this._lineHeight !== r && (this._lineHeight = r,
            this.styleID++)
        },
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(i.prototype, "leading", {
        get: function() {
            return this._leading
        },
        set: function(r) {
            this._leading !== r && (this._leading = r,
            this.styleID++)
        },
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(i.prototype, "lineJoin", {
        get: function() {
            return this._lineJoin
        },
        set: function(r) {
            this._lineJoin !== r && (this._lineJoin = r,
            this.styleID++)
        },
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(i.prototype, "miterLimit", {
        get: function() {
            return this._miterLimit
        },
        set: function(r) {
            this._miterLimit !== r && (this._miterLimit = r,
            this.styleID++)
        },
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(i.prototype, "padding", {
        get: function() {
            return this._padding
        },
        set: function(r) {
            this._padding !== r && (this._padding = r,
            this.styleID++)
        },
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(i.prototype, "stroke", {
        get: function() {
            return this._stroke
        },
        set: function(r) {
            var t = ns(r);
            this._stroke !== t && (this._stroke = t,
            this.styleID++)
        },
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(i.prototype, "strokeThickness", {
        get: function() {
            return this._strokeThickness
        },
        set: function(r) {
            this._strokeThickness !== r && (this._strokeThickness = r,
            this.styleID++)
        },
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(i.prototype, "textBaseline", {
        get: function() {
            return this._textBaseline
        },
        set: function(r) {
            this._textBaseline !== r && (this._textBaseline = r,
            this.styleID++)
        },
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(i.prototype, "trim", {
        get: function() {
            return this._trim
        },
        set: function(r) {
            this._trim !== r && (this._trim = r,
            this.styleID++)
        },
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(i.prototype, "whiteSpace", {
        get: function() {
            return this._whiteSpace
        },
        set: function(r) {
            this._whiteSpace !== r && (this._whiteSpace = r,
            this.styleID++)
        },
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(i.prototype, "wordWrap", {
        get: function() {
            return this._wordWrap
        },
        set: function(r) {
            this._wordWrap !== r && (this._wordWrap = r,
            this.styleID++)
        },
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(i.prototype, "wordWrapWidth", {
        get: function() {
            return this._wordWrapWidth
        },
        set: function(r) {
            this._wordWrapWidth !== r && (this._wordWrapWidth = r,
            this.styleID++)
        },
        enumerable: !1,
        configurable: !0
    }),
    i.prototype.toFontString = function() {
        var r = typeof this.fontSize == "number" ? this.fontSize + "px" : this.fontSize
          , t = this.fontFamily;
        Array.isArray(this.fontFamily) || (t = this.fontFamily.split(","));
        for (var e = t.length - 1; e >= 0; e--) {
            var n = t[e].trim();
            !/([\"\'])[^\'\"]+\1/.test(n) && xf.indexOf(n) < 0 && (n = '"' + n + '"'),
            t[e] = n
        }
        return this.fontStyle + " " + this.fontVariant + " " + this.fontWeight + " " + r + " " + t.join(",")
    }
    ,
    i
}();
function Wo(i) {
    return typeof i == "number" ? Ui(i) : (typeof i == "string" && i.indexOf("0x") === 0 && (i = i.replace("0x", "#")),
    i)
}
function ns(i) {
    if (Array.isArray(i)) {
        for (var r = 0; r < i.length; ++r)
            i[r] = Wo(i[r]);
        return i
    } else
        return Wo(i)
}
function bf(i, r) {
    if (!Array.isArray(i) || !Array.isArray(r) || i.length !== r.length)
        return !1;
    for (var t = 0; t < i.length; ++t)
        if (i[t] !== r[t])
            return !1;
    return !0
}
function ss(i, r, t) {
    for (var e in t)
        Array.isArray(r[e]) ? i[e] = r[e].slice() : i[e] = r[e]
}
var yt = function() {
    function i(r, t, e, n, s, a, o, h, u) {
        this.text = r,
        this.style = t,
        this.width = e,
        this.height = n,
        this.lines = s,
        this.lineWidths = a,
        this.lineHeight = o,
        this.maxLineWidth = h,
        this.fontProperties = u
    }
    return i.measureText = function(r, t, e, n) {
        n === void 0 && (n = i._canvas),
        e = e == null ? t.wordWrap : e;
        var s = t.toFontString()
          , a = i.measureFont(s);
        a.fontSize === 0 && (a.fontSize = t.fontSize,
        a.ascent = t.fontSize);
        var o = n.getContext("2d");
        o.font = s;
        for (var h = e ? i.wordWrap(r, t, n) : r, u = h.split(/(?:\r\n|\r|\n)/), l = new Array(u.length), f = 0, c = 0; c < u.length; c++) {
            var d = o.measureText(u[c]).width + (u[c].length - 1) * t.letterSpacing;
            l[c] = d,
            f = Math.max(f, d)
        }
        var p = f + t.strokeThickness;
        t.dropShadow && (p += t.dropShadowDistance);
        var v = t.lineHeight || a.fontSize + t.strokeThickness
          , m = Math.max(v, a.fontSize + t.strokeThickness) + (u.length - 1) * (v + t.leading);
        return t.dropShadow && (m += t.dropShadowDistance),
        new i(r,t,p,m,u,l,v + t.leading,f,a)
    }
    ,
    i.wordWrap = function(r, t, e) {
        e === void 0 && (e = i._canvas);
        for (var n = e.getContext("2d"), s = 0, a = "", o = "", h = Object.create(null), u = t.letterSpacing, l = t.whiteSpace, f = i.collapseSpaces(l), c = i.collapseNewlines(l), d = !f, p = t.wordWrapWidth + u, v = i.tokenize(r), m = 0; m < v.length; m++) {
            var g = v[m];
            if (i.isNewline(g)) {
                if (!c) {
                    o += i.addLine(a),
                    d = !f,
                    a = "",
                    s = 0;
                    continue
                }
                g = " "
            }
            if (f) {
                var w = i.isBreakingSpace(g)
                  , y = i.isBreakingSpace(a[a.length - 1]);
                if (w && y)
                    continue
            }
            var I = i.getFromCache(g, u, h, n);
            if (I > p)
                if (a !== "" && (o += i.addLine(a),
                a = "",
                s = 0),
                i.canBreakWords(g, t.breakWords))
                    for (var x = i.wordWrapSplit(g), b = 0; b < x.length; b++) {
                        for (var D = x[b], U = 1; x[b + U]; ) {
                            var P = x[b + U]
                              , _ = D[D.length - 1];
                            if (!i.canBreakChars(_, P, g, b, t.breakWords))
                                D += P;
                            else
                                break;
                            U++
                        }
                        b += D.length - 1;
                        var C = i.getFromCache(D, u, h, n);
                        C + s > p && (o += i.addLine(a),
                        d = !1,
                        a = "",
                        s = 0),
                        a += D,
                        s += C
                    }
                else {
                    a.length > 0 && (o += i.addLine(a),
                    a = "",
                    s = 0);
                    var O = m === v.length - 1;
                    o += i.addLine(g, !O),
                    d = !1,
                    a = "",
                    s = 0
                }
            else
                I + s > p && (d = !1,
                o += i.addLine(a),
                a = "",
                s = 0),
                (a.length > 0 || !i.isBreakingSpace(g) || d) && (a += g,
                s += I)
        }
        return o += i.addLine(a, !1),
        o
    }
    ,
    i.addLine = function(r, t) {
        return t === void 0 && (t = !0),
        r = i.trimRight(r),
        r = t ? r + `
` : r,
        r
    }
    ,
    i.getFromCache = function(r, t, e, n) {
        var s = e[r];
        if (typeof s != "number") {
            var a = r.length * t;
            s = n.measureText(r).width + a,
            e[r] = s
        }
        return s
    }
    ,
    i.collapseSpaces = function(r) {
        return r === "normal" || r === "pre-line"
    }
    ,
    i.collapseNewlines = function(r) {
        return r === "normal"
    }
    ,
    i.trimRight = function(r) {
        if (typeof r != "string")
            return "";
        for (var t = r.length - 1; t >= 0; t--) {
            var e = r[t];
            if (!i.isBreakingSpace(e))
                break;
            r = r.slice(0, -1)
        }
        return r
    }
    ,
    i.isNewline = function(r) {
        return typeof r != "string" ? !1 : i._newlines.indexOf(r.charCodeAt(0)) >= 0
    }
    ,
    i.isBreakingSpace = function(r) {
        return typeof r != "string" ? !1 : i._breakingSpaces.indexOf(r.charCodeAt(0)) >= 0
    }
    ,
    i.tokenize = function(r) {
        var t = []
          , e = "";
        if (typeof r != "string")
            return t;
        for (var n = 0; n < r.length; n++) {
            var s = r[n];
            if (i.isBreakingSpace(s) || i.isNewline(s)) {
                e !== "" && (t.push(e),
                e = ""),
                t.push(s);
                continue
            }
            e += s
        }
        return e !== "" && t.push(e),
        t
    }
    ,
    i.canBreakWords = function(r, t) {
        return t
    }
    ,
    i.canBreakChars = function(r, t, e, n, s) {
        return !0
    }
    ,
    i.wordWrapSplit = function(r) {
        return r.split("")
    }
    ,
    i.measureFont = function(r) {
        if (i._fonts[r])
            return i._fonts[r];
        var t = {
            ascent: 0,
            descent: 0,
            fontSize: 0
        }
          , e = i._canvas
          , n = i._context;
        n.font = r;
        var s = i.METRICS_STRING + i.BASELINE_SYMBOL
          , a = Math.ceil(n.measureText(s).width)
          , o = Math.ceil(n.measureText(i.BASELINE_SYMBOL).width)
          , h = 2 * o;
        o = o * i.BASELINE_MULTIPLIER | 0,
        e.width = a,
        e.height = h,
        n.fillStyle = "#f00",
        n.fillRect(0, 0, a, h),
        n.font = r,
        n.textBaseline = "alphabetic",
        n.fillStyle = "#000",
        n.fillText(s, 0, o);
        var u = n.getImageData(0, 0, a, h).data
          , l = u.length
          , f = a * 4
          , c = 0
          , d = 0
          , p = !1;
        for (c = 0; c < o; ++c) {
            for (var v = 0; v < f; v += 4)
                if (u[d + v] !== 255) {
                    p = !0;
                    break
                }
            if (!p)
                d += f;
            else
                break
        }
        for (t.ascent = o - c,
        d = l - f,
        p = !1,
        c = h; c > o; --c) {
            for (var v = 0; v < f; v += 4)
                if (u[d + v] !== 255) {
                    p = !0;
                    break
                }
            if (!p)
                d -= f;
            else
                break
        }
        return t.descent = c - o,
        t.fontSize = t.ascent + t.descent,
        i._fonts[r] = t,
        t
    }
    ,
    i.clearMetrics = function(r) {
        r === void 0 && (r = ""),
        r ? delete i._fonts[r] : i._fonts = {}
    }
    ,
    i
}()
  , ci = function() {
    try {
        var i = new OffscreenCanvas(0,0)
          , r = i.getContext("2d");
        return r && r.measureText ? i : document.createElement("canvas")
    } catch (t) {
        return document.createElement("canvas")
    }
}();
ci.width = ci.height = 10;
yt._canvas = ci;
yt._context = ci.getContext("2d");
yt._fonts = {};
yt.METRICS_STRING = "|\xC9q\xC5";
yt.BASELINE_SYMBOL = "M";
yt.BASELINE_MULTIPLIER = 1.4;
yt._newlines = [10, 13];
yt._breakingSpaces = [9, 32, 8192, 8193, 8194, 8195, 8196, 8197, 8198, 8200, 8201, 8202, 8287, 12288];
var Tf = {
    texture: !0,
    children: !1,
    baseTexture: !0
}
  , Pt = function(i) {
    _f(r, i);
    function r(t, e, n) {
        var s = this
          , a = !1;
        n || (n = document.createElement("canvas"),
        a = !0),
        n.width = 3,
        n.height = 3;
        var o = L.from(n);
        return o.orig = new j,
        o.trim = new j,
        s = i.call(this, o) || this,
        s._ownCanvas = a,
        s.canvas = n,
        s.context = s.canvas.getContext("2d"),
        s._resolution = R.RESOLUTION,
        s._autoResolution = !0,
        s._text = null,
        s._style = null,
        s._styleListener = null,
        s._font = "",
        s.text = t,
        s.style = e,
        s.localStyleID = -1,
        s
    }
    return r.prototype.updateText = function(t) {
        var e = this._style;
        if (this.localStyleID !== e.styleID && (this.dirty = !0,
        this.localStyleID = e.styleID),
        !(!this.dirty && t)) {
            this._font = this._style.toFontString();
            var n = this.context
              , s = yt.measureText(this._text || " ", this._style, this._style.wordWrap, this.canvas)
              , a = s.width
              , o = s.height
              , h = s.lines
              , u = s.lineHeight
              , l = s.lineWidths
              , f = s.maxLineWidth
              , c = s.fontProperties;
            this.canvas.width = Math.ceil((Math.max(1, a) + e.padding * 2) * this._resolution),
            this.canvas.height = Math.ceil((Math.max(1, o) + e.padding * 2) * this._resolution),
            n.scale(this._resolution, this._resolution),
            n.clearRect(0, 0, this.canvas.width, this.canvas.height),
            n.font = this._font,
            n.lineWidth = e.strokeThickness,
            n.textBaseline = e.textBaseline,
            n.lineJoin = e.lineJoin,
            n.miterLimit = e.miterLimit;
            for (var d, p, v = e.dropShadow ? 2 : 1, m = 0; m < v; ++m) {
                var g = e.dropShadow && m === 0
                  , w = g ? Math.ceil(Math.max(1, o) + e.padding * 2) : 0
                  , y = w * this._resolution;
                if (g) {
                    n.fillStyle = "black",
                    n.strokeStyle = "black";
                    var I = e.dropShadowColor
                      , x = ue(typeof I == "number" ? I : Bi(I));
                    n.shadowColor = "rgba(" + x[0] * 255 + "," + x[1] * 255 + "," + x[2] * 255 + "," + e.dropShadowAlpha + ")",
                    n.shadowBlur = e.dropShadowBlur,
                    n.shadowOffsetX = Math.cos(e.dropShadowAngle) * e.dropShadowDistance,
                    n.shadowOffsetY = Math.sin(e.dropShadowAngle) * e.dropShadowDistance + y
                } else
                    n.fillStyle = this._generateFillStyle(e, h, s),
                    n.strokeStyle = e.stroke,
                    n.shadowColor = "black",
                    n.shadowBlur = 0,
                    n.shadowOffsetX = 0,
                    n.shadowOffsetY = 0;
                for (var b = 0; b < h.length; b++)
                    d = e.strokeThickness / 2,
                    p = e.strokeThickness / 2 + b * u + c.ascent,
                    e.align === "right" ? d += f - l[b] : e.align === "center" && (d += (f - l[b]) / 2),
                    e.stroke && e.strokeThickness && this.drawLetterSpacing(h[b], d + e.padding, p + e.padding - w, !0),
                    e.fill && this.drawLetterSpacing(h[b], d + e.padding, p + e.padding - w)
            }
            this.updateTexture()
        }
    }
    ,
    r.prototype.drawLetterSpacing = function(t, e, n, s) {
        s === void 0 && (s = !1);
        var a = this._style
          , o = a.letterSpacing;
        if (o === 0) {
            s ? this.context.strokeText(t, e, n) : this.context.fillText(t, e, n);
            return
        }
        for (var h = e, u = Array.from ? Array.from(t) : t.split(""), l = this.context.measureText(t).width, f = 0, c = 0; c < u.length; ++c) {
            var d = u[c];
            s ? this.context.strokeText(d, h, n) : this.context.fillText(d, h, n),
            f = this.context.measureText(t.substring(c + 1)).width,
            h += l - f + o,
            l = f
        }
    }
    ,
    r.prototype.updateTexture = function() {
        var t = this.canvas;
        if (this._style.trim) {
            var e = La(t);
            e.data && (t.width = e.width,
            t.height = e.height,
            this.context.putImageData(e.data, 0, 0))
        }
        var n = this._texture
          , s = this._style
          , a = s.trim ? 0 : s.padding
          , o = n.baseTexture;
        n.trim.width = n._frame.width = Math.ceil(t.width / this._resolution),
        n.trim.height = n._frame.height = Math.ceil(t.height / this._resolution),
        n.trim.x = -a,
        n.trim.y = -a,
        n.orig.width = n._frame.width - a * 2,
        n.orig.height = n._frame.height - a * 2,
        this._onTextureUpdate(),
        o.setRealSize(t.width, t.height, this._resolution),
        this._recursivePostUpdateTransform(),
        this.dirty = !1
    }
    ,
    r.prototype._render = function(t) {
        this._autoResolution && this._resolution !== t.resolution && (this._resolution = t.resolution,
        this.dirty = !0),
        this.updateText(!0),
        i.prototype._render.call(this, t)
    }
    ,
    r.prototype.getLocalBounds = function(t) {
        return this.updateText(!0),
        i.prototype.getLocalBounds.call(this, t)
    }
    ,
    r.prototype._calculateBounds = function() {
        this.updateText(!0),
        this.calculateVertices(),
        this._bounds.addQuad(this.vertexData)
    }
    ,
    r.prototype._generateFillStyle = function(t, e, n) {
        var s = t.fill;
        if (Array.isArray(s)) {
            if (s.length === 1)
                return s[0]
        } else
            return s;
        var a, o = t.dropShadow ? t.dropShadowDistance : 0, h = t.padding || 0, u = Math.ceil(this.canvas.width / this._resolution) - o - h * 2, l = Math.ceil(this.canvas.height / this._resolution) - o - h * 2, f = s.slice(), c = t.fillGradientStops.slice();
        if (!c.length)
            for (var d = f.length + 1, p = 1; p < d; ++p)
                c.push(p / d);
        if (f.unshift(s[0]),
        c.unshift(0),
        f.push(s[s.length - 1]),
        c.push(1),
        t.fillGradientType === Pe.LINEAR_VERTICAL) {
            a = this.context.createLinearGradient(u / 2, h, u / 2, l + h);
            for (var v = 0, m = n.fontProperties.fontSize + t.strokeThickness, g = m / l, p = 0; p < e.length; p++)
                for (var w = n.lineHeight * p, y = 0; y < f.length; y++) {
                    var I = 0;
                    typeof c[y] == "number" ? I = c[y] : I = y / f.length;
                    var x = w / l + I * g
                      , b = Math.max(v, x);
                    b = Math.min(b, 1),
                    a.addColorStop(b, f[y]),
                    v = b
                }
        } else {
            a = this.context.createLinearGradient(h, l / 2, u + h, l / 2);
            for (var D = f.length + 1, U = 1, p = 0; p < f.length; p++) {
                var P = void 0;
                typeof c[p] == "number" ? P = c[p] : P = U / D,
                a.addColorStop(P, f[p]),
                U++
            }
        }
        return a
    }
    ,
    r.prototype.destroy = function(t) {
        typeof t == "boolean" && (t = {
            children: t
        }),
        t = Object.assign({}, Tf, t),
        i.prototype.destroy.call(this, t),
        this._ownCanvas && (this.canvas.height = this.canvas.width = 0),
        this.context = null,
        this.canvas = null,
        this._style = null
    }
    ,
    Object.defineProperty(r.prototype, "width", {
        get: function() {
            return this.updateText(!0),
            Math.abs(this.scale.x) * this._texture.orig.width
        },
        set: function(t) {
            this.updateText(!0);
            var e = fe(this.scale.x) || 1;
            this.scale.x = e * t / this._texture.orig.width,
            this._width = t
        },
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(r.prototype, "height", {
        get: function() {
            return this.updateText(!0),
            Math.abs(this.scale.y) * this._texture.orig.height
        },
        set: function(t) {
            this.updateText(!0);
            var e = fe(this.scale.y) || 1;
            this.scale.y = e * t / this._texture.orig.height,
            this._height = t
        },
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(r.prototype, "style", {
        get: function() {
            return this._style
        },
        set: function(t) {
            t = t || {},
            t instanceof mt ? this._style = t : this._style = new mt(t),
            this.localStyleID = -1,
            this.dirty = !0
        },
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(r.prototype, "text", {
        get: function() {
            return this._text
        },
        set: function(t) {
            t = String(t == null ? "" : t),
            this._text !== t && (this._text = t,
            this.dirty = !0)
        },
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(r.prototype, "resolution", {
        get: function() {
            return this._resolution
        },
        set: function(t) {
            this._autoResolution = !1,
            this._resolution !== t && (this._resolution = t,
            this.dirty = !0)
        },
        enumerable: !1,
        configurable: !0
    }),
    r
}(vt);
R.UPLOADS_PER_FRAME = 4;
var as = function(i, r) {
    return as = Object.setPrototypeOf || {
        __proto__: []
    }instanceof Array && function(t, e) {
        t.__proto__ = e
    }
    || function(t, e) {
        for (var n in e)
            e.hasOwnProperty(n) && (t[n] = e[n])
    }
    ,
    as(i, r)
};
function wf(i, r) {
    as(i, r);
    function t() {
        this.constructor = i
    }
    i.prototype = r === null ? Object.create(r) : (t.prototype = r.prototype,
    new t)
}
var os = function() {
    function i(r) {
        this.maxItemsPerFrame = r,
        this.itemsLeft = 0
    }
    return i.prototype.beginFrame = function() {
        this.itemsLeft = this.maxItemsPerFrame
    }
    ,
    i.prototype.allowedToUpload = function() {
        return this.itemsLeft-- > 0
    }
    ,
    i
}();
function Pf(i, r) {
    var t = !1;
    if (i && i._textures && i._textures.length) {
        for (var e = 0; e < i._textures.length; e++)
            if (i._textures[e]instanceof L) {
                var n = i._textures[e].baseTexture;
                r.indexOf(n) === -1 && (r.push(n),
                t = !0)
            }
    }
    return t
}
function If(i, r) {
    if (i.baseTexture instanceof q) {
        var t = i.baseTexture;
        return r.indexOf(t) === -1 && r.push(t),
        !0
    }
    return !1
}
function Sf(i, r) {
    if (i._texture && i._texture instanceof L) {
        var t = i._texture.baseTexture;
        return r.indexOf(t) === -1 && r.push(t),
        !0
    }
    return !1
}
function Cf(i, r) {
    return r instanceof Pt ? (r.updateText(!0),
    !0) : !1
}
function Ef(i, r) {
    if (r instanceof mt) {
        var t = r.toFontString();
        return yt.measureFont(t),
        !0
    }
    return !1
}
function Af(i, r) {
    if (i instanceof Pt) {
        r.indexOf(i.style) === -1 && r.push(i.style),
        r.indexOf(i) === -1 && r.push(i);
        var t = i._texture.baseTexture;
        return r.indexOf(t) === -1 && r.push(t),
        !0
    }
    return !1
}
function Of(i, r) {
    return i instanceof mt ? (r.indexOf(i) === -1 && r.push(i),
    !0) : !1
}
var hs = function() {
    function i(r) {
        var t = this;
        this.limiter = new os(R.UPLOADS_PER_FRAME),
        this.renderer = r,
        this.uploadHookHelper = null,
        this.queue = [],
        this.addHooks = [],
        this.uploadHooks = [],
        this.completes = [],
        this.ticking = !1,
        this.delayedTick = function() {
            !t.queue || t.prepareItems()
        }
        ,
        this.registerFindHook(Af),
        this.registerFindHook(Of),
        this.registerFindHook(Pf),
        this.registerFindHook(If),
        this.registerFindHook(Sf),
        this.registerUploadHook(Cf),
        this.registerUploadHook(Ef)
    }
    return i.prototype.upload = function(r, t) {
        typeof r == "function" && (t = r,
        r = null),
        r && this.add(r),
        this.queue.length ? (t && this.completes.push(t),
        this.ticking || (this.ticking = !0,
        it.system.addOnce(this.tick, this, wt.UTILITY))) : t && t()
    }
    ,
    i.prototype.tick = function() {
        setTimeout(this.delayedTick, 0)
    }
    ,
    i.prototype.prepareItems = function() {
        for (this.limiter.beginFrame(); this.queue.length && this.limiter.allowedToUpload(); ) {
            var r = this.queue[0]
              , t = !1;
            if (r && !r._destroyed) {
                for (var e = 0, n = this.uploadHooks.length; e < n; e++)
                    if (this.uploadHooks[e](this.uploadHookHelper, r)) {
                        this.queue.shift(),
                        t = !0;
                        break
                    }
            }
            t || this.queue.shift()
        }
        if (this.queue.length)
            it.system.addOnce(this.tick, this, wt.UTILITY);
        else {
            this.ticking = !1;
            var s = this.completes.slice(0);
            this.completes.length = 0;
            for (var e = 0, n = s.length; e < n; e++)
                s[e]()
        }
    }
    ,
    i.prototype.registerFindHook = function(r) {
        return r && this.addHooks.push(r),
        this
    }
    ,
    i.prototype.registerUploadHook = function(r) {
        return r && this.uploadHooks.push(r),
        this
    }
    ,
    i.prototype.add = function(r) {
        for (var t = 0, e = this.addHooks.length; t < e && !this.addHooks[t](r, this.queue); t++)
            ;
        if (r instanceof ot)
            for (var t = r.children.length - 1; t >= 0; t--)
                this.add(r.children[t]);
        return this
    }
    ,
    i.prototype.destroy = function() {
        this.ticking && it.system.remove(this.tick, this),
        this.ticking = !1,
        this.addHooks = null,
        this.uploadHooks = null,
        this.renderer = null,
        this.completes = null,
        this.queue = null,
        this.limiter = null,
        this.uploadHookHelper = null
    }
    ,
    i
}();
function qo(i, r) {
    return r instanceof q ? (r._glTextures[i.CONTEXT_UID] || i.texture.bind(r),
    !0) : !1
}
function Rf(i, r) {
    if (!(r instanceof ze))
        return !1;
    var t = r.geometry;
    r.finishPoly(),
    t.updateBatches();
    for (var e = t.batches, n = 0; n < e.length; n++) {
        var s = e[n].style.texture;
        s && qo(i, s.baseTexture)
    }
    return t.batchable || i.geometry.bind(t, r._resolveDirectShader(i)),
    !0
}
function Mf(i, r) {
    return i instanceof ze ? (r.push(i),
    !0) : !1
}
var us = function(i) {
    wf(r, i);
    function r(t) {
        var e = i.call(this, t) || this;
        return e.uploadHookHelper = e.renderer,
        e.registerFindHook(Mf),
        e.registerUploadHook(qo),
        e.registerUploadHook(Rf),
        e
    }
    return r
}(hs)
  , $o = function() {
    function i(r) {
        this.maxMilliseconds = r,
        this.frameStart = 0
    }
    return i.prototype.beginFrame = function() {
        this.frameStart = Date.now()
    }
    ,
    i.prototype.allowedToUpload = function() {
        return Date.now() - this.frameStart < this.maxMilliseconds
    }
    ,
    i
}();
var ls = function() {
    function i(r, t, e) {
        e === void 0 && (e = null),
        this._texture = r instanceof L ? r : null,
        this.baseTexture = r instanceof q ? r : this._texture.baseTexture,
        this.textures = {},
        this.animations = {},
        this.data = t;
        var n = this.baseTexture.resource;
        this.resolution = this._updateResolution(e || (n ? n.url : null)),
        this._frames = this.data.frames,
        this._frameKeys = Object.keys(this._frames),
        this._batchIndex = 0,
        this._callback = null
    }
    return i.prototype._updateResolution = function(r) {
        r === void 0 && (r = null);
        var t = this.data.meta.scale
          , e = ar(r, null);
        return e === null && (e = t !== void 0 ? parseFloat(t) : 1),
        e !== 1 && this.baseTexture.setResolution(e),
        e
    }
    ,
    i.prototype.parse = function(r) {
        this._batchIndex = 0,
        this._callback = r,
        this._frameKeys.length <= i.BATCH_SIZE ? (this._processFrames(0),
        this._processAnimations(),
        this._parseComplete()) : this._nextBatch()
    }
    ,
    i.prototype._processFrames = function(r) {
        for (var t = r, e = i.BATCH_SIZE; t - r < e && t < this._frameKeys.length; ) {
            var n = this._frameKeys[t]
              , s = this._frames[n]
              , a = s.frame;
            if (a) {
                var o = null
                  , h = null
                  , u = s.trimmed !== !1 && s.sourceSize ? s.sourceSize : s.frame
                  , l = new j(0,0,Math.floor(u.w) / this.resolution,Math.floor(u.h) / this.resolution);
                s.rotated ? o = new j(Math.floor(a.x) / this.resolution,Math.floor(a.y) / this.resolution,Math.floor(a.h) / this.resolution,Math.floor(a.w) / this.resolution) : o = new j(Math.floor(a.x) / this.resolution,Math.floor(a.y) / this.resolution,Math.floor(a.w) / this.resolution,Math.floor(a.h) / this.resolution),
                s.trimmed !== !1 && s.spriteSourceSize && (h = new j(Math.floor(s.spriteSourceSize.x) / this.resolution,Math.floor(s.spriteSourceSize.y) / this.resolution,Math.floor(a.w) / this.resolution,Math.floor(a.h) / this.resolution)),
                this.textures[n] = new L(this.baseTexture,o,l,h,s.rotated ? 2 : 0,s.anchor),
                L.addToCache(this.textures[n], n)
            }
            t++
        }
    }
    ,
    i.prototype._processAnimations = function() {
        var r = this.data.animations || {};
        for (var t in r) {
            this.animations[t] = [];
            for (var e = 0; e < r[t].length; e++) {
                var n = r[t][e];
                this.animations[t].push(this.textures[n])
            }
        }
    }
    ,
    i.prototype._parseComplete = function() {
        var r = this._callback;
        this._callback = null,
        this._batchIndex = 0,
        r.call(this, this.textures)
    }
    ,
    i.prototype._nextBatch = function() {
        var r = this;
        this._processFrames(this._batchIndex * i.BATCH_SIZE),
        this._batchIndex++,
        setTimeout(function() {
            r._batchIndex * i.BATCH_SIZE < r._frameKeys.length ? r._nextBatch() : (r._processAnimations(),
            r._parseComplete())
        }, 0)
    }
    ,
    i.prototype.destroy = function(r) {
        var t;
        r === void 0 && (r = !1);
        for (var e in this.textures)
            this.textures[e].destroy();
        this._frames = null,
        this._frameKeys = null,
        this.data = null,
        this.textures = null,
        r && ((t = this._texture) === null || t === void 0 || t.destroy(),
        this.baseTexture.destroy()),
        this._texture = null,
        this.baseTexture = null
    }
    ,
    i.BATCH_SIZE = 1e3,
    i
}()
  , fs = function() {
    function i() {}
    return i.use = function(r, t) {
        var e = this
          , n = r.name + "_image";
        if (!r.data || r.type !== Xe.TYPE.JSON || !r.data.frames || e.resources[n]) {
            t();
            return
        }
        var s = {
            crossOrigin: r.crossOrigin,
            metadata: r.metadata.imageMetadata,
            parentResource: r
        }
          , a = i.getResourcePath(r, e.baseUrl);
        e.add(n, a, s, function(h) {
            if (h.error) {
                t(h.error);
                return
            }
            var u = new ls(h.texture,r.data,r.url);
            u.parse(function() {
                r.spritesheet = u,
                r.textures = u.textures,
                t()
            })
        })
    }
    ,
    i.getResourcePath = function(r, t) {
        return r.isDataUrl ? r.data.meta.image : ba.resolve(r.url.replace(t, ""), r.data.meta.image)
    }
    ,
    i
}();
var cs = function(i, r) {
    return cs = Object.setPrototypeOf || {
        __proto__: []
    }instanceof Array && function(t, e) {
        t.__proto__ = e
    }
    || function(t, e) {
        for (var n in e)
            e.hasOwnProperty(n) && (t[n] = e[n])
    }
    ,
    cs(i, r)
};
function Zo(i, r) {
    cs(i, r);
    function t() {
        this.constructor = i
    }
    i.prototype = r === null ? Object.create(r) : (t.prototype = r.prototype,
    new t)
}
var br = new V
  , Ko = function(i) {
    Zo(r, i);
    function r(t, e, n) {
        e === void 0 && (e = 100),
        n === void 0 && (n = 100);
        var s = i.call(this, t) || this;
        return s.tileTransform = new jr,
        s._width = e,
        s._height = n,
        s.uvMatrix = s.texture.uvMatrix || new cr(t),
        s.pluginName = "tilingSprite",
        s.uvRespectAnchor = !1,
        s
    }
    return Object.defineProperty(r.prototype, "clampMargin", {
        get: function() {
            return this.uvMatrix.clampMargin
        },
        set: function(t) {
            this.uvMatrix.clampMargin = t,
            this.uvMatrix.update(!0)
        },
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(r.prototype, "tileScale", {
        get: function() {
            return this.tileTransform.scale
        },
        set: function(t) {
            this.tileTransform.scale.copyFrom(t)
        },
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(r.prototype, "tilePosition", {
        get: function() {
            return this.tileTransform.position
        },
        set: function(t) {
            this.tileTransform.position.copyFrom(t)
        },
        enumerable: !1,
        configurable: !0
    }),
    r.prototype._onTextureUpdate = function() {
        this.uvMatrix && (this.uvMatrix.texture = this._texture),
        this._cachedTint = 16777215
    }
    ,
    r.prototype._render = function(t) {
        var e = this._texture;
        !e || !e.valid || (this.tileTransform.updateLocalTransform(),
        this.uvMatrix.update(),
        t.batch.setObjectRenderer(t.plugins[this.pluginName]),
        t.plugins[this.pluginName].render(this))
    }
    ,
    r.prototype._calculateBounds = function() {
        var t = this._width * -this._anchor._x
          , e = this._height * -this._anchor._y
          , n = this._width * (1 - this._anchor._x)
          , s = this._height * (1 - this._anchor._y);
        this._bounds.addFrame(this.transform, t, e, n, s)
    }
    ,
    r.prototype.getLocalBounds = function(t) {
        return this.children.length === 0 ? (this._bounds.minX = this._width * -this._anchor._x,
        this._bounds.minY = this._height * -this._anchor._y,
        this._bounds.maxX = this._width * (1 - this._anchor._x),
        this._bounds.maxY = this._height * (1 - this._anchor._y),
        t || (this._localBoundsRect || (this._localBoundsRect = new j),
        t = this._localBoundsRect),
        this._bounds.getRectangle(t)) : i.prototype.getLocalBounds.call(this, t)
    }
    ,
    r.prototype.containsPoint = function(t) {
        this.worldTransform.applyInverse(t, br);
        var e = this._width
          , n = this._height
          , s = -e * this.anchor._x;
        if (br.x >= s && br.x < s + e) {
            var a = -n * this.anchor._y;
            if (br.y >= a && br.y < a + n)
                return !0
        }
        return !1
    }
    ,
    r.prototype.destroy = function(t) {
        i.prototype.destroy.call(this, t),
        this.tileTransform = null,
        this.uvMatrix = null
    }
    ,
    r.from = function(t, e) {
        return typeof e == "number" && (T("5.3.0", "TilingSprite.from use options instead of width and height args"),
        e = {
            width: e,
            height: arguments[2]
        }),
        new r(L.from(t, e),e.width,e.height)
    }
    ,
    Object.defineProperty(r.prototype, "width", {
        get: function() {
            return this._width
        },
        set: function(t) {
            this._width = t
        },
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(r.prototype, "height", {
        get: function() {
            return this._height
        },
        set: function(t) {
            this._height = t
        },
        enumerable: !1,
        configurable: !0
    }),
    r
}(vt)
  , Jo = `attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;
uniform mat3 translationMatrix;
uniform mat3 uTransform;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);

    vTextureCoord = (uTransform * vec3(aTextureCoord, 1.0)).xy;
}
`
  , Ff = `varying vec2 vTextureCoord;

uniform sampler2D uSampler;
uniform vec4 uColor;
uniform mat3 uMapCoord;
uniform vec4 uClampFrame;
uniform vec2 uClampOffset;

void main(void)
{
    vec2 coord = vTextureCoord + ceil(uClampOffset - vTextureCoord);
    coord = (uMapCoord * vec3(coord, 1.0)).xy;
    coord = clamp(coord, uClampFrame.xy, uClampFrame.zw);

    vec4 texSample = texture2D(uSampler, coord);
    gl_FragColor = texSample * uColor;
}
`
  , Lf = `varying vec2 vTextureCoord;

uniform sampler2D uSampler;
uniform vec4 uColor;

void main(void)
{
    vec4 sample = texture2D(uSampler, vTextureCoord);
    gl_FragColor = sample * uColor;
}
`
  , di = new rt
  , ds = function(i) {
    Zo(r, i);
    function r(t) {
        var e = i.call(this, t) || this
          , n = {
            globals: e.renderer.globalUniforms
        };
        return e.shader = jt.from(Jo, Ff, n),
        e.simpleShader = jt.from(Jo, Lf, n),
        e.quad = new Qr,
        e.state = Ht.for2d(),
        e
    }
    return r.prototype.render = function(t) {
        var e = this.renderer
          , n = this.quad
          , s = n.vertices;
        s[0] = s[6] = t._width * -t.anchor.x,
        s[1] = s[3] = t._height * -t.anchor.y,
        s[2] = s[4] = t._width * (1 - t.anchor.x),
        s[5] = s[7] = t._height * (1 - t.anchor.y),
        t.uvRespectAnchor && (s = n.uvs,
        s[0] = s[6] = -t.anchor.x,
        s[1] = s[3] = -t.anchor.y,
        s[2] = s[4] = 1 - t.anchor.x,
        s[5] = s[7] = 1 - t.anchor.y),
        n.invalidate();
        var a = t._texture
          , o = a.baseTexture
          , h = t.tileTransform.localTransform
          , u = t.uvMatrix
          , l = o.isPowerOfTwo && a.frame.width === o.width && a.frame.height === o.height;
        l && (o._glTextures[e.CONTEXT_UID] ? l = o.wrapMode !== At.CLAMP : o.wrapMode === At.CLAMP && (o.wrapMode = At.REPEAT));
        var f = l ? this.simpleShader : this.shader
          , c = a.width
          , d = a.height
          , p = t._width
          , v = t._height;
        di.set(h.a * c / p, h.b * c / v, h.c * d / p, h.d * d / v, h.tx / p, h.ty / v),
        di.invert(),
        l ? di.prepend(u.mapCoord) : (f.uniforms.uMapCoord = u.mapCoord.toArray(!0),
        f.uniforms.uClampFrame = u.uClampFrame,
        f.uniforms.uClampOffset = u.uClampOffset),
        f.uniforms.uTransform = di.toArray(!0),
        f.uniforms.uColor = Gi(t.tint, t.worldAlpha, f.uniforms.uColor, o.alphaMode),
        f.uniforms.translationMatrix = t.transform.worldTransform.toArray(!0),
        f.uniforms.uSampler = a,
        e.shader.bind(f),
        e.geometry.bind(n),
        this.state.blendMode = Xi(t.blendMode, o.alphaMode),
        e.state.set(this.state),
        e.geometry.draw(this.renderer.gl.TRIANGLES, 6, 0)
    }
    ,
    r
}(Be);
var ps = function(i, r) {
    return ps = Object.setPrototypeOf || {
        __proto__: []
    }instanceof Array && function(t, e) {
        t.__proto__ = e
    }
    || function(t, e) {
        for (var n in e)
            e.hasOwnProperty(n) && (t[n] = e[n])
    }
    ,
    ps(i, r)
};
function vs(i, r) {
    ps(i, r);
    function t() {
        this.constructor = i
    }
    i.prototype = r === null ? Object.create(r) : (t.prototype = r.prototype,
    new t)
}
var ms = function() {
    function i(r, t) {
        this.uvBuffer = r,
        this.uvMatrix = t,
        this.data = null,
        this._bufferUpdateId = -1,
        this._textureUpdateId = -1,
        this._updateID = 0
    }
    return i.prototype.update = function(r) {
        if (!(!r && this._bufferUpdateId === this.uvBuffer._updateID && this._textureUpdateId === this.uvMatrix._updateID)) {
            this._bufferUpdateId = this.uvBuffer._updateID,
            this._textureUpdateId = this.uvMatrix._updateID;
            var t = this.uvBuffer.data;
            (!this.data || this.data.length !== t.length) && (this.data = new Float32Array(t.length)),
            this.uvMatrix.multiplyUvs(t, this.data),
            this._updateID++
        }
    }
    ,
    i
}()
  , ys = new V
  , Qo = new pe
  , Ie = function(i) {
    vs(r, i);
    function r(t, e, n, s) {
        s === void 0 && (s = dt.TRIANGLES);
        var a = i.call(this) || this;
        return a.geometry = t,
        t.refCount++,
        a.shader = e,
        a.state = n || Ht.for2d(),
        a.drawMode = s,
        a.start = 0,
        a.size = 0,
        a.uvs = null,
        a.indices = null,
        a.vertexData = new Float32Array(1),
        a.vertexDirty = 0,
        a._transformID = -1,
        a._roundPixels = R.ROUND_PIXELS,
        a.batchUvs = null,
        a
    }
    return Object.defineProperty(r.prototype, "uvBuffer", {
        get: function() {
            return this.geometry.buffers[1]
        },
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(r.prototype, "verticesBuffer", {
        get: function() {
            return this.geometry.buffers[0]
        },
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(r.prototype, "material", {
        get: function() {
            return this.shader
        },
        set: function(t) {
            this.shader = t
        },
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(r.prototype, "blendMode", {
        get: function() {
            return this.state.blendMode
        },
        set: function(t) {
            this.state.blendMode = t
        },
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(r.prototype, "roundPixels", {
        get: function() {
            return this._roundPixels
        },
        set: function(t) {
            this._roundPixels !== t && (this._transformID = -1),
            this._roundPixels = t
        },
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(r.prototype, "tint", {
        get: function() {
            return this.shader.tint
        },
        set: function(t) {
            this.shader.tint = t
        },
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(r.prototype, "texture", {
        get: function() {
            return this.shader.texture
        },
        set: function(t) {
            this.shader.texture = t
        },
        enumerable: !1,
        configurable: !0
    }),
    r.prototype._render = function(t) {
        var e = this.geometry.buffers[0].data;
        this.shader.batchable && this.drawMode === dt.TRIANGLES && e.length < r.BATCHABLE_SIZE * 2 ? this._renderToBatch(t) : this._renderDefault(t)
    }
    ,
    r.prototype._renderDefault = function(t) {
        var e = this.shader;
        e.alpha = this.worldAlpha,
        e.update && e.update(),
        t.batch.flush(),
        e.program.uniformData.translationMatrix && (e.uniforms.translationMatrix = this.transform.worldTransform.toArray(!0)),
        t.shader.bind(e),
        t.state.set(this.state),
        t.geometry.bind(this.geometry, e),
        t.geometry.draw(this.drawMode, this.size, this.start, this.geometry.instanceCount)
    }
    ,
    r.prototype._renderToBatch = function(t) {
        var e = this.geometry;
        this.shader.uvMatrix && (this.shader.uvMatrix.update(),
        this.calculateUvs()),
        this.calculateVertices(),
        this.indices = e.indexBuffer.data,
        this._tintRGB = this.shader._tintRGB,
        this._texture = this.shader.texture;
        var n = this.material.pluginName;
        t.batch.setObjectRenderer(t.plugins[n]),
        t.plugins[n].render(this)
    }
    ,
    r.prototype.calculateVertices = function() {
        var t = this.geometry
          , e = t.buffers[0].data;
        if (!(t.vertexDirtyId === this.vertexDirty && this._transformID === this.transform._worldID)) {
            this._transformID = this.transform._worldID,
            this.vertexData.length !== e.length && (this.vertexData = new Float32Array(e.length));
            for (var n = this.transform.worldTransform, s = n.a, a = n.b, o = n.c, h = n.d, u = n.tx, l = n.ty, f = this.vertexData, c = 0; c < f.length / 2; c++) {
                var d = e[c * 2]
                  , p = e[c * 2 + 1];
                f[c * 2] = s * d + o * p + u,
                f[c * 2 + 1] = a * d + h * p + l
            }
            if (this._roundPixels)
                for (var v = R.RESOLUTION, c = 0; c < f.length; ++c)
                    f[c] = Math.round((f[c] * v | 0) / v);
            this.vertexDirty = t.vertexDirtyId
        }
    }
    ,
    r.prototype.calculateUvs = function() {
        var t = this.geometry.buffers[1];
        this.shader.uvMatrix.isSimple ? this.uvs = t.data : (this.batchUvs || (this.batchUvs = new ms(t,this.shader.uvMatrix)),
        this.batchUvs.update(),
        this.uvs = this.batchUvs.data)
    }
    ,
    r.prototype._calculateBounds = function() {
        this.calculateVertices(),
        this._bounds.addVertexData(this.vertexData, 0, this.vertexData.length)
    }
    ,
    r.prototype.containsPoint = function(t) {
        if (!this.getBounds().contains(t.x, t.y))
            return !1;
        this.worldTransform.applyInverse(t, ys);
        for (var e = this.geometry.getBuffer("aVertexPosition").data, n = Qo.points, s = this.geometry.getIndex().data, a = s.length, o = this.drawMode === 4 ? 3 : 1, h = 0; h + 2 < a; h += o) {
            var u = s[h] * 2
              , l = s[h + 1] * 2
              , f = s[h + 2] * 2;
            if (n[0] = e[u],
            n[1] = e[u + 1],
            n[2] = e[l],
            n[3] = e[l + 1],
            n[4] = e[f],
            n[5] = e[f + 1],
            Qo.contains(ys.x, ys.y))
                return !0
        }
        return !1
    }
    ,
    r.prototype.destroy = function(t) {
        i.prototype.destroy.call(this, t),
        this.geometry.refCount--,
        this.geometry.refCount === 0 && this.geometry.dispose(),
        this.geometry = null,
        this.shader = null,
        this.state = null,
        this.uvs = null,
        this.indices = null,
        this.vertexData = null
    }
    ,
    r.BATCHABLE_SIZE = 100,
    r
}(ot)
  , Nf = `varying vec2 vTextureCoord;
uniform vec4 uColor;

uniform sampler2D uSampler;

void main(void)
{
    gl_FragColor = texture2D(uSampler, vTextureCoord) * uColor;
}
`
  , Df = `attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;
uniform mat3 translationMatrix;
uniform mat3 uTextureMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);

    vTextureCoord = (uTextureMatrix * vec3(aTextureCoord, 1.0)).xy;
}
`
  , Ve = function(i) {
    vs(r, i);
    function r(t, e) {
        var n = this
          , s = {
            uSampler: t,
            alpha: 1,
            uTextureMatrix: rt.IDENTITY,
            uColor: new Float32Array([1, 1, 1, 1])
        };
        return e = Object.assign({
            tint: 16777215,
            alpha: 1,
            pluginName: "batch"
        }, e),
        e.uniforms && Object.assign(s, e.uniforms),
        n = i.call(this, e.program || ke.from(Df, Nf), s) || this,
        n._colorDirty = !1,
        n.uvMatrix = new cr(t),
        n.batchable = e.program === void 0,
        n.pluginName = e.pluginName,
        n.tint = e.tint,
        n.alpha = e.alpha,
        n
    }
    return Object.defineProperty(r.prototype, "texture", {
        get: function() {
            return this.uniforms.uSampler
        },
        set: function(t) {
            this.uniforms.uSampler !== t && (this.uniforms.uSampler = t,
            this.uvMatrix.texture = t)
        },
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(r.prototype, "alpha", {
        get: function() {
            return this._alpha
        },
        set: function(t) {
            t !== this._alpha && (this._alpha = t,
            this._colorDirty = !0)
        },
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(r.prototype, "tint", {
        get: function() {
            return this._tint
        },
        set: function(t) {
            t !== this._tint && (this._tint = t,
            this._tintRGB = (t >> 16) + (t & 65280) + ((t & 255) << 16),
            this._colorDirty = !0)
        },
        enumerable: !1,
        configurable: !0
    }),
    r.prototype.update = function() {
        if (this._colorDirty) {
            this._colorDirty = !1;
            var t = this.texture.baseTexture;
            Gi(this._tint, this._alpha, this.uniforms.uColor, t.alphaMode)
        }
        this.uvMatrix.update() && (this.uniforms.uTextureMatrix = this.uvMatrix.mapCoord)
    }
    ,
    r
}(jt)
  , Ye = function(i) {
    vs(r, i);
    function r(t, e, n) {
        var s = i.call(this) || this
          , a = new nt(t)
          , o = new nt(e,!0)
          , h = new nt(n,!0,!0);
        return s.addAttribute("aVertexPosition", a, 2, !1, et.FLOAT).addAttribute("aTextureCoord", o, 2, !1, et.FLOAT).addIndex(h),
        s._updateId = -1,
        s
    }
    return Object.defineProperty(r.prototype, "vertexDirtyId", {
        get: function() {
            return this.buffers[0]._updateID
        },
        enumerable: !1,
        configurable: !0
    }),
    r
}(_e);
var gs = function(i, r) {
    return gs = Object.setPrototypeOf || {
        __proto__: []
    }instanceof Array && function(t, e) {
        t.__proto__ = e
    }
    || function(t, e) {
        for (var n in e)
            e.hasOwnProperty(n) && (t[n] = e[n])
    }
    ,
    gs(i, r)
};
function Uf(i, r) {
    gs(i, r);
    function t() {
        this.constructor = i
    }
    i.prototype = r === null ? Object.create(r) : (t.prototype = r.prototype,
    new t)
}
var We = function() {
    function i() {
        this.info = [],
        this.common = [],
        this.page = [],
        this.char = [],
        this.kerning = []
    }
    return i
}()
  , Bf = function() {
    function i() {}
    return i.test = function(r) {
        return typeof r == "string" && r.indexOf("info face=") === 0
    }
    ,
    i.parse = function(r) {
        var t = r.match(/^[a-z]+\s+.+$/gm)
          , e = {
            info: [],
            common: [],
            page: [],
            char: [],
            chars: [],
            kerning: [],
            kernings: []
        };
        for (var n in t) {
            var s = t[n].match(/^[a-z]+/gm)[0]
              , a = t[n].match(/[a-zA-Z]+=([^\s"']+|"([^"]*)")/gm)
              , o = {};
            for (var h in a) {
                var u = a[h].split("=")
                  , l = u[0]
                  , f = u[1].replace(/"/gm, "")
                  , c = parseFloat(f)
                  , d = isNaN(c) ? f : c;
                o[l] = d
            }
            e[s].push(o)
        }
        var p = new We;
        return e.info.forEach(function(v) {
            return p.info.push({
                face: v.face,
                size: parseInt(v.size, 10)
            })
        }),
        e.common.forEach(function(v) {
            return p.common.push({
                lineHeight: parseInt(v.lineHeight, 10)
            })
        }),
        e.page.forEach(function(v) {
            return p.page.push({
                id: parseInt(v.id, 10),
                file: v.file
            })
        }),
        e.char.forEach(function(v) {
            return p.char.push({
                id: parseInt(v.id, 10),
                page: parseInt(v.page, 10),
                x: parseInt(v.x, 10),
                y: parseInt(v.y, 10),
                width: parseInt(v.width, 10),
                height: parseInt(v.height, 10),
                xoffset: parseInt(v.xoffset, 10),
                yoffset: parseInt(v.yoffset, 10),
                xadvance: parseInt(v.xadvance, 10)
            })
        }),
        e.kerning.forEach(function(v) {
            return p.kerning.push({
                first: parseInt(v.first, 10),
                second: parseInt(v.second, 10),
                amount: parseInt(v.amount, 10)
            })
        }),
        p
    }
    ,
    i
}()
  , _s = function() {
    function i() {}
    return i.test = function(r) {
        return r instanceof XMLDocument && r.getElementsByTagName("page").length && r.getElementsByTagName("info")[0].getAttribute("face") !== null
    }
    ,
    i.parse = function(r) {
        for (var t = new We, e = r.getElementsByTagName("info"), n = r.getElementsByTagName("common"), s = r.getElementsByTagName("page"), a = r.getElementsByTagName("char"), o = r.getElementsByTagName("kerning"), h = 0; h < e.length; h++)
            t.info.push({
                face: e[h].getAttribute("face"),
                size: parseInt(e[h].getAttribute("size"), 10)
            });
        for (var h = 0; h < n.length; h++)
            t.common.push({
                lineHeight: parseInt(n[h].getAttribute("lineHeight"), 10)
            });
        for (var h = 0; h < s.length; h++)
            t.page.push({
                id: parseInt(s[h].getAttribute("id"), 10) || 0,
                file: s[h].getAttribute("file")
            });
        for (var h = 0; h < a.length; h++) {
            var u = a[h];
            t.char.push({
                id: parseInt(u.getAttribute("id"), 10),
                page: parseInt(u.getAttribute("page"), 10) || 0,
                x: parseInt(u.getAttribute("x"), 10),
                y: parseInt(u.getAttribute("y"), 10),
                width: parseInt(u.getAttribute("width"), 10),
                height: parseInt(u.getAttribute("height"), 10),
                xoffset: parseInt(u.getAttribute("xoffset"), 10),
                yoffset: parseInt(u.getAttribute("yoffset"), 10),
                xadvance: parseInt(u.getAttribute("xadvance"), 10)
            })
        }
        for (var h = 0; h < o.length; h++)
            t.kerning.push({
                first: parseInt(o[h].getAttribute("first"), 10),
                second: parseInt(o[h].getAttribute("second"), 10),
                amount: parseInt(o[h].getAttribute("amount"), 10)
            });
        return t
    }
    ,
    i
}()
  , kf = function() {
    function i() {}
    return i.test = function(r) {
        if (typeof r == "string" && r.indexOf("<font>") > -1) {
            var t = new self.DOMParser().parseFromString(r, "text/xml");
            return _s.test(t)
        }
        return !1
    }
    ,
    i.parse = function(r) {
        var t = new window.DOMParser().parseFromString(r, "text/xml");
        return _s.parse(t)
    }
    ,
    i
}()
  , xs = [Bf, _s, kf];
function th(i) {
    for (var r = 0; r < xs.length; r++)
        if (xs[r].test(i))
            return xs[r];
    return null
}
function eh(i, r, t, e, n, s) {
    var a = t.fill;
    if (Array.isArray(a)) {
        if (a.length === 1)
            return a[0]
    } else
        return a;
    var o, h = t.dropShadow ? t.dropShadowDistance : 0, u = t.padding || 0, l = Math.ceil(i.width / e) - h - u * 2, f = Math.ceil(i.height / e) - h - u * 2, c = a.slice(), d = t.fillGradientStops.slice();
    if (!d.length)
        for (var p = c.length + 1, v = 1; v < p; ++v)
            d.push(v / p);
    if (c.unshift(a[0]),
    d.unshift(0),
    c.push(a[a.length - 1]),
    d.push(1),
    t.fillGradientType === Pe.LINEAR_VERTICAL) {
        o = r.createLinearGradient(l / 2, u, l / 2, f + u);
        for (var m = 0, g = s.fontProperties.fontSize + t.strokeThickness, w = g / f, v = 0; v < n.length; v++)
            for (var y = s.lineHeight * v, I = 0; I < c.length; I++) {
                var x = 0;
                typeof d[I] == "number" ? x = d[I] : x = I / c.length;
                var b = y / f + x * w
                  , D = Math.max(m, b);
                D = Math.min(D, 1),
                o.addColorStop(D, c[I]),
                m = D
            }
    } else {
        o = r.createLinearGradient(u, f / 2, l + u, f / 2);
        for (var U = c.length + 1, P = 1, v = 0; v < c.length; v++) {
            var _ = void 0;
            typeof d[v] == "number" ? _ = d[v] : _ = P / U,
            o.addColorStop(_, c[v]),
            P++
        }
    }
    return o
}
function Xf(i, r, t, e, n, s, a) {
    var o = t.text
      , h = t.fontProperties;
    r.translate(e, n),
    r.scale(s, s);
    var u = a.strokeThickness / 2
      , l = -(a.strokeThickness / 2);
    r.font = a.toFontString(),
    r.lineWidth = a.strokeThickness,
    r.textBaseline = a.textBaseline,
    r.lineJoin = a.lineJoin,
    r.miterLimit = a.miterLimit,
    r.fillStyle = eh(i, r, a, s, [o], t),
    r.strokeStyle = a.stroke,
    r.font = a.toFontString(),
    r.lineWidth = a.strokeThickness,
    r.textBaseline = a.textBaseline,
    r.lineJoin = a.lineJoin,
    r.miterLimit = a.miterLimit,
    r.fillStyle = eh(i, r, a, s, [o], t),
    r.strokeStyle = a.stroke;
    var f = a.dropShadowColor
      , c = ue(typeof f == "number" ? f : Bi(f));
    a.dropShadow ? (r.shadowColor = "rgba(" + c[0] * 255 + "," + c[1] * 255 + "," + c[2] * 255 + "," + a.dropShadowAlpha + ")",
    r.shadowBlur = a.dropShadowBlur,
    r.shadowOffsetX = Math.cos(a.dropShadowAngle) * a.dropShadowDistance,
    r.shadowOffsetY = Math.sin(a.dropShadowAngle) * a.dropShadowDistance) : (r.shadowColor = "black",
    r.shadowBlur = 0,
    r.shadowOffsetX = 0,
    r.shadowOffsetY = 0),
    a.stroke && a.strokeThickness && r.strokeText(o, u, l + t.lineHeight - h.descent),
    a.fill && r.fillText(o, u, l + t.lineHeight - h.descent),
    r.setTransform(1, 0, 0, 1, 0, 0),
    r.fillStyle = "rgba(0, 0, 0, 0)"
}
function Gf(i) {
    typeof i == "string" && (i = [i]);
    for (var r = [], t = 0, e = i.length; t < e; t++) {
        var n = i[t];
        if (Array.isArray(n)) {
            if (n.length !== 2)
                throw new Error("[BitmapFont]: Invalid character range length, expecting 2 got " + n.length + ".");
            var s = n[0].charCodeAt(0)
              , a = n[1].charCodeAt(0);
            if (a < s)
                throw new Error("[BitmapFont]: Invalid character range.");
            for (var o = s, h = a; o <= h; o++)
                r.push(String.fromCharCode(o))
        } else
            r.push.apply(r, n.split(""))
    }
    if (r.length === 0)
        throw new Error("[BitmapFont]: Empty set when resolving characters.");
    return r
}
var Vt = function() {
    function i(r, t) {
        var e = r.info[0]
          , n = r.common[0]
          , s = r.page[0]
          , a = ar(s.file)
          , o = {};
        this.font = e.face,
        this.size = e.size,
        this.lineHeight = n.lineHeight / a,
        this.chars = {},
        this.pageTextures = o;
        for (var h = 0; h < r.page.length; h++) {
            var u = r.page[h]
              , l = u.id
              , f = u.file;
            o[l] = t instanceof Array ? t[h] : t[f]
        }
        for (var h = 0; h < r.char.length; h++) {
            var c = r.char[h]
              , l = c.id
              , d = c.page
              , p = r.char[h]
              , v = p.x
              , m = p.y
              , g = p.width
              , w = p.height
              , y = p.xoffset
              , I = p.yoffset
              , x = p.xadvance;
            v /= a,
            m /= a,
            g /= a,
            w /= a,
            y /= a,
            I /= a,
            x /= a;
            var b = new j(v + o[d].frame.x / a,m + o[d].frame.y / a,g,w);
            this.chars[l] = {
                xOffset: y,
                yOffset: I,
                xAdvance: x,
                kerning: {},
                texture: new L(o[d].baseTexture,b),
                page: d
            }
        }
        for (var h = 0; h < r.kerning.length; h++) {
            var D = r.kerning[h]
              , U = D.first
              , P = D.second
              , _ = D.amount;
            U /= a,
            P /= a,
            _ /= a,
            this.chars[P] && (this.chars[P].kerning[U] = _)
        }
    }
    return i.prototype.destroy = function() {
        for (var r in this.chars)
            this.chars[r].texture.destroy(),
            this.chars[r].texture = null;
        for (var r in this.pageTextures)
            this.pageTextures[r].destroy(!0),
            this.pageTextures[r] = null;
        this.chars = null,
        this.pageTextures = null
    }
    ,
    i.install = function(r, t) {
        var e;
        if (r instanceof We)
            e = r;
        else {
            var n = th(r);
            if (!n)
                throw new Error("Unrecognized data format for font.");
            e = n.parse(r)
        }
        t instanceof L && (t = [t]);
        var s = new i(e,t);
        return i.available[s.font] = s,
        s
    }
    ,
    i.uninstall = function(r) {
        var t = i.available[r];
        if (!t)
            throw new Error("No font found named '" + r + "'");
        t.destroy(),
        delete i.available[r]
    }
    ,
    i.from = function(r, t, e) {
        if (!r)
            throw new Error("[BitmapFont] Property `name` is required.");
        var n = Object.assign({}, i.defaultOptions, e)
          , s = n.chars
          , a = n.padding
          , o = n.resolution
          , h = n.textureWidth
          , u = n.textureHeight
          , l = Gf(s)
          , f = t instanceof mt ? t : new mt(t)
          , c = h
          , d = new We;
        d.info[0] = {
            face: f.fontFamily,
            size: f.fontSize
        },
        d.common[0] = {
            lineHeight: f.fontSize
        };
        for (var p = 0, v = 0, m, g, w, y = 0, I = [], x = 0; x < l.length; x++) {
            m || (m = document.createElement("canvas"),
            m.width = h,
            m.height = u,
            g = m.getContext("2d"),
            w = new q(m,{
                resolution: o
            }),
            I.push(new L(w)),
            d.page.push({
                id: I.length - 1,
                file: ""
            }));
            var b = yt.measureText(l[x], f, !1, m)
              , D = b.width
              , U = Math.ceil(b.height)
              , P = Math.ceil((f.fontStyle === "italic" ? 2 : 1) * D);
            if (v >= u - U * o) {
                if (v === 0)
                    throw new Error("[BitmapFont] textureHeight " + u + "px is " + ("too small for " + f.fontSize + "px fonts"));
                --x,
                m = null,
                g = null,
                w = null,
                v = 0,
                p = 0,
                y = 0;
                continue
            }
            if (y = Math.max(U + b.fontProperties.descent, y),
            P * o + p >= c) {
                --x,
                v += y * o,
                v = Math.ceil(v),
                p = 0,
                y = 0;
                continue
            }
            Xf(m, g, b, p, v, o, f);
            var _ = b.text.charCodeAt(0);
            d.char.push({
                id: _,
                page: I.length - 1,
                x: p / o,
                y: v / o,
                width: P,
                height: U,
                xoffset: 0,
                yoffset: 0,
                xadvance: Math.ceil(D - (f.dropShadow ? f.dropShadowDistance : 0) - (f.stroke ? f.strokeThickness : 0))
            }),
            p += (P + 2 * a) * o,
            p = Math.ceil(p)
        }
        var C = new i(d,I);
        return i.available[r] !== void 0 && i.uninstall(r),
        i.available[r] = C,
        C
    }
    ,
    i.ALPHA = [["a", "z"], ["A", "Z"], " "],
    i.NUMERIC = [["0", "9"]],
    i.ALPHANUMERIC = [["a", "z"], ["A", "Z"], ["0", "9"], " "],
    i.ASCII = [[" ", "~"]],
    i.defaultOptions = {
        resolution: 1,
        textureWidth: 512,
        textureHeight: 512,
        padding: 4,
        chars: i.ALPHANUMERIC
    },
    i.available = {},
    i
}()
  , rh = []
  , ih = []
  , nh = function(i) {
    Uf(r, i);
    function r(t, e) {
        e === void 0 && (e = {});
        var n = i.call(this) || this;
        n._tint = 16777215,
        e.font && (T("5.3.0", "PIXI.BitmapText constructor style.font property is deprecated."),
        n._upgradeStyle(e));
        var s = Object.assign({}, r.styleDefaults, e)
          , a = s.align
          , o = s.tint
          , h = s.maxWidth
          , u = s.letterSpacing
          , l = s.fontName
          , f = s.fontSize;
        if (!Vt.available[l])
            throw new Error('Missing BitmapFont "' + l + '"');
        return n._activePagesMeshData = [],
        n._textWidth = 0,
        n._textHeight = 0,
        n._align = a,
        n._tint = o,
        n._fontName = l,
        n._fontSize = f || Vt.available[l].size,
        n._text = t,
        n._maxWidth = h,
        n._maxLineHeight = 0,
        n._letterSpacing = u,
        n._anchor = new te(function() {
            n.dirty = !0
        }
        ,n,0,0),
        n._roundPixels = R.ROUND_PIXELS,
        n.dirty = !0,
        n._textureCache = {},
        n
    }
    return r.prototype.updateText = function() {
        for (var t, e = Vt.available[this._fontName], n = this._fontSize / e.size, s = new V, a = [], o = [], h = this._text.replace(/(?:\r\n|\r)/g, `
`) || " ", u = h.length, l = this._maxWidth * e.size / this._fontSize, f = null, c = 0, d = 0, p = 0, v = -1, m = 0, g = 0, w = 0, y = 0; y < u; y++) {
            var I = h.charCodeAt(y)
              , x = h.charAt(y);
            if (/(?:\s)/.test(x) && (v = y,
            m = c),
            x === "\r" || x === `
`) {
                o.push(c),
                d = Math.max(d, c),
                ++p,
                ++g,
                s.x = 0,
                s.y += e.lineHeight,
                f = null;
                continue
            }
            var b = e.chars[I];
            if (!!b) {
                f && b.kerning[f] && (s.x += b.kerning[f]);
                var D = ih.pop() || {
                    texture: L.EMPTY,
                    line: 0,
                    charCode: 0,
                    position: new V
                };
                D.texture = b.texture,
                D.line = p,
                D.charCode = I,
                D.position.x = s.x + b.xOffset + this._letterSpacing / 2,
                D.position.y = s.y + b.yOffset,
                a.push(D),
                s.x += b.xAdvance + this._letterSpacing,
                c = s.x,
                w = Math.max(w, b.yOffset + b.texture.height),
                f = I,
                v !== -1 && l > 0 && s.x > l && (++g,
                le(a, 1 + v - g, 1 + y - v),
                y = v,
                v = -1,
                o.push(m),
                d = Math.max(d, m),
                p++,
                s.x = 0,
                s.y += e.lineHeight,
                f = null)
            }
        }
        var U = h.charAt(h.length - 1);
        U !== "\r" && U !== `
` && (/(?:\s)/.test(U) && (c = m),
        o.push(c),
        d = Math.max(d, c));
        for (var P = [], y = 0; y <= p; y++) {
            var _ = 0;
            this._align === "right" ? _ = d - o[y] : this._align === "center" && (_ = (d - o[y]) / 2),
            P.push(_)
        }
        for (var C = a.length, O = {}, X = [], B = this._activePagesMeshData, y = 0; y < B.length; y++)
            rh.push(B[y]);
        for (var y = 0; y < C; y++) {
            var A = a[y].texture
              , F = A.baseTexture.uid;
            if (!O[F]) {
                var E = rh.pop();
                if (!E) {
                    var lt = new Ye
                      , Yt = new Ve(L.EMPTY)
                      , Wt = new Ie(lt,Yt);
                    E = {
                        index: 0,
                        indexCount: 0,
                        vertexCount: 0,
                        uvsCount: 0,
                        total: 0,
                        mesh: Wt,
                        vertices: null,
                        uvs: null,
                        indices: null
                    }
                }
                E.index = 0,
                E.indexCount = 0,
                E.vertexCount = 0,
                E.uvsCount = 0,
                E.total = 0;
                var qt = this._textureCache;
                qt[F] = qt[F] || new L(A.baseTexture),
                E.mesh.texture = qt[F],
                E.mesh.tint = this._tint,
                X.push(E),
                O[F] = E
            }
            O[F].total++
        }
        for (var y = 0; y < B.length; y++)
            X.indexOf(B[y]) === -1 && this.removeChild(B[y].mesh);
        for (var y = 0; y < X.length; y++)
            X[y].mesh.parent !== this && this.addChild(X[y].mesh);
        this._activePagesMeshData = X;
        for (var y in O) {
            var E = O[y]
              , St = E.total;
            if (!(((t = E.indices) === null || t === void 0 ? void 0 : t.length) > 6 * St) || E.vertices.length < Ie.BATCHABLE_SIZE * 2)
                E.vertices = new Float32Array(4 * 2 * St),
                E.uvs = new Float32Array(4 * 2 * St),
                E.indices = new Uint16Array(6 * St);
            else
                for (var ne = E.total, Ze = E.vertices, Se = ne * 4 * 2; Se < Ze.length; Se++)
                    Ze[Se] = 0;
            E.mesh.size = 6 * St
        }
        for (var y = 0; y < C; y++) {
            var x = a[y]
              , $t = x.position.x + P[x.line];
            this._roundPixels && ($t = Math.round($t));
            var Ut = $t * n
              , Zt = x.position.y * n
              , A = x.texture
              , z = O[A.baseTexture.uid]
              , gt = A.frame
              , at = A._uvs
              , G = z.index++;
            z.indices[G * 6 + 0] = 0 + G * 4,
            z.indices[G * 6 + 1] = 1 + G * 4,
            z.indices[G * 6 + 2] = 2 + G * 4,
            z.indices[G * 6 + 3] = 0 + G * 4,
            z.indices[G * 6 + 4] = 2 + G * 4,
            z.indices[G * 6 + 5] = 3 + G * 4,
            z.vertices[G * 8 + 0] = Ut,
            z.vertices[G * 8 + 1] = Zt,
            z.vertices[G * 8 + 2] = Ut + gt.width * n,
            z.vertices[G * 8 + 3] = Zt,
            z.vertices[G * 8 + 4] = Ut + gt.width * n,
            z.vertices[G * 8 + 5] = Zt + gt.height * n,
            z.vertices[G * 8 + 6] = Ut,
            z.vertices[G * 8 + 7] = Zt + gt.height * n,
            z.uvs[G * 8 + 0] = at.x0,
            z.uvs[G * 8 + 1] = at.y0,
            z.uvs[G * 8 + 2] = at.x1,
            z.uvs[G * 8 + 3] = at.y1,
            z.uvs[G * 8 + 4] = at.x2,
            z.uvs[G * 8 + 5] = at.y2,
            z.uvs[G * 8 + 6] = at.x3,
            z.uvs[G * 8 + 7] = at.y3
        }
        this._textWidth = d * n,
        this._textHeight = (s.y + e.lineHeight) * n;
        for (var y in O) {
            var E = O[y];
            if (this.anchor.x !== 0 || this.anchor.y !== 0)
                for (var Ct = 0, se = this._textWidth * this.anchor.x, Ce = this._textHeight * this.anchor.y, Cr = 0; Cr < E.total; Cr++)
                    E.vertices[Ct++] -= se,
                    E.vertices[Ct++] -= Ce,
                    E.vertices[Ct++] -= se,
                    E.vertices[Ct++] -= Ce,
                    E.vertices[Ct++] -= se,
                    E.vertices[Ct++] -= Ce,
                    E.vertices[Ct++] -= se,
                    E.vertices[Ct++] -= Ce;
            this._maxLineHeight = w * n;
            var Er = E.mesh.geometry.getBuffer("aVertexPosition")
              , Ar = E.mesh.geometry.getBuffer("aTextureCoord")
              , $s = E.mesh.geometry.getIndex();
            Er.data = E.vertices,
            Ar.data = E.uvs,
            $s.data = E.indices,
            Er.update(),
            Ar.update(),
            $s.update()
        }
        for (var y = 0; y < a.length; y++)
            ih.push(a[y])
    }
    ,
    r.prototype.updateTransform = function() {
        this.validate(),
        this.containerUpdateTransform()
    }
    ,
    r.prototype.getLocalBounds = function() {
        return this.validate(),
        i.prototype.getLocalBounds.call(this)
    }
    ,
    r.prototype.validate = function() {
        this.dirty && (this.updateText(),
        this.dirty = !1)
    }
    ,
    Object.defineProperty(r.prototype, "tint", {
        get: function() {
            return this._tint
        },
        set: function(t) {
            if (this._tint !== t) {
                this._tint = t;
                for (var e = 0; e < this._activePagesMeshData.length; e++)
                    this._activePagesMeshData[e].mesh.tint = t
            }
        },
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(r.prototype, "align", {
        get: function() {
            return this._align
        },
        set: function(t) {
            this._align !== t && (this._align = t,
            this.dirty = !0)
        },
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(r.prototype, "fontName", {
        get: function() {
            return this._fontName
        },
        set: function(t) {
            if (!Vt.available[t])
                throw new Error('Missing BitmapFont "' + t + '"');
            this._fontName !== t && (this._fontName = t,
            this.dirty = !0)
        },
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(r.prototype, "fontSize", {
        get: function() {
            return this._fontSize
        },
        set: function(t) {
            this._fontSize !== t && (this._fontSize = t,
            this.dirty = !0)
        },
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(r.prototype, "anchor", {
        get: function() {
            return this._anchor
        },
        set: function(t) {
            typeof t == "number" ? this._anchor.set(t) : this._anchor.copyFrom(t)
        },
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(r.prototype, "text", {
        get: function() {
            return this._text
        },
        set: function(t) {
            t = String(t == null ? "" : t),
            this._text !== t && (this._text = t,
            this.dirty = !0)
        },
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(r.prototype, "maxWidth", {
        get: function() {
            return this._maxWidth
        },
        set: function(t) {
            this._maxWidth !== t && (this._maxWidth = t,
            this.dirty = !0)
        },
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(r.prototype, "maxLineHeight", {
        get: function() {
            return this.validate(),
            this._maxLineHeight
        },
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(r.prototype, "textWidth", {
        get: function() {
            return this.validate(),
            this._textWidth
        },
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(r.prototype, "letterSpacing", {
        get: function() {
            return this._letterSpacing
        },
        set: function(t) {
            this._letterSpacing !== t && (this._letterSpacing = t,
            this.dirty = !0)
        },
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(r.prototype, "roundPixels", {
        get: function() {
            return this._roundPixels
        },
        set: function(t) {
            t !== this._roundPixels && (this._roundPixels = t,
            this.dirty = !0)
        },
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(r.prototype, "textHeight", {
        get: function() {
            return this.validate(),
            this._textHeight
        },
        enumerable: !1,
        configurable: !0
    }),
    r.prototype._upgradeStyle = function(t) {
        if (typeof t.font == "string") {
            var e = t.font.split(" ");
            t.fontName = e.length === 1 ? e[0] : e.slice(1).join(" "),
            e.length >= 2 && (t.fontSize = parseInt(e[0], 10))
        } else
            t.fontName = t.font.name,
            t.fontSize = typeof t.font.size == "number" ? t.font.size : parseInt(t.font.size, 10)
    }
    ,
    r.prototype.destroy = function(t) {
        var e = this._textureCache;
        for (var n in e) {
            var s = e[n];
            s.destroy(),
            delete e[n]
        }
        this._textureCache = null,
        i.prototype.destroy.call(this, t)
    }
    ,
    r.registerFont = function(t, e) {
        return T("5.3.0", "PIXI.BitmapText.registerFont is deprecated, use PIXI.BitmapFont.install"),
        Vt.install(t, e)
    }
    ,
    Object.defineProperty(r, "fonts", {
        get: function() {
            return T("5.3.0", "PIXI.BitmapText.fonts is deprecated, use PIXI.BitmapFont.available"),
            Vt.available
        },
        enumerable: !1,
        configurable: !0
    }),
    r.styleDefaults = {
        align: "left",
        tint: 16777215,
        maxWidth: 0,
        letterSpacing: 0
    },
    r
}(ot)
  , bs = function() {
    function i() {}
    return i.add = function() {
        Xe.setExtensionXhrType("fnt", Xe.XHR_RESPONSE_TYPE.TEXT)
    }
    ,
    i.use = function(r, t) {
        var e = th(r.data);
        if (!e) {
            t();
            return
        }
        for (var n = i.getBaseUrl(this, r), s = e.parse(r.data), a = {}, o = function(v) {
            a[v.metadata.pageFile] = v.texture,
            Object.keys(a).length === s.page.length && (r.bitmapFont = Vt.install(s, a),
            t())
        }, h = 0; h < s.page.length; ++h) {
            var u = s.page[h].file
              , l = n + u
              , f = !1;
            for (var c in this.resources) {
                var d = this.resources[c];
                if (d.url === l) {
                    d.metadata.pageFile = u,
                    d.texture ? o(d) : d.onAfterMiddleware.add(o),
                    f = !0;
                    break
                }
            }
            if (!f) {
                var p = {
                    crossOrigin: r.crossOrigin,
                    loadType: Xe.LOAD_TYPE.IMAGE,
                    metadata: Object.assign({
                        pageFile: u
                    }, r.metadata.imageMetadata),
                    parentResource: r
                };
                this.add(l, p, o)
            }
        }
    }
    ,
    i.getBaseUrl = function(r, t) {
        var e = t.isDataUrl ? "" : i.dirname(t.url);
        return t.isDataUrl && (e === "." && (e = ""),
        r.baseUrl && e && r.baseUrl.charAt(r.baseUrl.length - 1) === "/" && (e += "/")),
        e = e.replace(r.baseUrl, ""),
        e && e.charAt(e.length - 1) !== "/" && (e += "/"),
        e
    }
    ,
    i.dirname = function(r) {
        var t = r.replace(/\\/g, "/").replace(/\/$/, "").replace(/\/[^\/]*$/, "");
        return t === r ? "." : t === "" ? "/" : t
    }
    ,
    i
}();
var Ts = function(i, r) {
    return Ts = Object.setPrototypeOf || {
        __proto__: []
    }instanceof Array && function(t, e) {
        t.__proto__ = e
    }
    || function(t, e) {
        for (var n in e)
            e.hasOwnProperty(n) && (t[n] = e[n])
    }
    ,
    Ts(i, r)
};
function jf(i, r) {
    Ts(i, r);
    function t() {
        this.constructor = i
    }
    i.prototype = r === null ? Object.create(r) : (t.prototype = r.prototype,
    new t)
}
var Hf = `varying vec2 vTextureCoord;

uniform sampler2D uSampler;
uniform float uAlpha;

void main(void)
{
   gl_FragColor = texture2D(uSampler, vTextureCoord) * uAlpha;
}
`
  , zf = function(i) {
    jf(r, i);
    function r(t) {
        t === void 0 && (t = 1);
        var e = i.call(this, Rn, Hf, {
            uAlpha: 1
        }) || this;
        return e.alpha = t,
        e
    }
    return Object.defineProperty(r.prototype, "alpha", {
        get: function() {
            return this.uniforms.uAlpha
        },
        set: function(t) {
            this.uniforms.uAlpha = t
        },
        enumerable: !1,
        configurable: !0
    }),
    r
}(Rt);
var ws = function(i, r) {
    return ws = Object.setPrototypeOf || {
        __proto__: []
    }instanceof Array && function(t, e) {
        t.__proto__ = e
    }
    || function(t, e) {
        for (var n in e)
            e.hasOwnProperty(n) && (t[n] = e[n])
    }
    ,
    ws(i, r)
};
function sh(i, r) {
    ws(i, r);
    function t() {
        this.constructor = i
    }
    i.prototype = r === null ? Object.create(r) : (t.prototype = r.prototype,
    new t)
}
var Vf = `
    attribute vec2 aVertexPosition;

    uniform mat3 projectionMatrix;

    uniform float strength;

    varying vec2 vBlurTexCoords[%size%];

    uniform vec4 inputSize;
    uniform vec4 outputFrame;

    vec4 filterVertexPosition( void )
    {
        vec2 position = aVertexPosition * max(outputFrame.zw, vec2(0.)) + outputFrame.xy;

        return vec4((projectionMatrix * vec3(position, 1.0)).xy, 0.0, 1.0);
    }

    vec2 filterTextureCoord( void )
    {
        return aVertexPosition * (outputFrame.zw * inputSize.zw);
    }

    void main(void)
    {
        gl_Position = filterVertexPosition();

        vec2 textureCoord = filterTextureCoord();
        %blur%
    }`;
function Yf(i, r) {
    var t = Math.ceil(i / 2), e = Vf, n = "", s;
    r ? s = "vBlurTexCoords[%index%] =  textureCoord + vec2(%sampleIndex% * strength, 0.0);" : s = "vBlurTexCoords[%index%] =  textureCoord + vec2(0.0, %sampleIndex% * strength);";
    for (var a = 0; a < i; a++) {
        var o = s.replace("%index%", a.toString());
        o = o.replace("%sampleIndex%", a - (t - 1) + ".0"),
        n += o,
        n += `
`
    }
    return e = e.replace("%blur%", n),
    e = e.replace("%size%", i.toString()),
    e
}
var Wf = {
    5: [.153388, .221461, .250301],
    7: [.071303, .131514, .189879, .214607],
    9: [.028532, .067234, .124009, .179044, .20236],
    11: [.0093, .028002, .065984, .121703, .175713, .198596],
    13: [.002406, .009255, .027867, .065666, .121117, .174868, .197641],
    15: [489e-6, .002403, .009246, .02784, .065602, .120999, .174697, .197448]
}
  , qf = ["varying vec2 vBlurTexCoords[%size%];", "uniform sampler2D uSampler;", "void main(void)", "{", "    gl_FragColor = vec4(0.0);", "    %blur%", "}"].join(`
`);
function $f(i) {
    for (var r = Wf[i], t = r.length, e = qf, n = "", s = "gl_FragColor += texture2D(uSampler, vBlurTexCoords[%index%]) * %value%;", a, o = 0; o < i; o++) {
        var h = s.replace("%index%", o.toString());
        a = o,
        o >= t && (a = i - o - 1),
        h = h.replace("%value%", r[a].toString()),
        n += h,
        n += `
`
    }
    return e = e.replace("%blur%", n),
    e = e.replace("%size%", i.toString()),
    e
}
var ah;
(function(i) {
    i[i.WEBGL_LEGACY = 0] = "WEBGL_LEGACY",
    i[i.WEBGL = 1] = "WEBGL",
    i[i.WEBGL2 = 2] = "WEBGL2"
}
)(ah || (ah = {}));
var oh;
(function(i) {
    i[i.UNKNOWN = 0] = "UNKNOWN",
    i[i.WEBGL = 1] = "WEBGL",
    i[i.CANVAS = 2] = "CANVAS"
}
)(oh || (oh = {}));
var hh;
(function(i) {
    i[i.COLOR = 16384] = "COLOR",
    i[i.DEPTH = 256] = "DEPTH",
    i[i.STENCIL = 1024] = "STENCIL"
}
)(hh || (hh = {}));
var uh;
(function(i) {
    i[i.NORMAL = 0] = "NORMAL",
    i[i.ADD = 1] = "ADD",
    i[i.MULTIPLY = 2] = "MULTIPLY",
    i[i.SCREEN = 3] = "SCREEN",
    i[i.OVERLAY = 4] = "OVERLAY",
    i[i.DARKEN = 5] = "DARKEN",
    i[i.LIGHTEN = 6] = "LIGHTEN",
    i[i.COLOR_DODGE = 7] = "COLOR_DODGE",
    i[i.COLOR_BURN = 8] = "COLOR_BURN",
    i[i.HARD_LIGHT = 9] = "HARD_LIGHT",
    i[i.SOFT_LIGHT = 10] = "SOFT_LIGHT",
    i[i.DIFFERENCE = 11] = "DIFFERENCE",
    i[i.EXCLUSION = 12] = "EXCLUSION",
    i[i.HUE = 13] = "HUE",
    i[i.SATURATION = 14] = "SATURATION",
    i[i.COLOR = 15] = "COLOR",
    i[i.LUMINOSITY = 16] = "LUMINOSITY",
    i[i.NORMAL_NPM = 17] = "NORMAL_NPM",
    i[i.ADD_NPM = 18] = "ADD_NPM",
    i[i.SCREEN_NPM = 19] = "SCREEN_NPM",
    i[i.NONE = 20] = "NONE",
    i[i.SRC_OVER = 0] = "SRC_OVER",
    i[i.SRC_IN = 21] = "SRC_IN",
    i[i.SRC_OUT = 22] = "SRC_OUT",
    i[i.SRC_ATOP = 23] = "SRC_ATOP",
    i[i.DST_OVER = 24] = "DST_OVER",
    i[i.DST_IN = 25] = "DST_IN",
    i[i.DST_OUT = 26] = "DST_OUT",
    i[i.DST_ATOP = 27] = "DST_ATOP",
    i[i.ERASE = 26] = "ERASE",
    i[i.SUBTRACT = 28] = "SUBTRACT",
    i[i.XOR = 29] = "XOR"
}
)(uh || (uh = {}));
var lh;
(function(i) {
    i[i.POINTS = 0] = "POINTS",
    i[i.LINES = 1] = "LINES",
    i[i.LINE_LOOP = 2] = "LINE_LOOP",
    i[i.LINE_STRIP = 3] = "LINE_STRIP",
    i[i.TRIANGLES = 4] = "TRIANGLES",
    i[i.TRIANGLE_STRIP = 5] = "TRIANGLE_STRIP",
    i[i.TRIANGLE_FAN = 6] = "TRIANGLE_FAN"
}
)(lh || (lh = {}));
var fh;
(function(i) {
    i[i.RGBA = 6408] = "RGBA",
    i[i.RGB = 6407] = "RGB",
    i[i.ALPHA = 6406] = "ALPHA",
    i[i.LUMINANCE = 6409] = "LUMINANCE",
    i[i.LUMINANCE_ALPHA = 6410] = "LUMINANCE_ALPHA",
    i[i.DEPTH_COMPONENT = 6402] = "DEPTH_COMPONENT",
    i[i.DEPTH_STENCIL = 34041] = "DEPTH_STENCIL"
}
)(fh || (fh = {}));
var ch;
(function(i) {
    i[i.TEXTURE_2D = 3553] = "TEXTURE_2D",
    i[i.TEXTURE_CUBE_MAP = 34067] = "TEXTURE_CUBE_MAP",
    i[i.TEXTURE_2D_ARRAY = 35866] = "TEXTURE_2D_ARRAY",
    i[i.TEXTURE_CUBE_MAP_POSITIVE_X = 34069] = "TEXTURE_CUBE_MAP_POSITIVE_X",
    i[i.TEXTURE_CUBE_MAP_NEGATIVE_X = 34070] = "TEXTURE_CUBE_MAP_NEGATIVE_X",
    i[i.TEXTURE_CUBE_MAP_POSITIVE_Y = 34071] = "TEXTURE_CUBE_MAP_POSITIVE_Y",
    i[i.TEXTURE_CUBE_MAP_NEGATIVE_Y = 34072] = "TEXTURE_CUBE_MAP_NEGATIVE_Y",
    i[i.TEXTURE_CUBE_MAP_POSITIVE_Z = 34073] = "TEXTURE_CUBE_MAP_POSITIVE_Z",
    i[i.TEXTURE_CUBE_MAP_NEGATIVE_Z = 34074] = "TEXTURE_CUBE_MAP_NEGATIVE_Z"
}
)(ch || (ch = {}));
var dh;
(function(i) {
    i[i.UNSIGNED_BYTE = 5121] = "UNSIGNED_BYTE",
    i[i.UNSIGNED_SHORT = 5123] = "UNSIGNED_SHORT",
    i[i.UNSIGNED_SHORT_5_6_5 = 33635] = "UNSIGNED_SHORT_5_6_5",
    i[i.UNSIGNED_SHORT_4_4_4_4 = 32819] = "UNSIGNED_SHORT_4_4_4_4",
    i[i.UNSIGNED_SHORT_5_5_5_1 = 32820] = "UNSIGNED_SHORT_5_5_5_1",
    i[i.FLOAT = 5126] = "FLOAT",
    i[i.HALF_FLOAT = 36193] = "HALF_FLOAT"
}
)(dh || (dh = {}));
var ph;
(function(i) {
    i[i.NEAREST = 0] = "NEAREST",
    i[i.LINEAR = 1] = "LINEAR"
}
)(ph || (ph = {}));
var vh;
(function(i) {
    i[i.CLAMP = 33071] = "CLAMP",
    i[i.REPEAT = 10497] = "REPEAT",
    i[i.MIRRORED_REPEAT = 33648] = "MIRRORED_REPEAT"
}
)(vh || (vh = {}));
var mh;
(function(i) {
    i[i.OFF = 0] = "OFF",
    i[i.POW2 = 1] = "POW2",
    i[i.ON = 2] = "ON"
}
)(mh || (mh = {}));
var yh;
(function(i) {
    i[i.NPM = 0] = "NPM",
    i[i.UNPACK = 1] = "UNPACK",
    i[i.PMA = 2] = "PMA",
    i[i.NO_PREMULTIPLIED_ALPHA = 0] = "NO_PREMULTIPLIED_ALPHA",
    i[i.PREMULTIPLY_ON_UPLOAD = 1] = "PREMULTIPLY_ON_UPLOAD",
    i[i.PREMULTIPLY_ALPHA = 2] = "PREMULTIPLY_ALPHA"
}
)(yh || (yh = {}));
var Tr;
(function(i) {
    i[i.NO = 0] = "NO",
    i[i.YES = 1] = "YES",
    i[i.AUTO = 2] = "AUTO",
    i[i.BLEND = 0] = "BLEND",
    i[i.CLEAR = 1] = "CLEAR",
    i[i.BLIT = 2] = "BLIT"
}
)(Tr || (Tr = {}));
var gh;
(function(i) {
    i[i.AUTO = 0] = "AUTO",
    i[i.MANUAL = 1] = "MANUAL"
}
)(gh || (gh = {}));
var _h;
(function(i) {
    i.LOW = "lowp",
    i.MEDIUM = "mediump",
    i.HIGH = "highp"
}
)(_h || (_h = {}));
var xh;
(function(i) {
    i[i.NONE = 0] = "NONE",
    i[i.SCISSOR = 1] = "SCISSOR",
    i[i.STENCIL = 2] = "STENCIL",
    i[i.SPRITE = 3] = "SPRITE"
}
)(xh || (xh = {}));
var bh;
(function(i) {
    i[i.NONE = 0] = "NONE",
    i[i.LOW = 2] = "LOW",
    i[i.MEDIUM = 4] = "MEDIUM",
    i[i.HIGH = 8] = "HIGH"
}
)(bh || (bh = {}));
var Ps = function(i) {
    sh(r, i);
    function r(t, e, n, s, a) {
        e === void 0 && (e = 8),
        n === void 0 && (n = 4),
        s === void 0 && (s = R.FILTER_RESOLUTION),
        a === void 0 && (a = 5);
        var o = this
          , h = Yf(a, t)
          , u = $f(a);
        return o = i.call(this, h, u) || this,
        o.horizontal = t,
        o.resolution = s,
        o._quality = 0,
        o.quality = n,
        o.blur = e,
        o
    }
    return r.prototype.apply = function(t, e, n, s) {
        if (n ? this.horizontal ? this.uniforms.strength = 1 / n.width * (n.width / e.width) : this.uniforms.strength = 1 / n.height * (n.height / e.height) : this.horizontal ? this.uniforms.strength = 1 / t.renderer.width * (t.renderer.width / e.width) : this.uniforms.strength = 1 / t.renderer.height * (t.renderer.height / e.height),
        this.uniforms.strength *= this.strength,
        this.uniforms.strength /= this.passes,
        this.passes === 1)
            t.applyFilter(this, e, n, s);
        else {
            var a = t.getFilterTexture()
              , o = t.renderer
              , h = e
              , u = a;
            this.state.blend = !1,
            t.applyFilter(this, h, u, Tr.CLEAR);
            for (var l = 1; l < this.passes - 1; l++) {
                t.bindAndClear(h, Tr.BLIT),
                this.uniforms.uSampler = u;
                var f = u;
                u = h,
                h = f,
                o.shader.bind(this),
                o.geometry.draw(5)
            }
            this.state.blend = !0,
            t.applyFilter(this, u, n, s),
            t.returnFilterTexture(a)
        }
    }
    ,
    Object.defineProperty(r.prototype, "blur", {
        get: function() {
            return this.strength
        },
        set: function(t) {
            this.padding = 1 + Math.abs(t) * 2,
            this.strength = t
        },
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(r.prototype, "quality", {
        get: function() {
            return this._quality
        },
        set: function(t) {
            this._quality = t,
            this.passes = t
        },
        enumerable: !1,
        configurable: !0
    }),
    r
}(Rt)
  , Zf = function(i) {
    sh(r, i);
    function r(t, e, n, s) {
        t === void 0 && (t = 8),
        e === void 0 && (e = 4),
        n === void 0 && (n = R.FILTER_RESOLUTION),
        s === void 0 && (s = 5);
        var a = i.call(this) || this;
        return a.blurXFilter = new Ps(!0,t,e,n,s),
        a.blurYFilter = new Ps(!1,t,e,n,s),
        a.resolution = n,
        a.quality = e,
        a.blur = t,
        a.repeatEdgePixels = !1,
        a
    }
    return r.prototype.apply = function(t, e, n, s) {
        var a = Math.abs(this.blurXFilter.strength)
          , o = Math.abs(this.blurYFilter.strength);
        if (a && o) {
            var h = t.getFilterTexture();
            this.blurXFilter.apply(t, e, h, Tr.CLEAR),
            this.blurYFilter.apply(t, h, n, s),
            t.returnFilterTexture(h)
        } else
            o ? this.blurYFilter.apply(t, e, n, s) : this.blurXFilter.apply(t, e, n, s)
    }
    ,
    r.prototype.updatePadding = function() {
        this._repeatEdgePixels ? this.padding = 0 : this.padding = Math.max(Math.abs(this.blurXFilter.strength), Math.abs(this.blurYFilter.strength)) * 2
    }
    ,
    Object.defineProperty(r.prototype, "blur", {
        get: function() {
            return this.blurXFilter.blur
        },
        set: function(t) {
            this.blurXFilter.blur = this.blurYFilter.blur = t,
            this.updatePadding()
        },
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(r.prototype, "quality", {
        get: function() {
            return this.blurXFilter.quality
        },
        set: function(t) {
            this.blurXFilter.quality = this.blurYFilter.quality = t
        },
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(r.prototype, "blurX", {
        get: function() {
            return this.blurXFilter.blur
        },
        set: function(t) {
            this.blurXFilter.blur = t,
            this.updatePadding()
        },
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(r.prototype, "blurY", {
        get: function() {
            return this.blurYFilter.blur
        },
        set: function(t) {
            this.blurYFilter.blur = t,
            this.updatePadding()
        },
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(r.prototype, "blendMode", {
        get: function() {
            return this.blurYFilter.blendMode
        },
        set: function(t) {
            this.blurYFilter.blendMode = t
        },
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(r.prototype, "repeatEdgePixels", {
        get: function() {
            return this._repeatEdgePixels
        },
        set: function(t) {
            this._repeatEdgePixels = t,
            this.updatePadding()
        },
        enumerable: !1,
        configurable: !0
    }),
    r
}(Rt);
var Is = function(i, r) {
    return Is = Object.setPrototypeOf || {
        __proto__: []
    }instanceof Array && function(t, e) {
        t.__proto__ = e
    }
    || function(t, e) {
        for (var n in e)
            e.hasOwnProperty(n) && (t[n] = e[n])
    }
    ,
    Is(i, r)
};
function Kf(i, r) {
    Is(i, r);
    function t() {
        this.constructor = i
    }
    i.prototype = r === null ? Object.create(r) : (t.prototype = r.prototype,
    new t)
}
var Jf = `varying vec2 vTextureCoord;
uniform sampler2D uSampler;
uniform float m[20];
uniform float uAlpha;

void main(void)
{
    vec4 c = texture2D(uSampler, vTextureCoord);

    if (uAlpha == 0.0) {
        gl_FragColor = c;
        return;
    }

    // Un-premultiply alpha before applying the color matrix. See issue #3539.
    if (c.a > 0.0) {
      c.rgb /= c.a;
    }

    vec4 result;

    result.r = (m[0] * c.r);
        result.r += (m[1] * c.g);
        result.r += (m[2] * c.b);
        result.r += (m[3] * c.a);
        result.r += m[4];

    result.g = (m[5] * c.r);
        result.g += (m[6] * c.g);
        result.g += (m[7] * c.b);
        result.g += (m[8] * c.a);
        result.g += m[9];

    result.b = (m[10] * c.r);
       result.b += (m[11] * c.g);
       result.b += (m[12] * c.b);
       result.b += (m[13] * c.a);
       result.b += m[14];

    result.a = (m[15] * c.r);
       result.a += (m[16] * c.g);
       result.a += (m[17] * c.b);
       result.a += (m[18] * c.a);
       result.a += m[19];

    vec3 rgb = mix(c.rgb, result.rgb, uAlpha);

    // Premultiply alpha again.
    rgb *= result.a;

    gl_FragColor = vec4(rgb, result.a);
}
`
  , Ss = function(i) {
    Kf(r, i);
    function r() {
        var t = this
          , e = {
            m: new Float32Array([1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0]),
            uAlpha: 1
        };
        return t = i.call(this, ii, Jf, e) || this,
        t.alpha = 1,
        t
    }
    return r.prototype._loadMatrix = function(t, e) {
        e === void 0 && (e = !1);
        var n = t;
        e && (this._multiply(n, this.uniforms.m, t),
        n = this._colorMatrix(n)),
        this.uniforms.m = n
    }
    ,
    r.prototype._multiply = function(t, e, n) {
        return t[0] = e[0] * n[0] + e[1] * n[5] + e[2] * n[10] + e[3] * n[15],
        t[1] = e[0] * n[1] + e[1] * n[6] + e[2] * n[11] + e[3] * n[16],
        t[2] = e[0] * n[2] + e[1] * n[7] + e[2] * n[12] + e[3] * n[17],
        t[3] = e[0] * n[3] + e[1] * n[8] + e[2] * n[13] + e[3] * n[18],
        t[4] = e[0] * n[4] + e[1] * n[9] + e[2] * n[14] + e[3] * n[19] + e[4],
        t[5] = e[5] * n[0] + e[6] * n[5] + e[7] * n[10] + e[8] * n[15],
        t[6] = e[5] * n[1] + e[6] * n[6] + e[7] * n[11] + e[8] * n[16],
        t[7] = e[5] * n[2] + e[6] * n[7] + e[7] * n[12] + e[8] * n[17],
        t[8] = e[5] * n[3] + e[6] * n[8] + e[7] * n[13] + e[8] * n[18],
        t[9] = e[5] * n[4] + e[6] * n[9] + e[7] * n[14] + e[8] * n[19] + e[9],
        t[10] = e[10] * n[0] + e[11] * n[5] + e[12] * n[10] + e[13] * n[15],
        t[11] = e[10] * n[1] + e[11] * n[6] + e[12] * n[11] + e[13] * n[16],
        t[12] = e[10] * n[2] + e[11] * n[7] + e[12] * n[12] + e[13] * n[17],
        t[13] = e[10] * n[3] + e[11] * n[8] + e[12] * n[13] + e[13] * n[18],
        t[14] = e[10] * n[4] + e[11] * n[9] + e[12] * n[14] + e[13] * n[19] + e[14],
        t[15] = e[15] * n[0] + e[16] * n[5] + e[17] * n[10] + e[18] * n[15],
        t[16] = e[15] * n[1] + e[16] * n[6] + e[17] * n[11] + e[18] * n[16],
        t[17] = e[15] * n[2] + e[16] * n[7] + e[17] * n[12] + e[18] * n[17],
        t[18] = e[15] * n[3] + e[16] * n[8] + e[17] * n[13] + e[18] * n[18],
        t[19] = e[15] * n[4] + e[16] * n[9] + e[17] * n[14] + e[18] * n[19] + e[19],
        t
    }
    ,
    r.prototype._colorMatrix = function(t) {
        var e = new Float32Array(t);
        return e[4] /= 255,
        e[9] /= 255,
        e[14] /= 255,
        e[19] /= 255,
        e
    }
    ,
    r.prototype.brightness = function(t, e) {
        var n = [t, 0, 0, 0, 0, 0, t, 0, 0, 0, 0, 0, t, 0, 0, 0, 0, 0, 1, 0];
        this._loadMatrix(n, e)
    }
    ,
    r.prototype.greyscale = function(t, e) {
        var n = [t, t, t, 0, 0, t, t, t, 0, 0, t, t, t, 0, 0, 0, 0, 0, 1, 0];
        this._loadMatrix(n, e)
    }
    ,
    r.prototype.blackAndWhite = function(t) {
        var e = [.3, .6, .1, 0, 0, .3, .6, .1, 0, 0, .3, .6, .1, 0, 0, 0, 0, 0, 1, 0];
        this._loadMatrix(e, t)
    }
    ,
    r.prototype.hue = function(t, e) {
        t = (t || 0) / 180 * Math.PI;
        var n = Math.cos(t)
          , s = Math.sin(t)
          , a = Math.sqrt
          , o = 1 / 3
          , h = a(o)
          , u = n + (1 - n) * o
          , l = o * (1 - n) - h * s
          , f = o * (1 - n) + h * s
          , c = o * (1 - n) + h * s
          , d = n + o * (1 - n)
          , p = o * (1 - n) - h * s
          , v = o * (1 - n) - h * s
          , m = o * (1 - n) + h * s
          , g = n + o * (1 - n)
          , w = [u, l, f, 0, 0, c, d, p, 0, 0, v, m, g, 0, 0, 0, 0, 0, 1, 0];
        this._loadMatrix(w, e)
    }
    ,
    r.prototype.contrast = function(t, e) {
        var n = (t || 0) + 1
          , s = -.5 * (n - 1)
          , a = [n, 0, 0, 0, s, 0, n, 0, 0, s, 0, 0, n, 0, s, 0, 0, 0, 1, 0];
        this._loadMatrix(a, e)
    }
    ,
    r.prototype.saturate = function(t, e) {
        t === void 0 && (t = 0);
        var n = t * 2 / 3 + 1
          , s = (n - 1) * -.5
          , a = [n, s, s, 0, 0, s, n, s, 0, 0, s, s, n, 0, 0, 0, 0, 0, 1, 0];
        this._loadMatrix(a, e)
    }
    ,
    r.prototype.desaturate = function() {
        this.saturate(-1)
    }
    ,
    r.prototype.negative = function(t) {
        var e = [-1, 0, 0, 1, 0, 0, -1, 0, 1, 0, 0, 0, -1, 1, 0, 0, 0, 0, 1, 0];
        this._loadMatrix(e, t)
    }
    ,
    r.prototype.sepia = function(t) {
        var e = [.393, .7689999, .18899999, 0, 0, .349, .6859999, .16799999, 0, 0, .272, .5339999, .13099999, 0, 0, 0, 0, 0, 1, 0];
        this._loadMatrix(e, t)
    }
    ,
    r.prototype.technicolor = function(t) {
        var e = [1.9125277891456083, -.8545344976951645, -.09155508482755585, 0, 11.793603434377337, -.3087833385928097, 1.7658908555458428, -.10601743074722245, 0, -70.35205161461398, -.231103377548616, -.7501899197440212, 1.847597816108189, 0, 30.950940869491138, 0, 0, 0, 1, 0];
        this._loadMatrix(e, t)
    }
    ,
    r.prototype.polaroid = function(t) {
        var e = [1.438, -.062, -.062, 0, 0, -.122, 1.378, -.122, 0, 0, -.016, -.016, 1.483, 0, 0, 0, 0, 0, 1, 0];
        this._loadMatrix(e, t)
    }
    ,
    r.prototype.toBGR = function(t) {
        var e = [0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0];
        this._loadMatrix(e, t)
    }
    ,
    r.prototype.kodachrome = function(t) {
        var e = [1.1285582396593525, -.3967382283601348, -.03992559172921793, 0, 63.72958762196502, -.16404339962244616, 1.0835251566291304, -.05498805115633132, 0, 24.732407896706203, -.16786010706155763, -.5603416277695248, 1.6014850761964943, 0, 35.62982807460946, 0, 0, 0, 1, 0];
        this._loadMatrix(e, t)
    }
    ,
    r.prototype.browni = function(t) {
        var e = [.5997023498159715, .34553243048391263, -.2708298674538042, 0, 47.43192855600873, -.037703249837783157, .8609577587992641, .15059552388459913, 0, -36.96841498319127, .24113635128153335, -.07441037908422492, .44972182064877153, 0, -7.562075277591283, 0, 0, 0, 1, 0];
        this._loadMatrix(e, t)
    }
    ,
    r.prototype.vintage = function(t) {
        var e = [.6279345635605994, .3202183420819367, -.03965408211312453, 0, 9.651285835294123, .02578397704808868, .6441188644374771, .03259127616149294, 0, 7.462829176470591, .0466055556782719, -.0851232987247891, .5241648018700465, 0, 5.159190588235296, 0, 0, 0, 1, 0];
        this._loadMatrix(e, t)
    }
    ,
    r.prototype.colorTone = function(t, e, n, s, a) {
        t = t || .2,
        e = e || .15,
        n = n || 16770432,
        s = s || 3375104;
        var o = (n >> 16 & 255) / 255
          , h = (n >> 8 & 255) / 255
          , u = (n & 255) / 255
          , l = (s >> 16 & 255) / 255
          , f = (s >> 8 & 255) / 255
          , c = (s & 255) / 255
          , d = [.3, .59, .11, 0, 0, o, h, u, t, 0, l, f, c, e, 0, o - l, h - f, u - c, 0, 0];
        this._loadMatrix(d, a)
    }
    ,
    r.prototype.night = function(t, e) {
        t = t || .1;
        var n = [t * -2, -t, 0, 0, 0, -t, 0, t, 0, 0, 0, t, t * 2, 0, 0, 0, 0, 0, 1, 0];
        this._loadMatrix(n, e)
    }
    ,
    r.prototype.predator = function(t, e) {
        var n = [11.224130630493164 * t, -4.794486999511719 * t, -2.8746118545532227 * t, 0 * t, .40342438220977783 * t, -3.6330697536468506 * t, 9.193157196044922 * t, -2.951810836791992 * t, 0 * t, -1.316135048866272 * t, -3.2184197902679443 * t, -4.2375030517578125 * t, 7.476448059082031 * t, 0 * t, .8044459223747253 * t, 0, 0, 0, 1, 0];
        this._loadMatrix(n, e)
    }
    ,
    r.prototype.lsd = function(t) {
        var e = [2, -.4, .5, 0, 0, -.5, 2, -.4, 0, 0, -.4, -.5, 3, 0, 0, 0, 0, 0, 1, 0];
        this._loadMatrix(e, t)
    }
    ,
    r.prototype.reset = function() {
        var t = [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0];
        this._loadMatrix(t, !1)
    }
    ,
    Object.defineProperty(r.prototype, "matrix", {
        get: function() {
            return this.uniforms.m
        },
        set: function(t) {
            this.uniforms.m = t
        },
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(r.prototype, "alpha", {
        get: function() {
            return this.uniforms.uAlpha
        },
        set: function(t) {
            this.uniforms.uAlpha = t
        },
        enumerable: !1,
        configurable: !0
    }),
    r
}(Rt);
Ss.prototype.grayscale = Ss.prototype.greyscale;
var Cs = function(i, r) {
    return Cs = Object.setPrototypeOf || {
        __proto__: []
    }instanceof Array && function(t, e) {
        t.__proto__ = e
    }
    || function(t, e) {
        for (var n in e)
            e.hasOwnProperty(n) && (t[n] = e[n])
    }
    ,
    Cs(i, r)
};
function Qf(i, r) {
    Cs(i, r);
    function t() {
        this.constructor = i
    }
    i.prototype = r === null ? Object.create(r) : (t.prototype = r.prototype,
    new t)
}
var tc = `varying vec2 vFilterCoord;
varying vec2 vTextureCoord;

uniform vec2 scale;
uniform mat2 rotation;
uniform sampler2D uSampler;
uniform sampler2D mapSampler;

uniform highp vec4 inputSize;
uniform vec4 inputClamp;

void main(void)
{
  vec4 map =  texture2D(mapSampler, vFilterCoord);

  map -= 0.5;
  map.xy = scale * inputSize.zw * (rotation * map.xy);

  gl_FragColor = texture2D(uSampler, clamp(vec2(vTextureCoord.x + map.x, vTextureCoord.y + map.y), inputClamp.xy, inputClamp.zw));
}
`
  , ec = `attribute vec2 aVertexPosition;

uniform mat3 projectionMatrix;
uniform mat3 filterMatrix;

varying vec2 vTextureCoord;
varying vec2 vFilterCoord;

uniform vec4 inputSize;
uniform vec4 outputFrame;

vec4 filterVertexPosition( void )
{
    vec2 position = aVertexPosition * max(outputFrame.zw, vec2(0.)) + outputFrame.xy;

    return vec4((projectionMatrix * vec3(position, 1.0)).xy, 0.0, 1.0);
}

vec2 filterTextureCoord( void )
{
    return aVertexPosition * (outputFrame.zw * inputSize.zw);
}

void main(void)
{
	gl_Position = filterVertexPosition();
	vTextureCoord = filterTextureCoord();
	vFilterCoord = ( filterMatrix * vec3( vTextureCoord, 1.0)  ).xy;
}
`
  , rc = function(i) {
    Qf(r, i);
    function r(t, e) {
        var n = this
          , s = new rt;
        return t.renderable = !1,
        n = i.call(this, ec, tc, {
            mapSampler: t._texture,
            filterMatrix: s,
            scale: {
                x: 1,
                y: 1
            },
            rotation: new Float32Array([1, 0, 0, 1])
        }) || this,
        n.maskSprite = t,
        n.maskMatrix = s,
        e == null && (e = 20),
        n.scale = new V(e,e),
        n
    }
    return r.prototype.apply = function(t, e, n, s) {
        this.uniforms.filterMatrix = t.calculateSpriteMatrix(this.maskMatrix, this.maskSprite),
        this.uniforms.scale.x = this.scale.x,
        this.uniforms.scale.y = this.scale.y;
        var a = this.maskSprite.worldTransform
          , o = Math.sqrt(a.a * a.a + a.b * a.b)
          , h = Math.sqrt(a.c * a.c + a.d * a.d);
        o !== 0 && h !== 0 && (this.uniforms.rotation[0] = a.a / o,
        this.uniforms.rotation[1] = a.b / o,
        this.uniforms.rotation[2] = a.c / h,
        this.uniforms.rotation[3] = a.d / h),
        t.applyFilter(this, e, n, s)
    }
    ,
    Object.defineProperty(r.prototype, "map", {
        get: function() {
            return this.uniforms.mapSampler
        },
        set: function(t) {
            this.uniforms.mapSampler = t
        },
        enumerable: !1,
        configurable: !0
    }),
    r
}(Rt);
var Es = function(i, r) {
    return Es = Object.setPrototypeOf || {
        __proto__: []
    }instanceof Array && function(t, e) {
        t.__proto__ = e
    }
    || function(t, e) {
        for (var n in e)
            e.hasOwnProperty(n) && (t[n] = e[n])
    }
    ,
    Es(i, r)
};
function ic(i, r) {
    Es(i, r);
    function t() {
        this.constructor = i
    }
    i.prototype = r === null ? Object.create(r) : (t.prototype = r.prototype,
    new t)
}
var nc = `
attribute vec2 aVertexPosition;

uniform mat3 projectionMatrix;

varying vec2 v_rgbNW;
varying vec2 v_rgbNE;
varying vec2 v_rgbSW;
varying vec2 v_rgbSE;
varying vec2 v_rgbM;

varying vec2 vFragCoord;

uniform vec4 inputPixel;
uniform vec4 outputFrame;

vec4 filterVertexPosition( void )
{
    vec2 position = aVertexPosition * max(outputFrame.zw, vec2(0.)) + outputFrame.xy;

    return vec4((projectionMatrix * vec3(position, 1.0)).xy, 0.0, 1.0);
}

void texcoords(vec2 fragCoord, vec2 inverseVP,
               out vec2 v_rgbNW, out vec2 v_rgbNE,
               out vec2 v_rgbSW, out vec2 v_rgbSE,
               out vec2 v_rgbM) {
    v_rgbNW = (fragCoord + vec2(-1.0, -1.0)) * inverseVP;
    v_rgbNE = (fragCoord + vec2(1.0, -1.0)) * inverseVP;
    v_rgbSW = (fragCoord + vec2(-1.0, 1.0)) * inverseVP;
    v_rgbSE = (fragCoord + vec2(1.0, 1.0)) * inverseVP;
    v_rgbM = vec2(fragCoord * inverseVP);
}

void main(void) {

   gl_Position = filterVertexPosition();

   vFragCoord = aVertexPosition * outputFrame.zw;

   texcoords(vFragCoord, inputPixel.zw, v_rgbNW, v_rgbNE, v_rgbSW, v_rgbSE, v_rgbM);
}
`
  , sc = `varying vec2 v_rgbNW;
varying vec2 v_rgbNE;
varying vec2 v_rgbSW;
varying vec2 v_rgbSE;
varying vec2 v_rgbM;

varying vec2 vFragCoord;
uniform sampler2D uSampler;
uniform highp vec4 inputPixel;


/**
 Basic FXAA implementation based on the code on geeks3d.com with the
 modification that the texture2DLod stuff was removed since it's
 unsupported by WebGL.

 --

 From:
 https://github.com/mitsuhiko/webgl-meincraft

 Copyright (c) 2011 by Armin Ronacher.

 Some rights reserved.

 Redistribution and use in source and binary forms, with or without
 modification, are permitted provided that the following conditions are
 met:

 * Redistributions of source code must retain the above copyright
 notice, this list of conditions and the following disclaimer.

 * Redistributions in binary form must reproduce the above
 copyright notice, this list of conditions and the following
 disclaimer in the documentation and/or other materials provided
 with the distribution.

 * The names of the contributors may not be used to endorse or
 promote products derived from this software without specific
 prior written permission.

 THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
 "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
 LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
 A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
 OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
 SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
 LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
 DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
 THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

#ifndef FXAA_REDUCE_MIN
#define FXAA_REDUCE_MIN   (1.0/ 128.0)
#endif
#ifndef FXAA_REDUCE_MUL
#define FXAA_REDUCE_MUL   (1.0 / 8.0)
#endif
#ifndef FXAA_SPAN_MAX
#define FXAA_SPAN_MAX     8.0
#endif

//optimized version for mobile, where dependent
//texture reads can be a bottleneck
vec4 fxaa(sampler2D tex, vec2 fragCoord, vec2 inverseVP,
          vec2 v_rgbNW, vec2 v_rgbNE,
          vec2 v_rgbSW, vec2 v_rgbSE,
          vec2 v_rgbM) {
    vec4 color;
    vec3 rgbNW = texture2D(tex, v_rgbNW).xyz;
    vec3 rgbNE = texture2D(tex, v_rgbNE).xyz;
    vec3 rgbSW = texture2D(tex, v_rgbSW).xyz;
    vec3 rgbSE = texture2D(tex, v_rgbSE).xyz;
    vec4 texColor = texture2D(tex, v_rgbM);
    vec3 rgbM  = texColor.xyz;
    vec3 luma = vec3(0.299, 0.587, 0.114);
    float lumaNW = dot(rgbNW, luma);
    float lumaNE = dot(rgbNE, luma);
    float lumaSW = dot(rgbSW, luma);
    float lumaSE = dot(rgbSE, luma);
    float lumaM  = dot(rgbM,  luma);
    float lumaMin = min(lumaM, min(min(lumaNW, lumaNE), min(lumaSW, lumaSE)));
    float lumaMax = max(lumaM, max(max(lumaNW, lumaNE), max(lumaSW, lumaSE)));

    mediump vec2 dir;
    dir.x = -((lumaNW + lumaNE) - (lumaSW + lumaSE));
    dir.y =  ((lumaNW + lumaSW) - (lumaNE + lumaSE));

    float dirReduce = max((lumaNW + lumaNE + lumaSW + lumaSE) *
                          (0.25 * FXAA_REDUCE_MUL), FXAA_REDUCE_MIN);

    float rcpDirMin = 1.0 / (min(abs(dir.x), abs(dir.y)) + dirReduce);
    dir = min(vec2(FXAA_SPAN_MAX, FXAA_SPAN_MAX),
              max(vec2(-FXAA_SPAN_MAX, -FXAA_SPAN_MAX),
                  dir * rcpDirMin)) * inverseVP;

    vec3 rgbA = 0.5 * (
                       texture2D(tex, fragCoord * inverseVP + dir * (1.0 / 3.0 - 0.5)).xyz +
                       texture2D(tex, fragCoord * inverseVP + dir * (2.0 / 3.0 - 0.5)).xyz);
    vec3 rgbB = rgbA * 0.5 + 0.25 * (
                                     texture2D(tex, fragCoord * inverseVP + dir * -0.5).xyz +
                                     texture2D(tex, fragCoord * inverseVP + dir * 0.5).xyz);

    float lumaB = dot(rgbB, luma);
    if ((lumaB < lumaMin) || (lumaB > lumaMax))
        color = vec4(rgbA, texColor.a);
    else
        color = vec4(rgbB, texColor.a);
    return color;
}

void main() {

      vec4 color;

      color = fxaa(uSampler, vFragCoord, inputPixel.zw, v_rgbNW, v_rgbNE, v_rgbSW, v_rgbSE, v_rgbM);

      gl_FragColor = color;
}
`
  , ac = function(i) {
    ic(r, i);
    function r() {
        return i.call(this, nc, sc) || this
    }
    return r
}(Rt);
var As = function(i, r) {
    return As = Object.setPrototypeOf || {
        __proto__: []
    }instanceof Array && function(t, e) {
        t.__proto__ = e
    }
    || function(t, e) {
        for (var n in e)
            e.hasOwnProperty(n) && (t[n] = e[n])
    }
    ,
    As(i, r)
};
function oc(i, r) {
    As(i, r);
    function t() {
        this.constructor = i
    }
    i.prototype = r === null ? Object.create(r) : (t.prototype = r.prototype,
    new t)
}
var hc = `precision highp float;

varying vec2 vTextureCoord;
varying vec4 vColor;

uniform float uNoise;
uniform float uSeed;
uniform sampler2D uSampler;

float rand(vec2 co)
{
    return fract(sin(dot(co.xy, vec2(12.9898, 78.233))) * 43758.5453);
}

void main()
{
    vec4 color = texture2D(uSampler, vTextureCoord);
    float randomValue = rand(gl_FragCoord.xy * uSeed);
    float diff = (randomValue - 0.5) * uNoise;

    // Un-premultiply alpha before applying the color matrix. See issue #3539.
    if (color.a > 0.0) {
        color.rgb /= color.a;
    }

    color.r += diff;
    color.g += diff;
    color.b += diff;

    // Premultiply alpha again.
    color.rgb *= color.a;

    gl_FragColor = color;
}
`
  , uc = function(i) {
    oc(r, i);
    function r(t, e) {
        t === void 0 && (t = .5),
        e === void 0 && (e = Math.random());
        var n = i.call(this, ii, hc, {
            uNoise: 0,
            uSeed: 0
        }) || this;
        return n.noise = t,
        n.seed = e,
        n
    }
    return Object.defineProperty(r.prototype, "noise", {
        get: function() {
            return this.uniforms.uNoise
        },
        set: function(t) {
            this.uniforms.uNoise = t
        },
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(r.prototype, "seed", {
        get: function() {
            return this.uniforms.uSeed
        },
        set: function(t) {
            this.uniforms.uSeed = t
        },
        enumerable: !1,
        configurable: !0
    }),
    r
}(Rt);
var Th = new rt;
Q.prototype._cacheAsBitmap = !1;
Q.prototype._cacheData = null;
var lc = function() {
    function i() {
        this.textureCacheId = null,
        this.originalRender = null,
        this.originalRenderCanvas = null,
        this.originalCalculateBounds = null,
        this.originalGetLocalBounds = null,
        this.originalUpdateTransform = null,
        this.originalDestroy = null,
        this.originalMask = null,
        this.originalFilterArea = null,
        this.originalContainsPoint = null,
        this.sprite = null
    }
    return i
}();
Object.defineProperties(Q.prototype, {
    cacheAsBitmap: {
        get: function() {
            return this._cacheAsBitmap
        },
        set: function(i) {
            if (this._cacheAsBitmap !== i) {
                this._cacheAsBitmap = i;
                var r;
                i ? (this._cacheData || (this._cacheData = new lc),
                r = this._cacheData,
                r.originalRender = this.render,
                r.originalRenderCanvas = this.renderCanvas,
                r.originalUpdateTransform = this.updateTransform,
                r.originalCalculateBounds = this.calculateBounds,
                r.originalGetLocalBounds = this.getLocalBounds,
                r.originalDestroy = this.destroy,
                r.originalContainsPoint = this.containsPoint,
                r.originalMask = this._mask,
                r.originalFilterArea = this.filterArea,
                this.render = this._renderCached,
                this.renderCanvas = this._renderCachedCanvas,
                this.destroy = this._cacheAsBitmapDestroy) : (r = this._cacheData,
                r.sprite && this._destroyCachedDisplayObject(),
                this.render = r.originalRender,
                this.renderCanvas = r.originalRenderCanvas,
                this.calculateBounds = r.originalCalculateBounds,
                this.getLocalBounds = r.originalGetLocalBounds,
                this.destroy = r.originalDestroy,
                this.updateTransform = r.originalUpdateTransform,
                this.containsPoint = r.originalContainsPoint,
                this._mask = r.originalMask,
                this.filterArea = r.originalFilterArea)
            }
        }
    }
});
Q.prototype._renderCached = function(r) {
    !this.visible || this.worldAlpha <= 0 || !this.renderable || (this._initCachedDisplayObject(r),
    this._cacheData.sprite.transform._worldID = this.transform._worldID,
    this._cacheData.sprite.worldAlpha = this.worldAlpha,
    this._cacheData.sprite._render(r))
}
;
Q.prototype._initCachedDisplayObject = function(r) {
    if (!(this._cacheData && this._cacheData.sprite)) {
        var t = this.alpha;
        this.alpha = 1,
        r.batch.flush();
        var e = this.getLocalBounds(null, !0).clone();
        if (this.filters) {
            var n = this.filters[0].padding;
            e.pad(n)
        }
        e.ceil(R.RESOLUTION);
        var s = r.renderTexture.current
          , a = r.renderTexture.sourceFrame.clone()
          , o = r.projection.transform
          , h = ee.create({
            width: e.width,
            height: e.height
        })
          , u = "cacheAsBitmap_" + ce();
        this._cacheData.textureCacheId = u,
        q.addToCache(h.baseTexture, u),
        L.addToCache(h, u);
        var l = this.transform.localTransform.copyTo(Th).invert().translate(-e.x, -e.y);
        this.render = this._cacheData.originalRender,
        r.render(this, h, !0, l, !1),
        r.projection.transform = o,
        r.renderTexture.bind(s, a),
        this.render = this._renderCached,
        this.updateTransform = this.displayObjectUpdateTransform,
        this.calculateBounds = this._calculateCachedBounds,
        this.getLocalBounds = this._getCachedLocalBounds,
        this._mask = null,
        this.filterArea = null;
        var f = new vt(h);
        f.transform.worldTransform = this.transform.worldTransform,
        f.anchor.x = -(e.x / e.width),
        f.anchor.y = -(e.y / e.height),
        f.alpha = t,
        f._bounds = this._bounds,
        this._cacheData.sprite = f,
        this.transform._parentID = -1,
        this.parent ? this.updateTransform() : (this.enableTempParent(),
        this.updateTransform(),
        this.disableTempParent(null)),
        this.containsPoint = f.containsPoint.bind(f)
    }
}
;
Q.prototype._renderCachedCanvas = function(r) {
    !this.visible || this.worldAlpha <= 0 || !this.renderable || (this._initCachedDisplayObjectCanvas(r),
    this._cacheData.sprite.worldAlpha = this.worldAlpha,
    this._cacheData.sprite._renderCanvas(r))
}
;
Q.prototype._initCachedDisplayObjectCanvas = function(r) {
    if (!(this._cacheData && this._cacheData.sprite)) {
        var t = this.getLocalBounds(null, !0)
          , e = this.alpha;
        this.alpha = 1;
        var n = r.context
          , s = r._projTransform;
        t.ceil(R.RESOLUTION);
        var a = ee.create({
            width: t.width,
            height: t.height
        })
          , o = "cacheAsBitmap_" + ce();
        this._cacheData.textureCacheId = o,
        q.addToCache(a.baseTexture, o),
        L.addToCache(a, o);
        var h = Th;
        this.transform.localTransform.copyTo(h),
        h.invert(),
        h.tx -= t.x,
        h.ty -= t.y,
        this.renderCanvas = this._cacheData.originalRenderCanvas,
        r.render(this, a, !0, h, !1),
        r.context = n,
        r._projTransform = s,
        this.renderCanvas = this._renderCachedCanvas,
        this.updateTransform = this.displayObjectUpdateTransform,
        this.calculateBounds = this._calculateCachedBounds,
        this.getLocalBounds = this._getCachedLocalBounds,
        this._mask = null,
        this.filterArea = null;
        var u = new vt(a);
        u.transform.worldTransform = this.transform.worldTransform,
        u.anchor.x = -(t.x / t.width),
        u.anchor.y = -(t.y / t.height),
        u.alpha = e,
        u._bounds = this._bounds,
        this._cacheData.sprite = u,
        this.transform._parentID = -1,
        this.parent ? this.updateTransform() : (this.parent = r._tempDisplayObjectParent,
        this.updateTransform(),
        this.parent = null),
        this.containsPoint = u.containsPoint.bind(u)
    }
}
;
Q.prototype._calculateCachedBounds = function() {
    this._bounds.clear(),
    this._cacheData.sprite.transform._worldID = this.transform._worldID,
    this._cacheData.sprite._calculateBounds(),
    this._bounds.updateID = this._boundsID
}
;
Q.prototype._getCachedLocalBounds = function() {
    return this._cacheData.sprite.getLocalBounds(null)
}
;
Q.prototype._destroyCachedDisplayObject = function() {
    this._cacheData.sprite._texture.destroy(!0),
    this._cacheData.sprite = null,
    q.removeFromCache(this._cacheData.textureCacheId),
    L.removeFromCache(this._cacheData.textureCacheId),
    this._cacheData.textureCacheId = null
}
;
Q.prototype._cacheAsBitmapDestroy = function(r) {
    this.cacheAsBitmap = !1,
    this.destroy(r)
}
;
Q.prototype.name = null;
ot.prototype.getChildByName = function(r, t) {
    for (var e = 0, n = this.children.length; e < n; e++)
        if (this.children[e].name === r)
            return this.children[e];
    if (t)
        for (var e = 0, n = this.children.length; e < n; e++) {
            var s = this.children[e];
            if (!!s.getChildByName) {
                var a = this.children[e].getChildByName(r, !0);
                if (a)
                    return a
            }
        }
    return null
}
;
Q.prototype.getGlobalPosition = function(r, t) {
    return r === void 0 && (r = new V),
    t === void 0 && (t = !1),
    this.parent ? this.parent.toGlobal(this.position, r, t) : (r.x = this.position.x,
    r.y = this.position.y),
    r
}
;
var Os = function(i, r) {
    return Os = Object.setPrototypeOf || {
        __proto__: []
    }instanceof Array && function(t, e) {
        t.__proto__ = e
    }
    || function(t, e) {
        for (var n in e)
            e.hasOwnProperty(n) && (t[n] = e[n])
    }
    ,
    Os(i, r)
};
function qe(i, r) {
    Os(i, r);
    function t() {
        this.constructor = i
    }
    i.prototype = r === null ? Object.create(r) : (t.prototype = r.prototype,
    new t)
}
var Rs = function(i) {
    qe(r, i);
    function r(t, e, n, s) {
        t === void 0 && (t = 100),
        e === void 0 && (e = 100),
        n === void 0 && (n = 10),
        s === void 0 && (s = 10);
        var a = i.call(this) || this;
        return a.segWidth = n,
        a.segHeight = s,
        a.width = t,
        a.height = e,
        a.build(),
        a
    }
    return r.prototype.build = function() {
        for (var t = this.segWidth * this.segHeight, e = [], n = [], s = [], a = this.segWidth - 1, o = this.segHeight - 1, h = this.width / a, u = this.height / o, l = 0; l < t; l++) {
            var f = l % this.segWidth
              , c = l / this.segWidth | 0;
            e.push(f * h, c * u),
            n.push(f / a, c / o)
        }
        for (var d = a * o, l = 0; l < d; l++) {
            var p = l % a
              , v = l / a | 0
              , m = v * this.segWidth + p
              , g = v * this.segWidth + p + 1
              , w = (v + 1) * this.segWidth + p
              , y = (v + 1) * this.segWidth + p + 1;
            s.push(m, g, w, g, y, w)
        }
        this.buffers[0].data = new Float32Array(e),
        this.buffers[1].data = new Float32Array(n),
        this.indexBuffer.data = new Uint16Array(s),
        this.buffers[0].update(),
        this.buffers[1].update(),
        this.indexBuffer.update()
    }
    ,
    r
}(Ye)
  , Ms = function(i) {
    qe(r, i);
    function r(t, e, n) {
        t === void 0 && (t = 200),
        n === void 0 && (n = 0);
        var s = i.call(this, new Float32Array(e.length * 4), new Float32Array(e.length * 4), new Uint16Array((e.length - 1) * 6)) || this;
        return s.points = e,
        s._width = t,
        s.textureScale = n,
        s.build(),
        s
    }
    return Object.defineProperty(r.prototype, "width", {
        get: function() {
            return this._width
        },
        enumerable: !1,
        configurable: !0
    }),
    r.prototype.build = function() {
        var t = this.points;
        if (!!t) {
            var e = this.getBuffer("aVertexPosition")
              , n = this.getBuffer("aTextureCoord")
              , s = this.getIndex();
            if (!(t.length < 1)) {
                e.data.length / 4 !== t.length && (e.data = new Float32Array(t.length * 4),
                n.data = new Float32Array(t.length * 4),
                s.data = new Uint16Array((t.length - 1) * 6));
                var a = n.data
                  , o = s.data;
                a[0] = 0,
                a[1] = 0,
                a[2] = 0,
                a[3] = 1;
                for (var h = 0, u = t[0], l = this._width * this.textureScale, f = t.length, c = 0; c < f; c++) {
                    var d = c * 4;
                    if (this.textureScale > 0) {
                        var p = u.x - t[c].x
                          , v = u.y - t[c].y
                          , m = Math.sqrt(p * p + v * v);
                        u = t[c],
                        h += m / l
                    } else
                        h = c / (f - 1);
                    a[d] = h,
                    a[d + 1] = 0,
                    a[d + 2] = h,
                    a[d + 3] = 1
                }
                for (var g = 0, c = 0; c < f - 1; c++) {
                    var d = c * 2;
                    o[g++] = d,
                    o[g++] = d + 1,
                    o[g++] = d + 2,
                    o[g++] = d + 2,
                    o[g++] = d + 1,
                    o[g++] = d + 3
                }
                n.update(),
                s.update(),
                this.updateVertices()
            }
        }
    }
    ,
    r.prototype.updateVertices = function() {
        var t = this.points;
        if (!(t.length < 1)) {
            for (var e = t[0], n, s = 0, a = 0, o = this.buffers[0].data, h = t.length, u = 0; u < h; u++) {
                var l = t[u]
                  , f = u * 4;
                u < t.length - 1 ? n = t[u + 1] : n = l,
                a = -(n.x - e.x),
                s = n.y - e.y;
                var c = Math.sqrt(s * s + a * a)
                  , d = this.textureScale > 0 ? this.textureScale * this._width / 2 : this._width / 2;
                s /= c,
                a /= c,
                s *= d,
                a *= d,
                o[f] = l.x + s,
                o[f + 1] = l.y + a,
                o[f + 2] = l.x - s,
                o[f + 3] = l.y - a,
                e = l
            }
            this.buffers[0].update()
        }
    }
    ,
    r.prototype.update = function() {
        this.textureScale > 0 ? this.build() : this.updateVertices()
    }
    ,
    r
}(Ye)
  , wh = function(i) {
    qe(r, i);
    function r(t, e, n) {
        n === void 0 && (n = 0);
        var s = this
          , a = new Ms(t.height,e,n)
          , o = new Ve(t);
        return n > 0 && (t.baseTexture.wrapMode = At.REPEAT),
        s = i.call(this, a, o) || this,
        s.autoUpdate = !0,
        s
    }
    return r.prototype._render = function(t) {
        var e = this.geometry;
        (this.autoUpdate || e._width !== this.shader.texture.height) && (e._width = this.shader.texture.height,
        e.update()),
        i.prototype._render.call(this, t)
    }
    ,
    r
}(Ie)
  , Fs = function(i) {
    qe(r, i);
    function r(t, e, n) {
        var s = this
          , a = new Rs(t.width,t.height,e,n)
          , o = new Ve(L.WHITE);
        return s = i.call(this, a, o) || this,
        s.texture = t,
        s
    }
    return r.prototype.textureUpdated = function() {
        this._textureID = this.shader.texture._updateID;
        var t = this.geometry;
        t.width = this.shader.texture.width,
        t.height = this.shader.texture.height,
        t.build()
    }
    ,
    Object.defineProperty(r.prototype, "texture", {
        get: function() {
            return this.shader.texture
        },
        set: function(t) {
            this.shader.texture !== t && (this.shader.texture = t,
            this._textureID = -1,
            t.baseTexture.valid ? this.textureUpdated() : t.once("update", this.textureUpdated, this))
        },
        enumerable: !1,
        configurable: !0
    }),
    r.prototype._render = function(t) {
        this._textureID !== this.shader.texture._updateID && this.textureUpdated(),
        i.prototype._render.call(this, t)
    }
    ,
    r.prototype.destroy = function(t) {
        this.shader.texture.off("update", this.textureUpdated, this),
        i.prototype.destroy.call(this, t)
    }
    ,
    r
}(Ie)
  , Ph = function(i) {
    qe(r, i);
    function r(t, e, n, s, a) {
        t === void 0 && (t = L.EMPTY);
        var o = this
          , h = new Ye(e,n,s);
        h.getBuffer("aVertexPosition").static = !1;
        var u = new Ve(t);
        return o = i.call(this, h, u, null, a) || this,
        o.autoUpdate = !0,
        o
    }
    return Object.defineProperty(r.prototype, "vertices", {
        get: function() {
            return this.geometry.getBuffer("aVertexPosition").data
        },
        set: function(t) {
            this.geometry.getBuffer("aVertexPosition").data = t
        },
        enumerable: !1,
        configurable: !0
    }),
    r.prototype._render = function(t) {
        this.autoUpdate && this.geometry.getBuffer("aVertexPosition").update(),
        i.prototype._render.call(this, t)
    }
    ,
    r
}(Ie)
  , pi = 10
  , Ih = function(i) {
    qe(r, i);
    function r(t, e, n, s, a) {
        e === void 0 && (e = pi),
        n === void 0 && (n = pi),
        s === void 0 && (s = pi),
        a === void 0 && (a = pi);
        var o = i.call(this, L.WHITE, 4, 4) || this;
        return o._origWidth = t.orig.width,
        o._origHeight = t.orig.height,
        o._width = o._origWidth,
        o._height = o._origHeight,
        o._leftWidth = e,
        o._rightWidth = s,
        o._topHeight = n,
        o._bottomHeight = a,
        o.texture = t,
        o
    }
    return r.prototype.textureUpdated = function() {
        this._textureID = this.shader.texture._updateID,
        this._refresh()
    }
    ,
    Object.defineProperty(r.prototype, "vertices", {
        get: function() {
            return this.geometry.getBuffer("aVertexPosition").data
        },
        set: function(t) {
            this.geometry.getBuffer("aVertexPosition").data = t
        },
        enumerable: !1,
        configurable: !0
    }),
    r.prototype.updateHorizontalVertices = function() {
        var t = this.vertices
          , e = this._getMinScale();
        t[9] = t[11] = t[13] = t[15] = this._topHeight * e,
        t[17] = t[19] = t[21] = t[23] = this._height - this._bottomHeight * e,
        t[25] = t[27] = t[29] = t[31] = this._height
    }
    ,
    r.prototype.updateVerticalVertices = function() {
        var t = this.vertices
          , e = this._getMinScale();
        t[2] = t[10] = t[18] = t[26] = this._leftWidth * e,
        t[4] = t[12] = t[20] = t[28] = this._width - this._rightWidth * e,
        t[6] = t[14] = t[22] = t[30] = this._width
    }
    ,
    r.prototype._getMinScale = function() {
        var t = this._leftWidth + this._rightWidth
          , e = this._width > t ? 1 : this._width / t
          , n = this._topHeight + this._bottomHeight
          , s = this._height > n ? 1 : this._height / n
          , a = Math.min(e, s);
        return a
    }
    ,
    Object.defineProperty(r.prototype, "width", {
        get: function() {
            return this._width
        },
        set: function(t) {
            this._width = t,
            this._refresh()
        },
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(r.prototype, "height", {
        get: function() {
            return this._height
        },
        set: function(t) {
            this._height = t,
            this._refresh()
        },
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(r.prototype, "leftWidth", {
        get: function() {
            return this._leftWidth
        },
        set: function(t) {
            this._leftWidth = t,
            this._refresh()
        },
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(r.prototype, "rightWidth", {
        get: function() {
            return this._rightWidth
        },
        set: function(t) {
            this._rightWidth = t,
            this._refresh()
        },
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(r.prototype, "topHeight", {
        get: function() {
            return this._topHeight
        },
        set: function(t) {
            this._topHeight = t,
            this._refresh()
        },
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(r.prototype, "bottomHeight", {
        get: function() {
            return this._bottomHeight
        },
        set: function(t) {
            this._bottomHeight = t,
            this._refresh()
        },
        enumerable: !1,
        configurable: !0
    }),
    r.prototype._refresh = function() {
        var t = this.texture
          , e = this.geometry.buffers[1].data;
        this._origWidth = t.orig.width,
        this._origHeight = t.orig.height;
        var n = 1 / this._origWidth
          , s = 1 / this._origHeight;
        e[0] = e[8] = e[16] = e[24] = 0,
        e[1] = e[3] = e[5] = e[7] = 0,
        e[6] = e[14] = e[22] = e[30] = 1,
        e[25] = e[27] = e[29] = e[31] = 1,
        e[2] = e[10] = e[18] = e[26] = n * this._leftWidth,
        e[4] = e[12] = e[20] = e[28] = 1 - n * this._rightWidth,
        e[9] = e[11] = e[13] = e[15] = s * this._topHeight,
        e[17] = e[19] = e[21] = e[23] = 1 - s * this._bottomHeight,
        this.updateHorizontalVertices(),
        this.updateVerticalVertices(),
        this.geometry.buffers[0].update(),
        this.geometry.buffers[1].update()
    }
    ,
    r
}(Fs);
var Ls = function(i, r) {
    return Ls = Object.setPrototypeOf || {
        __proto__: []
    }instanceof Array && function(t, e) {
        t.__proto__ = e
    }
    || function(t, e) {
        for (var n in e)
            e.hasOwnProperty(n) && (t[n] = e[n])
    }
    ,
    Ls(i, r)
};
function fc(i, r) {
    Ls(i, r);
    function t() {
        this.constructor = i
    }
    i.prototype = r === null ? Object.create(r) : (t.prototype = r.prototype,
    new t)
}
var It = function(i) {
    fc(r, i);
    function r(t, e) {
        e === void 0 && (e = !0);
        var n = i.call(this, t[0]instanceof L ? t[0] : t[0].texture) || this;
        return n._textures = null,
        n._durations = null,
        n._autoUpdate = e,
        n._isConnectedToTicker = !1,
        n.animationSpeed = 1,
        n.loop = !0,
        n.updateAnchor = !1,
        n.onComplete = null,
        n.onFrameChange = null,
        n.onLoop = null,
        n._currentTime = 0,
        n._playing = !1,
        n._previousFrame = null,
        n.textures = t,
        n
    }
    return r.prototype.stop = function() {
        !this._playing || (this._playing = !1,
        this._autoUpdate && this._isConnectedToTicker && (it.shared.remove(this.update, this),
        this._isConnectedToTicker = !1))
    }
    ,
    r.prototype.play = function() {
        this._playing || (this._playing = !0,
        this._autoUpdate && !this._isConnectedToTicker && (it.shared.add(this.update, this, wt.HIGH),
        this._isConnectedToTicker = !0))
    }
    ,
    r.prototype.gotoAndStop = function(t) {
        this.stop();
        var e = this.currentFrame;
        this._currentTime = t,
        e !== this.currentFrame && this.updateTexture()
    }
    ,
    r.prototype.gotoAndPlay = function(t) {
        var e = this.currentFrame;
        this._currentTime = t,
        e !== this.currentFrame && this.updateTexture(),
        this.play()
    }
    ,
    r.prototype.update = function(t) {
        var e = this.animationSpeed * t
          , n = this.currentFrame;
        if (this._durations !== null) {
            var s = this._currentTime % 1 * this._durations[this.currentFrame];
            for (s += e / 60 * 1e3; s < 0; )
                this._currentTime--,
                s += this._durations[this.currentFrame];
            var a = Math.sign(this.animationSpeed * t);
            for (this._currentTime = Math.floor(this._currentTime); s >= this._durations[this.currentFrame]; )
                s -= this._durations[this.currentFrame] * a,
                this._currentTime += a;
            this._currentTime += s / this._durations[this.currentFrame]
        } else
            this._currentTime += e;
        this._currentTime < 0 && !this.loop ? (this.gotoAndStop(0),
        this.onComplete && this.onComplete()) : this._currentTime >= this._textures.length && !this.loop ? (this.gotoAndStop(this._textures.length - 1),
        this.onComplete && this.onComplete()) : n !== this.currentFrame && (this.loop && this.onLoop && (this.animationSpeed > 0 && this.currentFrame < n ? this.onLoop() : this.animationSpeed < 0 && this.currentFrame > n && this.onLoop()),
        this.updateTexture())
    }
    ,
    r.prototype.updateTexture = function() {
        var t = this.currentFrame;
        this._previousFrame !== t && (this._previousFrame = t,
        this._texture = this._textures[t],
        this._textureID = -1,
        this._textureTrimmedID = -1,
        this._cachedTint = 16777215,
        this.uvs = this._texture._uvs.uvsFloat32,
        this.updateAnchor && this._anchor.copyFrom(this._texture.defaultAnchor),
        this.onFrameChange && this.onFrameChange(this.currentFrame))
    }
    ,
    r.prototype.destroy = function(t) {
        this.stop(),
        i.prototype.destroy.call(this, t),
        this.onComplete = null,
        this.onFrameChange = null,
        this.onLoop = null
    }
    ,
    r.fromFrames = function(t) {
        for (var e = [], n = 0; n < t.length; ++n)
            e.push(L.from(t[n]));
        return new r(e)
    }
    ,
    r.fromImages = function(t) {
        for (var e = [], n = 0; n < t.length; ++n)
            e.push(L.from(t[n]));
        return new r(e)
    }
    ,
    Object.defineProperty(r.prototype, "totalFrames", {
        get: function() {
            return this._textures.length
        },
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(r.prototype, "textures", {
        get: function() {
            return this._textures
        },
        set: function(t) {
            if (t[0]instanceof L)
                this._textures = t,
                this._durations = null;
            else {
                this._textures = [],
                this._durations = [];
                for (var e = 0; e < t.length; e++)
                    this._textures.push(t[e].texture),
                    this._durations.push(t[e].time)
            }
            this._previousFrame = null,
            this.gotoAndStop(0),
            this.updateTexture()
        },
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(r.prototype, "currentFrame", {
        get: function() {
            var t = Math.floor(this._currentTime) % this._textures.length;
            return t < 0 && (t += this._textures.length),
            t
        },
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(r.prototype, "playing", {
        get: function() {
            return this._playing
        },
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(r.prototype, "autoUpdate", {
        get: function() {
            return this._autoUpdate
        },
        set: function(t) {
            t !== this._autoUpdate && (this._autoUpdate = t,
            !this._autoUpdate && this._isConnectedToTicker ? (it.shared.remove(this.update, this),
            this._isConnectedToTicker = !1) : this._autoUpdate && !this._isConnectedToTicker && this._playing && (it.shared.add(this.update, this),
            this._isConnectedToTicker = !0))
        },
        enumerable: !1,
        configurable: !0
    }),
    r
}(vt);
var Ns = function(i, r) {
    return Ns = Object.setPrototypeOf || {
        __proto__: []
    }instanceof Array && function(t, e) {
        t.__proto__ = e
    }
    || function(t, e) {
        for (var n in e)
            e.hasOwnProperty(n) && (t[n] = e[n])
    }
    ,
    Ns(i, r)
};
function Sh(i, r) {
    Ns(i, r);
    function t() {
        this.constructor = i
    }
    i.prototype = r === null ? Object.create(r) : (t.prototype = r.prototype,
    new t)
}
var S = "5.0.0";
function Ch() {
    var i = this;
    Object.defineProperties(i, {
        SVG_SIZE: {
            get: function() {
                return T(S, "PIXI.utils.SVG_SIZE property has moved to PIXI.resources.SVGResource.SVG_SIZE"),
                i.SVGResource.SVG_SIZE
            }
        },
        TransformStatic: {
            get: function() {
                return T(S, "PIXI.TransformStatic class has been removed, use PIXI.Transform"),
                i.Transform
            }
        },
        TransformBase: {
            get: function() {
                return T(S, "PIXI.TransformBase class has been removed, use PIXI.Transform"),
                i.Transform
            }
        },
        TRANSFORM_MODE: {
            get: function() {
                return T(S, "PIXI.TRANSFORM_MODE property has been removed"),
                {
                    STATIC: 0,
                    DYNAMIC: 1
                }
            }
        },
        WebGLRenderer: {
            get: function() {
                return T(S, "PIXI.WebGLRenderer class has moved to PIXI.Renderer"),
                i.Renderer
            }
        },
        CanvasRenderTarget: {
            get: function() {
                return T(S, "PIXI.CanvasRenderTarget class has moved to PIXI.utils.CanvasRenderTarget"),
                i.utils.CanvasRenderTarget
            }
        },
        loader: {
            get: function() {
                return T(S, "PIXI.loader instance has moved to PIXI.Loader.shared"),
                i.Loader.shared
            }
        },
        FilterManager: {
            get: function() {
                return T(S, "PIXI.FilterManager class has moved to PIXI.systems.FilterSystem"),
                i.systems.FilterSystem
            }
        },
        CanvasTinter: {
            get: function() {
                return T("5.2.0", "PIXI.CanvasTinter namespace has moved to PIXI.canvasUtils"),
                i.canvasUtils
            }
        },
        GroupD8: {
            get: function() {
                return T("5.2.0", "PIXI.GroupD8 namespace has moved to PIXI.groupD8"),
                i.groupD8
            }
        }
    }),
    i.accessibility = {},
    Object.defineProperties(i.accessibility, {
        AccessibilityManager: {
            get: function() {
                return T("5.3.0", "PIXI.accessibility.AccessibilityManager moved to PIXI.AccessibilityManager"),
                i.AccessibilityManager
            }
        }
    }),
    i.interaction = {},
    Object.defineProperties(i.interaction, {
        InteractionManager: {
            get: function() {
                return T("5.3.0", "PIXI.interaction.InteractionManager moved to PIXI.InteractionManager"),
                i.InteractionManager
            }
        },
        InteractionData: {
            get: function() {
                return T("5.3.0", "PIXI.interaction.InteractionData moved to PIXI.InteractionData"),
                i.InteractionData
            }
        },
        InteractionEvent: {
            get: function() {
                return T("5.3.0", "PIXI.interaction.InteractionEvent moved to PIXI.InteractionEvent"),
                i.InteractionEvent
            }
        }
    }),
    i.prepare = {},
    Object.defineProperties(i.prepare, {
        BasePrepare: {
            get: function() {
                return T("5.2.1", "PIXI.prepare.BasePrepare moved to PIXI.BasePrepare"),
                i.BasePrepare
            }
        },
        Prepare: {
            get: function() {
                return T("5.2.1", "PIXI.prepare.Prepare moved to PIXI.Prepare"),
                i.Prepare
            }
        },
        CanvasPrepare: {
            get: function() {
                return T("5.2.1", "PIXI.prepare.CanvasPrepare moved to PIXI.CanvasPrepare"),
                i.CanvasPrepare
            }
        }
    }),
    i.extract = {},
    Object.defineProperties(i.extract, {
        Extract: {
            get: function() {
                return T("5.2.1", "PIXI.extract.Extract moved to PIXI.Extract"),
                i.Extract
            }
        },
        CanvasExtract: {
            get: function() {
                return T("5.2.1", "PIXI.extract.CanvasExtract moved to PIXI.CanvasExtract"),
                i.CanvasExtract
            }
        }
    }),
    i.extras = {},
    Object.defineProperties(i.extras, {
        TilingSprite: {
            get: function() {
                return T(S, "PIXI.extras.TilingSprite class has moved to PIXI.TilingSprite"),
                i.TilingSprite
            }
        },
        TilingSpriteRenderer: {
            get: function() {
                return T(S, "PIXI.extras.TilingSpriteRenderer class has moved to PIXI.TilingSpriteRenderer"),
                i.TilingSpriteRenderer
            }
        },
        AnimatedSprite: {
            get: function() {
                return T(S, "PIXI.extras.AnimatedSprite class has moved to PIXI.AnimatedSprite"),
                i.AnimatedSprite
            }
        },
        BitmapText: {
            get: function() {
                return T(S, "PIXI.extras.BitmapText class has moved to PIXI.BitmapText"),
                i.BitmapText
            }
        }
    }),
    i.TilingSprite.fromFrame = function(c, d, p) {
        return T("5.3.0", "TilingSprite.fromFrame is deprecated, use TilingSprite.from"),
        i.TilingSprite.from(c, {
            width: d,
            height: p
        })
    }
    ,
    i.TilingSprite.fromImage = function(c, d, p, v) {
        return v === void 0 && (v = {}),
        T("5.3.0", "TilingSprite.fromImage is deprecated, use TilingSprite.from"),
        v && typeof v != "object" && (v = {
            scaleMode: arguments[4],
            resourceOptions: {
                crossorigin: arguments[3]
            }
        }),
        v.width = d,
        v.height = p,
        i.TilingSprite.from(c, v)
    }
    ,
    Object.defineProperties(i.utils, {
        getSvgSize: {
            get: function() {
                return T(S, "PIXI.utils.getSvgSize function has moved to PIXI.resources.SVGResource.getSize"),
                i.resources.SVGResource.getSize
            }
        }
    }),
    i.mesh = {},
    Object.defineProperties(i.mesh, {
        Mesh: {
            get: function() {
                return T(S, "PIXI.mesh.Mesh class has moved to PIXI.SimpleMesh"),
                i.SimpleMesh
            }
        },
        NineSlicePlane: {
            get: function() {
                return T(S, "PIXI.mesh.NineSlicePlane class has moved to PIXI.NineSlicePlane"),
                i.NineSlicePlane
            }
        },
        Plane: {
            get: function() {
                return T(S, "PIXI.mesh.Plane class has moved to PIXI.SimplePlane"),
                i.SimplePlane
            }
        },
        Rope: {
            get: function() {
                return T(S, "PIXI.mesh.Rope class has moved to PIXI.SimpleRope"),
                i.SimpleRope
            }
        },
        RawMesh: {
            get: function() {
                return T(S, "PIXI.mesh.RawMesh class has moved to PIXI.Mesh"),
                i.Mesh
            }
        },
        CanvasMeshRenderer: {
            get: function() {
                return T(S, "PIXI.mesh.CanvasMeshRenderer class has moved to PIXI.CanvasMeshRenderer"),
                i.CanvasMeshRenderer
            }
        },
        MeshRenderer: {
            get: function() {
                return T(S, "PIXI.mesh.MeshRenderer class has moved to PIXI.MeshRenderer"),
                i.MeshRenderer
            }
        }
    }),
    i.particles = {},
    Object.defineProperties(i.particles, {
        ParticleContainer: {
            get: function() {
                return T(S, "PIXI.particles.ParticleContainer class has moved to PIXI.ParticleContainer"),
                i.ParticleContainer
            }
        },
        ParticleRenderer: {
            get: function() {
                return T(S, "PIXI.particles.ParticleRenderer class has moved to PIXI.ParticleRenderer"),
                i.ParticleRenderer
            }
        }
    }),
    i.ticker = {},
    Object.defineProperties(i.ticker, {
        Ticker: {
            get: function() {
                return T(S, "PIXI.ticker.Ticker class has moved to PIXI.Ticker"),
                i.Ticker
            }
        },
        shared: {
            get: function() {
                return T(S, "PIXI.ticker.shared instance has moved to PIXI.Ticker.shared"),
                i.Ticker.shared
            }
        }
    }),
    i.loaders = {},
    Object.defineProperties(i.loaders, {
        Loader: {
            get: function() {
                return T(S, "PIXI.loaders.Loader class has moved to PIXI.Loader"),
                i.Loader
            }
        },
        Resource: {
            get: function() {
                return T(S, "PIXI.loaders.Resource class has moved to PIXI.LoaderResource"),
                i.LoaderResource
            }
        },
        bitmapFontParser: {
            get: function() {
                return T(S, "PIXI.loaders.bitmapFontParser function has moved to PIXI.BitmapFontLoader.use"),
                i.BitmapFontLoader.use
            }
        },
        parseBitmapFontData: {
            get: function() {
                T(S, "PIXI.loaders.parseBitmapFontData function has removed")
            }
        },
        spritesheetParser: {
            get: function() {
                return T(S, "PIXI.loaders.spritesheetParser function has moved to PIXI.SpritesheetLoader.use"),
                i.SpritesheetLoader.use
            }
        },
        getResourcePath: {
            get: function() {
                return T(S, "PIXI.loaders.getResourcePath property has moved to PIXI.SpritesheetLoader.getResourcePath"),
                i.SpritesheetLoader.getResourcePath
            }
        }
    }),
    i.Loader.addPixiMiddleware = function(c) {
        return T(S, "PIXI.loaders.Loader.addPixiMiddleware function is deprecated, use PIXI.loaders.Loader.registerPlugin"),
        i.loaders.Loader.registerPlugin({
            use: c()
        })
    }
    ;
    var r = function(f) {
        return "on" + f.charAt(0).toUpperCase() + f.slice(1)
    };
    Object.assign(i.Loader.prototype, {
        on: function(f) {
            var c = r(f);
            T(S, "PIXI.Loader#on is completely deprecated, use PIXI.Loader#" + c + ".add")
        },
        once: function(f) {
            var c = r(f);
            T(S, "PIXI.Loader#once is completely deprecated, use PIXI.Loader#" + c + ".once")
        },
        off: function(f) {
            var c = r(f);
            T(S, "PIXI.Loader#off is completely deprecated, use PIXI.Loader#" + c + ".detach")
        }
    }),
    Object.defineProperty(i.extract, "WebGLExtract", {
        get: function() {
            return T(S, "PIXI.extract.WebGLExtract method has moved to PIXI.Extract"),
            i.Extract
        }
    }),
    Object.defineProperty(i.prepare, "WebGLPrepare", {
        get: function() {
            return T(S, "PIXI.prepare.WebGLPrepare class has moved to PIXI.Prepare"),
            i.Prepare
        }
    }),
    i.Container.prototype._renderWebGL = function(c) {
        T(S, "PIXI.Container._renderWebGL method has moved to PIXI.Container._render"),
        this._render(c)
    }
    ,
    i.Container.prototype.renderWebGL = function(c) {
        T(S, "PIXI.Container.renderWebGL method has moved to PIXI.Container.render"),
        this.render(c)
    }
    ,
    i.DisplayObject.prototype.renderWebGL = function(c) {
        T(S, "PIXI.DisplayObject.renderWebGL method has moved to PIXI.DisplayObject.render"),
        this.render(c)
    }
    ,
    i.Container.prototype.renderAdvancedWebGL = function(c) {
        T(S, "PIXI.Container.renderAdvancedWebGL method has moved to PIXI.Container.renderAdvanced"),
        this.renderAdvanced(c)
    }
    ,
    Object.defineProperties(i.settings, {
        TRANSFORM_MODE: {
            get: function() {
                return T(S, "PIXI.settings.TRANSFORM_MODE property has been removed"),
                0
            },
            set: function() {
                T(S, "PIXI.settings.TRANSFORM_MODE property has been removed")
            }
        }
    });
    var t = i.BaseTexture;
    t.prototype.loadSource = function(c) {
        T(S, "PIXI.BaseTexture.loadSource method has been deprecated");
        var d = i.resources.autoDetectResource(c);
        d.internal = !0,
        this.setResource(d),
        this.update()
    }
    ;
    var e = !1;
    Object.defineProperties(t.prototype, {
        hasLoaded: {
            get: function() {
                return T(S, "PIXI.BaseTexture.hasLoaded property has been removed, use PIXI.BaseTexture.valid"),
                this.valid
            }
        },
        imageUrl: {
            get: function() {
                var f;
                return T(S, "PIXI.BaseTexture.imageUrl property has been removed, use PIXI.BaseTexture.resource.url"),
                (f = this.resource) === null || f === void 0 ? void 0 : f.url
            },
            set: function(f) {
                T(S, "PIXI.BaseTexture.imageUrl property has been removed, use PIXI.BaseTexture.resource.url"),
                this.resource && (this.resource.url = f)
            }
        },
        source: {
            get: function() {
                return T(S, "PIXI.BaseTexture.source property has been moved, use `PIXI.BaseTexture.resource.source`"),
                this.resource.source
            },
            set: function(f) {
                T(S, "PIXI.BaseTexture.source property has been moved, use `PIXI.BaseTexture.resource.source` if you want to set HTMLCanvasElement. Otherwise, create new BaseTexture."),
                this.resource && (this.resource.source = f)
            }
        },
        premultiplyAlpha: {
            get: function() {
                return T("5.2.0", "PIXI.BaseTexture.premultiplyAlpha property has been changed to `alphaMode`, see `PIXI.ALPHA_MODES`"),
                this.alphaMode !== 0
            },
            set: function(f) {
                T("5.2.0", "PIXI.BaseTexture.premultiplyAlpha property has been changed to `alphaMode`, see `PIXI.ALPHA_MODES`"),
                this.alphaMode = Number(f)
            }
        },
        _id: {
            get: function() {
                return e || (T("5.2.0", "PIXI.BaseTexture._id batch local field has been changed to `_batchLocation`"),
                e = !0),
                this._batchLocation
            },
            set: function(f) {
                this._batchLocation = f
            }
        }
    }),
    t.fromImage = function(c, d, p, v) {
        T(S, "PIXI.BaseTexture.fromImage method has been replaced with PIXI.BaseTexture.from");
        var m = {
            scale: v,
            crossorigin: d
        };
        return t.from(c, {
            scaleMode: p,
            resourceOptions: m
        })
    }
    ,
    t.fromCanvas = function(c, d) {
        return T(S, "PIXI.BaseTexture.fromCanvas method has been replaced with PIXI.BaseTexture.from"),
        t.from(c, {
            scaleMode: d
        })
    }
    ,
    t.fromSVG = function(c, d, p, v) {
        T(S, "PIXI.BaseTexture.fromSVG method has been replaced with PIXI.BaseTexture.from");
        var m = {
            scale: v,
            crossorigin: d
        };
        return t.from(c, {
            scaleMode: p,
            resourceOptions: m
        })
    }
    ,
    Object.defineProperties(i.resources.ImageResource.prototype, {
        premultiplyAlpha: {
            get: function() {
                return T("5.2.0", "PIXI.resources.ImageResource.premultiplyAlpha property has been changed to `alphaMode`, see `PIXI.ALPHA_MODES`"),
                this.alphaMode !== 0
            },
            set: function(f) {
                T("5.2.0", "PIXI.resources.ImageResource.premultiplyAlpha property has been changed to `alphaMode`, see `PIXI.ALPHA_MODES`"),
                this.alphaMode = Number(f)
            }
        }
    }),
    i.Point.prototype.copy = function(c) {
        return T(S, "PIXI.Point.copy method has been replaced with PIXI.Point.copyFrom"),
        this.copyFrom(c)
    }
    ,
    i.ObservablePoint.prototype.copy = function(c) {
        return T(S, "PIXI.ObservablePoint.copy method has been replaced with PIXI.ObservablePoint.copyFrom"),
        this.copyFrom(c)
    }
    ,
    i.Rectangle.prototype.copy = function(c) {
        return T(S, "PIXI.Rectangle.copy method has been replaced with PIXI.Rectangle.copyFrom"),
        this.copyFrom(c)
    }
    ,
    i.Matrix.prototype.copy = function(c) {
        return T(S, "PIXI.Matrix.copy method has been replaced with PIXI.Matrix.copyTo"),
        this.copyTo(c)
    }
    ,
    i.systems.StateSystem.prototype.setState = function(c) {
        return T("v5.1.0", "StateSystem.setState has been renamed to StateSystem.set"),
        this.set(c)
    }
    ,
    Object.assign(i.systems.FilterSystem.prototype, {
        getRenderTarget: function(f, c) {
            return T(S, "PIXI.FilterManager.getRenderTarget method has been replaced with PIXI.systems.FilterSystem#getFilterTexture"),
            this.getFilterTexture(null, c)
        },
        returnRenderTarget: function(f) {
            T(S, "PIXI.FilterManager.returnRenderTarget method has been replaced with PIXI.systems.FilterSystem.returnFilterTexture"),
            this.returnFilterTexture(f)
        },
        calculateScreenSpaceMatrix: function(f) {
            T(S, "PIXI.systems.FilterSystem.calculateScreenSpaceMatrix method is removed, use `(vTextureCoord * inputSize.xy) + outputFrame.xy` instead");
            var c = f.identity()
              , d = this.activeState
              , p = d.sourceFrame
              , v = d.destinationFrame;
            return c.translate(p.x / v.width, p.y / v.height),
            c.scale(v.width, v.height),
            c
        },
        calculateNormalizedScreenSpaceMatrix: function(f) {
            T(S, "PIXI.systems.FilterManager.calculateNormalizedScreenSpaceMatrix method is removed, use `((vTextureCoord * inputSize.xy) + outputFrame.xy) / outputFrame.zw` instead.");
            var c = this.activeState
              , d = c.sourceFrame
              , p = c.destinationFrame
              , v = f.identity();
            v.translate(d.x / p.width, d.y / p.height);
            var m = p.width / d.width
              , g = p.height / d.height;
            return v.scale(m, g),
            v
        }
    }),
    Object.defineProperties(i.RenderTexture.prototype, {
        sourceFrame: {
            get: function() {
                return T(S, "PIXI.RenderTexture.sourceFrame property has been removed"),
                this.filterFrame
            }
        },
        size: {
            get: function() {
                return T(S, "PIXI.RenderTexture.size property has been removed"),
                this._frame
            }
        }
    });
    var n = function(f) {
        Sh(c, f);
        function c(d, p, v, m) {
            var g = this;
            return T(S, "PIXI.filters.BlurXFilter class is deprecated, use PIXI.filters.BlurFilterPass"),
            g = f.call(this, !0, d, p, v, m) || this,
            g
        }
        return c
    }(i.filters.BlurFilterPass)
      , s = function(f) {
        Sh(c, f);
        function c(d, p, v, m) {
            var g = this;
            return T(S, "PIXI.filters.BlurYFilter class is deprecated, use PIXI.filters.BlurFilterPass"),
            g = f.call(this, !1, d, p, v, m) || this,
            g
        }
        return c
    }(i.filters.BlurFilterPass);
    Object.assign(i.filters, {
        BlurXFilter: n,
        BlurYFilter: s
    });
    var a = i.Sprite
      , o = i.Texture
      , h = i.Graphics;
    h.prototype.generateCanvasTexture || (h.prototype.generateCanvasTexture = function() {
        T(S, 'PIXI.Graphics.generateCanvasTexture method is only available in "pixi.js-legacy"')
    }
    ),
    Object.defineProperty(h.prototype, "graphicsData", {
        get: function() {
            return T(S, "PIXI.Graphics.graphicsData property is deprecated, use PIXI.Graphics.geometry.graphicsData"),
            this.geometry.graphicsData
        }
    });
    function u(f, c, d, p) {
        return T(S, "PIXI.Sprite." + f + " method is deprecated, use PIXI.Sprite.from"),
        a.from(c, {
            resourceOptions: {
                scale: p,
                crossorigin: d
            }
        })
    }
    a.fromImage = u.bind(null, "fromImage"),
    a.fromSVG = u.bind(null, "fromSVG"),
    a.fromCanvas = u.bind(null, "fromCanvas"),
    a.fromVideo = u.bind(null, "fromVideo"),
    a.fromFrame = u.bind(null, "fromFrame");
    function l(f, c, d, p) {
        return T(S, "PIXI.Texture." + f + " method is deprecated, use PIXI.Texture.from"),
        o.from(c, {
            resourceOptions: {
                scale: p,
                crossorigin: d
            }
        })
    }
    o.fromImage = l.bind(null, "fromImage"),
    o.fromSVG = l.bind(null, "fromSVG"),
    o.fromCanvas = l.bind(null, "fromCanvas"),
    o.fromVideo = l.bind(null, "fromVideo"),
    o.fromFrame = l.bind(null, "fromFrame"),
    Object.defineProperty(i.AbstractRenderer.prototype, "autoResize", {
        get: function() {
            return T(S, "PIXI.AbstractRenderer.autoResize property is deprecated, use PIXI.AbstractRenderer.autoDensity"),
            this.autoDensity
        },
        set: function(f) {
            T(S, "PIXI.AbstractRenderer.autoResize property is deprecated, use PIXI.AbstractRenderer.autoDensity"),
            this.autoDensity = f
        }
    }),
    Object.defineProperty(i.Renderer.prototype, "textureManager", {
        get: function() {
            return T(S, "PIXI.Renderer.textureManager property is deprecated, use PIXI.Renderer.texture"),
            this.texture
        }
    }),
    i.utils.mixins = {
        mixin: function() {
            T(S, "PIXI.utils.mixins.mixin function is no longer available")
        },
        delayMixin: function() {
            T(S, "PIXI.utils.mixins.delayMixin function is no longer available")
        },
        performMixins: function() {
            T(S, "PIXI.utils.mixins.performMixins function is no longer available")
        }
    },
    Object.defineProperty(i.BitmapText.prototype, "font", {
        get: function() {
            return T("5.3.0", "PIXI.BitmapText.font property is deprecated, use fontName, fontSize, tint or align properties"),
            {
                name: this._fontName,
                size: this._fontSize,
                tint: this._tint,
                align: this._align
            }
        },
        set: function(f) {
            if (T("5.3.0", "PIXI.BitmapText.font property is deprecated, use fontName, fontSize, tint or align properties"),
            !!f) {
                var c = {
                    font: f
                };
                this._upgradeStyle(c),
                c.fontSize = c.fontSize || i.BitmapFont.available[c.fontName].size,
                this._fontName = c.fontName,
                this._fontSize = c.fontSize,
                this.dirty = !0
            }
        }
    })
}
Mt.registerPlugin("accessibility", tn);
Mt.registerPlugin("extract", Un);
Mt.registerPlugin("interaction", on);
Mt.registerPlugin("particle", Vn);
Mt.registerPlugin("prepare", us);
Mt.registerPlugin("batch", Dn);
Mt.registerPlugin("tilingSprite", ds);
Y.registerPlugin(bs);
Y.registerPlugin(fs);
re.registerPlugin(rn);
re.registerPlugin(Hn);
var wr = "5.3.7"
  , Eh = {
    AlphaFilter: zf,
    BlurFilter: Zf,
    BlurFilterPass: Ps,
    ColorMatrixFilter: Ss,
    DisplacementFilter: rc,
    FXAAFilter: ac,
    NoiseFilter: uc
}
  , Ds = Object.freeze({
    __proto__: null,
    utils: Ua,
    VERSION: wr,
    filters: Eh,
    useDeprecated: Ch,
    AccessibilityManager: tn,
    accessibleTarget: Qi,
    InteractionData: Vr,
    InteractionEvent: sn,
    InteractionManager: on,
    InteractionTrackingData: or,
    interactiveTarget: an,
    Application: re,
    AbstractBatchRenderer: Fn,
    AbstractRenderer: An,
    Attribute: Jr,
    BaseRenderTexture: Ue,
    BaseTexture: q,
    BatchDrawCall: mr,
    BatchGeometry: ni,
    BatchPluginFactory: Nn,
    BatchRenderer: Dn,
    BatchShaderGenerator: Ln,
    BatchTextureArray: yr,
    Buffer: nt,
    Filter: Rt,
    FilterState: vn,
    Framebuffer: hr,
    GLFramebuffer: mn,
    GLProgram: Cn,
    GLTexture: vr,
    Geometry: _e,
    IGLUniformData: go,
    MaskData: gn,
    ObjectRenderer: Be,
    Program: ke,
    Quad: pn,
    QuadUv: Qr,
    RenderTexture: ee,
    RenderTexturePool: dn,
    Renderer: Mt,
    Shader: jt,
    SpriteMaskFilter: Sn,
    State: Ht,
    System: ut,
    Texture: L,
    TextureMatrix: cr,
    TextureUvs: Zr,
    UniformGroup: Gt,
    ViewableBuffer: Mn,
    autoDetectRenderer: On,
    checkMaxIfStatementsInShader: xn,
    defaultFilterVertex: ii,
    defaultVertex: Rn,
    resources: Ya,
    systems: Po,
    uniformParsers: lr,
    Extract: Un,
    AppLoaderPlugin: Hn,
    Loader: Y,
    LoaderResource: Xe,
    TextureLoader: jn,
    ParticleContainer: ai,
    ParticleRenderer: Vn,
    BasePrepare: hs,
    CountLimiter: os,
    Prepare: us,
    TimeLimiter: $o,
    Spritesheet: ls,
    SpritesheetLoader: fs,
    TilingSprite: Ko,
    TilingSpriteRenderer: ds,
    BitmapFont: Vt,
    BitmapFontData: We,
    BitmapFontLoader: bs,
    BitmapText: nh,
    Ticker: it,
    TickerPlugin: rn,
    get UPDATE_PRIORITY() {
        return wt
    },
    get ALPHA_MODES() {
        return Ot
    },
    get BLEND_MODES() {
        return M
    },
    get BUFFER_BITS() {
        return Fe
    },
    get CLEAR_MODES() {
        return _t
    },
    get DRAW_MODES() {
        return dt
    },
    get ENV() {
        return Tt
    },
    get FORMATS() {
        return oe
    },
    get GC_MODES() {
        return nr
    },
    get MASK_TYPES() {
        return ht
    },
    get MIPMAP_MODES() {
        return he
    },
    get MSAA_QUALITY() {
        return Qt
    },
    get PRECISION() {
        return xt
    },
    get RENDERER_TYPE() {
        return ae
    },
    get SCALE_MODES() {
        return pt
    },
    get TARGETS() {
        return kt
    },
    get TYPES() {
        return et
    },
    get WRAP_MODES() {
        return At
    },
    Bounds: Ne,
    Container: ot,
    DisplayObject: Q,
    TemporaryDisplayObject: Hr,
    FillStyle: oi,
    GRAPHICS_CURVES: Te,
    Graphics: ze,
    GraphicsData: fi,
    GraphicsGeometry: Jn,
    get LINE_CAP() {
        return Nt
    },
    get LINE_JOIN() {
        return Lt
    },
    LineStyle: Qn,
    graphicsUtils: Yo,
    Circle: Le,
    DEG_TO_RAD: Wi,
    Ellipse: qi,
    Matrix: rt,
    ObservablePoint: te,
    PI_2: de,
    Point: V,
    Polygon: pe,
    RAD_TO_DEG: Yi,
    Rectangle: j,
    RoundedRectangle: $i,
    get SHAPES() {
        return J
    },
    Transform: jr,
    groupD8: Z,
    Mesh: Ie,
    MeshBatchUvs: ms,
    MeshGeometry: Ye,
    MeshMaterial: Ve,
    NineSlicePlane: Ih,
    PlaneGeometry: Rs,
    RopeGeometry: Ms,
    SimpleMesh: Ph,
    SimplePlane: Fs,
    SimpleRope: wh,
    Runner: st,
    Sprite: vt,
    AnimatedSprite: It,
    get TEXT_GRADIENT() {
        return Pe
    },
    Text: Pt,
    TextMetrics: yt,
    TextStyle: mt,
    isMobile: ct,
    settings: R
});
var Dt = function() {
    function i(r, t, e) {
        this.value = r,
        this.time = t,
        this.next = null,
        this.isStepped = !1,
        e ? this.ease = typeof e == "function" ? e : H.generateEase(e) : this.ease = null
    }
    return i.createList = function(r) {
        if ("list"in r) {
            var t = r.list
              , e = void 0
              , n = t[0]
              , s = n.value
              , a = n.time
              , o = e = new i(typeof s == "string" ? H.hexToRGB(s) : s,a,r.ease);
            if (t.length > 2 || t.length === 2 && t[1].value !== s)
                for (var h = 1; h < t.length; ++h) {
                    var u = t[h]
                      , l = u.value
                      , f = u.time;
                    e.next = new i(typeof l == "string" ? H.hexToRGB(l) : l,f),
                    e = e.next
                }
            return o.isStepped = !!r.isStepped,
            o
        }
        var c = new i(typeof r.start == "string" ? H.hexToRGB(r.start) : r.start,0);
        return r.end !== r.start && (c.next = new i(typeof r.end == "string" ? H.hexToRGB(r.end) : r.end,1)),
        c
    }
    ,
    i
}(), Us, Ah = Ds;
parseInt(/^(\d+)\./.exec(wr)[1], 10) < 5 ? Us = Ah.Texture.fromImage : Us = Ah.Texture.from;
function Bs(i) {
    return Us(i)
}
var H;
(function(i) {
    i.verbose = !1,
    i.DEG_TO_RADS = Math.PI / 180;
    function r(l, f) {
        if (!!l) {
            l *= i.DEG_TO_RADS;
            var c = Math.sin(l)
              , d = Math.cos(l)
              , p = f.x * d - f.y * c
              , v = f.x * c + f.y * d;
            f.x = p,
            f.y = v
        }
    }
    i.rotatePoint = r;
    function t(l, f, c) {
        return l << 16 | f << 8 | c
    }
    i.combineRGBComponents = t;
    function e(l) {
        var f = 1 / i.length(l);
        l.x *= f,
        l.y *= f
    }
    i.normalize = e;
    function n(l, f) {
        l.x *= f,
        l.y *= f
    }
    i.scaleBy = n;
    function s(l) {
        return Math.sqrt(l.x * l.x + l.y * l.y)
    }
    i.length = s;
    function a(l, f) {
        f || (f = {}),
        l.charAt(0) === "#" ? l = l.substr(1) : l.indexOf("0x") === 0 && (l = l.substr(2));
        var c;
        return l.length === 8 && (c = l.substr(0, 2),
        l = l.substr(2)),
        f.r = parseInt(l.substr(0, 2), 16),
        f.g = parseInt(l.substr(2, 2), 16),
        f.b = parseInt(l.substr(4, 2), 16),
        c && (f.a = parseInt(c, 16)),
        f
    }
    i.hexToRGB = a;
    function o(l) {
        var f = l.length
          , c = 1 / f;
        return function(d) {
            var p = f * d | 0
              , v = (d - p * c) * f
              , m = l[p] || l[f - 1];
            return m.s + v * (2 * (1 - v) * (m.cp - m.s) + v * (m.e - m.s))
        }
    }
    i.generateEase = o;
    function h(l) {
        if (!l)
            return M.NORMAL;
        for (l = l.toUpperCase(); l.indexOf(" ") >= 0; )
            l = l.replace(" ", "_");
        return M[l] || M.NORMAL
    }
    i.getBlendMode = h;
    function u(l, f) {
        f === void 0 && (f = 10),
        (typeof f != "number" || f <= 0) && (f = 10);
        var c = new Dt(i.hexToRGB(l[0].value),l[0].time);
        c.isStepped = !0;
        for (var d = c, p = l[0], v = 1, m = l[v], g = 1; g < f; ++g) {
            for (var w = g / f; w > m.time; )
                p = m,
                m = l[++v];
            w = (w - p.time) / (m.time - p.time);
            var y = i.hexToRGB(p.value)
              , I = i.hexToRGB(m.value)
              , x = {
                r: (I.r - y.r) * w + y.r,
                g: (I.g - y.g) * w + y.g,
                b: (I.b - y.b) * w + y.b
            };
            d.next = new Dt(x,g / f),
            d = d.next
        }
        return c
    }
    i.createSteppedGradient = u
}
)(H || (H = {}));
var ks = function(i, r) {
    return ks = Object.setPrototypeOf || {
        __proto__: []
    }instanceof Array && function(t, e) {
        t.__proto__ = e
    }
    || function(t, e) {
        for (var n in e)
            e.hasOwnProperty(n) && (t[n] = e[n])
    }
    ,
    ks(i, r)
};
function vi(i, r) {
    ks(i, r);
    function t() {
        this.constructor = i
    }
    i.prototype = r === null ? Object.create(r) : (t.prototype = r.prototype,
    new t)
}
function cc(i) {
    return this.ease && (i = this.ease(i)),
    (this.next.value - this.current.value) * i + this.current.value
}
function dc(i) {
    this.ease && (i = this.ease(i));
    var r = this.current.value
      , t = this.next.value
      , e = (t.r - r.r) * i + r.r
      , n = (t.g - r.g) * i + r.g
      , s = (t.b - r.b) * i + r.b;
    return H.combineRGBComponents(e, n, s)
}
function pc(i) {
    for (this.ease && (i = this.ease(i)); i > this.next.time; )
        this.current = this.next,
        this.next = this.next.next;
    return i = (i - this.current.time) / (this.next.time - this.current.time),
    (this.next.value - this.current.value) * i + this.current.value
}
function vc(i) {
    for (this.ease && (i = this.ease(i)); i > this.next.time; )
        this.current = this.next,
        this.next = this.next.next;
    i = (i - this.current.time) / (this.next.time - this.current.time);
    var r = this.current.value
      , t = this.next.value
      , e = (t.r - r.r) * i + r.r
      , n = (t.g - r.g) * i + r.g
      , s = (t.b - r.b) * i + r.b;
    return H.combineRGBComponents(e, n, s)
}
function mc(i) {
    for (this.ease && (i = this.ease(i)); this.next && i > this.next.time; )
        this.current = this.next,
        this.next = this.next.next;
    return this.current.value
}
function yc(i) {
    for (this.ease && (i = this.ease(i)); this.next && i > this.next.time; )
        this.current = this.next,
        this.next = this.next.next;
    var r = this.current.value;
    return H.combineRGBComponents(r.r, r.g, r.b)
}
var mi = function() {
    function i(r) {
        r === void 0 && (r = !1),
        this.current = null,
        this.next = null,
        this.isColor = !!r,
        this.interpolate = null,
        this.ease = null
    }
    return i.prototype.reset = function(r) {
        this.current = r,
        this.next = r.next;
        var t = this.next && this.next.time >= 1;
        t ? this.interpolate = this.isColor ? dc : cc : r.isStepped ? this.interpolate = this.isColor ? yc : mc : this.interpolate = this.isColor ? vc : pc,
        this.ease = this.current.ease
    }
    ,
    i
}(), yi = function(i) {
    vi(r, i);
    function r(t) {
        var e = i.call(this) || this;
        return e.prevChild = e.nextChild = null,
        e.emitter = t,
        e.anchor.x = e.anchor.y = .5,
        e.velocity = new V,
        e.rotationSpeed = 0,
        e.rotationAcceleration = 0,
        e.maxLife = 0,
        e.age = 0,
        e.ease = null,
        e.extraData = null,
        e.alphaList = new mi,
        e.speedList = new mi,
        e.speedMultiplier = 1,
        e.acceleration = new V,
        e.maxSpeed = NaN,
        e.scaleList = new mi,
        e.scaleMultiplier = 1,
        e.colorList = new mi(!0),
        e._doAlpha = !1,
        e._doScale = !1,
        e._doSpeed = !1,
        e._doAcceleration = !1,
        e._doColor = !1,
        e._doNormalMovement = !1,
        e._oneOverLife = 0,
        e.next = null,
        e.prev = null,
        e.init = e.init,
        e.Particle_init = r.prototype.init,
        e.update = e.update,
        e.Particle_update = r.prototype.update,
        e.Sprite_destroy = i.prototype.destroy,
        e.Particle_destroy = r.prototype.destroy,
        e.applyArt = e.applyArt,
        e.kill = e.kill,
        e
    }
    return r.prototype.init = function() {
        this.age = 0,
        this.velocity.x = this.speedList.current.value * this.speedMultiplier,
        this.velocity.y = 0,
        H.rotatePoint(this.rotation, this.velocity),
        this.noRotation ? this.rotation = 0 : this.rotation *= H.DEG_TO_RADS,
        this.rotationSpeed *= H.DEG_TO_RADS,
        this.rotationAcceleration *= H.DEG_TO_RADS,
        this.alpha = this.alphaList.current.value,
        this.scale.x = this.scale.y = this.scaleList.current.value,
        this._doAlpha = !!this.alphaList.current.next,
        this._doSpeed = !!this.speedList.current.next,
        this._doScale = !!this.scaleList.current.next,
        this._doColor = !!this.colorList.current.next,
        this._doAcceleration = this.acceleration.x !== 0 || this.acceleration.y !== 0,
        this._doNormalMovement = this._doSpeed || this.speedList.current.value !== 0 || this._doAcceleration,
        this._oneOverLife = 1 / this.maxLife;
        var t = this.colorList.current.value;
        this.tint = H.combineRGBComponents(t.r, t.g, t.b),
        this.visible = !0
    }
    ,
    r.prototype.applyArt = function(t) {
        this.texture = t || L.EMPTY
    }
    ,
    r.prototype.update = function(t) {
        if (this.age += t,
        this.age >= this.maxLife || this.age < 0)
            return this.kill(),
            -1;
        var e = this.age * this._oneOverLife;
        if (this.ease && (this.ease.length === 4 ? e = this.ease(e, 0, 1, 1) : e = this.ease(e)),
        this._doAlpha && (this.alpha = this.alphaList.interpolate(e)),
        this._doScale) {
            var n = this.scaleList.interpolate(e) * this.scaleMultiplier;
            this.scale.x = this.scale.y = n
        }
        if (this._doNormalMovement) {
            var s = void 0
              , a = void 0;
            if (this._doSpeed) {
                var o = this.speedList.interpolate(e) * this.speedMultiplier;
                H.normalize(this.velocity),
                H.scaleBy(this.velocity, o),
                s = this.velocity.x * t,
                a = this.velocity.y * t
            } else if (this._doAcceleration) {
                var h = this.velocity.x
                  , u = this.velocity.y;
                if (this.velocity.x += this.acceleration.x * t,
                this.velocity.y += this.acceleration.y * t,
                this.maxSpeed) {
                    var l = H.length(this.velocity);
                    l > this.maxSpeed && H.scaleBy(this.velocity, this.maxSpeed / l)
                }
                s = (h + this.velocity.x) / 2 * t,
                a = (u + this.velocity.y) / 2 * t
            } else
                s = this.velocity.x * t,
                a = this.velocity.y * t;
            this.position.x += s,
            this.position.y += a
        }
        if (this._doColor && (this.tint = this.colorList.interpolate(e)),
        this.rotationAcceleration !== 0) {
            var f = this.rotationSpeed + this.rotationAcceleration * t;
            this.rotation += (this.rotationSpeed + f) / 2 * t,
            this.rotationSpeed = f
        } else
            this.rotationSpeed !== 0 ? this.rotation += this.rotationSpeed * t : this.acceleration && !this.noRotation && (this.rotation = Math.atan2(this.velocity.y, this.velocity.x));
        return e
    }
    ,
    r.prototype.kill = function() {
        this.emitter.recycle(this)
    }
    ,
    r.prototype.destroy = function() {
        this.parent && this.parent.removeChild(this),
        this.Sprite_destroy(),
        this.emitter = this.velocity = this.colorList = this.scaleList = this.alphaList = this.speedList = this.ease = this.next = this.prev = null
    }
    ,
    r.parseArt = function(t) {
        var e;
        for (e = t.length; e >= 0; --e)
            typeof t[e] == "string" && (t[e] = Bs(t[e]));
        if (H.verbose) {
            for (e = t.length - 1; e > 0; --e)
                if (t[e].baseTexture !== t[e - 1].baseTexture) {
                    window.console && console.warn("PixiParticles: using particle textures from different images may hinder performance in WebGL");
                    break
                }
        }
        return t
    }
    ,
    r.parseData = function(t) {
        return t
    }
    ,
    r
}(vt), gc = function() {
    function i(r) {
        this.segments = [],
        this.countingLengths = [],
        this.totalLength = 0,
        this.init(r)
    }
    return i.prototype.init = function(r) {
        if (!r || !r.length)
            this.segments.push({
                p1: {
                    x: 0,
                    y: 0
                },
                p2: {
                    x: 0,
                    y: 0
                },
                l: 0
            });
        else if (Array.isArray(r[0]))
            for (var t = 0; t < r.length; ++t)
                for (var e = r[t], n = e[0], s = 1; s < e.length; ++s) {
                    var a = e[s];
                    this.segments.push({
                        p1: n,
                        p2: a,
                        l: 0
                    }),
                    n = a
                }
        else
            for (var n = r[0], t = 1; t < r.length; ++t) {
                var a = r[t];
                this.segments.push({
                    p1: n,
                    p2: a,
                    l: 0
                }),
                n = a
            }
        for (var t = 0; t < this.segments.length; ++t) {
            var o = this.segments[t]
              , h = o.p1
              , u = o.p2
              , l = Math.sqrt((u.x - h.x) * (u.x - h.x) + (u.y - h.y) * (u.y - h.y));
            this.segments[t].l = l,
            this.totalLength += l,
            this.countingLengths.push(this.totalLength)
        }
    }
    ,
    i.prototype.getRandomPoint = function(r) {
        var t = Math.random() * this.totalLength, e, n;
        if (this.segments.length === 1)
            e = this.segments[0],
            n = t;
        else
            for (var s = 0; s < this.countingLengths.length; ++s)
                if (t < this.countingLengths[s]) {
                    e = this.segments[s],
                    n = s === 0 ? t : t - this.countingLengths[s - 1];
                    break
                }
        n /= e.l || 1;
        var a = e.p1
          , o = e.p2;
        r.x = a.x + n * (o.x - a.x),
        r.y = a.y + n * (o.y - a.y)
    }
    ,
    i
}(), gi, Oh = Ds;
parseInt(/^(\d+)\./.exec(wr)[1], 10) < 5 ? gi = Oh.ticker.shared : gi = Oh.Ticker.shared;
var $ = new V
  , Rh = function() {
    function i(r, t, e) {
        this._currentImageIndex = -1,
        this._particleConstructor = yi,
        this.particleImages = null,
        this.startAlpha = null,
        this.startSpeed = null,
        this.minimumSpeedMultiplier = 1,
        this.acceleration = null,
        this.maxSpeed = NaN,
        this.startScale = null,
        this.minimumScaleMultiplier = 1,
        this.startColor = null,
        this.minLifetime = 0,
        this.maxLifetime = 0,
        this.minStartRotation = 0,
        this.maxStartRotation = 0,
        this.noRotation = !1,
        this.minRotationSpeed = 0,
        this.maxRotationSpeed = 0,
        this.particleBlendMode = 0,
        this.customEase = null,
        this.extraData = null,
        this._frequency = 1,
        this.spawnChance = 1,
        this.maxParticles = 1e3,
        this.emitterLifetime = -1,
        this.spawnPos = null,
        this.spawnType = null,
        this._spawnFunc = null,
        this.spawnRect = null,
        this.spawnCircle = null,
        this.spawnPolygonalChain = null,
        this.particlesPerWave = 1,
        this.particleSpacing = 0,
        this.angleStart = 0,
        this.rotation = 0,
        this.ownerPos = null,
        this._prevEmitterPos = null,
        this._prevPosIsValid = !1,
        this._posChanged = !1,
        this._parent = null,
        this.addAtBack = !1,
        this.particleCount = 0,
        this._emit = !1,
        this._spawnTimer = 0,
        this._emitterLife = -1,
        this._activeParticlesFirst = null,
        this._activeParticlesLast = null,
        this._poolFirst = null,
        this._origConfig = null,
        this._origArt = null,
        this._autoUpdate = !1,
        this._currentImageIndex = -1,
        this._destroyWhenComplete = !1,
        this._completeCallback = null,
        this.parent = r,
        t && e && this.init(t, e),
        this.recycle = this.recycle,
        this.update = this.update,
        this.rotate = this.rotate,
        this.updateSpawnPos = this.updateSpawnPos,
        this.updateOwnerPos = this.updateOwnerPos
    }
    return Object.defineProperty(i.prototype, "orderedArt", {
        get: function() {
            return this._currentImageIndex !== -1
        },
        set: function(r) {
            this._currentImageIndex = r ? 0 : -1
        },
        enumerable: !0,
        configurable: !0
    }),
    Object.defineProperty(i.prototype, "frequency", {
        get: function() {
            return this._frequency
        },
        set: function(r) {
            typeof r == "number" && r > 0 ? this._frequency = r : this._frequency = 1
        },
        enumerable: !0,
        configurable: !0
    }),
    Object.defineProperty(i.prototype, "particleConstructor", {
        get: function() {
            return this._particleConstructor
        },
        set: function(r) {
            if (r !== this._particleConstructor) {
                this._particleConstructor = r,
                this.cleanup();
                for (var t = this._poolFirst; t; t = t.next)
                    t.destroy();
                this._poolFirst = null,
                this._origConfig && this._origArt && this.init(this._origArt, this._origConfig)
            }
        },
        enumerable: !0,
        configurable: !0
    }),
    Object.defineProperty(i.prototype, "parent", {
        get: function() {
            return this._parent
        },
        set: function(r) {
            this.cleanup(),
            this._parent = r
        },
        enumerable: !0,
        configurable: !0
    }),
    i.prototype.init = function(r, t) {
        if (!(!r || !t)) {
            this.cleanup(),
            this._origConfig = t,
            this._origArt = r,
            r = Array.isArray(r) ? r.slice() : [r];
            var e = this._particleConstructor;
            this.particleImages = e.parseArt ? e.parseArt(r) : r,
            t.alpha ? this.startAlpha = Dt.createList(t.alpha) : this.startAlpha = new Dt(1,0),
            t.speed ? (this.startSpeed = Dt.createList(t.speed),
            this.minimumSpeedMultiplier = ("minimumSpeedMultiplier"in t ? t.minimumSpeedMultiplier : t.speed.minimumSpeedMultiplier) || 1) : (this.minimumSpeedMultiplier = 1,
            this.startSpeed = new Dt(0,0));
            var n = t.acceleration;
            n && (n.x || n.y) ? (this.startSpeed.next = null,
            this.acceleration = new V(n.x,n.y),
            this.maxSpeed = t.maxSpeed || NaN) : this.acceleration = new V,
            t.scale ? (this.startScale = Dt.createList(t.scale),
            this.minimumScaleMultiplier = ("minimumScaleMultiplier"in t ? t.minimumScaleMultiplier : t.scale.minimumScaleMultiplier) || 1) : (this.startScale = new Dt(1,0),
            this.minimumScaleMultiplier = 1),
            t.color ? this.startColor = Dt.createList(t.color) : this.startColor = new Dt({
                r: 255,
                g: 255,
                b: 255
            },0),
            t.startRotation ? (this.minStartRotation = t.startRotation.min,
            this.maxStartRotation = t.startRotation.max) : this.minStartRotation = this.maxStartRotation = 0,
            t.noRotation && (this.minStartRotation || this.maxStartRotation) ? this.noRotation = !!t.noRotation : this.noRotation = !1,
            t.rotationSpeed ? (this.minRotationSpeed = t.rotationSpeed.min,
            this.maxRotationSpeed = t.rotationSpeed.max) : this.minRotationSpeed = this.maxRotationSpeed = 0,
            this.rotationAcceleration = t.rotationAcceleration || 0,
            this.minLifetime = t.lifetime.min,
            this.maxLifetime = t.lifetime.max,
            this.particleBlendMode = H.getBlendMode(t.blendMode),
            t.ease ? this.customEase = typeof t.ease == "function" ? t.ease : H.generateEase(t.ease) : this.customEase = null,
            e.parseData ? this.extraData = e.parseData(t.extraData) : this.extraData = t.extraData || null,
            this.spawnRect = this.spawnCircle = null,
            this.particlesPerWave = 1,
            t.particlesPerWave && t.particlesPerWave > 1 && (this.particlesPerWave = t.particlesPerWave),
            this.particleSpacing = 0,
            this.angleStart = 0,
            this.parseSpawnType(t),
            this.frequency = t.frequency,
            this.spawnChance = typeof t.spawnChance == "number" && t.spawnChance > 0 ? t.spawnChance : 1,
            this.emitterLifetime = t.emitterLifetime || -1,
            this.maxParticles = t.maxParticles > 0 ? t.maxParticles : 1e3,
            this.addAtBack = !!t.addAtBack,
            this.rotation = 0,
            this.ownerPos = new V,
            this.spawnPos = new V(t.pos.x,t.pos.y),
            this.initAdditional(r, t),
            this._prevEmitterPos = this.spawnPos.clone(),
            this._prevPosIsValid = !1,
            this._spawnTimer = 0,
            this.emit = t.emit === void 0 ? !0 : !!t.emit,
            this.autoUpdate = !!t.autoUpdate,
            this.orderedArt = !!t.orderedArt
        }
    }
    ,
    i.prototype.initAdditional = function(r, t) {}
    ,
    i.prototype.parseSpawnType = function(r) {
        var t;
        switch (r.spawnType) {
        case "rect":
            this.spawnType = "rect",
            this._spawnFunc = this._spawnRect;
            var e = r.spawnRect;
            this.spawnRect = new j(e.x,e.y,e.w,e.h);
            break;
        case "circle":
            this.spawnType = "circle",
            this._spawnFunc = this._spawnCircle,
            t = r.spawnCircle,
            this.spawnCircle = new Le(t.x,t.y,t.r);
            break;
        case "ring":
            this.spawnType = "ring",
            this._spawnFunc = this._spawnRing,
            t = r.spawnCircle,
            this.spawnCircle = new Le(t.x,t.y,t.r),
            this.spawnCircle.minRadius = t.minR;
            break;
        case "burst":
            this.spawnType = "burst",
            this._spawnFunc = this._spawnBurst,
            this.particleSpacing = r.particleSpacing,
            this.angleStart = r.angleStart ? r.angleStart : 0;
            break;
        case "point":
            this.spawnType = "point",
            this._spawnFunc = this._spawnPoint;
            break;
        case "polygonalChain":
            this.spawnType = "polygonalChain",
            this._spawnFunc = this._spawnPolygonalChain,
            this.spawnPolygonalChain = new gc(r.spawnPolygon);
            break;
        default:
            this.spawnType = "point",
            this._spawnFunc = this._spawnPoint;
            break
        }
    }
    ,
    i.prototype.recycle = function(r) {
        r.next && (r.next.prev = r.prev),
        r.prev && (r.prev.next = r.next),
        r === this._activeParticlesLast && (this._activeParticlesLast = r.prev),
        r === this._activeParticlesFirst && (this._activeParticlesFirst = r.next),
        r.prev = null,
        r.next = this._poolFirst,
        this._poolFirst = r,
        r.parent && r.parent.removeChild(r),
        --this.particleCount
    }
    ,
    i.prototype.rotate = function(r) {
        if (this.rotation !== r) {
            var t = r - this.rotation;
            this.rotation = r,
            H.rotatePoint(t, this.spawnPos),
            this._posChanged = !0
        }
    }
    ,
    i.prototype.updateSpawnPos = function(r, t) {
        this._posChanged = !0,
        this.spawnPos.x = r,
        this.spawnPos.y = t
    }
    ,
    i.prototype.updateOwnerPos = function(r, t) {
        this._posChanged = !0,
        this.ownerPos.x = r,
        this.ownerPos.y = t
    }
    ,
    i.prototype.resetPositionTracking = function() {
        this._prevPosIsValid = !1
    }
    ,
    Object.defineProperty(i.prototype, "emit", {
        get: function() {
            return this._emit
        },
        set: function(r) {
            this._emit = !!r,
            this._emitterLife = this.emitterLifetime
        },
        enumerable: !0,
        configurable: !0
    }),
    Object.defineProperty(i.prototype, "autoUpdate", {
        get: function() {
            return this._autoUpdate
        },
        set: function(r) {
            this._autoUpdate && !r ? gi.remove(this.update, this) : !this._autoUpdate && r && gi.add(this.update, this),
            this._autoUpdate = !!r
        },
        enumerable: !0,
        configurable: !0
    }),
    i.prototype.playOnceAndDestroy = function(r) {
        this.autoUpdate = !0,
        this.emit = !0,
        this._destroyWhenComplete = !0,
        this._completeCallback = r
    }
    ,
    i.prototype.playOnce = function(r) {
        this.emit = !0,
        this._completeCallback = r
    }
    ,
    i.prototype.update = function(r) {
        if (this._autoUpdate && (r = r / R.TARGET_FPMS / 1e3),
        !!this._parent) {
            var t, e, n;
            for (e = this._activeParticlesFirst; e; e = n)
                n = e.next,
                e.update(r);
            var s, a;
            this._prevPosIsValid && (s = this._prevEmitterPos.x,
            a = this._prevEmitterPos.y);
            var o = this.ownerPos.x + this.spawnPos.x
              , h = this.ownerPos.y + this.spawnPos.y;
            if (this._emit)
                for (this._spawnTimer -= r < 0 ? 0 : r; this._spawnTimer <= 0; ) {
                    if (this._emitterLife >= 0 && (this._emitterLife -= this._frequency,
                    this._emitterLife <= 0)) {
                        this._spawnTimer = 0,
                        this._emitterLife = 0,
                        this.emit = !1;
                        break
                    }
                    if (this.particleCount >= this.maxParticles) {
                        this._spawnTimer += this._frequency;
                        continue
                    }
                    var u = void 0;
                    if (this.minLifetime === this.maxLifetime ? u = this.minLifetime : u = Math.random() * (this.maxLifetime - this.minLifetime) + this.minLifetime,
                    -this._spawnTimer < u) {
                        var l = void 0
                          , f = void 0;
                        if (this._prevPosIsValid && this._posChanged) {
                            var c = 1 + this._spawnTimer / r;
                            l = (o - s) * c + s,
                            f = (h - a) * c + a
                        } else
                            l = o,
                            f = h;
                        t = 0;
                        for (var d = Math.min(this.particlesPerWave, this.maxParticles - this.particleCount); t < d; ++t)
                            if (!(this.spawnChance < 1 && Math.random() >= this.spawnChance)) {
                                var p = void 0;
                                this._poolFirst ? (p = this._poolFirst,
                                this._poolFirst = this._poolFirst.next,
                                p.next = null) : p = new this.particleConstructor(this),
                                this.particleImages.length > 1 ? this._currentImageIndex !== -1 ? (p.applyArt(this.particleImages[this._currentImageIndex++]),
                                (this._currentImageIndex < 0 || this._currentImageIndex >= this.particleImages.length) && (this._currentImageIndex = 0)) : p.applyArt(this.particleImages[Math.floor(Math.random() * this.particleImages.length)]) : p.applyArt(this.particleImages[0]),
                                p.alphaList.reset(this.startAlpha),
                                this.minimumSpeedMultiplier !== 1 && (p.speedMultiplier = Math.random() * (1 - this.minimumSpeedMultiplier) + this.minimumSpeedMultiplier),
                                p.speedList.reset(this.startSpeed),
                                p.acceleration.x = this.acceleration.x,
                                p.acceleration.y = this.acceleration.y,
                                p.maxSpeed = this.maxSpeed,
                                this.minimumScaleMultiplier !== 1 && (p.scaleMultiplier = Math.random() * (1 - this.minimumScaleMultiplier) + this.minimumScaleMultiplier),
                                p.scaleList.reset(this.startScale),
                                p.colorList.reset(this.startColor),
                                this.minRotationSpeed === this.maxRotationSpeed ? p.rotationSpeed = this.minRotationSpeed : p.rotationSpeed = Math.random() * (this.maxRotationSpeed - this.minRotationSpeed) + this.minRotationSpeed,
                                p.rotationAcceleration = this.rotationAcceleration,
                                p.noRotation = this.noRotation,
                                p.maxLife = u,
                                p.blendMode = this.particleBlendMode,
                                p.ease = this.customEase,
                                p.extraData = this.extraData,
                                this.applyAdditionalProperties(p),
                                this._spawnFunc(p, l, f, t),
                                p.init(),
                                this.addAtBack ? this._parent.addChildAt(p, 0) : this._parent.addChild(p),
                                this._activeParticlesLast ? (this._activeParticlesLast.next = p,
                                p.prev = this._activeParticlesLast,
                                this._activeParticlesLast = p) : this._activeParticlesLast = this._activeParticlesFirst = p,
                                ++this.particleCount,
                                p.update(-this._spawnTimer)
                            }
                    }
                    this._spawnTimer += this._frequency
                }
            if (this._posChanged && (this._prevEmitterPos.x = o,
            this._prevEmitterPos.y = h,
            this._prevPosIsValid = !0,
            this._posChanged = !1),
            !this._emit && !this._activeParticlesFirst) {
                if (this._completeCallback) {
                    var v = this._completeCallback;
                    this._completeCallback = null,
                    v()
                }
                this._destroyWhenComplete && this.destroy()
            }
        }
    }
    ,
    i.prototype.applyAdditionalProperties = function(r) {}
    ,
    i.prototype._spawnPoint = function(r, t, e) {
        this.minStartRotation === this.maxStartRotation ? r.rotation = this.minStartRotation + this.rotation : r.rotation = Math.random() * (this.maxStartRotation - this.minStartRotation) + this.minStartRotation + this.rotation,
        r.position.x = t,
        r.position.y = e
    }
    ,
    i.prototype._spawnRect = function(r, t, e) {
        this.minStartRotation === this.maxStartRotation ? r.rotation = this.minStartRotation + this.rotation : r.rotation = Math.random() * (this.maxStartRotation - this.minStartRotation) + this.minStartRotation + this.rotation,
        $.x = Math.random() * this.spawnRect.width + this.spawnRect.x,
        $.y = Math.random() * this.spawnRect.height + this.spawnRect.y,
        this.rotation !== 0 && H.rotatePoint(this.rotation, $),
        r.position.x = t + $.x,
        r.position.y = e + $.y
    }
    ,
    i.prototype._spawnCircle = function(r, t, e) {
        this.minStartRotation === this.maxStartRotation ? r.rotation = this.minStartRotation + this.rotation : r.rotation = Math.random() * (this.maxStartRotation - this.minStartRotation) + this.minStartRotation + this.rotation,
        $.x = Math.random() * this.spawnCircle.radius,
        $.y = 0,
        H.rotatePoint(Math.random() * 360, $),
        $.x += this.spawnCircle.x,
        $.y += this.spawnCircle.y,
        this.rotation !== 0 && H.rotatePoint(this.rotation, $),
        r.position.x = t + $.x,
        r.position.y = e + $.y
    }
    ,
    i.prototype._spawnRing = function(r, t, e) {
        var n = this.spawnCircle;
        this.minStartRotation === this.maxStartRotation ? r.rotation = this.minStartRotation + this.rotation : r.rotation = Math.random() * (this.maxStartRotation - this.minStartRotation) + this.minStartRotation + this.rotation,
        n.minRadius !== n.radius ? $.x = Math.random() * (n.radius - n.minRadius) + n.minRadius : $.x = n.radius,
        $.y = 0;
        var s = Math.random() * 360;
        r.rotation += s,
        H.rotatePoint(s, $),
        $.x += this.spawnCircle.x,
        $.y += this.spawnCircle.y,
        this.rotation !== 0 && H.rotatePoint(this.rotation, $),
        r.position.x = t + $.x,
        r.position.y = e + $.y
    }
    ,
    i.prototype._spawnPolygonalChain = function(r, t, e) {
        this.minStartRotation === this.maxStartRotation ? r.rotation = this.minStartRotation + this.rotation : r.rotation = Math.random() * (this.maxStartRotation - this.minStartRotation) + this.minStartRotation + this.rotation,
        this.spawnPolygonalChain.getRandomPoint($),
        this.rotation !== 0 && H.rotatePoint(this.rotation, $),
        r.position.x = t + $.x,
        r.position.y = e + $.y
    }
    ,
    i.prototype._spawnBurst = function(r, t, e, n) {
        this.particleSpacing === 0 ? r.rotation = Math.random() * 360 : r.rotation = this.angleStart + this.particleSpacing * n + this.rotation,
        r.position.x = t,
        r.position.y = e
    }
    ,
    i.prototype.cleanup = function() {
        var r, t;
        for (r = this._activeParticlesFirst; r; r = t)
            t = r.next,
            this.recycle(r),
            r.parent && r.parent.removeChild(r);
        this._activeParticlesFirst = this._activeParticlesLast = null,
        this.particleCount = 0
    }
    ,
    i.prototype.destroy = function() {
        this.autoUpdate = !1,
        this.cleanup();
        for (var r, t = this._poolFirst; t; t = r)
            r = t.next,
            t.destroy();
        this._poolFirst = this._parent = this.particleImages = this.spawnPos = this.ownerPos = this.startColor = this.startScale = this.startAlpha = this.startSpeed = this.customEase = this._completeCallback = null
    }
    ,
    i
}()
  , Pr = new V
  , Mh = ["pow", "sqrt", "abs", "floor", "round", "ceil", "E", "PI", "sin", "cos", "tan", "asin", "acos", "atan", "atan2", "log"]
  , _c = new RegExp(["[01234567890\\.\\*\\-\\+\\/\\(\\)x ,]"].concat(Mh).join("|"),"g");
function xc(i) {
    for (var r = i.match(_c), t = r.length - 1; t >= 0; --t)
        Mh.indexOf(r[t]) >= 0 && (r[t] = "Math." + r[t]);
    return i = r.join(""),
    new Function("x","return " + i + ";")
}
var Dc = function(i) {
    vi(r, i);
    function r(t) {
        var e = i.call(this, t) || this;
        return e.path = null,
        e.initialRotation = 0,
        e.initialPosition = new V,
        e.movement = 0,
        e
    }
    return r.prototype.init = function() {
        this.initialRotation = this.rotation,
        this.Particle_init(),
        this.path = this.extraData.path,
        this._doNormalMovement = !this.path,
        this.movement = 0,
        this.initialPosition.x = this.position.x,
        this.initialPosition.y = this.position.y
    }
    ,
    r.prototype.update = function(t) {
        var e = this.Particle_update(t);
        if (e >= 0 && this.path) {
            if (this._doSpeed) {
                var n = this.speedList.interpolate(e) * this.speedMultiplier;
                this.movement += n * t
            } else {
                var n = this.speedList.current.value * this.speedMultiplier;
                this.movement += n * t
            }
            Pr.x = this.movement,
            Pr.y = this.path(this.movement),
            H.rotatePoint(this.initialRotation, Pr),
            this.position.x = this.initialPosition.x + Pr.x,
            this.position.y = this.initialPosition.y + Pr.y
        }
        return e
    }
    ,
    r.prototype.destroy = function() {
        this.Particle_destroy(),
        this.path = this.initialPosition = null
    }
    ,
    r.parseArt = function(t) {
        return yi.parseArt(t)
    }
    ,
    r.parseData = function(t) {
        var e = {};
        if (t && t.path)
            try {
                e.path = xc(t.path)
            } catch (n) {
                H.verbose && console.error("PathParticle: error in parsing path expression"),
                e.path = null
            }
        else
            H.verbose && console.error("PathParticle requires a path string in extraData!"),
            e.path = null;
        return e
    }
    ,
    r
}(yi)
  , Uc = function(i) {
    vi(r, i);
    function r(t) {
        var e = i.call(this, t) || this;
        return e.textures = null,
        e.duration = 0,
        e.framerate = 0,
        e.elapsed = 0,
        e.loop = !1,
        e
    }
    return r.prototype.init = function() {
        this.Particle_init(),
        this.elapsed = 0,
        this.framerate < 0 && (this.duration = this.maxLife,
        this.framerate = this.textures.length / this.duration)
    }
    ,
    r.prototype.applyArt = function(t) {
        this.textures = t.textures,
        this.framerate = t.framerate,
        this.duration = t.duration,
        this.loop = t.loop
    }
    ,
    r.prototype.update = function(t) {
        var e = this.Particle_update(t);
        if (e >= 0) {
            this.elapsed += t,
            this.elapsed > this.duration && (this.loop ? this.elapsed = this.elapsed % this.duration : this.elapsed = this.duration - 1e-6);
            var n = this.elapsed * this.framerate + 1e-7 | 0;
            this.texture = this.textures[n] || L.EMPTY
        }
        return e
    }
    ,
    r.prototype.destroy = function() {
        this.Particle_destroy(),
        this.textures = null
    }
    ,
    r.parseArt = function(t) {
        for (var e = [], n = 0; n < t.length; ++n) {
            for (var s = t[n], a = e[n] = {}, o = a.textures = [], h = s.textures, u = 0; u < h.length; ++u) {
                var l = h[u];
                if (typeof l == "string")
                    o.push(Bs(l));
                else if (l instanceof L)
                    o.push(l);
                else {
                    var f = l.count || 1;
                    for (typeof l.texture == "string" ? l = Bs(l.texture) : l = l.texture; f > 0; --f)
                        o.push(l)
                }
            }
            s.framerate === "matchLife" ? (a.framerate = -1,
            a.duration = 0,
            a.loop = !1) : (a.loop = !!s.loop,
            a.framerate = s.framerate > 0 ? s.framerate : 60,
            a.duration = o.length / a.framerate)
        }
        return e
    }
    ,
    r
}(yi)
  , Bc = function(i) {
    vi(r, i);
    function r() {
        var t = i !== null && i.apply(this, arguments) || this;
        return t._firstChild = null,
        t._lastChild = null,
        t._childCount = 0,
        t
    }
    return Object.defineProperty(r.prototype, "firstChild", {
        get: function() {
            return this._firstChild
        },
        enumerable: !0,
        configurable: !0
    }),
    Object.defineProperty(r.prototype, "lastChild", {
        get: function() {
            return this._lastChild
        },
        enumerable: !0,
        configurable: !0
    }),
    Object.defineProperty(r.prototype, "childCount", {
        get: function() {
            return this._childCount
        },
        enumerable: !0,
        configurable: !0
    }),
    r.prototype.addChild = function() {
        for (var t = [], e = 0; e < arguments.length; e++)
            t[e] = arguments[e];
        if (t.length > 1)
            for (var n = 0; n < t.length; n++)
                this.addChild(t[n]);
        else {
            var s = t[0];
            s.parent && s.parent.removeChild(s),
            s.parent = this,
            this.sortDirty = !0,
            s.transform._parentID = -1,
            this._lastChild ? (this._lastChild.nextChild = s,
            s.prevChild = this._lastChild,
            this._lastChild = s) : this._firstChild = this._lastChild = s,
            ++this._childCount,
            this._boundsID++,
            this.onChildrenChange(),
            this.emit("childAdded", s, this, this._childCount),
            s.emit("added", this)
        }
        return t[0]
    }
    ,
    r.prototype.addChildAt = function(t, e) {
        if (e < 0 || e > this._childCount)
            throw new Error("addChildAt: The index " + e + " supplied is out of bounds " + this._childCount);
        t.parent && t.parent.removeChild(t),
        t.parent = this,
        this.sortDirty = !0,
        t.transform._parentID = -1;
        var n = t;
        if (!this._firstChild)
            this._firstChild = this._lastChild = n;
        else if (e === 0)
            this._firstChild.prevChild = n,
            n.nextChild = this._firstChild,
            this._firstChild = n;
        else if (e === this._childCount)
            this._lastChild.nextChild = n,
            n.prevChild = this._lastChild,
            this._lastChild = n;
        else {
            for (var s = 0, a = this._firstChild; s < e; )
                a = a.nextChild,
                ++s;
            a.prevChild.nextChild = n,
            n.prevChild = a.prevChild,
            n.nextChild = a,
            a.prevChild = n
        }
        return ++this._childCount,
        this._boundsID++,
        this.onChildrenChange(e),
        t.emit("added", this),
        this.emit("childAdded", t, this, e),
        t
    }
    ,
    r.prototype.addChildBelow = function(t, e) {
        if (e.parent !== this)
            throw new Error("addChildBelow: The relative target must be a child of this parent");
        return t.parent && t.parent.removeChild(t),
        t.parent = this,
        this.sortDirty = !0,
        t.transform._parentID = -1,
        e.prevChild.nextChild = t,
        t.prevChild = e.prevChild,
        t.nextChild = e,
        e.prevChild = t,
        this._firstChild === e && (this._firstChild = t),
        ++this._childCount,
        this._boundsID++,
        this.onChildrenChange(),
        this.emit("childAdded", t, this, this._childCount),
        t.emit("added", this),
        t
    }
    ,
    r.prototype.addChildAbove = function(t, e) {
        if (e.parent !== this)
            throw new Error("addChildBelow: The relative target must be a child of this parent");
        return t.parent && t.parent.removeChild(t),
        t.parent = this,
        this.sortDirty = !0,
        t.transform._parentID = -1,
        e.nextChild.prevChild = t,
        t.nextChild = e.nextChild,
        t.prevChild = e,
        e.nextChild = t,
        this._lastChild === e && (this._lastChild = t),
        ++this._childCount,
        this._boundsID++,
        this.onChildrenChange(),
        this.emit("childAdded", t, this, this._childCount),
        t.emit("added", this),
        t
    }
    ,
    r.prototype.swapChildren = function(t, e) {
        if (!(t === e || t.parent !== this || e.parent !== this)) {
            var n = t
              , s = n.prevChild
              , a = n.nextChild;
            t.prevChild = e.prevChild,
            t.nextChild = e.nextChild,
            e.prevChild = s,
            e.nextChild = a,
            this._firstChild === t ? this._firstChild = e : this._firstChild === e && (this._firstChild = t),
            this._lastChild === t ? this._lastChild = e : this._lastChild === e && (this._lastChild = t),
            this.onChildrenChange()
        }
    }
    ,
    r.prototype.getChildIndex = function(t) {
        for (var e = 0, n = this._firstChild; n && n !== t; )
            n = n.nextChild,
            ++e;
        if (!n)
            throw new Error("The supplied DisplayObject must be a child of the caller");
        return e
    }
    ,
    r.prototype.setChildIndex = function(t, e) {
        if (e < 0 || e >= this._childCount)
            throw new Error("The index " + e + " supplied is out of bounds " + this._childCount);
        if (t.parent !== this)
            throw new Error("The supplied DisplayObject must be a child of the caller");
        if (t.nextChild && (t.nextChild.prevChild = t.prevChild),
        t.prevChild && (t.prevChild.nextChild = t.nextChild),
        this._firstChild === t && (this._firstChild = t.nextChild),
        this._lastChild === t && (this._lastChild = t.prevChild),
        t.nextChild = null,
        t.prevChild = null,
        !this._firstChild)
            this._firstChild = this._lastChild = t;
        else if (e === 0)
            this._firstChild.prevChild = t,
            t.nextChild = this._firstChild,
            this._firstChild = t;
        else if (e === this._childCount)
            this._lastChild.nextChild = t,
            t.prevChild = this._lastChild,
            this._lastChild = t;
        else {
            for (var n = 0, s = this._firstChild; n < e; )
                s = s.nextChild,
                ++n;
            s.prevChild.nextChild = t,
            t.prevChild = s.prevChild,
            t.nextChild = s,
            s.prevChild = t
        }
        this.onChildrenChange(e)
    }
    ,
    r.prototype.removeChild = function() {
        for (var t = [], e = 0; e < arguments.length; e++)
            t[e] = arguments[e];
        if (t.length > 1)
            for (var n = 0; n < t.length; n++)
                this.removeChild(t[n]);
        else {
            var s = t[0];
            if (s.parent !== this)
                return null;
            s.parent = null,
            s.transform._parentID = -1,
            s.nextChild && (s.nextChild.prevChild = s.prevChild),
            s.prevChild && (s.prevChild.nextChild = s.nextChild),
            this._firstChild === s && (this._firstChild = s.nextChild),
            this._lastChild === s && (this._lastChild = s.prevChild),
            s.nextChild = null,
            s.prevChild = null,
            --this._childCount,
            this._boundsID++,
            this.onChildrenChange(),
            s.emit("removed", this),
            this.emit("childRemoved", s, this)
        }
        return t[0]
    }
    ,
    r.prototype.getChildAt = function(t) {
        if (t < 0 || t >= this._childCount)
            throw new Error("getChildAt: Index (" + t + ") does not exist.");
        if (t === 0)
            return this._firstChild;
        if (t === this._childCount)
            return this._lastChild;
        for (var e = 0, n = this._firstChild; e < t; )
            n = n.nextChild,
            ++e;
        return n
    }
    ,
    r.prototype.removeChildAt = function(t) {
        var e = this.getChildAt(t);
        return e.parent = null,
        e.transform._parentID = -1,
        e.nextChild && (e.nextChild.prevChild = e.prevChild),
        e.prevChild && (e.prevChild.nextChild = e.nextChild),
        this._firstChild === e && (this._firstChild = e.nextChild),
        this._lastChild === e && (this._lastChild = e.prevChild),
        e.nextChild = null,
        e.prevChild = null,
        --this._childCount,
        this._boundsID++,
        this.onChildrenChange(t),
        e.emit("removed", this),
        this.emit("childRemoved", e, this, t),
        e
    }
    ,
    r.prototype.removeChildren = function(t, e) {
        t === void 0 && (t = 0),
        e === void 0 && (e = this._childCount);
        var n = t
          , s = e
          , a = s - n;
        if (a > 0 && a <= s) {
            for (var o = [], h = this._firstChild, u = 0; u <= s && h; ++u,
            h = h.nextChild)
                u >= n && o.push(h);
            var l = o[0].prevChild
              , f = o[o.length - 1].nextChild;
            f ? f.prevChild = l : this._lastChild = l,
            l ? l.nextChild = f : this._firstChild = f;
            for (var u = 0; u < o.length; ++u)
                o[u].parent = null,
                o[u].transform && (o[u].transform._parentID = -1),
                o[u].nextChild = null,
                o[u].prevChild = null;
            this._boundsID++,
            this.onChildrenChange(t);
            for (var u = 0; u < o.length; ++u)
                o[u].emit("removed", this),
                this.emit("childRemoved", o[u], this, u);
            return o
        } else if (a === 0 && this._childCount === 0)
            return [];
        throw new RangeError("removeChildren: numeric values are outside the acceptable range.")
    }
    ,
    r.prototype.updateTransform = function() {
        this._boundsID++,
        this.transform.updateTransform(this.parent.transform),
        this.worldAlpha = this.alpha * this.parent.worldAlpha;
        var t, e;
        for (t = this._firstChild; t; t = e)
            e = t.nextChild,
            t.visible && t.updateTransform()
    }
    ,
    r.prototype.calculateBounds = function() {
        this._bounds.clear(),
        this._calculateBounds();
        var t, e;
        for (t = this._firstChild; t; t = e)
            if (e = t.nextChild,
            !(!t.visible || !t.renderable))
                if (t.calculateBounds(),
                t._mask) {
                    var n = t._mask.maskObject || t._mask;
                    n.calculateBounds(),
                    this._bounds.addBoundsMask(t._bounds, n._bounds)
                } else
                    t.filterArea ? this._bounds.addBoundsArea(t._bounds, t.filterArea) : this._bounds.addBounds(t._bounds);
        this._bounds.updateID = this._boundsID
    }
    ,
    r.prototype.getLocalBounds = function(t, e) {
        e === void 0 && (e = !1);
        var n = Q.prototype.getLocalBounds.call(this, t);
        if (!e) {
            var s = void 0
              , a = void 0;
            for (s = this._firstChild; s; s = a)
                a = s.nextChild,
                s.visible && s.updateTransform()
        }
        return n
    }
    ,
    r.prototype.render = function(t) {
        if (!(!this.visible || this.worldAlpha <= 0 || !this.renderable))
            if (this._mask || this.filters && this.filters.length)
                this.renderAdvanced(t);
            else {
                this._render(t);
                var e = void 0
                  , n = void 0;
                for (e = this._firstChild; e; e = n)
                    n = e.nextChild,
                    e.render(t)
            }
    }
    ,
    r.prototype.renderAdvanced = function(t) {
        t.batch.flush();
        var e = this.filters
          , n = this._mask;
        if (e) {
            this._enabledFilters || (this._enabledFilters = []),
            this._enabledFilters.length = 0;
            for (var s = 0; s < e.length; s++)
                e[s].enabled && this._enabledFilters.push(e[s]);
            this._enabledFilters.length && t.filter.push(this, this._enabledFilters)
        }
        n && t.mask.push(this, this._mask),
        this._render(t);
        var a, o;
        for (a = this._firstChild; a; a = o)
            o = a.nextChild,
            a.render(t);
        t.batch.flush(),
        n && t.mask.pop(this),
        e && this._enabledFilters && this._enabledFilters.length && t.filter.pop()
    }
    ,
    r.prototype.renderWebGL = function(t) {
        if (!(!this.visible || this.worldAlpha <= 0 || !this.renderable))
            if (this._mask || this.filters && this.filters.length)
                this.renderAdvancedWebGL(t);
            else {
                this._renderWebGL(t);
                var e = void 0
                  , n = void 0;
                for (e = this._firstChild; e; e = n)
                    n = e.nextChild,
                    e.renderWebGL(t)
            }
    }
    ,
    r.prototype.renderAdvancedWebGL = function(t) {
        t.flush();
        var e = this._filters
          , n = this._mask;
        if (e) {
            this._enabledFilters || (this._enabledFilters = []),
            this._enabledFilters.length = 0;
            for (var s = 0; s < e.length; s++)
                e[s].enabled && this._enabledFilters.push(e[s]);
            this._enabledFilters.length && t.filterManager.pushFilter(this, this._enabledFilters)
        }
        n && t.maskManager.pushMask(this, this._mask),
        this._renderWebGL(t);
        var a, o;
        for (a = this._firstChild; a; a = o)
            o = a.nextChild,
            a.renderWebGL(t);
        t.flush(),
        n && t.maskManager.popMask(this, this._mask),
        e && this._enabledFilters && this._enabledFilters.length && t.filterManager.popFilter()
    }
    ,
    r.prototype.renderCanvas = function(t) {
        if (!(!this.visible || this.worldAlpha <= 0 || !this.renderable)) {
            this._mask && t.maskManager.pushMask(this._mask),
            this._renderCanvas(t);
            var e, n;
            for (e = this._firstChild; e; e = n)
                n = e.nextChild,
                e.renderCanvas(t);
            this._mask && t.maskManager.popMask(t)
        }
    }
    ,
    r
}(ot);
var Fh = {
    alpha: {
        start: 0,
        end: .5
    },
    scale: {
        start: 1,
        end: 1
    },
    color: {
        start: "ffffff",
        end: "ffffff"
    },
    speed: {
        start: 1e3,
        end: 3e3
    },
    startRotation: {
        min: 65,
        max: 65
    },
    rotationSpeed: {
        min: 0,
        max: 0
    },
    lifetime: {
        min: .81,
        max: .81
    },
    blendMode: "normal",
    frequency: .004,
    emitterLifetime: 0,
    maxParticles: 1e3,
    pos: {
        x: 0,
        y: 0
    },
    addAtBack: !1,
    spawnType: "rect",
    spawnRect: {
        x: -300,
        y: -100,
        w: 800,
        h: 10
    }
};
var Xs = class {
    constructor({app: r}) {
        this.lightningGap = {
            min: 9e3,
            max: 29e3
        },
        this.app = r,
        this.createAudio(),
        this.lightning = new vt(L.WHITE),
        this.lightning.width = this.lightning.height = r.screen.width,
        this.lightning.tint = 16777215,
        this.lightning.alpha = .8,
        this.flash();
        let t = new ai;
        t.zIndex = 2,
        r.stage.addChild(t);
        let e = new Rh(t,[Y.shared.resources.rain.texture],Fh)
          , n = Date.now()
          , s = function() {
            requestAnimationFrame(s);
            let a = Date.now();
            e.update((a - n) * .001),
            n = a
        };
        e.emit = !0,
        s()
    }
    createAudio() {
        this.thunder = new Audio("./assets/thunder.mp3"),
        this.rain = new Audio("./assets/rain.mp3"),
        this.rain.addEventListener("timeupdate", function() {
            this.currentTime > this.duration - .2 && (this.currentTime = 0)
        })
    }
    enableSound() {
        this.sound = !0,
        this.rain.play()
    }
    async flash() {
        await new Promise(r=>setTimeout(r, this.lightningGap.min + (this.lightningGap.max - this.lightningGap.min) * Math.random())),
        this.app.stage.addChild(this.lightning),
        this.sound && this.thunder.play(),
        await new Promise(r=>setTimeout(r, 200)),
        this.app.stage.removeChild(this.lightning),
        this.flash()
    }
}
  , Lh = Xs;
var ie = class {
}
;
Kt(ie, "PREINTRO", "preintro"),
Kt(ie, "INTRO", "intro"),
Kt(ie, "START", "start"),
Kt(ie, "RUNNING", "running"),
Kt(ie, "GAMEOVER", "gameover");
var tt = ie;
var bc = Ke(function(i, r) {
    i.exports = t;
    function t(o, h) {
        if (!(this instanceof t))
            return new t(o,h);
        this.x = o || 0,
        this.y = h || 0
    }
    t.fromArray = function(o) {
        return new t(o[0] || 0,o[1] || 0)
    }
    ,
    t.fromObject = function(o) {
        return new t(o.x || 0,o.y || 0)
    }
    ,
    t.prototype.addX = function(o) {
        return this.x += o.x,
        this
    }
    ,
    t.prototype.addY = function(o) {
        return this.y += o.y,
        this
    }
    ,
    t.prototype.add = function(o) {
        return this.x += o.x,
        this.y += o.y,
        this
    }
    ,
    t.prototype.addScalar = function(o) {
        return this.x += o,
        this.y += o,
        this
    }
    ,
    t.prototype.addScalarX = function(o) {
        return this.x += o,
        this
    }
    ,
    t.prototype.addScalarY = function(o) {
        return this.y += o,
        this
    }
    ,
    t.prototype.subtractX = function(o) {
        return this.x -= o.x,
        this
    }
    ,
    t.prototype.subtractY = function(o) {
        return this.y -= o.y,
        this
    }
    ,
    t.prototype.subtract = function(o) {
        return this.x -= o.x,
        this.y -= o.y,
        this
    }
    ,
    t.prototype.subtractScalar = function(o) {
        return this.x -= o,
        this.y -= o,
        this
    }
    ,
    t.prototype.subtractScalarX = function(o) {
        return this.x -= o,
        this
    }
    ,
    t.prototype.subtractScalarY = function(o) {
        return this.y -= o,
        this
    }
    ,
    t.prototype.divideX = function(o) {
        return this.x /= o.x,
        this
    }
    ,
    t.prototype.divideY = function(o) {
        return this.y /= o.y,
        this
    }
    ,
    t.prototype.divide = function(o) {
        return this.x /= o.x,
        this.y /= o.y,
        this
    }
    ,
    t.prototype.divideScalar = function(o) {
        return o !== 0 ? (this.x /= o,
        this.y /= o) : (this.x = 0,
        this.y = 0),
        this
    }
    ,
    t.prototype.divideScalarX = function(o) {
        return o !== 0 ? this.x /= o : this.x = 0,
        this
    }
    ,
    t.prototype.divideScalarY = function(o) {
        return o !== 0 ? this.y /= o : this.y = 0,
        this
    }
    ,
    t.prototype.invertX = function() {
        return this.x *= -1,
        this
    }
    ,
    t.prototype.invertY = function() {
        return this.y *= -1,
        this
    }
    ,
    t.prototype.invert = function() {
        return this.invertX(),
        this.invertY(),
        this
    }
    ,
    t.prototype.multiplyX = function(o) {
        return this.x *= o.x,
        this
    }
    ,
    t.prototype.multiplyY = function(o) {
        return this.y *= o.y,
        this
    }
    ,
    t.prototype.multiply = function(o) {
        return this.x *= o.x,
        this.y *= o.y,
        this
    }
    ,
    t.prototype.multiplyScalar = function(o) {
        return this.x *= o,
        this.y *= o,
        this
    }
    ,
    t.prototype.multiplyScalarX = function(o) {
        return this.x *= o,
        this
    }
    ,
    t.prototype.multiplyScalarY = function(o) {
        return this.y *= o,
        this
    }
    ,
    t.prototype.normalize = function() {
        var o = this.length();
        return o === 0 ? (this.x = 1,
        this.y = 0) : this.divide(t(o, o)),
        this
    }
    ,
    t.prototype.norm = t.prototype.normalize,
    t.prototype.limit = function(o, h) {
        return Math.abs(this.x) > o && (this.x *= h),
        Math.abs(this.y) > o && (this.y *= h),
        this
    }
    ,
    t.prototype.randomize = function(o, h) {
        return this.randomizeX(o, h),
        this.randomizeY(o, h),
        this
    }
    ,
    t.prototype.randomizeX = function(o, h) {
        var u = Math.min(o.x, h.x)
          , l = Math.max(o.x, h.x);
        return this.x = n(u, l),
        this
    }
    ,
    t.prototype.randomizeY = function(o, h) {
        var u = Math.min(o.y, h.y)
          , l = Math.max(o.y, h.y);
        return this.y = n(u, l),
        this
    }
    ,
    t.prototype.randomizeAny = function(o, h) {
        return Math.round(Math.random()) ? this.randomizeX(o, h) : this.randomizeY(o, h),
        this
    }
    ,
    t.prototype.unfloat = function() {
        return this.x = Math.round(this.x),
        this.y = Math.round(this.y),
        this
    }
    ,
    t.prototype.toFixed = function(o) {
        return typeof o == "undefined" && (o = 8),
        this.x = this.x.toFixed(o),
        this.y = this.y.toFixed(o),
        this
    }
    ,
    t.prototype.mixX = function(o, h) {
        return typeof h == "undefined" && (h = .5),
        this.x = (1 - h) * this.x + h * o.x,
        this
    }
    ,
    t.prototype.mixY = function(o, h) {
        return typeof h == "undefined" && (h = .5),
        this.y = (1 - h) * this.y + h * o.y,
        this
    }
    ,
    t.prototype.mix = function(o, h) {
        return this.mixX(o, h),
        this.mixY(o, h),
        this
    }
    ,
    t.prototype.clone = function() {
        return new t(this.x,this.y)
    }
    ,
    t.prototype.copyX = function(o) {
        return this.x = o.x,
        this
    }
    ,
    t.prototype.copyY = function(o) {
        return this.y = o.y,
        this
    }
    ,
    t.prototype.copy = function(o) {
        return this.copyX(o),
        this.copyY(o),
        this
    }
    ,
    t.prototype.zero = function() {
        return this.x = this.y = 0,
        this
    }
    ,
    t.prototype.dot = function(o) {
        return this.x * o.x + this.y * o.y
    }
    ,
    t.prototype.cross = function(o) {
        return this.x * o.y - this.y * o.x
    }
    ,
    t.prototype.projectOnto = function(o) {
        var h = (this.x * o.x + this.y * o.y) / (o.x * o.x + o.y * o.y);
        return this.x = h * o.x,
        this.y = h * o.y,
        this
    }
    ,
    t.prototype.horizontalAngle = function() {
        return Math.atan2(this.y, this.x)
    }
    ,
    t.prototype.horizontalAngleDeg = function() {
        return s(this.horizontalAngle())
    }
    ,
    t.prototype.verticalAngle = function() {
        return Math.atan2(this.x, this.y)
    }
    ,
    t.prototype.verticalAngleDeg = function() {
        return s(this.verticalAngle())
    }
    ,
    t.prototype.angle = t.prototype.horizontalAngle,
    t.prototype.angleDeg = t.prototype.horizontalAngleDeg,
    t.prototype.direction = t.prototype.horizontalAngle,
    t.prototype.rotate = function(o) {
        var h = this.x * Math.cos(o) - this.y * Math.sin(o)
          , u = this.x * Math.sin(o) + this.y * Math.cos(o);
        return this.x = h,
        this.y = u,
        this
    }
    ,
    t.prototype.rotateDeg = function(o) {
        return o = a(o),
        this.rotate(o)
    }
    ,
    t.prototype.rotateTo = function(o) {
        return this.rotate(o - this.angle())
    }
    ,
    t.prototype.rotateToDeg = function(o) {
        return o = a(o),
        this.rotateTo(o)
    }
    ,
    t.prototype.rotateBy = function(o) {
        var h = this.angle() + o;
        return this.rotate(h)
    }
    ,
    t.prototype.rotateByDeg = function(o) {
        return o = a(o),
        this.rotateBy(o)
    }
    ,
    t.prototype.distanceX = function(o) {
        return this.x - o.x
    }
    ,
    t.prototype.absDistanceX = function(o) {
        return Math.abs(this.distanceX(o))
    }
    ,
    t.prototype.distanceY = function(o) {
        return this.y - o.y
    }
    ,
    t.prototype.absDistanceY = function(o) {
        return Math.abs(this.distanceY(o))
    }
    ,
    t.prototype.distance = function(o) {
        return Math.sqrt(this.distanceSq(o))
    }
    ,
    t.prototype.distanceSq = function(o) {
        var h = this.distanceX(o)
          , u = this.distanceY(o);
        return h * h + u * u
    }
    ,
    t.prototype.length = function() {
        return Math.sqrt(this.lengthSq())
    }
    ,
    t.prototype.lengthSq = function() {
        return this.x * this.x + this.y * this.y
    }
    ,
    t.prototype.magnitude = t.prototype.length,
    t.prototype.isZero = function() {
        return this.x === 0 && this.y === 0
    }
    ,
    t.prototype.isEqualTo = function(o) {
        return this.x === o.x && this.y === o.y
    }
    ,
    t.prototype.toString = function() {
        return "x:" + this.x + ", y:" + this.y
    }
    ,
    t.prototype.toArray = function() {
        return [this.x, this.y]
    }
    ,
    t.prototype.toObject = function() {
        return {
            x: this.x,
            y: this.y
        }
    }
    ;
    var e = 180 / Math.PI;
    function n(o, h) {
        return Math.floor(Math.random() * (h - o + 1) + o)
    }
    function s(o) {
        return o * e
    }
    function a(o) {
        return o / e
    }
})
  , $e = bc;
var Gs = class {
    constructor({app: r, player: t}) {
        this.app = r,
        this.player = t,
        this.bulletSpeed = 12,
        this.bullets = [],
        this.bulletRadius = 1,
        this.maxBullets = 3,
        this.audio = new Audio("./assets/shoot.mp3")
    }
    fire() {
        if (this.audio.currentTime = 0,
        this.audio.play(),
        this.bullets.length >= this.maxBullets) {
            let e = this.bullets.shift();
            this.app.stage.removeChild(e)
        }
        this.bullets.forEach(e=>this.app.stage.removeChild(e)),
        this.bullets = this.bullets.filter(e=>Math.abs(e.position.x) < this.app.screen.width && Math.abs(e.position.y) < this.app.screen.height),
        this.bullets.forEach(e=>this.app.stage.addChild(e));
        let r = new vt(Y.shared.resources.bullet.texture);
        r.anchor.set(.5),
        r.scale.set(.2, .2),
        r.position.set(this.player.position.x, this.player.position.y);
        let t = this.player.rotation - Math.PI / 2;
        r.rotation = this.player.rotation,
        r.velocity = new $e(Math.cos(t),Math.sin(t)).multiplyScalar(this.bulletSpeed),
        this.bullets.push(r),
        this.app.stage.addChild(r)
    }
    set shoot(r) {
        r ? (this.fire(),
        this.interval = setInterval(()=>this.fire(), 500)) : clearInterval(this.interval)
    }
    stop() {
        this.shoot = !1,
        this.bullets.forEach(r=>this.app.stage.removeChild(r))
    }
    update(r) {
        this.bullets.forEach(t=>{
            t.position.set(t.position.x + t.velocity.x * r, t.position.y + t.velocity.y * r)
        }
        )
    }
}
  , Nh = Gs;
var Ir = ["tankzee", "dogzee", "femalezee", "nursezee", "quickzee", "copzee"]
  , js = "https://boardz-pern.herokuapp.com/boardz/hordezee"
  , Dh = {
    fontFamily: "Arial",
    fontSize: 36,
    fontStyle: "normal",
    fontWeight: "bold",
    fill: ["#88A050", "#ff0000"],
    stroke: "#F0E8C8",
    strokeThickness: 2,
    dropShadow: !0,
    dropShadowColor: "#000000",
    dropShadowBlur: 4,
    dropShadowAngle: Math.PI / 6,
    dropShadowDistance: 6,
    wordWrap: !0,
    wordWrapWidth: 440,
    lineJoin: "round"
}
  , _i = {
    fontFamily: "Arial",
    fontSize: 22,
    fontStyle: "normal",
    fontWeight: "bold",
    fill: ["#88A050"],
    stroke: "#0",
    strokeThickness: 2,
    dropShadow: !0,
    dropShadowColor: "#000000",
    dropShadowBlur: 4,
    dropShadowAngle: Math.PI / 6,
    dropShadowDistance: 6,
    wordWrap: !0,
    wordWrapWidth: 440,
    lineJoin: "round"
}
  , Uh = {
    fontFamily: "Courier",
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: "bold",
    fill: ["white"],
    stroke: "#0",
    strokeThickness: 2,
    dropShadow: !0,
    dropShadowColor: "#000000",
    dropShadowBlur: 4,
    dropShadowAngle: Math.PI / 6,
    dropShadowDistance: 6,
    wordWrap: !0,
    wordWrapWidth: 440,
    lineJoin: "round"
};
var Hs = class {
    constructor({app: r}) {
        this.score = 0,
        this.maxHealth = 100,
        this.health = this.maxHealth,
        this.lastMouseButton = 0,
        this.app = r;
        let t = 32
          , e = Y.shared.resources["assets/hero_male.json"].spritesheet;
        this.idle = new It(e.animations.idle),
        this.shoot = new It(e.animations.shoot),
        this.player = new It(e.animations.idle),
        this.player.animationSpeed = .1,
        this.player.play(),
        this.player.anchor.set(.5, .3),
        this.player.position.set(r.screen.width / 2, r.screen.height / 2),
        this.player.zIndex = 1,
        r.stage.addChild(this.player),
        this.shooting = new Nh({
            app: r,
            player: this
        });
        let n = 16
          , s = 8;
        this.healthBar = new ze,
        this.healthBar.beginFill(16711680),
        this.healthBar.initialWidth = r.screen.width - 2 * n,
        this.healthBar.drawRect(n, r.screen.height - s - n / 2, this.healthBar.initialWidth, s),
        this.healthBar.endFill(),
        this.healthBar.zIndex = 1,
        this.app.stage.sortableChildren = !0,
        this.app.stage.addChild(this.healthBar),
        this.healthBar.visible = !1,
        this.scoreText = new Pt("",_i),
        this.scoreText.x = 5,
        this.scoreText.y = 0,
        this.scoreText.anchor.set(0, 0),
        this.scoreText.zIndex = 1,
        this.app.stage.addChild(this.scoreText)
    }
    updateScore() {
        this.score++,
        this.scoreText.text = `Score: ${this.score}`
    }
    set scale(r) {
        this.player.scale.set(r)
    }
    get scale() {
        return this.player.scale.x
    }
    get position() {
        return this.player.position
    }
    get width() {
        return this.player.width
    }
    attack() {
        this.health -= 1,
        this.healthBar.width = this.health / this.maxHealth * this.healthBar.initialWidth,
        this.health <= 0 && (this.dead = !0,
        this.player.zIndex = -1,
        this.player.stop(),
        this.shooting.stop())
    }
    update(r) {
        if (this.healthBar.visible = this.app.gameState === tt.RUNNING,
        this.dead)
            return;
        let t = this.app.renderer.plugins.interaction.eventData.data
          , e = this.app.renderer.plugins.interaction.eventData.data.global;
        this.rotation = Math.atan2(e.y - this.player.position.y, e.x - this.player.position.x) + Math.PI / 2,
        this.player.scale.x = e.x < this.player.position.x ? -1 : 1,
        t.buttons !== this.lastMouseButton && (this.player.textures = t.buttons === 0 ? this.idle.textures : this.shoot.textures,
        this.player.play(),
        this.lastMouseButton = t.buttons,
        this.shooting.shoot = t.buttons !== 0),
        this.shooting.update(r)
    }
}
  , Bh = Hs;
var zs = class {
    constructor({app: r, player: t}) {
        this.app = r,
        this.player = t;
        let e = this.randomSpawnPoint()
          , n = Ir[Math.floor(Math.random() * Ir.length)];
        this.speed = n === "quickzee" ? 1 : .25;
        let s = Y.shared.resources[`assets/${n}.json`].spritesheet;
        this.die = new It(s.animations.die),
        this.attack = new It(s.animations.attack),
        this.zombie = new It(s.animations.walk),
        this.zombie.animationSpeed = n === "quickzee" ? .2 : .1,
        this.zombie.play(),
        this.zombie.anchor.set(.5),
        this.zombie.position.set(e.x, e.y),
        r.stage.addChild(this.zombie),
        this.audio = new Audio("./assets/squelch.mp3")
    }
    kill() {
        this.audio.currentTime = 0,
        this.audio.play(),
        this.zombie.textures = this.die.textures,
        this.zombie.loop = !1,
        this.zombie.onComplete = ()=>setTimeout(()=>this.app.stage.removeChild(this.zombie), 3e4),
        this.zombie.play(),
        this.zombie.zIndex = -1
    }
    get position() {
        return this.zombie.position
    }
    attackPlayer() {
        this.attacking || (this.attacking = !0,
        this.zombie.textures = this.attack.textures,
        this.zombie.animationSpeed = .1,
        this.zombie.onLoop = ()=>this.player.attack(),
        this.zombie.play())
    }
    update(r) {
        let t = new $e(this.zombie.position.x,this.zombie.position.y)
          , e = new $e(this.player.position.x,this.player.position.y);
        if (t.distance(e) < this.player.width / 2) {
            this.zombie.textures !== this.attack.textures && this.attackPlayer();
            return
        }
        let s = e.subtract(t).normalize().multiplyScalar(this.speed * r);
        this.zombie.scale.x = s.x < 0 ? 1 : -1,
        this.zombie.position.set(this.zombie.position.x + s.x, this.zombie.position.y + s.y)
    }
    randomSpawnPoint() {
        let r = Math.floor(Math.random() * 4)
          , t = new $e(0,0)
          , e = this.app.screen.width;
        switch (r) {
        case 0:
            t.x = e * Math.random();
            break;
        case 1:
            t.x = e,
            t.y = e * Math.random();
            break;
        case 2:
            t.x = e * Math.random(),
            t.y = e;
            break;
        default:
            t.x = 0,
            t.y = e * Math.random();
            break
        }
        return t
    }
    setup() {
        let r = Y.shared.resources["assets/tankz/tankz.json"].spritesheet;
        console.log(r);
        let t = new It(r.animations.walk);
        t.animationSpeed = .167,
        t.play(),
        this.app.stage.addChild(t)
    }
}
  , kh = zs;
var Vs = class {
    constructor({app: r, create: t}) {
        this.app = r;
        let e = 1e3
          , n = 1e4;
        this.waveSize = 10,
        this.maxSpawns = 40,
        this.create = t,
        this.spawns = [],
        setInterval(()=>this.spawn(), e),
        setInterval(()=>this.wave(), n)
    }
    spawn() {
        if (this.app.gameState !== tt.RUNNING || this.spawns.length >= this.maxSpawns)
            return;
        let r = this.create();
        this.spawns.push(r)
    }
    wave() {
        if (this.app.gameState === tt.RUNNING && !(this.spawns.length >= this.maxSpawns)) {
            for (let r = 0; r < this.waveSize; r++) {
                let t = this.create();
                this.spawns.push(t)
            }
            this.waveSize *= 1.3
        }
    }
}
  , Xh = Vs;
var Ys = class {
    constructor({app: r}) {
        Kt(this, "handleSubmit", async r=>{
            r.preventDefault();
            let t = new FormData(r.target)
              , e = Object.fromEntries(t.entries());
            if (e.player !== "")
                try {
                    let s = await (await fetch(js, {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(e)
                    })).json()
                } catch (n) {
                    console.log(n.message)
                }
            this.overlay.style.display = "none",
            this.showScore(!0)
        }
        );
        this.overlay = document.getElementById("overlay"),
        this.form = document.getElementById("score-form"),
        this.form.addEventListener("submit", this.handleSubmit),
        this.scoreText = new Pt("",new mt(Uh)),
        this.scoreText.x = 10,
        this.scoreText.y = r.screen.height / 2,
        this.scoreText.anchor.set(0, .5),
        this.scoreText.zIndex = 2,
        r.stage.addChild(this.scoreText),
        this.showScore(!0)
    }
    async showScore(r) {
        this.scoreText.text = "",
        r && (this.scoreText.text = ` TOP 10 HIGH SCORES
--------------------
`,
        (await this.getScores()).forEach((e,n)=>{
            var s;
            return this.scoreText.text += `${(n + 1).toString().padStart(2, "0")} ${(s = e.player) == null ? void 0 : s.padEnd(16, " ")} ${e.score.toString().padStart(5, " ")}
`
        }
        ))
    }
    async getScores() {
        return await (await fetch(js, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })).json()
    }
    showScoreForm(r) {
        console.log(`Hello ${r}`),
        this.overlay.style.display = "grid",
        this.form.score.value = r
    }
    get scoreFormShowing() {
        return this.overlay.style.display === "grid"
    }
}
  , Gh = Ys;
var jh = 500
  , Tc = document.getElementById("mycanvas")
  , _d = document.getElementById("canvasContainer")
  , W = new re({
    view: Tc,
    width: jh,
    height: jh,
    backgroundColor: 3222059,
    resolution: 4
})
  , xd = W.renderer.view.getBoundingClientRect();
R.SCALE_MODE = pt.NEAREST;
var Sr = new Audio("./assets/HordeZee.mp3");
Sr.addEventListener("timeupdate", function() {
    this.currentTime > this.duration - .2 && (this.currentTime = 0)
});
var Ws = new Audio("./assets/horde.mp3");
Ws.volume = .7;
Ws.addEventListener("timeupdate", function() {
    this.currentTime > this.duration - .2 && (this.currentTime = 0)
});
wc();
async function wc() {
    W.gameState = tt.PREINTRO,
    console.log("Loading...");
    try {
        await Ic(),
        console.log("Loaded"),
        W.weather = new Lh({
            app: W
        });
        let i = new Bh({
            app: W
        });
        W.scoreBoard = new Gh({
            app: W
        });
        let r = new Xh({
            app: W,
            create: ()=>new kh({
                app: W,
                player: i
            })
        })
          , t = qs("HordeZee", "Click to Continue")
          , e = qs("HordeZee", "Click to Start")
          , n = qs("HordeZee", "Game Over / Click to Restart");
        W.ticker.add(s=>{
            switch (i.dead && (W.gameState != tt.GAMEOVER && W.scoreBoard.showScoreForm(i.score),
            W.gameState = tt.GAMEOVER),
            t.visible = W.gameState === tt.PREINTRO,
            e.visible = W.gameState === tt.START,
            n.visible = W.gameState === tt.GAMEOVER,
            W.gameState) {
            case tt.PREINTRO:
                i.scale = 4;
                break;
            case tt.INTRO:
                i.scale -= .01,
                i.scale <= 1 && (W.gameState = tt.START);
                break;
            case tt.RUNNING:
                Sr.volume > 0 && (Sr.volume = Math.max(0, Sr.volume - .003)),
                i.update(s),
                r.spawns.forEach(a=>a.update(s)),
                Pc({
                    bullets: i.shooting.bullets,
                    zombies: r.spawns,
                    bulletRadius: 5,
                    zombieRadius: 10,
                    updateScore: ()=>i.updateScore()
                });
                break;
            case tt.GAMEOVER:
                break;
            default:
                break
            }
        }
        )
    } catch (i) {
        console.log(i.message),
        console.log("Load failed")
    }
}
function qs(i, r) {
    let t = new ot
      , e = new Pt(i,new mt(Dh));
    e.x = W.screen.width / 2,
    e.y = 0,
    e.anchor.set(.5, 0);
    let n = new Pt(r,new mt(_i));
    return n.x = W.screen.width / 2,
    n.y = 50,
    n.anchor.set(.5, 0),
    t.zIndex = 1,
    t.addChild(e),
    t.addChild(n),
    W.stage.addChild(t),
    t
}
function Pc({bullets: i, zombies: r, bulletRadius: t, zombieRadius: e, updateScore: n}) {
    i.forEach(s=>{
        r.forEach((a,o)=>{
            let h = a.position.x - s.position.x
              , u = a.position.y - s.position.y;
            Math.sqrt(h * h + u * u) < t + e && (r.splice(o, 1),
            a.kill(),
            n())
        }
        )
    }
    )
}
async function Ic() {
    return new Promise((i,r)=>{
        Ir.forEach(t=>Y.shared.add(`assets/${t}.json`)),
        Y.shared.add("assets/hero_male.json"),
        Y.shared.add("bullet", "assets/bullet.png"),
        Y.shared.add("crosshairs", "assets/crosshairs.png"),
        Y.shared.add("rain", "assets/rain.png"),
        Y.shared.load(i),
        Y.shared.load(),
        Y.shared.onComplete.add(i),
        Y.shared.onError.add(r)
    }
    )
}
function Hh() {
    switch (W.gameState) {
    case tt.PREINTRO:
        W.gameState = tt.INTRO,
        W.weather.enableSound(),
        Sr.play();
        break;
    case tt.INTRO:
        break;
    case tt.START:
        W.gameState = tt.RUNNING,
        W.scoreBoard.showScore(!1),
        Ws.play();
        break;
    case tt.GAMEOVER:
        W.scoreBoard.scoreFormShowing || window.location.reload();
        break;
    default:
        break
    }
}
document.addEventListener("click", Hh);
document.addEventListener("touchstart", Hh);