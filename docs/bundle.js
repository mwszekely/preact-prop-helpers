"use strict";
(() => {
  // ../node_modules/.pnpm/preact@10.13.2/node_modules/preact/dist/preact.module.js
  var vt, H, Br, Ya, ze, Hr, Wr, Jn, $r, jt = {}, Vr = [], Za = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
  function Le(e, t) {
    for (var n in t)
      e[n] = t[n];
    return e;
  }
  function zr(e) {
    var t = e.parentNode;
    t && t.removeChild(e);
  }
  function fe(e, t, n) {
    var r, o, a, l = {};
    for (a in t)
      a == "key" ? r = t[a] : a == "ref" ? o = t[a] : l[a] = t[a];
    if (arguments.length > 2 && (l.children = arguments.length > 3 ? vt.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
      for (a in e.defaultProps)
        l[a] === void 0 && (l[a] = e.defaultProps[a]);
    return gt(e, l, r, o, null);
  }
  function gt(e, t, n, r, o) {
    var a = { type: e, props: t, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: o ?? ++Br };
    return o == null && H.vnode != null && H.vnode(a), a;
  }
  function ge(e) {
    return e.children;
  }
  function Pe(e, t) {
    this.props = e, this.context = t;
  }
  function bt(e, t) {
    if (t == null)
      return e.__ ? bt(e.__, e.__.__k.indexOf(e) + 1) : null;
    for (var n; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null)
        return n.__e;
    return typeof e.type == "function" ? bt(e) : null;
  }
  function qr(e) {
    var t, n;
    if ((e = e.__) != null && e.__c != null) {
      for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
        if ((n = e.__k[t]) != null && n.__e != null) {
          e.__e = e.__c.base = n.__e;
          break;
        }
      return qr(e);
    }
  }
  function Qn(e) {
    (!e.__d && (e.__d = !0) && ze.push(e) && !Gt.__r++ || Hr !== H.debounceRendering) && ((Hr = H.debounceRendering) || Wr)(Gt);
  }
  function Gt() {
    var e, t, n, r, o, a, l, u;
    for (ze.sort(Jn); e = ze.shift(); )
      e.__d && (t = ze.length, r = void 0, o = void 0, l = (a = (n = e).__v).__e, (u = n.__P) && (r = [], (o = Le({}, a)).__v = a.__v + 1, Yn(u, a, o, n.__n, u.ownerSVGElement !== void 0, a.__h != null ? [l] : null, r, l ?? bt(a), a.__h), Yr(r, a), a.__e != l && qr(a)), ze.length > t && ze.sort(Jn));
    Gt.__r = 0;
  }
  function Kr(e, t, n, r, o, a, l, u, m, f) {
    var s, c, d, p, h, C, g, v = r && r.__k || Vr, b = v.length;
    for (n.__k = [], s = 0; s < t.length; s++)
      if ((p = n.__k[s] = (p = t[s]) == null || typeof p == "boolean" || typeof p == "function" ? null : typeof p == "string" || typeof p == "number" || typeof p == "bigint" ? gt(null, p, null, null, p) : Array.isArray(p) ? gt(ge, { children: p }, null, null, null) : p.__b > 0 ? gt(p.type, p.props, p.key, p.ref ? p.ref : null, p.__v) : p) != null) {
        if (p.__ = n, p.__b = n.__b + 1, (d = v[s]) === null || d && p.key == d.key && p.type === d.type)
          v[s] = void 0;
        else
          for (c = 0; c < b; c++) {
            if ((d = v[c]) && p.key == d.key && p.type === d.type) {
              v[c] = void 0;
              break;
            }
            d = null;
          }
        Yn(e, p, d = d || jt, o, a, l, u, m, f), h = p.__e, (c = p.ref) && d.ref != c && (g || (g = []), d.ref && g.push(d.ref, null, p), g.push(c, p.__c || h, p)), h != null ? (C == null && (C = h), typeof p.type == "function" && p.__k === d.__k ? p.__d = m = Xr(p, m, e) : m = Jr(e, p, d, v, h, m), typeof n.type == "function" && (n.__d = m)) : m && d.__e == m && m.parentNode != e && (m = bt(d));
      }
    for (n.__e = C, s = b; s--; )
      v[s] != null && (typeof n.type == "function" && v[s].__e != null && v[s].__e == n.__d && (n.__d = Qr(r).nextSibling), eo(v[s], v[s]));
    if (g)
      for (s = 0; s < g.length; s++)
        Zr(g[s], g[++s], g[++s]);
  }
  function Xr(e, t, n) {
    for (var r, o = e.__k, a = 0; o && a < o.length; a++)
      (r = o[a]) && (r.__ = e, t = typeof r.type == "function" ? Xr(r, t, n) : Jr(n, r, r, o, r.__e, t));
    return t;
  }
  function Ct(e, t) {
    return t = t || [], e == null || typeof e == "boolean" || (Array.isArray(e) ? e.some(function(n) {
      Ct(n, t);
    }) : t.push(e)), t;
  }
  function Jr(e, t, n, r, o, a) {
    var l, u, m;
    if (t.__d !== void 0)
      l = t.__d, t.__d = void 0;
    else if (n == null || o != a || o.parentNode == null)
      e:
        if (a == null || a.parentNode !== e)
          e.appendChild(o), l = null;
        else {
          for (u = a, m = 0; (u = u.nextSibling) && m < r.length; m += 1)
            if (u == o)
              break e;
          e.insertBefore(o, a), l = a;
        }
    return l !== void 0 ? l : o.nextSibling;
  }
  function Qr(e) {
    var t, n, r;
    if (e.type == null || typeof e.type == "string")
      return e.__e;
    if (e.__k) {
      for (t = e.__k.length - 1; t >= 0; t--)
        if ((n = e.__k[t]) && (r = Qr(n)))
          return r;
    }
    return null;
  }
  function ei(e, t, n, r, o) {
    var a;
    for (a in n)
      a === "children" || a === "key" || a in t || Bt(e, a, null, n[a], r);
    for (a in t)
      o && typeof t[a] != "function" || a === "children" || a === "key" || a === "value" || a === "checked" || n[a] === t[a] || Bt(e, a, t[a], n[a], r);
  }
  function Ur(e, t, n) {
    t[0] === "-" ? e.setProperty(t, n ?? "") : e[t] = n == null ? "" : typeof n != "number" || Za.test(t) ? n : n + "px";
  }
  function Bt(e, t, n, r, o) {
    var a;
    e:
      if (t === "style")
        if (typeof n == "string")
          e.style.cssText = n;
        else {
          if (typeof r == "string" && (e.style.cssText = r = ""), r)
            for (t in r)
              n && t in n || Ur(e.style, t, "");
          if (n)
            for (t in n)
              r && n[t] === r[t] || Ur(e.style, t, n[t]);
        }
      else if (t[0] === "o" && t[1] === "n")
        a = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + a] = n, n ? r || e.addEventListener(t, a ? Gr : jr, a) : e.removeEventListener(t, a ? Gr : jr, a);
      else if (t !== "dangerouslySetInnerHTML") {
        if (o)
          t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
        else if (t !== "width" && t !== "height" && t !== "href" && t !== "list" && t !== "form" && t !== "tabIndex" && t !== "download" && t in e)
          try {
            e[t] = n ?? "";
            break e;
          } catch {
          }
        typeof n == "function" || (n == null || n === !1 && t[4] !== "-" ? e.removeAttribute(t) : e.setAttribute(t, n));
      }
  }
  function jr(e) {
    return this.l[e.type + !1](H.event ? H.event(e) : e);
  }
  function Gr(e) {
    return this.l[e.type + !0](H.event ? H.event(e) : e);
  }
  function Yn(e, t, n, r, o, a, l, u, m) {
    var f, s, c, d, p, h, C, g, v, b, _, x, S, P, y, I = t.type;
    if (t.constructor !== void 0)
      return null;
    n.__h != null && (m = n.__h, u = t.__e = n.__e, t.__h = null, a = [u]), (f = H.__b) && f(t);
    try {
      e:
        if (typeof I == "function") {
          if (g = t.props, v = (f = I.contextType) && r[f.__c], b = f ? v ? v.props.value : f.__ : r, n.__c ? C = (s = t.__c = n.__c).__ = s.__E : ("prototype" in I && I.prototype.render ? t.__c = s = new I(g, b) : (t.__c = s = new Pe(g, b), s.constructor = I, s.render = ni), v && v.sub(s), s.props = g, s.state || (s.state = {}), s.context = b, s.__n = r, c = s.__d = !0, s.__h = [], s._sb = []), s.__s == null && (s.__s = s.state), I.getDerivedStateFromProps != null && (s.__s == s.state && (s.__s = Le({}, s.__s)), Le(s.__s, I.getDerivedStateFromProps(g, s.__s))), d = s.props, p = s.state, s.__v = t, c)
            I.getDerivedStateFromProps == null && s.componentWillMount != null && s.componentWillMount(), s.componentDidMount != null && s.__h.push(s.componentDidMount);
          else {
            if (I.getDerivedStateFromProps == null && g !== d && s.componentWillReceiveProps != null && s.componentWillReceiveProps(g, b), !s.__e && s.shouldComponentUpdate != null && s.shouldComponentUpdate(g, s.__s, b) === !1 || t.__v === n.__v) {
              for (t.__v !== n.__v && (s.props = g, s.state = s.__s, s.__d = !1), s.__e = !1, t.__e = n.__e, t.__k = n.__k, t.__k.forEach(function(F) {
                F && (F.__ = t);
              }), _ = 0; _ < s._sb.length; _++)
                s.__h.push(s._sb[_]);
              s._sb = [], s.__h.length && l.push(s);
              break e;
            }
            s.componentWillUpdate != null && s.componentWillUpdate(g, s.__s, b), s.componentDidUpdate != null && s.__h.push(function() {
              s.componentDidUpdate(d, p, h);
            });
          }
          if (s.context = b, s.props = g, s.__P = e, x = H.__r, S = 0, "prototype" in I && I.prototype.render) {
            for (s.state = s.__s, s.__d = !1, x && x(t), f = s.render(s.props, s.state, s.context), P = 0; P < s._sb.length; P++)
              s.__h.push(s._sb[P]);
            s._sb = [];
          } else
            do
              s.__d = !1, x && x(t), f = s.render(s.props, s.state, s.context), s.state = s.__s;
            while (s.__d && ++S < 25);
          s.state = s.__s, s.getChildContext != null && (r = Le(Le({}, r), s.getChildContext())), c || s.getSnapshotBeforeUpdate == null || (h = s.getSnapshotBeforeUpdate(d, p)), y = f != null && f.type === ge && f.key == null ? f.props.children : f, Kr(e, Array.isArray(y) ? y : [y], t, n, r, o, a, l, u, m), s.base = t.__e, t.__h = null, s.__h.length && l.push(s), C && (s.__E = s.__ = null), s.__e = !1;
        } else
          a == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = ti(n.__e, t, n, r, o, a, l, m);
      (f = H.diffed) && f(t);
    } catch (F) {
      t.__v = null, (m || a != null) && (t.__e = u, t.__h = !!m, a[a.indexOf(u)] = null), H.__e(F, t, n);
    }
  }
  function Yr(e, t) {
    H.__c && H.__c(t, e), e.some(function(n) {
      try {
        e = n.__h, n.__h = [], e.some(function(r) {
          r.call(n);
        });
      } catch (r) {
        H.__e(r, n.__v);
      }
    });
  }
  function ti(e, t, n, r, o, a, l, u) {
    var m, f, s, c = n.props, d = t.props, p = t.type, h = 0;
    if (p === "svg" && (o = !0), a != null) {
      for (; h < a.length; h++)
        if ((m = a[h]) && "setAttribute" in m == !!p && (p ? m.localName === p : m.nodeType === 3)) {
          e = m, a[h] = null;
          break;
        }
    }
    if (e == null) {
      if (p === null)
        return document.createTextNode(d);
      e = o ? document.createElementNS("http://www.w3.org/2000/svg", p) : document.createElement(p, d.is && d), a = null, u = !1;
    }
    if (p === null)
      c === d || u && e.data === d || (e.data = d);
    else {
      if (a = a && vt.call(e.childNodes), f = (c = n.props || jt).dangerouslySetInnerHTML, s = d.dangerouslySetInnerHTML, !u) {
        if (a != null)
          for (c = {}, h = 0; h < e.attributes.length; h++)
            c[e.attributes[h].name] = e.attributes[h].value;
        (s || f) && (s && (f && s.__html == f.__html || s.__html === e.innerHTML) || (e.innerHTML = s && s.__html || ""));
      }
      if (ei(e, d, c, o, u), s)
        t.__k = [];
      else if (h = t.props.children, Kr(e, Array.isArray(h) ? h : [h], t, n, r, o && p !== "foreignObject", a, l, a ? a[0] : n.__k && bt(n, 0), u), a != null)
        for (h = a.length; h--; )
          a[h] != null && zr(a[h]);
      u || ("value" in d && (h = d.value) !== void 0 && (h !== e.value || p === "progress" && !h || p === "option" && h !== c.value) && Bt(e, "value", h, c.value, !1), "checked" in d && (h = d.checked) !== void 0 && h !== e.checked && Bt(e, "checked", h, c.checked, !1));
    }
    return e;
  }
  function Zr(e, t, n) {
    try {
      typeof e == "function" ? e(t) : e.current = t;
    } catch (r) {
      H.__e(r, n);
    }
  }
  function eo(e, t, n) {
    var r, o;
    if (H.unmount && H.unmount(e), (r = e.ref) && (r.current && r.current !== e.__e || Zr(r, null, t)), (r = e.__c) != null) {
      if (r.componentWillUnmount)
        try {
          r.componentWillUnmount();
        } catch (a) {
          H.__e(a, t);
        }
      r.base = r.__P = null, e.__c = void 0;
    }
    if (r = e.__k)
      for (o = 0; o < r.length; o++)
        r[o] && eo(r[o], t, n || typeof e.type != "function");
    n || e.__e == null || zr(e.__e), e.__ = e.__e = e.__d = void 0;
  }
  function ni(e, t, n) {
    return this.constructor(e, n);
  }
  function xt(e, t, n) {
    var r, o, a;
    H.__ && H.__(e, t), o = (r = typeof n == "function") ? null : n && n.__k || t.__k, a = [], Yn(t, e = (!r && n || t).__k = fe(ge, null, [e]), o || jt, jt, t.ownerSVGElement !== void 0, !r && n ? [n] : o ? null : t.firstChild ? vt.call(t.childNodes) : null, a, !r && n ? n : o ? o.__e : t.firstChild, r), Yr(a, e);
  }
  function Ze(e, t, n) {
    var r, o, a, l = Le({}, e.props);
    for (a in t)
      a == "key" ? r = t[a] : a == "ref" ? o = t[a] : l[a] = t[a];
    return arguments.length > 2 && (l.children = arguments.length > 3 ? vt.call(arguments, 2) : n), gt(e.type, l, r || e.key, o || e.ref, null);
  }
  function me(e, t) {
    var n = { __c: t = "__cC" + $r++, __: e, Consumer: function(r, o) {
      return r.children(o);
    }, Provider: function(r) {
      var o, a;
      return this.getChildContext || (o = [], (a = {})[t] = this, this.getChildContext = function() {
        return a;
      }, this.shouldComponentUpdate = function(l) {
        this.props.value !== l.value && o.some(function(u) {
          u.__e = !0, Qn(u);
        });
      }, this.sub = function(l) {
        o.push(l);
        var u = l.componentWillUnmount;
        l.componentWillUnmount = function() {
          o.splice(o.indexOf(l), 1), u && u.call(l);
        };
      }), r.children;
    } };
    return n.Provider.__ = n.Consumer.contextType = n;
  }
  vt = Vr.slice, H = { __e: function(e, t, n, r) {
    for (var o, a, l; t = t.__; )
      if ((o = t.__c) && !o.__)
        try {
          if ((a = o.constructor) && a.getDerivedStateFromError != null && (o.setState(a.getDerivedStateFromError(e)), l = o.__d), o.componentDidCatch != null && (o.componentDidCatch(e, r || {}), l = o.__d), l)
            return o.__E = o;
        } catch (u) {
          e = u;
        }
    throw e;
  } }, Br = 0, Ya = function(e) {
    return e != null && e.constructor === void 0;
  }, Pe.prototype.setState = function(e, t) {
    var n;
    n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Le({}, this.state), typeof e == "function" && (e = e(Le({}, n), this.props)), e && Le(n, e), e != null && this.__v && (t && this._sb.push(t), Qn(this));
  }, Pe.prototype.forceUpdate = function(e) {
    this.__v && (this.__e = !0, e && this.__h.push(e), Qn(this));
  }, Pe.prototype.render = ge, ze = [], Wr = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, Jn = function(e, t) {
    return e.__v.__b - t.__v.__b;
  }, Gt.__r = 0, $r = 0;

  // ../node_modules/.pnpm/preact@10.13.2/node_modules/preact/hooks/dist/hooks.module.js
  var qe, ee, Zn, to, et = 0, lo = [], Wt = [], no = H.__b, ro = H.__r, oo = H.diffed, ao = H.__c, io = H.unmount;
  function tt(e, t) {
    H.__h && H.__h(ee, e, et || t), et = 0;
    var n = ee.__H || (ee.__H = { __: [], __h: [] });
    return e >= n.__.length && n.__.push({ __V: Wt }), n.__[e];
  }
  function se(e) {
    return et = 1, Vt(uo, e);
  }
  function Vt(e, t, n) {
    var r = tt(qe++, 2);
    if (r.t = e, !r.__c && (r.__ = [n ? n(t) : uo(void 0, t), function(u) {
      var m = r.__N ? r.__N[0] : r.__[0], f = r.t(m, u);
      m !== f && (r.__N = [f, r.__[1]], r.__c.setState({}));
    }], r.__c = ee, !ee.u)) {
      var o = function(u, m, f) {
        if (!r.__c.__H)
          return !0;
        var s = r.__c.__H.__.filter(function(d) {
          return d.__c;
        });
        if (s.every(function(d) {
          return !d.__N;
        }))
          return !a || a.call(this, u, m, f);
        var c = !1;
        return s.forEach(function(d) {
          if (d.__N) {
            var p = d.__[0];
            d.__ = d.__N, d.__N = void 0, p !== d.__[0] && (c = !0);
          }
        }), !(!c && r.__c.props === u) && (!a || a.call(this, u, m, f));
      };
      ee.u = !0;
      var a = ee.shouldComponentUpdate, l = ee.componentWillUpdate;
      ee.componentWillUpdate = function(u, m, f) {
        if (this.__e) {
          var s = a;
          a = void 0, o(u, m, f), a = s;
        }
        l && l.call(this, u, m, f);
      }, ee.shouldComponentUpdate = o;
    }
    return r.__N || r.__;
  }
  function j(e, t) {
    var n = tt(qe++, 3);
    !H.__s && tr(n.__H, t) && (n.__ = e, n.i = t, ee.__H.__h.push(n));
  }
  function te(e, t) {
    var n = tt(qe++, 4);
    !H.__s && tr(n.__H, t) && (n.__ = e, n.i = t, ee.__h.push(n));
  }
  function M(e) {
    return et = 5, le(function() {
      return { current: e };
    }, []);
  }
  function _t(e, t, n) {
    et = 6, te(function() {
      return typeof e == "function" ? (e(t()), function() {
        return e(null);
      }) : e ? (e.current = t(), function() {
        return e.current = null;
      }) : void 0;
    }, n == null ? n : n.concat(e));
  }
  function le(e, t) {
    var n = tt(qe++, 7);
    return tr(n.__H, t) ? (n.__V = e(), n.i = t, n.__h = e, n.__V) : n.__;
  }
  function R(e, t) {
    return et = 8, le(function() {
      return e;
    }, t);
  }
  function Se(e) {
    var t = ee.context[e.__c], n = tt(qe++, 9);
    return n.c = e, t ? (n.__ == null && (n.__ = !0, t.sub(ee)), t.props.value) : e.__;
  }
  function yt() {
    var e = tt(qe++, 11);
    if (!e.__) {
      for (var t = ee.__v; t !== null && !t.__m && t.__ !== null; )
        t = t.__;
      var n = t.__m || (t.__m = [0, 0]);
      e.__ = "P" + n[0] + "-" + n[1]++;
    }
    return e.__;
  }
  function ri() {
    for (var e; e = lo.shift(); )
      if (e.__P && e.__H)
        try {
          e.__H.__h.forEach($t), e.__H.__h.forEach(er), e.__H.__h = [];
        } catch (t) {
          e.__H.__h = [], H.__e(t, e.__v);
        }
  }
  H.__b = function(e) {
    ee = null, no && no(e);
  }, H.__r = function(e) {
    ro && ro(e), qe = 0;
    var t = (ee = e.__c).__H;
    t && (Zn === ee ? (t.__h = [], ee.__h = [], t.__.forEach(function(n) {
      n.__N && (n.__ = n.__N), n.__V = Wt, n.__N = n.i = void 0;
    })) : (t.__h.forEach($t), t.__h.forEach(er), t.__h = [])), Zn = ee;
  }, H.diffed = function(e) {
    oo && oo(e);
    var t = e.__c;
    t && t.__H && (t.__H.__h.length && (lo.push(t) !== 1 && to === H.requestAnimationFrame || ((to = H.requestAnimationFrame) || oi)(ri)), t.__H.__.forEach(function(n) {
      n.i && (n.__H = n.i), n.__V !== Wt && (n.__ = n.__V), n.i = void 0, n.__V = Wt;
    })), Zn = ee = null;
  }, H.__c = function(e, t) {
    t.some(function(n) {
      try {
        n.__h.forEach($t), n.__h = n.__h.filter(function(r) {
          return !r.__ || er(r);
        });
      } catch (r) {
        t.some(function(o) {
          o.__h && (o.__h = []);
        }), t = [], H.__e(r, n.__v);
      }
    }), ao && ao(e, t);
  }, H.unmount = function(e) {
    io && io(e);
    var t, n = e.__c;
    n && n.__H && (n.__H.__.forEach(function(r) {
      try {
        $t(r);
      } catch (o) {
        t = o;
      }
    }), n.__H = void 0, t && H.__e(t, n.__v));
  };
  var so = typeof requestAnimationFrame == "function";
  function oi(e) {
    var t, n = function() {
      clearTimeout(r), so && cancelAnimationFrame(t), setTimeout(e);
    }, r = setTimeout(n, 100);
    so && (t = requestAnimationFrame(n));
  }
  function $t(e) {
    var t = ee, n = e.__c;
    typeof n == "function" && (e.__c = void 0, n()), ee = t;
  }
  function er(e) {
    var t = ee;
    e.__c = e.__(), ee = t;
  }
  function tr(e, t) {
    return !e || e.length !== t.length || t.some(function(n, r) {
      return n !== e[r];
    });
  }
  function uo(e, t) {
    return typeof t == "function" ? t(e) : t;
  }

  // ../node_modules/.pnpm/preact@10.13.2/node_modules/preact/compat/dist/compat.module.js
  function xo(e, t) {
    for (var n in t)
      e[n] = t[n];
    return e;
  }
  function rr(e, t) {
    for (var n in e)
      if (n !== "__source" && !(n in t))
        return !0;
    for (var r in t)
      if (r !== "__source" && e[r] !== t[r])
        return !0;
    return !1;
  }
  function co(e) {
    this.props = e;
  }
  function ue(e, t) {
    function n(o) {
      var a = this.props.ref, l = a == o.ref;
      return !l && a && (a.call ? a(null) : a.current = null), t ? !t(this.props, o) || !l : rr(this.props, o);
    }
    function r(o) {
      return this.shouldComponentUpdate = n, fe(e, o);
    }
    return r.displayName = "Memo(" + (e.displayName || e.name) + ")", r.prototype.isReactComponent = !0, r.__f = !0, r;
  }
  (co.prototype = new Pe()).isPureReactComponent = !0, co.prototype.shouldComponentUpdate = function(e, t) {
    return rr(this.props, e) || rr(this.state, t);
  };
  var fo = H.__b;
  H.__b = function(e) {
    e.type && e.type.__f && e.ref && (e.props.ref = e.ref, e.ref = null), fo && fo(e);
  };
  var ii = typeof Symbol < "u" && Symbol.for && Symbol.for("react.forward_ref") || 3911;
  function qt(e) {
    function t(n) {
      var r = xo({}, n);
      return delete r.ref, e(r, n.ref || null);
    }
    return t.$$typeof = ii, t.render = t, t.prototype.isReactComponent = t.__f = !0, t.displayName = "ForwardRef(" + (e.displayName || e.name) + ")", t;
  }
  var si = H.__e;
  H.__e = function(e, t, n, r) {
    if (e.then) {
      for (var o, a = t; a = a.__; )
        if ((o = a.__c) && o.__c)
          return t.__e == null && (t.__e = n.__e, t.__k = n.__k), o.__c(e, t);
    }
    si(e, t, n, r);
  };
  var mo = H.unmount;
  function _o(e, t, n) {
    return e && (e.__c && e.__c.__H && (e.__c.__H.__.forEach(function(r) {
      typeof r.__c == "function" && r.__c();
    }), e.__c.__H = null), (e = xo({}, e)).__c != null && (e.__c.__P === n && (e.__c.__P = t), e.__c = null), e.__k = e.__k && e.__k.map(function(r) {
      return _o(r, t, n);
    })), e;
  }
  function yo(e, t, n) {
    return e && (e.__v = null, e.__k = e.__k && e.__k.map(function(r) {
      return yo(r, t, n);
    }), e.__c && e.__c.__P === t && (e.__e && n.insertBefore(e.__e, e.__d), e.__c.__e = !0, e.__c.__P = n)), e;
  }
  function nr() {
    this.__u = 0, this.t = null, this.__b = null;
  }
  function So(e) {
    var t = e.__.__c;
    return t && t.__a && t.__a(e);
  }
  function zt() {
    this.u = null, this.o = null;
  }
  H.unmount = function(e) {
    var t = e.__c;
    t && t.__R && t.__R(), t && e.__h === !0 && (e.type = null), mo && mo(e);
  }, (nr.prototype = new Pe()).__c = function(e, t) {
    var n = t.__c, r = this;
    r.t == null && (r.t = []), r.t.push(n);
    var o = So(r.__v), a = !1, l = function() {
      a || (a = !0, n.__R = null, o ? o(u) : u());
    };
    n.__R = l;
    var u = function() {
      if (!--r.__u) {
        if (r.state.__a) {
          var f = r.state.__a;
          r.__v.__k[0] = yo(f, f.__c.__P, f.__c.__O);
        }
        var s;
        for (r.setState({ __a: r.__b = null }); s = r.t.pop(); )
          s.forceUpdate();
      }
    }, m = t.__h === !0;
    r.__u++ || m || r.setState({ __a: r.__b = r.__v.__k[0] }), e.then(l, l);
  }, nr.prototype.componentWillUnmount = function() {
    this.t = [];
  }, nr.prototype.render = function(e, t) {
    if (this.__b) {
      if (this.__v.__k) {
        var n = document.createElement("div"), r = this.__v.__k[0].__c;
        this.__v.__k[0] = _o(this.__b, n, r.__O = r.__P);
      }
      this.__b = null;
    }
    var o = t.__a && fe(ge, null, e.fallback);
    return o && (o.__h = null), [fe(ge, null, t.__a ? null : e.children), o];
  };
  var po = function(e, t, n) {
    if (++n[1] === n[0] && e.o.delete(t), e.props.revealOrder && (e.props.revealOrder[0] !== "t" || !e.o.size))
      for (n = e.u; n; ) {
        for (; n.length > 3; )
          n.pop()();
        if (n[1] < n[0])
          break;
        e.u = n = n[2];
      }
  };
  function li(e) {
    return this.getChildContext = function() {
      return e.context;
    }, e.children;
  }
  function ui(e) {
    var t = this, n = e.i;
    t.componentWillUnmount = function() {
      xt(null, t.l), t.l = null, t.i = null;
    }, t.i && t.i !== n && t.componentWillUnmount(), e.__v ? (t.l || (t.i = n, t.l = { nodeType: 1, parentNode: n, childNodes: [], appendChild: function(r) {
      this.childNodes.push(r), t.i.appendChild(r);
    }, insertBefore: function(r, o) {
      this.childNodes.push(r), t.i.appendChild(r);
    }, removeChild: function(r) {
      this.childNodes.splice(this.childNodes.indexOf(r) >>> 1, 1), t.i.removeChild(r);
    } }), xt(fe(li, { context: t.context }, e.__v), t.l)) : t.l && t.componentWillUnmount();
  }
  function Kt(e, t) {
    var n = fe(ui, { __v: e, i: t });
    return n.containerInfo = t, n;
  }
  (zt.prototype = new Pe()).__a = function(e) {
    var t = this, n = So(t.__v), r = t.o.get(e);
    return r[0]++, function(o) {
      var a = function() {
        t.props.revealOrder ? (r.push(o), po(t, e, r)) : o();
      };
      n ? n(a) : a();
    };
  }, zt.prototype.render = function(e) {
    this.u = null, this.o = /* @__PURE__ */ new Map();
    var t = Ct(e.children);
    e.revealOrder && e.revealOrder[0] === "b" && t.reverse();
    for (var n = t.length; n--; )
      this.o.set(t[n], this.u = [1, 0, this.u]);
    return e.children;
  }, zt.prototype.componentDidUpdate = zt.prototype.componentDidMount = function() {
    var e = this;
    this.o.forEach(function(t, n) {
      po(e, n, t);
    });
  };
  var ci = typeof Symbol < "u" && Symbol.for && Symbol.for("react.element") || 60103, di = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/, fi = /^on(Ani|Tra|Tou|BeforeInp|Compo)/, mi = /[A-Z0-9]/g, pi = typeof document < "u", hi = function(e) {
    return (typeof Symbol < "u" && typeof Symbol() == "symbol" ? /fil|che|rad/ : /fil|che|ra/).test(e);
  };
  Pe.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(e) {
    Object.defineProperty(Pe.prototype, e, { configurable: !0, get: function() {
      return this["UNSAFE_" + e];
    }, set: function(t) {
      Object.defineProperty(this, e, { configurable: !0, writable: !0, value: t });
    } });
  });
  var ho = H.event;
  function gi() {
  }
  function bi() {
    return this.cancelBubble;
  }
  function vi() {
    return this.defaultPrevented;
  }
  H.event = function(e) {
    return ho && (e = ho(e)), e.persist = gi, e.isPropagationStopped = bi, e.isDefaultPrevented = vi, e.nativeEvent = e;
  };
  var Eo, Ci = { enumerable: !1, configurable: !0, get: function() {
    return this.class;
  } }, go = H.vnode;
  H.vnode = function(e) {
    typeof e.type == "string" && function(t) {
      var n = t.props, r = t.type, o = {};
      for (var a in n) {
        var l = n[a];
        if (!(a === "value" && "defaultValue" in n && l == null || pi && a === "children" && r === "noscript" || a === "class" || a === "className")) {
          var u = a.toLowerCase();
          a === "defaultValue" && "value" in n && n.value == null ? a = "value" : a === "download" && l === !0 ? l = "" : u === "ondoubleclick" ? a = "ondblclick" : u !== "onchange" || r !== "input" && r !== "textarea" || hi(n.type) ? u === "onfocus" ? a = "onfocusin" : u === "onblur" ? a = "onfocusout" : fi.test(a) ? a = u : r.indexOf("-") === -1 && di.test(a) ? a = a.replace(mi, "-$&").toLowerCase() : l === null && (l = void 0) : u = a = "oninput", u === "oninput" && o[a = u] && (a = "oninputCapture"), o[a] = l;
        }
      }
      r == "select" && o.multiple && Array.isArray(o.value) && (o.value = Ct(n.children).forEach(function(m) {
        m.props.selected = o.value.indexOf(m.props.value) != -1;
      })), r == "select" && o.defaultValue != null && (o.value = Ct(n.children).forEach(function(m) {
        m.props.selected = o.multiple ? o.defaultValue.indexOf(m.props.value) != -1 : o.defaultValue == m.props.value;
      })), n.class && !n.className ? (o.class = n.class, Object.defineProperty(o, "className", Ci)) : (n.className && !n.class || n.class && n.className) && (o.class = o.className = n.className), t.props = o;
    }(e), e.$$typeof = ci, go && go(e);
  };
  var bo = H.__r;
  H.__r = function(e) {
    bo && bo(e), Eo = e.__c;
  };
  var vo = H.diffed;
  H.diffed = function(e) {
    vo && vo(e);
    var t = e.props, n = e.__e;
    n != null && e.type === "textarea" && "value" in t && t.value !== n.value && (n.value = t.value == null ? "" : t.value), Eo = null;
  };

  // ../dist/util/lib-shared.js
  var To = {
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

  // ../dist/util/mode.js
  globalThis.process ??= {};
  globalThis.process.env ??= {};
  var _e = globalThis.process.env.NODE_ENV = globalThis.process.env.NODE_ENV || "production";

  // ../dist/util/use-call-count.js
  window.requestIdleCallback ??= (e) => setTimeout(() => {
    e({ didTimeout: !1, timeRemaining: () => 0 });
  }, 5);
  var or = null;
  function k(e) {
    if (_e !== "development")
      return;
    let t = e.name;
    xi || _i.has(t) || (console.assert(t.length > 0), window._hookCallCount ??= { callCounts: {} }, window._hookCallCount.callCounts[t] ??= { moment: 0, total: 0 }, window._hookCallCount.callCounts[t].moment += 1, window._hookCallCount.callCounts[t].total += 1, or == null && (or = requestIdleCallback(() => {
      let n = Object.entries(window._hookCallCount.callCounts).map(([r, o]) => ({ Hook: r || "?", Now: o?.moment || 0, Total: o?.total || 0 })).filter(({ Now: r }) => !!r).sort(({ Now: r }, { Now: o }) => !r && !o ? 0 : (r ||= 1 / 0, o ||= 1 / 0, r - o));
      console.table(n, ["Hook", "Now", "Total"]), Object.entries(window._hookCallCount.callCounts).forEach(([, r]) => {
        r.moment = 0;
      }), or = null;
    })));
  }
  var xi = !1, _i = /* @__PURE__ */ new Set();

  // ../dist/util/use-before-layout-effect.js
  var Xt = /* @__PURE__ */ new Map(), Io = "diffed", yi = (e, ...t) => {
    for (let [n, r] of Xt) {
      let o = r.prevInputs;
      Ti(o, r.inputs) && (r.cleanup?.(), r.cleanup = r.effect(), r.prevInputs = r.inputs);
    }
    Xt.clear(), Si?.(e, ...t);
  }, Si = H[Io];
  H[Io] = yi;
  var ar = 0;
  function Ei() {
    let e = ++ar;
    return ar >= Number.MAX_SAFE_INTEGER && (ar = -Number.MAX_SAFE_INTEGER), e;
  }
  function St(e, t) {
    k(St);
    let n = M(null);
    n.current ??= Ei();
    let r = n.current;
    e ? Xt.set(r, { effect: e, inputs: t, cleanup: null }) : Xt.delete(r);
  }
  function Ti(e, t) {
    return !!(!e || e.length !== t?.length || t?.some((n, r) => n !== e[r]));
  }

  // ../dist/util/lib-preact.js
  function nt(e) {
    (H.debounceRendering ?? queueMicrotask)(e);
  }
  var ir = "onfocusin", Et = "onfocusout", sr = {
    dblclick: "onDblClick",
    focusin: "onfocusin",
    focusout: "onfocusout",
    formdata: "onFormData",
    toggle: "onToggle",
    ...To
  };

  // ../dist/preact-extensions/use-passive-state.js
  function Z(e, ...t) {
    if (_e !== "development")
      return;
    let n = M([]), r = M([]);
    o(t.length, -1), t.forEach(o);
    return;
    function o(a, l) {
      let u = l + 1;
      if (n.current[u] === void 0 && (n.current[u] = a), n.current[u] != a && !r.current[u]) {
        debugger;
        console.error(`The hook ${e} requires some or all of its arguments remain stable across each render; please check the ${l}-indexed argument (${l >= 0 ? JSON.stringify(t[l]) : "the number of supposedly stable elements"}).`), r.current[u] = !0;
      }
    }
  }
  function z(e, t, n) {
    k(z);
    let r = M(Ne), o = M(Ne), a = M(!1), l = M(Ne), u = M(void 0);
    Z("usePassiveState", e, t, n);
    let m = R(() => {
      let d = u.current;
      d && d();
    }, []), f = R(() => {
      if (r.current === Ne && t != null)
        try {
          let d = t();
          r.current = d, u.current = e?.(d, void 0, void 0) ?? void 0;
        } catch {
        }
    }, [
      /* getInitialValue and onChange intentionally omitted */
    ]), s = R(() => (a.current && console.warn("During onChange, prefer using the (value, prevValue) arguments instead of getValue -- it's ambiguous as to if you're asking for the old or new value at this point in time for this component."), r.current === Ne && f(), r.current === Ne ? void 0 : r.current), []);
    te(() => {
      f();
    }, []);
    let c = R((d, p) => {
      let h = d instanceof Function ? d(r.current === Ne ? void 0 : r.current) : d;
      /*dependencyToCompareAgainst.current === Unset &&*/
      h !== r.current && (l.current = r.current, r.current = h, o.current = p, (n ?? nt)(() => {
        let C = o.current, g = r.current, v = l.current;
        if (l.current != r.current) {
          r.current = l.current = Ne, a.current = !0;
          try {
            m(), r.current = g, u.current = e?.(g, v === Ne ? void 0 : v, C) ?? void 0;
          } finally {
            a.current = !1;
          }
        }
        l.current = Ne;
      }));
    }, []);
    return [s, c];
  }
  var Ne = Symbol();
  function Tt() {
    return !0;
  }
  function xe() {
    return !1;
  }
  function Ce() {
    return null;
  }
  function lr() {
    return 0;
  }
  function pe(e) {
    e();
  }

  // ../dist/preact-extensions/use-stable-getter.js
  var Po = Symbol("unset");
  function X(e) {
    k(X);
    let t = M(Po);
    return St(() => {
      t.current = e;
    }, [e]), R(() => {
      if (t.current === Po)
        throw new Error("Value retrieved from useStableGetter() cannot be called during render.");
      return t.current;
    }, []);
  }
  function q(e) {
    return le(() => e, Object.values(e));
  }

  // ../dist/preact-extensions/use-stable-callback.js
  var ko = /* @__PURE__ */ new WeakMap();
  function wo(e) {
    return ko.get(e) ?? !1;
  }
  function Ro(e) {
    return ko.set(e, !0), e;
  }
  function T(e, t) {
    if (k(T), Z("useStableCallback", t == null, t?.length, wo(e)), wo(e))
      return e;
    if (t == null) {
      let n = X(e);
      return Ro(R((...r) => n()(...r), []));
    } else
      return console.assert(t.length === 0), Ro(R(e, []));
  }

  // ../dist/dom-helpers/use-event-handler.js
  function Ee(e, t, n, r, o) {
    k(Ee), o ||= "grouped", Z("useGlobalHandler", o), o === "grouped" ? wi(e, t, n, r) : Ri(e, t, n, r);
  }
  var No = /* @__PURE__ */ new Map();
  function Do(e, t, n, r, o) {
    if (r) {
      let a = JSON.stringify(o), l = No.get(t) || /* @__PURE__ */ new Map(), u = l.get(n) || /* @__PURE__ */ new Map(), m = u.get(a) || { listener: null, listeners: /* @__PURE__ */ new Set() };
      e(m, r), u.set(a, m), l.set(n, u), No.set(t, l);
    }
  }
  function Ii(e, t, n, r) {
    Do((o, a) => {
      o.listeners.add(a), o.listener == null && e.addEventListener(t, o.listener = (l) => o.listeners.forEach((u) => u(l)), r);
    }, e, t, n, r);
  }
  function Pi(e, t, n, r) {
    Do((o, a) => {
      o.listeners.delete(a), o.listener == null && e.removeEventListener(t, o.listener = (l) => o.listeners.forEach((u) => u(l)), r);
    }, e, t, n, r);
  }
  function wi(e, t, n, r) {
    let o = T(n ?? (() => {
    }));
    n == null && (o = null), j(() => {
      if (o)
        return Ii(e, t, o, r), () => Pi(e, t, o, r);
    }, [e, t, o]);
  }
  function Ri(e, t, n, r) {
    let o = T(n ?? (() => {
    }));
    n == null && (o = null), j(() => {
      if (o)
        return e.addEventListener(t, o, r), () => e.removeEventListener(t, o, r);
    }, [e, t, o]);
  }

  // ../dist/component-detail/dismissal/use-backdrop-dismiss.js
  function Jt({ backdropDismissParameters: { dismissBackdropActive: e, onDismissBackdrop: t, ...n }, refElementPopupReturn: { getElement: r, ...o }, ...a }) {
    k(Jt);
    let l = X(e), u = X(t), m = R(function(s) {
      if (!l())
        return;
      let c = r(), d = !1;
      s.target && c && c.contains(s.target) && (d = !0), d || u()?.(s);
    }, []);
    Ee(window, "mousedown", e ? m : null, { capture: !0 }), Ee(window, "touchstart", e ? m : null, { capture: !0 });
  }

  // ../dist/util/event.js
  var Fe = Symbol("event-detail");
  function Te(e, t) {
    let n = e ?? {};
    return n[Fe] ??= {}, Object.assign(n[Fe], t), n;
  }

  // ../dist/component-detail/dismissal/use-escape-dismiss.js
  var Lo = "__preact-prop-helpers-escape-key-dismiss__";
  function ki(e) {
    let t = 0, n = e.parentElement;
    for (; n; )
      t += 1, n = n.parentElement;
    return t;
  }
  function Qt({ escapeDismissParameters: { onDismissEscape: e, dismissEscapeActive: t, getDocument: n, parentDepth: r, ...o }, refElementPopupReturn: { getElement: a, ...l } }) {
    k(Qt);
    let u = X(e), m = T(n), f = X(r + 1);
    j(() => {
      let c = m().defaultView;
      c[Lo] ??= { microtaskQueued: !1, elementQueue: /* @__PURE__ */ new Map() };
      let d = c[Lo];
      if (t)
        return c.addEventListener("keydown", p, { capture: !0 }), () => {
          let h = a();
          h && d.elementQueue && d.elementQueue.delete(h), c.removeEventListener("keydown", p, { capture: !0 });
        };
      function p(h) {
        if (h.key == "Escape") {
          h.preventDefault(), h.stopPropagation();
          let C = () => {
            u()?.(Te(h, { reason: "escape" }));
          }, g = a();
          if (g) {
            let v = ki(g), b = f();
            d.elementQueue.set(g, { depth: b, onClose: C, treeDepth: v });
          }
          d.microtaskQueued || (d.microtaskQueued = !0, setTimeout(() => {
            let { elementQueue: v } = d;
            d.microtaskQueued = !1, d.elementQueue = /* @__PURE__ */ new Map();
            let b = -1 / 0, _ = -1 / 0, x = null, S = null;
            for (let [P, { depth: y, onClose: I, treeDepth: F }] of v) {
              let E = !1;
              y == b && F > _ && (E = !0), (y > b || y == b && E) && (b = y, x = P, _ = F, S = I);
            }
            S?.();
          }, 0));
        }
      }
    }, [t]);
  }

  // ../dist/component-detail/dismissal/use-lost-focus-dismiss.js
  function Yt({ refElementPopupReturn: { getElement: e, ...t }, refElementSourceReturn: n, lostFocusDismissParameters: { dismissLostFocusActive: r, onDismissLostFocus: o, ...a }, ...l }) {
    k(Yt);
    let { getElement: u, ...m } = n ?? {};
    let f = X(o), s = X(r);
    return { activeElementParameters: { onLastActiveElementChange: R((d, p, h) => {
      let C = s(), g = u?.(), v = e();
      g?.contains(d) || v?.contains(d) || C && (console.assert(h != null), f()?.(h));
    }, [u]) } };
  }

  // ../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_freeGlobal.js
  var Ni = typeof global == "object" && global && global.Object === Object && global, Zt = Ni;

  // ../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_root.js
  var Di = typeof self == "object" && self && self.Object === Object && self, Li = Zt || Di || Function("return this")(), rt = Li;

  // ../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_Symbol.js
  var Fi = rt.Symbol, ot = Fi;

  // ../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_getRawTag.js
  var Fo = Object.prototype, Mi = Fo.hasOwnProperty, Ai = Fo.toString, It = ot ? ot.toStringTag : void 0;
  function Oi(e) {
    var t = Mi.call(e, It), n = e[It];
    try {
      e[It] = void 0;
      var r = !0;
    } catch {
    }
    var o = Ai.call(e);
    return r && (t ? e[It] = n : delete e[It]), o;
  }
  var Mo = Oi;

  // ../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_objectToString.js
  var Hi = Object.prototype, Ui = Hi.toString;
  function ji(e) {
    return Ui.call(e);
  }
  var Ao = ji;

  // ../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_baseGetTag.js
  var Gi = "[object Null]", Bi = "[object Undefined]", Oo = ot ? ot.toStringTag : void 0;
  function Wi(e) {
    return e == null ? e === void 0 ? Bi : Gi : Oo && Oo in Object(e) ? Mo(e) : Ao(e);
  }
  var He = Wi;

  // ../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/isObjectLike.js
  function $i(e) {
    return e != null && typeof e == "object";
  }
  var Ue = $i;

  // ../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/isSymbol.js
  var Vi = "[object Symbol]";
  function zi(e) {
    return typeof e == "symbol" || Ue(e) && He(e) == Vi;
  }
  var Ho = zi;

  // ../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_arrayMap.js
  function qi(e, t) {
    for (var n = -1, r = e == null ? 0 : e.length, o = Array(r); ++n < r; )
      o[n] = t(e[n], n, e);
    return o;
  }
  var Uo = qi;

  // ../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/isArray.js
  var Ki = Array.isArray, en = Ki;

  // ../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_trimmedEndIndex.js
  var Xi = /\s/;
  function Ji(e) {
    for (var t = e.length; t-- && Xi.test(e.charAt(t)); )
      ;
    return t;
  }
  var jo = Ji;

  // ../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_baseTrim.js
  var Qi = /^\s+/;
  function Yi(e) {
    return e && e.slice(0, jo(e) + 1).replace(Qi, "");
  }
  var Go = Yi;

  // ../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/isObject.js
  function Zi(e) {
    var t = typeof e;
    return e != null && (t == "object" || t == "function");
  }
  var Ke = Zi;

  // ../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/toNumber.js
  var Bo = 0 / 0, es = /^[-+]0x[0-9a-f]+$/i, ts = /^0b[01]+$/i, ns = /^0o[0-7]+$/i, rs = parseInt;
  function os(e) {
    if (typeof e == "number")
      return e;
    if (Ho(e))
      return Bo;
    if (Ke(e)) {
      var t = typeof e.valueOf == "function" ? e.valueOf() : e;
      e = Ke(t) ? t + "" : t;
    }
    if (typeof e != "string")
      return e === 0 ? e : +e;
    e = Go(e);
    var n = ts.test(e);
    return n || ns.test(e) ? rs(e.slice(2), n ? 2 : 8) : es.test(e) ? Bo : +e;
  }
  var ur = os;

  // ../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/identity.js
  function as(e) {
    return e;
  }
  var Xe = as;

  // ../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/isFunction.js
  var is = "[object AsyncFunction]", ss = "[object Function]", ls = "[object GeneratorFunction]", us = "[object Proxy]";
  function cs(e) {
    if (!Ke(e))
      return !1;
    var t = He(e);
    return t == ss || t == ls || t == is || t == us;
  }
  var Wo = cs;

  // ../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/noop.js
  function ds() {
  }
  var Pt = ds;

  // ../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_copyArray.js
  function fs(e, t) {
    var n = -1, r = e.length;
    for (t || (t = Array(r)); ++n < r; )
      t[n] = e[n];
    return t;
  }
  var $o = fs;

  // ../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_isIndex.js
  var ms = 9007199254740991, ps = /^(?:0|[1-9]\d*)$/;
  function hs(e, t) {
    var n = typeof e;
    return t = t ?? ms, !!t && (n == "number" || n != "symbol" && ps.test(e)) && e > -1 && e % 1 == 0 && e < t;
  }
  var Vo = hs;

  // ../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/isLength.js
  var gs = 9007199254740991;
  function bs(e) {
    return typeof e == "number" && e > -1 && e % 1 == 0 && e <= gs;
  }
  var tn = bs;

  // ../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/isArrayLike.js
  function vs(e) {
    return e != null && tn(e.length) && !Wo(e);
  }
  var zo = vs;

  // ../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_isPrototype.js
  var Cs = Object.prototype;
  function xs(e) {
    var t = e && e.constructor, n = typeof t == "function" && t.prototype || Cs;
    return e === n;
  }
  var qo = xs;

  // ../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_baseTimes.js
  function _s(e, t) {
    for (var n = -1, r = Array(e); ++n < e; )
      r[n] = t(n);
    return r;
  }
  var Ko = _s;

  // ../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_baseIsArguments.js
  var ys = "[object Arguments]";
  function Ss(e) {
    return Ue(e) && He(e) == ys;
  }
  var cr = Ss;

  // ../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/isArguments.js
  var Xo = Object.prototype, Es = Xo.hasOwnProperty, Ts = Xo.propertyIsEnumerable, Is = cr(function() {
    return arguments;
  }()) ? cr : function(e) {
    return Ue(e) && Es.call(e, "callee") && !Ts.call(e, "callee");
  }, Jo = Is;

  // ../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/stubFalse.js
  function Ps() {
    return !1;
  }
  var Qo = Ps;

  // ../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/isBuffer.js
  var ea = typeof exports == "object" && exports && !exports.nodeType && exports, Yo = ea && typeof module == "object" && module && !module.nodeType && module, ws = Yo && Yo.exports === ea, Zo = ws ? rt.Buffer : void 0, Rs = Zo ? Zo.isBuffer : void 0, ks = Rs || Qo, ta = ks;

  // ../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_baseIsTypedArray.js
  var Ns = "[object Arguments]", Ds = "[object Array]", Ls = "[object Boolean]", Fs = "[object Date]", Ms = "[object Error]", As = "[object Function]", Os = "[object Map]", Hs = "[object Number]", Us = "[object Object]", js = "[object RegExp]", Gs = "[object Set]", Bs = "[object String]", Ws = "[object WeakMap]", $s = "[object ArrayBuffer]", Vs = "[object DataView]", zs = "[object Float32Array]", qs = "[object Float64Array]", Ks = "[object Int8Array]", Xs = "[object Int16Array]", Js = "[object Int32Array]", Qs = "[object Uint8Array]", Ys = "[object Uint8ClampedArray]", Zs = "[object Uint16Array]", el = "[object Uint32Array]", ne = {};
  ne[zs] = ne[qs] = ne[Ks] = ne[Xs] = ne[Js] = ne[Qs] = ne[Ys] = ne[Zs] = ne[el] = !0;
  ne[Ns] = ne[Ds] = ne[$s] = ne[Ls] = ne[Vs] = ne[Fs] = ne[Ms] = ne[As] = ne[Os] = ne[Hs] = ne[Us] = ne[js] = ne[Gs] = ne[Bs] = ne[Ws] = !1;
  function tl(e) {
    return Ue(e) && tn(e.length) && !!ne[He(e)];
  }
  var na = tl;

  // ../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_baseUnary.js
  function nl(e) {
    return function(t) {
      return e(t);
    };
  }
  var ra = nl;

  // ../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_nodeUtil.js
  var oa = typeof exports == "object" && exports && !exports.nodeType && exports, wt = oa && typeof module == "object" && module && !module.nodeType && module, rl = wt && wt.exports === oa, dr = rl && Zt.process, ol = function() {
    try {
      var e = wt && wt.require && wt.require("util").types;
      return e || dr && dr.binding && dr.binding("util");
    } catch {
    }
  }(), fr = ol;

  // ../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/isTypedArray.js
  var aa = fr && fr.isTypedArray, al = aa ? ra(aa) : na, ia = al;

  // ../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_arrayLikeKeys.js
  var il = Object.prototype, sl = il.hasOwnProperty;
  function ll(e, t) {
    var n = en(e), r = !n && Jo(e), o = !n && !r && ta(e), a = !n && !r && !o && ia(e), l = n || r || o || a, u = l ? Ko(e.length, String) : [], m = u.length;
    for (var f in e)
      (t || sl.call(e, f)) && !(l && // Safari 9 has enumerable `arguments.length` in strict mode.
      (f == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
      o && (f == "offset" || f == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
      a && (f == "buffer" || f == "byteLength" || f == "byteOffset") || // Skip index properties.
      Vo(f, m))) && u.push(f);
    return u;
  }
  var sa = ll;

  // ../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_overArg.js
  function ul(e, t) {
    return function(n) {
      return e(t(n));
    };
  }
  var la = ul;

  // ../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_nativeKeys.js
  var cl = la(Object.keys, Object), ua = cl;

  // ../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_baseKeys.js
  var dl = Object.prototype, fl = dl.hasOwnProperty;
  function ml(e) {
    if (!qo(e))
      return ua(e);
    var t = [];
    for (var n in Object(e))
      fl.call(e, n) && n != "constructor" && t.push(n);
    return t;
  }
  var ca = ml;

  // ../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/keys.js
  function pl(e) {
    return zo(e) ? sa(e) : ca(e);
  }
  var da = pl;

  // ../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/now.js
  var hl = function() {
    return rt.Date.now();
  }, nn = hl;

  // ../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/debounce.js
  var gl = "Expected a function", bl = Math.max, vl = Math.min;
  function Cl(e, t, n) {
    var r, o, a, l, u, m, f = 0, s = !1, c = !1, d = !0;
    if (typeof e != "function")
      throw new TypeError(gl);
    t = ur(t) || 0, Ke(n) && (s = !!n.leading, c = "maxWait" in n, a = c ? bl(ur(n.maxWait) || 0, t) : a, d = "trailing" in n ? !!n.trailing : d);
    function p(P) {
      var y = r, I = o;
      return r = o = void 0, f = P, l = e.apply(I, y), l;
    }
    function h(P) {
      return f = P, u = setTimeout(v, t), s ? p(P) : l;
    }
    function C(P) {
      var y = P - m, I = P - f, F = t - y;
      return c ? vl(F, a - I) : F;
    }
    function g(P) {
      var y = P - m, I = P - f;
      return m === void 0 || y >= t || y < 0 || c && I >= a;
    }
    function v() {
      var P = nn();
      if (g(P))
        return b(P);
      u = setTimeout(v, C(P));
    }
    function b(P) {
      return u = void 0, d && r ? p(P) : (r = o = void 0, l);
    }
    function _() {
      u !== void 0 && clearTimeout(u), f = 0, r = m = o = u = void 0;
    }
    function x() {
      return u === void 0 ? l : b(nn());
    }
    function S() {
      var P = nn(), y = g(P);
      if (r = arguments, o = this, m = P, y) {
        if (u === void 0)
          return h(m);
        if (c)
          return clearTimeout(u), u = setTimeout(v, t), p(m);
      }
      return u === void 0 && (u = setTimeout(v, t)), l;
    }
    return S.cancel = _, S.flush = x, S;
  }
  var mr = Cl;

  // ../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_baseValues.js
  function xl(e, t) {
    return Uo(t, function(n) {
      return e[n];
    });
  }
  var fa = xl;

  // ../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/values.js
  function _l(e) {
    return e == null ? [] : fa(e, da(e));
  }
  var ma = _l;

  // ../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_baseRandom.js
  var yl = Math.floor, Sl = Math.random;
  function El(e, t) {
    return e + yl(Sl() * (t - e + 1));
  }
  var pa = El;

  // ../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_shuffleSelf.js
  function Tl(e, t) {
    var n = -1, r = e.length, o = r - 1;
    for (t = t === void 0 ? r : t; ++n < t; ) {
      var a = pa(n, o), l = e[a];
      e[a] = e[n], e[n] = l;
    }
    return e.length = t, e;
  }
  var rn = Tl;

  // ../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_arrayShuffle.js
  function Il(e) {
    return rn($o(e));
  }
  var ha = Il;

  // ../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_baseShuffle.js
  function Pl(e) {
    return rn(ma(e));
  }
  var ga = Pl;

  // ../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/shuffle.js
  function wl(e) {
    var t = en(e) ? ha : ga;
    return t(e);
  }
  var pr = wl;

  // ../dist/dom-helpers/use-merged-children.js
  function on(e, t) {
    if (k(on), !(e == null && t == null))
      return e == null ? t : t == null ? e : fe(ge, {}, e, t);
  }

  // ../dist/dom-helpers/use-merged-classes.js
  function an(...e) {
    k(an);
    let t = /* @__PURE__ */ new Set();
    for (let n of e)
      typeof n == "string" && n.trim() && t.add(n);
    if (t.size)
      return Array.from(t).join(" ");
  }

  // ../dist/dom-helpers/use-merged-refs.js
  function ba(e, t) {
    if (typeof t == "function")
      t(e);
    else if (t != null)
      t.current = e;
    else {
      debugger;
      console.assert(!1, "Unknown ref type found that was neither a RefCallback nor a RefObject");
    }
  }
  function sn(e, t) {
    k(sn);
    let n = T(function(o) {
      ba(o, t), ba(o, e);
    });
    if (!(t == null && e == null))
      return t == null ? e : e == null ? t : n;
  }

  // ../dist/dom-helpers/use-merged-styles.js
  function va(e) {
    return Object.fromEntries(e.split(";").map((t) => t.split(":")));
  }
  function at(e, t) {
    if (k(at), !(!e && !t)) {
      if (typeof e != typeof t) {
        if (e && !t)
          return e;
        if (!e && t)
          return t;
        if (e && t) {
          if (typeof e == "string")
            return at(va(e), t);
          if (typeof t == "string")
            return at(e, va(t));
        }
        return;
      }
      return typeof e == "string" ? `${e};${t ?? ""}` : {
        ...e ?? {},
        ...t ?? {}
      };
    }
  }

  // ../dist/dom-helpers/use-merged-props.js
  var Rl = console.warn;
  function W(...e) {
    k(W), Z("useMergedProps", e.length);
    let t = {};
    for (let n of e)
      t = Nl(t, n);
    return t;
  }
  var Ca = /* @__PURE__ */ new Set(["children", "ref", "className", "class", "style"]);
  function kl(e, t, n) {
    return typeof t == "function" || typeof n == "function" ? xa(t, n) : t == null && n == null ? n === null && t === void 0 ? n : t : t == null ? n : n == null ? t : (n == t || Rl?.(`The prop "${e}" cannot simultaneously be the values ${t} and ${n}. One must be chosen outside of useMergedProps.`), n);
  }
  function Nl(e, t) {
    let n = {
      ref: sn(e.ref, t.ref),
      style: at(e.style, t.style),
      className: an(e.class, e.className, t.class, t.className),
      children: on(e.children, t.children)
    };
    n.ref === void 0 && delete n.ref, n.style === void 0 && delete n.style, n.className === void 0 && delete n.className, n.class === void 0 && delete n.class, n.children === void 0 && delete n.children;
    for (let r in e) {
      let o = r;
      Ca.has(o) || (n[o] = e[o]);
    }
    for (let r in t) {
      let o = r;
      Ca.has(o) || (n[o] = kl(o, n[o], t[o]));
    }
    return n;
  }
  function xa(e, t) {
    return e ? t ? (...n) => {
      let r = e(...n), o = t(...n);
      if (r instanceof Promise || o instanceof Promise)
        return Promise.all([r, o]);
    } : e : t;
  }

  // ../node_modules/.pnpm/tabbable@6.2.0/node_modules/tabbable/dist/index.esm.js
  var ya = ["input:not([inert])", "select:not([inert])", "textarea:not([inert])", "a[href]:not([inert])", "button:not([inert])", "[tabindex]:not(slot):not([inert])", "audio[controls]:not([inert])", "video[controls]:not([inert])", '[contenteditable]:not([contenteditable="false"]):not([inert])', "details>summary:first-of-type:not([inert])", "details:not([inert])"], Dl = /* @__PURE__ */ ya.join(","), Sa = typeof Element > "u", Rt = Sa ? function() {
  } : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector, ln = !Sa && Element.prototype.getRootNode ? function(e) {
    var t;
    return e == null || (t = e.getRootNode) === null || t === void 0 ? void 0 : t.call(e);
  } : function(e) {
    return e?.ownerDocument;
  }, Ll = function e(t, n) {
    var r;
    n === void 0 && (n = !0);
    var o = t == null || (r = t.getAttribute) === null || r === void 0 ? void 0 : r.call(t, "inert"), a = o === "" || o === "true", l = a || n && t && e(t.parentNode);
    return l;
  }, Fl = function(t) {
    var n, r = t == null || (n = t.getAttribute) === null || n === void 0 ? void 0 : n.call(t, "contenteditable");
    return r === "" || r === "true";
  };
  var Ml = function(t) {
    return !isNaN(parseInt(t.getAttribute("tabindex"), 10));
  }, Al = function(t) {
    if (!t)
      throw new Error("No node provided");
    return t.tabIndex < 0 && (/^(AUDIO|VIDEO|DETAILS)$/.test(t.tagName) || Fl(t)) && !Ml(t) ? 0 : t.tabIndex;
  };
  var Ea = function(t) {
    return t.tagName === "INPUT";
  }, Ol = function(t) {
    return Ea(t) && t.type === "hidden";
  }, Hl = function(t) {
    var n = t.tagName === "DETAILS" && Array.prototype.slice.apply(t.children).some(function(r) {
      return r.tagName === "SUMMARY";
    });
    return n;
  }, Ul = function(t, n) {
    for (var r = 0; r < t.length; r++)
      if (t[r].checked && t[r].form === n)
        return t[r];
  }, jl = function(t) {
    if (!t.name)
      return !0;
    var n = t.form || ln(t), r = function(u) {
      return n.querySelectorAll('input[type="radio"][name="' + u + '"]');
    }, o;
    if (typeof window < "u" && typeof window.CSS < "u" && typeof window.CSS.escape == "function")
      o = r(window.CSS.escape(t.name));
    else
      try {
        o = r(t.name);
      } catch (l) {
        return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s", l.message), !1;
      }
    var a = Ul(o, t.form);
    return !a || a === t;
  }, Gl = function(t) {
    return Ea(t) && t.type === "radio";
  }, Bl = function(t) {
    return Gl(t) && !jl(t);
  }, Wl = function(t) {
    var n, r = t && ln(t), o = (n = r) === null || n === void 0 ? void 0 : n.host, a = !1;
    if (r && r !== t) {
      var l, u, m;
      for (a = !!((l = o) !== null && l !== void 0 && (u = l.ownerDocument) !== null && u !== void 0 && u.contains(o) || t != null && (m = t.ownerDocument) !== null && m !== void 0 && m.contains(t)); !a && o; ) {
        var f, s, c;
        r = ln(o), o = (f = r) === null || f === void 0 ? void 0 : f.host, a = !!((s = o) !== null && s !== void 0 && (c = s.ownerDocument) !== null && c !== void 0 && c.contains(o));
      }
    }
    return a;
  }, _a = function(t) {
    var n = t.getBoundingClientRect(), r = n.width, o = n.height;
    return r === 0 && o === 0;
  }, $l = function(t, n) {
    var r = n.displayCheck, o = n.getShadowRoot;
    if (getComputedStyle(t).visibility === "hidden")
      return !0;
    var a = Rt.call(t, "details>summary:first-of-type"), l = a ? t.parentElement : t;
    if (Rt.call(l, "details:not([open]) *"))
      return !0;
    if (!r || r === "full" || r === "legacy-full") {
      if (typeof o == "function") {
        for (var u = t; t; ) {
          var m = t.parentElement, f = ln(t);
          if (m && !m.shadowRoot && o(m) === !0)
            return _a(t);
          t.assignedSlot ? t = t.assignedSlot : !m && f !== t.ownerDocument ? t = f.host : t = m;
        }
        t = u;
      }
      if (Wl(t))
        return !t.getClientRects().length;
      if (r !== "legacy-full")
        return !0;
    } else if (r === "non-zero-area")
      return _a(t);
    return !1;
  }, Vl = function(t) {
    if (/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(t.tagName))
      for (var n = t.parentElement; n; ) {
        if (n.tagName === "FIELDSET" && n.disabled) {
          for (var r = 0; r < n.children.length; r++) {
            var o = n.children.item(r);
            if (o.tagName === "LEGEND")
              return Rt.call(n, "fieldset[disabled] *") ? !0 : !o.contains(t);
          }
          return !0;
        }
        n = n.parentElement;
      }
    return !1;
  }, Ta = function(t, n) {
    return !(n.disabled || // we must do an inert look up to filter out any elements inside an inert ancestor
    //  because we're limited in the type of selectors we can use in JSDom (see related
    //  note related to `candidateSelectors`)
    Ll(n) || Ol(n) || $l(n, t) || // For a details element with a summary, the summary element gets the focus
    Hl(n) || Vl(n));
  }, zl = function(t, n) {
    return !(Bl(n) || Al(n) < 0 || !Ta(t, n));
  };
  var un = function(t, n) {
    if (n = n || {}, !t)
      throw new Error("No node provided");
    return Rt.call(t, Dl) === !1 ? !1 : zl(n, t);
  }, ql = /* @__PURE__ */ ya.concat("iframe").join(","), Ia = function(t, n) {
    if (n = n || {}, !t)
      throw new Error("No node provided");
    return Rt.call(t, ql) === !1 ? !1 : Ta(n, t);
  };

  // ../dist/util/stack.js
  function cn() {
    if (_e === "development" && window._generate_setState_stacks)
      try {
        throw new Error();
      } catch (e) {
        return e.stack;
      }
  }
  function kt() {
    if (_e === "development") {
      let e = le(cn, []);
      return R(() => e, []);
    } else
      return Kl;
  }
  function Kl() {
    return "";
  }

  // ../dist/util/focus.js
  function we(e) {
    _e === "development" && window.LOG_FOCUS_CHANGES === !0 && (console.log(`Focus changed to ${(e?.tagName || "").toLowerCase().padStart(6)}:`, e), console.log(cn())), e?.focus?.();
  }
  function hr(e) {
    if (e == null)
      return globalThis.document.body;
    let t = e.ownerDocument, n = t.createTreeWalker(t.body, NodeFilter.SHOW_ELEMENT), r = n.firstChild(), o = null, a = null, l = !1;
    for (; r; ) {
      let u = r.compareDocumentPosition(e);
      if (u & Node.DOCUMENT_POSITION_DISCONNECTED && (l || console.warn("Can't focus anything near a disconnected element"), l = !0), u & Node.DOCUMENT_POSITION_PRECEDING) {
        if (r instanceof Element && un(r)) {
          a = r;
          break;
        }
      } else
        u & Node.DOCUMENT_POSITION_FOLLOWING && r instanceof Element && un(r) && (o = r);
      r = n.nextNode();
    }
    return a ?? o ?? t.body;
  }

  // ../dist/timing/use-timeout.js
  function je({ timeout: e, callback: t, triggerIndex: n }) {
    k(je);
    let r = T(() => {
      a.current = null, t();
    }), o = X(e), a = M(null), l = e == null;
    j(() => {
      if (!l) {
        let f = o();
        if (console.assert(l == (f == null)), f != null) {
          a.current = +/* @__PURE__ */ new Date();
          let s = setTimeout(r, f);
          return () => clearTimeout(s);
        }
      }
    }, [n, l]);
    let u = R(() => +/* @__PURE__ */ new Date() - +(a.current ?? /* @__PURE__ */ new Date()), []), m = R(() => {
      let f = o();
      return f == null ? null : Math.max(0, f - u());
    }, []);
    return { getElapsedTime: u, getRemainingTime: m };
  }

  // ../dist/util/use-tag-props.js
  var Xl = 0;
  function be(e, t) {
    if (_e === "development" && window._generate_useTagProps_tags) {
      let [n] = se(() => ++Xl), r = `data-props-${t}-${n}`, o = kt();
      return console.assert(!(e && typeof e == "object" && t in e)), je({
        callback: () => {
          if (document.querySelectorAll(`[${r}]`).length != 1) {
            console.error("A hook returned props that were not properly spread to any HTMLElement:"), console.log(o());
            debugger;
          }
        },
        timeout: 250,
        triggerIndex: t
      }), le(() => ({
        ...e,
        [r]: !0
        /*, [tag as never]: true*/
      }), [e, t]);
    } else
      return e;
  }

  // ../dist/component-detail/keyboard-navigation/use-linear-navigation.js
  function dn({ linearNavigationParameters: { getLowestIndex: e, getHighestIndex: t, isValidForLinearNavigation: n, navigatePastEnd: r, navigatePastStart: o, onNavigateLinear: a, arrowKeyDirection: l, disableHomeEndKeys: u, pageNavigationSize: m, ...f }, rovingTabIndexReturn: { getTabbableIndex: s, setTabbableIndex: c, ...d }, paginatedChildrenParameters: { paginationMax: p, paginationMin: h, ...C }, rearrangeableChildrenReturn: { indexDemangler: g, indexMangler: v, ...b }, ..._ }) {
    k(dn);
    let x = X(p == null || h == null ? null : p - h);
    Z("useLinearNavigation", a, n, g, v);
    let S = R((w, A, O, U, V) => {
      let G = t(), $ = e(), J = s() ?? 0, Y = g(w), { status: ie, valueDemangled: de } = Ra({ isValid: n, lowestChildIndex: $, highestChildIndex: G, indexDemangler: g, indexMangler: v, searchDirection: A, targetDemangled: Y });
      return ie == "past-end" ? r == "wrap" ? (V == "single" ? P(O, U) : y(O, U), "stop") : r == "passthrough" ? "passthrough" : (r(), "stop") : ie == "past-start" ? o == "wrap" ? (V == "single" ? y(O, U) : P(O, U), "stop") : o == "passthrough" ? "passthrough" : (o(), "stop") : (c(de, O, U), a?.(de, O), "stop");
    }, []), P = T((w, A) => S(e(), -1, w, A, "single")), y = T((w, A) => S(t(), 1, w, A, "single")), I = T((w, A, O, U) => {
      let V = t(), G = Math.sign(A) || 1, $ = s() ?? 0, J = v($) + A;
      return S(J, G, w, O, U);
    }), F = T((w, A) => I(w, 1, A, "single")), E = T((w, A) => I(w, -1, A, "single")), N = M(be({
      onKeyDown: T((w) => {
        if (w.metaKey)
          return;
        let A = l == "vertical" || l == "either", O = l == "horizontal" || l == "either", U = t() - e(), V = x() ?? U, G = m;
        G != null && G < 1 && (G = Math.round(G * Math.max(10, V + 1)));
        let $ = "passthrough", J = !0;
        switch (w.key) {
          case "ArrowUp":
          case "ArrowDown":
            J = A;
            break;
          case "ArrowLeft":
          case "ArrowRight":
            J = O;
            break;
        }
        if (J)
          switch (w.key) {
            case "ArrowUp":
            case "ArrowLeft":
              $ = E(w, !0);
              break;
            case "ArrowDown":
            case "ArrowRight":
              $ = F(w, !0);
              break;
            case "PageUp":
            case "PageDown":
              if (G == null)
                break;
              G > 0 && ($ = I(w, G * (w.key.endsWith("n") ? 1 : -1), !0, "page"));
              break;
            case "Home":
            case "End":
              u || (w.key.endsWith("e") ? P(w, !0) : y(w, !0), $ = "stop");
              break;
          }
        $ && $ != "passthrough" && (w.preventDefault(), w.stopPropagation());
      })
    }, "data-linear-navigation"));
    return {
      linearNavigationReturn: {},
      propsStable: N.current
    };
  }
  function Ra({ isValid: e, highestChildIndex: t, lowestChildIndex: n, searchDirection: r, indexDemangler: o, indexMangler: a, targetDemangled: l }) {
    if (r === -1) {
      let u;
      return u = Pa({ isValid: e, indexDemangler: o, indexMangler: a, targetDemangled: l, lowestChildIndex: n }), u ??= wa({ isValid: e, indexDemangler: o, indexMangler: a, targetDemangled: l, highestChildIndex: t }), u || { valueDemangled: l, status: "normal" };
    } else {
      let u;
      return u = wa({ isValid: e, indexDemangler: o, indexMangler: a, targetDemangled: l, highestChildIndex: t }), u ??= Pa({ isValid: e, indexDemangler: o, indexMangler: a, targetDemangled: l, lowestChildIndex: n }), u || { valueDemangled: l, status: "normal" };
    }
  }
  function Pa({ isValid: e, indexDemangler: t, indexMangler: n, lowestChildIndex: r, targetDemangled: o }) {
    for (; o >= r && !e(o); )
      o = t(n(o) - 1);
    if (e(o))
      return o < r ? { valueDemangled: t(r), status: "past-start" } : { valueDemangled: o, status: "normal" };
  }
  function wa({ isValid: e, indexDemangler: t, indexMangler: n, targetDemangled: r, highestChildIndex: o }) {
    for (; r <= o && !e(r); )
      r = t(n(r) + 1);
    if (e(r))
      return r > o ? { valueDemangled: t(o), status: "past-end" } : { valueDemangled: r, status: "normal" };
  }

  // ../dist/preact-extensions/use-managed-children.js
  function Me(e) {
    k(Me);
    let { managedChildrenParameters: { onAfterChildLayoutEffect: t, onChildrenMountChange: n, onChildrenCountChange: r }, ...o } = e;
    Z("useManagedChildren", t, n, r);
    let a = R(() => u.current.highestIndex, []), l = R(() => u.current.lowestIndex, []), u = M({ arr: [], rec: {}, highestIndex: 0, lowestIndex: 0 }), m = R((g) => {
      for (let v of u.current.arr)
        if (v && g(v) == "break")
          return;
      for (let v in u.current.rec) {
        let b = u.current.rec[v];
        if (b && g(b) == "break")
          return;
      }
    }, []), f = R((g) => typeof g == "number" ? u.current.arr[g] : u.current.rec[g], []), s = M(null), c = M(/* @__PURE__ */ new Set()), d = R((g) => (c.current.size == 0 && t != null && nt(() => {
      t?.(c.current), c.current.clear();
    }), c.current.add(g), () => {
    }), [
      /* Must remain stable */
    ]), p = R((g, v) => {
      if (s.current || (s.current = {
        mounts: /* @__PURE__ */ new Set(),
        unmounts: /* @__PURE__ */ new Set()
      }, nt(() => {
        (r || n) && (n?.(s.current.mounts, s.current.unmounts), r?.(C().getHighestIndex() + 1), s.current = null);
      })), v)
        typeof g == "number" && (u.current.highestIndex = Math.max(u.current.highestIndex, g), u.current.lowestIndex = Math.min(u.current.lowestIndex, g));
      else {
        if (typeof g == "number") {
          delete u.current.arr[g];
          let b = 0;
          for (; b <= u.current.arr.length && u.current.arr[u.current.arr.length - 1 - b] == null; )
            ++b;
          u.current.arr.splice(u.current.arr.length - b, b);
        } else
          delete u.current.rec[g];
        typeof g == "number" && (u.current.highestIndex = u.current.arr.length - 1);
      }
      s?.current?.[v ? "mounts" : "unmounts"]?.add?.(g);
    }, [
      /* Must remain stable */
    ]), h = q({
      _: u.current,
      forEach: m,
      getAt: f,
      getHighestIndex: a,
      getLowestIndex: l,
      _arraySlice: R(() => {
        let g = u.current.arr.slice(), v = a();
        for (let b = 0; b <= v; ++b)
          g[b] == null && (g[b] = { index: b });
        return g;
      }, [])
    }), C = R(() => h, []);
    return {
      context: q({
        managedChildContext: q({
          managedChildrenArray: u.current,
          remoteULEChildMounted: p,
          remoteULEChildChanged: d,
          getChildren: C
        })
      }),
      managedChildrenReturn: { getChildren: C }
    };
  }
  function Ae({ context: e, info: t }) {
    k(Ae);
    let { managedChildContext: { getChildren: n, managedChildrenArray: r, remoteULEChildMounted: o, remoteULEChildChanged: a } } = e ?? { managedChildContext: {} }, l = t.index;
    return te(() => {
      if (!(r == null || a == null))
        return typeof l == "number" ? r.arr[l] = { ...t } : r.rec[l] = { ...t }, a(l);
    }, [...Object.entries(t).flat(9)]), te(() => (o?.(l, !0), () => o?.(l, !1)), [l]), {
      managedChildReturn: { getChildren: n }
    };
  }
  function Nt({ getChildren: e, initialIndex: t, closestFit: n, onClosestFit: r, onIndexChange: o, getAt: a, setAt: l, isValid: u }) {
    Z("useChildrenFlag", o, a, l, u);
    let [m, f] = z(o), [s, c] = z(null), d = R((g) => {
      let v = e(), b = 1 / 0, _ = null;
      return v.forEach((x) => {
        if (x != null && u(x)) {
          console.assert(typeof x.index == "number", "closestFit can only be used when each child has a numeric index, and cannot be used when children use string indices instead.");
          let S = Math.abs(x.index - g);
          (S < b || S == b && x.index < g) && (b = S, _ = x.index);
        }
      }), _;
    }, [
      /* Must remain stable! */
    ]);
    n && console.assert(r != null, "When closestFit is used, onClosestFit must be provided");
    let p = T((g) => {
      let v = e(), b = s(), _ = m(), x = _ == null ? null : v.getAt(_);
      if (b != null && n && (b != _ || x == null || !u(x))) {
        console.assert(typeof b == "number", "closestFit can only be used when each child has a numeric index, and cannot be used when children use string indices instead.");
        let S = d(b);
        if (f(S, g), x && l(x, !1, S, _), S != null) {
          let P = v.getAt(S);
          console.assert(P != null, "Internal logic???"), l(P, !0, S, _), r(S);
        } else
          r(null);
      }
    }), h = M(void 0), C = R((g, v) => {
      let b = e(), _ = g instanceof Function ? g(s()) : g;
      h.current = v, c(_, v);
      let x = m();
      if (x == _)
        return _;
      let S = _ == null ? null : b.getAt(_), P = x == null ? null : b.getAt(x);
      if (_ == null)
        return f(null, v), P && l(P, !1, _, x), null;
      if (S && u(S) || !n)
        return f(_, v), P && l(P, !1, _, x), S && l(S, !0, _, x), _;
      {
        console.assert(n), console.assert(typeof _ == "number", "closestFit can only be used when each child has a numeric index, and cannot be used when children use string indices instead.");
        let I = d(_);
        return f(I, v), I != null ? (S = b.getAt(I), console.assert(S != null, "Internal logic???"), P && l(P, !1, I, x), l(S, !0, I, x), I) : (P && l(P, !1, I, x), null);
      }
    }, []);
    return te(() => {
      C(t ?? null, h.current);
    }, []), { changeIndex: C, reevaluateClosestFit: p, getCurrentIndex: m };
  }

  // ../dist/preact-extensions/use-state.js
  function D(e) {
    let t = kt();
    k(D);
    let [n, r] = se(e), o = M(n), a = R((u) => {
      if (_e === "development" && (window._setState_stack = t()), typeof u == "function") {
        let m = u;
        r((f) => {
          let s = m(f);
          return o.current !== s && (o.current = s), o.current = s, s;
        });
      } else
        o.current !== u && (o.current = u), o.current = u, r(u);
    }, []), l = R(() => o.current, []);
    return [n, a, l];
  }

  // ../dist/component-detail/keyboard-navigation/use-roving-tabindex.js
  function fn({ managedChildrenReturn: { getChildren: e }, rovingTabIndexParameters: { focusSelfParent: t, untabbable: n, untabbableBehavior: r, initiallyTabbedIndex: o, onTabbableIndexChange: a }, refElementReturn: { getElement: l }, ...u }) {
    k(fn);
    let m = T(t);
    r ||= "focus-parent";
    let f = M(null);
    let s = X(o), c = X(n), d = T((y, I, F) => {
      let E = e();
      return b(function(w) {
        let A = typeof y == "function" ? y(w ?? null) : y, O = c(), U = l();
        if (console.assert(!!U), A != null && h(A, I), O || A == null)
          return !U.contains(document.activeElement) && r != "leave-child-focused" && m(U), null;
        if (w != A) {
          let V = E.getAt(A);
          if (V != null && F) {
            let G = V.getElement();
            G && (document.activeElement == document.body || document.activeElement == null || !G.contains(document.activeElement)) && V.focusSelf(G);
          }
        }
        return A != null && h(A, I), A ?? 0;
      }, I);
    }), [p, h] = z(null, R(() => o ?? 0, []));
    j(() => {
      let y = l()?.contains(document.activeElement);
      b(n ? null : p(), void 0), y && S(!0);
    }, [n]);
    let C = R((y) => y.getLocallyTabbable(), []), g = R((y, I) => {
      y.setLocallyTabbable(I);
    }, []), v = T((y) => !y.untabbable), { changeIndex: b, getCurrentIndex: _, reevaluateClosestFit: x } = Nt({
      initialIndex: o ?? (n ? null : 0),
      onIndexChange: T((y, I, F) => {
        !(y == null && n) && y != p() && a?.(y, I, F);
      }),
      getChildren: e,
      closestFit: !0,
      getAt: C,
      isValid: v,
      setAt: g,
      onClosestFit: (y) => {
        if (document.activeElement == null || document.activeElement == document.body) {
          let I = y == null ? null : e().getAt(y)?.getElement();
          y == null || I == null ? hr(l()).focus() : e().getAt(y)?.focusSelf(I);
        }
      }
    }), S = R((y, I) => {
      let F = e(), E = _(), N = c();
      if (N || (E ??= s() ?? F.getLowestIndex()), N)
        document.activeElement != l() && (y || r != "leave-child-focused") && m(l());
      else if (!N && E != null) {
        let w = F.getAt(E)?.getElement();
        F.getAt(E)?.focusSelf?.(w);
      } else
        d(null, I, !0);
    }, []), P = q({
      setTabbableIndex: d,
      parentFocusSelf: S,
      getInitiallyTabbedIndex: R(() => o ?? (n ? null : 0), []),
      reevaluateClosestFit: x,
      getUntabbable: X(n),
      getUntabbableBehavior: X(r),
      giveParentFocusedElement: R((y) => {
        f.current = y;
      }, [])
    });
    return {
      managedChildrenParameters: { onChildrenMountChange: R(() => {
        x(void 0);
      }, [x]) },
      rovingTabIndexReturn: { setTabbableIndex: d, getTabbableIndex: _, focusSelf: S },
      context: q({ rovingTabIndexContext: P }),
      props: be({
        // Note: Making this -1 instead of null is partially intentional --
        // it gives us time during useEffect to move focus back to the last focused element
        // (otherwise focus gets lost to the body, and useEffect thinks that it shouldn't
        // focus the child because focus wasn't within the list). 
        // It's also just consistent. 
        tabIndex: n ? 0 : -1,
        // When a hidden child is clicked, some browsers focus the parent, just because it's got a role and a tabindex.
        onFocus: T((y) => {
          let I = l();
          console.assert(!!I), y.target == l() && (n || S(!1, y));
        })
      }, "data-roving-tab-index")
    };
  }
  function mn({ info: { index: e, untabbable: t, ...n }, context: { rovingTabIndexContext: { giveParentFocusedElement: r, getUntabbable: o, getUntabbableBehavior: a, reevaluateClosestFit: l, setTabbableIndex: u, getInitiallyTabbedIndex: m, parentFocusSelf: f } }, refElementReturn: { getElement: s }, ...c }) {
    k(mn);
    let [d, p, h] = D(m() === e);
    return j(() => {
      l(void 0);
    }, [!!t]), j(() => {
      d && r(s());
    }, [d]), {
      hasCurrentFocusParameters: {
        onCurrentFocusedInnerChanged: T((C, g, v) => {
          if (C) {
            let b = o(), _ = a();
            !b && !t || _ != "focus-parent" ? u(e, v, !1) : f(!1);
          }
        })
      },
      rovingTabIndexChildReturn: {
        tabbable: d,
        getTabbable: h
      },
      info: { setLocallyTabbable: p, getLocallyTabbable: h },
      props: be({
        tabIndex: d ? 0 : -1,
        inert: t
        // This inert is to prevent the edge case of clicking a hidden item and it focusing itself
      }, "data-roving-tab-index-child")
    };
  }

  // ../dist/dom-helpers/use-text-content.js
  function pn({ refElementReturn: { getElement: e }, textContentParameters: { getText: t, onTextContentChange: n } }) {
    k(pn);
    let [r, o] = z(n, Ce, pe);
    return j(() => {
      let a = e();
      if (a) {
        let l = t(a);
        l && o(l);
      }
    }), { textContentReturn: { getTextContent: r } };
  }

  // ../dist/component-detail/keyboard-navigation/use-typeahead-navigation.js
  function gn({ typeaheadNavigationParameters: { collator: e, typeaheadTimeout: t, noTypeahead: n, isValidForTypeaheadNavigation: r, onNavigateTypeahead: o, ...a }, rovingTabIndexReturn: { getTabbableIndex: l, setTabbableIndex: u, ...m }, ...f }) {
    k(gn);
    let [s, c] = z(T((E, N, w) => {
      let A = setTimeout(() => {
        c(null, void 0), h("none");
      }, t ?? 1e3);
      return F(E, w), () => clearTimeout(A);
    })), d = M([]), [p, h] = D("none"), [, C, g] = D(!1), [v, b] = D(null);
    te(() => {
      v !== null && (c((E) => (E ?? "") + v, void 0), b(null));
    }, [v]);
    let _ = T((E, N) => {
      let w;
      return E = E.normalize("NFD"), N = N.normalize("NFD"), e ? w = e.compare(E, N) : w = E.toLowerCase().localeCompare(N.toLowerCase() ?? ""), w;
    }), x = T((E, N) => typeof E == "string" && typeof N.text == "string" ? _(E, N.text) : E - N), S = T((E, N) => typeof E == "string" && typeof N.text == "string" ? _(E, N.text.substring(0, E.length)) : E - N), P = X(n), y = M(be({
      onKeyDown: T((E) => {
        if (P())
          return;
        let N = g(), w = E.key;
        if (E.ctrlKey || E.metaKey)
          return;
        if (!N && E.key === "Backspace") {
          c((O) => O == null ? null : [...O].reverse().slice(1).reverse().join(""), E), E.preventDefault(), E.stopPropagation();
          return;
        }
        (w.length === 1 || !/^[A-Za-z]/.test(w)) && (w == " " && (s() ?? "").trim().length == 0 || (E.preventDefault(), E.stopPropagation(), N || b(w)));
      }),
      onCompositionStart: T((E) => {
        b(E.data), C(!1);
      }),
      onCompositionEnd: T((E) => {
        C(!0);
      })
    }, "data-typeahead-navigation")), I = T(() => p != "none");
    return {
      context: q({
        typeaheadNavigationContext: q({
          insertingComparator: x,
          sortedTypeaheadInfo: d.current,
          excludeSpace: I
        })
      }),
      typeaheadNavigationReturn: {
        getCurrentTypeahead: s,
        typeaheadStatus: p
      },
      propsStable: y.current
    };
    function F(E, N) {
      if (E && d.current.length) {
        let w = hn(d.current, E, S);
        if (w < 0)
          h("invalid");
        else {
          h("valid");
          let A = null, O = w, U = null, V = w, G = (Y) => {
            r(Y) && ((A == null || Y < A) && (A = Y, O = $), (U == null || Y < U) && Y > (l() ?? -1 / 0) && (U = Y, V = $));
          }, $ = w;
          for (; $ >= 0 && S(E, d.current[$]) == 0; )
            G(d.current[$].unsortedIndex), --$;
          for ($ = w; $ < d.current.length && S(E, d.current[$]) == 0; )
            G(d.current[$].unsortedIndex), ++$;
          let J = null;
          U !== null ? J = d.current[V].unsortedIndex : A !== null && (J = d.current[O].unsortedIndex), J != null && (u(J, N, !0), o?.(J, N));
        }
      }
    }
  }
  function bn({ info: { index: e, ...t }, textContentParameters: { getText: n, ...r }, context: { typeaheadNavigationContext: { sortedTypeaheadInfo: o, insertingComparator: a, excludeSpace: l, ...u } }, refElementReturn: { getElement: m, ...f }, ...s }) {
    k(bn);
    let { textContentReturn: c } = pn({
      refElementReturn: { getElement: m },
      textContentParameters: {
        getText: n,
        onTextContentChange: R((d) => {
          if (d) {
            let p = hn(o, d, a);
            return console.assert(p < 0 || a(o[p].text, { unsortedIndex: e, text: d }) == 0), p < 0 ? o.splice(-p - 1, 0, { text: d, unsortedIndex: e }) : o.splice(p, 0, { text: d, unsortedIndex: e }), () => {
              let h = hn(o, d, a);
              console.assert(h < 0 || a(o[h].text, { unsortedIndex: e, text: d }) == 0), h >= 0 && o.splice(h, 1);
            };
          }
        }, [])
      }
    });
    return {
      textContentReturn: c,
      pressParameters: { excludeSpace: l }
    };
  }
  function hn(e, t, n) {
    let r = 0, o = e.length - 1;
    for (; r <= o; ) {
      let a = o + r >> 1, l = n(t, e[a]);
      if (l > 0)
        r = a + 1;
      else if (l < 0)
        o = a - 1;
      else
        return a;
    }
    return -r - 1;
  }

  // ../dist/component-detail/keyboard-navigation/use-list-navigation-partial.js
  function Je({ linearNavigationParameters: e, typeaheadNavigationParameters: t, rovingTabIndexParameters: n, managedChildrenReturn: r, refElementReturn: o, paginatedChildrenParameters: a, rearrangeableChildrenReturn: l, ...u }) {
    k(Je);
    let { props: m, rovingTabIndexReturn: f, managedChildrenParameters: s, context: c, ...d } = fn({ managedChildrenReturn: r, rovingTabIndexParameters: n, refElementReturn: o }), { propsStable: p, typeaheadNavigationReturn: h, context: C, ...g } = gn({ rovingTabIndexReturn: f, typeaheadNavigationParameters: t }), { propsStable: v, linearNavigationReturn: b, ..._ } = dn({ rovingTabIndexReturn: f, linearNavigationParameters: e, paginatedChildrenParameters: a, rearrangeableChildrenReturn: l });
    let x = W(p, v), S = M(x);
    return {
      managedChildrenParameters: s,
      rovingTabIndexReturn: f,
      typeaheadNavigationReturn: h,
      context: q({
        ...c,
        ...C
      }),
      linearNavigationReturn: b,
      props: W(v, p, m)
    };
  }
  function Qe({ info: { index: e, untabbable: t, ...n }, context: r, refElementReturn: o, textContentParameters: a, ...l }) {
    k(Qe);
    let { props: u, ...m } = mn({ context: r, info: { index: e, untabbable: t }, refElementReturn: o }), { ...f } = bn({ refElementReturn: o, textContentParameters: a, context: r, info: { index: e } });
    return {
      props: u,
      ...f,
      ...m
    };
  }

  // ../dist/component-detail/keyboard-navigation/use-grid-navigation-partial.js
  function vn({ gridNavigationParameters: { onTabbableColumnChange: e, ...t }, linearNavigationParameters: n, ...r }) {
    k(vn);
    let [o, a] = z(e, T(() => {
      let C = r.rovingTabIndexParameters.initiallyTabbedIndex ?? 0;
      return { actual: C, ideal: C };
    })), { linearNavigationReturn: l, rovingTabIndexReturn: u, typeaheadNavigationReturn: m, managedChildrenParameters: f, context: { rovingTabIndexContext: s, typeaheadNavigationContext: c }, props: d, ...p } = Je({
      linearNavigationParameters: { arrowKeyDirection: "vertical", ...n },
      ...r
    });
    let h = q({
      //rowIsUntabbableBecauseOfGrid: !!untabbable,
      setTabbableRow: u.setTabbableIndex,
      getTabbableColumn: o,
      setTabbableColumn: a
    });
    return {
      props: d,
      managedChildrenParameters: f,
      context: q({
        gridNavigationRowContext: h,
        rovingTabIndexContext: s,
        typeaheadNavigationContext: c
      }),
      linearNavigationReturn: l,
      rovingTabIndexReturn: u,
      typeaheadNavigationReturn: m
    };
  }
  function Cn({
    // Stuff for the row as a child of the parent grid
    info: { index: e, untabbable: t, ...n },
    textContentParameters: r,
    context: o,
    // Stuff for the row as a parent of child cells
    linearNavigationParameters: a,
    rovingTabIndexParameters: { untabbable: l, initiallyTabbedIndex: u, onTabbableIndexChange: m, ...f },
    managedChildrenReturn: s,
    typeaheadNavigationParameters: c,
    // Both/neither
    refElementReturn: d,
    ...p
  }) {
    k(Cn);
    let { getTabbableColumn: h, setTabbableColumn: C, setTabbableRow: g } = o.gridNavigationRowContext, v = T(() => e), b = T((K) => {
      let { getChildren: L } = s;
      if (o.rovingTabIndexContext.getUntabbable())
        o.rovingTabIndexContext.parentFocusSelf(!0);
      else {
        let { ideal: B, actual: Q } = h(), oe = B ?? 0, re = L().getAt(oe), ye = L().getLowestIndex(), Ie = L().getHighestIndex();
        for (; (!re || re.untabbable) && oe > ye; )
          --oe, re = L().getAt(oe);
        for (; (!re || re.untabbable) && oe <= Ie; )
          ++oe, re = L().getAt(oe);
        if (re) {
          let ke = re.getElement();
          re.focusSelf(ke);
        } else
          we(K);
      }
    }, []), _ = b, { props: x, info: { getLocallyTabbable: S, setLocallyTabbable: P, ...y }, hasCurrentFocusParameters: I, pressParameters: F, rovingTabIndexChildReturn: E, textContentReturn: N, ...w } = Qe({ info: { index: e, untabbable: t }, refElementReturn: d, textContentParameters: r, context: o }), A = !E.tabbable, { props: O, context: U, linearNavigationReturn: V, managedChildrenParameters: G, rovingTabIndexReturn: $, typeaheadNavigationReturn: J, ...Y } = Je({
      managedChildrenReturn: s,
      refElementReturn: d,
      typeaheadNavigationParameters: c,
      rearrangeableChildrenReturn: { indexDemangler: Xe, indexMangler: Xe },
      rovingTabIndexParameters: {
        untabbableBehavior: "leave-child-focused",
        focusSelfParent: b,
        untabbable: A || l,
        initiallyTabbedIndex: u,
        onTabbableIndexChange: T((K, L, B) => {
          C({ ideal: K, actual: K }, B), m?.(K, L, B);
        })
      },
      linearNavigationParameters: {
        onNavigateLinear: T((K, L) => {
          C((B) => ({ ideal: K, actual: B?.actual ?? K }), L);
        }),
        disableHomeEndKeys: !0,
        pageNavigationSize: 0,
        arrowKeyDirection: "horizontal",
        ...a
      },
      paginatedChildrenParameters: { paginationMin: null, paginationMax: null }
    });
    let { setTabbableIndex: ie } = $, de = q({
      //allChildCellsAreUntabbable,
      setTabbableRow: g,
      getRowIndex: v,
      getTabbableColumn: h,
      setTabbableColumn: C,
      setTabbableCell: ie
    });
    O.tabIndex = O.tabIndex ?? x.tabIndex;
    let ve = W(O, x, {
      // Ensure that if the browser focuses the row for whatever reason, we transfer the focus to a child cell.
      onFocus: T((K) => b(K.currentTarget))
    });
    return ve.tabIndex = -1, {
      context: q({
        gridNavigationCellContext: de,
        ...U
      }),
      props: be(ve, "data-use-grid-navigation-partial-row"),
      info: { focusSelf: _, getLocallyTabbable: S, setLocallyTabbable: P },
      hasCurrentFocusParameters: I,
      pressParameters: F,
      rovingTabIndexChildReturn: E,
      textContentReturn: N,
      linearNavigationReturn: V,
      managedChildrenParameters: G,
      rovingTabIndexReturn: $,
      typeaheadNavigationReturn: J
    };
  }
  function xn({ context: { gridNavigationCellContext: { getRowIndex: e, setTabbableRow: t, getTabbableColumn: n, setTabbableColumn: r, setTabbableCell: o, ...a }, rovingTabIndexContext: l, typeaheadNavigationContext: u, ...m }, info: { index: f, untabbable: s, ...c }, refElementReturn: d, textContentParameters: p, gridNavigationCellParameters: { colSpan: h, ...C }, ...g }) {
    k(xn), h ??= 1;
    let { hasCurrentFocusParameters: { onCurrentFocusedInnerChanged: v, ...b }, rovingTabIndexChildReturn: _, textContentReturn: x, pressParameters: S, props: P, info: y, ...I } = Qe({
      info: { index: f, untabbable: s },
      context: { rovingTabIndexContext: l, typeaheadNavigationContext: u },
      textContentParameters: p,
      refElementReturn: d
    });
    return {
      info: y,
      props: W(P, { onClick: (F) => r((E) => ({ ideal: f, actual: E?.actual ?? f }), F) }),
      rovingTabIndexChildReturn: _,
      textContentReturn: x,
      pressParameters: S,
      hasCurrentFocusParameters: {
        onCurrentFocusedInnerChanged: T((F, E, N) => {
          v?.(F, E, N), F && (t(e(), N, !1), r((w) => ({ actual: f, ideal: w?.ideal ?? f }), N), o((w) => w != null && (w < f || w > f + h) ? w : f, N, !1));
        })
      }
    };
  }

  // ../dist/preact-extensions/use-force-update.js
  function _n() {
    k(_n);
    let [, e] = se(0);
    return M(() => e((t) => ++t)).current;
  }

  // ../dist/component-detail/use-sortable-children.js
  function gr({ rearrangeableChildrenParameters: { getIndex: e, onRearranged: t }, managedChildrenReturn: { getChildren: n } }) {
    k(gr), Z("useRearrangeableChildren", e);
    let r = M(/* @__PURE__ */ new Map()), o = M(/* @__PURE__ */ new Map()), a = R((h) => r.current.get(h) ?? h, []), l = R((h) => o.current.get(h) ?? h, []), u = X(t), m = R(() => {
      let C = n()._arraySlice(), g = pr(C);
      return c(C, g);
    }, [
      /* Must remain stable */
    ]), f = R(() => {
      let h = n(), C = h._arraySlice(), g = h._arraySlice().reverse();
      return c(C, g);
    }, [
      /* Must remain stable */
    ]), s = M(null), c = R((h, C) => {
      r.current.clear(), o.current.clear();
      for (let g = 0; g < C.length; ++g)
        if (C[g]) {
          let v = C[g].index;
          r.current.set(v, g), o.current.set(g, v);
        }
      u()?.(), s.current?.();
    }, []), d = R(function h(C) {
      k(h), console.assert(Array.isArray(C));
      let g = _n();
      return console.assert(s.current == null || s.current == g), s.current = g, C.slice().map((v) => ({ child: v, mangledIndex: a(e(v)), demangledIndex: e(v) })).sort((v, b) => v.mangledIndex - b.mangledIndex).map(({ child: v, mangledIndex: b, demangledIndex: _ }) => fe(v.type, { ...v.props, key: _, "data-mangled-index": b, "data-demangled-index": _ }));
    }, []), p = R((h) => n()._arraySlice().map((g) => h ? h(g) : g.getSortValue()), []);
    return {
      rearrangeableChildrenReturn: {
        indexMangler: a,
        indexDemangler: l,
        //mangleMap,
        //demangleMap,
        rearrange: c,
        shuffle: m,
        reverse: f,
        useRearrangedChildren: d,
        toJsonArray: p
      }
    };
  }
  function it({ rearrangeableChildrenParameters: e, sortableChildrenParameters: { compare: t }, managedChildrenReturn: { getChildren: n } }) {
    k(it);
    let r = X(t ?? ka), { rearrangeableChildrenReturn: o } = gr({ rearrangeableChildrenParameters: e, managedChildrenReturn: { getChildren: n } }), { rearrange: a } = o;
    return {
      sortableChildrenReturn: { sort: R((u) => {
        let m = n(), f = r(), s = m._arraySlice(), c = f ? s.sort((d, p) => {
          let g = f(d, p);
          return u[0] == "d" ? -g : g;
        }) : m._arraySlice();
        return a(s, c);
      }, [
        /* Must remain stable */
      ]) },
      rearrangeableChildrenReturn: o
    };
  }
  function ka(e, t) {
    return n(e?.getSortValue(), t?.getSortValue());
    function n(r, o) {
      if (r == null || o == null) {
        if (r == null)
          return -1;
        if (o == null)
          return 1;
      }
      return r - o;
    }
  }

  // ../dist/component-detail/use-multi-selection.js
  function br({ multiSelectionParameters: { onSelectionChange: e, multiSelectionAriaPropName: t, multiSelectionMode: n, ...r }, managedChildrenReturn: { getChildren: o, ...a }, childrenHaveFocusReturn: { getAnyFocused: l, ...u }, ...m }) {
    let f = M(/* @__PURE__ */ new Set()), s = M(/* @__PURE__ */ new Set());
    let c = M(null), d = M(!1), p = M(!1), h = T((_, x, S, P) => {
      console.assert(S != P), S == null ? P === !0 ? (console.assert(f.current.has(x), `The selected child at index ${x} is unmounting itself, but the parent was unaware of it being selected.`), f.current.delete(x)) : P === !1 ? (console.assert(s.current.has(x), `The selected child at index ${x} is unmounting itself, but the parent was unaware of it being selected.`), s.current.delete(x)) : console.assert(!1, `The child at index ${x} was not selected or unselected but a secret third thing: ${S}`) : S ? (P != null && (console.assert(s.current.has(x), `The multi-select child at index ${x} changed to selected even though it was not unselected before, somehow.`), s.current.delete(x)), console.assert(!f.current.has(x), `The multi-select child at index ${x} changed to selected even though there is already a selected child with that index.`), f.current.add(x), c.current = x) : (P != null && (console.assert(f.current.has(x), `The multi-select child at index ${x} changed to unselected even though it was not selected before, somehow.`), f.current.delete(x)), console.assert(!s.current.has(x), `The multi-select child at index ${x} was marked as unselected even though there is already an unselected child with that index.`), s.current.add(x));
      let y = f.current.size + s.current.size, I = f.current.size / y;
      console.assert(I >= 0 && I <= 1), e?.(Te(_, { selectedPercent: I, selectedIndices: f.current }));
    }), C = T((_, x) => {
      o().forEach((S) => {
        S.getMultiSelectionDisabled() || S.setSelectedFromParent(_, x(S.index));
      });
    }), g = T((_, x) => {
      let S = x, P = 0, y = c.current || 0;
      y <= x ? ++y : (--y, P = x, x = y, y = P), console.assert(y <= x), y <= x && C(_, (I) => I >= y && I <= x ? !o().getAt(I)?.getMultiSelected() : !!o().getAt(I)?.getMultiSelected()), c.current = S;
    }), v = T((_, x, S) => {
      _ || (p.current = d.current = !1);
    }), b = M(!1);
    return Ee(document, "keydown", T((_) => {
      d.current = _.shiftKey || _.key == "Shift", p.current = _.ctrlKey || _.key == "Control", l() && _.code == "KeyA" && _.ctrlKey && !_.repeat && n != "disabled" && (C(_, b.current ? xe : Tt), _.preventDefault(), _.stopPropagation(), b.current = !b.current);
    }), { capture: !0 }), Ee(document, "keyup", (_) => {
      _.key == "Shift" && (d.current = !1), _.key == "Control" && (p.current = !1);
    }, { passive: !0, capture: !0 }), {
      context: q({
        multiSelectionContext: q({
          doContiguousSelection: g,
          notifyParentOfChildSelectChange: h,
          multiSelectionAriaPropName: t,
          multiSelectionMode: n,
          changeAllChildren: C,
          getCtrlKeyDown: R(() => p.current, []),
          getShiftKeyDown: R(() => d.current, []),
          getAnyFocused: l
        })
      }),
      childrenHaveFocusParameters: { onCompositeFocusChange: v },
      multiSelectionReturn: {},
      propsStable: q({})
    };
  }
  function vr({ info: { index: e, ...t }, multiSelectionChildParameters: { initiallyMultiSelected: n, onMultiSelectChange: r, multiSelectionDisabled: o, ...a }, context: { multiSelectionContext: { notifyParentOfChildSelectChange: l, multiSelectionAriaPropName: u, multiSelectionMode: m, doContiguousSelection: f, changeAllChildren: s, getCtrlKeyDown: c, getShiftKeyDown: d, getAnyFocused: p, ...h }, ...C }, ...g }) {
    let v = X(e), b = M(!1), _ = (E) => {
      o || (m == "activation" ? E.shiftKey ? f(E, e) : r?.(Te(E, { multiSelected: !P() })) : E.ctrlKey ? r?.(Te(E, { multiSelected: !P() })) : (b.current = !0, we(E.currentTarget), I(!0, !1, E)));
    }, [x, S, P] = D(n ?? !1), y = T((E, N) => {
      console.assert(N != null), console.assert(!o);
      let w = P();
      w != N && (S(N), l(E, e, N, w));
    });
    te(() => (l(null, v(), P(), void 0), () => l(null, v(), void 0, P())), []);
    let I = T((E, N, w) => {
      if (E && m == "focus") {
        let A = p();
        console.log("any focused: ", A);
        let O = d() ? "toggle" : c() ? "skip" : "set", U = e;
        switch (O) {
          case "set":
            (A || b.current) && s(w, (V) => V == U);
            break;
          case "toggle":
            f(w, e);
            break;
          case "skip":
            debugger;
            break;
        }
      }
      b.current = !1;
    }), F = T((E, N) => {
      console.assert(r != null), r?.(Te(E, { multiSelected: N }));
    });
    return {
      multiSelectionChildReturn: {
        changeMultiSelected: y,
        multiSelected: x,
        getMultiSelected: P,
        multiSelectionMode: m
      },
      pressParameters: {
        onPressSync: _
      },
      hasCurrentFocusParameters: {
        onCurrentFocusedInnerChanged: I
      },
      props: { [u || "aria-selected"]: x ? "true" : "false" },
      info: {
        getMultiSelected: P,
        setSelectedFromParent: F,
        getMultiSelectionDisabled: X(o)
      }
    };
  }
  function Cr({ multiSelectionChildDeclarativeParameters: { onMultiSelectedChange: e, multiSelected: t, ...n }, multiSelectionChildReturn: { changeMultiSelected: r, ...o }, ...a }) {
    let l = t || !1, u = M(void 0);
    j(() => {
      r(u.current, l);
    }, [l]);
    let m = T((s) => (u.current = s, e?.(s))), f = T((s, c) => {
      e?.(Te(s, { multiSelected: c }));
    });
    return {
      multiSelectionChildParameters: {
        onMultiSelectChange: m
      },
      info: { setSelectedFromParent: f }
    };
  }

  // ../dist/component-detail/use-single-selection.js
  function yn({ managedChildrenReturn: { getChildren: e, ...t }, rovingTabIndexReturn: { setTabbableIndex: n, ...r }, singleSelectionParameters: { onSingleSelectedIndexChange: o, initiallySingleSelectedIndex: a, singleSelectionAriaPropName: l, singleSelectionMode: u, ...m }, ...f }) {
    k(yn);
    let s = T(o ?? Pt), c = R((g) => g.getSingleSelected(), []), d = R((g, v, b, _) => {
      g.untabbable && console.assert(!1);
      let x = b == g.index ? _ : b, S = x == null ? null : g.index - x;
      b == null && console.assert(v == !1), v && console.assert(b === g.index), g.setLocalSingleSelected(v, S);
    }, []), p = R((g) => !g.untabbable, []), { changeIndex: h, getCurrentIndex: C } = Nt({
      getChildren: e,
      onIndexChange: null,
      initialIndex: a,
      getAt: c,
      setAt: d,
      isValid: p,
      closestFit: !1,
      onClosestFit: null
    });
    return {
      singleSelectionReturn: q({
        getSingleSelectedIndex: C,
        changeSingleSelectedIndex: h
      }),
      context: q({
        singleSelectionContext: q({
          getSingleSelectedIndex: C,
          onSingleSelectedIndexChange: s,
          singleSelectionAriaPropName: l,
          singleSelectionMode: u
        })
      }),
      childrenHaveFocusParameters: {
        onCompositeFocusChange: T((g, v, b) => {
          if (!g) {
            let _ = C();
            _ != null && n(_, b, !1);
          }
        })
      }
    };
  }
  function Sn({ singleSelectionChildParameters: { singleSelectionDisabled: e, ...t }, context: { singleSelectionContext: { getSingleSelectedIndex: n, onSingleSelectedIndexChange: r, singleSelectionAriaPropName: o, singleSelectionMode: a, ...l }, ...u }, info: { index: m, untabbable: f, ...s }, ...c }) {
    k(Sn), Z("useSingleSelectionChild", n, r);
    let [d, p, h] = D(n() == m), [C, g, v] = D(n() == null ? null : n() - m), b = T((S, P, y) => {
      !e && a == "focus" && S && !f && r(Te(y, { selectedIndex: m }));
    }), _ = T((S) => {
      !e && !f ? a == "activation" && r(Te(S, { selectedIndex: m })) : we(S.currentTarget);
    }), x = o?.split("-") ?? [];
    return {
      info: {
        setLocalSingleSelected: T((S, P) => {
          p(S), g(P);
        }),
        getSingleSelected: h,
        singleSelected: d
      },
      singleSelectionChildReturn: {
        singleSelected: d,
        getSingleSelected: h,
        singleSelectedOffset: C,
        singleSelectionMode: a,
        getSingleSelectedOffset: v
      },
      props: be(o == null || a == "disabled" ? {} : {
        [`${x[0]}-${x[1]}`]: d ? x[1] == "current" ? `${x[2]}` : "true" : "false"
      }, "data-single-selection-child"),
      hasCurrentFocusParameters: { onCurrentFocusedInnerChanged: b },
      pressParameters: { onPressSync: _ }
    };
  }
  function xr({ singleSelectionReturn: { changeSingleSelectedIndex: e }, singleSelectionDeclarativeParameters: { singleSelectedIndex: t, onSingleSelectedIndexChange: n } }) {
    let r = t ?? null, o = M(void 0);
    return j(() => {
      e(r, o.current);
    }, [r]), { singleSelectionParameters: { onSingleSelectedIndexChange: R((l) => (o.current = l, n?.(l)), [n]) } };
  }

  // ../dist/component-detail/use-selection.js
  function Dt({ managedChildrenReturn: e, multiSelectionParameters: t, childrenHaveFocusReturn: n, rovingTabIndexReturn: r, singleSelectionParameters: o }) {
    let { childrenHaveFocusParameters: { onCompositeFocusChange: a, ...l }, context: u, singleSelectionReturn: m, ...f } = yn({ managedChildrenReturn: e, rovingTabIndexReturn: r, singleSelectionParameters: o }), { childrenHaveFocusParameters: { onCompositeFocusChange: s, ...c }, context: d, multiSelectionReturn: p, propsStable: h, ...C } = br({ managedChildrenReturn: e, multiSelectionParameters: t, childrenHaveFocusReturn: n });
    return {
      propsStable: h,
      childrenHaveFocusParameters: { onCompositeFocusChange: T((...g) => {
        a(...g), s(...g);
      }) },
      context: q({ ...u, ...d }),
      multiSelectionReturn: p,
      singleSelectionReturn: m
    };
  }
  function Lt({ context: e, info: { index: t, untabbable: n, ...r }, singleSelectionChildParameters: o, multiSelectionChildParameters: a, ...l }) {
    let { props: u, hasCurrentFocusParameters: { onCurrentFocusedInnerChanged: m }, pressParameters: { onPressSync: f }, info: { getSingleSelected: s, setLocalSingleSelected: c, singleSelected: d, ...p }, singleSelectionChildReturn: h } = Sn({ context: e, info: { index: t, untabbable: n }, singleSelectionChildParameters: o }), { props: C, hasCurrentFocusParameters: { onCurrentFocusedInnerChanged: g }, pressParameters: { onPressSync: v }, multiSelectionChildReturn: b, info: { getMultiSelected: _, setSelectedFromParent: x, getMultiSelectionDisabled: S, ...P }, ...y } = vr({ context: e, info: { index: t }, multiSelectionChildParameters: a });
    return {
      hasCurrentFocusParameters: { onCurrentFocusedInnerChanged: T((...I) => {
        m(...I), g(...I);
      }) },
      info: {
        getMultiSelected: _,
        setSelectedFromParent: x,
        getSingleSelected: s,
        setLocalSingleSelected: c,
        singleSelected: d,
        getMultiSelectionDisabled: S
      },
      multiSelectionChildReturn: b,
      pressParameters: { onPressSync: T((...I) => {
        f(...I), v(...I);
      }) },
      props: W(u, C),
      singleSelectionChildReturn: h
    };
  }
  function Ft(e) {
    return xr(e);
  }
  function _r(e) {
    return Cr(e);
  }

  // ../dist/component-detail/keyboard-navigation/use-grid-navigation-selection.js
  function En({ gridNavigationParameters: e, linearNavigationParameters: t, rovingTabIndexParameters: n, managedChildrenReturn: r, typeaheadNavigationParameters: o, singleSelectionParameters: a, multiSelectionParameters: l, refElementReturn: u, paginatedChildrenParameters: m, rearrangeableChildrenReturn: f, childrenHaveFocusReturn: s, ...c }) {
    k(En);
    let { context: { gridNavigationRowContext: d, rovingTabIndexContext: p, typeaheadNavigationContext: h }, linearNavigationReturn: C, managedChildrenParameters: g, props: v, rovingTabIndexReturn: b, typeaheadNavigationReturn: _ } = vn({
      gridNavigationParameters: e,
      linearNavigationParameters: t,
      managedChildrenReturn: r,
      rovingTabIndexParameters: { ...n, initiallyTabbedIndex: a.initiallySingleSelectedIndex || 0 },
      typeaheadNavigationParameters: o,
      paginatedChildrenParameters: m,
      rearrangeableChildrenReturn: f,
      refElementReturn: u
    }), { childrenHaveFocusParameters: x, context: { singleSelectionContext: S, multiSelectionContext: P }, multiSelectionReturn: y, propsStable: I, singleSelectionReturn: F, ...E } = Dt({
      managedChildrenReturn: r,
      rovingTabIndexReturn: b,
      singleSelectionParameters: a,
      multiSelectionParameters: l,
      childrenHaveFocusReturn: s
    });
    return {
      context: q({
        gridNavigationRowContext: d,
        rovingTabIndexContext: p,
        singleSelectionContext: S,
        multiSelectionContext: P,
        typeaheadNavigationContext: h
      }),
      childrenHaveFocusParameters: x,
      linearNavigationReturn: C,
      managedChildrenParameters: g,
      props: W(v, I),
      rovingTabIndexReturn: b,
      singleSelectionReturn: F,
      multiSelectionReturn: y,
      typeaheadNavigationReturn: _
    };
  }
  function Tn({ info: e, linearNavigationParameters: t, managedChildrenReturn: n, refElementReturn: r, rovingTabIndexParameters: o, textContentParameters: a, typeaheadNavigationParameters: l, context: u, singleSelectionChildParameters: m, multiSelectionChildParameters: f, ...s }) {
    k(Tn);
    let { hasCurrentFocusParameters: { onCurrentFocusedInnerChanged: c, ...d }, info: { getSingleSelected: p, setLocalSingleSelected: h, singleSelected: C, getMultiSelected: g, setSelectedFromParent: v, getMultiSelectionDisabled: b, ..._ }, props: x, singleSelectionChildReturn: S, multiSelectionChildReturn: P, pressParameters: { onPressSync: y, ...I }, ...F } = Lt({ info: e, context: u, singleSelectionChildParameters: m, multiSelectionChildParameters: f }), { hasCurrentFocusParameters: { onCurrentFocusedInnerChanged: E, ...N }, info: { focusSelf: w, getLocallyTabbable: A, setLocallyTabbable: O, ...U }, props: V, linearNavigationReturn: G, managedChildrenParameters: $, pressParameters: { excludeSpace: J, ...Y }, rovingTabIndexChildReturn: ie, rovingTabIndexReturn: de, textContentReturn: ve, typeaheadNavigationReturn: he, context: K, ...L } = Cn({ context: u, linearNavigationParameters: t, info: e, managedChildrenReturn: n, refElementReturn: r, rovingTabIndexParameters: o, textContentParameters: a, typeaheadNavigationParameters: l });
    return {
      context: K,
      linearNavigationReturn: G,
      info: {
        getLocallyTabbable: A,
        getSingleSelected: p,
        singleSelected: C,
        setLocallyTabbable: O,
        setLocalSingleSelected: h,
        focusSelf: w,
        getMultiSelected: g,
        setSelectedFromParent: v,
        getMultiSelectionDisabled: b
      },
      managedChildrenParameters: $,
      pressParameters: { onPressSync: y, excludeSpace: J },
      hasCurrentFocusParameters: { onCurrentFocusedInnerChanged: T((B, Q, oe) => {
        c?.(B, Q, oe), E?.(B, Q, oe);
      }) },
      props: W(V, x),
      rovingTabIndexChildReturn: ie,
      rovingTabIndexReturn: de,
      singleSelectionChildReturn: S,
      multiSelectionChildReturn: P,
      textContentReturn: ve,
      typeaheadNavigationReturn: he
    };
  }
  function In(e) {
    return k(In), xn(e);
  }

  // ../dist/component-detail/keyboard-navigation/use-grid-navigation-selection-sortable.js
  function Pn({ rearrangeableChildrenParameters: e, sortableChildrenParameters: t, linearNavigationParameters: n, managedChildrenReturn: r, gridNavigationParameters: o, paginatedChildrenParameters: a, refElementReturn: l, rovingTabIndexParameters: u, singleSelectionParameters: m, multiSelectionParameters: f, typeaheadNavigationParameters: s, childrenHaveFocusReturn: c, ...d }) {
    k(Pn);
    let { rearrangeableChildrenReturn: p, sortableChildrenReturn: h } = it({ rearrangeableChildrenParameters: e, sortableChildrenParameters: t, managedChildrenReturn: r }), C = En({
      rearrangeableChildrenReturn: p,
      linearNavigationParameters: n,
      managedChildrenReturn: r,
      gridNavigationParameters: o,
      paginatedChildrenParameters: a,
      refElementReturn: l,
      rovingTabIndexParameters: u,
      singleSelectionParameters: m,
      multiSelectionParameters: f,
      typeaheadNavigationParameters: s,
      childrenHaveFocusReturn: c
    });
    return {
      rearrangeableChildrenReturn: p,
      sortableChildrenReturn: h,
      ...C
    };
  }
  function wn({ context: e, info: { index: t, untabbable: n, ...r }, linearNavigationParameters: o, managedChildrenReturn: a, refElementReturn: l, rovingTabIndexParameters: u, textContentParameters: m, typeaheadNavigationParameters: f, gridNavigationSelectionSortableRowParameters: { getSortableColumnIndex: s, ...c }, singleSelectionChildParameters: d, multiSelectionChildParameters: p, ...h }) {
    k(wn);
    let C = T(s), g = R(() => {
      let he = a.getChildren(), K = C() || 0;
      return he.getAt(K)?.getSortValue();
    }, []), { info: { getLocallyTabbable: v, getSingleSelected: b, getMultiSelected: _, setSelectedFromParent: x, singleSelected: S, setLocalSingleSelected: P, setLocallyTabbable: y, focusSelf: I, getMultiSelectionDisabled: F, ...E }, context: N, hasCurrentFocusParameters: w, linearNavigationReturn: A, managedChildrenParameters: O, pressParameters: U, props: V, rovingTabIndexChildReturn: G, rovingTabIndexReturn: $, singleSelectionChildReturn: J, multiSelectionChildReturn: Y, textContentReturn: ie, typeaheadNavigationReturn: de, ...ve } = Tn({
      context: e,
      info: { index: t, untabbable: n },
      linearNavigationParameters: o,
      managedChildrenReturn: a,
      refElementReturn: l,
      rovingTabIndexParameters: u,
      textContentParameters: m,
      typeaheadNavigationParameters: f,
      singleSelectionChildParameters: d,
      multiSelectionChildParameters: p
    });
    return {
      info: { getLocallyTabbable: v, getMultiSelected: _, setSelectedFromParent: x, getSingleSelected: b, getMultiSelectionDisabled: F, singleSelected: S, setLocallyTabbable: y, setLocalSingleSelected: P, getSortValue: g, focusSelf: I },
      context: N,
      hasCurrentFocusParameters: w,
      linearNavigationReturn: A,
      managedChildrenParameters: O,
      pressParameters: U,
      props: V,
      rovingTabIndexChildReturn: G,
      rovingTabIndexReturn: $,
      singleSelectionChildReturn: J,
      multiSelectionChildReturn: Y,
      textContentReturn: ie,
      typeaheadNavigationReturn: de
    };
  }
  function Rn({ context: e, gridNavigationCellParameters: t, info: { index: n, untabbable: r, ...o }, refElementReturn: a, textContentParameters: l, ...u }) {
    return k(Rn), In({
      context: e,
      info: { index: n, untabbable: r },
      gridNavigationCellParameters: t,
      refElementReturn: a,
      textContentParameters: l
    });
  }

  // ../dist/component-detail/keyboard-navigation/use-list-navigation-selection.js
  function kn({ linearNavigationParameters: e, rovingTabIndexParameters: t, typeaheadNavigationParameters: n, singleSelectionParameters: r, multiSelectionParameters: o, managedChildrenReturn: a, refElementReturn: l, paginatedChildrenParameters: u, rearrangeableChildrenReturn: m, childrenHaveFocusReturn: f, ...s }) {
    k(kn);
    let { context: c, propsStable: d, ...p } = Dt({
      childrenHaveFocusReturn: f,
      rovingTabIndexReturn: { setTabbableIndex: T((...b) => {
        g.setTabbableIndex(...b);
      }) },
      managedChildrenReturn: a,
      singleSelectionParameters: r,
      multiSelectionParameters: o
    }), { context: h, props: C, rovingTabIndexReturn: g, ...v } = Je({
      rovingTabIndexParameters: { ...t, initiallyTabbedIndex: r.initiallySingleSelectedIndex || 0 },
      linearNavigationParameters: e,
      paginatedChildrenParameters: u,
      typeaheadNavigationParameters: n,
      managedChildrenReturn: a,
      refElementReturn: l,
      rearrangeableChildrenReturn: m
    });
    return {
      rovingTabIndexReturn: g,
      ...p,
      ...v,
      context: q({
        ...h,
        ...c
      }),
      props: W(C, d)
    };
  }
  function Nn({ info: { index: e, untabbable: t, ...n }, context: r, refElementReturn: o, textContentParameters: a, singleSelectionChildParameters: l, multiSelectionChildParameters: u, ...m }) {
    k(Nn);
    let { hasCurrentFocusParameters: { onCurrentFocusedInnerChanged: f, ...s }, info: c, multiSelectionChildReturn: d, singleSelectionChildReturn: p, props: h, pressParameters: { onPressSync: C }, ...g } = Lt({
      info: { index: e, untabbable: t },
      context: r,
      multiSelectionChildParameters: u,
      singleSelectionChildParameters: l
    }), { hasCurrentFocusParameters: { onCurrentFocusedInnerChanged: v, ...b }, pressParameters: { excludeSpace: _ }, rovingTabIndexChildReturn: x, textContentReturn: S, props: P, info: y, ...I } = Qe({
      info: { index: e, untabbable: t },
      context: r,
      refElementReturn: o,
      textContentParameters: a
    });
    return {
      hasCurrentFocusParameters: {
        onCurrentFocusedInnerChanged: T((F, E, N) => {
          v?.(F, E, N), f?.(F, E, N);
        })
      },
      pressParameters: { onPressSync: C, excludeSpace: _ },
      info: { ...c, ...y },
      rovingTabIndexChildReturn: x,
      multiSelectionChildReturn: d,
      singleSelectionChildReturn: p,
      textContentReturn: S,
      propsChild: h,
      propsTabbable: P
    };
  }

  // ../dist/component-detail/keyboard-navigation/use-list-navigation-selection-sortable.js
  function Dn({ linearNavigationParameters: e, rovingTabIndexParameters: t, typeaheadNavigationParameters: n, singleSelectionParameters: r, multiSelectionParameters: o, managedChildrenReturn: a, rearrangeableChildrenParameters: l, sortableChildrenParameters: u, refElementReturn: m, paginatedChildrenParameters: f, childrenHaveFocusReturn: s, ...c }) {
    k(Dn);
    let { rearrangeableChildrenReturn: d, sortableChildrenReturn: p, ...h } = it({ rearrangeableChildrenParameters: l, sortableChildrenParameters: u, managedChildrenReturn: a }), { props: C, context: g, ...v } = kn({ childrenHaveFocusReturn: s, linearNavigationParameters: e, rearrangeableChildrenReturn: d, rovingTabIndexParameters: t, typeaheadNavigationParameters: n, singleSelectionParameters: r, multiSelectionParameters: o, managedChildrenReturn: a, refElementReturn: m, paginatedChildrenParameters: f });
    return {
      context: g,
      props: C,
      rearrangeableChildrenReturn: d,
      sortableChildrenReturn: p,
      ...v
    };
  }
  function Ln({ info: e, context: t, refElementReturn: n, textContentParameters: r, singleSelectionChildParameters: o, multiSelectionChildParameters: a, ...l }) {
    return k(Ln), Nn({
      info: e,
      context: t,
      refElementReturn: n,
      textContentParameters: r,
      singleSelectionChildParameters: o,
      multiSelectionChildParameters: a
    });
  }

  // ../dist/dom-helpers/use-ref-element.js
  function ae(e) {
    k(ae);
    let t = M(!1);
    t.current && (t.current = !1, console.assert(!1, "useRefElement was used on a component that didn't forward its ref onto a DOM element, so it's attached to that component's VNode instead."));
    let { onElementChange: n, onMount: r, onUnmount: o } = e.refElementParameters || {};
    Z("useRefElement", n, r, o);
    let a = R((f, s) => {
      f == null || f instanceof Element || (console.assert(f == null || f instanceof Element, "useRefElement was used on a component that didn't forward its ref onto a DOM element, so it's attached to that component's VNode instead."), t.current = !0);
      let c = n?.(f, s);
      return s && o?.(s), f && r?.(f), c;
    }, []), [l, u] = z(a, Ce, pe);
    return {
      propsStable: M(be({ ref: u }, "data-use-ref-element")).current,
      refElementReturn: {
        getElement: l
      }
    };
  }

  // ../node_modules/.pnpm/github.com+mwszekely+map-and-set-extensions@f0a9758a5dbccc8fe88f4bfc928166c84d86ac6b/node_modules/map-and-set-extensions/dist/map-of-sets.js
  var Ge = {
    add: (e, t, n) => {
      let r = e.get(t) ?? /* @__PURE__ */ new Set();
      return r.add(n), e.set(t, r), e;
    },
    /**
     * Removes this `value` from the `Set` associated with `key`. Does not remove the `Set` itself, even if it becomes empty.
     */
    delete: (e, t, n) => {
      let r = e.get(t) ?? /* @__PURE__ */ new Set(), o = r.delete(n);
      return e.set(t, r), o;
    },
    has: (e, t, n) => e.get(t)?.has(n) ?? !1
  };

  // ../dist/observers/use-active-element.js
  var st = /* @__PURE__ */ new Map(), yr = /* @__PURE__ */ new Map(), Fn = /* @__PURE__ */ new Map(), Ma = /* @__PURE__ */ new Map();
  function Mt(e, t, n, r) {
    let o = t.get(e);
    if (o)
      for (let a of o) {
        let { lastSent: l, send: u } = a;
        n !== l && (u(n, r), a.lastSent = n);
      }
  }
  function Na(e) {
    let t = e.target.ownerDocument.defaultView;
    e.relatedTarget == null && Mt(t, st, null, e);
  }
  function Da(e) {
    let t = e.target.ownerDocument.defaultView, n = e.target;
    Mt(t, st, n, e), Mt(t, yr, n, e);
  }
  function La(e) {
    let t = e.target instanceof Window ? e.target : e.currentTarget instanceof Window ? e.currentTarget : e.target.ownerDocument.defaultView;
    Ma.set(t, !0), Mt(t, Fn, !0, e);
  }
  function Fa(e) {
    let t = e.target instanceof Window ? e.target : e.currentTarget instanceof Window ? e.currentTarget : e.target.ownerDocument.defaultView;
    Ma.set(t, !1), Mt(t, Fn, !1, e);
  }
  function Be({ activeElementParameters: { onActiveElementChange: e, onLastActiveElementChange: t, onWindowFocusedChange: n, getDocument: r } }) {
    k(Be), Z("useActiveElement", e, t, n, r), j(() => {
      let s = r(), c = s?.defaultView;
      (st.get(c)?.size ?? 0) === 0 && (s?.addEventListener("focusin", Da, { passive: !0 }), s?.addEventListener("focusout", Na, { passive: !0 }), c?.addEventListener("focus", La, { passive: !0 }), c?.addEventListener("blur", Fa, { passive: !0 }));
      let d = { send: a, lastSent: void 0 }, p = { send: u, lastSent: void 0 }, h = { send: f, lastSent: void 0 };
      return Ge.add(st, c, d), Ge.add(yr, c, p), Ge.add(Fn, c, h), () => {
        Ge.delete(st, c, d), Ge.delete(yr, c, p), Ge.delete(Fn, c, h), st.size === 0 && (s?.removeEventListener("focusin", Da), s?.removeEventListener("focusout", Na), c?.removeEventListener("focus", La), c?.removeEventListener("blur", Fa));
      };
    }, []);
    let [o, a] = z(e, Ce, pe), [l, u] = z(t, Ce, pe), [m, f] = z(n, Tt, pe);
    return { activeElementReturn: { getActiveElement: o, getLastActiveElement: l, getWindowFocused: m } };
  }

  // ../dist/component-detail/use-dismiss.js
  function Mn({ dismissParameters: { dismissActive: e, onDismiss: t, ...n }, backdropDismissParameters: { dismissBackdropActive: r, onDismissBackdrop: o, ...a }, lostFocusDismissParameters: { dismissLostFocusActive: l, onDismissLostFocus: u, ...m }, escapeDismissParameters: { dismissEscapeActive: f, onDismissEscape: s, parentDepth: c, ...d }, activeElementParameters: { getDocument: p, onActiveElementChange: h, onLastActiveElementChange: C, onWindowFocusedChange: g, ...v }, ...b }) {
    k(Mn);
    let { refElementReturn: _, propsStable: x } = ae({ refElementParameters: {} }), { refElementReturn: S, propsStable: P } = ae({ refElementParameters: {} }), y = Jt({
      refElementPopupReturn: S,
      backdropDismissParameters: {
        dismissBackdropActive: r && e,
        onDismissBackdrop: T((O) => {
          o?.(O), t(O, "backdrop");
        })
      }
    }), I = Qt({
      refElementPopupReturn: S,
      escapeDismissParameters: {
        dismissEscapeActive: f && e,
        getDocument: p,
        onDismissEscape: T((O) => {
          s?.(O), t(O, "escape");
        }),
        parentDepth: c
      }
    }), { activeElementParameters: { onLastActiveElementChange: F, ...E } } = Yt({
      lostFocusDismissParameters: {
        dismissLostFocusActive: l && e,
        onDismissLostFocus: T((O) => {
          u?.(O), t(O, "lost-focus");
        })
      },
      refElementPopupReturn: S,
      refElementSourceReturn: _
    }), { activeElementReturn: { getActiveElement: N, getLastActiveElement: w, getWindowFocused: A } } = Be({
      activeElementParameters: {
        onLastActiveElementChange: T((O, U, V) => {
          F?.(O, U, V), C?.(O, U, V);
        }),
        onActiveElementChange: h,
        onWindowFocusedChange: g,
        getDocument: p
      }
    });
    return {
      refElementSourceReturn: _,
      refElementPopupReturn: S,
      propsStableSource: x,
      propsStablePopup: P
    };
  }

  // ../node_modules/.pnpm/blocking-elements@0.1.1/node_modules/blocking-elements/dist/blocking-elements.js
  (() => {
    var e, t, n;
    let r = Symbol(), o = Symbol(), a = Symbol(), l = Symbol(), u = Symbol(), m = Symbol(), f = Symbol(), s = Symbol(), c = Symbol(), d = Symbol(), p = Symbol(), h = Symbol(), C = Symbol();
    class g {
      constructor() {
        this[e] = [], this[t] = [], this[n] = /* @__PURE__ */ new Set();
      }
      destructor() {
        this[c](this[a]);
        let b = this;
        b[r] = null, b[a] = null, b[o] = null;
      }
      get top() {
        let b = this[r];
        return b[b.length - 1] || null;
      }
      push(b) {
        !b || b === this.top || (this.remove(b), this[m](b), this[r].push(b));
      }
      remove(b) {
        let _ = this[r].indexOf(b);
        return _ === -1 ? !1 : (this[r].splice(_, 1), _ === this[r].length && this[m](this.top), !0);
      }
      pop() {
        let b = this.top;
        return b && this.remove(b), b;
      }
      has(b) {
        return this[r].indexOf(b) !== -1;
      }
      /**
       * Sets `inert` to all document elements except the new top element, its
       * parents, and its distributed content.
       */
      [(e = r, t = a, n = o, m)](b) {
        let _ = this[o], x = this[a];
        if (!b) {
          this[c](x), _.clear(), this[a] = [];
          return;
        }
        let S = this[d](b);
        if (S[S.length - 1].parentNode !== document.body)
          throw Error("Non-connected element cannot be a blocking element");
        this[a] = S;
        let P = this[p](b);
        if (!x.length) {
          this[s](S, P, _);
          return;
        }
        let y = x.length - 1, I = S.length - 1;
        for (; y > 0 && I > 0 && x[y] === S[I]; )
          y--, I--;
        x[y] !== S[I] && this[f](x[y], S[I]), y > 0 && this[c](x.slice(0, y)), I > 0 && this[s](S.slice(0, I), P, null);
      }
      /**
       * Swaps inertness between two sibling elements.
       * Sets the property `inert` over the attribute since the inert spec
       * doesn't specify if it should be reflected.
       * https://html.spec.whatwg.org/multipage/interaction.html#inert
       */
      [f](b, _) {
        let x = b[l];
        this[h](b) && !b.inert && (b.inert = !0, x.add(b)), x.has(_) && (_.inert = !1, x.delete(_)), _[u] = b[u], _[l] = x, b[u] = void 0, b[l] = void 0;
      }
      /**
       * Restores original inertness to the siblings of the elements.
       * Sets the property `inert` over the attribute since the inert spec
       * doesn't specify if it should be reflected.
       * https://html.spec.whatwg.org/multipage/interaction.html#inert
       */
      [c](b) {
        for (let _ of b) {
          _[u].disconnect(), _[u] = void 0;
          let S = _[l];
          for (let P of S)
            P.inert = !1;
          _[l] = void 0;
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
      [s](b, _, x) {
        for (let S of b) {
          let P = S.parentNode, y = P.children, I = /* @__PURE__ */ new Set();
          for (let w = 0; w < y.length; w++) {
            let A = y[w];
            A === S || !this[h](A) || _ && _.has(A) || (x && A.inert ? x.add(A) : (A.inert = !0, I.add(A)));
          }
          S[l] = I;
          let F = new MutationObserver(this[C].bind(this));
          S[u] = F;
          let E = P, N = E;
          N.__shady && N.host && (E = N.host), F.observe(E, {
            childList: !0
          });
        }
      }
      /**
       * Handles newly added/removed nodes by toggling their inertness.
       * It also checks if the current top Blocking Element has been removed,
       * notifying and removing it.
       */
      [C](b) {
        let _ = this[a], x = this[o];
        for (let S of b) {
          let P = S.target.host || S.target, y = P === document.body ? _.length : _.indexOf(P), I = _[y - 1], F = I[l];
          for (let E = 0; E < S.removedNodes.length; E++) {
            let N = S.removedNodes[E];
            if (N === I) {
              console.info("Detected removal of the top Blocking Element."), this.pop();
              return;
            }
            F.has(N) && (N.inert = !1, F.delete(N));
          }
          for (let E = 0; E < S.addedNodes.length; E++) {
            let N = S.addedNodes[E];
            this[h](N) && (x && N.inert ? x.add(N) : (N.inert = !0, F.add(N)));
          }
        }
      }
      /**
       * Returns if the element is inertable.
       */
      [h](b) {
        return /^(style|template|script)$/.test(b.localName) === !1;
      }
      /**
       * Returns the list of newParents of an element, starting from element
       * (included) up to `document.body` (excluded).
       */
      [d](b) {
        let _ = [], x = b;
        for (; x && x !== document.body; ) {
          if (x.nodeType === Node.ELEMENT_NODE && _.push(x), x.assignedSlot) {
            for (; x = x.assignedSlot; )
              _.push(x);
            x = _.pop();
            continue;
          }
          x = x.parentNode || x.host;
        }
        return _;
      }
      /**
       * Returns the distributed children of the element's shadow root.
       * Returns null if the element doesn't have a shadow root.
       */
      [p](b) {
        let _ = b.shadowRoot;
        if (!_)
          return null;
        let x = /* @__PURE__ */ new Set(), S, P, y, I = _.querySelectorAll("slot");
        if (I.length && I[0].assignedNodes)
          for (S = 0; S < I.length; S++)
            for (y = I[S].assignedNodes({
              flatten: !0
            }), P = 0; P < y.length; P++)
              y[P].nodeType === Node.ELEMENT_NODE && x.add(y[P]);
        return x;
      }
    }
    document.$blockingElements = new g();
  })();

  // ../node_modules/.pnpm/wicg-inert@3.1.2/node_modules/wicg-inert/dist/inert.esm.js
  var Sr = function() {
    function e(t, n) {
      for (var r = 0; r < n.length; r++) {
        var o = n[r];
        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o);
      }
    }
    return function(t, n, r) {
      return n && e(t.prototype, n), r && e(t, r), t;
    };
  }();
  function Er(e, t) {
    if (!(e instanceof t))
      throw new TypeError("Cannot call a class as a function");
  }
  (function() {
    if (typeof window > "u")
      return;
    var e = Array.prototype.slice, t = Element.prototype.matches || Element.prototype.msMatchesSelector, n = ["a[href]", "area[href]", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])", "button:not([disabled])", "details", "summary", "iframe", "object", "embed", "[contenteditable]"].join(","), r = function() {
      function f(s, c) {
        Er(this, f), this._inertManager = c, this._rootElement = s, this._managedNodes = /* @__PURE__ */ new Set(), this._rootElement.hasAttribute("aria-hidden") ? this._savedAriaHidden = this._rootElement.getAttribute("aria-hidden") : this._savedAriaHidden = null, this._rootElement.setAttribute("aria-hidden", "true"), this._makeSubtreeUnfocusable(this._rootElement), this._observer = new MutationObserver(this._onMutation.bind(this)), this._observer.observe(this._rootElement, { attributes: !0, childList: !0, subtree: !0 });
      }
      return Sr(f, [{
        key: "destructor",
        value: function() {
          this._observer.disconnect(), this._rootElement && (this._savedAriaHidden !== null ? this._rootElement.setAttribute("aria-hidden", this._savedAriaHidden) : this._rootElement.removeAttribute("aria-hidden")), this._managedNodes.forEach(function(c) {
            this._unmanageNode(c.node);
          }, this), this._observer = /** @type {?} */
          null, this._rootElement = /** @type {?} */
          null, this._managedNodes = /** @type {?} */
          null, this._inertManager = /** @type {?} */
          null;
        }
        /**
         * @return {!Set<!InertNode>} A copy of this InertRoot's managed nodes set.
         */
      }, {
        key: "_makeSubtreeUnfocusable",
        /**
         * @param {!Node} startNode
         */
        value: function(c) {
          var d = this;
          l(c, function(g) {
            return d._visitNode(g);
          });
          var p = document.activeElement;
          if (!document.body.contains(c)) {
            for (var h = c, C = void 0; h; ) {
              if (h.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
                C = /** @type {!ShadowRoot} */
                h;
                break;
              }
              h = h.parentNode;
            }
            C && (p = C.activeElement);
          }
          c.contains(p) && (p.blur(), p === document.activeElement && document.body.focus());
        }
        /**
         * @param {!Node} node
         */
      }, {
        key: "_visitNode",
        value: function(c) {
          if (c.nodeType === Node.ELEMENT_NODE) {
            var d = (
              /** @type {!HTMLElement} */
              c
            );
            d !== this._rootElement && d.hasAttribute("inert") && this._adoptInertRoot(d), (t.call(d, n) || d.hasAttribute("tabindex")) && this._manageNode(d);
          }
        }
        /**
         * Register the given node with this InertRoot and with InertManager.
         * @param {!Node} node
         */
      }, {
        key: "_manageNode",
        value: function(c) {
          var d = this._inertManager.register(c, this);
          this._managedNodes.add(d);
        }
        /**
         * Unregister the given node with this InertRoot and with InertManager.
         * @param {!Node} node
         */
      }, {
        key: "_unmanageNode",
        value: function(c) {
          var d = this._inertManager.deregister(c, this);
          d && this._managedNodes.delete(d);
        }
        /**
         * Unregister the entire subtree starting at `startNode`.
         * @param {!Node} startNode
         */
      }, {
        key: "_unmanageSubtree",
        value: function(c) {
          var d = this;
          l(c, function(p) {
            return d._unmanageNode(p);
          });
        }
        /**
         * If a descendant node is found with an `inert` attribute, adopt its managed nodes.
         * @param {!HTMLElement} node
         */
      }, {
        key: "_adoptInertRoot",
        value: function(c) {
          var d = this._inertManager.getInertRoot(c);
          d || (this._inertManager.setInert(c, !0), d = this._inertManager.getInertRoot(c)), d.managedNodes.forEach(function(p) {
            this._manageNode(p.node);
          }, this);
        }
        /**
         * Callback used when mutation observer detects subtree additions, removals, or attribute changes.
         * @param {!Array<!MutationRecord>} records
         * @param {!MutationObserver} self
         */
      }, {
        key: "_onMutation",
        value: function(c, d) {
          c.forEach(function(p) {
            var h = (
              /** @type {!HTMLElement} */
              p.target
            );
            if (p.type === "childList")
              e.call(p.addedNodes).forEach(function(g) {
                this._makeSubtreeUnfocusable(g);
              }, this), e.call(p.removedNodes).forEach(function(g) {
                this._unmanageSubtree(g);
              }, this);
            else if (p.type === "attributes") {
              if (p.attributeName === "tabindex")
                this._manageNode(h);
              else if (h !== this._rootElement && p.attributeName === "inert" && h.hasAttribute("inert")) {
                this._adoptInertRoot(h);
                var C = this._inertManager.getInertRoot(h);
                this._managedNodes.forEach(function(g) {
                  h.contains(g.node) && C._manageNode(g.node);
                });
              }
            }
          }, this);
        }
      }, {
        key: "managedNodes",
        get: function() {
          return new Set(this._managedNodes);
        }
        /** @return {boolean} */
      }, {
        key: "hasSavedAriaHidden",
        get: function() {
          return this._savedAriaHidden !== null;
        }
        /** @param {?string} ariaHidden */
      }, {
        key: "savedAriaHidden",
        set: function(c) {
          this._savedAriaHidden = c;
        },
        get: function() {
          return this._savedAriaHidden;
        }
      }]), f;
    }(), o = function() {
      function f(s, c) {
        Er(this, f), this._node = s, this._overrodeFocusMethod = !1, this._inertRoots = /* @__PURE__ */ new Set([c]), this._savedTabIndex = null, this._destroyed = !1, this.ensureUntabbable();
      }
      return Sr(f, [{
        key: "destructor",
        value: function() {
          if (this._throwIfDestroyed(), this._node && this._node.nodeType === Node.ELEMENT_NODE) {
            var c = (
              /** @type {!HTMLElement} */
              this._node
            );
            this._savedTabIndex !== null ? c.setAttribute("tabindex", this._savedTabIndex) : c.removeAttribute("tabindex"), this._overrodeFocusMethod && delete c.focus;
          }
          this._node = /** @type {?} */
          null, this._inertRoots = /** @type {?} */
          null, this._destroyed = !0;
        }
        /**
         * @type {boolean} Whether this object is obsolete because the managed node is no longer inert.
         * If the object has been destroyed, any attempt to access it will cause an exception.
         */
      }, {
        key: "_throwIfDestroyed",
        /**
         * Throw if user tries to access destroyed InertNode.
         */
        value: function() {
          if (this.destroyed)
            throw new Error("Trying to access destroyed InertNode");
        }
        /** @return {boolean} */
      }, {
        key: "ensureUntabbable",
        /** Save the existing tabindex value and make the node untabbable and unfocusable */
        value: function() {
          if (this.node.nodeType === Node.ELEMENT_NODE) {
            var c = (
              /** @type {!HTMLElement} */
              this.node
            );
            if (t.call(c, n)) {
              if (
                /** @type {!HTMLElement} */
                c.tabIndex === -1 && this.hasSavedTabIndex
              )
                return;
              c.hasAttribute("tabindex") && (this._savedTabIndex = /** @type {!HTMLElement} */
              c.tabIndex), c.setAttribute("tabindex", "-1"), c.nodeType === Node.ELEMENT_NODE && (c.focus = function() {
              }, this._overrodeFocusMethod = !0);
            } else
              c.hasAttribute("tabindex") && (this._savedTabIndex = /** @type {!HTMLElement} */
              c.tabIndex, c.removeAttribute("tabindex"));
          }
        }
        /**
         * Add another inert root to this inert node's set of managing inert roots.
         * @param {!InertRoot} inertRoot
         */
      }, {
        key: "addInertRoot",
        value: function(c) {
          this._throwIfDestroyed(), this._inertRoots.add(c);
        }
        /**
         * Remove the given inert root from this inert node's set of managing inert roots.
         * If the set of managing inert roots becomes empty, this node is no longer inert,
         * so the object should be destroyed.
         * @param {!InertRoot} inertRoot
         */
      }, {
        key: "removeInertRoot",
        value: function(c) {
          this._throwIfDestroyed(), this._inertRoots.delete(c), this._inertRoots.size === 0 && this.destructor();
        }
      }, {
        key: "destroyed",
        get: function() {
          return (
            /** @type {!InertNode} */
            this._destroyed
          );
        }
      }, {
        key: "hasSavedTabIndex",
        get: function() {
          return this._savedTabIndex !== null;
        }
        /** @return {!Node} */
      }, {
        key: "node",
        get: function() {
          return this._throwIfDestroyed(), this._node;
        }
        /** @param {?number} tabIndex */
      }, {
        key: "savedTabIndex",
        set: function(c) {
          this._throwIfDestroyed(), this._savedTabIndex = c;
        },
        get: function() {
          return this._throwIfDestroyed(), this._savedTabIndex;
        }
      }]), f;
    }(), a = function() {
      function f(s) {
        if (Er(this, f), !s)
          throw new Error("Missing required argument; InertManager needs to wrap a document.");
        this._document = s, this._managedNodes = /* @__PURE__ */ new Map(), this._inertRoots = /* @__PURE__ */ new Map(), this._observer = new MutationObserver(this._watchForInert.bind(this)), u(s.head || s.body || s.documentElement), s.readyState === "loading" ? s.addEventListener("DOMContentLoaded", this._onDocumentLoaded.bind(this)) : this._onDocumentLoaded();
      }
      return Sr(f, [{
        key: "setInert",
        value: function(c, d) {
          if (d) {
            if (this._inertRoots.has(c))
              return;
            var p = new r(c, this);
            if (c.setAttribute("inert", ""), this._inertRoots.set(c, p), !this._document.body.contains(c))
              for (var h = c.parentNode; h; )
                h.nodeType === 11 && u(h), h = h.parentNode;
          } else {
            if (!this._inertRoots.has(c))
              return;
            var C = this._inertRoots.get(c);
            C.destructor(), this._inertRoots.delete(c), c.removeAttribute("inert");
          }
        }
        /**
         * Get the InertRoot object corresponding to the given inert root element, if any.
         * @param {!Node} element
         * @return {!InertRoot|undefined}
         */
      }, {
        key: "getInertRoot",
        value: function(c) {
          return this._inertRoots.get(c);
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
        key: "register",
        value: function(c, d) {
          var p = this._managedNodes.get(c);
          return p !== void 0 ? p.addInertRoot(d) : p = new o(c, d), this._managedNodes.set(c, p), p;
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
        key: "deregister",
        value: function(c, d) {
          var p = this._managedNodes.get(c);
          return p ? (p.removeInertRoot(d), p.destroyed && this._managedNodes.delete(c), p) : null;
        }
        /**
         * Callback used when document has finished loading.
         */
      }, {
        key: "_onDocumentLoaded",
        value: function() {
          var c = e.call(this._document.querySelectorAll("[inert]"));
          c.forEach(function(d) {
            this.setInert(d, !0);
          }, this), this._observer.observe(this._document.body || this._document.documentElement, { attributes: !0, subtree: !0, childList: !0 });
        }
        /**
         * Callback used when mutation observer detects attribute changes.
         * @param {!Array<!MutationRecord>} records
         * @param {!MutationObserver} self
         */
      }, {
        key: "_watchForInert",
        value: function(c, d) {
          var p = this;
          c.forEach(function(h) {
            switch (h.type) {
              case "childList":
                e.call(h.addedNodes).forEach(function(v) {
                  if (v.nodeType === Node.ELEMENT_NODE) {
                    var b = e.call(v.querySelectorAll("[inert]"));
                    t.call(v, "[inert]") && b.unshift(v), b.forEach(function(_) {
                      this.setInert(_, !0);
                    }, p);
                  }
                }, p);
                break;
              case "attributes":
                if (h.attributeName !== "inert")
                  return;
                var C = (
                  /** @type {!HTMLElement} */
                  h.target
                ), g = C.hasAttribute("inert");
                p.setInert(C, g);
                break;
            }
          }, this);
        }
      }]), f;
    }();
    function l(f, s, c) {
      if (f.nodeType == Node.ELEMENT_NODE) {
        var d = (
          /** @type {!HTMLElement} */
          f
        );
        s && s(d);
        var p = (
          /** @type {!HTMLElement} */
          d.shadowRoot
        );
        if (p) {
          l(p, s, p);
          return;
        }
        if (d.localName == "content") {
          for (var h = (
            /** @type {!HTMLContentElement} */
            d
          ), C = h.getDistributedNodes ? h.getDistributedNodes() : [], g = 0; g < C.length; g++)
            l(C[g], s, c);
          return;
        }
        if (d.localName == "slot") {
          for (var v = (
            /** @type {!HTMLSlotElement} */
            d
          ), b = v.assignedNodes ? v.assignedNodes({ flatten: !0 }) : [], _ = 0; _ < b.length; _++)
            l(b[_], s, c);
          return;
        }
      }
      for (var x = f.firstChild; x != null; )
        l(x, s, c), x = x.nextSibling;
    }
    function u(f) {
      if (!f.querySelector("style#inert-style, link#inert-style")) {
        var s = document.createElement("style");
        s.setAttribute("id", "inert-style"), s.textContent = `
[inert] {
  pointer-events: none;
  cursor: default;
}

[inert], [inert] * {
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
`, f.appendChild(s);
      }
    }
    if (!HTMLElement.prototype.hasOwnProperty("inert")) {
      var m = new a(document);
      Object.defineProperty(HTMLElement.prototype, "inert", {
        enumerable: !0,
        /** @this {!HTMLElement} */
        get: function() {
          return this.hasAttribute("inert");
        },
        /** @this {!HTMLElement} */
        set: function(s) {
          m.setInert(this, s);
        }
      });
    }
  })();

  // ../dist/dom-helpers/use-document-class.js
  function An(e) {
    return e?.ownerDocument ?? document ?? window.document ?? globalThis.document;
  }

  // ../dist/dom-helpers/use-blocking-element.js
  function Aa() {
    return An().$blockingElements;
  }
  function On({ activeElementParameters: { getDocument: e, onActiveElementChange: t, onLastActiveElementChange: n, onWindowFocusedChange: r, ...o }, blockingElementParameters: { enabled: a, getTarget: l, ...u }, ...m }) {
    k(On);
    let f = T(l);
    Be({
      activeElementParameters: {
        getDocument: e,
        onActiveElementChange: t,
        onWindowFocusedChange: r,
        onLastActiveElementChange: T((g, v, b) => {
          n?.(g, v, b), g && (a ? C(g, b) : p(g, b));
        })
      }
    });
    let [s, c] = z(null, Ce), [d, p] = z(null, Ce), [h, C] = z(null, Ce);
    return te(() => {
      let g = f();
      if (a)
        try {
          return Aa().push(g), c(g), () => {
            Aa().remove(g);
          };
        } catch (v) {
          console.error(v);
        }
    }, [a]), { getTop: s, getLastActiveWhenClosed: d, getLastActiveWhenOpen: h };
  }

  // ../dist/component-detail/use-focus-trap.js
  function lt({ focusTrapParameters: { onlyMoveFocus: e, trapActive: t, focusPopup: n, focusOpener: r }, activeElementParameters: o, refElementReturn: a }) {
    k(lt);
    let l = T(n), u = T(r);
    j(() => {
      if (t) {
        let d = f(), p = c();
        d ??= a.getElement(), console.assert(!!d), d && l(d, () => Oa(d));
      } else {
        let d = s(), p = document.activeElement, h = a.getElement();
        (p == document.body || p == null || h == p || h?.contains(p)) && d && u(d);
      }
    }, [t]);
    let { getElement: m } = a, { getTop: f, getLastActiveWhenClosed: s, getLastActiveWhenOpen: c } = On({
      activeElementParameters: o,
      blockingElementParameters: {
        enabled: t && !e,
        getTarget: m
      }
    });
    return {
      props: be({ "aria-modal": t ? "true" : void 0 }, "data-focus-trap")
    };
  }
  function Oa(e) {
    return Jl(e, (t) => t instanceof Element && Ia(t));
  }
  function Jl(e, t) {
    return e && t(e) ? e : (console.assert(!!e), e ??= document.body, document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, { acceptNode: (o) => t(o) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP }).firstChild());
  }

  // ../dist/component-detail/use-paginated-children.js
  function ut({ managedChildrenReturn: { getChildren: e }, rearrangeableChildrenReturn: { indexDemangler: t }, paginatedChildrenParameters: { paginationMax: n, paginationMin: r }, rovingTabIndexReturn: { getTabbableIndex: o, setTabbableIndex: a }, refElementReturn: { getElement: l } }) {
    k(ut);
    let [u, m] = D(null), f = r != null || n != null, s = M({ paginationMax: null, paginationMin: null }), c = R((h, C) => {
      let g = e().getHighestIndex() + 1, v = e().getLowestIndex();
      for (let b = v; b <= g; ++b) {
        let _ = b >= (h ?? -1 / 0) && b < (C ?? 1 / 0);
        e().getAt(t(b))?.setPaginationVisible(_), _ && (C != null || h != null) && e().getAt(t(b))?.setChildCountIfPaginated(e().getHighestIndex() + 1);
      }
    }, [
      /* Must be empty */
    ]);
    j(() => {
      let h = o();
      if (h != null) {
        let C = l()?.contains(document.activeElement) || !1;
        setTimeout(() => {
          if (r != null && h < r)
            a(r, void 0, C);
          else if (n != null && h >= n) {
            let g = n - 1;
            g == -1 && (g = null), a(g, void 0, C);
          }
        }, 1);
      }
      c(r, n), s.current.paginationMax = n ?? null, s.current.paginationMin = r ?? null;
    }, [n, r]);
    let d = R((h) => h >= (r ?? -1 / 0) && h < (n ?? 1 / 0), []), p = le(() => ({
      parentIsPaginated: f,
      getDefaultPaginationVisible: d
    }), [f]);
    return {
      context: le(() => ({ paginatedChildContext: p }), [p]),
      managedChildrenParameters: {
        onChildrenCountChange: T((h) => {
          if (n != null || r != null) {
            m(h);
            let C = r ?? 0, g = n ?? h;
            for (let v = C; v < g; ++v)
              e().getAt(v)?.setChildCountIfPaginated(h);
          } else
            m(null);
        })
      },
      paginatedChildrenReturn: { refreshPagination: c, childCount: u }
    };
  }
  function ct({ info: { index: e }, context: { paginatedChildContext: { parentIsPaginated: t, getDefaultPaginationVisible: n } } }) {
    k(ct);
    let [r, o] = D(null), [a, l] = D(t ? n(e) : !0);
    return {
      props: be(t ? { "aria-setsize": r ?? void 0, "aria-posinset": e + 1 } : {}, "data-paginated-children-child"),
      paginatedChildReturn: {
        /*paginatedVisible,*/
        parentIsPaginated: t,
        hideBecausePaginated: t ? !a : !1
      },
      info: {
        setPaginationVisible: l,
        setChildCountIfPaginated: o
      }
    };
  }

  // ../dist/component-detail/use-staggered-children.js
  function We({ managedChildrenReturn: { getChildren: e }, staggeredChildrenParameters: { staggered: t } }) {
    k(We);
    let [n, r] = D(t), o = M(-1), a = R(() => {
      o.current != -1 && clearTimeout(o.current), o.current = setTimeout(() => {
        o.current = -1;
        let g = l();
        g != null && f((v) => Math.min(g, (v ?? 0) + 1));
      }, 50);
    }, [
      /* Must be empty */
    ]), [l, u] = z(R((g, v) => {
      o.current == -1 && (a(), f((b) => Math.min(g ?? 0, (b ?? 0) + 1)));
    }, [
      /* Must be empty */
    ]), Ce), [m, f] = z(R((g, v) => {
      if (!(g == null || !p.current)) {
        r(g < (l() ?? 0));
        for (let b = v ?? 0; b < g; ++b)
          e().getAt(b)?.setStaggeredVisible(!0);
        a();
      }
    }, [
      /* Must be empty */
    ]), Ce), s = !!t, c = R((g) => {
      f((v) => Math.min(l() ?? 0, 1 + Math.max(v ?? 0, g + 1)));
    }, []), d = R((g) => {
      u((v) => Math.max(v ?? 0, 1 + g));
    }, []), p = M(s);
    p.current = s;
    let h = R((g) => {
      if (p.current) {
        let v = m();
        return v == null ? !1 : g < v;
      } else
        return !0;
    }, []), C = le(() => ({
      parentIsStaggered: s,
      childCallsThisToTellTheParentToMountTheNextOne: c,
      childCallsThisToTellTheParentTheHighestIndex: d,
      getDefaultStaggeredVisible: h
    }), [s]);
    return {
      staggeredChildrenReturn: { stillStaggering: n },
      context: le(() => ({
        staggeredChildContext: C
      }), [C])
    };
  }
  function $e({ info: { index: e }, context: { staggeredChildContext: { parentIsStaggered: t, childCallsThisToTellTheParentTheHighestIndex: n, getDefaultStaggeredVisible: r, childCallsThisToTellTheParentToMountTheNextOne: o } } }) {
    k($e);
    let [a, l] = D(r(e));
    return te(() => {
      n(e);
    }, [e]), j(() => {
      t && a && o(e);
    }, [e, t && a]), {
      props: be(t ? { "aria-busy": (!a).toString() } : {}, "data-staggered-children-child"),
      staggeredChildReturn: { parentIsStaggered: t, hideBecauseStaggered: t ? !a : !1 },
      info: { setStaggeredVisible: l }
    };
  }

  // ../dist/observers/use-children-have-focus.js
  function Ve(e) {
    k(Ve);
    let { childrenHaveFocusParameters: { onCompositeFocusChange: t } } = e, [n, r] = z(t, xe, pe), [o, a] = z(T((l, u, m) => {
      console.assert(l >= 0 && l <= 1), r(!!(l && !u), m);
    }), lr, setTimeout);
    return {
      childrenHaveFocusReturn: { getAnyFocused: n },
      context: q({ childrenHaveFocusChildContext: q({ setFocusCount: a }) })
    };
  }
  function dt({ context: { childrenHaveFocusChildContext: { setFocusCount: e } } }) {
    return k(dt), {
      hasCurrentFocusParameters: {
        onCurrentFocusedInnerChanged: T((t, n, r) => {
          t ? e((o) => (o ?? 0) + 1, r) : !t && n && e((o) => (o ?? 0) - 1, r);
        })
      }
    };
  }

  // ../dist/observers/use-has-current-focus.js
  function De(e) {
    k(De);
    let { hasCurrentFocusParameters: { onCurrentFocusedChanged: t, onCurrentFocusedInnerChanged: n }, refElementReturn: { getElement: r } } = e;
    Z("useHasCurrentFocus", t, n, r);
    let [o, a] = z(t, xe, pe), [l, u] = z(n, xe, pe), m = R((c) => {
      u(!0, c), a(c.target == r(), c);
    }, []), f = R((c) => {
      u(!1, c), a(!1, c);
    }, []);
    return j(() => () => {
      a(!1, void 0), u(!1, void 0);
    }, []), {
      hasCurrentFocusReturn: {
        propsStable: M({
          [ir]: m,
          [Et]: f
        }).current,
        getCurrentFocused: o,
        getCurrentFocusedInner: l
      }
    };
  }

  // ../dist/component-use/use-grid-navigation-complete.js
  function Tr({ gridNavigationParameters: e, linearNavigationParameters: t, rovingTabIndexParameters: n, singleSelectionParameters: r, multiSelectionParameters: o, typeaheadNavigationParameters: a, sortableChildrenParameters: l, rearrangeableChildrenParameters: u, paginatedChildrenParameters: m, staggeredChildrenParameters: f, refElementParameters: s, ...c }) {
    k(Tr);
    let d = R(() => he.getChildren(), []), p = R(() => d().getLowestIndex(), []), h = R(() => d().getHighestIndex(), []), C = R((Ie) => {
      let ke = d().getAt(Ie);
      return !(ke == null || ke.untabbable);
    }, []), { refElementReturn: g, propsStable: v, ...b } = ae({ refElementParameters: s }), { childrenHaveFocusParameters: _, managedChildrenParameters: x, context: { gridNavigationRowContext: S, rovingTabIndexContext: P, singleSelectionContext: y, multiSelectionContext: I, typeaheadNavigationContext: F }, rearrangeableChildrenReturn: E, props: N, rovingTabIndexReturn: w, linearNavigationReturn: A, singleSelectionReturn: O, multiSelectionReturn: U, sortableChildrenReturn: V, typeaheadNavigationReturn: G, ...$ } = Pn({
      gridNavigationParameters: e,
      linearNavigationParameters: { getLowestIndex: p, getHighestIndex: h, isValidForLinearNavigation: C, ...t },
      managedChildrenReturn: { getChildren: d },
      rovingTabIndexParameters: { untabbableBehavior: "focus-parent", ...n },
      singleSelectionParameters: r,
      multiSelectionParameters: o,
      typeaheadNavigationParameters: { isValidForTypeaheadNavigation: C, ...a },
      paginatedChildrenParameters: m,
      refElementReturn: g,
      rearrangeableChildrenParameters: {
        onRearranged: T(() => {
          L(m.paginationMin, m.paginationMax);
        }),
        ...u
      },
      childrenHaveFocusReturn: { getAnyFocused: T(() => ie.getAnyFocused()) },
      sortableChildrenParameters: l
    }), { indexDemangler: J } = E, { context: { childrenHaveFocusChildContext: Y }, childrenHaveFocusReturn: ie } = Ve({ childrenHaveFocusParameters: _ }), de = Me({ managedChildrenParameters: { onChildrenCountChange: T((Ie) => B?.(Ie)), ...x } }), { context: { managedChildContext: ve }, managedChildrenReturn: he } = de, { paginatedChildrenReturn: K, paginatedChildrenReturn: { refreshPagination: L }, managedChildrenParameters: { onChildrenCountChange: B }, context: { paginatedChildContext: Q } } = ut({ refElementReturn: g, managedChildrenReturn: he, paginatedChildrenParameters: m, rovingTabIndexReturn: w, rearrangeableChildrenReturn: { indexDemangler: J } }), { context: { staggeredChildContext: oe }, staggeredChildrenReturn: re } = We({ managedChildrenReturn: he, staggeredChildrenParameters: f }), ye = q({
      singleSelectionContext: y,
      multiSelectionContext: I,
      managedChildContext: ve,
      rovingTabIndexContext: P,
      typeaheadNavigationContext: F,
      childrenHaveFocusChildContext: Y,
      paginatedChildContext: Q,
      staggeredChildContext: oe,
      gridNavigationRowContext: S
    });
    return {
      context: ye,
      props: W(N, v),
      managedChildrenReturn: he,
      rearrangeableChildrenReturn: E,
      staggeredChildrenReturn: re,
      rovingTabIndexReturn: w,
      childrenHaveFocusReturn: ie,
      paginatedChildrenReturn: K,
      linearNavigationReturn: A,
      singleSelectionReturn: O,
      multiSelectionReturn: U,
      sortableChildrenReturn: V,
      typeaheadNavigationReturn: G
    };
  }
  function Hn({ info: { index: e, untabbable: t, ...n }, context: r, textContentParameters: o, linearNavigationParameters: a, rovingTabIndexParameters: l, typeaheadNavigationParameters: u, gridNavigationSelectionSortableRowParameters: m, hasCurrentFocusParameters: { onCurrentFocusedChanged: f, onCurrentFocusedInnerChanged: s, ...c }, singleSelectionChildParameters: d, multiSelectionChildParameters: p, ...h }) {
    k(Hn);
    let { info: C, paginatedChildReturn: g, props: v, ...b } = ct({ info: { index: e }, context: r }), { info: _, staggeredChildReturn: x, props: S, ...P } = $e({ info: { index: e }, context: r });
    t ||= g.hideBecausePaginated || x.hideBecauseStaggered;
    let y = R(() => ye.getChildren(), []), I = R(() => y().getHighestIndex(), []), F = R(() => y().getLowestIndex(), []), E = R((Oe) => {
      let ht = y().getAt(Oe);
      return !(ht == null || ht.untabbable);
    }, []), { refElementReturn: N, propsStable: w, ...A } = ae({ refElementParameters: {} }), O = wn({
      rovingTabIndexParameters: l,
      typeaheadNavigationParameters: { isValidForTypeaheadNavigation: E, ...u },
      linearNavigationParameters: { isValidForLinearNavigation: E, getHighestIndex: I, getLowestIndex: F, ...a },
      managedChildrenReturn: { getChildren: y },
      refElementReturn: N,
      context: r,
      info: { index: e, untabbable: t },
      textContentParameters: o,
      gridNavigationSelectionSortableRowParameters: m,
      singleSelectionChildParameters: d,
      multiSelectionChildParameters: p
    }), { linearNavigationReturn: U, managedChildrenParameters: V, pressParameters: G, rovingTabIndexChildReturn: $, rovingTabIndexReturn: J, singleSelectionChildReturn: Y, multiSelectionChildReturn: ie, textContentReturn: de, typeaheadNavigationReturn: ve, context: he, info: K, props: L, hasCurrentFocusParameters: { onCurrentFocusedInnerChanged: B, ...Q }, ...oe } = O, { context: re, managedChildrenReturn: ye } = Me({ managedChildrenParameters: V }), Ie = {
      getElement: N.getElement,
      index: e,
      untabbable: t,
      ...K,
      ...C,
      ..._
    }, { managedChildReturn: ke, ...Ut } = Ae({ context: r, info: { ...Ie, ...n } }), Xn = q({
      ...he,
      ...re
    }), { hasCurrentFocusReturn: Ye } = De({
      refElementReturn: N,
      hasCurrentFocusParameters: {
        onCurrentFocusedChanged: f,
        onCurrentFocusedInnerChanged: T((Oe, ht, Or) => {
          B?.(Oe, ht, Or), s?.(Oe, ht, Or);
        })
      }
    }), pt = W(w, L, Ye.propsStable, v, S);
    return {
      pressParameters: G,
      hasCurrentFocusReturn: Ye,
      managedChildrenReturn: ye,
      context: Xn,
      managedChildReturn: ke,
      staggeredChildReturn: x,
      paginatedChildReturn: g,
      linearNavigationReturn: U,
      rovingTabIndexChildReturn: $,
      rovingTabIndexReturn: J,
      singleSelectionChildReturn: Y,
      multiSelectionChildReturn: ie,
      textContentReturn: de,
      typeaheadNavigationReturn: ve,
      props: pt
    };
  }
  function Un({ gridNavigationCellParameters: e, context: t, textContentParameters: n, info: { focusSelf: r, index: o, untabbable: a, getSortValue: l, ...u }, ...m }) {
    k(Un);
    let { refElementReturn: f, propsStable: s } = ae({ refElementParameters: {} }), { hasCurrentFocusParameters: c, rovingTabIndexChildReturn: d, textContentReturn: p, pressParameters: { excludeSpace: h }, props: C, info: g, ...v } = Rn({
      gridNavigationCellParameters: e,
      info: { index: o, untabbable: a },
      context: t,
      refElementReturn: f,
      textContentParameters: n
    });
    let { hasCurrentFocusReturn: b } = De({
      hasCurrentFocusParameters: {
        onCurrentFocusedChanged: null,
        ...c
      },
      refElementReturn: f
    }), _ = {
      getSortValue: l,
      getElement: f.getElement,
      getLocallyTabbable: d.getTabbable,
      setLocallyTabbable: g.setLocallyTabbable,
      focusSelf: r,
      index: o,
      untabbable: a
    }, { managedChildReturn: x } = Ae({ context: t, info: { ..._, ...u } });
    return {
      props: W(s, C, b.propsStable),
      refElementReturn: f,
      rovingTabIndexChildReturn: d,
      pressParameters: { excludeSpace: T(() => h?.() || !1) },
      hasCurrentFocusReturn: b,
      managedChildReturn: x,
      textContentReturn: p
    };
  }
  function Ir({ gridNavigationParameters: e, linearNavigationParameters: t, paginatedChildrenParameters: n, rearrangeableChildrenParameters: r, rovingTabIndexParameters: o, singleSelectionDeclarativeParameters: a, multiSelectionParameters: l, sortableChildrenParameters: u, staggeredChildrenParameters: m, typeaheadNavigationParameters: f, singleSelectionParameters: s, refElementParameters: c, ...d }) {
    let p = Tr({
      linearNavigationParameters: t,
      paginatedChildrenParameters: n,
      rearrangeableChildrenParameters: r,
      rovingTabIndexParameters: o,
      singleSelectionParameters: { initiallySingleSelectedIndex: a.singleSelectedIndex, onSingleSelectedIndexChange: T((...v) => h?.(...v)), ...s },
      multiSelectionParameters: l,
      sortableChildrenParameters: u,
      staggeredChildrenParameters: m,
      refElementParameters: c,
      typeaheadNavigationParameters: f,
      gridNavigationParameters: e
    }), { singleSelectionParameters: { onSingleSelectedIndexChange: h } } = Ft({
      singleSelectionDeclarativeParameters: a,
      singleSelectionReturn: p.singleSelectionReturn
    }), { singleSelectionReturn: { getSingleSelectedIndex: C }, ...g } = p;
    return { ...g, singleSelectionReturn: { getSingleSelectedIndex: C } };
  }

  // ../dist/component-use/use-list-navigation-complete.js
  function Pr({ linearNavigationParameters: e, rearrangeableChildrenParameters: t, sortableChildrenParameters: n, typeaheadNavigationParameters: r, rovingTabIndexParameters: o, singleSelectionParameters: a, multiSelectionParameters: l, paginatedChildrenParameters: u, staggeredChildrenParameters: m, refElementParameters: f, ...s }) {
    k(Pr);
    let { initiallySingleSelectedIndex: c } = a, d = R(() => Q.getChildren(), []), p = R(() => d().getLowestIndex(), []), h = R(() => d().getHighestIndex(), []), C = R((re) => {
      let ye = d().getAt(re);
      return !(!ye || ye.untabbable);
    }, []), { propsStable: g, refElementReturn: v } = ae({ refElementParameters: f }), { childrenHaveFocusParameters: b, managedChildrenParameters: { onChildrenMountChange: _, ...x }, context: { rovingTabIndexContext: S, singleSelectionContext: P, multiSelectionContext: y, typeaheadNavigationContext: I }, linearNavigationReturn: F, rovingTabIndexReturn: E, singleSelectionReturn: N, multiSelectionReturn: w, typeaheadNavigationReturn: A, rearrangeableChildrenReturn: O, sortableChildrenReturn: U, props: V, ...G } = Dn({
      managedChildrenReturn: { getChildren: d },
      linearNavigationParameters: { getLowestIndex: p, getHighestIndex: h, isValidForLinearNavigation: C, ...e },
      typeaheadNavigationParameters: { isValidForTypeaheadNavigation: C, ...r },
      rovingTabIndexParameters: { untabbableBehavior: "focus-parent", ...o },
      singleSelectionParameters: a,
      multiSelectionParameters: l,
      rearrangeableChildrenParameters: {
        onRearranged: T(() => {
          ie(u.paginationMin, u.paginationMax);
        }),
        ...t
      },
      paginatedChildrenParameters: u,
      refElementReturn: v,
      sortableChildrenParameters: n,
      childrenHaveFocusReturn: { getAnyFocused: T(() => J.getAnyFocused()) }
    }), { context: { childrenHaveFocusChildContext: $ }, childrenHaveFocusReturn: J } = Ve({ childrenHaveFocusParameters: b }), { paginatedChildrenReturn: Y, paginatedChildrenReturn: { refreshPagination: ie }, managedChildrenParameters: de, context: { paginatedChildContext: ve } } = ut({ refElementReturn: v, managedChildrenReturn: { getChildren: T(() => Q.getChildren()) }, rovingTabIndexReturn: E, paginatedChildrenParameters: u, rearrangeableChildrenReturn: { indexDemangler: O.indexDemangler } }), { context: { staggeredChildContext: he }, staggeredChildrenReturn: K } = We({ managedChildrenReturn: { getChildren: T(() => Q.getChildren()) }, staggeredChildrenParameters: m }), L = Me({
      managedChildrenParameters: {
        onChildrenMountChange: _,
        ...de,
        ...x
      }
    }), { context: { managedChildContext: B }, managedChildrenReturn: Q } = L, oe = q(q({
      childrenHaveFocusChildContext: $,
      managedChildContext: B,
      paginatedChildContext: ve,
      rovingTabIndexContext: S,
      singleSelectionContext: P,
      multiSelectionContext: y,
      staggeredChildContext: he,
      typeaheadNavigationContext: I
    }));
    return {
      context: oe,
      props: W(V, g),
      managedChildrenReturn: Q,
      rearrangeableChildrenReturn: O,
      staggeredChildrenReturn: K,
      paginatedChildrenReturn: Y,
      sortableChildrenReturn: U,
      linearNavigationReturn: F,
      rovingTabIndexReturn: E,
      singleSelectionReturn: N,
      multiSelectionReturn: w,
      typeaheadNavigationReturn: A,
      childrenHaveFocusReturn: J
    };
  }
  function wr({
    info: { index: e, focusSelf: t, untabbable: n, getSortValue: r, ...o },
    // The "...info" is empty if M is the same as UCLNCI<ChildElement>.
    textContentParameters: a,
    refElementParameters: l,
    hasCurrentFocusParameters: { onCurrentFocusedChanged: u, onCurrentFocusedInnerChanged: m, ...f },
    singleSelectionChildParameters: s,
    multiSelectionChildParameters: c,
    context: { managedChildContext: d, rovingTabIndexContext: p, paginatedChildContext: h, staggeredChildContext: C, singleSelectionContext: g, multiSelectionContext: v, typeaheadNavigationContext: b, childrenHaveFocusChildContext: _, ...x },
    ...S
  }) {
    k(wr);
    let { info: P, paginatedChildReturn: y, paginatedChildReturn: { hideBecausePaginated: I }, props: F } = ct({ info: { index: e }, context: { paginatedChildContext: h } }), { info: E, staggeredChildReturn: N, staggeredChildReturn: { hideBecauseStaggered: w }, props: A } = $e({ info: { index: e }, context: { staggeredChildContext: C } });
    n ||= I || w;
    let { refElementReturn: O, propsStable: U, ...V } = ae({ refElementParameters: l }), { hasCurrentFocusParameters: { onCurrentFocusedInnerChanged: G, ...$ }, pressParameters: { excludeSpace: J, onPressSync: Y, ...ie }, textContentReturn: de, singleSelectionChildReturn: ve, multiSelectionChildReturn: he, info: K, rovingTabIndexChildReturn: L, propsChild: B, propsTabbable: Q, ...oe } = Ln({
      info: { index: e, untabbable: n },
      context: { rovingTabIndexContext: p, singleSelectionContext: g, multiSelectionContext: v, typeaheadNavigationContext: b },
      singleSelectionChildParameters: s,
      multiSelectionChildParameters: c,
      refElementReturn: O,
      textContentParameters: a
    }), re = {
      index: e,
      focusSelf: t,
      getElement: O.getElement,
      getSortValue: r,
      untabbable: n,
      ...E,
      ...P,
      ...K
    }, { managedChildReturn: ye } = Ae({ context: { managedChildContext: d }, info: { ...re, ...o } }), { hasCurrentFocusParameters: { onCurrentFocusedInnerChanged: Ie } } = dt({ context: { childrenHaveFocusChildContext: _ } }), ke = T((Ye, pt, Oe) => {
      G?.(Ye, pt, Oe), Ie?.(Ye, pt, Oe), m?.(Ye, pt, Oe);
    }), { hasCurrentFocusReturn: Ut } = De({
      hasCurrentFocusParameters: {
        onCurrentFocusedInnerChanged: ke,
        onCurrentFocusedChanged: u
      },
      refElementReturn: O
    }), Xn = W(U, Ut.propsStable, B, F, A);
    return {
      propsChild: Xn,
      propsTabbable: Q,
      pressParameters: {
        onPressSync: Y,
        excludeSpace: J
      },
      textContentReturn: de,
      refElementReturn: O,
      singleSelectionChildReturn: ve,
      multiSelectionChildReturn: he,
      hasCurrentFocusReturn: Ut,
      managedChildReturn: ye,
      paginatedChildReturn: y,
      staggeredChildReturn: N,
      rovingTabIndexChildReturn: L
    };
  }
  function Rr({ singleSelectionParameters: e, singleSelectionDeclarativeParameters: t, ...n }) {
    let r = Pr({
      singleSelectionParameters: {
        initiallySingleSelectedIndex: t.singleSelectedIndex,
        // Needs to be a (stable) callback because of declaration order
        onSingleSelectedIndexChange: T((...f) => o?.(...f)),
        ...e
      },
      ...n
    }), { singleSelectionParameters: { onSingleSelectedIndexChange: o, ...a }, ...l } = Ft({ singleSelectionDeclarativeParameters: t, singleSelectionReturn: r.singleSelectionReturn }), { singleSelectionReturn: { getSingleSelectedIndex: u }, ...m } = r;
    return { ...m, singleSelectionReturn: { getSingleSelectedIndex: u } };
  }
  function kr({ multiSelectionChildParameters: e, multiSelectionChildDeclarativeParameters: { multiSelected: t, onMultiSelectedChange: n }, ...r }) {
    let o = wr({
      multiSelectionChildParameters: {
        initiallyMultiSelected: t,
        onMultiSelectChange: T((s) => {
          a(s);
        }),
        ...e
      },
      ...r
    }), { multiSelectionChildParameters: { onMultiSelectChange: a }, info: l, ...u } = _r({
      multiSelectionChildDeclarativeParameters: { onMultiSelectedChange: n, multiSelected: t },
      multiSelectionChildReturn: o.multiSelectionChildReturn
    }), { multiSelectionChildReturn: m, ...f } = o;
    return { ...f, multiSelectionChildReturn: m };
  }

  // ../dist/component-use/use-modal.js
  function jn({ dismissParameters: { dismissActive: e, onDismiss: t, ...n }, escapeDismissParameters: { dismissEscapeActive: r, onDismissEscape: o, parentDepth: a, ...l }, focusTrapParameters: { trapActive: u, ...m }, activeElementParameters: { getDocument: f, onActiveElementChange: s, onLastActiveElementChange: c, onWindowFocusedChange: d, ...p }, backdropDismissParameters: { dismissBackdropActive: h, onDismissBackdrop: C, ...g }, lostFocusDismissParameters: { dismissLostFocusActive: v, onDismissLostFocus: b, ..._ }, refElementParameters: { onElementChange: x, onMount: S, onUnmount: P, ...y }, modalParameters: { active: I, ...F }, ...E }) {
    k(jn);
    let { refElementPopupReturn: N, refElementSourceReturn: w, propsStablePopup: A, propsStableSource: O } = Mn({
      dismissParameters: { dismissActive: e && I, onDismiss: t },
      escapeDismissParameters: { dismissEscapeActive: r, onDismissEscape: o, parentDepth: a },
      activeElementParameters: { getDocument: f, onActiveElementChange: s, onLastActiveElementChange: c, onWindowFocusedChange: d },
      backdropDismissParameters: { dismissBackdropActive: h, onDismissBackdrop: C },
      lostFocusDismissParameters: { dismissLostFocusActive: v, onDismissLostFocus: b }
    }), { propsStable: U, refElementReturn: V } = ae({ refElementParameters: { onElementChange: x, onMount: S, onUnmount: P } }), { props: G } = lt({
      focusTrapParameters: { trapActive: u && I, ...m },
      activeElementParameters: { getDocument: f, onActiveElementChange: s, onLastActiveElementChange: c, onWindowFocusedChange: d },
      refElementReturn: V
    });
    return {
      propsFocusContainer: W(U, G),
      refElementPopupReturn: N,
      refElementSourceReturn: w,
      propsStablePopup: A,
      propsStableSource: O
    };
  }

  // ../node_modules/.pnpm/github.com+mwszekely+async-to-sync@624c049a849d0a02039c1ec14f78617394daabce/node_modules/async-to-sync/dist/index.js
  function Ql(e) {
    return e instanceof Promise;
  }
  var Gn = Symbol("Unset");
  function Ha({ asyncInput: e, onInvoke: t, onInvoked: n, onFinally: r, onReject: o, onResolve: a, onHasError: l, onHasResult: u, onError: m, onReturnValue: f, capture: s, onAsyncDebounce: c, onSyncDebounce: d, onPending: p, throttle: h, wait: C }) {
    let g = !1, v = !1, b = !1, _ = Gn, x = () => {
      r?.(), p?.(g = !1);
      let I = !b;
      c?.(b = !1), I || (console.assert(_ !== Gn), _ != Gn && (d?.(v = !0), y()));
    }, S = (...I) => {
      p?.(g = !0), console.assert(v == !1), l?.(null), u?.(null);
      let F, E = !1;
      try {
        t?.(), F = e(...I), l?.(!1);
      } catch (N) {
        E = !0, m?.(N), n?.("throw");
      }
      Ql(F) ? (n?.("async"), F.then((N) => (a?.(), u?.(!0), f?.(N), N)).catch((N) => (o?.(), l?.(!0), m?.(N), N)).finally(x)) : (n?.("sync"), E ? (o?.(), u?.(!1), l?.(!0)) : (a?.(), u?.(!0), l?.(!1)), f?.(F), p?.(g = !1), x());
    }, P = {
      leading: !C,
      trailing: !0
    };
    h && ((C == null || C < h) && (C = h), P.maxWait = h);
    let y = mr(() => {
      d?.(v = !1), g ? c?.(b = !0) : (console.assert(_ != Gn), S(..._));
    }, C || void 0, P);
    return {
      syncOutput: (...I) => {
        _ = s?.(...I) ?? [], d?.(v = !0), y();
      },
      flushSyncDebounce: () => {
        y.flush();
      },
      cancelSyncDebounce: () => {
        y.cancel();
      }
    };
  }

  // ../dist/preact-extensions/use-async.js
  function Yl(...e) {
    return e;
  }
  var Zl = async function() {
  }.constructor;
  function At(e, t) {
    k(At);
    let [n, r, o] = D(!1), [a, l, u] = D(void 0), [m, f, s] = D(void 0), [c, d, p] = D(!1), [h, C, g] = D(!1), [v, b] = D(!1), [_, x] = D(!1), [S, P] = D(e instanceof Zl ? "async" : null), [y, I] = D(0), [F, E] = D(0), [N, w] = D(0), [A, O] = D(0), U = R(() => {
      I((B) => B + 1);
    }, []), V = R(() => {
      w((B) => B + 1);
    }, []), G = R(() => {
      O((B) => B + 1);
    }, []), $ = R(() => {
      E((B) => B + 1);
    }, []), { throttle: J, debounce: Y, capture: ie } = t ?? {}, de = T(ie ?? Yl), ve = T(e ?? Xe), { flushSyncDebounce: he, syncOutput: K, cancelSyncDebounce: L } = le(() => Ha({
      asyncInput: ve,
      capture: de,
      onAsyncDebounce: b,
      onError: f,
      onPending: r,
      onReturnValue: l,
      onSyncDebounce: x,
      onHasError: d,
      onHasResult: C,
      onInvoked: P,
      onInvoke: U,
      onFinally: $,
      onReject: G,
      onResolve: V,
      throttle: t?.throttle ?? void 0,
      wait: t?.debounce ?? void 0
    }), [J, Y]);
    return j(() => () => L(), [L]), {
      syncHandler: K,
      pending: n,
      result: a,
      error: m,
      hasError: c || !1,
      hasResult: h || !1,
      resolveCount: N,
      rejectCount: A,
      settleCount: F,
      debouncingAsync: v,
      debouncingSync: _,
      invocationResult: S,
      callCount: y,
      flushDebouncedPromise: he
    };
  }

  // ../dist/dom-helpers/use-async-handler.js
  function ft({ asyncHandler: e, capture: t, ...n }) {
    k(ft);
    let [r, o, a] = D(void 0), [l, u] = D(!1), m = T((f) => {
      let s = t(f);
      return o(s), u(!0), [s, f];
    });
    return {
      getCurrentCapture: a,
      currentCapture: r,
      hasCapture: l,
      ...At(e, { capture: m, ...n })
    };
  }

  // ../dist/component-use/use-press.js
  function eu() {
    return "onpointerup" in window;
  }
  var Dr = !1, Nr = null;
  function Ua() {
    Dr = !0, Nr != null && clearTimeout(Nr), Nr = setTimeout(() => {
      Dr = !1;
    }, 5);
  }
  function mt(e) {
    k(mt);
    let { refElementReturn: { getElement: t }, pressParameters: { focusSelf: n, onPressSync: r, allowRepeatPresses: o, longPressThreshold: a, excludeEnter: l, excludePointer: u, excludeSpace: m, onPressingChange: f } } = e, s = T(l ?? xe), c = T(m ?? xe), d = T(u ?? xe), p = T(f ?? Pt), [h, C] = z(p, xe), g = r != null, [v, b] = D(null), [_, x, S] = D(!1), [P, y, I] = D(!1), [F, E, N] = D(!1), w = T((L) => {
      L.preventDefault(), L.stopPropagation(), C(!0, L), y(!0), E(!0), b(!1);
      let B = t();
      B && n(B);
    }), A = R((L) => {
      L.preventDefault(), L.stopPropagation();
      let B = t(), Q = L.touches[0], oe = [
        [0, 0],
        [-Q.radiusX || 0, -Q.radiusY || 0],
        [+Q.radiusX || 0, -Q.radiusY || 0],
        [-Q.radiusX || 0, +Q.radiusY || 0],
        [+Q.radiusX || 0, +Q.radiusY || 0]
      ], re = !1;
      for (let [ye, Ie] of oe) {
        let ke = document.elementFromPoint((Q?.clientX ?? 0) + ye, (Q?.clientY ?? 0) + Ie);
        re ||= B?.contains(ke) ?? !1;
      }
      C(re && I(), L), E(re);
    }, []), O = R((L) => {
      L.preventDefault(), L.stopPropagation();
      let B = N();
      I() && B && (Ua(), Y(L)), x(!1), E(!1), y(!1), C(!1, L);
    }, []), U = T((L) => {
      if (!d() && L.buttons & 1) {
        L.preventDefault(), L.stopPropagation(), C(!0, L), y(!0), E(!0), b(!1);
        let B = t();
        B && n(B);
      }
    }), V = T((L) => {
      let B = I();
      if (L.buttons & 1 || y(B = !1), B) {
        let Q = t(), oe = document.elementFromPoint(L.clientX, L.clientY), re = Q == oe || Q?.contains(oe) || !1;
        E(re), C(re && I(), L);
      }
    }), G = R((L) => {
      let B = N(), Q = I();
      d() || Q && B && (Ua(), Y(L), L.preventDefault(), L.stopPropagation()), x(!1), E(!1), y(!1), b(!1), C(!1, L);
    }, []), $ = R((L) => {
      E(!0);
    }, []), J = R((L) => {
      E(!1), b(!1);
    }, []);
    je({
      callback: () => {
        let L = t();
        b(P && N()), L && P && N() && (n(L), a && (x(!1), E(!1), y(!1)));
      },
      timeout: a ?? null,
      triggerIndex: v ? !0 : P && N()
    });
    let Y = T((L) => {
      if (x(!1), E(!1), y(!1), b(null), r) {
        let B = t();
        B && n(B), L.preventDefault(), L.stopPropagation();
        try {
          tu();
        } finally {
          r(L);
        }
      }
    }), ie = T((L) => {
      r && (L.key == " " && !c() && (x(!0), C(!0, L), L.preventDefault()), L.key == "Enter" && !s() && (!L.repeat || (o ?? !1)) && (C(!0, L), Y(L), requestAnimationFrame(() => {
        C(!1, L);
      })));
    }), de = T((L) => {
      S() && L.key == " " && !c() && (Y(L), C(!1, L));
    }), ve = T((L) => {
      let B = t();
      if (r) {
        if (L.detail > 1)
          "stopImmediatePropagation" in L && L.stopImmediatePropagation(), L.stopPropagation();
        else if (
          // Ignore the click events that were *just* handled with pointerup
          !Dr && // Ignore stray click events that were't fired ON OR WITHIN on this element
          // ("on or within" because sometimes a button's got a label that's a different element than the button)
          L.target && B?.contains(L.target)
        ) {
          debugger;
          console.log("onclick was fired and will be handled as it doesn't look like it came from a pointer event", L), C(!0, L), requestAnimationFrame(() => {
            C(!1, L);
          }), Y(L);
        }
      }
    }), he = T((L) => {
      x(!1), C(!1, L);
    }), K = eu();
    return {
      pressReturn: {
        pressing: P && F || _ || !1,
        getIsPressing: h,
        longPress: v
      },
      props: {
        onKeyDown: ie,
        onKeyUp: de,
        onTouchStart: g ? K ? void 0 : w : void 0,
        onTouchCancel: g ? K ? void 0 : O : void 0,
        onTouchMove: g ? K ? void 0 : A : void 0,
        onTouchEnd: g ? K ? void 0 : O : void 0,
        onPointerDown: g && K ? U : void 0,
        onPointerCancel: g && K ? U : void 0,
        onPointerMove: !P || !g ? void 0 : K ? V : void 0,
        onPointerUp: g && K ? G : void 0,
        onPointerEnter: g && K ? $ : void 0,
        onPointerLeave: g && K ? J : void 0,
        [Et]: he,
        onClick: ve
      }
    };
  }
  var tu = "vibrate" in navigator && navigator.vibrate instanceof Function ? () => navigator.vibrate(10) : () => {
  };

  // ../dist/component-use/use-random-id.js
  function Ot({ randomIdParameters: { prefix: e, otherReferencerProp: t } }) {
    k(Ot);
    let n = e + yt();
    Z("useRandomId", e, n);
    let r = M(t == null ? {} : { [t]: n }), o = M({ id: n });
    return Z("useRandomIdReferencerElement", t), {
      propsReferencer: r.current,
      propsSource: o.current,
      randomIdReturn: {
        id: n
      }
    };
  }

  // ../dist/component-use/use-random-dual-ids.js
  function Bn({ randomIdInputParameters: e, randomIdLabelParameters: t }) {
    k(Bn);
    let { randomIdReturn: n, propsReferencer: r, propsSource: o } = Ot({ randomIdParameters: e }), { randomIdReturn: a, propsReferencer: l, propsSource: u } = Ot({ randomIdParameters: t });
    return {
      propsLabel: W(r, u),
      propsInput: W(l, o),
      randomIdInputReturn: n,
      randomIdLabelReturn: a
    };
  }

  // ../dist/dom-helpers/use-draggable.js
  function Wn({ effectAllowed: e, data: t, dragImage: n, dragImageXOffset: r, dragImageYOffset: o }) {
    k(Wn);
    let [a, l, u] = D(!1), [m, f, s] = D(null);
    return {
      propsUnstable: {
        draggable: !0,
        onDragStart: (h) => {
          if (l(!0), h.dataTransfer) {
            h.dataTransfer.effectAllowed = e ?? "all", n && h.dataTransfer.setDragImage(n, r ?? 0, o ?? 0);
            let C = Object.entries(t);
            for (let [g, v] of C)
              h.dataTransfer.setData(g, v);
          }
        },
        onDragEnd: (h) => {
          h.preventDefault(), l(!1), h.dataTransfer && (h.dataTransfer.dropEffect != "none" ? f(h.dataTransfer.dropEffect) : f(null));
        }
      },
      dragging: a,
      getDragging: u,
      lastDropEffect: m,
      getLastDropEffect: s
    };
  }

  // ../dist/dom-helpers/use-droppable.js
  var Ht = class extends Error {
    fileName;
    errorType;
    constructor(t, n) {
      super(n?.message ?? "An unspecified error occurred reading the file."), this.fileName = t, this.errorType = n?.name;
    }
  };
  function $n({ effect: e }) {
    k($n);
    let [t, n] = D(null), [r, o] = D(null), [a, l] = D(null), [u, m] = D(null), [f, s] = D(void 0), c = M([]), [d, p, h] = D(-1), [C, g, v] = D(0);
    j(() => {
      let y = h(), I = v();
      I > 0 && y + 1 < I && p((F) => ++F);
    }, [C]), j(() => {
      d >= 0 && c.current[d].then((I) => {
        if (I !== null) {
          let { files: N, strings: w } = I;
          l(N), m(w);
        }
        let F = h(), E = v();
        F + 1 < E && p((N) => ++N);
      });
    }, [d]);
    let b = T((y) => {
      if (y.preventDefault(), y.dataTransfer) {
        y.dataTransfer.dropEffect = e ?? "move";
        let I = /* @__PURE__ */ new Set(), F = new Array();
        for (let E of y.dataTransfer?.items ?? []) {
          let { kind: N, type: w } = E;
          N === "string" ? I.add(w) : N === "file" && F.push({ type: E.type });
        }
        n(F), o(I);
      }
    }), _ = T((y) => {
      y.preventDefault(), n(null), o(null);
    }), x = T((y) => {
      y.preventDefault();
    }), S = T((y) => {
      y.preventDefault(), n(null), o(null);
      let I = new Array(), F = {}, E = [];
      for (let N of y.dataTransfer?.items ?? []) {
        let { kind: w, type: A } = N;
        if (w === "string")
          I.push(new Promise((O, U) => N.getAsString(O)).then((O) => F[A] = O));
        else if (w === "file") {
          let O = N.getAsFile();
          O && (I.push(new Promise((U, V) => {
            let G = new FileReader();
            G.onload = ($) => {
              U();
              let J = G.result;
              E.push({ data: J, name: O.name, type: O.type, size: J.byteLength, lastModified: O.lastModified });
            }, G.onerror = ($) => {
              V(new Ht(O.name, G.error));
            }, G.onabort = ($) => {
              V(new Ht(O.name, G.error));
            }, G.readAsArrayBuffer(O);
          })), E.push());
        }
      }
      c.current.push(Promise.all(I).then(() => (g((N) => ++N), s(null), {
        strings: F,
        files: E
      })).catch((N) => {
        debugger;
        return g((w) => ++w), s(N), null;
      }));
    });
    return {
      propsStable: M({ onDragEnter: b, onDragLeave: _, onDragOver: x, onDrop: S }).current,
      filesForConsideration: t,
      stringsForConsideration: r,
      droppedFiles: a,
      droppedStrings: u,
      dropError: f
    };
  }

  // ../dist/dom-helpers/use-imperative-props.js
  var Lr = null;
  function nu(e, t) {
    let n = e.ownerDocument;
    return Lr ??= n.createElement("template"), Lr.innerHTML = t.trim(), Lr.content.firstChild;
  }
  var ru = ue(qt(ou));
  function Fr({ refElementReturn: { getElement: e } }) {
    k(Fr);
    let t = M({ className: /* @__PURE__ */ new Set(), style: {}, children: null, html: null, others: {} }), n = R((c) => t.current.className.has(c), []), r = R((c, d) => {
      n(c) == !d && (e()?.classList[d ? "add" : "remove"](c), t.current.className[d ? "add" : "delete"](c));
    }, []), o = R((c, d) => {
      let p = e();
      p && t.current.style[c] != d && (t.current.style[c] = d, c.startsWith("--") ? d != null ? p.style.setProperty(c, `${d}`) : p.style.removeProperty(c) : p.style[c] = d ?? "");
    }, []), a = R((c) => {
      let d = e();
      d && t.current.children != c && (t.current.children = c, t.current.html = null, d.textContent = c);
    }, []), l = R((c) => {
      let d = e();
      d && t.current.html != c && (t.current.children = null, t.current.html = c, d.innerHTML = c);
    }, []), u = R((c) => {
      let d = e();
      if (d && c) {
        let p = nu(d, c);
        if (console.assert(p && p instanceof Node), p && p instanceof Node)
          return t.current.children = null, t.current.html ||= "", t.current.html += c, d.appendChild(p), p;
      }
      return null;
    }, []), m = R((c) => t.current.others[c], []), f = R((c, d) => {
      d != null ? m(c) != d && (t.current.others[c] = d, e()?.setAttribute(c, d)) : m(c) != null && (delete t.current.others[c], e()?.removeAttribute(c));
    }, []), s = R((c, d, p) => {
      let h = e(), C = sr[c];
      h && (d ? (h.addEventListener(c, d, p), t.current.others[C] = d) : t.current.others[C] && (h.removeEventListener(c, t.current.others[C], p), t.current.others[C] = void 0));
    }, []);
    return {
      imperativePropsReturn: M({
        hasClass: n,
        setClass: r,
        setStyle: o,
        getAttribute: m,
        setAttribute: f,
        setEventHandler: s,
        setChildren: a,
        dangerouslySetInnerHTML: l,
        dangerouslyAppendHTML: u
      }).current,
      props: W({ className: [...t.current.className].join(" "), style: t.current.style }, t.current.html ? { dangerouslySetInnerHTML: { __html: t.current.html } } : {}, { children: t.current.children }, t.current.others)
    };
  }
  function ou({ tag: e, handle: t, ...n }, r) {
    let { propsStable: o, refElementReturn: a } = ae({ refElementParameters: {} }), { props: l, imperativePropsReturn: u } = Fr({ refElementReturn: a });
    return _t(t, () => u), fe(e, W(o, l, n, { ref: r }));
  }

  // ../dist/util/random-id.js
  var au = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_-";
  function iu(e) {
    return au[e];
  }
  function Re() {
    return Math.floor(Math.random() * 64);
  }
  function su() {
    return [Re(), Re(), Re(), Re(), Re(), Re(), Re(), Re(), Re(), Re(), Re()];
  }
  function Mr(e) {
    return `${e ?? "id-"}${su().map((t) => iu(t)).join("")}`;
  }

  // ../dist/dom-helpers/use-portal-children.js
  function Vn({ target: e }) {
    k(Vn);
    let [t, n] = D(null), [r, o] = D(null), [a, l] = D(null), u = T((d) => t?.(d) ?? -1), m = T((d, p) => r?.(d, p)), f = T((d) => a?.(d)), s = le(() => e == null ? null : typeof e == "string" ? document.getElementById(e) : e, [e]);
    return {
      children: s ? Kt(fe(lu, { setPushChild: n, setUpdateChild: o, setRemoveChild: l }), s) : null,
      pushChild: u,
      updateChild: m,
      removeChild: f,
      portalElement: s
    };
  }
  function lu({ setPushChild: e, setUpdateChild: t, setRemoveChild: n }) {
    let [r, o, a] = D([]), l = R((f) => {
      let s = Mr(), c = a().length;
      return o((d) => [...d, Ze(f, { key: s, index: c })]), c;
    }, []), u = R((f, s) => {
      let c = a()[f]?.key;
      if (console.assert(!!c), c)
        return o((d) => {
          let p = d.slice();
          return p.splice(f, 1, Ze(s, { key: c, index: f })), p;
        }), f;
    }, []), m = R((f) => {
      let s = a()[f]?.key;
      if (console.assert(!!s), s)
        return o((c) => {
          let d = c.slice();
          return d.splice(f, 1), d;
        }), f;
    }, []);
    return te(() => {
      e((f) => l);
    }, [l]), te(() => {
      t((f) => u);
    }, [u]), te(() => {
      n((f) => m);
    }, [m]), fe(ge, {}, r);
  }

  // ../dist/observers/use-has-last-focus.js
  function zn(e) {
    k(zn);
    let { refElementReturn: { getElement: t }, activeElementParameters: { onLastActiveElementChange: n, ...r }, hasLastFocusParameters: { onLastFocusedChanged: o, onLastFocusedInnerChanged: a, ...l } } = e;
    Z("useHasFocus", o, a);
    let [u, m] = z(o, xe, pe), [f, s] = z(a, xe, pe), { activeElementReturn: c } = Be({
      activeElementParameters: {
        onLastActiveElementChange: R((d, p, h) => {
          let C = t(), g = C != null && C == d, v = !!C?.contains(d);
          m(g, h), s(v, h), n?.(d, p, h);
        }, []),
        ...r
      }
    });
    return j(() => () => {
      m(!1, void 0), s(!1, void 0);
    }, []), {
      activeElementReturn: c,
      hasLastFocusReturn: {
        getLastFocused: u,
        getLastFocusedInner: f
      }
    };
  }

  // ../dist/observers/use-logical-direction.js
  var uu = {
    inlineDirection: "ltr",
    blockDirection: "ttb",
    inlineOrientation: "horizontal",
    blockOrientation: "vertical",
    inlineSize: "width",
    blockSize: "height",
    leftRightDirection: "ltr",
    overUnderDirection: "ttb"
  }, IC = {
    ...uu,
    inlineDirection: "rtl"
  }, Ar = {
    inlineDirection: "ttb",
    blockDirection: "rtl",
    inlineOrientation: "vertical",
    blockOrientation: "horizontal",
    inlineSize: "height",
    blockSize: "width",
    leftRightDirection: "ttb",
    overUnderDirection: "rtl"
  }, ja = {
    ...Ar,
    inlineDirection: "btt"
  }, PC = { ...Ar }, wC = { ...ja }, cu = {
    ...Ar,
    blockDirection: "ltr"
  }, RC = {
    ...ja,
    blockDirection: "ltr"
  }, du = {
    ...cu,
    inlineDirection: "btt",
    leftRightDirection: "btt",
    overUnderDirection: "ltr"
  }, kC = {
    ...du,
    inlineDirection: "ttb"
  };

  // ../dist/timing/use-animation-frame.js
  var yx = me(null);

  // ../dist/timing/use-interval.js
  function qn({ interval: e, callback: t }) {
    k(qn);
    let n = T(t), r = X(e);
    j(() => {
      let o = r(), a = o;
      if (o == null)
        return;
      let l = () => {
        n();
        let m = r();
        m != a && (clearInterval(u), m != null && (u = setInterval(l, a = m)));
      }, u = setInterval(l, o);
      return () => clearInterval(u);
    }, []);
  }

  // ../node_modules/.pnpm/preact@10.13.2/node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js
  var gu = 0;
  function i(e, t, n, r, o, a) {
    var l, u, m = {};
    for (u in t)
      u == "ref" ? l = t[u] : m[u] = t[u];
    var f = { type: e, props: m, key: n, ref: l, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --gu, __source: o, __self: a };
    if (typeof e == "function" && (l = e.defaultProps))
      for (u in l)
        m[u] === void 0 && (m[u] = l[u]);
    return H.vnode && H.vnode(f), f;
  }

  // demos/use-grid.tsx
  var bu = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.".split(" "), vu = me(null), Cu = me(null), Ga = me(null), Ba = ue(() => {
    let [e, t, n] = D(null), [r, o, a] = D(null), [l, u] = D(null), [m, f, s] = D(null), c = Ir({
      // `useRovingTabIndex` is a separate hook that you could call with these same parameters:
      rovingTabIndexParameters: {
        // If true, the entire grid is removed from the tab order
        untabbable: !1,
        // A function provided by you that is only called when no children are tabbable
        focusSelfParent: we,
        // This can be used to track when the user navigates between rows for any reason
        onTabbableIndexChange: u
      },
      // `useSingleSelection` is a separate hook that you could call with these parameters:
      typeaheadNavigationParameters: {
        // Determines how children are searched for (`Intl.Collator`)
        collator: null,
        // Whether typeahead behavior is disabled
        noTypeahead: !1,
        // How long a period of no input is required before typeahead clears itself
        typeaheadTimeout: 1e3,
        // This can be used to track when the user navigates between rows via typeahead
        onNavigateTypeahead: null
      },
      // (etc. etc.)
      linearNavigationParameters: {
        // Is navigating to the first/last row with Home/End disabled?
        disableHomeEndKeys: !1,
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
        singleSelectedIndex: r,
        // What happens when the user selects a child?
        onSingleSelectedIndexChange: (U) => o(U[Fe].selectedIndex)
      },
      gridNavigationParameters: {
        // This can be used by you to track which 0-indexed column is currently the one with focus.
        onTabbableColumnChange: t
      },
      rearrangeableChildrenParameters: {
        // This must return a VNode's 0-based index from its props
        getIndex: R((U) => U.props.index, [])
      },
      sortableChildrenParameters: {
        // Controls how rows compare against each other
        compare: R((U, V) => V.index - U.index, [])
      },
      paginatedChildrenParameters: {
        // Controls the current pagination range
        paginationMin: null,
        paginationMax: null
      },
      staggeredChildrenParameters: {
        // Controls whether children appear staggered as CPU time permits
        staggered: !1
      },
      refElementParameters: {}
    }), {
      // Spread these props to the HTMLElement that will implement this grid behavior
      props: d,
      // The child row will useContext this, so provide it to them.
      context: p,
      // This is what `useRovingTabIndex` returned; use it for whatever you need:
      rovingTabIndexReturn: {
        // Call to focus the grid, which focuses the current row, which focuses its current cell.
        focusSelf: h,
        // Returns the index of the row that is tabbable to
        getTabbableIndex: C,
        // Changes which row is currently tabbable
        setTabbableIndex: g
      },
      // This is what `useTypeaheadNavigation` returned; use it for whatever you need:
      typeaheadNavigationReturn: {
        // Returns the current value the user has typed for typeahead (cannot be used during render)
        getCurrentTypeahead: v,
        // Whether the user's typeahead is invalid/valid/nonexistent.
        typeaheadStatus: b
      },
      // (etc. etc.)
      singleSelectionReturn: {
        // Largely convenience only (since the caller likely already knows the selected index, but just in case)
        getSingleSelectedIndex: _
      },
      multiSelectionReturn: {
        // Nothing, actually
      },
      rearrangeableChildrenReturn: {
        // You must call this hook on your array of children to implement the sorting behavior
        useRearrangedChildren: x,
        // Largely internal use only
        indexDemangler: S,
        // Largely internal use only
        indexMangler: P,
        // Largely internal use only, but if you implement a custom sorting algorithm, call this to finalize the rearrangement. 
        rearrange: y,
        // Reverses all children 
        reverse: I,
        // Shuffles all children
        shuffle: F
      },
      sortableChildrenReturn: {
        // A table header button would probably call this function to sort all the table rows.
        sort: E
      },
      linearNavigationReturn: {},
      managedChildrenReturn: {
        // Returns metadata about each row
        getChildren: N
      },
      paginatedChildrenReturn: {
        // Largely internal use only
        refreshPagination: w
      },
      staggeredChildrenReturn: {
        // When the staggering behavior is currently hiding one or more children, this is true.
        stillStaggering: A
      },
      childrenHaveFocusReturn: {
        // Returns true if any row in this grid is focused
        getAnyFocused: O
      }
    } = c;
    return /* @__PURE__ */ i("div", { class: "demo", children: [
      /* @__PURE__ */ i("h2", { children: "useGridNavigationComplete" }),
      /* @__PURE__ */ i("p", { children: [
        "Like ",
        /* @__PURE__ */ i("code", { children: "useCompleteListNavigation" }),
        " but for 2D navigation. Cells can span multiple columns. Rows can be filtered, sorted, and arbitrarily re-arranged."
      ] }),
      /* @__PURE__ */ i("div", { children: [
        "Current row: ",
        l
      ] }),
      /* @__PURE__ */ i("div", { children: [
        "Current column: ",
        e?.actual,
        e?.ideal != e?.actual ? ` (wanted: ${e?.ideal})` : ""
      ] }),
      /* @__PURE__ */ i("table", { border: "2", style: { whiteSpace: "nowrap" }, children: [
        /* @__PURE__ */ i("thead", { children: /* @__PURE__ */ i("tr", { children: [
          /* @__PURE__ */ i("th", { children: "Row is tabbable?" }),
          /* @__PURE__ */ i("th", { children: "Column 1" }),
          /* @__PURE__ */ i("th", { children: "Column 2" }),
          /* @__PURE__ */ i("th", { children: "Column 3" })
        ] }) }),
        /* @__PURE__ */ i(vu.Provider, { value: m, children: /* @__PURE__ */ i(Ga.Provider, { value: s, children: /* @__PURE__ */ i(Cu.Provider, { value: f, children: /* @__PURE__ */ i(Wa.Provider, { value: p, children: /* @__PURE__ */ i("tbody", { ...d, children: x(
          Array.from(function* () {
            for (let U = 0; U < 10; ++U)
              yield /* @__PURE__ */ i(xu, { index: U }, U);
          }())
        ) }) }) }) }) })
      ] })
    ] });
  }), Wa = me(null), $a = me(null);
  var xu = ue(({ index: e }) => {
    let [t] = D(() => bu[
      e
      /*Math.floor(Math.random() * (RandomWords.length - 1))*/
    ]), [n, r, o] = D(null), a = e === 3, l = a, u = Se(Ga), m = Se(Wa), f = Hn({
      context: m,
      info: { index: e, foo: "bar", untabbable: a },
      textContentParameters: { getText: R((p) => p?.textContent ?? "", []) },
      linearNavigationParameters: { navigatePastEnd: "wrap", navigatePastStart: "wrap" },
      rovingTabIndexParameters: { onTabbableIndexChange: T((p) => {
        r(p);
      }), untabbable: !1, initiallyTabbedIndex: 0 },
      typeaheadNavigationParameters: { collator: null, noTypeahead: !1, typeaheadTimeout: 1e3, onNavigateTypeahead: null },
      hasCurrentFocusParameters: { onCurrentFocusedChanged: null, onCurrentFocusedInnerChanged: null },
      gridNavigationSelectionSortableRowParameters: { getSortableColumnIndex: u },
      singleSelectionChildParameters: { singleSelectionDisabled: !1 },
      multiSelectionChildParameters: { initiallyMultiSelected: !1, onMultiSelectChange: null, multiSelectionDisabled: !1 }
    }), {
      props: s,
      context: c,
      rovingTabIndexChildReturn: { tabbable: d }
    } = f;
    return /* @__PURE__ */ i("tr", { ...s, "data-tabbable": f.rovingTabIndexChildReturn.tabbable, children: /* @__PURE__ */ i($a.Provider, { value: c, children: [
      /* @__PURE__ */ i("td", { children: [
        n,
        ", ",
        d.toString()
      ] }),
      Array.from(function* () {
        for (let p = 0; p < 3; ++p)
          yield /* @__PURE__ */ i(_u, { index: p, row: e, rowIsTabbable: d }, p);
      }())
    ] }) });
  }), _u = ({ index: e, row: t, rowIsTabbable: n }) => {
    if (t >= 6 && t % 2 == 0 && e > 1)
      return null;
    let r = t === 3 ? " (row hidden)" : "", o = Se($a), {
      props: a,
      rovingTabIndexChildReturn: { tabbable: l }
    } = Un({
      gridNavigationCellParameters: { colSpan: 1 },
      info: { index: e, bar: "baz", focusSelf: T((m) => m.focus()), untabbable: !1, getSortValue: X(e) },
      context: o,
      textContentParameters: { getText: R((m) => m?.textContent ?? "", []) }
    }), u = l ? "(Tabbable)" : "(Not tabbable)";
    return e === 0 ? /* @__PURE__ */ i("td", { ...a, children: n.toString() }) : t < 6 || t % 2 != 0 ? e === 1 ? /* @__PURE__ */ i("td", { ...a, children: [
      "Grid cell #",
      e + 1,
      " ",
      u,
      r
    ] }) : /* @__PURE__ */ i("td", { children: /* @__PURE__ */ i("label", { children: [
      /* @__PURE__ */ i("button", { ...a, type: "button", children: "Select row" }),
      " ",
      u,
      r
    ] }) }) : e === 1 ? /* @__PURE__ */ i("td", { ...a, colSpan: 2, children: [
      "Grid cell #",
      e + 1,
      ", span 2 ",
      u,
      r
    ] }) : null;
  };

  // demos/use-modal.tsx
  function yu() {
    return globalThis.document;
  }
  function Kn(e) {
    let t = e.parentDepth ?? 0, n = t + 1, r = M(null), [o, a] = se(!0), [l, u] = se(!0), [m, f] = se(!0), [s, c] = se(!0), [d, p] = se(!1), [h, C] = se(null), [g, v] = se(!1), b = () => r.current?.focus(), {
      propsStablePopup: _,
      propsStableSource: x,
      propsFocusContainer: S
    } = jn({
      focusTrapParameters: {
        trapActive: s,
        onlyMoveFocus: !1,
        focusOpener: b,
        focusPopup: T((P, y) => y()?.focus())
      },
      dismissParameters: {
        onDismiss: T((P, y) => {
          C(y), v(!1);
        }),
        dismissActive: !0
      },
      escapeDismissParameters: { parentDepth: t, dismissEscapeActive: !0, onDismissEscape: null },
      backdropDismissParameters: { dismissBackdropActive: !0, onDismissBackdrop: null },
      lostFocusDismissParameters: { dismissLostFocusActive: !0, onDismissLostFocus: null },
      modalParameters: { active: g },
      refElementParameters: {},
      activeElementParameters: { getDocument: yu, onActiveElementChange: null, onLastActiveElementChange: null, onWindowFocusedChange: null }
    });
    return /* @__PURE__ */ i("div", { style: { border: `${n}px solid black` }, children: [
      /* @__PURE__ */ i("div", { children: "useModal demo:" }),
      /* @__PURE__ */ i("div", { style: "display: flex; flex-direction: column", children: [
        /* @__PURE__ */ i("label", { children: [
          /* @__PURE__ */ i("input", { type: "checkbox", disabled: !0, checked: !0 }),
          " Close by setting open to false"
        ] }),
        /* @__PURE__ */ i("label", { children: [
          /* @__PURE__ */ i("input", { type: "checkbox", checked: o, onInput: (P) => a(P.currentTarget.checked) }),
          " Close on backdrop click"
        ] }),
        /* @__PURE__ */ i("label", { children: [
          /* @__PURE__ */ i("input", { type: "checkbox", checked: l, onInput: (P) => u(P.currentTarget.checked) }),
          " Close on Escape key press"
        ] }),
        /* @__PURE__ */ i("label", { children: [
          /* @__PURE__ */ i("input", { type: "checkbox", checked: m, onInput: (P) => f(P.currentTarget.checked) }),
          " Close on focus lost"
        ] }),
        /* @__PURE__ */ i("label", { children: [
          /* @__PURE__ */ i("input", { type: "checkbox", checked: s, onInput: (P) => c(P.currentTarget.checked) }),
          " Trap focus"
        ] }),
        /* @__PURE__ */ i("br", {})
      ] }),
      /* @__PURE__ */ i("div", { children: [
        "Last reason for closing: ",
        h ?? "(hasn't been closed yet)"
      ] }),
      /* @__PURE__ */ i("button", { ...x, onClick: () => v(!0), children: "Open Modal" }),
      /* @__PURE__ */ i("div", { ...W(S, _), style: `border: ${n}px dotted red; background: #ccc`, children: /* @__PURE__ */ i("div", { style: { display: g ? "flex" : "none", flexDirection: "column" }, children: [
        /* @__PURE__ */ i("div", { children: [
          "Modal element at depth ",
          n,
          " with ",
          d ? "a" : "no",
          " child"
        ] }),
        /* @__PURE__ */ i("label", { children: [
          /* @__PURE__ */ i("input", { type: "checkbox", checked: d, onInput: (P) => p(P.currentTarget.checked), ref: r }),
          " Add a child modal"
        ] }),
        d && /* @__PURE__ */ i(Kn, { parentDepth: n }),
        /* @__PURE__ */ i("button", { ...x, onClick: () => v(!1), children: "Close modal programmatically" })
      ] }) })
    ] });
  }

  // demos/use-roving-tab-index.tsx
  var Su = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.".split(" ");
  var Eu = me("focus"), Tu = me("activation"), Iu = me(!1), Va = me(null), za = ue(() => {
    let [e, t] = D(0), [n, r] = D(null), [o, a] = D("focus"), [l, u] = D("activation"), [m, f] = D(10), [s, c] = D(null), [d, p] = D(null), [h, C] = D(!1);
    isFinite(s ?? NaN) || (s = null), isFinite(d ?? NaN) || (d = null);
    let g = !1, v = (w) => {
      t(w[Fe].selectedPercent);
    }, b = Rr({
      rovingTabIndexParameters: { onTabbableIndexChange: null, untabbable: g, focusSelfParent: we },
      singleSelectionDeclarativeParameters: { singleSelectedIndex: n, onSingleSelectedIndexChange: T((w) => {
        r(w[Fe].selectedIndex);
      }, []) },
      typeaheadNavigationParameters: { collator: null, noTypeahead: !1, typeaheadTimeout: 1e3, onNavigateTypeahead: null },
      linearNavigationParameters: { disableHomeEndKeys: !1, arrowKeyDirection: "vertical", navigatePastEnd: "wrap", navigatePastStart: "wrap", pageNavigationSize: 0.1, onNavigateLinear: null },
      rearrangeableChildrenParameters: {
        getIndex: R((w) => w.props.index, [])
      },
      refElementParameters: {},
      paginatedChildrenParameters: { paginationMin: s, paginationMax: d },
      sortableChildrenParameters: { compare: R((w, A) => A.index - w.index, []) },
      staggeredChildrenParameters: { staggered: h },
      singleSelectionParameters: { singleSelectionAriaPropName: "aria-selected", singleSelectionMode: o },
      multiSelectionParameters: { multiSelectionAriaPropName: "aria-checked", onSelectionChange: v, multiSelectionMode: l }
    }), {
      props: _,
      context: x,
      rovingTabIndexReturn: { setTabbableIndex: S },
      managedChildrenReturn: { getChildren: P },
      typeaheadNavigationReturn: { typeaheadStatus: y },
      rearrangeableChildrenReturn: { useRearrangedChildren: I, shuffle: F, reverse: E }
      //        rearrangeableChildrenReturn: { useRearrangedChildren: useSortableProps, shuffle }
    } = b, N = Array.from(function* () {
      for (let w = 0; w < m; ++w)
        yield /* @__PURE__ */ i(Pu, { index: w }, w);
    }());
    return /* @__PURE__ */ i("div", { className: "demo", children: [
      /* @__PURE__ */ i("h2", { children: "Keyboard & List Navigation" }),
      /* @__PURE__ */ i("h3", { children: /* @__PURE__ */ i("code", { children: "useCompleteListNavigation" }) }),
      /* @__PURE__ */ i("p", { children: "This hook accomplishes a few things:" }),
      /* @__PURE__ */ i("ul", { children: [
        /* @__PURE__ */ i("li", { children: [
          "Turns a group of widgets into one singular composite widget with only ",
          /* @__PURE__ */ i("strong", { children: "a single tab stop" }),
          ' shared between them (a "roving" tab stop, because it wanders back and forth).'
        ] }),
        /* @__PURE__ */ i("li", { children: [
          "Navigation within this composite widget is done via:",
          /* @__PURE__ */ i("ul", { children: [
            /* @__PURE__ */ i("li", { children: "Arrow keys (up/down or left/right depending in the orientation you specify)" }),
            /* @__PURE__ */ i("li", { children: "Page Up/Down to jump by a larger amount (either a fixed number or some percentage of the total number of items, as you specify)" }),
            /* @__PURE__ */ i("li", { children: "Home/End to jump to the first or last item" })
          ] })
        ] }),
        /* @__PURE__ */ i("li", { children: 'Items can be marked as "hidden", in which case they are skipped over when navigating, no matter the method. E.G. if Home is pressed but the first item is hidden, the second item is focused instead.' }),
        /* @__PURE__ */ i("li", { children: 'Items can be marked as "disabled" to prevent selection (with or without also marking them as "hidden", though "hidden" implies "disabled").' }),
        /* @__PURE__ */ i("li", { children: "Children can be reordered arbitrarily, including sorting, shuffling, etc. while ensuring coherent navigation regardless." }),
        /* @__PURE__ */ i("li", { children: [
          "The parent's selected index is ",
          /* @__PURE__ */ i("strong", { children: "uncontrolled" }),
          " and so it does not re-render itself when the selected index changes (you can easily make it controlled, of course, at the cost of 1 additional render. See ",
          /* @__PURE__ */ i("code", { children: "useSingleSelectionDeclarative" }),
          " for a shortcut to do exactly that)"
        ] }),
        /* @__PURE__ */ i("li", { children: "Changing which child is focused or selected only re-renders a maximum of 2 children each time." }),
        /* @__PURE__ */ i("li", { children: [
          "Lists can be nested, and there is no strict requirement on DOM structure (except for sorting/rearranging children, if you use that).",
          /* @__PURE__ */ i("ul", { children: /* @__PURE__ */ i("li", { children: [
            "If you don't need sorting/rearranging this DOM requirement is ",
            /* @__PURE__ */ i("strong", { children: "optional" }),
            "; rearranging requires all children be in one contiguous array of VNodes so that their ",
            /* @__PURE__ */ i("code", { children: "key" }),
            " props can be manipulated."
          ] }) })
        ] })
      ] }),
      /* @__PURE__ */ i("p", { children: "The biggest restriction of this method is that every child needs a 0-based numeric index." }),
      /* @__PURE__ */ i("label", { children: [
        "# of items",
        /* @__PURE__ */ i("input", { type: "number", value: m, min: 0, onInput: (w) => {
          w.preventDefault(), f(w.currentTarget.valueAsNumber);
        } })
      ] }),
      /* @__PURE__ */ i("button", { onClick: () => F(), children: "Shuffle" }),
      /* @__PURE__ */ i("button", { onClick: () => {
        debugger;
        E();
      }, children: "Reverse" }),
      /* @__PURE__ */ i("label", { children: [
        "Imperatively set the tabbable index to: ",
        /* @__PURE__ */ i("input", { type: "number", onInput: (w) => {
          w.preventDefault(), S(w.currentTarget.valueAsNumber, w, !1);
        } })
      ] }),
      /* @__PURE__ */ i("label", { children: [
        "Imperatively set the selected index to: ",
        /* @__PURE__ */ i("input", { type: "number", onInput: (w) => {
          w.preventDefault(), r(w.currentTarget.valueAsNumber);
        } }),
        " (currently ",
        n,
        ")"
      ] }),
      /* @__PURE__ */ i("label", { children: [
        "Pagination window starts at: ",
        /* @__PURE__ */ i("input", { type: "number", value: s ?? void 0, min: 0, max: d ?? void 0, onInput: (w) => {
          w.preventDefault(), c(w.currentTarget.valueAsNumber);
        } })
      ] }),
      /* @__PURE__ */ i("label", { children: [
        "Pagination window ends at: ",
        /* @__PURE__ */ i("input", { type: "number", value: d ?? void 0, min: s ?? void 0, max: m, onInput: (w) => {
          w.preventDefault(), p(w.currentTarget.valueAsNumber);
        } })
      ] }),
      /* @__PURE__ */ i("label", { children: [
        "Stagger delay: ",
        /* @__PURE__ */ i("input", { type: "checkbox", checked: h, onInput: (w) => {
          w.preventDefault(), C(w.currentTarget.checked);
        } })
      ] }),
      /* @__PURE__ */ i("label", { children: [
        "Single-Selection mode:",
        /* @__PURE__ */ i("label", { children: [
          /* @__PURE__ */ i("input", { name: "rti-demo-single-selection-mode", type: "radio", checked: o == "disabled", onInput: (w) => {
            w.preventDefault(), a("disabled");
          } }),
          " Off"
        ] }),
        /* @__PURE__ */ i("label", { children: [
          /* @__PURE__ */ i("input", { name: "rti-demo-single-selection-mode", type: "radio", checked: o == "focus", onInput: (w) => {
            w.preventDefault(), a("focus");
          } }),
          " On focus"
        ] }),
        /* @__PURE__ */ i("label", { children: [
          /* @__PURE__ */ i("input", { name: "rti-demo-single-selection-mode", type: "radio", checked: o == "activation", onInput: (w) => {
            w.preventDefault(), a("activation");
          } }),
          " On activation (click, tap, Enter, Space, etc.)"
        ] })
      ] }),
      /* @__PURE__ */ i("label", { children: [
        "Multi-Selection mode:",
        /* @__PURE__ */ i("label", { children: [
          /* @__PURE__ */ i("input", { name: "rti-demo-multi-selection-mode", type: "radio", checked: l == "disabled", onInput: (w) => {
            w.preventDefault(), u("disabled");
          } }),
          " Off"
        ] }),
        /* @__PURE__ */ i("label", { children: [
          /* @__PURE__ */ i("input", { name: "rti-demo-multi-selection-mode", type: "radio", checked: l == "focus", onInput: (w) => {
            w.preventDefault(), u("focus");
          } }),
          " On focus"
        ] }),
        /* @__PURE__ */ i("label", { children: [
          /* @__PURE__ */ i("input", { name: "rti-demo-multi-selection-mode", type: "radio", checked: l == "activation", onInput: (w) => {
            w.preventDefault(), u("activation");
          } }),
          " On activation (click, tap, Enter, Space, etc.)"
        ] })
      ] }),
      /* @__PURE__ */ i("div", { children: [
        "Typeahead status: ",
        y
      ] }),
      /* @__PURE__ */ i("div", { children: [
        "Multi-select: ",
        Math.round(e * 100 * 10) / 10,
        "%"
      ] }),
      /* @__PURE__ */ i(Iu.Provider, { value: g, children: /* @__PURE__ */ i(Eu.Provider, { value: o, children: /* @__PURE__ */ i(Tu.Provider, { value: l, children: /* @__PURE__ */ i(Va.Provider, { value: x, children: /* @__PURE__ */ i("ol", { start: 0, ..._, children: I(N) }) }) }) }) })
    ] });
  });
  var Pu = ue(({ index: e }) => {
    if (e == 1)
      return /* @__PURE__ */ i("li", { children: [
        "(Item ",
        e,
        " is a ",
        /* @__PURE__ */ i("strong", { children: "hole in the array" }),
        " and does not exist)"
      ] });
    let t = e == 6, n = e == 7;
    e == 8 && (t = n = !0);
    let [r, o] = D(!1), [a] = D(() => Su[e]), l = Se(Va), u = R((A) => {
      A.focus();
    }, []), m = T(() => e), {
      hasCurrentFocusReturn: f,
      managedChildReturn: s,
      propsChild: c,
      propsTabbable: d,
      textContentReturn: p,
      rovingTabIndexChildReturn: { tabbable: h },
      singleSelectionChildReturn: { singleSelected: C, getSingleSelected: g, singleSelectedOffset: v, getSingleSelectedOffset: b },
      multiSelectionChildReturn: { getMultiSelected: _ },
      paginatedChildReturn: { hideBecausePaginated: x },
      staggeredChildReturn: { hideBecauseStaggered: S },
      pressParameters: { onPressSync: P, excludeSpace: y },
      refElementReturn: I
    } = kr({
      info: { index: e, focusSelf: u, foo: "bar", untabbable: n, getSortValue: m },
      context: l,
      textContentParameters: { getText: R((A) => A?.textContent ?? "", []) },
      hasCurrentFocusParameters: { onCurrentFocusedChanged: null, onCurrentFocusedInnerChanged: null },
      refElementParameters: { onElementChange: null, onMount: null, onUnmount: null },
      multiSelectionChildParameters: { multiSelectionDisabled: t },
      singleSelectionChildParameters: { singleSelectionDisabled: t },
      multiSelectionChildDeclarativeParameters: { multiSelected: r, onMultiSelectedChange: (A) => o(A[Fe].multiSelected) }
    }), { pressReturn: F, props: E } = mt({ pressParameters: { focusSelf: u, onPressSync: P, excludeSpace: y, allowRepeatPresses: !1, excludeEnter: null, excludePointer: null, longPressThreshold: null, onPressingChange: null }, refElementReturn: I }), w = `${a} This is item #${e} (offset: ${C}) ${n ? " (hidden)" : ""}${t ? " (disabled)" : ""}${C && r ? " (single- & multi- selected)" : C ? " (single-selected)" : r ? " (multi-selected)" : ""} (${h ? "Tabbable" : "Not tabbable"})`;
    return /* @__PURE__ */ i("li", { ...W(c, d, E), style: { opacity: x ? 0.25 : 1, transform: `translateX(${S ? "50%" : "0%"})` }, children: [
      w,
      /* @__PURE__ */ i("input", { ...W(d, { type: "number" }), style: { width: "5ch" } })
    ] });
  });

  // demos/use-timeout.tsx
  var qa = () => {
    let [e, t] = se(1e3), [n, r] = se(""), [o, a] = se(0);
    return je({ timeout: e, triggerIndex: n, callback: () => a((l) => ++l) }), /* @__PURE__ */ i("div", { class: "demo", children: [
      /* @__PURE__ */ i("h2", { children: "useTimeout" }),
      /* @__PURE__ */ i("p", { children: [
        /* @__PURE__ */ i("code", { children: "useEffect" }),
        " but on a timer"
      ] }),
      /* @__PURE__ */ i("label", { children: [
        "Timeout duration: ",
        /* @__PURE__ */ i("input", { type: "number", value: e, onInput: (l) => t(l.currentTarget.valueAsNumber) })
      ] }),
      /* @__PURE__ */ i("label", { children: [
        "Refresh key: ",
        /* @__PURE__ */ i("input", { type: "text", value: n, onInput: (l) => r(l.currentTarget.value) })
      ] }),
      /* @__PURE__ */ i("div", { children: [
        "The callback has been called ",
        o,
        " time",
        o === 1 ? "" : "s",
        "."
      ] })
    ] });
  };

  // index.tsx
  window._generate_setState_stacks = !0;
  var wu = () => {
    let { droppedFiles: e, droppedStrings: t, filesForConsideration: n, stringsForConsideration: r, propsStable: o, dropError: a } = $n({ effect: "copy" }), { ref: l } = W({}, { ref: M(null) }), u = W(o, { className: "demo droppable" });
    return /* @__PURE__ */ i("div", { ...u, children: [
      t != null && /* @__PURE__ */ i("div", { children: [
        "Data dropped: ",
        /* @__PURE__ */ i("ul", { children: Object.entries(t).map(([m, f]) => /* @__PURE__ */ i("li", { children: [
          m,
          ": ",
          f
        ] })) })
      ] }),
      e != null && /* @__PURE__ */ i("div", { children: [
        "Files dropped: ",
        /* @__PURE__ */ i("table", { children: [
          /* @__PURE__ */ i("thead", { children: /* @__PURE__ */ i("tr", { children: [
            /* @__PURE__ */ i("th", { children: "Name" }),
            /* @__PURE__ */ i("th", { children: "Size" }),
            /* @__PURE__ */ i("th", { children: "Type" }),
            /* @__PURE__ */ i("th", { children: "Last modified" })
          ] }) }),
          /* @__PURE__ */ i("tbody", { children: e.map((m) => /* @__PURE__ */ i("tr", { children: [
            /* @__PURE__ */ i("td", { children: m.name }),
            m.data.byteLength,
            /* @__PURE__ */ i("td", { children: m.type }),
            /* @__PURE__ */ i("td", { children: new Date(m.lastModified ?? 0) })
          ] })) })
        ] })
      ] }),
      /* @__PURE__ */ i("hr", {}),
      r != null && /* @__PURE__ */ i("div", { children: [
        "Data being considered: ",
        /* @__PURE__ */ i("ul", { children: Array.from(r).map((m) => /* @__PURE__ */ i("li", { children: m })) })
      ] }),
      n != null && /* @__PURE__ */ i("div", { children: [
        "Files being considered: ",
        /* @__PURE__ */ i("ul", { children: n.map((m) => /* @__PURE__ */ i("li", { children: JSON.stringify(m) })) })
      ] }),
      /* @__PURE__ */ i("hr", {}),
      a ? /* @__PURE__ */ i("div", { children: a instanceof Error ? a.message : JSON.stringify(a) }) : null
    ] });
  }, Ru = () => {
    let { propsUnstable: e } = Wn({ data: { "text/plain": "This is custom draggable content of type text/plain." }, dragImage: null, dragImageXOffset: null, dragImageYOffset: null, effectAllowed: null });
    return /* @__PURE__ */ i("div", { ...W(e, { className: "demo" }), children: "Draggable content" });
  }, Ka = me(null), ku = () => {
    let [e, t] = D(!1), [n, r] = D(10), [o, a] = D(5), [l, u] = D(o);
    qn({
      callback: () => {
        e && (l == o ? u(n) : u(l - 1));
      },
      interval: 1e3
    });
    let [m, f] = D(!1), { context: s } = Ve({ childrenHaveFocusParameters: { onCompositeFocusChange: f } });
    return /* @__PURE__ */ i("div", { ...W({}, { className: "demo" }), children: [
      /* @__PURE__ */ i("h2", { children: "useChildrenHaveFocus" }),
      /* @__PURE__ */ i("p", { children: [
        "If you want to see if any of your children have focus, the easiest way is to just attach a ",
        /* @__PURE__ */ i("code", { children: "focusIn" }),
        " handler to the parent DOM node. But what if you don't have just one single parent DOM node? This hook lets you coordinate all the children to give you that information as if you were able to take that easy parent node route."
      ] }),
      /* @__PURE__ */ i("div", { children: /* @__PURE__ */ i("label", { children: [
        /* @__PURE__ */ i("input", { type: "number", min: 0, value: o, onInput: (c) => {
          c.preventDefault(), a(c.currentTarget.valueAsNumber);
        } }),
        " Min # of children"
      ] }) }),
      /* @__PURE__ */ i("div", { children: /* @__PURE__ */ i("label", { children: [
        /* @__PURE__ */ i("input", { type: "number", min: o, value: n, onInput: (c) => {
          c.preventDefault(), r(c.currentTarget.valueAsNumber);
        } }),
        " Max # of children"
      ] }) }),
      /* @__PURE__ */ i("div", { children: [
        "Current # of children: ",
        l
      ] }),
      /* @__PURE__ */ i("label", { children: [
        /* @__PURE__ */ i("input", { type: "checkbox", onInput: (c) => t(c.currentTarget.checked) }),
        " Mount & unmount children on a cycle"
      ] }),
      /* @__PURE__ */ i(Ka.Provider, { value: s, children: [
        /* @__PURE__ */ i("div", { children: [
          "Any children focused: ",
          m.toString()
        ] }),
        /* @__PURE__ */ i("div", { children: Array.from(function* () {
          for (let c = 0; c < l; ++c)
            yield /* @__PURE__ */ i(Nu, { index: c }, c);
        }()) })
      ] })
    ] });
  }, Nu = ({ index: e }) => {
    let { hasCurrentFocusParameters: { onCurrentFocusedInnerChanged: t } } = dt({ context: Se(Ka) }), { refElementReturn: n, propsStable: r } = ae({ refElementParameters: {} }), { hasCurrentFocusReturn: o } = De({ hasCurrentFocusParameters: { onCurrentFocusedChanged: null, onCurrentFocusedInnerChanged: t }, refElementReturn: n });
    return /* @__PURE__ */ i("div", { tabIndex: 0, ...W(r, o.propsStable), children: [
      "Focusable child #",
      e,
      /* @__PURE__ */ i("input", {}),
      /* @__PURE__ */ i("input", {})
    ] });
  };
  var Du = ue(({ depth: e }) => {
    let [t, n] = D(!1), { propsStable: r, refElementReturn: o } = ae({ refElementParameters: {} }), { props: a } = lt({
      focusTrapParameters: {
        trapActive: t,
        onlyMoveFocus: !1,
        focusOpener: (u) => u?.focus(),
        focusPopup: (u, m) => m()?.focus()
      },
      activeElementParameters: { getDocument: Xa, onActiveElementChange: null, onLastActiveElementChange: null, onWindowFocusedChange: null },
      refElementReturn: o
    }), l = W(a, r, { ref: void 0, className: "focus-trap-demo" });
    return e == 2 ? /* @__PURE__ */ i("div", {}) : /* @__PURE__ */ i("div", { className: "demo", children: [
      /* @__PURE__ */ i("label", { children: [
        "Active: ",
        /* @__PURE__ */ i("input", { type: "checkbox", checked: t, onInput: (u) => {
          u.preventDefault(), n(u.currentTarget.checked);
        } })
      ] }),
      /* @__PURE__ */ i("div", { ...l, children: /* @__PURE__ */ i(Lu, { active: t, setActive: n, depth: e ?? 0 }) })
    ] });
  }), Lu = ue(({ setActive: e, active: t }) => /* @__PURE__ */ i(ge, { children: [
    /* @__PURE__ */ i("button", { children: "Button 1" }),
    /* @__PURE__ */ i("button", { children: "Button 2" }),
    /* @__PURE__ */ i("button", { children: "Button 3" }),
    /* @__PURE__ */ i("label", { children: [
      "Active: ",
      /* @__PURE__ */ i("input", { type: "checkbox", checked: t, onInput: (n) => {
        n.preventDefault(), e(n.currentTarget.checked);
      } })
    ] })
  ] })), Fu = ue(() => {
    let [e, t] = D(1e3), [n, r] = D(0), [o, a, l] = D(!1), [u, m] = D(!1), f = (_, x) => new Promise((S, P) => window.setTimeout(() => l() ? P() : S(), e)), {
      callCount: s,
      settleCount: c,
      hasCapture: d,
      syncHandler: p,
      pending: h,
      hasError: C,
      rejectCount: g,
      resolveCount: v
    } = ft({
      asyncHandler: f,
      capture: () => {
      },
      debounce: n == 0 ? void 0 : n,
      throttle: null
    });
    return /* @__PURE__ */ i("div", { className: "demo", children: [
      /* @__PURE__ */ i("button", { disabled: h && u, onClick: h ? void 0 : p, children: "Click me!" }),
      /* @__PURE__ */ i("label", { children: [
        "Sleep for: ",
        /* @__PURE__ */ i("input", { type: "number", value: e, onInput: (_) => t(_.currentTarget.valueAsNumber) })
      ] }),
      /* @__PURE__ */ i("label", { children: [
        "Throw an error ",
        /* @__PURE__ */ i("input", { type: "checkbox", checked: o, onInput: (_) => a(_.currentTarget.checked) })
      ] }),
      /* @__PURE__ */ i("label", { children: [
        "Disabled while pending ",
        /* @__PURE__ */ i("input", { type: "checkbox", checked: u, onInput: (_) => m(_.currentTarget.checked) })
      ] }),
      /* @__PURE__ */ i("label", { children: [
        "Debounce: ",
        /* @__PURE__ */ i("input", { type: "number", value: n, onInput: (_) => r(_.currentTarget.valueAsNumber) })
      ] }),
      /* @__PURE__ */ i("table", { children: [
        /* @__PURE__ */ i("thead", { children: /* @__PURE__ */ i("tr", { children: [
          /* @__PURE__ */ i("th", { children: "Field" }),
          /* @__PURE__ */ i("th", { children: "Value" })
        ] }) }),
        /* @__PURE__ */ i("tbody", { children: [
          /* @__PURE__ */ i("tr", { children: [
            /* @__PURE__ */ i("td", { children: "callCount" }),
            /* @__PURE__ */ i("td", { children: s })
          ] }),
          /* @__PURE__ */ i("tr", { children: [
            /* @__PURE__ */ i("td", { children: "settleCount" }),
            /* @__PURE__ */ i("td", { children: c })
          ] }),
          /* @__PURE__ */ i("tr", { children: [
            /* @__PURE__ */ i("td", { children: "resolveCount" }),
            /* @__PURE__ */ i("td", { children: v })
          ] }),
          /* @__PURE__ */ i("tr", { children: [
            /* @__PURE__ */ i("td", { children: "rejectCount" }),
            /* @__PURE__ */ i("td", { children: g })
          ] }),
          /* @__PURE__ */ i("tr", { children: [
            /* @__PURE__ */ i("td", { children: "hasError" }),
            /* @__PURE__ */ i("td", { children: C.toString() })
          ] }),
          /* @__PURE__ */ i("tr", { children: [
            /* @__PURE__ */ i("td", { children: "hasCapture" }),
            /* @__PURE__ */ i("td", { children: d.toString() })
          ] })
        ] })
      ] })
    ] });
  }), Mu = ue(() => {
    let [e, t] = D(1e3), [n, r] = D(0), [o, a] = D(0), [l, u, m] = D(!1), [f, s] = D(!1), [c, d] = D(""), p = async (E, N) => new Promise((w, A) => window.setTimeout(() => {
      m() ? A() : (d(E), w());
    }, e)), {
      callCount: h,
      settleCount: C,
      hasCapture: g,
      syncHandler: v,
      currentCapture: b,
      pending: _,
      hasError: x,
      rejectCount: S,
      resolveCount: P,
      debouncingAsync: y,
      debouncingSync: I
    } = ft({
      asyncHandler: p,
      capture: (E) => (E.preventDefault(), E.currentTarget.value),
      debounce: n == 0 ? void 0 : n,
      throttle: o == 0 ? void 0 : o
    });
    return /* @__PURE__ */ i("div", { className: "demo", children: [
      /* @__PURE__ */ i("label", { children: [
        "Demo text: ",
        /* @__PURE__ */ i("input", { value: g ? b : c, disabled: _ && f, onInput: v })
      ] }),
      /* @__PURE__ */ i("hr", {}),
      /* @__PURE__ */ i("label", { children: [
        "# of milliseconds the async handler takes to run: ",
        /* @__PURE__ */ i("input", { type: "number", value: e, onInput: (E) => t(E.currentTarget.valueAsNumber) })
      ] }),
      /* @__PURE__ */ i("label", { children: [
        "Throw an error ",
        /* @__PURE__ */ i("input", { type: "checkbox", checked: l, onInput: (E) => u(E.currentTarget.checked) })
      ] }),
      /* @__PURE__ */ i("label", { children: [
        "Disabled while pending ",
        /* @__PURE__ */ i("input", { type: "checkbox", checked: f, onInput: (E) => s(E.currentTarget.checked) })
      ] }),
      /* @__PURE__ */ i("label", { children: [
        "Debounce: ",
        /* @__PURE__ */ i("input", { type: "number", value: n, onInput: (E) => r(E.currentTarget.valueAsNumber) })
      ] }),
      /* @__PURE__ */ i("label", { children: [
        "Throttle: ",
        /* @__PURE__ */ i("input", { type: "number", value: o, onInput: (E) => a(E.currentTarget.valueAsNumber) })
      ] }),
      /* @__PURE__ */ i("table", { children: [
        /* @__PURE__ */ i("thead", { children: /* @__PURE__ */ i("tr", { children: [
          /* @__PURE__ */ i("th", { children: "Field" }),
          /* @__PURE__ */ i("th", { children: "Value" })
        ] }) }),
        /* @__PURE__ */ i("tbody", { children: [
          /* @__PURE__ */ i("tr", { children: [
            /* @__PURE__ */ i("td", { children: "showSpinner" }),
            /* @__PURE__ */ i("td", { children: `${_ || y || I}` })
          ] }),
          /* @__PURE__ */ i("tr", { children: [
            /* @__PURE__ */ i("td", { children: "pending" }),
            /* @__PURE__ */ i("td", { children: `${_}` })
          ] }),
          /* @__PURE__ */ i("tr", { children: [
            /* @__PURE__ */ i("td", { children: "debouncingSync" }),
            /* @__PURE__ */ i("td", { children: `${I}` })
          ] }),
          /* @__PURE__ */ i("tr", { children: [
            /* @__PURE__ */ i("td", { children: "debouncingAsync" }),
            /* @__PURE__ */ i("td", { children: `${y}` })
          ] }),
          /* @__PURE__ */ i("tr", { children: [
            /* @__PURE__ */ i("td", { children: "callCount" }),
            /* @__PURE__ */ i("td", { children: h })
          ] }),
          /* @__PURE__ */ i("tr", { children: [
            /* @__PURE__ */ i("td", { children: "settleCount" }),
            /* @__PURE__ */ i("td", { children: C })
          ] }),
          /* @__PURE__ */ i("tr", { children: [
            /* @__PURE__ */ i("td", { children: "resolveCount" }),
            /* @__PURE__ */ i("td", { children: P })
          ] }),
          /* @__PURE__ */ i("tr", { children: [
            /* @__PURE__ */ i("td", { children: "rejectCount" }),
            /* @__PURE__ */ i("td", { children: S })
          ] }),
          /* @__PURE__ */ i("tr", { children: [
            /* @__PURE__ */ i("td", { children: "hasError" }),
            /* @__PURE__ */ i("td", { children: x.toString() })
          ] }),
          /* @__PURE__ */ i("tr", { children: [
            /* @__PURE__ */ i("td", { children: "currentCapture" }),
            /* @__PURE__ */ i("td", { children: b })
          ] }),
          /* @__PURE__ */ i("tr", { children: [
            /* @__PURE__ */ i("td", { children: '"Saved" input' }),
            /* @__PURE__ */ i("td", { children: c })
          ] })
        ] })
      ] })
    ] });
  });
  function Xa() {
    return window.document;
  }
  var Au = ue(() => {
    let [e, t] = D(0), [n, r] = D(0), [o, a] = D(null), [l, u] = D(null), [m, f] = D(!1), [s, c] = D(!1), [d, p] = D(!1), [h, C] = D(!1), [g, v] = D(!1), { refElementReturn: b, propsStable: _ } = ae({ refElementParameters: { onElementChange: void 0 } }), {
      hasCurrentFocusReturn: { propsStable: x }
    } = De({
      refElementReturn: b,
      hasCurrentFocusParameters: {
        onCurrentFocusedChanged: T((S) => {
          c(S), S && t((P) => ++P);
        }),
        onCurrentFocusedInnerChanged: T((S) => {
          p(S), S && r((P) => ++P);
        })
      }
    });
    return zn({
      refElementReturn: b,
      activeElementParameters: {
        getDocument: Xa,
        onActiveElementChange: u,
        onLastActiveElementChange: a,
        onWindowFocusedChange: f
      },
      hasLastFocusParameters: {
        onLastFocusedChanged: C,
        onLastFocusedInnerChanged: v
      }
    }), /* @__PURE__ */ i("div", { class: "demo", children: [
      /* @__PURE__ */ i("h2", { children: "useHasFocus" }),
      /* @__PURE__ */ i("p", { children: "Tracks focus related to the component:" }),
      /* @__PURE__ */ i("ul", { children: [
        /* @__PURE__ */ i("li", { children: "Is this element (or, optionally, any element within it) focused?" }),
        /* @__PURE__ */ i("li", { children: [
          "Regardless of if focus was lost because the ",
          /* @__PURE__ */ i("code", { children: "body" }),
          " was clicked, was this element (or, optionally, any element within it), the last to be actually focused?"
        ] }),
        /* @__PURE__ */ i("li", { children: "Does the window have focus?" })
      ] }),
      /* @__PURE__ */ i("div", { ...W(_, x, { style: { border: "1px solid black" }, tabIndex: 0 }), children: [
        /* @__PURE__ */ i("span", { children: "Outer element" }),
        /* @__PURE__ */ i("input", {}),
        /* @__PURE__ */ i("input", {}),
        /* @__PURE__ */ i("div", { tabIndex: 0, style: { border: "1px solid black" }, children: [
          /* @__PURE__ */ i("span", { children: "Inner element" }),
          /* @__PURE__ */ i("input", {}),
          /* @__PURE__ */ i("input", {})
        ] })
      ] }),
      /* @__PURE__ */ i("div", { children: /* @__PURE__ */ i("ul", { children: [
        /* @__PURE__ */ i("li", { children: [
          "Focus count: ",
          e
        ] }),
        /* @__PURE__ */ i("li", { children: [
          "Inner focus count: ",
          n
        ] }),
        /* @__PURE__ */ i("li", { children: [
          "Strictly focused: ",
          s.toString(),
          ", ",
          h.toString(),
          " (focused, lastFocused)"
        ] }),
        /* @__PURE__ */ i("li", { children: [
          "Inner focused: ",
          d.toString(),
          ", ",
          g.toString(),
          " (focusedInner, lastFocusedInner)"
        ] }),
        /* @__PURE__ */ i("li", { children: [
          "Window focused: ",
          m.toString()
        ] }),
        /* @__PURE__ */ i("li", { children: [
          "activeElement: ",
          l?.textContent
        ] }),
        /* @__PURE__ */ i("li", { children: [
          "lastActiveElement: ",
          o?.textContent
        ] })
      ] }) })
    ] });
  });
  function Ou() {
    let { propsInput: e, propsLabel: t } = Bn({ randomIdInputParameters: { prefix: "input-", otherReferencerProp: "for" }, randomIdLabelParameters: { prefix: "label-", otherReferencerProp: "aria-labelledby" } });
    return /* @__PURE__ */ i("div", { className: "demo", children: [
      /* @__PURE__ */ i("h2", { children: "Labels" }),
      /* @__PURE__ */ i("input", { ...e }),
      /* @__PURE__ */ i("label", { ...t, children: "Label" })
    ] });
  }
  function Ja({ remaining: e }) {
    let [t, n] = D(0), { refElementReturn: r, propsStable: o } = ae({ refElementParameters: {} }), { props: a, pressReturn: { pressing: l, longPress: u } } = mt({
      pressParameters: { focusSelf: (m) => {
        m.focus();
      }, longPressThreshold: 1e3, onPressSync: () => {
        n((m) => ++m);
      }, allowRepeatPresses: !1, excludeEnter: null, excludePointer: null, excludeSpace: null, onPressingChange: null },
      refElementReturn: r
    });
    return /* @__PURE__ */ i("div", { className: "demo", children: [
      /* @__PURE__ */ i("h2", { children: "Press" }),
      /* @__PURE__ */ i("div", { children: [
        "Press count: ",
        t
      ] }),
      /* @__PURE__ */ i("div", { children: [
        "Active: ",
        l.toString()
      ] }),
      /* @__PURE__ */ i("div", { children: [
        "Long press: ",
        (u ?? "null").toString()
      ] }),
      /* @__PURE__ */ i("div", { style: { border: "1px solid black", touchAction: "none" }, tabIndex: 0, ...W(o, a), children: [
        /* @__PURE__ */ i("div", { children: "This DIV's parent is pressable. Click here to press, cancel by leaving or hovering over a pressable child." }),
        /* @__PURE__ */ i("div", { children: e > 0 && /* @__PURE__ */ i(Ja, { remaining: e - 1 }) })
      ] })
    ] });
  }
  function Hu() {
    return console.log("Render portal child"), /* @__PURE__ */ i("p", { children: "Portal child" });
  }
  function Uu() {
    let [e, t] = D(null), { children: n, pushChild: r, removeChild: o, updateChild: a } = Vn({ target: e });
    return /* @__PURE__ */ i("div", { className: "demo", children: [
      /* @__PURE__ */ i("h2", { children: "Portal children" }),
      /* @__PURE__ */ i("button", { onClick: () => r(/* @__PURE__ */ i(Hu, {})), children: "Push child" }),
      n,
      /* @__PURE__ */ i("div", { id: "demo-portal-target", ref: t })
    ] });
  }
  function ju() {
    let [e, t] = D(10), [n, r] = D("single"), [o, a] = D("");
    return /* @__PURE__ */ i("div", { className: "demo", children: [
      /* @__PURE__ */ i("div", { children: "Global event handlers:" }),
      /* @__PURE__ */ i("label", { children: [
        "# of event handlers",
        /* @__PURE__ */ i("input", { type: "number", value: e, min: 0, onInput: (l) => {
          l.preventDefault(), t(l.currentTarget.valueAsNumber);
        } })
      ] }),
      /* @__PURE__ */ i("div", { children: [
        /* @__PURE__ */ i("label", { children: [
          /* @__PURE__ */ i("input", { onInput: (l) => {
            l.preventDefault(), l.currentTarget.checked && r("grouped");
          }, type: "radio", name: "global-handler-mode" }),
          " Grouped"
        ] }),
        /* @__PURE__ */ i("label", { children: [
          /* @__PURE__ */ i("input", { onInput: (l) => {
            l.preventDefault(), l.currentTarget.checked && r("single");
          }, type: "radio", name: "global-handler-mode" }),
          " Single"
        ] }),
        /* @__PURE__ */ i("label", { children: [
          /* @__PURE__ */ i("input", { onInput: (l) => {
            l.preventDefault(), l.currentTarget.checked && r(null);
          }, type: "radio", name: "global-handler-mode" }),
          " Off"
        ] })
      ] }),
      /* @__PURE__ */ i("button", { id: "global-handler-test", onClick: () => {
        let l = /* @__PURE__ */ new Date();
        document.getElementById("global-handler-test2")?.click(), a((+/* @__PURE__ */ new Date() - +l) / 1e3 + "s passed");
      }, children: "Run test" }),
      /* @__PURE__ */ i("button", { id: "global-handler-test2", children: "Run test 2" }),
      /* @__PURE__ */ i("div", { children: o }),
      /* @__PURE__ */ i(Gu, { count: e, mode: n }, n)
    ] });
  }
  var Gu = ue(function({ count: t, mode: n }) {
    return /* @__PURE__ */ i(ge, { children: [...function* () {
      for (let r = 0; r < t; ++r)
        yield /* @__PURE__ */ i(Bu, { mode: n, target: window }, r);
    }()] });
  }), Bu = ue(function({ mode: t, target: n }) {
    return Ee(n, "click", t == null ? null : (r) => {
      r.target?.id == "global-handler-test2" && (window._demo_event = (window._demo_event || 0) + 1);
    }, {}, t || "grouped"), /* @__PURE__ */ i("div", { hidden: !0 });
  }), Qa = me(null), Wu = ue(() => {
    let [e, t] = D(!1), [n, r] = D(!1), [o, a] = D(100), { context: l, managedChildrenReturn: u } = Me({ managedChildrenParameters: {} }), { context: m, staggeredChildrenReturn: f } = We({ managedChildrenReturn: u, staggeredChildrenParameters: { staggered: e } });
    return /* @__PURE__ */ i(Qa.Provider, { value: { ...l, ...m }, children: /* @__PURE__ */ i("div", { class: "demo", children: [
      /* @__PURE__ */ i("label", { children: [
        /* @__PURE__ */ i("input", { type: "checkbox", checked: n, onInput: (s) => {
          s.preventDefault(), r(s.currentTarget.checked);
        } }),
        " Children mounted"
      ] }),
      /* @__PURE__ */ i("label", { children: [
        /* @__PURE__ */ i("input", { type: "checkbox", checked: e, onInput: (s) => {
          s.preventDefault(), t(s.currentTarget.checked);
        } }),
        " Children Staggered"
      ] }),
      /* @__PURE__ */ i("label", { children: [
        /* @__PURE__ */ i("input", { type: "number", value: o, onInput: (s) => {
          s.preventDefault(), a(s.currentTarget.valueAsNumber);
        } }),
        " # of children"
      ] }),
      /* @__PURE__ */ i("div", { children: [
        /* @__PURE__ */ i("div", { children: [
          "Status: ",
          e ? f.stillStaggering ? "staggering" : "done staggering" : "(not staggering)"
        ] }),
        /* @__PURE__ */ i("div", { style: "display:flex;flex-wrap: wrap;", children: n && /* @__PURE__ */ i($u, { childCount: o }) })
      ] })
    ] }) });
  }), $u = ue(({ childCount: e }) => /* @__PURE__ */ i(ge, { children: Array.from(function* () {
    for (let t = 0; t < e; ++t)
      yield /* @__PURE__ */ i(Vu, { index: t }, t);
  }()) })), Vu = ue(({ index: e }) => {
    let t = Se(Qa), { info: n, props: r, staggeredChildReturn: { hideBecauseStaggered: o, parentIsStaggered: a } } = $e({ context: t, info: { index: e } }), { managedChildReturn: l } = Ae({ context: t, info: { ...n, index: e } });
    return /* @__PURE__ */ i("div", { ...W(r, { style: o ? { opacity: 0.25 } : {} }), children: [
      "Child #",
      e,
      a ? o ? "(pending)" : "" : "(not staggered)"
    ] });
  });
  H.debounceRendering = (e) => e();
  var zu = () => /* @__PURE__ */ i("div", { class: "flex", style: { flexWrap: "wrap" }, children: [
    /* @__PURE__ */ i(Ja, { remaining: 2 }),
    /* @__PURE__ */ i("input", {}),
    /* @__PURE__ */ i("div", { style: "display:grid;grid-template-columns:1fr 1fr", children: [
      /* @__PURE__ */ i(Kn, {}),
      /* @__PURE__ */ i(Kn, {})
    ] }),
    /* @__PURE__ */ i("hr", {}),
    /* @__PURE__ */ i(Ou, {}),
    /* @__PURE__ */ i("hr", {}),
    /* @__PURE__ */ i(ju, {}),
    /* @__PURE__ */ i("hr", {}),
    /* @__PURE__ */ i(Uu, {}),
    /* @__PURE__ */ i("hr", {}),
    /* @__PURE__ */ i(Au, {}),
    /* @__PURE__ */ i("hr", {}),
    /* @__PURE__ */ i(ku, {}),
    /* @__PURE__ */ i("hr", {}),
    /* @__PURE__ */ i(Ba, {}),
    /* @__PURE__ */ i("hr", {}),
    /* @__PURE__ */ i(qa, {}),
    /* @__PURE__ */ i("hr", {}),
    /* @__PURE__ */ i(Wu, {}),
    /* @__PURE__ */ i("hr", {}),
    /* @__PURE__ */ i(za, {}),
    /* @__PURE__ */ i("hr", {}),
    /* @__PURE__ */ i(Du, {}),
    /* @__PURE__ */ i("hr", {}),
    /* @__PURE__ */ i(Fu, {}),
    /* @__PURE__ */ i("hr", {}),
    /* @__PURE__ */ i(Mu, {}),
    /* @__PURE__ */ i("hr", {}),
    /* @__PURE__ */ i(wu, {}),
    /* @__PURE__ */ i("hr", {}),
    /* @__PURE__ */ i(Ru, {}),
    /* @__PURE__ */ i("hr", {})
  ] });
  requestAnimationFrame(() => {
    xt(/* @__PURE__ */ i(zu, {}), document.getElementById("root"));
  });
})();
/*! Bundled license information:

lodash-es/lodash.js:
  (**
   * @license
   * Lodash (Custom Build) <https://lodash.com/>
   * Build: `lodash modularize exports="es" -o ./`
   * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
   * Released under MIT license <https://lodash.com/license>
   * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
   * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
   *)

tabbable/dist/index.esm.js:
  (*!
  * tabbable 6.2.0
  * @license MIT, https://github.com/focus-trap/tabbable/blob/master/LICENSE
  *)

blocking-elements/dist/blocking-elements.js:
  (**
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
   *)
*/
//# sourceMappingURL=bundle.js.map
