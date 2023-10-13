(function () {
  'use strict';

  var n,
    l$1,
    u$1,
    i$1,
    o$2,
    r$1,
    f$1,
    e$1,
    c$1 = {},
    s$1 = [],
    a$1 = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,
    h$1 = Array.isArray;
  function v$1(n, l) {
    for (var u in l) n[u] = l[u];
    return n;
  }
  function p$1(n) {
    var l = n.parentNode;
    l && l.removeChild(n);
  }
  function y$1(l, u, t) {
    var i,
      o,
      r,
      f = {};
    for (r in u) "key" == r ? i = u[r] : "ref" == r ? o = u[r] : f[r] = u[r];
    if (arguments.length > 2 && (f.children = arguments.length > 3 ? n.call(arguments, 2) : t), "function" == typeof l && null != l.defaultProps) for (r in l.defaultProps) void 0 === f[r] && (f[r] = l.defaultProps[r]);
    return d$1(l, f, i, o, null);
  }
  function d$1(n, t, i, o, r) {
    var f = {
      type: n,
      props: t,
      key: i,
      ref: o,
      __k: null,
      __: null,
      __b: 0,
      __e: null,
      __d: void 0,
      __c: null,
      __h: null,
      constructor: void 0,
      __v: null == r ? ++u$1 : r
    };
    return null == r && null != l$1.vnode && l$1.vnode(f), f;
  }
  function k$2(n) {
    return n.children;
  }
  function b$1(n, l) {
    this.props = n, this.context = l;
  }
  function g$2(n, l) {
    if (null == l) return n.__ ? g$2(n.__, n.__.__k.indexOf(n) + 1) : null;
    for (var u; l < n.__k.length; l++) if (null != (u = n.__k[l]) && null != u.__e) return u.__e;
    return "function" == typeof n.type ? g$2(n) : null;
  }
  function m$1(n) {
    var l, u;
    if (null != (n = n.__) && null != n.__c) {
      for (n.__e = n.__c.base = null, l = 0; l < n.__k.length; l++) if (null != (u = n.__k[l]) && null != u.__e) {
        n.__e = n.__c.base = u.__e;
        break;
      }
      return m$1(n);
    }
  }
  function w$2(n) {
    (!n.__d && (n.__d = !0) && i$1.push(n) && !x$1.__r++ || o$2 !== l$1.debounceRendering) && ((o$2 = l$1.debounceRendering) || r$1)(x$1);
  }
  function x$1() {
    var n, l, u, t, o, r, e, c, s;
    for (i$1.sort(f$1); n = i$1.shift();) n.__d && (l = i$1.length, t = void 0, o = void 0, r = void 0, c = (e = (u = n).__v).__e, (s = u.__P) && (t = [], o = [], (r = v$1({}, e)).__v = e.__v + 1, L$1(s, e, r, u.__n, void 0 !== s.ownerSVGElement, null != e.__h ? [c] : null, t, null == c ? g$2(e) : c, e.__h, o), M(t, e, o), e.__e != c && m$1(e)), i$1.length > l && i$1.sort(f$1));
    x$1.__r = 0;
  }
  function P$1(n, l, u, t, i, o, r, f, e, a, v) {
    var p,
      y,
      _,
      b,
      m,
      w,
      x,
      P,
      C,
      H = 0,
      I = t && t.__k || s$1,
      T = I.length,
      j = T,
      z = l.length;
    for (u.__k = [], p = 0; p < z; p++) null != (b = u.__k[p] = null == (b = l[p]) || "boolean" == typeof b || "function" == typeof b ? null : "string" == typeof b || "number" == typeof b || "bigint" == typeof b ? d$1(null, b, null, null, b) : h$1(b) ? d$1(k$2, {
      children: b
    }, null, null, null) : b.__b > 0 ? d$1(b.type, b.props, b.key, b.ref ? b.ref : null, b.__v) : b) ? (b.__ = u, b.__b = u.__b + 1, -1 === (P = A$1(b, I, x = p + H, j)) ? _ = c$1 : (_ = I[P] || c$1, I[P] = void 0, j--), L$1(n, b, _, i, o, r, f, e, a, v), m = b.__e, (y = b.ref) && _.ref != y && (_.ref && O(_.ref, null, b), v.push(y, b.__c || m, b)), null != m && (null == w && (w = m), (C = _ === c$1 || null === _.__v) ? -1 == P && H-- : P !== x && (P === x + 1 ? H++ : P > x ? j > z - x ? H += P - x : H-- : H = P < x && P == x - 1 ? P - x : 0), x = p + H, "function" != typeof b.type || P === x && _.__k !== b.__k ? "function" == typeof b.type || P === x && !C ? void 0 !== b.__d ? (e = b.__d, b.__d = void 0) : e = m.nextSibling : e = S(n, m, e) : e = $$1(b, e, n), "function" == typeof u.type && (u.__d = e))) : (_ = I[p]) && null == _.key && _.__e && (_.__e == e && (e = g$2(_)), q$2(_, _, !1), I[p] = null);
    for (u.__e = w, p = T; p--;) null != I[p] && ("function" == typeof u.type && null != I[p].__e && I[p].__e == u.__d && (u.__d = I[p].__e.nextSibling), q$2(I[p], I[p]));
  }
  function $$1(n, l, u) {
    for (var t, i = n.__k, o = 0; i && o < i.length; o++) (t = i[o]) && (t.__ = n, l = "function" == typeof t.type ? $$1(t, l, u) : S(u, t.__e, l));
    return l;
  }
  function C$1(n, l) {
    return l = l || [], null == n || "boolean" == typeof n || (h$1(n) ? n.some(function (n) {
      C$1(n, l);
    }) : l.push(n)), l;
  }
  function S(n, l, u) {
    return null == u || u.parentNode !== n ? n.insertBefore(l, null) : l == u && null != l.parentNode || n.insertBefore(l, u), l.nextSibling;
  }
  function A$1(n, l, u, t) {
    var i = n.key,
      o = n.type,
      r = u - 1,
      f = u + 1,
      e = l[u];
    if (null === e || e && i == e.key && o === e.type) return u;
    if (t > (null != e ? 1 : 0)) for (; r >= 0 || f < l.length;) {
      if (r >= 0) {
        if ((e = l[r]) && i == e.key && o === e.type) return r;
        r--;
      }
      if (f < l.length) {
        if ((e = l[f]) && i == e.key && o === e.type) return f;
        f++;
      }
    }
    return -1;
  }
  function H$1(n, l, u, t, i) {
    var o;
    for (o in u) "children" === o || "key" === o || o in l || T$2(n, o, null, u[o], t);
    for (o in l) i && "function" != typeof l[o] || "children" === o || "key" === o || "value" === o || "checked" === o || u[o] === l[o] || T$2(n, o, l[o], u[o], t);
  }
  function I$1(n, l, u) {
    "-" === l[0] ? n.setProperty(l, null == u ? "" : u) : n[l] = null == u ? "" : "number" != typeof u || a$1.test(l) ? u : u + "px";
  }
  function T$2(n, l, u, t, i) {
    var o;
    n: if ("style" === l) {
      if ("string" == typeof u) n.style.cssText = u;else {
        if ("string" == typeof t && (n.style.cssText = t = ""), t) for (l in t) u && l in u || I$1(n.style, l, "");
        if (u) for (l in u) t && u[l] === t[l] || I$1(n.style, l, u[l]);
      }
    } else if ("o" === l[0] && "n" === l[1]) o = l !== (l = l.replace(/(PointerCapture)$|Capture$/, "$1")), l = l.toLowerCase() in n ? l.toLowerCase().slice(2) : l.slice(2), n.l || (n.l = {}), n.l[l + o] = u, u ? t || n.addEventListener(l, o ? z$2 : j$2, o) : n.removeEventListener(l, o ? z$2 : j$2, o);else if ("dangerouslySetInnerHTML" !== l) {
      if (i) l = l.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");else if ("width" !== l && "height" !== l && "href" !== l && "list" !== l && "form" !== l && "tabIndex" !== l && "download" !== l && "rowSpan" !== l && "colSpan" !== l && l in n) try {
        n[l] = null == u ? "" : u;
        break n;
      } catch (n) {}
      "function" == typeof u || (null == u || !1 === u && "-" !== l[4] ? n.removeAttribute(l) : n.setAttribute(l, u));
    }
  }
  function j$2(n) {
    return this.l[n.type + !1](l$1.event ? l$1.event(n) : n);
  }
  function z$2(n) {
    return this.l[n.type + !0](l$1.event ? l$1.event(n) : n);
  }
  function L$1(n, u, t, i, o, r, f, e, c, s) {
    var a,
      p,
      y,
      d,
      _,
      g,
      m,
      w,
      x,
      $,
      C,
      S,
      A,
      H,
      I,
      T = u.type;
    if (void 0 !== u.constructor) return null;
    null != t.__h && (c = t.__h, e = u.__e = t.__e, u.__h = null, r = [e]), (a = l$1.__b) && a(u);
    n: if ("function" == typeof T) try {
      if (w = u.props, x = (a = T.contextType) && i[a.__c], $ = a ? x ? x.props.value : a.__ : i, t.__c ? m = (p = u.__c = t.__c).__ = p.__E : ("prototype" in T && T.prototype.render ? u.__c = p = new T(w, $) : (u.__c = p = new b$1(w, $), p.constructor = T, p.render = B$2), x && x.sub(p), p.props = w, p.state || (p.state = {}), p.context = $, p.__n = i, y = p.__d = !0, p.__h = [], p._sb = []), null == p.__s && (p.__s = p.state), null != T.getDerivedStateFromProps && (p.__s == p.state && (p.__s = v$1({}, p.__s)), v$1(p.__s, T.getDerivedStateFromProps(w, p.__s))), d = p.props, _ = p.state, p.__v = u, y) null == T.getDerivedStateFromProps && null != p.componentWillMount && p.componentWillMount(), null != p.componentDidMount && p.__h.push(p.componentDidMount);else {
        if (null == T.getDerivedStateFromProps && w !== d && null != p.componentWillReceiveProps && p.componentWillReceiveProps(w, $), !p.__e && (null != p.shouldComponentUpdate && !1 === p.shouldComponentUpdate(w, p.__s, $) || u.__v === t.__v)) {
          for (u.__v !== t.__v && (p.props = w, p.state = p.__s, p.__d = !1), u.__e = t.__e, u.__k = t.__k, u.__k.forEach(function (n) {
            n && (n.__ = u);
          }), C = 0; C < p._sb.length; C++) p.__h.push(p._sb[C]);
          p._sb = [], p.__h.length && f.push(p);
          break n;
        }
        null != p.componentWillUpdate && p.componentWillUpdate(w, p.__s, $), null != p.componentDidUpdate && p.__h.push(function () {
          p.componentDidUpdate(d, _, g);
        });
      }
      if (p.context = $, p.props = w, p.__P = n, p.__e = !1, S = l$1.__r, A = 0, "prototype" in T && T.prototype.render) {
        for (p.state = p.__s, p.__d = !1, S && S(u), a = p.render(p.props, p.state, p.context), H = 0; H < p._sb.length; H++) p.__h.push(p._sb[H]);
        p._sb = [];
      } else do {
        p.__d = !1, S && S(u), a = p.render(p.props, p.state, p.context), p.state = p.__s;
      } while (p.__d && ++A < 25);
      p.state = p.__s, null != p.getChildContext && (i = v$1(v$1({}, i), p.getChildContext())), y || null == p.getSnapshotBeforeUpdate || (g = p.getSnapshotBeforeUpdate(d, _)), P$1(n, h$1(I = null != a && a.type === k$2 && null == a.key ? a.props.children : a) ? I : [I], u, t, i, o, r, f, e, c, s), p.base = u.__e, u.__h = null, p.__h.length && f.push(p), m && (p.__E = p.__ = null);
    } catch (n) {
      u.__v = null, (c || null != r) && (u.__e = e, u.__h = !!c, r[r.indexOf(e)] = null), l$1.__e(n, u, t);
    } else null == r && u.__v === t.__v ? (u.__k = t.__k, u.__e = t.__e) : u.__e = N$1(t.__e, u, t, i, o, r, f, c, s);
    (a = l$1.diffed) && a(u);
  }
  function M(n, u, t) {
    for (var i = 0; i < t.length; i++) O(t[i], t[++i], t[++i]);
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
  function N$1(l, u, t, i, o, r, f, e, s) {
    var a,
      v,
      y,
      d = t.props,
      _ = u.props,
      k = u.type,
      b = 0;
    if ("svg" === k && (o = !0), null != r) for (; b < r.length; b++) if ((a = r[b]) && "setAttribute" in a == !!k && (k ? a.localName === k : 3 === a.nodeType)) {
      l = a, r[b] = null;
      break;
    }
    if (null == l) {
      if (null === k) return document.createTextNode(_);
      l = o ? document.createElementNS("http://www.w3.org/2000/svg", k) : document.createElement(k, _.is && _), r = null, e = !1;
    }
    if (null === k) d === _ || e && l.data === _ || (l.data = _);else {
      if (r = r && n.call(l.childNodes), v = (d = t.props || c$1).dangerouslySetInnerHTML, y = _.dangerouslySetInnerHTML, !e) {
        if (null != r) for (d = {}, b = 0; b < l.attributes.length; b++) d[l.attributes[b].name] = l.attributes[b].value;
        (y || v) && (y && (v && y.__html == v.__html || y.__html === l.innerHTML) || (l.innerHTML = y && y.__html || ""));
      }
      if (H$1(l, _, d, o, e), y) u.__k = [];else if (P$1(l, h$1(b = u.props.children) ? b : [b], u, t, i, o && "foreignObject" !== k, r, f, r ? r[0] : t.__k && g$2(t, 0), e, s), null != r) for (b = r.length; b--;) null != r[b] && p$1(r[b]);
      e || ("value" in _ && void 0 !== (b = _.value) && (b !== l.value || "progress" === k && !b || "option" === k && b !== d.value) && T$2(l, "value", b, d.value, !1), "checked" in _ && void 0 !== (b = _.checked) && b !== l.checked && T$2(l, "checked", b, d.checked, !1));
    }
    return l;
  }
  function O(n, u, t) {
    try {
      "function" == typeof n ? n(u) : n.current = u;
    } catch (n) {
      l$1.__e(n, t);
    }
  }
  function q$2(n, u, t) {
    var i, o;
    if (l$1.unmount && l$1.unmount(n), (i = n.ref) && (i.current && i.current !== n.__e || O(i, null, u)), null != (i = n.__c)) {
      if (i.componentWillUnmount) try {
        i.componentWillUnmount();
      } catch (n) {
        l$1.__e(n, u);
      }
      i.base = i.__P = null, n.__c = void 0;
    }
    if (i = n.__k) for (o = 0; o < i.length; o++) i[o] && q$2(i[o], u, t || "function" != typeof n.type);
    t || null == n.__e || p$1(n.__e), n.__ = n.__e = n.__d = void 0;
  }
  function B$2(n, l, u) {
    return this.constructor(n, u);
  }
  function D$1(u, t, i) {
    var o, r, f, e;
    l$1.__ && l$1.__(u, t), r = (o = "function" == typeof i) ? null : i && i.__k || t.__k, f = [], e = [], L$1(t, u = (!o && i || t).__k = y$1(k$2, null, [u]), r || c$1, c$1, void 0 !== t.ownerSVGElement, !o && i ? [i] : r ? null : t.firstChild ? n.call(t.childNodes) : null, f, !o && i ? i : r ? r.__e : t.firstChild, o, e), M(f, u, e);
  }
  function F$2(l, u, t) {
    var i,
      o,
      r,
      f,
      e = v$1({}, l.props);
    for (r in l.type && l.type.defaultProps && (f = l.type.defaultProps), u) "key" == r ? i = u[r] : "ref" == r ? o = u[r] : e[r] = void 0 === u[r] && void 0 !== f ? f[r] : u[r];
    return arguments.length > 2 && (e.children = arguments.length > 3 ? n.call(arguments, 2) : t), d$1(l.type, e, i || l.key, o || l.ref, null);
  }
  function G(n, l) {
    var u = {
      __c: l = "__cC" + e$1++,
      __: n,
      Consumer: function (n, l) {
        return n.children(l);
      },
      Provider: function (n) {
        var u, t;
        return this.getChildContext || (u = [], (t = {})[l] = this, this.getChildContext = function () {
          return t;
        }, this.shouldComponentUpdate = function (n) {
          this.props.value !== n.value && u.some(function (n) {
            n.__e = !0, w$2(n);
          });
        }, this.sub = function (n) {
          u.push(n);
          var l = n.componentWillUnmount;
          n.componentWillUnmount = function () {
            u.splice(u.indexOf(n), 1), l && l.call(n);
          };
        }), n.children;
      }
    };
    return u.Provider.__ = u.Consumer.contextType = u;
  }
  n = s$1.slice, l$1 = {
    __e: function (n, l, u, t) {
      for (var i, o, r; l = l.__;) if ((i = l.__c) && !i.__) try {
        if ((o = i.constructor) && null != o.getDerivedStateFromError && (i.setState(o.getDerivedStateFromError(n)), r = i.__d), null != i.componentDidCatch && (i.componentDidCatch(n, t || {}), r = i.__d), r) return i.__E = i;
      } catch (l) {
        n = l;
      }
      throw n;
    }
  }, u$1 = 0, b$1.prototype.setState = function (n, l) {
    var u;
    u = null != this.__s && this.__s !== this.state ? this.__s : this.__s = v$1({}, this.state), "function" == typeof n && (n = n(v$1({}, u), this.props)), n && v$1(u, n), null != n && this.__v && (l && this._sb.push(l), w$2(this));
  }, b$1.prototype.forceUpdate = function (n) {
    this.__v && (this.__e = !0, n && this.__h.push(n), w$2(this));
  }, b$1.prototype.render = k$2, i$1 = [], r$1 = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, f$1 = function (n, l) {
    return n.__v.__b - l.__v.__b;
  }, x$1.__r = 0, e$1 = 0;
  var _$1 = 0;
  function o$1(o, e, n, t, f, l) {
    var s,
      u,
      a = {};
    for (u in e) "ref" == u ? s = e[u] : a[u] = e[u];
    var i = {
      type: o,
      props: a,
      key: n,
      ref: s,
      __k: null,
      __: null,
      __b: 0,
      __e: null,
      __d: void 0,
      __c: null,
      __h: null,
      constructor: void 0,
      __v: --_$1,
      __source: f,
      __self: l
    };
    if ("function" == typeof o && (s = o.defaultProps)) for (u in s) void 0 === a[u] && (a[u] = s[u]);
    return l$1.vnode && l$1.vnode(i), i;
  }
  var t,
    r,
    u,
    i,
    o = 0,
    f = [],
    c = [],
    e = l$1.__b,
    a = l$1.__r,
    v = l$1.diffed,
    l = l$1.__c,
    m = l$1.unmount;
  function d(t, u) {
    l$1.__h && l$1.__h(r, t, o || u), o = 0;
    var i = r.__H || (r.__H = {
      __: [],
      __h: []
    });
    return t >= i.__.length && i.__.push({
      __V: c
    }), i.__[t];
  }
  function h(n) {
    return o = 1, s(B$1, n);
  }
  function s(n, u, i) {
    var o = d(t++, 2);
    if (o.t = n, !o.__c && (o.__ = [i ? i(u) : B$1(void 0, u), function (n) {
      var t = o.__N ? o.__N[0] : o.__[0],
        r = o.t(t, n);
      t !== r && (o.__N = [r, o.__[1]], o.__c.setState({}));
    }], o.__c = r, !r.u)) {
      var f = function (n, t, r) {
        if (!o.__c.__H) return !0;
        var u = o.__c.__H.__.filter(function (n) {
          return n.__c;
        });
        if (u.every(function (n) {
          return !n.__N;
        })) return !c || c.call(this, n, t, r);
        var i = !1;
        return u.forEach(function (n) {
          if (n.__N) {
            var t = n.__[0];
            n.__ = n.__N, n.__N = void 0, t !== n.__[0] && (i = !0);
          }
        }), !(!i && o.__c.props === n) && (!c || c.call(this, n, t, r));
      };
      r.u = !0;
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
  function p(u, i) {
    var o = d(t++, 3);
    !l$1.__s && z$1(o.__H, i) && (o.__ = u, o.i = i, r.__H.__h.push(o));
  }
  function y(u, i) {
    var o = d(t++, 4);
    !l$1.__s && z$1(o.__H, i) && (o.__ = u, o.i = i, r.__h.push(o));
  }
  function _(n) {
    return o = 5, F$1(function () {
      return {
        current: n
      };
    }, []);
  }
  function A(n, t, r) {
    o = 6, y(function () {
      return "function" == typeof n ? (n(t()), function () {
        return n(null);
      }) : n ? (n.current = t(), function () {
        return n.current = null;
      }) : void 0;
    }, null == r ? r : r.concat(n));
  }
  function F$1(n, r) {
    var u = d(t++, 7);
    return z$1(u.__H, r) ? (u.__V = n(), u.i = r, u.__h = n, u.__V) : u.__;
  }
  function T$1(n, t) {
    return o = 8, F$1(function () {
      return n;
    }, t);
  }
  function q$1(n) {
    var u = r.context[n.__c],
      i = d(t++, 9);
    return i.c = n, u ? (null == i.__ && (i.__ = !0, u.sub(r)), u.props.value) : n.__;
  }
  function V$1() {
    var n = d(t++, 11);
    if (!n.__) {
      for (var u = r.__v; null !== u && !u.__m && null !== u.__;) u = u.__;
      var i = u.__m || (u.__m = [0, 0]);
      n.__ = "P" + i[0] + "-" + i[1]++;
    }
    return n.__;
  }
  function b() {
    for (var t; t = f.shift();) if (t.__P && t.__H) try {
      t.__H.__h.forEach(k$1), t.__H.__h.forEach(w$1), t.__H.__h = [];
    } catch (r) {
      t.__H.__h = [], l$1.__e(r, t.__v);
    }
  }
  l$1.__b = function (n) {
    r = null, e && e(n);
  }, l$1.__r = function (n) {
    a && a(n), t = 0;
    var i = (r = n.__c).__H;
    i && (u === r ? (i.__h = [], r.__h = [], i.__.forEach(function (n) {
      n.__N && (n.__ = n.__N), n.__V = c, n.__N = n.i = void 0;
    })) : (i.__h.forEach(k$1), i.__h.forEach(w$1), i.__h = [], t = 0)), u = r;
  }, l$1.diffed = function (t) {
    v && v(t);
    var o = t.__c;
    o && o.__H && (o.__H.__h.length && (1 !== f.push(o) && i === l$1.requestAnimationFrame || ((i = l$1.requestAnimationFrame) || j$1)(b)), o.__H.__.forEach(function (n) {
      n.i && (n.__H = n.i), n.__V !== c && (n.__ = n.__V), n.i = void 0, n.__V = c;
    })), u = r = null;
  }, l$1.__c = function (t, r) {
    r.some(function (t) {
      try {
        t.__h.forEach(k$1), t.__h = t.__h.filter(function (n) {
          return !n.__ || w$1(n);
        });
      } catch (u) {
        r.some(function (n) {
          n.__h && (n.__h = []);
        }), r = [], l$1.__e(u, t.__v);
      }
    }), l && l(t, r);
  }, l$1.unmount = function (t) {
    m && m(t);
    var r,
      u = t.__c;
    u && u.__H && (u.__H.__.forEach(function (n) {
      try {
        k$1(n);
      } catch (n) {
        r = n;
      }
    }), u.__H = void 0, r && l$1.__e(r, u.__v));
  };
  var g$1 = "function" == typeof requestAnimationFrame;
  function j$1(n) {
    var t,
      r = function () {
        clearTimeout(u), g$1 && cancelAnimationFrame(t), setTimeout(n);
      },
      u = setTimeout(r, 100);
    g$1 && (t = requestAnimationFrame(r));
  }
  function k$1(n) {
    var t = r,
      u = n.__c;
    "function" == typeof u && (n.__c = void 0, u()), r = t;
  }
  function w$1(n) {
    var t = r;
    n.__c = n.__(), r = t;
  }
  function z$1(n, t) {
    return !n || n.length !== t.length || t.some(function (t, r) {
      return t !== n[r];
    });
  }
  function B$1(n, t) {
    return "function" == typeof t ? t(n) : t;
  }
  function g(n, t) {
    for (var e in t) n[e] = t[e];
    return n;
  }
  function C(n, t) {
    for (var e in n) if ("__source" !== e && !(e in t)) return !0;
    for (var r in t) if ("__source" !== r && n[r] !== t[r]) return !0;
    return !1;
  }
  function w(n) {
    this.props = n;
  }
  function x(n, e) {
    function r(n) {
      var t = this.props.ref,
        r = t == n.ref;
      return !r && t && (t.call ? t(null) : t.current = null), e ? !e(this.props, n) || !r : C(this.props, n);
    }
    function u(e) {
      return this.shouldComponentUpdate = r, y$1(n, e);
    }
    return u.displayName = "Memo(" + (n.displayName || n.name) + ")", u.prototype.isReactComponent = !0, u.__f = !0, u;
  }
  (w.prototype = new b$1()).isPureReactComponent = !0, w.prototype.shouldComponentUpdate = function (n, t) {
    return C(this.props, n) || C(this.state, t);
  };
  var R = l$1.__b;
  l$1.__b = function (n) {
    n.type && n.type.__f && n.ref && (n.props.ref = n.ref, n.ref = null), R && R(n);
  };
  var N = "undefined" != typeof Symbol && Symbol.for && Symbol.for("react.forward_ref") || 3911;
  function k(n) {
    function t(t) {
      var e = g({}, t);
      return delete e.ref, n(e, t.ref || null);
    }
    return t.$$typeof = N, t.render = t, t.prototype.isReactComponent = t.__f = !0, t.displayName = "ForwardRef(" + (n.displayName || n.name) + ")", t;
  }
  var T = l$1.__e;
  l$1.__e = function (n, t, e, r) {
    if (n.then) for (var u, o = t; o = o.__;) if ((u = o.__c) && u.__c) return null == t.__e && (t.__e = e.__e, t.__k = e.__k), u.__c(n, t);
    T(n, t, e, r);
  };
  var F = l$1.unmount;
  function I(n, t, e) {
    return n && (n.__c && n.__c.__H && (n.__c.__H.__.forEach(function (n) {
      "function" == typeof n.__c && n.__c();
    }), n.__c.__H = null), null != (n = g({}, n)).__c && (n.__c.__P === e && (n.__c.__P = t), n.__c = null), n.__k = n.__k && n.__k.map(function (n) {
      return I(n, t, e);
    })), n;
  }
  function L(n, t, e) {
    return n && (n.__v = null, n.__k = n.__k && n.__k.map(function (n) {
      return L(n, t, e);
    }), n.__c && n.__c.__P === t && (n.__e && e.insertBefore(n.__e, n.__d), n.__c.__e = !0, n.__c.__P = e)), n;
  }
  function U() {
    this.__u = 0, this.t = null, this.__b = null;
  }
  function D(n) {
    var t = n.__.__c;
    return t && t.__a && t.__a(n);
  }
  function V() {
    this.u = null, this.o = null;
  }
  l$1.unmount = function (n) {
    var t = n.__c;
    t && t.__R && t.__R(), t && !0 === n.__h && (n.type = null), F && F(n);
  }, (U.prototype = new b$1()).__c = function (n, t) {
    var e = t.__c,
      r = this;
    null == r.t && (r.t = []), r.t.push(e);
    var u = D(r.__v),
      o = !1,
      i = function () {
        o || (o = !0, e.__R = null, u ? u(l) : l());
      };
    e.__R = i;
    var l = function () {
        if (! --r.__u) {
          if (r.state.__a) {
            var n = r.state.__a;
            r.__v.__k[0] = L(n, n.__c.__P, n.__c.__O);
          }
          var t;
          for (r.setState({
            __a: r.__b = null
          }); t = r.t.pop();) t.forceUpdate();
        }
      },
      c = !0 === t.__h;
    r.__u++ || c || r.setState({
      __a: r.__b = r.__v.__k[0]
    }), n.then(i, i);
  }, U.prototype.componentWillUnmount = function () {
    this.t = [];
  }, U.prototype.render = function (n, e) {
    if (this.__b) {
      if (this.__v.__k) {
        var r = document.createElement("div"),
          o = this.__v.__k[0].__c;
        this.__v.__k[0] = I(this.__b, r, o.__O = o.__P);
      }
      this.__b = null;
    }
    var i = e.__a && y$1(k$2, null, n.fallback);
    return i && (i.__h = null), [y$1(k$2, null, e.__a ? null : n.children), i];
  };
  var W = function (n, t, e) {
    if (++e[1] === e[0] && n.o.delete(t), n.props.revealOrder && ("t" !== n.props.revealOrder[0] || !n.o.size)) for (e = n.u; e;) {
      for (; e.length > 3;) e.pop()();
      if (e[1] < e[0]) break;
      n.u = e = e[2];
    }
  };
  function P(n) {
    return this.getChildContext = function () {
      return n.context;
    }, n.children;
  }
  function j(n) {
    var e = this,
      r = n.i;
    e.componentWillUnmount = function () {
      D$1(null, e.l), e.l = null, e.i = null;
    }, e.i && e.i !== r && e.componentWillUnmount(), e.l || (e.i = r, e.l = {
      nodeType: 1,
      parentNode: r,
      childNodes: [],
      appendChild: function (n) {
        this.childNodes.push(n), e.i.appendChild(n);
      },
      insertBefore: function (n, t) {
        this.childNodes.push(n), e.i.appendChild(n);
      },
      removeChild: function (n) {
        this.childNodes.splice(this.childNodes.indexOf(n) >>> 1, 1), e.i.removeChild(n);
      }
    }), D$1(y$1(P, {
      context: e.context
    }, n.__v), e.l);
  }
  function z(n, e) {
    var r = y$1(j, {
      __v: n,
      i: e
    });
    return r.containerInfo = e, r;
  }
  (V.prototype = new b$1()).__a = function (n) {
    var t = this,
      e = D(t.__v),
      r = t.o.get(n);
    return r[0]++, function (u) {
      var o = function () {
        t.props.revealOrder ? (r.push(u), W(t, n, r)) : u();
      };
      e ? e(o) : o();
    };
  }, V.prototype.render = function (n) {
    this.u = null, this.o = new Map();
    var t = C$1(n.children);
    n.revealOrder && "b" === n.revealOrder[0] && t.reverse();
    for (var e = t.length; e--;) this.o.set(t[e], this.u = [1, 0, this.u]);
    return n.children;
  }, V.prototype.componentDidUpdate = V.prototype.componentDidMount = function () {
    var n = this;
    this.o.forEach(function (t, e) {
      W(n, e, t);
    });
  };
  var B = "undefined" != typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103,
    H = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,
    Z = /^on(Ani|Tra|Tou|BeforeInp|Compo)/,
    Y = /[A-Z0-9]/g,
    $ = "undefined" != typeof document,
    q = function (n) {
      return ("undefined" != typeof Symbol && "symbol" == typeof Symbol() ? /fil|che|rad/ : /fil|che|ra/).test(n);
    };
  b$1.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function (t) {
    Object.defineProperty(b$1.prototype, t, {
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
  var K = l$1.event;
  function Q() {}
  function X() {
    return this.cancelBubble;
  }
  function nn() {
    return this.defaultPrevented;
  }
  l$1.event = function (n) {
    return K && (n = K(n)), n.persist = Q, n.isPropagationStopped = X, n.isDefaultPrevented = nn, n.nativeEvent = n;
  };
  var en = {
      enumerable: !1,
      configurable: !0,
      get: function () {
        return this.class;
      }
    },
    rn = l$1.vnode;
  l$1.vnode = function (n) {
    "string" == typeof n.type && function (n) {
      var t = n.props,
        e = n.type,
        u = {};
      for (var o in t) {
        var i = t[o];
        if (!("value" === o && "defaultValue" in t && null == i || $ && "children" === o && "noscript" === e || "class" === o || "className" === o)) {
          var l = o.toLowerCase();
          "defaultValue" === o && "value" in t && null == t.value ? o = "value" : "download" === o && !0 === i ? i = "" : "ondoubleclick" === l ? o = "ondblclick" : "onchange" !== l || "input" !== e && "textarea" !== e || q(t.type) ? "onfocus" === l ? o = "onfocusin" : "onblur" === l ? o = "onfocusout" : Z.test(o) ? o = l : -1 === e.indexOf("-") && H.test(o) ? o = o.replace(Y, "-$&").toLowerCase() : null === i && (i = void 0) : l = o = "oninput", "oninput" === l && u[o = l] && (o = "oninputCapture"), u[o] = i;
        }
      }
      "select" == e && u.multiple && Array.isArray(u.value) && (u.value = C$1(t.children).forEach(function (n) {
        n.props.selected = -1 != u.value.indexOf(n.props.value);
      })), "select" == e && null != u.defaultValue && (u.value = C$1(t.children).forEach(function (n) {
        n.props.selected = u.multiple ? -1 != u.defaultValue.indexOf(n.props.value) : u.defaultValue == n.props.value;
      })), t.class && !t.className ? (u.class = t.class, Object.defineProperty(u, "className", en)) : (t.className && !t.class || t.class && t.className) && (u.class = u.className = t.className), n.props = u;
    }(n), n.$$typeof = B, rn && rn(n);
  };
  var un = l$1.__r;
  l$1.__r = function (n) {
    un && un(n), n.__c;
  };
  var on = l$1.diffed;
  l$1.diffed = function (n) {
    on && on(n);
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
    for (const [id, effectInfo] of toRun) {
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
    const ref = _(null);
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
  function debounceRendering(f) {
    (l$1.debounceRendering ?? queueMicrotask)(f);
  }
  const onfocusin = "onfocusin";
  const onfocusout = "onfocusout";
  const EventMapping = {
    dblclick: "onDblClick",
    focusin: "onfocusin",
    focusout: "onfocusout",
    formdata: "onFormData",
    toggle: "onToggle",
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
  function usePassiveState(onChange, getInitialValue, customDebounceRendering) {
    //let [id, ,getId] = useState(() => generateRandomId());
    const valueRef = _(Unset$2);
    const reasonRef = _(Unset$2);
    const warningRef = _(false);
    const dependencyToCompareAgainst = _(Unset$2);
    const cleanupCallbackRef = _(undefined);
    // Shared between "dependency changed" and "component unmounted".
    const onShouldCleanUp = T$1(() => {
      const cleanupCallback = cleanupCallbackRef.current;
      if (cleanupCallback) cleanupCallback();
    }, []);
    // There are a couple places where we'd like to use our initial
    // value in place of having no value at all yet.
    // This is the shared code for that, used on mount and whenever
    // getValue is called.
    const tryEnsureValue = T$1(() => {
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
    const getValue = T$1(() => {
      if (warningRef.current) console.warn("During onChange, prefer using the (value, prevValue) arguments instead of getValue -- it's ambiguous as to if you're asking for the old or new value at this point in time for this component.");
      // The first time we call getValue, if we haven't been given a value yet,
      // (and we were given an initial value to use)
      // return the initial value instead of nothing.
      if (valueRef.current === Unset$2) tryEnsureValue();
      return valueRef.current === Unset$2 ? undefined : valueRef.current;
    }, []);
    y(() => {
      // Make sure we've run our effect at least once on mount.
      // (If we have an initial value, of course)
      tryEnsureValue();
    }, []);
    // The actual code the user calls to (possibly) run a new effect.
    const setValue = T$1((arg, reason) => {
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
  const Unset$1 = Symbol("unset");
  /**
   * Given an input value, returns a constant getter function that can be used
   * inside of `useEffect` and friends without including it in the dependency array.
   *
   * @remarks This uses `options.diffed` in order to run before everything, even
   * ref assignment. This means this getter is safe to use anywhere ***except the render phase***.
   */
  const useStableGetter = function useStableGetter(value) {
    const ref = _(Unset$1);
    useBeforeLayoutEffect(() => {
      ref.current = value;
    }, [value]);
    return T$1(() => {
      if (ref.current === Unset$1) {
        throw new Error('Value retrieved from useStableGetter() cannot be called during render.');
      }
      return ref.current;
    }, []);
  };
  function useMemoObject(t) {
    return F$1(() => {
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
  const useStableCallback = function useStableCallback(fn, noDeps) {
    useEnsureStability("useStableCallback", noDeps == null, noDeps?.length, isStableGetter());
    if (isStableGetter()) return fn;
    if (noDeps == null) {
      const currentCallbackGetter = useStableGetter(fn);
      return setIsStableGetter(T$1((...args) => {
        return currentCallbackGetter()(...args);
      }, []));
    } else {
      console.assert(noDeps.length === 0);
      return setIsStableGetter(T$1(fn, []));
    }
  };

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
  window.requestIdleCallback ??= callback => {
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
   * @remarks Some functions in this library are parenthesized but not wrapped in `monitored` --
   * they are so small that their duration generally rounds down to 0 (or epsilon), so using
   * this function usually makes no sense on them. The performance monitoring takes more time
   * than the function itself.
   *
   * Important for Typescript: If passed a generic function its types may be slightly erased (see usePersistentState). No clue why or what's happening.
   *
   * @param hook
   * @returns
   */
  function monitored(hook) {
    {
      return hook;
    }
  }

  /**
   * Allows attaching an event handler to any *non-Preact* element, and removing it when the component using the hook unmounts. The callback does not need to be stable across renders.
   *
   * @remarks `"mode"` controls if there's one handler that calls all your functions (default), or one handler added per function (`"single"`).
   *
   * The default, `"grouped"`, is faster when you have, say, a button component, used hundreds of times on a page, that each installs a global event handler.
   *
   * @param target - A *non-Preact* node to attach the event to.
   * *
   */
  const useGlobalHandler = monitored(function useGlobalHandler(target, type, handler, options, mode) {
    mode ||= "grouped";
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
    p(() => {
      if (stableHandler) {
        addToMapThing(target, type, stableHandler, options);
        return () => removeFromMapThing(target, type, stableHandler, options);
      }
    }, [target, type, stableHandler]);
  }
  function useGlobalHandlerSingle(target, type, handler, options) {
    let stableHandler = useStableCallback(handler ?? (() => {}));
    if (handler == null) stableHandler = null;
    p(() => {
      if (stableHandler) {
        target.addEventListener(type, stableHandler, options);
        return () => target.removeEventListener(type, stableHandler, options);
      }
    }, [target, type, stableHandler]);
  }

  /**
   * Handles events for a backdrop on a modal dialog -- the kind where the user expects the modal to close when they click/tap outside of it.
   *
   * @compositeParams
   */
  const useBackdropDismiss = monitored(function useBackdropDismiss({
    backdropDismissParameters: {
      dismissBackdropActive: open,
      onDismissBackdrop: onCloseUnstable,
      ...void1
    },
    refElementPopupReturn: {
      getElement,
      ...void3
    },
    ...void2
  }) {
    const getOpen = useStableGetter(open);
    const onClose = useStableGetter(onCloseUnstable);
    const onBackdropClick = T$1(function onBackdropClick(e) {
      if (!getOpen()) return;
      // Basically, "was this event fired on an element not contained by the modal?"
      // There are multiple ways browser react to "interacting with nothing", and this takes care of everything.
      let element = getElement();
      let foundInsideClick = false;
      if (e.target && element && element.contains(e.target)) {
        foundInsideClick = true;
      }
      if (!foundInsideClick) {
        onClose()?.(e);
      }
    }, []);
    useGlobalHandler(window, "mousedown", open ? onBackdropClick : null, {
      capture: true
    });
    useGlobalHandler(window, "touchstart", open ? onBackdropClick : null, {
      capture: true
    });
  });

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
  const MagicWindowKey = "__preact-prop-helpers-escape-key-dismiss__";
  function getElementDepth(element) {
    let depth = 0;
    let parent = element.parentElement;
    while (parent) {
      depth += 1;
      parent = parent.parentElement;
    }
    return depth;
  }
  /**
   * Invokes a callback when the `Escape` key is pressed on the topmost component (a max of one invocation per `Escape` press)
   *
   * @remarks One press of the `Escape` key is guaranteed to only call `onDismiss` for *only one* component, and it is called on the component deepest in the DOM tree.
   *
   * TODO: Instead of being deepest in the DOM tree (which is usually fine), it should probably be related to what order something was made `active`.
   *
   * @compositeParams
   */
  const useEscapeDismiss = monitored(function useEscapeDismiss({
    escapeDismissParameters: {
      onDismissEscape: onClose,
      dismissEscapeActive: open,
      getDocument: unstableGetDocument,
      parentDepth,
      ...void1
    },
    refElementPopupReturn: {
      getElement,
      ...void2
    }
  }) {
    const stableOnClose = useStableGetter(onClose);
    const getDocument = useStableCallback(unstableGetDocument);
    const getDepth = useStableGetter(parentDepth + 1);
    // When this component opens, add an event listener that finds the deepest open soft dismiss element to actually dismiss.
    // Only opened components will add event handlers, and will remove them once closed.
    // The reason this is so complicated is because:
    // 1. We must only close one soft dismiss component at a time.  If there's a tooltip in a popup, the tooltip must be dismissed.
    // 2. `keydown` events don't just work on arbitrary elements, for our purposes they must be from the `window`. So we can't rely on normal capturing or bubbling behavior on the element itself.
    // 3. Event handlers added to the `window` via `addEventHandler` are called in the order of registration, which is completely at odds with #1.
    //
    // So all soft dismiss components listen for a keydown of Escape, 
    // then the first one to do so will wait for a microtask, 
    // then find the deepest element in the document tree to dismiss of all of those components currently open.
    p(() => {
      const document = getDocument();
      const window = document.defaultView;
      window[MagicWindowKey] ??= {
        microtaskQueued: false,
        elementQueue: new Map()
      };
      const info = window[MagicWindowKey];
      if (open) {
        window.addEventListener("keydown", handler, {
          capture: true
        });
        return () => {
          const element = getElement();
          if (element && info.elementQueue) info.elementQueue.delete(element);
          window.removeEventListener("keydown", handler, {
            capture: true
          });
        };
      }
      function handler(e) {
        if (e.key == "Escape") {
          // We don't know which of the currently active soft dismisses will actually do something,
          // but ONE of them definitely will,
          // so we stop propagation to child nodes, but not to everyone on the window (stopImmediatePropagation).
          e.preventDefault();
          e.stopPropagation();
          // This is what at least one of the elements will call
          const onClose2 = () => {
            stableOnClose()?.(enhanceEvent(e, {
              reason: "escape"
            }));
          };
          const element = getElement();
          if (element) {
            const treeDepth = getElementDepth(element);
            const depth = getDepth();
            info.elementQueue.set(element, {
              depth,
              onClose: onClose2,
              treeDepth
            });
          }
          if (!info.microtaskQueued) {
            info.microtaskQueued = true;
            setTimeout(() => {
              const {
                elementQueue
              } = info;
              info.microtaskQueued = false;
              info.elementQueue = new Map();
              let deepestDepth = -Infinity;
              let deepestTreeDepth = -Infinity;
              let deepestOnClose = null;
              for (const [element, {
                depth,
                onClose,
                treeDepth
              }] of elementQueue) {
                let tieBroken = false;
                if (depth == deepestDepth) {
                  if (treeDepth > deepestTreeDepth) {
                    tieBroken = true;
                  }
                }
                if (depth > deepestDepth || depth == deepestDepth && tieBroken) {
                  deepestDepth = depth;
                  deepestTreeDepth = treeDepth;
                  deepestOnClose = onClose;
                }
              }
              deepestOnClose?.();
            }, 0);
          }
        }
      }
    }, [open]);
  });

  /**
   * Invokes a callback when focus travels outside of the component's element.
   *
   * @remarks TODO: This is not intended for recursive structures, like dialogs that open dialogs, or menus that open menus, but does properly handle, e.g., the fact that a menu's menubutton having focus still counts as the menu having focus.
   *
   * @compositeParams
   */
  const useLostFocusDismiss = monitored(function useLostFocusDismiss({
    refElementPopupReturn: {
      getElement: getPopupElement,
      ...void3
    },
    refElementSourceReturn,
    lostFocusDismissParameters: {
      dismissLostFocusActive: open,
      onDismissLostFocus: onClose,
      ...void4
    },
    ...void1
  }) {
    const {
      getElement: getSourceElement,
      ...void2
    } = refElementSourceReturn ?? {};
    const stableOnClose = useStableGetter(onClose);
    const getOpen = useStableGetter(open);
    const onLastActiveElementChange = T$1((newElement, _prevElement, e) => {
      const open = getOpen();
      const sourceElement = getSourceElement?.();
      const popupElement = getPopupElement();
      if (!(sourceElement?.contains(newElement) || popupElement?.contains(newElement))) {
        if (open) {
          console.assert(e != null);
          stableOnClose()?.(e);
        }
      }
    }, [getSourceElement]);
    return {
      activeElementParameters: {
        onLastActiveElementChange
      }
    };
  });

  /** Detect free variable `global` from Node.js. */
  var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;
  var freeGlobal$1 = freeGlobal;

  /** Detect free variable `self`. */
  var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

  /** Used as a reference to the global object. */
  var root = freeGlobal$1 || freeSelf || Function('return this')();
  var root$1 = root;

  /** Built-in value references. */
  var Symbol$1 = root$1.Symbol;
  var Symbol$2 = Symbol$1;

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
  var symToStringTag$1 = Symbol$2 ? Symbol$2.toStringTag : undefined;

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
  var symToStringTag = Symbol$2 ? Symbol$2.toStringTag : undefined;

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
  var isArray$1 = isArray;

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
  var isArguments$1 = isArguments;

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
  var Buffer = moduleExports$1 ? root$1.Buffer : undefined;

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
  var isBuffer$1 = isBuffer;

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
  var freeProcess = moduleExports && freeGlobal$1.process;

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
  var nodeUtil$1 = nodeUtil;

  /* Node.js helper references. */
  var nodeIsTypedArray = nodeUtil$1 && nodeUtil$1.isTypedArray;

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
  var isTypedArray$1 = isTypedArray;

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
    var isArr = isArray$1(value),
      isArg = !isArr && isArguments$1(value),
      isBuff = !isArr && !isArg && isBuffer$1(value),
      isType = !isArr && !isArg && !isBuff && isTypedArray$1(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? baseTimes(value.length, String) : [],
      length = result.length;
    for (var key in value) {
      if ((inherited || hasOwnProperty$1.call(value, key)) && !(skipIndexes && (
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
  var nativeKeys$1 = nativeKeys;

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
      return nativeKeys$1(object);
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
    return root$1.Date.now();
  };
  var now$1 = now;

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
      var time = now$1();
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
      return timerId === undefined ? result : trailingEdge(now$1());
    }
    function debounced() {
      var time = now$1(),
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
    var func = isArray$1(collection) ? arrayShuffle : baseShuffle;
    return func(collection);
  }

  /**
   * Combines two `children`.
   *
   * @remarks This is fairly trivial and not even technically a hook, as it doesn't use any other hooks, but is this way for consistency.
   *
   * TODO: This could accept a variable number of arguments to be consistent with useMergedProps, but I feel like it might be a performance hit.
   */
  const useMergedChildren = function useMergedChildren(lhs, rhs) {
    if (lhs == null && rhs == null) {
      return undefined;
    } else if (lhs == null) {
      return rhs;
    } else if (rhs == null) {
      return lhs;
    } else {
      return y$1(k$2, {}, lhs, rhs);
    }
  };

  /**
   * Merged the `class` and `className` properties of two sets of props into a single string.
   *
   * @remarks Duplicate classes are removed (order doesn't matter anyway).
   */
  const useMergedClasses = function useMergedClasses(...classes) {
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
  };
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
  const useMergedRefs = function useMergedRefs(rhs, lhs) {
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
  };
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
  const useMergedStyles = function useMergedStyles(lhs, rhs) {
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
  };
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
  const useMergedProps = function useMergedProps(...allProps) {
    useEnsureStability("useMergedProps", allProps.length);
    let ret = {};
    for (let nextProps of allProps) {
      useMergedPropsHelper(ret, nextProps);
    }
    return ret;
  };
  const knowns = new Set(["children", "ref", "className", "class", "style"]);
  const mergeUnknown = function mergeUnknown(key, lhsValue, rhsValue) {
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
  };
  /**
   * Helper function.
   *
   * This is one of the most commonly called functions in this and consumer libraries,
   * so it trades a bit of readability for speed (i.e. we don't decompose objects and just do regular property access, iterate with `for...in`, instead of `Object.entries`, etc.)
   */
  const useMergedPropsHelper = function useMergedPropsHelper(target, mods) {
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
  };
  const mergeFunctions = function mergeFunctions(lhs, rhs) {
    if (!lhs) return rhs;
    if (!rhs) return lhs;
    return (...args) => {
      const lv = lhs(...args);
      const rv = rhs(...args);
      if (lv instanceof Promise || rv instanceof Promise) return Promise.all([lv, rv]);
    };
  };

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
  const useTimeout = monitored(function useTimeout({
    timeout,
    callback,
    triggerIndex
  }) {
    const stableCallback = useStableCallback(() => {
      startTimeRef.current = null;
      callback();
    });
    const getTimeout = useStableGetter(timeout);
    // Set any time we start timeout.
    // Unset any time the timeout completes
    const startTimeRef = _(null);
    const timeoutIsNull = timeout == null;
    // Any time the triggerIndex changes (including on mount)
    // restart the timeout.  The timeout does NOT reset
    // when the duration or callback changes, only triggerIndex.
    p(() => {
      if (!timeoutIsNull) {
        const timeout = getTimeout();
        console.assert(timeoutIsNull == (timeout == null));
        if (timeout != null) {
          startTimeRef.current = +new Date();
          const handle = setTimeout(stableCallback, timeout);
          return () => clearTimeout(handle);
        }
      }
    }, [triggerIndex, timeoutIsNull]);
    const getElapsedTime = T$1(() => {
      return +new Date() - +(startTimeRef.current ?? new Date());
    }, []);
    const getRemainingTime = T$1(() => {
      const timeout = getTimeout();
      return timeout == null ? null : Math.max(0, timeout - getElapsedTime());
    }, []);
    return {
      getElapsedTime,
      getRemainingTime
    };
  });

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
  const useLinearNavigation = function useLinearNavigation({
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
    rearrangeableChildrenReturn: {
      indexDemangler,
      indexMangler,
      ...void3
    },
    ...void1
  }) {
    let getPaginatedRange = useStableGetter(paginationMax == null || paginationMin == null ? null : paginationMax - paginationMin);
    const navigateAbsolute = T$1((requestedIndexMangled, searchDirection, e, fromUserInteraction, mode) => {
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
    const stableProps = _(useTagProps({
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
  };
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
  const useManagedChildren = monitored(function useManagedChildren(parentParameters) {
    const {
      managedChildrenParameters: {
        onAfterChildLayoutEffect,
        onChildrenMountChange,
        onChildrenCountChange
      },
      ...rest
    } = parentParameters;
    const getHighestIndex = T$1(() => {
      return managedChildrenArray.current.highestIndex;
    }, []);
    const getLowestIndex = T$1(() => {
      return managedChildrenArray.current.lowestIndex;
    }, []);
    // All the information we have about our children is stored in this **stable** array.
    // Any mutations to this array **DO NOT** trigger any sort of a re-render.
    const managedChildrenArray = _({
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
    const forEachChild = T$1(f => {
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
    const getManagedChildInfo = T$1(index => {
      if (typeof index == "number") return managedChildrenArray.current.arr[index];else return managedChildrenArray.current.rec[index];
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
    const hasRemoteULEChildMounted = _(null);
    const remoteULEChildMounted = T$1((index, mounted) => {
      if (!hasRemoteULEChildMounted.current) {
        hasRemoteULEChildMounted.current = {
          mounts: new Set(),
          unmounts: new Set()
        };
        debounceRendering(() => {
          if (onChildrenCountChange || onChildrenMountChange) {
            onChildrenMountChange?.(hasRemoteULEChildMounted.current.mounts, hasRemoteULEChildMounted.current.unmounts);
            onChildrenCountChange?.(getChildren().getHighestIndex() + 1);
            hasRemoteULEChildMounted.current = null;
          }
        });
      }
      if (mounted) {
        if (typeof index == "number") {
          managedChildrenArray.current.highestIndex = Math.max(managedChildrenArray.current.highestIndex, index);
          managedChildrenArray.current.lowestIndex = Math.min(managedChildrenArray.current.lowestIndex, index);
        }
      } else {
        if (typeof index == "number") {
          delete managedChildrenArray.current.arr[index];
          let shave = 0;
          while (shave <= managedChildrenArray.current.arr.length && managedChildrenArray.current.arr[managedChildrenArray.current.arr.length - 1 - shave] == undefined) {
            ++shave;
          }
          managedChildrenArray.current.arr.splice(managedChildrenArray.current.arr.length - shave, shave);
        } else delete managedChildrenArray.current.rec[index];
        if (typeof index == "number") {
          managedChildrenArray.current.highestIndex = managedChildrenArray.current.arr.length - 1;
          // TODO: length automatically adjusts to give us the highest index,
          // but there's no corresponding property to get the lowest index when it changes...
          // managedChildrenArray.current.lowestIndex = managedChildrenArray.current.arr.length - 1;
        }
      }

      hasRemoteULEChildMounted?.current?.[mounted ? "mounts" : "unmounts"]?.add?.(index);
    }, [/* Must remain stable */]);
    const managedChildren = useMemoObject({
      ...{
        _: managedChildrenArray.current
      },
      forEach: forEachChild,
      getAt: getManagedChildInfo,
      getHighestIndex: getHighestIndex,
      getLowestIndex: getLowestIndex,
      _arraySlice: T$1(() => {
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
    const getChildren = T$1(() => managedChildren, []);
    return {
      context: useMemoObject({
        managedChildContext: useMemoObject({
          managedChildrenArray: managedChildrenArray.current,
          remoteULEChildMounted,
          //remoteULEChildChanged,
          getChildren
        })
      }),
      managedChildrenReturn: {
        getChildren
      }
    };
  });
  /**
   * @compositeParams
   */
  const useManagedChild = monitored(function useManagedChild({
    context,
    info
  }) {
    const {
      managedChildContext: {
        getChildren,
        managedChildrenArray,
        remoteULEChildMounted
      }
    } = context ?? {
      managedChildContext: {}
    };
    const index = info.index;
    // Any time our child props change, make that information available
    // the parent if they need it.
    // The parent can listen for all updates and only act on the ones it cares about,
    // and multiple children updating in the same tick will all be sent at once.
    y(() => {
      if (managedChildrenArray == null) return;
      // Insert this information in-place
      if (typeof index == "number") {
        managedChildrenArray.arr[index] = {
          ...info
        };
      } else {
        managedChildrenArray.rec[index] = {
          ...info
        };
      }
      //return remoteULEChildChanged(index as IndexType);
    });
    // When we mount, notify the parent via queueMicrotask
    // (every child does this, so everything's coordinated to only queue a single microtask per tick)
    // Do the same on unmount.
    // Note: It's important that this comes AFTER remoteULEChildChanged
    // so that remoteULEChildMounted has access to all the info on mount.
    y(() => {
      remoteULEChildMounted?.(index, true);
      return () => remoteULEChildMounted?.(index, false);
    }, [index]);
    return {
      managedChildReturn: {
        getChildren: getChildren
      }
    };
  });
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
   *
   */
  function useChildrenFlag({
    getChildren,
    initialIndex,
    closestFit,
    onClosestFit,
    onIndexChange,
    getAt,
    setAt,
    isValid
  }) {
    // TODO (maybe?): Even if there is an initial index, it's not set until mount. Is that fine?
    const [getCurrentIndex, setCurrentIndex] = usePassiveState(onIndexChange);
    const [getRequestedIndex, setRequestedIndex] = usePassiveState(null);
    // Shared between onChildrenMountChange and changeIndex, not public
    // Only called when `closestFit` is false, naturally.
    const getClosestFit = T$1(requestedIndex => {
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
      const requestedIndex = getRequestedIndex();
      const currentIndex = getCurrentIndex();
      const currentChild = currentIndex == null ? null : children.getAt(currentIndex);
      if (requestedIndex != null && closestFit && (requestedIndex != currentIndex || currentChild == null || !isValid(currentChild))) {
        console.assert(typeof requestedIndex == "number", "closestFit can only be used when each child has a numeric index, and cannot be used when children use string indices instead.");
        const closestFitIndex = getClosestFit(requestedIndex);
        setCurrentIndex(closestFitIndex, reason);
        if (currentChild) setAt(currentChild, false, closestFitIndex, currentIndex);
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
    const reasonRef = _(undefined);
    const changeIndex = T$1((arg, reason) => {
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
    y(() => {
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
  const useState = function useState(initialState) {
    // We keep both, but override the `setState` functionality
    const [state, setStateP] = h(initialState);
    const ref = _(state);
    // Hijack the normal setter function 
    // to also set our ref to the new value
    const setState = _(value => {
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
    const getState = T$1(() => {
      return ref.current;
    }, []);
    return [state, setState.current, getState];
  };

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
  const useRovingTabIndex = monitored(function useRovingTabIndex({
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
    ...void1
  }) {
    const focusSelfParent = useStableCallback(focusSelfParentUnstable);
    untabbableBehavior ||= "focus-parent";
    const lastFocused = _(null);
    const getInitiallyTabbedIndex = useStableGetter(initiallyTabbedIndex);
    const getUntabbable = useStableGetter(untabbable);
    // Override the actual setter to include some extra logic related to avoiding hidden children, 
    // what to do when we're untabbable, what to do when we're tabbable but given `null`, etc.
    const setTabbableIndex = useStableCallback((updater, reason, fromUserInteraction) => {
      const children = getChildren();
      // Notify the relevant children that they should become tabbable/untabbable,
      // but also handle focus management when we changed due to user interaction
      return changeTabbableIndex(function returnModifiedTabbableIndex(prevIndex) {
        let nextIndex = typeof updater === "function" ? updater(prevIndex ?? null) : updater;
        const untabbable = getUntabbable();
        let parentElement = getElement();
        console.assert(!!parentElement);
        // Whether or not we're currently tabbable, make sure that when we switch from untabbable to tabbable,
        // that we know which index to switch back to.
        if (nextIndex != null) setLastNonNullIndex(nextIndex, reason);
        // If we're untabbable, then any attempt to set a new index simply fails and sets it to `null`.
        if (untabbable) {
          // Focus the parent, since it's what's in the tab order right now
          // TODO: Replace this and the other focus(getElement())
          // with a user-replaceable focusParent, like item.focusSelf?
          //
          // Also TODO: Should these take fromUserInteraction into consideration?
          // Do we always move focus when we become untabbable?
          if (!parentElement.contains(document.activeElement) && untabbableBehavior != 'leave-child-focused') focusSelfParent(parentElement);
          return null;
        }
        // If the requested index is hidden, then there's no need to focus any elements or run any extra logic.
        if (nextIndex == null) {
          // Focus the parent (more to be polite)
          // TODO: Find the next/prev element and focus that instead,
          // doable with the `tabbable` library, but it doesn't have a next() function or anything,
          // so that needs to be manually done with a TreeWalker or something?
          if (!parentElement.contains(document.activeElement) && untabbableBehavior != 'leave-child-focused') focusSelfParent(parentElement);
          return null;
        }
        // If we've made a change, and it was because the user clicked on it or something,
        // then focus that element too
        if (prevIndex != nextIndex) {
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
        // TODO: Redundant?
        if (nextIndex != null) setLastNonNullIndex(nextIndex, reason);
        // Finally, return the value the user requested the index be set to.
        return nextIndex ?? 0;
      }, reason);
    });
    // When we switch from tabbable to non/tabbable, we really want to remember the last tabbable child.
    // So every time we change the index for any reason, record that change as a back up here that can be restored.
    const [getLastNonNullIndex, setLastNonNullIndex] = usePassiveState(null, T$1(() => initiallyTabbedIndex ?? 0, []));
    // Any time we switch to being untabbable, set the current tabbable index accordingly.
    p(() => {
      let shouldFocusParentAfterwards = getElement()?.contains(document.activeElement);
      if (untabbable) changeTabbableIndex(null, undefined);else {
        changeTabbableIndex(getLastNonNullIndex(), undefined);
      }
      if (shouldFocusParentAfterwards) {
        focusSelf(true);
      }
    }, [untabbable]);
    // Boilerplate related to notifying individual children when they become tabbable/untabbable
    const getTabbableAt = T$1(child => {
      return child.getLocallyTabbable();
    }, []);
    const setTabbableAt = T$1((child, t) => {
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
        if (!(n == null && untabbable) && n != getLastNonNullIndex()) onTabbableIndexChange?.(n, p, r);
      }),
      getChildren,
      closestFit: true,
      getAt: getTabbableAt,
      isValid: isTabbableValid,
      setAt: setTabbableAt,
      onClosestFit: index => {
        // Whenever we change due to a closest-fit switch, make sure we don't lose focus to the body
        // TODO: This is slightly janky -- we want to only mess with the user's focus when this list (or whatever) is the current focus,
        // but by the time we know something like "all the children have unmounted",
        // we've lot the ability to know if any of them were focused, at least easily.
        // So we just check to see if focus was lost to the body and, if so, send it somewhere useful.
        // This is liable to break, probably with blockingElements or something.
        if (document.activeElement == null || document.activeElement == document.body) {
          let childElement = index == null ? null : getChildren().getAt(index)?.getElement();
          if (index == null || childElement == null) findBackupFocus(getElement()).focus();else getChildren().getAt(index)?.focusSelf(childElement);
        }
      }
    });
    const focusSelf = T$1((force, reason) => {
      const children = getChildren();
      let index = getTabbableIndex();
      const untabbable = getUntabbable();
      if (!untabbable) {
        // If we change from untabbable to tabbable, it's possible `index` might still be null.
        index ??= getInitiallyTabbedIndex() ?? children.getLowestIndex();
      }
      if (untabbable) {
        if (document.activeElement != getElement() && (force || untabbableBehavior != 'leave-child-focused')) {
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
      getInitiallyTabbedIndex: T$1(() => {
        return initiallyTabbedIndex ?? (untabbable ? null : 0);
      }, []),
      reevaluateClosestFit,
      getUntabbable: useStableGetter(untabbable),
      getUntabbableBehavior: useStableGetter(untabbableBehavior),
      giveParentFocusedElement: T$1(e => {
        lastFocused.current = e;
      }, [])
    });
    return {
      managedChildrenParameters: {
        onChildrenMountChange: T$1(() => {
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
  /**
   * @compositeParams
   *
   * @see {@link useRovingTabIndex}
   * @param args - {@link UseRovingTabIndexChildParameters}
   * @returns - {@link UseRovingTabIndexChildReturnType}
   */
  const useRovingTabIndexChild = monitored(function useRovingTabIndexChild({
    info: {
      index,
      untabbable: iAmUntabbable,
      ...void2
    },
    context: {
      rovingTabIndexContext: {
        giveParentFocusedElement,
        getUntabbable: getParentIsUntabbable,
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
    const [tabbable, setTabbable, getTabbable] = useState(getInitiallyTabbedIndex() === index);
    p(() => {
      reevaluateClosestFit(undefined);
    }, [!!iAmUntabbable]);
    p(() => {
      if (tabbable) {
        giveParentFocusedElement(getElement());
      }
    }, [tabbable]);
    return {
      hasCurrentFocusParameters: {
        onCurrentFocusedInnerChanged: useStableCallback((focused, _prevFocused, e) => {
          if (focused) {
            const parentIsUntabbable = getParentIsUntabbable();
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
        tabIndex: tabbable ? 0 : -1,
        ...{
          inert: iAmUntabbable
        } // This inert is to prevent the edge case of clicking a hidden item and it focusing itself
      })
    };
  });

  /**
   * Allows examining the rendered component's text content whenever it renders and reacting to changes.
   *
   * @compositeParams
   */
  const useTextContent = function useTextContent({
    refElementReturn: {
      getElement
    },
    textContentParameters: {
      getText,
      onTextContentChange
    }
  }) {
    const [getTextContent, setTextContent] = usePassiveState(onTextContentChange, returnNull, runImmediately);
    p(() => {
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
  };

  /**
   * Allows for the selection of a managed child by typing the given text associated with it.
   *
   * @see useListNavigation, which packages everything up together.
   *
   * @hasChild {@link useTypeaheadNavigationChild}
   *
   * @compositeParams
   */
  const useTypeaheadNavigation = monitored(function useTypeaheadNavigation({
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
    const sortedTypeaheadInfo = _([]);
    const [typeaheadStatus, setTypeaheadStatus] = useState("none");
    // Handle typeahead for input method editors as well
    // Essentially, when active, ignore further keys 
    // because we're waiting for a CompositionEnd event
    const [, setImeActive, getImeActive] = useState(false);
    // Because composition events fire *after* keydown events 
    // (but within the same task, which, TODO, could be browser-dependent),
    // we can use this to keep track of which event we're listening for on the first keydown.
    const [nextTypeaheadChar, setNextTypeaheadChar] = useState(null);
    y(() => {
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
    const propsStable = _(useTagProps({
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
  /**
   *
   * @compositeParams
   */
  const useTypeaheadNavigationChild = monitored(function useTypeaheadNavigationChild({
    info: {
      index,
      ...void1
    },
    textContentParameters: {
      getText,
      ...void5
    },
    context: {
      typeaheadNavigationContext: {
        sortedTypeaheadInfo,
        insertingComparator,
        excludeSpace,
        ...void2
      }
    },
    refElementReturn: {
      getElement,
      ...void3
    },
    ...void4
  }) {
    const {
      textContentReturn
    } = useTextContent({
      refElementReturn: {
        getElement
      },
      textContentParameters: {
        getText,
        onTextContentChange: T$1(text => {
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
        }, [])
      }
    });
    return {
      textContentReturn,
      pressParameters: {
        excludeSpace
      }
    };
  });
  /**
   * Your usual binary search implementation.
   *
   * It's used here to quickly find a good spot to start searching for our next typeahead candidate.
   * @param array - The array to search through
   * @param wanted - The value you'd like to find
   * @param comparator - Compares `wanted` with the current value in `array`
   * @returns A non-negative value if `wanted` was found, and a negative number if not.
   * The absolute value of this number, minus one, is where `wanted` *would* be found if it *was* in `array`
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
   * @compositeParams
   *
   * @hasChild {@link useListNavigationChild}
   */
  const useListNavigation = monitored(function useListNavigation({
    linearNavigationParameters,
    typeaheadNavigationParameters,
    rovingTabIndexParameters,
    managedChildrenReturn,
    refElementReturn,
    paginatedChildrenParameters,
    rearrangeableChildrenReturn,
    ...void1
  }) {
    const {
      props: propsRTI,
      rovingTabIndexReturn,
      managedChildrenParameters,
      context: contextRovingTabIndex,
      ...void2
    } = useRovingTabIndex({
      managedChildrenReturn,
      rovingTabIndexParameters,
      refElementReturn
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
      rearrangeableChildrenReturn
    });
    // Merge the props while keeping them stable
    // (TODO: We run this merge logic every render but only need the first render's result because it's stable)
    const p = useMergedProps(propsStableTN, propsStableLN);
    _(p);
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
  /**
   * @compositeParams
   */
  const useListNavigationChild = monitored(function useListNavigationChild({
    info: {
      index,
      untabbable,
      ...void1
    },
    context,
    refElementReturn,
    textContentParameters,
    ...void2
  }) {
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
      refElementReturn,
      textContentParameters,
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

  /**
   * Implements 2-dimensional grid-based keyboard navigation, similarly to {@link useListNavigation}.
   *
   * @remarks Due to the complexity of this hook, it is *highly* recommended to use {@link useCompleteGridNavigation} instead.
   * But if you do need to it's designed to work well with intellisense -- just keep plugging the holes until the errors stop and that's 95% of it right there.
   *
   * Some features and/or limitations of this hook:
   *
   * ```md-literal
   * * Like all other hooks (except sorting), the only DOM restriction is that the rows and cells are descendants of the grid as a whole **somewhere**.
   * * Rows are given priority over columns. Sorting/filtering happens by row, Page Up/Down, the Home/End keys, and typeahead affect the current row, etc.
   * * Cells can have a `colSpan` or be missing, and moving with the arrow keys will "remember" the correct column to be in as focus jumps around.
   * ```
   *
   * @compositeParams
   *
   * @hasChild {@link useGridNavigationRow}
   * @hasChild {@link useGridNavigationCell}
   */
  const useGridNavigation = monitored(function useGridNavigation({
    gridNavigationParameters: {
      onTabbableColumnChange,
      initiallyTabbableColumn,
      ...void3
    },
    linearNavigationParameters,
    ...listNavigationParameters
  }) {
    const [getTabbableColumn, setTabbableColumn] = usePassiveState(onTabbableColumnChange, useStableCallback(() => {
      let t = initiallyTabbableColumn ?? 0;
      return {
        actual: t,
        ideal: t
      };
    }));
    const {
      linearNavigationReturn,
      rovingTabIndexReturn,
      typeaheadNavigationReturn,
      managedChildrenParameters,
      context: {
        rovingTabIndexContext,
        typeaheadNavigationContext
      },
      props,
      ...void1
    } = useListNavigation({
      linearNavigationParameters: {
        arrowKeyDirection: "vertical",
        ...linearNavigationParameters
      },
      ...listNavigationParameters
    });
    const gridNavigationRowContext = useMemoObject({
      //rowIsUntabbableBecauseOfGrid: !!untabbable,
      setTabbableRow: rovingTabIndexReturn.setTabbableIndex,
      getTabbableColumn,
      setTabbableColumn
    });
    return {
      props,
      managedChildrenParameters,
      context: useMemoObject({
        gridNavigationRowContext,
        rovingTabIndexContext,
        typeaheadNavigationContext
      }),
      linearNavigationReturn,
      rovingTabIndexReturn,
      typeaheadNavigationReturn
    };
  });
  /**
   * Child hook for {@link useGridNavigation}
   *
   * As a row, this hook is responsible for both being a **child** of list navigation, but also a **parent** of list navigation.
   * As such, this is one of the most complicated hooks here in terms of dependencies.
   *
   * @compositeParams
   */
  const useGridNavigationRow = monitored(function useGridNavigationRow({
    // Stuff for the row as a child of the parent grid
    info: {
      index,
      untabbable,
      ...void3
    },
    textContentParameters,
    context: contextFromParent,
    // Stuff for the row as a parent of child cells
    linearNavigationParameters,
    rovingTabIndexParameters: {
      untabbable: rowIsUntabbableAndSoAreCells,
      initiallyTabbedIndex,
      onTabbableIndexChange,
      ...void4
    },
    managedChildrenReturn,
    typeaheadNavigationParameters,
    // Both/neither
    refElementReturn,
    ...void1
  }) {
    const {
      getTabbableColumn,
      setTabbableColumn,
      setTabbableRow
    } = contextFromParent.gridNavigationRowContext;
    const getIndex = useStableCallback(() => {
      return index;
    });
    // When this row is focused from the parent's `useRovingTabIndex`,
    // instead of focusing the row element, this function focuses the appropriate cell element.
    const whenThisRowIsFocused = useStableCallback(e => {
      const {
        getChildren
      } = managedChildrenReturn;
      if (contextFromParent.rovingTabIndexContext.getUntabbable()) {
        // If the parent is untabbable, and this row was requested to focus itself (as part of parentFocusSelf),
        // then we focus the parent grid instead of the child cell.
        contextFromParent.rovingTabIndexContext.parentFocusSelf(true);
      } else {
        // If the parent is tabbable (normal behavior), 
        // then we focus the cell that should be focused in this row.
        let {
          ideal,
          actual
        } = getTabbableColumn();
        let index = ideal ?? 0;
        let child = getChildren().getAt(index);
        let lowestIndex = getChildren().getLowestIndex();
        let highestIndex = getChildren().getHighestIndex();
        while ((!child || child.untabbable) && index > lowestIndex) {
          --index;
          child = getChildren().getAt(index);
        }
        while ((!child || child.untabbable) && index <= highestIndex) {
          ++index;
          child = getChildren().getAt(index);
        }
        if (child) {
          const e = child.getElement();
          child.focusSelf(e);
        } else {
          focus(e);
        }
      }
    }, []);
    const focusSelf = whenThisRowIsFocused;
    const {
      props: propsLNC,
      info: {
        getLocallyTabbable,
        setLocallyTabbable,
        ...void2
      },
      hasCurrentFocusParameters,
      pressParameters,
      rovingTabIndexChildReturn,
      textContentReturn,
      ...void6
    } = useListNavigationChild({
      info: {
        index,
        untabbable
      },
      refElementReturn,
      textContentParameters,
      context: contextFromParent
    });
    const allChildCellsAreUntabbable = !rovingTabIndexChildReturn.tabbable;
    const {
      props: propsLN,
      context: contextULN,
      linearNavigationReturn,
      managedChildrenParameters,
      rovingTabIndexReturn,
      typeaheadNavigationReturn,
      ...void5
    } = useListNavigation({
      managedChildrenReturn,
      refElementReturn,
      typeaheadNavigationParameters,
      rearrangeableChildrenReturn: {
        indexDemangler: identity,
        indexMangler: identity
      },
      rovingTabIndexParameters: {
        untabbableBehavior: "leave-child-focused",
        focusSelfParent: whenThisRowIsFocused,
        untabbable: allChildCellsAreUntabbable || rowIsUntabbableAndSoAreCells,
        initiallyTabbedIndex,
        onTabbableIndexChange: useStableCallback((v, p, r) => {
          setTabbableColumn({
            ideal: v,
            actual: v
          }, r);
          onTabbableIndexChange?.(v, p, r);
        })
      },
      linearNavigationParameters: {
        onNavigateLinear: useStableCallback((next, event) => {
          setTabbableColumn(prev => ({
            ideal: next,
            actual: prev?.actual ?? next
          }), event);
        }),
        disableHomeEndKeys: true,
        pageNavigationSize: 0,
        arrowKeyDirection: "horizontal",
        ...linearNavigationParameters
      },
      paginatedChildrenParameters: {
        paginationMin: null,
        paginationMax: null
      }
    });
    const {
      setTabbableIndex
    } = rovingTabIndexReturn;
    const gridNavigationCellContext = useMemoObject({
      //allChildCellsAreUntabbable,
      setTabbableRow,
      getRowIndex: getIndex,
      getTabbableColumn,
      setTabbableColumn,
      setTabbableCell: setTabbableIndex
    });
    // These will often have conflicting values, but we always use -1 for rows no matter what,
    // so instead of negotiating a resolution we can just give a straight answer.
    propsLN.tabIndex = propsLNC.tabIndex = -1;
    const props = useMergedProps(propsLN, propsLNC, {
      // Ensure that if the browser focuses the row for whatever reason, we transfer the focus to a child cell.
      onFocus: useStableCallback(e => whenThisRowIsFocused(e.currentTarget))
    });
    const contextToChildren = useMemoObject({
      gridNavigationCellContext,
      ...contextULN
    });
    return {
      context: contextToChildren,
      props: useTagProps(props),
      info: {
        focusSelf,
        getLocallyTabbable,
        setLocallyTabbable
      },
      hasCurrentFocusParameters,
      pressParameters,
      rovingTabIndexChildReturn,
      textContentReturn,
      linearNavigationReturn,
      managedChildrenParameters,
      rovingTabIndexReturn,
      typeaheadNavigationReturn
    };
  });
  /**
   * Child hook for {@link useGridNavigationRow} (and {@link useGridNavigation}).
   *
   * @compositeParams
   */
  const useGridNavigationCell = monitored(function useGridNavigationCell({
    context: {
      gridNavigationCellContext: {
        getRowIndex,
        setTabbableRow,
        getTabbableColumn: _getCurrentColumn,
        setTabbableColumn,
        setTabbableCell,
        ...void4
      },
      rovingTabIndexContext,
      typeaheadNavigationContext,
      ...void5
    },
    info: {
      index,
      untabbable,
      ...void7
    },
    refElementReturn,
    textContentParameters,
    gridNavigationCellParameters: {
      colSpan,
      ...void6
    },
    ...void1
  }) {
    colSpan ??= 1;
    const {
      hasCurrentFocusParameters: {
        onCurrentFocusedInnerChanged: ocfic1,
        ...void3
      },
      rovingTabIndexChildReturn,
      textContentReturn,
      pressParameters,
      props,
      info: infoLs,
      ...void2
    } = useListNavigationChild({
      info: {
        index,
        untabbable
      },
      context: {
        rovingTabIndexContext,
        typeaheadNavigationContext
      },
      textContentParameters,
      refElementReturn
    });
    return {
      info: infoLs,
      props: useMergedProps(props, {
        onClick: e => setTabbableColumn(prev => ({
          ideal: index,
          actual: prev?.actual ?? index
        }), e)
      }),
      rovingTabIndexChildReturn,
      textContentReturn,
      pressParameters,
      hasCurrentFocusParameters: {
        onCurrentFocusedInnerChanged: useStableCallback((focused, prev, e) => {
          ocfic1?.(focused, prev, e);
          if (focused) {
            setTabbableRow(getRowIndex(), e, false);
            setTabbableColumn(prev => {
              return {
                actual: index,
                ideal: prev?.ideal ?? index
              };
            }, e);
            setTabbableCell(prev => {
              if (prev != null && (prev < index || prev > index + colSpan)) {
                return prev;
              }
              return index;
            }, e, false);
          }
        })
      }
    };
  });

  /**
   * Allows children to stop themselves from rendering outside of a narrow range.
   *
   * @remarks Each child will still render itself, but it is aware of if it is within/outside of the pagination range, and simply return empty.
   *
   * @compositeParams
   *
   * @hasChild {@link usePaginatedChild}
   */
  const usePaginatedChildren = monitored(function usePaginatedChildren({
    managedChildrenReturn: {
      getChildren
    },
    rearrangeableChildrenReturn: {
      indexDemangler
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
    }
  }) {
    const parentIsPaginated = paginationMin != null || paginationMax != null;
    const lastPagination = _({
      paginationMax: null,
      paginationMin: null
    });
    const refreshPagination = T$1((paginationMin, paginationMax) => {
      const childMax = getChildren().getHighestIndex() + 1;
      const childMin = getChildren().getLowestIndex();
      for (let i = childMin; i <= childMax; ++i) {
        const visible = i >= (paginationMin ?? -Infinity) && i < (paginationMax ?? Infinity);
        getChildren().getAt(indexDemangler(i))?.setPaginationVisible(visible);
        if (visible && (paginationMax != null || paginationMin != null)) getChildren().getAt(indexDemangler(i))?.setChildCountIfPaginated(getChildren().getHighestIndex() + 1);
      }
    }, [/* Must be empty */]);
    p(() => {
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
    const pmin = _(paginationMin);
    const pmax = _(paginationMax);
    pmin.current = paginationMin;
    pmax.current = paginationMax;
    const getDefaultPaginationVisible = T$1(i => {
      return i >= (pmin.current ?? -Infinity) && i < (pmax.current ?? Infinity);
    }, []);
    const paginatedChildContext = F$1(() => ({
      parentIsPaginated,
      getDefaultPaginationVisible
    }), [parentIsPaginated]);
    const getPaginationMin = useStableGetter(paginationMin);
    const getPaginationMax = useStableGetter(paginationMax);
    y(() => {
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
      context: F$1(() => ({
        paginatedChildContext
      }), [paginatedChildContext]),
      paginatedChildrenReturn: {
        refreshPagination
      }
    };
  });
  /**
   * Child hook for {@link usePaginatedChildren}.
   *
   * @remarks When a child is paginated, it still renders itself (i.e. it calls this hook, so it's rendering),
   * so check `hideBecausePaginated` and, if it's true, avoid doing any heavy logic and render with `display: none`.
   *
   * @compositeParams
   */
  const usePaginatedChild = monitored(function usePaginatedChild({
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

  /**
   * Returns a function that will, when called, force the component
   * that uses this hook to re-render itself.
   *
   * @remarks It's a bit smelly, so best to use sparingly.
   */
  const useForceUpdate = monitored(function useForceUpdate() {
    const [, set] = h(0);
    return _(() => set(i => ++i)).current;
  });

  /**
   * A parent can call this to provide useRearrangeableChildren with the `context` it expects.
   *
   * @returns
   */
  function useCreateProcessedChildrenContext() {
    const sortRef = _(null);
    const shuffleRef = _(null);
    const reverseRef = _(null);
    const rearrangeRef = _(null);
    const indexManglerRef = _(null);
    const indexDemanglerRef = _(null);
    const indexMangler = useStableCallback(i => {
      return (indexManglerRef.current ?? identity)(i);
    }, []);
    const indexDemangler = useStableCallback(i => {
      return (indexDemanglerRef.current ?? identity)(i);
    }, []);
    const sort = useStableCallback(i => {
      return (sortRef.current ?? identity)(i);
    }, []);
    const shuffle = useStableCallback(() => {
      return (shuffleRef.current ?? identity)();
    }, []);
    const reverse = useStableCallback(() => {
      return (reverseRef.current ?? identity)();
    }, []);
    const rearrange = useStableCallback((original, ordered) => {
      (rearrangeRef.current ?? noop)(original, ordered);
    }, []);
    const provideManglers = useStableCallback(({
      indexDemangler,
      indexMangler,
      reverse,
      shuffle,
      sort
    }) => {
      indexManglerRef.current = indexMangler;
      indexDemanglerRef.current = indexDemangler;
      reverseRef.current = reverse;
      shuffleRef.current = shuffle;
      sortRef.current = sort;
    });
    const rearrangeableChildrenContext = useMemoObject({
      provideManglers
    });
    const context = useMemoObject({
      rearrangeableChildrenContext
    });
    return {
      context,
      indexDemangler,
      indexMangler,
      rearrange,
      reverse,
      shuffle,
      sort
    };
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
  const useRearrangeableChildren = monitored(function useRearrangeableChildren({
    rearrangeableChildrenParameters: {
      getIndex,
      onRearranged,
      compare: userCompare,
      children,
      adjust
    },
    managedChildrenReturn: {
      getChildren
    },
    context: {
      rearrangeableChildrenContext: {
        provideManglers
      }
    }
  }) {
    // These are used to keep track of a mapping between unsorted index <---> sorted index.
    // These are needed for navigation with the arrow keys.
    const mangleMap = _(new Map());
    const demangleMap = _(new Map());
    const indexMangler = T$1(n => mangleMap.current.get(n) ?? n, []);
    const indexDemangler = T$1(n => demangleMap.current.get(n) ?? n, []);
    const onRearrangedGetter = useStableGetter(onRearranged);
    const shuffle$1 = T$1(() => {
      const managedRows = getChildren();
      const originalRows = managedRows._arraySlice();
      const shuffledRows = shuffle(originalRows);
      return rearrange(originalRows, shuffledRows);
    }, [/* Must remain stable */]);
    const reverse = T$1(() => {
      const managedRows = getChildren();
      const originalRows = managedRows._arraySlice();
      const reversedRows = managedRows._arraySlice().reverse();
      return rearrange(originalRows, reversedRows);
    }, [/* Must remain stable */]);
    // The sort function needs to be able to update whoever has all the sortable children.
    // Because that might not be the consumer of *this* hook directly (e.g. a table uses
    // this hook, but it's tbody that actually needs updating), we need to remotely
    // get and set a forceUpdate function.
    const forceUpdateRef = _(null);
    const rearrange = T$1((originalRows, sortedRows) => {
      mangleMap.current.clear();
      demangleMap.current.clear();
      // Update our sorted <--> unsorted indices map 
      // and rerender the whole table, basically
      for (let indexAsSorted = 0; indexAsSorted < sortedRows.length; ++indexAsSorted) {
        if (sortedRows[indexAsSorted]) {
          const indexAsUnsorted = sortedRows[indexAsSorted].index;
          mangleMap.current.set(indexAsUnsorted, indexAsSorted);
          demangleMap.current.set(indexAsSorted, indexAsUnsorted);
        }
      }
      onRearrangedGetter()?.();
      forceUpdateRef.current?.();
    }, []);
    // The actual sort function.
    const getCompare = useStableGetter(userCompare ?? defaultCompare);
    const sort = T$1(direction => {
      const managedRows = getChildren();
      const compare = getCompare();
      const originalRows = managedRows._arraySlice();
      const sortedRows = compare ? originalRows.sort((lhsRow, rhsRow) => {
        const lhsValue = lhsRow;
        const rhsValue = rhsRow;
        const result = compare(lhsValue, rhsValue);
        if (direction[0] == "d") return -result;
        return result;
      }) : managedRows._arraySlice();
      return rearrange(originalRows, sortedRows);
    }, [/* Must remain stable */]);
    console.assert(Array.isArray(children));
    const forceUpdate = useForceUpdate();
    console.assert(forceUpdateRef.current == null || forceUpdateRef.current == forceUpdate);
    forceUpdateRef.current = forceUpdate; // TODO: Mutation during render? I mean, not really -- it's always the same value...right?
    let sorted = children.slice().map(child => {
      const mangledIndex = (child == null ? null : indexMangler(getIndex(child))) ?? null;
      const demangledIndex = (child == null ? null : getIndex(child)) ?? null;
      return {
        child,
        sort: mangledIndex ?? -1,
        mangledIndex,
        demangledIndex
      };
    }).sort((lhs, rhs) => lhs.sort - rhs.sort).map(({
      child,
      mangledIndex,
      demangledIndex
    }) => {
      // "data-mangled-index": mangledIndex, "data-demangled-index": demangledIndex
      if (child) return (adjust || identity)(y$1(child.type, {
        ...child.props,
        key: demangledIndex
      }), {
        mangledIndex,
        demangledIndex
      }) ?? null;
      return null;
    });
    // The parent useListNavigation uses these for various reasons.
    // If it called useRearrangeableChildren directly, it would have this information,
    // but we're one level deeper in the tree, so once we mount we need to give it to them.
    y(() => {
      provideManglers({
        indexDemangler,
        indexMangler,
        reverse,
        shuffle: shuffle$1,
        sort
      });
    }, []);
    return {
      rearrangeableChildrenReturn: {
        indexMangler,
        indexDemangler,
        rearrange,
        shuffle: shuffle$1,
        reverse,
        sort,
        children: sorted
      }
    };
  });
  function defaultCompare(lhs, rhs) {
    return compare1(lhs?.index, rhs?.index); // TODO: This used to have getSortValue() for a better default, but was also kind of redundant with defaultCompare being overrideable?
    function compare1(lhs, rhs) {
      if (lhs == null || rhs == null) {
        if (lhs == null) return -1;
        if (rhs == null) return 1;
      }
      return lhs - rhs;
    }
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
   * @compositeParams
   *
   * @hasChild {@link useStaggeredChild}
   */
  const useStaggeredChildren = monitored(function useStaggeredChildren({
    managedChildrenReturn: {
      getChildren
    },
    staggeredChildrenParameters: {
      staggered,
      childCount
    },
    refElementReturn: {
      getElement
    }
  }) {
    // TODO: Right now, staggering doesn't take into consideration reordering via indexMangler and indexDemangler.
    // This isn't a huge deal because the IntersectionObserver takes care of any holes, but it can look a bit odd
    // until they fill in.
    const [currentlyStaggering, setCurrentlyStaggering] = useState(staggered);
    // This is the highest index that we want to show, inclusive.
    const getTargetStaggerIndex = useStableGetter((childCount || 0) - 1);
    // By default, when a child mounts, we tell the next child to mount and simply repeat.
    // If a child is missing, however, it will break that chain.
    // To guard against that, we also wait for 50ms, and if it hasn't loaded by then, we just continue as if it did.
    const timeoutHandle = _(-1);
    const resetEmergencyTimeout = T$1(() => {
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
    p(() => {
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
    const [getDisplayedStaggerIndex, setDisplayedStaggerIndex] = usePassiveState(T$1((newIndex, prevIndex) => {
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
    const childCallsThisToTellTheParentToMountTheNextOne = T$1(justMountedChildIndex => {
      setDisplayedStaggerIndex(prevIndex => {
        let next = Math.min(getTargetStaggerIndex() ?? 0,
        // Don't go higher than the highest child
        1 + Math.max(prevIndex ?? 0, justMountedChildIndex) // Go one higher than the child that just mounted itself or any previously mounted child (TODO: Is that last bit working as intended?)
        );

        while (next < (getChildCount() || 0) && getChildren().getAt(next)?.getStaggeredVisible()) {
          ++next;
        }
        return next;
      });
    }, []);
    // TODO: Modification during render (but it's really, really hard to avoid here,
    // but also probably fine because parents render before children? Does that include suspense?)
    const s = _(parentIsStaggered);
    s.current = parentIsStaggered;
    const getDefaultStaggeredVisible = T$1(i => {
      if (s.current) {
        const staggerIndex = getDisplayedStaggerIndex();
        if (staggerIndex == null) return false;
        return i < staggerIndex;
      } else {
        return true;
      }
    }, []);
    const intersectionObserver = _(null);
    const elementToIndex = _(new Map());
    const setElementToIndexMap = T$1((index, element) => {
      elementToIndex.current.set(element, index);
    }, []);
    const getIntersectionObserver = T$1(() => intersectionObserver.current, []);
    const staggeredChildContext = F$1(() => ({
      parentIsStaggered,
      childCallsThisToTellTheParentToMountTheNextOne,
      getDefaultStaggeredVisible,
      getIntersectionObserver,
      setElementToIndexMap
    }), [parentIsStaggered]);
    p(() => {
      getElement();
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
      context: F$1(() => ({
        staggeredChildContext
      }), [staggeredChildContext])
    };
  });
  /**
   * Child hook for {@link useStaggeredChildren}.
   *
   * @remarks When a child is staggered, it still renders itself (i.e. it calls this hook, so it's rendering),
   * so check `hideBecauseStaggered` and, if it's true, avoid doing any heavy logic. Ideally that kind of heavy
   * logic/CSS will be in a sub-child that can be either rendered or not depending on `hideBecauseStaggered`.
   *
   * @compositeParams
   */
  const useStaggeredChild = monitored(function useStaggeredChild({
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
    const [staggeredVisible, setStaggeredVisible, getStaggeredVisible] = useState(getDefaultStaggeredVisible(index));
    // Controls whether we ask the parent to start mounting children after us.
    // (We don't ask when the child becomes visible due to screen-scrolling,
    // only when it becomes visible because we were next in line to do so)
    const becauseScreen = _(false);
    usePassiveState(useStableCallback((next, prev, reason) => {
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
    const childUseEffect = T$1(() => {
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
    const e = _(null);
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
   * @compositeParams
   *
   * @hasChild {@link useProcessedChild}
   */
  const useProcessedChildren = monitored(function useProcessedChildren({
    rearrangeableChildrenParameters: {
      onRearranged,
      children: childrenUnsorted,
      ...rearrangeableChildrenParameters
    },
    paginatedChildrenParameters,
    staggeredChildrenParameters,
    context,
    managedChildrenParameters
  }) {
    const childCount = childrenUnsorted.length;
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
    const {
      rearrangeableChildrenReturn
    } = useRearrangeableChildren({
      rearrangeableChildrenParameters: {
        onRearranged: useStableCallback(() => {
          refreshPagination(paginationMin, paginationMax);
          onRearranged?.();
        }),
        children: childrenUnsorted,
        ...rearrangeableChildrenParameters
      },
      managedChildrenReturn,
      context
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
      rearrangeableChildrenReturn
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
      },
      refElementReturn: {
        getElement: context.processedChildrenContext.getElement
      }
    });
    return {
      rearrangeableChildrenReturn,
      staggeredChildrenReturn,
      paginatedChildrenReturn,
      context: useMemoObject({
        staggeredChildContext,
        paginatedChildContext,
        managedChildContext
      })
    };
  });
  const useProcessedChild = monitored(function useProcessedChild({
    context,
    info: {
      index,
      ...uinfo
    }
  }) {
    const {
      paginatedChildContext,
      staggeredChildContext
    } = context;
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

  /**
   * Allows a parent to track the changes made to multi-selection children.
   *
   * @remarks Beyond just giving each child the ability to track its own selected state, the parent can change all children at once.
   * Pressing <kbd>Ctrl</kbd>+<kbd>A</kbd> will select all children, for example.
   *
   * This is not exclusive with {@link useSingleSelection}, you can use both at once if you have a use case for it.
   *
   * @compositeParams
   *
   * @hasChild {@link useMultiSelectionChild}
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
    // By having both we get the total number of children for free, even if there are holes in the array.
    // TODO: useManagedChildren should do that by default??
    const selectedIndices = _(new Set());
    const unselectedIndices = _(new Set());
    const startOfShiftSelect = _(null);
    // Why these are needed:
    // When in focus mode, there's no way to determine whether these keys are held down during the focus event.
    // That's all. Wow.
    let shiftKeyHeld = _(false);
    let ctrlKeyHeld = _(false);
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
    const onCompositeFocusChange = useStableCallback((anyFocused, prevAnyFocused, event) => {
      if (!anyFocused) {
        ctrlKeyHeld.current = shiftKeyHeld.current = false;
      }
    });
    let nextCtrlAIsUndo = _(false);
    useGlobalHandler(document, "keydown", useStableCallback(e => {
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
    useGlobalHandler(document, "keyup", e => {
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
          getCtrlKeyDown: T$1(() => ctrlKeyHeld.current, []),
          getShiftKeyDown: T$1(() => shiftKeyHeld.current, []),
          getAnyFocused
        })
      }),
      childrenHaveFocusParameters: {
        onCompositeFocusChange
      },
      multiSelectionReturn: {},
      propsStable: useMemoObject({})
    };
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
    // When we're in focus-selection mode, focusing any child deselects everything and selects JUST that child.
    // But that's really annoying for when you tab into the component, so it's only enabled when you're navigating WITHIN the component
    // (e.g. we only do that "reset everything" selection stuff when the component already had focus and that focus simply moved to a different child)
    // The exception is press events, because a click can come from anywhere, focusing a child even if focus is elsewhere (or the window doesn't even have focus!)
    // So when a press event happens during focus-selection mode, we disable the disabling with this flag.
    const pressFreebie = _(false);
    const onPressSync = e => {
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
    y(() => {
      if (multiSelectIsEnabled) {
        notifyParentOfChildSelectChange(null, index, getLocalSelected(), undefined);
        return () => notifyParentOfChildSelectChange(null, index, undefined, getLocalSelected());
      }
    }, [index, multiSelectIsEnabled]);
    const onCurrentFocusedInnerChanged = useStableCallback((focused, prev, event) => {
      if (focused) {
        if (multiSelectionMode == "focus") {
          let any = getAnyFocused();
          console.log("any focused: ", any);
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
              //onMultiSelectChange?.(enhanceEvent(event, { multiSelected: !localSelected }));
              //doContiguousSelection
              //setSelectedFromParent(event!, getLocalSelected())
              break;
            case "skip":
              debugger;
              break;
          }
          /*if (getShiftKeyDown()) {
              onMultiSelectChange?.(enhanceEvent(event, { multiSelected: !localSelected }));
          }
          else {
              changeAllChildren(event!, i => (i == index));
          }*/
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
        multiSelectionMode
      },
      pressParameters: {
        onPressSync
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
  }
  /**
   *
   * @compositeParams
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
    let s = multiSelected || false;
    let reasonRef = _(undefined);
    p(() => {
      changeMultiSelected(reasonRef.current, s);
    }, [s]);
    const omsc = useStableCallback(e => {
      reasonRef.current = e;
      return onMultiSelectedChange?.(e);
    });
    const setSelectedFromParent = useStableCallback((event, multiSelected) => {
      onMultiSelectedChange?.(enhanceEvent(event, {
        multiSelected
      }));
    });
    return {
      multiSelectionChildParameters: {
        onMultiSelectChange: omsc
      },
      info: {
        setSelectedFromParent
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
  const useSingleSelection = monitored(function useSingleSelection({
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
    const onSingleSelectedIndexChange = useStableCallback(onSelectedIndexChange_U ?? noop);
    const getSelectedAt = T$1(m => {
      return m.getSingleSelected();
    }, []);
    const setSelectedAt = T$1((m, t, newSelectedIndex, prevSelectedIndex) => {
      if (m.untabbable) {
        console.assert(false);
      }
      const directionComparison = newSelectedIndex == m.index ? prevSelectedIndex : newSelectedIndex;
      const direction = directionComparison == null ? null : m.index - directionComparison;
      if (newSelectedIndex == null) console.assert(t == false);
      if (t) console.assert(newSelectedIndex === m.index);
      m.setLocalSingleSelected(t, direction);
    }, []);
    const isSelectedValid = T$1(m => {
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
      onClosestFit: null
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
  /**
   *
   *
   * @compositeParams
   */
  const useSingleSelectionChild = monitored(function useSingleSelectionChild({
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
    const [localSelected, setLocalSelected, getLocalSelected] = useState(getSingleSelectedIndex() == index);
    const [direction, setDirection, getDirection] = useState(getSingleSelectedIndex() == null ? null : getSingleSelectedIndex() - index);
    const onCurrentFocusedInnerChanged = useStableCallback((focused, _prev, e) => {
      if (!singleSelectionDisabled && singleSelectionMode == 'focus' && focused && !untabbable) {
        onSingleSelectedIndexChange(enhanceEvent(e, {
          selectedIndex: index
        }));
      }
    });
    const onPressSync = useStableCallback(e => {
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
        getSingleSelectedOffset: getDirection
      },
      props: useTagProps(ariaPropName == null || singleSelectionMode == "disabled" ? {} : {
        [`${propParts[0]}-${propParts[1]}`]: localSelected ? propParts[1] == "current" ? `${propParts[2]}` : `true` : "false"
      }),
      hasCurrentFocusParameters: {
        onCurrentFocusedInnerChanged
      },
      pressParameters: {
        onPressSync
      }
    };
  });
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
    let reasonRef = _(undefined);
    p(() => {
      changeSingleSelectedIndex(s, reasonRef.current);
    }, [s]);
    const osic = T$1(e => {
      reasonRef.current = e;
      return onSingleSelectedIndexChange?.(e);
    }, [onSingleSelectedIndexChange]);
    return {
      singleSelectionParameters: {
        onSingleSelectedIndexChange: osic
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
   * @compositeParams
   *
   * @hasChild {@link useSelectionChild}
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
        onCompositeFocusChange: useStableCallback((...a) => {
          ocfc1(...a);
          ocfc2(...a);
        })
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
      pressParameters: {
        onPressSync: opc1
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
      pressParameters: {
        onPressSync: opc2
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
        onCurrentFocusedInnerChanged: useStableCallback((...a) => {
          ocfic1(...a);
          ocfic2(...a);
        })
      },
      info: {
        getMultiSelected,
        setSelectedFromParent,
        getSingleSelected,
        setLocalSingleSelected,
        singleSelected,
        getMultiSelectionDisabled
      },
      multiSelectionChildReturn,
      pressParameters: {
        onPressSync: useStableCallback((...a) => {
          opc1(...a);
          opc2(...a);
        })
      },
      props: useMergedProps(p1, p2),
      singleSelectionChildReturn
    };
  }
  function useSelectionDeclarative(args) {
    return useSingleSelectionDeclarative(args);
  }
  function useSelectionChildDeclarative(args) {
    return useMultiSelectionChildDeclarative(args);
  }

  /**
   * Access `HTMLElement` rendered by this hook/these props, either as soon as it's available (as a callback), or whenever you need it (as a getter function).
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
  const useRefElement = function useRefElement(args) {
    const nonElementWarn = _(false);
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
    const handler = T$1((e, prevValue) => {
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
    const [getElement, setElement] = usePassiveState(handler, returnNull, runImmediately);
    const propsStable = _(useTagProps({
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
  };

  /**
   * Functions to handle the specialization of a `Map` whose values are always a `Set`.
   */
  const MapOfSets = {
    add: (map, key, value) => {
      var _a;
      let set = (_a = map.get(key)) !== null && _a !== void 0 ? _a : new Set();
      set.add(value);
      map.set(key, set);
      return map;
    },
    /**
     * Removes this `value` from the `Set` associated with `key`. Does not remove the `Set` itself, even if it becomes empty.
     */
    delete: (map, key, value) => {
      var _a;
      let set = (_a = map.get(key)) !== null && _a !== void 0 ? _a : new Set();
      let ret = set.delete(value);
      map.set(key, set);
      return ret;
    },
    has: (map, key, value) => {
      var _a, _b;
      return (_b = (_a = map.get(key)) === null || _a === void 0 ? void 0 : _a.has(value)) !== null && _b !== void 0 ? _b : false;
    }
  };
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
  const useActiveElement = monitored(function useActiveElement({
    activeElementParameters: {
      onActiveElementChange,
      onLastActiveElementChange,
      onWindowFocusedChange,
      getDocument
    }
  }) {
    p(() => {
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
      MapOfSets.add(activeElementUpdaters, window, laeu);
      MapOfSets.add(lastActiveElementUpdaters, window, llaeu);
      MapOfSets.add(windowFocusedUpdaters, window, lwfu);
      return () => {
        MapOfSets.delete(activeElementUpdaters, window, laeu);
        MapOfSets.delete(lastActiveElementUpdaters, window, llaeu);
        MapOfSets.delete(windowFocusedUpdaters, window, lwfu);
        if (activeElementUpdaters.size === 0) {
          document?.removeEventListener("focusin", focusin);
          document?.removeEventListener("focusout", focusout);
          window?.removeEventListener("focus", windowFocus);
          window?.removeEventListener("blur", windowBlur);
        }
      };
    }, []);
    const [getActiveElement, setActiveElement] = usePassiveState(onActiveElementChange, returnNull, runImmediately);
    const [getLastActiveElement, setLastActiveElement] = usePassiveState(onLastActiveElementChange, returnNull, runImmediately);
    const [getWindowFocused, setWindowFocused] = usePassiveState(onWindowFocusedChange, returnTrue, runImmediately);
    return {
      activeElementReturn: {
        getActiveElement,
        getLastActiveElement,
        getWindowFocused
      }
    };
  });

  /**
   * Combines all the methods a user can implicitly dismiss a popup component. See {@link useModal} for a hook that's ready-to-use for dialogs and menus.
   *
   * @compositeParams
   */
  const useDismiss = monitored(function useDismiss({
    dismissParameters: {
      dismissActive,
      onDismiss,
      ...void3
    },
    backdropDismissParameters: {
      dismissBackdropActive,
      onDismissBackdrop,
      ...void6
    },
    lostFocusDismissParameters: {
      dismissLostFocusActive,
      onDismissLostFocus,
      ...void7
    },
    escapeDismissParameters: {
      dismissEscapeActive,
      onDismissEscape,
      parentDepth,
      ...void2
    },
    activeElementParameters: {
      getDocument,
      onActiveElementChange,
      onLastActiveElementChange: olaec1,
      onWindowFocusedChange,
      ...void5
    },
    ...void4
  }) {
    const {
      refElementReturn: refElementSourceReturn,
      propsStable: propsStableSource
    } = useRefElement({
      refElementParameters: {}
    });
    const {
      refElementReturn: refElementPopupReturn,
      propsStable: propsStablePopup
    } = useRefElement({
      refElementParameters: {}
    });
    //const onCloseBackdrop = useCallback(() => { return globalOnClose?.("backdrop" as Listeners); }, [globalOnClose]);
    //const onCloseEscape = useCallback(() => { return globalOnClose?.("escape" as Listeners); }, [globalOnClose]);
    //const onCloseFocus = useCallback(() => { return globalOnClose?.("lost-focus" as Listeners); }, [globalOnClose]);
    useBackdropDismiss({
      refElementPopupReturn,
      backdropDismissParameters: {
        dismissBackdropActive: dismissBackdropActive && dismissActive,
        onDismissBackdrop: useStableCallback(e => {
          onDismissBackdrop?.(e);
          onDismiss(e, "backdrop");
        })
      }
    });
    useEscapeDismiss({
      refElementPopupReturn,
      escapeDismissParameters: {
        dismissEscapeActive: dismissEscapeActive && dismissActive,
        getDocument,
        onDismissEscape: useStableCallback(e => {
          onDismissEscape?.(e);
          onDismiss(e, "escape");
        }),
        parentDepth
      }
    });
    const {
      activeElementParameters: {
        onLastActiveElementChange: olaec2,
        ...void1
      }
    } = useLostFocusDismiss({
      lostFocusDismissParameters: {
        dismissLostFocusActive: dismissLostFocusActive && dismissActive,
        onDismissLostFocus: useStableCallback(e => {
          onDismissLostFocus?.(e);
          onDismiss(e, "lost-focus");
        })
      },
      refElementPopupReturn,
      refElementSourceReturn
    });
    useActiveElement({
      activeElementParameters: {
        onLastActiveElementChange: useStableCallback((a, b, r) => {
          olaec2?.(a, b, r);
          olaec1?.(a, b, r);
        }),
        onActiveElementChange,
        onWindowFocusedChange,
        getDocument
      }
    });
    return {
      refElementSourceReturn,
      refElementPopupReturn,
      propsStableSource: propsStableSource,
      propsStablePopup: propsStablePopup
    };
  });

  /**
   * @license
   * Copyright 2016 Google Inc. All rights reserved.
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *     http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  (() => {
    var _a, _b, _c;
    /* Symbols for private properties */
    const _blockingElements = Symbol();
    const _alreadyInertElements = Symbol();
    const _topElParents = Symbol();
    const _siblingsToRestore = Symbol();
    const _parentMO = Symbol();
    /* Symbols for private static methods */
    const _topChanged = Symbol();
    const _swapInertedSibling = Symbol();
    const _inertSiblings = Symbol();
    const _restoreInertedSiblings = Symbol();
    const _getParents = Symbol();
    const _getDistributedChildren = Symbol();
    const _isInertable = Symbol();
    const _handleMutations = Symbol();
    class BlockingElementsImpl {
      constructor() {
        /**
         * The blocking elements.
         */
        this[_a] = [];
        /**
         * Used to keep track of the parents of the top element, from the element
         * itself up to body. When top changes, the old top might have been removed
         * from the document, so we need to memoize the inerted parents' siblings
         * in order to restore their inerteness when top changes.
         */
        this[_b] = [];
        /**
         * Elements that are already inert before the first blocking element is
         * pushed.
         */
        this[_c] = new Set();
      }
      destructor() {
        // Restore original inertness.
        this[_restoreInertedSiblings](this[_topElParents]);
        // Note we don't want to make these properties nullable on the class,
        // since then we'd need non-null casts in many places. Calling a method on
        // a BlockingElements instance after calling destructor will result in an
        // exception.
        const nullable = this;
        nullable[_blockingElements] = null;
        nullable[_topElParents] = null;
        nullable[_alreadyInertElements] = null;
      }
      get top() {
        const elems = this[_blockingElements];
        return elems[elems.length - 1] || null;
      }
      push(element) {
        if (!element || element === this.top) {
          return;
        }
        // Remove it from the stack, we'll bring it to the top.
        this.remove(element);
        this[_topChanged](element);
        this[_blockingElements].push(element);
      }
      remove(element) {
        const i = this[_blockingElements].indexOf(element);
        if (i === -1) {
          return false;
        }
        this[_blockingElements].splice(i, 1);
        // Top changed only if the removed element was the top element.
        if (i === this[_blockingElements].length) {
          this[_topChanged](this.top);
        }
        return true;
      }
      pop() {
        const top = this.top;
        top && this.remove(top);
        return top;
      }
      has(element) {
        return this[_blockingElements].indexOf(element) !== -1;
      }
      /**
       * Sets `inert` to all document elements except the new top element, its
       * parents, and its distributed content.
       */
      [(_a = _blockingElements, _b = _topElParents, _c = _alreadyInertElements, _topChanged)](newTop) {
        const toKeepInert = this[_alreadyInertElements];
        const oldParents = this[_topElParents];
        // No new top, reset old top if any.
        if (!newTop) {
          this[_restoreInertedSiblings](oldParents);
          toKeepInert.clear();
          this[_topElParents] = [];
          return;
        }
        const newParents = this[_getParents](newTop);
        // New top is not contained in the main document!
        if (newParents[newParents.length - 1].parentNode !== document.body) {
          throw Error('Non-connected element cannot be a blocking element');
        }
        // Cast here because we know we'll call _inertSiblings on newParents
        // below.
        this[_topElParents] = newParents;
        const toSkip = this[_getDistributedChildren](newTop);
        // No previous top element.
        if (!oldParents.length) {
          this[_inertSiblings](newParents, toSkip, toKeepInert);
          return;
        }
        let i = oldParents.length - 1;
        let j = newParents.length - 1;
        // Find common parent. Index 0 is the element itself (so stop before it).
        while (i > 0 && j > 0 && oldParents[i] === newParents[j]) {
          i--;
          j--;
        }
        // If up the parents tree there are 2 elements that are siblings, swap
        // the inerted sibling.
        if (oldParents[i] !== newParents[j]) {
          this[_swapInertedSibling](oldParents[i], newParents[j]);
        }
        // Restore old parents siblings inertness.
        i > 0 && this[_restoreInertedSiblings](oldParents.slice(0, i));
        // Make new parents siblings inert.
        j > 0 && this[_inertSiblings](newParents.slice(0, j), toSkip, null);
      }
      /**
       * Swaps inertness between two sibling elements.
       * Sets the property `inert` over the attribute since the inert spec
       * doesn't specify if it should be reflected.
       * https://html.spec.whatwg.org/multipage/interaction.html#inert
       */
      [_swapInertedSibling](oldInert, newInert) {
        const siblingsToRestore = oldInert[_siblingsToRestore];
        // oldInert is not contained in siblings to restore, so we have to check
        // if it's inertable and if already inert.
        if (this[_isInertable](oldInert) && !oldInert.inert) {
          oldInert.inert = true;
          siblingsToRestore.add(oldInert);
        }
        // If newInert was already between the siblings to restore, it means it is
        // inertable and must be restored.
        if (siblingsToRestore.has(newInert)) {
          newInert.inert = false;
          siblingsToRestore.delete(newInert);
        }
        newInert[_parentMO] = oldInert[_parentMO];
        newInert[_siblingsToRestore] = siblingsToRestore;
        oldInert[_parentMO] = undefined;
        oldInert[_siblingsToRestore] = undefined;
      }
      /**
       * Restores original inertness to the siblings of the elements.
       * Sets the property `inert` over the attribute since the inert spec
       * doesn't specify if it should be reflected.
       * https://html.spec.whatwg.org/multipage/interaction.html#inert
       */
      [_restoreInertedSiblings](elements) {
        for (const element of elements) {
          const mo = element[_parentMO];
          mo.disconnect();
          element[_parentMO] = undefined;
          const siblings = element[_siblingsToRestore];
          for (const sibling of siblings) {
            sibling.inert = false;
          }
          element[_siblingsToRestore] = undefined;
        }
      }
      /**
       * Inerts the siblings of the elements except the elements to skip. Stores
       * the inerted siblings into the element's symbol `_siblingsToRestore`.
       * Pass `toKeepInert` to collect the already inert elements.
       * Sets the property `inert` over the attribute since the inert spec
       * doesn't specify if it should be reflected.
       * https://html.spec.whatwg.org/multipage/interaction.html#inert
       */
      [_inertSiblings](elements, toSkip, toKeepInert) {
        for (const element of elements) {
          // Assume element is not a Document, so it must have a parentNode.
          const parent = element.parentNode;
          const children = parent.children;
          const inertedSiblings = new Set();
          for (let j = 0; j < children.length; j++) {
            const sibling = children[j];
            // Skip the input element, if not inertable or to be skipped.
            if (sibling === element || !this[_isInertable](sibling) || toSkip && toSkip.has(sibling)) {
              continue;
            }
            // Should be collected since already inerted.
            if (toKeepInert && sibling.inert) {
              toKeepInert.add(sibling);
            } else {
              sibling.inert = true;
              inertedSiblings.add(sibling);
            }
          }
          // Store the siblings that were inerted.
          element[_siblingsToRestore] = inertedSiblings;
          // Observe only immediate children mutations on the parent.
          const mo = new MutationObserver(this[_handleMutations].bind(this));
          element[_parentMO] = mo;
          let parentToObserve = parent;
          // If we're using the ShadyDOM polyfill, then our parent could be a
          // shady root, which is an object that acts like a ShadowRoot, but isn't
          // actually a node in the real DOM. Observe the real DOM parent instead.
          const maybeShadyRoot = parentToObserve;
          if (maybeShadyRoot.__shady && maybeShadyRoot.host) {
            parentToObserve = maybeShadyRoot.host;
          }
          mo.observe(parentToObserve, {
            childList: true
          });
        }
      }
      /**
       * Handles newly added/removed nodes by toggling their inertness.
       * It also checks if the current top Blocking Element has been removed,
       * notifying and removing it.
       */
      [_handleMutations](mutations) {
        const parents = this[_topElParents];
        const toKeepInert = this[_alreadyInertElements];
        for (const mutation of mutations) {
          // If the target is a shadowRoot, get its host as we skip shadowRoots when
          // computing _topElParents.
          const target = mutation.target.host || mutation.target;
          const idx = target === document.body ? parents.length : parents.indexOf(target);
          const inertedChild = parents[idx - 1];
          const inertedSiblings = inertedChild[_siblingsToRestore];
          // To restore.
          for (let i = 0; i < mutation.removedNodes.length; i++) {
            const sibling = mutation.removedNodes[i];
            if (sibling === inertedChild) {
              console.info('Detected removal of the top Blocking Element.');
              this.pop();
              return;
            }
            if (inertedSiblings.has(sibling)) {
              sibling.inert = false;
              inertedSiblings.delete(sibling);
            }
          }
          // To inert.
          for (let i = 0; i < mutation.addedNodes.length; i++) {
            const sibling = mutation.addedNodes[i];
            if (!this[_isInertable](sibling)) {
              continue;
            }
            if (toKeepInert && sibling.inert) {
              toKeepInert.add(sibling);
            } else {
              sibling.inert = true;
              inertedSiblings.add(sibling);
            }
          }
        }
      }
      /**
       * Returns if the element is inertable.
       */
      [_isInertable](element) {
        return false === /^(style|template|script)$/.test(element.localName);
      }
      /**
       * Returns the list of newParents of an element, starting from element
       * (included) up to `document.body` (excluded).
       */
      [_getParents](element) {
        const parents = [];
        let current = element;
        // Stop to body.
        while (current && current !== document.body) {
          // Skip shadow roots.
          if (current.nodeType === Node.ELEMENT_NODE) {
            parents.push(current);
          }
          // ShadowDom v1
          if (current.assignedSlot) {
            // Collect slots from deepest slot to top.
            while (current = current.assignedSlot) {
              parents.push(current);
            }
            // Continue the search on the top slot.
            current = parents.pop();
            continue;
          }
          current = current.parentNode || current.host;
        }
        return parents;
      }
      /**
       * Returns the distributed children of the element's shadow root.
       * Returns null if the element doesn't have a shadow root.
       */
      [_getDistributedChildren](element) {
        const shadowRoot = element.shadowRoot;
        if (!shadowRoot) {
          return null;
        }
        const result = new Set();
        let i;
        let j;
        let nodes;
        const slots = shadowRoot.querySelectorAll('slot');
        if (slots.length && slots[0].assignedNodes) {
          for (i = 0; i < slots.length; i++) {
            nodes = slots[i].assignedNodes({
              flatten: true
            });
            for (j = 0; j < nodes.length; j++) {
              if (nodes[j].nodeType === Node.ELEMENT_NODE) {
                result.add(nodes[j]);
              }
            }
          }
          // No need to search for <content>.
        }

        return result;
      }
    }
    document.$blockingElements = new BlockingElementsImpl();
  })();
  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  /**
   * This work is licensed under the W3C Software and Document License
   * (http://www.w3.org/Consortium/Legal/2015/copyright-software-and-document).
   */

  (function () {
    // Return early if we're not running inside of the browser.
    if (typeof window === 'undefined') {
      return;
    }

    // Convenience function for converting NodeLists.
    /** @type {typeof Array.prototype.slice} */
    var slice = Array.prototype.slice;

    /**
     * IE has a non-standard name for "matches".
     * @type {typeof Element.prototype.matches}
     */
    var matches = Element.prototype.matches || Element.prototype.msMatchesSelector;

    /** @type {string} */
    var _focusableElementsString = ['a[href]', 'area[href]', 'input:not([disabled])', 'select:not([disabled])', 'textarea:not([disabled])', 'button:not([disabled])', 'details', 'summary', 'iframe', 'object', 'embed', '[contenteditable]'].join(',');

    /**
     * `InertRoot` manages a single inert subtree, i.e. a DOM subtree whose root element has an `inert`
     * attribute.
     *
     * Its main functions are:
     *
     * - to create and maintain a set of managed `InertNode`s, including when mutations occur in the
     *   subtree. The `makeSubtreeUnfocusable()` method handles collecting `InertNode`s via registering
     *   each focusable node in the subtree with the singleton `InertManager` which manages all known
     *   focusable nodes within inert subtrees. `InertManager` ensures that a single `InertNode`
     *   instance exists for each focusable node which has at least one inert root as an ancestor.
     *
     * - to notify all managed `InertNode`s when this subtree stops being inert (i.e. when the `inert`
     *   attribute is removed from the root node). This is handled in the destructor, which calls the
     *   `deregister` method on `InertManager` for each managed inert node.
     */

    var InertRoot = function () {
      /**
       * @param {!HTMLElement} rootElement The HTMLElement at the root of the inert subtree.
       * @param {!InertManager} inertManager The global singleton InertManager object.
       */
      function InertRoot(rootElement, inertManager) {
        _classCallCheck(this, InertRoot);

        /** @type {!InertManager} */
        this._inertManager = inertManager;

        /** @type {!HTMLElement} */
        this._rootElement = rootElement;

        /**
         * @type {!Set<!InertNode>}
         * All managed focusable nodes in this InertRoot's subtree.
         */
        this._managedNodes = new Set();

        // Make the subtree hidden from assistive technology
        if (this._rootElement.hasAttribute('aria-hidden')) {
          /** @type {?string} */
          this._savedAriaHidden = this._rootElement.getAttribute('aria-hidden');
        } else {
          this._savedAriaHidden = null;
        }
        this._rootElement.setAttribute('aria-hidden', 'true');

        // Make all focusable elements in the subtree unfocusable and add them to _managedNodes
        this._makeSubtreeUnfocusable(this._rootElement);

        // Watch for:
        // - any additions in the subtree: make them unfocusable too
        // - any removals from the subtree: remove them from this inert root's managed nodes
        // - attribute changes: if `tabindex` is added, or removed from an intrinsically focusable
        //   element, make that node a managed node.
        this._observer = new MutationObserver(this._onMutation.bind(this));
        this._observer.observe(this._rootElement, {
          attributes: true,
          childList: true,
          subtree: true
        });
      }

      /**
       * Call this whenever this object is about to become obsolete.  This unwinds all of the state
       * stored in this object and updates the state of all of the managed nodes.
       */

      _createClass(InertRoot, [{
        key: 'destructor',
        value: function destructor() {
          this._observer.disconnect();
          if (this._rootElement) {
            if (this._savedAriaHidden !== null) {
              this._rootElement.setAttribute('aria-hidden', this._savedAriaHidden);
            } else {
              this._rootElement.removeAttribute('aria-hidden');
            }
          }
          this._managedNodes.forEach(function (inertNode) {
            this._unmanageNode(inertNode.node);
          }, this);

          // Note we cast the nulls to the ANY type here because:
          // 1) We want the class properties to be declared as non-null, or else we
          //    need even more casts throughout this code. All bets are off if an
          //    instance has been destroyed and a method is called.
          // 2) We don't want to cast "this", because we want type-aware optimizations
          //    to know which properties we're setting.
          this._observer = /** @type {?} */null;
          this._rootElement = /** @type {?} */null;
          this._managedNodes = /** @type {?} */null;
          this._inertManager = /** @type {?} */null;
        }

        /**
         * @return {!Set<!InertNode>} A copy of this InertRoot's managed nodes set.
         */
      }, {
        key: '_makeSubtreeUnfocusable',
        /**
         * @param {!Node} startNode
         */
        value: function _makeSubtreeUnfocusable(startNode) {
          var _this2 = this;
          composedTreeWalk(startNode, function (node) {
            return _this2._visitNode(node);
          });
          var activeElement = document.activeElement;
          if (!document.body.contains(startNode)) {
            // startNode may be in shadow DOM, so find its nearest shadowRoot to get the activeElement.
            var node = startNode;
            /** @type {!ShadowRoot|undefined} */
            var root = undefined;
            while (node) {
              if (node.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
                root = /** @type {!ShadowRoot} */node;
                break;
              }
              node = node.parentNode;
            }
            if (root) {
              activeElement = root.activeElement;
            }
          }
          if (startNode.contains(activeElement)) {
            activeElement.blur();
            // In IE11, if an element is already focused, and then set to tabindex=-1
            // calling blur() will not actually move the focus.
            // To work around this we call focus() on the body instead.
            if (activeElement === document.activeElement) {
              document.body.focus();
            }
          }
        }

        /**
         * @param {!Node} node
         */
      }, {
        key: '_visitNode',
        value: function _visitNode(node) {
          if (node.nodeType !== Node.ELEMENT_NODE) {
            return;
          }
          var element = /** @type {!HTMLElement} */node;

          // If a descendant inert root becomes un-inert, its descendants will still be inert because of
          // this inert root, so all of its managed nodes need to be adopted by this InertRoot.
          if (element !== this._rootElement && element.hasAttribute('inert')) {
            this._adoptInertRoot(element);
          }
          if (matches.call(element, _focusableElementsString) || element.hasAttribute('tabindex')) {
            this._manageNode(element);
          }
        }

        /**
         * Register the given node with this InertRoot and with InertManager.
         * @param {!Node} node
         */
      }, {
        key: '_manageNode',
        value: function _manageNode(node) {
          var inertNode = this._inertManager.register(node, this);
          this._managedNodes.add(inertNode);
        }

        /**
         * Unregister the given node with this InertRoot and with InertManager.
         * @param {!Node} node
         */
      }, {
        key: '_unmanageNode',
        value: function _unmanageNode(node) {
          var inertNode = this._inertManager.deregister(node, this);
          if (inertNode) {
            this._managedNodes['delete'](inertNode);
          }
        }

        /**
         * Unregister the entire subtree starting at `startNode`.
         * @param {!Node} startNode
         */
      }, {
        key: '_unmanageSubtree',
        value: function _unmanageSubtree(startNode) {
          var _this3 = this;
          composedTreeWalk(startNode, function (node) {
            return _this3._unmanageNode(node);
          });
        }

        /**
         * If a descendant node is found with an `inert` attribute, adopt its managed nodes.
         * @param {!HTMLElement} node
         */
      }, {
        key: '_adoptInertRoot',
        value: function _adoptInertRoot(node) {
          var inertSubroot = this._inertManager.getInertRoot(node);

          // During initialisation this inert root may not have been registered yet,
          // so register it now if need be.
          if (!inertSubroot) {
            this._inertManager.setInert(node, true);
            inertSubroot = this._inertManager.getInertRoot(node);
          }
          inertSubroot.managedNodes.forEach(function (savedInertNode) {
            this._manageNode(savedInertNode.node);
          }, this);
        }

        /**
         * Callback used when mutation observer detects subtree additions, removals, or attribute changes.
         * @param {!Array<!MutationRecord>} records
         * @param {!MutationObserver} self
         */
      }, {
        key: '_onMutation',
        value: function _onMutation(records, self) {
          records.forEach(function (record) {
            var target = /** @type {!HTMLElement} */record.target;
            if (record.type === 'childList') {
              // Manage added nodes
              slice.call(record.addedNodes).forEach(function (node) {
                this._makeSubtreeUnfocusable(node);
              }, this);

              // Un-manage removed nodes
              slice.call(record.removedNodes).forEach(function (node) {
                this._unmanageSubtree(node);
              }, this);
            } else if (record.type === 'attributes') {
              if (record.attributeName === 'tabindex') {
                // Re-initialise inert node if tabindex changes
                this._manageNode(target);
              } else if (target !== this._rootElement && record.attributeName === 'inert' && target.hasAttribute('inert')) {
                // If a new inert root is added, adopt its managed nodes and make sure it knows about the
                // already managed nodes from this inert subroot.
                this._adoptInertRoot(target);
                var inertSubroot = this._inertManager.getInertRoot(target);
                this._managedNodes.forEach(function (managedNode) {
                  if (target.contains(managedNode.node)) {
                    inertSubroot._manageNode(managedNode.node);
                  }
                });
              }
            }
          }, this);
        }
      }, {
        key: 'managedNodes',
        get: function get() {
          return new Set(this._managedNodes);
        }

        /** @return {boolean} */
      }, {
        key: 'hasSavedAriaHidden',
        get: function get() {
          return this._savedAriaHidden !== null;
        }

        /** @param {?string} ariaHidden */
      }, {
        key: 'savedAriaHidden',
        set: function set(ariaHidden) {
          this._savedAriaHidden = ariaHidden;
        }

        /** @return {?string} */,

        get: function get() {
          return this._savedAriaHidden;
        }
      }]);
      return InertRoot;
    }();

    /**
     * `InertNode` initialises and manages a single inert node.
     * A node is inert if it is a descendant of one or more inert root elements.
     *
     * On construction, `InertNode` saves the existing `tabindex` value for the node, if any, and
     * either removes the `tabindex` attribute or sets it to `-1`, depending on whether the element
     * is intrinsically focusable or not.
     *
     * `InertNode` maintains a set of `InertRoot`s which are descendants of this `InertNode`. When an
     * `InertRoot` is destroyed, and calls `InertManager.deregister()`, the `InertManager` notifies the
     * `InertNode` via `removeInertRoot()`, which in turn destroys the `InertNode` if no `InertRoot`s
     * remain in the set. On destruction, `InertNode` reinstates the stored `tabindex` if one exists,
     * or removes the `tabindex` attribute if the element is intrinsically focusable.
     */

    var InertNode = function () {
      /**
       * @param {!Node} node A focusable element to be made inert.
       * @param {!InertRoot} inertRoot The inert root element associated with this inert node.
       */
      function InertNode(node, inertRoot) {
        _classCallCheck(this, InertNode);

        /** @type {!Node} */
        this._node = node;

        /** @type {boolean} */
        this._overrodeFocusMethod = false;

        /**
         * @type {!Set<!InertRoot>} The set of descendant inert roots.
         *    If and only if this set becomes empty, this node is no longer inert.
         */
        this._inertRoots = new Set([inertRoot]);

        /** @type {?number} */
        this._savedTabIndex = null;

        /** @type {boolean} */
        this._destroyed = false;

        // Save any prior tabindex info and make this node untabbable
        this.ensureUntabbable();
      }

      /**
       * Call this whenever this object is about to become obsolete.
       * This makes the managed node focusable again and deletes all of the previously stored state.
       */

      _createClass(InertNode, [{
        key: 'destructor',
        value: function destructor() {
          this._throwIfDestroyed();
          if (this._node && this._node.nodeType === Node.ELEMENT_NODE) {
            var element = /** @type {!HTMLElement} */this._node;
            if (this._savedTabIndex !== null) {
              element.setAttribute('tabindex', this._savedTabIndex);
            } else {
              element.removeAttribute('tabindex');
            }

            // Use `delete` to restore native focus method.
            if (this._overrodeFocusMethod) {
              delete element.focus;
            }
          }

          // See note in InertRoot.destructor for why we cast these nulls to ANY.
          this._node = /** @type {?} */null;
          this._inertRoots = /** @type {?} */null;
          this._destroyed = true;
        }

        /**
         * @type {boolean} Whether this object is obsolete because the managed node is no longer inert.
         * If the object has been destroyed, any attempt to access it will cause an exception.
         */
      }, {
        key: '_throwIfDestroyed',
        /**
         * Throw if user tries to access destroyed InertNode.
         */
        value: function _throwIfDestroyed() {
          if (this.destroyed) {
            throw new Error('Trying to access destroyed InertNode');
          }
        }

        /** @return {boolean} */
      }, {
        key: 'ensureUntabbable',
        /** Save the existing tabindex value and make the node untabbable and unfocusable */
        value: function ensureUntabbable() {
          if (this.node.nodeType !== Node.ELEMENT_NODE) {
            return;
          }
          var element = /** @type {!HTMLElement} */this.node;
          if (matches.call(element, _focusableElementsString)) {
            if ( /** @type {!HTMLElement} */element.tabIndex === -1 && this.hasSavedTabIndex) {
              return;
            }
            if (element.hasAttribute('tabindex')) {
              this._savedTabIndex = /** @type {!HTMLElement} */element.tabIndex;
            }
            element.setAttribute('tabindex', '-1');
            if (element.nodeType === Node.ELEMENT_NODE) {
              element.focus = function () {};
              this._overrodeFocusMethod = true;
            }
          } else if (element.hasAttribute('tabindex')) {
            this._savedTabIndex = /** @type {!HTMLElement} */element.tabIndex;
            element.removeAttribute('tabindex');
          }
        }

        /**
         * Add another inert root to this inert node's set of managing inert roots.
         * @param {!InertRoot} inertRoot
         */
      }, {
        key: 'addInertRoot',
        value: function addInertRoot(inertRoot) {
          this._throwIfDestroyed();
          this._inertRoots.add(inertRoot);
        }

        /**
         * Remove the given inert root from this inert node's set of managing inert roots.
         * If the set of managing inert roots becomes empty, this node is no longer inert,
         * so the object should be destroyed.
         * @param {!InertRoot} inertRoot
         */
      }, {
        key: 'removeInertRoot',
        value: function removeInertRoot(inertRoot) {
          this._throwIfDestroyed();
          this._inertRoots['delete'](inertRoot);
          if (this._inertRoots.size === 0) {
            this.destructor();
          }
        }
      }, {
        key: 'destroyed',
        get: function get() {
          return (/** @type {!InertNode} */this._destroyed
          );
        }
      }, {
        key: 'hasSavedTabIndex',
        get: function get() {
          return this._savedTabIndex !== null;
        }

        /** @return {!Node} */
      }, {
        key: 'node',
        get: function get() {
          this._throwIfDestroyed();
          return this._node;
        }

        /** @param {?number} tabIndex */
      }, {
        key: 'savedTabIndex',
        set: function set(tabIndex) {
          this._throwIfDestroyed();
          this._savedTabIndex = tabIndex;
        }

        /** @return {?number} */,

        get: function get() {
          this._throwIfDestroyed();
          return this._savedTabIndex;
        }
      }]);
      return InertNode;
    }();

    /**
     * InertManager is a per-document singleton object which manages all inert roots and nodes.
     *
     * When an element becomes an inert root by having an `inert` attribute set and/or its `inert`
     * property set to `true`, the `setInert` method creates an `InertRoot` object for the element.
     * The `InertRoot` in turn registers itself as managing all of the element's focusable descendant
     * nodes via the `register()` method. The `InertManager` ensures that a single `InertNode` instance
     * is created for each such node, via the `_managedNodes` map.
     */

    var InertManager = function () {
      /**
       * @param {!Document} document
       */
      function InertManager(document) {
        _classCallCheck(this, InertManager);
        if (!document) {
          throw new Error('Missing required argument; InertManager needs to wrap a document.');
        }

        /** @type {!Document} */
        this._document = document;

        /**
         * All managed nodes known to this InertManager. In a map to allow looking up by Node.
         * @type {!Map<!Node, !InertNode>}
         */
        this._managedNodes = new Map();

        /**
         * All inert roots known to this InertManager. In a map to allow looking up by Node.
         * @type {!Map<!Node, !InertRoot>}
         */
        this._inertRoots = new Map();

        /**
         * Observer for mutations on `document.body`.
         * @type {!MutationObserver}
         */
        this._observer = new MutationObserver(this._watchForInert.bind(this));

        // Add inert style.
        addInertStyle(document.head || document.body || document.documentElement);

        // Wait for document to be loaded.
        if (document.readyState === 'loading') {
          document.addEventListener('DOMContentLoaded', this._onDocumentLoaded.bind(this));
        } else {
          this._onDocumentLoaded();
        }
      }

      /**
       * Set whether the given element should be an inert root or not.
       * @param {!HTMLElement} root
       * @param {boolean} inert
       */

      _createClass(InertManager, [{
        key: 'setInert',
        value: function setInert(root, inert) {
          if (inert) {
            if (this._inertRoots.has(root)) {
              // element is already inert
              return;
            }
            var inertRoot = new InertRoot(root, this);
            root.setAttribute('inert', '');
            this._inertRoots.set(root, inertRoot);
            // If not contained in the document, it must be in a shadowRoot.
            // Ensure inert styles are added there.
            if (!this._document.body.contains(root)) {
              var parent = root.parentNode;
              while (parent) {
                if (parent.nodeType === 11) {
                  addInertStyle(parent);
                }
                parent = parent.parentNode;
              }
            }
          } else {
            if (!this._inertRoots.has(root)) {
              // element is already non-inert
              return;
            }
            var _inertRoot = this._inertRoots.get(root);
            _inertRoot.destructor();
            this._inertRoots['delete'](root);
            root.removeAttribute('inert');
          }
        }

        /**
         * Get the InertRoot object corresponding to the given inert root element, if any.
         * @param {!Node} element
         * @return {!InertRoot|undefined}
         */
      }, {
        key: 'getInertRoot',
        value: function getInertRoot(element) {
          return this._inertRoots.get(element);
        }

        /**
         * Register the given InertRoot as managing the given node.
         * In the case where the node has a previously existing inert root, this inert root will
         * be added to its set of inert roots.
         * @param {!Node} node
         * @param {!InertRoot} inertRoot
         * @return {!InertNode} inertNode
         */
      }, {
        key: 'register',
        value: function register(node, inertRoot) {
          var inertNode = this._managedNodes.get(node);
          if (inertNode !== undefined) {
            // node was already in an inert subtree
            inertNode.addInertRoot(inertRoot);
          } else {
            inertNode = new InertNode(node, inertRoot);
          }
          this._managedNodes.set(node, inertNode);
          return inertNode;
        }

        /**
         * De-register the given InertRoot as managing the given inert node.
         * Removes the inert root from the InertNode's set of managing inert roots, and remove the inert
         * node from the InertManager's set of managed nodes if it is destroyed.
         * If the node is not currently managed, this is essentially a no-op.
         * @param {!Node} node
         * @param {!InertRoot} inertRoot
         * @return {?InertNode} The potentially destroyed InertNode associated with this node, if any.
         */
      }, {
        key: 'deregister',
        value: function deregister(node, inertRoot) {
          var inertNode = this._managedNodes.get(node);
          if (!inertNode) {
            return null;
          }
          inertNode.removeInertRoot(inertRoot);
          if (inertNode.destroyed) {
            this._managedNodes['delete'](node);
          }
          return inertNode;
        }

        /**
         * Callback used when document has finished loading.
         */
      }, {
        key: '_onDocumentLoaded',
        value: function _onDocumentLoaded() {
          // Find all inert roots in document and make them actually inert.
          var inertElements = slice.call(this._document.querySelectorAll('[inert]'));
          inertElements.forEach(function (inertElement) {
            this.setInert(inertElement, true);
          }, this);

          // Comment this out to use programmatic API only.
          this._observer.observe(this._document.body || this._document.documentElement, {
            attributes: true,
            subtree: true,
            childList: true
          });
        }

        /**
         * Callback used when mutation observer detects attribute changes.
         * @param {!Array<!MutationRecord>} records
         * @param {!MutationObserver} self
         */
      }, {
        key: '_watchForInert',
        value: function _watchForInert(records, self) {
          var _this = this;
          records.forEach(function (record) {
            switch (record.type) {
              case 'childList':
                slice.call(record.addedNodes).forEach(function (node) {
                  if (node.nodeType !== Node.ELEMENT_NODE) {
                    return;
                  }
                  var inertElements = slice.call(node.querySelectorAll('[inert]'));
                  if (matches.call(node, '[inert]')) {
                    inertElements.unshift(node);
                  }
                  inertElements.forEach(function (inertElement) {
                    this.setInert(inertElement, true);
                  }, _this);
                }, _this);
                break;
              case 'attributes':
                if (record.attributeName !== 'inert') {
                  return;
                }
                var target = /** @type {!HTMLElement} */record.target;
                var inert = target.hasAttribute('inert');
                _this.setInert(target, inert);
                break;
            }
          }, this);
        }
      }]);
      return InertManager;
    }();

    /**
     * Recursively walk the composed tree from |node|.
     * @param {!Node} node
     * @param {(function (!HTMLElement))=} callback Callback to be called for each element traversed,
     *     before descending into child nodes.
     * @param {?ShadowRoot=} shadowRootAncestor The nearest ShadowRoot ancestor, if any.
     */

    function composedTreeWalk(node, callback, shadowRootAncestor) {
      if (node.nodeType == Node.ELEMENT_NODE) {
        var element = /** @type {!HTMLElement} */node;
        if (callback) {
          callback(element);
        }

        // Descend into node:
        // If it has a ShadowRoot, ignore all child elements - these will be picked
        // up by the <content> or <shadow> elements. Descend straight into the
        // ShadowRoot.
        var shadowRoot = /** @type {!HTMLElement} */element.shadowRoot;
        if (shadowRoot) {
          composedTreeWalk(shadowRoot, callback);
          return;
        }

        // If it is a <content> element, descend into distributed elements - these
        // are elements from outside the shadow root which are rendered inside the
        // shadow DOM.
        if (element.localName == 'content') {
          var content = /** @type {!HTMLContentElement} */element;
          // Verifies if ShadowDom v0 is supported.
          var distributedNodes = content.getDistributedNodes ? content.getDistributedNodes() : [];
          for (var i = 0; i < distributedNodes.length; i++) {
            composedTreeWalk(distributedNodes[i], callback);
          }
          return;
        }

        // If it is a <slot> element, descend into assigned nodes - these
        // are elements from outside the shadow root which are rendered inside the
        // shadow DOM.
        if (element.localName == 'slot') {
          var slot = /** @type {!HTMLSlotElement} */element;
          // Verify if ShadowDom v1 is supported.
          var _distributedNodes = slot.assignedNodes ? slot.assignedNodes({
            flatten: true
          }) : [];
          for (var _i = 0; _i < _distributedNodes.length; _i++) {
            composedTreeWalk(_distributedNodes[_i], callback);
          }
          return;
        }
      }

      // If it is neither the parent of a ShadowRoot, a <content> element, a <slot>
      // element, nor a <shadow> element recurse normally.
      var child = node.firstChild;
      while (child != null) {
        composedTreeWalk(child, callback);
        child = child.nextSibling;
      }
    }

    /**
     * Adds a style element to the node containing the inert specific styles
     * @param {!Node} node
     */
    function addInertStyle(node) {
      if (node.querySelector('style#inert-style, link#inert-style')) {
        return;
      }
      var style = document.createElement('style');
      style.setAttribute('id', 'inert-style');
      style.textContent = '\n' + '[inert] {\n' + '  pointer-events: none;\n' + '  cursor: default;\n' + '}\n' + '\n' + '[inert], [inert] * {\n' + '  -webkit-user-select: none;\n' + '  -moz-user-select: none;\n' + '  -ms-user-select: none;\n' + '  user-select: none;\n' + '}\n';
      node.appendChild(style);
    }
    if (!HTMLElement.prototype.hasOwnProperty('inert')) {
      /** @type {!InertManager} */
      var inertManager = new InertManager(document);
      Object.defineProperty(HTMLElement.prototype, 'inert', {
        enumerable: true,
        /** @this {!HTMLElement} */
        get: function get() {
          return this.hasAttribute('inert');
        },
        /** @this {!HTMLElement} */
        set: function set(inert) {
          inertManager.setInert(this, inert);
        }
      });
    }
  })();
  function getDocument$2(element) {
    return element?.ownerDocument ?? document ?? window.document ?? globalThis.document;
  }
  function blockingElements() {
    return getDocument$2().$blockingElements;
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
  const useBlockingElement = monitored(function useBlockingElement({
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
    y(() => {
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

  /**
   * Allows you to move focus to an isolated area of the page, restore it when finished, and **optionally trap it there** so that you can't tab out of it.
   *
   * @remarks By default, this implements a focus trap using the Blocking Elements...uh...[proposal](https://github.com/whatwg/html/issues/897)?
   * Not that it really looks like it's going anywhere, but until something better comes along, [the polyfill](#https://github.com/PolymerLabs/blocking-elements) has been working pretty great.
   *
   * @compositeParams
   */
  const useFocusTrap = monitored(function useFocusTrap({
    focusTrapParameters: {
      onlyMoveFocus,
      trapActive,
      focusPopup: focusSelfUnstable,
      focusOpener: focusOpenerUnstable
    },
    activeElementParameters,
    refElementReturn
  }) {
    const focusSelf = useStableCallback(focusSelfUnstable);
    const focusOpener = useStableCallback(focusOpenerUnstable);
    p(() => {
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
        let currentFocus = document.activeElement;
        // Restore focus to whatever caused this trap to trigger,
        // but only if it wasn't caused by explicitly focusing something else 
        // (generally if `onlyMoveFocus` is true)
        let top = refElementReturn.getElement();
        if (currentFocus == document.body || currentFocus == null || top == currentFocus || top?.contains(currentFocus)) {
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
  /**
   * Returns the first focusable element contained within the given node, or null if none are found.
   */
  function findFirstFocusable(element) {
    return findFirstCondition(element, node => node instanceof Element && isFocusable(node));
  }
  function findFirstCondition(element, filter) {
    if (element && filter(element)) return element;
    console.assert(!!element);
    element ??= document.body;
    const treeWalker = document.createTreeWalker(element, NodeFilter.SHOW_ELEMENT, {
      acceptNode: node => filter(node) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
    });
    const firstFocusable = treeWalker.firstChild();
    return firstFocusable;
  }

  /**
   * Combines {@link useGridNavigation} and {@link useSelection}.
   *
   * @remarks The -selection behavior is optional, if you decide you need multi-selection instead within the same component.
   *
   * @hasChild {@link useGridNavigationSelectionRow}
   * @hasChild {@link useGridNavigationSelectionCell}
   *
   * @compositeParams
   */
  const useGridNavigationSelection = monitored(function useGridNavigationSelection({
    gridNavigationParameters,
    linearNavigationParameters,
    rovingTabIndexParameters,
    managedChildrenReturn,
    typeaheadNavigationParameters,
    singleSelectionParameters,
    multiSelectionParameters,
    refElementReturn,
    paginatedChildrenParameters,
    rearrangeableChildrenReturn,
    childrenHaveFocusReturn,
    ...void2
  }) {
    const {
      context: {
        gridNavigationRowContext,
        rovingTabIndexContext,
        typeaheadNavigationContext
      },
      linearNavigationReturn,
      managedChildrenParameters,
      props,
      rovingTabIndexReturn,
      typeaheadNavigationReturn
    } = useGridNavigation({
      gridNavigationParameters,
      linearNavigationParameters,
      managedChildrenReturn,
      rovingTabIndexParameters: {
        ...rovingTabIndexParameters,
        initiallyTabbedIndex: singleSelectionParameters.initiallySingleSelectedIndex || 0
      },
      typeaheadNavigationParameters,
      paginatedChildrenParameters,
      rearrangeableChildrenReturn,
      refElementReturn
    });
    const {
      childrenHaveFocusParameters,
      context: {
        singleSelectionContext,
        multiSelectionContext
      },
      multiSelectionReturn,
      propsStable,
      singleSelectionReturn,
      ...void1
    } = useSelection({
      managedChildrenReturn,
      rovingTabIndexReturn,
      singleSelectionParameters,
      multiSelectionParameters,
      childrenHaveFocusReturn
    });
    return {
      context: useMemoObject({
        gridNavigationRowContext,
        rovingTabIndexContext,
        singleSelectionContext,
        multiSelectionContext,
        typeaheadNavigationContext
      }),
      childrenHaveFocusParameters,
      linearNavigationReturn,
      managedChildrenParameters,
      props: useMergedProps(props, propsStable),
      rovingTabIndexReturn,
      singleSelectionReturn,
      multiSelectionReturn,
      typeaheadNavigationReturn
    };
  });
  /**
   * @compositeParams
   */
  const useGridNavigationSelectionRow = monitored(function useGridNavigationSelectionRow({
    info: mcp1,
    linearNavigationParameters,
    managedChildrenReturn,
    refElementReturn,
    rovingTabIndexParameters,
    textContentParameters,
    typeaheadNavigationParameters,
    context,
    singleSelectionChildParameters,
    multiSelectionChildParameters,
    ...void1
  }) {
    const {
      hasCurrentFocusParameters: {
        onCurrentFocusedInnerChanged: ocfic1,
        ...void6
      },
      info: {
        getSingleSelected,
        setLocalSingleSelected,
        singleSelected,
        getMultiSelected,
        setSelectedFromParent,
        getMultiSelectionDisabled,
        ...void8
      },
      props: propsSelection,
      singleSelectionChildReturn,
      multiSelectionChildReturn,
      pressParameters: {
        onPressSync,
        ...void4
      },
      ...void2
    } = useSelectionChild({
      info: mcp1,
      context,
      singleSelectionChildParameters,
      multiSelectionChildParameters
    });
    const {
      hasCurrentFocusParameters: {
        onCurrentFocusedInnerChanged: ocfic2,
        ...void7
      },
      info: {
        focusSelf,
        getLocallyTabbable,
        setLocallyTabbable,
        ...void9
      },
      props: propsGridNavigation,
      linearNavigationReturn,
      managedChildrenParameters,
      pressParameters: {
        excludeSpace,
        ...void5
      },
      rovingTabIndexChildReturn,
      rovingTabIndexReturn,
      textContentReturn,
      typeaheadNavigationReturn,
      context: contextGridNavigation,
      ...void3
    } = useGridNavigationRow({
      context,
      linearNavigationParameters,
      info: mcp1,
      managedChildrenReturn,
      refElementReturn,
      rovingTabIndexParameters,
      textContentParameters,
      typeaheadNavigationParameters
    });
    return {
      context: contextGridNavigation,
      linearNavigationReturn,
      info: {
        getLocallyTabbable,
        getSingleSelected,
        singleSelected,
        setLocallyTabbable,
        setLocalSingleSelected,
        focusSelf,
        getMultiSelected,
        setSelectedFromParent,
        getMultiSelectionDisabled
      },
      managedChildrenParameters,
      pressParameters: {
        onPressSync,
        excludeSpace
      },
      hasCurrentFocusParameters: {
        onCurrentFocusedInnerChanged: useStableCallback((hasFocus, hadFocus, reason) => {
          ocfic1?.(hasFocus, hadFocus, reason);
          ocfic2?.(hasFocus, hadFocus, reason);
        })
      },
      props: useMergedProps(propsGridNavigation, propsSelection),
      rovingTabIndexChildReturn,
      rovingTabIndexReturn,
      singleSelectionChildReturn,
      multiSelectionChildReturn,
      textContentReturn,
      typeaheadNavigationReturn
    };
  });
  /**
   * @compositeParams
   */
  const useGridNavigationSelectionCell = monitored(function useGridNavigationSelectionCell(p) {
    return useGridNavigationCell(p);
  });

  /**
   * Combines {@link useListNavigation} and {@link useSelection}.
   *
   * @remarks The -selection behavior is optional, if you decide you need multi-selection instead within the same component.
   *
   * @hasChild {@link useListNavigationSelectionChild}
   *
   * @compositeParams
   */
  const useListNavigationSelection = monitored(function useListNavigationSelection({
    linearNavigationParameters,
    rovingTabIndexParameters,
    typeaheadNavigationParameters,
    singleSelectionParameters,
    multiSelectionParameters,
    managedChildrenReturn,
    refElementReturn,
    paginatedChildrenParameters,
    rearrangeableChildrenReturn,
    childrenHaveFocusReturn,
    ...void3
  }) {
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
      rearrangeableChildrenReturn
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
  /**
   * @compositeParams
   */
  const useListNavigationSelectionChild = monitored(function useListNavigationSelectionChild({
    info: {
      index,
      untabbable,
      ...void2
    },
    context,
    refElementReturn,
    textContentParameters,
    singleSelectionChildParameters,
    multiSelectionChildParameters,
    ...void1
  }) {
    const {
      hasCurrentFocusParameters: {
        onCurrentFocusedInnerChanged: ocfic2,
        ...void3
      },
      info: infoSS,
      multiSelectionChildReturn,
      singleSelectionChildReturn,
      props: propsSS,
      pressParameters: {
        onPressSync
      },
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
      textContentReturn,
      props: propsLN,
      info: infoLN,
      ...void8
    } = useListNavigationChild({
      info: {
        index,
        untabbable
      },
      context,
      refElementReturn,
      textContentParameters
    });
    return {
      hasCurrentFocusParameters: {
        onCurrentFocusedInnerChanged: useStableCallback((focused, previouslyFocused, e) => {
          ocfic1?.(focused, previouslyFocused, e);
          ocfic2?.(focused, previouslyFocused, e);
        })
      },
      pressParameters: {
        onPressSync,
        excludeSpace
      },
      info: {
        ...infoSS,
        ...infoLN
      },
      rovingTabIndexChildReturn,
      multiSelectionChildReturn,
      singleSelectionChildReturn,
      textContentReturn,
      propsChild: propsSS,
      propsTabbable: propsLN
    };
  });

  /**
   * Allows a composite component (such as a radio group or listbox) to listen
   * for an "overall focusin/out" event; this hook lets you know when focus has
   * moved in/out of this grouping of children EVEN IF there is no actual parent DOM element.
   *
   * @remarks I.E. you can use this without needing a parent `<div>` to listen for a `focusout` event.
   *
   * @compositeParams
   *
   * @hasChild {@link useChildrenHaveFocusChild}
   */
  const useChildrenHaveFocus = monitored(function useChildrenHaveFocus(args) {
    const {
      childrenHaveFocusParameters: {
        onCompositeFocusChange
      }
    } = args;
    const [getAnyFocused, setAnyFocused] = usePassiveState(onCompositeFocusChange, returnFalse, runImmediately);
    const [_getFocusCount, setFocusCount] = usePassiveState(useStableCallback((anyFocused, anyPreviouslyFocused, e) => {
      console.assert(anyFocused >= 0 && anyFocused <= 1);
      setAnyFocused(!!(anyFocused && !anyPreviouslyFocused), e);
    }), returnZero, setTimeout); // setTimeout is used for the debounce to be somewhat generous with timing, and to guard against the default being runImmediately...
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
  /**
   * @compositeParams
   */
  const useChildrenHaveFocusChild = monitored(function useChildrenHaveFocusChild({
    context: {
      childrenHaveFocusChildContext: {
        setFocusCount
      }
    }
  }) {
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

  /**
   * Allows monitoring whether the rendered element is or is not focused directly (i.e. would satisfy `:focus`).
   *
   * @see {@link useHasLastFocus}, in which even if the `body` is clicked it's not considered a loss in focus.
   *
   * @compositeParams
   */
  const useHasCurrentFocus = monitored(function useHasCurrentFocus(args) {
    const {
      hasCurrentFocusParameters: {
        onCurrentFocusedChanged,
        onCurrentFocusedInnerChanged
      },
      refElementReturn: {
        getElement
      }
    } = args;
    const [getFocused, setFocused] = usePassiveState(onCurrentFocusedChanged, returnFalse, runImmediately);
    const [getFocusedInner, setFocusedInner] = usePassiveState(onCurrentFocusedInnerChanged, returnFalse, runImmediately);
    const onFocusIn = T$1(e => {
      setFocusedInner(true, e);
      setFocused(e.target == getElement(), e);
    }, []);
    const onFocusOut = T$1(e => {
      // Even if we're focusOut-ing to another inner element,
      // that'll be caught during onFocusIn,
      // so just set everything to false and let that revert things back to true if necessary.
      setFocusedInner(false, e);
      setFocused(false, e);
    }, []);
    p(() => {
      return () => {
        setFocused(false, undefined);
        setFocusedInner(false, undefined);
      };
    }, []);
    const propsStable = _({
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

  /**
   * Combines all the grid- (&amp; list-) related hooks into one giant hook that accomplishes everything.
   *
   * @compositeParams
   *
   * @hasChild {@link useCompleteGridNavigationRow}
   * @hasChild {@link useCompleteGridNavigationCell}
   */
  const useCompleteGridNavigation = monitored(function useCompleteGridNavigation({
    gridNavigationParameters,
    linearNavigationParameters,
    rovingTabIndexParameters,
    singleSelectionParameters,
    multiSelectionParameters,
    typeaheadNavigationParameters,
    paginatedChildrenParameters,
    refElementParameters,
    ...void1
  }) {
    const getChildren = T$1(() => managedChildrenReturn.getChildren(), []);
    const getLowestChildIndex = T$1(() => getChildren().getLowestIndex(), []);
    const getHighestChildIndex = T$1(() => getChildren().getHighestIndex(), []);
    const isValidForNavigation = T$1(i => {
      const child = getChildren().getAt(i);
      if (child == null) return false;
      if (child.untabbable) return false;
      return true;
    }, []);
    const {
      refElementReturn,
      propsStable,
      ...void2
    } = useRefElement({
      refElementParameters
    });
    // Grab the information from the array of children we may or may not render.
    // (see useProcessedChildren -- it send this information to us if it's used.)
    // These are all stable functions, except for `contextPreprocessing`, which is how it sends things to us.
    const {
      context: contextProcessing,
      indexDemangler,
      indexMangler,
      rearrange,
      reverse,
      shuffle,
      sort
    } = useCreateProcessedChildrenContext();
    const getAnyFocused = useStableCallback(() => childrenHaveFocusReturn.getAnyFocused());
    const {
      childrenHaveFocusParameters,
      managedChildrenParameters,
      context: {
        gridNavigationRowContext,
        rovingTabIndexContext,
        singleSelectionContext,
        multiSelectionContext,
        typeaheadNavigationContext
      },
      props,
      rovingTabIndexReturn,
      linearNavigationReturn,
      singleSelectionReturn,
      multiSelectionReturn,
      typeaheadNavigationReturn,
      ...void3
    } = useGridNavigationSelection({
      gridNavigationParameters,
      singleSelectionParameters,
      multiSelectionParameters,
      paginatedChildrenParameters,
      refElementReturn,
      linearNavigationParameters: {
        getLowestIndex: getLowestChildIndex,
        getHighestIndex: getHighestChildIndex,
        isValidForLinearNavigation: isValidForNavigation,
        ...linearNavigationParameters
      },
      managedChildrenReturn: {
        getChildren
      },
      rovingTabIndexParameters: {
        untabbableBehavior: "focus-parent",
        ...rovingTabIndexParameters
      },
      typeaheadNavigationParameters: {
        isValidForTypeaheadNavigation: isValidForNavigation,
        ...typeaheadNavigationParameters
      },
      childrenHaveFocusReturn: {
        getAnyFocused
      },
      rearrangeableChildrenReturn: {
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
    const {
      context: {
        managedChildContext
      },
      managedChildrenReturn
    } = useManagedChildren({
      managedChildrenParameters
    });
    const {
      getTabbableIndex,
      setTabbableIndex
    } = rovingTabIndexReturn;
    const processedChildrenContext = useMemoObject({
      getTabbableIndex,
      setTabbableIndex,
      getAnyFocused,
      getElement: refElementReturn.getElement
    });
    const c2 = useMemoObject({
      processedChildrenContext,
      ...contextProcessing
    });
    const context = useMemoObject({
      singleSelectionContext,
      multiSelectionContext,
      managedChildContext,
      rovingTabIndexContext,
      typeaheadNavigationContext,
      childrenHaveFocusChildContext,
      gridNavigationRowContext,
      contextProcessing: c2
    });
    return {
      contextChildren: context,
      contextProcessing: c2,
      props: useMergedProps(props, propsStable),
      refElementReturn,
      managedChildrenReturn,
      rovingTabIndexReturn,
      childrenHaveFocusReturn,
      linearNavigationReturn,
      singleSelectionReturn,
      multiSelectionReturn,
      typeaheadNavigationReturn,
      rearrangeableChildrenReturn: {
        rearrange,
        reverse,
        shuffle,
        sort
      }
    };
  });
  /**
   * Helper for `useCompleteGridNavigation` that handles the array of children in a way that allows for sorting, pagination, and staggering. Optional but recommended.
   *
   * @remarks Each child must also call `useProcessedChild`, and use its information to optimize
   */
  const useCompleteGridNavigationRows = monitored(function useCompleteGridNavigationRows({
    context,
    paginatedChildrenParameters,
    rearrangeableChildrenParameters,
    staggeredChildrenParameters,
    managedChildrenParameters
  }) {
    const {
      context: contextRPS,
      paginatedChildrenReturn,
      rearrangeableChildrenReturn,
      staggeredChildrenReturn
    } = useProcessedChildren({
      paginatedChildrenParameters,
      rearrangeableChildrenParameters,
      staggeredChildrenParameters,
      managedChildrenParameters,
      refElementReturn: context.processedChildrenContext,
      context
    });
    return {
      context: contextRPS,
      paginatedChildrenReturn,
      rearrangeableChildrenReturn,
      staggeredChildrenReturn
    };
  });
  /**
   * @compositeParams
   */
  const useCompleteGridNavigationRow = monitored(function useCompleteGridNavigationRow({
    info: {
      index,
      untabbable,
      ...customUserInfo
    },
    context: contextIncomingForRowAsChildOfTable,
    textContentParameters,
    linearNavigationParameters,
    rovingTabIndexParameters,
    typeaheadNavigationParameters,
    hasCurrentFocusParameters: {
      onCurrentFocusedChanged: ocfc1,
      onCurrentFocusedInnerChanged: ocfic3,
      ...void5
    },
    singleSelectionChildParameters,
    multiSelectionChildParameters,
    ...void1
  }) {
    // Create some helper functions
    const getChildren = T$1(() => managedChildrenReturn.getChildren(), []);
    const getHighestChildIndex = T$1(() => getChildren().getHighestIndex(), []);
    const getLowestChildIndex = T$1(() => getChildren().getLowestIndex(), []);
    const isValidForNavigation = T$1(i => {
      const child = getChildren().getAt(i);
      if (child == null) return false;
      if (child.untabbable) return false;
      return true;
    }, []);
    // Someone somewhere needs useRefElement, no shock there
    const {
      refElementReturn,
      propsStable,
      ...void6
    } = useRefElement({
      refElementParameters: {}
    });
    // Enormous bag of parameters for useGridNavigationRow
    const parameters = {
      rovingTabIndexParameters,
      typeaheadNavigationParameters: {
        isValidForTypeaheadNavigation: isValidForNavigation,
        ...typeaheadNavigationParameters
      },
      linearNavigationParameters: {
        isValidForLinearNavigation: isValidForNavigation,
        getHighestIndex: getHighestChildIndex,
        getLowestIndex: getLowestChildIndex,
        ...linearNavigationParameters
      },
      managedChildrenReturn: {
        getChildren
      },
      refElementReturn,
      context: contextIncomingForRowAsChildOfTable,
      info: {
        index,
        untabbable
      },
      textContentParameters,
      singleSelectionChildParameters,
      multiSelectionChildParameters
    };
    // Actually call useGridNavigationRow,
    // and get an enormous bag of return values
    const {
      linearNavigationReturn,
      managedChildrenParameters,
      pressParameters,
      rovingTabIndexChildReturn,
      rovingTabIndexReturn,
      singleSelectionChildReturn,
      multiSelectionChildReturn,
      textContentReturn,
      typeaheadNavigationReturn,
      context: contextGNR,
      info: infoRowReturn,
      props: p3,
      hasCurrentFocusParameters: {
        onCurrentFocusedInnerChanged: ocfic1,
        ...void3
      },
      ...void2
    } = useGridNavigationSelectionRow(parameters);
    // This is all the info the parent needs about us, the row
    // (NOT the info the cells provide to us, the row)
    const completeInfo = {
      getElement: refElementReturn.getElement,
      index,
      untabbable,
      ...infoRowReturn
    };
    // Call both `useManagedChildren` and `useManagedChild` with their appropriate parameters.
    const {
      context: contextMC,
      managedChildrenReturn
    } = useManagedChildren({
      managedChildrenParameters
    });
    const {
      managedChildReturn,
      ...void4
    } = useManagedChild({
      context: contextIncomingForRowAsChildOfTable,
      info: {
        ...completeInfo,
        ...customUserInfo
      }
    });
    const context = useMemoObject({
      ...contextGNR,
      ...contextMC
    });
    const {
      hasCurrentFocusReturn
    } = useHasCurrentFocus({
      refElementReturn,
      hasCurrentFocusParameters: {
        onCurrentFocusedChanged: ocfc1,
        onCurrentFocusedInnerChanged: useStableCallback((focused, prevFocused, reason) => {
          // Call grid navigation's focus change
          ocfic1?.(focused, prevFocused, reason);
          ocfic3?.(focused, prevFocused, reason);
        })
      }
    });
    const props = useMergedProps(propsStable, p3, hasCurrentFocusReturn.propsStable);
    return {
      pressParameters,
      hasCurrentFocusReturn,
      managedChildrenReturn,
      context,
      managedChildReturn,
      linearNavigationReturn,
      rovingTabIndexChildReturn,
      rovingTabIndexReturn,
      singleSelectionChildReturn,
      multiSelectionChildReturn,
      textContentReturn,
      typeaheadNavigationReturn,
      refElementReturn,
      props
    };
  });
  /**
   * @compositeParams
   */
  const useCompleteGridNavigationCell = monitored(function useCompleteGridNavigationCell({
    gridNavigationCellParameters,
    context,
    textContentParameters,
    info: {
      focusSelf,
      index,
      untabbable,
      ...customUserInfo
    },
    ...void1
  }) {
    const {
      refElementReturn,
      propsStable
    } = useRefElement({
      refElementParameters: {}
    });
    const {
      hasCurrentFocusParameters,
      rovingTabIndexChildReturn,
      textContentReturn,
      pressParameters: {
        excludeSpace: es1
      },
      props: propsRti,
      info: info2,
      ...void2
    } = useGridNavigationSelectionCell({
      gridNavigationCellParameters,
      info: {
        index,
        untabbable
      },
      context,
      refElementReturn,
      textContentParameters
    });
    const {
      hasCurrentFocusReturn
    } = useHasCurrentFocus({
      hasCurrentFocusParameters: {
        onCurrentFocusedChanged: null,
        ...hasCurrentFocusParameters
      },
      refElementReturn
    });
    const baseInfo = {
      getElement: refElementReturn.getElement,
      getLocallyTabbable: rovingTabIndexChildReturn.getTabbable,
      setLocallyTabbable: info2.setLocallyTabbable,
      focusSelf,
      index,
      untabbable
    };
    const {
      managedChildReturn
    } = useManagedChild({
      context,
      info: {
        ...baseInfo,
        ...customUserInfo
      }
    });
    const props = useMergedProps(propsStable, propsRti, hasCurrentFocusReturn.propsStable);
    return {
      props,
      refElementReturn,
      rovingTabIndexChildReturn,
      pressParameters: {
        excludeSpace: useStableCallback(() => es1?.() || false)
      },
      hasCurrentFocusReturn,
      managedChildReturn,
      textContentReturn
    };
  });
  function useCompleteGridNavigationDeclarative({
    singleSelectionDeclarativeParameters,
    singleSelectionParameters,
    ...normalGridNavParameters
  }) {
    const ret2 = useCompleteGridNavigation({
      singleSelectionParameters: {
        initiallySingleSelectedIndex: singleSelectionDeclarativeParameters.singleSelectedIndex,
        onSingleSelectedIndexChange: useStableCallback((...e) => onSingleSelectedIndexChange?.(...e)),
        ...singleSelectionParameters
      },
      ...normalGridNavParameters
    });
    const {
      singleSelectionParameters: {
        onSingleSelectedIndexChange
      }
    } = useSelectionDeclarative({
      singleSelectionDeclarativeParameters,
      singleSelectionReturn: ret2.singleSelectionReturn
    });
    return ret2;
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
  const useCompleteListNavigation = monitored(function useCompleteListNavigation({
    linearNavigationParameters,
    typeaheadNavigationParameters,
    rovingTabIndexParameters,
    singleSelectionParameters,
    multiSelectionParameters,
    paginatedChildrenParameters,
    //staggeredChildrenParameters,
    refElementParameters,
    ...void1
  }) {
    const getChildren = T$1(() => managedChildrenReturn.getChildren(), []);
    const getLowestIndex = T$1(() => getChildren().getLowestIndex(), []);
    const getHighestIndex = T$1(() => getChildren().getHighestIndex(), []);
    const isValidForNavigation = T$1(i => {
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
    // Grab the information from the array of children we may or may not render.
    // (see useProcessedChildren -- it send this information to us if it's used.)
    // These are all stable functions, except for `contextPreprocessing`, which is how it sends things to us.
    const {
      context: contextProcessing,
      indexDemangler,
      indexMangler,
      rearrange,
      reverse,
      shuffle,
      sort
    } = useCreateProcessedChildrenContext();
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
      rearrangeableChildrenReturn: {
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
    const contextChildren = useMemoObject({
      childrenHaveFocusChildContext,
      rovingTabIndexContext,
      singleSelectionContext,
      multiSelectionContext,
      typeaheadNavigationContext,
      managedChildContext: managedChildRTIContext
    });
    const processedChildrenContext = useMemoObject({
      getTabbableIndex,
      setTabbableIndex,
      getAnyFocused,
      getElement: refElementReturn.getElement
    });
    return {
      contextChildren,
      contextProcessing: useMemoObject({
        processedChildrenContext,
        ...contextProcessing
      }),
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
        reverse,
        shuffle,
        rearrange,
        sort
      }
    };
  });
  /**
   * Helper for `useCompleteListNavigation` that handles the array of children in a way that allows for sorting, pagination, and staggering. Optional but recommended.
   *
   * @remarks Each child must also call `useProcessedChild`, and use its information to optimize
   */
  const useCompleteListNavigationChildren = monitored(function useCompleteListNavigationChildren({
    context,
    paginatedChildrenParameters,
    rearrangeableChildrenParameters,
    staggeredChildrenParameters,
    managedChildrenParameters
  }) {
    const {
      context: contextRPS,
      paginatedChildrenReturn,
      rearrangeableChildrenReturn,
      staggeredChildrenReturn
    } = useProcessedChildren({
      paginatedChildrenParameters,
      rearrangeableChildrenParameters,
      staggeredChildrenParameters,
      managedChildrenParameters,
      refElementReturn: context.processedChildrenContext,
      context
    });
    return {
      context: contextRPS,
      paginatedChildrenReturn,
      rearrangeableChildrenReturn,
      staggeredChildrenReturn
    };
  });
  /**
   *
   * @compositeParams
   */
  const useCompleteListNavigationChild = monitored(function useCompleteListNavigationChild({
    info: {
      index,
      focusSelf,
      untabbable,
      ...customUserInfo
    },
    // The "...info" is empty if M is the same as UCLNCI<ChildElement>.
    textContentParameters,
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
      ...void5
    },
    ...void1
  }) {
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
        onPressSync,
        ...void2
      },
      textContentReturn,
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
      refElementReturn,
      textContentParameters
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
    const onCurrentFocusedInnerChanged = useStableCallback((focused, prev, e) => {
      ocfic1?.(focused, prev, e);
      ocfic2?.(focused, prev, e);
      ocfic3?.(focused, prev, e);
    });
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
        onPressSync,
        excludeSpace
      },
      textContentReturn,
      refElementReturn,
      singleSelectionChildReturn,
      multiSelectionChildReturn,
      hasCurrentFocusReturn,
      managedChildReturn,
      rovingTabIndexChildReturn
    };
  });
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
  function useCompleteListNavigationChildDeclarative({
    multiSelectionChildParameters,
    multiSelectionChildDeclarativeParameters: {
      multiSelected,
      onMultiSelectedChange
    },
    ...rest
  }) {
    const ret = useCompleteListNavigationChild({
      multiSelectionChildParameters: {
        initiallyMultiSelected: multiSelected,
        onMultiSelectChange: useStableCallback(e => {
          onMultiSelectChange(e);
        }),
        ...multiSelectionChildParameters
      },
      ...rest
    });
    const {
      multiSelectionChildParameters: {
        onMultiSelectChange
      },
      info,
      ...void2
    } = useSelectionChildDeclarative({
      multiSelectionChildDeclarativeParameters: {
        onMultiSelectedChange,
        multiSelected
      },
      multiSelectionChildReturn: ret.multiSelectionChildReturn
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

  /**
   * Combines dismissal hooks and focus trap hooks into one.
   * Use for dialogs, menus, etc.  Anything that can be dismissed and might trap focus, basically.
   *
   * @remarks Another in the "complete" series, alongside list/grid navigation and dismissal itself.
   *
   * TODO: The HTML &lt;dialog&gt; element is a thing now, and it can be modal or nonmodal, just like this hook. Hmm...
   *
   * @compositeParams
   */
  const useModal = monitored(function useModal({
    dismissParameters: {
      dismissActive,
      onDismiss,
      ...void2
    },
    escapeDismissParameters: {
      dismissEscapeActive,
      onDismissEscape,
      parentDepth,
      ...void3
    },
    focusTrapParameters: {
      trapActive,
      ...focusTrapParameters
    },
    activeElementParameters: {
      getDocument,
      onActiveElementChange,
      onLastActiveElementChange,
      onWindowFocusedChange,
      ...void4
    },
    backdropDismissParameters: {
      dismissBackdropActive,
      onDismissBackdrop,
      ...void5
    },
    lostFocusDismissParameters: {
      dismissLostFocusActive,
      onDismissLostFocus,
      ...void6
    },
    refElementParameters: {
      onElementChange,
      onMount,
      onUnmount,
      ...void7
    },
    modalParameters: {
      active: modalActive,
      ...void8
    },
    ...void1
  }) {
    const {
      refElementPopupReturn,
      refElementSourceReturn,
      propsStablePopup,
      propsStableSource
    } = useDismiss({
      dismissParameters: {
        dismissActive: dismissActive && modalActive,
        onDismiss
      },
      escapeDismissParameters: {
        dismissEscapeActive,
        onDismissEscape,
        parentDepth
      },
      activeElementParameters: {
        getDocument,
        onActiveElementChange,
        onLastActiveElementChange,
        onWindowFocusedChange
      },
      backdropDismissParameters: {
        dismissBackdropActive,
        onDismissBackdrop
      },
      lostFocusDismissParameters: {
        dismissLostFocusActive,
        onDismissLostFocus
      }
    });
    const {
      propsStable,
      refElementReturn
    } = useRefElement({
      refElementParameters: {
        onElementChange,
        onMount,
        onUnmount
      }
    });
    const {
      props
    } = useFocusTrap({
      focusTrapParameters: {
        trapActive: trapActive && modalActive,
        ...focusTrapParameters
      },
      activeElementParameters: {
        getDocument,
        onActiveElementChange,
        onLastActiveElementChange,
        onWindowFocusedChange
      },
      refElementReturn
    });
    return {
      propsFocusContainer: useMergedProps(propsStable, props),
      refElementPopupReturn,
      refElementSourceReturn,
      propsStablePopup,
      propsStableSource
    };
  });
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
   *
   */
  const useAsync = monitored(function useAsync(asyncHandler, options) {
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
    const incrementCallCount = T$1(() => {
      setRunCount(c => c + 1);
    }, []);
    const incrementResolveCount = T$1(() => {
      setResolveCount(c => c + 1);
    }, []);
    const incrementRejectCount = T$1(() => {
      setRejectCount(c => c + 1);
    }, []);
    const incrementFinallyCount = T$1(() => {
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
    } = F$1(() => {
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
    p(() => {
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
  const useAsyncHandler = monitored(function useAsyncHandler({
    asyncHandler,
    capture: originalCapture,
    ...restAsyncOptions
  }) {
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
  function pressLog(...args) {
    if (window.__log_press_events) console.log(...args);
  }
  function supportsPointerEvents() {
    return "onpointerup" in window;
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
  document.addEventListener("click", e => {
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
   *
   */
  const usePress = monitored(function usePress(args) {
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
    const onTouchMove = T$1(e => {
      pressLog("touchmove", e);
      e.preventDefault();
      e.stopPropagation();
      const element = getElement();
      const touch = e.touches[0];
      // Be as generous as possible with touch events by checking all four corners of the radius too
      const offsets = [[0, 0], [-touch.radiusX || 0, -touch.radiusY || 0], [+touch.radiusX || 0, -touch.radiusY || 0], [-touch.radiusX || 0, +touch.radiusY || 0], [+touch.radiusX || 0, +touch.radiusY || 0]];
      let hoveringAtAnyPoint = false;
      for (const [x, y] of offsets) {
        const elementAtTouch = document.elementFromPoint((touch?.clientX ?? 0) + x, (touch?.clientY ?? 0) + y);
        hoveringAtAnyPoint ||= element?.contains(elementAtTouch) ?? false;
      }
      setIsPressing(hoveringAtAnyPoint && getPointerDownStartedHere(), e);
      setHovering(hoveringAtAnyPoint);
    }, []);
    const preventClickEventsOnIosSafari = T$1(e => {
      e.preventDefault();
      e.stopPropagation();
    }, []);
    const onTouchEnd = T$1(e => {
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
        const elementAtPointer = document.elementFromPoint(e.clientX, e.clientY);
        const hovering = element == elementAtPointer || element?.contains(elementAtPointer) || false;
        setHovering(hovering);
        setIsPressing(hovering && getPointerDownStartedHere(), e);
      }
    });
    const onPointerUp = T$1(e => {
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
    const onPointerEnter = T$1(_e => {
      pressLog("pointerenter", _e);
      setHovering(true);
    }, []);
    const onPointerLeave = T$1(_e => {
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
  let pulse = "vibrate" in navigator && navigator.vibrate instanceof Function ? () => navigator.vibrate(10) : () => {};

  /**
   * Besides just generating something for the `id` prop, also gives you the props to use on another element if you'd like (e.g. a label's `for`).
   *
   * @compositeParams
   */
  const useRandomId = monitored(function useRandomId({
    randomIdParameters: {
      prefix,
      otherReferencerProp
    }
  }) {
    const id = prefix + V$1();
    const referencerElementProps = _(otherReferencerProp == null ? {} : {
      [otherReferencerProp]: id
    });
    const sourceElementProps = _({
      id
    });
    return {
      propsReferencer: referencerElementProps.current,
      propsSource: sourceElementProps.current,
      randomIdReturn: {
        id: id
      }
    };
  });

  /**
   * While `useRandomId` allows the referencer to use the source's ID, sometimes you also want the reverse too (e.g. I `aria-label` you, you `aria-controls` me. That sort of thing).
   *
   * @compositeParams
   */
  const useRandomDualIds = monitored(function useRandomDualIds({
    randomIdInputParameters,
    randomIdLabelParameters
  }) {
    const {
      randomIdReturn: randomIdInputReturn,
      propsReferencer: propsLabelAsReferencer,
      propsSource: propsInputAsSource
    } = useRandomId({
      randomIdParameters: randomIdInputParameters
    });
    const {
      randomIdReturn: randomIdLabelReturn,
      propsReferencer: propsInputAsReferencer,
      propsSource: propsLabelAsSource
    } = useRandomId({
      randomIdParameters: randomIdLabelParameters
    });
    return {
      propsLabel: useMergedProps(propsLabelAsReferencer, propsLabelAsSource),
      propsInput: useMergedProps(propsInputAsReferencer, propsInputAsSource),
      randomIdInputReturn,
      randomIdLabelReturn
    };
  });

  /**
   * Allows an element to start a drag operation.
   *
   * @remarks
   * {@include } {@link UseDraggableParameters}
   * {@include } {@link UseDraggableReturnType}
   */
  const useDraggable = monitored(function useDraggable({
    effectAllowed,
    data,
    dragImage,
    dragImageXOffset,
    dragImageYOffset
  }) {
    const [dragging, setDragging, getDragging] = useState(false);
    const [lastDropEffect, setLastDropEffect, getLastDropEffect] = useState(null);
    const onDragStart = e => {
      //e.preventDefault();
      setDragging(true);
      if (e.dataTransfer) {
        e.dataTransfer.effectAllowed = effectAllowed ?? "all";
        if (dragImage) e.dataTransfer.setDragImage(dragImage, dragImageXOffset ?? 0, dragImageYOffset ?? 0);
        const entries = Object.entries(data);
        for (const [mimeType, data] of entries) {
          e.dataTransfer.setData(mimeType, data);
        }
      }
    };
    const onDragEnd = e => {
      e.preventDefault();
      setDragging(false);
      if (e.dataTransfer) {
        if (e.dataTransfer.dropEffect != "none") {
          setLastDropEffect(e.dataTransfer.dropEffect);
        } else {
          setLastDropEffect(null);
        }
      }
    };
    // Return both the element and the hook that modifies 
    // the props and allows us to actually find the element
    const ret = {
      propsUnstable: {
        draggable: true,
        onDragStart,
        onDragEnd
      },
      dragging,
      getDragging,
      lastDropEffect,
      getLastDropEffect
    };
    return ret;
  });
  class DroppableFileError extends Error {
    fileName;
    errorType;
    constructor(fileName, base) {
      super(base?.message ?? "An unspecified error occurred reading the file.");
      this.fileName = fileName;
      this.errorType = base?.name;
    }
  }
  /**
   * Allows an element to start a drag operation.
   *
   * @remarks
   * {@include } {@link UseDroppableParameters}
   * {@include } {@link UseDroppableReturnType}
   */
  const useDroppable = monitored(function useDroppable({
    effect
  }) {
    const [filesForConsideration, setFilesForConsideration] = useState(null);
    const [stringsForConsideration, setStringsForConsideration] = useState(null);
    const [droppedFiles, setDroppedFiles] = useState(null);
    const [droppedStrings, setDroppedStrings] = useState(null);
    const [dropError, setDropError] = useState(undefined);
    // All the promises generated from the drop events.
    // Used to process multiple drop events in succession
    const dropPromisesRef = _([]);
    const [currentPromiseIndex, setCurrentPromiseIndex, getCurrentPromiseIndex] = useState(-1);
    const [promiseCount, setPromiseCount, getPromiseCount] = useState(0);
    // Any time we add a new promise, if there's no current promise running, we need to start one.
    // If there is one, then we don't need to do anything, since it runs the same check.
    p(() => {
      const currentPromiseIndex = getCurrentPromiseIndex();
      const promiseCount = getPromiseCount();
      if (promiseCount > 0) {
        if (currentPromiseIndex + 1 < promiseCount) {
          setCurrentPromiseIndex(i => ++i);
        }
      }
    }, [promiseCount]);
    // Anytime our current promise changes,
    // wait for it to finish, then set our state to its result.
    // Finally, check to see if there are anymore promises.
    // If there are, then increase currentPromiseCount,
    // which will trigger this again.
    //
    // This shouldn't happen *often*, but maybe in the case of
    // individually dropping a bunch of large files or something.
    p(() => {
      if (currentPromiseIndex >= 0) {
        const currentPromise = dropPromisesRef.current[currentPromiseIndex];
        currentPromise.then(info => {
          if (info !== null) {
            const {
              files,
              strings
            } = info;
            setDroppedFiles(files);
            setDroppedStrings(strings);
          }
          // Now that we're done, are there more promises in the queue?
          const currentPromiseIndex = getCurrentPromiseIndex();
          const promiseCount = getPromiseCount();
          if (currentPromiseIndex + 1 < promiseCount) {
            // Since this promise has started, more have been added.
            // Run this effect again.
            setCurrentPromiseIndex(i => ++i);
          }
        });
      }
    }, [currentPromiseIndex]);
    // Handle collecting the current file metadata or MIME types.
    const onDragEnter = useStableCallback(e => {
      e.preventDefault();
      if (e.dataTransfer) {
        // Is there a default? I can't find one anywhere.
        e.dataTransfer.dropEffect = effect ?? "move";
        const newMimeTypes = new Set();
        const newFiles = new Array();
        for (const item of e.dataTransfer?.items ?? []) {
          const {
            kind,
            type
          } = item;
          if (kind === "string") {
            newMimeTypes.add(type);
          } else if (kind === "file") {
            newFiles.push({
              type: item.type
            });
          }
        }
        setFilesForConsideration(newFiles);
        setStringsForConsideration(newMimeTypes);
      }
    });
    // Handle resetting the current file metadata or MIME types
    const onDragLeave = useStableCallback(e => {
      e.preventDefault();
      setFilesForConsideration(null);
      setStringsForConsideration(null);
    });
    // Boilerplate, I guess
    const onDragOver = useStableCallback(e => {
      e.preventDefault();
    });
    // Handle getting the drop data asynchronously
    const onDrop = useStableCallback(e => {
      e.preventDefault();
      setFilesForConsideration(null);
      setStringsForConsideration(null);
      const allPromises = new Array();
      const dropData = {};
      const dropFile = [];
      for (const item of e.dataTransfer?.items ?? []) {
        const {
          kind,
          type
        } = item;
        if (kind === "string") {
          allPromises.push(new Promise((resolve, _reject) => item.getAsString(resolve)).then(str => dropData[type] = str));
        } else if (kind === "file") {
          const file = item.getAsFile();
          if (file) {
            allPromises.push(new Promise((resolve, reject) => {
              const reader = new FileReader();
              reader.onload = _ => {
                resolve();
                const data = reader.result;
                dropFile.push({
                  data,
                  name: file.name,
                  type: file.type,
                  size: data.byteLength,
                  lastModified: file.lastModified
                });
              };
              reader.onerror = _ => {
                reject(new DroppableFileError(file.name, reader.error));
              };
              reader.onabort = _ => {
                reject(new DroppableFileError(file.name, reader.error));
              };
              reader.readAsArrayBuffer(file);
            }));
            dropFile.push();
          }
        }
      }
      dropPromisesRef.current.push(Promise.all(allPromises).then(() => {
        setPromiseCount(i => ++i);
        setDropError(null);
        return {
          strings: dropData,
          files: dropFile
        };
      }).catch(ex => {
        /* eslint-disable no-debugger */
        debugger;
        setPromiseCount(i => ++i);
        setDropError(ex);
        return null;
      }));
    });
    const propsStable = _({
      onDragEnter,
      onDragLeave,
      onDragOver,
      onDrop
    });
    return {
      propsStable: propsStable.current,
      filesForConsideration,
      stringsForConsideration,
      droppedFiles,
      droppedStrings,
      dropError
    };
  });
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
  x(k(ImperativeElementU));
  /**
   * Allows controlling an element's `class`, `style`, etc. with functions like `setStyle` in addition to being reactive to incoming props.
   *
   * @remarks If the component is re-rendered after the element is modified in some way, those changes are remembered and included in the returned `props` that are meant to be spread to the element in question.
   *
   * This is extremely useful for integrating with 3rd party libraries that expect to be able to directly manipulate the DOM because it keeps everything syncced together.
   *
   * @compositeParams
   */
  const useImperativeProps = monitored(function useImperativeProps({
    refElementReturn: {
      getElement
    }
  }) {
    const currentImperativeProps = _({
      className: new Set(),
      style: {},
      children: null,
      html: null,
      others: {}
    });
    const hasClass = T$1(cls => {
      return currentImperativeProps.current.className.has(cls);
    }, []);
    const setClass = T$1((cls, enabled) => {
      if (hasClass(cls) == !enabled) {
        getElement()?.classList[enabled ? "add" : "remove"](cls);
        currentImperativeProps.current.className[enabled ? "add" : "delete"](cls);
      }
    }, []);
    const setStyle = T$1((prop, value) => {
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
    const setChildren = T$1(children => {
      let e = getElement();
      if (e && currentImperativeProps.current.children != children) {
        currentImperativeProps.current.children = children;
        currentImperativeProps.current.html = null;
        e.textContent = children;
      }
    }, []);
    const dangerouslySetInnerHTML = T$1(children => {
      let e = getElement();
      if (e && currentImperativeProps.current.html != children) {
        currentImperativeProps.current.children = null;
        currentImperativeProps.current.html = children;
        e.innerHTML = children;
      }
    }, []);
    const dangerouslyAppendHTML = T$1(children => {
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
    const getAttribute = T$1(prop => {
      return currentImperativeProps.current.others[prop];
    }, []);
    const setAttribute = T$1((prop, value) => {
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
    const setEventHandler = T$1((type, handler, options) => {
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
      imperativePropsReturn: _({
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
    A(handle, () => imperativeHandle);
    return y$1(Tag, useMergedProps(propsStable, imperativeProps, props, {
      ref
    }));
  }
  const Table = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_-";
  function base64(value) {
    return Table[value];
  }
  function random6Bits() {
    return Math.floor(Math.random() * 0b1000000);
  }
  function random64Bits() {
    return [random6Bits(), random6Bits(), random6Bits(), random6Bits(), random6Bits(), random6Bits(), random6Bits(), random6Bits(), random6Bits(), random6Bits(), random6Bits()];
  }
  /**
   * Returns a randomly-generated ID with an optional prefix.
   * Note that if the prefix is *explicitly* set to "", then
   * IDs that are not valid under HTML4 may be generated. Oh no.
   *
   *
   * (This is here, in this particular file, to avoid circular dependencies
   * because useBeforeLayoutEffect also needs random IDs for its own reasons)
   */
  function generateRandomId(prefix) {
    return `${prefix ?? "id-"}${random64Bits().map(n => base64(n)).join("")}`;
  }

  /**
   * Very basic hook for a root-level component to use to allow any children within the whole app to push children to a portal somewhere.
   *
   * @remarks Returns the portal (as `children`, and functions to add, remove, or update a child to the portaled area)
   *
   * TODO: Can't push a child until after the very first `useLayoutEffect`
   *
   * {@include } {@link UsePortalChildrenParameters}
   */
  const usePortalChildren = monitored(function usePortalChildren({
    target
  }) {
    const [pushChild, setPushChild] = useState(null);
    const [updateChild, setUpdateChild] = useState(null);
    const [removeChild, setRemoveChild] = useState(null);
    const pushChildStable = useStableCallback(child => {
      return pushChild?.(child) ?? -1;
    });
    const updateChildStable = useStableCallback((index, child) => {
      return updateChild?.(index, child);
    });
    const removeChildStable = useStableCallback(index => {
      return removeChild?.(index);
    });
    const element = F$1(() => {
      return target == null ? null : typeof target == "string" ? document.getElementById(target) : target;
    }, [target]);
    const children = !element ? null : z(y$1(PortalChildren, {
      setPushChild,
      setUpdateChild,
      setRemoveChild
    }), element);
    return {
      children: children,
      pushChild: pushChildStable,
      updateChild: updateChildStable,
      removeChild: removeChildStable,
      portalElement: element
    };
  });
  /**
   * Implementation
   */
  function PortalChildren({
    setPushChild,
    setUpdateChild,
    setRemoveChild
  }) {
    const [children, setChildren, getChildren] = useState([]);
    const pushChild = T$1(child => {
      const randomKey = generateRandomId();
      let index = getChildren().length;
      setChildren(prev => [...prev, F$2(child, {
        key: randomKey,
        index
      })]);
      return index;
    }, []);
    const updateChild = T$1((index, child) => {
      const key = getChildren()[index]?.key;
      console.assert(!!key);
      if (key) {
        setChildren(prev => {
          let newChildren = prev.slice();
          newChildren.splice(index, 1, F$2(child, {
            key: key,
            index
          }));
          return newChildren;
        });
        return index;
      }
    }, []);
    const removeChild = T$1(index => {
      const key = getChildren()[index]?.key;
      console.assert(!!key);
      if (key) {
        setChildren(prev => {
          let newChildren = prev.slice();
          newChildren.splice(index, 1);
          return newChildren;
        });
        return index;
      }
    }, []);
    y(() => {
      setPushChild(_ => pushChild);
    }, [pushChild]);
    y(() => {
      setUpdateChild(_ => updateChild);
    }, [updateChild]);
    y(() => {
      setRemoveChild(_ => removeChild);
    }, [removeChild]);
    return y$1(k$2, {}, children);
  }

  /**
   * Allows monitoring whichever element is/was focused most recently, regardless of if it's *currently* focused.
   *
   * @see {@link useHasCurrentFocus}, where clicking the `body` is considered losing focus.
   *
   * @compositeParams
   */
  const useHasLastFocus = monitored(function useHasLastFocus(args) {
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
    const [getLastFocused, setLastFocused] = usePassiveState(onLastFocusedChanged, returnFalse, runImmediately);
    const [getLastFocusedInner, setLastFocusedInner] = usePassiveState(onLastFocusedInnerChanged, returnFalse, runImmediately);
    const {
      activeElementReturn
    } = useActiveElement({
      activeElementParameters: {
        onLastActiveElementChange: T$1((lastActiveElement, prevLastActiveElement, e) => {
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
    p(() => {
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
  G(null);

  /**
   * Runs a function every time the specified number of milliseconds elapses while the component is mounted.
   *
   * @remarks
   * {@include } {@link UseIntervalParameters}
   */
  const useInterval = monitored(function useInterval({
    interval,
    callback
  }) {
    // Get a wrapper around the given callback that's stable
    const stableCallback = useStableCallback(callback);
    const getInterval = useStableGetter(interval);
    p(() => {
      const interval = getInterval();
      let lastDelayUsed = interval;
      if (interval == null) return;
      // Get a wrapper around the wrapper around the callback
      // that clears and resets the interval if it changes.
      const adjustableCallback = () => {
        stableCallback();
        const currentInterval = getInterval();
        if (currentInterval != lastDelayUsed) {
          clearInterval(handle);
          if (currentInterval != null) handle = setInterval(adjustableCallback, lastDelayUsed = currentInterval);
        }
      };
      let handle = setInterval(adjustableCallback, interval);
      return () => clearInterval(handle);
    }, []);
  });
  const RandomWords$1 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.".split(" ");
  //const GridRowContext = createContext<UseGridNavigationRow<HTMLTableRowElement, HTMLTableCellElement, {}, {}, string, string>>(null!);
  //const GridCellContext = createContext<UseGridNavigationCell<HTMLTableCellElement, {}, string>>(null!);
  const SortableColumnContext = G(null);
  const SetSortableColumnContext = G(null);
  const GetSortableColumnContext = G(null);
  const ListChildrenContext = G(null);
  const ListChildContext$1 = G(null);
  const DemoUseGrid = x(() => {
    const [tabbableColumn, setTabbableColumn, _getTabbableColumn] = useState(null);
    const [selectedRow, setSelectedRow, _getSelectedRow] = useState(null);
    const [tabbableRow, setTabbableRow] = useState(null);
    const [sortableColumn, setSortableColumn, getSortableColumn] = useState(null);
    // Entirely complete, fully spelt-out version:
    const allReturnInfo = useCompleteGridNavigationDeclarative({
      // `useRovingTabIndex` is a separate hook that you could call with these same parameters:
      rovingTabIndexParameters: {
        // If true, the entire grid is removed from the tab order
        untabbable: false,
        // A function provided by you that is only called when no children are tabbable
        focusSelfParent: focus,
        // This can be used to track when the user navigates between rows for any reason
        onTabbableIndexChange: setTabbableRow
      },
      // `useSingleSelection` is a separate hook that you could call with these parameters:
      typeaheadNavigationParameters: {
        // Determines how children are searched for (`Intl.Collator`)
        collator: null,
        // Whether typeahead behavior is disabled
        noTypeahead: false,
        // How long a period of no input is required before typeahead clears itself
        typeaheadTimeout: 1000,
        // This can be used to track when the user navigates between rows via typeahead
        onNavigateTypeahead: null
      },
      // (etc. etc.)
      linearNavigationParameters: {
        // Is navigating to the first/last row with Home/End disabled?
        disableHomeEndKeys: false,
        // What happens when you press Up on the first row?
        navigatePastStart: "wrap",
        // What happens when you press Down on the last row?
        navigatePastEnd: "wrap",
        // How far do Page Up/Down jump?
        pageNavigationSize: 0.1,
        // This can be used to track when the user navigates between rows with the arrow keys
        onNavigateLinear: null
      },
      singleSelectionParameters: {
        // When a child is selected, it is indicated with this ARIA attribute:
        singleSelectionAriaPropName: "aria-checked",
        // Are children selected when they are activated (e.g. clicked), or focused (e.g. tabbed to)?
        singleSelectionMode: "focus"
      },
      multiSelectionParameters: {
        // Single- and multi- selection are not exclusive, and when so should be indicated via different attributes.
        multiSelectionAriaPropName: "aria-selected",
        // singleSelectionMode but for multi-selection
        multiSelectionMode: "activation",
        // Callback when any child changes with information about % of children checked, etc.
        onSelectionChange: null
      },
      singleSelectionDeclarativeParameters: {
        // Which child is currently selected?
        singleSelectedIndex: selectedRow,
        // What happens when the user selects a child?
        onSingleSelectedIndexChange: e => setSelectedRow(e[EventDetail].selectedIndex)
      },
      gridNavigationParameters: {
        // This can be used by you to track which 0-indexed column is currently the one with focus.
        onTabbableColumnChange: setTabbableColumn,
        // Which column is tabbable (initially upon mount before the user interacts with it)
        initiallyTabbableColumn: 0
      },
      // paginatedChildrenParameters: {
      // This must return a VNode's 0-based index from its props
      //     getIndex: useCallback<GetIndex>((a: VNode) => a.props.index, [])
      //    },
      //sortableChildrenParameters: {
      // Controls how rows compare against each other
      //    compare: useCallback((rhs: CustomGridInfo, lhs: CustomGridInfo) => { return lhs.index - rhs.index }, [])
      //},
      paginatedChildrenParameters: {
        // Controls the current pagination range
        paginationMin: null,
        paginationMax: null
      },
      // staggeredChildrenParameters: {
      // Controls whether children appear staggered as CPU time permits
      //      staggered: false
      //  },
      refElementParameters: {}
    });
    // Those were the parameters, these are the return types:
    const {
      // Spread these props to the HTMLElement that will implement this grid behavior
      props,
      // The child row will useContext this, so provide it to them.
      contextChildren,
      // Optionally, if you paginate or stagger your children, each child can `useContext` this as well.
      contextProcessing,
      // This is what `useRovingTabIndex` returned; use it for whatever you need:
      rovingTabIndexReturn: {
        // Call to focus the grid, which focuses the current row, which focuses its current cell.
        focusSelf,
        // Returns the index of the row that is tabbable to
        getTabbableIndex,
        // Changes which row is currently tabbable
        setTabbableIndex
      },
      // This is what `useTypeaheadNavigation` returned; use it for whatever you need:
      typeaheadNavigationReturn: {
        // Returns the current value the user has typed for typeahead (cannot be used during render)
        getCurrentTypeahead,
        // Whether the user's typeahead is invalid/valid/nonexistent.
        typeaheadStatus
      },
      // (etc. etc.)
      singleSelectionReturn: {
        // Largely convenience only (since the caller likely already knows the selected index, but just in case)
        getSingleSelectedIndex
      },
      multiSelectionReturn: {},
      refElementReturn: {},
      rearrangeableChildrenReturn: {
        // You must call this hook on your array of children to implement the sorting behavior
        //     useRearrangedChildren,
        // Largely internal use only
        //    indexDemangler,
        // Largely internal use only
        //    indexMangler,
        // Largely internal use only, but if you implement a custom sorting algorithm, call this to finalize the rearrangement. 
        rearrange,
        // Reverses all children 
        reverse,
        // Shuffles all children
        shuffle,
        // A table header button would probably call this function to sort all the table rows.
        sort
      },
      linearNavigationReturn: {},
      managedChildrenReturn: {
        // Returns metadata about each row
        getChildren
      },
      //paginatedChildrenReturn: {
      // Largely internal use only
      //    refreshPagination
      //},
      //staggeredChildrenReturn: {
      // When the staggering behavior is currently hiding one or more children, this is true.
      //     stillStaggering
      // },
      childrenHaveFocusReturn: {
        // Returns true if any row in this grid is focused
        getAnyFocused
      }
    } = allReturnInfo;
    return o$1("div", {
      class: "demo",
      children: [o$1("h2", {
        children: "useGridNavigationComplete"
      }), o$1("p", {
        children: ["Like ", o$1("code", {
          children: "useCompleteListNavigation"
        }), " but for 2D navigation. Cells can span multiple columns. Rows can be filtered, sorted, and arbitrarily re-arranged."]
      }), o$1("div", {
        children: ["Current row: ", tabbableRow]
      }), o$1("div", {
        children: ["Current column: ", tabbableColumn?.actual, tabbableColumn?.ideal != tabbableColumn?.actual ? ` (wanted: ${tabbableColumn?.ideal})` : ""]
      }), o$1("table", {
        ...{
          border: "2"
        },
        style: {
          whiteSpace: "nowrap"
        },
        children: [o$1("thead", {
          children: o$1("tr", {
            children: [o$1("th", {
              children: "Row is tabbable?"
            }), o$1("th", {
              children: "Column 1"
            }), o$1("th", {
              children: "Column 2"
            }), o$1("th", {
              children: "Column 3"
            })]
          })
        }), o$1(SortableColumnContext.Provider, {
          value: sortableColumn,
          children: o$1(GetSortableColumnContext.Provider, {
            value: getSortableColumn,
            children: o$1(SetSortableColumnContext.Provider, {
              value: setSortableColumn,
              children: o$1(GridRowContext.Provider, {
                value: contextChildren,
                children: o$1(ListChildrenContext.Provider, {
                  value: contextProcessing,
                  children: o$1("tbody", {
                    ...props,
                    children: o$1(DemoUseRovingTabIndexChildren$1, {
                      count: 100,
                      min: null,
                      max: null,
                      staggered: true
                    })
                  })
                })
              })
            })
          })
        })]
      })]
    });
  });
  const DemoUseRovingTabIndexChildren$1 = x(monitored(function DemoUseRovingTabIndexChildren({
    count,
    max,
    min,
    staggered
  }) {
    const {
      context,
      paginatedChildrenReturn,
      rearrangeableChildrenReturn,
      staggeredChildrenReturn
    } = useCompleteGridNavigationRows({
      paginatedChildrenParameters: {
        paginationMax: max,
        paginationMin: min
      },
      rearrangeableChildrenParameters: {
        getIndex: T$1(a => a.props.index, []),
        onRearranged: null,
        compare: null,
        adjust: null,
        children: F$1(() => Array.from(function* () {
          for (let i = 0; i < count; ++i) {
            yield o$1(DemoUseGridRowOuter, {
              index: i
            }, i);
          }
        }()), [count])
      },
      managedChildrenParameters: {},
      staggeredChildrenParameters: {
        staggered
      },
      context: q$1(ListChildrenContext)
    });
    return o$1(ListChildContext$1.Provider, {
      value: context,
      children: rearrangeableChildrenReturn.children
    });
  }));
  //type GridRowContext<ParentElement extends Element, RowElement extends Element> = CompleteGridNavigationContext<ParentElement, RowElement>;
  //type GridCellContext<RowElement extends Element, CellElement extends Element> = CompleteGridNavigationRowContext<RowElement, CellElement>;
  const GridRowContext = G(null);
  const GridCellContext = G(null);
  const DemoUseGridRowOuter = x(monitored(function DemoUseRovingTabIndexChildOuter({
    index
  }) {
    const {
      managedChildContext,
      paginatedChildContext,
      staggeredChildContext
    } = q$1(ListChildContext$1);
    const {
      props,
      managedChildReturn,
      refElementParameters,
      paginatedChildReturn,
      staggeredChildReturn
    } = useProcessedChild({
      context: {
        managedChildContext,
        paginatedChildContext,
        staggeredChildContext
      },
      info: {
        index
      }
    });
    const {
      childUseEffect
    } = staggeredChildReturn;
    if (paginatedChildReturn.hideBecausePaginated || staggeredChildReturn.hideBecauseStaggered) {
      return o$1("tr", {
        ...props,
        children: o$1("td", {
          colSpan: 99,
          children: "\u00A0"
        })
      });
    } else {
      return o$1(DemoUseGridRow, {
        index: index,
        childUseEffect: childUseEffect,
        ...props
      });
    }
  }));
  const DemoUseGridRow = x(({
    index,
    childUseEffect,
    ...props2
  }) => {
    useState(() => RandomWords$1[index /*Math.floor(Math.random() * (RandomWords.length - 1))*/]);
    p(childUseEffect, [childUseEffect]);
    const [_tabbableColumn, setTabbableColumn, _getTabbableColumn] = useState(null);
    //const getHighestIndex = useCallback(() => getChildren().getHighestIndex(), []);
    //const getChildren = useCallback(() => { return getChildren2() }, []);
    const hidden = index === 3;
    q$1(GetSortableColumnContext);
    const contextFromParent = q$1(GridRowContext);
    const ret = useCompleteGridNavigationRow({
      context: contextFromParent,
      info: {
        index,
        foo: "bar",
        untabbable: hidden
      },
      textContentParameters: {
        getText: T$1(e => {
          return e?.textContent ?? "";
        }, [])
      },
      linearNavigationParameters: {
        navigatePastEnd: "wrap",
        navigatePastStart: "wrap"
      },
      rovingTabIndexParameters: {
        onTabbableIndexChange: useStableCallback(i => {
          setTabbableColumn(i);
        }),
        untabbable: false,
        initiallyTabbedIndex: 0
      },
      typeaheadNavigationParameters: {
        collator: null,
        noTypeahead: false,
        typeaheadTimeout: 1000,
        onNavigateTypeahead: null
      },
      hasCurrentFocusParameters: {
        onCurrentFocusedChanged: null,
        onCurrentFocusedInnerChanged: null
      },
      //gridNavigationSelectionSortableRowParameters: { getSortableColumnIndex },
      singleSelectionChildParameters: {
        singleSelectionDisabled: false
      },
      multiSelectionChildParameters: {
        initiallyMultiSelected: false,
        onMultiSelectChange: null,
        multiSelectionDisabled: false
      }
    });
    const {
      props,
      context: contextToChild,
      rovingTabIndexChildReturn: {
        tabbable
      }
    } = ret;
    return o$1("tr", {
      ...useMergedProps(props, props2),
      "data-tabbable": ret.rovingTabIndexChildReturn.tabbable,
      children: o$1(GridCellContext.Provider, {
        value: contextToChild,
        children: [o$1("td", {
          children: [_tabbableColumn, ", ", tabbable.toString()]
        }), Array.from(function* () {
          for (let i = 0; i < 3; ++i) {
            yield o$1(DemoUseGridCell, {
              index: i,
              row: index,
              rowIsTabbable: tabbable
            }, i);
          }
        }())]
      })
    });
  });
  const DemoUseGridCell = ({
    index,
    row,
    rowIsTabbable
  }) => {
    if (row >= 6 && row % 2 == 0 && index > 1) return null;
    let hiddenText = row === 3 ? " (row hidden)" : "";
    const context = q$1(GridCellContext);
    const {
      props,
      rovingTabIndexChildReturn: {
        tabbable
      }
    } = useCompleteGridNavigationCell({
      gridNavigationCellParameters: {
        colSpan: 1
      },
      info: {
        index,
        bar: "baz",
        focusSelf: useStableCallback(e => e.focus()),
        untabbable: false
      },
      context,
      textContentParameters: {
        getText: T$1(e => {
          return e?.textContent ?? "";
        }, [])
      }
    });
    const t = tabbable ? "(Tabbable)" : "(Not tabbable)";
    if (index === 0) return o$1("td", {
      ...props,
      children: rowIsTabbable.toString()
    });else {
      if (row < 6 || row % 2 != 0) {
        if (index === 1) return o$1("td", {
          ...props,
          children: ["Grid cell #", index + 1, " ", t, hiddenText]
        });else return o$1("td", {
          children: o$1("label", {
            children: [o$1("button", {
              ...props,
              type: "button",
              children: "Select row"
            }), " ", t, hiddenText]
          })
        });
      } else {
        if (index === 1) return o$1("td", {
          ...props,
          colSpan: 2,
          children: ["Grid cell #", index + 1, ", span 2 ", t, hiddenText]
        });else return null;
      }
    }
  };
  function getDocument$1() {
    return globalThis.document;
  }
  function DemoUseModal(props) {
    const parentDepth = props.parentDepth ?? 0;
    const depth = parentDepth + 1;
    const buttonRef = _(null);
    const [closeOnBackdrop, setCloseOnBackdrop] = h(true);
    const [closeOnEscape, setCloseOnEscape] = h(true);
    const [closeOnLostFocus, setCloseOnLostFocus] = h(true);
    const [focusTrapActive, setFocusTrapActive] = h(true);
    const [hasChild, setHasChild] = h(false);
    const [closeReason, setCloseReason] = h(null);
    const [open, setOpen] = h(false);
    const focusOpener = () => buttonRef.current?.focus();
    const {
      propsStablePopup,
      propsStableSource,
      propsFocusContainer
    } = useModal({
      focusTrapParameters: {
        trapActive: focusTrapActive,
        onlyMoveFocus: false,
        focusOpener,
        focusPopup: useStableCallback((e, f) => f()?.focus())
      },
      dismissParameters: {
        onDismiss: useStableCallback((event, reason) => {
          setCloseReason(reason);
          setOpen(false);
        }),
        dismissActive: true
      },
      escapeDismissParameters: {
        parentDepth,
        dismissEscapeActive: true,
        onDismissEscape: null
      },
      backdropDismissParameters: {
        dismissBackdropActive: true,
        onDismissBackdrop: null
      },
      lostFocusDismissParameters: {
        dismissLostFocusActive: true,
        onDismissLostFocus: null
      },
      modalParameters: {
        active: open
      },
      refElementParameters: {},
      activeElementParameters: {
        getDocument: getDocument$1,
        onActiveElementChange: null,
        onLastActiveElementChange: null,
        onWindowFocusedChange: null
      }
    });
    return o$1("div", {
      style: {
        border: `${depth}px solid black`
      },
      children: [o$1("div", {
        children: "useModal demo:"
      }), o$1("div", {
        style: "display: flex; flex-direction: column",
        children: [o$1("label", {
          children: [o$1("input", {
            type: "checkbox",
            disabled: true,
            checked: true
          }), " Close by setting open to false"]
        }), o$1("label", {
          children: [o$1("input", {
            type: "checkbox",
            checked: closeOnBackdrop,
            onInput: e => setCloseOnBackdrop(e.currentTarget.checked)
          }), " Close on backdrop click"]
        }), o$1("label", {
          children: [o$1("input", {
            type: "checkbox",
            checked: closeOnEscape,
            onInput: e => setCloseOnEscape(e.currentTarget.checked)
          }), " Close on Escape key press"]
        }), o$1("label", {
          children: [o$1("input", {
            type: "checkbox",
            checked: closeOnLostFocus,
            onInput: e => setCloseOnLostFocus(e.currentTarget.checked)
          }), " Close on focus lost"]
        }), o$1("label", {
          children: [o$1("input", {
            type: "checkbox",
            checked: focusTrapActive,
            onInput: e => setFocusTrapActive(e.currentTarget.checked)
          }), " Trap focus"]
        }), o$1("br", {})]
      }), o$1("div", {
        children: ["Last reason for closing: ", closeReason ?? "(hasn't been closed yet)"]
      }), o$1("button", {
        ...propsStableSource,
        onClick: () => setOpen(true),
        children: "Open Modal"
      }), o$1("div", {
        ...useMergedProps(propsFocusContainer, propsStablePopup),
        style: `border: ${depth}px dotted red; background: #ccc`,
        children: o$1("div", {
          style: {
            display: open ? "flex" : "none",
            flexDirection: "column"
          },
          children: [o$1("div", {
            children: ["Modal element at depth ", depth, " with ", hasChild ? "a" : "no", " child"]
          }), o$1("label", {
            children: [o$1("input", {
              type: "checkbox",
              checked: hasChild,
              onInput: e => setHasChild(e.currentTarget.checked),
              ref: buttonRef
            }), " Add a child modal"]
          }), hasChild && o$1(DemoUseModal, {
            parentDepth: depth
          }), o$1("button", {
            ...propsStableSource,
            onClick: () => setOpen(false),
            children: "Close modal programmatically"
          })]
        })
      })]
    });
  }
  const RandomWords = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.".split(" ");
  const SingleSelectionModeContext = G("focus");
  const MultiSelectionModeContext = G("activation");
  const UntabbableContext = G(false);
  const ListNavigationSingleSelectionChildContext = G(null);
  const ListChildContext = G(null);
  const WeirdContext = G(null);
  const DemoUseRovingTabIndex = x(monitored(function DemoUseRovingTabIndex() {
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
      }
    });
    const {
      props,
      contextChildren,
      contextProcessing,
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
        shuffle,
        reverse,
        sort: _sort
      }
    } = r;
    const [staggering, setStaggering] = useState(false);
    return o$1("div", {
      className: "demo",
      children: [o$1("h2", {
        children: "Keyboard & List Navigation"
      }), o$1("h3", {
        children: o$1("code", {
          children: "useCompleteListNavigation"
        })
      }), o$1("p", {
        children: "This hook accomplishes a few things:"
      }), o$1("ul", {
        children: [o$1("li", {
          children: ["Turns a group of widgets into one singular composite widget with only ", o$1("strong", {
            children: "a single tab stop"
          }), " shared between them (a \"roving\" tab stop, because it wanders back and forth)."]
        }), o$1("li", {
          children: ["Navigation within this composite widget is done via:", o$1("ul", {
            children: [o$1("li", {
              children: "Arrow keys (up/down or left/right depending in the orientation you specify)"
            }), o$1("li", {
              children: "Page Up/Down to jump by a larger amount (either a fixed number or some percentage of the total number of items, as you specify)"
            }), o$1("li", {
              children: "Home/End to jump to the first or last item"
            })]
          })]
        }), o$1("li", {
          children: "Items can be marked as \"hidden\", in which case they are skipped over when navigating, no matter the method. E.G. if Home is pressed but the first item is hidden, the second item is focused instead."
        }), o$1("li", {
          children: "Items can be marked as \"disabled\" to prevent selection (with or without also marking them as \"hidden\", though \"hidden\" implies \"disabled\")."
        }), o$1("li", {
          children: "Children can be reordered arbitrarily, including sorting, shuffling, etc. while ensuring coherent navigation regardless."
        }), o$1("li", {
          children: ["The parent's selected index is ", o$1("strong", {
            children: "uncontrolled"
          }), " and so it does not re-render itself when the selected index changes (you can easily make it controlled, of course, at the cost of 1 additional render. See ", o$1("code", {
            children: "useSingleSelectionDeclarative"
          }), " for a shortcut to do exactly that)"]
        }), o$1("li", {
          children: "Changing which child is focused or selected only re-renders a maximum of 2 children each time."
        }), o$1("li", {
          children: ["Lists can be nested, and there is no strict requirement on DOM structure (except for sorting/rearranging children, if you use that).", o$1("ul", {
            children: o$1("li", {
              children: ["If you don't need sorting/rearranging this DOM requirement is ", o$1("strong", {
                children: "optional"
              }), "; rearranging requires all children be in one contiguous array of VNodes so that their ", o$1("code", {
                children: "key"
              }), " props can be manipulated."]
            })
          })]
        })]
      }), o$1("p", {
        children: "The biggest restriction of this method is that every child needs a 0-based numeric index."
      }), o$1("label", {
        children: ["# of items", o$1("input", {
          type: "number",
          value: count,
          min: 0,
          onInput: e => {
            e.preventDefault();
            setCount(e.currentTarget.valueAsNumber);
          }
        })]
      }), o$1("button", {
        onClick: () => shuffle(),
        children: "Shuffle"
      }), o$1("button", {
        onClick: () => {
          debugger;
          reverse();
        },
        children: "Reverse"
      }), o$1("label", {
        children: ["Imperatively set the tabbable index to: ", o$1("input", {
          type: "number",
          onInput: e => {
            e.preventDefault();
            setTabbableIndex(e.currentTarget.valueAsNumber, e, false);
          }
        })]
      }), o$1("label", {
        children: ["Imperatively set the selected index to: ", o$1("input", {
          type: "number",
          onInput: e => {
            e.preventDefault();
            setSingleSelectedIndex(e.currentTarget.valueAsNumber);
          }
        }), " (currently ", singleSelectedIndex, ")"]
      }), o$1("label", {
        children: ["Pagination window starts at: ", o$1("input", {
          type: "number",
          value: min ?? undefined,
          min: 0,
          max: max ?? undefined,
          onInput: e => {
            e.preventDefault();
            setMin(e.currentTarget.valueAsNumber);
          }
        })]
      }), o$1("label", {
        children: ["Pagination window ends at: ", o$1("input", {
          type: "number",
          value: max ?? undefined,
          min: min ?? undefined,
          max: count,
          onInput: e => {
            e.preventDefault();
            setMax(e.currentTarget.valueAsNumber);
          }
        })]
      }), o$1("label", {
        children: ["Stagger delay: ", o$1("input", {
          type: "checkbox",
          checked: staggered,
          onInput: e => {
            e.preventDefault();
            setStaggered(e.currentTarget.checked);
          }
        })]
      }), o$1("label", {
        children: ["Single-Selection mode:", o$1("label", {
          children: [o$1("input", {
            name: "rti-demo-single-selection-mode",
            type: "radio",
            checked: singleSelectionMode == 'disabled',
            onInput: e => {
              e.preventDefault();
              setSingleSelectionMode("disabled");
            }
          }), " Off"]
        }), o$1("label", {
          children: [o$1("input", {
            name: "rti-demo-single-selection-mode",
            type: "radio",
            checked: singleSelectionMode == 'focus',
            onInput: e => {
              e.preventDefault();
              setSingleSelectionMode("focus");
            }
          }), " On focus"]
        }), o$1("label", {
          children: [o$1("input", {
            name: "rti-demo-single-selection-mode",
            type: "radio",
            checked: singleSelectionMode == 'activation',
            onInput: e => {
              e.preventDefault();
              setSingleSelectionMode("activation");
            }
          }), " On activation (click, tap, Enter, Space, etc.)"]
        })]
      }), o$1("label", {
        children: ["Multi-Selection mode:", o$1("label", {
          children: [o$1("input", {
            name: "rti-demo-multi-selection-mode",
            type: "radio",
            checked: multiSelectionMode == 'disabled',
            onInput: e => {
              e.preventDefault();
              setMultiSelectionMode("disabled");
            }
          }), " Off"]
        }), o$1("label", {
          children: [o$1("input", {
            name: "rti-demo-multi-selection-mode",
            type: "radio",
            checked: multiSelectionMode == 'focus',
            onInput: e => {
              e.preventDefault();
              setMultiSelectionMode("focus");
            }
          }), " On focus"]
        }), o$1("label", {
          children: [o$1("input", {
            name: "rti-demo-multi-selection-mode",
            type: "radio",
            checked: multiSelectionMode == 'activation',
            onInput: e => {
              e.preventDefault();
              setMultiSelectionMode("activation");
            }
          }), " On activation (click, tap, Enter, Space, etc.)"]
        })]
      }), o$1("div", {
        children: ["Staggering status: ", staggered ? staggering ? "Staggering..." : "Done staggering" : "Not staggered"]
      }), o$1("div", {
        children: ["Typeahead status: ", typeaheadStatus]
      }), o$1("div", {
        children: ["Multi-select: ", Math.round(multiSelectPercent * 100 * 10) / 10, "%"]
      }), o$1(UntabbableContext.Provider, {
        value: untabbable,
        children: o$1(SingleSelectionModeContext.Provider, {
          value: singleSelectionMode,
          children: o$1(MultiSelectionModeContext.Provider, {
            value: multiSelectionMode,
            children: o$1(ListNavigationSingleSelectionChildContext.Provider, {
              value: contextChildren,
              children: o$1(WeirdContext.Provider, {
                value: contextProcessing,
                children: o$1("ol", {
                  start: 0,
                  ...props,
                  children: o$1(DemoUseRovingTabIndexChildren, {
                    max: max,
                    min: min,
                    staggered: staggered,
                    count: count,
                    setStaggering: setStaggering
                  })
                })
              })
            })
          })
        })
      })]
    });
  }));
  const DemoUseRovingTabIndexChildren = x(monitored(function DemoUseRovingTabIndexChildren({
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
        getIndex: T$1(a => a.props.index, []),
        onRearranged: null,
        compare: null,
        adjust: null,
        children: F$1(() => Array.from(function* () {
          for (let i = 0; i < count; ++i) {
            yield o$1(DemoUseRovingTabIndexChildOuter, {
              index: i
            }, i);
          }
        }()), [count])
      },
      managedChildrenParameters: {},
      staggeredChildrenParameters: {
        staggered
      },
      context: q$1(WeirdContext)
    });
    p(() => {
      setStaggering(staggeredChildrenReturn.stillStaggering);
    }, [staggeredChildrenReturn.stillStaggering]);
    return o$1(ListChildContext.Provider, {
      value: context,
      children: rearrangeableChildrenReturn.children
    });
  }));
  const DemoUseRovingTabIndexChildOuter = x(monitored(function DemoUseRovingTabIndexChildOuter({
    index
  }) {
    const {
      propsStable,
      refElementReturn: {
        getElement
      }
    } = useRefElement({
      refElementParameters: {
        onElementChange: useStableCallback((e, p, r) => {
          onElementChange?.(e, p, r);
        })
      }
    });
    const {
      managedChildContext,
      paginatedChildContext,
      staggeredChildContext
    } = q$1(ListChildContext);
    const {
      props,
      managedChildReturn,
      paginatedChildReturn,
      staggeredChildReturn,
      refElementParameters: {
        onElementChange
      }
    } = useProcessedChild({
      context: {
        managedChildContext,
        paginatedChildContext,
        staggeredChildContext
      },
      info: {
        index
      }
    });
    const c = F$1(() => o$1(DemoUseRovingTabIndexChild, {
      index: index
    }), [index]);
    return o$1("li", {
      ...useMergedProps(props, propsStable),
      children: paginatedChildReturn.hideBecausePaginated || staggeredChildReturn.hideBecauseStaggered ? "\xA0" : c
    });
  }));
  const DemoUseRovingTabIndexChild = x(monitored(function DemoUseRovingTabIndexChild({
    index
  }) {
    if (index == 1) return o$1("span", {
      children: ["(Item ", index, " is a ", o$1("strong", {
        children: "hole in the array"
      }), " and does not exist)"]
    });
    let disabled = index == 6;
    let hidden = index == 7;
    if (index == 8) {
      disabled = hidden = true;
    }
    const [multiSelected, setMultiSelected] = useState(false);
    const [randomWord] = useState(() => RandomWords[index]);
    const context = q$1(ListNavigationSingleSelectionChildContext);
    const focusSelf = T$1(e => {
      e.focus();
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
        onPressSync,
        excludeSpace
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
        getText: T$1(e => {
          return e?.textContent ?? "";
        }, [])
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
        onPressSync,
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
    const text = `${randomWord} This is item #${index} (offset: ${singleSelected}) ${hidden ? " (hidden)" : ""}${disabled ? " (disabled)" : ""}${s} (${tabbable ? "Tabbable" : "Not tabbable"})`;
    return o$1("span", {
      ...useMergedProps(propsChild, propsTabbable, p2),
      children: [text, o$1("input", {
        ...useMergedProps(propsTabbable, {
          type: "number"
        }),
        style: {
          width: "5ch"
        }
      })]
    });
  }));
  const DemoUseTimeout = () => {
    const [timeout, setTimeout] = h(1000);
    const [triggerIndex, setTriggerIndex] = h("");
    const [fireCount, setFireCount] = h(0);
    useTimeout({
      timeout,
      triggerIndex,
      callback: () => setFireCount(i => ++i)
    });
    return o$1("div", {
      class: "demo",
      children: [o$1("h2", {
        children: "useTimeout"
      }), o$1("p", {
        children: [o$1("code", {
          children: "useEffect"
        }), " but on a timer"]
      }), o$1("label", {
        children: ["Timeout duration: ", o$1("input", {
          type: "number",
          value: timeout,
          onInput: e => setTimeout(e.currentTarget.valueAsNumber)
        })]
      }), o$1("label", {
        children: ["Refresh key: ", o$1("input", {
          type: "text",
          value: triggerIndex,
          onInput: e => setTriggerIndex(e.currentTarget.value)
        })]
      }), o$1("div", {
        children: ["The callback has been called ", fireCount, " time", fireCount === 1 ? "" : "s", "."]
      })]
    });
  };
  window._generate_setState_stacks = false;
  const DemoUseDroppable = () => {
    const {
      droppedFiles,
      droppedStrings,
      filesForConsideration,
      stringsForConsideration,
      propsStable: props,
      dropError
    } = useDroppable({
      effect: "copy"
    });
    useMergedProps({}, {
      ref: _(null)
    });
    const p = useMergedProps(props, {
      className: "demo droppable"
    });
    return o$1("div", {
      ...p,
      children: [droppedStrings != null && o$1("div", {
        children: ["Data dropped: ", o$1("ul", {
          children: Object.entries(droppedStrings).map(([type, value]) => o$1("li", {
            children: [type, ": ", value]
          }))
        })]
      }), droppedFiles != null && o$1("div", {
        children: ["Files dropped: ", o$1("table", {
          children: [o$1("thead", {
            children: o$1("tr", {
              children: [o$1("th", {
                children: "Name"
              }), o$1("th", {
                children: "Size"
              }), o$1("th", {
                children: "Type"
              }), o$1("th", {
                children: "Last modified"
              })]
            })
          }), o$1("tbody", {
            children: droppedFiles.map(f => o$1("tr", {
              children: [o$1("td", {
                children: f.name
              }), f.data.byteLength, o$1("td", {
                children: f.type
              }), o$1("td", {
                children: new Date(f.lastModified ?? 0)
              })]
            }))
          })]
        })]
      }), o$1("hr", {}), stringsForConsideration != null && o$1("div", {
        children: ["Data being considered: ", o$1("ul", {
          children: Array.from(stringsForConsideration).map(type => o$1("li", {
            children: type
          }))
        })]
      }), filesForConsideration != null && o$1("div", {
        children: ["Files being considered: ", o$1("ul", {
          children: filesForConsideration.map(f => o$1("li", {
            children: JSON.stringify(f)
          }))
        })]
      }), o$1("hr", {}), dropError ? o$1("div", {
        children: dropError instanceof Error ? dropError.message : JSON.stringify(dropError)
      }) : null]
    });
  };
  const DemoUseDraggable = () => {
    const {
      propsUnstable: props
    } = useDraggable({
      data: {
        "text/plain": "This is custom draggable content of type text/plain."
      },
      dragImage: null,
      dragImageXOffset: null,
      dragImageYOffset: null,
      effectAllowed: null
    });
    return o$1("div", {
      ...useMergedProps(props, {
        className: "demo"
      }),
      children: "Draggable content"
    });
  };
  const ChildrenHaveFocusContext = G(null);
  const DemoUseChildrenHaveFocus = () => {
    const [animate, setAnimate] = useState(false);
    const [maxChildCount, setMaxChildCount] = useState(10);
    const [minChildCount, setMinChildCount] = useState(5);
    const [currentChildCount, setCurrentChildCount] = useState(minChildCount);
    useInterval({
      callback: () => {
        if (animate) {
          if (currentChildCount == minChildCount) setCurrentChildCount(maxChildCount);else setCurrentChildCount(currentChildCount - 1);
          //let newChildCount = Math.round(Math.random() * (maxChildCount - minChildCount)) + minChildCount
          //setCurrentChildCount(newChildCount);
        }
      },

      interval: 1000
    });
    const [anyFocused, setAnyFocused] = useState(false);
    const {
      context
    } = useChildrenHaveFocus({
      childrenHaveFocusParameters: {
        onCompositeFocusChange: setAnyFocused
      }
    });
    return o$1("div", {
      ...useMergedProps({}, {
        className: "demo"
      }),
      children: [o$1("h2", {
        children: "useChildrenHaveFocus"
      }), o$1("p", {
        children: ["If you want to see if any of your children have focus, the easiest way is to just attach a ", o$1("code", {
          children: "focusIn"
        }), " handler to the parent DOM node. But what if you don't have just one single parent DOM node? This hook lets you coordinate all the children to give you that information as if you were able to take that easy parent node route."]
      }), o$1("div", {
        children: o$1("label", {
          children: [o$1("input", {
            type: "number",
            min: 0,
            value: minChildCount,
            onInput: e => {
              e.preventDefault();
              setMinChildCount(e.currentTarget.valueAsNumber);
            }
          }), " Min # of children"]
        })
      }), o$1("div", {
        children: o$1("label", {
          children: [o$1("input", {
            type: "number",
            min: minChildCount,
            value: maxChildCount,
            onInput: e => {
              e.preventDefault();
              setMaxChildCount(e.currentTarget.valueAsNumber);
            }
          }), " Max # of children"]
        })
      }), o$1("div", {
        children: ["Current # of children: ", currentChildCount]
      }), o$1("label", {
        children: [o$1("input", {
          type: "checkbox",
          onInput: e => setAnimate(e.currentTarget.checked)
        }), " Mount & unmount children on a cycle"]
      }), o$1(ChildrenHaveFocusContext.Provider, {
        value: context,
        children: [o$1("div", {
          children: ["Any children focused: ", anyFocused.toString()]
        }), o$1("div", {
          children: Array.from(function* () {
            for (let i = 0; i < currentChildCount; ++i) {
              yield o$1(DemoUseChildrenHaveFocusChild, {
                index: i
              }, i);
            }
          }())
        })]
      })]
    });
  };
  const DemoUseChildrenHaveFocusChild = ({
    index
  }) => {
    const {
      hasCurrentFocusParameters: {
        onCurrentFocusedInnerChanged
      }
    } = useChildrenHaveFocusChild({
      context: q$1(ChildrenHaveFocusContext)
    });
    const {
      refElementReturn,
      propsStable
    } = useRefElement({
      refElementParameters: {}
    });
    const {
      hasCurrentFocusReturn
    } = useHasCurrentFocus({
      hasCurrentFocusParameters: {
        onCurrentFocusedChanged: null,
        onCurrentFocusedInnerChanged
      },
      refElementReturn
    });
    return o$1("div", {
      tabIndex: 0,
      ...useMergedProps(propsStable, hasCurrentFocusReturn.propsStable),
      children: ["Focusable child #", index, o$1("input", {}), o$1("input", {})]
    });
  };
  const DemoUseFocusTrap = x(({
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
        focusOpener: e => e?.focus(),
        focusPopup: (e, f) => f()?.focus()
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
    if (depth == 2) return o$1("div", {});
    return o$1("div", {
      className: "demo",
      children: [o$1("label", {
        children: ["Active: ", o$1("input", {
          type: "checkbox",
          checked: active,
          onInput: e => {
            e.preventDefault();
            setActive(e.currentTarget.checked);
          }
        })]
      }), o$1("div", {
        ...divProps,
        children: o$1(DemoUseFocusTrapChild, {
          active: active,
          setActive: setActive,
          depth: depth ?? 0
        })
      })]
    });
  });
  const DemoUseFocusTrapChild = x(({
    setActive,
    active
  }) => {
    return o$1(k$2, {
      children: [o$1("button", {
        children: "Button 1"
      }), o$1("button", {
        children: "Button 2"
      }), o$1("button", {
        children: "Button 3"
      }), o$1("label", {
        children: ["Active: ", o$1("input", {
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
  const DemoUseAsyncHandler1 = x(() => {
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
    return o$1("div", {
      className: "demo",
      children: [o$1("button", {
        disabled: pending && disableConsecutive,
        onClick: onClick,
        children: "Click me!"
      }), o$1("label", {
        children: ["Sleep for: ", o$1("input", {
          type: "number",
          value: timeout,
          onInput: e => setTimeout(e.currentTarget.valueAsNumber)
        })]
      }), o$1("label", {
        children: ["Throw an error ", o$1("input", {
          type: "checkbox",
          checked: shouldThrow,
          onInput: e => setShouldThrow(e.currentTarget.checked)
        })]
      }), o$1("label", {
        children: ["Disabled while pending ", o$1("input", {
          type: "checkbox",
          checked: disableConsecutive,
          onInput: e => setDisableConsecutive(e.currentTarget.checked)
        })]
      }), o$1("label", {
        children: ["Debounce: ", o$1("input", {
          type: "number",
          value: debounce,
          onInput: e => setDebounce(e.currentTarget.valueAsNumber)
        })]
      }), o$1("table", {
        children: [o$1("thead", {
          children: o$1("tr", {
            children: [o$1("th", {
              children: "Field"
            }), o$1("th", {
              children: "Value"
            })]
          })
        }), o$1("tbody", {
          children: [o$1("tr", {
            children: [o$1("td", {
              children: "callCount"
            }), o$1("td", {
              children: callCount
            })]
          }), o$1("tr", {
            children: [o$1("td", {
              children: "settleCount"
            }), o$1("td", {
              children: settleCount
            })]
          }), o$1("tr", {
            children: [o$1("td", {
              children: "resolveCount"
            }), o$1("td", {
              children: resolveCount
            })]
          }), o$1("tr", {
            children: [o$1("td", {
              children: "rejectCount"
            }), o$1("td", {
              children: rejectCount
            })]
          }), o$1("tr", {
            children: [o$1("td", {
              children: "hasError"
            }), o$1("td", {
              children: hasError.toString()
            })]
          }), o$1("tr", {
            children: [o$1("td", {
              children: "hasCapture"
            }), o$1("td", {
              children: hasCapture.toString()
            })]
          })]
        })]
      })]
    });
  });
  const DemoUseAsyncHandler2 = x(() => {
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
    return o$1("div", {
      className: "demo",
      children: [o$1("label", {
        children: ["Demo text: ", o$1("input", {
          value: hasCapture ? currentCapture : text,
          disabled: pending && disableConsecutive,
          onInput: syncHandler
        })]
      }), o$1("hr", {}), o$1("label", {
        children: ["# of milliseconds the async handler takes to run: ", o$1("input", {
          type: "number",
          value: timeout,
          onInput: e => setTimeout(e.currentTarget.valueAsNumber)
        })]
      }), o$1("label", {
        children: ["Throw an error ", o$1("input", {
          type: "checkbox",
          checked: shouldThrow,
          onInput: e => setShouldThrow(e.currentTarget.checked)
        })]
      }), o$1("label", {
        children: ["Disabled while pending ", o$1("input", {
          type: "checkbox",
          checked: disableConsecutive,
          onInput: e => setDisableConsecutive(e.currentTarget.checked)
        })]
      }), o$1("label", {
        children: ["Debounce: ", o$1("input", {
          type: "number",
          value: debounce,
          onInput: e => setDebounce(e.currentTarget.valueAsNumber)
        })]
      }), o$1("label", {
        children: ["Throttle: ", o$1("input", {
          type: "number",
          value: throttle,
          onInput: e => setThrottle(e.currentTarget.valueAsNumber)
        })]
      }), o$1("table", {
        children: [o$1("thead", {
          children: o$1("tr", {
            children: [o$1("th", {
              children: "Field"
            }), o$1("th", {
              children: "Value"
            })]
          })
        }), o$1("tbody", {
          children: [o$1("tr", {
            children: [o$1("td", {
              children: "showSpinner"
            }), o$1("td", {
              children: `${anyWaiting}`
            })]
          }), o$1("tr", {
            children: [o$1("td", {
              children: "pending"
            }), o$1("td", {
              children: `${pending}`
            })]
          }), o$1("tr", {
            children: [o$1("td", {
              children: "debouncingSync"
            }), o$1("td", {
              children: `${debouncingSync}`
            })]
          }), o$1("tr", {
            children: [o$1("td", {
              children: "debouncingAsync"
            }), o$1("td", {
              children: `${debouncingAsync}`
            })]
          }), o$1("tr", {
            children: [o$1("td", {
              children: "callCount"
            }), o$1("td", {
              children: callCount
            })]
          }), o$1("tr", {
            children: [o$1("td", {
              children: "settleCount"
            }), o$1("td", {
              children: settleCount
            })]
          }), o$1("tr", {
            children: [o$1("td", {
              children: "resolveCount"
            }), o$1("td", {
              children: resolveCount
            })]
          }), o$1("tr", {
            children: [o$1("td", {
              children: "rejectCount"
            }), o$1("td", {
              children: rejectCount
            })]
          }), o$1("tr", {
            children: [o$1("td", {
              children: "hasError"
            }), o$1("td", {
              children: hasError.toString()
            })]
          }), o$1("tr", {
            children: [o$1("td", {
              children: "currentCapture"
            }), o$1("td", {
              children: currentCapture
            })]
          }), o$1("tr", {
            children: [o$1("td", {
              children: "\"Saved\" input"
            }), o$1("td", {
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
  const DemoFocus = x(() => {
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
    return o$1("div", {
      class: "demo",
      children: [o$1("h2", {
        children: "useHasFocus"
      }), o$1("p", {
        children: "Tracks focus related to the component:"
      }), o$1("ul", {
        children: [o$1("li", {
          children: "Is this element (or, optionally, any element within it) focused?"
        }), o$1("li", {
          children: ["Regardless of if focus was lost because the ", o$1("code", {
            children: "body"
          }), " was clicked, was this element (or, optionally, any element within it), the last to be actually focused?"]
        }), o$1("li", {
          children: "Does the window have focus?"
        })]
      }), o$1("div", {
        ...useMergedProps(p2, p1, {
          style: {
            border: "1px solid black"
          },
          tabIndex: 0
        }),
        children: [o$1("span", {
          children: "Outer element"
        }), o$1("input", {}), o$1("input", {}), o$1("div", {
          tabIndex: 0,
          style: {
            border: "1px solid black"
          },
          children: [o$1("span", {
            children: "Inner element"
          }), o$1("input", {}), o$1("input", {})]
        })]
      }), o$1("div", {
        children: o$1("ul", {
          children: [o$1("li", {
            children: ["Focus count: ", focusCount]
          }), o$1("li", {
            children: ["Inner focus count: ", innerFocusCount]
          }), o$1("li", {
            children: ["Strictly focused: ", focused.toString(), ", ", lastFocused.toString(), " (focused, lastFocused)"]
          }), o$1("li", {
            children: ["Inner focused: ", focusedInner.toString(), ", ", lastFocusedInner.toString(), " (focusedInner, lastFocusedInner)"]
          }), o$1("li", {
            children: ["Window focused: ", windowFocused.toString()]
          }), o$1("li", {
            children: ["activeElement: ", activeElement?.textContent]
          }), o$1("li", {
            children: ["lastActiveElement: ", lastActiveElement?.textContent]
          })]
        })
      })]
    });
  });
  function DemoLabel() {
    const {
      propsInput,
      propsLabel
    } = useRandomDualIds({
      randomIdInputParameters: {
        prefix: "input-",
        otherReferencerProp: "for"
      },
      randomIdLabelParameters: {
        prefix: "label-",
        otherReferencerProp: "aria-labelledby"
      }
    });
    return o$1("div", {
      className: "demo",
      children: [o$1("h2", {
        children: "Labels"
      }), o$1("input", {
        ...propsInput
      }), o$1("label", {
        ...propsLabel,
        children: "Label"
      })]
    });
  }
  function DemoPress({
    remaining
  }) {
    const [count, setCount] = useState(0);
    const {
      refElementReturn,
      propsStable: p1
    } = useRefElement({
      refElementParameters: {}
    });
    const {
      props: p2,
      pressReturn: {
        pressing,
        longPress
      }
    } = usePress({
      pressParameters: {
        focusSelf: e => {
          e.focus();
        },
        longPressThreshold: 1000,
        onPressSync: () => {
          /*setTimeout(() => {
              let startTime = +(new Date());
              let endTime = new Date(startTime + 2000);
              while (+(new Date()) < +endTime);
              setCount((c: number) => ++c);
           });*/
          setCount(c => ++c);
        },
        allowRepeatPresses: false,
        excludeEnter: null,
        excludePointer: null,
        excludeSpace: null,
        onPressingChange: null
      },
      refElementReturn
    });
    return o$1("div", {
      className: "demo",
      children: [o$1("h2", {
        children: "Press"
      }), o$1("div", {
        children: ["Press count: ", count]
      }), o$1("div", {
        children: ["Active: ", pressing.toString()]
      }), o$1("div", {
        children: ["Long press: ", (longPress ?? "null").toString()]
      }), o$1("div", {
        style: {
          border: "1px solid black",
          touchAction: "none"
        },
        tabIndex: 0,
        ...useMergedProps(p1, p2),
        children: [o$1("div", {
          children: "This DIV's parent is pressable. Click here to press, cancel by leaving or hovering over a pressable child."
        }), o$1("div", {
          children: remaining > 0 && o$1(DemoPress, {
            remaining: remaining - 1
          })
        })]
      })]
    });
  }
  function DemoPortalChildrenChild() {
    console.log("Render portal child");
    return o$1("p", {
      children: "Portal child"
    });
  }
  function DemoPortalChildren() {
    const [element, setElement] = useState(null);
    const {
      children,
      pushChild,
      removeChild,
      updateChild
    } = usePortalChildren({
      target: element
    });
    return o$1("div", {
      className: "demo",
      children: [o$1("h2", {
        children: "Portal children"
      }), o$1("button", {
        onClick: () => pushChild(o$1(DemoPortalChildrenChild, {})),
        children: "Push child"
      }), children, o$1("div", {
        id: "demo-portal-target",
        ref: setElement
      })]
    });
  }
  function DemoGlobalHandler() {
    const [count, setCount] = useState(10);
    const [mode, setMode] = useState("single");
    const [testTime, setTestTime] = useState("");
    return o$1("div", {
      className: "demo",
      children: [o$1("div", {
        children: "Global event handlers:"
      }), o$1("label", {
        children: ["# of event handlers", o$1("input", {
          type: "number",
          value: count,
          min: 0,
          onInput: e => {
            e.preventDefault();
            setCount(e.currentTarget.valueAsNumber);
          }
        })]
      }), o$1("div", {
        children: [o$1("label", {
          children: [o$1("input", {
            onInput: e => {
              e.preventDefault();
              if (e.currentTarget.checked) setMode("grouped");
            },
            type: "radio",
            name: "global-handler-mode"
          }), " Grouped"]
        }), o$1("label", {
          children: [o$1("input", {
            onInput: e => {
              e.preventDefault();
              if (e.currentTarget.checked) setMode("single");
            },
            type: "radio",
            name: "global-handler-mode"
          }), " Single"]
        }), o$1("label", {
          children: [o$1("input", {
            onInput: e => {
              e.preventDefault();
              if (e.currentTarget.checked) setMode(null);
            },
            type: "radio",
            name: "global-handler-mode"
          }), " Off"]
        })]
      }), o$1("button", {
        id: "global-handler-test",
        onClick: () => {
          const now = new Date();
          document.getElementById("global-handler-test2")?.click();
          const then = new Date();
          setTestTime((+then - +now) / 1000 + "s passed");
        },
        children: "Run test"
      }), o$1("button", {
        id: "global-handler-test2",
        children: "Run test 2"
      }), o$1("div", {
        children: testTime
      }), o$1(DemoGlobalHandlerChildren, {
        count: count,
        mode: mode
      }, mode)]
    });
  }
  const DemoGlobalHandlerChildren = x(function DemoGlobalHandlerChildren({
    count,
    mode
  }) {
    return o$1(k$2, {
      children: [...function* () {
        for (let i = 0; i < count; ++i) {
          yield o$1(DemoGlobalHandlerChild, {
            mode: mode,
            target: window
          }, i);
        }
      }()]
    });
  });
  const DemoGlobalHandlerChild = x(function DemoGlobalHandlerChild({
    mode,
    target
  }) {
    useGlobalHandler(target, "click", mode == null ? null : e => {
      if (e.target?.id != "global-handler-test2") return;
      window._demo_event = (window._demo_event || 0) + 1;
    }, {}, mode || "grouped");
    return o$1("div", {
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
  //options.debounceRendering = (f) => f();
  const Component = () => {
    return o$1("div", {
      class: "flex",
      style: {
        flexWrap: "wrap"
      },
      children: [o$1(DemoPress, {
        remaining: 2
      }), o$1("input", {}), o$1("div", {
        style: "display:grid;grid-template-columns:1fr 1fr",
        children: [o$1(DemoUseModal, {}), o$1(DemoUseModal, {})]
      }), o$1("hr", {}), o$1(DemoLabel, {}), o$1("hr", {}), o$1(DemoGlobalHandler, {}), o$1("hr", {}), o$1(DemoPortalChildren, {}), o$1("hr", {}), o$1(DemoFocus, {}), o$1("hr", {}), o$1(DemoUseChildrenHaveFocus, {}), o$1("hr", {}), o$1(DemoUseGrid, {}), o$1("hr", {}), o$1(DemoUseTimeout, {}), o$1("hr", {}), o$1(DemoUseRovingTabIndex, {}), o$1("hr", {}), o$1(DemoUseFocusTrap, {}), o$1("hr", {}), o$1(DemoUseAsyncHandler1, {}), o$1("hr", {}), o$1(DemoUseAsyncHandler2, {}), o$1("hr", {}), o$1(DemoUseDroppable, {}), o$1("hr", {}), o$1(DemoUseDraggable, {}), o$1("hr", {})]
    });
  };
  requestAnimationFrame(() => {
    D$1(o$1(Component, {}), document.getElementById("root"));
  });
})();
//# sourceMappingURL=bundle.js.map
