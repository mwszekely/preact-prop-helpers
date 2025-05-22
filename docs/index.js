var n,
  l$1,
  u$2,
  i$1,
  r$1,
  o$1,
  e$1,
  f$2,
  c$1,
  s$1,
  a$1,
  h$1,
  p$1 = {},
  y$1 = [],
  v$1 = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,
  w$1 = Array.isArray;
function d$1(n, l) {
  for (var u in l) n[u] = l[u];
  return n;
}
function g$1(n) {
  n && n.parentNode && n.parentNode.removeChild(n);
}
function _$1(l, u, t) {
  var i,
    r,
    o,
    e = {};
  for (o in u) "key" == o ? i = u[o] : "ref" == o ? r = u[o] : e[o] = u[o];
  if (arguments.length > 2 && (e.children = arguments.length > 3 ? n.call(arguments, 2) : t), "function" == typeof l && null != l.defaultProps) for (o in l.defaultProps) null == e[o] && (e[o] = l.defaultProps[o]);
  return m$1(l, e, i, r, null);
}
function m$1(n, t, i, r, o) {
  var e = {
    type: n,
    props: t,
    key: i,
    ref: r,
    __k: null,
    __: null,
    __b: 0,
    __e: null,
    __c: null,
    constructor: void 0,
    __v: null == o ? ++u$2 : o,
    __i: -1,
    __u: 0
  };
  return null == o && null != l$1.vnode && l$1.vnode(e), e;
}
function k$1(n) {
  return n.children;
}
function x$1(n, l) {
  this.props = n, this.context = l;
}
function S(n, l) {
  if (null == l) return n.__ ? S(n.__, n.__i + 1) : null;
  for (var u; l < n.__k.length; l++) if (null != (u = n.__k[l]) && null != u.__e) return u.__e;
  return "function" == typeof n.type ? S(n) : null;
}
function C$1(n) {
  var l, u;
  if (null != (n = n.__) && null != n.__c) {
    for (n.__e = n.__c.base = null, l = 0; l < n.__k.length; l++) if (null != (u = n.__k[l]) && null != u.__e) {
      n.__e = n.__c.base = u.__e;
      break;
    }
    return C$1(n);
  }
}
function M$1(n) {
  (!n.__d && (n.__d = !0) && i$1.push(n) && !$.__r++ || r$1 != l$1.debounceRendering) && ((r$1 = l$1.debounceRendering) || o$1)($);
}
function $() {
  for (var n, u, t, r, o, f, c, s = 1; i$1.length;) i$1.length > s && i$1.sort(e$1), n = i$1.shift(), s = i$1.length, n.__d && (t = void 0, o = (r = (u = n).__v).__e, f = [], c = [], u.__P && ((t = d$1({}, r)).__v = r.__v + 1, l$1.vnode && l$1.vnode(t), O(u.__P, t, r, u.__n, u.__P.namespaceURI, 32 & r.__u ? [o] : null, f, null == o ? S(r) : o, !!(32 & r.__u), c), t.__v = r.__v, t.__.__k[t.__i] = t, z$1(f, t, c), t.__e != o && C$1(t)));
  $.__r = 0;
}
function I(n, l, u, t, i, r, o, e, f, c, s) {
  var a,
    h,
    v,
    w,
    d,
    g,
    _ = t && t.__k || y$1,
    m = l.length;
  for (f = P$1(u, l, _, f, m), a = 0; a < m; a++) null != (v = u.__k[a]) && (h = -1 == v.__i ? p$1 : _[v.__i] || p$1, v.__i = a, g = O(n, v, h, i, r, o, e, f, c, s), w = v.__e, v.ref && h.ref != v.ref && (h.ref && q$2(h.ref, null, v), s.push(v.ref, v.__c || w, v)), null == d && null != w && (d = w), 4 & v.__u || h.__k === v.__k ? f = A$2(v, f, n) : "function" == typeof v.type && void 0 !== g ? f = g : w && (f = w.nextSibling), v.__u &= -7);
  return u.__e = d, f;
}
function P$1(n, l, u, t, i) {
  var r,
    o,
    e,
    f,
    c,
    s = u.length,
    a = s,
    h = 0;
  for (n.__k = new Array(i), r = 0; r < i; r++) null != (o = l[r]) && "boolean" != typeof o && "function" != typeof o ? (f = r + h, (o = n.__k[r] = "string" == typeof o || "number" == typeof o || "bigint" == typeof o || o.constructor == String ? m$1(null, o, null, null, null) : w$1(o) ? m$1(k$1, {
    children: o
  }, null, null, null) : null == o.constructor && o.__b > 0 ? m$1(o.type, o.props, o.key, o.ref ? o.ref : null, o.__v) : o).__ = n, o.__b = n.__b + 1, e = null, -1 != (c = o.__i = L(o, u, f, a)) && (a--, (e = u[c]) && (e.__u |= 2)), null == e || null == e.__v ? (-1 == c && (i > s ? h-- : i < s && h++), "function" != typeof o.type && (o.__u |= 4)) : c != f && (c == f - 1 ? h-- : c == f + 1 ? h++ : (c > f ? h-- : h++, o.__u |= 4))) : n.__k[r] = null;
  if (a) for (r = 0; r < s; r++) null != (e = u[r]) && 0 == (2 & e.__u) && (e.__e == t && (t = S(e)), B$2(e, e));
  return t;
}
function A$2(n, l, u) {
  var t, i;
  if ("function" == typeof n.type) {
    for (t = n.__k, i = 0; t && i < t.length; i++) t[i] && (t[i].__ = n, l = A$2(t[i], l, u));
    return l;
  }
  n.__e != l && (l && n.type && !u.contains(l) && (l = S(n)), u.insertBefore(n.__e, l || null), l = n.__e);
  do {
    l = l && l.nextSibling;
  } while (null != l && 8 == l.nodeType);
  return l;
}
function H$1(n, l) {
  return l = l || [], null == n || "boolean" == typeof n || (w$1(n) ? n.some(function (n) {
    H$1(n, l);
  }) : l.push(n)), l;
}
function L(n, l, u, t) {
  var i,
    r,
    o = n.key,
    e = n.type,
    f = l[u];
  if (null === f && null == n.key || f && o == f.key && e == f.type && 0 == (2 & f.__u)) return u;
  if (t > (null != f && 0 == (2 & f.__u) ? 1 : 0)) for (i = u - 1, r = u + 1; i >= 0 || r < l.length;) {
    if (i >= 0) {
      if ((f = l[i]) && 0 == (2 & f.__u) && o == f.key && e == f.type) return i;
      i--;
    }
    if (r < l.length) {
      if ((f = l[r]) && 0 == (2 & f.__u) && o == f.key && e == f.type) return r;
      r++;
    }
  }
  return -1;
}
function T$2(n, l, u) {
  "-" == l[0] ? n.setProperty(l, null == u ? "" : u) : n[l] = null == u ? "" : "number" != typeof u || v$1.test(l) ? u : u + "px";
}
function j$2(n, l, u, t, i) {
  var r;
  n: if ("style" == l) {
    if ("string" == typeof u) n.style.cssText = u;else {
      if ("string" == typeof t && (n.style.cssText = t = ""), t) for (l in t) u && l in u || T$2(n.style, l, "");
      if (u) for (l in u) t && u[l] == t[l] || T$2(n.style, l, u[l]);
    }
  } else if ("o" == l[0] && "n" == l[1]) r = l != (l = l.replace(f$2, "$1")), l = l.toLowerCase() in n || "onFocusOut" == l || "onFocusIn" == l ? l.toLowerCase().slice(2) : l.slice(2), n.l || (n.l = {}), n.l[l + r] = u, u ? t ? u.u = t.u : (u.u = c$1, n.addEventListener(l, r ? a$1 : s$1, r)) : n.removeEventListener(l, r ? a$1 : s$1, r);else {
    if ("http://www.w3.org/2000/svg" == i) l = l.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");else if ("width" != l && "height" != l && "href" != l && "list" != l && "form" != l && "tabIndex" != l && "download" != l && "rowSpan" != l && "colSpan" != l && "role" != l && "popover" != l && l in n) try {
      n[l] = null == u ? "" : u;
      break n;
    } catch (n) {}
    "function" == typeof u || (null == u || !1 === u && "-" != l[4] ? n.removeAttribute(l) : n.setAttribute(l, "popover" == l && 1 == u ? "" : u));
  }
}
function F$2(n) {
  return function (u) {
    if (this.l) {
      var t = this.l[u.type + n];
      if (null == u.t) u.t = c$1++;else if (u.t < t.u) return;
      return t(l$1.event ? l$1.event(u) : u);
    }
  };
}
function O(n, u, t, i, r, o, e, f, c, s) {
  var a,
    h,
    p,
    y,
    v,
    _,
    m,
    b,
    S,
    C,
    M,
    $,
    P,
    A,
    H,
    L,
    T,
    j = u.type;
  if (null != u.constructor) return null;
  128 & t.__u && (c = !!(32 & t.__u), o = [f = u.__e = t.__e]), (a = l$1.__b) && a(u);
  n: if ("function" == typeof j) try {
    if (b = u.props, S = "prototype" in j && j.prototype.render, C = (a = j.contextType) && i[a.__c], M = a ? C ? C.props.value : a.__ : i, t.__c ? m = (h = u.__c = t.__c).__ = h.__E : (S ? u.__c = h = new j(b, M) : (u.__c = h = new x$1(b, M), h.constructor = j, h.render = D$2), C && C.sub(h), h.props = b, h.state || (h.state = {}), h.context = M, h.__n = i, p = h.__d = !0, h.__h = [], h._sb = []), S && null == h.__s && (h.__s = h.state), S && null != j.getDerivedStateFromProps && (h.__s == h.state && (h.__s = d$1({}, h.__s)), d$1(h.__s, j.getDerivedStateFromProps(b, h.__s))), y = h.props, v = h.state, h.__v = u, p) S && null == j.getDerivedStateFromProps && null != h.componentWillMount && h.componentWillMount(), S && null != h.componentDidMount && h.__h.push(h.componentDidMount);else {
      if (S && null == j.getDerivedStateFromProps && b !== y && null != h.componentWillReceiveProps && h.componentWillReceiveProps(b, M), !h.__e && null != h.shouldComponentUpdate && !1 === h.shouldComponentUpdate(b, h.__s, M) || u.__v == t.__v) {
        for (u.__v != t.__v && (h.props = b, h.state = h.__s, h.__d = !1), u.__e = t.__e, u.__k = t.__k, u.__k.some(function (n) {
          n && (n.__ = u);
        }), $ = 0; $ < h._sb.length; $++) h.__h.push(h._sb[$]);
        h._sb = [], h.__h.length && e.push(h);
        break n;
      }
      null != h.componentWillUpdate && h.componentWillUpdate(b, h.__s, M), S && null != h.componentDidUpdate && h.__h.push(function () {
        h.componentDidUpdate(y, v, _);
      });
    }
    if (h.context = M, h.props = b, h.__P = n, h.__e = !1, P = l$1.__r, A = 0, S) {
      for (h.state = h.__s, h.__d = !1, P && P(u), a = h.render(h.props, h.state, h.context), H = 0; H < h._sb.length; H++) h.__h.push(h._sb[H]);
      h._sb = [];
    } else do {
      h.__d = !1, P && P(u), a = h.render(h.props, h.state, h.context), h.state = h.__s;
    } while (h.__d && ++A < 25);
    h.state = h.__s, null != h.getChildContext && (i = d$1(d$1({}, i), h.getChildContext())), S && !p && null != h.getSnapshotBeforeUpdate && (_ = h.getSnapshotBeforeUpdate(y, v)), L = a, null != a && a.type === k$1 && null == a.key && (L = N$1(a.props.children)), f = I(n, w$1(L) ? L : [L], u, t, i, r, o, e, f, c, s), h.base = u.__e, u.__u &= -161, h.__h.length && e.push(h), m && (h.__E = h.__ = null);
  } catch (n) {
    if (u.__v = null, c || null != o) {
      if (n.then) {
        for (u.__u |= c ? 160 : 128; f && 8 == f.nodeType && f.nextSibling;) f = f.nextSibling;
        o[o.indexOf(f)] = null, u.__e = f;
      } else for (T = o.length; T--;) g$1(o[T]);
    } else u.__e = t.__e, u.__k = t.__k;
    l$1.__e(n, u, t);
  } else null == o && u.__v == t.__v ? (u.__k = t.__k, u.__e = t.__e) : f = u.__e = V$1(t.__e, u, t, i, r, o, e, c, s);
  return (a = l$1.diffed) && a(u), 128 & u.__u ? void 0 : f;
}
function z$1(n, u, t) {
  for (var i = 0; i < t.length; i++) q$2(t[i], t[++i], t[++i]);
  l$1.__c && l$1.__c(u, n), n.some(function (u) {
    try {
      n = u.__h, u.__h = [], n.some(function (n) {
        n.call(u);
      });
    } catch (n) {
      l$1.__e(n, u.__v);
    }
  });
}
function N$1(n) {
  return "object" != typeof n || null == n || n.__b && n.__b > 0 ? n : w$1(n) ? n.map(N$1) : d$1({}, n);
}
function V$1(u, t, i, r, o, e, f, c, s) {
  var a,
    h,
    y,
    v,
    d,
    _,
    m,
    b = i.props,
    k = t.props,
    x = t.type;
  if ("svg" == x ? o = "http://www.w3.org/2000/svg" : "math" == x ? o = "http://www.w3.org/1998/Math/MathML" : o || (o = "http://www.w3.org/1999/xhtml"), null != e) for (a = 0; a < e.length; a++) if ((d = e[a]) && "setAttribute" in d == !!x && (x ? d.localName == x : 3 == d.nodeType)) {
    u = d, e[a] = null;
    break;
  }
  if (null == u) {
    if (null == x) return document.createTextNode(k);
    u = document.createElementNS(o, x, k.is && k), c && (l$1.__m && l$1.__m(t, e), c = !1), e = null;
  }
  if (null == x) b === k || c && u.data == k || (u.data = k);else {
    if (e = e && n.call(u.childNodes), b = i.props || p$1, !c && null != e) for (b = {}, a = 0; a < u.attributes.length; a++) b[(d = u.attributes[a]).name] = d.value;
    for (a in b) if (d = b[a], "children" == a) ;else if ("dangerouslySetInnerHTML" == a) y = d;else if (!(a in k)) {
      if ("value" == a && "defaultValue" in k || "checked" == a && "defaultChecked" in k) continue;
      j$2(u, a, null, d, o);
    }
    for (a in k) d = k[a], "children" == a ? v = d : "dangerouslySetInnerHTML" == a ? h = d : "value" == a ? _ = d : "checked" == a ? m = d : c && "function" != typeof d || b[a] === d || j$2(u, a, d, b[a], o);
    if (h) c || y && (h.__html == y.__html || h.__html == u.innerHTML) || (u.innerHTML = h.__html), t.__k = [];else if (y && (u.innerHTML = ""), I("template" == t.type ? u.content : u, w$1(v) ? v : [v], t, i, r, "foreignObject" == x ? "http://www.w3.org/1999/xhtml" : o, e, f, e ? e[0] : i.__k && S(i, 0), c, s), null != e) for (a = e.length; a--;) g$1(e[a]);
    c || (a = "value", "progress" == x && null == _ ? u.removeAttribute("value") : null != _ && (_ !== u[a] || "progress" == x && !_ || "option" == x && _ != b[a]) && j$2(u, a, _, b[a], o), a = "checked", null != m && m != u[a] && j$2(u, a, m, b[a], o));
  }
  return u;
}
function q$2(n, u, t) {
  try {
    if ("function" == typeof n) {
      var i = "function" == typeof n.__u;
      i && n.__u(), i && null == u || (n.__u = n(u));
    } else n.current = u;
  } catch (n) {
    l$1.__e(n, t);
  }
}
function B$2(n, u, t) {
  var i, r;
  if (l$1.unmount && l$1.unmount(n), (i = n.ref) && (i.current && i.current != n.__e || q$2(i, null, u)), null != (i = n.__c)) {
    if (i.componentWillUnmount) try {
      i.componentWillUnmount();
    } catch (n) {
      l$1.__e(n, u);
    }
    i.base = i.__P = null;
  }
  if (i = n.__k) for (r = 0; r < i.length; r++) i[r] && B$2(i[r], u, t || "function" != typeof n.type);
  t || g$1(n.__e), n.__c = n.__ = n.__e = void 0;
}
function D$2(n, l, u) {
  return this.constructor(n, u);
}
function E$1(u, t, i) {
  var r, o, e, f;
  t == document && (t = document.documentElement), l$1.__ && l$1.__(u, t), o = (r = "function" == typeof i) ? null : t.__k, e = [], f = [], O(t, u = (!r && i || t).__k = _$1(k$1, null, [u]), o || p$1, p$1, t.namespaceURI, !r && i ? [i] : o ? null : t.firstChild ? n.call(t.childNodes) : null, e, !r && i ? i : o ? o.__e : t.firstChild, r, f), z$1(e, u, f);
}
function K$1(n) {
  function l(n) {
    var u, t;
    return this.getChildContext || (u = new Set(), (t = {})[l.__c] = this, this.getChildContext = function () {
      return t;
    }, this.componentWillUnmount = function () {
      u = null;
    }, this.shouldComponentUpdate = function (n) {
      this.props.value != n.value && u.forEach(function (n) {
        n.__e = !0, M$1(n);
      });
    }, this.sub = function (n) {
      u.add(n);
      var l = n.componentWillUnmount;
      n.componentWillUnmount = function () {
        u && u.delete(n), l && l.call(n);
      };
    }), n.children;
  }
  return l.__c = "__cC" + h$1++, l.__ = n, l.Provider = l.__l = (l.Consumer = function (n, l) {
    return n.children(l);
  }).contextType = l, l;
}
n = y$1.slice, l$1 = {
  __e: function (n, l, u, t) {
    for (var i, r, o; l = l.__;) if ((i = l.__c) && !i.__) try {
      if ((r = i.constructor) && null != r.getDerivedStateFromError && (i.setState(r.getDerivedStateFromError(n)), o = i.__d), null != i.componentDidCatch && (i.componentDidCatch(n, t || {}), o = i.__d), o) return i.__E = i;
    } catch (l) {
      n = l;
    }
    throw n;
  }
}, u$2 = 0, x$1.prototype.setState = function (n, l) {
  var u;
  u = null != this.__s && this.__s != this.state ? this.__s : this.__s = d$1({}, this.state), "function" == typeof n && (n = n(d$1({}, u), this.props)), n && d$1(u, n), null != n && this.__v && (l && this._sb.push(l), M$1(this));
}, x$1.prototype.forceUpdate = function (n) {
  this.__v && (this.__e = !0, n && this.__h.push(n), M$1(this));
}, x$1.prototype.render = k$1, i$1 = [], o$1 = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, e$1 = function (n, l) {
  return n.__v.__b - l.__v.__b;
}, $.__r = 0, f$2 = /(PointerCapture)$|Capture$/i, c$1 = 0, s$1 = F$2(!1), a$1 = F$2(!0), h$1 = 0;
var f$1 = 0;
function u$1(e, t, n, o, i, u) {
  t || (t = {});
  var a,
    c,
    p = t;
  if ("ref" in p) for (c in p = {}, t) "ref" == c ? a = t[c] : p[c] = t[c];
  var l = {
    type: e,
    props: p,
    key: n,
    ref: a,
    __k: null,
    __: null,
    __b: 0,
    __e: null,
    __c: null,
    constructor: void 0,
    __v: --f$1,
    __i: -1,
    __u: 0,
    __source: i,
    __self: u
  };
  if ("function" == typeof e && (a = e.defaultProps)) for (c in a) void 0 === p[c] && (p[c] = a[c]);
  return l$1.vnode && l$1.vnode(l), l;
}
var t,
  r,
  u,
  i,
  o = 0,
  f = [],
  c = l$1,
  e = c.__b,
  a = c.__r,
  v = c.diffed,
  l = c.__c,
  m = c.unmount,
  s = c.__;
function p(n, t) {
  c.__h && c.__h(r, n, o || t), o = 0;
  var u = r.__H || (r.__H = {
    __: [],
    __h: []
  });
  return n >= u.__.length && u.__.push({}), u.__[n];
}
function d(n) {
  return o = 1, h(D$1, n);
}
function h(n, u, i) {
  var o = p(t++, 2);
  if (o.t = n, !o.__c && (o.__ = [i ? i(u) : D$1(void 0, u), function (n) {
    var t = o.__N ? o.__N[0] : o.__[0],
      r = o.t(t, n);
    t !== r && (o.__N = [r, o.__[1]], o.__c.setState({}));
  }], o.__c = r, !r.__f)) {
    var f = function (n, t, r) {
      if (!o.__c.__H) return !0;
      var u = o.__c.__H.__.filter(function (n) {
        return !!n.__c;
      });
      if (u.every(function (n) {
        return !n.__N;
      })) return !c || c.call(this, n, t, r);
      var i = o.__c.props !== n;
      return u.forEach(function (n) {
        if (n.__N) {
          var t = n.__[0];
          n.__ = n.__N, n.__N = void 0, t !== n.__[0] && (i = !0);
        }
      }), c && c.call(this, n, t, r) || i;
    };
    r.__f = !0;
    var c = r.shouldComponentUpdate,
      e = r.componentWillUpdate;
    r.componentWillUpdate = function (n, t, r) {
      if (this.__e) {
        var u = c;
        c = void 0, f(n, t, r), c = u;
      }
      e && e.call(this, n, t, r);
    }, r.shouldComponentUpdate = f;
  }
  return o.__N || o.__;
}
function y(n, u) {
  var i = p(t++, 3);
  !c.__s && C(i.__H, u) && (i.__ = n, i.u = u, r.__H.__h.push(i));
}
function _(n, u) {
  var i = p(t++, 4);
  !c.__s && C(i.__H, u) && (i.__ = n, i.u = u, r.__h.push(i));
}
function A$1(n) {
  return o = 5, T$1(function () {
    return {
      current: n
    };
  }, []);
}
function F$1(n, t, r) {
  o = 6, _(function () {
    if ("function" == typeof n) {
      var r = n(t());
      return function () {
        n(null), r && "function" == typeof r && r();
      };
    }
    if (n) return n.current = t(), function () {
      return n.current = null;
    };
  }, null == r ? r : r.concat(n));
}
function T$1(n, r) {
  var u = p(t++, 7);
  return C(u.__H, r) && (u.__ = n(), u.__H = r, u.__h = n), u.__;
}
function q$1(n, t) {
  return o = 8, T$1(function () {
    return n;
  }, t);
}
function x(n) {
  var u = r.context[n.__c],
    i = p(t++, 9);
  return i.c = n, u ? (null == i.__ && (i.__ = !0, u.sub(r)), u.props.value) : n.__;
}
function j$1() {
  for (var n; n = f.shift();) if (n.__P && n.__H) try {
    n.__H.__h.forEach(z), n.__H.__h.forEach(B$1), n.__H.__h = [];
  } catch (t) {
    n.__H.__h = [], c.__e(t, n.__v);
  }
}
c.__b = function (n) {
  r = null, e && e(n);
}, c.__ = function (n, t) {
  n && t.__k && t.__k.__m && (n.__m = t.__k.__m), s && s(n, t);
}, c.__r = function (n) {
  a && a(n), t = 0;
  var i = (r = n.__c).__H;
  i && (u === r ? (i.__h = [], r.__h = [], i.__.forEach(function (n) {
    n.__N && (n.__ = n.__N), n.u = n.__N = void 0;
  })) : (i.__h.forEach(z), i.__h.forEach(B$1), i.__h = [], t = 0)), u = r;
}, c.diffed = function (n) {
  v && v(n);
  var t = n.__c;
  t && t.__H && (t.__H.__h.length && (1 !== f.push(t) && i === c.requestAnimationFrame || ((i = c.requestAnimationFrame) || w)(j$1)), t.__H.__.forEach(function (n) {
    n.u && (n.__H = n.u), n.u = void 0;
  })), u = r = null;
}, c.__c = function (n, t) {
  t.some(function (n) {
    try {
      n.__h.forEach(z), n.__h = n.__h.filter(function (n) {
        return !n.__ || B$1(n);
      });
    } catch (r) {
      t.some(function (n) {
        n.__h && (n.__h = []);
      }), t = [], c.__e(r, n.__v);
    }
  }), l && l(n, t);
}, c.unmount = function (n) {
  m && m(n);
  var t,
    r = n.__c;
  r && r.__H && (r.__H.__.forEach(function (n) {
    try {
      z(n);
    } catch (n) {
      t = n;
    }
  }), r.__H = void 0, t && c.__e(t, r.__v));
};
var k = "function" == typeof requestAnimationFrame;
function w(n) {
  var t,
    r = function () {
      clearTimeout(u), k && cancelAnimationFrame(t), setTimeout(n);
    },
    u = setTimeout(r, 100);
  k && (t = requestAnimationFrame(r));
}
function z(n) {
  var t = r,
    u = n.__c;
  "function" == typeof u && (n.__c = void 0, u()), r = t;
}
function B$1(n) {
  var t = r;
  n.__c = n.__(), r = t;
}
function C(n, t) {
  return !n || n.length !== t.length || t.some(function (t, r) {
    return t !== n[r];
  });
}
function D$1(n, t) {
  return "function" == typeof t ? t(n) : t;
}
function g(n, t) {
  for (var e in t) n[e] = t[e];
  return n;
}
function E(n, t) {
  for (var e in n) if ("__source" !== e && !(e in t)) return !0;
  for (var r in t) if ("__source" !== r && n[r] !== t[r]) return !0;
  return !1;
}
function N(n, t) {
  this.props = n, this.context = t;
}
function M(n, e) {
  function r(n) {
    var t = this.props.ref,
      r = t == n.ref;
    return !r && t && (t.call ? t(null) : t.current = null), e ? !e(this.props, n) || !r : E(this.props, n);
  }
  function u(e) {
    return this.shouldComponentUpdate = r, _$1(n, e);
  }
  return u.displayName = "Memo(" + (n.displayName || n.name) + ")", u.prototype.isReactComponent = !0, u.__f = !0, u;
}
(N.prototype = new x$1()).isPureReactComponent = !0, N.prototype.shouldComponentUpdate = function (n, t) {
  return E(this.props, n) || E(this.state, t);
};
var T = l$1.__b;
l$1.__b = function (n) {
  n.type && n.type.__f && n.ref && (n.props.ref = n.ref, n.ref = null), T && T(n);
};
var A = "undefined" != typeof Symbol && Symbol.for && Symbol.for("react.forward_ref") || 3911;
function D(n) {
  function t(t) {
    var e = g({}, t);
    return delete e.ref, n(e, t.ref || null);
  }
  return t.$$typeof = A, t.render = t, t.prototype.isReactComponent = t.__f = !0, t.displayName = "ForwardRef(" + (n.displayName || n.name) + ")", t;
}
var F = l$1.__e;
l$1.__e = function (n, t, e, r) {
  if (n.then) for (var u, o = t; o = o.__;) if ((u = o.__c) && u.__c) return null == t.__e && (t.__e = e.__e, t.__k = e.__k), u.__c(n, t);
  F(n, t, e, r);
};
var U = l$1.unmount;
function V(n, t, e) {
  return n && (n.__c && n.__c.__H && (n.__c.__H.__.forEach(function (n) {
    "function" == typeof n.__c && n.__c();
  }), n.__c.__H = null), null != (n = g({}, n)).__c && (n.__c.__P === e && (n.__c.__P = t), n.__c.__e = !0, n.__c = null), n.__k = n.__k && n.__k.map(function (n) {
    return V(n, t, e);
  })), n;
}
function W(n, t, e) {
  return n && e && (n.__v = null, n.__k = n.__k && n.__k.map(function (n) {
    return W(n, t, e);
  }), n.__c && n.__c.__P === t && (n.__e && e.appendChild(n.__e), n.__c.__e = !0, n.__c.__P = e)), n;
}
function P() {
  this.__u = 0, this.o = null, this.__b = null;
}
function j(n) {
  var t = n.__.__c;
  return t && t.__a && t.__a(n);
}
function B() {
  this.i = null, this.l = null;
}
l$1.unmount = function (n) {
  var t = n.__c;
  t && t.__R && t.__R(), t && 32 & n.__u && (n.type = null), U && U(n);
}, (P.prototype = new x$1()).__c = function (n, t) {
  var e = t.__c,
    r = this;
  null == r.o && (r.o = []), r.o.push(e);
  var u = j(r.__v),
    o = !1,
    i = function () {
      o || (o = !0, e.__R = null, u ? u(l) : l());
    };
  e.__R = i;
  var l = function () {
    if (! --r.__u) {
      if (r.state.__a) {
        var n = r.state.__a;
        r.__v.__k[0] = W(n, n.__c.__P, n.__c.__O);
      }
      var t;
      for (r.setState({
        __a: r.__b = null
      }); t = r.o.pop();) t.forceUpdate();
    }
  };
  r.__u++ || 32 & t.__u || r.setState({
    __a: r.__b = r.__v.__k[0]
  }), n.then(i, i);
}, P.prototype.componentWillUnmount = function () {
  this.o = [];
}, P.prototype.render = function (n, e) {
  if (this.__b) {
    if (this.__v.__k) {
      var r = document.createElement("div"),
        o = this.__v.__k[0].__c;
      this.__v.__k[0] = V(this.__b, r, o.__O = o.__P);
    }
    this.__b = null;
  }
  var i = e.__a && _$1(k$1, null, n.fallback);
  return i && (i.__u &= -33), [_$1(k$1, null, e.__a ? null : n.children), i];
};
var H = function (n, t, e) {
  if (++e[1] === e[0] && n.l.delete(t), n.props.revealOrder && ("t" !== n.props.revealOrder[0] || !n.l.size)) for (e = n.i; e;) {
    for (; e.length > 3;) e.pop()();
    if (e[1] < e[0]) break;
    n.i = e = e[2];
  }
};
(B.prototype = new x$1()).__a = function (n) {
  var t = this,
    e = j(t.__v),
    r = t.l.get(n);
  return r[0]++, function (u) {
    var o = function () {
      t.props.revealOrder ? (r.push(u), H(t, n, r)) : u();
    };
    e ? e(o) : o();
  };
}, B.prototype.render = function (n) {
  this.i = null, this.l = new Map();
  var t = H$1(n.children);
  n.revealOrder && "b" === n.revealOrder[0] && t.reverse();
  for (var e = t.length; e--;) this.l.set(t[e], this.i = [1, 0, this.i]);
  return n.children;
}, B.prototype.componentDidUpdate = B.prototype.componentDidMount = function () {
  var n = this;
  this.l.forEach(function (t, e) {
    H(n, e, t);
  });
};
var q = "undefined" != typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103,
  G = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,
  J = /^on(Ani|Tra|Tou|BeforeInp|Compo)/,
  K = /[A-Z0-9]/g,
  Q = "undefined" != typeof document,
  X = function (n) {
    return ("undefined" != typeof Symbol && "symbol" == typeof Symbol() ? /fil|che|rad/ : /fil|che|ra/).test(n);
  };
x$1.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function (t) {
  Object.defineProperty(x$1.prototype, t, {
    configurable: !0,
    get: function () {
      return this["UNSAFE_" + t];
    },
    set: function (n) {
      Object.defineProperty(this, t, {
        configurable: !0,
        writable: !0,
        value: n
      });
    }
  });
});
var en = l$1.event;
function rn() {}
function un() {
  return this.cancelBubble;
}
function on() {
  return this.defaultPrevented;
}
l$1.event = function (n) {
  return en && (n = en(n)), n.persist = rn, n.isPropagationStopped = un, n.isDefaultPrevented = on, n.nativeEvent = n;
};
var cn = {
    enumerable: !1,
    configurable: !0,
    get: function () {
      return this.class;
    }
  },
  fn = l$1.vnode;
l$1.vnode = function (n) {
  "string" == typeof n.type && function (n) {
    var t = n.props,
      e = n.type,
      u = {},
      o = -1 === e.indexOf("-");
    for (var i in t) {
      var l = t[i];
      if (!("value" === i && "defaultValue" in t && null == l || Q && "children" === i && "noscript" === e || "class" === i || "className" === i)) {
        var c = i.toLowerCase();
        "defaultValue" === i && "value" in t && null == t.value ? i = "value" : "download" === i && !0 === l ? l = "" : "translate" === c && "no" === l ? l = !1 : "o" === c[0] && "n" === c[1] ? "ondoubleclick" === c ? i = "ondblclick" : "onchange" !== c || "input" !== e && "textarea" !== e || X(t.type) ? "onfocus" === c ? i = "onfocusin" : "onblur" === c ? i = "onfocusout" : J.test(i) && (i = c) : c = i = "oninput" : o && G.test(i) ? i = i.replace(K, "-$&").toLowerCase() : null === l && (l = void 0), "oninput" === c && u[i = c] && (i = "oninputCapture"), u[i] = l;
      }
    }
    "select" == e && u.multiple && Array.isArray(u.value) && (u.value = H$1(t.children).forEach(function (n) {
      n.props.selected = -1 != u.value.indexOf(n.props.value);
    })), "select" == e && null != u.defaultValue && (u.value = H$1(t.children).forEach(function (n) {
      n.props.selected = u.multiple ? -1 != u.defaultValue.indexOf(n.props.value) : u.defaultValue == n.props.value;
    })), t.class && !t.className ? (u.class = t.class, Object.defineProperty(u, "className", cn)) : (t.className && !t.class || t.class && t.className) && (u.class = u.className = t.className), n.props = u;
  }(n), n.$$typeof = q, fn && fn(n);
};
var an = l$1.__r;
l$1.__r = function (n) {
  an && an(n), n.__c;
};
var sn = l$1.diffed;
l$1.diffed = function (n) {
  sn && sn(n);
  var t = n.props,
    e = n.__e;
  null != e && "textarea" === n.type && "value" in t && t.value !== e.value && (e.value = null == t.value ? "" : t.value);
};

/** These are all the event mappings that are shared between Preact/React */
const EventMapping$1 = {
  abort: "onAbort",
  animationend: "onAnimationEnd",
  animationstart: "onAnimationStart",
  animationiteration: "onAnimationIteration",
  beforeinput: "onBeforeInput",
  blur: "onBlur",
  canplay: "onCanPlay",
  canplaythrough: "onCanPlayThrough",
  change: "onChange",
  click: "onClick",
  compositionend: "onCompositionEnd",
  compositionstart: "onCompositionStart",
  compositionupdate: "onCompositionUpdate",
  contextmenu: "onContextMenu",
  cut: "onCut",
  drag: "onDrag",
  dragend: "onDragEnd",
  dragenter: "onDragEnter",
  dragleave: "onDragLeave",
  dragover: "onDragOver",
  dragstart: "onDragStart",
  drop: "onDrop",
  durationchange: "onDurationChange",
  emptied: "onEmptied",
  ended: "onEnded",
  error: "onError",
  focus: "onFocus",
  gotpointercapture: "onGotPointerCapture",
  input: "onInput",
  invalid: "onInvalid",
  keydown: "onKeyDown",
  keypress: "onKeyPress",
  keyup: "onKeyUp",
  load: "onLoad",
  loadeddata: "onLoadedData",
  loadedmetadata: "onLoadedMetadata",
  loadstart: "onLoadStart",
  lostpointercapture: "onLostPointerCapture",
  mousedown: "onMouseDown",
  mouseenter: "onMouseEnter",
  mouseleave: "onMouseLeave",
  mousemove: "onMouseMove",
  mouseout: "onMouseOut",
  mouseover: "onMouseOver",
  mouseup: "onMouseUp",
  paste: "onPaste",
  pause: "onPause",
  play: "onPlay",
  playing: "onPlaying",
  pointercancel: "onPointerCancel",
  pointerdown: "onPointerDown",
  pointerenter: "onPointerEnter",
  pointerleave: "onPointerLeave",
  pointermove: "onPointerMove",
  pointerout: "onPointerOut",
  pointerover: "onPointerOver",
  pointerup: "onPointerUp",
  progress: "onProgress",
  reset: "onReset",
  scroll: "onScroll",
  seeked: "onSeeked",
  seeking: "onSeeking",
  select: "onSelect",
  stalled: "onStalled",
  submit: "onSubmit",
  suspend: "onSuspend",
  timeupdate: "onTimeUpdate",
  touchcancel: "onTouchCancel",
  touchend: "onTouchEnd",
  touchmove: "onTouchMove",
  touchstart: "onTouchStart",
  transitionend: "onTransitionEnd",
  volumechange: "onVolumeChange",
  waiting: "onWaiting",
  wheel: "onWheel",
  fullscreenchange: null,
  animationcancel: null,
  auxclick: null,
  cancel: null,
  close: null,
  copy: null,
  cuechange: null,
  fullscreenerror: null,
  ratechange: null,
  resize: null,
  scrollend: null,
  securitypolicyviolation: null,
  selectionchange: null,
  selectstart: null,
  slotchange: null,
  transitioncancel: null,
  transitionrun: null,
  transitionstart: null,
  webkitanimationend: null,
  webkitanimationiteration: null,
  webkitanimationstart: null,
  webkittransitionend: null
};
const toRun = new Map();
// TODO: Whether this goes in options.diffed or options._commit
// is a post-suspense question.
// Right now, using options._commit has the problem of running
// *after* refs are applied, but we need to come before even that
// so `ref={someStableFunction}` works.
// 
// Also it's private.
//
// ...
// Well, useEvent or whatever is finally, finally 4 years later finally here
// which is cool and means we won't need this at all soon.
// So for now we'll stick with diff to prevent any weirdness with
// commit being private and all.
//
// Also, in theory this could be replaced with `useInsertionEffect`,
// but that probably won't be available in Preact for awhile.
const commitName = "diffed";
const newCommit = (vnode, ...args) => {
  for (const [_id, effectInfo] of toRun) {
    const oldInputs = effectInfo.prevInputs;
    if (argsChanged(oldInputs, effectInfo.inputs)) {
      effectInfo.cleanup?.();
      effectInfo.cleanup = effectInfo.effect();
      effectInfo.prevInputs = effectInfo.inputs;
    }
  }
  toRun.clear();
  originalCommit?.(vnode, ...args);
};
const originalCommit = l$1[commitName];
l$1[commitName] = newCommit;
let incrementingId = 0;
function nextId() {
  let next = ++incrementingId;
  // TODO: This seems reasonable, but is is necessary or are we orders of magnitude from having to worry about overflow?
  if (incrementingId >= Number.MAX_SAFE_INTEGER) incrementingId = -Number.MAX_SAFE_INTEGER;
  return next;
}
/**
 * Semi-private function to allow stable callbacks even within `useLayoutEffect` and ref assignment.
 *
 * @remarks Every render, we send the arguments to be evaluated after diffing has completed,
 * which happens before.
 *
 * @param effect
 * @param inputs
 */
const useBeforeLayoutEffect = function useBeforeLayoutEffect(effect, inputs) {
  // Note to self: This is by far the most called hook by sheer volume of dependencies.
  // So it should ideally be as quick as possible.
  const ref = A$1(null);
  ref.current ??= nextId();
  const id = ref.current;
  if (effect) toRun.set(id, {
    effect,
    inputs,
    cleanup: null
  });else toRun.delete(id);
  // Not needed, because the insertion cleanup would run before useEffect anyway, I think?
  /*useEffect(() => {
      return () => {
          toRun.delete(id);
      }
  }, [id])*/
};
function argsChanged(oldArgs, newArgs) {
  return !!(!oldArgs || oldArgs.length !== newArgs?.length || newArgs?.some((arg, index) => arg !== oldArgs[index]));
}

// Patch the type (only the type) of useCallback to allow for nullable functions
const useCallback = q$1;
function debounceRendering(f) {
  (l$1.debounceRendering ?? queueMicrotask)(f);
}
// @ts-expect-error (These are correct, I don't know why the types are wrong all of a sudden...?)
const onfocusin = "onfocusin";
// @ts-expect-error (Capitalizing these results in errors with at least grid navigation)
const onfocusout = "onfocusout";
const EventMapping = {
  beforetoggle: null,
  dblclick: "onDblClick",
  focusin: "onFocusIn",
  focusout: "onFocusOut",
  formdata: "onFormData",
  toggle: "onToggle",
  contextlost: null,
  contextrestored: null,
  ...EventMapping$1
};

/**
 * Debug hook. Given a value or set of values, emits a console error if any of them change from one render to the next.
 *
 * @remarks Eventually, when useEvent lands, we hopefully won't need this.
 */
function useEnsureStability(parentHookName, ...values) {
  return;
}
/**
 * Similar to `useState`, but for values that aren't "render-important" &ndash; updates don't cause a re-render and so the value shouldn't be used during render (though it certainly can, at least by re-rendering again).
 *
 * @remarks To compensate for this, you should pass a `useEffect`-esque callback that is run whenever the value changes.  Just like `useEffect`, this callback can return a cleanup function that's run before the value changes.  If you would like to re-render when the value changes (or, say, when the value meets some criteria), this is where you'll want to put in a call to a `setState` function.
 *
 * To summarize, it's like a `useState`-`useEffect` mashup:
 *
 * 1. It's like `useState`, except this version of `setState` doesn't re-render the whole component
 * 2. It's like `useState`, except you can run a function when the value changes that optionally returns a cleanup function
 * 3. It's like `useEffect`, except you trigger the effect function "remotely" instead of it running after rendering
 * 4. It's like `useEffect`, except the single "dependency" is based on your calls to `setState`
 *
 * Note that while calling `setState` doesn't cause any re-renders, you can do that within your `onChange` function, called whenever the value changes via that `setState`.
 *
 * {@include } {@link OnPassiveStateChange}
 *
 * @param onChange - The "effect" function to run when the value changes. Effectively the same as `useEffect`'s "effect" function.  MUST BE STABLE, either because it has no dependencies, or because it's from useStableCallback, but this will mean you cannot use getState or setState during render.
 * @param getInitialValue - If provided, the effect will be invoked once with this value on mount. MUST BE STABLE, either because it has no dependencies, or because it's from useStableCallback, but this will mean you cannot use getState or setState during render.
 * @param customDebounceRendering - By default, changes to passive state are delayed by one tick so that we only check for changes in a similar way to Preact. You can override this to, for example, always run immediately instead.
 * @returns
 */
function usePassiveState(onChange, getInitialValue, {
  debounceRendering: customDebounceRendering,
  skipMountInitialization
} = {
  debounceRendering,
  skipMountInitialization: false
}) {
  skipMountInitialization ??= false;
  //let [id, ,getId] = useState(() => generateRandomId());
  const valueRef = A$1(Unset$2);
  const reasonRef = A$1(Unset$2);
  const warningRef = A$1(false);
  const dependencyToCompareAgainst = A$1(Unset$2);
  const cleanupCallbackRef = A$1(undefined);
  // Shared between "dependency changed" and "component unmounted".
  const onShouldCleanUp = useCallback(() => {
    const cleanupCallback = cleanupCallbackRef.current;
    if (cleanupCallback) cleanupCallback();
  }, []);
  // There are a couple places where we'd like to use our initial
  // value in place of having no value at all yet.
  // This is the shared code for that, used on mount and whenever
  // getValue is called.
  const tryEnsureValue = useCallback(() => {
    if (valueRef.current === Unset$2 && getInitialValue != undefined) {
      try {
        const initialValue = getInitialValue();
        valueRef.current = initialValue;
        cleanupCallbackRef.current = onChange?.(initialValue, undefined, undefined) ?? undefined;
      } catch (ex) {
        // Exceptions are intentional to allow bailout (without exposing the Unset symbol)
      }
    }
  }, [/* getInitialValue and onChange intentionally omitted */]);
  const getValue = useCallback(() => {
    if (warningRef.current) console.warn("During onChange, prefer using the (value, prevValue) arguments instead of getValue -- it's ambiguous as to if you're asking for the old or new value at this point in time for this component.");
    // The first time we call getValue, if we haven't been given a value yet,
    // (and we were given an initial value to use)
    // return the initial value instead of nothing.
    if (valueRef.current === Unset$2) tryEnsureValue();
    return valueRef.current === Unset$2 ? undefined : valueRef.current;
  }, []);
  if (!skipMountInitialization) {
    // TODO: Very, very few instances require initializing on mount.
    // Grid navigation needs it (for reasons I haven't investigated and do not recall, but is related to a row's 0th cell sometimes erroneously entering the tab order)
    // so it's the default until all use cases are thoroughly exhausted.
    // But in general, we probably don't need so many invocations of `use(Layout!!)Effect`.
    // Also it is safe to wrap this hook in an `if` because 
    // `skipMountInitialization` can't change throughout the lifetime of the component, 
    // so the RoH aren't violated.
    _(() => {
      // Make sure we've run our effect at least once on mount.
      // (If we have an initial value, of course)
      tryEnsureValue();
    }, []);
  }
  // The actual code the user calls to (possibly) run a new effect.
  const setValue = useCallback((arg, reason) => {
    // Regardless of anything else, figure out what our next value is about to be.
    const nextValue = arg instanceof Function ? arg(valueRef.current === Unset$2 ? undefined : valueRef.current) : arg;
    //let id = getId();
    //console.log((nextValue !== valueRef.current? "" : "NOT ") + "Scheduling effect ", id, " with value ", nextValue);
    if ( /*dependencyToCompareAgainst.current === Unset &&*/nextValue !== valueRef.current) {
      // This is the first request to change this value.
      // Evaluate the request immediately, then queue up the onChange function
      // Save our current value so that we can compare against it later
      // (if we flip back to this state, then we won't send the onChange function)
      dependencyToCompareAgainst.current = valueRef.current;
      // It's important to update this here (as well as below) in case customDebounceRendering invokes this immediately
      valueRef.current = nextValue;
      reasonRef.current = reason;
      // Schedule the actual check and invocation of onChange later to let effects settle
      (customDebounceRendering ?? debounceRendering)(() => {
        const nextReason = reasonRef.current;
        const nextDep = valueRef.current;
        const prevDep = dependencyToCompareAgainst.current;
        //let id = getId();
        //console.log(((dependencyToCompareAgainst.current != valueRef.current)? "" : "NOT ") + "Running effect ", id, " with value ", nextDep);
        if (dependencyToCompareAgainst.current != valueRef.current) {
          // TODO: This needs to happen here in order to make recursive onChanges work
          // but it feels better to have it happen after onChange...
          valueRef.current = dependencyToCompareAgainst.current = Unset$2;
          warningRef.current = true;
          try {
            // Call any registered cleanup function
            onShouldCleanUp();
            valueRef.current = nextDep; // Needs to happen before onChange in case onChange is recursive (e.g. focusing causing a focus causing a focus)
            cleanupCallbackRef.current = onChange?.(nextDep, prevDep === Unset$2 ? undefined : prevDep, nextReason) ?? undefined;
          } finally {
            // Allow the user to normally call getValue again
            warningRef.current = false;
          }
        }
        // We've finished with everything, so mark us as being on a clean slate again.
        dependencyToCompareAgainst.current = Unset$2;
      });
    }
    // Update the value immediately.
    // This will be checked against prevDep to see if we should actually call onChange
    //valueRef.current = nextValue;
  }, []);
  return [getValue, setValue];
}
const Unset$2 = Symbol();
// Easy constants for getInitialValue
function returnTrue() {
  return true;
}
function returnFalse() {
  return false;
}
function returnNull() {
  return null;
}
function returnZero() {
  return 0;
}
/**
 * An alternative to use for `customDebounceRendering` that causes `usePassiveState` to run changes without waiting a tick.
 */
function runImmediately(f) {
  f();
}

// Get/set the value of process?.env?.NODE_ENV delicately (also fun fact @rollup/plugin-replace works in comments!)
// (i.e. in a way that doesn't throw an error)
globalThis["process"] ??= {};
globalThis["process"]["env"] ??= {};
globalThis["process"]["env"]["NODE_ENV"] = "production";
// The above statement looks redundant, but it ensures that manual
// reads to `"production"` work regardless of if the bundler 
// replaces `"production"` with the string `"development"` or not.

// TODO: This shouldn't be in every build, I don't think it's in core-js? I think?
// And it's extremely small anyway and basically does nothing.
globalThis.requestIdleCallback ??= callback => {
  return setTimeout(() => {
    callback({
      didTimeout: false,
      timeRemaining: () => {
        return 0;
      }
    });
  }, 5);
};
/**
 * Adds a function to your browser's Performance tab, under "markers", so you can watch the call stack more clearly than random interval sampling (only if "production" is "development").
 *
 * @remarks Some of the more basic hooks, like `setState`, do not call `useMonitoring` at all.
 * They are so small that their duration generally rounds down to 0 (or epsilon), so using
 * this function usually makes no sense on them. The performance monitoring takes more time
 * than the function itself.
 */
const useMonitoring = dontUseMonitoringImpl;
/**
 *
 */
function dontUseMonitoringImpl(t) {
  return t();
}
const Unset$1 = Symbol("unset");
/**
 * Given an input value, returns a constant getter function that can be used
 * inside of `useEffect` and friends without including it in the dependency array.
 *
 * @remarks This uses `options.diffed` in order to run before everything, even
 * ref assignment. This means this getter is safe to use anywhere ***except the render phase***.
 */
function useStableGetter(value) {
  return useMonitoring(function useStableGetter() {
    const ref = A$1(Unset$1);
    useBeforeLayoutEffect(() => {
      ref.current = value;
    }, [value]);
    return useCallback(() => {
      if (ref.current === Unset$1) {
        throw new Error('Value retrieved from useStableGetter() cannot be called during render.');
      }
      return ref.current;
    }, []);
  });
}
/**
 * Like useMemo, but checks objects (shallowly)
 *
 * @param t
 * @returns
 */
function useMemoObject(t) {
  return T$1(() => {
    return t;
  }, Object.values(t));
}
function isStableGetter(obj) {
  return false;
}
function setIsStableGetter(obj) {
  return obj;
}
/**
 * Alternate useCallback() which always returns the same (wrapped) function reference
 * so that it can be excluded from the dependency arrays of `useEffect` and friends.
 *
 * @remarks In general, just pass the function you want to be stable (but you can't use it during render,
 * so be careful!).  Alternatively, if you need a stable callback that **can** be used
 * during render, pass an empty dependency array and it'll act like `useCallback` with an
 * empty dependency array, but with the associated stable typing. In this case, you ***must*** ensure that it
 * truly has no dependencies/only stable dependencies!!
 */
function useStableCallback(fn, noDeps) {
  return useMonitoring(function useStableCallback() {
    useEnsureStability("useStableCallback", noDeps == null, noDeps?.length, isStableGetter());
    if (isStableGetter()) return fn;
    if (noDeps == null) {
      const currentCallbackGetter = useStableGetter(fn);
      return setIsStableGetter(useCallback((...args) => {
        return currentCallbackGetter()(...args);
      }, []));
    } else {
      console.assert(noDeps.length === 0);
      return setIsStableGetter(useCallback(fn, []));
    }
  });
}
/**
 * #__NO_SIDE_EFFECTS__
 */
function useStableMergedCallback(...fns) {
  return useMonitoring(function useStableMergedCallback() {
    return useStableCallback((...args) => {
      for (let i = 0; i < fns.length; ++i) {
        fns[i]?.(...args);
      }
    });
  });
}

/**
 * Allows attaching an event handler to any *non-Preact* element, and removing it when the component using the hook unmounts. The callback does not need to be stable across renders.
 *
 * @remarks `"mode"` controls if there's one handler that calls all your functions (default), or one handler added per function (`"single"`).
 *
 * The default, `"grouped"`, is faster when you have, say, a button component, used hundreds of times on a page, that each installs a global event handler.
 *
 * @param target - A *non-Preact* node to attach the event to.
 */
function useGlobalHandler(target, type, handler, options, mode) {
  return useMonitoring(function useGlobalHandler() {
    mode ||= "grouped";
    if (!target) return;
    if (mode === "grouped") {
      // Note to self: The typing doesn't improve even if this is split up into a sub-function.
      // No matter what, it seems impossible to get the handler's event object typed perfectly.
      // It seems like it's guaranteed to always be a union of all available types.
      // Again, no matter what combination of sub- or sub-sub-functions used.
      useGlobalHandlerGrouped(target, type, handler, options);
    } else {
      useGlobalHandlerSingle(target, type, handler, options);
    }
  });
}
let mapThing = new Map();
function doMapThing(op, target, type, handler, options) {
  if (handler) {
    const optionsKey = JSON.stringify(options);
    const byType = mapThing.get(target) || new Map();
    const byOptions = byType.get(type) || new Map();
    const info = byOptions.get(optionsKey) || {
      listener: null,
      listeners: new Set()
    };
    op(info, handler);
    byOptions.set(optionsKey, info);
    byType.set(type, byOptions);
    mapThing.set(target, byType);
  }
}
function addToMapThing(target, type, handler, options) {
  doMapThing((info, h) => {
    info.listeners.add(h);
    if (info.listener == null) target.addEventListener(type, info.listener = e => info.listeners.forEach(fn => fn(e)), options);
  }, target, type, handler, options);
}
function removeFromMapThing(target, type, handler, options) {
  doMapThing((info, h) => {
    info.listeners.delete(h);
    if (info.listener == null) target.removeEventListener(type, info.listener = e => info.listeners.forEach(fn => fn(e)), options);
  }, target, type, handler, options);
}
/**
 * This is way faster for large numbers of event handlers.
 *
 * For example, if every button listens for a global click, or something,
 * it would be nice if it was efficient at least.
 */
function useGlobalHandlerGrouped(target, type, handler, options) {
  let stableHandler = useStableCallback(handler ?? (() => {}));
  if (handler == null) stableHandler = null;
  y(() => {
    if (stableHandler) {
      addToMapThing(target, type, stableHandler, options);
      return () => removeFromMapThing(target, type, stableHandler, options);
    }
  }, [target, type, stableHandler]);
}
function useGlobalHandlerSingle(target, type, handler, options) {
  let stableHandler = useStableCallback(handler ?? (() => {}));
  if (handler == null) stableHandler = null;
  y(() => {
    if (stableHandler) {
      target.addEventListener(type, stableHandler, options);
      return () => target.removeEventListener(type, stableHandler, options);
    }
  }, [target, type, stableHandler]);
}

// eslint-disable-next-line no-restricted-globals
function getWindow(element) {
  return typeof window == "undefined" ? undefined : element?.ownerDocument?.defaultView ?? globalThis ?? {};
}
// eslint-disable-next-line no-restricted-globals
function getDocument$1(element) {
  return typeof window == "undefined" ? undefined : element?.ownerDocument ?? getWindow()?.document ?? undefined;
}

/**
 * Quick and easy way to add extra information to an event that was fired.
 *
 * For example, "this was a click event, but it has information about what list item was pressed too."
 *
 * Get that extra information from the [EventDetail] symbol.
 */
const EventDetail = Symbol("event-detail");
function enhanceEvent(e, detail) {
  const event = e ?? {};
  event[EventDetail] ??= {};
  Object.assign(event[EventDetail], detail);
  return event;
}

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/** Built-in value references. */
var Symbol$1 = root.Symbol;

/** Used for built-in method references. */
var objectProto$5 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$3 = objectProto$5.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString$1 = objectProto$5.toString;

/** Built-in value references. */
var symToStringTag$1 = Symbol$1 ? Symbol$1.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty$3.call(value, symToStringTag$1),
    tag = value[symToStringTag$1];
  try {
    value[symToStringTag$1] = undefined;
    var unmasked = true;
  } catch (e) {}
  var result = nativeObjectToString$1.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag$1] = tag;
    } else {
      delete value[symToStringTag$1];
    }
  }
  return result;
}

/** Used for built-in method references. */
var objectProto$4 = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto$4.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

/** `Object#toString` result references. */
var nullTag = '[object Null]',
  undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol$1 ? Symbol$1.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' || isObjectLike(value) && baseGetTag(value) == symbolTag;
}

/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
  var index = -1,
    length = array == null ? 0 : array.length,
    result = Array(length);
  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

/** Used to match a single whitespace character. */
var reWhitespace = /\s/;

/**
 * Used by `_.trim` and `_.trimEnd` to get the index of the last non-whitespace
 * character of `string`.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {number} Returns the index of the last non-whitespace character.
 */
function trimmedEndIndex(string) {
  var index = string.length;
  while (index-- && reWhitespace.test(string.charAt(index))) {}
  return index;
}

/** Used to match leading whitespace. */
var reTrimStart = /^\s+/;

/**
 * The base implementation of `_.trim`.
 *
 * @private
 * @param {string} string The string to trim.
 * @returns {string} Returns the trimmed string.
 */
function baseTrim(string) {
  return string ? string.slice(0, trimmedEndIndex(string) + 1).replace(reTrimStart, '') : string;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? other + '' : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = baseTrim(value);
  var isBinary = reIsBinary.test(value);
  return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
}

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]',
  funcTag$1 = '[object Function]',
  genTag = '[object GeneratorFunction]',
  proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!isObject(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = baseGetTag(value);
  return tag == funcTag$1 || tag == genTag || tag == asyncTag || tag == proxyTag;
}

/**
 * This method returns `undefined`.
 *
 * @static
 * @memberOf _
 * @since 2.3.0
 * @category Util
 * @example
 *
 * _.times(2, _.noop);
 * // => [undefined, undefined]
 */
function noop() {
  // No operation performed.
}

/**
 * Copies the values of `source` to `array`.
 *
 * @private
 * @param {Array} source The array to copy values from.
 * @param {Array} [array=[]] The array to copy values to.
 * @returns {Array} Returns `array`.
 */
function copyArray(source, array) {
  var index = -1,
    length = source.length;
  array || (array = Array(length));
  while (++index < length) {
    array[index] = source[index];
  }
  return array;
}

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER$1 = 9007199254740991;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  var type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER$1 : length;
  return !!length && (type == 'number' || type != 'symbol' && reIsUint.test(value)) && value > -1 && value % 1 == 0 && value < length;
}

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

/** Used for built-in method references. */
var objectProto$3 = Object.prototype;

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
    proto = typeof Ctor == 'function' && Ctor.prototype || objectProto$3;
  return value === proto;
}

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
    result = Array(n);
  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

/** `Object#toString` result references. */
var argsTag$1 = '[object Arguments]';

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments(value) {
  return isObjectLike(value) && baseGetTag(value) == argsTag$1;
}

/** Used for built-in method references. */
var objectProto$2 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$2 = objectProto$2.hasOwnProperty;

/** Built-in value references. */
var propertyIsEnumerable = objectProto$2.propertyIsEnumerable;

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments = baseIsArguments(function () {
  return arguments;
}()) ? baseIsArguments : function (value) {
  return isObjectLike(value) && hasOwnProperty$2.call(value, 'callee') && !propertyIsEnumerable.call(value, 'callee');
};

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

/** Detect free variable `exports`. */
var freeExports$1 = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule$1 = freeExports$1 && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports$1 = freeModule$1 && freeModule$1.exports === freeExports$1;

/** Built-in value references. */
var Buffer = moduleExports$1 ? root.Buffer : undefined;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
  arrayTag = '[object Array]',
  boolTag = '[object Boolean]',
  dateTag = '[object Date]',
  errorTag = '[object Error]',
  funcTag = '[object Function]',
  mapTag = '[object Map]',
  numberTag = '[object Number]',
  objectTag = '[object Object]',
  regexpTag = '[object RegExp]',
  setTag = '[object Set]',
  stringTag = '[object String]',
  weakMapTag = '[object WeakMap]';
var arrayBufferTag = '[object ArrayBuffer]',
  dataViewTag = '[object DataView]',
  float32Tag = '[object Float32Array]',
  float64Tag = '[object Float64Array]',
  int8Tag = '[object Int8Array]',
  int16Tag = '[object Int16Array]',
  int32Tag = '[object Int32Array]',
  uint8Tag = '[object Uint8Array]',
  uint8ClampedTag = '[object Uint8ClampedArray]',
  uint16Tag = '[object Uint16Array]',
  uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
  return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
}

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function (value) {
    return func(value);
  };
}

/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && freeGlobal.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = function () {
  try {
    // Use `util.types` for Node.js 10+.
    var types = freeModule && freeModule.require && freeModule.require('util').types;
    if (types) {
      return types;
    }

    // Legacy `process.binding('util')` for Node.js < 10.
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}();

/* Node.js helper references. */
var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

/** Used for built-in method references. */
var objectProto$1 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$1 = objectProto$1.hasOwnProperty;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  var isArr = isArray(value),
    isArg = !isArr && isArguments(value),
    isBuff = !isArr && !isArg && isBuffer(value),
    isType = !isArr && !isArg && !isBuff && isTypedArray(value),
    skipIndexes = isArr || isArg || isBuff || isType,
    result = skipIndexes ? baseTimes(value.length, String) : [],
    length = result.length;
  for (var key in value) {
    if (hasOwnProperty$1.call(value, key) && !(skipIndexes && (
    // Safari 9 has enumerable `arguments.length` in strict mode.
    key == 'length' ||
    // Node.js 0.10 has enumerable non-index properties on buffers.
    isBuff && (key == 'offset' || key == 'parent') ||
    // PhantomJS 2 has enumerable non-index properties on typed arrays.
    isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset') ||
    // Skip index properties.
    isIndex(key, length)))) {
      result.push(key);
    }
  }
  return result;
}

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function (arg) {
    return func(transform(arg));
  };
}

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys = overArg(Object.keys, Object);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}

/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */
var now = function () {
  return root.Date.now();
};

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
  nativeMin = Math.min;

/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */
function debounce(func, wait, options) {
  var lastArgs,
    lastThis,
    maxWait,
    result,
    timerId,
    lastCallTime,
    lastInvokeTime = 0,
    leading = false,
    maxing = false,
    trailing = true;
  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  wait = toNumber(wait) || 0;
  if (isObject(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }
  function invokeFunc(time) {
    var args = lastArgs,
      thisArg = lastThis;
    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }
  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time;
    // Start the timer for the trailing edge.
    timerId = setTimeout(timerExpired, wait);
    // Invoke the leading edge.
    return leading ? invokeFunc(time) : result;
  }
  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
      timeSinceLastInvoke = time - lastInvokeTime,
      timeWaiting = wait - timeSinceLastCall;
    return maxing ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke) : timeWaiting;
  }
  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
      timeSinceLastInvoke = time - lastInvokeTime;

    // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.
    return lastCallTime === undefined || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
  }
  function timerExpired() {
    var time = now();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    // Restart the timer.
    timerId = setTimeout(timerExpired, remainingWait(time));
  }
  function trailingEdge(time) {
    timerId = undefined;

    // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = undefined;
    return result;
  }
  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }
  function flush() {
    return timerId === undefined ? result : trailingEdge(now());
  }
  function debounced() {
    var time = now(),
      isInvoking = shouldInvoke(time);
    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;
    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        // Handle invocations in a tight loop.
        clearTimeout(timerId);
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}

/**
 * The base implementation of `_.values` and `_.valuesIn` which creates an
 * array of `object` property values corresponding to the property names
 * of `props`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array} props The property names to get values for.
 * @returns {Object} Returns the array of property values.
 */
function baseValues(object, props) {
  return arrayMap(props, function (key) {
    return object[key];
  });
}

/**
 * Creates an array of the own enumerable string keyed property values of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property values.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.values(new Foo);
 * // => [1, 2] (iteration order is not guaranteed)
 *
 * _.values('hi');
 * // => ['h', 'i']
 */
function values(object) {
  return object == null ? [] : baseValues(object, keys(object));
}

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeFloor = Math.floor,
  nativeRandom = Math.random;

/**
 * The base implementation of `_.random` without support for returning
 * floating-point numbers.
 *
 * @private
 * @param {number} lower The lower bound.
 * @param {number} upper The upper bound.
 * @returns {number} Returns the random number.
 */
function baseRandom(lower, upper) {
  return lower + nativeFloor(nativeRandom() * (upper - lower + 1));
}

/** Used for built-in method references. */
var arrayProto = Array.prototype;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeReverse = arrayProto.reverse;

/**
 * Reverses `array` so that the first element becomes the last, the second
 * element becomes the second to last, and so on.
 *
 * **Note:** This method mutates `array` and is based on
 * [`Array#reverse`](https://mdn.io/Array/reverse).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Array
 * @param {Array} array The array to modify.
 * @returns {Array} Returns `array`.
 * @example
 *
 * var array = [1, 2, 3];
 *
 * _.reverse(array);
 * // => [3, 2, 1]
 *
 * console.log(array);
 * // => [3, 2, 1]
 */
function reverse(array) {
  return array == null ? array : nativeReverse.call(array);
}

/**
 * A specialized version of `_.shuffle` which mutates and sets the size of `array`.
 *
 * @private
 * @param {Array} array The array to shuffle.
 * @param {number} [size=array.length] The size of `array`.
 * @returns {Array} Returns `array`.
 */
function shuffleSelf(array, size) {
  var index = -1,
    length = array.length,
    lastIndex = length - 1;
  size = size === undefined ? length : size;
  while (++index < size) {
    var rand = baseRandom(index, lastIndex),
      value = array[rand];
    array[rand] = array[index];
    array[index] = value;
  }
  array.length = size;
  return array;
}

/**
 * A specialized version of `_.shuffle` for arrays.
 *
 * @private
 * @param {Array} array The array to shuffle.
 * @returns {Array} Returns the new shuffled array.
 */
function arrayShuffle(array) {
  return shuffleSelf(copyArray(array));
}

/**
 * The base implementation of `_.shuffle`.
 *
 * @private
 * @param {Array|Object} collection The collection to shuffle.
 * @returns {Array} Returns the new shuffled array.
 */
function baseShuffle(collection) {
  return shuffleSelf(values(collection));
}

/**
 * Creates an array of shuffled values, using a version of the
 * [Fisher-Yates shuffle](https://en.wikipedia.org/wiki/Fisher-Yates_shuffle).
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to shuffle.
 * @returns {Array} Returns the new shuffled array.
 * @example
 *
 * _.shuffle([1, 2, 3, 4]);
 * // => [4, 1, 3, 2]
 */
function shuffle(collection) {
  var func = isArray(collection) ? arrayShuffle : baseShuffle;
  return func(collection);
}

/**
 * Combines two `children`.
 *
 * @remarks This is fairly trivial and not even technically a hook, as it doesn't use any other hooks, but is this way for consistency.
 *
 * TODO: This could accept a variable number of arguments to be consistent with useMergedProps, but I feel like it might be a performance hit.
 */
function useMergedChildren(lhs, rhs) {
  if (lhs == null && rhs == null) {
    return undefined;
  } else if (lhs == null) {
    return rhs;
  } else if (rhs == null) {
    return lhs;
  } else {
    return _$1(k$1, {}, lhs, rhs);
  }
}

/**
 * Merged the `class` and `className` properties of two sets of props into a single string.
 *
 * @remarks Duplicate classes are removed (order doesn't matter anyway).
 */
function useMergedClasses(...classes) {
  // Note: For the sake of forward compatibility, this function is labelled as
  // a hook, but as it uses no other hooks it technically isn't one.
  let classesSet = new Set();
  for (let c of classes) {
    if (typeof c == "string" && c.trim()) classesSet.add(c);
  }
  if (classesSet.size) {
    return Array.from(classesSet).join(" ");
  } else {
    return undefined;
  }
}
function processRef(instance, ref) {
  if (typeof ref === "function") {
    ref(instance);
  } else if (ref != null) {
    ref.current = instance;
  } else {
    /* eslint-disable no-debugger */
    debugger;
    console.assert(false, "Unknown ref type found that was neither a RefCallback nor a RefObject");
  }
}
/**
 * Combines two refs into one. This allows a component to both use its own ref *and* forward a ref that was given to it.
 *
 * @remarks Or just use {@link useMergedProps}
 */
function useMergedRefs(rhs, lhs) {
  // This *must* be stable in order to prevent repeated reset `null` calls after every render.
  const combined = useStableCallback(function combined(current) {
    processRef(current, lhs);
    processRef(current, rhs);
  });
  if (lhs == null && rhs == null) {
    return undefined;
  } else if (lhs == null) {
    return rhs;
  } else if (rhs == null) {
    return lhs;
  } else {
    return combined;
  }
}
function styleStringToObject(style) {
  // TODO: This sucks D:
  return Object.fromEntries(style.split(";").map(statement => statement.split(":")));
}
/**
 * Merges two style objects, returning the result.
 *
 * @param style - The user-given style prop for this component
 * @param obj - The CSS properties you want added to the user-given style
 * @returns A CSS object containing the properties of both objects.
 */
function useMergedStyles(lhs, rhs) {
  // Easy case, when there are no styles to merge return nothing.
  if (!lhs && !rhs) return undefined;
  if (typeof lhs != typeof rhs) {
    // Easy cases, when one is null and the other isn't.
    if (lhs && !rhs) return lhs;
    if (!lhs && rhs) return rhs;
    // They're both non-null but different types.
    // Convert the string type to an object bag type and run it again.
    if (lhs && rhs) {
      // (useMergedStyles isn't a true hook -- this isn't a violation)
      if (typeof lhs == "string") return useMergedStyles(styleStringToObject(lhs), rhs);
      if (typeof rhs == "string") return useMergedStyles(lhs, styleStringToObject(rhs));
    }
    // Logic???
    return undefined;
  }
  // They're both strings, just concatenate them.
  if (typeof lhs == "string") {
    return `${lhs};${rhs ?? ""}`;
  }
  // They're both objects, just merge them.
  return {
    ...(lhs ?? {}),
    ...(rhs ?? {})
  };
}
let log = console.warn;
/**
 * Given two sets of props, merges them and returns the result.
 *
 * @remarks The hook is aware of and can intelligently merge `className`, `class`, `style`, `ref`, `children`, and all event handlers.
 *
 * If two sets of props both specify the same attribute, e.g. both specify two different `id`s, then an error will be printed to the console (customize this with {@link enableLoggingPropConflicts}), as this conflict needs to be arbitrated on by you.
 *
 * {@include } {@link enableLoggingPropConflicts}
 *
 * @see {@link useMergedRefs}
 * @see {@link useMergedStyles}
 * @see {@link useMergedClasses}
 * @see {@link useMergedChildren}
 *
 * @param allProps - A variadic number of props to merge into one
 *
 * @returns A single object with all the provided props merged into one.
 */
function useMergedProps(...allProps) {
  useEnsureStability("useMergedProps", allProps.length);
  let ret = {};
  for (let nextProps of allProps) {
    useMergedPropsHelper(ret, nextProps);
  }
  return ret;
}
const knowns = new Set(["children", "ref", "className", "class", "style"]);
function mergeUnknown(key, lhsValue, rhsValue) {
  if (typeof lhsValue === "function" || typeof rhsValue === "function") {
    // They're both functions that can be merged (or one's a function and the other's null).
    // Not an *easy* case, but a well-defined one.
    const merged = mergeFunctions(lhsValue, rhsValue);
    return merged;
  } else {
    // Uh...they're not both functions so we're here because one of them's null, right?
    if (lhsValue == null && rhsValue == null) {
      if (rhsValue === null && lhsValue === undefined) return rhsValue;else return lhsValue;
    }
    if (lhsValue == null) return rhsValue;else if (rhsValue == null) return lhsValue;else if (rhsValue == lhsValue) {
      // I mean, they're the same value at least
      // so we don't need to do anything.
      // Not really ideal though.
      return rhsValue;
    } else {
      // Ugh.
      // No good strategies here, just log it if requested
      log?.(`The prop "${key}" cannot simultaneously be the values ${lhsValue} and ${rhsValue}. One must be chosen outside of useMergedProps.`);
      return rhsValue;
    }
  }
}
/**
 * Helper function.
 *
 * This is one of the most commonly called functions in this and consumer libraries,
 * so it trades a bit of readability for speed (i.e. we don't decompose objects and just do regular property access, iterate with `for...in`, instead of `Object.entries`, etc.)
 */
function useMergedPropsHelper(target, mods) {
  target.ref = useMergedRefs(target.ref, mods.ref);
  target.style = useMergedStyles(target.style, mods.style);
  target.className = useMergedClasses(target["class"], target.className, mods["class"], mods.className);
  target.children = useMergedChildren(target.children, mods.children);
  if (target.ref === undefined) delete target.ref;
  if (target.style === undefined) delete target.style;
  if (target.className === undefined) delete target.className;
  if (target["class"] === undefined) delete target["class"];
  if (target.children === undefined) delete target.children;
  for (const rhsKeyU in mods) {
    const rhsKey = rhsKeyU;
    if (knowns.has(rhsKey)) continue;
    target[rhsKey] = mergeUnknown(rhsKey, target[rhsKey], mods[rhsKey]);
  }
}
/**
 * #__NO_SIDE_EFFECTS__
 */
function mergeFunctions(lhs, rhs) {
  if (!lhs) return rhs;
  if (!rhs) return lhs;
  return (...args) => {
    const lv = lhs(...args);
    const rv = rhs(...args);
    if (lv instanceof Promise || rv instanceof Promise) return Promise.all([lv, rv]);
  };
}

/*!
* tabbable 6.2.0
* @license MIT, https://github.com/focus-trap/tabbable/blob/master/LICENSE
*/
// NOTE: separate `:not()` selectors has broader browser support than the newer
//  `:not([inert], [inert] *)` (Feb 2023)
// CAREFUL: JSDom does not support `:not([inert] *)` as a selector; using it causes
//  the entire query to fail, resulting in no nodes found, which will break a lot
//  of things... so we have to rely on JS to identify nodes inside an inert container
var candidateSelectors = ['input:not([inert])', 'select:not([inert])', 'textarea:not([inert])', 'a[href]:not([inert])', 'button:not([inert])', '[tabindex]:not(slot):not([inert])', 'audio[controls]:not([inert])', 'video[controls]:not([inert])', '[contenteditable]:not([contenteditable="false"]):not([inert])', 'details>summary:first-of-type:not([inert])', 'details:not([inert])'];
var candidateSelector = /* #__PURE__ */candidateSelectors.join(',');
var NoElement = typeof Element === 'undefined';
var matches = NoElement ? function () {} : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
var getRootNode = !NoElement && Element.prototype.getRootNode ? function (element) {
  var _element$getRootNode;
  return element === null || element === void 0 ? void 0 : (_element$getRootNode = element.getRootNode) === null || _element$getRootNode === void 0 ? void 0 : _element$getRootNode.call(element);
} : function (element) {
  return element === null || element === void 0 ? void 0 : element.ownerDocument;
};

/**
 * Determines if a node is inert or in an inert ancestor.
 * @param {Element} [node]
 * @param {boolean} [lookUp] If true and `node` is not inert, looks up at ancestors to
 *  see if any of them are inert. If false, only `node` itself is considered.
 * @returns {boolean} True if inert itself or by way of being in an inert ancestor.
 *  False if `node` is falsy.
 */
var isInert = function isInert(node, lookUp) {
  var _node$getAttribute;
  if (lookUp === void 0) {
    lookUp = true;
  }
  // CAREFUL: JSDom does not support inert at all, so we can't use the `HTMLElement.inert`
  //  JS API property; we have to check the attribute, which can either be empty or 'true';
  //  if it's `null` (not specified) or 'false', it's an active element
  var inertAtt = node === null || node === void 0 ? void 0 : (_node$getAttribute = node.getAttribute) === null || _node$getAttribute === void 0 ? void 0 : _node$getAttribute.call(node, 'inert');
  var inert = inertAtt === '' || inertAtt === 'true';

  // NOTE: this could also be handled with `node.matches('[inert], :is([inert] *)')`
  //  if it weren't for `matches()` not being a function on shadow roots; the following
  //  code works for any kind of node
  // CAREFUL: JSDom does not appear to support certain selectors like `:not([inert] *)`
  //  so it likely would not support `:is([inert] *)` either...
  var result = inert || lookUp && node && isInert(node.parentNode); // recursive

  return result;
};

/**
 * Determines if a node's content is editable.
 * @param {Element} [node]
 * @returns True if it's content-editable; false if it's not or `node` is falsy.
 */
var isContentEditable = function isContentEditable(node) {
  var _node$getAttribute2;
  // CAREFUL: JSDom does not support the `HTMLElement.isContentEditable` API so we have
  //  to use the attribute directly to check for this, which can either be empty or 'true';
  //  if it's `null` (not specified) or 'false', it's a non-editable element
  var attValue = node === null || node === void 0 ? void 0 : (_node$getAttribute2 = node.getAttribute) === null || _node$getAttribute2 === void 0 ? void 0 : _node$getAttribute2.call(node, 'contenteditable');
  return attValue === '' || attValue === 'true';
};

/**
 * @private
 * Determines if the node has an explicitly specified `tabindex` attribute.
 * @param {HTMLElement} node
 * @returns {boolean} True if so; false if not.
 */
var hasTabIndex = function hasTabIndex(node) {
  return !isNaN(parseInt(node.getAttribute('tabindex'), 10));
};

/**
 * Determine the tab index of a given node.
 * @param {HTMLElement} node
 * @returns {number} Tab order (negative, 0, or positive number).
 * @throws {Error} If `node` is falsy.
 */
var getTabIndex = function getTabIndex(node) {
  if (!node) {
    throw new Error('No node provided');
  }
  if (node.tabIndex < 0) {
    // in Chrome, <details/>, <audio controls/> and <video controls/> elements get a default
    // `tabIndex` of -1 when the 'tabindex' attribute isn't specified in the DOM,
    // yet they are still part of the regular tab order; in FF, they get a default
    // `tabIndex` of 0; since Chrome still puts those elements in the regular tab
    // order, consider their tab index to be 0.
    // Also browsers do not return `tabIndex` correctly for contentEditable nodes;
    // so if they don't have a tabindex attribute specifically set, assume it's 0.
    if ((/^(AUDIO|VIDEO|DETAILS)$/.test(node.tagName) || isContentEditable(node)) && !hasTabIndex(node)) {
      return 0;
    }
  }
  return node.tabIndex;
};
var isInput = function isInput(node) {
  return node.tagName === 'INPUT';
};
var isHiddenInput = function isHiddenInput(node) {
  return isInput(node) && node.type === 'hidden';
};
var isDetailsWithSummary = function isDetailsWithSummary(node) {
  var r = node.tagName === 'DETAILS' && Array.prototype.slice.apply(node.children).some(function (child) {
    return child.tagName === 'SUMMARY';
  });
  return r;
};
var getCheckedRadio = function getCheckedRadio(nodes, form) {
  for (var i = 0; i < nodes.length; i++) {
    if (nodes[i].checked && nodes[i].form === form) {
      return nodes[i];
    }
  }
};
var isTabbableRadio = function isTabbableRadio(node) {
  if (!node.name) {
    return true;
  }
  var radioScope = node.form || getRootNode(node);
  var queryRadios = function queryRadios(name) {
    return radioScope.querySelectorAll('input[type="radio"][name="' + name + '"]');
  };
  var radioSet;
  if (typeof window !== 'undefined' && typeof window.CSS !== 'undefined' && typeof window.CSS.escape === 'function') {
    radioSet = queryRadios(window.CSS.escape(node.name));
  } else {
    try {
      radioSet = queryRadios(node.name);
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error('Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s', err.message);
      return false;
    }
  }
  var checked = getCheckedRadio(radioSet, node.form);
  return !checked || checked === node;
};
var isRadio = function isRadio(node) {
  return isInput(node) && node.type === 'radio';
};
var isNonTabbableRadio = function isNonTabbableRadio(node) {
  return isRadio(node) && !isTabbableRadio(node);
};

// determines if a node is ultimately attached to the window's document
var isNodeAttached = function isNodeAttached(node) {
  var _nodeRoot;
  // The root node is the shadow root if the node is in a shadow DOM; some document otherwise
  //  (but NOT _the_ document; see second 'If' comment below for more).
  // If rootNode is shadow root, it'll have a host, which is the element to which the shadow
  //  is attached, and the one we need to check if it's in the document or not (because the
  //  shadow, and all nodes it contains, is never considered in the document since shadows
  //  behave like self-contained DOMs; but if the shadow's HOST, which is part of the document,
  //  is hidden, or is not in the document itself but is detached, it will affect the shadow's
  //  visibility, including all the nodes it contains). The host could be any normal node,
  //  or a custom element (i.e. web component). Either way, that's the one that is considered
  //  part of the document, not the shadow root, nor any of its children (i.e. the node being
  //  tested).
  // To further complicate things, we have to look all the way up until we find a shadow HOST
  //  that is attached (or find none) because the node might be in nested shadows...
  // If rootNode is not a shadow root, it won't have a host, and so rootNode should be the
  //  document (per the docs) and while it's a Document-type object, that document does not
  //  appear to be the same as the node's `ownerDocument` for some reason, so it's safer
  //  to ignore the rootNode at this point, and use `node.ownerDocument`. Otherwise,
  //  using `rootNode.contains(node)` will _always_ be true we'll get false-positives when
  //  node is actually detached.
  // NOTE: If `nodeRootHost` or `node` happens to be the `document` itself (which is possible
  //  if a tabbable/focusable node was quickly added to the DOM, focused, and then removed
  //  from the DOM as in https://github.com/focus-trap/focus-trap-react/issues/905), then
  //  `ownerDocument` will be `null`, hence the optional chaining on it.
  var nodeRoot = node && getRootNode(node);
  var nodeRootHost = (_nodeRoot = nodeRoot) === null || _nodeRoot === void 0 ? void 0 : _nodeRoot.host;

  // in some cases, a detached node will return itself as the root instead of a document or
  //  shadow root object, in which case, we shouldn't try to look further up the host chain
  var attached = false;
  if (nodeRoot && nodeRoot !== node) {
    var _nodeRootHost, _nodeRootHost$ownerDo, _node$ownerDocument;
    attached = !!((_nodeRootHost = nodeRootHost) !== null && _nodeRootHost !== void 0 && (_nodeRootHost$ownerDo = _nodeRootHost.ownerDocument) !== null && _nodeRootHost$ownerDo !== void 0 && _nodeRootHost$ownerDo.contains(nodeRootHost) || node !== null && node !== void 0 && (_node$ownerDocument = node.ownerDocument) !== null && _node$ownerDocument !== void 0 && _node$ownerDocument.contains(node));
    while (!attached && nodeRootHost) {
      var _nodeRoot2, _nodeRootHost2, _nodeRootHost2$ownerD;
      // since it's not attached and we have a root host, the node MUST be in a nested shadow DOM,
      //  which means we need to get the host's host and check if that parent host is contained
      //  in (i.e. attached to) the document
      nodeRoot = getRootNode(nodeRootHost);
      nodeRootHost = (_nodeRoot2 = nodeRoot) === null || _nodeRoot2 === void 0 ? void 0 : _nodeRoot2.host;
      attached = !!((_nodeRootHost2 = nodeRootHost) !== null && _nodeRootHost2 !== void 0 && (_nodeRootHost2$ownerD = _nodeRootHost2.ownerDocument) !== null && _nodeRootHost2$ownerD !== void 0 && _nodeRootHost2$ownerD.contains(nodeRootHost));
    }
  }
  return attached;
};
var isZeroArea = function isZeroArea(node) {
  var _node$getBoundingClie = node.getBoundingClientRect(),
    width = _node$getBoundingClie.width,
    height = _node$getBoundingClie.height;
  return width === 0 && height === 0;
};
var isHidden = function isHidden(node, _ref) {
  var displayCheck = _ref.displayCheck,
    getShadowRoot = _ref.getShadowRoot;
  // NOTE: visibility will be `undefined` if node is detached from the document
  //  (see notes about this further down), which means we will consider it visible
  //  (this is legacy behavior from a very long way back)
  // NOTE: we check this regardless of `displayCheck="none"` because this is a
  //  _visibility_ check, not a _display_ check
  if (getComputedStyle(node).visibility === 'hidden') {
    return true;
  }
  var isDirectSummary = matches.call(node, 'details>summary:first-of-type');
  var nodeUnderDetails = isDirectSummary ? node.parentElement : node;
  if (matches.call(nodeUnderDetails, 'details:not([open]) *')) {
    return true;
  }
  if (!displayCheck || displayCheck === 'full' || displayCheck === 'legacy-full') {
    if (typeof getShadowRoot === 'function') {
      // figure out if we should consider the node to be in an undisclosed shadow and use the
      //  'non-zero-area' fallback
      var originalNode = node;
      while (node) {
        var parentElement = node.parentElement;
        var rootNode = getRootNode(node);
        if (parentElement && !parentElement.shadowRoot && getShadowRoot(parentElement) === true // check if there's an undisclosed shadow
        ) {
          // node has an undisclosed shadow which means we can only treat it as a black box, so we
          //  fall back to a non-zero-area test
          return isZeroArea(node);
        } else if (node.assignedSlot) {
          // iterate up slot
          node = node.assignedSlot;
        } else if (!parentElement && rootNode !== node.ownerDocument) {
          // cross shadow boundary
          node = rootNode.host;
        } else {
          // iterate up normal dom
          node = parentElement;
        }
      }
      node = originalNode;
    }
    // else, `getShadowRoot` might be true, but all that does is enable shadow DOM support
    //  (i.e. it does not also presume that all nodes might have undisclosed shadows); or
    //  it might be a falsy value, which means shadow DOM support is disabled

    // Since we didn't find it sitting in an undisclosed shadow (or shadows are disabled)
    //  now we can just test to see if it would normally be visible or not, provided it's
    //  attached to the main document.
    // NOTE: We must consider case where node is inside a shadow DOM and given directly to
    //  `isTabbable()` or `isFocusable()` -- regardless of `getShadowRoot` option setting.

    if (isNodeAttached(node)) {
      // this works wherever the node is: if there's at least one client rect, it's
      //  somehow displayed; it also covers the CSS 'display: contents' case where the
      //  node itself is hidden in place of its contents; and there's no need to search
      //  up the hierarchy either
      return !node.getClientRects().length;
    }

    // Else, the node isn't attached to the document, which means the `getClientRects()`
    //  API will __always__ return zero rects (this can happen, for example, if React
    //  is used to render nodes onto a detached tree, as confirmed in this thread:
    //  https://github.com/facebook/react/issues/9117#issuecomment-284228870)
    //
    // It also means that even window.getComputedStyle(node).display will return `undefined`
    //  because styles are only computed for nodes that are in the document.
    //
    // NOTE: THIS HAS BEEN THE CASE FOR YEARS. It is not new, nor is it caused by tabbable
    //  somehow. Though it was never stated officially, anyone who has ever used tabbable
    //  APIs on nodes in detached containers has actually implicitly used tabbable in what
    //  was later (as of v5.2.0 on Apr 9, 2021) called `displayCheck="none"` mode -- essentially
    //  considering __everything__ to be visible because of the innability to determine styles.
    //
    // v6.0.0: As of this major release, the default 'full' option __no longer treats detached
    //  nodes as visible with the 'none' fallback.__
    if (displayCheck !== 'legacy-full') {
      return true; // hidden
    }
    // else, fallback to 'none' mode and consider the node visible
  } else if (displayCheck === 'non-zero-area') {
    // NOTE: Even though this tests that the node's client rect is non-zero to determine
    //  whether it's displayed, and that a detached node will __always__ have a zero-area
    //  client rect, we don't special-case for whether the node is attached or not. In
    //  this mode, we do want to consider nodes that have a zero area to be hidden at all
    //  times, and that includes attached or not.
    return isZeroArea(node);
  }

  // visible, as far as we can tell, or per current `displayCheck=none` mode, we assume
  //  it's visible
  return false;
};

// form fields (nested) inside a disabled fieldset are not focusable/tabbable
//  unless they are in the _first_ <legend> element of the top-most disabled
//  fieldset
var isDisabledFromFieldset = function isDisabledFromFieldset(node) {
  if (/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(node.tagName)) {
    var parentNode = node.parentElement;
    // check if `node` is contained in a disabled <fieldset>
    while (parentNode) {
      if (parentNode.tagName === 'FIELDSET' && parentNode.disabled) {
        // look for the first <legend> among the children of the disabled <fieldset>
        for (var i = 0; i < parentNode.children.length; i++) {
          var child = parentNode.children.item(i);
          // when the first <legend> (in document order) is found
          if (child.tagName === 'LEGEND') {
            // if its parent <fieldset> is not nested in another disabled <fieldset>,
            // return whether `node` is a descendant of its first <legend>
            return matches.call(parentNode, 'fieldset[disabled] *') ? true : !child.contains(node);
          }
        }
        // the disabled <fieldset> containing `node` has no <legend>
        return true;
      }
      parentNode = parentNode.parentElement;
    }
  }

  // else, node's tabbable/focusable state should not be affected by a fieldset's
  //  enabled/disabled state
  return false;
};
var isNodeMatchingSelectorFocusable = function isNodeMatchingSelectorFocusable(options, node) {
  if (node.disabled ||
  // we must do an inert look up to filter out any elements inside an inert ancestor
  //  because we're limited in the type of selectors we can use in JSDom (see related
  //  note related to `candidateSelectors`)
  isInert(node) || isHiddenInput(node) || isHidden(node, options) ||
  // For a details element with a summary, the summary element gets the focus
  isDetailsWithSummary(node) || isDisabledFromFieldset(node)) {
    return false;
  }
  return true;
};
var isNodeMatchingSelectorTabbable = function isNodeMatchingSelectorTabbable(options, node) {
  if (isNonTabbableRadio(node) || getTabIndex(node) < 0 || !isNodeMatchingSelectorFocusable(options, node)) {
    return false;
  }
  return true;
};
var isTabbable = function isTabbable(node, options) {
  options = options || {};
  if (!node) {
    throw new Error('No node provided');
  }
  if (matches.call(node, candidateSelector) === false) {
    return false;
  }
  return isNodeMatchingSelectorTabbable(options, node);
};
var focusableCandidateSelector = /* #__PURE__ */candidateSelectors.concat('iframe').join(',');
var isFocusable = function isFocusable(node, options) {
  options = options || {};
  if (!node) {
    throw new Error('No node provided');
  }
  if (matches.call(node, focusableCandidateSelector) === false) {
    return false;
  }
  return isNodeMatchingSelectorFocusable(options, node);
};

/**
 * If you want a single place to put a debugger for tracking focus,
 * here:
 */
function focus(e) {
  e?.focus?.();
}
/**
 * When an element unmounts, default HTML behavior is to just send focus to the body, which is wildly unhelpful. It means you lose your place in the keyboard tab order.
 *
 * If you still have access to the element that's unmounting, or perhaps its parent from beforehand, this will find the next suitable element to send focus to instead of the body.
 *
 * **Important**: This function is linear on the number of DOM nodes in your document, so it's not particularly fast. Only call it once when you need its value, not every time tab focus changed or something.
 */
function findBackupFocus(unmountingElement) {
  if (unmountingElement == null) return globalThis.document.body;
  let document = unmountingElement.ownerDocument;
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_ELEMENT);
  let node = walker.firstChild();
  let bestCandidateBefore = null;
  let bestCandidateAfter = null;
  let w = false;
  while (node) {
    let pos = node.compareDocumentPosition(unmountingElement);
    if (pos & Node.DOCUMENT_POSITION_DISCONNECTED) {
      if (!w) console.warn("Can't focus anything near a disconnected element");
      w = true;
    }
    if (pos & Node.DOCUMENT_POSITION_PRECEDING) {
      // The unmounting element is before this element we're tree-walking.
      // That means the next tabbable element we find is the candidate we really want.
      if (node instanceof Element) {
        if (isTabbable(node)) {
          bestCandidateAfter = node;
          break;
        }
      }
    } else if (pos & Node.DOCUMENT_POSITION_FOLLOWING) {
      // The unmounting element is after this element we're tree-walking.
      // That means the we're getting closer and closer.
      // If this element is tabbable, then it's even closer than any other tabbable element we've saved up to this point.
      if (node instanceof Element) {
        if (isTabbable(node)) {
          bestCandidateBefore = node;
        }
      }
    }
    node = walker.nextNode();
  }
  return bestCandidateAfter ?? bestCandidateBefore ?? document.body;
}

/**
 * Runs a function the specified number of milliseconds after the component renders.
 *
 * @remarks This is particularly useful to function as "useEffect on a delay".
 *
 * @remarks
 * {@include } {@link UseTimeoutParameters}
 */
function useTimeout({
  timeout,
  callback,
  triggerIndex
}) {
  return useMonitoring(function useTimeout() {
    const stableCallback = useStableCallback(() => {
      startTimeRef.current = null;
      callback();
    });
    const getTimeout = useStableGetter(timeout);
    // Set any time we start timeout.
    // Unset any time the timeout completes
    const startTimeRef = A$1(null);
    const disabled = timeout == null;
    // Any time the triggerIndex changes (including on mount)
    // restart the timeout.  The timeout does NOT reset
    // when the duration or callback changes, only triggerIndex.
    y(() => {
      if (!disabled) {
        const timeout = getTimeout();
        console.assert(disabled == (timeout == null));
        if (timeout != null) {
          startTimeRef.current = +new Date();
          const handle = setTimeout(stableCallback, timeout);
          return () => clearTimeout(handle);
        }
      }
    }, [triggerIndex, disabled]);
    const getElapsedTime = useCallback(() => {
      return +new Date() - +(startTimeRef.current ?? new Date());
    }, []);
    const getRemainingTime = useCallback(() => {
      const timeout = getTimeout();
      return timeout == null ? null : Math.max(0, timeout - getElapsedTime());
    }, []);
    return {
      getElapsedTime,
      getRemainingTime
    };
  });
}

/**
 * Debug function that yells at you if your forgot to use the props a hook returns.
 *
 * @remarks Like other debug hooks, only has any effect IFF there is a global variable called `"production"` and it contains the value `"development"`, AND there is a global variable called `_generate_useTagProps_tags` set to true, and stacks are only generated if `_generate_setState_stacks` is true..
 *
 * @param props - The props to return a modified copy of
 * @param tag - Should be unique
 * @returns A modified copy of the given props
 */
function useTagProps(props, tag) {
  {
    return props;
  }
}

/**
 * When used in tandem with `useRovingTabIndex`, allows control of
 * the tabbable index with the arrow keys, Page Up/Page Down, or Home/End.
 *
 * @remarks There is no child version of this hook. That being said, the props returned are stable and work equally well on the child as the parent. If you don't have a parent `HTMLElement`, you can still pass the returned props to each child individually.
 *
 * @see {@link useCompleteListNavigation}, which packages everything up together.
 *
 * @compositeParams
 */
function useLinearNavigation({
  linearNavigationParameters: {
    getLowestIndex,
    getHighestIndex,
    isValidForLinearNavigation,
    navigatePastEnd,
    navigatePastStart,
    onNavigateLinear,
    arrowKeyDirection,
    disableHomeEndKeys,
    pageNavigationSize,
    ...void4
  },
  rovingTabIndexReturn: {
    getTabbableIndex,
    setTabbableIndex,
    ...void5
  },
  paginatedChildrenParameters: {
    paginationMax,
    paginationMin,
    ...void2
  },
  processedIndexManglerReturn: {
    indexDemangler,
    indexMangler,
    ...void3
  },
  ...void1
}) {
  return useMonitoring(function useLinearNavigation() {
    let getPaginatedRange = useStableGetter(paginationMax == null || paginationMin == null ? null : paginationMax - paginationMin);
    const navigateAbsolute = useCallback((requestedIndexMangled, searchDirection, e, fromUserInteraction, mode) => {
      const highestChildIndex = getHighestIndex();
      const lowestChildIndex = getLowestIndex();
      getTabbableIndex() ?? 0;
      const targetDemangled = indexDemangler(requestedIndexMangled);
      const {
        status,
        valueDemangled
      } = tryNavigateToIndex({
        isValid: isValidForLinearNavigation,
        lowestChildIndex,
        highestChildIndex,
        indexDemangler,
        indexMangler,
        searchDirection,
        targetDemangled
      });
      if (status == "past-end") {
        if (navigatePastEnd == "wrap") {
          if (mode == "single") navigateToFirst(e, fromUserInteraction);else {
            /* eslint-disable no-constant-condition */
            // Uncomment to allow page up/down to wrap after hitting the top/bottom once.
            // It works fine, the problem isn't that -- the problem is it just feels wrong. 
            // Page Up/Down don't feel like they should wrap, even if normally requested. 
            // That's the arrow keys' domain.
            navigateToLast(e, fromUserInteraction);
          }
          return "stop";
        } else if (navigatePastEnd == "passthrough") {
          return "passthrough";
        } else {
          navigatePastEnd();
          return "stop";
        }
      } else if (status == "past-start") {
        if (navigatePastStart == "wrap") {
          if (mode == "single") {
            navigateToLast(e, fromUserInteraction);
          } else {
            /* eslint-disable no-constant-condition */
            // See above. It works fine but just feels wrong to wrap on Page Up/Down.
            navigateToFirst(e, fromUserInteraction);
          }
          return "stop";
        } else if (navigatePastStart == "passthrough") {
          return "passthrough";
        } else {
          navigatePastStart();
          return "stop";
        }
      } else {
        setTabbableIndex(valueDemangled, e, fromUserInteraction);
        onNavigateLinear?.(valueDemangled, e);
        return "stop";
      }
    }, []);
    const navigateToFirst = useStableCallback((e, fromUserInteraction) => {
      return navigateAbsolute(getLowestIndex(), -1, e, fromUserInteraction, "single");
    });
    const navigateToLast = useStableCallback((e, fromUserInteraction) => {
      return navigateAbsolute(getHighestIndex(), 1, e, fromUserInteraction, "single");
    });
    const navigateRelative2 = useStableCallback((e, offset, fromUserInteraction, mode) => {
      getHighestIndex();
      const searchDirection = Math.sign(offset) || 1;
      const original = getTabbableIndex() ?? 0;
      /**
       * To get the target, we need to add (or subtract) 1 to our current value,
       * but it need to be relative to any sorting/rearranging that's happened.
       *
       * We mangle the index to get its "visual" position, add our offset,
       * and then demangle it to get the child that corresponds to the next child "visually".
       */
      const targetMangled = indexMangler(original) + offset;
      return navigateAbsolute(targetMangled, searchDirection, e, fromUserInteraction, mode);
    });
    const navigateToNext = useStableCallback((e, fromUserInteraction) => {
      return navigateRelative2(e, 1, fromUserInteraction, "single");
    });
    const navigateToPrev = useStableCallback((e, fromUserInteraction) => {
      return navigateRelative2(e, -1, fromUserInteraction, "single");
    });
    //const getDisableHomeEndKeys = useStableGetter(disableHomeEndKeys);
    //const getArrowKeyDirection = useStableGetter(arrowKeyDirection);
    //const getPageNavigationSize = useStableGetter(pageNavigationSize);
    const stableProps = A$1(useTagProps({
      onKeyDown: useStableCallback(e => {
        // Not handled by typeahead (i.e. assume this is a keyboard shortcut)
        // TODO: ctrlKey was here too, but multi-selection uses that when in focus-selection mode.
        if (e.metaKey) return;
        const allowsVerticalNavigation = arrowKeyDirection == "vertical" || arrowKeyDirection == "either";
        const allowsHorizontalNavigation = arrowKeyDirection == "horizontal" || arrowKeyDirection == "either";
        let childRange = getHighestIndex() - getLowestIndex();
        let paginatedRange = getPaginatedRange() ?? childRange;
        let truePageNavigationSize = pageNavigationSize;
        if (truePageNavigationSize != null && truePageNavigationSize < 1) {
          truePageNavigationSize = Math.round(truePageNavigationSize * Math.max(10, paginatedRange + 1));
        }
        let result = "passthrough";
        // Arrow keys only take effect for components oriented in that direction,
        // so we want to make sure we only listen for left/right or up/down when appropriate.
        let keyPressIsValidForOrientation = true;
        switch (e.key) {
          case "ArrowUp":
          case "ArrowDown":
            keyPressIsValidForOrientation = allowsVerticalNavigation;
            break;
          case "ArrowLeft":
          case "ArrowRight":
            keyPressIsValidForOrientation = allowsHorizontalNavigation;
            break;
        }
        if (keyPressIsValidForOrientation) {
          switch (e.key) {
            case "ArrowUp":
            case "ArrowLeft":
              result = navigateToPrev(e, true);
              break;
            case "ArrowDown":
            case "ArrowRight":
              result = navigateToNext(e, true);
              break;
            case "PageUp":
            case "PageDown":
              if (truePageNavigationSize == null) break;else if (truePageNavigationSize > 0) result = navigateRelative2(e, truePageNavigationSize * (e.key.endsWith('n') ? 1 : -1), true, "page");
              break;
            case "Home":
            case "End":
              if (!disableHomeEndKeys) {
                if (e.key.endsWith('e')) navigateToFirst(e, true);else navigateToLast(e, true);
                result = 'stop';
              }
              break;
          }
        }
        if (result && result != 'passthrough') {
          e.preventDefault();
          e.stopPropagation();
        }
      })
    }));
    return {
      linearNavigationReturn: {},
      propsStable: stableProps.current
    };
  });
}
/**
 * #__NO_SIDE_EFFECTS__
 */
function tryNavigateToIndex({
  isValid,
  highestChildIndex,
  lowestChildIndex,
  searchDirection,
  indexDemangler,
  indexMangler,
  targetDemangled
}) {
  if (searchDirection === -1) {
    let bestUpResult = undefined;
    bestUpResult = tryNavigateUp({
      isValid,
      indexDemangler,
      indexMangler,
      targetDemangled,
      lowestChildIndex
    });
    bestUpResult ??= tryNavigateDown({
      isValid,
      indexDemangler,
      indexMangler,
      targetDemangled,
      highestChildIndex
    });
    return bestUpResult || {
      valueDemangled: targetDemangled,
      status: "normal"
    };
  } else {
    let bestDownResult = undefined;
    bestDownResult = tryNavigateDown({
      isValid,
      indexDemangler,
      indexMangler,
      targetDemangled,
      highestChildIndex
    });
    bestDownResult ??= tryNavigateUp({
      isValid,
      indexDemangler,
      indexMangler,
      targetDemangled,
      lowestChildIndex
    });
    return bestDownResult || {
      valueDemangled: targetDemangled,
      status: "normal"
    };
  }
}
function tryNavigateUp({
  isValid,
  indexDemangler,
  indexMangler,
  lowestChildIndex: lower,
  targetDemangled
}) {
  while (targetDemangled >= lower && !isValid(targetDemangled)) {
    targetDemangled = indexDemangler(indexMangler(targetDemangled) - 1);
  }
  if (!isValid(targetDemangled)) {
    return undefined;
  }
  if (targetDemangled < lower) {
    return {
      valueDemangled: indexDemangler(lower),
      status: "past-start"
    };
  } else {
    return {
      valueDemangled: targetDemangled,
      status: "normal"
    };
  }
}
function tryNavigateDown({
  isValid,
  indexDemangler,
  indexMangler,
  targetDemangled,
  highestChildIndex: upper
}) {
  while (targetDemangled <= upper && !isValid(targetDemangled)) {
    targetDemangled = indexDemangler(indexMangler(targetDemangled) + 1);
  }
  if (!isValid(targetDemangled)) {
    return undefined;
  }
  if (targetDemangled > upper) {
    return {
      valueDemangled: indexDemangler(upper),
      status: "past-end"
    };
  } else {
    return {
      valueDemangled: targetDemangled,
      status: "normal"
    };
  }
}

/**
 * Allows a parent component to access information about certain
 * child components once they have rendered.
 *
 * @remarks This hook is designed to be lightweight, in that the parent keeps no state
 * and runs no effects.  Each child *does* run an effect, but with no state
 * changes unless you explicitly request them.
 *
 * {@include } {@link ManagedChildren}
 *
 * @hasChild {@link useManagedChild}
 *
 * @compositeParams
 */
function useManagedChildren(parentParameters) {
  return useMonitoring(function useManagedChildren() {
    const {
      managedChildrenParameters: {
        onAfterChildLayoutEffect,
        onChildrenMountChange,
        onChildrenCountChange
      },
      ...rest
    } = parentParameters;
    const getHighestIndex = useCallback(() => {
      return managedChildrenArray.current.highestIndex;
    }, []);
    const getLowestIndex = useCallback(() => {
      return managedChildrenArray.current.lowestIndex;
    }, []);
    const updateMinMax = useCallback(index => {
      // The opposite of this is done during the "shrinkwrap" phase, which is debounced.
      managedChildrenArray.current.highestIndex = Math.max(index, managedChildrenArray.current.highestIndex);
      managedChildrenArray.current.lowestIndex = Math.min(index, managedChildrenArray.current.lowestIndex);
    }, []);
    // All the information we have about our children is stored in this **stable** array.
    // Any mutations to this array **DO NOT** trigger any sort of a re-render.
    const managedChildrenArray = A$1({
      arr: [],
      rec: {},
      highestIndex: 0,
      lowestIndex: 0
    });
    // For indirect access to each child
    // Compare getManagedChildInfo
    // TODO: The primary use for this is flaggable closest fits
    // which needs to search all children for that closest fit.
    // It would be nice if there was something better for that.
    const forEachChild = useCallback(f => {
      for (const child of managedChildrenArray.current.arr) {
        if (child) {
          if (f(child) == 'break') return;
        }
      }
      for (const field in managedChildrenArray.current.rec) {
        const child = managedChildrenArray.current.rec[field];
        if (child) if (f(child) == 'break') return;
      }
    }, []);
    // Retrieves the information associated with the child with the given index.
    // `undefined` if not child there, or it's unmounted.
    const getManagedChildInfo = useCallback(index => {
      if (typeof index == "number") return managedChildrenArray.current.arr[index];else return managedChildrenArray.current.rec[index];
    }, []);
    const shrinkwrapHandle = A$1(null);
    // When we unmount children, we'd like to reduce the array length accordingly.
    // We do this a tick after useEffect to wait for all the child dust to settle, 
    // because this is not critical work; it's just for memory optimization.
    // Honestly, it might even be better to delete this? TODO, I guess.
    const scheduleShrinkwrap = useCallback(() => {
      if (shrinkwrapHandle.current != null) clearTimeout(shrinkwrapHandle.current);
      shrinkwrapHandle.current = setTimeout(() => {
        let shave = 0;
        while (shave <= managedChildrenArray.current.arr.length && managedChildrenArray.current.arr[managedChildrenArray.current.arr.length - 1 - shave] == undefined) {
          ++shave;
        }
        managedChildrenArray.current.arr.splice(managedChildrenArray.current.arr.length - shave, shave);
        managedChildrenArray.current.highestIndex = managedChildrenArray.current.arr.length - 1;
        shrinkwrapHandle.current = null;
        // TODO: length automatically adjusts to give us the highest index,
        // but there's no corresponding property to get the lowest index when it changes...
        // managedChildrenArray.current.lowestIndex = managedChildrenArray.current.arr.length - 1;
      }, 1);
    }, []);
    // tl;dr this is a way to have run useLayoutEffect once after all N children
    // have mounted and run *their* useLayoutEffect, but also *without* re-rendering
    // ourselves because of having a `childCount` state or anything similar.
    //
    // When the child count ref updates, we want the parent to also run an effect
    // to maybe do something with all these children that just mounted.
    // The easiest way would be useEffect(..., [childCount]) but
    // that would require us having a childCount state, then calling
    // setChildCount and re-rendering every time children mount
    // (only one re-render at a time unless children are staggered, but still)
    // 
    // As an alternate solution, any time a child uses ULE on mount, it queues a microtask
    // to emulate running ULE on the parent. Only the first child will actually queue
    // the microtask (by checking hasRemoteULE first) so that the "effect" only
    // runs once. When it's done, hasRemoteULE is reset so it can run again if
    // more children mount/unmount.
    const hasRemoteULEChildMounted = A$1(null);
    const remoteULEChildMounted = useCallback((index, mounted) => {
      if (!hasRemoteULEChildMounted.current) {
        hasRemoteULEChildMounted.current = {
          mounts: new Set(),
          unmounts: new Set(),
          mountInfos: new Map()
        };
        debounceRendering(() => {
          const {
            mounts,
            unmounts
          } = hasRemoteULEChildMounted.current;
          const unmountsThatDidntMount = unmounts.difference(mounts);
          for (const index of mounts) {
            if (typeof index == "number") {
              managedChildrenArray.current.highestIndex = Math.max(managedChildrenArray.current.highestIndex, index);
              managedChildrenArray.current.lowestIndex = Math.min(managedChildrenArray.current.lowestIndex, index);
            }
          }
          for (const index of unmountsThatDidntMount) {
            if (typeof index == "number") delete managedChildrenArray.current.arr[index];else delete managedChildrenArray.current.rec[index];
          }
          if (onChildrenCountChange || onChildrenMountChange) {
            onChildrenMountChange?.(hasRemoteULEChildMounted.current.mounts, hasRemoteULEChildMounted.current.unmounts);
            onChildrenCountChange?.(getChildren().getHighestIndex() + 1);
            hasRemoteULEChildMounted.current = null;
          }
        });
      }
      hasRemoteULEChildMounted?.current?.[mounted ? "mounts" : "unmounts"]?.add?.(index);
    }, [/* Must remain stable */]);
    y(() => {
      scheduleShrinkwrap();
    }, []);
    const managedChildren = useMemoObject({
      ...{
        _: managedChildrenArray.current
      },
      forEach: forEachChild,
      getAt: getManagedChildInfo,
      getHighestIndex: getHighestIndex,
      getLowestIndex: getLowestIndex,
      _arraySlice: useCallback(() => {
        let ret = managedChildrenArray.current.arr.slice();
        const max = getHighestIndex();
        for (let i = 0; i <= max; ++i) {
          if (ret[i] == null) ret[i] = {
            index: i
          };
        }
        return ret;
      }, [])
    });
    const getChildren = useCallback(() => managedChildren, []);
    return {
      context: useMemoObject({
        managedChildContext: useMemoObject({
          managedChildrenArray: managedChildrenArray.current,
          remoteULEChildMounted,
          //remoteULEChildChanged,
          getChildren,
          updateMinMax
        })
      }),
      managedChildrenReturn: {
        getChildren
      }
    };
  });
}
/**
 * @compositeParams
 */
function useManagedChild({
  context,
  info
}) {
  return useMonitoring(function useManagedChild() {
    const {
      managedChildContext: {
        getChildren,
        managedChildrenArray,
        remoteULEChildMounted,
        updateMinMax
      }
    } = context ?? {
      managedChildContext: {}
    };
    const index = info.index;
    // Any time our child props change, make that information available
    // the parent if they need it.
    // The parent can listen for all updates and only act on the ones it cares about,
    // and multiple children updating in the same tick will all be sent at once.
    _(() => {
      if (managedChildrenArray == null) return;
      // Insert this information in-place
      if (typeof index == "number") {
        managedChildrenArray.arr[index] = {
          ...info
        };
        updateMinMax?.(index);
      } else {
        managedChildrenArray.rec[index] = {
          ...info
        };
      }
    });
    // When we mount, notify the parent via queueMicrotask
    // (every child does this, so everything's coordinated to only queue a single microtask per tick)
    // Do the same on unmount.
    // Note: It's important that this comes AFTER remoteULEChildChanged
    // so that remoteULEChildMounted has access to all the info on mount.
    // When we unmount, ask the parent to remove our info from the list of children.
    _(() => {
      remoteULEChildMounted?.(index, true);
      return () => remoteULEChildMounted?.(index, false);
    }, [index]);
    // When we mount, and **after other children have unmounted via uLE),
    // ask the parent to add our info to the list of children.
    //
    // The order is important (we need to delete all unmounts *before* adding any mounts)
    // but TODO the use of useLayoutEffect + useEffect to achieve this isn't really semantically correct.
    // Plus we've gone from scheduling 1 effect to 2.
    //useEffect(() => {
    //}, [index]);
    return {
      managedChildReturn: {
        getChildren: getChildren
      }
    };
  });
}
/**
 * An extension to useManagedChildren that handles the following common case:
 * 1. You have a bunch of children
 * 2. At any given time, only 1 of them is "selected", "activated", "focusable", whatever (or 0 of them, that's cool too, just 0 or 1 though).
 * 3. The parent has control over who is "selected" via a numerical index.
 *
 * This hook allows for much easier control over selection management.
 *
 * Note that because you may want to use multiple flags with the same children, this hook *does not* use `useManagedChildren`!
 * You need to pass it the existing children, and you must pass your invocation of `useManagedChildren` the returned `onChildrenMountChange` handler!
 *
 * Also because of that, the types of this function are rather odd.  It's better to start off using a hook that already uses a flag, such as `useRovingTabIndex`, as an example.
 */
function useChildrenFlag({
  getChildren,
  indexDemangler,
  initialIndex,
  closestFit,
  onClosestFit,
  onIndexChange,
  getAt,
  setAt,
  isValid
}) {
  indexDemangler ??= identity;
  // TODO (maybe?): Even if there is an initial index, it's not set until mount. Is that fine?
  const [getCurrentIndex, setCurrentIndex] = usePassiveState(onIndexChange, undefined);
  const [getRequestedIndex, setRequestedIndex] = usePassiveState(null, undefined, {
    skipMountInitialization: true
  });
  // Shared between onChildrenMountChange and changeIndex, not public
  // Only called when `closestFit` is false, naturally.
  const getClosestFit = useCallback(requestedIndex => {
    const children = getChildren();
    let closestDistance = Infinity;
    let closestIndex = null;
    children.forEach(child => {
      if (child != null && isValid(child)) {
        console.assert(typeof child.index == "number", "closestFit can only be used when each child has a numeric index, and cannot be used when children use string indices instead.");
        const newDistance = Math.abs(child.index - requestedIndex);
        if (newDistance < closestDistance || newDistance == closestDistance && child.index < requestedIndex) {
          closestDistance = newDistance;
          closestIndex = child.index;
        }
      }
    });
    return closestIndex;
  }, [/* Must remain stable! */]);
  if (closestFit) {
    console.assert(onClosestFit != null, "When closestFit is used, onClosestFit must be provided");
  }
  // Any time a child mounts/unmounts, we need to double-check to see if that affects 
  // the "currently selected" (or whatever) index.  The two cases we're looking for:
  // 1. The currently selected child unmounted
  // 2. A child mounted, and it mounts with the index we're looking for
  const reevaluateClosestFit = useStableCallback(reason => {
    const children = getChildren();
    const requestedIndex = indexDemangler(getRequestedIndex());
    const currentIndex = indexDemangler(getCurrentIndex());
    const currentChild = currentIndex == null ? null : children.getAt(currentIndex);
    if (requestedIndex != null && closestFit && (requestedIndex != currentIndex || currentChild == null || !isValid(currentChild))) {
      console.assert(typeof requestedIndex == "number", "closestFit can only be used when each child has a numeric index, and cannot be used when children use string indices instead.");
      const closestFitIndex = getClosestFit(requestedIndex);
      setCurrentIndex(closestFitIndex, reason);
      if (currentChild) {
        setAt(currentChild, false, closestFitIndex, currentIndex);
      }
      if (closestFitIndex != null) {
        const closestFitChild = children.getAt(closestFitIndex);
        console.assert(closestFitChild != null, "Internal logic???");
        setAt(closestFitChild, true, closestFitIndex, currentIndex);
        onClosestFit(closestFitIndex);
      } else {
        onClosestFit(null);
      }
    }
  });
  const reasonRef = A$1(undefined);
  const changeIndex = useCallback((arg, reason) => {
    const children = getChildren();
    const requestedIndex = arg instanceof Function ? arg(getRequestedIndex()) : arg;
    reasonRef.current = reason;
    setRequestedIndex(requestedIndex, reason);
    const currentIndex = getCurrentIndex();
    if (currentIndex == requestedIndex) return requestedIndex;
    let newMatchingChild = requestedIndex == null ? null : children.getAt(requestedIndex);
    const oldMatchingChild = currentIndex == null ? null : children.getAt(currentIndex);
    if (requestedIndex == null) {
      // Easy case
      setCurrentIndex(null, reason);
      if (oldMatchingChild) setAt(oldMatchingChild, false, requestedIndex, currentIndex);
      return null;
    } else {
      const childIsValid = newMatchingChild && isValid(newMatchingChild);
      if (childIsValid || !closestFit) {
        setCurrentIndex(requestedIndex, reason);
        if (oldMatchingChild) setAt(oldMatchingChild, false, requestedIndex, currentIndex);
        if (newMatchingChild) setAt(newMatchingChild, true, requestedIndex, currentIndex);
        return requestedIndex;
      } else {
        console.assert(closestFit);
        console.assert(typeof requestedIndex == "number", "closestFit can only be used when each child has a numeric index, and cannot be used when children use string indices instead.");
        const closestFitIndex = getClosestFit(requestedIndex);
        setCurrentIndex(closestFitIndex, reason);
        if (closestFitIndex != null) {
          newMatchingChild = children.getAt(closestFitIndex);
          console.assert(newMatchingChild != null, "Internal logic???");
          if (oldMatchingChild) setAt(oldMatchingChild, false, closestFitIndex, currentIndex);
          setAt(newMatchingChild, true, closestFitIndex, currentIndex);
          return closestFitIndex;
        } else {
          if (oldMatchingChild) setAt(oldMatchingChild, false, closestFitIndex, currentIndex);
          return null;
        }
      }
    }
  }, []);
  // Run once, on mount
  _(() => {
    changeIndex(initialIndex ?? null, reasonRef.current);
  }, []);
  return {
    changeIndex,
    reevaluateClosestFit,
    getCurrentIndex
  };
}

/**
 * Slightly enhanced version of `useState` that includes a getter that remains constant
 * (i.e. you can use it in `useEffect` and friends without it being a dependency).
 *
 * @remarks If `getBuildMode()` returns `"development"`, then any calls to `setState` will also
 * take the stack at the time the hook was called and save it to `window._setState_stack`.
 * Useful if you want to trace whose state is being updated.
 *
 * @param initialState - Same as the built-in `setState`'s
 */
function useState(initialState) {
  // We keep both, but override the `setState` functionality
  const [state, setStateP] = d(initialState);
  const ref = A$1(state);
  // Hijack the normal setter function 
  // to also set our ref to the new value
  const setState = A$1(value => {
    if (typeof value === "function") {
      const callback = value;
      setStateP(prevValue => {
        const nextValue = callback(prevValue);
        if (ref.current !== nextValue) {
          // put a breakpoint here if you want
          ref.current = nextValue;
        }
        ref.current = nextValue;
        return nextValue;
      });
    } else {
      if (ref.current !== value) {
        // put a breakpoint here if you want
        ref.current = value;
      }
      ref.current = value;
      setStateP(value);
    }
  });
  const getState = useCallback(() => {
    return ref.current;
  }, []);
  return [state, setState.current, getState];
}

/**
 * Implements a roving tabindex system where only one "focusable"
 * component in a set is able to receive a tab focus.
 *
 * @remarks *Which* of those elements receives focus is determined by you,
 * but it's recommended to offload that logic then to another hook, like
 * `useLinearNavigation`, which lets you change the tabbable element with
 * the arrow keys, `useTypeaheadNavigation`, which lets you change the
 * tabbable index with typeahead, or `useListNavigation(Complete)` if you
 * just want everything bundled together.
 *
 *
 * @hasChild {@link useRovingTabIndexChild}
 *
 * @compositeParams
 *
 * @param args - {@link UseRovingTabIndexParameters}
 * @returns - {@link UseRovingTabIndexReturnType}
 */
function useRovingTabIndex({
  managedChildrenReturn: {
    getChildren
  },
  rovingTabIndexParameters: {
    focusSelfParent: focusSelfParentUnstable,
    untabbable,
    untabbableBehavior,
    initiallyTabbedIndex,
    onTabbableIndexChange
  },
  refElementReturn: {
    getElement
  },
  processedIndexManglerReturn: {
    indexDemangler
  },
  ...void1
}) {
  return useMonitoring(function useRovingTabIndex() {
    const focusSelfParent = useStableCallback(focusSelfParentUnstable);
    untabbableBehavior ||= "focus-parent";
    const lastFocused = A$1(null);
    const getInitiallyTabbedIndex = useStableGetter(initiallyTabbedIndex);
    const getUntabbable = useStableGetter(untabbable);
    // Override the actual setter to include some extra logic related to avoiding hidden children, 
    // what to do when we're untabbable, what to do when we're tabbable but given `null`, etc.
    const setTabbableIndex = useStableCallback((updater, reason, fromUserInteraction) => {
      const children = getChildren();
      // Notify the relevant children that they should become tabbable/untabbable,
      // but also handle focus management when we changed due to user interaction
      return changeTabbableIndex(function returnModifiedTabbableIndex(prevIndex) {
        const document = getDocument$1();
        let nextIndex = typeof updater === "function" ? updater(prevIndex ?? null) : updater;
        const untabbable = getUntabbable();
        let parentElement = getElement();
        console.assert(!!parentElement);
        // Whether or not we're currently tabbable, make sure that when we switch from untabbable to tabbable,
        // that we know which index to switch back to.
        // TODO: Redundant with below?
        if (nextIndex != null) setLastNonNullIndex(nextIndex, reason);
        // If we're untabbable, then any attempt to set a new index simply fails and sets it to `null`.
        if (untabbable) {
          // Focus the parent, since it's what's in the tab order right now
          // TODO: Replace this and the other focus(getElement())
          // with a user-replaceable focusParent, like item.focusSelf?
          //
          // Also TODO: Should these take fromUserInteraction into consideration?
          // Do we always move focus when we become untabbable?
          if (document && !parentElement.contains(document.activeElement) && untabbableBehavior != 'leave-child-focused') focusSelfParent(parentElement);
          return null;
        }
        // If the requested index is hidden, then there's no need to focus any elements or run any extra logic.
        if (nextIndex == null) {
          // Focus the parent (more to be polite)
          // TODO: Find the next/prev element and focus that instead,
          // doable with the `tabbable` library, but it doesn't have a next() function or anything,
          // so that needs to be manually done with a TreeWalker or something?
          if (document && !parentElement.contains(document.activeElement) && untabbableBehavior != 'leave-child-focused') focusSelfParent(parentElement);
          return null;
        }
        // If we've made a change, and it was because the user clicked on it or something,
        // then focus that element too
        if (document && prevIndex != nextIndex) {
          const nextChild = children.getAt(nextIndex);
          if (nextChild != null && fromUserInteraction) {
            const element = nextChild.getElement();
            if (element) {
              if (document.activeElement == document.body || document.activeElement == null || !element.contains(document.activeElement)) {
                nextChild.focusSelf(element);
              }
            }
          }
        }
        // TODO: Redundant with above?
        if (nextIndex != null) setLastNonNullIndex(nextIndex, reason);
        // Finally, return the value the user requested the index be set to.
        return nextIndex ?? 0;
      }, reason);
    });
    // When we switch from tabbable to non/tabbable, we really want to remember the last tabbable child.
    // So every time we change the index for any reason, record that change as a back up here that can be restored.
    const [getLastNonNullIndex, setLastNonNullIndex] = usePassiveState(null, useCallback(() => initiallyTabbedIndex ?? 0, []));
    // Any time we switch to being untabbable, set the current tabbable index accordingly.
    y(() => {
      const document = getDocument$1();
      let shouldFocusParentAfterwards = !!document && getElement()?.contains(document.activeElement);
      if (untabbable) changeTabbableIndex(null, undefined);else {
        changeTabbableIndex(getLastNonNullIndex(), undefined);
      }
      if (shouldFocusParentAfterwards) {
        focusSelf(true);
      }
    }, [untabbable]);
    // TODO: This is jank, but necessary for onClosestFit.
    // There just needs to be a better focus management strategy in general to fix this.
    let avoidFocusingSelfOnMount = A$1(false);
    y(() => {
      let handle = setTimeout(() => {
        handle = setTimeout(() => {
          avoidFocusingSelfOnMount.current = true;
        }, 50);
      }, 50);
      return () => clearTimeout(handle);
    }, []);
    // Boilerplate related to notifying individual children when they become tabbable/untabbable
    const getTabbableAt = useCallback(child => {
      return child.getLocallyTabbable();
    }, []);
    const setTabbableAt = useCallback((child, t) => {
      if (child.index == 8) debugger;
      child.setLocallyTabbable(t);
    }, []);
    const isTabbableValid = useStableCallback(child => {
      return !child.untabbable;
    });
    const {
      changeIndex: changeTabbableIndex,
      getCurrentIndex: getTabbableIndex,
      reevaluateClosestFit
    } = useChildrenFlag({
      initialIndex: initiallyTabbedIndex ?? (untabbable ? null : 0),
      onIndexChange: useStableCallback((n, p, r) => {
        // Ensure that changes to `untabbable` don't affect the user-provided onTabbableIndexChange
        if (!(n == null && untabbable)) onTabbableIndexChange?.(n, p, r);
      }),
      getChildren,
      closestFit: true,
      getAt: getTabbableAt,
      isValid: isTabbableValid,
      setAt: setTabbableAt,
      indexDemangler,
      onClosestFit: index => {
        const document = getDocument$1();
        // Whenever we change due to a closest-fit switch, make sure we don't lose focus to the body
        // TODO: This is slightly janky -- we want to only mess with the user's focus when this list (or whatever) is the current focus,
        // but by the time we know something like "all the children have unmounted",
        // we've lot the ability to know if any of them were focused, at least easily.
        // So we just check to see if focus was lost to the body and, if so, send it somewhere useful.
        // This is liable to break, probably with blockingElements or something.
        if (avoidFocusingSelfOnMount.current && document && (document.activeElement == null || document.activeElement == document.body)) {
          let childElement = index == null ? null : getChildren().getAt(index)?.getElement();
          if (index == null || childElement == null) focus(findBackupFocus(getElement()));else getChildren().getAt(index)?.focusSelf(childElement);
        }
        avoidFocusingSelfOnMount.current = true;
      }
    });
    const focusSelf = useCallback((force, reason) => {
      const document = getDocument$1();
      const children = getChildren();
      let index = getTabbableIndex();
      const untabbable = getUntabbable();
      if (!untabbable) {
        // If we change from untabbable to tabbable, it's possible `index` might still be null.
        index ??= getInitiallyTabbedIndex() ?? children.getLowestIndex();
      }
      if (untabbable) {
        if (document && document.activeElement != getElement() && (force || untabbableBehavior != 'leave-child-focused')) {
          focusSelfParent(getElement());
        }
      } else if (!untabbable && index != null) {
        const element = children.getAt(index)?.getElement();
        children.getAt(index)?.focusSelf?.(element);
      } else setTabbableIndex(null, reason, true);
    }, []);
    const rovingTabIndexContext = useMemoObject({
      setTabbableIndex,
      parentFocusSelf: focusSelf,
      getInitiallyTabbedIndex: useCallback(() => {
        return initiallyTabbedIndex ?? (untabbable ? null : 0);
      }, []),
      reevaluateClosestFit,
      untabbable,
      getUntabbableBehavior: useStableGetter(untabbableBehavior),
      giveParentFocusedElement: useCallback(e => {
        lastFocused.current = e;
      }, [])
    });
    return {
      managedChildrenParameters: {
        onChildrenMountChange: useCallback(() => {
          reevaluateClosestFit(undefined);
        }, [reevaluateClosestFit])
      },
      rovingTabIndexReturn: {
        setTabbableIndex,
        getTabbableIndex,
        focusSelf
      },
      context: useMemoObject({
        rovingTabIndexContext
      }),
      props: useTagProps({
        // Note: Making this -1 instead of null is partially intentional --
        // it gives us time during useEffect to move focus back to the last focused element
        // (otherwise focus gets lost to the body, and useEffect thinks that it shouldn't
        // focus the child because focus wasn't within the list). 
        // It's also just consistent. 
        tabIndex: untabbable ? 0 : -1,
        // When a hidden child is clicked, some browsers focus the parent, just because it's got a role and a tabindex.
        onFocus: useStableCallback(e => {
          const parentElement = getElement();
          console.assert(!!parentElement);
          if (e.target == getElement()) {
            if (!untabbable) {
              focusSelf(false, e);
            }
          }
        })
      })
    };
  });
}
/**
 * @compositeParams
 *
 * @see {@link useRovingTabIndex}
 * @param args - {@link UseRovingTabIndexChildParameters}
 * @returns - {@link UseRovingTabIndexChildReturnType}
 */
function useRovingTabIndexChild({
  info: {
    index,
    untabbable: iAmUntabbable,
    ...void2
  },
  context: {
    rovingTabIndexContext: {
      giveParentFocusedElement,
      untabbable: parentIsUntabbable,
      getUntabbableBehavior,
      reevaluateClosestFit,
      setTabbableIndex,
      getInitiallyTabbedIndex,
      parentFocusSelf
    }
  },
  refElementReturn: {
    getElement
  },
  ...void3
}) {
  return useMonitoring(function useRovingTabIndexChild() {
    const [tabbable, st, getTabbable] = useState(() => {
      return getInitiallyTabbedIndex() === index;
    });
    const HACK = A$1(iAmUntabbable);
    const HACK2 = A$1(index);
    HACK.current = iAmUntabbable;
    HACK2.current = index;
    const setTabbable = useCallback(t => {
      if (typeof t === 'function') {
        return st(prev => {
          const ret = t(prev);
          if (ret && HACK.current) {
            debugger;
            console.error("setTabbable(true) called on a hidden child?");
          }
          //console.log(`setTabbable(${HACK2.current}, ${ret})`)
          return ret;
        });
      } else {
        if (t && HACK.current) {
          debugger;
          console.error("setTabbable(true) called on a hidden child?");
        }
        const ret = st(t);
        //console.log(`setTabbable(${HACK2.current}, ${t})`);
        return ret;
      }
    }, []);
    y(() => {
      if (tabbable) {
        giveParentFocusedElement(getElement());
      }
    }, [tabbable]);
    return {
      hasCurrentFocusParameters: {
        onCurrentFocusedInnerChanged: useStableCallback((focused, _prevFocused, e) => {
          if (focused) {
            const untabbableBehavior = getUntabbableBehavior();
            if (!parentIsUntabbable && !iAmUntabbable || untabbableBehavior != "focus-parent") setTabbableIndex(index, e, false);else parentFocusSelf(false);
          }
        })
      },
      rovingTabIndexChildReturn: {
        tabbable,
        getTabbable
      },
      info: {
        setLocallyTabbable: setTabbable,
        getLocallyTabbable: getTabbable
      },
      props: useTagProps({
        tabIndex: tabbable && !parentIsUntabbable ? 0 : -1,
        inert: iAmUntabbable // This inert is to prevent the edge case of clicking a hidden item and it focusing itself
      })
    };
  });
}

/**
 * Allows for the selection of a managed child by typing the given text associated with it.
 *
 * @see useListNavigation, which packages everything up together.
 *
 * @hasChild {@link useTypeaheadNavigationChild}
 *
 * @compositeParams
 */
function useTypeaheadNavigation({
  typeaheadNavigationParameters: {
    collator,
    typeaheadTimeout,
    noTypeahead,
    isValidForTypeaheadNavigation,
    onNavigateTypeahead,
    ...void3
  },
  rovingTabIndexReturn: {
    getTabbableIndex: getIndex,
    setTabbableIndex: setIndex,
    ...void1
  },
  ...void2
}) {
  return useMonitoring(function useTypeaheadNavigation() {
    // For typeahead, keep track of what our current "search" string is (if we have one)
    // and also clear it every 1000 ms since the last time it changed.
    // Next, keep a mapping of typeahead values to indices for faster searching.
    // And, for the user's sake, let them know when their typeahead can't match anything anymore
    const [getCurrentTypeahead, setCurrentTypeahead] = usePassiveState(useStableCallback((currentTypeahead, prev, reason) => {
      const handle = setTimeout(() => {
        setCurrentTypeahead(null, undefined);
        setTypeaheadStatus("none");
      }, typeaheadTimeout ?? 1000);
      updateBasedOnTypeaheadChange(currentTypeahead, reason);
      return () => clearTimeout(handle);
    }));
    //useTimeout({ timeout: typeaheadTimeout ?? 1000, callback: () => { setCurrentTypeahead(null); setInvalidTypeahead(null); }, triggerIndex: currentTypeahead });
    const sortedTypeaheadInfo = A$1([]);
    const [typeaheadStatus, setTypeaheadStatus] = useState("none");
    // Handle typeahead for input method editors as well
    // Essentially, when active, ignore further keys 
    // because we're waiting for a CompositionEnd event
    const [, setImeActive, getImeActive] = useState(false);
    // Because composition events fire *after* keydown events 
    // (but within the same task, which, TODO, could be browser-dependent),
    // we can use this to keep track of which event we're listening for on the first keydown.
    const [nextTypeaheadChar, setNextTypeaheadChar] = useState(null);
    _(() => {
      if (nextTypeaheadChar !== null) {
        setCurrentTypeahead(typeahead => (typeahead ?? "") + nextTypeaheadChar, undefined);
        setNextTypeaheadChar(null);
      }
    }, [nextTypeaheadChar]);
    const comparatorShared = useStableCallback((safeLhs, safeRhs) => {
      let compare;
      // For the purposes of typeahead, only compare a string of the same size as our currently typed string.
      // By normalizing them first, we ensure this byte-by-byte handling of raw character data works out okay.
      safeLhs = safeLhs.normalize("NFD");
      safeRhs = safeRhs.normalize("NFD");
      if (collator) compare = collator.compare(safeLhs, safeRhs);else compare = safeLhs.toLowerCase().localeCompare(safeRhs.toLowerCase() ?? "");
      return compare;
    });
    const insertingComparator = useStableCallback((lhs, rhs) => {
      if (typeof lhs === "string" && typeof rhs.text === "string") {
        return comparatorShared(lhs, rhs.text);
      }
      return lhs - rhs;
    });
    const typeaheadComparator = useStableCallback((lhs, rhs) => {
      if (typeof lhs === "string" && typeof rhs.text === "string") {
        // TODO: Doing this substring BEFORE normalization is, like, pretty not great?
        let trimmedRet = comparatorShared(lhs, rhs.text.substring(0, lhs.length));
        return trimmedRet;
      }
      return lhs - rhs;
    });
    const isDisabled = useStableGetter(noTypeahead);
    const propsStable = A$1(useTagProps({
      onKeyDown: useStableCallback(e => {
        if (isDisabled()) return;
        const imeActive = getImeActive();
        const key = e.key;
        // Not handled by typeahead (i.e. assume this is a keyboard shortcut)
        if (e.ctrlKey || e.metaKey) return;
        if (!imeActive && e.key === "Backspace") {
          // Remove the last character in a way that doesn't split UTF-16 surrogates.
          setCurrentTypeahead(t => t == null ? null : [...t].reverse().slice(1).reverse().join(""), e);
          e.preventDefault();
          e.stopPropagation();
          return;
        }
        // The key property represents the typed character OR the "named key attribute" of the key pressed.
        // There's no definite way to tell the difference, but for all intents and purposes
        // there are no one-character names, and there are no non-ASCII-alpha names.
        // Thus, any one-character or non-ASCII value for `key` is *almost certainly* a typed character.
        const isCharacterKey = key.length === 1 || !/^[A-Za-z]/.test(key);
        if (isCharacterKey) {
          if (key == " " && (getCurrentTypeahead() ?? "").trim().length == 0) ;else {
            e.preventDefault();
            e.stopPropagation();
            // Note: Won't be true for the first keydown
            // but will be overwritten before useLayoutEffect is called
            // to actually apply the change
            if (!imeActive) setNextTypeaheadChar(key);
          }
        }
      }),
      onCompositionStart: useStableCallback(e => {
        setNextTypeaheadChar(e.data);
        setImeActive(false);
      }),
      onCompositionEnd: useStableCallback(_e => {
        setImeActive(true);
      })
    }));
    const excludeSpace = useStableCallback(() => {
      return typeaheadStatus != "none";
    });
    return {
      context: useMemoObject({
        typeaheadNavigationContext: useMemoObject({
          insertingComparator,
          sortedTypeaheadInfo: sortedTypeaheadInfo.current,
          excludeSpace
        })
      }),
      typeaheadNavigationReturn: {
        getCurrentTypeahead,
        typeaheadStatus
      },
      propsStable: propsStable.current
    };
    function updateBasedOnTypeaheadChange(currentTypeahead, reason) {
      if (currentTypeahead && sortedTypeaheadInfo.current.length) {
        const sortedTypeaheadIndex = binarySearch(sortedTypeaheadInfo.current, currentTypeahead, typeaheadComparator);
        if (sortedTypeaheadIndex < 0) {
          // The user has typed an entry that doesn't exist in the list
          // (or more specifically "for which there is no entry that starts with that input")
          setTypeaheadStatus("invalid");
        } else {
          setTypeaheadStatus("valid");
          /*
            We know roughly where, in the sorted array of strings, our next typeahead location is.
            But roughly isn't good enough if there are multiple matches.
            To convert our sorted index to the unsorted index we need, we have to find the first
            element that matches us *and* (if any such exist) is *after* our current selection.
                     In other words, the only way typeahead moves backwards relative to our current
            position is if the only other option is behind us.
                     It's not specified in WAI-ARIA what to do in that case.  I suppose wrap back to the start?
            Though there's also a case for just going upwards to the nearest to prevent jumpiness.
            But if you're already doing typeahead on an unsorted list, like, jumpiness can't be avoided.
            I dunno. Going back to the start is the simplest though.
                     Basically what this does: Starting from where we found ourselves after our binary search,
            scan backwards and forwards through all adjacent entries that also compare equally so that
            we can find the one whose `unsortedIndex` is the lowest amongst all other equal strings
            (and also the lowest `unsortedIndex` yadda yadda except that it comes after us).
                     TODO: The binary search starts this off with a solid O(log n), but one-character
            searches are, thanks to pigeonhole principal, eventually guaranteed to become
            O(n*log n). This is annoying but probably not easily solvable? There could be an
            exception for one-character strings, but that's just kicking the can down
            the road. Maybe one or two characters would be good enough though.
          */
          // These are used to keep track of the candidates' positions in both our sorted array and the unsorted DOM.
          let lowestUnsortedIndexAll = null;
          let lowestSortedIndexAll = sortedTypeaheadIndex;
          // These two are only set for elements that are ahead of us, but the principle's the same otherwise
          let lowestUnsortedIndexNext = null;
          let lowestSortedIndexNext = sortedTypeaheadIndex;
          const updateBestFit = unsortedIndex => {
            if (!isValidForTypeaheadNavigation(unsortedIndex)) return;
            if (lowestUnsortedIndexAll == null || unsortedIndex < lowestUnsortedIndexAll) {
              lowestUnsortedIndexAll = unsortedIndex;
              lowestSortedIndexAll = i;
            }
            if ((lowestUnsortedIndexNext == null || unsortedIndex < lowestUnsortedIndexNext) && unsortedIndex > (getIndex() ?? -Infinity)) {
              lowestUnsortedIndexNext = unsortedIndex;
              lowestSortedIndexNext = i;
            }
          };
          let i = sortedTypeaheadIndex;
          while (i >= 0 && typeaheadComparator(currentTypeahead, sortedTypeaheadInfo.current[i]) == 0) {
            updateBestFit(sortedTypeaheadInfo.current[i].unsortedIndex);
            --i;
          }
          i = sortedTypeaheadIndex;
          while (i < sortedTypeaheadInfo.current.length && typeaheadComparator(currentTypeahead, sortedTypeaheadInfo.current[i]) == 0) {
            updateBestFit(sortedTypeaheadInfo.current[i].unsortedIndex);
            ++i;
          }
          let toSet = null;
          if (lowestUnsortedIndexNext !== null) toSet = sortedTypeaheadInfo.current[lowestSortedIndexNext].unsortedIndex;else if (lowestUnsortedIndexAll !== null) toSet = sortedTypeaheadInfo.current[lowestSortedIndexAll].unsortedIndex;
          if (toSet != null) {
            setIndex(toSet, reason, true);
            onNavigateTypeahead?.(toSet, reason);
          }
        }
      }
    }
  });
}
/**
 *
 * @compositeParams
 */
function useTypeaheadNavigationChild({
  info: {
    index,
    ...void1
  },
  //textContentReturn: { getTextContent, ...void5 },
  context: {
    typeaheadNavigationContext: {
      sortedTypeaheadInfo,
      insertingComparator,
      excludeSpace,
      ...void2
    }
  },
  ...void4
}) {
  return useMonitoring(function useTypeaheadNavigationChild() {
    const onTextContentChange = useCallback(text => {
      if (text) {
        // Find where to insert this item.
        // Because all index values should be unique, the returned sortedIndex
        // should always refer to a new location (i.e. be negative)   
        //
        // TODO: adding things on mount/unmount means that it's 
        // hard to make grid navigation typeahead work smoothly with tables -- 
        // every time we change columns, every row resorts itself, even though
        // each row should be able to just do that on mount.
        // 
        // We probably need to instead just sort on-demand, which is better for
        // performance anyway, but is tricky to code without major lag on the
        // first keystroke.
        //
        // Or we need to be able to support columns here, within typeahead?
        // Don't really like that idea (what if we want 3d navigation, woo-ooo-ooo).
        const sortedIndex = binarySearch(sortedTypeaheadInfo, text, insertingComparator);
        console.assert(sortedIndex < 0 || insertingComparator(sortedTypeaheadInfo[sortedIndex].text, {
          unsortedIndex: index,
          text
        }) == 0);
        if (sortedIndex < 0) {
          sortedTypeaheadInfo.splice(-sortedIndex - 1, 0, {
            text,
            unsortedIndex: index
          });
        } else {
          sortedTypeaheadInfo.splice(sortedIndex, 0, {
            text,
            unsortedIndex: index
          });
        }
        return () => {
          // When unmounting, find where we were and remove ourselves.
          // Again, we should always find ourselves because there should be no duplicate values if each index is unique.
          const sortedIndex = binarySearch(sortedTypeaheadInfo, text, insertingComparator);
          console.assert(sortedIndex < 0 || insertingComparator(sortedTypeaheadInfo[sortedIndex].text, {
            unsortedIndex: index,
            text
          }) == 0);
          if (sortedIndex >= 0) {
            sortedTypeaheadInfo.splice(sortedIndex, 1);
          }
        };
      }
    }, []);
    return {
      textContentParameters: {
        onTextContentChange
      },
      pressParameters: {
        excludeSpace
      }
    };
  });
}
/**
 * Your usual binary search implementation.
 *
 * It's used here to quickly find a good spot to start searching for our next typeahead candidate.
 * @param array - The array to search through
 * @param wanted - The value you'd like to find
 * @param comparator - Compares `wanted` with the current value in `array`
 * @returns A non-negative value if `wanted` was found, and a negative number if not.
 * The absolute value of this number, minus one, is where `wanted` *would* be found if it *was* in `array`
 *
 * #__NO_SIDE_EFFECTS__
 */
function binarySearch(array, wanted, comparator) {
  let firstIndex = 0;
  let lastIndex = array.length - 1;
  while (firstIndex <= lastIndex) {
    const testIndex = lastIndex + firstIndex >> 1;
    const comparisonResult = comparator(wanted, array[testIndex]);
    if (comparisonResult > 0) {
      firstIndex = testIndex + 1;
    } else if (comparisonResult < 0) {
      lastIndex = testIndex - 1;
    } else {
      return testIndex;
    }
  }
  return -firstIndex - 1;
}

/**
 * Implements proper keyboard navigation for components like listboxes, button groups, menus, etc.
 *
 * @remarks In the document order, there will be only one "focused" or "tabbable" element, making it act more like one complete unit in comparison to everything around it.
 * Navigating forwards/backwards can be done with the arrow keys, Home/End keys, or any text for typeahead to focus the next item that matches.
 *
 * @hasChild {@link useListNavigationChild}
 *
 * @compositeParams
 */
function useListNavigation({
  linearNavigationParameters,
  typeaheadNavigationParameters,
  rovingTabIndexParameters,
  managedChildrenReturn,
  refElementReturn,
  paginatedChildrenParameters,
  processedIndexManglerReturn,
  ...void1
}) {
  return useMonitoring(function useListNavigation() {
    const {
      props: propsRTI,
      rovingTabIndexReturn,
      managedChildrenParameters,
      context: contextRovingTabIndex,
      ...void2
    } = useRovingTabIndex({
      managedChildrenReturn,
      rovingTabIndexParameters,
      refElementReturn,
      processedIndexManglerReturn
    });
    const {
      propsStable: propsStableTN,
      typeaheadNavigationReturn,
      context: contextTypeahead,
      ...void3
    } = useTypeaheadNavigation({
      rovingTabIndexReturn,
      typeaheadNavigationParameters
    });
    const {
      propsStable: propsStableLN,
      linearNavigationReturn,
      ...void4
    } = useLinearNavigation({
      rovingTabIndexReturn,
      linearNavigationParameters,
      paginatedChildrenParameters,
      processedIndexManglerReturn
    });
    // Merge the props while keeping them stable
    // (TODO: We run this merge logic every render but only need the first render's result because it's stable)
    //const p = useMergedProps<ParentOrChildElement>(propsStableTN, propsStableLN);
    //const {propsStable} = useRef<ElementProps<ParentOrChildElement>>(p)
    return {
      managedChildrenParameters,
      rovingTabIndexReturn,
      typeaheadNavigationReturn,
      context: useMemoObject({
        ...contextRovingTabIndex,
        ...contextTypeahead
      }),
      linearNavigationReturn,
      props: useMergedProps(propsStableLN, propsStableTN, propsRTI)
    };
  });
}
/**
 * @compositeParams
 */
function useListNavigationChild({
  info: {
    index,
    untabbable,
    ...void1
  },
  context,
  refElementReturn,
  ...void2
}) {
  return useMonitoring(function useListNavigationChild() {
    const {
      props,
      ...rticr
    } = useRovingTabIndexChild({
      context,
      info: {
        index,
        untabbable
      },
      refElementReturn
    });
    const {
      ...tncr
    } = useTypeaheadNavigationChild({
      context,
      info: {
        index
      }
    });
    return {
      props,
      ...tncr,
      ...rticr
    };
  });
}

/**
 * Allows children to stop themselves from rendering outside of a narrow range.
 *
 * @remarks Each child will still render itself, but it is aware of if it is within/outside of the pagination range, and simply return empty.
 *
 * @hasChild {@link usePaginatedChild}
 *
 * @compositeParams
 */
function usePaginatedChildren({
  managedChildrenReturn: {
    getChildren
  },
  paginatedChildrenParameters: {
    paginationMax,
    paginationMin,
    childCount
  },
  rovingTabIndexReturn: {
    getTabbableIndex,
    setTabbableIndex
  },
  childrenHaveFocusReturn: {
    getAnyFocused
  },
  processedIndexManglerReturn: {
    indexDemangler,
    indexMangler
  }
}) {
  return useMonitoring(function usePaginatedChildren() {
    const parentIsPaginated = paginationMin != null || paginationMax != null;
    const lastPagination = A$1({
      paginationMax: null,
      paginationMin: null
    });
    const refreshPagination = useCallback((paginationMin, paginationMax) => {
      const childMax = getChildren().getHighestIndex() + 1;
      const childMin = getChildren().getLowestIndex();
      for (let i = childMin; i <= childMax; ++i) {
        const visible = i >= (paginationMin ?? -Infinity) && i < (paginationMax ?? Infinity);
        getChildren().getAt(indexDemangler(i))?.setPaginationVisible(visible);
        if (visible && (paginationMax != null || paginationMin != null)) getChildren().getAt(indexDemangler(i))?.setChildCountIfPaginated(getChildren().getHighestIndex() + 1);
      }
    }, [/* Must be empty */]);
    y(() => {
      // At this point, the children have not yet updated themselves to match the pagination.
      // We need to tell them to update, but also handle where the focus is.
      // If a current list item is focused, then we need to move focus to a paginated one
      // but we can't do it until they all re-render...
      // TODO: Something better than setTimeout for this, please...
      let tabbableIndex = getTabbableIndex();
      if (tabbableIndex != null) {
        let shouldFocus = getAnyFocused() || false;
        setTimeout(() => {
          if (paginationMin != null && tabbableIndex < paginationMin) {
            setTabbableIndex(paginationMin, undefined, shouldFocus); // TODO: This isn't a user interaction, but we need to ensure the old element doesn't remain focused, yeesh.
          } else if (paginationMax != null && tabbableIndex >= paginationMax) {
            let next = paginationMax - 1;
            if (next == -1) next = null;
            setTabbableIndex(next, undefined, shouldFocus); // TODO: This isn't a user interaction, but we need to ensure the old element doesn't remain focused, yeesh.
          }
        }, 1);
      }
      refreshPagination(paginationMin, paginationMax);
      lastPagination.current.paginationMax = paginationMax ?? null;
      lastPagination.current.paginationMin = paginationMin ?? null;
    }, [paginationMax, paginationMin]);
    const pmin = A$1(paginationMin);
    const pmax = A$1(paginationMax);
    pmin.current = paginationMin;
    pmax.current = paginationMax;
    const getDefaultPaginationVisible = useCallback(i => {
      return i >= (pmin.current ?? -Infinity) && i < (pmax.current ?? Infinity);
    }, []);
    const paginatedChildContext = T$1(() => ({
      parentIsPaginated,
      getDefaultPaginationVisible
    }), [parentIsPaginated]);
    const getPaginationMin = useStableGetter(paginationMin);
    const getPaginationMax = useStableGetter(paginationMax);
    _(() => {
      const paginationMin = getPaginationMin();
      const paginationMax = getPaginationMax();
      const count = childCount ?? 0;
      if (paginationMax != null || paginationMin != null) {
        const min = paginationMin ?? 0;
        const max = paginationMax ?? count;
        for (let i = min; i < max; ++i) {
          getChildren().getAt(i)?.setChildCountIfPaginated(count);
        }
      }
    }, [childCount]);
    return {
      context: T$1(() => ({
        paginatedChildContext
      }), [paginatedChildContext]),
      paginatedChildrenReturn: {
        refreshPagination
      }
    };
  });
}
/**
 * Child hook for {@link usePaginatedChildren}.
 *
 * @remarks When a child is paginated, it still renders itself (i.e. it calls this hook, so it's rendering),
 * so check `hideBecausePaginated` and, if it's true, avoid doing any heavy logic and render with `display: none`.
 *
 * @compositeParams
 */
function usePaginatedChild({
  info: {
    index
  },
  context: {
    paginatedChildContext: {
      parentIsPaginated,
      getDefaultPaginationVisible
    }
  }
}) {
  return useMonitoring(function usePaginatedChild() {
    const [childCountIfPaginated, setChildCountIfPaginated] = useState(null);
    const [paginatedVisible, setPaginatedVisible] = useState(parentIsPaginated ? getDefaultPaginationVisible(index) : true);
    return {
      props: useTagProps(!parentIsPaginated ? {} : {
        "aria-setsize": childCountIfPaginated ?? undefined,
        "aria-posinset": index + 1
      }),
      paginatedChildReturn: {
        /*paginatedVisible,*/parentIsPaginated,
        hideBecausePaginated: parentIsPaginated ? !paginatedVisible : false
      },
      info: {
        setPaginationVisible: setPaginatedVisible,
        setChildCountIfPaginated
      }
    };
  });
}

/**
 * Hook that allows for the **direct descendant** children of this component to be re-ordered and sorted.
 *
 * @remarks *This is **separate** from "managed" children, which can be any level of child needed! Sortable/rearrangeable children must be **direct descendants** of the parent that uses this hook!*
 *
 * It's recommended to use this in conjunction with `useListNavigation`; it takes the same `indexMangler` and `indexDemangler`
 * functions that this hook returns. `useListNavigation` does not directly use this hook because, as mentioned,
 * this hook imposes serious restrictions on child structure, while `useListNavigation` allows anything.
 *
 * Besides the prop-modifying hook that's returned, the `sort` function that's returned will
 * sort all children according to their value from the `getValue` argument you pass in.
 *
 * If you want to perform some re-ordering operation that's *not* a sort, you can manually
 * re-map each child's position using `mangleMap` and `demangleMap`, which convert between
 * sorted and unsorted index positions.
 *
 * Again, unlike some other hooks, **these children must be direct descendants**. This is because
 * the prop-modifying hook inspects the given children, then re-creates them with new `key`s.
 * Because keys are given special treatment and a child has no way of modifying its own key
 * there's no other time or place this can happen other than exactly within the parent component's render function.
 *
 * @compositeParams
 */
function useRearrangeableChildren({
  rearrangeableChildrenParameters: {
    children: childrenIn
  },
  processedIndexManglerParameters: {
    getIndex,
    getSortValueAt
  },
  managedChildrenReturn: {
    getChildren: getManagedChildren
  },
  context: {
    processedIndexManglerContext: {
      mangler
    }
  }
}) {
  return useMonitoring(function useRearrangeableChildren() {
    const allChildPositions = A$1([]);
    const [refreshIndex, setRefreshIndex] = d(0);
    const childrenOut = T$1(() => {
      const rearrangedChildren = mangler.setChildren(childrenIn);
      for (const ch of rearrangedChildren) {
        const index = ch == null ? null : getIndex(ch);
        const mangledIndex = index == null ? null : mangler.map(index, "demangled", "mangled");
        index == null ? null : mangler.map(index, "mangled", "demangled");
        if (index != null && mangledIndex != null) {
          const info = getManagedChildren().getAt(index);
          const info2 = getManagedChildren().getAt(mangledIndex);
          if (info && info2) {
            const element = info2.getElement();
            const rect = element?.getBoundingClientRect();
            if (rect) {
              // TODO: This still fires even if the index hasn't changed for this child.
              // Find a way to bail out if this child's position hasn't changed
              info2.updateFLIPAnimation(allChildPositions.current[mangledIndex] = {
                left: rect.left,
                top: rect.top,
                width: rect.width,
                height: rect.height
              });
            }
          }
        }
      }
      return rearrangedChildren;
    }, [childrenIn, refreshIndex]);
    const getFLIPStart = useCallback(index => {
      return allChildPositions.current[index];
    }, []);
    return {
      rearrangeableChildrenReturn: {
        children: childrenOut,
        refresh: useStableCallback(() => {
          setRefreshIndex(p => ++p);
        }, [])
      },
      context: useMemoObject({
        rearrangeableChildrenContext: useMemoObject({
          getFLIPStart
        })
      })
    };
  });
}
/**
 * @compositeParams
 */
function useRearrangeableChild({
  context,
  info: {
    getElement,
    index
  },
  rearrangeableChildParameters: {
    cssProperty,
    duration
  }
}) {
  return useMonitoring(function useRearrangeableChild() {
    const {
      rearrangeableChildrenContext: {
        getFLIPStart
      }
    } = context;
    const getCssProperty = useStableGetter(cssProperty);
    const getDuration = useStableGetter(duration);
    // TODO: This ref doesn't work correctly? Or info.updateFLIPAnimation isn't update right? Not sure.
    // Either way, doing something like reversing twice results in it working right the first time,
    // but incorrect the second time around, because the position is from the wrong index.
    const flipStartPosition = A$1(undefined);
    const [animationIndex, setAnimationIndex] = d(0);
    _(() => {
      const duration = getDuration();
      const cssProperty = getCssProperty();
      if (cssProperty && animationIndex > 0) {
        const element = getElement();
        const first = getFLIPStart(index); //flipStartPosition.current;
        //const mid = element.getBoundingClientRect();
        //console.log(mid);
        // Forcibly end any previous transitions.
        // Otherwise, interruptions end up causing exponentially larger transforms.
        // Which, TODO, is definitely fixable.
        if (cssProperty === 'translate') element.style.scale = element.style.translate = '';else if (cssProperty === 'transform') element.style.transform = '';
        element.style.transition = 'none';
        const last = element.getBoundingClientRect();
        if (first && last) {
          const dx = first.left - last.left;
          const dy = first.top - last.top;
          const dsx = first.width / last.width;
          const dsy = first.height / last.height;
          if (cssProperty === 'translate') {
            element.style.translate = `${dx}px ${dy}px`;
            element.style.scale = `${dsx} ${dsy}`;
          } else if (cssProperty === 'transform') {
            element.style.transform = `translate(${dx}px, ${dy}px) scale(${dsx}, ${dsy})`;
          }
          element.style.transition = cssProperty === 'translate' ? 'translate 0s, scale 0s' : `transform 0s`;
          requestAnimationFrame(() => {
            if (cssProperty === 'translate') element.style.scale = element.style.translate = '';else if (cssProperty === 'transform') element.style.transform = '';
            element.style.transition = cssProperty === 'translate' ? `translate ${duration}, scale ${duration}` : `transform ${duration}`;
          });
        }
      }
    }, [index, animationIndex]);
    const updateFLIPAnimation = useCallback(position => {
      flipStartPosition.current = position;
      setAnimationIndex(p => ++p);
    }, []);
    return {
      info: {
        updateFLIPAnimation
      }
    };
  });
}

/**
 * Allows children to each wait until the previous has finished rendering before itself rendering.
 * E.G. Child #3 waits until #2 renders. #2 waits until #1 renders, etc.
 *
 * @remarks If a child appears on-screen for 100ms then it will be forcibly displayed.
 *
 * When using the child hook, it's highly recommended to separate out any heavy logic into
 * a separate component that won't be rendered until it's de-staggered into visibility.
 *
 * @hasChild {@link useStaggeredChild}
 *
 * @compositeParams
 */
function useStaggeredChildren({
  managedChildrenReturn: {
    getChildren
  },
  staggeredChildrenParameters: {
    staggered,
    childCount
  }
  //refElementReturn: { getElement }
}) {
  return useMonitoring(function useStaggeredChildren() {
    // TODO: Right now, staggering doesn't take into consideration reordering via indexMangler and indexDemangler.
    // This isn't a huge deal because the IntersectionObserver takes care of any holes, but it can look a bit odd
    // until they fill in.
    const [currentlyStaggering, setCurrentlyStaggering] = useState(staggered);
    // This is the highest index that we want to show, inclusive.
    const getTargetStaggerIndex = useStableGetter((childCount || 0) - 1);
    // By default, when a child mounts, we tell the next child to mount and simply repeat.
    // If a child is missing, however, it will break that chain.
    // To guard against that, we also wait for 50ms, and if it hasn't loaded by then, we just continue as if it did.
    const timeoutHandle = A$1(-1);
    const resetEmergencyTimeout = useCallback(() => {
      if (timeoutHandle.current != -1) clearTimeout(timeoutHandle.current);
      // We've gone this long without hearing the next child mount itself...
      // We need to continue.
      timeoutHandle.current = setTimeout(() => {
        // This is split up into two setTimeouts for timing reasons:
        // If it's taking a long time to render a child, it's possible that we'll
        // trip this emergency timeout even though the child renders itself perfectly fine.
        // Due to the way timeouts are ordered, we want to ensure this timeout runs AFTER
        // the component's effect timeout. So we just wait again for a short tick.
        timeoutHandle.current = setTimeout(() => {
          timeoutHandle.current = -1;
          let target = getTargetStaggerIndex();
          setDisplayedStaggerIndex(prev => {
            let next = Math.min(target || 0, (prev || 0) + 1);
            while (next <= (getChildCount() || 0) && getChildren().getAt(next)?.getStaggeredVisible() == true) ++next;
            return next;
          });
        }, 10);
      }, 100);
    }, [/* Must be empty */]);
    // The target index is the index that we're "animating" to.
    // Each child simply sets this to the highest value ever seen.
    y(() => {
      // Any time our target changes,
      // ensure our timeout is running, and start a new one if not
      if (timeoutHandle.current == -1) {
        resetEmergencyTimeout();
        // If there's no timeout running, then that also means we're not waiting for a child to mount.
        // So ask a child to mount and then wait for that child to mount.
        let current = getDisplayedStaggerIndex();
        let next = Math.min(childCount ?? 0, (current ?? 0) + 1);
        setDisplayedStaggerIndex(next);
      }
    }, [childCount]);
    const [getDisplayedStaggerIndex, setDisplayedStaggerIndex] = usePassiveState(useCallback((newIndex, prevIndex) => {
      if (newIndex == null || !s.current) {
        return;
      }
      setCurrentlyStaggering(newIndex < (getTargetStaggerIndex() ?? 0));
      // It's time to show the next child,
      // either because the current one finished mounting,
      // or because our emergency backup timeout fired.
      //
      // Either way, tell the next child to show itself.
      // Also make sure that anyone we skipped somehow show themselves as well.
      // (queueMicrotask prevents warnings if debounceRendering is immediate)
      queueMicrotask(() => {
        for (let i = (prevIndex ?? 0) - 1; i <= newIndex; ++i) {
          getChildren().getAt(i)?.setStaggeredVisible(true);
        }
      });
      // Set a new emergency timeout
      resetEmergencyTimeout();
    }, [/* Must be empty */]), returnNull);
    const parentIsStaggered = !!staggered;
    const getChildCount = useStableGetter(childCount);
    const childCallsThisToTellTheParentToMountTheNextOne = useCallback(justMountedChildIndex => {
      setDisplayedStaggerIndex(prevIndex => {
        let next = Math.min(getTargetStaggerIndex() ?? 0,
        // Don't go higher than the highest child
        1 + Math.max(prevIndex ?? 0, justMountedChildIndex) // Go one higher than the child that just mounted itself or any previously mounted child (TODO: Is that last bit working as intended?)
        );
        // Skip over any children that have already been made visible ahead
        // (through IntersectionObserver)
        while (next < (getChildCount() || 0) && getChildren().getAt(next)?.getStaggeredVisible()) {
          ++next;
        }
        return next;
      });
    }, []);
    // TODO: Modification during render (but it's really, really hard to avoid here,
    // but also probably fine because parents render before children? Does that include suspense?)
    const s = A$1(parentIsStaggered);
    s.current = parentIsStaggered;
    const getDefaultStaggeredVisible = useCallback(i => {
      if (s.current) {
        const staggerIndex = getDisplayedStaggerIndex();
        if (staggerIndex == null) return false;
        return i < staggerIndex;
      } else {
        return true;
      }
    }, []);
    const intersectionObserver = A$1(null);
    const elementToIndex = A$1(new Map());
    const setElementToIndexMap = useCallback((index, element) => {
      elementToIndex.current.set(element, index);
    }, []);
    const getIntersectionObserver = useCallback(() => intersectionObserver.current, []);
    const staggeredChildContext = T$1(() => ({
      parentIsStaggered,
      childCallsThisToTellTheParentToMountTheNextOne,
      getDefaultStaggeredVisible,
      getIntersectionObserver,
      setElementToIndexMap
    }), [parentIsStaggered]);
    y(() => {
      const io = intersectionObserver.current = new IntersectionObserver(entries => {
        for (let entry of entries) {
          if (entry.isIntersecting) {
            const index = elementToIndex.current.get(entry.target);
            if (index != null) {
              getChildren().getAt(index)?.setStaggeredVisible(true);
            }
          }
        }
      });
      return () => io.disconnect();
    }, []);
    return {
      staggeredChildrenReturn: {
        stillStaggering: currentlyStaggering
      },
      context: T$1(() => ({
        staggeredChildContext
      }), [staggeredChildContext])
    };
  });
}
/**
 * Child hook for {@link useStaggeredChildren}.
 *
 * @remarks When a child is staggered, it still renders itself (i.e. it calls this hook, so it's rendering),
 * so check `hideBecauseStaggered` and, if it's true, avoid doing any heavy logic. Ideally that kind of heavy
 * logic/CSS will be in a sub-child that can be either rendered or not depending on `hideBecauseStaggered`.
 *
 * @compositeParams
 */
function useStaggeredChild({
  info: {
    index
  },
  //refElementReturn: { getElement },
  context: {
    staggeredChildContext: {
      parentIsStaggered,
      getDefaultStaggeredVisible,
      childCallsThisToTellTheParentToMountTheNextOne,
      getIntersectionObserver,
      setElementToIndexMap
    }
  }
}) {
  return useMonitoring(function useStaggeredChild() {
    const [staggeredVisible, setStaggeredVisible, getStaggeredVisible] = useState(getDefaultStaggeredVisible(index));
    // Controls whether we ask the parent to start mounting children after us.
    // (We don't ask when the child becomes visible due to screen-scrolling,
    // only when it becomes visible because we were next in line to do so)
    const becauseScreen = A$1(false);
    usePassiveState(useStableCallback((next, _prev, _reason) => {
      if (staggeredVisible) return;
      if (next) {
        const io = getIntersectionObserver();
        io?.unobserve(e.current);
        setStaggeredVisible(true);
        becauseScreen.current = true;
      }
    }), returnFalse);
    // This isn't called during useEffect here, because we want to wait for the
    // "heavier processing" child to render, instead of us (the "ligher pre-processing" child).
    // So we return the effect we want to run and let the caller run it as appropriate.
    // (In theory this could be returned as, like, useStaggeredChildChild instead but I really don't wanna do that)
    const childUseEffect = useCallback(() => {
      if (!becauseScreen.current && parentIsStaggered && staggeredVisible) {
        if (parentIsStaggered && staggeredVisible) {
          childCallsThisToTellTheParentToMountTheNextOne(index);
        } else if (!parentIsStaggered) {
          // Ensure that if we mount unstaggered and change to staggered, we start at the end
          childCallsThisToTellTheParentToMountTheNextOne(index);
        }
      }
    }, [index, parentIsStaggered && staggeredVisible]);
    // This is the element that the IntersectionObserver will watch.
    const e = A$1(null);
    return {
      props: useTagProps(!parentIsStaggered ? {} : {
        "aria-busy": (!staggeredVisible).toString()
      }),
      staggeredChildReturn: {
        parentIsStaggered,
        hideBecauseStaggered: parentIsStaggered ? !staggeredVisible : false,
        childUseEffect
      },
      info: {
        setStaggeredVisible,
        getStaggeredVisible
      },
      refElementParameters: {
        onElementChange: useStableCallback(element => {
          setElementToIndexMap(index, element);
          e.current = element || e.current;
          const io = getIntersectionObserver();
          if (e.current) {
            io?.observe(e.current);
          } else {
            io?.unobserve(e.current);
          }
        })
      }
    };
  });
}

/**
 * Hook that allows for optimization (staggering, pagination) and rearranging (sorting, shuffling, etc.) of large arrays of children.
 *
 * @remarks This is separate from `useManagedChildren` (and its descendants, like `useListNavigation),
 * but takes advantage of its flexibility (especially with its allowing for "holes" of missing children)
 * to prevent all children from rendering at once on mount.
 *
 * Staggering and pagination exists because no matter how well optimized your CSS and Javascript for each child is,
 * eventually some number of children will cause jank when mounting them all at once. Considering that maybe 1% of them
 * will actually be visible at first within the screen, with the other 99% wasting time doing things off-screen, it makes
 * sense to only show what's necessary at first, and delay as much as possible.
 *
 * If you're loading a dynamic list of data, where you don't know the length in advance
 * (but that it could be more than, say, 30 - 50 at any point),
 * this is all but essential for a good user experience.
 *
 * * 100 children without staggering/pagination is "start to feel jank on mobile"
 * * 1000 children without staggering/pagination is "start to feel jank on desktop"
 * * 10000 children staggered/paginated is "start to feel jank on desktop"
 * * 100000 children is "you're probably out of memory"
 *
 * <br />
 *
 * Additionally, this hook allows for reorganization of its children. A default `sort` and `shuffle` are provided,
 * but you can implement any arbitrary reordering.
 *
 * <br />
 *
 * The main limitation of this hook is that, unlike hooks that use/derive from `useManagedChildren`
 * (in which children can arbitrarily be anywhere descendant in the tree), children here ***must***
 * be in a single, sequential array (gaps are still fine).
 *
 * This is separate from `useListNavigation` and friends for performance reasons -- if a child is
 * hidden because it's paginated out or not staggered in yet, then we want to avoid running the normal
 * child list logic (which is as fast as possible, but still only so fast).
 *
 * Similarly, it can be useful for the children to be in a separate component for performance reasons, which
 * is another reason to separate this logic from `useListNavigation`.
 *
 * Finally, `useListNavigation` imposes no requirements on how your children are laid out in the DOM, but
 * this hook **requires** all children be in one contiguous array.
 *
 * @hasChild {@link useProcessedChild}
 *
 * @compositeParams
 */
function useProcessedChildren({
  rearrangeableChildrenParameters,
  paginatedChildrenParameters,
  staggeredChildrenParameters,
  context,
  managedChildrenParameters,
  processedIndexManglerParameters
}) {
  return useMonitoring(function useProcessedChildren() {
    const childCount = rearrangeableChildrenParameters.children.length;
    const {
      paginationMax,
      paginationMin
    } = paginatedChildrenParameters;
    const {
      staggered
    } = staggeredChildrenParameters;
    const {
      context: {
        managedChildContext
      },
      managedChildrenReturn
    } = useManagedChildren({
      managedChildrenParameters
    });
    useStableCallback(() => {
      refreshPagination(paginationMin, paginationMax);
    });
    const {
      processedIndexManglerContext: {
        indexDemangler,
        indexMangler
      }
    } = context;
    const {
      rearrangeableChildrenReturn,
      context: {
        rearrangeableChildrenContext
      }
    } = useRearrangeableChildren({
      context,
      processedIndexManglerParameters,
      rearrangeableChildrenParameters,
      managedChildrenReturn
    });
    const {
      paginatedChildrenReturn,
      paginatedChildrenReturn: {
        refreshPagination
      },
      context: {
        paginatedChildContext
      }
    } = usePaginatedChildren({
      managedChildrenReturn: {
        getChildren: useStableCallback(() => managedChildContext.getChildren())
      },
      rovingTabIndexReturn: context.processedChildrenContext,
      childrenHaveFocusReturn: context.processedChildrenContext,
      paginatedChildrenParameters: {
        paginationMax,
        paginationMin,
        childCount
      },
      processedIndexManglerReturn: {
        indexDemangler,
        indexMangler
      }
    });
    const {
      context: {
        staggeredChildContext
      },
      staggeredChildrenReturn
    } = useStaggeredChildren({
      managedChildrenReturn: {
        getChildren: useStableCallback(() => managedChildContext.getChildren())
      },
      staggeredChildrenParameters: {
        staggered,
        childCount
      }
      //refElementReturn: { getElement: context.processedChildrenContext.getElement }
    });
    return {
      rearrangeableChildrenReturn,
      staggeredChildrenReturn,
      paginatedChildrenReturn,
      context: useMemoObject({
        staggeredChildContext,
        paginatedChildContext,
        managedChildContext,
        rearrangeableChildrenContext
      })
    };
  });
}
/**
 * @compositeParams
 */
function useProcessedChild({
  context,
  info: {
    index,
    getElement,
    ...uinfo
  },
  rearrangeableChildParameters,
  ...void1
}) {
  return useMonitoring(function useProcessedChild() {
    const {
      paginatedChildContext,
      staggeredChildContext
    } = context;
    const {
      info: {
        updateFLIPAnimation
      }
    } = useRearrangeableChild({
      context,
      info: {
        getElement,
        index
      },
      rearrangeableChildParameters
    });
    const {
      info: {
        setChildCountIfPaginated,
        setPaginationVisible
      },
      paginatedChildReturn,
      props: propsPaginated
    } = usePaginatedChild({
      context: {
        paginatedChildContext
      },
      info: {
        index
      }
    });
    const {
      info: {
        setStaggeredVisible,
        getStaggeredVisible
      },
      staggeredChildReturn,
      props: propsStaggered,
      refElementParameters
    } = useStaggeredChild({
      context: {
        staggeredChildContext
      },
      info: {
        index
      }
    });
    const {
      managedChildReturn
    } = useManagedChild({
      context,
      info: {
        index,
        setChildCountIfPaginated,
        setPaginationVisible,
        setStaggeredVisible,
        getStaggeredVisible,
        updateFLIPAnimation,
        getElement,
        ...uinfo
      }
    });
    const propsRet = useMergedProps(propsStaggered, propsPaginated);
    return {
      props: propsRet,
      managedChildReturn,
      paginatedChildReturn,
      staggeredChildReturn,
      refElementParameters
    };
  });
}

/**
 * @compositeParams
 */
function useProcessedIndexMangler({
  processedIndexManglerParameters: {
    getIndex,
    getSortValueAt: getSortValue,
    compare
  }
}) {
  return useMonitoring(function useProcessedIndexMangler() {
    const mangler = T$1(() => new ProcessedIndexMangler(getIndex, getSortValue, compare ?? defaultCompare), [getIndex, getSortValue]);
    const indexDemangler = useCallback(n => mangler.map(n, "mangled", "demangled") ?? n, []);
    const indexMangler = useCallback(n => mangler.map(n, "demangled", "mangled") ?? n, []);
    const context = useMemoObject({
      processedIndexManglerContext: useMemoObject({
        mangler,
        indexDemangler,
        indexMangler
      })
    });
    return {
      processedIndexManglerReturn: {
        mangler,
        indexMangler,
        indexDemangler
      },
      context
    };
  });
}
class ProcessedIndexMangler {
  getIndex;
  getSortValue;
  compare;
  constructor(getIndex, getSortValue, compare) {
    this.getIndex = getIndex;
    this.getSortValue = getSortValue;
    this.compare = compare;
  }
  map(index, from, to) {
    if (index == undefined) return undefined;
    switch (from) {
      /*case 'processed': {
          //let unmangledIndex = this.getIndex(this._originalChildren[index]);
          switch (to) {
              case 'processed': return index;
              case 'demangled': return this._processedToDemangled.get(index); //return unmangledIndex;
              case 'mangled': return this._processedToMangled.get(index); //return unmangledIndex == undefined ? undefined : this._unmangledToMangled.get(unmangledIndex);
          }
      }*/
      case 'demangled':
        {
          switch (to) {
            case 'demangled':
              return index;
            case 'mangled':
              return this._demangledToMangled.get(index);
            //case 'processed': return this._demangledToProcessed.get(index);
          }
        }
      case 'mangled':
        {
          switch (to) {
            case 'mangled':
              return index;
            case 'demangled':
              return this._mangledToDemangled.get(index);
            //case 'processed': return this._mangledToProcessed.get(index);
          }
        }
    }
  }
  _originalChildren = [];
  sortedChildren = [];
  _mangledToDemangled = new Map();
  _demangledToMangled = new Map();
  //private _demangledToProcessed = new Map<number, number>();
  //private _mangledToProcessed = new Map<number, number>();
  //private _processedToDemangled = new Map<number, number>();
  //private _processedToMangled = new Map<number, number>();
  setChildren(children) {
    this._mangledToDemangled.clear();
    this._demangledToMangled.clear();
    //this._processedToDemangled.clear();
    //this._processedToMangled.clear();
    //this._demangledToProcessed.clear();
    //this._mangledToProcessed.clear();
    this._originalChildren = children.slice();
    this.sortedChildren = [];
    let sortedChildrenWithoutNulls = this._originalChildren.slice().map((vnode, processedIndex) => {
      const unmangledIndex = vnode == null ? undefined : this.getIndex(vnode);
      const sortValue = unmangledIndex == null ? null : this.getSortValue(unmangledIndex);
      return {
        vnode,
        unmangledIndex,
        sortValue,
        processedIndex
      };
    }).toSorted((lhs, rhs) => this.compare(lhs.sortValue, rhs.sortValue));
    let i = 0; // processedOriginalIndex, also the index to the output array
    let j = 0; // processedSortedIndex
    // This is a kind of, like, splice/zip of the two arrays, while setting the mappings between them.
    // It's kind of hard to follow--wish you could put, like, hand-drawn, diagrams in comments.
    while (true) {
      if (i >= children.length) break;
      if (j >= sortedChildrenWithoutNulls.length) break;
      let processedOriginalIndex = i;
      const originalChild = children[processedOriginalIndex];
      const originalIndex = originalChild == null ? undefined : this.getIndex(originalChild);
      if (originalIndex == null) {
        // This was a hole in the original array, so just copy it over directly to its original spot.
        this.sortedChildren[i] = originalChild;
        // Then move onto the next child.
        ++i;
      } else {
        // This is a known, managed child. Find all its mappings and recreate it with a new key.
        // To find the sortedChild this originalChild matches, first make sure we skip over holes in the sorted array
        // (This should only happen once, the first time, because they're usually sorted to the front)
        while (j < sortedChildrenWithoutNulls.length && sortedChildrenWithoutNulls[j].unmangledIndex == null) {
          ++j;
        }
        // This line should never happen
        if (sortedChildrenWithoutNulls[j].unmangledIndex == null) {
          /* eslint-disable no-debugger */
          debugger;
          break;
        }
        let processedSortedIndex = j;
        const sortedChild = sortedChildrenWithoutNulls[processedSortedIndex];
        const sortedIndex = sortedChild.unmangledIndex;
        this._mangledToDemangled.set(originalIndex, sortedIndex);
        this._demangledToMangled.set(sortedIndex, originalIndex);
        //this._processedToMangled.set(processedOriginalIndex, sortedIndex);
        //this._processedToDemangled.set(processedOriginalIndex, originalIndex);
        //this._mangledToProcessed.set(sortedIndex, processedOriginalIndex);
        //this._demangledToProcessed.set(originalIndex, processedOriginalIndex);
        this.sortedChildren[i] = _$1(sortedChild.vnode.type, {
          ...sortedChild.vnode.props,
          mangledIndex: sortedIndex,
          demangledIndex: originalIndex,
          key: originalIndex
        }); //sortedChild.vnode;
        ++i;
        ++j;
      }
    }
    return this.sortedChildren;
  }
}
/**
 * #__NO_SIDE_EFFECTS__
 */
function defaultCompare(lhs, rhs) {
  if (lhs == null || rhs == null) {
    if (lhs == null) return -1;
    if (rhs == null) return 1;
  }
  // Note: Unlike lhs - rhs, this works with bare strings.
  return lhs > rhs ? 1 : lhs < rhs ? -1 : 0;
}

/**
 * Allows a parent to track the changes made to multi-selection children.
 *
 * @remarks Beyond just giving each child the ability to track its own selected state, the parent can change all children at once.
 * Pressing <kbd>Ctrl</kbd>+<kbd>A</kbd> will select all children, for example.
 *
 * This is not exclusive with {@link useSingleSelection}, you can use both at once if you have a use case for it.
 *
 * @hasChild {@link useMultiSelectionChild}
 *
 * @compositeParams
 */
function useMultiSelection({
  multiSelectionParameters: {
    onSelectionChange,
    multiSelectionAriaPropName,
    multiSelectionMode,
    ...void3
  },
  managedChildrenReturn: {
    getChildren,
    ...void1
  },
  childrenHaveFocusReturn: {
    getAnyFocused,
    ...void4
  },
  ...void2
}) {
  return useMonitoring(function useMultiSelection() {
    // By having both we get the total number of children for free, even if there are holes in the array.
    // TODO: useManagedChildren should do that by default??
    const selectedIndices = A$1(new Set());
    const unselectedIndices = A$1(new Set());
    const startOfShiftSelect = A$1(null);
    // Why these are needed:
    // When in focus mode, there's no way to determine whether these keys are held down during the focus event.
    // That's all. Wow.
    let shiftKeyHeld = A$1(false);
    let ctrlKeyHeld = A$1(false);
    // When a child changes selection state, it calls this function.
    const notifyParentOfChildSelectChange = useStableCallback((event, index, selected, previous) => {
      console.assert(selected != previous);
      if (selected == undefined) {
        // This child is unmounting itself.
        if (previous === true) {
          console.assert(selectedIndices.current.has(index), `The selected child at index ${index} is unmounting itself, but the parent was unaware of it being selected.`);
          selectedIndices.current.delete(index);
        } else if (previous === false) {
          console.assert(unselectedIndices.current.has(index), `The selected child at index ${index} is unmounting itself, but the parent was unaware of it being selected.`);
          unselectedIndices.current.delete(index);
        } else {
          console.assert(false, `The child at index ${index} was not selected or unselected but a secret third thing: ${selected}`);
        }
      } else if (selected) {
        if (previous != undefined) {
          console.assert(unselectedIndices.current.has(index), `The multi-select child at index ${index} changed to selected even though it was not unselected before, somehow.`);
          unselectedIndices.current.delete(index);
        }
        console.assert(!selectedIndices.current.has(index), `The multi-select child at index ${index} changed to selected even though there is already a selected child with that index.`);
        selectedIndices.current.add(index);
        startOfShiftSelect.current = index;
      } else {
        if (previous != undefined) {
          console.assert(selectedIndices.current.has(index), `The multi-select child at index ${index} changed to unselected even though it was not selected before, somehow.`);
          selectedIndices.current.delete(index);
        }
        console.assert(!unselectedIndices.current.has(index), `The multi-select child at index ${index} was marked as unselected even though there is already an unselected child with that index.`);
        unselectedIndices.current.add(index);
      }
      const childCount = selectedIndices.current.size + unselectedIndices.current.size;
      const selectedPercent = childCount == 0 ? 0 : selectedIndices.current.size / childCount;
      console.assert(selectedPercent >= 0 && selectedPercent <= 1);
      onSelectionChange?.(enhanceEvent(event, {
        selectedPercent,
        selectedIndices: selectedIndices.current
      }));
    });
    const changeAllChildren = useStableCallback((event, shouldBeSelected) => {
      getChildren().forEach(child => {
        if (!child.getMultiSelectionDisabled()) {
          child.setSelectedFromParent(event, shouldBeSelected(child.index));
        }
      });
    });
    const doContiguousSelection = useStableCallback((event, endIndex) => {
      let originalEnd = endIndex;
      let temp = 0;
      let startIndex = startOfShiftSelect.current || 0; // TODO: Is || 0 correct here? Probably, right?
      if (startIndex <= endIndex) {
        // Never include the child that started this contiguous selection, only the children beyond it.
        ++startIndex;
      } else {
        // Never include the child that started(/ended) this contiguous selection, only the children beyond it.
        --startIndex;
        temp = endIndex;
        endIndex = startIndex;
        startIndex = temp;
      }
      console.assert(startIndex <= endIndex);
      if (startIndex <= endIndex) {
        changeAllChildren(event, childIndex => {
          if (childIndex >= startIndex && childIndex <= endIndex) {
            // If this child is within the range, toggle it.
            return !getChildren().getAt(childIndex)?.getMultiSelected();
          } else {
            return !!getChildren().getAt(childIndex)?.getMultiSelected();
          }
        });
      }
      startOfShiftSelect.current = originalEnd;
    });
    const onCompositeFocusChange = useStableCallback((anyFocused, _prevAnyFocused, _event) => {
      if (!anyFocused) {
        ctrlKeyHeld.current = shiftKeyHeld.current = false;
      }
    });
    let nextCtrlAIsUndo = A$1(false);
    useGlobalHandler(getDocument$1(), "keydown", useStableCallback(e => {
      shiftKeyHeld.current = e.shiftKey || e.key == 'Shift';
      ctrlKeyHeld.current = e.ctrlKey || e.key == 'Control';
      // Only do CTRL+A handling if the control is focused
      if (getAnyFocused()) {
        // Listen for CTRL+A
        if (e.code == "KeyA" && e.ctrlKey && !e.repeat) {
          // Only perform this logic if multi-selection is enabled
          if (multiSelectionMode != "disabled") {
            changeAllChildren(e, !nextCtrlAIsUndo.current ? returnTrue : returnFalse);
            e.preventDefault();
            e.stopPropagation();
            // TODO: This should update in more places
            nextCtrlAIsUndo.current = !nextCtrlAIsUndo.current;
          }
        }
      }
    }), {
      capture: true
    });
    useGlobalHandler(getDocument$1(), "keyup", e => {
      if (e.key == 'Shift') shiftKeyHeld.current = false;
      if (e.key == 'Control') ctrlKeyHeld.current = false;
    }, {
      passive: true,
      capture: true
    });
    return {
      context: useMemoObject({
        multiSelectionContext: useMemoObject({
          doContiguousSelection,
          notifyParentOfChildSelectChange,
          multiSelectionAriaPropName,
          multiSelectionMode,
          changeAllChildren,
          getCtrlKeyDown: useCallback(() => ctrlKeyHeld.current, []),
          getShiftKeyDown: useCallback(() => shiftKeyHeld.current, []),
          getAnyFocused
        })
      }),
      childrenHaveFocusParameters: {
        onCompositeFocusChange
      },
      multiSelectionReturn: {},
      propsStable: useMemoObject({})
    };
  });
}
/**
 *
 * @compositeParams
 */
function useMultiSelectionChild({
  info: {
    index,
    ...void4
  },
  multiSelectionChildParameters: {
    initiallyMultiSelected,
    onMultiSelectChange,
    multiSelectionDisabled,
    ...void1
  },
  context: {
    multiSelectionContext: {
      notifyParentOfChildSelectChange,
      multiSelectionAriaPropName,
      multiSelectionMode,
      doContiguousSelection,
      changeAllChildren,
      getCtrlKeyDown,
      getShiftKeyDown,
      getAnyFocused,
      ...void5
    },
    ...void3
  },
  ...void2
}) {
  return useMonitoring(function useMultiSelectionChild() {
    // When we're in focus-selection mode, focusing any child deselects everything and selects JUST that child.
    // But that's really annoying for when you tab into the component, so it's only enabled when you're navigating WITHIN the component
    // (e.g. we only do that "reset everything" selection stuff when the component already had focus and that focus simply moved to a different child)
    // The exception is press events, because a click can come from anywhere, focusing a child even if focus is elsewhere (or the window doesn't even have focus!)
    // So when a press event happens during focus-selection mode, we disable the disabling with this flag.
    const pressFreebie = A$1(false);
    const firePressSelectionEvent = e => {
      if (!multiSelectionDisabled) {
        if (multiSelectionMode == "activation") {
          if (e.shiftKey) {
            doContiguousSelection(e, index);
          } else {
            onMultiSelectChange?.(enhanceEvent(e, {
              multiSelected: !getLocalSelected()
            }));
          }
        } else {
          if (e.ctrlKey) {
            onMultiSelectChange?.(enhanceEvent(e, {
              multiSelected: !getLocalSelected()
            }));
          } else {
            pressFreebie.current = true;
            focus(e.currentTarget);
            onCurrentFocusedInnerChanged(true, false, e);
          }
        }
      }
    };
    const [localSelected, setLocalSelected, getLocalSelected] = useState(initiallyMultiSelected ?? false);
    const changeMultiSelected = useStableCallback((e, selected) => {
      console.assert(selected != null);
      console.assert(!multiSelectionDisabled);
      console.assert(multiSelectIsEnabled);
      // We're selected now (because someone told us we are, this hook doesn't call this function directly)
      //
      // So update our own internal state so we can re-render with the correct props,
      // and also notify the parent (in case the parent is listening for changes in some way)
      let prevSelected = getLocalSelected();
      if (prevSelected != selected) {
        setLocalSelected(selected);
        notifyParentOfChildSelectChange(e, index, selected, prevSelected);
      }
    });
    const multiSelectIsEnabled = multiSelectionMode != 'disabled';
    _(() => {
      if (multiSelectIsEnabled) {
        notifyParentOfChildSelectChange(null, index, getLocalSelected(), undefined);
        return () => notifyParentOfChildSelectChange(null, index, undefined, getLocalSelected());
      }
    }, [index, multiSelectIsEnabled]);
    const onCurrentFocusedInnerChanged = useStableCallback((focused, prev, event) => {
      if (focused) {
        if (multiSelectionMode == "focus") {
          let any = getAnyFocused();
          // Wow, it's the worst selection mode.
          const subSelectionMode = getShiftKeyDown() ? "toggle" : getCtrlKeyDown() ? "skip" : "set";
          let newIndex = index;
          switch (subSelectionMode) {
            case "set":
              if (any || pressFreebie.current) {
                changeAllChildren(event, index => index == newIndex);
              }
              break;
            case "toggle":
              doContiguousSelection(event, index);
              break;
            case "skip":
              /* eslint-disable no-debugger */
              debugger;
              break;
          }
        }
      }
      pressFreebie.current = false;
    });
    const setSelectedFromParent = useStableCallback((event, multiSelected) => {
      console.assert(onMultiSelectChange != null);
      onMultiSelectChange?.(enhanceEvent(event, {
        multiSelected
      }));
    });
    return {
      multiSelectionChildReturn: {
        changeMultiSelected,
        multiSelected: localSelected,
        getMultiSelected: getLocalSelected,
        multiSelectionMode,
        firePressSelectionEvent
      },
      hasCurrentFocusParameters: {
        onCurrentFocusedInnerChanged
      },
      props: {
        [multiSelectionAriaPropName || "aria-selected"]: multiSelectionMode == "disabled" ? undefined : localSelected ? "true" : "false"
      },
      info: {
        getMultiSelected: getLocalSelected,
        setSelectedFromParent,
        getMultiSelectionDisabled: useStableGetter(multiSelectionDisabled)
      }
    };
  });
}
/**
 *
 * @compositeParams
 *
 * #__NO_SIDE_EFFECTS__
 */
function useMultiSelectionChildDeclarative({
  multiSelectionChildDeclarativeParameters: {
    onMultiSelectedChange,
    multiSelected,
    ...void3
  },
  multiSelectionChildReturn: {
    changeMultiSelected,
    ...void2
  },
  ...void1
}) {
  let reasonRef = A$1(undefined);
  _(() => {
    if (multiSelected != null) changeMultiSelected(reasonRef.current, multiSelected);
  }, [multiSelected]);
  return {
    multiSelectionChildParameters: {
      onMultiSelectChange: useStableCallback(e => {
        reasonRef.current = e;
        return onMultiSelectedChange?.(e);
      })
    },
    info: {
      setSelectedFromParent: useStableCallback((event, multiSelected) => {
        onMultiSelectedChange?.(enhanceEvent(event, {
          multiSelected
        }));
      })
    }
  };
}

/**
 * Allows a single child among all children to be the "selected" child (which can be different from the "focused" child).
 *
 * @remarks If you need multi-select instead of single-select and you're using this hook (e.g. as part of {@link useCompleteListNavigation}), you can disable the single-selection behavior either by setting the selected index to `null` or.
 *
 * @hasChild {@link useSingleSelectionChild}
 *
 * @compositeParams
 */
function useSingleSelection({
  managedChildrenReturn: {
    getChildren,
    ...void1
  },
  rovingTabIndexReturn: {
    setTabbableIndex,
    ...void2
  },
  singleSelectionParameters: {
    onSingleSelectedIndexChange: onSelectedIndexChange_U,
    initiallySingleSelectedIndex,
    singleSelectionAriaPropName,
    singleSelectionMode,
    ...void3
  },
  ...void4
}) {
  return useMonitoring(function useSingleSelection() {
    const onSingleSelectedIndexChange = useStableCallback(onSelectedIndexChange_U ?? noop);
    const getSelectedAt = useCallback(m => {
      return m.getSingleSelected();
    }, []);
    const setSelectedAt = useCallback((m, t, newSelectedIndex, prevSelectedIndex) => {
      if (m.untabbable) {
        console.assert(false);
      }
      const directionComparison = newSelectedIndex == m.index ? prevSelectedIndex : newSelectedIndex;
      const direction = directionComparison == null ? null : m.index - directionComparison;
      if (newSelectedIndex == null) console.assert(t == false);
      if (t) console.assert(newSelectedIndex === m.index);
      m.setLocalSingleSelected(t, direction);
    }, []);
    const isSelectedValid = useCallback(m => {
      return !m.untabbable;
    }, []);
    const {
      changeIndex: changeSingleSelectedIndex,
      getCurrentIndex: getSingleSelectedIndex
    } = useChildrenFlag({
      getChildren,
      onIndexChange: null,
      initialIndex: initiallySingleSelectedIndex,
      getAt: getSelectedAt,
      setAt: setSelectedAt,
      isValid: isSelectedValid,
      closestFit: false,
      onClosestFit: null,
      indexDemangler: null
    });
    return {
      singleSelectionReturn: useMemoObject({
        getSingleSelectedIndex,
        changeSingleSelectedIndex
      }),
      context: useMemoObject({
        singleSelectionContext: useMemoObject({
          getSingleSelectedIndex,
          onSingleSelectedIndexChange,
          singleSelectionAriaPropName,
          singleSelectionMode
        })
      }),
      childrenHaveFocusParameters: {
        onCompositeFocusChange: useStableCallback((anyFocused, prev, reason) => {
          if (!anyFocused) {
            const selectedIndex = getSingleSelectedIndex();
            if (selectedIndex != null) setTabbableIndex(selectedIndex, reason, false);
          }
        })
      }
    };
  });
}
/**
 *
 *
 * @compositeParams
 */
function useSingleSelectionChild({
  singleSelectionChildParameters: {
    singleSelectionDisabled,
    ...void5
  },
  context: {
    singleSelectionContext: {
      getSingleSelectedIndex,
      onSingleSelectedIndexChange,
      singleSelectionAriaPropName: ariaPropName,
      singleSelectionMode,
      ...void1
    },
    ...void2
  },
  info: {
    index,
    untabbable,
    ...void3
  },
  ...void4
}) {
  return useMonitoring(function useSingleSelectionChild() {
    const [localSelected, setLocalSelected, getLocalSelected] = useState(getSingleSelectedIndex() == index);
    const [direction, setDirection, getDirection] = useState(getSingleSelectedIndex() == null ? null : getSingleSelectedIndex() - index);
    const onCurrentFocusedInnerChanged = useStableCallback((focused, _prev, e) => {
      if (!singleSelectionDisabled && singleSelectionMode == 'focus' && focused && !untabbable) {
        onSingleSelectedIndexChange(enhanceEvent(e, {
          selectedIndex: index
        }));
      }
    });
    const firePressSelectionEvent = useStableCallback(e => {
      // We allow press events for selectionMode == 'focus' because
      // press generally causes a focus anyway (except when it doesn't, iOS Safari...)
      if (!singleSelectionDisabled && !untabbable) {
        if (singleSelectionMode == 'activation') onSingleSelectedIndexChange(enhanceEvent(e, {
          selectedIndex: index
        }));
      } else {
        focus(e.currentTarget);
      }
    });
    const propParts = ariaPropName?.split("-") ?? [];
    return {
      info: {
        setLocalSingleSelected: useStableCallback((selected, direction) => {
          setLocalSelected(selected);
          setDirection(direction);
        }),
        getSingleSelected: getLocalSelected,
        singleSelected: localSelected
      },
      singleSelectionChildReturn: {
        singleSelected: localSelected,
        getSingleSelected: getLocalSelected,
        singleSelectedOffset: direction,
        singleSelectionMode,
        getSingleSelectedOffset: getDirection,
        firePressSelectionEvent
      },
      props: useTagProps(ariaPropName == null || singleSelectionMode == "disabled" ? {} : {
        [`${propParts[0]}-${propParts[1]}`]: localSelected ? propParts[1] == "current" ? `${propParts[2]}` : `true` : "false"
      }),
      hasCurrentFocusParameters: {
        onCurrentFocusedInnerChanged
      }
    };
  });
}
/**
 * Let's face it, declarative is nicer to use than imperative, so this is a shortcut.
 */
function useSingleSelectionDeclarative({
  singleSelectionReturn: {
    changeSingleSelectedIndex
  },
  singleSelectionDeclarativeParameters: {
    singleSelectedIndex,
    onSingleSelectedIndexChange
  }
}) {
  let s = singleSelectedIndex ?? null;
  let reasonRef = A$1(undefined);
  _(() => {
    changeSingleSelectedIndex(s, reasonRef.current);
  }, [s]);
  return {
    singleSelectionParameters: {
      onSingleSelectedIndexChange: useCallback(e => {
        reasonRef.current = e;
        return onSingleSelectedIndexChange?.(e);
      }, [onSingleSelectedIndexChange])
    }
  };
}

/**
 * Allows the children of this component to be selected, either with a `singleSelectedIndex` prop on the parent, or via each child's individual `multiSelected` prop.
 *
 * @remarks Single-selection and multi-selection are not mutually exclusive, though the cases where you would want both are uncommon.
 *
 * Most of the time, you'll want to pick and choose one mode to work with:
 *
 * ```md-literal
 * * Single-selection is controlled by the parent -- it receives a `singleSelectedIndex` parameter that represents the currently selected child and handles all the logic related to coordinating the deselection of the old child.
 * * Multi-selection is controlled by each individual child -- they have a `multiSelected` parameter that can be optionally reported back to the parent (so it can show the % of all children selected, or similar)
 * ```
 *
 * @see {@link useSingleSelection}
 * @see {@link useMultiSelection}
 *
 * @hasChild {@link useSelectionChild}
 *
 * @compositeParams
 */
function useSelection({
  managedChildrenReturn,
  multiSelectionParameters,
  childrenHaveFocusReturn,
  rovingTabIndexReturn,
  singleSelectionParameters
}) {
  const {
    childrenHaveFocusParameters: {
      onCompositeFocusChange: ocfc1,
      ...void3
    },
    context: contextSS,
    singleSelectionReturn,
    ...void1
  } = useSingleSelection({
    managedChildrenReturn,
    rovingTabIndexReturn,
    singleSelectionParameters
  });
  const {
    childrenHaveFocusParameters: {
      onCompositeFocusChange: ocfc2,
      ...void4
    },
    context: contextMS,
    multiSelectionReturn,
    propsStable,
    ...void2
  } = useMultiSelection({
    managedChildrenReturn,
    multiSelectionParameters,
    childrenHaveFocusReturn
  });
  return {
    propsStable,
    childrenHaveFocusParameters: {
      onCompositeFocusChange: useStableMergedCallback(ocfc1, ocfc2)
    },
    context: useMemoObject({
      ...contextSS,
      ...contextMS
    }),
    multiSelectionReturn,
    singleSelectionReturn
  };
}
/**
 *
 * @compositeParams
 */
function useSelectionChild({
  context,
  info: {
    index,
    untabbable,
    ...void2
  },
  singleSelectionChildParameters,
  multiSelectionChildParameters,
  ...void3
}) {
  const {
    props: p1,
    hasCurrentFocusParameters: {
      onCurrentFocusedInnerChanged: ocfic1
    },
    info: {
      getSingleSelected,
      setLocalSingleSelected,
      singleSelected,
      ...void1
    },
    singleSelectionChildReturn
  } = useSingleSelectionChild({
    context,
    info: {
      index,
      untabbable
    },
    singleSelectionChildParameters
  });
  const {
    props: p2,
    hasCurrentFocusParameters: {
      onCurrentFocusedInnerChanged: ocfic2
    },
    multiSelectionChildReturn,
    info: {
      getMultiSelected,
      setSelectedFromParent,
      getMultiSelectionDisabled,
      ...void5
    },
    ...void4
  } = useMultiSelectionChild({
    context,
    info: {
      index
    },
    multiSelectionChildParameters
  });
  return {
    hasCurrentFocusParameters: {
      onCurrentFocusedInnerChanged: useStableMergedCallback(ocfic1, ocfic2)
    },
    info: {
      getMultiSelected,
      setSelectedFromParent,
      getSingleSelected,
      setLocalSingleSelected,
      singleSelected,
      getMultiSelectionDisabled
    },
    singleSelectionChildReturn,
    multiSelectionChildReturn,
    selectionChildReturn: {
      firePressSelectionEvent: useStableMergedCallback(singleSelectionChildReturn.firePressSelectionEvent, multiSelectionChildReturn.firePressSelectionEvent)
    },
    props: useMergedProps(p1, p2)
  };
}
/**
 * @compositeParams
 */
function useSelectionDeclarative(args) {
  return useSingleSelectionDeclarative(args);
}
/**
 * @compositeParams
 */
function useSelectionChildDeclarative(args) {
  return useMultiSelectionChildDeclarative(args);
}

/**
 * Access the `HTMLElement` rendered by this hook/these props, either as soon as it's available (as a callback), or whenever you need it (as a getter function).
 *
 * @remarks
 *
 * This hook, like many others, works with either `useState` or {@link usePassiveState}. Why use one over the other?
 *
 * ```md-literal
 * * `useState` is familiar and easy to use, but calling `setState` causes a re-render, which you might not need/want
 * * `usePassiveState` is faster and more scalable, but its state can't be accessed during render and it's more complex.
 * ```
 *
 * Suppose we want to call the `HTMLElement`'s `doSomethingFunny` method as soon as the element has been created:
 *
 * @example
 * Easiest way to use (but setElement causes an extra re-render when it's called...)
 * ```typescript
 * const [element, setElement] = useState<HTMLButtonElement | null>(null);
 * const { propsStable } = useRefElement({ onElementChange: setElement });
 * useEffect(() => {
 *     element.doSomethingFunny();
 * }, [element])
 * ```
 *
 * @example
 * Fastest (but slightly more verbose)
 * ```typescript
 * // The code in useEffect is moved into this callback, but runs at the same time
 * const onElementChange = useCallback(element => element.doSomethingFunny(), []);
 * const [getElement, setElement] = usePassiveState<HTMLButtonElement | null>(onElementChange, returnNull);
 * const { propsStable } = useRefElement({ onElementChange: setElement });
 * ```
 *
 * @compositeParams
 */
function useRefElement(args) {
  return useMonitoring(function useRefElement() {
    const nonElementWarn = A$1(false);
    if (nonElementWarn.current) {
      nonElementWarn.current = false;
      // There are two of these to catch the problem in the two most useful areas --
      // when it initially happens, and also in the component stack.
      console.assert(false, `useRefElement was used on a component that didn't forward its ref onto a DOM element, so it's attached to that component's VNode instead.`);
    }
    const {
      onElementChange,
      onMount,
      onUnmount
    } = args.refElementParameters || {};
    // Called (indirectly) by the ref that the element receives.
    const handler = useCallback((e, prevValue) => {
      if (!(e == null || e instanceof Element)) {
        console.assert(e == null || e instanceof Element, `useRefElement was used on a component that didn't forward its ref onto a DOM element, so it's attached to that component's VNode instead.`);
        nonElementWarn.current = true;
      }
      const cleanup = onElementChange?.(e, prevValue);
      if (prevValue) onUnmount?.(prevValue);
      if (e) onMount?.(e);
      return cleanup;
    }, []);
    // Let us store the actual (reference to) the element we capture
    const [getElement, setElement] = usePassiveState(handler, returnNull, {
      debounceRendering: runImmediately,
      skipMountInitialization: true
    });
    const propsStable = A$1(useTagProps({
      ref: setElement
    }));
    // Return both the element and the hook that modifies 
    // the props and allows us to actually find the element
    return {
      propsStable: propsStable.current,
      refElementReturn: {
        getElement
      }
    };
  });
}
function add(map, key, value) {
  var _a;
  let set = (_a = map.get(key)) !== null && _a !== void 0 ? _a : new Set();
  set.add(value);
  map.set(key, set);
  return map;
}
/**
 * Removes this `value` from the `Set` associated with `key`. Does not remove the `Set` itself, even if it becomes empty.
 */
function del(map, key, value) {
  var _a;
  let set = (_a = map.get(key)) !== null && _a !== void 0 ? _a : new Set();
  let ret = set.delete(value);
  map.set(key, set);
  return ret;
}
function has$1(map, key, value) {
  var _a, _b;
  return (_b = (_a = map.get(key)) === null || _a === void 0 ? void 0 : _a.has(value)) !== null && _b !== void 0 ? _b : false;
}
var mapOfSets = /*#__PURE__*/Object.freeze({
  __proto__: null,
  add: add,
  delete: del,
  has: has$1
});
const activeElementUpdaters = new Map();
const lastActiveElementUpdaters = new Map();
const windowFocusedUpdaters = new Map();
const windowsFocusedUpdaters = new Map();
// The focusin and focusout events often fire synchronously in the middle of running code.
// E.G. calling element.focus() can cause a focusin event handler to immediately interrupt that code.
// For the purpose of improving stability, we debounce all focus events to the next microtask.
function forEachUpdater(window, map, value, reason) {
  const updaters = map.get(window);
  if (updaters) {
    for (const updater of updaters) {
      const {
        lastSent,
        send
      } = updater;
      if (value !== lastSent) {
        send(value, reason);
        updater.lastSent = value;
      }
    }
  }
}
function focusout(e) {
  const window = e.target.ownerDocument.defaultView;
  if (e.relatedTarget == null) {
    forEachUpdater(window, activeElementUpdaters, null, e);
  }
}
function focusin(e) {
  const window = e.target.ownerDocument.defaultView;
  const currentlyFocusedElement = e.target;
  forEachUpdater(window, activeElementUpdaters, currentlyFocusedElement, e);
  forEachUpdater(window, lastActiveElementUpdaters, currentlyFocusedElement, e);
}
function windowFocus(e) {
  const window = e.target instanceof Window ? e.target : e.currentTarget instanceof Window ? e.currentTarget : e.target.ownerDocument.defaultView;
  windowsFocusedUpdaters.set(window, true);
  forEachUpdater(window, windowFocusedUpdaters, true, e);
}
function windowBlur(e) {
  const window = e.target instanceof Window ? e.target : e.currentTarget instanceof Window ? e.currentTarget : e.target.ownerDocument.defaultView;
  windowsFocusedUpdaters.set(window, false);
  forEachUpdater(window, windowFocusedUpdaters, false, e);
}
/**
 * Allows you to inspect which element in the `document` currently has focus, which was most recently focused if none are currently, and whether or not the window has focus
 *
 * @remarks The document's body receiving focus, like it does when you click on an empty area, is counted as no element having focus for all intents and purposes
 *
 * This is a passive hook, so by default it returns getter functions that report this information but the component will not re-render by default when the active element changes.
 *
 * If you need the component to re-render when the active element changes, use the `on*Change` arguments to set some state on your end.
 *
 * @compositeParams
 */
function useActiveElement({
  activeElementParameters: {
    onActiveElementChange,
    onLastActiveElementChange,
    onWindowFocusedChange,
    getDocument
  }
}) {
  return useMonitoring(function useActiveElement() {
    y(() => {
      const document = getDocument();
      const window = document?.defaultView;
      if ((activeElementUpdaters.get(window)?.size ?? 0) === 0) {
        document?.addEventListener("focusin", focusin, {
          passive: true
        });
        document?.addEventListener("focusout", focusout, {
          passive: true
        });
        window?.addEventListener("focus", windowFocus, {
          passive: true
        });
        window?.addEventListener("blur", windowBlur, {
          passive: true
        });
      }
      const laeu = {
        send: setActiveElement,
        lastSent: undefined
      };
      const llaeu = {
        send: setLastActiveElement,
        lastSent: undefined
      };
      const lwfu = {
        send: setWindowFocused,
        lastSent: undefined
      };
      mapOfSets.add(activeElementUpdaters, window, laeu);
      mapOfSets.add(lastActiveElementUpdaters, window, llaeu);
      mapOfSets.add(windowFocusedUpdaters, window, lwfu);
      return () => {
        mapOfSets.delete(activeElementUpdaters, window, laeu);
        mapOfSets.delete(lastActiveElementUpdaters, window, llaeu);
        mapOfSets.delete(windowFocusedUpdaters, window, lwfu);
        if (activeElementUpdaters.size === 0) {
          document?.removeEventListener("focusin", focusin);
          document?.removeEventListener("focusout", focusout);
          window?.removeEventListener("focus", windowFocus);
          window?.removeEventListener("blur", windowBlur);
        }
      };
    }, []);
    const [getActiveElement, setActiveElement] = usePassiveState(onActiveElementChange, returnNull, {
      debounceRendering: runImmediately,
      skipMountInitialization: true
    });
    const [getLastActiveElement, setLastActiveElement] = usePassiveState(onLastActiveElementChange, returnNull, {
      debounceRendering: runImmediately,
      skipMountInitialization: true
    });
    const [getWindowFocused, setWindowFocused] = usePassiveState(onWindowFocusedChange, returnTrue, {
      debounceRendering: runImmediately,
      skipMountInitialization: true
    });
    return {
      activeElementReturn: {
        getActiveElement,
        getLastActiveElement,
        getWindowFocused
      }
    };
  });
}
let be;
(async () => {
  if (typeof window !== 'undefined') {
    let d = !!globalThis.document;
    globalThis.document ??= {};
    /// @ts-expect-error
    await import('./inert.esm-CvV788Tp.js');
    await import('./blocking-elements-CpwyR6CI.js');
    be = document.$blockingElements;
    if (!d) delete globalThis.document;
  }
})();
function blockingElements() {
  return be;
}

/**
 * Allows an element to trap focus by applying the "inert" attribute to all sibling, aunt, and uncle nodes.
 *
 * @remarks Automatically handles consecutive calls with a loosely applied stack operation
 * (specifically via `blockingElements`, with a small polyfill because I'm not sure how long
 * it'll take to find its way into the spec, if ever)
 *
 * @param target
 */
function useBlockingElement({
  activeElementParameters: {
    getDocument,
    onActiveElementChange,
    onLastActiveElementChange,
    onWindowFocusedChange,
    ...void3
  },
  blockingElementParameters: {
    enabled,
    getTarget,
    ...void1
  },
  ...void2
}) {
  return useMonitoring(function useBlockingElement() {
    const stableGetTarget = useStableCallback(getTarget);
    //const getDocument = useStableCallback(() => (getTarget()?.ownerDocument ?? globalThis.document));
    useActiveElement({
      activeElementParameters: {
        getDocument,
        onActiveElementChange,
        onWindowFocusedChange,
        onLastActiveElementChange: useStableCallback((e, prev, reason) => {
          onLastActiveElementChange?.(e, prev, reason);
          if (e) {
            if (enabled) setLastActiveWhenOpen(e, reason);else setLastActiveWhenClosed(e, reason);
          }
        })
      }
    });
    const [getTop, setTop] = usePassiveState(null, returnNull);
    const [getLastActiveWhenClosed, setLastActiveWhenClosed] = usePassiveState(null, returnNull);
    const [getLastActiveWhenOpen, setLastActiveWhenOpen] = usePassiveState(null, returnNull);
    /**
     * Push/pop the element from the blockingElements stack.
     */
    _(() => {
      const target = stableGetTarget();
      if (enabled) {
        // Sometimes blockingElements will fail if, for example,
        // the target element isn't connected to document.body.
        // This is rare, but it's better to fail silently with weird tabbing behavior
        // than to crash the entire application.
        try {
          blockingElements().push(target);
          setTop(target);
          return () => {
            blockingElements().remove(target);
          };
        } catch (ex) {
          // Well, semi-silently.
          console.error(ex);
        }
      }
    }, [enabled]);
    return {
      getTop,
      getLastActiveWhenClosed,
      getLastActiveWhenOpen
    };
  });
}

/**
 * Allows you to move focus to an isolated area of the page, restore it when finished, and **optionally trap it there** so that you can't tab out of it.
 *
 * @remarks By default, this implements a focus trap using the Blocking Elements...uh...[proposal](https://github.com/whatwg/html/issues/897)?
 * Not that it really looks like it's going anywhere, but until something better comes along, [the polyfill](#https://github.com/PolymerLabs/blocking-elements) has been working pretty great.
 *
 * @compositeParams
 */
function useFocusTrap({
  focusTrapParameters: {
    onlyMoveFocus,
    trapActive,
    focusPopup: focusSelfUnstable,
    focusOpener: focusOpenerUnstable
  },
  activeElementParameters,
  refElementReturn
}) {
  return useMonitoring(function useFocusTrap() {
    const focusSelf = useStableCallback(focusSelfUnstable);
    const focusOpener = useStableCallback(focusOpenerUnstable);
    y(() => {
      const document = getDocument$1();
      if (trapActive) {
        let top = getTop();
        getLastActiveWhenOpen();
        {
          top ??= refElementReturn.getElement();
          console.assert(!!top);
          if (top) focusSelf(top, () => findFirstFocusable(top));
        }
      } else {
        const lastActive = getLastActiveWhenClosed();
        let currentFocus = document?.activeElement;
        // Restore focus to whatever caused this trap to trigger,
        // but only if it wasn't caused by explicitly focusing something else 
        // (generally if `onlyMoveFocus` is true)
        let top = refElementReturn.getElement();
        if (document && (currentFocus == document.body || currentFocus == null || top == currentFocus || top?.contains(currentFocus))) {
          if (lastActive) focusOpener(lastActive);
        }
      }
    }, [trapActive]);
    const {
      getElement
    } = refElementReturn;
    const {
      getTop,
      getLastActiveWhenClosed,
      getLastActiveWhenOpen
    } = useBlockingElement({
      activeElementParameters,
      blockingElementParameters: {
        enabled: trapActive && !onlyMoveFocus,
        getTarget: getElement
      }
    });
    return {
      props: useTagProps({
        "aria-modal": trapActive ? "true" : undefined
      })
    };
  });
}
/**
 * Returns the first focusable element contained within the given node, or null if none are found.
 */
function findFirstFocusable(element) {
  return findFirstCondition(element, node => node instanceof Element && isFocusable(node));
}
function findFirstCondition(element, filter) {
  const document = getDocument$1(element);
  if (!document) return null;
  if (element && filter(element)) return element;
  console.assert(!!element);
  element ??= document?.body;
  const treeWalker = document?.createTreeWalker(element, NodeFilter.SHOW_ELEMENT, {
    acceptNode: node => filter(node) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
  });
  const firstFocusable = treeWalker.firstChild();
  return firstFocusable;
}

/**
 * Combines {@link useListNavigation} and {@link useSelection}.
 *
 * @remarks The -selection behavior is optional, if you decide you need multi-selection instead within the same component.
 *
 * @hasChild {@link useListNavigationSelectionChild}
 *
 * @compositeParams
 */
function useListNavigationSelection({
  linearNavigationParameters,
  rovingTabIndexParameters,
  typeaheadNavigationParameters,
  singleSelectionParameters,
  multiSelectionParameters,
  managedChildrenReturn,
  refElementReturn,
  paginatedChildrenParameters,
  processedIndexManglerReturn,
  childrenHaveFocusReturn,
  ...void3
}) {
  return useMonitoring(function useListNavigationSelection() {
    const {
      context: contextSS,
      propsStable,
      ...retSS
    } = useSelection({
      childrenHaveFocusReturn,
      rovingTabIndexReturn: {
        setTabbableIndex: useStableCallback((...a) => {
          rovingTabIndexReturn.setTabbableIndex(...a);
        })
      },
      managedChildrenReturn,
      singleSelectionParameters,
      multiSelectionParameters
    });
    const {
      context: contextLN,
      props,
      rovingTabIndexReturn,
      ...retLN
    } = useListNavigation({
      rovingTabIndexParameters: {
        ...rovingTabIndexParameters,
        initiallyTabbedIndex: singleSelectionParameters.initiallySingleSelectedIndex || 0
      },
      linearNavigationParameters,
      paginatedChildrenParameters,
      typeaheadNavigationParameters,
      managedChildrenReturn,
      refElementReturn,
      processedIndexManglerReturn
    });
    return {
      rovingTabIndexReturn,
      ...retSS,
      ...retLN,
      context: useMemoObject({
        ...contextLN,
        ...contextSS
      }),
      props: useMergedProps(props, propsStable)
    };
  });
}
/**
 * @compositeParams
 */
function useListNavigationSelectionChild({
  info: {
    index,
    untabbable,
    ...void2
  },
  context,
  refElementReturn,
  singleSelectionChildParameters,
  multiSelectionChildParameters,
  ...void1
}) {
  return useMonitoring(function useListNavigationSelectionChild() {
    const {
      hasCurrentFocusParameters: {
        onCurrentFocusedInnerChanged: ocfic2,
        ...void3
      },
      info: infoSS,
      multiSelectionChildReturn,
      singleSelectionChildReturn,
      props: propsSS,
      selectionChildReturn,
      ...void9
    } = useSelectionChild({
      info: {
        index,
        untabbable
      },
      context,
      multiSelectionChildParameters,
      singleSelectionChildParameters
    });
    const {
      hasCurrentFocusParameters: {
        onCurrentFocusedInnerChanged: ocfic1,
        ...void6
      },
      pressParameters: {
        excludeSpace
      },
      rovingTabIndexChildReturn,
      textContentParameters,
      props: propsLN,
      info: infoLN,
      ...void8
    } = useListNavigationChild({
      info: {
        index,
        untabbable
      },
      context,
      refElementReturn
    });
    return {
      hasCurrentFocusParameters: {
        onCurrentFocusedInnerChanged: useStableMergedCallback(ocfic1, ocfic2)
      },
      pressParameters: {
        excludeSpace
      },
      selectionChildReturn,
      info: {
        ...infoSS,
        ...infoLN
      },
      rovingTabIndexChildReturn,
      multiSelectionChildReturn,
      singleSelectionChildReturn,
      textContentParameters,
      propsChild: propsSS,
      propsTabbable: propsLN
    };
  });
}

/**
 * Allows examining the rendered component's text content whenever it renders and reacting to changes.
 *
 * @compositeParams
 */
function useTextContent({
  refElementReturn: {
    getElement
  },
  textContentParameters: {
    getText,
    onTextContentChange
  }
}) {
  return useMonitoring(function useTextContent() {
    const [getTextContent, setTextContent] = usePassiveState(onTextContentChange, returnNull, {
      debounceRendering: runImmediately,
      skipMountInitialization: true
    });
    y(() => {
      const element = getElement();
      if (element) {
        const textContent = getText(element);
        if (textContent) {
          setTextContent(textContent);
        }
      }
    });
    return {
      textContentReturn: {
        getTextContent
      }
    };
  });
}

/**
 * Allows a composite component (such as a radio group or listbox) to listen
 * for an "overall focusin/out" event; this hook lets you know when focus has
 * moved in/out of this grouping of children EVEN IF there is no actual parent DOM element.
 *
 * @remarks I.E. you can use this without needing a parent `<div>` to listen for a `focusout` event.
 *
 * @hasChild {@link useChildrenHaveFocusChild}
 *
 * @compositeParams
 */
function useChildrenHaveFocus(args) {
  return useMonitoring(function useChildrenHaveFocus() {
    const {
      childrenHaveFocusParameters: {
        onCompositeFocusChange
      }
    } = args;
    const [getAnyFocused, setAnyFocused] = usePassiveState(onCompositeFocusChange, returnFalse, {
      debounceRendering: runImmediately,
      skipMountInitialization: true
    });
    const [_getFocusCount, setFocusCount] = usePassiveState(useStableCallback((anyFocused, anyPreviouslyFocused, e) => {
      console.assert(anyFocused >= 0 && anyFocused <= 1);
      setAnyFocused(!!(anyFocused && !anyPreviouslyFocused), e);
    }), returnZero, {
      debounceRendering: setTimeout,
      skipMountInitialization: true
    }); // setTimeout is used for the debounce to be somewhat generous with timing, and to guard against the default being able to be runImmediately...
    return {
      childrenHaveFocusReturn: {
        getAnyFocused
      },
      context: useMemoObject({
        childrenHaveFocusChildContext: useMemoObject({
          setFocusCount
        })
      })
    };
  });
}
/**
 * @compositeParams
 */
function useChildrenHaveFocusChild({
  context: {
    childrenHaveFocusChildContext: {
      setFocusCount
    }
  }
}) {
  return useMonitoring(function useChildrenHaveFocusChild() {
    return {
      hasCurrentFocusParameters: {
        onCurrentFocusedInnerChanged: useStableCallback((focused, prev, e) => {
          if (focused) {
            setFocusCount(p => (p ?? 0) + 1, e);
          } else if (!focused && prev) {
            setFocusCount(p => (p ?? 0) - 1, e);
          }
        })
      }
    };
  });
}

/**
 * Allows monitoring whether the rendered element is or is not focused directly (i.e. would satisfy `:focus`).
 *
 * @see {@link useHasLastFocus}, in which even if the `body` is clicked it's not considered a loss in focus.
 *
 * @compositeParams
 */
function useHasCurrentFocus(args) {
  return useMonitoring(function useHasCurrentFocus() {
    const {
      hasCurrentFocusParameters: {
        onCurrentFocusedChanged,
        onCurrentFocusedInnerChanged
      },
      refElementReturn: {
        getElement
      }
    } = args;
    const [getFocused, setFocused] = usePassiveState(onCurrentFocusedChanged, returnFalse, {
      debounceRendering: runImmediately,
      skipMountInitialization: true
    });
    const [getFocusedInner, setFocusedInner] = usePassiveState(onCurrentFocusedInnerChanged, returnFalse, {
      debounceRendering: runImmediately,
      skipMountInitialization: true
    });
    const onFocusIn = useCallback(e => {
      setFocusedInner(true, e);
      setFocused(e.target == getElement(), e);
    }, []);
    const onFocusOut = useCallback(e => {
      // Even if we're focusOut-ing to another inner element,
      // that'll be caught during onFocusIn,
      // so just set everything to false and let that revert things back to true if necessary.
      setFocusedInner(false, e);
      setFocused(false, e);
    }, []);
    y(() => {
      return () => {
        setFocused(false, undefined);
        setFocusedInner(false, undefined);
      };
    }, []);
    const propsStable = A$1({
      [onfocusin]: onFocusIn,
      [onfocusout]: onFocusOut
    });
    return {
      hasCurrentFocusReturn: {
        propsStable: propsStable.current,
        getCurrentFocused: getFocused,
        getCurrentFocusedInner: getFocusedInner
      }
    };
  });
}

/**
 * All the list-related hooks combined into one large hook that encapsulates everything.
 *
 * @remarks Unlike most others, this hook assume's it's the final one--the "outermost" hook in the component--so it uses `useManagedChildren` and wraps everything up nicely,
 * combining event handlers that are used in multiple sub-hooks, collecting all the necessary context-related data, and merging all known DOM props together.
 *
 * @hasChild {@link useCompleteListNavigationChild}
 *
 * @compositeParams
 */
function useCompleteListNavigation({
  linearNavigationParameters,
  typeaheadNavigationParameters,
  rovingTabIndexParameters,
  singleSelectionParameters,
  multiSelectionParameters,
  paginatedChildrenParameters,
  //staggeredChildrenParameters,
  refElementParameters,
  processedIndexManglerParameters,
  ...void1
}) {
  return useMonitoring(function useCompleteListNavigation() {
    const getChildren = useCallback(() => managedChildrenReturn.getChildren(), []);
    const getLowestIndex = useCallback(() => getChildren().getLowestIndex(), []);
    const getHighestIndex = useCallback(() => getChildren().getHighestIndex(), []);
    const isValidForNavigation = useCallback(i => {
      const child = getChildren().getAt(i);
      if (!child) return false;
      if (child.untabbable) return false;
      return true;
    }, []);
    const {
      propsStable: propsRef,
      refElementReturn
    } = useRefElement({
      refElementParameters
    });
    const {
      context: {
        processedIndexManglerContext
      },
      processedIndexManglerReturn: {
        indexDemangler,
        indexMangler,
        mangler
      }
    } = useProcessedIndexMangler({
      processedIndexManglerParameters
    });
    const {
      childrenHaveFocusParameters,
      managedChildrenParameters: {
        onChildrenMountChange,
        ...mcp1
      },
      context: {
        rovingTabIndexContext,
        singleSelectionContext,
        multiSelectionContext,
        typeaheadNavigationContext
      },
      linearNavigationReturn,
      rovingTabIndexReturn,
      singleSelectionReturn,
      multiSelectionReturn,
      typeaheadNavigationReturn,
      props,
      ...void2
    } = useListNavigationSelection({
      managedChildrenReturn: {
        getChildren
      },
      linearNavigationParameters: {
        getLowestIndex,
        getHighestIndex,
        isValidForLinearNavigation: isValidForNavigation,
        ...linearNavigationParameters
      },
      typeaheadNavigationParameters: {
        isValidForTypeaheadNavigation: isValidForNavigation,
        ...typeaheadNavigationParameters
      },
      rovingTabIndexParameters: {
        untabbableBehavior: "focus-parent",
        ...rovingTabIndexParameters
      },
      singleSelectionParameters,
      multiSelectionParameters,
      paginatedChildrenParameters,
      refElementReturn,
      childrenHaveFocusReturn: {
        getAnyFocused: useStableCallback(() => childrenHaveFocusReturn.getAnyFocused())
      },
      processedIndexManglerReturn: {
        indexDemangler,
        indexMangler
      }
    });
    const {
      context: {
        childrenHaveFocusChildContext
      },
      childrenHaveFocusReturn
    } = useChildrenHaveFocus({
      childrenHaveFocusParameters
    });
    const mcr = useManagedChildren({
      managedChildrenParameters: {
        onChildrenMountChange,
        ...mcp1
      }
    });
    const {
      context: {
        managedChildContext: managedChildRTIContext
      },
      managedChildrenReturn
    } = mcr;
    const {
      getTabbableIndex,
      setTabbableIndex
    } = rovingTabIndexReturn;
    const {
      getAnyFocused
    } = childrenHaveFocusReturn;
    // => <= <=>
    const processedChildrenContext = useMemoObject({
      getTabbableIndex,
      setTabbableIndex,
      getAnyFocused
    });
    const refreshRows = A$1(() => {});
    const {
      getSortValueAt,
      compare,
      getIndex
    } = processedIndexManglerParameters;
    const context = useMemoObject({
      childrenHaveFocusChildContext,
      rovingTabIndexContext,
      singleSelectionContext,
      multiSelectionContext,
      typeaheadNavigationContext,
      managedChildContext: managedChildRTIContext,
      processedChildrenContext,
      listNavigationCompleteContext: useMemoObject({
        getSortValueAt,
        compare,
        getIndex,
        provideParentWithRefreshRows: useCallback(e => {
          refreshRows.current = e;
        }, [])
      }),
      processedIndexManglerContext
    });
    return {
      context,
      props: useMergedProps(props, propsRef),
      managedChildrenReturn,
      linearNavigationReturn,
      rovingTabIndexReturn,
      singleSelectionReturn,
      multiSelectionReturn,
      typeaheadNavigationReturn,
      childrenHaveFocusReturn,
      refElementReturn,
      rearrangeableChildrenReturn: {
        refresh: useCallback(() => refreshRows.current(), [])
      }
    };
  });
}
/**
 * Helper for `useCompleteListNavigation` that handles the array of children in a way that allows for sorting, pagination, and staggering. Optional but recommended.
 *
 * @remarks Each child must also call `useProcessedChild`, and use its information to optimize
 *
 * @compositeParams
 */
function useCompleteListNavigationChildren({
  context,
  paginatedChildrenParameters,
  staggeredChildrenParameters,
  managedChildrenParameters,
  rearrangeableChildrenParameters,
  ...void1
}) {
  return useMonitoring(function useCompleteListNavigationChildren() {
    const {
      listNavigationCompleteContext: {
        getSortValueAt,
        compare,
        getIndex,
        provideParentWithRefreshRows
      }
    } = context;
    const {
      context: contextRPS,
      paginatedChildrenReturn,
      rearrangeableChildrenReturn,
      staggeredChildrenReturn
    } = useProcessedChildren({
      paginatedChildrenParameters,
      processedIndexManglerParameters: {
        getSortValueAt,
        compare,
        getIndex
      },
      rearrangeableChildrenParameters,
      staggeredChildrenParameters,
      managedChildrenParameters,
      context
    });
    _(() => {
      provideParentWithRefreshRows(() => {
        rearrangeableChildrenReturn.refresh();
      });
    }, []);
    return {
      context: contextRPS,
      paginatedChildrenReturn,
      rearrangeableChildrenReturn,
      staggeredChildrenReturn
    };
  });
}
/**
 * @compositeParams
 */
function useCompleteListNavigationChildOuter({
  context,
  info: {
    index,
    ...uinfo
  },
  refElementParameters: {
    onElementChange: oec1,
    onMount,
    onUnmount
  },
  rearrangeableChildParameters
}) {
  return useMonitoring(function useCompleteListNavigationChildOuter() {
    const {
      propsStable,
      refElementReturn
    } = useRefElement({
      refElementParameters: {
        onElementChange: useStableCallback((...a) => {
          oec1?.(...a);
          oec2?.(...a);
        }),
        onMount,
        onUnmount
      }
    });
    const {
      getElement
    } = refElementReturn;
    const {
      props,
      ...processedChildReturn
    } = useProcessedChild({
      context,
      info: {
        index,
        getElement,
        ...uinfo
      },
      rearrangeableChildParameters
    });
    const {
      refElementParameters: {
        onElementChange: oec2
      }
    } = processedChildReturn;
    return {
      ...processedChildReturn,
      props: useMergedProps(props, propsStable),
      refElementReturn,
      hide: processedChildReturn.paginatedChildReturn.hideBecausePaginated || processedChildReturn.staggeredChildReturn.hideBecauseStaggered
    };
  });
}
/**
 *
 * @compositeParams
 */
function useCompleteListNavigationChild({
  info: {
    index,
    focusSelf,
    untabbable,
    ...customUserInfo
  },
  // The "...info" is empty if M is the same as UCLNCI<ChildElement>.
  textContentParameters: {
    getText,
    onTextContentChange: otcc1,
    ...void10
  },
  refElementParameters,
  hasCurrentFocusParameters: {
    onCurrentFocusedChanged,
    onCurrentFocusedInnerChanged: ocfic3,
    ...void7
  },
  singleSelectionChildParameters,
  multiSelectionChildParameters,
  context: {
    managedChildContext,
    rovingTabIndexContext,
    singleSelectionContext,
    multiSelectionContext,
    typeaheadNavigationContext,
    childrenHaveFocusChildContext,
    processedChildrenContext,
    processedIndexManglerContext,
    listNavigationCompleteContext,
    ...void5
  },
  ...void1
}) {
  return useMonitoring(function useCompleteListNavigationChild() {
    const {
      refElementReturn,
      propsStable,
      ...void6
    } = useRefElement({
      refElementParameters
    });
    const {
      hasCurrentFocusParameters: {
        onCurrentFocusedInnerChanged: ocfic1,
        ...void3
      },
      pressParameters: {
        excludeSpace,
        ...void2
      },
      selectionChildReturn,
      textContentParameters: {
        onTextContentChange: otcc2,
        ...void8
      },
      singleSelectionChildReturn,
      multiSelectionChildReturn,
      info: infoFromListNav,
      rovingTabIndexChildReturn,
      propsChild,
      propsTabbable,
      ...void4
    } = useListNavigationSelectionChild({
      info: {
        index,
        untabbable
      },
      context: {
        rovingTabIndexContext,
        singleSelectionContext,
        multiSelectionContext,
        typeaheadNavigationContext
      },
      singleSelectionChildParameters,
      multiSelectionChildParameters,
      refElementReturn
    });
    const {
      textContentReturn,
      ...void9
    } = useTextContent({
      refElementReturn,
      textContentParameters: {
        getText,
        onTextContentChange: useStableMergedCallback(otcc1, otcc2)
      }
    });
    const allStandardInfo = {
      index,
      focusSelf,
      getElement: refElementReturn.getElement,
      untabbable,
      ...infoFromListNav
    };
    const {
      managedChildReturn
    } = useManagedChild({
      context: {
        managedChildContext
      },
      info: {
        ...allStandardInfo,
        ...customUserInfo
      }
    });
    const {
      hasCurrentFocusParameters: {
        onCurrentFocusedInnerChanged: ocfic2
      }
    } = useChildrenHaveFocusChild({
      context: {
        childrenHaveFocusChildContext
      }
    });
    const onCurrentFocusedInnerChanged = useStableMergedCallback(ocfic1, ocfic2, ocfic3);
    const {
      hasCurrentFocusReturn
    } = useHasCurrentFocus({
      hasCurrentFocusParameters: {
        onCurrentFocusedInnerChanged,
        onCurrentFocusedChanged
      },
      refElementReturn
    });
    const props = useMergedProps(propsStable, hasCurrentFocusReturn.propsStable, propsChild);
    return {
      propsChild: props,
      propsTabbable,
      pressParameters: {
        excludeSpace
      },
      selectionChildReturn,
      textContentReturn,
      refElementReturn,
      singleSelectionChildReturn,
      multiSelectionChildReturn,
      hasCurrentFocusReturn,
      managedChildReturn,
      rovingTabIndexChildReturn
    };
  });
}
/**
 * @compositeParams
 */
function useCompleteListNavigationDeclarative({
  singleSelectionParameters,
  singleSelectionDeclarativeParameters,
  ...rest
}) {
  const ret = useCompleteListNavigation({
    singleSelectionParameters: {
      initiallySingleSelectedIndex: singleSelectionDeclarativeParameters.singleSelectedIndex,
      // Needs to be a (stable) callback because of declaration order
      onSingleSelectedIndexChange: useStableCallback((...e) => onSingleSelectedIndexChange?.(...e)),
      ...singleSelectionParameters
    },
    ...rest
  });
  const {
    singleSelectionParameters: {
      onSingleSelectedIndexChange,
      ...void3
    },
    ...void2
  } = useSelectionDeclarative({
    singleSelectionDeclarativeParameters,
    singleSelectionReturn: ret.singleSelectionReturn
  });
  const {
    singleSelectionReturn: {
      getSingleSelectedIndex
    },
    ...ret2
  } = ret;
  return {
    ...ret2,
    singleSelectionReturn: {
      getSingleSelectedIndex
    }
  };
}
/**
 * #__NO_SIDE_EFFECTS__
 */
function useCompleteListNavigationChildDeclarative({
  multiSelectionChildParameters,
  multiSelectionChildDeclarativeParameters: {
    multiSelected,
    onMultiSelectedChange
  },
  info: i1,
  ...rest
}) {
  const {
    multiSelectionChildParameters: {
      onMultiSelectChange
    },
    info: i2,
    ...void2
  } = useSelectionChildDeclarative({
    multiSelectionChildDeclarativeParameters: {
      onMultiSelectedChange,
      multiSelected
    },
    multiSelectionChildReturn: {
      changeMultiSelected: useStableCallback((...args) => {
        ret.multiSelectionChildReturn.changeMultiSelected(...args);
      })
    }
  });
  const ret = useCompleteListNavigationChild({
    multiSelectionChildParameters: {
      initiallyMultiSelected: multiSelected,
      onMultiSelectChange: useStableCallback(e => {
        onMultiSelectChange(e);
      }),
      ...multiSelectionChildParameters
    },
    info: {
      ...i1,
      ...i2
    },
    ...rest
  });
  const {
    multiSelectionChildReturn,
    ...ret2
  } = ret;
  return {
    ...ret2,
    multiSelectionChildReturn
  };
}
function isPromise(p) {
  return p instanceof Promise;
}
const Unset = Symbol("Unset");
/**
 * lodash-ish function that's like debounce + (throttle w/ async handling) combined.
 *
 * Requires a lot of callbacks to meaningfully turn a red function into a blue one, but you *can* do it!
 * Note that part of this is emulating the fact that the sync handler cannot have a return value,
 * so you'll need to use `setResolve` and the other related functions to do that in whatever way works for your specific scenario.
 *
 * The comments are numbered in approximate execution order for your reading pleasure (1 is near the bottom).
 */
function asyncToSync({
  asyncInput,
  onInvoke,
  onInvoked,
  onFinally: onFinallyAny,
  onReject,
  onResolve,
  onHasError,
  onHasResult,
  onError,
  onReturnValue,
  capture,
  onAsyncDebounce,
  onSyncDebounce,
  onPending,
  throttle,
  wait
}) {
  let pending = false;
  let syncDebouncing = false;
  let asyncDebouncing = false;
  let currentCapture = Unset;
  const onFinally = () => {
    // 8. This is run at the end of every invocation of the async handler,
    // whether it completed or not, and whether it was async or not.
    onFinallyAny?.();
    onPending?.(pending = false);
    let nothingElseToDo = !asyncDebouncing;
    onAsyncDebounce?.(asyncDebouncing = false);
    if (nothingElseToDo) ;else {
      // 9b. Another request to run the async handler came in while we were running this one.
      // Instead of stopping, we're just going to immediately run again using the arguments that were given to us most recently.
      // We also clear that flag, because we're handling it now. It'll be set again if the handler is called again while *this* one is running
      console.assert(currentCapture !== Unset);
      if (currentCapture != Unset) {
        onSyncDebounce?.(syncDebouncing = true);
        syncDebounced();
      }
    }
  };
  const sync = (...args) => {
    // 5. We're finally running the async version of the function, so notify the caller that the return value is pending.
    // And because the fact that we're here means the debounce/throttle period is over, we can clear that flag too.
    onPending?.(pending = true);
    console.assert(syncDebouncing == false);
    onHasError?.(null);
    onHasResult?.(null);
    let promiseOrReturn;
    let hadSyncError = false;
    try {
      // 6. Run the function we were given.
      // Because it may be sync, or it may throw before returning, we must still wrap it in a try/catch...
      // Also important is that we preserve the async-ness (or lack thereof) on the original input function.
      onInvoke?.();
      promiseOrReturn = asyncInput(...args);
      onHasError?.(false);
    } catch (ex) {
      hadSyncError = true;
      onError?.(ex);
      onInvoked?.("throw");
    }
    // 7. Either end immediately, or schedule to end when completed.
    if (isPromise(promiseOrReturn)) {
      onInvoked?.("async");
      promiseOrReturn.then(r => {
        onResolve?.();
        onHasResult?.(true);
        onReturnValue?.(r);
        return r;
      }).catch(e => {
        onReject?.();
        onHasError?.(true);
        onError?.(e);
        return e;
      }).finally(onFinally);
    } else {
      onInvoked?.("sync");
      if (!hadSyncError) {
        onResolve?.();
        onHasResult?.(true);
        onHasError?.(false);
      } else {
        onReject?.();
        onHasResult?.(false);
        onHasError?.(true);
      }
      onReturnValue?.(promiseOrReturn);
      onPending?.(pending = false);
      onFinally();
    }
  };
  // lodash uses "in" instead of checking for `undefined`...
  const lodashOptions = {
    leading: !wait,
    trailing: true
  };
  if (throttle) {
    if (wait == null || wait < throttle) wait = throttle;
    lodashOptions.maxWait = throttle;
  }
  const syncDebounced = debounce(() => {
    // 3. Instead of calling the sync version of our function directly, we allow it to be throttled/debounced (above)
    // and now that we're done throttling/debouncing, notify anyone who cares of this fact (below).
    onSyncDebounce?.(syncDebouncing = false);
    if (!pending) {
      // 4a. If this is the first invocation, or if we're not still waiting for a previous invocation to finish its async call,
      // then we can just go ahead and run the debounced version of our function.
      console.assert(currentCapture != Unset);
      sync(...currentCapture);
    } else {
      // 4b. If we were called while still waiting for the (or a) previous invocation to finish,
      // then we'll need to delay this one. When that previous invocation finishes, it'll check
      // to see if it needs to run again, and it will use these new captured arguments from step 2.
      onAsyncDebounce?.(asyncDebouncing = true);
    }
  }, wait || undefined, lodashOptions);
  return {
    syncOutput: (...args) => {
      // 1. Someone just called the sync version of our async function.
      // 2. We capture the arguments in a way that won't become stale if/when the function is called with a (possibly seconds-long) delay (e.g. event.currentTarget.value on an <input> element).
      currentCapture = capture?.(...args) ?? [];
      onSyncDebounce?.(syncDebouncing = true);
      syncDebounced();
    },
    flushSyncDebounce: () => {
      syncDebounced.flush();
    },
    cancelSyncDebounce: () => {
      syncDebounced.cancel();
    }
  };
}
function identityCapture(...t) {
  return t;
}
const AsyncFunction = async function () {}.constructor;
/**
 * Given an async function, returns a function that's suitable for non-async APIs,
 * along with other information about the current run's status.
 *
 * @see {@link useAsyncHandler} for a version that's specialized for DOM event handlers.
 *
 * @remarks When called multiple times in quick succession, (i.e. before the handler has finished),
 * this works like Lodash's `throttle` function with the `wait` option always
 * set to however long the handler takes to complete. A second call to the sync function will be
 * throttled until the first call has finished. The return value of the function is the result
 * of the previous invocation, or `undefined` on the first call.
 *
 * The handler is only ever delayed if one is currently running, so, e.g. for iOS touch events the
 * first call happens in the same event handler (which means things like calls to `element.focus()`
 * will work as intended, since that fails when the event is "split up")
 *
 * Finally, because the sync handler may be invoked on a delay, any property references on the arguments
 * provided might be stale by the time it's actually invoked (e.g. accessing `event.currentTarget.checked`
 * is not stable across time because it's a "live" value -- you almost always want the value that it
 * had at the original time the handler was called). The `capture` option allows you to save that kind of
 * dynamic data at the time it runs; the `AP` and `SP` type parameters likewise control
 * the parameters the async handler and sync handler expect respectively.
 *
 * {@include } {@link UseAsyncParameters}
 *
 * @param asyncHandler - The async function to make sync
 * @param options - @see {@link UseAsyncParameters}
 */
function useAsync(asyncHandler, options) {
  return useMonitoring(function useAsync() {
    // Things related to current execution
    // Because we can both return and throw undefined, 
    // we need separate state to track their existence too.
    //
    // We keep, like, a *lot* of render-state, but it only ever triggers a re-render
    // when we start/stop an async action.
    const [pending, setPending, _getPending] = useState(false);
    const [result, setResult, _getResult] = useState(undefined);
    const [error, setError, _getError] = useState(undefined);
    const [hasError, setHasError, _getHasError] = useState(false);
    const [hasResult, setHasResult, _getHasResult] = useState(false);
    const [asyncDebouncing, setAsyncDebouncing] = useState(false);
    const [syncDebouncing, setSyncDebouncing] = useState(false);
    const [invocationResult, setInvocationResult] = useState(asyncHandler instanceof AsyncFunction ? "async" : null);
    // Keep track of this for the caller's sake -- we don't really care.
    const [runCount, setRunCount] = useState(0);
    const [settleCount, setSettleCount] = useState(0);
    const [resolveCount, setResolveCount] = useState(0);
    const [rejectCount, setRejectCount] = useState(0);
    const incrementCallCount = useCallback(() => {
      setRunCount(c => c + 1);
    }, []);
    const incrementResolveCount = useCallback(() => {
      setResolveCount(c => c + 1);
    }, []);
    const incrementRejectCount = useCallback(() => {
      setRejectCount(c => c + 1);
    }, []);
    const incrementFinallyCount = useCallback(() => {
      setSettleCount(c => c + 1);
    }, []);
    /* eslint-disable prefer-const */
    let {
      throttle,
      debounce,
      capture: captureUnstable
    } = options ?? {};
    const captureStable = useStableCallback(captureUnstable ?? identityCapture);
    const asyncHandlerStable = useStableCallback(asyncHandler ?? identity);
    const {
      flushSyncDebounce,
      syncOutput,
      cancelSyncDebounce
    } = T$1(() => {
      return asyncToSync({
        asyncInput: asyncHandlerStable,
        capture: captureStable,
        onAsyncDebounce: setAsyncDebouncing,
        onError: setError,
        onPending: setPending,
        onReturnValue: setResult,
        onSyncDebounce: setSyncDebouncing,
        onHasError: setHasError,
        onHasResult: setHasResult,
        onInvoked: setInvocationResult,
        onInvoke: incrementCallCount,
        onFinally: incrementFinallyCount,
        onReject: incrementRejectCount,
        onResolve: incrementResolveCount,
        throttle: options?.throttle ?? undefined,
        wait: options?.debounce ?? undefined
      });
    }, [throttle, debounce]);
    y(() => {
      return () => cancelSyncDebounce();
    }, [cancelSyncDebounce]);
    return {
      syncHandler: syncOutput,
      pending,
      result,
      error,
      hasError: hasError || false,
      hasResult: hasResult || false,
      resolveCount,
      rejectCount,
      settleCount,
      debouncingAsync: asyncDebouncing,
      debouncingSync: syncDebouncing,
      invocationResult,
      callCount: runCount,
      flushDebouncedPromise: flushSyncDebounce
    };
  });
}

/**
 * Given an asynchronous event handler, returns a synchronous one that works on the DOM,
 * along with some other information related to the current state.
 * Does not modify any props.
 *
 * @remarks Note that because the handler you provide may be called with a delay, and
 * because the `value` of, e.g., an `<input>` element will likely have changed by the
 * time the delay is over, a `capture` function is necessary in order to
 * save the relevant information from the DOM at call-time. Any other simple event data,
 * like `mouseX` or `shiftKey` can stay on the event itself and don't
 * need to be captured &ndash; it's never stale.
 *
 * The handler is automatically throttled to only run one at a time.
 * If the handler is called, and then before it finishes, is called again,
 * it will be put on hold until the current one finishes, at which point
 * the second one will run.  If the handler is called a third time before
 * the first has finished, it will *replace* the second, so only the most
 * recently called iteration of the handler will run.
 *
 *
 * You may optionally *also* specify debounce and throttle parameters that wait until the
 * synchronous handler has not been called for the specified number of
 * milliseconds, at which point we *actually* run the asynchronous handler
 * according to the logic in the previous paragraph. This is in
 * *addition* to throttling the handler, and does not replace that behavior.
 *
 *
 * @example
 * General use
 * ```tsx
 * const asyncHandler = async (value: number, e: Event) => {
 *     [...] // Ex. send to a server and setState when done
 * };
 * const {
 *     // A sync version of asyncHandler
 *     syncHandler,
 *     // True while the handler is running
 *     pending,
 *     // The error thrown, if any
 *     error,
 *     // Show this value while the operation's pending
 *     currentCapture,
 *     // And others, see `UseAsyncHandlerReturnType`
 *     ...rest
 * } = useAsyncHandler<HTMLInputElement>()({
 *     asyncHandler,
 *     // Pass in the capture function that saves event data
 *     // from being stale.
 *     capture: e => {
 *         // `capture` can have side-effects because
 *         // it's called exactly once per invocation
 *         e.preventDefault();
 *
 *         // Save this value so that it's never stale
 *         return e.currentTarget.valueAsNumber;
 *     }
 * });
 *
 * const onInput = pending? null : syncHandler;
 * ```
 *
 * {@include } {@link UseAsyncHandlerParameters}
 *
 * @see useAsync A more general version of this hook that can work with any type of handler, not just DOM event handlers.
 */
function useAsyncHandler({
  asyncHandler,
  capture: originalCapture,
  ...restAsyncOptions
}) {
  return useMonitoring(function useAsyncHandler() {
    // We need to differentiate between "nothing captured yet" and "`undefined` was captured"
    const [currentCapture, setCurrentCapture, getCurrentCapture] = useState(undefined);
    const [hasCapture, setHasCapture] = useState(false);
    // Wrap around the normal `useAsync` `capture` function to also
    // keep track of the last value the user actually input.
    // 
    // Without this there's no way to re-render the control with
    // it being both controlled and also having the "correct" value,
    // and at any rate also protects against sudden exceptions reverting
    // your change out from under you.
    const capture = useStableCallback(e => {
      const captured = originalCapture(e);
      setCurrentCapture(captured);
      setHasCapture(true);
      return [captured, e];
    });
    return {
      getCurrentCapture,
      currentCapture,
      hasCapture,
      ...useAsync(asyncHandler, {
        capture,
        ...restAsyncOptions
      })
    };
  });
}
function pressLog(...args) {
  if (globalThis.__log_press_events) console.log(...args);
}
function supportsPointerEvents() {
  return "onpointerup" in globalThis;
}
// All our checking for pointerdown and up doesn't mean anything if it's
// a programmatic onClick event, which could come from any non-user source.
// We want to handle those just like GUI clicks, but we don't want to double-up on press events.
// So if we handle a press from pointerup, we ignore any subsequent click events, at least for a tick.
//
// Also, this is global to handle the following situation:
// A button is tapped
// Some heavy rendering-logic is done and the page jumps around
// Now there's a new button underneath the user's finger
// And it receives a click event just cause.
// ...at the end of the day, globals are the best way to coordinate this simple state between disparate components.
// But TODO because it doesn't work well it this library is used multiple times on the same page.
let justHandledManualClickEvent = false;
let manualClickTimeout1 = null;
let manualClickTimeout2 = null;
function onHandledManualClickEvent() {
  pressLog("manual-click");
  justHandledManualClickEvent = true;
  if (manualClickTimeout1 != null) clearTimeout(manualClickTimeout1);
  if (manualClickTimeout2 != null) clearTimeout(manualClickTimeout2);
  // The timeout is somewhat generous here because when the "emulated" click event finally comes along
  // (i.e. after all the pointer events have finished) it will also clear this. 
  // This is mostly as a backup safety net.
  manualClickTimeout1 = setTimeout(() => {
    pressLog("manual-click halfway");
    // This is split into two halves for task-ordering reasons.
    // Namely we'd like one of these to be scheduled **after** some amount of heavy work was scheduled
    // Because the task queue is FIFO at **scheduling** time, not at the **scheduled** time.
    manualClickTimeout2 = setTimeout(() => {
      pressLog("manual-click clear");
      justHandledManualClickEvent = false;
    }, 50);
  }, 200);
}
getDocument$1()?.addEventListener?.("click", e => {
  if (justHandledManualClickEvent) {
    justHandledManualClickEvent = false;
    manualClickTimeout1 != null && clearTimeout(manualClickTimeout1);
    manualClickTimeout2 != null && clearTimeout(manualClickTimeout2);
    e.preventDefault();
    e.stopPropagation();
  }
}, {
  capture: true
});
/**
 * Adds the necessary event handlers to create a "press"-like event for
 * any element, whether it's a native &lt;button&gt; or regular &lt;div&gt;,
 * and allows for a "long press" that can be used to,
 * e.g., show a tooltip *instead* of activating a press.
 *
 * @remarks
 * Notably, the following cases are covered:
 * ```md-literal
 * * The target element is properly focused, even on iOS Safari (*especially* on iOS Safari)
 * * Double-clicks won't select text, it just presses the button twice.
 * * Text selection that happens to end/start with this element won't invoke a press.
 * * The `enter` key immediately invokes a press (by default just once until pressed again), while the `space` key invokes it when released, if focus hasn't moved away from the button.
 * * Haptic feedback (on, like, the one browser combination that supports it &mdash; this can be disabled app-wide with `setButtonVibrate`)
 * ```
 *
 * In addition, returns a "more accurate" CSS `active` and `hover`; more accurate
 * in that `hover` won't mess up mobile devices that see `hover` and mess up your click events,
 * and in that `active` accurately displays when a press would occur or not.
 *
 * {@include } {@link setPressVibrate}
 *
 * @compositeParams
 */
function usePress(args) {
  return useMonitoring(function usePress() {
    const {
      refElementReturn: {
        getElement
      },
      pressParameters: {
        focusSelf,
        onPressSync,
        allowRepeatPresses,
        longPressThreshold,
        excludeEnter: ee,
        excludePointer: ep,
        excludeSpace: es,
        onPressingChange: opc
      }
    } = args;
    const excludeEnter = useStableCallback(ee ?? returnFalse);
    const excludeSpace = useStableCallback(es ?? returnFalse);
    const excludePointer = useStableCallback(ep ?? returnFalse);
    const onPressingChange = useStableCallback(opc ?? noop);
    const [getIsPressing, setIsPressing] = usePassiveState(onPressingChange, returnFalse);
    const hasPressEvent = onPressSync != null;
    /**
     * Explanations:
     *
     * It would be nice to just use pointer events for everything,
     * but 2019 iOS devices can't run those, amazingly enough, and
     * that's still pretty recent. So we need to have backup touch
     * events.
     *
     * Why not just use click? Because at the very, very least,
     * we also need to be able to handle space and enter key presses,
     * and that needs to work regardless of if it's a <button> or not.
     *
     * Also, we do still use click, because programmatic clicks can come
     * from anything from ATs to automation scripts, and we don't want
     * to break those. But since we are listening for pointer/touch events,
     * and we can't prevent the subsequent click event from happening,
     * and we **don't want to duplicate press events**, we need to
     * ignore click events that happen in the same tick as a handled press event.
     *
     * When we do a pointermove/touchmove, we check to see if we're still hovering over the element
     * for more accurate "active"/hover detection.
     *
     * "But you have a pointerleave event, why check for hovering during pointermove?"
     *
     * Because for some reason, pointerleave (etc.) aren't fired until *after* pointerup, no matter what.
     *
     */
    const [longPress, setLongPress] = useState(null);
    const [waitingForSpaceUp, setWaitingForSpaceUp, getWaitingForSpaceUp] = useState(false);
    const [pointerDownStartedHere, setPointerDownStartedHere, getPointerDownStartedHere] = useState(false);
    const [hovering, setHovering, getHovering] = useState(false);
    const onTouchStart = useStableCallback(e => {
      e.preventDefault();
      e.stopPropagation();
      setIsPressing(true, e);
      setPointerDownStartedHere(true);
      setHovering(true);
      setLongPress(false);
      const element = getElement();
      if (element) focusSelf(element);
    });
    const onTouchMove = useCallback(e => {
      pressLog("touchmove", e);
      e.preventDefault();
      e.stopPropagation();
      const element = getElement();
      const touch = e.touches[0];
      // Be as generous as possible with touch events by checking all four corners of the radius too
      const offsets = [[0, 0], [-touch.radiusX || 0, -touch.radiusY || 0], [+touch.radiusX || 0, -touch.radiusY || 0], [-touch.radiusX || 0, +touch.radiusY || 0], [+touch.radiusX || 0, +touch.radiusY || 0]];
      let hoveringAtAnyPoint = false;
      for (const [x, y] of offsets) {
        const elementAtTouch = getDocument$1()?.elementFromPoint((touch?.clientX ?? 0) + x, (touch?.clientY ?? 0) + y);
        hoveringAtAnyPoint ||= !!elementAtTouch && (element?.contains(elementAtTouch) ?? false);
      }
      setIsPressing(hoveringAtAnyPoint && getPointerDownStartedHere(), e);
      setHovering(hoveringAtAnyPoint);
    }, []);
    const preventClickEventsOnIosSafari = useCallback(e => {
      e.preventDefault();
      e.stopPropagation();
    }, []);
    const onTouchEnd = useCallback(e => {
      pressLog("touchend", e);
      e.preventDefault();
      e.stopPropagation();
      const hovering = getHovering();
      const pointerDownStartedHere = getPointerDownStartedHere();
      if (pointerDownStartedHere && hovering) {
        onHandledManualClickEvent();
        handlePress(e);
      }
      setWaitingForSpaceUp(false);
      setHovering(false);
      setPointerDownStartedHere(false);
      setIsPressing(false, e);
    }, []);
    const onPointerDown = useStableCallback(e => {
      pressLog("pointerdown", e);
      if (!excludePointer()) {
        if (e.buttons & 1) {
          e.preventDefault();
          e.stopPropagation();
          setIsPressing(true, e);
          setPointerDownStartedHere(true);
          setHovering(true);
          setLongPress(false);
          const element = getElement();
          if (element) focusSelf(element);
        }
      }
    });
    const onPointerMove = useStableCallback(e => {
      pressLog("pointermove", e);
      let listeningForPress = getPointerDownStartedHere();
      // If we're hovering over this element and not holding down the mouse button (or whatever other primary button)
      // then we're definitely not in a press anymore (if we could we'd just wait for onPointerUp, but it could happen outside this element)
      if (!(e.buttons & 1)) setPointerDownStartedHere(listeningForPress = false);
      if (listeningForPress) {
        const element = getElement();
        // Note: elementFromPoint starts reasonably expensive on a decent computer when on the order of 500 or so elements,
        // so we only test for hovering while actively attempting to detect a press
        const elementAtPointer = getDocument$1()?.elementFromPoint(e.clientX, e.clientY);
        const hovering = element == elementAtPointer || !!elementAtPointer && element?.contains(elementAtPointer) || false;
        setHovering(hovering);
        setIsPressing(hovering && getPointerDownStartedHere(), e);
      }
    });
    const onPointerUp = useCallback(e => {
      pressLog("pointerup", e);
      const hovering = getHovering();
      const pointerDownStartedHere = getPointerDownStartedHere();
      if (!excludePointer()) {
        if (pointerDownStartedHere && hovering) {
          onHandledManualClickEvent();
          handlePress(e);
          e.preventDefault();
          e.stopPropagation();
        }
      }
      setWaitingForSpaceUp(false);
      setHovering(false);
      setPointerDownStartedHere(false);
      setLongPress(false);
      setIsPressing(false, e);
    }, []);
    const onPointerEnter = useCallback(_e => {
      pressLog("pointerenter", _e);
      setHovering(true);
    }, []);
    const onPointerLeave = useCallback(_e => {
      pressLog("pointerleave", _e);
      setHovering(false);
      setLongPress(false);
    }, []);
    useTimeout({
      callback: () => {
        const element = getElement();
        setLongPress(pointerDownStartedHere && getHovering());
        if (element && pointerDownStartedHere && getHovering()) {
          focusSelf(element);
          if (longPressThreshold) {
            setWaitingForSpaceUp(false);
            setHovering(false);
            setPointerDownStartedHere(false);
          }
        }
      },
      timeout: longPressThreshold ?? null,
      triggerIndex: longPress ? true : pointerDownStartedHere && getHovering()
    });
    const handlePress = useStableCallback(e => {
      pressLog("handlepress", e);
      setWaitingForSpaceUp(false);
      setHovering(false);
      setPointerDownStartedHere(false);
      setLongPress(null);
      if (onPressSync) {
        // Note: The element is focused here because of iOS Safari.
        //
        // It's always iOS Safari.
        //
        // iOS Safari (tested on 12) downright refuses to allow 
        // elements to be manually focused UNLESS it happens within
        // an event handler like this.  It also doesn't focus
        // buttons by default when clicked, tapped, etc.
        //
        // If it becomes problematic that button-likes explicitly become
        // focused when they are pressed, then an alternative solution for
        // the question of "how do menu buttons keep their menus open"
        // and other focus-related nonsense needs to be figured out.
        //
        // For iOS Safari.
        //
        const element = getElement();
        if (element) focusSelf(element);
        // Whatever the browser was going to do with this event,
        // forget it. We're turning it into a "press" event.
        e.preventDefault();
        // Also stop anyone else from listening to this event,
        // since we're explicitly handling it.
        // (Notably, this allows labels to wrap inputs, with them
        // both having press event handlers, without double-firing)
        e.stopPropagation();
        // Haptic feedback for this press event
        try {
          // The default implementation doesn't throw,
          // but we should guard against user implementations that could.
          pulse();
        } finally {
          // Actually call our handler.
          onPressSync(e);
        }
      }
    });
    const onKeyDown = useStableCallback(e => {
      pressLog("keydown", e);
      if (onPressSync) {
        if (e.key == " " && !excludeSpace()) {
          // We don't actually activate it on a space keydown
          // but we do preventDefault to stop the page from scrolling.
          setWaitingForSpaceUp(true);
          setIsPressing(true, e);
          e.preventDefault();
        }
        if (e.key == "Enter" && !excludeEnter() && (!e.repeat || (allowRepeatPresses ?? false))) {
          setIsPressing(true, e);
          handlePress(e);
          requestAnimationFrame(() => {
            setIsPressing(false, e);
          });
        }
      }
    });
    const onKeyUp = useStableCallback(e => {
      pressLog("keyup", e);
      const waitingForSpaceUp = getWaitingForSpaceUp();
      if (waitingForSpaceUp && e.key == " " && !excludeSpace()) {
        handlePress(e);
        setIsPressing(false, e);
      }
    });
    const onClick = useStableCallback(e => {
      pressLog("click", e);
      // We should rarely get here. Most of the events do `preventDefault` which stops click from being called,
      // but we can still get here if the actual `click()` member is called, for example, and we need to react appropriately.
      const element = getElement();
      if (onPressSync) {
        if (e.detail > 1) {
          if ("stopImmediatePropagation" in e) e.stopImmediatePropagation();
          e.stopPropagation();
        } else {
          // Listen for "programmatic" click events.
          if (justHandledManualClickEvent) {
            // This is probably the click event after the end of all the pointerdownupleavemoveenter soup.
            // Clear the flag a little early.
            justHandledManualClickEvent = false;
          } else {
            console.assert(justHandledManualClickEvent == false, "Logic???");
            // Ignore stray click events that were't fired ON OR WITHIN on this element
            // ("on or within" because sometimes a button's got a label that's a different element than the button)
            if (e.target && element?.contains(e.target)) {
              if (getHovering()) ;else {
                // Intentional, for now. Programmatic clicks shouldn't happen in most cases.
                // TODO: Remove this when I'm confident stray clicks won't be handled.
                /* eslint-disable no-debugger */
                debugger;
                console.log("onclick was fired and will be handled as it doesn't look like it came from a pointer event", e);
                console.assert(justHandledManualClickEvent == false, "Logic???");
              }
              setIsPressing(true, e);
              requestAnimationFrame(() => {
                setIsPressing(false, e);
              });
              handlePress(e);
            }
          }
        }
      }
    });
    const onFocusOut = useStableCallback(e => {
      pressLog("focusout", e);
      setWaitingForSpaceUp(false);
      setIsPressing(false, e);
    });
    const p = supportsPointerEvents();
    return {
      pressReturn: {
        pressing: pointerDownStartedHere && hovering || waitingForSpaceUp || false,
        getIsPressing,
        longPress
      },
      props: {
        onKeyDown,
        onKeyUp,
        onTouchStart: !hasPressEvent ? undefined : !p ? onTouchStart : undefined,
        onTouchCancel: !hasPressEvent ? undefined : !p ? onTouchEnd : undefined,
        onTouchMove: !hasPressEvent ? undefined : !p ? onTouchMove : undefined,
        onTouchEnd: !hasPressEvent ? undefined : !p ? onTouchEnd : preventClickEventsOnIosSafari,
        onPointerDown: !hasPressEvent ? undefined : p ? onPointerDown : undefined,
        onPointerCancel: !hasPressEvent ? undefined : p ? onPointerDown : undefined,
        onPointerMove: !pointerDownStartedHere || !hasPressEvent ? undefined : p ? onPointerMove : undefined,
        onPointerUp: !hasPressEvent ? undefined : p ? onPointerUp : undefined,
        onPointerEnter: !hasPressEvent ? undefined : p ? onPointerEnter : undefined,
        onPointerLeave: !hasPressEvent ? undefined : p ? onPointerLeave : undefined,
        [onfocusout]: onFocusOut,
        onClick
      }
    };
  });
}
let pulse = "vibrate" in navigator && navigator.vibrate instanceof Function ? () => navigator.vibrate(10) : () => {};
let templateElement = null;
function htmlToElement(parent, html) {
  const document = parent.ownerDocument;
  templateElement ??= document.createElement("template");
  templateElement.innerHTML = html.trim(); // TODO: Trim ensures whitespace doesn't add anything, but with a better explanation of why
  return templateElement.content.firstChild;
}
/**
 * Easy access to an HTMLElement that can be controlled imperatively.
 *
 * The HTMLElement rendered is controlled by the `tag` prop (e.g. "span", "div").
 *
 * The `handle` prop should be e.g. `useRef<ImperativeHandle<HTMLDivElement>>(null)`
 */
M(D(ImperativeElementU));
/**
 * Allows controlling an element's `class`, `style`, etc. with functions like `setStyle` in addition to being reactive to incoming props.
 *
 * @remarks If the component is re-rendered after the element is modified in some way, those changes are remembered and included in the returned `props` that are meant to be spread to the element in question.
 *
 * This is extremely useful for integrating with 3rd party libraries that expect to be able to directly manipulate the DOM because it keeps everything syncced together.
 *
 * @compositeParams
 */
function useImperativeProps({
  refElementReturn: {
    getElement
  }
}) {
  return useMonitoring(function useImperativeProps() {
    const currentImperativeProps = A$1({
      className: new Set(),
      style: {},
      children: null,
      html: null,
      others: {}
    });
    const hasClass = useCallback(cls => {
      return currentImperativeProps.current.className.has(cls);
    }, []);
    const setClass = useCallback((cls, enabled) => {
      if (hasClass(cls) == !enabled) {
        getElement()?.classList[enabled ? "add" : "remove"](cls);
        currentImperativeProps.current.className[enabled ? "add" : "delete"](cls);
      }
    }, []);
    const setStyle = useCallback((prop, value) => {
      const element = getElement();
      if (element) {
        if (currentImperativeProps.current.style[prop] != value) {
          currentImperativeProps.current.style[prop] = value;
          if (prop.startsWith("--")) {
            if (value != null) element.style.setProperty(prop, `${value}`);else element.style.removeProperty(prop);
          } else {
            element.style[prop] = value ?? "";
          }
        }
      }
    }, []);
    const setChildren = useCallback(children => {
      let e = getElement();
      if (e && currentImperativeProps.current.children != children) {
        currentImperativeProps.current.children = children;
        currentImperativeProps.current.html = null;
        e.textContent = children;
      }
    }, []);
    const dangerouslySetInnerHTML = useCallback(children => {
      let e = getElement();
      if (e && currentImperativeProps.current.html != children) {
        currentImperativeProps.current.children = null;
        currentImperativeProps.current.html = children;
        e.innerHTML = children;
      }
    }, []);
    const dangerouslyAppendHTML = useCallback(children => {
      let e = getElement();
      if (e && children) {
        const newChild = htmlToElement(e, children);
        console.assert(newChild && newChild instanceof Node);
        if (newChild && newChild instanceof Node) {
          currentImperativeProps.current.children = null;
          currentImperativeProps.current.html ||= "";
          currentImperativeProps.current.html += children;
          e.appendChild(newChild);
          return newChild;
        }
      }
      return null;
    }, []);
    const getAttribute = useCallback(prop => {
      return currentImperativeProps.current.others[prop];
    }, []);
    const setAttribute = useCallback((prop, value) => {
      if (value != null) {
        if (getAttribute(prop) != value) {
          currentImperativeProps.current.others[prop] = value;
          getElement()?.setAttribute(prop, value);
        }
      } else {
        if (getAttribute(prop) != undefined) {
          delete currentImperativeProps.current.others[prop];
          getElement()?.removeAttribute(prop);
        }
      }
    }, []);
    const setEventHandler = useCallback((type, handler, options) => {
      const element = getElement();
      const mappedKey = EventMapping[type];
      if (element) {
        if (handler) {
          element.addEventListener(type, handler, options);
          currentImperativeProps.current.others[mappedKey] = handler;
        } else if (currentImperativeProps.current.others[mappedKey]) {
          element.removeEventListener(type, currentImperativeProps.current.others[mappedKey], options);
          currentImperativeProps.current.others[mappedKey] = undefined;
        }
      }
    }, []);
    return {
      imperativePropsReturn: A$1({
        hasClass,
        setClass,
        setStyle,
        getAttribute,
        setAttribute,
        setEventHandler,
        setChildren,
        dangerouslySetInnerHTML,
        dangerouslyAppendHTML
      }).current,
      props: useMergedProps({
        className: [...currentImperativeProps.current.className].join(" "),
        style: currentImperativeProps.current.style
      }, currentImperativeProps.current.html ? {
        dangerouslySetInnerHTML: {
          __html: currentImperativeProps.current.html
        }
      } : {}, {
        children: currentImperativeProps.current.children
      }, currentImperativeProps.current.others)
    };
  });
}
function ImperativeElementU({
  tag: Tag,
  handle,
  ...props
}, ref) {
  const {
    propsStable,
    refElementReturn
  } = useRefElement({
    refElementParameters: {}
  });
  const {
    props: imperativeProps,
    imperativePropsReturn: imperativeHandle
  } = useImperativeProps({
    refElementReturn
  });
  F$1(handle, () => imperativeHandle);
  return _$1(Tag, useMergedProps(propsStable, imperativeProps, props, {
    ref
  }));
}

/**
 * Allows monitoring whichever element is/was focused most recently, regardless of if it's *currently* focused.
 *
 * @see {@link useHasCurrentFocus}, where clicking the `body` is considered losing focus.
 *
 * @compositeParams
 */
function useHasLastFocus(args) {
  return useMonitoring(function useHasLastFocus() {
    const {
      refElementReturn: {
        getElement
      },
      activeElementParameters: {
        onLastActiveElementChange,
        ...activeElementParameters
      },
      hasLastFocusParameters: {
        onLastFocusedChanged,
        onLastFocusedInnerChanged,
        ...void1
      }
    } = args;
    const [getLastFocused, setLastFocused] = usePassiveState(onLastFocusedChanged, returnFalse, {
      debounceRendering: runImmediately,
      skipMountInitialization: true
    });
    const [getLastFocusedInner, setLastFocusedInner] = usePassiveState(onLastFocusedInnerChanged, returnFalse, {
      debounceRendering: runImmediately,
      skipMountInitialization: true
    });
    const {
      activeElementReturn
    } = useActiveElement({
      activeElementParameters: {
        onLastActiveElementChange: useCallback((lastActiveElement, prevLastActiveElement, e) => {
          const selfElement = getElement();
          const focused = selfElement != null && selfElement == lastActiveElement;
          const focusedInner = !!selfElement?.contains(lastActiveElement);
          setLastFocused(focused, e);
          setLastFocusedInner(focusedInner, e);
          onLastActiveElementChange?.(lastActiveElement, prevLastActiveElement, e);
        }, []),
        ...activeElementParameters
      }
    });
    y(() => {
      return () => {
        setLastFocused(false, undefined);
        setLastFocusedInner(false, undefined);
      };
    }, []);
    return {
      activeElementReturn,
      hasLastFocusReturn: {
        getLastFocused,
        getLastFocusedInner
      }
    };
  });
}
K$1(null);
const RandomWords2 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.".split(" ");
// TODO: Too lazy to set this up as context properly
//const shuffledWords = { current: RandomWords2 };
//const SingleSelectionModeContext = createContext<"activation" | "focus" | "disabled">("focus");
//const MultiSelectionModeContext = createContext<"activation" | "focus" | "disabled">("activation");
const UntabbableContext = K$1(false);
const ListNavigationSingleSelectionChildContext = K$1(null);
const ListChildContext = K$1(null);
const DemoUseRovingTabIndex = M(function DemoUseRovingTabIndex() {
  const [multiSelectPercent, setMultiSelectPercent] = useState(0);
  const [singleSelectedIndex, setSingleSelectedIndex] = useState(null);
  const [singleSelectionMode, setSingleSelectionMode] = useState("focus");
  const [multiSelectionMode, setMultiSelectionMode] = useState("activation");
  const [count, setCount] = useState(10);
  let [min, setMin] = useState(null);
  let [max, setMax] = useState(null);
  const [staggered, setStaggered] = useState(false);
  if (!isFinite(min ?? NaN)) min = null;
  if (!isFinite(max ?? NaN)) max = null;
  const untabbable = false;
  const onSelectionChange = e => {
    setMultiSelectPercent(e[EventDetail].selectedPercent);
  };
  const shuffle2 = q$1(() => {
    sortValues.current = shuffle(sortValues.current);
    refreshRows();
  }, []);
  const reverse2 = q$1(() => {
    sortValues.current = reverse(sortValues.current);
    refreshRows();
  }, []);
  let sortValues = A$1([]);
  const r = useCompleteListNavigationDeclarative({
    rovingTabIndexParameters: {
      onTabbableIndexChange: null,
      untabbable,
      focusSelfParent: focus
    },
    singleSelectionDeclarativeParameters: {
      singleSelectedIndex,
      onSingleSelectedIndexChange: useStableCallback(e => {
        setSingleSelectedIndex(e[EventDetail].selectedIndex);
      }, [])
    },
    typeaheadNavigationParameters: {
      collator: null,
      noTypeahead: false,
      typeaheadTimeout: 1000,
      onNavigateTypeahead: null
    },
    linearNavigationParameters: {
      disableHomeEndKeys: false,
      arrowKeyDirection: "vertical",
      navigatePastEnd: "wrap",
      navigatePastStart: "wrap",
      pageNavigationSize: 0.1,
      onNavigateLinear: null
    },
    refElementParameters: {},
    paginatedChildrenParameters: {
      paginationMin: min,
      paginationMax: max
    },
    singleSelectionParameters: {
      singleSelectionAriaPropName: "aria-selected",
      singleSelectionMode
    },
    multiSelectionParameters: {
      multiSelectionAriaPropName: "aria-checked",
      onSelectionChange,
      multiSelectionMode
    },
    processedIndexManglerParameters: {
      getSortValueAt: q$1(index => {
        return sortValues.current[index] ??= index;
      }, []),
      compare: null,
      getIndex: q$1(a => a.props.index, [])
    }
  });
  const {
    props,
    context,
    rovingTabIndexReturn: {
      setTabbableIndex
    },
    managedChildrenReturn: {
      getChildren
    },
    typeaheadNavigationReturn: {
      typeaheadStatus
    },
    rearrangeableChildrenReturn: {
      refresh: refreshRows
    }
  } = r;
  const secondsToHalve = 3;
  const halveNumberOfChildrenInWhateverNumberOfSecondsIFinallyDecidedOn = q$1(() => {
    setTimeout(() => {
      setCount(count => Math.floor(count / 2));
    }, secondsToHalve * 1000);
  }, []);
  const [staggering, setStaggering] = useState(false);
  return u$1("div", {
    className: "demo",
    children: [u$1("h2", {
      children: "Keyboard & List Navigation"
    }), u$1("h3", {
      children: u$1("code", {
        children: "useCompleteListNavigation"
      })
    }), u$1("p", {
      children: "This hook accomplishes a few things:"
    }), u$1("ul", {
      children: [u$1("li", {
        children: ["Turns a group of widgets into one singular composite widget with only ", u$1("strong", {
          children: "a single tab stop"
        }), " shared between them (a \"roving\" tab stop, because it wanders back and forth)."]
      }), u$1("li", {
        children: ["Navigation within this composite widget is done via:", u$1("ul", {
          children: [u$1("li", {
            children: "Arrow keys (up/down or left/right depending in the orientation you specify)"
          }), u$1("li", {
            children: "Page Up/Down to jump by a larger amount (either a fixed number or some percentage of the total number of items, as you specify)"
          }), u$1("li", {
            children: "Home/End to jump to the first or last item"
          })]
        })]
      }), u$1("li", {
        children: "Items can be marked as \"hidden\", in which case they are skipped over when navigating, no matter the method. E.G. if Home is pressed but the first item is hidden, the second item is focused instead."
      }), u$1("li", {
        children: "Items can be marked as \"disabled\" to prevent selection (with or without also marking them as \"hidden\", though \"hidden\" implies \"disabled\")."
      }), u$1("li", {
        children: "Children can be reordered arbitrarily, including sorting, shuffling, etc. while ensuring coherent navigation regardless."
      }), u$1("li", {
        children: ["The parent's selected index is ", u$1("strong", {
          children: "uncontrolled"
        }), " and so it does not re-render itself when the selected index changes (you can easily make it controlled, of course, at the cost of 1 additional render. See ", u$1("code", {
          children: "useSingleSelectionDeclarative"
        }), " for a shortcut to do exactly that)"]
      }), u$1("li", {
        children: "Changing which child is focused or selected only re-renders a maximum of 2 children each time."
      }), u$1("li", {
        children: ["Lists can be nested, and there is no strict requirement on DOM structure (except for sorting/rearranging children, if you use that).", u$1("ul", {
          children: u$1("li", {
            children: ["If you don't need sorting/rearranging this DOM requirement is ", u$1("strong", {
              children: "optional"
            }), "; rearranging requires all children be in one contiguous array of VNodes so that their ", u$1("code", {
              children: "key"
            }), " props can be manipulated."]
          })
        })]
      })]
    }), u$1("p", {
      children: "The biggest restriction of this method is that every child needs a 0-based numeric index."
    }), u$1("label", {
      children: ["# of items", u$1("input", {
        type: "number",
        value: count,
        min: 0,
        onInput: e => {
          e.preventDefault();
          setCount(e.currentTarget.valueAsNumber);
        }
      })]
    }), u$1("button", {
      onClick: () => shuffle2(),
      children: "Shuffle"
    }), u$1("button", {
      onClick: () => reverse2(),
      children: "Reverse"
    }), u$1("button", {
      onClick: () => halveNumberOfChildrenInWhateverNumberOfSecondsIFinallyDecidedOn(),
      children: ["Halve # of children in ", secondsToHalve, " seconds"]
    }), u$1("label", {
      children: ["Imperatively set the tabbable index to: ", u$1("input", {
        type: "number",
        onInput: e => {
          e.preventDefault();
          setTabbableIndex(e.currentTarget.valueAsNumber, e, false);
        }
      })]
    }), u$1("label", {
      children: ["Imperatively set the selected index to: ", u$1("input", {
        type: "number",
        onInput: e => {
          e.preventDefault();
          setSingleSelectedIndex(e.currentTarget.valueAsNumber);
        }
      }), " (currently ", singleSelectedIndex, ")"]
    }), u$1("label", {
      children: ["Pagination window starts at: ", u$1("input", {
        type: "number",
        value: min ?? undefined,
        min: 0,
        max: max ?? undefined,
        onInput: e => {
          e.preventDefault();
          setMin(e.currentTarget.valueAsNumber);
        }
      })]
    }), u$1("label", {
      children: ["Pagination window ends at: ", u$1("input", {
        type: "number",
        value: max ?? undefined,
        min: min ?? undefined,
        max: count,
        onInput: e => {
          e.preventDefault();
          setMax(e.currentTarget.valueAsNumber);
        }
      })]
    }), u$1("label", {
      children: ["Stagger delay: ", u$1("input", {
        type: "checkbox",
        checked: staggered,
        onInput: e => {
          e.preventDefault();
          setStaggered(e.currentTarget.checked);
        }
      })]
    }), u$1("label", {
      children: ["Single-Selection mode:", u$1("label", {
        children: [u$1("input", {
          name: "rti-demo-single-selection-mode",
          type: "radio",
          checked: singleSelectionMode == 'disabled',
          onInput: e => {
            e.preventDefault();
            setSingleSelectionMode("disabled");
          }
        }), " Off"]
      }), u$1("label", {
        children: [u$1("input", {
          name: "rti-demo-single-selection-mode",
          type: "radio",
          checked: singleSelectionMode == 'focus',
          onInput: e => {
            e.preventDefault();
            setSingleSelectionMode("focus");
          }
        }), " On focus"]
      }), u$1("label", {
        children: [u$1("input", {
          name: "rti-demo-single-selection-mode",
          type: "radio",
          checked: singleSelectionMode == 'activation',
          onInput: e => {
            e.preventDefault();
            setSingleSelectionMode("activation");
          }
        }), " On activation (click, tap, Enter, Space, etc.)"]
      })]
    }), u$1("label", {
      children: ["Multi-Selection mode:", u$1("label", {
        children: [u$1("input", {
          name: "rti-demo-multi-selection-mode",
          type: "radio",
          checked: multiSelectionMode == 'disabled',
          onInput: e => {
            e.preventDefault();
            setMultiSelectionMode("disabled");
          }
        }), " Off"]
      }), u$1("label", {
        children: [u$1("input", {
          name: "rti-demo-multi-selection-mode",
          type: "radio",
          checked: multiSelectionMode == 'focus',
          onInput: e => {
            e.preventDefault();
            setMultiSelectionMode("focus");
          }
        }), " On focus"]
      }), u$1("label", {
        children: [u$1("input", {
          name: "rti-demo-multi-selection-mode",
          type: "radio",
          checked: multiSelectionMode == 'activation',
          onInput: e => {
            e.preventDefault();
            setMultiSelectionMode("activation");
          }
        }), " On activation (click, tap, Enter, Space, etc.)"]
      })]
    }), u$1("div", {
      children: ["Staggering status: ", staggered ? staggering ? "Staggering..." : "Done staggering" : "Not staggered"]
    }), u$1("div", {
      children: ["Typeahead status: ", typeaheadStatus]
    }), u$1("div", {
      children: ["Multi-select: ", Math.round(multiSelectPercent * 100 * 10) / 10, "%"]
    }), u$1(UntabbableContext.Provider, {
      value: untabbable,
      children: u$1(ListNavigationSingleSelectionChildContext.Provider, {
        value: context,
        children: u$1("ol", {
          start: 0,
          ...props,
          children: u$1(DemoUseRovingTabIndexChildren, {
            max: max,
            min: min,
            staggered: staggered,
            count: count,
            setStaggering: setStaggering
          })
        })
      })
    })]
  });
});
const DemoUseRovingTabIndexChildren = M(function DemoUseRovingTabIndexChildren({
  count,
  max,
  min,
  staggered,
  setStaggering
}) {
  const {
    context,
    paginatedChildrenReturn,
    rearrangeableChildrenReturn,
    staggeredChildrenReturn
  } = useCompleteListNavigationChildren({
    paginatedChildrenParameters: {
      paginationMax: max,
      paginationMin: min
    },
    rearrangeableChildrenParameters: {
      children: T$1(() => Array.from(function* () {
        for (let i = 0; i < count; ++i) {
          if (i == 1) yield u$1("li", {
            children: u$1("span", {
              children: ["(Item ", i, " is a ", u$1("strong", {
                children: "hole in the array"
              }), " and does not exist)"]
            })
          });else yield u$1(DemoUseRovingTabIndexChildOuter, {
            index: i,
            word: RandomWords2[i]
          }, i);
        }
      }()), [count])
    },
    managedChildrenParameters: {},
    staggeredChildrenParameters: {
      staggered
    },
    context: x(ListNavigationSingleSelectionChildContext)
  });
  y(() => {
    setStaggering(staggeredChildrenReturn.stillStaggering);
  }, [staggeredChildrenReturn.stillStaggering]);
  return u$1(ListChildContext.Provider, {
    value: context,
    children: rearrangeableChildrenReturn.children
  });
});
const DemoUseRovingTabIndexChildOuter = M(function DemoUseRovingTabIndexChildOuter({
  index,
  word,
  mangledIndex,
  demangledIndex
}) {
  const {
    hide,
    managedChildReturn,
    paginatedChildReturn,
    props,
    refElementReturn,
    staggeredChildReturn
  } = useCompleteListNavigationChildOuter({
    context: x(ListChildContext),
    info: {
      index
    },
    refElementParameters: {},
    rearrangeableChildParameters: {
      cssProperty: 'translate',
      duration: '666ms'
    }
  });
  //const c = useMemo(() => <DemoUseRovingTabIndexChild word={word} index={index} mangledIndex={mangledIndex} demangledIndex={demangledIndex} />, [mangledIndex, demangledIndex, index]);
  const c = u$1(DemoUseRovingTabIndexChild, {
    word: word,
    index: index,
    mangledIndex: mangledIndex,
    demangledIndex: demangledIndex
  });
  return u$1("li", {
    ...props,
    children: paginatedChildReturn.hideBecausePaginated || staggeredChildReturn.hideBecauseStaggered ? "\xA0" : c
  });
});
const DemoUseRovingTabIndexChild = M(function DemoUseRovingTabIndexChild({
  index,
  word,
  mangledIndex,
  demangledIndex
}) {
  let disabled = index == 6;
  let hidden = index == 7;
  if (index == 8) {
    disabled = hidden = true;
  }
  const [multiSelected, setMultiSelected] = useState(false);
  const randomWord = word; // shuffledWords.current[index];
  const context = x(ListNavigationSingleSelectionChildContext);
  const focusSelf = q$1(e => {
    focus(e);
  }, []);
  useStableCallback(() => index);
  const {
    hasCurrentFocusReturn,
    managedChildReturn,
    propsChild,
    propsTabbable,
    textContentReturn,
    rovingTabIndexChildReturn: {
      tabbable
    },
    singleSelectionChildReturn: {
      singleSelected,
      getSingleSelected,
      singleSelectedOffset,
      getSingleSelectedOffset
    },
    multiSelectionChildReturn: {
      getMultiSelected
    },
    pressParameters: {
      excludeSpace
    },
    selectionChildReturn: {
      firePressSelectionEvent
    },
    refElementReturn
  } = useCompleteListNavigationChildDeclarative({
    info: {
      index,
      focusSelf,
      foo: "bar",
      untabbable: hidden
    },
    context,
    textContentParameters: {
      getText: q$1(e => {
        return e?.textContent ?? "";
      }, []),
      onTextContentChange: null
    },
    hasCurrentFocusParameters: {
      onCurrentFocusedChanged: null,
      onCurrentFocusedInnerChanged: null
    },
    refElementParameters: {
      onElementChange: null,
      onMount: null,
      onUnmount: null
    },
    multiSelectionChildParameters: {
      multiSelectionDisabled: disabled
    },
    singleSelectionChildParameters: {
      singleSelectionDisabled: disabled
    },
    multiSelectionChildDeclarativeParameters: {
      multiSelected,
      onMultiSelectedChange: e => setMultiSelected(e[EventDetail].multiSelected)
    }
  });
  const {
    pressReturn,
    props: p2
  } = usePress({
    pressParameters: {
      focusSelf,
      onPressSync: firePressSelectionEvent,
      excludeSpace,
      allowRepeatPresses: false,
      excludeEnter: null,
      excludePointer: null,
      longPressThreshold: null,
      onPressingChange: null
    },
    refElementReturn
  });
  let s = singleSelected && multiSelected ? " (single- & multi- selected)" : singleSelected ? " (single-selected)" : multiSelected ? " (multi-selected)" : "";
  const text = `${randomWord} This is item #${index} (#${demangledIndex} to #${mangledIndex}). Offset: ${singleSelected}. ${hidden ? " (hidden)" : ""}${disabled ? " (disabled)" : ""}${s} (${tabbable ? "Tabbable" : "Not tabbable"})`;
  return u$1("span", {
    ...useMergedProps(propsChild, propsTabbable, p2),
    children: [text, u$1("input", {
      ...useMergedProps(propsTabbable, {
        type: "number"
      }),
      style: {
        width: "5ch"
      }
    })]
  });
});
window._generate_setState_stacks = false;
K$1(null);
M(({
  depth
}) => {
  const [active, setActive] = useState(false);
  const {
    propsStable,
    refElementReturn
  } = useRefElement({
    refElementParameters: {}
  });
  const {
    props
  } = useFocusTrap({
    focusTrapParameters: {
      trapActive: active,
      onlyMoveFocus: false,
      focusOpener: e => focus(e),
      focusPopup: (e, f) => focus(f())
    },
    activeElementParameters: {
      getDocument,
      onActiveElementChange: null,
      onLastActiveElementChange: null,
      onWindowFocusedChange: null
    },
    refElementReturn
  });
  //const { useRovingTabIndexChild, useRovingTabIndexProps } = useRovingTabIndex<HTMLUListElement, RovingTabIndexChildInfo>({ tabbableIndex, focusOnChange: false });
  const divProps = useMergedProps(props, propsStable, {
    ref: undefined,
    className: "focus-trap-demo"
  });
  if (depth == 2) return u$1("div", {});
  return u$1("div", {
    className: "demo",
    children: [u$1("label", {
      children: ["Active: ", u$1("input", {
        type: "checkbox",
        checked: active,
        onInput: e => {
          e.preventDefault();
          setActive(e.currentTarget.checked);
        }
      })]
    }), u$1("div", {
      ...divProps,
      children: u$1(DemoUseFocusTrapChild, {
        active: active,
        setActive: setActive,
        depth: depth ?? 0
      })
    })]
  });
});
const DemoUseFocusTrapChild = M(({
  setActive,
  active
}) => {
  return u$1(k$1, {
    children: [u$1("button", {
      children: "Button 1"
    }), u$1("button", {
      children: "Button 2"
    }), u$1("button", {
      children: "Button 3"
    }), u$1("label", {
      children: ["Active: ", u$1("input", {
        type: "checkbox",
        checked: active,
        onInput: e => {
          e.preventDefault();
          setActive(e.currentTarget.checked);
        }
      })]
    })]
  });
});
M(() => {
  const [timeout, setTimeout] = useState(1000);
  const [debounce, setDebounce] = useState(0);
  const [shouldThrow, setShouldThrow, getShouldThrow] = useState(false);
  const [disableConsecutive, setDisableConsecutive] = useState(false);
  const asyncOnClick = (_v, _e) => new Promise((resolve, reject) => window.setTimeout(() => getShouldThrow() ? reject() : resolve(), timeout));
  const {
    callCount,
    settleCount,
    hasCapture,
    syncHandler,
    pending,
    hasError,
    rejectCount,
    resolveCount
  } = useAsyncHandler({
    asyncHandler: asyncOnClick,
    capture: () => {},
    debounce: debounce == 0 ? undefined : debounce,
    throttle: null
  });
  const onClick = pending ? undefined : syncHandler;
  return u$1("div", {
    className: "demo",
    children: [u$1("button", {
      disabled: pending && disableConsecutive,
      onClick: onClick,
      children: "Click me!"
    }), u$1("label", {
      children: ["Sleep for: ", u$1("input", {
        type: "number",
        value: timeout,
        onInput: e => setTimeout(e.currentTarget.valueAsNumber)
      })]
    }), u$1("label", {
      children: ["Throw an error ", u$1("input", {
        type: "checkbox",
        checked: shouldThrow,
        onInput: e => setShouldThrow(e.currentTarget.checked)
      })]
    }), u$1("label", {
      children: ["Disabled while pending ", u$1("input", {
        type: "checkbox",
        checked: disableConsecutive,
        onInput: e => setDisableConsecutive(e.currentTarget.checked)
      })]
    }), u$1("label", {
      children: ["Debounce: ", u$1("input", {
        type: "number",
        value: debounce,
        onInput: e => setDebounce(e.currentTarget.valueAsNumber)
      })]
    }), u$1("table", {
      children: [u$1("thead", {
        children: u$1("tr", {
          children: [u$1("th", {
            children: "Field"
          }), u$1("th", {
            children: "Value"
          })]
        })
      }), u$1("tbody", {
        children: [u$1("tr", {
          children: [u$1("td", {
            children: "callCount"
          }), u$1("td", {
            children: callCount
          })]
        }), u$1("tr", {
          children: [u$1("td", {
            children: "settleCount"
          }), u$1("td", {
            children: settleCount
          })]
        }), u$1("tr", {
          children: [u$1("td", {
            children: "resolveCount"
          }), u$1("td", {
            children: resolveCount
          })]
        }), u$1("tr", {
          children: [u$1("td", {
            children: "rejectCount"
          }), u$1("td", {
            children: rejectCount
          })]
        }), u$1("tr", {
          children: [u$1("td", {
            children: "hasError"
          }), u$1("td", {
            children: hasError.toString()
          })]
        }), u$1("tr", {
          children: [u$1("td", {
            children: "hasCapture"
          }), u$1("td", {
            children: hasCapture.toString()
          })]
        })]
      })]
    })]
  });
});
M(() => {
  const [timeout, setTimeout] = useState(1000);
  const [debounce, setDebounce] = useState(0);
  const [throttle, setThrottle] = useState(0);
  const [shouldThrow, setShouldThrow, getShouldThrow] = useState(false);
  const [disableConsecutive, setDisableConsecutive] = useState(false);
  const [text, setText] = useState("");
  const onInputAsync = async (v, _e) => new Promise((resolve, reject) => window.setTimeout(() => {
    if (getShouldThrow()) {
      reject();
    } else {
      setText(v);
      resolve();
    }
  }, timeout));
  const {
    callCount,
    settleCount,
    hasCapture,
    syncHandler,
    currentCapture,
    pending,
    hasError,
    rejectCount,
    resolveCount,
    debouncingAsync,
    debouncingSync
  } = useAsyncHandler({
    asyncHandler: onInputAsync,
    capture: e => {
      e.preventDefault();
      return e.currentTarget.value;
    },
    debounce: debounce == 0 ? undefined : debounce,
    throttle: throttle == 0 ? undefined : throttle
  });
  let anyWaiting = pending || debouncingAsync || debouncingSync;
  return u$1("div", {
    className: "demo",
    children: [u$1("label", {
      children: ["Demo text: ", u$1("input", {
        value: hasCapture ? currentCapture : text,
        disabled: pending && disableConsecutive,
        onInput: syncHandler
      })]
    }), u$1("hr", {}), u$1("label", {
      children: ["# of milliseconds the async handler takes to run: ", u$1("input", {
        type: "number",
        value: timeout,
        onInput: e => setTimeout(e.currentTarget.valueAsNumber)
      })]
    }), u$1("label", {
      children: ["Throw an error ", u$1("input", {
        type: "checkbox",
        checked: shouldThrow,
        onInput: e => setShouldThrow(e.currentTarget.checked)
      })]
    }), u$1("label", {
      children: ["Disabled while pending ", u$1("input", {
        type: "checkbox",
        checked: disableConsecutive,
        onInput: e => setDisableConsecutive(e.currentTarget.checked)
      })]
    }), u$1("label", {
      children: ["Debounce: ", u$1("input", {
        type: "number",
        value: debounce,
        onInput: e => setDebounce(e.currentTarget.valueAsNumber)
      })]
    }), u$1("label", {
      children: ["Throttle: ", u$1("input", {
        type: "number",
        value: throttle,
        onInput: e => setThrottle(e.currentTarget.valueAsNumber)
      })]
    }), u$1("table", {
      children: [u$1("thead", {
        children: u$1("tr", {
          children: [u$1("th", {
            children: "Field"
          }), u$1("th", {
            children: "Value"
          })]
        })
      }), u$1("tbody", {
        children: [u$1("tr", {
          children: [u$1("td", {
            children: "showSpinner"
          }), u$1("td", {
            children: `${anyWaiting}`
          })]
        }), u$1("tr", {
          children: [u$1("td", {
            children: "pending"
          }), u$1("td", {
            children: `${pending}`
          })]
        }), u$1("tr", {
          children: [u$1("td", {
            children: "debouncingSync"
          }), u$1("td", {
            children: `${debouncingSync}`
          })]
        }), u$1("tr", {
          children: [u$1("td", {
            children: "debouncingAsync"
          }), u$1("td", {
            children: `${debouncingAsync}`
          })]
        }), u$1("tr", {
          children: [u$1("td", {
            children: "callCount"
          }), u$1("td", {
            children: callCount
          })]
        }), u$1("tr", {
          children: [u$1("td", {
            children: "settleCount"
          }), u$1("td", {
            children: settleCount
          })]
        }), u$1("tr", {
          children: [u$1("td", {
            children: "resolveCount"
          }), u$1("td", {
            children: resolveCount
          })]
        }), u$1("tr", {
          children: [u$1("td", {
            children: "rejectCount"
          }), u$1("td", {
            children: rejectCount
          })]
        }), u$1("tr", {
          children: [u$1("td", {
            children: "hasError"
          }), u$1("td", {
            children: hasError.toString()
          })]
        }), u$1("tr", {
          children: [u$1("td", {
            children: "currentCapture"
          }), u$1("td", {
            children: currentCapture
          })]
        }), u$1("tr", {
          children: [u$1("td", {
            children: "\"Saved\" input"
          }), u$1("td", {
            children: text
          })]
        })]
      })]
    })]
  });
});
function getDocument() {
  return window.document;
}
M(() => {
  const [focusCount, setFocusCount] = useState(0);
  const [innerFocusCount, setInnerFocusCount] = useState(0);
  const [lastActiveElement, setLastActiveElement] = useState(null);
  const [activeElement, setActiveElement] = useState(null);
  const [windowFocused, setWindowFocused] = useState(false);
  const [focused, setFocused] = useState(false);
  const [focusedInner, setFocusedInner] = useState(false);
  const [lastFocused, setLastFocused] = useState(false);
  const [lastFocusedInner, setLastFocusedInner] = useState(false);
  const {
    refElementReturn,
    propsStable: p2
  } = useRefElement({
    refElementParameters: {
      onElementChange: undefined
    }
  });
  const {
    hasCurrentFocusReturn: {
      propsStable: p1
    }
  } = useHasCurrentFocus({
    refElementReturn,
    hasCurrentFocusParameters: {
      onCurrentFocusedChanged: useStableCallback(focused => {
        setFocused(focused);
        if (focused) setFocusCount(c => ++c);
      }),
      onCurrentFocusedInnerChanged: useStableCallback(focused => {
        setFocusedInner(focused);
        if (focused) setInnerFocusCount(c => ++c);
      })
    }
  });
  useHasLastFocus({
    refElementReturn,
    activeElementParameters: {
      getDocument,
      onActiveElementChange: setActiveElement,
      onLastActiveElementChange: setLastActiveElement,
      onWindowFocusedChange: setWindowFocused
    },
    hasLastFocusParameters: {
      onLastFocusedChanged: setLastFocused,
      onLastFocusedInnerChanged: setLastFocusedInner
    }
  });
  return u$1("div", {
    class: "demo",
    children: [u$1("h2", {
      children: "useHasFocus"
    }), u$1("p", {
      children: "Tracks focus related to the component:"
    }), u$1("ul", {
      children: [u$1("li", {
        children: "Is this element (or, optionally, any element within it) focused?"
      }), u$1("li", {
        children: ["Regardless of if focus was lost because the ", u$1("code", {
          children: "body"
        }), " was clicked, was this element (or, optionally, any element within it), the last to be actually focused?"]
      }), u$1("li", {
        children: "Does the window have focus?"
      })]
    }), u$1("div", {
      ...useMergedProps(p2, p1, {
        style: {
          border: "1px solid black"
        },
        tabIndex: 0
      }),
      children: [u$1("span", {
        children: "Outer element"
      }), u$1("input", {}), u$1("input", {}), u$1("div", {
        tabIndex: 0,
        style: {
          border: "1px solid black"
        },
        children: [u$1("span", {
          children: "Inner element"
        }), u$1("input", {}), u$1("input", {})]
      })]
    }), u$1("div", {
      children: u$1("ul", {
        children: [u$1("li", {
          children: ["Focus count: ", focusCount]
        }), u$1("li", {
          children: ["Inner focus count: ", innerFocusCount]
        }), u$1("li", {
          children: ["Strictly focused: ", focused.toString(), ", ", lastFocused.toString(), " (focused, lastFocused)"]
        }), u$1("li", {
          children: ["Inner focused: ", focusedInner.toString(), ", ", lastFocusedInner.toString(), " (focusedInner, lastFocusedInner)"]
        }), u$1("li", {
          children: ["Window focused: ", windowFocused.toString()]
        }), u$1("li", {
          children: ["activeElement: ", activeElement?.textContent]
        }), u$1("li", {
          children: ["lastActiveElement: ", lastActiveElement?.textContent]
        })]
      })
    })]
  });
});
M(function DemoGlobalHandlerChildren({
  count,
  mode
}) {
  return u$1(k$1, {
    children: [...function* () {
      for (let i = 0; i < count; ++i) {
        yield u$1(DemoGlobalHandlerChild, {
          mode: mode,
          target: window
        }, i);
      }
    }()]
  });
});
const DemoGlobalHandlerChild = M(function DemoGlobalHandlerChild({
  mode,
  target
}) {
  useGlobalHandler(target, "click", mode == null ? null : e => {
    if (e.target?.id != "global-handler-test2") return;
    window._demo_event = (window._demo_event || 0) + 1;
  }, {}, mode || "grouped");
  return u$1("div", {
    hidden: true
  });
});
/*
const StaggeredContext = createContext<UseManagedChildrenContext<UseStaggeredChildrenInfo> & UseStaggeredChildContext>(null!);

const DemoStaggered = memo(() => {
    const [staggered, setStaggered] = useState(false);
    const [checked, setChecked] = useState(false);
    const [childCount, setChildCount] = useState(100);
    const { context: mcc, managedChildrenReturn } = useManagedChildren<UseStaggeredChildrenInfo>({ managedChildrenParameters: {} })
    const { context: scc, staggeredChildrenReturn } = useStaggeredChildren({ managedChildrenReturn, staggeredChildrenParameters: { staggered, childCount }, refElementReturn })
    return (
        <StaggeredContext.Provider value={{ ...mcc, ...scc }}>
            <div class="demo">
                <label><input type="checkbox" checked={checked} onInput={e => { e.preventDefault(); setChecked(e.currentTarget.checked) }} /> Children mounted</label>
                <label><input type="checkbox" checked={staggered} onInput={e => { e.preventDefault(); setStaggered(e.currentTarget.checked) }} /> Children Staggered</label>
                <label><input type="number" value={childCount} onInput={e => { e.preventDefault(); setChildCount(e.currentTarget.valueAsNumber) }} /> # of children</label>
                <div>
                    <div>Status: {staggered ? staggeredChildrenReturn.stillStaggering ? "staggering" : "done staggering" : "(not staggering)"}</div>
                    <div style="display:flex;flex-wrap: wrap;">{checked && <DemoStaggeredChildren childCount={childCount} />}</div>
                </div>
            </div>
        </StaggeredContext.Provider>
    )
})

const DemoStaggeredChildren = memo(({ childCount }: { childCount: number }) => {
    return (
        <>
            {Array.from(function* () {
                for (let i = 0; i < childCount; ++i) {
                    yield <DemoStaggeredChild index={i} key={i} />
                }
            }())}
        </>
    )
})

const DemoStaggeredChild = memo(({ index }: { index: number }) => {
    const context = useContext(StaggeredContext);
    const { info, props, staggeredChildReturn: { hideBecauseStaggered, parentIsStaggered } } = useStaggeredChild<HTMLDivElement>({ context: context, info: { index } });
    const { managedChildReturn } = useManagedChild<UseStaggeredChildrenInfo>({ context, info: { ...info, index } });

    return (
        <div {...useMergedProps(props, { style: hideBecauseStaggered ? { opacity: 0.25 } : {} })}>Child #{index}{parentIsStaggered ? hideBecauseStaggered ? "(pending)" : "" : "(not staggered)"}</div>
    )
})*/
// options.debounceRendering = (f) => f();
const Component = () => {
  return u$1("div", {
    class: "flex",
    style: {
      flexWrap: "wrap"
    },
    children: [u$1(DemoUseRovingTabIndex, {}), u$1("hr", {})]
  });
};
requestAnimationFrame(() => {
  E$1(u$1(Component, {}), document.getElementById("root"));
});
//# sourceMappingURL=index.js.map
