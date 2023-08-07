"use strict";
(() => {
  // ../node_modules/.pnpm/preact@10.13.2/node_modules/preact/dist/preact.module.js
  var xt, H, jr, Ja, ze, Ar, Gr, Xn, Br, Gt = {}, Wr = [], Xa = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
  function Le(e, t) {
    for (var n in t)
      e[n] = t[n];
    return e;
  }
  function $r(e) {
    var t = e.parentNode;
    t && t.removeChild(e);
  }
  function fe(e, t, n) {
    var r, o, a, l = {};
    for (a in t)
      a == "key" ? r = t[a] : a == "ref" ? o = t[a] : l[a] = t[a];
    if (arguments.length > 2 && (l.children = arguments.length > 3 ? xt.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
      for (a in e.defaultProps)
        l[a] === void 0 && (l[a] = e.defaultProps[a]);
    return vt(e, l, r, o, null);
  }
  function vt(e, t, n, r, o) {
    var a = { type: e, props: t, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: o ?? ++jr };
    return o == null && H.vnode != null && H.vnode(a), a;
  }
  function ge(e) {
    return e.children;
  }
  function Pe(e, t) {
    this.props = e, this.context = t;
  }
  function Ct(e, t) {
    if (t == null)
      return e.__ ? Ct(e.__, e.__.__k.indexOf(e) + 1) : null;
    for (var n; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null)
        return n.__e;
    return typeof e.type == "function" ? Ct(e) : null;
  }
  function Vr(e) {
    var t, n;
    if ((e = e.__) != null && e.__c != null) {
      for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
        if ((n = e.__k[t]) != null && n.__e != null) {
          e.__e = e.__c.base = n.__e;
          break;
        }
      return Vr(e);
    }
  }
  function Qn(e) {
    (!e.__d && (e.__d = !0) && ze.push(e) && !Bt.__r++ || Ar !== H.debounceRendering) && ((Ar = H.debounceRendering) || Gr)(Bt);
  }
  function Bt() {
    var e, t, n, r, o, a, l, u;
    for (ze.sort(Xn); e = ze.shift(); )
      e.__d && (t = ze.length, r = void 0, o = void 0, l = (a = (n = e).__v).__e, (u = n.__P) && (r = [], (o = Le({}, a)).__v = a.__v + 1, Yn(u, a, o, n.__n, u.ownerSVGElement !== void 0, a.__h != null ? [l] : null, r, l ?? Ct(a), a.__h), Xr(r, a), a.__e != l && Vr(a)), ze.length > t && ze.sort(Xn));
    Bt.__r = 0;
  }
  function zr(e, t, n, r, o, a, l, u, m, f) {
    var i, c, d, p, h, C, g, v = r && r.__k || Wr, b = v.length;
    for (n.__k = [], i = 0; i < t.length; i++)
      if ((p = n.__k[i] = (p = t[i]) == null || typeof p == "boolean" || typeof p == "function" ? null : typeof p == "string" || typeof p == "number" || typeof p == "bigint" ? vt(null, p, null, null, p) : Array.isArray(p) ? vt(ge, { children: p }, null, null, null) : p.__b > 0 ? vt(p.type, p.props, p.key, p.ref ? p.ref : null, p.__v) : p) != null) {
        if (p.__ = n, p.__b = n.__b + 1, (d = v[i]) === null || d && p.key == d.key && p.type === d.type)
          v[i] = void 0;
        else
          for (c = 0; c < b; c++) {
            if ((d = v[c]) && p.key == d.key && p.type === d.type) {
              v[c] = void 0;
              break;
            }
            d = null;
          }
        Yn(e, p, d = d || Gt, o, a, l, u, m, f), h = p.__e, (c = p.ref) && d.ref != c && (g || (g = []), d.ref && g.push(d.ref, null, p), g.push(c, p.__c || h, p)), h != null ? (C == null && (C = h), typeof p.type == "function" && p.__k === d.__k ? p.__d = m = qr(p, m, e) : m = Kr(e, p, d, v, h, m), typeof n.type == "function" && (n.__d = m)) : m && d.__e == m && m.parentNode != e && (m = Ct(d));
      }
    for (n.__e = C, i = b; i--; )
      v[i] != null && (typeof n.type == "function" && v[i].__e != null && v[i].__e == n.__d && (n.__d = Jr(r).nextSibling), Yr(v[i], v[i]));
    if (g)
      for (i = 0; i < g.length; i++)
        Qr(g[i], g[++i], g[++i]);
  }
  function qr(e, t, n) {
    for (var r, o = e.__k, a = 0; o && a < o.length; a++)
      (r = o[a]) && (r.__ = e, t = typeof r.type == "function" ? qr(r, t, n) : Kr(n, r, r, o, r.__e, t));
    return t;
  }
  function _t(e, t) {
    return t = t || [], e == null || typeof e == "boolean" || (Array.isArray(e) ? e.some(function(n) {
      _t(n, t);
    }) : t.push(e)), t;
  }
  function Kr(e, t, n, r, o, a) {
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
  function Jr(e) {
    var t, n, r;
    if (e.type == null || typeof e.type == "string")
      return e.__e;
    if (e.__k) {
      for (t = e.__k.length - 1; t >= 0; t--)
        if ((n = e.__k[t]) && (r = Jr(n)))
          return r;
    }
    return null;
  }
  function Qa(e, t, n, r, o) {
    var a;
    for (a in n)
      a === "children" || a === "key" || a in t || Wt(e, a, null, n[a], r);
    for (a in t)
      o && typeof t[a] != "function" || a === "children" || a === "key" || a === "value" || a === "checked" || n[a] === t[a] || Wt(e, a, t[a], n[a], r);
  }
  function Or(e, t, n) {
    t[0] === "-" ? e.setProperty(t, n ?? "") : e[t] = n == null ? "" : typeof n != "number" || Xa.test(t) ? n : n + "px";
  }
  function Wt(e, t, n, r, o) {
    var a;
    e:
      if (t === "style")
        if (typeof n == "string")
          e.style.cssText = n;
        else {
          if (typeof r == "string" && (e.style.cssText = r = ""), r)
            for (t in r)
              n && t in n || Or(e.style, t, "");
          if (n)
            for (t in n)
              r && n[t] === r[t] || Or(e.style, t, n[t]);
        }
      else if (t[0] === "o" && t[1] === "n")
        a = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + a] = n, n ? r || e.addEventListener(t, a ? Ur : Hr, a) : e.removeEventListener(t, a ? Ur : Hr, a);
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
  function Hr(e) {
    return this.l[e.type + !1](H.event ? H.event(e) : e);
  }
  function Ur(e) {
    return this.l[e.type + !0](H.event ? H.event(e) : e);
  }
  function Yn(e, t, n, r, o, a, l, u, m) {
    var f, i, c, d, p, h, C, g, v, b, x, _, T, I, S, P = t.type;
    if (t.constructor !== void 0)
      return null;
    n.__h != null && (m = n.__h, u = t.__e = n.__e, t.__h = null, a = [u]), (f = H.__b) && f(t);
    try {
      e:
        if (typeof P == "function") {
          if (g = t.props, v = (f = P.contextType) && r[f.__c], b = f ? v ? v.props.value : f.__ : r, n.__c ? C = (i = t.__c = n.__c).__ = i.__E : ("prototype" in P && P.prototype.render ? t.__c = i = new P(g, b) : (t.__c = i = new Pe(g, b), i.constructor = P, i.render = Za), v && v.sub(i), i.props = g, i.state || (i.state = {}), i.context = b, i.__n = r, c = i.__d = !0, i.__h = [], i._sb = []), i.__s == null && (i.__s = i.state), P.getDerivedStateFromProps != null && (i.__s == i.state && (i.__s = Le({}, i.__s)), Le(i.__s, P.getDerivedStateFromProps(g, i.__s))), d = i.props, p = i.state, i.__v = t, c)
            P.getDerivedStateFromProps == null && i.componentWillMount != null && i.componentWillMount(), i.componentDidMount != null && i.__h.push(i.componentDidMount);
          else {
            if (P.getDerivedStateFromProps == null && g !== d && i.componentWillReceiveProps != null && i.componentWillReceiveProps(g, b), !i.__e && i.shouldComponentUpdate != null && i.shouldComponentUpdate(g, i.__s, b) === !1 || t.__v === n.__v) {
              for (t.__v !== n.__v && (i.props = g, i.state = i.__s, i.__d = !1), i.__e = !1, t.__e = n.__e, t.__k = n.__k, t.__k.forEach(function(L) {
                L && (L.__ = t);
              }), x = 0; x < i._sb.length; x++)
                i.__h.push(i._sb[x]);
              i._sb = [], i.__h.length && l.push(i);
              break e;
            }
            i.componentWillUpdate != null && i.componentWillUpdate(g, i.__s, b), i.componentDidUpdate != null && i.__h.push(function() {
              i.componentDidUpdate(d, p, h);
            });
          }
          if (i.context = b, i.props = g, i.__P = e, _ = H.__r, T = 0, "prototype" in P && P.prototype.render) {
            for (i.state = i.__s, i.__d = !1, _ && _(t), f = i.render(i.props, i.state, i.context), I = 0; I < i._sb.length; I++)
              i.__h.push(i._sb[I]);
            i._sb = [];
          } else
            do
              i.__d = !1, _ && _(t), f = i.render(i.props, i.state, i.context), i.state = i.__s;
            while (i.__d && ++T < 25);
          i.state = i.__s, i.getChildContext != null && (r = Le(Le({}, r), i.getChildContext())), c || i.getSnapshotBeforeUpdate == null || (h = i.getSnapshotBeforeUpdate(d, p)), S = f != null && f.type === ge && f.key == null ? f.props.children : f, zr(e, Array.isArray(S) ? S : [S], t, n, r, o, a, l, u, m), i.base = t.__e, t.__h = null, i.__h.length && l.push(i), C && (i.__E = i.__ = null), i.__e = !1;
        } else
          a == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = Ya(n.__e, t, n, r, o, a, l, m);
      (f = H.diffed) && f(t);
    } catch (L) {
      t.__v = null, (m || a != null) && (t.__e = u, t.__h = !!m, a[a.indexOf(u)] = null), H.__e(L, t, n);
    }
  }
  function Xr(e, t) {
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
  function Ya(e, t, n, r, o, a, l, u) {
    var m, f, i, c = n.props, d = t.props, p = t.type, h = 0;
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
      if (a = a && xt.call(e.childNodes), f = (c = n.props || Gt).dangerouslySetInnerHTML, i = d.dangerouslySetInnerHTML, !u) {
        if (a != null)
          for (c = {}, h = 0; h < e.attributes.length; h++)
            c[e.attributes[h].name] = e.attributes[h].value;
        (i || f) && (i && (f && i.__html == f.__html || i.__html === e.innerHTML) || (e.innerHTML = i && i.__html || ""));
      }
      if (Qa(e, d, c, o, u), i)
        t.__k = [];
      else if (h = t.props.children, zr(e, Array.isArray(h) ? h : [h], t, n, r, o && p !== "foreignObject", a, l, a ? a[0] : n.__k && Ct(n, 0), u), a != null)
        for (h = a.length; h--; )
          a[h] != null && $r(a[h]);
      u || ("value" in d && (h = d.value) !== void 0 && (h !== e.value || p === "progress" && !h || p === "option" && h !== c.value) && Wt(e, "value", h, c.value, !1), "checked" in d && (h = d.checked) !== void 0 && h !== e.checked && Wt(e, "checked", h, c.checked, !1));
    }
    return e;
  }
  function Qr(e, t, n) {
    try {
      typeof e == "function" ? e(t) : e.current = t;
    } catch (r) {
      H.__e(r, n);
    }
  }
  function Yr(e, t, n) {
    var r, o;
    if (H.unmount && H.unmount(e), (r = e.ref) && (r.current && r.current !== e.__e || Qr(r, null, t)), (r = e.__c) != null) {
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
        r[o] && Yr(r[o], t, n || typeof e.type != "function");
    n || e.__e == null || $r(e.__e), e.__ = e.__e = e.__d = void 0;
  }
  function Za(e, t, n) {
    return this.constructor(e, n);
  }
  function yt(e, t, n) {
    var r, o, a;
    H.__ && H.__(e, t), o = (r = typeof n == "function") ? null : n && n.__k || t.__k, a = [], Yn(t, e = (!r && n || t).__k = fe(ge, null, [e]), o || Gt, Gt, t.ownerSVGElement !== void 0, !r && n ? [n] : o ? null : t.firstChild ? xt.call(t.childNodes) : null, a, !r && n ? n : o ? o.__e : t.firstChild, r), Xr(a, e);
  }
  function et(e, t, n) {
    var r, o, a, l = Le({}, e.props);
    for (a in t)
      a == "key" ? r = t[a] : a == "ref" ? o = t[a] : l[a] = t[a];
    return arguments.length > 2 && (l.children = arguments.length > 3 ? xt.call(arguments, 2) : n), vt(e.type, l, r || e.key, o || e.ref, null);
  }
  function me(e, t) {
    var n = { __c: t = "__cC" + Br++, __: e, Consumer: function(r, o) {
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
  xt = Wr.slice, H = { __e: function(e, t, n, r) {
    for (var o, a, l; t = t.__; )
      if ((o = t.__c) && !o.__)
        try {
          if ((a = o.constructor) && a.getDerivedStateFromError != null && (o.setState(a.getDerivedStateFromError(e)), l = o.__d), o.componentDidCatch != null && (o.componentDidCatch(e, r || {}), l = o.__d), l)
            return o.__E = o;
        } catch (u) {
          e = u;
        }
    throw e;
  } }, jr = 0, Ja = function(e) {
    return e != null && e.constructor === void 0;
  }, Pe.prototype.setState = function(e, t) {
    var n;
    n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Le({}, this.state), typeof e == "function" && (e = e(Le({}, n), this.props)), e && Le(n, e), e != null && this.__v && (t && this._sb.push(t), Qn(this));
  }, Pe.prototype.forceUpdate = function(e) {
    this.__v && (this.__e = !0, e && this.__h.push(e), Qn(this));
  }, Pe.prototype.render = ge, ze = [], Gr = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, Xn = function(e, t) {
    return e.__v.__b - t.__v.__b;
  }, Bt.__r = 0, Br = 0;

  // ../node_modules/.pnpm/preact@10.13.2/node_modules/preact/hooks/dist/hooks.module.js
  var qe, re, Zn, Zr, tt = 0, so = [], $t = [], eo = H.__b, to = H.__r, no = H.diffed, ro = H.__c, oo = H.unmount;
  function nt(e, t) {
    H.__h && H.__h(re, e, tt || t), tt = 0;
    var n = re.__H || (re.__H = { __: [], __h: [] });
    return e >= n.__.length && n.__.push({ __V: $t }), n.__[e];
  }
  function le(e) {
    return tt = 1, zt(io, e);
  }
  function zt(e, t, n) {
    var r = nt(qe++, 2);
    if (r.t = e, !r.__c && (r.__ = [n ? n(t) : io(void 0, t), function(u) {
      var m = r.__N ? r.__N[0] : r.__[0], f = r.t(m, u);
      m !== f && (r.__N = [f, r.__[1]], r.__c.setState({}));
    }], r.__c = re, !re.u)) {
      var o = function(u, m, f) {
        if (!r.__c.__H)
          return !0;
        var i = r.__c.__H.__.filter(function(d) {
          return d.__c;
        });
        if (i.every(function(d) {
          return !d.__N;
        }))
          return !a || a.call(this, u, m, f);
        var c = !1;
        return i.forEach(function(d) {
          if (d.__N) {
            var p = d.__[0];
            d.__ = d.__N, d.__N = void 0, p !== d.__[0] && (c = !0);
          }
        }), !(!c && r.__c.props === u) && (!a || a.call(this, u, m, f));
      };
      re.u = !0;
      var a = re.shouldComponentUpdate, l = re.componentWillUpdate;
      re.componentWillUpdate = function(u, m, f) {
        if (this.__e) {
          var i = a;
          a = void 0, o(u, m, f), a = i;
        }
        l && l.call(this, u, m, f);
      }, re.shouldComponentUpdate = o;
    }
    return r.__N || r.__;
  }
  function j(e, t) {
    var n = nt(qe++, 3);
    !H.__s && tr(n.__H, t) && (n.__ = e, n.i = t, re.__H.__h.push(n));
  }
  function oe(e, t) {
    var n = nt(qe++, 4);
    !H.__s && tr(n.__H, t) && (n.__ = e, n.i = t, re.__h.push(n));
  }
  function A(e) {
    return tt = 5, ue(function() {
      return { current: e };
    }, []);
  }
  function St(e, t, n) {
    tt = 6, oe(function() {
      return typeof e == "function" ? (e(t()), function() {
        return e(null);
      }) : e ? (e.current = t(), function() {
        return e.current = null;
      }) : void 0;
    }, n == null ? n : n.concat(e));
  }
  function ue(e, t) {
    var n = nt(qe++, 7);
    return tr(n.__H, t) ? (n.__V = e(), n.i = t, n.__h = e, n.__V) : n.__;
  }
  function R(e, t) {
    return tt = 8, ue(function() {
      return e;
    }, t);
  }
  function Ee(e) {
    var t = re.context[e.__c], n = nt(qe++, 9);
    return n.c = e, t ? (n.__ == null && (n.__ = !0, t.sub(re)), t.props.value) : e.__;
  }
  function Et() {
    var e = nt(qe++, 11);
    if (!e.__) {
      for (var t = re.__v; t !== null && !t.__m && t.__ !== null; )
        t = t.__;
      var n = t.__m || (t.__m = [0, 0]);
      e.__ = "P" + n[0] + "-" + n[1]++;
    }
    return e.__;
  }
  function es() {
    for (var e; e = so.shift(); )
      if (e.__P && e.__H)
        try {
          e.__H.__h.forEach(Vt), e.__H.__h.forEach(er), e.__H.__h = [];
        } catch (t) {
          e.__H.__h = [], H.__e(t, e.__v);
        }
  }
  H.__b = function(e) {
    re = null, eo && eo(e);
  }, H.__r = function(e) {
    to && to(e), qe = 0;
    var t = (re = e.__c).__H;
    t && (Zn === re ? (t.__h = [], re.__h = [], t.__.forEach(function(n) {
      n.__N && (n.__ = n.__N), n.__V = $t, n.__N = n.i = void 0;
    })) : (t.__h.forEach(Vt), t.__h.forEach(er), t.__h = [])), Zn = re;
  }, H.diffed = function(e) {
    no && no(e);
    var t = e.__c;
    t && t.__H && (t.__H.__h.length && (so.push(t) !== 1 && Zr === H.requestAnimationFrame || ((Zr = H.requestAnimationFrame) || ts)(es)), t.__H.__.forEach(function(n) {
      n.i && (n.__H = n.i), n.__V !== $t && (n.__ = n.__V), n.i = void 0, n.__V = $t;
    })), Zn = re = null;
  }, H.__c = function(e, t) {
    t.some(function(n) {
      try {
        n.__h.forEach(Vt), n.__h = n.__h.filter(function(r) {
          return !r.__ || er(r);
        });
      } catch (r) {
        t.some(function(o) {
          o.__h && (o.__h = []);
        }), t = [], H.__e(r, n.__v);
      }
    }), ro && ro(e, t);
  }, H.unmount = function(e) {
    oo && oo(e);
    var t, n = e.__c;
    n && n.__H && (n.__H.__.forEach(function(r) {
      try {
        Vt(r);
      } catch (o) {
        t = o;
      }
    }), n.__H = void 0, t && H.__e(t, n.__v));
  };
  var ao = typeof requestAnimationFrame == "function";
  function ts(e) {
    var t, n = function() {
      clearTimeout(r), ao && cancelAnimationFrame(t), setTimeout(e);
    }, r = setTimeout(n, 100);
    ao && (t = requestAnimationFrame(n));
  }
  function Vt(e) {
    var t = re, n = e.__c;
    typeof n == "function" && (e.__c = void 0, n()), re = t;
  }
  function er(e) {
    var t = re;
    e.__c = e.__(), re = t;
  }
  function tr(e, t) {
    return !e || e.length !== t.length || t.some(function(n, r) {
      return n !== e[r];
    });
  }
  function io(e, t) {
    return typeof t == "function" ? t(e) : t;
  }

  // ../node_modules/.pnpm/preact@10.13.2/node_modules/preact/compat/dist/compat.module.js
  function vo(e, t) {
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
  function lo(e) {
    this.props = e;
  }
  function ce(e, t) {
    function n(o) {
      var a = this.props.ref, l = a == o.ref;
      return !l && a && (a.call ? a(null) : a.current = null), t ? !t(this.props, o) || !l : rr(this.props, o);
    }
    function r(o) {
      return this.shouldComponentUpdate = n, fe(e, o);
    }
    return r.displayName = "Memo(" + (e.displayName || e.name) + ")", r.prototype.isReactComponent = !0, r.__f = !0, r;
  }
  (lo.prototype = new Pe()).isPureReactComponent = !0, lo.prototype.shouldComponentUpdate = function(e, t) {
    return rr(this.props, e) || rr(this.state, t);
  };
  var uo = H.__b;
  H.__b = function(e) {
    e.type && e.type.__f && e.ref && (e.props.ref = e.ref, e.ref = null), uo && uo(e);
  };
  var rs = typeof Symbol < "u" && Symbol.for && Symbol.for("react.forward_ref") || 3911;
  function Kt(e) {
    function t(n) {
      var r = vo({}, n);
      return delete r.ref, e(r, n.ref || null);
    }
    return t.$$typeof = rs, t.render = t, t.prototype.isReactComponent = t.__f = !0, t.displayName = "ForwardRef(" + (e.displayName || e.name) + ")", t;
  }
  var os = H.__e;
  H.__e = function(e, t, n, r) {
    if (e.then) {
      for (var o, a = t; a = a.__; )
        if ((o = a.__c) && o.__c)
          return t.__e == null && (t.__e = n.__e, t.__k = n.__k), o.__c(e, t);
    }
    os(e, t, n, r);
  };
  var co = H.unmount;
  function Co(e, t, n) {
    return e && (e.__c && e.__c.__H && (e.__c.__H.__.forEach(function(r) {
      typeof r.__c == "function" && r.__c();
    }), e.__c.__H = null), (e = vo({}, e)).__c != null && (e.__c.__P === n && (e.__c.__P = t), e.__c = null), e.__k = e.__k && e.__k.map(function(r) {
      return Co(r, t, n);
    })), e;
  }
  function xo(e, t, n) {
    return e && (e.__v = null, e.__k = e.__k && e.__k.map(function(r) {
      return xo(r, t, n);
    }), e.__c && e.__c.__P === t && (e.__e && n.insertBefore(e.__e, e.__d), e.__c.__e = !0, e.__c.__P = n)), e;
  }
  function nr() {
    this.__u = 0, this.t = null, this.__b = null;
  }
  function _o(e) {
    var t = e.__.__c;
    return t && t.__a && t.__a(e);
  }
  function qt() {
    this.u = null, this.o = null;
  }
  H.unmount = function(e) {
    var t = e.__c;
    t && t.__R && t.__R(), t && e.__h === !0 && (e.type = null), co && co(e);
  }, (nr.prototype = new Pe()).__c = function(e, t) {
    var n = t.__c, r = this;
    r.t == null && (r.t = []), r.t.push(n);
    var o = _o(r.__v), a = !1, l = function() {
      a || (a = !0, n.__R = null, o ? o(u) : u());
    };
    n.__R = l;
    var u = function() {
      if (!--r.__u) {
        if (r.state.__a) {
          var f = r.state.__a;
          r.__v.__k[0] = xo(f, f.__c.__P, f.__c.__O);
        }
        var i;
        for (r.setState({ __a: r.__b = null }); i = r.t.pop(); )
          i.forceUpdate();
      }
    }, m = t.__h === !0;
    r.__u++ || m || r.setState({ __a: r.__b = r.__v.__k[0] }), e.then(l, l);
  }, nr.prototype.componentWillUnmount = function() {
    this.t = [];
  }, nr.prototype.render = function(e, t) {
    if (this.__b) {
      if (this.__v.__k) {
        var n = document.createElement("div"), r = this.__v.__k[0].__c;
        this.__v.__k[0] = Co(this.__b, n, r.__O = r.__P);
      }
      this.__b = null;
    }
    var o = t.__a && fe(ge, null, e.fallback);
    return o && (o.__h = null), [fe(ge, null, t.__a ? null : e.children), o];
  };
  var fo = function(e, t, n) {
    if (++n[1] === n[0] && e.o.delete(t), e.props.revealOrder && (e.props.revealOrder[0] !== "t" || !e.o.size))
      for (n = e.u; n; ) {
        for (; n.length > 3; )
          n.pop()();
        if (n[1] < n[0])
          break;
        e.u = n = n[2];
      }
  };
  function as(e) {
    return this.getChildContext = function() {
      return e.context;
    }, e.children;
  }
  function ss(e) {
    var t = this, n = e.i;
    t.componentWillUnmount = function() {
      yt(null, t.l), t.l = null, t.i = null;
    }, t.i && t.i !== n && t.componentWillUnmount(), e.__v ? (t.l || (t.i = n, t.l = { nodeType: 1, parentNode: n, childNodes: [], appendChild: function(r) {
      this.childNodes.push(r), t.i.appendChild(r);
    }, insertBefore: function(r, o) {
      this.childNodes.push(r), t.i.appendChild(r);
    }, removeChild: function(r) {
      this.childNodes.splice(this.childNodes.indexOf(r) >>> 1, 1), t.i.removeChild(r);
    } }), yt(fe(as, { context: t.context }, e.__v), t.l)) : t.l && t.componentWillUnmount();
  }
  function Jt(e, t) {
    var n = fe(ss, { __v: e, i: t });
    return n.containerInfo = t, n;
  }
  (qt.prototype = new Pe()).__a = function(e) {
    var t = this, n = _o(t.__v), r = t.o.get(e);
    return r[0]++, function(o) {
      var a = function() {
        t.props.revealOrder ? (r.push(o), fo(t, e, r)) : o();
      };
      n ? n(a) : a();
    };
  }, qt.prototype.render = function(e) {
    this.u = null, this.o = /* @__PURE__ */ new Map();
    var t = _t(e.children);
    e.revealOrder && e.revealOrder[0] === "b" && t.reverse();
    for (var n = t.length; n--; )
      this.o.set(t[n], this.u = [1, 0, this.u]);
    return e.children;
  }, qt.prototype.componentDidUpdate = qt.prototype.componentDidMount = function() {
    var e = this;
    this.o.forEach(function(t, n) {
      fo(e, n, t);
    });
  };
  var is = typeof Symbol < "u" && Symbol.for && Symbol.for("react.element") || 60103, ls = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/, us = /^on(Ani|Tra|Tou|BeforeInp|Compo)/, cs = /[A-Z0-9]/g, ds = typeof document < "u", fs = function(e) {
    return (typeof Symbol < "u" && typeof Symbol() == "symbol" ? /fil|che|rad/ : /fil|che|ra/).test(e);
  };
  Pe.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(e) {
    Object.defineProperty(Pe.prototype, e, { configurable: !0, get: function() {
      return this["UNSAFE_" + e];
    }, set: function(t) {
      Object.defineProperty(this, e, { configurable: !0, writable: !0, value: t });
    } });
  });
  var mo = H.event;
  function ms() {
  }
  function ps() {
    return this.cancelBubble;
  }
  function hs() {
    return this.defaultPrevented;
  }
  H.event = function(e) {
    return mo && (e = mo(e)), e.persist = ms, e.isPropagationStopped = ps, e.isDefaultPrevented = hs, e.nativeEvent = e;
  };
  var yo, gs = { enumerable: !1, configurable: !0, get: function() {
    return this.class;
  } }, po = H.vnode;
  H.vnode = function(e) {
    typeof e.type == "string" && function(t) {
      var n = t.props, r = t.type, o = {};
      for (var a in n) {
        var l = n[a];
        if (!(a === "value" && "defaultValue" in n && l == null || ds && a === "children" && r === "noscript" || a === "class" || a === "className")) {
          var u = a.toLowerCase();
          a === "defaultValue" && "value" in n && n.value == null ? a = "value" : a === "download" && l === !0 ? l = "" : u === "ondoubleclick" ? a = "ondblclick" : u !== "onchange" || r !== "input" && r !== "textarea" || fs(n.type) ? u === "onfocus" ? a = "onfocusin" : u === "onblur" ? a = "onfocusout" : us.test(a) ? a = u : r.indexOf("-") === -1 && ls.test(a) ? a = a.replace(cs, "-$&").toLowerCase() : l === null && (l = void 0) : u = a = "oninput", u === "oninput" && o[a = u] && (a = "oninputCapture"), o[a] = l;
        }
      }
      r == "select" && o.multiple && Array.isArray(o.value) && (o.value = _t(n.children).forEach(function(m) {
        m.props.selected = o.value.indexOf(m.props.value) != -1;
      })), r == "select" && o.defaultValue != null && (o.value = _t(n.children).forEach(function(m) {
        m.props.selected = o.multiple ? o.defaultValue.indexOf(m.props.value) != -1 : o.defaultValue == m.props.value;
      })), n.class && !n.className ? (o.class = n.class, Object.defineProperty(o, "className", gs)) : (n.className && !n.class || n.class && n.className) && (o.class = o.className = n.className), t.props = o;
    }(e), e.$$typeof = is, po && po(e);
  };
  var ho = H.__r;
  H.__r = function(e) {
    ho && ho(e), yo = e.__c;
  };
  var go = H.diffed;
  H.diffed = function(e) {
    go && go(e);
    var t = e.props, n = e.__e;
    n != null && e.type === "textarea" && "value" in t && t.value !== n.value && (n.value = t.value == null ? "" : t.value), yo = null;
  };

  // ../dist/util/lib-shared.js
  var So = {
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
  globalThis.process.env.NODE_ENV ??= "production";
  var Se = "development";

  // ../dist/util/use-call-count.js
  window.requestIdleCallback ??= (e) => setTimeout(() => {
    e({ didTimeout: !1, timeRemaining: () => 0 });
  }, 5);
  var or = null;
  function k(e) {
    if (Se !== "development")
      return;
    let t = e.name;
    bs || vs.has(t) || (console.assert(t.length > 0), window._hookCallCount ??= { callCounts: {} }, window._hookCallCount.callCounts[t] ??= { moment: 0, total: 0 }, window._hookCallCount.callCounts[t].moment += 1, window._hookCallCount.callCounts[t].total += 1, or == null && (or = requestIdleCallback(() => {
      let n = Object.entries(window._hookCallCount.callCounts).map(([r, o]) => ({ Hook: r || "?", Now: o?.moment || 0, Total: o?.total || 0 })).filter(({ Now: r }) => !!r).sort(({ Now: r }, { Now: o }) => !r && !o ? 0 : (r ||= 1 / 0, o ||= 1 / 0, r - o));
      console.table(n, ["Hook", "Now", "Total"]), Object.entries(window._hookCallCount.callCounts).forEach(([, r]) => {
        r.moment = 0;
      }), or = null;
    })));
  }
  var bs = !1, vs = /* @__PURE__ */ new Set();

  // ../dist/util/use-before-layout-effect.js
  var Xt = /* @__PURE__ */ new Map(), Eo = "diffed", Cs = (e, ...t) => {
    for (let [n, r] of Xt) {
      let o = r.prevInputs;
      ys(o, r.inputs) && (r.cleanup?.(), r.cleanup = r.effect(), r.prevInputs = r.inputs);
    }
    Xt.clear(), xs?.(e, ...t);
  }, xs = H[Eo];
  H[Eo] = Cs;
  var ar = 0;
  function _s() {
    let e = ++ar;
    return ar >= Number.MAX_SAFE_INTEGER && (ar = -Number.MAX_SAFE_INTEGER), e;
  }
  function Tt(e, t) {
    k(Tt);
    let n = A(null);
    n.current ??= _s();
    let r = n.current;
    e ? Xt.set(r, { effect: e, inputs: t, cleanup: null }) : Xt.delete(r);
  }
  function ys(e, t) {
    return !!(!e || e.length !== t?.length || t?.some((n, r) => n !== e[r]));
  }

  // ../dist/util/lib-preact.js
  function rt(e) {
    (H.debounceRendering ?? queueMicrotask)(e);
  }
  var sr = "onfocusin", It = "onfocusout", ir = {
    dblclick: "onDblClick",
    focusin: "onfocusin",
    focusout: "onfocusout",
    formdata: "onFormData",
    toggle: "onToggle",
    ...So
  };

  // ../dist/preact-extensions/use-passive-state.js
  function Y(e, ...t) {
    if (Se !== "development")
      return;
    let n = A([]), r = A([]);
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
    let r = A(Ne), o = A(Ne), a = A(!1), l = A(Ne), u = A(void 0);
    Y("usePassiveState", e, t, n);
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
    ]), i = R(() => (a.current && console.warn("During onChange, prefer using the (value, prevValue) arguments instead of getValue -- it's ambiguous as to if you're asking for the old or new value at this point in time for this component."), r.current === Ne && f(), r.current === Ne ? void 0 : r.current), []);
    oe(() => {
      f();
    }, []);
    let c = R((d, p) => {
      let h = d instanceof Function ? d(r.current === Ne ? void 0 : r.current) : d;
      /*dependencyToCompareAgainst.current === Unset &&*/
      h !== r.current && (l.current = r.current, r.current = h, o.current = p, (n ?? rt)(() => {
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
    return [i, c];
  }
  var Ne = Symbol();
  function Pt() {
    return !0;
  }
  function xe() {
    return !1;
  }
  function _e() {
    return null;
  }
  function lr() {
    return 0;
  }
  function pe(e) {
    e();
  }

  // ../dist/preact-extensions/use-stable-getter.js
  var To = Symbol("unset");
  function X(e) {
    k(X);
    let t = A(To);
    return Tt(() => {
      t.current = e;
    }, [e]), R(() => {
      if (t.current === To)
        throw new Error("Value retrieved from useStableGetter() cannot be called during render.");
      return t.current;
    }, []);
  }
  function q(e) {
    return ue(() => e, Object.values(e));
  }

  // ../dist/preact-extensions/use-stable-callback.js
  var wo = /* @__PURE__ */ new WeakMap();
  function Io(e) {
    return wo.get(e) ?? !1;
  }
  function Po(e) {
    return wo.set(e, !0), e;
  }
  function E(e, t) {
    if (k(E), Y("useStableCallback", t == null, t?.length, Io(e)), Io(e))
      return e;
    if (t == null) {
      let n = X(e);
      return Po(R((...r) => n()(...r), []));
    } else
      return console.assert(t.length === 0), Po(R(e, []));
  }

  // ../dist/dom-helpers/use-event-handler.js
  function Te(e, t, n, r, o) {
    k(Te), o ||= "grouped", Y("useGlobalHandler", o), o === "grouped" ? Ts(e, t, n, r) : Is(e, t, n, r);
  }
  var Ro = /* @__PURE__ */ new Map();
  function ko(e, t, n, r, o) {
    if (r) {
      let a = JSON.stringify(o), l = Ro.get(t) || /* @__PURE__ */ new Map(), u = l.get(n) || /* @__PURE__ */ new Map(), m = u.get(a) || { listener: null, listeners: /* @__PURE__ */ new Set() };
      e(m, r), u.set(a, m), l.set(n, u), Ro.set(t, l);
    }
  }
  function Ss(e, t, n, r) {
    ko((o, a) => {
      o.listeners.add(a), o.listener == null && e.addEventListener(t, o.listener = (l) => o.listeners.forEach((u) => u(l)), r);
    }, e, t, n, r);
  }
  function Es(e, t, n, r) {
    ko((o, a) => {
      o.listeners.delete(a), o.listener == null && e.removeEventListener(t, o.listener = (l) => o.listeners.forEach((u) => u(l)), r);
    }, e, t, n, r);
  }
  function Ts(e, t, n, r) {
    let o = E(n ?? (() => {
    }));
    n == null && (o = null), j(() => {
      if (o)
        return Ss(e, t, o, r), () => Es(e, t, o, r);
    }, [e, t, o]);
  }
  function Is(e, t, n, r) {
    let o = E(n ?? (() => {
    }));
    n == null && (o = null), j(() => {
      if (o)
        return e.addEventListener(t, o, r), () => e.removeEventListener(t, o, r);
    }, [e, t, o]);
  }

  // ../dist/component-detail/dismissal/use-backdrop-dismiss.js
  function Qt({ backdropDismissParameters: { dismissBackdropActive: e, onDismissBackdrop: t, ...n }, refElementPopupReturn: { getElement: r, ...o }, ...a }) {
    k(Qt);
    let l = X(e), u = X(t), m = R(function(i) {
      if (!l())
        return;
      let c = r(), d = !1;
      i.target && c && c.contains(i.target) && (d = !0), d || u()?.(i);
    }, []);
    Te(window, "mousedown", e ? m : null, { capture: !0 }), Te(window, "touchstart", e ? m : null, { capture: !0 });
  }

  // ../dist/util/event.js
  var Fe = Symbol("event-detail");
  function Ie(e, t) {
    let n = e ?? {};
    return n[Fe] ??= {}, Object.assign(n[Fe], t), n;
  }

  // ../dist/component-detail/dismissal/use-escape-dismiss.js
  var No = "__preact-prop-helpers-escape-key-dismiss__";
  function Ps(e) {
    let t = 0, n = e.parentElement;
    for (; n; )
      t += 1, n = n.parentElement;
    return t;
  }
  function Yt({ escapeDismissParameters: { onDismissEscape: e, dismissEscapeActive: t, getDocument: n, parentDepth: r, ...o }, refElementPopupReturn: { getElement: a, ...l } }) {
    k(Yt);
    let u = X(e), m = E(n), f = X(r + 1);
    j(() => {
      let c = m().defaultView;
      c[No] ??= { microtaskQueued: !1, elementQueue: /* @__PURE__ */ new Map() };
      let d = c[No];
      if (t)
        return c.addEventListener("keydown", p, { capture: !0 }), () => {
          let h = a();
          h && d.elementQueue && d.elementQueue.delete(h), c.removeEventListener("keydown", p, { capture: !0 });
        };
      function p(h) {
        if (h.key == "Escape") {
          h.preventDefault(), h.stopPropagation();
          let C = () => {
            u()?.(Ie(h, { reason: "escape" }));
          }, g = a();
          if (g) {
            let v = Ps(g), b = f();
            d.elementQueue.set(g, { depth: b, onClose: C, treeDepth: v });
          }
          d.microtaskQueued || (d.microtaskQueued = !0, setTimeout(() => {
            let { elementQueue: v } = d;
            d.microtaskQueued = !1, d.elementQueue = /* @__PURE__ */ new Map();
            let b = -1 / 0, x = -1 / 0, _ = null, T = null;
            for (let [I, { depth: S, onClose: P, treeDepth: L }] of v) {
              let w = !1;
              S == b && L > x && (w = !0), (S > b || S == b && w) && (b = S, _ = I, x = L, T = P);
            }
            T?.();
          }, 0));
        }
      }
    }, [t]);
  }

  // ../dist/component-detail/dismissal/use-lost-focus-dismiss.js
  function Zt({ refElementPopupReturn: { getElement: e, ...t }, refElementSourceReturn: n, lostFocusDismissParameters: { dismissLostFocusActive: r, onDismissLostFocus: o, ...a }, ...l }) {
    k(Zt);
    let { getElement: u, ...m } = n ?? {};
    let f = X(o), i = X(r);
    return { activeElementParameters: { onLastActiveElementChange: R((d, p, h) => {
      let C = i(), g = u?.(), v = e();
      g?.contains(d) || v?.contains(d) || C && (console.assert(h != null), f()?.(h));
    }, [u]) } };
  }

  // ../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_freeGlobal.js
  var ws = typeof global == "object" && global && global.Object === Object && global, en = ws;

  // ../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_root.js
  var Rs = typeof self == "object" && self && self.Object === Object && self, ks = en || Rs || Function("return this")(), ot = ks;

  // ../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_Symbol.js
  var Ns = ot.Symbol, at = Ns;

  // ../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_getRawTag.js
  var Do = Object.prototype, Ds = Do.hasOwnProperty, Ls = Do.toString, wt = at ? at.toStringTag : void 0;
  function Fs(e) {
    var t = Ds.call(e, wt), n = e[wt];
    try {
      e[wt] = void 0;
      var r = !0;
    } catch {
    }
    var o = Ls.call(e);
    return r && (t ? e[wt] = n : delete e[wt]), o;
  }
  var Lo = Fs;

  // ../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_objectToString.js
  var Ms = Object.prototype, As = Ms.toString;
  function Os(e) {
    return As.call(e);
  }
  var Fo = Os;

  // ../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_baseGetTag.js
  var Hs = "[object Null]", Us = "[object Undefined]", Mo = at ? at.toStringTag : void 0;
  function js(e) {
    return e == null ? e === void 0 ? Us : Hs : Mo && Mo in Object(e) ? Lo(e) : Fo(e);
  }
  var He = js;

  // ../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/isObjectLike.js
  function Gs(e) {
    return e != null && typeof e == "object";
  }
  var Ue = Gs;

  // ../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/isSymbol.js
  var Bs = "[object Symbol]";
  function Ws(e) {
    return typeof e == "symbol" || Ue(e) && He(e) == Bs;
  }
  var Ao = Ws;

  // ../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_arrayMap.js
  function $s(e, t) {
    for (var n = -1, r = e == null ? 0 : e.length, o = Array(r); ++n < r; )
      o[n] = t(e[n], n, e);
    return o;
  }
  var Oo = $s;

  // ../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/isArray.js
  var Vs = Array.isArray, tn = Vs;

  // ../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_trimmedEndIndex.js
  var zs = /\s/;
  function qs(e) {
    for (var t = e.length; t-- && zs.test(e.charAt(t)); )
      ;
    return t;
  }
  var Ho = qs;

  // ../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_baseTrim.js
  var Ks = /^\s+/;
  function Js(e) {
    return e && e.slice(0, Ho(e) + 1).replace(Ks, "");
  }
  var Uo = Js;

  // ../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/isObject.js
  function Xs(e) {
    var t = typeof e;
    return e != null && (t == "object" || t == "function");
  }
  var Ke = Xs;

  // ../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/toNumber.js
  var jo = 0 / 0, Qs = /^[-+]0x[0-9a-f]+$/i, Ys = /^0b[01]+$/i, Zs = /^0o[0-7]+$/i, ei = parseInt;
  function ti(e) {
    if (typeof e == "number")
      return e;
    if (Ao(e))
      return jo;
    if (Ke(e)) {
      var t = typeof e.valueOf == "function" ? e.valueOf() : e;
      e = Ke(t) ? t + "" : t;
    }
    if (typeof e != "string")
      return e === 0 ? e : +e;
    e = Uo(e);
    var n = Ys.test(e);
    return n || Zs.test(e) ? ei(e.slice(2), n ? 2 : 8) : Qs.test(e) ? jo : +e;
  }
  var ur = ti;

  // ../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/identity.js
  function ni(e) {
    return e;
  }
  var Je = ni;

  // ../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/isFunction.js
  var ri = "[object AsyncFunction]", oi = "[object Function]", ai = "[object GeneratorFunction]", si = "[object Proxy]";
  function ii(e) {
    if (!Ke(e))
      return !1;
    var t = He(e);
    return t == oi || t == ai || t == ri || t == si;
  }
  var Go = ii;

  // ../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/noop.js
  function li() {
  }
  var Rt = li;

  // ../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_copyArray.js
  function ui(e, t) {
    var n = -1, r = e.length;
    for (t || (t = Array(r)); ++n < r; )
      t[n] = e[n];
    return t;
  }
  var Bo = ui;

  // ../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_isIndex.js
  var ci = 9007199254740991, di = /^(?:0|[1-9]\d*)$/;
  function fi(e, t) {
    var n = typeof e;
    return t = t ?? ci, !!t && (n == "number" || n != "symbol" && di.test(e)) && e > -1 && e % 1 == 0 && e < t;
  }
  var Wo = fi;

  // ../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/isLength.js
  var mi = 9007199254740991;
  function pi(e) {
    return typeof e == "number" && e > -1 && e % 1 == 0 && e <= mi;
  }
  var nn = pi;

  // ../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/isArrayLike.js
  function hi(e) {
    return e != null && nn(e.length) && !Go(e);
  }
  var $o = hi;

  // ../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_isPrototype.js
  var gi = Object.prototype;
  function bi(e) {
    var t = e && e.constructor, n = typeof t == "function" && t.prototype || gi;
    return e === n;
  }
  var Vo = bi;

  // ../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_baseTimes.js
  function vi(e, t) {
    for (var n = -1, r = Array(e); ++n < e; )
      r[n] = t(n);
    return r;
  }
  var zo = vi;

  // ../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_baseIsArguments.js
  var Ci = "[object Arguments]";
  function xi(e) {
    return Ue(e) && He(e) == Ci;
  }
  var cr = xi;

  // ../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/isArguments.js
  var qo = Object.prototype, _i = qo.hasOwnProperty, yi = qo.propertyIsEnumerable, Si = cr(function() {
    return arguments;
  }()) ? cr : function(e) {
    return Ue(e) && _i.call(e, "callee") && !yi.call(e, "callee");
  }, Ko = Si;

  // ../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/stubFalse.js
  function Ei() {
    return !1;
  }
  var Jo = Ei;

  // ../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/isBuffer.js
  var Yo = typeof exports == "object" && exports && !exports.nodeType && exports, Xo = Yo && typeof module == "object" && module && !module.nodeType && module, Ti = Xo && Xo.exports === Yo, Qo = Ti ? ot.Buffer : void 0, Ii = Qo ? Qo.isBuffer : void 0, Pi = Ii || Jo, Zo = Pi;

  // ../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_baseIsTypedArray.js
  var wi = "[object Arguments]", Ri = "[object Array]", ki = "[object Boolean]", Ni = "[object Date]", Di = "[object Error]", Li = "[object Function]", Fi = "[object Map]", Mi = "[object Number]", Ai = "[object Object]", Oi = "[object RegExp]", Hi = "[object Set]", Ui = "[object String]", ji = "[object WeakMap]", Gi = "[object ArrayBuffer]", Bi = "[object DataView]", Wi = "[object Float32Array]", $i = "[object Float64Array]", Vi = "[object Int8Array]", zi = "[object Int16Array]", qi = "[object Int32Array]", Ki = "[object Uint8Array]", Ji = "[object Uint8ClampedArray]", Xi = "[object Uint16Array]", Qi = "[object Uint32Array]", ae = {};
  ae[Wi] = ae[$i] = ae[Vi] = ae[zi] = ae[qi] = ae[Ki] = ae[Ji] = ae[Xi] = ae[Qi] = !0;
  ae[wi] = ae[Ri] = ae[Gi] = ae[ki] = ae[Bi] = ae[Ni] = ae[Di] = ae[Li] = ae[Fi] = ae[Mi] = ae[Ai] = ae[Oi] = ae[Hi] = ae[Ui] = ae[ji] = !1;
  function Yi(e) {
    return Ue(e) && nn(e.length) && !!ae[He(e)];
  }
  var ea = Yi;

  // ../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_baseUnary.js
  function Zi(e) {
    return function(t) {
      return e(t);
    };
  }
  var ta = Zi;

  // ../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_nodeUtil.js
  var na = typeof exports == "object" && exports && !exports.nodeType && exports, kt = na && typeof module == "object" && module && !module.nodeType && module, el = kt && kt.exports === na, dr = el && en.process, tl = function() {
    try {
      var e = kt && kt.require && kt.require("util").types;
      return e || dr && dr.binding && dr.binding("util");
    } catch {
    }
  }(), fr = tl;

  // ../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/isTypedArray.js
  var ra = fr && fr.isTypedArray, nl = ra ? ta(ra) : ea, oa = nl;

  // ../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_arrayLikeKeys.js
  var rl = Object.prototype, ol = rl.hasOwnProperty;
  function al(e, t) {
    var n = tn(e), r = !n && Ko(e), o = !n && !r && Zo(e), a = !n && !r && !o && oa(e), l = n || r || o || a, u = l ? zo(e.length, String) : [], m = u.length;
    for (var f in e)
      (t || ol.call(e, f)) && !(l && // Safari 9 has enumerable `arguments.length` in strict mode.
      (f == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
      o && (f == "offset" || f == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
      a && (f == "buffer" || f == "byteLength" || f == "byteOffset") || // Skip index properties.
      Wo(f, m))) && u.push(f);
    return u;
  }
  var aa = al;

  // ../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_overArg.js
  function sl(e, t) {
    return function(n) {
      return e(t(n));
    };
  }
  var sa = sl;

  // ../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_nativeKeys.js
  var il = sa(Object.keys, Object), ia = il;

  // ../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_baseKeys.js
  var ll = Object.prototype, ul = ll.hasOwnProperty;
  function cl(e) {
    if (!Vo(e))
      return ia(e);
    var t = [];
    for (var n in Object(e))
      ul.call(e, n) && n != "constructor" && t.push(n);
    return t;
  }
  var la = cl;

  // ../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/keys.js
  function dl(e) {
    return $o(e) ? aa(e) : la(e);
  }
  var ua = dl;

  // ../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/now.js
  var fl = function() {
    return ot.Date.now();
  }, rn = fl;

  // ../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/debounce.js
  var ml = "Expected a function", pl = Math.max, hl = Math.min;
  function gl(e, t, n) {
    var r, o, a, l, u, m, f = 0, i = !1, c = !1, d = !0;
    if (typeof e != "function")
      throw new TypeError(ml);
    t = ur(t) || 0, Ke(n) && (i = !!n.leading, c = "maxWait" in n, a = c ? pl(ur(n.maxWait) || 0, t) : a, d = "trailing" in n ? !!n.trailing : d);
    function p(I) {
      var S = r, P = o;
      return r = o = void 0, f = I, l = e.apply(P, S), l;
    }
    function h(I) {
      return f = I, u = setTimeout(v, t), i ? p(I) : l;
    }
    function C(I) {
      var S = I - m, P = I - f, L = t - S;
      return c ? hl(L, a - P) : L;
    }
    function g(I) {
      var S = I - m, P = I - f;
      return m === void 0 || S >= t || S < 0 || c && P >= a;
    }
    function v() {
      var I = rn();
      if (g(I))
        return b(I);
      u = setTimeout(v, C(I));
    }
    function b(I) {
      return u = void 0, d && r ? p(I) : (r = o = void 0, l);
    }
    function x() {
      u !== void 0 && clearTimeout(u), f = 0, r = m = o = u = void 0;
    }
    function _() {
      return u === void 0 ? l : b(rn());
    }
    function T() {
      var I = rn(), S = g(I);
      if (r = arguments, o = this, m = I, S) {
        if (u === void 0)
          return h(m);
        if (c)
          return clearTimeout(u), u = setTimeout(v, t), p(m);
      }
      return u === void 0 && (u = setTimeout(v, t)), l;
    }
    return T.cancel = x, T.flush = _, T;
  }
  var mr = gl;

  // ../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_baseValues.js
  function bl(e, t) {
    return Oo(t, function(n) {
      return e[n];
    });
  }
  var ca = bl;

  // ../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/values.js
  function vl(e) {
    return e == null ? [] : ca(e, ua(e));
  }
  var da = vl;

  // ../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_baseRandom.js
  var Cl = Math.floor, xl = Math.random;
  function _l(e, t) {
    return e + Cl(xl() * (t - e + 1));
  }
  var fa = _l;

  // ../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_shuffleSelf.js
  function yl(e, t) {
    var n = -1, r = e.length, o = r - 1;
    for (t = t === void 0 ? r : t; ++n < t; ) {
      var a = fa(n, o), l = e[a];
      e[a] = e[n], e[n] = l;
    }
    return e.length = t, e;
  }
  var on = yl;

  // ../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_arrayShuffle.js
  function Sl(e) {
    return on(Bo(e));
  }
  var ma = Sl;

  // ../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_baseShuffle.js
  function El(e) {
    return on(da(e));
  }
  var pa = El;

  // ../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/shuffle.js
  function Tl(e) {
    var t = tn(e) ? ma : pa;
    return t(e);
  }
  var pr = Tl;

  // ../dist/dom-helpers/use-merged-children.js
  function an(e, t) {
    if (k(an), !(e == null && t == null))
      return e == null ? t : t == null ? e : fe(ge, {}, e, t);
  }

  // ../dist/dom-helpers/use-merged-classes.js
  function sn(...e) {
    k(sn);
    let t = /* @__PURE__ */ new Set();
    for (let n of e)
      typeof n == "string" && n.trim() && t.add(n);
    if (t.size)
      return Array.from(t).join(" ");
  }

  // ../dist/dom-helpers/use-merged-refs.js
  function ha(e, t) {
    if (typeof t == "function")
      t(e);
    else if (t != null)
      t.current = e;
    else {
      debugger;
      console.assert(!1, "Unknown ref type found that was neither a RefCallback nor a RefObject");
    }
  }
  function ln(e, t) {
    k(ln);
    let n = E(function(o) {
      ha(o, t), ha(o, e);
    });
    if (!(t == null && e == null))
      return t == null ? e : e == null ? t : n;
  }

  // ../dist/dom-helpers/use-merged-styles.js
  function ga(e) {
    return Object.fromEntries(e.split(";").map((t) => t.split(":")));
  }
  function st(e, t) {
    if (k(st), !(!e && !t)) {
      if (typeof e != typeof t) {
        if (e && !t)
          return e;
        if (!e && t)
          return t;
        if (e && t) {
          if (typeof e == "string")
            return st(ga(e), t);
          if (typeof t == "string")
            return st(e, ga(t));
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
  var Il = console.warn;
  function B(...e) {
    k(B), Y("useMergedProps", e.length);
    let t = {};
    for (let n of e)
      t = wl(t, n);
    return t;
  }
  var ba = /* @__PURE__ */ new Set(["children", "ref", "className", "class", "style"]);
  function Pl(e, t, n) {
    return typeof t == "function" || typeof n == "function" ? va(t, n) : t == null && n == null ? n === null && t === void 0 ? n : t : t == null ? n : n == null ? t : (n == t || Il?.(`The prop "${e}" cannot simultaneously be the values ${t} and ${n}. One must be chosen outside of useMergedProps.`), n);
  }
  function wl(e, t) {
    let n = {
      ref: ln(e.ref, t.ref),
      style: st(e.style, t.style),
      className: sn(e.class, e.className, t.class, t.className),
      children: an(e.children, t.children)
    };
    n.ref === void 0 && delete n.ref, n.style === void 0 && delete n.style, n.className === void 0 && delete n.className, n.class === void 0 && delete n.class, n.children === void 0 && delete n.children;
    for (let r in e) {
      let o = r;
      ba.has(o) || (n[o] = e[o]);
    }
    for (let r in t) {
      let o = r;
      ba.has(o) || (n[o] = Pl(o, n[o], t[o]));
    }
    return n;
  }
  function va(e, t) {
    return e ? t ? (...n) => {
      let r = e(...n), o = t(...n);
      if (r instanceof Promise || o instanceof Promise)
        return Promise.all([r, o]);
    } : e : t;
  }

  // ../node_modules/.pnpm/tabbable@6.2.0/node_modules/tabbable/dist/index.esm.js
  var xa = ["input:not([inert])", "select:not([inert])", "textarea:not([inert])", "a[href]:not([inert])", "button:not([inert])", "[tabindex]:not(slot):not([inert])", "audio[controls]:not([inert])", "video[controls]:not([inert])", '[contenteditable]:not([contenteditable="false"]):not([inert])', "details>summary:first-of-type:not([inert])", "details:not([inert])"], Rl = /* @__PURE__ */ xa.join(","), _a = typeof Element > "u", Nt = _a ? function() {
  } : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector, un = !_a && Element.prototype.getRootNode ? function(e) {
    var t;
    return e == null || (t = e.getRootNode) === null || t === void 0 ? void 0 : t.call(e);
  } : function(e) {
    return e?.ownerDocument;
  }, kl = function e(t, n) {
    var r;
    n === void 0 && (n = !0);
    var o = t == null || (r = t.getAttribute) === null || r === void 0 ? void 0 : r.call(t, "inert"), a = o === "" || o === "true", l = a || n && t && e(t.parentNode);
    return l;
  }, Nl = function(t) {
    var n, r = t == null || (n = t.getAttribute) === null || n === void 0 ? void 0 : n.call(t, "contenteditable");
    return r === "" || r === "true";
  };
  var Dl = function(t) {
    return !isNaN(parseInt(t.getAttribute("tabindex"), 10));
  }, Ll = function(t) {
    if (!t)
      throw new Error("No node provided");
    return t.tabIndex < 0 && (/^(AUDIO|VIDEO|DETAILS)$/.test(t.tagName) || Nl(t)) && !Dl(t) ? 0 : t.tabIndex;
  };
  var ya = function(t) {
    return t.tagName === "INPUT";
  }, Fl = function(t) {
    return ya(t) && t.type === "hidden";
  }, Ml = function(t) {
    var n = t.tagName === "DETAILS" && Array.prototype.slice.apply(t.children).some(function(r) {
      return r.tagName === "SUMMARY";
    });
    return n;
  }, Al = function(t, n) {
    for (var r = 0; r < t.length; r++)
      if (t[r].checked && t[r].form === n)
        return t[r];
  }, Ol = function(t) {
    if (!t.name)
      return !0;
    var n = t.form || un(t), r = function(u) {
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
    var a = Al(o, t.form);
    return !a || a === t;
  }, Hl = function(t) {
    return ya(t) && t.type === "radio";
  }, Ul = function(t) {
    return Hl(t) && !Ol(t);
  }, jl = function(t) {
    var n, r = t && un(t), o = (n = r) === null || n === void 0 ? void 0 : n.host, a = !1;
    if (r && r !== t) {
      var l, u, m;
      for (a = !!((l = o) !== null && l !== void 0 && (u = l.ownerDocument) !== null && u !== void 0 && u.contains(o) || t != null && (m = t.ownerDocument) !== null && m !== void 0 && m.contains(t)); !a && o; ) {
        var f, i, c;
        r = un(o), o = (f = r) === null || f === void 0 ? void 0 : f.host, a = !!((i = o) !== null && i !== void 0 && (c = i.ownerDocument) !== null && c !== void 0 && c.contains(o));
      }
    }
    return a;
  }, Ca = function(t) {
    var n = t.getBoundingClientRect(), r = n.width, o = n.height;
    return r === 0 && o === 0;
  }, Gl = function(t, n) {
    var r = n.displayCheck, o = n.getShadowRoot;
    if (getComputedStyle(t).visibility === "hidden")
      return !0;
    var a = Nt.call(t, "details>summary:first-of-type"), l = a ? t.parentElement : t;
    if (Nt.call(l, "details:not([open]) *"))
      return !0;
    if (!r || r === "full" || r === "legacy-full") {
      if (typeof o == "function") {
        for (var u = t; t; ) {
          var m = t.parentElement, f = un(t);
          if (m && !m.shadowRoot && o(m) === !0)
            return Ca(t);
          t.assignedSlot ? t = t.assignedSlot : !m && f !== t.ownerDocument ? t = f.host : t = m;
        }
        t = u;
      }
      if (jl(t))
        return !t.getClientRects().length;
      if (r !== "legacy-full")
        return !0;
    } else if (r === "non-zero-area")
      return Ca(t);
    return !1;
  }, Bl = function(t) {
    if (/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(t.tagName))
      for (var n = t.parentElement; n; ) {
        if (n.tagName === "FIELDSET" && n.disabled) {
          for (var r = 0; r < n.children.length; r++) {
            var o = n.children.item(r);
            if (o.tagName === "LEGEND")
              return Nt.call(n, "fieldset[disabled] *") ? !0 : !o.contains(t);
          }
          return !0;
        }
        n = n.parentElement;
      }
    return !1;
  }, Sa = function(t, n) {
    return !(n.disabled || // we must do an inert look up to filter out any elements inside an inert ancestor
    //  because we're limited in the type of selectors we can use in JSDom (see related
    //  note related to `candidateSelectors`)
    kl(n) || Fl(n) || Gl(n, t) || // For a details element with a summary, the summary element gets the focus
    Ml(n) || Bl(n));
  }, Wl = function(t, n) {
    return !(Ul(n) || Ll(n) < 0 || !Sa(t, n));
  };
  var cn = function(t, n) {
    if (n = n || {}, !t)
      throw new Error("No node provided");
    return Nt.call(t, Rl) === !1 ? !1 : Wl(n, t);
  }, $l = /* @__PURE__ */ xa.concat("iframe").join(","), Ea = function(t, n) {
    if (n = n || {}, !t)
      throw new Error("No node provided");
    return Nt.call(t, $l) === !1 ? !1 : Sa(n, t);
  };

  // ../dist/util/stack.js
  function dn() {
    if (Se === "development" && window._generate_setState_stacks)
      try {
        throw new Error();
      } catch (e) {
        return e.stack;
      }
  }
  function Dt() {
    if (Se === "development") {
      let e = ue(dn, []);
      return R(() => e, []);
    } else
      return Vl;
  }
  function Vl() {
    return "";
  }

  // ../dist/util/focus.js
  function we(e) {
    Se === "development" && window.LOG_FOCUS_CHANGES === !0 && (console.log(`Focus changed to ${(e?.tagName || "").toLowerCase().padStart(6)}:`, e), console.log(dn())), e?.focus?.();
  }
  function hr(e) {
    if (e == null)
      return globalThis.document.body;
    let t = e.ownerDocument, n = t.createTreeWalker(t.body, NodeFilter.SHOW_ELEMENT), r = n.firstChild(), o = null, a = null, l = !1;
    for (; r; ) {
      let u = r.compareDocumentPosition(e);
      if (u & Node.DOCUMENT_POSITION_DISCONNECTED && (l || console.warn("Can't focus anything near a disconnected element"), l = !0), u & Node.DOCUMENT_POSITION_PRECEDING) {
        if (r instanceof Element && cn(r)) {
          a = r;
          break;
        }
      } else
        u & Node.DOCUMENT_POSITION_FOLLOWING && r instanceof Element && cn(r) && (o = r);
      r = n.nextNode();
    }
    return a ?? o ?? t.body;
  }

  // ../dist/timing/use-timeout.js
  function je({ timeout: e, callback: t, triggerIndex: n }) {
    k(je);
    let r = E(() => {
      a.current = null, t();
    }), o = X(e), a = A(null), l = e == null;
    j(() => {
      if (!l) {
        let f = o();
        if (console.assert(l == (f == null)), f != null) {
          a.current = +/* @__PURE__ */ new Date();
          let i = setTimeout(r, f);
          return () => clearTimeout(i);
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
  var zl = 0;
  function be(e, t) {
    if (Se === "development" && window._generate_useTagProps_tags) {
      let [n] = le(() => ++zl), r = `data-props-${t}-${n}`, o = Dt();
      return console.assert(!(e && typeof e == "object" && t in e)), je({
        callback: () => {
          if (document.querySelectorAll(`[${r}]`).length != 1) {
            console.error("A hook returned props that were not properly spread to any HTMLElement:"), console.log(o());
            debugger;
          }
        },
        timeout: 250,
        triggerIndex: t
      }), ue(() => ({
        ...e,
        [r]: !0
        /*, [tag as never]: true*/
      }), [e, t]);
    } else
      return e;
  }

  // ../dist/component-detail/keyboard-navigation/use-linear-navigation.js
  function fn({ linearNavigationParameters: { getLowestIndex: e, getHighestIndex: t, isValidForLinearNavigation: n, navigatePastEnd: r, navigatePastStart: o, onNavigateLinear: a, arrowKeyDirection: l, disableHomeEndKeys: u, pageNavigationSize: m, ...f }, rovingTabIndexReturn: { getTabbableIndex: i, setTabbableIndex: c, ...d }, paginatedChildrenParameters: { paginationMax: p, paginationMin: h, ...C }, rearrangeableChildrenReturn: { indexDemangler: g, indexMangler: v, ...b }, ...x }) {
    k(fn);
    let _ = X(p == null || h == null ? null : p - h);
    Y("useLinearNavigation", a, n, g, v);
    let T = R((y, M, O, U, $) => {
      let G = t(), W = e(), Q = i() ?? 0, Z = g(y), { status: ie, valueDemangled: te } = Pa({ isValid: n, lowestChildIndex: W, highestChildIndex: G, indexDemangler: g, indexMangler: v, searchDirection: M, targetDemangled: Z });
      return ie == "past-end" ? r == "wrap" ? ($ == "single" ? I(O, U) : S(O, U), "stop") : r == "passthrough" ? "passthrough" : (r(), "stop") : ie == "past-start" ? o == "wrap" ? ($ == "single" ? S(O, U) : I(O, U), "stop") : o == "passthrough" ? "passthrough" : (o(), "stop") : (c(te, O, U), a?.(te, O), "stop");
    }, []), I = E((y, M) => T(e(), -1, y, M, "single")), S = E((y, M) => T(t(), 1, y, M, "single")), P = E((y, M, O, U) => {
      let $ = t(), G = Math.sign(M) || 1, W = i() ?? 0, Q = v(W) + M;
      return T(Q, G, y, O, U);
    }), L = E((y, M) => P(y, 1, M, "single")), w = E((y, M) => P(y, -1, M, "single")), D = A(be({
      onKeyDown: E((y) => {
        if (y.metaKey)
          return;
        let M = l == "vertical" || l == "either", O = l == "horizontal" || l == "either", U = t() - e(), $ = _() ?? U, G = m;
        G != null && G < 1 && (G = Math.round(G * Math.max(10, $ + 1)));
        let W = "passthrough", Q = !0;
        switch (y.key) {
          case "ArrowUp":
          case "ArrowDown":
            Q = M;
            break;
          case "ArrowLeft":
          case "ArrowRight":
            Q = O;
            break;
        }
        if (Q)
          switch (y.key) {
            case "ArrowUp":
            case "ArrowLeft":
              W = w(y, !0);
              break;
            case "ArrowDown":
            case "ArrowRight":
              W = L(y, !0);
              break;
            case "PageUp":
            case "PageDown":
              if (G == null)
                break;
              G > 0 && (W = P(y, G * (y.key.endsWith("n") ? 1 : -1), !0, "page"));
              break;
            case "Home":
            case "End":
              u || (y.key.endsWith("e") ? I(y, !0) : S(y, !0), W = "stop");
              break;
          }
        W && W != "passthrough" && (y.preventDefault(), y.stopPropagation());
      })
    }, "data-linear-navigation"));
    return {
      linearNavigationReturn: {},
      propsStable: D.current
    };
  }
  function Pa({ isValid: e, highestChildIndex: t, lowestChildIndex: n, searchDirection: r, indexDemangler: o, indexMangler: a, targetDemangled: l }) {
    if (r === -1) {
      let u;
      return u = Ta({ isValid: e, indexDemangler: o, indexMangler: a, targetDemangled: l, lowestChildIndex: n }), u ??= Ia({ isValid: e, indexDemangler: o, indexMangler: a, targetDemangled: l, highestChildIndex: t }), u || { valueDemangled: l, status: "normal" };
    } else {
      let u;
      return u = Ia({ isValid: e, indexDemangler: o, indexMangler: a, targetDemangled: l, highestChildIndex: t }), u ??= Ta({ isValid: e, indexDemangler: o, indexMangler: a, targetDemangled: l, lowestChildIndex: n }), u || { valueDemangled: l, status: "normal" };
    }
  }
  function Ta({ isValid: e, indexDemangler: t, indexMangler: n, lowestChildIndex: r, targetDemangled: o }) {
    for (; o >= r && !e(o); )
      o = t(n(o) - 1);
    if (e(o))
      return o < r ? { valueDemangled: t(r), status: "past-start" } : { valueDemangled: o, status: "normal" };
  }
  function Ia({ isValid: e, indexDemangler: t, indexMangler: n, targetDemangled: r, highestChildIndex: o }) {
    for (; r <= o && !e(r); )
      r = t(n(r) + 1);
    if (e(r))
      return r > o ? { valueDemangled: t(o), status: "past-end" } : { valueDemangled: r, status: "normal" };
  }

  // ../dist/preact-extensions/use-managed-children.js
  function Me(e) {
    k(Me);
    let { managedChildrenParameters: { onAfterChildLayoutEffect: t, onChildrenMountChange: n, onChildrenCountChange: r }, ...o } = e;
    Y("useManagedChildren", t, n, r);
    let a = R(() => u.current.highestIndex, []), l = R(() => u.current.lowestIndex, []), u = A({ arr: [], rec: {}, highestIndex: 0, lowestIndex: 0 }), m = R((g) => {
      for (let v of u.current.arr)
        if (v && g(v) == "break")
          return;
      for (let v in u.current.rec) {
        let b = u.current.rec[v];
        if (b && g(b) == "break")
          return;
      }
    }, []), f = R((g) => typeof g == "number" ? u.current.arr[g] : u.current.rec[g], []), i = A(null), c = A(/* @__PURE__ */ new Set()), d = R((g) => (c.current.size == 0 && t != null && rt(() => {
      t?.(c.current), c.current.clear();
    }), c.current.add(g), () => {
    }), [
      /* Must remain stable */
    ]), p = R((g, v) => {
      if (i.current || (i.current = {
        mounts: /* @__PURE__ */ new Set(),
        unmounts: /* @__PURE__ */ new Set()
      }, rt(() => {
        (r || n) && (n?.(i.current.mounts, i.current.unmounts), r?.(C().getHighestIndex() + 1), i.current = null);
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
      i?.current?.[v ? "mounts" : "unmounts"]?.add?.(g);
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
    return oe(() => {
      if (!(r == null || a == null))
        return typeof l == "number" ? r.arr[l] = { ...t } : r.rec[l] = { ...t }, a(l);
    }, [...Object.entries(t).flat(9)]), oe(() => (o?.(l, !0), () => o?.(l, !1)), [l]), {
      managedChildReturn: { getChildren: n }
    };
  }
  function Lt({ getChildren: e, initialIndex: t, closestFit: n, onClosestFit: r, onIndexChange: o, getAt: a, setAt: l, isValid: u }) {
    Y("useChildrenFlag", o, a, l, u);
    let [m, f] = z(o), [i, c] = z(null), d = R((g) => {
      let v = e(), b = 1 / 0, x = null;
      return v.forEach((_) => {
        if (_ != null && u(_)) {
          console.assert(typeof _.index == "number", "closestFit can only be used when each child has a numeric index, and cannot be used when children use string indices instead.");
          let T = Math.abs(_.index - g);
          (T < b || T == b && _.index < g) && (b = T, x = _.index);
        }
      }), x;
    }, [
      /* Must remain stable! */
    ]);
    n && console.assert(r != null, "When closestFit is used, onClosestFit must be provided");
    let p = E((g) => {
      let v = e(), b = i(), x = m(), _ = x == null ? null : v.getAt(x);
      if (b != null && n && (b != x || _ == null || !u(_))) {
        console.assert(typeof b == "number", "closestFit can only be used when each child has a numeric index, and cannot be used when children use string indices instead.");
        let T = d(b);
        if (f(T, g), _ && l(_, !1, T, x), T != null) {
          let I = v.getAt(T);
          console.assert(I != null, "Internal logic???"), l(I, !0, T, x), r(T);
        } else
          r(null);
      }
    }), h = A(void 0), C = R((g, v) => {
      let b = e(), x = g instanceof Function ? g(i()) : g;
      h.current = v, c(x, v);
      let _ = m();
      if (_ == x)
        return x;
      let T = x == null ? null : b.getAt(x), I = _ == null ? null : b.getAt(_);
      if (x == null)
        return f(null, v), I && l(I, !1, x, _), null;
      if (T && u(T) || !n)
        return f(x, v), I && l(I, !1, x, _), T && l(T, !0, x, _), x;
      {
        console.assert(n), console.assert(typeof x == "number", "closestFit can only be used when each child has a numeric index, and cannot be used when children use string indices instead.");
        let P = d(x);
        return f(P, v), P != null ? (T = b.getAt(P), console.assert(T != null, "Internal logic???"), I && l(I, !1, P, _), l(T, !0, P, _), P) : (I && l(I, !1, P, _), null);
      }
    }, []);
    return oe(() => {
      C(t ?? null, h.current);
    }, []), { changeIndex: C, reevaluateClosestFit: p, getCurrentIndex: m };
  }

  // ../dist/preact-extensions/use-state.js
  function N(e) {
    let t = Dt();
    k(N);
    let [n, r] = le(e), o = A(n), a = R((u) => {
      if (Se === "development" && (window._setState_stack = t()), typeof u == "function") {
        let m = u;
        r((f) => {
          let i = m(f);
          return o.current !== i && (o.current = i), o.current = i, i;
        });
      } else
        o.current !== u && (o.current = u), o.current = u, r(u);
    }, []), l = R(() => o.current, []);
    return [n, a, l];
  }

  // ../dist/component-detail/keyboard-navigation/use-roving-tabindex.js
  function mn({ managedChildrenReturn: { getChildren: e }, rovingTabIndexParameters: { focusSelfParent: t, untabbable: n, untabbableBehavior: r, initiallyTabbedIndex: o, onTabbableIndexChange: a }, refElementReturn: { getElement: l }, ...u }) {
    k(mn);
    let m = E(t);
    r ||= "focus-parent";
    let f = A(null);
    let i = X(o), c = X(n), d = E((S, P, L) => {
      let w = e();
      return b(function(y) {
        let M = typeof S == "function" ? S(y ?? null) : S, O = c(), U = l();
        if (console.assert(!!U), M != null && h(M, P), O || M == null)
          return !U.contains(document.activeElement) && r != "leave-child-focused" && m(U), null;
        if (y != M) {
          let $ = w.getAt(M);
          if ($ != null && L) {
            let G = $.getElement();
            G && (document.activeElement == document.body || document.activeElement == null || !G.contains(document.activeElement)) && $.focusSelf(G);
          }
        }
        return M != null && h(M, P), M ?? 0;
      }, P);
    }), [p, h] = z(null, R(() => o ?? 0, []));
    j(() => {
      let S = l()?.contains(document.activeElement);
      b(n ? null : p(), void 0), S && T(!0);
    }, [n]);
    let C = R((S) => S.getLocallyTabbable(), []), g = R((S, P) => {
      S.setLocallyTabbable(P);
    }, []), v = E((S) => !S.untabbable), { changeIndex: b, getCurrentIndex: x, reevaluateClosestFit: _ } = Lt({
      initialIndex: o ?? (n ? null : 0),
      onIndexChange: E((S, P, L) => {
        !(S == null && n) && S != p() && a?.(S, P, L);
      }),
      getChildren: e,
      closestFit: !0,
      getAt: C,
      isValid: v,
      setAt: g,
      onClosestFit: (S) => {
        if (document.activeElement == null || document.activeElement == document.body) {
          let P = S == null ? null : e().getAt(S)?.getElement();
          S == null || P == null ? hr(l()).focus() : e().getAt(S)?.focusSelf(P);
        }
      }
    }), T = R((S, P) => {
      let L = e(), w = x(), D = c();
      if (D || (w ??= i() ?? L.getLowestIndex()), D)
        document.activeElement != l() && (S || r != "leave-child-focused") && m(l());
      else if (!D && w != null) {
        let y = L.getAt(w)?.getElement();
        L.getAt(w)?.focusSelf?.(y);
      } else
        d(null, P, !0);
    }, []), I = q({
      setTabbableIndex: d,
      parentFocusSelf: T,
      getInitiallyTabbedIndex: R(() => o ?? (n ? null : 0), []),
      reevaluateClosestFit: _,
      getUntabbable: X(n),
      getUntabbableBehavior: X(r),
      giveParentFocusedElement: R((S) => {
        f.current = S;
      }, [])
    });
    return {
      managedChildrenParameters: { onChildrenMountChange: R(() => {
        _(void 0);
      }, [_]) },
      rovingTabIndexReturn: { setTabbableIndex: d, getTabbableIndex: x, focusSelf: T },
      context: q({ rovingTabIndexContext: I }),
      props: be({
        // Note: Making this -1 instead of null is partially intentional --
        // it gives us time during useEffect to move focus back to the last focused element
        // (otherwise focus gets lost to the body, and useEffect thinks that it shouldn't
        // focus the child because focus wasn't within the list). 
        // It's also just consistent. 
        tabIndex: n ? 0 : -1,
        // When a hidden child is clicked, some browsers focus the parent, just because it's got a role and a tabindex.
        onFocus: E((S) => {
          let P = l();
          console.assert(!!P), S.target == l() && (n || T(!1, S));
        })
      }, "data-roving-tab-index")
    };
  }
  function pn({ info: { index: e, untabbable: t, ...n }, context: { rovingTabIndexContext: { giveParentFocusedElement: r, getUntabbable: o, getUntabbableBehavior: a, reevaluateClosestFit: l, setTabbableIndex: u, getInitiallyTabbedIndex: m, parentFocusSelf: f } }, refElementReturn: { getElement: i }, ...c }) {
    k(pn);
    let [d, p, h] = N(m() === e);
    return j(() => {
      l(void 0);
    }, [!!t]), j(() => {
      d && r(i());
    }, [d]), {
      hasCurrentFocusParameters: {
        onCurrentFocusedInnerChanged: E((C, g, v) => {
          if (C) {
            let b = o(), x = a();
            !b && !t || x != "focus-parent" ? u(e, v, !1) : f(!1);
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
  function hn({ refElementReturn: { getElement: e }, textContentParameters: { getText: t, onTextContentChange: n } }) {
    k(hn);
    let [r, o] = z(n, _e, pe);
    return j(() => {
      let a = e();
      if (a) {
        let l = t(a);
        l && o(l);
      }
    }), { textContentReturn: { getTextContent: r } };
  }

  // ../dist/component-detail/keyboard-navigation/use-typeahead-navigation.js
  function bn({ typeaheadNavigationParameters: { collator: e, typeaheadTimeout: t, noTypeahead: n, isValidForTypeaheadNavigation: r, onNavigateTypeahead: o, ...a }, rovingTabIndexReturn: { getTabbableIndex: l, setTabbableIndex: u, ...m }, ...f }) {
    k(bn);
    let [i, c] = z(E((w, D, y) => {
      let M = setTimeout(() => {
        c(null, void 0), h("none");
      }, t ?? 1e3);
      return L(w, y), () => clearTimeout(M);
    })), d = A([]), [p, h] = N("none"), [, C, g] = N(!1), [v, b] = N(null);
    oe(() => {
      v !== null && (c((w) => (w ?? "") + v, void 0), b(null));
    }, [v]);
    let x = E((w, D) => {
      let y;
      return w = w.normalize("NFD"), D = D.normalize("NFD"), e ? y = e.compare(w, D) : y = w.toLowerCase().localeCompare(D.toLowerCase() ?? ""), y;
    }), _ = E((w, D) => typeof w == "string" && typeof D.text == "string" ? x(w, D.text) : w - D), T = E((w, D) => typeof w == "string" && typeof D.text == "string" ? x(w, D.text.substring(0, w.length)) : w - D), I = X(n), S = A(be({
      onKeyDown: E((w) => {
        if (I())
          return;
        let D = g(), y = w.key;
        if (w.ctrlKey || w.metaKey)
          return;
        if (!D && w.key === "Backspace") {
          c((O) => O == null ? null : [...O].reverse().slice(1).reverse().join(""), w), w.preventDefault(), w.stopPropagation();
          return;
        }
        (y.length === 1 || !/^[A-Za-z]/.test(y)) && (y == " " && (i() ?? "").trim().length == 0 || (w.preventDefault(), w.stopPropagation(), D || b(y)));
      }),
      onCompositionStart: E((w) => {
        b(w.data), C(!1);
      }),
      onCompositionEnd: E((w) => {
        C(!0);
      })
    }, "data-typeahead-navigation")), P = E(() => p != "none");
    return {
      context: q({
        typeaheadNavigationContext: q({
          insertingComparator: _,
          sortedTypeaheadInfo: d.current,
          excludeSpace: P
        })
      }),
      typeaheadNavigationReturn: {
        getCurrentTypeahead: i,
        typeaheadStatus: p
      },
      propsStable: S.current
    };
    function L(w, D) {
      if (w && d.current.length) {
        let y = gn(d.current, w, T);
        if (y < 0)
          h("invalid");
        else {
          h("valid");
          let M = null, O = y, U = null, $ = y, G = (Z) => {
            r(Z) && ((M == null || Z < M) && (M = Z, O = W), (U == null || Z < U) && Z > (l() ?? -1 / 0) && (U = Z, $ = W));
          }, W = y;
          for (; W >= 0 && T(w, d.current[W]) == 0; )
            G(d.current[W].unsortedIndex), --W;
          for (W = y; W < d.current.length && T(w, d.current[W]) == 0; )
            G(d.current[W].unsortedIndex), ++W;
          let Q = null;
          U !== null ? Q = d.current[$].unsortedIndex : M !== null && (Q = d.current[O].unsortedIndex), Q != null && (u(Q, D, !0), o?.(Q, D));
        }
      }
    }
  }
  function vn({ info: { index: e, ...t }, textContentParameters: { getText: n, ...r }, context: { typeaheadNavigationContext: { sortedTypeaheadInfo: o, insertingComparator: a, excludeSpace: l, ...u } }, refElementReturn: { getElement: m, ...f }, ...i }) {
    k(vn);
    let { textContentReturn: c } = hn({
      refElementReturn: { getElement: m },
      textContentParameters: {
        getText: n,
        onTextContentChange: R((d) => {
          if (d) {
            let p = gn(o, d, a);
            return console.assert(p < 0 || a(o[p].text, { unsortedIndex: e, text: d }) == 0), p < 0 ? o.splice(-p - 1, 0, { text: d, unsortedIndex: e }) : o.splice(p, 0, { text: d, unsortedIndex: e }), () => {
              let h = gn(o, d, a);
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
  function gn(e, t, n) {
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
  function Xe({ linearNavigationParameters: e, typeaheadNavigationParameters: t, rovingTabIndexParameters: n, managedChildrenReturn: r, refElementReturn: o, paginatedChildrenParameters: a, rearrangeableChildrenReturn: l, ...u }) {
    k(Xe);
    let { props: m, rovingTabIndexReturn: f, managedChildrenParameters: i, context: c, ...d } = mn({ managedChildrenReturn: r, rovingTabIndexParameters: n, refElementReturn: o }), { propsStable: p, typeaheadNavigationReturn: h, context: C, ...g } = bn({ rovingTabIndexReturn: f, typeaheadNavigationParameters: t }), { propsStable: v, linearNavigationReturn: b, ...x } = fn({ rovingTabIndexReturn: f, linearNavigationParameters: e, paginatedChildrenParameters: a, rearrangeableChildrenReturn: l });
    let _ = B(p, v), T = A(_);
    return {
      managedChildrenParameters: i,
      rovingTabIndexReturn: f,
      typeaheadNavigationReturn: h,
      context: q({
        ...c,
        ...C
      }),
      linearNavigationReturn: b,
      props: B(v, p, m)
    };
  }
  function Qe({ info: { index: e, untabbable: t, ...n }, context: r, refElementReturn: o, textContentParameters: a, ...l }) {
    k(Qe);
    let { props: u, ...m } = pn({ context: r, info: { index: e, untabbable: t }, refElementReturn: o }), { ...f } = vn({ refElementReturn: o, textContentParameters: a, context: r, info: { index: e } });
    return {
      props: u,
      ...f,
      ...m
    };
  }

  // ../dist/component-detail/keyboard-navigation/use-grid-navigation-partial.js
  function Cn({ gridNavigationParameters: { onTabbableColumnChange: e, ...t }, linearNavigationParameters: n, ...r }) {
    k(Cn);
    let [o, a] = z(e, E(() => {
      let C = r.rovingTabIndexParameters.initiallyTabbedIndex ?? 0;
      return { actual: C, ideal: C };
    })), { linearNavigationReturn: l, rovingTabIndexReturn: u, typeaheadNavigationReturn: m, managedChildrenParameters: f, context: { rovingTabIndexContext: i, typeaheadNavigationContext: c }, props: d, ...p } = Xe({
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
        rovingTabIndexContext: i,
        typeaheadNavigationContext: c
      }),
      linearNavigationReturn: l,
      rovingTabIndexReturn: u,
      typeaheadNavigationReturn: m
    };
  }
  function xn({
    // Stuff for the row as a child of the parent grid
    info: { index: e, untabbable: t, ...n },
    textContentParameters: r,
    context: o,
    // Stuff for the row as a parent of child cells
    linearNavigationParameters: a,
    rovingTabIndexParameters: { untabbable: l, initiallyTabbedIndex: u, onTabbableIndexChange: m, ...f },
    managedChildrenReturn: i,
    typeaheadNavigationParameters: c,
    // Both/neither
    refElementReturn: d,
    ...p
  }) {
    k(xn);
    let { getTabbableColumn: h, setTabbableColumn: C, setTabbableRow: g } = o.gridNavigationRowContext, v = E(() => e), b = E((ee) => {
      let { getChildren: ne } = i;
      if (o.rovingTabIndexContext.getUntabbable())
        o.rovingTabIndexContext.parentFocusSelf(!0);
      else {
        let { ideal: J, actual: F } = h(), V = J ?? 0, K = ne().getAt(V), Ce = ne().getLowestIndex(), ye = ne().getHighestIndex();
        for (; (!K || K.untabbable) && V > Ce; )
          --V, K = ne().getAt(V);
        for (; (!K || K.untabbable) && V <= ye; )
          ++V, K = ne().getAt(V);
        if (K) {
          let ke = K.getElement();
          K.focusSelf(ke);
        } else
          we(ee);
      }
    }, []), x = b, { props: _, info: { getLocallyTabbable: T, setLocallyTabbable: I, ...S }, hasCurrentFocusParameters: P, pressParameters: L, rovingTabIndexChildReturn: w, textContentReturn: D, ...y } = Qe({ info: { index: e, untabbable: t }, refElementReturn: d, textContentParameters: r, context: o }), M = !w.tabbable, { props: O, context: U, linearNavigationReturn: $, managedChildrenParameters: G, rovingTabIndexReturn: W, typeaheadNavigationReturn: Q, ...Z } = Xe({
      managedChildrenReturn: i,
      refElementReturn: d,
      typeaheadNavigationParameters: c,
      rearrangeableChildrenReturn: { indexDemangler: Je, indexMangler: Je },
      rovingTabIndexParameters: {
        untabbableBehavior: "leave-child-focused",
        focusSelfParent: b,
        untabbable: M || l,
        initiallyTabbedIndex: u,
        onTabbableIndexChange: E((ee, ne, J) => {
          C({ ideal: ee, actual: ee }, J), m?.(ee, ne, J);
        })
      },
      linearNavigationParameters: {
        onNavigateLinear: E((ee, ne) => {
          C((J) => ({ ideal: ee, actual: J?.actual ?? ee }), ne);
        }),
        disableHomeEndKeys: !0,
        pageNavigationSize: 0,
        arrowKeyDirection: "horizontal",
        ...a
      },
      paginatedChildrenParameters: { paginationMin: null, paginationMax: null }
    });
    let { setTabbableIndex: ie } = W, te = q({
      //allChildCellsAreUntabbable,
      setTabbableRow: g,
      getRowIndex: v,
      getTabbableColumn: h,
      setTabbableColumn: C,
      setTabbableCell: ie
    });
    O.tabIndex = O.tabIndex ?? _.tabIndex;
    let ve = B(O, _, {
      // Ensure that if the browser focuses the row for whatever reason, we transfer the focus to a child cell.
      onFocus: E((ee) => b(ee.currentTarget))
    });
    return ve.tabIndex = -1, {
      context: q({
        gridNavigationCellContext: te,
        ...U
      }),
      props: be(ve, "data-use-grid-navigation-partial-row"),
      info: { focusSelf: x, getLocallyTabbable: T, setLocallyTabbable: I },
      hasCurrentFocusParameters: P,
      pressParameters: L,
      rovingTabIndexChildReturn: w,
      textContentReturn: D,
      linearNavigationReturn: $,
      managedChildrenParameters: G,
      rovingTabIndexReturn: W,
      typeaheadNavigationReturn: Q
    };
  }
  function _n({ context: { gridNavigationCellContext: { getRowIndex: e, setTabbableRow: t, getTabbableColumn: n, setTabbableColumn: r, setTabbableCell: o, ...a }, rovingTabIndexContext: l, typeaheadNavigationContext: u, ...m }, info: { index: f, untabbable: i, ...c }, refElementReturn: d, textContentParameters: p, gridNavigationCellParameters: { colSpan: h, ...C }, ...g }) {
    k(_n), h ??= 1;
    let { hasCurrentFocusParameters: { onCurrentFocusedInnerChanged: v, ...b }, rovingTabIndexChildReturn: x, textContentReturn: _, pressParameters: T, props: I, info: S, ...P } = Qe({
      info: { index: f, untabbable: i },
      context: { rovingTabIndexContext: l, typeaheadNavigationContext: u },
      textContentParameters: p,
      refElementReturn: d
    });
    return {
      info: S,
      props: B(I, { onClick: (L) => r((w) => ({ ideal: f, actual: w?.actual ?? f }), L) }),
      rovingTabIndexChildReturn: x,
      textContentReturn: _,
      pressParameters: T,
      hasCurrentFocusParameters: {
        onCurrentFocusedInnerChanged: E((L, w, D) => {
          v?.(L, w, D), L && (t(e(), D, !1), r((y) => ({ actual: f, ideal: y?.ideal ?? f }), D), o((y) => y != null && (y < f || y > f + h) ? y : f, D, !1));
        })
      }
    };
  }

  // ../dist/preact-extensions/use-force-update.js
  function yn() {
    k(yn);
    let [, e] = le(0);
    return A(() => e((t) => ++t)).current;
  }

  // ../dist/component-detail/use-sortable-children.js
  function gr({ rearrangeableChildrenParameters: { getIndex: e, onRearranged: t }, managedChildrenReturn: { getChildren: n } }) {
    k(gr), Y("useRearrangeableChildren", e);
    let r = A(/* @__PURE__ */ new Map()), o = A(/* @__PURE__ */ new Map()), a = R((h) => r.current.get(h) ?? h, []), l = R((h) => o.current.get(h) ?? h, []), u = X(t), m = R(() => {
      let C = n()._arraySlice(), g = pr(C);
      return c(C, g);
    }, [
      /* Must remain stable */
    ]), f = R(() => {
      let h = n(), C = h._arraySlice(), g = h._arraySlice().reverse();
      return c(C, g);
    }, [
      /* Must remain stable */
    ]), i = A(null), c = R((h, C) => {
      r.current.clear(), o.current.clear();
      for (let g = 0; g < C.length; ++g)
        if (C[g]) {
          let v = C[g].index;
          r.current.set(v, g), o.current.set(g, v);
        }
      u()?.(), i.current?.();
    }, []), d = R(function h(C) {
      k(h), console.assert(Array.isArray(C));
      let g = yn();
      return console.assert(i.current == null || i.current == g), i.current = g, C.slice().map((v) => ({ child: v, mangledIndex: a(e(v)), demangledIndex: e(v) })).sort((v, b) => v.mangledIndex - b.mangledIndex).map(({ child: v, mangledIndex: b, demangledIndex: x }) => fe(v.type, { ...v.props, key: x, "data-mangled-index": b, "data-demangled-index": x }));
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
    let r = X(t ?? wa), { rearrangeableChildrenReturn: o } = gr({ rearrangeableChildrenParameters: e, managedChildrenReturn: { getChildren: n } }), { rearrange: a } = o;
    return {
      sortableChildrenReturn: { sort: R((u) => {
        let m = n(), f = r(), i = m._arraySlice(), c = f ? i.sort((d, p) => {
          let g = f(d, p);
          return u[0] == "d" ? -g : g;
        }) : m._arraySlice();
        return a(i, c);
      }, [
        /* Must remain stable */
      ]) },
      rearrangeableChildrenReturn: o
    };
  }
  function wa(e, t) {
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
    let f = A(/* @__PURE__ */ new Set()), i = A(/* @__PURE__ */ new Set());
    let c = A(null), d = A(!1), p = A(!1), h = E((x, _, T, I) => {
      console.assert(T != I), T == null ? I === !0 ? (console.assert(f.current.has(_), `The selected child at index ${_} is unmounting itself, but the parent was unaware of it being selected.`), f.current.delete(_)) : I === !1 ? (console.assert(i.current.has(_), `The selected child at index ${_} is unmounting itself, but the parent was unaware of it being selected.`), i.current.delete(_)) : console.assert(!1, `The child at index ${_} was not selected or unselected but a secret third thing: ${T}`) : T ? (I != null && (console.assert(i.current.has(_), `The multi-select child at index ${_} changed to selected even though it was not unselected before, somehow.`), i.current.delete(_)), console.assert(!f.current.has(_), `The multi-select child at index ${_} changed to selected even though there is already a selected child with that index.`), f.current.add(_), c.current = _) : (I != null && (console.assert(f.current.has(_), `The multi-select child at index ${_} changed to unselected even though it was not selected before, somehow.`), f.current.delete(_)), console.assert(!i.current.has(_), `The multi-select child at index ${_} was marked as unselected even though there is already an unselected child with that index.`), i.current.add(_));
      let S = f.current.size + i.current.size, P = f.current.size / S;
      console.assert(P >= 0 && P <= 1), e?.(Ie(x, { selectedPercent: P, selectedIndices: f.current }));
    }), C = E((x, _) => {
      o().forEach((T) => {
        T.getMultiSelectionDisabled() || T.setSelectedFromParent(x, _(T.index));
      });
    }), g = E((x, _) => {
      let T = _, I = 0, S = c.current || 0;
      S <= _ ? ++S : (--S, I = _, _ = S, S = I), console.assert(S <= _), S <= _ && C(x, (P) => P >= S && P <= _ ? !o().getAt(P)?.getMultiSelected() : !!o().getAt(P)?.getMultiSelected()), c.current = T;
    }), v = E((x, _, T) => {
      x || (p.current = d.current = !1);
    }), b = A(!1);
    return Te(document, "keydown", E((x) => {
      d.current = x.shiftKey || x.key == "Shift", p.current = x.ctrlKey || x.key == "Control", l() && x.code == "KeyA" && x.ctrlKey && !x.repeat && n != "disabled" && (C(x, b.current ? xe : Pt), x.preventDefault(), x.stopPropagation(), b.current = !b.current);
    }), { capture: !0 }), Te(document, "keyup", (x) => {
      x.key == "Shift" && (d.current = !1), x.key == "Control" && (p.current = !1);
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
  function vr({ info: { index: e, ...t }, multiSelectionChildParameters: { initiallyMultiSelected: n, onMultiSelectChange: r, multiSelectionDisabled: o, ...a }, context: { multiSelectionContext: { notifyParentOfChildSelectChange: l, multiSelectionAriaPropName: u, multiSelectionMode: m, doContiguousSelection: f, changeAllChildren: i, getCtrlKeyDown: c, getShiftKeyDown: d, getAnyFocused: p, ...h }, ...C }, ...g }) {
    let v = X(e), b = A(!1), x = (w) => {
      o || (m == "activation" ? w.shiftKey ? f(w, e) : r?.(Ie(w, { multiSelected: !I() })) : w.ctrlKey ? r?.(Ie(w, { multiSelected: !I() })) : (b.current = !0, we(w.currentTarget), P(!0, !1, w)));
    }, [_, T, I] = N(n ?? !1), S = E((w, D) => {
      console.assert(D != null), console.assert(!o);
      let y = I();
      y != D && (T(D), l(w, e, D, y));
    });
    oe(() => (l(null, v(), I(), void 0), () => l(null, v(), void 0, I())), []);
    let P = E((w, D, y) => {
      if (w && m == "focus") {
        let M = p();
        console.log("any focused: ", M);
        let O = d() ? "toggle" : c() ? "skip" : "set", U = e;
        switch (O) {
          case "set":
            (M || b.current) && i(y, ($) => $ == U);
            break;
          case "toggle":
            f(y, e);
            break;
          case "skip":
            debugger;
            break;
        }
      }
      b.current = !1;
    }), L = E((w, D) => {
      console.assert(r != null), r?.(Ie(w, { multiSelected: D }));
    });
    return {
      multiSelectionChildReturn: {
        changeMultiSelected: S,
        multiSelected: _,
        getMultiSelected: I,
        multiSelectionMode: m
      },
      pressParameters: {
        onPressSync: x
      },
      hasCurrentFocusParameters: {
        onCurrentFocusedInnerChanged: P
      },
      props: { [u || "aria-selected"]: _ ? "true" : "false" },
      info: {
        getMultiSelected: I,
        setSelectedFromParent: L,
        getMultiSelectionDisabled: X(o)
      }
    };
  }
  function Cr({ multiSelectionChildDeclarativeParameters: { onMultiSelectedChange: e, multiSelected: t, ...n }, multiSelectionChildReturn: { changeMultiSelected: r, ...o }, ...a }) {
    let l = t || !1, u = A(void 0);
    j(() => {
      r(u.current, l);
    }, [l]);
    let m = E((i) => (u.current = i, e?.(i))), f = E((i, c) => {
      e?.(Ie(i, { multiSelected: c }));
    });
    return {
      multiSelectionChildParameters: {
        onMultiSelectChange: m
      },
      info: { setSelectedFromParent: f }
    };
  }

  // ../dist/component-detail/use-single-selection.js
  function Sn({ managedChildrenReturn: { getChildren: e, ...t }, rovingTabIndexReturn: { setTabbableIndex: n, ...r }, singleSelectionParameters: { onSingleSelectedIndexChange: o, initiallySingleSelectedIndex: a, singleSelectionAriaPropName: l, singleSelectionMode: u, ...m }, ...f }) {
    k(Sn);
    let i = E(o ?? Rt), c = R((g) => g.getSingleSelected(), []), d = R((g, v, b, x) => {
      g.untabbable && console.assert(!1);
      let _ = b == g.index ? x : b, T = _ == null ? null : g.index - _;
      b == null && console.assert(v == !1), v && console.assert(b === g.index), g.setLocalSingleSelected(v, T);
    }, []), p = R((g) => !g.untabbable, []), { changeIndex: h, getCurrentIndex: C } = Lt({
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
          onSingleSelectedIndexChange: i,
          singleSelectionAriaPropName: l,
          singleSelectionMode: u
        })
      }),
      childrenHaveFocusParameters: {
        onCompositeFocusChange: E((g, v, b) => {
          if (!g) {
            let x = C();
            x != null && n(x, b, !1);
          }
        })
      }
    };
  }
  function En({ singleSelectionChildParameters: { singleSelectionDisabled: e, ...t }, context: { singleSelectionContext: { getSingleSelectedIndex: n, onSingleSelectedIndexChange: r, singleSelectionAriaPropName: o, singleSelectionMode: a, ...l }, ...u }, info: { index: m, untabbable: f, ...i }, ...c }) {
    k(En), Y("useSingleSelectionChild", n, r);
    let [d, p, h] = N(n() == m), [C, g, v] = N(n() == null ? null : n() - m), b = E((T, I, S) => {
      !e && a == "focus" && T && !f && r(Ie(S, { selectedIndex: m }));
    }), x = E((T) => {
      !e && !f ? a == "activation" && r(Ie(T, { selectedIndex: m })) : we(T.currentTarget);
    }), _ = o?.split("-") ?? [];
    return {
      info: {
        setLocalSingleSelected: E((T, I) => {
          p(T), g(I);
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
        [`${_[0]}-${_[1]}`]: d ? _[1] == "current" ? `${_[2]}` : "true" : "false"
      }, "data-single-selection-child"),
      hasCurrentFocusParameters: { onCurrentFocusedInnerChanged: b },
      pressParameters: { onPressSync: x }
    };
  }
  function xr({ singleSelectionReturn: { changeSingleSelectedIndex: e }, singleSelectionDeclarativeParameters: { singleSelectedIndex: t, onSingleSelectedIndexChange: n } }) {
    let r = t ?? null, o = A(void 0);
    return j(() => {
      e(r, o.current);
    }, [r]), { singleSelectionParameters: { onSingleSelectedIndexChange: R((l) => (o.current = l, n?.(l)), [n]) } };
  }

  // ../dist/component-detail/use-selection.js
  function Ft({ managedChildrenReturn: e, multiSelectionParameters: t, childrenHaveFocusReturn: n, rovingTabIndexReturn: r, singleSelectionParameters: o }) {
    let { childrenHaveFocusParameters: { onCompositeFocusChange: a, ...l }, context: u, singleSelectionReturn: m, ...f } = Sn({ managedChildrenReturn: e, rovingTabIndexReturn: r, singleSelectionParameters: o }), { childrenHaveFocusParameters: { onCompositeFocusChange: i, ...c }, context: d, multiSelectionReturn: p, propsStable: h, ...C } = br({ managedChildrenReturn: e, multiSelectionParameters: t, childrenHaveFocusReturn: n });
    return {
      propsStable: h,
      childrenHaveFocusParameters: { onCompositeFocusChange: E((...g) => {
        a(...g), i(...g);
      }) },
      context: q({ ...u, ...d }),
      multiSelectionReturn: p,
      singleSelectionReturn: m
    };
  }
  function Mt({ context: e, info: { index: t, untabbable: n, ...r }, singleSelectionChildParameters: o, multiSelectionChildParameters: a, ...l }) {
    let { props: u, hasCurrentFocusParameters: { onCurrentFocusedInnerChanged: m }, pressParameters: { onPressSync: f }, info: { getSingleSelected: i, setLocalSingleSelected: c, singleSelected: d, ...p }, singleSelectionChildReturn: h } = En({ context: e, info: { index: t, untabbable: n }, singleSelectionChildParameters: o }), { props: C, hasCurrentFocusParameters: { onCurrentFocusedInnerChanged: g }, pressParameters: { onPressSync: v }, multiSelectionChildReturn: b, info: { getMultiSelected: x, setSelectedFromParent: _, getMultiSelectionDisabled: T, ...I }, ...S } = vr({ context: e, info: { index: t }, multiSelectionChildParameters: a });
    return {
      hasCurrentFocusParameters: { onCurrentFocusedInnerChanged: E((...P) => {
        m(...P), g(...P);
      }) },
      info: {
        getMultiSelected: x,
        setSelectedFromParent: _,
        getSingleSelected: i,
        setLocalSingleSelected: c,
        singleSelected: d,
        getMultiSelectionDisabled: T
      },
      multiSelectionChildReturn: b,
      pressParameters: { onPressSync: E((...P) => {
        f(...P), v(...P);
      }) },
      props: B(u, C),
      singleSelectionChildReturn: h
    };
  }
  function At(e) {
    return xr(e);
  }
  function _r(e) {
    return Cr(e);
  }

  // ../dist/component-detail/keyboard-navigation/use-grid-navigation-selection.js
  function Tn({ gridNavigationParameters: e, linearNavigationParameters: t, rovingTabIndexParameters: n, managedChildrenReturn: r, typeaheadNavigationParameters: o, singleSelectionParameters: a, multiSelectionParameters: l, refElementReturn: u, paginatedChildrenParameters: m, rearrangeableChildrenReturn: f, childrenHaveFocusReturn: i, ...c }) {
    k(Tn);
    let { context: { gridNavigationRowContext: d, rovingTabIndexContext: p, typeaheadNavigationContext: h }, linearNavigationReturn: C, managedChildrenParameters: g, props: v, rovingTabIndexReturn: b, typeaheadNavigationReturn: x } = Cn({
      gridNavigationParameters: e,
      linearNavigationParameters: t,
      managedChildrenReturn: r,
      rovingTabIndexParameters: { ...n, initiallyTabbedIndex: a.initiallySingleSelectedIndex || 0 },
      typeaheadNavigationParameters: o,
      paginatedChildrenParameters: m,
      rearrangeableChildrenReturn: f,
      refElementReturn: u
    }), { childrenHaveFocusParameters: _, context: { singleSelectionContext: T, multiSelectionContext: I }, multiSelectionReturn: S, propsStable: P, singleSelectionReturn: L, ...w } = Ft({
      managedChildrenReturn: r,
      rovingTabIndexReturn: b,
      singleSelectionParameters: a,
      multiSelectionParameters: l,
      childrenHaveFocusReturn: i
    });
    return {
      context: q({
        gridNavigationRowContext: d,
        rovingTabIndexContext: p,
        singleSelectionContext: T,
        multiSelectionContext: I,
        typeaheadNavigationContext: h
      }),
      childrenHaveFocusParameters: _,
      linearNavigationReturn: C,
      managedChildrenParameters: g,
      props: B(v, P),
      rovingTabIndexReturn: b,
      singleSelectionReturn: L,
      multiSelectionReturn: S,
      typeaheadNavigationReturn: x
    };
  }
  function In({ info: e, linearNavigationParameters: t, managedChildrenReturn: n, refElementReturn: r, rovingTabIndexParameters: o, textContentParameters: a, typeaheadNavigationParameters: l, context: u, singleSelectionChildParameters: m, multiSelectionChildParameters: f, ...i }) {
    k(In);
    let { hasCurrentFocusParameters: { onCurrentFocusedInnerChanged: c, ...d }, info: { getSingleSelected: p, setLocalSingleSelected: h, singleSelected: C, getMultiSelected: g, setSelectedFromParent: v, getMultiSelectionDisabled: b, ...x }, props: _, singleSelectionChildReturn: T, multiSelectionChildReturn: I, pressParameters: { onPressSync: S, ...P }, ...L } = Mt({ info: e, context: u, singleSelectionChildParameters: m, multiSelectionChildParameters: f }), { hasCurrentFocusParameters: { onCurrentFocusedInnerChanged: w, ...D }, info: { focusSelf: y, getLocallyTabbable: M, setLocallyTabbable: O, ...U }, props: $, linearNavigationReturn: G, managedChildrenParameters: W, pressParameters: { excludeSpace: Q, ...Z }, rovingTabIndexChildReturn: ie, rovingTabIndexReturn: te, textContentReturn: ve, typeaheadNavigationReturn: he, context: ee, ...ne } = xn({ context: u, linearNavigationParameters: t, info: e, managedChildrenReturn: n, refElementReturn: r, rovingTabIndexParameters: o, textContentParameters: a, typeaheadNavigationParameters: l });
    return {
      context: ee,
      linearNavigationReturn: G,
      info: {
        getLocallyTabbable: M,
        getSingleSelected: p,
        singleSelected: C,
        setLocallyTabbable: O,
        setLocalSingleSelected: h,
        focusSelf: y,
        getMultiSelected: g,
        setSelectedFromParent: v,
        getMultiSelectionDisabled: b
      },
      managedChildrenParameters: W,
      pressParameters: { onPressSync: S, excludeSpace: Q },
      hasCurrentFocusParameters: { onCurrentFocusedInnerChanged: E((J, F, V) => {
        c?.(J, F, V), w?.(J, F, V);
      }) },
      props: B($, _),
      rovingTabIndexChildReturn: ie,
      rovingTabIndexReturn: te,
      singleSelectionChildReturn: T,
      multiSelectionChildReturn: I,
      textContentReturn: ve,
      typeaheadNavigationReturn: he
    };
  }
  function Pn(e) {
    return k(Pn), _n(e);
  }

  // ../dist/component-detail/keyboard-navigation/use-grid-navigation-selection-sortable.js
  function wn({ rearrangeableChildrenParameters: e, sortableChildrenParameters: t, linearNavigationParameters: n, managedChildrenReturn: r, gridNavigationParameters: o, paginatedChildrenParameters: a, refElementReturn: l, rovingTabIndexParameters: u, singleSelectionParameters: m, multiSelectionParameters: f, typeaheadNavigationParameters: i, childrenHaveFocusReturn: c, ...d }) {
    k(wn);
    let { rearrangeableChildrenReturn: p, sortableChildrenReturn: h } = it({ rearrangeableChildrenParameters: e, sortableChildrenParameters: t, managedChildrenReturn: r }), C = Tn({
      rearrangeableChildrenReturn: p,
      linearNavigationParameters: n,
      managedChildrenReturn: r,
      gridNavigationParameters: o,
      paginatedChildrenParameters: a,
      refElementReturn: l,
      rovingTabIndexParameters: u,
      singleSelectionParameters: m,
      multiSelectionParameters: f,
      typeaheadNavigationParameters: i,
      childrenHaveFocusReturn: c
    });
    return {
      rearrangeableChildrenReturn: p,
      sortableChildrenReturn: h,
      ...C
    };
  }
  function Rn({ context: e, info: { index: t, untabbable: n, ...r }, linearNavigationParameters: o, managedChildrenReturn: a, refElementReturn: l, rovingTabIndexParameters: u, textContentParameters: m, typeaheadNavigationParameters: f, gridNavigationSelectionSortableRowParameters: { getSortableColumnIndex: i, ...c }, singleSelectionChildParameters: d, multiSelectionChildParameters: p, ...h }) {
    k(Rn);
    let C = E(i), g = R(() => {
      let he = a.getChildren(), ee = C() || 0;
      return he.getAt(ee)?.getSortValue();
    }, []), { info: { getLocallyTabbable: v, getSingleSelected: b, getMultiSelected: x, setSelectedFromParent: _, singleSelected: T, setLocalSingleSelected: I, setLocallyTabbable: S, focusSelf: P, getMultiSelectionDisabled: L, ...w }, context: D, hasCurrentFocusParameters: y, linearNavigationReturn: M, managedChildrenParameters: O, pressParameters: U, props: $, rovingTabIndexChildReturn: G, rovingTabIndexReturn: W, singleSelectionChildReturn: Q, multiSelectionChildReturn: Z, textContentReturn: ie, typeaheadNavigationReturn: te, ...ve } = In({
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
      info: { getLocallyTabbable: v, getMultiSelected: x, setSelectedFromParent: _, getSingleSelected: b, getMultiSelectionDisabled: L, singleSelected: T, setLocallyTabbable: S, setLocalSingleSelected: I, getSortValue: g, focusSelf: P },
      context: D,
      hasCurrentFocusParameters: y,
      linearNavigationReturn: M,
      managedChildrenParameters: O,
      pressParameters: U,
      props: $,
      rovingTabIndexChildReturn: G,
      rovingTabIndexReturn: W,
      singleSelectionChildReturn: Q,
      multiSelectionChildReturn: Z,
      textContentReturn: ie,
      typeaheadNavigationReturn: te
    };
  }
  function kn({ context: e, gridNavigationCellParameters: t, info: { index: n, untabbable: r, ...o }, refElementReturn: a, textContentParameters: l, ...u }) {
    return k(kn), Pn({
      context: e,
      info: { index: n, untabbable: r },
      gridNavigationCellParameters: t,
      refElementReturn: a,
      textContentParameters: l
    });
  }

  // ../dist/component-detail/keyboard-navigation/use-list-navigation-selection.js
  function Nn({ linearNavigationParameters: e, rovingTabIndexParameters: t, typeaheadNavigationParameters: n, singleSelectionParameters: r, multiSelectionParameters: o, managedChildrenReturn: a, refElementReturn: l, paginatedChildrenParameters: u, rearrangeableChildrenReturn: m, childrenHaveFocusReturn: f, ...i }) {
    k(Nn);
    let { context: c, propsStable: d, ...p } = Ft({
      childrenHaveFocusReturn: f,
      rovingTabIndexReturn: { setTabbableIndex: E((...b) => {
        g.setTabbableIndex(...b);
      }) },
      managedChildrenReturn: a,
      singleSelectionParameters: r,
      multiSelectionParameters: o
    }), { context: h, props: C, rovingTabIndexReturn: g, ...v } = Xe({
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
      props: B(C, d)
    };
  }
  function Dn({ info: { index: e, untabbable: t, ...n }, context: r, refElementReturn: o, textContentParameters: a, singleSelectionChildParameters: l, multiSelectionChildParameters: u, ...m }) {
    k(Dn);
    let { hasCurrentFocusParameters: { onCurrentFocusedInnerChanged: f, ...i }, info: c, multiSelectionChildReturn: d, singleSelectionChildReturn: p, props: h, pressParameters: { onPressSync: C }, ...g } = Mt({
      info: { index: e, untabbable: t },
      context: r,
      multiSelectionChildParameters: u,
      singleSelectionChildParameters: l
    }), { hasCurrentFocusParameters: { onCurrentFocusedInnerChanged: v, ...b }, pressParameters: { excludeSpace: x }, rovingTabIndexChildReturn: _, textContentReturn: T, props: I, info: S, ...P } = Qe({
      info: { index: e, untabbable: t },
      context: r,
      refElementReturn: o,
      textContentParameters: a
    });
    return {
      hasCurrentFocusParameters: {
        onCurrentFocusedInnerChanged: E((L, w, D) => {
          v?.(L, w, D), f?.(L, w, D);
        })
      },
      pressParameters: { onPressSync: C, excludeSpace: x },
      info: { ...c, ...S },
      rovingTabIndexChildReturn: _,
      multiSelectionChildReturn: d,
      singleSelectionChildReturn: p,
      textContentReturn: T,
      propsChild: h,
      propsTabbable: I
    };
  }

  // ../dist/component-detail/keyboard-navigation/use-list-navigation-selection-sortable.js
  function Ln({ linearNavigationParameters: e, rovingTabIndexParameters: t, typeaheadNavigationParameters: n, singleSelectionParameters: r, multiSelectionParameters: o, managedChildrenReturn: a, rearrangeableChildrenParameters: l, sortableChildrenParameters: u, refElementReturn: m, paginatedChildrenParameters: f, childrenHaveFocusReturn: i, ...c }) {
    k(Ln);
    let { rearrangeableChildrenReturn: d, sortableChildrenReturn: p, ...h } = it({ rearrangeableChildrenParameters: l, sortableChildrenParameters: u, managedChildrenReturn: a }), { props: C, context: g, ...v } = Nn({ childrenHaveFocusReturn: i, linearNavigationParameters: e, rearrangeableChildrenReturn: d, rovingTabIndexParameters: t, typeaheadNavigationParameters: n, singleSelectionParameters: r, multiSelectionParameters: o, managedChildrenReturn: a, refElementReturn: m, paginatedChildrenParameters: f });
    return {
      context: g,
      props: C,
      rearrangeableChildrenReturn: d,
      sortableChildrenReturn: p,
      ...v
    };
  }
  function Fn({ info: e, context: t, refElementReturn: n, textContentParameters: r, singleSelectionChildParameters: o, multiSelectionChildParameters: a, ...l }) {
    return k(Fn), Dn({
      info: e,
      context: t,
      refElementReturn: n,
      textContentParameters: r,
      singleSelectionChildParameters: o,
      multiSelectionChildParameters: a
    });
  }

  // ../dist/dom-helpers/use-ref-element.js
  function se(e) {
    k(se);
    let t = A(!1);
    t.current && (t.current = !1, console.assert(!1, "useRefElement was used on a component that didn't forward its ref onto a DOM element, so it's attached to that component's VNode instead."));
    let { onElementChange: n, onMount: r, onUnmount: o } = e.refElementParameters || {};
    Y("useRefElement", n, r, o);
    let a = R((f, i) => {
      f == null || f instanceof Element || (console.assert(f == null || f instanceof Element, "useRefElement was used on a component that didn't forward its ref onto a DOM element, so it's attached to that component's VNode instead."), t.current = !0);
      let c = n?.(f, i);
      return i && o?.(i), f && r?.(f), c;
    }, []), [l, u] = z(a, _e, pe);
    return {
      propsStable: A(be({ ref: u }, "data-use-ref-element")).current,
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
  var lt = /* @__PURE__ */ new Map(), yr = /* @__PURE__ */ new Map(), Mn = /* @__PURE__ */ new Map(), La = /* @__PURE__ */ new Map();
  function Ot(e, t, n, r) {
    let o = t.get(e);
    if (o)
      for (let a of o) {
        let { lastSent: l, send: u } = a;
        n !== l && (u(n, r), a.lastSent = n);
      }
  }
  function Ra(e) {
    let t = e.target.ownerDocument.defaultView;
    e.relatedTarget == null && Ot(t, lt, null, e);
  }
  function ka(e) {
    let t = e.target.ownerDocument.defaultView, n = e.target;
    Ot(t, lt, n, e), Ot(t, yr, n, e);
  }
  function Na(e) {
    let t = e.target instanceof Window ? e.target : e.currentTarget instanceof Window ? e.currentTarget : e.target.ownerDocument.defaultView;
    La.set(t, !0), Ot(t, Mn, !0, e);
  }
  function Da(e) {
    let t = e.target instanceof Window ? e.target : e.currentTarget instanceof Window ? e.currentTarget : e.target.ownerDocument.defaultView;
    La.set(t, !1), Ot(t, Mn, !1, e);
  }
  function Be({ activeElementParameters: { onActiveElementChange: e, onLastActiveElementChange: t, onWindowFocusedChange: n, getDocument: r } }) {
    k(Be), Y("useActiveElement", e, t, n, r), j(() => {
      let i = r(), c = i?.defaultView;
      (lt.get(c)?.size ?? 0) === 0 && (i?.addEventListener("focusin", ka, { passive: !0 }), i?.addEventListener("focusout", Ra, { passive: !0 }), c?.addEventListener("focus", Na, { passive: !0 }), c?.addEventListener("blur", Da, { passive: !0 }));
      let d = { send: a, lastSent: void 0 }, p = { send: u, lastSent: void 0 }, h = { send: f, lastSent: void 0 };
      return Ge.add(lt, c, d), Ge.add(yr, c, p), Ge.add(Mn, c, h), () => {
        Ge.delete(lt, c, d), Ge.delete(yr, c, p), Ge.delete(Mn, c, h), lt.size === 0 && (i?.removeEventListener("focusin", ka), i?.removeEventListener("focusout", Ra), c?.removeEventListener("focus", Na), c?.removeEventListener("blur", Da));
      };
    }, []);
    let [o, a] = z(e, _e, pe), [l, u] = z(t, _e, pe), [m, f] = z(n, Pt, pe);
    return { activeElementReturn: { getActiveElement: o, getLastActiveElement: l, getWindowFocused: m } };
  }

  // ../dist/component-detail/use-dismiss.js
  function An({ dismissParameters: { dismissActive: e, onDismiss: t, ...n }, backdropDismissParameters: { dismissBackdropActive: r, onDismissBackdrop: o, ...a }, lostFocusDismissParameters: { dismissLostFocusActive: l, onDismissLostFocus: u, ...m }, escapeDismissParameters: { dismissEscapeActive: f, onDismissEscape: i, parentDepth: c, ...d }, activeElementParameters: { getDocument: p, onActiveElementChange: h, onLastActiveElementChange: C, onWindowFocusedChange: g, ...v }, ...b }) {
    k(An);
    let { refElementReturn: x, propsStable: _ } = se({ refElementParameters: {} }), { refElementReturn: T, propsStable: I } = se({ refElementParameters: {} }), S = Qt({
      refElementPopupReturn: T,
      backdropDismissParameters: {
        dismissBackdropActive: r && e,
        onDismissBackdrop: E((O) => {
          o?.(O), t(O, "backdrop");
        })
      }
    }), P = Yt({
      refElementPopupReturn: T,
      escapeDismissParameters: {
        dismissEscapeActive: f && e,
        getDocument: p,
        onDismissEscape: E((O) => {
          i?.(O), t(O, "escape");
        }),
        parentDepth: c
      }
    }), { activeElementParameters: { onLastActiveElementChange: L, ...w } } = Zt({
      lostFocusDismissParameters: {
        dismissLostFocusActive: l && e,
        onDismissLostFocus: E((O) => {
          u?.(O), t(O, "lost-focus");
        })
      },
      refElementPopupReturn: T,
      refElementSourceReturn: x
    }), { activeElementReturn: { getActiveElement: D, getLastActiveElement: y, getWindowFocused: M } } = Be({
      activeElementParameters: {
        onLastActiveElementChange: E((O, U, $) => {
          L?.(O, U, $), C?.(O, U, $);
        }),
        onActiveElementChange: h,
        onWindowFocusedChange: g,
        getDocument: p
      }
    });
    return {
      refElementSourceReturn: x,
      refElementPopupReturn: T,
      propsStableSource: _,
      propsStablePopup: I
    };
  }

  // ../node_modules/.pnpm/blocking-elements@0.1.1/node_modules/blocking-elements/dist/blocking-elements.js
  (() => {
    var e, t, n;
    let r = Symbol(), o = Symbol(), a = Symbol(), l = Symbol(), u = Symbol(), m = Symbol(), f = Symbol(), i = Symbol(), c = Symbol(), d = Symbol(), p = Symbol(), h = Symbol(), C = Symbol();
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
        let x = this[r].indexOf(b);
        return x === -1 ? !1 : (this[r].splice(x, 1), x === this[r].length && this[m](this.top), !0);
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
        let x = this[o], _ = this[a];
        if (!b) {
          this[c](_), x.clear(), this[a] = [];
          return;
        }
        let T = this[d](b);
        if (T[T.length - 1].parentNode !== document.body)
          throw Error("Non-connected element cannot be a blocking element");
        this[a] = T;
        let I = this[p](b);
        if (!_.length) {
          this[i](T, I, x);
          return;
        }
        let S = _.length - 1, P = T.length - 1;
        for (; S > 0 && P > 0 && _[S] === T[P]; )
          S--, P--;
        _[S] !== T[P] && this[f](_[S], T[P]), S > 0 && this[c](_.slice(0, S)), P > 0 && this[i](T.slice(0, P), I, null);
      }
      /**
       * Swaps inertness between two sibling elements.
       * Sets the property `inert` over the attribute since the inert spec
       * doesn't specify if it should be reflected.
       * https://html.spec.whatwg.org/multipage/interaction.html#inert
       */
      [f](b, x) {
        let _ = b[l];
        this[h](b) && !b.inert && (b.inert = !0, _.add(b)), _.has(x) && (x.inert = !1, _.delete(x)), x[u] = b[u], x[l] = _, b[u] = void 0, b[l] = void 0;
      }
      /**
       * Restores original inertness to the siblings of the elements.
       * Sets the property `inert` over the attribute since the inert spec
       * doesn't specify if it should be reflected.
       * https://html.spec.whatwg.org/multipage/interaction.html#inert
       */
      [c](b) {
        for (let x of b) {
          x[u].disconnect(), x[u] = void 0;
          let T = x[l];
          for (let I of T)
            I.inert = !1;
          x[l] = void 0;
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
      [i](b, x, _) {
        for (let T of b) {
          let I = T.parentNode, S = I.children, P = /* @__PURE__ */ new Set();
          for (let y = 0; y < S.length; y++) {
            let M = S[y];
            M === T || !this[h](M) || x && x.has(M) || (_ && M.inert ? _.add(M) : (M.inert = !0, P.add(M)));
          }
          T[l] = P;
          let L = new MutationObserver(this[C].bind(this));
          T[u] = L;
          let w = I, D = w;
          D.__shady && D.host && (w = D.host), L.observe(w, {
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
        let x = this[a], _ = this[o];
        for (let T of b) {
          let I = T.target.host || T.target, S = I === document.body ? x.length : x.indexOf(I), P = x[S - 1], L = P[l];
          for (let w = 0; w < T.removedNodes.length; w++) {
            let D = T.removedNodes[w];
            if (D === P) {
              console.info("Detected removal of the top Blocking Element."), this.pop();
              return;
            }
            L.has(D) && (D.inert = !1, L.delete(D));
          }
          for (let w = 0; w < T.addedNodes.length; w++) {
            let D = T.addedNodes[w];
            this[h](D) && (_ && D.inert ? _.add(D) : (D.inert = !0, L.add(D)));
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
        let x = [], _ = b;
        for (; _ && _ !== document.body; ) {
          if (_.nodeType === Node.ELEMENT_NODE && x.push(_), _.assignedSlot) {
            for (; _ = _.assignedSlot; )
              x.push(_);
            _ = x.pop();
            continue;
          }
          _ = _.parentNode || _.host;
        }
        return x;
      }
      /**
       * Returns the distributed children of the element's shadow root.
       * Returns null if the element doesn't have a shadow root.
       */
      [p](b) {
        let x = b.shadowRoot;
        if (!x)
          return null;
        let _ = /* @__PURE__ */ new Set(), T, I, S, P = x.querySelectorAll("slot");
        if (P.length && P[0].assignedNodes)
          for (T = 0; T < P.length; T++)
            for (S = P[T].assignedNodes({
              flatten: !0
            }), I = 0; I < S.length; I++)
              S[I].nodeType === Node.ELEMENT_NODE && _.add(S[I]);
        return _;
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
      function f(i, c) {
        Er(this, f), this._inertManager = c, this._rootElement = i, this._managedNodes = /* @__PURE__ */ new Set(), this._rootElement.hasAttribute("aria-hidden") ? this._savedAriaHidden = this._rootElement.getAttribute("aria-hidden") : this._savedAriaHidden = null, this._rootElement.setAttribute("aria-hidden", "true"), this._makeSubtreeUnfocusable(this._rootElement), this._observer = new MutationObserver(this._onMutation.bind(this)), this._observer.observe(this._rootElement, { attributes: !0, childList: !0, subtree: !0 });
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
      function f(i, c) {
        Er(this, f), this._node = i, this._overrodeFocusMethod = !1, this._inertRoots = /* @__PURE__ */ new Set([c]), this._savedTabIndex = null, this._destroyed = !1, this.ensureUntabbable();
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
      function f(i) {
        if (Er(this, f), !i)
          throw new Error("Missing required argument; InertManager needs to wrap a document.");
        this._document = i, this._managedNodes = /* @__PURE__ */ new Map(), this._inertRoots = /* @__PURE__ */ new Map(), this._observer = new MutationObserver(this._watchForInert.bind(this)), u(i.head || i.body || i.documentElement), i.readyState === "loading" ? i.addEventListener("DOMContentLoaded", this._onDocumentLoaded.bind(this)) : this._onDocumentLoaded();
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
                    t.call(v, "[inert]") && b.unshift(v), b.forEach(function(x) {
                      this.setInert(x, !0);
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
    function l(f, i, c) {
      if (f.nodeType == Node.ELEMENT_NODE) {
        var d = (
          /** @type {!HTMLElement} */
          f
        );
        i && i(d);
        var p = (
          /** @type {!HTMLElement} */
          d.shadowRoot
        );
        if (p) {
          l(p, i, p);
          return;
        }
        if (d.localName == "content") {
          for (var h = (
            /** @type {!HTMLContentElement} */
            d
          ), C = h.getDistributedNodes ? h.getDistributedNodes() : [], g = 0; g < C.length; g++)
            l(C[g], i, c);
          return;
        }
        if (d.localName == "slot") {
          for (var v = (
            /** @type {!HTMLSlotElement} */
            d
          ), b = v.assignedNodes ? v.assignedNodes({ flatten: !0 }) : [], x = 0; x < b.length; x++)
            l(b[x], i, c);
          return;
        }
      }
      for (var _ = f.firstChild; _ != null; )
        l(_, i, c), _ = _.nextSibling;
    }
    function u(f) {
      if (!f.querySelector("style#inert-style, link#inert-style")) {
        var i = document.createElement("style");
        i.setAttribute("id", "inert-style"), i.textContent = `
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
`, f.appendChild(i);
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
        set: function(i) {
          m.setInert(this, i);
        }
      });
    }
  })();

  // ../dist/dom-helpers/use-document-class.js
  function On(e) {
    return e?.ownerDocument ?? document ?? window.document ?? globalThis.document;
  }

  // ../dist/dom-helpers/use-blocking-element.js
  function Fa() {
    return On().$blockingElements;
  }
  function Hn({ activeElementParameters: { getDocument: e, onActiveElementChange: t, onLastActiveElementChange: n, onWindowFocusedChange: r, ...o }, blockingElementParameters: { enabled: a, getTarget: l, ...u }, ...m }) {
    k(Hn);
    let f = E(l);
    Be({
      activeElementParameters: {
        getDocument: e,
        onActiveElementChange: t,
        onWindowFocusedChange: r,
        onLastActiveElementChange: E((g, v, b) => {
          n?.(g, v, b), g && (a ? C(g, b) : p(g, b));
        })
      }
    });
    let [i, c] = z(null, _e), [d, p] = z(null, _e), [h, C] = z(null, _e);
    return oe(() => {
      let g = f();
      if (a)
        try {
          return Fa().push(g), c(g), () => {
            Fa().remove(g);
          };
        } catch (v) {
          console.error(v);
        }
    }, [a]), { getTop: i, getLastActiveWhenClosed: d, getLastActiveWhenOpen: h };
  }

  // ../dist/component-detail/use-focus-trap.js
  function ut({ focusTrapParameters: { onlyMoveFocus: e, trapActive: t, focusPopup: n, focusOpener: r }, activeElementParameters: o, refElementReturn: a }) {
    k(ut);
    let l = E(n), u = E(r);
    j(() => {
      if (t) {
        let d = f(), p = c();
        d ??= a.getElement(), console.assert(!!d), d && l(d, () => Ma(d));
      } else {
        let d = i(), p = document.activeElement, h = a.getElement();
        (p == document.body || p == null || h == p || h?.contains(p)) && d && u(d);
      }
    }, [t]);
    let { getElement: m } = a, { getTop: f, getLastActiveWhenClosed: i, getLastActiveWhenOpen: c } = Hn({
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
  function Ma(e) {
    return ql(e, (t) => t instanceof Element && Ea(t));
  }
  function ql(e, t) {
    return e && t(e) ? e : (console.assert(!!e), e ??= document.body, document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, { acceptNode: (o) => t(o) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP }).firstChild());
  }

  // ../dist/component-detail/use-paginated-children.js
  function ct({ managedChildrenReturn: { getChildren: e }, rearrangeableChildrenReturn: { indexDemangler: t }, paginatedChildrenParameters: { paginationMax: n, paginationMin: r }, rovingTabIndexReturn: { getTabbableIndex: o, setTabbableIndex: a }, refElementReturn: { getElement: l } }) {
    k(ct);
    let [u, m] = N(null), f = r != null || n != null, i = A({ paginationMax: null, paginationMin: null }), c = R((h, C) => {
      let g = e().getHighestIndex() + 1, v = e().getLowestIndex();
      for (let b = v; b <= g; ++b) {
        let x = b >= (h ?? -1 / 0) && b < (C ?? 1 / 0);
        e().getAt(t(b))?.setPaginationVisible(x), x && (C != null || h != null) && e().getAt(t(b))?.setChildCountIfPaginated(e().getHighestIndex() + 1);
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
      c(r, n), i.current.paginationMax = n ?? null, i.current.paginationMin = r ?? null;
    }, [n, r]);
    let d = R((h) => h >= (r ?? -1 / 0) && h < (n ?? 1 / 0), []), p = ue(() => ({
      parentIsPaginated: f,
      getDefaultPaginationVisible: d
    }), [f]);
    return {
      context: ue(() => ({ paginatedChildContext: p }), [p]),
      managedChildrenParameters: {
        onChildrenCountChange: E((h) => {
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
  function dt({ info: { index: e }, context: { paginatedChildContext: { parentIsPaginated: t, getDefaultPaginationVisible: n } } }) {
    k(dt);
    let [r, o] = N(null), [a, l] = N(t ? n(e) : !0);
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
    let [n, r] = N(t), o = A(-1), a = R(() => {
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
    ]), _e), [m, f] = z(R((g, v) => {
      if (!(g == null || !p.current)) {
        r(g < (l() ?? 0));
        for (let b = v ?? 0; b < g; ++b)
          e().getAt(b)?.setStaggeredVisible(!0);
        a();
      }
    }, [
      /* Must be empty */
    ]), _e), i = !!t, c = R((g) => {
      f((v) => Math.min(l() ?? 0, 1 + Math.max(v ?? 0, g + 1)));
    }, []), d = R((g) => {
      u((v) => Math.max(v ?? 0, 1 + g));
    }, []), p = A(i);
    p.current = i;
    let h = R((g) => {
      if (p.current) {
        let v = m();
        return v == null ? !1 : g < v;
      } else
        return !0;
    }, []), C = ue(() => ({
      parentIsStaggered: i,
      childCallsThisToTellTheParentToMountTheNextOne: c,
      childCallsThisToTellTheParentTheHighestIndex: d,
      getDefaultStaggeredVisible: h
    }), [i]);
    return {
      staggeredChildrenReturn: { stillStaggering: n },
      context: ue(() => ({
        staggeredChildContext: C
      }), [C])
    };
  }
  function $e({ info: { index: e }, context: { staggeredChildContext: { parentIsStaggered: t, childCallsThisToTellTheParentTheHighestIndex: n, getDefaultStaggeredVisible: r, childCallsThisToTellTheParentToMountTheNextOne: o } } }) {
    k($e);
    let [a, l] = N(r(e));
    return oe(() => {
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
    let { childrenHaveFocusParameters: { onCompositeFocusChange: t } } = e, [n, r] = z(t, xe, pe), [o, a] = z(E((l, u, m) => {
      console.assert(l >= 0 && l <= 1), r(!!(l && !u), m);
    }), lr, setTimeout);
    return {
      childrenHaveFocusReturn: { getAnyFocused: n },
      context: q({ childrenHaveFocusChildContext: q({ setFocusCount: a }) })
    };
  }
  function ft({ context: { childrenHaveFocusChildContext: { setFocusCount: e } } }) {
    return k(ft), {
      hasCurrentFocusParameters: {
        onCurrentFocusedInnerChanged: E((t, n, r) => {
          t ? e((o) => (o ?? 0) + 1, r) : !t && n && e((o) => (o ?? 0) - 1, r);
        })
      }
    };
  }

  // ../dist/observers/use-has-current-focus.js
  function De(e) {
    k(De);
    let { hasCurrentFocusParameters: { onCurrentFocusedChanged: t, onCurrentFocusedInnerChanged: n }, refElementReturn: { getElement: r } } = e;
    Y("useHasCurrentFocus", t, n, r);
    let [o, a] = z(t, xe, pe), [l, u] = z(n, xe, pe), m = R((c) => {
      u(!0, c), a(c.target == r(), c);
    }, []), f = R((c) => {
      u(!1, c), a(!1, c);
    }, []);
    return j(() => () => {
      a(!1, void 0), u(!1, void 0);
    }, []), {
      hasCurrentFocusReturn: {
        propsStable: A({
          [sr]: m,
          [It]: f
        }).current,
        getCurrentFocused: o,
        getCurrentFocusedInner: l
      }
    };
  }

  // ../dist/component-use/use-grid-navigation-complete.js
  function Tr({ gridNavigationParameters: e, linearNavigationParameters: t, rovingTabIndexParameters: n, singleSelectionParameters: r, multiSelectionParameters: o, typeaheadNavigationParameters: a, sortableChildrenParameters: l, rearrangeableChildrenParameters: u, paginatedChildrenParameters: m, staggeredChildrenParameters: f, refElementParameters: i, ...c }) {
    k(Tr);
    let d = R(() => he.getChildren(), []), p = R(() => d().getLowestIndex(), []), h = R(() => d().getHighestIndex(), []), C = R((ye) => {
      let ke = d().getAt(ye);
      return !(ke == null || ke.untabbable);
    }, []), { refElementReturn: g, propsStable: v, ...b } = se({ refElementParameters: i }), { childrenHaveFocusParameters: x, managedChildrenParameters: _, context: { gridNavigationRowContext: T, rovingTabIndexContext: I, singleSelectionContext: S, multiSelectionContext: P, typeaheadNavigationContext: L }, rearrangeableChildrenReturn: w, props: D, rovingTabIndexReturn: y, linearNavigationReturn: M, singleSelectionReturn: O, multiSelectionReturn: U, sortableChildrenReturn: $, typeaheadNavigationReturn: G, ...W } = wn({
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
        onRearranged: E(() => {
          ne(m.paginationMin, m.paginationMax);
        }),
        ...u
      },
      childrenHaveFocusReturn: { getAnyFocused: E(() => ie.getAnyFocused()) },
      sortableChildrenParameters: l
    }), { indexDemangler: Q } = w, { context: { childrenHaveFocusChildContext: Z }, childrenHaveFocusReturn: ie } = Ve({ childrenHaveFocusParameters: x }), te = Me({ managedChildrenParameters: { onChildrenCountChange: E((ye) => J?.(ye)), ..._ } }), { context: { managedChildContext: ve }, managedChildrenReturn: he } = te, { paginatedChildrenReturn: ee, paginatedChildrenReturn: { refreshPagination: ne }, managedChildrenParameters: { onChildrenCountChange: J }, context: { paginatedChildContext: F } } = ct({ refElementReturn: g, managedChildrenReturn: he, paginatedChildrenParameters: m, rovingTabIndexReturn: y, rearrangeableChildrenReturn: { indexDemangler: Q } }), { context: { staggeredChildContext: V }, staggeredChildrenReturn: K } = We({ managedChildrenReturn: he, staggeredChildrenParameters: f }), Ce = q({
      singleSelectionContext: S,
      multiSelectionContext: P,
      managedChildContext: ve,
      rovingTabIndexContext: I,
      typeaheadNavigationContext: L,
      childrenHaveFocusChildContext: Z,
      paginatedChildContext: F,
      staggeredChildContext: V,
      gridNavigationRowContext: T
    });
    return {
      context: Ce,
      props: B(D, v),
      managedChildrenReturn: he,
      rearrangeableChildrenReturn: w,
      staggeredChildrenReturn: K,
      rovingTabIndexReturn: y,
      childrenHaveFocusReturn: ie,
      paginatedChildrenReturn: ee,
      linearNavigationReturn: M,
      singleSelectionReturn: O,
      multiSelectionReturn: U,
      sortableChildrenReturn: $,
      typeaheadNavigationReturn: G
    };
  }
  function Un({ info: { index: e, untabbable: t, ...n }, context: r, textContentParameters: o, linearNavigationParameters: a, rovingTabIndexParameters: l, typeaheadNavigationParameters: u, gridNavigationSelectionSortableRowParameters: m, hasCurrentFocusParameters: { onCurrentFocusedChanged: f, onCurrentFocusedInnerChanged: i, ...c }, singleSelectionChildParameters: d, multiSelectionChildParameters: p, ...h }) {
    k(Un);
    let { info: C, paginatedChildReturn: g, props: v, ...b } = dt({ info: { index: e }, context: r }), { info: x, staggeredChildReturn: _, props: T, ...I } = $e({ info: { index: e }, context: r });
    t ||= g.hideBecausePaginated || _.hideBecauseStaggered;
    let S = R(() => Ce.getChildren(), []), P = R(() => S().getHighestIndex(), []), L = R(() => S().getLowestIndex(), []), w = R((Oe) => {
      let bt = S().getAt(Oe);
      return !(bt == null || bt.untabbable);
    }, []), { refElementReturn: D, propsStable: y, ...M } = se({ refElementParameters: {} }), O = Rn({
      rovingTabIndexParameters: l,
      typeaheadNavigationParameters: { isValidForTypeaheadNavigation: w, ...u },
      linearNavigationParameters: { isValidForLinearNavigation: w, getHighestIndex: P, getLowestIndex: L, ...a },
      managedChildrenReturn: { getChildren: S },
      refElementReturn: D,
      context: r,
      info: { index: e, untabbable: t },
      textContentParameters: o,
      gridNavigationSelectionSortableRowParameters: m,
      singleSelectionChildParameters: d,
      multiSelectionChildParameters: p
    }), { linearNavigationReturn: U, managedChildrenParameters: $, pressParameters: G, rovingTabIndexChildReturn: W, rovingTabIndexReturn: Q, singleSelectionChildReturn: Z, multiSelectionChildReturn: ie, textContentReturn: te, typeaheadNavigationReturn: ve, context: he, info: ee, props: ne, hasCurrentFocusParameters: { onCurrentFocusedInnerChanged: J, ...F }, ...V } = O, { context: K, managedChildrenReturn: Ce } = Me({ managedChildrenParameters: $ }), ye = {
      getElement: D.getElement,
      index: e,
      untabbable: t,
      ...ee,
      ...C,
      ...x
    }, { managedChildReturn: ke, ...Ye } = Ae({ context: r, info: { ...ye, ...n } }), ht = q({
      ...he,
      ...K
    }), { hasCurrentFocusReturn: Ze } = De({
      refElementReturn: D,
      hasCurrentFocusParameters: {
        onCurrentFocusedChanged: f,
        onCurrentFocusedInnerChanged: E((Oe, bt, Mr) => {
          J?.(Oe, bt, Mr), i?.(Oe, bt, Mr);
        })
      }
    }), gt = B(y, ne, Ze.propsStable, v, T);
    return {
      pressParameters: G,
      hasCurrentFocusReturn: Ze,
      managedChildrenReturn: Ce,
      context: ht,
      managedChildReturn: ke,
      staggeredChildReturn: _,
      paginatedChildReturn: g,
      linearNavigationReturn: U,
      rovingTabIndexChildReturn: W,
      rovingTabIndexReturn: Q,
      singleSelectionChildReturn: Z,
      multiSelectionChildReturn: ie,
      textContentReturn: te,
      typeaheadNavigationReturn: ve,
      props: gt
    };
  }
  function jn({ gridNavigationCellParameters: e, context: t, textContentParameters: n, info: { focusSelf: r, index: o, untabbable: a, getSortValue: l, ...u }, ...m }) {
    k(jn);
    let { refElementReturn: f, propsStable: i } = se({ refElementParameters: {} }), { hasCurrentFocusParameters: c, rovingTabIndexChildReturn: d, textContentReturn: p, pressParameters: { excludeSpace: h }, props: C, info: g, ...v } = kn({
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
    }), x = {
      getSortValue: l,
      getElement: f.getElement,
      getLocallyTabbable: d.getTabbable,
      setLocallyTabbable: g.setLocallyTabbable,
      focusSelf: r,
      index: o,
      untabbable: a
    }, { managedChildReturn: _ } = Ae({ context: t, info: { ...x, ...u } });
    return {
      props: B(i, C, b.propsStable),
      refElementReturn: f,
      rovingTabIndexChildReturn: d,
      pressParameters: { excludeSpace: E(() => h?.() || !1) },
      hasCurrentFocusReturn: b,
      managedChildReturn: _,
      textContentReturn: p
    };
  }
  function Ir({ gridNavigationParameters: e, linearNavigationParameters: t, paginatedChildrenParameters: n, rearrangeableChildrenParameters: r, rovingTabIndexParameters: o, singleSelectionDeclarativeParameters: a, multiSelectionParameters: l, sortableChildrenParameters: u, staggeredChildrenParameters: m, typeaheadNavigationParameters: f, singleSelectionParameters: i, refElementParameters: c, ...d }) {
    let p = Tr({
      linearNavigationParameters: t,
      paginatedChildrenParameters: n,
      rearrangeableChildrenParameters: r,
      rovingTabIndexParameters: o,
      singleSelectionParameters: { initiallySingleSelectedIndex: a.singleSelectedIndex, onSingleSelectedIndexChange: E((...v) => h?.(...v)), ...i },
      multiSelectionParameters: l,
      sortableChildrenParameters: u,
      staggeredChildrenParameters: m,
      refElementParameters: c,
      typeaheadNavigationParameters: f,
      gridNavigationParameters: e
    }), { singleSelectionParameters: { onSingleSelectedIndexChange: h } } = At({
      singleSelectionDeclarativeParameters: a,
      singleSelectionReturn: p.singleSelectionReturn
    }), { singleSelectionReturn: { getSingleSelectedIndex: C }, ...g } = p;
    return { ...g, singleSelectionReturn: { getSingleSelectedIndex: C } };
  }

  // ../dist/component-use/use-list-navigation-complete.js
  function Pr({ linearNavigationParameters: e, rearrangeableChildrenParameters: t, sortableChildrenParameters: n, typeaheadNavigationParameters: r, rovingTabIndexParameters: o, singleSelectionParameters: a, multiSelectionParameters: l, paginatedChildrenParameters: u, staggeredChildrenParameters: m, refElementParameters: f, ...i }) {
    k(Pr);
    let { initiallySingleSelectedIndex: c } = a, d = R(() => F.getChildren(), []), p = R(() => d().getLowestIndex(), []), h = R(() => d().getHighestIndex(), []), C = R((K) => {
      let Ce = d().getAt(K);
      return !(!Ce || Ce.untabbable);
    }, []), { propsStable: g, refElementReturn: v } = se({ refElementParameters: f }), { childrenHaveFocusParameters: b, managedChildrenParameters: { onChildrenMountChange: x, ..._ }, context: { rovingTabIndexContext: T, singleSelectionContext: I, multiSelectionContext: S, typeaheadNavigationContext: P }, linearNavigationReturn: L, rovingTabIndexReturn: w, singleSelectionReturn: D, multiSelectionReturn: y, typeaheadNavigationReturn: M, rearrangeableChildrenReturn: O, sortableChildrenReturn: U, props: $, ...G } = Ln({
      managedChildrenReturn: { getChildren: d },
      linearNavigationParameters: { getLowestIndex: p, getHighestIndex: h, isValidForLinearNavigation: C, ...e },
      typeaheadNavigationParameters: { isValidForTypeaheadNavigation: C, ...r },
      rovingTabIndexParameters: { untabbableBehavior: "focus-parent", ...o },
      singleSelectionParameters: a,
      multiSelectionParameters: l,
      rearrangeableChildrenParameters: {
        onRearranged: E(() => {
          ie(u.paginationMin, u.paginationMax);
        }),
        ...t
      },
      paginatedChildrenParameters: u,
      refElementReturn: v,
      sortableChildrenParameters: n,
      childrenHaveFocusReturn: { getAnyFocused: E(() => Q.getAnyFocused()) }
    }), { context: { childrenHaveFocusChildContext: W }, childrenHaveFocusReturn: Q } = Ve({ childrenHaveFocusParameters: b }), { paginatedChildrenReturn: Z, paginatedChildrenReturn: { refreshPagination: ie }, managedChildrenParameters: te, context: { paginatedChildContext: ve } } = ct({ refElementReturn: v, managedChildrenReturn: { getChildren: E(() => F.getChildren()) }, rovingTabIndexReturn: w, paginatedChildrenParameters: u, rearrangeableChildrenReturn: { indexDemangler: O.indexDemangler } }), { context: { staggeredChildContext: he }, staggeredChildrenReturn: ee } = We({ managedChildrenReturn: { getChildren: E(() => F.getChildren()) }, staggeredChildrenParameters: m }), ne = Me({
      managedChildrenParameters: {
        onChildrenMountChange: x,
        ...te,
        ..._
      }
    }), { context: { managedChildContext: J }, managedChildrenReturn: F } = ne, V = q(q({
      childrenHaveFocusChildContext: W,
      managedChildContext: J,
      paginatedChildContext: ve,
      rovingTabIndexContext: T,
      singleSelectionContext: I,
      multiSelectionContext: S,
      staggeredChildContext: he,
      typeaheadNavigationContext: P
    }));
    return {
      context: V,
      props: B($, g),
      managedChildrenReturn: F,
      rearrangeableChildrenReturn: O,
      staggeredChildrenReturn: ee,
      paginatedChildrenReturn: Z,
      sortableChildrenReturn: U,
      linearNavigationReturn: L,
      rovingTabIndexReturn: w,
      singleSelectionReturn: D,
      multiSelectionReturn: y,
      typeaheadNavigationReturn: M,
      childrenHaveFocusReturn: Q
    };
  }
  function wr({
    info: { index: e, focusSelf: t, untabbable: n, getSortValue: r, ...o },
    // The "...info" is empty if M is the same as UCLNCI<ChildElement>.
    textContentParameters: a,
    refElementParameters: l,
    hasCurrentFocusParameters: { onCurrentFocusedChanged: u, onCurrentFocusedInnerChanged: m, ...f },
    singleSelectionChildParameters: i,
    multiSelectionChildParameters: c,
    context: { managedChildContext: d, rovingTabIndexContext: p, paginatedChildContext: h, staggeredChildContext: C, singleSelectionContext: g, multiSelectionContext: v, typeaheadNavigationContext: b, childrenHaveFocusChildContext: x, ..._ },
    ...T
  }) {
    k(wr);
    let { info: I, paginatedChildReturn: S, paginatedChildReturn: { hideBecausePaginated: P }, props: L } = dt({ info: { index: e }, context: { paginatedChildContext: h } }), { info: w, staggeredChildReturn: D, staggeredChildReturn: { hideBecauseStaggered: y }, props: M } = $e({ info: { index: e }, context: { staggeredChildContext: C } });
    n ||= P || y;
    let { refElementReturn: O, propsStable: U, ...$ } = se({ refElementParameters: l }), { hasCurrentFocusParameters: { onCurrentFocusedInnerChanged: G, ...W }, pressParameters: { excludeSpace: Q, onPressSync: Z, ...ie }, textContentReturn: te, singleSelectionChildReturn: ve, multiSelectionChildReturn: he, info: ee, rovingTabIndexChildReturn: ne, propsChild: J, propsTabbable: F, ...V } = Fn({
      info: { index: e, untabbable: n },
      context: { rovingTabIndexContext: p, singleSelectionContext: g, multiSelectionContext: v, typeaheadNavigationContext: b },
      singleSelectionChildParameters: i,
      multiSelectionChildParameters: c,
      refElementReturn: O,
      textContentParameters: a
    }), K = {
      index: e,
      focusSelf: t,
      getElement: O.getElement,
      getSortValue: r,
      untabbable: n,
      ...w,
      ...I,
      ...ee
    }, { managedChildReturn: Ce } = Ae({ context: { managedChildContext: d }, info: { ...K, ...o } }), { hasCurrentFocusParameters: { onCurrentFocusedInnerChanged: ye } } = ft({ context: { childrenHaveFocusChildContext: x } }), ke = E((Ze, gt, Oe) => {
      G?.(Ze, gt, Oe), ye?.(Ze, gt, Oe), m?.(Ze, gt, Oe);
    }), { hasCurrentFocusReturn: Ye } = De({
      hasCurrentFocusParameters: {
        onCurrentFocusedInnerChanged: ke,
        onCurrentFocusedChanged: u
      },
      refElementReturn: O
    }), ht = B(U, Ye.propsStable, J, L, M);
    return {
      propsChild: ht,
      propsTabbable: F,
      pressParameters: {
        onPressSync: Z,
        excludeSpace: Q
      },
      textContentReturn: te,
      refElementReturn: O,
      singleSelectionChildReturn: ve,
      multiSelectionChildReturn: he,
      hasCurrentFocusReturn: Ye,
      managedChildReturn: Ce,
      paginatedChildReturn: S,
      staggeredChildReturn: D,
      rovingTabIndexChildReturn: ne
    };
  }
  function Rr({ singleSelectionParameters: e, singleSelectionDeclarativeParameters: t, ...n }) {
    let r = Pr({
      singleSelectionParameters: {
        initiallySingleSelectedIndex: t.singleSelectedIndex,
        // Needs to be a (stable) callback because of declaration order
        onSingleSelectedIndexChange: E((...f) => o?.(...f)),
        ...e
      },
      ...n
    }), { singleSelectionParameters: { onSingleSelectedIndexChange: o, ...a }, ...l } = At({ singleSelectionDeclarativeParameters: t, singleSelectionReturn: r.singleSelectionReturn }), { singleSelectionReturn: { getSingleSelectedIndex: u }, ...m } = r;
    return { ...m, singleSelectionReturn: { getSingleSelectedIndex: u } };
  }
  function kr({ multiSelectionChildParameters: e, multiSelectionChildDeclarativeParameters: { multiSelected: t, onMultiSelectedChange: n }, ...r }) {
    let o = wr({
      multiSelectionChildParameters: {
        initiallyMultiSelected: t,
        onMultiSelectChange: E((i) => {
          a(i);
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
  function Gn({ dismissParameters: { dismissActive: e, onDismiss: t, ...n }, escapeDismissParameters: { dismissEscapeActive: r, onDismissEscape: o, parentDepth: a, ...l }, focusTrapParameters: { trapActive: u, ...m }, activeElementParameters: { getDocument: f, onActiveElementChange: i, onLastActiveElementChange: c, onWindowFocusedChange: d, ...p }, backdropDismissParameters: { dismissBackdropActive: h, onDismissBackdrop: C, ...g }, lostFocusDismissParameters: { dismissLostFocusActive: v, onDismissLostFocus: b, ...x }, refElementParameters: { onElementChange: _, onMount: T, onUnmount: I, ...S }, modalParameters: { active: P, ...L }, ...w }) {
    k(Gn);
    let { refElementPopupReturn: D, refElementSourceReturn: y, propsStablePopup: M, propsStableSource: O } = An({
      dismissParameters: { dismissActive: e && P, onDismiss: t },
      escapeDismissParameters: { dismissEscapeActive: r, onDismissEscape: o, parentDepth: a },
      activeElementParameters: { getDocument: f, onActiveElementChange: i, onLastActiveElementChange: c, onWindowFocusedChange: d },
      backdropDismissParameters: { dismissBackdropActive: h, onDismissBackdrop: C },
      lostFocusDismissParameters: { dismissLostFocusActive: v, onDismissLostFocus: b }
    }), { propsStable: U, refElementReturn: $ } = se({ refElementParameters: { onElementChange: _, onMount: T, onUnmount: I } }), { props: G } = ut({
      focusTrapParameters: { trapActive: u && P, ...m },
      activeElementParameters: { getDocument: f, onActiveElementChange: i, onLastActiveElementChange: c, onWindowFocusedChange: d },
      refElementReturn: $
    });
    return {
      propsFocusContainer: B(U, G),
      refElementPopupReturn: D,
      refElementSourceReturn: y,
      propsStablePopup: M,
      propsStableSource: O
    };
  }

  // ../node_modules/.pnpm/github.com+mwszekely+async-to-sync@624c049a849d0a02039c1ec14f78617394daabce/node_modules/async-to-sync/dist/index.js
  function Kl(e) {
    return e instanceof Promise;
  }
  var Bn = Symbol("Unset");
  function Aa({ asyncInput: e, onInvoke: t, onInvoked: n, onFinally: r, onReject: o, onResolve: a, onHasError: l, onHasResult: u, onError: m, onReturnValue: f, capture: i, onAsyncDebounce: c, onSyncDebounce: d, onPending: p, throttle: h, wait: C }) {
    let g = !1, v = !1, b = !1, x = Bn, _ = () => {
      r?.(), p?.(g = !1);
      let P = !b;
      c?.(b = !1), P || (console.assert(x !== Bn), x != Bn && (d?.(v = !0), S()));
    }, T = (...P) => {
      p?.(g = !0), console.assert(v == !1), l?.(null), u?.(null);
      let L, w = !1;
      try {
        t?.(), L = e(...P), l?.(!1);
      } catch (D) {
        w = !0, m?.(D), n?.("throw");
      }
      Kl(L) ? (n?.("async"), L.then((D) => (a?.(), u?.(!0), f?.(D), D)).catch((D) => (o?.(), l?.(!0), m?.(D), D)).finally(_)) : (n?.("sync"), w ? (o?.(), u?.(!1), l?.(!0)) : (a?.(), u?.(!0), l?.(!1)), f?.(L), p?.(g = !1), _());
    }, I = {
      leading: !C,
      trailing: !0
    };
    h && ((C == null || C < h) && (C = h), I.maxWait = h);
    let S = mr(() => {
      d?.(v = !1), g ? c?.(b = !0) : (console.assert(x != Bn), T(...x));
    }, C || void 0, I);
    return {
      syncOutput: (...P) => {
        x = i?.(...P) ?? [], d?.(v = !0), S();
      },
      flushSyncDebounce: () => {
        S.flush();
      },
      cancelSyncDebounce: () => {
        S.cancel();
      }
    };
  }

  // ../dist/preact-extensions/use-async.js
  function Jl(...e) {
    return e;
  }
  var Xl = async function() {
  }.constructor;
  function Ht(e, t) {
    k(Ht);
    let [n, r, o] = N(!1), [a, l, u] = N(void 0), [m, f, i] = N(void 0), [c, d, p] = N(!1), [h, C, g] = N(!1), [v, b] = N(!1), [x, _] = N(!1), [T, I] = N(e instanceof Xl ? "async" : null), [S, P] = N(0), [L, w] = N(0), [D, y] = N(0), [M, O] = N(0), U = R(() => {
      P((J) => J + 1);
    }, []), $ = R(() => {
      y((J) => J + 1);
    }, []), G = R(() => {
      O((J) => J + 1);
    }, []), W = R(() => {
      w((J) => J + 1);
    }, []), { throttle: Q, debounce: Z, capture: ie } = t ?? {}, te = E(ie ?? Jl), ve = E(e ?? Je), { flushSyncDebounce: he, syncOutput: ee, cancelSyncDebounce: ne } = ue(() => Aa({
      asyncInput: ve,
      capture: te,
      onAsyncDebounce: b,
      onError: f,
      onPending: r,
      onReturnValue: l,
      onSyncDebounce: _,
      onHasError: d,
      onHasResult: C,
      onInvoked: I,
      onInvoke: U,
      onFinally: W,
      onReject: G,
      onResolve: $,
      throttle: t?.throttle ?? void 0,
      wait: t?.debounce ?? void 0
    }), [Q, Z]);
    return j(() => () => ne(), [ne]), {
      syncHandler: ee,
      pending: n,
      result: a,
      error: m,
      hasError: c || !1,
      hasResult: h || !1,
      resolveCount: D,
      rejectCount: M,
      settleCount: L,
      debouncingAsync: v,
      debouncingSync: x,
      invocationResult: T,
      callCount: S,
      flushDebouncedPromise: he
    };
  }

  // ../dist/dom-helpers/use-async-handler.js
  function mt({ asyncHandler: e, capture: t, ...n }) {
    k(mt);
    let [r, o, a] = N(void 0), [l, u] = N(!1), m = E((f) => {
      let i = t(f);
      return o(i), u(!0), [i, f];
    });
    return {
      getCurrentCapture: a,
      currentCapture: r,
      hasCapture: l,
      ...Ht(e, { capture: m, ...n })
    };
  }

  // ../dist/component-use/use-press.js
  function Ql() {
    return "onpointerup" in window;
  }
  function pt(e) {
    k(pt);
    let { refElementReturn: { getElement: t }, pressParameters: { focusSelf: n, onPressSync: r, allowRepeatPresses: o, longPressThreshold: a, excludeEnter: l, excludePointer: u, excludeSpace: m, onPressingChange: f } } = e, i = E(l ?? xe), c = E(m ?? xe), d = E(u ?? xe), p = E(f ?? Rt), [h, C] = z(p, xe), g = r != null, [v, b] = z(E((F, V, K) => {
      if (F) {
        let Ce = setTimeout(() => {
          b(!1, K);
        }, 1);
        return clearTimeout(Ce);
      }
    }), xe), [x, _] = N(null), [T, I, S] = N(!1), [P, L, w] = N(!1), [D, y, M] = N(!1), O = E((F) => {
      F.preventDefault(), F.stopPropagation(), C(!0, F), L(!0), y(!0), _(!1);
      let V = t();
      V && n(V);
    }), U = R((F) => {
      F.preventDefault(), F.stopPropagation();
      let V = t(), K = F.touches[0], Ce = [
        [0, 0],
        [-K.radiusX || 0, -K.radiusY || 0],
        [+K.radiusX || 0, -K.radiusY || 0],
        [-K.radiusX || 0, +K.radiusY || 0],
        [+K.radiusX || 0, +K.radiusY || 0]
      ], ye = !1;
      for (let [ke, Ye] of Ce) {
        let ht = document.elementFromPoint((K?.clientX ?? 0) + ke, (K?.clientY ?? 0) + Ye);
        ye ||= V?.contains(ht) ?? !1;
      }
      C(ye && w(), F), y(ye);
    }, []), $ = R((F) => {
      F.preventDefault(), F.stopPropagation();
      let V = M(), K = w();
      b(!0, F), K && V && te(F), I(!1), y(!1), L(!1), C(!1, F);
    }, []), G = E((F) => {
      if (!d() && F.buttons & 1) {
        F.preventDefault(), F.stopPropagation(), C(!0, F), L(!0), y(!0), _(!1);
        let V = t();
        V && n(V);
      }
    }), W = E((F) => {
      let V = w();
      if (F.buttons & 1 || L(V = !1), V) {
        let K = t(), Ce = document.elementFromPoint(F.clientX, F.clientY), ye = K == Ce || K?.contains(Ce) || !1;
        y(ye), C(ye && w(), F);
      }
    }), Q = R((F) => {
      let V = M(), K = w();
      d() || (b(!0, F), K && V && (te(F), F.preventDefault(), F.stopPropagation())), I(!1), y(!1), L(!1), _(!1), C(!1, F);
    }, []), Z = R((F) => {
      y(!0);
    }, []), ie = R((F) => {
      y(!1), _(!1);
    }, []);
    je({
      callback: () => {
        let F = t();
        _(P && M()), F && P && M() && (n(F), a && (I(!1), y(!1), L(!1)));
      },
      timeout: a ?? null,
      triggerIndex: x ? !0 : P && M()
    });
    let te = E((F) => {
      if (I(!1), y(!1), L(!1), _(null), r) {
        let V = t();
        V && n(V), F.preventDefault(), F.stopPropagation();
        try {
          Yl();
        } finally {
          r(F);
        }
      }
    }), ve = E((F) => {
      r && (F.key == " " && !c() && (I(!0), C(!0, F), F.preventDefault()), F.key == "Enter" && !i() && (!F.repeat || (o ?? !1)) && (C(!0, F), te(F), requestAnimationFrame(() => {
        C(!1, F);
      })));
    }), he = E((F) => {
      S() && F.key == " " && !c() && (te(F), C(!1, F));
    }), ee = E((F) => {
      let V = t();
      if (r) {
        if (F.preventDefault(), F.detail > 1)
          "stopImmediatePropagation" in F && F.stopImmediatePropagation(), F.stopPropagation();
        else if (
          // Ignore the click events that were *just* handled with pointerup
          v() == !1 && // Ignore stray click events that were't fired SPECIFICALLY on this element
          F.target == V && // Ignore click events that were fired on a radio that just became checked
          // (Whenever the `checked` property is changed, all browsers fire a `click` event, no matter the reason for the change,
          // but since everything's declarative and *we* were the reason for the change, 
          // this will always be a duplicate event related to whatever we just did.)
          V?.tagName == "input" && V.type == "radio" && V.checked
        ) {
          debugger;
          console.log("onclick was fired and will be handled as it doesn't look like it came from a pointer event", F), C(!0, F), requestAnimationFrame(() => {
            C(!1, F), te(F);
          }), te(F);
        }
      }
    }), ne = E((F) => {
      I(!1), C(!1, F);
    }), J = Ql();
    return {
      pressReturn: {
        pressing: P && D || T || !1,
        getIsPressing: h,
        longPress: x
      },
      props: {
        onKeyDown: ve,
        onKeyUp: he,
        onTouchStart: g ? J ? void 0 : O : void 0,
        onTouchCancel: g ? J ? void 0 : $ : void 0,
        onTouchMove: g ? J ? void 0 : U : void 0,
        onTouchEnd: g ? J ? void 0 : $ : void 0,
        onPointerDown: g && J ? G : void 0,
        onPointerCancel: g && J ? G : void 0,
        onPointerMove: !P || !g ? void 0 : J ? W : void 0,
        onPointerUp: g && J ? Q : void 0,
        onPointerEnter: g && J ? Z : void 0,
        onPointerLeave: g && J ? ie : void 0,
        [It]: ne,
        onClick: ee
      }
    };
  }
  var Yl = "vibrate" in navigator && navigator.vibrate instanceof Function ? () => navigator.vibrate(10) : () => {
  };

  // ../dist/component-use/use-random-id.js
  function Ut({ randomIdParameters: { prefix: e, otherReferencerProp: t } }) {
    k(Ut);
    let n = e + Et();
    Y("useRandomId", e, n);
    let r = A(t == null ? {} : { [t]: n }), o = A({ id: n });
    return Y("useRandomIdReferencerElement", t), {
      propsReferencer: r.current,
      propsSource: o.current,
      randomIdReturn: {
        id: n
      }
    };
  }

  // ../dist/component-use/use-random-dual-ids.js
  function Wn({ randomIdInputParameters: e, randomIdLabelParameters: t }) {
    k(Wn);
    let { randomIdReturn: n, propsReferencer: r, propsSource: o } = Ut({ randomIdParameters: e }), { randomIdReturn: a, propsReferencer: l, propsSource: u } = Ut({ randomIdParameters: t });
    return {
      propsLabel: B(r, u),
      propsInput: B(l, o),
      randomIdInputReturn: n,
      randomIdLabelReturn: a
    };
  }

  // ../dist/dom-helpers/use-draggable.js
  function $n({ effectAllowed: e, data: t, dragImage: n, dragImageXOffset: r, dragImageYOffset: o }) {
    k($n);
    let [a, l, u] = N(!1), [m, f, i] = N(null);
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
      getLastDropEffect: i
    };
  }

  // ../dist/dom-helpers/use-droppable.js
  var jt = class extends Error {
    fileName;
    errorType;
    constructor(t, n) {
      super(n?.message ?? "An unspecified error occurred reading the file."), this.fileName = t, this.errorType = n?.name;
    }
  };
  function Vn({ effect: e }) {
    k(Vn);
    let [t, n] = N(null), [r, o] = N(null), [a, l] = N(null), [u, m] = N(null), [f, i] = N(void 0), c = A([]), [d, p, h] = N(-1), [C, g, v] = N(0);
    j(() => {
      let S = h(), P = v();
      P > 0 && S + 1 < P && p((L) => ++L);
    }, [C]), j(() => {
      d >= 0 && c.current[d].then((P) => {
        if (P !== null) {
          let { files: D, strings: y } = P;
          l(D), m(y);
        }
        let L = h(), w = v();
        L + 1 < w && p((D) => ++D);
      });
    }, [d]);
    let b = E((S) => {
      if (S.preventDefault(), S.dataTransfer) {
        S.dataTransfer.dropEffect = e ?? "move";
        let P = /* @__PURE__ */ new Set(), L = new Array();
        for (let w of S.dataTransfer?.items ?? []) {
          let { kind: D, type: y } = w;
          D === "string" ? P.add(y) : D === "file" && L.push({ type: w.type });
        }
        n(L), o(P);
      }
    }), x = E((S) => {
      S.preventDefault(), n(null), o(null);
    }), _ = E((S) => {
      S.preventDefault();
    }), T = E((S) => {
      S.preventDefault(), n(null), o(null);
      let P = new Array(), L = {}, w = [];
      for (let D of S.dataTransfer?.items ?? []) {
        let { kind: y, type: M } = D;
        if (y === "string")
          P.push(new Promise((O, U) => D.getAsString(O)).then((O) => L[M] = O));
        else if (y === "file") {
          let O = D.getAsFile();
          O && (P.push(new Promise((U, $) => {
            let G = new FileReader();
            G.onload = (W) => {
              U();
              let Q = G.result;
              w.push({ data: Q, name: O.name, type: O.type, size: Q.byteLength, lastModified: O.lastModified });
            }, G.onerror = (W) => {
              $(new jt(O.name, G.error));
            }, G.onabort = (W) => {
              $(new jt(O.name, G.error));
            }, G.readAsArrayBuffer(O);
          })), w.push());
        }
      }
      c.current.push(Promise.all(P).then(() => (g((D) => ++D), i(null), {
        strings: L,
        files: w
      })).catch((D) => {
        debugger;
        return g((y) => ++y), i(D), null;
      }));
    });
    return {
      propsStable: A({ onDragEnter: b, onDragLeave: x, onDragOver: _, onDrop: T }).current,
      filesForConsideration: t,
      stringsForConsideration: r,
      droppedFiles: a,
      droppedStrings: u,
      dropError: f
    };
  }

  // ../dist/dom-helpers/use-imperative-props.js
  var Nr = null;
  function Zl(e, t) {
    let n = e.ownerDocument;
    return Nr ??= n.createElement("template"), Nr.innerHTML = t.trim(), Nr.content.firstChild;
  }
  var eu = ce(Kt(tu));
  function Dr({ refElementReturn: { getElement: e } }) {
    k(Dr);
    let t = A({ className: /* @__PURE__ */ new Set(), style: {}, children: null, html: null, others: {} }), n = R((c) => t.current.className.has(c), []), r = R((c, d) => {
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
        let p = Zl(d, c);
        if (console.assert(p && p instanceof Node), p && p instanceof Node)
          return t.current.children = null, t.current.html ||= "", t.current.html += c, d.appendChild(p), p;
      }
      return null;
    }, []), m = R((c) => t.current.others[c], []), f = R((c, d) => {
      d != null ? m(c) != d && (t.current.others[c] = d, e()?.setAttribute(c, d)) : m(c) != null && (delete t.current.others[c], e()?.removeAttribute(c));
    }, []), i = R((c, d, p) => {
      let h = e(), C = ir[c];
      h && (d ? (h.addEventListener(c, d, p), t.current.others[C] = d) : t.current.others[C] && (h.removeEventListener(c, t.current.others[C], p), t.current.others[C] = void 0));
    }, []);
    return {
      imperativePropsReturn: A({
        hasClass: n,
        setClass: r,
        setStyle: o,
        getAttribute: m,
        setAttribute: f,
        setEventHandler: i,
        setChildren: a,
        dangerouslySetInnerHTML: l,
        dangerouslyAppendHTML: u
      }).current,
      props: B({ className: [...t.current.className].join(" "), style: t.current.style }, t.current.html ? { dangerouslySetInnerHTML: { __html: t.current.html } } : {}, { children: t.current.children }, t.current.others)
    };
  }
  function tu({ tag: e, handle: t, ...n }, r) {
    let { propsStable: o, refElementReturn: a } = se({ refElementParameters: {} }), { props: l, imperativePropsReturn: u } = Dr({ refElementReturn: a });
    return St(t, () => u), fe(e, B(o, l, n, { ref: r }));
  }

  // ../dist/util/random-id.js
  var nu = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_-";
  function ru(e) {
    return nu[e];
  }
  function Re() {
    return Math.floor(Math.random() * 64);
  }
  function ou() {
    return [Re(), Re(), Re(), Re(), Re(), Re(), Re(), Re(), Re(), Re(), Re()];
  }
  function Lr(e) {
    return `${e ?? "id-"}${ou().map((t) => ru(t)).join("")}`;
  }

  // ../dist/dom-helpers/use-portal-children.js
  function zn({ target: e }) {
    k(zn);
    let [t, n] = N(null), [r, o] = N(null), [a, l] = N(null), u = E((d) => t?.(d) ?? -1), m = E((d, p) => r?.(d, p)), f = E((d) => a?.(d)), i = ue(() => e == null ? null : typeof e == "string" ? document.getElementById(e) : e, [e]);
    return {
      children: i ? Jt(fe(au, { setPushChild: n, setUpdateChild: o, setRemoveChild: l }), i) : null,
      pushChild: u,
      updateChild: m,
      removeChild: f,
      portalElement: i
    };
  }
  function au({ setPushChild: e, setUpdateChild: t, setRemoveChild: n }) {
    let [r, o, a] = N([]), l = R((f) => {
      let i = Lr(), c = a().length;
      return o((d) => [...d, et(f, { key: i, index: c })]), c;
    }, []), u = R((f, i) => {
      let c = a()[f]?.key;
      if (console.assert(!!c), c)
        return o((d) => {
          let p = d.slice();
          return p.splice(f, 1, et(i, { key: c, index: f })), p;
        }), f;
    }, []), m = R((f) => {
      let i = a()[f]?.key;
      if (console.assert(!!i), i)
        return o((c) => {
          let d = c.slice();
          return d.splice(f, 1), d;
        }), f;
    }, []);
    return oe(() => {
      e((f) => l);
    }, [l]), oe(() => {
      t((f) => u);
    }, [u]), oe(() => {
      n((f) => m);
    }, [m]), fe(ge, {}, r);
  }

  // ../dist/observers/use-has-last-focus.js
  function qn(e) {
    k(qn);
    let { refElementReturn: { getElement: t }, activeElementParameters: { onLastActiveElementChange: n, ...r }, hasLastFocusParameters: { onLastFocusedChanged: o, onLastFocusedInnerChanged: a, ...l } } = e;
    Y("useHasFocus", o, a);
    let [u, m] = z(o, xe, pe), [f, i] = z(a, xe, pe), { activeElementReturn: c } = Be({
      activeElementParameters: {
        onLastActiveElementChange: R((d, p, h) => {
          let C = t(), g = C != null && C == d, v = !!C?.contains(d);
          m(g, h), i(v, h), n?.(d, p, h);
        }, []),
        ...r
      }
    });
    return j(() => () => {
      m(!1, void 0), i(!1, void 0);
    }, []), {
      activeElementReturn: c,
      hasLastFocusReturn: {
        getLastFocused: u,
        getLastFocusedInner: f
      }
    };
  }

  // ../dist/observers/use-logical-direction.js
  var su = {
    inlineDirection: "ltr",
    blockDirection: "ttb",
    inlineOrientation: "horizontal",
    blockOrientation: "vertical",
    inlineSize: "width",
    blockSize: "height",
    leftRightDirection: "ltr",
    overUnderDirection: "ttb"
  }, SC = {
    ...su,
    inlineDirection: "rtl"
  }, Fr = {
    inlineDirection: "ttb",
    blockDirection: "rtl",
    inlineOrientation: "vertical",
    blockOrientation: "horizontal",
    inlineSize: "height",
    blockSize: "width",
    leftRightDirection: "ttb",
    overUnderDirection: "rtl"
  }, Oa = {
    ...Fr,
    inlineDirection: "btt"
  }, EC = { ...Fr }, TC = { ...Oa }, iu = {
    ...Fr,
    blockDirection: "ltr"
  }, IC = {
    ...Oa,
    blockDirection: "ltr"
  }, lu = {
    ...iu,
    inlineDirection: "btt",
    leftRightDirection: "btt",
    overUnderDirection: "ltr"
  }, PC = {
    ...lu,
    inlineDirection: "ttb"
  };

  // ../dist/timing/use-animation-frame.js
  var Cx = me(null);

  // ../dist/timing/use-interval.js
  function Kn({ interval: e, callback: t }) {
    k(Kn);
    let n = E(t), r = X(e);
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
  var mu = 0;
  function s(e, t, n, r, o, a) {
    var l, u, m = {};
    for (u in t)
      u == "ref" ? l = t[u] : m[u] = t[u];
    var f = { type: e, props: m, key: n, ref: l, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --mu, __source: o, __self: a };
    if (typeof e == "function" && (l = e.defaultProps))
      for (u in l)
        m[u] === void 0 && (m[u] = l[u]);
    return H.vnode && H.vnode(f), f;
  }

  // demos/use-grid.tsx
  var pu = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.".split(" "), hu = me(null), gu = me(null), Ha = me(null), Ua = ce(() => {
    let [e, t, n] = N(null), [r, o, a] = N(null), [l, u] = N(null), [m, f, i] = N(null), c = Ir({
      // `useRovingTabIndex` is a separate hook that you can call with these same parameters:
      rovingTabIndexParameters: {
        // If true, the entire grid is removed from the tab order
        untabbable: !1,
        // A function provided by you that is only called when no children are tabbable
        focusSelfParent: we,
        // This can be used to track when the user navigates between rows for any reason
        onTabbableIndexChange: u
      },
      // `useSingleSelection` is a separate hook that you can call with these parameters:
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
        selectedIndex: r,
        // What happens when the user selects a child?
        onSelectedIndexChange: (U) => o(U[Fe].selectedIndex)
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
        compare: R((U, $) => $.index - U.index, [])
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
        getSingleSelectedIndex: x
      },
      multiSelectionReturn: {
        // Nothing, actually
      },
      rearrangeableChildrenReturn: {
        // You must call this hook on your array of children to implement the sorting behavior
        useRearrangedChildren: _,
        // Largely internal use only
        indexDemangler: T,
        // Largely internal use only
        indexMangler: I,
        // Largely internal use only, but if you implement a custom sorting algorithm, call this to finalize the rearrangement. 
        rearrange: S,
        // Reverses all children 
        reverse: P,
        // Shuffles all children
        shuffle: L
      },
      sortableChildrenReturn: {
        // A table header button would probably call this function to sort all the table rows.
        sort: w
      },
      linearNavigationReturn: {},
      managedChildrenReturn: {
        // Returns metadata about each row
        getChildren: D
      },
      paginatedChildrenReturn: {
        // Largely internal use only
        refreshPagination: y
      },
      staggeredChildrenReturn: {
        // When the staggering behavior is currently hiding one or more children, this is true.
        stillStaggering: M
      },
      childrenHaveFocusReturn: {
        // Returns true if any row in this grid is focused
        getAnyFocused: O
      }
    } = c;
    return /* @__PURE__ */ s("div", { class: "demo", children: [
      /* @__PURE__ */ s("h2", { children: "useGridNavigationComplete" }),
      /* @__PURE__ */ s("p", { children: [
        "Like ",
        /* @__PURE__ */ s("code", { children: "useCompleteListNavigation" }),
        " but for 2D navigation. Cells can span multiple columns. Rows can be filtered, sorted, and arbitrarily re-arranged."
      ] }),
      /* @__PURE__ */ s("div", { children: [
        "Current row: ",
        l
      ] }),
      /* @__PURE__ */ s("div", { children: [
        "Current column: ",
        e?.actual,
        e?.ideal != e?.actual ? ` (wanted: ${e?.ideal})` : ""
      ] }),
      /* @__PURE__ */ s("table", { border: "2", style: { whiteSpace: "nowrap" }, children: [
        /* @__PURE__ */ s("thead", { children: /* @__PURE__ */ s("tr", { children: [
          /* @__PURE__ */ s("th", { children: "Row is tabbable?" }),
          /* @__PURE__ */ s("th", { children: "Column 1" }),
          /* @__PURE__ */ s("th", { children: "Column 2" }),
          /* @__PURE__ */ s("th", { children: "Column 3" })
        ] }) }),
        /* @__PURE__ */ s(hu.Provider, { value: m, children: /* @__PURE__ */ s(Ha.Provider, { value: i, children: /* @__PURE__ */ s(gu.Provider, { value: f, children: /* @__PURE__ */ s(ja.Provider, { value: p, children: /* @__PURE__ */ s("tbody", { ...d, children: _(
          Array.from(function* () {
            for (let U = 0; U < 10; ++U)
              yield /* @__PURE__ */ s(bu, { index: U }, U);
          }())
        ) }) }) }) }) })
      ] })
    ] });
  }), ja = me(null), Ga = me(null);
  var bu = ce(({ index: e }) => {
    let [t] = N(() => pu[
      e
      /*Math.floor(Math.random() * (RandomWords.length - 1))*/
    ]), [n, r, o] = N(null), a = e === 3, l = a, u = Ee(Ha), m = Ee(ja), f = Un({
      context: m,
      info: { index: e, foo: "bar", untabbable: a },
      textContentParameters: { getText: R((p) => p?.textContent ?? "", []) },
      linearNavigationParameters: { navigatePastEnd: "wrap", navigatePastStart: "wrap" },
      rovingTabIndexParameters: { onTabbableIndexChange: E((p) => {
        r(p);
      }), untabbable: !1, initiallyTabbedIndex: 0 },
      typeaheadNavigationParameters: { collator: null, noTypeahead: !1, typeaheadTimeout: 1e3, onNavigateTypeahead: null },
      hasCurrentFocusParameters: { onCurrentFocusedChanged: null, onCurrentFocusedInnerChanged: null },
      gridNavigationSelectionSortableRowParameters: { getSortableColumnIndex: u },
      singleSelectionChildParameters: { singleSelectionDisabled: !1 },
      multiSelectionChildParameters: { initiallyMultiSelected: !1, onMultiSelectChange: null, multiSelectionDisabled: !1 }
    }), {
      props: i,
      context: c,
      rovingTabIndexChildReturn: { tabbable: d }
    } = f;
    return /* @__PURE__ */ s("tr", { ...i, "data-tabbable": f.rovingTabIndexChildReturn.tabbable, children: /* @__PURE__ */ s(Ga.Provider, { value: c, children: [
      /* @__PURE__ */ s("td", { children: [
        n,
        ", ",
        d.toString()
      ] }),
      Array.from(function* () {
        for (let p = 0; p < 3; ++p)
          yield /* @__PURE__ */ s(vu, { index: p, row: e, rowIsTabbable: d }, p);
      }())
    ] }) });
  }), vu = ({ index: e, row: t, rowIsTabbable: n }) => {
    if (t >= 6 && t % 2 == 0 && e > 1)
      return null;
    let r = t === 3 ? " (row hidden)" : "", o = Ee(Ga), {
      props: a,
      rovingTabIndexChildReturn: { tabbable: l }
    } = jn({
      gridNavigationCellParameters: { colSpan: 1 },
      info: { index: e, bar: "baz", focusSelf: E((m) => m.focus()), untabbable: !1, getSortValue: X(e) },
      context: o,
      textContentParameters: { getText: R((m) => m?.textContent ?? "", []) }
    }), u = l ? "(Tabbable)" : "(Not tabbable)";
    return e === 0 ? /* @__PURE__ */ s("td", { ...a, children: n.toString() }) : t < 6 || t % 2 != 0 ? e === 1 ? /* @__PURE__ */ s("td", { ...a, children: [
      "Grid cell #",
      e + 1,
      " ",
      u,
      r
    ] }) : /* @__PURE__ */ s("td", { children: /* @__PURE__ */ s("label", { children: [
      /* @__PURE__ */ s("button", { ...a, type: "button", children: "Select row" }),
      " ",
      u,
      r
    ] }) }) : e === 1 ? /* @__PURE__ */ s("td", { ...a, colSpan: 2, children: [
      "Grid cell #",
      e + 1,
      ", span 2 ",
      u,
      r
    ] }) : null;
  };

  // demos/use-modal.tsx
  function Cu() {
    return globalThis.document;
  }
  function Jn(e) {
    let t = e.parentDepth ?? 0, n = t + 1, r = A(null), [o, a] = le(!0), [l, u] = le(!0), [m, f] = le(!0), [i, c] = le(!0), [d, p] = le(!1), [h, C] = le(null), [g, v] = le(!1), b = () => r.current?.focus(), {
      propsStablePopup: x,
      propsStableSource: _,
      propsFocusContainer: T
    } = Gn({
      focusTrapParameters: {
        trapActive: i,
        onlyMoveFocus: !1,
        focusOpener: b,
        focusPopup: E((I, S) => S()?.focus())
      },
      dismissParameters: {
        onDismiss: E((I, S) => {
          C(S), v(!1);
        }),
        dismissActive: !0
      },
      escapeDismissParameters: { parentDepth: t, dismissEscapeActive: !0, onDismissEscape: null },
      backdropDismissParameters: { dismissBackdropActive: !0, onDismissBackdrop: null },
      lostFocusDismissParameters: { dismissLostFocusActive: !0, onDismissLostFocus: null },
      modalParameters: { active: g },
      refElementParameters: {},
      activeElementParameters: { getDocument: Cu, onActiveElementChange: null, onLastActiveElementChange: null, onWindowFocusedChange: null }
    });
    return /* @__PURE__ */ s("div", { style: { border: `${n}px solid black` }, children: [
      /* @__PURE__ */ s("div", { children: "useModal demo:" }),
      /* @__PURE__ */ s("div", { style: "display: flex; flex-direction: column", children: [
        /* @__PURE__ */ s("label", { children: [
          /* @__PURE__ */ s("input", { type: "checkbox", disabled: !0, checked: !0 }),
          " Close by setting open to false"
        ] }),
        /* @__PURE__ */ s("label", { children: [
          /* @__PURE__ */ s("input", { type: "checkbox", checked: o, onInput: (I) => a(I.currentTarget.checked) }),
          " Close on backdrop click"
        ] }),
        /* @__PURE__ */ s("label", { children: [
          /* @__PURE__ */ s("input", { type: "checkbox", checked: l, onInput: (I) => u(I.currentTarget.checked) }),
          " Close on Escape key press"
        ] }),
        /* @__PURE__ */ s("label", { children: [
          /* @__PURE__ */ s("input", { type: "checkbox", checked: m, onInput: (I) => f(I.currentTarget.checked) }),
          " Close on focus lost"
        ] }),
        /* @__PURE__ */ s("label", { children: [
          /* @__PURE__ */ s("input", { type: "checkbox", checked: i, onInput: (I) => c(I.currentTarget.checked) }),
          " Trap focus"
        ] }),
        /* @__PURE__ */ s("br", {})
      ] }),
      /* @__PURE__ */ s("div", { children: [
        "Last reason for closing: ",
        h ?? "(hasn't been closed yet)"
      ] }),
      /* @__PURE__ */ s("button", { ..._, onClick: () => v(!0), children: "Open Modal" }),
      /* @__PURE__ */ s("div", { ...B(T, x), style: `border: ${n}px dotted red; background: #ccc`, children: /* @__PURE__ */ s("div", { style: { display: g ? "flex" : "none", flexDirection: "column" }, children: [
        /* @__PURE__ */ s("div", { children: [
          "Modal element at depth ",
          n,
          " with ",
          d ? "a" : "no",
          " child"
        ] }),
        /* @__PURE__ */ s("label", { children: [
          /* @__PURE__ */ s("input", { type: "checkbox", checked: d, onInput: (I) => p(I.currentTarget.checked), ref: r }),
          " Add a child modal"
        ] }),
        d && /* @__PURE__ */ s(Jn, { parentDepth: n }),
        /* @__PURE__ */ s("button", { ..._, onClick: () => v(!1), children: "Close modal programmatically" })
      ] }) })
    ] });
  }

  // demos/use-roving-tab-index.tsx
  var xu = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.".split(" ");
  var _u = me("focus"), yu = me("activation"), Su = me(!1), Ba = me(null), Wa = ce(() => {
    let [e, t] = N(0), [n, r] = N(null), [o, a] = N("focus"), [l, u] = N("activation"), [m, f] = N(10), [i, c] = N(null), [d, p] = N(null), [h, C] = N(!1);
    isFinite(i ?? NaN) || (i = null), isFinite(d ?? NaN) || (d = null);
    let g = !1, v = (y) => {
      t(y[Fe].selectedPercent);
    }, b = Rr({
      rovingTabIndexParameters: { onTabbableIndexChange: null, untabbable: g, focusSelfParent: we },
      singleSelectionDeclarativeParameters: { selectedIndex: n, onSelectedIndexChange: E((y) => {
        r(y[Fe].selectedIndex);
      }, []) },
      typeaheadNavigationParameters: { collator: null, noTypeahead: !1, typeaheadTimeout: 1e3, onNavigateTypeahead: null },
      linearNavigationParameters: { disableHomeEndKeys: !1, arrowKeyDirection: "vertical", navigatePastEnd: "wrap", navigatePastStart: "wrap", pageNavigationSize: 0.1, onNavigateLinear: null },
      rearrangeableChildrenParameters: {
        getIndex: R((y) => y.props.index, [])
      },
      refElementParameters: {},
      paginatedChildrenParameters: { paginationMin: i, paginationMax: d },
      sortableChildrenParameters: { compare: R((y, M) => M.index - y.index, []) },
      staggeredChildrenParameters: { staggered: h },
      singleSelectionParameters: { singleSelectionAriaPropName: "aria-selected", singleSelectionMode: o },
      multiSelectionParameters: { multiSelectionAriaPropName: "aria-checked", onSelectionChange: v, multiSelectionMode: l }
    }), {
      props: x,
      context: _,
      rovingTabIndexReturn: { setTabbableIndex: T },
      managedChildrenReturn: { getChildren: I },
      typeaheadNavigationReturn: { typeaheadStatus: S },
      rearrangeableChildrenReturn: { useRearrangedChildren: P, shuffle: L, reverse: w }
      //        rearrangeableChildrenReturn: { useRearrangedChildren: useSortableProps, shuffle }
    } = b, D = Array.from(function* () {
      for (let y = 0; y < m; ++y)
        yield /* @__PURE__ */ s(Eu, { index: y }, y);
    }());
    return /* @__PURE__ */ s("div", { className: "demo", children: [
      /* @__PURE__ */ s("h2", { children: "Keyboard & List Navigation" }),
      /* @__PURE__ */ s("h3", { children: /* @__PURE__ */ s("code", { children: "useCompleteListNavigation" }) }),
      /* @__PURE__ */ s("p", { children: "This hook accomplishes a few things:" }),
      /* @__PURE__ */ s("ul", { children: [
        /* @__PURE__ */ s("li", { children: [
          "Turns a group of widgets into one singular composite widget with only ",
          /* @__PURE__ */ s("strong", { children: "a single tab stop" }),
          ' shared between them (a "roving" tab stop, because it wanders back and forth).'
        ] }),
        /* @__PURE__ */ s("li", { children: [
          "Navigation within this composite widget is done via:",
          /* @__PURE__ */ s("ul", { children: [
            /* @__PURE__ */ s("li", { children: "Arrow keys (up/down or left/right depending in the orientation you specify)" }),
            /* @__PURE__ */ s("li", { children: "Page Up/Down to jump by a larger amount (either a fixed number or some percentage of the total number of items, as you specify)" }),
            /* @__PURE__ */ s("li", { children: "Home/End to jump to the first or last item" })
          ] })
        ] }),
        /* @__PURE__ */ s("li", { children: 'Items can be marked as "hidden", in which case they are skipped over when navigating, no matter the method. E.G. if Home is pressed but the first item is hidden, the second item is focused instead.' }),
        /* @__PURE__ */ s("li", { children: 'Items can be marked as "disabled" to prevent selection (with or without also marking them as "hidden", though "hidden" implies "disabled").' }),
        /* @__PURE__ */ s("li", { children: "Children can be reordered arbitrarily, including sorting, shuffling, etc. while ensuring coherent navigation regardless." }),
        /* @__PURE__ */ s("li", { children: [
          "The parent's selected index is ",
          /* @__PURE__ */ s("strong", { children: "uncontrolled" }),
          " and so it does not re-render itself when the selected index changes (you can easily make it controlled, of course, at the cost of 1 additional render. See ",
          /* @__PURE__ */ s("code", { children: "useSingleSelectionDeclarative" }),
          " for a shortcut to do exactly that)"
        ] }),
        /* @__PURE__ */ s("li", { children: "Changing which child is focused or selected only re-renders a maximum of 2 children each time." }),
        /* @__PURE__ */ s("li", { children: [
          "Lists can be nested, and there is no strict requirement on DOM structure (except for sorting/rearranging children, if you use that).",
          /* @__PURE__ */ s("ul", { children: /* @__PURE__ */ s("li", { children: [
            "If you don't need sorting/rearranging this DOM requirement is ",
            /* @__PURE__ */ s("strong", { children: "optional" }),
            "; rearranging requires all children be in one contiguous array of VNodes so that their ",
            /* @__PURE__ */ s("code", { children: "key" }),
            " props can be manipulated."
          ] }) })
        ] })
      ] }),
      /* @__PURE__ */ s("p", { children: "The biggest restriction of this method is that every child needs a 0-based numeric index." }),
      /* @__PURE__ */ s("label", { children: [
        "# of items",
        /* @__PURE__ */ s("input", { type: "number", value: m, min: 0, onInput: (y) => {
          y.preventDefault(), f(y.currentTarget.valueAsNumber);
        } })
      ] }),
      /* @__PURE__ */ s("button", { onClick: () => L(), children: "Shuffle" }),
      /* @__PURE__ */ s("button", { onClick: () => {
        debugger;
        w();
      }, children: "Reverse" }),
      /* @__PURE__ */ s("label", { children: [
        "Imperatively set the tabbable index to: ",
        /* @__PURE__ */ s("input", { type: "number", onInput: (y) => {
          y.preventDefault(), T(y.currentTarget.valueAsNumber, y, !1);
        } })
      ] }),
      /* @__PURE__ */ s("label", { children: [
        "Imperatively set the selected index to: ",
        /* @__PURE__ */ s("input", { type: "number", onInput: (y) => {
          y.preventDefault(), r(y.currentTarget.valueAsNumber);
        } }),
        " (currently ",
        n,
        ")"
      ] }),
      /* @__PURE__ */ s("label", { children: [
        "Pagination window starts at: ",
        /* @__PURE__ */ s("input", { type: "number", value: i ?? void 0, min: 0, max: d ?? void 0, onInput: (y) => {
          y.preventDefault(), c(y.currentTarget.valueAsNumber);
        } })
      ] }),
      /* @__PURE__ */ s("label", { children: [
        "Pagination window ends at: ",
        /* @__PURE__ */ s("input", { type: "number", value: d ?? void 0, min: i ?? void 0, max: m, onInput: (y) => {
          y.preventDefault(), p(y.currentTarget.valueAsNumber);
        } })
      ] }),
      /* @__PURE__ */ s("label", { children: [
        "Stagger delay: ",
        /* @__PURE__ */ s("input", { type: "checkbox", checked: h, onInput: (y) => {
          y.preventDefault(), C(y.currentTarget.checked);
        } })
      ] }),
      /* @__PURE__ */ s("label", { children: [
        "Single-Selection mode:",
        /* @__PURE__ */ s("label", { children: [
          /* @__PURE__ */ s("input", { name: "rti-demo-single-selection-mode", type: "radio", checked: o == "disabled", onInput: (y) => {
            y.preventDefault(), a("disabled");
          } }),
          " Off"
        ] }),
        /* @__PURE__ */ s("label", { children: [
          /* @__PURE__ */ s("input", { name: "rti-demo-single-selection-mode", type: "radio", checked: o == "focus", onInput: (y) => {
            y.preventDefault(), a("focus");
          } }),
          " On focus"
        ] }),
        /* @__PURE__ */ s("label", { children: [
          /* @__PURE__ */ s("input", { name: "rti-demo-single-selection-mode", type: "radio", checked: o == "activation", onInput: (y) => {
            y.preventDefault(), a("activation");
          } }),
          " On activation (click, tap, Enter, Space, etc.)"
        ] })
      ] }),
      /* @__PURE__ */ s("label", { children: [
        "Multi-Selection mode:",
        /* @__PURE__ */ s("label", { children: [
          /* @__PURE__ */ s("input", { name: "rti-demo-multi-selection-mode", type: "radio", checked: l == "disabled", onInput: (y) => {
            y.preventDefault(), u("disabled");
          } }),
          " Off"
        ] }),
        /* @__PURE__ */ s("label", { children: [
          /* @__PURE__ */ s("input", { name: "rti-demo-multi-selection-mode", type: "radio", checked: l == "focus", onInput: (y) => {
            y.preventDefault(), u("focus");
          } }),
          " On focus"
        ] }),
        /* @__PURE__ */ s("label", { children: [
          /* @__PURE__ */ s("input", { name: "rti-demo-multi-selection-mode", type: "radio", checked: l == "activation", onInput: (y) => {
            y.preventDefault(), u("activation");
          } }),
          " On activation (click, tap, Enter, Space, etc.)"
        ] })
      ] }),
      /* @__PURE__ */ s("div", { children: [
        "Typeahead status: ",
        S
      ] }),
      /* @__PURE__ */ s("div", { children: [
        "Multi-select: ",
        Math.round(e * 100 * 10) / 10,
        "%"
      ] }),
      /* @__PURE__ */ s(Su.Provider, { value: g, children: /* @__PURE__ */ s(_u.Provider, { value: o, children: /* @__PURE__ */ s(yu.Provider, { value: l, children: /* @__PURE__ */ s(Ba.Provider, { value: _, children: /* @__PURE__ */ s("ol", { start: 0, ...x, children: P(D) }) }) }) }) })
    ] });
  });
  var Eu = ce(({ index: e }) => {
    if (e == 1)
      return /* @__PURE__ */ s("li", { children: [
        "(Item ",
        e,
        " is a ",
        /* @__PURE__ */ s("strong", { children: "hole in the array" }),
        " and does not exist)"
      ] });
    let t = e == 6, n = e == 7;
    e == 8 && (t = n = !0);
    let [r, o] = N(!1), [a] = N(() => xu[e]), l = Ee(Ba), u = R((M) => {
      M.focus();
    }, []), m = E(() => e), {
      hasCurrentFocusReturn: f,
      managedChildReturn: i,
      propsChild: c,
      propsTabbable: d,
      textContentReturn: p,
      rovingTabIndexChildReturn: { tabbable: h },
      singleSelectionChildReturn: { singleSelected: C, getSingleSelected: g, singleSelectedOffset: v, getSingleSelectedOffset: b },
      multiSelectionChildReturn: { getMultiSelected: x },
      paginatedChildReturn: { hideBecausePaginated: _ },
      staggeredChildReturn: { hideBecauseStaggered: T },
      pressParameters: { onPressSync: I, excludeSpace: S },
      refElementReturn: P
    } = kr({
      info: { index: e, focusSelf: u, foo: "bar", untabbable: n, getSortValue: m },
      context: l,
      textContentParameters: { getText: R((M) => M?.textContent ?? "", []) },
      hasCurrentFocusParameters: { onCurrentFocusedChanged: null, onCurrentFocusedInnerChanged: null },
      refElementParameters: { onElementChange: null, onMount: null, onUnmount: null },
      multiSelectionChildParameters: { multiSelectionDisabled: t },
      singleSelectionChildParameters: { singleSelectionDisabled: t },
      multiSelectionChildDeclarativeParameters: { multiSelected: r, onMultiSelectedChange: (M) => o(M[Fe].multiSelected) }
    }), { pressReturn: L, props: w } = pt({ pressParameters: { focusSelf: u, onPressSync: I, excludeSpace: S, allowRepeatPresses: !1, excludeEnter: null, excludePointer: null, longPressThreshold: null, onPressingChange: null }, refElementReturn: P }), y = `${a} This is item #${e} (offset: ${C}) ${n ? " (hidden)" : ""}${t ? " (disabled)" : ""}${C && r ? " (single- & multi- selected)" : C ? " (single-selected)" : r ? " (multi-selected)" : ""} (${h ? "Tabbable" : "Not tabbable"})`;
    return /* @__PURE__ */ s("li", { ...B(c, d, w), style: { opacity: _ ? 0.25 : 1, transform: `translateX(${T ? "50%" : "0%"})` }, children: [
      y,
      /* @__PURE__ */ s("input", { ...B(d, { type: "number" }), style: { width: "5ch" } })
    ] });
  });

  // demos/use-timeout.tsx
  var $a = () => {
    let [e, t] = le(1e3), [n, r] = le(""), [o, a] = le(0);
    return je({ timeout: e, triggerIndex: n, callback: () => a((l) => ++l) }), /* @__PURE__ */ s("div", { class: "demo", children: [
      /* @__PURE__ */ s("h2", { children: "useTimeout" }),
      /* @__PURE__ */ s("p", { children: [
        /* @__PURE__ */ s("code", { children: "useEffect" }),
        " but on a timer"
      ] }),
      /* @__PURE__ */ s("label", { children: [
        "Timeout duration: ",
        /* @__PURE__ */ s("input", { type: "number", value: e, onInput: (l) => t(l.currentTarget.valueAsNumber) })
      ] }),
      /* @__PURE__ */ s("label", { children: [
        "Refresh key: ",
        /* @__PURE__ */ s("input", { type: "text", value: n, onInput: (l) => r(l.currentTarget.value) })
      ] }),
      /* @__PURE__ */ s("div", { children: [
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
  var Tu = () => {
    let { droppedFiles: e, droppedStrings: t, filesForConsideration: n, stringsForConsideration: r, propsStable: o, dropError: a } = Vn({ effect: "copy" }), { ref: l } = B({}, { ref: A(null) }), u = B(o, { className: "demo droppable" });
    return /* @__PURE__ */ s("div", { ...u, children: [
      t != null && /* @__PURE__ */ s("div", { children: [
        "Data dropped: ",
        /* @__PURE__ */ s("ul", { children: Object.entries(t).map(([m, f]) => /* @__PURE__ */ s("li", { children: [
          m,
          ": ",
          f
        ] })) })
      ] }),
      e != null && /* @__PURE__ */ s("div", { children: [
        "Files dropped: ",
        /* @__PURE__ */ s("table", { children: [
          /* @__PURE__ */ s("thead", { children: /* @__PURE__ */ s("tr", { children: [
            /* @__PURE__ */ s("th", { children: "Name" }),
            /* @__PURE__ */ s("th", { children: "Size" }),
            /* @__PURE__ */ s("th", { children: "Type" }),
            /* @__PURE__ */ s("th", { children: "Last modified" })
          ] }) }),
          /* @__PURE__ */ s("tbody", { children: e.map((m) => /* @__PURE__ */ s("tr", { children: [
            /* @__PURE__ */ s("td", { children: m.name }),
            m.data.byteLength,
            /* @__PURE__ */ s("td", { children: m.type }),
            /* @__PURE__ */ s("td", { children: new Date(m.lastModified ?? 0) })
          ] })) })
        ] })
      ] }),
      /* @__PURE__ */ s("hr", {}),
      r != null && /* @__PURE__ */ s("div", { children: [
        "Data being considered: ",
        /* @__PURE__ */ s("ul", { children: Array.from(r).map((m) => /* @__PURE__ */ s("li", { children: m })) })
      ] }),
      n != null && /* @__PURE__ */ s("div", { children: [
        "Files being considered: ",
        /* @__PURE__ */ s("ul", { children: n.map((m) => /* @__PURE__ */ s("li", { children: JSON.stringify(m) })) })
      ] }),
      /* @__PURE__ */ s("hr", {}),
      a ? /* @__PURE__ */ s("div", { children: a instanceof Error ? a.message : JSON.stringify(a) }) : null
    ] });
  }, Iu = () => {
    let { propsUnstable: e } = $n({ data: { "text/plain": "This is custom draggable content of type text/plain." }, dragImage: null, dragImageXOffset: null, dragImageYOffset: null, effectAllowed: null });
    return /* @__PURE__ */ s("div", { ...B(e, { className: "demo" }), children: "Draggable content" });
  }, Va = me(null), Pu = () => {
    let [e, t] = N(!1), [n, r] = N(10), [o, a] = N(5), [l, u] = N(o);
    Kn({
      callback: () => {
        e && (l == o ? u(n) : u(l - 1));
      },
      interval: 1e3
    });
    let [m, f] = N(!1), { context: i } = Ve({ childrenHaveFocusParameters: { onCompositeFocusChange: f } });
    return /* @__PURE__ */ s("div", { ...B({}, { className: "demo" }), children: [
      /* @__PURE__ */ s("h2", { children: "useChildrenHaveFocus" }),
      /* @__PURE__ */ s("p", { children: [
        "If you want to see if any of your children have focus, the easiest way is to just attach a ",
        /* @__PURE__ */ s("code", { children: "focusIn" }),
        " handler to the parent DOM node. But what if you don't have just one single parent DOM node? This hook lets you coordinate all the children to give you that information as if you were able to take that easy parent node route."
      ] }),
      /* @__PURE__ */ s("div", { children: /* @__PURE__ */ s("label", { children: [
        /* @__PURE__ */ s("input", { type: "number", min: 0, value: o, onInput: (c) => {
          c.preventDefault(), a(c.currentTarget.valueAsNumber);
        } }),
        " Min # of children"
      ] }) }),
      /* @__PURE__ */ s("div", { children: /* @__PURE__ */ s("label", { children: [
        /* @__PURE__ */ s("input", { type: "number", min: o, value: n, onInput: (c) => {
          c.preventDefault(), r(c.currentTarget.valueAsNumber);
        } }),
        " Max # of children"
      ] }) }),
      /* @__PURE__ */ s("div", { children: [
        "Current # of children: ",
        l
      ] }),
      /* @__PURE__ */ s("label", { children: [
        /* @__PURE__ */ s("input", { type: "checkbox", onInput: (c) => t(c.currentTarget.checked) }),
        " Mount & unmount children on a cycle"
      ] }),
      /* @__PURE__ */ s(Va.Provider, { value: i, children: [
        /* @__PURE__ */ s("div", { children: [
          "Any children focused: ",
          m.toString()
        ] }),
        /* @__PURE__ */ s("div", { children: Array.from(function* () {
          for (let c = 0; c < l; ++c)
            yield /* @__PURE__ */ s(wu, { index: c }, c);
        }()) })
      ] })
    ] });
  }, wu = ({ index: e }) => {
    let { hasCurrentFocusParameters: { onCurrentFocusedInnerChanged: t } } = ft({ context: Ee(Va) }), { refElementReturn: n, propsStable: r } = se({ refElementParameters: {} }), { hasCurrentFocusReturn: o } = De({ hasCurrentFocusParameters: { onCurrentFocusedChanged: null, onCurrentFocusedInnerChanged: t }, refElementReturn: n });
    return /* @__PURE__ */ s("div", { tabIndex: 0, ...B(r, o.propsStable), children: [
      "Focusable child #",
      e,
      /* @__PURE__ */ s("input", {}),
      /* @__PURE__ */ s("input", {})
    ] });
  };
  var Ru = ce(({ depth: e }) => {
    let [t, n] = N(!1), { propsStable: r, refElementReturn: o } = se({ refElementParameters: {} }), { props: a } = ut({
      focusTrapParameters: {
        trapActive: t,
        onlyMoveFocus: !1,
        focusOpener: (u) => u?.focus(),
        focusPopup: (u, m) => m()?.focus()
      },
      activeElementParameters: { getDocument: za, onActiveElementChange: null, onLastActiveElementChange: null, onWindowFocusedChange: null },
      refElementReturn: o
    }), l = B(a, r, { ref: void 0, className: "focus-trap-demo" });
    return e == 2 ? /* @__PURE__ */ s("div", {}) : /* @__PURE__ */ s("div", { className: "demo", children: [
      /* @__PURE__ */ s("label", { children: [
        "Active: ",
        /* @__PURE__ */ s("input", { type: "checkbox", checked: t, onInput: (u) => {
          u.preventDefault(), n(u.currentTarget.checked);
        } })
      ] }),
      /* @__PURE__ */ s("div", { ...l, children: /* @__PURE__ */ s(ku, { active: t, setActive: n, depth: e ?? 0 }) })
    ] });
  }), ku = ce(({ setActive: e, active: t }) => /* @__PURE__ */ s(ge, { children: [
    /* @__PURE__ */ s("button", { children: "Button 1" }),
    /* @__PURE__ */ s("button", { children: "Button 2" }),
    /* @__PURE__ */ s("button", { children: "Button 3" }),
    /* @__PURE__ */ s("label", { children: [
      "Active: ",
      /* @__PURE__ */ s("input", { type: "checkbox", checked: t, onInput: (n) => {
        n.preventDefault(), e(n.currentTarget.checked);
      } })
    ] })
  ] })), Nu = ce(() => {
    let [e, t] = N(1e3), [n, r] = N(0), [o, a, l] = N(!1), [u, m] = N(!1), f = (x, _) => new Promise((T, I) => window.setTimeout(() => l() ? I() : T(), e)), {
      callCount: i,
      settleCount: c,
      hasCapture: d,
      syncHandler: p,
      pending: h,
      hasError: C,
      rejectCount: g,
      resolveCount: v
    } = mt({
      asyncHandler: f,
      capture: () => {
      },
      debounce: n == 0 ? void 0 : n,
      throttle: null
    });
    return /* @__PURE__ */ s("div", { className: "demo", children: [
      /* @__PURE__ */ s("button", { disabled: h && u, onClick: h ? void 0 : p, children: "Click me!" }),
      /* @__PURE__ */ s("label", { children: [
        "Sleep for: ",
        /* @__PURE__ */ s("input", { type: "number", value: e, onInput: (x) => t(x.currentTarget.valueAsNumber) })
      ] }),
      /* @__PURE__ */ s("label", { children: [
        "Throw an error ",
        /* @__PURE__ */ s("input", { type: "checkbox", checked: o, onInput: (x) => a(x.currentTarget.checked) })
      ] }),
      /* @__PURE__ */ s("label", { children: [
        "Disabled while pending ",
        /* @__PURE__ */ s("input", { type: "checkbox", checked: u, onInput: (x) => m(x.currentTarget.checked) })
      ] }),
      /* @__PURE__ */ s("label", { children: [
        "Debounce: ",
        /* @__PURE__ */ s("input", { type: "number", value: n, onInput: (x) => r(x.currentTarget.valueAsNumber) })
      ] }),
      /* @__PURE__ */ s("table", { children: [
        /* @__PURE__ */ s("thead", { children: /* @__PURE__ */ s("tr", { children: [
          /* @__PURE__ */ s("th", { children: "Field" }),
          /* @__PURE__ */ s("th", { children: "Value" })
        ] }) }),
        /* @__PURE__ */ s("tbody", { children: [
          /* @__PURE__ */ s("tr", { children: [
            /* @__PURE__ */ s("td", { children: "callCount" }),
            /* @__PURE__ */ s("td", { children: i })
          ] }),
          /* @__PURE__ */ s("tr", { children: [
            /* @__PURE__ */ s("td", { children: "settleCount" }),
            /* @__PURE__ */ s("td", { children: c })
          ] }),
          /* @__PURE__ */ s("tr", { children: [
            /* @__PURE__ */ s("td", { children: "resolveCount" }),
            /* @__PURE__ */ s("td", { children: v })
          ] }),
          /* @__PURE__ */ s("tr", { children: [
            /* @__PURE__ */ s("td", { children: "rejectCount" }),
            /* @__PURE__ */ s("td", { children: g })
          ] }),
          /* @__PURE__ */ s("tr", { children: [
            /* @__PURE__ */ s("td", { children: "hasError" }),
            /* @__PURE__ */ s("td", { children: C.toString() })
          ] }),
          /* @__PURE__ */ s("tr", { children: [
            /* @__PURE__ */ s("td", { children: "hasCapture" }),
            /* @__PURE__ */ s("td", { children: d.toString() })
          ] })
        ] })
      ] })
    ] });
  }), Du = ce(() => {
    let [e, t] = N(1e3), [n, r] = N(0), [o, a] = N(0), [l, u, m] = N(!1), [f, i] = N(!1), [c, d] = N(""), p = async (w, D) => new Promise((y, M) => window.setTimeout(() => {
      m() ? M() : (d(w), y());
    }, e)), {
      callCount: h,
      settleCount: C,
      hasCapture: g,
      syncHandler: v,
      currentCapture: b,
      pending: x,
      hasError: _,
      rejectCount: T,
      resolveCount: I,
      debouncingAsync: S,
      debouncingSync: P
    } = mt({
      asyncHandler: p,
      capture: (w) => (w.preventDefault(), w.currentTarget.value),
      debounce: n == 0 ? void 0 : n,
      throttle: o == 0 ? void 0 : o
    });
    return /* @__PURE__ */ s("div", { className: "demo", children: [
      /* @__PURE__ */ s("label", { children: [
        "Demo text: ",
        /* @__PURE__ */ s("input", { value: g ? b : c, disabled: x && f, onInput: v })
      ] }),
      /* @__PURE__ */ s("hr", {}),
      /* @__PURE__ */ s("label", { children: [
        "# of milliseconds the async handler takes to run: ",
        /* @__PURE__ */ s("input", { type: "number", value: e, onInput: (w) => t(w.currentTarget.valueAsNumber) })
      ] }),
      /* @__PURE__ */ s("label", { children: [
        "Throw an error ",
        /* @__PURE__ */ s("input", { type: "checkbox", checked: l, onInput: (w) => u(w.currentTarget.checked) })
      ] }),
      /* @__PURE__ */ s("label", { children: [
        "Disabled while pending ",
        /* @__PURE__ */ s("input", { type: "checkbox", checked: f, onInput: (w) => i(w.currentTarget.checked) })
      ] }),
      /* @__PURE__ */ s("label", { children: [
        "Debounce: ",
        /* @__PURE__ */ s("input", { type: "number", value: n, onInput: (w) => r(w.currentTarget.valueAsNumber) })
      ] }),
      /* @__PURE__ */ s("label", { children: [
        "Throttle: ",
        /* @__PURE__ */ s("input", { type: "number", value: o, onInput: (w) => a(w.currentTarget.valueAsNumber) })
      ] }),
      /* @__PURE__ */ s("table", { children: [
        /* @__PURE__ */ s("thead", { children: /* @__PURE__ */ s("tr", { children: [
          /* @__PURE__ */ s("th", { children: "Field" }),
          /* @__PURE__ */ s("th", { children: "Value" })
        ] }) }),
        /* @__PURE__ */ s("tbody", { children: [
          /* @__PURE__ */ s("tr", { children: [
            /* @__PURE__ */ s("td", { children: "showSpinner" }),
            /* @__PURE__ */ s("td", { children: `${x || S || P}` })
          ] }),
          /* @__PURE__ */ s("tr", { children: [
            /* @__PURE__ */ s("td", { children: "pending" }),
            /* @__PURE__ */ s("td", { children: `${x}` })
          ] }),
          /* @__PURE__ */ s("tr", { children: [
            /* @__PURE__ */ s("td", { children: "debouncingSync" }),
            /* @__PURE__ */ s("td", { children: `${P}` })
          ] }),
          /* @__PURE__ */ s("tr", { children: [
            /* @__PURE__ */ s("td", { children: "debouncingAsync" }),
            /* @__PURE__ */ s("td", { children: `${S}` })
          ] }),
          /* @__PURE__ */ s("tr", { children: [
            /* @__PURE__ */ s("td", { children: "callCount" }),
            /* @__PURE__ */ s("td", { children: h })
          ] }),
          /* @__PURE__ */ s("tr", { children: [
            /* @__PURE__ */ s("td", { children: "settleCount" }),
            /* @__PURE__ */ s("td", { children: C })
          ] }),
          /* @__PURE__ */ s("tr", { children: [
            /* @__PURE__ */ s("td", { children: "resolveCount" }),
            /* @__PURE__ */ s("td", { children: I })
          ] }),
          /* @__PURE__ */ s("tr", { children: [
            /* @__PURE__ */ s("td", { children: "rejectCount" }),
            /* @__PURE__ */ s("td", { children: T })
          ] }),
          /* @__PURE__ */ s("tr", { children: [
            /* @__PURE__ */ s("td", { children: "hasError" }),
            /* @__PURE__ */ s("td", { children: _.toString() })
          ] }),
          /* @__PURE__ */ s("tr", { children: [
            /* @__PURE__ */ s("td", { children: "currentCapture" }),
            /* @__PURE__ */ s("td", { children: b })
          ] }),
          /* @__PURE__ */ s("tr", { children: [
            /* @__PURE__ */ s("td", { children: '"Saved" input' }),
            /* @__PURE__ */ s("td", { children: c })
          ] })
        ] })
      ] })
    ] });
  });
  function za() {
    return window.document;
  }
  var Lu = ce(() => {
    let [e, t] = N(0), [n, r] = N(0), [o, a] = N(null), [l, u] = N(null), [m, f] = N(!1), [i, c] = N(!1), [d, p] = N(!1), [h, C] = N(!1), [g, v] = N(!1), { refElementReturn: b, propsStable: x } = se({ refElementParameters: { onElementChange: void 0 } }), {
      hasCurrentFocusReturn: { propsStable: _ }
    } = De({
      refElementReturn: b,
      hasCurrentFocusParameters: {
        onCurrentFocusedChanged: E((T) => {
          c(T), T && t((I) => ++I);
        }),
        onCurrentFocusedInnerChanged: E((T) => {
          p(T), T && r((I) => ++I);
        })
      }
    });
    return qn({
      refElementReturn: b,
      activeElementParameters: {
        getDocument: za,
        onActiveElementChange: u,
        onLastActiveElementChange: a,
        onWindowFocusedChange: f
      },
      hasLastFocusParameters: {
        onLastFocusedChanged: C,
        onLastFocusedInnerChanged: v
      }
    }), /* @__PURE__ */ s("div", { class: "demo", children: [
      /* @__PURE__ */ s("h2", { children: "useHasFocus" }),
      /* @__PURE__ */ s("p", { children: "Tracks focus related to the component:" }),
      /* @__PURE__ */ s("ul", { children: [
        /* @__PURE__ */ s("li", { children: "Is this element (or, optionally, any element within it) focused?" }),
        /* @__PURE__ */ s("li", { children: [
          "Regardless of if focus was lost because the ",
          /* @__PURE__ */ s("code", { children: "body" }),
          " was clicked, was this element (or, optionally, any element within it), the last to be actually focused?"
        ] }),
        /* @__PURE__ */ s("li", { children: "Does the window have focus?" })
      ] }),
      /* @__PURE__ */ s("div", { ...B(x, _, { style: { border: "1px solid black" }, tabIndex: 0 }), children: [
        /* @__PURE__ */ s("span", { children: "Outer element" }),
        /* @__PURE__ */ s("input", {}),
        /* @__PURE__ */ s("input", {}),
        /* @__PURE__ */ s("div", { tabIndex: 0, style: { border: "1px solid black" }, children: [
          /* @__PURE__ */ s("span", { children: "Inner element" }),
          /* @__PURE__ */ s("input", {}),
          /* @__PURE__ */ s("input", {})
        ] })
      ] }),
      /* @__PURE__ */ s("div", { children: /* @__PURE__ */ s("ul", { children: [
        /* @__PURE__ */ s("li", { children: [
          "Focus count: ",
          e
        ] }),
        /* @__PURE__ */ s("li", { children: [
          "Inner focus count: ",
          n
        ] }),
        /* @__PURE__ */ s("li", { children: [
          "Strictly focused: ",
          i.toString(),
          ", ",
          h.toString(),
          " (focused, lastFocused)"
        ] }),
        /* @__PURE__ */ s("li", { children: [
          "Inner focused: ",
          d.toString(),
          ", ",
          g.toString(),
          " (focusedInner, lastFocusedInner)"
        ] }),
        /* @__PURE__ */ s("li", { children: [
          "Window focused: ",
          m.toString()
        ] }),
        /* @__PURE__ */ s("li", { children: [
          "activeElement: ",
          l?.textContent
        ] }),
        /* @__PURE__ */ s("li", { children: [
          "lastActiveElement: ",
          o?.textContent
        ] })
      ] }) })
    ] });
  });
  function Fu() {
    let { propsInput: e, propsLabel: t } = Wn({ randomIdInputParameters: { prefix: "input-", otherReferencerProp: "for" }, randomIdLabelParameters: { prefix: "label-", otherReferencerProp: "aria-labelledby" } });
    return /* @__PURE__ */ s("div", { className: "demo", children: [
      /* @__PURE__ */ s("h2", { children: "Labels" }),
      /* @__PURE__ */ s("input", { ...e }),
      /* @__PURE__ */ s("label", { ...t, children: "Label" })
    ] });
  }
  function qa({ remaining: e }) {
    let [t, n] = N(0), { refElementReturn: r, propsStable: o } = se({ refElementParameters: {} }), { props: a, pressReturn: { pressing: l, longPress: u } } = pt({
      pressParameters: { focusSelf: (m) => {
        m.focus();
      }, longPressThreshold: 1e3, onPressSync: () => {
        n((m) => ++m);
      }, allowRepeatPresses: !1, excludeEnter: null, excludePointer: null, excludeSpace: null, onPressingChange: null },
      refElementReturn: r
    });
    return /* @__PURE__ */ s("div", { className: "demo", children: [
      /* @__PURE__ */ s("h2", { children: "Press" }),
      /* @__PURE__ */ s("div", { children: [
        "Press count: ",
        t
      ] }),
      /* @__PURE__ */ s("div", { children: [
        "Active: ",
        l.toString()
      ] }),
      /* @__PURE__ */ s("div", { children: [
        "Long press: ",
        (u ?? "null").toString()
      ] }),
      /* @__PURE__ */ s("div", { style: { border: "1px solid black", touchAction: "none" }, tabIndex: 0, ...B(o, a), children: [
        /* @__PURE__ */ s("div", { children: "This DIV's parent is pressable. Click here to press, cancel by leaving or hovering over a pressable child." }),
        /* @__PURE__ */ s("div", { children: e > 0 && /* @__PURE__ */ s(qa, { remaining: e - 1 }) })
      ] })
    ] });
  }
  function Mu() {
    return console.log("Render portal child"), /* @__PURE__ */ s("p", { children: "Portal child" });
  }
  function Au() {
    let [e, t] = N(null), { children: n, pushChild: r, removeChild: o, updateChild: a } = zn({ target: e });
    return /* @__PURE__ */ s("div", { className: "demo", children: [
      /* @__PURE__ */ s("h2", { children: "Portal children" }),
      /* @__PURE__ */ s("button", { onClick: () => r(/* @__PURE__ */ s(Mu, {})), children: "Push child" }),
      n,
      /* @__PURE__ */ s("div", { id: "demo-portal-target", ref: t })
    ] });
  }
  function Ou() {
    let [e, t] = N(10), [n, r] = N("single"), [o, a] = N("");
    return /* @__PURE__ */ s("div", { className: "demo", children: [
      /* @__PURE__ */ s("div", { children: "Global event handlers:" }),
      /* @__PURE__ */ s("label", { children: [
        "# of event handlers",
        /* @__PURE__ */ s("input", { type: "number", value: e, min: 0, onInput: (l) => {
          l.preventDefault(), t(l.currentTarget.valueAsNumber);
        } })
      ] }),
      /* @__PURE__ */ s("div", { children: [
        /* @__PURE__ */ s("label", { children: [
          /* @__PURE__ */ s("input", { onInput: (l) => {
            l.preventDefault(), l.currentTarget.checked && r("grouped");
          }, type: "radio", name: "global-handler-mode" }),
          " Grouped"
        ] }),
        /* @__PURE__ */ s("label", { children: [
          /* @__PURE__ */ s("input", { onInput: (l) => {
            l.preventDefault(), l.currentTarget.checked && r("single");
          }, type: "radio", name: "global-handler-mode" }),
          " Single"
        ] }),
        /* @__PURE__ */ s("label", { children: [
          /* @__PURE__ */ s("input", { onInput: (l) => {
            l.preventDefault(), l.currentTarget.checked && r(null);
          }, type: "radio", name: "global-handler-mode" }),
          " Off"
        ] })
      ] }),
      /* @__PURE__ */ s("button", { id: "global-handler-test", onClick: () => {
        let l = /* @__PURE__ */ new Date();
        document.getElementById("global-handler-test2")?.click(), a((+/* @__PURE__ */ new Date() - +l) / 1e3 + "s passed");
      }, children: "Run test" }),
      /* @__PURE__ */ s("button", { id: "global-handler-test2", children: "Run test 2" }),
      /* @__PURE__ */ s("div", { children: o }),
      /* @__PURE__ */ s(Hu, { count: e, mode: n }, n)
    ] });
  }
  var Hu = ce(function({ count: t, mode: n }) {
    return /* @__PURE__ */ s(ge, { children: [...function* () {
      for (let r = 0; r < t; ++r)
        yield /* @__PURE__ */ s(Uu, { mode: n, target: window }, r);
    }()] });
  }), Uu = ce(function({ mode: t, target: n }) {
    return Te(n, "click", t == null ? null : (r) => {
      r.target?.id == "global-handler-test2" && (window._demo_event = (window._demo_event || 0) + 1);
    }, {}, t || "grouped"), /* @__PURE__ */ s("div", { hidden: !0 });
  }), Ka = me(null), ju = ce(() => {
    let [e, t] = N(!1), [n, r] = N(!1), [o, a] = N(100), { context: l, managedChildrenReturn: u } = Me({ managedChildrenParameters: {} }), { context: m, staggeredChildrenReturn: f } = We({ managedChildrenReturn: u, staggeredChildrenParameters: { staggered: e } });
    return /* @__PURE__ */ s(Ka.Provider, { value: { ...l, ...m }, children: /* @__PURE__ */ s("div", { class: "demo", children: [
      /* @__PURE__ */ s("label", { children: [
        /* @__PURE__ */ s("input", { type: "checkbox", checked: n, onInput: (i) => {
          i.preventDefault(), r(i.currentTarget.checked);
        } }),
        " Children mounted"
      ] }),
      /* @__PURE__ */ s("label", { children: [
        /* @__PURE__ */ s("input", { type: "checkbox", checked: e, onInput: (i) => {
          i.preventDefault(), t(i.currentTarget.checked);
        } }),
        " Children Staggered"
      ] }),
      /* @__PURE__ */ s("label", { children: [
        /* @__PURE__ */ s("input", { type: "number", value: o, onInput: (i) => {
          i.preventDefault(), a(i.currentTarget.valueAsNumber);
        } }),
        " # of children"
      ] }),
      /* @__PURE__ */ s("div", { children: [
        /* @__PURE__ */ s("div", { children: [
          "Status: ",
          e ? f.stillStaggering ? "staggering" : "done staggering" : "(not staggering)"
        ] }),
        /* @__PURE__ */ s("div", { style: "display:flex;flex-wrap: wrap;", children: n && /* @__PURE__ */ s(Gu, { childCount: o }) })
      ] })
    ] }) });
  }), Gu = ce(({ childCount: e }) => /* @__PURE__ */ s(ge, { children: Array.from(function* () {
    for (let t = 0; t < e; ++t)
      yield /* @__PURE__ */ s(Bu, { index: t }, t);
  }()) })), Bu = ce(({ index: e }) => {
    let t = Ee(Ka), { info: n, props: r, staggeredChildReturn: { hideBecauseStaggered: o, parentIsStaggered: a } } = $e({ context: t, info: { index: e } }), { managedChildReturn: l } = Ae({ context: t, info: { ...n, index: e } });
    return /* @__PURE__ */ s("div", { ...B(r, { style: o ? { opacity: 0.25 } : {} }), children: [
      "Child #",
      e,
      a ? o ? "(pending)" : "" : "(not staggered)"
    ] });
  });
  H.debounceRendering = (e) => e();
  var Wu = () => /* @__PURE__ */ s("div", { class: "flex", style: { flexWrap: "wrap" }, children: [
    /* @__PURE__ */ s(qa, { remaining: 2 }),
    /* @__PURE__ */ s("input", {}),
    /* @__PURE__ */ s("div", { style: "display:grid;grid-template-columns:1fr 1fr", children: [
      /* @__PURE__ */ s(Jn, {}),
      /* @__PURE__ */ s(Jn, {})
    ] }),
    /* @__PURE__ */ s("hr", {}),
    /* @__PURE__ */ s(Fu, {}),
    /* @__PURE__ */ s("hr", {}),
    /* @__PURE__ */ s(Ou, {}),
    /* @__PURE__ */ s("hr", {}),
    /* @__PURE__ */ s(Au, {}),
    /* @__PURE__ */ s("hr", {}),
    /* @__PURE__ */ s(Lu, {}),
    /* @__PURE__ */ s("hr", {}),
    /* @__PURE__ */ s(Pu, {}),
    /* @__PURE__ */ s("hr", {}),
    /* @__PURE__ */ s(Ua, {}),
    /* @__PURE__ */ s("hr", {}),
    /* @__PURE__ */ s($a, {}),
    /* @__PURE__ */ s("hr", {}),
    /* @__PURE__ */ s(ju, {}),
    /* @__PURE__ */ s("hr", {}),
    /* @__PURE__ */ s(Wa, {}),
    /* @__PURE__ */ s("hr", {}),
    /* @__PURE__ */ s(Ru, {}),
    /* @__PURE__ */ s("hr", {}),
    /* @__PURE__ */ s(Nu, {}),
    /* @__PURE__ */ s("hr", {}),
    /* @__PURE__ */ s(Du, {}),
    /* @__PURE__ */ s("hr", {}),
    /* @__PURE__ */ s(Tu, {}),
    /* @__PURE__ */ s("hr", {}),
    /* @__PURE__ */ s(Iu, {}),
    /* @__PURE__ */ s("hr", {})
  ] });
  requestAnimationFrame(() => {
    yt(/* @__PURE__ */ s(Wu, {}), document.getElementById("root"));
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
