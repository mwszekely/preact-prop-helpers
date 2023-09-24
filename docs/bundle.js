"use strict";
(() => {
  // ../node_modules/.pnpm/preact@10.17.1/node_modules/preact/dist/preact.module.js
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
  function v(n2, l4) {
    for (var u4 in l4)
      n2[u4] = l4[u4];
    return n2;
  }
  function p(n2) {
    var l4 = n2.parentNode;
    l4 && l4.removeChild(n2);
  }
  function y(l4, u4, t3) {
    var i3, o5, r5, f4 = {};
    for (r5 in u4)
      "key" == r5 ? i3 = u4[r5] : "ref" == r5 ? o5 = u4[r5] : f4[r5] = u4[r5];
    if (arguments.length > 2 && (f4.children = arguments.length > 3 ? n.call(arguments, 2) : t3), "function" == typeof l4 && null != l4.defaultProps)
      for (r5 in l4.defaultProps)
        void 0 === f4[r5] && (f4[r5] = l4.defaultProps[r5]);
    return d(l4, f4, i3, o5, null);
  }
  function d(n2, t3, i3, o5, r5) {
    var f4 = { type: n2, props: t3, key: i3, ref: o5, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: null == r5 ? ++u : r5 };
    return null == r5 && null != l.vnode && l.vnode(f4), f4;
  }
  function k(n2) {
    return n2.children;
  }
  function b(n2, l4) {
    this.props = n2, this.context = l4;
  }
  function g(n2, l4) {
    if (null == l4)
      return n2.__ ? g(n2.__, n2.__.__k.indexOf(n2) + 1) : null;
    for (var u4; l4 < n2.__k.length; l4++)
      if (null != (u4 = n2.__k[l4]) && null != u4.__e)
        return u4.__e;
    return "function" == typeof n2.type ? g(n2) : null;
  }
  function m(n2) {
    var l4, u4;
    if (null != (n2 = n2.__) && null != n2.__c) {
      for (n2.__e = n2.__c.base = null, l4 = 0; l4 < n2.__k.length; l4++)
        if (null != (u4 = n2.__k[l4]) && null != u4.__e) {
          n2.__e = n2.__c.base = u4.__e;
          break;
        }
      return m(n2);
    }
  }
  function w(n2) {
    (!n2.__d && (n2.__d = true) && i.push(n2) && !x.__r++ || o !== l.debounceRendering) && ((o = l.debounceRendering) || r)(x);
  }
  function x() {
    var n2, l4, u4, t3, o5, r5, e3, c4, s4;
    for (i.sort(f); n2 = i.shift(); )
      n2.__d && (l4 = i.length, t3 = void 0, o5 = void 0, r5 = void 0, c4 = (e3 = (u4 = n2).__v).__e, (s4 = u4.__P) && (t3 = [], o5 = [], (r5 = v({}, e3)).__v = e3.__v + 1, L(s4, e3, r5, u4.__n, void 0 !== s4.ownerSVGElement, null != e3.__h ? [c4] : null, t3, null == c4 ? g(e3) : c4, e3.__h, o5), M(t3, e3, o5), e3.__e != c4 && m(e3)), i.length > l4 && i.sort(f));
    x.__r = 0;
  }
  function P(n2, l4, u4, t3, i3, o5, r5, f4, e3, a4, v4) {
    var p4, y4, _4, b4, m4, w4, x4, P27, C3, H3 = 0, I3 = t3 && t3.__k || s, T4 = I3.length, j4 = T4, z4 = l4.length;
    for (u4.__k = [], p4 = 0; p4 < z4; p4++)
      null != (b4 = u4.__k[p4] = null == (b4 = l4[p4]) || "boolean" == typeof b4 || "function" == typeof b4 ? null : "string" == typeof b4 || "number" == typeof b4 || "bigint" == typeof b4 ? d(null, b4, null, null, b4) : h(b4) ? d(k, { children: b4 }, null, null, null) : b4.__b > 0 ? d(b4.type, b4.props, b4.key, b4.ref ? b4.ref : null, b4.__v) : b4) ? (b4.__ = u4, b4.__b = u4.__b + 1, -1 === (P27 = A(b4, I3, x4 = p4 + H3, j4)) ? _4 = c : (_4 = I3[P27] || c, I3[P27] = void 0, j4--), L(n2, b4, _4, i3, o5, r5, f4, e3, a4, v4), m4 = b4.__e, (y4 = b4.ref) && _4.ref != y4 && (_4.ref && O(_4.ref, null, b4), v4.push(y4, b4.__c || m4, b4)), null != m4 && (null == w4 && (w4 = m4), (C3 = _4 === c || null === _4.__v) ? -1 == P27 && H3-- : P27 !== x4 && (P27 === x4 + 1 ? H3++ : P27 > x4 ? j4 > z4 - x4 ? H3 += P27 - x4 : H3-- : H3 = P27 < x4 && P27 == x4 - 1 ? P27 - x4 : 0), x4 = p4 + H3, "function" != typeof b4.type || P27 === x4 && _4.__k !== b4.__k ? "function" == typeof b4.type || P27 === x4 && !C3 ? void 0 !== b4.__d ? (e3 = b4.__d, b4.__d = void 0) : e3 = m4.nextSibling : e3 = S(n2, m4, e3) : e3 = $(b4, e3, n2), "function" == typeof u4.type && (u4.__d = e3))) : (_4 = I3[p4]) && null == _4.key && _4.__e && (_4.__e == e3 && (e3 = g(_4)), q(_4, _4, false), I3[p4] = null);
    for (u4.__e = w4, p4 = T4; p4--; )
      null != I3[p4] && ("function" == typeof u4.type && null != I3[p4].__e && I3[p4].__e == u4.__d && (u4.__d = I3[p4].__e.nextSibling), q(I3[p4], I3[p4]));
  }
  function $(n2, l4, u4) {
    for (var t3, i3 = n2.__k, o5 = 0; i3 && o5 < i3.length; o5++)
      (t3 = i3[o5]) && (t3.__ = n2, l4 = "function" == typeof t3.type ? $(t3, l4, u4) : S(u4, t3.__e, l4));
    return l4;
  }
  function C(n2, l4) {
    return l4 = l4 || [], null == n2 || "boolean" == typeof n2 || (h(n2) ? n2.some(function(n3) {
      C(n3, l4);
    }) : l4.push(n2)), l4;
  }
  function S(n2, l4, u4) {
    return null == u4 || u4.parentNode !== n2 ? n2.insertBefore(l4, null) : l4 == u4 && null != l4.parentNode || n2.insertBefore(l4, u4), l4.nextSibling;
  }
  function A(n2, l4, u4, t3) {
    var i3 = n2.key, o5 = n2.type, r5 = u4 - 1, f4 = u4 + 1, e3 = l4[u4];
    if (null === e3 || e3 && i3 == e3.key && o5 === e3.type)
      return u4;
    if (t3 > (null != e3 ? 1 : 0))
      for (; r5 >= 0 || f4 < l4.length; ) {
        if (r5 >= 0) {
          if ((e3 = l4[r5]) && i3 == e3.key && o5 === e3.type)
            return r5;
          r5--;
        }
        if (f4 < l4.length) {
          if ((e3 = l4[f4]) && i3 == e3.key && o5 === e3.type)
            return f4;
          f4++;
        }
      }
    return -1;
  }
  function H(n2, l4, u4, t3, i3) {
    var o5;
    for (o5 in u4)
      "children" === o5 || "key" === o5 || o5 in l4 || T(n2, o5, null, u4[o5], t3);
    for (o5 in l4)
      i3 && "function" != typeof l4[o5] || "children" === o5 || "key" === o5 || "value" === o5 || "checked" === o5 || u4[o5] === l4[o5] || T(n2, o5, l4[o5], u4[o5], t3);
  }
  function I(n2, l4, u4) {
    "-" === l4[0] ? n2.setProperty(l4, null == u4 ? "" : u4) : n2[l4] = null == u4 ? "" : "number" != typeof u4 || a.test(l4) ? u4 : u4 + "px";
  }
  function T(n2, l4, u4, t3, i3) {
    var o5;
    n:
      if ("style" === l4)
        if ("string" == typeof u4)
          n2.style.cssText = u4;
        else {
          if ("string" == typeof t3 && (n2.style.cssText = t3 = ""), t3)
            for (l4 in t3)
              u4 && l4 in u4 || I(n2.style, l4, "");
          if (u4)
            for (l4 in u4)
              t3 && u4[l4] === t3[l4] || I(n2.style, l4, u4[l4]);
        }
      else if ("o" === l4[0] && "n" === l4[1])
        o5 = l4 !== (l4 = l4.replace(/(PointerCapture)$|Capture$/, "$1")), l4 = l4.toLowerCase() in n2 ? l4.toLowerCase().slice(2) : l4.slice(2), n2.l || (n2.l = {}), n2.l[l4 + o5] = u4, u4 ? t3 || n2.addEventListener(l4, o5 ? z : j, o5) : n2.removeEventListener(l4, o5 ? z : j, o5);
      else if ("dangerouslySetInnerHTML" !== l4) {
        if (i3)
          l4 = l4.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
        else if ("width" !== l4 && "height" !== l4 && "href" !== l4 && "list" !== l4 && "form" !== l4 && "tabIndex" !== l4 && "download" !== l4 && "rowSpan" !== l4 && "colSpan" !== l4 && l4 in n2)
          try {
            n2[l4] = null == u4 ? "" : u4;
            break n;
          } catch (n3) {
          }
        "function" == typeof u4 || (null == u4 || false === u4 && "-" !== l4[4] ? n2.removeAttribute(l4) : n2.setAttribute(l4, u4));
      }
  }
  function j(n2) {
    return this.l[n2.type + false](l.event ? l.event(n2) : n2);
  }
  function z(n2) {
    return this.l[n2.type + true](l.event ? l.event(n2) : n2);
  }
  function L(n2, u4, t3, i3, o5, r5, f4, e3, c4, s4) {
    var a4, p4, y4, d4, _4, g4, m4, w4, x4, $3, C3, S2, A3, H3, I3, T4 = u4.type;
    if (void 0 !== u4.constructor)
      return null;
    null != t3.__h && (c4 = t3.__h, e3 = u4.__e = t3.__e, u4.__h = null, r5 = [e3]), (a4 = l.__b) && a4(u4);
    n:
      if ("function" == typeof T4)
        try {
          if (w4 = u4.props, x4 = (a4 = T4.contextType) && i3[a4.__c], $3 = a4 ? x4 ? x4.props.value : a4.__ : i3, t3.__c ? m4 = (p4 = u4.__c = t3.__c).__ = p4.__E : ("prototype" in T4 && T4.prototype.render ? u4.__c = p4 = new T4(w4, $3) : (u4.__c = p4 = new b(w4, $3), p4.constructor = T4, p4.render = B), x4 && x4.sub(p4), p4.props = w4, p4.state || (p4.state = {}), p4.context = $3, p4.__n = i3, y4 = p4.__d = true, p4.__h = [], p4._sb = []), null == p4.__s && (p4.__s = p4.state), null != T4.getDerivedStateFromProps && (p4.__s == p4.state && (p4.__s = v({}, p4.__s)), v(p4.__s, T4.getDerivedStateFromProps(w4, p4.__s))), d4 = p4.props, _4 = p4.state, p4.__v = u4, y4)
            null == T4.getDerivedStateFromProps && null != p4.componentWillMount && p4.componentWillMount(), null != p4.componentDidMount && p4.__h.push(p4.componentDidMount);
          else {
            if (null == T4.getDerivedStateFromProps && w4 !== d4 && null != p4.componentWillReceiveProps && p4.componentWillReceiveProps(w4, $3), !p4.__e && (null != p4.shouldComponentUpdate && false === p4.shouldComponentUpdate(w4, p4.__s, $3) || u4.__v === t3.__v)) {
              for (u4.__v !== t3.__v && (p4.props = w4, p4.state = p4.__s, p4.__d = false), u4.__e = t3.__e, u4.__k = t3.__k, u4.__k.forEach(function(n3) {
                n3 && (n3.__ = u4);
              }), C3 = 0; C3 < p4._sb.length; C3++)
                p4.__h.push(p4._sb[C3]);
              p4._sb = [], p4.__h.length && f4.push(p4);
              break n;
            }
            null != p4.componentWillUpdate && p4.componentWillUpdate(w4, p4.__s, $3), null != p4.componentDidUpdate && p4.__h.push(function() {
              p4.componentDidUpdate(d4, _4, g4);
            });
          }
          if (p4.context = $3, p4.props = w4, p4.__P = n2, p4.__e = false, S2 = l.__r, A3 = 0, "prototype" in T4 && T4.prototype.render) {
            for (p4.state = p4.__s, p4.__d = false, S2 && S2(u4), a4 = p4.render(p4.props, p4.state, p4.context), H3 = 0; H3 < p4._sb.length; H3++)
              p4.__h.push(p4._sb[H3]);
            p4._sb = [];
          } else
            do {
              p4.__d = false, S2 && S2(u4), a4 = p4.render(p4.props, p4.state, p4.context), p4.state = p4.__s;
            } while (p4.__d && ++A3 < 25);
          p4.state = p4.__s, null != p4.getChildContext && (i3 = v(v({}, i3), p4.getChildContext())), y4 || null == p4.getSnapshotBeforeUpdate || (g4 = p4.getSnapshotBeforeUpdate(d4, _4)), P(n2, h(I3 = null != a4 && a4.type === k && null == a4.key ? a4.props.children : a4) ? I3 : [I3], u4, t3, i3, o5, r5, f4, e3, c4, s4), p4.base = u4.__e, u4.__h = null, p4.__h.length && f4.push(p4), m4 && (p4.__E = p4.__ = null);
        } catch (n3) {
          u4.__v = null, (c4 || null != r5) && (u4.__e = e3, u4.__h = !!c4, r5[r5.indexOf(e3)] = null), l.__e(n3, u4, t3);
        }
      else
        null == r5 && u4.__v === t3.__v ? (u4.__k = t3.__k, u4.__e = t3.__e) : u4.__e = N(t3.__e, u4, t3, i3, o5, r5, f4, c4, s4);
    (a4 = l.diffed) && a4(u4);
  }
  function M(n2, u4, t3) {
    for (var i3 = 0; i3 < t3.length; i3++)
      O(t3[i3], t3[++i3], t3[++i3]);
    l.__c && l.__c(u4, n2), n2.some(function(u5) {
      try {
        n2 = u5.__h, u5.__h = [], n2.some(function(n3) {
          n3.call(u5);
        });
      } catch (n3) {
        l.__e(n3, u5.__v);
      }
    });
  }
  function N(l4, u4, t3, i3, o5, r5, f4, e3, s4) {
    var a4, v4, y4, d4 = t3.props, _4 = u4.props, k4 = u4.type, b4 = 0;
    if ("svg" === k4 && (o5 = true), null != r5) {
      for (; b4 < r5.length; b4++)
        if ((a4 = r5[b4]) && "setAttribute" in a4 == !!k4 && (k4 ? a4.localName === k4 : 3 === a4.nodeType)) {
          l4 = a4, r5[b4] = null;
          break;
        }
    }
    if (null == l4) {
      if (null === k4)
        return document.createTextNode(_4);
      l4 = o5 ? document.createElementNS("http://www.w3.org/2000/svg", k4) : document.createElement(k4, _4.is && _4), r5 = null, e3 = false;
    }
    if (null === k4)
      d4 === _4 || e3 && l4.data === _4 || (l4.data = _4);
    else {
      if (r5 = r5 && n.call(l4.childNodes), v4 = (d4 = t3.props || c).dangerouslySetInnerHTML, y4 = _4.dangerouslySetInnerHTML, !e3) {
        if (null != r5)
          for (d4 = {}, b4 = 0; b4 < l4.attributes.length; b4++)
            d4[l4.attributes[b4].name] = l4.attributes[b4].value;
        (y4 || v4) && (y4 && (v4 && y4.__html == v4.__html || y4.__html === l4.innerHTML) || (l4.innerHTML = y4 && y4.__html || ""));
      }
      if (H(l4, _4, d4, o5, e3), y4)
        u4.__k = [];
      else if (P(l4, h(b4 = u4.props.children) ? b4 : [b4], u4, t3, i3, o5 && "foreignObject" !== k4, r5, f4, r5 ? r5[0] : t3.__k && g(t3, 0), e3, s4), null != r5)
        for (b4 = r5.length; b4--; )
          null != r5[b4] && p(r5[b4]);
      e3 || ("value" in _4 && void 0 !== (b4 = _4.value) && (b4 !== l4.value || "progress" === k4 && !b4 || "option" === k4 && b4 !== d4.value) && T(l4, "value", b4, d4.value, false), "checked" in _4 && void 0 !== (b4 = _4.checked) && b4 !== l4.checked && T(l4, "checked", b4, d4.checked, false));
    }
    return l4;
  }
  function O(n2, u4, t3) {
    try {
      "function" == typeof n2 ? n2(u4) : n2.current = u4;
    } catch (n3) {
      l.__e(n3, t3);
    }
  }
  function q(n2, u4, t3) {
    var i3, o5;
    if (l.unmount && l.unmount(n2), (i3 = n2.ref) && (i3.current && i3.current !== n2.__e || O(i3, null, u4)), null != (i3 = n2.__c)) {
      if (i3.componentWillUnmount)
        try {
          i3.componentWillUnmount();
        } catch (n3) {
          l.__e(n3, u4);
        }
      i3.base = i3.__P = null, n2.__c = void 0;
    }
    if (i3 = n2.__k)
      for (o5 = 0; o5 < i3.length; o5++)
        i3[o5] && q(i3[o5], u4, t3 || "function" != typeof n2.type);
    t3 || null == n2.__e || p(n2.__e), n2.__ = n2.__e = n2.__d = void 0;
  }
  function B(n2, l4, u4) {
    return this.constructor(n2, u4);
  }
  function D(u4, t3, i3) {
    var o5, r5, f4, e3;
    l.__ && l.__(u4, t3), r5 = (o5 = "function" == typeof i3) ? null : i3 && i3.__k || t3.__k, f4 = [], e3 = [], L(t3, u4 = (!o5 && i3 || t3).__k = y(k, null, [u4]), r5 || c, c, void 0 !== t3.ownerSVGElement, !o5 && i3 ? [i3] : r5 ? null : t3.firstChild ? n.call(t3.childNodes) : null, f4, !o5 && i3 ? i3 : r5 ? r5.__e : t3.firstChild, o5, e3), M(f4, u4, e3);
  }
  function F(l4, u4, t3) {
    var i3, o5, r5, f4, e3 = v({}, l4.props);
    for (r5 in l4.type && l4.type.defaultProps && (f4 = l4.type.defaultProps), u4)
      "key" == r5 ? i3 = u4[r5] : "ref" == r5 ? o5 = u4[r5] : e3[r5] = void 0 === u4[r5] && void 0 !== f4 ? f4[r5] : u4[r5];
    return arguments.length > 2 && (e3.children = arguments.length > 3 ? n.call(arguments, 2) : t3), d(l4.type, e3, i3 || l4.key, o5 || l4.ref, null);
  }
  function G(n2, l4) {
    var u4 = { __c: l4 = "__cC" + e++, __: n2, Consumer: function(n3, l5) {
      return n3.children(l5);
    }, Provider: function(n3) {
      var u5, t3;
      return this.getChildContext || (u5 = [], (t3 = {})[l4] = this, this.getChildContext = function() {
        return t3;
      }, this.shouldComponentUpdate = function(n4) {
        this.props.value !== n4.value && u5.some(function(n5) {
          n5.__e = true, w(n5);
        });
      }, this.sub = function(n4) {
        u5.push(n4);
        var l5 = n4.componentWillUnmount;
        n4.componentWillUnmount = function() {
          u5.splice(u5.indexOf(n4), 1), l5 && l5.call(n4);
        };
      }), n3.children;
    } };
    return u4.Provider.__ = u4.Consumer.contextType = u4;
  }
  n = s.slice, l = { __e: function(n2, l4, u4, t3) {
    for (var i3, o5, r5; l4 = l4.__; )
      if ((i3 = l4.__c) && !i3.__)
        try {
          if ((o5 = i3.constructor) && null != o5.getDerivedStateFromError && (i3.setState(o5.getDerivedStateFromError(n2)), r5 = i3.__d), null != i3.componentDidCatch && (i3.componentDidCatch(n2, t3 || {}), r5 = i3.__d), r5)
            return i3.__E = i3;
        } catch (l5) {
          n2 = l5;
        }
    throw n2;
  } }, u = 0, t = function(n2) {
    return null != n2 && void 0 === n2.constructor;
  }, b.prototype.setState = function(n2, l4) {
    var u4;
    u4 = null != this.__s && this.__s !== this.state ? this.__s : this.__s = v({}, this.state), "function" == typeof n2 && (n2 = n2(v({}, u4), this.props)), n2 && v(u4, n2), null != n2 && this.__v && (l4 && this._sb.push(l4), w(this));
  }, b.prototype.forceUpdate = function(n2) {
    this.__v && (this.__e = true, n2 && this.__h.push(n2), w(this));
  }, b.prototype.render = k, i = [], r = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, f = function(n2, l4) {
    return n2.__v.__b - l4.__v.__b;
  }, x.__r = 0, e = 0;

  // ../node_modules/.pnpm/preact@10.17.1/node_modules/preact/devtools/dist/devtools.module.js
  "undefined" != typeof window && window.__PREACT_DEVTOOLS__ && window.__PREACT_DEVTOOLS__.attachPreact("10.17.1", l, { Fragment: k, Component: b });

  // ../node_modules/.pnpm/preact@10.17.1/node_modules/preact/debug/dist/debug.module.js
  function o2(n2, t3) {
    (null == t3 || t3 > n2.length) && (t3 = n2.length);
    for (var e3 = 0, o5 = new Array(t3); e3 < t3; e3++)
      o5[e3] = n2[e3];
    return o5;
  }
  function r2(n2, t3) {
    var e3 = "undefined" != typeof Symbol && n2[Symbol.iterator] || n2["@@iterator"];
    if (e3)
      return (e3 = e3.call(n2)).next.bind(e3);
    if (Array.isArray(n2) || (e3 = function(n3, t4) {
      if (n3) {
        if ("string" == typeof n3)
          return o2(n3, t4);
        var e4 = Object.prototype.toString.call(n3).slice(8, -1);
        return "Object" === e4 && n3.constructor && (e4 = n3.constructor.name), "Map" === e4 || "Set" === e4 ? Array.from(n3) : "Arguments" === e4 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e4) ? o2(n3, t4) : void 0;
      }
    }(n2)) || t3 && n2 && "number" == typeof n2.length) {
      e3 && (n2 = e3);
      var r5 = 0;
      return function() {
        return r5 >= n2.length ? { done: true } : { done: false, value: n2[r5++] };
      };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var a2 = {};
  function c2(t3) {
    return t3.type === k ? "Fragment" : "function" == typeof t3.type ? t3.type.displayName || t3.type.name : "string" == typeof t3.type ? t3.type : "#text";
  }
  var u2 = [];
  var l2 = [];
  function s2() {
    return u2.length > 0 ? u2[u2.length - 1] : null;
  }
  var f2 = false;
  function d2(t3) {
    return "function" == typeof t3.type && t3.type != k;
  }
  function p2(n2) {
    for (var t3 = [n2], e3 = n2; null != e3.__o; )
      t3.push(e3.__o), e3 = e3.__o;
    return t3.reduce(function(n3, t4) {
      n3 += "  in " + c2(t4);
      var e4 = t4.__source;
      return e4 ? n3 += " (at " + e4.fileName + ":" + e4.lineNumber + ")" : f2 || (f2 = true, console.warn("Add @babel/plugin-transform-react-jsx-source to get a more detailed component stack. Note that you should not add it to production builds of your App for bundle size reasons.")), n3 + "\n";
    }, "");
  }
  var h2 = "function" == typeof WeakMap;
  function v2(n2) {
    return n2 ? "function" == typeof n2.type ? null === n2.__ ? null !== n2.__e && null !== n2.__e.parentNode ? n2.__e.parentNode.localName : "" : v2(n2.__) : n2.type : "";
  }
  var y2 = b.prototype.setState;
  b.prototype.setState = function(n2, t3) {
    return null == this.__v && null == this.state && console.warn('Calling "this.setState" inside the constructor of a component is a no-op and might be a bug in your application. Instead, set "this.state = {}" directly.\n\n' + p2(s2())), y2.call(this, n2, t3);
  };
  var m2 = b.prototype.forceUpdate;
  function b2(n2) {
    var t3 = n2.props, e3 = c2(n2), o5 = "";
    for (var r5 in t3)
      if (t3.hasOwnProperty(r5) && "children" !== r5) {
        var a4 = t3[r5];
        "function" == typeof a4 && (a4 = "function " + (a4.displayName || a4.name) + "() {}"), a4 = Object(a4) !== a4 || a4.toString ? a4 + "" : Object.prototype.toString.call(a4), o5 += " " + r5 + "=" + JSON.stringify(a4);
      }
    var i3 = t3.children;
    return "<" + e3 + o5 + (i3 && i3.length ? ">..</" + e3 + ">" : " />");
  }
  b.prototype.forceUpdate = function(n2) {
    return null == this.__v ? console.warn('Calling "this.forceUpdate" inside the constructor of a component is a no-op and might be a bug in your application.\n\n' + p2(s2())) : null == this.__P && console.warn(`Can't call "this.forceUpdate" on an unmounted component. This is a no-op, but it indicates a memory leak in your application. To fix, cancel all subscriptions and asynchronous tasks in the componentWillUnmount method.

` + p2(this.__v)), m2.call(this, n2);
  }, function() {
    !function() {
      var n3 = l.__b, e4 = l.diffed, o6 = l.__, r5 = l.vnode, a4 = l.__r;
      l.diffed = function(n4) {
        d2(n4) && l2.pop(), u2.pop(), e4 && e4(n4);
      }, l.__b = function(t3) {
        d2(t3) && u2.push(t3), n3 && n3(t3);
      }, l.__ = function(n4, t3) {
        l2 = [], o6 && o6(n4, t3);
      }, l.vnode = function(n4) {
        n4.__o = l2.length > 0 ? l2[l2.length - 1] : null, r5 && r5(n4);
      }, l.__r = function(n4) {
        d2(n4) && l2.push(n4), a4 && a4(n4);
      };
    }();
    var n2 = false, e3 = l.__b, o5 = l.diffed, i3 = l.vnode, s4 = l.__r, f4 = l.__e, y4 = l.__, m4 = l.__h, w4 = l.__c, g4 = h2 ? { useEffect: /* @__PURE__ */ new WeakMap(), useLayoutEffect: /* @__PURE__ */ new WeakMap(), lazyPropTypes: /* @__PURE__ */ new WeakMap() } : null, E2 = [], k4 = [];
    l.__e = function(n3, t3, e4, o6) {
      if (t3 && t3.__c && "function" == typeof n3.then) {
        var r5 = n3;
        n3 = new Error("Missing Suspense. The throwing component was: " + c2(t3));
        for (var a4 = t3; a4; a4 = a4.__)
          if (a4.__c && a4.__c.__c) {
            n3 = r5;
            break;
          }
        if (n3 instanceof Error)
          throw n3;
      }
      try {
        (o6 = o6 || {}).componentStack = p2(t3), f4(n3, t3, e4, o6), "function" != typeof n3.then && setTimeout(function() {
          throw n3;
        });
      } catch (n4) {
        throw n4;
      }
    }, l.__ = function(n3, t3) {
      if (!t3)
        throw new Error("Undefined parent passed to render(), this is the second argument.\nCheck if the element is available in the DOM/has the correct id.");
      var e4;
      switch (t3.nodeType) {
        case 1:
        case 11:
        case 9:
          e4 = true;
          break;
        default:
          e4 = false;
      }
      if (!e4) {
        var o6 = c2(n3);
        throw new Error("Expected a valid HTML node as a second argument to render.	Received " + t3 + " instead: render(<" + o6 + " />, " + t3 + ");");
      }
      y4 && y4(n3, t3);
    }, l.__b = function(t3) {
      var o6 = t3.type;
      if ("string" != typeof o6 || "thead" !== o6 && "tfoot" !== o6 && "tbody" !== o6 && "tr" !== o6 && "td" !== o6 && "th" !== o6 || k4.push(t3), n2 = true, void 0 === o6)
        throw new Error("Undefined component passed to createElement()\n\nYou likely forgot to export your component or might have mixed up default and named imports" + b2(t3) + "\n\n" + p2(t3));
      if (null != o6 && "object" == typeof o6) {
        if (void 0 !== o6.__k && void 0 !== o6.__e)
          throw new Error("Invalid type passed to createElement(): " + o6 + "\n\nDid you accidentally pass a JSX literal as JSX twice?\n\n  let My" + c2(t3) + " = " + b2(o6) + ";\n  let vnode = <My" + c2(t3) + " />;\n\nThis usually happens when you export a JSX literal and not the component.\n\n" + p2(t3));
        throw new Error("Invalid type passed to createElement(): " + (Array.isArray(o6) ? "array" : o6));
      }
      if (void 0 !== t3.ref && "function" != typeof t3.ref && "object" != typeof t3.ref && !("$$typeof" in t3))
        throw new Error(`Component's "ref" property should be a function, or an object created by createRef(), but got [` + typeof t3.ref + "] instead\n" + b2(t3) + "\n\n" + p2(t3));
      if ("string" == typeof t3.type) {
        for (var r5 in t3.props)
          if ("o" === r5[0] && "n" === r5[1] && "function" != typeof t3.props[r5] && null != t3.props[r5])
            throw new Error(`Component's "` + r5 + '" property should be a function, but got [' + typeof t3.props[r5] + "] instead\n" + b2(t3) + "\n\n" + p2(t3));
      }
      if ("function" == typeof t3.type && t3.type.propTypes) {
        if ("Lazy" === t3.type.displayName && g4 && !g4.lazyPropTypes.has(t3.type)) {
          var i4 = "PropTypes are not supported on lazy(). Use propTypes on the wrapped component itself. ";
          try {
            var u4 = t3.type();
            g4.lazyPropTypes.set(t3.type, true), console.warn(i4 + "Component wrapped in lazy() is " + c2(u4));
          } catch (n3) {
            console.warn(i4 + "We will log the wrapped component's name once it is loaded.");
          }
        }
        var l4 = t3.props;
        t3.type.__f && delete (l4 = function(n3, t4) {
          for (var e4 in t4)
            n3[e4] = t4[e4];
          return n3;
        }({}, l4)).ref, function(n3, t4, e4, o7, r6) {
          Object.keys(n3).forEach(function(e5) {
            var i5;
            try {
              i5 = n3[e5](t4, e5, o7, "prop", null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (n4) {
              i5 = n4;
            }
            i5 && !(i5.message in a2) && (a2[i5.message] = true, console.error("Failed prop type: " + i5.message + (r6 && "\n" + r6() || "")));
          });
        }(t3.type.propTypes, l4, 0, c2(t3), function() {
          return p2(t3);
        });
      }
      e3 && e3(t3);
    }, l.__r = function(t3) {
      s4 && s4(t3), n2 = true;
    }, l.__h = function(t3, e4, o6) {
      if (!t3 || !n2)
        throw new Error("Hook can only be invoked from render methods.");
      m4 && m4(t3, e4, o6);
    };
    var _4 = function(n3, t3) {
      return { get: function() {
        var e4 = "get" + n3 + t3;
        E2 && E2.indexOf(e4) < 0 && (E2.push(e4), console.warn("getting vnode." + n3 + " is deprecated, " + t3));
      }, set: function() {
        var e4 = "set" + n3 + t3;
        E2 && E2.indexOf(e4) < 0 && (E2.push(e4), console.warn("setting vnode." + n3 + " is not allowed, " + t3));
      } };
    }, j4 = { nodeName: _4("nodeName", "use vnode.type"), attributes: _4("attributes", "use vnode.props"), children: _4("children", "use vnode.props.children") }, I3 = Object.create({}, j4);
    l.vnode = function(n3) {
      var t3 = n3.props;
      if (null !== n3.type && null != t3 && ("__source" in t3 || "__self" in t3)) {
        var e4 = n3.props = {};
        for (var o6 in t3) {
          var r5 = t3[o6];
          "__source" === o6 ? n3.__source = r5 : "__self" === o6 ? n3.__self = r5 : e4[o6] = r5;
        }
      }
      n3.__proto__ = I3, i3 && i3(n3);
    }, l.diffed = function(t3) {
      if (t3.__k && t3.__k.forEach(function(n3) {
        if ("object" == typeof n3 && n3 && void 0 === n3.type) {
          var e5 = Object.keys(n3).join(",");
          throw new Error("Objects are not valid as a child. Encountered an object with the keys {" + e5 + "}.\n\n" + p2(t3));
        }
      }), n2 = false, o5 && o5(t3), null != t3.__k)
        for (var e4 = [], a4 = 0; a4 < t3.__k.length; a4++) {
          var i4 = t3.__k[a4];
          if (i4 && null != i4.key) {
            var u4 = i4.key;
            if (-1 !== e4.indexOf(u4)) {
              console.error('Following component has two or more children with the same key attribute: "' + u4 + '". This may cause glitches and misbehavior in rendering process. Component: \n\n' + b2(t3) + "\n\n" + p2(t3));
              break;
            }
            e4.push(u4);
          }
        }
      if (null != t3.__c && null != t3.__c.__H) {
        var l4 = t3.__c.__H.__;
        if (l4)
          for (var s5 = 0; s5 < l4.length; s5 += 1) {
            var f5 = l4[s5];
            if (f5.__H) {
              for (var d4, h4 = r2(f5.__H); !(d4 = h4()).done; )
                if ((y5 = d4.value) != y5) {
                  var v4 = c2(t3);
                  throw new Error("Invalid argument passed to hook. Hooks should not be called with NaN in the dependency array. Hook index " + s5 + " in component " + v4 + " was called with NaN.");
                }
            }
          }
      }
      var y5;
    }, l.__c = function(n3, t3) {
      for (var e4 = 0; e4 < k4.length; e4++) {
        var o6 = k4[e4], r5 = o6.type, a4 = v2(o6.__);
        "thead" !== r5 && "tfoot" !== r5 && "tbody" !== r5 || "table" === a4 ? "tr" === r5 && "thead" !== a4 && "tfoot" !== a4 && "tbody" !== a4 && "table" !== a4 ? console.error("Improper nesting of table. Your <tr> should have a <thead/tbody/tfoot/table> parent." + b2(o6) + "\n\n" + p2(o6)) : "td" === r5 && "tr" !== a4 ? console.error("Improper nesting of table. Your <td> should have a <tr> parent." + b2(o6) + "\n\n" + p2(o6)) : "th" === r5 && "tr" !== a4 && console.error("Improper nesting of table. Your <th> should have a <tr>." + b2(o6) + "\n\n" + p2(o6)) : console.error("Improper nesting of table. Your <thead/tbody/tfoot> should have a <table> parent." + b2(o6) + "\n\n" + p2(o6));
      }
      k4 = [], w4 && w4(n3, t3);
    };
  }();

  // ../node_modules/.pnpm/preact@10.17.1/node_modules/preact/hooks/dist/hooks.module.js
  var t2;
  var r3;
  var u3;
  var i2;
  var o3 = 0;
  var f3 = [];
  var c3 = [];
  var e2 = l.__b;
  var a3 = l.__r;
  var v3 = l.diffed;
  var l3 = l.__c;
  var m3 = l.unmount;
  function d3(t3, u4) {
    l.__h && l.__h(r3, t3, o3 || u4), o3 = 0;
    var i3 = r3.__H || (r3.__H = { __: [], __h: [] });
    return t3 >= i3.__.length && i3.__.push({ __V: c3 }), i3.__[t3];
  }
  function h3(n2) {
    return o3 = 1, s3(B2, n2);
  }
  function s3(n2, u4, i3) {
    var o5 = d3(t2++, 2);
    if (o5.t = n2, !o5.__c && (o5.__ = [i3 ? i3(u4) : B2(void 0, u4), function(n3) {
      var t3 = o5.__N ? o5.__N[0] : o5.__[0], r5 = o5.t(t3, n3);
      t3 !== r5 && (o5.__N = [r5, o5.__[1]], o5.__c.setState({}));
    }], o5.__c = r3, !r3.u)) {
      var f4 = function(n3, t3, r5) {
        if (!o5.__c.__H)
          return true;
        var u5 = o5.__c.__H.__.filter(function(n4) {
          return n4.__c;
        });
        if (u5.every(function(n4) {
          return !n4.__N;
        }))
          return !c4 || c4.call(this, n3, t3, r5);
        var i4 = false;
        return u5.forEach(function(n4) {
          if (n4.__N) {
            var t4 = n4.__[0];
            n4.__ = n4.__N, n4.__N = void 0, t4 !== n4.__[0] && (i4 = true);
          }
        }), !(!i4 && o5.__c.props === n3) && (!c4 || c4.call(this, n3, t3, r5));
      };
      r3.u = true;
      var c4 = r3.shouldComponentUpdate, e3 = r3.componentWillUpdate;
      r3.componentWillUpdate = function(n3, t3, r5) {
        if (this.__e) {
          var u5 = c4;
          c4 = void 0, f4(n3, t3, r5), c4 = u5;
        }
        e3 && e3.call(this, n3, t3, r5);
      }, r3.shouldComponentUpdate = f4;
    }
    return o5.__N || o5.__;
  }
  function p3(u4, i3) {
    var o5 = d3(t2++, 3);
    !l.__s && z2(o5.__H, i3) && (o5.__ = u4, o5.i = i3, r3.__H.__h.push(o5));
  }
  function y3(u4, i3) {
    var o5 = d3(t2++, 4);
    !l.__s && z2(o5.__H, i3) && (o5.__ = u4, o5.i = i3, r3.__h.push(o5));
  }
  function _(n2) {
    return o3 = 5, F2(function() {
      return { current: n2 };
    }, []);
  }
  function A2(n2, t3, r5) {
    o3 = 6, y3(function() {
      return "function" == typeof n2 ? (n2(t3()), function() {
        return n2(null);
      }) : n2 ? (n2.current = t3(), function() {
        return n2.current = null;
      }) : void 0;
    }, null == r5 ? r5 : r5.concat(n2));
  }
  function F2(n2, r5) {
    var u4 = d3(t2++, 7);
    return z2(u4.__H, r5) ? (u4.__V = n2(), u4.i = r5, u4.__h = n2, u4.__V) : u4.__;
  }
  function T2(n2, t3) {
    return o3 = 8, F2(function() {
      return n2;
    }, t3);
  }
  function q2(n2) {
    var u4 = r3.context[n2.__c], i3 = d3(t2++, 9);
    return i3.c = n2, u4 ? (null == i3.__ && (i3.__ = true, u4.sub(r3)), u4.props.value) : n2.__;
  }
  function V() {
    var n2 = d3(t2++, 11);
    if (!n2.__) {
      for (var u4 = r3.__v; null !== u4 && !u4.__m && null !== u4.__; )
        u4 = u4.__;
      var i3 = u4.__m || (u4.__m = [0, 0]);
      n2.__ = "P" + i3[0] + "-" + i3[1]++;
    }
    return n2.__;
  }
  function b3() {
    for (var t3; t3 = f3.shift(); )
      if (t3.__P && t3.__H)
        try {
          t3.__H.__h.forEach(k2), t3.__H.__h.forEach(w2), t3.__H.__h = [];
        } catch (r5) {
          t3.__H.__h = [], l.__e(r5, t3.__v);
        }
  }
  l.__b = function(n2) {
    r3 = null, e2 && e2(n2);
  }, l.__r = function(n2) {
    a3 && a3(n2), t2 = 0;
    var i3 = (r3 = n2.__c).__H;
    i3 && (u3 === r3 ? (i3.__h = [], r3.__h = [], i3.__.forEach(function(n3) {
      n3.__N && (n3.__ = n3.__N), n3.__V = c3, n3.__N = n3.i = void 0;
    })) : (i3.__h.forEach(k2), i3.__h.forEach(w2), i3.__h = [], t2 = 0)), u3 = r3;
  }, l.diffed = function(t3) {
    v3 && v3(t3);
    var o5 = t3.__c;
    o5 && o5.__H && (o5.__H.__h.length && (1 !== f3.push(o5) && i2 === l.requestAnimationFrame || ((i2 = l.requestAnimationFrame) || j2)(b3)), o5.__H.__.forEach(function(n2) {
      n2.i && (n2.__H = n2.i), n2.__V !== c3 && (n2.__ = n2.__V), n2.i = void 0, n2.__V = c3;
    })), u3 = r3 = null;
  }, l.__c = function(t3, r5) {
    r5.some(function(t4) {
      try {
        t4.__h.forEach(k2), t4.__h = t4.__h.filter(function(n2) {
          return !n2.__ || w2(n2);
        });
      } catch (u4) {
        r5.some(function(n2) {
          n2.__h && (n2.__h = []);
        }), r5 = [], l.__e(u4, t4.__v);
      }
    }), l3 && l3(t3, r5);
  }, l.unmount = function(t3) {
    m3 && m3(t3);
    var r5, u4 = t3.__c;
    u4 && u4.__H && (u4.__H.__.forEach(function(n2) {
      try {
        k2(n2);
      } catch (n3) {
        r5 = n3;
      }
    }), u4.__H = void 0, r5 && l.__e(r5, u4.__v));
  };
  var g2 = "function" == typeof requestAnimationFrame;
  function j2(n2) {
    var t3, r5 = function() {
      clearTimeout(u4), g2 && cancelAnimationFrame(t3), setTimeout(n2);
    }, u4 = setTimeout(r5, 100);
    g2 && (t3 = requestAnimationFrame(r5));
  }
  function k2(n2) {
    var t3 = r3, u4 = n2.__c;
    "function" == typeof u4 && (n2.__c = void 0, u4()), r3 = t3;
  }
  function w2(n2) {
    var t3 = r3;
    n2.__c = n2.__(), r3 = t3;
  }
  function z2(n2, t3) {
    return !n2 || n2.length !== t3.length || t3.some(function(t4, r5) {
      return t4 !== n2[r5];
    });
  }
  function B2(n2, t3) {
    return "function" == typeof t3 ? t3(n2) : t3;
  }

  // ../node_modules/.pnpm/preact@10.17.1/node_modules/preact/compat/dist/compat.module.js
  function g3(n2, t3) {
    for (var e3 in t3)
      n2[e3] = t3[e3];
    return n2;
  }
  function C2(n2, t3) {
    for (var e3 in n2)
      if ("__source" !== e3 && !(e3 in t3))
        return true;
    for (var r5 in t3)
      if ("__source" !== r5 && n2[r5] !== t3[r5])
        return true;
    return false;
  }
  function w3(n2) {
    this.props = n2;
  }
  function x3(n2, e3) {
    function r5(n3) {
      var t3 = this.props.ref, r6 = t3 == n3.ref;
      return !r6 && t3 && (t3.call ? t3(null) : t3.current = null), e3 ? !e3(this.props, n3) || !r6 : C2(this.props, n3);
    }
    function u4(e4) {
      return this.shouldComponentUpdate = r5, y(n2, e4);
    }
    return u4.displayName = "Memo(" + (n2.displayName || n2.name) + ")", u4.prototype.isReactComponent = true, u4.__f = true, u4;
  }
  (w3.prototype = new b()).isPureReactComponent = true, w3.prototype.shouldComponentUpdate = function(n2, t3) {
    return C2(this.props, n2) || C2(this.state, t3);
  };
  var R = l.__b;
  l.__b = function(n2) {
    n2.type && n2.type.__f && n2.ref && (n2.props.ref = n2.ref, n2.ref = null), R && R(n2);
  };
  var N2 = "undefined" != typeof Symbol && Symbol.for && Symbol.for("react.forward_ref") || 3911;
  function k3(n2) {
    function t3(t4) {
      var e3 = g3({}, t4);
      return delete e3.ref, n2(e3, t4.ref || null);
    }
    return t3.$$typeof = N2, t3.render = t3, t3.prototype.isReactComponent = t3.__f = true, t3.displayName = "ForwardRef(" + (n2.displayName || n2.name) + ")", t3;
  }
  var T3 = l.__e;
  l.__e = function(n2, t3, e3, r5) {
    if (n2.then) {
      for (var u4, o5 = t3; o5 = o5.__; )
        if ((u4 = o5.__c) && u4.__c)
          return null == t3.__e && (t3.__e = e3.__e, t3.__k = e3.__k), u4.__c(n2, t3);
    }
    T3(n2, t3, e3, r5);
  };
  var F3 = l.unmount;
  function I2(n2, t3, e3) {
    return n2 && (n2.__c && n2.__c.__H && (n2.__c.__H.__.forEach(function(n3) {
      "function" == typeof n3.__c && n3.__c();
    }), n2.__c.__H = null), null != (n2 = g3({}, n2)).__c && (n2.__c.__P === e3 && (n2.__c.__P = t3), n2.__c = null), n2.__k = n2.__k && n2.__k.map(function(n3) {
      return I2(n3, t3, e3);
    })), n2;
  }
  function L2(n2, t3, e3) {
    return n2 && (n2.__v = null, n2.__k = n2.__k && n2.__k.map(function(n3) {
      return L2(n3, t3, e3);
    }), n2.__c && n2.__c.__P === t3 && (n2.__e && e3.insertBefore(n2.__e, n2.__d), n2.__c.__e = true, n2.__c.__P = e3)), n2;
  }
  function U() {
    this.__u = 0, this.t = null, this.__b = null;
  }
  function D2(n2) {
    var t3 = n2.__.__c;
    return t3 && t3.__a && t3.__a(n2);
  }
  function V2() {
    this.u = null, this.o = null;
  }
  l.unmount = function(n2) {
    var t3 = n2.__c;
    t3 && t3.__R && t3.__R(), t3 && true === n2.__h && (n2.type = null), F3 && F3(n2);
  }, (U.prototype = new b()).__c = function(n2, t3) {
    var e3 = t3.__c, r5 = this;
    null == r5.t && (r5.t = []), r5.t.push(e3);
    var u4 = D2(r5.__v), o5 = false, i3 = function() {
      o5 || (o5 = true, e3.__R = null, u4 ? u4(l4) : l4());
    };
    e3.__R = i3;
    var l4 = function() {
      if (!--r5.__u) {
        if (r5.state.__a) {
          var n3 = r5.state.__a;
          r5.__v.__k[0] = L2(n3, n3.__c.__P, n3.__c.__O);
        }
        var t4;
        for (r5.setState({ __a: r5.__b = null }); t4 = r5.t.pop(); )
          t4.forceUpdate();
      }
    }, c4 = true === t3.__h;
    r5.__u++ || c4 || r5.setState({ __a: r5.__b = r5.__v.__k[0] }), n2.then(i3, i3);
  }, U.prototype.componentWillUnmount = function() {
    this.t = [];
  }, U.prototype.render = function(n2, e3) {
    if (this.__b) {
      if (this.__v.__k) {
        var r5 = document.createElement("div"), o5 = this.__v.__k[0].__c;
        this.__v.__k[0] = I2(this.__b, r5, o5.__O = o5.__P);
      }
      this.__b = null;
    }
    var i3 = e3.__a && y(k, null, n2.fallback);
    return i3 && (i3.__h = null), [y(k, null, e3.__a ? null : n2.children), i3];
  };
  var W = function(n2, t3, e3) {
    if (++e3[1] === e3[0] && n2.o.delete(t3), n2.props.revealOrder && ("t" !== n2.props.revealOrder[0] || !n2.o.size))
      for (e3 = n2.u; e3; ) {
        for (; e3.length > 3; )
          e3.pop()();
        if (e3[1] < e3[0])
          break;
        n2.u = e3 = e3[2];
      }
  };
  function P2(n2) {
    return this.getChildContext = function() {
      return n2.context;
    }, n2.children;
  }
  function j3(n2) {
    var e3 = this, r5 = n2.i;
    e3.componentWillUnmount = function() {
      D(null, e3.l), e3.l = null, e3.i = null;
    }, e3.i && e3.i !== r5 && e3.componentWillUnmount(), e3.l || (e3.i = r5, e3.l = { nodeType: 1, parentNode: r5, childNodes: [], appendChild: function(n3) {
      this.childNodes.push(n3), e3.i.appendChild(n3);
    }, insertBefore: function(n3, t3) {
      this.childNodes.push(n3), e3.i.appendChild(n3);
    }, removeChild: function(n3) {
      this.childNodes.splice(this.childNodes.indexOf(n3) >>> 1, 1), e3.i.removeChild(n3);
    } }), D(y(P2, { context: e3.context }, n2.__v), e3.l);
  }
  function z3(n2, e3) {
    var r5 = y(j3, { __v: n2, i: e3 });
    return r5.containerInfo = e3, r5;
  }
  (V2.prototype = new b()).__a = function(n2) {
    var t3 = this, e3 = D2(t3.__v), r5 = t3.o.get(n2);
    return r5[0]++, function(u4) {
      var o5 = function() {
        t3.props.revealOrder ? (r5.push(u4), W(t3, n2, r5)) : u4();
      };
      e3 ? e3(o5) : o5();
    };
  }, V2.prototype.render = function(n2) {
    this.u = null, this.o = /* @__PURE__ */ new Map();
    var t3 = C(n2.children);
    n2.revealOrder && "b" === n2.revealOrder[0] && t3.reverse();
    for (var e3 = t3.length; e3--; )
      this.o.set(t3[e3], this.u = [1, 0, this.u]);
    return n2.children;
  }, V2.prototype.componentDidUpdate = V2.prototype.componentDidMount = function() {
    var n2 = this;
    this.o.forEach(function(t3, e3) {
      W(n2, e3, t3);
    });
  };
  var B3 = "undefined" != typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103;
  var H2 = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/;
  var Z = /^on(Ani|Tra|Tou|BeforeInp|Compo)/;
  var Y = /[A-Z0-9]/g;
  var $2 = "undefined" != typeof document;
  var q3 = function(n2) {
    return ("undefined" != typeof Symbol && "symbol" == typeof Symbol() ? /fil|che|rad/ : /fil|che|ra/).test(n2);
  };
  b.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(t3) {
    Object.defineProperty(b.prototype, t3, { configurable: true, get: function() {
      return this["UNSAFE_" + t3];
    }, set: function(n2) {
      Object.defineProperty(this, t3, { configurable: true, writable: true, value: n2 });
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
  l.event = function(n2) {
    return K && (n2 = K(n2)), n2.persist = Q, n2.isPropagationStopped = X, n2.isDefaultPrevented = nn, n2.nativeEvent = n2;
  };
  var tn;
  var en = { enumerable: false, configurable: true, get: function() {
    return this.class;
  } };
  var rn = l.vnode;
  l.vnode = function(n2) {
    "string" == typeof n2.type && function(n3) {
      var t3 = n3.props, e3 = n3.type, u4 = {};
      for (var o5 in t3) {
        var i3 = t3[o5];
        if (!("value" === o5 && "defaultValue" in t3 && null == i3 || $2 && "children" === o5 && "noscript" === e3 || "class" === o5 || "className" === o5)) {
          var l4 = o5.toLowerCase();
          "defaultValue" === o5 && "value" in t3 && null == t3.value ? o5 = "value" : "download" === o5 && true === i3 ? i3 = "" : "ondoubleclick" === l4 ? o5 = "ondblclick" : "onchange" !== l4 || "input" !== e3 && "textarea" !== e3 || q3(t3.type) ? "onfocus" === l4 ? o5 = "onfocusin" : "onblur" === l4 ? o5 = "onfocusout" : Z.test(o5) ? o5 = l4 : -1 === e3.indexOf("-") && H2.test(o5) ? o5 = o5.replace(Y, "-$&").toLowerCase() : null === i3 && (i3 = void 0) : l4 = o5 = "oninput", "oninput" === l4 && u4[o5 = l4] && (o5 = "oninputCapture"), u4[o5] = i3;
        }
      }
      "select" == e3 && u4.multiple && Array.isArray(u4.value) && (u4.value = C(t3.children).forEach(function(n4) {
        n4.props.selected = -1 != u4.value.indexOf(n4.props.value);
      })), "select" == e3 && null != u4.defaultValue && (u4.value = C(t3.children).forEach(function(n4) {
        n4.props.selected = u4.multiple ? -1 != u4.defaultValue.indexOf(n4.props.value) : u4.defaultValue == n4.props.value;
      })), t3.class && !t3.className ? (u4.class = t3.class, Object.defineProperty(u4, "className", en)) : (t3.className && !t3.class || t3.class && t3.className) && (u4.class = u4.className = t3.className), n3.props = u4;
    }(n2), n2.$$typeof = B3, rn && rn(n2);
  };
  var un = l.__r;
  l.__r = function(n2) {
    un && un(n2), tn = n2.__c;
  };
  var on = l.diffed;
  l.diffed = function(n2) {
    on && on(n2);
    var t3 = n2.props, e3 = n2.__e;
    null != e3 && "textarea" === n2.type && "value" in t3 && t3.value !== e3.value && (e3.value = null == t3.value ? "" : t3.value), tn = null;
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
  var originalCommit = l[commitName];
  l[commitName] = newCommit;
  var incrementingId = 0;
  function nextId() {
    let next = ++incrementingId;
    if (incrementingId >= Number.MAX_SAFE_INTEGER)
      incrementingId = -Number.MAX_SAFE_INTEGER;
    return next;
  }
  var useBeforeLayoutEffect = function useBeforeLayoutEffect2(effect, inputs) {
    const ref = _(null);
    ref.current ??= nextId();
    const id = ref.current;
    if (effect)
      toRun.set(id, { effect, inputs, cleanup: null });
    else
      toRun.delete(id);
  };
  function argsChanged(oldArgs, newArgs) {
    return !!(!oldArgs || oldArgs.length !== newArgs?.length || newArgs?.some((arg, index) => arg !== oldArgs[index]));
  }

  // ../dist/util/lib-preact.js
  function debounceRendering(f4) {
    (l.debounceRendering ?? queueMicrotask)(f4);
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
    if (true)
      return;
    const helperToEnsureStability = _([]);
    const shownError = _([]);
    useHelper(values2.length, -1);
    values2.forEach(useHelper);
    return;
    function useHelper(value, i3) {
      const index = i3 + 1;
      if (helperToEnsureStability.current[index] === void 0)
        helperToEnsureStability.current[index] = value;
      if (helperToEnsureStability.current[index] != value) {
        if (!shownError.current[index]) {
          debugger;
          console.error(`The hook ${parentHookName} requires some or all of its arguments remain stable across each render; please check the ${i3}-indexed argument (${i3 >= 0 ? JSON.stringify(values2[i3]) : "the number of supposedly stable elements"}).`);
          shownError.current[index] = true;
        }
      }
    }
  }
  var usePassiveState = function usePassiveState2(onChange, getInitialValue, customDebounceRendering) {
    const valueRef = _(Unset);
    const reasonRef = _(Unset);
    const warningRef = _(false);
    const dependencyToCompareAgainst = _(Unset);
    const cleanupCallbackRef = _(void 0);
    useEnsureStability("usePassiveState", onChange, getInitialValue, customDebounceRendering);
    const onShouldCleanUp = T2(() => {
      const cleanupCallback = cleanupCallbackRef.current;
      if (cleanupCallback)
        cleanupCallback();
    }, []);
    const tryEnsureValue = T2(() => {
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
    const getValue = T2(() => {
      if (warningRef.current)
        console.warn("During onChange, prefer using the (value, prevValue) arguments instead of getValue -- it's ambiguous as to if you're asking for the old or new value at this point in time for this component.");
      if (valueRef.current === Unset)
        tryEnsureValue();
      return valueRef.current === Unset ? void 0 : valueRef.current;
    }, []);
    y3(() => {
      tryEnsureValue();
    }, []);
    const setValue = T2((arg, reason) => {
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
  };
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
  function runImmediately(f4) {
    f4();
  }

  // ../dist/preact-extensions/use-stable-getter.js
  var Unset2 = Symbol("unset");
  var useStableGetter = function useStableGetter2(value) {
    const ref = _(Unset2);
    useBeforeLayoutEffect(() => {
      ref.current = value;
    }, [value]);
    return T2(() => {
      if (ref.current === Unset2) {
        throw new Error("Value retrieved from useStableGetter() cannot be called during render.");
      }
      return ref.current;
    }, []);
  };
  function useMemoObject(t3) {
    return F2(() => {
      return t3;
    }, Object.values(t3));
  }

  // ../dist/preact-extensions/use-stable-callback.js
  var map = /* @__PURE__ */ new WeakMap();
  function isStableGetter(obj) {
    return false;
    return map.get(obj) ?? false;
  }
  function setIsStableGetter(obj) {
    return obj;
    map.set(obj, true);
    return obj;
  }
  var useStableCallback = function useStableCallback2(fn, noDeps) {
    useEnsureStability("useStableCallback", noDeps == null, noDeps?.length, isStableGetter(fn));
    if (isStableGetter(fn))
      return fn;
    if (noDeps == null) {
      const currentCallbackGetter = useStableGetter(fn);
      return setIsStableGetter(T2((...args) => {
        return currentCallbackGetter()(...args);
      }, []));
    } else {
      console.assert(noDeps.length === 0);
      return setIsStableGetter(T2(fn, []));
    }
  };

  // ../dist/util/mode.js
  globalThis["process"] ??= {};
  globalThis["process"]["env"] ??= {};
  globalThis["process"]["env"]["NODE_ENV"] = "production";

  // ../dist/util/use-call-count.js
  window.requestIdleCallback ??= (callback) => {
    return setTimeout(() => {
      callback({ didTimeout: false, timeRemaining: () => {
        return 0;
      } });
    }, 5);
  };
  function monitored(hook) {
    const h4 = hook;
    if (false) {
      return function(...args) {
        const r5 = _(++i);
        monitorCallCount(h4);
        const start = performance.mark(`${h4.name}-start-${r5.current}`);
        const ret = h4(...args);
        const end = performance.mark(`${h4.name}-end-${r5.current}`);
        performance.measure(h4.name, start.name, end.name);
        return ret;
      };
    } else {
      return hook;
    }
  }

  // ../dist/dom-helpers/use-event-handler.js
  var useGlobalHandler = monitored(function useGlobalHandler2(target, type, handler, options, mode) {
    mode ||= "grouped";
    useEnsureStability("useGlobalHandler", mode);
    if (mode === "grouped") {
      useGlobalHandlerGrouped(target, type, handler, options);
    } else {
      useGlobalHandlerSingle(target, type, handler, options);
    }
  });
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
    doMapThing((info, h4) => {
      info.listeners.add(h4);
      if (info.listener == null)
        target.addEventListener(type, info.listener = (e3) => info.listeners.forEach((fn) => fn(e3)), options);
    }, target, type, handler, options);
  }
  function removeFromMapThing(target, type, handler, options) {
    doMapThing((info, h4) => {
      info.listeners.delete(h4);
      if (info.listener == null)
        target.removeEventListener(type, info.listener = (e3) => info.listeners.forEach((fn) => fn(e3)), options);
    }, target, type, handler, options);
  }
  function useGlobalHandlerGrouped(target, type, handler, options) {
    let stableHandler = useStableCallback(handler ?? (() => {
    }));
    if (handler == null)
      stableHandler = null;
    p3(() => {
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
    p3(() => {
      if (stableHandler) {
        target.addEventListener(type, stableHandler, options);
        return () => target.removeEventListener(type, stableHandler, options);
      }
    }, [target, type, stableHandler]);
  }

  // ../dist/util/assert.js
  function assertEmptyObject(_a) {
  }

  // ../dist/timing/use-timeout.js
  var useTimeout = monitored(function useTimeout2({ timeout, callback, triggerIndex }) {
    const stableCallback = useStableCallback(() => {
      startTimeRef.current = null;
      callback();
    });
    const getTimeout = useStableGetter(timeout);
    const startTimeRef = _(null);
    const timeoutIsNull = timeout == null;
    p3(() => {
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
    const getElapsedTime = T2(() => {
      return +/* @__PURE__ */ new Date() - +(startTimeRef.current ?? /* @__PURE__ */ new Date());
    }, []);
    const getRemainingTime = T2(() => {
      const timeout2 = getTimeout();
      return timeout2 == null ? null : Math.max(0, timeout2 - getElapsedTime());
    }, []);
    return { getElapsedTime, getRemainingTime };
  });

  // ../dist/util/stack.js
  function useStack() {
    if (false) {
      const stack = F2(generateStack, []);
      const getStack = T2(() => stack, []);
      return getStack;
    } else {
      return returnEmptyString;
    }
  }
  function returnEmptyString() {
    return "";
  }

  // ../dist/util/use-tag-props.js
  function useTagProps(props, tag) {
    if (false) {
      const [id] = h3(() => ++idIndex);
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
      return F2(() => {
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

  // ../dist/dom-helpers/use-ref-element.js
  var P3 = `PropNames.RefElementParameters`;
  var R2 = `PropNames.RefElementReturn`;
  var PropNames_RefElementParameters_onElementChange = `${P3}.onElementChange`;
  var PropNames_RefElementParameters_onMount = `${P3}.onMount`;
  var PropNames_RefElementParameters_onUnmount = `${P3}.onUnmount`;
  var PropNames_RefElementReturn_getElement = `${R2}.getElement`;
  var useRefElement = monitored(function useRefElement2({ [PropNames_RefElementParameters_onElementChange]: onElementChange, [PropNames_RefElementParameters_onMount]: onMount, [PropNames_RefElementParameters_onUnmount]: onUnmount, ...void1 }) {
    useEnsureStability("useRefElement", onElementChange, onMount, onUnmount);
    let nonElementWarn;
    if (false) {
      nonElementWarn = _(false);
      if (nonElementWarn.current) {
        nonElementWarn.current = false;
        console.assert(false, `useRefElement was used on a component that didn't forward its ref onto a DOM element, so it's attached to that component's VNode instead.`);
      }
    }
    const handler = T2((e3, prevValue) => {
      if (!(e3 == null || e3 instanceof Element)) {
        console.assert(e3 == null || e3 instanceof Element, `useRefElement was used on a component that didn't forward its ref onto a DOM element, so it's attached to that component's VNode instead.`);
        if (nonElementWarn)
          nonElementWarn.current = true;
      }
      const cleanup = onElementChange?.(e3, prevValue);
      if (prevValue)
        onUnmount?.(prevValue);
      if (e3)
        onMount?.(e3);
      return cleanup;
    }, []);
    const [getElement, setElement] = usePassiveState(handler, returnNull, runImmediately);
    const propsStable = _(useTagProps({ ref: setElement }, "data-use-ref-element"));
    assertEmptyObject(void1);
    return {
      [PropNames_RefElementReturn_getElement]: getElement,
      props: propsStable.current
    };
  });

  // ../dist/component-detail/dismissal/use-backdrop-dismiss.js
  var P4 = `PropNames.BackdropDismissParameters`;
  var PropNames_BackdropDismissParameters_dismissBackdropActive = `${P4}.dismissBackdropActive`;
  var PropNames_BackdropDismissParameters_onDismissBackdrop = `${P4}.onDismissBackdrop`;
  var useBackdropDismiss = monitored(function useBackdropDismiss2({ [PropNames_BackdropDismissParameters_dismissBackdropActive]: open, [PropNames_BackdropDismissParameters_onDismissBackdrop]: onCloseUnstable, [PropNames_RefElementReturn_getElement]: getElement, ..._void2 }) {
    assertEmptyObject(_void2);
    const getOpen = useStableGetter(open);
    const onClose = useStableGetter(onCloseUnstable);
    const onBackdropClick = T2(function onBackdropClick2(e3) {
      if (!getOpen())
        return;
      let element = getElement();
      let foundInsideClick = false;
      if (e3.target && element && element.contains(e3.target)) {
        foundInsideClick = true;
      }
      if (!foundInsideClick) {
        onClose()?.(e3);
      }
    }, []);
    useGlobalHandler(window, "mousedown", open ? onBackdropClick : null, { capture: true });
    useGlobalHandler(window, "touchstart", open ? onBackdropClick : null, { capture: true });
  });

  // ../dist/util/event.js
  var EventDetail = Symbol("event-detail");
  function enhanceEvent(e3, detail) {
    const event = e3 ?? {};
    event[EventDetail] ??= {};
    Object.assign(event[EventDetail], detail);
    return event;
  }

  // ../dist/component-detail/dismissal/use-escape-dismiss.js
  var P5 = `PropNames.EscapeDismissParameters`;
  var PropNames_EscapeDismissParameters_dismissEscapeActive = `${P5}.dismissEscapeActive`;
  var PropNames_EscapeDismissParameters_onDismissEscape = `${P5}.onDismissEscape`;
  var PropNames_EscapeDismissParameters_getDocument = `${P5}.getDocument`;
  var PropNames_EscapeDismissParameters_parentDepth = `${P5}.parentDepth`;
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
  var useEscapeDismiss = monitored(function useEscapeDismiss2({ [PropNames_EscapeDismissParameters_onDismissEscape]: onClose, [PropNames_EscapeDismissParameters_dismissEscapeActive]: open, [PropNames_EscapeDismissParameters_getDocument]: unstableGetDocument, [PropNames_EscapeDismissParameters_parentDepth]: parentDepth, [PropNames_RefElementReturn_getElement]: getElement, ..._void1 }) {
    assertEmptyObject(_void1);
    const stableOnClose = useStableGetter(onClose);
    const getDocument2 = useStableCallback(unstableGetDocument);
    const getDepth = useStableGetter(parentDepth + 1);
    p3(() => {
      const document2 = getDocument2();
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
      function handler(e3) {
        if (e3.key == "Escape") {
          e3.preventDefault();
          e3.stopPropagation();
          const onClose2 = () => {
            stableOnClose()?.(enhanceEvent(e3, { reason: "escape" }));
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
  });

  // ../node_modules/.pnpm/github.com+mwszekely+map-and-set-extensions@ff68a36e0f4a700fd6612ee30cca86855891f623/node_modules/map-and-set-extensions/dist/es/index.js
  var _BimapExclusive_impl;
  _BimapExclusive_impl = /* @__PURE__ */ new WeakMap();
  var _BimapMixed_implLeft;
  var _BimapMixed_implRight;
  _BimapMixed_implLeft = /* @__PURE__ */ new WeakMap(), _BimapMixed_implRight = /* @__PURE__ */ new WeakMap();
  var MapOfSets = {
    add: (map2, key, value) => {
      var _a;
      let set = (_a = map2.get(key)) !== null && _a !== void 0 ? _a : /* @__PURE__ */ new Set();
      set.add(value);
      map2.set(key, set);
      return map2;
    },
    /**
     * Removes this `value` from the `Set` associated with `key`. Does not remove the `Set` itself, even if it becomes empty.
     */
    delete: (map2, key, value) => {
      var _a;
      let set = (_a = map2.get(key)) !== null && _a !== void 0 ? _a : /* @__PURE__ */ new Set();
      let ret = set.delete(value);
      map2.set(key, set);
      return ret;
    },
    has: (map2, key, value) => {
      var _a, _b;
      return (_b = (_a = map2.get(key)) === null || _a === void 0 ? void 0 : _a.has(value)) !== null && _b !== void 0 ? _b : false;
    }
  };

  // ../dist/observers/use-active-element.js
  var P6 = `PropNames.ActiveElementParameters`;
  var R3 = `PropNames.ActiveElementReturn`;
  var PropNames_ActiveElementParameters_onActiveElementChange = `${P6}.onActiveElementChange`;
  var PropNames_ActiveElementParameters_onLastActiveElementChange = `${P6}.onLastActiveElementChange`;
  var PropNames_ActiveElementParameters_onWindowFocusedChange = `${P6}.onWindowFocusedChange`;
  var PropNames_ActiveElementParameters_getDocument = `${P6}.getDocument`;
  var PropNames_ActiveElementReturn_getActiveElement = `${R3}.getActiveElement`;
  var PropNames_ActiveElementReturn_getLastActiveElement = `${R3}.getLastActiveElement`;
  var PropNames_ActiveElementReturn_getWindowFocused = `${R3}.getWindowFocused`;
  var useActiveElement = monitored(function useActiveElement2({ [PropNames_ActiveElementParameters_onActiveElementChange]: onActiveElementChange, [PropNames_ActiveElementParameters_onLastActiveElementChange]: onLastActiveElementChange, [PropNames_ActiveElementParameters_onWindowFocusedChange]: onWindowFocusedChange, [PropNames_ActiveElementParameters_getDocument]: getDocument2 }) {
    useEnsureStability("useActiveElement", onActiveElementChange, onLastActiveElementChange, onWindowFocusedChange, getDocument2);
    p3(() => {
      const document2 = getDocument2();
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
    return {
      [PropNames_ActiveElementReturn_getActiveElement]: getActiveElement,
      [PropNames_ActiveElementReturn_getLastActiveElement]: getLastActiveElement,
      [PropNames_ActiveElementReturn_getWindowFocused]: getWindowFocused
    };
  });
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
  function focusout(e3) {
    const window2 = e3.target.ownerDocument.defaultView;
    if (e3.relatedTarget == null) {
      forEachUpdater(window2, activeElementUpdaters, null, e3);
    } else {
    }
  }
  function focusin(e3) {
    const window2 = e3.target.ownerDocument.defaultView;
    const currentlyFocusedElement = e3.target;
    forEachUpdater(window2, activeElementUpdaters, currentlyFocusedElement, e3);
    forEachUpdater(window2, lastActiveElementUpdaters, currentlyFocusedElement, e3);
  }
  function windowFocus(e3) {
    const window2 = e3.target instanceof Window ? e3.target : e3.currentTarget instanceof Window ? e3.currentTarget : e3.target.ownerDocument.defaultView;
    windowsFocusedUpdaters.set(window2, true);
    forEachUpdater(window2, windowFocusedUpdaters, true, e3);
  }
  function windowBlur(e3) {
    const window2 = e3.target instanceof Window ? e3.target : e3.currentTarget instanceof Window ? e3.currentTarget : e3.target.ownerDocument.defaultView;
    windowsFocusedUpdaters.set(window2, false);
    forEachUpdater(window2, windowFocusedUpdaters, false, e3);
  }

  // ../dist/component-detail/dismissal/use-lost-focus-dismiss.js
  var P7 = `PropNames.LostFocusDismissParameters`;
  var PropNames_LostFocusDismissParameters_dismissLostFocusActive = `${P7}.dismissLostFocusActive`;
  var PropNames_LostFocusDismissParameters_onDismissLostFocus = `${P7}.onDismissLostFocus`;
  var PropNames_LostFocusDismissParameters_getElementSource = `${P7}.getElementSource`;
  var PropNames_LostFocusDismissParameters_getElementPopup = `${P7}.getElementPopup`;
  var useLostFocusDismiss = monitored(function useLostFocusDismiss2({ [PropNames_LostFocusDismissParameters_getElementSource]: getElementSource, [PropNames_LostFocusDismissParameters_getElementPopup]: getElementPopup, [PropNames_LostFocusDismissParameters_dismissLostFocusActive]: open, [PropNames_LostFocusDismissParameters_onDismissLostFocus]: onClose, ..._void1 }) {
    assertEmptyObject(_void1);
    const stableOnClose = useStableGetter(onClose);
    const getOpen = useStableGetter(open);
    const onLastActiveElementChange = T2((newElement, _prevElement, e3) => {
      const open2 = getOpen();
      const sourceElement = getElementSource?.();
      const popupElement = getElementPopup();
      if (!(sourceElement?.contains(newElement) || popupElement?.contains(newElement))) {
        if (open2) {
          console.assert(e3 != null);
          stableOnClose()?.(e3);
        }
      }
    }, [getElementSource]);
    return {
      [PropNames_ActiveElementParameters_onLastActiveElementChange]: onLastActiveElementChange
    };
  });

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
    } catch (e3) {
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
  function baseTimes(n2, iteratee) {
    var index = -1, result = Array(n2);
    while (++index < n2) {
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
    } catch (e3) {
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

  // ../dist/preact-extensions/use-state.js
  var useState = function useState2(initialState) {
    const getStack = useStack();
    const [state, setStateP] = h3(initialState);
    const ref = _(state);
    const setState = _((value) => {
      if (false) {
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
    });
    const getState = T2(() => {
      return ref.current;
    }, []);
    return [state, setState.current, getState];
  };

  // ../dist/component-use/use-press.js
  var P8 = `PropNames.PressParameters`;
  var R4 = `PropNames.PressReturn`;
  var PropNames_PressParameters_onPressingChange = `${P8}.onPressingChange`;
  var PropNames_PressParameters_onPressSync = `${P8}.onPressSync`;
  var PropNames_PressParameters_excludeSpace = `${P8}.excludeSpace`;
  var PropNames_PressParameters_excludeEnter = `${P8}.excludeEnter`;
  var PropNames_PressParameters_excludePointer = `${P8}.excludePointer`;
  var PropNames_PressParameters_focusSelf = `${P8}.focusSelf`;
  var PropNames_PressParameters_allowRepeatPresses = `${P8}.allowRepeatPresses`;
  var PropNames_PressParameters_longPressThreshold = `${P8}.longPressThreshold`;
  var PropNames_PressReturn_pressing = `${R4}.pressing`;
  var PropNames_PressReturn_getIsPressing = `${R4}.getIsPressing`;
  var PropNames_PressReturn_longPress = `${R4}.longPress`;
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
  document.addEventListener("click", (e3) => {
    if (justHandledManualClickEvent) {
      justHandledManualClickEvent = false;
      manualClickTimeout1 != null && clearTimeout(manualClickTimeout1);
      manualClickTimeout2 != null && clearTimeout(manualClickTimeout2);
      e3.preventDefault();
      e3.stopPropagation();
    }
  }, { capture: true });
  var usePress = monitored(function usePress2({ [PropNames_RefElementReturn_getElement]: getElement, [PropNames_PressParameters_focusSelf]: focusSelf, [PropNames_PressParameters_onPressSync]: onPressSync, [PropNames_PressParameters_allowRepeatPresses]: allowRepeatPresses, [PropNames_PressParameters_longPressThreshold]: longPressThreshold, [PropNames_PressParameters_excludeEnter]: ee, [PropNames_PressParameters_excludePointer]: ep, [PropNames_PressParameters_excludeSpace]: es, [PropNames_PressParameters_onPressingChange]: opc, ..._void1 }) {
    assertEmptyObject(_void1);
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
    const onTouchStart = useStableCallback((e3) => {
      e3.preventDefault();
      e3.stopPropagation();
      setIsPressing(true, e3);
      setPointerDownStartedHere(true);
      setHovering(true);
      setLongPress(false);
      const element = getElement();
      if (element)
        focusSelf(element);
    });
    const onTouchMove = T2((e3) => {
      pressLog("touchmove", e3);
      e3.preventDefault();
      e3.stopPropagation();
      const element = getElement();
      const touch = e3.touches[0];
      const offsets = [
        [0, 0],
        [-touch.radiusX || 0, -touch.radiusY || 0],
        [+touch.radiusX || 0, -touch.radiusY || 0],
        [-touch.radiusX || 0, +touch.radiusY || 0],
        [+touch.radiusX || 0, +touch.radiusY || 0]
      ];
      let hoveringAtAnyPoint = false;
      for (const [x4, y4] of offsets) {
        const elementAtTouch = document.elementFromPoint((touch?.clientX ?? 0) + x4, (touch?.clientY ?? 0) + y4);
        hoveringAtAnyPoint ||= element?.contains(elementAtTouch) ?? false;
      }
      setIsPressing(hoveringAtAnyPoint && getPointerDownStartedHere(), e3);
      setHovering(hoveringAtAnyPoint);
    }, []);
    const onTouchEnd = T2((e3) => {
      pressLog("touchend", e3);
      e3.preventDefault();
      e3.stopPropagation();
      const hovering2 = getHovering();
      const pointerDownStartedHere2 = getPointerDownStartedHere();
      if (pointerDownStartedHere2 && hovering2) {
        onHandledManualClickEvent();
        handlePress(e3);
      }
      setWaitingForSpaceUp(false);
      setHovering(false);
      setPointerDownStartedHere(false);
      setIsPressing(false, e3);
    }, []);
    const onPointerDown = useStableCallback((e3) => {
      pressLog("pointerdown", e3);
      if (!excludePointer()) {
        if (e3.buttons & 1) {
          e3.preventDefault();
          e3.stopPropagation();
          setIsPressing(true, e3);
          setPointerDownStartedHere(true);
          setHovering(true);
          setLongPress(false);
          const element = getElement();
          if (element)
            focusSelf(element);
        }
      }
    });
    const onPointerMove = useStableCallback((e3) => {
      pressLog("pointermove", e3);
      let listeningForPress = getPointerDownStartedHere();
      if (!(e3.buttons & 1))
        setPointerDownStartedHere(listeningForPress = false);
      if (listeningForPress) {
        const element = getElement();
        const elementAtPointer = document.elementFromPoint(e3.clientX, e3.clientY);
        const hovering2 = element == elementAtPointer || element?.contains(elementAtPointer) || false;
        setHovering(hovering2);
        setIsPressing(hovering2 && getPointerDownStartedHere(), e3);
      }
    });
    const onPointerUp = T2((e3) => {
      pressLog("pointerup", e3);
      const hovering2 = getHovering();
      const pointerDownStartedHere2 = getPointerDownStartedHere();
      if (!excludePointer()) {
        if (pointerDownStartedHere2 && hovering2) {
          onHandledManualClickEvent();
          handlePress(e3);
          e3.preventDefault();
          e3.stopPropagation();
        }
      }
      setWaitingForSpaceUp(false);
      setHovering(false);
      setPointerDownStartedHere(false);
      setLongPress(false);
      setIsPressing(false, e3);
    }, []);
    const onPointerEnter = T2((_e) => {
      pressLog("pointerenter", _e);
      setHovering(true);
    }, []);
    const onPointerLeave = T2((_e) => {
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
    const handlePress = useStableCallback((e3) => {
      pressLog("handlepress", e3);
      setWaitingForSpaceUp(false);
      setHovering(false);
      setPointerDownStartedHere(false);
      setLongPress(null);
      if (onPressSync) {
        const element = getElement();
        if (element)
          focusSelf(element);
        e3.preventDefault();
        e3.stopPropagation();
        try {
          pulse();
        } finally {
          onPressSync(e3);
        }
      }
    });
    const onKeyDown = useStableCallback((e3) => {
      pressLog("keydown", e3);
      if (onPressSync) {
        if (e3.key == " " && !excludeSpace()) {
          setWaitingForSpaceUp(true);
          setIsPressing(true, e3);
          e3.preventDefault();
        }
        if (e3.key == "Enter" && !excludeEnter() && (!e3.repeat || (allowRepeatPresses ?? false))) {
          setIsPressing(true, e3);
          handlePress(e3);
          requestAnimationFrame(() => {
            setIsPressing(false, e3);
          });
        }
      }
    });
    const onKeyUp = useStableCallback((e3) => {
      pressLog("keyup", e3);
      const waitingForSpaceUp2 = getWaitingForSpaceUp();
      if (waitingForSpaceUp2 && e3.key == " " && !excludeSpace()) {
        handlePress(e3);
        setIsPressing(false, e3);
      }
    });
    const onClick = useStableCallback((e3) => {
      pressLog("click", e3);
      const element = getElement();
      if (onPressSync) {
        if (e3.detail > 1) {
          if ("stopImmediatePropagation" in e3)
            e3.stopImmediatePropagation();
          e3.stopPropagation();
        } else {
          if (justHandledManualClickEvent) {
            justHandledManualClickEvent = false;
          } else {
            console.assert(justHandledManualClickEvent == false, "Logic???");
            if (e3.target && element?.contains(e3.target)) {
              if (getHovering()) {
              } else {
                debugger;
                console.log("onclick was fired and will be handled as it doesn't look like it came from a pointer event", e3);
                console.assert(justHandledManualClickEvent == false, "Logic???");
              }
              setIsPressing(true, e3);
              requestAnimationFrame(() => {
                setIsPressing(false, e3);
              });
              handlePress(e3);
            }
          }
        }
      }
    });
    const onFocusOut = useStableCallback((e3) => {
      pressLog("focusout", e3);
      setWaitingForSpaceUp(false);
      setIsPressing(false, e3);
    });
    const p4 = supportsPointerEvents();
    return {
      [PropNames_PressReturn_pressing]: pointerDownStartedHere && hovering || waitingForSpaceUp || false,
      [PropNames_PressReturn_getIsPressing]: getIsPressing,
      [PropNames_PressReturn_longPress]: longPress,
      props: [{
        onKeyDown,
        onKeyUp,
        onTouchStart: !hasPressEvent ? void 0 : !p4 ? onTouchStart : void 0,
        onTouchCancel: !hasPressEvent ? void 0 : !p4 ? onTouchEnd : void 0,
        onTouchMove: !hasPressEvent ? void 0 : !p4 ? onTouchMove : void 0,
        onTouchEnd: !hasPressEvent ? void 0 : !p4 ? onTouchEnd : void 0,
        onPointerDown: !hasPressEvent ? void 0 : p4 ? onPointerDown : void 0,
        onPointerCancel: !hasPressEvent ? void 0 : p4 ? onPointerDown : void 0,
        onPointerMove: !pointerDownStartedHere || !hasPressEvent ? void 0 : p4 ? onPointerMove : void 0,
        onPointerUp: !hasPressEvent ? void 0 : p4 ? onPointerUp : void 0,
        onPointerEnter: !hasPressEvent ? void 0 : p4 ? onPointerEnter : void 0,
        onPointerLeave: !hasPressEvent ? void 0 : p4 ? onPointerLeave : void 0,
        [onfocusout]: onFocusOut,
        onClick
      }]
    };
  });
  var pulse = "vibrate" in navigator && navigator.vibrate instanceof Function ? () => navigator.vibrate(10) : () => {
  };

  // ../dist/dom-helpers/use-merged-children.js
  var useMergedChildren = function useMergedChildren2(lhs, rhs) {
    if (lhs == null && rhs == null) {
      return void 0;
    } else if (lhs == null) {
      return rhs;
    } else if (rhs == null) {
      return lhs;
    } else {
      return y(k, {}, lhs, rhs);
    }
  };

  // ../dist/dom-helpers/use-merged-classes.js
  var useMergedClasses = function useMergedClasses2(...classes) {
    let classesSet = /* @__PURE__ */ new Set();
    for (let c4 of classes) {
      if (typeof c4 == "string" && c4.trim())
        classesSet.add(c4);
    }
    if (classesSet.size) {
      return Array.from(classesSet).join(" ");
    } else {
      return void 0;
    }
  };

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
  var useMergedRefs = function useMergedRefs2(rhs, lhs) {
    const combined = useStableCallback(function combined2(current) {
      processRef(current, lhs);
      processRef(current, rhs);
    });
    if (lhs == null && rhs == null) {
      return void 0;
    } else if (lhs == null) {
      if (false)
        console.assert(typeof rhs == "function" || "current" in rhs, "Unknown ref type found that was neither a RefCallback nor a RefObject");
      return rhs;
    } else if (rhs == null) {
      if (false)
        console.assert(typeof lhs == "function" || "current" in lhs, "Unknown ref type found that was neither a RefCallback nor a RefObject");
      return lhs;
    } else {
      return combined;
    }
  };

  // ../dist/dom-helpers/use-merged-styles.js
  function styleStringToObject(style) {
    return Object.fromEntries(style.split(";").map((statement) => statement.split(":")));
  }
  var useMergedStyles = function useMergedStyles2(lhs, rhs) {
    if (!lhs && !rhs)
      return void 0;
    if (typeof lhs != typeof rhs) {
      if (lhs && !rhs)
        return lhs;
      if (!lhs && rhs)
        return rhs;
      if (lhs && rhs) {
        if (typeof lhs == "string")
          return useMergedStyles2(styleStringToObject(lhs), rhs);
        if (typeof rhs == "string")
          return useMergedStyles2(lhs, styleStringToObject(rhs));
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
  };

  // ../dist/dom-helpers/use-merged-props.js
  var log = console.warn;
  var useMergedProps = monitored(function useMergedProps2(...allProps) {
    useEnsureStability("useMergedProps", allProps.length);
    let ret = {};
    for (let nextProps of allProps) {
      useMergedPropsHelper(ret, nextProps);
    }
    return ret;
  });
  var knowns = /* @__PURE__ */ new Set(["children", "ref", "className", "class", "style"]);
  var mergeUnknown = function mergeUnknown2(key, lhsValue, rhsValue) {
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
  };
  var useMergedPropsHelper = function useMergedPropsHelper2(target, mods) {
    target.ref = useMergedRefs(target.ref, mods.ref);
    target.style = useMergedStyles(target.style, mods.style);
    target.className = useMergedClasses(target["class"], target.className, mods["class"], mods.className);
    target.children = useMergedChildren(target.children, mods.children);
    if (target.ref === void 0)
      delete target.ref;
    if (target.style === void 0)
      delete target.style;
    if (target.className === void 0)
      delete target.className;
    if (target["class"] === void 0)
      delete target["class"];
    if (target.children === void 0)
      delete target.children;
    for (const rhsKeyU in mods) {
      const rhsKey = rhsKeyU;
      if (knowns.has(rhsKey))
        continue;
      target[rhsKey] = mergeUnknown(rhsKey, target[rhsKey], mods[rhsKey]);
    }
  };
  var mergeFunctions = function mergeFunctions2(lhs, rhs) {
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
  };

  // ../dist/dom-helpers/use-text-content.js
  var P9 = `PropNames.TextContentParameters`;
  var R5 = `PropNames.TextContentReturn`;
  var PropNames_TextContentParameters_getText = `${P9}.getText`;
  var PropNames_TextContentParameters_onTextContentChange = `${P9}.onTextContentChange`;
  var PropNames_TextContentReturn_getTextContent = `${R5}.getTextContent`;
  var useTextContent = monitored(function useTextContent2({ [PropNames_RefElementReturn_getElement]: getElement, [PropNames_TextContentParameters_getText]: getText, [PropNames_TextContentParameters_onTextContentChange]: onTextContentChange }) {
    const [getTextContent, setTextContent] = usePassiveState(onTextContentChange, returnNull, runImmediately);
    p3(() => {
      const element = getElement();
      if (element) {
        const textContent = getText(element);
        if (textContent) {
          setTextContent(textContent);
        }
      }
    });
    return {
      [PropNames_TextContentReturn_getTextContent]: getTextContent
    };
  });

  // ../dist/observers/use-has-current-focus.js
  var P10 = `PropNames.HasCurrentFocusParameters`;
  var R6 = `PropNames.HasCurrentFocusReturn`;
  var PropNames_HasCurrentFocusParameters_onCurrentFocusedChanged = `${P10}.onCurrentFocusedChanged`;
  var PropNames_HasCurrentFocusParameters_onCurrentFocusedInnerChanged = `${P10}.onCurrentFocusedInnerChanged`;
  var PropNames_HasCurrentFocusReturn_getCurrentFocused = `${R6}.getCurrentFocused`;
  var PropNames_HasCurrentFocusReturn_getCurrentFocusedInner = `${R6}.getCurrentFocusedInner`;
  var useHasCurrentFocus = monitored(function useHasCurrentFocus2({ [PropNames_HasCurrentFocusParameters_onCurrentFocusedChanged]: onCurrentFocusedChanged, [PropNames_HasCurrentFocusParameters_onCurrentFocusedInnerChanged]: onCurrentFocusedInnerChanged, [PropNames_RefElementReturn_getElement]: getElement }) {
    useEnsureStability("useHasCurrentFocus", onCurrentFocusedChanged, onCurrentFocusedInnerChanged, getElement);
    const [getFocused, setFocused] = usePassiveState(onCurrentFocusedChanged, returnFalse, runImmediately);
    const [getFocusedInner, setFocusedInner] = usePassiveState(onCurrentFocusedInnerChanged, returnFalse, runImmediately);
    const onFocusIn = T2((e3) => {
      setFocusedInner(true, e3);
      setFocused(e3.target == getElement(), e3);
    }, []);
    const onFocusOut = T2((e3) => {
      setFocusedInner(false, e3);
      setFocused(false, e3);
    }, []);
    p3(() => {
      return () => {
        setFocused(false, void 0);
        setFocusedInner(false, void 0);
      };
    }, []);
    const propsStable = _({
      [onfocusin]: onFocusIn,
      [onfocusout]: onFocusOut
    });
    return {
      [PropNames_HasCurrentFocusReturn_getCurrentFocused]: getFocused,
      [PropNames_HasCurrentFocusReturn_getCurrentFocusedInner]: getFocusedInner,
      props: propsStable.current
    };
  });

  // ../dist/preact-extensions/use-managed-children.js
  var P1 = `PropNames.ManagedChildrenParameters`;
  var R22 = `PropNames.ManagedChildReturnType`;
  var PropNames_ManagedChildrenParameters_onAfterChildLayoutEffect = `${P1}.onAfterChildLayoutEffect`;
  var PropNames_ManagedChildrenParameters_onChildrenMountChange = `${P1}.onChildrenMountChange`;
  var PropNames_ManagedChildrenParameters_onChildrenCountChange = `${P1}.onChildrenCountChange`;
  var PropNames_ManagedChildrenReturn_getChildren = `${P1}.getChildren`;
  var PropNames_ManagedChildReturn_getChildren = `${R22}.getChildren`;
  var useManagedChildren = monitored(function useManagedChildren2({ [PropNames_ManagedChildrenParameters_onAfterChildLayoutEffect]: onAfterChildLayoutEffect, [PropNames_ManagedChildrenParameters_onChildrenMountChange]: onChildrenMountChange, [PropNames_ManagedChildrenParameters_onChildrenCountChange]: onChildrenCountChange, ..._void1 }) {
    useEnsureStability("useManagedChildren", onAfterChildLayoutEffect, onChildrenMountChange, onChildrenCountChange);
    assertEmptyObject(_void1);
    const getHighestIndex = T2(() => {
      return managedChildrenArray.current.highestIndex;
    }, []);
    const getLowestIndex = T2(() => {
      return managedChildrenArray.current.lowestIndex;
    }, []);
    const managedChildrenArray = _({ arr: [], rec: {}, highestIndex: 0, lowestIndex: 0 });
    const forEachChild = T2((f4) => {
      for (const child of managedChildrenArray.current.arr) {
        if (child) {
          if (f4(child) == "break")
            return;
        }
      }
      for (const field in managedChildrenArray.current.rec) {
        const child = managedChildrenArray.current.rec[field];
        if (child) {
          if (f4(child) == "break")
            return;
        }
      }
    }, []);
    const getManagedChildInfo = T2((index) => {
      if (typeof index == "number")
        return managedChildrenArray.current.arr[index];
      else
        return managedChildrenArray.current.rec[index];
    }, []);
    const hasRemoteULEChildMounted = _(null);
    const remoteULEChildMounted = T2((index, mounted) => {
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
      _arraySlice: T2(() => {
        let ret = managedChildrenArray.current.arr.slice();
        const max = getHighestIndex();
        for (let i3 = 0; i3 <= max; ++i3) {
          if (ret[i3] == null)
            ret[i3] = { index: i3 };
        }
        return ret;
      }, [])
    });
    const getChildren = T2(() => managedChildren, []);
    return {
      context: useMemoObject({
        managedChildContext: useMemoObject({
          managedChildrenArray: managedChildrenArray.current,
          remoteULEChildMounted,
          //remoteULEChildChanged,
          getChildren
        })
      }),
      [PropNames_ManagedChildrenReturn_getChildren]: getChildren
    };
  });
  var useManagedChild = monitored(function useManagedChild2({ context, info }) {
    const { managedChildContext: { getChildren, managedChildrenArray, remoteULEChildMounted } } = context ?? { managedChildContext: {} };
    const index = info.index;
    y3(() => {
      if (managedChildrenArray == null)
        return;
      if (typeof index == "number") {
        managedChildrenArray.arr[index] = { ...info };
      } else {
        managedChildrenArray.rec[index] = { ...info };
      }
    });
    y3(() => {
      remoteULEChildMounted?.(index, true);
      return () => remoteULEChildMounted?.(index, false);
    }, [index]);
    return {
      [PropNames_ManagedChildReturn_getChildren]: getChildren
    };
  });
  function useChildrenFlag({ getChildren, initialIndex, closestFit, onClosestFit, onIndexChange, getAt, setAt, isValid }) {
    useEnsureStability("useChildrenFlag", onIndexChange, getAt, setAt, isValid);
    const [getCurrentIndex, setCurrentIndex] = usePassiveState(onIndexChange);
    const [getRequestedIndex, setRequestedIndex] = usePassiveState(null);
    const getClosestFit = T2((requestedIndex) => {
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
    const reasonRef = _(void 0);
    const changeIndex = T2((arg, reason) => {
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
    y3(() => {
      changeIndex(initialIndex ?? null, reasonRef.current);
    }, []);
    return { changeIndex, reevaluateClosestFit, getCurrentIndex };
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
    for (var i3 = 0; i3 < nodes.length; i3++) {
      if (nodes[i3].checked && nodes[i3].form === form) {
        return nodes[i3];
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
          for (var i3 = 0; i3 < parentNode.children.length; i3++) {
            var child = parentNode.children.item(i3);
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

  // ../dist/util/focus.js
  function focus(e3) {
    if (false) {
      console.log(`Focus changed to ${(e3?.tagName || "").toLowerCase().padStart(6)}:`, e3);
      console.log(generateStack());
    }
    e3?.focus?.();
  }
  function findBackupFocus(unmountingElement) {
    if (unmountingElement == null)
      return globalThis.document.body;
    let document2 = unmountingElement.ownerDocument;
    const walker = document2.createTreeWalker(document2.body, NodeFilter.SHOW_ELEMENT);
    let node = walker.firstChild();
    let bestCandidateBefore = null;
    let bestCandidateAfter = null;
    let w4 = false;
    while (node) {
      let pos = node.compareDocumentPosition(unmountingElement);
      if (pos & Node.DOCUMENT_POSITION_DISCONNECTED) {
        if (!w4)
          console.warn("Can't focus anything near a disconnected element");
        w4 = true;
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

  // ../dist/observers/use-children-have-focus.js
  var P12 = `PropNames.ChildrenHaveFocusParameters`;
  var R1 = `PropNames.ChildrenHaveFocusReturn`;
  var PropNames_ChildrenHaveFocusParameters_onCompositeFocusChange = `${P12}.onCompositeFocusChange`;
  var PropNames_ChildrenHaveFocusReturn_getAnyFocused = `${R1}.getAnyFocused`;
  var useChildrenHaveFocus = monitored(function useChildrenHaveFocus2({ [PropNames_ChildrenHaveFocusParameters_onCompositeFocusChange]: onCompositeFocusChange }) {
    const [getAnyFocused, setAnyFocused] = usePassiveState(onCompositeFocusChange, returnFalse, runImmediately);
    const [_getFocusCount, setFocusCount] = usePassiveState(useStableCallback((anyFocused, anyPreviouslyFocused, e3) => {
      console.assert(anyFocused >= 0 && anyFocused <= 1);
      setAnyFocused(!!(anyFocused && !anyPreviouslyFocused), e3);
    }), returnZero, setTimeout);
    return {
      [PropNames_ChildrenHaveFocusReturn_getAnyFocused]: getAnyFocused,
      context: useMemoObject({ childrenHaveFocusChildContext: useMemoObject({ setFocusCount }) })
    };
  });
  var useChildrenHaveFocusChild = monitored(function useChildrenHaveFocusChild2({ context: { childrenHaveFocusChildContext: { setFocusCount } } }) {
    return {
      [PropNames_HasCurrentFocusParameters_onCurrentFocusedInnerChanged]: useStableCallback((focused, prev, e3) => {
        if (focused) {
          setFocusCount((p4) => (p4 ?? 0) + 1, e3);
        } else if (!focused && prev) {
          setFocusCount((p4) => (p4 ?? 0) - 1, e3);
        }
      })
    };
  });

  // ../dist/component-detail/keyboard-navigation/use-roving-tabindex.js
  var P13 = `PropNames.RovingTabIndexParameters`;
  var R12 = `PropNames.RovingTabIndexReturn`;
  var R23 = `PropNames.RovingTabIndexChildReturn`;
  var PropNames_RovingTabIndexParameters_focusSelfParent = `${P13}.focusSelfParent`;
  var PropNames_RovingTabIndexParameters_initiallyTabbedIndex = `${P13}.initiallyTabbedIndex`;
  var PropNames_RovingTabIndexParameters_untabbable = `${P13}.untabbable`;
  var PropNames_RovingTabIndexParameters_untabbableBehavior = `${P13}.untabbableBehavior`;
  var PropNames_RovingTabIndexParameters_onTabbableIndexChange = `${P13}.onTabbableIndexChange`;
  var PropNames_RovingTabIndexReturn_setTabbableIndex = `${R12}.setTabbableIndex`;
  var PropNames_RovingTabIndexReturn_getTabbableIndex = `${R12}.getTabbableIndex`;
  var PropNames_RovingTabIndexReturn_focusSelf = `${R12}.focusSelf`;
  var PropNames_RovingTabIndexChildReturn_tabbable = `${R23}.tabbable`;
  var PropNames_RovingTabIndexChildReturn_getTabbable = `${R23}.getTabbable`;
  var useRovingTabIndex = monitored(function useRovingTabIndex2({ [PropNames_RovingTabIndexParameters_focusSelfParent]: focusSelfParentUnstable, [PropNames_RovingTabIndexParameters_untabbable]: untabbable, [PropNames_RovingTabIndexParameters_untabbableBehavior]: untabbableBehavior, [PropNames_RovingTabIndexParameters_initiallyTabbedIndex]: initiallyTabbedIndex, [PropNames_RovingTabIndexParameters_onTabbableIndexChange]: onTabbableIndexChange, [PropNames_ManagedChildrenReturn_getChildren]: getChildren, [PropNames_RefElementReturn_getElement]: getElement, ...void1 }) {
    const focusSelfParent = useStableCallback(focusSelfParentUnstable);
    untabbableBehavior ||= "focus-parent";
    const lastFocused = _(null);
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
    const [getLastNonNullIndex, setLastNonNullIndex] = usePassiveState(null, T2(() => initiallyTabbedIndex ?? 0, []));
    p3(() => {
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
    const getTabbableAt = T2((child) => {
      return child.getLocallyTabbable();
    }, []);
    const setTabbableAt = T2((child, t3) => {
      child.setLocallyTabbable(t3);
    }, []);
    const isTabbableValid = useStableCallback((child) => {
      return !child.untabbable;
    });
    const { changeIndex: changeTabbableIndex, getCurrentIndex: getTabbableIndex, reevaluateClosestFit } = useChildrenFlag({
      initialIndex: initiallyTabbedIndex ?? (untabbable ? null : 0),
      onIndexChange: useStableCallback((n2, p4, r5) => {
        if (!(n2 == null && untabbable) && n2 != getLastNonNullIndex())
          onTabbableIndexChange?.(n2, p4, r5);
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
    const focusSelf = T2((force, reason) => {
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
      getInitiallyTabbedIndex: T2(() => {
        return initiallyTabbedIndex ?? (untabbable ? null : 0);
      }, []),
      reevaluateClosestFit,
      getUntabbable: useStableGetter(untabbable),
      getUntabbableBehavior: useStableGetter(untabbableBehavior),
      giveParentFocusedElement: T2((e3) => {
        lastFocused.current = e3;
      }, [])
    });
    return {
      [PropNames_ManagedChildrenParameters_onChildrenMountChange]: T2(() => {
        reevaluateClosestFit(void 0);
      }, [reevaluateClosestFit]),
      [PropNames_RovingTabIndexReturn_setTabbableIndex]: setTabbableIndex,
      [PropNames_RovingTabIndexReturn_getTabbableIndex]: getTabbableIndex,
      [PropNames_RovingTabIndexReturn_focusSelf]: focusSelf,
      context: useMemoObject({ rovingTabIndexContext }),
      props: [useTagProps({
        // Note: Making this -1 instead of null is partially intentional --
        // it gives us time during useEffect to move focus back to the last focused element
        // (otherwise focus gets lost to the body, and useEffect thinks that it shouldn't
        // focus the child because focus wasn't within the list). 
        // It's also just consistent. 
        tabIndex: untabbable ? 0 : -1,
        // When a hidden child is clicked, some browsers focus the parent, just because it's got a role and a tabindex.
        onFocus: useStableCallback((e3) => {
          const parentElement = getElement();
          console.assert(!!parentElement);
          if (e3.target == getElement()) {
            if (!untabbable) {
              focusSelf(false, e3);
            }
          }
        })
      }, "data-roving-tab-index")]
    };
  });
  var useRovingTabIndexChild = monitored(function useRovingTabIndexChild2({ info: { index, untabbable: iAmUntabbable, ...void2 }, context: { rovingTabIndexContext: { giveParentFocusedElement, getUntabbable: getParentIsUntabbable, getUntabbableBehavior, reevaluateClosestFit, setTabbableIndex, getInitiallyTabbedIndex, parentFocusSelf } }, [PropNames_RefElementReturn_getElement]: getElement, ...void3 }) {
    const [tabbable, setTabbable, getTabbable] = useState(getInitiallyTabbedIndex() === index);
    p3(() => {
      reevaluateClosestFit(void 0);
    }, [!!iAmUntabbable]);
    assertEmptyObject(void2);
    assertEmptyObject(void3);
    p3(() => {
      if (tabbable) {
        giveParentFocusedElement(getElement());
      }
    }, [tabbable]);
    return {
      [PropNames_HasCurrentFocusParameters_onCurrentFocusedInnerChanged]: useStableCallback((focused, _prevFocused, e3) => {
        if (focused) {
          const parentIsUntabbable = getParentIsUntabbable();
          const untabbableBehavior = getUntabbableBehavior();
          if (!parentIsUntabbable && !iAmUntabbable || untabbableBehavior != "focus-parent")
            setTabbableIndex(index, e3, false);
          else
            parentFocusSelf(false);
        }
      }),
      [PropNames_RovingTabIndexChildReturn_tabbable]: tabbable,
      [PropNames_RovingTabIndexChildReturn_getTabbable]: getTabbable,
      info: { setLocallyTabbable: setTabbable, getLocallyTabbable: getTabbable },
      props: useTagProps({
        tabIndex: tabbable ? 0 : -1,
        ...{ inert: iAmUntabbable }
        // This inert is to prevent the edge case of clicking a hidden item and it focusing itself
      }, "data-roving-tab-index-child")
    };
  });

  // ../dist/preact-extensions/use-force-update.js
  var useForceUpdate = monitored(function useForceUpdate2() {
    const [, set] = h3(0);
    return _(() => set((i3) => ++i3)).current;
  });

  // ../dist/component-detail/processed-children/use-rearrangeable-children.js
  var P14 = `PropNames.RearrangeableParameters`;
  var R13 = `PropNames.RearrangeableReturn`;
  var PropNames_RearrangeableParameters_compare = `${P14}.compare`;
  var PropNames_RearrangeableParameters_adjust = `${P14}.adjust`;
  var PropNames_RearrangeableParameters_getIndex = `${P14}.getIndex`;
  var PropNames_RearrangeableParameters_onRearranged = `${P14}.onRearranged`;
  var PropNames_RearrangeableParameters_children = `${P14}.children`;
  var PropNames_RearrangeableReturn_rearrange = `${R13}.rearrange`;
  var PropNames_RearrangeableReturn_shuffle = `${R13}.shuffle`;
  var PropNames_RearrangeableReturn_reverse = `${R13}.reverse`;
  var PropNames_RearrangeableReturn_indexMangler = `${R13}.indexMangler`;
  var PropNames_RearrangeableReturn_indexDemangler = `${R13}.indexDemangler`;
  var PropNames_RearrangeableReturn_children = `${R13}.children`;
  var PropNames_RearrangeableReturn_sort = `${R13}.sort`;
  function useCreateProcessedChildrenContext() {
    const sortRef = _(null);
    const shuffleRef = _(null);
    const reverseRef = _(null);
    const rearrangeRef = _(null);
    const indexManglerRef = _(null);
    const indexDemanglerRef = _(null);
    const indexMangler = useStableCallback((i3) => {
      return (indexManglerRef.current ?? identity_default)(i3);
    }, []);
    const indexDemangler = useStableCallback((i3) => {
      return (indexDemanglerRef.current ?? identity_default)(i3);
    }, []);
    const sort = useStableCallback((i3) => {
      return (sortRef.current ?? identity_default)(i3);
    }, []);
    const shuffle2 = useStableCallback(() => {
      return (shuffleRef.current ?? identity_default)();
    }, []);
    const reverse = useStableCallback(() => {
      return (reverseRef.current ?? identity_default)();
    }, []);
    const rearrange = useStableCallback((original, ordered) => {
      (rearrangeRef.current ?? noop_default)(original, ordered);
    }, []);
    const provideManglers = useStableCallback(({ [PropNames_RearrangeableReturn_indexDemangler]: indexDemangler2, [PropNames_RearrangeableReturn_indexMangler]: indexMangler2, [PropNames_RearrangeableReturn_reverse]: reverse2, [PropNames_RearrangeableReturn_shuffle]: shuffle3, [PropNames_RearrangeableReturn_sort]: sort2 }) => {
      indexManglerRef.current = indexMangler2;
      indexDemanglerRef.current = indexDemangler2;
      reverseRef.current = reverse2;
      shuffleRef.current = shuffle3;
      sortRef.current = sort2;
    });
    const rearrangeableChildrenContext = useMemoObject({ provideManglers });
    const context = useMemoObject({ rearrangeableChildrenContext });
    return {
      context,
      [PropNames_RearrangeableReturn_indexDemangler]: indexDemangler,
      [PropNames_RearrangeableReturn_indexMangler]: indexMangler,
      [PropNames_RearrangeableReturn_rearrange]: rearrange,
      [PropNames_RearrangeableReturn_reverse]: reverse,
      [PropNames_RearrangeableReturn_shuffle]: shuffle2,
      [PropNames_RearrangeableReturn_sort]: sort
    };
  }
  var useRearrangeableChildren = monitored(function useRearrangeableChildren2({
    //rearrangeableChildrenParameters: { getIndex, onRearranged, compare: userCompare, children, adjust },
    //managedChildrenReturn: { getChildren },
    [PropNames_ManagedChildrenReturn_getChildren]: getChildren,
    [PropNames_RearrangeableParameters_children]: children,
    [PropNames_RearrangeableParameters_adjust]: adjust,
    [PropNames_RearrangeableParameters_getIndex]: getIndex,
    [PropNames_RearrangeableParameters_onRearranged]: onRearranged,
    [PropNames_RearrangeableParameters_compare]: userCompare,
    context: { rearrangeableChildrenContext: { provideManglers } }
  }) {
    useEnsureStability("useRearrangeableChildren", getIndex);
    const mangleMap = _(/* @__PURE__ */ new Map());
    const demangleMap = _(/* @__PURE__ */ new Map());
    const indexMangler = T2((n2) => mangleMap.current.get(n2) ?? n2, []);
    const indexDemangler = T2((n2) => demangleMap.current.get(n2) ?? n2, []);
    const onRearrangedGetter = useStableGetter(onRearranged);
    const shuffle2 = T2(() => {
      const managedRows = getChildren();
      const originalRows = managedRows._arraySlice();
      const shuffledRows = shuffle_default(originalRows);
      return rearrange(originalRows, shuffledRows);
    }, [
      /* Must remain stable */
    ]);
    const reverse = T2(() => {
      const managedRows = getChildren();
      const originalRows = managedRows._arraySlice();
      const reversedRows = managedRows._arraySlice().reverse();
      return rearrange(originalRows, reversedRows);
    }, [
      /* Must remain stable */
    ]);
    const forceUpdateRef = _(null);
    const rearrange = T2((originalRows, sortedRows) => {
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
    const getCompare = useStableGetter(userCompare ?? defaultCompare);
    const sort = T2((direction) => {
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
    console.assert(Array.isArray(children));
    const forceUpdate = useForceUpdate();
    console.assert(forceUpdateRef.current == null || forceUpdateRef.current == forceUpdate);
    forceUpdateRef.current = forceUpdate;
    let sorted = children.slice().map((child) => {
      if (false) {
        console.assert(getIndex(child) != null, `getIndex(vnode) must return its 0-based numeric index (e.g. its \`index\` prop)`);
      }
      const mangledIndex = (child == null ? null : indexMangler(getIndex(child))) ?? null;
      const demangledIndex = (child == null ? null : getIndex(child)) ?? null;
      return {
        child,
        sort: mangledIndex ?? -1,
        mangledIndex,
        demangledIndex
      };
    }).sort((lhs, rhs) => lhs.sort - rhs.sort).map(({ child, mangledIndex, demangledIndex }) => {
      if (child)
        return (adjust || identity_default)(y(child.type, { ...child.props, key: demangledIndex }), { mangledIndex, demangledIndex }) ?? null;
      return null;
    });
    y3(() => {
      provideManglers({
        [PropNames_RearrangeableReturn_indexDemangler]: indexDemangler,
        [PropNames_RearrangeableReturn_indexMangler]: indexMangler,
        [PropNames_RearrangeableReturn_reverse]: reverse,
        [PropNames_RearrangeableReturn_shuffle]: shuffle2,
        [PropNames_RearrangeableReturn_sort]: sort
      });
    }, []);
    return {
      [PropNames_RearrangeableReturn_indexMangler]: indexMangler,
      [PropNames_RearrangeableReturn_indexDemangler]: indexDemangler,
      [PropNames_RearrangeableReturn_rearrange]: rearrange,
      [PropNames_RearrangeableReturn_shuffle]: shuffle2,
      [PropNames_RearrangeableReturn_reverse]: reverse,
      [PropNames_RearrangeableReturn_sort]: sort,
      [PropNames_RearrangeableReturn_children]: sorted
    };
  });
  function defaultCompare(lhs, rhs) {
    return compare1(lhs?.index, rhs?.index);
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

  // ../dist/component-detail/processed-children/use-paginated-children.js
  var P15 = `PropNames.PaginatedParameters`;
  var PropNames_PaginatedParameters_paginationMin = `${P15}.paginationMin`;
  var PropNames_PaginatedParameters_paginationMax = `${P15}.paginationMax`;
  var PropNames_PaginatedParameters_childCount = `${P15}.childCount`;
  var PropNames_PaginatedReturn_refreshPagination = `${P15}.refreshPagination`;
  var PropNames_PaginatedChildReturn_parentIsPaginated = `${P15}.parentIsPaginated`;
  var PropNames_PaginatedChildReturn_hideBecausePaginated = `${P15}.hideBecausePaginated`;
  var usePaginatedChildren = monitored(function usePaginatedChildren2({
    [PropNames_ManagedChildrenReturn_getChildren]: getChildren,
    [PropNames_RearrangeableReturn_indexDemangler]: indexDemangler,
    [PropNames_PaginatedParameters_paginationMax]: paginationMax,
    [PropNames_PaginatedParameters_paginationMin]: paginationMin,
    [PropNames_PaginatedParameters_childCount]: childCount,
    [PropNames_RovingTabIndexReturn_getTabbableIndex]: getTabbableIndex,
    [PropNames_RovingTabIndexReturn_setTabbableIndex]: setTabbableIndex,
    [PropNames_ChildrenHaveFocusReturn_getAnyFocused]: getAnyFocused
    // paginatedChildrenParameters: { paginationMax, paginationMin, childCount },
    // rovingTabIndexReturn: { getTabbableIndex, setTabbableIndex },
    // childrenHaveFocusReturn: { getAnyFocused }
  }) {
    const parentIsPaginated = paginationMin != null || paginationMax != null;
    const lastPagination = _({ paginationMax: null, paginationMin: null });
    const refreshPagination = T2((paginationMin2, paginationMax2) => {
      const childMax = getChildren().getHighestIndex() + 1;
      const childMin = getChildren().getLowestIndex();
      for (let i3 = childMin; i3 <= childMax; ++i3) {
        const visible = i3 >= (paginationMin2 ?? -Infinity) && i3 < (paginationMax2 ?? Infinity);
        getChildren().getAt(indexDemangler(i3))?.setPaginationVisible(visible);
        if (visible && (paginationMax2 != null || paginationMin2 != null))
          getChildren().getAt(indexDemangler(i3))?.setChildCountIfPaginated(getChildren().getHighestIndex() + 1);
      }
    }, [
      /* Must be empty */
    ]);
    p3(() => {
      let tabbableIndex = getTabbableIndex();
      if (tabbableIndex != null) {
        let shouldFocus = getAnyFocused() || false;
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
    const pmin = _(paginationMin);
    const pmax = _(paginationMax);
    pmin.current = paginationMin;
    pmax.current = paginationMax;
    const getDefaultPaginationVisible = T2((i3) => {
      return i3 >= (pmin.current ?? -Infinity) && i3 < (pmax.current ?? Infinity);
    }, []);
    const paginatedChildContext = F2(() => ({
      parentIsPaginated,
      getDefaultPaginationVisible
    }), [parentIsPaginated]);
    const getPaginationMin = useStableGetter(paginationMin);
    const getPaginationMax = useStableGetter(paginationMax);
    y3(() => {
      const paginationMin2 = getPaginationMin();
      const paginationMax2 = getPaginationMax();
      const count = childCount ?? 0;
      if (paginationMax2 != null || paginationMin2 != null) {
        const min = paginationMin2 ?? 0;
        const max = paginationMax2 ?? count;
        for (let i3 = min; i3 < max; ++i3) {
          getChildren().getAt(i3)?.setChildCountIfPaginated(count);
        }
      }
    }, [childCount]);
    return {
      context: F2(() => ({ paginatedChildContext }), [paginatedChildContext]),
      [PropNames_PaginatedReturn_refreshPagination]: refreshPagination
    };
  });
  var usePaginatedChild = monitored(function usePaginatedChild2({ info: { index }, context: { paginatedChildContext: { parentIsPaginated, getDefaultPaginationVisible } } }) {
    const [childCountIfPaginated, setChildCountIfPaginated] = useState(null);
    const [paginatedVisible, setPaginatedVisible] = useState(parentIsPaginated ? getDefaultPaginationVisible(index) : true);
    return {
      props: useTagProps(!parentIsPaginated ? {} : { "aria-setsize": childCountIfPaginated ?? void 0, "aria-posinset": index + 1 }, "data-paginated-children-child"),
      [PropNames_PaginatedChildReturn_parentIsPaginated]: parentIsPaginated,
      [PropNames_PaginatedChildReturn_hideBecausePaginated]: parentIsPaginated ? !paginatedVisible : false,
      info: {
        setPaginationVisible: setPaginatedVisible,
        setChildCountIfPaginated
      }
    };
  });

  // ../dist/component-detail/keyboard-navigation/use-linear-navigation.js
  var P16 = `PropNames.LinearNavigationParameters`;
  var PropNames_LinearNavigationParameters_onNavigateLinear = `${P16}.onNavigateLinear`;
  var PropNames_LinearNavigationParameters_isValidForLinearNavigation = `${P16}.isValidForLinearNavigation`;
  var PropNames_LinearNavigationParameters_pageNavigationSize = `${P16}.pageNavigationSize`;
  var PropNames_LinearNavigationParameters_navigatePastStart = `${P16}.navigatePastStart`;
  var PropNames_LinearNavigationParameters_navigatePastEnd = `${P16}.navigatePastEnd`;
  var PropNames_LinearNavigationParameters_arrowKeyDirection = `${P16}.arrowKeyDirection`;
  var PropNames_LinearNavigationParameters_disableHomeEndKeys = `${P16}.disableHomeEndKeys`;
  var PropNames_LinearNavigationParameters_getHighestIndex = `${P16}.getHighestIndex`;
  var PropNames_LinearNavigationParameters_getLowestIndex = `${P16}.getLowestIndex`;
  var PropNames_LinearNavigationReturn_setTabbableIndex = `${P16}.setTabbableIndex`;
  var PropNames_LinearNavigationChildReturn_tabbable = `${P16}.tabbable`;
  var useLinearNavigation = function useLinearNavigation2({
    /*linearNavigationParameters: { getLowestIndex, getHighestIndex, isValidForLinearNavigation, navigatePastEnd, navigatePastStart, onNavigateLinear, arrowKeyDirection, disableHomeEndKeys, pageNavigationSize, ...void4 },
    rovingTabIndexReturn: { getTabbableIndex, setTabbableIndex, ...void5 },
    paginatedChildrenParameters: { paginationMax, paginationMin, ...void2 },
    rearrangeableChildrenReturn: { indexDemangler, indexMangler, ...void3 },*/
    [PropNames_LinearNavigationParameters_getLowestIndex]: getLowestIndex,
    [PropNames_LinearNavigationParameters_getHighestIndex]: getHighestIndex,
    [PropNames_LinearNavigationParameters_isValidForLinearNavigation]: isValidForLinearNavigation,
    [PropNames_LinearNavigationParameters_navigatePastEnd]: navigatePastEnd,
    [PropNames_LinearNavigationParameters_navigatePastStart]: navigatePastStart,
    [PropNames_LinearNavigationParameters_onNavigateLinear]: onNavigateLinear,
    [PropNames_LinearNavigationParameters_arrowKeyDirection]: arrowKeyDirection,
    [PropNames_LinearNavigationParameters_disableHomeEndKeys]: disableHomeEndKeys,
    [PropNames_LinearNavigationParameters_pageNavigationSize]: pageNavigationSize,
    [PropNames_RovingTabIndexReturn_getTabbableIndex]: getTabbableIndex,
    [PropNames_RovingTabIndexReturn_setTabbableIndex]: setTabbableIndex,
    [PropNames_PaginatedParameters_paginationMin]: paginationMin,
    [PropNames_PaginatedParameters_paginationMax]: paginationMax,
    [PropNames_RearrangeableReturn_indexMangler]: indexMangler,
    [PropNames_RearrangeableReturn_indexDemangler]: indexDemangler,
    ...void1
  }) {
    let getPaginatedRange = useStableGetter(paginationMax == null || paginationMin == null ? null : paginationMax - paginationMin);
    assertEmptyObject(void1);
    useEnsureStability("useLinearNavigation", onNavigateLinear, isValidForLinearNavigation, indexDemangler, indexMangler);
    const navigateAbsolute = T2((requestedIndexMangled, searchDirection, e3, fromUserInteraction, mode) => {
      const highestChildIndex = getHighestIndex();
      const lowestChildIndex = getLowestIndex();
      const original = getTabbableIndex() ?? 0;
      const targetDemangled = indexDemangler(requestedIndexMangled);
      const { status, valueDemangled } = tryNavigateToIndex({ isValid: isValidForLinearNavigation, lowestChildIndex, highestChildIndex, indexDemangler, indexMangler, searchDirection, targetDemangled });
      if (status == "past-end") {
        if (navigatePastEnd == "wrap") {
          if (mode == "single")
            navigateToFirst(e3, fromUserInteraction);
          else {
            if (false)
              navigateToFirst(e3, fromUserInteraction);
            else
              navigateToLast(e3, fromUserInteraction);
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
            navigateToLast(e3, fromUserInteraction);
          } else {
            if (false)
              navigateToLast(e3, fromUserInteraction);
            else
              navigateToFirst(e3, fromUserInteraction);
          }
          return "stop";
        } else if (navigatePastStart == "passthrough") {
          return "passthrough";
        } else {
          navigatePastStart();
          return "stop";
        }
      } else {
        setTabbableIndex(valueDemangled, e3, fromUserInteraction);
        onNavigateLinear?.(valueDemangled, e3);
        return "stop";
      }
    }, []);
    const navigateToFirst = useStableCallback((e3, fromUserInteraction) => {
      return navigateAbsolute(getLowestIndex(), -1, e3, fromUserInteraction, "single");
    });
    const navigateToLast = useStableCallback((e3, fromUserInteraction) => {
      return navigateAbsolute(getHighestIndex(), 1, e3, fromUserInteraction, "single");
    });
    const navigateRelative2 = useStableCallback((e3, offset, fromUserInteraction, mode) => {
      const highestChildIndex = getHighestIndex();
      const searchDirection = Math.sign(offset) || 1;
      const original = getTabbableIndex() ?? 0;
      const targetMangled = indexMangler(original) + offset;
      return navigateAbsolute(targetMangled, searchDirection, e3, fromUserInteraction, mode);
    });
    const navigateToNext = useStableCallback((e3, fromUserInteraction) => {
      return navigateRelative2(e3, 1, fromUserInteraction, "single");
    });
    const navigateToPrev = useStableCallback((e3, fromUserInteraction) => {
      return navigateRelative2(e3, -1, fromUserInteraction, "single");
    });
    const stableProps = _(useTagProps({
      onKeyDown: useStableCallback((e3) => {
        if (e3.metaKey)
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
        switch (e3.key) {
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
          switch (e3.key) {
            case "ArrowUp":
            case "ArrowLeft":
              result = navigateToPrev(e3, true);
              break;
            case "ArrowDown":
            case "ArrowRight":
              result = navigateToNext(e3, true);
              break;
            case "PageUp":
            case "PageDown":
              if (truePageNavigationSize == null)
                break;
              else if (truePageNavigationSize > 0)
                result = navigateRelative2(e3, truePageNavigationSize * (e3.key.endsWith("n") ? 1 : -1), true, "page");
              break;
            case "Home":
            case "End":
              if (!disableHomeEndKeys) {
                if (e3.key.endsWith("e"))
                  navigateToFirst(e3, true);
                else
                  navigateToLast(e3, true);
                result = "stop";
              }
              break;
          }
        }
        if (result && result != "passthrough") {
          e3.preventDefault();
          e3.stopPropagation();
        }
      })
    }, "data-linear-navigation"));
    return {
      props: stableProps.current
    };
  };
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

  // ../dist/component-detail/keyboard-navigation/use-typeahead-navigation.js
  var P17 = `PropNames.TypeaheadNavigationParameters`;
  var R14 = `PropNames.TypeaheadNavigationReturn`;
  var R24 = `PropNames.TypeaheadNavigationChildReturn`;
  var PropNames_TypeaheadNavigationParameters_onNavigateTypeahead = `${P17}.onNavigateTypeahead`;
  var PropNames_TypeaheadNavigationParameters_isValidForTypeaheadNavigation = `${P17}.isValidForTypeaheadNavigation`;
  var PropNames_TypeaheadNavigationParameters_collator = `${P17}.collator`;
  var PropNames_TypeaheadNavigationParameters_noTypeahead = `${P17}.noTypeahead`;
  var PropNames_TypeaheadNavigationParameters_typeaheadTimeout = `${P17}.typeaheadTimeout`;
  var PropNames_TypeaheadNavigationReturn_getCurrentTypeahead = `${R14}.getCurrentTypeahead`;
  var PropNames_TypeaheadNavigationReturn_typeaheadStatus = `${R14}.typeaheadStatus`;
  var PropNames_TypeaheadNavigationChildReturn_tabbable = `${R24}.tabbable`;
  var PropNames_TypeaheadNavigationChildReturn_getTabbable = `${R24}.getTabbable`;
  var useTypeaheadNavigation = monitored(function useTypeaheadNavigation2({ [PropNames_RovingTabIndexReturn_getTabbableIndex]: getIndex, [PropNames_RovingTabIndexReturn_setTabbableIndex]: setIndex, [PropNames_TypeaheadNavigationParameters_collator]: collator, [PropNames_TypeaheadNavigationParameters_onNavigateTypeahead]: onNavigateTypeahead, [PropNames_TypeaheadNavigationParameters_isValidForTypeaheadNavigation]: isValidForTypeaheadNavigation, [PropNames_TypeaheadNavigationParameters_noTypeahead]: noTypeahead, [PropNames_TypeaheadNavigationParameters_typeaheadTimeout]: typeaheadTimeout, ..._void1 }) {
    const [getCurrentTypeahead, setCurrentTypeahead] = usePassiveState(useStableCallback((currentTypeahead, prev, reason) => {
      const handle = setTimeout(() => {
        setCurrentTypeahead(null, void 0);
        setTypeaheadStatus("none");
      }, typeaheadTimeout ?? 1e3);
      updateBasedOnTypeaheadChange(currentTypeahead, reason);
      return () => clearTimeout(handle);
    }));
    const sortedTypeaheadInfo = _([]);
    const [typeaheadStatus, setTypeaheadStatus] = useState("none");
    const [, setImeActive, getImeActive] = useState(false);
    const [nextTypeaheadChar, setNextTypeaheadChar] = useState(null);
    y3(() => {
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
        let trimmedRet = comparatorShared(lhs, rhs.text.substring(0, lhs.length));
        return trimmedRet;
      }
      return lhs - rhs;
    });
    const isDisabled = useStableGetter(noTypeahead);
    const propsStable = _(useTagProps({
      onKeyDown: useStableCallback((e3) => {
        if (isDisabled())
          return;
        const imeActive = getImeActive();
        const key = e3.key;
        if (e3.ctrlKey || e3.metaKey)
          return;
        if (!imeActive && e3.key === "Backspace") {
          setCurrentTypeahead((t3) => t3 == null ? null : [...t3].reverse().slice(1).reverse().join(""), e3);
          e3.preventDefault();
          e3.stopPropagation();
          return;
        }
        const isCharacterKey = key.length === 1 || !/^[A-Za-z]/.test(key);
        if (isCharacterKey) {
          if (key == " " && (getCurrentTypeahead() ?? "").trim().length == 0) {
          } else {
            e3.preventDefault();
            e3.stopPropagation();
            if (!imeActive)
              setNextTypeaheadChar(key);
          }
        }
      }),
      onCompositionStart: useStableCallback((e3) => {
        setNextTypeaheadChar(e3.data);
        setImeActive(false);
      }),
      onCompositionEnd: useStableCallback((_e) => {
        setImeActive(true);
      })
    }, "data-typeahead-navigation"));
    const excludeSpace = useStableCallback(() => {
      return typeaheadStatus != "none";
    });
    assertEmptyObject(_void1);
    return {
      context: useMemoObject({
        typeaheadNavigationContext: useMemoObject({
          insertingComparator,
          sortedTypeaheadInfo: sortedTypeaheadInfo.current,
          excludeSpace
        })
      }),
      [PropNames_TypeaheadNavigationReturn_getCurrentTypeahead]: getCurrentTypeahead,
      [PropNames_TypeaheadNavigationReturn_typeaheadStatus]: typeaheadStatus,
      props: propsStable.current
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
          const updateBestFit = (unsortedIndex) => {
            if (!isValidForTypeaheadNavigation(unsortedIndex))
              return;
            if (lowestUnsortedIndexAll == null || unsortedIndex < lowestUnsortedIndexAll) {
              lowestUnsortedIndexAll = unsortedIndex;
              lowestSortedIndexAll = i3;
            }
            if ((lowestUnsortedIndexNext == null || unsortedIndex < lowestUnsortedIndexNext) && unsortedIndex > (getIndex() ?? -Infinity)) {
              lowestUnsortedIndexNext = unsortedIndex;
              lowestSortedIndexNext = i3;
            }
          };
          let i3 = sortedTypeaheadIndex;
          while (i3 >= 0 && typeaheadComparator(currentTypeahead, sortedTypeaheadInfo.current[i3]) == 0) {
            updateBestFit(sortedTypeaheadInfo.current[i3].unsortedIndex);
            --i3;
          }
          i3 = sortedTypeaheadIndex;
          while (i3 < sortedTypeaheadInfo.current.length && typeaheadComparator(currentTypeahead, sortedTypeaheadInfo.current[i3]) == 0) {
            updateBestFit(sortedTypeaheadInfo.current[i3].unsortedIndex);
            ++i3;
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
  });
  var useTypeaheadNavigationChild = monitored(function useTypeaheadNavigationChild2({ info: { index, ..._void1 }, [PropNames_TextContentParameters_getText]: getText, [PropNames_RefElementReturn_getElement]: getElement, context: { typeaheadNavigationContext: { sortedTypeaheadInfo, insertingComparator, excludeSpace, ..._void2 } }, ..._void3 }) {
    const { [PropNames_TextContentReturn_getTextContent]: getTextContent, ..._void4 } = useTextContent({
      [PropNames_RefElementReturn_getElement]: getElement,
      [PropNames_TextContentParameters_getText]: getText,
      [PropNames_TextContentParameters_onTextContentChange]: T2((text) => {
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
    });
    assertEmptyObject(_void1);
    assertEmptyObject(_void2);
    assertEmptyObject(_void4);
    assertEmptyObject(_void3);
    return {
      [PropNames_TextContentReturn_getTextContent]: getTextContent,
      [PropNames_PressParameters_excludeSpace]: excludeSpace
    };
  });
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
  var useListNavigation = monitored(function useListNavigation2({ [PropNames_LinearNavigationParameters_arrowKeyDirection]: arrowKeyDirection, [PropNames_LinearNavigationParameters_disableHomeEndKeys]: disableHomeEndKeys, [PropNames_LinearNavigationParameters_getHighestIndex]: getHighestIndex, [PropNames_LinearNavigationParameters_getLowestIndex]: getLowestIndex, [PropNames_LinearNavigationParameters_isValidForLinearNavigation]: isValidForLinearNavigation, [PropNames_LinearNavigationParameters_navigatePastEnd]: navigatePastEnd, [PropNames_LinearNavigationParameters_navigatePastStart]: navigatePastStart, [PropNames_LinearNavigationParameters_onNavigateLinear]: onNavigateLinear, [PropNames_LinearNavigationParameters_pageNavigationSize]: pageNavigationSize, [PropNames_ManagedChildrenReturn_getChildren]: getChildren, [PropNames_PaginatedParameters_paginationMax]: paginationMax, [PropNames_PaginatedParameters_paginationMin]: paginationMin, [PropNames_RearrangeableReturn_indexDemangler]: indexDemangler, [PropNames_RearrangeableReturn_indexMangler]: indexMangler, [PropNames_RovingTabIndexParameters_focusSelfParent]: focusSelfParent, [PropNames_RovingTabIndexParameters_initiallyTabbedIndex]: initiallyTabbedIndex, [PropNames_RovingTabIndexParameters_onTabbableIndexChange]: onTabbableIndexChange, [PropNames_RovingTabIndexParameters_untabbable]: untabbable, [PropNames_RovingTabIndexParameters_untabbableBehavior]: untabbableBehavior, [PropNames_TypeaheadNavigationParameters_collator]: collator, [PropNames_TypeaheadNavigationParameters_isValidForTypeaheadNavigation]: isValidForTypeaheadNavigation, [PropNames_TypeaheadNavigationParameters_noTypeahead]: noTypeahead, [PropNames_TypeaheadNavigationParameters_onNavigateTypeahead]: onNavigateTypeahead, [PropNames_TypeaheadNavigationParameters_typeaheadTimeout]: typeaheadTimeout, [PropNames_RefElementReturn_getElement]: getElement, ...void1 }) {
    const { props: propsRTI, context: contextRovingTabIndex, ...rovingTabIndexReturn } = useRovingTabIndex({
      [PropNames_ManagedChildrenReturn_getChildren]: getChildren,
      [PropNames_RovingTabIndexParameters_focusSelfParent]: focusSelfParent,
      [PropNames_RovingTabIndexParameters_initiallyTabbedIndex]: initiallyTabbedIndex,
      [PropNames_RovingTabIndexParameters_onTabbableIndexChange]: onTabbableIndexChange,
      [PropNames_RovingTabIndexParameters_untabbable]: untabbable,
      [PropNames_RovingTabIndexParameters_untabbableBehavior]: untabbableBehavior,
      [PropNames_RefElementReturn_getElement]: getElement
    });
    const { [PropNames_RovingTabIndexReturn_getTabbableIndex]: getTabbableIndex, [PropNames_RovingTabIndexReturn_setTabbableIndex]: setTabbableIndex } = rovingTabIndexReturn;
    const { props: propsStableTN, context: contextTypeahead, ...typeaheadNavigationReturn } = useTypeaheadNavigation({
      [PropNames_RovingTabIndexReturn_getTabbableIndex]: getTabbableIndex,
      [PropNames_RovingTabIndexReturn_setTabbableIndex]: setTabbableIndex,
      [PropNames_TypeaheadNavigationParameters_collator]: collator,
      [PropNames_TypeaheadNavigationParameters_isValidForTypeaheadNavigation]: isValidForTypeaheadNavigation,
      [PropNames_TypeaheadNavigationParameters_noTypeahead]: noTypeahead,
      [PropNames_TypeaheadNavigationParameters_onNavigateTypeahead]: onNavigateTypeahead,
      [PropNames_TypeaheadNavigationParameters_typeaheadTimeout]: typeaheadTimeout
    });
    const { props: propsStableLN, ...linearNavigationReturn } = useLinearNavigation({
      [PropNames_LinearNavigationParameters_arrowKeyDirection]: arrowKeyDirection,
      [PropNames_LinearNavigationParameters_disableHomeEndKeys]: disableHomeEndKeys,
      [PropNames_LinearNavigationParameters_getHighestIndex]: getHighestIndex,
      [PropNames_LinearNavigationParameters_getLowestIndex]: getLowestIndex,
      [PropNames_LinearNavigationParameters_isValidForLinearNavigation]: isValidForLinearNavigation,
      [PropNames_LinearNavigationParameters_navigatePastEnd]: navigatePastEnd,
      [PropNames_LinearNavigationParameters_navigatePastStart]: navigatePastStart,
      [PropNames_LinearNavigationParameters_onNavigateLinear]: onNavigateLinear,
      [PropNames_LinearNavigationParameters_pageNavigationSize]: pageNavigationSize,
      [PropNames_PaginatedParameters_paginationMax]: paginationMax,
      [PropNames_PaginatedParameters_paginationMin]: paginationMin,
      [PropNames_RearrangeableReturn_indexDemangler]: indexDemangler,
      [PropNames_RearrangeableReturn_indexMangler]: indexMangler,
      [PropNames_RovingTabIndexReturn_getTabbableIndex]: getTabbableIndex,
      [PropNames_RovingTabIndexReturn_setTabbableIndex]: setTabbableIndex
    });
    assertEmptyObject(void1);
    return {
      ...rovingTabIndexReturn,
      ...typeaheadNavigationReturn,
      ...linearNavigationReturn,
      context: useMemoObject({
        ...contextRovingTabIndex,
        ...contextTypeahead
      }),
      props: [propsStableLN, propsStableTN, ...propsRTI]
    };
  });
  var useListNavigationChild = monitored(function useListNavigationChild2({ info: { index, untabbable, ...void1 }, context, [PropNames_RefElementReturn_getElement]: getElement, [PropNames_TextContentParameters_getText]: getText, ...void2 }) {
    const { info, props, ...rovingTabIndexChildReturn } = useRovingTabIndexChild({
      context,
      info: { index, untabbable },
      [PropNames_RefElementReturn_getElement]: getElement
    });
    const { ...typeaheadNavigationChildReturn } = useTypeaheadNavigationChild({
      [PropNames_RefElementReturn_getElement]: getElement,
      [PropNames_TextContentParameters_getText]: getText,
      context,
      info: { index }
    });
    assertEmptyObject(void1);
    assertEmptyObject(void2);
    return {
      info,
      props,
      ...typeaheadNavigationChildReturn,
      ...rovingTabIndexChildReturn
    };
  });

  // ../dist/component-detail/keyboard-navigation/use-grid-navigation-partial.js
  var P18 = `PropNames.GridNavigationParameters`;
  var P32 = `PropNames.GridNavigationCellParameters`;
  var PropNames_GridNavigationParameters_onTabbableColumnChange = `${P18}.onTabbableColumnChange`;
  var PropNames_GridNavigationParameters_initiallyTabbableColumn = `${P18}.initiallyTabbableColumn`;
  var PropNames_GridNavigationCellParameters_colSpan = `${P32}.colSpan`;
  var useGridNavigation = monitored(function useGridNavigation2({ [PropNames_LinearNavigationParameters_disableHomeEndKeys]: disableHomeEndKeys, [PropNames_LinearNavigationParameters_getHighestIndex]: getHighestIndex, [PropNames_LinearNavigationParameters_getLowestIndex]: getLowestIndex, [PropNames_LinearNavigationParameters_isValidForLinearNavigation]: isValidForLinearNavigation, [PropNames_LinearNavigationParameters_navigatePastEnd]: navigatePastEnd, [PropNames_LinearNavigationParameters_navigatePastStart]: navigatePastStart, [PropNames_LinearNavigationParameters_onNavigateLinear]: onNavigateLinear, [PropNames_LinearNavigationParameters_pageNavigationSize]: pageNavigationSize, [PropNames_ManagedChildrenReturn_getChildren]: getChildren, [PropNames_PaginatedParameters_paginationMax]: paginationMax, [PropNames_PaginatedParameters_paginationMin]: paginationMin, [PropNames_RearrangeableReturn_indexDemangler]: indexDemangler, [PropNames_RearrangeableReturn_indexMangler]: indexMangler, [PropNames_RefElementReturn_getElement]: getElement, [PropNames_RovingTabIndexParameters_focusSelfParent]: focusSelfParent, [PropNames_RovingTabIndexParameters_initiallyTabbedIndex]: initiallyTabbedIndex, [PropNames_RovingTabIndexParameters_onTabbableIndexChange]: onTabbableIndexChange, [PropNames_RovingTabIndexParameters_untabbable]: untabbable, [PropNames_RovingTabIndexParameters_untabbableBehavior]: untabbableBehavior, [PropNames_TypeaheadNavigationParameters_collator]: collator, [PropNames_TypeaheadNavigationParameters_isValidForTypeaheadNavigation]: isValidForTypeaheadNavigation, [PropNames_TypeaheadNavigationParameters_noTypeahead]: noTypeahead, [PropNames_TypeaheadNavigationParameters_onNavigateTypeahead]: onNavigateTypeahead, [PropNames_TypeaheadNavigationParameters_typeaheadTimeout]: typeaheadTimeout, [PropNames_GridNavigationParameters_onTabbableColumnChange]: onTabbableColumnChange, [PropNames_GridNavigationParameters_initiallyTabbableColumn]: initiallyTabbableColumn, ...void2 }) {
    const [getTabbableColumn, setTabbableColumn] = usePassiveState(onTabbableColumnChange, useStableCallback(() => {
      let t3 = initiallyTabbableColumn ?? 0;
      return { actual: t3, ideal: t3 };
    }));
    const { context: { rovingTabIndexContext, typeaheadNavigationContext }, props, ...retLN } = useListNavigation({
      [PropNames_LinearNavigationParameters_arrowKeyDirection]: "vertical",
      [PropNames_LinearNavigationParameters_disableHomeEndKeys]: disableHomeEndKeys,
      [PropNames_LinearNavigationParameters_getHighestIndex]: getHighestIndex,
      [PropNames_LinearNavigationParameters_getLowestIndex]: getLowestIndex,
      [PropNames_LinearNavigationParameters_isValidForLinearNavigation]: isValidForLinearNavigation,
      [PropNames_LinearNavigationParameters_navigatePastEnd]: navigatePastEnd,
      [PropNames_LinearNavigationParameters_navigatePastStart]: navigatePastStart,
      [PropNames_LinearNavigationParameters_onNavigateLinear]: onNavigateLinear,
      [PropNames_LinearNavigationParameters_pageNavigationSize]: pageNavigationSize,
      [PropNames_ManagedChildrenReturn_getChildren]: getChildren,
      [PropNames_PaginatedParameters_paginationMax]: paginationMax,
      [PropNames_PaginatedParameters_paginationMin]: paginationMin,
      [PropNames_RearrangeableReturn_indexDemangler]: indexDemangler,
      [PropNames_RearrangeableReturn_indexMangler]: indexMangler,
      [PropNames_RefElementReturn_getElement]: getElement,
      [PropNames_RovingTabIndexParameters_focusSelfParent]: focusSelfParent,
      [PropNames_RovingTabIndexParameters_initiallyTabbedIndex]: initiallyTabbedIndex,
      [PropNames_RovingTabIndexParameters_onTabbableIndexChange]: onTabbableIndexChange,
      [PropNames_RovingTabIndexParameters_untabbable]: untabbable,
      [PropNames_RovingTabIndexParameters_untabbableBehavior]: untabbableBehavior,
      [PropNames_TypeaheadNavigationParameters_collator]: collator,
      [PropNames_TypeaheadNavigationParameters_isValidForTypeaheadNavigation]: isValidForTypeaheadNavigation,
      [PropNames_TypeaheadNavigationParameters_noTypeahead]: noTypeahead,
      [PropNames_TypeaheadNavigationParameters_onNavigateTypeahead]: onNavigateTypeahead,
      [PropNames_TypeaheadNavigationParameters_typeaheadTimeout]: typeaheadTimeout
    });
    assertEmptyObject(void2);
    const { [PropNames_RovingTabIndexReturn_setTabbableIndex]: setTabbableIndex } = retLN;
    const gridNavigationRowContext = useMemoObject({
      setTabbableRow: setTabbableIndex,
      getTabbableColumn,
      setTabbableColumn
    });
    return {
      props,
      context: useMemoObject({
        gridNavigationRowContext,
        rovingTabIndexContext,
        typeaheadNavigationContext
      }),
      ...retLN
    };
  });
  var useGridNavigationRow = monitored(function useGridNavigationRow2({
    // Stuff for the row as a child of the parent grid
    info: { index, untabbable, ...void3 },
    [PropNames_TextContentParameters_getText]: getText,
    context: contextFromParent,
    // Stuff for the row as a parent of child cells
    [PropNames_LinearNavigationParameters_getHighestIndex]: getHighestIndex,
    [PropNames_LinearNavigationParameters_getLowestIndex]: getLowestIndex,
    [PropNames_LinearNavigationParameters_isValidForLinearNavigation]: isValidForLinearNavigation,
    [PropNames_LinearNavigationParameters_navigatePastEnd]: navigatePastEnd,
    [PropNames_LinearNavigationParameters_navigatePastStart]: navigatePastStart,
    [PropNames_RovingTabIndexParameters_untabbable]: rowIsUntabbableAndSoAreCells,
    [PropNames_RovingTabIndexParameters_initiallyTabbedIndex]: initiallyTabbedIndex,
    [PropNames_RovingTabIndexParameters_onTabbableIndexChange]: onTabbableIndexChange,
    [PropNames_RefElementReturn_getElement]: getElement,
    [PropNames_ManagedChildrenReturn_getChildren]: getChildren,
    [PropNames_TypeaheadNavigationParameters_collator]: collator,
    [PropNames_TypeaheadNavigationParameters_isValidForTypeaheadNavigation]: isValidForTypeaheadNavigation,
    [PropNames_TypeaheadNavigationParameters_noTypeahead]: noTypeahead,
    [PropNames_TypeaheadNavigationParameters_onNavigateTypeahead]: onNavigateTypeahead,
    [PropNames_TypeaheadNavigationParameters_typeaheadTimeout]: typeaheadTimeout,
    ...void1
  }) {
    const { getTabbableColumn, setTabbableColumn, setTabbableRow } = contextFromParent.gridNavigationRowContext;
    const getIndex = useStableCallback(() => {
      return index;
    });
    const whenThisRowIsFocused = useStableCallback((e3) => {
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
          const e4 = child.getElement();
          child.focusSelf(e4);
        } else {
          focus(e3);
        }
      }
    }, []);
    const focusSelf = whenThisRowIsFocused;
    const { props: propsLNC, info: { getLocallyTabbable, setLocallyTabbable, ...void2 }, ...retLN } = useListNavigationChild({
      info: { index, untabbable },
      context: contextFromParent,
      [PropNames_RefElementReturn_getElement]: getElement,
      [PropNames_TextContentParameters_getText]: getText
    });
    const allChildCellsAreUntabbable = !retLN[PropNames_RovingTabIndexChildReturn_tabbable];
    const { props: propsLN, context: contextULN, ...retLS } = useListNavigation({
      [PropNames_RearrangeableReturn_indexDemangler]: identity_default,
      [PropNames_RearrangeableReturn_indexMangler]: identity_default,
      [PropNames_RovingTabIndexParameters_untabbableBehavior]: "leave-child-focused",
      [PropNames_RovingTabIndexParameters_focusSelfParent]: whenThisRowIsFocused,
      [PropNames_RovingTabIndexParameters_untabbable]: allChildCellsAreUntabbable || rowIsUntabbableAndSoAreCells,
      [PropNames_RovingTabIndexParameters_initiallyTabbedIndex]: initiallyTabbedIndex,
      [PropNames_RovingTabIndexParameters_onTabbableIndexChange]: useStableCallback((v4, p4, r5) => {
        setTabbableColumn({ ideal: v4, actual: v4 }, r5);
        onTabbableIndexChange?.(v4, p4, r5);
      }),
      [PropNames_LinearNavigationParameters_onNavigateLinear]: useStableCallback((next, event) => {
        setTabbableColumn((prev) => ({ ideal: next, actual: prev?.actual ?? next }), event);
      }),
      [PropNames_LinearNavigationParameters_disableHomeEndKeys]: true,
      [PropNames_LinearNavigationParameters_pageNavigationSize]: 0,
      [PropNames_LinearNavigationParameters_arrowKeyDirection]: "horizontal",
      [PropNames_PaginatedParameters_paginationMax]: null,
      [PropNames_PaginatedParameters_paginationMin]: null,
      [PropNames_LinearNavigationParameters_getHighestIndex]: getHighestIndex,
      [PropNames_LinearNavigationParameters_getLowestIndex]: getLowestIndex,
      [PropNames_LinearNavigationParameters_isValidForLinearNavigation]: isValidForLinearNavigation,
      [PropNames_LinearNavigationParameters_navigatePastEnd]: navigatePastEnd,
      [PropNames_LinearNavigationParameters_navigatePastStart]: navigatePastStart,
      [PropNames_RefElementReturn_getElement]: getElement,
      [PropNames_ManagedChildrenReturn_getChildren]: getChildren,
      [PropNames_TypeaheadNavigationParameters_collator]: collator,
      [PropNames_TypeaheadNavigationParameters_isValidForTypeaheadNavigation]: isValidForTypeaheadNavigation,
      [PropNames_TypeaheadNavigationParameters_noTypeahead]: noTypeahead,
      [PropNames_TypeaheadNavigationParameters_onNavigateTypeahead]: onNavigateTypeahead,
      [PropNames_TypeaheadNavigationParameters_typeaheadTimeout]: typeaheadTimeout
    });
    assertEmptyObject(void1);
    assertEmptyObject(void2);
    assertEmptyObject(void3);
    const { [PropNames_RovingTabIndexReturn_setTabbableIndex]: setTabbableIndex } = retLS;
    const gridNavigationCellContext = useMemoObject({
      //allChildCellsAreUntabbable,
      setTabbableRow,
      getRowIndex: getIndex,
      getTabbableColumn,
      setTabbableColumn,
      setTabbableCell: setTabbableIndex
    });
    const props = [
      ...propsLN,
      propsLNC,
      // Ensure that if the browser focuses the row for whatever reason, we transfer the focus to a child cell.
      { onFocus: useStableCallback((e3) => whenThisRowIsFocused(e3.currentTarget)) }
    ];
    const contextToChildren = useMemoObject({
      gridNavigationCellContext,
      ...contextULN
    });
    return {
      context: contextToChildren,
      props,
      info: { focusSelf, getLocallyTabbable, setLocallyTabbable },
      ...retLS,
      ...retLN
    };
  });
  var useGridNavigationCell = monitored(function useGridNavigationCell2({ context: { gridNavigationCellContext: { getRowIndex, setTabbableRow, getTabbableColumn: _getCurrentColumn, setTabbableColumn, setTabbableCell, ...void4 }, rovingTabIndexContext, typeaheadNavigationContext, ...void5 }, info: { index, untabbable, ...void7 }, [PropNames_RefElementReturn_getElement]: getElement, [PropNames_TextContentParameters_getText]: getText, [PropNames_GridNavigationCellParameters_colSpan]: colSpan, ...void1 }) {
    colSpan ??= 1;
    const { [PropNames_HasCurrentFocusParameters_onCurrentFocusedInnerChanged]: onCurrentFocusedInnerChanged, [PropNames_PressParameters_excludeSpace]: excludeSpace, [PropNames_RovingTabIndexChildReturn_getTabbable]: getTabbable, [PropNames_RovingTabIndexChildReturn_tabbable]: tabbable, [PropNames_TextContentReturn_getTextContent]: getTextContent, props, info: infoLS, ...void2 } = useListNavigationChild({
      info: { index, untabbable },
      context: { rovingTabIndexContext, typeaheadNavigationContext },
      [PropNames_RefElementReturn_getElement]: getElement,
      [PropNames_TextContentParameters_getText]: getText
    });
    assertEmptyObject(void1);
    assertEmptyObject(void2);
    assertEmptyObject(void4);
    assertEmptyObject(void5);
    assertEmptyObject(void7);
    return {
      info: infoLS,
      props: useMergedProps(props, { onClick: (e3) => setTabbableColumn((prev) => ({ ideal: index, actual: prev?.actual ?? index }), e3) }),
      [PropNames_RovingTabIndexChildReturn_getTabbable]: getTabbable,
      [PropNames_PressParameters_excludeSpace]: excludeSpace,
      [PropNames_RovingTabIndexChildReturn_tabbable]: tabbable,
      [PropNames_TextContentReturn_getTextContent]: getTextContent,
      [PropNames_HasCurrentFocusParameters_onCurrentFocusedInnerChanged]: useStableCallback((focused, prev, e3) => {
        onCurrentFocusedInnerChanged?.(focused, prev, e3);
        if (focused) {
          setTabbableRow(getRowIndex(), e3, false);
          setTabbableColumn((prev2) => {
            return { actual: index, ideal: prev2?.ideal ?? index };
          }, e3);
          setTabbableCell((prev2) => {
            if (prev2 != null && (prev2 < index || prev2 > index + colSpan)) {
              return prev2;
            }
            return index;
          }, e3, false);
        }
      })
    };
  });

  // ../dist/component-detail/processed-children/use-staggered-children.js
  var P19 = `PropNames.StaggeredParameters`;
  var R15 = `PropNames.StaggeredReturn`;
  var R25 = `PropNames.StaggeredChildReturn`;
  var PropNames_StaggeredParameters_staggered = `${P19}.staggered`;
  var PropNames_StaggeredParameters_childCount = `${P19}.childCount`;
  var PropNames_StaggeredParameters_untabbable = `${P19}.untabbable`;
  var PropNames_StaggeredParameters_untabbableBehavior = `${P19}.untabbableBehavior`;
  var PropNames_StaggeredParameters_onTabbableIndexChange = `${P19}.onTabbableIndexChange`;
  var PropNames_StaggeredReturn_stillStaggering = `${R15}.stillStaggering`;
  var PropNames_StaggeredChildReturn_parentIsStaggered = `${R25}.parentIsStaggered`;
  var PropNames_StaggeredChildReturn_hideBecauseStaggered = `${R25}.hideBecauseStaggered`;
  var PropNames_StaggeredChildReturn_childUseEffect = `${R25}.childUseEffect`;
  var useStaggeredChildren = monitored(function useStaggeredChildren2({
    //managedChildrenReturn: { getChildren },
    //staggeredChildrenParameters: { staggered, childCount },
    //refElementReturn: { getElement }
    [PropNames_ManagedChildrenReturn_getChildren]: getChildren,
    [PropNames_StaggeredParameters_childCount]: childCount,
    [PropNames_StaggeredParameters_staggered]: staggered,
    [PropNames_RefElementReturn_getElement]: getElement
  }) {
    const [currentlyStaggering, setCurrentlyStaggering] = useState(staggered);
    const getTargetStaggerIndex = useStableGetter((childCount || 0) - 1);
    const timeoutHandle = _(-1);
    const resetEmergencyTimeout = T2(() => {
      if (timeoutHandle.current != -1)
        clearTimeout(timeoutHandle.current);
      timeoutHandle.current = setTimeout(() => {
        timeoutHandle.current = setTimeout(() => {
          timeoutHandle.current = -1;
          let target = getTargetStaggerIndex();
          setDisplayedStaggerIndex((prev) => {
            let next = Math.min(target || 0, (prev || 0) + 1);
            while (next <= (getChildCount() || 0) && getChildren().getAt(next)?.getStaggeredVisible() == true)
              ++next;
            return next;
          });
        }, 10);
      }, 100);
    }, [
      /* Must be empty */
    ]);
    p3(() => {
      if (timeoutHandle.current == -1) {
        resetEmergencyTimeout();
        let current = getDisplayedStaggerIndex();
        let next = Math.min(childCount ?? 0, (current ?? 0) + 1);
        setDisplayedStaggerIndex(next);
      }
    }, [childCount]);
    const [getDisplayedStaggerIndex, setDisplayedStaggerIndex] = usePassiveState(T2((newIndex, prevIndex) => {
      if (newIndex == null || !s4.current) {
        return;
      }
      setCurrentlyStaggering(newIndex < (getTargetStaggerIndex() ?? 0));
      queueMicrotask(() => {
        for (let i3 = (prevIndex ?? 0) - 1; i3 <= newIndex; ++i3) {
          getChildren().getAt(i3)?.setStaggeredVisible(true);
        }
      });
      resetEmergencyTimeout();
    }, [
      /* Must be empty */
    ]), returnNull);
    const parentIsStaggered = !!staggered;
    const getChildCount = useStableGetter(childCount);
    const childCallsThisToTellTheParentToMountTheNextOne = T2((justMountedChildIndex) => {
      setDisplayedStaggerIndex((prevIndex) => {
        let next = Math.min(
          getTargetStaggerIndex() ?? 0,
          // Don't go higher than the highest child
          1 + Math.max(prevIndex ?? 0, justMountedChildIndex)
          // Go one higher than the child that just mounted itself or any previously mounted child (TODO: Is that last bit working as intended?)
        );
        let s5 = 0;
        while (next < (getChildCount() || 0) && getChildren().getAt(next)?.getStaggeredVisible()) {
          ++next;
          ++s5;
        }
        return next;
      });
    }, []);
    const s4 = _(parentIsStaggered);
    s4.current = parentIsStaggered;
    const getDefaultStaggeredVisible = T2((i3) => {
      if (s4.current) {
        const staggerIndex = getDisplayedStaggerIndex();
        if (staggerIndex == null)
          return false;
        return i3 < staggerIndex;
      } else {
        return true;
      }
    }, []);
    const intersectionObserver = _(null);
    const elementToIndex = _(/* @__PURE__ */ new Map());
    const setElementToIndexMap = T2((index, element) => {
      elementToIndex.current.set(element, index);
    }, []);
    const getIntersectionObserver = T2(() => intersectionObserver.current, []);
    const staggeredChildContext = F2(() => ({
      parentIsStaggered,
      childCallsThisToTellTheParentToMountTheNextOne,
      getDefaultStaggeredVisible,
      getIntersectionObserver,
      setElementToIndexMap
    }), [parentIsStaggered]);
    p3(() => {
      const element = getElement();
      const io = intersectionObserver.current = new IntersectionObserver((entries) => {
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
      [PropNames_StaggeredReturn_stillStaggering]: currentlyStaggering,
      context: F2(() => ({
        staggeredChildContext
      }), [staggeredChildContext])
    };
  });
  var useStaggeredChild = monitored(function useStaggeredChild2({
    info: { index },
    //refElementReturn: { getElement },
    context: { staggeredChildContext: { parentIsStaggered, getDefaultStaggeredVisible, childCallsThisToTellTheParentToMountTheNextOne, getIntersectionObserver, setElementToIndexMap } }
  }) {
    const [staggeredVisible, setStaggeredVisible, getStaggeredVisible] = useState(getDefaultStaggeredVisible(index));
    const becauseScreen = _(false);
    const [getOnScreen, setOnScreen] = usePassiveState(useStableCallback((next, prev, reason) => {
      if (staggeredVisible)
        return;
      if (next) {
        const io = getIntersectionObserver();
        io?.unobserve(e3.current);
        setStaggeredVisible(true);
        becauseScreen.current = true;
      }
    }), returnFalse);
    const childUseEffect = T2(() => {
      if (!becauseScreen.current && (parentIsStaggered && staggeredVisible)) {
        if (parentIsStaggered && staggeredVisible) {
          childCallsThisToTellTheParentToMountTheNextOne(index);
        } else if (!parentIsStaggered) {
          childCallsThisToTellTheParentToMountTheNextOne(index);
        }
      }
    }, [index, parentIsStaggered && staggeredVisible]);
    const e3 = _(null);
    return {
      props: useTagProps(!parentIsStaggered ? {} : { "aria-busy": (!staggeredVisible).toString() }, "data-staggered-children-child"),
      [PropNames_StaggeredChildReturn_hideBecauseStaggered]: parentIsStaggered ? !staggeredVisible : false,
      [PropNames_StaggeredChildReturn_childUseEffect]: childUseEffect,
      [PropNames_StaggeredChildReturn_parentIsStaggered]: parentIsStaggered,
      info: { setStaggeredVisible, getStaggeredVisible },
      [PropNames_RefElementParameters_onElementChange]: useStableCallback((element) => {
        setElementToIndexMap(index, element);
        e3.current = element || e3.current;
        const io = getIntersectionObserver();
        if (e3.current) {
          io?.observe(e3.current);
        } else {
          io?.unobserve(e3.current);
        }
      })
    };
  });

  // ../dist/component-detail/processed-children/use-processed-children.js
  var useProcessedChildren = monitored(function useProcessedChildren2({ [PropNames_ChildrenHaveFocusReturn_getAnyFocused]: getAnyFocused, [PropNames_ManagedChildrenReturn_getChildren]: getChildren, [PropNames_PaginatedParameters_paginationMax]: paginationMax, [PropNames_PaginatedParameters_paginationMin]: paginationMin, [PropNames_StaggeredParameters_staggered]: staggered, [PropNames_RearrangeableParameters_adjust]: adjust, [PropNames_RearrangeableParameters_onRearranged]: onRearranged, [PropNames_RearrangeableParameters_children]: childrenUnsorted, [PropNames_RearrangeableParameters_compare]: compare, [PropNames_RearrangeableParameters_getIndex]: getIndex, [PropNames_RovingTabIndexReturn_getTabbableIndex]: getTabbableIndex, [PropNames_RovingTabIndexReturn_setTabbableIndex]: setTabbableIndex, [PropNames_RefElementReturn_getElement]: getElement, [PropNames_ManagedChildrenParameters_onAfterChildLayoutEffect]: onAfterChildLayoutEffect, [PropNames_ManagedChildrenParameters_onChildrenCountChange]: onChildrenCountChange, [PropNames_ManagedChildrenParameters_onChildrenMountChange]: onChildrenMountChange, context, ...void4 }) {
    const childCount = childrenUnsorted.length;
    const { context: { managedChildContext }, ...managedChildrenReturn } = useManagedChildren({
      [PropNames_ManagedChildrenParameters_onAfterChildLayoutEffect]: onAfterChildLayoutEffect,
      [PropNames_ManagedChildrenParameters_onChildrenCountChange]: onChildrenCountChange,
      [PropNames_ManagedChildrenParameters_onChildrenMountChange]: onChildrenMountChange
    });
    const { ...rearrangeableChildrenReturn } = useRearrangeableChildren({
      [PropNames_RearrangeableParameters_adjust]: adjust,
      [PropNames_RearrangeableParameters_onRearranged]: useStableCallback(() => {
        refreshPagination(paginationMin, paginationMax);
        onRearranged?.();
      }),
      [PropNames_RearrangeableParameters_children]: childrenUnsorted,
      [PropNames_RearrangeableParameters_compare]: compare,
      [PropNames_RearrangeableParameters_getIndex]: getIndex,
      ...managedChildrenReturn,
      context
    });
    const indexDemangler = rearrangeableChildrenReturn[PropNames_RearrangeableReturn_indexDemangler];
    const { context: { paginatedChildContext }, ...paginatedChildrenReturn } = usePaginatedChildren({
      [PropNames_ChildrenHaveFocusReturn_getAnyFocused]: getAnyFocused,
      [PropNames_ManagedChildrenReturn_getChildren]: getChildren,
      [PropNames_PaginatedParameters_childCount]: childCount,
      [PropNames_PaginatedParameters_paginationMax]: paginationMax,
      [PropNames_PaginatedParameters_paginationMin]: paginationMin,
      [PropNames_RearrangeableReturn_indexDemangler]: indexDemangler,
      [PropNames_RovingTabIndexReturn_getTabbableIndex]: getTabbableIndex,
      [PropNames_RovingTabIndexReturn_setTabbableIndex]: setTabbableIndex
    });
    const refreshPagination = paginatedChildrenReturn[PropNames_PaginatedReturn_refreshPagination];
    const { context: { staggeredChildContext }, ...staggeredChildrenReturn } = useStaggeredChildren({
      [PropNames_ManagedChildrenReturn_getChildren]: managedChildrenReturn[PropNames_ManagedChildrenReturn_getChildren],
      [PropNames_StaggeredParameters_childCount]: childCount,
      [PropNames_StaggeredParameters_staggered]: staggered,
      [PropNames_RefElementReturn_getElement]: getElement
    });
    assertEmptyObject(void4);
    return {
      ...paginatedChildrenReturn,
      ...rearrangeableChildrenReturn,
      ...staggeredChildrenReturn,
      context: useMemoObject({
        staggeredChildContext,
        paginatedChildContext,
        managedChildContext
      })
    };
  });
  var useProcessedChild = monitored(function useProcessedChild2({ context, info: { index, ...uinfo } }) {
    const { paginatedChildContext, staggeredChildContext } = context;
    const { info: { setChildCountIfPaginated, setPaginationVisible }, props: propsPaginated, ...paginatedChildReturn } = usePaginatedChild({ context: { paginatedChildContext }, info: { index } });
    const { info: { setStaggeredVisible, getStaggeredVisible }, props: propsStaggered, [PropNames_RefElementParameters_onElementChange]: onElementChange, ...staggeredChildReturn } = useStaggeredChild({ context: { staggeredChildContext }, info: { index } });
    const { ...managedChildReturn } = useManagedChild({
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
      ...managedChildReturn,
      ...paginatedChildReturn,
      ...staggeredChildReturn,
      [PropNames_RefElementParameters_onElementChange]: onElementChange
    };
  });

  // ../dist/component-detail/selection/use-multi-selection.js
  var P110 = `PropNames.MultiSelectionParameters`;
  var P22 = `PropNames.MultiSelectionChildParameters`;
  var R16 = `PropNames.MultiSelectionReturn`;
  var R26 = `PropNames.MultiSelectionChildReturn`;
  var PropNames_MultiSelectionParameters_onSelectionChange = `${P110}.onSelectionChange`;
  var PropNames_MultiSelectionParameters_multiSelectionMode = `${P110}.multiSelectionMode`;
  var PropNames_MultiSelectionParameters_multiSelectionAriaPropName = `${P110}.multiSelectionAriaPropName`;
  var PropNames_MultiSelectionReturn_changeMultiSelectedIndex = `${R16}.changeMultiSelectedIndex`;
  var PropNames_MultiSelectionReturn_getMultiSelectedIndex = `${R16}.getMultiSelectedIndex`;
  var PropNames_MultiSelectionChildParameters_onMultiSelectChange = `${P22}.onMultiSelectChange`;
  var PropNames_MultiSelectionChildParameters_initiallyMultiSelected = `${P22}.initiallyMultiSelected`;
  var PropNames_MultiSelectionChildParameters_multiSelectionDisabled = `${P22}.multiSelectionDisabled`;
  var PropNames_MultiSelectionChildParameters_multiSelected = `${P22}.multiSelected`;
  var PropNames_MultiSelectionChildReturn_changeMultiSelected = `${R26}.changeMultiSelected`;
  var PropNames_MultiSelectionChildReturn_multiSelected = `${R26}.multiSelected`;
  var PropNames_MultiSelectionChildReturn_getMultiSelected = `${R26}.getMultiSelected`;
  function useMultiSelection({ [PropNames_ChildrenHaveFocusReturn_getAnyFocused]: getAnyFocused, [PropNames_ManagedChildrenReturn_getChildren]: getChildren, [PropNames_MultiSelectionParameters_multiSelectionAriaPropName]: multiSelectionAriaPropName, [PropNames_MultiSelectionParameters_multiSelectionMode]: multiSelectionMode, [PropNames_MultiSelectionParameters_onSelectionChange]: onSelectionChange, ...void2 }) {
    const selectedIndices = _(/* @__PURE__ */ new Set());
    const unselectedIndices = _(/* @__PURE__ */ new Set());
    assertEmptyObject(void2);
    const startOfShiftSelect = _(null);
    let shiftKeyHeld = _(false);
    let ctrlKeyHeld = _(false);
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
      const selectedPercent = childCount == 0 ? 0 : selectedIndices.current.size / childCount;
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
    let nextCtrlAIsUndo = _(false);
    useGlobalHandler(document, "keydown", useStableCallback((e3) => {
      shiftKeyHeld.current = e3.shiftKey || e3.key == "Shift";
      ctrlKeyHeld.current = e3.ctrlKey || e3.key == "Control";
      if (getAnyFocused()) {
        if (e3.code == "KeyA" && e3.ctrlKey && !e3.repeat) {
          if (multiSelectionMode != "disabled") {
            changeAllChildren(e3, !nextCtrlAIsUndo.current ? returnTrue : returnFalse);
            e3.preventDefault();
            e3.stopPropagation();
            nextCtrlAIsUndo.current = !nextCtrlAIsUndo.current;
          }
        }
      }
    }), { capture: true });
    useGlobalHandler(document, "keyup", (e3) => {
      if (e3.key == "Shift")
        shiftKeyHeld.current = false;
      if (e3.key == "Control")
        ctrlKeyHeld.current = false;
    }, { passive: true, capture: true });
    return {
      context: useMemoObject({
        multiSelectionContext: useMemoObject({
          doContiguousSelection,
          notifyParentOfChildSelectChange,
          [PropNames_MultiSelectionParameters_multiSelectionAriaPropName]: multiSelectionAriaPropName,
          [PropNames_MultiSelectionParameters_multiSelectionMode]: multiSelectionMode,
          changeAllChildren,
          getCtrlKeyDown: T2(() => ctrlKeyHeld.current, []),
          getShiftKeyDown: T2(() => shiftKeyHeld.current, []),
          getAnyFocused
        })
      }),
      [PropNames_ChildrenHaveFocusParameters_onCompositeFocusChange]: onCompositeFocusChange,
      props: useMemoObject({})
    };
  }
  function useMultiSelectionChild({ info: { index, ...void4 }, [PropNames_MultiSelectionChildParameters_initiallyMultiSelected]: initiallyMultiSelected, [PropNames_MultiSelectionChildParameters_multiSelectionDisabled]: multiSelectionDisabled, [PropNames_MultiSelectionChildParameters_onMultiSelectChange]: onMultiSelectChange, context: { multiSelectionContext: { notifyParentOfChildSelectChange, [PropNames_MultiSelectionParameters_multiSelectionAriaPropName]: multiSelectionAriaPropName, [PropNames_MultiSelectionParameters_multiSelectionMode]: multiSelectionMode, doContiguousSelection, changeAllChildren, getCtrlKeyDown, getShiftKeyDown, getAnyFocused, ...void5 }, ...void3 }, ...void2 }) {
    const pressFreebie = _(false);
    const onPressSync = (e3) => {
      if (!multiSelectionDisabled) {
        if (multiSelectionMode == "activation") {
          if (e3.shiftKey) {
            doContiguousSelection(e3, index);
          } else {
            onMultiSelectChange?.(enhanceEvent(e3, { multiSelected: !getLocalSelected() }));
          }
        } else {
          if (e3.ctrlKey) {
            onMultiSelectChange?.(enhanceEvent(e3, { multiSelected: !getLocalSelected() }));
          } else {
            pressFreebie.current = true;
            focus(e3.currentTarget);
            onCurrentFocusedInnerChanged(true, false, e3);
          }
        }
      }
    };
    const [localSelected, setLocalSelected, getLocalSelected] = useState(initiallyMultiSelected ?? false);
    const changeMultiSelected = useStableCallback((e3, selected) => {
      console.assert(selected != null);
      console.assert(!multiSelectionDisabled);
      console.assert(multiSelectIsEnabled);
      let prevSelected = getLocalSelected();
      if (prevSelected != selected) {
        setLocalSelected(selected);
        notifyParentOfChildSelectChange(e3, index, selected, prevSelected);
      }
    });
    const multiSelectIsEnabled = multiSelectionMode != "disabled";
    y3(() => {
      if (multiSelectIsEnabled) {
        notifyParentOfChildSelectChange(null, index, getLocalSelected(), void 0);
        return () => notifyParentOfChildSelectChange(null, index, void 0, getLocalSelected());
      }
    }, [index, multiSelectIsEnabled]);
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
      [PropNames_MultiSelectionChildReturn_changeMultiSelected]: changeMultiSelected,
      [PropNames_MultiSelectionChildReturn_multiSelected]: localSelected,
      [PropNames_MultiSelectionChildReturn_getMultiSelected]: getLocalSelected,
      [PropNames_MultiSelectionParameters_multiSelectionMode]: multiSelectionMode,
      [PropNames_PressParameters_onPressSync]: onPressSync,
      [PropNames_HasCurrentFocusParameters_onCurrentFocusedInnerChanged]: onCurrentFocusedInnerChanged,
      props: { [multiSelectionAriaPropName || "aria-selected"]: multiSelectionMode == "disabled" ? void 0 : localSelected ? "true" : "false" },
      info: {
        getMultiSelected: getLocalSelected,
        setSelectedFromParent,
        getMultiSelectionDisabled: useStableGetter(multiSelectionDisabled)
      }
    };
  }
  function useMultiSelectionChildDeclarative({ [PropNames_MultiSelectionChildParameters_onMultiSelectChange]: onMultiSelectChange, [PropNames_MultiSelectionChildParameters_multiSelected]: multiSelected, [PropNames_MultiSelectionChildReturn_changeMultiSelected]: changeMultiSelected, ...void1 }) {
    let s4 = multiSelected || false;
    let reasonRef = _(void 0);
    p3(() => {
      changeMultiSelected(reasonRef.current, s4);
    }, [s4]);
    const omsc = useStableCallback((e3) => {
      reasonRef.current = e3;
      return onMultiSelectChange?.(e3);
    });
    const setSelectedFromParent = useStableCallback((event, multiSelected2) => {
      onMultiSelectChange?.(enhanceEvent(event, { multiSelected: multiSelected2 }));
    });
    assertEmptyObject(void1);
    return {
      [PropNames_MultiSelectionChildParameters_onMultiSelectChange]: omsc,
      info: { setSelectedFromParent }
    };
  }

  // ../dist/component-detail/selection/use-single-selection.js
  var P111 = `PropNames.SingleSelectionParameters`;
  var R17 = `PropNames.SingleSelectionReturn`;
  var PropNames_SingleSelectionParameters_initiallySingleSelectedIndex = `${P111}.initiallySingleSelectedIndex`;
  var PropNames_SingleSelectionParameters_onSingleSelectedIndexChange = `${P111}.onSingleSelectedIndexChange`;
  var PropNames_SingleSelectionParameters_singleSelectionMode = `${P111}.singleSelectionMode`;
  var PropNames_SingleSelectionParameters_singleSelectionAriaPropName = `${P111}.singleSelectionAriaPropName`;
  var PropNames_SingleSelectionParameters_singleSelectedIndex = `${P111}.singleSelectedIndex`;
  var PropNames_SingleSelectionReturn_changeSingleSelectedIndex = `${R17}.changeSingleSelectedIndex`;
  var PropNames_SingleSelectionReturn_getSingleSelectedIndex = `${R17}.getSingleSelectedIndex`;
  var PropNames_SingleSelectionChildParameters_singleSelectionDisabled = `${P111}.singleSelectionDisabled`;
  var PropNames_SingleSelectionChildReturn_singleSelected = `${R17}.singleSelected`;
  var PropNames_SingleSelectionChildReturn_getSingleSelected = `${R17}.getSingleSelected`;
  var PropNames_SingleSelectionChildReturn_singleSelectedOffset = `${R17}.singleSelectedOffset`;
  var PropNames_SingleSelectionChildReturn_singleSelectionMode = `${R17}.singleSelectionMode`;
  var PropNames_SingleSelectionChildReturn_getSingleSelectedOffset = `${R17}.getSingleSelectedOffset`;
  var useSingleSelection = monitored(function useSingleSelection2({
    //   managedChildrenReturn: { getChildren, ...void1 },
    //   rovingTabIndexReturn: { setTabbableIndex, ...void2 },
    //   singleSelectionParameters: { onSingleSelectedIndexChange: onSelectedIndexChange_U, initiallySingleSelectedIndex, singleSelectionAriaPropName, singleSelectionMode, ...void3 },
    [PropNames_ManagedChildrenReturn_getChildren]: getChildren,
    [PropNames_RovingTabIndexReturn_setTabbableIndex]: setTabbableIndex,
    [PropNames_SingleSelectionParameters_onSingleSelectedIndexChange]: onSelectedIndexChange_U,
    [PropNames_SingleSelectionParameters_initiallySingleSelectedIndex]: initiallySingleSelectedIndex,
    [PropNames_SingleSelectionParameters_singleSelectionAriaPropName]: singleSelectionAriaPropName,
    [PropNames_SingleSelectionParameters_singleSelectionMode]: singleSelectionMode,
    ...void4
  }) {
    assertEmptyObject(void4);
    const onSingleSelectedIndexChange = useStableCallback(onSelectedIndexChange_U ?? noop_default);
    const getSelectedAt = T2((m4) => {
      return m4.getSingleSelected();
    }, []);
    const setSelectedAt = T2((m4, t3, newSelectedIndex, prevSelectedIndex) => {
      if (m4.untabbable) {
        console.assert(false);
      }
      const directionComparison = newSelectedIndex == m4.index ? prevSelectedIndex : newSelectedIndex;
      const direction = directionComparison == null ? null : m4.index - directionComparison;
      if (newSelectedIndex == null)
        console.assert(t3 == false);
      if (t3)
        console.assert(newSelectedIndex === m4.index);
      m4.setLocalSingleSelected(t3, direction);
    }, []);
    const isSelectedValid = T2((m4) => {
      return !m4.untabbable;
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
      [PropNames_SingleSelectionReturn_getSingleSelectedIndex]: getSingleSelectedIndex,
      [PropNames_SingleSelectionReturn_changeSingleSelectedIndex]: changeSingleSelectedIndex,
      context: useMemoObject({
        singleSelectionContext: useMemoObject({
          getSingleSelectedIndex,
          [PropNames_SingleSelectionParameters_onSingleSelectedIndexChange]: onSingleSelectedIndexChange,
          [PropNames_SingleSelectionParameters_singleSelectionAriaPropName]: singleSelectionAriaPropName,
          [PropNames_SingleSelectionParameters_singleSelectionMode]: singleSelectionMode
        })
      }),
      [PropNames_ChildrenHaveFocusParameters_onCompositeFocusChange]: useStableCallback((anyFocused, prev, reason) => {
        if (!anyFocused) {
          const selectedIndex = getSingleSelectedIndex();
          if (selectedIndex != null)
            setTabbableIndex(selectedIndex, reason, false);
        }
      })
    };
  });
  var useSingleSelectionChild = monitored(function useSingleSelectionChild2({
    //singleSelectionChildParameters: { singleSelectionDisabled, ...void5 },
    [PropNames_SingleSelectionChildParameters_singleSelectionDisabled]: singleSelectionDisabled,
    context: { singleSelectionContext: { getSingleSelectedIndex, [PropNames_SingleSelectionParameters_onSingleSelectedIndexChange]: onSingleSelectedIndexChange, [PropNames_SingleSelectionParameters_singleSelectionAriaPropName]: ariaPropName, [PropNames_SingleSelectionParameters_singleSelectionMode]: singleSelectionMode, ...void1 }, ...void2 },
    info: { index, untabbable, ...void3 },
    ...void4
  }) {
    assertEmptyObject(void1);
    assertEmptyObject(void2);
    assertEmptyObject(void3);
    assertEmptyObject(void4);
    useEnsureStability("useSingleSelectionChild", getSingleSelectedIndex, onSingleSelectedIndexChange);
    const [localSelected, setLocalSelected, getLocalSelected] = useState(getSingleSelectedIndex() == index);
    const [direction, setDirection, getDirection] = useState(getSingleSelectedIndex() == null ? null : getSingleSelectedIndex() - index);
    const onCurrentFocusedInnerChanged = useStableCallback((focused, _prev, e3) => {
      if (!singleSelectionDisabled && singleSelectionMode == "focus" && focused && !untabbable) {
        onSingleSelectedIndexChange(enhanceEvent(e3, { selectedIndex: index }));
      }
    });
    const onPressSync = useStableCallback((e3) => {
      if (!singleSelectionDisabled && !untabbable) {
        if (singleSelectionMode == "activation")
          onSingleSelectedIndexChange(enhanceEvent(e3, { selectedIndex: index }));
      } else {
        focus(e3.currentTarget);
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
      // singleSelectionChildReturn: {
      [PropNames_SingleSelectionChildReturn_singleSelected]: localSelected,
      [PropNames_SingleSelectionChildReturn_getSingleSelected]: getLocalSelected,
      [PropNames_SingleSelectionChildReturn_singleSelectedOffset]: direction,
      [PropNames_SingleSelectionChildReturn_singleSelectionMode]: singleSelectionMode,
      [PropNames_SingleSelectionChildReturn_getSingleSelectedOffset]: getDirection,
      //},
      props: useTagProps(ariaPropName == null || singleSelectionMode == "disabled" ? {} : {
        [`${propParts[0]}-${propParts[1]}`]: localSelected ? propParts[1] == "current" ? `${propParts[2]}` : `true` : "false"
      }, "data-single-selection-child"),
      [PropNames_HasCurrentFocusParameters_onCurrentFocusedInnerChanged]: onCurrentFocusedInnerChanged,
      [PropNames_PressParameters_onPressSync]: onPressSync
    };
  });
  function useSingleSelectionDeclarative({ [PropNames_SingleSelectionReturn_changeSingleSelectedIndex]: changeSingleSelectedIndex, [PropNames_SingleSelectionParameters_singleSelectedIndex]: singleSelectedIndex, [PropNames_SingleSelectionParameters_onSingleSelectedIndexChange]: onSingleSelectedIndexChange }) {
    let s4 = singleSelectedIndex ?? null;
    let reasonRef = _(void 0);
    p3(() => {
      changeSingleSelectedIndex(s4, reasonRef.current);
    }, [s4]);
    const osic = T2((e3) => {
      reasonRef.current = e3;
      return onSingleSelectedIndexChange?.(e3);
    }, [onSingleSelectedIndexChange]);
    return {
      [PropNames_SingleSelectionParameters_onSingleSelectedIndexChange]: osic
    };
  }

  // ../dist/component-detail/selection/use-selection.js
  function useSelection({ [PropNames_ChildrenHaveFocusReturn_getAnyFocused]: getAnyFocused, [PropNames_ManagedChildrenReturn_getChildren]: getChildren, [PropNames_MultiSelectionParameters_multiSelectionAriaPropName]: multiSelectionAriaPropName, [PropNames_MultiSelectionParameters_multiSelectionMode]: multiSelectionMode, [PropNames_MultiSelectionParameters_onSelectionChange]: onSelectionChange, [PropNames_RovingTabIndexReturn_setTabbableIndex]: setTabbableIndex, [PropNames_SingleSelectionParameters_initiallySingleSelectedIndex]: initiallySingleSelectedIndex, [PropNames_SingleSelectionParameters_onSingleSelectedIndexChange]: onSingleSelectedIndexChange, [PropNames_SingleSelectionParameters_singleSelectionAriaPropName]: singleSelectionAriaPropName, [PropNames_SingleSelectionParameters_singleSelectionMode]: singleSelectionMode, ...void1 }) {
    const { [PropNames_ChildrenHaveFocusParameters_onCompositeFocusChange]: ocfc1, context: contextSS, ...singleSelectionReturn } = useSingleSelection({
      [PropNames_ManagedChildrenReturn_getChildren]: getChildren,
      [PropNames_RovingTabIndexReturn_setTabbableIndex]: setTabbableIndex,
      [PropNames_SingleSelectionParameters_initiallySingleSelectedIndex]: initiallySingleSelectedIndex,
      [PropNames_SingleSelectionParameters_onSingleSelectedIndexChange]: onSingleSelectedIndexChange,
      [PropNames_SingleSelectionParameters_singleSelectionAriaPropName]: singleSelectionAriaPropName,
      [PropNames_SingleSelectionParameters_singleSelectionMode]: singleSelectionMode
    });
    const { [PropNames_ChildrenHaveFocusParameters_onCompositeFocusChange]: ocfc2, context: contextMS, props: propsStable, ...multiSelectionReturn } = useMultiSelection({
      [PropNames_ChildrenHaveFocusReturn_getAnyFocused]: getAnyFocused,
      [PropNames_ManagedChildrenReturn_getChildren]: getChildren,
      [PropNames_MultiSelectionParameters_multiSelectionAriaPropName]: multiSelectionAriaPropName,
      [PropNames_MultiSelectionParameters_multiSelectionMode]: multiSelectionMode,
      [PropNames_MultiSelectionParameters_onSelectionChange]: onSelectionChange
    });
    assertEmptyObject(void1);
    return {
      ...multiSelectionReturn,
      ...singleSelectionReturn,
      [PropNames_ChildrenHaveFocusParameters_onCompositeFocusChange]: useStableCallback((...a4) => {
        ocfc1(...a4);
        ocfc2(...a4);
      }),
      props: propsStable,
      context: useMemoObject({ ...contextSS, ...contextMS })
    };
  }
  function useSelectionChild({ context, info: { index, untabbable, ...void2 }, [PropNames_MultiSelectionChildParameters_initiallyMultiSelected]: initiallyMultiSelected, [PropNames_MultiSelectionChildParameters_multiSelectionDisabled]: multiSelectionDisabled, [PropNames_MultiSelectionChildParameters_onMultiSelectChange]: onMultiSelectChange, [PropNames_SingleSelectionChildParameters_singleSelectionDisabled]: singleSelectionDisabled, ...void3 }) {
    const { props: p1, info: { getSingleSelected, setLocalSingleSelected, singleSelected, ...void1 }, [PropNames_HasCurrentFocusParameters_onCurrentFocusedInnerChanged]: ocfic1, [PropNames_PressParameters_onPressSync]: opc1, ...singleSelectionChildReturn } = useSingleSelectionChild({
      context,
      info: { index, untabbable },
      [PropNames_SingleSelectionChildParameters_singleSelectionDisabled]: singleSelectionDisabled
    });
    const { props: p22, [PropNames_HasCurrentFocusParameters_onCurrentFocusedInnerChanged]: ocfic2, [PropNames_PressParameters_onPressSync]: opc2, info: { getMultiSelected, setSelectedFromParent, getMultiSelectionDisabled, ...void5 }, ...multiSelectionChildReturn } = useMultiSelectionChild({
      context,
      info: { index },
      [PropNames_MultiSelectionChildParameters_initiallyMultiSelected]: initiallyMultiSelected,
      [PropNames_MultiSelectionChildParameters_multiSelectionDisabled]: multiSelectionDisabled,
      [PropNames_MultiSelectionChildParameters_onMultiSelectChange]: onMultiSelectChange
    });
    assertEmptyObject(void1);
    assertEmptyObject(void2);
    assertEmptyObject(void3);
    assertEmptyObject(void5);
    return {
      [PropNames_HasCurrentFocusParameters_onCurrentFocusedInnerChanged]: useStableCallback((...a4) => {
        ocfic1(...a4);
        ocfic2(...a4);
      }),
      info: {
        getMultiSelected,
        setSelectedFromParent,
        getSingleSelected,
        setLocalSingleSelected,
        singleSelected,
        getMultiSelectionDisabled
      },
      ...multiSelectionChildReturn,
      ...singleSelectionChildReturn,
      [PropNames_PressParameters_onPressSync]: useStableCallback((...a4) => {
        opc1(...a4);
        opc2(...a4);
      }),
      props: [p1, p22]
    };
  }
  function useSelectionDeclarative(args) {
    return useSingleSelectionDeclarative(args);
  }
  function useSelectionChildDeclarative(args) {
    return useMultiSelectionChildDeclarative(args);
  }

  // ../dist/component-detail/use-dismiss.js
  var P11 = `PropNames.DismissParameters`;
  var R7 = `PropNames.DismissReturn`;
  var PropNames_DismissParameters_dismissActive = `${P11}.dismissActive`;
  var PropNames_DismissParameters_onDismiss = `${P11}.onDismiss`;
  var PropNames_DismissReturn_getElementSource = `${R7}.getElementSource`;
  var PropNames_DismissReturn_getElementPopup = `${R7}.getElementPopup`;
  var useDismiss = monitored(function useDismiss2({ [PropNames_DismissParameters_dismissActive]: dismissActive, [PropNames_DismissParameters_onDismiss]: onDismiss, [PropNames_BackdropDismissParameters_dismissBackdropActive]: dismissBackdropActive, [PropNames_BackdropDismissParameters_onDismissBackdrop]: onDismissBackdrop, [PropNames_EscapeDismissParameters_dismissEscapeActive]: dismissEscapeActive, [PropNames_EscapeDismissParameters_onDismissEscape]: onDismissEscape, [PropNames_EscapeDismissParameters_parentDepth]: parentDepth, [PropNames_LostFocusDismissParameters_dismissLostFocusActive]: dismissLostFocusActive, [PropNames_LostFocusDismissParameters_onDismissLostFocus]: onDismissLostFocus, [PropNames_ActiveElementParameters_getDocument]: getDocument2, [PropNames_ActiveElementParameters_onActiveElementChange]: onActiveElementChange, [PropNames_ActiveElementParameters_onLastActiveElementChange]: onLastActiveElementChange1, [PropNames_ActiveElementParameters_onWindowFocusedChange]: onWindowFocusedChange, ...void4 }) {
    const { props: propsStableSource, [PropNames_RefElementReturn_getElement]: getElementSource } = useRefElement({});
    const { props: propsStablePopup, [PropNames_RefElementReturn_getElement]: getElementPopup } = useRefElement({});
    const void8 = useBackdropDismiss({
      [PropNames_BackdropDismissParameters_dismissBackdropActive]: dismissBackdropActive && dismissActive,
      [PropNames_BackdropDismissParameters_onDismissBackdrop]: useStableCallback((e3) => {
        onDismissBackdrop?.(e3);
        onDismiss(e3, "backdrop");
      }),
      [PropNames_RefElementReturn_getElement]: getElementPopup
    });
    const void9 = useEscapeDismiss({
      [PropNames_RefElementReturn_getElement]: getElementPopup,
      [PropNames_EscapeDismissParameters_dismissEscapeActive]: dismissEscapeActive && dismissActive,
      [PropNames_EscapeDismissParameters_getDocument]: getDocument2,
      [PropNames_EscapeDismissParameters_parentDepth]: parentDepth,
      [PropNames_EscapeDismissParameters_onDismissEscape]: useStableCallback((e3) => {
        onDismissEscape?.(e3);
        onDismiss(e3, "escape");
      })
    });
    const { [PropNames_ActiveElementParameters_onLastActiveElementChange]: onLastActiveElementChange2, ...void1 } = useLostFocusDismiss({
      [PropNames_LostFocusDismissParameters_dismissLostFocusActive]: dismissLostFocusActive && dismissActive,
      [PropNames_LostFocusDismissParameters_onDismissLostFocus]: useStableCallback((e3) => {
        onDismissLostFocus?.(e3);
        onDismiss(e3, "lost-focus");
      }),
      [PropNames_LostFocusDismissParameters_getElementPopup]: getElementPopup,
      [PropNames_LostFocusDismissParameters_getElementSource]: getElementSource
    });
    const activeElementReturn = useActiveElement({
      [PropNames_ActiveElementParameters_onLastActiveElementChange]: useStableCallback((a4, b4, r5) => {
        onLastActiveElementChange2?.(a4, b4, r5);
        onLastActiveElementChange1?.(a4, b4, r5);
      }),
      [PropNames_ActiveElementParameters_onActiveElementChange]: onActiveElementChange,
      [PropNames_ActiveElementParameters_onWindowFocusedChange]: onWindowFocusedChange,
      [PropNames_ActiveElementParameters_getDocument]: getDocument2
    });
    assertEmptyObject(void1);
    assertEmptyObject(void4);
    assertEmptyObject(void8);
    assertEmptyObject(void9);
    return {
      ...activeElementReturn,
      [PropNames_DismissReturn_getElementSource]: getElementSource,
      [PropNames_DismissReturn_getElementPopup]: getElementPopup,
      propsStableSource,
      propsStablePopup
    };
  });

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
        const i3 = this[_blockingElements].indexOf(element);
        if (i3 === -1) {
          return false;
        }
        this[_blockingElements].splice(i3, 1);
        if (i3 === this[_blockingElements].length) {
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
        let i3 = oldParents.length - 1;
        let j4 = newParents.length - 1;
        while (i3 > 0 && j4 > 0 && oldParents[i3] === newParents[j4]) {
          i3--;
          j4--;
        }
        if (oldParents[i3] !== newParents[j4]) {
          this[_swapInertedSibling](oldParents[i3], newParents[j4]);
        }
        i3 > 0 && this[_restoreInertedSiblings](oldParents.slice(0, i3));
        j4 > 0 && this[_inertSiblings](newParents.slice(0, j4), toSkip, null);
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
          for (let j4 = 0; j4 < children.length; j4++) {
            const sibling = children[j4];
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
          for (let i3 = 0; i3 < mutation.removedNodes.length; i3++) {
            const sibling = mutation.removedNodes[i3];
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
          for (let i3 = 0; i3 < mutation.addedNodes.length; i3++) {
            const sibling = mutation.addedNodes[i3];
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
        let i3;
        let j4;
        let nodes;
        const slots = shadowRoot.querySelectorAll("slot");
        if (slots.length && slots[0].assignedNodes) {
          for (i3 = 0; i3 < slots.length; i3++) {
            nodes = slots[i3].assignedNodes({
              flatten: true
            });
            for (j4 = 0; j4 < nodes.length; j4++) {
              if (nodes[j4].nodeType === Node.ELEMENT_NODE) {
                result.add(nodes[j4]);
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
      for (var i3 = 0; i3 < props.length; i3++) {
        var descriptor = props[i3];
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
          for (var i3 = 0; i3 < distributedNodes.length; i3++) {
            composedTreeWalk(distributedNodes[i3], callback, shadowRootAncestor);
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

  // ../node_modules/.pnpm/clsx@2.0.0/node_modules/clsx/dist/clsx.mjs
  function r4(e3) {
    var t3, f4, n2 = "";
    if ("string" == typeof e3 || "number" == typeof e3)
      n2 += e3;
    else if ("object" == typeof e3)
      if (Array.isArray(e3))
        for (t3 = 0; t3 < e3.length; t3++)
          e3[t3] && (f4 = r4(e3[t3])) && (n2 && (n2 += " "), n2 += f4);
      else
        for (t3 in e3)
          e3[t3] && (n2 && (n2 += " "), n2 += t3);
    return n2;
  }
  function clsx() {
    for (var e3, t3, f4 = 0, n2 = ""; f4 < arguments.length; )
      (e3 = arguments[f4++]) && (t3 = r4(e3)) && (n2 && (n2 += " "), n2 += t3);
    return n2;
  }

  // ../dist/dom-helpers/use-document-class.js
  function getDocument(element) {
    return element?.ownerDocument ?? document ?? window.document ?? globalThis.document;
  }
  var useDocumentClass = monitored(function useDocumentClass2(className, active, element) {
    element ??= getDocument().documentElement;
    className = clsx(className);
    p3(() => {
      if (element) {
        if (active !== false) {
          element.classList.add(className);
          return () => element.classList.remove(className);
        }
      }
    }, [className, active, element]);
  });

  // ../dist/dom-helpers/use-blocking-element.js
  var P20 = `PropNames.BlockingElementParameters`;
  var R8 = `PropNames.BlockingElementReturn`;
  var PropNames_BlockingElementParameters_enabled = `${P20}.enabled`;
  var PropNames_BlockingElementParameters_getTarget = `${P20}.getTarget`;
  var PropNames_BlockingElementReturn_getTop = `${R8}.getTop`;
  var PropNames_BlockingElementReturn_getTarget = `${R8}.getTarget`;
  var PropNames_BlockingElementReturn_getLastActiveWhenClosed = `${R8}.getLastActiveWhenClosed`;
  var PropNames_BlockingElementReturn_getLastActiveWhenOpen = `${R8}.getLastActiveWhenOpen`;
  function blockingElements() {
    return getDocument().$blockingElements;
  }
  var useBlockingElement = monitored(function useBlockingElement2({ [PropNames_BlockingElementParameters_enabled]: enabled, [PropNames_BlockingElementParameters_getTarget]: getTarget, ...void2 }) {
    assertEmptyObject(void2);
    const stableGetTarget = useStableCallback(getTarget);
    const [getTop, setTop] = usePassiveState(null, returnNull);
    const [getLastActiveWhenClosed, setLastActiveWhenClosed] = usePassiveState(null, returnNull);
    const [getLastActiveWhenOpen, setLastActiveWhenOpen] = usePassiveState(null, returnNull);
    y3(() => {
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
    return {
      [PropNames_BlockingElementReturn_getTop]: getTop,
      [PropNames_BlockingElementReturn_getTarget]: getTarget,
      [PropNames_BlockingElementReturn_getLastActiveWhenOpen]: getLastActiveWhenOpen,
      [PropNames_BlockingElementReturn_getLastActiveWhenClosed]: getLastActiveWhenClosed,
      [PropNames_ActiveElementParameters_onLastActiveElementChange]: useStableCallback((e3, prev, reason) => {
        if (e3) {
          if (enabled)
            setLastActiveWhenOpen(e3, reason);
          else
            setLastActiveWhenClosed(e3, reason);
        }
      })
    };
  });

  // ../dist/component-detail/use-focus-trap.js
  var P21 = `PropNames.FocusTrapParameters`;
  var R9 = `PropNames.FocusTrapReturn`;
  var PropNames_FocusTrapParameters_trapActive = `${P21}.trapActive`;
  var PropNames_FocusTrapParameters_onlyMoveFocus = `${P21}.onlyMoveFocus`;
  var PropNames_FocusTrapParameters_focusPopup = `${P21}.focusPopup`;
  var PropNames_FocusTrapParameters_focusOpener = `${P21}.focusOpener`;
  var PropNames_FocusTrapReturn_pressing = `${R9}.pressing`;
  var useFocusTrap = monitored(function useFocusTrap2({ [PropNames_FocusTrapParameters_focusOpener]: focusOpenerUnstable, [PropNames_FocusTrapParameters_focusPopup]: focusSelfUnstable, [PropNames_FocusTrapParameters_trapActive]: trapActive, [PropNames_FocusTrapParameters_onlyMoveFocus]: onlyMoveFocus, [PropNames_RefElementReturn_getElement]: getElement, ...void2 }) {
    const focusSelf = useStableCallback(focusSelfUnstable);
    const focusOpener = useStableCallback(focusOpenerUnstable);
    p3(() => {
      if (trapActive) {
        let top = getTop();
        const lastFocusedInThisComponent = getLastActiveWhenOpen();
        if (false) {
          focusSelf(lastFocusedInThisComponent, () => lastFocusedInThisComponent);
        } else {
          top ??= getElement();
          console.assert(!!top);
          if (top)
            focusSelf(top, () => findFirstFocusable(top));
        }
      } else {
        const lastActive = getLastActiveWhenClosed();
        let currentFocus = document.activeElement;
        let top = getElement();
        if (currentFocus == document.body || currentFocus == null || top == currentFocus || top?.contains(currentFocus)) {
          if (lastActive)
            focusOpener(lastActive);
        }
      }
    }, [trapActive]);
    const { [PropNames_BlockingElementReturn_getTarget]: getTarget, [PropNames_BlockingElementReturn_getTop]: getTop, [PropNames_BlockingElementReturn_getLastActiveWhenClosed]: getLastActiveWhenClosed, [PropNames_BlockingElementReturn_getLastActiveWhenOpen]: getLastActiveWhenOpen, [PropNames_ActiveElementParameters_onLastActiveElementChange]: onLastActiveElementChange, ...void1 } = useBlockingElement({
      [PropNames_BlockingElementParameters_enabled]: trapActive && !onlyMoveFocus,
      [PropNames_BlockingElementParameters_getTarget]: getElement
    });
    assertEmptyObject(void1);
    assertEmptyObject(void2);
    return {
      props: useTagProps({ "aria-modal": trapActive ? "true" : void 0 }, "data-focus-trap")
    };
  });
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

  // ../dist/component-detail/use-grid-navigation-selection.js
  var useGridNavigationSelection = monitored(function useGridNavigationSelection2({
    // Both
    [PropNames_ManagedChildrenReturn_getChildren]: getChildren,
    // Grid navigation
    [PropNames_GridNavigationParameters_initiallyTabbableColumn]: initiallyTabbableColumn,
    [PropNames_GridNavigationParameters_onTabbableColumnChange]: onTabbableColumnChange,
    [PropNames_LinearNavigationParameters_disableHomeEndKeys]: disableHomeEndKeys,
    [PropNames_LinearNavigationParameters_getHighestIndex]: getHighestIndex,
    [PropNames_LinearNavigationParameters_getLowestIndex]: getLowestIndex,
    [PropNames_LinearNavigationParameters_isValidForLinearNavigation]: isValidForLinearNavigation,
    [PropNames_LinearNavigationParameters_navigatePastEnd]: navigatePastEnd,
    [PropNames_LinearNavigationParameters_navigatePastStart]: navigatePastStart,
    [PropNames_LinearNavigationParameters_onNavigateLinear]: onNavigateLinear,
    [PropNames_LinearNavigationParameters_pageNavigationSize]: pageNavigationSize,
    [PropNames_PaginatedParameters_paginationMax]: paginationMax,
    [PropNames_PaginatedParameters_paginationMin]: paginationMin,
    [PropNames_RearrangeableReturn_indexDemangler]: indexDemangler,
    [PropNames_RearrangeableReturn_indexMangler]: indexMangler,
    [PropNames_RefElementReturn_getElement]: getElement,
    [PropNames_RovingTabIndexParameters_focusSelfParent]: focusSelfParent,
    [PropNames_RovingTabIndexParameters_initiallyTabbedIndex]: initiallyTabbedIndex,
    [PropNames_RovingTabIndexParameters_onTabbableIndexChange]: onTabbableIndexChange,
    [PropNames_RovingTabIndexParameters_untabbable]: untabbable,
    [PropNames_RovingTabIndexParameters_untabbableBehavior]: untabbableBehavior,
    [PropNames_TypeaheadNavigationParameters_collator]: collator,
    [PropNames_TypeaheadNavigationParameters_isValidForTypeaheadNavigation]: isValidForTypeaheadNavigation,
    [PropNames_TypeaheadNavigationParameters_noTypeahead]: noTypeahead,
    [PropNames_TypeaheadNavigationParameters_onNavigateTypeahead]: onNavigateTypeahead,
    [PropNames_TypeaheadNavigationParameters_typeaheadTimeout]: typeaheadTimeout,
    // Selection
    [PropNames_ChildrenHaveFocusReturn_getAnyFocused]: getAnyFocused,
    [PropNames_MultiSelectionParameters_multiSelectionAriaPropName]: multiSelectionAriaPropName,
    [PropNames_MultiSelectionParameters_multiSelectionMode]: multiSelectionMode,
    [PropNames_MultiSelectionParameters_onSelectionChange]: onSelectionChange,
    [PropNames_RovingTabIndexReturn_setTabbableIndex]: setTabbableIndex,
    [PropNames_SingleSelectionParameters_initiallySingleSelectedIndex]: initiallySingleSelectedIndex,
    [PropNames_SingleSelectionParameters_onSingleSelectedIndexChange]: onSingleSelectedIndexChange,
    [PropNames_SingleSelectionParameters_singleSelectionAriaPropName]: singleSelectionAriaPropName,
    [PropNames_SingleSelectionParameters_singleSelectionMode]: singleSelectionMode,
    ...void2
  }) {
    const { context: { gridNavigationRowContext, rovingTabIndexContext, typeaheadNavigationContext }, props: propsGN, ...retGN } = useGridNavigation({
      [PropNames_GridNavigationParameters_initiallyTabbableColumn]: initiallyTabbableColumn,
      [PropNames_GridNavigationParameters_onTabbableColumnChange]: onTabbableColumnChange,
      [PropNames_LinearNavigationParameters_disableHomeEndKeys]: disableHomeEndKeys,
      [PropNames_LinearNavigationParameters_getHighestIndex]: getHighestIndex,
      [PropNames_LinearNavigationParameters_getLowestIndex]: getLowestIndex,
      [PropNames_LinearNavigationParameters_isValidForLinearNavigation]: isValidForLinearNavigation,
      [PropNames_LinearNavigationParameters_navigatePastEnd]: navigatePastEnd,
      [PropNames_LinearNavigationParameters_navigatePastStart]: navigatePastStart,
      [PropNames_LinearNavigationParameters_onNavigateLinear]: onNavigateLinear,
      [PropNames_LinearNavigationParameters_pageNavigationSize]: pageNavigationSize,
      [PropNames_ManagedChildrenReturn_getChildren]: getChildren,
      [PropNames_PaginatedParameters_paginationMax]: paginationMax,
      [PropNames_PaginatedParameters_paginationMin]: paginationMin,
      [PropNames_RearrangeableReturn_indexDemangler]: indexDemangler,
      [PropNames_RearrangeableReturn_indexMangler]: indexMangler,
      [PropNames_RefElementReturn_getElement]: getElement,
      [PropNames_RovingTabIndexParameters_focusSelfParent]: focusSelfParent,
      [PropNames_RovingTabIndexParameters_initiallyTabbedIndex]: initiallyTabbedIndex,
      [PropNames_RovingTabIndexParameters_onTabbableIndexChange]: onTabbableIndexChange,
      [PropNames_RovingTabIndexParameters_untabbable]: untabbable,
      [PropNames_RovingTabIndexParameters_untabbableBehavior]: untabbableBehavior,
      [PropNames_TypeaheadNavigationParameters_collator]: collator,
      [PropNames_TypeaheadNavigationParameters_isValidForTypeaheadNavigation]: isValidForTypeaheadNavigation,
      [PropNames_TypeaheadNavigationParameters_noTypeahead]: noTypeahead,
      [PropNames_TypeaheadNavigationParameters_onNavigateTypeahead]: onNavigateTypeahead,
      [PropNames_TypeaheadNavigationParameters_typeaheadTimeout]: typeaheadTimeout
      //rovingTabIndexParameters: { ...rovingTabIndexParameters, initiallyTabbedIndex: singleSelectionParameters.initiallySingleSelectedIndex || 0 },
    });
    const { context: { singleSelectionContext, multiSelectionContext }, props: propsSS, ...retSS } = useSelection({
      [PropNames_ChildrenHaveFocusReturn_getAnyFocused]: getAnyFocused,
      [PropNames_ManagedChildrenReturn_getChildren]: getChildren,
      [PropNames_MultiSelectionParameters_multiSelectionAriaPropName]: multiSelectionAriaPropName,
      [PropNames_MultiSelectionParameters_multiSelectionMode]: multiSelectionMode,
      [PropNames_MultiSelectionParameters_onSelectionChange]: onSelectionChange,
      [PropNames_RovingTabIndexReturn_setTabbableIndex]: setTabbableIndex,
      [PropNames_SingleSelectionParameters_initiallySingleSelectedIndex]: initiallySingleSelectedIndex,
      [PropNames_SingleSelectionParameters_onSingleSelectedIndexChange]: onSingleSelectedIndexChange,
      [PropNames_SingleSelectionParameters_singleSelectionAriaPropName]: singleSelectionAriaPropName,
      [PropNames_SingleSelectionParameters_singleSelectionMode]: singleSelectionMode
    });
    assertEmptyObject(void2);
    return {
      context: useMemoObject({
        gridNavigationRowContext,
        rovingTabIndexContext,
        singleSelectionContext,
        multiSelectionContext,
        typeaheadNavigationContext
      }),
      props: [...propsGN, propsSS],
      ...retGN,
      ...retSS
    };
  });
  var useGridNavigationSelectionRow = monitored(function useGridNavigationSelectionRow2({ info: mcp1, context, [PropNames_LinearNavigationParameters_getHighestIndex]: getHighestIndex, [PropNames_LinearNavigationParameters_getLowestIndex]: getLowestIndex, [PropNames_LinearNavigationParameters_isValidForLinearNavigation]: isValidForLinearNavigation, [PropNames_LinearNavigationParameters_navigatePastEnd]: navigatePastEnd, [PropNames_LinearNavigationParameters_navigatePastStart]: navigatePastStart, [PropNames_ManagedChildrenReturn_getChildren]: getChildren, [PropNames_RefElementReturn_getElement]: getElement, [PropNames_RovingTabIndexParameters_initiallyTabbedIndex]: initiallyTabbedIndex, [PropNames_RovingTabIndexParameters_onTabbableIndexChange]: onTabbableIndexChange, [PropNames_RovingTabIndexParameters_untabbable]: untabbable, [PropNames_TextContentParameters_getText]: getText, [PropNames_TypeaheadNavigationParameters_collator]: collator, [PropNames_TypeaheadNavigationParameters_isValidForTypeaheadNavigation]: isValidForTypeaheadNavigation, [PropNames_TypeaheadNavigationParameters_noTypeahead]: noTypeahead, [PropNames_TypeaheadNavigationParameters_onNavigateTypeahead]: onNavigateTypeahead, [PropNames_TypeaheadNavigationParameters_typeaheadTimeout]: typeaheadTimeout, [PropNames_MultiSelectionChildParameters_initiallyMultiSelected]: initiallyMultiSelected, [PropNames_MultiSelectionChildParameters_multiSelectionDisabled]: multiSelectionDisabled, [PropNames_MultiSelectionChildParameters_onMultiSelectChange]: onMultiSelectChange, [PropNames_SingleSelectionChildParameters_singleSelectionDisabled]: singleSelectionDisabled, ...void1 }) {
    const { info: { getSingleSelected, setLocalSingleSelected, singleSelected, getMultiSelected, setSelectedFromParent, getMultiSelectionDisabled, ...void8 }, props: propsSelection, [PropNames_HasCurrentFocusParameters_onCurrentFocusedInnerChanged]: ocfic2, ...retSS } = useSelectionChild({
      info: mcp1,
      context,
      [PropNames_MultiSelectionChildParameters_initiallyMultiSelected]: initiallyMultiSelected,
      [PropNames_MultiSelectionChildParameters_multiSelectionDisabled]: multiSelectionDisabled,
      [PropNames_MultiSelectionChildParameters_onMultiSelectChange]: onMultiSelectChange,
      [PropNames_SingleSelectionChildParameters_singleSelectionDisabled]: singleSelectionDisabled
    });
    const { info: { focusSelf, getLocallyTabbable, setLocallyTabbable, ...void9 }, props: propsGridNavigation, context: contextGridNavigation, [PropNames_HasCurrentFocusParameters_onCurrentFocusedInnerChanged]: ocfic1, [PropNames_ManagedChildrenParameters_onChildrenMountChange]: onChildrenMountChange, ...retGN } = useGridNavigationRow({
      context,
      info: mcp1,
      [PropNames_LinearNavigationParameters_getHighestIndex]: getHighestIndex,
      [PropNames_LinearNavigationParameters_getLowestIndex]: getLowestIndex,
      [PropNames_LinearNavigationParameters_isValidForLinearNavigation]: isValidForLinearNavigation,
      [PropNames_LinearNavigationParameters_navigatePastEnd]: navigatePastEnd,
      [PropNames_LinearNavigationParameters_navigatePastStart]: navigatePastStart,
      [PropNames_ManagedChildrenReturn_getChildren]: getChildren,
      [PropNames_RefElementReturn_getElement]: getElement,
      [PropNames_RovingTabIndexParameters_initiallyTabbedIndex]: initiallyTabbedIndex,
      [PropNames_RovingTabIndexParameters_onTabbableIndexChange]: onTabbableIndexChange,
      [PropNames_RovingTabIndexParameters_untabbable]: untabbable,
      [PropNames_TextContentParameters_getText]: getText,
      [PropNames_TypeaheadNavigationParameters_collator]: collator,
      [PropNames_TypeaheadNavigationParameters_isValidForTypeaheadNavigation]: isValidForTypeaheadNavigation,
      [PropNames_TypeaheadNavigationParameters_noTypeahead]: noTypeahead,
      [PropNames_TypeaheadNavigationParameters_onNavigateTypeahead]: onNavigateTypeahead,
      [PropNames_TypeaheadNavigationParameters_typeaheadTimeout]: typeaheadTimeout
    });
    assertEmptyObject(void1);
    assertEmptyObject(void8);
    assertEmptyObject(void9);
    return {
      props: [...propsGridNavigation, ...propsSelection],
      context: contextGridNavigation,
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
      [PropNames_HasCurrentFocusParameters_onCurrentFocusedInnerChanged]: useStableCallback((hasFocus, hadFocus, reason) => {
        ocfic1?.(hasFocus, hadFocus, reason);
        ocfic2?.(hasFocus, hadFocus, reason);
      }),
      [PropNames_ManagedChildrenParameters_onChildrenMountChange]: onChildrenMountChange,
      ...retGN,
      ...retSS
    };
  });
  var useGridNavigationSelectionCell = monitored(function useGridNavigationSelectionCell2(p4) {
    return useGridNavigationCell(p4);
  });

  // ../dist/component-detail/use-list-navigation-selection.js
  var useListNavigationSelection = monitored(function useListNavigationSelection2({
    [PropNames_ChildrenHaveFocusReturn_getAnyFocused]: getAnyFocused,
    [PropNames_LinearNavigationParameters_arrowKeyDirection]: arrowKeyDirection,
    [PropNames_LinearNavigationParameters_disableHomeEndKeys]: disableHomeEndKeys,
    [PropNames_LinearNavigationParameters_getHighestIndex]: getHighestIndex,
    [PropNames_LinearNavigationParameters_getLowestIndex]: getLowestIndex,
    [PropNames_LinearNavigationParameters_isValidForLinearNavigation]: isValidForLinearNavigation,
    [PropNames_LinearNavigationParameters_navigatePastEnd]: navigatePastEnd,
    [PropNames_LinearNavigationParameters_navigatePastStart]: navigatePastStart,
    [PropNames_LinearNavigationParameters_onNavigateLinear]: onNavigateLinear,
    [PropNames_LinearNavigationParameters_pageNavigationSize]: pageNavigationSize,
    [PropNames_ManagedChildrenReturn_getChildren]: getChildren,
    //[PropNames_RovingTabIndexReturn_setTabbableIndex]: sti2,
    [PropNames_MultiSelectionParameters_multiSelectionAriaPropName]: multiSelectionAriaPropName,
    [PropNames_MultiSelectionParameters_multiSelectionMode]: multiSelectionMode,
    [PropNames_MultiSelectionParameters_onSelectionChange]: onSelectionChange,
    [PropNames_PaginatedParameters_paginationMax]: paginationMax,
    [PropNames_PaginatedParameters_paginationMin]: paginationMin,
    [PropNames_RearrangeableReturn_indexDemangler]: indexDemangler,
    [PropNames_RearrangeableReturn_indexMangler]: indexMangler,
    [PropNames_RefElementReturn_getElement]: getElement,
    [PropNames_RovingTabIndexParameters_focusSelfParent]: focusSelfParent,
    [PropNames_RovingTabIndexParameters_onTabbableIndexChange]: onTabbableIndexChange,
    [PropNames_RovingTabIndexParameters_untabbable]: untabbable,
    [PropNames_RovingTabIndexParameters_untabbableBehavior]: untabbableBehavior,
    [PropNames_RovingTabIndexParameters_initiallyTabbedIndex]: initiallyTabbedIndex,
    [PropNames_SingleSelectionParameters_initiallySingleSelectedIndex]: initiallySingleSelectedIndex,
    [PropNames_SingleSelectionParameters_onSingleSelectedIndexChange]: onSingleSelectedIndexChange,
    [PropNames_SingleSelectionParameters_singleSelectionAriaPropName]: singleSelectionAriaPropName,
    [PropNames_SingleSelectionParameters_singleSelectionMode]: singleSelectionMode,
    [PropNames_TypeaheadNavigationParameters_collator]: collator,
    [PropNames_TypeaheadNavigationParameters_isValidForTypeaheadNavigation]: isValidForTypeaheadNavigation,
    [PropNames_TypeaheadNavigationParameters_noTypeahead]: noTypeahead,
    [PropNames_TypeaheadNavigationParameters_onNavigateTypeahead]: onNavigateTypeahead,
    [PropNames_TypeaheadNavigationParameters_typeaheadTimeout]: typeaheadTimeout,
    ...void3
  }) {
    const { context: contextSS, props: propsStable, ...retSS } = useSelection({
      [PropNames_ChildrenHaveFocusReturn_getAnyFocused]: getAnyFocused,
      [PropNames_ManagedChildrenReturn_getChildren]: getChildren,
      [PropNames_MultiSelectionParameters_multiSelectionAriaPropName]: multiSelectionAriaPropName,
      [PropNames_MultiSelectionParameters_multiSelectionMode]: multiSelectionMode,
      [PropNames_MultiSelectionParameters_onSelectionChange]: onSelectionChange,
      [PropNames_RovingTabIndexReturn_setTabbableIndex]: useStableCallback((...args) => {
        sti1(...args);
      }),
      [PropNames_SingleSelectionParameters_initiallySingleSelectedIndex]: initiallySingleSelectedIndex,
      [PropNames_SingleSelectionParameters_onSingleSelectedIndexChange]: onSingleSelectedIndexChange,
      [PropNames_SingleSelectionParameters_singleSelectionAriaPropName]: singleSelectionAriaPropName,
      [PropNames_SingleSelectionParameters_singleSelectionMode]: singleSelectionMode
    });
    const { context: contextLN, props, ...retLN } = useListNavigation({
      [PropNames_LinearNavigationParameters_arrowKeyDirection]: arrowKeyDirection,
      [PropNames_LinearNavigationParameters_disableHomeEndKeys]: disableHomeEndKeys,
      [PropNames_LinearNavigationParameters_getHighestIndex]: getHighestIndex,
      [PropNames_LinearNavigationParameters_getLowestIndex]: getLowestIndex,
      [PropNames_LinearNavigationParameters_isValidForLinearNavigation]: isValidForLinearNavigation,
      [PropNames_LinearNavigationParameters_navigatePastEnd]: navigatePastEnd,
      [PropNames_LinearNavigationParameters_navigatePastStart]: navigatePastStart,
      [PropNames_LinearNavigationParameters_onNavigateLinear]: onNavigateLinear,
      [PropNames_LinearNavigationParameters_pageNavigationSize]: pageNavigationSize,
      [PropNames_ManagedChildrenReturn_getChildren]: getChildren,
      [PropNames_PaginatedParameters_paginationMax]: paginationMax,
      [PropNames_PaginatedParameters_paginationMin]: paginationMin,
      [PropNames_RearrangeableReturn_indexDemangler]: indexDemangler,
      [PropNames_RearrangeableReturn_indexMangler]: indexMangler,
      [PropNames_RefElementReturn_getElement]: getElement,
      [PropNames_RovingTabIndexParameters_focusSelfParent]: focusSelfParent,
      [PropNames_RovingTabIndexParameters_initiallyTabbedIndex]: initiallySingleSelectedIndex ?? initiallyTabbedIndex,
      [PropNames_RovingTabIndexParameters_onTabbableIndexChange]: onTabbableIndexChange,
      [PropNames_RovingTabIndexParameters_untabbable]: untabbable,
      [PropNames_RovingTabIndexParameters_untabbableBehavior]: untabbableBehavior,
      [PropNames_TypeaheadNavigationParameters_collator]: collator,
      [PropNames_TypeaheadNavigationParameters_isValidForTypeaheadNavigation]: isValidForTypeaheadNavigation,
      [PropNames_TypeaheadNavigationParameters_noTypeahead]: noTypeahead,
      [PropNames_TypeaheadNavigationParameters_onNavigateTypeahead]: onNavigateTypeahead,
      [PropNames_TypeaheadNavigationParameters_typeaheadTimeout]: typeaheadTimeout
    });
    const { [PropNames_RovingTabIndexReturn_setTabbableIndex]: sti1 } = retLN;
    assertEmptyObject(void3);
    return {
      ...retSS,
      ...retLN,
      context: useMemoObject({
        ...contextLN,
        ...contextSS
      }),
      props: [...props, propsStable]
    };
  });
  var useListNavigationSelectionChild = monitored(function useListNavigationSelectionChild2({ info: { index, untabbable, ...void2 }, context, [PropNames_MultiSelectionChildParameters_initiallyMultiSelected]: initiallyMultiSelected, [PropNames_MultiSelectionChildParameters_multiSelectionDisabled]: multiSelectionDisabled, [PropNames_MultiSelectionChildParameters_onMultiSelectChange]: onMultiSelectChange, [PropNames_RefElementReturn_getElement]: getElement, [PropNames_SingleSelectionChildParameters_singleSelectionDisabled]: singleSelectionDisabled, [PropNames_TextContentParameters_getText]: getText, ...void1 }) {
    const { info: infoSS, props: propsSS, [PropNames_HasCurrentFocusParameters_onCurrentFocusedInnerChanged]: ocfic2, [PropNames_PressParameters_onPressSync]: onPressSync, ...retSS } = useSelectionChild({
      info: { index, untabbable },
      context,
      [PropNames_MultiSelectionChildParameters_initiallyMultiSelected]: initiallyMultiSelected,
      [PropNames_MultiSelectionChildParameters_multiSelectionDisabled]: multiSelectionDisabled,
      [PropNames_MultiSelectionChildParameters_onMultiSelectChange]: onMultiSelectChange,
      [PropNames_SingleSelectionChildParameters_singleSelectionDisabled]: singleSelectionDisabled
    });
    const { props: propsLN, info: infoLN, [PropNames_HasCurrentFocusParameters_onCurrentFocusedInnerChanged]: ocfic1, [PropNames_PressParameters_excludeSpace]: excludeSpace, ...retLN } = useListNavigationChild({
      info: { index, untabbable },
      context,
      [PropNames_RefElementReturn_getElement]: getElement,
      [PropNames_TextContentParameters_getText]: getText
    });
    assertEmptyObject(void1);
    assertEmptyObject(void2);
    return {
      [PropNames_HasCurrentFocusParameters_onCurrentFocusedInnerChanged]: useStableCallback((focused, previouslyFocused, e3) => {
        ocfic1?.(focused, previouslyFocused, e3);
        ocfic2?.(focused, previouslyFocused, e3);
      }),
      [PropNames_PressParameters_excludeSpace]: excludeSpace,
      [PropNames_PressParameters_onPressSync]: onPressSync,
      info: { ...infoSS, ...infoLN },
      ...retSS,
      ...retLN,
      propsChild: propsSS,
      propsTabbable: [propsLN]
      /*hasCurrentFocusParameters: {
          onCurrentFocusedInnerChanged
      },
      pressParameters: { onPressSync, excludeSpace },
      info: { ...infoSS, ...infoLN },
      rovingTabIndexChildReturn,
      multiSelectionChildReturn,
      singleSelectionChildReturn,
      textContentReturn,
      propsChild: propsSS,
      propsTabbable: propsLN*/
    };
  });

  // ../dist/component-use/use-grid-navigation-complete.js
  var useCompleteGridNavigation = monitored(function useCompleteGridNavigation2({ [PropNames_GridNavigationParameters_initiallyTabbableColumn]: initiallyTabbableColumn, [PropNames_GridNavigationParameters_onTabbableColumnChange]: onTabbableColumnChange, [PropNames_LinearNavigationParameters_disableHomeEndKeys]: disableHomeEndKeys, [PropNames_LinearNavigationParameters_navigatePastEnd]: navigatePastEnd, [PropNames_LinearNavigationParameters_navigatePastStart]: navigatePastStart, [PropNames_LinearNavigationParameters_onNavigateLinear]: onNavigateLinear, [PropNames_LinearNavigationParameters_pageNavigationSize]: pageNavigationSize, [PropNames_MultiSelectionParameters_multiSelectionAriaPropName]: multiSelectionAriaPropName, [PropNames_MultiSelectionParameters_multiSelectionMode]: multiSelectionMode, [PropNames_MultiSelectionParameters_onSelectionChange]: onSelectionChange, [PropNames_PaginatedParameters_paginationMax]: paginationMax, [PropNames_PaginatedParameters_paginationMin]: paginationMin, [PropNames_RovingTabIndexParameters_focusSelfParent]: focusSelfParent, [PropNames_RovingTabIndexParameters_initiallyTabbedIndex]: initiallyTabbedIndex, [PropNames_RovingTabIndexParameters_onTabbableIndexChange]: onTabbableIndexChange, [PropNames_RovingTabIndexParameters_untabbable]: untabbable, [PropNames_SingleSelectionParameters_initiallySingleSelectedIndex]: initiallySingleSelectedIndex, [PropNames_SingleSelectionParameters_onSingleSelectedIndexChange]: onSingleSelectedIndexChange, [PropNames_SingleSelectionParameters_singleSelectionAriaPropName]: singleSelectionAriaPropName, [PropNames_SingleSelectionParameters_singleSelectionMode]: singleSelectionMode, [PropNames_TypeaheadNavigationParameters_collator]: collator, [PropNames_TypeaheadNavigationParameters_noTypeahead]: noTypeahead, [PropNames_TypeaheadNavigationParameters_onNavigateTypeahead]: onNavigateTypeahead, [PropNames_TypeaheadNavigationParameters_typeaheadTimeout]: typeaheadTimeout, [PropNames_RefElementParameters_onElementChange]: onElementChange, [PropNames_RefElementParameters_onMount]: onMount, [PropNames_RefElementParameters_onUnmount]: onUnmount, [PropNames_ManagedChildrenParameters_onAfterChildLayoutEffect]: onAfterChildLayoutEffect, [PropNames_ManagedChildrenParameters_onChildrenCountChange]: onChildrenCountChange, [PropNames_ManagedChildrenParameters_onChildrenMountChange]: ocmc2, [PropNames_ChildrenHaveFocusParameters_onCompositeFocusChange]: ocfc1, [PropNames_StaggeredParameters_staggered]: staggered, ...void1 }) {
    assertEmptyObject(void1);
    const getChildren = T2(() => getChildrenButItsDeclaredTooLateToBeUseful(), []);
    const getLowestChildIndex = T2(() => getChildren().getLowestIndex(), []);
    const getHighestChildIndex = T2(() => getChildren().getHighestIndex(), []);
    const isValidForNavigation = T2((i3) => {
      const child = getChildren().getAt(i3);
      if (child == null)
        return false;
      if (child.untabbable)
        return false;
      return true;
    }, []);
    const { props: propsStable, [PropNames_RefElementReturn_getElement]: getElement, ...retRE } = useRefElement({
      [PropNames_RefElementParameters_onElementChange]: onElementChange,
      [PropNames_RefElementParameters_onMount]: onMount,
      [PropNames_RefElementParameters_onUnmount]: onUnmount
    });
    const { context: contextProcessing, [PropNames_RearrangeableReturn_indexDemangler]: indexDemangler, [PropNames_RearrangeableReturn_indexMangler]: indexMangler, [PropNames_RearrangeableReturn_rearrange]: rearrange, [PropNames_RearrangeableReturn_reverse]: reverse, [PropNames_RearrangeableReturn_shuffle]: shuffle2, [PropNames_RearrangeableReturn_sort]: sort, ...retCPC } = useCreateProcessedChildrenContext();
    const getAnyFocused = useStableCallback(() => getAnyFocused2());
    const setTabbableIndex = useStableCallback((...a4) => setTabbableIndex2(...a4));
    const { context: { gridNavigationRowContext, rovingTabIndexContext, singleSelectionContext, multiSelectionContext, typeaheadNavigationContext }, props, [PropNames_ChildrenHaveFocusParameters_onCompositeFocusChange]: ocfc2, [PropNames_RovingTabIndexReturn_getTabbableIndex]: getTabbableIndex, [PropNames_RovingTabIndexReturn_setTabbableIndex]: setTabbableIndex2, [PropNames_ManagedChildrenParameters_onChildrenMountChange]: ocmc1, [PropNames_RovingTabIndexReturn_focusSelf]: focusSelf, [PropNames_SingleSelectionReturn_changeSingleSelectedIndex]: changeSingleSelectedIndex, [PropNames_SingleSelectionReturn_getSingleSelectedIndex]: getSingleSelectedIndex, [PropNames_TypeaheadNavigationReturn_getCurrentTypeahead]: getCurrentTypeahead, [PropNames_TypeaheadNavigationReturn_typeaheadStatus]: typeaheadStatus, ...retGN } = useGridNavigationSelection({
      [PropNames_ChildrenHaveFocusReturn_getAnyFocused]: getAnyFocused,
      [PropNames_RearrangeableReturn_indexDemangler]: indexDemangler,
      [PropNames_RearrangeableReturn_indexMangler]: indexMangler,
      [PropNames_ManagedChildrenReturn_getChildren]: getChildren,
      [PropNames_GridNavigationParameters_initiallyTabbableColumn]: initiallyTabbableColumn,
      [PropNames_GridNavigationParameters_onTabbableColumnChange]: onTabbableColumnChange,
      [PropNames_LinearNavigationParameters_disableHomeEndKeys]: disableHomeEndKeys,
      [PropNames_LinearNavigationParameters_getHighestIndex]: getHighestChildIndex,
      [PropNames_LinearNavigationParameters_getLowestIndex]: getLowestChildIndex,
      [PropNames_LinearNavigationParameters_isValidForLinearNavigation]: isValidForNavigation,
      [PropNames_LinearNavigationParameters_navigatePastEnd]: navigatePastEnd,
      [PropNames_LinearNavigationParameters_navigatePastStart]: navigatePastStart,
      [PropNames_LinearNavigationParameters_onNavigateLinear]: onNavigateLinear,
      [PropNames_LinearNavigationParameters_pageNavigationSize]: pageNavigationSize,
      [PropNames_MultiSelectionParameters_multiSelectionAriaPropName]: multiSelectionAriaPropName,
      [PropNames_MultiSelectionParameters_multiSelectionMode]: multiSelectionMode,
      [PropNames_MultiSelectionParameters_onSelectionChange]: onSelectionChange,
      [PropNames_PaginatedParameters_paginationMax]: paginationMax,
      [PropNames_PaginatedParameters_paginationMin]: paginationMin,
      [PropNames_RefElementReturn_getElement]: getElement,
      [PropNames_RovingTabIndexParameters_focusSelfParent]: focusSelfParent,
      [PropNames_RovingTabIndexParameters_initiallyTabbedIndex]: initiallyTabbedIndex,
      [PropNames_RovingTabIndexParameters_onTabbableIndexChange]: onTabbableIndexChange,
      [PropNames_RovingTabIndexParameters_untabbable]: untabbable,
      [PropNames_RovingTabIndexParameters_untabbableBehavior]: "focus-parent",
      [PropNames_RovingTabIndexReturn_setTabbableIndex]: setTabbableIndex,
      [PropNames_SingleSelectionParameters_initiallySingleSelectedIndex]: initiallySingleSelectedIndex,
      [PropNames_SingleSelectionParameters_onSingleSelectedIndexChange]: onSingleSelectedIndexChange,
      [PropNames_SingleSelectionParameters_singleSelectionAriaPropName]: singleSelectionAriaPropName,
      [PropNames_SingleSelectionParameters_singleSelectionMode]: singleSelectionMode,
      [PropNames_TypeaheadNavigationParameters_collator]: collator,
      [PropNames_TypeaheadNavigationParameters_isValidForTypeaheadNavigation]: isValidForNavigation,
      [PropNames_TypeaheadNavigationParameters_noTypeahead]: noTypeahead,
      [PropNames_TypeaheadNavigationParameters_onNavigateTypeahead]: onNavigateTypeahead,
      [PropNames_TypeaheadNavigationParameters_typeaheadTimeout]: typeaheadTimeout
    });
    const onCompositeFocusChange = useStableCallback((...a4) => {
      ocfc1?.(...a4);
      ocfc2?.(...a4);
    });
    const { context: { childrenHaveFocusChildContext }, [PropNames_ChildrenHaveFocusReturn_getAnyFocused]: getAnyFocused2, ...retCHF } = useChildrenHaveFocus({
      [PropNames_ChildrenHaveFocusParameters_onCompositeFocusChange]: onCompositeFocusChange
    });
    const onChildrenMountChange = useStableCallback((...a4) => {
      ocmc1?.(...a4);
      ocmc2?.(...a4);
    });
    const { context: { managedChildContext }, [PropNames_ManagedChildrenReturn_getChildren]: getChildrenButItsDeclaredTooLateToBeUseful, ...retMC } = useManagedChildren({
      [PropNames_ManagedChildrenParameters_onAfterChildLayoutEffect]: onAfterChildLayoutEffect,
      [PropNames_ManagedChildrenParameters_onChildrenCountChange]: onChildrenCountChange,
      [PropNames_ManagedChildrenParameters_onChildrenMountChange]: onChildrenMountChange
    });
    const processedChildrenContext = useMemoObject({
      [PropNames_ChildrenHaveFocusReturn_getAnyFocused]: getAnyFocused,
      [PropNames_RefElementReturn_getElement]: getElement,
      [PropNames_RovingTabIndexReturn_getTabbableIndex]: getTabbableIndex,
      [PropNames_RovingTabIndexReturn_setTabbableIndex]: setTabbableIndex,
      [PropNames_PaginatedParameters_paginationMin]: paginationMin,
      [PropNames_PaginatedParameters_paginationMax]: paginationMax,
      [PropNames_StaggeredParameters_staggered]: staggered,
      [PropNames_ManagedChildrenReturn_getChildren]: getChildren
    });
    const c22 = useMemoObject({
      processedChildrenContext,
      ...contextProcessing
    });
    assertEmptyObject(void1);
    assertEmptyObject(retGN);
    assertEmptyObject(retCHF);
    assertEmptyObject(retRE);
    assertEmptyObject(retCPC);
    assertEmptyObject(retMC);
    const ret = {
      props: [...props, propsStable],
      contextProcessing: c22,
      contextChildren: useMemoObject({
        singleSelectionContext,
        multiSelectionContext,
        managedChildContext,
        rovingTabIndexContext,
        typeaheadNavigationContext,
        childrenHaveFocusChildContext,
        gridNavigationRowContext,
        contextProcessing: c22
      }),
      [PropNames_RearrangeableReturn_rearrange]: rearrange,
      [PropNames_RearrangeableReturn_reverse]: reverse,
      [PropNames_RearrangeableReturn_shuffle]: shuffle2,
      [PropNames_RearrangeableReturn_sort]: sort,
      [PropNames_RovingTabIndexReturn_focusSelf]: focusSelf,
      [PropNames_RovingTabIndexReturn_getTabbableIndex]: getTabbableIndex,
      [PropNames_RovingTabIndexReturn_setTabbableIndex]: setTabbableIndex,
      [PropNames_SingleSelectionReturn_changeSingleSelectedIndex]: changeSingleSelectedIndex,
      [PropNames_SingleSelectionReturn_getSingleSelectedIndex]: getSingleSelectedIndex,
      [PropNames_TypeaheadNavigationReturn_getCurrentTypeahead]: getCurrentTypeahead,
      [PropNames_TypeaheadNavigationReturn_typeaheadStatus]: typeaheadStatus,
      [PropNames_ChildrenHaveFocusReturn_getAnyFocused]: getAnyFocused2,
      [PropNames_RefElementReturn_getElement]: getElement,
      [PropNames_ManagedChildrenReturn_getChildren]: getChildren,
      ...retGN,
      ...retCHF,
      ...retRE,
      ...retCPC,
      ...retMC
    };
    return ret;
  });
  var useCompleteGridNavigationRows = monitored(function useCompleteGridNavigationRows2({ context, [PropNames_ChildrenHaveFocusReturn_getAnyFocused]: getAnyFocused, [PropNames_ManagedChildrenReturn_getChildren]: getChildren, [PropNames_PaginatedParameters_paginationMax]: paginationMax, [PropNames_PaginatedParameters_paginationMin]: paginationMin, [PropNames_RearrangeableParameters_adjust]: adjust, [PropNames_RearrangeableParameters_children]: childrin, [PropNames_RearrangeableParameters_compare]: compare, [PropNames_RearrangeableParameters_getIndex]: getIndex, [PropNames_RearrangeableParameters_onRearranged]: onRearranged, [PropNames_RovingTabIndexReturn_getTabbableIndex]: getTabbableIndex, [PropNames_RovingTabIndexReturn_setTabbableIndex]: setTabbableIndex, [PropNames_StaggeredParameters_staggered]: staggered, [PropNames_ManagedChildrenParameters_onAfterChildLayoutEffect]: onAfterChildLayoutEffect, [PropNames_ManagedChildrenParameters_onChildrenCountChange]: onChildrenCountChange, [PropNames_ManagedChildrenParameters_onChildrenMountChange]: onChildrenMountChange, ...void1 }) {
    const { context: contextRPS, [PropNames_RearrangeableReturn_children]: childout, [PropNames_PaginatedReturn_refreshPagination]: refreshPagination, [PropNames_RearrangeableReturn_indexDemangler]: indexDemangler, [PropNames_RearrangeableReturn_indexMangler]: indexMangler, [PropNames_RearrangeableReturn_rearrange]: rearrange, [PropNames_RearrangeableReturn_reverse]: reverse, [PropNames_RearrangeableReturn_shuffle]: shuffle2, [PropNames_RearrangeableReturn_sort]: sort, [PropNames_StaggeredReturn_stillStaggering]: stillStaggering, ...retPC } = useProcessedChildren({
      [PropNames_ChildrenHaveFocusReturn_getAnyFocused]: getAnyFocused,
      [PropNames_ManagedChildrenReturn_getChildren]: getChildren,
      [PropNames_PaginatedParameters_paginationMax]: paginationMax,
      [PropNames_PaginatedParameters_paginationMin]: paginationMin,
      [PropNames_RearrangeableParameters_adjust]: adjust,
      [PropNames_RearrangeableParameters_children]: childrin,
      [PropNames_RearrangeableParameters_compare]: compare,
      [PropNames_RearrangeableParameters_getIndex]: getIndex,
      [PropNames_RearrangeableParameters_onRearranged]: onRearranged,
      [PropNames_RefElementReturn_getElement]: context.processedChildrenContext[PropNames_RefElementReturn_getElement],
      [PropNames_RovingTabIndexReturn_getTabbableIndex]: getTabbableIndex,
      [PropNames_RovingTabIndexReturn_setTabbableIndex]: setTabbableIndex,
      [PropNames_StaggeredParameters_staggered]: staggered,
      [PropNames_ManagedChildrenParameters_onAfterChildLayoutEffect]: onAfterChildLayoutEffect,
      [PropNames_ManagedChildrenParameters_onChildrenCountChange]: onChildrenCountChange,
      [PropNames_ManagedChildrenParameters_onChildrenMountChange]: onChildrenMountChange,
      context
    });
    assertEmptyObject(void1);
    return {
      context: contextRPS,
      [PropNames_RearrangeableReturn_children]: childout,
      [PropNames_PaginatedReturn_refreshPagination]: refreshPagination,
      [PropNames_RearrangeableReturn_indexDemangler]: indexDemangler,
      [PropNames_RearrangeableReturn_indexMangler]: indexMangler,
      [PropNames_RearrangeableReturn_rearrange]: rearrange,
      [PropNames_RearrangeableReturn_reverse]: reverse,
      [PropNames_RearrangeableReturn_shuffle]: shuffle2,
      [PropNames_RearrangeableReturn_sort]: sort,
      [PropNames_StaggeredReturn_stillStaggering]: stillStaggering,
      ...retPC
    };
  });
  var useCompleteGridNavigationRow = monitored(function useCompleteGridNavigationRow2({ info: { index, untabbable, ...customUserInfo }, context: contextIncomingForRowAsChildOfTable, [PropNames_HasCurrentFocusParameters_onCurrentFocusedChanged]: onCurrentFocusedChanged, [PropNames_HasCurrentFocusParameters_onCurrentFocusedInnerChanged]: ocfic3, [PropNames_LinearNavigationParameters_navigatePastEnd]: navigatePastEnd, [PropNames_LinearNavigationParameters_navigatePastStart]: navigatePastStart, [PropNames_MultiSelectionChildParameters_initiallyMultiSelected]: initiallyMultiSelected, [PropNames_MultiSelectionChildParameters_multiSelectionDisabled]: multiSelectionDisabled, [PropNames_MultiSelectionChildParameters_onMultiSelectChange]: onMultiSelectChange, [PropNames_RovingTabIndexParameters_initiallyTabbedIndex]: initiallyTabbedIndex, [PropNames_RovingTabIndexParameters_onTabbableIndexChange]: onTabbableIndexChange, [PropNames_SingleSelectionChildParameters_singleSelectionDisabled]: singleSelectionDisabled, [PropNames_TextContentParameters_getText]: getText, [PropNames_TypeaheadNavigationParameters_collator]: collator, [PropNames_TypeaheadNavigationParameters_noTypeahead]: noTypeahead, [PropNames_TypeaheadNavigationParameters_onNavigateTypeahead]: onNavigateTypeahead, [PropNames_TypeaheadNavigationParameters_typeaheadTimeout]: typeaheadTimeout, [PropNames_RefElementParameters_onElementChange]: onElementChange, [PropNames_RefElementParameters_onMount]: onMount, [PropNames_RefElementParameters_onUnmount]: onUnmount, [PropNames_ManagedChildrenParameters_onAfterChildLayoutEffect]: onAfterChildLayoutEffect, [PropNames_ManagedChildrenParameters_onChildrenCountChange]: onChildrenCountChange, [PropNames_ManagedChildrenParameters_onChildrenMountChange]: ocmc1, ...void1 }) {
    const getRows = T2(() => getRows2(), []);
    const getCells = T2(() => getCells2(), []);
    const getHighestChildIndex = T2(() => getRows().getHighestIndex(), []);
    const getLowestChildIndex = T2(() => getRows().getLowestIndex(), []);
    const isValidForNavigation = T2((i3) => {
      const child = getRows().getAt(i3);
      if (child == null)
        return false;
      if (child.untabbable)
        return false;
      return true;
    }, []);
    const { props: propsStable, [PropNames_RefElementReturn_getElement]: getElement, ...retRE } = useRefElement({
      [PropNames_RefElementParameters_onElementChange]: onElementChange,
      [PropNames_RefElementParameters_onMount]: onMount,
      [PropNames_RefElementParameters_onUnmount]: onUnmount
    });
    const parameters = {
      context: contextIncomingForRowAsChildOfTable,
      info: { index, untabbable },
      [PropNames_LinearNavigationParameters_getHighestIndex]: getHighestChildIndex,
      [PropNames_LinearNavigationParameters_getLowestIndex]: getLowestChildIndex,
      [PropNames_LinearNavigationParameters_isValidForLinearNavigation]: isValidForNavigation,
      [PropNames_TypeaheadNavigationParameters_isValidForTypeaheadNavigation]: isValidForNavigation,
      [PropNames_LinearNavigationParameters_navigatePastEnd]: navigatePastEnd,
      [PropNames_LinearNavigationParameters_navigatePastStart]: navigatePastStart,
      [PropNames_ManagedChildrenReturn_getChildren]: getCells,
      [PropNames_MultiSelectionChildParameters_initiallyMultiSelected]: initiallyMultiSelected,
      [PropNames_MultiSelectionChildParameters_multiSelectionDisabled]: multiSelectionDisabled,
      [PropNames_MultiSelectionChildParameters_onMultiSelectChange]: onMultiSelectChange,
      [PropNames_RefElementReturn_getElement]: getElement,
      [PropNames_RovingTabIndexParameters_initiallyTabbedIndex]: initiallyTabbedIndex,
      [PropNames_RovingTabIndexParameters_onTabbableIndexChange]: onTabbableIndexChange,
      [PropNames_RovingTabIndexParameters_untabbable]: untabbable,
      [PropNames_SingleSelectionChildParameters_singleSelectionDisabled]: singleSelectionDisabled,
      [PropNames_TextContentParameters_getText]: getText,
      [PropNames_TypeaheadNavigationParameters_collator]: collator,
      [PropNames_TypeaheadNavigationParameters_noTypeahead]: noTypeahead,
      [PropNames_TypeaheadNavigationParameters_onNavigateTypeahead]: onNavigateTypeahead,
      [PropNames_TypeaheadNavigationParameters_typeaheadTimeout]: typeaheadTimeout
    };
    const { context: contextGNR, info: infoRowReturn, props: p32, [PropNames_MultiSelectionParameters_multiSelectionMode]: multiSelectionMode, [PropNames_PressParameters_excludeSpace]: excludeSpace, [PropNames_PressParameters_onPressSync]: onPressSync, [PropNames_HasCurrentFocusParameters_onCurrentFocusedInnerChanged]: ocfic2, [PropNames_ManagedChildrenParameters_onChildrenMountChange]: ocmc2, [PropNames_RovingTabIndexReturn_setTabbableIndex]: setTabbableIndex, [PropNames_RovingTabIndexReturn_getTabbableIndex]: getTabbableIndex, [PropNames_RovingTabIndexReturn_focusSelf]: focusSelf, [PropNames_RovingTabIndexChildReturn_tabbable]: tabbable, [PropNames_RovingTabIndexChildReturn_getTabbable]: getTabbable, [PropNames_TextContentReturn_getTextContent]: getTextContent, [PropNames_MultiSelectionChildReturn_getMultiSelected]: getMultiSelected, [PropNames_TypeaheadNavigationReturn_getCurrentTypeahead]: getCurrentTypeahead, [PropNames_TypeaheadNavigationReturn_typeaheadStatus]: typeaheadStatus, [PropNames_SingleSelectionChildReturn_singleSelected]: singleSelected, [PropNames_MultiSelectionChildReturn_multiSelected]: multiSelected, [PropNames_SingleSelectionChildReturn_getSingleSelected]: getSingleSelected, [PropNames_SingleSelectionChildReturn_singleSelectedOffset]: singleSelectedOffset, [PropNames_SingleSelectionChildReturn_singleSelectionMode]: singleSelectionMode, [PropNames_SingleSelectionChildReturn_getSingleSelectedOffset]: getSingleSelectedOffset, [PropNames_MultiSelectionChildReturn_changeMultiSelected]: changeMultiSelected, ...retGNS } = useGridNavigationSelectionRow(parameters);
    const completeInfo = {
      getElement,
      index,
      untabbable,
      ...infoRowReturn
    };
    const onChildrenMountChange = useStableCallback((...a4) => {
      ocmc1?.(...a4);
      ocmc2?.(...a4);
    });
    const { context: contextMC, [PropNames_ManagedChildrenReturn_getChildren]: getCells2, ...retMC } = useManagedChildren({
      [PropNames_ManagedChildrenParameters_onAfterChildLayoutEffect]: onAfterChildLayoutEffect,
      [PropNames_ManagedChildrenParameters_onChildrenCountChange]: onChildrenCountChange,
      [PropNames_ManagedChildrenParameters_onChildrenMountChange]: onChildrenMountChange
    });
    const { [PropNames_ManagedChildReturn_getChildren]: getRows2, ...retMCC } = useManagedChild({
      context: contextIncomingForRowAsChildOfTable,
      info: { ...completeInfo, ...customUserInfo }
    });
    const onCurrentFocusedInnerChanged = useStableCallback((focused, prevFocused, reason) => {
      ocfic2?.(focused, prevFocused, reason);
      ocfic3?.(focused, prevFocused, reason);
    });
    const { props: p22, [PropNames_HasCurrentFocusReturn_getCurrentFocused]: getCurrentFocused, [PropNames_HasCurrentFocusReturn_getCurrentFocusedInner]: getCurrentFocusedInner, ...retHCF } = useHasCurrentFocus({
      [PropNames_RefElementReturn_getElement]: getElement,
      [PropNames_HasCurrentFocusParameters_onCurrentFocusedChanged]: onCurrentFocusedChanged,
      [PropNames_HasCurrentFocusParameters_onCurrentFocusedInnerChanged]: onCurrentFocusedInnerChanged
    });
    assertEmptyObject(void1);
    assertEmptyObject(retHCF);
    assertEmptyObject(retMCC);
    assertEmptyObject(retMC);
    assertEmptyObject(retGNS);
    const ret = {
      context: useMemoObject({
        ...contextGNR,
        ...contextMC
      }),
      props: [
        propsStable,
        ...p32,
        p22
      ],
      [PropNames_HasCurrentFocusReturn_getCurrentFocused]: getCurrentFocused,
      [PropNames_HasCurrentFocusReturn_getCurrentFocusedInner]: getCurrentFocusedInner,
      [PropNames_RefElementReturn_getElement]: getElement,
      [PropNames_HasCurrentFocusParameters_onCurrentFocusedInnerChanged]: onCurrentFocusedInnerChanged,
      [PropNames_ManagedChildrenParameters_onChildrenMountChange]: onChildrenMountChange,
      [PropNames_ManagedChildrenReturn_getChildren]: getCells,
      [PropNames_ManagedChildReturn_getChildren]: getRows,
      [PropNames_MultiSelectionParameters_multiSelectionMode]: multiSelectionMode,
      [PropNames_PressParameters_excludeSpace]: excludeSpace,
      [PropNames_PressParameters_onPressSync]: onPressSync,
      [PropNames_RovingTabIndexReturn_setTabbableIndex]: setTabbableIndex,
      [PropNames_RovingTabIndexReturn_getTabbableIndex]: getTabbableIndex,
      [PropNames_RovingTabIndexReturn_focusSelf]: focusSelf,
      [PropNames_RovingTabIndexChildReturn_tabbable]: tabbable,
      [PropNames_RovingTabIndexChildReturn_getTabbable]: getTabbable,
      [PropNames_TextContentReturn_getTextContent]: getTextContent,
      [PropNames_MultiSelectionChildReturn_getMultiSelected]: getMultiSelected,
      [PropNames_TypeaheadNavigationReturn_getCurrentTypeahead]: getCurrentTypeahead,
      [PropNames_TypeaheadNavigationReturn_typeaheadStatus]: typeaheadStatus,
      [PropNames_SingleSelectionChildReturn_singleSelected]: singleSelected,
      [PropNames_MultiSelectionChildReturn_multiSelected]: multiSelected,
      [PropNames_SingleSelectionChildReturn_getSingleSelected]: getSingleSelected,
      [PropNames_SingleSelectionChildReturn_singleSelectedOffset]: singleSelectedOffset,
      [PropNames_SingleSelectionChildReturn_singleSelectionMode]: singleSelectionMode,
      [PropNames_SingleSelectionChildReturn_getSingleSelectedOffset]: getSingleSelectedOffset,
      [PropNames_MultiSelectionChildReturn_changeMultiSelected]: changeMultiSelected,
      ...retHCF,
      ...retGNS,
      ...retRE,
      ...retMCC
    };
    return ret;
  });
  var useCompleteGridNavigationCell = monitored(function useCompleteGridNavigationCell2({
    //gridNavigationCellParameters,
    context,
    //textContentParameters,
    info: { focusSelf, index, untabbable, ...customUserInfo },
    [PropNames_RefElementParameters_onElementChange]: onElementChange,
    [PropNames_RefElementParameters_onMount]: onMount,
    [PropNames_RefElementParameters_onUnmount]: onUnmount,
    [PropNames_GridNavigationCellParameters_colSpan]: colSpan,
    [PropNames_RefElementReturn_getElement]: getElement,
    [PropNames_TextContentParameters_getText]: getText,
    [PropNames_HasCurrentFocusParameters_onCurrentFocusedChanged]: onCurrentFocusedChanged,
    [PropNames_HasCurrentFocusParameters_onCurrentFocusedInnerChanged]: ocfic2,
    ...void1
  }) {
    const { props: propsStable, ...retRE } = useRefElement({
      [PropNames_RefElementParameters_onElementChange]: onElementChange,
      [PropNames_RefElementParameters_onMount]: onMount,
      [PropNames_RefElementParameters_onUnmount]: onUnmount
    });
    const { [PropNames_PressParameters_excludeSpace]: es1, [PropNames_HasCurrentFocusParameters_onCurrentFocusedInnerChanged]: ocfic1, props: propsRti, info: info2, ...retGNS } = useGridNavigationSelectionCell({
      info: { index, untabbable },
      context,
      [PropNames_GridNavigationCellParameters_colSpan]: colSpan,
      [PropNames_RefElementReturn_getElement]: getElement,
      [PropNames_TextContentParameters_getText]: getText
    });
    assertEmptyObject(void1);
    const onCurrentFocusedInnerChanged = useStableCallback((...a4) => {
      ocfic1?.(...a4);
      ocfic2?.(...a4);
    });
    const { props: p1, ...retHCF } = useHasCurrentFocus({
      [PropNames_HasCurrentFocusParameters_onCurrentFocusedChanged]: onCurrentFocusedChanged,
      [PropNames_HasCurrentFocusParameters_onCurrentFocusedInnerChanged]: onCurrentFocusedInnerChanged,
      [PropNames_RefElementReturn_getElement]: getElement
    });
    const baseInfo = {
      getElement,
      getLocallyTabbable: retGNS[PropNames_RovingTabIndexChildReturn_getTabbable],
      setLocallyTabbable: info2.setLocallyTabbable,
      focusSelf,
      index,
      untabbable
    };
    const { ...retMCR } = useManagedChild({ context, info: { ...baseInfo, ...customUserInfo } });
    return {
      props: [
        propsStable,
        propsRti,
        p1
      ],
      [PropNames_HasCurrentFocusParameters_onCurrentFocusedInnerChanged]: onCurrentFocusedInnerChanged,
      [PropNames_PressParameters_excludeSpace]: useStableCallback(() => es1?.() || false),
      ...retRE,
      ...retMCR,
      ...retHCF,
      ...retGNS
    };
  });

  // ../dist/component-use/use-list-navigation-complete.js
  var useCompleteListNavigation = monitored(function useCompleteListNavigation2({ [PropNames_RefElementParameters_onElementChange]: onElementChange, [PropNames_RefElementParameters_onMount]: onMount, [PropNames_RefElementParameters_onUnmount]: onUnmount, [PropNames_LinearNavigationParameters_arrowKeyDirection]: arrowKeyDirection, [PropNames_LinearNavigationParameters_disableHomeEndKeys]: disableHomeEndKeys, [PropNames_LinearNavigationParameters_navigatePastEnd]: navigatePastEnd, [PropNames_LinearNavigationParameters_navigatePastStart]: navigatePastStart, [PropNames_LinearNavigationParameters_onNavigateLinear]: onNavigateLinear, [PropNames_LinearNavigationParameters_pageNavigationSize]: pageNavigationSize, [PropNames_MultiSelectionParameters_multiSelectionAriaPropName]: multiSelectionAriaPropName, [PropNames_MultiSelectionParameters_multiSelectionMode]: multiSelectionMode, [PropNames_MultiSelectionParameters_onSelectionChange]: onSelectionChange, [PropNames_PaginatedParameters_paginationMax]: paginationMax, [PropNames_PaginatedParameters_paginationMin]: paginationMin, [PropNames_RovingTabIndexParameters_focusSelfParent]: focusSelfParent, [PropNames_RovingTabIndexParameters_initiallyTabbedIndex]: initiallyTabbedIndex, [PropNames_RovingTabIndexParameters_onTabbableIndexChange]: onTabbableIndexChange, [PropNames_RovingTabIndexParameters_untabbable]: untabbable, [PropNames_SingleSelectionParameters_initiallySingleSelectedIndex]: initiallySingleSelectedIndex, [PropNames_SingleSelectionParameters_onSingleSelectedIndexChange]: onSingleSelectedIndexChange, [PropNames_SingleSelectionParameters_singleSelectionAriaPropName]: singleSelectionAriaPropName, [PropNames_SingleSelectionParameters_singleSelectionMode]: singleSelectionMode, [PropNames_TypeaheadNavigationParameters_collator]: collator, [PropNames_TypeaheadNavigationParameters_noTypeahead]: noTypeahead, [PropNames_TypeaheadNavigationParameters_onNavigateTypeahead]: onNavigateTypeahead, [PropNames_TypeaheadNavigationParameters_typeaheadTimeout]: typeaheadTimeout, [PropNames_ManagedChildrenParameters_onAfterChildLayoutEffect]: onAfterChildLayoutEffect, [PropNames_ManagedChildrenParameters_onChildrenCountChange]: onChildrenCountChange, [PropNames_ManagedChildrenParameters_onChildrenMountChange]: ocmc1, [PropNames_StaggeredParameters_staggered]: staggered, ...void4 }) {
    const getChildren = T2(() => getChildren2(), []);
    const getLowestIndex = T2(() => getChildren().getLowestIndex(), []);
    const getHighestIndex = T2(() => getChildren().getHighestIndex(), []);
    const isValidForNavigation = T2((i3) => {
      const child = getChildren().getAt(i3);
      if (!child)
        return false;
      if (child.untabbable)
        return false;
      return true;
    }, []);
    const { props: propsRef, [PropNames_RefElementReturn_getElement]: getElement, ...void3 } = useRefElement({
      [PropNames_RefElementParameters_onElementChange]: onElementChange,
      [PropNames_RefElementParameters_onMount]: onMount,
      [PropNames_RefElementParameters_onUnmount]: onUnmount
    });
    const { context: contextProcessing, [PropNames_RearrangeableReturn_indexDemangler]: indexDemangler, [PropNames_RearrangeableReturn_indexMangler]: indexMangler, [PropNames_RearrangeableReturn_rearrange]: rearrange, [PropNames_RearrangeableReturn_reverse]: reverse, [PropNames_RearrangeableReturn_shuffle]: shuffle2, [PropNames_RearrangeableReturn_sort]: sort, ...void1 } = useCreateProcessedChildrenContext();
    const { context: { rovingTabIndexContext, singleSelectionContext, multiSelectionContext, typeaheadNavigationContext }, props, [PropNames_ChildrenHaveFocusParameters_onCompositeFocusChange]: ocfc2, [PropNames_RovingTabIndexReturn_focusSelf]: focusSelf, [PropNames_RovingTabIndexReturn_getTabbableIndex]: getTabbableIndex, [PropNames_RovingTabIndexReturn_setTabbableIndex]: setTabbableIndex, [PropNames_SingleSelectionReturn_changeSingleSelectedIndex]: changeSingleSelectedIndex, [PropNames_SingleSelectionReturn_getSingleSelectedIndex]: getSingleSelectedIndex, [PropNames_TypeaheadNavigationReturn_getCurrentTypeahead]: getCurrentTypeahead, [PropNames_TypeaheadNavigationReturn_typeaheadStatus]: typeaheadStatus, [PropNames_ManagedChildrenParameters_onChildrenMountChange]: ocmc2, ...void2 } = useListNavigationSelection({
      [PropNames_ChildrenHaveFocusReturn_getAnyFocused]: useStableCallback(() => getAnyFocused()),
      [PropNames_LinearNavigationParameters_arrowKeyDirection]: arrowKeyDirection,
      [PropNames_LinearNavigationParameters_disableHomeEndKeys]: disableHomeEndKeys,
      [PropNames_LinearNavigationParameters_isValidForLinearNavigation]: isValidForNavigation,
      [PropNames_LinearNavigationParameters_navigatePastEnd]: navigatePastEnd,
      [PropNames_LinearNavigationParameters_navigatePastStart]: navigatePastStart,
      [PropNames_LinearNavigationParameters_onNavigateLinear]: onNavigateLinear,
      [PropNames_LinearNavigationParameters_pageNavigationSize]: pageNavigationSize,
      [PropNames_MultiSelectionParameters_multiSelectionAriaPropName]: multiSelectionAriaPropName,
      [PropNames_MultiSelectionParameters_multiSelectionMode]: multiSelectionMode,
      [PropNames_MultiSelectionParameters_onSelectionChange]: onSelectionChange,
      [PropNames_PaginatedParameters_paginationMax]: paginationMax,
      [PropNames_PaginatedParameters_paginationMin]: paginationMin,
      [PropNames_RovingTabIndexParameters_focusSelfParent]: focusSelfParent,
      [PropNames_RovingTabIndexParameters_initiallyTabbedIndex]: initiallyTabbedIndex,
      [PropNames_RovingTabIndexParameters_onTabbableIndexChange]: onTabbableIndexChange,
      [PropNames_RovingTabIndexParameters_untabbable]: untabbable,
      [PropNames_RovingTabIndexParameters_untabbableBehavior]: "focus-parent",
      [PropNames_SingleSelectionParameters_initiallySingleSelectedIndex]: initiallySingleSelectedIndex,
      [PropNames_SingleSelectionParameters_onSingleSelectedIndexChange]: onSingleSelectedIndexChange,
      [PropNames_SingleSelectionParameters_singleSelectionAriaPropName]: singleSelectionAriaPropName,
      [PropNames_SingleSelectionParameters_singleSelectionMode]: singleSelectionMode,
      [PropNames_TypeaheadNavigationParameters_collator]: collator,
      [PropNames_TypeaheadNavigationParameters_isValidForTypeaheadNavigation]: isValidForNavigation,
      [PropNames_TypeaheadNavigationParameters_noTypeahead]: noTypeahead,
      [PropNames_TypeaheadNavigationParameters_onNavigateTypeahead]: onNavigateTypeahead,
      [PropNames_TypeaheadNavigationParameters_typeaheadTimeout]: typeaheadTimeout,
      [PropNames_LinearNavigationParameters_getHighestIndex]: getHighestIndex,
      [PropNames_LinearNavigationParameters_getLowestIndex]: getLowestIndex,
      [PropNames_ManagedChildrenReturn_getChildren]: getChildren,
      [PropNames_RearrangeableReturn_indexDemangler]: indexDemangler,
      [PropNames_RearrangeableReturn_indexMangler]: indexMangler,
      [PropNames_RefElementReturn_getElement]: getElement
    });
    const { context: { childrenHaveFocusChildContext }, [PropNames_ChildrenHaveFocusReturn_getAnyFocused]: getAnyFocused, ...void5 } = useChildrenHaveFocus({
      [PropNames_ChildrenHaveFocusParameters_onCompositeFocusChange]: useStableCallback((...a4) => {
        ocfc2?.(...a4);
      })
    });
    const { [PropNames_ManagedChildrenReturn_getChildren]: getChildren2, context: managedChildRTIContext, ...void6 } = useManagedChildren({
      [PropNames_ManagedChildrenParameters_onAfterChildLayoutEffect]: onAfterChildLayoutEffect,
      [PropNames_ManagedChildrenParameters_onChildrenCountChange]: onChildrenCountChange,
      [PropNames_ManagedChildrenParameters_onChildrenMountChange]: useStableCallback((...a4) => {
        ocmc1?.(...a4);
        ocmc2?.(...a4);
      })
    });
    const contextChildren = useMemoObject({
      childrenHaveFocusChildContext,
      rovingTabIndexContext,
      singleSelectionContext,
      multiSelectionContext,
      typeaheadNavigationContext,
      ...managedChildRTIContext
    });
    assertEmptyObject(void1);
    assertEmptyObject(void2);
    assertEmptyObject(void3);
    assertEmptyObject(void4);
    assertEmptyObject(void5);
    assertEmptyObject(void6);
    const processedChildrenContext = useMemoObject({
      [PropNames_ChildrenHaveFocusReturn_getAnyFocused]: getAnyFocused,
      [PropNames_RefElementReturn_getElement]: getElement,
      [PropNames_RovingTabIndexReturn_getTabbableIndex]: getTabbableIndex,
      [PropNames_RovingTabIndexReturn_setTabbableIndex]: setTabbableIndex,
      [PropNames_PaginatedParameters_paginationMin]: paginationMin,
      [PropNames_PaginatedParameters_paginationMax]: paginationMax,
      [PropNames_StaggeredParameters_staggered]: staggered,
      [PropNames_ManagedChildrenReturn_getChildren]: getChildren
    });
    return {
      contextChildren,
      contextProcessing: useMemoObject({
        processedChildrenContext,
        ...contextProcessing
      }),
      props: [...props, propsRef],
      [PropNames_RearrangeableReturn_indexMangler]: indexMangler,
      [PropNames_RearrangeableReturn_indexDemangler]: indexDemangler,
      [PropNames_RearrangeableReturn_sort]: sort,
      [PropNames_RearrangeableReturn_shuffle]: shuffle2,
      [PropNames_RearrangeableReturn_rearrange]: rearrange,
      [PropNames_RearrangeableReturn_reverse]: reverse,
      [PropNames_RefElementReturn_getElement]: getElement,
      [PropNames_ManagedChildrenReturn_getChildren]: getChildren,
      [PropNames_ChildrenHaveFocusParameters_onCompositeFocusChange]: useStableCallback((...a4) => {
        ocfc2?.(...a4);
      }),
      [PropNames_ManagedChildrenParameters_onChildrenMountChange]: useStableCallback((...a4) => {
        ocmc1?.(...a4);
        ocmc2?.(...a4);
      }),
      [PropNames_RovingTabIndexReturn_focusSelf]: focusSelf,
      [PropNames_RovingTabIndexReturn_getTabbableIndex]: getTabbableIndex,
      [PropNames_RovingTabIndexReturn_setTabbableIndex]: setTabbableIndex,
      [PropNames_SingleSelectionReturn_changeSingleSelectedIndex]: changeSingleSelectedIndex,
      [PropNames_SingleSelectionReturn_getSingleSelectedIndex]: getSingleSelectedIndex,
      [PropNames_TypeaheadNavigationReturn_getCurrentTypeahead]: getCurrentTypeahead,
      [PropNames_TypeaheadNavigationReturn_typeaheadStatus]: typeaheadStatus
    };
  });
  var useCompleteListNavigationChildren = monitored(function useCompleteListNavigationChildren2({ context, [PropNames_PaginatedParameters_paginationMax]: paginationMax, [PropNames_PaginatedParameters_paginationMin]: paginationMin, [PropNames_RearrangeableParameters_adjust]: adjust, [PropNames_RearrangeableParameters_children]: children, [PropNames_RearrangeableParameters_compare]: compare, [PropNames_RearrangeableParameters_getIndex]: getIndex, [PropNames_RearrangeableParameters_onRearranged]: onRearranged, [PropNames_StaggeredParameters_staggered]: staggered, [PropNames_ManagedChildrenParameters_onAfterChildLayoutEffect]: onAfterChildLayoutEffect, [PropNames_ManagedChildrenParameters_onChildrenCountChange]: onChildrenCountChange, [PropNames_ManagedChildrenParameters_onChildrenMountChange]: onChildrenMountChange, ...void1 }) {
    const { context: contextRPS, ...retPC } = useProcessedChildren({
      [PropNames_RefElementReturn_getElement]: context.processedChildrenContext[PropNames_RefElementReturn_getElement],
      [PropNames_ChildrenHaveFocusReturn_getAnyFocused]: context.processedChildrenContext[PropNames_ChildrenHaveFocusReturn_getAnyFocused],
      [PropNames_ManagedChildrenReturn_getChildren]: context.processedChildrenContext[PropNames_ManagedChildrenReturn_getChildren],
      [PropNames_PaginatedParameters_paginationMax]: paginationMax,
      [PropNames_PaginatedParameters_paginationMin]: paginationMin,
      [PropNames_RearrangeableParameters_adjust]: adjust,
      [PropNames_RearrangeableParameters_children]: children,
      [PropNames_RearrangeableParameters_compare]: compare,
      [PropNames_RearrangeableParameters_getIndex]: getIndex,
      [PropNames_RearrangeableParameters_onRearranged]: onRearranged,
      [PropNames_RovingTabIndexReturn_getTabbableIndex]: context.processedChildrenContext[PropNames_RovingTabIndexReturn_getTabbableIndex],
      [PropNames_RovingTabIndexReturn_setTabbableIndex]: context.processedChildrenContext[PropNames_RovingTabIndexReturn_setTabbableIndex],
      [PropNames_StaggeredParameters_staggered]: staggered,
      [PropNames_ManagedChildrenParameters_onAfterChildLayoutEffect]: onAfterChildLayoutEffect,
      [PropNames_ManagedChildrenParameters_onChildrenCountChange]: onChildrenCountChange,
      [PropNames_ManagedChildrenParameters_onChildrenMountChange]: onChildrenMountChange,
      context
    });
    return {
      context: contextRPS,
      ...retPC
    };
  });
  var useCompleteListNavigationChild = monitored(function useCompleteListNavigationChild2({
    info: { index, focusSelf, untabbable, ...customUserInfo },
    // The "...info" is empty if M is the same as UCLNCI<ChildElement>.
    [PropNames_HasCurrentFocusParameters_onCurrentFocusedChanged]: onCurrentFocusedChanged,
    [PropNames_HasCurrentFocusParameters_onCurrentFocusedInnerChanged]: ocfic3,
    [PropNames_MultiSelectionChildParameters_initiallyMultiSelected]: initiallyMultiSelected,
    [PropNames_MultiSelectionChildParameters_multiSelectionDisabled]: multiSelectionDisabled,
    [PropNames_MultiSelectionChildParameters_onMultiSelectChange]: onMultiSelectChange,
    [PropNames_SingleSelectionChildParameters_singleSelectionDisabled]: singleSelectionDisabled,
    [PropNames_TextContentParameters_getText]: getText,
    [PropNames_RefElementParameters_onElementChange]: onElementChange,
    [PropNames_RefElementParameters_onMount]: onMount,
    [PropNames_RefElementParameters_onUnmount]: onUnmount,
    //textContentParameters,
    //refElementParameters,
    //hasCurrentFocusParameters: { onCurrentFocusedChanged, onCurrentFocusedInnerChanged: ocfic3, ...void7 },
    //singleSelectionChildParameters,
    //multiSelectionChildParameters,
    context: { managedChildContext, rovingTabIndexContext, singleSelectionContext, multiSelectionContext, typeaheadNavigationContext, childrenHaveFocusChildContext, ...void5 },
    ...void1
  }) {
    const { props: propsStable, ...retRE } = useRefElement({
      [PropNames_RefElementParameters_onElementChange]: onElementChange,
      [PropNames_RefElementParameters_onMount]: onMount,
      [PropNames_RefElementParameters_onUnmount]: onUnmount
    });
    const { [PropNames_RefElementReturn_getElement]: getElement } = retRE;
    const { info: infoFromListNav, propsChild, propsTabbable, ...retLN } = useListNavigationSelectionChild({
      info: { index, untabbable },
      context: { rovingTabIndexContext, singleSelectionContext, multiSelectionContext, typeaheadNavigationContext },
      [PropNames_MultiSelectionChildParameters_initiallyMultiSelected]: initiallyMultiSelected,
      [PropNames_MultiSelectionChildParameters_multiSelectionDisabled]: multiSelectionDisabled,
      [PropNames_MultiSelectionChildParameters_onMultiSelectChange]: onMultiSelectChange,
      [PropNames_RefElementReturn_getElement]: getElement,
      [PropNames_SingleSelectionChildParameters_singleSelectionDisabled]: singleSelectionDisabled,
      [PropNames_TextContentParameters_getText]: getText
    });
    const allStandardInfo = {
      index,
      focusSelf,
      getElement,
      untabbable,
      ...infoFromListNav
    };
    const retMC = useManagedChild({ context: { managedChildContext }, info: { ...allStandardInfo, ...customUserInfo } });
    const { [PropNames_HasCurrentFocusParameters_onCurrentFocusedInnerChanged]: ocfic1 } = retLN;
    const { [PropNames_HasCurrentFocusParameters_onCurrentFocusedInnerChanged]: ocfic2 } = useChildrenHaveFocusChild({ context: { childrenHaveFocusChildContext } });
    const { props: props2, ...retHCF } = useHasCurrentFocus({
      [PropNames_HasCurrentFocusParameters_onCurrentFocusedInnerChanged]: useStableCallback((focused, prev, e3) => {
        ocfic1?.(focused, prev, e3);
        ocfic2?.(focused, prev, e3);
        ocfic3?.(focused, prev, e3);
      }),
      [PropNames_HasCurrentFocusParameters_onCurrentFocusedChanged]: onCurrentFocusedChanged,
      [PropNames_RefElementReturn_getElement]: getElement
    });
    const props = [
      propsStable,
      props2,
      ...propsChild
    ];
    assertEmptyObject(void1);
    assertEmptyObject(void5);
    return {
      propsChild: props,
      propsTabbable,
      ...retHCF,
      ...retLN,
      ...retRE,
      ...retMC
    };
  });
  function useCompleteListNavigationDeclarative({ [PropNames_SingleSelectionParameters_singleSelectedIndex]: singleSelectedIndex, [PropNames_LinearNavigationParameters_arrowKeyDirection]: arrowKeyDirection, [PropNames_LinearNavigationParameters_disableHomeEndKeys]: disableHomeEndKeys, [PropNames_LinearNavigationParameters_navigatePastEnd]: navigatePastEnd, [PropNames_LinearNavigationParameters_navigatePastStart]: navigatePastStart, [PropNames_LinearNavigationParameters_onNavigateLinear]: onNavigateLinear, [PropNames_LinearNavigationParameters_pageNavigationSize]: pageNavigationSize, [PropNames_MultiSelectionParameters_multiSelectionAriaPropName]: multiSelectionAriaPropName, [PropNames_MultiSelectionParameters_multiSelectionMode]: multiSelectionMode, [PropNames_MultiSelectionParameters_onSelectionChange]: onSelectionChange, [PropNames_PaginatedParameters_paginationMax]: paginationMax, [PropNames_PaginatedParameters_paginationMin]: paginationMin, [PropNames_RovingTabIndexParameters_focusSelfParent]: focusSelfParent, [PropNames_RovingTabIndexParameters_initiallyTabbedIndex]: initiallyTabbedIndex, [PropNames_RovingTabIndexParameters_onTabbableIndexChange]: onTabbableIndexChange, [PropNames_RovingTabIndexParameters_untabbable]: untabbable, [PropNames_SingleSelectionParameters_singleSelectionAriaPropName]: singleSelectionAriaPropName, [PropNames_SingleSelectionParameters_singleSelectionMode]: singleSelectionMode, [PropNames_SingleSelectionParameters_onSingleSelectedIndexChange]: ossici, [PropNames_TypeaheadNavigationParameters_collator]: collator, [PropNames_TypeaheadNavigationParameters_noTypeahead]: noTypeahead, [PropNames_TypeaheadNavigationParameters_onNavigateTypeahead]: onNavigateTypeahead, [PropNames_TypeaheadNavigationParameters_typeaheadTimeout]: typeaheadTimeout, [PropNames_ManagedChildrenParameters_onAfterChildLayoutEffect]: onAfterChildLayoutEffect, [PropNames_ManagedChildrenParameters_onChildrenCountChange]: onChildrenCountChange, [PropNames_ManagedChildrenParameters_onChildrenMountChange]: onChildrenMountChange, [PropNames_RefElementParameters_onElementChange]: onElementChange, [PropNames_RefElementParameters_onMount]: onMount, [PropNames_RefElementParameters_onUnmount]: onUnmount, [PropNames_StaggeredParameters_staggered]: staggered, ...rest }) {
    const retLN = useCompleteListNavigation({
      [PropNames_SingleSelectionParameters_initiallySingleSelectedIndex]: singleSelectedIndex,
      [PropNames_SingleSelectionParameters_onSingleSelectedIndexChange]: useStableCallback((...e3) => ossicd?.(...e3)),
      [PropNames_LinearNavigationParameters_arrowKeyDirection]: arrowKeyDirection,
      [PropNames_LinearNavigationParameters_disableHomeEndKeys]: disableHomeEndKeys,
      [PropNames_LinearNavigationParameters_navigatePastEnd]: navigatePastEnd,
      [PropNames_LinearNavigationParameters_navigatePastStart]: navigatePastStart,
      [PropNames_LinearNavigationParameters_onNavigateLinear]: onNavigateLinear,
      [PropNames_LinearNavigationParameters_pageNavigationSize]: pageNavigationSize,
      [PropNames_MultiSelectionParameters_multiSelectionAriaPropName]: multiSelectionAriaPropName,
      [PropNames_MultiSelectionParameters_multiSelectionMode]: multiSelectionMode,
      [PropNames_MultiSelectionParameters_onSelectionChange]: onSelectionChange,
      [PropNames_PaginatedParameters_paginationMax]: paginationMax,
      [PropNames_PaginatedParameters_paginationMin]: paginationMin,
      [PropNames_RovingTabIndexParameters_focusSelfParent]: focusSelfParent,
      [PropNames_RovingTabIndexParameters_initiallyTabbedIndex]: initiallyTabbedIndex,
      [PropNames_RovingTabIndexParameters_onTabbableIndexChange]: onTabbableIndexChange,
      [PropNames_RovingTabIndexParameters_untabbable]: untabbable,
      [PropNames_SingleSelectionParameters_singleSelectionAriaPropName]: singleSelectionAriaPropName,
      [PropNames_SingleSelectionParameters_singleSelectionMode]: singleSelectionMode,
      [PropNames_TypeaheadNavigationParameters_collator]: collator,
      [PropNames_TypeaheadNavigationParameters_noTypeahead]: noTypeahead,
      [PropNames_TypeaheadNavigationParameters_onNavigateTypeahead]: onNavigateTypeahead,
      [PropNames_TypeaheadNavigationParameters_typeaheadTimeout]: typeaheadTimeout,
      [PropNames_ManagedChildrenParameters_onAfterChildLayoutEffect]: onAfterChildLayoutEffect,
      [PropNames_ManagedChildrenParameters_onChildrenCountChange]: onChildrenCountChange,
      [PropNames_ManagedChildrenParameters_onChildrenMountChange]: onChildrenMountChange,
      [PropNames_RefElementParameters_onElementChange]: onElementChange,
      [PropNames_RefElementParameters_onMount]: onMount,
      [PropNames_RefElementParameters_onUnmount]: onUnmount,
      [PropNames_StaggeredParameters_staggered]: staggered
    });
    const { [PropNames_SingleSelectionReturn_changeSingleSelectedIndex]: changeSingleSelectedIndex } = retLN;
    const { [PropNames_SingleSelectionParameters_onSingleSelectedIndexChange]: ossicd } = useSelectionDeclarative({
      [PropNames_SingleSelectionParameters_onSingleSelectedIndexChange]: ossici,
      [PropNames_SingleSelectionParameters_singleSelectedIndex]: singleSelectedIndex,
      [PropNames_SingleSelectionReturn_changeSingleSelectedIndex]: changeSingleSelectedIndex
    });
    return retLN;
  }
  function useCompleteListNavigationChildDeclarative({
    [PropNames_MultiSelectionChildParameters_multiSelected]: multiSelected,
    context,
    info: uinfo,
    [PropNames_HasCurrentFocusParameters_onCurrentFocusedChanged]: onCurrentFocusedChanged,
    [PropNames_HasCurrentFocusParameters_onCurrentFocusedInnerChanged]: onCurrentFocusedInnerChanged,
    //[PropNames_MultiSelectionChildParameters_initiallyMultiSelected]: initiallyMultiSelected,
    [PropNames_MultiSelectionChildParameters_onMultiSelectChange]: omsci,
    [PropNames_MultiSelectionChildParameters_multiSelectionDisabled]: multiSelectionDisabled,
    [PropNames_SingleSelectionChildParameters_singleSelectionDisabled]: singleSelectionDisabled,
    [PropNames_TextContentParameters_getText]: getText,
    [PropNames_RefElementParameters_onElementChange]: onElementChange,
    [PropNames_RefElementParameters_onMount]: onMount,
    [PropNames_RefElementParameters_onUnmount]: onUnmount,
    ...void1
  }) {
    const ret = useCompleteListNavigationChild({
      context,
      info: uinfo,
      [PropNames_MultiSelectionChildParameters_initiallyMultiSelected]: multiSelected,
      [PropNames_MultiSelectionChildParameters_onMultiSelectChange]: useStableCallback((e3) => {
        omscd(e3);
      }),
      [PropNames_HasCurrentFocusParameters_onCurrentFocusedChanged]: onCurrentFocusedChanged,
      [PropNames_HasCurrentFocusParameters_onCurrentFocusedInnerChanged]: onCurrentFocusedInnerChanged,
      [PropNames_MultiSelectionChildParameters_multiSelectionDisabled]: multiSelectionDisabled,
      [PropNames_SingleSelectionChildParameters_singleSelectionDisabled]: singleSelectionDisabled,
      [PropNames_TextContentParameters_getText]: getText,
      [PropNames_RefElementParameters_onElementChange]: onElementChange,
      [PropNames_RefElementParameters_onMount]: onMount,
      [PropNames_RefElementParameters_onUnmount]: onUnmount
    });
    const { [PropNames_MultiSelectionChildReturn_changeMultiSelected]: changeMultiSelected } = ret;
    const { [PropNames_MultiSelectionChildParameters_onMultiSelectChange]: omscd, info, ...void2 } = useSelectionChildDeclarative({
      [PropNames_MultiSelectionChildParameters_multiSelected]: multiSelected,
      [PropNames_MultiSelectionChildParameters_onMultiSelectChange]: omsci,
      [PropNames_MultiSelectionChildReturn_changeMultiSelected]: changeMultiSelected
    });
    assertEmptyObject(void1);
    assertEmptyObject(void2);
    return ret;
  }

  // ../dist/component-use/use-modal.js
  var P23 = `PropNames.ModalParameters`;
  var PropNames_ModalParameters_active = `${P23}.active`;
  var useModal = monitored(function useModal2({ [PropNames_DismissParameters_dismissActive]: dismissActive, [PropNames_DismissParameters_onDismiss]: onDismiss, [PropNames_EscapeDismissParameters_dismissEscapeActive]: dismissEscapeActive, [PropNames_EscapeDismissParameters_onDismissEscape]: onDismissEscape, [PropNames_EscapeDismissParameters_parentDepth]: parentDepth, [PropNames_ActiveElementParameters_getDocument]: getDocument2, [PropNames_ActiveElementParameters_onActiveElementChange]: onActiveElementChange, [PropNames_ActiveElementParameters_onLastActiveElementChange]: onLastActiveElementChange, [PropNames_ActiveElementParameters_onWindowFocusedChange]: onWindowFocusedChange, [PropNames_BackdropDismissParameters_dismissBackdropActive]: dismissBackdropActive, [PropNames_BackdropDismissParameters_onDismissBackdrop]: onDismissBackdrop, [PropNames_LostFocusDismissParameters_dismissLostFocusActive]: dismissLostFocusActive, [PropNames_LostFocusDismissParameters_onDismissLostFocus]: onDismissLostFocus, [PropNames_RefElementParameters_onElementChange]: onElementChange, [PropNames_RefElementParameters_onMount]: onMount, [PropNames_RefElementParameters_onUnmount]: onUnmount, [PropNames_ModalParameters_active]: modalActive, [PropNames_FocusTrapParameters_trapActive]: trapActive, [PropNames_FocusTrapParameters_onlyMoveFocus]: onlyMoveFocus, [PropNames_FocusTrapParameters_focusPopup]: focusPopup, [PropNames_FocusTrapParameters_focusOpener]: focusOpener, ...void1 }) {
    const dismissReturn = useDismiss({
      [PropNames_DismissParameters_dismissActive]: dismissActive && modalActive,
      [PropNames_DismissParameters_onDismiss]: onDismiss,
      [PropNames_EscapeDismissParameters_dismissEscapeActive]: dismissEscapeActive,
      [PropNames_EscapeDismissParameters_onDismissEscape]: onDismissEscape,
      [PropNames_EscapeDismissParameters_parentDepth]: parentDepth,
      [PropNames_ActiveElementParameters_getDocument]: getDocument2,
      [PropNames_ActiveElementParameters_onActiveElementChange]: onActiveElementChange,
      [PropNames_ActiveElementParameters_onLastActiveElementChange]: onLastActiveElementChange,
      [PropNames_ActiveElementParameters_onWindowFocusedChange]: onWindowFocusedChange,
      [PropNames_BackdropDismissParameters_dismissBackdropActive]: dismissBackdropActive,
      [PropNames_BackdropDismissParameters_onDismissBackdrop]: onDismissBackdrop,
      [PropNames_LostFocusDismissParameters_dismissLostFocusActive]: dismissLostFocusActive,
      [PropNames_LostFocusDismissParameters_onDismissLostFocus]: onDismissLostFocus
    });
    const { [PropNames_RefElementReturn_getElement]: getElement, props: propsStable, ...void2 } = useRefElement({
      [PropNames_RefElementParameters_onElementChange]: onElementChange,
      [PropNames_RefElementParameters_onMount]: onMount,
      [PropNames_RefElementParameters_onUnmount]: onUnmount
    });
    const { props, ...void3 } = useFocusTrap({
      [PropNames_FocusTrapParameters_trapActive]: trapActive && modalActive,
      [PropNames_FocusTrapParameters_focusOpener]: focusOpener,
      [PropNames_FocusTrapParameters_focusPopup]: focusPopup,
      [PropNames_FocusTrapParameters_onlyMoveFocus]: onlyMoveFocus,
      [PropNames_RefElementReturn_getElement]: getElement
    });
    assertEmptyObject(void1);
    assertEmptyObject(void2);
    assertEmptyObject(void3);
    return {
      ...dismissReturn,
      propsFocusContainer: [propsStable, props]
    };
  });

  // ../dist/component-use/use-random-id.js
  var useRandomId = monitored(function useRandomId2({ randomIdParameters: { prefix, otherReferencerProp } }) {
    const id = prefix + V();
    useEnsureStability("useRandomId", prefix, id);
    const referencerElementProps = _(otherReferencerProp == null ? {} : { [otherReferencerProp]: id });
    const sourceElementProps = _({ id });
    useEnsureStability("useRandomIdReferencerElement", otherReferencerProp);
    return {
      propsReferencer: referencerElementProps.current,
      propsSource: sourceElementProps.current,
      randomIdReturn: {
        id
      }
    };
  });

  // ../dist/component-use/use-random-dual-ids.js
  var useRandomDualIds = monitored(function useRandomDualIds2({ randomIdInputParameters, randomIdLabelParameters }) {
    const { randomIdReturn: randomIdInputReturn, propsReferencer: propsLabelAsReferencer, propsSource: propsInputAsSource } = useRandomId({ randomIdParameters: randomIdInputParameters });
    const { randomIdReturn: randomIdLabelReturn, propsReferencer: propsInputAsReferencer, propsSource: propsLabelAsSource } = useRandomId({ randomIdParameters: randomIdLabelParameters });
    return {
      propsLabel: useMergedProps(propsLabelAsReferencer, propsLabelAsSource),
      propsInput: useMergedProps(propsInputAsReferencer, propsInputAsSource),
      randomIdInputReturn,
      randomIdLabelReturn
    };
  });

  // ../node_modules/.pnpm/github.com+mwszekely+async-to-sync@624c049a849d0a02039c1ec14f78617394daabce/node_modules/async-to-sync/dist/index.js
  function isPromise(p4) {
    return p4 instanceof Promise;
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
        }).catch((e3) => {
          onReject?.();
          onHasError?.(true);
          onError?.(e3);
          return e3;
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
  function identityCapture(...t3) {
    return t3;
  }
  var AsyncFunction = async function() {
  }.constructor;
  var useAsync = monitored(function useAsync2(asyncHandler, options) {
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
    const incrementCallCount = T2(() => {
      setRunCount((c4) => c4 + 1);
    }, []);
    const incrementResolveCount = T2(() => {
      setResolveCount((c4) => c4 + 1);
    }, []);
    const incrementRejectCount = T2(() => {
      setRejectCount((c4) => c4 + 1);
    }, []);
    const incrementFinallyCount = T2(() => {
      setSettleCount((c4) => c4 + 1);
    }, []);
    let { throttle, debounce: debounce2, capture: captureUnstable } = options ?? {};
    const captureStable = useStableCallback(captureUnstable ?? identityCapture);
    const asyncHandlerStable = useStableCallback(asyncHandler ?? identity_default);
    const { flushSyncDebounce, syncOutput, cancelSyncDebounce } = F2(() => {
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
    p3(() => {
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

  // ../dist/dom-helpers/use-async-handler.js
  var useAsyncHandler = monitored(function useAsyncHandler2({ asyncHandler, capture: originalCapture, ...restAsyncOptions }) {
    const [currentCapture, setCurrentCapture, getCurrentCapture] = useState(void 0);
    const [hasCapture, setHasCapture] = useState(false);
    const capture = useStableCallback((e3) => {
      const captured = originalCapture(e3);
      setCurrentCapture(captured);
      setHasCapture(true);
      return [captured, e3];
    });
    return {
      getCurrentCapture,
      currentCapture,
      hasCapture,
      ...useAsync(asyncHandler, { capture, ...restAsyncOptions })
    };
  });

  // ../dist/dom-helpers/use-draggable.js
  var useDraggable = monitored(function useDraggable2({ effectAllowed, data, dragImage, dragImageXOffset, dragImageYOffset }) {
    const [dragging, setDragging, getDragging] = useState(false);
    const [lastDropEffect, setLastDropEffect, getLastDropEffect] = useState(null);
    const onDragStart = (e3) => {
      setDragging(true);
      if (e3.dataTransfer) {
        e3.dataTransfer.effectAllowed = effectAllowed ?? "all";
        if (dragImage)
          e3.dataTransfer.setDragImage(dragImage, dragImageXOffset ?? 0, dragImageYOffset ?? 0);
        const entries = Object.entries(data);
        for (const [mimeType, data2] of entries) {
          e3.dataTransfer.setData(mimeType, data2);
        }
      }
    };
    const onDragEnd = (e3) => {
      e3.preventDefault();
      setDragging(false);
      if (e3.dataTransfer) {
        if (e3.dataTransfer.dropEffect != "none") {
          setLastDropEffect(e3.dataTransfer.dropEffect);
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
  });

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
  var useDroppable = monitored(function useDroppable2({ effect }) {
    const [filesForConsideration, setFilesForConsideration] = useState(null);
    const [stringsForConsideration, setStringsForConsideration] = useState(null);
    const [droppedFiles, setDroppedFiles] = useState(null);
    const [droppedStrings, setDroppedStrings] = useState(null);
    const [dropError, setDropError] = useState(void 0);
    const dropPromisesRef = _([]);
    const [currentPromiseIndex, setCurrentPromiseIndex, getCurrentPromiseIndex] = useState(-1);
    const [promiseCount, setPromiseCount, getPromiseCount] = useState(0);
    p3(() => {
      const currentPromiseIndex2 = getCurrentPromiseIndex();
      const promiseCount2 = getPromiseCount();
      if (promiseCount2 > 0) {
        if (currentPromiseIndex2 + 1 < promiseCount2) {
          setCurrentPromiseIndex((i3) => ++i3);
        }
      }
    }, [promiseCount]);
    p3(() => {
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
            setCurrentPromiseIndex((i3) => ++i3);
          }
        });
      }
    }, [currentPromiseIndex]);
    const onDragEnter = useStableCallback((e3) => {
      e3.preventDefault();
      if (e3.dataTransfer) {
        e3.dataTransfer.dropEffect = effect ?? "move";
        const newMimeTypes = /* @__PURE__ */ new Set();
        const newFiles = new Array();
        for (const item of e3.dataTransfer?.items ?? []) {
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
    const onDragLeave = useStableCallback((e3) => {
      e3.preventDefault();
      setFilesForConsideration(null);
      setStringsForConsideration(null);
    });
    const onDragOver = useStableCallback((e3) => {
      e3.preventDefault();
    });
    const onDrop = useStableCallback((e3) => {
      e3.preventDefault();
      setFilesForConsideration(null);
      setStringsForConsideration(null);
      const allPromises = new Array();
      const dropData = {};
      const dropFile = [];
      for (const item of e3.dataTransfer?.items ?? []) {
        const { kind, type } = item;
        if (kind === "string") {
          allPromises.push(new Promise((resolve, _reject) => item.getAsString(resolve)).then((str) => dropData[type] = str));
        } else if (kind === "file") {
          const file = item.getAsFile();
          if (file) {
            allPromises.push(new Promise((resolve, reject) => {
              const reader = new FileReader();
              reader.onload = (_4) => {
                resolve();
                const data = reader.result;
                dropFile.push({ data, name: file.name, type: file.type, size: data.byteLength, lastModified: file.lastModified });
              };
              reader.onerror = (_4) => {
                reject(new DroppableFileError(file.name, reader.error));
              };
              reader.onabort = (_4) => {
                reject(new DroppableFileError(file.name, reader.error));
              };
              reader.readAsArrayBuffer(file);
            }));
            dropFile.push();
          }
        }
      }
      dropPromisesRef.current.push(Promise.all(allPromises).then(() => {
        setPromiseCount((i3) => ++i3);
        setDropError(null);
        return {
          strings: dropData,
          files: dropFile
        };
      }).catch((ex) => {
        debugger;
        setPromiseCount((i3) => ++i3);
        setDropError(ex);
        return null;
      }));
    });
    const propsStable = _({ onDragEnter, onDragLeave, onDragOver, onDrop });
    return {
      propsStable: propsStable.current,
      filesForConsideration,
      stringsForConsideration,
      droppedFiles,
      droppedStrings,
      dropError
    };
  });

  // ../dist/dom-helpers/use-hide-scroll.js
  var useHideScroll = monitored(function useHideScroll2(hideScroll) {
    const [getScrollbarWidth, setScrollbarWidth] = usePassiveState(null);
    const [getScrollbarHeight, setScrollbarHeight] = usePassiveState(null);
    p3(() => {
      if (hideScroll) {
        const originalScrollTop = document.documentElement.scrollTop;
        const originalScrollLeft = document.documentElement.scrollLeft;
        const widthWithScrollBar = document.documentElement.scrollWidth;
        const heightWithScrollBar = document.documentElement.scrollHeight;
        document.documentElement.classList.add("document-scroll-hidden");
        document.documentElement.dataset["scrollHiders"] = (+(document.documentElement.dataset["scrollHiders"] || "0") + 1).toString();
        const widthWithoutScrollBar = document.documentElement.scrollWidth;
        const heightWithoutScrollBar = document.documentElement.scrollHeight;
        let scrollbarWidth = widthWithoutScrollBar - widthWithScrollBar;
        let scrollbarHeight = heightWithoutScrollBar - heightWithScrollBar;
        if (scrollbarWidth > 80)
          scrollbarWidth = 0;
        if (scrollbarHeight > 80)
          scrollbarHeight = 0;
        document.documentElement.style.setProperty("--root-scrollbar-width", `${scrollbarWidth}px`);
        document.documentElement.style.setProperty("--root-scrollbar-height", `${scrollbarHeight}px`);
        document.documentElement.style.setProperty("--root-scrollstop-top", `${originalScrollTop}px`);
        document.documentElement.style.setProperty("--root-scrollstop-left", `${originalScrollLeft}px`);
        setScrollbarWidth(scrollbarWidth);
        setScrollbarHeight(scrollbarHeight);
        return () => {
          document.documentElement.dataset["scrollHiders"] = (+(document.documentElement.dataset["scrollHiders"] || "0") - 1).toString();
          if (document.documentElement.dataset["scrollHiders"] == "0") {
            document.documentElement.removeAttribute("data-scroll-hiders");
            document.documentElement.classList.remove("document-scroll-hidden");
            const originalScrollBehavior = document.documentElement.style.scrollBehavior;
            document.documentElement.style.scrollBehavior = "auto";
            document.documentElement.scrollTo({ top: originalScrollTop, left: originalScrollLeft, behavior: "auto" });
            document.documentElement.style.scrollBehavior = originalScrollBehavior;
          }
        };
      }
    }, [hideScroll]);
    return { getScrollbarWidth, getScrollbarHeight };
  });

  // ../dist/dom-helpers/use-imperative-props.js
  var R10 = `PropNames.PropNames.ImperativePropsReturn`;
  var PropNames_ImperativePropsReturn_hasClass = `${R10}.hasClass`;
  var PropNames_ImperativePropsReturn_setClass = `${R10}.setClass`;
  var PropNames_ImperativePropsReturn_setStyle = `${R10}.setStyle`;
  var PropNames_ImperativePropsReturn_getAttribute = `${R10}.getAttribute`;
  var PropNames_ImperativePropsReturn_setAttribute = `${R10}.setAttribute`;
  var PropNames_ImperativePropsReturn_setChildren = `${R10}.setChildren`;
  var PropNames_ImperativePropsReturn_dangerouslySetInnerHTML = `${R10}.dangerouslySetInnerHTML`;
  var PropNames_ImperativePropsReturn_dangerouslyAppendHTML = `${R10}.dangerouslyAppendHTML`;
  var PropNames_ImperativePropsReturn_setEventHandler = `${R10}.setEventHandler`;
  var templateElement = null;
  function htmlToElement(parent, html) {
    const document2 = parent.ownerDocument;
    templateElement ??= document2.createElement("template");
    templateElement.innerHTML = html.trim();
    return templateElement.content.firstChild;
  }
  var ImperativeElement = x3(k3(ImperativeElementU));
  var useImperativeProps = monitored(function useImperativeProps2(args) {
    const currentImperativeProps = _({ className: /* @__PURE__ */ new Set(), style: {}, children: null, html: null, others: {} });
    const { [PropNames_RefElementReturn_getElement]: getElement } = args;
    const hasClass = T2((cls) => {
      return currentImperativeProps.current.className.has(cls);
    }, []);
    const setClass = T2((cls, enabled) => {
      if (hasClass(cls) == !enabled) {
        getElement()?.classList[enabled ? "add" : "remove"](cls);
        currentImperativeProps.current.className[enabled ? "add" : "delete"](cls);
      }
    }, []);
    const setStyle = T2((prop, value) => {
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
    const setChildren = T2((children) => {
      let e3 = getElement();
      if (e3 && currentImperativeProps.current.children != children) {
        currentImperativeProps.current.children = children;
        currentImperativeProps.current.html = null;
        e3.textContent = children;
      }
    }, []);
    const dangerouslySetInnerHTML = T2((children) => {
      let e3 = getElement();
      if (e3 && currentImperativeProps.current.html != children) {
        currentImperativeProps.current.children = null;
        currentImperativeProps.current.html = children;
        e3.innerHTML = children;
      }
    }, []);
    const dangerouslyAppendHTML = T2((children) => {
      let e3 = getElement();
      if (e3 && children) {
        const newChild = htmlToElement(e3, children);
        console.assert(newChild && newChild instanceof Node);
        if (newChild && newChild instanceof Node) {
          currentImperativeProps.current.children = null;
          currentImperativeProps.current.html ||= "";
          currentImperativeProps.current.html += children;
          e3.appendChild(newChild);
          return newChild;
        }
      }
      return null;
    }, []);
    const getAttribute = T2((prop) => {
      return currentImperativeProps.current.others[prop];
    }, []);
    const setAttribute = T2((prop, value) => {
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
    const setEventHandler = T2((type, handler, options) => {
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
      imperativePropsReturn: _({
        [PropNames_ImperativePropsReturn_hasClass]: hasClass,
        [PropNames_ImperativePropsReturn_setClass]: setClass,
        [PropNames_ImperativePropsReturn_setStyle]: setStyle,
        [PropNames_ImperativePropsReturn_getAttribute]: getAttribute,
        [PropNames_ImperativePropsReturn_setAttribute]: setAttribute,
        [PropNames_ImperativePropsReturn_setEventHandler]: setEventHandler,
        [PropNames_ImperativePropsReturn_setChildren]: setChildren,
        [PropNames_ImperativePropsReturn_dangerouslySetInnerHTML]: dangerouslySetInnerHTML,
        [PropNames_ImperativePropsReturn_dangerouslyAppendHTML]: dangerouslyAppendHTML
      }).current,
      props: [
        { className: [...currentImperativeProps.current.className].join(" "), style: currentImperativeProps.current.style },
        currentImperativeProps.current.html ? { dangerouslySetInnerHTML: { __html: currentImperativeProps.current.html } } : {},
        { children: currentImperativeProps.current.children },
        currentImperativeProps.current.others
      ]
    };
  });
  function ImperativeElementU({ tag: Tag, handle, ...props }, ref) {
    const { props: propsStable, ...ret } = useRefElement({});
    const { props: imperativeProps, imperativePropsReturn: imperativeHandle } = useImperativeProps(ret);
    A2(handle, () => imperativeHandle);
    return y(Tag, useMergedProps(propsStable, ...imperativeProps, props, { ref }));
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
    return `${prefix ?? "id-"}${random64Bits().map((n2) => base64(n2)).join("")}`;
  }

  // ../dist/dom-helpers/use-portal-children.js
  var usePortalChildren = monitored(function usePortalChildren2({ target }) {
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
    const element = F2(() => {
      return target == null ? null : typeof target == "string" ? document.getElementById(target) : target;
    }, [target]);
    const children = !element ? null : z3(y(PortalChildren, { setPushChild, setUpdateChild, setRemoveChild }), element);
    return {
      children,
      pushChild: pushChildStable,
      updateChild: updateChildStable,
      removeChild: removeChildStable,
      portalElement: element
    };
  });
  function PortalChildren({ setPushChild, setUpdateChild, setRemoveChild }) {
    const [children, setChildren, getChildren] = useState([]);
    const pushChild = T2((child) => {
      const randomKey = generateRandomId();
      let index = getChildren().length;
      setChildren((prev) => [...prev, F(child, { key: randomKey, index })]);
      return index;
    }, []);
    const updateChild = T2((index, child) => {
      const key = getChildren()[index]?.key;
      console.assert(!!key);
      if (key) {
        setChildren((prev) => {
          let newChildren = prev.slice();
          newChildren.splice(index, 1, F(child, { key, index }));
          return newChildren;
        });
        return index;
      }
    }, []);
    const removeChild = T2((index) => {
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
    y3(() => {
      setPushChild((_4) => pushChild);
    }, [pushChild]);
    y3(() => {
      setUpdateChild((_4) => updateChild);
    }, [updateChild]);
    y3(() => {
      setRemoveChild((_4) => removeChild);
    }, [removeChild]);
    return y(k, {}, children);
  }

  // ../dist/observers/use-element-size.js
  var P24 = `PropNames.ElementSizeParameters`;
  var R11 = `PropNames.ElementSizeReturn`;
  var PropNames_ElementSizeParameters_onSizeChange = `${P24}.onSizeChange`;
  var PropNames_ElementSizeParameters_getObserveBox = `${P24}.getObserveBox`;
  var PropNames_ElementSizeReturn_getSize = `${R11}.getSize`;
  var useElementSize = monitored(function useElementSize2({ [PropNames_ElementSizeParameters_getObserveBox]: getObserveBox, [PropNames_ElementSizeParameters_onSizeChange]: onSizeChange, [PropNames_RefElementReturn_getElement]: getElement }) {
    useEnsureStability("useElementSize", getObserveBox, onSizeChange);
    const currentObserveBox = _(void 0);
    const [getSize, setSize] = usePassiveState(onSizeChange, returnNull, runImmediately);
    const needANewObserver = T2((element, observeBox) => {
      if (element) {
        const document2 = getDocument(element);
        const window2 = document2.defaultView;
        const handleUpdate = (entries) => {
          if (element.isConnected) {
            const { clientWidth, scrollWidth, offsetWidth, clientHeight, scrollHeight, offsetHeight, clientLeft, scrollLeft, offsetLeft, clientTop, scrollTop, offsetTop } = element;
            setSize({ clientWidth, scrollWidth, offsetWidth, clientHeight, scrollHeight, offsetHeight, clientLeft, scrollLeft, offsetLeft, clientTop, scrollTop, offsetTop }, entries);
          }
        };
        if (window2 && "ResizeObserver" in window2) {
          const observer = new ResizeObserver((entries) => {
            handleUpdate(entries);
          });
          observer.observe(element, { box: observeBox });
          return () => observer.disconnect();
        } else {
          document2.addEventListener("resize", handleUpdate, { passive: true });
          return () => document2.removeEventListener("resize", handleUpdate);
        }
      }
    }, []);
    p3(() => {
      if (getObserveBox) {
        if (currentObserveBox.current !== getObserveBox())
          needANewObserver(getElement(), getObserveBox());
      }
    });
    return {
      [PropNames_RefElementParameters_onElementChange]: T2((e3, p4, r5) => {
        needANewObserver(e3, getObserveBox?.());
      }, []),
      [PropNames_ElementSizeReturn_getSize]: getSize
    };
  });

  // ../dist/observers/use-has-last-focus.js
  var P25 = `PropNames.HasLastFocusParameters`;
  var R18 = `PropNames.HasLastFocusReturnType`;
  var PropNames_HasLastFocusParameters_onLastFocusedChanged = `${P25}.onLastFocusedChanged`;
  var PropNames_HasLastFocusParameters_onLastFocusedInnerChanged = `${P25}.onLastFocusedInnerChanged`;
  var PropNames_HasLastFocusReturn_getLastFocused = `${R18}.getLastFocused`;
  var PropNames_HasLastFocusReturn_getLastFocusedInner = `${R18}.getLastFocusedInner`;
  var useHasLastFocus = monitored(function useHasLastFocus2({ [PropNames_HasLastFocusParameters_onLastFocusedChanged]: onLastFocusedChanged, [PropNames_HasLastFocusParameters_onLastFocusedInnerChanged]: onLastFocusedInnerChanged, [PropNames_RefElementReturn_getElement]: getElement, ...void1 }) {
    useEnsureStability("useHasFocus", onLastFocusedChanged, onLastFocusedInnerChanged);
    assertEmptyObject(void1);
    const [getLastFocused, setLastFocused] = usePassiveState(onLastFocusedChanged, returnFalse, runImmediately);
    const [getLastFocusedInner, setLastFocusedInner] = usePassiveState(onLastFocusedInnerChanged, returnFalse, runImmediately);
    p3(() => {
      return () => {
        setLastFocused(false, void 0);
        setLastFocusedInner(false, void 0);
      };
    }, []);
    return {
      [PropNames_ActiveElementParameters_onLastActiveElementChange]: useStableCallback((lastActiveElement, _prevLastActiveElement, e3) => {
        const selfElement = getElement();
        const focused = selfElement != null && selfElement == lastActiveElement;
        const focusedInner = !!selfElement?.contains(lastActiveElement);
        setLastFocused(focused, e3);
        setLastFocusedInner(focusedInner, e3);
      }, []),
      [PropNames_HasLastFocusReturn_getLastFocused]: getLastFocused,
      [PropNames_HasLastFocusReturn_getLastFocusedInner]: getLastFocusedInner
    };
  });

  // ../dist/observers/use-logical-direction.js
  function capitalize(str) {
    return str[0].toUpperCase() + str.substring(1);
  }
  var useLogicalDirection = monitored(function useLogicalDirection2({}) {
    const getLogicalDirectionInfo = T2((computedStyles) => {
      if (computedStyles) {
        const w4 = computedStyles.writingMode;
        let d4 = computedStyles.direction;
        const t3 = computedStyles.textOrientation;
        if (t3 == "upright")
          d4 = "ltr";
        return { ...WritingModes[w4 || "horizontal-tb"][d4 || "ltr"] };
      }
      return null;
    }, []);
    const convertToLogicalOrientation = T2((computedStyles, elementOrientation, direction) => {
      direction ??= getLogicalDirectionInfo(computedStyles);
      if (direction?.inlineOrientation === elementOrientation)
        return "inline";
      return "block";
    }, []);
    const convertToPhysicalSide = T2((computedStyles, side, direction) => {
      direction ??= getLogicalDirectionInfo(computedStyles);
      switch (side) {
        case "block-start":
          return M2[(direction?.blockDirection ?? "ttb")[0]];
        case "block-end":
          return M2[(direction?.blockDirection ?? "ttb")[2]];
        case "inline-start":
          return M2[(direction?.inlineDirection ?? "ltr")[0]];
        case "inline-end":
          return M2[(direction?.inlineDirection ?? "ltr")[2]];
      }
    }, []);
    const convertToLogicalSide = T2((computedStyles, side, direction) => {
      direction ??= getLogicalDirectionInfo(computedStyles);
      if (direction?.inlineOrientation === "vertical") {
        switch (side) {
          case "top":
            return direction.inlineDirection === "ttb" ? "inline-start" : "inline-end";
          case "bottom":
            return direction.inlineDirection === "btt" ? "inline-start" : "inline-end";
          case "left":
            return direction.blockDirection === "ltr" ? "block-start" : "block-end";
          case "right":
            return direction.blockDirection === "rtl" ? "block-start" : "block-end";
        }
      } else if (direction?.inlineOrientation === "horizontal") {
        switch (side) {
          case "top":
            return direction.blockDirection === "ttb" ? "block-start" : "block-end";
          case "bottom":
            return direction.blockDirection === "btt" ? "block-start" : "block-end";
          case "left":
            return direction.inlineDirection === "ltr" ? "inline-start" : "inline-end";
          case "right":
            return direction.inlineDirection === "rtl" ? "inline-start" : "inline-end";
        }
      }
      debugger;
      console.assert(false);
      return "inline-start";
    }, []);
    const convertToPhysicalOrientation = T2((computedStyles, elementOrientation, direction) => {
      direction ??= getLogicalDirectionInfo(computedStyles);
      if (elementOrientation == "inline") {
        if (direction?.inlineOrientation == "horizontal")
          return "horizontal";
        return "vertical";
      } else {
        if (direction?.blockOrientation == "vertical")
          return "vertical";
        return "horizontal";
      }
    }, []);
    const convertElementSize = T2((computedStyles, elementSize, direction) => {
      direction ??= getLogicalDirectionInfo(computedStyles);
      if (direction) {
        const { inlineSize, blockSize, inlineDirection, blockDirection } = direction;
        const clientInlineSize = elementSize[`client${capitalize(inlineSize)}`];
        const clientBlockSize = elementSize[`client${capitalize(blockSize)}`];
        const offsetInlineSize = elementSize[`offset${capitalize(inlineSize)}`];
        const offsetBlockSize = elementSize[`offset${capitalize(blockSize)}`];
        const scrollInlineSize = elementSize[`scroll${capitalize(inlineSize)}`];
        const scrollBlockSize = elementSize[`scroll${capitalize(blockSize)}`];
        const f1 = getPhysicalLeftTop(inlineDirection);
        const f22 = getPhysicalRightBottom(inlineDirection);
        const f32 = getPhysicalLeftTop(blockDirection);
        const f4 = getPhysicalRightBottom(blockDirection);
        const clientInlineInset = elementSize[`client${capitalize(f1)}`] + (!f22 ? 0 : elementSize[`client${capitalize(f22)}`]);
        const scrollInlineInset = elementSize[`scroll${capitalize(f1)}`] + (!f22 ? 0 : elementSize[`scroll${capitalize(f22)}`]);
        const offsetInlineInset = elementSize[`offset${capitalize(f1)}`] == void 0 ? void 0 : elementSize[`offset${capitalize(f1)}`] + (!f22 ? 0 : elementSize[`offset${capitalize(f22)}`]);
        const clientBlockInset = elementSize[`client${capitalize(f32)}`] + (!f4 ? 0 : elementSize[`client${capitalize(f4)}`]);
        const scrollBlockInset = elementSize[`scroll${capitalize(f32)}`] + (!f4 ? 0 : elementSize[`scroll${capitalize(f4)}`]);
        const offsetBlockInset = elementSize[`offset${capitalize(f32)}`] == void 0 ? void 0 : elementSize[`offset${capitalize(f32)}`] + (!f4 ? 0 : elementSize[`offset${capitalize(f4)}`]);
        return {
          clientInlineSize,
          scrollInlineSize,
          offsetInlineSize,
          clientBlockSize,
          scrollBlockSize,
          offsetBlockSize,
          clientInlineInset,
          scrollInlineInset,
          offsetInlineInset,
          clientBlockInset,
          scrollBlockInset,
          offsetBlockInset
        };
      }
      return null;
    }, []);
    return {
      logicalDirectionReturn: {
        getLogicalDirectionInfo,
        convertToLogicalSize: convertElementSize,
        convertToLogicalOrientation,
        convertToPhysicalOrientation,
        convertToLogicalSide,
        convertToPhysicalSide
      }
    };
  });
  function getPhysicalLeftTop(dir) {
    if (dir === "ltr" || dir == "rtl")
      return "left";
    return "top";
  }
  function getPhysicalRightBottom(dir) {
    if (dir === "rtl")
      return "width";
    if (dir === "btt")
      return "height";
    return null;
  }
  var M2 = {
    t: "top",
    b: "bottom",
    l: "left",
    r: "right"
  };
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
  var HorizontalTb = {
    ltr: HorizontalTbLtr,
    rtl: HorizontalTbRtl
  };
  var VerticalRl = {
    ltr: VerticalRlLtr,
    rtl: VerticalRlRtl
  };
  var VerticalLr = {
    ltr: VerticalLrLtr,
    rtl: VerticalLrRtl
  };
  var SidewaysRl = {
    ltr: SidewaysRlLtr,
    rtl: SidewaysRlRtl
  };
  var SidewaysLr = {
    ltr: SidewaysLtLtr,
    rtl: SidewaysLtRtl
  };
  var WritingModes = {
    "horizontal-tb": HorizontalTb,
    "vertical-lr": VerticalLr,
    "vertical-rl": VerticalRl,
    "sideways-lr": SidewaysLr,
    "sideways-rl": SidewaysRl
  };

  // ../dist/observers/use-media-query.js
  var useMediaQuery = monitored(function useMediaQuery2(query, defaultGuess) {
    const queryList = _();
    const [matches2, setMatches, getMatches] = useState(defaultGuess ?? null);
    console.assert(!query || query.startsWith("("));
    y3(() => {
      if (!query)
        return;
      queryList.current = matchMedia(query);
      setMatches(queryList.current.matches || false);
      const handler = (e3) => {
        setMatches(e3.matches);
      };
      queryList.current.addEventListener("change", handler, { passive: true });
      return () => queryList.current?.removeEventListener("change", handler);
    }, [query]);
    return {
      matches: matches2,
      getMatches
    };
  });

  // ../dist/observers/use-mutation-observer.js
  var P26 = `PropNames.MutationObserverParameters`;
  var PropNames_MutationObserverParameters_onChildList = `${P26}.onChildList`;
  var PropNames_MutationObserverParameters_onAttributes = `${P26}.onAttributes`;
  var PropNames_MutationObserverParameters_onCharacterData = `${P26}.onCharacterData`;
  var PropNames_MutationObserverParameters_subtree = `${P26}.subtree`;
  var PropNames_MutationObserverParameters_characterDataOldValue = `${P26}.characterDataOldValue`;
  var PropNames_MutationObserverParameters_attributeOldValue = `${P26}.attributeOldValue`;
  var PropNames_MutationObserverParameters_attributeFilter = `${P26}.attributeFilter`;
  var useMutationObserver = monitored(function useMutationObserver2({ [PropNames_RefElementReturn_getElement]: getElement, [PropNames_MutationObserverParameters_attributeFilter]: attributeFilter, [PropNames_MutationObserverParameters_subtree]: subtree, [PropNames_MutationObserverParameters_onChildList]: onChildList, [PropNames_MutationObserverParameters_characterDataOldValue]: characterDataOldValue, [PropNames_MutationObserverParameters_onCharacterData]: onCharacterData, [PropNames_MutationObserverParameters_onAttributes]: onAttributes, [PropNames_MutationObserverParameters_attributeOldValue]: attributeOldValue }) {
    if (typeof attributeFilter === "string")
      attributeFilter = [attributeFilter];
    const attributeKey = attributeFilter?.join(";");
    const attributes = !!onAttributes;
    const characterData = !!onCharacterData;
    const childList = !!onChildList;
    const stableOnChildList = useStableCallback(onChildList ?? (() => {
    }));
    const stableOnCharacterData = useStableCallback(onCharacterData ?? (() => {
    }));
    const stableOnAttributes = useStableCallback(onAttributes ?? (() => {
    }));
    const [_getMo, setMo] = usePassiveState(useStableCallback((observer) => {
      const element = getElement();
      if (element && observer && (!!attributeKey || !!characterData || !!childList)) {
        observer.observe(element, {
          attributeFilter,
          attributeOldValue,
          attributes,
          characterData,
          characterDataOldValue,
          childList,
          subtree
        });
        return () => observer.disconnect();
      }
    }), returnNull, runImmediately);
    const onNeedMutationObserverReset = T2((element) => {
      if (element) {
        queueMicrotask(() => {
          setMo(new MutationObserver((a4) => {
            for (const mutation of a4) {
              switch (mutation.type) {
                case "childList":
                  stableOnChildList(mutation);
                  break;
                case "attributes":
                  stableOnAttributes(mutation);
                  break;
                case "characterData":
                  stableOnCharacterData(mutation);
                  break;
              }
            }
          }));
        });
      }
    }, []);
    p3(() => {
      onNeedMutationObserverReset(getElement());
    }, [attributeKey, attributeOldValue, characterDataOldValue, subtree]);
    return {
      [PropNames_RefElementParameters_onElementChange]: useStableCallback((e3, p4, r5) => {
        onNeedMutationObserverReset(e3);
      })
    };
  });

  // ../dist/observers/use-url.js
  var useUrl = monitored(function useUrl2(onUrlChange) {
    const [getUrl, setUrl] = usePassiveState(useStableCallback(onUrlChange), T2(() => window.location.toString(), []));
    useGlobalHandler(window, "hashchange", (e3) => {
      setUrl(window.location.toString(), e3);
    });
    useGlobalHandler(window, "popstate", (e3) => {
      console.assert(window.location.toString() === document.location.toString());
      setUrl(window.location.toString(), e3);
    });
    return [getUrl, T2((newUrlOrSetter, action) => {
      if (typeof newUrlOrSetter == "function") {
        setUrl((prev) => {
          let newUrl = newUrlOrSetter(prev);
          history[`${action ?? "replace"}State`]({}, document.title, newUrl);
          return newUrl;
        }, void 0);
      } else {
        history[`${action ?? "replace"}State`]({}, document.title, newUrlOrSetter);
        setUrl(newUrlOrSetter, void 0);
      }
    }, [])];
  });

  // ../dist/preact-extensions/use-async-effect.js
  var useAsyncEffect = monitored(function useAsyncEffect2(effect, inputs, options) {
    const { syncHandler, ...rest } = useAsync(effect, { ...options, capture: null, debounce: null, throttle: null });
    p3(syncHandler, inputs);
    return rest;
  });

  // ../dist/preact-extensions/use-effect-debug.js
  var useEffectDebug = monitored(function useEffectDebug2(effect, inputs, impl = p3) {
    const prevInputs = _(void 0);
    const effect2 = () => {
      const changes = [];
      if (inputs && prevInputs.current) {
        for (let i3 = 0; i3 < Math.max(prevInputs.current.length, inputs.length); ++i3) {
          if (prevInputs.current[i3] != inputs[i3])
            changes[i3] = { from: prevInputs.current[i3], to: inputs[i3] };
        }
      }
      const ret = effect(prevInputs.current, changes);
      prevInputs.current = inputs;
      return ret;
    };
    impl(effect2, inputs);
  });

  // ../dist/preact-extensions/use-layout-effect-debug.js
  var useLayoutEffectDebug = monitored(function useLayoutEffectDebug2(effect, inputs) {
    return useEffectDebug(effect, inputs, y3);
  });

  // ../dist/preact-extensions/use-persistent-state.js
  function getFromLocalStorage(key, converter = JSON.parse, storage = localStorage) {
    try {
      const item = storage.getItem(key);
      if (item == null)
        return null;
      return converter(item);
    } catch (e3) {
      debugger;
      return null;
    }
  }
  function storeToLocalStorage(key, value, converter = JSON.stringify, storage = localStorage) {
    try {
      if (value == null)
        storage.removeItem(key);
      else
        storage.setItem(key, converter(value));
    } catch (e3) {
      debugger;
    }
  }
  var usePersistentState = monitored(function usePersistentState2(key, initialValue, fromString = JSON.parse, toString = JSON.stringify, storage = localStorage) {
    const [localCopy, setLocalCopy, getLocalCopy] = useState(() => (key ? getFromLocalStorage(key, fromString, storage) : null) ?? initialValue);
    const getInitialValue = useStableGetter(initialValue);
    y3(() => {
      if (key) {
        const newCopy = getFromLocalStorage(key, fromString, storage);
        setLocalCopy(newCopy ?? getInitialValue());
      }
    }, [key, storage]);
    useGlobalHandler(window, "storage", useStableCallback((e3) => {
      if (key && e3.key === key && e3.storageArea == storage) {
        const newValue = e3.newValue;
        if (newValue != null)
          setLocalCopy(fromString(newValue));
        else
          setLocalCopy(initialValue);
      }
    }));
    const setValueWrapper = useStableCallback((valueOrSetter) => {
      const value = typeof valueOrSetter === "function" ? valueOrSetter(getLocalCopy()) : valueOrSetter;
      setLocalCopy(valueOrSetter);
      if (key) {
        storeToLocalStorage(key, value, toString, storage);
        if (typeof value == "object" && value instanceof Date) {
          console.assert(fromString != JSON.parse, "Dates (and other non-JSON types) must be given custom fromString and toString functions.");
        }
      }
    });
    const getValue = useStableCallback(() => {
      const trueValue = !key ? void 0 : getFromLocalStorage(key, fromString, storage);
      return trueValue ?? localCopy;
    });
    return [localCopy, setValueWrapper, getValue];
  });

  // ../node_modules/.pnpm/preact@10.17.1/node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js
  var _3 = 0;
  function o4(o5, e3, n2, t3, f4, l4) {
    var s4, u4, a4 = {};
    for (u4 in e3)
      "ref" == u4 ? s4 = e3[u4] : a4[u4] = e3[u4];
    var i3 = { type: o5, props: a4, key: n2, ref: s4, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --_3, __source: f4, __self: l4 };
    if ("function" == typeof o5 && (s4 = o5.defaultProps))
      for (u4 in s4)
        void 0 === a4[u4] && (a4[u4] = s4[u4]);
    return l.vnode && l.vnode(i3), i3;
  }

  // ../dist/timing/use-animation-frame.js
  var SharedAnimationFrameContext = G(null);
  var useAnimationFrame = monitored(function useAnimationFrame2({ callback }) {
    const stableCallback = useStableCallback(callback ?? noop_default);
    const hasCallback = callback != null;
    const sharedAnimationFrameContext = q2(SharedAnimationFrameContext);
    p3(() => {
      if (sharedAnimationFrameContext) {
        if (hasCallback) {
          sharedAnimationFrameContext.addCallback(stableCallback);
        } else {
          sharedAnimationFrameContext.removeCallback(stableCallback);
        }
      } else {
        if (hasCallback) {
          const rafCallback = (ms) => {
            handle = requestAnimationFrame(rafCallback);
            stableCallback(ms);
          };
          let handle = requestAnimationFrame(rafCallback);
          return () => cancelAnimationFrame(handle);
        }
      }
    }, [sharedAnimationFrameContext, hasCallback]);
  });

  // ../dist/timing/use-interval.js
  var useInterval = monitored(function useInterval2({ interval, callback }) {
    const stableCallback = useStableCallback(callback);
    const getInterval = useStableGetter(interval);
    p3(() => {
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
  });

  // demos/use-roving-tab-index.tsx
  var RandomWords = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.".split(" ");
  var SingleSelectionModeContext = G("focus");
  var MultiSelectionModeContext = G("activation");
  var UntabbableContext = G(false);
  var ListNavigationSingleSelectionChildContext = G(null);
  var ListChildContext = G(null);
  var WeirdContext = G(null);
  var DemoUseRovingTabIndex = x3(function DemoUseRovingTabIndex2() {
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
    const onSelectionChange = (e3) => {
      setMultiSelectPercent(e3[EventDetail].selectedPercent);
    };
    const r5 = useCompleteListNavigationDeclarative({
      [PropNames_RovingTabIndexParameters_onTabbableIndexChange]: null,
      [PropNames_RovingTabIndexParameters_untabbable]: untabbable,
      [PropNames_RovingTabIndexParameters_focusSelfParent]: focus,
      [PropNames_SingleSelectionParameters_onSingleSelectedIndexChange]: useStableCallback((e3) => {
        setSingleSelectedIndex(e3[EventDetail].selectedIndex);
      }, []),
      [PropNames_SingleSelectionParameters_singleSelectedIndex]: singleSelectedIndex,
      [PropNames_TypeaheadNavigationParameters_collator]: null,
      [PropNames_TypeaheadNavigationParameters_noTypeahead]: false,
      [PropNames_TypeaheadNavigationParameters_typeaheadTimeout]: 1e3,
      [PropNames_TypeaheadNavigationParameters_onNavigateTypeahead]: null,
      [PropNames_LinearNavigationParameters_disableHomeEndKeys]: false,
      [PropNames_LinearNavigationParameters_arrowKeyDirection]: "vertical",
      [PropNames_LinearNavigationParameters_navigatePastEnd]: "wrap",
      [PropNames_LinearNavigationParameters_navigatePastStart]: "wrap",
      [PropNames_LinearNavigationParameters_pageNavigationSize]: 0.1,
      [PropNames_LinearNavigationParameters_onNavigateLinear]: null,
      [PropNames_PaginatedParameters_paginationMin]: min,
      [PropNames_PaginatedParameters_paginationMax]: max,
      [PropNames_SingleSelectionParameters_singleSelectionAriaPropName]: "aria-selected",
      [PropNames_SingleSelectionParameters_singleSelectionMode]: singleSelectionMode,
      [PropNames_MultiSelectionParameters_multiSelectionAriaPropName]: "aria-checked",
      [PropNames_MultiSelectionParameters_onSelectionChange]: onSelectionChange,
      [PropNames_MultiSelectionParameters_multiSelectionMode]: multiSelectionMode,
      [PropNames_RovingTabIndexParameters_initiallyTabbedIndex]: 0,
      [PropNames_StaggeredParameters_staggered]: staggered
    });
    const {
      props,
      contextChildren,
      contextProcessing,
      [PropNames_RovingTabIndexReturn_setTabbableIndex]: setTabbableIndex,
      [PropNames_ManagedChildrenReturn_getChildren]: getChildren,
      [PropNames_TypeaheadNavigationReturn_typeaheadStatus]: typeaheadStatus,
      [PropNames_RearrangeableReturn_shuffle]: shuffle2,
      [PropNames_RearrangeableReturn_reverse]: reverse,
      [PropNames_RearrangeableReturn_sort]: _sort
    } = r5;
    const [staggering, setStaggering] = useState(false);
    return /* @__PURE__ */ o4("div", { className: "demo", children: [
      /* @__PURE__ */ o4("h2", { children: "Keyboard & List Navigation" }),
      /* @__PURE__ */ o4("h3", { children: /* @__PURE__ */ o4("code", { children: "useCompleteListNavigation" }) }),
      /* @__PURE__ */ o4("p", { children: "This hook accomplishes a few things:" }),
      /* @__PURE__ */ o4("ul", { children: [
        /* @__PURE__ */ o4("li", { children: [
          "Turns a group of widgets into one singular composite widget with only ",
          /* @__PURE__ */ o4("strong", { children: "a single tab stop" }),
          ' shared between them (a "roving" tab stop, because it wanders back and forth).'
        ] }),
        /* @__PURE__ */ o4("li", { children: [
          "Navigation within this composite widget is done via:",
          /* @__PURE__ */ o4("ul", { children: [
            /* @__PURE__ */ o4("li", { children: "Arrow keys (up/down or left/right depending in the orientation you specify)" }),
            /* @__PURE__ */ o4("li", { children: "Page Up/Down to jump by a larger amount (either a fixed number or some percentage of the total number of items, as you specify)" }),
            /* @__PURE__ */ o4("li", { children: "Home/End to jump to the first or last item" })
          ] })
        ] }),
        /* @__PURE__ */ o4("li", { children: 'Items can be marked as "hidden", in which case they are skipped over when navigating, no matter the method. E.G. if Home is pressed but the first item is hidden, the second item is focused instead.' }),
        /* @__PURE__ */ o4("li", { children: 'Items can be marked as "disabled" to prevent selection (with or without also marking them as "hidden", though "hidden" implies "disabled").' }),
        /* @__PURE__ */ o4("li", { children: "Children can be reordered arbitrarily, including sorting, shuffling, etc. while ensuring coherent navigation regardless." }),
        /* @__PURE__ */ o4("li", { children: [
          "The parent's selected index is ",
          /* @__PURE__ */ o4("strong", { children: "uncontrolled" }),
          " and so it does not re-render itself when the selected index changes (you can easily make it controlled, of course, at the cost of 1 additional render. See ",
          /* @__PURE__ */ o4("code", { children: "useSingleSelectionDeclarative" }),
          " for a shortcut to do exactly that)"
        ] }),
        /* @__PURE__ */ o4("li", { children: "Changing which child is focused or selected only re-renders a maximum of 2 children each time." }),
        /* @__PURE__ */ o4("li", { children: [
          "Lists can be nested, and there is no strict requirement on DOM structure (except for sorting/rearranging children, if you use that).",
          /* @__PURE__ */ o4("ul", { children: /* @__PURE__ */ o4("li", { children: [
            "If you don't need sorting/rearranging this DOM requirement is ",
            /* @__PURE__ */ o4("strong", { children: "optional" }),
            "; rearranging requires all children be in one contiguous array of VNodes so that their ",
            /* @__PURE__ */ o4("code", { children: "key" }),
            " props can be manipulated."
          ] }) })
        ] })
      ] }),
      /* @__PURE__ */ o4("p", { children: "The biggest restriction of this method is that every child needs a 0-based numeric index." }),
      /* @__PURE__ */ o4("label", { children: [
        "# of items",
        /* @__PURE__ */ o4("input", { type: "number", value: count, min: 0, onInput: (e3) => {
          e3.preventDefault();
          setCount(e3.currentTarget.valueAsNumber);
        } })
      ] }),
      /* @__PURE__ */ o4("button", { onClick: () => shuffle2(), children: "Shuffle" }),
      /* @__PURE__ */ o4("button", { onClick: () => {
        debugger;
        reverse();
      }, children: "Reverse" }),
      /* @__PURE__ */ o4("label", { children: [
        "Imperatively set the tabbable index to: ",
        /* @__PURE__ */ o4("input", { type: "number", onInput: (e3) => {
          e3.preventDefault();
          setTabbableIndex(e3.currentTarget.valueAsNumber, e3, false);
        } })
      ] }),
      /* @__PURE__ */ o4("label", { children: [
        "Imperatively set the selected index to: ",
        /* @__PURE__ */ o4("input", { type: "number", onInput: (e3) => {
          e3.preventDefault();
          setSingleSelectedIndex(e3.currentTarget.valueAsNumber);
        } }),
        " (currently ",
        singleSelectedIndex,
        ")"
      ] }),
      /* @__PURE__ */ o4("label", { children: [
        "Pagination window starts at: ",
        /* @__PURE__ */ o4("input", { type: "number", value: min ?? void 0, min: 0, max: max ?? void 0, onInput: (e3) => {
          e3.preventDefault();
          setMin(e3.currentTarget.valueAsNumber);
        } })
      ] }),
      /* @__PURE__ */ o4("label", { children: [
        "Pagination window ends at: ",
        /* @__PURE__ */ o4("input", { type: "number", value: max ?? void 0, min: min ?? void 0, max: count, onInput: (e3) => {
          e3.preventDefault();
          setMax(e3.currentTarget.valueAsNumber);
        } })
      ] }),
      /* @__PURE__ */ o4("label", { children: [
        "Stagger delay: ",
        /* @__PURE__ */ o4("input", { type: "checkbox", checked: staggered, onInput: (e3) => {
          e3.preventDefault();
          setStaggered(e3.currentTarget.checked);
        } })
      ] }),
      /* @__PURE__ */ o4("label", { children: [
        "Single-Selection mode:",
        /* @__PURE__ */ o4("label", { children: [
          /* @__PURE__ */ o4("input", { name: "rti-demo-single-selection-mode", type: "radio", checked: singleSelectionMode == "disabled", onInput: (e3) => {
            e3.preventDefault();
            setSingleSelectionMode("disabled");
          } }),
          " Off"
        ] }),
        /* @__PURE__ */ o4("label", { children: [
          /* @__PURE__ */ o4("input", { name: "rti-demo-single-selection-mode", type: "radio", checked: singleSelectionMode == "focus", onInput: (e3) => {
            e3.preventDefault();
            setSingleSelectionMode("focus");
          } }),
          " On focus"
        ] }),
        /* @__PURE__ */ o4("label", { children: [
          /* @__PURE__ */ o4("input", { name: "rti-demo-single-selection-mode", type: "radio", checked: singleSelectionMode == "activation", onInput: (e3) => {
            e3.preventDefault();
            setSingleSelectionMode("activation");
          } }),
          " On activation (click, tap, Enter, Space, etc.)"
        ] })
      ] }),
      /* @__PURE__ */ o4("label", { children: [
        "Multi-Selection mode:",
        /* @__PURE__ */ o4("label", { children: [
          /* @__PURE__ */ o4("input", { name: "rti-demo-multi-selection-mode", type: "radio", checked: multiSelectionMode == "disabled", onInput: (e3) => {
            e3.preventDefault();
            setMultiSelectionMode("disabled");
          } }),
          " Off"
        ] }),
        /* @__PURE__ */ o4("label", { children: [
          /* @__PURE__ */ o4("input", { name: "rti-demo-multi-selection-mode", type: "radio", checked: multiSelectionMode == "focus", onInput: (e3) => {
            e3.preventDefault();
            setMultiSelectionMode("focus");
          } }),
          " On focus"
        ] }),
        /* @__PURE__ */ o4("label", { children: [
          /* @__PURE__ */ o4("input", { name: "rti-demo-multi-selection-mode", type: "radio", checked: multiSelectionMode == "activation", onInput: (e3) => {
            e3.preventDefault();
            setMultiSelectionMode("activation");
          } }),
          " On activation (click, tap, Enter, Space, etc.)"
        ] })
      ] }),
      /* @__PURE__ */ o4("div", { children: [
        "Staggering status: ",
        staggered ? staggering ? "Staggering..." : "Done staggering" : "Not staggered"
      ] }),
      /* @__PURE__ */ o4("div", { children: [
        "Typeahead status: ",
        typeaheadStatus
      ] }),
      /* @__PURE__ */ o4("div", { children: [
        "Multi-select: ",
        Math.round(multiSelectPercent * 100 * 10) / 10,
        "%"
      ] }),
      /* @__PURE__ */ o4(UntabbableContext.Provider, { value: untabbable, children: /* @__PURE__ */ o4(SingleSelectionModeContext.Provider, { value: singleSelectionMode, children: /* @__PURE__ */ o4(MultiSelectionModeContext.Provider, { value: multiSelectionMode, children: /* @__PURE__ */ o4(ListNavigationSingleSelectionChildContext.Provider, { value: contextChildren, children: /* @__PURE__ */ o4(WeirdContext.Provider, { value: contextProcessing, children: /* @__PURE__ */ o4("ol", { start: 0, ...useMergedProps(...props), children: /* @__PURE__ */ o4(DemoUseRovingTabIndexChildren, { max, min, staggered, count, setStaggering }) }) }) }) }) }) })
    ] });
  });
  var DemoUseRovingTabIndexChildren = x3(function DemoUseRovingTabIndexChildren2({ count, max, min, staggered, setStaggering }) {
    const {
      context,
      [PropNames_PaginatedReturn_refreshPagination]: refreshPagination,
      [PropNames_RearrangeableReturn_children]: children,
      [PropNames_RearrangeableReturn_indexDemangler]: indexDemangler,
      [PropNames_RearrangeableReturn_indexMangler]: indexMangler,
      [PropNames_RearrangeableReturn_rearrange]: rearrange,
      [PropNames_RearrangeableReturn_reverse]: reverse,
      [PropNames_RearrangeableReturn_shuffle]: shuffle2,
      [PropNames_RearrangeableReturn_sort]: sort,
      [PropNames_StaggeredReturn_stillStaggering]: stillStaggering
    } = useCompleteListNavigationChildren({
      [PropNames_PaginatedParameters_paginationMax]: max,
      [PropNames_PaginatedParameters_paginationMin]: min,
      [PropNames_RearrangeableParameters_getIndex]: T2((a4) => a4.props.index, []),
      [PropNames_RearrangeableParameters_onRearranged]: null,
      [PropNames_RearrangeableParameters_compare]: null,
      [PropNames_RearrangeableParameters_adjust]: null,
      [PropNames_RearrangeableParameters_children]: F2(() => Array.from(function* () {
        for (let i3 = 0; i3 < count; ++i3) {
          yield /* @__PURE__ */ o4(DemoUseRovingTabIndexChildOuter, { index: i3 }, i3);
        }
      }()), [count]),
      [PropNames_StaggeredParameters_staggered]: staggered,
      context: q2(WeirdContext)
    });
    p3(() => {
      setStaggering(stillStaggering);
    }, [stillStaggering]);
    return /* @__PURE__ */ o4(ListChildContext.Provider, { value: context, children });
  });
  var DemoUseRovingTabIndexChildOuter = x3(function DemoUseRovingTabIndexChildOuter2({ index }) {
    const {
      props: propsStable,
      [PropNames_RefElementReturn_getElement]: getElement
    } = useRefElement({
      [PropNames_RefElementParameters_onElementChange]: useStableCallback((e3, p4, r5) => {
        onElementChange?.(e3, p4, r5);
      })
    });
    const { managedChildContext, paginatedChildContext, staggeredChildContext } = q2(ListChildContext);
    const {
      props,
      [PropNames_RefElementParameters_onElementChange]: onElementChange,
      [PropNames_StaggeredChildReturn_hideBecauseStaggered]: hideBecauseStaggered,
      [PropNames_PaginatedChildReturn_hideBecausePaginated]: hideBecausePaginated
    } = useProcessedChild({
      context: { managedChildContext, paginatedChildContext, staggeredChildContext },
      info: { index }
    });
    const c4 = F2(() => /* @__PURE__ */ o4(DemoUseRovingTabIndexChild, { index }), [index]);
    return /* @__PURE__ */ o4("li", { ...useMergedProps(props, propsStable), children: hideBecausePaginated || hideBecauseStaggered ? "\xA0" : c4 });
  });
  var DemoUseRovingTabIndexChild = x3(function DemoUseRovingTabIndexChild2({ index }) {
    if (index == 1)
      return /* @__PURE__ */ o4("span", { children: [
        "(Item ",
        index,
        " is a ",
        /* @__PURE__ */ o4("strong", { children: "hole in the array" }),
        " and does not exist)"
      ] });
    let disabled = index == 6;
    let hidden = index == 7;
    if (index == 8) {
      disabled = hidden = true;
    }
    const [multiSelected, setMultiSelected] = useState(false);
    const [randomWord] = useState(() => RandomWords[index]);
    const context = q2(ListNavigationSingleSelectionChildContext);
    const focusSelf = T2((e3) => {
      e3.focus();
    }, []);
    const getSortValue = useStableCallback(() => index);
    const {
      propsChild,
      propsTabbable,
      [PropNames_HasCurrentFocusParameters_onCurrentFocusedInnerChanged]: onCurrentFocusedInnerChanged,
      //  [PropNames_HasCurrentFocusReturn_getLastFocused]: getLastFocused,
      // [PropNames_HasCurrentFocusReturn_getLastFocusedInner]: getLastFocusedInner,
      //  [PropNames_ManagedChildReturnType_getChildren]: getChildren,
      [PropNames_MultiSelectionChildReturn_getMultiSelected]: getMultiSelected,
      //    [PropNames_MultiSelectionChildReturn_multiSelected]: multiSelected,
      [PropNames_MultiSelectionParameters_multiSelectionMode]: multiSelectionMode,
      [PropNames_PressParameters_excludeSpace]: excludeSpace,
      [PropNames_PressParameters_onPressSync]: onPressSync,
      [PropNames_RefElementReturn_getElement]: getElement,
      [PropNames_RovingTabIndexChildReturn_getTabbable]: getTabbable,
      [PropNames_RovingTabIndexChildReturn_tabbable]: tabbable,
      [PropNames_SingleSelectionChildReturn_getSingleSelected]: getSingleSelected,
      [PropNames_SingleSelectionChildReturn_getSingleSelectedOffset]: getSingleSelectedOffset,
      [PropNames_SingleSelectionChildReturn_singleSelected]: singleSelected,
      [PropNames_SingleSelectionChildReturn_singleSelectedOffset]: singleSelectedOffset,
      [PropNames_SingleSelectionChildReturn_singleSelectionMode]: singleSelectionMode,
      [PropNames_TextContentReturn_getTextContent]: getTextContent
    } = useCompleteListNavigationChildDeclarative({
      info: { index, focusSelf, foo: "bar", untabbable: hidden },
      context,
      [PropNames_HasCurrentFocusParameters_onCurrentFocusedChanged]: null,
      [PropNames_HasCurrentFocusParameters_onCurrentFocusedInnerChanged]: null,
      [PropNames_MultiSelectionChildParameters_multiSelected]: multiSelected,
      [PropNames_MultiSelectionChildParameters_multiSelectionDisabled]: disabled,
      [PropNames_MultiSelectionChildParameters_onMultiSelectChange]: null,
      [PropNames_SingleSelectionChildParameters_singleSelectionDisabled]: false,
      [PropNames_TextContentParameters_getText]: T2((e3) => {
        return e3?.textContent ?? "";
      }, []),
      [PropNames_RefElementParameters_onElementChange]: null,
      [PropNames_RefElementParameters_onMount]: null,
      [PropNames_RefElementParameters_onUnmount]: null
      //  textContentParameters: { getText: useCallback((e) => { return e?.textContent ?? "" }, []) },
      //  hasCurrentFocusParameters: { onCurrentFocusedChanged: null, onCurrentFocusedInnerChanged: null },
      //  refElementParameters: { onElementChange: null, onMount: null, onUnmount: null },
      //   multiSelectionChildParameters: { multiSelectionDisabled: disabled },
      //   singleSelectionChildParameters: { singleSelectionDisabled: disabled },
      //   multiSelectionChildDeclarativeParameters: { multiSelected, onMultiSelectedChange: e => setMultiSelected(e[EventDetail].multiSelected) }
    });
    const {
      props: p22,
      [PropNames_PressReturn_getIsPressing]: getIsPressing,
      [PropNames_PressReturn_longPress]: longPress,
      [PropNames_PressReturn_pressing]: pressing
    } = usePress({
      [PropNames_PressParameters_focusSelf]: focusSelf,
      [PropNames_PressParameters_onPressSync]: onPressSync,
      [PropNames_PressParameters_excludeSpace]: excludeSpace,
      [PropNames_PressParameters_allowRepeatPresses]: false,
      [PropNames_PressParameters_excludeEnter]: null,
      [PropNames_PressParameters_excludePointer]: null,
      [PropNames_PressParameters_longPressThreshold]: null,
      [PropNames_PressParameters_onPressingChange]: null,
      [PropNames_RefElementReturn_getElement]: getElement
    });
    let s4 = singleSelected && multiSelected ? " (single- & multi- selected)" : singleSelected ? " (single-selected)" : multiSelected ? " (multi-selected)" : "";
    const text = `${randomWord} This is item #${index} (offset: ${singleSelected}) ${hidden ? " (hidden)" : ""}${disabled ? " (disabled)" : ""}${s4} (${tabbable ? "Tabbable" : "Not tabbable"})`;
    return /* @__PURE__ */ o4("span", { ...useMergedProps(...propsChild, ...propsTabbable, ...p22), children: [
      text,
      /* @__PURE__ */ o4("input", { ...useMergedProps(...propsTabbable, { type: "number" }), style: { width: "5ch" } })
    ] });
  });

  // index.tsx
  window._generate_setState_stacks = false;
  var DemoGlobalHandlerChildren = x3(function DemoGlobalHandlerChildren2({ count, mode }) {
    return /* @__PURE__ */ o4(k, { children: [...function* () {
      for (let i3 = 0; i3 < count; ++i3) {
        yield /* @__PURE__ */ o4(DemoGlobalHandlerChild, { mode, target: window }, i3);
      }
    }()] });
  });
  var DemoGlobalHandlerChild = x3(function DemoGlobalHandlerChild2({ mode, target }) {
    useGlobalHandler(target, "click", mode == null ? null : (e3) => {
      if (e3.target?.id != "global-handler-test2")
        return;
      window._demo_event = (window._demo_event || 0) + 1;
    }, {}, mode || "grouped");
    return /* @__PURE__ */ o4("div", { hidden: true });
  });
  debugger;
  var Component = () => {
    return /* @__PURE__ */ o4(DemoUseRovingTabIndex, {});
  };
  requestAnimationFrame(() => {
    D(/* @__PURE__ */ o4(Component, {}), document.getElementById("root"));
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
