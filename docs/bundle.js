"use strict";
(() => {
  // ../node_modules/.pnpm/preact@10.13.2/node_modules/preact/dist/preact.module.js
  var e = {};
  var t = [];
  var n = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
  function l(e3, t3) {
    for (let n3 in t3)
      e3[n3] = t3[n3];
    return e3;
  }
  function o(e3) {
    let t3 = e3.parentNode;
    t3 && t3.removeChild(e3);
  }
  var r = t.slice;
  var i = { _catchError: function(e3, t3, n3, l3) {
    let o3, r5, i4;
    for (; t3 = t3._parent; )
      if ((o3 = t3._component) && !o3._processingException)
        try {
          if (r5 = o3.constructor, r5 && null != r5.getDerivedStateFromError && (o3.setState(r5.getDerivedStateFromError(e3)), i4 = o3._dirty), null != o3.componentDidCatch && (o3.componentDidCatch(e3, l3 || {}), i4 = o3._dirty), i4)
            return o3._pendingError = o3;
        } catch (t4) {
          e3 = t4;
        }
    throw e3;
  } };
  var u = 0;
  function c(e3, t3, n3) {
    let l3, o3, i4, u3 = {};
    for (i4 in t3)
      "key" == i4 ? l3 = t3[i4] : "ref" == i4 ? o3 = t3[i4] : u3[i4] = t3[i4];
    if (arguments.length > 2 && (u3.children = arguments.length > 3 ? r.call(arguments, 2) : n3), "function" == typeof e3 && null != e3.defaultProps)
      for (i4 in e3.defaultProps)
        void 0 === u3[i4] && (u3[i4] = e3.defaultProps[i4]);
    return d(e3, u3, l3, o3, null);
  }
  function d(e3, t3, n3, l3, o3) {
    const r5 = { type: e3, props: t3, key: n3, ref: l3, _children: null, _parent: null, _depth: 0, _dom: null, _nextDom: void 0, _component: null, _hydrating: null, constructor: void 0, _original: null == o3 ? ++u : o3 };
    return null == o3 && null != i.vnode && i.vnode(r5), r5;
  }
  function a(e3) {
    return e3.children;
  }
  function p(e3, t3) {
    this.props = e3, this.context = t3;
  }
  function f(e3, t3) {
    if (null == t3)
      return e3._parent ? f(e3._parent, e3._parent._children.indexOf(e3) + 1) : null;
    let n3;
    for (; t3 < e3._children.length; t3++)
      if (n3 = e3._children[t3], null != n3 && null != n3._dom)
        return n3._dom;
    return "function" == typeof e3.type ? f(e3) : null;
  }
  function h(e3) {
    let t3 = e3._vnode, n3 = t3._dom, o3 = e3._parentDom;
    if (o3) {
      let r5 = [];
      const i4 = l({}, t3);
      i4._original = t3._original + 1, N(o3, t3, i4, e3._globalContext, void 0 !== o3.ownerSVGElement, null != t3._hydrating ? [n3] : null, r5, null == n3 ? f(t3) : n3, t3._hydrating), W(r5, t3), t3._dom != n3 && m(t3);
    }
  }
  function m(e3) {
    if (null != (e3 = e3._parent) && null != e3._component) {
      e3._dom = e3._component.base = null;
      for (let t3 = 0; t3 < e3._children.length; t3++) {
        let n3 = e3._children[t3];
        if (null != n3 && null != n3._dom) {
          e3._dom = e3._component.base = n3._dom;
          break;
        }
      }
      return m(e3);
    }
  }
  p.prototype.setState = function(e3, t3) {
    let n3;
    n3 = null != this._nextState && this._nextState !== this.state ? this._nextState : this._nextState = l({}, this.state), "function" == typeof e3 && (e3 = e3(l({}, n3), this.props)), e3 && l(n3, e3), null != e3 && this._vnode && (t3 && this._stateCallbacks.push(t3), x(this));
  }, p.prototype.forceUpdate = function(e3) {
    this._vnode && (this._force = true, e3 && this._renderCallbacks.push(e3), x(this));
  }, p.prototype.render = a;
  var y;
  var g = [];
  var v = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout;
  function x(e3) {
    (!e3._dirty && (e3._dirty = true) && g.push(e3) && !C._rerenderCount++ || y !== i.debounceRendering) && (y = i.debounceRendering, (y || v)(C));
  }
  var b = (e3, t3) => e3._vnode._depth - t3._vnode._depth;
  function C() {
    let e3;
    for (g.sort(b); e3 = g.shift(); )
      if (e3._dirty) {
        let t3 = g.length;
        h(e3), g.length > t3 && g.sort(b);
      }
    C._rerenderCount = 0;
  }
  function k(n3, l3, o3, r5, i4, u3, c3, s3, _2, p3) {
    let h3, m3, y3, g3, v4, x3, b3, C3 = r5 && r5._children || t, k4 = C3.length;
    for (o3._children = [], h3 = 0; h3 < l3.length; h3++)
      if (g3 = l3[h3], g3 = o3._children[h3] = null == g3 || "boolean" == typeof g3 || "function" == typeof g3 ? null : "string" == typeof g3 || "number" == typeof g3 || "bigint" == typeof g3 ? d(null, g3, null, null, g3) : Array.isArray(g3) ? d(a, { children: g3 }, null, null, null) : g3._depth > 0 ? d(g3.type, g3.props, g3.key, g3.ref ? g3.ref : null, g3._original) : g3, null != g3) {
        if (g3._parent = o3, g3._depth = o3._depth + 1, y3 = C3[h3], null === y3 || y3 && g3.key == y3.key && g3.type === y3.type)
          C3[h3] = void 0;
        else
          for (m3 = 0; m3 < k4; m3++) {
            if (y3 = C3[m3], y3 && g3.key == y3.key && g3.type === y3.type) {
              C3[m3] = void 0;
              break;
            }
            y3 = null;
          }
        y3 = y3 || e, N(n3, g3, y3, i4, u3, c3, s3, _2, p3), v4 = g3._dom, (m3 = g3.ref) && y3.ref != m3 && (b3 || (b3 = []), y3.ref && b3.push(y3.ref, null, g3), b3.push(m3, g3._component || v4, g3)), null != v4 ? (null == x3 && (x3 = v4), "function" == typeof g3.type && g3._children === y3._children ? g3._nextDom = _2 = S(g3, _2, n3) : _2 = E(n3, g3, y3, C3, v4, _2), "function" == typeof o3.type && (o3._nextDom = _2)) : _2 && y3._dom == _2 && _2.parentNode != n3 && (_2 = f(y3));
      }
    for (o3._dom = x3, h3 = k4; h3--; )
      null != C3[h3] && ("function" == typeof o3.type && null != C3[h3]._dom && C3[h3]._dom == o3._nextDom && (o3._nextDom = w(r5).nextSibling), M(C3[h3], C3[h3]));
    if (b3)
      for (h3 = 0; h3 < b3.length; h3++)
        L(b3[h3], b3[++h3], b3[++h3]);
  }
  function S(e3, t3, n3) {
    let l3 = e3._children, o3 = 0;
    for (; l3 && o3 < l3.length; o3++) {
      let r5 = l3[o3];
      r5 && (r5._parent = e3, t3 = "function" == typeof r5.type ? S(r5, t3, n3) : E(n3, r5, r5, l3, r5._dom, t3));
    }
    return t3;
  }
  function D(e3, t3) {
    return t3 = t3 || [], null == e3 || "boolean" == typeof e3 || (Array.isArray(e3) ? e3.some((e4) => {
      D(e4, t3);
    }) : t3.push(e3)), t3;
  }
  function E(e3, t3, n3, l3, o3, r5) {
    let i4;
    if (void 0 !== t3._nextDom)
      i4 = t3._nextDom, t3._nextDom = void 0;
    else if (null == n3 || o3 != r5 || null == o3.parentNode)
      e:
        if (null == r5 || r5.parentNode !== e3)
          e3.appendChild(o3), i4 = null;
        else {
          for (let e4 = r5, t4 = 0; (e4 = e4.nextSibling) && t4 < l3.length; t4 += 1)
            if (e4 == o3)
              break e;
          e3.insertBefore(o3, r5), i4 = r5;
        }
    return void 0 !== i4 ? i4 : o3.nextSibling;
  }
  function w(e3) {
    if (null == e3.type || "string" == typeof e3.type)
      return e3._dom;
    if (e3._children)
      for (let t3 = e3._children.length - 1; t3 >= 0; t3--) {
        let n3 = e3._children[t3];
        if (n3) {
          let e4 = w(n3);
          if (e4)
            return e4;
        }
      }
    return null;
  }
  function P(e3, t3, l3) {
    "-" === t3[0] ? e3.setProperty(t3, null == l3 ? "" : l3) : e3[t3] = null == l3 ? "" : "number" != typeof l3 || n.test(t3) ? l3 : l3 + "px";
  }
  function U(e3, t3, n3, l3, o3) {
    let r5;
    e:
      if ("style" === t3)
        if ("string" == typeof n3)
          e3.style.cssText = n3;
        else {
          if ("string" == typeof l3 && (e3.style.cssText = l3 = ""), l3)
            for (t3 in l3)
              n3 && t3 in n3 || P(e3.style, t3, "");
          if (n3)
            for (t3 in n3)
              l3 && n3[t3] === l3[t3] || P(e3.style, t3, n3[t3]);
        }
      else if ("o" === t3[0] && "n" === t3[1])
        r5 = t3 !== (t3 = t3.replace(/Capture$/, "")), t3 = t3.toLowerCase() in e3 ? t3.toLowerCase().slice(2) : t3.slice(2), e3._listeners || (e3._listeners = {}), e3._listeners[t3 + r5] = n3, n3 ? l3 || e3.addEventListener(t3, r5 ? A : T, r5) : e3.removeEventListener(t3, r5 ? A : T, r5);
      else if ("dangerouslySetInnerHTML" !== t3) {
        if (o3)
          t3 = t3.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
        else if ("width" !== t3 && "height" !== t3 && "href" !== t3 && "list" !== t3 && "form" !== t3 && "tabIndex" !== t3 && "download" !== t3 && t3 in e3)
          try {
            e3[t3] = null == n3 ? "" : n3;
            break e;
          } catch (e4) {
          }
        "function" == typeof n3 || (null == n3 || false === n3 && "-" !== t3[4] ? e3.removeAttribute(t3) : e3.setAttribute(t3, n3));
      }
  }
  function T(e3) {
    return this._listeners[e3.type + false](i.event ? i.event(e3) : e3);
  }
  function A(e3) {
    return this._listeners[e3.type + true](i.event ? i.event(e3) : e3);
  }
  function N(t3, n3, u3, c3, d3, s3, _2, h3, m3) {
    let y3, g3 = n3.type;
    if (void 0 !== n3.constructor)
      return null;
    null != u3._hydrating && (m3 = u3._hydrating, h3 = n3._dom = u3._dom, n3._hydrating = null, s3 = [h3]), (y3 = i._diff) && y3(n3);
    try {
      e:
        if ("function" == typeof g3) {
          let e3, o3, r5, f3, v4, x3, b3 = n3.props;
          y3 = g3.contextType;
          let C3 = y3 && c3[y3._id], S2 = y3 ? C3 ? C3.props.value : y3._defaultValue : c3;
          if (u3._component ? (e3 = n3._component = u3._component, x3 = e3._processingException = e3._pendingError) : ("prototype" in g3 && g3.prototype.render ? n3._component = e3 = new g3(b3, S2) : (n3._component = e3 = new p(b3, S2), e3.constructor = g3, e3.render = F), C3 && C3.sub(e3), e3.props = b3, e3.state || (e3.state = {}), e3.context = S2, e3._globalContext = c3, o3 = e3._dirty = true, e3._renderCallbacks = [], e3._stateCallbacks = []), null == e3._nextState && (e3._nextState = e3.state), null != g3.getDerivedStateFromProps && (e3._nextState == e3.state && (e3._nextState = l({}, e3._nextState)), l(e3._nextState, g3.getDerivedStateFromProps(b3, e3._nextState))), r5 = e3.props, f3 = e3.state, e3._vnode = n3, o3)
            null == g3.getDerivedStateFromProps && null != e3.componentWillMount && e3.componentWillMount(), null != e3.componentDidMount && e3._renderCallbacks.push(e3.componentDidMount);
          else {
            if (null == g3.getDerivedStateFromProps && b3 !== r5 && null != e3.componentWillReceiveProps && e3.componentWillReceiveProps(b3, S2), !e3._force && null != e3.shouldComponentUpdate && false === e3.shouldComponentUpdate(b3, e3._nextState, S2) || n3._original === u3._original) {
              n3._original !== u3._original && (e3.props = b3, e3.state = e3._nextState, e3._dirty = false), e3._force = false, n3._dom = u3._dom, n3._children = u3._children, n3._children.forEach((e4) => {
                e4 && (e4._parent = n3);
              });
              for (let t4 = 0; t4 < e3._stateCallbacks.length; t4++)
                e3._renderCallbacks.push(e3._stateCallbacks[t4]);
              e3._stateCallbacks = [], e3._renderCallbacks.length && _2.push(e3);
              break e;
            }
            null != e3.componentWillUpdate && e3.componentWillUpdate(b3, e3._nextState, S2), null != e3.componentDidUpdate && e3._renderCallbacks.push(() => {
              e3.componentDidUpdate(r5, f3, v4);
            });
          }
          e3.context = S2, e3.props = b3, e3._parentDom = t3;
          let D3 = i._render, E3 = 0;
          if ("prototype" in g3 && g3.prototype.render) {
            e3.state = e3._nextState, e3._dirty = false, D3 && D3(n3), y3 = e3.render(e3.props, e3.state, e3.context);
            for (let t4 = 0; t4 < e3._stateCallbacks.length; t4++)
              e3._renderCallbacks.push(e3._stateCallbacks[t4]);
            e3._stateCallbacks = [];
          } else
            do {
              e3._dirty = false, D3 && D3(n3), y3 = e3.render(e3.props, e3.state, e3.context), e3.state = e3._nextState;
            } while (e3._dirty && ++E3 < 25);
          e3.state = e3._nextState, null != e3.getChildContext && (c3 = l(l({}, c3), e3.getChildContext())), o3 || null == e3.getSnapshotBeforeUpdate || (v4 = e3.getSnapshotBeforeUpdate(r5, f3));
          let w4 = null != y3 && y3.type === a && null == y3.key ? y3.props.children : y3;
          k(t3, Array.isArray(w4) ? w4 : [w4], n3, u3, c3, d3, s3, _2, h3, m3), e3.base = n3._dom, n3._hydrating = null, e3._renderCallbacks.length && _2.push(e3), x3 && (e3._pendingError = e3._processingException = null), e3._force = false;
        } else
          null == s3 && n3._original === u3._original ? (n3._children = u3._children, n3._dom = u3._dom) : n3._dom = function(t4, n4, l3, i4, u4, c4, d4, s4) {
            let a3 = l3.props, _3 = n4.props, p3 = n4.type, h4 = 0;
            if ("svg" === p3 && (u4 = true), null != c4)
              for (; h4 < c4.length; h4++) {
                const e3 = c4[h4];
                if (e3 && "setAttribute" in e3 == !!p3 && (p3 ? e3.localName === p3 : 3 === e3.nodeType)) {
                  t4 = e3, c4[h4] = null;
                  break;
                }
              }
            if (null == t4) {
              if (null === p3)
                return document.createTextNode(_3);
              t4 = u4 ? document.createElementNS("http://www.w3.org/2000/svg", p3) : document.createElement(p3, _3.is && _3), c4 = null, s4 = false;
            }
            if (null === p3)
              a3 === _3 || s4 && t4.data === _3 || (t4.data = _3);
            else {
              c4 = c4 && r.call(t4.childNodes), a3 = l3.props || e;
              let m4 = a3.dangerouslySetInnerHTML, y4 = _3.dangerouslySetInnerHTML;
              if (!s4) {
                if (null != c4)
                  for (a3 = {}, h4 = 0; h4 < t4.attributes.length; h4++)
                    a3[t4.attributes[h4].name] = t4.attributes[h4].value;
                (y4 || m4) && (y4 && (m4 && y4.__html == m4.__html || y4.__html === t4.innerHTML) || (t4.innerHTML = y4 && y4.__html || ""));
              }
              if (function(e3, t5, n5, l4, o3) {
                let r5;
                for (r5 in n5)
                  "children" === r5 || "key" === r5 || r5 in t5 || U(e3, r5, null, n5[r5], l4);
                for (r5 in t5)
                  o3 && "function" != typeof t5[r5] || "children" === r5 || "key" === r5 || "value" === r5 || "checked" === r5 || n5[r5] === t5[r5] || U(e3, r5, t5[r5], n5[r5], l4);
              }(t4, _3, a3, u4, s4), y4)
                n4._children = [];
              else if (h4 = n4.props.children, k(t4, Array.isArray(h4) ? h4 : [h4], n4, l3, i4, u4 && "foreignObject" !== p3, c4, d4, c4 ? c4[0] : l3._children && f(l3, 0), s4), null != c4)
                for (h4 = c4.length; h4--; )
                  null != c4[h4] && o(c4[h4]);
              s4 || ("value" in _3 && void 0 !== (h4 = _3.value) && (h4 !== t4.value || "progress" === p3 && !h4 || "option" === p3 && h4 !== a3.value) && U(t4, "value", h4, a3.value, false), "checked" in _3 && void 0 !== (h4 = _3.checked) && h4 !== t4.checked && U(t4, "checked", h4, a3.checked, false));
            }
            return t4;
          }(u3._dom, n3, u3, c3, d3, s3, _2, m3);
      (y3 = i.diffed) && y3(n3);
    } catch (e3) {
      n3._original = null, (m3 || null != s3) && (n3._dom = h3, n3._hydrating = !!m3, s3[s3.indexOf(h3)] = null), i._catchError(e3, n3, u3);
    }
  }
  function W(e3, t3) {
    i._commit && i._commit(t3, e3), e3.some((t4) => {
      try {
        e3 = t4._renderCallbacks, t4._renderCallbacks = [], e3.some((e4) => {
          e4.call(t4);
        });
      } catch (e4) {
        i._catchError(e4, t4._vnode);
      }
    });
  }
  function L(e3, t3, n3) {
    try {
      "function" == typeof e3 ? e3(t3) : e3.current = t3;
    } catch (e4) {
      i._catchError(e4, n3);
    }
  }
  function M(e3, t3, n3) {
    let l3;
    if (i.unmount && i.unmount(e3), (l3 = e3.ref) && (l3.current && l3.current !== e3._dom || L(l3, null, t3)), null != (l3 = e3._component)) {
      if (l3.componentWillUnmount)
        try {
          l3.componentWillUnmount();
        } catch (e4) {
          i._catchError(e4, t3);
        }
      l3.base = l3._parentDom = null, e3._component = void 0;
    }
    if (l3 = e3._children)
      for (let o3 = 0; o3 < l3.length; o3++)
        l3[o3] && M(l3[o3], t3, n3 || "function" != typeof e3.type);
    n3 || null == e3._dom || o(e3._dom), e3._parent = e3._dom = e3._nextDom = void 0;
  }
  function F(e3, t3, n3) {
    return this.constructor(e3, n3);
  }
  function H(t3, n3, l3) {
    i._root && i._root(t3, n3);
    let o3 = "function" == typeof l3, u3 = o3 ? null : l3 && l3._children || n3._children, d3 = [];
    N(n3, t3 = (!o3 && l3 || n3)._children = c(a, null, [t3]), u3 || e, e, void 0 !== n3.ownerSVGElement, !o3 && l3 ? [l3] : u3 ? null : n3.firstChild ? r.call(n3.childNodes) : null, d3, !o3 && l3 ? l3 : u3 ? u3._dom : n3.firstChild, o3), W(d3, t3);
  }
  function I(e3, t3, n3) {
    let o3, i4, u3, c3 = l({}, e3.props);
    for (u3 in t3)
      "key" == u3 ? o3 = t3[u3] : "ref" == u3 ? i4 = t3[u3] : c3[u3] = t3[u3];
    return arguments.length > 2 && (c3.children = arguments.length > 3 ? r.call(arguments, 2) : n3), d(e3.type, c3, o3 || e3.key, i4 || e3.ref, null);
  }
  C._rerenderCount = 0;
  var O = 0;
  function V(e3, t3) {
    const n3 = { _id: t3 = "__cC" + O++, _defaultValue: e3, Consumer: (e4, t4) => e4.children(t4), Provider(e4) {
      if (!this.getChildContext) {
        let e5 = [], n4 = {};
        n4[t3] = this, this.getChildContext = () => n4, this.shouldComponentUpdate = function(t4) {
          this.props.value !== t4.value && e5.some((e6) => {
            e6._force = true, x(e6);
          });
        }, this.sub = (t4) => {
          e5.push(t4);
          let n5 = t4.componentWillUnmount;
          t4.componentWillUnmount = () => {
            e5.splice(e5.indexOf(t4), 1), n5 && n5.call(t4);
          };
        };
      }
      return e4.children;
    } };
    return n3.Provider._contextRef = n3.Consumer.contextType = n3;
  }

  // ../node_modules/.pnpm/preact@10.13.2/node_modules/preact/hooks/dist/hooks.module.js
  var t2;
  var o2;
  var i2;
  var c2;
  var u2 = 0;
  var e2 = [];
  var r2 = [];
  var f2 = i.t;
  var l2 = i.o;
  var s = i.diffed;
  var a2 = i.i;
  var d2 = i.unmount;
  function m2(t3, i4) {
    i.u && i.u(o2, t3, u2 || i4), u2 = 0;
    const c3 = o2.l || (o2.l = { m: [], p: [] });
    return t3 >= c3.m.length && c3.m.push({ v: r2 }), c3.m[t3];
  }
  function p2(n3) {
    return u2 = 1, v2(z, n3);
  }
  function v2(n3, i4, c3) {
    const u3 = m2(t2++, 2);
    if (u3.h = n3, !u3.A && (u3.F = [c3 ? c3(i4) : z(void 0, i4), (n4) => {
      const t3 = u3.T ? u3.T[0] : u3.F[0], o3 = u3.h(t3, n4);
      t3 !== o3 && (u3.T = [o3, u3.F[1]], u3.A.setState({}));
    }], u3.A = o2, !o2._)) {
      let e3 = function(n4, t3, o3) {
        if (!u3.A.l)
          return true;
        const i5 = u3.A.l.m.filter((n5) => n5.A);
        if (i5.every((n5) => !n5.T))
          return !r5 || r5.call(this, n4, t3, o3);
        let c4 = false;
        return i5.forEach((n5) => {
          if (n5.T) {
            const t4 = n5.F[0];
            n5.F = n5.T, n5.T = void 0, t4 !== n5.F[0] && (c4 = true);
          }
        }), !(!c4 && u3.A.props === n4) && (!r5 || r5.call(this, n4, t3, o3));
      };
      o2._ = true;
      let r5 = o2.shouldComponentUpdate;
      const f3 = o2.componentWillUpdate;
      o2.componentWillUpdate = function(n4, t3, o3) {
        if (this.q) {
          let i5 = r5;
          r5 = void 0, e3(n4, t3, o3), r5 = i5;
        }
        f3 && f3.call(this, n4, t3, o3);
      }, o2.shouldComponentUpdate = e3;
    }
    return u3.T || u3.F;
  }
  function h2(i4, c3) {
    const u3 = m2(t2++, 3);
    !i.P && w2(u3.V, c3) && (u3.F = i4, u3.j = c3, o2.l.p.push(u3));
  }
  function y2(i4, c3) {
    const u3 = m2(t2++, 4);
    !i.P && w2(u3.V, c3) && (u3.F = i4, u3.j = c3, o2.k.push(u3));
  }
  function A2(n3) {
    return u2 = 5, T2(() => ({ current: n3 }), []);
  }
  function F2(n3, t3, o3) {
    u2 = 6, y2(() => "function" == typeof n3 ? (n3(t3()), () => n3(null)) : n3 ? (n3.current = t3(), () => n3.current = null) : void 0, null == o3 ? o3 : o3.concat(n3));
  }
  function T2(n3, o3) {
    const i4 = m2(t2++, 7);
    return w2(i4.V, o3) ? (i4.v = n3(), i4.j = o3, i4.B = n3, i4.v) : i4.F;
  }
  function _(n3, t3) {
    return u2 = 8, T2(() => n3, t3);
  }
  function g2(n3) {
    const i4 = o2.context[n3.C], c3 = m2(t2++, 9);
    return c3.D = n3, i4 ? (null == c3.F && (c3.F = true, i4.sub(o2)), i4.props.value) : n3.G;
  }
  function E2() {
    const n3 = m2(t2++, 11);
    if (!n3.F) {
      let t3 = o2.H;
      for (; null !== t3 && !t3.I && null !== t3.J; )
        t3 = t3.J;
      let i4 = t3.I || (t3.I = [0, 0]);
      n3.F = "P" + i4[0] + "-" + i4[1]++;
    }
    return n3.F;
  }
  function P2() {
    let t3;
    for (; t3 = e2.shift(); )
      if (t3.K && t3.l)
        try {
          t3.l.p.forEach(j), t3.l.p.forEach(k2), t3.l.p = [];
        } catch (o3) {
          t3.l.p = [], i.L(o3, t3.H);
        }
  }
  i.t = (n3) => {
    o2 = null, f2 && f2(n3);
  }, i.o = (n3) => {
    l2 && l2(n3), o2 = n3.A, t2 = 0;
    const c3 = o2.l;
    c3 && (i2 === o2 ? (c3.p = [], o2.k = [], c3.m.forEach((n4) => {
      n4.T && (n4.F = n4.T), n4.v = r2, n4.T = n4.j = void 0;
    })) : (c3.p.forEach(j), c3.p.forEach(k2), c3.p = [])), i2 = o2;
  }, i.diffed = (t3) => {
    s && s(t3);
    const u3 = t3.A;
    u3 && u3.l && (u3.l.p.length && (1 !== e2.push(u3) && c2 === i.requestAnimationFrame || (c2 = i.requestAnimationFrame, (c2 || b2)(P2))), u3.l.m.forEach((n3) => {
      n3.j && (n3.V = n3.j), n3.v !== r2 && (n3.F = n3.v), n3.j = void 0, n3.v = r2;
    })), i2 = o2 = null;
  }, i.i = (t3, o3) => {
    o3.some((t4) => {
      try {
        t4.k.forEach(j), t4.k = t4.k.filter((n3) => !n3.F || k2(n3));
      } catch (i4) {
        o3.some((n3) => {
          n3.k && (n3.k = []);
        }), o3 = [], i.L(i4, t4.H);
      }
    }), a2 && a2(t3, o3);
  }, i.unmount = (t3) => {
    d2 && d2(t3);
    const o3 = t3.A;
    if (o3 && o3.l) {
      let t4;
      o3.l.m.forEach((n3) => {
        try {
          j(n3);
        } catch (n4) {
          t4 = n4;
        }
      }), o3.l = void 0, t4 && i.L(t4, o3.H);
    }
  };
  var V2 = "function" == typeof requestAnimationFrame;
  function b2(n3) {
    const t3 = () => {
      clearTimeout(o3), V2 && cancelAnimationFrame(i4), setTimeout(n3);
    }, o3 = setTimeout(t3, 100);
    let i4;
    V2 && (i4 = requestAnimationFrame(t3));
  }
  function j(n3) {
    const t3 = o2;
    let i4 = n3.M;
    "function" == typeof i4 && (n3.M = void 0, i4()), o2 = t3;
  }
  function k2(n3) {
    const t3 = o2;
    n3.M = n3.F(), o2 = t3;
  }
  function w2(n3, t3) {
    return !n3 || n3.length !== t3.length || t3.some((t4, o3) => t4 !== n3[o3]);
  }
  function z(n3, t3) {
    return "function" == typeof t3 ? t3(n3) : t3;
  }

  // ../node_modules/.pnpm/preact@10.13.2/node_modules/preact/compat/dist/compat.module.js
  function v3(n3, t3) {
    for (let e3 in t3)
      n3[e3] = t3[e3];
    return n3;
  }
  function C2(n3, t3) {
    for (let e3 in n3)
      if ("__source" !== e3 && !(e3 in t3))
        return true;
    for (let e3 in t3)
      if ("__source" !== e3 && n3[e3] !== t3[e3])
        return true;
    return false;
  }
  function w3(n3) {
    this.props = n3;
  }
  function x2(n3, e3) {
    function o3(n4) {
      let t3 = this.props.ref, o4 = t3 == n4.ref;
      return !o4 && t3 && (t3.call ? t3(null) : t3.current = null), e3 ? !e3(this.props, n4) || !o4 : C2(this.props, n4);
    }
    function u3(e4) {
      return this.shouldComponentUpdate = o3, c(n3, e4);
    }
    return u3.displayName = "Memo(" + (n3.displayName || n3.name) + ")", u3.prototype.isReactComponent = true, u3.t = true, u3;
  }
  (w3.prototype = new p()).isPureReactComponent = true, w3.prototype.shouldComponentUpdate = function(n3, t3) {
    return C2(this.props, n3) || C2(this.state, t3);
  };
  var R2 = i.o;
  i.o = (n3) => {
    n3.type && n3.type.t && n3.ref && (n3.props.ref = n3.ref, n3.ref = null), R2 && R2(n3);
  };
  var N2 = "undefined" != typeof Symbol && Symbol.for && Symbol.for("react.forward_ref") || 3911;
  function k3(n3) {
    function t3(t4) {
      let e3 = v3({}, t4);
      return delete e3.ref, n3(e3, t4.ref || null);
    }
    return t3.$$typeof = N2, t3.render = t3, t3.prototype.isReactComponent = t3.t = true, t3.displayName = "ForwardRef(" + (n3.displayName || n3.name) + ")", t3;
  }
  var T3 = i.u;
  i.u = function(n3, t3, e3, o3) {
    if (n3.then) {
      let o4, u3 = t3;
      for (; u3 = u3.l; )
        if ((o4 = u3.i) && o4.h)
          return null == t3.p && (t3.p = e3.p, t3.m = e3.m), o4.h(n3, t3);
    }
    T3(n3, t3, e3, o3);
  };
  var I2 = i.unmount;
  function L2(n3, t3, e3) {
    return n3 && (n3.i && n3.i._ && (n3.i._.S.forEach((n4) => {
      "function" == typeof n4.v && n4.v();
    }), n3.i._ = null), null != (n3 = v3({}, n3)).i && (n3.i.C === e3 && (n3.i.C = t3), n3.i = null), n3.m = n3.m && n3.m.map((n4) => L2(n4, t3, e3))), n3;
  }
  function U2(n3, t3, e3) {
    return n3 && (n3.R = null, n3.m = n3.m && n3.m.map((n4) => U2(n4, t3, e3)), n3.i && n3.i.C === t3 && (n3.p && e3.insertBefore(n3.p, n3.N), n3.i.k = true, n3.i.C = e3)), n3;
  }
  function D2() {
    this.A = 0, this.O = null, this.T = null;
  }
  function F3(n3) {
    let t3 = n3.l.i;
    return t3 && t3.I && t3.I(n3);
  }
  function V3() {
    this.L = null, this.U = null;
  }
  i.unmount = function(n3) {
    const t3 = n3.i;
    t3 && t3.D && t3.D(), t3 && true === n3.F && (n3.type = null), I2 && I2(n3);
  }, (D2.prototype = new p()).h = function(n3, t3) {
    const e3 = t3.i, o3 = this;
    null == o3.O && (o3.O = []), o3.O.push(e3);
    const u3 = F3(o3.M);
    let r5 = false;
    const l3 = () => {
      r5 || (r5 = true, e3.D = null, u3 ? u3(i4) : i4());
    };
    e3.D = l3;
    const i4 = () => {
      if (!--o3.A) {
        if (o3.state.I) {
          const n5 = o3.state.I;
          o3.M.m[0] = U2(n5, n5.i.C, n5.i.V);
        }
        let n4;
        for (o3.setState({ I: o3.T = null }); n4 = o3.O.pop(); )
          n4.forceUpdate();
      }
    }, c3 = true === t3.F;
    o3.A++ || c3 || o3.setState({ I: o3.T = o3.M.m[0] }), n3.then(l3, l3);
  }, D2.prototype.componentWillUnmount = function() {
    this.O = [];
  }, D2.prototype.render = function(n3, e3) {
    if (this.T) {
      if (this.M.m) {
        const n4 = document.createElement("div"), t3 = this.M.m[0].i;
        this.M.m[0] = L2(this.T, n4, t3.V = t3.C);
      }
      this.T = null;
    }
    const o3 = e3.I && c(a, null, n3.fallback);
    return o3 && (o3.F = null), [c(a, null, e3.I ? null : n3.children), o3];
  };
  var W2 = (n3, t3, e3) => {
    if (++e3[1] === e3[0] && n3.U.delete(t3), n3.props.revealOrder && ("t" !== n3.props.revealOrder[0] || !n3.U.size))
      for (e3 = n3.L; e3; ) {
        for (; e3.length > 3; )
          e3.pop()();
        if (e3[1] < e3[0])
          break;
        n3.L = e3 = e3[2];
      }
  };
  function P3(n3) {
    return this.getChildContext = () => n3.context, n3.children;
  }
  function j2(n3) {
    const e3 = this;
    let o3 = n3.W;
    e3.componentWillUnmount = function() {
      H(null, e3.P), e3.P = null, e3.W = null;
    }, e3.W && e3.W !== o3 && e3.componentWillUnmount(), n3.M ? (e3.P || (e3.W = o3, e3.P = { nodeType: 1, parentNode: o3, childNodes: [], appendChild(n4) {
      this.childNodes.push(n4), e3.W.appendChild(n4);
    }, insertBefore(n4, t3) {
      this.childNodes.push(n4), e3.W.appendChild(n4);
    }, removeChild(n4) {
      this.childNodes.splice(this.childNodes.indexOf(n4) >>> 1, 1), e3.W.removeChild(n4);
    } }), H(c(P3, { context: e3.context }, n3.M), e3.P)) : e3.P && e3.componentWillUnmount();
  }
  function z2(n3, e3) {
    const o3 = c(j2, { M: n3, W: e3 });
    return o3.containerInfo = e3, o3;
  }
  (V3.prototype = new p()).I = function(n3) {
    const t3 = this, e3 = F3(t3.M);
    let o3 = t3.U.get(n3);
    return o3[0]++, (u3) => {
      const r5 = () => {
        t3.props.revealOrder ? (o3.push(u3), W2(t3, n3, o3)) : u3();
      };
      e3 ? e3(r5) : r5();
    };
  }, V3.prototype.render = function(n3) {
    this.L = null, this.U = /* @__PURE__ */ new Map();
    const t3 = D(n3.children);
    n3.revealOrder && "b" === n3.revealOrder[0] && t3.reverse();
    for (let n4 = t3.length; n4--; )
      this.U.set(t3[n4], this.L = [1, 0, this.L]);
    return n3.children;
  }, V3.prototype.componentDidUpdate = V3.prototype.componentDidMount = function() {
    this.U.forEach((n3, t3) => {
      W2(this, t3, n3);
    });
  };
  var B = "undefined" != typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103;
  var H2 = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/;
  var Z = /^on(Ani|Tra|Tou|BeforeInp|Compo)/;
  var Y = /[A-Z0-9]/g;
  var $ = "undefined" != typeof document;
  var q2 = (n3) => ("undefined" != typeof Symbol && "symbol" == typeof Symbol() ? /fil|che|rad/ : /fil|che|ra/).test(n3);
  p.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach((t3) => {
    Object.defineProperty(p.prototype, t3, { configurable: true, get() {
      return this["UNSAFE_" + t3];
    }, set(n3) {
      Object.defineProperty(this, t3, { configurable: true, writable: true, value: n3 });
    } });
  });
  var K = i.event;
  function Q() {
  }
  function X() {
    return this.cancelBubble;
  }
  function nn() {
    return this.defaultPrevented;
  }
  i.event = (n3) => (K && (n3 = K(n3)), n3.persist = Q, n3.isPropagationStopped = X, n3.isDefaultPrevented = nn, n3.nativeEvent = n3);
  var tn = { enumerable: false, configurable: true, get() {
    return this.class;
  } };
  var en;
  var on = i.vnode;
  i.vnode = (n3) => {
    "string" == typeof n3.type && function(n4) {
      let t3 = n4.props, e3 = n4.type, u3 = {};
      for (let n5 in t3) {
        let o3 = t3[n5];
        if ("value" === n5 && "defaultValue" in t3 && null == o3 || $ && "children" === n5 && "noscript" === e3 || "class" === n5 || "className" === n5)
          continue;
        let r5 = n5.toLowerCase();
        "defaultValue" === n5 && "value" in t3 && null == t3.value ? n5 = "value" : "download" === n5 && true === o3 ? o3 = "" : "ondoubleclick" === r5 ? n5 = "ondblclick" : "onchange" !== r5 || "input" !== e3 && "textarea" !== e3 || q2(t3.type) ? "onfocus" === r5 ? n5 = "onfocusin" : "onblur" === r5 ? n5 = "onfocusout" : Z.test(n5) ? n5 = r5 : -1 === e3.indexOf("-") && H2.test(n5) ? n5 = n5.replace(Y, "-$&").toLowerCase() : null === o3 && (o3 = void 0) : r5 = n5 = "oninput", "oninput" === r5 && (n5 = r5, u3[n5] && (n5 = "oninputCapture")), u3[n5] = o3;
      }
      "select" == e3 && u3.multiple && Array.isArray(u3.value) && (u3.value = D(t3.children).forEach((n5) => {
        n5.props.selected = -1 != u3.value.indexOf(n5.props.value);
      })), "select" == e3 && null != u3.defaultValue && (u3.value = D(t3.children).forEach((n5) => {
        n5.props.selected = u3.multiple ? -1 != u3.defaultValue.indexOf(n5.props.value) : u3.defaultValue == n5.props.value;
      })), t3.class && !t3.className ? (u3.class = t3.class, Object.defineProperty(u3, "className", tn)) : (t3.className && !t3.class || t3.class && t3.className) && (u3.class = u3.className = t3.className), n4.props = u3;
    }(n3), n3.$$typeof = B, on && on(n3);
  };
  var un = i.j;
  i.j = function(n3) {
    un && un(n3), en = n3.i;
  };
  var rn = i.diffed;
  i.diffed = function(n3) {
    rn && rn(n3);
    const t3 = n3.props, e3 = n3.p;
    null != e3 && "textarea" === n3.type && "value" in t3 && t3.value !== e3.value && (e3.value = null == t3.value ? "" : t3.value), en = null;
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
  var originalCommit = i[commitName];
  i[commitName] = newCommit;
  var incrementingId = 0;
  function nextId() {
    let next = ++incrementingId;
    if (incrementingId >= Number.MAX_SAFE_INTEGER)
      incrementingId = -Number.MAX_SAFE_INTEGER;
    return next;
  }
  var useBeforeLayoutEffect = function useBeforeLayoutEffect2(effect, inputs) {
    const ref = A2(null);
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
  function debounceRendering(f3) {
    (i.debounceRendering ?? queueMicrotask)(f3);
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
    if (false)
      return;
    const helperToEnsureStability = A2([]);
    const shownError = A2([]);
    useHelper(values2.length, -1);
    values2.forEach(useHelper);
    return;
    function useHelper(value, i4) {
      const index = i4 + 1;
      if (helperToEnsureStability.current[index] === void 0)
        helperToEnsureStability.current[index] = value;
      if (helperToEnsureStability.current[index] != value) {
        if (!shownError.current[index]) {
          debugger;
          console.error(`The hook ${parentHookName} requires some or all of its arguments remain stable across each render; please check the ${i4}-indexed argument (${i4 >= 0 ? JSON.stringify(values2[i4]) : "the number of supposedly stable elements"}).`);
          shownError.current[index] = true;
        }
      }
    }
  }
  var usePassiveState = function usePassiveState2(onChange, getInitialValue, customDebounceRendering) {
    const valueRef = A2(Unset);
    const reasonRef = A2(Unset);
    const warningRef = A2(false);
    const dependencyToCompareAgainst = A2(Unset);
    const cleanupCallbackRef = A2(void 0);
    useEnsureStability("usePassiveState", onChange, getInitialValue, customDebounceRendering);
    const onShouldCleanUp = _(() => {
      const cleanupCallback = cleanupCallbackRef.current;
      if (cleanupCallback)
        cleanupCallback();
    }, []);
    const tryEnsureValue = _(() => {
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
    const getValue = _(() => {
      if (warningRef.current)
        console.warn("During onChange, prefer using the (value, prevValue) arguments instead of getValue -- it's ambiguous as to if you're asking for the old or new value at this point in time for this component.");
      if (valueRef.current === Unset)
        tryEnsureValue();
      return valueRef.current === Unset ? void 0 : valueRef.current;
    }, []);
    y2(() => {
      tryEnsureValue();
    }, []);
    const setValue = _((arg, reason) => {
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
  function runImmediately(f3) {
    f3();
  }

  // ../dist/preact-extensions/use-stable-getter.js
  var Unset2 = Symbol("unset");
  var useStableGetter = function useStableGetter2(value) {
    const ref = A2(Unset2);
    useBeforeLayoutEffect(() => {
      ref.current = value;
    }, [value]);
    return _(() => {
      if (ref.current === Unset2) {
        throw new Error("Value retrieved from useStableGetter() cannot be called during render.");
      }
      return ref.current;
    }, []);
  };
  function useMemoObject(t3) {
    return T2(() => {
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
      return setIsStableGetter(_((...args) => {
        return currentCallbackGetter()(...args);
      }, []));
    } else {
      console.assert(noDeps.length === 0);
      return setIsStableGetter(_(fn, []));
    }
  };

  // ../dist/util/mode.js
  globalThis["process"] ??= {};
  globalThis["process"]["env"] ??= {};
  globalThis["process"]["env"]["NODE_ENV"] = "development";

  // ../dist/util/use-call-count.js
  window.requestIdleCallback ??= (callback) => {
    return setTimeout(() => {
      callback({ didTimeout: false, timeRemaining: () => {
        return 0;
      } });
    }, 5);
  };
  var timeoutHandle = null;
  var i3 = 0;
  function monitored(hook) {
    const h3 = hook;
    if (true) {
      return function(...args) {
        const r5 = A2(++i3);
        monitorCallCount(h3);
        const start = performance.mark(`${h3.name}-start-${r5.current}`);
        const ret = h3(...args);
        const end = performance.mark(`${h3.name}-end-${r5.current}`);
        performance.measure(h3.name, start.name, end.name);
        return ret;
      };
    } else {
      return hook;
    }
  }
  function monitorCallCount(hook) {
    if (false)
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
        const o3 = Object.entries(window._hookCallCount.callCounts).map(([hook2, counts]) => {
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
        console.table(o3, ["Hook", "Now", "Total"]);
        Object.entries(window._hookCallCount.callCounts).forEach(([, counts]) => {
          counts.moment = 0;
        });
        timeoutHandle = null;
      });
    }
  }
  var filterAll = false;
  var filters = /* @__PURE__ */ new Set();

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
    doMapThing((info, h3) => {
      info.listeners.add(h3);
      if (info.listener == null)
        target.addEventListener(type, info.listener = (e3) => info.listeners.forEach((fn) => fn(e3)), options);
    }, target, type, handler, options);
  }
  function removeFromMapThing(target, type, handler, options) {
    doMapThing((info, h3) => {
      info.listeners.delete(h3);
      if (info.listener == null)
        target.removeEventListener(type, info.listener = (e3) => info.listeners.forEach((fn) => fn(e3)), options);
    }, target, type, handler, options);
  }
  function useGlobalHandlerGrouped(target, type, handler, options) {
    let stableHandler = useStableCallback(handler ?? (() => {
    }));
    if (handler == null)
      stableHandler = null;
    h2(() => {
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
    h2(() => {
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
  var useBackdropDismiss = monitored(function useBackdropDismiss2({ backdropDismissParameters: { dismissBackdropActive: open, onDismissBackdrop: onCloseUnstable, ...void1 }, refElementPopupReturn: { getElement, ...void3 }, ...void2 }) {
    assertEmptyObject(void1);
    assertEmptyObject(void2);
    assertEmptyObject(void3);
    const getOpen = useStableGetter(open);
    const onClose = useStableGetter(onCloseUnstable);
    const onBackdropClick = _(function onBackdropClick2(e3) {
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
  var useEscapeDismiss = monitored(function useEscapeDismiss2({ escapeDismissParameters: { onDismissEscape: onClose, dismissEscapeActive: open, getDocument: unstableGetDocument, parentDepth, ...void1 }, refElementPopupReturn: { getElement, ...void2 } }) {
    assertEmptyObject(void1);
    assertEmptyObject(void2);
    const stableOnClose = useStableGetter(onClose);
    const getDocument4 = useStableCallback(unstableGetDocument);
    const getDepth = useStableGetter(parentDepth + 1);
    h2(() => {
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

  // ../dist/component-detail/dismissal/use-lost-focus-dismiss.js
  var useLostFocusDismiss = monitored(function useLostFocusDismiss2({ refElementPopupReturn: { getElement: getPopupElement, ...void3 }, refElementSourceReturn, lostFocusDismissParameters: { dismissLostFocusActive: open, onDismissLostFocus: onClose, ...void4 }, ...void1 }) {
    const { getElement: getSourceElement, ...void2 } = refElementSourceReturn ?? {};
    assertEmptyObject(void1);
    assertEmptyObject(void2);
    assertEmptyObject(void3);
    assertEmptyObject(void4);
    const stableOnClose = useStableGetter(onClose);
    const getOpen = useStableGetter(open);
    const onLastActiveElementChange = _((newElement, _prevElement, e3) => {
      const open2 = getOpen();
      const sourceElement = getSourceElement?.();
      const popupElement = getPopupElement();
      if (!(sourceElement?.contains(newElement) || popupElement?.contains(newElement))) {
        if (open2) {
          console.assert(e3 != null);
          stableOnClose()?.(e3);
        }
      }
    }, [getSourceElement]);
    return { activeElementParameters: { onLastActiveElementChange } };
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

  // ../dist/dom-helpers/use-merged-children.js
  var useMergedChildren = function useMergedChildren2(lhs, rhs) {
    if (lhs == null && rhs == null) {
      return void 0;
    } else if (lhs == null) {
      return rhs;
    } else if (rhs == null) {
      return lhs;
    } else {
      return c(a, {}, lhs, rhs);
    }
  };

  // ../dist/dom-helpers/use-merged-classes.js
  var useMergedClasses = function useMergedClasses2(...classes) {
    let classesSet = /* @__PURE__ */ new Set();
    for (let c3 of classes) {
      if (typeof c3 == "string" && c3.trim())
        classesSet.add(c3);
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
      if (true)
        console.assert(typeof rhs == "function" || "current" in rhs, "Unknown ref type found that was neither a RefCallback nor a RefObject");
      return rhs;
    } else if (rhs == null) {
      if (true)
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
    for (var i4 = 0; i4 < nodes.length; i4++) {
      if (nodes[i4].checked && nodes[i4].form === form) {
        return nodes[i4];
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
          for (var i4 = 0; i4 < parentNode.children.length; i4++) {
            var child = parentNode.children.item(i4);
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
    if (window._generate_setState_stacks) {
      try {
        throw new Error();
      } catch (e3) {
        return e3.stack;
      }
    }
    return void 0;
  }
  function useStack() {
    if (true) {
      const stack = T2(generateStack, []);
      const getStack = _(() => stack, []);
      return getStack;
    } else {
      return returnEmptyString;
    }
  }

  // ../dist/util/focus.js
  function focus(e3) {
    if (window.LOG_FOCUS_CHANGES === true) {
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

  // ../dist/timing/use-timeout.js
  var useTimeout = monitored(function useTimeout2({ timeout, callback, triggerIndex }) {
    const stableCallback = useStableCallback(() => {
      startTimeRef.current = null;
      callback();
    });
    const getTimeout = useStableGetter(timeout);
    const startTimeRef = A2(null);
    const timeoutIsNull = timeout == null;
    h2(() => {
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
    const getElapsedTime = _(() => {
      return +/* @__PURE__ */ new Date() - +(startTimeRef.current ?? /* @__PURE__ */ new Date());
    }, []);
    const getRemainingTime = _(() => {
      const timeout2 = getTimeout();
      return timeout2 == null ? null : Math.max(0, timeout2 - getElapsedTime());
    }, []);
    return { getElapsedTime, getRemainingTime };
  });

  // ../dist/util/use-tag-props.js
  var idIndex = 0;
  function useTagProps(props, tag) {
    if (window._generate_useTagProps_tags) {
      const [id] = p2(() => ++idIndex);
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
      return T2(() => {
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
  var useLinearNavigation = function useLinearNavigation2({ linearNavigationParameters: { getLowestIndex, getHighestIndex, isValidForLinearNavigation, navigatePastEnd, navigatePastStart, onNavigateLinear, arrowKeyDirection, disableHomeEndKeys, pageNavigationSize, ...void4 }, rovingTabIndexReturn: { getTabbableIndex, setTabbableIndex, ...void5 }, paginatedChildrenParameters: { paginationMax, paginationMin, ...void2 }, rearrangeableChildrenReturn: { indexDemangler, indexMangler, ...void3 }, ...void1 }) {
    let getPaginatedRange = useStableGetter(paginationMax == null || paginationMin == null ? null : paginationMax - paginationMin);
    assertEmptyObject(void1);
    assertEmptyObject(void2);
    assertEmptyObject(void3);
    assertEmptyObject(void4);
    assertEmptyObject(void5);
    useEnsureStability("useLinearNavigation", onNavigateLinear, isValidForLinearNavigation, indexDemangler, indexMangler);
    const navigateAbsolute = _((requestedIndexMangled, searchDirection, e3, fromUserInteraction, mode) => {
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
    const stableProps = A2(useTagProps({
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
      linearNavigationReturn: {},
      propsStable: stableProps.current
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

  // ../dist/preact-extensions/use-managed-children.js
  var useManagedChildren = monitored(function useManagedChildren2(parentParameters) {
    const { managedChildrenParameters: { onAfterChildLayoutEffect, onChildrenMountChange, onChildrenCountChange }, ...rest } = parentParameters;
    assertEmptyObject(rest);
    useEnsureStability("useManagedChildren", onAfterChildLayoutEffect, onChildrenMountChange, onChildrenCountChange);
    const getHighestIndex = _(() => {
      return managedChildrenArray.current.highestIndex;
    }, []);
    const getLowestIndex = _(() => {
      return managedChildrenArray.current.lowestIndex;
    }, []);
    const managedChildrenArray = A2({ arr: [], rec: {}, highestIndex: 0, lowestIndex: 0 });
    const forEachChild = _((f3) => {
      for (const child of managedChildrenArray.current.arr) {
        if (child) {
          if (f3(child) == "break")
            return;
        }
      }
      for (const field in managedChildrenArray.current.rec) {
        const child = managedChildrenArray.current.rec[field];
        if (child) {
          if (f3(child) == "break")
            return;
        }
      }
    }, []);
    const getManagedChildInfo = _((index) => {
      if (typeof index == "number")
        return managedChildrenArray.current.arr[index];
      else
        return managedChildrenArray.current.rec[index];
    }, []);
    const hasRemoteULEChildMounted = A2(null);
    const remoteULEChildMounted = _((index, mounted) => {
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
      _arraySlice: _(() => {
        let ret = managedChildrenArray.current.arr.slice();
        const max = getHighestIndex();
        for (let i4 = 0; i4 <= max; ++i4) {
          if (ret[i4] == null)
            ret[i4] = { index: i4 };
        }
        return ret;
      }, [])
    });
    const getChildren = _(() => managedChildren, []);
    return {
      context: useMemoObject({
        managedChildContext: useMemoObject({
          managedChildrenArray: managedChildrenArray.current,
          remoteULEChildMounted,
          //remoteULEChildChanged,
          getChildren
        })
      }),
      managedChildrenReturn: { getChildren }
    };
  });
  var useManagedChild = monitored(function useManagedChild2({ context, info }) {
    const { managedChildContext: { getChildren, managedChildrenArray, remoteULEChildMounted } } = context ?? { managedChildContext: {} };
    const index = info.index;
    y2(() => {
      if (managedChildrenArray == null)
        return;
      if (typeof index == "number") {
        managedChildrenArray.arr[index] = { ...info };
      } else {
        managedChildrenArray.rec[index] = { ...info };
      }
    });
    y2(() => {
      remoteULEChildMounted?.(index, true);
      return () => remoteULEChildMounted?.(index, false);
    }, [index]);
    return {
      managedChildReturn: { getChildren }
    };
  });
  function useChildrenFlag({ getChildren, initialIndex, closestFit, onClosestFit, onIndexChange, getAt, setAt, isValid }) {
    useEnsureStability("useChildrenFlag", onIndexChange, getAt, setAt, isValid);
    const [getCurrentIndex, setCurrentIndex] = usePassiveState(onIndexChange);
    const [getRequestedIndex, setRequestedIndex] = usePassiveState(null);
    const getClosestFit = _((requestedIndex) => {
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
    const reasonRef = A2(void 0);
    const changeIndex = _((arg, reason) => {
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
    y2(() => {
      changeIndex(initialIndex ?? null, reasonRef.current);
    }, []);
    return { changeIndex, reevaluateClosestFit, getCurrentIndex };
  }

  // ../dist/preact-extensions/use-state.js
  var useState = function useState2(initialState) {
    const getStack = useStack();
    const [state, setStateP] = p2(initialState);
    const ref = A2(state);
    const setState = A2((value) => {
      if (true) {
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
    const getState = _(() => {
      return ref.current;
    }, []);
    return [state, setState.current, getState];
  };

  // ../dist/component-detail/keyboard-navigation/use-roving-tabindex.js
  var useRovingTabIndex = monitored(function useRovingTabIndex2({ managedChildrenReturn: { getChildren }, rovingTabIndexParameters: { focusSelfParent: focusSelfParentUnstable, untabbable, untabbableBehavior, initiallyTabbedIndex, onTabbableIndexChange }, refElementReturn: { getElement }, ...void1 }) {
    const focusSelfParent = useStableCallback(focusSelfParentUnstable);
    untabbableBehavior ||= "focus-parent";
    const lastFocused = A2(null);
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
    const [getLastNonNullIndex, setLastNonNullIndex] = usePassiveState(null, _(() => initiallyTabbedIndex ?? 0, []));
    h2(() => {
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
    const getTabbableAt = _((child) => {
      return child.getLocallyTabbable();
    }, []);
    const setTabbableAt = _((child, t3) => {
      child.setLocallyTabbable(t3);
    }, []);
    const isTabbableValid = useStableCallback((child) => {
      return !child.untabbable;
    });
    const { changeIndex: changeTabbableIndex, getCurrentIndex: getTabbableIndex, reevaluateClosestFit } = useChildrenFlag({
      initialIndex: initiallyTabbedIndex ?? (untabbable ? null : 0),
      onIndexChange: useStableCallback((n3, p3, r5) => {
        if (!(n3 == null && untabbable) && n3 != getLastNonNullIndex())
          onTabbableIndexChange?.(n3, p3, r5);
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
    const focusSelf = _((force, reason) => {
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
      getInitiallyTabbedIndex: _(() => {
        return initiallyTabbedIndex ?? (untabbable ? null : 0);
      }, []),
      reevaluateClosestFit,
      getUntabbable: useStableGetter(untabbable),
      getUntabbableBehavior: useStableGetter(untabbableBehavior),
      giveParentFocusedElement: _((e3) => {
        lastFocused.current = e3;
      }, [])
    });
    return {
      managedChildrenParameters: { onChildrenMountChange: _(() => {
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
        onFocus: useStableCallback((e3) => {
          const parentElement = getElement();
          console.assert(!!parentElement);
          if (e3.target == getElement()) {
            if (!untabbable) {
              focusSelf(false, e3);
            }
          }
        })
      }, "data-roving-tab-index")
    };
  });
  var useRovingTabIndexChild = monitored(function useRovingTabIndexChild2({ info: { index, untabbable: iAmUntabbable, ...void2 }, context: { rovingTabIndexContext: { giveParentFocusedElement, getUntabbable: getParentIsUntabbable, getUntabbableBehavior, reevaluateClosestFit, setTabbableIndex, getInitiallyTabbedIndex, parentFocusSelf } }, refElementReturn: { getElement }, ...void3 }) {
    const [tabbable, setTabbable, getTabbable] = useState(getInitiallyTabbedIndex() === index);
    h2(() => {
      reevaluateClosestFit(void 0);
    }, [!!iAmUntabbable]);
    assertEmptyObject(void2);
    assertEmptyObject(void3);
    h2(() => {
      if (tabbable) {
        giveParentFocusedElement(getElement());
      }
    }, [tabbable]);
    return {
      hasCurrentFocusParameters: {
        onCurrentFocusedInnerChanged: useStableCallback((focused, _prevFocused, e3) => {
          if (focused) {
            const parentIsUntabbable = getParentIsUntabbable();
            const untabbableBehavior = getUntabbableBehavior();
            if (!parentIsUntabbable && !iAmUntabbable || untabbableBehavior != "focus-parent")
              setTabbableIndex(index, e3, false);
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
  });

  // ../dist/dom-helpers/use-text-content.js
  var useTextContent = monitored(function useTextContent2({ refElementReturn: { getElement }, textContentParameters: { getText, onTextContentChange } }) {
    const [getTextContent, setTextContent] = usePassiveState(onTextContentChange, returnNull, runImmediately);
    h2(() => {
      const element = getElement();
      if (element) {
        const textContent = getText(element);
        if (textContent) {
          setTextContent(textContent);
        }
      }
    });
    return { textContentReturn: { getTextContent } };
  });

  // ../dist/component-detail/keyboard-navigation/use-typeahead-navigation.js
  var useTypeaheadNavigation = monitored(function useTypeaheadNavigation2({ typeaheadNavigationParameters: { collator, typeaheadTimeout, noTypeahead, isValidForTypeaheadNavigation, onNavigateTypeahead, ...void3 }, rovingTabIndexReturn: { getTabbableIndex: getIndex, setTabbableIndex: setIndex, ...void1 }, ...void2 }) {
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
    const sortedTypeaheadInfo = A2([]);
    const [typeaheadStatus, setTypeaheadStatus] = useState("none");
    const [, setImeActive, getImeActive] = useState(false);
    const [nextTypeaheadChar, setNextTypeaheadChar] = useState(null);
    y2(() => {
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
    const propsStable = A2(useTagProps({
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
          const updateBestFit = (unsortedIndex) => {
            if (!isValidForTypeaheadNavigation(unsortedIndex))
              return;
            if (lowestUnsortedIndexAll == null || unsortedIndex < lowestUnsortedIndexAll) {
              lowestUnsortedIndexAll = unsortedIndex;
              lowestSortedIndexAll = i4;
            }
            if ((lowestUnsortedIndexNext == null || unsortedIndex < lowestUnsortedIndexNext) && unsortedIndex > (getIndex() ?? -Infinity)) {
              lowestUnsortedIndexNext = unsortedIndex;
              lowestSortedIndexNext = i4;
            }
          };
          let i4 = sortedTypeaheadIndex;
          while (i4 >= 0 && typeaheadComparator(currentTypeahead, sortedTypeaheadInfo.current[i4]) == 0) {
            updateBestFit(sortedTypeaheadInfo.current[i4].unsortedIndex);
            --i4;
          }
          i4 = sortedTypeaheadIndex;
          while (i4 < sortedTypeaheadInfo.current.length && typeaheadComparator(currentTypeahead, sortedTypeaheadInfo.current[i4]) == 0) {
            updateBestFit(sortedTypeaheadInfo.current[i4].unsortedIndex);
            ++i4;
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
  var useTypeaheadNavigationChild = monitored(function useTypeaheadNavigationChild2({ info: { index, ...void1 }, textContentParameters: { getText, ...void5 }, context: { typeaheadNavigationContext: { sortedTypeaheadInfo, insertingComparator, excludeSpace, ...void2 } }, refElementReturn: { getElement, ...void3 }, ...void4 }) {
    assertEmptyObject(void1);
    assertEmptyObject(void2);
    assertEmptyObject(void3);
    assertEmptyObject(void4);
    assertEmptyObject(void5);
    const { textContentReturn } = useTextContent({
      refElementReturn: { getElement },
      textContentParameters: {
        getText,
        onTextContentChange: _((text) => {
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
  var useListNavigation = monitored(function useListNavigation2({ linearNavigationParameters, typeaheadNavigationParameters, rovingTabIndexParameters, managedChildrenReturn, refElementReturn, paginatedChildrenParameters, rearrangeableChildrenReturn, ...void1 }) {
    const { props: propsRTI, rovingTabIndexReturn, managedChildrenParameters, context: contextRovingTabIndex, ...void2 } = useRovingTabIndex({ managedChildrenReturn, rovingTabIndexParameters, refElementReturn });
    const { propsStable: propsStableTN, typeaheadNavigationReturn, context: contextTypeahead, ...void3 } = useTypeaheadNavigation({ rovingTabIndexReturn, typeaheadNavigationParameters });
    const { propsStable: propsStableLN, linearNavigationReturn, ...void4 } = useLinearNavigation({ rovingTabIndexReturn, linearNavigationParameters, paginatedChildrenParameters, rearrangeableChildrenReturn });
    assertEmptyObject(void1);
    assertEmptyObject(void2);
    assertEmptyObject(void3);
    assertEmptyObject(void4);
    const p3 = useMergedProps(propsStableTN, propsStableLN);
    const propsStable = A2(p3);
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
  var useListNavigationChild = monitored(function useListNavigationChild2({ info: { index, untabbable, ...void1 }, context, refElementReturn, textContentParameters, ...void2 }) {
    const { props, ...rticr } = useRovingTabIndexChild({ context, info: { index, untabbable }, refElementReturn });
    const { ...tncr } = useTypeaheadNavigationChild({ refElementReturn, textContentParameters, context, info: { index } });
    assertEmptyObject(void1);
    assertEmptyObject(void2);
    return {
      props,
      ...tncr,
      ...rticr
    };
  });

  // ../dist/component-detail/keyboard-navigation/use-grid-navigation-partial.js
  var useGridNavigation = monitored(function useGridNavigation2({ gridNavigationParameters: { onTabbableColumnChange, initiallyTabbableColumn, ...void3 }, linearNavigationParameters, ...listNavigationParameters }) {
    const [getTabbableColumn, setTabbableColumn] = usePassiveState(onTabbableColumnChange, useStableCallback(() => {
      let t3 = initiallyTabbableColumn ?? 0;
      return { actual: t3, ideal: t3 };
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
  });
  var useGridNavigationRow = monitored(function useGridNavigationRow2({
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
    const { getTabbableColumn, setTabbableColumn, setTabbableRow } = contextFromParent.gridNavigationRowContext;
    const getIndex = useStableCallback(() => {
      return index;
    });
    const whenThisRowIsFocused = useStableCallback((e3) => {
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
          const e4 = child.getElement();
          child.focusSelf(e4);
        } else {
          focus(e3);
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
        onTabbableIndexChange: useStableCallback((v4, p3, r5) => {
          setTabbableColumn({ ideal: v4, actual: v4 }, r5);
          onTabbableIndexChange?.(v4, p3, r5);
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
    propsLN.tabIndex = propsLNC.tabIndex = -1;
    const props = useMergedProps(propsLN, propsLNC, {
      // Ensure that if the browser focuses the row for whatever reason, we transfer the focus to a child cell.
      onFocus: useStableCallback((e3) => whenThisRowIsFocused(e3.currentTarget))
    });
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
  });
  var useGridNavigationCell = monitored(function useGridNavigationCell2({ context: { gridNavigationCellContext: { getRowIndex, setTabbableRow, getTabbableColumn: _getCurrentColumn, setTabbableColumn, setTabbableCell, ...void4 }, rovingTabIndexContext, typeaheadNavigationContext, ...void5 }, info: { index, untabbable, ...void7 }, refElementReturn, textContentParameters, gridNavigationCellParameters: { colSpan, ...void6 }, ...void1 }) {
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
      props: useMergedProps(props, { onClick: (e3) => setTabbableColumn((prev) => ({ ideal: index, actual: prev?.actual ?? index }), e3) }),
      rovingTabIndexChildReturn,
      textContentReturn,
      pressParameters,
      hasCurrentFocusParameters: {
        onCurrentFocusedInnerChanged: useStableCallback((focused, prev, e3) => {
          ocfic1?.(focused, prev, e3);
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
      }
    };
  });

  // ../dist/component-detail/processed-children/use-paginated-children.js
  var usePaginatedChildren = monitored(function usePaginatedChildren2({ managedChildrenReturn: { getChildren }, rearrangeableChildrenReturn: { indexDemangler }, paginatedChildrenParameters: { paginationMax, paginationMin, childCount }, rovingTabIndexReturn: { getTabbableIndex, setTabbableIndex }, childrenHaveFocusReturn: { getAnyFocused } }) {
    const parentIsPaginated = paginationMin != null || paginationMax != null;
    const lastPagination = A2({ paginationMax: null, paginationMin: null });
    const refreshPagination = _((paginationMin2, paginationMax2) => {
      const childMax = getChildren().getHighestIndex() + 1;
      const childMin = getChildren().getLowestIndex();
      for (let i4 = childMin; i4 <= childMax; ++i4) {
        const visible = i4 >= (paginationMin2 ?? -Infinity) && i4 < (paginationMax2 ?? Infinity);
        getChildren().getAt(indexDemangler(i4))?.setPaginationVisible(visible);
        if (visible && (paginationMax2 != null || paginationMin2 != null))
          getChildren().getAt(indexDemangler(i4))?.setChildCountIfPaginated(getChildren().getHighestIndex() + 1);
      }
    }, [
      /* Must be empty */
    ]);
    h2(() => {
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
    const pmin = A2(paginationMin);
    const pmax = A2(paginationMax);
    pmin.current = paginationMin;
    pmax.current = paginationMax;
    const getDefaultPaginationVisible = _((i4) => {
      return i4 >= (pmin.current ?? -Infinity) && i4 < (pmax.current ?? Infinity);
    }, []);
    const paginatedChildContext = T2(() => ({
      parentIsPaginated,
      getDefaultPaginationVisible
    }), [parentIsPaginated]);
    const getPaginationMin = useStableGetter(paginationMin);
    const getPaginationMax = useStableGetter(paginationMax);
    y2(() => {
      const paginationMin2 = getPaginationMin();
      const paginationMax2 = getPaginationMax();
      const count = childCount ?? 0;
      if (paginationMax2 != null || paginationMin2 != null) {
        const min = paginationMin2 ?? 0;
        const max = paginationMax2 ?? count;
        for (let i4 = min; i4 < max; ++i4) {
          getChildren().getAt(i4)?.setChildCountIfPaginated(count);
        }
      }
    }, [childCount]);
    return {
      context: T2(() => ({ paginatedChildContext }), [paginatedChildContext]),
      paginatedChildrenReturn: { refreshPagination }
    };
  });
  var usePaginatedChild = monitored(function usePaginatedChild2({ info: { index }, context: { paginatedChildContext: { parentIsPaginated, getDefaultPaginationVisible } } }) {
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
  });

  // ../dist/preact-extensions/use-force-update.js
  var useForceUpdate = monitored(function useForceUpdate2() {
    const [, set] = p2(0);
    return A2(() => set((i4) => ++i4)).current;
  });

  // ../dist/component-detail/processed-children/use-rearrangeable-children.js
  function useCreateProcessedChildrenContext() {
    const sortRef = A2(null);
    const shuffleRef = A2(null);
    const reverseRef = A2(null);
    const rearrangeRef = A2(null);
    const indexManglerRef = A2(null);
    const indexDemanglerRef = A2(null);
    const indexMangler = useStableCallback((i4) => {
      return (indexManglerRef.current ?? identity_default)(i4);
    }, []);
    const indexDemangler = useStableCallback((i4) => {
      return (indexDemanglerRef.current ?? identity_default)(i4);
    }, []);
    const sort = useStableCallback((i4) => {
      return (sortRef.current ?? identity_default)(i4);
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
    const provideManglers = useStableCallback(({ indexDemangler: indexDemangler2, indexMangler: indexMangler2, reverse: reverse2, shuffle: shuffle3, sort: sort2 }) => {
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
      indexDemangler,
      indexMangler,
      rearrange,
      reverse,
      shuffle: shuffle2,
      sort
    };
  }
  var useRearrangeableChildren = monitored(function useRearrangeableChildren2({ rearrangeableChildrenParameters: { getIndex, onRearranged, compare: userCompare, children, adjust }, managedChildrenReturn: { getChildren }, context: { rearrangeableChildrenContext: { provideManglers } } }) {
    useEnsureStability("useRearrangeableChildren", getIndex);
    const mangleMap = A2(/* @__PURE__ */ new Map());
    const demangleMap = A2(/* @__PURE__ */ new Map());
    const indexMangler = _((n3) => mangleMap.current.get(n3) ?? n3, []);
    const indexDemangler = _((n3) => demangleMap.current.get(n3) ?? n3, []);
    const onRearrangedGetter = useStableGetter(onRearranged);
    const shuffle2 = _(() => {
      const managedRows = getChildren();
      const originalRows = managedRows._arraySlice();
      const shuffledRows = shuffle_default(originalRows);
      return rearrange(originalRows, shuffledRows);
    }, [
      /* Must remain stable */
    ]);
    const reverse = _(() => {
      const managedRows = getChildren();
      const originalRows = managedRows._arraySlice();
      const reversedRows = managedRows._arraySlice().reverse();
      return rearrange(originalRows, reversedRows);
    }, [
      /* Must remain stable */
    ]);
    const forceUpdateRef = A2(null);
    const rearrange = _((originalRows, sortedRows) => {
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
    const sort = _((direction) => {
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
      if (child) {
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
        return (adjust || identity_default)(c(child.type, { ...child.props, key: demangledIndex }), { mangledIndex, demangledIndex }) ?? null;
      return null;
    });
    y2(() => {
      provideManglers({
        indexDemangler,
        indexMangler,
        reverse,
        shuffle: shuffle2,
        sort
      });
    }, []);
    return {
      rearrangeableChildrenReturn: {
        indexMangler,
        indexDemangler,
        rearrange,
        shuffle: shuffle2,
        reverse,
        sort,
        children: sorted
      }
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

  // ../dist/component-detail/processed-children/use-staggered-children.js
  var useStaggeredChildren = monitored(function useStaggeredChildren2({ managedChildrenReturn: { getChildren }, staggeredChildrenParameters: { staggered, childCount }, refElementReturn: { getElement } }) {
    const [currentlyStaggering, setCurrentlyStaggering] = useState(staggered);
    const getTargetStaggerIndex = useStableGetter((childCount || 0) - 1);
    const timeoutHandle2 = A2(-1);
    const resetEmergencyTimeout = _(() => {
      if (timeoutHandle2.current != -1)
        clearTimeout(timeoutHandle2.current);
      timeoutHandle2.current = setTimeout(() => {
        timeoutHandle2.current = setTimeout(() => {
          timeoutHandle2.current = -1;
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
    h2(() => {
      if (timeoutHandle2.current == -1) {
        resetEmergencyTimeout();
        let current = getDisplayedStaggerIndex();
        let next = Math.min(childCount ?? 0, (current ?? 0) + 1);
        setDisplayedStaggerIndex(next);
      }
    }, [childCount]);
    const [getDisplayedStaggerIndex, setDisplayedStaggerIndex] = usePassiveState(_((newIndex, prevIndex) => {
      if (newIndex == null || !s3.current) {
        return;
      }
      setCurrentlyStaggering(newIndex < (getTargetStaggerIndex() ?? 0));
      queueMicrotask(() => {
        for (let i4 = (prevIndex ?? 0) - 1; i4 <= newIndex; ++i4) {
          getChildren().getAt(i4)?.setStaggeredVisible(true);
        }
      });
      resetEmergencyTimeout();
    }, [
      /* Must be empty */
    ]), returnNull);
    const parentIsStaggered = !!staggered;
    const getChildCount = useStableGetter(childCount);
    const childCallsThisToTellTheParentToMountTheNextOne = _((justMountedChildIndex) => {
      setDisplayedStaggerIndex((prevIndex) => {
        let next = Math.min(
          getTargetStaggerIndex() ?? 0,
          // Don't go higher than the highest child
          1 + Math.max(prevIndex ?? 0, justMountedChildIndex)
          // Go one higher than the child that just mounted itself or any previously mounted child (TODO: Is that last bit working as intended?)
        );
        let s4 = 0;
        while (next < (getChildCount() || 0) && getChildren().getAt(next)?.getStaggeredVisible()) {
          ++next;
          ++s4;
        }
        return next;
      });
    }, []);
    const s3 = A2(parentIsStaggered);
    s3.current = parentIsStaggered;
    const getDefaultStaggeredVisible = _((i4) => {
      if (s3.current) {
        const staggerIndex = getDisplayedStaggerIndex();
        if (staggerIndex == null)
          return false;
        return i4 < staggerIndex;
      } else {
        return true;
      }
    }, []);
    const intersectionObserver = A2(null);
    const elementToIndex = A2(/* @__PURE__ */ new Map());
    const setElementToIndexMap = _((index, element) => {
      elementToIndex.current.set(element, index);
    }, []);
    const getIntersectionObserver = _(() => intersectionObserver.current, []);
    const staggeredChildContext = T2(() => ({
      parentIsStaggered,
      childCallsThisToTellTheParentToMountTheNextOne,
      getDefaultStaggeredVisible,
      getIntersectionObserver,
      setElementToIndexMap
    }), [parentIsStaggered]);
    h2(() => {
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
      staggeredChildrenReturn: { stillStaggering: currentlyStaggering },
      context: T2(() => ({
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
    const becauseScreen = A2(false);
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
    const childUseEffect = _(() => {
      if (!becauseScreen.current && (parentIsStaggered && staggeredVisible)) {
        if (parentIsStaggered && staggeredVisible) {
          childCallsThisToTellTheParentToMountTheNextOne(index);
        } else if (!parentIsStaggered) {
          childCallsThisToTellTheParentToMountTheNextOne(index);
        }
      }
    }, [index, parentIsStaggered && staggeredVisible]);
    const e3 = A2(null);
    return {
      props: useTagProps(!parentIsStaggered ? {} : { "aria-busy": (!staggeredVisible).toString() }, "data-staggered-children-child"),
      staggeredChildReturn: { parentIsStaggered, hideBecauseStaggered: parentIsStaggered ? !staggeredVisible : false, childUseEffect },
      info: { setStaggeredVisible, getStaggeredVisible },
      refElementParameters: {
        onElementChange: useStableCallback((element) => {
          setElementToIndexMap(index, element);
          e3.current = element || e3.current;
          const io = getIntersectionObserver();
          if (e3.current) {
            io?.observe(e3.current);
          } else {
            io?.unobserve(e3.current);
          }
        })
      }
    };
  });

  // ../dist/component-detail/processed-children/use-processed-children.js
  var useProcessedChildren = monitored(function useProcessedChildren2({ rearrangeableChildrenParameters: { onRearranged, children: childrenUnsorted, ...rearrangeableChildrenParameters }, paginatedChildrenParameters, staggeredChildrenParameters, context, managedChildrenParameters }) {
    const childCount = childrenUnsorted.length;
    const { paginationMax, paginationMin } = paginatedChildrenParameters;
    const { staggered } = staggeredChildrenParameters;
    const { context: { managedChildContext }, managedChildrenReturn } = useManagedChildren({ managedChildrenParameters });
    const { rearrangeableChildrenReturn } = useRearrangeableChildren({
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
    const { paginatedChildrenReturn, paginatedChildrenReturn: { refreshPagination }, context: { paginatedChildContext } } = usePaginatedChildren({
      managedChildrenReturn: { getChildren: useStableCallback(() => managedChildContext.getChildren()) },
      rovingTabIndexReturn: context.processedChildrenContext,
      childrenHaveFocusReturn: context.processedChildrenContext,
      paginatedChildrenParameters: { paginationMax, paginationMin, childCount },
      rearrangeableChildrenReturn
    });
    const { context: { staggeredChildContext }, staggeredChildrenReturn } = useStaggeredChildren({
      managedChildrenReturn: { getChildren: useStableCallback(() => managedChildContext.getChildren()) },
      staggeredChildrenParameters: { staggered, childCount },
      refElementReturn: { getElement: context.processedChildrenContext.getElement }
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
  var useProcessedChild = monitored(function useProcessedChild2({ context, info: { index, ...uinfo } }) {
    const { paginatedChildContext, staggeredChildContext } = context;
    const { info: { setChildCountIfPaginated, setPaginationVisible }, paginatedChildReturn, props: propsPaginated } = usePaginatedChild({ context: { paginatedChildContext }, info: { index } });
    const { info: { setStaggeredVisible, getStaggeredVisible }, staggeredChildReturn, props: propsStaggered, refElementParameters } = useStaggeredChild({ context: { staggeredChildContext }, info: { index } });
    const { managedChildReturn } = useManagedChild({
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

  // ../dist/component-detail/selection/use-multi-selection.js
  function useMultiSelection({ multiSelectionParameters: { onSelectionChange, multiSelectionAriaPropName, multiSelectionMode, ...void3 }, managedChildrenReturn: { getChildren, ...void1 }, childrenHaveFocusReturn: { getAnyFocused, ...void4 }, ...void2 }) {
    const selectedIndices = A2(/* @__PURE__ */ new Set());
    const unselectedIndices = A2(/* @__PURE__ */ new Set());
    assertEmptyObject(void1);
    assertEmptyObject(void2);
    assertEmptyObject(void3);
    assertEmptyObject(void4);
    const startOfShiftSelect = A2(null);
    let shiftKeyHeld = A2(false);
    let ctrlKeyHeld = A2(false);
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
    let nextCtrlAIsUndo = A2(false);
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
          multiSelectionAriaPropName,
          multiSelectionMode,
          changeAllChildren,
          getCtrlKeyDown: _(() => ctrlKeyHeld.current, []),
          getShiftKeyDown: _(() => shiftKeyHeld.current, []),
          getAnyFocused
        })
      }),
      childrenHaveFocusParameters: { onCompositeFocusChange },
      multiSelectionReturn: {},
      propsStable: useMemoObject({})
    };
  }
  function useMultiSelectionChild({ info: { index, ...void4 }, multiSelectionChildParameters: { initiallyMultiSelected, onMultiSelectChange, multiSelectionDisabled, ...void1 }, context: { multiSelectionContext: { notifyParentOfChildSelectChange, multiSelectionAriaPropName, multiSelectionMode, doContiguousSelection, changeAllChildren, getCtrlKeyDown, getShiftKeyDown, getAnyFocused, ...void5 }, ...void3 }, ...void2 }) {
    const pressFreebie = A2(false);
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
    y2(() => {
      if (multiSelectIsEnabled) {
        notifyParentOfChildSelectChange(null, index, getLocalSelected(), void 0);
        return () => notifyParentOfChildSelectChange(null, index, void 0, getLocalSelected());
      }
    }, [index, multiSelectIsEnabled]);
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
      props: { [multiSelectionAriaPropName || "aria-selected"]: multiSelectionMode == "disabled" ? void 0 : localSelected ? "true" : "false" },
      info: {
        getMultiSelected: getLocalSelected,
        setSelectedFromParent,
        getMultiSelectionDisabled: useStableGetter(multiSelectionDisabled)
      }
    };
  }
  function useMultiSelectionChildDeclarative({ multiSelectionChildDeclarativeParameters: { onMultiSelectedChange, multiSelected, ...void3 }, multiSelectionChildReturn: { changeMultiSelected, ...void2 }, ...void1 }) {
    let s3 = multiSelected || false;
    let reasonRef = A2(void 0);
    h2(() => {
      changeMultiSelected(reasonRef.current, s3);
    }, [s3]);
    const omsc = useStableCallback((e3) => {
      reasonRef.current = e3;
      return onMultiSelectedChange?.(e3);
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

  // ../dist/component-detail/selection/use-single-selection.js
  var useSingleSelection = monitored(function useSingleSelection2({ managedChildrenReturn: { getChildren, ...void1 }, rovingTabIndexReturn: { setTabbableIndex, ...void2 }, singleSelectionParameters: { onSingleSelectedIndexChange: onSelectedIndexChange_U, initiallySingleSelectedIndex, singleSelectionAriaPropName, singleSelectionMode, ...void3 }, ...void4 }) {
    assertEmptyObject(void1);
    assertEmptyObject(void2);
    assertEmptyObject(void3);
    assertEmptyObject(void4);
    const onSingleSelectedIndexChange = useStableCallback(onSelectedIndexChange_U ?? noop_default);
    const getSelectedAt = _((m3) => {
      return m3.getSingleSelected();
    }, []);
    const setSelectedAt = _((m3, t3, newSelectedIndex, prevSelectedIndex) => {
      if (m3.untabbable) {
        console.assert(false);
      }
      const directionComparison = newSelectedIndex == m3.index ? prevSelectedIndex : newSelectedIndex;
      const direction = directionComparison == null ? null : m3.index - directionComparison;
      if (newSelectedIndex == null)
        console.assert(t3 == false);
      if (t3)
        console.assert(newSelectedIndex === m3.index);
      m3.setLocalSingleSelected(t3, direction);
    }, []);
    const isSelectedValid = _((m3) => {
      return !m3.untabbable;
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
  });
  var useSingleSelectionChild = monitored(function useSingleSelectionChild2({ singleSelectionChildParameters: { singleSelectionDisabled, ...void5 }, context: { singleSelectionContext: { getSingleSelectedIndex, onSingleSelectedIndexChange, singleSelectionAriaPropName: ariaPropName, singleSelectionMode, ...void1 }, ...void2 }, info: { index, untabbable, ...void3 }, ...void4 }) {
    assertEmptyObject(void1);
    assertEmptyObject(void2);
    assertEmptyObject(void3);
    assertEmptyObject(void4);
    assertEmptyObject(void5);
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
  });
  function useSingleSelectionDeclarative({ singleSelectionReturn: { changeSingleSelectedIndex }, singleSelectionDeclarativeParameters: { singleSelectedIndex, onSingleSelectedIndexChange } }) {
    let s3 = singleSelectedIndex ?? null;
    let reasonRef = A2(void 0);
    h2(() => {
      changeSingleSelectedIndex(s3, reasonRef.current);
    }, [s3]);
    const osic = _((e3) => {
      reasonRef.current = e3;
      return onSingleSelectedIndexChange?.(e3);
    }, [onSingleSelectedIndexChange]);
    return { singleSelectionParameters: { onSingleSelectedIndexChange: osic } };
  }

  // ../dist/component-detail/selection/use-selection.js
  function useSelection({ managedChildrenReturn, multiSelectionParameters, childrenHaveFocusReturn, rovingTabIndexReturn, singleSelectionParameters }) {
    const { childrenHaveFocusParameters: { onCompositeFocusChange: ocfc1, ...void3 }, context: contextSS, singleSelectionReturn, ...void1 } = useSingleSelection({ managedChildrenReturn, rovingTabIndexReturn, singleSelectionParameters });
    const { childrenHaveFocusParameters: { onCompositeFocusChange: ocfc2, ...void4 }, context: contextMS, multiSelectionReturn, propsStable, ...void2 } = useMultiSelection({ managedChildrenReturn, multiSelectionParameters, childrenHaveFocusReturn });
    assertEmptyObject(void1);
    assertEmptyObject(void2);
    assertEmptyObject(void3);
    assertEmptyObject(void4);
    return {
      propsStable,
      childrenHaveFocusParameters: { onCompositeFocusChange: useStableCallback((...a3) => {
        ocfc1(...a3);
        ocfc2(...a3);
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
      hasCurrentFocusParameters: { onCurrentFocusedInnerChanged: useStableCallback((...a3) => {
        ocfic1(...a3);
        ocfic2(...a3);
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
      pressParameters: { onPressSync: useStableCallback((...a3) => {
        opc1(...a3);
        opc2(...a3);
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

  // ../dist/dom-helpers/use-ref-element.js
  var useRefElement = monitored(function useRefElement2(args) {
    const nonElementWarn = A2(false);
    if (nonElementWarn.current) {
      nonElementWarn.current = false;
      console.assert(false, `useRefElement was used on a component that didn't forward its ref onto a DOM element, so it's attached to that component's VNode instead.`);
    }
    const { onElementChange, onMount, onUnmount } = args.refElementParameters || {};
    useEnsureStability("useRefElement", onElementChange, onMount, onUnmount);
    const handler = _((e3, prevValue) => {
      if (!(e3 == null || e3 instanceof Element)) {
        console.assert(e3 == null || e3 instanceof Element, `useRefElement was used on a component that didn't forward its ref onto a DOM element, so it's attached to that component's VNode instead.`);
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
    const propsStable = A2(useTagProps({ ref: setElement }, "data-use-ref-element"));
    return {
      propsStable: propsStable.current,
      refElementReturn: {
        getElement
      }
    };
  });

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
  var useActiveElement = monitored(function useActiveElement2({ activeElementParameters: { onActiveElementChange, onLastActiveElementChange, onWindowFocusedChange, getDocument: getDocument4 } }) {
    useEnsureStability("useActiveElement", onActiveElementChange, onLastActiveElementChange, onWindowFocusedChange, getDocument4);
    h2(() => {
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
  });

  // ../dist/component-detail/use-dismiss.js
  var useDismiss = monitored(function useDismiss2({ dismissParameters: { dismissActive, onDismiss, ...void3 }, backdropDismissParameters: { dismissBackdropActive, onDismissBackdrop, ...void6 }, lostFocusDismissParameters: { dismissLostFocusActive, onDismissLostFocus, ...void7 }, escapeDismissParameters: { dismissEscapeActive, onDismissEscape, parentDepth, ...void2 }, activeElementParameters: { getDocument: getDocument4, onActiveElementChange, onLastActiveElementChange: olaec1, onWindowFocusedChange, ...void5 }, ...void4 }) {
    const { refElementReturn: refElementSourceReturn, propsStable: propsStableSource } = useRefElement({ refElementParameters: {} });
    const { refElementReturn: refElementPopupReturn, propsStable: propsStablePopup } = useRefElement({ refElementParameters: {} });
    const void8 = useBackdropDismiss({
      refElementPopupReturn,
      backdropDismissParameters: {
        dismissBackdropActive: dismissBackdropActive && dismissActive,
        onDismissBackdrop: useStableCallback((e3) => {
          onDismissBackdrop?.(e3);
          onDismiss(e3, "backdrop");
        })
      }
    });
    const void9 = useEscapeDismiss({
      refElementPopupReturn,
      escapeDismissParameters: {
        dismissEscapeActive: dismissEscapeActive && dismissActive,
        getDocument: getDocument4,
        onDismissEscape: useStableCallback((e3) => {
          onDismissEscape?.(e3);
          onDismiss(e3, "escape");
        }),
        parentDepth
      }
    });
    const { activeElementParameters: { onLastActiveElementChange: olaec2, ...void1 } } = useLostFocusDismiss({
      lostFocusDismissParameters: {
        dismissLostFocusActive: dismissLostFocusActive && dismissActive,
        onDismissLostFocus: useStableCallback((e3) => {
          onDismissLostFocus?.(e3);
          onDismiss(e3, "lost-focus");
        })
      },
      refElementPopupReturn,
      refElementSourceReturn
    });
    const { activeElementReturn: { getActiveElement: _getActiveElement, getLastActiveElement: _getLastActiveElement, getWindowFocused: _getWindowFocused } } = useActiveElement({
      activeElementParameters: {
        onLastActiveElementChange: useStableCallback((a3, b3, r5) => {
          olaec2?.(a3, b3, r5);
          olaec1?.(a3, b3, r5);
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
        const i4 = this[_blockingElements].indexOf(element);
        if (i4 === -1) {
          return false;
        }
        this[_blockingElements].splice(i4, 1);
        if (i4 === this[_blockingElements].length) {
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
        let i4 = oldParents.length - 1;
        let j3 = newParents.length - 1;
        while (i4 > 0 && j3 > 0 && oldParents[i4] === newParents[j3]) {
          i4--;
          j3--;
        }
        if (oldParents[i4] !== newParents[j3]) {
          this[_swapInertedSibling](oldParents[i4], newParents[j3]);
        }
        i4 > 0 && this[_restoreInertedSiblings](oldParents.slice(0, i4));
        j3 > 0 && this[_inertSiblings](newParents.slice(0, j3), toSkip, null);
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
          for (let j3 = 0; j3 < children.length; j3++) {
            const sibling = children[j3];
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
          for (let i4 = 0; i4 < mutation.removedNodes.length; i4++) {
            const sibling = mutation.removedNodes[i4];
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
          for (let i4 = 0; i4 < mutation.addedNodes.length; i4++) {
            const sibling = mutation.addedNodes[i4];
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
        let i4;
        let j3;
        let nodes;
        const slots = shadowRoot.querySelectorAll("slot");
        if (slots.length && slots[0].assignedNodes) {
          for (i4 = 0; i4 < slots.length; i4++) {
            nodes = slots[i4].assignedNodes({
              flatten: true
            });
            for (j3 = 0; j3 < nodes.length; j3++) {
              if (nodes[j3].nodeType === Node.ELEMENT_NODE) {
                result.add(nodes[j3]);
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
      for (var i4 = 0; i4 < props.length; i4++) {
        var descriptor = props[i4];
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
          for (var i4 = 0; i4 < distributedNodes.length; i4++) {
            composedTreeWalk(distributedNodes[i4], callback, shadowRootAncestor);
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
  function r3(e3) {
    var t3, f3, n3 = "";
    if ("string" == typeof e3 || "number" == typeof e3)
      n3 += e3;
    else if ("object" == typeof e3)
      if (Array.isArray(e3))
        for (t3 = 0; t3 < e3.length; t3++)
          e3[t3] && (f3 = r3(e3[t3])) && (n3 && (n3 += " "), n3 += f3);
      else
        for (t3 in e3)
          e3[t3] && (n3 && (n3 += " "), n3 += t3);
    return n3;
  }
  function clsx() {
    for (var e3, t3, f3 = 0, n3 = ""; f3 < arguments.length; )
      (e3 = arguments[f3++]) && (t3 = r3(e3)) && (n3 && (n3 += " "), n3 += t3);
    return n3;
  }

  // ../dist/dom-helpers/use-document-class.js
  function getDocument(element) {
    return element?.ownerDocument ?? document ?? window.document ?? globalThis.document;
  }
  var useDocumentClass = monitored(function useDocumentClass2(className, active, element) {
    element ??= getDocument().documentElement;
    className = clsx(className);
    h2(() => {
      if (element) {
        if (active !== false) {
          element.classList.add(className);
          return () => element.classList.remove(className);
        }
      }
    }, [className, active, element]);
  });

  // ../dist/dom-helpers/use-blocking-element.js
  function blockingElements() {
    return getDocument().$blockingElements;
  }
  var useBlockingElement = monitored(function useBlockingElement2({ activeElementParameters: { getDocument: getDocument4, onActiveElementChange, onLastActiveElementChange, onWindowFocusedChange, ...void3 }, blockingElementParameters: { enabled, getTarget, ...void1 }, ...void2 }) {
    const stableGetTarget = useStableCallback(getTarget);
    useActiveElement({
      activeElementParameters: {
        getDocument: getDocument4,
        onActiveElementChange,
        onWindowFocusedChange,
        onLastActiveElementChange: useStableCallback((e3, prev, reason) => {
          onLastActiveElementChange?.(e3, prev, reason);
          if (e3) {
            if (enabled)
              setLastActiveWhenOpen(e3, reason);
            else
              setLastActiveWhenClosed(e3, reason);
          }
        })
      }
    });
    const [getTop, setTop] = usePassiveState(null, returnNull);
    const [getLastActiveWhenClosed, setLastActiveWhenClosed] = usePassiveState(null, returnNull);
    const [getLastActiveWhenOpen, setLastActiveWhenOpen] = usePassiveState(null, returnNull);
    y2(() => {
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
  });

  // ../dist/component-detail/use-focus-trap.js
  var useFocusTrap = monitored(function useFocusTrap2({ focusTrapParameters: { onlyMoveFocus, trapActive, focusPopup: focusSelfUnstable, focusOpener: focusOpenerUnstable }, activeElementParameters, refElementReturn }) {
    const focusSelf = useStableCallback(focusSelfUnstable);
    const focusOpener = useStableCallback(focusOpenerUnstable);
    h2(() => {
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
  var useGridNavigationSelection = monitored(function useGridNavigationSelection2({ gridNavigationParameters, linearNavigationParameters, rovingTabIndexParameters, managedChildrenReturn, typeaheadNavigationParameters, singleSelectionParameters, multiSelectionParameters, refElementReturn, paginatedChildrenParameters, rearrangeableChildrenReturn, childrenHaveFocusReturn, ...void2 }) {
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
  });
  var useGridNavigationSelectionRow = monitored(function useGridNavigationSelectionRow2({ info: mcp1, linearNavigationParameters, managedChildrenReturn, refElementReturn, rovingTabIndexParameters, textContentParameters, typeaheadNavigationParameters, context, singleSelectionChildParameters, multiSelectionChildParameters, ...void1 }) {
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
  });
  var useGridNavigationSelectionCell = monitored(function useGridNavigationSelectionCell2(p3) {
    return useGridNavigationCell(p3);
  });

  // ../dist/component-detail/use-list-navigation-selection.js
  var useListNavigationSelection = monitored(function useListNavigationSelection2({ linearNavigationParameters, rovingTabIndexParameters, typeaheadNavigationParameters, singleSelectionParameters, multiSelectionParameters, managedChildrenReturn, refElementReturn, paginatedChildrenParameters, rearrangeableChildrenReturn, childrenHaveFocusReturn, ...void3 }) {
    const { context: contextSS, propsStable, ...retSS } = useSelection({
      childrenHaveFocusReturn,
      rovingTabIndexReturn: { setTabbableIndex: useStableCallback((...a3) => {
        rovingTabIndexReturn.setTabbableIndex(...a3);
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
  });
  var useListNavigationSelectionChild = monitored(function useListNavigationSelectionChild2({ info: { index, untabbable, ...void2 }, context, refElementReturn, textContentParameters, singleSelectionChildParameters, multiSelectionChildParameters, ...void1 }) {
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
        onCurrentFocusedInnerChanged: useStableCallback((focused, previouslyFocused, e3) => {
          ocfic1?.(focused, previouslyFocused, e3);
          ocfic2?.(focused, previouslyFocused, e3);
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
  });

  // ../dist/observers/use-children-have-focus.js
  var useChildrenHaveFocus = monitored(function useChildrenHaveFocus2(args) {
    const { childrenHaveFocusParameters: { onCompositeFocusChange } } = args;
    const [getAnyFocused, setAnyFocused] = usePassiveState(onCompositeFocusChange, returnFalse, runImmediately);
    const [_getFocusCount, setFocusCount] = usePassiveState(useStableCallback((anyFocused, anyPreviouslyFocused, e3) => {
      console.assert(anyFocused >= 0 && anyFocused <= 1);
      setAnyFocused(!!(anyFocused && !anyPreviouslyFocused), e3);
    }), returnZero, setTimeout);
    return {
      childrenHaveFocusReturn: { getAnyFocused },
      context: useMemoObject({ childrenHaveFocusChildContext: useMemoObject({ setFocusCount }) })
    };
  });
  var useChildrenHaveFocusChild = monitored(function useChildrenHaveFocusChild2({ context: { childrenHaveFocusChildContext: { setFocusCount } } }) {
    return {
      hasCurrentFocusParameters: {
        onCurrentFocusedInnerChanged: useStableCallback((focused, prev, e3) => {
          if (focused) {
            setFocusCount((p3) => (p3 ?? 0) + 1, e3);
          } else if (!focused && prev) {
            setFocusCount((p3) => (p3 ?? 0) - 1, e3);
          }
        })
      }
    };
  });

  // ../dist/observers/use-has-current-focus.js
  var useHasCurrentFocus = monitored(function useHasCurrentFocus2(args) {
    const { hasCurrentFocusParameters: { onCurrentFocusedChanged, onCurrentFocusedInnerChanged }, refElementReturn: { getElement } } = args;
    useEnsureStability("useHasCurrentFocus", onCurrentFocusedChanged, onCurrentFocusedInnerChanged, getElement);
    const [getFocused, setFocused] = usePassiveState(onCurrentFocusedChanged, returnFalse, runImmediately);
    const [getFocusedInner, setFocusedInner] = usePassiveState(onCurrentFocusedInnerChanged, returnFalse, runImmediately);
    const onFocusIn = _((e3) => {
      setFocusedInner(true, e3);
      setFocused(e3.target == getElement(), e3);
    }, []);
    const onFocusOut = _((e3) => {
      setFocusedInner(false, e3);
      setFocused(false, e3);
    }, []);
    h2(() => {
      return () => {
        setFocused(false, void 0);
        setFocusedInner(false, void 0);
      };
    }, []);
    const propsStable = A2({
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

  // ../dist/component-use/use-grid-navigation-complete.js
  var useCompleteGridNavigation = monitored(function useCompleteGridNavigation2({ gridNavigationParameters, linearNavigationParameters, rovingTabIndexParameters, singleSelectionParameters, multiSelectionParameters, typeaheadNavigationParameters, paginatedChildrenParameters, refElementParameters, ...void1 }) {
    assertEmptyObject(void1);
    const getChildren = _(() => managedChildrenReturn.getChildren(), []);
    const getLowestChildIndex = _(() => getChildren().getLowestIndex(), []);
    const getHighestChildIndex = _(() => getChildren().getHighestIndex(), []);
    const isValidForNavigation = _((i4) => {
      const child = getChildren().getAt(i4);
      if (child == null)
        return false;
      if (child.untabbable)
        return false;
      return true;
    }, []);
    const { refElementReturn, propsStable, ...void2 } = useRefElement({ refElementParameters });
    const { context: contextProcessing, indexDemangler, indexMangler, rearrange, reverse, shuffle: shuffle2, sort } = useCreateProcessedChildrenContext();
    const getAnyFocused = useStableCallback(() => childrenHaveFocusReturn.getAnyFocused());
    const { childrenHaveFocusParameters, managedChildrenParameters, context: { gridNavigationRowContext, rovingTabIndexContext, singleSelectionContext, multiSelectionContext, typeaheadNavigationContext }, props, rovingTabIndexReturn, linearNavigationReturn, singleSelectionReturn, multiSelectionReturn, typeaheadNavigationReturn, ...void3 } = useGridNavigationSelection({
      gridNavigationParameters,
      singleSelectionParameters,
      multiSelectionParameters,
      paginatedChildrenParameters,
      refElementReturn,
      linearNavigationParameters: { getLowestIndex: getLowestChildIndex, getHighestIndex: getHighestChildIndex, isValidForLinearNavigation: isValidForNavigation, ...linearNavigationParameters },
      managedChildrenReturn: { getChildren },
      rovingTabIndexParameters: { untabbableBehavior: "focus-parent", ...rovingTabIndexParameters },
      typeaheadNavigationParameters: { isValidForTypeaheadNavigation: isValidForNavigation, ...typeaheadNavigationParameters },
      childrenHaveFocusReturn: { getAnyFocused },
      rearrangeableChildrenReturn: { indexDemangler, indexMangler }
    });
    const { context: { childrenHaveFocusChildContext }, childrenHaveFocusReturn } = useChildrenHaveFocus({ childrenHaveFocusParameters });
    const { context: { managedChildContext }, managedChildrenReturn } = useManagedChildren({ managedChildrenParameters });
    const { getTabbableIndex, setTabbableIndex } = rovingTabIndexReturn;
    const processedChildrenContext = useMemoObject({ getTabbableIndex, setTabbableIndex, getAnyFocused, getElement: refElementReturn.getElement });
    const c22 = useMemoObject({
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
      contextProcessing: c22
    });
    assertEmptyObject(void1);
    assertEmptyObject(void2);
    assertEmptyObject(void3);
    return {
      contextChildren: context,
      contextProcessing: c22,
      props: useMergedProps(props, propsStable),
      refElementReturn,
      managedChildrenReturn,
      rovingTabIndexReturn,
      childrenHaveFocusReturn,
      linearNavigationReturn,
      singleSelectionReturn,
      multiSelectionReturn,
      typeaheadNavigationReturn,
      rearrangeableChildrenReturn: { rearrange, reverse, shuffle: shuffle2, sort }
    };
  });
  var useCompleteGridNavigationRows = monitored(function useCompleteGridNavigationRows2({ context, paginatedChildrenParameters, rearrangeableChildrenParameters, staggeredChildrenParameters, managedChildrenParameters }) {
    const { context: contextRPS, paginatedChildrenReturn, rearrangeableChildrenReturn, staggeredChildrenReturn } = useProcessedChildren({
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
  var useCompleteGridNavigationRow = monitored(function useCompleteGridNavigationRow2({ info: { index, untabbable, ...customUserInfo }, context: contextIncomingForRowAsChildOfTable, textContentParameters, linearNavigationParameters, rovingTabIndexParameters, typeaheadNavigationParameters, hasCurrentFocusParameters: { onCurrentFocusedChanged: ocfc1, onCurrentFocusedInnerChanged: ocfic3, ...void5 }, singleSelectionChildParameters, multiSelectionChildParameters, ...void1 }) {
    const getChildren = _(() => managedChildrenReturn.getChildren(), []);
    const getHighestChildIndex = _(() => getChildren().getHighestIndex(), []);
    const getLowestChildIndex = _(() => getChildren().getLowestIndex(), []);
    const isValidForNavigation = _((i4) => {
      const child = getChildren().getAt(i4);
      if (child == null)
        return false;
      if (child.untabbable)
        return false;
      return true;
    }, []);
    const { refElementReturn, propsStable, ...void6 } = useRefElement({ refElementParameters: {} });
    const parameters = {
      rovingTabIndexParameters,
      typeaheadNavigationParameters: { isValidForTypeaheadNavigation: isValidForNavigation, ...typeaheadNavigationParameters },
      linearNavigationParameters: { isValidForLinearNavigation: isValidForNavigation, getHighestIndex: getHighestChildIndex, getLowestIndex: getLowestChildIndex, ...linearNavigationParameters },
      managedChildrenReturn: { getChildren },
      refElementReturn,
      context: contextIncomingForRowAsChildOfTable,
      info: { index, untabbable },
      textContentParameters,
      singleSelectionChildParameters,
      multiSelectionChildParameters
    };
    const { linearNavigationReturn, managedChildrenParameters, pressParameters, rovingTabIndexChildReturn, rovingTabIndexReturn, singleSelectionChildReturn, multiSelectionChildReturn, textContentReturn, typeaheadNavigationReturn, context: contextGNR, info: infoRowReturn, props: p3, hasCurrentFocusParameters: { onCurrentFocusedInnerChanged: ocfic1, ...void3 }, ...void2 } = useGridNavigationSelectionRow(parameters);
    const completeInfo = {
      getElement: refElementReturn.getElement,
      index,
      untabbable,
      ...infoRowReturn
    };
    const { context: contextMC, managedChildrenReturn } = useManagedChildren({ managedChildrenParameters });
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
    const props = useMergedProps(propsStable, p3, hasCurrentFocusReturn.propsStable);
    assertEmptyObject(void1);
    assertEmptyObject(void2);
    assertEmptyObject(void3);
    assertEmptyObject(void4);
    assertEmptyObject(void5);
    assertEmptyObject(void6);
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
  var useCompleteGridNavigationCell = monitored(function useCompleteGridNavigationCell2({ gridNavigationCellParameters, context, textContentParameters, info: { focusSelf, index, untabbable, ...customUserInfo }, ...void1 }) {
    const { refElementReturn, propsStable } = useRefElement({ refElementParameters: {} });
    const { hasCurrentFocusParameters, rovingTabIndexChildReturn, textContentReturn, pressParameters: { excludeSpace: es1 }, props: propsRti, info: info2, ...void2 } = useGridNavigationSelectionCell({
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
  });
  function useCompleteGridNavigationDeclarative({ singleSelectionDeclarativeParameters, singleSelectionParameters, ...normalGridNavParameters }) {
    const ret2 = useCompleteGridNavigation({
      singleSelectionParameters: {
        initiallySingleSelectedIndex: singleSelectionDeclarativeParameters.singleSelectedIndex,
        onSingleSelectedIndexChange: useStableCallback((...e3) => onSingleSelectedIndexChange?.(...e3)),
        ...singleSelectionParameters
      },
      ...normalGridNavParameters
    });
    const { singleSelectionParameters: { onSingleSelectedIndexChange } } = useSelectionDeclarative({
      singleSelectionDeclarativeParameters,
      singleSelectionReturn: ret2.singleSelectionReturn
    });
    return ret2;
  }

  // ../dist/component-use/use-list-navigation-complete.js
  var useCompleteListNavigation = monitored(function useCompleteListNavigation2({
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
    const getChildren = _(() => managedChildrenReturn.getChildren(), []);
    const getLowestIndex = _(() => getChildren().getLowestIndex(), []);
    const getHighestIndex = _(() => getChildren().getHighestIndex(), []);
    const isValidForNavigation = _((i4) => {
      const child = getChildren().getAt(i4);
      if (!child)
        return false;
      if (child.untabbable)
        return false;
      return true;
    }, []);
    const { propsStable: propsRef, refElementReturn } = useRefElement({ refElementParameters });
    const { context: contextProcessing, indexDemangler, indexMangler, rearrange, reverse, shuffle: shuffle2, sort } = useCreateProcessedChildrenContext();
    const { childrenHaveFocusParameters, managedChildrenParameters: { onChildrenMountChange, ...mcp1 }, context: { rovingTabIndexContext, singleSelectionContext, multiSelectionContext, typeaheadNavigationContext }, linearNavigationReturn, rovingTabIndexReturn, singleSelectionReturn, multiSelectionReturn, typeaheadNavigationReturn, props, ...void2 } = useListNavigationSelection({
      managedChildrenReturn: { getChildren },
      linearNavigationParameters: { getLowestIndex, getHighestIndex, isValidForLinearNavigation: isValidForNavigation, ...linearNavigationParameters },
      typeaheadNavigationParameters: { isValidForTypeaheadNavigation: isValidForNavigation, ...typeaheadNavigationParameters },
      rovingTabIndexParameters: { untabbableBehavior: "focus-parent", ...rovingTabIndexParameters },
      singleSelectionParameters,
      multiSelectionParameters,
      paginatedChildrenParameters,
      refElementReturn,
      childrenHaveFocusReturn: { getAnyFocused: useStableCallback(() => childrenHaveFocusReturn.getAnyFocused()) },
      rearrangeableChildrenReturn: { indexDemangler, indexMangler }
    });
    const { context: { childrenHaveFocusChildContext }, childrenHaveFocusReturn } = useChildrenHaveFocus({ childrenHaveFocusParameters });
    const mcr = useManagedChildren({
      managedChildrenParameters: {
        onChildrenMountChange,
        ...mcp1
      }
    });
    const { context: { managedChildContext: managedChildRTIContext }, managedChildrenReturn } = mcr;
    const { getTabbableIndex, setTabbableIndex } = rovingTabIndexReturn;
    const { getAnyFocused } = childrenHaveFocusReturn;
    const contextChildren = useMemoObject({
      childrenHaveFocusChildContext,
      rovingTabIndexContext,
      singleSelectionContext,
      multiSelectionContext,
      typeaheadNavigationContext,
      managedChildContext: managedChildRTIContext
    });
    assertEmptyObject(void1);
    assertEmptyObject(void2);
    const processedChildrenContext = useMemoObject({ getTabbableIndex, setTabbableIndex, getAnyFocused, getElement: refElementReturn.getElement });
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
      rearrangeableChildrenReturn: { reverse, shuffle: shuffle2, rearrange, sort }
    };
  });
  var useCompleteListNavigationChildren = monitored(function useCompleteListNavigationChildren2({ context, paginatedChildrenParameters, rearrangeableChildrenParameters, staggeredChildrenParameters, managedChildrenParameters }) {
    const { context: contextRPS, paginatedChildrenReturn, rearrangeableChildrenReturn, staggeredChildrenReturn } = useProcessedChildren({
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
  var useCompleteListNavigationChild = monitored(function useCompleteListNavigationChild2({
    info: { index, focusSelf, untabbable, ...customUserInfo },
    // The "...info" is empty if M is the same as UCLNCI<ChildElement>.
    textContentParameters,
    refElementParameters,
    hasCurrentFocusParameters: { onCurrentFocusedChanged, onCurrentFocusedInnerChanged: ocfic3, ...void7 },
    singleSelectionChildParameters,
    multiSelectionChildParameters,
    context: { managedChildContext, rovingTabIndexContext, singleSelectionContext, multiSelectionContext, typeaheadNavigationContext, childrenHaveFocusChildContext, ...void5 },
    ...void1
  }) {
    const { refElementReturn, propsStable, ...void6 } = useRefElement({ refElementParameters });
    const { hasCurrentFocusParameters: { onCurrentFocusedInnerChanged: ocfic1, ...void3 }, pressParameters: { excludeSpace, onPressSync, ...void2 }, textContentReturn, singleSelectionChildReturn, multiSelectionChildReturn, info: infoFromListNav, rovingTabIndexChildReturn, propsChild, propsTabbable, ...void4 } = useListNavigationSelectionChild({
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
      untabbable,
      ...infoFromListNav
    };
    const { managedChildReturn } = useManagedChild({ context: { managedChildContext }, info: { ...allStandardInfo, ...customUserInfo } });
    const { hasCurrentFocusParameters: { onCurrentFocusedInnerChanged: ocfic2 } } = useChildrenHaveFocusChild({ context: { childrenHaveFocusChildContext } });
    const onCurrentFocusedInnerChanged = useStableCallback((focused, prev, e3) => {
      ocfic1?.(focused, prev, e3);
      ocfic2?.(focused, prev, e3);
      ocfic3?.(focused, prev, e3);
    });
    const { hasCurrentFocusReturn } = useHasCurrentFocus({
      hasCurrentFocusParameters: {
        onCurrentFocusedInnerChanged,
        onCurrentFocusedChanged
      },
      refElementReturn
    });
    const props = useMergedProps(propsStable, hasCurrentFocusReturn.propsStable, propsChild);
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
      rovingTabIndexChildReturn
    };
  });
  function useCompleteListNavigationDeclarative({ singleSelectionParameters, singleSelectionDeclarativeParameters, ...rest }) {
    const ret = useCompleteListNavigation({
      singleSelectionParameters: {
        initiallySingleSelectedIndex: singleSelectionDeclarativeParameters.singleSelectedIndex,
        // Needs to be a (stable) callback because of declaration order
        onSingleSelectedIndexChange: useStableCallback((...e3) => onSingleSelectedIndexChange?.(...e3)),
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
        onMultiSelectChange: useStableCallback((e3) => {
          onMultiSelectChange(e3);
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
  var useModal = monitored(function useModal2({ dismissParameters: { dismissActive, onDismiss, ...void2 }, escapeDismissParameters: { dismissEscapeActive, onDismissEscape, parentDepth, ...void3 }, focusTrapParameters: { trapActive, ...focusTrapParameters }, activeElementParameters: { getDocument: getDocument4, onActiveElementChange, onLastActiveElementChange, onWindowFocusedChange, ...void4 }, backdropDismissParameters: { dismissBackdropActive, onDismissBackdrop, ...void5 }, lostFocusDismissParameters: { dismissLostFocusActive, onDismissLostFocus, ...void6 }, refElementParameters: { onElementChange, onMount, onUnmount, ...void7 }, modalParameters: { active: modalActive, ...void8 }, ...void1 }) {
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
  });

  // ../node_modules/.pnpm/github.com+mwszekely+async-to-sync@624c049a849d0a02039c1ec14f78617394daabce/node_modules/async-to-sync/dist/index.js
  function isPromise(p3) {
    return p3 instanceof Promise;
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
    const incrementCallCount = _(() => {
      setRunCount((c3) => c3 + 1);
    }, []);
    const incrementResolveCount = _(() => {
      setResolveCount((c3) => c3 + 1);
    }, []);
    const incrementRejectCount = _(() => {
      setRejectCount((c3) => c3 + 1);
    }, []);
    const incrementFinallyCount = _(() => {
      setSettleCount((c3) => c3 + 1);
    }, []);
    let { throttle, debounce: debounce2, capture: captureUnstable } = options ?? {};
    const captureStable = useStableCallback(captureUnstable ?? identityCapture);
    const asyncHandlerStable = useStableCallback(asyncHandler ?? identity_default);
    const { flushSyncDebounce, syncOutput, cancelSyncDebounce } = T2(() => {
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
    h2(() => {
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
  document.addEventListener("click", (e3) => {
    if (justHandledManualClickEvent) {
      justHandledManualClickEvent = false;
      manualClickTimeout1 != null && clearTimeout(manualClickTimeout1);
      manualClickTimeout2 != null && clearTimeout(manualClickTimeout2);
      e3.preventDefault();
      e3.stopPropagation();
    }
  }, { capture: true });
  var usePress = monitored(function usePress2(args) {
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
    const onTouchMove = _((e3) => {
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
      for (const [x3, y3] of offsets) {
        const elementAtTouch = document.elementFromPoint((touch?.clientX ?? 0) + x3, (touch?.clientY ?? 0) + y3);
        hoveringAtAnyPoint ||= element?.contains(elementAtTouch) ?? false;
      }
      setIsPressing(hoveringAtAnyPoint && getPointerDownStartedHere(), e3);
      setHovering(hoveringAtAnyPoint);
    }, []);
    const onTouchEnd = _((e3) => {
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
    const onPointerUp = _((e3) => {
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
    const onPointerEnter = _((_e) => {
      pressLog("pointerenter", _e);
      setHovering(true);
    }, []);
    const onPointerLeave = _((_e) => {
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
    const p3 = supportsPointerEvents();
    return {
      pressReturn: {
        pressing: pointerDownStartedHere && hovering || waitingForSpaceUp || false,
        getIsPressing,
        longPress
      },
      props: {
        onKeyDown,
        onKeyUp,
        onTouchStart: !hasPressEvent ? void 0 : !p3 ? onTouchStart : void 0,
        onTouchCancel: !hasPressEvent ? void 0 : !p3 ? onTouchEnd : void 0,
        onTouchMove: !hasPressEvent ? void 0 : !p3 ? onTouchMove : void 0,
        onTouchEnd: !hasPressEvent ? void 0 : !p3 ? onTouchEnd : void 0,
        onPointerDown: !hasPressEvent ? void 0 : p3 ? onPointerDown : void 0,
        onPointerCancel: !hasPressEvent ? void 0 : p3 ? onPointerDown : void 0,
        onPointerMove: !pointerDownStartedHere || !hasPressEvent ? void 0 : p3 ? onPointerMove : void 0,
        onPointerUp: !hasPressEvent ? void 0 : p3 ? onPointerUp : void 0,
        onPointerEnter: !hasPressEvent ? void 0 : p3 ? onPointerEnter : void 0,
        onPointerLeave: !hasPressEvent ? void 0 : p3 ? onPointerLeave : void 0,
        [onfocusout]: onFocusOut,
        onClick
      }
    };
  });
  var pulse = "vibrate" in navigator && navigator.vibrate instanceof Function ? () => navigator.vibrate(10) : () => {
  };

  // ../dist/component-use/use-random-id.js
  var useRandomId = monitored(function useRandomId2({ randomIdParameters: { prefix, otherReferencerProp } }) {
    const id = prefix + E2();
    useEnsureStability("useRandomId", prefix, id);
    const referencerElementProps = A2(otherReferencerProp == null ? {} : { [otherReferencerProp]: id });
    const sourceElementProps = A2({ id });
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
    const dropPromisesRef = A2([]);
    const [currentPromiseIndex, setCurrentPromiseIndex, getCurrentPromiseIndex] = useState(-1);
    const [promiseCount, setPromiseCount, getPromiseCount] = useState(0);
    h2(() => {
      const currentPromiseIndex2 = getCurrentPromiseIndex();
      const promiseCount2 = getPromiseCount();
      if (promiseCount2 > 0) {
        if (currentPromiseIndex2 + 1 < promiseCount2) {
          setCurrentPromiseIndex((i4) => ++i4);
        }
      }
    }, [promiseCount]);
    h2(() => {
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
            setCurrentPromiseIndex((i4) => ++i4);
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
              reader.onload = (_2) => {
                resolve();
                const data = reader.result;
                dropFile.push({ data, name: file.name, type: file.type, size: data.byteLength, lastModified: file.lastModified });
              };
              reader.onerror = (_2) => {
                reject(new DroppableFileError(file.name, reader.error));
              };
              reader.onabort = (_2) => {
                reject(new DroppableFileError(file.name, reader.error));
              };
              reader.readAsArrayBuffer(file);
            }));
            dropFile.push();
          }
        }
      }
      dropPromisesRef.current.push(Promise.all(allPromises).then(() => {
        setPromiseCount((i4) => ++i4);
        setDropError(null);
        return {
          strings: dropData,
          files: dropFile
        };
      }).catch((ex) => {
        debugger;
        setPromiseCount((i4) => ++i4);
        setDropError(ex);
        return null;
      }));
    });
    const propsStable = A2({ onDragEnter, onDragLeave, onDragOver, onDrop });
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
    h2(() => {
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
  var templateElement = null;
  function htmlToElement(parent, html) {
    const document2 = parent.ownerDocument;
    templateElement ??= document2.createElement("template");
    templateElement.innerHTML = html.trim();
    return templateElement.content.firstChild;
  }
  var ImperativeElement = x2(k3(ImperativeElementU));
  var useImperativeProps = monitored(function useImperativeProps2({ refElementReturn: { getElement } }) {
    const currentImperativeProps = A2({ className: /* @__PURE__ */ new Set(), style: {}, children: null, html: null, others: {} });
    const hasClass = _((cls) => {
      return currentImperativeProps.current.className.has(cls);
    }, []);
    const setClass = _((cls, enabled) => {
      if (hasClass(cls) == !enabled) {
        getElement()?.classList[enabled ? "add" : "remove"](cls);
        currentImperativeProps.current.className[enabled ? "add" : "delete"](cls);
      }
    }, []);
    const setStyle = _((prop, value) => {
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
    const setChildren = _((children) => {
      let e3 = getElement();
      if (e3 && currentImperativeProps.current.children != children) {
        currentImperativeProps.current.children = children;
        currentImperativeProps.current.html = null;
        e3.textContent = children;
      }
    }, []);
    const dangerouslySetInnerHTML = _((children) => {
      let e3 = getElement();
      if (e3 && currentImperativeProps.current.html != children) {
        currentImperativeProps.current.children = null;
        currentImperativeProps.current.html = children;
        e3.innerHTML = children;
      }
    }, []);
    const dangerouslyAppendHTML = _((children) => {
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
    const getAttribute = _((prop) => {
      return currentImperativeProps.current.others[prop];
    }, []);
    const setAttribute = _((prop, value) => {
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
    const setEventHandler = _((type, handler, options) => {
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
      imperativePropsReturn: A2({
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
  });
  function ImperativeElementU({ tag: Tag, handle, ...props }, ref) {
    const { propsStable, refElementReturn } = useRefElement({ refElementParameters: {} });
    const { props: imperativeProps, imperativePropsReturn: imperativeHandle } = useImperativeProps({ refElementReturn });
    F2(handle, () => imperativeHandle);
    return c(Tag, useMergedProps(propsStable, imperativeProps, props, { ref }));
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
    const element = T2(() => {
      return target == null ? null : typeof target == "string" ? document.getElementById(target) : target;
    }, [target]);
    const children = !element ? null : z2(c(PortalChildren, { setPushChild, setUpdateChild, setRemoveChild }), element);
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
    const pushChild = _((child) => {
      const randomKey = generateRandomId();
      let index = getChildren().length;
      setChildren((prev) => [...prev, I(child, { key: randomKey, index })]);
      return index;
    }, []);
    const updateChild = _((index, child) => {
      const key = getChildren()[index]?.key;
      console.assert(!!key);
      if (key) {
        setChildren((prev) => {
          let newChildren = prev.slice();
          newChildren.splice(index, 1, I(child, { key, index }));
          return newChildren;
        });
        return index;
      }
    }, []);
    const removeChild = _((index) => {
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
    y2(() => {
      setPushChild((_2) => pushChild);
    }, [pushChild]);
    y2(() => {
      setUpdateChild((_2) => updateChild);
    }, [updateChild]);
    y2(() => {
      setRemoveChild((_2) => removeChild);
    }, [removeChild]);
    return c(a, {}, children);
  }

  // ../dist/observers/use-element-size.js
  var useElementSize = monitored(function useElementSize2({ elementSizeParameters: { getObserveBox, onSizeChange }, refElementParameters }) {
    const { onElementChange, onMount, onUnmount } = refElementParameters || {};
    useEnsureStability("useElementSize", getObserveBox, onSizeChange, onElementChange, onMount, onUnmount);
    const [getSize, setSize] = usePassiveState(onSizeChange, returnNull, runImmediately);
    const currentObserveBox = A2(void 0);
    const needANewObserver = _((element, observeBox) => {
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
    const { refElementReturn, ...rest } = useRefElement({
      refElementParameters: {
        onElementChange: _((e3, p3, r5) => {
          needANewObserver(e3, getObserveBox?.());
          onElementChange?.(e3, p3, r5);
        }, []),
        onMount,
        onUnmount
      }
    });
    const { getElement } = refElementReturn;
    h2(() => {
      if (getObserveBox) {
        if (currentObserveBox.current !== getObserveBox())
          needANewObserver(getElement(), getObserveBox());
      }
    });
    return {
      elementSizeReturn: { getSize },
      refElementReturn,
      ...rest
    };
  });

  // ../dist/observers/use-has-last-focus.js
  var useHasLastFocus = monitored(function useHasLastFocus2(args) {
    const { refElementReturn: { getElement }, activeElementParameters: { onLastActiveElementChange, ...activeElementParameters }, hasLastFocusParameters: { onLastFocusedChanged, onLastFocusedInnerChanged, ...void1 } } = args;
    assertEmptyObject(void1);
    useEnsureStability("useHasFocus", onLastFocusedChanged, onLastFocusedInnerChanged);
    const [getLastFocused, setLastFocused] = usePassiveState(onLastFocusedChanged, returnFalse, runImmediately);
    const [getLastFocusedInner, setLastFocusedInner] = usePassiveState(onLastFocusedInnerChanged, returnFalse, runImmediately);
    const { activeElementReturn } = useActiveElement({
      activeElementParameters: {
        onLastActiveElementChange: _((lastActiveElement, prevLastActiveElement, e3) => {
          const selfElement = getElement();
          const focused = selfElement != null && selfElement == lastActiveElement;
          const focusedInner = !!selfElement?.contains(lastActiveElement);
          setLastFocused(focused, e3);
          setLastFocusedInner(focusedInner, e3);
          onLastActiveElementChange?.(lastActiveElement, prevLastActiveElement, e3);
        }, []),
        ...activeElementParameters
      }
    });
    h2(() => {
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
  });

  // ../dist/observers/use-logical-direction.js
  function capitalize(str) {
    return str[0].toUpperCase() + str.substring(1);
  }
  var useLogicalDirection = monitored(function useLogicalDirection2({}) {
    const getLogicalDirectionInfo = _((computedStyles) => {
      if (computedStyles) {
        const w4 = computedStyles.writingMode;
        let d3 = computedStyles.direction;
        const t3 = computedStyles.textOrientation;
        if (t3 == "upright")
          d3 = "ltr";
        return { ...WritingModes[w4 || "horizontal-tb"][d3 || "ltr"] };
      }
      return null;
    }, []);
    const convertToLogicalOrientation = _((computedStyles, elementOrientation, direction) => {
      direction ??= getLogicalDirectionInfo(computedStyles);
      if (direction?.inlineOrientation === elementOrientation)
        return "inline";
      return "block";
    }, []);
    const convertToPhysicalSide = _((computedStyles, side, direction) => {
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
    const convertToLogicalSide = _((computedStyles, side, direction) => {
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
    const convertToPhysicalOrientation = _((computedStyles, elementOrientation, direction) => {
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
    const convertElementSize = _((computedStyles, elementSize, direction) => {
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
        const f3 = getPhysicalLeftTop(blockDirection);
        const f4 = getPhysicalRightBottom(blockDirection);
        const clientInlineInset = elementSize[`client${capitalize(f1)}`] + (!f22 ? 0 : elementSize[`client${capitalize(f22)}`]);
        const scrollInlineInset = elementSize[`scroll${capitalize(f1)}`] + (!f22 ? 0 : elementSize[`scroll${capitalize(f22)}`]);
        const offsetInlineInset = elementSize[`offset${capitalize(f1)}`] == void 0 ? void 0 : elementSize[`offset${capitalize(f1)}`] + (!f22 ? 0 : elementSize[`offset${capitalize(f22)}`]);
        const clientBlockInset = elementSize[`client${capitalize(f3)}`] + (!f4 ? 0 : elementSize[`client${capitalize(f4)}`]);
        const scrollBlockInset = elementSize[`scroll${capitalize(f3)}`] + (!f4 ? 0 : elementSize[`scroll${capitalize(f4)}`]);
        const offsetBlockInset = elementSize[`offset${capitalize(f3)}`] == void 0 ? void 0 : elementSize[`offset${capitalize(f3)}`] + (!f4 ? 0 : elementSize[`offset${capitalize(f4)}`]);
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
    const queryList = A2();
    const [matches2, setMatches, getMatches] = useState(defaultGuess ?? null);
    console.assert(!query || query.startsWith("("));
    y2(() => {
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
  var useMutationObserver = monitored(function useMutationObserver2({ refElementParameters, mutationObserverParameters: { attributeFilter, subtree, onChildList, characterDataOldValue, onCharacterData, onAttributes, attributeOldValue } }) {
    const { onElementChange, ...rest } = refElementParameters || {};
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
    const onNeedMutationObserverReset = _((element) => {
      if (element) {
        queueMicrotask(() => {
          setMo(new MutationObserver((a3) => {
            for (const mutation of a3) {
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
    h2(() => {
      onNeedMutationObserverReset(getElement());
    }, [attributeKey, attributeOldValue, characterDataOldValue, subtree]);
    const { refElementReturn, propsStable } = useRefElement({
      refElementParameters: {
        onElementChange: useStableCallback((e3, p3, r5) => {
          onElementChange?.(e3, p3, r5);
          onNeedMutationObserverReset(e3);
        }),
        ...rest
      }
    });
    const { getElement } = refElementReturn;
    return {
      refElementReturn,
      propsStable
    };
  });

  // ../dist/observers/use-url.js
  var useUrl = monitored(function useUrl2(onUrlChange) {
    const [getUrl, setUrl] = usePassiveState(useStableCallback(onUrlChange), _(() => window.location.toString(), []));
    useGlobalHandler(window, "hashchange", (e3) => {
      setUrl(window.location.toString(), e3);
    });
    useGlobalHandler(window, "popstate", (e3) => {
      console.assert(window.location.toString() === document.location.toString());
      setUrl(window.location.toString(), e3);
    });
    return [getUrl, _((newUrlOrSetter, action) => {
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
    h2(syncHandler, inputs);
    return rest;
  });

  // ../dist/preact-extensions/use-effect-debug.js
  var useEffectDebug = monitored(function useEffectDebug2(effect, inputs, impl = h2) {
    const prevInputs = A2(void 0);
    const effect2 = () => {
      const changes = [];
      if (inputs && prevInputs.current) {
        for (let i4 = 0; i4 < Math.max(prevInputs.current.length, inputs.length); ++i4) {
          if (prevInputs.current[i4] != inputs[i4])
            changes[i4] = { from: prevInputs.current[i4], to: inputs[i4] };
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
    return useEffectDebug(effect, inputs, y2);
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
    y2(() => {
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

  // ../node_modules/.pnpm/preact@10.13.2/node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js
  var n2 = 0;
  function r4(r5, t3, e3, l3, i4, p3) {
    let s3, _2, f3 = {};
    for (_2 in t3)
      "ref" == _2 ? s3 = t3[_2] : f3[_2] = t3[_2];
    const c3 = { type: r5, props: f3, key: e3, ref: s3, o: null, t: null, l: 0, i: null, p: void 0, _: null, u: null, constructor: void 0, m: --n2, h: i4, j: p3 };
    if ("function" == typeof r5 && (s3 = r5.defaultProps))
      for (_2 in s3)
        void 0 === f3[_2] && (f3[_2] = s3[_2]);
    return i.vnode && i.vnode(c3), c3;
  }

  // ../dist/timing/use-animation-frame.js
  var SharedAnimationFrameContext = V(null);
  var useAnimationFrame = monitored(function useAnimationFrame2({ callback }) {
    const stableCallback = useStableCallback(callback ?? noop_default);
    const hasCallback = callback != null;
    const sharedAnimationFrameContext = g2(SharedAnimationFrameContext);
    h2(() => {
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
    h2(() => {
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

  // demos/use-grid.tsx
  var RandomWords = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.".split(" ");
  var SortableColumnContext = V(null);
  var SetSortableColumnContext = V(null);
  var GetSortableColumnContext = V(null);
  var ListChildrenContext = V(null);
  var ListChildContext = V(null);
  var DemoUseGrid = x2(() => {
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
        onSingleSelectedIndexChange: (e3) => setSelectedRow(e3[EventDetail].selectedIndex)
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
      multiSelectionReturn: {
        // Nothing, actually
      },
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
        shuffle: shuffle2,
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
    return /* @__PURE__ */ r4("div", { class: "demo", children: [
      /* @__PURE__ */ r4("h2", { children: "useGridNavigationComplete" }),
      /* @__PURE__ */ r4("p", { children: [
        "Like ",
        /* @__PURE__ */ r4("code", { children: "useCompleteListNavigation" }),
        " but for 2D navigation. Cells can span multiple columns. Rows can be filtered, sorted, and arbitrarily re-arranged."
      ] }),
      /* @__PURE__ */ r4("div", { children: [
        "Current row: ",
        tabbableRow
      ] }),
      /* @__PURE__ */ r4("div", { children: [
        "Current column: ",
        tabbableColumn?.actual,
        tabbableColumn?.ideal != tabbableColumn?.actual ? ` (wanted: ${tabbableColumn?.ideal})` : ""
      ] }),
      /* @__PURE__ */ r4("table", { ...{ border: "2" }, style: { whiteSpace: "nowrap" }, children: [
        /* @__PURE__ */ r4("thead", { children: /* @__PURE__ */ r4("tr", { children: [
          /* @__PURE__ */ r4("th", { children: "Row is tabbable?" }),
          /* @__PURE__ */ r4("th", { children: "Column 1" }),
          /* @__PURE__ */ r4("th", { children: "Column 2" }),
          /* @__PURE__ */ r4("th", { children: "Column 3" })
        ] }) }),
        /* @__PURE__ */ r4(SortableColumnContext.Provider, { value: sortableColumn, children: /* @__PURE__ */ r4(GetSortableColumnContext.Provider, { value: getSortableColumn, children: /* @__PURE__ */ r4(SetSortableColumnContext.Provider, { value: setSortableColumn, children: /* @__PURE__ */ r4(GridRowContext.Provider, { value: contextChildren, children: /* @__PURE__ */ r4(ListChildrenContext.Provider, { value: contextProcessing, children: /* @__PURE__ */ r4("tbody", { ...props, children: /* @__PURE__ */ r4(DemoUseRovingTabIndexChildren, { count: 100, min: null, max: null, staggered: true }) }) }) }) }) }) })
      ] })
    ] });
  });
  var DemoUseRovingTabIndexChildren = x2(monitored(function DemoUseRovingTabIndexChildren2({ count, max, min, staggered }) {
    const {
      context,
      paginatedChildrenReturn,
      rearrangeableChildrenReturn,
      staggeredChildrenReturn
    } = useCompleteGridNavigationRows({
      paginatedChildrenParameters: { paginationMax: max, paginationMin: min },
      rearrangeableChildrenParameters: {
        getIndex: _((a3) => a3.props.index, []),
        onRearranged: null,
        compare: null,
        adjust: null,
        children: T2(() => Array.from(function* () {
          for (let i4 = 0; i4 < count; ++i4) {
            yield /* @__PURE__ */ r4(DemoUseGridRowOuter, { index: i4 }, i4);
          }
        }()), [count])
      },
      managedChildrenParameters: {},
      staggeredChildrenParameters: { staggered },
      context: g2(ListChildrenContext)
    });
    return /* @__PURE__ */ r4(ListChildContext.Provider, { value: context, children: rearrangeableChildrenReturn.children });
  }));
  var GridRowContext = V(null);
  var GridCellContext = V(null);
  var DemoUseGridRowOuter = x2(monitored(function DemoUseRovingTabIndexChildOuter({ index }) {
    const { propsStable, refElementReturn } = useRefElement({ refElementParameters: {} });
    const { managedChildContext, paginatedChildContext, staggeredChildContext } = g2(ListChildContext);
    const { props, managedChildReturn, paginatedChildReturn, staggeredChildReturn } = useProcessedChild({
      context: { managedChildContext, paginatedChildContext, staggeredChildContext },
      info: { index }
    });
    const ch = T2(() => /* @__PURE__ */ r4(DemoUseGridRow, { index }), [index]);
    return /* @__PURE__ */ r4("li", { ...useMergedProps(props, propsStable), children: paginatedChildReturn.hideBecausePaginated || staggeredChildReturn.hideBecauseStaggered ? "\xA0" : ch });
  }));
  var DemoUseGridRow = x2(({ index }) => {
    const [_randomWord] = useState(() => RandomWords[
      index
      /*Math.floor(Math.random() * (RandomWords.length - 1))*/
    ]);
    const [_tabbableColumn, setTabbableColumn, _getTabbableColumn] = useState(null);
    const hidden = index === 3;
    const disabled = hidden;
    const getSortableColumnIndex = g2(GetSortableColumnContext);
    const contextFromParent = g2(GridRowContext);
    const ret = useCompleteGridNavigationRow({
      context: contextFromParent,
      info: { index, foo: "bar", untabbable: hidden },
      textContentParameters: { getText: _((e3) => {
        return e3?.textContent ?? "";
      }, []) },
      linearNavigationParameters: { navigatePastEnd: "wrap", navigatePastStart: "wrap" },
      rovingTabIndexParameters: { onTabbableIndexChange: useStableCallback((i4) => {
        setTabbableColumn(i4);
      }), untabbable: false, initiallyTabbedIndex: 0 },
      typeaheadNavigationParameters: { collator: null, noTypeahead: false, typeaheadTimeout: 1e3, onNavigateTypeahead: null },
      hasCurrentFocusParameters: { onCurrentFocusedChanged: null, onCurrentFocusedInnerChanged: null },
      //gridNavigationSelectionSortableRowParameters: { getSortableColumnIndex },
      singleSelectionChildParameters: { singleSelectionDisabled: false },
      multiSelectionChildParameters: { initiallyMultiSelected: false, onMultiSelectChange: null, multiSelectionDisabled: false }
    });
    const {
      props,
      context: contextToChild,
      rovingTabIndexChildReturn: { tabbable }
    } = ret;
    return /* @__PURE__ */ r4("tr", { ...props, "data-tabbable": ret.rovingTabIndexChildReturn.tabbable, children: /* @__PURE__ */ r4(GridCellContext.Provider, { value: contextToChild, children: [
      /* @__PURE__ */ r4("td", { children: [
        _tabbableColumn,
        ", ",
        tabbable.toString()
      ] }),
      Array.from(function* () {
        for (let i4 = 0; i4 < 3; ++i4) {
          yield /* @__PURE__ */ r4(DemoUseGridCell, { index: i4, row: index, rowIsTabbable: tabbable }, i4);
        }
      }())
    ] }) });
  });
  var DemoUseGridCell = ({ index, row, rowIsTabbable }) => {
    if (row >= 6 && row % 2 == 0 && index > 1)
      return null;
    let hiddenText = row === 3 ? " (row hidden)" : "";
    const context = g2(GridCellContext);
    const {
      props,
      rovingTabIndexChildReturn: { tabbable }
    } = useCompleteGridNavigationCell({
      gridNavigationCellParameters: { colSpan: 1 },
      info: { index, bar: "baz", focusSelf: useStableCallback((e3) => e3.focus()), untabbable: false },
      context,
      textContentParameters: { getText: _((e3) => {
        return e3?.textContent ?? "";
      }, []) }
    });
    const t3 = tabbable ? "(Tabbable)" : "(Not tabbable)";
    if (index === 0)
      return /* @__PURE__ */ r4("td", { ...props, children: rowIsTabbable.toString() });
    else {
      if (row < 6 || row % 2 != 0) {
        if (index === 1)
          return /* @__PURE__ */ r4("td", { ...props, children: [
            "Grid cell #",
            index + 1,
            " ",
            t3,
            hiddenText
          ] });
        else
          return /* @__PURE__ */ r4("td", { children: /* @__PURE__ */ r4("label", { children: [
            /* @__PURE__ */ r4("button", { ...props, type: "button", children: "Select row" }),
            " ",
            t3,
            hiddenText
          ] }) });
      } else {
        if (index === 1)
          return /* @__PURE__ */ r4("td", { ...props, colSpan: 2, children: [
            "Grid cell #",
            index + 1,
            ", span 2 ",
            t3,
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
    const buttonRef = A2(null);
    const [closeOnBackdrop, setCloseOnBackdrop] = p2(true);
    const [closeOnEscape, setCloseOnEscape] = p2(true);
    const [closeOnLostFocus, setCloseOnLostFocus] = p2(true);
    const [focusTrapActive, setFocusTrapActive] = p2(true);
    const [hasChild, setHasChild] = p2(false);
    const [closeReason, setCloseReason] = p2(null);
    const [open, setOpen] = p2(false);
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
        focusPopup: useStableCallback((e3, f3) => f3()?.focus())
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
    return /* @__PURE__ */ r4("div", { style: { border: `${depth}px solid black` }, children: [
      /* @__PURE__ */ r4("div", { children: "useModal demo:" }),
      /* @__PURE__ */ r4("div", { style: "display: flex; flex-direction: column", children: [
        /* @__PURE__ */ r4("label", { children: [
          /* @__PURE__ */ r4("input", { type: "checkbox", disabled: true, checked: true }),
          " Close by setting open to false"
        ] }),
        /* @__PURE__ */ r4("label", { children: [
          /* @__PURE__ */ r4("input", { type: "checkbox", checked: closeOnBackdrop, onInput: (e3) => setCloseOnBackdrop(e3.currentTarget.checked) }),
          " Close on backdrop click"
        ] }),
        /* @__PURE__ */ r4("label", { children: [
          /* @__PURE__ */ r4("input", { type: "checkbox", checked: closeOnEscape, onInput: (e3) => setCloseOnEscape(e3.currentTarget.checked) }),
          " Close on Escape key press"
        ] }),
        /* @__PURE__ */ r4("label", { children: [
          /* @__PURE__ */ r4("input", { type: "checkbox", checked: closeOnLostFocus, onInput: (e3) => setCloseOnLostFocus(e3.currentTarget.checked) }),
          " Close on focus lost"
        ] }),
        /* @__PURE__ */ r4("label", { children: [
          /* @__PURE__ */ r4("input", { type: "checkbox", checked: focusTrapActive, onInput: (e3) => setFocusTrapActive(e3.currentTarget.checked) }),
          " Trap focus"
        ] }),
        /* @__PURE__ */ r4("br", {})
      ] }),
      /* @__PURE__ */ r4("div", { children: [
        "Last reason for closing: ",
        closeReason ?? "(hasn't been closed yet)"
      ] }),
      /* @__PURE__ */ r4("button", { ...propsStableSource, onClick: () => setOpen(true), children: "Open Modal" }),
      /* @__PURE__ */ r4("div", { ...useMergedProps(propsFocusContainer, propsStablePopup), style: `border: ${depth}px dotted red; background: #ccc`, children: /* @__PURE__ */ r4("div", { style: { display: open ? "flex" : "none", flexDirection: "column" }, children: [
        /* @__PURE__ */ r4("div", { children: [
          "Modal element at depth ",
          depth,
          " with ",
          hasChild ? "a" : "no",
          " child"
        ] }),
        /* @__PURE__ */ r4("label", { children: [
          /* @__PURE__ */ r4("input", { type: "checkbox", checked: hasChild, onInput: (e3) => setHasChild(e3.currentTarget.checked), ref: buttonRef }),
          " Add a child modal"
        ] }),
        hasChild && /* @__PURE__ */ r4(DemoUseModal, { parentDepth: depth }),
        /* @__PURE__ */ r4("button", { ...propsStableSource, onClick: () => setOpen(false), children: "Close modal programmatically" })
      ] }) })
    ] });
  }

  // demos/use-roving-tab-index.tsx
  var RandomWords2 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.".split(" ");
  var SingleSelectionModeContext = V("focus");
  var MultiSelectionModeContext = V("activation");
  var UntabbableContext = V(false);
  var ListNavigationSingleSelectionChildContext = V(null);
  var ListChildContext2 = V(null);
  var WeirdContext = V(null);
  var DemoUseRovingTabIndex = x2(monitored(function DemoUseRovingTabIndex2() {
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
      rovingTabIndexParameters: { onTabbableIndexChange: null, untabbable, focusSelfParent: focus },
      singleSelectionDeclarativeParameters: { singleSelectedIndex, onSingleSelectedIndexChange: useStableCallback((e3) => {
        setSingleSelectedIndex(e3[EventDetail].selectedIndex);
      }, []) },
      typeaheadNavigationParameters: { collator: null, noTypeahead: false, typeaheadTimeout: 1e3, onNavigateTypeahead: null },
      linearNavigationParameters: { disableHomeEndKeys: false, arrowKeyDirection: "vertical", navigatePastEnd: "wrap", navigatePastStart: "wrap", pageNavigationSize: 0.1, onNavigateLinear: null },
      refElementParameters: {},
      paginatedChildrenParameters: { paginationMin: min, paginationMax: max },
      singleSelectionParameters: { singleSelectionAriaPropName: "aria-selected", singleSelectionMode },
      multiSelectionParameters: { multiSelectionAriaPropName: "aria-checked", onSelectionChange, multiSelectionMode }
    });
    const {
      props,
      contextChildren,
      contextProcessing,
      rovingTabIndexReturn: { setTabbableIndex },
      managedChildrenReturn: { getChildren },
      typeaheadNavigationReturn: { typeaheadStatus },
      rearrangeableChildrenReturn: { shuffle: shuffle2, reverse, sort: _sort }
    } = r5;
    const [staggering, setStaggering] = useState(false);
    return /* @__PURE__ */ r4("div", { className: "demo", children: [
      /* @__PURE__ */ r4("h2", { children: "Keyboard & List Navigation" }),
      /* @__PURE__ */ r4("h3", { children: /* @__PURE__ */ r4("code", { children: "useCompleteListNavigation" }) }),
      /* @__PURE__ */ r4("p", { children: "This hook accomplishes a few things:" }),
      /* @__PURE__ */ r4("ul", { children: [
        /* @__PURE__ */ r4("li", { children: [
          "Turns a group of widgets into one singular composite widget with only ",
          /* @__PURE__ */ r4("strong", { children: "a single tab stop" }),
          ' shared between them (a "roving" tab stop, because it wanders back and forth).'
        ] }),
        /* @__PURE__ */ r4("li", { children: [
          "Navigation within this composite widget is done via:",
          /* @__PURE__ */ r4("ul", { children: [
            /* @__PURE__ */ r4("li", { children: "Arrow keys (up/down or left/right depending in the orientation you specify)" }),
            /* @__PURE__ */ r4("li", { children: "Page Up/Down to jump by a larger amount (either a fixed number or some percentage of the total number of items, as you specify)" }),
            /* @__PURE__ */ r4("li", { children: "Home/End to jump to the first or last item" })
          ] })
        ] }),
        /* @__PURE__ */ r4("li", { children: 'Items can be marked as "hidden", in which case they are skipped over when navigating, no matter the method. E.G. if Home is pressed but the first item is hidden, the second item is focused instead.' }),
        /* @__PURE__ */ r4("li", { children: 'Items can be marked as "disabled" to prevent selection (with or without also marking them as "hidden", though "hidden" implies "disabled").' }),
        /* @__PURE__ */ r4("li", { children: "Children can be reordered arbitrarily, including sorting, shuffling, etc. while ensuring coherent navigation regardless." }),
        /* @__PURE__ */ r4("li", { children: [
          "The parent's selected index is ",
          /* @__PURE__ */ r4("strong", { children: "uncontrolled" }),
          " and so it does not re-render itself when the selected index changes (you can easily make it controlled, of course, at the cost of 1 additional render. See ",
          /* @__PURE__ */ r4("code", { children: "useSingleSelectionDeclarative" }),
          " for a shortcut to do exactly that)"
        ] }),
        /* @__PURE__ */ r4("li", { children: "Changing which child is focused or selected only re-renders a maximum of 2 children each time." }),
        /* @__PURE__ */ r4("li", { children: [
          "Lists can be nested, and there is no strict requirement on DOM structure (except for sorting/rearranging children, if you use that).",
          /* @__PURE__ */ r4("ul", { children: /* @__PURE__ */ r4("li", { children: [
            "If you don't need sorting/rearranging this DOM requirement is ",
            /* @__PURE__ */ r4("strong", { children: "optional" }),
            "; rearranging requires all children be in one contiguous array of VNodes so that their ",
            /* @__PURE__ */ r4("code", { children: "key" }),
            " props can be manipulated."
          ] }) })
        ] })
      ] }),
      /* @__PURE__ */ r4("p", { children: "The biggest restriction of this method is that every child needs a 0-based numeric index." }),
      /* @__PURE__ */ r4("label", { children: [
        "# of items",
        /* @__PURE__ */ r4("input", { type: "number", value: count, min: 0, onInput: (e3) => {
          e3.preventDefault();
          setCount(e3.currentTarget.valueAsNumber);
        } })
      ] }),
      /* @__PURE__ */ r4("button", { onClick: () => shuffle2(), children: "Shuffle" }),
      /* @__PURE__ */ r4("button", { onClick: () => {
        debugger;
        reverse();
      }, children: "Reverse" }),
      /* @__PURE__ */ r4("label", { children: [
        "Imperatively set the tabbable index to: ",
        /* @__PURE__ */ r4("input", { type: "number", onInput: (e3) => {
          e3.preventDefault();
          setTabbableIndex(e3.currentTarget.valueAsNumber, e3, false);
        } })
      ] }),
      /* @__PURE__ */ r4("label", { children: [
        "Imperatively set the selected index to: ",
        /* @__PURE__ */ r4("input", { type: "number", onInput: (e3) => {
          e3.preventDefault();
          setSingleSelectedIndex(e3.currentTarget.valueAsNumber);
        } }),
        " (currently ",
        singleSelectedIndex,
        ")"
      ] }),
      /* @__PURE__ */ r4("label", { children: [
        "Pagination window starts at: ",
        /* @__PURE__ */ r4("input", { type: "number", value: min ?? void 0, min: 0, max: max ?? void 0, onInput: (e3) => {
          e3.preventDefault();
          setMin(e3.currentTarget.valueAsNumber);
        } })
      ] }),
      /* @__PURE__ */ r4("label", { children: [
        "Pagination window ends at: ",
        /* @__PURE__ */ r4("input", { type: "number", value: max ?? void 0, min: min ?? void 0, max: count, onInput: (e3) => {
          e3.preventDefault();
          setMax(e3.currentTarget.valueAsNumber);
        } })
      ] }),
      /* @__PURE__ */ r4("label", { children: [
        "Stagger delay: ",
        /* @__PURE__ */ r4("input", { type: "checkbox", checked: staggered, onInput: (e3) => {
          e3.preventDefault();
          setStaggered(e3.currentTarget.checked);
        } })
      ] }),
      /* @__PURE__ */ r4("label", { children: [
        "Single-Selection mode:",
        /* @__PURE__ */ r4("label", { children: [
          /* @__PURE__ */ r4("input", { name: "rti-demo-single-selection-mode", type: "radio", checked: singleSelectionMode == "disabled", onInput: (e3) => {
            e3.preventDefault();
            setSingleSelectionMode("disabled");
          } }),
          " Off"
        ] }),
        /* @__PURE__ */ r4("label", { children: [
          /* @__PURE__ */ r4("input", { name: "rti-demo-single-selection-mode", type: "radio", checked: singleSelectionMode == "focus", onInput: (e3) => {
            e3.preventDefault();
            setSingleSelectionMode("focus");
          } }),
          " On focus"
        ] }),
        /* @__PURE__ */ r4("label", { children: [
          /* @__PURE__ */ r4("input", { name: "rti-demo-single-selection-mode", type: "radio", checked: singleSelectionMode == "activation", onInput: (e3) => {
            e3.preventDefault();
            setSingleSelectionMode("activation");
          } }),
          " On activation (click, tap, Enter, Space, etc.)"
        ] })
      ] }),
      /* @__PURE__ */ r4("label", { children: [
        "Multi-Selection mode:",
        /* @__PURE__ */ r4("label", { children: [
          /* @__PURE__ */ r4("input", { name: "rti-demo-multi-selection-mode", type: "radio", checked: multiSelectionMode == "disabled", onInput: (e3) => {
            e3.preventDefault();
            setMultiSelectionMode("disabled");
          } }),
          " Off"
        ] }),
        /* @__PURE__ */ r4("label", { children: [
          /* @__PURE__ */ r4("input", { name: "rti-demo-multi-selection-mode", type: "radio", checked: multiSelectionMode == "focus", onInput: (e3) => {
            e3.preventDefault();
            setMultiSelectionMode("focus");
          } }),
          " On focus"
        ] }),
        /* @__PURE__ */ r4("label", { children: [
          /* @__PURE__ */ r4("input", { name: "rti-demo-multi-selection-mode", type: "radio", checked: multiSelectionMode == "activation", onInput: (e3) => {
            e3.preventDefault();
            setMultiSelectionMode("activation");
          } }),
          " On activation (click, tap, Enter, Space, etc.)"
        ] })
      ] }),
      /* @__PURE__ */ r4("div", { children: [
        "Staggering status: ",
        staggered ? staggering ? "Staggering..." : "Done staggering" : "Not staggered"
      ] }),
      /* @__PURE__ */ r4("div", { children: [
        "Typeahead status: ",
        typeaheadStatus
      ] }),
      /* @__PURE__ */ r4("div", { children: [
        "Multi-select: ",
        Math.round(multiSelectPercent * 100 * 10) / 10,
        "%"
      ] }),
      /* @__PURE__ */ r4(UntabbableContext.Provider, { value: untabbable, children: /* @__PURE__ */ r4(SingleSelectionModeContext.Provider, { value: singleSelectionMode, children: /* @__PURE__ */ r4(MultiSelectionModeContext.Provider, { value: multiSelectionMode, children: /* @__PURE__ */ r4(ListNavigationSingleSelectionChildContext.Provider, { value: contextChildren, children: /* @__PURE__ */ r4(WeirdContext.Provider, { value: contextProcessing, children: /* @__PURE__ */ r4("ol", { start: 0, ...props, children: /* @__PURE__ */ r4(DemoUseRovingTabIndexChildren3, { max, min, staggered, count, setStaggering }) }) }) }) }) }) })
    ] });
  }));
  var DemoUseRovingTabIndexChildren3 = x2(monitored(function DemoUseRovingTabIndexChildren4({ count, max, min, staggered, setStaggering }) {
    const {
      context,
      paginatedChildrenReturn,
      rearrangeableChildrenReturn,
      staggeredChildrenReturn
    } = useCompleteListNavigationChildren({
      paginatedChildrenParameters: { paginationMax: max, paginationMin: min },
      rearrangeableChildrenParameters: {
        getIndex: _((a3) => a3.props.index, []),
        onRearranged: null,
        compare: null,
        adjust: null,
        children: T2(() => Array.from(function* () {
          for (let i4 = 0; i4 < count; ++i4) {
            yield /* @__PURE__ */ r4(DemoUseRovingTabIndexChildOuter2, { index: i4 }, i4);
          }
        }()), [count])
      },
      managedChildrenParameters: {},
      staggeredChildrenParameters: { staggered },
      context: g2(WeirdContext)
    });
    h2(() => {
      setStaggering(staggeredChildrenReturn.stillStaggering);
    }, [staggeredChildrenReturn.stillStaggering]);
    return /* @__PURE__ */ r4(ListChildContext2.Provider, { value: context, children: rearrangeableChildrenReturn.children });
  }));
  var DemoUseRovingTabIndexChildOuter2 = x2(monitored(function DemoUseRovingTabIndexChildOuter3({ index }) {
    const { propsStable, refElementReturn: { getElement } } = useRefElement({ refElementParameters: { onElementChange: useStableCallback((e3, p3, r5) => {
      onElementChange?.(e3, p3, r5);
    }) } });
    const { managedChildContext, paginatedChildContext, staggeredChildContext } = g2(ListChildContext2);
    const { props, managedChildReturn, paginatedChildReturn, staggeredChildReturn, refElementParameters: { onElementChange } } = useProcessedChild({
      context: { managedChildContext, paginatedChildContext, staggeredChildContext },
      info: { index }
    });
    const c3 = T2(() => /* @__PURE__ */ r4(DemoUseRovingTabIndexChild, { index }), [index]);
    return /* @__PURE__ */ r4("li", { ...useMergedProps(props, propsStable), children: paginatedChildReturn.hideBecausePaginated || staggeredChildReturn.hideBecauseStaggered ? "\xA0" : c3 });
  }));
  var DemoUseRovingTabIndexChild = x2(monitored(function DemoUseRovingTabIndexChild2({ index }) {
    if (index == 1)
      return /* @__PURE__ */ r4("span", { children: [
        "(Item ",
        index,
        " is a ",
        /* @__PURE__ */ r4("strong", { children: "hole in the array" }),
        " and does not exist)"
      ] });
    let disabled = index == 6;
    let hidden = index == 7;
    if (index == 8) {
      disabled = hidden = true;
    }
    const [multiSelected, setMultiSelected] = useState(false);
    const [randomWord] = useState(() => RandomWords2[index]);
    const context = g2(ListNavigationSingleSelectionChildContext);
    const focusSelf = _((e3) => {
      e3.focus();
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
      pressParameters: { onPressSync, excludeSpace },
      refElementReturn
    } = useCompleteListNavigationChildDeclarative({
      info: { index, focusSelf, foo: "bar", untabbable: hidden },
      context,
      textContentParameters: { getText: _((e3) => {
        return e3?.textContent ?? "";
      }, []) },
      hasCurrentFocusParameters: { onCurrentFocusedChanged: null, onCurrentFocusedInnerChanged: null },
      refElementParameters: { onElementChange: null, onMount: null, onUnmount: null },
      multiSelectionChildParameters: { multiSelectionDisabled: disabled },
      singleSelectionChildParameters: { singleSelectionDisabled: disabled },
      multiSelectionChildDeclarativeParameters: { multiSelected, onMultiSelectedChange: (e3) => setMultiSelected(e3[EventDetail].multiSelected) }
    });
    const { pressReturn, props: p22 } = usePress({ pressParameters: { focusSelf, onPressSync, excludeSpace, allowRepeatPresses: false, excludeEnter: null, excludePointer: null, longPressThreshold: null, onPressingChange: null }, refElementReturn });
    let s3 = singleSelected && multiSelected ? " (single- & multi- selected)" : singleSelected ? " (single-selected)" : multiSelected ? " (multi-selected)" : "";
    const text = `${randomWord} This is item #${index} (offset: ${singleSelected}) ${hidden ? " (hidden)" : ""}${disabled ? " (disabled)" : ""}${s3} (${tabbable ? "Tabbable" : "Not tabbable"})`;
    return /* @__PURE__ */ r4("span", { ...useMergedProps(propsChild, propsTabbable, p22), children: [
      text,
      /* @__PURE__ */ r4("input", { ...useMergedProps(propsTabbable, { type: "number" }), style: { width: "5ch" } })
    ] });
  }));

  // demos/use-timeout.tsx
  var DemoUseTimeout = () => {
    const [timeout, setTimeout2] = p2(1e3);
    const [triggerIndex, setTriggerIndex] = p2("");
    const [fireCount, setFireCount] = p2(0);
    useTimeout({ timeout, triggerIndex, callback: () => setFireCount((i4) => ++i4) });
    return /* @__PURE__ */ r4("div", { class: "demo", children: [
      /* @__PURE__ */ r4("h2", { children: "useTimeout" }),
      /* @__PURE__ */ r4("p", { children: [
        /* @__PURE__ */ r4("code", { children: "useEffect" }),
        " but on a timer"
      ] }),
      /* @__PURE__ */ r4("label", { children: [
        "Timeout duration: ",
        /* @__PURE__ */ r4("input", { type: "number", value: timeout, onInput: (e3) => setTimeout2(e3.currentTarget.valueAsNumber) })
      ] }),
      /* @__PURE__ */ r4("label", { children: [
        "Refresh key: ",
        /* @__PURE__ */ r4("input", { type: "text", value: triggerIndex, onInput: (e3) => setTriggerIndex(e3.currentTarget.value) })
      ] }),
      /* @__PURE__ */ r4("div", { children: [
        "The callback has been called ",
        fireCount,
        " time",
        fireCount === 1 ? "" : "s",
        "."
      ] })
    ] });
  };

  // index.tsx
  window._generate_setState_stacks = false;
  var DemoUseDroppable = () => {
    const { droppedFiles, droppedStrings, filesForConsideration, stringsForConsideration, propsStable: props, dropError } = useDroppable({ effect: "copy" });
    const { ref: _ref } = useMergedProps({}, { ref: A2(null) });
    const p3 = useMergedProps(props, { className: "demo droppable" });
    return /* @__PURE__ */ r4("div", { ...p3, children: [
      droppedStrings != null && /* @__PURE__ */ r4("div", { children: [
        "Data dropped: ",
        /* @__PURE__ */ r4("ul", { children: Object.entries(droppedStrings).map(([type, value]) => /* @__PURE__ */ r4("li", { children: [
          type,
          ": ",
          value
        ] })) })
      ] }),
      droppedFiles != null && /* @__PURE__ */ r4("div", { children: [
        "Files dropped: ",
        /* @__PURE__ */ r4("table", { children: [
          /* @__PURE__ */ r4("thead", { children: /* @__PURE__ */ r4("tr", { children: [
            /* @__PURE__ */ r4("th", { children: "Name" }),
            /* @__PURE__ */ r4("th", { children: "Size" }),
            /* @__PURE__ */ r4("th", { children: "Type" }),
            /* @__PURE__ */ r4("th", { children: "Last modified" })
          ] }) }),
          /* @__PURE__ */ r4("tbody", { children: droppedFiles.map((f3) => /* @__PURE__ */ r4("tr", { children: [
            /* @__PURE__ */ r4("td", { children: f3.name }),
            f3.data.byteLength,
            /* @__PURE__ */ r4("td", { children: f3.type }),
            /* @__PURE__ */ r4("td", { children: new Date(f3.lastModified ?? 0) })
          ] })) })
        ] })
      ] }),
      /* @__PURE__ */ r4("hr", {}),
      stringsForConsideration != null && /* @__PURE__ */ r4("div", { children: [
        "Data being considered: ",
        /* @__PURE__ */ r4("ul", { children: Array.from(stringsForConsideration).map((type) => /* @__PURE__ */ r4("li", { children: type })) })
      ] }),
      filesForConsideration != null && /* @__PURE__ */ r4("div", { children: [
        "Files being considered: ",
        /* @__PURE__ */ r4("ul", { children: filesForConsideration.map((f3) => /* @__PURE__ */ r4("li", { children: JSON.stringify(f3) })) })
      ] }),
      /* @__PURE__ */ r4("hr", {}),
      dropError ? /* @__PURE__ */ r4("div", { children: dropError instanceof Error ? dropError.message : JSON.stringify(dropError) }) : null
    ] });
  };
  var DemoUseDraggable = () => {
    const { propsUnstable: props } = useDraggable({ data: { "text/plain": "This is custom draggable content of type text/plain." }, dragImage: null, dragImageXOffset: null, dragImageYOffset: null, effectAllowed: null });
    return /* @__PURE__ */ r4("div", { ...useMergedProps(props, { className: "demo" }), children: "Draggable content" });
  };
  var ChildrenHaveFocusContext = V(null);
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
    return /* @__PURE__ */ r4("div", { ...useMergedProps({}, { className: "demo" }), children: [
      /* @__PURE__ */ r4("h2", { children: "useChildrenHaveFocus" }),
      /* @__PURE__ */ r4("p", { children: [
        "If you want to see if any of your children have focus, the easiest way is to just attach a ",
        /* @__PURE__ */ r4("code", { children: "focusIn" }),
        " handler to the parent DOM node. But what if you don't have just one single parent DOM node? This hook lets you coordinate all the children to give you that information as if you were able to take that easy parent node route."
      ] }),
      /* @__PURE__ */ r4("div", { children: /* @__PURE__ */ r4("label", { children: [
        /* @__PURE__ */ r4("input", { type: "number", min: 0, value: minChildCount, onInput: (e3) => {
          e3.preventDefault();
          setMinChildCount(e3.currentTarget.valueAsNumber);
        } }),
        " Min # of children"
      ] }) }),
      /* @__PURE__ */ r4("div", { children: /* @__PURE__ */ r4("label", { children: [
        /* @__PURE__ */ r4("input", { type: "number", min: minChildCount, value: maxChildCount, onInput: (e3) => {
          e3.preventDefault();
          setMaxChildCount(e3.currentTarget.valueAsNumber);
        } }),
        " Max # of children"
      ] }) }),
      /* @__PURE__ */ r4("div", { children: [
        "Current # of children: ",
        currentChildCount
      ] }),
      /* @__PURE__ */ r4("label", { children: [
        /* @__PURE__ */ r4("input", { type: "checkbox", onInput: (e3) => setAnimate(e3.currentTarget.checked) }),
        " Mount & unmount children on a cycle"
      ] }),
      /* @__PURE__ */ r4(ChildrenHaveFocusContext.Provider, { value: context, children: [
        /* @__PURE__ */ r4("div", { children: [
          "Any children focused: ",
          anyFocused.toString()
        ] }),
        /* @__PURE__ */ r4("div", { children: Array.from(function* () {
          for (let i4 = 0; i4 < currentChildCount; ++i4) {
            yield /* @__PURE__ */ r4(DemoUseChildrenHaveFocusChild, { index: i4 }, i4);
          }
        }()) })
      ] })
    ] });
  };
  var DemoUseChildrenHaveFocusChild = ({ index }) => {
    const { hasCurrentFocusParameters: { onCurrentFocusedInnerChanged } } = useChildrenHaveFocusChild({ context: g2(ChildrenHaveFocusContext) });
    const { refElementReturn, propsStable } = useRefElement({ refElementParameters: {} });
    const { hasCurrentFocusReturn } = useHasCurrentFocus({ hasCurrentFocusParameters: { onCurrentFocusedChanged: null, onCurrentFocusedInnerChanged }, refElementReturn });
    return /* @__PURE__ */ r4("div", { tabIndex: 0, ...useMergedProps(propsStable, hasCurrentFocusReturn.propsStable), children: [
      "Focusable child #",
      index,
      /* @__PURE__ */ r4("input", {}),
      /* @__PURE__ */ r4("input", {})
    ] });
  };
  var DemoUseFocusTrap = x2(({ depth }) => {
    const [active, setActive] = useState(false);
    const { propsStable, refElementReturn } = useRefElement({ refElementParameters: {} });
    const { props } = useFocusTrap({
      focusTrapParameters: {
        trapActive: active,
        onlyMoveFocus: false,
        focusOpener: (e3) => e3?.focus(),
        focusPopup: (e3, f3) => f3()?.focus()
      },
      activeElementParameters: { getDocument: getDocument3, onActiveElementChange: null, onLastActiveElementChange: null, onWindowFocusedChange: null },
      refElementReturn
    });
    const divProps = useMergedProps(props, propsStable, { ref: void 0, className: "focus-trap-demo" });
    if (depth == 2)
      return /* @__PURE__ */ r4("div", {});
    return /* @__PURE__ */ r4("div", { className: "demo", children: [
      /* @__PURE__ */ r4("label", { children: [
        "Active: ",
        /* @__PURE__ */ r4("input", { type: "checkbox", checked: active, onInput: (e3) => {
          e3.preventDefault();
          setActive(e3.currentTarget.checked);
        } })
      ] }),
      /* @__PURE__ */ r4("div", { ...divProps, children: /* @__PURE__ */ r4(DemoUseFocusTrapChild, { active, setActive, depth: depth ?? 0 }) })
    ] });
  });
  var DemoUseFocusTrapChild = x2(({ setActive, active }) => {
    return /* @__PURE__ */ r4(a, { children: [
      /* @__PURE__ */ r4("button", { children: "Button 1" }),
      /* @__PURE__ */ r4("button", { children: "Button 2" }),
      /* @__PURE__ */ r4("button", { children: "Button 3" }),
      /* @__PURE__ */ r4("label", { children: [
        "Active: ",
        /* @__PURE__ */ r4("input", { type: "checkbox", checked: active, onInput: (e3) => {
          e3.preventDefault();
          setActive(e3.currentTarget.checked);
        } })
      ] })
    ] });
  });
  var DemoUseAsyncHandler1 = x2(() => {
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
    return /* @__PURE__ */ r4("div", { className: "demo", children: [
      /* @__PURE__ */ r4("button", { disabled: pending && disableConsecutive, onClick, children: "Click me!" }),
      /* @__PURE__ */ r4("label", { children: [
        "Sleep for: ",
        /* @__PURE__ */ r4("input", { type: "number", value: timeout, onInput: (e3) => setTimeout2(e3.currentTarget.valueAsNumber) })
      ] }),
      /* @__PURE__ */ r4("label", { children: [
        "Throw an error ",
        /* @__PURE__ */ r4("input", { type: "checkbox", checked: shouldThrow, onInput: (e3) => setShouldThrow(e3.currentTarget.checked) })
      ] }),
      /* @__PURE__ */ r4("label", { children: [
        "Disabled while pending ",
        /* @__PURE__ */ r4("input", { type: "checkbox", checked: disableConsecutive, onInput: (e3) => setDisableConsecutive(e3.currentTarget.checked) })
      ] }),
      /* @__PURE__ */ r4("label", { children: [
        "Debounce: ",
        /* @__PURE__ */ r4("input", { type: "number", value: debounce2, onInput: (e3) => setDebounce(e3.currentTarget.valueAsNumber) })
      ] }),
      /* @__PURE__ */ r4("table", { children: [
        /* @__PURE__ */ r4("thead", { children: /* @__PURE__ */ r4("tr", { children: [
          /* @__PURE__ */ r4("th", { children: "Field" }),
          /* @__PURE__ */ r4("th", { children: "Value" })
        ] }) }),
        /* @__PURE__ */ r4("tbody", { children: [
          /* @__PURE__ */ r4("tr", { children: [
            /* @__PURE__ */ r4("td", { children: "callCount" }),
            /* @__PURE__ */ r4("td", { children: callCount })
          ] }),
          /* @__PURE__ */ r4("tr", { children: [
            /* @__PURE__ */ r4("td", { children: "settleCount" }),
            /* @__PURE__ */ r4("td", { children: settleCount })
          ] }),
          /* @__PURE__ */ r4("tr", { children: [
            /* @__PURE__ */ r4("td", { children: "resolveCount" }),
            /* @__PURE__ */ r4("td", { children: resolveCount })
          ] }),
          /* @__PURE__ */ r4("tr", { children: [
            /* @__PURE__ */ r4("td", { children: "rejectCount" }),
            /* @__PURE__ */ r4("td", { children: rejectCount })
          ] }),
          /* @__PURE__ */ r4("tr", { children: [
            /* @__PURE__ */ r4("td", { children: "hasError" }),
            /* @__PURE__ */ r4("td", { children: hasError.toString() })
          ] }),
          /* @__PURE__ */ r4("tr", { children: [
            /* @__PURE__ */ r4("td", { children: "hasCapture" }),
            /* @__PURE__ */ r4("td", { children: hasCapture.toString() })
          ] })
        ] })
      ] })
    ] });
  });
  var DemoUseAsyncHandler2 = x2(() => {
    const [timeout, setTimeout2] = useState(1e3);
    const [debounce2, setDebounce] = useState(0);
    const [throttle, setThrottle] = useState(0);
    const [shouldThrow, setShouldThrow, getShouldThrow] = useState(false);
    const [disableConsecutive, setDisableConsecutive] = useState(false);
    const [text, setText] = useState("");
    const onInputAsync = async (v4, _e) => new Promise((resolve, reject) => window.setTimeout(() => {
      if (getShouldThrow()) {
        reject();
      } else {
        setText(v4);
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
      capture: (e3) => {
        e3.preventDefault();
        return e3.currentTarget.value;
      },
      debounce: debounce2 == 0 ? void 0 : debounce2,
      throttle: throttle == 0 ? void 0 : throttle
    });
    let anyWaiting = pending || debouncingAsync || debouncingSync;
    return /* @__PURE__ */ r4("div", { className: "demo", children: [
      /* @__PURE__ */ r4("label", { children: [
        "Demo text: ",
        /* @__PURE__ */ r4("input", { value: hasCapture ? currentCapture : text, disabled: pending && disableConsecutive, onInput: syncHandler })
      ] }),
      /* @__PURE__ */ r4("hr", {}),
      /* @__PURE__ */ r4("label", { children: [
        "# of milliseconds the async handler takes to run: ",
        /* @__PURE__ */ r4("input", { type: "number", value: timeout, onInput: (e3) => setTimeout2(e3.currentTarget.valueAsNumber) })
      ] }),
      /* @__PURE__ */ r4("label", { children: [
        "Throw an error ",
        /* @__PURE__ */ r4("input", { type: "checkbox", checked: shouldThrow, onInput: (e3) => setShouldThrow(e3.currentTarget.checked) })
      ] }),
      /* @__PURE__ */ r4("label", { children: [
        "Disabled while pending ",
        /* @__PURE__ */ r4("input", { type: "checkbox", checked: disableConsecutive, onInput: (e3) => setDisableConsecutive(e3.currentTarget.checked) })
      ] }),
      /* @__PURE__ */ r4("label", { children: [
        "Debounce: ",
        /* @__PURE__ */ r4("input", { type: "number", value: debounce2, onInput: (e3) => setDebounce(e3.currentTarget.valueAsNumber) })
      ] }),
      /* @__PURE__ */ r4("label", { children: [
        "Throttle: ",
        /* @__PURE__ */ r4("input", { type: "number", value: throttle, onInput: (e3) => setThrottle(e3.currentTarget.valueAsNumber) })
      ] }),
      /* @__PURE__ */ r4("table", { children: [
        /* @__PURE__ */ r4("thead", { children: /* @__PURE__ */ r4("tr", { children: [
          /* @__PURE__ */ r4("th", { children: "Field" }),
          /* @__PURE__ */ r4("th", { children: "Value" })
        ] }) }),
        /* @__PURE__ */ r4("tbody", { children: [
          /* @__PURE__ */ r4("tr", { children: [
            /* @__PURE__ */ r4("td", { children: "showSpinner" }),
            /* @__PURE__ */ r4("td", { children: `${anyWaiting}` })
          ] }),
          /* @__PURE__ */ r4("tr", { children: [
            /* @__PURE__ */ r4("td", { children: "pending" }),
            /* @__PURE__ */ r4("td", { children: `${pending}` })
          ] }),
          /* @__PURE__ */ r4("tr", { children: [
            /* @__PURE__ */ r4("td", { children: "debouncingSync" }),
            /* @__PURE__ */ r4("td", { children: `${debouncingSync}` })
          ] }),
          /* @__PURE__ */ r4("tr", { children: [
            /* @__PURE__ */ r4("td", { children: "debouncingAsync" }),
            /* @__PURE__ */ r4("td", { children: `${debouncingAsync}` })
          ] }),
          /* @__PURE__ */ r4("tr", { children: [
            /* @__PURE__ */ r4("td", { children: "callCount" }),
            /* @__PURE__ */ r4("td", { children: callCount })
          ] }),
          /* @__PURE__ */ r4("tr", { children: [
            /* @__PURE__ */ r4("td", { children: "settleCount" }),
            /* @__PURE__ */ r4("td", { children: settleCount })
          ] }),
          /* @__PURE__ */ r4("tr", { children: [
            /* @__PURE__ */ r4("td", { children: "resolveCount" }),
            /* @__PURE__ */ r4("td", { children: resolveCount })
          ] }),
          /* @__PURE__ */ r4("tr", { children: [
            /* @__PURE__ */ r4("td", { children: "rejectCount" }),
            /* @__PURE__ */ r4("td", { children: rejectCount })
          ] }),
          /* @__PURE__ */ r4("tr", { children: [
            /* @__PURE__ */ r4("td", { children: "hasError" }),
            /* @__PURE__ */ r4("td", { children: hasError.toString() })
          ] }),
          /* @__PURE__ */ r4("tr", { children: [
            /* @__PURE__ */ r4("td", { children: "currentCapture" }),
            /* @__PURE__ */ r4("td", { children: currentCapture })
          ] }),
          /* @__PURE__ */ r4("tr", { children: [
            /* @__PURE__ */ r4("td", { children: '"Saved" input' }),
            /* @__PURE__ */ r4("td", { children: text })
          ] })
        ] })
      ] })
    ] });
  });
  function getDocument3() {
    return window.document;
  }
  var DemoFocus = x2(() => {
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
            setFocusCount((c3) => ++c3);
        }),
        onCurrentFocusedInnerChanged: useStableCallback((focused2) => {
          setFocusedInner(focused2);
          if (focused2)
            setInnerFocusCount((c3) => ++c3);
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
    return /* @__PURE__ */ r4("div", { class: "demo", children: [
      /* @__PURE__ */ r4("h2", { children: "useHasFocus" }),
      /* @__PURE__ */ r4("p", { children: "Tracks focus related to the component:" }),
      /* @__PURE__ */ r4("ul", { children: [
        /* @__PURE__ */ r4("li", { children: "Is this element (or, optionally, any element within it) focused?" }),
        /* @__PURE__ */ r4("li", { children: [
          "Regardless of if focus was lost because the ",
          /* @__PURE__ */ r4("code", { children: "body" }),
          " was clicked, was this element (or, optionally, any element within it), the last to be actually focused?"
        ] }),
        /* @__PURE__ */ r4("li", { children: "Does the window have focus?" })
      ] }),
      /* @__PURE__ */ r4("div", { ...useMergedProps(p22, p1, { style: { border: "1px solid black" }, tabIndex: 0 }), children: [
        /* @__PURE__ */ r4("span", { children: "Outer element" }),
        /* @__PURE__ */ r4("input", {}),
        /* @__PURE__ */ r4("input", {}),
        /* @__PURE__ */ r4("div", { tabIndex: 0, style: { border: "1px solid black" }, children: [
          /* @__PURE__ */ r4("span", { children: "Inner element" }),
          /* @__PURE__ */ r4("input", {}),
          /* @__PURE__ */ r4("input", {})
        ] })
      ] }),
      /* @__PURE__ */ r4("div", { children: /* @__PURE__ */ r4("ul", { children: [
        /* @__PURE__ */ r4("li", { children: [
          "Focus count: ",
          focusCount
        ] }),
        /* @__PURE__ */ r4("li", { children: [
          "Inner focus count: ",
          innerFocusCount
        ] }),
        /* @__PURE__ */ r4("li", { children: [
          "Strictly focused: ",
          focused.toString(),
          ", ",
          lastFocused.toString(),
          " (focused, lastFocused)"
        ] }),
        /* @__PURE__ */ r4("li", { children: [
          "Inner focused: ",
          focusedInner.toString(),
          ", ",
          lastFocusedInner.toString(),
          " (focusedInner, lastFocusedInner)"
        ] }),
        /* @__PURE__ */ r4("li", { children: [
          "Window focused: ",
          windowFocused.toString()
        ] }),
        /* @__PURE__ */ r4("li", { children: [
          "activeElement: ",
          activeElement?.textContent
        ] }),
        /* @__PURE__ */ r4("li", { children: [
          "lastActiveElement: ",
          lastActiveElement?.textContent
        ] })
      ] }) })
    ] });
  });
  function DemoLabel() {
    const { propsInput, propsLabel } = useRandomDualIds({ randomIdInputParameters: { prefix: "input-", otherReferencerProp: "for" }, randomIdLabelParameters: { prefix: "label-", otherReferencerProp: "aria-labelledby" } });
    return /* @__PURE__ */ r4("div", { className: "demo", children: [
      /* @__PURE__ */ r4("h2", { children: "Labels" }),
      /* @__PURE__ */ r4("input", { ...propsInput }),
      /* @__PURE__ */ r4("label", { ...propsLabel, children: "Label" })
    ] });
  }
  function DemoPress({ remaining }) {
    const [count, setCount] = useState(0);
    const { refElementReturn, propsStable: p1 } = useRefElement({ refElementParameters: {} });
    const { props: p22, pressReturn: { pressing, longPress } } = usePress({
      pressParameters: {
        focusSelf: (e3) => {
          e3.focus();
        },
        longPressThreshold: 1e3,
        onPressSync: () => {
          setCount((c3) => ++c3);
        },
        allowRepeatPresses: false,
        excludeEnter: null,
        excludePointer: null,
        excludeSpace: null,
        onPressingChange: null
      },
      refElementReturn
    });
    return /* @__PURE__ */ r4("div", { className: "demo", children: [
      /* @__PURE__ */ r4("h2", { children: "Press" }),
      /* @__PURE__ */ r4("div", { children: [
        "Press count: ",
        count
      ] }),
      /* @__PURE__ */ r4("div", { children: [
        "Active: ",
        pressing.toString()
      ] }),
      /* @__PURE__ */ r4("div", { children: [
        "Long press: ",
        (longPress ?? "null").toString()
      ] }),
      /* @__PURE__ */ r4("div", { style: { border: "1px solid black", touchAction: "none" }, tabIndex: 0, ...useMergedProps(p1, p22), children: [
        /* @__PURE__ */ r4("div", { children: "This DIV's parent is pressable. Click here to press, cancel by leaving or hovering over a pressable child." }),
        /* @__PURE__ */ r4("div", { children: remaining > 0 && /* @__PURE__ */ r4(DemoPress, { remaining: remaining - 1 }) })
      ] })
    ] });
  }
  function DemoPortalChildrenChild() {
    console.log("Render portal child");
    return /* @__PURE__ */ r4("p", { children: "Portal child" });
  }
  function DemoPortalChildren() {
    const [element, setElement] = useState(null);
    const { children, pushChild, removeChild, updateChild } = usePortalChildren({ target: element });
    return /* @__PURE__ */ r4("div", { className: "demo", children: [
      /* @__PURE__ */ r4("h2", { children: "Portal children" }),
      /* @__PURE__ */ r4("button", { onClick: () => pushChild(/* @__PURE__ */ r4(DemoPortalChildrenChild, {})), children: "Push child" }),
      children,
      /* @__PURE__ */ r4("div", { id: "demo-portal-target", ref: setElement })
    ] });
  }
  function DemoGlobalHandler() {
    const [count, setCount] = useState(10);
    const [mode, setMode] = useState("single");
    const [testTime, setTestTime] = useState("");
    return /* @__PURE__ */ r4("div", { className: "demo", children: [
      /* @__PURE__ */ r4("div", { children: "Global event handlers:" }),
      /* @__PURE__ */ r4("label", { children: [
        "# of event handlers",
        /* @__PURE__ */ r4("input", { type: "number", value: count, min: 0, onInput: (e3) => {
          e3.preventDefault();
          setCount(e3.currentTarget.valueAsNumber);
        } })
      ] }),
      /* @__PURE__ */ r4("div", { children: [
        /* @__PURE__ */ r4("label", { children: [
          /* @__PURE__ */ r4("input", { onInput: (e3) => {
            e3.preventDefault();
            if (e3.currentTarget.checked)
              setMode("grouped");
          }, type: "radio", name: "global-handler-mode" }),
          " Grouped"
        ] }),
        /* @__PURE__ */ r4("label", { children: [
          /* @__PURE__ */ r4("input", { onInput: (e3) => {
            e3.preventDefault();
            if (e3.currentTarget.checked)
              setMode("single");
          }, type: "radio", name: "global-handler-mode" }),
          " Single"
        ] }),
        /* @__PURE__ */ r4("label", { children: [
          /* @__PURE__ */ r4("input", { onInput: (e3) => {
            e3.preventDefault();
            if (e3.currentTarget.checked)
              setMode(null);
          }, type: "radio", name: "global-handler-mode" }),
          " Off"
        ] })
      ] }),
      /* @__PURE__ */ r4("button", { id: "global-handler-test", onClick: () => {
        const now2 = /* @__PURE__ */ new Date();
        document.getElementById("global-handler-test2")?.click();
        const then = /* @__PURE__ */ new Date();
        setTestTime((+then - +now2) / 1e3 + "s passed");
      }, children: "Run test" }),
      /* @__PURE__ */ r4("button", { id: "global-handler-test2", children: "Run test 2" }),
      /* @__PURE__ */ r4("div", { children: testTime }),
      /* @__PURE__ */ r4(DemoGlobalHandlerChildren, { count, mode }, mode)
    ] });
  }
  var DemoGlobalHandlerChildren = x2(function DemoGlobalHandlerChildren2({ count, mode }) {
    return /* @__PURE__ */ r4(a, { children: [...function* () {
      for (let i4 = 0; i4 < count; ++i4) {
        yield /* @__PURE__ */ r4(DemoGlobalHandlerChild, { mode, target: window }, i4);
      }
    }()] });
  });
  var DemoGlobalHandlerChild = x2(function DemoGlobalHandlerChild2({ mode, target }) {
    useGlobalHandler(target, "click", mode == null ? null : (e3) => {
      if (e3.target?.id != "global-handler-test2")
        return;
      window._demo_event = (window._demo_event || 0) + 1;
    }, {}, mode || "grouped");
    return /* @__PURE__ */ r4("div", { hidden: true });
  });
  var Component = () => {
    return /* @__PURE__ */ r4(DemoUseRovingTabIndex, {});
    return /* @__PURE__ */ r4("div", { class: "flex", style: { flexWrap: "wrap" }, children: [
      /* @__PURE__ */ r4(DemoPress, { remaining: 2 }),
      /* @__PURE__ */ r4("input", {}),
      /* @__PURE__ */ r4("div", { style: "display:grid;grid-template-columns:1fr 1fr", children: [
        /* @__PURE__ */ r4(DemoUseModal, {}),
        /* @__PURE__ */ r4(DemoUseModal, {})
      ] }),
      /* @__PURE__ */ r4("hr", {}),
      /* @__PURE__ */ r4(DemoLabel, {}),
      /* @__PURE__ */ r4("hr", {}),
      /* @__PURE__ */ r4(DemoGlobalHandler, {}),
      /* @__PURE__ */ r4("hr", {}),
      /* @__PURE__ */ r4(DemoPortalChildren, {}),
      /* @__PURE__ */ r4("hr", {}),
      /* @__PURE__ */ r4(DemoFocus, {}),
      /* @__PURE__ */ r4("hr", {}),
      /* @__PURE__ */ r4(DemoUseChildrenHaveFocus, {}),
      /* @__PURE__ */ r4("hr", {}),
      /* @__PURE__ */ r4(DemoUseGrid, {}),
      /* @__PURE__ */ r4("hr", {}),
      /* @__PURE__ */ r4(DemoUseTimeout, {}),
      /* @__PURE__ */ r4("hr", {}),
      /* @__PURE__ */ r4(DemoUseRovingTabIndex, {}),
      /* @__PURE__ */ r4("hr", {}),
      /* @__PURE__ */ r4(DemoUseFocusTrap, {}),
      /* @__PURE__ */ r4("hr", {}),
      /* @__PURE__ */ r4(DemoUseAsyncHandler1, {}),
      /* @__PURE__ */ r4("hr", {}),
      /* @__PURE__ */ r4(DemoUseAsyncHandler2, {}),
      /* @__PURE__ */ r4("hr", {}),
      /* @__PURE__ */ r4(DemoUseDroppable, {}),
      /* @__PURE__ */ r4("hr", {}),
      /* @__PURE__ */ r4(DemoUseDraggable, {}),
      /* @__PURE__ */ r4("hr", {})
    ] });
  };
  requestAnimationFrame(() => {
    H(/* @__PURE__ */ r4(Component, {}), document.getElementById("root"));
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
