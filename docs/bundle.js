"use strict";
(() => {
  // node_modules/.pnpm/preact@10.16.0/node_modules/preact/dist/preact.module.js
  var an, U, Eo, hs, Ze, Co, To, Cr, Io, st = {}, Po = [], gs = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, sn = Array.isArray;
  function Ve(e, t) {
    for (var n in t)
      e[n] = t[n];
    return e;
  }
  function wo(e) {
    var t = e.parentNode;
    t && t.removeChild(e);
  }
  function lt(e, t, n) {
    var r, o, a, s = {};
    for (a in t)
      a == "key" ? r = t[a] : a == "ref" ? o = t[a] : s[a] = t[a];
    if (arguments.length > 2 && (s.children = arguments.length > 3 ? an.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
      for (a in e.defaultProps)
        s[a] === void 0 && (s[a] = e.defaultProps[a]);
    return tn(e, s, r, o, null);
  }
  function tn(e, t, n, r, o) {
    var a = { type: e, props: t, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: o ?? ++Eo };
    return o == null && U.vnode != null && U.vnode(a), a;
  }
  function Te(e) {
    return e.children;
  }
  function Re(e, t) {
    this.props = e, this.context = t;
  }
  function nn(e, t) {
    if (t == null)
      return e.__ ? nn(e.__, e.__.__k.indexOf(e) + 1) : null;
    for (var n; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null)
        return n.__e;
    return typeof e.type == "function" ? nn(e) : null;
  }
  function Ro(e) {
    var t, n;
    if ((e = e.__) != null && e.__c != null) {
      for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
        if ((n = e.__k[t]) != null && n.__e != null) {
          e.__e = e.__c.base = n.__e;
          break;
        }
      return Ro(e);
    }
  }
  function yr(e) {
    (!e.__d && (e.__d = !0) && Ze.push(e) && !rn.__r++ || Co !== U.debounceRendering) && ((Co = U.debounceRendering) || To)(rn);
  }
  function rn() {
    var e, t, n, r, o, a, s, u, f;
    for (Ze.sort(Cr); e = Ze.shift(); )
      e.__d && (t = Ze.length, r = void 0, o = void 0, a = void 0, u = (s = (n = e).__v).__e, (f = n.__P) && (r = [], o = [], (a = Ve({}, s)).__v = s.__v + 1, xr(f, s, a, n.__n, f.ownerSVGElement !== void 0, s.__h != null ? [u] : null, r, u ?? nn(s), s.__h, o), Lo(r, s, o), s.__e != u && Ro(s)), Ze.length > t && Ze.sort(Cr));
    rn.__r = 0;
  }
  function ko(e, t, n, r, o, a, s, u, f, m, l) {
    var i, d, h, p, b, g, v, _, C, y, x = 0, S = r && r.__k || Po, E = S.length, T = E, L = t.length;
    for (n.__k = [], i = 0; i < L; i++)
      (p = n.__k[i] = (p = t[i]) == null || typeof p == "boolean" || typeof p == "function" ? null : typeof p == "string" || typeof p == "number" || typeof p == "bigint" ? tn(null, p, null, null, p) : sn(p) ? tn(Te, { children: p }, null, null, null) : p.__b > 0 ? tn(p.type, p.props, p.key, p.ref ? p.ref : null, p.__v) : p) != null && (p.__ = n, p.__b = n.__b + 1, (_ = _s(p, S, v = i + x, T)) === -1 ? h = st : (h = S[_] || st, S[_] = void 0, T--), xr(e, p, h, o, a, s, u, f, m, l), b = p.__e, (d = p.ref) && h.ref != d && (h.ref && Sr(h.ref, null, p), l.push(d, p.__c || b, p)), b != null && (g == null && (g = b), y = !(C = h === st || h.__v === null) && _ === v, C ? _ == -1 && x-- : _ !== v && (_ === v + 1 ? (x++, y = !0) : _ > v ? T > L - v ? (x += _ - v, y = !0) : x-- : x = _ < v && _ == v - 1 ? _ - v : 0), v = i + x, y = y || _ == i && !C, typeof p.type != "function" || _ === v && h.__k !== p.__k ? typeof p.type == "function" || y ? p.__d !== void 0 ? (f = p.__d, p.__d = void 0) : f = b.nextSibling : f = Do(e, b, f) : f = No(p, f, e), typeof n.type == "function" && (n.__d = f)));
    for (n.__e = g, i = E; i--; )
      S[i] != null && (typeof n.type == "function" && S[i].__e != null && S[i].__e == n.__d && (n.__d = S[i].__e.nextSibling), Fo(S[i], S[i]));
  }
  function No(e, t, n) {
    for (var r, o = e.__k, a = 0; o && a < o.length; a++)
      (r = o[a]) && (r.__ = e, t = typeof r.type == "function" ? No(r, t, n) : Do(n, r.__e, t));
    return t;
  }
  function wt(e, t) {
    return t = t || [], e == null || typeof e == "boolean" || (sn(e) ? e.some(function(n) {
      wt(n, t);
    }) : t.push(e)), t;
  }
  function Do(e, t, n) {
    return n == null || n.parentNode !== e ? e.insertBefore(t, null) : t == n && t.parentNode != null || e.insertBefore(t, n), t.nextSibling;
  }
  function _s(e, t, n, r) {
    var o = e.key, a = e.type, s = n - 1, u = n + 1, f = t[n];
    if (f === null || f && o == f.key && a === f.type)
      return n;
    if (r > (f != null ? 1 : 0))
      for (; s >= 0 || u < t.length; ) {
        if (s >= 0) {
          if ((f = t[s]) && o == f.key && a === f.type)
            return s;
          s--;
        }
        if (u < t.length) {
          if ((f = t[u]) && o == f.key && a === f.type)
            return u;
          u++;
        }
      }
    return -1;
  }
  function bs(e, t, n, r, o) {
    var a;
    for (a in n)
      a === "children" || a === "key" || a in t || on(e, a, null, n[a], r);
    for (a in t)
      o && typeof t[a] != "function" || a === "children" || a === "key" || a === "value" || a === "checked" || n[a] === t[a] || on(e, a, t[a], n[a], r);
  }
  function yo(e, t, n) {
    t[0] === "-" ? e.setProperty(t, n ?? "") : e[t] = n == null ? "" : typeof n != "number" || gs.test(t) ? n : n + "px";
  }
  function on(e, t, n, r, o) {
    var a;
    e:
      if (t === "style")
        if (typeof n == "string")
          e.style.cssText = n;
        else {
          if (typeof r == "string" && (e.style.cssText = r = ""), r)
            for (t in r)
              n && t in n || yo(e.style, t, "");
          if (n)
            for (t in n)
              r && n[t] === r[t] || yo(e.style, t, n[t]);
        }
      else if (t[0] === "o" && t[1] === "n")
        a = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + a] = n, n ? r || e.addEventListener(t, a ? So : xo, a) : e.removeEventListener(t, a ? So : xo, a);
      else if (t !== "dangerouslySetInnerHTML") {
        if (o)
          t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
        else if (t !== "width" && t !== "height" && t !== "href" && t !== "list" && t !== "form" && t !== "tabIndex" && t !== "download" && t !== "rowSpan" && t !== "colSpan" && t in e)
          try {
            e[t] = n ?? "";
            break e;
          } catch {
          }
        typeof n == "function" || (n == null || n === !1 && t[4] !== "-" ? e.removeAttribute(t) : e.setAttribute(t, n));
      }
  }
  function xo(e) {
    return this.l[e.type + !1](U.event ? U.event(e) : e);
  }
  function So(e) {
    return this.l[e.type + !0](U.event ? U.event(e) : e);
  }
  function xr(e, t, n, r, o, a, s, u, f, m) {
    var l, i, d, h, p, b, g, v, _, C, y, x, S, E, T, L = t.type;
    if (t.constructor !== void 0)
      return null;
    n.__h != null && (f = n.__h, u = t.__e = n.__e, t.__h = null, a = [u]), (l = U.__b) && l(t);
    try {
      e:
        if (typeof L == "function") {
          if (v = t.props, _ = (l = L.contextType) && r[l.__c], C = l ? _ ? _.props.value : l.__ : r, n.__c ? g = (i = t.__c = n.__c).__ = i.__E : ("prototype" in L && L.prototype.render ? t.__c = i = new L(v, C) : (t.__c = i = new Re(v, C), i.constructor = L, i.render = Cs), _ && _.sub(i), i.props = v, i.state || (i.state = {}), i.context = C, i.__n = r, d = i.__d = !0, i.__h = [], i._sb = []), i.__s == null && (i.__s = i.state), L.getDerivedStateFromProps != null && (i.__s == i.state && (i.__s = Ve({}, i.__s)), Ve(i.__s, L.getDerivedStateFromProps(v, i.__s))), h = i.props, p = i.state, i.__v = t, d)
            L.getDerivedStateFromProps == null && i.componentWillMount != null && i.componentWillMount(), i.componentDidMount != null && i.__h.push(i.componentDidMount);
          else {
            if (L.getDerivedStateFromProps == null && v !== h && i.componentWillReceiveProps != null && i.componentWillReceiveProps(v, C), !i.__e && (i.shouldComponentUpdate != null && i.shouldComponentUpdate(v, i.__s, C) === !1 || t.__v === n.__v)) {
              for (t.__v !== n.__v && (i.props = v, i.state = i.__s, i.__d = !1), t.__e = n.__e, t.__k = n.__k, t.__k.forEach(function(w) {
                w && (w.__ = t);
              }), y = 0; y < i._sb.length; y++)
                i.__h.push(i._sb[y]);
              i._sb = [], i.__h.length && s.push(i);
              break e;
            }
            i.componentWillUpdate != null && i.componentWillUpdate(v, i.__s, C), i.componentDidUpdate != null && i.__h.push(function() {
              i.componentDidUpdate(h, p, b);
            });
          }
          if (i.context = C, i.props = v, i.__P = e, i.__e = !1, x = U.__r, S = 0, "prototype" in L && L.prototype.render) {
            for (i.state = i.__s, i.__d = !1, x && x(t), l = i.render(i.props, i.state, i.context), E = 0; E < i._sb.length; E++)
              i.__h.push(i._sb[E]);
            i._sb = [];
          } else
            do
              i.__d = !1, x && x(t), l = i.render(i.props, i.state, i.context), i.state = i.__s;
            while (i.__d && ++S < 25);
          i.state = i.__s, i.getChildContext != null && (r = Ve(Ve({}, r), i.getChildContext())), d || i.getSnapshotBeforeUpdate == null || (b = i.getSnapshotBeforeUpdate(h, p)), ko(e, sn(T = l != null && l.type === Te && l.key == null ? l.props.children : l) ? T : [T], t, n, r, o, a, s, u, f, m), i.base = t.__e, t.__h = null, i.__h.length && s.push(i), g && (i.__E = i.__ = null);
        } else
          a == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = vs(n.__e, t, n, r, o, a, s, f, m);
      (l = U.diffed) && l(t);
    } catch (w) {
      t.__v = null, (f || a != null) && (t.__e = u, t.__h = !!f, a[a.indexOf(u)] = null), U.__e(w, t, n);
    }
  }
  function Lo(e, t, n) {
    for (var r = 0; r < n.length; r++)
      Sr(n[r], n[++r], n[++r]);
    U.__c && U.__c(t, e), e.some(function(o) {
      try {
        e = o.__h, o.__h = [], e.some(function(a) {
          a.call(o);
        });
      } catch (a) {
        U.__e(a, o.__v);
      }
    });
  }
  function vs(e, t, n, r, o, a, s, u, f) {
    var m, l, i, d = n.props, h = t.props, p = t.type, b = 0;
    if (p === "svg" && (o = !0), a != null) {
      for (; b < a.length; b++)
        if ((m = a[b]) && "setAttribute" in m == !!p && (p ? m.localName === p : m.nodeType === 3)) {
          e = m, a[b] = null;
          break;
        }
    }
    if (e == null) {
      if (p === null)
        return document.createTextNode(h);
      e = o ? document.createElementNS("http://www.w3.org/2000/svg", p) : document.createElement(p, h.is && h), a = null, u = !1;
    }
    if (p === null)
      d === h || u && e.data === h || (e.data = h);
    else {
      if (a = a && an.call(e.childNodes), l = (d = n.props || st).dangerouslySetInnerHTML, i = h.dangerouslySetInnerHTML, !u) {
        if (a != null)
          for (d = {}, b = 0; b < e.attributes.length; b++)
            d[e.attributes[b].name] = e.attributes[b].value;
        (i || l) && (i && (l && i.__html == l.__html || i.__html === e.innerHTML) || (e.innerHTML = i && i.__html || ""));
      }
      if (bs(e, h, d, o, u), i)
        t.__k = [];
      else if (ko(e, sn(b = t.props.children) ? b : [b], t, n, r, o && p !== "foreignObject", a, s, a ? a[0] : n.__k && nn(n, 0), u, f), a != null)
        for (b = a.length; b--; )
          a[b] != null && wo(a[b]);
      u || ("value" in h && (b = h.value) !== void 0 && (b !== e.value || p === "progress" && !b || p === "option" && b !== d.value) && on(e, "value", b, d.value, !1), "checked" in h && (b = h.checked) !== void 0 && b !== e.checked && on(e, "checked", b, d.checked, !1));
    }
    return e;
  }
  function Sr(e, t, n) {
    try {
      typeof e == "function" ? e(t) : e.current = t;
    } catch (r) {
      U.__e(r, n);
    }
  }
  function Fo(e, t, n) {
    var r, o;
    if (U.unmount && U.unmount(e), (r = e.ref) && (r.current && r.current !== e.__e || Sr(r, null, t)), (r = e.__c) != null) {
      if (r.componentWillUnmount)
        try {
          r.componentWillUnmount();
        } catch (a) {
          U.__e(a, t);
        }
      r.base = r.__P = null, e.__c = void 0;
    }
    if (r = e.__k)
      for (o = 0; o < r.length; o++)
        r[o] && Fo(r[o], t, n || typeof e.type != "function");
    n || e.__e == null || wo(e.__e), e.__ = e.__e = e.__d = void 0;
  }
  function Cs(e, t, n) {
    return this.constructor(e, n);
  }
  function Er(e, t, n) {
    var r, o, a, s;
    U.__ && U.__(e, t), o = (r = typeof n == "function") ? null : n && n.__k || t.__k, a = [], s = [], xr(t, e = (!r && n || t).__k = lt(Te, null, [e]), o || st, st, t.ownerSVGElement !== void 0, !r && n ? [n] : o ? null : t.firstChild ? an.call(t.childNodes) : null, a, !r && n ? n : o ? o.__e : t.firstChild, r, s), Lo(a, e, s);
  }
  function xe(e, t) {
    var n = { __c: t = "__cC" + Io++, __: e, Consumer: function(r, o) {
      return r.children(o);
    }, Provider: function(r) {
      var o, a;
      return this.getChildContext || (o = [], (a = {})[t] = this, this.getChildContext = function() {
        return a;
      }, this.shouldComponentUpdate = function(s) {
        this.props.value !== s.value && o.some(function(u) {
          u.__e = !0, yr(u);
        });
      }, this.sub = function(s) {
        o.push(s);
        var u = s.componentWillUnmount;
        s.componentWillUnmount = function() {
          o.splice(o.indexOf(s), 1), u && u.call(s);
        };
      }), r.children;
    } };
    return n.Provider.__ = n.Consumer.contextType = n;
  }
  an = Po.slice, U = { __e: function(e, t, n, r) {
    for (var o, a, s; t = t.__; )
      if ((o = t.__c) && !o.__)
        try {
          if ((a = o.constructor) && a.getDerivedStateFromError != null && (o.setState(a.getDerivedStateFromError(e)), s = o.__d), o.componentDidCatch != null && (o.componentDidCatch(e, r || {}), s = o.__d), s)
            return o.__E = o;
        } catch (u) {
          e = u;
        }
    throw e;
  } }, Eo = 0, hs = function(e) {
    return e != null && e.constructor === void 0;
  }, Re.prototype.setState = function(e, t) {
    var n;
    n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Ve({}, this.state), typeof e == "function" && (e = e(Ve({}, n), this.props)), e && Ve(n, e), e != null && this.__v && (t && this._sb.push(t), yr(this));
  }, Re.prototype.forceUpdate = function(e) {
    this.__v && (this.__e = !0, e && this.__h.push(e), yr(this));
  }, Re.prototype.render = Te, Ze = [], To = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, Cr = function(e, t) {
    return e.__v.__b - t.__v.__b;
  }, rn.__r = 0, Io = 0;

  // node_modules/.pnpm/preact@10.16.0/node_modules/preact/hooks/dist/hooks.module.js
  var Rt, le, Tr, Mo, kt = 0, Bo = [], ln = [], Ao = U.__b, Oo = U.__r, Ho = U.diffed, Uo = U.__c, jo = U.unmount;
  function Pr(e, t) {
    U.__h && U.__h(le, e, kt || t), kt = 0;
    var n = le.__H || (le.__H = { __: [], __h: [] });
    return e >= n.__.length && n.__.push({ __V: ln }), n.__[e];
  }
  function Ie(e) {
    return kt = 1, Wo(Vo, e);
  }
  function Wo(e, t, n) {
    var r = Pr(Rt++, 2);
    if (r.t = e, !r.__c && (r.__ = [n ? n(t) : Vo(void 0, t), function(u) {
      var f = r.__N ? r.__N[0] : r.__[0], m = r.t(f, u);
      f !== m && (r.__N = [m, r.__[1]], r.__c.setState({}));
    }], r.__c = le, !le.u)) {
      var o = function(u, f, m) {
        if (!r.__c.__H)
          return !0;
        var l = r.__c.__H.__.filter(function(d) {
          return d.__c;
        });
        if (l.every(function(d) {
          return !d.__N;
        }))
          return !a || a.call(this, u, f, m);
        var i = !1;
        return l.forEach(function(d) {
          if (d.__N) {
            var h = d.__[0];
            d.__ = d.__N, d.__N = void 0, h !== d.__[0] && (i = !0);
          }
        }), !(!i && r.__c.props === u) && (!a || a.call(this, u, f, m));
      };
      le.u = !0;
      var a = le.shouldComponentUpdate, s = le.componentWillUpdate;
      le.componentWillUpdate = function(u, f, m) {
        if (this.__e) {
          var l = a;
          a = void 0, o(u, f, m), a = l;
        }
        s && s.call(this, u, f, m);
      }, le.shouldComponentUpdate = o;
    }
    return r.__N || r.__;
  }
  function Nt(e) {
    return kt = 5, wr(function() {
      return { current: e };
    }, []);
  }
  function wr(e, t) {
    var n = Pr(Rt++, 7);
    return Ss(n.__H, t) ? (n.__V = e(), n.i = t, n.__h = e, n.__V) : n.__;
  }
  function ke(e, t) {
    return kt = 8, wr(function() {
      return e;
    }, t);
  }
  function Me(e) {
    var t = le.context[e.__c], n = Pr(Rt++, 9);
    return n.c = e, t ? (n.__ == null && (n.__ = !0, t.sub(le)), t.props.value) : e.__;
  }
  function ys() {
    for (var e; e = Bo.shift(); )
      if (e.__P && e.__H)
        try {
          e.__H.__h.forEach(un), e.__H.__h.forEach(Ir), e.__H.__h = [];
        } catch (t) {
          e.__H.__h = [], U.__e(t, e.__v);
        }
  }
  U.__b = function(e) {
    le = null, Ao && Ao(e);
  }, U.__r = function(e) {
    Oo && Oo(e), Rt = 0;
    var t = (le = e.__c).__H;
    t && (Tr === le ? (t.__h = [], le.__h = [], t.__.forEach(function(n) {
      n.__N && (n.__ = n.__N), n.__V = ln, n.__N = n.i = void 0;
    })) : (t.__h.forEach(un), t.__h.forEach(Ir), t.__h = [], Rt = 0)), Tr = le;
  }, U.diffed = function(e) {
    Ho && Ho(e);
    var t = e.__c;
    t && t.__H && (t.__H.__h.length && (Bo.push(t) !== 1 && Mo === U.requestAnimationFrame || ((Mo = U.requestAnimationFrame) || xs)(ys)), t.__H.__.forEach(function(n) {
      n.i && (n.__H = n.i), n.__V !== ln && (n.__ = n.__V), n.i = void 0, n.__V = ln;
    })), Tr = le = null;
  }, U.__c = function(e, t) {
    t.some(function(n) {
      try {
        n.__h.forEach(un), n.__h = n.__h.filter(function(r) {
          return !r.__ || Ir(r);
        });
      } catch (r) {
        t.some(function(o) {
          o.__h && (o.__h = []);
        }), t = [], U.__e(r, n.__v);
      }
    }), Uo && Uo(e, t);
  }, U.unmount = function(e) {
    jo && jo(e);
    var t, n = e.__c;
    n && n.__H && (n.__H.__.forEach(function(r) {
      try {
        un(r);
      } catch (o) {
        t = o;
      }
    }), n.__H = void 0, t && U.__e(t, n.__v));
  };
  var Go = typeof requestAnimationFrame == "function";
  function xs(e) {
    var t, n = function() {
      clearTimeout(r), Go && cancelAnimationFrame(t), setTimeout(e);
    }, r = setTimeout(n, 100);
    Go && (t = requestAnimationFrame(n));
  }
  function un(e) {
    var t = le, n = e.__c;
    typeof n == "function" && (e.__c = void 0, n()), le = t;
  }
  function Ir(e) {
    var t = le;
    e.__c = e.__(), le = t;
  }
  function Ss(e, t) {
    return !e || e.length !== t.length || t.some(function(n, r) {
      return n !== e[r];
    });
  }
  function Vo(e, t) {
    return typeof t == "function" ? t(e) : t;
  }

  // node_modules/.pnpm/preact@10.16.0/node_modules/preact/compat/dist/compat.module.js
  function Ts(e, t) {
    for (var n in t)
      e[n] = t[n];
    return e;
  }
  function kr(e, t) {
    for (var n in e)
      if (n !== "__source" && !(n in t))
        return !0;
    for (var r in t)
      if (r !== "__source" && e[r] !== t[r])
        return !0;
    return !1;
  }
  function $o(e) {
    this.props = e;
  }
  function be(e, t) {
    function n(o) {
      var a = this.props.ref, s = a == o.ref;
      return !s && a && (a.call ? a(null) : a.current = null), t ? !t(this.props, o) || !s : kr(this.props, o);
    }
    function r(o) {
      return this.shouldComponentUpdate = n, lt(e, o);
    }
    return r.displayName = "Memo(" + (e.displayName || e.name) + ")", r.prototype.isReactComponent = !0, r.__f = !0, r;
  }
  ($o.prototype = new Re()).isPureReactComponent = !0, $o.prototype.shouldComponentUpdate = function(e, t) {
    return kr(this.props, e) || kr(this.state, t);
  };
  var zo = U.__b;
  U.__b = function(e) {
    e.type && e.type.__f && e.ref && (e.props.ref = e.ref, e.ref = null), zo && zo(e);
  };
  var Vd = typeof Symbol < "u" && Symbol.for && Symbol.for("react.forward_ref") || 3911;
  var Is = U.__e;
  U.__e = function(e, t, n, r) {
    if (e.then) {
      for (var o, a = t; a = a.__; )
        if ((o = a.__c) && o.__c)
          return t.__e == null && (t.__e = n.__e, t.__k = n.__k), o.__c(e, t);
    }
    Is(e, t, n, r);
  };
  var qo = U.unmount;
  function Zo(e, t, n) {
    return e && (e.__c && e.__c.__H && (e.__c.__H.__.forEach(function(r) {
      typeof r.__c == "function" && r.__c();
    }), e.__c.__H = null), (e = Ts({}, e)).__c != null && (e.__c.__P === n && (e.__c.__P = t), e.__c = null), e.__k = e.__k && e.__k.map(function(r) {
      return Zo(r, t, n);
    })), e;
  }
  function ea(e, t, n) {
    return e && (e.__v = null, e.__k = e.__k && e.__k.map(function(r) {
      return ea(r, t, n);
    }), e.__c && e.__c.__P === t && (e.__e && n.insertBefore(e.__e, e.__d), e.__c.__e = !0, e.__c.__P = n)), e;
  }
  function Rr() {
    this.__u = 0, this.t = null, this.__b = null;
  }
  function ta(e) {
    var t = e.__.__c;
    return t && t.__a && t.__a(e);
  }
  function cn() {
    this.u = null, this.o = null;
  }
  U.unmount = function(e) {
    var t = e.__c;
    t && t.__R && t.__R(), t && e.__h === !0 && (e.type = null), qo && qo(e);
  }, (Rr.prototype = new Re()).__c = function(e, t) {
    var n = t.__c, r = this;
    r.t == null && (r.t = []), r.t.push(n);
    var o = ta(r.__v), a = !1, s = function() {
      a || (a = !0, n.__R = null, o ? o(u) : u());
    };
    n.__R = s;
    var u = function() {
      if (!--r.__u) {
        if (r.state.__a) {
          var m = r.state.__a;
          r.__v.__k[0] = ea(m, m.__c.__P, m.__c.__O);
        }
        var l;
        for (r.setState({ __a: r.__b = null }); l = r.t.pop(); )
          l.forceUpdate();
      }
    }, f = t.__h === !0;
    r.__u++ || f || r.setState({ __a: r.__b = r.__v.__k[0] }), e.then(s, s);
  }, Rr.prototype.componentWillUnmount = function() {
    this.t = [];
  }, Rr.prototype.render = function(e, t) {
    if (this.__b) {
      if (this.__v.__k) {
        var n = document.createElement("div"), r = this.__v.__k[0].__c;
        this.__v.__k[0] = Zo(this.__b, n, r.__O = r.__P);
      }
      this.__b = null;
    }
    var o = t.__a && lt(Te, null, e.fallback);
    return o && (o.__h = null), [lt(Te, null, t.__a ? null : e.children), o];
  };
  var Ko = function(e, t, n) {
    if (++n[1] === n[0] && e.o.delete(t), e.props.revealOrder && (e.props.revealOrder[0] !== "t" || !e.o.size))
      for (n = e.u; n; ) {
        for (; n.length > 3; )
          n.pop()();
        if (n[1] < n[0])
          break;
        e.u = n = n[2];
      }
  };
  (cn.prototype = new Re()).__a = function(e) {
    var t = this, n = ta(t.__v), r = t.o.get(e);
    return r[0]++, function(o) {
      var a = function() {
        t.props.revealOrder ? (r.push(o), Ko(t, e, r)) : o();
      };
      n ? n(a) : a();
    };
  }, cn.prototype.render = function(e) {
    this.u = null, this.o = /* @__PURE__ */ new Map();
    var t = wt(e.children);
    e.revealOrder && e.revealOrder[0] === "b" && t.reverse();
    for (var n = t.length; n--; )
      this.o.set(t[n], this.u = [1, 0, this.u]);
    return e.children;
  }, cn.prototype.componentDidUpdate = cn.prototype.componentDidMount = function() {
    var e = this;
    this.o.forEach(function(t, n) {
      Ko(e, n, t);
    });
  };
  var Ps = typeof Symbol < "u" && Symbol.for && Symbol.for("react.element") || 60103, ws = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/, Rs = /^on(Ani|Tra|Tou|BeforeInp|Compo)/, ks = /[A-Z0-9]/g, Ns = typeof document < "u", Ds = function(e) {
    return (typeof Symbol < "u" && typeof Symbol() == "symbol" ? /fil|che|rad/ : /fil|che|ra/).test(e);
  };
  Re.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(e) {
    Object.defineProperty(Re.prototype, e, { configurable: !0, get: function() {
      return this["UNSAFE_" + e];
    }, set: function(t) {
      Object.defineProperty(this, e, { configurable: !0, writable: !0, value: t });
    } });
  });
  var Jo = U.event;
  function Ls() {
  }
  function Fs() {
    return this.cancelBubble;
  }
  function Ms() {
    return this.defaultPrevented;
  }
  U.event = function(e) {
    return Jo && (e = Jo(e)), e.persist = Ls, e.isPropagationStopped = Fs, e.isDefaultPrevented = Ms, e.nativeEvent = e;
  };
  var na, As = { enumerable: !1, configurable: !0, get: function() {
    return this.class;
  } }, Xo = U.vnode;
  U.vnode = function(e) {
    typeof e.type == "string" && function(t) {
      var n = t.props, r = t.type, o = {};
      for (var a in n) {
        var s = n[a];
        if (!(a === "value" && "defaultValue" in n && s == null || Ns && a === "children" && r === "noscript" || a === "class" || a === "className")) {
          var u = a.toLowerCase();
          a === "defaultValue" && "value" in n && n.value == null ? a = "value" : a === "download" && s === !0 ? s = "" : u === "ondoubleclick" ? a = "ondblclick" : u !== "onchange" || r !== "input" && r !== "textarea" || Ds(n.type) ? u === "onfocus" ? a = "onfocusin" : u === "onblur" ? a = "onfocusout" : Rs.test(a) ? a = u : r.indexOf("-") === -1 && ws.test(a) ? a = a.replace(ks, "-$&").toLowerCase() : s === null && (s = void 0) : u = a = "oninput", u === "oninput" && o[a = u] && (a = "oninputCapture"), o[a] = s;
        }
      }
      r == "select" && o.multiple && Array.isArray(o.value) && (o.value = wt(n.children).forEach(function(f) {
        f.props.selected = o.value.indexOf(f.props.value) != -1;
      })), r == "select" && o.defaultValue != null && (o.value = wt(n.children).forEach(function(f) {
        f.props.selected = o.multiple ? o.defaultValue.indexOf(f.props.value) != -1 : o.defaultValue == f.props.value;
      })), n.class && !n.className ? (o.class = n.class, Object.defineProperty(o, "className", As)) : (n.className && !n.class || n.class && n.className) && (o.class = o.className = n.className), t.props = o;
    }(e), e.$$typeof = Ps, Xo && Xo(e);
  };
  var Qo = U.__r;
  U.__r = function(e) {
    Qo && Qo(e), na = e.__c;
  };
  var Yo = U.diffed;
  U.diffed = function(e) {
    Yo && Yo(e);
    var t = e.props, n = e.__e;
    n != null && e.type === "textarea" && "value" in t && t.value !== n.value && (n.value = t.value == null ? "" : t.value), na = null;
  };

  // ../node_modules/.pnpm/preact@10.13.2/node_modules/preact/dist/preact.module.js
  var Ft, H, sa, Os, et, ra, la, Nr, ua, dn = {}, ca = [], Hs = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
  function He(e, t) {
    for (var n in t)
      e[n] = t[n];
    return e;
  }
  function da(e) {
    var t = e.parentNode;
    t && t.removeChild(e);
  }
  function fe(e, t, n) {
    var r, o, a, s = {};
    for (a in t)
      a == "key" ? r = t[a] : a == "ref" ? o = t[a] : s[a] = t[a];
    if (arguments.length > 2 && (s.children = arguments.length > 3 ? Ft.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
      for (a in e.defaultProps)
        s[a] === void 0 && (s[a] = e.defaultProps[a]);
    return Dt(e, s, r, o, null);
  }
  function Dt(e, t, n, r, o) {
    var a = { type: e, props: t, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: o ?? ++sa };
    return o == null && H.vnode != null && H.vnode(a), a;
  }
  function Se(e) {
    return e.children;
  }
  function Ne(e, t) {
    this.props = e, this.context = t;
  }
  function Lt(e, t) {
    if (t == null)
      return e.__ ? Lt(e.__, e.__.__k.indexOf(e) + 1) : null;
    for (var n; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null)
        return n.__e;
    return typeof e.type == "function" ? Lt(e) : null;
  }
  function fa(e) {
    var t, n;
    if ((e = e.__) != null && e.__c != null) {
      for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
        if ((n = e.__k[t]) != null && n.__e != null) {
          e.__e = e.__c.base = n.__e;
          break;
        }
      return fa(e);
    }
  }
  function Dr(e) {
    (!e.__d && (e.__d = !0) && et.push(e) && !fn.__r++ || ra !== H.debounceRendering) && ((ra = H.debounceRendering) || la)(fn);
  }
  function fn() {
    var e, t, n, r, o, a, s, u;
    for (et.sort(Nr); e = et.shift(); )
      e.__d && (t = et.length, r = void 0, o = void 0, s = (a = (n = e).__v).__e, (u = n.__P) && (r = [], (o = He({}, a)).__v = a.__v + 1, Lr(u, a, o, n.__n, u.ownerSVGElement !== void 0, a.__h != null ? [s] : null, r, s ?? Lt(a), a.__h), _a(r, a), a.__e != s && fa(a)), et.length > t && et.sort(Nr));
    fn.__r = 0;
  }
  function ma(e, t, n, r, o, a, s, u, f, m) {
    var l, i, d, h, p, b, g, v = r && r.__k || ca, _ = v.length;
    for (n.__k = [], l = 0; l < t.length; l++)
      if ((h = n.__k[l] = (h = t[l]) == null || typeof h == "boolean" || typeof h == "function" ? null : typeof h == "string" || typeof h == "number" || typeof h == "bigint" ? Dt(null, h, null, null, h) : Array.isArray(h) ? Dt(Se, { children: h }, null, null, null) : h.__b > 0 ? Dt(h.type, h.props, h.key, h.ref ? h.ref : null, h.__v) : h) != null) {
        if (h.__ = n, h.__b = n.__b + 1, (d = v[l]) === null || d && h.key == d.key && h.type === d.type)
          v[l] = void 0;
        else
          for (i = 0; i < _; i++) {
            if ((d = v[i]) && h.key == d.key && h.type === d.type) {
              v[i] = void 0;
              break;
            }
            d = null;
          }
        Lr(e, h, d = d || dn, o, a, s, u, f, m), p = h.__e, (i = h.ref) && d.ref != i && (g || (g = []), d.ref && g.push(d.ref, null, h), g.push(i, h.__c || p, h)), p != null ? (b == null && (b = p), typeof h.type == "function" && h.__k === d.__k ? h.__d = f = pa(h, f, e) : f = ha(e, h, d, v, p, f), typeof n.type == "function" && (n.__d = f)) : f && d.__e == f && f.parentNode != e && (f = Lt(d));
      }
    for (n.__e = b, l = _; l--; )
      v[l] != null && (typeof n.type == "function" && v[l].__e != null && v[l].__e == n.__d && (n.__d = ga(r).nextSibling), va(v[l], v[l]));
    if (g)
      for (l = 0; l < g.length; l++)
        ba(g[l], g[++l], g[++l]);
  }
  function pa(e, t, n) {
    for (var r, o = e.__k, a = 0; o && a < o.length; a++)
      (r = o[a]) && (r.__ = e, t = typeof r.type == "function" ? pa(r, t, n) : ha(n, r, r, o, r.__e, t));
    return t;
  }
  function Mt(e, t) {
    return t = t || [], e == null || typeof e == "boolean" || (Array.isArray(e) ? e.some(function(n) {
      Mt(n, t);
    }) : t.push(e)), t;
  }
  function ha(e, t, n, r, o, a) {
    var s, u, f;
    if (t.__d !== void 0)
      s = t.__d, t.__d = void 0;
    else if (n == null || o != a || o.parentNode == null)
      e:
        if (a == null || a.parentNode !== e)
          e.appendChild(o), s = null;
        else {
          for (u = a, f = 0; (u = u.nextSibling) && f < r.length; f += 1)
            if (u == o)
              break e;
          e.insertBefore(o, a), s = a;
        }
    return s !== void 0 ? s : o.nextSibling;
  }
  function ga(e) {
    var t, n, r;
    if (e.type == null || typeof e.type == "string")
      return e.__e;
    if (e.__k) {
      for (t = e.__k.length - 1; t >= 0; t--)
        if ((n = e.__k[t]) && (r = ga(n)))
          return r;
    }
    return null;
  }
  function Us(e, t, n, r, o) {
    var a;
    for (a in n)
      a === "children" || a === "key" || a in t || mn(e, a, null, n[a], r);
    for (a in t)
      o && typeof t[a] != "function" || a === "children" || a === "key" || a === "value" || a === "checked" || n[a] === t[a] || mn(e, a, t[a], n[a], r);
  }
  function oa(e, t, n) {
    t[0] === "-" ? e.setProperty(t, n ?? "") : e[t] = n == null ? "" : typeof n != "number" || Hs.test(t) ? n : n + "px";
  }
  function mn(e, t, n, r, o) {
    var a;
    e:
      if (t === "style")
        if (typeof n == "string")
          e.style.cssText = n;
        else {
          if (typeof r == "string" && (e.style.cssText = r = ""), r)
            for (t in r)
              n && t in n || oa(e.style, t, "");
          if (n)
            for (t in n)
              r && n[t] === r[t] || oa(e.style, t, n[t]);
        }
      else if (t[0] === "o" && t[1] === "n")
        a = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + a] = n, n ? r || e.addEventListener(t, a ? ia : aa, a) : e.removeEventListener(t, a ? ia : aa, a);
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
  function aa(e) {
    return this.l[e.type + !1](H.event ? H.event(e) : e);
  }
  function ia(e) {
    return this.l[e.type + !0](H.event ? H.event(e) : e);
  }
  function Lr(e, t, n, r, o, a, s, u, f) {
    var m, l, i, d, h, p, b, g, v, _, C, y, x, S, E, T = t.type;
    if (t.constructor !== void 0)
      return null;
    n.__h != null && (f = n.__h, u = t.__e = n.__e, t.__h = null, a = [u]), (m = H.__b) && m(t);
    try {
      e:
        if (typeof T == "function") {
          if (g = t.props, v = (m = T.contextType) && r[m.__c], _ = m ? v ? v.props.value : m.__ : r, n.__c ? b = (l = t.__c = n.__c).__ = l.__E : ("prototype" in T && T.prototype.render ? t.__c = l = new T(g, _) : (t.__c = l = new Ne(g, _), l.constructor = T, l.render = Gs), v && v.sub(l), l.props = g, l.state || (l.state = {}), l.context = _, l.__n = r, i = l.__d = !0, l.__h = [], l._sb = []), l.__s == null && (l.__s = l.state), T.getDerivedStateFromProps != null && (l.__s == l.state && (l.__s = He({}, l.__s)), He(l.__s, T.getDerivedStateFromProps(g, l.__s))), d = l.props, h = l.state, l.__v = t, i)
            T.getDerivedStateFromProps == null && l.componentWillMount != null && l.componentWillMount(), l.componentDidMount != null && l.__h.push(l.componentDidMount);
          else {
            if (T.getDerivedStateFromProps == null && g !== d && l.componentWillReceiveProps != null && l.componentWillReceiveProps(g, _), !l.__e && l.shouldComponentUpdate != null && l.shouldComponentUpdate(g, l.__s, _) === !1 || t.__v === n.__v) {
              for (t.__v !== n.__v && (l.props = g, l.state = l.__s, l.__d = !1), l.__e = !1, t.__e = n.__e, t.__k = n.__k, t.__k.forEach(function(L) {
                L && (L.__ = t);
              }), C = 0; C < l._sb.length; C++)
                l.__h.push(l._sb[C]);
              l._sb = [], l.__h.length && s.push(l);
              break e;
            }
            l.componentWillUpdate != null && l.componentWillUpdate(g, l.__s, _), l.componentDidUpdate != null && l.__h.push(function() {
              l.componentDidUpdate(d, h, p);
            });
          }
          if (l.context = _, l.props = g, l.__P = e, y = H.__r, x = 0, "prototype" in T && T.prototype.render) {
            for (l.state = l.__s, l.__d = !1, y && y(t), m = l.render(l.props, l.state, l.context), S = 0; S < l._sb.length; S++)
              l.__h.push(l._sb[S]);
            l._sb = [];
          } else
            do
              l.__d = !1, y && y(t), m = l.render(l.props, l.state, l.context), l.state = l.__s;
            while (l.__d && ++x < 25);
          l.state = l.__s, l.getChildContext != null && (r = He(He({}, r), l.getChildContext())), i || l.getSnapshotBeforeUpdate == null || (p = l.getSnapshotBeforeUpdate(d, h)), E = m != null && m.type === Se && m.key == null ? m.props.children : m, ma(e, Array.isArray(E) ? E : [E], t, n, r, o, a, s, u, f), l.base = t.__e, t.__h = null, l.__h.length && s.push(l), b && (l.__E = l.__ = null), l.__e = !1;
        } else
          a == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = js(n.__e, t, n, r, o, a, s, f);
      (m = H.diffed) && m(t);
    } catch (L) {
      t.__v = null, (f || a != null) && (t.__e = u, t.__h = !!f, a[a.indexOf(u)] = null), H.__e(L, t, n);
    }
  }
  function _a(e, t) {
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
  function js(e, t, n, r, o, a, s, u) {
    var f, m, l, i = n.props, d = t.props, h = t.type, p = 0;
    if (h === "svg" && (o = !0), a != null) {
      for (; p < a.length; p++)
        if ((f = a[p]) && "setAttribute" in f == !!h && (h ? f.localName === h : f.nodeType === 3)) {
          e = f, a[p] = null;
          break;
        }
    }
    if (e == null) {
      if (h === null)
        return document.createTextNode(d);
      e = o ? document.createElementNS("http://www.w3.org/2000/svg", h) : document.createElement(h, d.is && d), a = null, u = !1;
    }
    if (h === null)
      i === d || u && e.data === d || (e.data = d);
    else {
      if (a = a && Ft.call(e.childNodes), m = (i = n.props || dn).dangerouslySetInnerHTML, l = d.dangerouslySetInnerHTML, !u) {
        if (a != null)
          for (i = {}, p = 0; p < e.attributes.length; p++)
            i[e.attributes[p].name] = e.attributes[p].value;
        (l || m) && (l && (m && l.__html == m.__html || l.__html === e.innerHTML) || (e.innerHTML = l && l.__html || ""));
      }
      if (Us(e, d, i, o, u), l)
        t.__k = [];
      else if (p = t.props.children, ma(e, Array.isArray(p) ? p : [p], t, n, r, o && h !== "foreignObject", a, s, a ? a[0] : n.__k && Lt(n, 0), u), a != null)
        for (p = a.length; p--; )
          a[p] != null && da(a[p]);
      u || ("value" in d && (p = d.value) !== void 0 && (p !== e.value || h === "progress" && !p || h === "option" && p !== i.value) && mn(e, "value", p, i.value, !1), "checked" in d && (p = d.checked) !== void 0 && p !== e.checked && mn(e, "checked", p, i.checked, !1));
    }
    return e;
  }
  function ba(e, t, n) {
    try {
      typeof e == "function" ? e(t) : e.current = t;
    } catch (r) {
      H.__e(r, n);
    }
  }
  function va(e, t, n) {
    var r, o;
    if (H.unmount && H.unmount(e), (r = e.ref) && (r.current && r.current !== e.__e || ba(r, null, t)), (r = e.__c) != null) {
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
        r[o] && va(r[o], t, n || typeof e.type != "function");
    n || e.__e == null || da(e.__e), e.__ = e.__e = e.__d = void 0;
  }
  function Gs(e, t, n) {
    return this.constructor(e, n);
  }
  function Fr(e, t, n) {
    var r, o, a;
    H.__ && H.__(e, t), o = (r = typeof n == "function") ? null : n && n.__k || t.__k, a = [], Lr(t, e = (!r && n || t).__k = fe(Se, null, [e]), o || dn, dn, t.ownerSVGElement !== void 0, !r && n ? [n] : o ? null : t.firstChild ? Ft.call(t.childNodes) : null, a, !r && n ? n : o ? o.__e : t.firstChild, r), _a(a, e);
  }
  function ut(e, t, n) {
    var r, o, a, s = He({}, e.props);
    for (a in t)
      a == "key" ? r = t[a] : a == "ref" ? o = t[a] : s[a] = t[a];
    return arguments.length > 2 && (s.children = arguments.length > 3 ? Ft.call(arguments, 2) : n), Dt(e.type, s, r || e.key, o || e.ref, null);
  }
  function ct(e, t) {
    var n = { __c: t = "__cC" + ua++, __: e, Consumer: function(r, o) {
      return r.children(o);
    }, Provider: function(r) {
      var o, a;
      return this.getChildContext || (o = [], (a = {})[t] = this, this.getChildContext = function() {
        return a;
      }, this.shouldComponentUpdate = function(s) {
        this.props.value !== s.value && o.some(function(u) {
          u.__e = !0, Dr(u);
        });
      }, this.sub = function(s) {
        o.push(s);
        var u = s.componentWillUnmount;
        s.componentWillUnmount = function() {
          o.splice(o.indexOf(s), 1), u && u.call(s);
        };
      }), r.children;
    } };
    return n.Provider.__ = n.Consumer.contextType = n;
  }
  Ft = ca.slice, H = { __e: function(e, t, n, r) {
    for (var o, a, s; t = t.__; )
      if ((o = t.__c) && !o.__)
        try {
          if ((a = o.constructor) && a.getDerivedStateFromError != null && (o.setState(a.getDerivedStateFromError(e)), s = o.__d), o.componentDidCatch != null && (o.componentDidCatch(e, r || {}), s = o.__d), s)
            return o.__E = o;
        } catch (u) {
          e = u;
        }
    throw e;
  } }, sa = 0, Os = function(e) {
    return e != null && e.constructor === void 0;
  }, Ne.prototype.setState = function(e, t) {
    var n;
    n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = He({}, this.state), typeof e == "function" && (e = e(He({}, n), this.props)), e && He(n, e), e != null && this.__v && (t && this._sb.push(t), Dr(this));
  }, Ne.prototype.forceUpdate = function(e) {
    this.__v && (this.__e = !0, e && this.__h.push(e), Dr(this));
  }, Ne.prototype.render = Se, et = [], la = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, Nr = function(e, t) {
    return e.__v.__b - t.__v.__b;
  }, fn.__r = 0, ua = 0;

  // ../node_modules/.pnpm/preact@10.13.2/node_modules/preact/hooks/dist/hooks.module.js
  var ft, ie, Mr, Ca, dt = 0, Pa = [], pn = [], ya = H.__b, xa = H.__r, Sa = H.diffed, Ea = H.__c, Ta = H.unmount;
  function At(e, t) {
    H.__h && H.__h(ie, e, dt || t), dt = 0;
    var n = ie.__H || (ie.__H = { __: [], __h: [] });
    return e >= n.__.length && n.__.push({ __V: pn }), n.__[e];
  }
  function Ue(e) {
    return dt = 1, gn(wa, e);
  }
  function gn(e, t, n) {
    var r = At(ft++, 2);
    if (r.t = e, !r.__c && (r.__ = [n ? n(t) : wa(void 0, t), function(u) {
      var f = r.__N ? r.__N[0] : r.__[0], m = r.t(f, u);
      f !== m && (r.__N = [m, r.__[1]], r.__c.setState({}));
    }], r.__c = ie, !ie.u)) {
      var o = function(u, f, m) {
        if (!r.__c.__H)
          return !0;
        var l = r.__c.__H.__.filter(function(d) {
          return d.__c;
        });
        if (l.every(function(d) {
          return !d.__N;
        }))
          return !a || a.call(this, u, f, m);
        var i = !1;
        return l.forEach(function(d) {
          if (d.__N) {
            var h = d.__[0];
            d.__ = d.__N, d.__N = void 0, h !== d.__[0] && (i = !0);
          }
        }), !(!i && r.__c.props === u) && (!a || a.call(this, u, f, m));
      };
      ie.u = !0;
      var a = ie.shouldComponentUpdate, s = ie.componentWillUpdate;
      ie.componentWillUpdate = function(u, f, m) {
        if (this.__e) {
          var l = a;
          a = void 0, o(u, f, m), a = l;
        }
        s && s.call(this, u, f, m);
      }, ie.shouldComponentUpdate = o;
    }
    return r.__N || r.__;
  }
  function G(e, t) {
    var n = At(ft++, 3);
    !H.__s && Or(n.__H, t) && (n.__ = e, n.i = t, ie.__H.__h.push(n));
  }
  function oe(e, t) {
    var n = At(ft++, 4);
    !H.__s && Or(n.__H, t) && (n.__ = e, n.i = t, ie.__h.push(n));
  }
  function A(e) {
    return dt = 5, ce(function() {
      return { current: e };
    }, []);
  }
  function Ot(e, t, n) {
    dt = 6, oe(function() {
      return typeof e == "function" ? (e(t()), function() {
        return e(null);
      }) : e ? (e.current = t(), function() {
        return e.current = null;
      }) : void 0;
    }, n == null ? n : n.concat(e));
  }
  function ce(e, t) {
    var n = At(ft++, 7);
    return Or(n.__H, t) ? (n.__V = e(), n.i = t, n.__h = e, n.__V) : n.__;
  }
  function k(e, t) {
    return dt = 8, ce(function() {
      return e;
    }, t);
  }
  function Ht() {
    var e = At(ft++, 11);
    if (!e.__) {
      for (var t = ie.__v; t !== null && !t.__m && t.__ !== null; )
        t = t.__;
      var n = t.__m || (t.__m = [0, 0]);
      e.__ = "P" + n[0] + "-" + n[1]++;
    }
    return e.__;
  }
  function Bs() {
    for (var e; e = Pa.shift(); )
      if (e.__P && e.__H)
        try {
          e.__H.__h.forEach(hn), e.__H.__h.forEach(Ar), e.__H.__h = [];
        } catch (t) {
          e.__H.__h = [], H.__e(t, e.__v);
        }
  }
  H.__b = function(e) {
    ie = null, ya && ya(e);
  }, H.__r = function(e) {
    xa && xa(e), ft = 0;
    var t = (ie = e.__c).__H;
    t && (Mr === ie ? (t.__h = [], ie.__h = [], t.__.forEach(function(n) {
      n.__N && (n.__ = n.__N), n.__V = pn, n.__N = n.i = void 0;
    })) : (t.__h.forEach(hn), t.__h.forEach(Ar), t.__h = [])), Mr = ie;
  }, H.diffed = function(e) {
    Sa && Sa(e);
    var t = e.__c;
    t && t.__H && (t.__H.__h.length && (Pa.push(t) !== 1 && Ca === H.requestAnimationFrame || ((Ca = H.requestAnimationFrame) || Ws)(Bs)), t.__H.__.forEach(function(n) {
      n.i && (n.__H = n.i), n.__V !== pn && (n.__ = n.__V), n.i = void 0, n.__V = pn;
    })), Mr = ie = null;
  }, H.__c = function(e, t) {
    t.some(function(n) {
      try {
        n.__h.forEach(hn), n.__h = n.__h.filter(function(r) {
          return !r.__ || Ar(r);
        });
      } catch (r) {
        t.some(function(o) {
          o.__h && (o.__h = []);
        }), t = [], H.__e(r, n.__v);
      }
    }), Ea && Ea(e, t);
  }, H.unmount = function(e) {
    Ta && Ta(e);
    var t, n = e.__c;
    n && n.__H && (n.__H.__.forEach(function(r) {
      try {
        hn(r);
      } catch (o) {
        t = o;
      }
    }), n.__H = void 0, t && H.__e(t, n.__v));
  };
  var Ia = typeof requestAnimationFrame == "function";
  function Ws(e) {
    var t, n = function() {
      clearTimeout(r), Ia && cancelAnimationFrame(t), setTimeout(e);
    }, r = setTimeout(n, 100);
    Ia && (t = requestAnimationFrame(n));
  }
  function hn(e) {
    var t = ie, n = e.__c;
    typeof n == "function" && (e.__c = void 0, n()), ie = t;
  }
  function Ar(e) {
    var t = ie;
    e.__c = e.__(), ie = t;
  }
  function Or(e, t) {
    return !e || e.length !== t.length || t.some(function(n, r) {
      return n !== e[r];
    });
  }
  function wa(e, t) {
    return typeof t == "function" ? t(e) : t;
  }

  // ../node_modules/.pnpm/preact@10.13.2/node_modules/preact/compat/dist/compat.module.js
  function Ha(e, t) {
    for (var n in t)
      e[n] = t[n];
    return e;
  }
  function Ur(e, t) {
    for (var n in e)
      if (n !== "__source" && !(n in t))
        return !0;
    for (var r in t)
      if (r !== "__source" && e[r] !== t[r])
        return !0;
    return !1;
  }
  function Ra(e) {
    this.props = e;
  }
  function bn(e, t) {
    function n(o) {
      var a = this.props.ref, s = a == o.ref;
      return !s && a && (a.call ? a(null) : a.current = null), t ? !t(this.props, o) || !s : Ur(this.props, o);
    }
    function r(o) {
      return this.shouldComponentUpdate = n, fe(e, o);
    }
    return r.displayName = "Memo(" + (e.displayName || e.name) + ")", r.prototype.isReactComponent = !0, r.__f = !0, r;
  }
  (Ra.prototype = new Ne()).isPureReactComponent = !0, Ra.prototype.shouldComponentUpdate = function(e, t) {
    return Ur(this.props, e) || Ur(this.state, t);
  };
  var ka = H.__b;
  H.__b = function(e) {
    e.type && e.type.__f && e.ref && (e.props.ref = e.ref, e.ref = null), ka && ka(e);
  };
  var $s = typeof Symbol < "u" && Symbol.for && Symbol.for("react.forward_ref") || 3911;
  function vn(e) {
    function t(n) {
      var r = Ha({}, n);
      return delete r.ref, e(r, n.ref || null);
    }
    return t.$$typeof = $s, t.render = t, t.prototype.isReactComponent = t.__f = !0, t.displayName = "ForwardRef(" + (e.displayName || e.name) + ")", t;
  }
  var zs = H.__e;
  H.__e = function(e, t, n, r) {
    if (e.then) {
      for (var o, a = t; a = a.__; )
        if ((o = a.__c) && o.__c)
          return t.__e == null && (t.__e = n.__e, t.__k = n.__k), o.__c(e, t);
    }
    zs(e, t, n, r);
  };
  var Na = H.unmount;
  function Ua(e, t, n) {
    return e && (e.__c && e.__c.__H && (e.__c.__H.__.forEach(function(r) {
      typeof r.__c == "function" && r.__c();
    }), e.__c.__H = null), (e = Ha({}, e)).__c != null && (e.__c.__P === n && (e.__c.__P = t), e.__c = null), e.__k = e.__k && e.__k.map(function(r) {
      return Ua(r, t, n);
    })), e;
  }
  function ja(e, t, n) {
    return e && (e.__v = null, e.__k = e.__k && e.__k.map(function(r) {
      return ja(r, t, n);
    }), e.__c && e.__c.__P === t && (e.__e && n.insertBefore(e.__e, e.__d), e.__c.__e = !0, e.__c.__P = n)), e;
  }
  function Hr() {
    this.__u = 0, this.t = null, this.__b = null;
  }
  function Ga(e) {
    var t = e.__.__c;
    return t && t.__a && t.__a(e);
  }
  function _n() {
    this.u = null, this.o = null;
  }
  H.unmount = function(e) {
    var t = e.__c;
    t && t.__R && t.__R(), t && e.__h === !0 && (e.type = null), Na && Na(e);
  }, (Hr.prototype = new Ne()).__c = function(e, t) {
    var n = t.__c, r = this;
    r.t == null && (r.t = []), r.t.push(n);
    var o = Ga(r.__v), a = !1, s = function() {
      a || (a = !0, n.__R = null, o ? o(u) : u());
    };
    n.__R = s;
    var u = function() {
      if (!--r.__u) {
        if (r.state.__a) {
          var m = r.state.__a;
          r.__v.__k[0] = ja(m, m.__c.__P, m.__c.__O);
        }
        var l;
        for (r.setState({ __a: r.__b = null }); l = r.t.pop(); )
          l.forceUpdate();
      }
    }, f = t.__h === !0;
    r.__u++ || f || r.setState({ __a: r.__b = r.__v.__k[0] }), e.then(s, s);
  }, Hr.prototype.componentWillUnmount = function() {
    this.t = [];
  }, Hr.prototype.render = function(e, t) {
    if (this.__b) {
      if (this.__v.__k) {
        var n = document.createElement("div"), r = this.__v.__k[0].__c;
        this.__v.__k[0] = Ua(this.__b, n, r.__O = r.__P);
      }
      this.__b = null;
    }
    var o = t.__a && fe(Se, null, e.fallback);
    return o && (o.__h = null), [fe(Se, null, t.__a ? null : e.children), o];
  };
  var Da = function(e, t, n) {
    if (++n[1] === n[0] && e.o.delete(t), e.props.revealOrder && (e.props.revealOrder[0] !== "t" || !e.o.size))
      for (n = e.u; n; ) {
        for (; n.length > 3; )
          n.pop()();
        if (n[1] < n[0])
          break;
        e.u = n = n[2];
      }
  };
  function qs(e) {
    return this.getChildContext = function() {
      return e.context;
    }, e.children;
  }
  function Ks(e) {
    var t = this, n = e.i;
    t.componentWillUnmount = function() {
      Fr(null, t.l), t.l = null, t.i = null;
    }, t.i && t.i !== n && t.componentWillUnmount(), e.__v ? (t.l || (t.i = n, t.l = { nodeType: 1, parentNode: n, childNodes: [], appendChild: function(r) {
      this.childNodes.push(r), t.i.appendChild(r);
    }, insertBefore: function(r, o) {
      this.childNodes.push(r), t.i.appendChild(r);
    }, removeChild: function(r) {
      this.childNodes.splice(this.childNodes.indexOf(r) >>> 1, 1), t.i.removeChild(r);
    } }), Fr(fe(qs, { context: t.context }, e.__v), t.l)) : t.l && t.componentWillUnmount();
  }
  function Cn(e, t) {
    var n = fe(Ks, { __v: e, i: t });
    return n.containerInfo = t, n;
  }
  (_n.prototype = new Ne()).__a = function(e) {
    var t = this, n = Ga(t.__v), r = t.o.get(e);
    return r[0]++, function(o) {
      var a = function() {
        t.props.revealOrder ? (r.push(o), Da(t, e, r)) : o();
      };
      n ? n(a) : a();
    };
  }, _n.prototype.render = function(e) {
    this.u = null, this.o = /* @__PURE__ */ new Map();
    var t = Mt(e.children);
    e.revealOrder && e.revealOrder[0] === "b" && t.reverse();
    for (var n = t.length; n--; )
      this.o.set(t[n], this.u = [1, 0, this.u]);
    return e.children;
  }, _n.prototype.componentDidUpdate = _n.prototype.componentDidMount = function() {
    var e = this;
    this.o.forEach(function(t, n) {
      Da(e, n, t);
    });
  };
  var Js = typeof Symbol < "u" && Symbol.for && Symbol.for("react.element") || 60103, Xs = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/, Qs = /^on(Ani|Tra|Tou|BeforeInp|Compo)/, Ys = /[A-Z0-9]/g, Zs = typeof document < "u", el = function(e) {
    return (typeof Symbol < "u" && typeof Symbol() == "symbol" ? /fil|che|rad/ : /fil|che|ra/).test(e);
  };
  Ne.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(e) {
    Object.defineProperty(Ne.prototype, e, { configurable: !0, get: function() {
      return this["UNSAFE_" + e];
    }, set: function(t) {
      Object.defineProperty(this, e, { configurable: !0, writable: !0, value: t });
    } });
  });
  var La = H.event;
  function tl() {
  }
  function nl() {
    return this.cancelBubble;
  }
  function rl() {
    return this.defaultPrevented;
  }
  H.event = function(e) {
    return La && (e = La(e)), e.persist = tl, e.isPropagationStopped = nl, e.isDefaultPrevented = rl, e.nativeEvent = e;
  };
  var Ba, ol = { enumerable: !1, configurable: !0, get: function() {
    return this.class;
  } }, Fa = H.vnode;
  H.vnode = function(e) {
    typeof e.type == "string" && function(t) {
      var n = t.props, r = t.type, o = {};
      for (var a in n) {
        var s = n[a];
        if (!(a === "value" && "defaultValue" in n && s == null || Zs && a === "children" && r === "noscript" || a === "class" || a === "className")) {
          var u = a.toLowerCase();
          a === "defaultValue" && "value" in n && n.value == null ? a = "value" : a === "download" && s === !0 ? s = "" : u === "ondoubleclick" ? a = "ondblclick" : u !== "onchange" || r !== "input" && r !== "textarea" || el(n.type) ? u === "onfocus" ? a = "onfocusin" : u === "onblur" ? a = "onfocusout" : Qs.test(a) ? a = u : r.indexOf("-") === -1 && Xs.test(a) ? a = a.replace(Ys, "-$&").toLowerCase() : s === null && (s = void 0) : u = a = "oninput", u === "oninput" && o[a = u] && (a = "oninputCapture"), o[a] = s;
        }
      }
      r == "select" && o.multiple && Array.isArray(o.value) && (o.value = Mt(n.children).forEach(function(f) {
        f.props.selected = o.value.indexOf(f.props.value) != -1;
      })), r == "select" && o.defaultValue != null && (o.value = Mt(n.children).forEach(function(f) {
        f.props.selected = o.multiple ? o.defaultValue.indexOf(f.props.value) != -1 : o.defaultValue == f.props.value;
      })), n.class && !n.className ? (o.class = n.class, Object.defineProperty(o, "className", ol)) : (n.className && !n.class || n.class && n.className) && (o.class = o.className = n.className), t.props = o;
    }(e), e.$$typeof = Js, Fa && Fa(e);
  };
  var Ma = H.__r;
  H.__r = function(e) {
    Ma && Ma(e), Ba = e.__c;
  };
  var Aa = H.diffed;
  H.diffed = function(e) {
    Aa && Aa(e);
    var t = e.props, n = e.__e;
    n != null && e.type === "textarea" && "value" in t && t.value !== n.value && (n.value = t.value == null ? "" : t.value), Ba = null;
  };

  // ../dist/util/lib-shared.js
  var Wa = {
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
  var Ee = globalThis.process.env.NODE_ENV = globalThis.process.env.NODE_ENV || "production";

  // ../dist/util/use-call-count.js
  window.requestIdleCallback ??= (e) => setTimeout(() => {
    e({ didTimeout: !1, timeRemaining: () => 0 });
  }, 5);
  var Gr = null;
  function R(e) {
    if (Ee !== "development")
      return;
    let t = e.name;
    al || il.has(t) || (console.assert(t.length > 0), window._hookCallCount ??= { callCounts: {} }, window._hookCallCount.callCounts[t] ??= { moment: 0, total: 0 }, window._hookCallCount.callCounts[t].moment += 1, window._hookCallCount.callCounts[t].total += 1, Gr == null && (Gr = requestIdleCallback(() => {
      let n = Object.entries(window._hookCallCount.callCounts).map(([r, o]) => ({ Hook: r || "?", Now: o?.moment || 0, Total: o?.total || 0 })).filter(({ Now: r }) => !!r).sort(({ Now: r }, { Now: o }) => !r && !o ? 0 : (r ||= 1 / 0, o ||= 1 / 0, r - o));
      console.table(n, ["Hook", "Now", "Total"]), Object.entries(window._hookCallCount.callCounts).forEach(([, r]) => {
        r.moment = 0;
      }), Gr = null;
    })));
  }
  var al = !1, il = /* @__PURE__ */ new Set();

  // ../dist/util/use-before-layout-effect.js
  var yn = /* @__PURE__ */ new Map(), Va = "diffed", sl = (e, ...t) => {
    for (let [n, r] of yn) {
      let o = r.prevInputs;
      cl(o, r.inputs) && (r.cleanup?.(), r.cleanup = r.effect(), r.prevInputs = r.inputs);
    }
    yn.clear(), ll?.(e, ...t);
  }, ll = H[Va];
  H[Va] = sl;
  var Br = 0;
  function ul() {
    let e = ++Br;
    return Br >= Number.MAX_SAFE_INTEGER && (Br = -Number.MAX_SAFE_INTEGER), e;
  }
  function Ut(e, t) {
    R(Ut);
    let n = A(null);
    n.current ??= ul();
    let r = n.current;
    e ? yn.set(r, { effect: e, inputs: t, cleanup: null }) : yn.delete(r);
  }
  function cl(e, t) {
    return !!(!e || e.length !== t?.length || t?.some((n, r) => n !== e[r]));
  }

  // ../dist/util/lib-preact.js
  function mt(e) {
    (H.debounceRendering ?? queueMicrotask)(e);
  }
  var Wr = "onfocusin", jt = "onfocusout", Vr = {
    dblclick: "onDblClick",
    focusin: "onfocusin",
    focusout: "onfocusout",
    formdata: "onFormData",
    toggle: "onToggle",
    ...Wa
  };

  // ../dist/preact-extensions/use-passive-state.js
  function Z(e, ...t) {
    if (Ee !== "development")
      return;
    let n = A([]), r = A([]);
    o(t.length, -1), t.forEach(o);
    return;
    function o(a, s) {
      let u = s + 1;
      if (n.current[u] === void 0 && (n.current[u] = a), n.current[u] != a && !r.current[u]) {
        debugger;
        console.error(`The hook ${e} requires some or all of its arguments remain stable across each render; please check the ${s}-indexed argument (${s >= 0 ? JSON.stringify(t[s]) : "the number of supposedly stable elements"}).`), r.current[u] = !0;
      }
    }
  }
  function q(e, t, n) {
    R(q);
    let r = A(Ae), o = A(Ae), a = A(!1), s = A(Ae), u = A(void 0);
    Z("usePassiveState", e, t, n);
    let f = k(() => {
      let d = u.current;
      d && d();
    }, []), m = k(() => {
      if (r.current === Ae && t != null)
        try {
          let d = t();
          r.current = d, u.current = e?.(d, void 0, void 0) ?? void 0;
        } catch {
        }
    }, [
      /* getInitialValue and onChange intentionally omitted */
    ]), l = k(() => (a.current && console.warn("During onChange, prefer using the (value, prevValue) arguments instead of getValue -- it's ambiguous as to if you're asking for the old or new value at this point in time for this component."), r.current === Ae && m(), r.current === Ae ? void 0 : r.current), []);
    oe(() => {
      m();
    }, []);
    let i = k((d, h) => {
      let p = d instanceof Function ? d(r.current === Ae ? void 0 : r.current) : d;
      /*dependencyToCompareAgainst.current === Unset &&*/
      p !== r.current && (s.current = r.current, r.current = p, o.current = h, (n ?? mt)(() => {
        let b = o.current, g = r.current, v = s.current;
        if (s.current != r.current) {
          r.current = s.current = Ae, a.current = !0;
          try {
            f(), r.current = g, u.current = e?.(g, v === Ae ? void 0 : v, b) ?? void 0;
          } finally {
            a.current = !1;
          }
        }
        s.current = Ae;
      }));
    }, []);
    return [l, i];
  }
  var Ae = Symbol();
  function Gt() {
    return !0;
  }
  function ve() {
    return !1;
  }
  function Ce() {
    return null;
  }
  function $r() {
    return 0;
  }
  function me(e) {
    e();
  }

  // ../dist/preact-extensions/use-stable-getter.js
  var $a = Symbol("unset");
  function Q(e) {
    R(Q);
    let t = A($a);
    return Ut(() => {
      t.current = e;
    }, [e]), k(() => {
      if (t.current === $a)
        throw new Error("Value retrieved from useStableGetter() cannot be called during render.");
      return t.current;
    }, []);
  }
  function K(e) {
    return ce(() => e, Object.values(e));
  }

  // ../dist/preact-extensions/use-stable-callback.js
  var Ka = /* @__PURE__ */ new WeakMap();
  function za(e) {
    return Ka.get(e) ?? !1;
  }
  function qa(e) {
    return Ka.set(e, !0), e;
  }
  function P(e, t) {
    if (R(P), Z("useStableCallback", t == null, t?.length, za(e)), za(e))
      return e;
    if (t == null) {
      let n = Q(e);
      return qa(k((...r) => n()(...r), []));
    } else
      return console.assert(t.length === 0), qa(k(e, []));
  }

  // ../dist/dom-helpers/use-event-handler.js
  function Pe(e, t, n, r, o) {
    R(Pe), o ||= "grouped", Z("useGlobalHandler", o), o === "grouped" ? ml(e, t, n, r) : pl(e, t, n, r);
  }
  var Ja = /* @__PURE__ */ new Map();
  function Xa(e, t, n, r, o) {
    if (r) {
      let a = JSON.stringify(o), s = Ja.get(t) || /* @__PURE__ */ new Map(), u = s.get(n) || /* @__PURE__ */ new Map(), f = u.get(a) || { listener: null, listeners: /* @__PURE__ */ new Set() };
      e(f, r), u.set(a, f), s.set(n, u), Ja.set(t, s);
    }
  }
  function dl(e, t, n, r) {
    Xa((o, a) => {
      o.listeners.add(a), o.listener == null && e.addEventListener(t, o.listener = (s) => o.listeners.forEach((u) => u(s)), r);
    }, e, t, n, r);
  }
  function fl(e, t, n, r) {
    Xa((o, a) => {
      o.listeners.delete(a), o.listener == null && e.removeEventListener(t, o.listener = (s) => o.listeners.forEach((u) => u(s)), r);
    }, e, t, n, r);
  }
  function ml(e, t, n, r) {
    let o = P(n ?? (() => {
    }));
    n == null && (o = null), G(() => {
      if (o)
        return dl(e, t, o, r), () => fl(e, t, o, r);
    }, [e, t, o]);
  }
  function pl(e, t, n, r) {
    let o = P(n ?? (() => {
    }));
    n == null && (o = null), G(() => {
      if (o)
        return e.addEventListener(t, o, r), () => e.removeEventListener(t, o, r);
    }, [e, t, o]);
  }

  // ../dist/component-detail/dismissal/use-backdrop-dismiss.js
  function xn({ backdropDismissParameters: { dismissBackdropActive: e, onDismissBackdrop: t, ...n }, refElementPopupReturn: { getElement: r, ...o }, ...a }) {
    R(xn);
    let s = Q(e), u = Q(t), f = k(function(l) {
      if (!s())
        return;
      let i = r(), d = !1;
      l.target && i && i.contains(l.target) && (d = !0), d || u()?.(l);
    }, []);
    Pe(window, "mousedown", e ? f : null, { capture: !0 }), Pe(window, "touchstart", e ? f : null, { capture: !0 });
  }

  // ../dist/util/event.js
  var je = Symbol("event-detail");
  function we(e, t) {
    let n = e ?? {};
    return n[je] ??= {}, Object.assign(n[je], t), n;
  }

  // ../dist/component-detail/dismissal/use-escape-dismiss.js
  var Qa = "__preact-prop-helpers-escape-key-dismiss__";
  function hl(e) {
    let t = 0, n = e.parentElement;
    for (; n; )
      t += 1, n = n.parentElement;
    return t;
  }
  function Sn({ escapeDismissParameters: { onDismissEscape: e, dismissEscapeActive: t, getDocument: n, parentDepth: r, ...o }, refElementPopupReturn: { getElement: a, ...s } }) {
    R(Sn);
    let u = Q(e), f = P(n), m = Q(r + 1);
    G(() => {
      let i = f().defaultView;
      i[Qa] ??= { microtaskQueued: !1, elementQueue: /* @__PURE__ */ new Map() };
      let d = i[Qa];
      if (t)
        return i.addEventListener("keydown", h, { capture: !0 }), () => {
          let p = a();
          p && d.elementQueue && d.elementQueue.delete(p), i.removeEventListener("keydown", h, { capture: !0 });
        };
      function h(p) {
        if (p.key == "Escape") {
          p.preventDefault(), p.stopPropagation();
          let b = () => {
            u()?.(we(p, { reason: "escape" }));
          }, g = a();
          if (g) {
            let v = hl(g), _ = m();
            d.elementQueue.set(g, { depth: _, onClose: b, treeDepth: v });
          }
          d.microtaskQueued || (d.microtaskQueued = !0, setTimeout(() => {
            let { elementQueue: v } = d;
            d.microtaskQueued = !1, d.elementQueue = /* @__PURE__ */ new Map();
            let _ = -1 / 0, C = -1 / 0, y = null, x = null;
            for (let [S, { depth: E, onClose: T, treeDepth: L }] of v) {
              let w = !1;
              E == _ && L > C && (w = !0), (E > _ || E == _ && w) && (_ = E, y = S, C = L, x = T);
            }
            x?.();
          }, 0));
        }
      }
    }, [t]);
  }

  // ../dist/component-detail/dismissal/use-lost-focus-dismiss.js
  function En({ refElementPopupReturn: { getElement: e, ...t }, refElementSourceReturn: n, lostFocusDismissParameters: { dismissLostFocusActive: r, onDismissLostFocus: o, ...a }, ...s }) {
    R(En);
    let { getElement: u, ...f } = n ?? {};
    let m = Q(o), l = Q(r);
    return { activeElementParameters: { onLastActiveElementChange: k((d, h, p) => {
      let b = l(), g = u?.(), v = e();
      g?.contains(d) || v?.contains(d) || b && (console.assert(p != null), m()?.(p));
    }, [u]) } };
  }

  // ../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_freeGlobal.js
  var gl = typeof global == "object" && global && global.Object === Object && global, Tn = gl;

  // ../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_root.js
  var _l = typeof self == "object" && self && self.Object === Object && self, bl = Tn || _l || Function("return this")(), pt = bl;

  // ../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_Symbol.js
  var vl = pt.Symbol, ht = vl;

  // ../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_getRawTag.js
  var Ya = Object.prototype, Cl = Ya.hasOwnProperty, yl = Ya.toString, Bt = ht ? ht.toStringTag : void 0;
  function xl(e) {
    var t = Cl.call(e, Bt), n = e[Bt];
    try {
      e[Bt] = void 0;
      var r = !0;
    } catch {
    }
    var o = yl.call(e);
    return r && (t ? e[Bt] = n : delete e[Bt]), o;
  }
  var Za = xl;

  // ../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_objectToString.js
  var Sl = Object.prototype, El = Sl.toString;
  function Tl(e) {
    return El.call(e);
  }
  var ei = Tl;

  // ../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_baseGetTag.js
  var Il = "[object Null]", Pl = "[object Undefined]", ti = ht ? ht.toStringTag : void 0;
  function wl(e) {
    return e == null ? e === void 0 ? Pl : Il : ti && ti in Object(e) ? Za(e) : ei(e);
  }
  var $e = wl;

  // ../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/isObjectLike.js
  function Rl(e) {
    return e != null && typeof e == "object";
  }
  var ze = Rl;

  // ../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/isSymbol.js
  var kl = "[object Symbol]";
  function Nl(e) {
    return typeof e == "symbol" || ze(e) && $e(e) == kl;
  }
  var ni = Nl;

  // ../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_arrayMap.js
  function Dl(e, t) {
    for (var n = -1, r = e == null ? 0 : e.length, o = Array(r); ++n < r; )
      o[n] = t(e[n], n, e);
    return o;
  }
  var ri = Dl;

  // ../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/isArray.js
  var Ll = Array.isArray, In = Ll;

  // ../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_trimmedEndIndex.js
  var Fl = /\s/;
  function Ml(e) {
    for (var t = e.length; t-- && Fl.test(e.charAt(t)); )
      ;
    return t;
  }
  var oi = Ml;

  // ../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_baseTrim.js
  var Al = /^\s+/;
  function Ol(e) {
    return e && e.slice(0, oi(e) + 1).replace(Al, "");
  }
  var ai = Ol;

  // ../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/isObject.js
  function Hl(e) {
    var t = typeof e;
    return e != null && (t == "object" || t == "function");
  }
  var tt = Hl;

  // ../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/toNumber.js
  var ii = 0 / 0, Ul = /^[-+]0x[0-9a-f]+$/i, jl = /^0b[01]+$/i, Gl = /^0o[0-7]+$/i, Bl = parseInt;
  function Wl(e) {
    if (typeof e == "number")
      return e;
    if (ni(e))
      return ii;
    if (tt(e)) {
      var t = typeof e.valueOf == "function" ? e.valueOf() : e;
      e = tt(t) ? t + "" : t;
    }
    if (typeof e != "string")
      return e === 0 ? e : +e;
    e = ai(e);
    var n = jl.test(e);
    return n || Gl.test(e) ? Bl(e.slice(2), n ? 2 : 8) : Ul.test(e) ? ii : +e;
  }
  var zr = Wl;

  // ../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/identity.js
  function Vl(e) {
    return e;
  }
  var nt = Vl;

  // ../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/isFunction.js
  var $l = "[object AsyncFunction]", zl = "[object Function]", ql = "[object GeneratorFunction]", Kl = "[object Proxy]";
  function Jl(e) {
    if (!tt(e))
      return !1;
    var t = $e(e);
    return t == zl || t == ql || t == $l || t == Kl;
  }
  var si = Jl;

  // ../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/noop.js
  function Xl() {
  }
  var Wt = Xl;

  // ../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_copyArray.js
  function Ql(e, t) {
    var n = -1, r = e.length;
    for (t || (t = Array(r)); ++n < r; )
      t[n] = e[n];
    return t;
  }
  var li = Ql;

  // ../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_isIndex.js
  var Yl = 9007199254740991, Zl = /^(?:0|[1-9]\d*)$/;
  function eu(e, t) {
    var n = typeof e;
    return t = t ?? Yl, !!t && (n == "number" || n != "symbol" && Zl.test(e)) && e > -1 && e % 1 == 0 && e < t;
  }
  var ui = eu;

  // ../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/isLength.js
  var tu = 9007199254740991;
  function nu(e) {
    return typeof e == "number" && e > -1 && e % 1 == 0 && e <= tu;
  }
  var Pn = nu;

  // ../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/isArrayLike.js
  function ru(e) {
    return e != null && Pn(e.length) && !si(e);
  }
  var ci = ru;

  // ../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_isPrototype.js
  var ou = Object.prototype;
  function au(e) {
    var t = e && e.constructor, n = typeof t == "function" && t.prototype || ou;
    return e === n;
  }
  var di = au;

  // ../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_baseTimes.js
  function iu(e, t) {
    for (var n = -1, r = Array(e); ++n < e; )
      r[n] = t(n);
    return r;
  }
  var fi = iu;

  // ../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_baseIsArguments.js
  var su = "[object Arguments]";
  function lu(e) {
    return ze(e) && $e(e) == su;
  }
  var qr = lu;

  // ../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/isArguments.js
  var mi = Object.prototype, uu = mi.hasOwnProperty, cu = mi.propertyIsEnumerable, du = qr(function() {
    return arguments;
  }()) ? qr : function(e) {
    return ze(e) && uu.call(e, "callee") && !cu.call(e, "callee");
  }, pi = du;

  // ../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/stubFalse.js
  function fu() {
    return !1;
  }
  var hi = fu;

  // ../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/isBuffer.js
  var bi = typeof exports == "object" && exports && !exports.nodeType && exports, gi = bi && typeof module == "object" && module && !module.nodeType && module, mu = gi && gi.exports === bi, _i = mu ? pt.Buffer : void 0, pu = _i ? _i.isBuffer : void 0, hu = pu || hi, vi = hu;

  // ../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_baseIsTypedArray.js
  var gu = "[object Arguments]", _u = "[object Array]", bu = "[object Boolean]", vu = "[object Date]", Cu = "[object Error]", yu = "[object Function]", xu = "[object Map]", Su = "[object Number]", Eu = "[object Object]", Tu = "[object RegExp]", Iu = "[object Set]", Pu = "[object String]", wu = "[object WeakMap]", Ru = "[object ArrayBuffer]", ku = "[object DataView]", Nu = "[object Float32Array]", Du = "[object Float64Array]", Lu = "[object Int8Array]", Fu = "[object Int16Array]", Mu = "[object Int32Array]", Au = "[object Uint8Array]", Ou = "[object Uint8ClampedArray]", Hu = "[object Uint16Array]", Uu = "[object Uint32Array]", ae = {};
  ae[Nu] = ae[Du] = ae[Lu] = ae[Fu] = ae[Mu] = ae[Au] = ae[Ou] = ae[Hu] = ae[Uu] = !0;
  ae[gu] = ae[_u] = ae[Ru] = ae[bu] = ae[ku] = ae[vu] = ae[Cu] = ae[yu] = ae[xu] = ae[Su] = ae[Eu] = ae[Tu] = ae[Iu] = ae[Pu] = ae[wu] = !1;
  function ju(e) {
    return ze(e) && Pn(e.length) && !!ae[$e(e)];
  }
  var Ci = ju;

  // ../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_baseUnary.js
  function Gu(e) {
    return function(t) {
      return e(t);
    };
  }
  var yi = Gu;

  // ../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_nodeUtil.js
  var xi = typeof exports == "object" && exports && !exports.nodeType && exports, Vt = xi && typeof module == "object" && module && !module.nodeType && module, Bu = Vt && Vt.exports === xi, Kr = Bu && Tn.process, Wu = function() {
    try {
      var e = Vt && Vt.require && Vt.require("util").types;
      return e || Kr && Kr.binding && Kr.binding("util");
    } catch {
    }
  }(), Jr = Wu;

  // ../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/isTypedArray.js
  var Si = Jr && Jr.isTypedArray, Vu = Si ? yi(Si) : Ci, Ei = Vu;

  // ../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_arrayLikeKeys.js
  var $u = Object.prototype, zu = $u.hasOwnProperty;
  function qu(e, t) {
    var n = In(e), r = !n && pi(e), o = !n && !r && vi(e), a = !n && !r && !o && Ei(e), s = n || r || o || a, u = s ? fi(e.length, String) : [], f = u.length;
    for (var m in e)
      (t || zu.call(e, m)) && !(s && // Safari 9 has enumerable `arguments.length` in strict mode.
      (m == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
      o && (m == "offset" || m == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
      a && (m == "buffer" || m == "byteLength" || m == "byteOffset") || // Skip index properties.
      ui(m, f))) && u.push(m);
    return u;
  }
  var Ti = qu;

  // ../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_overArg.js
  function Ku(e, t) {
    return function(n) {
      return e(t(n));
    };
  }
  var Ii = Ku;

  // ../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_nativeKeys.js
  var Ju = Ii(Object.keys, Object), Pi = Ju;

  // ../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_baseKeys.js
  var Xu = Object.prototype, Qu = Xu.hasOwnProperty;
  function Yu(e) {
    if (!di(e))
      return Pi(e);
    var t = [];
    for (var n in Object(e))
      Qu.call(e, n) && n != "constructor" && t.push(n);
    return t;
  }
  var wi = Yu;

  // ../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/keys.js
  function Zu(e) {
    return ci(e) ? Ti(e) : wi(e);
  }
  var Ri = Zu;

  // ../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/now.js
  var ec = function() {
    return pt.Date.now();
  }, wn = ec;

  // ../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/debounce.js
  var tc = "Expected a function", nc = Math.max, rc = Math.min;
  function oc(e, t, n) {
    var r, o, a, s, u, f, m = 0, l = !1, i = !1, d = !0;
    if (typeof e != "function")
      throw new TypeError(tc);
    t = zr(t) || 0, tt(n) && (l = !!n.leading, i = "maxWait" in n, a = i ? nc(zr(n.maxWait) || 0, t) : a, d = "trailing" in n ? !!n.trailing : d);
    function h(S) {
      var E = r, T = o;
      return r = o = void 0, m = S, s = e.apply(T, E), s;
    }
    function p(S) {
      return m = S, u = setTimeout(v, t), l ? h(S) : s;
    }
    function b(S) {
      var E = S - f, T = S - m, L = t - E;
      return i ? rc(L, a - T) : L;
    }
    function g(S) {
      var E = S - f, T = S - m;
      return f === void 0 || E >= t || E < 0 || i && T >= a;
    }
    function v() {
      var S = wn();
      if (g(S))
        return _(S);
      u = setTimeout(v, b(S));
    }
    function _(S) {
      return u = void 0, d && r ? h(S) : (r = o = void 0, s);
    }
    function C() {
      u !== void 0 && clearTimeout(u), m = 0, r = f = o = u = void 0;
    }
    function y() {
      return u === void 0 ? s : _(wn());
    }
    function x() {
      var S = wn(), E = g(S);
      if (r = arguments, o = this, f = S, E) {
        if (u === void 0)
          return p(f);
        if (i)
          return clearTimeout(u), u = setTimeout(v, t), h(f);
      }
      return u === void 0 && (u = setTimeout(v, t)), s;
    }
    return x.cancel = C, x.flush = y, x;
  }
  var Xr = oc;

  // ../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_baseValues.js
  function ac(e, t) {
    return ri(t, function(n) {
      return e[n];
    });
  }
  var ki = ac;

  // ../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/values.js
  function ic(e) {
    return e == null ? [] : ki(e, Ri(e));
  }
  var Ni = ic;

  // ../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_baseRandom.js
  var sc = Math.floor, lc = Math.random;
  function uc(e, t) {
    return e + sc(lc() * (t - e + 1));
  }
  var Di = uc;

  // ../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_shuffleSelf.js
  function cc(e, t) {
    var n = -1, r = e.length, o = r - 1;
    for (t = t === void 0 ? r : t; ++n < t; ) {
      var a = Di(n, o), s = e[a];
      e[a] = e[n], e[n] = s;
    }
    return e.length = t, e;
  }
  var Rn = cc;

  // ../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_arrayShuffle.js
  function dc(e) {
    return Rn(li(e));
  }
  var Li = dc;

  // ../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_baseShuffle.js
  function fc(e) {
    return Rn(Ni(e));
  }
  var Fi = fc;

  // ../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/shuffle.js
  function mc(e) {
    var t = In(e) ? Li : Fi;
    return t(e);
  }
  var Qr = mc;

  // ../dist/dom-helpers/use-merged-children.js
  function kn(e, t) {
    if (R(kn), !(e == null && t == null))
      return e == null ? t : t == null ? e : fe(Se, {}, e, t);
  }

  // ../dist/dom-helpers/use-merged-classes.js
  function Nn(...e) {
    R(Nn);
    let t = /* @__PURE__ */ new Set();
    for (let n of e)
      typeof n == "string" && n.trim() && t.add(n);
    if (t.size)
      return Array.from(t).join(" ");
  }

  // ../dist/dom-helpers/use-merged-refs.js
  function Mi(e, t) {
    if (typeof t == "function")
      t(e);
    else if (t != null)
      t.current = e;
    else {
      debugger;
      console.assert(!1, "Unknown ref type found that was neither a RefCallback nor a RefObject");
    }
  }
  function Dn(e, t) {
    R(Dn);
    let n = P(function(o) {
      Mi(o, t), Mi(o, e);
    });
    if (!(t == null && e == null))
      return t == null ? e : e == null ? t : n;
  }

  // ../dist/dom-helpers/use-merged-styles.js
  function Ai(e) {
    return Object.fromEntries(e.split(";").map((t) => t.split(":")));
  }
  function gt(e, t) {
    if (R(gt), !(!e && !t)) {
      if (typeof e != typeof t) {
        if (e && !t)
          return e;
        if (!e && t)
          return t;
        if (e && t) {
          if (typeof e == "string")
            return gt(Ai(e), t);
          if (typeof t == "string")
            return gt(e, Ai(t));
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
  var pc = console.warn;
  function W(...e) {
    R(W), Z("useMergedProps", e.length);
    let t = {};
    for (let n of e)
      t = gc(t, n);
    return t;
  }
  var Oi = /* @__PURE__ */ new Set(["children", "ref", "className", "class", "style"]);
  function hc(e, t, n) {
    return typeof t == "function" || typeof n == "function" ? Hi(t, n) : t == null && n == null ? n === null && t === void 0 ? n : t : t == null ? n : n == null ? t : (n == t || pc?.(`The prop "${e}" cannot simultaneously be the values ${t} and ${n}. One must be chosen outside of useMergedProps.`), n);
  }
  function gc(e, t) {
    let n = {
      ref: Dn(e.ref, t.ref),
      style: gt(e.style, t.style),
      className: Nn(e.class, e.className, t.class, t.className),
      children: kn(e.children, t.children)
    };
    n.ref === void 0 && delete n.ref, n.style === void 0 && delete n.style, n.className === void 0 && delete n.className, n.class === void 0 && delete n.class, n.children === void 0 && delete n.children;
    for (let r in e) {
      let o = r;
      Oi.has(o) || (n[o] = e[o]);
    }
    for (let r in t) {
      let o = r;
      Oi.has(o) || (n[o] = hc(o, n[o], t[o]));
    }
    return n;
  }
  function Hi(e, t) {
    return e ? t ? (...n) => {
      let r = e(...n), o = t(...n);
      if (r instanceof Promise || o instanceof Promise)
        return Promise.all([r, o]);
    } : e : t;
  }

  // ../node_modules/.pnpm/tabbable@6.2.0/node_modules/tabbable/dist/index.esm.js
  var ji = ["input:not([inert])", "select:not([inert])", "textarea:not([inert])", "a[href]:not([inert])", "button:not([inert])", "[tabindex]:not(slot):not([inert])", "audio[controls]:not([inert])", "video[controls]:not([inert])", '[contenteditable]:not([contenteditable="false"]):not([inert])', "details>summary:first-of-type:not([inert])", "details:not([inert])"], _c = /* @__PURE__ */ ji.join(","), Gi = typeof Element > "u", $t = Gi ? function() {
  } : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector, Ln = !Gi && Element.prototype.getRootNode ? function(e) {
    var t;
    return e == null || (t = e.getRootNode) === null || t === void 0 ? void 0 : t.call(e);
  } : function(e) {
    return e?.ownerDocument;
  }, bc = function e(t, n) {
    var r;
    n === void 0 && (n = !0);
    var o = t == null || (r = t.getAttribute) === null || r === void 0 ? void 0 : r.call(t, "inert"), a = o === "" || o === "true", s = a || n && t && e(t.parentNode);
    return s;
  }, vc = function(t) {
    var n, r = t == null || (n = t.getAttribute) === null || n === void 0 ? void 0 : n.call(t, "contenteditable");
    return r === "" || r === "true";
  };
  var Cc = function(t) {
    return !isNaN(parseInt(t.getAttribute("tabindex"), 10));
  }, yc = function(t) {
    if (!t)
      throw new Error("No node provided");
    return t.tabIndex < 0 && (/^(AUDIO|VIDEO|DETAILS)$/.test(t.tagName) || vc(t)) && !Cc(t) ? 0 : t.tabIndex;
  };
  var Bi = function(t) {
    return t.tagName === "INPUT";
  }, xc = function(t) {
    return Bi(t) && t.type === "hidden";
  }, Sc = function(t) {
    var n = t.tagName === "DETAILS" && Array.prototype.slice.apply(t.children).some(function(r) {
      return r.tagName === "SUMMARY";
    });
    return n;
  }, Ec = function(t, n) {
    for (var r = 0; r < t.length; r++)
      if (t[r].checked && t[r].form === n)
        return t[r];
  }, Tc = function(t) {
    if (!t.name)
      return !0;
    var n = t.form || Ln(t), r = function(u) {
      return n.querySelectorAll('input[type="radio"][name="' + u + '"]');
    }, o;
    if (typeof window < "u" && typeof window.CSS < "u" && typeof window.CSS.escape == "function")
      o = r(window.CSS.escape(t.name));
    else
      try {
        o = r(t.name);
      } catch (s) {
        return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s", s.message), !1;
      }
    var a = Ec(o, t.form);
    return !a || a === t;
  }, Ic = function(t) {
    return Bi(t) && t.type === "radio";
  }, Pc = function(t) {
    return Ic(t) && !Tc(t);
  }, wc = function(t) {
    var n, r = t && Ln(t), o = (n = r) === null || n === void 0 ? void 0 : n.host, a = !1;
    if (r && r !== t) {
      var s, u, f;
      for (a = !!((s = o) !== null && s !== void 0 && (u = s.ownerDocument) !== null && u !== void 0 && u.contains(o) || t != null && (f = t.ownerDocument) !== null && f !== void 0 && f.contains(t)); !a && o; ) {
        var m, l, i;
        r = Ln(o), o = (m = r) === null || m === void 0 ? void 0 : m.host, a = !!((l = o) !== null && l !== void 0 && (i = l.ownerDocument) !== null && i !== void 0 && i.contains(o));
      }
    }
    return a;
  }, Ui = function(t) {
    var n = t.getBoundingClientRect(), r = n.width, o = n.height;
    return r === 0 && o === 0;
  }, Rc = function(t, n) {
    var r = n.displayCheck, o = n.getShadowRoot;
    if (getComputedStyle(t).visibility === "hidden")
      return !0;
    var a = $t.call(t, "details>summary:first-of-type"), s = a ? t.parentElement : t;
    if ($t.call(s, "details:not([open]) *"))
      return !0;
    if (!r || r === "full" || r === "legacy-full") {
      if (typeof o == "function") {
        for (var u = t; t; ) {
          var f = t.parentElement, m = Ln(t);
          if (f && !f.shadowRoot && o(f) === !0)
            return Ui(t);
          t.assignedSlot ? t = t.assignedSlot : !f && m !== t.ownerDocument ? t = m.host : t = f;
        }
        t = u;
      }
      if (wc(t))
        return !t.getClientRects().length;
      if (r !== "legacy-full")
        return !0;
    } else if (r === "non-zero-area")
      return Ui(t);
    return !1;
  }, kc = function(t) {
    if (/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(t.tagName))
      for (var n = t.parentElement; n; ) {
        if (n.tagName === "FIELDSET" && n.disabled) {
          for (var r = 0; r < n.children.length; r++) {
            var o = n.children.item(r);
            if (o.tagName === "LEGEND")
              return $t.call(n, "fieldset[disabled] *") ? !0 : !o.contains(t);
          }
          return !0;
        }
        n = n.parentElement;
      }
    return !1;
  }, Wi = function(t, n) {
    return !(n.disabled || // we must do an inert look up to filter out any elements inside an inert ancestor
    //  because we're limited in the type of selectors we can use in JSDom (see related
    //  note related to `candidateSelectors`)
    bc(n) || xc(n) || Rc(n, t) || // For a details element with a summary, the summary element gets the focus
    Sc(n) || kc(n));
  }, Nc = function(t, n) {
    return !(Pc(n) || yc(n) < 0 || !Wi(t, n));
  };
  var Fn = function(t, n) {
    if (n = n || {}, !t)
      throw new Error("No node provided");
    return $t.call(t, _c) === !1 ? !1 : Nc(n, t);
  }, Dc = /* @__PURE__ */ ji.concat("iframe").join(","), Vi = function(t, n) {
    if (n = n || {}, !t)
      throw new Error("No node provided");
    return $t.call(t, Dc) === !1 ? !1 : Wi(n, t);
  };

  // ../dist/util/stack.js
  function Mn() {
    if (Ee === "development" && window._generate_setState_stacks)
      try {
        throw new Error();
      } catch (e) {
        return e.stack;
      }
  }
  function zt() {
    if (Ee === "development") {
      let e = ce(Mn, []);
      return k(() => e, []);
    } else
      return Lc;
  }
  function Lc() {
    return "";
  }

  // ../dist/util/focus.js
  function De(e) {
    Ee === "development" && window.LOG_FOCUS_CHANGES === !0 && (console.log(`Focus changed to ${(e?.tagName || "").toLowerCase().padStart(6)}:`, e), console.log(Mn())), e?.focus?.();
  }
  function Yr(e) {
    if (e == null)
      return globalThis.document.body;
    let t = e.ownerDocument, n = t.createTreeWalker(t.body, NodeFilter.SHOW_ELEMENT), r = n.firstChild(), o = null, a = null, s = !1;
    for (; r; ) {
      let u = r.compareDocumentPosition(e);
      if (u & Node.DOCUMENT_POSITION_DISCONNECTED && (s || console.warn("Can't focus anything near a disconnected element"), s = !0), u & Node.DOCUMENT_POSITION_PRECEDING) {
        if (r instanceof Element && Fn(r)) {
          a = r;
          break;
        }
      } else
        u & Node.DOCUMENT_POSITION_FOLLOWING && r instanceof Element && Fn(r) && (o = r);
      r = n.nextNode();
    }
    return a ?? o ?? t.body;
  }

  // ../dist/timing/use-timeout.js
  function qe({ timeout: e, callback: t, triggerIndex: n }) {
    R(qe);
    let r = P(() => {
      a.current = null, t();
    }), o = Q(e), a = A(null), s = e == null;
    G(() => {
      if (!s) {
        let m = o();
        if (console.assert(s == (m == null)), m != null) {
          a.current = +/* @__PURE__ */ new Date();
          let l = setTimeout(r, m);
          return () => clearTimeout(l);
        }
      }
    }, [n, s]);
    let u = k(() => +/* @__PURE__ */ new Date() - +(a.current ?? /* @__PURE__ */ new Date()), []), f = k(() => {
      let m = o();
      return m == null ? null : Math.max(0, m - u());
    }, []);
    return { getElapsedTime: u, getRemainingTime: f };
  }

  // ../dist/util/use-tag-props.js
  var Fc = 0;
  function he(e, t) {
    if (Ee === "development" && window._generate_useTagProps_tags) {
      let [n] = Ue(() => ++Fc), r = `data-props-${t}-${n}`, o = zt();
      return console.assert(!(e && typeof e == "object" && t in e)), qe({
        callback: () => {
          if (document.querySelectorAll(`[${r}]`).length != 1) {
            console.error("A hook returned props that were not properly spread to any HTMLElement:"), console.log(o());
            debugger;
          }
        },
        timeout: 250,
        triggerIndex: t
      }), ce(() => ({
        ...e,
        [r]: !0
        /*, [tag as never]: true*/
      }), [e, t]);
    } else
      return e;
  }

  // ../dist/component-detail/keyboard-navigation/use-linear-navigation.js
  function An({ linearNavigationParameters: { getLowestIndex: e, getHighestIndex: t, isValidForLinearNavigation: n, navigatePastEnd: r, navigatePastStart: o, onNavigateLinear: a, arrowKeyDirection: s, disableHomeEndKeys: u, pageNavigationSize: f, ...m }, rovingTabIndexReturn: { getTabbableIndex: l, setTabbableIndex: i, ...d }, paginatedChildrenParameters: { paginationMax: h, paginationMin: p, ...b }, rearrangeableChildrenReturn: { indexDemangler: g, indexMangler: v, ..._ }, ...C }) {
    R(An);
    let y = Q(h == null || p == null ? null : h - p);
    Z("useLinearNavigation", a, n, g, v);
    let x = k((I, M, O, j, $) => {
      let B = t(), V = e(), Y = l() ?? 0, ee = g(I), { status: ue, valueDemangled: ne } = qi({ isValid: n, lowestChildIndex: V, highestChildIndex: B, indexDemangler: g, indexMangler: v, searchDirection: M, targetDemangled: ee });
      return ue == "past-end" ? r == "wrap" ? ($ == "single" ? S(O, j) : E(O, j), "stop") : r == "passthrough" ? "passthrough" : (r(), "stop") : ue == "past-start" ? o == "wrap" ? ($ == "single" ? E(O, j) : S(O, j), "stop") : o == "passthrough" ? "passthrough" : (o(), "stop") : (i(ne, O, j), a?.(ne, O), "stop");
    }, []), S = P((I, M) => x(e(), -1, I, M, "single")), E = P((I, M) => x(t(), 1, I, M, "single")), T = P((I, M, O, j) => {
      let $ = t(), B = Math.sign(M) || 1, V = l() ?? 0, Y = v(V) + M;
      return x(Y, B, I, O, j);
    }), L = P((I, M) => T(I, 1, M, "single")), w = P((I, M) => T(I, -1, M, "single")), D = A(he({
      onKeyDown: P((I) => {
        if (I.metaKey)
          return;
        let M = s == "vertical" || s == "either", O = s == "horizontal" || s == "either", j = t() - e(), $ = y() ?? j, B = f;
        B != null && B < 1 && (B = Math.round(B * Math.max(10, $ + 1)));
        let V = "passthrough", Y = !0;
        switch (I.key) {
          case "ArrowUp":
          case "ArrowDown":
            Y = M;
            break;
          case "ArrowLeft":
          case "ArrowRight":
            Y = O;
            break;
        }
        if (Y)
          switch (I.key) {
            case "ArrowUp":
            case "ArrowLeft":
              V = w(I, !0);
              break;
            case "ArrowDown":
            case "ArrowRight":
              V = L(I, !0);
              break;
            case "PageUp":
            case "PageDown":
              if (B == null)
                break;
              B > 0 && (V = T(I, B * (I.key.endsWith("n") ? 1 : -1), !0, "page"));
              break;
            case "Home":
            case "End":
              u || (I.key.endsWith("e") ? S(I, !0) : E(I, !0), V = "stop");
              break;
          }
        V && V != "passthrough" && (I.preventDefault(), I.stopPropagation());
      })
    }, "data-linear-navigation"));
    return {
      linearNavigationReturn: {},
      propsStable: D.current
    };
  }
  function qi({ isValid: e, highestChildIndex: t, lowestChildIndex: n, searchDirection: r, indexDemangler: o, indexMangler: a, targetDemangled: s }) {
    if (r === -1) {
      let u;
      return u = $i({ isValid: e, indexDemangler: o, indexMangler: a, targetDemangled: s, lowestChildIndex: n }), u ??= zi({ isValid: e, indexDemangler: o, indexMangler: a, targetDemangled: s, highestChildIndex: t }), u || { valueDemangled: s, status: "normal" };
    } else {
      let u;
      return u = zi({ isValid: e, indexDemangler: o, indexMangler: a, targetDemangled: s, highestChildIndex: t }), u ??= $i({ isValid: e, indexDemangler: o, indexMangler: a, targetDemangled: s, lowestChildIndex: n }), u || { valueDemangled: s, status: "normal" };
    }
  }
  function $i({ isValid: e, indexDemangler: t, indexMangler: n, lowestChildIndex: r, targetDemangled: o }) {
    for (; o >= r && !e(o); )
      o = t(n(o) - 1);
    if (e(o))
      return o < r ? { valueDemangled: t(r), status: "past-start" } : { valueDemangled: o, status: "normal" };
  }
  function zi({ isValid: e, indexDemangler: t, indexMangler: n, targetDemangled: r, highestChildIndex: o }) {
    for (; r <= o && !e(r); )
      r = t(n(r) + 1);
    if (e(r))
      return r > o ? { valueDemangled: t(o), status: "past-end" } : { valueDemangled: r, status: "normal" };
  }

  // ../dist/preact-extensions/use-managed-children.js
  function Ge(e) {
    R(Ge);
    let { managedChildrenParameters: { onAfterChildLayoutEffect: t, onChildrenMountChange: n, onChildrenCountChange: r }, ...o } = e;
    Z("useManagedChildren", t, n, r);
    let a = k(() => u.current.highestIndex, []), s = k(() => u.current.lowestIndex, []), u = A({ arr: [], rec: {}, highestIndex: 0, lowestIndex: 0 }), f = k((g) => {
      for (let v of u.current.arr)
        if (v && g(v) == "break")
          return;
      for (let v in u.current.rec) {
        let _ = u.current.rec[v];
        if (_ && g(_) == "break")
          return;
      }
    }, []), m = k((g) => typeof g == "number" ? u.current.arr[g] : u.current.rec[g], []), l = A(null), i = A(/* @__PURE__ */ new Set()), d = k((g) => (i.current.size == 0 && t != null && mt(() => {
      t?.(i.current), i.current.clear();
    }), i.current.add(g), () => {
    }), [
      /* Must remain stable */
    ]), h = k((g, v) => {
      if (l.current || (l.current = {
        mounts: /* @__PURE__ */ new Set(),
        unmounts: /* @__PURE__ */ new Set()
      }, mt(() => {
        (r || n) && (n?.(l.current.mounts, l.current.unmounts), r?.(b().getHighestIndex() + 1), l.current = null);
      })), v)
        typeof g == "number" && (u.current.highestIndex = Math.max(u.current.highestIndex, g), u.current.lowestIndex = Math.min(u.current.lowestIndex, g));
      else {
        if (typeof g == "number") {
          delete u.current.arr[g];
          let _ = 0;
          for (; _ <= u.current.arr.length && u.current.arr[u.current.arr.length - 1 - _] == null; )
            ++_;
          u.current.arr.splice(u.current.arr.length - _, _);
        } else
          delete u.current.rec[g];
        typeof g == "number" && (u.current.highestIndex = u.current.arr.length - 1);
      }
      l?.current?.[v ? "mounts" : "unmounts"]?.add?.(g);
    }, [
      /* Must remain stable */
    ]), p = K({
      _: u.current,
      forEach: f,
      getAt: m,
      getHighestIndex: a,
      getLowestIndex: s,
      _arraySlice: k(() => {
        let g = u.current.arr.slice(), v = a();
        for (let _ = 0; _ <= v; ++_)
          g[_] == null && (g[_] = { index: _ });
        return g;
      }, [])
    }), b = k(() => p, []);
    return {
      context: K({
        managedChildContext: K({
          managedChildrenArray: u.current,
          remoteULEChildMounted: h,
          remoteULEChildChanged: d,
          getChildren: b
        })
      }),
      managedChildrenReturn: { getChildren: b }
    };
  }
  function Be({ context: e, info: t }) {
    R(Be);
    let { managedChildContext: { getChildren: n, managedChildrenArray: r, remoteULEChildMounted: o, remoteULEChildChanged: a } } = e ?? { managedChildContext: {} }, s = t.index;
    return oe(() => {
      if (!(r == null || a == null))
        return typeof s == "number" ? r.arr[s] = { ...t } : r.rec[s] = { ...t }, a(s);
    }, [...Object.entries(t).flat(9)]), oe(() => (o?.(s, !0), () => o?.(s, !1)), [s]), {
      managedChildReturn: { getChildren: n }
    };
  }
  function qt({ getChildren: e, initialIndex: t, closestFit: n, onClosestFit: r, onIndexChange: o, getAt: a, setAt: s, isValid: u }) {
    Z("useChildrenFlag", o, a, s, u);
    let [f, m] = q(o), [l, i] = q(null), d = k((g) => {
      let v = e(), _ = 1 / 0, C = null;
      return v.forEach((y) => {
        if (y != null && u(y)) {
          console.assert(typeof y.index == "number", "closestFit can only be used when each child has a numeric index, and cannot be used when children use string indices instead.");
          let x = Math.abs(y.index - g);
          (x < _ || x == _ && y.index < g) && (_ = x, C = y.index);
        }
      }), C;
    }, [
      /* Must remain stable! */
    ]);
    n && console.assert(r != null, "When closestFit is used, onClosestFit must be provided");
    let h = P((g) => {
      let v = e(), _ = l(), C = f(), y = C == null ? null : v.getAt(C);
      if (_ != null && n && (_ != C || y == null || !u(y))) {
        console.assert(typeof _ == "number", "closestFit can only be used when each child has a numeric index, and cannot be used when children use string indices instead.");
        let x = d(_);
        if (m(x, g), y && s(y, !1, x, C), x != null) {
          let S = v.getAt(x);
          console.assert(S != null, "Internal logic???"), s(S, !0, x, C), r(x);
        } else
          r(null);
      }
    }), p = A(void 0), b = k((g, v) => {
      let _ = e(), C = g instanceof Function ? g(l()) : g;
      p.current = v, i(C, v);
      let y = f();
      if (y == C)
        return C;
      let x = C == null ? null : _.getAt(C), S = y == null ? null : _.getAt(y);
      if (C == null)
        return m(null, v), S && s(S, !1, C, y), null;
      if (x && u(x) || !n)
        return m(C, v), S && s(S, !1, C, y), x && s(x, !0, C, y), C;
      {
        console.assert(n), console.assert(typeof C == "number", "closestFit can only be used when each child has a numeric index, and cannot be used when children use string indices instead.");
        let T = d(C);
        return m(T, v), T != null ? (x = _.getAt(T), console.assert(x != null, "Internal logic???"), S && s(S, !1, T, y), s(x, !0, T, y), T) : (S && s(S, !1, T, y), null);
      }
    }, []);
    return oe(() => {
      b(t ?? null, p.current);
    }, []), { changeIndex: b, reevaluateClosestFit: h, getCurrentIndex: f };
  }

  // ../dist/preact-extensions/use-state.js
  function N(e) {
    let t = zt();
    R(N);
    let [n, r] = Ue(e), o = A(n), a = k((u) => {
      if (Ee === "development" && (window._setState_stack = t()), typeof u == "function") {
        let f = u;
        r((m) => {
          let l = f(m);
          return o.current !== l && (o.current = l), o.current = l, l;
        });
      } else
        o.current !== u && (o.current = u), o.current = u, r(u);
    }, []), s = k(() => o.current, []);
    return [n, a, s];
  }

  // ../dist/component-detail/keyboard-navigation/use-roving-tabindex.js
  function On({ managedChildrenReturn: { getChildren: e }, rovingTabIndexParameters: { focusSelfParent: t, untabbable: n, untabbableBehavior: r, initiallyTabbedIndex: o, onTabbableIndexChange: a }, refElementReturn: { getElement: s }, ...u }) {
    R(On);
    let f = P(t);
    r ||= "focus-parent";
    let m = A(null);
    let l = Q(o), i = Q(n), d = P((E, T, L) => {
      let w = e();
      return _(function(I) {
        let M = typeof E == "function" ? E(I ?? null) : E, O = i(), j = s();
        if (console.assert(!!j), M != null && p(M, T), O || M == null)
          return !j.contains(document.activeElement) && r != "leave-child-focused" && f(j), null;
        if (I != M) {
          let $ = w.getAt(M);
          if ($ != null && L) {
            let B = $.getElement();
            B && (document.activeElement == document.body || document.activeElement == null || !B.contains(document.activeElement)) && $.focusSelf(B);
          }
        }
        return M != null && p(M, T), M ?? 0;
      }, T);
    }), [h, p] = q(null, k(() => o ?? 0, []));
    G(() => {
      let E = s()?.contains(document.activeElement);
      _(n ? null : h(), void 0), E && x(!0);
    }, [n]);
    let b = k((E) => E.getLocallyTabbable(), []), g = k((E, T) => {
      E.setLocallyTabbable(T);
    }, []), v = P((E) => !E.untabbable), { changeIndex: _, getCurrentIndex: C, reevaluateClosestFit: y } = qt({
      initialIndex: o ?? (n ? null : 0),
      onIndexChange: P((E, T, L) => {
        !(E == null && n) && E != h() && a?.(E, T, L);
      }),
      getChildren: e,
      closestFit: !0,
      getAt: b,
      isValid: v,
      setAt: g,
      onClosestFit: (E) => {
        if (document.activeElement == null || document.activeElement == document.body) {
          let T = E == null ? null : e().getAt(E)?.getElement();
          E == null || T == null ? Yr(s()).focus() : e().getAt(E)?.focusSelf(T);
        }
      }
    }), x = k((E, T) => {
      let L = e(), w = C(), D = i();
      if (D || (w ??= l() ?? L.getLowestIndex()), D)
        document.activeElement != s() && (E || r != "leave-child-focused") && f(s());
      else if (!D && w != null) {
        let I = L.getAt(w)?.getElement();
        L.getAt(w)?.focusSelf?.(I);
      } else
        d(null, T, !0);
    }, []), S = K({
      setTabbableIndex: d,
      parentFocusSelf: x,
      getInitiallyTabbedIndex: k(() => o ?? (n ? null : 0), []),
      reevaluateClosestFit: y,
      getUntabbable: Q(n),
      getUntabbableBehavior: Q(r),
      giveParentFocusedElement: k((E) => {
        m.current = E;
      }, [])
    });
    return {
      managedChildrenParameters: { onChildrenMountChange: k(() => {
        y(void 0);
      }, [y]) },
      rovingTabIndexReturn: { setTabbableIndex: d, getTabbableIndex: C, focusSelf: x },
      context: K({ rovingTabIndexContext: S }),
      props: he({
        // Note: Making this -1 instead of null is partially intentional --
        // it gives us time during useEffect to move focus back to the last focused element
        // (otherwise focus gets lost to the body, and useEffect thinks that it shouldn't
        // focus the child because focus wasn't within the list). 
        // It's also just consistent. 
        tabIndex: n ? 0 : -1,
        // When a hidden child is clicked, some browsers focus the parent, just because it's got a role and a tabindex.
        onFocus: P((E) => {
          let T = s();
          console.assert(!!T), E.target == s() && (n || x(!1, E));
        })
      }, "data-roving-tab-index")
    };
  }
  function Hn({ info: { index: e, untabbable: t, ...n }, context: { rovingTabIndexContext: { giveParentFocusedElement: r, getUntabbable: o, getUntabbableBehavior: a, reevaluateClosestFit: s, setTabbableIndex: u, getInitiallyTabbedIndex: f, parentFocusSelf: m } }, refElementReturn: { getElement: l }, ...i }) {
    R(Hn);
    let [d, h, p] = N(f() === e);
    return G(() => {
      s(void 0);
    }, [!!t]), G(() => {
      d && r(l());
    }, [d]), {
      hasCurrentFocusParameters: {
        onCurrentFocusedInnerChanged: P((b, g, v) => {
          if (b) {
            let _ = o(), C = a();
            !_ && !t || C != "focus-parent" ? u(e, v, !1) : m(!1);
          }
        })
      },
      rovingTabIndexChildReturn: {
        tabbable: d,
        getTabbable: p
      },
      info: { setLocallyTabbable: h, getLocallyTabbable: p },
      props: he({
        tabIndex: d ? 0 : -1,
        inert: t
        // This inert is to prevent the edge case of clicking a hidden item and it focusing itself
      }, "data-roving-tab-index-child")
    };
  }

  // ../dist/dom-helpers/use-text-content.js
  function Un({ refElementReturn: { getElement: e }, textContentParameters: { getText: t, onTextContentChange: n } }) {
    R(Un);
    let [r, o] = q(n, Ce, me);
    return G(() => {
      let a = e();
      if (a) {
        let s = t(a);
        s && o(s);
      }
    }), { textContentReturn: { getTextContent: r } };
  }

  // ../dist/component-detail/keyboard-navigation/use-typeahead-navigation.js
  function Gn({ typeaheadNavigationParameters: { collator: e, typeaheadTimeout: t, noTypeahead: n, isValidForTypeaheadNavigation: r, onNavigateTypeahead: o, ...a }, rovingTabIndexReturn: { getTabbableIndex: s, setTabbableIndex: u, ...f }, ...m }) {
    R(Gn);
    let [l, i] = q(P((w, D, I) => {
      let M = setTimeout(() => {
        i(null, void 0), p("none");
      }, t ?? 1e3);
      return L(w, I), () => clearTimeout(M);
    })), d = A([]), [h, p] = N("none"), [, b, g] = N(!1), [v, _] = N(null);
    oe(() => {
      v !== null && (i((w) => (w ?? "") + v, void 0), _(null));
    }, [v]);
    let C = P((w, D) => {
      let I;
      return w = w.normalize("NFD"), D = D.normalize("NFD"), e ? I = e.compare(w, D) : I = w.toLowerCase().localeCompare(D.toLowerCase() ?? ""), I;
    }), y = P((w, D) => typeof w == "string" && typeof D.text == "string" ? C(w, D.text) : w - D), x = P((w, D) => typeof w == "string" && typeof D.text == "string" ? C(w, D.text.substring(0, w.length)) : w - D), S = Q(n), E = A(he({
      onKeyDown: P((w) => {
        if (S())
          return;
        let D = g(), I = w.key;
        if (w.ctrlKey || w.metaKey)
          return;
        if (!D && w.key === "Backspace") {
          i((O) => O == null ? null : [...O].reverse().slice(1).reverse().join(""), w), w.preventDefault(), w.stopPropagation();
          return;
        }
        (I.length === 1 || !/^[A-Za-z]/.test(I)) && (I == " " && (l() ?? "").trim().length == 0 || (w.preventDefault(), w.stopPropagation(), D || _(I)));
      }),
      onCompositionStart: P((w) => {
        _(w.data), b(!1);
      }),
      onCompositionEnd: P((w) => {
        b(!0);
      })
    }, "data-typeahead-navigation")), T = P(() => h != "none");
    return {
      context: K({
        typeaheadNavigationContext: K({
          insertingComparator: y,
          sortedTypeaheadInfo: d.current,
          excludeSpace: T
        })
      }),
      typeaheadNavigationReturn: {
        getCurrentTypeahead: l,
        typeaheadStatus: h
      },
      propsStable: E.current
    };
    function L(w, D) {
      if (w && d.current.length) {
        let I = jn(d.current, w, x);
        if (I < 0)
          p("invalid");
        else {
          p("valid");
          let M = null, O = I, j = null, $ = I, B = (ee) => {
            r(ee) && ((M == null || ee < M) && (M = ee, O = V), (j == null || ee < j) && ee > (s() ?? -1 / 0) && (j = ee, $ = V));
          }, V = I;
          for (; V >= 0 && x(w, d.current[V]) == 0; )
            B(d.current[V].unsortedIndex), --V;
          for (V = I; V < d.current.length && x(w, d.current[V]) == 0; )
            B(d.current[V].unsortedIndex), ++V;
          let Y = null;
          j !== null ? Y = d.current[$].unsortedIndex : M !== null && (Y = d.current[O].unsortedIndex), Y != null && (u(Y, D, !0), o?.(Y, D));
        }
      }
    }
  }
  function Bn({ info: { index: e, ...t }, textContentParameters: { getText: n, ...r }, context: { typeaheadNavigationContext: { sortedTypeaheadInfo: o, insertingComparator: a, excludeSpace: s, ...u } }, refElementReturn: { getElement: f, ...m }, ...l }) {
    R(Bn);
    let { textContentReturn: i } = Un({
      refElementReturn: { getElement: f },
      textContentParameters: {
        getText: n,
        onTextContentChange: k((d) => {
          if (d) {
            let h = jn(o, d, a);
            return console.assert(h < 0 || a(o[h].text, { unsortedIndex: e, text: d }) == 0), h < 0 ? o.splice(-h - 1, 0, { text: d, unsortedIndex: e }) : o.splice(h, 0, { text: d, unsortedIndex: e }), () => {
              let p = jn(o, d, a);
              console.assert(p < 0 || a(o[p].text, { unsortedIndex: e, text: d }) == 0), p >= 0 && o.splice(p, 1);
            };
          }
        }, [])
      }
    });
    return {
      textContentReturn: i,
      pressParameters: { excludeSpace: s }
    };
  }
  function jn(e, t, n) {
    let r = 0, o = e.length - 1;
    for (; r <= o; ) {
      let a = o + r >> 1, s = n(t, e[a]);
      if (s > 0)
        r = a + 1;
      else if (s < 0)
        o = a - 1;
      else
        return a;
    }
    return -r - 1;
  }

  // ../dist/component-detail/keyboard-navigation/use-list-navigation-partial.js
  function rt({ linearNavigationParameters: e, typeaheadNavigationParameters: t, rovingTabIndexParameters: n, managedChildrenReturn: r, refElementReturn: o, paginatedChildrenParameters: a, rearrangeableChildrenReturn: s, ...u }) {
    R(rt);
    let { props: f, rovingTabIndexReturn: m, managedChildrenParameters: l, context: i, ...d } = On({ managedChildrenReturn: r, rovingTabIndexParameters: n, refElementReturn: o }), { propsStable: h, typeaheadNavigationReturn: p, context: b, ...g } = Gn({ rovingTabIndexReturn: m, typeaheadNavigationParameters: t }), { propsStable: v, linearNavigationReturn: _, ...C } = An({ rovingTabIndexReturn: m, linearNavigationParameters: e, paginatedChildrenParameters: a, rearrangeableChildrenReturn: s });
    let y = W(h, v), x = A(y);
    return {
      managedChildrenParameters: l,
      rovingTabIndexReturn: m,
      typeaheadNavigationReturn: p,
      context: K({
        ...i,
        ...b
      }),
      linearNavigationReturn: _,
      props: W(v, h, f)
    };
  }
  function ot({ info: { index: e, untabbable: t, ...n }, context: r, refElementReturn: o, textContentParameters: a, ...s }) {
    R(ot);
    let { props: u, ...f } = Hn({ context: r, info: { index: e, untabbable: t }, refElementReturn: o }), { ...m } = Bn({ refElementReturn: o, textContentParameters: a, context: r, info: { index: e } });
    return {
      props: u,
      ...m,
      ...f
    };
  }

  // ../dist/component-detail/keyboard-navigation/use-grid-navigation-partial.js
  function Wn({ gridNavigationParameters: { onTabbableColumnChange: e, ...t }, linearNavigationParameters: n, ...r }) {
    R(Wn);
    let [o, a] = q(e, P(() => {
      let b = r.rovingTabIndexParameters.initiallyTabbedIndex ?? 0;
      return { actual: b, ideal: b };
    })), { linearNavigationReturn: s, rovingTabIndexReturn: u, typeaheadNavigationReturn: f, managedChildrenParameters: m, context: { rovingTabIndexContext: l, typeaheadNavigationContext: i }, props: d, ...h } = rt({
      linearNavigationParameters: { arrowKeyDirection: "vertical", ...n },
      ...r
    });
    let p = K({
      //rowIsUntabbableBecauseOfGrid: !!untabbable,
      setTabbableRow: u.setTabbableIndex,
      getTabbableColumn: o,
      setTabbableColumn: a
    });
    return {
      props: d,
      managedChildrenParameters: m,
      context: K({
        gridNavigationRowContext: p,
        rovingTabIndexContext: l,
        typeaheadNavigationContext: i
      }),
      linearNavigationReturn: s,
      rovingTabIndexReturn: u,
      typeaheadNavigationReturn: f
    };
  }
  function Vn({
    // Stuff for the row as a child of the parent grid
    info: { index: e, untabbable: t, ...n },
    textContentParameters: r,
    context: o,
    // Stuff for the row as a parent of child cells
    linearNavigationParameters: a,
    rovingTabIndexParameters: { untabbable: s, initiallyTabbedIndex: u, onTabbableIndexChange: f, ...m },
    managedChildrenReturn: l,
    typeaheadNavigationParameters: i,
    // Both/neither
    refElementReturn: d,
    ...h
  }) {
    R(Vn);
    let { getTabbableColumn: p, setTabbableColumn: b, setTabbableRow: g } = o.gridNavigationRowContext, v = P(() => e), _ = P((te) => {
      let { getChildren: re } = l;
      if (o.rovingTabIndexContext.getUntabbable())
        o.rovingTabIndexContext.parentFocusSelf(!0);
      else {
        let { ideal: X, actual: F } = p(), z = X ?? 0, J = re().getAt(z), _e = re().getLowestIndex(), ye = re().getHighestIndex();
        for (; (!J || J.untabbable) && z > _e; )
          --z, J = re().getAt(z);
        for (; (!J || J.untabbable) && z <= ye; )
          ++z, J = re().getAt(z);
        if (J) {
          let Fe = J.getElement();
          J.focusSelf(Fe);
        } else
          De(te);
      }
    }, []), C = _, { props: y, info: { getLocallyTabbable: x, setLocallyTabbable: S, ...E }, hasCurrentFocusParameters: T, pressParameters: L, rovingTabIndexChildReturn: w, textContentReturn: D, ...I } = ot({ info: { index: e, untabbable: t }, refElementReturn: d, textContentParameters: r, context: o }), M = !w.tabbable, { props: O, context: j, linearNavigationReturn: $, managedChildrenParameters: B, rovingTabIndexReturn: V, typeaheadNavigationReturn: Y, ...ee } = rt({
      managedChildrenReturn: l,
      refElementReturn: d,
      typeaheadNavigationParameters: i,
      rearrangeableChildrenReturn: { indexDemangler: nt, indexMangler: nt },
      rovingTabIndexParameters: {
        untabbableBehavior: "leave-child-focused",
        focusSelfParent: _,
        untabbable: M || s,
        initiallyTabbedIndex: u,
        onTabbableIndexChange: P((te, re, X) => {
          b({ ideal: te, actual: te }, X), f?.(te, re, X);
        })
      },
      linearNavigationParameters: {
        onNavigateLinear: P((te, re) => {
          b((X) => ({ ideal: te, actual: X?.actual ?? te }), re);
        }),
        disableHomeEndKeys: !0,
        pageNavigationSize: 0,
        arrowKeyDirection: "horizontal",
        ...a
      },
      paginatedChildrenParameters: { paginationMin: null, paginationMax: null }
    });
    let { setTabbableIndex: ue } = V, ne = K({
      //allChildCellsAreUntabbable,
      setTabbableRow: g,
      getRowIndex: v,
      getTabbableColumn: p,
      setTabbableColumn: b,
      setTabbableCell: ue
    });
    O.tabIndex = O.tabIndex ?? y.tabIndex;
    let ge = W(O, y, {
      // Ensure that if the browser focuses the row for whatever reason, we transfer the focus to a child cell.
      onFocus: P((te) => _(te.currentTarget))
    });
    return ge.tabIndex = -1, {
      context: K({
        gridNavigationCellContext: ne,
        ...j
      }),
      props: he(ge, "data-use-grid-navigation-partial-row"),
      info: { focusSelf: C, getLocallyTabbable: x, setLocallyTabbable: S },
      hasCurrentFocusParameters: T,
      pressParameters: L,
      rovingTabIndexChildReturn: w,
      textContentReturn: D,
      linearNavigationReturn: $,
      managedChildrenParameters: B,
      rovingTabIndexReturn: V,
      typeaheadNavigationReturn: Y
    };
  }
  function $n({ context: { gridNavigationCellContext: { getRowIndex: e, setTabbableRow: t, getTabbableColumn: n, setTabbableColumn: r, setTabbableCell: o, ...a }, rovingTabIndexContext: s, typeaheadNavigationContext: u, ...f }, info: { index: m, untabbable: l, ...i }, refElementReturn: d, textContentParameters: h, gridNavigationCellParameters: { colSpan: p, ...b }, ...g }) {
    R($n), p ??= 1;
    let { hasCurrentFocusParameters: { onCurrentFocusedInnerChanged: v, ..._ }, rovingTabIndexChildReturn: C, textContentReturn: y, pressParameters: x, props: S, info: E, ...T } = ot({
      info: { index: m, untabbable: l },
      context: { rovingTabIndexContext: s, typeaheadNavigationContext: u },
      textContentParameters: h,
      refElementReturn: d
    });
    return {
      info: E,
      props: W(S, { onClick: (L) => r((w) => ({ ideal: m, actual: w?.actual ?? m }), L) }),
      rovingTabIndexChildReturn: C,
      textContentReturn: y,
      pressParameters: x,
      hasCurrentFocusParameters: {
        onCurrentFocusedInnerChanged: P((L, w, D) => {
          v?.(L, w, D), L && (t(e(), D, !1), r((I) => ({ actual: m, ideal: I?.ideal ?? m }), D), o((I) => I != null && (I < m || I > m + p) ? I : m, D, !1));
        })
      }
    };
  }

  // ../dist/preact-extensions/use-force-update.js
  function zn() {
    R(zn);
    let [, e] = Ue(0);
    return A(() => e((t) => ++t)).current;
  }

  // ../dist/component-detail/use-sortable-children.js
  function Zr({ rearrangeableChildrenParameters: { getIndex: e, onRearranged: t }, managedChildrenReturn: { getChildren: n } }) {
    R(Zr), Z("useRearrangeableChildren", e);
    let r = A(/* @__PURE__ */ new Map()), o = A(/* @__PURE__ */ new Map()), a = k((p) => r.current.get(p) ?? p, []), s = k((p) => o.current.get(p) ?? p, []), u = Q(t), f = k(() => {
      let b = n()._arraySlice(), g = Qr(b);
      return i(b, g);
    }, [
      /* Must remain stable */
    ]), m = k(() => {
      let p = n(), b = p._arraySlice(), g = p._arraySlice().reverse();
      return i(b, g);
    }, [
      /* Must remain stable */
    ]), l = A(null), i = k((p, b) => {
      r.current.clear(), o.current.clear();
      for (let g = 0; g < b.length; ++g)
        if (b[g]) {
          let v = b[g].index;
          r.current.set(v, g), o.current.set(g, v);
        }
      u()?.(), l.current?.();
    }, []), d = k(function p(b) {
      R(p), console.assert(Array.isArray(b));
      let g = zn();
      return console.assert(l.current == null || l.current == g), l.current = g, b.slice().map((v) => ({ child: v, mangledIndex: a(e(v)), demangledIndex: e(v) })).sort((v, _) => v.mangledIndex - _.mangledIndex).map(({ child: v, mangledIndex: _, demangledIndex: C }) => fe(v.type, { ...v.props, key: C, "data-mangled-index": _, "data-demangled-index": C }));
    }, []), h = k((p) => n()._arraySlice().map((g) => p ? p(g) : g.getSortValue()), []);
    return {
      rearrangeableChildrenReturn: {
        indexMangler: a,
        indexDemangler: s,
        //mangleMap,
        //demangleMap,
        rearrange: i,
        shuffle: f,
        reverse: m,
        useRearrangedChildren: d,
        toJsonArray: h
      }
    };
  }
  function _t({ rearrangeableChildrenParameters: e, sortableChildrenParameters: { compare: t }, managedChildrenReturn: { getChildren: n } }) {
    R(_t);
    let r = Q(t ?? Ki), { rearrangeableChildrenReturn: o } = Zr({ rearrangeableChildrenParameters: e, managedChildrenReturn: { getChildren: n } }), { rearrange: a } = o;
    return {
      sortableChildrenReturn: { sort: k((u) => {
        let f = n(), m = r(), l = f._arraySlice(), i = m ? l.sort((d, h) => {
          let g = m(d, h);
          return u[0] == "d" ? -g : g;
        }) : f._arraySlice();
        return a(l, i);
      }, [
        /* Must remain stable */
      ]) },
      rearrangeableChildrenReturn: o
    };
  }
  function Ki(e, t) {
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
  function eo({ multiSelectionParameters: { onSelectionChange: e, multiSelectionAriaPropName: t, multiSelectionMode: n, ...r }, managedChildrenReturn: { getChildren: o, ...a }, childrenHaveFocusReturn: { getAnyFocused: s, ...u }, ...f }) {
    let m = A(/* @__PURE__ */ new Set()), l = A(/* @__PURE__ */ new Set());
    let i = A(null), d = A(!1), h = A(!1), p = P((C, y, x, S) => {
      console.assert(x != S), x == null ? S === !0 ? (console.assert(m.current.has(y), `The selected child at index ${y} is unmounting itself, but the parent was unaware of it being selected.`), m.current.delete(y)) : S === !1 ? (console.assert(l.current.has(y), `The selected child at index ${y} is unmounting itself, but the parent was unaware of it being selected.`), l.current.delete(y)) : console.assert(!1, `The child at index ${y} was not selected or unselected but a secret third thing: ${x}`) : x ? (S != null && (console.assert(l.current.has(y), `The multi-select child at index ${y} changed to selected even though it was not unselected before, somehow.`), l.current.delete(y)), console.assert(!m.current.has(y), `The multi-select child at index ${y} changed to selected even though there is already a selected child with that index.`), m.current.add(y), i.current = y) : (S != null && (console.assert(m.current.has(y), `The multi-select child at index ${y} changed to unselected even though it was not selected before, somehow.`), m.current.delete(y)), console.assert(!l.current.has(y), `The multi-select child at index ${y} was marked as unselected even though there is already an unselected child with that index.`), l.current.add(y));
      let E = m.current.size + l.current.size, T = m.current.size / E;
      console.assert(T >= 0 && T <= 1), e?.(we(C, { selectedPercent: T, selectedIndices: m.current }));
    }), b = P((C, y) => {
      o().forEach((x) => {
        x.getMultiSelectionDisabled() || x.setSelectedFromParent(C, y(x.index));
      });
    }), g = P((C, y) => {
      let x = y, S = 0, E = i.current || 0;
      E <= y ? ++E : (--E, S = y, y = E, E = S), console.assert(E <= y), E <= y && b(C, (T) => T >= E && T <= y ? !o().getAt(T)?.getMultiSelected() : !!o().getAt(T)?.getMultiSelected()), i.current = x;
    }), v = P((C, y, x) => {
      C || (h.current = d.current = !1);
    }), _ = A(!1);
    return Pe(document, "keydown", P((C) => {
      d.current = C.shiftKey || C.key == "Shift", h.current = C.ctrlKey || C.key == "Control", s() && C.code == "KeyA" && C.ctrlKey && !C.repeat && n != "disabled" && (b(C, _.current ? ve : Gt), C.preventDefault(), C.stopPropagation(), _.current = !_.current);
    }), { capture: !0 }), Pe(document, "keyup", (C) => {
      C.key == "Shift" && (d.current = !1), C.key == "Control" && (h.current = !1);
    }, { passive: !0, capture: !0 }), {
      context: K({
        multiSelectionContext: K({
          doContiguousSelection: g,
          notifyParentOfChildSelectChange: p,
          multiSelectionAriaPropName: t,
          multiSelectionMode: n,
          changeAllChildren: b,
          getCtrlKeyDown: k(() => h.current, []),
          getShiftKeyDown: k(() => d.current, []),
          getAnyFocused: s
        })
      }),
      childrenHaveFocusParameters: { onCompositeFocusChange: v },
      multiSelectionReturn: {},
      propsStable: K({})
    };
  }
  function to({ info: { index: e, ...t }, multiSelectionChildParameters: { initiallyMultiSelected: n, onMultiSelectChange: r, multiSelectionDisabled: o, ...a }, context: { multiSelectionContext: { notifyParentOfChildSelectChange: s, multiSelectionAriaPropName: u, multiSelectionMode: f, doContiguousSelection: m, changeAllChildren: l, getCtrlKeyDown: i, getShiftKeyDown: d, getAnyFocused: h, ...p }, ...b }, ...g }) {
    let v = Q(e), _ = A(!1), C = (w) => {
      o || (f == "activation" ? w.shiftKey ? m(w, e) : r?.(we(w, { multiSelected: !S() })) : w.ctrlKey ? r?.(we(w, { multiSelected: !S() })) : (_.current = !0, De(w.currentTarget), T(!0, !1, w)));
    }, [y, x, S] = N(n ?? !1), E = P((w, D) => {
      console.assert(D != null), console.assert(!o);
      let I = S();
      I != D && (x(D), s(w, e, D, I));
    });
    oe(() => (s(null, v(), S(), void 0), () => s(null, v(), void 0, S())), []);
    let T = P((w, D, I) => {
      if (w && f == "focus") {
        let M = h();
        console.log("any focused: ", M);
        let O = d() ? "toggle" : i() ? "skip" : "set", j = e;
        switch (O) {
          case "set":
            (M || _.current) && l(I, ($) => $ == j);
            break;
          case "toggle":
            m(I, e);
            break;
          case "skip":
            debugger;
            break;
        }
      }
      _.current = !1;
    }), L = P((w, D) => {
      console.assert(r != null), r?.(we(w, { multiSelected: D }));
    });
    return {
      multiSelectionChildReturn: {
        changeMultiSelected: E,
        multiSelected: y,
        getMultiSelected: S,
        multiSelectionMode: f
      },
      pressParameters: {
        onPressSync: C
      },
      hasCurrentFocusParameters: {
        onCurrentFocusedInnerChanged: T
      },
      props: { [u || "aria-selected"]: y ? "true" : "false" },
      info: {
        getMultiSelected: S,
        setSelectedFromParent: L,
        getMultiSelectionDisabled: Q(o)
      }
    };
  }
  function no({ multiSelectionChildDeclarativeParameters: { onMultiSelectedChange: e, multiSelected: t, ...n }, multiSelectionChildReturn: { changeMultiSelected: r, ...o }, ...a }) {
    let s = t || !1, u = A(void 0);
    G(() => {
      r(u.current, s);
    }, [s]);
    let f = P((l) => (u.current = l, e?.(l))), m = P((l, i) => {
      e?.(we(l, { multiSelected: i }));
    });
    return {
      multiSelectionChildParameters: {
        onMultiSelectChange: f
      },
      info: { setSelectedFromParent: m }
    };
  }

  // ../dist/component-detail/use-single-selection.js
  function qn({ managedChildrenReturn: { getChildren: e, ...t }, rovingTabIndexReturn: { setTabbableIndex: n, ...r }, singleSelectionParameters: { onSingleSelectedIndexChange: o, initiallySingleSelectedIndex: a, singleSelectionAriaPropName: s, singleSelectionMode: u, ...f }, ...m }) {
    R(qn);
    let l = P(o ?? Wt), i = k((g) => g.getSingleSelected(), []), d = k((g, v, _, C) => {
      g.untabbable && console.assert(!1);
      let y = _ == g.index ? C : _, x = y == null ? null : g.index - y;
      _ == null && console.assert(v == !1), v && console.assert(_ === g.index), g.setLocalSingleSelected(v, x);
    }, []), h = k((g) => !g.untabbable, []), { changeIndex: p, getCurrentIndex: b } = qt({
      getChildren: e,
      onIndexChange: null,
      initialIndex: a,
      getAt: i,
      setAt: d,
      isValid: h,
      closestFit: !1,
      onClosestFit: null
    });
    return {
      singleSelectionReturn: K({
        getSingleSelectedIndex: b,
        changeSingleSelectedIndex: p
      }),
      context: K({
        singleSelectionContext: K({
          getSingleSelectedIndex: b,
          onSingleSelectedIndexChange: l,
          singleSelectionAriaPropName: s,
          singleSelectionMode: u
        })
      }),
      childrenHaveFocusParameters: {
        onCompositeFocusChange: P((g, v, _) => {
          if (!g) {
            let C = b();
            C != null && n(C, _, !1);
          }
        })
      }
    };
  }
  function Kn({ singleSelectionChildParameters: { singleSelectionDisabled: e, ...t }, context: { singleSelectionContext: { getSingleSelectedIndex: n, onSingleSelectedIndexChange: r, singleSelectionAriaPropName: o, singleSelectionMode: a, ...s }, ...u }, info: { index: f, untabbable: m, ...l }, ...i }) {
    R(Kn), Z("useSingleSelectionChild", n, r);
    let [d, h, p] = N(n() == f), [b, g, v] = N(n() == null ? null : n() - f), _ = P((x, S, E) => {
      !e && a == "focus" && x && !m && r(we(E, { selectedIndex: f }));
    }), C = P((x) => {
      !e && !m ? a == "activation" && r(we(x, { selectedIndex: f })) : De(x.currentTarget);
    }), y = o?.split("-") ?? [];
    return {
      info: {
        setLocalSingleSelected: P((x, S) => {
          h(x), g(S);
        }),
        getSingleSelected: p,
        singleSelected: d
      },
      singleSelectionChildReturn: {
        singleSelected: d,
        getSingleSelected: p,
        singleSelectedOffset: b,
        singleSelectionMode: a,
        getSingleSelectedOffset: v
      },
      props: he(o == null || a == "disabled" ? {} : {
        [`${y[0]}-${y[1]}`]: d ? y[1] == "current" ? `${y[2]}` : "true" : "false"
      }, "data-single-selection-child"),
      hasCurrentFocusParameters: { onCurrentFocusedInnerChanged: _ },
      pressParameters: { onPressSync: C }
    };
  }
  function ro({ singleSelectionReturn: { changeSingleSelectedIndex: e }, singleSelectionDeclarativeParameters: { singleSelectedIndex: t, onSingleSelectedIndexChange: n } }) {
    let r = t ?? null, o = A(void 0);
    return G(() => {
      e(r, o.current);
    }, [r]), { singleSelectionParameters: { onSingleSelectedIndexChange: k((s) => (o.current = s, n?.(s)), [n]) } };
  }

  // ../dist/component-detail/use-selection.js
  function Kt({ managedChildrenReturn: e, multiSelectionParameters: t, childrenHaveFocusReturn: n, rovingTabIndexReturn: r, singleSelectionParameters: o }) {
    let { childrenHaveFocusParameters: { onCompositeFocusChange: a, ...s }, context: u, singleSelectionReturn: f, ...m } = qn({ managedChildrenReturn: e, rovingTabIndexReturn: r, singleSelectionParameters: o }), { childrenHaveFocusParameters: { onCompositeFocusChange: l, ...i }, context: d, multiSelectionReturn: h, propsStable: p, ...b } = eo({ managedChildrenReturn: e, multiSelectionParameters: t, childrenHaveFocusReturn: n });
    return {
      propsStable: p,
      childrenHaveFocusParameters: { onCompositeFocusChange: P((...g) => {
        a(...g), l(...g);
      }) },
      context: K({ ...u, ...d }),
      multiSelectionReturn: h,
      singleSelectionReturn: f
    };
  }
  function Jt({ context: e, info: { index: t, untabbable: n, ...r }, singleSelectionChildParameters: o, multiSelectionChildParameters: a, ...s }) {
    let { props: u, hasCurrentFocusParameters: { onCurrentFocusedInnerChanged: f }, pressParameters: { onPressSync: m }, info: { getSingleSelected: l, setLocalSingleSelected: i, singleSelected: d, ...h }, singleSelectionChildReturn: p } = Kn({ context: e, info: { index: t, untabbable: n }, singleSelectionChildParameters: o }), { props: b, hasCurrentFocusParameters: { onCurrentFocusedInnerChanged: g }, pressParameters: { onPressSync: v }, multiSelectionChildReturn: _, info: { getMultiSelected: C, setSelectedFromParent: y, getMultiSelectionDisabled: x, ...S }, ...E } = to({ context: e, info: { index: t }, multiSelectionChildParameters: a });
    return {
      hasCurrentFocusParameters: { onCurrentFocusedInnerChanged: P((...T) => {
        f(...T), g(...T);
      }) },
      info: {
        getMultiSelected: C,
        setSelectedFromParent: y,
        getSingleSelected: l,
        setLocalSingleSelected: i,
        singleSelected: d,
        getMultiSelectionDisabled: x
      },
      multiSelectionChildReturn: _,
      pressParameters: { onPressSync: P((...T) => {
        m(...T), v(...T);
      }) },
      props: W(u, b),
      singleSelectionChildReturn: p
    };
  }
  function Xt(e) {
    return ro(e);
  }
  function oo(e) {
    return no(e);
  }

  // ../dist/component-detail/keyboard-navigation/use-grid-navigation-selection.js
  function Jn({ gridNavigationParameters: e, linearNavigationParameters: t, rovingTabIndexParameters: n, managedChildrenReturn: r, typeaheadNavigationParameters: o, singleSelectionParameters: a, multiSelectionParameters: s, refElementReturn: u, paginatedChildrenParameters: f, rearrangeableChildrenReturn: m, childrenHaveFocusReturn: l, ...i }) {
    R(Jn);
    let { context: { gridNavigationRowContext: d, rovingTabIndexContext: h, typeaheadNavigationContext: p }, linearNavigationReturn: b, managedChildrenParameters: g, props: v, rovingTabIndexReturn: _, typeaheadNavigationReturn: C } = Wn({
      gridNavigationParameters: e,
      linearNavigationParameters: t,
      managedChildrenReturn: r,
      rovingTabIndexParameters: { ...n, initiallyTabbedIndex: a.initiallySingleSelectedIndex || 0 },
      typeaheadNavigationParameters: o,
      paginatedChildrenParameters: f,
      rearrangeableChildrenReturn: m,
      refElementReturn: u
    }), { childrenHaveFocusParameters: y, context: { singleSelectionContext: x, multiSelectionContext: S }, multiSelectionReturn: E, propsStable: T, singleSelectionReturn: L, ...w } = Kt({
      managedChildrenReturn: r,
      rovingTabIndexReturn: _,
      singleSelectionParameters: a,
      multiSelectionParameters: s,
      childrenHaveFocusReturn: l
    });
    return {
      context: K({
        gridNavigationRowContext: d,
        rovingTabIndexContext: h,
        singleSelectionContext: x,
        multiSelectionContext: S,
        typeaheadNavigationContext: p
      }),
      childrenHaveFocusParameters: y,
      linearNavigationReturn: b,
      managedChildrenParameters: g,
      props: W(v, T),
      rovingTabIndexReturn: _,
      singleSelectionReturn: L,
      multiSelectionReturn: E,
      typeaheadNavigationReturn: C
    };
  }
  function Xn({ info: e, linearNavigationParameters: t, managedChildrenReturn: n, refElementReturn: r, rovingTabIndexParameters: o, textContentParameters: a, typeaheadNavigationParameters: s, context: u, singleSelectionChildParameters: f, multiSelectionChildParameters: m, ...l }) {
    R(Xn);
    let { hasCurrentFocusParameters: { onCurrentFocusedInnerChanged: i, ...d }, info: { getSingleSelected: h, setLocalSingleSelected: p, singleSelected: b, getMultiSelected: g, setSelectedFromParent: v, getMultiSelectionDisabled: _, ...C }, props: y, singleSelectionChildReturn: x, multiSelectionChildReturn: S, pressParameters: { onPressSync: E, ...T }, ...L } = Jt({ info: e, context: u, singleSelectionChildParameters: f, multiSelectionChildParameters: m }), { hasCurrentFocusParameters: { onCurrentFocusedInnerChanged: w, ...D }, info: { focusSelf: I, getLocallyTabbable: M, setLocallyTabbable: O, ...j }, props: $, linearNavigationReturn: B, managedChildrenParameters: V, pressParameters: { excludeSpace: Y, ...ee }, rovingTabIndexChildReturn: ue, rovingTabIndexReturn: ne, textContentReturn: ge, typeaheadNavigationReturn: pe, context: te, ...re } = Vn({ context: u, linearNavigationParameters: t, info: e, managedChildrenReturn: n, refElementReturn: r, rovingTabIndexParameters: o, textContentParameters: a, typeaheadNavigationParameters: s });
    return {
      context: te,
      linearNavigationReturn: B,
      info: {
        getLocallyTabbable: M,
        getSingleSelected: h,
        singleSelected: b,
        setLocallyTabbable: O,
        setLocalSingleSelected: p,
        focusSelf: I,
        getMultiSelected: g,
        setSelectedFromParent: v,
        getMultiSelectionDisabled: _
      },
      managedChildrenParameters: V,
      pressParameters: { onPressSync: E, excludeSpace: Y },
      hasCurrentFocusParameters: { onCurrentFocusedInnerChanged: P((X, F, z) => {
        i?.(X, F, z), w?.(X, F, z);
      }) },
      props: W($, y),
      rovingTabIndexChildReturn: ue,
      rovingTabIndexReturn: ne,
      singleSelectionChildReturn: x,
      multiSelectionChildReturn: S,
      textContentReturn: ge,
      typeaheadNavigationReturn: pe
    };
  }
  function Qn(e) {
    return R(Qn), $n(e);
  }

  // ../dist/component-detail/keyboard-navigation/use-grid-navigation-selection-sortable.js
  function Yn({ rearrangeableChildrenParameters: e, sortableChildrenParameters: t, linearNavigationParameters: n, managedChildrenReturn: r, gridNavigationParameters: o, paginatedChildrenParameters: a, refElementReturn: s, rovingTabIndexParameters: u, singleSelectionParameters: f, multiSelectionParameters: m, typeaheadNavigationParameters: l, childrenHaveFocusReturn: i, ...d }) {
    R(Yn);
    let { rearrangeableChildrenReturn: h, sortableChildrenReturn: p } = _t({ rearrangeableChildrenParameters: e, sortableChildrenParameters: t, managedChildrenReturn: r }), b = Jn({
      rearrangeableChildrenReturn: h,
      linearNavigationParameters: n,
      managedChildrenReturn: r,
      gridNavigationParameters: o,
      paginatedChildrenParameters: a,
      refElementReturn: s,
      rovingTabIndexParameters: u,
      singleSelectionParameters: f,
      multiSelectionParameters: m,
      typeaheadNavigationParameters: l,
      childrenHaveFocusReturn: i
    });
    return {
      rearrangeableChildrenReturn: h,
      sortableChildrenReturn: p,
      ...b
    };
  }
  function Zn({ context: e, info: { index: t, untabbable: n, ...r }, linearNavigationParameters: o, managedChildrenReturn: a, refElementReturn: s, rovingTabIndexParameters: u, textContentParameters: f, typeaheadNavigationParameters: m, gridNavigationSelectionSortableRowParameters: { getSortableColumnIndex: l, ...i }, singleSelectionChildParameters: d, multiSelectionChildParameters: h, ...p }) {
    R(Zn);
    let b = P(l), g = k(() => {
      let pe = a.getChildren(), te = b() || 0;
      return pe.getAt(te)?.getSortValue();
    }, []), { info: { getLocallyTabbable: v, getSingleSelected: _, getMultiSelected: C, setSelectedFromParent: y, singleSelected: x, setLocalSingleSelected: S, setLocallyTabbable: E, focusSelf: T, getMultiSelectionDisabled: L, ...w }, context: D, hasCurrentFocusParameters: I, linearNavigationReturn: M, managedChildrenParameters: O, pressParameters: j, props: $, rovingTabIndexChildReturn: B, rovingTabIndexReturn: V, singleSelectionChildReturn: Y, multiSelectionChildReturn: ee, textContentReturn: ue, typeaheadNavigationReturn: ne, ...ge } = Xn({
      context: e,
      info: { index: t, untabbable: n },
      linearNavigationParameters: o,
      managedChildrenReturn: a,
      refElementReturn: s,
      rovingTabIndexParameters: u,
      textContentParameters: f,
      typeaheadNavigationParameters: m,
      singleSelectionChildParameters: d,
      multiSelectionChildParameters: h
    });
    return {
      info: { getLocallyTabbable: v, getMultiSelected: C, setSelectedFromParent: y, getSingleSelected: _, getMultiSelectionDisabled: L, singleSelected: x, setLocallyTabbable: E, setLocalSingleSelected: S, getSortValue: g, focusSelf: T },
      context: D,
      hasCurrentFocusParameters: I,
      linearNavigationReturn: M,
      managedChildrenParameters: O,
      pressParameters: j,
      props: $,
      rovingTabIndexChildReturn: B,
      rovingTabIndexReturn: V,
      singleSelectionChildReturn: Y,
      multiSelectionChildReturn: ee,
      textContentReturn: ue,
      typeaheadNavigationReturn: ne
    };
  }
  function er({ context: e, gridNavigationCellParameters: t, info: { index: n, untabbable: r, ...o }, refElementReturn: a, textContentParameters: s, ...u }) {
    return R(er), Qn({
      context: e,
      info: { index: n, untabbable: r },
      gridNavigationCellParameters: t,
      refElementReturn: a,
      textContentParameters: s
    });
  }

  // ../dist/component-detail/keyboard-navigation/use-list-navigation-selection.js
  function tr({ linearNavigationParameters: e, rovingTabIndexParameters: t, typeaheadNavigationParameters: n, singleSelectionParameters: r, multiSelectionParameters: o, managedChildrenReturn: a, refElementReturn: s, paginatedChildrenParameters: u, rearrangeableChildrenReturn: f, childrenHaveFocusReturn: m, ...l }) {
    R(tr);
    let { context: i, propsStable: d, ...h } = Kt({
      childrenHaveFocusReturn: m,
      rovingTabIndexReturn: { setTabbableIndex: P((..._) => {
        g.setTabbableIndex(..._);
      }) },
      managedChildrenReturn: a,
      singleSelectionParameters: r,
      multiSelectionParameters: o
    }), { context: p, props: b, rovingTabIndexReturn: g, ...v } = rt({
      rovingTabIndexParameters: { ...t, initiallyTabbedIndex: r.initiallySingleSelectedIndex || 0 },
      linearNavigationParameters: e,
      paginatedChildrenParameters: u,
      typeaheadNavigationParameters: n,
      managedChildrenReturn: a,
      refElementReturn: s,
      rearrangeableChildrenReturn: f
    });
    return {
      rovingTabIndexReturn: g,
      ...h,
      ...v,
      context: K({
        ...p,
        ...i
      }),
      props: W(b, d)
    };
  }
  function nr({ info: { index: e, untabbable: t, ...n }, context: r, refElementReturn: o, textContentParameters: a, singleSelectionChildParameters: s, multiSelectionChildParameters: u, ...f }) {
    R(nr);
    let { hasCurrentFocusParameters: { onCurrentFocusedInnerChanged: m, ...l }, info: i, multiSelectionChildReturn: d, singleSelectionChildReturn: h, props: p, pressParameters: { onPressSync: b }, ...g } = Jt({
      info: { index: e, untabbable: t },
      context: r,
      multiSelectionChildParameters: u,
      singleSelectionChildParameters: s
    }), { hasCurrentFocusParameters: { onCurrentFocusedInnerChanged: v, ..._ }, pressParameters: { excludeSpace: C }, rovingTabIndexChildReturn: y, textContentReturn: x, props: S, info: E, ...T } = ot({
      info: { index: e, untabbable: t },
      context: r,
      refElementReturn: o,
      textContentParameters: a
    });
    return {
      hasCurrentFocusParameters: {
        onCurrentFocusedInnerChanged: P((L, w, D) => {
          v?.(L, w, D), m?.(L, w, D);
        })
      },
      pressParameters: { onPressSync: b, excludeSpace: C },
      info: { ...i, ...E },
      rovingTabIndexChildReturn: y,
      multiSelectionChildReturn: d,
      singleSelectionChildReturn: h,
      textContentReturn: x,
      propsChild: p,
      propsTabbable: S
    };
  }

  // ../dist/component-detail/keyboard-navigation/use-list-navigation-selection-sortable.js
  function rr({ linearNavigationParameters: e, rovingTabIndexParameters: t, typeaheadNavigationParameters: n, singleSelectionParameters: r, multiSelectionParameters: o, managedChildrenReturn: a, rearrangeableChildrenParameters: s, sortableChildrenParameters: u, refElementReturn: f, paginatedChildrenParameters: m, childrenHaveFocusReturn: l, ...i }) {
    R(rr);
    let { rearrangeableChildrenReturn: d, sortableChildrenReturn: h, ...p } = _t({ rearrangeableChildrenParameters: s, sortableChildrenParameters: u, managedChildrenReturn: a }), { props: b, context: g, ...v } = tr({ childrenHaveFocusReturn: l, linearNavigationParameters: e, rearrangeableChildrenReturn: d, rovingTabIndexParameters: t, typeaheadNavigationParameters: n, singleSelectionParameters: r, multiSelectionParameters: o, managedChildrenReturn: a, refElementReturn: f, paginatedChildrenParameters: m });
    return {
      context: g,
      props: b,
      rearrangeableChildrenReturn: d,
      sortableChildrenReturn: h,
      ...v
    };
  }
  function or({ info: e, context: t, refElementReturn: n, textContentParameters: r, singleSelectionChildParameters: o, multiSelectionChildParameters: a, ...s }) {
    return R(or), nr({
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
    R(se);
    let t = A(!1);
    t.current && (t.current = !1, console.assert(!1, "useRefElement was used on a component that didn't forward its ref onto a DOM element, so it's attached to that component's VNode instead."));
    let { onElementChange: n, onMount: r, onUnmount: o } = e.refElementParameters || {};
    Z("useRefElement", n, r, o);
    let a = k((m, l) => {
      m == null || m instanceof Element || (console.assert(m == null || m instanceof Element, "useRefElement was used on a component that didn't forward its ref onto a DOM element, so it's attached to that component's VNode instead."), t.current = !0);
      let i = n?.(m, l);
      return l && o?.(l), m && r?.(m), i;
    }, []), [s, u] = q(a, Ce, me);
    return {
      propsStable: A(he({ ref: u }, "data-use-ref-element")).current,
      refElementReturn: {
        getElement: s
      }
    };
  }

  // ../node_modules/.pnpm/github.com+mwszekely+map-and-set-extensions@2e76da9cceee046d57d83eaacf46e602a97a9f63/node_modules/map-and-set-extensions/dist/map-of-sets.js
  var Ke = {
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
  var bt = /* @__PURE__ */ new Map(), ao = /* @__PURE__ */ new Map(), ar = /* @__PURE__ */ new Map(), Zi = /* @__PURE__ */ new Map();
  function Qt(e, t, n, r) {
    let o = t.get(e);
    if (o)
      for (let a of o) {
        let { lastSent: s, send: u } = a;
        n !== s && (u(n, r), a.lastSent = n);
      }
  }
  function Ji(e) {
    let t = e.target.ownerDocument.defaultView;
    e.relatedTarget == null && Qt(t, bt, null, e);
  }
  function Xi(e) {
    let t = e.target.ownerDocument.defaultView, n = e.target;
    Qt(t, bt, n, e), Qt(t, ao, n, e);
  }
  function Qi(e) {
    let t = e.target instanceof Window ? e.target : e.currentTarget instanceof Window ? e.currentTarget : e.target.ownerDocument.defaultView;
    Zi.set(t, !0), Qt(t, ar, !0, e);
  }
  function Yi(e) {
    let t = e.target instanceof Window ? e.target : e.currentTarget instanceof Window ? e.currentTarget : e.target.ownerDocument.defaultView;
    Zi.set(t, !1), Qt(t, ar, !1, e);
  }
  function Je({ activeElementParameters: { onActiveElementChange: e, onLastActiveElementChange: t, onWindowFocusedChange: n, getDocument: r } }) {
    R(Je), Z("useActiveElement", e, t, n, r), G(() => {
      let l = r(), i = l?.defaultView;
      (bt.get(i)?.size ?? 0) === 0 && (l?.addEventListener("focusin", Xi, { passive: !0 }), l?.addEventListener("focusout", Ji, { passive: !0 }), i?.addEventListener("focus", Qi, { passive: !0 }), i?.addEventListener("blur", Yi, { passive: !0 }));
      let d = { send: a, lastSent: void 0 }, h = { send: u, lastSent: void 0 }, p = { send: m, lastSent: void 0 };
      return Ke.add(bt, i, d), Ke.add(ao, i, h), Ke.add(ar, i, p), () => {
        Ke.delete(bt, i, d), Ke.delete(ao, i, h), Ke.delete(ar, i, p), bt.size === 0 && (l?.removeEventListener("focusin", Xi), l?.removeEventListener("focusout", Ji), i?.removeEventListener("focus", Qi), i?.removeEventListener("blur", Yi));
      };
    }, []);
    let [o, a] = q(e, Ce, me), [s, u] = q(t, Ce, me), [f, m] = q(n, Gt, me);
    return { activeElementReturn: { getActiveElement: o, getLastActiveElement: s, getWindowFocused: f } };
  }

  // ../dist/component-detail/use-dismiss.js
  function ir({ dismissParameters: { dismissActive: e, onDismiss: t, ...n }, backdropDismissParameters: { dismissBackdropActive: r, onDismissBackdrop: o, ...a }, lostFocusDismissParameters: { dismissLostFocusActive: s, onDismissLostFocus: u, ...f }, escapeDismissParameters: { dismissEscapeActive: m, onDismissEscape: l, parentDepth: i, ...d }, activeElementParameters: { getDocument: h, onActiveElementChange: p, onLastActiveElementChange: b, onWindowFocusedChange: g, ...v }, ..._ }) {
    R(ir);
    let { refElementReturn: C, propsStable: y } = se({ refElementParameters: {} }), { refElementReturn: x, propsStable: S } = se({ refElementParameters: {} }), E = xn({
      refElementPopupReturn: x,
      backdropDismissParameters: {
        dismissBackdropActive: r && e,
        onDismissBackdrop: P((O) => {
          o?.(O), t(O, "backdrop");
        })
      }
    }), T = Sn({
      refElementPopupReturn: x,
      escapeDismissParameters: {
        dismissEscapeActive: m && e,
        getDocument: h,
        onDismissEscape: P((O) => {
          l?.(O), t(O, "escape");
        }),
        parentDepth: i
      }
    }), { activeElementParameters: { onLastActiveElementChange: L, ...w } } = En({
      lostFocusDismissParameters: {
        dismissLostFocusActive: s && e,
        onDismissLostFocus: P((O) => {
          u?.(O), t(O, "lost-focus");
        })
      },
      refElementPopupReturn: x,
      refElementSourceReturn: C
    }), { activeElementReturn: { getActiveElement: D, getLastActiveElement: I, getWindowFocused: M } } = Je({
      activeElementParameters: {
        onLastActiveElementChange: P((O, j, $) => {
          L?.(O, j, $), b?.(O, j, $);
        }),
        onActiveElementChange: p,
        onWindowFocusedChange: g,
        getDocument: h
      }
    });
    return {
      refElementSourceReturn: C,
      refElementPopupReturn: x,
      propsStableSource: y,
      propsStablePopup: S
    };
  }

  // ../node_modules/.pnpm/blocking-elements@0.1.1/node_modules/blocking-elements/dist/blocking-elements.js
  (() => {
    var e, t, n;
    let r = Symbol(), o = Symbol(), a = Symbol(), s = Symbol(), u = Symbol(), f = Symbol(), m = Symbol(), l = Symbol(), i = Symbol(), d = Symbol(), h = Symbol(), p = Symbol(), b = Symbol();
    class g {
      constructor() {
        this[e] = [], this[t] = [], this[n] = /* @__PURE__ */ new Set();
      }
      destructor() {
        this[i](this[a]);
        let _ = this;
        _[r] = null, _[a] = null, _[o] = null;
      }
      get top() {
        let _ = this[r];
        return _[_.length - 1] || null;
      }
      push(_) {
        !_ || _ === this.top || (this.remove(_), this[f](_), this[r].push(_));
      }
      remove(_) {
        let C = this[r].indexOf(_);
        return C === -1 ? !1 : (this[r].splice(C, 1), C === this[r].length && this[f](this.top), !0);
      }
      pop() {
        let _ = this.top;
        return _ && this.remove(_), _;
      }
      has(_) {
        return this[r].indexOf(_) !== -1;
      }
      /**
       * Sets `inert` to all document elements except the new top element, its
       * parents, and its distributed content.
       */
      [(e = r, t = a, n = o, f)](_) {
        let C = this[o], y = this[a];
        if (!_) {
          this[i](y), C.clear(), this[a] = [];
          return;
        }
        let x = this[d](_);
        if (x[x.length - 1].parentNode !== document.body)
          throw Error("Non-connected element cannot be a blocking element");
        this[a] = x;
        let S = this[h](_);
        if (!y.length) {
          this[l](x, S, C);
          return;
        }
        let E = y.length - 1, T = x.length - 1;
        for (; E > 0 && T > 0 && y[E] === x[T]; )
          E--, T--;
        y[E] !== x[T] && this[m](y[E], x[T]), E > 0 && this[i](y.slice(0, E)), T > 0 && this[l](x.slice(0, T), S, null);
      }
      /**
       * Swaps inertness between two sibling elements.
       * Sets the property `inert` over the attribute since the inert spec
       * doesn't specify if it should be reflected.
       * https://html.spec.whatwg.org/multipage/interaction.html#inert
       */
      [m](_, C) {
        let y = _[s];
        this[p](_) && !_.inert && (_.inert = !0, y.add(_)), y.has(C) && (C.inert = !1, y.delete(C)), C[u] = _[u], C[s] = y, _[u] = void 0, _[s] = void 0;
      }
      /**
       * Restores original inertness to the siblings of the elements.
       * Sets the property `inert` over the attribute since the inert spec
       * doesn't specify if it should be reflected.
       * https://html.spec.whatwg.org/multipage/interaction.html#inert
       */
      [i](_) {
        for (let C of _) {
          C[u].disconnect(), C[u] = void 0;
          let x = C[s];
          for (let S of x)
            S.inert = !1;
          C[s] = void 0;
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
      [l](_, C, y) {
        for (let x of _) {
          let S = x.parentNode, E = S.children, T = /* @__PURE__ */ new Set();
          for (let I = 0; I < E.length; I++) {
            let M = E[I];
            M === x || !this[p](M) || C && C.has(M) || (y && M.inert ? y.add(M) : (M.inert = !0, T.add(M)));
          }
          x[s] = T;
          let L = new MutationObserver(this[b].bind(this));
          x[u] = L;
          let w = S, D = w;
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
      [b](_) {
        let C = this[a], y = this[o];
        for (let x of _) {
          let S = x.target.host || x.target, E = S === document.body ? C.length : C.indexOf(S), T = C[E - 1], L = T[s];
          for (let w = 0; w < x.removedNodes.length; w++) {
            let D = x.removedNodes[w];
            if (D === T) {
              console.info("Detected removal of the top Blocking Element."), this.pop();
              return;
            }
            L.has(D) && (D.inert = !1, L.delete(D));
          }
          for (let w = 0; w < x.addedNodes.length; w++) {
            let D = x.addedNodes[w];
            this[p](D) && (y && D.inert ? y.add(D) : (D.inert = !0, L.add(D)));
          }
        }
      }
      /**
       * Returns if the element is inertable.
       */
      [p](_) {
        return /^(style|template|script)$/.test(_.localName) === !1;
      }
      /**
       * Returns the list of newParents of an element, starting from element
       * (included) up to `document.body` (excluded).
       */
      [d](_) {
        let C = [], y = _;
        for (; y && y !== document.body; ) {
          if (y.nodeType === Node.ELEMENT_NODE && C.push(y), y.assignedSlot) {
            for (; y = y.assignedSlot; )
              C.push(y);
            y = C.pop();
            continue;
          }
          y = y.parentNode || y.host;
        }
        return C;
      }
      /**
       * Returns the distributed children of the element's shadow root.
       * Returns null if the element doesn't have a shadow root.
       */
      [h](_) {
        let C = _.shadowRoot;
        if (!C)
          return null;
        let y = /* @__PURE__ */ new Set(), x, S, E, T = C.querySelectorAll("slot");
        if (T.length && T[0].assignedNodes)
          for (x = 0; x < T.length; x++)
            for (E = T[x].assignedNodes({
              flatten: !0
            }), S = 0; S < E.length; S++)
              E[S].nodeType === Node.ELEMENT_NODE && y.add(E[S]);
        return y;
      }
    }
    document.$blockingElements = new g();
  })();

  // ../node_modules/.pnpm/wicg-inert@3.1.2/node_modules/wicg-inert/dist/inert.esm.js
  var io = function() {
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
  function so(e, t) {
    if (!(e instanceof t))
      throw new TypeError("Cannot call a class as a function");
  }
  (function() {
    if (typeof window > "u")
      return;
    var e = Array.prototype.slice, t = Element.prototype.matches || Element.prototype.msMatchesSelector, n = ["a[href]", "area[href]", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])", "button:not([disabled])", "details", "summary", "iframe", "object", "embed", "[contenteditable]"].join(","), r = function() {
      function m(l, i) {
        so(this, m), this._inertManager = i, this._rootElement = l, this._managedNodes = /* @__PURE__ */ new Set(), this._rootElement.hasAttribute("aria-hidden") ? this._savedAriaHidden = this._rootElement.getAttribute("aria-hidden") : this._savedAriaHidden = null, this._rootElement.setAttribute("aria-hidden", "true"), this._makeSubtreeUnfocusable(this._rootElement), this._observer = new MutationObserver(this._onMutation.bind(this)), this._observer.observe(this._rootElement, { attributes: !0, childList: !0, subtree: !0 });
      }
      return io(m, [{
        key: "destructor",
        value: function() {
          this._observer.disconnect(), this._rootElement && (this._savedAriaHidden !== null ? this._rootElement.setAttribute("aria-hidden", this._savedAriaHidden) : this._rootElement.removeAttribute("aria-hidden")), this._managedNodes.forEach(function(i) {
            this._unmanageNode(i.node);
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
        value: function(i) {
          var d = this;
          s(i, function(g) {
            return d._visitNode(g);
          });
          var h = document.activeElement;
          if (!document.body.contains(i)) {
            for (var p = i, b = void 0; p; ) {
              if (p.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
                b = /** @type {!ShadowRoot} */
                p;
                break;
              }
              p = p.parentNode;
            }
            b && (h = b.activeElement);
          }
          i.contains(h) && (h.blur(), h === document.activeElement && document.body.focus());
        }
        /**
         * @param {!Node} node
         */
      }, {
        key: "_visitNode",
        value: function(i) {
          if (i.nodeType === Node.ELEMENT_NODE) {
            var d = (
              /** @type {!HTMLElement} */
              i
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
        value: function(i) {
          var d = this._inertManager.register(i, this);
          this._managedNodes.add(d);
        }
        /**
         * Unregister the given node with this InertRoot and with InertManager.
         * @param {!Node} node
         */
      }, {
        key: "_unmanageNode",
        value: function(i) {
          var d = this._inertManager.deregister(i, this);
          d && this._managedNodes.delete(d);
        }
        /**
         * Unregister the entire subtree starting at `startNode`.
         * @param {!Node} startNode
         */
      }, {
        key: "_unmanageSubtree",
        value: function(i) {
          var d = this;
          s(i, function(h) {
            return d._unmanageNode(h);
          });
        }
        /**
         * If a descendant node is found with an `inert` attribute, adopt its managed nodes.
         * @param {!HTMLElement} node
         */
      }, {
        key: "_adoptInertRoot",
        value: function(i) {
          var d = this._inertManager.getInertRoot(i);
          d || (this._inertManager.setInert(i, !0), d = this._inertManager.getInertRoot(i)), d.managedNodes.forEach(function(h) {
            this._manageNode(h.node);
          }, this);
        }
        /**
         * Callback used when mutation observer detects subtree additions, removals, or attribute changes.
         * @param {!Array<!MutationRecord>} records
         * @param {!MutationObserver} self
         */
      }, {
        key: "_onMutation",
        value: function(i, d) {
          i.forEach(function(h) {
            var p = (
              /** @type {!HTMLElement} */
              h.target
            );
            if (h.type === "childList")
              e.call(h.addedNodes).forEach(function(g) {
                this._makeSubtreeUnfocusable(g);
              }, this), e.call(h.removedNodes).forEach(function(g) {
                this._unmanageSubtree(g);
              }, this);
            else if (h.type === "attributes") {
              if (h.attributeName === "tabindex")
                this._manageNode(p);
              else if (p !== this._rootElement && h.attributeName === "inert" && p.hasAttribute("inert")) {
                this._adoptInertRoot(p);
                var b = this._inertManager.getInertRoot(p);
                this._managedNodes.forEach(function(g) {
                  p.contains(g.node) && b._manageNode(g.node);
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
        set: function(i) {
          this._savedAriaHidden = i;
        },
        get: function() {
          return this._savedAriaHidden;
        }
      }]), m;
    }(), o = function() {
      function m(l, i) {
        so(this, m), this._node = l, this._overrodeFocusMethod = !1, this._inertRoots = /* @__PURE__ */ new Set([i]), this._savedTabIndex = null, this._destroyed = !1, this.ensureUntabbable();
      }
      return io(m, [{
        key: "destructor",
        value: function() {
          if (this._throwIfDestroyed(), this._node && this._node.nodeType === Node.ELEMENT_NODE) {
            var i = (
              /** @type {!HTMLElement} */
              this._node
            );
            this._savedTabIndex !== null ? i.setAttribute("tabindex", this._savedTabIndex) : i.removeAttribute("tabindex"), this._overrodeFocusMethod && delete i.focus;
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
            var i = (
              /** @type {!HTMLElement} */
              this.node
            );
            if (t.call(i, n)) {
              if (
                /** @type {!HTMLElement} */
                i.tabIndex === -1 && this.hasSavedTabIndex
              )
                return;
              i.hasAttribute("tabindex") && (this._savedTabIndex = /** @type {!HTMLElement} */
              i.tabIndex), i.setAttribute("tabindex", "-1"), i.nodeType === Node.ELEMENT_NODE && (i.focus = function() {
              }, this._overrodeFocusMethod = !0);
            } else
              i.hasAttribute("tabindex") && (this._savedTabIndex = /** @type {!HTMLElement} */
              i.tabIndex, i.removeAttribute("tabindex"));
          }
        }
        /**
         * Add another inert root to this inert node's set of managing inert roots.
         * @param {!InertRoot} inertRoot
         */
      }, {
        key: "addInertRoot",
        value: function(i) {
          this._throwIfDestroyed(), this._inertRoots.add(i);
        }
        /**
         * Remove the given inert root from this inert node's set of managing inert roots.
         * If the set of managing inert roots becomes empty, this node is no longer inert,
         * so the object should be destroyed.
         * @param {!InertRoot} inertRoot
         */
      }, {
        key: "removeInertRoot",
        value: function(i) {
          this._throwIfDestroyed(), this._inertRoots.delete(i), this._inertRoots.size === 0 && this.destructor();
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
        set: function(i) {
          this._throwIfDestroyed(), this._savedTabIndex = i;
        },
        get: function() {
          return this._throwIfDestroyed(), this._savedTabIndex;
        }
      }]), m;
    }(), a = function() {
      function m(l) {
        if (so(this, m), !l)
          throw new Error("Missing required argument; InertManager needs to wrap a document.");
        this._document = l, this._managedNodes = /* @__PURE__ */ new Map(), this._inertRoots = /* @__PURE__ */ new Map(), this._observer = new MutationObserver(this._watchForInert.bind(this)), u(l.head || l.body || l.documentElement), l.readyState === "loading" ? l.addEventListener("DOMContentLoaded", this._onDocumentLoaded.bind(this)) : this._onDocumentLoaded();
      }
      return io(m, [{
        key: "setInert",
        value: function(i, d) {
          if (d) {
            if (this._inertRoots.has(i))
              return;
            var h = new r(i, this);
            if (i.setAttribute("inert", ""), this._inertRoots.set(i, h), !this._document.body.contains(i))
              for (var p = i.parentNode; p; )
                p.nodeType === 11 && u(p), p = p.parentNode;
          } else {
            if (!this._inertRoots.has(i))
              return;
            var b = this._inertRoots.get(i);
            b.destructor(), this._inertRoots.delete(i), i.removeAttribute("inert");
          }
        }
        /**
         * Get the InertRoot object corresponding to the given inert root element, if any.
         * @param {!Node} element
         * @return {!InertRoot|undefined}
         */
      }, {
        key: "getInertRoot",
        value: function(i) {
          return this._inertRoots.get(i);
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
        value: function(i, d) {
          var h = this._managedNodes.get(i);
          return h !== void 0 ? h.addInertRoot(d) : h = new o(i, d), this._managedNodes.set(i, h), h;
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
        value: function(i, d) {
          var h = this._managedNodes.get(i);
          return h ? (h.removeInertRoot(d), h.destroyed && this._managedNodes.delete(i), h) : null;
        }
        /**
         * Callback used when document has finished loading.
         */
      }, {
        key: "_onDocumentLoaded",
        value: function() {
          var i = e.call(this._document.querySelectorAll("[inert]"));
          i.forEach(function(d) {
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
        value: function(i, d) {
          var h = this;
          i.forEach(function(p) {
            switch (p.type) {
              case "childList":
                e.call(p.addedNodes).forEach(function(v) {
                  if (v.nodeType === Node.ELEMENT_NODE) {
                    var _ = e.call(v.querySelectorAll("[inert]"));
                    t.call(v, "[inert]") && _.unshift(v), _.forEach(function(C) {
                      this.setInert(C, !0);
                    }, h);
                  }
                }, h);
                break;
              case "attributes":
                if (p.attributeName !== "inert")
                  return;
                var b = (
                  /** @type {!HTMLElement} */
                  p.target
                ), g = b.hasAttribute("inert");
                h.setInert(b, g);
                break;
            }
          }, this);
        }
      }]), m;
    }();
    function s(m, l, i) {
      if (m.nodeType == Node.ELEMENT_NODE) {
        var d = (
          /** @type {!HTMLElement} */
          m
        );
        l && l(d);
        var h = (
          /** @type {!HTMLElement} */
          d.shadowRoot
        );
        if (h) {
          s(h, l, h);
          return;
        }
        if (d.localName == "content") {
          for (var p = (
            /** @type {!HTMLContentElement} */
            d
          ), b = p.getDistributedNodes ? p.getDistributedNodes() : [], g = 0; g < b.length; g++)
            s(b[g], l, i);
          return;
        }
        if (d.localName == "slot") {
          for (var v = (
            /** @type {!HTMLSlotElement} */
            d
          ), _ = v.assignedNodes ? v.assignedNodes({ flatten: !0 }) : [], C = 0; C < _.length; C++)
            s(_[C], l, i);
          return;
        }
      }
      for (var y = m.firstChild; y != null; )
        s(y, l, i), y = y.nextSibling;
    }
    function u(m) {
      if (!m.querySelector("style#inert-style, link#inert-style")) {
        var l = document.createElement("style");
        l.setAttribute("id", "inert-style"), l.textContent = `
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
`, m.appendChild(l);
      }
    }
    if (!HTMLElement.prototype.hasOwnProperty("inert")) {
      var f = new a(document);
      Object.defineProperty(HTMLElement.prototype, "inert", {
        enumerable: !0,
        /** @this {!HTMLElement} */
        get: function() {
          return this.hasAttribute("inert");
        },
        /** @this {!HTMLElement} */
        set: function(l) {
          f.setInert(this, l);
        }
      });
    }
  })();

  // ../dist/dom-helpers/use-document-class.js
  function sr(e) {
    return e?.ownerDocument ?? document ?? window.document ?? globalThis.document;
  }

  // ../dist/dom-helpers/use-blocking-element.js
  function es() {
    return sr().$blockingElements;
  }
  function lr({ activeElementParameters: { getDocument: e, onActiveElementChange: t, onLastActiveElementChange: n, onWindowFocusedChange: r, ...o }, blockingElementParameters: { enabled: a, getTarget: s, ...u }, ...f }) {
    R(lr);
    let m = P(s);
    Je({
      activeElementParameters: {
        getDocument: e,
        onActiveElementChange: t,
        onWindowFocusedChange: r,
        onLastActiveElementChange: P((g, v, _) => {
          n?.(g, v, _), g && (a ? b(g, _) : h(g, _));
        })
      }
    });
    let [l, i] = q(null, Ce), [d, h] = q(null, Ce), [p, b] = q(null, Ce);
    return oe(() => {
      let g = m();
      if (a)
        try {
          return es().push(g), i(g), () => {
            es().remove(g);
          };
        } catch (v) {
          console.error(v);
        }
    }, [a]), { getTop: l, getLastActiveWhenClosed: d, getLastActiveWhenOpen: p };
  }

  // ../dist/component-detail/use-focus-trap.js
  function vt({ focusTrapParameters: { onlyMoveFocus: e, trapActive: t, focusPopup: n, focusOpener: r }, activeElementParameters: o, refElementReturn: a }) {
    R(vt);
    let s = P(n), u = P(r);
    G(() => {
      if (t) {
        let d = m(), h = i();
        d ??= a.getElement(), console.assert(!!d), d && s(d, () => ts(d));
      } else {
        let d = l(), h = document.activeElement, p = a.getElement();
        (h == document.body || h == null || p == h || p?.contains(h)) && d && u(d);
      }
    }, [t]);
    let { getElement: f } = a, { getTop: m, getLastActiveWhenClosed: l, getLastActiveWhenOpen: i } = lr({
      activeElementParameters: o,
      blockingElementParameters: {
        enabled: t && !e,
        getTarget: f
      }
    });
    return {
      props: he({ "aria-modal": t ? "true" : void 0 }, "data-focus-trap")
    };
  }
  function ts(e) {
    return Mc(e, (t) => t instanceof Element && Vi(t));
  }
  function Mc(e, t) {
    return e && t(e) ? e : (console.assert(!!e), e ??= document.body, document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, { acceptNode: (o) => t(o) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP }).firstChild());
  }

  // ../dist/component-detail/use-paginated-children.js
  function Ct({ managedChildrenReturn: { getChildren: e }, rearrangeableChildrenReturn: { indexDemangler: t }, paginatedChildrenParameters: { paginationMax: n, paginationMin: r }, rovingTabIndexReturn: { getTabbableIndex: o, setTabbableIndex: a }, refElementReturn: { getElement: s } }) {
    R(Ct);
    let [u, f] = N(null), m = r != null || n != null, l = A({ paginationMax: null, paginationMin: null }), i = k((p, b) => {
      let g = e().getHighestIndex() + 1, v = e().getLowestIndex();
      for (let _ = v; _ <= g; ++_) {
        let C = _ >= (p ?? -1 / 0) && _ < (b ?? 1 / 0);
        e().getAt(t(_))?.setPaginationVisible(C), C && (b != null || p != null) && e().getAt(t(_))?.setChildCountIfPaginated(e().getHighestIndex() + 1);
      }
    }, [
      /* Must be empty */
    ]);
    G(() => {
      let p = o();
      if (p != null) {
        let b = s()?.contains(document.activeElement) || !1;
        setTimeout(() => {
          if (r != null && p < r)
            a(r, void 0, b);
          else if (n != null && p >= n) {
            let g = n - 1;
            g == -1 && (g = null), a(g, void 0, b);
          }
        }, 1);
      }
      i(r, n), l.current.paginationMax = n ?? null, l.current.paginationMin = r ?? null;
    }, [n, r]);
    let d = k((p) => p >= (r ?? -1 / 0) && p < (n ?? 1 / 0), []), h = ce(() => ({
      parentIsPaginated: m,
      getDefaultPaginationVisible: d
    }), [m]);
    return {
      context: ce(() => ({ paginatedChildContext: h }), [h]),
      managedChildrenParameters: {
        onChildrenCountChange: P((p) => {
          if (n != null || r != null) {
            f(p);
            let b = r ?? 0, g = n ?? p;
            for (let v = b; v < g; ++v)
              e().getAt(v)?.setChildCountIfPaginated(p);
          } else
            f(null);
        })
      },
      paginatedChildrenReturn: { refreshPagination: i, childCount: u }
    };
  }
  function yt({ info: { index: e }, context: { paginatedChildContext: { parentIsPaginated: t, getDefaultPaginationVisible: n } } }) {
    R(yt);
    let [r, o] = N(null), [a, s] = N(t ? n(e) : !0);
    return {
      props: he(t ? { "aria-setsize": r ?? void 0, "aria-posinset": e + 1 } : {}, "data-paginated-children-child"),
      paginatedChildReturn: {
        /*paginatedVisible,*/
        parentIsPaginated: t,
        hideBecausePaginated: t ? !a : !1
      },
      info: {
        setPaginationVisible: s,
        setChildCountIfPaginated: o
      }
    };
  }

  // ../dist/component-detail/use-staggered-children.js
  function Xe({ managedChildrenReturn: { getChildren: e }, staggeredChildrenParameters: { staggered: t } }) {
    R(Xe);
    let [n, r] = N(t), o = A(-1), a = k(() => {
      o.current != -1 && clearTimeout(o.current), o.current = setTimeout(() => {
        o.current = -1;
        let g = s();
        g != null && m((v) => Math.min(g, (v ?? 0) + 1));
      }, 50);
    }, [
      /* Must be empty */
    ]), [s, u] = q(k((g, v) => {
      o.current == -1 && (a(), m((_) => Math.min(g ?? 0, (_ ?? 0) + 1)));
    }, [
      /* Must be empty */
    ]), Ce), [f, m] = q(k((g, v) => {
      if (!(g == null || !h.current)) {
        r(g < (s() ?? 0));
        for (let _ = v ?? 0; _ < g; ++_)
          e().getAt(_)?.setStaggeredVisible(!0);
        a();
      }
    }, [
      /* Must be empty */
    ]), Ce), l = !!t, i = k((g) => {
      m((v) => Math.min(s() ?? 0, 1 + Math.max(v ?? 0, g + 1)));
    }, []), d = k((g) => {
      u((v) => Math.max(v ?? 0, 1 + g));
    }, []), h = A(l);
    h.current = l;
    let p = k((g) => {
      if (h.current) {
        let v = f();
        return v == null ? !1 : g < v;
      } else
        return !0;
    }, []), b = ce(() => ({
      parentIsStaggered: l,
      childCallsThisToTellTheParentToMountTheNextOne: i,
      childCallsThisToTellTheParentTheHighestIndex: d,
      getDefaultStaggeredVisible: p
    }), [l]);
    return {
      staggeredChildrenReturn: { stillStaggering: n },
      context: ce(() => ({
        staggeredChildContext: b
      }), [b])
    };
  }
  function Qe({ info: { index: e }, context: { staggeredChildContext: { parentIsStaggered: t, childCallsThisToTellTheParentTheHighestIndex: n, getDefaultStaggeredVisible: r, childCallsThisToTellTheParentToMountTheNextOne: o } } }) {
    R(Qe);
    let [a, s] = N(r(e));
    return oe(() => {
      n(e);
    }, [e]), G(() => {
      t && a && o(e);
    }, [e, t && a]), {
      props: he(t ? { "aria-busy": (!a).toString() } : {}, "data-staggered-children-child"),
      staggeredChildReturn: { parentIsStaggered: t, hideBecauseStaggered: t ? !a : !1 },
      info: { setStaggeredVisible: s }
    };
  }

  // ../dist/observers/use-children-have-focus.js
  function Ye(e) {
    R(Ye);
    let { childrenHaveFocusParameters: { onCompositeFocusChange: t } } = e, [n, r] = q(t, ve, me), [o, a] = q(P((s, u, f) => {
      console.assert(s >= 0 && s <= 1), r(!!(s && !u), f);
    }), $r, setTimeout);
    return {
      childrenHaveFocusReturn: { getAnyFocused: n },
      context: K({ childrenHaveFocusChildContext: K({ setFocusCount: a }) })
    };
  }
  function xt({ context: { childrenHaveFocusChildContext: { setFocusCount: e } } }) {
    return R(xt), {
      hasCurrentFocusParameters: {
        onCurrentFocusedInnerChanged: P((t, n, r) => {
          t ? e((o) => (o ?? 0) + 1, r) : !t && n && e((o) => (o ?? 0) - 1, r);
        })
      }
    };
  }

  // ../dist/observers/use-has-current-focus.js
  function Oe(e) {
    R(Oe);
    let { hasCurrentFocusParameters: { onCurrentFocusedChanged: t, onCurrentFocusedInnerChanged: n }, refElementReturn: { getElement: r } } = e;
    Z("useHasCurrentFocus", t, n, r);
    let [o, a] = q(t, ve, me), [s, u] = q(n, ve, me), f = k((i) => {
      u(!0, i), a(i.target == r(), i);
    }, []), m = k((i) => {
      u(!1, i), a(!1, i);
    }, []);
    return G(() => () => {
      a(!1, void 0), u(!1, void 0);
    }, []), {
      hasCurrentFocusReturn: {
        propsStable: A({
          [Wr]: f,
          [jt]: m
        }).current,
        getCurrentFocused: o,
        getCurrentFocusedInner: s
      }
    };
  }

  // ../dist/component-use/use-grid-navigation-complete.js
  function lo({ gridNavigationParameters: e, linearNavigationParameters: t, rovingTabIndexParameters: n, singleSelectionParameters: r, multiSelectionParameters: o, typeaheadNavigationParameters: a, sortableChildrenParameters: s, rearrangeableChildrenParameters: u, paginatedChildrenParameters: f, staggeredChildrenParameters: m, refElementParameters: l, ...i }) {
    R(lo);
    let d = k(() => pe.getChildren(), []), h = k(() => d().getLowestIndex(), []), p = k(() => d().getHighestIndex(), []), b = k((ye) => {
      let Fe = d().getAt(ye);
      return !(Fe == null || Fe.untabbable);
    }, []), { refElementReturn: g, propsStable: v, ..._ } = se({ refElementParameters: l }), { childrenHaveFocusParameters: C, managedChildrenParameters: y, context: { gridNavigationRowContext: x, rovingTabIndexContext: S, singleSelectionContext: E, multiSelectionContext: T, typeaheadNavigationContext: L }, rearrangeableChildrenReturn: w, props: D, rovingTabIndexReturn: I, linearNavigationReturn: M, singleSelectionReturn: O, multiSelectionReturn: j, sortableChildrenReturn: $, typeaheadNavigationReturn: B, ...V } = Yn({
      gridNavigationParameters: e,
      linearNavigationParameters: { getLowestIndex: h, getHighestIndex: p, isValidForLinearNavigation: b, ...t },
      managedChildrenReturn: { getChildren: d },
      rovingTabIndexParameters: { untabbableBehavior: "focus-parent", ...n },
      singleSelectionParameters: r,
      multiSelectionParameters: o,
      typeaheadNavigationParameters: { isValidForTypeaheadNavigation: b, ...a },
      paginatedChildrenParameters: f,
      refElementReturn: g,
      rearrangeableChildrenParameters: {
        onRearranged: P(() => {
          re(f.paginationMin, f.paginationMax);
        }),
        ...u
      },
      childrenHaveFocusReturn: { getAnyFocused: P(() => ue.getAnyFocused()) },
      sortableChildrenParameters: s
    }), { indexDemangler: Y } = w, { context: { childrenHaveFocusChildContext: ee }, childrenHaveFocusReturn: ue } = Ye({ childrenHaveFocusParameters: C }), ne = Ge({ managedChildrenParameters: { onChildrenCountChange: P((ye) => X?.(ye)), ...y } }), { context: { managedChildContext: ge }, managedChildrenReturn: pe } = ne, { paginatedChildrenReturn: te, paginatedChildrenReturn: { refreshPagination: re }, managedChildrenParameters: { onChildrenCountChange: X }, context: { paginatedChildContext: F } } = Ct({ refElementReturn: g, managedChildrenReturn: pe, paginatedChildrenParameters: f, rovingTabIndexReturn: I, rearrangeableChildrenReturn: { indexDemangler: Y } }), { context: { staggeredChildContext: z }, staggeredChildrenReturn: J } = Xe({ managedChildrenReturn: pe, staggeredChildrenParameters: m }), _e = K({
      singleSelectionContext: E,
      multiSelectionContext: T,
      managedChildContext: ge,
      rovingTabIndexContext: S,
      typeaheadNavigationContext: L,
      childrenHaveFocusChildContext: ee,
      paginatedChildContext: F,
      staggeredChildContext: z,
      gridNavigationRowContext: x
    });
    return {
      context: _e,
      props: W(D, v),
      managedChildrenReturn: pe,
      rearrangeableChildrenReturn: w,
      staggeredChildrenReturn: J,
      rovingTabIndexReturn: I,
      childrenHaveFocusReturn: ue,
      paginatedChildrenReturn: te,
      linearNavigationReturn: M,
      singleSelectionReturn: O,
      multiSelectionReturn: j,
      sortableChildrenReturn: $,
      typeaheadNavigationReturn: B
    };
  }
  function ur({ info: { index: e, untabbable: t, ...n }, context: r, textContentParameters: o, linearNavigationParameters: a, rovingTabIndexParameters: s, typeaheadNavigationParameters: u, gridNavigationSelectionSortableRowParameters: f, hasCurrentFocusParameters: { onCurrentFocusedChanged: m, onCurrentFocusedInnerChanged: l, ...i }, singleSelectionChildParameters: d, multiSelectionChildParameters: h, ...p }) {
    R(ur);
    let { info: b, paginatedChildReturn: g, props: v, ..._ } = yt({ info: { index: e }, context: r }), { info: C, staggeredChildReturn: y, props: x, ...S } = Qe({ info: { index: e }, context: r });
    t ||= g.hideBecausePaginated || y.hideBecauseStaggered;
    let E = k(() => _e.getChildren(), []), T = k(() => E().getHighestIndex(), []), L = k(() => E().getLowestIndex(), []), w = k((We) => {
      let Pt = E().getAt(We);
      return !(Pt == null || Pt.untabbable);
    }, []), { refElementReturn: D, propsStable: I, ...M } = se({ refElementParameters: {} }), O = Zn({
      rovingTabIndexParameters: s,
      typeaheadNavigationParameters: { isValidForTypeaheadNavigation: w, ...u },
      linearNavigationParameters: { isValidForLinearNavigation: w, getHighestIndex: T, getLowestIndex: L, ...a },
      managedChildrenReturn: { getChildren: E },
      refElementReturn: D,
      context: r,
      info: { index: e, untabbable: t },
      textContentParameters: o,
      gridNavigationSelectionSortableRowParameters: f,
      singleSelectionChildParameters: d,
      multiSelectionChildParameters: h
    }), { linearNavigationReturn: j, managedChildrenParameters: $, pressParameters: B, rovingTabIndexChildReturn: V, rovingTabIndexReturn: Y, singleSelectionChildReturn: ee, multiSelectionChildReturn: ue, textContentReturn: ne, typeaheadNavigationReturn: ge, context: pe, info: te, props: re, hasCurrentFocusParameters: { onCurrentFocusedInnerChanged: X, ...F }, ...z } = O, { context: J, managedChildrenReturn: _e } = Ge({ managedChildrenParameters: $ }), ye = {
      getElement: D.getElement,
      index: e,
      untabbable: t,
      ...te,
      ...b,
      ...C
    }, { managedChildReturn: Fe, ...at } = Be({ context: r, info: { ...ye, ...n } }), Tt = K({
      ...pe,
      ...J
    }), { hasCurrentFocusReturn: it } = Oe({
      refElementReturn: D,
      hasCurrentFocusParameters: {
        onCurrentFocusedChanged: m,
        onCurrentFocusedInnerChanged: P((We, Pt, vo) => {
          X?.(We, Pt, vo), l?.(We, Pt, vo);
        })
      }
    }), It = W(I, re, it.propsStable, v, x);
    return {
      pressParameters: B,
      hasCurrentFocusReturn: it,
      managedChildrenReturn: _e,
      context: Tt,
      managedChildReturn: Fe,
      staggeredChildReturn: y,
      paginatedChildReturn: g,
      linearNavigationReturn: j,
      rovingTabIndexChildReturn: V,
      rovingTabIndexReturn: Y,
      singleSelectionChildReturn: ee,
      multiSelectionChildReturn: ue,
      textContentReturn: ne,
      typeaheadNavigationReturn: ge,
      props: It
    };
  }
  function cr({ gridNavigationCellParameters: e, context: t, textContentParameters: n, info: { focusSelf: r, index: o, untabbable: a, getSortValue: s, ...u }, ...f }) {
    R(cr);
    let { refElementReturn: m, propsStable: l } = se({ refElementParameters: {} }), { hasCurrentFocusParameters: i, rovingTabIndexChildReturn: d, textContentReturn: h, pressParameters: { excludeSpace: p }, props: b, info: g, ...v } = er({
      gridNavigationCellParameters: e,
      info: { index: o, untabbable: a },
      context: t,
      refElementReturn: m,
      textContentParameters: n
    });
    let { hasCurrentFocusReturn: _ } = Oe({
      hasCurrentFocusParameters: {
        onCurrentFocusedChanged: null,
        ...i
      },
      refElementReturn: m
    }), C = {
      getSortValue: s,
      getElement: m.getElement,
      getLocallyTabbable: d.getTabbable,
      setLocallyTabbable: g.setLocallyTabbable,
      focusSelf: r,
      index: o,
      untabbable: a
    }, { managedChildReturn: y } = Be({ context: t, info: { ...C, ...u } });
    return {
      props: W(l, b, _.propsStable),
      refElementReturn: m,
      rovingTabIndexChildReturn: d,
      pressParameters: { excludeSpace: P(() => p?.() || !1) },
      hasCurrentFocusReturn: _,
      managedChildReturn: y,
      textContentReturn: h
    };
  }
  function uo({ gridNavigationParameters: e, linearNavigationParameters: t, paginatedChildrenParameters: n, rearrangeableChildrenParameters: r, rovingTabIndexParameters: o, singleSelectionDeclarativeParameters: a, multiSelectionParameters: s, sortableChildrenParameters: u, staggeredChildrenParameters: f, typeaheadNavigationParameters: m, singleSelectionParameters: l, refElementParameters: i, ...d }) {
    let h = lo({
      linearNavigationParameters: t,
      paginatedChildrenParameters: n,
      rearrangeableChildrenParameters: r,
      rovingTabIndexParameters: o,
      singleSelectionParameters: { initiallySingleSelectedIndex: a.singleSelectedIndex, onSingleSelectedIndexChange: P((...v) => p?.(...v)), ...l },
      multiSelectionParameters: s,
      sortableChildrenParameters: u,
      staggeredChildrenParameters: f,
      refElementParameters: i,
      typeaheadNavigationParameters: m,
      gridNavigationParameters: e
    }), { singleSelectionParameters: { onSingleSelectedIndexChange: p } } = Xt({
      singleSelectionDeclarativeParameters: a,
      singleSelectionReturn: h.singleSelectionReturn
    }), { singleSelectionReturn: { getSingleSelectedIndex: b }, ...g } = h;
    return { ...g, singleSelectionReturn: { getSingleSelectedIndex: b } };
  }

  // ../dist/component-use/use-list-navigation-complete.js
  function co({ linearNavigationParameters: e, rearrangeableChildrenParameters: t, sortableChildrenParameters: n, typeaheadNavigationParameters: r, rovingTabIndexParameters: o, singleSelectionParameters: a, multiSelectionParameters: s, paginatedChildrenParameters: u, staggeredChildrenParameters: f, refElementParameters: m, ...l }) {
    R(co);
    let { initiallySingleSelectedIndex: i } = a, d = k(() => F.getChildren(), []), h = k(() => d().getLowestIndex(), []), p = k(() => d().getHighestIndex(), []), b = k((J) => {
      let _e = d().getAt(J);
      return !(!_e || _e.untabbable);
    }, []), { propsStable: g, refElementReturn: v } = se({ refElementParameters: m }), { childrenHaveFocusParameters: _, managedChildrenParameters: { onChildrenMountChange: C, ...y }, context: { rovingTabIndexContext: x, singleSelectionContext: S, multiSelectionContext: E, typeaheadNavigationContext: T }, linearNavigationReturn: L, rovingTabIndexReturn: w, singleSelectionReturn: D, multiSelectionReturn: I, typeaheadNavigationReturn: M, rearrangeableChildrenReturn: O, sortableChildrenReturn: j, props: $, ...B } = rr({
      managedChildrenReturn: { getChildren: d },
      linearNavigationParameters: { getLowestIndex: h, getHighestIndex: p, isValidForLinearNavigation: b, ...e },
      typeaheadNavigationParameters: { isValidForTypeaheadNavigation: b, ...r },
      rovingTabIndexParameters: { untabbableBehavior: "focus-parent", ...o },
      singleSelectionParameters: a,
      multiSelectionParameters: s,
      rearrangeableChildrenParameters: {
        onRearranged: P(() => {
          ue(u.paginationMin, u.paginationMax);
        }),
        ...t
      },
      paginatedChildrenParameters: u,
      refElementReturn: v,
      sortableChildrenParameters: n,
      childrenHaveFocusReturn: { getAnyFocused: P(() => Y.getAnyFocused()) }
    }), { context: { childrenHaveFocusChildContext: V }, childrenHaveFocusReturn: Y } = Ye({ childrenHaveFocusParameters: _ }), { paginatedChildrenReturn: ee, paginatedChildrenReturn: { refreshPagination: ue }, managedChildrenParameters: ne, context: { paginatedChildContext: ge } } = Ct({ refElementReturn: v, managedChildrenReturn: { getChildren: P(() => F.getChildren()) }, rovingTabIndexReturn: w, paginatedChildrenParameters: u, rearrangeableChildrenReturn: { indexDemangler: O.indexDemangler } }), { context: { staggeredChildContext: pe }, staggeredChildrenReturn: te } = Xe({ managedChildrenReturn: { getChildren: P(() => F.getChildren()) }, staggeredChildrenParameters: f }), re = Ge({
      managedChildrenParameters: {
        onChildrenMountChange: C,
        ...ne,
        ...y
      }
    }), { context: { managedChildContext: X }, managedChildrenReturn: F } = re, z = K(K({
      childrenHaveFocusChildContext: V,
      managedChildContext: X,
      paginatedChildContext: ge,
      rovingTabIndexContext: x,
      singleSelectionContext: S,
      multiSelectionContext: E,
      staggeredChildContext: pe,
      typeaheadNavigationContext: T
    }));
    return {
      context: z,
      props: W($, g),
      managedChildrenReturn: F,
      rearrangeableChildrenReturn: O,
      staggeredChildrenReturn: te,
      paginatedChildrenReturn: ee,
      sortableChildrenReturn: j,
      linearNavigationReturn: L,
      rovingTabIndexReturn: w,
      singleSelectionReturn: D,
      multiSelectionReturn: I,
      typeaheadNavigationReturn: M,
      childrenHaveFocusReturn: Y
    };
  }
  function fo({
    info: { index: e, focusSelf: t, untabbable: n, getSortValue: r, ...o },
    // The "...info" is empty if M is the same as UCLNCI<ChildElement>.
    textContentParameters: a,
    refElementParameters: s,
    hasCurrentFocusParameters: { onCurrentFocusedChanged: u, onCurrentFocusedInnerChanged: f, ...m },
    singleSelectionChildParameters: l,
    multiSelectionChildParameters: i,
    context: { managedChildContext: d, rovingTabIndexContext: h, paginatedChildContext: p, staggeredChildContext: b, singleSelectionContext: g, multiSelectionContext: v, typeaheadNavigationContext: _, childrenHaveFocusChildContext: C, ...y },
    ...x
  }) {
    R(fo);
    let { info: S, paginatedChildReturn: E, paginatedChildReturn: { hideBecausePaginated: T }, props: L } = yt({ info: { index: e }, context: { paginatedChildContext: p } }), { info: w, staggeredChildReturn: D, staggeredChildReturn: { hideBecauseStaggered: I }, props: M } = Qe({ info: { index: e }, context: { staggeredChildContext: b } });
    n ||= T || I;
    let { refElementReturn: O, propsStable: j, ...$ } = se({ refElementParameters: s }), { hasCurrentFocusParameters: { onCurrentFocusedInnerChanged: B, ...V }, pressParameters: { excludeSpace: Y, onPressSync: ee, ...ue }, textContentReturn: ne, singleSelectionChildReturn: ge, multiSelectionChildReturn: pe, info: te, rovingTabIndexChildReturn: re, propsChild: X, propsTabbable: F, ...z } = or({
      info: { index: e, untabbable: n },
      context: { rovingTabIndexContext: h, singleSelectionContext: g, multiSelectionContext: v, typeaheadNavigationContext: _ },
      singleSelectionChildParameters: l,
      multiSelectionChildParameters: i,
      refElementReturn: O,
      textContentParameters: a
    }), J = {
      index: e,
      focusSelf: t,
      getElement: O.getElement,
      getSortValue: r,
      untabbable: n,
      ...w,
      ...S,
      ...te
    }, { managedChildReturn: _e } = Be({ context: { managedChildContext: d }, info: { ...J, ...o } }), { hasCurrentFocusParameters: { onCurrentFocusedInnerChanged: ye } } = xt({ context: { childrenHaveFocusChildContext: C } }), Fe = P((it, It, We) => {
      B?.(it, It, We), ye?.(it, It, We), f?.(it, It, We);
    }), { hasCurrentFocusReturn: at } = Oe({
      hasCurrentFocusParameters: {
        onCurrentFocusedInnerChanged: Fe,
        onCurrentFocusedChanged: u
      },
      refElementReturn: O
    }), Tt = W(j, at.propsStable, X, L, M);
    return {
      propsChild: Tt,
      propsTabbable: F,
      pressParameters: {
        onPressSync: ee,
        excludeSpace: Y
      },
      textContentReturn: ne,
      refElementReturn: O,
      singleSelectionChildReturn: ge,
      multiSelectionChildReturn: pe,
      hasCurrentFocusReturn: at,
      managedChildReturn: _e,
      paginatedChildReturn: E,
      staggeredChildReturn: D,
      rovingTabIndexChildReturn: re
    };
  }
  function mo({ singleSelectionParameters: e, singleSelectionDeclarativeParameters: t, ...n }) {
    let r = co({
      singleSelectionParameters: {
        initiallySingleSelectedIndex: t.singleSelectedIndex,
        // Needs to be a (stable) callback because of declaration order
        onSingleSelectedIndexChange: P((...m) => o?.(...m)),
        ...e
      },
      ...n
    }), { singleSelectionParameters: { onSingleSelectedIndexChange: o, ...a }, ...s } = Xt({ singleSelectionDeclarativeParameters: t, singleSelectionReturn: r.singleSelectionReturn }), { singleSelectionReturn: { getSingleSelectedIndex: u }, ...f } = r;
    return { ...f, singleSelectionReturn: { getSingleSelectedIndex: u } };
  }
  function po({ multiSelectionChildParameters: e, multiSelectionChildDeclarativeParameters: { multiSelected: t, onMultiSelectedChange: n }, ...r }) {
    let o = fo({
      multiSelectionChildParameters: {
        initiallyMultiSelected: t,
        onMultiSelectChange: P((l) => {
          a(l);
        }),
        ...e
      },
      ...r
    }), { multiSelectionChildParameters: { onMultiSelectChange: a }, info: s, ...u } = oo({
      multiSelectionChildDeclarativeParameters: { onMultiSelectedChange: n, multiSelected: t },
      multiSelectionChildReturn: o.multiSelectionChildReturn
    }), { multiSelectionChildReturn: f, ...m } = o;
    return { ...m, multiSelectionChildReturn: f };
  }

  // ../dist/component-use/use-modal.js
  function dr({ dismissParameters: { dismissActive: e, onDismiss: t, ...n }, escapeDismissParameters: { dismissEscapeActive: r, onDismissEscape: o, parentDepth: a, ...s }, focusTrapParameters: { trapActive: u, ...f }, activeElementParameters: { getDocument: m, onActiveElementChange: l, onLastActiveElementChange: i, onWindowFocusedChange: d, ...h }, backdropDismissParameters: { dismissBackdropActive: p, onDismissBackdrop: b, ...g }, lostFocusDismissParameters: { dismissLostFocusActive: v, onDismissLostFocus: _, ...C }, refElementParameters: { onElementChange: y, onMount: x, onUnmount: S, ...E }, modalParameters: { active: T, ...L }, ...w }) {
    R(dr);
    let { refElementPopupReturn: D, refElementSourceReturn: I, propsStablePopup: M, propsStableSource: O } = ir({
      dismissParameters: { dismissActive: e && T, onDismiss: t },
      escapeDismissParameters: { dismissEscapeActive: r, onDismissEscape: o, parentDepth: a },
      activeElementParameters: { getDocument: m, onActiveElementChange: l, onLastActiveElementChange: i, onWindowFocusedChange: d },
      backdropDismissParameters: { dismissBackdropActive: p, onDismissBackdrop: b },
      lostFocusDismissParameters: { dismissLostFocusActive: v, onDismissLostFocus: _ }
    }), { propsStable: j, refElementReturn: $ } = se({ refElementParameters: { onElementChange: y, onMount: x, onUnmount: S } }), { props: B } = vt({
      focusTrapParameters: { trapActive: u && T, ...f },
      activeElementParameters: { getDocument: m, onActiveElementChange: l, onLastActiveElementChange: i, onWindowFocusedChange: d },
      refElementReturn: $
    });
    return {
      propsFocusContainer: W(j, B),
      refElementPopupReturn: D,
      refElementSourceReturn: I,
      propsStablePopup: M,
      propsStableSource: O
    };
  }

  // ../node_modules/.pnpm/github.com+mwszekely+async-to-sync@624c049a849d0a02039c1ec14f78617394daabce/node_modules/async-to-sync/dist/index.js
  function Ac(e) {
    return e instanceof Promise;
  }
  var fr = Symbol("Unset");
  function ns({ asyncInput: e, onInvoke: t, onInvoked: n, onFinally: r, onReject: o, onResolve: a, onHasError: s, onHasResult: u, onError: f, onReturnValue: m, capture: l, onAsyncDebounce: i, onSyncDebounce: d, onPending: h, throttle: p, wait: b }) {
    let g = !1, v = !1, _ = !1, C = fr, y = () => {
      r?.(), h?.(g = !1);
      let T = !_;
      i?.(_ = !1), T || (console.assert(C !== fr), C != fr && (d?.(v = !0), E()));
    }, x = (...T) => {
      h?.(g = !0), console.assert(v == !1), s?.(null), u?.(null);
      let L, w = !1;
      try {
        t?.(), L = e(...T), s?.(!1);
      } catch (D) {
        w = !0, f?.(D), n?.("throw");
      }
      Ac(L) ? (n?.("async"), L.then((D) => (a?.(), u?.(!0), m?.(D), D)).catch((D) => (o?.(), s?.(!0), f?.(D), D)).finally(y)) : (n?.("sync"), w ? (o?.(), u?.(!1), s?.(!0)) : (a?.(), u?.(!0), s?.(!1)), m?.(L), h?.(g = !1), y());
    }, S = {
      leading: !b,
      trailing: !0
    };
    p && ((b == null || b < p) && (b = p), S.maxWait = p);
    let E = Xr(() => {
      d?.(v = !1), g ? i?.(_ = !0) : (console.assert(C != fr), x(...C));
    }, b || void 0, S);
    return {
      syncOutput: (...T) => {
        C = l?.(...T) ?? [], d?.(v = !0), E();
      },
      flushSyncDebounce: () => {
        E.flush();
      },
      cancelSyncDebounce: () => {
        E.cancel();
      }
    };
  }

  // ../dist/preact-extensions/use-async.js
  function Oc(...e) {
    return e;
  }
  var Hc = async function() {
  }.constructor;
  function Yt(e, t) {
    R(Yt);
    let [n, r, o] = N(!1), [a, s, u] = N(void 0), [f, m, l] = N(void 0), [i, d, h] = N(!1), [p, b, g] = N(!1), [v, _] = N(!1), [C, y] = N(!1), [x, S] = N(e instanceof Hc ? "async" : null), [E, T] = N(0), [L, w] = N(0), [D, I] = N(0), [M, O] = N(0), j = k(() => {
      T((X) => X + 1);
    }, []), $ = k(() => {
      I((X) => X + 1);
    }, []), B = k(() => {
      O((X) => X + 1);
    }, []), V = k(() => {
      w((X) => X + 1);
    }, []), { throttle: Y, debounce: ee, capture: ue } = t ?? {}, ne = P(ue ?? Oc), ge = P(e ?? nt), { flushSyncDebounce: pe, syncOutput: te, cancelSyncDebounce: re } = ce(() => ns({
      asyncInput: ge,
      capture: ne,
      onAsyncDebounce: _,
      onError: m,
      onPending: r,
      onReturnValue: s,
      onSyncDebounce: y,
      onHasError: d,
      onHasResult: b,
      onInvoked: S,
      onInvoke: j,
      onFinally: V,
      onReject: B,
      onResolve: $,
      throttle: t?.throttle ?? void 0,
      wait: t?.debounce ?? void 0
    }), [Y, ee]);
    return G(() => () => re(), [re]), {
      syncHandler: te,
      pending: n,
      result: a,
      error: f,
      hasError: i || !1,
      hasResult: p || !1,
      resolveCount: D,
      rejectCount: M,
      settleCount: L,
      debouncingAsync: v,
      debouncingSync: C,
      invocationResult: x,
      callCount: E,
      flushDebouncedPromise: pe
    };
  }

  // ../dist/dom-helpers/use-async-handler.js
  function St({ asyncHandler: e, capture: t, ...n }) {
    R(St);
    let [r, o, a] = N(void 0), [s, u] = N(!1), f = P((m) => {
      let l = t(m);
      return o(l), u(!0), [l, m];
    });
    return {
      getCurrentCapture: a,
      currentCapture: r,
      hasCapture: s,
      ...Yt(e, { capture: f, ...n })
    };
  }

  // ../dist/component-use/use-press.js
  function Uc() {
    return "onpointerup" in window;
  }
  function Et(e) {
    R(Et);
    let { refElementReturn: { getElement: t }, pressParameters: { focusSelf: n, onPressSync: r, allowRepeatPresses: o, longPressThreshold: a, excludeEnter: s, excludePointer: u, excludeSpace: f, onPressingChange: m } } = e, l = P(s ?? ve), i = P(f ?? ve), d = P(u ?? ve), h = P(m ?? Wt), [p, b] = q(h, ve), g = r != null, [v, _] = q(P((F, z, J) => {
      if (F) {
        let _e = setTimeout(() => {
          _(!1, J);
        }, 1);
        return clearTimeout(_e);
      }
    }), ve), [C, y] = N(null), [x, S, E] = N(!1), [T, L, w] = N(!1), [D, I, M] = N(!1), O = P((F) => {
      F.preventDefault(), F.stopPropagation(), b(!0, F), L(!0), I(!0), y(!1);
      let z = t();
      z && n(z);
    }), j = k((F) => {
      F.preventDefault(), F.stopPropagation();
      let z = t(), J = F.touches[0], _e = [
        [0, 0],
        [-J.radiusX || 0, -J.radiusY || 0],
        [+J.radiusX || 0, -J.radiusY || 0],
        [-J.radiusX || 0, +J.radiusY || 0],
        [+J.radiusX || 0, +J.radiusY || 0]
      ], ye = !1;
      for (let [Fe, at] of _e) {
        let Tt = document.elementFromPoint((J?.clientX ?? 0) + Fe, (J?.clientY ?? 0) + at);
        ye ||= z?.contains(Tt) ?? !1;
      }
      b(ye && w(), F), I(ye);
    }, []), $ = k((F) => {
      F.preventDefault(), F.stopPropagation();
      let z = M(), J = w();
      _(!0, F), J && z && ne(F), S(!1), I(!1), L(!1), b(!1, F);
    }, []), B = P((F) => {
      if (!d() && F.buttons & 1) {
        F.preventDefault(), F.stopPropagation(), b(!0, F), L(!0), I(!0), y(!1);
        let z = t();
        z && n(z);
      }
    }), V = P((F) => {
      let z = w();
      if (F.buttons & 1 || L(z = !1), z) {
        let J = t(), _e = document.elementFromPoint(F.clientX, F.clientY), ye = J == _e || J?.contains(_e) || !1;
        I(ye), b(ye && w(), F);
      }
    }), Y = k((F) => {
      let z = M(), J = w();
      d() || (_(!0, F), J && z && (ne(F), F.preventDefault(), F.stopPropagation())), S(!1), I(!1), L(!1), y(!1), b(!1, F);
    }, []), ee = k((F) => {
      I(!0);
    }, []), ue = k((F) => {
      I(!1), y(!1);
    }, []);
    qe({
      callback: () => {
        let F = t();
        y(T && M()), F && T && M() && (n(F), a && (S(!1), I(!1), L(!1)));
      },
      timeout: a ?? null,
      triggerIndex: C ? !0 : T && M()
    });
    let ne = P((F) => {
      if (S(!1), I(!1), L(!1), y(null), r) {
        let z = t();
        z && n(z), F.preventDefault(), F.stopPropagation();
        try {
          jc();
        } finally {
          r(F);
        }
      }
    }), ge = P((F) => {
      r && (F.key == " " && !i() && (S(!0), b(!0, F), F.preventDefault()), F.key == "Enter" && !l() && (!F.repeat || (o ?? !1)) && (b(!0, F), ne(F), requestAnimationFrame(() => {
        b(!1, F);
      })));
    }), pe = P((F) => {
      E() && F.key == " " && !i() && (ne(F), b(!1, F));
    }), te = P((F) => {
      let z = t();
      if (r) {
        if (F.preventDefault(), F.detail > 1)
          "stopImmediatePropagation" in F && F.stopImmediatePropagation(), F.stopPropagation();
        else if (
          // Ignore the click events that were *just* handled with pointerup
          v() == !1 && // Ignore stray click events that were't fired SPECIFICALLY on this element
          F.target == z && // Ignore click events that were fired on a radio that just became checked
          // (Whenever the `checked` property is changed, all browsers fire a `click` event, no matter the reason for the change,
          // but since everything's declarative and *we* were the reason for the change, 
          // this will always be a duplicate event related to whatever we just did.)
          z?.tagName == "input" && z.type == "radio" && z.checked
        ) {
          debugger;
          console.log("onclick was fired and will be handled as it doesn't look like it came from a pointer event", F), b(!0, F), requestAnimationFrame(() => {
            b(!1, F), ne(F);
          }), ne(F);
        }
      }
    }), re = P((F) => {
      S(!1), b(!1, F);
    }), X = Uc();
    return {
      pressReturn: {
        pressing: T && D || x || !1,
        getIsPressing: p,
        longPress: C
      },
      props: {
        onKeyDown: ge,
        onKeyUp: pe,
        onTouchStart: g ? X ? void 0 : O : void 0,
        onTouchCancel: g ? X ? void 0 : $ : void 0,
        onTouchMove: g ? X ? void 0 : j : void 0,
        onTouchEnd: g ? X ? void 0 : $ : void 0,
        onPointerDown: g && X ? B : void 0,
        onPointerCancel: g && X ? B : void 0,
        onPointerMove: !T || !g ? void 0 : X ? V : void 0,
        onPointerUp: g && X ? Y : void 0,
        onPointerEnter: g && X ? ee : void 0,
        onPointerLeave: g && X ? ue : void 0,
        [jt]: re,
        onClick: te
      }
    };
  }
  var jc = "vibrate" in navigator && navigator.vibrate instanceof Function ? () => navigator.vibrate(10) : () => {
  };

  // ../dist/component-use/use-random-id.js
  function Zt({ randomIdParameters: { prefix: e, otherReferencerProp: t } }) {
    R(Zt);
    let n = e + Ht();
    Z("useRandomId", e, n);
    let r = A(t == null ? {} : { [t]: n }), o = A({ id: n });
    return Z("useRandomIdReferencerElement", t), {
      propsReferencer: r.current,
      propsSource: o.current,
      randomIdReturn: {
        id: n
      }
    };
  }

  // ../dist/component-use/use-random-dual-ids.js
  function mr({ randomIdInputParameters: e, randomIdLabelParameters: t }) {
    R(mr);
    let { randomIdReturn: n, propsReferencer: r, propsSource: o } = Zt({ randomIdParameters: e }), { randomIdReturn: a, propsReferencer: s, propsSource: u } = Zt({ randomIdParameters: t });
    return {
      propsLabel: W(r, u),
      propsInput: W(s, o),
      randomIdInputReturn: n,
      randomIdLabelReturn: a
    };
  }

  // ../dist/dom-helpers/use-draggable.js
  function pr({ effectAllowed: e, data: t, dragImage: n, dragImageXOffset: r, dragImageYOffset: o }) {
    R(pr);
    let [a, s, u] = N(!1), [f, m, l] = N(null);
    return {
      propsUnstable: {
        draggable: !0,
        onDragStart: (p) => {
          if (s(!0), p.dataTransfer) {
            p.dataTransfer.effectAllowed = e ?? "all", n && p.dataTransfer.setDragImage(n, r ?? 0, o ?? 0);
            let b = Object.entries(t);
            for (let [g, v] of b)
              p.dataTransfer.setData(g, v);
          }
        },
        onDragEnd: (p) => {
          p.preventDefault(), s(!1), p.dataTransfer && (p.dataTransfer.dropEffect != "none" ? m(p.dataTransfer.dropEffect) : m(null));
        }
      },
      dragging: a,
      getDragging: u,
      lastDropEffect: f,
      getLastDropEffect: l
    };
  }

  // ../dist/dom-helpers/use-droppable.js
  var en = class extends Error {
    fileName;
    errorType;
    constructor(t, n) {
      super(n?.message ?? "An unspecified error occurred reading the file."), this.fileName = t, this.errorType = n?.name;
    }
  };
  function hr({ effect: e }) {
    R(hr);
    let [t, n] = N(null), [r, o] = N(null), [a, s] = N(null), [u, f] = N(null), [m, l] = N(void 0), i = A([]), [d, h, p] = N(-1), [b, g, v] = N(0);
    G(() => {
      let E = p(), T = v();
      T > 0 && E + 1 < T && h((L) => ++L);
    }, [b]), G(() => {
      d >= 0 && i.current[d].then((T) => {
        if (T !== null) {
          let { files: D, strings: I } = T;
          s(D), f(I);
        }
        let L = p(), w = v();
        L + 1 < w && h((D) => ++D);
      });
    }, [d]);
    let _ = P((E) => {
      if (E.preventDefault(), E.dataTransfer) {
        E.dataTransfer.dropEffect = e ?? "move";
        let T = /* @__PURE__ */ new Set(), L = new Array();
        for (let w of E.dataTransfer?.items ?? []) {
          let { kind: D, type: I } = w;
          D === "string" ? T.add(I) : D === "file" && L.push({ type: w.type });
        }
        n(L), o(T);
      }
    }), C = P((E) => {
      E.preventDefault(), n(null), o(null);
    }), y = P((E) => {
      E.preventDefault();
    }), x = P((E) => {
      E.preventDefault(), n(null), o(null);
      let T = new Array(), L = {}, w = [];
      for (let D of E.dataTransfer?.items ?? []) {
        let { kind: I, type: M } = D;
        if (I === "string")
          T.push(new Promise((O, j) => D.getAsString(O)).then((O) => L[M] = O));
        else if (I === "file") {
          let O = D.getAsFile();
          O && (T.push(new Promise((j, $) => {
            let B = new FileReader();
            B.onload = (V) => {
              j();
              let Y = B.result;
              w.push({ data: Y, name: O.name, type: O.type, size: Y.byteLength, lastModified: O.lastModified });
            }, B.onerror = (V) => {
              $(new en(O.name, B.error));
            }, B.onabort = (V) => {
              $(new en(O.name, B.error));
            }, B.readAsArrayBuffer(O);
          })), w.push());
        }
      }
      i.current.push(Promise.all(T).then(() => (g((D) => ++D), l(null), {
        strings: L,
        files: w
      })).catch((D) => {
        debugger;
        return g((I) => ++I), l(D), null;
      }));
    });
    return {
      propsStable: A({ onDragEnter: _, onDragLeave: C, onDragOver: y, onDrop: x }).current,
      filesForConsideration: t,
      stringsForConsideration: r,
      droppedFiles: a,
      droppedStrings: u,
      dropError: m
    };
  }

  // ../dist/dom-helpers/use-imperative-props.js
  var ho = null;
  function Gc(e, t) {
    let n = e.ownerDocument;
    return ho ??= n.createElement("template"), ho.innerHTML = t.trim(), ho.content.firstChild;
  }
  var Bc = bn(vn(Wc));
  function go({ refElementReturn: { getElement: e } }) {
    R(go);
    let t = A({ className: /* @__PURE__ */ new Set(), style: {}, children: null, html: null, others: {} }), n = k((i) => t.current.className.has(i), []), r = k((i, d) => {
      n(i) == !d && (e()?.classList[d ? "add" : "remove"](i), t.current.className[d ? "add" : "delete"](i));
    }, []), o = k((i, d) => {
      let h = e();
      h && t.current.style[i] != d && (t.current.style[i] = d, i.startsWith("--") ? d != null ? h.style.setProperty(i, `${d}`) : h.style.removeProperty(i) : h.style[i] = d ?? "");
    }, []), a = k((i) => {
      let d = e();
      d && t.current.children != i && (t.current.children = i, t.current.html = null, d.textContent = i);
    }, []), s = k((i) => {
      let d = e();
      d && t.current.html != i && (t.current.children = null, t.current.html = i, d.innerHTML = i);
    }, []), u = k((i) => {
      let d = e();
      if (d && i) {
        let h = Gc(d, i);
        if (console.assert(h && h instanceof Node), h && h instanceof Node)
          return t.current.children = null, t.current.html ||= "", t.current.html += i, d.appendChild(h), h;
      }
      return null;
    }, []), f = k((i) => t.current.others[i], []), m = k((i, d) => {
      d != null ? f(i) != d && (t.current.others[i] = d, e()?.setAttribute(i, d)) : f(i) != null && (delete t.current.others[i], e()?.removeAttribute(i));
    }, []), l = k((i, d, h) => {
      let p = e(), b = Vr[i];
      p && (d ? (p.addEventListener(i, d, h), t.current.others[b] = d) : t.current.others[b] && (p.removeEventListener(i, t.current.others[b], h), t.current.others[b] = void 0));
    }, []);
    return {
      imperativePropsReturn: A({
        hasClass: n,
        setClass: r,
        setStyle: o,
        getAttribute: f,
        setAttribute: m,
        setEventHandler: l,
        setChildren: a,
        dangerouslySetInnerHTML: s,
        dangerouslyAppendHTML: u
      }).current,
      props: W({ className: [...t.current.className].join(" "), style: t.current.style }, t.current.html ? { dangerouslySetInnerHTML: { __html: t.current.html } } : {}, { children: t.current.children }, t.current.others)
    };
  }
  function Wc({ tag: e, handle: t, ...n }, r) {
    let { propsStable: o, refElementReturn: a } = se({ refElementParameters: {} }), { props: s, imperativePropsReturn: u } = go({ refElementReturn: a });
    return Ot(t, () => u), fe(e, W(o, s, n, { ref: r }));
  }

  // ../dist/util/random-id.js
  var Vc = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_-";
  function $c(e) {
    return Vc[e];
  }
  function Le() {
    return Math.floor(Math.random() * 64);
  }
  function zc() {
    return [Le(), Le(), Le(), Le(), Le(), Le(), Le(), Le(), Le(), Le(), Le()];
  }
  function _o(e) {
    return `${e ?? "id-"}${zc().map((t) => $c(t)).join("")}`;
  }

  // ../dist/dom-helpers/use-portal-children.js
  function gr({ target: e }) {
    R(gr);
    let [t, n] = N(null), [r, o] = N(null), [a, s] = N(null), u = P((d) => t?.(d) ?? -1), f = P((d, h) => r?.(d, h)), m = P((d) => a?.(d)), l = ce(() => e == null ? null : typeof e == "string" ? document.getElementById(e) : e, [e]);
    return {
      children: l ? Cn(fe(qc, { setPushChild: n, setUpdateChild: o, setRemoveChild: s }), l) : null,
      pushChild: u,
      updateChild: f,
      removeChild: m,
      portalElement: l
    };
  }
  function qc({ setPushChild: e, setUpdateChild: t, setRemoveChild: n }) {
    let [r, o, a] = N([]), s = k((m) => {
      let l = _o(), i = a().length;
      return o((d) => [...d, ut(m, { key: l, index: i })]), i;
    }, []), u = k((m, l) => {
      let i = a()[m]?.key;
      if (console.assert(!!i), i)
        return o((d) => {
          let h = d.slice();
          return h.splice(m, 1, ut(l, { key: i, index: m })), h;
        }), m;
    }, []), f = k((m) => {
      let l = a()[m]?.key;
      if (console.assert(!!l), l)
        return o((i) => {
          let d = i.slice();
          return d.splice(m, 1), d;
        }), m;
    }, []);
    return oe(() => {
      e((m) => s);
    }, [s]), oe(() => {
      t((m) => u);
    }, [u]), oe(() => {
      n((m) => f);
    }, [f]), fe(Se, {}, r);
  }

  // ../dist/observers/use-has-last-focus.js
  function _r(e) {
    R(_r);
    let { refElementReturn: { getElement: t }, activeElementParameters: { onLastActiveElementChange: n, ...r }, hasLastFocusParameters: { onLastFocusedChanged: o, onLastFocusedInnerChanged: a, ...s } } = e;
    Z("useHasFocus", o, a);
    let [u, f] = q(o, ve, me), [m, l] = q(a, ve, me), { activeElementReturn: i } = Je({
      activeElementParameters: {
        onLastActiveElementChange: k((d, h, p) => {
          let b = t(), g = b != null && b == d, v = !!b?.contains(d);
          f(g, p), l(v, p), n?.(d, h, p);
        }, []),
        ...r
      }
    });
    return G(() => () => {
      f(!1, void 0), l(!1, void 0);
    }, []), {
      activeElementReturn: i,
      hasLastFocusReturn: {
        getLastFocused: u,
        getLastFocusedInner: m
      }
    };
  }

  // ../dist/observers/use-logical-direction.js
  var Kc = {
    inlineDirection: "ltr",
    blockDirection: "ttb",
    inlineOrientation: "horizontal",
    blockOrientation: "vertical",
    inlineSize: "width",
    blockSize: "height",
    leftRightDirection: "ltr",
    overUnderDirection: "ttb"
  }, ky = {
    ...Kc,
    inlineDirection: "rtl"
  }, bo = {
    inlineDirection: "ttb",
    blockDirection: "rtl",
    inlineOrientation: "vertical",
    blockOrientation: "horizontal",
    inlineSize: "height",
    blockSize: "width",
    leftRightDirection: "ttb",
    overUnderDirection: "rtl"
  }, rs = {
    ...bo,
    inlineDirection: "btt"
  }, Ny = { ...bo }, Dy = { ...rs }, Jc = {
    ...bo,
    blockDirection: "ltr"
  }, Ly = {
    ...rs,
    blockDirection: "ltr"
  }, Xc = {
    ...Jc,
    inlineDirection: "btt",
    leftRightDirection: "btt",
    overUnderDirection: "ltr"
  }, Fy = {
    ...Xc,
    inlineDirection: "ttb"
  };

  // ../dist/timing/use-animation-frame.js
  var Ix = ct(null);

  // ../dist/timing/use-interval.js
  function br({ interval: e, callback: t }) {
    R(br);
    let n = P(t), r = Q(e);
    G(() => {
      let o = r(), a = o;
      if (o == null)
        return;
      let s = () => {
        n();
        let f = r();
        f != a && (clearInterval(u), f != null && (u = setInterval(s, a = f)));
      }, u = setInterval(s, o);
      return () => clearInterval(u);
    }, []);
  }

  // node_modules/.pnpm/preact@10.16.0/node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js
  var td = 0;
  function c(e, t, n, r, o, a) {
    var s, u, f = {};
    for (u in t)
      u == "ref" ? s = t[u] : f[u] = t[u];
    var m = { type: e, props: f, key: n, ref: s, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --td, __source: o, __self: a };
    if (typeof e == "function" && (s = e.defaultProps))
      for (u in s)
        f[u] === void 0 && (f[u] = s[u]);
    return U.vnode && U.vnode(m), m;
  }

  // demos/use-grid.tsx
  var nd = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.".split(" "), rd = xe(null), od = xe(null), os = xe(null), as = be(() => {
    let [e, t, n] = N(null), [r, o, a] = N(null), [s, u] = N(null), [f, m, l] = N(null), i = uo({
      // `useRovingTabIndex` is a separate hook that you could call with these same parameters:
      rovingTabIndexParameters: {
        // If true, the entire grid is removed from the tab order
        untabbable: !1,
        // A function provided by you that is only called when no children are tabbable
        focusSelfParent: De,
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
        onSingleSelectedIndexChange: (j) => o(j[je].selectedIndex)
      },
      gridNavigationParameters: {
        // This can be used by you to track which 0-indexed column is currently the one with focus.
        onTabbableColumnChange: t
      },
      rearrangeableChildrenParameters: {
        // This must return a VNode's 0-based index from its props
        getIndex: ke((j) => j.props.index, [])
      },
      sortableChildrenParameters: {
        // Controls how rows compare against each other
        compare: ke((j, $) => $.index - j.index, [])
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
      context: h,
      // This is what `useRovingTabIndex` returned; use it for whatever you need:
      rovingTabIndexReturn: {
        // Call to focus the grid, which focuses the current row, which focuses its current cell.
        focusSelf: p,
        // Returns the index of the row that is tabbable to
        getTabbableIndex: b,
        // Changes which row is currently tabbable
        setTabbableIndex: g
      },
      // This is what `useTypeaheadNavigation` returned; use it for whatever you need:
      typeaheadNavigationReturn: {
        // Returns the current value the user has typed for typeahead (cannot be used during render)
        getCurrentTypeahead: v,
        // Whether the user's typeahead is invalid/valid/nonexistent.
        typeaheadStatus: _
      },
      // (etc. etc.)
      singleSelectionReturn: {
        // Largely convenience only (since the caller likely already knows the selected index, but just in case)
        getSingleSelectedIndex: C
      },
      multiSelectionReturn: {
        // Nothing, actually
      },
      rearrangeableChildrenReturn: {
        // You must call this hook on your array of children to implement the sorting behavior
        useRearrangedChildren: y,
        // Largely internal use only
        indexDemangler: x,
        // Largely internal use only
        indexMangler: S,
        // Largely internal use only, but if you implement a custom sorting algorithm, call this to finalize the rearrangement. 
        rearrange: E,
        // Reverses all children 
        reverse: T,
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
        refreshPagination: I
      },
      staggeredChildrenReturn: {
        // When the staggering behavior is currently hiding one or more children, this is true.
        stillStaggering: M
      },
      childrenHaveFocusReturn: {
        // Returns true if any row in this grid is focused
        getAnyFocused: O
      }
    } = i;
    return /* @__PURE__ */ c("div", { class: "demo", children: [
      /* @__PURE__ */ c("h2", { children: "useGridNavigationComplete" }),
      /* @__PURE__ */ c("p", { children: [
        "Like ",
        /* @__PURE__ */ c("code", { children: "useCompleteListNavigation" }),
        " but for 2D navigation. Cells can span multiple columns. Rows can be filtered, sorted, and arbitrarily re-arranged."
      ] }),
      /* @__PURE__ */ c("div", { children: [
        "Current row: ",
        s
      ] }),
      /* @__PURE__ */ c("div", { children: [
        "Current column: ",
        e?.actual,
        e?.ideal != e?.actual ? ` (wanted: ${e?.ideal})` : ""
      ] }),
      /* @__PURE__ */ c("table", { border: "2", style: { whiteSpace: "nowrap" }, children: [
        /* @__PURE__ */ c("thead", { children: /* @__PURE__ */ c("tr", { children: [
          /* @__PURE__ */ c("th", { children: "Row is tabbable?" }),
          /* @__PURE__ */ c("th", { children: "Column 1" }),
          /* @__PURE__ */ c("th", { children: "Column 2" }),
          /* @__PURE__ */ c("th", { children: "Column 3" })
        ] }) }),
        /* @__PURE__ */ c(rd.Provider, { value: f, children: /* @__PURE__ */ c(os.Provider, { value: l, children: /* @__PURE__ */ c(od.Provider, { value: m, children: /* @__PURE__ */ c(is.Provider, { value: h, children: /* @__PURE__ */ c("tbody", { ...d, children: y(
          Array.from(function* () {
            for (let j = 0; j < 10; ++j)
              yield /* @__PURE__ */ c(ad, { index: j }, j);
          }())
        ) }) }) }) }) })
      ] })
    ] });
  }), is = xe(null), ss = xe(null);
  var ad = be(({ index: e }) => {
    let [t] = N(() => nd[
      e
      /*Math.floor(Math.random() * (RandomWords.length - 1))*/
    ]), [n, r, o] = N(null), a = e === 3, s = a, u = Me(os), f = Me(is), m = ur({
      context: f,
      info: { index: e, foo: "bar", untabbable: a },
      textContentParameters: { getText: ke((h) => h?.textContent ?? "", []) },
      linearNavigationParameters: { navigatePastEnd: "wrap", navigatePastStart: "wrap" },
      rovingTabIndexParameters: { onTabbableIndexChange: P((h) => {
        r(h);
      }), untabbable: !1, initiallyTabbedIndex: 0 },
      typeaheadNavigationParameters: { collator: null, noTypeahead: !1, typeaheadTimeout: 1e3, onNavigateTypeahead: null },
      hasCurrentFocusParameters: { onCurrentFocusedChanged: null, onCurrentFocusedInnerChanged: null },
      gridNavigationSelectionSortableRowParameters: { getSortableColumnIndex: u },
      singleSelectionChildParameters: { singleSelectionDisabled: !1 },
      multiSelectionChildParameters: { initiallyMultiSelected: !1, onMultiSelectChange: null, multiSelectionDisabled: !1 }
    }), {
      props: l,
      context: i,
      rovingTabIndexChildReturn: { tabbable: d }
    } = m;
    return /* @__PURE__ */ c("tr", { ...l, "data-tabbable": m.rovingTabIndexChildReturn.tabbable, children: /* @__PURE__ */ c(ss.Provider, { value: i, children: [
      /* @__PURE__ */ c("td", { children: [
        n,
        ", ",
        d.toString()
      ] }),
      Array.from(function* () {
        for (let h = 0; h < 3; ++h)
          yield /* @__PURE__ */ c(id, { index: h, row: e, rowIsTabbable: d }, h);
      }())
    ] }) });
  }), id = ({ index: e, row: t, rowIsTabbable: n }) => {
    if (t >= 6 && t % 2 == 0 && e > 1)
      return null;
    let r = t === 3 ? " (row hidden)" : "", o = Me(ss), {
      props: a,
      rovingTabIndexChildReturn: { tabbable: s }
    } = cr({
      gridNavigationCellParameters: { colSpan: 1 },
      info: { index: e, bar: "baz", focusSelf: P((f) => f.focus()), untabbable: !1, getSortValue: Q(e) },
      context: o,
      textContentParameters: { getText: ke((f) => f?.textContent ?? "", []) }
    }), u = s ? "(Tabbable)" : "(Not tabbable)";
    return e === 0 ? /* @__PURE__ */ c("td", { ...a, children: n.toString() }) : t < 6 || t % 2 != 0 ? e === 1 ? /* @__PURE__ */ c("td", { ...a, children: [
      "Grid cell #",
      e + 1,
      " ",
      u,
      r
    ] }) : /* @__PURE__ */ c("td", { children: /* @__PURE__ */ c("label", { children: [
      /* @__PURE__ */ c("button", { ...a, type: "button", children: "Select row" }),
      " ",
      u,
      r
    ] }) }) : e === 1 ? /* @__PURE__ */ c("td", { ...a, colSpan: 2, children: [
      "Grid cell #",
      e + 1,
      ", span 2 ",
      u,
      r
    ] }) : null;
  };

  // demos/use-modal.tsx
  function sd() {
    return globalThis.document;
  }
  function vr(e) {
    let t = e.parentDepth ?? 0, n = t + 1, r = Nt(null), [o, a] = Ie(!0), [s, u] = Ie(!0), [f, m] = Ie(!0), [l, i] = Ie(!0), [d, h] = Ie(!1), [p, b] = Ie(null), [g, v] = Ie(!1), _ = () => r.current?.focus(), {
      propsStablePopup: C,
      propsStableSource: y,
      propsFocusContainer: x
    } = dr({
      focusTrapParameters: {
        trapActive: l,
        onlyMoveFocus: !1,
        focusOpener: _,
        focusPopup: P((S, E) => E()?.focus())
      },
      dismissParameters: {
        onDismiss: P((S, E) => {
          b(E), v(!1);
        }),
        dismissActive: !0
      },
      escapeDismissParameters: { parentDepth: t, dismissEscapeActive: !0, onDismissEscape: null },
      backdropDismissParameters: { dismissBackdropActive: !0, onDismissBackdrop: null },
      lostFocusDismissParameters: { dismissLostFocusActive: !0, onDismissLostFocus: null },
      modalParameters: { active: g },
      refElementParameters: {},
      activeElementParameters: { getDocument: sd, onActiveElementChange: null, onLastActiveElementChange: null, onWindowFocusedChange: null }
    });
    return /* @__PURE__ */ c("div", { style: { border: `${n}px solid black` }, children: [
      /* @__PURE__ */ c("div", { children: "useModal demo:" }),
      /* @__PURE__ */ c("div", { style: "display: flex; flex-direction: column", children: [
        /* @__PURE__ */ c("label", { children: [
          /* @__PURE__ */ c("input", { type: "checkbox", disabled: !0, checked: !0 }),
          " Close by setting open to false"
        ] }),
        /* @__PURE__ */ c("label", { children: [
          /* @__PURE__ */ c("input", { type: "checkbox", checked: o, onInput: (S) => a(S.currentTarget.checked) }),
          " Close on backdrop click"
        ] }),
        /* @__PURE__ */ c("label", { children: [
          /* @__PURE__ */ c("input", { type: "checkbox", checked: s, onInput: (S) => u(S.currentTarget.checked) }),
          " Close on Escape key press"
        ] }),
        /* @__PURE__ */ c("label", { children: [
          /* @__PURE__ */ c("input", { type: "checkbox", checked: f, onInput: (S) => m(S.currentTarget.checked) }),
          " Close on focus lost"
        ] }),
        /* @__PURE__ */ c("label", { children: [
          /* @__PURE__ */ c("input", { type: "checkbox", checked: l, onInput: (S) => i(S.currentTarget.checked) }),
          " Trap focus"
        ] }),
        /* @__PURE__ */ c("br", {})
      ] }),
      /* @__PURE__ */ c("div", { children: [
        "Last reason for closing: ",
        p ?? "(hasn't been closed yet)"
      ] }),
      /* @__PURE__ */ c("button", { ...y, onClick: () => v(!0), children: "Open Modal" }),
      /* @__PURE__ */ c("div", { ...W(x, C), style: `border: ${n}px dotted red; background: #ccc`, children: /* @__PURE__ */ c("div", { style: { display: g ? "flex" : "none", flexDirection: "column" }, children: [
        /* @__PURE__ */ c("div", { children: [
          "Modal element at depth ",
          n,
          " with ",
          d ? "a" : "no",
          " child"
        ] }),
        /* @__PURE__ */ c("label", { children: [
          /* @__PURE__ */ c("input", { type: "checkbox", checked: d, onInput: (S) => h(S.currentTarget.checked), ref: r }),
          " Add a child modal"
        ] }),
        d && /* @__PURE__ */ c(vr, { parentDepth: n }),
        /* @__PURE__ */ c("button", { ...y, onClick: () => v(!1), children: "Close modal programmatically" })
      ] }) })
    ] });
  }

  // demos/use-roving-tab-index.tsx
  var ld = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.".split(" ");
  var ud = xe("focus"), cd = xe("activation"), dd = xe(!1), ls = xe(null), us = be(() => {
    let [e, t] = N(0), [n, r] = N(null), [o, a] = N("focus"), [s, u] = N("activation"), [f, m] = N(10), [l, i] = N(null), [d, h] = N(null), [p, b] = N(!1);
    isFinite(l ?? NaN) || (l = null), isFinite(d ?? NaN) || (d = null);
    let g = !1, v = (I) => {
      t(I[je].selectedPercent);
    }, _ = mo({
      rovingTabIndexParameters: { onTabbableIndexChange: null, untabbable: g, focusSelfParent: De },
      singleSelectionDeclarativeParameters: { singleSelectedIndex: n, onSingleSelectedIndexChange: P((I) => {
        r(I[je].selectedIndex);
      }, []) },
      typeaheadNavigationParameters: { collator: null, noTypeahead: !1, typeaheadTimeout: 1e3, onNavigateTypeahead: null },
      linearNavigationParameters: { disableHomeEndKeys: !1, arrowKeyDirection: "vertical", navigatePastEnd: "wrap", navigatePastStart: "wrap", pageNavigationSize: 0.1, onNavigateLinear: null },
      rearrangeableChildrenParameters: {
        getIndex: ke((I) => I.props.index, [])
      },
      refElementParameters: {},
      paginatedChildrenParameters: { paginationMin: l, paginationMax: d },
      sortableChildrenParameters: { compare: ke((I, M) => M.index - I.index, []) },
      staggeredChildrenParameters: { staggered: p },
      singleSelectionParameters: { singleSelectionAriaPropName: "aria-selected", singleSelectionMode: o },
      multiSelectionParameters: { multiSelectionAriaPropName: "aria-checked", onSelectionChange: v, multiSelectionMode: s }
    }), {
      props: C,
      context: y,
      rovingTabIndexReturn: { setTabbableIndex: x },
      managedChildrenReturn: { getChildren: S },
      typeaheadNavigationReturn: { typeaheadStatus: E },
      rearrangeableChildrenReturn: { useRearrangedChildren: T, shuffle: L, reverse: w }
      //        rearrangeableChildrenReturn: { useRearrangedChildren: useSortableProps, shuffle }
    } = _, D = Array.from(function* () {
      for (let I = 0; I < f; ++I)
        yield /* @__PURE__ */ c(fd, { index: I }, I);
    }());
    return /* @__PURE__ */ c("div", { className: "demo", children: [
      /* @__PURE__ */ c("h2", { children: "Keyboard & List Navigation" }),
      /* @__PURE__ */ c("h3", { children: /* @__PURE__ */ c("code", { children: "useCompleteListNavigation" }) }),
      /* @__PURE__ */ c("p", { children: "This hook accomplishes a few things:" }),
      /* @__PURE__ */ c("ul", { children: [
        /* @__PURE__ */ c("li", { children: [
          "Turns a group of widgets into one singular composite widget with only ",
          /* @__PURE__ */ c("strong", { children: "a single tab stop" }),
          ' shared between them (a "roving" tab stop, because it wanders back and forth).'
        ] }),
        /* @__PURE__ */ c("li", { children: [
          "Navigation within this composite widget is done via:",
          /* @__PURE__ */ c("ul", { children: [
            /* @__PURE__ */ c("li", { children: "Arrow keys (up/down or left/right depending in the orientation you specify)" }),
            /* @__PURE__ */ c("li", { children: "Page Up/Down to jump by a larger amount (either a fixed number or some percentage of the total number of items, as you specify)" }),
            /* @__PURE__ */ c("li", { children: "Home/End to jump to the first or last item" })
          ] })
        ] }),
        /* @__PURE__ */ c("li", { children: 'Items can be marked as "hidden", in which case they are skipped over when navigating, no matter the method. E.G. if Home is pressed but the first item is hidden, the second item is focused instead.' }),
        /* @__PURE__ */ c("li", { children: 'Items can be marked as "disabled" to prevent selection (with or without also marking them as "hidden", though "hidden" implies "disabled").' }),
        /* @__PURE__ */ c("li", { children: "Children can be reordered arbitrarily, including sorting, shuffling, etc. while ensuring coherent navigation regardless." }),
        /* @__PURE__ */ c("li", { children: [
          "The parent's selected index is ",
          /* @__PURE__ */ c("strong", { children: "uncontrolled" }),
          " and so it does not re-render itself when the selected index changes (you can easily make it controlled, of course, at the cost of 1 additional render. See ",
          /* @__PURE__ */ c("code", { children: "useSingleSelectionDeclarative" }),
          " for a shortcut to do exactly that)"
        ] }),
        /* @__PURE__ */ c("li", { children: "Changing which child is focused or selected only re-renders a maximum of 2 children each time." }),
        /* @__PURE__ */ c("li", { children: [
          "Lists can be nested, and there is no strict requirement on DOM structure (except for sorting/rearranging children, if you use that).",
          /* @__PURE__ */ c("ul", { children: /* @__PURE__ */ c("li", { children: [
            "If you don't need sorting/rearranging this DOM requirement is ",
            /* @__PURE__ */ c("strong", { children: "optional" }),
            "; rearranging requires all children be in one contiguous array of VNodes so that their ",
            /* @__PURE__ */ c("code", { children: "key" }),
            " props can be manipulated."
          ] }) })
        ] })
      ] }),
      /* @__PURE__ */ c("p", { children: "The biggest restriction of this method is that every child needs a 0-based numeric index." }),
      /* @__PURE__ */ c("label", { children: [
        "# of items",
        /* @__PURE__ */ c("input", { type: "number", value: f, min: 0, onInput: (I) => {
          I.preventDefault(), m(I.currentTarget.valueAsNumber);
        } })
      ] }),
      /* @__PURE__ */ c("button", { onClick: () => L(), children: "Shuffle" }),
      /* @__PURE__ */ c("button", { onClick: () => {
        debugger;
        w();
      }, children: "Reverse" }),
      /* @__PURE__ */ c("label", { children: [
        "Imperatively set the tabbable index to: ",
        /* @__PURE__ */ c("input", { type: "number", onInput: (I) => {
          I.preventDefault(), x(I.currentTarget.valueAsNumber, I, !1);
        } })
      ] }),
      /* @__PURE__ */ c("label", { children: [
        "Imperatively set the selected index to: ",
        /* @__PURE__ */ c("input", { type: "number", onInput: (I) => {
          I.preventDefault(), r(I.currentTarget.valueAsNumber);
        } }),
        " (currently ",
        n,
        ")"
      ] }),
      /* @__PURE__ */ c("label", { children: [
        "Pagination window starts at: ",
        /* @__PURE__ */ c("input", { type: "number", value: l ?? void 0, min: 0, max: d ?? void 0, onInput: (I) => {
          I.preventDefault(), i(I.currentTarget.valueAsNumber);
        } })
      ] }),
      /* @__PURE__ */ c("label", { children: [
        "Pagination window ends at: ",
        /* @__PURE__ */ c("input", { type: "number", value: d ?? void 0, min: l ?? void 0, max: f, onInput: (I) => {
          I.preventDefault(), h(I.currentTarget.valueAsNumber);
        } })
      ] }),
      /* @__PURE__ */ c("label", { children: [
        "Stagger delay: ",
        /* @__PURE__ */ c("input", { type: "checkbox", checked: p, onInput: (I) => {
          I.preventDefault(), b(I.currentTarget.checked);
        } })
      ] }),
      /* @__PURE__ */ c("label", { children: [
        "Single-Selection mode:",
        /* @__PURE__ */ c("label", { children: [
          /* @__PURE__ */ c("input", { name: "rti-demo-single-selection-mode", type: "radio", checked: o == "disabled", onInput: (I) => {
            I.preventDefault(), a("disabled");
          } }),
          " Off"
        ] }),
        /* @__PURE__ */ c("label", { children: [
          /* @__PURE__ */ c("input", { name: "rti-demo-single-selection-mode", type: "radio", checked: o == "focus", onInput: (I) => {
            I.preventDefault(), a("focus");
          } }),
          " On focus"
        ] }),
        /* @__PURE__ */ c("label", { children: [
          /* @__PURE__ */ c("input", { name: "rti-demo-single-selection-mode", type: "radio", checked: o == "activation", onInput: (I) => {
            I.preventDefault(), a("activation");
          } }),
          " On activation (click, tap, Enter, Space, etc.)"
        ] })
      ] }),
      /* @__PURE__ */ c("label", { children: [
        "Multi-Selection mode:",
        /* @__PURE__ */ c("label", { children: [
          /* @__PURE__ */ c("input", { name: "rti-demo-multi-selection-mode", type: "radio", checked: s == "disabled", onInput: (I) => {
            I.preventDefault(), u("disabled");
          } }),
          " Off"
        ] }),
        /* @__PURE__ */ c("label", { children: [
          /* @__PURE__ */ c("input", { name: "rti-demo-multi-selection-mode", type: "radio", checked: s == "focus", onInput: (I) => {
            I.preventDefault(), u("focus");
          } }),
          " On focus"
        ] }),
        /* @__PURE__ */ c("label", { children: [
          /* @__PURE__ */ c("input", { name: "rti-demo-multi-selection-mode", type: "radio", checked: s == "activation", onInput: (I) => {
            I.preventDefault(), u("activation");
          } }),
          " On activation (click, tap, Enter, Space, etc.)"
        ] })
      ] }),
      /* @__PURE__ */ c("div", { children: [
        "Typeahead status: ",
        E
      ] }),
      /* @__PURE__ */ c("div", { children: [
        "Multi-select: ",
        Math.round(e * 100 * 10) / 10,
        "%"
      ] }),
      /* @__PURE__ */ c(dd.Provider, { value: g, children: /* @__PURE__ */ c(ud.Provider, { value: o, children: /* @__PURE__ */ c(cd.Provider, { value: s, children: /* @__PURE__ */ c(ls.Provider, { value: y, children: /* @__PURE__ */ c("ol", { start: 0, ...C, children: T(D) }) }) }) }) })
    ] });
  });
  var fd = be(({ index: e }) => {
    if (e == 1)
      return /* @__PURE__ */ c("li", { children: [
        "(Item ",
        e,
        " is a ",
        /* @__PURE__ */ c("strong", { children: "hole in the array" }),
        " and does not exist)"
      ] });
    let t = e == 6, n = e == 7;
    e == 8 && (t = n = !0);
    let [r, o] = N(!1), [a] = N(() => ld[e]), s = Me(ls), u = ke((M) => {
      M.focus();
    }, []), f = P(() => e), {
      hasCurrentFocusReturn: m,
      managedChildReturn: l,
      propsChild: i,
      propsTabbable: d,
      textContentReturn: h,
      rovingTabIndexChildReturn: { tabbable: p },
      singleSelectionChildReturn: { singleSelected: b, getSingleSelected: g, singleSelectedOffset: v, getSingleSelectedOffset: _ },
      multiSelectionChildReturn: { getMultiSelected: C },
      paginatedChildReturn: { hideBecausePaginated: y },
      staggeredChildReturn: { hideBecauseStaggered: x },
      pressParameters: { onPressSync: S, excludeSpace: E },
      refElementReturn: T
    } = po({
      info: { index: e, focusSelf: u, foo: "bar", untabbable: n, getSortValue: f },
      context: s,
      textContentParameters: { getText: ke((M) => M?.textContent ?? "", []) },
      hasCurrentFocusParameters: { onCurrentFocusedChanged: null, onCurrentFocusedInnerChanged: null },
      refElementParameters: { onElementChange: null, onMount: null, onUnmount: null },
      multiSelectionChildParameters: { multiSelectionDisabled: t },
      singleSelectionChildParameters: { singleSelectionDisabled: t },
      multiSelectionChildDeclarativeParameters: { multiSelected: r, onMultiSelectedChange: (M) => o(M[je].multiSelected) }
    }), { pressReturn: L, props: w } = Et({ pressParameters: { focusSelf: u, onPressSync: S, excludeSpace: E, allowRepeatPresses: !1, excludeEnter: null, excludePointer: null, longPressThreshold: null, onPressingChange: null }, refElementReturn: T }), I = `${a} This is item #${e} (offset: ${b}) ${n ? " (hidden)" : ""}${t ? " (disabled)" : ""}${b && r ? " (single- & multi- selected)" : b ? " (single-selected)" : r ? " (multi-selected)" : ""} (${p ? "Tabbable" : "Not tabbable"})`;
    return /* @__PURE__ */ c("li", { ...W(i, d, w), style: { opacity: y ? 0.25 : 1, transform: `translateX(${x ? "50%" : "0%"})` }, children: [
      I,
      /* @__PURE__ */ c("input", { ...W(d, { type: "number" }), style: { width: "5ch" } })
    ] });
  });

  // demos/use-timeout.tsx
  var cs = () => {
    let [e, t] = Ie(1e3), [n, r] = Ie(""), [o, a] = Ie(0);
    return qe({ timeout: e, triggerIndex: n, callback: () => a((s) => ++s) }), /* @__PURE__ */ c("div", { class: "demo", children: [
      /* @__PURE__ */ c("h2", { children: "useTimeout" }),
      /* @__PURE__ */ c("p", { children: [
        /* @__PURE__ */ c("code", { children: "useEffect" }),
        " but on a timer"
      ] }),
      /* @__PURE__ */ c("label", { children: [
        "Timeout duration: ",
        /* @__PURE__ */ c("input", { type: "number", value: e, onInput: (s) => t(s.currentTarget.valueAsNumber) })
      ] }),
      /* @__PURE__ */ c("label", { children: [
        "Refresh key: ",
        /* @__PURE__ */ c("input", { type: "text", value: n, onInput: (s) => r(s.currentTarget.value) })
      ] }),
      /* @__PURE__ */ c("div", { children: [
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
  var md = () => {
    let { droppedFiles: e, droppedStrings: t, filesForConsideration: n, stringsForConsideration: r, propsStable: o, dropError: a } = hr({ effect: "copy" }), { ref: s } = W({}, { ref: Nt(null) }), u = W(o, { className: "demo droppable" });
    return /* @__PURE__ */ c("div", { ...u, children: [
      t != null && /* @__PURE__ */ c("div", { children: [
        "Data dropped: ",
        /* @__PURE__ */ c("ul", { children: Object.entries(t).map(([f, m]) => /* @__PURE__ */ c("li", { children: [
          f,
          ": ",
          m
        ] })) })
      ] }),
      e != null && /* @__PURE__ */ c("div", { children: [
        "Files dropped: ",
        /* @__PURE__ */ c("table", { children: [
          /* @__PURE__ */ c("thead", { children: /* @__PURE__ */ c("tr", { children: [
            /* @__PURE__ */ c("th", { children: "Name" }),
            /* @__PURE__ */ c("th", { children: "Size" }),
            /* @__PURE__ */ c("th", { children: "Type" }),
            /* @__PURE__ */ c("th", { children: "Last modified" })
          ] }) }),
          /* @__PURE__ */ c("tbody", { children: e.map((f) => /* @__PURE__ */ c("tr", { children: [
            /* @__PURE__ */ c("td", { children: f.name }),
            f.data.byteLength,
            /* @__PURE__ */ c("td", { children: f.type }),
            /* @__PURE__ */ c("td", { children: new Date(f.lastModified ?? 0) })
          ] })) })
        ] })
      ] }),
      /* @__PURE__ */ c("hr", {}),
      r != null && /* @__PURE__ */ c("div", { children: [
        "Data being considered: ",
        /* @__PURE__ */ c("ul", { children: Array.from(r).map((f) => /* @__PURE__ */ c("li", { children: f })) })
      ] }),
      n != null && /* @__PURE__ */ c("div", { children: [
        "Files being considered: ",
        /* @__PURE__ */ c("ul", { children: n.map((f) => /* @__PURE__ */ c("li", { children: JSON.stringify(f) })) })
      ] }),
      /* @__PURE__ */ c("hr", {}),
      a ? /* @__PURE__ */ c("div", { children: a instanceof Error ? a.message : JSON.stringify(a) }) : null
    ] });
  }, pd = () => {
    let { propsUnstable: e } = pr({ data: { "text/plain": "This is custom draggable content of type text/plain." }, dragImage: null, dragImageXOffset: null, dragImageYOffset: null, effectAllowed: null });
    return /* @__PURE__ */ c("div", { ...W(e, { className: "demo" }), children: "Draggable content" });
  }, ds = xe(null), hd = () => {
    let [e, t] = N(!1), [n, r] = N(10), [o, a] = N(5), [s, u] = N(o);
    br({
      callback: () => {
        e && (s == o ? u(n) : u(s - 1));
      },
      interval: 1e3
    });
    let [f, m] = N(!1), { context: l } = Ye({ childrenHaveFocusParameters: { onCompositeFocusChange: m } });
    return /* @__PURE__ */ c("div", { ...W({}, { className: "demo" }), children: [
      /* @__PURE__ */ c("h2", { children: "useChildrenHaveFocus" }),
      /* @__PURE__ */ c("p", { children: [
        "If you want to see if any of your children have focus, the easiest way is to just attach a ",
        /* @__PURE__ */ c("code", { children: "focusIn" }),
        " handler to the parent DOM node. But what if you don't have just one single parent DOM node? This hook lets you coordinate all the children to give you that information as if you were able to take that easy parent node route."
      ] }),
      /* @__PURE__ */ c("div", { children: /* @__PURE__ */ c("label", { children: [
        /* @__PURE__ */ c("input", { type: "number", min: 0, value: o, onInput: (i) => {
          i.preventDefault(), a(i.currentTarget.valueAsNumber);
        } }),
        " Min # of children"
      ] }) }),
      /* @__PURE__ */ c("div", { children: /* @__PURE__ */ c("label", { children: [
        /* @__PURE__ */ c("input", { type: "number", min: o, value: n, onInput: (i) => {
          i.preventDefault(), r(i.currentTarget.valueAsNumber);
        } }),
        " Max # of children"
      ] }) }),
      /* @__PURE__ */ c("div", { children: [
        "Current # of children: ",
        s
      ] }),
      /* @__PURE__ */ c("label", { children: [
        /* @__PURE__ */ c("input", { type: "checkbox", onInput: (i) => t(i.currentTarget.checked) }),
        " Mount & unmount children on a cycle"
      ] }),
      /* @__PURE__ */ c(ds.Provider, { value: l, children: [
        /* @__PURE__ */ c("div", { children: [
          "Any children focused: ",
          f.toString()
        ] }),
        /* @__PURE__ */ c("div", { children: Array.from(function* () {
          for (let i = 0; i < s; ++i)
            yield /* @__PURE__ */ c(gd, { index: i }, i);
        }()) })
      ] })
    ] });
  }, gd = ({ index: e }) => {
    let { hasCurrentFocusParameters: { onCurrentFocusedInnerChanged: t } } = xt({ context: Me(ds) }), { refElementReturn: n, propsStable: r } = se({ refElementParameters: {} }), { hasCurrentFocusReturn: o } = Oe({ hasCurrentFocusParameters: { onCurrentFocusedChanged: null, onCurrentFocusedInnerChanged: t }, refElementReturn: n });
    return /* @__PURE__ */ c("div", { tabIndex: 0, ...W(r, o.propsStable), children: [
      "Focusable child #",
      e,
      /* @__PURE__ */ c("input", {}),
      /* @__PURE__ */ c("input", {})
    ] });
  };
  var _d = be(({ depth: e }) => {
    let [t, n] = N(!1), { propsStable: r, refElementReturn: o } = se({ refElementParameters: {} }), { props: a } = vt({
      focusTrapParameters: {
        trapActive: t,
        onlyMoveFocus: !1,
        focusOpener: (u) => u?.focus(),
        focusPopup: (u, f) => f()?.focus()
      },
      activeElementParameters: { getDocument: fs, onActiveElementChange: null, onLastActiveElementChange: null, onWindowFocusedChange: null },
      refElementReturn: o
    }), s = W(a, r, { ref: void 0, className: "focus-trap-demo" });
    return e == 2 ? /* @__PURE__ */ c("div", {}) : /* @__PURE__ */ c("div", { className: "demo", children: [
      /* @__PURE__ */ c("label", { children: [
        "Active: ",
        /* @__PURE__ */ c("input", { type: "checkbox", checked: t, onInput: (u) => {
          u.preventDefault(), n(u.currentTarget.checked);
        } })
      ] }),
      /* @__PURE__ */ c("div", { ...s, children: /* @__PURE__ */ c(bd, { active: t, setActive: n, depth: e ?? 0 }) })
    ] });
  }), bd = be(({ setActive: e, active: t }) => /* @__PURE__ */ c(Te, { children: [
    /* @__PURE__ */ c("button", { children: "Button 1" }),
    /* @__PURE__ */ c("button", { children: "Button 2" }),
    /* @__PURE__ */ c("button", { children: "Button 3" }),
    /* @__PURE__ */ c("label", { children: [
      "Active: ",
      /* @__PURE__ */ c("input", { type: "checkbox", checked: t, onInput: (n) => {
        n.preventDefault(), e(n.currentTarget.checked);
      } })
    ] })
  ] })), vd = be(() => {
    let [e, t] = N(1e3), [n, r] = N(0), [o, a, s] = N(!1), [u, f] = N(!1), m = (C, y) => new Promise((x, S) => window.setTimeout(() => s() ? S() : x(), e)), {
      callCount: l,
      settleCount: i,
      hasCapture: d,
      syncHandler: h,
      pending: p,
      hasError: b,
      rejectCount: g,
      resolveCount: v
    } = St({
      asyncHandler: m,
      capture: () => {
      },
      debounce: n == 0 ? void 0 : n,
      throttle: null
    });
    return /* @__PURE__ */ c("div", { className: "demo", children: [
      /* @__PURE__ */ c("button", { disabled: p && u, onClick: p ? void 0 : h, children: "Click me!" }),
      /* @__PURE__ */ c("label", { children: [
        "Sleep for: ",
        /* @__PURE__ */ c("input", { type: "number", value: e, onInput: (C) => t(C.currentTarget.valueAsNumber) })
      ] }),
      /* @__PURE__ */ c("label", { children: [
        "Throw an error ",
        /* @__PURE__ */ c("input", { type: "checkbox", checked: o, onInput: (C) => a(C.currentTarget.checked) })
      ] }),
      /* @__PURE__ */ c("label", { children: [
        "Disabled while pending ",
        /* @__PURE__ */ c("input", { type: "checkbox", checked: u, onInput: (C) => f(C.currentTarget.checked) })
      ] }),
      /* @__PURE__ */ c("label", { children: [
        "Debounce: ",
        /* @__PURE__ */ c("input", { type: "number", value: n, onInput: (C) => r(C.currentTarget.valueAsNumber) })
      ] }),
      /* @__PURE__ */ c("table", { children: [
        /* @__PURE__ */ c("thead", { children: /* @__PURE__ */ c("tr", { children: [
          /* @__PURE__ */ c("th", { children: "Field" }),
          /* @__PURE__ */ c("th", { children: "Value" })
        ] }) }),
        /* @__PURE__ */ c("tbody", { children: [
          /* @__PURE__ */ c("tr", { children: [
            /* @__PURE__ */ c("td", { children: "callCount" }),
            /* @__PURE__ */ c("td", { children: l })
          ] }),
          /* @__PURE__ */ c("tr", { children: [
            /* @__PURE__ */ c("td", { children: "settleCount" }),
            /* @__PURE__ */ c("td", { children: i })
          ] }),
          /* @__PURE__ */ c("tr", { children: [
            /* @__PURE__ */ c("td", { children: "resolveCount" }),
            /* @__PURE__ */ c("td", { children: v })
          ] }),
          /* @__PURE__ */ c("tr", { children: [
            /* @__PURE__ */ c("td", { children: "rejectCount" }),
            /* @__PURE__ */ c("td", { children: g })
          ] }),
          /* @__PURE__ */ c("tr", { children: [
            /* @__PURE__ */ c("td", { children: "hasError" }),
            /* @__PURE__ */ c("td", { children: b.toString() })
          ] }),
          /* @__PURE__ */ c("tr", { children: [
            /* @__PURE__ */ c("td", { children: "hasCapture" }),
            /* @__PURE__ */ c("td", { children: d.toString() })
          ] })
        ] })
      ] })
    ] });
  }), Cd = be(() => {
    let [e, t] = N(1e3), [n, r] = N(0), [o, a] = N(0), [s, u, f] = N(!1), [m, l] = N(!1), [i, d] = N(""), h = async (w, D) => new Promise((I, M) => window.setTimeout(() => {
      f() ? M() : (d(w), I());
    }, e)), {
      callCount: p,
      settleCount: b,
      hasCapture: g,
      syncHandler: v,
      currentCapture: _,
      pending: C,
      hasError: y,
      rejectCount: x,
      resolveCount: S,
      debouncingAsync: E,
      debouncingSync: T
    } = St({
      asyncHandler: h,
      capture: (w) => (w.preventDefault(), w.currentTarget.value),
      debounce: n == 0 ? void 0 : n,
      throttle: o == 0 ? void 0 : o
    });
    return /* @__PURE__ */ c("div", { className: "demo", children: [
      /* @__PURE__ */ c("label", { children: [
        "Demo text: ",
        /* @__PURE__ */ c("input", { value: g ? _ : i, disabled: C && m, onInput: v })
      ] }),
      /* @__PURE__ */ c("hr", {}),
      /* @__PURE__ */ c("label", { children: [
        "# of milliseconds the async handler takes to run: ",
        /* @__PURE__ */ c("input", { type: "number", value: e, onInput: (w) => t(w.currentTarget.valueAsNumber) })
      ] }),
      /* @__PURE__ */ c("label", { children: [
        "Throw an error ",
        /* @__PURE__ */ c("input", { type: "checkbox", checked: s, onInput: (w) => u(w.currentTarget.checked) })
      ] }),
      /* @__PURE__ */ c("label", { children: [
        "Disabled while pending ",
        /* @__PURE__ */ c("input", { type: "checkbox", checked: m, onInput: (w) => l(w.currentTarget.checked) })
      ] }),
      /* @__PURE__ */ c("label", { children: [
        "Debounce: ",
        /* @__PURE__ */ c("input", { type: "number", value: n, onInput: (w) => r(w.currentTarget.valueAsNumber) })
      ] }),
      /* @__PURE__ */ c("label", { children: [
        "Throttle: ",
        /* @__PURE__ */ c("input", { type: "number", value: o, onInput: (w) => a(w.currentTarget.valueAsNumber) })
      ] }),
      /* @__PURE__ */ c("table", { children: [
        /* @__PURE__ */ c("thead", { children: /* @__PURE__ */ c("tr", { children: [
          /* @__PURE__ */ c("th", { children: "Field" }),
          /* @__PURE__ */ c("th", { children: "Value" })
        ] }) }),
        /* @__PURE__ */ c("tbody", { children: [
          /* @__PURE__ */ c("tr", { children: [
            /* @__PURE__ */ c("td", { children: "showSpinner" }),
            /* @__PURE__ */ c("td", { children: `${C || E || T}` })
          ] }),
          /* @__PURE__ */ c("tr", { children: [
            /* @__PURE__ */ c("td", { children: "pending" }),
            /* @__PURE__ */ c("td", { children: `${C}` })
          ] }),
          /* @__PURE__ */ c("tr", { children: [
            /* @__PURE__ */ c("td", { children: "debouncingSync" }),
            /* @__PURE__ */ c("td", { children: `${T}` })
          ] }),
          /* @__PURE__ */ c("tr", { children: [
            /* @__PURE__ */ c("td", { children: "debouncingAsync" }),
            /* @__PURE__ */ c("td", { children: `${E}` })
          ] }),
          /* @__PURE__ */ c("tr", { children: [
            /* @__PURE__ */ c("td", { children: "callCount" }),
            /* @__PURE__ */ c("td", { children: p })
          ] }),
          /* @__PURE__ */ c("tr", { children: [
            /* @__PURE__ */ c("td", { children: "settleCount" }),
            /* @__PURE__ */ c("td", { children: b })
          ] }),
          /* @__PURE__ */ c("tr", { children: [
            /* @__PURE__ */ c("td", { children: "resolveCount" }),
            /* @__PURE__ */ c("td", { children: S })
          ] }),
          /* @__PURE__ */ c("tr", { children: [
            /* @__PURE__ */ c("td", { children: "rejectCount" }),
            /* @__PURE__ */ c("td", { children: x })
          ] }),
          /* @__PURE__ */ c("tr", { children: [
            /* @__PURE__ */ c("td", { children: "hasError" }),
            /* @__PURE__ */ c("td", { children: y.toString() })
          ] }),
          /* @__PURE__ */ c("tr", { children: [
            /* @__PURE__ */ c("td", { children: "currentCapture" }),
            /* @__PURE__ */ c("td", { children: _ })
          ] }),
          /* @__PURE__ */ c("tr", { children: [
            /* @__PURE__ */ c("td", { children: '"Saved" input' }),
            /* @__PURE__ */ c("td", { children: i })
          ] })
        ] })
      ] })
    ] });
  });
  function fs() {
    return window.document;
  }
  var yd = be(() => {
    let [e, t] = N(0), [n, r] = N(0), [o, a] = N(null), [s, u] = N(null), [f, m] = N(!1), [l, i] = N(!1), [d, h] = N(!1), [p, b] = N(!1), [g, v] = N(!1), { refElementReturn: _, propsStable: C } = se({ refElementParameters: { onElementChange: void 0 } }), {
      hasCurrentFocusReturn: { propsStable: y }
    } = Oe({
      refElementReturn: _,
      hasCurrentFocusParameters: {
        onCurrentFocusedChanged: P((x) => {
          i(x), x && t((S) => ++S);
        }),
        onCurrentFocusedInnerChanged: P((x) => {
          h(x), x && r((S) => ++S);
        })
      }
    });
    return _r({
      refElementReturn: _,
      activeElementParameters: {
        getDocument: fs,
        onActiveElementChange: u,
        onLastActiveElementChange: a,
        onWindowFocusedChange: m
      },
      hasLastFocusParameters: {
        onLastFocusedChanged: b,
        onLastFocusedInnerChanged: v
      }
    }), /* @__PURE__ */ c("div", { class: "demo", children: [
      /* @__PURE__ */ c("h2", { children: "useHasFocus" }),
      /* @__PURE__ */ c("p", { children: "Tracks focus related to the component:" }),
      /* @__PURE__ */ c("ul", { children: [
        /* @__PURE__ */ c("li", { children: "Is this element (or, optionally, any element within it) focused?" }),
        /* @__PURE__ */ c("li", { children: [
          "Regardless of if focus was lost because the ",
          /* @__PURE__ */ c("code", { children: "body" }),
          " was clicked, was this element (or, optionally, any element within it), the last to be actually focused?"
        ] }),
        /* @__PURE__ */ c("li", { children: "Does the window have focus?" })
      ] }),
      /* @__PURE__ */ c("div", { ...W(C, y, { style: { border: "1px solid black" }, tabIndex: 0 }), children: [
        /* @__PURE__ */ c("span", { children: "Outer element" }),
        /* @__PURE__ */ c("input", {}),
        /* @__PURE__ */ c("input", {}),
        /* @__PURE__ */ c("div", { tabIndex: 0, style: { border: "1px solid black" }, children: [
          /* @__PURE__ */ c("span", { children: "Inner element" }),
          /* @__PURE__ */ c("input", {}),
          /* @__PURE__ */ c("input", {})
        ] })
      ] }),
      /* @__PURE__ */ c("div", { children: /* @__PURE__ */ c("ul", { children: [
        /* @__PURE__ */ c("li", { children: [
          "Focus count: ",
          e
        ] }),
        /* @__PURE__ */ c("li", { children: [
          "Inner focus count: ",
          n
        ] }),
        /* @__PURE__ */ c("li", { children: [
          "Strictly focused: ",
          l.toString(),
          ", ",
          p.toString(),
          " (focused, lastFocused)"
        ] }),
        /* @__PURE__ */ c("li", { children: [
          "Inner focused: ",
          d.toString(),
          ", ",
          g.toString(),
          " (focusedInner, lastFocusedInner)"
        ] }),
        /* @__PURE__ */ c("li", { children: [
          "Window focused: ",
          f.toString()
        ] }),
        /* @__PURE__ */ c("li", { children: [
          "activeElement: ",
          s?.textContent
        ] }),
        /* @__PURE__ */ c("li", { children: [
          "lastActiveElement: ",
          o?.textContent
        ] })
      ] }) })
    ] });
  });
  function xd() {
    let { propsInput: e, propsLabel: t } = mr({ randomIdInputParameters: { prefix: "input-", otherReferencerProp: "for" }, randomIdLabelParameters: { prefix: "label-", otherReferencerProp: "aria-labelledby" } });
    return /* @__PURE__ */ c("div", { className: "demo", children: [
      /* @__PURE__ */ c("h2", { children: "Labels" }),
      /* @__PURE__ */ c("input", { ...e }),
      /* @__PURE__ */ c("label", { ...t, children: "Label" })
    ] });
  }
  function ms({ remaining: e }) {
    let [t, n] = N(0), { refElementReturn: r, propsStable: o } = se({ refElementParameters: {} }), { props: a, pressReturn: { pressing: s, longPress: u } } = Et({
      pressParameters: { focusSelf: (f) => {
        f.focus();
      }, longPressThreshold: 1e3, onPressSync: () => {
        n((f) => ++f);
      }, allowRepeatPresses: !1, excludeEnter: null, excludePointer: null, excludeSpace: null, onPressingChange: null },
      refElementReturn: r
    });
    return /* @__PURE__ */ c("div", { className: "demo", children: [
      /* @__PURE__ */ c("h2", { children: "Press" }),
      /* @__PURE__ */ c("div", { children: [
        "Press count: ",
        t
      ] }),
      /* @__PURE__ */ c("div", { children: [
        "Active: ",
        s.toString()
      ] }),
      /* @__PURE__ */ c("div", { children: [
        "Long press: ",
        (u ?? "null").toString()
      ] }),
      /* @__PURE__ */ c("div", { style: { border: "1px solid black", touchAction: "none" }, tabIndex: 0, ...W(o, a), children: [
        /* @__PURE__ */ c("div", { children: "This DIV's parent is pressable. Click here to press, cancel by leaving or hovering over a pressable child." }),
        /* @__PURE__ */ c("div", { children: e > 0 && /* @__PURE__ */ c(ms, { remaining: e - 1 }) })
      ] })
    ] });
  }
  function Sd() {
    return console.log("Render portal child"), /* @__PURE__ */ c("p", { children: "Portal child" });
  }
  function Ed() {
    let [e, t] = N(null), { children: n, pushChild: r, removeChild: o, updateChild: a } = gr({ target: e });
    return /* @__PURE__ */ c("div", { className: "demo", children: [
      /* @__PURE__ */ c("h2", { children: "Portal children" }),
      /* @__PURE__ */ c("button", { onClick: () => r(/* @__PURE__ */ c(Sd, {})), children: "Push child" }),
      n,
      /* @__PURE__ */ c("div", { id: "demo-portal-target", ref: t })
    ] });
  }
  function Td() {
    let [e, t] = N(10), [n, r] = N("single"), [o, a] = N("");
    return /* @__PURE__ */ c("div", { className: "demo", children: [
      /* @__PURE__ */ c("div", { children: "Global event handlers:" }),
      /* @__PURE__ */ c("label", { children: [
        "# of event handlers",
        /* @__PURE__ */ c("input", { type: "number", value: e, min: 0, onInput: (s) => {
          s.preventDefault(), t(s.currentTarget.valueAsNumber);
        } })
      ] }),
      /* @__PURE__ */ c("div", { children: [
        /* @__PURE__ */ c("label", { children: [
          /* @__PURE__ */ c("input", { onInput: (s) => {
            s.preventDefault(), s.currentTarget.checked && r("grouped");
          }, type: "radio", name: "global-handler-mode" }),
          " Grouped"
        ] }),
        /* @__PURE__ */ c("label", { children: [
          /* @__PURE__ */ c("input", { onInput: (s) => {
            s.preventDefault(), s.currentTarget.checked && r("single");
          }, type: "radio", name: "global-handler-mode" }),
          " Single"
        ] }),
        /* @__PURE__ */ c("label", { children: [
          /* @__PURE__ */ c("input", { onInput: (s) => {
            s.preventDefault(), s.currentTarget.checked && r(null);
          }, type: "radio", name: "global-handler-mode" }),
          " Off"
        ] })
      ] }),
      /* @__PURE__ */ c("button", { id: "global-handler-test", onClick: () => {
        let s = /* @__PURE__ */ new Date();
        document.getElementById("global-handler-test2")?.click(), a((+/* @__PURE__ */ new Date() - +s) / 1e3 + "s passed");
      }, children: "Run test" }),
      /* @__PURE__ */ c("button", { id: "global-handler-test2", children: "Run test 2" }),
      /* @__PURE__ */ c("div", { children: o }),
      /* @__PURE__ */ c(Id, { count: e, mode: n }, n)
    ] });
  }
  var Id = be(function({ count: t, mode: n }) {
    return /* @__PURE__ */ c(Te, { children: [...function* () {
      for (let r = 0; r < t; ++r)
        yield /* @__PURE__ */ c(Pd, { mode: n, target: window }, r);
    }()] });
  }), Pd = be(function({ mode: t, target: n }) {
    return Pe(n, "click", t == null ? null : (r) => {
      r.target?.id == "global-handler-test2" && (window._demo_event = (window._demo_event || 0) + 1);
    }, {}, t || "grouped"), /* @__PURE__ */ c("div", { hidden: !0 });
  }), ps = xe(null), wd = be(() => {
    let [e, t] = N(!1), [n, r] = N(!1), [o, a] = N(100), { context: s, managedChildrenReturn: u } = Ge({ managedChildrenParameters: {} }), { context: f, staggeredChildrenReturn: m } = Xe({ managedChildrenReturn: u, staggeredChildrenParameters: { staggered: e } });
    return /* @__PURE__ */ c(ps.Provider, { value: { ...s, ...f }, children: /* @__PURE__ */ c("div", { class: "demo", children: [
      /* @__PURE__ */ c("label", { children: [
        /* @__PURE__ */ c("input", { type: "checkbox", checked: n, onInput: (l) => {
          l.preventDefault(), r(l.currentTarget.checked);
        } }),
        " Children mounted"
      ] }),
      /* @__PURE__ */ c("label", { children: [
        /* @__PURE__ */ c("input", { type: "checkbox", checked: e, onInput: (l) => {
          l.preventDefault(), t(l.currentTarget.checked);
        } }),
        " Children Staggered"
      ] }),
      /* @__PURE__ */ c("label", { children: [
        /* @__PURE__ */ c("input", { type: "number", value: o, onInput: (l) => {
          l.preventDefault(), a(l.currentTarget.valueAsNumber);
        } }),
        " # of children"
      ] }),
      /* @__PURE__ */ c("div", { children: [
        /* @__PURE__ */ c("div", { children: [
          "Status: ",
          e ? m.stillStaggering ? "staggering" : "done staggering" : "(not staggering)"
        ] }),
        /* @__PURE__ */ c("div", { style: "display:flex;flex-wrap: wrap;", children: n && /* @__PURE__ */ c(Rd, { childCount: o }) })
      ] })
    ] }) });
  }), Rd = be(({ childCount: e }) => /* @__PURE__ */ c(Te, { children: Array.from(function* () {
    for (let t = 0; t < e; ++t)
      yield /* @__PURE__ */ c(kd, { index: t }, t);
  }()) })), kd = be(({ index: e }) => {
    let t = Me(ps), { info: n, props: r, staggeredChildReturn: { hideBecauseStaggered: o, parentIsStaggered: a } } = Qe({ context: t, info: { index: e } }), { managedChildReturn: s } = Be({ context: t, info: { ...n, index: e } });
    return /* @__PURE__ */ c("div", { ...W(r, { style: o ? { opacity: 0.25 } : {} }), children: [
      "Child #",
      e,
      a ? o ? "(pending)" : "" : "(not staggered)"
    ] });
  });
  U.debounceRendering = (e) => e();
  var Nd = () => /* @__PURE__ */ c("div", { class: "flex", style: { flexWrap: "wrap" }, children: [
    /* @__PURE__ */ c(ms, { remaining: 2 }),
    /* @__PURE__ */ c("input", {}),
    /* @__PURE__ */ c("div", { style: "display:grid;grid-template-columns:1fr 1fr", children: [
      /* @__PURE__ */ c(vr, {}),
      /* @__PURE__ */ c(vr, {})
    ] }),
    /* @__PURE__ */ c("hr", {}),
    /* @__PURE__ */ c(xd, {}),
    /* @__PURE__ */ c("hr", {}),
    /* @__PURE__ */ c(Td, {}),
    /* @__PURE__ */ c("hr", {}),
    /* @__PURE__ */ c(Ed, {}),
    /* @__PURE__ */ c("hr", {}),
    /* @__PURE__ */ c(yd, {}),
    /* @__PURE__ */ c("hr", {}),
    /* @__PURE__ */ c(hd, {}),
    /* @__PURE__ */ c("hr", {}),
    /* @__PURE__ */ c(as, {}),
    /* @__PURE__ */ c("hr", {}),
    /* @__PURE__ */ c(cs, {}),
    /* @__PURE__ */ c("hr", {}),
    /* @__PURE__ */ c(wd, {}),
    /* @__PURE__ */ c("hr", {}),
    /* @__PURE__ */ c(us, {}),
    /* @__PURE__ */ c("hr", {}),
    /* @__PURE__ */ c(_d, {}),
    /* @__PURE__ */ c("hr", {}),
    /* @__PURE__ */ c(vd, {}),
    /* @__PURE__ */ c("hr", {}),
    /* @__PURE__ */ c(Cd, {}),
    /* @__PURE__ */ c("hr", {}),
    /* @__PURE__ */ c(md, {}),
    /* @__PURE__ */ c("hr", {}),
    /* @__PURE__ */ c(pd, {}),
    /* @__PURE__ */ c("hr", {})
  ] });
  requestAnimationFrame(() => {
    Er(/* @__PURE__ */ c(Nd, {}), document.getElementById("root"));
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
