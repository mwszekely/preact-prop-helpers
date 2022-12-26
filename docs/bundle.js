var bundle = function (exports) {
  'use strict';

  var n,
    l$1,
    u$1,
    t$1,
    o$2,
    r$2,
    f$1 = {},
    e$1 = [],
    c$1 = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
  function s$1(n, l) {
    for (var u in l) n[u] = l[u];
    return n;
  }
  function a$1(n) {
    var l = n.parentNode;
    l && l.removeChild(n);
  }
  function h$1(l, u, i) {
    var t,
      o,
      r,
      f = {};
    for (r in u) "key" == r ? t = u[r] : "ref" == r ? o = u[r] : f[r] = u[r];
    if (arguments.length > 2 && (f.children = arguments.length > 3 ? n.call(arguments, 2) : i), "function" == typeof l && null != l.defaultProps) for (r in l.defaultProps) void 0 === f[r] && (f[r] = l.defaultProps[r]);
    return v$1(l, f, t, o, null);
  }
  function v$1(n, i, t, o, r) {
    var f = {
      type: n,
      props: i,
      key: t,
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
  function p$1(n) {
    return n.children;
  }
  function d$1(n, l) {
    this.props = n, this.context = l;
  }
  function _$2(n, l) {
    if (null == l) return n.__ ? _$2(n.__, n.__.__k.indexOf(n) + 1) : null;
    for (var u; l < n.__k.length; l++) if (null != (u = n.__k[l]) && null != u.__e) return u.__e;
    return "function" == typeof n.type ? _$2(n) : null;
  }
  function k$1(n) {
    var l, u;
    if (null != (n = n.__) && null != n.__c) {
      for (n.__e = n.__c.base = null, l = 0; l < n.__k.length; l++) if (null != (u = n.__k[l]) && null != u.__e) {
        n.__e = n.__c.base = u.__e;
        break;
      }
      return k$1(n);
    }
  }
  function b$1(n) {
    (!n.__d && (n.__d = !0) && t$1.push(n) && !g$2.__r++ || o$2 !== l$1.debounceRendering) && ((o$2 = l$1.debounceRendering) || setTimeout)(g$2);
  }
  function g$2() {
    for (var n; g$2.__r = t$1.length;) n = t$1.sort(function (n, l) {
      return n.__v.__b - l.__v.__b;
    }), t$1 = [], n.some(function (n) {
      var l, u, i, t, o, r;
      n.__d && (o = (t = (l = n).__v).__e, (r = l.__P) && (u = [], (i = s$1({}, t)).__v = t.__v + 1, j$1(r, t, i, l.__n, void 0 !== r.ownerSVGElement, null != t.__h ? [o] : null, u, null == o ? _$2(t) : o, t.__h), z$2(u, t), t.__e != o && k$1(t)));
    });
  }
  function w$2(n, l, u, i, t, o, r, c, s, a) {
    var h,
      y,
      d,
      k,
      b,
      g,
      w,
      x = i && i.__k || e$1,
      C = x.length;
    for (u.__k = [], h = 0; h < l.length; h++) if (null != (k = u.__k[h] = null == (k = l[h]) || "boolean" == typeof k ? null : "string" == typeof k || "number" == typeof k || "bigint" == typeof k ? v$1(null, k, null, null, k) : Array.isArray(k) ? v$1(p$1, {
      children: k
    }, null, null, null) : k.__b > 0 ? v$1(k.type, k.props, k.key, k.ref ? k.ref : null, k.__v) : k)) {
      if (k.__ = u, k.__b = u.__b + 1, null === (d = x[h]) || d && k.key == d.key && k.type === d.type) x[h] = void 0;else for (y = 0; y < C; y++) {
        if ((d = x[y]) && k.key == d.key && k.type === d.type) {
          x[y] = void 0;
          break;
        }
        d = null;
      }
      j$1(n, k, d = d || f$1, t, o, r, c, s, a), b = k.__e, (y = k.ref) && d.ref != y && (w || (w = []), d.ref && w.push(d.ref, null, k), w.push(y, k.__c || b, k)), null != b ? (null == g && (g = b), "function" == typeof k.type && k.__k === d.__k ? k.__d = s = m$1(k, s, n) : s = A(n, k, d, x, b, s), "function" == typeof u.type && (u.__d = s)) : s && d.__e == s && s.parentNode != n && (s = _$2(d));
    }
    for (u.__e = g, h = C; h--;) null != x[h] && N(x[h], x[h]);
    if (w) for (h = 0; h < w.length; h++) M(w[h], w[++h], w[++h]);
  }
  function m$1(n, l, u) {
    for (var i, t = n.__k, o = 0; t && o < t.length; o++) (i = t[o]) && (i.__ = n, l = "function" == typeof i.type ? m$1(i, l, u) : A(u, i, i, t, i.__e, l));
    return l;
  }
  function x$1(n, l) {
    return l = l || [], null == n || "boolean" == typeof n || (Array.isArray(n) ? n.some(function (n) {
      x$1(n, l);
    }) : l.push(n)), l;
  }
  function A(n, l, u, i, t, o) {
    var r, f, e;
    if (void 0 !== l.__d) r = l.__d, l.__d = void 0;else if (null == u || t != o || null == t.parentNode) n: if (null == o || o.parentNode !== n) n.appendChild(t), r = null;else {
      for (f = o, e = 0; (f = f.nextSibling) && e < i.length; e += 1) if (f == t) break n;
      n.insertBefore(t, o), r = o;
    }
    return void 0 !== r ? r : t.nextSibling;
  }
  function C$1(n, l, u, i, t) {
    var o;
    for (o in u) "children" === o || "key" === o || o in l || H$1(n, o, null, u[o], i);
    for (o in l) t && "function" != typeof l[o] || "children" === o || "key" === o || "value" === o || "checked" === o || u[o] === l[o] || H$1(n, o, l[o], u[o], i);
  }
  function $(n, l, u) {
    "-" === l[0] ? n.setProperty(l, u) : n[l] = null == u ? "" : "number" != typeof u || c$1.test(l) ? u : u + "px";
  }
  function H$1(n, l, u, i, t) {
    var o;
    n: if ("style" === l) {
      if ("string" == typeof u) n.style.cssText = u;else {
        if ("string" == typeof i && (n.style.cssText = i = ""), i) for (l in i) u && l in u || $(n.style, l, "");
        if (u) for (l in u) i && u[l] === i[l] || $(n.style, l, u[l]);
      }
    } else if ("o" === l[0] && "n" === l[1]) o = l !== (l = l.replace(/Capture$/, "")), l = l.toLowerCase() in n ? l.toLowerCase().slice(2) : l.slice(2), n.l || (n.l = {}), n.l[l + o] = u, u ? i || n.addEventListener(l, o ? T$2 : I$1, o) : n.removeEventListener(l, o ? T$2 : I$1, o);else if ("dangerouslySetInnerHTML" !== l) {
      if (t) l = l.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");else if ("href" !== l && "list" !== l && "form" !== l && "tabIndex" !== l && "download" !== l && l in n) try {
        n[l] = null == u ? "" : u;
        break n;
      } catch (n) {}
      "function" == typeof u || (null == u || !1 === u && -1 == l.indexOf("-") ? n.removeAttribute(l) : n.setAttribute(l, u));
    }
  }
  function I$1(n) {
    this.l[n.type + !1](l$1.event ? l$1.event(n) : n);
  }
  function T$2(n) {
    this.l[n.type + !0](l$1.event ? l$1.event(n) : n);
  }
  function j$1(n, u, i, t, o, r, f, e, c) {
    var a,
      h,
      v,
      y,
      _,
      k,
      b,
      g,
      m,
      x,
      A,
      C,
      $,
      H,
      I,
      T = u.type;
    if (void 0 !== u.constructor) return null;
    null != i.__h && (c = i.__h, e = u.__e = i.__e, u.__h = null, r = [e]), (a = l$1.__b) && a(u);
    try {
      n: if ("function" == typeof T) {
        if (g = u.props, m = (a = T.contextType) && t[a.__c], x = a ? m ? m.props.value : a.__ : t, i.__c ? b = (h = u.__c = i.__c).__ = h.__E : ("prototype" in T && T.prototype.render ? u.__c = h = new T(g, x) : (u.__c = h = new d$1(g, x), h.constructor = T, h.render = O), m && m.sub(h), h.props = g, h.state || (h.state = {}), h.context = x, h.__n = t, v = h.__d = !0, h.__h = [], h._sb = []), null == h.__s && (h.__s = h.state), null != T.getDerivedStateFromProps && (h.__s == h.state && (h.__s = s$1({}, h.__s)), s$1(h.__s, T.getDerivedStateFromProps(g, h.__s))), y = h.props, _ = h.state, v) null == T.getDerivedStateFromProps && null != h.componentWillMount && h.componentWillMount(), null != h.componentDidMount && h.__h.push(h.componentDidMount);else {
          if (null == T.getDerivedStateFromProps && g !== y && null != h.componentWillReceiveProps && h.componentWillReceiveProps(g, x), !h.__e && null != h.shouldComponentUpdate && !1 === h.shouldComponentUpdate(g, h.__s, x) || u.__v === i.__v) {
            for (h.props = g, h.state = h.__s, u.__v !== i.__v && (h.__d = !1), h.__v = u, u.__e = i.__e, u.__k = i.__k, u.__k.forEach(function (n) {
              n && (n.__ = u);
            }), A = 0; A < h._sb.length; A++) h.__h.push(h._sb[A]);
            h._sb = [], h.__h.length && f.push(h);
            break n;
          }
          null != h.componentWillUpdate && h.componentWillUpdate(g, h.__s, x), null != h.componentDidUpdate && h.__h.push(function () {
            h.componentDidUpdate(y, _, k);
          });
        }
        if (h.context = x, h.props = g, h.__v = u, h.__P = n, C = l$1.__r, $ = 0, "prototype" in T && T.prototype.render) {
          for (h.state = h.__s, h.__d = !1, C && C(u), a = h.render(h.props, h.state, h.context), H = 0; H < h._sb.length; H++) h.__h.push(h._sb[H]);
          h._sb = [];
        } else do {
          h.__d = !1, C && C(u), a = h.render(h.props, h.state, h.context), h.state = h.__s;
        } while (h.__d && ++$ < 25);
        h.state = h.__s, null != h.getChildContext && (t = s$1(s$1({}, t), h.getChildContext())), v || null == h.getSnapshotBeforeUpdate || (k = h.getSnapshotBeforeUpdate(y, _)), I = null != a && a.type === p$1 && null == a.key ? a.props.children : a, w$2(n, Array.isArray(I) ? I : [I], u, i, t, o, r, f, e, c), h.base = u.__e, u.__h = null, h.__h.length && f.push(h), b && (h.__E = h.__ = null), h.__e = !1;
      } else null == r && u.__v === i.__v ? (u.__k = i.__k, u.__e = i.__e) : u.__e = L$1(i.__e, u, i, t, o, r, f, c);
      (a = l$1.diffed) && a(u);
    } catch (n) {
      u.__v = null, (c || null != r) && (u.__e = e, u.__h = !!c, r[r.indexOf(e)] = null), l$1.__e(n, u, i);
    }
  }
  function z$2(n, u) {
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
  function L$1(l, u, i, t, o, r, e, c) {
    var s,
      h,
      v,
      y = i.props,
      p = u.props,
      d = u.type,
      k = 0;
    if ("svg" === d && (o = !0), null != r) for (; k < r.length; k++) if ((s = r[k]) && "setAttribute" in s == !!d && (d ? s.localName === d : 3 === s.nodeType)) {
      l = s, r[k] = null;
      break;
    }
    if (null == l) {
      if (null === d) return document.createTextNode(p);
      l = o ? document.createElementNS("http://www.w3.org/2000/svg", d) : document.createElement(d, p.is && p), r = null, c = !1;
    }
    if (null === d) y === p || c && l.data === p || (l.data = p);else {
      if (r = r && n.call(l.childNodes), h = (y = i.props || f$1).dangerouslySetInnerHTML, v = p.dangerouslySetInnerHTML, !c) {
        if (null != r) for (y = {}, k = 0; k < l.attributes.length; k++) y[l.attributes[k].name] = l.attributes[k].value;
        (v || h) && (v && (h && v.__html == h.__html || v.__html === l.innerHTML) || (l.innerHTML = v && v.__html || ""));
      }
      if (C$1(l, p, y, o, c), v) u.__k = [];else if (k = u.props.children, w$2(l, Array.isArray(k) ? k : [k], u, i, t, o && "foreignObject" !== d, r, e, r ? r[0] : i.__k && _$2(i, 0), c), null != r) for (k = r.length; k--;) null != r[k] && a$1(r[k]);
      c || ("value" in p && void 0 !== (k = p.value) && (k !== l.value || "progress" === d && !k || "option" === d && k !== y.value) && H$1(l, "value", k, y.value, !1), "checked" in p && void 0 !== (k = p.checked) && k !== l.checked && H$1(l, "checked", k, y.checked, !1));
    }
    return l;
  }
  function M(n, u, i) {
    try {
      "function" == typeof n ? n(u) : n.current = u;
    } catch (n) {
      l$1.__e(n, i);
    }
  }
  function N(n, u, i) {
    var t, o;
    if (l$1.unmount && l$1.unmount(n), (t = n.ref) && (t.current && t.current !== n.__e || M(t, null, u)), null != (t = n.__c)) {
      if (t.componentWillUnmount) try {
        t.componentWillUnmount();
      } catch (n) {
        l$1.__e(n, u);
      }
      t.base = t.__P = null, n.__c = void 0;
    }
    if (t = n.__k) for (o = 0; o < t.length; o++) t[o] && N(t[o], u, i || "function" != typeof n.type);
    i || null == n.__e || a$1(n.__e), n.__ = n.__e = n.__d = void 0;
  }
  function O(n, l, u) {
    return this.constructor(n, u);
  }
  function P(u, i, t) {
    var o, r, e;
    l$1.__ && l$1.__(u, i), r = (o = "function" == typeof t) ? null : t && t.__k || i.__k, e = [], j$1(i, u = (!o && t || i).__k = h$1(p$1, null, [u]), r || f$1, f$1, void 0 !== i.ownerSVGElement, !o && t ? [t] : r ? null : i.firstChild ? n.call(i.childNodes) : null, e, !o && t ? t : r ? r.__e : i.firstChild, o), z$2(e, u);
  }
  function B$2(n, l) {
    var u = {
      __c: l = "__cC" + r$2++,
      __: n,
      Consumer: function (n, l) {
        return n.children(l);
      },
      Provider: function (n) {
        var u, i;
        return this.getChildContext || (u = [], (i = {})[l] = this, this.getChildContext = function () {
          return i;
        }, this.shouldComponentUpdate = function (n) {
          this.props.value !== n.value && u.some(b$1);
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
  n = e$1.slice, l$1 = {
    __e: function (n, l, u, i) {
      for (var t, o, r; l = l.__;) if ((t = l.__c) && !t.__) try {
        if ((o = t.constructor) && null != o.getDerivedStateFromError && (t.setState(o.getDerivedStateFromError(n)), r = t.__d), null != t.componentDidCatch && (t.componentDidCatch(n, i || {}), r = t.__d), r) return t.__E = t;
      } catch (l) {
        n = l;
      }
      throw n;
    }
  }, u$1 = 0, d$1.prototype.setState = function (n, l) {
    var u;
    u = null != this.__s && this.__s !== this.state ? this.__s : this.__s = s$1({}, this.state), "function" == typeof n && (n = n(s$1({}, u), this.props)), n && s$1(u, n), null != n && this.__v && (l && this._sb.push(l), b$1(this));
  }, d$1.prototype.forceUpdate = function (n) {
    this.__v && (this.__e = !0, n && this.__h.push(n), b$1(this));
  }, d$1.prototype.render = p$1, t$1 = [], g$2.__r = 0, r$2 = 0;
  var _$1 = 0;
  function o$1(o, e, n, t, f) {
    var l,
      s,
      u = {};
    for (s in e) "ref" == s ? l = e[s] : u[s] = e[s];
    var a = {
      type: o,
      props: u,
      key: n,
      ref: l,
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
      __self: t
    };
    if ("function" == typeof o && (l = o.defaultProps)) for (s in l) void 0 === u[s] && (u[s] = l[s]);
    return l$1.vnode && l$1.vnode(a), a;
  }
  var t,
    r$1,
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
    l$1.__h && l$1.__h(r$1, t, o || u), o = 0;
    var i = r$1.__H || (r$1.__H = {
      __: [],
      __h: []
    });
    return t >= i.__.length && i.__.push({
      __V: c
    }), i.__[t];
  }
  function p(n) {
    return o = 1, y(B$1, n);
  }
  function y(n, u, i) {
    var o = d(t++, 2);
    if (o.t = n, !o.__c && (o.__ = [i ? i(u) : B$1(void 0, u), function (n) {
      var t = o.__N ? o.__N[0] : o.__[0],
        r = o.t(t, n);
      t !== r && (o.__N = [r, o.__[1]], o.__c.setState({}));
    }], o.__c = r$1, !r$1.u)) {
      r$1.u = !0;
      var f = r$1.shouldComponentUpdate;
      r$1.shouldComponentUpdate = function (n, t, r) {
        if (!o.__c.__H) return !0;
        var u = o.__c.__H.__.filter(function (n) {
          return n.__c;
        });
        if (u.every(function (n) {
          return !n.__N;
        })) return !f || f.call(this, n, t, r);
        var i = !1;
        return u.forEach(function (n) {
          if (n.__N) {
            var t = n.__[0];
            n.__ = n.__N, n.__N = void 0, t !== n.__[0] && (i = !0);
          }
        }), !(!i && o.__c.props === n) && (!f || f.call(this, n, t, r));
      };
    }
    return o.__N || o.__;
  }
  function h(u, i) {
    var o = d(t++, 3);
    !l$1.__s && z$1(o.__H, i) && (o.__ = u, o.i = i, r$1.__H.__h.push(o));
  }
  function s(u, i) {
    var o = d(t++, 4);
    !l$1.__s && z$1(o.__H, i) && (o.__ = u, o.i = i, r$1.__h.push(o));
  }
  function _(n) {
    return o = 5, F$1(function () {
      return {
        current: n
      };
    }, []);
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
  function q(n) {
    var u = r$1.context[n.__c],
      i = d(t++, 9);
    return i.c = n, u ? (null == i.__ && (i.__ = !0, u.sub(r$1)), u.props.value) : n.__;
  }
  function b() {
    for (var t; t = f.shift();) if (t.__P && t.__H) try {
      t.__H.__h.forEach(k), t.__H.__h.forEach(w$1), t.__H.__h = [];
    } catch (r) {
      t.__H.__h = [], l$1.__e(r, t.__v);
    }
  }
  l$1.__b = function (n) {
    r$1 = null, e && e(n);
  }, l$1.__r = function (n) {
    a && a(n), t = 0;
    var i = (r$1 = n.__c).__H;
    i && (u === r$1 ? (i.__h = [], r$1.__h = [], i.__.forEach(function (n) {
      n.__N && (n.__ = n.__N), n.__V = c, n.__N = n.i = void 0;
    })) : (i.__h.forEach(k), i.__h.forEach(w$1), i.__h = [])), u = r$1;
  }, l$1.diffed = function (t) {
    v && v(t);
    var o = t.__c;
    o && o.__H && (o.__H.__h.length && (1 !== f.push(o) && i === l$1.requestAnimationFrame || ((i = l$1.requestAnimationFrame) || j)(b)), o.__H.__.forEach(function (n) {
      n.i && (n.__H = n.i), n.__V !== c && (n.__ = n.__V), n.i = void 0, n.__V = c;
    })), u = r$1 = null;
  }, l$1.__c = function (t, r) {
    r.some(function (t) {
      try {
        t.__h.forEach(k), t.__h = t.__h.filter(function (n) {
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
        k(n);
      } catch (n) {
        r = n;
      }
    }), u.__H = void 0, r && l$1.__e(r, u.__v));
  };
  var g$1 = "function" == typeof requestAnimationFrame;
  function j(n) {
    var t,
      r = function () {
        clearTimeout(u), g$1 && cancelAnimationFrame(t), setTimeout(n);
      },
      u = setTimeout(r, 100);
    g$1 && (t = requestAnimationFrame(r));
  }
  function k(n) {
    var t = r$1,
      u = n.__c;
    "function" == typeof u && (n.__c = void 0, u()), r$1 = t;
  }
  function w$1(n) {
    var t = r$1;
    n.__c = n.__(), r$1 = t;
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
  function R(n, e) {
    function r(n) {
      var t = this.props.ref,
        r = t == n.ref;
      return !r && t && (t.call ? t(null) : t.current = null), e ? !e(this.props, n) || !r : C(this.props, n);
    }
    function u(e) {
      return this.shouldComponentUpdate = r, h$1(n, e);
    }
    return u.displayName = "Memo(" + (n.displayName || n.name) + ")", u.prototype.isReactComponent = !0, u.__f = !0, u;
  }
  (w.prototype = new d$1()).isPureReactComponent = !0, w.prototype.shouldComponentUpdate = function (n, t) {
    return C(this.props, n) || C(this.state, t);
  };
  var x = l$1.__b;
  l$1.__b = function (n) {
    n.type && n.type.__f && n.ref && (n.props.ref = n.ref, n.ref = null), x && x(n);
  };
  var T = l$1.__e;
  l$1.__e = function (n, t, e, r) {
    if (n.then) for (var u, o = t; o = o.__;) if ((u = o.__c) && u.__c) return null == t.__e && (t.__e = e.__e, t.__k = e.__k), u.__c(n, t);
    T(n, t, e, r);
  };
  var I = l$1.unmount;
  function L(n, t, e) {
    return n && (n.__c && n.__c.__H && (n.__c.__H.__.forEach(function (n) {
      "function" == typeof n.__c && n.__c();
    }), n.__c.__H = null), null != (n = g({}, n)).__c && (n.__c.__P === e && (n.__c.__P = t), n.__c = null), n.__k = n.__k && n.__k.map(function (n) {
      return L(n, t, e);
    })), n;
  }
  function U(n, t, e) {
    return n && (n.__v = null, n.__k = n.__k && n.__k.map(function (n) {
      return U(n, t, e);
    }), n.__c && n.__c.__P === t && (n.__e && e.insertBefore(n.__e, n.__d), n.__c.__e = !0, n.__c.__P = e)), n;
  }
  function D() {
    this.__u = 0, this.t = null, this.__b = null;
  }
  function F(n) {
    var t = n.__.__c;
    return t && t.__a && t.__a(n);
  }
  function V() {
    this.u = null, this.o = null;
  }
  l$1.unmount = function (n) {
    var t = n.__c;
    t && t.__R && t.__R(), t && !0 === n.__h && (n.type = null), I && I(n);
  }, (D.prototype = new d$1()).__c = function (n, t) {
    var e = t.__c,
      r = this;
    null == r.t && (r.t = []), r.t.push(e);
    var u = F(r.__v),
      o = !1,
      i = function () {
        o || (o = !0, e.__R = null, u ? u(l) : l());
      };
    e.__R = i;
    var l = function () {
        if (! --r.__u) {
          if (r.state.__a) {
            var n = r.state.__a;
            r.__v.__k[0] = U(n, n.__c.__P, n.__c.__O);
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
  }, D.prototype.componentWillUnmount = function () {
    this.t = [];
  }, D.prototype.render = function (n, e) {
    if (this.__b) {
      if (this.__v.__k) {
        var r = document.createElement("div"),
          o = this.__v.__k[0].__c;
        this.__v.__k[0] = L(this.__b, r, o.__O = o.__P);
      }
      this.__b = null;
    }
    var i = e.__a && h$1(p$1, null, n.fallback);
    return i && (i.__h = null), [h$1(p$1, null, e.__a ? null : n.children), i];
  };
  var W = function (n, t, e) {
    if (++e[1] === e[0] && n.o.delete(t), n.props.revealOrder && ("t" !== n.props.revealOrder[0] || !n.o.size)) for (e = n.u; e;) {
      for (; e.length > 3;) e.pop()();
      if (e[1] < e[0]) break;
      n.u = e = e[2];
    }
  };
  (V.prototype = new d$1()).__a = function (n) {
    var t = this,
      e = F(t.__v),
      r = t.o.get(n);
    return r[0]++, function (u) {
      var o = function () {
        t.props.revealOrder ? (r.push(u), W(t, n, r)) : u();
      };
      e ? e(o) : o();
    };
  }, V.prototype.render = function (n) {
    this.u = null, this.o = new Map();
    var t = x$1(n.children);
    n.revealOrder && "b" === n.revealOrder[0] && t.reverse();
    for (var e = t.length; e--;) this.o.set(t[e], this.u = [1, 0, this.u]);
    return n.children;
  }, V.prototype.componentDidUpdate = V.prototype.componentDidMount = function () {
    var n = this;
    this.o.forEach(function (t, e) {
      W(n, e, t);
    });
  };
  var z = "undefined" != typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103,
    B = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,
    H = "undefined" != typeof document,
    Z = function (n) {
      return ("undefined" != typeof Symbol && "symbol" == typeof Symbol() ? /fil|che|rad/i : /fil|che|ra/i).test(n);
    };
  d$1.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function (t) {
    Object.defineProperty(d$1.prototype, t, {
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
  var G = l$1.event;
  function J() {}
  function K() {
    return this.cancelBubble;
  }
  function Q() {
    return this.defaultPrevented;
  }
  l$1.event = function (n) {
    return G && (n = G(n)), n.persist = J, n.isPropagationStopped = K, n.isDefaultPrevented = Q, n.nativeEvent = n;
  };
  var nn = {
      configurable: !0,
      get: function () {
        return this.class;
      }
    },
    tn = l$1.vnode;
  l$1.vnode = function (n) {
    var t = n.type,
      e = n.props,
      u = e;
    if ("string" == typeof t) {
      var o = -1 === t.indexOf("-");
      for (var i in u = {}, e) {
        var l = e[i];
        H && "children" === i && "noscript" === t || "value" === i && "defaultValue" in e && null == l || ("defaultValue" === i && "value" in e && null == e.value ? i = "value" : "download" === i && !0 === l ? l = "" : /ondoubleclick/i.test(i) ? i = "ondblclick" : /^onchange(textarea|input)/i.test(i + t) && !Z(e.type) ? i = "oninput" : /^onfocus$/i.test(i) ? i = "onfocusin" : /^onblur$/i.test(i) ? i = "onfocusout" : /^on(Ani|Tra|Tou|BeforeInp|Compo)/.test(i) ? i = i.toLowerCase() : o && B.test(i) ? i = i.replace(/[A-Z0-9]/g, "-$&").toLowerCase() : null === l && (l = void 0), /^oninput$/i.test(i) && (i = i.toLowerCase(), u[i] && (i = "oninputCapture")), u[i] = l);
      }
      "select" == t && u.multiple && Array.isArray(u.value) && (u.value = x$1(e.children).forEach(function (n) {
        n.props.selected = -1 != u.value.indexOf(n.props.value);
      })), "select" == t && null != u.defaultValue && (u.value = x$1(e.children).forEach(function (n) {
        n.props.selected = u.multiple ? -1 != u.defaultValue.indexOf(n.props.value) : u.defaultValue == n.props.value;
      })), n.props = u, e.class != e.className && (nn.enumerable = "className" in e, null != e.className && (u.class = e.className), Object.defineProperty(u, "className", nn));
    }
    n.$$typeof = z, tn && tn(n);
  };
  var en = l$1.__r;
  l$1.__r = function (n) {
    en && en(n), n.__c;
  };

  /**
   * Debug hook.
   *
   * Given a value or set of values, emits a console error if any of them change from one render to the next.
   *
   * Eventually, when useEvent lands, we hopefully won't need this.
   */
  function useEnsureStability(parentHookName) {
    for (var _len = arguments.length, values = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      values[_key - 1] = arguments[_key];
    }
    const helperToEnsureStability = _([]);
    const shownError = _([]);
    useHelper(values.length, -1);
    values.forEach(useHelper);
    return;
    function useHelper(value, i) {
      const index = i + 1;
      // Make sure that the provided functions are perfectly stable across renders
      if (helperToEnsureStability.current[index] === undefined) helperToEnsureStability.current[index] = value;
      if (helperToEnsureStability.current[index] != value) {
        if (!shownError.current[index]) {
          /* eslint-disable no-debugger */
          debugger;
          console.error("The hook ".concat(parentHookName, " requires some or all of its arguments remain stable across each render; please check the ").concat(i, "-indexed argument (").concat(i >= 0 ? JSON.stringify(values[i]) : "the number of supposedly stable elements", ")."));
          shownError.current[index] = true;
        }
      }
    }
  }
  function debounceRendering(f) {
    var _l$1$debounceRenderin;
    ((_l$1$debounceRenderin = l$1.debounceRendering) !== null && _l$1$debounceRenderin !== void 0 ? _l$1$debounceRenderin : setTimeout)(f);
  }
  /**
   * Similar to `useState`, but for values that aren't "render-important" &ndash; updates don't cause a re-render and so the value shouldn't be used during render (though it certainly can, at least by re-rendering again).
   *
   * To compensate for this, you should pass a `useEffect`-esque callback that is run whenever the value changes.  Just like `useEffect`, this callback can return a cleanup function that's run before the value changes.  If you would like to re-render when the value changes (or, say, when the value meets some criteria), this is where you'll want to put in a call to a `setState` function.
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
   * @param onChange The "effect" function to run when the value changes. Effectively the same as `useEffect`'s "effect" function.  MUST BE STABLE, either because it has no dependencies, or because it's from useStableCallback, but this will mean you cannot use getState or setState during render.
   * @param getInitialValue If provided, the effect will be invoked once with this value on mount. MUST BE STABLE, either because it has no dependencies, or because it's from useStableCallback, but this will mean you cannot use getState or setState during render.
   * @param customDebounceRendering By default, changes to passive state are delayed by one tick so that we only check for changes in a similar way to Preact. You can override this to, for example, always run immediately instead.
   * @returns
   */
  function usePassiveState(onChange, getInitialValue, customDebounceRendering) {
    const valueRef = _(Unset$2);
    const reasonRef = _(Unset$2);
    const warningRef = _(false);
    const dependencyToCompareAgainst = _(Unset$2);
    const cleanupCallbackRef = _(undefined);
    // Make sure that the provided functions are perfectly stable across renders
    useEnsureStability("usePassiveState", onChange, getInitialValue, customDebounceRendering);
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
          var _onChange;
          const initialValue = getInitialValue();
          valueRef.current = initialValue;
          cleanupCallbackRef.current = (_onChange = onChange === null || onChange === void 0 ? void 0 : onChange(initialValue, undefined, undefined)) !== null && _onChange !== void 0 ? _onChange : undefined;
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
    s(() => {
      // Make sure we've run our effect at least once on mount.
      // (If we have an initial value, of course)
      tryEnsureValue();
    }, []);
    // The actual code the user calls to (possibly) run a new effect.
    const setValue = T$1((arg, reason) => {
      // Regardless of anything else, figure out what our next value is about to be.
      const nextValue = arg instanceof Function ? arg(valueRef.current === Unset$2 ? undefined : valueRef.current) : arg;
      if (dependencyToCompareAgainst.current === Unset$2 && nextValue !== valueRef.current) {
        // This is the first request to change this value.
        // Evaluate the request immediately, then queue up the onChange function
        // Save our current value so that we can compare against it later
        // (if we flip back to this state, then we won't send the onChange function)
        dependencyToCompareAgainst.current = valueRef.current;
        // It's important to update this here (as well as below) in case customDebounceRendering invokes this immediately
        valueRef.current = nextValue;
        reasonRef.current = reason;
        // Schedule the actual check and invocation of onChange later to let effects settle
        (customDebounceRendering !== null && customDebounceRendering !== void 0 ? customDebounceRendering : debounceRendering)(() => {
          const nextReason = reasonRef.current;
          const nextDep = valueRef.current;
          const prevDep = dependencyToCompareAgainst.current;
          if (dependencyToCompareAgainst.current != valueRef.current) {
            warningRef.current = true;
            try {
              var _onChange2;
              // Call any registered cleanup function
              onShouldCleanUp();
              cleanupCallbackRef.current = (_onChange2 = onChange === null || onChange === void 0 ? void 0 : onChange(nextDep, prevDep === Unset$2 ? undefined : prevDep, nextReason)) !== null && _onChange2 !== void 0 ? _onChange2 : undefined;
              valueRef.current = nextDep;
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
      valueRef.current = nextValue;
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
  function identity$1(t) {
    return t;
  } // Kind of an extra, but it's useful in other places anyway
  /**
   * An alternative to use for `customDebounceRendering` that causes `usePassiveState` to run changes without waiting a tick.
   */
  function runImmediately(f) {
    f();
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
   * without also making a utilities file.
   * Once we can remove this hook, we can put this function back with useRandomId)
   */
  function generateRandomId(prefix) {
    return "".concat(prefix !== null && prefix !== void 0 ? prefix : "id-").concat(random64Bits().map(n => base64(n)).join(""));
  }
  const previousInputs = new Map();
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
  const commitName = "diffed";
  const originalCommit = l$1[commitName];
  const newCommit = function () {
    for (const [id, effectInfo] of toRun) {
      const oldInputs = previousInputs.get(id);
      if (argsChanged(oldInputs, effectInfo.inputs)) {
        var _effectInfo$cleanup;
        (_effectInfo$cleanup = effectInfo.cleanup) === null || _effectInfo$cleanup === void 0 ? void 0 : _effectInfo$cleanup.call(effectInfo);
        effectInfo.cleanup = effectInfo.effect();
        previousInputs.set(id, effectInfo.inputs);
      }
    }
    toRun.clear();
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }
    originalCommit === null || originalCommit === void 0 ? void 0 : originalCommit(...args);
  };
  l$1[commitName] = newCommit;
  /**
   * Semi-private function to allow stable callbacks even within `useLayoutEffect` and ref assignment.
   *
   * Every render, we send the arguments to be evaluated after diffing has completed,
   * which happens before.
   *
   * @param effect
   * @param inputs
   */
  function useBeforeLayoutEffect(effect, inputs) {
    /*(() => {
        const cleanup = useRef<void | (() => void) | null>(null);
        const prevArgsRef = useRef<Inputs>(null!);
        if (argsChanged(inputs, prevArgsRef.current)) {
            prevArgsRef.current = inputs!;
            if (cleanup.current)
                cleanup.current();
            cleanup.current = effect();
        }
    })();*/
    const [id] = p(() => generateRandomId());
    if (effect) toRun.set(id, {
      effect,
      inputs,
      cleanup: null
    });else toRun.delete(id);
    h(() => {
      return () => {
        toRun.delete(id);
        previousInputs.delete(id);
      };
    }, [id]);
  }
  function argsChanged(oldArgs, newArgs) {
    return !!(!oldArgs || oldArgs.length !== (newArgs === null || newArgs === void 0 ? void 0 : newArgs.length) || newArgs !== null && newArgs !== void 0 && newArgs.some((arg, index) => arg !== oldArgs[index]));
  }
  const Unset$1 = Symbol("unset");
  /**
   * Given an input value, returns a constant getter function that can be used
   * inside of `useEffect` and friends without including it in the dependency array.
   *
   * This uses `options.diffed` in order to run before everything, even
   * ref assignment. This means this getter is safe to use anywhere ***except the render phase***.
   *
   * @param value
   * @returns
   */
  function useStableGetter(value) {
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
  }
  /**
   * Like `useStableGetter`, but ***requires*** that everything in the object is also stable,
   * and in turn returns an object that itself is stable.
   * @param t
   * @returns
   */
  function useStableObject(t) {
    const e = Object.entries(t);
    useEnsureStability("useStableObject", e.length, ...e.map(_ref2 => {
      let [_k, v] = _ref2;
      return v;
    }));
    return _(t).current;
  }

  /**
   * We keep track of which callbacks are stable with a WeakMap instead of, say, a symbol because
   * `useCallback` will return a function that's stable across *all* renders, meaning
   * we can't use our funny "`if` only works here because it doesn't break the rules of hooks" trick then.
   */
  const map = new WeakMap();
  function isStableGetter(obj) {
    var _map$get;
    return (_map$get = map.get(obj)) !== null && _map$get !== void 0 ? _map$get : false;
  }
  function setIsStableGetter(obj) {
    map.set(obj, true);
    return obj;
  }
  /**
   * Alternate useCallback() which always returns the same (wrapped) function reference
   * so that it can be excluded from the dependency arrays of `useEffect` and friends.
   *
   * In general, just pass the function you want to be stable (but you can't use it during render,
   * so be careful!).  Alternatively, if you need a stable callback that **can** be used
   * during render, pass an empty dependency array and it'll act like `useCallback` with an
   * empty dependency array, but with the associated stable typing. In this case, you ***must*** ensure that it
   * truly has no dependencies/only stable dependencies!!
   */
  //export function useStableCallback<T extends (..._args: any[]) => any>(fn: T, noDeps: []): Stable<T>;
  //export function useStableCallback<T extends (..._args: any[]) => any>(fn: T): Stable<T>;
  function useStableCallback(fn, noDeps) {
    useEnsureStability("useStableCallback", noDeps == null, noDeps === null || noDeps === void 0 ? void 0 : noDeps.length, isStableGetter(fn));
    if (isStableGetter(fn)) return fn;
    if (noDeps == null) {
      const currentCallbackGetter = useStableGetter(fn);
      return setIsStableGetter(T$1(function () {
        return currentCallbackGetter()(...arguments);
      }, []));
    } else {
      console.assert(noDeps.length === 0);
      return setIsStableGetter(T$1(fn, []));
    }
  }
  function useMergedChildren(lhs, rhs) {
    if (lhs == null && rhs == null) {
      return undefined;
    } else if (lhs == null) {
      return rhs;
    } else if (rhs == null) {
      return lhs;
    } else {
      return h$1(p$1, {}, lhs, rhs);
    }
  }
  function r(e) {
    var t,
      f,
      n = "";
    if ("string" == typeof e || "number" == typeof e) n += e;else if ("object" == typeof e) if (Array.isArray(e)) for (t = 0; t < e.length; t++) e[t] && (f = r(e[t])) && (n && (n += " "), n += f);else for (t in e) e[t] && (n && (n += " "), n += t);
    return n;
  }
  function clsx() {
    for (var e, t, f = 0, n = ""; f < arguments.length;) (e = arguments[f++]) && (t = r(e)) && (n && (n += " "), n += t);
    return n;
  }

  /**
   * Given two sets of props, merges their `class` and `className` properties.
   * Duplicate classes are removed (order doesn't matter anyway).
   *
   * @param lhs Classes of the first component
   * @param rhs Classes of the second component
   * @returns A string representing all combined classes from both arguments.
   */
  function useMergedClasses(lhsClass, lhsClassName, rhsClass, rhsClassName) {
    // Note: For the sake of forward compatibility, this function is labelled as
    // a hook, but as it uses no other hooks it technically isn't one.
    if (lhsClass || rhsClass || lhsClassName || rhsClassName) {
      const lhsClasses = clsx(lhsClass, lhsClassName).split(" ");
      const rhsClasses = clsx(rhsClass, rhsClassName).split(" ");
      const allClasses = new Set([...Array.from(lhsClasses), ...Array.from(rhsClasses)]);
      return Array.from(allClasses).join(" ");
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
   * @param lhs
   * @param rhs
   * @returns
   */
  function useMergedRefs(rhs, lhs) {
    const combined = T$1(current => {
      processRef(current, lhs);
      processRef(current, rhs);
    }, [lhs, rhs]);
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
   * @param style The user-given style prop for this component
   * @param obj The CSS properties you want added to the user-given style
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
      return "".concat(lhs, ";").concat(rhs !== null && rhs !== void 0 ? rhs : "");
    }
    // They're both objects, just merge them.
    return {
      ...(lhs !== null && lhs !== void 0 ? lhs : {}),
      ...(rhs !== null && rhs !== void 0 ? rhs : {})
    };
  }
  let log = console.warn;
  /**
   * Given two sets of props, merges them and returns the result.
   *
   * The hook is aware of and can intelligently merge `className`, `class`, `style`, `ref`, and all event handlers.
   * @param lhs2
   * @param rhs2
   * @returns
   */
  function useMergedProps() {
    for (var _len3 = arguments.length, allProps = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      allProps[_key3] = arguments[_key3];
    }
    useEnsureStability("useMergedProps", allProps.length);
    let ret = {};
    for (let nextProps of allProps) {
      ret = useMergedProps2(ret, nextProps);
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
      // Uh...we're here because one of them's null, right?
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
        log === null || log === void 0 ? void 0 : log("The prop \"".concat(key, "\" cannot simultaneously be the values ").concat(lhsValue, " and ").concat(rhsValue, ". One must be chosen outside of useMergedProps."));
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
  function useMergedProps2(lhsAll, rhsAll) {
    const ret = {
      ref: useMergedRefs(lhsAll.ref, rhsAll.ref),
      style: useMergedStyles(lhsAll.style, rhsAll.style),
      className: useMergedClasses(lhsAll["class"], lhsAll.className, rhsAll["class"], rhsAll.className),
      children: useMergedChildren(lhsAll.children, rhsAll.children)
    };
    if (ret.ref === undefined) delete ret.ref;
    if (ret.style === undefined) delete ret.style;
    if (ret.className === undefined) delete ret.className;
    if (ret["class"] === undefined) delete ret["class"];
    if (ret.children === undefined) delete ret.children;
    for (const lhsKeyU in lhsAll) {
      const lhsKey = lhsKeyU;
      if (knowns.has(lhsKey)) continue;
      ret[lhsKey] = lhsAll[lhsKey];
    }
    for (const rhsKeyU in rhsAll) {
      const rhsKey = rhsKeyU;
      if (knowns.has(rhsKey)) continue;
      ret[rhsKey] = mergeUnknown(rhsKey, ret[rhsKey], rhsAll[rhsKey]);
    }
    return ret;
  }
  function mergeFunctions(lhs, rhs) {
    if (!lhs) return rhs;
    if (!rhs) return lhs;
    return function () {
      const lv = lhs(...arguments);
      const rv = rhs(...arguments);
      if (lv instanceof Promise || rv instanceof Promise) return Promise.all([lv, rv]);
    };
  }
  /*
  function test<P extends h.JSX.HTMLAttributes<HTMLInputElement>>(props: P) {
       const id0: GenericGet<{}, "id", string> = "";
      const id3: GenericGet<{ id: undefined }, "id", string> = undefined;
      const id4: GenericGet<{ id: undefined }, "id", string> = undefined;
      const id5: GenericGet<{ id: undefined }, "id", string> = undefined;
      const id6: GenericGet<{ id: undefined }, "id", string> = undefined;
      //const id2: ZipSingle<string | undefined, string | undefined> = undefined;
      const id1: ZipObject<{ id: undefined }, { id: string }> = { id: undefined };
       type M1 = GenericGet<P, "style", string>;
      type M2 = GenericGet<{}, "style", string>;
      const m1: M1 = "";
      const m2: M1 = undefined;
      /// @ts-expect-error    Because number isn't assignable to string
      const m3: M1 = 0;
       const m4: M2 = "";
      const m5: M2 = undefined;
      /// @ts-expect-error    Because number isn't assignable to string
      const m6: M2 = 0;
       const p1: MergedProps<HTMLInputElement, {}, { id: string }> = useMergedProps<HTMLInputElement>()({}, { id: "string" });
      const p2: MergedProps<HTMLInputElement, { id: undefined }, { id: string }> = useMergedProps<HTMLInputElement>()({ id: undefined }, { id: "string" });
      const p3: MergedProps<HTMLInputElement, { id: undefined }, { id: undefined }> = useMergedProps<HTMLInputElement>()({ id: undefined }, { id: undefined });
      const p4: MergedProps<HTMLInputElement, {}, {}> = useMergedProps<HTMLInputElement>()({}, {});
      const p5 = useMergedProps<HTMLInputElement>()(props, {});
      const p6 = useMergedProps<HTMLInputElement>()(props, { id: undefined });
      const p7 = useMergedProps<HTMLInputElement>()(props, { id: "string" });
        p1.id?.concat("");
      p2.id?.concat("");
      /// @ts-expect-error    id can't be anything but undefined
      p3.id?.concat("");
      /// @ts-expect-error    id can't be anything but undefined
      p4.id?.concat("");
        p5.id?.concat("");
      p6.id?.concat("");
      p7.id?.concat("");
       /// @ts-expect-error    id must contain undefined
      p5.id.concat("");
      /// @ts-expect-error    id must contain undefined
      p6.id.concat("");
      /// @ts-expect-error    id must contain undefined
      p7.id.concat("");
        if (p5.allowFullScreen === undefined) {}
      else if (p5.allowFullScreen === false) {}
      else if (p5.allowFullScreen === true) {}
      else {
          acceptsNever(p5.allowFullScreen);
      }
        if (p6.allowFullScreen === undefined) {}
      else if (p6.allowFullScreen === false) {}
      else if (p6.allowFullScreen === true) {}
      else {
          acceptsNever(p6.allowFullScreen);
      }
        if (p7.allowFullScreen === undefined) {}
      else if (p7.allowFullScreen === false) {}
      else if (p7.allowFullScreen === true) {}
      else {
          acceptsNever(p7.allowFullScreen);
      }
        // Make sure it works recursively
      const r1a = useMergedProps<HTMLInputElement>()({}, p1);
      const r1b = useMergedProps<HTMLInputElement>()(props, p1);
      const r2a = useMergedProps<HTMLInputElement>()({}, p2);
      const r2b = useMergedProps<HTMLInputElement>()(props, p2);
      const r3a = useMergedProps<HTMLInputElement>()({}, p3);
      const r3b = useMergedProps<HTMLInputElement>()(props, p3);
      const r4a = useMergedProps<HTMLInputElement>()({}, p4);
      const r4b = useMergedProps<HTMLInputElement>()(props, p4);
      const r5a = useMergedProps<HTMLInputElement>()({}, p5);
      const r5b = useMergedProps<HTMLInputElement>()(props, p5);
      const r6a = useMergedProps<HTMLInputElement>()({}, p6);
      const r6b = useMergedProps<HTMLInputElement>()(props, p6);
      const r7a = useMergedProps<HTMLInputElement>()({}, p7);
      const r7b = useMergedProps<HTMLInputElement>()(props, p7);
        r1a.id?.concat("");
      r1b.id?.concat("");
      r2a.id?.concat("");
      r2b.id?.concat("");
      // @ts-expect-error    id can't be anything but undefined
      r3a.id?.concat("");
      r3b.id?.concat("");
      /// @ts-expect-error    id can't be anything but undefined
      r4a.id?.concat("");
      r4b.id?.concat("");
        r5a.id?.concat("");
      r5b.id?.concat("");
      r6a.id?.concat("");
      r6b.id?.concat("");
      r7a.id?.concat("");
      r7b.id?.concat("");
       /// @ts-expect-error    id must contain undefined
      r5a.id.concat("");
      /// @ts-expect-error    id must contain undefined
      r5b.id.concat("");
      /// @ts-expect-error    id must contain undefined
      r6a.id.concat("");
      /// @ts-expect-error    id must contain undefined
      r6b.id.concat("");
      /// @ts-expect-error    id must contain undefined
      r7a.id.concat("");
      /// @ts-expect-error    id must contain undefined
      r7b.id.concat("");
        if (r5a.allowFullScreen === undefined) {}
      else if (r5a.allowFullScreen === false) {}
      else if (r5a.allowFullScreen === true) {}
      else {
          acceptsNever(r5a.allowFullScreen);
      }
        if (r5b.allowFullScreen === undefined) {}
      else if (r5b.allowFullScreen === false) {}
      else if (r5b.allowFullScreen === true) {}
      else {
          acceptsNever(r5b.allowFullScreen);
      }
        if (r6a.allowFullScreen === undefined) {}
      else if (r6a.allowFullScreen === false) {}
      else if (r6a.allowFullScreen === true) {}
      else {
          acceptsNever(r6a.allowFullScreen);
      }
        if (r6b.allowFullScreen === undefined) {}
      else if (r6b.allowFullScreen === false) {}
      else if (r6b.allowFullScreen === true) {}
      else {
          acceptsNever(r6b.allowFullScreen);
      }
        if (r7a.allowFullScreen === undefined) {}
      else if (r7a.allowFullScreen === false) {}
      else if (r7a.allowFullScreen === true) {}
      else {
          acceptsNever(r7a.allowFullScreen);
      }
        if (r7b.allowFullScreen === undefined) {}
      else if (r7b.allowFullScreen === false) {}
      else if (r7b.allowFullScreen === true) {}
      else {
          acceptsNever(r7b.allowFullScreen);
      }
   }
  function acceptsNever(n: never) {}
  */

  /*
  export function useRefElementProps<E extends Element>(r: UseRefElementReturnType<E>, ...otherProps: h.JSX.HTMLAttributes<E>[]): h.JSX.HTMLAttributes<E>[] {
      return [r.refElementReturn.propsStable, ...otherProps];
  }*/
  /**
   * Allows accessing the element a ref references as soon as it does so.
   * *This hook itself returns a hook*--useRefElementProps modifies the props that you were going to pass to an HTMLElement,
   * adding a RefCallback and merging it with any existing ref that existed on the props.
   *
   * Don't forget to provide the Element as the type argument!
   *
   * @returns The element, and the sub-hook that makes it retrievable.
   */
  function useRefElement(args) {
    const {
      refElementParameters: {
        onElementChange,
        onMount,
        onUnmount
      }
    } = args;
    useEnsureStability("useRefElement", onElementChange, onMount, onUnmount);
    // Called (indirectly) by the ref that the element receives.
    const handler = T$1((e, prevValue) => {
      const cleanup = onElementChange === null || onElementChange === void 0 ? void 0 : onElementChange(e, prevValue);
      if (prevValue) onUnmount === null || onUnmount === void 0 ? void 0 : onUnmount(prevValue);
      if (e) onMount === null || onMount === void 0 ? void 0 : onMount(e);
      return cleanup;
    }, []);
    // Let us store the actual (reference to) the element we capture
    const [getElement, setElement] = usePassiveState(handler, returnNull, runImmediately);
    const propsStable = _({
      ref: setElement
    });
    // Return both the element and the hook that modifies 
    // the props and allows us to actually find the element
    return {
      refElementReturn: {
        getElement,
        propsStable: propsStable.current
      }
    };
  }

  /*
  const activeElementUpdaters = new Map<Window | null | undefined, Set<undefined | ((e: Node | null) => void)>>();
  const lastActiveElementUpdaters = new Map<Window | null | undefined, Set<undefined | ((e: Node) => void)>>();
  const windowFocusedUpdaters = new Map<Window | null | undefined, Set<undefined | ((focused: boolean) => void)>>();
  const windowsFocusedUpdaters = new Map<Window | null | undefined, boolean>();*/
  const activeElementUpdaters = new Map();
  const lastActiveElementUpdaters = new Map();
  const windowFocusedUpdaters = new Map();
  const windowsFocusedUpdaters = new Map();
  //const microtasks = new Map<Set<any>, any>();
  // The focusin and focusout events often fire syncronously in the middle of running code.
  // E.G. calling element.focus() can cause a focusin event handler to immediately interrupt that code.
  // For the purpose of improving stability, we debounce all focus events to the next microtask.
  function forEachUpdater(window, map, value, reason) {
    const updaters = map.get(window);
    if (updaters) {
      //if (!microtasks.has(updatersKey)) {
      //debounceRendering(() => {
      //const updatersKey = map.get(window)!;
      //const value = microtasks.get(updatersKey);
      //microtasks.delete(updatersKey);
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
      //});
      //}
      //microtasks.set(updatersKey, value);
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
   * Allows you to inspect which element in the `document` currently has focus, which was most recently focused if none are currently, and whether or not the window has focus by returning the following functions:
   * * `getActiveElement()`
   * * `getLastActiveElement()`
   * * `getWindowFocused()`
   *
   * (The document's body receiving focus, like it does when you click on an empty area, is counted as no element having focus for all intents and purposes)
   *
   * This is a passive hook, so by default it returns getter functions that report this information but the component will not re-render by default when the active element changes.
   *
   * If you need the component to re-render when the active element changes, use the `on*Change` arguments to set some state on your end.
   */
  function useActiveElement(_ref3) {
    let {
      activeElementParameters: {
        onActiveElementChange,
        onLastActiveElementChange,
        onWindowFocusedChange,
        getDocument,
        getWindow
      }
    } = _ref3;
    useEnsureStability("useActiveElement", onActiveElementChange, onLastActiveElementChange, onWindowFocusedChange, getDocument, getWindow);
    h(() => {
      var _getWindow, _activeElementUpdater, _activeElementUpdater2, _activeElementUpdater3, _lastActiveElementUpd, _windowFocusedUpdater;
      const document = getDocument();
      const window = (_getWindow = getWindow === null || getWindow === void 0 ? void 0 : getWindow(document)) !== null && _getWindow !== void 0 ? _getWindow : document === null || document === void 0 ? void 0 : document.defaultView;
      if (((_activeElementUpdater = (_activeElementUpdater2 = activeElementUpdaters.get(window)) === null || _activeElementUpdater2 === void 0 ? void 0 : _activeElementUpdater2.size) !== null && _activeElementUpdater !== void 0 ? _activeElementUpdater : 0) === 0) {
        document === null || document === void 0 ? void 0 : document.addEventListener("focusin", focusin, {
          passive: true
        });
        document === null || document === void 0 ? void 0 : document.addEventListener("focusout", focusout, {
          passive: true
        });
        window === null || window === void 0 ? void 0 : window.addEventListener("focus", windowFocus, {
          passive: true
        });
        window === null || window === void 0 ? void 0 : window.addEventListener("blur", windowBlur, {
          passive: true
        });
      }
      // Add them even if they're undefined to more easily
      // manage the ">0 means don't add handlers" logic.
      const localActiveElementUpdaters = (_activeElementUpdater3 = activeElementUpdaters.get(window)) !== null && _activeElementUpdater3 !== void 0 ? _activeElementUpdater3 : new Set();
      const localLastActiveElementUpdaters = (_lastActiveElementUpd = lastActiveElementUpdaters.get(window)) !== null && _lastActiveElementUpd !== void 0 ? _lastActiveElementUpd : new Set();
      const localWindowFocusedUpdaters = (_windowFocusedUpdater = windowFocusedUpdaters.get(window)) !== null && _windowFocusedUpdater !== void 0 ? _windowFocusedUpdater : new Set();
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
      localActiveElementUpdaters.add(laeu);
      localLastActiveElementUpdaters.add(llaeu);
      localWindowFocusedUpdaters.add(lwfu);
      activeElementUpdaters.set(window, localActiveElementUpdaters);
      lastActiveElementUpdaters.set(window, localLastActiveElementUpdaters);
      windowFocusedUpdaters.set(window, localWindowFocusedUpdaters);
      return () => {
        activeElementUpdaters.get(window).delete(laeu);
        lastActiveElementUpdaters.get(window).delete(laeu);
        windowFocusedUpdaters.get(window).delete(lwfu);
        if (activeElementUpdaters.size === 0) {
          document === null || document === void 0 ? void 0 : document.removeEventListener("focusin", focusin);
          document === null || document === void 0 ? void 0 : document.removeEventListener("focusout", focusout);
          window === null || window === void 0 ? void 0 : window.removeEventListener("focus", windowFocus);
          window === null || window === void 0 ? void 0 : window.removeEventListener("blur", windowBlur);
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
  }

  /**
   * Allows a parent component to access information about certain
   * child components once they have rendered.
   *
   * This hook is designed to be lightweight, in that the parent keeps no state
   * and runs no effects.  Each child *does* run an effect, but with no state
   * changes unless you explicitly request them.
   *
   *
   */
  function useManagedChildren(parentParameters) {
    const {
      managedChildrenParameters: {
        onAfterChildLayoutEffect,
        onChildrenMountChange,
        onChildCountChange
      },
      ...rest
    } = parentParameters;
    useEnsureStability("useManagedChildren", onAfterChildLayoutEffect, onChildrenMountChange, onChildCountChange);
    usePassiveState(onChildCountChange, returnZero, runImmediately);
    const getHighestIndex = T$1(() => {
      return managedChildrenArray.current.highestIndex;
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
        if (child) f(child);
      }
      for (const field in managedChildrenArray.current.rec) {
        const child = managedChildrenArray.current.rec[field];
        if (child) f(child);
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
    const remoteULEChildChangedCausers = _(new Set());
    const remoteULEChildChanged = T$1(index => {
      if (remoteULEChildChangedCausers.current.size == 0) {
        if (!!onAfterChildLayoutEffect) {
          debounceRendering(() => {
            onAfterChildLayoutEffect === null || onAfterChildLayoutEffect === void 0 ? void 0 : onAfterChildLayoutEffect(remoteULEChildChangedCausers.current);
            remoteULEChildChangedCausers.current.clear();
          });
        }
      }
      remoteULEChildChangedCausers.current.add(index);
      return () => {};
    }, [/* Must remain stable */]);
    const remoteULEChildMounted = T$1((index, mounted) => {
      if (!hasRemoteULEChildMounted.current) {
        hasRemoteULEChildMounted.current = {
          mounts: new Set(),
          unmounts: new Set()
        };
        if (onChildCountChange || onChildrenMountChange) {
          debounceRendering(() => {
            onChildrenMountChange === null || onChildrenMountChange === void 0 ? void 0 : onChildrenMountChange(hasRemoteULEChildMounted.current.mounts, hasRemoteULEChildMounted.current.unmounts);
            onChildCountChange === null || onChildCountChange === void 0 ? void 0 : onChildCountChange(getChildren().getHighestIndex() + 1);
            hasRemoteULEChildMounted.current = null;
          });
        }
      }
      if (mounted) {
        if (typeof index == "number") managedChildrenArray.current.highestIndex = Math.max(managedChildrenArray.current.highestIndex, index);
      } else {
        if (typeof index == "number") {
          delete managedChildrenArray.current.arr[index];
          let shave = 0;
          while (shave <= managedChildrenArray.current.arr.length && managedChildrenArray.current.arr[managedChildrenArray.current.arr.length - 1 - shave] === undefined) {
            ++shave;
          }
          managedChildrenArray.current.arr.splice(managedChildrenArray.current.arr.length - shave, shave);
        } else delete managedChildrenArray.current.rec[index];
        if (typeof index == "number") managedChildrenArray.current.highestIndex = managedChildrenArray.current.arr.length - 1;
      }
      hasRemoteULEChildMounted.current[mounted ? "mounts" : "unmounts"].add(index);
    }, [/* Must remain stable */]);
    const managedChildren = useStableObject({
      ...{
        _: managedChildrenArray.current
      },
      forEach: forEachChild,
      getAt: getManagedChildInfo,
      getHighestIndex: getHighestIndex,
      arraySlice: T$1(() => {
        return managedChildrenArray.current.arr.slice();
      }, [])
    });
    const getChildren = T$1(() => managedChildren, []);
    return {
      context: useStableObject({
        managedChildContext: useStableObject({
          managedChildrenArray: managedChildrenArray.current,
          remoteULEChildMounted,
          remoteULEChildChanged,
          getChildren
        })
      }),
      managedChildrenReturn: {
        getChildren
      }
    };
  }
  function useManagedChild(info, managedChildParameters) {
    const {
      context: {
        managedChildContext: {
          getChildren,
          managedChildrenArray,
          remoteULEChildMounted,
          remoteULEChildChanged
        }
      }
    } = info;
    const index = managedChildParameters.index;
    // Any time our child props change, make that information available
    // the parent if they need it.
    // The parent can listen for all updates and only act on the ones it cares about,
    // and multiple children updating in the same tick will all be sent at once.
    s(() => {
      // Insert this information in-place
      if (typeof index == "number") {
        managedChildrenArray.arr[index] = {
          ...managedChildParameters
        };
      } else {
        managedChildrenArray.rec[index] = {
          ...managedChildParameters
        };
      }
      return remoteULEChildChanged(index);
    }, [...Object.entries(info).flat(9)]); // 9 is infinity, right? Sure. Unrelated: TODO.
    // When we mount, notify the parent via queueMicrotask
    // (every child does this, so everything's coordinated to only queue a single microtask per tick)
    // Do the same on unmount.
    // Note: It's important that this comes AFTER remoteULEChildChanged
    // so that remoteULEChildMounted has access to all the info on mount.
    s(() => {
      remoteULEChildMounted === null || remoteULEChildMounted === void 0 ? void 0 : remoteULEChildMounted(index, true);
      return () => remoteULEChildMounted === null || remoteULEChildMounted === void 0 ? void 0 : remoteULEChildMounted(index, false);
    }, [index]);
    return {
      managedChildReturn: {
        getChildren
      }
    };
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
   *
   *
   * @param param0
   * @returns
   */
  function useChildrenFlag(_ref4) {
    let {
      getChildren,
      initialIndex,
      closestFit,
      onIndexChange,
      getAt,
      setAt,
      isValid
    } = _ref4;
    useEnsureStability("useChildrenFlag", onIndexChange, getAt, setAt, isValid);
    // TODO (maybe?): Even if there is an initial index, it's not set until mount. Is that fine?
    const [getCurrentIndex, setCurrentIndex] = usePassiveState(onIndexChange);
    const [getRequestedIndex, setRequestedIndex] = usePassiveState(null);
    //    const getFitNullToZero = useStableGetter(fitNullToZero);
    // Shared between onChildrenMountChange and changeIndex, not public (but could be I guess)
    const getClosestFit = T$1(requestedIndex => {
      const children = getChildren();
      let closestDistance = Infinity;
      let closestIndex = null;
      children.forEach(child => {
        if (isValid(child)) {
          const newDistance = Math.abs(child.index - requestedIndex);
          if (newDistance < closestDistance || newDistance == closestDistance && child.index < requestedIndex) {
            closestDistance = newDistance;
            closestIndex = child.index;
          }
        }
      });
      return closestIndex;
    }, [/* Must remain stable! */]);
    // Any time a child mounts/unmounts, we need to double-check to see if that affects 
    // the "currently selected" (or whatever) index.  The two cases we're looking for:
    // 1. The currently selected child unmounted
    // 2. A child mounted, and it mounts with the index we're looking for
    const reevaluateClosestFit = useStableCallback(() => {
      const children = getChildren();
      const requestedIndex = getRequestedIndex();
      const currentIndex = getCurrentIndex();
      const currentChild = currentIndex == null ? null : children.getAt(currentIndex);
      if (requestedIndex != null && closestFit && (requestedIndex != currentIndex || currentChild == null || !isValid(currentChild))) {
        const closestFitIndex = getClosestFit(requestedIndex);
        setCurrentIndex(closestFitIndex, undefined);
        if (currentChild) setAt(currentChild, false, closestFitIndex, currentIndex);
        if (closestFitIndex != null) {
          const closestFitChild = children.getAt(closestFitIndex);
          console.assert(closestFitChild != null, "Internal logic???");
          setAt(closestFitChild, true, closestFitIndex, currentIndex);
        }
      }
    });
    const changeIndex = T$1((arg, reason) => {
      const children = getChildren();
      const requestedIndex = arg instanceof Function ? arg(getRequestedIndex()) : arg;
      //if (requestedIndex == null && getFitNullToZero())
      //    requestedIndex = 0;
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
        if (newMatchingChild && isValid(newMatchingChild)) {
          setCurrentIndex(requestedIndex, reason);
          if (oldMatchingChild) setAt(oldMatchingChild, false, requestedIndex, currentIndex);
          setAt(newMatchingChild, true, requestedIndex, currentIndex);
          return requestedIndex;
        } else {
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
    s(() => {
      changeIndex(initialIndex !== null && initialIndex !== void 0 ? initialIndex : null, undefined);
    }, []);
    return {
      changeIndex,
      reevaluateClosestFit,
      getCurrentIndex
    };
  }

  /*!
  * tabbable 5.3.3
  * @license MIT, https://github.com/focus-trap/tabbable/blob/master/LICENSE
  */
  var candidateSelectors = ['input', 'select', 'textarea', 'a[href]', 'button', '[tabindex]:not(slot)', 'audio[controls]', 'video[controls]', '[contenteditable]:not([contenteditable="false"])', 'details>summary:first-of-type', 'details'];
  var NoElement = typeof Element === 'undefined';
  var matches = NoElement ? function () {} : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
  var getRootNode = !NoElement && Element.prototype.getRootNode ? function (element) {
    return element.getRootNode();
  } : function (element) {
    return element.ownerDocument;
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
    } // The root node is the shadow root if the node is in a shadow DOM; some document otherwise
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
    // If rootNode is not a shadow root, it won't have a host, and so rootNode should be the
    //  document (per the docs) and while it's a Document-type object, that document does not
    //  appear to be the same as the node's `ownerDocument` for some reason, so it's safer
    //  to ignore the rootNode at this point, and use `node.ownerDocument`. Otherwise,
    //  using `rootNode.contains(node)` will _always_ be true we'll get false-positives when
    //  node is actually detached.

    var nodeRootHost = getRootNode(node).host;
    var nodeIsAttached = (nodeRootHost === null || nodeRootHost === void 0 ? void 0 : nodeRootHost.ownerDocument.contains(nodeRootHost)) || node.ownerDocument.contains(node);
    if (!displayCheck || displayCheck === 'full') {
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
      } // else, `getShadowRoot` might be true, but all that does is enable shadow DOM support
      //  (i.e. it does not also presume that all nodes might have undisclosed shadows); or
      //  it might be a falsy value, which means shadow DOM support is disabled
      // Since we didn't find it sitting in an undisclosed shadow (or shadows are disabled)
      //  now we can just test to see if it would normally be visible or not, provided it's
      //  attached to the main document.
      // NOTE: We must consider case where node is inside a shadow DOM and given directly to
      //  `isTabbable()` or `isFocusable()` -- regardless of `getShadowRoot` option setting.

      if (nodeIsAttached) {
        // this works wherever the node is: if there's at least one client rect, it's
        //  somehow displayed; it also covers the CSS 'display: contents' case where the
        //  node itself is hidden in place of its contents; and there's no need to search
        //  up the hierarchy either
        return !node.getClientRects().length;
      } // Else, the node isn't attached to the document, which means the `getClientRects()`
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
    } else if (displayCheck === 'non-zero-area') {
      // NOTE: Even though this tests that the node's client rect is non-zero to determine
      //  whether it's displayed, and that a detached node will __always__ have a zero-area
      //  client rect, we don't special-case for whether the node is attached or not. In
      //  this mode, we do want to consider nodes that have a zero area to be hidden at all
      //  times, and that includes attached or not.
      return isZeroArea(node);
    } // visible, as far as we can tell, or per current `displayCheck` mode

    return false;
  }; // form fields (nested) inside a disabled fieldset are not focusable/tabbable
  //  unless they are in the _first_ <legend> element of the top-most disabled
  //  fieldset

  var isDisabledFromFieldset = function isDisabledFromFieldset(node) {
    if (/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(node.tagName)) {
      var parentNode = node.parentElement; // check if `node` is contained in a disabled <fieldset>

      while (parentNode) {
        if (parentNode.tagName === 'FIELDSET' && parentNode.disabled) {
          // look for the first <legend> among the children of the disabled <fieldset>
          for (var i = 0; i < parentNode.children.length; i++) {
            var child = parentNode.children.item(i); // when the first <legend> (in document order) is found

            if (child.tagName === 'LEGEND') {
              // if its parent <fieldset> is not nested in another disabled <fieldset>,
              // return whether `node` is a descendant of its first <legend>
              return matches.call(parentNode, 'fieldset[disabled] *') ? true : !child.contains(node);
            }
          } // the disabled <fieldset> containing `node` has no <legend>

          return true;
        }
        parentNode = parentNode.parentElement;
      }
    } // else, node's tabbable/focusable state should not be affected by a fieldset's
    //  enabled/disabled state

    return false;
  };
  var isNodeMatchingSelectorFocusable = function isNodeMatchingSelectorFocusable(options, node) {
    if (node.disabled || isHiddenInput(node) || isHidden(node, options) ||
    // For a details element with a summary, the summary element gets the focus
    isDetailsWithSummary(node) || isDisabledFromFieldset(node)) {
      return false;
    }
    return true;
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
  var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};
  (function (module, exports) {
    (function (global, factory) {
      factory();
    })(commonjsGlobal, function () {
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
    });
  })();
  function getDocument$1(element) {
    var _ref5, _ref6, _element$ownerDocumen;
    return (_ref5 = (_ref6 = (_element$ownerDocumen = element === null || element === void 0 ? void 0 : element.ownerDocument) !== null && _element$ownerDocumen !== void 0 ? _element$ownerDocumen : document) !== null && _ref6 !== void 0 ? _ref6 : window.document) !== null && _ref5 !== void 0 ? _ref5 : globalThis.document;
  }
  function blockingElements() {
    return getDocument$1().$blockingElements;
  }
  /**
   * Allows an element to trap focus by applying the "inert" attribute to all sibling, aunt, and uncle nodes.
   *
   * Automatically handles consecutive calls with a loosely applied stack operation
   * (specifically via `blockingElements`, with a small polyfill because I'm not sure how long
   * it'll take to find its way into the spec, if ever)
   * @param target
   */
  function useBlockingElement(enabled, getTarget) {
    const stableGetTarget = useStableCallback(getTarget);
    const getDocument = useStableCallback(() => {
      var _getTarget$ownerDocum, _getTarget;
      return (_getTarget$ownerDocum = (_getTarget = getTarget()) === null || _getTarget === void 0 ? void 0 : _getTarget.ownerDocument) !== null && _getTarget$ownerDocum !== void 0 ? _getTarget$ownerDocum : globalThis.document;
    });
    useActiveElement({
      activeElementParameters: {
        getDocument,
        onLastActiveElementChange: useStableCallback(e => {
          if (e) {
            if (enabled) setLastActiveWhenOpen(e);else setLastActiveWhenClosed(e);
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
    s(() => {
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
  }

  //const elementsToRestoreFocusTo = new Map<Element | null, (Node & HTMLOrSVGElement)>();
  function useFocusTrap(_ref7) {
    let {
      focusTrapParameters: {
        onlyMoveFocus,
        trapActive,
        focusPopup: focusSelfUnstable,
        focusOpener: focusOpenerUnstable
      },
      refElementParameters: {
        onElementChange,
        ...refElementParameters
      }
    } = _ref7;
    const focusSelf = useStableCallback(focusSelfUnstable);
    const focusOpener = useStableCallback(focusOpenerUnstable);
    h(() => {
      if (trapActive) {
        let top = getTop();
        getLastActiveWhenOpen();
        {
          var _top;
          (_top = top) !== null && _top !== void 0 ? _top : top = refElementReturn.getElement();
          console.assert(!!top);
          if (top) focusSelf(top, () => findFirstFocusable(top));
        }
      } else {
        const lastActive = getLastActiveWhenClosed();
        if (lastActive) focusOpener(lastActive);
      }
    }, [trapActive]);
    const {
      refElementReturn
    } = useRefElement({
      refElementParameters: {
        onElementChange,
        ...refElementParameters
      }
    });
    const {
      getElement
    } = refElementReturn;
    const {
      getTop,
      getLastActiveWhenClosed,
      getLastActiveWhenOpen
    } = useBlockingElement(trapActive && !onlyMoveFocus, getElement);
    return {
      refElementReturn,
      focusTrapReturn: {
        propsUnstable: {
          "aria-modal": trapActive ? "true" : undefined
        }
      }
    };
  }
  /**
   * Returns the first focusable element contained within the given node, or null if none are found.
   * @param element
   * @returns
   */
  function findFirstFocusable(element) {
    return findFirstCondition(element, node => node instanceof Element && isFocusable(node));
  }
  function findFirstCondition(element, filter) {
    var _element;
    if (element && filter(element)) return element;
    console.assert(!!element);
    (_element = element) !== null && _element !== void 0 ? _element : element = document.body;
    const treeWalker = document.createTreeWalker(element, NodeFilter.SHOW_ELEMENT, {
      acceptNode: node => filter(node) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
    });
    const firstFocusable = treeWalker.firstChild();
    return firstFocusable;
  }

  /** Arguments passed to the child 'useLinearNavigationChild` */
  //export interface UseLinearNavigationChildInfo { }
  /**
   * When used in tandem with `useRovingTabIndex`, allows control of
   * the tabbable index with the arrow keys.
   *
   * @see useListNavigation, which packages everything up together.
   */
  function useLinearNavigation(_ref8) {
    let {
      rovingTabIndexReturn,
      linearNavigationParameters
    } = _ref8;
    const {
      getHighestIndex,
      indexDemangler,
      indexMangler,
      isValid,
      navigatePastEnd,
      navigatePastStart
    } = linearNavigationParameters;
    const {
      getTabbableIndex,
      setTabbableIndex
    } = rovingTabIndexReturn;
    const navigateAbsolute = T$1((i, e, fromUserInteraction) => {
      const target = indexDemangler(i);
      const {
        value
      } = tryNavigateToIndex({
        isValid,
        highestChildIndex: getHighestIndex(),
        indexDemangler,
        indexMangler,
        searchDirection: -1,
        target
      });
      setTabbableIndex(value, e, fromUserInteraction);
    }, []);
    const navigateToFirst = useStableCallback((e, fromUserInteraction) => {
      navigateAbsolute(0, e, fromUserInteraction);
    });
    const navigateToLast = useStableCallback((e, fromUserInteraction) => {
      navigateAbsolute(getHighestIndex(), e, fromUserInteraction);
    });
    const navigateRelative2 = useStableCallback((e, offset, fromUserInteraction, mode) => {
      var _getTabbableIndex;
      const original = (_getTabbableIndex = getTabbableIndex()) !== null && _getTabbableIndex !== void 0 ? _getTabbableIndex : 0;
      const {
        status,
        value
      } = tryNavigateToIndex({
        isValid,
        highestChildIndex: getHighestIndex(),
        indexDemangler,
        indexMangler,
        searchDirection: Math.sign(offset) || 1,
        target: indexDemangler(indexMangler(original) + offset)
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
        setTabbableIndex(value, e, fromUserInteraction);
        return "stop";
      }
    });
    const navigateToNext = useStableCallback((e, fromUserInteraction) => {
      return navigateRelative2(e, 1, fromUserInteraction, "single");
      // setTabbableIndex(navigateRelative((getTabbableIndex() ?? 0), +1), fromUserInteraction)
    });

    const navigateToPrev = useStableCallback((e, fromUserInteraction) => {
      return navigateRelative2(e, -1, fromUserInteraction, "single");
      // setTabbableIndex(navigateRelative((getTabbableIndex() ?? 0), +1), fromUserInteraction)
    });

    const getDisableArrowKeys = useStableGetter(linearNavigationParameters.disableArrowKeys);
    const getDisableHomeEndKeys = useStableGetter(linearNavigationParameters.disableHomeEndKeys);
    const getNavigationDirection = useStableGetter(linearNavigationParameters.navigationDirection);
    const getPageNavigationSize = useStableGetter(linearNavigationParameters.pageNavigationSize);
    const stableProps = _({
      onKeyDown: e => {
        // Not handled by typeahead (i.e. assume this is a keyboard shortcut)
        if (e.ctrlKey || e.metaKey) return;
        //const info = getLogicalDirectionInfo();
        const navigationDirection = getNavigationDirection();
        const disableArrowKeys = getDisableArrowKeys();
        const disableHomeEndKeys = getDisableHomeEndKeys();
        const pageNavigationSize = getPageNavigationSize();
        const allowsVerticalNavigation = navigationDirection == "vertical" || navigationDirection == "either";
        const allowsHorizontalNavigation = navigationDirection == "horizontal" || navigationDirection == "either";
        let truePageNavigationSize = pageNavigationSize;
        if (truePageNavigationSize < 1) {
          truePageNavigationSize = Math.round(pageNavigationSize * Math.max(100, getHighestIndex() + 1));
        }
        switch (e.key) {
          case "ArrowUp":
            {
              //const propName = (info?.blockOrientation === "vertical" ? "blockDirection" : "inlineDirection");
              const directionAllowed = !disableArrowKeys && allowsVerticalNavigation;
              if (directionAllowed) {
                const result = navigateToPrev(e, true);
                if (result != "passthrough") {
                  e.preventDefault();
                  e.stopPropagation();
                }
              }
              break;
            }
          case "ArrowDown":
            {
              const directionAllowed = !disableArrowKeys && allowsVerticalNavigation;
              if (directionAllowed) {
                const result = navigateToNext(e, true);
                if (result != "passthrough") {
                  e.preventDefault();
                  e.stopPropagation();
                }
              }
              break;
            }
          case "ArrowLeft":
            {
              const directionAllowed = !disableArrowKeys && allowsHorizontalNavigation;
              if (directionAllowed) {
                const result = navigateToPrev(e, true);
                if (result != "passthrough") {
                  e.preventDefault();
                  e.stopPropagation();
                }
              }
              break;
            }
          case "ArrowRight":
            {
              const directionAllowed = !disableArrowKeys && allowsHorizontalNavigation;
              if (directionAllowed) {
                const result = navigateToNext(e, true);
                if (result != "passthrough") {
                  e.preventDefault();
                  e.stopPropagation();
                }
              }
              break;
            }
          case "PageUp":
            {
              if (truePageNavigationSize > 0) {
                navigateRelative2(e, -truePageNavigationSize, true, "page");
                e.preventDefault();
                e.stopPropagation();
              }
              break;
            }
          case "PageDown":
            {
              if (truePageNavigationSize > 0) {
                navigateRelative2(e, truePageNavigationSize, true, "page");
                e.preventDefault();
                e.stopPropagation();
              }
              break;
            }
          case "Home":
            if (!disableHomeEndKeys) {
              navigateToFirst(e, true);
              e.preventDefault();
              e.stopPropagation();
            }
            break;
          case "End":
            if (!disableHomeEndKeys) {
              navigateToLast(e, true);
              e.preventDefault();
              e.stopPropagation();
            }
            break;
        }
      }
    });
    return {
      linearNavigationReturn: {
        propsStable: stableProps.current
      }
    };
  }
  function tryNavigateToIndex(_ref9) {
    let {
      isValid,
      highestChildIndex: upper,
      searchDirection,
      indexDemangler,
      indexMangler,
      target
    } = _ref9;
    //const upper = children.getHighestIndex();
    const lower = 0;
    if (searchDirection === -1) {
      while (target >= lower && !isValid(target)) target = indexDemangler(indexMangler(target) - 1);
      return target < lower ? {
        value: indexDemangler(lower),
        status: "past-start"
      } : {
        value: target,
        status: "normal"
      };
    } else if (searchDirection === 1) {
      while (target <= upper && !isValid(target)) target = indexDemangler(indexMangler(target) + 1);
      return target > upper ? {
        value: indexDemangler(upper),
        status: "past-end"
      } : {
        value: target,
        status: "normal"
      };
    } else {
      return {
        value: lower,
        status: "normal"
      };
    }
  }

  /**
   * Slightly enhanced version of `useState` that includes a getter that remains constant
   * (i.e. you can use it in `useEffect` and friends without it being a dependency).
   *
   * @param initialState
   * @returns
   */
  function useState(initialState) {
    // We keep both, but overrride the `setState` functionality
    const [state, setStateP] = p(initialState);
    const ref = _(state);
    // Hijack the normal setter function 
    // to also set our ref to the new value
    const setState = T$1(value => {
      if (typeof value === "function") {
        const callback = value;
        setStateP(prevValue => {
          const nextValue = callback(prevValue);
          ref.current = nextValue;
          return nextValue;
        });
      } else {
        ref.current = value;
        setStateP(value);
      }
    }, []);
    const getState = () => {
      return ref.current;
    };
    console.assert(ref.current === state || typeof state === "number" && isNaN(state));
    return [state, setState, getState];
  }

  /**
   * Implements a roving tabindex system where only one "focusable"
   * component in a set is able to receive a tab focus. *Which*
   * of those elements receives focus is determined by you, but it's
   * recommended to offload that logic then to another hook, like
   * `useLinearNavigation`, which lets you change the tabbable
   * element with the arrow keys, `useTypeaheadNavigation`, which
   * lets you change the tabbable index with typeahead, or
   * `useListNavigation` if you just want everything bundled together.
   *
   * Note that the child hook returned by this function must be used
   * by every child that uses this roving tabindex logic.  The
   * prop-modifying hook *that* hook returns should then be used
   * on the child's element, as well as any other elements you'd like
   * to be explicitly made untabbable too.
   *
   * `shouldFocusOnChange` should return true if focus is
   * contained within whatever element contains the roving tab index.
   * Generally as simple as the following:
   * ```
   * const [focusedInner, setFocusedInner] = useState(false);
   * const { useHasFocusProps } = useHasFocus<ParentElement>({ setFocusedInner });
   * const focusOnChange = (focusedInner != false);
   * ```
   * It's not included here because `useRovingTabIndex` doesn't know
   * anything about the container element, only children elements.
   * And just as well! Children should be allowed at the root,
   * regardless of if it's the whole app or just a given component.
   */
  function useRovingTabIndex(_ref10) {
    let {
      managedChildrenReturn: {
        getChildren
      },
      rovingTabIndexParameters: {
        untabbable,
        initiallyTabbedIndex,
        onTabbableIndexChange
      },
      ..._void1
    } = _ref10;
    const getUntabbable = useStableGetter(untabbable);
    //initiallyTabbedIndex ??= 0;
    // Override the actual setter to include some extra logic related to avoiding hidden children, 
    // what to do when we're untabbable, what to do when we're tabbable but given `null`, etc.
    const setTabbableIndex = useStableCallback((updater, reason, fromUserInteraction) => {
      const children = getChildren();
      // Notify the relevant children that they should become tabbable/untabbable,
      // but also handle focus management when we changed due to user interaction
      return setTabbableIndex3(f, reason);
      function f(prevIndex) {
        let nextIndex = typeof updater === "function" ? updater(prevIndex !== null && prevIndex !== void 0 ? prevIndex : null) : updater;
        const untabbable = getUntabbable();
        if (nextIndex != null) setLastNonNullIndex(nextIndex);
        if (untabbable) return null;
        if (prevIndex != nextIndex) {
          const nextChild = nextIndex == null ? null : children.getAt(nextIndex);
          if (nextChild !== null && nextChild !== void 0 && nextChild.hidden) {
            return prevIndex !== null && prevIndex !== void 0 ? prevIndex : untabbable ? null : 0;
          }
          if (nextChild != null && fromUserInteraction) {
            const element = nextChild.getElement();
            if (element) {
              if (document.activeElement == null || !element.contains(document.activeElement)) nextChild.focusSelf(element);
            }
          }
        }
        if (nextIndex != null) setLastNonNullIndex(nextIndex);
        return nextIndex !== null && nextIndex !== void 0 ? nextIndex : untabbable ? null : 0;
      }
    }, []);
    // When we switch from tabbable to non/tabbable, we really want to remember the last tabbable child.
    // So every time we change the index for any reason, record that change as a back up here that can be restored.
    const [getLastNonNullIndex, setLastNonNullIndex] = usePassiveState(null, T$1(() => initiallyTabbedIndex !== null && initiallyTabbedIndex !== void 0 ? initiallyTabbedIndex : 0, []));
    /*useEffect(() => {
        const t = getTabbableIndex();
        if (!untabbable && t != null) {
            if (t == 0)
                debugger;
            lastNonNullIndex.current = t;
        }
    });*/
    // Any time we switch to being untabbable, set the current tabbable index accordingly.
    h(() => {
      if (untabbable) setTabbableIndex3(null, undefined);else {
        setTabbableIndex3(getLastNonNullIndex(), undefined);
      }
    }, [untabbable]);
    // Boilerplate related to notifying individual children when they become tabbable/untabbable
    const getTabbableAt = T$1(m => {
      return m.getTabbable();
    }, []);
    const setTabbableAt = T$1((m, t) => {
      m.setTabbable(t);
    }, []);
    const isTabbableValid = T$1(m => {
      return !m.hidden;
    }, []);
    const {
      changeIndex: setTabbableIndex3,
      getCurrentIndex: getTabbableIndex,
      reevaluateClosestFit
    } = useChildrenFlag({
      initialIndex: initiallyTabbedIndex !== null && initiallyTabbedIndex !== void 0 ? initiallyTabbedIndex : untabbable ? null : 0,
      onIndexChange: onTabbableIndexChange,
      getChildren,
      closestFit: true,
      getAt: getTabbableAt,
      isValid: isTabbableValid,
      setAt: setTabbableAt
    });
    const focusSelf = T$1(reason => {
      const children = getChildren();
      const index = getTabbableIndex();
      if (index != null) {
        var _children$getAt, _children$getAt2, _children$getAt2$focu;
        const element = (_children$getAt = children.getAt(index)) === null || _children$getAt === void 0 ? void 0 : _children$getAt.getElement();
        (_children$getAt2 = children.getAt(index)) === null || _children$getAt2 === void 0 ? void 0 : (_children$getAt2$focu = _children$getAt2.focusSelf) === null || _children$getAt2$focu === void 0 ? void 0 : _children$getAt2$focu.call(_children$getAt2, element);
      } else setTabbableIndex(null, reason, true);
    }, []);
    const rovingTabIndexChildContext = useStableObject({
      setTabbableIndex,
      getInitiallyTabbedIndex: T$1(() => {
        return initiallyTabbedIndex !== null && initiallyTabbedIndex !== void 0 ? initiallyTabbedIndex : untabbable ? null : 0;
      }, []),
      reevaluateClosestFit
    });
    return {
      managedChildrenParameters: {
        onChildrenMountChange: reevaluateClosestFit
      },
      rovingTabIndexReturn: {
        setTabbableIndex,
        getTabbableIndex,
        focusSelf
      },
      rovingTabIndexChildContext
    };
  }
  function useRovingTabIndexChild(_ref11) {
    let {
      managedChildParameters: {
        index,
        ..._void2
      },
      rovingTabIndexChildContext: {
        reevaluateClosestFit,
        setTabbableIndex,
        getInitiallyTabbedIndex
      },
      rovingTabIndexChildParameters
    } = _ref11;
    const {
      hidden,
      ..._void1
    } = rovingTabIndexChildParameters;
    const [tabbable, setTabbable, getTabbable] = useState(getInitiallyTabbedIndex() === index);
    h(() => {
      reevaluateClosestFit();
    }, [!!hidden]);
    return {
      hasCurrentFocusParameters: {
        onCurrentFocusedInnerChanged: useStableCallback((focused, _prevFocused, e) => {
          if (focused) {
            setTabbableIndex(index, e, false);
          }
        })
      },
      rovingTabIndexChildReturn: {
        propsUnstable: {
          tabIndex: tabbable ? 0 : -1
        },
        tabbable,
        getTabbable,
        setTabbable
      }
    };
  }
  function useTextContent(_ref12) {
    let {
      refElementReturn: {
        getElement
      },
      textContentParameters: {
        getText,
        onTextContentChange,
        hidden
      }
    } = _ref12;
    const [getTextContent, setTextContent] = usePassiveState(onTextContentChange, returnNull, runImmediately);
    h(() => {
      if (!hidden) {
        const element = getElement();
        if (element) {
          const textContent = getText(element);
          if (textContent) {
            setTextContent(textContent);
          }
        }
      }
    });
    return {
      textContentReturn: {
        getTextContent
      }
    };
  }

  /**
   * Allows for the selection of a managed child by typing the given text associated with it.
   *
   * @see useListNavigation, which packages everything up together.
   */
  function useTypeaheadNavigation(_ref13) {
    let {
      typeaheadNavigationParameters: {
        collator,
        typeaheadTimeout,
        noTypeahead,
        isValid,
        ..._void3
      },
      rovingTabIndexReturn: {
        getTabbableIndex: getIndex,
        setTabbableIndex: setIndex,
        ..._void1
      },
      ..._void2
    } = _ref13;
    // For typeahead, keep track of what our current "search" string is (if we have one)
    // and also clear it every 1000 ms since the last time it changed.
    // Next, keep a mapping of typeahead values to indices for faster searching.
    // And, for the user's sake, let them know when their typeahead can't match anything anymore
    const [getCurrentTypeahead, setCurrentTypeahead] = usePassiveState(useStableCallback((currentTypeahead, prev, reason) => {
      const handle = setTimeout(() => {
        setCurrentTypeahead(null, undefined);
        setTypeaheadStatus("none");
      }, typeaheadTimeout !== null && typeaheadTimeout !== void 0 ? typeaheadTimeout : 1000);
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
    s(() => {
      if (nextTypeaheadChar !== null) {
        setCurrentTypeahead(typeahead => (typeahead !== null && typeahead !== void 0 ? typeahead : "") + nextTypeaheadChar, undefined);
        setNextTypeaheadChar(null);
      }
    }, [nextTypeaheadChar]);
    const comparatorShared = useStableCallback((safeLhs, safeRhs) => {
      var _safeRhs$toLowerCase;
      let compare;
      // For the purposes of typeahead, only compare a string of the same size as our currently typed string.
      // By normalizing them first, we ensure this byte-by-byte handling of raw character data works out okay.
      safeLhs = safeLhs.normalize("NFD");
      safeRhs = safeRhs.normalize("NFD");
      if (collator) compare = collator.compare(safeLhs, safeRhs);else compare = safeLhs.toLowerCase().localeCompare((_safeRhs$toLowerCase = safeRhs.toLowerCase()) !== null && _safeRhs$toLowerCase !== void 0 ? _safeRhs$toLowerCase : "");
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
        // During typeahead, all strings longer than ours should be truncated
        // so that they're all considered equally by that point.
        return comparatorShared(lhs, rhs.text.substring(0, lhs.length));
      }
      return lhs - rhs;
    });
    const isDisabled = useStableGetter(noTypeahead);
    const propsStable = _({
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
          var _getCurrentTypeahead;
          if (key == " " && ((_getCurrentTypeahead = getCurrentTypeahead()) !== null && _getCurrentTypeahead !== void 0 ? _getCurrentTypeahead : "").trim().length == 0) ;else {
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
    });
    // Handle changes in typeahead that cause changes to the tabbable index
    /* useEffect(() => {
         
     }, [currentTypeahead]);*/
    return {
      typeaheadNavigationChildContext: useStableObject({
        typeaheadNavigationChildParameters: useStableObject({
          insertingComparator,
          sortedTypeaheadInfo: sortedTypeaheadInfo.current
        })
      }),
      typeaheadNavigationReturn: {
        getCurrentTypeahead,
        typeaheadStatus,
        propsStable: propsStable.current
      }
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
            I dunno. Going back to the start is the simplist though.
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
          const updateBestFit = u => {
            var _getIndex;
            if (!isValid(u)) return;
            if (lowestUnsortedIndexAll == null || u < lowestUnsortedIndexAll) {
              lowestUnsortedIndexAll = u;
              lowestSortedIndexAll = i;
            }
            if ((lowestUnsortedIndexNext == null || u < lowestUnsortedIndexNext) && u > ((_getIndex = getIndex()) !== null && _getIndex !== void 0 ? _getIndex : -Infinity)) {
              lowestUnsortedIndexNext = u;
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
          if (lowestUnsortedIndexNext !== null) setIndex(sortedTypeaheadInfo.current[lowestSortedIndexNext].unsortedIndex, reason, true);else if (lowestUnsortedIndexAll !== null) setIndex(sortedTypeaheadInfo.current[lowestSortedIndexAll].unsortedIndex, reason, true);
        }
      }
    }
  }
  function useTypeaheadNavigationChild(_ref14) {
    let {
      managedChildParameters: {
        index,
        ...void1
      },
      textContentParameters: {
        getText,
        hidden,
        ...void5
      },
      typeaheadNavigationChildContext: {
        typeaheadNavigationChildParameters: {
          sortedTypeaheadInfo,
          insertingComparator,
          ...void2
        }
      },
      refElementReturn: {
        getElement,
        ...void3
      },
      //typeaheadNavigationChildParameters: { ...void5 },
      ...void4
    } = _ref14;
    const {
      textContentReturn
    } = useTextContent({
      refElementReturn: {
        getElement
      },
      textContentParameters: {
        getText,
        hidden,
        onTextContentChange: T$1(text => {
          if (text) {
            // Find where to insert this item.
            // Because all index values should be unique, the returned sortedIndex
            // should always refer to a new location (i.e. be negative)                
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
      textContentReturn
    };
  }
  /**
   * Your usual binary search implementation.
   *
   * It's used here to quickly find a good spot to start searching for our next typeahead candidate.
   * @param array The array to search through
   * @param wanted The value you'd like to find
   * @param comparator Compares `wanted` with the current value in `array`
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
   * In the document order, there will be only one "focused" or "tabbable" element, making it act more like one complete unit in comparison to everything around it.
   * Navigating forwards/backwards can be done with the arrow keys, Home/End keys, or any text for typeahead to focus the next item that matches.
   */
  function useListNavigation(_ref15) {
    let {
      linearNavigationParameters,
      typeaheadNavigationParameters,
      rovingTabIndexParameters,
      managedChildrenReturn,
      ..._void1
    } = _ref15;
    const rtir = useRovingTabIndex({
      managedChildrenReturn,
      rovingTabIndexParameters
    });
    const {
      rovingTabIndexReturn
    } = rtir;
    const tnr = useTypeaheadNavigation({
      rovingTabIndexReturn,
      typeaheadNavigationParameters
    });
    const lnr = useLinearNavigation({
      rovingTabIndexReturn,
      linearNavigationParameters
    });
    return {
      ...lnr,
      ...tnr,
      ...rtir
    };
  }
  function useListNavigationChild(_ref16) {
    let {
      rovingTabIndexChildParameters,
      rovingTabIndexChildContext,
      typeaheadNavigationChildContext,
      //typeaheadNavigationChildParameters,
      managedChildParameters,
      refElementReturn,
      textContentParameters,
      ..._void2
    } = _ref16;
    const rticr = useRovingTabIndexChild({
      rovingTabIndexChildContext,
      rovingTabIndexChildParameters,
      managedChildParameters
    });
    const {
      textContentReturn
    } = useTypeaheadNavigationChild({
      refElementReturn,
      typeaheadNavigationChildContext,
      managedChildParameters,
      textContentParameters
    });
    //    assertEmptyObject(_void5);
    return {
      textContentReturn,
      ...rticr
    };
  }
  function useGridNavigation(_ref17) {
    let {
      gridNavigationParameters: {
        onTabbableColumnChange,
        ...void3
      },
      linearNavigationParameters,
      rovingTabIndexParameters: {
        onTabbableIndexChange,
        ...rovingTabIndexParameters
      },
      managedChildrenReturn,
      typeaheadNavigationParameters,
      ..._void2
    } = _ref17;
    const {
      getChildren
    } = managedChildrenReturn;
    const {
      initiallyTabbedIndex
    } = rovingTabIndexParameters;
    const [getCurrentTabbableColumn, setCurrentTabbableColumn] = usePassiveState(onTabbableColumnChange, useStableCallback(() => {
      return initiallyTabbedIndex !== null && initiallyTabbedIndex !== void 0 ? initiallyTabbedIndex : 0;
    }));
    const onTabbableIndexChangeOverride = useStableCallback((nextRow, previousRow, reason) => {
      var _children$getAt3, _children$getAt4;
      const children = getChildren();
      onTabbableIndexChange === null || onTabbableIndexChange === void 0 ? void 0 : onTabbableIndexChange(nextRow, previousRow, reason);
      const nextColumn = getCurrentTabbableColumn();
      if (previousRow != null) (_children$getAt3 = children.getAt(previousRow)) === null || _children$getAt3 === void 0 ? void 0 : _children$getAt3.setTabbableColumnIndex(nextColumn, reason, false);
      if (nextRow != null) (_children$getAt4 = children.getAt(nextRow)) === null || _children$getAt4 === void 0 ? void 0 : _children$getAt4.setTabbableColumnIndex(nextColumn, reason, false);
    });
    const {
      linearNavigationReturn,
      rovingTabIndexReturn,
      typeaheadNavigationReturn,
      managedChildrenParameters,
      rovingTabIndexChildContext,
      typeaheadNavigationChildContext,
      ...void1
    } = useListNavigation({
      linearNavigationParameters: {
        navigationDirection: "vertical",
        ...linearNavigationParameters
      },
      rovingTabIndexParameters: {
        onTabbableIndexChange: onTabbableIndexChangeOverride,
        ...rovingTabIndexParameters
      },
      managedChildrenReturn,
      typeaheadNavigationParameters
    });
    return {
      managedChildrenParameters,
      rovingTabIndexChildContext,
      typeaheadNavigationChildContext,
      linearNavigationReturn,
      rovingTabIndexReturn,
      typeaheadNavigationReturn,
      gridNavigationRowContext: useStableObject({
        gridNavigationRowParameters: useStableObject({
          setTabbableRow: rovingTabIndexReturn.setTabbableIndex,
          getCurrentTabbableColumn,
          setCurrentTabbableColumn
        })
      })
    };
  }
  function useGridNavigationRow(_ref18) {
    let {
      rowAsChildOfGridParameters: {
        gridNavigationRowContext: {
          gridNavigationRowParameters: {
            setTabbableRow,
            getCurrentTabbableColumn,
            setCurrentTabbableColumn
          }
        },
        ...asChildRowOfTable
      },
      rowAsParentOfCellsParameters: {
        linearNavigationParameters,
        rovingTabIndexParameters: {
          ...rovingTabIndexParameters
        },
        ...asParentRowOfCellsP
      },
      ..._void1
    } = _ref18;
    const {
      managedChildrenReturn: {
        getChildren
      }
    } = asChildRowOfTable;
    const getIndex = useStableCallback(() => {
      return asChildRowOfTable.managedChildParameters.index;
    });
    const focusSelf = useStableCallback(e => {
      var _getCurrentTabbableCo;
      let index = (_getCurrentTabbableCo = getCurrentTabbableColumn()) !== null && _getCurrentTabbableCo !== void 0 ? _getCurrentTabbableCo : 0;
      let child = getChildren().getAt(index);
      let highestIndex = getChildren().getHighestIndex();
      while ((!child || child.hidden) && index > 0) {
        --index;
        child = getChildren().getAt(index);
      }
      while ((!child || child.hidden) && index <= highestIndex) {
        ++index;
        child = getChildren().getAt(index);
      }
      if (child) {
        const e = child.getElement();
        child.focusSelf(e);
      } else {
        var _e$focus;
        e === null || e === void 0 ? void 0 : (_e$focus = e.focus) === null || _e$focus === void 0 ? void 0 : _e$focus.call(e);
      }
    }, []);
    const lncr = useListNavigationChild(asChildRowOfTable);
    const untabbable = !lncr.rovingTabIndexChildReturn.tabbable;
    const lnr = useListNavigation({
      ...asParentRowOfCellsP,
      rovingTabIndexParameters: {
        untabbable,
        ...rovingTabIndexParameters
      },
      linearNavigationParameters: {
        navigationDirection: "horizontal",
        ...linearNavigationParameters
      }
    });
    const {
      rovingTabIndexReturn: {
        setTabbableIndex
      },
      rovingTabIndexReturn,
      linearNavigationReturn,
      managedChildrenParameters,
      rovingTabIndexChildContext,
      typeaheadNavigationChildContext,
      typeaheadNavigationReturn
    } = lnr;
    return {
      rowAsChildOfGridReturn: {
        gridNavigationRowParameters: {
          focusSelf,
          setTabbableColumnIndex: setTabbableIndex
        },
        ...lncr
      },
      rowAsParentOfCellsReturn: {
        ...lnr,
        gridNavigationCellContext: useStableObject({
          gridNavigationCellParameters: useStableObject({
            setTabbableRow,
            getRowIndex: getIndex,
            getCurrentTabbableColumn,
            setCurrentTabbableColumn,
            setTabbableCell: setTabbableIndex
          })
        }),
        linearNavigationReturn,
        managedChildrenParameters,
        rovingTabIndexChildContext,
        rovingTabIndexReturn,
        typeaheadNavigationChildContext,
        typeaheadNavigationReturn
      }
    };
  }
  function useGridNavigationCell(_ref19) {
    let {
      //    managedChildParameters: { hidden, index, ...void3 },
      rovingTabIndexChildContext,
      typeaheadNavigationChildContext,
      //typeaheadNavigationChildParameters,
      rovingTabIndexChildParameters,
      managedChildParameters,
      refElementReturn,
      textContentParameters,
      gridNavigationCellParameters: {
        colSpan
      },
      gridNavigationCellContext: {
        gridNavigationCellParameters: {
          getRowIndex,
          setTabbableRow,
          getCurrentTabbableColumn: _getCurrentColumn,
          setCurrentTabbableColumn,
          setTabbableCell
        }
      },
      ..._void1
    } = _ref19;
    const {
      index
    } = managedChildParameters;
    const {
      hasCurrentFocusParameters: {
        onCurrentFocusedInnerChanged: ocfic1
      },
      rovingTabIndexChildReturn,
      textContentReturn,
      ...void2
    } = useListNavigationChild({
      rovingTabIndexChildParameters,
      managedChildParameters,
      rovingTabIndexChildContext,
      typeaheadNavigationChildContext,
      textContentParameters,
      //typeaheadNavigationChildParameters,
      refElementReturn
    });
    //    assertEmptyObject(void3);
    return {
      rovingTabIndexChildReturn,
      textContentReturn,
      hasCurrentFocusParameters: {
        onCurrentFocusedInnerChanged: useStableCallback((focused, prev, e) => {
          ocfic1 === null || ocfic1 === void 0 ? void 0 : ocfic1(focused, prev, e);
          if (focused) {
            setTabbableRow(getRowIndex(), e, false);
            setCurrentTabbableColumn(index, e);
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

  //export type UseSingleSelectionChild<E extends Element> = (a: UseSingleSelectionChildParameters<E>) => UseSingleSelectionChildReturnTypeWithHooks<E>;
  function useSingleSelection(_ref20) {
    let {
      managedChildrenReturn: {
        getChildren
      },
      rovingTabIndexReturn: {
        setTabbableIndex
      },
      singleSelectionParameters: {
        onSelectedIndexChange: onSelectedIndexChange_U,
        initiallySelectedIndex
      }
    } = _ref20;
    const onSelectedIndexChange = useStableCallback(onSelectedIndexChange_U !== null && onSelectedIndexChange_U !== void 0 ? onSelectedIndexChange_U : noop);
    //useEnsureStability("useSingleSelection", onSelectedIndexChange);
    const getSelectedAt = T$1(m => {
      return m.getSelected();
    }, []);
    const setSelectedAt = T$1((m, t, newSelectedIndex, prevSelectedIndex) => {
      if (m.hidden) {
        console.assert(false);
      }
      const directionComparison = newSelectedIndex == m.index ? prevSelectedIndex : newSelectedIndex;
      const direction = directionComparison == null ? null : m.index - directionComparison;
      if (newSelectedIndex == null) console.assert(t == false);
      if (t) console.assert(newSelectedIndex === m.index);
      m.setLocalSelected(t, direction);
    }, []);
    const isSelectedValid = T$1(m => {
      return !m.hidden;
    }, []);
    const {
      changeIndex: changeSelectedIndex,
      getCurrentIndex: getSelectedIndex
    } = useChildrenFlag({
      getChildren,
      onIndexChange: null,
      initialIndex: initiallySelectedIndex,
      getAt: getSelectedAt,
      setAt: setSelectedAt,
      isValid: isSelectedValid,
      closestFit: false
    });
    return {
      singleSelectionReturn: useStableObject({
        getSelectedIndex,
        changeSelectedIndex
      }),
      singleSelectionContext: useStableObject({
        getSelectedIndex,
        onSelectedIndexChange: onSelectedIndexChange
      }),
      childrenHaveFocusParameters: {
        onCompositeFocusChange: useStableCallback((anyFocused, prev, reason) => {
          if (!anyFocused) {
            const selectedIndex = getSelectedIndex();
            if (selectedIndex != null) setTabbableIndex(selectedIndex, reason, false);
          }
        })
      }
    };
  }
  function useSingleSelectionChild(args) {
    var _ariaPropName$split;
    const {
      singleSelectionContext: {
        getSelectedIndex,
        onSelectedIndexChange
      },
      singleSelectionChildParameters: {
        ariaPropName,
        selectionMode,
        disabled
      },
      managedChildParameters: {
        index
      }
    } = args;
    //let lastRecordedDistance = useRef(0);
    useEnsureStability("useSingleSelectionChild", getSelectedIndex, onSelectedIndexChange);
    const getDisabled = useStableGetter(disabled);
    const [localSelected, setLocalSelected, getLocalSelected] = useState(getSelectedIndex() == index);
    const [direction, setDirection, getDirection] = useState(getSelectedIndex() == null ? null : getSelectedIndex() - index);
    //const [selected, setSelected, getSelected] = useState(getSelectedIndex() == index);
    // const getIndex = useStableGetter(index);
    const onCurrentFocusedInnerChanged = useStableCallback((focused, _prev, e) => {
      if (selectionMode == 'focus' && focused) {
        onSelectedIndexChange === null || onSelectedIndexChange === void 0 ? void 0 : onSelectedIndexChange(index, e);
      }
    });
    const onPressSync = useStableCallback(e => {
      if (selectionMode == "disabled") return;
      if (!disabled) onSelectedIndexChange === null || onSelectedIndexChange === void 0 ? void 0 : onSelectedIndexChange(index, e);
    });
    const propParts = (_ariaPropName$split = ariaPropName === null || ariaPropName === void 0 ? void 0 : ariaPropName.split("-")) !== null && _ariaPropName$split !== void 0 ? _ariaPropName$split : [];
    return {
      //managedChildParameters: { selected, setSelected, getSelected, },
      managedChildParameters: {
        setLocalSelected: useStableCallback((selected, direction) => {
          setLocalSelected(selected);
          setDirection(direction);
          /*if (direction == null) {
              setSelected(false);
              setDirection(null);
          }
          else if (direction == 0) {
              setSelected(true);
          }
          else {
              setSelected(false);
              setDirection(direction);
          }*/
        })
      },

      singleSelectionChildReturn: {
        selected: localSelected,
        setThisOneSelected: useStableCallback(event => {
          console.assert(!getDisabled());
          onSelectedIndexChange === null || onSelectedIndexChange === void 0 ? void 0 : onSelectedIndexChange(index, event);
        }),
        getSelectedOffset: getDirection,
        selectedOffset: direction,
        getSelected: getLocalSelected,
        //getDistance: useCallback(() => { return lastRecordedDistance.current; }, []),
        propsUnstable: ariaPropName == null || selectionMode == "disabled" ? {} : {
          ["".concat(propParts[0], "-").concat(propParts[1])]: localSelected ? propParts[1] == "current" ? "".concat(propParts[2]) : "true" : "false"
        }
      },
      pressParameters: {
        onPressSync
      },
      hasCurrentFocusParameters: {
        onCurrentFocusedInnerChanged
      }
    };
  }
  function useGridNavigationSingleSelection(_ref21) {
    let {
      gridNavigationParameters,
      linearNavigationParameters,
      rovingTabIndexParameters,
      managedChildrenReturn,
      typeaheadNavigationParameters,
      singleSelectionParameters,
      ..._void2
    } = _ref21;
    const gnr = useGridNavigation({
      gridNavigationParameters,
      linearNavigationParameters,
      managedChildrenReturn,
      rovingTabIndexParameters,
      typeaheadNavigationParameters
    });
    const {
      rovingTabIndexReturn
    } = gnr;
    const ssr = useSingleSelection({
      managedChildrenReturn,
      rovingTabIndexReturn,
      singleSelectionParameters
    });
    return {
      ...gnr,
      ...ssr
    };
  }
  function useGridNavigationSingleSelectionRow(_ref22) {
    let {
      rowAsChildOfGridParameters,
      rowAsParentOfCellsParameters,
      ..._void1
    } = _ref22;
    const {
      managedChildParameters,
      hasCurrentFocusParameters: {
        onCurrentFocusedInnerChanged: ocfic2,
        ..._void3
      },
      pressParameters,
      singleSelectionChildReturn
    } = useSingleSelectionChild(rowAsChildOfGridParameters);
    const {
      rowAsChildOfGridReturn: {
        hasCurrentFocusParameters: {
          onCurrentFocusedInnerChanged: ocfic1,
          ..._void2
        },
        gridNavigationRowParameters,
        rovingTabIndexChildReturn,
        textContentReturn,
        ...void4
      },
      rowAsParentOfCellsReturn
    } = useGridNavigationRow({
      rowAsChildOfGridParameters,
      rowAsParentOfCellsParameters
    });
    const onCurrentFocusedInnerChanged = useStableCallback((focused, prevFocused, e) => {
      ocfic1 === null || ocfic1 === void 0 ? void 0 : ocfic1(focused, prevFocused, e);
      ocfic2 === null || ocfic2 === void 0 ? void 0 : ocfic2(focused, prevFocused, e);
    });
    return {
      rowAsChildOfGridReturn: {
        textContentReturn,
        managedChildParameters,
        hasCurrentFocusParameters: {
          onCurrentFocusedInnerChanged
        },
        gridNavigationRowParameters,
        rovingTabIndexChildReturn,
        singleSelectionChildReturn
      },
      rowAsParentOfCellsReturn
    };
  }
  // EZ
  function useGridNavigationSingleSelectionCell(p) {
    return useGridNavigationCell(p);
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
  var objectProto$3 = Object.prototype;

  /** Used to check objects for own properties. */
  var hasOwnProperty$2 = objectProto$3.hasOwnProperty;

  /** Built-in value references. */
  var propertyIsEnumerable = objectProto$3.propertyIsEnumerable;

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

  /** `Object#toString` result references. */
  var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag$1 = '[object Function]',
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
  typedArrayTags[argsTag] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag$1] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;

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
  var objectProto$2 = Object.prototype;

  /** Used to check objects for own properties. */
  var hasOwnProperty$1 = objectProto$2.hasOwnProperty;

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

  /** Used for built-in method references. */
  var objectProto$1 = Object.prototype;

  /**
   * Checks if `value` is likely a prototype object.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
   */
  function isPrototype(value) {
    var Ctor = value && value.constructor,
      proto = typeof Ctor == 'function' && Ctor.prototype || objectProto$1;
    return value === proto;
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

  /** `Object#toString` result references. */
  var asyncTag = '[object AsyncFunction]',
    funcTag = '[object Function]',
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
    return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
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
   * Returns a function that will, when called, force the component
   * that uses this hook to re-render itself.
   *
   * It's a bit smelly, so best to use sparingly.
   */
  function useForceUpdate() {
    const [, set] = p(0);
    return _(() => set(i => ++i)).current;
  }

  /**
   * Hook that allows for the **direct descendant** children of this component to be re-ordered and sorted.
   *
   * *This is **separate** from "managed" children, which can be any level of child needed! Sortable/rearrangeable children must be **direct descendants** of the parent that uses this hook!*
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
   */
  function useRearrangeableChildren(_ref23) {
    let {
      rearrangeableChildrenParameters: {
        getIndex,
        onRearranged
      }
    } = _ref23;
    // These are used to keep track of a mapping between unsorted index <---> sorted index.
    // These are needed for navigation with the arrow keys.
    const mangleMap = _(new Map());
    const demangleMap = _(new Map());
    const indexMangler = T$1(n => {
      var _mangleMap$current$ge;
      return (_mangleMap$current$ge = mangleMap.current.get(n)) !== null && _mangleMap$current$ge !== void 0 ? _mangleMap$current$ge : n;
    }, []);
    const indexDemangler = T$1(n => {
      var _demangleMap$current$;
      return (_demangleMap$current$ = demangleMap.current.get(n)) !== null && _demangleMap$current$ !== void 0 ? _demangleMap$current$ : n;
    }, []);
    const onRearrangedGetter = useStableGetter(onRearranged);
    //const { setTabbableIndex } = rovingTabIndexReturn;
    const shuffle$1 = T$1(managedRows => {
      const shuffledRows = shuffle(managedRows.arraySlice());
      return rearrange(shuffledRows);
    }, [/* Must remain stable */]);
    // The sort function needs to be able to update whoever has all the sortable children.
    // Because that might not be the consumer of *this* hook directly (e.g. a table uses
    // this hook, but it's tbody that actually needs updating), we need to remotely
    // get and set a forceUpdate function.
    //const [getForceUpdate, setForceUpdate] = usePassiveState<null | (() => void)>(null, returnNull);
    const [getForceUpdate, setForceUpdate] = usePassiveState(null, returnNull);
    const rearrange = T$1(sortedRows => {
      var _onRearrangedGetter, _getForceUpdate;
      mangleMap.current.clear();
      demangleMap.current.clear();
      // Update our sorted <--> unsorted indices map 
      // and rerender the whole table, basically
      for (let indexAsSorted = 0; indexAsSorted < sortedRows.length; ++indexAsSorted) {
        const indexAsUnsorted = sortedRows[indexAsSorted].index;
        mangleMap.current.set(indexAsUnsorted, indexAsSorted);
        demangleMap.current.set(indexAsSorted, indexAsUnsorted);
      }
      (_onRearrangedGetter = onRearrangedGetter()) === null || _onRearrangedGetter === void 0 ? void 0 : _onRearrangedGetter();
      (_getForceUpdate = getForceUpdate()) === null || _getForceUpdate === void 0 ? void 0 : _getForceUpdate();
    }, []);
    const useRearrangedChildren = T$1(children => {
      console.assert(Array.isArray(children));
      const forceUpdate = useForceUpdate();
      s(() => {
        setForceUpdate(_prev => forceUpdate);
      }, [forceUpdate]);
      return children.slice().map(child => ({
        child,
        mangledIndex: indexMangler(getIndex(child)),
        demangledIndex: getIndex(child)
      })).sort((lhs, rhs) => {
        return lhs.mangledIndex - rhs.mangledIndex;
      }).map(_ref24 => {
        let {
          child,
          mangledIndex,
          demangledIndex
        } = _ref24;
        return h$1(child.type, {
          ...child.props,
          key: demangledIndex,
          "data-mangled-index": mangledIndex,
          "data-unmangled-index": demangledIndex
        });
      });
    }, []);
    const toJsonArray = T$1((managedRows, transform) => {
      return managedRows.arraySlice().map(child => {
        if (transform) return transform(child);else return child.getSortValue();
      });
    }, []);
    return {
      //linearNavigationParameters: { navigateAbsolute, navigateRelative },
      rearrangeableChildrenReturn: {
        indexMangler,
        indexDemangler,
        mangleMap,
        demangleMap,
        rearrange,
        shuffle: shuffle$1,
        useRearrangedChildren,
        toJsonArray
      }
    };
  }
  /**
   * Hook that allows for the **direct descendant** children of this component to be re-ordered and sorted.
   *
   * *This is **separate** from "managed" children, which can be any level of child needed! Sortable/rearrangeable children must be **direct descendants** of the parent that uses this hook!*
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
   */
  function useSortableChildren(_ref25) {
    let {
      rearrangeableChildrenParameters,
      sortableChildrenParameters: {
        compare: userCompare
      }
    } = _ref25;
    const getCompare = useStableGetter(userCompare !== null && userCompare !== void 0 ? userCompare : defaultCompare);
    const {
      rearrangeableChildrenReturn
    } = useRearrangeableChildren({
      rearrangeableChildrenParameters
    });
    const {
      rearrange
    } = rearrangeableChildrenReturn;
    // The actual sort function.
    const sort = T$1((managedRows, direction) => {
      const compare = getCompare();
      const sortedRows = compare ? managedRows.arraySlice().sort((lhsRow, rhsRow) => {
        const lhsValue = lhsRow;
        const rhsValue = rhsRow;
        const result = compare(lhsValue, rhsValue);
        if (direction[0] == "d") return -result;
        return result;
      }) : managedRows.arraySlice();
      return rearrange(sortedRows);
    }, [/* Must remain stable */]);
    return {
      sortableChildrenReturn: {
        sort
      },
      rearrangeableChildrenReturn
    };
  }
  /*export interface UseGroupedSortableChildrenParameters<M extends GroupedSortedChildInfo> {
      managedChildrenReturn: UseManagedChildrenReturnType<M>["managedChildrenReturn"]
  }
   export interface UseGroupedSortableChildren {
      linearNavigationParameters: Pick<UseLinearNavigationParameters["linearNavigationParameters"], "indexDemangler" | "indexMangler">
  }*/
  /**
   * It's common enough to have, e.g., a list with multiple sortable groups, a table where the body is sorted independently of the head, etc...
   *
   * A sortable group assumes that the parent (which also calls this hook) handles list navigation (or similar),
   * and that each group element (which can also be the list parent, if there are NO groups) handles sorting (or similar).
   */
  /*export function useGroupedSortableChildren<M extends GroupedSortedChildInfo>({ managedChildrenReturn: { getChildren } }: UseGroupedSortableChildrenParameters<M>): UseGroupedSortableChildren {
      const allIndexManglers = useRef<Map<number, (i: number) => number>>(new Map());
      const allIndexDemanglers = useRef<Map<number, (i: number) => number>>(new Map());
      const indexMangler = useCallback((i: number): number => {
          const child = getChildren().getAt(i);
          if (child) {
              let indexManglerForThisLocation = allIndexManglers.current.get(child.locationIndex);
              return (indexManglerForThisLocation ?? identity)(i);
          }
          return identity(i);
      }, []);
      const indexDemangler = useCallback((i: number): number => {
          const child = getChildren().getAt(i);
          if (child) {
              let indexDemanglerForThisLocation = allIndexDemanglers.current.get(child.locationIndex);
              return (indexDemanglerForThisLocation ?? identity)(i);
          }
          return identity(i);
      }, []);
        return {
          linearNavigationParameters: {
              indexMangler,
              indexDemangler
          }
      }
  }*/
  function defaultCompare(lhs, rhs) {
    return compare1(lhs === null || lhs === void 0 ? void 0 : lhs.getSortValue(), rhs === null || rhs === void 0 ? void 0 : rhs.getSortValue());
    function compare1(lhs, rhs) {
      if (lhs == null || rhs == null) {
        if (lhs == null) return -1;
        if (rhs == null) return 1;
      }
      return lhs - rhs;
    }
  }
  function useGridNavigationSingleSelectionSortable(_ref26) {
    let {
      rearrangeableChildrenParameters,
      sortableChildrenParameters,
      linearNavigationParameters,
      ...gridNavigationSingleSelectionParameters
    } = _ref26;
    const {
      ...scr
    } = useSortableChildren({
      rearrangeableChildrenParameters,
      sortableChildrenParameters
    });
    const {
      rearrangeableChildrenReturn: {
        indexDemangler,
        indexMangler
      }
    } = scr;
    const gnr = useGridNavigationSingleSelection({
      linearNavigationParameters: {
        indexDemangler,
        indexMangler,
        ...linearNavigationParameters
      },
      ...gridNavigationSingleSelectionParameters
    });
    return {
      ...gnr,
      ...scr
    };
  }
  function useListNavigationSingleSelection(_ref27) {
    let {
      linearNavigationParameters,
      rovingTabIndexParameters,
      typeaheadNavigationParameters,
      singleSelectionParameters,
      managedChildrenReturn,
      ..._void3
    } = _ref27;
    const lnr = useListNavigation({
      linearNavigationParameters,
      rovingTabIndexParameters,
      typeaheadNavigationParameters,
      managedChildrenReturn
    });
    const {
      rovingTabIndexReturn
    } = lnr;
    const ssr = useSingleSelection({
      rovingTabIndexReturn,
      managedChildrenReturn,
      singleSelectionParameters
    });
    return {
      ...ssr,
      ...lnr
    };
  }
  function useListNavigationSingleSelectionChild(_ref28) {
    let {
      managedChildParameters: {
        index,
        ..._void5
      },
      rovingTabIndexChildParameters: {
        hidden,
        ...void7
      },
      singleSelectionChildParameters,
      singleSelectionContext,
      rovingTabIndexChildContext,
      typeaheadNavigationChildContext,
      refElementReturn,
      textContentParameters,
      ..._void1
    } = _ref28;
    const {
      hasCurrentFocusParameters: {
        onCurrentFocusedInnerChanged: ocfic2,
        ..._void3
      },
      ...sscr
    } = useSingleSelectionChild({
      managedChildParameters: {
        index
      },
      singleSelectionChildParameters,
      singleSelectionContext
    });
    const {
      hasCurrentFocusParameters: {
        onCurrentFocusedInnerChanged: ocfic1,
        ..._void6
      },
      ...lncr
    } = useListNavigationChild({
      managedChildParameters: {
        index
      },
      rovingTabIndexChildParameters: {
        hidden
      },
      rovingTabIndexChildContext,
      typeaheadNavigationChildContext,
      refElementReturn,
      textContentParameters
    });
    return {
      hasCurrentFocusParameters: {
        onCurrentFocusedInnerChanged: useStableCallback((focused, previouslyFocused, e) => {
          ocfic1 === null || ocfic1 === void 0 ? void 0 : ocfic1(focused, previouslyFocused, e);
          ocfic2 === null || ocfic2 === void 0 ? void 0 : ocfic2(focused, previouslyFocused, e);
        })
      },
      ...sscr,
      ...lncr
    };
  }

  /**
   * Allows children to each wait until the previous has finished rendering before itself rendering.
   *
   * E.G. Child #3 waits until #2 renders. #2 waits until #1 renders, etc.
   *
   * Note that the child itself will still render, but you can delay rendering *its* children, or
   * delay other complicated or heavy logic, until the child is no longer staggered.
   */
  function useStaggeredChildren(_ref29) {
    let {
      managedChildrenReturn: {
        getChildren
      },
      staggeredChildrenParameters: {
        staggered
      }
    } = _ref29;
    // By default, when a child mounts, we tell the next child to mount and simply repeat.
    // If a child is missing, however, it will break that chain.
    // To guard against that, we also wait for 50ms, and if it hasn't loaded by then, we just continue as if it did.
    const [currentlyStaggering, setCurrentlyStaggering] = useState(staggered);
    const timeoutHandle = _(-1);
    const resetEmergencyTimeout = T$1(() => {
      if (timeoutHandle.current != -1) clearTimeout(timeoutHandle.current);
      timeoutHandle.current = setTimeout(() => {
        // We've gone this long without hearing the next child mount itself...
        // We need to continue.
        timeoutHandle.current = -1;
        setDisplayedStaggerIndex(c => {
          var _getTargetStaggerInde;
          return Math.min((_getTargetStaggerInde = getTargetStaggerIndex()) !== null && _getTargetStaggerInde !== void 0 ? _getTargetStaggerInde : 0, (c !== null && c !== void 0 ? c : 0) + 1);
        });
      }, 50);
    }, [/* Must be empty */]);
    // The target index is the index that we're "animating" to.
    // Each child simply sets this to the highest value ever seen.
    // TODO: When unmounting children, we should reset this, but that requires us to track total # of children
    const [getTargetStaggerIndex, setTargetStaggerIndex] = usePassiveState(T$1((newIndex, prevIndex) => {
      // Any time our target changes,
      // ensure our timeout is running, and start a new one if not
      // For any newly mounted children, make sure they're aware of if they should consider themselves staggered or not
      for (let i = prevIndex !== null && prevIndex !== void 0 ? prevIndex : 0; i < (newIndex !== null && newIndex !== void 0 ? newIndex : 0); ++i) {
        var _getChildren$getAt;
        (_getChildren$getAt = getChildren().getAt(i)) === null || _getChildren$getAt === void 0 ? void 0 : _getChildren$getAt.setParentIsStaggered(parentIsStaggered);
      }
      if (timeoutHandle.current == -1) {
        resetEmergencyTimeout();
        // If there's no timeout running, then that also means we're not waiting for a child to mount.
        // So ask a child to mount and then wait for that child to mount.
        setDisplayedStaggerIndex(c => Math.min(newIndex !== null && newIndex !== void 0 ? newIndex : 0, (c !== null && c !== void 0 ? c : 0) + 1));
      }
    }, [/* Must be empty */]), returnNull);
    //const [getTimeoutHandle, setTimeoutHandle] = usePassiveState<number | null, Event>(null, returnNull);
    const [getDisplayedStaggerIndex, setDisplayedStaggerIndex] = usePassiveState(T$1((newIndex, prevIndex) => {
      var _getTargetStaggerInde2;
      if (newIndex == null) {
        return;
      }
      setCurrentlyStaggering(newIndex >= ((_getTargetStaggerInde2 = getTargetStaggerIndex()) !== null && _getTargetStaggerInde2 !== void 0 ? _getTargetStaggerInde2 : 0));
      // It's time to show the next child,
      // either because the current one finished mounting,
      // or because our emergency backup timeout fired.
      //
      // Either way, tell the next child to show itself.
      // Also make sure that anyone we skipped somehow show themselves as well.
      for (let i = prevIndex !== null && prevIndex !== void 0 ? prevIndex : 0; i < newIndex; ++i) {
        var _getChildren$getAt2;
        (_getChildren$getAt2 = getChildren().getAt(i)) === null || _getChildren$getAt2 === void 0 ? void 0 : _getChildren$getAt2.setStaggeredVisible(true);
      }
      // Set a new emergency timeout
      resetEmergencyTimeout();
      /*if (newIndex < targetIndex) {
          const handle = setTimeout(() => { setDisplayedStaggerIndex(c => (c ?? 0) + 1); }, staggerDelay ?? 50);
          return clearTimeout(handle);
      }*/
    }, [/* Must be empty */]), returnNull);
    const parentIsStaggered = !!staggered;
    const childCallsThisToTellTheParentToMountTheNextOne = T$1(index => {
      setDisplayedStaggerIndex(s => {
        var _getTargetStaggerInde3;
        return Math.min((_getTargetStaggerInde3 = getTargetStaggerIndex()) !== null && _getTargetStaggerInde3 !== void 0 ? _getTargetStaggerInde3 : 0, 1 + Math.max(s !== null && s !== void 0 ? s : 0, index + 1));
      });
    }, []);
    s(() => {
      getChildren().forEach(child => child.setParentIsStaggered(parentIsStaggered));
      //if (parentIsStaggered)
      //    childCallsThisToTellTheParentToMountTheNextOne(-1);
    }, [parentIsStaggered]);
    const childCallsThisToTellTheParentTheHighestIndex = T$1(mountedIndex => {
      setTargetStaggerIndex(i => Math.max(i !== null && i !== void 0 ? i : 0, 1 + mountedIndex));
    }, []);
    return {
      staggeredChildrenReturn: {
        stillStaggering: currentlyStaggering
      },
      context: useStableObject({
        staggeredChildContext: useStableObject({
          childCallsThisToTellTheParentToMountTheNextOne,
          childCallsThisToTellTheParentTheHighestIndex,
          // These are used during setState, so just once during mount.
          // It's okay that the dependencies aren't included.
          // It's more important that these can be called during render.
          //
          // (If we switch, this is caught during useLayoutEffect anyway)
          getDefaultIsStaggered: T$1(() => {
            return parentIsStaggered;
          }, []),
          getDefaultStaggeredVisible: T$1(i => {
            if (parentIsStaggered) {
              const staggerIndex = getDisplayedStaggerIndex();
              if (staggerIndex == null) return false;
              return i < staggerIndex;
            } else {
              return true;
            }
          }, [])
        })
      })
    };
  }
  function useStaggeredChild(_ref30) {
    let {
      managedChildParameters: {
        index
      },
      context: {
        staggeredChildContext: {
          childCallsThisToTellTheParentTheHighestIndex,
          getDefaultIsStaggered,
          getDefaultStaggeredVisible,
          childCallsThisToTellTheParentToMountTheNextOne
        }
      }
    } = _ref30;
    const [parentIsStaggered, setParentIsStaggered] = useState(getDefaultIsStaggered());
    const [staggeredVisible, setStaggeredVisible] = useState(getDefaultStaggeredVisible(index));
    s(() => {
      childCallsThisToTellTheParentTheHighestIndex(index);
    }, [index]);
    h(() => {
      if (parentIsStaggered && staggeredVisible) childCallsThisToTellTheParentToMountTheNextOne(index);
    }, [index, parentIsStaggered && staggeredVisible]);
    return {
      props: !parentIsStaggered ? {} : {
        "aria-busy": (!staggeredVisible).toString()
      },
      staggeredChildReturn: {
        staggeredVisible,
        isStaggered: parentIsStaggered,
        hideBecauseStaggered: parentIsStaggered ? !staggeredVisible : false
      },
      managedChildParameters: {
        setStaggeredVisible: setStaggeredVisible,
        setParentIsStaggered
      }
    };
  }
  function usePaginatedChildren(_ref31) {
    let {
      managedChildrenReturn: {
        getChildren
      },
      linearNavigationParameters: {
        indexDemangler,
        indexMangler
      },
      paginatedChildrenParameters: {
        paginationMax,
        paginationMin
      }
    } = _ref31;
    const [childCount, setChildCount] = useState(null);
    const parentIsPaginated = paginationMin != null || paginationMax != null;
    const lastPagination = _({
      paginationMax: null,
      paginationMin: null
    });
    const refreshPagination = T$1((paginationMin, paginationMax) => {
      const childMax = getChildren().getHighestIndex() + 1;
      for (let i = 0; i <= childMax; ++i) {
        var _getChildren$getAt3, _getChildren$getAt4, _getChildren$getAt5;
        const visible = i >= (paginationMin !== null && paginationMin !== void 0 ? paginationMin : -Infinity) && i < (paginationMax !== null && paginationMax !== void 0 ? paginationMax : Infinity);
        (_getChildren$getAt3 = getChildren().getAt(indexDemangler(i))) === null || _getChildren$getAt3 === void 0 ? void 0 : _getChildren$getAt3.setParentIsPaginated(parentIsPaginated);
        (_getChildren$getAt4 = getChildren().getAt(indexDemangler(i))) === null || _getChildren$getAt4 === void 0 ? void 0 : _getChildren$getAt4.setPaginationVisible(visible);
        if (visible) (_getChildren$getAt5 = getChildren().getAt(indexDemangler(i))) === null || _getChildren$getAt5 === void 0 ? void 0 : _getChildren$getAt5.setChildCountIfPaginated(getChildren().getHighestIndex() + 1);
      }
    }, [/* Must be empty */]);
    s(() => {
      refreshPagination(paginationMin, paginationMax);
      lastPagination.current.paginationMax = paginationMax;
      lastPagination.current.paginationMin = paginationMin;
    }, [paginationMax, paginationMin]);
    return {
      context: useStableObject({
        paginatedChildContext: useStableObject({
          // These are used during setState, so just once during mount.
          // It's okay that the dependencies aren't included.
          // It's more important that these can be called during render.
          //
          // (If we switch, this is caught during useLayoutEffect anyway,
          // which does incur a performance penalty, but only if we switch,
          // at least, instead of every time)
          getDefaultIsPaginated: T$1(() => {
            return parentIsPaginated;
          }, []),
          // This is only used during setState on mount, so this is fine.
          // (If we change from paginated to not paginated, this is caught during useLayoutEffect)
          getDefaultPaginationVisible: T$1(i => {
            return parentIsPaginated ? i >= (paginationMin !== null && paginationMin !== void 0 ? paginationMin : -Infinity) && i < (paginationMax !== null && paginationMax !== void 0 ? paginationMax : Infinity) : true;
          }, [])
        })
      }),
      managedChildrenParameters: {
        onChildCountChange: useStableCallback(count => {
          if (paginationMax != null || paginationMin != null) {
            setChildCount(count);
            const min = paginationMin !== null && paginationMin !== void 0 ? paginationMin : 0;
            const max = paginationMax !== null && paginationMax !== void 0 ? paginationMax : count;
            for (let i = min; i < max; ++i) {
              var _getChildren$getAt6, _getChildren$getAt7;
              (_getChildren$getAt6 = getChildren().getAt(i)) === null || _getChildren$getAt6 === void 0 ? void 0 : _getChildren$getAt6.setParentIsPaginated(parentIsPaginated);
              (_getChildren$getAt7 = getChildren().getAt(i)) === null || _getChildren$getAt7 === void 0 ? void 0 : _getChildren$getAt7.setChildCountIfPaginated(count);
            }
          } else {
            // TODO: Make this debug only.
            setChildCount(null);
          }
        })
      },
      paginatedChildrenReturn: {
        refreshPagination,
        childCount
      }
    };
  }
  function usePaginatedChild(_ref32) {
    let {
      managedChildParameters: {
        index
      },
      context: {
        paginatedChildContext: {
          getDefaultPaginationVisible,
          getDefaultIsPaginated
        }
      }
    } = _ref32;
    const [parentIsPaginated, setParentIsPaginated] = useState(getDefaultIsPaginated());
    const [childCountIfPaginated, setChildCountIfPaginated] = useState(null);
    const [paginatedVisible, setPaginatedVisible] = useState(getDefaultPaginationVisible(index));
    return {
      props: !parentIsPaginated ? {} : {
        "aria-setsize": childCountIfPaginated !== null && childCountIfPaginated !== void 0 ? childCountIfPaginated : undefined,
        "aria-posinset": index + 1
      },
      paginatedChildReturn: {
        paginatedVisible,
        isPaginated: parentIsPaginated,
        hideBecausePaginated: parentIsPaginated ? !paginatedVisible : false
      },
      managedChildParameters: {
        setPaginationVisible: setPaginatedVisible,
        setChildCountIfPaginated,
        setParentIsPaginated
      }
    };
  }

  /**
   * Allows a composite component (such as a radio group or listbox) to listen
   * for an "overall focusin/out" event; this hook lets you know when focus has
   * moved in/out of this grouping of children EVEN IF there is no actual parent DOM element.
   *
   * I.E. you can use this without needing a parent `<div>` to listen for a `focusout` event.
   */
  function useChildrenHaveFocus(args) {
    const {
      childrenHaveFocusParameters: {
        onCompositeFocusChange
      }
    } = args;
    const [getAnyFocused, setAnyFocused] = usePassiveState(onCompositeFocusChange, returnFalse, runImmediately);
    const [_getFocusCount, setFocusCount] = usePassiveState(useStableCallback((anyFocused, anyPreviouslyFocused, e) => {
      console.assert(anyFocused >= 0 && anyFocused <= 1);
      setAnyFocused(!!(anyFocused && !anyPreviouslyFocused), e);
    }));
    return {
      childrenHaveFocusReturn: {
        getAnyFocused
      },
      childrenHaveFocusChildContext: useStableObject({
        childrenHaveFocusChildParameters: useStableObject({
          setFocusCount
        })
      })
    };
  }
  function useChildrenHaveFocusChild(_ref33) {
    let {
      childrenHaveFocusChildContext: {
        childrenHaveFocusChildParameters: {
          setFocusCount
        }
      }
    } = _ref33;
    return {
      hasCurrentFocusParameters: {
        onCurrentFocusedInnerChanged: useStableCallback((focused, prev, e) => {
          if (focused) {
            setFocusCount(p => (p !== null && p !== void 0 ? p : 0) + 1, e);
          } else if (!focused && prev) {
            setFocusCount(p => (p !== null && p !== void 0 ? p : 0) - 1, e);
          }
        })
      }
    };
  }
  function useHasCurrentFocus(args) {
    const {
      hasCurrentFocusParameters: {
        onCurrentFocusedChanged: onFocusedChanged,
        onCurrentFocusedInnerChanged: onFocusedInnerChanged
      },
      refElementReturn: {
        getElement
      }
    } = args;
    useEnsureStability("useHasCurrentFocus", onFocusedChanged, onFocusedInnerChanged, getElement);
    const [getFocused, setFocused] = usePassiveState(onFocusedChanged, returnFalse, runImmediately);
    const [getFocusedInner, setFocusedInner] = usePassiveState(onFocusedInnerChanged, returnFalse, runImmediately);
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
    h(() => {
      return () => {
        setFocused(false);
        setFocusedInner(false);
      };
    }, []);
    const propsStable = _({
      onfocusin: onFocusIn,
      onfocusout: onFocusOut
    });
    h(() => {
      return () => {
        setFocused(false);
        setFocusedInner(false);
      };
    }, []);
    return {
      hasCurrentFocusReturn: {
        propsStable: propsStable.current,
        getCurrentFocused: getFocused,
        getCurrentFocusedInner: getFocusedInner
      }
    };
  }
  function useCompleteGridNavigation(_ref34) {
    let {
      gridNavigationParameters,
      linearNavigationParameters,
      rovingTabIndexParameters,
      singleSelectionParameters,
      typeaheadNavigationParameters,
      sortableChildrenParameters,
      rearrangeableChildrenParameters,
      paginatedChildrenParameters,
      staggeredChildrenParameters
    } = _ref34;
    const getChildren = T$1(() => managedChildrenReturn.getChildren(), []);
    const getHighestChildIndex = T$1(() => getChildren().getHighestIndex(), []);
    const isValid = useStableCallback(index => {
      var _getChildren$getAt8;
      return !((_getChildren$getAt8 = getChildren().getAt(index)) !== null && _getChildren$getAt8 !== void 0 && _getChildren$getAt8.hidden);
    });
    const {
      childrenHaveFocusParameters,
      managedChildrenParameters,
      rovingTabIndexChildContext,
      singleSelectionContext,
      typeaheadNavigationChildContext,
      gridNavigationRowContext,
      rearrangeableChildrenReturn,
      ...gridNavigationSingleSelectionReturn
    } = useGridNavigationSingleSelectionSortable({
      gridNavigationParameters,
      linearNavigationParameters: {
        getHighestIndex: getHighestChildIndex,
        isValid,
        ...linearNavigationParameters
      },
      managedChildrenReturn: {
        getChildren
      },
      rovingTabIndexParameters: {
        initiallyTabbedIndex: singleSelectionParameters.initiallySelectedIndex,
        ...rovingTabIndexParameters
      },
      singleSelectionParameters,
      typeaheadNavigationParameters: {
        isValid,
        ...typeaheadNavigationParameters
      },
      rearrangeableChildrenParameters: {
        onRearranged: useStableCallback(() => {
          refreshPagination(paginatedChildrenParameters.paginationMin, paginatedChildrenParameters.paginationMax);
        }),
        ...rearrangeableChildrenParameters
      },
      sortableChildrenParameters
    });
    const {
      linearNavigationReturn,
      typeaheadNavigationReturn
    } = gridNavigationSingleSelectionReturn;
    const {
      indexDemangler,
      indexMangler
    } = rearrangeableChildrenReturn;
    const {
      childrenHaveFocusChildContext,
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
      managedChildrenParameters: {
        onChildCountChange: useStableCallback(c => onChildCountChange(c)),
        ...managedChildrenParameters
      }
    });
    const {
      paginatedChildrenReturn,
      paginatedChildrenReturn: {
        refreshPagination
      },
      managedChildrenParameters: {
        onChildCountChange
      },
      context: {
        paginatedChildContext
      }
    } = usePaginatedChildren({
      managedChildrenReturn,
      paginatedChildrenParameters,
      linearNavigationParameters: {
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
      managedChildrenReturn,
      staggeredChildrenParameters
    });
    const props = useMergedProps(linearNavigationReturn.propsStable, typeaheadNavigationReturn.propsStable);
    /*const getDefaultPaginationVisible = useStableCallback((i: number) => {
        return (i >= (paginatedChildrenParameters.paginationMin ?? -Infinity)) && (i < (paginatedChildrenParameters.paginationMax ?? Infinity));
    });*/
    const context = useStableObject({
      singleSelectionContext,
      managedChildContext,
      rovingTabIndexChildContext,
      typeaheadNavigationChildContext,
      childrenHaveFocusChildContext,
      gridNavigationRowContext,
      paginatedChildContext,
      staggeredChildContext
    });
    return {
      context,
      props,
      managedChildrenReturn,
      rearrangeableChildrenReturn,
      staggeredChildrenReturn,
      ...gridNavigationSingleSelectionReturn,
      childrenHaveFocusReturn,
      paginatedChildrenReturn
      /*completeGridNavigationReturn: {
          toJson: useCallback(() => {
              return toJsonArray(getChildren(), info => {
                  return info.
              })
          }, [])
      }*/
      //rearrangeableChildrenParameters: { getHighestChildIndex: getHighestChildIndex, getValid },
    };
  }

  function useCompleteGridNavigationRow(_ref35) {
    let {
      rowAsChildOfGridParameters: {
        managedChildParameters,
        context: {
          childrenHaveFocusChildContext,
          gridNavigationRowContext,
          managedChildContext: mcc1,
          rovingTabIndexChildContext,
          singleSelectionContext,
          typeaheadNavigationChildContext,
          staggeredChildContext,
          paginatedChildContext
        },
        completeGridNavigationRowParameters,
        singleSelectionChildParameters,
        rovingTabIndexChildParameters,
        rovingTabIndexChildParameters: {
          hidden
        },
        textContentParameters,
        ...rowAsChildOfGridParameters
      },
      rowAsParentOfCellsParameters: {
        linearNavigationParameters,
        rovingTabIndexParameters,
        typeaheadNavigationParameters,
        ...rowAsParentOfCellsParameters
      }
    } = _ref35;
    const {
      index
    } = managedChildParameters;
    const {
      managedChildParameters: {
        setChildCountIfPaginated,
        setPaginationVisible,
        setParentIsPaginated
      },
      paginatedChildReturn: {
        paginatedVisible,
        isPaginated,
        hideBecausePaginated
      },
      props: paginationProps
    } = usePaginatedChild({
      managedChildParameters: {
        index
      },
      context: {
        paginatedChildContext
      }
    });
    const {
      managedChildParameters: {
        setParentIsStaggered,
        setStaggeredVisible
      },
      staggeredChildReturn: {
        staggeredVisible,
        isStaggered,
        hideBecauseStaggered
      },
      props: staggeredProps
    } = useStaggeredChild({
      managedChildParameters: {
        index
      },
      context: {
        staggeredChildContext
      }
    });
    rovingTabIndexChildParameters.hidden || (rovingTabIndexChildParameters.hidden = hideBecausePaginated || hideBecauseStaggered);
    singleSelectionChildParameters.disabled || (singleSelectionChildParameters.disabled = rovingTabIndexChildParameters.hidden);
    const getChildren = T$1(() => managedChildrenReturn.getChildren(), []);
    const getHighestChildIndex = T$1(() => getChildren().getHighestIndex(), []);
    const isValid = T$1(i => {
      const child = getChildren().getAt(i);
      if (!child) return false;
      return !child.hidden;
    }, []);
    const {
      refElementReturn
    } = useRefElement({
      refElementParameters: {}
    });
    const r = useGridNavigationSingleSelectionRow({
      rowAsParentOfCellsParameters: {
        ...rowAsParentOfCellsParameters,
        rovingTabIndexParameters: {
          initiallyTabbedIndex: 0,
          ...rovingTabIndexParameters
        },
        typeaheadNavigationParameters: {
          isValid,
          ...typeaheadNavigationParameters
        },
        linearNavigationParameters: {
          isValid,
          getHighestIndex: getHighestChildIndex,
          pageNavigationSize: 0,
          indexDemangler: identity$1,
          indexMangler: identity$1,
          ...linearNavigationParameters
        },
        managedChildrenReturn: {
          getChildren
        }
      },
      rowAsChildOfGridParameters: {
        ...rowAsChildOfGridParameters,
        refElementReturn,
        rovingTabIndexChildParameters,
        gridNavigationRowContext,
        rovingTabIndexChildContext,
        singleSelectionContext,
        typeaheadNavigationChildContext,
        singleSelectionChildParameters,
        managedChildParameters,
        textContentParameters: {
          hidden,
          ...textContentParameters
        },
        managedChildrenReturn: {
          getChildren
        }
      }
    });
    const {
      rowAsChildOfGridReturn,
      rowAsParentOfCellsReturn
    } = r;
    const {
      context: {
        managedChildContext
      },
      managedChildrenReturn
    } = useManagedChildren({
      managedChildrenParameters: r.rowAsParentOfCellsReturn.managedChildrenParameters
    });
    const {
      getElement
    } = refElementReturn;
    const baseInfo = {
      getElement,
      setTabbable: r.rowAsChildOfGridReturn.rovingTabIndexChildReturn.setTabbable,
      getTabbable: r.rowAsChildOfGridReturn.rovingTabIndexChildReturn.getTabbable,
      tabbable: r.rowAsChildOfGridReturn.rovingTabIndexChildReturn.tabbable,
      index: managedChildParameters.index,
      hidden: rovingTabIndexChildParameters.hidden,
      selected: r.rowAsChildOfGridReturn.singleSelectionChildReturn.selected,
      focusSelf: r.rowAsChildOfGridReturn.gridNavigationRowParameters.focusSelf,
      getSelected: r.rowAsChildOfGridReturn.singleSelectionChildReturn.getSelected,
      setLocalSelected: r.rowAsChildOfGridReturn.managedChildParameters.setLocalSelected,
      disabled: singleSelectionChildParameters.disabled,
      setTabbableColumnIndex: r.rowAsChildOfGridReturn.gridNavigationRowParameters.setTabbableColumnIndex,
      getSortValue: rowAsChildOfGridParameters.sortableChildParameters.getSortValue,
      setPaginationVisible,
      setChildCountIfPaginated: setChildCountIfPaginated,
      setParentIsPaginated,
      setParentIsStaggered,
      setStaggeredVisible
    };
    const {
      managedChildReturn
    } = useManagedChild({
      context: {
        managedChildContext: mcc1
      },
      managedChildParameters: {
        index
      }
    }, {
      ...baseInfo,
      ...completeGridNavigationRowParameters
    });
    const context = useStableObject({
      managedChildContext,
      rovingTabIndexChildContext: r.rowAsParentOfCellsReturn.rovingTabIndexChildContext,
      typeaheadNavigationChildContext: r.rowAsParentOfCellsReturn.typeaheadNavigationChildContext,
      completeGridNavigationContext: useStableObject({}),
      gridNavigationCellContext: r.rowAsParentOfCellsReturn.gridNavigationCellContext
    });
    const {
      hasCurrentFocusParameters
    } = useChildrenHaveFocusChild({
      childrenHaveFocusChildContext
    });
    //const { refElementReturn } = useRefElement<RowElement>({ refElementParameters: {} })
    const {
      hasCurrentFocusReturn
    } = useHasCurrentFocus({
      refElementReturn,
      hasCurrentFocusParameters: {
        ...hasCurrentFocusParameters,
        onCurrentFocusedChanged: null
      }
    });
    const props = useMergedProps(refElementReturn.propsStable,
    // TODO: Rows don't use tabIndex, but just excluding props here is...weird.
    //r.rowAsChildOfGridReturn.rovingTabIndexChildReturn.propsUnstable,
    r.rowAsChildOfGridReturn.singleSelectionChildReturn.propsUnstable, r.rowAsParentOfCellsReturn.linearNavigationReturn.propsStable, r.rowAsParentOfCellsReturn.typeaheadNavigationReturn.propsStable, hasCurrentFocusReturn.propsStable, paginationProps, staggeredProps);
    return {
      context,
      props,
      rowAsParentOfCellsReturn: {
        ...rowAsParentOfCellsReturn,
        managedChildrenReturn
      },
      rowAsChildOfGridReturn: {
        ...rowAsChildOfGridReturn,
        managedChildReturn,
        staggeredChildReturn: {
          isStaggered,
          staggeredVisible,
          hideBecauseStaggered
        },
        paginatedChildReturn: {
          isPaginated,
          paginatedVisible,
          hideBecausePaginated
        }
      },
      hasCurrentFocusReturn
      //managedChildrenReturn,
      //...gridNavigationSingleSelectionReturn
    };
  }

  function useCompleteGridNavigationCell(_ref36) {
    let {
      gridNavigationCellParameters,
      managedChildParameters,
      context: {
        completeGridNavigationContext,
        gridNavigationCellContext,
        managedChildContext,
        rovingTabIndexChildContext,
        typeaheadNavigationChildContext
      },
      rovingTabIndexChildParameters: {
        hidden
      },
      rovingTabIndexChildParameters,
      textContentParameters,
      //managedChildContext,
      completeGridNavigationCellParameters: {
        focusSelf,
        ...completeGridNavigationCellParameters
      }
      //sortableChildParameters: { getSortValue },
      //    pressParameters: { onPressSync, ...pressParameters },
    } = _ref36;
    const {
      index
    } = managedChildParameters;
    const {
      refElementReturn
    } = useRefElement({
      refElementParameters: {}
    });
    const {
      hasCurrentFocusParameters,
      rovingTabIndexChildReturn,
      textContentReturn
    } = useGridNavigationSingleSelectionCell({
      gridNavigationCellContext,
      gridNavigationCellParameters,
      managedChildParameters,
      rovingTabIndexChildContext,
      typeaheadNavigationChildContext,
      rovingTabIndexChildParameters,
      refElementReturn,
      textContentParameters: {
        hidden,
        ...textContentParameters
      }
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
    /* const { pressReturn } = usePress<CellElement>({
         pressParameters: {
             onPressSync: useStableCallback<NonNullable<typeof onPressSync>>(e => {
                 onPressSync?.(e);
                 completeGridNavigationContext.onPressSync?.(e);
             }),
             focusSelf: null,
             ...pressParameters
         },
         refElementReturn
     });*/
    const baseInfo = {
      focusSelf,
      getElement: refElementReturn.getElement,
      hidden: rovingTabIndexChildParameters.hidden,
      index: managedChildParameters.index,
      getTabbable: rovingTabIndexChildReturn.getTabbable,
      setTabbable: rovingTabIndexChildReturn.setTabbable,
      tabbable: rovingTabIndexChildReturn.tabbable
      //getSortValue
    };

    const {
      managedChildReturn
    } = useManagedChild({
      context: {
        managedChildContext
      },
      managedChildParameters: {
        index
      }
    }, {
      ...baseInfo,
      ...completeGridNavigationCellParameters
    });
    const props = useMergedProps(refElementReturn.propsStable,
    //pressReturn.propsStable,
    rovingTabIndexChildReturn.propsUnstable, hasCurrentFocusReturn.propsStable);
    return {
      props,
      refElementReturn,
      rovingTabIndexChildReturn,
      //pressReturn,
      hasCurrentFocusReturn,
      managedChildReturn,
      textContentReturn
    };
  }
  function useTimeout(_ref37) {
    let {
      timeout,
      callback,
      triggerIndex
    } = _ref37;
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
    h(() => {
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
      var _startTimeRef$current;
      return +new Date() - +((_startTimeRef$current = startTimeRef.current) !== null && _startTimeRef$current !== void 0 ? _startTimeRef$current : new Date());
    }, []);
    const getRemainingTime = T$1(() => {
      const timeout = getTimeout();
      return timeout == null ? null : Math.max(0, timeout - getElapsedTime());
    }, []);
    return {
      getElapsedTime,
      getRemainingTime
    };
  }
  function supportsPointerEvents() {
    return "onpointerup" in window;
  }
  /**
   * Adds the necessary event handlers to create a "press"-like event for
   * any element, whether it's a native &lt;BUTTON> or regular &lt;DIV>.
   *
   * Notably, the following cases are covered:
   * * The target element is properly focused, even on iOS Safari (*especially* on iOS Safari)
   * * Double-clicks won't select text, it just presses the button twice.
   * * Text selection that happens to end/start with this element won't invoke a press.
   * * The `enter` key immediately invokes a press (by default just once until pressed again), while the `space` key invokes it when released, if focus hasn't moved away from the button.
   * * Haptic feedback (on, like, the one browser combination that supports it &mdash; this can be disabled app-wide with `setButtonVibrate`)
   *
   * In addition, returns a "more accurate" CSS `active` and `hover`; more accurate
   * in that `hover` won't mess up mobile devices that see `hover` and mess up your click events,
   * and in that `active` accurately displays when a press would occur or not.
   *
   * @param onClickSync
   * @param exclude Whether the polyfill shouldn't apply (can specify for specific interactions)
   */
  function usePress(args) {
    const {
      refElementReturn: {
        getElement
      },
      pressParameters: {
        exclude,
        focusSelf,
        onPressSync,
        allowRepeatPresses,
        longPressThreshold
      }
    } = args;
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
    // All our checking for pointerdown and up doesn't mean anything if it's
    // a programmatic onClick event, which could come from any non-user source.
    // We want to handle those just like GUI clicks, but we don't want to double-up on press events.
    // So if we handle a press from pointerup, we ignore any subsequent click events, at least for a tick.
    const [getJustHandled, setJustHandled] = usePassiveState(useStableCallback((justHandled, _p, reason) => {
      if (justHandled) {
        const h = setTimeout(() => {
          setJustHandled(false, reason);
        }, 1);
        return clearTimeout(h);
      }
    }), returnFalse);
    const [longPress, setLongPress] = useState(null);
    const [waitingForSpaceUp, setWaitingForSpaceUp, getWaitingForSpaceUp] = useState(false);
    const [pointerDownStartedHere, setPointerDownStartedHere, getPointerDownStartedHere] = useState(false);
    const [hovering, setHovering, getHovering] = useState(false);
    const onTouchStart = T$1(e => {
      e.preventDefault();
      e.stopPropagation();
      setPointerDownStartedHere(true);
      setHovering(true);
      setLongPress(false);
      const element = getElement();
      if (element) focusSelf(element);
    }, []);
    const onTouchMove = T$1(e => {
      e.preventDefault();
      e.stopPropagation();
      const element = getElement();
      const touch = e.touches[0];
      // Be as generous as possible with touch events by checking all four corners of the radius too
      const offsets = [[0, 0], [-touch.radiusX, -touch.radiusY], [+touch.radiusX, -touch.radiusY], [-touch.radiusX, +touch.radiusY], [+touch.radiusX, +touch.radiusY]];
      let hoveringAtAnyPoint = false;
      for (const [x, y] of offsets) {
        var _touch$clientX, _touch$clientY, _element$contains;
        const elementAtTouch = document.elementFromPoint(((_touch$clientX = touch === null || touch === void 0 ? void 0 : touch.clientX) !== null && _touch$clientX !== void 0 ? _touch$clientX : 0) + x, ((_touch$clientY = touch === null || touch === void 0 ? void 0 : touch.clientY) !== null && _touch$clientY !== void 0 ? _touch$clientY : 0) + y);
        hoveringAtAnyPoint || (hoveringAtAnyPoint = (_element$contains = element === null || element === void 0 ? void 0 : element.contains(elementAtTouch)) !== null && _element$contains !== void 0 ? _element$contains : false);
      }
      setHovering(hoveringAtAnyPoint);
    }, []);
    const onTouchEnd = T$1(e => {
      e.preventDefault();
      e.stopPropagation();
      const hovering = getHovering();
      const pointerDownStartedHere = getPointerDownStartedHere();
      setJustHandled(true);
      if (pointerDownStartedHere && hovering) {
        handlePress(e);
      }
      setWaitingForSpaceUp(false);
      setHovering(false);
      setPointerDownStartedHere(false);
    }, []);
    const onPointerDown = T$1(e => {
      if (e.buttons & 1) {
        e.preventDefault();
        e.stopPropagation();
        setPointerDownStartedHere(true);
        setHovering(true);
        setLongPress(false);
        const element = getElement();
        if (element) focusSelf(element);
      }
    }, []);
    const onPointerMove = useStableCallback(e => {
      let listeningForPress = getPointerDownStartedHere();
      // If we're hovering over this element and not holding down the mouse button (or whatever other primary button)
      // then we're definitely not in a press anymore (if we could we'd just wait for onPointerUp, but it could happen outside this element)
      if (!(e.buttons & 1)) setPointerDownStartedHere(listeningForPress = false);
      if (listeningForPress) {
        //e.preventDefault();
        //e.stopPropagation();
        const element = getElement();
        // Note: elementFromPoint starts reasonably expensive on a decent computer when on the order of 500 or so elements,
        // so we only test for hovering while actively attempting to detect a press
        const elementAtPointer = document.elementFromPoint(e.clientX, e.clientY);
        setHovering(element == elementAtPointer || (element === null || element === void 0 ? void 0 : element.contains(elementAtPointer)) || false);
      }
    });
    const onPointerUp = T$1(e => {
      const hovering = getHovering();
      const pointerDownStartedHere = getPointerDownStartedHere();
      setJustHandled(true);
      if (pointerDownStartedHere && hovering) {
        handlePress(e);
        e.preventDefault();
        e.stopPropagation();
      }
      setWaitingForSpaceUp(false);
      setHovering(false);
      setPointerDownStartedHere(false);
    }, []);
    const onPointerEnter = T$1(e => {
      setHovering(true);
    }, []);
    const onPointerLeave = T$1(e => {
      setHovering(false);
      setLongPress(false);
    }, []);
    useTimeout({
      callback: () => {
        const element = getElement();
        if (element && pointerDownStartedHere && hovering) {
          focusSelf(element);
        }
        setLongPress(pointerDownStartedHere && hovering);
      },
      timeout: longPressThreshold !== null && longPressThreshold !== void 0 ? longPressThreshold : null,
      triggerIndex: pointerDownStartedHere && hovering
    });
    const handlePress = useStableCallback(e => {
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
      if (onPressSync) {
        if (e.key == " " && !excludes("space", exclude)) {
          // We don't actually activate it on a space keydown
          // but we do preventDefault to stop the page from scrolling.
          setWaitingForSpaceUp(true);
          //onActiveStart(e);
          e.preventDefault();
        }
        if (e.key == "Enter" && !excludes("enter", exclude) && (!e.repeat || (allowRepeatPresses !== null && allowRepeatPresses !== void 0 ? allowRepeatPresses : false))) {
          handlePress(e);
        }
      }
    });
    const onKeyUp = useStableCallback(e => {
      const waitingForSpaceUp = getWaitingForSpaceUp();
      if (waitingForSpaceUp && e.key == " " && !excludes("space", exclude)) handlePress(e);
    });
    const onClick = useStableCallback(e => {
      const element = getElement();
      if (onPressSync) {
        e.preventDefault();
        //const element = getElement();
        //if (element)
        //    focusSelf(element);
        if (e.detail > 1) {
          e.stopImmediatePropagation();
          e.stopPropagation();
        } else {
          // Listen for "programmatic" click events.
          if (
          // Ignore the click events that were *just* handled with pointerup
          getJustHandled() == false &&
          // Ignore stray click events that were't fired SPECIFICALLY on this element
          e.target == element &&
          // Ignore click events that were fired on a radio that just became checked
          // (Whenever the `checked` property is changed, all browsers fire a `click` event, no matter the reason for the change,
          // but since everything's declarative and *we* were the reason for the change, 
          // this will always be a duplicate event related to whatever we just did.)
          (element === null || element === void 0 ? void 0 : element.tagName) == 'input' && element.type == 'radio' && element.checked) {
            // Intentional, for now. Programmatic clicks shouldn't happen in most cases.
            // TODO: Remove this when I'm confident stray clicks won't be handled.
            console.assert(false);
            debugger;
            handlePress(e);
          }
        }
      }
    });
    const onFocusOut = useStableCallback(_e => {
      setWaitingForSpaceUp(false);
    });
    const p = supportsPointerEvents();
    return {
      pressReturn: {
        pseudoActive: pointerDownStartedHere && hovering || waitingForSpaceUp || false,
        //hovering,
        longPress,
        propsUnstable: {
          onKeyDown,
          onKeyUp,
          onTouchStart: !hasPressEvent ? undefined : !p ? onTouchStart : undefined,
          onTouchCancel: !hasPressEvent ? undefined : !p ? onTouchEnd : undefined,
          onTouchMove: !hasPressEvent ? undefined : !p ? onTouchMove : undefined,
          onTouchEnd: !hasPressEvent ? undefined : !p ? onTouchEnd : undefined,
          onPointerDown: !hasPressEvent ? undefined : p ? onPointerDown : undefined,
          onPointerCancel: !hasPressEvent ? undefined : p ? onPointerDown : undefined,
          onPointerMove: !pointerDownStartedHere || !hasPressEvent ? undefined : p ? onPointerMove : undefined,
          onPointerUp: !hasPressEvent ? undefined : p ? onPointerUp : undefined,
          onPointerEnter: !hasPressEvent ? undefined : p ? onPointerEnter : undefined,
          onPointerLeave: !hasPressEvent ? undefined : p ? onPointerLeave : undefined,
          onfocusout: onFocusOut,
          onClick
        }
      }
    };
  }
  let pulse = "vibrate" in navigator && navigator.vibrate instanceof Function ? () => navigator.vibrate(10) : () => {};
  function excludes(target, exclude) {
    if (exclude === false) return false;
    if (exclude === true || exclude !== null && exclude !== void 0 && exclude[target]) return true;
    return false;
  }

  /**
   * All the list-related hooks combined into one giant hook that encapsulates everything.
   *
   * Unlike most others, this hook assume's it's the final one--the "outermost" hook in the component--so it uses `useManagedChildren` and wraps everything up nicely,
   * combining event handlers that are used in multiple sub-hooks, collecting all the necessary context-related data, and merging all known DOM props together.
   *
   *
   *
   * @returns
   */
  function useCompleteListNavigation(_ref38) {
    let {
      linearNavigationParameters,
      rearrangeableChildrenParameters,
      sortableChildrenParameters,
      typeaheadNavigationParameters,
      rovingTabIndexParameters,
      singleSelectionParameters,
      paginatedChildrenParameters,
      staggeredChildrenParameters,
      ...completeListNavigationParameters
    } = _ref38;
    //type M = UseListNavigationSingleSelectionChildInfo<ChildElement>;
    const {
      initiallySelectedIndex
    } = singleSelectionParameters;
    const getChildren = T$1(() => managedChildrenReturn.getChildren(), []);
    const getHighestChildIndex = T$1(() => getChildren().getHighestIndex(), []);
    const getValid = T$1(i => {
      const child = getChildren().getAt(i);
      if (!child) return false;
      return !child.hidden;
    }, []);
    const {
      rearrangeableChildrenReturn: {
        indexDemangler,
        indexMangler,
        ...rearrangeableChildrenReturn
      },
      sortableChildrenReturn
    } = useSortableChildren({
      rearrangeableChildrenParameters: {
        onRearranged: useStableCallback(() => {
          refreshPagination(paginatedChildrenParameters.paginationMin, paginatedChildrenParameters.paginationMax);
        }),
        ...rearrangeableChildrenParameters
      },
      sortableChildrenParameters
    });
    const {
      childrenHaveFocusParameters,
      managedChildrenParameters,
      rovingTabIndexChildContext,
      typeaheadNavigationChildContext,
      singleSelectionContext,
      linearNavigationReturn,
      rovingTabIndexReturn,
      singleSelectionReturn,
      typeaheadNavigationReturn
    } = useListNavigationSingleSelection({
      managedChildrenReturn: {
        getChildren
      },
      linearNavigationParameters: {
        getHighestIndex: getHighestChildIndex,
        isValid: getValid,
        indexDemangler,
        indexMangler,
        ...linearNavigationParameters
      },
      typeaheadNavigationParameters: {
        isValid: getValid,
        ...typeaheadNavigationParameters
      },
      rovingTabIndexParameters: {
        initiallyTabbedIndex: initiallySelectedIndex,
        ...rovingTabIndexParameters
      },
      singleSelectionParameters,
      ...completeListNavigationParameters
    });
    //const { linearNavigationReturn, typeaheadNavigationReturn } = listNavigationSingleSelectionSortableReturn;
    //const [childCount, setChildCount] = useState(0);
    const {
      childrenHaveFocusChildContext,
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
      managedChildrenParameters: {
        onChildCountChange: useStableCallback(c => {
          onChildCountChange(c);
        }),
        ...managedChildrenParameters
      }
    });
    const {
      paginatedChildrenReturn,
      paginatedChildrenReturn: {
        refreshPagination
      },
      managedChildrenParameters: {
        onChildCountChange
      },
      context: {
        paginatedChildContext
      }
    } = usePaginatedChildren({
      managedChildrenReturn,
      paginatedChildrenParameters,
      linearNavigationParameters: {
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
      managedChildrenReturn,
      staggeredChildrenParameters
    });
    const props = useMergedProps(linearNavigationReturn.propsStable, typeaheadNavigationReturn.propsStable);
    const context = useStableObject({
      singleSelectionContext,
      managedChildContext,
      rovingTabIndexChildContext,
      typeaheadNavigationChildContext,
      childrenHaveFocusChildContext,
      paginatedChildContext,
      staggeredChildContext
    });
    return {
      context,
      props,
      managedChildrenReturn,
      rearrangeableChildrenReturn: {
        indexDemangler,
        indexMangler,
        ...rearrangeableChildrenReturn
      },
      staggeredChildrenReturn,
      paginatedChildrenReturn,
      sortableChildrenReturn,
      linearNavigationReturn,
      rovingTabIndexReturn,
      singleSelectionReturn,
      typeaheadNavigationReturn,
      childrenHaveFocusReturn
    };
  }
  function useCompleteListNavigationChild(_ref39) {
    let {
      //managedChildParameters: { hidden, disabled, index, getSortValue },
      completeListNavigationChildParameters,
      singleSelectionChildParameters,
      rovingTabIndexChildParameters,
      managedChildParameters,
      textContentParameters,
      context: {
        childrenHaveFocusChildContext,
        managedChildContext,
        rovingTabIndexChildContext,
        singleSelectionContext,
        typeaheadNavigationChildContext,
        paginatedChildContext,
        staggeredChildContext
      },
      pressParameters: {
        onPressSync: ops1,
        ...pressParameters
      },
      sortableChildParameters: {
        getSortValue
      },
      ..._void
    } = _ref39;
    const {
      index
    } = managedChildParameters;
    const {
      managedChildParameters: {
        setChildCountIfPaginated,
        setPaginationVisible,
        setParentIsPaginated
      },
      paginatedChildReturn,
      paginatedChildReturn: {
        hideBecausePaginated
      },
      props: paginationProps
    } = usePaginatedChild({
      managedChildParameters: {
        index
      },
      context: {
        paginatedChildContext
      }
    });
    const {
      managedChildParameters: {
        setParentIsStaggered,
        setStaggeredVisible
      },
      staggeredChildReturn,
      staggeredChildReturn: {
        hideBecauseStaggered
      },
      props: staggeredProps
    } = useStaggeredChild({
      managedChildParameters,
      context: {
        staggeredChildContext
      }
    });
    let {
      hidden
    } = rovingTabIndexChildParameters;
    rovingTabIndexChildParameters.hidden || (rovingTabIndexChildParameters.hidden = hideBecausePaginated || hideBecauseStaggered);
    let {
      disabled
    } = singleSelectionChildParameters;
    if (hidden) disabled = true;
    const {
      refElementReturn
    } = useRefElement({
      refElementParameters: {}
    });
    const {
      getElement
    } = refElementReturn;
    const {
      focusSelf
    } = pressParameters;
    const {
      hasCurrentFocusParameters: {
        onCurrentFocusedInnerChanged: ocfic1
      },
      pressParameters: {
        onPressSync: ops2,
        ...p1
      },
      rovingTabIndexChildReturn,
      singleSelectionChildReturn,
      managedChildParameters: {
        setLocalSelected
      }
    } = useListNavigationSingleSelectionChild({
      managedChildParameters: {
        index
      },
      rovingTabIndexChildParameters: {
        hidden
      },
      singleSelectionChildParameters: {
        ...singleSelectionChildParameters
      },
      rovingTabIndexChildContext,
      singleSelectionContext,
      typeaheadNavigationChildContext,
      refElementReturn,
      textContentParameters: {
        hidden,
        ...textContentParameters
      }
    });
    const {
      getTabbable,
      setTabbable,
      tabbable
    } = rovingTabIndexChildReturn;
    const {
      pressReturn
    } = usePress({
      pressParameters: {
        ...p1,
        ...pressParameters,
        onPressSync: disabled ? null : e => {
          ops2 === null || ops2 === void 0 ? void 0 : ops2(e);
          ops1 === null || ops1 === void 0 ? void 0 : ops1(e);
        }
      },
      refElementReturn
    });
    const {
      getSelected,
      selected
    } = singleSelectionChildReturn;
    const mcp1 = {
      disabled,
      focusSelf,
      getElement,
      getSelected,
      getTabbable,
      hidden,
      index,
      selected,
      setLocalSelected,
      setTabbable,
      tabbable,
      getSortValue,
      setChildCountIfPaginated,
      setPaginationVisible,
      setParentIsPaginated,
      setParentIsStaggered,
      setStaggeredVisible
    };
    const {
      managedChildReturn
    } = useManagedChild({
      context: {
        managedChildContext
      },
      managedChildParameters: {
        index
      }
    }, {
      ...mcp1,
      ...completeListNavigationChildParameters
    });
    const {
      hasCurrentFocusParameters: {
        onCurrentFocusedInnerChanged: ocfic2
      }
    } = useChildrenHaveFocusChild({
      childrenHaveFocusChildContext
    });
    const onCurrentFocusedInnerChanged = useStableCallback((focused, prev, e) => {
      ocfic1 === null || ocfic1 === void 0 ? void 0 : ocfic1(focused, prev, e);
      ocfic2 === null || ocfic2 === void 0 ? void 0 : ocfic2(focused, prev, e);
    });
    const {
      hasCurrentFocusReturn
    } = useHasCurrentFocus({
      hasCurrentFocusParameters: {
        onCurrentFocusedInnerChanged,
        onCurrentFocusedChanged: null
      },
      refElementReturn
    });
    const props = useMergedProps(refElementReturn.propsStable, pressReturn.propsUnstable, hasCurrentFocusReturn.propsStable, rovingTabIndexChildReturn.propsUnstable, singleSelectionChildReturn.propsUnstable, paginationProps, staggeredProps);
    return {
      props,
      pressReturn,
      rovingTabIndexChildReturn,
      singleSelectionChildReturn,
      hasCurrentFocusReturn,
      managedChildReturn,
      paginatedChildReturn,
      staggeredChildReturn
    };
  }
  /*
  function foo<ParentElement extends Element, ChildElement extends Element, M extends UseListNavigationSingleSelectionSortableChildInfo<ChildElement>>(p: UseCompleteListNavigationParameters<ParentElement, ChildElement, M>) {
      const { singleSelectionReturn } = useCompleteListNavigation<ParentElement, ChildElement, M>(p);
      const selectedIndex = 0;
      useSingleSelectionDeclarative({ singleSelectionReturn, singleSelectionDeclarativeParameters: { selectedIndex } })
  }*/

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
  function identity() {
    for (var _len4 = arguments.length, t = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
      t[_key4] = arguments[_key4];
    }
    return t;
  }
  /**
   * Given an async function, returns a function that's suitable for non-async APIs,
   * along with other information about the current run's status.
   *
   * See also `useAsyncHandler` for a version that's specialized for DOM event handlers.
   *
   * When called multiple times in quick succession, (i.e. before the handler has finished),
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
   */
  function useAsync(asyncHandler2, options) {
    // Things related to current execution
    // Because we can both return and throw undefined, 
    // we need separate state to track their existance too.
    const [pending, setPending, getPending] = useState(false);
    const [result, setResult, getResult] = useState(undefined);
    const [error, setError, _getError] = useState(undefined);
    const [hasError, setHasError, _getHasError] = useState(false);
    const [hasResult, setHasResult, _getHasResult] = useState(false);
    const [asyncDebouncing, setAsyncDebouncing] = useState(false);
    const [syncDebouncing, setSyncDebouncing] = useState(false);
    //const [currentCapture, setCurrentCapture] = useState<AP | undefined>(undefined);
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
    } = options !== null && options !== void 0 ? options : {};
    const captureStable = useStableCallback(captureUnstable !== null && captureUnstable !== void 0 ? captureUnstable : identity);
    const asyncHandlerStable = useStableCallback(asyncHandler2 !== null && asyncHandler2 !== void 0 ? asyncHandler2 : identity);
    const {
      flush,
      syncOutput,
      cancel
    } = F$1(() => {
      return asyncToSync({
        asyncInput: asyncHandlerStable,
        capture: captureStable,
        setAsyncDebouncing,
        setError,
        setPending,
        setReturn: setResult,
        setSyncDebouncing,
        setHasError,
        setHasResult,
        incrementCallCount,
        incrementFinallyCount,
        incrementRejectCount,
        incrementResolveCount,
        throttle: options === null || options === void 0 ? void 0 : options.throttle,
        wait: options === null || options === void 0 ? void 0 : options.debounce
      });
    }, [throttle, debounce]);
    h(() => {
      return () => cancel();
    }, [cancel]);
    // We keep, like, a lot of render-state, but it only ever triggers a re-render
    // when we start/stop an async action.
    // Keep track of this for the caller's sake -- we don't really care.
    /*const [currentType, setCurrentType] = useState<null | "sync" | "async">(null);*/
    const [runCount, setRunCount] = useState(0);
    const [settleCount, setSettleCount] = useState(0);
    const [resolveCount, setResolveCount] = useState(0);
    const [rejectCount, setRejectCount] = useState(0);
    return {
      syncHandler: syncOutput,
      //currentType,
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
      callCount: runCount,
      flushDebouncedPromise: flush
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
   */
  function asyncToSync(_ref40) {
    let {
      asyncInput,
      incrementCallCount,
      incrementFinallyCount,
      incrementRejectCount,
      incrementResolveCount,
      setHasError,
      setHasResult,
      setError,
      setReturn,
      capture,
      setAsyncDebouncing,
      setSyncDebouncing,
      setPending,
      throttle,
      wait
    } = _ref40;
    let pending = false;
    let syncDebouncing = false;
    let asyncDebouncing = false;
    let currentCapture = Unset;
    const onAsyncFinished = () => {
      // 8. This is run at the end of every invocation of the async handler,
      // whether it completed or not.
      incrementFinallyCount();
      setPending(pending = false);
      if (!asyncDebouncing) ;else {
        // 9a. Another request to run the async handler came in while we were running this one.
        // Instead of stopping, we're just going to immediately run again using the arguments that were given to us most recently.
        // We also clear that flag, because we're handling it now. It'll be set again if the handler is called again while *this* one is running
        setAsyncDebouncing(asyncDebouncing = false);
        console.assert(currentCapture !== Unset);
        if (currentCapture != Unset) {
          setSyncDebouncing(syncDebouncing = true);
          syncDebounced();
        }
      }
    };
    const sync = function () {
      // 5. We're finally running the async version of the function, so notify the caller that the return value is pending.
      // And because the fact that we're here means the debounce/throttle period is over, we can clear that flag too.
      setPending(pending = true);
      console.assert(syncDebouncing == false);
      setHasError(null);
      setHasResult(null);
      let promiseOrReturn;
      let hadSyncError = false;
      try {
        // 6. Run the function we were given.
        // Because it may be sync, or it may throw before returning, we must still wrap it in a try/catch...
        // Also important is that we preserve the async-ness (or lack thereof) on the original input function.
        incrementCallCount();
        promiseOrReturn = asyncInput(...arguments);
        setHasError(false);
      } catch (ex) {
        hadSyncError = true;
        setError(ex);
      }
      // 7. Either end immediately, or schedule to end when completed.
      if (isPromise(promiseOrReturn)) {
        promiseOrReturn.then(r => {
          incrementResolveCount();
          setHasResult(true);
          setReturn(r);
          return r;
        }).catch(e => {
          incrementRejectCount();
          setHasError(true);
          setError(e);
          return e;
        }).finally(onAsyncFinished);
      } else {
        if (!hadSyncError) {
          incrementResolveCount();
          setHasResult(true);
          setHasError(false);
        } else {
          incrementRejectCount();
          setHasResult(false);
          setHasError(true);
        }
        setReturn(promiseOrReturn);
        setPending(pending = false);
        onAsyncFinished();
      }
    };
    // 4. Instead of calling the sync version of our function directly, we allow it to be throttled/debounced.
    const syncDebounced = debounce(() => {
      setSyncDebouncing(syncDebouncing = false);
      if (!pending) {
        // 3a. If this is the first invocation, or if we're not still waiting for a previous invocation to finish its async call,
        // then we can just go ahead and run the debounced version of our function.
        console.assert(currentCapture != Unset);
        sync(...currentCapture);
      } else {
        // 3b. If we were called while still waiting for the (or a) previous invocation to finish,
        // then we'll need to delay this one. When that previous invocation finishes, it'll check
        // to see if it needs to run again, and it will use these new captured arguments from step 2.
        setAsyncDebouncing(asyncDebouncing = true);
      }
    }, wait, {
      leading: true,
      trailing: true,
      maxWait: throttle
    });
    return {
      syncOutput: function () {
        // 1. We call the sync version of our async function.
        // 2. We capture the arguments into a form that won't become stale if/when the function is called with a (possibly seconds-long) delay.
        currentCapture = capture(...arguments);
        setSyncDebouncing(syncDebouncing = true);
        syncDebounced();
      },
      flush: () => {
        syncDebounced.flush();
      },
      cancel: () => {
        syncDebounced.cancel();
      }
    };
  }

  /**
   * Given an asyncronous event handler, returns a syncronous one that works on the DOM,
   * along with some other information related to the current state.
   * Does not modify any props.
   *
   * Note that because the handler you provide may be called with a delay, and
   * because the value of, e.g., an `<input>` element will likely be stale by the
   * time the delay is over, a `capture` function is necessary in order to
   * capture the relevant information from the DOM. Any other simple event data,
   * like `mouseX` or `shiftKey` can stay on the event itself and don't
   * need to be captured &ndash; it's never stale.
   *
   * ```tsx
   * const asyncOnInput = async (value: number, e: Event) => {
   *     [...] // Ex. send to a server and setState when done
   * };
   * const {
   *     // A sync version of asyncOnInput
   *     syncHandler,
   *     // True while the handler is running
   *     pending,
   *     // The error thrown, if any
   *     error,
   *     // Show this value while the operation's pending
   *     currentCapture,
   *     // And others, see `UseAsyncHandlerReturnType`
   *     ...rest
   * } = useAsyncHandler<HTMLInputElement>()(asyncOnInput, {
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
   * The handler is automatically throttled to only run one at a time.
   * If the handler is called, and then before it finishes, is called again,
   * it will be put on hold until the current one finishes, at which point
   * the second one will run.  If the handler is called a third time before
   * the first has finished, it will *replace* the second, so only the most
   * recently called iteration of the handler will run.
   *
   *
   * You may optionally *also* specify debounce and throttle parameters that wait until the
   * syncronous handler has not been called for the specified number of
   * milliseconds, at which point we *actually* run the asyncronous handler
   * according to the logic in the previous paragraph. This is in
   * *addition* to throttling the handler, and does not replace that behavior.
   *
   * @see useAsync A more general version of this hook that can work with any type of handler, not just DOM event handlers.
   */
  function useAsyncHandler(_ref41) {
    let {
      asyncHandler,
      capture: originalCapture,
      ...restAsyncOptions
    } = _ref41;
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
  }
  function useHasLastFocus(args) {
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
        ..._void
      }
    } = args;
    useEnsureStability("useHasFocus", onLastFocusedChanged, onLastFocusedInnerChanged);
    const [getLastFocused, setLastFocused] = usePassiveState(onLastFocusedChanged, returnFalse, runImmediately);
    const [getLastFocusedInner, setLastFocusedInner] = usePassiveState(onLastFocusedInnerChanged, returnFalse, runImmediately);
    const {
      activeElementReturn
    } = useActiveElement({
      activeElementParameters: {
        onLastActiveElementChange: T$1((lastActiveElement, prevLastActiveElement, e) => {
          const selfElement = getElement();
          const focused = selfElement != null && selfElement == lastActiveElement;
          const focusedInner = !!(selfElement !== null && selfElement !== void 0 && selfElement.contains(lastActiveElement));
          setLastFocused(focused, e);
          setLastFocusedInner(focusedInner, e);
          onLastActiveElementChange === null || onLastActiveElementChange === void 0 ? void 0 : onLastActiveElementChange(lastActiveElement, prevLastActiveElement, e);
        }, []),
        ...activeElementParameters
      }
    });
    h(() => {
      return () => {
        setLastFocused(false);
        setLastFocusedInner(false);
      };
    }, []);
    return {
      activeElementReturn,
      hasLastFocusReturn: {
        getLastFocused,
        getLastFocusedInner
      }
    };
  }
  B$2(null);
  const RandomWords$1 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.".split(" ");
  const ListNavigationSingleSelectionChildContext = B$2(null);
  const DemoUseRovingTabIndex = R(() => {
    const [selectionMode, setSelectionMode] = useState("activation");
    const [count, setCount] = useState(10);
    const [min, setMin] = useState(1);
    const [max, setMax] = useState(2);
    const [staggered, setStaggered] = useState(true);
    // const [selectedIndex, _setLocalSelectedIndex] = useState<number | null>(0);
    // const [tabbableIndex, _setLocalTabbableIndex] = useState<number | null>(0);
    const r = useCompleteListNavigation({
      rovingTabIndexParameters: {
        onTabbableIndexChange: null,
        untabbable: false
      },
      singleSelectionParameters: {
        initiallySelectedIndex: 0,
        onSelectedIndexChange: useStableCallback(newIndex => {
          /*setLocalSelectedIndex(newIndex);*/changeSelectedIndex(newIndex);
        })
      },
      typeaheadNavigationParameters: {
        collator: null,
        noTypeahead: false,
        typeaheadTimeout: 1000
      },
      linearNavigationParameters: {
        disableArrowKeys: false,
        disableHomeEndKeys: false,
        navigationDirection: "vertical",
        navigatePastEnd: "wrap",
        navigatePastStart: "wrap",
        pageNavigationSize: 0.1
      },
      rearrangeableChildrenParameters: {
        getIndex: T$1(a => a.props.index, [])
      },
      paginatedChildrenParameters: {
        paginationMin: min,
        paginationMax: max
      },
      sortableChildrenParameters: {
        compare: T$1((rhs, lhs) => {
          return lhs.index - rhs.index;
        }, [])
      },
      staggeredChildrenParameters: {
        staggered
      }
    });
    const {
      props,
      context,
      rovingTabIndexReturn: {
        setTabbableIndex
      },
      singleSelectionReturn: {
        changeSelectedIndex
      },
      managedChildrenReturn: {
        getChildren
      },
      typeaheadNavigationReturn: {
        typeaheadStatus
      },
      rearrangeableChildrenReturn: {
        useRearrangedChildren,
        shuffle
      }
      //        rearrangeableChildrenReturn: { useRearrangedChildren: useSortableProps, shuffle }
    } = r;
    //useSingleSelectionDeclarative({ singleSelectionReturn: {  changeSelectedIndex }, singleSelectionDeclarativeParameters: { selectedIndex } });
    const children = getChildren();
    const jsxChildren = Array.from(function* () {
      for (let i = 0; i < count; ++i) {
        yield o$1(DemoUseRovingTabIndexChild, {
          index: i
        }, i);
      }
    }());
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
        onClick: () => shuffle(children),
        children: "Shuffle"
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
            changeSelectedIndex(e.currentTarget.valueAsNumber);
          }
        })]
      }), o$1("label", {
        children: ["Pagination window starts at: ", o$1("input", {
          type: "number",
          value: min,
          min: 0,
          max: max,
          onInput: e => {
            e.preventDefault();
            setMin(e.currentTarget.valueAsNumber);
          }
        })]
      }), o$1("label", {
        children: ["Pagination window ends at: ", o$1("input", {
          type: "number",
          value: max,
          min: min,
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
        children: ["Selection mode:", o$1("label", {
          children: [o$1("input", {
            name: "rti-demo-selection-mode",
            type: "radio",
            checked: selectionMode == 'focus',
            onInput: e => {
              e.preventDefault();
              setSelectionMode("focus");
            }
          }), " On focus"]
        }), o$1("label", {
          children: [o$1("input", {
            name: "rti-demo-selection-mode",
            type: "radio",
            checked: selectionMode == 'activation',
            onInput: e => {
              e.preventDefault();
              setSelectionMode("activation");
            }
          }), " On activation (click, tap, Enter, Space, etc.)"]
        })]
      }), o$1(SelectionModeContext.Provider, {
        value: selectionMode,
        children: o$1(ListNavigationSingleSelectionChildContext.Provider, {
          value: context,
          children: o$1("ol", {
            ...props,
            children: useRearrangedChildren(jsxChildren)
          })
        })
      }), o$1("div", {
        children: ["Typeahead status: ", typeaheadStatus]
      })]
    });
  });
  const SelectionModeContext = B$2("focus");
  const DemoUseRovingTabIndexChild = R(_ref42 => {
    let {
      index
    } = _ref42;
    const selectionMode = q(SelectionModeContext);
    let disabled = index == 6;
    let hidden = index == 7;
    if (index == 8) {
      disabled = hidden = true;
    }
    const [randomWord] = useState(() => RandomWords$1[index /*Math.floor(Math.random() * (RandomWords.length - 1))*/]);
    const context = q(ListNavigationSingleSelectionChildContext);
    const focusSelf = T$1(e => {
      e.focus();
    }, []);
    // const { refElementReturn } = useRefElement<HTMLLIElement>({ refElementParameters: { onElementChange: undefined } });
    //const { getElement, propsStable: p3 } = refElementReturn;
    const getSortValue = useStableCallback(() => index);
    const {
      props,
      rovingTabIndexChildReturn: {
        tabbable,
        propsUnstable: p2
      },
      singleSelectionChildReturn: {
        selected,
        selectedOffset
      },
      paginatedChildReturn: {
        isPaginated,
        paginatedVisible
      },
      staggeredChildReturn: {
        isStaggered,
        staggeredVisible
      }
    } = useCompleteListNavigationChild({
      managedChildParameters: {
        index
      },
      rovingTabIndexChildParameters: {
        hidden
      },
      sortableChildParameters: {
        getSortValue
      },
      pressParameters: {
        onPressSync: null,
        exclude: {},
        focusSelf
      },
      singleSelectionChildParameters: {
        ariaPropName: "aria-selected",
        selectionMode,
        disabled
      },
      completeListNavigationChildParameters: {
        foo: "bar"
      },
      context,
      textContentParameters: {
        getText: T$1(e => {
          var _e$textContent;
          return (_e$textContent = e === null || e === void 0 ? void 0 : e.textContent) !== null && _e$textContent !== void 0 ? _e$textContent : "";
        }, [])
      }
    });
    const text = "".concat(randomWord, " This is item #").concat(index, " (offset: ").concat(selectedOffset, ") ").concat(hidden ? " (hidden)" : "").concat(disabled ? " (disabled)" : "").concat(selected ? " (selected)" : " (not selected)", " (").concat(tabbable ? "Tabbable" : "Not tabbable", ")");
    /*
        const {
            hasCurrentFocusParameters: { onCurrentFocusedInnerChanged, ...void5 },
            managedChildParameters: { getSelected, selected, setSelected, ...void4 },
            pressParameters: { onPressSync, ...void3 },
            rovingTabIndexChildReturn: { setTabbable, getTabbable, propsUnstable: p2, tabbable, ...void2 },
            singleSelectionChildReturn: { propsUnstable: p4, ...void1 },
            ...void6
        } = useListNavigationSingleSelectionChild<HTMLLIElement>({
            managedChildParameters: { hidden, index, disabled },
            rovingTabIndexChildParameters: rovingTabIndexChildParameters,
            rovingTabIndexReturn,
            singleSelectionChildParameters: { ariaPropName: "aria-selected", selectionMode },
            singleSelectionReturn,
            typeaheadNavigationChildParameters: { text, ...typeaheadNavigationChildParameters }
        });
    
        const {
            pressReturn: { propsStable: p5 }
        } = usePress<HTMLLIElement>({
            pressParameters: { exclude: {}, focusSelf, onPressSync, onPseudoActiveStart: null, onPseudoActiveStop: null },
            refElementReturn
        })
    
        useManagedChild<UseListNavigationSingleSelectionChildInfo<HTMLLIElement>>({
            managedChildParameters: { index, focusSelf, getElement, getSelected, getTabbable, hidden, selected, setSelected, setTabbable, tabbable, disabled },
            managedChildrenReturn
        });
    
        assertEmptyObject(void1);
        assertEmptyObject(void2);
        assertEmptyObject(void3);
        assertEmptyObject(void4);
        assertEmptyObject(void5);
        assertEmptyObject(void6);
    
        const {
            hasCurrentFocusReturn: { propsStable: p6 }
        } = useHasCurrentFocus({
            refElementReturn,
            hasCurrentFocusParameters: {
                onCurrentFocusedChanged: null,
                onCurrentFocusedInnerChanged
            }
        });
    
        const props = useMergedProps<HTMLLIElement>(p2, p3, p4, p5, p6);*/
    return o$1("li", {
      ...props,
      style: {
        opacity: isPaginated ? paginatedVisible ? 1 : 0.25 : 1,
        transform: "translateX(".concat(staggeredVisible ? isStaggered ? "50%" : "0%" : "0%", ")")
      },
      children: [text, o$1("input", {
        ...useMergedProps(p2, {
          type: "number"
        }),
        style: {
          width: "5ch"
        }
      })]
    });
  });
  const RandomWords = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.".split(" ");
  B$2(null);
  R(_ref43 => {
    let {
      depth
    } = _ref43;
    const [active, setActive] = useState(false);
    const {
      focusTrapReturn: {
        propsUnstable
      },
      refElementReturn: {
        propsStable
      }
    } = useFocusTrap({
      focusTrapParameters: {
        trapActive: active,
        onlyMoveFocus: false,
        focusOpener: e => e === null || e === void 0 ? void 0 : e.focus(),
        focusPopup: (e, f) => {
          var _f;
          return (_f = f()) === null || _f === void 0 ? void 0 : _f.focus();
        }
      },
      refElementParameters: {
        onElementChange: undefined
      }
    });
    //const { useRovingTabIndexChild, useRovingTabIndexProps } = useRovingTabIndex<HTMLUListElement, RovingTabIndexChildInfo>({ tabbableIndex, focusOnChange: false });
    const divProps = useMergedProps(propsUnstable, propsStable, {
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
          depth: depth !== null && depth !== void 0 ? depth : 0
        })
      })]
    });
  });
  const DemoUseFocusTrapChild = R(_ref44 => {
    let {
      setActive,
      active
    } = _ref44;
    return o$1(p$1, {
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
  R(() => {
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
      debounce: debounce == 0 ? undefined : debounce
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
  R(() => {
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
              children: "".concat(anyWaiting)
            })]
          }), o$1("tr", {
            children: [o$1("td", {
              children: "pending"
            }), o$1("td", {
              children: "".concat(pending)
            })]
          }), o$1("tr", {
            children: [o$1("td", {
              children: "debouncingSync"
            }), o$1("td", {
              children: "".concat(debouncingSync)
            })]
          }), o$1("tr", {
            children: [o$1("td", {
              children: "debouncingAsync"
            }), o$1("td", {
              children: "".concat(debouncingAsync)
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
  R(() => {
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
      refElementReturn
    } = useRefElement({
      refElementParameters: {
        onElementChange: undefined
      }
    });
    const {
      propsStable: p2
    } = refElementReturn;
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
            children: ["activeElement: ", activeElement === null || activeElement === void 0 ? void 0 : activeElement.textContent]
          }), o$1("li", {
            children: ["lastActiveElement: ", lastActiveElement === null || lastActiveElement === void 0 ? void 0 : lastActiveElement.textContent]
          })]
        })
      })]
    });
  });
  //const GridRowContext = createContext<UseGridNavigationRow<HTMLTableRowElement, HTMLTableCellElement, {}, {}, string, string>>(null!);
  //const GridCellContext = createContext<UseGridNavigationCell<HTMLTableCellElement, {}, string>>(null!);
  const DemoUseGrid = R(() => {
    //return <div />;
    //const [, setLastFocusedInner, _getLastFocusedInner] = useState(false);
    //const { props } = useHasFocus<HTMLTableSectionElement>({ onLastFocusedInnerChanged: setLastFocusedInner, getDocument });
    const [tabbableColumn, setTabbableColumn, _getTabbableColumn] = useState(null);
    const [selectedRow, setSelectedRow, _getSelectedRow] = useState(null);
    const [tabbableRow, setTabbableRow] = useState(null);
    //const getHighestIndex = useCallback(() => getChildren().getHighestIndex(), []);
    //const getChildren = useCallback<typeof getChildren2>(() => { return getChildren2() }, []);
    //const getHighestChildIndex = useStableCallback(() => ghci());
    /*const getValid = useStableCallback<GetValid>((i) => {
        const child = getChildren().getAt(i);
        return !(child?.hidden || child?.disabled);
    });*/
    const ret = useCompleteGridNavigation({
      singleSelectionParameters: {
        initiallySelectedIndex: selectedRow,
        onSelectedIndexChange: setSelectedRow
      },
      gridNavigationParameters: {
        onTabbableColumnChange: setTabbableColumn
      },
      linearNavigationParameters: {
        disableArrowKeys: false,
        disableHomeEndKeys: false,
        navigatePastEnd: "wrap",
        navigatePastStart: "wrap",
        pageNavigationSize: 0.1
      },
      //managedChildrenReturn: { getChildren },
      rovingTabIndexParameters: {
        onTabbableIndexChange: setTabbableRow,
        untabbable: false
      },
      typeaheadNavigationParameters: {
        collator: null,
        noTypeahead: false,
        typeaheadTimeout: 1000
      },
      rearrangeableChildrenParameters: {
        getIndex: T$1(a => a.props.index, [])
      },
      sortableChildrenParameters: {
        compare: T$1((rhs, lhs) => {
          return lhs.index - rhs.index;
        }, [])
      },
      paginatedChildrenParameters: {
        paginationMin: 1,
        paginationMax: 2
      },
      staggeredChildrenParameters: {
        staggered: false
      }
    });
    const {
      context,
      props,
      //rearrangeableChildrenParameters: { getHighestChildIndex: ghci, getValid: gv },
      rearrangeableChildrenReturn: {
        useRearrangedChildren
      }
    } = ret;
    //const { getChildren: getChildren2 } = managedChildrenReturn;
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
        children: ["Current column: ", tabbableColumn]
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
        }), o$1(GridRowContext.Provider, {
          value: context,
          children: o$1("tbody", {
            ...props,
            children: useRearrangedChildren(Array.from(function* () {
              for (let i = 0; i < 10; ++i) {
                yield o$1(DemoUseGridRow, {
                  index: i
                }, i);
              }
            }()))
          })
        })]
      })]
    });
  });
  //type GridRowContext<ParentElement extends Element, RowElement extends Element> = CompleteGridNavigationContext<ParentElement, RowElement>;
  //type GridCellContext<RowElement extends Element, CellElement extends Element> = CompleteGridNavigationRowContext<RowElement, CellElement>;
  const GridRowContext = B$2(null);
  const GridCellContext = B$2(null);
  const DemoUseGridRow = R(_ref45 => {
    let {
      index
    } = _ref45;
    useState(() => RandomWords[index /*Math.floor(Math.random() * (RandomWords.length - 1))*/]);
    const [_tabbableColumn, setTabbableColumn, _getTabbableColumn] = useState(null);
    //const getHighestIndex = useCallback(() => getChildren().getHighestIndex(), []);
    //const getChildren = useCallback(() => { return getChildren2() }, []);
    const hidden = index === 3;
    const disabled = hidden;
    //    const getValid = useStableCallback<GetValid>((i) => !!(ret.managedChildReturn.getChildren().getAt(i)?.hidden));
    const contextFromParent = q(GridRowContext);
    const ret = useCompleteGridNavigationRow({
      rowAsChildOfGridParameters: {
        completeGridNavigationRowParameters: {
          foo: "bar"
        },
        sortableChildParameters: {
          getSortValue: returnNull
        },
        context: contextFromParent,
        rovingTabIndexChildParameters: {
          hidden
        },
        managedChildParameters: {
          index
        },
        singleSelectionChildParameters: {
          disabled,
          ariaPropName: "aria-checked",
          selectionMode: "focus"
        },
        textContentParameters: {
          getText: T$1(e => {
            var _e$textContent2;
            return (_e$textContent2 = e === null || e === void 0 ? void 0 : e.textContent) !== null && _e$textContent2 !== void 0 ? _e$textContent2 : "";
          }, [])
        }
      },
      rowAsParentOfCellsParameters: {
        linearNavigationParameters: {
          disableArrowKeys: false,
          disableHomeEndKeys: false,
          navigatePastEnd: "wrap",
          navigatePastStart: "wrap"
        },
        rovingTabIndexParameters: {
          onTabbableIndexChange: useStableCallback(i => {
            setTabbableColumn(i);
          })
        },
        typeaheadNavigationParameters: {
          collator: null,
          noTypeahead: false,
          typeaheadTimeout: 1000
        }
      }
    });
    const {
      rowAsChildOfGridReturn: {
        rovingTabIndexChildReturn: {
          tabbable
        }
      },
      context: contextToChild,
      props
    } = ret;
    return o$1("tr", {
      ...props,
      "data-tabbable": ret.rowAsChildOfGridReturn.rovingTabIndexChildReturn.tabbable,
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
  const DemoUseGridCell = _ref46 => {
    let {
      index,
      row,
      rowIsTabbable
    } = _ref46;
    if (row >= 6 && row % 2 == 0 && index > 1) return null;
    let hiddenText = row === 3 ? " (row hidden)" : "";
    const context = q(GridCellContext);
    const {
      props,
      rovingTabIndexChildReturn: {
        tabbable
      }
    } = useCompleteGridNavigationCell({
      gridNavigationCellParameters: {
        colSpan: 1
      },
      managedChildParameters: {
        index
      },
      rovingTabIndexChildParameters: {
        hidden: false
      },
      context,
      completeGridNavigationCellParameters: {
        bar: "baz",
        focusSelf: useStableCallback(e => e.focus())
      },
      textContentParameters: {
        getText: T$1(e => {
          var _e$textContent3;
          return (_e$textContent3 = e === null || e === void 0 ? void 0 : e.textContent) !== null && _e$textContent3 !== void 0 ? _e$textContent3 : "";
        }, [])
      }
      //pressParameters: { exclude: index <= 1, focusSelf: useStableCallback(e => e.focus()), onPressSync: null }
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
  /*
  function DemoThrottleDebounce() {
      const [count, setCount] = useState(0);
      const onClick = useCallback(() => {
          debugger;
          setCount(i => i + 1);
      }, []);
      const onClickThrottled = useThrottled(onClick, 1000);
      const onClickDebounced = useDebounced(onClick, 1000);
      const onClickBoth = useDebounced(onClickThrottled, 1000);
       return (
          <div className="demo">
              <div>Press count: {count}</div>
               <div><button onClick={() => {debugger; onClick();}}>Normal</button></div>
              <div><button onClick={() => {debugger; onClickThrottled();}}>Throttled</button></div>
              <div><button onClick={() => {debugger; onClickDebounced();}}>Debounced</button></div>
              <div><button onClick={() => {debugger; onClickBoth();}}>Combined</button></div>
          </div>)
  }*/
  const Component = () => {
    return o$1(DemoUseRovingTabIndex, {});
  };
  requestAnimationFrame(() => {
    P(o$1(Component, {}), document.getElementById("root"));
  });
  exports.DemoUseGrid = DemoUseGrid;
  return exports;
}({});
//# sourceMappingURL=bundle.js.map
