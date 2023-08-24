"use strict";
(() => {
  // node_modules/.pnpm/preact@10.16.0/node_modules/preact/dist/preact.module.js
  var n;
  var l;
  var u;
  var t;
  var i;
  var o;
  var r;
  var f;
  var e;
  var c = {};
  var s = [];
  var a = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
  var h = Array.isArray;
  function v(n3, l5) {
    for (var u5 in l5)
      n3[u5] = l5[u5];
    return n3;
  }
  function p(n3) {
    var l5 = n3.parentNode;
    l5 && l5.removeChild(n3);
  }
  function y(l5, u5, t5) {
    var i5, o6, r5, f5 = {};
    for (r5 in u5)
      "key" == r5 ? i5 = u5[r5] : "ref" == r5 ? o6 = u5[r5] : f5[r5] = u5[r5];
    if (arguments.length > 2 && (f5.children = arguments.length > 3 ? n.call(arguments, 2) : t5), "function" == typeof l5 && null != l5.defaultProps)
      for (r5 in l5.defaultProps)
        void 0 === f5[r5] && (f5[r5] = l5.defaultProps[r5]);
    return d(l5, f5, i5, o6, null);
  }
  function d(n3, t5, i5, o6, r5) {
    var f5 = { type: n3, props: t5, key: i5, ref: o6, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: null == r5 ? ++u : r5 };
    return null == r5 && null != l.vnode && l.vnode(f5), f5;
  }
  function k(n3) {
    return n3.children;
  }
  function b(n3, l5) {
    this.props = n3, this.context = l5;
  }
  function g(n3, l5) {
    if (null == l5)
      return n3.__ ? g(n3.__, n3.__.__k.indexOf(n3) + 1) : null;
    for (var u5; l5 < n3.__k.length; l5++)
      if (null != (u5 = n3.__k[l5]) && null != u5.__e)
        return u5.__e;
    return "function" == typeof n3.type ? g(n3) : null;
  }
  function m(n3) {
    var l5, u5;
    if (null != (n3 = n3.__) && null != n3.__c) {
      for (n3.__e = n3.__c.base = null, l5 = 0; l5 < n3.__k.length; l5++)
        if (null != (u5 = n3.__k[l5]) && null != u5.__e) {
          n3.__e = n3.__c.base = u5.__e;
          break;
        }
      return m(n3);
    }
  }
  function w(n3) {
    (!n3.__d && (n3.__d = true) && i.push(n3) && !x.__r++ || o !== l.debounceRendering) && ((o = l.debounceRendering) || r)(x);
  }
  function x() {
    var n3, l5, u5, t5, o6, r5, e5, c5, s5;
    for (i.sort(f); n3 = i.shift(); )
      n3.__d && (l5 = i.length, t5 = void 0, o6 = void 0, r5 = void 0, c5 = (e5 = (u5 = n3).__v).__e, (s5 = u5.__P) && (t5 = [], o6 = [], (r5 = v({}, e5)).__v = e5.__v + 1, L(s5, e5, r5, u5.__n, void 0 !== s5.ownerSVGElement, null != e5.__h ? [c5] : null, t5, null == c5 ? g(e5) : c5, e5.__h, o6), M(t5, e5, o6), e5.__e != c5 && m(e5)), i.length > l5 && i.sort(f));
    x.__r = 0;
  }
  function P(n3, l5, u5, t5, i5, o6, r5, f5, e5, a5, v5) {
    var p5, y5, _6, b5, g7, m5, w7, x7, P4, S3, H5 = 0, I5 = t5 && t5.__k || s, T7 = I5.length, j6 = T7, z6 = l5.length;
    for (u5.__k = [], p5 = 0; p5 < z6; p5++)
      null != (b5 = u5.__k[p5] = null == (b5 = l5[p5]) || "boolean" == typeof b5 || "function" == typeof b5 ? null : "string" == typeof b5 || "number" == typeof b5 || "bigint" == typeof b5 ? d(null, b5, null, null, b5) : h(b5) ? d(k, { children: b5 }, null, null, null) : b5.__b > 0 ? d(b5.type, b5.props, b5.key, b5.ref ? b5.ref : null, b5.__v) : b5) && (b5.__ = u5, b5.__b = u5.__b + 1, -1 === (x7 = A(b5, I5, w7 = p5 + H5, j6)) ? _6 = c : (_6 = I5[x7] || c, I5[x7] = void 0, j6--), L(n3, b5, _6, i5, o6, r5, f5, e5, a5, v5), g7 = b5.__e, (y5 = b5.ref) && _6.ref != y5 && (_6.ref && O(_6.ref, null, b5), v5.push(y5, b5.__c || g7, b5)), null != g7 && (null == m5 && (m5 = g7), S3 = !(P4 = _6 === c || null === _6.__v) && x7 === w7, P4 ? -1 == x7 && H5-- : x7 !== w7 && (x7 === w7 + 1 ? (H5++, S3 = true) : x7 > w7 ? j6 > z6 - w7 ? (H5 += x7 - w7, S3 = true) : H5-- : H5 = x7 < w7 && x7 == w7 - 1 ? x7 - w7 : 0), w7 = p5 + H5, S3 = S3 || x7 == p5 && !P4, "function" != typeof b5.type || x7 === w7 && _6.__k !== b5.__k ? "function" == typeof b5.type || S3 ? void 0 !== b5.__d ? (e5 = b5.__d, b5.__d = void 0) : e5 = g7.nextSibling : e5 = $(n3, g7, e5) : e5 = C(b5, e5, n3), "function" == typeof u5.type && (u5.__d = e5)));
    for (u5.__e = m5, p5 = T7; p5--; )
      null != I5[p5] && ("function" == typeof u5.type && null != I5[p5].__e && I5[p5].__e == u5.__d && (u5.__d = I5[p5].__e.nextSibling), q(I5[p5], I5[p5]));
  }
  function C(n3, l5, u5) {
    for (var t5, i5 = n3.__k, o6 = 0; i5 && o6 < i5.length; o6++)
      (t5 = i5[o6]) && (t5.__ = n3, l5 = "function" == typeof t5.type ? C(t5, l5, u5) : $(u5, t5.__e, l5));
    return l5;
  }
  function S(n3, l5) {
    return l5 = l5 || [], null == n3 || "boolean" == typeof n3 || (h(n3) ? n3.some(function(n4) {
      S(n4, l5);
    }) : l5.push(n3)), l5;
  }
  function $(n3, l5, u5) {
    return null == u5 || u5.parentNode !== n3 ? n3.insertBefore(l5, null) : l5 == u5 && null != l5.parentNode || n3.insertBefore(l5, u5), l5.nextSibling;
  }
  function A(n3, l5, u5, t5) {
    var i5 = n3.key, o6 = n3.type, r5 = u5 - 1, f5 = u5 + 1, e5 = l5[u5];
    if (null === e5 || e5 && i5 == e5.key && o6 === e5.type)
      return u5;
    if (t5 > (null != e5 ? 1 : 0))
      for (; r5 >= 0 || f5 < l5.length; ) {
        if (r5 >= 0) {
          if ((e5 = l5[r5]) && i5 == e5.key && o6 === e5.type)
            return r5;
          r5--;
        }
        if (f5 < l5.length) {
          if ((e5 = l5[f5]) && i5 == e5.key && o6 === e5.type)
            return f5;
          f5++;
        }
      }
    return -1;
  }
  function H(n3, l5, u5, t5, i5) {
    var o6;
    for (o6 in u5)
      "children" === o6 || "key" === o6 || o6 in l5 || T(n3, o6, null, u5[o6], t5);
    for (o6 in l5)
      i5 && "function" != typeof l5[o6] || "children" === o6 || "key" === o6 || "value" === o6 || "checked" === o6 || u5[o6] === l5[o6] || T(n3, o6, l5[o6], u5[o6], t5);
  }
  function I(n3, l5, u5) {
    "-" === l5[0] ? n3.setProperty(l5, null == u5 ? "" : u5) : n3[l5] = null == u5 ? "" : "number" != typeof u5 || a.test(l5) ? u5 : u5 + "px";
  }
  function T(n3, l5, u5, t5, i5) {
    var o6;
    n:
      if ("style" === l5)
        if ("string" == typeof u5)
          n3.style.cssText = u5;
        else {
          if ("string" == typeof t5 && (n3.style.cssText = t5 = ""), t5)
            for (l5 in t5)
              u5 && l5 in u5 || I(n3.style, l5, "");
          if (u5)
            for (l5 in u5)
              t5 && u5[l5] === t5[l5] || I(n3.style, l5, u5[l5]);
        }
      else if ("o" === l5[0] && "n" === l5[1])
        o6 = l5 !== (l5 = l5.replace(/Capture$/, "")), l5 = l5.toLowerCase() in n3 ? l5.toLowerCase().slice(2) : l5.slice(2), n3.l || (n3.l = {}), n3.l[l5 + o6] = u5, u5 ? t5 || n3.addEventListener(l5, o6 ? z : j, o6) : n3.removeEventListener(l5, o6 ? z : j, o6);
      else if ("dangerouslySetInnerHTML" !== l5) {
        if (i5)
          l5 = l5.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
        else if ("width" !== l5 && "height" !== l5 && "href" !== l5 && "list" !== l5 && "form" !== l5 && "tabIndex" !== l5 && "download" !== l5 && "rowSpan" !== l5 && "colSpan" !== l5 && l5 in n3)
          try {
            n3[l5] = null == u5 ? "" : u5;
            break n;
          } catch (n4) {
          }
        "function" == typeof u5 || (null == u5 || false === u5 && "-" !== l5[4] ? n3.removeAttribute(l5) : n3.setAttribute(l5, u5));
      }
  }
  function j(n3) {
    return this.l[n3.type + false](l.event ? l.event(n3) : n3);
  }
  function z(n3) {
    return this.l[n3.type + true](l.event ? l.event(n3) : n3);
  }
  function L(n3, u5, t5, i5, o6, r5, f5, e5, c5, s5) {
    var a5, p5, y5, d5, _6, g7, m5, w7, x7, C5, S3, $5, A5, H5, I5, T7 = u5.type;
    if (void 0 !== u5.constructor)
      return null;
    null != t5.__h && (c5 = t5.__h, e5 = u5.__e = t5.__e, u5.__h = null, r5 = [e5]), (a5 = l.__b) && a5(u5);
    try {
      n:
        if ("function" == typeof T7) {
          if (w7 = u5.props, x7 = (a5 = T7.contextType) && i5[a5.__c], C5 = a5 ? x7 ? x7.props.value : a5.__ : i5, t5.__c ? m5 = (p5 = u5.__c = t5.__c).__ = p5.__E : ("prototype" in T7 && T7.prototype.render ? u5.__c = p5 = new T7(w7, C5) : (u5.__c = p5 = new b(w7, C5), p5.constructor = T7, p5.render = B), x7 && x7.sub(p5), p5.props = w7, p5.state || (p5.state = {}), p5.context = C5, p5.__n = i5, y5 = p5.__d = true, p5.__h = [], p5._sb = []), null == p5.__s && (p5.__s = p5.state), null != T7.getDerivedStateFromProps && (p5.__s == p5.state && (p5.__s = v({}, p5.__s)), v(p5.__s, T7.getDerivedStateFromProps(w7, p5.__s))), d5 = p5.props, _6 = p5.state, p5.__v = u5, y5)
            null == T7.getDerivedStateFromProps && null != p5.componentWillMount && p5.componentWillMount(), null != p5.componentDidMount && p5.__h.push(p5.componentDidMount);
          else {
            if (null == T7.getDerivedStateFromProps && w7 !== d5 && null != p5.componentWillReceiveProps && p5.componentWillReceiveProps(w7, C5), !p5.__e && (null != p5.shouldComponentUpdate && false === p5.shouldComponentUpdate(w7, p5.__s, C5) || u5.__v === t5.__v)) {
              for (u5.__v !== t5.__v && (p5.props = w7, p5.state = p5.__s, p5.__d = false), u5.__e = t5.__e, u5.__k = t5.__k, u5.__k.forEach(function(n4) {
                n4 && (n4.__ = u5);
              }), S3 = 0; S3 < p5._sb.length; S3++)
                p5.__h.push(p5._sb[S3]);
              p5._sb = [], p5.__h.length && f5.push(p5);
              break n;
            }
            null != p5.componentWillUpdate && p5.componentWillUpdate(w7, p5.__s, C5), null != p5.componentDidUpdate && p5.__h.push(function() {
              p5.componentDidUpdate(d5, _6, g7);
            });
          }
          if (p5.context = C5, p5.props = w7, p5.__P = n3, p5.__e = false, $5 = l.__r, A5 = 0, "prototype" in T7 && T7.prototype.render) {
            for (p5.state = p5.__s, p5.__d = false, $5 && $5(u5), a5 = p5.render(p5.props, p5.state, p5.context), H5 = 0; H5 < p5._sb.length; H5++)
              p5.__h.push(p5._sb[H5]);
            p5._sb = [];
          } else
            do {
              p5.__d = false, $5 && $5(u5), a5 = p5.render(p5.props, p5.state, p5.context), p5.state = p5.__s;
            } while (p5.__d && ++A5 < 25);
          p5.state = p5.__s, null != p5.getChildContext && (i5 = v(v({}, i5), p5.getChildContext())), y5 || null == p5.getSnapshotBeforeUpdate || (g7 = p5.getSnapshotBeforeUpdate(d5, _6)), P(n3, h(I5 = null != a5 && a5.type === k && null == a5.key ? a5.props.children : a5) ? I5 : [I5], u5, t5, i5, o6, r5, f5, e5, c5, s5), p5.base = u5.__e, u5.__h = null, p5.__h.length && f5.push(p5), m5 && (p5.__E = p5.__ = null);
        } else
          null == r5 && u5.__v === t5.__v ? (u5.__k = t5.__k, u5.__e = t5.__e) : u5.__e = N(t5.__e, u5, t5, i5, o6, r5, f5, c5, s5);
      (a5 = l.diffed) && a5(u5);
    } catch (n4) {
      u5.__v = null, (c5 || null != r5) && (u5.__e = e5, u5.__h = !!c5, r5[r5.indexOf(e5)] = null), l.__e(n4, u5, t5);
    }
  }
  function M(n3, u5, t5) {
    for (var i5 = 0; i5 < t5.length; i5++)
      O(t5[i5], t5[++i5], t5[++i5]);
    l.__c && l.__c(u5, n3), n3.some(function(u6) {
      try {
        n3 = u6.__h, u6.__h = [], n3.some(function(n4) {
          n4.call(u6);
        });
      } catch (n4) {
        l.__e(n4, u6.__v);
      }
    });
  }
  function N(l5, u5, t5, i5, o6, r5, f5, e5, s5) {
    var a5, v5, y5, d5 = t5.props, _6 = u5.props, k6 = u5.type, b5 = 0;
    if ("svg" === k6 && (o6 = true), null != r5) {
      for (; b5 < r5.length; b5++)
        if ((a5 = r5[b5]) && "setAttribute" in a5 == !!k6 && (k6 ? a5.localName === k6 : 3 === a5.nodeType)) {
          l5 = a5, r5[b5] = null;
          break;
        }
    }
    if (null == l5) {
      if (null === k6)
        return document.createTextNode(_6);
      l5 = o6 ? document.createElementNS("http://www.w3.org/2000/svg", k6) : document.createElement(k6, _6.is && _6), r5 = null, e5 = false;
    }
    if (null === k6)
      d5 === _6 || e5 && l5.data === _6 || (l5.data = _6);
    else {
      if (r5 = r5 && n.call(l5.childNodes), v5 = (d5 = t5.props || c).dangerouslySetInnerHTML, y5 = _6.dangerouslySetInnerHTML, !e5) {
        if (null != r5)
          for (d5 = {}, b5 = 0; b5 < l5.attributes.length; b5++)
            d5[l5.attributes[b5].name] = l5.attributes[b5].value;
        (y5 || v5) && (y5 && (v5 && y5.__html == v5.__html || y5.__html === l5.innerHTML) || (l5.innerHTML = y5 && y5.__html || ""));
      }
      if (H(l5, _6, d5, o6, e5), y5)
        u5.__k = [];
      else if (P(l5, h(b5 = u5.props.children) ? b5 : [b5], u5, t5, i5, o6 && "foreignObject" !== k6, r5, f5, r5 ? r5[0] : t5.__k && g(t5, 0), e5, s5), null != r5)
        for (b5 = r5.length; b5--; )
          null != r5[b5] && p(r5[b5]);
      e5 || ("value" in _6 && void 0 !== (b5 = _6.value) && (b5 !== l5.value || "progress" === k6 && !b5 || "option" === k6 && b5 !== d5.value) && T(l5, "value", b5, d5.value, false), "checked" in _6 && void 0 !== (b5 = _6.checked) && b5 !== l5.checked && T(l5, "checked", b5, d5.checked, false));
    }
    return l5;
  }
  function O(n3, u5, t5) {
    try {
      "function" == typeof n3 ? n3(u5) : n3.current = u5;
    } catch (n4) {
      l.__e(n4, t5);
    }
  }
  function q(n3, u5, t5) {
    var i5, o6;
    if (l.unmount && l.unmount(n3), (i5 = n3.ref) && (i5.current && i5.current !== n3.__e || O(i5, null, u5)), null != (i5 = n3.__c)) {
      if (i5.componentWillUnmount)
        try {
          i5.componentWillUnmount();
        } catch (n4) {
          l.__e(n4, u5);
        }
      i5.base = i5.__P = null, n3.__c = void 0;
    }
    if (i5 = n3.__k)
      for (o6 = 0; o6 < i5.length; o6++)
        i5[o6] && q(i5[o6], u5, t5 || "function" != typeof n3.type);
    t5 || null == n3.__e || p(n3.__e), n3.__ = n3.__e = n3.__d = void 0;
  }
  function B(n3, l5, u5) {
    return this.constructor(n3, u5);
  }
  function D(u5, t5, i5) {
    var o6, r5, f5, e5;
    l.__ && l.__(u5, t5), r5 = (o6 = "function" == typeof i5) ? null : i5 && i5.__k || t5.__k, f5 = [], e5 = [], L(t5, u5 = (!o6 && i5 || t5).__k = y(k, null, [u5]), r5 || c, c, void 0 !== t5.ownerSVGElement, !o6 && i5 ? [i5] : r5 ? null : t5.firstChild ? n.call(t5.childNodes) : null, f5, !o6 && i5 ? i5 : r5 ? r5.__e : t5.firstChild, o6, e5), M(f5, u5, e5);
  }
  function G(n3, l5) {
    var u5 = { __c: l5 = "__cC" + e++, __: n3, Consumer: function(n4, l6) {
      return n4.children(l6);
    }, Provider: function(n4) {
      var u6, t5;
      return this.getChildContext || (u6 = [], (t5 = {})[l5] = this, this.getChildContext = function() {
        return t5;
      }, this.shouldComponentUpdate = function(n5) {
        this.props.value !== n5.value && u6.some(function(n6) {
          n6.__e = true, w(n6);
        });
      }, this.sub = function(n5) {
        u6.push(n5);
        var l6 = n5.componentWillUnmount;
        n5.componentWillUnmount = function() {
          u6.splice(u6.indexOf(n5), 1), l6 && l6.call(n5);
        };
      }), n4.children;
    } };
    return u5.Provider.__ = u5.Consumer.contextType = u5;
  }
  n = s.slice, l = { __e: function(n3, l5, u5, t5) {
    for (var i5, o6, r5; l5 = l5.__; )
      if ((i5 = l5.__c) && !i5.__)
        try {
          if ((o6 = i5.constructor) && null != o6.getDerivedStateFromError && (i5.setState(o6.getDerivedStateFromError(n3)), r5 = i5.__d), null != i5.componentDidCatch && (i5.componentDidCatch(n3, t5 || {}), r5 = i5.__d), r5)
            return i5.__E = i5;
        } catch (l6) {
          n3 = l6;
        }
    throw n3;
  } }, u = 0, t = function(n3) {
    return null != n3 && void 0 === n3.constructor;
  }, b.prototype.setState = function(n3, l5) {
    var u5;
    u5 = null != this.__s && this.__s !== this.state ? this.__s : this.__s = v({}, this.state), "function" == typeof n3 && (n3 = n3(v({}, u5), this.props)), n3 && v(u5, n3), null != n3 && this.__v && (l5 && this._sb.push(l5), w(this));
  }, b.prototype.forceUpdate = function(n3) {
    this.__v && (this.__e = true, n3 && this.__h.push(n3), w(this));
  }, b.prototype.render = k, i = [], r = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, f = function(n3, l5) {
    return n3.__v.__b - l5.__v.__b;
  }, x.__r = 0, e = 0;

  // node_modules/.pnpm/preact@10.16.0/node_modules/preact/hooks/dist/hooks.module.js
  var t2;
  var r2;
  var u2;
  var i2;
  var o2 = 0;
  var f2 = [];
  var c2 = [];
  var e2 = l.__b;
  var a2 = l.__r;
  var v2 = l.diffed;
  var l2 = l.__c;
  var m2 = l.unmount;
  function d2(t5, u5) {
    l.__h && l.__h(r2, t5, o2 || u5), o2 = 0;
    var i5 = r2.__H || (r2.__H = { __: [], __h: [] });
    return t5 >= i5.__.length && i5.__.push({ __V: c2 }), i5.__[t5];
  }
  function h2(n3) {
    return o2 = 1, s2(B2, n3);
  }
  function s2(n3, u5, i5) {
    var o6 = d2(t2++, 2);
    if (o6.t = n3, !o6.__c && (o6.__ = [i5 ? i5(u5) : B2(void 0, u5), function(n4) {
      var t5 = o6.__N ? o6.__N[0] : o6.__[0], r5 = o6.t(t5, n4);
      t5 !== r5 && (o6.__N = [r5, o6.__[1]], o6.__c.setState({}));
    }], o6.__c = r2, !r2.u)) {
      var f5 = function(n4, t5, r5) {
        if (!o6.__c.__H)
          return true;
        var u6 = o6.__c.__H.__.filter(function(n5) {
          return n5.__c;
        });
        if (u6.every(function(n5) {
          return !n5.__N;
        }))
          return !c5 || c5.call(this, n4, t5, r5);
        var i6 = false;
        return u6.forEach(function(n5) {
          if (n5.__N) {
            var t6 = n5.__[0];
            n5.__ = n5.__N, n5.__N = void 0, t6 !== n5.__[0] && (i6 = true);
          }
        }), !(!i6 && o6.__c.props === n4) && (!c5 || c5.call(this, n4, t5, r5));
      };
      r2.u = true;
      var c5 = r2.shouldComponentUpdate, e5 = r2.componentWillUpdate;
      r2.componentWillUpdate = function(n4, t5, r5) {
        if (this.__e) {
          var u6 = c5;
          c5 = void 0, f5(n4, t5, r5), c5 = u6;
        }
        e5 && e5.call(this, n4, t5, r5);
      }, r2.shouldComponentUpdate = f5;
    }
    return o6.__N || o6.__;
  }
  function _(n3) {
    return o2 = 5, F(function() {
      return { current: n3 };
    }, []);
  }
  function F(n3, r5) {
    var u5 = d2(t2++, 7);
    return z2(u5.__H, r5) ? (u5.__V = n3(), u5.i = r5, u5.__h = n3, u5.__V) : u5.__;
  }
  function T2(n3, t5) {
    return o2 = 8, F(function() {
      return n3;
    }, t5);
  }
  function q2(n3) {
    var u5 = r2.context[n3.__c], i5 = d2(t2++, 9);
    return i5.c = n3, u5 ? (null == i5.__ && (i5.__ = true, u5.sub(r2)), u5.props.value) : n3.__;
  }
  function b2() {
    for (var t5; t5 = f2.shift(); )
      if (t5.__P && t5.__H)
        try {
          t5.__H.__h.forEach(k2), t5.__H.__h.forEach(w2), t5.__H.__h = [];
        } catch (r5) {
          t5.__H.__h = [], l.__e(r5, t5.__v);
        }
  }
  l.__b = function(n3) {
    r2 = null, e2 && e2(n3);
  }, l.__r = function(n3) {
    a2 && a2(n3), t2 = 0;
    var i5 = (r2 = n3.__c).__H;
    i5 && (u2 === r2 ? (i5.__h = [], r2.__h = [], i5.__.forEach(function(n4) {
      n4.__N && (n4.__ = n4.__N), n4.__V = c2, n4.__N = n4.i = void 0;
    })) : (i5.__h.forEach(k2), i5.__h.forEach(w2), i5.__h = [], t2 = 0)), u2 = r2;
  }, l.diffed = function(t5) {
    v2 && v2(t5);
    var o6 = t5.__c;
    o6 && o6.__H && (o6.__H.__h.length && (1 !== f2.push(o6) && i2 === l.requestAnimationFrame || ((i2 = l.requestAnimationFrame) || j2)(b2)), o6.__H.__.forEach(function(n3) {
      n3.i && (n3.__H = n3.i), n3.__V !== c2 && (n3.__ = n3.__V), n3.i = void 0, n3.__V = c2;
    })), u2 = r2 = null;
  }, l.__c = function(t5, r5) {
    r5.some(function(t6) {
      try {
        t6.__h.forEach(k2), t6.__h = t6.__h.filter(function(n3) {
          return !n3.__ || w2(n3);
        });
      } catch (u5) {
        r5.some(function(n3) {
          n3.__h && (n3.__h = []);
        }), r5 = [], l.__e(u5, t6.__v);
      }
    }), l2 && l2(t5, r5);
  }, l.unmount = function(t5) {
    m2 && m2(t5);
    var r5, u5 = t5.__c;
    u5 && u5.__H && (u5.__H.__.forEach(function(n3) {
      try {
        k2(n3);
      } catch (n4) {
        r5 = n4;
      }
    }), u5.__H = void 0, r5 && l.__e(r5, u5.__v));
  };
  var g2 = "function" == typeof requestAnimationFrame;
  function j2(n3) {
    var t5, r5 = function() {
      clearTimeout(u5), g2 && cancelAnimationFrame(t5), setTimeout(n3);
    }, u5 = setTimeout(r5, 100);
    g2 && (t5 = requestAnimationFrame(r5));
  }
  function k2(n3) {
    var t5 = r2, u5 = n3.__c;
    "function" == typeof u5 && (n3.__c = void 0, u5()), r2 = t5;
  }
  function w2(n3) {
    var t5 = r2;
    n3.__c = n3.__(), r2 = t5;
  }
  function z2(n3, t5) {
    return !n3 || n3.length !== t5.length || t5.some(function(t6, r5) {
      return t6 !== n3[r5];
    });
  }
  function B2(n3, t5) {
    return "function" == typeof t5 ? t5(n3) : t5;
  }

  // node_modules/.pnpm/preact@10.16.0/node_modules/preact/compat/dist/compat.module.js
  function g3(n3, t5) {
    for (var e5 in t5)
      n3[e5] = t5[e5];
    return n3;
  }
  function C2(n3, t5) {
    for (var e5 in n3)
      if ("__source" !== e5 && !(e5 in t5))
        return true;
    for (var r5 in t5)
      if ("__source" !== r5 && n3[r5] !== t5[r5])
        return true;
    return false;
  }
  function w3(n3) {
    this.props = n3;
  }
  function x3(n3, e5) {
    function r5(n4) {
      var t5 = this.props.ref, r6 = t5 == n4.ref;
      return !r6 && t5 && (t5.call ? t5(null) : t5.current = null), e5 ? !e5(this.props, n4) || !r6 : C2(this.props, n4);
    }
    function u5(e6) {
      return this.shouldComponentUpdate = r5, y(n3, e6);
    }
    return u5.displayName = "Memo(" + (n3.displayName || n3.name) + ")", u5.prototype.isReactComponent = true, u5.__f = true, u5;
  }
  (w3.prototype = new b()).isPureReactComponent = true, w3.prototype.shouldComponentUpdate = function(n3, t5) {
    return C2(this.props, n3) || C2(this.state, t5);
  };
  var R = l.__b;
  l.__b = function(n3) {
    n3.type && n3.type.__f && n3.ref && (n3.props.ref = n3.ref, n3.ref = null), R && R(n3);
  };
  var N2 = "undefined" != typeof Symbol && Symbol.for && Symbol.for("react.forward_ref") || 3911;
  var T3 = l.__e;
  l.__e = function(n3, t5, e5, r5) {
    if (n3.then) {
      for (var u5, o6 = t5; o6 = o6.__; )
        if ((u5 = o6.__c) && u5.__c)
          return null == t5.__e && (t5.__e = e5.__e, t5.__k = e5.__k), u5.__c(n3, t5);
    }
    T3(n3, t5, e5, r5);
  };
  var I2 = l.unmount;
  function L2(n3, t5, e5) {
    return n3 && (n3.__c && n3.__c.__H && (n3.__c.__H.__.forEach(function(n4) {
      "function" == typeof n4.__c && n4.__c();
    }), n3.__c.__H = null), null != (n3 = g3({}, n3)).__c && (n3.__c.__P === e5 && (n3.__c.__P = t5), n3.__c = null), n3.__k = n3.__k && n3.__k.map(function(n4) {
      return L2(n4, t5, e5);
    })), n3;
  }
  function U(n3, t5, e5) {
    return n3 && (n3.__v = null, n3.__k = n3.__k && n3.__k.map(function(n4) {
      return U(n4, t5, e5);
    }), n3.__c && n3.__c.__P === t5 && (n3.__e && e5.insertBefore(n3.__e, n3.__d), n3.__c.__e = true, n3.__c.__P = e5)), n3;
  }
  function D2() {
    this.__u = 0, this.t = null, this.__b = null;
  }
  function F3(n3) {
    var t5 = n3.__.__c;
    return t5 && t5.__a && t5.__a(n3);
  }
  function V2() {
    this.u = null, this.o = null;
  }
  l.unmount = function(n3) {
    var t5 = n3.__c;
    t5 && t5.__R && t5.__R(), t5 && true === n3.__h && (n3.type = null), I2 && I2(n3);
  }, (D2.prototype = new b()).__c = function(n3, t5) {
    var e5 = t5.__c, r5 = this;
    null == r5.t && (r5.t = []), r5.t.push(e5);
    var u5 = F3(r5.__v), o6 = false, i5 = function() {
      o6 || (o6 = true, e5.__R = null, u5 ? u5(l5) : l5());
    };
    e5.__R = i5;
    var l5 = function() {
      if (!--r5.__u) {
        if (r5.state.__a) {
          var n4 = r5.state.__a;
          r5.__v.__k[0] = U(n4, n4.__c.__P, n4.__c.__O);
        }
        var t6;
        for (r5.setState({ __a: r5.__b = null }); t6 = r5.t.pop(); )
          t6.forceUpdate();
      }
    }, c5 = true === t5.__h;
    r5.__u++ || c5 || r5.setState({ __a: r5.__b = r5.__v.__k[0] }), n3.then(i5, i5);
  }, D2.prototype.componentWillUnmount = function() {
    this.t = [];
  }, D2.prototype.render = function(n3, e5) {
    if (this.__b) {
      if (this.__v.__k) {
        var r5 = document.createElement("div"), o6 = this.__v.__k[0].__c;
        this.__v.__k[0] = L2(this.__b, r5, o6.__O = o6.__P);
      }
      this.__b = null;
    }
    var i5 = e5.__a && y(k, null, n3.fallback);
    return i5 && (i5.__h = null), [y(k, null, e5.__a ? null : n3.children), i5];
  };
  var W = function(n3, t5, e5) {
    if (++e5[1] === e5[0] && n3.o.delete(t5), n3.props.revealOrder && ("t" !== n3.props.revealOrder[0] || !n3.o.size))
      for (e5 = n3.u; e5; ) {
        for (; e5.length > 3; )
          e5.pop()();
        if (e5[1] < e5[0])
          break;
        n3.u = e5 = e5[2];
      }
  };
  (V2.prototype = new b()).__a = function(n3) {
    var t5 = this, e5 = F3(t5.__v), r5 = t5.o.get(n3);
    return r5[0]++, function(u5) {
      var o6 = function() {
        t5.props.revealOrder ? (r5.push(u5), W(t5, n3, r5)) : u5();
      };
      e5 ? e5(o6) : o6();
    };
  }, V2.prototype.render = function(n3) {
    this.u = null, this.o = /* @__PURE__ */ new Map();
    var t5 = S(n3.children);
    n3.revealOrder && "b" === n3.revealOrder[0] && t5.reverse();
    for (var e5 = t5.length; e5--; )
      this.o.set(t5[e5], this.u = [1, 0, this.u]);
    return n3.children;
  }, V2.prototype.componentDidUpdate = V2.prototype.componentDidMount = function() {
    var n3 = this;
    this.o.forEach(function(t5, e5) {
      W(n3, e5, t5);
    });
  };
  var B3 = "undefined" != typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103;
  var H2 = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/;
  var Z = /^on(Ani|Tra|Tou|BeforeInp|Compo)/;
  var Y = /[A-Z0-9]/g;
  var $2 = "undefined" != typeof document;
  var q3 = function(n3) {
    return ("undefined" != typeof Symbol && "symbol" == typeof Symbol() ? /fil|che|rad/ : /fil|che|ra/).test(n3);
  };
  b.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(t5) {
    Object.defineProperty(b.prototype, t5, { configurable: true, get: function() {
      return this["UNSAFE_" + t5];
    }, set: function(n3) {
      Object.defineProperty(this, t5, { configurable: true, writable: true, value: n3 });
    } });
  });
  var K = l.event;
  function Q() {
  }
  function X() {
    return this.cancelBubble;
  }
  function nn() {
    return this.defaultPrevented;
  }
  l.event = function(n3) {
    return K && (n3 = K(n3)), n3.persist = Q, n3.isPropagationStopped = X, n3.isDefaultPrevented = nn, n3.nativeEvent = n3;
  };
  var tn;
  var en = { enumerable: false, configurable: true, get: function() {
    return this.class;
  } };
  var rn = l.vnode;
  l.vnode = function(n3) {
    "string" == typeof n3.type && function(n4) {
      var t5 = n4.props, e5 = n4.type, u5 = {};
      for (var o6 in t5) {
        var i5 = t5[o6];
        if (!("value" === o6 && "defaultValue" in t5 && null == i5 || $2 && "children" === o6 && "noscript" === e5 || "class" === o6 || "className" === o6)) {
          var l5 = o6.toLowerCase();
          "defaultValue" === o6 && "value" in t5 && null == t5.value ? o6 = "value" : "download" === o6 && true === i5 ? i5 = "" : "ondoubleclick" === l5 ? o6 = "ondblclick" : "onchange" !== l5 || "input" !== e5 && "textarea" !== e5 || q3(t5.type) ? "onfocus" === l5 ? o6 = "onfocusin" : "onblur" === l5 ? o6 = "onfocusout" : Z.test(o6) ? o6 = l5 : -1 === e5.indexOf("-") && H2.test(o6) ? o6 = o6.replace(Y, "-$&").toLowerCase() : null === i5 && (i5 = void 0) : l5 = o6 = "oninput", "oninput" === l5 && u5[o6 = l5] && (o6 = "oninputCapture"), u5[o6] = i5;
        }
      }
      "select" == e5 && u5.multiple && Array.isArray(u5.value) && (u5.value = S(t5.children).forEach(function(n5) {
        n5.props.selected = -1 != u5.value.indexOf(n5.props.value);
      })), "select" == e5 && null != u5.defaultValue && (u5.value = S(t5.children).forEach(function(n5) {
        n5.props.selected = u5.multiple ? -1 != u5.defaultValue.indexOf(n5.props.value) : u5.defaultValue == n5.props.value;
      })), t5.class && !t5.className ? (u5.class = t5.class, Object.defineProperty(u5, "className", en)) : (t5.className && !t5.class || t5.class && t5.className) && (u5.class = u5.className = t5.className), n4.props = u5;
    }(n3), n3.$$typeof = B3, rn && rn(n3);
  };
  var un = l.__r;
  l.__r = function(n3) {
    un && un(n3), tn = n3.__c;
  };
  var on = l.diffed;
  l.diffed = function(n3) {
    on && on(n3);
    var t5 = n3.props, e5 = n3.__e;
    null != e5 && "textarea" === n3.type && "value" in t5 && t5.value !== e5.value && (e5.value = null == t5.value ? "" : t5.value), tn = null;
  };

  // ../node_modules/.pnpm/preact@10.13.2/node_modules/preact/dist/preact.module.js
  var n2;
  var l3;
  var u3;
  var i3;
  var t3;
  var r3;
  var o3;
  var f3;
  var e3;
  var c3 = {};
  var s3 = [];
  var a3 = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
  function h3(n3, l5) {
    for (var u5 in l5)
      n3[u5] = l5[u5];
    return n3;
  }
  function v3(n3) {
    var l5 = n3.parentNode;
    l5 && l5.removeChild(n3);
  }
  function y3(l5, u5, i5) {
    var t5, r5, o6, f5 = {};
    for (o6 in u5)
      "key" == o6 ? t5 = u5[o6] : "ref" == o6 ? r5 = u5[o6] : f5[o6] = u5[o6];
    if (arguments.length > 2 && (f5.children = arguments.length > 3 ? n2.call(arguments, 2) : i5), "function" == typeof l5 && null != l5.defaultProps)
      for (o6 in l5.defaultProps)
        void 0 === f5[o6] && (f5[o6] = l5.defaultProps[o6]);
    return p3(l5, f5, t5, r5, null);
  }
  function p3(n3, i5, t5, r5, o6) {
    var f5 = { type: n3, props: i5, key: t5, ref: r5, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: null == o6 ? ++u3 : o6 };
    return null == o6 && null != l3.vnode && l3.vnode(f5), f5;
  }
  function _3(n3) {
    return n3.children;
  }
  function k3(n3, l5) {
    this.props = n3, this.context = l5;
  }
  function b3(n3, l5) {
    if (null == l5)
      return n3.__ ? b3(n3.__, n3.__.__k.indexOf(n3) + 1) : null;
    for (var u5; l5 < n3.__k.length; l5++)
      if (null != (u5 = n3.__k[l5]) && null != u5.__e)
        return u5.__e;
    return "function" == typeof n3.type ? b3(n3) : null;
  }
  function g4(n3) {
    var l5, u5;
    if (null != (n3 = n3.__) && null != n3.__c) {
      for (n3.__e = n3.__c.base = null, l5 = 0; l5 < n3.__k.length; l5++)
        if (null != (u5 = n3.__k[l5]) && null != u5.__e) {
          n3.__e = n3.__c.base = u5.__e;
          break;
        }
      return g4(n3);
    }
  }
  function m3(n3) {
    (!n3.__d && (n3.__d = true) && t3.push(n3) && !w4.__r++ || r3 !== l3.debounceRendering) && ((r3 = l3.debounceRendering) || o3)(w4);
  }
  function w4() {
    var n3, l5, u5, i5, r5, o6, e5, c5;
    for (t3.sort(f3); n3 = t3.shift(); )
      n3.__d && (l5 = t3.length, i5 = void 0, r5 = void 0, e5 = (o6 = (u5 = n3).__v).__e, (c5 = u5.__P) && (i5 = [], (r5 = h3({}, o6)).__v = o6.__v + 1, L3(c5, o6, r5, u5.__n, void 0 !== c5.ownerSVGElement, null != o6.__h ? [e5] : null, i5, null == e5 ? b3(o6) : e5, o6.__h), M2(i5, o6), o6.__e != e5 && g4(o6)), t3.length > l5 && t3.sort(f3));
    w4.__r = 0;
  }
  function x4(n3, l5, u5, i5, t5, r5, o6, f5, e5, a5) {
    var h5, v5, y5, d5, k6, g7, m5, w7 = i5 && i5.__k || s3, x7 = w7.length;
    for (u5.__k = [], h5 = 0; h5 < l5.length; h5++)
      if (null != (d5 = u5.__k[h5] = null == (d5 = l5[h5]) || "boolean" == typeof d5 || "function" == typeof d5 ? null : "string" == typeof d5 || "number" == typeof d5 || "bigint" == typeof d5 ? p3(null, d5, null, null, d5) : Array.isArray(d5) ? p3(_3, { children: d5 }, null, null, null) : d5.__b > 0 ? p3(d5.type, d5.props, d5.key, d5.ref ? d5.ref : null, d5.__v) : d5)) {
        if (d5.__ = u5, d5.__b = u5.__b + 1, null === (y5 = w7[h5]) || y5 && d5.key == y5.key && d5.type === y5.type)
          w7[h5] = void 0;
        else
          for (v5 = 0; v5 < x7; v5++) {
            if ((y5 = w7[v5]) && d5.key == y5.key && d5.type === y5.type) {
              w7[v5] = void 0;
              break;
            }
            y5 = null;
          }
        L3(n3, d5, y5 = y5 || c3, t5, r5, o6, f5, e5, a5), k6 = d5.__e, (v5 = d5.ref) && y5.ref != v5 && (m5 || (m5 = []), y5.ref && m5.push(y5.ref, null, d5), m5.push(v5, d5.__c || k6, d5)), null != k6 ? (null == g7 && (g7 = k6), "function" == typeof d5.type && d5.__k === y5.__k ? d5.__d = e5 = A3(d5, e5, n3) : e5 = C3(n3, d5, y5, w7, k6, e5), "function" == typeof u5.type && (u5.__d = e5)) : e5 && y5.__e == e5 && e5.parentNode != n3 && (e5 = b3(y5));
      }
    for (u5.__e = g7, h5 = x7; h5--; )
      null != w7[h5] && ("function" == typeof u5.type && null != w7[h5].__e && w7[h5].__e == u5.__d && (u5.__d = $3(i5).nextSibling), S2(w7[h5], w7[h5]));
    if (m5)
      for (h5 = 0; h5 < m5.length; h5++)
        O2(m5[h5], m5[++h5], m5[++h5]);
  }
  function A3(n3, l5, u5) {
    for (var i5, t5 = n3.__k, r5 = 0; t5 && r5 < t5.length; r5++)
      (i5 = t5[r5]) && (i5.__ = n3, l5 = "function" == typeof i5.type ? A3(i5, l5, u5) : C3(u5, i5, i5, t5, i5.__e, l5));
    return l5;
  }
  function P2(n3, l5) {
    return l5 = l5 || [], null == n3 || "boolean" == typeof n3 || (Array.isArray(n3) ? n3.some(function(n4) {
      P2(n4, l5);
    }) : l5.push(n3)), l5;
  }
  function C3(n3, l5, u5, i5, t5, r5) {
    var o6, f5, e5;
    if (void 0 !== l5.__d)
      o6 = l5.__d, l5.__d = void 0;
    else if (null == u5 || t5 != r5 || null == t5.parentNode)
      n:
        if (null == r5 || r5.parentNode !== n3)
          n3.appendChild(t5), o6 = null;
        else {
          for (f5 = r5, e5 = 0; (f5 = f5.nextSibling) && e5 < i5.length; e5 += 1)
            if (f5 == t5)
              break n;
          n3.insertBefore(t5, r5), o6 = r5;
        }
    return void 0 !== o6 ? o6 : t5.nextSibling;
  }
  function $3(n3) {
    var l5, u5, i5;
    if (null == n3.type || "string" == typeof n3.type)
      return n3.__e;
    if (n3.__k) {
      for (l5 = n3.__k.length - 1; l5 >= 0; l5--)
        if ((u5 = n3.__k[l5]) && (i5 = $3(u5)))
          return i5;
    }
    return null;
  }
  function H3(n3, l5, u5, i5, t5) {
    var r5;
    for (r5 in u5)
      "children" === r5 || "key" === r5 || r5 in l5 || T4(n3, r5, null, u5[r5], i5);
    for (r5 in l5)
      t5 && "function" != typeof l5[r5] || "children" === r5 || "key" === r5 || "value" === r5 || "checked" === r5 || u5[r5] === l5[r5] || T4(n3, r5, l5[r5], u5[r5], i5);
  }
  function I3(n3, l5, u5) {
    "-" === l5[0] ? n3.setProperty(l5, null == u5 ? "" : u5) : n3[l5] = null == u5 ? "" : "number" != typeof u5 || a3.test(l5) ? u5 : u5 + "px";
  }
  function T4(n3, l5, u5, i5, t5) {
    var r5;
    n:
      if ("style" === l5)
        if ("string" == typeof u5)
          n3.style.cssText = u5;
        else {
          if ("string" == typeof i5 && (n3.style.cssText = i5 = ""), i5)
            for (l5 in i5)
              u5 && l5 in u5 || I3(n3.style, l5, "");
          if (u5)
            for (l5 in u5)
              i5 && u5[l5] === i5[l5] || I3(n3.style, l5, u5[l5]);
        }
      else if ("o" === l5[0] && "n" === l5[1])
        r5 = l5 !== (l5 = l5.replace(/Capture$/, "")), l5 = l5.toLowerCase() in n3 ? l5.toLowerCase().slice(2) : l5.slice(2), n3.l || (n3.l = {}), n3.l[l5 + r5] = u5, u5 ? i5 || n3.addEventListener(l5, r5 ? z3 : j3, r5) : n3.removeEventListener(l5, r5 ? z3 : j3, r5);
      else if ("dangerouslySetInnerHTML" !== l5) {
        if (t5)
          l5 = l5.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
        else if ("width" !== l5 && "height" !== l5 && "href" !== l5 && "list" !== l5 && "form" !== l5 && "tabIndex" !== l5 && "download" !== l5 && l5 in n3)
          try {
            n3[l5] = null == u5 ? "" : u5;
            break n;
          } catch (n4) {
          }
        "function" == typeof u5 || (null == u5 || false === u5 && "-" !== l5[4] ? n3.removeAttribute(l5) : n3.setAttribute(l5, u5));
      }
  }
  function j3(n3) {
    return this.l[n3.type + false](l3.event ? l3.event(n3) : n3);
  }
  function z3(n3) {
    return this.l[n3.type + true](l3.event ? l3.event(n3) : n3);
  }
  function L3(n3, u5, i5, t5, r5, o6, f5, e5, c5) {
    var s5, a5, v5, y5, p5, d5, b5, g7, m5, w7, A5, P4, C5, $5, H5, I5 = u5.type;
    if (void 0 !== u5.constructor)
      return null;
    null != i5.__h && (c5 = i5.__h, e5 = u5.__e = i5.__e, u5.__h = null, o6 = [e5]), (s5 = l3.__b) && s5(u5);
    try {
      n:
        if ("function" == typeof I5) {
          if (g7 = u5.props, m5 = (s5 = I5.contextType) && t5[s5.__c], w7 = s5 ? m5 ? m5.props.value : s5.__ : t5, i5.__c ? b5 = (a5 = u5.__c = i5.__c).__ = a5.__E : ("prototype" in I5 && I5.prototype.render ? u5.__c = a5 = new I5(g7, w7) : (u5.__c = a5 = new k3(g7, w7), a5.constructor = I5, a5.render = q4), m5 && m5.sub(a5), a5.props = g7, a5.state || (a5.state = {}), a5.context = w7, a5.__n = t5, v5 = a5.__d = true, a5.__h = [], a5._sb = []), null == a5.__s && (a5.__s = a5.state), null != I5.getDerivedStateFromProps && (a5.__s == a5.state && (a5.__s = h3({}, a5.__s)), h3(a5.__s, I5.getDerivedStateFromProps(g7, a5.__s))), y5 = a5.props, p5 = a5.state, a5.__v = u5, v5)
            null == I5.getDerivedStateFromProps && null != a5.componentWillMount && a5.componentWillMount(), null != a5.componentDidMount && a5.__h.push(a5.componentDidMount);
          else {
            if (null == I5.getDerivedStateFromProps && g7 !== y5 && null != a5.componentWillReceiveProps && a5.componentWillReceiveProps(g7, w7), !a5.__e && null != a5.shouldComponentUpdate && false === a5.shouldComponentUpdate(g7, a5.__s, w7) || u5.__v === i5.__v) {
              for (u5.__v !== i5.__v && (a5.props = g7, a5.state = a5.__s, a5.__d = false), a5.__e = false, u5.__e = i5.__e, u5.__k = i5.__k, u5.__k.forEach(function(n4) {
                n4 && (n4.__ = u5);
              }), A5 = 0; A5 < a5._sb.length; A5++)
                a5.__h.push(a5._sb[A5]);
              a5._sb = [], a5.__h.length && f5.push(a5);
              break n;
            }
            null != a5.componentWillUpdate && a5.componentWillUpdate(g7, a5.__s, w7), null != a5.componentDidUpdate && a5.__h.push(function() {
              a5.componentDidUpdate(y5, p5, d5);
            });
          }
          if (a5.context = w7, a5.props = g7, a5.__P = n3, P4 = l3.__r, C5 = 0, "prototype" in I5 && I5.prototype.render) {
            for (a5.state = a5.__s, a5.__d = false, P4 && P4(u5), s5 = a5.render(a5.props, a5.state, a5.context), $5 = 0; $5 < a5._sb.length; $5++)
              a5.__h.push(a5._sb[$5]);
            a5._sb = [];
          } else
            do {
              a5.__d = false, P4 && P4(u5), s5 = a5.render(a5.props, a5.state, a5.context), a5.state = a5.__s;
            } while (a5.__d && ++C5 < 25);
          a5.state = a5.__s, null != a5.getChildContext && (t5 = h3(h3({}, t5), a5.getChildContext())), v5 || null == a5.getSnapshotBeforeUpdate || (d5 = a5.getSnapshotBeforeUpdate(y5, p5)), H5 = null != s5 && s5.type === _3 && null == s5.key ? s5.props.children : s5, x4(n3, Array.isArray(H5) ? H5 : [H5], u5, i5, t5, r5, o6, f5, e5, c5), a5.base = u5.__e, u5.__h = null, a5.__h.length && f5.push(a5), b5 && (a5.__E = a5.__ = null), a5.__e = false;
        } else
          null == o6 && u5.__v === i5.__v ? (u5.__k = i5.__k, u5.__e = i5.__e) : u5.__e = N3(i5.__e, u5, i5, t5, r5, o6, f5, c5);
      (s5 = l3.diffed) && s5(u5);
    } catch (n4) {
      u5.__v = null, (c5 || null != o6) && (u5.__e = e5, u5.__h = !!c5, o6[o6.indexOf(e5)] = null), l3.__e(n4, u5, i5);
    }
  }
  function M2(n3, u5) {
    l3.__c && l3.__c(u5, n3), n3.some(function(u6) {
      try {
        n3 = u6.__h, u6.__h = [], n3.some(function(n4) {
          n4.call(u6);
        });
      } catch (n4) {
        l3.__e(n4, u6.__v);
      }
    });
  }
  function N3(l5, u5, i5, t5, r5, o6, f5, e5) {
    var s5, a5, h5, y5 = i5.props, p5 = u5.props, d5 = u5.type, _6 = 0;
    if ("svg" === d5 && (r5 = true), null != o6) {
      for (; _6 < o6.length; _6++)
        if ((s5 = o6[_6]) && "setAttribute" in s5 == !!d5 && (d5 ? s5.localName === d5 : 3 === s5.nodeType)) {
          l5 = s5, o6[_6] = null;
          break;
        }
    }
    if (null == l5) {
      if (null === d5)
        return document.createTextNode(p5);
      l5 = r5 ? document.createElementNS("http://www.w3.org/2000/svg", d5) : document.createElement(d5, p5.is && p5), o6 = null, e5 = false;
    }
    if (null === d5)
      y5 === p5 || e5 && l5.data === p5 || (l5.data = p5);
    else {
      if (o6 = o6 && n2.call(l5.childNodes), a5 = (y5 = i5.props || c3).dangerouslySetInnerHTML, h5 = p5.dangerouslySetInnerHTML, !e5) {
        if (null != o6)
          for (y5 = {}, _6 = 0; _6 < l5.attributes.length; _6++)
            y5[l5.attributes[_6].name] = l5.attributes[_6].value;
        (h5 || a5) && (h5 && (a5 && h5.__html == a5.__html || h5.__html === l5.innerHTML) || (l5.innerHTML = h5 && h5.__html || ""));
      }
      if (H3(l5, p5, y5, r5, e5), h5)
        u5.__k = [];
      else if (_6 = u5.props.children, x4(l5, Array.isArray(_6) ? _6 : [_6], u5, i5, t5, r5 && "foreignObject" !== d5, o6, f5, o6 ? o6[0] : i5.__k && b3(i5, 0), e5), null != o6)
        for (_6 = o6.length; _6--; )
          null != o6[_6] && v3(o6[_6]);
      e5 || ("value" in p5 && void 0 !== (_6 = p5.value) && (_6 !== l5.value || "progress" === d5 && !_6 || "option" === d5 && _6 !== y5.value) && T4(l5, "value", _6, y5.value, false), "checked" in p5 && void 0 !== (_6 = p5.checked) && _6 !== l5.checked && T4(l5, "checked", _6, y5.checked, false));
    }
    return l5;
  }
  function O2(n3, u5, i5) {
    try {
      "function" == typeof n3 ? n3(u5) : n3.current = u5;
    } catch (n4) {
      l3.__e(n4, i5);
    }
  }
  function S2(n3, u5, i5) {
    var t5, r5;
    if (l3.unmount && l3.unmount(n3), (t5 = n3.ref) && (t5.current && t5.current !== n3.__e || O2(t5, null, u5)), null != (t5 = n3.__c)) {
      if (t5.componentWillUnmount)
        try {
          t5.componentWillUnmount();
        } catch (n4) {
          l3.__e(n4, u5);
        }
      t5.base = t5.__P = null, n3.__c = void 0;
    }
    if (t5 = n3.__k)
      for (r5 = 0; r5 < t5.length; r5++)
        t5[r5] && S2(t5[r5], u5, i5 || "function" != typeof n3.type);
    i5 || null == n3.__e || v3(n3.__e), n3.__ = n3.__e = n3.__d = void 0;
  }
  function q4(n3, l5, u5) {
    return this.constructor(n3, u5);
  }
  function B4(u5, i5, t5) {
    var r5, o6, f5;
    l3.__ && l3.__(u5, i5), o6 = (r5 = "function" == typeof t5) ? null : t5 && t5.__k || i5.__k, f5 = [], L3(i5, u5 = (!r5 && t5 || i5).__k = y3(_3, null, [u5]), o6 || c3, c3, void 0 !== i5.ownerSVGElement, !r5 && t5 ? [t5] : o6 ? null : i5.firstChild ? n2.call(i5.childNodes) : null, f5, !r5 && t5 ? t5 : o6 ? o6.__e : i5.firstChild, r5), M2(f5, u5);
  }
  function E2(l5, u5, i5) {
    var t5, r5, o6, f5 = h3({}, l5.props);
    for (o6 in u5)
      "key" == o6 ? t5 = u5[o6] : "ref" == o6 ? r5 = u5[o6] : f5[o6] = u5[o6];
    return arguments.length > 2 && (f5.children = arguments.length > 3 ? n2.call(arguments, 2) : i5), p3(l5.type, f5, t5 || l5.key, r5 || l5.ref, null);
  }
  function F4(n3, l5) {
    var u5 = { __c: l5 = "__cC" + e3++, __: n3, Consumer: function(n4, l6) {
      return n4.children(l6);
    }, Provider: function(n4) {
      var u6, i5;
      return this.getChildContext || (u6 = [], (i5 = {})[l5] = this, this.getChildContext = function() {
        return i5;
      }, this.shouldComponentUpdate = function(n5) {
        this.props.value !== n5.value && u6.some(function(n6) {
          n6.__e = true, m3(n6);
        });
      }, this.sub = function(n5) {
        u6.push(n5);
        var l6 = n5.componentWillUnmount;
        n5.componentWillUnmount = function() {
          u6.splice(u6.indexOf(n5), 1), l6 && l6.call(n5);
        };
      }), n4.children;
    } };
    return u5.Provider.__ = u5.Consumer.contextType = u5;
  }
  n2 = s3.slice, l3 = { __e: function(n3, l5, u5, i5) {
    for (var t5, r5, o6; l5 = l5.__; )
      if ((t5 = l5.__c) && !t5.__)
        try {
          if ((r5 = t5.constructor) && null != r5.getDerivedStateFromError && (t5.setState(r5.getDerivedStateFromError(n3)), o6 = t5.__d), null != t5.componentDidCatch && (t5.componentDidCatch(n3, i5 || {}), o6 = t5.__d), o6)
            return t5.__E = t5;
        } catch (l6) {
          n3 = l6;
        }
    throw n3;
  } }, u3 = 0, i3 = function(n3) {
    return null != n3 && void 0 === n3.constructor;
  }, k3.prototype.setState = function(n3, l5) {
    var u5;
    u5 = null != this.__s && this.__s !== this.state ? this.__s : this.__s = h3({}, this.state), "function" == typeof n3 && (n3 = n3(h3({}, u5), this.props)), n3 && h3(u5, n3), null != n3 && this.__v && (l5 && this._sb.push(l5), m3(this));
  }, k3.prototype.forceUpdate = function(n3) {
    this.__v && (this.__e = true, n3 && this.__h.push(n3), m3(this));
  }, k3.prototype.render = _3, t3 = [], o3 = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, f3 = function(n3, l5) {
    return n3.__v.__b - l5.__v.__b;
  }, w4.__r = 0, e3 = 0;

  // ../node_modules/.pnpm/preact@10.13.2/node_modules/preact/hooks/dist/hooks.module.js
  var t4;
  var r4;
  var u4;
  var i4;
  var o4 = 0;
  var f4 = [];
  var c4 = [];
  var e4 = l3.__b;
  var a4 = l3.__r;
  var v4 = l3.diffed;
  var l4 = l3.__c;
  var m4 = l3.unmount;
  function d3(t5, u5) {
    l3.__h && l3.__h(r4, t5, o4 || u5), o4 = 0;
    var i5 = r4.__H || (r4.__H = { __: [], __h: [] });
    return t5 >= i5.__.length && i5.__.push({ __V: c4 }), i5.__[t5];
  }
  function h4(n3) {
    return o4 = 1, s4(B5, n3);
  }
  function s4(n3, u5, i5) {
    var o6 = d3(t4++, 2);
    if (o6.t = n3, !o6.__c && (o6.__ = [i5 ? i5(u5) : B5(void 0, u5), function(n4) {
      var t5 = o6.__N ? o6.__N[0] : o6.__[0], r5 = o6.t(t5, n4);
      t5 !== r5 && (o6.__N = [r5, o6.__[1]], o6.__c.setState({}));
    }], o6.__c = r4, !r4.u)) {
      var f5 = function(n4, t5, r5) {
        if (!o6.__c.__H)
          return true;
        var u6 = o6.__c.__H.__.filter(function(n5) {
          return n5.__c;
        });
        if (u6.every(function(n5) {
          return !n5.__N;
        }))
          return !c5 || c5.call(this, n4, t5, r5);
        var i6 = false;
        return u6.forEach(function(n5) {
          if (n5.__N) {
            var t6 = n5.__[0];
            n5.__ = n5.__N, n5.__N = void 0, t6 !== n5.__[0] && (i6 = true);
          }
        }), !(!i6 && o6.__c.props === n4) && (!c5 || c5.call(this, n4, t5, r5));
      };
      r4.u = true;
      var c5 = r4.shouldComponentUpdate, e5 = r4.componentWillUpdate;
      r4.componentWillUpdate = function(n4, t5, r5) {
        if (this.__e) {
          var u6 = c5;
          c5 = void 0, f5(n4, t5, r5), c5 = u6;
        }
        e5 && e5.call(this, n4, t5, r5);
      }, r4.shouldComponentUpdate = f5;
    }
    return o6.__N || o6.__;
  }
  function p4(u5, i5) {
    var o6 = d3(t4++, 3);
    !l3.__s && z4(o6.__H, i5) && (o6.__ = u5, o6.i = i5, r4.__H.__h.push(o6));
  }
  function y4(u5, i5) {
    var o6 = d3(t4++, 4);
    !l3.__s && z4(o6.__H, i5) && (o6.__ = u5, o6.i = i5, r4.__h.push(o6));
  }
  function _4(n3) {
    return o4 = 5, F5(function() {
      return { current: n3 };
    }, []);
  }
  function A4(n3, t5, r5) {
    o4 = 6, y4(function() {
      return "function" == typeof n3 ? (n3(t5()), function() {
        return n3(null);
      }) : n3 ? (n3.current = t5(), function() {
        return n3.current = null;
      }) : void 0;
    }, null == r5 ? r5 : r5.concat(n3));
  }
  function F5(n3, r5) {
    var u5 = d3(t4++, 7);
    return z4(u5.__H, r5) ? (u5.__V = n3(), u5.i = r5, u5.__h = n3, u5.__V) : u5.__;
  }
  function T5(n3, t5) {
    return o4 = 8, F5(function() {
      return n3;
    }, t5);
  }
  function V3() {
    var n3 = d3(t4++, 11);
    if (!n3.__) {
      for (var u5 = r4.__v; null !== u5 && !u5.__m && null !== u5.__; )
        u5 = u5.__;
      var i5 = u5.__m || (u5.__m = [0, 0]);
      n3.__ = "P" + i5[0] + "-" + i5[1]++;
    }
    return n3.__;
  }
  function b4() {
    for (var t5; t5 = f4.shift(); )
      if (t5.__P && t5.__H)
        try {
          t5.__H.__h.forEach(k4), t5.__H.__h.forEach(w5), t5.__H.__h = [];
        } catch (r5) {
          t5.__H.__h = [], l3.__e(r5, t5.__v);
        }
  }
  l3.__b = function(n3) {
    r4 = null, e4 && e4(n3);
  }, l3.__r = function(n3) {
    a4 && a4(n3), t4 = 0;
    var i5 = (r4 = n3.__c).__H;
    i5 && (u4 === r4 ? (i5.__h = [], r4.__h = [], i5.__.forEach(function(n4) {
      n4.__N && (n4.__ = n4.__N), n4.__V = c4, n4.__N = n4.i = void 0;
    })) : (i5.__h.forEach(k4), i5.__h.forEach(w5), i5.__h = [])), u4 = r4;
  }, l3.diffed = function(t5) {
    v4 && v4(t5);
    var o6 = t5.__c;
    o6 && o6.__H && (o6.__H.__h.length && (1 !== f4.push(o6) && i4 === l3.requestAnimationFrame || ((i4 = l3.requestAnimationFrame) || j4)(b4)), o6.__H.__.forEach(function(n3) {
      n3.i && (n3.__H = n3.i), n3.__V !== c4 && (n3.__ = n3.__V), n3.i = void 0, n3.__V = c4;
    })), u4 = r4 = null;
  }, l3.__c = function(t5, r5) {
    r5.some(function(t6) {
      try {
        t6.__h.forEach(k4), t6.__h = t6.__h.filter(function(n3) {
          return !n3.__ || w5(n3);
        });
      } catch (u5) {
        r5.some(function(n3) {
          n3.__h && (n3.__h = []);
        }), r5 = [], l3.__e(u5, t6.__v);
      }
    }), l4 && l4(t5, r5);
  }, l3.unmount = function(t5) {
    m4 && m4(t5);
    var r5, u5 = t5.__c;
    u5 && u5.__H && (u5.__H.__.forEach(function(n3) {
      try {
        k4(n3);
      } catch (n4) {
        r5 = n4;
      }
    }), u5.__H = void 0, r5 && l3.__e(r5, u5.__v));
  };
  var g5 = "function" == typeof requestAnimationFrame;
  function j4(n3) {
    var t5, r5 = function() {
      clearTimeout(u5), g5 && cancelAnimationFrame(t5), setTimeout(n3);
    }, u5 = setTimeout(r5, 100);
    g5 && (t5 = requestAnimationFrame(r5));
  }
  function k4(n3) {
    var t5 = r4, u5 = n3.__c;
    "function" == typeof u5 && (n3.__c = void 0, u5()), r4 = t5;
  }
  function w5(n3) {
    var t5 = r4;
    n3.__c = n3.__(), r4 = t5;
  }
  function z4(n3, t5) {
    return !n3 || n3.length !== t5.length || t5.some(function(t6, r5) {
      return t6 !== n3[r5];
    });
  }
  function B5(n3, t5) {
    return "function" == typeof t5 ? t5(n3) : t5;
  }

  // ../node_modules/.pnpm/preact@10.13.2/node_modules/preact/compat/dist/compat.module.js
  function g6(n3, t5) {
    for (var e5 in t5)
      n3[e5] = t5[e5];
    return n3;
  }
  function C4(n3, t5) {
    for (var e5 in n3)
      if ("__source" !== e5 && !(e5 in t5))
        return true;
    for (var r5 in t5)
      if ("__source" !== r5 && n3[r5] !== t5[r5])
        return true;
    return false;
  }
  function w6(n3) {
    this.props = n3;
  }
  function x6(n3, e5) {
    function r5(n4) {
      var t5 = this.props.ref, r6 = t5 == n4.ref;
      return !r6 && t5 && (t5.call ? t5(null) : t5.current = null), e5 ? !e5(this.props, n4) || !r6 : C4(this.props, n4);
    }
    function u5(e6) {
      return this.shouldComponentUpdate = r5, y3(n3, e6);
    }
    return u5.displayName = "Memo(" + (n3.displayName || n3.name) + ")", u5.prototype.isReactComponent = true, u5.__f = true, u5;
  }
  (w6.prototype = new k3()).isPureReactComponent = true, w6.prototype.shouldComponentUpdate = function(n3, t5) {
    return C4(this.props, n3) || C4(this.state, t5);
  };
  var R2 = l3.__b;
  l3.__b = function(n3) {
    n3.type && n3.type.__f && n3.ref && (n3.props.ref = n3.ref, n3.ref = null), R2 && R2(n3);
  };
  var N4 = "undefined" != typeof Symbol && Symbol.for && Symbol.for("react.forward_ref") || 3911;
  function k5(n3) {
    function t5(t6) {
      var e5 = g6({}, t6);
      return delete e5.ref, n3(e5, t6.ref || null);
    }
    return t5.$$typeof = N4, t5.render = t5, t5.prototype.isReactComponent = t5.__f = true, t5.displayName = "ForwardRef(" + (n3.displayName || n3.name) + ")", t5;
  }
  var T6 = l3.__e;
  l3.__e = function(n3, t5, e5, r5) {
    if (n3.then) {
      for (var u5, o6 = t5; o6 = o6.__; )
        if ((u5 = o6.__c) && u5.__c)
          return null == t5.__e && (t5.__e = e5.__e, t5.__k = e5.__k), u5.__c(n3, t5);
    }
    T6(n3, t5, e5, r5);
  };
  var I4 = l3.unmount;
  function L4(n3, t5, e5) {
    return n3 && (n3.__c && n3.__c.__H && (n3.__c.__H.__.forEach(function(n4) {
      "function" == typeof n4.__c && n4.__c();
    }), n3.__c.__H = null), null != (n3 = g6({}, n3)).__c && (n3.__c.__P === e5 && (n3.__c.__P = t5), n3.__c = null), n3.__k = n3.__k && n3.__k.map(function(n4) {
      return L4(n4, t5, e5);
    })), n3;
  }
  function U2(n3, t5, e5) {
    return n3 && (n3.__v = null, n3.__k = n3.__k && n3.__k.map(function(n4) {
      return U2(n4, t5, e5);
    }), n3.__c && n3.__c.__P === t5 && (n3.__e && e5.insertBefore(n3.__e, n3.__d), n3.__c.__e = true, n3.__c.__P = e5)), n3;
  }
  function D4() {
    this.__u = 0, this.t = null, this.__b = null;
  }
  function F6(n3) {
    var t5 = n3.__.__c;
    return t5 && t5.__a && t5.__a(n3);
  }
  function V4() {
    this.u = null, this.o = null;
  }
  l3.unmount = function(n3) {
    var t5 = n3.__c;
    t5 && t5.__R && t5.__R(), t5 && true === n3.__h && (n3.type = null), I4 && I4(n3);
  }, (D4.prototype = new k3()).__c = function(n3, t5) {
    var e5 = t5.__c, r5 = this;
    null == r5.t && (r5.t = []), r5.t.push(e5);
    var u5 = F6(r5.__v), o6 = false, i5 = function() {
      o6 || (o6 = true, e5.__R = null, u5 ? u5(l5) : l5());
    };
    e5.__R = i5;
    var l5 = function() {
      if (!--r5.__u) {
        if (r5.state.__a) {
          var n4 = r5.state.__a;
          r5.__v.__k[0] = U2(n4, n4.__c.__P, n4.__c.__O);
        }
        var t6;
        for (r5.setState({ __a: r5.__b = null }); t6 = r5.t.pop(); )
          t6.forceUpdate();
      }
    }, c5 = true === t5.__h;
    r5.__u++ || c5 || r5.setState({ __a: r5.__b = r5.__v.__k[0] }), n3.then(i5, i5);
  }, D4.prototype.componentWillUnmount = function() {
    this.t = [];
  }, D4.prototype.render = function(n3, e5) {
    if (this.__b) {
      if (this.__v.__k) {
        var r5 = document.createElement("div"), o6 = this.__v.__k[0].__c;
        this.__v.__k[0] = L4(this.__b, r5, o6.__O = o6.__P);
      }
      this.__b = null;
    }
    var i5 = e5.__a && y3(_3, null, n3.fallback);
    return i5 && (i5.__h = null), [y3(_3, null, e5.__a ? null : n3.children), i5];
  };
  var W2 = function(n3, t5, e5) {
    if (++e5[1] === e5[0] && n3.o.delete(t5), n3.props.revealOrder && ("t" !== n3.props.revealOrder[0] || !n3.o.size))
      for (e5 = n3.u; e5; ) {
        for (; e5.length > 3; )
          e5.pop()();
        if (e5[1] < e5[0])
          break;
        n3.u = e5 = e5[2];
      }
  };
  function P3(n3) {
    return this.getChildContext = function() {
      return n3.context;
    }, n3.children;
  }
  function j5(n3) {
    var e5 = this, r5 = n3.i;
    e5.componentWillUnmount = function() {
      B4(null, e5.l), e5.l = null, e5.i = null;
    }, e5.i && e5.i !== r5 && e5.componentWillUnmount(), n3.__v ? (e5.l || (e5.i = r5, e5.l = { nodeType: 1, parentNode: r5, childNodes: [], appendChild: function(n4) {
      this.childNodes.push(n4), e5.i.appendChild(n4);
    }, insertBefore: function(n4, t5) {
      this.childNodes.push(n4), e5.i.appendChild(n4);
    }, removeChild: function(n4) {
      this.childNodes.splice(this.childNodes.indexOf(n4) >>> 1, 1), e5.i.removeChild(n4);
    } }), B4(y3(P3, { context: e5.context }, n3.__v), e5.l)) : e5.l && e5.componentWillUnmount();
  }
  function z5(n3, e5) {
    var r5 = y3(j5, { __v: n3, i: e5 });
    return r5.containerInfo = e5, r5;
  }
  (V4.prototype = new k3()).__a = function(n3) {
    var t5 = this, e5 = F6(t5.__v), r5 = t5.o.get(n3);
    return r5[0]++, function(u5) {
      var o6 = function() {
        t5.props.revealOrder ? (r5.push(u5), W2(t5, n3, r5)) : u5();
      };
      e5 ? e5(o6) : o6();
    };
  }, V4.prototype.render = function(n3) {
    this.u = null, this.o = /* @__PURE__ */ new Map();
    var t5 = P2(n3.children);
    n3.revealOrder && "b" === n3.revealOrder[0] && t5.reverse();
    for (var e5 = t5.length; e5--; )
      this.o.set(t5[e5], this.u = [1, 0, this.u]);
    return n3.children;
  }, V4.prototype.componentDidUpdate = V4.prototype.componentDidMount = function() {
    var n3 = this;
    this.o.forEach(function(t5, e5) {
      W2(n3, e5, t5);
    });
  };
  var B6 = "undefined" != typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103;
  var H4 = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/;
  var Z2 = /^on(Ani|Tra|Tou|BeforeInp|Compo)/;
  var Y2 = /[A-Z0-9]/g;
  var $4 = "undefined" != typeof document;
  var q6 = function(n3) {
    return ("undefined" != typeof Symbol && "symbol" == typeof Symbol() ? /fil|che|rad/ : /fil|che|ra/).test(n3);
  };
  k3.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(t5) {
    Object.defineProperty(k3.prototype, t5, { configurable: true, get: function() {
      return this["UNSAFE_" + t5];
    }, set: function(n3) {
      Object.defineProperty(this, t5, { configurable: true, writable: true, value: n3 });
    } });
  });
  var K2 = l3.event;
  function Q2() {
  }
  function X2() {
    return this.cancelBubble;
  }
  function nn2() {
    return this.defaultPrevented;
  }
  l3.event = function(n3) {
    return K2 && (n3 = K2(n3)), n3.persist = Q2, n3.isPropagationStopped = X2, n3.isDefaultPrevented = nn2, n3.nativeEvent = n3;
  };
  var tn2;
  var en2 = { enumerable: false, configurable: true, get: function() {
    return this.class;
  } };
  var rn2 = l3.vnode;
  l3.vnode = function(n3) {
    "string" == typeof n3.type && function(n4) {
      var t5 = n4.props, e5 = n4.type, u5 = {};
      for (var o6 in t5) {
        var i5 = t5[o6];
        if (!("value" === o6 && "defaultValue" in t5 && null == i5 || $4 && "children" === o6 && "noscript" === e5 || "class" === o6 || "className" === o6)) {
          var l5 = o6.toLowerCase();
          "defaultValue" === o6 && "value" in t5 && null == t5.value ? o6 = "value" : "download" === o6 && true === i5 ? i5 = "" : "ondoubleclick" === l5 ? o6 = "ondblclick" : "onchange" !== l5 || "input" !== e5 && "textarea" !== e5 || q6(t5.type) ? "onfocus" === l5 ? o6 = "onfocusin" : "onblur" === l5 ? o6 = "onfocusout" : Z2.test(o6) ? o6 = l5 : -1 === e5.indexOf("-") && H4.test(o6) ? o6 = o6.replace(Y2, "-$&").toLowerCase() : null === i5 && (i5 = void 0) : l5 = o6 = "oninput", "oninput" === l5 && u5[o6 = l5] && (o6 = "oninputCapture"), u5[o6] = i5;
        }
      }
      "select" == e5 && u5.multiple && Array.isArray(u5.value) && (u5.value = P2(t5.children).forEach(function(n5) {
        n5.props.selected = -1 != u5.value.indexOf(n5.props.value);
      })), "select" == e5 && null != u5.defaultValue && (u5.value = P2(t5.children).forEach(function(n5) {
        n5.props.selected = u5.multiple ? -1 != u5.defaultValue.indexOf(n5.props.value) : u5.defaultValue == n5.props.value;
      })), t5.class && !t5.className ? (u5.class = t5.class, Object.defineProperty(u5, "className", en2)) : (t5.className && !t5.class || t5.class && t5.className) && (u5.class = u5.className = t5.className), n4.props = u5;
    }(n3), n3.$$typeof = B6, rn2 && rn2(n3);
  };
  var un2 = l3.__r;
  l3.__r = function(n3) {
    un2 && un2(n3), tn2 = n3.__c;
  };
  var on2 = l3.diffed;
  l3.diffed = function(n3) {
    on2 && on2(n3);
    var t5 = n3.props, e5 = n3.__e;
    null != e5 && "textarea" === n3.type && "value" in t5 && t5.value !== e5.value && (e5.value = null == t5.value ? "" : t5.value), tn2 = null;
  };

  // ../dist/util/lib-shared.js
  var EventMapping = {
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
  globalThis["process"] ??= {};
  globalThis["process"]["env"] ??= {};
  var BuildMode = globalThis["process"]["env"]["NODE_ENV"] = globalThis["process"]["env"]["NODE_ENV"] || "production";

  // ../dist/util/use-call-count.js
  window.requestIdleCallback ??= (callback) => {
    return setTimeout(() => {
      callback({ didTimeout: false, timeRemaining: () => {
        return 0;
      } });
    }, 5);
  };
  var timeoutHandle = null;
  function monitorCallCount(hook) {
    if (BuildMode !== "development")
      return;
    const name = hook.name;
    if (filterAll || filters.has(name))
      return;
    console.assert(name.length > 0);
    window._hookCallCount ??= { callCounts: {} };
    window._hookCallCount.callCounts[name] ??= { moment: 0, total: 0 };
    window._hookCallCount.callCounts[name].moment += 1;
    window._hookCallCount.callCounts[name].total += 1;
    if (timeoutHandle == null) {
      timeoutHandle = requestIdleCallback(() => {
        const o6 = Object.entries(window._hookCallCount.callCounts).map(([hook2, counts]) => {
          return { Hook: hook2 || "?", Now: counts?.moment || 0, Total: counts?.total || 0 };
        }).filter(({ Now }) => {
          return !!Now;
        }).sort(({ Now: lhsM }, { Now: rhsM }) => {
          if (!lhsM && !rhsM)
            return 0;
          lhsM ||= Infinity;
          rhsM ||= Infinity;
          return lhsM - rhsM;
        });
        console.table(o6, ["Hook", "Now", "Total"]);
        Object.entries(window._hookCallCount.callCounts).forEach(([, counts]) => {
          counts.moment = 0;
        });
        timeoutHandle = null;
      });
    }
  }
  var filterAll = false;
  var filters = /* @__PURE__ */ new Set();

  // ../dist/util/use-before-layout-effect.js
  var toRun = /* @__PURE__ */ new Map();
  var commitName = "diffed";
  var newCommit = (vnode, ...args) => {
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
  var originalCommit = l3[commitName];
  l3[commitName] = newCommit;
  var incrementingId = 0;
  function nextId() {
    let next = ++incrementingId;
    if (incrementingId >= Number.MAX_SAFE_INTEGER)
      incrementingId = -Number.MAX_SAFE_INTEGER;
    return next;
  }
  function useBeforeLayoutEffect(effect, inputs) {
    monitorCallCount(useBeforeLayoutEffect);
    const ref = _4(null);
    ref.current ??= nextId();
    const id = ref.current;
    if (effect)
      toRun.set(id, { effect, inputs, cleanup: null });
    else
      toRun.delete(id);
  }
  function argsChanged(oldArgs, newArgs) {
    return !!(!oldArgs || oldArgs.length !== newArgs?.length || newArgs?.some((arg, index) => arg !== oldArgs[index]));
  }

  // ../dist/util/lib-preact.js
  function debounceRendering(f5) {
    (l3.debounceRendering ?? queueMicrotask)(f5);
  }
  var onfocusin = "onfocusin";
  var onfocusout = "onfocusout";
  var EventMapping2 = {
    dblclick: "onDblClick",
    focusin: "onfocusin",
    focusout: "onfocusout",
    formdata: "onFormData",
    toggle: "onToggle",
    ...EventMapping
  };

  // ../dist/preact-extensions/use-passive-state.js
  function useEnsureStability(parentHookName, ...values2) {
    if (BuildMode !== "development")
      return;
    const helperToEnsureStability = _4([]);
    const shownError = _4([]);
    useHelper(values2.length, -1);
    values2.forEach(useHelper);
    return;
    function useHelper(value, i5) {
      const index = i5 + 1;
      if (helperToEnsureStability.current[index] === void 0)
        helperToEnsureStability.current[index] = value;
      if (helperToEnsureStability.current[index] != value) {
        if (!shownError.current[index]) {
          debugger;
          console.error(`The hook ${parentHookName} requires some or all of its arguments remain stable across each render; please check the ${i5}-indexed argument (${i5 >= 0 ? JSON.stringify(values2[i5]) : "the number of supposedly stable elements"}).`);
          shownError.current[index] = true;
        }
      }
    }
  }
  function usePassiveState(onChange, getInitialValue, customDebounceRendering) {
    monitorCallCount(usePassiveState);
    const valueRef = _4(Unset);
    const reasonRef = _4(Unset);
    const warningRef = _4(false);
    const dependencyToCompareAgainst = _4(Unset);
    const cleanupCallbackRef = _4(void 0);
    useEnsureStability("usePassiveState", onChange, getInitialValue, customDebounceRendering);
    const onShouldCleanUp = T5(() => {
      const cleanupCallback = cleanupCallbackRef.current;
      if (cleanupCallback)
        cleanupCallback();
    }, []);
    const tryEnsureValue = T5(() => {
      if (valueRef.current === Unset && getInitialValue != void 0) {
        try {
          const initialValue = getInitialValue();
          valueRef.current = initialValue;
          cleanupCallbackRef.current = onChange?.(initialValue, void 0, void 0) ?? void 0;
        } catch (ex) {
        }
      }
    }, [
      /* getInitialValue and onChange intentionally omitted */
    ]);
    const getValue = T5(() => {
      if (warningRef.current)
        console.warn("During onChange, prefer using the (value, prevValue) arguments instead of getValue -- it's ambiguous as to if you're asking for the old or new value at this point in time for this component.");
      if (valueRef.current === Unset)
        tryEnsureValue();
      return valueRef.current === Unset ? void 0 : valueRef.current;
    }, []);
    y4(() => {
      tryEnsureValue();
    }, []);
    const setValue = T5((arg, reason) => {
      const nextValue = arg instanceof Function ? arg(valueRef.current === Unset ? void 0 : valueRef.current) : arg;
      if (
        /*dependencyToCompareAgainst.current === Unset &&*/
        nextValue !== valueRef.current
      ) {
        dependencyToCompareAgainst.current = valueRef.current;
        valueRef.current = nextValue;
        reasonRef.current = reason;
        (customDebounceRendering ?? debounceRendering)(() => {
          const nextReason = reasonRef.current;
          const nextDep = valueRef.current;
          const prevDep = dependencyToCompareAgainst.current;
          if (dependencyToCompareAgainst.current != valueRef.current) {
            valueRef.current = dependencyToCompareAgainst.current = Unset;
            warningRef.current = true;
            try {
              onShouldCleanUp();
              valueRef.current = nextDep;
              cleanupCallbackRef.current = onChange?.(nextDep, prevDep === Unset ? void 0 : prevDep, nextReason) ?? void 0;
            } finally {
              warningRef.current = false;
            }
          }
          dependencyToCompareAgainst.current = Unset;
        });
      }
    }, []);
    return [getValue, setValue];
  }
  var Unset = Symbol();
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
  function runImmediately(f5) {
    f5();
  }

  // ../dist/preact-extensions/use-stable-getter.js
  var Unset2 = Symbol("unset");
  function useStableGetter(value) {
    monitorCallCount(useStableGetter);
    const ref = _4(Unset2);
    useBeforeLayoutEffect(() => {
      ref.current = value;
    }, [value]);
    return T5(() => {
      if (ref.current === Unset2) {
        throw new Error("Value retrieved from useStableGetter() cannot be called during render.");
      }
      return ref.current;
    }, []);
  }
  function useMemoObject(t5) {
    return F5(() => {
      return t5;
    }, Object.values(t5));
  }

  // ../dist/preact-extensions/use-stable-callback.js
  var map = /* @__PURE__ */ new WeakMap();
  function isStableGetter(obj) {
    return map.get(obj) ?? false;
  }
  function setIsStableGetter(obj) {
    map.set(obj, true);
    return obj;
  }
  function useStableCallback(fn, noDeps) {
    monitorCallCount(useStableCallback);
    useEnsureStability("useStableCallback", noDeps == null, noDeps?.length, isStableGetter(fn));
    if (isStableGetter(fn))
      return fn;
    if (noDeps == null) {
      const currentCallbackGetter = useStableGetter(fn);
      return setIsStableGetter(T5((...args) => {
        return currentCallbackGetter()(...args);
      }, []));
    } else {
      console.assert(noDeps.length === 0);
      return setIsStableGetter(T5(fn, []));
    }
  }

  // ../dist/dom-helpers/use-event-handler.js
  function useGlobalHandler(target, type, handler, options, mode) {
    monitorCallCount(useGlobalHandler);
    mode ||= "grouped";
    useEnsureStability("useGlobalHandler", mode);
    if (mode === "grouped") {
      useGlobalHandlerGrouped(target, type, handler, options);
    } else {
      useGlobalHandlerSingle(target, type, handler, options);
    }
  }
  var mapThing = /* @__PURE__ */ new Map();
  function doMapThing(op, target, type, handler, options) {
    if (handler) {
      const optionsKey = JSON.stringify(options);
      const byType = mapThing.get(target) || /* @__PURE__ */ new Map();
      const byOptions = byType.get(type) || /* @__PURE__ */ new Map();
      const info = byOptions.get(optionsKey) || { listener: null, listeners: /* @__PURE__ */ new Set() };
      op(info, handler);
      byOptions.set(optionsKey, info);
      byType.set(type, byOptions);
      mapThing.set(target, byType);
    }
  }
  function addToMapThing(target, type, handler, options) {
    doMapThing((info, h5) => {
      info.listeners.add(h5);
      if (info.listener == null)
        target.addEventListener(type, info.listener = (e5) => info.listeners.forEach((fn) => fn(e5)), options);
    }, target, type, handler, options);
  }
  function removeFromMapThing(target, type, handler, options) {
    doMapThing((info, h5) => {
      info.listeners.delete(h5);
      if (info.listener == null)
        target.removeEventListener(type, info.listener = (e5) => info.listeners.forEach((fn) => fn(e5)), options);
    }, target, type, handler, options);
  }
  function useGlobalHandlerGrouped(target, type, handler, options) {
    let stableHandler = useStableCallback(handler ?? (() => {
    }));
    if (handler == null)
      stableHandler = null;
    p4(() => {
      if (stableHandler) {
        addToMapThing(target, type, stableHandler, options);
        return () => removeFromMapThing(target, type, stableHandler, options);
      }
    }, [target, type, stableHandler]);
  }
  function useGlobalHandlerSingle(target, type, handler, options) {
    let stableHandler = useStableCallback(handler ?? (() => {
    }));
    if (handler == null)
      stableHandler = null;
    p4(() => {
      if (stableHandler) {
        target.addEventListener(type, stableHandler, options);
        return () => target.removeEventListener(type, stableHandler, options);
      }
    }, [target, type, stableHandler]);
  }

  // ../dist/util/assert.js
  function assertEmptyObject(_a) {
  }

  // ../dist/component-detail/dismissal/use-backdrop-dismiss.js
  function useBackdropDismiss({ backdropDismissParameters: { dismissBackdropActive: open, onDismissBackdrop: onCloseUnstable, ...void1 }, refElementPopupReturn: { getElement, ...void3 }, ...void2 }) {
    monitorCallCount(useBackdropDismiss);
    assertEmptyObject(void1);
    assertEmptyObject(void2);
    assertEmptyObject(void3);
    const getOpen = useStableGetter(open);
    const onClose = useStableGetter(onCloseUnstable);
    const onBackdropClick = T5(function onBackdropClick2(e5) {
      if (!getOpen())
        return;
      let element = getElement();
      let foundInsideClick = false;
      if (e5.target && element && element.contains(e5.target)) {
        foundInsideClick = true;
      }
      if (!foundInsideClick) {
        onClose()?.(e5);
      }
    }, []);
    useGlobalHandler(window, "mousedown", open ? onBackdropClick : null, { capture: true });
    useGlobalHandler(window, "touchstart", open ? onBackdropClick : null, { capture: true });
  }

  // ../dist/util/event.js
  var EventDetail = Symbol("event-detail");
  function enhanceEvent(e5, detail) {
    const event = e5 ?? {};
    event[EventDetail] ??= {};
    Object.assign(event[EventDetail], detail);
    return event;
  }

  // ../dist/component-detail/dismissal/use-escape-dismiss.js
  var MagicWindowKey = "__preact-prop-helpers-escape-key-dismiss__";
  function getElementDepth(element) {
    let depth = 0;
    let parent = element.parentElement;
    while (parent) {
      depth += 1;
      parent = parent.parentElement;
    }
    return depth;
  }
  function useEscapeDismiss({ escapeDismissParameters: { onDismissEscape: onClose, dismissEscapeActive: open, getDocument: unstableGetDocument, parentDepth, ...void1 }, refElementPopupReturn: { getElement, ...void2 } }) {
    monitorCallCount(useEscapeDismiss);
    assertEmptyObject(void1);
    assertEmptyObject(void2);
    const stableOnClose = useStableGetter(onClose);
    const getDocument4 = useStableCallback(unstableGetDocument);
    const getDepth = useStableGetter(parentDepth + 1);
    p4(() => {
      const document2 = getDocument4();
      const window2 = document2.defaultView;
      window2[MagicWindowKey] ??= { microtaskQueued: false, elementQueue: /* @__PURE__ */ new Map() };
      const info = window2[MagicWindowKey];
      if (open) {
        window2.addEventListener("keydown", handler, { capture: true });
        return () => {
          const element = getElement();
          if (element && info.elementQueue)
            info.elementQueue.delete(element);
          window2.removeEventListener("keydown", handler, { capture: true });
        };
      }
      function handler(e5) {
        if (e5.key == "Escape") {
          e5.preventDefault();
          e5.stopPropagation();
          const onClose2 = () => {
            stableOnClose()?.(enhanceEvent(e5, { reason: "escape" }));
          };
          const element = getElement();
          if (element) {
            const treeDepth = getElementDepth(element);
            const depth = getDepth();
            info.elementQueue.set(element, { depth, onClose: onClose2, treeDepth });
          }
          if (!info.microtaskQueued) {
            info.microtaskQueued = true;
            setTimeout(() => {
              const { elementQueue } = info;
              info.microtaskQueued = false;
              info.elementQueue = /* @__PURE__ */ new Map();
              let deepestDepth = -Infinity;
              let deepestTreeDepth = -Infinity;
              let _deepestElement = null;
              let deepestOnClose = null;
              for (const [element2, { depth, onClose: onClose3, treeDepth }] of elementQueue) {
                let tieBroken = false;
                if (depth == deepestDepth) {
                  if (treeDepth > deepestTreeDepth) {
                    tieBroken = true;
                  }
                }
                if (depth > deepestDepth || depth == deepestDepth && tieBroken) {
                  deepestDepth = depth;
                  _deepestElement = element2;
                  deepestTreeDepth = treeDepth;
                  deepestOnClose = onClose3;
                }
              }
              deepestOnClose?.();
            }, 0);
          }
        }
      }
    }, [open]);
  }

  // ../dist/component-detail/dismissal/use-lost-focus-dismiss.js
  function useLostFocusDismiss({ refElementPopupReturn: { getElement: getPopupElement, ...void3 }, refElementSourceReturn, lostFocusDismissParameters: { dismissLostFocusActive: open, onDismissLostFocus: onClose, ...void4 }, ...void1 }) {
    monitorCallCount(useLostFocusDismiss);
    const { getElement: getSourceElement, ...void2 } = refElementSourceReturn ?? {};
    assertEmptyObject(void1);
    assertEmptyObject(void2);
    assertEmptyObject(void3);
    assertEmptyObject(void4);
    const stableOnClose = useStableGetter(onClose);
    const getOpen = useStableGetter(open);
    const onLastActiveElementChange = T5((newElement, _prevElement, e5) => {
      const open2 = getOpen();
      const sourceElement = getSourceElement?.();
      const popupElement = getPopupElement();
      if (!(sourceElement?.contains(newElement) || popupElement?.contains(newElement))) {
        if (open2) {
          console.assert(e5 != null);
          stableOnClose()?.(e5);
        }
      }
    }, [getSourceElement]);
    return { activeElementParameters: { onLastActiveElementChange } };
  }

  // ../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_freeGlobal.js
  var freeGlobal = typeof global == "object" && global && global.Object === Object && global;
  var freeGlobal_default = freeGlobal;

  // ../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_root.js
  var freeSelf = typeof self == "object" && self && self.Object === Object && self;
  var root = freeGlobal_default || freeSelf || Function("return this")();
  var root_default = root;

  // ../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_Symbol.js
  var Symbol2 = root_default.Symbol;
  var Symbol_default = Symbol2;

  // ../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_getRawTag.js
  var objectProto = Object.prototype;
  var hasOwnProperty = objectProto.hasOwnProperty;
  var nativeObjectToString = objectProto.toString;
  var symToStringTag = Symbol_default ? Symbol_default.toStringTag : void 0;
  function getRawTag(value) {
    var isOwn = hasOwnProperty.call(value, symToStringTag), tag = value[symToStringTag];
    try {
      value[symToStringTag] = void 0;
      var unmasked = true;
    } catch (e5) {
    }
    var result = nativeObjectToString.call(value);
    if (unmasked) {
      if (isOwn) {
        value[symToStringTag] = tag;
      } else {
        delete value[symToStringTag];
      }
    }
    return result;
  }
  var getRawTag_default = getRawTag;

  // ../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_objectToString.js
  var objectProto2 = Object.prototype;
  var nativeObjectToString2 = objectProto2.toString;
  function objectToString(value) {
    return nativeObjectToString2.call(value);
  }
  var objectToString_default = objectToString;

  // ../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_baseGetTag.js
  var nullTag = "[object Null]";
  var undefinedTag = "[object Undefined]";
  var symToStringTag2 = Symbol_default ? Symbol_default.toStringTag : void 0;
  function baseGetTag(value) {
    if (value == null) {
      return value === void 0 ? undefinedTag : nullTag;
    }
    return symToStringTag2 && symToStringTag2 in Object(value) ? getRawTag_default(value) : objectToString_default(value);
  }
  var baseGetTag_default = baseGetTag;

  // ../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/isObjectLike.js
  function isObjectLike(value) {
    return value != null && typeof value == "object";
  }
  var isObjectLike_default = isObjectLike;

  // ../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/isSymbol.js
  var symbolTag = "[object Symbol]";
  function isSymbol(value) {
    return typeof value == "symbol" || isObjectLike_default(value) && baseGetTag_default(value) == symbolTag;
  }
  var isSymbol_default = isSymbol;

  // ../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_arrayMap.js
  function arrayMap(array, iteratee) {
    var index = -1, length = array == null ? 0 : array.length, result = Array(length);
    while (++index < length) {
      result[index] = iteratee(array[index], index, array);
    }
    return result;
  }
  var arrayMap_default = arrayMap;

  // ../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/isArray.js
  var isArray = Array.isArray;
  var isArray_default = isArray;

  // ../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_trimmedEndIndex.js
  var reWhitespace = /\s/;
  function trimmedEndIndex(string) {
    var index = string.length;
    while (index-- && reWhitespace.test(string.charAt(index))) {
    }
    return index;
  }
  var trimmedEndIndex_default = trimmedEndIndex;

  // ../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_baseTrim.js
  var reTrimStart = /^\s+/;
  function baseTrim(string) {
    return string ? string.slice(0, trimmedEndIndex_default(string) + 1).replace(reTrimStart, "") : string;
  }
  var baseTrim_default = baseTrim;

  // ../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/isObject.js
  function isObject(value) {
    var type = typeof value;
    return value != null && (type == "object" || type == "function");
  }
  var isObject_default = isObject;

  // ../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/toNumber.js
  var NAN = 0 / 0;
  var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
  var reIsBinary = /^0b[01]+$/i;
  var reIsOctal = /^0o[0-7]+$/i;
  var freeParseInt = parseInt;
  function toNumber(value) {
    if (typeof value == "number") {
      return value;
    }
    if (isSymbol_default(value)) {
      return NAN;
    }
    if (isObject_default(value)) {
      var other = typeof value.valueOf == "function" ? value.valueOf() : value;
      value = isObject_default(other) ? other + "" : other;
    }
    if (typeof value != "string") {
      return value === 0 ? value : +value;
    }
    value = baseTrim_default(value);
    var isBinary = reIsBinary.test(value);
    return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
  }
  var toNumber_default = toNumber;

  // ../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/identity.js
  function identity(value) {
    return value;
  }
  var identity_default = identity;

  // ../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/isFunction.js
  var asyncTag = "[object AsyncFunction]";
  var funcTag = "[object Function]";
  var genTag = "[object GeneratorFunction]";
  var proxyTag = "[object Proxy]";
  function isFunction(value) {
    if (!isObject_default(value)) {
      return false;
    }
    var tag = baseGetTag_default(value);
    return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
  }
  var isFunction_default = isFunction;

  // ../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/noop.js
  function noop() {
  }
  var noop_default = noop;

  // ../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_copyArray.js
  function copyArray(source, array) {
    var index = -1, length = source.length;
    array || (array = Array(length));
    while (++index < length) {
      array[index] = source[index];
    }
    return array;
  }
  var copyArray_default = copyArray;

  // ../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_isIndex.js
  var MAX_SAFE_INTEGER = 9007199254740991;
  var reIsUint = /^(?:0|[1-9]\d*)$/;
  function isIndex(value, length) {
    var type = typeof value;
    length = length == null ? MAX_SAFE_INTEGER : length;
    return !!length && (type == "number" || type != "symbol" && reIsUint.test(value)) && (value > -1 && value % 1 == 0 && value < length);
  }
  var isIndex_default = isIndex;

  // ../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/isLength.js
  var MAX_SAFE_INTEGER2 = 9007199254740991;
  function isLength(value) {
    return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER2;
  }
  var isLength_default = isLength;

  // ../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/isArrayLike.js
  function isArrayLike(value) {
    return value != null && isLength_default(value.length) && !isFunction_default(value);
  }
  var isArrayLike_default = isArrayLike;

  // ../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_isPrototype.js
  var objectProto3 = Object.prototype;
  function isPrototype(value) {
    var Ctor = value && value.constructor, proto = typeof Ctor == "function" && Ctor.prototype || objectProto3;
    return value === proto;
  }
  var isPrototype_default = isPrototype;

  // ../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_baseTimes.js
  function baseTimes(n3, iteratee) {
    var index = -1, result = Array(n3);
    while (++index < n3) {
      result[index] = iteratee(index);
    }
    return result;
  }
  var baseTimes_default = baseTimes;

  // ../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_baseIsArguments.js
  var argsTag = "[object Arguments]";
  function baseIsArguments(value) {
    return isObjectLike_default(value) && baseGetTag_default(value) == argsTag;
  }
  var baseIsArguments_default = baseIsArguments;

  // ../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/isArguments.js
  var objectProto4 = Object.prototype;
  var hasOwnProperty2 = objectProto4.hasOwnProperty;
  var propertyIsEnumerable = objectProto4.propertyIsEnumerable;
  var isArguments = baseIsArguments_default(function() {
    return arguments;
  }()) ? baseIsArguments_default : function(value) {
    return isObjectLike_default(value) && hasOwnProperty2.call(value, "callee") && !propertyIsEnumerable.call(value, "callee");
  };
  var isArguments_default = isArguments;

  // ../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/stubFalse.js
  function stubFalse() {
    return false;
  }
  var stubFalse_default = stubFalse;

  // ../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/isBuffer.js
  var freeExports = typeof exports == "object" && exports && !exports.nodeType && exports;
  var freeModule = freeExports && typeof module == "object" && module && !module.nodeType && module;
  var moduleExports = freeModule && freeModule.exports === freeExports;
  var Buffer = moduleExports ? root_default.Buffer : void 0;
  var nativeIsBuffer = Buffer ? Buffer.isBuffer : void 0;
  var isBuffer = nativeIsBuffer || stubFalse_default;
  var isBuffer_default = isBuffer;

  // ../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_baseIsTypedArray.js
  var argsTag2 = "[object Arguments]";
  var arrayTag = "[object Array]";
  var boolTag = "[object Boolean]";
  var dateTag = "[object Date]";
  var errorTag = "[object Error]";
  var funcTag2 = "[object Function]";
  var mapTag = "[object Map]";
  var numberTag = "[object Number]";
  var objectTag = "[object Object]";
  var regexpTag = "[object RegExp]";
  var setTag = "[object Set]";
  var stringTag = "[object String]";
  var weakMapTag = "[object WeakMap]";
  var arrayBufferTag = "[object ArrayBuffer]";
  var dataViewTag = "[object DataView]";
  var float32Tag = "[object Float32Array]";
  var float64Tag = "[object Float64Array]";
  var int8Tag = "[object Int8Array]";
  var int16Tag = "[object Int16Array]";
  var int32Tag = "[object Int32Array]";
  var uint8Tag = "[object Uint8Array]";
  var uint8ClampedTag = "[object Uint8ClampedArray]";
  var uint16Tag = "[object Uint16Array]";
  var uint32Tag = "[object Uint32Array]";
  var typedArrayTags = {};
  typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
  typedArrayTags[argsTag2] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag2] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;
  function baseIsTypedArray(value) {
    return isObjectLike_default(value) && isLength_default(value.length) && !!typedArrayTags[baseGetTag_default(value)];
  }
  var baseIsTypedArray_default = baseIsTypedArray;

  // ../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_baseUnary.js
  function baseUnary(func) {
    return function(value) {
      return func(value);
    };
  }
  var baseUnary_default = baseUnary;

  // ../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_nodeUtil.js
  var freeExports2 = typeof exports == "object" && exports && !exports.nodeType && exports;
  var freeModule2 = freeExports2 && typeof module == "object" && module && !module.nodeType && module;
  var moduleExports2 = freeModule2 && freeModule2.exports === freeExports2;
  var freeProcess = moduleExports2 && freeGlobal_default.process;
  var nodeUtil = function() {
    try {
      var types = freeModule2 && freeModule2.require && freeModule2.require("util").types;
      if (types) {
        return types;
      }
      return freeProcess && freeProcess.binding && freeProcess.binding("util");
    } catch (e5) {
    }
  }();
  var nodeUtil_default = nodeUtil;

  // ../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/isTypedArray.js
  var nodeIsTypedArray = nodeUtil_default && nodeUtil_default.isTypedArray;
  var isTypedArray = nodeIsTypedArray ? baseUnary_default(nodeIsTypedArray) : baseIsTypedArray_default;
  var isTypedArray_default = isTypedArray;

  // ../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_arrayLikeKeys.js
  var objectProto5 = Object.prototype;
  var hasOwnProperty3 = objectProto5.hasOwnProperty;
  function arrayLikeKeys(value, inherited) {
    var isArr = isArray_default(value), isArg = !isArr && isArguments_default(value), isBuff = !isArr && !isArg && isBuffer_default(value), isType = !isArr && !isArg && !isBuff && isTypedArray_default(value), skipIndexes = isArr || isArg || isBuff || isType, result = skipIndexes ? baseTimes_default(value.length, String) : [], length = result.length;
    for (var key in value) {
      if ((inherited || hasOwnProperty3.call(value, key)) && !(skipIndexes && // Safari 9 has enumerable `arguments.length` in strict mode.
      (key == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
      isBuff && (key == "offset" || key == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
      isType && (key == "buffer" || key == "byteLength" || key == "byteOffset") || // Skip index properties.
      isIndex_default(key, length)))) {
        result.push(key);
      }
    }
    return result;
  }
  var arrayLikeKeys_default = arrayLikeKeys;

  // ../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_overArg.js
  function overArg(func, transform) {
    return function(arg) {
      return func(transform(arg));
    };
  }
  var overArg_default = overArg;

  // ../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_nativeKeys.js
  var nativeKeys = overArg_default(Object.keys, Object);
  var nativeKeys_default = nativeKeys;

  // ../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_baseKeys.js
  var objectProto6 = Object.prototype;
  var hasOwnProperty4 = objectProto6.hasOwnProperty;
  function baseKeys(object) {
    if (!isPrototype_default(object)) {
      return nativeKeys_default(object);
    }
    var result = [];
    for (var key in Object(object)) {
      if (hasOwnProperty4.call(object, key) && key != "constructor") {
        result.push(key);
      }
    }
    return result;
  }
  var baseKeys_default = baseKeys;

  // ../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/keys.js
  function keys(object) {
    return isArrayLike_default(object) ? arrayLikeKeys_default(object) : baseKeys_default(object);
  }
  var keys_default = keys;

  // ../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/now.js
  var now = function() {
    return root_default.Date.now();
  };
  var now_default = now;

  // ../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/debounce.js
  var FUNC_ERROR_TEXT = "Expected a function";
  var nativeMax = Math.max;
  var nativeMin = Math.min;
  function debounce(func, wait, options) {
    var lastArgs, lastThis, maxWait, result, timerId, lastCallTime, lastInvokeTime = 0, leading = false, maxing = false, trailing = true;
    if (typeof func != "function") {
      throw new TypeError(FUNC_ERROR_TEXT);
    }
    wait = toNumber_default(wait) || 0;
    if (isObject_default(options)) {
      leading = !!options.leading;
      maxing = "maxWait" in options;
      maxWait = maxing ? nativeMax(toNumber_default(options.maxWait) || 0, wait) : maxWait;
      trailing = "trailing" in options ? !!options.trailing : trailing;
    }
    function invokeFunc(time) {
      var args = lastArgs, thisArg = lastThis;
      lastArgs = lastThis = void 0;
      lastInvokeTime = time;
      result = func.apply(thisArg, args);
      return result;
    }
    function leadingEdge(time) {
      lastInvokeTime = time;
      timerId = setTimeout(timerExpired, wait);
      return leading ? invokeFunc(time) : result;
    }
    function remainingWait(time) {
      var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime, timeWaiting = wait - timeSinceLastCall;
      return maxing ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke) : timeWaiting;
    }
    function shouldInvoke(time) {
      var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime;
      return lastCallTime === void 0 || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
    }
    function timerExpired() {
      var time = now_default();
      if (shouldInvoke(time)) {
        return trailingEdge(time);
      }
      timerId = setTimeout(timerExpired, remainingWait(time));
    }
    function trailingEdge(time) {
      timerId = void 0;
      if (trailing && lastArgs) {
        return invokeFunc(time);
      }
      lastArgs = lastThis = void 0;
      return result;
    }
    function cancel() {
      if (timerId !== void 0) {
        clearTimeout(timerId);
      }
      lastInvokeTime = 0;
      lastArgs = lastCallTime = lastThis = timerId = void 0;
    }
    function flush() {
      return timerId === void 0 ? result : trailingEdge(now_default());
    }
    function debounced() {
      var time = now_default(), isInvoking = shouldInvoke(time);
      lastArgs = arguments;
      lastThis = this;
      lastCallTime = time;
      if (isInvoking) {
        if (timerId === void 0) {
          return leadingEdge(lastCallTime);
        }
        if (maxing) {
          clearTimeout(timerId);
          timerId = setTimeout(timerExpired, wait);
          return invokeFunc(lastCallTime);
        }
      }
      if (timerId === void 0) {
        timerId = setTimeout(timerExpired, wait);
      }
      return result;
    }
    debounced.cancel = cancel;
    debounced.flush = flush;
    return debounced;
  }
  var debounce_default = debounce;

  // ../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_baseValues.js
  function baseValues(object, props) {
    return arrayMap_default(props, function(key) {
      return object[key];
    });
  }
  var baseValues_default = baseValues;

  // ../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/values.js
  function values(object) {
    return object == null ? [] : baseValues_default(object, keys_default(object));
  }
  var values_default = values;

  // ../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_baseRandom.js
  var nativeFloor = Math.floor;
  var nativeRandom = Math.random;
  function baseRandom(lower, upper) {
    return lower + nativeFloor(nativeRandom() * (upper - lower + 1));
  }
  var baseRandom_default = baseRandom;

  // ../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_shuffleSelf.js
  function shuffleSelf(array, size) {
    var index = -1, length = array.length, lastIndex = length - 1;
    size = size === void 0 ? length : size;
    while (++index < size) {
      var rand = baseRandom_default(index, lastIndex), value = array[rand];
      array[rand] = array[index];
      array[index] = value;
    }
    array.length = size;
    return array;
  }
  var shuffleSelf_default = shuffleSelf;

  // ../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_arrayShuffle.js
  function arrayShuffle(array) {
    return shuffleSelf_default(copyArray_default(array));
  }
  var arrayShuffle_default = arrayShuffle;

  // ../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_baseShuffle.js
  function baseShuffle(collection) {
    return shuffleSelf_default(values_default(collection));
  }
  var baseShuffle_default = baseShuffle;

  // ../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/shuffle.js
  function shuffle(collection) {
    var func = isArray_default(collection) ? arrayShuffle_default : baseShuffle_default;
    return func(collection);
  }
  var shuffle_default = shuffle;

  // ../dist/dom-helpers/use-merged-children.js
  function useMergedChildren(lhs, rhs) {
    monitorCallCount(useMergedChildren);
    if (lhs == null && rhs == null) {
      return void 0;
    } else if (lhs == null) {
      return rhs;
    } else if (rhs == null) {
      return lhs;
    } else {
      return y3(_3, {}, lhs, rhs);
    }
  }

  // ../dist/dom-helpers/use-merged-classes.js
  function useMergedClasses(...classes) {
    monitorCallCount(useMergedClasses);
    let classesSet = /* @__PURE__ */ new Set();
    for (let c5 of classes) {
      if (typeof c5 == "string" && c5.trim())
        classesSet.add(c5);
    }
    if (classesSet.size) {
      return Array.from(classesSet).join(" ");
    } else {
      return void 0;
    }
  }

  // ../dist/dom-helpers/use-merged-refs.js
  function processRef(instance, ref) {
    if (typeof ref === "function") {
      ref(instance);
    } else if (ref != null) {
      ref.current = instance;
    } else {
      debugger;
      console.assert(false, "Unknown ref type found that was neither a RefCallback nor a RefObject");
    }
  }
  function useMergedRefs(rhs, lhs) {
    monitorCallCount(useMergedRefs);
    const combined = useStableCallback(function combined2(current) {
      processRef(current, lhs);
      processRef(current, rhs);
    });
    if (lhs == null && rhs == null) {
      return void 0;
    } else if (lhs == null) {
      return rhs;
    } else if (rhs == null) {
      return lhs;
    } else {
      return combined;
    }
  }

  // ../dist/dom-helpers/use-merged-styles.js
  function styleStringToObject(style) {
    return Object.fromEntries(style.split(";").map((statement) => statement.split(":")));
  }
  function useMergedStyles(lhs, rhs) {
    monitorCallCount(useMergedStyles);
    if (!lhs && !rhs)
      return void 0;
    if (typeof lhs != typeof rhs) {
      if (lhs && !rhs)
        return lhs;
      if (!lhs && rhs)
        return rhs;
      if (lhs && rhs) {
        if (typeof lhs == "string")
          return useMergedStyles(styleStringToObject(lhs), rhs);
        if (typeof rhs == "string")
          return useMergedStyles(lhs, styleStringToObject(rhs));
      }
      return void 0;
    }
    if (typeof lhs == "string") {
      return `${lhs};${rhs ?? ""}`;
    }
    return {
      ...lhs ?? {},
      ...rhs ?? {}
    };
  }

  // ../dist/dom-helpers/use-merged-props.js
  var log = console.warn;
  function useMergedProps(...allProps) {
    monitorCallCount(useMergedProps);
    useEnsureStability("useMergedProps", allProps.length);
    let ret = {};
    for (let nextProps of allProps) {
      ret = useMergedProps2(ret, nextProps);
    }
    return ret;
  }
  var knowns = /* @__PURE__ */ new Set(["children", "ref", "className", "class", "style"]);
  function mergeUnknown(key, lhsValue, rhsValue) {
    if (typeof lhsValue === "function" || typeof rhsValue === "function") {
      const merged = mergeFunctions(lhsValue, rhsValue);
      return merged;
    } else {
      if (lhsValue == null && rhsValue == null) {
        if (rhsValue === null && lhsValue === void 0)
          return rhsValue;
        else
          return lhsValue;
      }
      if (lhsValue == null)
        return rhsValue;
      else if (rhsValue == null)
        return lhsValue;
      else if (rhsValue == lhsValue) {
        return rhsValue;
      } else {
        log?.(`The prop "${key}" cannot simultaneously be the values ${lhsValue} and ${rhsValue}. One must be chosen outside of useMergedProps.`);
        return rhsValue;
      }
    }
  }
  function useMergedProps2(lhsAll, rhsAll) {
    const ret = {
      ref: useMergedRefs(lhsAll.ref, rhsAll.ref),
      style: useMergedStyles(lhsAll.style, rhsAll.style),
      className: useMergedClasses(lhsAll["class"], lhsAll.className, rhsAll["class"], rhsAll.className),
      children: useMergedChildren(lhsAll.children, rhsAll.children)
    };
    if (ret.ref === void 0)
      delete ret.ref;
    if (ret.style === void 0)
      delete ret.style;
    if (ret.className === void 0)
      delete ret.className;
    if (ret["class"] === void 0)
      delete ret["class"];
    if (ret.children === void 0)
      delete ret.children;
    for (const lhsKeyU in lhsAll) {
      const lhsKey = lhsKeyU;
      if (knowns.has(lhsKey))
        continue;
      ret[lhsKey] = lhsAll[lhsKey];
    }
    for (const rhsKeyU in rhsAll) {
      const rhsKey = rhsKeyU;
      if (knowns.has(rhsKey))
        continue;
      ret[rhsKey] = mergeUnknown(rhsKey, ret[rhsKey], rhsAll[rhsKey]);
    }
    return ret;
  }
  function mergeFunctions(lhs, rhs) {
    if (!lhs)
      return rhs;
    if (!rhs)
      return lhs;
    return (...args) => {
      const lv = lhs(...args);
      const rv = rhs(...args);
      if (lv instanceof Promise || rv instanceof Promise)
        return Promise.all([lv, rv]);
    };
  }

  // ../node_modules/.pnpm/tabbable@6.2.0/node_modules/tabbable/dist/index.esm.js
  var candidateSelectors = ["input:not([inert])", "select:not([inert])", "textarea:not([inert])", "a[href]:not([inert])", "button:not([inert])", "[tabindex]:not(slot):not([inert])", "audio[controls]:not([inert])", "video[controls]:not([inert])", '[contenteditable]:not([contenteditable="false"]):not([inert])', "details>summary:first-of-type:not([inert])", "details:not([inert])"];
  var candidateSelector = /* @__PURE__ */ candidateSelectors.join(",");
  var NoElement = typeof Element === "undefined";
  var matches = NoElement ? function() {
  } : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
  var getRootNode = !NoElement && Element.prototype.getRootNode ? function(element) {
    var _element$getRootNode;
    return element === null || element === void 0 ? void 0 : (_element$getRootNode = element.getRootNode) === null || _element$getRootNode === void 0 ? void 0 : _element$getRootNode.call(element);
  } : function(element) {
    return element === null || element === void 0 ? void 0 : element.ownerDocument;
  };
  var isInert = function isInert2(node, lookUp) {
    var _node$getAttribute;
    if (lookUp === void 0) {
      lookUp = true;
    }
    var inertAtt = node === null || node === void 0 ? void 0 : (_node$getAttribute = node.getAttribute) === null || _node$getAttribute === void 0 ? void 0 : _node$getAttribute.call(node, "inert");
    var inert = inertAtt === "" || inertAtt === "true";
    var result = inert || lookUp && node && isInert2(node.parentNode);
    return result;
  };
  var isContentEditable = function isContentEditable2(node) {
    var _node$getAttribute2;
    var attValue = node === null || node === void 0 ? void 0 : (_node$getAttribute2 = node.getAttribute) === null || _node$getAttribute2 === void 0 ? void 0 : _node$getAttribute2.call(node, "contenteditable");
    return attValue === "" || attValue === "true";
  };
  var hasTabIndex = function hasTabIndex2(node) {
    return !isNaN(parseInt(node.getAttribute("tabindex"), 10));
  };
  var getTabIndex = function getTabIndex2(node) {
    if (!node) {
      throw new Error("No node provided");
    }
    if (node.tabIndex < 0) {
      if ((/^(AUDIO|VIDEO|DETAILS)$/.test(node.tagName) || isContentEditable(node)) && !hasTabIndex(node)) {
        return 0;
      }
    }
    return node.tabIndex;
  };
  var isInput = function isInput2(node) {
    return node.tagName === "INPUT";
  };
  var isHiddenInput = function isHiddenInput2(node) {
    return isInput(node) && node.type === "hidden";
  };
  var isDetailsWithSummary = function isDetailsWithSummary2(node) {
    var r5 = node.tagName === "DETAILS" && Array.prototype.slice.apply(node.children).some(function(child) {
      return child.tagName === "SUMMARY";
    });
    return r5;
  };
  var getCheckedRadio = function getCheckedRadio2(nodes, form) {
    for (var i5 = 0; i5 < nodes.length; i5++) {
      if (nodes[i5].checked && nodes[i5].form === form) {
        return nodes[i5];
      }
    }
  };
  var isTabbableRadio = function isTabbableRadio2(node) {
    if (!node.name) {
      return true;
    }
    var radioScope = node.form || getRootNode(node);
    var queryRadios = function queryRadios2(name) {
      return radioScope.querySelectorAll('input[type="radio"][name="' + name + '"]');
    };
    var radioSet;
    if (typeof window !== "undefined" && typeof window.CSS !== "undefined" && typeof window.CSS.escape === "function") {
      radioSet = queryRadios(window.CSS.escape(node.name));
    } else {
      try {
        radioSet = queryRadios(node.name);
      } catch (err) {
        console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s", err.message);
        return false;
      }
    }
    var checked = getCheckedRadio(radioSet, node.form);
    return !checked || checked === node;
  };
  var isRadio = function isRadio2(node) {
    return isInput(node) && node.type === "radio";
  };
  var isNonTabbableRadio = function isNonTabbableRadio2(node) {
    return isRadio(node) && !isTabbableRadio(node);
  };
  var isNodeAttached = function isNodeAttached2(node) {
    var _nodeRoot;
    var nodeRoot = node && getRootNode(node);
    var nodeRootHost = (_nodeRoot = nodeRoot) === null || _nodeRoot === void 0 ? void 0 : _nodeRoot.host;
    var attached = false;
    if (nodeRoot && nodeRoot !== node) {
      var _nodeRootHost, _nodeRootHost$ownerDo, _node$ownerDocument;
      attached = !!((_nodeRootHost = nodeRootHost) !== null && _nodeRootHost !== void 0 && (_nodeRootHost$ownerDo = _nodeRootHost.ownerDocument) !== null && _nodeRootHost$ownerDo !== void 0 && _nodeRootHost$ownerDo.contains(nodeRootHost) || node !== null && node !== void 0 && (_node$ownerDocument = node.ownerDocument) !== null && _node$ownerDocument !== void 0 && _node$ownerDocument.contains(node));
      while (!attached && nodeRootHost) {
        var _nodeRoot2, _nodeRootHost2, _nodeRootHost2$ownerD;
        nodeRoot = getRootNode(nodeRootHost);
        nodeRootHost = (_nodeRoot2 = nodeRoot) === null || _nodeRoot2 === void 0 ? void 0 : _nodeRoot2.host;
        attached = !!((_nodeRootHost2 = nodeRootHost) !== null && _nodeRootHost2 !== void 0 && (_nodeRootHost2$ownerD = _nodeRootHost2.ownerDocument) !== null && _nodeRootHost2$ownerD !== void 0 && _nodeRootHost2$ownerD.contains(nodeRootHost));
      }
    }
    return attached;
  };
  var isZeroArea = function isZeroArea2(node) {
    var _node$getBoundingClie = node.getBoundingClientRect(), width = _node$getBoundingClie.width, height = _node$getBoundingClie.height;
    return width === 0 && height === 0;
  };
  var isHidden = function isHidden2(node, _ref) {
    var displayCheck = _ref.displayCheck, getShadowRoot = _ref.getShadowRoot;
    if (getComputedStyle(node).visibility === "hidden") {
      return true;
    }
    var isDirectSummary = matches.call(node, "details>summary:first-of-type");
    var nodeUnderDetails = isDirectSummary ? node.parentElement : node;
    if (matches.call(nodeUnderDetails, "details:not([open]) *")) {
      return true;
    }
    if (!displayCheck || displayCheck === "full" || displayCheck === "legacy-full") {
      if (typeof getShadowRoot === "function") {
        var originalNode = node;
        while (node) {
          var parentElement = node.parentElement;
          var rootNode = getRootNode(node);
          if (parentElement && !parentElement.shadowRoot && getShadowRoot(parentElement) === true) {
            return isZeroArea(node);
          } else if (node.assignedSlot) {
            node = node.assignedSlot;
          } else if (!parentElement && rootNode !== node.ownerDocument) {
            node = rootNode.host;
          } else {
            node = parentElement;
          }
        }
        node = originalNode;
      }
      if (isNodeAttached(node)) {
        return !node.getClientRects().length;
      }
      if (displayCheck !== "legacy-full") {
        return true;
      }
    } else if (displayCheck === "non-zero-area") {
      return isZeroArea(node);
    }
    return false;
  };
  var isDisabledFromFieldset = function isDisabledFromFieldset2(node) {
    if (/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(node.tagName)) {
      var parentNode = node.parentElement;
      while (parentNode) {
        if (parentNode.tagName === "FIELDSET" && parentNode.disabled) {
          for (var i5 = 0; i5 < parentNode.children.length; i5++) {
            var child = parentNode.children.item(i5);
            if (child.tagName === "LEGEND") {
              return matches.call(parentNode, "fieldset[disabled] *") ? true : !child.contains(node);
            }
          }
          return true;
        }
        parentNode = parentNode.parentElement;
      }
    }
    return false;
  };
  var isNodeMatchingSelectorFocusable = function isNodeMatchingSelectorFocusable2(options, node) {
    if (node.disabled || // we must do an inert look up to filter out any elements inside an inert ancestor
    //  because we're limited in the type of selectors we can use in JSDom (see related
    //  note related to `candidateSelectors`)
    isInert(node) || isHiddenInput(node) || isHidden(node, options) || // For a details element with a summary, the summary element gets the focus
    isDetailsWithSummary(node) || isDisabledFromFieldset(node)) {
      return false;
    }
    return true;
  };
  var isNodeMatchingSelectorTabbable = function isNodeMatchingSelectorTabbable2(options, node) {
    if (isNonTabbableRadio(node) || getTabIndex(node) < 0 || !isNodeMatchingSelectorFocusable(options, node)) {
      return false;
    }
    return true;
  };
  var isTabbable = function isTabbable2(node, options) {
    options = options || {};
    if (!node) {
      throw new Error("No node provided");
    }
    if (matches.call(node, candidateSelector) === false) {
      return false;
    }
    return isNodeMatchingSelectorTabbable(options, node);
  };
  var focusableCandidateSelector = /* @__PURE__ */ candidateSelectors.concat("iframe").join(",");
  var isFocusable = function isFocusable2(node, options) {
    options = options || {};
    if (!node) {
      throw new Error("No node provided");
    }
    if (matches.call(node, focusableCandidateSelector) === false) {
      return false;
    }
    return isNodeMatchingSelectorFocusable(options, node);
  };

  // ../dist/util/stack.js
  function generateStack() {
    if (BuildMode === "development" && window._generate_setState_stacks) {
      try {
        throw new Error();
      } catch (e5) {
        return e5.stack;
      }
    }
    return void 0;
  }
  function useStack() {
    if (BuildMode === "development") {
      const stack = F5(generateStack, []);
      const getStack = T5(() => stack, []);
      return getStack;
    } else {
      return returnEmptyString;
    }
  }
  function returnEmptyString() {
    return "";
  }

  // ../dist/util/focus.js
  function focus(e5) {
    if (BuildMode === "development" && window.LOG_FOCUS_CHANGES === true) {
      console.log(`Focus changed to ${(e5?.tagName || "").toLowerCase().padStart(6)}:`, e5);
      console.log(generateStack());
    }
    e5?.focus?.();
  }
  function findBackupFocus(unmountingElement) {
    if (unmountingElement == null)
      return globalThis.document.body;
    let document2 = unmountingElement.ownerDocument;
    const walker = document2.createTreeWalker(document2.body, NodeFilter.SHOW_ELEMENT);
    let node = walker.firstChild();
    let bestCandidateBefore = null;
    let bestCandidateAfter = null;
    let w7 = false;
    while (node) {
      let pos = node.compareDocumentPosition(unmountingElement);
      if (pos & Node.DOCUMENT_POSITION_DISCONNECTED) {
        if (!w7)
          console.warn("Can't focus anything near a disconnected element");
        w7 = true;
      }
      if (pos & Node.DOCUMENT_POSITION_PRECEDING) {
        if (node instanceof Element) {
          if (isTabbable(node)) {
            bestCandidateAfter = node;
            break;
          }
        }
      } else if (pos & Node.DOCUMENT_POSITION_FOLLOWING) {
        if (node instanceof Element) {
          if (isTabbable(node)) {
            bestCandidateBefore = node;
          }
        }
      }
      node = walker.nextNode();
    }
    return bestCandidateAfter ?? bestCandidateBefore ?? document2.body;
  }

  // ../dist/timing/use-timeout.js
  function useTimeout({ timeout, callback, triggerIndex }) {
    monitorCallCount(useTimeout);
    const stableCallback = useStableCallback(() => {
      startTimeRef.current = null;
      callback();
    });
    const getTimeout = useStableGetter(timeout);
    const startTimeRef = _4(null);
    const timeoutIsNull = timeout == null;
    p4(() => {
      if (!timeoutIsNull) {
        const timeout2 = getTimeout();
        console.assert(timeoutIsNull == (timeout2 == null));
        if (timeout2 != null) {
          startTimeRef.current = +/* @__PURE__ */ new Date();
          const handle = setTimeout(stableCallback, timeout2);
          return () => clearTimeout(handle);
        }
      }
    }, [triggerIndex, timeoutIsNull]);
    const getElapsedTime = T5(() => {
      return +/* @__PURE__ */ new Date() - +(startTimeRef.current ?? /* @__PURE__ */ new Date());
    }, []);
    const getRemainingTime = T5(() => {
      const timeout2 = getTimeout();
      return timeout2 == null ? null : Math.max(0, timeout2 - getElapsedTime());
    }, []);
    return { getElapsedTime, getRemainingTime };
  }

  // ../dist/util/use-tag-props.js
  var idIndex = 0;
  function useTagProps(props, tag) {
    if (BuildMode === "development" && window._generate_useTagProps_tags) {
      const [id] = h4(() => ++idIndex);
      const propsIdTag = `data-props-${tag}-${id}`;
      const getStack = useStack();
      console.assert(!(props && typeof props == "object" && tag in props));
      useTimeout({
        callback: () => {
          let element = document.querySelectorAll(`[${propsIdTag}]`);
          if (element.length != 1) {
            console.error("A hook returned props that were not properly spread to any HTMLElement:");
            console.log(getStack());
            debugger;
          }
        },
        timeout: 250,
        triggerIndex: tag
      });
      return F5(() => {
        return {
          ...props,
          [propsIdTag]: true
          /*, [tag as never]: true*/
        };
      }, [props, tag]);
    } else {
      return props;
    }
  }

  // ../dist/component-detail/keyboard-navigation/use-linear-navigation.js
  function useLinearNavigation({ linearNavigationParameters: { getLowestIndex, getHighestIndex, isValidForLinearNavigation, navigatePastEnd, navigatePastStart, onNavigateLinear, arrowKeyDirection, disableHomeEndKeys, pageNavigationSize, ...void4 }, rovingTabIndexReturn: { getTabbableIndex, setTabbableIndex, ...void5 }, paginatedChildrenParameters: { paginationMax, paginationMin, ...void2 }, rearrangeableChildrenReturn: { indexDemangler, indexMangler, ...void3 }, ...void1 }) {
    monitorCallCount(useLinearNavigation);
    let getPaginatedRange = useStableGetter(paginationMax == null || paginationMin == null ? null : paginationMax - paginationMin);
    assertEmptyObject(void1);
    assertEmptyObject(void2);
    assertEmptyObject(void3);
    assertEmptyObject(void4);
    assertEmptyObject(void5);
    useEnsureStability("useLinearNavigation", onNavigateLinear, isValidForLinearNavigation, indexDemangler, indexMangler);
    const navigateAbsolute = T5((requestedIndexMangled, searchDirection, e5, fromUserInteraction, mode) => {
      const highestChildIndex = getHighestIndex();
      const lowestChildIndex = getLowestIndex();
      const original = getTabbableIndex() ?? 0;
      const targetDemangled = indexDemangler(requestedIndexMangled);
      const { status, valueDemangled } = tryNavigateToIndex({ isValid: isValidForLinearNavigation, lowestChildIndex, highestChildIndex, indexDemangler, indexMangler, searchDirection, targetDemangled });
      if (status == "past-end") {
        if (navigatePastEnd == "wrap") {
          if (mode == "single")
            navigateToFirst(e5, fromUserInteraction);
          else {
            if (false)
              navigateToFirst(e5, fromUserInteraction);
            else
              navigateToLast(e5, fromUserInteraction);
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
            navigateToLast(e5, fromUserInteraction);
          } else {
            if (false)
              navigateToLast(e5, fromUserInteraction);
            else
              navigateToFirst(e5, fromUserInteraction);
          }
          return "stop";
        } else if (navigatePastStart == "passthrough") {
          return "passthrough";
        } else {
          navigatePastStart();
          return "stop";
        }
      } else {
        setTabbableIndex(valueDemangled, e5, fromUserInteraction);
        onNavigateLinear?.(valueDemangled, e5);
        return "stop";
      }
    }, []);
    const navigateToFirst = useStableCallback((e5, fromUserInteraction) => {
      return navigateAbsolute(getLowestIndex(), -1, e5, fromUserInteraction, "single");
    });
    const navigateToLast = useStableCallback((e5, fromUserInteraction) => {
      return navigateAbsolute(getHighestIndex(), 1, e5, fromUserInteraction, "single");
    });
    const navigateRelative2 = useStableCallback((e5, offset, fromUserInteraction, mode) => {
      const highestChildIndex = getHighestIndex();
      const searchDirection = Math.sign(offset) || 1;
      const original = getTabbableIndex() ?? 0;
      const targetMangled = indexMangler(original) + offset;
      return navigateAbsolute(targetMangled, searchDirection, e5, fromUserInteraction, mode);
    });
    const navigateToNext = useStableCallback((e5, fromUserInteraction) => {
      return navigateRelative2(e5, 1, fromUserInteraction, "single");
    });
    const navigateToPrev = useStableCallback((e5, fromUserInteraction) => {
      return navigateRelative2(e5, -1, fromUserInteraction, "single");
    });
    const stableProps = _4(useTagProps({
      onKeyDown: useStableCallback((e5) => {
        if (e5.metaKey)
          return;
        const allowsVerticalNavigation = arrowKeyDirection == "vertical" || arrowKeyDirection == "either";
        const allowsHorizontalNavigation = arrowKeyDirection == "horizontal" || arrowKeyDirection == "either";
        let childRange = getHighestIndex() - getLowestIndex();
        let paginatedRange = getPaginatedRange() ?? childRange;
        let truePageNavigationSize = pageNavigationSize;
        if (truePageNavigationSize != null && truePageNavigationSize < 1) {
          truePageNavigationSize = Math.round(truePageNavigationSize * Math.max(10, paginatedRange + 1));
        }
        let result = "passthrough";
        let keyPressIsValidForOrientation = true;
        switch (e5.key) {
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
          switch (e5.key) {
            case "ArrowUp":
            case "ArrowLeft":
              result = navigateToPrev(e5, true);
              break;
            case "ArrowDown":
            case "ArrowRight":
              result = navigateToNext(e5, true);
              break;
            case "PageUp":
            case "PageDown":
              if (truePageNavigationSize == null)
                break;
              else if (truePageNavigationSize > 0)
                result = navigateRelative2(e5, truePageNavigationSize * (e5.key.endsWith("n") ? 1 : -1), true, "page");
              break;
            case "Home":
            case "End":
              if (!disableHomeEndKeys) {
                if (e5.key.endsWith("e"))
                  navigateToFirst(e5, true);
                else
                  navigateToLast(e5, true);
                result = "stop";
              }
              break;
          }
        }
        if (result && result != "passthrough") {
          e5.preventDefault();
          e5.stopPropagation();
        }
      })
    }, "data-linear-navigation"));
    return {
      linearNavigationReturn: {},
      propsStable: stableProps.current
    };
  }
  function tryNavigateToIndex({ isValid, highestChildIndex, lowestChildIndex, searchDirection, indexDemangler, indexMangler, targetDemangled }) {
    if (searchDirection === -1) {
      let bestUpResult = void 0;
      bestUpResult = tryNavigateUp({ isValid, indexDemangler, indexMangler, targetDemangled, lowestChildIndex });
      bestUpResult ??= tryNavigateDown({ isValid, indexDemangler, indexMangler, targetDemangled, highestChildIndex });
      return bestUpResult || { valueDemangled: targetDemangled, status: "normal" };
    } else {
      let bestDownResult = void 0;
      bestDownResult = tryNavigateDown({ isValid, indexDemangler, indexMangler, targetDemangled, highestChildIndex });
      bestDownResult ??= tryNavigateUp({ isValid, indexDemangler, indexMangler, targetDemangled, lowestChildIndex });
      return bestDownResult || { valueDemangled: targetDemangled, status: "normal" };
    }
  }
  function tryNavigateUp({ isValid, indexDemangler, indexMangler, lowestChildIndex: lower, targetDemangled }) {
    while (targetDemangled >= lower && !isValid(targetDemangled)) {
      targetDemangled = indexDemangler(indexMangler(targetDemangled) - 1);
    }
    if (!isValid(targetDemangled)) {
      return void 0;
    }
    if (targetDemangled < lower) {
      return { valueDemangled: indexDemangler(lower), status: "past-start" };
    } else {
      return { valueDemangled: targetDemangled, status: "normal" };
    }
  }
  function tryNavigateDown({ isValid, indexDemangler, indexMangler, targetDemangled, highestChildIndex: upper }) {
    while (targetDemangled <= upper && !isValid(targetDemangled)) {
      targetDemangled = indexDemangler(indexMangler(targetDemangled) + 1);
    }
    if (!isValid(targetDemangled)) {
      return void 0;
    }
    if (targetDemangled > upper) {
      return { valueDemangled: indexDemangler(upper), status: "past-end" };
    } else {
      return { valueDemangled: targetDemangled, status: "normal" };
    }
  }

  // ../dist/preact-extensions/use-managed-children.js
  function useManagedChildren(parentParameters) {
    monitorCallCount(useManagedChildren);
    const { managedChildrenParameters: { onAfterChildLayoutEffect, onChildrenMountChange, onChildrenCountChange }, ...rest } = parentParameters;
    assertEmptyObject(rest);
    useEnsureStability("useManagedChildren", onAfterChildLayoutEffect, onChildrenMountChange, onChildrenCountChange);
    const getHighestIndex = T5(() => {
      return managedChildrenArray.current.highestIndex;
    }, []);
    const getLowestIndex = T5(() => {
      return managedChildrenArray.current.lowestIndex;
    }, []);
    const managedChildrenArray = _4({ arr: [], rec: {}, highestIndex: 0, lowestIndex: 0 });
    const forEachChild = T5((f5) => {
      for (const child of managedChildrenArray.current.arr) {
        if (child) {
          if (f5(child) == "break")
            return;
        }
      }
      for (const field in managedChildrenArray.current.rec) {
        const child = managedChildrenArray.current.rec[field];
        if (child) {
          if (f5(child) == "break")
            return;
        }
      }
    }, []);
    const getManagedChildInfo = T5((index) => {
      if (typeof index == "number")
        return managedChildrenArray.current.arr[index];
      else
        return managedChildrenArray.current.rec[index];
    }, []);
    const hasRemoteULEChildMounted = _4(null);
    const remoteULEChildChangedCausers = _4(/* @__PURE__ */ new Set());
    const remoteULEChildChanged = T5((index) => {
      if (remoteULEChildChangedCausers.current.size == 0) {
        if (onAfterChildLayoutEffect != null) {
          debounceRendering(() => {
            onAfterChildLayoutEffect?.(remoteULEChildChangedCausers.current);
            remoteULEChildChangedCausers.current.clear();
          });
        }
      }
      remoteULEChildChangedCausers.current.add(index);
      return () => {
      };
    }, [
      /* Must remain stable */
    ]);
    const remoteULEChildMounted = T5((index, mounted) => {
      if (!hasRemoteULEChildMounted.current) {
        hasRemoteULEChildMounted.current = {
          mounts: /* @__PURE__ */ new Set(),
          unmounts: /* @__PURE__ */ new Set()
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
          while (shave <= managedChildrenArray.current.arr.length && managedChildrenArray.current.arr[managedChildrenArray.current.arr.length - 1 - shave] == void 0) {
            ++shave;
          }
          managedChildrenArray.current.arr.splice(managedChildrenArray.current.arr.length - shave, shave);
        } else
          delete managedChildrenArray.current.rec[index];
        if (typeof index == "number") {
          managedChildrenArray.current.highestIndex = managedChildrenArray.current.arr.length - 1;
        }
      }
      hasRemoteULEChildMounted?.current?.[mounted ? "mounts" : "unmounts"]?.add?.(index);
    }, [
      /* Must remain stable */
    ]);
    const managedChildren = useMemoObject({
      ...{ _: managedChildrenArray.current },
      forEach: forEachChild,
      getAt: getManagedChildInfo,
      getHighestIndex,
      getLowestIndex,
      _arraySlice: T5(() => {
        let ret = managedChildrenArray.current.arr.slice();
        const max = getHighestIndex();
        for (let i5 = 0; i5 <= max; ++i5) {
          if (ret[i5] == null)
            ret[i5] = { index: i5 };
        }
        return ret;
      }, [])
    });
    const getChildren = T5(() => managedChildren, []);
    return {
      context: useMemoObject({
        managedChildContext: useMemoObject({
          managedChildrenArray: managedChildrenArray.current,
          remoteULEChildMounted,
          remoteULEChildChanged,
          getChildren
        })
      }),
      managedChildrenReturn: { getChildren }
    };
  }
  function useManagedChild({ context, info }) {
    monitorCallCount(useManagedChild);
    const { managedChildContext: { getChildren, managedChildrenArray, remoteULEChildMounted, remoteULEChildChanged } } = context ?? { managedChildContext: {} };
    const index = info.index;
    y4(() => {
      if (managedChildrenArray == null || remoteULEChildChanged == null)
        return;
      if (typeof index == "number") {
        managedChildrenArray.arr[index] = { ...info };
      } else {
        managedChildrenArray.rec[index] = { ...info };
      }
      return remoteULEChildChanged(index);
    }, [...Object.entries(info).flat(9)]);
    y4(() => {
      remoteULEChildMounted?.(index, true);
      return () => remoteULEChildMounted?.(index, false);
    }, [index]);
    return {
      managedChildReturn: { getChildren }
    };
  }
  function useChildrenFlag({ getChildren, initialIndex, closestFit, onClosestFit, onIndexChange, getAt, setAt, isValid }) {
    useEnsureStability("useChildrenFlag", onIndexChange, getAt, setAt, isValid);
    const [getCurrentIndex, setCurrentIndex] = usePassiveState(onIndexChange);
    const [getRequestedIndex, setRequestedIndex] = usePassiveState(null);
    const getClosestFit = T5((requestedIndex) => {
      const children = getChildren();
      let closestDistance = Infinity;
      let closestIndex = null;
      children.forEach((child) => {
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
    }, [
      /* Must remain stable! */
    ]);
    if (closestFit) {
      console.assert(onClosestFit != null, "When closestFit is used, onClosestFit must be provided");
    }
    const reevaluateClosestFit = useStableCallback((reason) => {
      const children = getChildren();
      const requestedIndex = getRequestedIndex();
      const currentIndex = getCurrentIndex();
      const currentChild = currentIndex == null ? null : children.getAt(currentIndex);
      if (requestedIndex != null && closestFit && (requestedIndex != currentIndex || currentChild == null || !isValid(currentChild))) {
        console.assert(typeof requestedIndex == "number", "closestFit can only be used when each child has a numeric index, and cannot be used when children use string indices instead.");
        const closestFitIndex = getClosestFit(requestedIndex);
        setCurrentIndex(closestFitIndex, reason);
        if (currentChild)
          setAt(currentChild, false, closestFitIndex, currentIndex);
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
    const reasonRef = _4(void 0);
    const changeIndex = T5((arg, reason) => {
      const children = getChildren();
      const requestedIndex = arg instanceof Function ? arg(getRequestedIndex()) : arg;
      reasonRef.current = reason;
      setRequestedIndex(requestedIndex, reason);
      const currentIndex = getCurrentIndex();
      if (currentIndex == requestedIndex)
        return requestedIndex;
      let newMatchingChild = requestedIndex == null ? null : children.getAt(requestedIndex);
      const oldMatchingChild = currentIndex == null ? null : children.getAt(currentIndex);
      if (requestedIndex == null) {
        setCurrentIndex(null, reason);
        if (oldMatchingChild)
          setAt(oldMatchingChild, false, requestedIndex, currentIndex);
        return null;
      } else {
        const childIsValid = newMatchingChild && isValid(newMatchingChild);
        if (childIsValid || !closestFit) {
          setCurrentIndex(requestedIndex, reason);
          if (oldMatchingChild)
            setAt(oldMatchingChild, false, requestedIndex, currentIndex);
          if (newMatchingChild)
            setAt(newMatchingChild, true, requestedIndex, currentIndex);
          return requestedIndex;
        } else {
          console.assert(closestFit);
          console.assert(typeof requestedIndex == "number", "closestFit can only be used when each child has a numeric index, and cannot be used when children use string indices instead.");
          const closestFitIndex = getClosestFit(requestedIndex);
          setCurrentIndex(closestFitIndex, reason);
          if (closestFitIndex != null) {
            newMatchingChild = children.getAt(closestFitIndex);
            console.assert(newMatchingChild != null, "Internal logic???");
            if (oldMatchingChild)
              setAt(oldMatchingChild, false, closestFitIndex, currentIndex);
            setAt(newMatchingChild, true, closestFitIndex, currentIndex);
            return closestFitIndex;
          } else {
            if (oldMatchingChild)
              setAt(oldMatchingChild, false, closestFitIndex, currentIndex);
            return null;
          }
        }
      }
    }, []);
    y4(() => {
      changeIndex(initialIndex ?? null, reasonRef.current);
    }, []);
    return { changeIndex, reevaluateClosestFit, getCurrentIndex };
  }

  // ../dist/preact-extensions/use-state.js
  function useState(initialState) {
    const getStack = useStack();
    monitorCallCount(useState);
    const [state, setStateP] = h4(initialState);
    const ref = _4(state);
    const setState = T5((value) => {
      if (BuildMode === "development") {
        window._setState_stack = getStack();
      }
      if (typeof value === "function") {
        const callback = value;
        setStateP((prevValue) => {
          const nextValue = callback(prevValue);
          if (ref.current !== nextValue) {
            ref.current = nextValue;
          }
          ref.current = nextValue;
          return nextValue;
        });
      } else {
        if (ref.current !== value) {
          ref.current = value;
        }
        ref.current = value;
        setStateP(value);
      }
    }, []);
    const getState = T5(() => {
      return ref.current;
    }, []);
    return [state, setState, getState];
  }

  // ../dist/component-detail/keyboard-navigation/use-roving-tabindex.js
  function useRovingTabIndex({ managedChildrenReturn: { getChildren }, rovingTabIndexParameters: { focusSelfParent: focusSelfParentUnstable, untabbable, untabbableBehavior, initiallyTabbedIndex, onTabbableIndexChange }, refElementReturn: { getElement }, ...void1 }) {
    monitorCallCount(useRovingTabIndex);
    const focusSelfParent = useStableCallback(focusSelfParentUnstable);
    untabbableBehavior ||= "focus-parent";
    const lastFocused = _4(null);
    assertEmptyObject(void1);
    const getInitiallyTabbedIndex = useStableGetter(initiallyTabbedIndex);
    const getUntabbable = useStableGetter(untabbable);
    const setTabbableIndex = useStableCallback((updater, reason, fromUserInteraction) => {
      const children = getChildren();
      return changeTabbableIndex(function returnModifiedTabbableIndex(prevIndex) {
        let nextIndex = typeof updater === "function" ? updater(prevIndex ?? null) : updater;
        const untabbable2 = getUntabbable();
        let parentElement = getElement();
        console.assert(!!parentElement);
        if (nextIndex != null)
          setLastNonNullIndex(nextIndex, reason);
        if (untabbable2) {
          if (!parentElement.contains(document.activeElement) && untabbableBehavior != "leave-child-focused")
            focusSelfParent(parentElement);
          return null;
        }
        if (nextIndex == null) {
          if (!parentElement.contains(document.activeElement) && untabbableBehavior != "leave-child-focused")
            focusSelfParent(parentElement);
          return null;
        }
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
        if (nextIndex != null)
          setLastNonNullIndex(nextIndex, reason);
        return nextIndex ?? 0;
      }, reason);
    });
    const [getLastNonNullIndex, setLastNonNullIndex] = usePassiveState(null, T5(() => initiallyTabbedIndex ?? 0, []));
    p4(() => {
      let shouldFocusParentAfterwards = getElement()?.contains(document.activeElement);
      if (untabbable)
        changeTabbableIndex(null, void 0);
      else {
        changeTabbableIndex(getLastNonNullIndex(), void 0);
      }
      if (shouldFocusParentAfterwards) {
        focusSelf(true);
      }
    }, [untabbable]);
    const getTabbableAt = T5((child) => {
      return child.getLocallyTabbable();
    }, []);
    const setTabbableAt = T5((child, t5) => {
      child.setLocallyTabbable(t5);
    }, []);
    const isTabbableValid = useStableCallback((child) => {
      return !child.untabbable;
    });
    const { changeIndex: changeTabbableIndex, getCurrentIndex: getTabbableIndex, reevaluateClosestFit } = useChildrenFlag({
      initialIndex: initiallyTabbedIndex ?? (untabbable ? null : 0),
      onIndexChange: useStableCallback((n3, p5, r5) => {
        if (!(n3 == null && untabbable) && n3 != getLastNonNullIndex())
          onTabbableIndexChange?.(n3, p5, r5);
      }),
      getChildren,
      closestFit: true,
      getAt: getTabbableAt,
      isValid: isTabbableValid,
      setAt: setTabbableAt,
      onClosestFit: (index) => {
        if (document.activeElement == null || document.activeElement == document.body) {
          let childElement = index == null ? null : getChildren().getAt(index)?.getElement();
          if (index == null || childElement == null)
            findBackupFocus(getElement()).focus();
          else
            getChildren().getAt(index)?.focusSelf(childElement);
        }
      }
    });
    const focusSelf = T5((force, reason) => {
      const children = getChildren();
      let index = getTabbableIndex();
      const untabbable2 = getUntabbable();
      if (!untabbable2) {
        index ??= getInitiallyTabbedIndex() ?? children.getLowestIndex();
      }
      if (untabbable2) {
        if (document.activeElement != getElement() && (force || untabbableBehavior != "leave-child-focused")) {
          focusSelfParent(getElement());
        }
      } else if (!untabbable2 && index != null) {
        const element = children.getAt(index)?.getElement();
        children.getAt(index)?.focusSelf?.(element);
      } else
        setTabbableIndex(null, reason, true);
    }, []);
    const rovingTabIndexContext = useMemoObject({
      setTabbableIndex,
      parentFocusSelf: focusSelf,
      getInitiallyTabbedIndex: T5(() => {
        return initiallyTabbedIndex ?? (untabbable ? null : 0);
      }, []),
      reevaluateClosestFit,
      getUntabbable: useStableGetter(untabbable),
      getUntabbableBehavior: useStableGetter(untabbableBehavior),
      giveParentFocusedElement: T5((e5) => {
        lastFocused.current = e5;
      }, [])
    });
    return {
      managedChildrenParameters: { onChildrenMountChange: T5(() => {
        reevaluateClosestFit(void 0);
      }, [reevaluateClosestFit]) },
      rovingTabIndexReturn: { setTabbableIndex, getTabbableIndex, focusSelf },
      context: useMemoObject({ rovingTabIndexContext }),
      props: useTagProps({
        // Note: Making this -1 instead of null is partially intentional --
        // it gives us time during useEffect to move focus back to the last focused element
        // (otherwise focus gets lost to the body, and useEffect thinks that it shouldn't
        // focus the child because focus wasn't within the list). 
        // It's also just consistent. 
        tabIndex: untabbable ? 0 : -1,
        // When a hidden child is clicked, some browsers focus the parent, just because it's got a role and a tabindex.
        onFocus: useStableCallback((e5) => {
          const parentElement = getElement();
          console.assert(!!parentElement);
          if (e5.target == getElement()) {
            if (!untabbable) {
              focusSelf(false, e5);
            }
          }
        })
      }, "data-roving-tab-index")
    };
  }
  function useRovingTabIndexChild({ info: { index, untabbable: iAmUntabbable, ...void2 }, context: { rovingTabIndexContext: { giveParentFocusedElement, getUntabbable: getParentIsUntabbable, getUntabbableBehavior, reevaluateClosestFit, setTabbableIndex, getInitiallyTabbedIndex, parentFocusSelf } }, refElementReturn: { getElement }, ...void3 }) {
    monitorCallCount(useRovingTabIndexChild);
    const [tabbable, setTabbable, getTabbable] = useState(getInitiallyTabbedIndex() === index);
    p4(() => {
      reevaluateClosestFit(void 0);
    }, [!!iAmUntabbable]);
    assertEmptyObject(void2);
    assertEmptyObject(void3);
    p4(() => {
      if (tabbable) {
        giveParentFocusedElement(getElement());
      }
    }, [tabbable]);
    return {
      hasCurrentFocusParameters: {
        onCurrentFocusedInnerChanged: useStableCallback((focused, _prevFocused, e5) => {
          if (focused) {
            const parentIsUntabbable = getParentIsUntabbable();
            const untabbableBehavior = getUntabbableBehavior();
            if (!parentIsUntabbable && !iAmUntabbable || untabbableBehavior != "focus-parent")
              setTabbableIndex(index, e5, false);
            else
              parentFocusSelf(false);
          }
        })
      },
      rovingTabIndexChildReturn: {
        tabbable,
        getTabbable
      },
      info: { setLocallyTabbable: setTabbable, getLocallyTabbable: getTabbable },
      props: useTagProps({
        tabIndex: tabbable ? 0 : -1,
        ...{ inert: iAmUntabbable }
        // This inert is to prevent the edge case of clicking a hidden item and it focusing itself
      }, "data-roving-tab-index-child")
    };
  }

  // ../dist/dom-helpers/use-text-content.js
  function useTextContent({ refElementReturn: { getElement }, textContentParameters: { getText, onTextContentChange } }) {
    monitorCallCount(useTextContent);
    const [getTextContent, setTextContent] = usePassiveState(onTextContentChange, returnNull, runImmediately);
    p4(() => {
      const element = getElement();
      if (element) {
        const textContent = getText(element);
        if (textContent) {
          setTextContent(textContent);
        }
      }
    });
    return { textContentReturn: { getTextContent } };
  }

  // ../dist/component-detail/keyboard-navigation/use-typeahead-navigation.js
  function useTypeaheadNavigation({ typeaheadNavigationParameters: { collator, typeaheadTimeout, noTypeahead, isValidForTypeaheadNavigation, onNavigateTypeahead, ...void3 }, rovingTabIndexReturn: { getTabbableIndex: getIndex, setTabbableIndex: setIndex, ...void1 }, ...void2 }) {
    monitorCallCount(useTypeaheadNavigation);
    assertEmptyObject(void1);
    assertEmptyObject(void2);
    assertEmptyObject(void3);
    const [getCurrentTypeahead, setCurrentTypeahead] = usePassiveState(useStableCallback((currentTypeahead, prev, reason) => {
      const handle = setTimeout(() => {
        setCurrentTypeahead(null, void 0);
        setTypeaheadStatus("none");
      }, typeaheadTimeout ?? 1e3);
      updateBasedOnTypeaheadChange(currentTypeahead, reason);
      return () => clearTimeout(handle);
    }));
    const sortedTypeaheadInfo = _4([]);
    const [typeaheadStatus, setTypeaheadStatus] = useState("none");
    const [, setImeActive, getImeActive] = useState(false);
    const [nextTypeaheadChar, setNextTypeaheadChar] = useState(null);
    y4(() => {
      if (nextTypeaheadChar !== null) {
        setCurrentTypeahead((typeahead) => (typeahead ?? "") + nextTypeaheadChar, void 0);
        setNextTypeaheadChar(null);
      }
    }, [nextTypeaheadChar]);
    const comparatorShared = useStableCallback((safeLhs, safeRhs) => {
      let compare;
      safeLhs = safeLhs.normalize("NFD");
      safeRhs = safeRhs.normalize("NFD");
      if (collator)
        compare = collator.compare(safeLhs, safeRhs);
      else
        compare = safeLhs.toLowerCase().localeCompare(safeRhs.toLowerCase() ?? "");
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
        return comparatorShared(lhs, rhs.text.substring(0, lhs.length));
      }
      return lhs - rhs;
    });
    const isDisabled = useStableGetter(noTypeahead);
    const propsStable = _4(useTagProps({
      onKeyDown: useStableCallback((e5) => {
        if (isDisabled())
          return;
        const imeActive = getImeActive();
        const key = e5.key;
        if (e5.ctrlKey || e5.metaKey)
          return;
        if (!imeActive && e5.key === "Backspace") {
          setCurrentTypeahead((t5) => t5 == null ? null : [...t5].reverse().slice(1).reverse().join(""), e5);
          e5.preventDefault();
          e5.stopPropagation();
          return;
        }
        const isCharacterKey = key.length === 1 || !/^[A-Za-z]/.test(key);
        if (isCharacterKey) {
          if (key == " " && (getCurrentTypeahead() ?? "").trim().length == 0) {
          } else {
            e5.preventDefault();
            e5.stopPropagation();
            if (!imeActive)
              setNextTypeaheadChar(key);
          }
        }
      }),
      onCompositionStart: useStableCallback((e5) => {
        setNextTypeaheadChar(e5.data);
        setImeActive(false);
      }),
      onCompositionEnd: useStableCallback((_e) => {
        setImeActive(true);
      })
    }, "data-typeahead-navigation"));
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
          setTypeaheadStatus("invalid");
        } else {
          setTypeaheadStatus("valid");
          let lowestUnsortedIndexAll = null;
          let lowestSortedIndexAll = sortedTypeaheadIndex;
          let lowestUnsortedIndexNext = null;
          let lowestSortedIndexNext = sortedTypeaheadIndex;
          const updateBestFit = (u5) => {
            if (!isValidForTypeaheadNavigation(u5))
              return;
            if (lowestUnsortedIndexAll == null || u5 < lowestUnsortedIndexAll) {
              lowestUnsortedIndexAll = u5;
              lowestSortedIndexAll = i5;
            }
            if ((lowestUnsortedIndexNext == null || u5 < lowestUnsortedIndexNext) && u5 > (getIndex() ?? -Infinity)) {
              lowestUnsortedIndexNext = u5;
              lowestSortedIndexNext = i5;
            }
          };
          let i5 = sortedTypeaheadIndex;
          while (i5 >= 0 && typeaheadComparator(currentTypeahead, sortedTypeaheadInfo.current[i5]) == 0) {
            updateBestFit(sortedTypeaheadInfo.current[i5].unsortedIndex);
            --i5;
          }
          i5 = sortedTypeaheadIndex;
          while (i5 < sortedTypeaheadInfo.current.length && typeaheadComparator(currentTypeahead, sortedTypeaheadInfo.current[i5]) == 0) {
            updateBestFit(sortedTypeaheadInfo.current[i5].unsortedIndex);
            ++i5;
          }
          let toSet = null;
          if (lowestUnsortedIndexNext !== null)
            toSet = sortedTypeaheadInfo.current[lowestSortedIndexNext].unsortedIndex;
          else if (lowestUnsortedIndexAll !== null)
            toSet = sortedTypeaheadInfo.current[lowestSortedIndexAll].unsortedIndex;
          if (toSet != null) {
            setIndex(toSet, reason, true);
            onNavigateTypeahead?.(toSet, reason);
          }
        }
      }
    }
  }
  function useTypeaheadNavigationChild({ info: { index, ...void1 }, textContentParameters: { getText, ...void5 }, context: { typeaheadNavigationContext: { sortedTypeaheadInfo, insertingComparator, excludeSpace, ...void2 } }, refElementReturn: { getElement, ...void3 }, ...void4 }) {
    monitorCallCount(useTypeaheadNavigationChild);
    assertEmptyObject(void1);
    assertEmptyObject(void2);
    assertEmptyObject(void3);
    assertEmptyObject(void4);
    assertEmptyObject(void5);
    const { textContentReturn } = useTextContent({
      refElementReturn: { getElement },
      textContentParameters: {
        getText,
        onTextContentChange: T5((text) => {
          if (text) {
            const sortedIndex = binarySearch(sortedTypeaheadInfo, text, insertingComparator);
            console.assert(sortedIndex < 0 || insertingComparator(sortedTypeaheadInfo[sortedIndex].text, { unsortedIndex: index, text }) == 0);
            if (sortedIndex < 0) {
              sortedTypeaheadInfo.splice(-sortedIndex - 1, 0, { text, unsortedIndex: index });
            } else {
              sortedTypeaheadInfo.splice(sortedIndex, 0, { text, unsortedIndex: index });
            }
            return () => {
              const sortedIndex2 = binarySearch(sortedTypeaheadInfo, text, insertingComparator);
              console.assert(sortedIndex2 < 0 || insertingComparator(sortedTypeaheadInfo[sortedIndex2].text, { unsortedIndex: index, text }) == 0);
              if (sortedIndex2 >= 0) {
                sortedTypeaheadInfo.splice(sortedIndex2, 1);
              }
            };
          }
        }, [])
      }
    });
    return {
      textContentReturn,
      pressParameters: { excludeSpace }
    };
  }
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

  // ../dist/component-detail/keyboard-navigation/use-list-navigation-partial.js
  function useListNavigation({ linearNavigationParameters, typeaheadNavigationParameters, rovingTabIndexParameters, managedChildrenReturn, refElementReturn, paginatedChildrenParameters, rearrangeableChildrenReturn, ...void1 }) {
    monitorCallCount(useListNavigation);
    const { props: propsRTI, rovingTabIndexReturn, managedChildrenParameters, context: contextRovingTabIndex, ...void2 } = useRovingTabIndex({ managedChildrenReturn, rovingTabIndexParameters, refElementReturn });
    const { propsStable: propsStableTN, typeaheadNavigationReturn, context: contextTypeahead, ...void3 } = useTypeaheadNavigation({ rovingTabIndexReturn, typeaheadNavigationParameters });
    const { propsStable: propsStableLN, linearNavigationReturn, ...void4 } = useLinearNavigation({ rovingTabIndexReturn, linearNavigationParameters, paginatedChildrenParameters, rearrangeableChildrenReturn });
    assertEmptyObject(void1);
    assertEmptyObject(void2);
    assertEmptyObject(void3);
    assertEmptyObject(void4);
    const p5 = useMergedProps(propsStableTN, propsStableLN);
    const propsStable = _4(p5);
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
  }
  function useListNavigationChild({ info: { index, untabbable, ...void1 }, context, refElementReturn, textContentParameters, ...void2 }) {
    monitorCallCount(useListNavigationChild);
    const { props, ...rticr } = useRovingTabIndexChild({ context, info: { index, untabbable }, refElementReturn });
    const { ...tncr } = useTypeaheadNavigationChild({ refElementReturn, textContentParameters, context, info: { index } });
    assertEmptyObject(void1);
    assertEmptyObject(void2);
    return {
      props,
      ...tncr,
      ...rticr
    };
  }

  // ../dist/component-detail/keyboard-navigation/use-grid-navigation-partial.js
  function useGridNavigation({ gridNavigationParameters: { onTabbableColumnChange, ...void3 }, linearNavigationParameters, ...listNavigationParameters }) {
    monitorCallCount(useGridNavigation);
    const [getTabbableColumn, setTabbableColumn] = usePassiveState(onTabbableColumnChange, useStableCallback(() => {
      let t5 = listNavigationParameters.rovingTabIndexParameters.initiallyTabbedIndex ?? 0;
      return { actual: t5, ideal: t5 };
    }));
    const { linearNavigationReturn, rovingTabIndexReturn, typeaheadNavigationReturn, managedChildrenParameters, context: { rovingTabIndexContext, typeaheadNavigationContext }, props, ...void1 } = useListNavigation({
      linearNavigationParameters: { arrowKeyDirection: "vertical", ...linearNavigationParameters },
      ...listNavigationParameters
    });
    assertEmptyObject(void1);
    assertEmptyObject(void3);
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
  }
  function useGridNavigationRow({
    // Stuff for the row as a child of the parent grid
    info: { index, untabbable, ...void3 },
    textContentParameters,
    context: contextFromParent,
    // Stuff for the row as a parent of child cells
    linearNavigationParameters,
    rovingTabIndexParameters: { untabbable: rowIsUntabbableAndSoAreCells, initiallyTabbedIndex, onTabbableIndexChange, ...void4 },
    managedChildrenReturn,
    typeaheadNavigationParameters,
    // Both/neither
    refElementReturn,
    ...void1
  }) {
    monitorCallCount(useGridNavigationRow);
    const { getTabbableColumn, setTabbableColumn, setTabbableRow } = contextFromParent.gridNavigationRowContext;
    const getIndex = useStableCallback(() => {
      return index;
    });
    const whenThisRowIsFocused = useStableCallback((e5) => {
      const { getChildren } = managedChildrenReturn;
      if (contextFromParent.rovingTabIndexContext.getUntabbable()) {
        contextFromParent.rovingTabIndexContext.parentFocusSelf(true);
      } else {
        let { ideal, actual } = getTabbableColumn();
        let index2 = ideal ?? 0;
        let child = getChildren().getAt(index2);
        let lowestIndex = getChildren().getLowestIndex();
        let highestIndex = getChildren().getHighestIndex();
        while ((!child || child.untabbable) && index2 > lowestIndex) {
          --index2;
          child = getChildren().getAt(index2);
        }
        while ((!child || child.untabbable) && index2 <= highestIndex) {
          ++index2;
          child = getChildren().getAt(index2);
        }
        if (child) {
          const e6 = child.getElement();
          child.focusSelf(e6);
        } else {
          focus(e5);
        }
      }
    }, []);
    const focusSelf = whenThisRowIsFocused;
    const { props: propsLNC, info: { getLocallyTabbable, setLocallyTabbable, ...void2 }, hasCurrentFocusParameters, pressParameters, rovingTabIndexChildReturn, textContentReturn, ...void6 } = useListNavigationChild({ info: { index, untabbable }, refElementReturn, textContentParameters, context: contextFromParent });
    const allChildCellsAreUntabbable = !rovingTabIndexChildReturn.tabbable;
    const { props: propsLN, context: contextULN, linearNavigationReturn, managedChildrenParameters, rovingTabIndexReturn, typeaheadNavigationReturn, ...void5 } = useListNavigation({
      managedChildrenReturn,
      refElementReturn,
      typeaheadNavigationParameters,
      rearrangeableChildrenReturn: { indexDemangler: identity_default, indexMangler: identity_default },
      rovingTabIndexParameters: {
        untabbableBehavior: "leave-child-focused",
        focusSelfParent: whenThisRowIsFocused,
        untabbable: allChildCellsAreUntabbable || rowIsUntabbableAndSoAreCells,
        initiallyTabbedIndex,
        onTabbableIndexChange: useStableCallback((v5, p5, r5) => {
          setTabbableColumn({ ideal: v5, actual: v5 }, r5);
          onTabbableIndexChange?.(v5, p5, r5);
        })
      },
      linearNavigationParameters: {
        onNavigateLinear: useStableCallback((next, event) => {
          setTabbableColumn((prev) => ({ ideal: next, actual: prev?.actual ?? next }), event);
        }),
        disableHomeEndKeys: true,
        pageNavigationSize: 0,
        arrowKeyDirection: "horizontal",
        ...linearNavigationParameters
      },
      paginatedChildrenParameters: { paginationMin: null, paginationMax: null }
    });
    assertEmptyObject(void1);
    assertEmptyObject(void2);
    assertEmptyObject(void3);
    assertEmptyObject(void4);
    assertEmptyObject(void5);
    assertEmptyObject(void6);
    const { setTabbableIndex } = rovingTabIndexReturn;
    const gridNavigationCellContext = useMemoObject({
      //allChildCellsAreUntabbable,
      setTabbableRow,
      getRowIndex: getIndex,
      getTabbableColumn,
      setTabbableColumn,
      setTabbableCell: setTabbableIndex
    });
    propsLN.tabIndex = propsLN.tabIndex ?? propsLNC.tabIndex;
    const props = useMergedProps(propsLN, propsLNC, {
      // Ensure that if the browser focuses the row for whatever reason, we transfer the focus to a child cell.
      onFocus: useStableCallback((e5) => whenThisRowIsFocused(e5.currentTarget))
    });
    props.tabIndex = -1;
    const contextToChildren = useMemoObject({
      gridNavigationCellContext,
      ...contextULN
    });
    return {
      context: contextToChildren,
      props: useTagProps(props, "data-use-grid-navigation-partial-row"),
      info: { focusSelf, getLocallyTabbable, setLocallyTabbable },
      hasCurrentFocusParameters,
      pressParameters,
      rovingTabIndexChildReturn,
      textContentReturn,
      linearNavigationReturn,
      managedChildrenParameters,
      rovingTabIndexReturn,
      typeaheadNavigationReturn
    };
  }
  function useGridNavigationCell({ context: { gridNavigationCellContext: { getRowIndex, setTabbableRow, getTabbableColumn: _getCurrentColumn, setTabbableColumn, setTabbableCell, ...void4 }, rovingTabIndexContext, typeaheadNavigationContext, ...void5 }, info: { index, untabbable, ...void7 }, refElementReturn, textContentParameters, gridNavigationCellParameters: { colSpan, ...void6 }, ...void1 }) {
    monitorCallCount(useGridNavigationCell);
    colSpan ??= 1;
    const { hasCurrentFocusParameters: { onCurrentFocusedInnerChanged: ocfic1, ...void3 }, rovingTabIndexChildReturn, textContentReturn, pressParameters, props, info: infoLs, ...void2 } = useListNavigationChild({
      info: { index, untabbable },
      context: { rovingTabIndexContext, typeaheadNavigationContext },
      textContentParameters,
      refElementReturn
    });
    assertEmptyObject(void1);
    assertEmptyObject(void2);
    assertEmptyObject(void3);
    assertEmptyObject(void4);
    assertEmptyObject(void5);
    assertEmptyObject(void6);
    assertEmptyObject(void7);
    return {
      info: infoLs,
      props: useMergedProps(props, { onClick: (e5) => setTabbableColumn((prev) => ({ ideal: index, actual: prev?.actual ?? index }), e5) }),
      rovingTabIndexChildReturn,
      textContentReturn,
      pressParameters,
      hasCurrentFocusParameters: {
        onCurrentFocusedInnerChanged: useStableCallback((focused, prev, e5) => {
          ocfic1?.(focused, prev, e5);
          if (focused) {
            setTabbableRow(getRowIndex(), e5, false);
            setTabbableColumn((prev2) => {
              return { actual: index, ideal: prev2?.ideal ?? index };
            }, e5);
            setTabbableCell((prev2) => {
              if (prev2 != null && (prev2 < index || prev2 > index + colSpan)) {
                return prev2;
              }
              return index;
            }, e5, false);
          }
        })
      }
    };
  }

  // ../dist/preact-extensions/use-force-update.js
  function useForceUpdate() {
    monitorCallCount(useForceUpdate);
    const [, set] = h4(0);
    return _4(() => set((i5) => ++i5)).current;
  }

  // ../dist/component-detail/use-sortable-children.js
  function useRearrangeableChildren({ rearrangeableChildrenParameters: { getIndex, onRearranged }, managedChildrenReturn: { getChildren } }) {
    monitorCallCount(useRearrangeableChildren);
    useEnsureStability("useRearrangeableChildren", getIndex);
    const mangleMap = _4(/* @__PURE__ */ new Map());
    const demangleMap = _4(/* @__PURE__ */ new Map());
    const indexMangler = T5((n3) => mangleMap.current.get(n3) ?? n3, []);
    const indexDemangler = T5((n3) => demangleMap.current.get(n3) ?? n3, []);
    const onRearrangedGetter = useStableGetter(onRearranged);
    const shuffle2 = T5(() => {
      const managedRows = getChildren();
      const originalRows = managedRows._arraySlice();
      const shuffledRows = shuffle_default(originalRows);
      return rearrange(originalRows, shuffledRows);
    }, [
      /* Must remain stable */
    ]);
    const reverse = T5(() => {
      const managedRows = getChildren();
      const originalRows = managedRows._arraySlice();
      const reversedRows = managedRows._arraySlice().reverse();
      return rearrange(originalRows, reversedRows);
    }, [
      /* Must remain stable */
    ]);
    const forceUpdateRef = _4(null);
    const rearrange = T5((originalRows, sortedRows) => {
      mangleMap.current.clear();
      demangleMap.current.clear();
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
    const useRearrangedChildren = T5(function useRearrangedChildren2(children) {
      monitorCallCount(useRearrangedChildren2);
      console.assert(Array.isArray(children));
      const forceUpdate = useForceUpdate();
      console.assert(forceUpdateRef.current == null || forceUpdateRef.current == forceUpdate);
      forceUpdateRef.current = forceUpdate;
      return children.slice().map((child) => ({ child, mangledIndex: indexMangler(getIndex(child)), demangledIndex: getIndex(child) })).sort((lhs, rhs) => {
        return lhs.mangledIndex - rhs.mangledIndex;
      }).map(({ child, mangledIndex, demangledIndex }) => {
        return y3(child.type, { ...child.props, key: demangledIndex, "data-mangled-index": mangledIndex, "data-demangled-index": demangledIndex });
      });
    }, []);
    const toJsonArray = T5((transform) => {
      const managedRows = getChildren();
      return managedRows._arraySlice().map((child) => {
        if (transform)
          return transform(child);
        else
          return child.getSortValue();
      });
    }, []);
    return {
      rearrangeableChildrenReturn: {
        indexMangler,
        indexDemangler,
        //mangleMap,
        //demangleMap,
        rearrange,
        shuffle: shuffle2,
        reverse,
        useRearrangedChildren,
        toJsonArray
      }
    };
  }
  function useSortableChildren({ rearrangeableChildrenParameters, sortableChildrenParameters: { compare: userCompare }, managedChildrenReturn: { getChildren } }) {
    monitorCallCount(useSortableChildren);
    const getCompare = useStableGetter(userCompare ?? defaultCompare);
    const { rearrangeableChildrenReturn } = useRearrangeableChildren({ rearrangeableChildrenParameters, managedChildrenReturn: { getChildren } });
    const { rearrange } = rearrangeableChildrenReturn;
    const sort = T5((direction) => {
      const managedRows = getChildren();
      const compare = getCompare();
      const originalRows = managedRows._arraySlice();
      const sortedRows = compare ? originalRows.sort((lhsRow, rhsRow) => {
        const lhsValue = lhsRow;
        const rhsValue = rhsRow;
        const result = compare(lhsValue, rhsValue);
        if (direction[0] == "d")
          return -result;
        return result;
      }) : managedRows._arraySlice();
      return rearrange(originalRows, sortedRows);
    }, [
      /* Must remain stable */
    ]);
    return {
      sortableChildrenReturn: { sort },
      rearrangeableChildrenReturn
    };
  }
  function defaultCompare(lhs, rhs) {
    return compare1(lhs?.getSortValue(), rhs?.getSortValue());
    function compare1(lhs2, rhs2) {
      if (lhs2 == null || rhs2 == null) {
        if (lhs2 == null)
          return -1;
        if (rhs2 == null)
          return 1;
      }
      return lhs2 - rhs2;
    }
  }

  // ../dist/component-detail/use-multi-selection.js
  function useMultiSelection({ multiSelectionParameters: { onSelectionChange, multiSelectionAriaPropName, multiSelectionMode, ...void3 }, managedChildrenReturn: { getChildren, ...void1 }, childrenHaveFocusReturn: { getAnyFocused, ...void4 }, ...void2 }) {
    const selectedIndices = _4(/* @__PURE__ */ new Set());
    const unselectedIndices = _4(/* @__PURE__ */ new Set());
    assertEmptyObject(void1);
    assertEmptyObject(void2);
    assertEmptyObject(void3);
    assertEmptyObject(void4);
    const startOfShiftSelect = _4(null);
    let shiftKeyHeld = _4(false);
    let ctrlKeyHeld = _4(false);
    const notifyParentOfChildSelectChange = useStableCallback((event, index, selected, previous) => {
      console.assert(selected != previous);
      if (selected == void 0) {
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
        if (previous != void 0) {
          console.assert(unselectedIndices.current.has(index), `The multi-select child at index ${index} changed to selected even though it was not unselected before, somehow.`);
          unselectedIndices.current.delete(index);
        }
        console.assert(!selectedIndices.current.has(index), `The multi-select child at index ${index} changed to selected even though there is already a selected child with that index.`);
        selectedIndices.current.add(index);
        startOfShiftSelect.current = index;
      } else {
        if (previous != void 0) {
          console.assert(selectedIndices.current.has(index), `The multi-select child at index ${index} changed to unselected even though it was not selected before, somehow.`);
          selectedIndices.current.delete(index);
        }
        console.assert(!unselectedIndices.current.has(index), `The multi-select child at index ${index} was marked as unselected even though there is already an unselected child with that index.`);
        unselectedIndices.current.add(index);
      }
      const childCount = selectedIndices.current.size + unselectedIndices.current.size;
      const selectedPercent = selectedIndices.current.size / childCount;
      console.assert(selectedPercent >= 0 && selectedPercent <= 1);
      onSelectionChange?.(enhanceEvent(event, { selectedPercent, selectedIndices: selectedIndices.current }));
    });
    const changeAllChildren = useStableCallback((event, shouldBeSelected) => {
      getChildren().forEach((child) => {
        if (!child.getMultiSelectionDisabled()) {
          child.setSelectedFromParent(event, shouldBeSelected(child.index));
        }
      });
    });
    const doContiguousSelection = useStableCallback((event, endIndex) => {
      let originalEnd = endIndex;
      let temp = 0;
      let startIndex = startOfShiftSelect.current || 0;
      if (startIndex <= endIndex) {
        ++startIndex;
      } else {
        --startIndex;
        temp = endIndex;
        endIndex = startIndex;
        startIndex = temp;
      }
      console.assert(startIndex <= endIndex);
      if (startIndex <= endIndex) {
        changeAllChildren(event, (childIndex) => {
          if (childIndex >= startIndex && childIndex <= endIndex) {
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
    let nextCtrlAIsUndo = _4(false);
    useGlobalHandler(document, "keydown", useStableCallback((e5) => {
      shiftKeyHeld.current = e5.shiftKey || e5.key == "Shift";
      ctrlKeyHeld.current = e5.ctrlKey || e5.key == "Control";
      if (getAnyFocused()) {
        if (e5.code == "KeyA" && e5.ctrlKey && !e5.repeat) {
          if (multiSelectionMode != "disabled") {
            changeAllChildren(e5, !nextCtrlAIsUndo.current ? returnTrue : returnFalse);
            e5.preventDefault();
            e5.stopPropagation();
            nextCtrlAIsUndo.current = !nextCtrlAIsUndo.current;
          }
        }
      }
    }), { capture: true });
    useGlobalHandler(document, "keyup", (e5) => {
      if (e5.key == "Shift")
        shiftKeyHeld.current = false;
      if (e5.key == "Control")
        ctrlKeyHeld.current = false;
    }, { passive: true, capture: true });
    return {
      context: useMemoObject({
        multiSelectionContext: useMemoObject({
          doContiguousSelection,
          notifyParentOfChildSelectChange,
          multiSelectionAriaPropName,
          multiSelectionMode,
          changeAllChildren,
          getCtrlKeyDown: T5(() => ctrlKeyHeld.current, []),
          getShiftKeyDown: T5(() => shiftKeyHeld.current, []),
          getAnyFocused
        })
      }),
      childrenHaveFocusParameters: { onCompositeFocusChange },
      multiSelectionReturn: {},
      propsStable: useMemoObject({})
    };
  }
  function useMultiSelectionChild({ info: { index, ...void4 }, multiSelectionChildParameters: { initiallyMultiSelected, onMultiSelectChange, multiSelectionDisabled, ...void1 }, context: { multiSelectionContext: { notifyParentOfChildSelectChange, multiSelectionAriaPropName, multiSelectionMode, doContiguousSelection, changeAllChildren, getCtrlKeyDown, getShiftKeyDown, getAnyFocused, ...void5 }, ...void3 }, ...void2 }) {
    const getIndex = useStableGetter(index);
    const pressFreebie = _4(false);
    const onPressSync = (e5) => {
      if (!multiSelectionDisabled) {
        if (multiSelectionMode == "activation") {
          if (e5.shiftKey) {
            doContiguousSelection(e5, index);
          } else {
            onMultiSelectChange?.(enhanceEvent(e5, { multiSelected: !getLocalSelected() }));
          }
        } else {
          if (e5.ctrlKey) {
            onMultiSelectChange?.(enhanceEvent(e5, { multiSelected: !getLocalSelected() }));
          } else {
            pressFreebie.current = true;
            focus(e5.currentTarget);
            onCurrentFocusedInnerChanged(true, false, e5);
          }
        }
      }
    };
    const [localSelected, setLocalSelected, getLocalSelected] = useState(initiallyMultiSelected ?? false);
    const changeMultiSelected = useStableCallback((e5, selected) => {
      console.assert(selected != null);
      console.assert(!multiSelectionDisabled);
      let prevSelected = getLocalSelected();
      if (prevSelected != selected) {
        setLocalSelected(selected);
        notifyParentOfChildSelectChange(e5, index, selected, prevSelected);
      }
    });
    y4(() => {
      notifyParentOfChildSelectChange(null, getIndex(), getLocalSelected(), void 0);
      return () => notifyParentOfChildSelectChange(null, getIndex(), void 0, getLocalSelected());
    }, []);
    assertEmptyObject(void1);
    assertEmptyObject(void2);
    assertEmptyObject(void3);
    assertEmptyObject(void4);
    assertEmptyObject(void5);
    const onCurrentFocusedInnerChanged = useStableCallback((focused, prev, event) => {
      if (focused) {
        if (multiSelectionMode == "focus") {
          let any = getAnyFocused();
          console.log("any focused: ", any);
          const subSelectionMode = getShiftKeyDown() ? "toggle" : getCtrlKeyDown() ? "skip" : "set";
          let newIndex = index;
          switch (subSelectionMode) {
            case "set":
              if (any || pressFreebie.current) {
                changeAllChildren(event, (index2) => index2 == newIndex);
              }
              break;
            case "toggle":
              doContiguousSelection(event, index);
              break;
            case "skip":
              debugger;
              break;
          }
        }
      }
      pressFreebie.current = false;
    });
    const setSelectedFromParent = useStableCallback((event, multiSelected) => {
      console.assert(onMultiSelectChange != null);
      onMultiSelectChange?.(enhanceEvent(event, { multiSelected }));
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
      props: { [multiSelectionAriaPropName || "aria-selected"]: localSelected ? "true" : "false" },
      info: {
        getMultiSelected: getLocalSelected,
        setSelectedFromParent,
        getMultiSelectionDisabled: useStableGetter(multiSelectionDisabled)
      }
    };
  }
  function useMultiSelectionChildDeclarative({ multiSelectionChildDeclarativeParameters: { onMultiSelectedChange, multiSelected, ...void3 }, multiSelectionChildReturn: { changeMultiSelected, ...void2 }, ...void1 }) {
    let s5 = multiSelected || false;
    let reasonRef = _4(void 0);
    p4(() => {
      changeMultiSelected(reasonRef.current, s5);
    }, [s5]);
    const omsc = useStableCallback((e5) => {
      reasonRef.current = e5;
      return onMultiSelectedChange?.(e5);
    });
    const setSelectedFromParent = useStableCallback((event, multiSelected2) => {
      onMultiSelectedChange?.(enhanceEvent(event, { multiSelected: multiSelected2 }));
    });
    assertEmptyObject(void1);
    assertEmptyObject(void2);
    assertEmptyObject(void3);
    return {
      multiSelectionChildParameters: {
        onMultiSelectChange: omsc
      },
      info: { setSelectedFromParent }
    };
  }

  // ../dist/component-detail/use-single-selection.js
  function useSingleSelection({ managedChildrenReturn: { getChildren, ...void1 }, rovingTabIndexReturn: { setTabbableIndex, ...void2 }, singleSelectionParameters: { onSingleSelectedIndexChange: onSelectedIndexChange_U, initiallySingleSelectedIndex, singleSelectionAriaPropName, singleSelectionMode, ...void3 }, ...void4 }) {
    monitorCallCount(useSingleSelection);
    assertEmptyObject(void1);
    assertEmptyObject(void2);
    assertEmptyObject(void3);
    assertEmptyObject(void4);
    const onSingleSelectedIndexChange = useStableCallback(onSelectedIndexChange_U ?? noop_default);
    const getSelectedAt = T5((m5) => {
      return m5.getSingleSelected();
    }, []);
    const setSelectedAt = T5((m5, t5, newSelectedIndex, prevSelectedIndex) => {
      if (m5.untabbable) {
        console.assert(false);
      }
      const directionComparison = newSelectedIndex == m5.index ? prevSelectedIndex : newSelectedIndex;
      const direction = directionComparison == null ? null : m5.index - directionComparison;
      if (newSelectedIndex == null)
        console.assert(t5 == false);
      if (t5)
        console.assert(newSelectedIndex === m5.index);
      m5.setLocalSingleSelected(t5, direction);
    }, []);
    const isSelectedValid = T5((m5) => {
      return !m5.untabbable;
    }, []);
    const { changeIndex: changeSingleSelectedIndex, getCurrentIndex: getSingleSelectedIndex } = useChildrenFlag({
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
            if (selectedIndex != null)
              setTabbableIndex(selectedIndex, reason, false);
          }
        })
      }
    };
  }
  function useSingleSelectionChild({ singleSelectionChildParameters: { singleSelectionDisabled, ...void5 }, context: { singleSelectionContext: { getSingleSelectedIndex, onSingleSelectedIndexChange, singleSelectionAriaPropName: ariaPropName, singleSelectionMode, ...void1 }, ...void2 }, info: { index, untabbable, ...void3 }, ...void4 }) {
    monitorCallCount(useSingleSelectionChild);
    assertEmptyObject(void1);
    assertEmptyObject(void2);
    assertEmptyObject(void3);
    assertEmptyObject(void4);
    assertEmptyObject(void5);
    useEnsureStability("useSingleSelectionChild", getSingleSelectedIndex, onSingleSelectedIndexChange);
    const [localSelected, setLocalSelected, getLocalSelected] = useState(getSingleSelectedIndex() == index);
    const [direction, setDirection, getDirection] = useState(getSingleSelectedIndex() == null ? null : getSingleSelectedIndex() - index);
    const onCurrentFocusedInnerChanged = useStableCallback((focused, _prev, e5) => {
      if (!singleSelectionDisabled && singleSelectionMode == "focus" && focused && !untabbable) {
        onSingleSelectedIndexChange(enhanceEvent(e5, { selectedIndex: index }));
      }
    });
    const onPressSync = useStableCallback((e5) => {
      if (!singleSelectionDisabled && !untabbable) {
        if (singleSelectionMode == "activation")
          onSingleSelectedIndexChange(enhanceEvent(e5, { selectedIndex: index }));
      } else {
        focus(e5.currentTarget);
      }
    });
    const propParts = ariaPropName?.split("-") ?? [];
    return {
      info: {
        setLocalSingleSelected: useStableCallback((selected, direction2) => {
          setLocalSelected(selected);
          setDirection(direction2);
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
      }, "data-single-selection-child"),
      hasCurrentFocusParameters: { onCurrentFocusedInnerChanged },
      pressParameters: { onPressSync }
    };
  }
  function useSingleSelectionDeclarative({ singleSelectionReturn: { changeSingleSelectedIndex }, singleSelectionDeclarativeParameters: { singleSelectedIndex, onSingleSelectedIndexChange } }) {
    let s5 = singleSelectedIndex ?? null;
    let reasonRef = _4(void 0);
    p4(() => {
      changeSingleSelectedIndex(s5, reasonRef.current);
    }, [s5]);
    const osic = T5((e5) => {
      reasonRef.current = e5;
      return onSingleSelectedIndexChange?.(e5);
    }, [onSingleSelectedIndexChange]);
    return { singleSelectionParameters: { onSingleSelectedIndexChange: osic } };
  }

  // ../dist/component-detail/use-selection.js
  function useSelection({ managedChildrenReturn, multiSelectionParameters, childrenHaveFocusReturn, rovingTabIndexReturn, singleSelectionParameters }) {
    const { childrenHaveFocusParameters: { onCompositeFocusChange: ocfc1, ...void3 }, context: contextSS, singleSelectionReturn, ...void1 } = useSingleSelection({ managedChildrenReturn, rovingTabIndexReturn, singleSelectionParameters });
    const { childrenHaveFocusParameters: { onCompositeFocusChange: ocfc2, ...void4 }, context: contextMS, multiSelectionReturn, propsStable, ...void2 } = useMultiSelection({ managedChildrenReturn, multiSelectionParameters, childrenHaveFocusReturn });
    assertEmptyObject(void1);
    assertEmptyObject(void2);
    assertEmptyObject(void3);
    assertEmptyObject(void4);
    return {
      propsStable,
      childrenHaveFocusParameters: { onCompositeFocusChange: useStableCallback((...a5) => {
        ocfc1(...a5);
        ocfc2(...a5);
      }) },
      context: useMemoObject({ ...contextSS, ...contextMS }),
      multiSelectionReturn,
      singleSelectionReturn
    };
  }
  function useSelectionChild({ context, info: { index, untabbable, ...void2 }, singleSelectionChildParameters, multiSelectionChildParameters, ...void3 }) {
    const { props: p1, hasCurrentFocusParameters: { onCurrentFocusedInnerChanged: ocfic1 }, pressParameters: { onPressSync: opc1 }, info: { getSingleSelected, setLocalSingleSelected, singleSelected, ...void1 }, singleSelectionChildReturn } = useSingleSelectionChild({ context, info: { index, untabbable }, singleSelectionChildParameters });
    const { props: p22, hasCurrentFocusParameters: { onCurrentFocusedInnerChanged: ocfic2 }, pressParameters: { onPressSync: opc2 }, multiSelectionChildReturn, info: { getMultiSelected, setSelectedFromParent, getMultiSelectionDisabled, ...void5 }, ...void4 } = useMultiSelectionChild({ context, info: { index }, multiSelectionChildParameters });
    assertEmptyObject(void1);
    assertEmptyObject(void2);
    assertEmptyObject(void3);
    assertEmptyObject(void4);
    assertEmptyObject(void5);
    return {
      hasCurrentFocusParameters: { onCurrentFocusedInnerChanged: useStableCallback((...a5) => {
        ocfic1(...a5);
        ocfic2(...a5);
      }) },
      info: {
        getMultiSelected,
        setSelectedFromParent,
        getSingleSelected,
        setLocalSingleSelected,
        singleSelected,
        getMultiSelectionDisabled
      },
      multiSelectionChildReturn,
      pressParameters: { onPressSync: useStableCallback((...a5) => {
        opc1(...a5);
        opc2(...a5);
      }) },
      props: useMergedProps(p1, p22),
      singleSelectionChildReturn
    };
  }
  function useSelectionDeclarative(args) {
    return useSingleSelectionDeclarative(args);
  }
  function useSelectionChildDeclarative(args) {
    return useMultiSelectionChildDeclarative(args);
  }

  // ../dist/component-detail/keyboard-navigation/use-grid-navigation-selection.js
  function useGridNavigationSelection({ gridNavigationParameters, linearNavigationParameters, rovingTabIndexParameters, managedChildrenReturn, typeaheadNavigationParameters, singleSelectionParameters, multiSelectionParameters, refElementReturn, paginatedChildrenParameters, rearrangeableChildrenReturn, childrenHaveFocusReturn, ...void2 }) {
    monitorCallCount(useGridNavigationSelection);
    const { context: { gridNavigationRowContext, rovingTabIndexContext, typeaheadNavigationContext }, linearNavigationReturn, managedChildrenParameters, props, rovingTabIndexReturn, typeaheadNavigationReturn } = useGridNavigation({
      gridNavigationParameters,
      linearNavigationParameters,
      managedChildrenReturn,
      rovingTabIndexParameters: { ...rovingTabIndexParameters, initiallyTabbedIndex: singleSelectionParameters.initiallySingleSelectedIndex || 0 },
      typeaheadNavigationParameters,
      paginatedChildrenParameters,
      rearrangeableChildrenReturn,
      refElementReturn
    });
    const { childrenHaveFocusParameters, context: { singleSelectionContext, multiSelectionContext }, multiSelectionReturn, propsStable, singleSelectionReturn, ...void1 } = useSelection({
      managedChildrenReturn,
      rovingTabIndexReturn,
      singleSelectionParameters,
      multiSelectionParameters,
      childrenHaveFocusReturn
    });
    assertEmptyObject(void1);
    assertEmptyObject(void2);
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
  }
  function useGridNavigationSelectionRow({ info: mcp1, linearNavigationParameters, managedChildrenReturn, refElementReturn, rovingTabIndexParameters, textContentParameters, typeaheadNavigationParameters, context, singleSelectionChildParameters, multiSelectionChildParameters, ...void1 }) {
    monitorCallCount(useGridNavigationSelectionRow);
    const { hasCurrentFocusParameters: { onCurrentFocusedInnerChanged: ocfic1, ...void6 }, info: { getSingleSelected, setLocalSingleSelected, singleSelected, getMultiSelected, setSelectedFromParent, getMultiSelectionDisabled, ...void8 }, props: propsSelection, singleSelectionChildReturn, multiSelectionChildReturn, pressParameters: { onPressSync, ...void4 }, ...void2 } = useSelectionChild({ info: mcp1, context, singleSelectionChildParameters, multiSelectionChildParameters });
    const { hasCurrentFocusParameters: { onCurrentFocusedInnerChanged: ocfic2, ...void7 }, info: { focusSelf, getLocallyTabbable, setLocallyTabbable, ...void9 }, props: propsGridNavigation, linearNavigationReturn, managedChildrenParameters, pressParameters: { excludeSpace, ...void5 }, rovingTabIndexChildReturn, rovingTabIndexReturn, textContentReturn, typeaheadNavigationReturn, context: contextGridNavigation, ...void3 } = useGridNavigationRow({ context, linearNavigationParameters, info: mcp1, managedChildrenReturn, refElementReturn, rovingTabIndexParameters, textContentParameters, typeaheadNavigationParameters });
    assertEmptyObject(void1);
    assertEmptyObject(void2);
    assertEmptyObject(void3);
    assertEmptyObject(void4);
    assertEmptyObject(void5);
    assertEmptyObject(void6);
    assertEmptyObject(void7);
    assertEmptyObject(void8);
    assertEmptyObject(void9);
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
      pressParameters: { onPressSync, excludeSpace },
      hasCurrentFocusParameters: { onCurrentFocusedInnerChanged: useStableCallback((hasFocus, hadFocus, reason) => {
        ocfic1?.(hasFocus, hadFocus, reason);
        ocfic2?.(hasFocus, hadFocus, reason);
      }) },
      props: useMergedProps(propsGridNavigation, propsSelection),
      rovingTabIndexChildReturn,
      rovingTabIndexReturn,
      singleSelectionChildReturn,
      multiSelectionChildReturn,
      textContentReturn,
      typeaheadNavigationReturn
    };
  }
  function useGridNavigationSelectionCell(p5) {
    monitorCallCount(useGridNavigationSelectionCell);
    return useGridNavigationCell(p5);
  }

  // ../dist/component-detail/keyboard-navigation/use-grid-navigation-selection-sortable.js
  function useGridNavigationSelectionSortable({ rearrangeableChildrenParameters, sortableChildrenParameters, linearNavigationParameters, managedChildrenReturn, gridNavigationParameters, paginatedChildrenParameters, refElementReturn, rovingTabIndexParameters, singleSelectionParameters, multiSelectionParameters, typeaheadNavigationParameters, childrenHaveFocusReturn, ...void1 }) {
    monitorCallCount(useGridNavigationSelectionSortable);
    const { rearrangeableChildrenReturn, sortableChildrenReturn } = useSortableChildren({ rearrangeableChildrenParameters, sortableChildrenParameters, managedChildrenReturn });
    const gnr = useGridNavigationSelection({
      rearrangeableChildrenReturn,
      linearNavigationParameters,
      managedChildrenReturn,
      gridNavigationParameters,
      paginatedChildrenParameters,
      refElementReturn,
      rovingTabIndexParameters,
      singleSelectionParameters,
      multiSelectionParameters,
      typeaheadNavigationParameters,
      childrenHaveFocusReturn
    });
    assertEmptyObject(void1);
    return {
      rearrangeableChildrenReturn,
      sortableChildrenReturn,
      ...gnr
    };
  }
  function useGridNavigationSelectionSortableRow({ context: ctxIncoming, info: { index, untabbable, ...void2 }, linearNavigationParameters, managedChildrenReturn, refElementReturn, rovingTabIndexParameters, textContentParameters, typeaheadNavigationParameters, gridNavigationSelectionSortableRowParameters: { getSortableColumnIndex: getSortableColumnIndexUnstable, ...void5 }, singleSelectionChildParameters, multiSelectionChildParameters, ...void1 }) {
    monitorCallCount(useGridNavigationSelectionSortableRow);
    const getSortableColumnIndex = useStableCallback(getSortableColumnIndexUnstable);
    const getSortValue = T5(() => {
      let rows = managedChildrenReturn.getChildren();
      let columnIndex = getSortableColumnIndex() || 0;
      let cell = rows.getAt(columnIndex);
      return cell?.getSortValue();
    }, []);
    const { info: { getLocallyTabbable, getSingleSelected, getMultiSelected, setSelectedFromParent, singleSelected, setLocalSingleSelected, setLocallyTabbable, focusSelf, getMultiSelectionDisabled, ...void4 }, context: ctxOutgoing, hasCurrentFocusParameters, linearNavigationReturn, managedChildrenParameters, pressParameters, props, rovingTabIndexChildReturn, rovingTabIndexReturn, singleSelectionChildReturn, multiSelectionChildReturn, textContentReturn, typeaheadNavigationReturn, ...void3 } = useGridNavigationSelectionRow({
      context: ctxIncoming,
      info: { index, untabbable },
      linearNavigationParameters,
      managedChildrenReturn,
      refElementReturn,
      rovingTabIndexParameters,
      textContentParameters,
      typeaheadNavigationParameters,
      singleSelectionChildParameters,
      multiSelectionChildParameters
    });
    assertEmptyObject(void1);
    assertEmptyObject(void2);
    assertEmptyObject(void3);
    assertEmptyObject(void4);
    assertEmptyObject(void5);
    return {
      info: { getLocallyTabbable, getMultiSelected, setSelectedFromParent, getSingleSelected, getMultiSelectionDisabled, singleSelected, setLocallyTabbable, setLocalSingleSelected, getSortValue, focusSelf },
      context: ctxOutgoing,
      hasCurrentFocusParameters,
      linearNavigationReturn,
      managedChildrenParameters,
      pressParameters,
      props,
      rovingTabIndexChildReturn,
      rovingTabIndexReturn,
      singleSelectionChildReturn,
      multiSelectionChildReturn,
      textContentReturn,
      typeaheadNavigationReturn
    };
  }
  function useGridNavigationSelectionSortableCell({ context, gridNavigationCellParameters, info: { index, untabbable, ...void2 }, refElementReturn, textContentParameters, ...void1 }) {
    monitorCallCount(useGridNavigationSelectionSortableCell);
    assertEmptyObject(void1);
    assertEmptyObject(void2);
    return useGridNavigationSelectionCell({
      context,
      info: { index, untabbable },
      gridNavigationCellParameters,
      refElementReturn,
      textContentParameters
    });
  }

  // ../dist/component-detail/keyboard-navigation/use-list-navigation-selection.js
  function useListNavigationSelection({ linearNavigationParameters, rovingTabIndexParameters, typeaheadNavigationParameters, singleSelectionParameters, multiSelectionParameters, managedChildrenReturn, refElementReturn, paginatedChildrenParameters, rearrangeableChildrenReturn, childrenHaveFocusReturn, ...void3 }) {
    monitorCallCount(useListNavigationSelection);
    const { context: contextSS, propsStable, ...retSS } = useSelection({
      childrenHaveFocusReturn,
      rovingTabIndexReturn: { setTabbableIndex: useStableCallback((...a5) => {
        rovingTabIndexReturn.setTabbableIndex(...a5);
      }) },
      managedChildrenReturn,
      singleSelectionParameters,
      multiSelectionParameters
    });
    const { context: contextLN, props, rovingTabIndexReturn, ...retLN } = useListNavigation({
      rovingTabIndexParameters: { ...rovingTabIndexParameters, initiallyTabbedIndex: singleSelectionParameters.initiallySingleSelectedIndex || 0 },
      linearNavigationParameters,
      paginatedChildrenParameters,
      typeaheadNavigationParameters,
      managedChildrenReturn,
      refElementReturn,
      rearrangeableChildrenReturn
    });
    assertEmptyObject(void3);
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
  }
  function useListNavigationSelectionChild({ info: { index, untabbable, ...void2 }, context, refElementReturn, textContentParameters, singleSelectionChildParameters, multiSelectionChildParameters, ...void1 }) {
    monitorCallCount(useListNavigationSelectionChild);
    const { hasCurrentFocusParameters: { onCurrentFocusedInnerChanged: ocfic2, ...void3 }, info: infoSS, multiSelectionChildReturn, singleSelectionChildReturn, props: propsSS, pressParameters: { onPressSync }, ...void9 } = useSelectionChild({
      info: { index, untabbable },
      context,
      multiSelectionChildParameters,
      singleSelectionChildParameters
    });
    const { hasCurrentFocusParameters: { onCurrentFocusedInnerChanged: ocfic1, ...void6 }, pressParameters: { excludeSpace }, rovingTabIndexChildReturn, textContentReturn, props: propsLN, info: infoLN, ...void8 } = useListNavigationChild({
      info: { index, untabbable },
      context,
      refElementReturn,
      textContentParameters
    });
    assertEmptyObject(void1);
    assertEmptyObject(void2);
    assertEmptyObject(void3);
    assertEmptyObject(void6);
    assertEmptyObject(void8);
    assertEmptyObject(void9);
    return {
      hasCurrentFocusParameters: {
        onCurrentFocusedInnerChanged: useStableCallback((focused, previouslyFocused, e5) => {
          ocfic1?.(focused, previouslyFocused, e5);
          ocfic2?.(focused, previouslyFocused, e5);
        })
      },
      pressParameters: { onPressSync, excludeSpace },
      info: { ...infoSS, ...infoLN },
      rovingTabIndexChildReturn,
      multiSelectionChildReturn,
      singleSelectionChildReturn,
      textContentReturn,
      propsChild: propsSS,
      propsTabbable: propsLN
    };
  }

  // ../dist/component-detail/keyboard-navigation/use-list-navigation-selection-sortable.js
  function useListNavigationSelectionSortable({ linearNavigationParameters, rovingTabIndexParameters, typeaheadNavigationParameters, singleSelectionParameters, multiSelectionParameters, managedChildrenReturn, rearrangeableChildrenParameters, sortableChildrenParameters, refElementReturn, paginatedChildrenParameters, childrenHaveFocusReturn, ...void3 }) {
    monitorCallCount(useListNavigationSelectionSortable);
    const { rearrangeableChildrenReturn, sortableChildrenReturn, ...void1 } = useSortableChildren({ rearrangeableChildrenParameters, sortableChildrenParameters, managedChildrenReturn });
    const { props, context, ...restLN } = useListNavigationSelection({ childrenHaveFocusReturn, linearNavigationParameters, rearrangeableChildrenReturn, rovingTabIndexParameters, typeaheadNavigationParameters, singleSelectionParameters, multiSelectionParameters, managedChildrenReturn, refElementReturn, paginatedChildrenParameters });
    assertEmptyObject(void1);
    assertEmptyObject(void3);
    return {
      context,
      props,
      rearrangeableChildrenReturn,
      sortableChildrenReturn,
      ...restLN
    };
  }
  function useListNavigationSelectionSortableChild({ info, context, refElementReturn, textContentParameters, singleSelectionChildParameters, multiSelectionChildParameters, ...void1 }) {
    monitorCallCount(useListNavigationSelectionSortableChild);
    assertEmptyObject(void1);
    return useListNavigationSelectionChild({
      info,
      context,
      refElementReturn,
      textContentParameters,
      singleSelectionChildParameters,
      multiSelectionChildParameters
    });
  }

  // ../dist/dom-helpers/use-ref-element.js
  function useRefElement(args) {
    monitorCallCount(useRefElement);
    const nonElementWarn = _4(false);
    if (nonElementWarn.current) {
      nonElementWarn.current = false;
      console.assert(false, `useRefElement was used on a component that didn't forward its ref onto a DOM element, so it's attached to that component's VNode instead.`);
    }
    const { onElementChange, onMount, onUnmount } = args.refElementParameters || {};
    useEnsureStability("useRefElement", onElementChange, onMount, onUnmount);
    const handler = T5((e5, prevValue) => {
      if (!(e5 == null || e5 instanceof Element)) {
        console.assert(e5 == null || e5 instanceof Element, `useRefElement was used on a component that didn't forward its ref onto a DOM element, so it's attached to that component's VNode instead.`);
        nonElementWarn.current = true;
      }
      const cleanup = onElementChange?.(e5, prevValue);
      if (prevValue)
        onUnmount?.(prevValue);
      if (e5)
        onMount?.(e5);
      return cleanup;
    }, []);
    const [getElement, setElement] = usePassiveState(handler, returnNull, runImmediately);
    const propsStable = _4(useTagProps({ ref: setElement }, "data-use-ref-element"));
    return {
      propsStable: propsStable.current,
      refElementReturn: {
        getElement
      }
    };
  }

  // ../node_modules/.pnpm/github.com+mwszekely+map-and-set-extensions@2e76da9cceee046d57d83eaacf46e602a97a9f63/node_modules/map-and-set-extensions/dist/map-of-sets.js
  var MapOfSets = {
    add: (map2, key, value) => {
      let set = map2.get(key) ?? /* @__PURE__ */ new Set();
      set.add(value);
      map2.set(key, set);
      return map2;
    },
    /**
     * Removes this `value` from the `Set` associated with `key`. Does not remove the `Set` itself, even if it becomes empty.
     */
    delete: (map2, key, value) => {
      let set = map2.get(key) ?? /* @__PURE__ */ new Set();
      let ret = set.delete(value);
      map2.set(key, set);
      return ret;
    },
    has: (map2, key, value) => {
      return map2.get(key)?.has(value) ?? false;
    }
  };

  // ../dist/observers/use-active-element.js
  var activeElementUpdaters = /* @__PURE__ */ new Map();
  var lastActiveElementUpdaters = /* @__PURE__ */ new Map();
  var windowFocusedUpdaters = /* @__PURE__ */ new Map();
  var windowsFocusedUpdaters = /* @__PURE__ */ new Map();
  function forEachUpdater(window2, map2, value, reason) {
    const updaters = map2.get(window2);
    if (updaters) {
      for (const updater of updaters) {
        const { lastSent, send } = updater;
        if (value !== lastSent) {
          send(value, reason);
          updater.lastSent = value;
        }
      }
    }
  }
  function focusout(e5) {
    const window2 = e5.target.ownerDocument.defaultView;
    if (e5.relatedTarget == null) {
      forEachUpdater(window2, activeElementUpdaters, null, e5);
    } else {
    }
  }
  function focusin(e5) {
    const window2 = e5.target.ownerDocument.defaultView;
    const currentlyFocusedElement = e5.target;
    forEachUpdater(window2, activeElementUpdaters, currentlyFocusedElement, e5);
    forEachUpdater(window2, lastActiveElementUpdaters, currentlyFocusedElement, e5);
  }
  function windowFocus(e5) {
    const window2 = e5.target instanceof Window ? e5.target : e5.currentTarget instanceof Window ? e5.currentTarget : e5.target.ownerDocument.defaultView;
    windowsFocusedUpdaters.set(window2, true);
    forEachUpdater(window2, windowFocusedUpdaters, true, e5);
  }
  function windowBlur(e5) {
    const window2 = e5.target instanceof Window ? e5.target : e5.currentTarget instanceof Window ? e5.currentTarget : e5.target.ownerDocument.defaultView;
    windowsFocusedUpdaters.set(window2, false);
    forEachUpdater(window2, windowFocusedUpdaters, false, e5);
  }
  function useActiveElement({ activeElementParameters: { onActiveElementChange, onLastActiveElementChange, onWindowFocusedChange, getDocument: getDocument4 } }) {
    monitorCallCount(useActiveElement);
    useEnsureStability("useActiveElement", onActiveElementChange, onLastActiveElementChange, onWindowFocusedChange, getDocument4);
    p4(() => {
      const document2 = getDocument4();
      const window2 = document2?.defaultView;
      if ((activeElementUpdaters.get(window2)?.size ?? 0) === 0) {
        document2?.addEventListener("focusin", focusin, { passive: true });
        document2?.addEventListener("focusout", focusout, { passive: true });
        window2?.addEventListener("focus", windowFocus, { passive: true });
        window2?.addEventListener("blur", windowBlur, { passive: true });
      }
      const laeu = { send: setActiveElement, lastSent: void 0 };
      const llaeu = { send: setLastActiveElement, lastSent: void 0 };
      const lwfu = { send: setWindowFocused, lastSent: void 0 };
      MapOfSets.add(activeElementUpdaters, window2, laeu);
      MapOfSets.add(lastActiveElementUpdaters, window2, llaeu);
      MapOfSets.add(windowFocusedUpdaters, window2, lwfu);
      return () => {
        MapOfSets.delete(activeElementUpdaters, window2, laeu);
        MapOfSets.delete(lastActiveElementUpdaters, window2, llaeu);
        MapOfSets.delete(windowFocusedUpdaters, window2, lwfu);
        if (activeElementUpdaters.size === 0) {
          document2?.removeEventListener("focusin", focusin);
          document2?.removeEventListener("focusout", focusout);
          window2?.removeEventListener("focus", windowFocus);
          window2?.removeEventListener("blur", windowBlur);
        }
      };
    }, []);
    const [getActiveElement, setActiveElement] = usePassiveState(onActiveElementChange, returnNull, runImmediately);
    const [getLastActiveElement, setLastActiveElement] = usePassiveState(onLastActiveElementChange, returnNull, runImmediately);
    const [getWindowFocused, setWindowFocused] = usePassiveState(onWindowFocusedChange, returnTrue, runImmediately);
    return { activeElementReturn: { getActiveElement, getLastActiveElement, getWindowFocused } };
  }

  // ../dist/component-detail/use-dismiss.js
  function useDismiss({ dismissParameters: { dismissActive, onDismiss, ...void3 }, backdropDismissParameters: { dismissBackdropActive, onDismissBackdrop, ...void6 }, lostFocusDismissParameters: { dismissLostFocusActive, onDismissLostFocus, ...void7 }, escapeDismissParameters: { dismissEscapeActive, onDismissEscape, parentDepth, ...void2 }, activeElementParameters: { getDocument: getDocument4, onActiveElementChange, onLastActiveElementChange: olaec1, onWindowFocusedChange, ...void5 }, ...void4 }) {
    monitorCallCount(useDismiss);
    const { refElementReturn: refElementSourceReturn, propsStable: propsStableSource } = useRefElement({ refElementParameters: {} });
    const { refElementReturn: refElementPopupReturn, propsStable: propsStablePopup } = useRefElement({ refElementParameters: {} });
    const void8 = useBackdropDismiss({
      refElementPopupReturn,
      backdropDismissParameters: {
        dismissBackdropActive: dismissBackdropActive && dismissActive,
        onDismissBackdrop: useStableCallback((e5) => {
          onDismissBackdrop?.(e5);
          onDismiss(e5, "backdrop");
        })
      }
    });
    const void9 = useEscapeDismiss({
      refElementPopupReturn,
      escapeDismissParameters: {
        dismissEscapeActive: dismissEscapeActive && dismissActive,
        getDocument: getDocument4,
        onDismissEscape: useStableCallback((e5) => {
          onDismissEscape?.(e5);
          onDismiss(e5, "escape");
        }),
        parentDepth
      }
    });
    const { activeElementParameters: { onLastActiveElementChange: olaec2, ...void1 } } = useLostFocusDismiss({
      lostFocusDismissParameters: {
        dismissLostFocusActive: dismissLostFocusActive && dismissActive,
        onDismissLostFocus: useStableCallback((e5) => {
          onDismissLostFocus?.(e5);
          onDismiss(e5, "lost-focus");
        })
      },
      refElementPopupReturn,
      refElementSourceReturn
    });
    const { activeElementReturn: { getActiveElement: _getActiveElement, getLastActiveElement: _getLastActiveElement, getWindowFocused: _getWindowFocused } } = useActiveElement({
      activeElementParameters: {
        onLastActiveElementChange: useStableCallback((a5, b5, r5) => {
          olaec2?.(a5, b5, r5);
          olaec1?.(a5, b5, r5);
        }),
        onActiveElementChange,
        onWindowFocusedChange,
        getDocument: getDocument4
      }
    });
    assertEmptyObject(void1);
    assertEmptyObject(void2);
    assertEmptyObject(void3);
    assertEmptyObject(void4);
    assertEmptyObject(void5);
    assertEmptyObject(void6);
    assertEmptyObject(void7);
    assertEmptyObject(void8);
    assertEmptyObject(void9);
    return {
      refElementSourceReturn,
      refElementPopupReturn,
      propsStableSource,
      propsStablePopup
    };
  }

  // ../node_modules/.pnpm/blocking-elements@0.1.1/node_modules/blocking-elements/dist/blocking-elements.js
  (() => {
    var _a, _b, _c;
    const _blockingElements = Symbol();
    const _alreadyInertElements = Symbol();
    const _topElParents = Symbol();
    const _siblingsToRestore = Symbol();
    const _parentMO = Symbol();
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
        this[_a] = [];
        this[_b] = [];
        this[_c] = /* @__PURE__ */ new Set();
      }
      destructor() {
        this[_restoreInertedSiblings](this[_topElParents]);
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
        this.remove(element);
        this[_topChanged](element);
        this[_blockingElements].push(element);
      }
      remove(element) {
        const i5 = this[_blockingElements].indexOf(element);
        if (i5 === -1) {
          return false;
        }
        this[_blockingElements].splice(i5, 1);
        if (i5 === this[_blockingElements].length) {
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
        if (!newTop) {
          this[_restoreInertedSiblings](oldParents);
          toKeepInert.clear();
          this[_topElParents] = [];
          return;
        }
        const newParents = this[_getParents](newTop);
        if (newParents[newParents.length - 1].parentNode !== document.body) {
          throw Error("Non-connected element cannot be a blocking element");
        }
        this[_topElParents] = newParents;
        const toSkip = this[_getDistributedChildren](newTop);
        if (!oldParents.length) {
          this[_inertSiblings](newParents, toSkip, toKeepInert);
          return;
        }
        let i5 = oldParents.length - 1;
        let j6 = newParents.length - 1;
        while (i5 > 0 && j6 > 0 && oldParents[i5] === newParents[j6]) {
          i5--;
          j6--;
        }
        if (oldParents[i5] !== newParents[j6]) {
          this[_swapInertedSibling](oldParents[i5], newParents[j6]);
        }
        i5 > 0 && this[_restoreInertedSiblings](oldParents.slice(0, i5));
        j6 > 0 && this[_inertSiblings](newParents.slice(0, j6), toSkip, null);
      }
      /**
       * Swaps inertness between two sibling elements.
       * Sets the property `inert` over the attribute since the inert spec
       * doesn't specify if it should be reflected.
       * https://html.spec.whatwg.org/multipage/interaction.html#inert
       */
      [_swapInertedSibling](oldInert, newInert) {
        const siblingsToRestore = oldInert[_siblingsToRestore];
        if (this[_isInertable](oldInert) && !oldInert.inert) {
          oldInert.inert = true;
          siblingsToRestore.add(oldInert);
        }
        if (siblingsToRestore.has(newInert)) {
          newInert.inert = false;
          siblingsToRestore.delete(newInert);
        }
        newInert[_parentMO] = oldInert[_parentMO];
        newInert[_siblingsToRestore] = siblingsToRestore;
        oldInert[_parentMO] = void 0;
        oldInert[_siblingsToRestore] = void 0;
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
          element[_parentMO] = void 0;
          const siblings = element[_siblingsToRestore];
          for (const sibling of siblings) {
            sibling.inert = false;
          }
          element[_siblingsToRestore] = void 0;
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
          const parent = element.parentNode;
          const children = parent.children;
          const inertedSiblings = /* @__PURE__ */ new Set();
          for (let j6 = 0; j6 < children.length; j6++) {
            const sibling = children[j6];
            if (sibling === element || !this[_isInertable](sibling) || toSkip && toSkip.has(sibling)) {
              continue;
            }
            if (toKeepInert && sibling.inert) {
              toKeepInert.add(sibling);
            } else {
              sibling.inert = true;
              inertedSiblings.add(sibling);
            }
          }
          element[_siblingsToRestore] = inertedSiblings;
          const mo = new MutationObserver(this[_handleMutations].bind(this));
          element[_parentMO] = mo;
          let parentToObserve = parent;
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
          const target = mutation.target.host || mutation.target;
          const idx = target === document.body ? parents.length : parents.indexOf(target);
          const inertedChild = parents[idx - 1];
          const inertedSiblings = inertedChild[_siblingsToRestore];
          for (let i5 = 0; i5 < mutation.removedNodes.length; i5++) {
            const sibling = mutation.removedNodes[i5];
            if (sibling === inertedChild) {
              console.info("Detected removal of the top Blocking Element.");
              this.pop();
              return;
            }
            if (inertedSiblings.has(sibling)) {
              sibling.inert = false;
              inertedSiblings.delete(sibling);
            }
          }
          for (let i5 = 0; i5 < mutation.addedNodes.length; i5++) {
            const sibling = mutation.addedNodes[i5];
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
        while (current && current !== document.body) {
          if (current.nodeType === Node.ELEMENT_NODE) {
            parents.push(current);
          }
          if (current.assignedSlot) {
            while (current = current.assignedSlot) {
              parents.push(current);
            }
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
        const result = /* @__PURE__ */ new Set();
        let i5;
        let j6;
        let nodes;
        const slots = shadowRoot.querySelectorAll("slot");
        if (slots.length && slots[0].assignedNodes) {
          for (i5 = 0; i5 < slots.length; i5++) {
            nodes = slots[i5].assignedNodes({
              flatten: true
            });
            for (j6 = 0; j6 < nodes.length; j6++) {
              if (nodes[j6].nodeType === Node.ELEMENT_NODE) {
                result.add(nodes[j6]);
              }
            }
          }
        }
        return result;
      }
    }
    document.$blockingElements = new BlockingElementsImpl();
  })();

  // ../node_modules/.pnpm/wicg-inert@3.1.2/node_modules/wicg-inert/dist/inert.esm.js
  var _createClass = function() {
    function defineProperties(target, props) {
      for (var i5 = 0; i5 < props.length; i5++) {
        var descriptor = props[i5];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    return function(Constructor, protoProps, staticProps) {
      if (protoProps)
        defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  (function() {
    if (typeof window === "undefined") {
      return;
    }
    var slice = Array.prototype.slice;
    var matches2 = Element.prototype.matches || Element.prototype.msMatchesSelector;
    var _focusableElementsString = ["a[href]", "area[href]", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])", "button:not([disabled])", "details", "summary", "iframe", "object", "embed", "[contenteditable]"].join(",");
    var InertRoot = function() {
      function InertRoot2(rootElement, inertManager2) {
        _classCallCheck(this, InertRoot2);
        this._inertManager = inertManager2;
        this._rootElement = rootElement;
        this._managedNodes = /* @__PURE__ */ new Set();
        if (this._rootElement.hasAttribute("aria-hidden")) {
          this._savedAriaHidden = this._rootElement.getAttribute("aria-hidden");
        } else {
          this._savedAriaHidden = null;
        }
        this._rootElement.setAttribute("aria-hidden", "true");
        this._makeSubtreeUnfocusable(this._rootElement);
        this._observer = new MutationObserver(this._onMutation.bind(this));
        this._observer.observe(this._rootElement, { attributes: true, childList: true, subtree: true });
      }
      _createClass(InertRoot2, [{
        key: "destructor",
        value: function destructor() {
          this._observer.disconnect();
          if (this._rootElement) {
            if (this._savedAriaHidden !== null) {
              this._rootElement.setAttribute("aria-hidden", this._savedAriaHidden);
            } else {
              this._rootElement.removeAttribute("aria-hidden");
            }
          }
          this._managedNodes.forEach(function(inertNode) {
            this._unmanageNode(inertNode.node);
          }, this);
          this._observer = /** @type {?} */
          null;
          this._rootElement = /** @type {?} */
          null;
          this._managedNodes = /** @type {?} */
          null;
          this._inertManager = /** @type {?} */
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
        value: function _makeSubtreeUnfocusable(startNode) {
          var _this2 = this;
          composedTreeWalk(startNode, function(node2) {
            return _this2._visitNode(node2);
          });
          var activeElement = document.activeElement;
          if (!document.body.contains(startNode)) {
            var node = startNode;
            var root2 = void 0;
            while (node) {
              if (node.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
                root2 = /** @type {!ShadowRoot} */
                node;
                break;
              }
              node = node.parentNode;
            }
            if (root2) {
              activeElement = root2.activeElement;
            }
          }
          if (startNode.contains(activeElement)) {
            activeElement.blur();
            if (activeElement === document.activeElement) {
              document.body.focus();
            }
          }
        }
        /**
         * @param {!Node} node
         */
      }, {
        key: "_visitNode",
        value: function _visitNode(node) {
          if (node.nodeType !== Node.ELEMENT_NODE) {
            return;
          }
          var element = (
            /** @type {!HTMLElement} */
            node
          );
          if (element !== this._rootElement && element.hasAttribute("inert")) {
            this._adoptInertRoot(element);
          }
          if (matches2.call(element, _focusableElementsString) || element.hasAttribute("tabindex")) {
            this._manageNode(element);
          }
        }
        /**
         * Register the given node with this InertRoot and with InertManager.
         * @param {!Node} node
         */
      }, {
        key: "_manageNode",
        value: function _manageNode(node) {
          var inertNode = this._inertManager.register(node, this);
          this._managedNodes.add(inertNode);
        }
        /**
         * Unregister the given node with this InertRoot and with InertManager.
         * @param {!Node} node
         */
      }, {
        key: "_unmanageNode",
        value: function _unmanageNode(node) {
          var inertNode = this._inertManager.deregister(node, this);
          if (inertNode) {
            this._managedNodes["delete"](inertNode);
          }
        }
        /**
         * Unregister the entire subtree starting at `startNode`.
         * @param {!Node} startNode
         */
      }, {
        key: "_unmanageSubtree",
        value: function _unmanageSubtree(startNode) {
          var _this3 = this;
          composedTreeWalk(startNode, function(node) {
            return _this3._unmanageNode(node);
          });
        }
        /**
         * If a descendant node is found with an `inert` attribute, adopt its managed nodes.
         * @param {!HTMLElement} node
         */
      }, {
        key: "_adoptInertRoot",
        value: function _adoptInertRoot(node) {
          var inertSubroot = this._inertManager.getInertRoot(node);
          if (!inertSubroot) {
            this._inertManager.setInert(node, true);
            inertSubroot = this._inertManager.getInertRoot(node);
          }
          inertSubroot.managedNodes.forEach(function(savedInertNode) {
            this._manageNode(savedInertNode.node);
          }, this);
        }
        /**
         * Callback used when mutation observer detects subtree additions, removals, or attribute changes.
         * @param {!Array<!MutationRecord>} records
         * @param {!MutationObserver} self
         */
      }, {
        key: "_onMutation",
        value: function _onMutation(records, self2) {
          records.forEach(function(record) {
            var target = (
              /** @type {!HTMLElement} */
              record.target
            );
            if (record.type === "childList") {
              slice.call(record.addedNodes).forEach(function(node) {
                this._makeSubtreeUnfocusable(node);
              }, this);
              slice.call(record.removedNodes).forEach(function(node) {
                this._unmanageSubtree(node);
              }, this);
            } else if (record.type === "attributes") {
              if (record.attributeName === "tabindex") {
                this._manageNode(target);
              } else if (target !== this._rootElement && record.attributeName === "inert" && target.hasAttribute("inert")) {
                this._adoptInertRoot(target);
                var inertSubroot = this._inertManager.getInertRoot(target);
                this._managedNodes.forEach(function(managedNode) {
                  if (target.contains(managedNode.node)) {
                    inertSubroot._manageNode(managedNode.node);
                  }
                });
              }
            }
          }, this);
        }
      }, {
        key: "managedNodes",
        get: function get() {
          return new Set(this._managedNodes);
        }
        /** @return {boolean} */
      }, {
        key: "hasSavedAriaHidden",
        get: function get() {
          return this._savedAriaHidden !== null;
        }
        /** @param {?string} ariaHidden */
      }, {
        key: "savedAriaHidden",
        set: function set(ariaHidden) {
          this._savedAriaHidden = ariaHidden;
        },
        get: function get() {
          return this._savedAriaHidden;
        }
      }]);
      return InertRoot2;
    }();
    var InertNode = function() {
      function InertNode2(node, inertRoot) {
        _classCallCheck(this, InertNode2);
        this._node = node;
        this._overrodeFocusMethod = false;
        this._inertRoots = /* @__PURE__ */ new Set([inertRoot]);
        this._savedTabIndex = null;
        this._destroyed = false;
        this.ensureUntabbable();
      }
      _createClass(InertNode2, [{
        key: "destructor",
        value: function destructor() {
          this._throwIfDestroyed();
          if (this._node && this._node.nodeType === Node.ELEMENT_NODE) {
            var element = (
              /** @type {!HTMLElement} */
              this._node
            );
            if (this._savedTabIndex !== null) {
              element.setAttribute("tabindex", this._savedTabIndex);
            } else {
              element.removeAttribute("tabindex");
            }
            if (this._overrodeFocusMethod) {
              delete element.focus;
            }
          }
          this._node = /** @type {?} */
          null;
          this._inertRoots = /** @type {?} */
          null;
          this._destroyed = true;
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
        value: function _throwIfDestroyed() {
          if (this.destroyed) {
            throw new Error("Trying to access destroyed InertNode");
          }
        }
        /** @return {boolean} */
      }, {
        key: "ensureUntabbable",
        /** Save the existing tabindex value and make the node untabbable and unfocusable */
        value: function ensureUntabbable() {
          if (this.node.nodeType !== Node.ELEMENT_NODE) {
            return;
          }
          var element = (
            /** @type {!HTMLElement} */
            this.node
          );
          if (matches2.call(element, _focusableElementsString)) {
            if (
              /** @type {!HTMLElement} */
              element.tabIndex === -1 && this.hasSavedTabIndex
            ) {
              return;
            }
            if (element.hasAttribute("tabindex")) {
              this._savedTabIndex = /** @type {!HTMLElement} */
              element.tabIndex;
            }
            element.setAttribute("tabindex", "-1");
            if (element.nodeType === Node.ELEMENT_NODE) {
              element.focus = function() {
              };
              this._overrodeFocusMethod = true;
            }
          } else if (element.hasAttribute("tabindex")) {
            this._savedTabIndex = /** @type {!HTMLElement} */
            element.tabIndex;
            element.removeAttribute("tabindex");
          }
        }
        /**
         * Add another inert root to this inert node's set of managing inert roots.
         * @param {!InertRoot} inertRoot
         */
      }, {
        key: "addInertRoot",
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
        key: "removeInertRoot",
        value: function removeInertRoot(inertRoot) {
          this._throwIfDestroyed();
          this._inertRoots["delete"](inertRoot);
          if (this._inertRoots.size === 0) {
            this.destructor();
          }
        }
      }, {
        key: "destroyed",
        get: function get() {
          return (
            /** @type {!InertNode} */
            this._destroyed
          );
        }
      }, {
        key: "hasSavedTabIndex",
        get: function get() {
          return this._savedTabIndex !== null;
        }
        /** @return {!Node} */
      }, {
        key: "node",
        get: function get() {
          this._throwIfDestroyed();
          return this._node;
        }
        /** @param {?number} tabIndex */
      }, {
        key: "savedTabIndex",
        set: function set(tabIndex) {
          this._throwIfDestroyed();
          this._savedTabIndex = tabIndex;
        },
        get: function get() {
          this._throwIfDestroyed();
          return this._savedTabIndex;
        }
      }]);
      return InertNode2;
    }();
    var InertManager = function() {
      function InertManager2(document2) {
        _classCallCheck(this, InertManager2);
        if (!document2) {
          throw new Error("Missing required argument; InertManager needs to wrap a document.");
        }
        this._document = document2;
        this._managedNodes = /* @__PURE__ */ new Map();
        this._inertRoots = /* @__PURE__ */ new Map();
        this._observer = new MutationObserver(this._watchForInert.bind(this));
        addInertStyle(document2.head || document2.body || document2.documentElement);
        if (document2.readyState === "loading") {
          document2.addEventListener("DOMContentLoaded", this._onDocumentLoaded.bind(this));
        } else {
          this._onDocumentLoaded();
        }
      }
      _createClass(InertManager2, [{
        key: "setInert",
        value: function setInert(root2, inert) {
          if (inert) {
            if (this._inertRoots.has(root2)) {
              return;
            }
            var inertRoot = new InertRoot(root2, this);
            root2.setAttribute("inert", "");
            this._inertRoots.set(root2, inertRoot);
            if (!this._document.body.contains(root2)) {
              var parent = root2.parentNode;
              while (parent) {
                if (parent.nodeType === 11) {
                  addInertStyle(parent);
                }
                parent = parent.parentNode;
              }
            }
          } else {
            if (!this._inertRoots.has(root2)) {
              return;
            }
            var _inertRoot = this._inertRoots.get(root2);
            _inertRoot.destructor();
            this._inertRoots["delete"](root2);
            root2.removeAttribute("inert");
          }
        }
        /**
         * Get the InertRoot object corresponding to the given inert root element, if any.
         * @param {!Node} element
         * @return {!InertRoot|undefined}
         */
      }, {
        key: "getInertRoot",
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
        key: "register",
        value: function register(node, inertRoot) {
          var inertNode = this._managedNodes.get(node);
          if (inertNode !== void 0) {
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
        key: "deregister",
        value: function deregister(node, inertRoot) {
          var inertNode = this._managedNodes.get(node);
          if (!inertNode) {
            return null;
          }
          inertNode.removeInertRoot(inertRoot);
          if (inertNode.destroyed) {
            this._managedNodes["delete"](node);
          }
          return inertNode;
        }
        /**
         * Callback used when document has finished loading.
         */
      }, {
        key: "_onDocumentLoaded",
        value: function _onDocumentLoaded() {
          var inertElements = slice.call(this._document.querySelectorAll("[inert]"));
          inertElements.forEach(function(inertElement) {
            this.setInert(inertElement, true);
          }, this);
          this._observer.observe(this._document.body || this._document.documentElement, { attributes: true, subtree: true, childList: true });
        }
        /**
         * Callback used when mutation observer detects attribute changes.
         * @param {!Array<!MutationRecord>} records
         * @param {!MutationObserver} self
         */
      }, {
        key: "_watchForInert",
        value: function _watchForInert(records, self2) {
          var _this = this;
          records.forEach(function(record) {
            switch (record.type) {
              case "childList":
                slice.call(record.addedNodes).forEach(function(node) {
                  if (node.nodeType !== Node.ELEMENT_NODE) {
                    return;
                  }
                  var inertElements = slice.call(node.querySelectorAll("[inert]"));
                  if (matches2.call(node, "[inert]")) {
                    inertElements.unshift(node);
                  }
                  inertElements.forEach(function(inertElement) {
                    this.setInert(inertElement, true);
                  }, _this);
                }, _this);
                break;
              case "attributes":
                if (record.attributeName !== "inert") {
                  return;
                }
                var target = (
                  /** @type {!HTMLElement} */
                  record.target
                );
                var inert = target.hasAttribute("inert");
                _this.setInert(target, inert);
                break;
            }
          }, this);
        }
      }]);
      return InertManager2;
    }();
    function composedTreeWalk(node, callback, shadowRootAncestor) {
      if (node.nodeType == Node.ELEMENT_NODE) {
        var element = (
          /** @type {!HTMLElement} */
          node
        );
        if (callback) {
          callback(element);
        }
        var shadowRoot = (
          /** @type {!HTMLElement} */
          element.shadowRoot
        );
        if (shadowRoot) {
          composedTreeWalk(shadowRoot, callback, shadowRoot);
          return;
        }
        if (element.localName == "content") {
          var content = (
            /** @type {!HTMLContentElement} */
            element
          );
          var distributedNodes = content.getDistributedNodes ? content.getDistributedNodes() : [];
          for (var i5 = 0; i5 < distributedNodes.length; i5++) {
            composedTreeWalk(distributedNodes[i5], callback, shadowRootAncestor);
          }
          return;
        }
        if (element.localName == "slot") {
          var slot = (
            /** @type {!HTMLSlotElement} */
            element
          );
          var _distributedNodes = slot.assignedNodes ? slot.assignedNodes({ flatten: true }) : [];
          for (var _i = 0; _i < _distributedNodes.length; _i++) {
            composedTreeWalk(_distributedNodes[_i], callback, shadowRootAncestor);
          }
          return;
        }
      }
      var child = node.firstChild;
      while (child != null) {
        composedTreeWalk(child, callback, shadowRootAncestor);
        child = child.nextSibling;
      }
    }
    function addInertStyle(node) {
      if (node.querySelector("style#inert-style, link#inert-style")) {
        return;
      }
      var style = document.createElement("style");
      style.setAttribute("id", "inert-style");
      style.textContent = "\n[inert] {\n  pointer-events: none;\n  cursor: default;\n}\n\n[inert], [inert] * {\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n";
      node.appendChild(style);
    }
    if (!HTMLElement.prototype.hasOwnProperty("inert")) {
      var inertManager = new InertManager(document);
      Object.defineProperty(HTMLElement.prototype, "inert", {
        enumerable: true,
        /** @this {!HTMLElement} */
        get: function get() {
          return this.hasAttribute("inert");
        },
        /** @this {!HTMLElement} */
        set: function set(inert) {
          inertManager.setInert(this, inert);
        }
      });
    }
  })();

  // ../dist/dom-helpers/use-document-class.js
  function getDocument(element) {
    return element?.ownerDocument ?? document ?? window.document ?? globalThis.document;
  }

  // ../dist/dom-helpers/use-blocking-element.js
  function blockingElements() {
    return getDocument().$blockingElements;
  }
  function useBlockingElement({ activeElementParameters: { getDocument: getDocument4, onActiveElementChange, onLastActiveElementChange, onWindowFocusedChange, ...void3 }, blockingElementParameters: { enabled, getTarget, ...void1 }, ...void2 }) {
    monitorCallCount(useBlockingElement);
    const stableGetTarget = useStableCallback(getTarget);
    useActiveElement({
      activeElementParameters: {
        getDocument: getDocument4,
        onActiveElementChange,
        onWindowFocusedChange,
        onLastActiveElementChange: useStableCallback((e5, prev, reason) => {
          onLastActiveElementChange?.(e5, prev, reason);
          if (e5) {
            if (enabled)
              setLastActiveWhenOpen(e5, reason);
            else
              setLastActiveWhenClosed(e5, reason);
          }
        })
      }
    });
    const [getTop, setTop] = usePassiveState(null, returnNull);
    const [getLastActiveWhenClosed, setLastActiveWhenClosed] = usePassiveState(null, returnNull);
    const [getLastActiveWhenOpen, setLastActiveWhenOpen] = usePassiveState(null, returnNull);
    y4(() => {
      const target = stableGetTarget();
      if (enabled) {
        try {
          blockingElements().push(target);
          setTop(target);
          return () => {
            blockingElements().remove(target);
          };
        } catch (ex) {
          console.error(ex);
        }
      }
    }, [enabled]);
    return { getTop, getLastActiveWhenClosed, getLastActiveWhenOpen };
  }

  // ../dist/component-detail/use-focus-trap.js
  function useFocusTrap({ focusTrapParameters: { onlyMoveFocus, trapActive, focusPopup: focusSelfUnstable, focusOpener: focusOpenerUnstable }, activeElementParameters, refElementReturn }) {
    monitorCallCount(useFocusTrap);
    const focusSelf = useStableCallback(focusSelfUnstable);
    const focusOpener = useStableCallback(focusOpenerUnstable);
    p4(() => {
      if (trapActive) {
        let top = getTop();
        const lastFocusedInThisComponent = getLastActiveWhenOpen();
        if (false) {
          focusSelf(lastFocusedInThisComponent, () => lastFocusedInThisComponent);
        } else {
          top ??= refElementReturn.getElement();
          console.assert(!!top);
          if (top)
            focusSelf(top, () => findFirstFocusable(top));
        }
      } else {
        const lastActive = getLastActiveWhenClosed();
        let currentFocus = document.activeElement;
        let top = refElementReturn.getElement();
        if (currentFocus == document.body || currentFocus == null || top == currentFocus || top?.contains(currentFocus)) {
          if (lastActive)
            focusOpener(lastActive);
        }
      }
    }, [trapActive]);
    const { getElement } = refElementReturn;
    const { getTop, getLastActiveWhenClosed, getLastActiveWhenOpen } = useBlockingElement({
      activeElementParameters,
      blockingElementParameters: {
        enabled: trapActive && !onlyMoveFocus,
        getTarget: getElement
      }
    });
    return {
      props: useTagProps({ "aria-modal": trapActive ? "true" : void 0 }, "data-focus-trap")
    };
  }
  function findFirstFocusable(element) {
    return findFirstCondition(element, (node) => node instanceof Element && isFocusable(node));
  }
  function findFirstCondition(element, filter) {
    if (element && filter(element))
      return element;
    console.assert(!!element);
    element ??= document.body;
    const treeWalker = document.createTreeWalker(element, NodeFilter.SHOW_ELEMENT, { acceptNode: (node) => filter(node) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP });
    const firstFocusable = treeWalker.firstChild();
    return firstFocusable;
  }

  // ../dist/component-detail/use-paginated-children.js
  function usePaginatedChildren({ managedChildrenReturn: { getChildren }, rearrangeableChildrenReturn: { indexDemangler }, paginatedChildrenParameters: { paginationMax, paginationMin }, rovingTabIndexReturn: { getTabbableIndex, setTabbableIndex }, refElementReturn: { getElement } }) {
    monitorCallCount(usePaginatedChildren);
    const [childCount, setChildCount] = useState(null);
    const parentIsPaginated = paginationMin != null || paginationMax != null;
    const lastPagination = _4({ paginationMax: null, paginationMin: null });
    const refreshPagination = T5((paginationMin2, paginationMax2) => {
      const childMax = getChildren().getHighestIndex() + 1;
      const childMin = getChildren().getLowestIndex();
      for (let i5 = childMin; i5 <= childMax; ++i5) {
        const visible = i5 >= (paginationMin2 ?? -Infinity) && i5 < (paginationMax2 ?? Infinity);
        getChildren().getAt(indexDemangler(i5))?.setPaginationVisible(visible);
        if (visible && (paginationMax2 != null || paginationMin2 != null))
          getChildren().getAt(indexDemangler(i5))?.setChildCountIfPaginated(getChildren().getHighestIndex() + 1);
      }
    }, [
      /* Must be empty */
    ]);
    p4(() => {
      let tabbableIndex = getTabbableIndex();
      if (tabbableIndex != null) {
        let shouldFocus = getElement()?.contains(document.activeElement) || false;
        setTimeout(() => {
          if (paginationMin != null && tabbableIndex < paginationMin) {
            setTabbableIndex(paginationMin, void 0, shouldFocus);
          } else if (paginationMax != null && tabbableIndex >= paginationMax) {
            let next = paginationMax - 1;
            if (next == -1)
              next = null;
            setTabbableIndex(next, void 0, shouldFocus);
          }
        }, 1);
      }
      refreshPagination(paginationMin, paginationMax);
      lastPagination.current.paginationMax = paginationMax ?? null;
      lastPagination.current.paginationMin = paginationMin ?? null;
    }, [paginationMax, paginationMin]);
    const getDefaultPaginationVisible = T5((i5) => {
      return i5 >= (paginationMin ?? -Infinity) && i5 < (paginationMax ?? Infinity);
    }, []);
    const paginatedChildContext = F5(() => ({
      parentIsPaginated,
      getDefaultPaginationVisible
    }), [parentIsPaginated]);
    return {
      context: F5(() => ({ paginatedChildContext }), [paginatedChildContext]),
      managedChildrenParameters: {
        onChildrenCountChange: useStableCallback((count) => {
          if (paginationMax != null || paginationMin != null) {
            setChildCount(count);
            const min = paginationMin ?? 0;
            const max = paginationMax ?? count;
            for (let i5 = min; i5 < max; ++i5) {
              getChildren().getAt(i5)?.setChildCountIfPaginated(count);
            }
          } else {
            setChildCount(null);
          }
        })
      },
      paginatedChildrenReturn: { refreshPagination, childCount }
    };
  }
  function usePaginatedChild({ info: { index }, context: { paginatedChildContext: { parentIsPaginated, getDefaultPaginationVisible } } }) {
    monitorCallCount(usePaginatedChild);
    const [childCountIfPaginated, setChildCountIfPaginated] = useState(null);
    const [paginatedVisible, setPaginatedVisible] = useState(parentIsPaginated ? getDefaultPaginationVisible(index) : true);
    return {
      props: useTagProps(!parentIsPaginated ? {} : { "aria-setsize": childCountIfPaginated ?? void 0, "aria-posinset": index + 1 }, "data-paginated-children-child"),
      paginatedChildReturn: {
        /*paginatedVisible,*/
        parentIsPaginated,
        hideBecausePaginated: parentIsPaginated ? !paginatedVisible : false
      },
      info: {
        setPaginationVisible: setPaginatedVisible,
        setChildCountIfPaginated
      }
    };
  }

  // ../dist/component-detail/use-staggered-children.js
  function useStaggeredChildren({ managedChildrenReturn: { getChildren }, staggeredChildrenParameters: { staggered } }) {
    monitorCallCount(useStaggeredChildren);
    const [currentlyStaggering, setCurrentlyStaggering] = useState(staggered);
    const timeoutHandle2 = _4(-1);
    const resetEmergencyTimeout = T5(() => {
      if (timeoutHandle2.current != -1)
        clearTimeout(timeoutHandle2.current);
      timeoutHandle2.current = setTimeout(() => {
        timeoutHandle2.current = -1;
        let target = getTargetStaggerIndex();
        if (target != null)
          setDisplayedStaggerIndex((c5) => Math.min(target, (c5 ?? 0) + 1));
      }, 50);
    }, [
      /* Must be empty */
    ]);
    const [getTargetStaggerIndex, setTargetStaggerIndex] = usePassiveState(T5((newIndex, _prevIndex) => {
      if (timeoutHandle2.current == -1) {
        resetEmergencyTimeout();
        setDisplayedStaggerIndex((c5) => Math.min(newIndex ?? 0, (c5 ?? 0) + 1));
      }
    }, [
      /* Must be empty */
    ]), returnNull);
    const [getDisplayedStaggerIndex, setDisplayedStaggerIndex] = usePassiveState(T5((newIndex, prevIndex) => {
      if (newIndex == null || !s5.current) {
        return;
      }
      setCurrentlyStaggering(newIndex < (getTargetStaggerIndex() ?? 0));
      for (let i5 = prevIndex ?? 0; i5 < newIndex; ++i5) {
        getChildren().getAt(i5)?.setStaggeredVisible(true);
      }
      resetEmergencyTimeout();
    }, [
      /* Must be empty */
    ]), returnNull);
    const parentIsStaggered = !!staggered;
    const childCallsThisToTellTheParentToMountTheNextOne = T5((index) => {
      setDisplayedStaggerIndex((s6) => Math.min(getTargetStaggerIndex() ?? 0, 1 + Math.max(s6 ?? 0, index + 1)));
    }, []);
    const childCallsThisToTellTheParentTheHighestIndex = T5((mountedIndex) => {
      setTargetStaggerIndex((i5) => Math.max(i5 ?? 0, 1 + mountedIndex));
    }, []);
    const s5 = _4(parentIsStaggered);
    s5.current = parentIsStaggered;
    const getDefaultStaggeredVisible = T5((i5) => {
      if (s5.current) {
        const staggerIndex = getDisplayedStaggerIndex();
        if (staggerIndex == null)
          return false;
        return i5 < staggerIndex;
      } else {
        return true;
      }
    }, []);
    const staggeredChildContext = F5(() => ({
      parentIsStaggered,
      childCallsThisToTellTheParentToMountTheNextOne,
      childCallsThisToTellTheParentTheHighestIndex,
      getDefaultStaggeredVisible
    }), [parentIsStaggered]);
    return {
      staggeredChildrenReturn: { stillStaggering: currentlyStaggering },
      context: F5(() => ({
        staggeredChildContext
      }), [staggeredChildContext])
    };
  }
  function useStaggeredChild({ info: { index }, context: { staggeredChildContext: { parentIsStaggered, childCallsThisToTellTheParentTheHighestIndex, getDefaultStaggeredVisible, childCallsThisToTellTheParentToMountTheNextOne } } }) {
    monitorCallCount(useStaggeredChild);
    const [staggeredVisible, setStaggeredVisible] = useState(getDefaultStaggeredVisible(index));
    y4(() => {
      childCallsThisToTellTheParentTheHighestIndex(index);
    }, [index]);
    p4(() => {
      if (parentIsStaggered && staggeredVisible)
        childCallsThisToTellTheParentToMountTheNextOne(index);
    }, [index, parentIsStaggered && staggeredVisible]);
    return {
      props: useTagProps(!parentIsStaggered ? {} : { "aria-busy": (!staggeredVisible).toString() }, "data-staggered-children-child"),
      staggeredChildReturn: { parentIsStaggered, hideBecauseStaggered: parentIsStaggered ? !staggeredVisible : false },
      info: { setStaggeredVisible }
    };
  }

  // ../dist/observers/use-children-have-focus.js
  function useChildrenHaveFocus(args) {
    monitorCallCount(useChildrenHaveFocus);
    const { childrenHaveFocusParameters: { onCompositeFocusChange } } = args;
    const [getAnyFocused, setAnyFocused] = usePassiveState(onCompositeFocusChange, returnFalse, runImmediately);
    const [_getFocusCount, setFocusCount] = usePassiveState(useStableCallback((anyFocused, anyPreviouslyFocused, e5) => {
      console.assert(anyFocused >= 0 && anyFocused <= 1);
      setAnyFocused(!!(anyFocused && !anyPreviouslyFocused), e5);
    }), returnZero, setTimeout);
    return {
      childrenHaveFocusReturn: { getAnyFocused },
      context: useMemoObject({ childrenHaveFocusChildContext: useMemoObject({ setFocusCount }) })
    };
  }
  function useChildrenHaveFocusChild({ context: { childrenHaveFocusChildContext: { setFocusCount } } }) {
    monitorCallCount(useChildrenHaveFocusChild);
    return {
      hasCurrentFocusParameters: {
        onCurrentFocusedInnerChanged: useStableCallback((focused, prev, e5) => {
          if (focused) {
            setFocusCount((p5) => (p5 ?? 0) + 1, e5);
          } else if (!focused && prev) {
            setFocusCount((p5) => (p5 ?? 0) - 1, e5);
          }
        })
      }
    };
  }

  // ../dist/observers/use-has-current-focus.js
  function useHasCurrentFocus(args) {
    monitorCallCount(useHasCurrentFocus);
    const { hasCurrentFocusParameters: { onCurrentFocusedChanged, onCurrentFocusedInnerChanged }, refElementReturn: { getElement } } = args;
    useEnsureStability("useHasCurrentFocus", onCurrentFocusedChanged, onCurrentFocusedInnerChanged, getElement);
    const [getFocused, setFocused] = usePassiveState(onCurrentFocusedChanged, returnFalse, runImmediately);
    const [getFocusedInner, setFocusedInner] = usePassiveState(onCurrentFocusedInnerChanged, returnFalse, runImmediately);
    const onFocusIn = T5((e5) => {
      setFocusedInner(true, e5);
      setFocused(e5.target == getElement(), e5);
    }, []);
    const onFocusOut = T5((e5) => {
      setFocusedInner(false, e5);
      setFocused(false, e5);
    }, []);
    p4(() => {
      return () => {
        setFocused(false, void 0);
        setFocusedInner(false, void 0);
      };
    }, []);
    const propsStable = _4({
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
  }

  // ../dist/component-use/use-grid-navigation-complete.js
  function useCompleteGridNavigation({ gridNavigationParameters, linearNavigationParameters, rovingTabIndexParameters, singleSelectionParameters, multiSelectionParameters, typeaheadNavigationParameters, sortableChildrenParameters, rearrangeableChildrenParameters, paginatedChildrenParameters, staggeredChildrenParameters, refElementParameters, ...void1 }) {
    monitorCallCount(useCompleteGridNavigation);
    assertEmptyObject(void1);
    const getChildren = T5(() => managedChildrenReturn.getChildren(), []);
    const getLowestChildIndex = T5(() => getChildren().getLowestIndex(), []);
    const getHighestChildIndex = T5(() => getChildren().getHighestIndex(), []);
    const isValidForNavigation = T5((i5) => {
      const child = getChildren().getAt(i5);
      if (child == null)
        return false;
      if (child.untabbable)
        return false;
      return true;
    }, []);
    const { refElementReturn, propsStable, ...void2 } = useRefElement({ refElementParameters });
    const { childrenHaveFocusParameters, managedChildrenParameters, context: { gridNavigationRowContext, rovingTabIndexContext, singleSelectionContext, multiSelectionContext, typeaheadNavigationContext }, rearrangeableChildrenReturn, props, rovingTabIndexReturn, linearNavigationReturn, singleSelectionReturn, multiSelectionReturn, sortableChildrenReturn, typeaheadNavigationReturn, ...void3 } = useGridNavigationSelectionSortable({
      gridNavigationParameters,
      linearNavigationParameters: { getLowestIndex: getLowestChildIndex, getHighestIndex: getHighestChildIndex, isValidForLinearNavigation: isValidForNavigation, ...linearNavigationParameters },
      managedChildrenReturn: { getChildren },
      rovingTabIndexParameters: { untabbableBehavior: "focus-parent", ...rovingTabIndexParameters },
      singleSelectionParameters,
      multiSelectionParameters,
      typeaheadNavigationParameters: { isValidForTypeaheadNavigation: isValidForNavigation, ...typeaheadNavigationParameters },
      paginatedChildrenParameters,
      refElementReturn,
      rearrangeableChildrenParameters: {
        onRearranged: useStableCallback(() => {
          refreshPagination(paginatedChildrenParameters.paginationMin, paginatedChildrenParameters.paginationMax);
        }),
        ...rearrangeableChildrenParameters
      },
      childrenHaveFocusReturn: { getAnyFocused: useStableCallback(() => childrenHaveFocusReturn.getAnyFocused()) },
      sortableChildrenParameters
    });
    const { indexDemangler } = rearrangeableChildrenReturn;
    const { context: { childrenHaveFocusChildContext }, childrenHaveFocusReturn } = useChildrenHaveFocus({ childrenHaveFocusParameters });
    const mcr = useManagedChildren({ managedChildrenParameters: { onChildrenCountChange: useStableCallback((c5) => onChildrenCountChange?.(c5)), ...managedChildrenParameters } });
    const { context: { managedChildContext }, managedChildrenReturn } = mcr;
    const { paginatedChildrenReturn, paginatedChildrenReturn: { refreshPagination }, managedChildrenParameters: { onChildrenCountChange }, context: { paginatedChildContext } } = usePaginatedChildren({ refElementReturn, managedChildrenReturn, paginatedChildrenParameters, rovingTabIndexReturn, rearrangeableChildrenReturn: { indexDemangler } });
    const { context: { staggeredChildContext }, staggeredChildrenReturn } = useStaggeredChildren({ managedChildrenReturn, staggeredChildrenParameters });
    const context = useMemoObject({
      singleSelectionContext,
      multiSelectionContext,
      managedChildContext,
      rovingTabIndexContext,
      typeaheadNavigationContext,
      childrenHaveFocusChildContext,
      paginatedChildContext,
      staggeredChildContext,
      gridNavigationRowContext
    });
    assertEmptyObject(void1);
    assertEmptyObject(void2);
    assertEmptyObject(void3);
    return {
      context,
      props: useMergedProps(props, propsStable),
      managedChildrenReturn,
      rearrangeableChildrenReturn,
      staggeredChildrenReturn,
      rovingTabIndexReturn,
      childrenHaveFocusReturn,
      paginatedChildrenReturn,
      linearNavigationReturn,
      singleSelectionReturn,
      multiSelectionReturn,
      sortableChildrenReturn,
      typeaheadNavigationReturn
    };
  }
  function useCompleteGridNavigationRow({ info: { index, untabbable, ...customUserInfo }, context: contextIncomingForRowAsChildOfTable, textContentParameters, linearNavigationParameters, rovingTabIndexParameters, typeaheadNavigationParameters, gridNavigationSelectionSortableRowParameters, hasCurrentFocusParameters: { onCurrentFocusedChanged: ocfc1, onCurrentFocusedInnerChanged: ocfic3, ...void5 }, singleSelectionChildParameters, multiSelectionChildParameters, ...void1 }) {
    monitorCallCount(useCompleteGridNavigationRow);
    const { info: infoPaginatedChild, paginatedChildReturn, props: paginationProps, ...void7 } = usePaginatedChild({ info: { index }, context: contextIncomingForRowAsChildOfTable });
    const { info: infoStaggeredChild, staggeredChildReturn, props: staggeredProps, ...void8 } = useStaggeredChild({ info: { index }, context: contextIncomingForRowAsChildOfTable });
    untabbable ||= paginatedChildReturn.hideBecausePaginated || staggeredChildReturn.hideBecauseStaggered;
    const getChildren = T5(() => managedChildrenReturn.getChildren(), []);
    const getHighestChildIndex = T5(() => getChildren().getHighestIndex(), []);
    const getLowestChildIndex = T5(() => getChildren().getLowestIndex(), []);
    const isValidForNavigation = T5((i5) => {
      const child = getChildren().getAt(i5);
      if (child == null)
        return false;
      if (child.untabbable)
        return false;
      return true;
    }, []);
    const { refElementReturn, propsStable, ...void6 } = useRefElement({ refElementParameters: {} });
    const r5 = useGridNavigationSelectionSortableRow({
      rovingTabIndexParameters,
      typeaheadNavigationParameters: { isValidForTypeaheadNavigation: isValidForNavigation, ...typeaheadNavigationParameters },
      linearNavigationParameters: { isValidForLinearNavigation: isValidForNavigation, getHighestIndex: getHighestChildIndex, getLowestIndex: getLowestChildIndex, ...linearNavigationParameters },
      managedChildrenReturn: { getChildren },
      refElementReturn,
      context: contextIncomingForRowAsChildOfTable,
      info: { index, untabbable },
      textContentParameters,
      gridNavigationSelectionSortableRowParameters,
      singleSelectionChildParameters,
      multiSelectionChildParameters
    });
    const { linearNavigationReturn, managedChildrenParameters, pressParameters, rovingTabIndexChildReturn, rovingTabIndexReturn, singleSelectionChildReturn, multiSelectionChildReturn, textContentReturn, typeaheadNavigationReturn, context: contextGNR, info: infoRowReturn, props: p32, hasCurrentFocusParameters: { onCurrentFocusedInnerChanged: ocfic1, ...void3 }, ...void2 } = r5;
    const { context: contextMC, managedChildrenReturn } = useManagedChildren({ managedChildrenParameters });
    const completeInfo = {
      getElement: refElementReturn.getElement,
      index,
      untabbable,
      ...infoRowReturn,
      ...infoPaginatedChild,
      ...infoStaggeredChild
    };
    const { managedChildReturn, ...void4 } = useManagedChild({ context: contextIncomingForRowAsChildOfTable, info: { ...completeInfo, ...customUserInfo } });
    const context = useMemoObject({
      ...contextGNR,
      ...contextMC
    });
    const { hasCurrentFocusReturn } = useHasCurrentFocus({
      refElementReturn,
      hasCurrentFocusParameters: {
        onCurrentFocusedChanged: ocfc1,
        onCurrentFocusedInnerChanged: useStableCallback((focused, prevFocused, reason) => {
          ocfic1?.(focused, prevFocused, reason);
          ocfic3?.(focused, prevFocused, reason);
        })
      }
    });
    const props = useMergedProps(propsStable, p32, hasCurrentFocusReturn.propsStable, paginationProps, staggeredProps);
    assertEmptyObject(void1);
    assertEmptyObject(void2);
    assertEmptyObject(void3);
    assertEmptyObject(void4);
    assertEmptyObject(void5);
    assertEmptyObject(void6);
    assertEmptyObject(void7);
    assertEmptyObject(void8);
    return {
      pressParameters,
      hasCurrentFocusReturn,
      managedChildrenReturn,
      context,
      managedChildReturn,
      staggeredChildReturn,
      paginatedChildReturn,
      linearNavigationReturn,
      rovingTabIndexChildReturn,
      rovingTabIndexReturn,
      singleSelectionChildReturn,
      multiSelectionChildReturn,
      textContentReturn,
      typeaheadNavigationReturn,
      props
    };
  }
  function useCompleteGridNavigationCell({ gridNavigationCellParameters, context, textContentParameters, info: { focusSelf, index, untabbable, getSortValue, ...customUserInfo }, ...void1 }) {
    monitorCallCount(useCompleteGridNavigationCell);
    const { refElementReturn, propsStable } = useRefElement({ refElementParameters: {} });
    const { hasCurrentFocusParameters, rovingTabIndexChildReturn, textContentReturn, pressParameters: { excludeSpace: es1 }, props: propsRti, info: info2, ...void2 } = useGridNavigationSelectionSortableCell({
      gridNavigationCellParameters,
      info: { index, untabbable },
      context,
      refElementReturn,
      textContentParameters
    });
    assertEmptyObject(void1);
    assertEmptyObject(void2);
    const { hasCurrentFocusReturn } = useHasCurrentFocus({
      hasCurrentFocusParameters: {
        onCurrentFocusedChanged: null,
        ...hasCurrentFocusParameters
      },
      refElementReturn
    });
    const baseInfo = {
      getSortValue,
      getElement: refElementReturn.getElement,
      getLocallyTabbable: rovingTabIndexChildReturn.getTabbable,
      setLocallyTabbable: info2.setLocallyTabbable,
      focusSelf,
      index,
      untabbable
    };
    const { managedChildReturn } = useManagedChild({ context, info: { ...baseInfo, ...customUserInfo } });
    const props = useMergedProps(propsStable, propsRti, hasCurrentFocusReturn.propsStable);
    return {
      props,
      refElementReturn,
      rovingTabIndexChildReturn,
      pressParameters: { excludeSpace: useStableCallback(() => es1?.() || false) },
      hasCurrentFocusReturn,
      managedChildReturn,
      textContentReturn
    };
  }
  function useCompleteGridNavigationDeclarative({ gridNavigationParameters, linearNavigationParameters, paginatedChildrenParameters, rearrangeableChildrenParameters, rovingTabIndexParameters, singleSelectionDeclarativeParameters, multiSelectionParameters, sortableChildrenParameters, staggeredChildrenParameters, typeaheadNavigationParameters, singleSelectionParameters, refElementParameters, ...void1 }) {
    const ret = useCompleteGridNavigation({
      linearNavigationParameters,
      paginatedChildrenParameters,
      rearrangeableChildrenParameters,
      rovingTabIndexParameters,
      singleSelectionParameters: { initiallySingleSelectedIndex: singleSelectionDeclarativeParameters.singleSelectedIndex, onSingleSelectedIndexChange: useStableCallback((...e5) => onSingleSelectedIndexChange?.(...e5)), ...singleSelectionParameters },
      multiSelectionParameters,
      sortableChildrenParameters,
      staggeredChildrenParameters,
      refElementParameters,
      typeaheadNavigationParameters,
      gridNavigationParameters
    });
    const { singleSelectionParameters: { onSingleSelectedIndexChange } } = useSelectionDeclarative({
      singleSelectionDeclarativeParameters,
      singleSelectionReturn: ret.singleSelectionReturn
    });
    const { singleSelectionReturn: { getSingleSelectedIndex }, ...ret2 } = ret;
    assertEmptyObject(void1);
    return { ...ret2, singleSelectionReturn: { getSingleSelectedIndex } };
  }

  // ../dist/component-use/use-list-navigation-complete.js
  function useCompleteListNavigation({ linearNavigationParameters, rearrangeableChildrenParameters, sortableChildrenParameters, typeaheadNavigationParameters, rovingTabIndexParameters, singleSelectionParameters, multiSelectionParameters, paginatedChildrenParameters, staggeredChildrenParameters, refElementParameters, ...void1 }) {
    monitorCallCount(useCompleteListNavigation);
    const { initiallySingleSelectedIndex } = singleSelectionParameters;
    const getChildren = T5(() => managedChildrenReturn.getChildren(), []);
    const getLowestIndex = T5(() => getChildren().getLowestIndex(), []);
    const getHighestIndex = T5(() => getChildren().getHighestIndex(), []);
    const isValidForNavigation = T5((i5) => {
      const child = getChildren().getAt(i5);
      if (!child)
        return false;
      if (child.untabbable)
        return false;
      return true;
    }, []);
    const { propsStable: propsRef, refElementReturn } = useRefElement({ refElementParameters });
    const { childrenHaveFocusParameters, managedChildrenParameters: { onChildrenMountChange, ...mcp1 }, context: { rovingTabIndexContext, singleSelectionContext, multiSelectionContext, typeaheadNavigationContext }, linearNavigationReturn, rovingTabIndexReturn, singleSelectionReturn, multiSelectionReturn, typeaheadNavigationReturn, rearrangeableChildrenReturn, sortableChildrenReturn, props, ...void2 } = useListNavigationSelectionSortable({
      managedChildrenReturn: { getChildren },
      linearNavigationParameters: { getLowestIndex, getHighestIndex, isValidForLinearNavigation: isValidForNavigation, ...linearNavigationParameters },
      typeaheadNavigationParameters: { isValidForTypeaheadNavigation: isValidForNavigation, ...typeaheadNavigationParameters },
      rovingTabIndexParameters: { untabbableBehavior: "focus-parent", ...rovingTabIndexParameters },
      singleSelectionParameters,
      multiSelectionParameters,
      rearrangeableChildrenParameters: {
        onRearranged: useStableCallback(() => {
          refreshPagination(paginatedChildrenParameters.paginationMin, paginatedChildrenParameters.paginationMax);
        }),
        ...rearrangeableChildrenParameters
      },
      paginatedChildrenParameters,
      refElementReturn,
      sortableChildrenParameters,
      childrenHaveFocusReturn: { getAnyFocused: useStableCallback(() => childrenHaveFocusReturn.getAnyFocused()) }
    });
    const { context: { childrenHaveFocusChildContext }, childrenHaveFocusReturn } = useChildrenHaveFocus({ childrenHaveFocusParameters });
    const { paginatedChildrenReturn, paginatedChildrenReturn: { refreshPagination }, managedChildrenParameters: mcp2, context: { paginatedChildContext } } = usePaginatedChildren({ refElementReturn, managedChildrenReturn: { getChildren: useStableCallback(() => managedChildrenReturn.getChildren()) }, rovingTabIndexReturn, paginatedChildrenParameters, rearrangeableChildrenReturn: { indexDemangler: rearrangeableChildrenReturn.indexDemangler } });
    const { context: { staggeredChildContext }, staggeredChildrenReturn } = useStaggeredChildren({ managedChildrenReturn: { getChildren: useStableCallback(() => managedChildrenReturn.getChildren()) }, staggeredChildrenParameters });
    const mcr = useManagedChildren({
      managedChildrenParameters: {
        onChildrenMountChange,
        ...mcp2,
        ...mcp1
      }
    });
    const { context: { managedChildContext }, managedChildrenReturn } = mcr;
    const context = useMemoObject(useMemoObject({
      childrenHaveFocusChildContext,
      managedChildContext,
      paginatedChildContext,
      rovingTabIndexContext,
      singleSelectionContext,
      multiSelectionContext,
      staggeredChildContext,
      typeaheadNavigationContext
    }));
    assertEmptyObject(void1);
    assertEmptyObject(void2);
    return {
      context,
      props: useMergedProps(props, propsRef),
      managedChildrenReturn,
      rearrangeableChildrenReturn,
      staggeredChildrenReturn,
      paginatedChildrenReturn,
      sortableChildrenReturn,
      linearNavigationReturn,
      rovingTabIndexReturn,
      singleSelectionReturn,
      multiSelectionReturn,
      typeaheadNavigationReturn,
      childrenHaveFocusReturn
    };
  }
  function useCompleteListNavigationChild({
    info: { index, focusSelf, untabbable, getSortValue, ...customUserInfo },
    // The "...info" is empty if M is the same as UCLNCI<ChildElement>.
    textContentParameters,
    refElementParameters,
    hasCurrentFocusParameters: { onCurrentFocusedChanged, onCurrentFocusedInnerChanged: ocfic3, ...void7 },
    singleSelectionChildParameters,
    multiSelectionChildParameters,
    context: { managedChildContext, rovingTabIndexContext, paginatedChildContext, staggeredChildContext, singleSelectionContext, multiSelectionContext, typeaheadNavigationContext, childrenHaveFocusChildContext, ...void5 },
    ...void1
  }) {
    monitorCallCount(useCompleteListNavigationChild);
    const { info: infoFromPaginated, paginatedChildReturn, paginatedChildReturn: { hideBecausePaginated }, props: paginationProps } = usePaginatedChild({ info: { index }, context: { paginatedChildContext } });
    const { info: infoFromStaggered, staggeredChildReturn, staggeredChildReturn: { hideBecauseStaggered }, props: staggeredProps } = useStaggeredChild({ info: { index }, context: { staggeredChildContext } });
    untabbable ||= hideBecausePaginated || hideBecauseStaggered;
    const { refElementReturn, propsStable, ...void6 } = useRefElement({ refElementParameters });
    const { hasCurrentFocusParameters: { onCurrentFocusedInnerChanged: ocfic1, ...void3 }, pressParameters: { excludeSpace, onPressSync, ...void2 }, textContentReturn, singleSelectionChildReturn, multiSelectionChildReturn, info: infoFromListNav, rovingTabIndexChildReturn, propsChild, propsTabbable, ...void4 } = useListNavigationSelectionSortableChild({
      info: { index, untabbable },
      context: { rovingTabIndexContext, singleSelectionContext, multiSelectionContext, typeaheadNavigationContext },
      singleSelectionChildParameters,
      multiSelectionChildParameters,
      refElementReturn,
      textContentParameters
    });
    const allStandardInfo = {
      index,
      focusSelf,
      getElement: refElementReturn.getElement,
      getSortValue,
      untabbable,
      ...infoFromStaggered,
      ...infoFromPaginated,
      ...infoFromListNav
    };
    const { managedChildReturn } = useManagedChild({ context: { managedChildContext }, info: { ...allStandardInfo, ...customUserInfo } });
    const { hasCurrentFocusParameters: { onCurrentFocusedInnerChanged: ocfic2 } } = useChildrenHaveFocusChild({ context: { childrenHaveFocusChildContext } });
    const onCurrentFocusedInnerChanged = useStableCallback((focused, prev, e5) => {
      ocfic1?.(focused, prev, e5);
      ocfic2?.(focused, prev, e5);
      ocfic3?.(focused, prev, e5);
    });
    const { hasCurrentFocusReturn } = useHasCurrentFocus({
      hasCurrentFocusParameters: {
        onCurrentFocusedInnerChanged,
        onCurrentFocusedChanged
      },
      refElementReturn
    });
    const props = useMergedProps(propsStable, hasCurrentFocusReturn.propsStable, propsChild, paginationProps, staggeredProps);
    assertEmptyObject(void1);
    assertEmptyObject(void2);
    assertEmptyObject(void3);
    assertEmptyObject(void4);
    assertEmptyObject(void5);
    assertEmptyObject(void6);
    assertEmptyObject(void7);
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
      paginatedChildReturn,
      staggeredChildReturn,
      rovingTabIndexChildReturn
    };
  }
  function useCompleteListNavigationDeclarative({ singleSelectionParameters, singleSelectionDeclarativeParameters, ...rest }) {
    const ret = useCompleteListNavigation({
      singleSelectionParameters: {
        initiallySingleSelectedIndex: singleSelectionDeclarativeParameters.singleSelectedIndex,
        // Needs to be a (stable) callback because of declaration order
        onSingleSelectedIndexChange: useStableCallback((...e5) => onSingleSelectedIndexChange?.(...e5)),
        ...singleSelectionParameters
      },
      ...rest
    });
    const { singleSelectionParameters: { onSingleSelectedIndexChange, ...void3 }, ...void2 } = useSelectionDeclarative({ singleSelectionDeclarativeParameters, singleSelectionReturn: ret.singleSelectionReturn });
    const { singleSelectionReturn: { getSingleSelectedIndex }, ...ret2 } = ret;
    assertEmptyObject(void2);
    assertEmptyObject(void3);
    return { ...ret2, singleSelectionReturn: { getSingleSelectedIndex } };
  }
  function useCompleteListNavigationChildDeclarative({ multiSelectionChildParameters, multiSelectionChildDeclarativeParameters: { multiSelected, onMultiSelectedChange }, ...rest }) {
    const ret = useCompleteListNavigationChild({
      multiSelectionChildParameters: {
        initiallyMultiSelected: multiSelected,
        onMultiSelectChange: useStableCallback((e5) => {
          onMultiSelectChange(e5);
        }),
        ...multiSelectionChildParameters
      },
      ...rest
    });
    const { multiSelectionChildParameters: { onMultiSelectChange }, info, ...void2 } = useSelectionChildDeclarative({
      multiSelectionChildDeclarativeParameters: { onMultiSelectedChange, multiSelected },
      multiSelectionChildReturn: ret.multiSelectionChildReturn
    });
    const { multiSelectionChildReturn, ...ret2 } = ret;
    assertEmptyObject(void2);
    return { ...ret2, multiSelectionChildReturn };
  }

  // ../dist/component-use/use-modal.js
  function useModal({ dismissParameters: { dismissActive, onDismiss, ...void2 }, escapeDismissParameters: { dismissEscapeActive, onDismissEscape, parentDepth, ...void3 }, focusTrapParameters: { trapActive, ...focusTrapParameters }, activeElementParameters: { getDocument: getDocument4, onActiveElementChange, onLastActiveElementChange, onWindowFocusedChange, ...void4 }, backdropDismissParameters: { dismissBackdropActive, onDismissBackdrop, ...void5 }, lostFocusDismissParameters: { dismissLostFocusActive, onDismissLostFocus, ...void6 }, refElementParameters: { onElementChange, onMount, onUnmount, ...void7 }, modalParameters: { active: modalActive, ...void8 }, ...void1 }) {
    monitorCallCount(useModal);
    const { refElementPopupReturn, refElementSourceReturn, propsStablePopup, propsStableSource } = useDismiss({
      dismissParameters: { dismissActive: dismissActive && modalActive, onDismiss },
      escapeDismissParameters: { dismissEscapeActive, onDismissEscape, parentDepth },
      activeElementParameters: { getDocument: getDocument4, onActiveElementChange, onLastActiveElementChange, onWindowFocusedChange },
      backdropDismissParameters: { dismissBackdropActive, onDismissBackdrop },
      lostFocusDismissParameters: { dismissLostFocusActive, onDismissLostFocus }
    });
    const { propsStable, refElementReturn } = useRefElement({ refElementParameters: { onElementChange, onMount, onUnmount } });
    const { props } = useFocusTrap({
      focusTrapParameters: { trapActive: trapActive && modalActive, ...focusTrapParameters },
      activeElementParameters: { getDocument: getDocument4, onActiveElementChange, onLastActiveElementChange, onWindowFocusedChange },
      refElementReturn
    });
    assertEmptyObject(void1);
    assertEmptyObject(void2);
    assertEmptyObject(void3);
    assertEmptyObject(void4);
    assertEmptyObject(void5);
    assertEmptyObject(void6);
    assertEmptyObject(void7);
    assertEmptyObject(void8);
    return {
      propsFocusContainer: useMergedProps(propsStable, props),
      refElementPopupReturn,
      refElementSourceReturn,
      propsStablePopup,
      propsStableSource
    };
  }

  // ../node_modules/.pnpm/github.com+mwszekely+async-to-sync@624c049a849d0a02039c1ec14f78617394daabce/node_modules/async-to-sync/dist/index.js
  function isPromise(p5) {
    return p5 instanceof Promise;
  }
  var Unset3 = Symbol("Unset");
  function asyncToSync({ asyncInput, onInvoke, onInvoked, onFinally: onFinallyAny, onReject, onResolve, onHasError, onHasResult, onError, onReturnValue, capture, onAsyncDebounce, onSyncDebounce, onPending, throttle, wait }) {
    let pending = false;
    let syncDebouncing = false;
    let asyncDebouncing = false;
    let currentCapture = Unset3;
    const onFinally = () => {
      onFinallyAny?.();
      onPending?.(pending = false);
      let nothingElseToDo = !asyncDebouncing;
      onAsyncDebounce?.(asyncDebouncing = false);
      if (nothingElseToDo) {
      } else {
        console.assert(currentCapture !== Unset3);
        if (currentCapture != Unset3) {
          onSyncDebounce?.(syncDebouncing = true);
          syncDebounced();
        }
      }
    };
    const sync = (...args) => {
      onPending?.(pending = true);
      console.assert(syncDebouncing == false);
      onHasError?.(null);
      onHasResult?.(null);
      let promiseOrReturn;
      let hadSyncError = false;
      try {
        onInvoke?.();
        promiseOrReturn = asyncInput(...args);
        onHasError?.(false);
      } catch (ex) {
        hadSyncError = true;
        onError?.(ex);
        onInvoked?.("throw");
      }
      if (isPromise(promiseOrReturn)) {
        onInvoked?.("async");
        promiseOrReturn.then((r5) => {
          onResolve?.();
          onHasResult?.(true);
          onReturnValue?.(r5);
          return r5;
        }).catch((e5) => {
          onReject?.();
          onHasError?.(true);
          onError?.(e5);
          return e5;
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
    const lodashOptions = {
      leading: !wait,
      trailing: true
    };
    if (throttle) {
      if (wait == null || wait < throttle)
        wait = throttle;
      lodashOptions.maxWait = throttle;
    }
    const syncDebounced = debounce_default(() => {
      onSyncDebounce?.(syncDebouncing = false);
      if (!pending) {
        console.assert(currentCapture != Unset3);
        sync(...currentCapture);
      } else {
        onAsyncDebounce?.(asyncDebouncing = true);
      }
    }, wait || void 0, lodashOptions);
    return {
      syncOutput: (...args) => {
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

  // ../dist/preact-extensions/use-async.js
  function identityCapture(...t5) {
    return t5;
  }
  var AsyncFunction = async function() {
  }.constructor;
  function useAsync(asyncHandler, options) {
    monitorCallCount(useAsync);
    const [pending, setPending, _getPending] = useState(false);
    const [result, setResult, _getResult] = useState(void 0);
    const [error, setError, _getError] = useState(void 0);
    const [hasError, setHasError, _getHasError] = useState(false);
    const [hasResult, setHasResult, _getHasResult] = useState(false);
    const [asyncDebouncing, setAsyncDebouncing] = useState(false);
    const [syncDebouncing, setSyncDebouncing] = useState(false);
    const [invocationResult, setInvocationResult] = useState(asyncHandler instanceof AsyncFunction ? "async" : null);
    const [runCount, setRunCount] = useState(0);
    const [settleCount, setSettleCount] = useState(0);
    const [resolveCount, setResolveCount] = useState(0);
    const [rejectCount, setRejectCount] = useState(0);
    const incrementCallCount = T5(() => {
      setRunCount((c5) => c5 + 1);
    }, []);
    const incrementResolveCount = T5(() => {
      setResolveCount((c5) => c5 + 1);
    }, []);
    const incrementRejectCount = T5(() => {
      setRejectCount((c5) => c5 + 1);
    }, []);
    const incrementFinallyCount = T5(() => {
      setSettleCount((c5) => c5 + 1);
    }, []);
    let { throttle, debounce: debounce2, capture: captureUnstable } = options ?? {};
    const captureStable = useStableCallback(captureUnstable ?? identityCapture);
    const asyncHandlerStable = useStableCallback(asyncHandler ?? identity_default);
    const { flushSyncDebounce, syncOutput, cancelSyncDebounce } = F5(() => {
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
        throttle: options?.throttle ?? void 0,
        wait: options?.debounce ?? void 0
      });
    }, [throttle, debounce2]);
    p4(() => {
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
  }

  // ../dist/dom-helpers/use-async-handler.js
  function useAsyncHandler({ asyncHandler, capture: originalCapture, ...restAsyncOptions }) {
    monitorCallCount(useAsyncHandler);
    const [currentCapture, setCurrentCapture, getCurrentCapture] = useState(void 0);
    const [hasCapture, setHasCapture] = useState(false);
    const capture = useStableCallback((e5) => {
      const captured = originalCapture(e5);
      setCurrentCapture(captured);
      setHasCapture(true);
      return [captured, e5];
    });
    return {
      getCurrentCapture,
      currentCapture,
      hasCapture,
      ...useAsync(asyncHandler, { capture, ...restAsyncOptions })
    };
  }

  // ../dist/component-use/use-press.js
  function pressLog(...args) {
    if (window.__log_press_events)
      console.log(...args);
  }
  function supportsPointerEvents() {
    return "onpointerup" in window;
  }
  var justHandledManualClickEvent = false;
  var manualClickTimeout1 = null;
  var manualClickTimeout2 = null;
  function onHandledManualClickEvent() {
    pressLog("manual-click");
    justHandledManualClickEvent = true;
    if (manualClickTimeout1 != null)
      clearTimeout(manualClickTimeout1);
    if (manualClickTimeout2 != null)
      clearTimeout(manualClickTimeout2);
    manualClickTimeout1 = setTimeout(() => {
      pressLog("manual-click halfway");
      manualClickTimeout2 = setTimeout(() => {
        pressLog("manual-click clear");
        justHandledManualClickEvent = false;
      }, 50);
    }, 200);
  }
  document.addEventListener("click", (e5) => {
    if (justHandledManualClickEvent) {
      justHandledManualClickEvent = false;
      manualClickTimeout1 != null && clearTimeout(manualClickTimeout1);
      manualClickTimeout2 != null && clearTimeout(manualClickTimeout2);
      e5.preventDefault();
      e5.stopPropagation();
    }
  }, { capture: true });
  function usePress(args) {
    monitorCallCount(usePress);
    const { refElementReturn: { getElement }, pressParameters: { focusSelf, onPressSync, allowRepeatPresses, longPressThreshold, excludeEnter: ee, excludePointer: ep, excludeSpace: es, onPressingChange: opc } } = args;
    const excludeEnter = useStableCallback(ee ?? returnFalse);
    const excludeSpace = useStableCallback(es ?? returnFalse);
    const excludePointer = useStableCallback(ep ?? returnFalse);
    const onPressingChange = useStableCallback(opc ?? noop_default);
    const [getIsPressing, setIsPressing] = usePassiveState(onPressingChange, returnFalse);
    const hasPressEvent = onPressSync != null;
    const [longPress, setLongPress] = useState(null);
    const [waitingForSpaceUp, setWaitingForSpaceUp, getWaitingForSpaceUp] = useState(false);
    const [pointerDownStartedHere, setPointerDownStartedHere, getPointerDownStartedHere] = useState(false);
    const [hovering, setHovering, getHovering] = useState(false);
    const onTouchStart = useStableCallback((e5) => {
      e5.preventDefault();
      e5.stopPropagation();
      setIsPressing(true, e5);
      setPointerDownStartedHere(true);
      setHovering(true);
      setLongPress(false);
      const element = getElement();
      if (element)
        focusSelf(element);
    });
    const onTouchMove = T5((e5) => {
      pressLog("touchmove", e5);
      e5.preventDefault();
      e5.stopPropagation();
      const element = getElement();
      const touch = e5.touches[0];
      const offsets = [
        [0, 0],
        [-touch.radiusX || 0, -touch.radiusY || 0],
        [+touch.radiusX || 0, -touch.radiusY || 0],
        [-touch.radiusX || 0, +touch.radiusY || 0],
        [+touch.radiusX || 0, +touch.radiusY || 0]
      ];
      let hoveringAtAnyPoint = false;
      for (const [x7, y5] of offsets) {
        const elementAtTouch = document.elementFromPoint((touch?.clientX ?? 0) + x7, (touch?.clientY ?? 0) + y5);
        hoveringAtAnyPoint ||= element?.contains(elementAtTouch) ?? false;
      }
      setIsPressing(hoveringAtAnyPoint && getPointerDownStartedHere(), e5);
      setHovering(hoveringAtAnyPoint);
    }, []);
    const onTouchEnd = T5((e5) => {
      pressLog("touchend", e5);
      e5.preventDefault();
      e5.stopPropagation();
      const hovering2 = getHovering();
      const pointerDownStartedHere2 = getPointerDownStartedHere();
      if (pointerDownStartedHere2 && hovering2) {
        onHandledManualClickEvent();
        handlePress(e5);
      }
      setWaitingForSpaceUp(false);
      setHovering(false);
      setPointerDownStartedHere(false);
      setIsPressing(false, e5);
    }, []);
    const onPointerDown = useStableCallback((e5) => {
      pressLog("pointerdown", e5);
      if (!excludePointer()) {
        if (e5.buttons & 1) {
          e5.preventDefault();
          e5.stopPropagation();
          setIsPressing(true, e5);
          setPointerDownStartedHere(true);
          setHovering(true);
          setLongPress(false);
          const element = getElement();
          if (element)
            focusSelf(element);
        }
      }
    });
    const onPointerMove = useStableCallback((e5) => {
      pressLog("pointermove", e5);
      let listeningForPress = getPointerDownStartedHere();
      if (!(e5.buttons & 1))
        setPointerDownStartedHere(listeningForPress = false);
      if (listeningForPress) {
        const element = getElement();
        const elementAtPointer = document.elementFromPoint(e5.clientX, e5.clientY);
        const hovering2 = element == elementAtPointer || element?.contains(elementAtPointer) || false;
        setHovering(hovering2);
        setIsPressing(hovering2 && getPointerDownStartedHere(), e5);
      }
    });
    const onPointerUp = T5((e5) => {
      pressLog("pointerup", e5);
      const hovering2 = getHovering();
      const pointerDownStartedHere2 = getPointerDownStartedHere();
      if (!excludePointer()) {
        if (pointerDownStartedHere2 && hovering2) {
          onHandledManualClickEvent();
          handlePress(e5);
          e5.preventDefault();
          e5.stopPropagation();
        }
      }
      setWaitingForSpaceUp(false);
      setHovering(false);
      setPointerDownStartedHere(false);
      setLongPress(false);
      setIsPressing(false, e5);
    }, []);
    const onPointerEnter = T5((_e) => {
      pressLog("pointerenter", _e);
      setHovering(true);
    }, []);
    const onPointerLeave = T5((_e) => {
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
    const handlePress = useStableCallback((e5) => {
      pressLog("handlepress", e5);
      setWaitingForSpaceUp(false);
      setHovering(false);
      setPointerDownStartedHere(false);
      setLongPress(null);
      if (onPressSync) {
        const element = getElement();
        if (element)
          focusSelf(element);
        e5.preventDefault();
        e5.stopPropagation();
        try {
          pulse();
        } finally {
          onPressSync(e5);
        }
      }
    });
    const onKeyDown = useStableCallback((e5) => {
      pressLog("keydown", e5);
      if (onPressSync) {
        if (e5.key == " " && !excludeSpace()) {
          setWaitingForSpaceUp(true);
          setIsPressing(true, e5);
          e5.preventDefault();
        }
        if (e5.key == "Enter" && !excludeEnter() && (!e5.repeat || (allowRepeatPresses ?? false))) {
          setIsPressing(true, e5);
          handlePress(e5);
          requestAnimationFrame(() => {
            setIsPressing(false, e5);
          });
        }
      }
    });
    const onKeyUp = useStableCallback((e5) => {
      pressLog("keyup", e5);
      const waitingForSpaceUp2 = getWaitingForSpaceUp();
      if (waitingForSpaceUp2 && e5.key == " " && !excludeSpace()) {
        handlePress(e5);
        setIsPressing(false, e5);
      }
    });
    const onClick = useStableCallback((e5) => {
      pressLog("click", e5);
      const element = getElement();
      if (onPressSync) {
        if (e5.detail > 1) {
          if ("stopImmediatePropagation" in e5)
            e5.stopImmediatePropagation();
          e5.stopPropagation();
        } else {
          if (justHandledManualClickEvent) {
            justHandledManualClickEvent = false;
          } else {
            console.assert(justHandledManualClickEvent == false, "Logic???");
            if (e5.target && element?.contains(e5.target)) {
              if (getHovering()) {
              } else {
                debugger;
                console.log("onclick was fired and will be handled as it doesn't look like it came from a pointer event", e5);
                console.assert(justHandledManualClickEvent == false, "Logic???");
              }
              setIsPressing(true, e5);
              requestAnimationFrame(() => {
                setIsPressing(false, e5);
              });
              handlePress(e5);
            }
          }
        }
      }
    });
    const onFocusOut = useStableCallback((e5) => {
      pressLog("focusout", e5);
      setWaitingForSpaceUp(false);
      setIsPressing(false, e5);
    });
    const p5 = supportsPointerEvents();
    return {
      pressReturn: {
        pressing: pointerDownStartedHere && hovering || waitingForSpaceUp || false,
        getIsPressing,
        longPress
      },
      props: {
        onKeyDown,
        onKeyUp,
        onTouchStart: !hasPressEvent ? void 0 : !p5 ? onTouchStart : void 0,
        onTouchCancel: !hasPressEvent ? void 0 : !p5 ? onTouchEnd : void 0,
        onTouchMove: !hasPressEvent ? void 0 : !p5 ? onTouchMove : void 0,
        onTouchEnd: !hasPressEvent ? void 0 : !p5 ? onTouchEnd : void 0,
        onPointerDown: !hasPressEvent ? void 0 : p5 ? onPointerDown : void 0,
        onPointerCancel: !hasPressEvent ? void 0 : p5 ? onPointerDown : void 0,
        onPointerMove: !pointerDownStartedHere || !hasPressEvent ? void 0 : p5 ? onPointerMove : void 0,
        onPointerUp: !hasPressEvent ? void 0 : p5 ? onPointerUp : void 0,
        onPointerEnter: !hasPressEvent ? void 0 : p5 ? onPointerEnter : void 0,
        onPointerLeave: !hasPressEvent ? void 0 : p5 ? onPointerLeave : void 0,
        [onfocusout]: onFocusOut,
        onClick
      }
    };
  }
  var pulse = "vibrate" in navigator && navigator.vibrate instanceof Function ? () => navigator.vibrate(10) : () => {
  };

  // ../dist/component-use/use-random-id.js
  function useRandomId({ randomIdParameters: { prefix, otherReferencerProp } }) {
    monitorCallCount(useRandomId);
    const id = prefix + V3();
    useEnsureStability("useRandomId", prefix, id);
    const referencerElementProps = _4(otherReferencerProp == null ? {} : { [otherReferencerProp]: id });
    const sourceElementProps = _4({ id });
    useEnsureStability("useRandomIdReferencerElement", otherReferencerProp);
    return {
      propsReferencer: referencerElementProps.current,
      propsSource: sourceElementProps.current,
      randomIdReturn: {
        id
      }
    };
  }

  // ../dist/component-use/use-random-dual-ids.js
  function useRandomDualIds({ randomIdInputParameters, randomIdLabelParameters }) {
    monitorCallCount(useRandomDualIds);
    const { randomIdReturn: randomIdInputReturn, propsReferencer: propsLabelAsReferencer, propsSource: propsInputAsSource } = useRandomId({ randomIdParameters: randomIdInputParameters });
    const { randomIdReturn: randomIdLabelReturn, propsReferencer: propsInputAsReferencer, propsSource: propsLabelAsSource } = useRandomId({ randomIdParameters: randomIdLabelParameters });
    return {
      propsLabel: useMergedProps(propsLabelAsReferencer, propsLabelAsSource),
      propsInput: useMergedProps(propsInputAsReferencer, propsInputAsSource),
      randomIdInputReturn,
      randomIdLabelReturn
    };
  }

  // ../dist/dom-helpers/use-draggable.js
  function useDraggable({ effectAllowed, data, dragImage, dragImageXOffset, dragImageYOffset }) {
    monitorCallCount(useDraggable);
    const [dragging, setDragging, getDragging] = useState(false);
    const [lastDropEffect, setLastDropEffect, getLastDropEffect] = useState(null);
    const onDragStart = (e5) => {
      setDragging(true);
      if (e5.dataTransfer) {
        e5.dataTransfer.effectAllowed = effectAllowed ?? "all";
        if (dragImage)
          e5.dataTransfer.setDragImage(dragImage, dragImageXOffset ?? 0, dragImageYOffset ?? 0);
        const entries = Object.entries(data);
        for (const [mimeType, data2] of entries) {
          e5.dataTransfer.setData(mimeType, data2);
        }
      }
    };
    const onDragEnd = (e5) => {
      e5.preventDefault();
      setDragging(false);
      if (e5.dataTransfer) {
        if (e5.dataTransfer.dropEffect != "none") {
          setLastDropEffect(e5.dataTransfer.dropEffect);
        } else {
          setLastDropEffect(null);
        }
      }
    };
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
  }

  // ../dist/dom-helpers/use-droppable.js
  var DroppableFileError = class extends Error {
    fileName;
    errorType;
    constructor(fileName, base) {
      super(base?.message ?? "An unspecified error occurred reading the file.");
      this.fileName = fileName;
      this.errorType = base?.name;
    }
  };
  function useDroppable({ effect }) {
    monitorCallCount(useDroppable);
    const [filesForConsideration, setFilesForConsideration] = useState(null);
    const [stringsForConsideration, setStringsForConsideration] = useState(null);
    const [droppedFiles, setDroppedFiles] = useState(null);
    const [droppedStrings, setDroppedStrings] = useState(null);
    const [dropError, setDropError] = useState(void 0);
    const dropPromisesRef = _4([]);
    const [currentPromiseIndex, setCurrentPromiseIndex, getCurrentPromiseIndex] = useState(-1);
    const [promiseCount, setPromiseCount, getPromiseCount] = useState(0);
    p4(() => {
      const currentPromiseIndex2 = getCurrentPromiseIndex();
      const promiseCount2 = getPromiseCount();
      if (promiseCount2 > 0) {
        if (currentPromiseIndex2 + 1 < promiseCount2) {
          setCurrentPromiseIndex((i5) => ++i5);
        }
      }
    }, [promiseCount]);
    p4(() => {
      if (currentPromiseIndex >= 0) {
        const currentPromise = dropPromisesRef.current[currentPromiseIndex];
        currentPromise.then((info) => {
          if (info !== null) {
            const { files, strings } = info;
            setDroppedFiles(files);
            setDroppedStrings(strings);
          }
          const currentPromiseIndex2 = getCurrentPromiseIndex();
          const promiseCount2 = getPromiseCount();
          if (currentPromiseIndex2 + 1 < promiseCount2) {
            setCurrentPromiseIndex((i5) => ++i5);
          }
        });
      }
    }, [currentPromiseIndex]);
    const onDragEnter = useStableCallback((e5) => {
      e5.preventDefault();
      if (e5.dataTransfer) {
        e5.dataTransfer.dropEffect = effect ?? "move";
        const newMimeTypes = /* @__PURE__ */ new Set();
        const newFiles = new Array();
        for (const item of e5.dataTransfer?.items ?? []) {
          const { kind, type } = item;
          if (kind === "string") {
            newMimeTypes.add(type);
          } else if (kind === "file") {
            newFiles.push({ type: item.type });
          }
        }
        setFilesForConsideration(newFiles);
        setStringsForConsideration(newMimeTypes);
      }
    });
    const onDragLeave = useStableCallback((e5) => {
      e5.preventDefault();
      setFilesForConsideration(null);
      setStringsForConsideration(null);
    });
    const onDragOver = useStableCallback((e5) => {
      e5.preventDefault();
    });
    const onDrop = useStableCallback((e5) => {
      e5.preventDefault();
      setFilesForConsideration(null);
      setStringsForConsideration(null);
      const allPromises = new Array();
      const dropData = {};
      const dropFile = [];
      for (const item of e5.dataTransfer?.items ?? []) {
        const { kind, type } = item;
        if (kind === "string") {
          allPromises.push(new Promise((resolve, _reject) => item.getAsString(resolve)).then((str) => dropData[type] = str));
        } else if (kind === "file") {
          const file = item.getAsFile();
          if (file) {
            allPromises.push(new Promise((resolve, reject) => {
              const reader = new FileReader();
              reader.onload = (_6) => {
                resolve();
                const data = reader.result;
                dropFile.push({ data, name: file.name, type: file.type, size: data.byteLength, lastModified: file.lastModified });
              };
              reader.onerror = (_6) => {
                reject(new DroppableFileError(file.name, reader.error));
              };
              reader.onabort = (_6) => {
                reject(new DroppableFileError(file.name, reader.error));
              };
              reader.readAsArrayBuffer(file);
            }));
            dropFile.push();
          }
        }
      }
      dropPromisesRef.current.push(Promise.all(allPromises).then(() => {
        setPromiseCount((i5) => ++i5);
        setDropError(null);
        return {
          strings: dropData,
          files: dropFile
        };
      }).catch((ex) => {
        debugger;
        setPromiseCount((i5) => ++i5);
        setDropError(ex);
        return null;
      }));
    });
    const propsStable = _4({ onDragEnter, onDragLeave, onDragOver, onDrop });
    return {
      propsStable: propsStable.current,
      filesForConsideration,
      stringsForConsideration,
      droppedFiles,
      droppedStrings,
      dropError
    };
  }

  // ../dist/dom-helpers/use-imperative-props.js
  var templateElement = null;
  function htmlToElement(parent, html) {
    const document2 = parent.ownerDocument;
    templateElement ??= document2.createElement("template");
    templateElement.innerHTML = html.trim();
    return templateElement.content.firstChild;
  }
  var ImperativeElement = x6(k5(ImperativeElementU));
  function useImperativeProps({ refElementReturn: { getElement } }) {
    monitorCallCount(useImperativeProps);
    const currentImperativeProps = _4({ className: /* @__PURE__ */ new Set(), style: {}, children: null, html: null, others: {} });
    const hasClass = T5((cls) => {
      return currentImperativeProps.current.className.has(cls);
    }, []);
    const setClass = T5((cls, enabled) => {
      if (hasClass(cls) == !enabled) {
        getElement()?.classList[enabled ? "add" : "remove"](cls);
        currentImperativeProps.current.className[enabled ? "add" : "delete"](cls);
      }
    }, []);
    const setStyle = T5((prop, value) => {
      const element = getElement();
      if (element) {
        if (currentImperativeProps.current.style[prop] != value) {
          currentImperativeProps.current.style[prop] = value;
          if (prop.startsWith("--")) {
            if (value != null)
              element.style.setProperty(prop, `${value}`);
            else
              element.style.removeProperty(prop);
          } else {
            element.style[prop] = value ?? "";
          }
        }
      }
    }, []);
    const setChildren = T5((children) => {
      let e5 = getElement();
      if (e5 && currentImperativeProps.current.children != children) {
        currentImperativeProps.current.children = children;
        currentImperativeProps.current.html = null;
        e5.textContent = children;
      }
    }, []);
    const dangerouslySetInnerHTML = T5((children) => {
      let e5 = getElement();
      if (e5 && currentImperativeProps.current.html != children) {
        currentImperativeProps.current.children = null;
        currentImperativeProps.current.html = children;
        e5.innerHTML = children;
      }
    }, []);
    const dangerouslyAppendHTML = T5((children) => {
      let e5 = getElement();
      if (e5 && children) {
        const newChild = htmlToElement(e5, children);
        console.assert(newChild && newChild instanceof Node);
        if (newChild && newChild instanceof Node) {
          currentImperativeProps.current.children = null;
          currentImperativeProps.current.html ||= "";
          currentImperativeProps.current.html += children;
          e5.appendChild(newChild);
          return newChild;
        }
      }
      return null;
    }, []);
    const getAttribute = T5((prop) => {
      return currentImperativeProps.current.others[prop];
    }, []);
    const setAttribute = T5((prop, value) => {
      if (value != null) {
        if (getAttribute(prop) != value) {
          currentImperativeProps.current.others[prop] = value;
          getElement()?.setAttribute(prop, value);
        }
      } else {
        if (getAttribute(prop) != void 0) {
          delete currentImperativeProps.current.others[prop];
          getElement()?.removeAttribute(prop);
        }
      }
    }, []);
    const setEventHandler = T5((type, handler, options) => {
      const element = getElement();
      const mappedKey = EventMapping2[type];
      if (element) {
        if (handler) {
          element.addEventListener(type, handler, options);
          currentImperativeProps.current.others[mappedKey] = handler;
        } else if (currentImperativeProps.current.others[mappedKey]) {
          element.removeEventListener(type, currentImperativeProps.current.others[mappedKey], options);
          currentImperativeProps.current.others[mappedKey] = void 0;
        }
      }
    }, []);
    return {
      imperativePropsReturn: _4({
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
      props: useMergedProps({ className: [...currentImperativeProps.current.className].join(" "), style: currentImperativeProps.current.style }, currentImperativeProps.current.html ? { dangerouslySetInnerHTML: { __html: currentImperativeProps.current.html } } : {}, { children: currentImperativeProps.current.children }, currentImperativeProps.current.others)
    };
  }
  function ImperativeElementU({ tag: Tag, handle, ...props }, ref) {
    const { propsStable, refElementReturn } = useRefElement({ refElementParameters: {} });
    const { props: imperativeProps, imperativePropsReturn: imperativeHandle } = useImperativeProps({ refElementReturn });
    A4(handle, () => imperativeHandle);
    return y3(Tag, useMergedProps(propsStable, imperativeProps, props, { ref }));
  }

  // ../dist/util/random-id.js
  var Table = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_-";
  function base64(value) {
    return Table[value];
  }
  function random6Bits() {
    return Math.floor(Math.random() * 64);
  }
  function random64Bits() {
    return [random6Bits(), random6Bits(), random6Bits(), random6Bits(), random6Bits(), random6Bits(), random6Bits(), random6Bits(), random6Bits(), random6Bits(), random6Bits()];
  }
  function generateRandomId(prefix) {
    return `${prefix ?? "id-"}${random64Bits().map((n3) => base64(n3)).join("")}`;
  }

  // ../dist/dom-helpers/use-portal-children.js
  function usePortalChildren({ target }) {
    monitorCallCount(usePortalChildren);
    const [pushChild, setPushChild] = useState(null);
    const [updateChild, setUpdateChild] = useState(null);
    const [removeChild, setRemoveChild] = useState(null);
    const pushChildStable = useStableCallback((child) => {
      return pushChild?.(child) ?? -1;
    });
    const updateChildStable = useStableCallback((index, child) => {
      return updateChild?.(index, child);
    });
    const removeChildStable = useStableCallback((index) => {
      return removeChild?.(index);
    });
    const element = F5(() => {
      return target == null ? null : typeof target == "string" ? document.getElementById(target) : target;
    }, [target]);
    const children = !element ? null : z5(y3(PortalChildren, { setPushChild, setUpdateChild, setRemoveChild }), element);
    return {
      children,
      pushChild: pushChildStable,
      updateChild: updateChildStable,
      removeChild: removeChildStable,
      portalElement: element
    };
  }
  function PortalChildren({ setPushChild, setUpdateChild, setRemoveChild }) {
    const [children, setChildren, getChildren] = useState([]);
    const pushChild = T5((child) => {
      const randomKey = generateRandomId();
      let index = getChildren().length;
      setChildren((prev) => [...prev, E2(child, { key: randomKey, index })]);
      return index;
    }, []);
    const updateChild = T5((index, child) => {
      const key = getChildren()[index]?.key;
      console.assert(!!key);
      if (key) {
        setChildren((prev) => {
          let newChildren = prev.slice();
          newChildren.splice(index, 1, E2(child, { key, index }));
          return newChildren;
        });
        return index;
      }
    }, []);
    const removeChild = T5((index) => {
      const key = getChildren()[index]?.key;
      console.assert(!!key);
      if (key) {
        setChildren((prev) => {
          let newChildren = prev.slice();
          newChildren.splice(index, 1);
          return newChildren;
        });
        return index;
      }
    }, []);
    y4(() => {
      setPushChild((_6) => pushChild);
    }, [pushChild]);
    y4(() => {
      setUpdateChild((_6) => updateChild);
    }, [updateChild]);
    y4(() => {
      setRemoveChild((_6) => removeChild);
    }, [removeChild]);
    return y3(_3, {}, children);
  }

  // ../dist/observers/use-has-last-focus.js
  function useHasLastFocus(args) {
    monitorCallCount(useHasLastFocus);
    const { refElementReturn: { getElement }, activeElementParameters: { onLastActiveElementChange, ...activeElementParameters }, hasLastFocusParameters: { onLastFocusedChanged, onLastFocusedInnerChanged, ...void1 } } = args;
    assertEmptyObject(void1);
    useEnsureStability("useHasFocus", onLastFocusedChanged, onLastFocusedInnerChanged);
    const [getLastFocused, setLastFocused] = usePassiveState(onLastFocusedChanged, returnFalse, runImmediately);
    const [getLastFocusedInner, setLastFocusedInner] = usePassiveState(onLastFocusedInnerChanged, returnFalse, runImmediately);
    const { activeElementReturn } = useActiveElement({
      activeElementParameters: {
        onLastActiveElementChange: T5((lastActiveElement, prevLastActiveElement, e5) => {
          const selfElement = getElement();
          const focused = selfElement != null && selfElement == lastActiveElement;
          const focusedInner = !!selfElement?.contains(lastActiveElement);
          setLastFocused(focused, e5);
          setLastFocusedInner(focusedInner, e5);
          onLastActiveElementChange?.(lastActiveElement, prevLastActiveElement, e5);
        }, []),
        ...activeElementParameters
      }
    });
    p4(() => {
      return () => {
        setLastFocused(false, void 0);
        setLastFocusedInner(false, void 0);
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

  // ../dist/observers/use-logical-direction.js
  var HorizontalTbLtr = {
    inlineDirection: "ltr",
    blockDirection: "ttb",
    inlineOrientation: "horizontal",
    blockOrientation: "vertical",
    inlineSize: "width",
    blockSize: "height",
    leftRightDirection: "ltr",
    overUnderDirection: "ttb"
  };
  var HorizontalTbRtl = {
    ...HorizontalTbLtr,
    inlineDirection: "rtl"
  };
  var VerticalRlLtr = {
    inlineDirection: "ttb",
    blockDirection: "rtl",
    inlineOrientation: "vertical",
    blockOrientation: "horizontal",
    inlineSize: "height",
    blockSize: "width",
    leftRightDirection: "ttb",
    overUnderDirection: "rtl"
  };
  var VerticalRlRtl = {
    ...VerticalRlLtr,
    inlineDirection: "btt"
  };
  var SidewaysRlLtr = { ...VerticalRlLtr };
  var SidewaysRlRtl = { ...VerticalRlRtl };
  var VerticalLrLtr = {
    ...VerticalRlLtr,
    blockDirection: "ltr"
  };
  var VerticalLrRtl = {
    ...VerticalRlRtl,
    blockDirection: "ltr"
  };
  var SidewaysLtLtr = {
    ...VerticalLrLtr,
    inlineDirection: "btt",
    leftRightDirection: "btt",
    overUnderDirection: "ltr"
  };
  var SidewaysLtRtl = {
    ...SidewaysLtLtr,
    inlineDirection: "ttb"
  };

  // ../dist/timing/use-animation-frame.js
  var SharedAnimationFrameContext = F4(null);

  // ../dist/timing/use-interval.js
  function useInterval({ interval, callback }) {
    monitorCallCount(useInterval);
    const stableCallback = useStableCallback(callback);
    const getInterval = useStableGetter(interval);
    p4(() => {
      const interval2 = getInterval();
      let lastDelayUsed = interval2;
      if (interval2 == null)
        return;
      const adjustableCallback = () => {
        stableCallback();
        const currentInterval = getInterval();
        if (currentInterval != lastDelayUsed) {
          clearInterval(handle);
          if (currentInterval != null)
            handle = setInterval(adjustableCallback, lastDelayUsed = currentInterval);
        }
      };
      let handle = setInterval(adjustableCallback, interval2);
      return () => clearInterval(handle);
    }, []);
  }

  // node_modules/.pnpm/preact@10.16.0/node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js
  var _5 = 0;
  function o5(o6, e5, n3, t5, f5, l5) {
    var s5, u5, a5 = {};
    for (u5 in e5)
      "ref" == u5 ? s5 = e5[u5] : a5[u5] = e5[u5];
    var i5 = { type: o6, props: a5, key: n3, ref: s5, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --_5, __source: f5, __self: l5 };
    if ("function" == typeof o6 && (s5 = o6.defaultProps))
      for (u5 in s5)
        void 0 === a5[u5] && (a5[u5] = s5[u5]);
    return l.vnode && l.vnode(i5), i5;
  }

  // demos/use-grid.tsx
  var RandomWords = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.".split(" ");
  var SortableColumnContext = G(null);
  var SetSortableColumnContext = G(null);
  var GetSortableColumnContext = G(null);
  var DemoUseGrid = x3(() => {
    const [tabbableColumn, setTabbableColumn, _getTabbableColumn] = useState(null);
    const [selectedRow, setSelectedRow, _getSelectedRow] = useState(null);
    const [tabbableRow, setTabbableRow] = useState(null);
    const [sortableColumn, setSortableColumn, getSortableColumn] = useState(null);
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
        typeaheadTimeout: 1e3,
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
        onSingleSelectedIndexChange: (e5) => setSelectedRow(e5[EventDetail].selectedIndex)
      },
      gridNavigationParameters: {
        // This can be used by you to track which 0-indexed column is currently the one with focus.
        onTabbableColumnChange: setTabbableColumn
      },
      rearrangeableChildrenParameters: {
        // This must return a VNode's 0-based index from its props
        getIndex: T2((a5) => a5.props.index, [])
      },
      sortableChildrenParameters: {
        // Controls how rows compare against each other
        compare: T2((rhs, lhs) => {
          return lhs.index - rhs.index;
        }, [])
      },
      paginatedChildrenParameters: {
        // Controls the current pagination range
        paginationMin: null,
        paginationMax: null
      },
      staggeredChildrenParameters: {
        // Controls whether children appear staggered as CPU time permits
        staggered: false
      },
      refElementParameters: {}
    });
    const {
      // Spread these props to the HTMLElement that will implement this grid behavior
      props,
      // The child row will useContext this, so provide it to them.
      context,
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
      multiSelectionReturn: {
        // Nothing, actually
      },
      rearrangeableChildrenReturn: {
        // You must call this hook on your array of children to implement the sorting behavior
        useRearrangedChildren,
        // Largely internal use only
        indexDemangler,
        // Largely internal use only
        indexMangler,
        // Largely internal use only, but if you implement a custom sorting algorithm, call this to finalize the rearrangement. 
        rearrange,
        // Reverses all children 
        reverse,
        // Shuffles all children
        shuffle: shuffle2
      },
      sortableChildrenReturn: {
        // A table header button would probably call this function to sort all the table rows.
        sort
      },
      linearNavigationReturn: {},
      managedChildrenReturn: {
        // Returns metadata about each row
        getChildren
      },
      paginatedChildrenReturn: {
        // Largely internal use only
        refreshPagination
      },
      staggeredChildrenReturn: {
        // When the staggering behavior is currently hiding one or more children, this is true.
        stillStaggering
      },
      childrenHaveFocusReturn: {
        // Returns true if any row in this grid is focused
        getAnyFocused
      }
    } = allReturnInfo;
    return /* @__PURE__ */ o5("div", { class: "demo", children: [
      /* @__PURE__ */ o5("h2", { children: "useGridNavigationComplete" }),
      /* @__PURE__ */ o5("p", { children: [
        "Like ",
        /* @__PURE__ */ o5("code", { children: "useCompleteListNavigation" }),
        " but for 2D navigation. Cells can span multiple columns. Rows can be filtered, sorted, and arbitrarily re-arranged."
      ] }),
      /* @__PURE__ */ o5("div", { children: [
        "Current row: ",
        tabbableRow
      ] }),
      /* @__PURE__ */ o5("div", { children: [
        "Current column: ",
        tabbableColumn?.actual,
        tabbableColumn?.ideal != tabbableColumn?.actual ? ` (wanted: ${tabbableColumn?.ideal})` : ""
      ] }),
      /* @__PURE__ */ o5("table", { ...{ border: "2" }, style: { whiteSpace: "nowrap" }, children: [
        /* @__PURE__ */ o5("thead", { children: /* @__PURE__ */ o5("tr", { children: [
          /* @__PURE__ */ o5("th", { children: "Row is tabbable?" }),
          /* @__PURE__ */ o5("th", { children: "Column 1" }),
          /* @__PURE__ */ o5("th", { children: "Column 2" }),
          /* @__PURE__ */ o5("th", { children: "Column 3" })
        ] }) }),
        /* @__PURE__ */ o5(SortableColumnContext.Provider, { value: sortableColumn, children: /* @__PURE__ */ o5(GetSortableColumnContext.Provider, { value: getSortableColumn, children: /* @__PURE__ */ o5(SetSortableColumnContext.Provider, { value: setSortableColumn, children: /* @__PURE__ */ o5(GridRowContext.Provider, { value: context, children: /* @__PURE__ */ o5("tbody", { ...props, children: useRearrangedChildren(
          Array.from(function* () {
            for (let i5 = 0; i5 < 10; ++i5) {
              yield /* @__PURE__ */ o5(DemoUseGridRow, { index: i5 }, i5);
            }
          }())
        ) }) }) }) }) })
      ] })
    ] });
  });
  var GridRowContext = G(null);
  var GridCellContext = G(null);
  var DemoUseGridRow = x3(({ index }) => {
    const [_randomWord] = useState(() => RandomWords[
      index
      /*Math.floor(Math.random() * (RandomWords.length - 1))*/
    ]);
    const [_tabbableColumn, setTabbableColumn, _getTabbableColumn] = useState(null);
    const hidden = index === 3;
    const disabled = hidden;
    const getSortableColumnIndex = q2(GetSortableColumnContext);
    const contextFromParent = q2(GridRowContext);
    const ret = useCompleteGridNavigationRow({
      context: contextFromParent,
      info: { index, foo: "bar", untabbable: hidden },
      textContentParameters: { getText: T2((e5) => {
        return e5?.textContent ?? "";
      }, []) },
      linearNavigationParameters: { navigatePastEnd: "wrap", navigatePastStart: "wrap" },
      rovingTabIndexParameters: { onTabbableIndexChange: useStableCallback((i5) => {
        setTabbableColumn(i5);
      }), untabbable: false, initiallyTabbedIndex: 0 },
      typeaheadNavigationParameters: { collator: null, noTypeahead: false, typeaheadTimeout: 1e3, onNavigateTypeahead: null },
      hasCurrentFocusParameters: { onCurrentFocusedChanged: null, onCurrentFocusedInnerChanged: null },
      gridNavigationSelectionSortableRowParameters: { getSortableColumnIndex },
      singleSelectionChildParameters: { singleSelectionDisabled: false },
      multiSelectionChildParameters: { initiallyMultiSelected: false, onMultiSelectChange: null, multiSelectionDisabled: false }
    });
    const {
      props,
      context: contextToChild,
      rovingTabIndexChildReturn: { tabbable }
    } = ret;
    return /* @__PURE__ */ o5("tr", { ...props, "data-tabbable": ret.rovingTabIndexChildReturn.tabbable, children: /* @__PURE__ */ o5(GridCellContext.Provider, { value: contextToChild, children: [
      /* @__PURE__ */ o5("td", { children: [
        _tabbableColumn,
        ", ",
        tabbable.toString()
      ] }),
      Array.from(function* () {
        for (let i5 = 0; i5 < 3; ++i5) {
          yield /* @__PURE__ */ o5(DemoUseGridCell, { index: i5, row: index, rowIsTabbable: tabbable }, i5);
        }
      }())
    ] }) });
  });
  var DemoUseGridCell = ({ index, row, rowIsTabbable }) => {
    if (row >= 6 && row % 2 == 0 && index > 1)
      return null;
    let hiddenText = row === 3 ? " (row hidden)" : "";
    const context = q2(GridCellContext);
    const {
      props,
      rovingTabIndexChildReturn: { tabbable }
    } = useCompleteGridNavigationCell({
      gridNavigationCellParameters: { colSpan: 1 },
      info: { index, bar: "baz", focusSelf: useStableCallback((e5) => e5.focus()), untabbable: false, getSortValue: useStableGetter(index) },
      context,
      textContentParameters: { getText: T2((e5) => {
        return e5?.textContent ?? "";
      }, []) }
    });
    const t5 = tabbable ? "(Tabbable)" : "(Not tabbable)";
    if (index === 0)
      return /* @__PURE__ */ o5("td", { ...props, children: rowIsTabbable.toString() });
    else {
      if (row < 6 || row % 2 != 0) {
        if (index === 1)
          return /* @__PURE__ */ o5("td", { ...props, children: [
            "Grid cell #",
            index + 1,
            " ",
            t5,
            hiddenText
          ] });
        else
          return /* @__PURE__ */ o5("td", { children: /* @__PURE__ */ o5("label", { children: [
            /* @__PURE__ */ o5("button", { ...props, type: "button", children: "Select row" }),
            " ",
            t5,
            hiddenText
          ] }) });
      } else {
        if (index === 1)
          return /* @__PURE__ */ o5("td", { ...props, colSpan: 2, children: [
            "Grid cell #",
            index + 1,
            ", span 2 ",
            t5,
            hiddenText
          ] });
        else
          return null;
      }
    }
  };

  // demos/use-modal.tsx
  function getDocument2() {
    return globalThis.document;
  }
  function DemoUseModal(props) {
    const parentDepth = props.parentDepth ?? 0;
    const depth = parentDepth + 1;
    const buttonRef = _(null);
    const [closeOnBackdrop, setCloseOnBackdrop] = h2(true);
    const [closeOnEscape, setCloseOnEscape] = h2(true);
    const [closeOnLostFocus, setCloseOnLostFocus] = h2(true);
    const [focusTrapActive, setFocusTrapActive] = h2(true);
    const [hasChild, setHasChild] = h2(false);
    const [closeReason, setCloseReason] = h2(null);
    const [open, setOpen] = h2(false);
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
        focusPopup: useStableCallback((e5, f5) => f5()?.focus())
      },
      dismissParameters: {
        onDismiss: useStableCallback((event, reason) => {
          setCloseReason(reason);
          setOpen(false);
        }),
        dismissActive: true
      },
      escapeDismissParameters: { parentDepth, dismissEscapeActive: true, onDismissEscape: null },
      backdropDismissParameters: { dismissBackdropActive: true, onDismissBackdrop: null },
      lostFocusDismissParameters: { dismissLostFocusActive: true, onDismissLostFocus: null },
      modalParameters: { active: open },
      refElementParameters: {},
      activeElementParameters: { getDocument: getDocument2, onActiveElementChange: null, onLastActiveElementChange: null, onWindowFocusedChange: null }
    });
    return /* @__PURE__ */ o5("div", { style: { border: `${depth}px solid black` }, children: [
      /* @__PURE__ */ o5("div", { children: "useModal demo:" }),
      /* @__PURE__ */ o5("div", { style: "display: flex; flex-direction: column", children: [
        /* @__PURE__ */ o5("label", { children: [
          /* @__PURE__ */ o5("input", { type: "checkbox", disabled: true, checked: true }),
          " Close by setting open to false"
        ] }),
        /* @__PURE__ */ o5("label", { children: [
          /* @__PURE__ */ o5("input", { type: "checkbox", checked: closeOnBackdrop, onInput: (e5) => setCloseOnBackdrop(e5.currentTarget.checked) }),
          " Close on backdrop click"
        ] }),
        /* @__PURE__ */ o5("label", { children: [
          /* @__PURE__ */ o5("input", { type: "checkbox", checked: closeOnEscape, onInput: (e5) => setCloseOnEscape(e5.currentTarget.checked) }),
          " Close on Escape key press"
        ] }),
        /* @__PURE__ */ o5("label", { children: [
          /* @__PURE__ */ o5("input", { type: "checkbox", checked: closeOnLostFocus, onInput: (e5) => setCloseOnLostFocus(e5.currentTarget.checked) }),
          " Close on focus lost"
        ] }),
        /* @__PURE__ */ o5("label", { children: [
          /* @__PURE__ */ o5("input", { type: "checkbox", checked: focusTrapActive, onInput: (e5) => setFocusTrapActive(e5.currentTarget.checked) }),
          " Trap focus"
        ] }),
        /* @__PURE__ */ o5("br", {})
      ] }),
      /* @__PURE__ */ o5("div", { children: [
        "Last reason for closing: ",
        closeReason ?? "(hasn't been closed yet)"
      ] }),
      /* @__PURE__ */ o5("button", { ...propsStableSource, onClick: () => setOpen(true), children: "Open Modal" }),
      /* @__PURE__ */ o5("div", { ...useMergedProps(propsFocusContainer, propsStablePopup), style: `border: ${depth}px dotted red; background: #ccc`, children: /* @__PURE__ */ o5("div", { style: { display: open ? "flex" : "none", flexDirection: "column" }, children: [
        /* @__PURE__ */ o5("div", { children: [
          "Modal element at depth ",
          depth,
          " with ",
          hasChild ? "a" : "no",
          " child"
        ] }),
        /* @__PURE__ */ o5("label", { children: [
          /* @__PURE__ */ o5("input", { type: "checkbox", checked: hasChild, onInput: (e5) => setHasChild(e5.currentTarget.checked), ref: buttonRef }),
          " Add a child modal"
        ] }),
        hasChild && /* @__PURE__ */ o5(DemoUseModal, { parentDepth: depth }),
        /* @__PURE__ */ o5("button", { ...propsStableSource, onClick: () => setOpen(false), children: "Close modal programmatically" })
      ] }) })
    ] });
  }

  // demos/use-roving-tab-index.tsx
  var RandomWords2 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.".split(" ");
  var SingleSelectionModeContext = G("focus");
  var MultiSelectionModeContext = G("activation");
  var UntabbableContext = G(false);
  var ListNavigationSingleSelectionChildContext = G(null);
  var DemoUseRovingTabIndex = x3(() => {
    const [multiSelectPercent, setMultiSelectPercent] = useState(0);
    const [singleSelectedIndex, setSingleSelectedIndex] = useState(null);
    const [singleSelectionMode, setSingleSelectionMode] = useState("focus");
    const [multiSelectionMode, setMultiSelectionMode] = useState("activation");
    const [count, setCount] = useState(10);
    let [min, setMin] = useState(null);
    let [max, setMax] = useState(null);
    const [staggered, setStaggered] = useState(false);
    if (!isFinite(min ?? NaN))
      min = null;
    if (!isFinite(max ?? NaN))
      max = null;
    const untabbable = false;
    const onSelectionChange = (e5) => {
      setMultiSelectPercent(e5[EventDetail].selectedPercent);
    };
    const r5 = useCompleteListNavigationDeclarative({
      rovingTabIndexParameters: { onTabbableIndexChange: null, untabbable, focusSelfParent: focus },
      singleSelectionDeclarativeParameters: { singleSelectedIndex, onSingleSelectedIndexChange: useStableCallback((e5) => {
        setSingleSelectedIndex(e5[EventDetail].selectedIndex);
      }, []) },
      typeaheadNavigationParameters: { collator: null, noTypeahead: false, typeaheadTimeout: 1e3, onNavigateTypeahead: null },
      linearNavigationParameters: { disableHomeEndKeys: false, arrowKeyDirection: "vertical", navigatePastEnd: "wrap", navigatePastStart: "wrap", pageNavigationSize: 0.1, onNavigateLinear: null },
      rearrangeableChildrenParameters: {
        getIndex: T2((a5) => a5.props.index, [])
      },
      refElementParameters: {},
      paginatedChildrenParameters: { paginationMin: min, paginationMax: max },
      sortableChildrenParameters: { compare: T2((rhs, lhs) => {
        return lhs.index - rhs.index;
      }, []) },
      staggeredChildrenParameters: { staggered },
      singleSelectionParameters: { singleSelectionAriaPropName: "aria-selected", singleSelectionMode },
      multiSelectionParameters: { multiSelectionAriaPropName: "aria-checked", onSelectionChange, multiSelectionMode }
    });
    const {
      props,
      context,
      rovingTabIndexReturn: { setTabbableIndex },
      managedChildrenReturn: { getChildren },
      typeaheadNavigationReturn: { typeaheadStatus },
      rearrangeableChildrenReturn: { useRearrangedChildren, shuffle: shuffle2, reverse }
      //        rearrangeableChildrenReturn: { useRearrangedChildren: useSortableProps, shuffle }
    } = r5;
    const jsxChildren = Array.from(function* () {
      for (let i5 = 0; i5 < count; ++i5) {
        yield /* @__PURE__ */ o5(DemoUseRovingTabIndexChild, { index: i5 }, i5);
      }
    }());
    return /* @__PURE__ */ o5("div", { className: "demo", children: [
      /* @__PURE__ */ o5("h2", { children: "Keyboard & List Navigation" }),
      /* @__PURE__ */ o5("h3", { children: /* @__PURE__ */ o5("code", { children: "useCompleteListNavigation" }) }),
      /* @__PURE__ */ o5("p", { children: "This hook accomplishes a few things:" }),
      /* @__PURE__ */ o5("ul", { children: [
        /* @__PURE__ */ o5("li", { children: [
          "Turns a group of widgets into one singular composite widget with only ",
          /* @__PURE__ */ o5("strong", { children: "a single tab stop" }),
          ' shared between them (a "roving" tab stop, because it wanders back and forth).'
        ] }),
        /* @__PURE__ */ o5("li", { children: [
          "Navigation within this composite widget is done via:",
          /* @__PURE__ */ o5("ul", { children: [
            /* @__PURE__ */ o5("li", { children: "Arrow keys (up/down or left/right depending in the orientation you specify)" }),
            /* @__PURE__ */ o5("li", { children: "Page Up/Down to jump by a larger amount (either a fixed number or some percentage of the total number of items, as you specify)" }),
            /* @__PURE__ */ o5("li", { children: "Home/End to jump to the first or last item" })
          ] })
        ] }),
        /* @__PURE__ */ o5("li", { children: 'Items can be marked as "hidden", in which case they are skipped over when navigating, no matter the method. E.G. if Home is pressed but the first item is hidden, the second item is focused instead.' }),
        /* @__PURE__ */ o5("li", { children: 'Items can be marked as "disabled" to prevent selection (with or without also marking them as "hidden", though "hidden" implies "disabled").' }),
        /* @__PURE__ */ o5("li", { children: "Children can be reordered arbitrarily, including sorting, shuffling, etc. while ensuring coherent navigation regardless." }),
        /* @__PURE__ */ o5("li", { children: [
          "The parent's selected index is ",
          /* @__PURE__ */ o5("strong", { children: "uncontrolled" }),
          " and so it does not re-render itself when the selected index changes (you can easily make it controlled, of course, at the cost of 1 additional render. See ",
          /* @__PURE__ */ o5("code", { children: "useSingleSelectionDeclarative" }),
          " for a shortcut to do exactly that)"
        ] }),
        /* @__PURE__ */ o5("li", { children: "Changing which child is focused or selected only re-renders a maximum of 2 children each time." }),
        /* @__PURE__ */ o5("li", { children: [
          "Lists can be nested, and there is no strict requirement on DOM structure (except for sorting/rearranging children, if you use that).",
          /* @__PURE__ */ o5("ul", { children: /* @__PURE__ */ o5("li", { children: [
            "If you don't need sorting/rearranging this DOM requirement is ",
            /* @__PURE__ */ o5("strong", { children: "optional" }),
            "; rearranging requires all children be in one contiguous array of VNodes so that their ",
            /* @__PURE__ */ o5("code", { children: "key" }),
            " props can be manipulated."
          ] }) })
        ] })
      ] }),
      /* @__PURE__ */ o5("p", { children: "The biggest restriction of this method is that every child needs a 0-based numeric index." }),
      /* @__PURE__ */ o5("label", { children: [
        "# of items",
        /* @__PURE__ */ o5("input", { type: "number", value: count, min: 0, onInput: (e5) => {
          e5.preventDefault();
          setCount(e5.currentTarget.valueAsNumber);
        } })
      ] }),
      /* @__PURE__ */ o5("button", { onClick: () => shuffle2(), children: "Shuffle" }),
      /* @__PURE__ */ o5("button", { onClick: () => {
        debugger;
        reverse();
      }, children: "Reverse" }),
      /* @__PURE__ */ o5("label", { children: [
        "Imperatively set the tabbable index to: ",
        /* @__PURE__ */ o5("input", { type: "number", onInput: (e5) => {
          e5.preventDefault();
          setTabbableIndex(e5.currentTarget.valueAsNumber, e5, false);
        } })
      ] }),
      /* @__PURE__ */ o5("label", { children: [
        "Imperatively set the selected index to: ",
        /* @__PURE__ */ o5("input", { type: "number", onInput: (e5) => {
          e5.preventDefault();
          setSingleSelectedIndex(e5.currentTarget.valueAsNumber);
        } }),
        " (currently ",
        singleSelectedIndex,
        ")"
      ] }),
      /* @__PURE__ */ o5("label", { children: [
        "Pagination window starts at: ",
        /* @__PURE__ */ o5("input", { type: "number", value: min ?? void 0, min: 0, max: max ?? void 0, onInput: (e5) => {
          e5.preventDefault();
          setMin(e5.currentTarget.valueAsNumber);
        } })
      ] }),
      /* @__PURE__ */ o5("label", { children: [
        "Pagination window ends at: ",
        /* @__PURE__ */ o5("input", { type: "number", value: max ?? void 0, min: min ?? void 0, max: count, onInput: (e5) => {
          e5.preventDefault();
          setMax(e5.currentTarget.valueAsNumber);
        } })
      ] }),
      /* @__PURE__ */ o5("label", { children: [
        "Stagger delay: ",
        /* @__PURE__ */ o5("input", { type: "checkbox", checked: staggered, onInput: (e5) => {
          e5.preventDefault();
          setStaggered(e5.currentTarget.checked);
        } })
      ] }),
      /* @__PURE__ */ o5("label", { children: [
        "Single-Selection mode:",
        /* @__PURE__ */ o5("label", { children: [
          /* @__PURE__ */ o5("input", { name: "rti-demo-single-selection-mode", type: "radio", checked: singleSelectionMode == "disabled", onInput: (e5) => {
            e5.preventDefault();
            setSingleSelectionMode("disabled");
          } }),
          " Off"
        ] }),
        /* @__PURE__ */ o5("label", { children: [
          /* @__PURE__ */ o5("input", { name: "rti-demo-single-selection-mode", type: "radio", checked: singleSelectionMode == "focus", onInput: (e5) => {
            e5.preventDefault();
            setSingleSelectionMode("focus");
          } }),
          " On focus"
        ] }),
        /* @__PURE__ */ o5("label", { children: [
          /* @__PURE__ */ o5("input", { name: "rti-demo-single-selection-mode", type: "radio", checked: singleSelectionMode == "activation", onInput: (e5) => {
            e5.preventDefault();
            setSingleSelectionMode("activation");
          } }),
          " On activation (click, tap, Enter, Space, etc.)"
        ] })
      ] }),
      /* @__PURE__ */ o5("label", { children: [
        "Multi-Selection mode:",
        /* @__PURE__ */ o5("label", { children: [
          /* @__PURE__ */ o5("input", { name: "rti-demo-multi-selection-mode", type: "radio", checked: multiSelectionMode == "disabled", onInput: (e5) => {
            e5.preventDefault();
            setMultiSelectionMode("disabled");
          } }),
          " Off"
        ] }),
        /* @__PURE__ */ o5("label", { children: [
          /* @__PURE__ */ o5("input", { name: "rti-demo-multi-selection-mode", type: "radio", checked: multiSelectionMode == "focus", onInput: (e5) => {
            e5.preventDefault();
            setMultiSelectionMode("focus");
          } }),
          " On focus"
        ] }),
        /* @__PURE__ */ o5("label", { children: [
          /* @__PURE__ */ o5("input", { name: "rti-demo-multi-selection-mode", type: "radio", checked: multiSelectionMode == "activation", onInput: (e5) => {
            e5.preventDefault();
            setMultiSelectionMode("activation");
          } }),
          " On activation (click, tap, Enter, Space, etc.)"
        ] })
      ] }),
      /* @__PURE__ */ o5("div", { children: [
        "Typeahead status: ",
        typeaheadStatus
      ] }),
      /* @__PURE__ */ o5("div", { children: [
        "Multi-select: ",
        Math.round(multiSelectPercent * 100 * 10) / 10,
        "%"
      ] }),
      /* @__PURE__ */ o5(UntabbableContext.Provider, { value: untabbable, children: /* @__PURE__ */ o5(SingleSelectionModeContext.Provider, { value: singleSelectionMode, children: /* @__PURE__ */ o5(MultiSelectionModeContext.Provider, { value: multiSelectionMode, children: /* @__PURE__ */ o5(ListNavigationSingleSelectionChildContext.Provider, { value: context, children: /* @__PURE__ */ o5("ol", { start: 0, ...props, children: useRearrangedChildren(jsxChildren) }) }) }) }) })
    ] });
  });
  var DemoUseRovingTabIndexChild = x3(({ index }) => {
    if (index == 1)
      return /* @__PURE__ */ o5("li", { children: [
        "(Item ",
        index,
        " is a ",
        /* @__PURE__ */ o5("strong", { children: "hole in the array" }),
        " and does not exist)"
      ] });
    let disabled = index == 6;
    let hidden = index == 7;
    if (index == 8) {
      disabled = hidden = true;
    }
    const [multiSelected, setMultiSelected] = useState(false);
    const [randomWord] = useState(() => RandomWords2[index]);
    const context = q2(ListNavigationSingleSelectionChildContext);
    const focusSelf = T2((e5) => {
      e5.focus();
    }, []);
    const getSortValue = useStableCallback(() => index);
    const {
      hasCurrentFocusReturn,
      managedChildReturn,
      propsChild,
      propsTabbable,
      textContentReturn,
      rovingTabIndexChildReturn: { tabbable },
      singleSelectionChildReturn: { singleSelected, getSingleSelected, singleSelectedOffset, getSingleSelectedOffset },
      multiSelectionChildReturn: { getMultiSelected },
      paginatedChildReturn: { hideBecausePaginated },
      staggeredChildReturn: { hideBecauseStaggered },
      pressParameters: { onPressSync, excludeSpace },
      refElementReturn
    } = useCompleteListNavigationChildDeclarative({
      info: { index, focusSelf, foo: "bar", untabbable: hidden, getSortValue },
      context,
      textContentParameters: { getText: T2((e5) => {
        return e5?.textContent ?? "";
      }, []) },
      hasCurrentFocusParameters: { onCurrentFocusedChanged: null, onCurrentFocusedInnerChanged: null },
      refElementParameters: { onElementChange: null, onMount: null, onUnmount: null },
      multiSelectionChildParameters: { multiSelectionDisabled: disabled },
      singleSelectionChildParameters: { singleSelectionDisabled: disabled },
      multiSelectionChildDeclarativeParameters: { multiSelected, onMultiSelectedChange: (e5) => setMultiSelected(e5[EventDetail].multiSelected) }
    });
    const { pressReturn, props: p22 } = usePress({ pressParameters: { focusSelf, onPressSync, excludeSpace, allowRepeatPresses: false, excludeEnter: null, excludePointer: null, longPressThreshold: null, onPressingChange: null }, refElementReturn });
    let s5 = singleSelected && multiSelected ? " (single- & multi- selected)" : singleSelected ? " (single-selected)" : multiSelected ? " (multi-selected)" : "";
    const text = `${randomWord} This is item #${index} (offset: ${singleSelected}) ${hidden ? " (hidden)" : ""}${disabled ? " (disabled)" : ""}${s5} (${tabbable ? "Tabbable" : "Not tabbable"})`;
    return /* @__PURE__ */ o5("li", { ...useMergedProps(propsChild, propsTabbable, p22), style: { opacity: hideBecausePaginated ? 0.25 : 1, transform: `translateX(${hideBecauseStaggered ? "50%" : "0%"})` }, children: [
      text,
      /* @__PURE__ */ o5("input", { ...useMergedProps(propsTabbable, { type: "number" }), style: { width: "5ch" } })
    ] });
  });

  // demos/use-timeout.tsx
  var DemoUseTimeout = () => {
    const [timeout, setTimeout2] = h2(1e3);
    const [triggerIndex, setTriggerIndex] = h2("");
    const [fireCount, setFireCount] = h2(0);
    useTimeout({ timeout, triggerIndex, callback: () => setFireCount((i5) => ++i5) });
    return /* @__PURE__ */ o5("div", { class: "demo", children: [
      /* @__PURE__ */ o5("h2", { children: "useTimeout" }),
      /* @__PURE__ */ o5("p", { children: [
        /* @__PURE__ */ o5("code", { children: "useEffect" }),
        " but on a timer"
      ] }),
      /* @__PURE__ */ o5("label", { children: [
        "Timeout duration: ",
        /* @__PURE__ */ o5("input", { type: "number", value: timeout, onInput: (e5) => setTimeout2(e5.currentTarget.valueAsNumber) })
      ] }),
      /* @__PURE__ */ o5("label", { children: [
        "Refresh key: ",
        /* @__PURE__ */ o5("input", { type: "text", value: triggerIndex, onInput: (e5) => setTriggerIndex(e5.currentTarget.value) })
      ] }),
      /* @__PURE__ */ o5("div", { children: [
        "The callback has been called ",
        fireCount,
        " time",
        fireCount === 1 ? "" : "s",
        "."
      ] })
    ] });
  };

  // index.tsx
  window._generate_setState_stacks = true;
  var DemoUseDroppable = () => {
    const { droppedFiles, droppedStrings, filesForConsideration, stringsForConsideration, propsStable: props, dropError } = useDroppable({ effect: "copy" });
    const { ref: _ref } = useMergedProps({}, { ref: _(null) });
    const p5 = useMergedProps(props, { className: "demo droppable" });
    return /* @__PURE__ */ o5("div", { ...p5, children: [
      droppedStrings != null && /* @__PURE__ */ o5("div", { children: [
        "Data dropped: ",
        /* @__PURE__ */ o5("ul", { children: Object.entries(droppedStrings).map(([type, value]) => /* @__PURE__ */ o5("li", { children: [
          type,
          ": ",
          value
        ] })) })
      ] }),
      droppedFiles != null && /* @__PURE__ */ o5("div", { children: [
        "Files dropped: ",
        /* @__PURE__ */ o5("table", { children: [
          /* @__PURE__ */ o5("thead", { children: /* @__PURE__ */ o5("tr", { children: [
            /* @__PURE__ */ o5("th", { children: "Name" }),
            /* @__PURE__ */ o5("th", { children: "Size" }),
            /* @__PURE__ */ o5("th", { children: "Type" }),
            /* @__PURE__ */ o5("th", { children: "Last modified" })
          ] }) }),
          /* @__PURE__ */ o5("tbody", { children: droppedFiles.map((f5) => /* @__PURE__ */ o5("tr", { children: [
            /* @__PURE__ */ o5("td", { children: f5.name }),
            f5.data.byteLength,
            /* @__PURE__ */ o5("td", { children: f5.type }),
            /* @__PURE__ */ o5("td", { children: new Date(f5.lastModified ?? 0) })
          ] })) })
        ] })
      ] }),
      /* @__PURE__ */ o5("hr", {}),
      stringsForConsideration != null && /* @__PURE__ */ o5("div", { children: [
        "Data being considered: ",
        /* @__PURE__ */ o5("ul", { children: Array.from(stringsForConsideration).map((type) => /* @__PURE__ */ o5("li", { children: type })) })
      ] }),
      filesForConsideration != null && /* @__PURE__ */ o5("div", { children: [
        "Files being considered: ",
        /* @__PURE__ */ o5("ul", { children: filesForConsideration.map((f5) => /* @__PURE__ */ o5("li", { children: JSON.stringify(f5) })) })
      ] }),
      /* @__PURE__ */ o5("hr", {}),
      dropError ? /* @__PURE__ */ o5("div", { children: dropError instanceof Error ? dropError.message : JSON.stringify(dropError) }) : null
    ] });
  };
  var DemoUseDraggable = () => {
    const { propsUnstable: props } = useDraggable({ data: { "text/plain": "This is custom draggable content of type text/plain." }, dragImage: null, dragImageXOffset: null, dragImageYOffset: null, effectAllowed: null });
    return /* @__PURE__ */ o5("div", { ...useMergedProps(props, { className: "demo" }), children: "Draggable content" });
  };
  var ChildrenHaveFocusContext = G(null);
  var DemoUseChildrenHaveFocus = () => {
    const [animate, setAnimate] = useState(false);
    const [maxChildCount, setMaxChildCount] = useState(10);
    const [minChildCount, setMinChildCount] = useState(5);
    const [currentChildCount, setCurrentChildCount] = useState(minChildCount);
    useInterval({
      callback: () => {
        if (animate) {
          if (currentChildCount == minChildCount)
            setCurrentChildCount(maxChildCount);
          else
            setCurrentChildCount(currentChildCount - 1);
        }
      },
      interval: 1e3
    });
    const [anyFocused, setAnyFocused] = useState(false);
    const { context } = useChildrenHaveFocus({ childrenHaveFocusParameters: { onCompositeFocusChange: setAnyFocused } });
    return /* @__PURE__ */ o5("div", { ...useMergedProps({}, { className: "demo" }), children: [
      /* @__PURE__ */ o5("h2", { children: "useChildrenHaveFocus" }),
      /* @__PURE__ */ o5("p", { children: [
        "If you want to see if any of your children have focus, the easiest way is to just attach a ",
        /* @__PURE__ */ o5("code", { children: "focusIn" }),
        " handler to the parent DOM node. But what if you don't have just one single parent DOM node? This hook lets you coordinate all the children to give you that information as if you were able to take that easy parent node route."
      ] }),
      /* @__PURE__ */ o5("div", { children: /* @__PURE__ */ o5("label", { children: [
        /* @__PURE__ */ o5("input", { type: "number", min: 0, value: minChildCount, onInput: (e5) => {
          e5.preventDefault();
          setMinChildCount(e5.currentTarget.valueAsNumber);
        } }),
        " Min # of children"
      ] }) }),
      /* @__PURE__ */ o5("div", { children: /* @__PURE__ */ o5("label", { children: [
        /* @__PURE__ */ o5("input", { type: "number", min: minChildCount, value: maxChildCount, onInput: (e5) => {
          e5.preventDefault();
          setMaxChildCount(e5.currentTarget.valueAsNumber);
        } }),
        " Max # of children"
      ] }) }),
      /* @__PURE__ */ o5("div", { children: [
        "Current # of children: ",
        currentChildCount
      ] }),
      /* @__PURE__ */ o5("label", { children: [
        /* @__PURE__ */ o5("input", { type: "checkbox", onInput: (e5) => setAnimate(e5.currentTarget.checked) }),
        " Mount & unmount children on a cycle"
      ] }),
      /* @__PURE__ */ o5(ChildrenHaveFocusContext.Provider, { value: context, children: [
        /* @__PURE__ */ o5("div", { children: [
          "Any children focused: ",
          anyFocused.toString()
        ] }),
        /* @__PURE__ */ o5("div", { children: Array.from(function* () {
          for (let i5 = 0; i5 < currentChildCount; ++i5) {
            yield /* @__PURE__ */ o5(DemoUseChildrenHaveFocusChild, { index: i5 }, i5);
          }
        }()) })
      ] })
    ] });
  };
  var DemoUseChildrenHaveFocusChild = ({ index }) => {
    const { hasCurrentFocusParameters: { onCurrentFocusedInnerChanged } } = useChildrenHaveFocusChild({ context: q2(ChildrenHaveFocusContext) });
    const { refElementReturn, propsStable } = useRefElement({ refElementParameters: {} });
    const { hasCurrentFocusReturn } = useHasCurrentFocus({ hasCurrentFocusParameters: { onCurrentFocusedChanged: null, onCurrentFocusedInnerChanged }, refElementReturn });
    return /* @__PURE__ */ o5("div", { tabIndex: 0, ...useMergedProps(propsStable, hasCurrentFocusReturn.propsStable), children: [
      "Focusable child #",
      index,
      /* @__PURE__ */ o5("input", {}),
      /* @__PURE__ */ o5("input", {})
    ] });
  };
  var DemoUseFocusTrap = x3(({ depth }) => {
    const [active, setActive] = useState(false);
    const { propsStable, refElementReturn } = useRefElement({ refElementParameters: {} });
    const { props } = useFocusTrap({
      focusTrapParameters: {
        trapActive: active,
        onlyMoveFocus: false,
        focusOpener: (e5) => e5?.focus(),
        focusPopup: (e5, f5) => f5()?.focus()
      },
      activeElementParameters: { getDocument: getDocument3, onActiveElementChange: null, onLastActiveElementChange: null, onWindowFocusedChange: null },
      refElementReturn
    });
    const divProps = useMergedProps(props, propsStable, { ref: void 0, className: "focus-trap-demo" });
    if (depth == 2)
      return /* @__PURE__ */ o5("div", {});
    return /* @__PURE__ */ o5("div", { className: "demo", children: [
      /* @__PURE__ */ o5("label", { children: [
        "Active: ",
        /* @__PURE__ */ o5("input", { type: "checkbox", checked: active, onInput: (e5) => {
          e5.preventDefault();
          setActive(e5.currentTarget.checked);
        } })
      ] }),
      /* @__PURE__ */ o5("div", { ...divProps, children: /* @__PURE__ */ o5(DemoUseFocusTrapChild, { active, setActive, depth: depth ?? 0 }) })
    ] });
  });
  var DemoUseFocusTrapChild = x3(({ setActive, active }) => {
    return /* @__PURE__ */ o5(k, { children: [
      /* @__PURE__ */ o5("button", { children: "Button 1" }),
      /* @__PURE__ */ o5("button", { children: "Button 2" }),
      /* @__PURE__ */ o5("button", { children: "Button 3" }),
      /* @__PURE__ */ o5("label", { children: [
        "Active: ",
        /* @__PURE__ */ o5("input", { type: "checkbox", checked: active, onInput: (e5) => {
          e5.preventDefault();
          setActive(e5.currentTarget.checked);
        } })
      ] })
    ] });
  });
  var DemoUseAsyncHandler1 = x3(() => {
    const [timeout, setTimeout2] = useState(1e3);
    const [debounce2, setDebounce] = useState(0);
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
      capture: () => {
      },
      debounce: debounce2 == 0 ? void 0 : debounce2,
      throttle: null
    });
    const onClick = pending ? void 0 : syncHandler;
    return /* @__PURE__ */ o5("div", { className: "demo", children: [
      /* @__PURE__ */ o5("button", { disabled: pending && disableConsecutive, onClick, children: "Click me!" }),
      /* @__PURE__ */ o5("label", { children: [
        "Sleep for: ",
        /* @__PURE__ */ o5("input", { type: "number", value: timeout, onInput: (e5) => setTimeout2(e5.currentTarget.valueAsNumber) })
      ] }),
      /* @__PURE__ */ o5("label", { children: [
        "Throw an error ",
        /* @__PURE__ */ o5("input", { type: "checkbox", checked: shouldThrow, onInput: (e5) => setShouldThrow(e5.currentTarget.checked) })
      ] }),
      /* @__PURE__ */ o5("label", { children: [
        "Disabled while pending ",
        /* @__PURE__ */ o5("input", { type: "checkbox", checked: disableConsecutive, onInput: (e5) => setDisableConsecutive(e5.currentTarget.checked) })
      ] }),
      /* @__PURE__ */ o5("label", { children: [
        "Debounce: ",
        /* @__PURE__ */ o5("input", { type: "number", value: debounce2, onInput: (e5) => setDebounce(e5.currentTarget.valueAsNumber) })
      ] }),
      /* @__PURE__ */ o5("table", { children: [
        /* @__PURE__ */ o5("thead", { children: /* @__PURE__ */ o5("tr", { children: [
          /* @__PURE__ */ o5("th", { children: "Field" }),
          /* @__PURE__ */ o5("th", { children: "Value" })
        ] }) }),
        /* @__PURE__ */ o5("tbody", { children: [
          /* @__PURE__ */ o5("tr", { children: [
            /* @__PURE__ */ o5("td", { children: "callCount" }),
            /* @__PURE__ */ o5("td", { children: callCount })
          ] }),
          /* @__PURE__ */ o5("tr", { children: [
            /* @__PURE__ */ o5("td", { children: "settleCount" }),
            /* @__PURE__ */ o5("td", { children: settleCount })
          ] }),
          /* @__PURE__ */ o5("tr", { children: [
            /* @__PURE__ */ o5("td", { children: "resolveCount" }),
            /* @__PURE__ */ o5("td", { children: resolveCount })
          ] }),
          /* @__PURE__ */ o5("tr", { children: [
            /* @__PURE__ */ o5("td", { children: "rejectCount" }),
            /* @__PURE__ */ o5("td", { children: rejectCount })
          ] }),
          /* @__PURE__ */ o5("tr", { children: [
            /* @__PURE__ */ o5("td", { children: "hasError" }),
            /* @__PURE__ */ o5("td", { children: hasError.toString() })
          ] }),
          /* @__PURE__ */ o5("tr", { children: [
            /* @__PURE__ */ o5("td", { children: "hasCapture" }),
            /* @__PURE__ */ o5("td", { children: hasCapture.toString() })
          ] })
        ] })
      ] })
    ] });
  });
  var DemoUseAsyncHandler2 = x3(() => {
    const [timeout, setTimeout2] = useState(1e3);
    const [debounce2, setDebounce] = useState(0);
    const [throttle, setThrottle] = useState(0);
    const [shouldThrow, setShouldThrow, getShouldThrow] = useState(false);
    const [disableConsecutive, setDisableConsecutive] = useState(false);
    const [text, setText] = useState("");
    const onInputAsync = async (v5, _e) => new Promise((resolve, reject) => window.setTimeout(() => {
      if (getShouldThrow()) {
        reject();
      } else {
        setText(v5);
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
      capture: (e5) => {
        e5.preventDefault();
        return e5.currentTarget.value;
      },
      debounce: debounce2 == 0 ? void 0 : debounce2,
      throttle: throttle == 0 ? void 0 : throttle
    });
    let anyWaiting = pending || debouncingAsync || debouncingSync;
    return /* @__PURE__ */ o5("div", { className: "demo", children: [
      /* @__PURE__ */ o5("label", { children: [
        "Demo text: ",
        /* @__PURE__ */ o5("input", { value: hasCapture ? currentCapture : text, disabled: pending && disableConsecutive, onInput: syncHandler })
      ] }),
      /* @__PURE__ */ o5("hr", {}),
      /* @__PURE__ */ o5("label", { children: [
        "# of milliseconds the async handler takes to run: ",
        /* @__PURE__ */ o5("input", { type: "number", value: timeout, onInput: (e5) => setTimeout2(e5.currentTarget.valueAsNumber) })
      ] }),
      /* @__PURE__ */ o5("label", { children: [
        "Throw an error ",
        /* @__PURE__ */ o5("input", { type: "checkbox", checked: shouldThrow, onInput: (e5) => setShouldThrow(e5.currentTarget.checked) })
      ] }),
      /* @__PURE__ */ o5("label", { children: [
        "Disabled while pending ",
        /* @__PURE__ */ o5("input", { type: "checkbox", checked: disableConsecutive, onInput: (e5) => setDisableConsecutive(e5.currentTarget.checked) })
      ] }),
      /* @__PURE__ */ o5("label", { children: [
        "Debounce: ",
        /* @__PURE__ */ o5("input", { type: "number", value: debounce2, onInput: (e5) => setDebounce(e5.currentTarget.valueAsNumber) })
      ] }),
      /* @__PURE__ */ o5("label", { children: [
        "Throttle: ",
        /* @__PURE__ */ o5("input", { type: "number", value: throttle, onInput: (e5) => setThrottle(e5.currentTarget.valueAsNumber) })
      ] }),
      /* @__PURE__ */ o5("table", { children: [
        /* @__PURE__ */ o5("thead", { children: /* @__PURE__ */ o5("tr", { children: [
          /* @__PURE__ */ o5("th", { children: "Field" }),
          /* @__PURE__ */ o5("th", { children: "Value" })
        ] }) }),
        /* @__PURE__ */ o5("tbody", { children: [
          /* @__PURE__ */ o5("tr", { children: [
            /* @__PURE__ */ o5("td", { children: "showSpinner" }),
            /* @__PURE__ */ o5("td", { children: `${anyWaiting}` })
          ] }),
          /* @__PURE__ */ o5("tr", { children: [
            /* @__PURE__ */ o5("td", { children: "pending" }),
            /* @__PURE__ */ o5("td", { children: `${pending}` })
          ] }),
          /* @__PURE__ */ o5("tr", { children: [
            /* @__PURE__ */ o5("td", { children: "debouncingSync" }),
            /* @__PURE__ */ o5("td", { children: `${debouncingSync}` })
          ] }),
          /* @__PURE__ */ o5("tr", { children: [
            /* @__PURE__ */ o5("td", { children: "debouncingAsync" }),
            /* @__PURE__ */ o5("td", { children: `${debouncingAsync}` })
          ] }),
          /* @__PURE__ */ o5("tr", { children: [
            /* @__PURE__ */ o5("td", { children: "callCount" }),
            /* @__PURE__ */ o5("td", { children: callCount })
          ] }),
          /* @__PURE__ */ o5("tr", { children: [
            /* @__PURE__ */ o5("td", { children: "settleCount" }),
            /* @__PURE__ */ o5("td", { children: settleCount })
          ] }),
          /* @__PURE__ */ o5("tr", { children: [
            /* @__PURE__ */ o5("td", { children: "resolveCount" }),
            /* @__PURE__ */ o5("td", { children: resolveCount })
          ] }),
          /* @__PURE__ */ o5("tr", { children: [
            /* @__PURE__ */ o5("td", { children: "rejectCount" }),
            /* @__PURE__ */ o5("td", { children: rejectCount })
          ] }),
          /* @__PURE__ */ o5("tr", { children: [
            /* @__PURE__ */ o5("td", { children: "hasError" }),
            /* @__PURE__ */ o5("td", { children: hasError.toString() })
          ] }),
          /* @__PURE__ */ o5("tr", { children: [
            /* @__PURE__ */ o5("td", { children: "currentCapture" }),
            /* @__PURE__ */ o5("td", { children: currentCapture })
          ] }),
          /* @__PURE__ */ o5("tr", { children: [
            /* @__PURE__ */ o5("td", { children: '"Saved" input' }),
            /* @__PURE__ */ o5("td", { children: text })
          ] })
        ] })
      ] })
    ] });
  });
  function getDocument3() {
    return window.document;
  }
  var DemoFocus = x3(() => {
    const [focusCount, setFocusCount] = useState(0);
    const [innerFocusCount, setInnerFocusCount] = useState(0);
    const [lastActiveElement, setLastActiveElement] = useState(null);
    const [activeElement, setActiveElement] = useState(null);
    const [windowFocused, setWindowFocused] = useState(false);
    const [focused, setFocused] = useState(false);
    const [focusedInner, setFocusedInner] = useState(false);
    const [lastFocused, setLastFocused] = useState(false);
    const [lastFocusedInner, setLastFocusedInner] = useState(false);
    const { refElementReturn, propsStable: p22 } = useRefElement({ refElementParameters: { onElementChange: void 0 } });
    const {
      hasCurrentFocusReturn: { propsStable: p1 }
    } = useHasCurrentFocus({
      refElementReturn,
      hasCurrentFocusParameters: {
        onCurrentFocusedChanged: useStableCallback((focused2) => {
          setFocused(focused2);
          if (focused2)
            setFocusCount((c5) => ++c5);
        }),
        onCurrentFocusedInnerChanged: useStableCallback((focused2) => {
          setFocusedInner(focused2);
          if (focused2)
            setInnerFocusCount((c5) => ++c5);
        })
      }
    });
    useHasLastFocus({
      refElementReturn,
      activeElementParameters: {
        getDocument: getDocument3,
        onActiveElementChange: setActiveElement,
        onLastActiveElementChange: setLastActiveElement,
        onWindowFocusedChange: setWindowFocused
      },
      hasLastFocusParameters: {
        onLastFocusedChanged: setLastFocused,
        onLastFocusedInnerChanged: setLastFocusedInner
      }
    });
    return /* @__PURE__ */ o5("div", { class: "demo", children: [
      /* @__PURE__ */ o5("h2", { children: "useHasFocus" }),
      /* @__PURE__ */ o5("p", { children: "Tracks focus related to the component:" }),
      /* @__PURE__ */ o5("ul", { children: [
        /* @__PURE__ */ o5("li", { children: "Is this element (or, optionally, any element within it) focused?" }),
        /* @__PURE__ */ o5("li", { children: [
          "Regardless of if focus was lost because the ",
          /* @__PURE__ */ o5("code", { children: "body" }),
          " was clicked, was this element (or, optionally, any element within it), the last to be actually focused?"
        ] }),
        /* @__PURE__ */ o5("li", { children: "Does the window have focus?" })
      ] }),
      /* @__PURE__ */ o5("div", { ...useMergedProps(p22, p1, { style: { border: "1px solid black" }, tabIndex: 0 }), children: [
        /* @__PURE__ */ o5("span", { children: "Outer element" }),
        /* @__PURE__ */ o5("input", {}),
        /* @__PURE__ */ o5("input", {}),
        /* @__PURE__ */ o5("div", { tabIndex: 0, style: { border: "1px solid black" }, children: [
          /* @__PURE__ */ o5("span", { children: "Inner element" }),
          /* @__PURE__ */ o5("input", {}),
          /* @__PURE__ */ o5("input", {})
        ] })
      ] }),
      /* @__PURE__ */ o5("div", { children: /* @__PURE__ */ o5("ul", { children: [
        /* @__PURE__ */ o5("li", { children: [
          "Focus count: ",
          focusCount
        ] }),
        /* @__PURE__ */ o5("li", { children: [
          "Inner focus count: ",
          innerFocusCount
        ] }),
        /* @__PURE__ */ o5("li", { children: [
          "Strictly focused: ",
          focused.toString(),
          ", ",
          lastFocused.toString(),
          " (focused, lastFocused)"
        ] }),
        /* @__PURE__ */ o5("li", { children: [
          "Inner focused: ",
          focusedInner.toString(),
          ", ",
          lastFocusedInner.toString(),
          " (focusedInner, lastFocusedInner)"
        ] }),
        /* @__PURE__ */ o5("li", { children: [
          "Window focused: ",
          windowFocused.toString()
        ] }),
        /* @__PURE__ */ o5("li", { children: [
          "activeElement: ",
          activeElement?.textContent
        ] }),
        /* @__PURE__ */ o5("li", { children: [
          "lastActiveElement: ",
          lastActiveElement?.textContent
        ] })
      ] }) })
    ] });
  });
  function DemoLabel() {
    const { propsInput, propsLabel } = useRandomDualIds({ randomIdInputParameters: { prefix: "input-", otherReferencerProp: "for" }, randomIdLabelParameters: { prefix: "label-", otherReferencerProp: "aria-labelledby" } });
    return /* @__PURE__ */ o5("div", { className: "demo", children: [
      /* @__PURE__ */ o5("h2", { children: "Labels" }),
      /* @__PURE__ */ o5("input", { ...propsInput }),
      /* @__PURE__ */ o5("label", { ...propsLabel, children: "Label" })
    ] });
  }
  function DemoPress({ remaining }) {
    const [count, setCount] = useState(0);
    const { refElementReturn, propsStable: p1 } = useRefElement({ refElementParameters: {} });
    const { props: p22, pressReturn: { pressing, longPress } } = usePress({
      pressParameters: {
        focusSelf: (e5) => {
          e5.focus();
        },
        longPressThreshold: 1e3,
        onPressSync: () => {
          setCount((c5) => ++c5);
        },
        allowRepeatPresses: false,
        excludeEnter: null,
        excludePointer: null,
        excludeSpace: null,
        onPressingChange: null
      },
      refElementReturn
    });
    return /* @__PURE__ */ o5("div", { className: "demo", children: [
      /* @__PURE__ */ o5("h2", { children: "Press" }),
      /* @__PURE__ */ o5("div", { children: [
        "Press count: ",
        count
      ] }),
      /* @__PURE__ */ o5("div", { children: [
        "Active: ",
        pressing.toString()
      ] }),
      /* @__PURE__ */ o5("div", { children: [
        "Long press: ",
        (longPress ?? "null").toString()
      ] }),
      /* @__PURE__ */ o5("div", { style: { border: "1px solid black", touchAction: "none" }, tabIndex: 0, ...useMergedProps(p1, p22), children: [
        /* @__PURE__ */ o5("div", { children: "This DIV's parent is pressable. Click here to press, cancel by leaving or hovering over a pressable child." }),
        /* @__PURE__ */ o5("div", { children: remaining > 0 && /* @__PURE__ */ o5(DemoPress, { remaining: remaining - 1 }) })
      ] })
    ] });
  }
  function DemoPortalChildrenChild() {
    console.log("Render portal child");
    return /* @__PURE__ */ o5("p", { children: "Portal child" });
  }
  function DemoPortalChildren() {
    const [element, setElement] = useState(null);
    const { children, pushChild, removeChild, updateChild } = usePortalChildren({ target: element });
    return /* @__PURE__ */ o5("div", { className: "demo", children: [
      /* @__PURE__ */ o5("h2", { children: "Portal children" }),
      /* @__PURE__ */ o5("button", { onClick: () => pushChild(/* @__PURE__ */ o5(DemoPortalChildrenChild, {})), children: "Push child" }),
      children,
      /* @__PURE__ */ o5("div", { id: "demo-portal-target", ref: setElement })
    ] });
  }
  function DemoGlobalHandler() {
    const [count, setCount] = useState(10);
    const [mode, setMode] = useState("single");
    const [testTime, setTestTime] = useState("");
    return /* @__PURE__ */ o5("div", { className: "demo", children: [
      /* @__PURE__ */ o5("div", { children: "Global event handlers:" }),
      /* @__PURE__ */ o5("label", { children: [
        "# of event handlers",
        /* @__PURE__ */ o5("input", { type: "number", value: count, min: 0, onInput: (e5) => {
          e5.preventDefault();
          setCount(e5.currentTarget.valueAsNumber);
        } })
      ] }),
      /* @__PURE__ */ o5("div", { children: [
        /* @__PURE__ */ o5("label", { children: [
          /* @__PURE__ */ o5("input", { onInput: (e5) => {
            e5.preventDefault();
            if (e5.currentTarget.checked)
              setMode("grouped");
          }, type: "radio", name: "global-handler-mode" }),
          " Grouped"
        ] }),
        /* @__PURE__ */ o5("label", { children: [
          /* @__PURE__ */ o5("input", { onInput: (e5) => {
            e5.preventDefault();
            if (e5.currentTarget.checked)
              setMode("single");
          }, type: "radio", name: "global-handler-mode" }),
          " Single"
        ] }),
        /* @__PURE__ */ o5("label", { children: [
          /* @__PURE__ */ o5("input", { onInput: (e5) => {
            e5.preventDefault();
            if (e5.currentTarget.checked)
              setMode(null);
          }, type: "radio", name: "global-handler-mode" }),
          " Off"
        ] })
      ] }),
      /* @__PURE__ */ o5("button", { id: "global-handler-test", onClick: () => {
        const now2 = /* @__PURE__ */ new Date();
        document.getElementById("global-handler-test2")?.click();
        const then = /* @__PURE__ */ new Date();
        setTestTime((+then - +now2) / 1e3 + "s passed");
      }, children: "Run test" }),
      /* @__PURE__ */ o5("button", { id: "global-handler-test2", children: "Run test 2" }),
      /* @__PURE__ */ o5("div", { children: testTime }),
      /* @__PURE__ */ o5(DemoGlobalHandlerChildren, { count, mode }, mode)
    ] });
  }
  var DemoGlobalHandlerChildren = x3(function DemoGlobalHandlerChildren2({ count, mode }) {
    return /* @__PURE__ */ o5(k, { children: [...function* () {
      for (let i5 = 0; i5 < count; ++i5) {
        yield /* @__PURE__ */ o5(DemoGlobalHandlerChild, { mode, target: window }, i5);
      }
    }()] });
  });
  var DemoGlobalHandlerChild = x3(function DemoGlobalHandlerChild2({ mode, target }) {
    useGlobalHandler(target, "click", mode == null ? null : (e5) => {
      if (e5.target?.id != "global-handler-test2")
        return;
      window._demo_event = (window._demo_event || 0) + 1;
    }, {}, mode || "grouped");
    return /* @__PURE__ */ o5("div", { hidden: true });
  });
  var StaggeredContext = G(null);
  var DemoStaggered = x3(() => {
    const [staggered, setStaggered] = useState(false);
    const [checked, setChecked] = useState(false);
    const [childCount, setChildCount] = useState(100);
    const { context: mcc, managedChildrenReturn } = useManagedChildren({ managedChildrenParameters: {} });
    const { context: scc, staggeredChildrenReturn } = useStaggeredChildren({ managedChildrenReturn, staggeredChildrenParameters: { staggered } });
    return /* @__PURE__ */ o5(StaggeredContext.Provider, { value: { ...mcc, ...scc }, children: /* @__PURE__ */ o5("div", { class: "demo", children: [
      /* @__PURE__ */ o5("label", { children: [
        /* @__PURE__ */ o5("input", { type: "checkbox", checked, onInput: (e5) => {
          e5.preventDefault();
          setChecked(e5.currentTarget.checked);
        } }),
        " Children mounted"
      ] }),
      /* @__PURE__ */ o5("label", { children: [
        /* @__PURE__ */ o5("input", { type: "checkbox", checked: staggered, onInput: (e5) => {
          e5.preventDefault();
          setStaggered(e5.currentTarget.checked);
        } }),
        " Children Staggered"
      ] }),
      /* @__PURE__ */ o5("label", { children: [
        /* @__PURE__ */ o5("input", { type: "number", value: childCount, onInput: (e5) => {
          e5.preventDefault();
          setChildCount(e5.currentTarget.valueAsNumber);
        } }),
        " # of children"
      ] }),
      /* @__PURE__ */ o5("div", { children: [
        /* @__PURE__ */ o5("div", { children: [
          "Status: ",
          staggered ? staggeredChildrenReturn.stillStaggering ? "staggering" : "done staggering" : "(not staggering)"
        ] }),
        /* @__PURE__ */ o5("div", { style: "display:flex;flex-wrap: wrap;", children: checked && /* @__PURE__ */ o5(DemoStaggeredChildren, { childCount }) })
      ] })
    ] }) });
  });
  var DemoStaggeredChildren = x3(({ childCount }) => {
    return /* @__PURE__ */ o5(k, { children: Array.from(function* () {
      for (let i5 = 0; i5 < childCount; ++i5) {
        yield /* @__PURE__ */ o5(DemoStaggeredChild, { index: i5 }, i5);
      }
    }()) });
  });
  var DemoStaggeredChild = x3(({ index }) => {
    const context = q2(StaggeredContext);
    const { info, props, staggeredChildReturn: { hideBecauseStaggered, parentIsStaggered } } = useStaggeredChild({ context, info: { index } });
    const { managedChildReturn } = useManagedChild({ context, info: { ...info, index } });
    return /* @__PURE__ */ o5("div", { ...useMergedProps(props, { style: hideBecauseStaggered ? { opacity: 0.25 } : {} }), children: [
      "Child #",
      index,
      parentIsStaggered ? hideBecauseStaggered ? "(pending)" : "" : "(not staggered)"
    ] });
  });
  l.debounceRendering = (f5) => f5();
  var Component = () => {
    return /* @__PURE__ */ o5("div", { class: "flex", style: { flexWrap: "wrap" }, children: [
      /* @__PURE__ */ o5(DemoPress, { remaining: 2 }),
      /* @__PURE__ */ o5("input", {}),
      /* @__PURE__ */ o5("div", { style: "display:grid;grid-template-columns:1fr 1fr", children: [
        /* @__PURE__ */ o5(DemoUseModal, {}),
        /* @__PURE__ */ o5(DemoUseModal, {})
      ] }),
      /* @__PURE__ */ o5("hr", {}),
      /* @__PURE__ */ o5(DemoLabel, {}),
      /* @__PURE__ */ o5("hr", {}),
      /* @__PURE__ */ o5(DemoGlobalHandler, {}),
      /* @__PURE__ */ o5("hr", {}),
      /* @__PURE__ */ o5(DemoPortalChildren, {}),
      /* @__PURE__ */ o5("hr", {}),
      /* @__PURE__ */ o5(DemoFocus, {}),
      /* @__PURE__ */ o5("hr", {}),
      /* @__PURE__ */ o5(DemoUseChildrenHaveFocus, {}),
      /* @__PURE__ */ o5("hr", {}),
      /* @__PURE__ */ o5(DemoUseGrid, {}),
      /* @__PURE__ */ o5("hr", {}),
      /* @__PURE__ */ o5(DemoUseTimeout, {}),
      /* @__PURE__ */ o5("hr", {}),
      /* @__PURE__ */ o5(DemoStaggered, {}),
      /* @__PURE__ */ o5("hr", {}),
      /* @__PURE__ */ o5(DemoUseRovingTabIndex, {}),
      /* @__PURE__ */ o5("hr", {}),
      /* @__PURE__ */ o5(DemoUseFocusTrap, {}),
      /* @__PURE__ */ o5("hr", {}),
      /* @__PURE__ */ o5(DemoUseAsyncHandler1, {}),
      /* @__PURE__ */ o5("hr", {}),
      /* @__PURE__ */ o5(DemoUseAsyncHandler2, {}),
      /* @__PURE__ */ o5("hr", {}),
      /* @__PURE__ */ o5(DemoUseDroppable, {}),
      /* @__PURE__ */ o5("hr", {}),
      /* @__PURE__ */ o5(DemoUseDraggable, {}),
      /* @__PURE__ */ o5("hr", {})
    ] });
  };
  requestAnimationFrame(() => {
    D(/* @__PURE__ */ o5(Component, {}), document.getElementById("root"));
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
