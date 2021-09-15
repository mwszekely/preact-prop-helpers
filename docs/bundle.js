var bundle = (function (exports) {
    'use strict';

    var n,l$1,u$1,t$1,o$1,r$1,f$1,e$1={},c$1=[],s$1=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function a$1(n,l){for(var u in l)n[u]=l[u];return n}function h$1(n){var l=n.parentNode;l&&l.removeChild(n);}function v$1(l,u,i){var t,o,r,f={};for(r in u)"key"==r?t=u[r]:"ref"==r?o=u[r]:f[r]=u[r];if(arguments.length>2&&(f.children=arguments.length>3?n.call(arguments,2):i),"function"==typeof l&&null!=l.defaultProps)for(r in l.defaultProps)void 0===f[r]&&(f[r]=l.defaultProps[r]);return y$1(l,f,t,o,null)}function y$1(n,i,t,o,r){var f={type:n,props:i,key:t,ref:o,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:null==r?++u$1:r};return null!=l$1.vnode&&l$1.vnode(f),f}function d$1(n){return n.children}function _$1(n,l){this.props=n,this.context=l;}function k$1(n,l){if(null==l)return n.__?k$1(n.__,n.__.__k.indexOf(n)+1):null;for(var u;l<n.__k.length;l++)if(null!=(u=n.__k[l])&&null!=u.__e)return u.__e;return "function"==typeof n.type?k$1(n):null}function b$1(n){var l,u;if(null!=(n=n.__)&&null!=n.__c){for(n.__e=n.__c.base=null,l=0;l<n.__k.length;l++)if(null!=(u=n.__k[l])&&null!=u.__e){n.__e=n.__c.base=u.__e;break}return b$1(n)}}function m$1(n){(!n.__d&&(n.__d=!0)&&t$1.push(n)&&!g$2.__r++||r$1!==l$1.debounceRendering)&&((r$1=l$1.debounceRendering)||o$1)(g$2);}function g$2(){for(var n;g$2.__r=t$1.length;)n=t$1.sort(function(n,l){return n.__v.__b-l.__v.__b}),t$1=[],n.some(function(n){var l,u,i,t,o,r;n.__d&&(o=(t=(l=n).__v).__e,(r=l.__P)&&(u=[],(i=a$1({},t)).__v=t.__v+1,j$2(r,t,i,l.__n,void 0!==r.ownerSVGElement,null!=t.__h?[o]:null,u,null==o?k$1(t):o,t.__h),z(u,t),t.__e!=o&&b$1(t)));});}function w$2(n,l,u,i,t,o,r,f,s,a){var h,v,p,_,b,m,g,w=i&&i.__k||c$1,A=w.length;for(u.__k=[],h=0;h<l.length;h++)if(null!=(_=u.__k[h]=null==(_=l[h])||"boolean"==typeof _?null:"string"==typeof _||"number"==typeof _||"bigint"==typeof _?y$1(null,_,null,null,_):Array.isArray(_)?y$1(d$1,{children:_},null,null,null):_.__b>0?y$1(_.type,_.props,_.key,null,_.__v):_)){if(_.__=u,_.__b=u.__b+1,null===(p=w[h])||p&&_.key==p.key&&_.type===p.type)w[h]=void 0;else for(v=0;v<A;v++){if((p=w[v])&&_.key==p.key&&_.type===p.type){w[v]=void 0;break}p=null;}j$2(n,_,p=p||e$1,t,o,r,f,s,a),b=_.__e,(v=_.ref)&&p.ref!=v&&(g||(g=[]),p.ref&&g.push(p.ref,null,_),g.push(v,_.__c||b,_)),null!=b?(null==m&&(m=b),"function"==typeof _.type&&null!=_.__k&&_.__k===p.__k?_.__d=s=x$1(_,s,n):s=P$1(n,_,p,w,b,s),a||"option"!==u.type?"function"==typeof u.type&&(u.__d=s):n.value=""):s&&p.__e==s&&s.parentNode!=n&&(s=k$1(p));}for(u.__e=m,h=A;h--;)null!=w[h]&&("function"==typeof u.type&&null!=w[h].__e&&w[h].__e==u.__d&&(u.__d=k$1(i,h+1)),N(w[h],w[h]));if(g)for(h=0;h<g.length;h++)M$1(g[h],g[++h],g[++h]);}function x$1(n,l,u){var i,t;for(i=0;i<n.__k.length;i++)(t=n.__k[i])&&(t.__=n,l="function"==typeof t.type?x$1(t,l,u):P$1(u,t,t,n.__k,t.__e,l));return l}function A$2(n,l){return l=l||[],null==n||"boolean"==typeof n||(Array.isArray(n)?n.some(function(n){A$2(n,l);}):l.push(n)),l}function P$1(n,l,u,i,t,o){var r,f,e;if(void 0!==l.__d)r=l.__d,l.__d=void 0;else if(null==u||t!=o||null==t.parentNode)n:if(null==o||o.parentNode!==n)n.appendChild(t),r=null;else {for(f=o,e=0;(f=f.nextSibling)&&e<i.length;e+=2)if(f==t)break n;n.insertBefore(t,o),r=o;}return void 0!==r?r:t.nextSibling}function C$1(n,l,u,i,t){var o;for(o in u)"children"===o||"key"===o||o in l||H$1(n,o,null,u[o],i);for(o in l)t&&"function"!=typeof l[o]||"children"===o||"key"===o||"value"===o||"checked"===o||u[o]===l[o]||H$1(n,o,l[o],u[o],i);}function $$1(n,l,u){"-"===l[0]?n.setProperty(l,u):n[l]=null==u?"":"number"!=typeof u||s$1.test(l)?u:u+"px";}function H$1(n,l,u,i,t){var o;n:if("style"===l)if("string"==typeof u)n.style.cssText=u;else {if("string"==typeof i&&(n.style.cssText=i=""),i)for(l in i)u&&l in u||$$1(n.style,l,"");if(u)for(l in u)i&&u[l]===i[l]||$$1(n.style,l,u[l]);}else if("o"===l[0]&&"n"===l[1])o=l!==(l=l.replace(/Capture$/,"")),l=l.toLowerCase()in n?l.toLowerCase().slice(2):l.slice(2),n.l||(n.l={}),n.l[l+o]=u,u?i||n.addEventListener(l,o?T$1:I,o):n.removeEventListener(l,o?T$1:I,o);else if("dangerouslySetInnerHTML"!==l){if(t)l=l.replace(/xlink[H:h]/,"h").replace(/sName$/,"s");else if("href"!==l&&"list"!==l&&"form"!==l&&"tabIndex"!==l&&"download"!==l&&l in n)try{n[l]=null==u?"":u;break n}catch(n){}"function"==typeof u||(null!=u&&(!1!==u||"a"===l[0]&&"r"===l[1])?n.setAttribute(l,u):n.removeAttribute(l));}}function I(n){this.l[n.type+!1](l$1.event?l$1.event(n):n);}function T$1(n){this.l[n.type+!0](l$1.event?l$1.event(n):n);}function j$2(n,u,i,t,o,r,f,e,c){var s,h,v,y,p,k,b,m,g,x,A,P=u.type;if(void 0!==u.constructor)return null;null!=i.__h&&(c=i.__h,e=u.__e=i.__e,u.__h=null,r=[e]),(s=l$1.__b)&&s(u);try{n:if("function"==typeof P){if(m=u.props,g=(s=P.contextType)&&t[s.__c],x=s?g?g.props.value:s.__:t,i.__c?b=(h=u.__c=i.__c).__=h.__E:("prototype"in P&&P.prototype.render?u.__c=h=new P(m,x):(u.__c=h=new _$1(m,x),h.constructor=P,h.render=O$1),g&&g.sub(h),h.props=m,h.state||(h.state={}),h.context=x,h.__n=t,v=h.__d=!0,h.__h=[]),null==h.__s&&(h.__s=h.state),null!=P.getDerivedStateFromProps&&(h.__s==h.state&&(h.__s=a$1({},h.__s)),a$1(h.__s,P.getDerivedStateFromProps(m,h.__s))),y=h.props,p=h.state,v)null==P.getDerivedStateFromProps&&null!=h.componentWillMount&&h.componentWillMount(),null!=h.componentDidMount&&h.__h.push(h.componentDidMount);else {if(null==P.getDerivedStateFromProps&&m!==y&&null!=h.componentWillReceiveProps&&h.componentWillReceiveProps(m,x),!h.__e&&null!=h.shouldComponentUpdate&&!1===h.shouldComponentUpdate(m,h.__s,x)||u.__v===i.__v){h.props=m,h.state=h.__s,u.__v!==i.__v&&(h.__d=!1),h.__v=u,u.__e=i.__e,u.__k=i.__k,u.__k.forEach(function(n){n&&(n.__=u);}),h.__h.length&&f.push(h);break n}null!=h.componentWillUpdate&&h.componentWillUpdate(m,h.__s,x),null!=h.componentDidUpdate&&h.__h.push(function(){h.componentDidUpdate(y,p,k);});}h.context=x,h.props=m,h.state=h.__s,(s=l$1.__r)&&s(u),h.__d=!1,h.__v=u,h.__P=n,s=h.render(h.props,h.state,h.context),h.state=h.__s,null!=h.getChildContext&&(t=a$1(a$1({},t),h.getChildContext())),v||null==h.getSnapshotBeforeUpdate||(k=h.getSnapshotBeforeUpdate(y,p)),A=null!=s&&s.type===d$1&&null==s.key?s.props.children:s,w$2(n,Array.isArray(A)?A:[A],u,i,t,o,r,f,e,c),h.base=u.__e,u.__h=null,h.__h.length&&f.push(h),b&&(h.__E=h.__=null),h.__e=!1;}else null==r&&u.__v===i.__v?(u.__k=i.__k,u.__e=i.__e):u.__e=L$1(i.__e,u,i,t,o,r,f,c);(s=l$1.diffed)&&s(u);}catch(n){u.__v=null,(c||null!=r)&&(u.__e=e,u.__h=!!c,r[r.indexOf(e)]=null),l$1.__e(n,u,i);}}function z(n,u){l$1.__c&&l$1.__c(u,n),n.some(function(u){try{n=u.__h,u.__h=[],n.some(function(n){n.call(u);});}catch(n){l$1.__e(n,u.__v);}});}function L$1(l,u,i,t,o,r,f,c){var s,a,v,y=i.props,p=u.props,d=u.type,_=0;if("svg"===d&&(o=!0),null!=r)for(;_<r.length;_++)if((s=r[_])&&(s===l||(d?s.localName==d:3==s.nodeType))){l=s,r[_]=null;break}if(null==l){if(null===d)return document.createTextNode(p);l=o?document.createElementNS("http://www.w3.org/2000/svg",d):document.createElement(d,p.is&&p),r=null,c=!1;}if(null===d)y===p||c&&l.data===p||(l.data=p);else {if(r=r&&n.call(l.childNodes),a=(y=i.props||e$1).dangerouslySetInnerHTML,v=p.dangerouslySetInnerHTML,!c){if(null!=r)for(y={},_=0;_<l.attributes.length;_++)y[l.attributes[_].name]=l.attributes[_].value;(v||a)&&(v&&(a&&v.__html==a.__html||v.__html===l.innerHTML)||(l.innerHTML=v&&v.__html||""));}if(C$1(l,p,y,o,c),v)u.__k=[];else if(_=u.props.children,w$2(l,Array.isArray(_)?_:[_],u,i,t,o&&"foreignObject"!==d,r,f,r?r[0]:i.__k&&k$1(i,0),c),null!=r)for(_=r.length;_--;)null!=r[_]&&h$1(r[_]);c||("value"in p&&void 0!==(_=p.value)&&(_!==l.value||"progress"===d&&!_)&&H$1(l,"value",_,y.value,!1),"checked"in p&&void 0!==(_=p.checked)&&_!==l.checked&&H$1(l,"checked",_,y.checked,!1));}return l}function M$1(n,u,i){try{"function"==typeof n?n(u):n.current=u;}catch(n){l$1.__e(n,i);}}function N(n,u,i){var t,o;if(l$1.unmount&&l$1.unmount(n),(t=n.ref)&&(t.current&&t.current!==n.__e||M$1(t,null,u)),null!=(t=n.__c)){if(t.componentWillUnmount)try{t.componentWillUnmount();}catch(n){l$1.__e(n,u);}t.base=t.__P=null;}if(t=n.__k)for(o=0;o<t.length;o++)t[o]&&N(t[o],u,"function"!=typeof n.type);i||null==n.__e||h$1(n.__e),n.__e=n.__d=void 0;}function O$1(n,l,u){return this.constructor(n,u)}function S$1(u,i,t){var o,r,f;l$1.__&&l$1.__(u,i),r=(o="function"==typeof t)?null:t&&t.__k||i.__k,f=[],j$2(i,u=(!o&&t||i).__k=v$1(d$1,null,[u]),r||e$1,e$1,void 0!==i.ownerSVGElement,!o&&t?[t]:r?null:i.firstChild?n.call(i.childNodes):null,f,!o&&t?t:r?r.__e:i.firstChild,o),z(f,u);}function D(n,l){var u={__c:l="__cC"+f$1++,__:n,Consumer:function(n,l){return n.children(l)},Provider:function(n){var u,i;return this.getChildContext||(u=[],(i={})[l]=this,this.getChildContext=function(){return i},this.shouldComponentUpdate=function(n){this.props.value!==n.value&&u.some(m$1);},this.sub=function(n){u.push(n);var l=n.componentWillUnmount;n.componentWillUnmount=function(){u.splice(u.indexOf(n),1),l&&l.call(n);};}),n.children}};return u.Provider.__=u.Consumer.contextType=u}n=c$1.slice,l$1={__e:function(n,l){for(var u,i,t;l=l.__;)if((u=l.__c)&&!u.__)try{if((i=u.constructor)&&null!=i.getDerivedStateFromError&&(u.setState(i.getDerivedStateFromError(n)),t=u.__d),null!=u.componentDidCatch&&(u.componentDidCatch(n),t=u.__d),t)return u.__E=u}catch(l){n=l;}throw n}},u$1=0,_$1.prototype.setState=function(n,l){var u;u=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=a$1({},this.state),"function"==typeof n&&(n=n(a$1({},u),this.props)),n&&a$1(u,n),null!=n&&this.__v&&(l&&this.__h.push(l),m$1(this));},_$1.prototype.forceUpdate=function(n){this.__v&&(this.__e=!0,n&&this.__h.push(n),m$1(this));},_$1.prototype.render=d$1,t$1=[],o$1="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,g$2.__r=0,f$1=0;

    var t,u,r,o=0,i=[],c=l$1.__b,f=l$1.__r,e=l$1.diffed,a=l$1.__c,v=l$1.unmount;function m(t,r){l$1.__h&&l$1.__h(u,t,o||r),o=0;var i=u.__H||(u.__H={__:[],__h:[]});return t>=i.__.length&&i.__.push({}),i.__[t]}function l(n){return o=1,p(w$1,n)}function p(n,r,o){var i=m(t++,2);return i.t=n,i.__c||(i.__=[o?o(r):w$1(void 0,r),function(n){var t=i.t(i.__[0],n);i.__[0]!==t&&(i.__=[t,i.__[1]],i.__c.setState({}));}],i.__c=u),i.__}function y(r,o){var i=m(t++,3);!l$1.__s&&k(i.__H,o)&&(i.__=r,i.__H=o,u.__H.__h.push(i));}function h(r,o){var i=m(t++,4);!l$1.__s&&k(i.__H,o)&&(i.__=r,i.__H=o,u.__h.push(i));}function s(n){return o=5,d(function(){return {current:n}},[])}function _(n,t,u){o=6,h(function(){"function"==typeof n?n(t()):n&&(n.current=t());},null==u?u:u.concat(n));}function d(n,u){var r=m(t++,7);return k(r.__H,u)&&(r.__=n(),r.__H=u,r.__h=n),r.__}function A$1(n,t){return o=8,d(function(){return n},t)}function F(n){var r=u.context[n.__c],o=m(t++,9);return o.c=n,r?(null==o.__&&(o.__=!0,r.sub(u)),r.props.value):n.__}function x(){i.forEach(function(t){if(t.__P)try{t.__H.__h.forEach(g$1),t.__H.__h.forEach(j$1),t.__H.__h=[];}catch(u){t.__H.__h=[],l$1.__e(u,t.__v);}}),i=[];}l$1.__b=function(n){u=null,c&&c(n);},l$1.__r=function(n){f&&f(n),t=0;var r=(u=n.__c).__H;r&&(r.__h.forEach(g$1),r.__h.forEach(j$1),r.__h=[]);},l$1.diffed=function(t){e&&e(t);var o=t.__c;o&&o.__H&&o.__H.__h.length&&(1!==i.push(o)&&r===l$1.requestAnimationFrame||((r=l$1.requestAnimationFrame)||function(n){var t,u=function(){clearTimeout(r),b&&cancelAnimationFrame(t),setTimeout(n);},r=setTimeout(u,100);b&&(t=requestAnimationFrame(u));})(x)),u=void 0;},l$1.__c=function(t,u){u.some(function(t){try{t.__h.forEach(g$1),t.__h=t.__h.filter(function(n){return !n.__||j$1(n)});}catch(r){u.some(function(n){n.__h&&(n.__h=[]);}),u=[],l$1.__e(r,t.__v);}}),a&&a(t,u);},l$1.unmount=function(t){v&&v(t);var u=t.__c;if(u&&u.__H)try{u.__H.__.forEach(g$1);}catch(t){l$1.__e(t,u.__v);}};var b="function"==typeof requestAnimationFrame;function g$1(n){var t=u;"function"==typeof n.__c&&n.__c(),u=t;}function j$1(n){var t=u;n.__c=n.__(),u=t;}function k(n,t){return !n||n.length!==t.length||t.some(function(t,u){return t!==n[u]})}function w$1(n,t){return "function"==typeof t?t(n):t}

    function S(n,t){for(var e in t)n[e]=t[e];return n}function C(n,t){for(var e in n)if("__source"!==e&&!(e in t))return !0;for(var r in t)if("__source"!==r&&n[r]!==t[r])return !0;return !1}function E(n){this.props=n;}function g(n,t){function e(n){var e=this.props.ref,r=e==n.ref;return !r&&e&&(e.call?e(null):e.current=null),t?!t(this.props,n)||!r:C(this.props,n)}function r(t){return this.shouldComponentUpdate=e,v$1(n,t)}return r.displayName="Memo("+(n.displayName||n.name)+")",r.prototype.isReactComponent=!0,r.__f=!0,r}(E.prototype=new _$1).isPureReactComponent=!0,E.prototype.shouldComponentUpdate=function(n,t){return C(this.props,n)||C(this.state,t)};var w=l$1.__b;l$1.__b=function(n){n.type&&n.type.__f&&n.ref&&(n.props.ref=n.ref,n.ref=null),w&&w(n);};var A=l$1.__e;l$1.__e=function(n,t,e){if(n.then)for(var r,u=t;u=u.__;)if((r=u.__c)&&r.__c)return null==t.__e&&(t.__e=e.__e,t.__k=e.__k),r.__c(n,t);A(n,t,e);};var O=l$1.unmount;function L(){this.__u=0,this.t=null,this.__b=null;}function U(n){var t=n.__.__c;return t&&t.__e&&t.__e(n)}function M(){this.u=null,this.o=null;}l$1.unmount=function(n){var t=n.__c;t&&t.__R&&t.__R(),t&&!0===n.__h&&(n.type=null),O&&O(n);},(L.prototype=new _$1).__c=function(n,t){var e=t.__c,r=this;null==r.t&&(r.t=[]),r.t.push(e);var u=U(r.__v),o=!1,i=function(){o||(o=!0,e.__R=null,u?u(l):l());};e.__R=i;var l=function(){if(!--r.__u){if(r.state.__e){var n=r.state.__e;r.__v.__k[0]=function n(t,e,r){return t&&(t.__v=null,t.__k=t.__k&&t.__k.map(function(t){return n(t,e,r)}),t.__c&&t.__c.__P===e&&(t.__e&&r.insertBefore(t.__e,t.__d),t.__c.__e=!0,t.__c.__P=r)),t}(n,n.__c.__P,n.__c.__O);}var t;for(r.setState({__e:r.__b=null});t=r.t.pop();)t.forceUpdate();}},f=!0===t.__h;r.__u++||f||r.setState({__e:r.__b=r.__v.__k[0]}),n.then(i,i);},L.prototype.componentWillUnmount=function(){this.t=[];},L.prototype.render=function(n,t){if(this.__b){if(this.__v.__k){var e=document.createElement("div"),r=this.__v.__k[0].__c;this.__v.__k[0]=function n(t,e,r){return t&&(t.__c&&t.__c.__H&&(t.__c.__H.__.forEach(function(n){"function"==typeof n.__c&&n.__c();}),t.__c.__H=null),null!=(t=S({},t)).__c&&(t.__c.__P===r&&(t.__c.__P=e),t.__c=null),t.__k=t.__k&&t.__k.map(function(t){return n(t,e,r)})),t}(this.__b,e,r.__O=r.__P);}this.__b=null;}var u=t.__e&&v$1(d$1,null,n.fallback);return u&&(u.__h=null),[v$1(d$1,null,t.__e?null:n.children),u]};var T=function(n,t,e){if(++e[1]===e[0]&&n.o.delete(t),n.props.revealOrder&&("t"!==n.props.revealOrder[0]||!n.o.size))for(e=n.u;e;){for(;e.length>3;)e.pop()();if(e[1]<e[0])break;n.u=e=e[2];}};(M.prototype=new _$1).__e=function(n){var t=this,e=U(t.__v),r=t.o.get(n);return r[0]++,function(u){var o=function(){t.props.revealOrder?(r.push(u),T(t,n,r)):u();};e?e(o):o();}},M.prototype.render=function(n){this.u=null,this.o=new Map;var t=A$2(n.children);n.revealOrder&&"b"===n.revealOrder[0]&&t.reverse();for(var e=t.length;e--;)this.o.set(t[e],this.u=[1,0,this.u]);return n.children},M.prototype.componentDidUpdate=M.prototype.componentDidMount=function(){var n=this;this.o.forEach(function(t,e){T(n,e,t);});};var j="undefined"!=typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,P=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|fill|flood|font|glyph(?!R)|horiz|marker(?!H|W|U)|overline|paint|stop|strikethrough|stroke|text(?!L)|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,V=function(n){return ("undefined"!=typeof Symbol&&"symbol"==typeof Symbol()?/fil|che|rad/i:/fil|che|ra/i).test(n)};_$1.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach(function(n){Object.defineProperty(_$1.prototype,n,{configurable:!0,get:function(){return this["UNSAFE_"+n]},set:function(t){Object.defineProperty(this,n,{configurable:!0,writable:!0,value:t});}});});var H=l$1.event;function Z(){}function Y(){return this.cancelBubble}function $(){return this.defaultPrevented}l$1.event=function(n){return H&&(n=H(n)),n.persist=Z,n.isPropagationStopped=Y,n.isDefaultPrevented=$,n.nativeEvent=n};var G={configurable:!0,get:function(){return this.class}},J=l$1.vnode;l$1.vnode=function(n){var t=n.type,e=n.props,r=e;if("string"==typeof t){for(var u in r={},e){var o=e[u];"value"===u&&"defaultValue"in e&&null==o||("defaultValue"===u&&"value"in e&&null==e.value?u="value":"download"===u&&!0===o?o="":/ondoubleclick/i.test(u)?u="ondblclick":/^onchange(textarea|input)/i.test(u+t)&&!V(e.type)?u="oninput":/^on(Ani|Tra|Tou|BeforeInp)/.test(u)?u=u.toLowerCase():P.test(u)?u=u.replace(/[A-Z0-9]/,"-$&").toLowerCase():null===o&&(o=void 0),r[u]=o);}"select"==t&&r.multiple&&Array.isArray(r.value)&&(r.value=A$2(e.children).forEach(function(n){n.props.selected=-1!=r.value.indexOf(n.props.value);})),"select"==t&&null!=r.defaultValue&&(r.value=A$2(e.children).forEach(function(n){n.props.selected=r.multiple?-1!=r.defaultValue.indexOf(n.props.value):r.defaultValue==n.props.value;})),n.props=r;}t&&e.class!=e.className&&(G.enumerable="className"in e,null!=e.className&&(r.class=e.className),Object.defineProperty(r,"className",G)),n.$$typeof=j,J&&J(n);};var K=l$1.__r;l$1.__r=function(n){K&&K(n);};

    function useMergedChildren(lhsProps, rhsProps) {
        const lhs = lhsProps?.children;
        const rhs = rhsProps?.children;
        if (lhs == null && rhs == null) {
            return undefined;
        }
        else if (lhs == null) {
            return rhs;
        }
        else if (rhs == null) {
            return lhs;
        }
        else {
            let ret = v$1(d$1, {}, lhs, rhs);
            return ret;
        }
    }

    function toVal(mix) {
    	var k, y, str='';

    	if (typeof mix === 'string' || typeof mix === 'number') {
    		str += mix;
    	} else if (typeof mix === 'object') {
    		if (Array.isArray(mix)) {
    			for (k=0; k < mix.length; k++) {
    				if (mix[k]) {
    					if (y = toVal(mix[k])) {
    						str && (str += ' ');
    						str += y;
    					}
    				}
    			}
    		} else {
    			for (k in mix) {
    				if (mix[k]) {
    					str && (str += ' ');
    					str += k;
    				}
    			}
    		}
    	}

    	return str;
    }

    function clsx () {
    	var i=0, tmp, x, str='';
    	while (i < arguments.length) {
    		if (tmp = arguments[i++]) {
    			if (x = toVal(tmp)) {
    				str && (str += ' ');
    				str += x;
    			}
    		}
    	}
    	return str;
    }

    /**
     * Given two sets of props, merges their `class` and `className` properties.
     * Duplicate classes are removed (order doesn't matter anyway).
     *
     * @param lhs Classes of the first component
     * @param rhs Classes of the second component
     * @returns A string representing all combined classes from both arguments.
     */
    function useMergedClasses(lhs, rhs) {
        // Note: For the sake of forward compatibility, this function is labelled as
        // a hook, but as it uses no other hooks it technically isn't one.
        return mergeClasses(lhs, rhs);
    }
    function mergeClasses(lhs, rhs) {
        const lhsClass = lhs?.class;
        const lhsClassName = lhs?.className;
        const rhsClass = rhs?.class;
        const rhsClassName = rhs?.className;
        if (lhsClass || rhsClass || lhsClassName || rhsClassName) {
            let lhsClasses = clsx(lhsClass, lhsClassName).split(" ");
            let rhsClasses = clsx(rhsClass, rhsClassName).split(" ");
            let allClasses = new Set([...Array.from(lhsClasses), ...Array.from(rhsClasses)]);
            return Array.from(allClasses).join(" ");
        }
        else {
            return undefined;
        }
    }

    function processRef(instance, ref) {
        if (typeof ref === "function") {
            ref(instance);
        }
        else if (ref != null) {
            ref.current = instance;
        }
    }
    /**
     * Combines two refs into one. This allows a component to both use its own ref *and* forward a ref that was given to it.
     * @param lhs
     * @param rhs
     * @returns
     */
    function useMergedRefs() {
        return function (lhsProps, rhsProps) {
            const lhs = lhsProps?.ref;
            const rhs = rhsProps?.ref;
            if (lhs == null && rhs == null) {
                return undefined;
            }
            else if (lhs == null) {
                return rhs;
            }
            else if (rhs == null) {
                return lhs;
            }
            else {
                let ret = A$1((current) => {
                    processRef(current, lhs);
                    processRef(current, rhs);
                }, [lhs, rhs]);
                return ret;
            }
        };
    }
    /*
    function typetest<P extends h.JSX.HTMLAttributes<HTMLInputElement>>(props: P) {

        const ref: RefObject<HTMLInputElement> = useRef<HTMLInputElement>(null);

        function acceptsRef(ref: Ref<any>) { }
        function acceptsOptionalRef(ref: Ref<any> | undefined) { }

        const c = [
            useMergedRefs<HTMLInputElement>()(undefined, undefined),
            useMergedRefs<HTMLInputElement>()({}, undefined),
            useMergedRefs<HTMLInputElement>()(props, undefined),
            useMergedRefs<HTMLInputElement>()(undefined, props),
            useMergedRefs<HTMLInputElement>()(props, props),
            useMergedRefs<HTMLInputElement>()({ ref }, props),
            useMergedRefs<HTMLInputElement>()({ ref }, { ref: undefined }),
            useMergedRefs<HTMLInputElement>()({ ref: undefined }, { ref }),
            useMergedRefs<HTMLInputElement>()({ ref }, { ref }),
        ] as const;

        /// @ts-expect-error
        acceptsRef(c[0]);
        /// @ts-expect-error
        acceptsRef(c[1]);

        acceptsOptionalRef(c[2]);
        acceptsOptionalRef(c[3]);
        acceptsOptionalRef(c[4]);

        /// @ts-expect-error TODO
        acceptsRef(c[5]);
        acceptsRef(c[6]);
        acceptsRef(c[7]);
        acceptsRef(c[8]);
    }
    */

    /**
     * Merges two style objects, returning the result.
     *
     * @param style The user-given style prop for this component
     * @param obj The CSS properties you want added to the user-given style
     * @returns A CSS object containing the properties of both objects.
     */
    function useMergedStyles(lhs, rhs) {
        // Easy case, when there are no styles to merge return nothing.
        if (!lhs && !rhs)
            return undefined;
        if (typeof lhs != typeof rhs) {
            // Easy cases, when one is null and the other isn't.
            if (lhs && !rhs)
                return lhs;
            if (!lhs && rhs)
                return rhs;
            // They're both non-null but different types.
            // Convert the string type to an object bag type and run it again.
            if (lhs && rhs) {
                if (typeof lhs == "string")
                    return useMergedStyles({ style: Object.fromEntries(lhs.split(";").map(statement => statement.split(":"))) }, rhs);
                if (typeof rhs == "string")
                    return useMergedStyles(lhs, { style: Object.fromEntries(lhs.split(";").map(statement => statement.split(":"))) });
            }
            // Logic???
            return undefined;
        }
        // They're both strings, just concatenate them.
        if (typeof lhs == "string") {
            return `${lhs};${rhs}`; // TODO: Improve the typing to make this possible
        }
        // They're both objects, just merge them.
        return {
            ...(lhs?.style ?? {}),
            ...(rhs?.style ?? {})
        };
    }

    let log = (str) => { debugger; /* Intentional */ };
    /**
     * Given two sets of props, merges them and returns the result.
     *
     * The hook is aware of and can intelligently merge `className`, `class`, `style`, `ref`, and all event handlers.
     * @param lhs2
     * @param rhs2
     * @returns
     */
    function useMergedProps() {
        return function (lhs2, rhs2) {
            // First, put in all the properties that are easy to reason about
            // and all lhs props. We're going to merge in rhs just after.
            const { children: lhsChildren, class: lhsClass, className: lhsClassName, style: lhsStyle, ref: lhsRef, ...lhs } = lhs2;
            const { children: rhsChildren, class: rhsClass, className: rhsClassName, style: rhsStyle, ref: rhsRef, ...rhs } = rhs2;
            let ret = {
                ...lhs,
                ref: useMergedRefs()(lhs2, rhs2),
                style: useMergedStyles(lhs2, rhs2),
                className: useMergedClasses(lhs2, rhs2),
                children: useMergedChildren(lhs2, rhs2)
            };
            // Now, do *everything* else
            // Merge every remaining existing entry in lhs with what we've already put in ret.
            //const lhsEntries = Object.entries(lhs) as [keyof T, T[keyof T]][];
            const rhsEntries = Object.entries(rhs);
            for (const [rhsKey, rhsValue] of rhsEntries) {
                const lhsValue = lhs[rhsKey];
                if (typeof lhsValue === "function" || typeof rhsValue === "function") {
                    // They're both functions that can be merged (or one's a function and the other's null).
                    // Not an *easy* case, but a well-defined one.
                    const merged = mergeFunctions(lhsValue, rhsValue);
                    ret[rhsKey] = merged;
                }
                else {
                    // Uh...we're here because one of them's null, right?
                    if (lhsValue == null && rhsValue == null) {
                        if (rhsValue === null && lhsValue === undefined)
                            ret[rhsKey] = rhsValue;
                        else
                            ret[rhsKey] = lhsValue;
                    }
                    if (lhsValue == null)
                        ret[rhsKey] = rhsValue;
                    else if (rhsValue == null)
                        ret[rhsKey] = lhsValue;
                    else if (rhsValue == lhsValue) ;
                    else {
                        // Ugh.
                        // No good strategies here, just log it if requested
                        log?.();
                        ret[rhsKey] = rhsValue;
                    }
                }
            }
            return ret;
        };
    }
    function mergeFunctions(lhs, rhs) {
        if (!lhs)
            return rhs;
        if (!rhs)
            return lhs;
        return (...args) => {
            let lv = lhs?.(...args);
            let rv = rhs?.(...args);
            if (lv instanceof Promise || rv instanceof Promise)
                return Promise.all([lv, rv]);
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

    /**
     * Slightly enhanced version of `useState` that includes a getter that remains constant
     * (i.e. you can use it in `useEffect` and friends without it being a dependency).
     *
     * @param initialState
     * @returns
     */
    function useState(initialState) {
        // We keep both
        const [state, setState] = l(initialState);
        const ref = s(state);
        // Hijack the normal setter function 
        // to also set our ref to the new value
        const set = A$1((value) => {
            if (typeof value === "function") {
                let callback = value;
                setState(prevValue => {
                    let nextValue = callback(prevValue);
                    ref.current = nextValue;
                    return nextValue;
                });
            }
            else {
                ref.current = value;
                setState(value);
            }
        }, []);
        const get = () => { return ref.current; };
        console.assert(ref.current === state);
        return [state, set, get];
    }

    /**
     * Allows accessing the element a ref references as soon as it does so.
     * *This hook itself returns a hook*--useRefElementProps modifies the props that you were going to pass to an HTMLElement,
     * adding a RefCallback and merging it with any existing ref that existed on the props.
     *
     * Don't forget to provide the Element as the type argument!
     *
     * @returns The element, and the sub-hook that makes it retrievable.
     */
    function useRefElement() {
        // Let us store the actual (reference to) the element we capture
        const [element, setElement, getElement] = useState(null);
        // Create a RefCallback that's fired when mounted 
        // and that notifies us of our element when we have it
        const myRef = A$1((e) => {
            if (e)
                setElement(() => e);
        }, []);
        const useRefElementProps = A$1((props) => useMergedProps()({ ref: myRef }, props), []);
        // Return both the element and the hook that modifies 
        // the props and allows us to actually find the element
        return {
            useRefElementProps,
            element,
            getElement
        };
    }

    function capitalize(str) {
        return (str[0].toUpperCase() + str.substr(1));
    }
    /**
     * Inspects the element's style and determines the logical direction that text flows.
     *
     * Certain CSS properties, like `block-size`, respect the current writing mode and text direction.
     * But `transform`, `clip`, etc. don't.
     *
     * This is provided so that CSS properties can consistently use those logical properties.
     *
     * See https://drafts.csswg.org/css-writing-modes/#logical-to-physical
     *
     * @returns An object containing the following functions:
     * * `getLogicalDirection`: retrieves a `LogicalDirectionInfo` representing the current state of the element. (Function is constant between renders)
     * * `convertElementSize`: When used in conjunction with `useElementSize`, allows you to retrieve the logical size of an element instead of the physical size.
     * * `convertToLogicalOrientation`: Based on the current direction, converts "horizontal" or "vertical" to "inline" or "block".
     * * `convertToPhysicalOrientation`:  Based on the current direction, converts "inline" or "block" to "horizontal" or "vertical".
     */
    function useLogicalDirection(element) {
        const [writingMode, setWritingMode] = l(null);
        const [direction, setDirection] = l(null);
        const [textOrientation, setTextOrientation] = l(null);
        const writingModeRef = s(writingMode);
        const directionRef = s(direction);
        const textOrientationRef = s(textOrientation);
        h(() => { writingModeRef.current = writingMode; }, [writingMode]);
        h(() => { directionRef.current = direction; }, [direction]);
        h(() => { textOrientationRef.current = textOrientation; }, [textOrientation]);
        h(() => {
            if (element) {
                const computedStyles = window.getComputedStyle(element);
                const w = computedStyles.writingMode;
                const t = computedStyles.textOrientation;
                const d = computedStyles.direction;
                setWritingMode(w || "horizontal-tb");
                setDirection(d || "rtl");
                setTextOrientation(t || "mixed");
            }
        });
        const getLogicalDirection = A$1(() => {
            let writingMode = writingModeRef.current;
            let direction = directionRef.current;
            let textOrientation = textOrientationRef.current;
            if (!writingMode || !direction || !textOrientation)
                return null;
            if (textOrientation == "upright")
                direction = "ltr";
            return {
                ...WritingModes[writingMode ?? "horizontal-tb"][direction ?? "ltr"]
            };
        }, [writingModeRef, directionRef, textOrientationRef]);
        const convertToLogicalOrientation = A$1((elementOrientation, direction) => {
            direction ??= getLogicalDirection();
            if (direction?.inlineOrientation === elementOrientation)
                return "inline";
            return "block";
        }, [getLogicalDirection]);
        const convertToPhysicalOrientation = A$1((elementOrientation, direction) => {
            direction ??= getLogicalDirection();
            if (elementOrientation == "inline") {
                if (direction?.inlineOrientation == "horizontal")
                    return "horizontal";
                return "vertical";
            }
            else {
                if (direction?.blockOrientation == "vertical")
                    return "vertical";
                return "horizontal";
            }
        }, [getLogicalDirection]);
        const convertElementSize = A$1((elementSize, direction) => {
            direction ??= getLogicalDirection();
            if (direction) {
                const { inlineSize, blockSize, inlineDirection, blockDirection } = direction;
                // Size is relatively simple
                let clientInlineSize = elementSize[`client${capitalize(inlineSize)}`];
                let clientBlockSize = elementSize[`client${capitalize(blockSize)}`];
                let offsetInlineSize = elementSize[`offset${capitalize(inlineSize)}`];
                let offsetBlockSize = elementSize[`offset${capitalize(blockSize)}`];
                let scrollInlineSize = elementSize[`scroll${capitalize(inlineSize)}`];
                let scrollBlockSize = elementSize[`scroll${capitalize(blockSize)}`];
                // Position requires us to sometimes use one property (like `left`)
                // or sometimes two (like `left` + `width`)
                function getPhysicalLeftTop(dir) { if (dir === "ltr" || dir == "rtl")
                    return "left"; return "top"; }
                function getPhysicalRightBottom(dir) { if (dir === "rtl")
                    return "width"; if (dir === "btt")
                    return "height"; return null; }
                const f1 = getPhysicalLeftTop(inlineDirection);
                const f2 = getPhysicalRightBottom(inlineDirection);
                const f3 = getPhysicalLeftTop(blockDirection);
                const f4 = getPhysicalRightBottom(blockDirection);
                let clientInlineInset = elementSize[`client${capitalize(f1)}`] + (!f2 ? 0 : elementSize[`client${capitalize(f2)}`]);
                let scrollInlineInset = elementSize[`scroll${capitalize(f1)}`] + (!f2 ? 0 : elementSize[`scroll${capitalize(f2)}`]);
                let offsetInlineInset = elementSize[`offset${capitalize(f1)}`] + (!f2 ? 0 : elementSize[`offset${capitalize(f2)}`]);
                let clientBlockInset = elementSize[`client${capitalize(f3)}`] + (!f4 ? 0 : elementSize[`client${capitalize(f4)}`]);
                let scrollBlockInset = elementSize[`scroll${capitalize(f3)}`] + (!f4 ? 0 : elementSize[`scroll${capitalize(f4)}`]);
                let offsetBlockInset = elementSize[`offset${capitalize(f3)}`] + (!f4 ? 0 : elementSize[`offset${capitalize(f4)}`]);
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
                    offsetBlockInset,
                };
            }
            return null;
        }, [getLogicalDirection]);
        return {
            getLogicalDirection,
            convertElementSize,
            convertToLogicalOrientation,
            convertToPhysicalOrientation
        };
    }
    const HorizontalTbLtr = {
        inlineDirection: "ltr",
        blockDirection: "ttb",
        inlineOrientation: "horizontal",
        blockOrientation: "vertical",
        inlineSize: "width",
        blockSize: "height",
        leftRightDirection: "ltr",
        overUnderDirection: "ttb"
    };
    const HorizontalTbRtl = {
        ...HorizontalTbLtr,
        inlineDirection: "rtl",
    };
    const VerticalRlLtr = {
        inlineDirection: "ttb",
        blockDirection: "rtl",
        inlineOrientation: "vertical",
        blockOrientation: "horizontal",
        inlineSize: "height",
        blockSize: "width",
        leftRightDirection: "ttb",
        overUnderDirection: "rtl"
    };
    const VerticalRlRtl = {
        ...VerticalRlLtr,
        inlineDirection: "btt"
    };
    const SidewaysRlLtr = { ...VerticalRlLtr };
    const SidewaysRlRtl = { ...VerticalRlRtl };
    const VerticalLrLtr = {
        ...VerticalRlLtr,
        blockDirection: "ltr",
    };
    const VerticalLrRtl = {
        ...VerticalRlRtl,
        blockDirection: "ltr",
    };
    const SidewaysLtLtr = {
        ...VerticalLrLtr,
        inlineDirection: "btt",
        leftRightDirection: "btt",
        overUnderDirection: "ltr"
    };
    const SidewaysLtRtl = {
        ...SidewaysLtLtr,
        inlineDirection: "ttb"
    };
    const HorizontalTb = {
        ltr: HorizontalTbLtr,
        rtl: HorizontalTbRtl
    };
    const VerticalRl = {
        ltr: VerticalRlLtr,
        rtl: VerticalRlRtl
    };
    const VerticalLr = {
        ltr: VerticalLrLtr,
        rtl: VerticalLrRtl
    };
    const SidewaysRl = {
        ltr: SidewaysRlLtr,
        rtl: SidewaysRlRtl
    };
    const SidewaysLr = {
        ltr: SidewaysLtLtr,
        rtl: SidewaysLtRtl
    };
    const WritingModes = {
        "horizontal-tb": HorizontalTb,
        "vertical-lr": VerticalLr,
        "vertical-rl": VerticalRl,
        "sideways-lr": SidewaysLr,
        "sideways-rl": SidewaysRl
    };

    /**
     * Given an input value, returns a constant getter function that can be used
     * inside of `useEffect` and friends without including it in the dependency array.
     *
     * Use with caution, and **do not use the getter in useLayoutEffect!!**
     * `setState`'s getter does not have this problem, but then you're using your own state
     * instead of an existing value, which might not always be feasible.
     *
     * Weigh your options, and hopefully one of them gets the job done.
     *
     * @param value
     * @returns
     */
    function useStableGetter(value) {
        const ref = s(value);
        _(ref, () => value);
        return A$1(() => { return ref.current; }, []);
    }

    /**
     * Alternate useCallback() which always returns the same (wrapped) function reference
     * so that it can be excluded from the dependency arrays of `useEffect` and friends.
     *
     * DO NOT USE THE RESULT IN useLayoutEffect!!
     *
     * TODO: Investigate options.diffed if the useLayoutEffect limitation becomes limitlessly limiting.
     *
     * Source: https://github.com/facebook/react/issues/14099#issuecomment-659298422
     */
    function useStableCallback(fn) {
        const currentCallbackGetter = useStableGetter(fn);
        return A$1((...args) => {
            const currentFunc = currentCallbackGetter();
            if (!currentFunc) {
                throw new Error('Callback retrieved from useStableCallback() cannot be called from useLayoutEffect().');
            }
            return currentFunc(...args);
        }, []);
    }

    /**
     * Wrap the native `useLayoutEffect` to add arguments
     * that allow accessing the previous value as the first argument,
     * as well as the changes that caused the hook to be called as the second argument.
     *
     * @param effect
     * @param inputs
     */
    function useLayoutEffect(effect, inputs) {
        const prevInputs = s(inputs);
        const effect2 = () => {
            let changes = [];
            for (let i = 0; i < Math.max(prevInputs.current.length, inputs.length); ++i) {
                if (prevInputs.current[i] != inputs[i])
                    changes[i] = { from: prevInputs.current[i], to: inputs[i] };
            }
            effect(prevInputs.current, changes);
            prevInputs.current = inputs;
        };
        h(effect2, inputs);
    }

    function useTimeout({ timeout, callback, triggerIndex }) {
        const stableCallback = useStableCallback(callback);
        const getTimeout = useStableGetter(timeout);
        const timeoutIsNull = (timeout == null);
        y(() => {
            const timeout = getTimeout();
            console.assert(timeoutIsNull == (timeout == null));
            if (timeout) {
                const handle = setTimeout(stableCallback, timeout);
                return () => clearTimeout(handle);
            }
        }, [triggerIndex, timeoutIsNull]);
    }

    /**
     * Given an asyncronous event handler, returns a syncronous one that works on the DOM,
     * along with some other information related to the current state.
     * Does not modify any props.
     *
     * The handler is automatically throttled to only run one at a time.
     * If the handler is called, and then before it finishes, is called again,
     * it will be put on hold until the current one finishes, at which point
     * the second one will run.  If the handler is called a third time before
     * the first has finished, it will *replace* the second, so only the most
     * recently called iteration of the handler will run.
     *
     * You may optionally *also* specify a debounce parameter that waits until the
     * syncronous handler has not been called for the specified number of
     * milliseconds, at which point we *actually* run the asyncronous handler
     * according to the logic in the previous paragraph. This is in
     * *addition* to throttling the handler, and does not replace that behavior.
     *
     * Note that the parameters to the async handler are slightly different than
     * the sync handler &ndash; the first argument, as decided by you with the
     * `capture` parameter for this hook, is the "saved" information from the
     * event.  For example, the event's currentTarget's `value`, which may have
     * changed by the time the handler is *actually* called.  The second argument
     * is the original event, which might still have some useful fields on it
     * like `mouseX` or something, but is stale at least in regards to the
     * element it references.
     */
    function useAsyncHandler() {
        return function ({ capture, debounce }) {
            // Always represents whatever promise is currently being waited on, or null if none.
            const [promise, setPromise, getPromise] = useState(null);
            // Keep track of how many times we've actually called the async handler
            const [runCount, setRunCount] = useState(0);
            const [resolveCount, setResolveCount] = useState(0);
            const [rejectCount, setRejectCount] = useState(0);
            // If we're set to use a debounce, then when the timeout finishes,
            // the promise from this state object is transferred over to either 
            // the current promise or the pending promise.
            const [debouncedPromiseStarter, setDebouncedPromiseStarter, getDebouncedPromiseStarter] = useState(null);
            // When we want to start a new promise, we won't allow it to start if one is still running.
            // In that case, we store the promise (or rather, a way to start the promise) in state.
            const [pendingPromiseStarter, setPendingPromiseStarter, getPendingPromiseStarter] = useState(null);
            // We need to differentiate between `undefined` and "no error has been thrown".
            // We could also keep a separate boolean state to track that.
            const [error, setError, getError] = useState(undefined);
            const [hasError, setHasError, getHasError] = useState(false);
            const [currentCapture, setCurrentCapture, getCurrentCapture] = useState(undefined);
            const [hasCapture, setHasCapture] = useState(false);
            // Handle the debounce. Logically this happens before the main step as a sort of step 0.
            // Resets the timeout any time the handler was requested to be called again
            // and when it finishes, actually call the handler (or set it as the pending promise)
            useTimeout({
                timeout: debounce ?? null,
                callback: () => {
                    if (debouncedPromiseStarter)
                        wantToStartANewPromise(debouncedPromiseStarter);
                    setDebouncedPromiseStarter(null);
                },
                triggerIndex: debouncedPromiseStarter
            });
            // See if we should set our current promise to be whatever the pending promise is
            // (usually because the current promise finished and became null).
            useLayoutEffect(() => {
                // Our current promise just finished and there's one waiting?
                if (promise == null && pendingPromiseStarter != null) {
                    wantToStartANewPromise(pendingPromiseStarter);
                    setPendingPromiseStarter(null);
                }
            }, [promise, pendingPromiseStarter]);
            // Called any time the async handler is about to be called for whatever reason,
            // except for debounce, which comes first, as a sort of "step 0".
            // Handles all the necessary boilerplate related to choosing whether to
            // run or set as pending, resetting state variables, etc.
            function wantToStartANewPromise(startPromise) {
                let alreadyRunningPromise = (getPromise() != null);
                // Boilerplate wrapper around the given promise starter
                let P = () => {
                    // When it starts, notify the caller
                    setRunCount(r => ++r);
                    // When it completes, notify the caller
                    const onThen = () => { setResolveCount(c => ++c); };
                    // When it fails, save the error and notify the caller
                    const onCatch = (ex) => { setError(ex); setHasError(true); setRejectCount(c => ++c); };
                    // When it settles, reset our state so we can 
                    // run a pending promise if it exists
                    const onFinally = () => { setPromise(null); };
                    // Handle the special case where the handler is synchronous
                    let result;
                    try {
                        result = startPromise();
                        if (result == undefined) {
                            // It's synchronous and returned successfully.
                            // Bail out early.
                            onThen();
                            onFinally();
                            return;
                        }
                    }
                    catch (ex) {
                        // It's synchronous and threw an error.
                        // Bail out early.
                        onCatch(ex);
                        onFinally();
                    }
                    // The handler is asynchronous
                    return (async () => { await result; })().then(onThen).catch(onCatch).finally(onFinally);
                };
                if (!alreadyRunningPromise) {
                    // Start the promise immediately, because there wasn't one running already.
                    let nextPromise = P();
                    if (nextPromise == undefined) ;
                    else {
                        setError(undefined);
                        setHasError(false);
                        setPromise(nextPromise);
                    }
                }
                else {
                    // Don't start the promise yet, 
                    // and allow it to start in the future instead.
                    setPendingPromiseStarter(_ => P);
                }
            }
            let ret = {
                getSyncHandler,
                getCurrentCapture,
                callCount: runCount,
                currentCapture,
                hasCapture,
                pending: (promise != null),
                hasError,
                error,
                resolveCount,
                rejectCount,
                settleCount: rejectCount + resolveCount
            };
            return ret;
            function getSyncHandler(asyncHandler) {
                const syncHandler = useStableCallback(function syncHandler(event) {
                    if (asyncHandler == null)
                        return;
                    // Get the most significant information from the event at this time,
                    // which is necessary since the promise could actually be called much later
                    // when the element's value (etc.) has changed.
                    const captured = capture(event);
                    setCurrentCapture(captured);
                    setHasCapture(true);
                    const startPromise = () => asyncHandler(captured, event);
                    if (debounce == null) {
                        wantToStartANewPromise(startPromise);
                    }
                    else {
                        setDebouncedPromiseStarter(_ => startPromise);
                    }
                });
                return asyncHandler == null ? undefined : syncHandler;
            }
        };
    }

    /**
     *
     * There are several different ways that a focus event can happen.  Assume
     * the following steps happen in order:
     *
     * 1. The page loads.
     *    * Nothing is focused, but `document.activeElement` is `body`.
     *    * No focus events are fired.
     * 2. The window is focused, an unfocusable element is clicked, text is selected, etc.
     *    * The `activeElement` remains as `body`.
     *    * A `focus`/`focusin` event *MIGHT* be fired for `body`. Depending on
     *      the browser, this depends on whether the handler was attached to `window` or `document`.
     *      Probably just best to not rely on it, or listen to `window` focus events directly.
     * 3. A focusable element is clicked, etc.
     *    * The `activeElement` is set to the new element before any event even fires.
     *    * `focusout` and `blur` are *not* fired on `body`.
     *    * `focus` and `focusin` are fired on the new element. `relatedTarget` is null.
     * 4. A focusable element is clicked, etc.
     *    * **The `activeElement` is set to the `body`** before any event even fires.
     *    * `blur` and `focusout` are fired on the old element. `relatedTarget` is the new element.
     *    * The `activeElement` is now set to the new element.
     *    * `focusin` is fired on the new element. `relatedTarget` is the old element.
     * 5. An unfocusable element is clicked, text is selected, etc.
     *    * The `activeElement` is set to `body`.
     *    * `blur` and `focusout` are fired on the old element. `relatedTarget` is null.
     *    * `focusin` is *not* fired on `body`.
     *
     *
     * In summary:
     * 1. Focus events *do* notify us of all changes in focus, but there is no one single comprehensive event that provides us with all available information.
     * 2. `document.activeElement` *is not* always the same as what's being referenced by a focus event. In particular, it may become `body` at any arbitrary time.
     * 3. A `blur` without a `focus` can and will occur. This means it is not possible to solely use `focus` to detect all changes.
     * 4. A `blur` event whose `relatedTarget` is null indicates that there will be no following `focus` event.
     *
     *
     * @param callback
     * @returns
     */
    let currentlyFocusedElement = null;
    let lastFocusedElement = null;
    function getLastFocusedElement() {
        return lastFocusedElement;
    }
    function getCurrentlyFocusedElement() {
        return currentlyFocusedElement;
    }
    const updaters = new Set();
    function focusout(e) {
        if (e.relatedTarget == null) {
            currentlyFocusedElement = null;
            for (let f of updaters) {
                f({ current: currentlyFocusedElement, last: lastFocusedElement, windowFocused });
            }
        }
    }
    function focusin(e) {
        currentlyFocusedElement = lastFocusedElement = e.target;
        for (let f of updaters) {
            f({ current: currentlyFocusedElement, last: lastFocusedElement, windowFocused });
        }
    }
    let windowFocused = true;
    function windowFocus() {
        windowFocused = true;
        for (let f of updaters) {
            f({ current: currentlyFocusedElement, last: lastFocusedElement, windowFocused });
        }
    }
    function windowBlur() {
        windowFocused = false;
        for (let f of updaters) {
            f({ current: currentlyFocusedElement, last: lastFocusedElement, windowFocused });
        }
    }
    function useActiveElement(filter) {
        const [i, setI] = useState(0);
        h(() => {
            const F = (info) => {
                if (filter == null || filter(info))
                    setI(i => ++i);
            };
            if (updaters.size === 0) {
                document.addEventListener("focusin", focusin, { passive: true });
                document.addEventListener("focusout", focusout, { passive: true });
                window.addEventListener("focus", windowFocus, { passive: true });
                window.addEventListener("blur", windowBlur, { passive: true });
            }
            updaters.add(F);
            return () => {
                updaters.delete(F);
                if (updaters.size === 0) {
                    document.removeEventListener("focusin", focusin);
                    document.removeEventListener("focusout", focusout);
                    window.removeEventListener("focus", windowFocus);
                    window.removeEventListener("blur", windowBlur);
                }
            };
        }, [filter]);
        return {
            activeElement: currentlyFocusedElement,
            lastActiveElement: lastFocusedElement,
            getActiveElement: getCurrentlyFocusedElement,
            getLastActiveElement: getLastFocusedElement,
            windowFocused
        };
    }

    function useHasFocus({} = {}) {
        // These are slightly redundant, but any time the focus changes, we need to know if it's "relevant" to us.
        // It's "relevant" if the newly-focused element is a child of us,
        // OR if we're focused and focus moves OUTSIDE of us our our children.
        // Because of that second bit, we need to keep track of where the focus was the last time we checked for the filter.
        const [hasFocus, setHasFocus, getHasFocus] = useState(false);
        const [hasLastFocus, setHasLastFocus, getHasLastFocus] = useState(false);
        const { element, getElement, useRefElementProps } = useRefElement();
        const { activeElement, lastActiveElement } = useActiveElement(A$1(({ current, last, windowFocused }) => {
            // Keep in mind that once we get our element, even if the hook and filter functions
            // don't re-run, the currently-focused element will still be returned below, and,
            // even if it's not us or one of our children, will still be safely filtered out at render time.
            let element = getElement();
            if (!element)
                return false;
            let hasFocusNow = (element.contains(current) || element.contains(last));
            if (hasFocusNow) {
                return true;
            }
            else {
                let hadFocusBeforeThis = (getHasLastFocus() || getHasFocus());
                if (hadFocusBeforeThis) {
                    // Return true once, so that useActiveElement will return one instance of a different element having focus.
                    // Then, back outside this filter function, we'll know that we're no longer focused.
                    return true;
                }
                return false;
            }
        }, []));
        // These are primarily used for bookkeeping during the filter function above.
        h(() => { setHasFocus(element?.contains(activeElement) ?? false); }, [element, activeElement]);
        h(() => { setHasLastFocus(element?.contains(lastActiveElement) ?? false); }, [element, lastActiveElement]);
        const useHasFocusProps = A$1((props) => { return useRefElementProps(props); }, [useRefElementProps]);
        const focused = d(() => { return element == activeElement; }, [element, activeElement]);
        const focusedInner = d(() => { return element?.contains(activeElement) ?? false; }, [element, activeElement]);
        const lastFocused = d(() => { return element == lastActiveElement; }, [element, lastActiveElement]);
        const lastFocusedInner = d(() => { return element?.contains(lastActiveElement) ?? false; }, [element, lastActiveElement]);
        return {
            useHasFocusProps,
            focused,
            focusedInner,
            lastFocused,
            lastFocusedInner
        };
    }

    /**
     * Allows a parent component to access information about certain
     * child components once they have rendered.
     *
     * This hook is slightly more complicated in that it returns both a
     * prop-modifying hook, but also a hook that each child will need
     * to use: `useManagedChild`.  It's stable across renders, so just
     * toss it into a `Context` so the children can have access to it.
     * This function registers the child with the parent and provides
     * it with any requested information, but doesn't do anything else
     * until it unmounts and retracts that information.
     */
    function useChildManager() {
        // This is blindly updated any time a child mounts or unmounts itself.
        // Used to make sure that any time the array of managed children updates,
        // we also re-render.
        const [childUpdateIndex, setChildUpdateIndex] = useState(0);
        const [totalChildrenMounted, setTotalChildrenMounted, getTotalChildrenMounted] = useState(0);
        const [totalChildrenUnounted, setTotalChildrenUnounted, getTotalChildrenUnounted] = useState(0);
        const childrenCurrentlyMounted = totalChildrenMounted - totalChildrenUnounted;
        const managedChildren = s([] /** TODO: Any problems caused by using an array when it should be an object? */);
        const mountedChildren = s([]);
        const mountOrder = s(new Map());
        const indicesByElement = s(new Map());
        const getMountIndex = A$1((index) => { return mountOrder.current.get(index); }, []);
        const useManagedChild = A$1((info) => {
            const { element, getElement, useRefElementProps } = useRefElement();
            useLayoutEffect(() => {
                let index = getTotalChildrenMounted();
                mountOrder.current.set(info.index, index);
                mountedChildren.current[index] = info;
                setTotalChildrenMounted(t => ++t);
                return () => { mountOrder.current.delete(info.index); mountedChildren.current[index] = null; setTotalChildrenUnounted(t => ++t); };
            }, [info.index]);
            // As soon as the component mounts, notify the parent and request a rerender.
            useLayoutEffect(([prevElement, prevIndex], changes) => {
                if (element) {
                    indicesByElement.current.set(element, info.index);
                    if (managedChildren.current[info.index] != undefined) {
                        console.assert(info.index == undefined, "Two children with the same index were added, which may result in unexpected behavior.");
                        debugger; // Intentional
                    }
                    setChildUpdateIndex(c => ++c);
                    managedChildren.current[info.index] = { ...info };
                    return () => {
                        setChildUpdateIndex(c => ++c);
                        delete managedChildren.current[info.index];
                        indicesByElement.current.delete(element);
                    };
                }
            }, [element, info.index]);
            // Any time our child props change, make that information available generally.
            // *Don't re-render*, otherwise we'd be stuck in an
            // infinite loop every time an anonymous function is passed.
            // It comes in from the props so the child was already updated by it --
            // we don't need the parent to re-render every single child any time
            // "onClick" updates or whatever.  The relevant child already knows,
            // and that's what matters.
            useLayoutEffect(() => {
                if (managedChildren.current[info.index] != undefined)
                    managedChildren.current[info.index] = { ...info };
            }, [...Object.entries(info).flat()]);
            return { element, getElement, useManagedChildProps: useRefElementProps };
        }, []);
        return {
            useManagedChild,
            childCount: childrenCurrentlyMounted,
            managedChildren: managedChildren.current,
            mountedChildren: mountedChildren.current,
            indicesByElement: indicesByElement.current,
            totalChildrenMounted,
            totalChildrenUnounted,
            getMountIndex
        };
    }
    /**
     * Helper function for letting children know when they are or are not the
     * current selected/expanded/focused/whatever child.
     *
     * Automatically handles when children are mounted & unmounted and such.
     *
     * @param activatedIndex What index the current selected (etc.) child is
     * @param length How many children exist (as managedChildren.length)
     * @param setFlag A function that probably looks like (i, flag) => managedChildren[i].setActive(flag)
     */
    function useChildFlag(activatedIndex, length, setFlag) {
        const [prevActivatedIndex, setPrevActivatedIndex, getPrevActivatedIndex] = useState(null);
        const [prevChildCount, setPrevChildCount, getPrevChildCount] = useState(length);
        // Any time the number of components changes,
        // reset any initial, possibly incorrect state they might have had, just in case.
        useLayoutEffect(() => {
            const direction = Math.sign(length - getPrevChildCount());
            if (direction !== 0) {
                for (let i = getPrevChildCount() ?? 0; i != length; i += direction) {
                    setFlag(i, i === activatedIndex);
                }
                setPrevChildCount(length);
            }
        }, [setFlag, activatedIndex, length]);
        useLayoutEffect(() => {
            // Deactivate the previously activated component
            const prevActivatedIndex = getPrevActivatedIndex();
            if (prevActivatedIndex != activatedIndex) {
                if (prevActivatedIndex != null && prevActivatedIndex >= 0 && prevActivatedIndex < length)
                    setFlag(prevActivatedIndex, false);
            }
            // Activate the current component
            if (activatedIndex != null && activatedIndex >= 0 && activatedIndex < length) {
                setFlag(activatedIndex, true);
                setPrevActivatedIndex(activatedIndex);
            }
        }, [setFlag, activatedIndex, length]);
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
     * `focusOnChange` should be set to true if focus is
     * contained within whatever element contains the roving tab index.
     * Generally as simple as the following:
     * ```
     * const { focused, focusedInner, useHasFocusProps } = useHasFocus<ParentElement>();
     * const focusOnChange = (focusedInner != false);
     * ```
     * It's not included here because `useRovingTabIndex` doesn't know
     * anything about the container element, only children elements.
     * And just as well! Children should be allowed at the root,
     * regardless of if it's the whole app or just a given component.
     */
    function useRovingTabIndex({ focusOnChange: foc, tabbableIndex }) {
        const [rerenderAndFocus, setRerenderAndFocus] = useState(null);
        const getFocusOnChange = useStableGetter(foc);
        const getTabbableIndex = useStableGetter(tabbableIndex);
        s(-Infinity);
        // Call the hook that allows us to collect information from children who provide it
        const { managedChildren, childCount, useManagedChild, indicesByElement, ...rest } = useChildManager();
        // Any time the tabbable index changes,
        // notify the previous child that it's no longer tabbable,
        // and notify the next child that is allowed to be tabbed to.
        useChildFlag(tabbableIndex, childCount, (index, tabbable) => {
            if (index != null)
                managedChildren[index]?.setTabbable(tabbable);
        });
        A$1(() => {
            if (tabbableIndex != null)
                managedChildren[tabbableIndex].setTabbable(true);
        }, [tabbableIndex]);
        const useRovingTabIndexChild = A$1((info) => {
            const [rrafIndex, setRrafIndex] = useState(1);
            const rerenderAndFocus = A$1(() => { setRrafIndex(i => ++i); }, []);
            let newInfo = {
                ...info,
                rerenderAndFocus,
                setTabbable: A$1((tabbable) => { setTabbable(tabbable); }, [])
            };
            const { element, getElement, useManagedChildProps } = useManagedChild(newInfo);
            // TODO: Using getTabbableIndex during render phase on mount
            const [tabbable, setTabbable] = useState(getTabbableIndex() == info.index);
            y(() => {
                if (element && tabbable) {
                    setRerenderAndFocus(_ => rerenderAndFocus);
                    if (getFocusOnChange() && "focus" in element) {
                        requestAnimationFrame(() => {
                            queueMicrotask(() => {
                                element.focus();
                            });
                        });
                    }
                }
            }, [element, tabbable, rrafIndex]);
            function useRovingTabIndexSiblingProps({ tabIndex, ...props }) {
                if (tabIndex == null) {
                    if (tabbable)
                        tabIndex = 0;
                    else
                        tabIndex = -1;
                }
                return useMergedProps()({ tabIndex }, props);
            }
            function useRovingTabIndexChildProps({ tabIndex, ...props }) {
                if (tabIndex == null) {
                    if (tabbable)
                        tabIndex = 0;
                    else
                        tabIndex = -1;
                }
                return useMergedProps()(useManagedChildProps({ tabIndex }), props);
            }
            return {
                useRovingTabIndexChildProps,
                useRovingTabIndexSiblingProps,
                tabbable
            };
        }, [useManagedChild]);
        return {
            useRovingTabIndexChild,
            childCount,
            managedChildren,
            indicesByElement,
            focusCurrent: rerenderAndFocus,
            ...rest
        };
    }

    /**
     * When used in tandem with `useRovingTabIndex`, allows control of
     * the tabbable index with the arrow keys.
     *
     * @see useListNavigation, which packages everything up together.
     */
    function useLinearNavigation({ getIndex, setIndex, managedChildren, navigationDirection }) {
        navigationDirection ??= "either";
        const index = getIndex();
        const childCount = managedChildren.length;
        // Make sure the tabbable index never escapes the bounds of all available children
        // TODO: Keep track of the original index and keep it, at least until keyboard navigation.
        useLayoutEffect(() => {
            if (index !== null) {
                if (index < 0) {
                    setIndex(0);
                }
                else if (childCount > 0 && index >= childCount) {
                    setIndex(childCount - 1);
                }
            }
        }, [index, childCount]);
        // These allow us to manipulate what our current tabbable child is.
        const navigateToIndex = A$1((index) => { setIndex(index < 0 ? (managedChildren.length + index) : index); }, []);
        const navigateToNext = A$1(() => { setIndex(i => ++i); }, []);
        const navigateToPrev = A$1(() => { setIndex(i => --i); }, []);
        const navigateToStart = A$1(() => { navigateToIndex(0); }, [navigateToIndex]);
        const navigateToEnd = A$1(() => { navigateToIndex(-1); }, [navigateToIndex]);
        const useLinearNavigationChild = A$1(() => {
            const { useRefElementProps, element } = useRefElement();
            // Prefer the parent element's direction so that we're not calling getComputedStyle
            // on every single individual child, which is likely redundant.
            // TODO: Does useLogicalDirection need to hold a per-render & per-element cache to make this work?
            // Or does the browser automatically cache the computations until something changes?
            // Given that the values are live, it seems like it should be the latter...
            const { convertElementSize, getLogicalDirection } = useLogicalDirection(element?.parentElement ?? element);
            const useLinearNavigationChildProps = (props) => {
                const onKeyDown = (e) => {
                    // Not handled by typeahead (i.e. assume this is a keyboard shortcut)
                    if (e.ctrlKey || e.metaKey)
                        return;
                    const info = getLogicalDirection();
                    let allowsBlockNavigation = (navigationDirection == "block" || navigationDirection == "either");
                    let allowsInlineNavigation = (navigationDirection == "inline" || navigationDirection == "either");
                    switch (e.key) {
                        case "ArrowUp": {
                            const propName = (info?.blockOrientation === "vertical" ? "blockDirection" : "inlineDirection");
                            const directionAllowed = (info?.blockOrientation === "vertical" ? allowsBlockNavigation : allowsInlineNavigation);
                            if (directionAllowed) {
                                if (info?.[propName] === "btt") {
                                    navigateToNext();
                                }
                                else {
                                    navigateToPrev();
                                }
                                e.preventDefault();
                                e.stopPropagation();
                            }
                            break;
                        }
                        case "ArrowDown": {
                            const propName = (info?.blockOrientation === "vertical" ? "blockDirection" : "inlineDirection");
                            const directionAllowed = (info?.blockOrientation === "vertical" ? allowsBlockNavigation : allowsInlineNavigation);
                            if (directionAllowed) {
                                if (info?.[propName] === "btt") {
                                    navigateToPrev();
                                }
                                else {
                                    navigateToNext();
                                }
                                e.preventDefault();
                                e.stopPropagation();
                            }
                            break;
                        }
                        case "ArrowLeft": {
                            const propName = (info?.inlineOrientation === "horizontal" ? "inlineDirection" : "blockDirection");
                            const directionAllowed = (info?.inlineOrientation === "horizontal" ? allowsInlineNavigation : allowsBlockNavigation);
                            if (directionAllowed) {
                                if (info?.[propName] === "rtl") {
                                    navigateToNext();
                                }
                                else {
                                    navigateToPrev();
                                }
                                e.preventDefault();
                                e.stopPropagation();
                            }
                            break;
                        }
                        case "ArrowRight": {
                            const propName = (info?.inlineOrientation === "horizontal" ? "inlineDirection" : "blockDirection");
                            const directionAllowed = (info?.inlineOrientation === "horizontal" ? allowsInlineNavigation : allowsBlockNavigation);
                            if (directionAllowed) {
                                if (info?.[propName] === "rtl") {
                                    navigateToPrev();
                                }
                                else {
                                    navigateToNext();
                                }
                                e.preventDefault();
                                e.stopPropagation();
                            }
                            e.preventDefault();
                            e.stopPropagation();
                            break;
                        }
                        case "Home":
                            navigateToStart();
                            e.preventDefault();
                            e.stopPropagation();
                            break;
                        case "End":
                            navigateToEnd();
                            e.preventDefault();
                            e.stopPropagation();
                            break;
                    }
                };
                return useRefElementProps(useMergedProps()({ onKeyDown }, props));
            };
            return {
                useLinearNavigationChildProps
            };
        }, [navigationDirection, navigateToNext, navigateToPrev, navigateToStart, navigateToEnd]);
        return {
            useLinearNavigationChild,
            navigateToIndex,
            navigateToNext,
            navigateToPrev,
            navigateToStart,
            navigateToEnd,
        };
    }
    /**
     * Allows for the selection of a managed child by typing the given text associated with it.
     *
     * @see useListNavigation, which packages everything up together.
     */
    function useTypeaheadNavigation({ collator, getIndex, typeaheadTimeout, setIndex }) {
        // For typeahead, keep track of what our current "search" string is (if we have one)
        // and also clear it every 1000 ms since the last time it changed.
        // Next, keep a mapping of typeahead values to indices for faster searching.
        // And, for the user's sake, let them know when their typeahead can't match anything anymore
        const [currentTypeahead, setCurrentTypeahead, getCurrentTypeahead] = useState(null);
        useTimeout({ timeout: typeaheadTimeout ?? 1000, callback: () => { setCurrentTypeahead(null); setInvalidTypeahead(null); }, triggerIndex: currentTypeahead });
        const sortedTypeaheadInfo = s([]);
        const [invalidTypeahead, setInvalidTypeahead] = useState(false);
        // Handle typeahead for input method editors as well
        // Essentially, when active, ignore further keys 
        // because we're waiting for a CompositionEnd event
        const [imeActive, setImeActive, getImeActive] = useState(false);
        // Because composition events fire *after* keydown events 
        // (but within the same task, which, TODO, could be browser-dependent),
        // we can use this to keep track of which event we're listening for on the first keydown.
        const [nextTypeaheadChar, setNextTypeaheadChar] = useState(null);
        useLayoutEffect(() => {
            if (nextTypeaheadChar !== null) {
                setCurrentTypeahead(typeahead => ((typeahead ?? "") + nextTypeaheadChar));
                setNextTypeaheadChar(null);
            }
        }, [nextTypeaheadChar]);
        const comparator = useStableCallback((lhs, rhs) => {
            let compare;
            if (typeof lhs === "string" && typeof rhs.text === "string") {
                // For the purposes of typeahead, only compare a string of the same size as our currently typed string.
                // By normalizing them first, we ensure this byte-by-byte handling of raw character data works out okay.
                let safeLhs = lhs.normalize("NFD");
                let safeRhs = rhs.text.normalize("NFD").substr(0, safeLhs.length);
                if (collator)
                    compare = collator.compare(safeLhs, safeRhs);
                else
                    compare = safeLhs.toLowerCase().localeCompare(safeRhs.toLowerCase() ?? "");
                return compare;
            }
            return lhs - rhs;
        });
        // Handle changes in typeahead that cause changes to the tabbable index
        y(() => {
            if (currentTypeahead && sortedTypeaheadInfo.current.length) {
                let sortedTypeaheadIndex = binarySearch(sortedTypeaheadInfo.current, currentTypeahead, comparator);
                if (sortedTypeaheadIndex < 0) {
                    // The user has typed an entry that doesn't exist in the list
                    // (or more specifically "for which there is no entry that starts with that input")
                    setInvalidTypeahead(true);
                }
                else {
                    setInvalidTypeahead(false);
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
                    const updateBestFit = (u) => {
                        if (lowestUnsortedIndexAll == null || u < lowestUnsortedIndexAll) {
                            lowestUnsortedIndexAll = u;
                            lowestSortedIndexAll = i;
                        }
                        if ((lowestUnsortedIndexNext == null || u < lowestUnsortedIndexNext) && u > (getIndex() ?? -Infinity)) {
                            lowestUnsortedIndexNext = u;
                            lowestSortedIndexNext = i;
                        }
                    };
                    let i = sortedTypeaheadIndex;
                    while (i >= 0 && comparator(currentTypeahead, sortedTypeaheadInfo.current[i]) == 0) {
                        updateBestFit(sortedTypeaheadInfo.current[i].unsortedIndex);
                        --i;
                    }
                    i = sortedTypeaheadIndex;
                    while (i < sortedTypeaheadInfo.current.length && comparator(currentTypeahead, sortedTypeaheadInfo.current[i]) == 0) {
                        updateBestFit(sortedTypeaheadInfo.current[i].unsortedIndex);
                        ++i;
                    }
                    if (lowestUnsortedIndexNext !== null)
                        setIndex(sortedTypeaheadInfo.current[lowestSortedIndexNext].unsortedIndex);
                    else if (lowestUnsortedIndexAll !== null)
                        setIndex(sortedTypeaheadInfo.current[lowestSortedIndexAll].unsortedIndex);
                }
            }
        }, [currentTypeahead]);
        const useTypeaheadNavigationChild = A$1(({ text, ...i }) => {
            y(() => {
                if (text) {
                    // Find where to insert this item.
                    // Because all index values should be unique, the returned sortedIndex
                    // should always refer to a new location (i.e. be negative)                
                    let sortedIndex = binarySearch(sortedTypeaheadInfo.current, text, comparator);
                    console.assert(sortedIndex < 0);
                    if (sortedIndex < 0) {
                        sortedTypeaheadInfo.current.splice(-sortedIndex - 1, 0, { text, unsortedIndex: i.index });
                    }
                    return () => {
                        // When unmounting, find where we were and remove ourselves.
                        // Again, we should always find ourselves because there should be no duplicate values if each index is unique.
                        let sortedIndex = binarySearch(sortedTypeaheadInfo.current, text, comparator);
                        console.assert(sortedIndex >= 0);
                        if (sortedIndex >= 0) {
                            sortedTypeaheadInfo.current.splice(sortedIndex, 1);
                        }
                    };
                }
            }, [text]);
            const useTypeaheadNavigationChildProps = function ({ ...props }) {
                const { useRefElementProps, element } = useRefElement();
                const onCompositionStart = (e) => { setImeActive(true); };
                const onCompositionEnd = (e) => {
                    setNextTypeaheadChar(e.data);
                    setImeActive(false);
                };
                const onKeyDown = (e) => {
                    const imeActive = getImeActive();
                    let key = e.key;
                    // Not handled by typeahead (i.e. assume this is a keyboard shortcut)
                    if (e.ctrlKey || e.metaKey)
                        return;
                    if (!imeActive && e.key === "Backspace") {
                        // Remove the last character in a way that doesn't split UTF-16 surrogates.
                        setCurrentTypeahead(t => t === null ? null : [...t].reverse().slice(1).reverse().join(""));
                        e.preventDefault();
                        e.stopPropagation();
                        return;
                    }
                    // The key property represents the typed character OR the "named key attribute" of the key pressed.
                    // There's no definite way to tell the difference, but for all intents and purposes
                    // there are no one-character names, and there are no non-ASCII-alpha names.
                    // Thus, any one-character or non-ASCII value for `key` is *almost certainly* a typed character.
                    const isCharacterKey = (key.length === 1 || !/^[A-Za-z]/.test(key));
                    if (isCharacterKey) {
                        if (key == " " && (getCurrentTypeahead() ?? "").trim().length == 0) ;
                        else {
                            e.preventDefault();
                            e.stopPropagation();
                            // Note: Won't be true for the first keydown
                            // but will be overwritten before useLayoutEffect is called
                            // to actually apply the change
                            if (!imeActive)
                                setNextTypeaheadChar(key);
                        }
                    }
                };
                return useMergedProps()(useRefElementProps({ onKeyDown, onCompositionStart, onCompositionEnd, }), props);
            };
            return {
                useTypeaheadNavigationChildProps
            };
        }, []);
        return {
            useTypeaheadNavigationChild,
            currentTypeahead,
            invalidTypeahead,
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
        var firstIndex = 0;
        var lastIndex = array.length - 1;
        while (firstIndex <= lastIndex) {
            var testIndex = (lastIndex + firstIndex) >> 1;
            var comparisonResult = comparator(wanted, array[testIndex]);
            if (comparisonResult > 0) {
                firstIndex = testIndex + 1;
            }
            else if (comparisonResult < 0) {
                lastIndex = testIndex - 1;
            }
            else {
                return testIndex;
            }
        }
        return -firstIndex - 1;
    }

    /**
     * Implements proper keyboard navigation for components like listboxes, button groups, menus, etc.
     *
     * In the document order, there will be only one "focused" or "tabbable" element, making it act more like one complete unit in comparison to everything around it.
     * Navigating forwards/backwards can be done with the arrow keys, Home/End keys, or any any text for typeahead to focus the next item that matches.
     */
    function useListNavigation({ initialIndex, focusOnChange, collator, keyNavigation }) {
        keyNavigation ??= "either";
        // Keep track of three things related to the currently tabbable element's index:
        // What it is, and whether, when we render this component and it's changed, to also focus the element that was made tabbable.
        const [tabbableIndex, setTabbableIndex, getTabbableIndex] = useState(initialIndex === undefined ? 0 : initialIndex);
        const setIndex = A$1((index) => {
            setTabbableIndex(index);
        }, []);
        const { managedChildren, indicesByElement, useRovingTabIndexChild, focusCurrent, ...rest } = useRovingTabIndex({ focusOnChange, tabbableIndex });
        const { currentTypeahead, invalidTypeahead, useTypeaheadNavigationChild } = useTypeaheadNavigation({ collator, getIndex: getTabbableIndex, setIndex, typeaheadTimeout: 1000 });
        const { navigateToEnd, navigateToIndex, navigateToNext, navigateToPrev, navigateToStart, useLinearNavigationChild } = useLinearNavigation({ navigationDirection: keyNavigation, getIndex: getTabbableIndex, setIndex, managedChildren });
        const useListNavigationChild = A$1((info) => {
            const { useTypeaheadNavigationChildProps } = useTypeaheadNavigationChild(info);
            const { useLinearNavigationChildProps } = useLinearNavigationChild();
            const { useRovingTabIndexChildProps, useRovingTabIndexSiblingProps, tabbable } = useRovingTabIndexChild(info);
            const useListNavigationChildProps = function ({ ...props }) {
                return useMergedProps()(useRovingTabIndexChildProps(useTypeaheadNavigationChildProps(useLinearNavigationChildProps({ onClick: roveToSelf }))), props);
            };
            const roveToSelf = A$1(() => { navigateToIndex(info.index); }, []);
            return {
                useListNavigationChildProps,
                useListNavigationSiblingProps: useRovingTabIndexSiblingProps,
                tabbable,
                //roveToSelf,
                //element
            };
        }, [useTypeaheadNavigationChild, useLinearNavigationChild, useRovingTabIndexChild, navigateToIndex]);
        return {
            useListNavigationChild,
            currentTypeahead,
            invalidTypeahead,
            tabbableIndex,
            setTabbableIndex,
            managedChildren,
            indicesByElement,
            navigateToIndex,
            navigateToNext,
            navigateToPrev,
            navigateToStart,
            navigateToEnd,
            focusCurrent,
            ...rest
        };
    }

    /*!
    * tabbable 5.2.0
    * @license MIT, https://github.com/focus-trap/tabbable/blob/master/LICENSE
    */
    var candidateSelectors = ['input', 'select', 'textarea', 'a[href]', 'button', '[tabindex]', 'audio[controls]', 'video[controls]', '[contenteditable]:not([contenteditable="false"])', 'details>summary:first-of-type', 'details'];
    var matches = typeof Element === 'undefined' ? function () {} : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;

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

    var isHidden = function isHidden(node, displayCheck) {
      if (getComputedStyle(node).visibility === 'hidden') {
        return true;
      }

      var isDirectSummary = matches.call(node, 'details>summary:first-of-type');
      var nodeUnderDetails = isDirectSummary ? node.parentElement : node;

      if (matches.call(nodeUnderDetails, 'details:not([open]) *')) {
        return true;
      }

      if (!displayCheck || displayCheck === 'full') {
        while (node) {
          if (getComputedStyle(node).display === 'none') {
            return true;
          }

          node = node.parentElement;
        }
      } else if (displayCheck === 'non-zero-area') {
        var _node$getBoundingClie = node.getBoundingClientRect(),
            width = _node$getBoundingClie.width,
            height = _node$getBoundingClie.height;

        return width === 0 && height === 0;
      }

      return false;
    };

    var isNodeMatchingSelectorFocusable = function isNodeMatchingSelectorFocusable(options, node) {
      if (node.disabled || isHiddenInput(node) || isHidden(node, options.displayCheck) ||
      /* For a details element with a summary, the summary element gets the focused  */
      isDetailsWithSummary(node)) {
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
                        if (sibling === element || !this[_isInertable](sibling) ||
                            (toSkip && toSkip.has(sibling))) {
                            continue;
                        }
                        // Should be collected since already inerted.
                        if (toKeepInert && sibling.inert) {
                            toKeepInert.add(sibling);
                        }
                        else {
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
                        childList: true,
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
                    const idx = target === document.body ?
                        parents.length :
                        parents.indexOf(target);
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
                        }
                        else {
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
                    current = current.parentNode ||
                        current.host;
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
                            flatten: true,
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
        document.$blockingElements =
            new BlockingElementsImpl();
    })();

    var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

    function createCommonjsModule(fn) {
      var module = { exports: {} };
    	return fn(module, module.exports), module.exports;
    }

    createCommonjsModule(function (module, exports) {
    (function (global, factory) {
      factory() ;
    }(commonjsGlobal, (function () {
      var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

      function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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
           * @param {!Element} rootElement The Element at the root of the inert subtree.
           * @param {!InertManager} inertManager The global singleton InertManager object.
           */
          function InertRoot(rootElement, inertManager) {
            _classCallCheck(this, InertRoot);

            /** @type {!InertManager} */
            this._inertManager = inertManager;

            /** @type {!Element} */
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
            this._observer.observe(this._rootElement, { attributes: true, childList: true, subtree: true });
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
              var element = /** @type {!Element} */node;

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
             * @param {!Element} node
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
                var target = /** @type {!Element} */record.target;
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

            /** @return {?string} */
            ,
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
                var element = /** @type {!Element} */this._node;
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
              var element = /** @type {!Element} */this.node;
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

            /** @return {?number} */
            ,
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
           * @param {!Element} root
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
              this._observer.observe(this._document.body || this._document.documentElement, { attributes: true, subtree: true, childList: true });
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
                    var target = /** @type {!Element} */record.target;
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
         * @param {(function (!Element))=} callback Callback to be called for each element traversed,
         *     before descending into child nodes.
         * @param {?ShadowRoot=} shadowRootAncestor The nearest ShadowRoot ancestor, if any.
         */


        function composedTreeWalk(node, callback, shadowRootAncestor) {
          if (node.nodeType == Node.ELEMENT_NODE) {
            var element = /** @type {!Element} */node;
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
              var _distributedNodes = slot.assignedNodes ? slot.assignedNodes({ flatten: true }) : [];
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

        if (!Element.prototype.hasOwnProperty('inert')) {
          /** @type {!InertManager} */
          var inertManager = new InertManager(document);

          Object.defineProperty(Element.prototype, 'inert', {
            enumerable: true,
            /** @this {!Element} */
            get: function get() {
              return this.hasAttribute('inert');
            },
            /** @this {!Element} */
            set: function set(inert) {
              inertManager.setInert(this, inert);
            }
          });
        }
      })();

    })));
    });

    const blockingElements = document.$blockingElements;
    /**
     * Allows an element to trap focus by applying the "inert" attribute to all sibling, aunt, and uncle nodes.
     *
     * Automatically handles consecutive calls with a loosely applied stack operation
     * (specifically via `blockingElements`, with a small polyfill because I'm not sure how long
     * it'll take to find its way into the spec, if ever)
     * @param target
     */
    function useBlockingElement(target) {
        /**
         * Push/pop the element from the blockingElements stack.
         */
        h(() => {
            if (target) {
                blockingElements.push(target);
                return () => {
                    blockingElements.remove(target);
                };
            }
        }, [target]);
    }
    function getTopElement() {
        return blockingElements.top;
    }

    const elementsToRestoreFocusTo = new Map();
    function useFocusTrap({ trapActive }) {
        const { element, useRefElementProps, getElement } = useRefElement();
        const { getLastActiveElement } = useActiveElement();
        // When the trap becomes active, before we let the blockingElements hook run,
        // keep track of whatever's currently focused and save it.
        h(() => {
            if (trapActive && element) {
                // Save the currently focused element
                // to whatever's currently at the top of the stack
                elementsToRestoreFocusTo.set(getTopElement(), getLastActiveElement() ?? document.body);
            }
        }, [trapActive, element]);
        useBlockingElement(trapActive ? element : null);
        /**
         * Any time we activate or deactivate the trap,
         * change focus to something else (something in
         * the trap if it's active, or whatever we've
         * tracked in elementsToRestoreFocusTo if not)
         */
        h(() => {
            if (trapActive && element) {
                let rafHandle = requestAnimationFrame(() => {
                    // TODO: This extra queueMicrotask is needed for
                    // ...reasons?
                    queueMicrotask(() => {
                        findFirstFocusable(element)?.focus();
                        rafHandle = 0;
                    });
                });
                return () => {
                    if (rafHandle)
                        cancelAnimationFrame(rafHandle);
                };
            }
            else if (element) {
                // Restore the focus to the element
                // that has returned to the top of the stack
                let rafHandle = requestAnimationFrame(() => {
                    queueMicrotask(() => {
                        elementsToRestoreFocusTo.get(getTopElement())?.focus();
                        rafHandle = 0;
                    });
                });
                return () => {
                    if (rafHandle)
                        cancelAnimationFrame(rafHandle);
                };
            }
        }, [trapActive, element]);
        const useFocusTrapProps = ((props) => {
            return useMergedProps()({ "aria-modal": trapActive ? "true" : undefined }, useRefElementProps(props));
        });
        return {
            useFocusTrapProps,
            element,
            getElement
        };
    }
    /**
     * Returns the first focusable element contained within the given node, or null if none are found.
     * @param element
     * @returns
     */
    function findFirstFocusable(element) {
        const treeWalker = document.createTreeWalker(element, NodeFilter.SHOW_ELEMENT, { acceptNode: (node) => (node instanceof Element && isFocusable(node) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP) });
        const firstFocusable = treeWalker.firstChild();
        return firstFocusable;
    }

    /**
     * Wrap the native `useEffect` to add arguments
     * that allow accessing the previous value as the first argument,
     * as well as the changes that caused the hook to be called as the second argument.
     *
     * @param effect
     * @param inputs
     */
    function useEffect(effect, inputs) {
        const prevInputs = s(inputs);
        const effect2 = () => {
            let changes = [];
            for (let i = 0; i < Math.max(prevInputs.current.length, inputs.length); ++i) {
                if (prevInputs.current[i] != inputs[i])
                    changes[i] = { from: prevInputs.current[i], to: inputs[i] };
            }
            effect(prevInputs.current, changes);
            prevInputs.current = inputs;
        };
        y(effect2, inputs);
    }

    function useGridNavigation({ focusOnChange: foc }) {
        const getFocusCellOnRowChange = useStableGetter(foc);
        /*const {
            useListNavigationChild,
            childCount: rowCount,
            indicesByElement: rowIndicesByElement,
            managedChildren: managedRows,
            navigateToIndex: setRowIndex,
            tabbableIndex: tabbableRow
        } = useListNavigation<R, UseGridNavigationRowInfo>({ focusOnChange, keyNavigation: "block" });*/
        const [currentRow, setCurrentRow, getCurrentRow] = useState(0);
        const [lastKnownCellIndex, setLastKnownCellIndex, getLastKnownCellIndex] = useState(0);
        useEffect(([prev]) => { console.log(`currentRow: ${prev} -> ${currentRow}`); }, [currentRow]);
        const { childCount, managedChildren, indicesByElement, getMountIndex, mountedChildren, totalChildrenMounted, totalChildrenUnounted, useManagedChild } = useChildManager();
        const { useLinearNavigationChild } = useLinearNavigation({ managedChildren, getIndex: getCurrentRow, setIndex: A$1(i => { console.log(`setIndex(${i})P`); setCurrentRow(i); }, [setCurrentRow]), navigationDirection: "block" });
        useChildFlag(currentRow, managedChildren.length, A$1((index, tabbable) => managedChildren[index]?.setIsTabbableRow(tabbable, lastKnownCellIndex), [lastKnownCellIndex, managedChildren]));
        const useGridNavigationRow = A$1(({ index, ...info }) => {
            const { useHasFocusProps, lastFocusedInner } = useHasFocus();
            const [isTabbableRow, setIsTabbableRow] = useState(false);
            // Besides just being a list nav child, it's also a list nav parent
            // yaaaayyy
            const { useListNavigationChild: useListNavigationChild2, childCount: cellCount, indicesByElement: cellIndicesByElement, managedChildren: managedCells, navigateToIndex: setCellIndex, tabbableIndex: tabbableCell, focusCurrent } = useListNavigation({ focusOnChange: (isTabbableRow && getFocusCellOnRowChange()), keyNavigation: "inline", initialIndex: null });
            // Any time we become the currently tabbable row,
            // make sure the correct cell is selected and focused.
            // Any other time, make sure no cell is tabbable.
            useEffect(() => {
                if (isTabbableRow) {
                    setCellIndex(getLastKnownCellIndex());
                }
                else {
                    setCellIndex(null);
                }
            }, [isTabbableRow]);
            // Any time we become the currently tabbable row,
            // request the component rerender and focus itself.
            useEffect(() => {
                if (isTabbableRow && getFocusCellOnRowChange()) {
                    focusCurrent?.();
                }
            }, [focusCurrent, isTabbableRow]);
            // Any time the current cell changes 
            // (probably because we interacted with it, thus focusing it, 
            // changing it from null if the row wasn't already focused)
            // make sure that we're the currently tabbable row if we weren't already.
            useLayoutEffect(() => {
                if (tabbableCell !== null) {
                    setLastKnownCellIndex(tabbableCell);
                    setIsTabbableRow(true);
                    setCurrentRow(index);
                }
            }, [index, tabbableCell, setLastKnownCellIndex]);
            const { useManagedChildProps } = useManagedChild({
                index, setIsTabbableRow: A$1((tabbable, newIndex) => {
                    if (tabbable) {
                        setCellIndex(newIndex);
                    }
                    setIsTabbableRow(tabbable);
                }, []), ...info
            });
            const { useLinearNavigationChildProps } = useLinearNavigationChild();
            const useGridNavigationRowProps = A$1((props) => useManagedChildProps(useLinearNavigationChildProps(useHasFocusProps(props))), [useManagedChildProps]);
            const useGridNavigationCell = A$1(({ index, text, ...info }) => {
                const { tabbable, useListNavigationChildProps } = useListNavigationChild2({ text, index, ...info });
                const useGridNavigationCellProps = A$1((props) => useListNavigationChildProps(props), [useListNavigationChildProps]);
                return { tabbable, useGridNavigationCellProps };
            }, [useListNavigationChild2]);
            return { useGridNavigationRowProps, useGridNavigationCell, cellCount, tabbableCell, isTabbableRow };
        }, [setLastKnownCellIndex, useLinearNavigationChild, useManagedChild]);
        return {
            useGridNavigationRow,
            rowCount: childCount,
            cellIndex: lastKnownCellIndex,
            rowIndex: currentRow
        };
    }

    const RandomWords = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.".split(" ");
    g(({ depth }) => {
        const [active, setActive] = useState(false);
        const { useFocusTrapProps } = useFocusTrap({ trapActive: active });
        //const { useRovingTabIndexChild, useRovingTabIndexProps } = useRovingTabIndex<HTMLUListElement, RovingTabIndexChildInfo>({ tabbableIndex, focusOnChange: false });
        const divProps = useFocusTrapProps({ ref: undefined, className: "focus-trap-demo" });
        if (depth == 2)
            return v$1("div", null);
        return (v$1("div", { className: "demo" },
            v$1("label", null,
                "Active: ",
                v$1("input", { type: "checkbox", checked: active, onInput: e => { e.preventDefault(); setActive(e.currentTarget.checked); } })),
            v$1("div", { ...divProps },
                v$1(DemoUseFocusTrapChild, { active: active, setActive: setActive, depth: depth ?? 0 }))));
    });
    const DemoUseFocusTrapChild = g(({ setActive, active, depth }) => {
        return (v$1(d$1, null,
            v$1("button", null, "Button 1"),
            v$1("button", null, "Button 2"),
            v$1("button", null, "Button 3"),
            v$1("label", null,
                "Active: ",
                v$1("input", { type: "checkbox", checked: active, onInput: e => { e.preventDefault(); setActive(e.currentTarget.checked); } }))));
    });
    g(() => {
        const [timeout, setTimeout] = useState(1000);
        const [debounce, setDebounce] = useState(0);
        const [shouldThrow, setShouldThrow, getShouldThrow] = useState(false);
        const [disableConsecutive, setDisableConsecutive] = useState(false);
        const { callCount, settleCount, getCurrentCapture, hasCapture, getSyncHandler, currentCapture, pending, error, hasError, rejectCount, resolveCount } = useAsyncHandler()({ capture: () => { }, debounce: debounce == 0 ? undefined : debounce });
        const asyncOnClick = ((v, e) => new Promise((resolve, reject) => window.setTimeout(() => getShouldThrow() ? reject() : resolve(), timeout)));
        const onClick = getSyncHandler(pending ? null : asyncOnClick);
        return (v$1("div", { className: "demo" },
            v$1("button", { disabled: pending && disableConsecutive, onClick: onClick }, "Click me!"),
            v$1("label", null,
                "Sleep for: ",
                v$1("input", { type: "number", value: timeout, onInput: e => setTimeout(e.currentTarget.valueAsNumber) })),
            v$1("label", null,
                "Throw an error ",
                v$1("input", { type: "checkbox", checked: shouldThrow, onInput: e => setShouldThrow(e.currentTarget.checked) })),
            v$1("label", null,
                "Disabled while pending ",
                v$1("input", { type: "checkbox", checked: disableConsecutive, onInput: e => setDisableConsecutive(e.currentTarget.checked) })),
            v$1("label", null,
                "Debounce: ",
                v$1("input", { type: "number", value: debounce, onInput: e => setDebounce(e.currentTarget.valueAsNumber) })),
            v$1("table", null,
                v$1("thead", null,
                    v$1("tr", null,
                        v$1("th", null, "Field"),
                        v$1("th", null, "Value"))),
                v$1("tbody", null,
                    v$1("tr", null,
                        v$1("td", null, "callCount"),
                        v$1("td", null, callCount)),
                    v$1("tr", null,
                        v$1("td", null, "settleCount"),
                        v$1("td", null, settleCount)),
                    v$1("tr", null,
                        v$1("td", null, "resolveCount"),
                        v$1("td", null, resolveCount)),
                    v$1("tr", null,
                        v$1("td", null, "rejectCount"),
                        v$1("td", null, rejectCount)),
                    v$1("tr", null,
                        v$1("td", null, "hasError"),
                        v$1("td", null, hasError.toString())),
                    v$1("tr", null,
                        v$1("td", null, "hasCapture"),
                        v$1("td", null, hasCapture.toString()))))));
    });
    g(() => {
        const [timeout, setTimeout] = useState(1000);
        const [debounce, setDebounce] = useState(0);
        const [shouldThrow, setShouldThrow, getShouldThrow] = useState(false);
        const [disableConsecutive, setDisableConsecutive] = useState(false);
        const [text, setText] = useState("");
        const { callCount, settleCount, getCurrentCapture, hasCapture, getSyncHandler, currentCapture, pending, error, hasError, rejectCount, resolveCount } = useAsyncHandler()({ capture: e => { e.preventDefault(); return e.currentTarget.value; }, debounce: debounce == 0 ? undefined : debounce });
        const onInput = getSyncHandler(async (v, e) => new Promise((resolve, reject) => window.setTimeout(() => {
            if (getShouldThrow()) {
                reject();
            }
            else {
                setText(v);
                resolve();
            }
        }, timeout)));
        return (v$1("div", { className: "demo" },
            v$1("label", null,
                "Demo text: ",
                v$1("input", { value: hasCapture ? currentCapture : text, disabled: pending && disableConsecutive, onInput: onInput })),
            v$1("hr", null),
            v$1("label", null,
                "Sleep for: ",
                v$1("input", { type: "number", value: timeout, onInput: e => setTimeout(e.currentTarget.valueAsNumber) })),
            v$1("label", null,
                "Throw an error ",
                v$1("input", { type: "checkbox", checked: shouldThrow, onInput: e => setShouldThrow(e.currentTarget.checked) })),
            v$1("label", null,
                "Disabled while pending ",
                v$1("input", { type: "checkbox", checked: disableConsecutive, onInput: e => setDisableConsecutive(e.currentTarget.checked) })),
            v$1("label", null,
                "Debounce: ",
                v$1("input", { type: "number", value: debounce, onInput: e => setDebounce(e.currentTarget.valueAsNumber) })),
            v$1("table", null,
                v$1("thead", null,
                    v$1("tr", null,
                        v$1("th", null, "Field"),
                        v$1("th", null, "Value"))),
                v$1("tbody", null,
                    v$1("tr", null,
                        v$1("td", null, "callCount"),
                        v$1("td", null, callCount)),
                    v$1("tr", null,
                        v$1("td", null, "settleCount"),
                        v$1("td", null, settleCount)),
                    v$1("tr", null,
                        v$1("td", null, "resolveCount"),
                        v$1("td", null, resolveCount)),
                    v$1("tr", null,
                        v$1("td", null, "rejectCount"),
                        v$1("td", null, rejectCount)),
                    v$1("tr", null,
                        v$1("td", null, "hasError"),
                        v$1("td", null, hasError.toString())),
                    v$1("tr", null,
                        v$1("td", null, "currentCapture"),
                        v$1("td", null, currentCapture)),
                    v$1("tr", null,
                        v$1("td", null, "\"Saved\" input"),
                        v$1("td", null, text))))));
    });
    g(() => {
        const { activeElement, getLastActiveElement, getActiveElement, lastActiveElement, windowFocused } = useActiveElement();
        const { focused, focusedInner, useHasFocusProps } = useHasFocus();
        return (v$1("div", { class: "demo" },
            v$1("h2", null, "useHasFocus"),
            v$1("div", { ...useHasFocusProps({ style: { border: "1px solid black" }, tabIndex: 0 }) },
                "Outer ",
                v$1("div", { tabIndex: 0, style: { border: "1px solid black" } }, "Inner element")),
            v$1("div", null,
                v$1("ul", null,
                    v$1("li", null,
                        "Strictly focused: ",
                        focused.toString()),
                    v$1("li", null,
                        "Inner focused: ",
                        focusedInner.toString()),
                    v$1("li", null,
                        "Window focused: ",
                        windowFocused.toString()),
                    v$1("li", null,
                        "activeElement: ",
                        activeElement?.tagName),
                    v$1("li", null,
                        "lastActiveElement: ",
                        lastActiveElement?.tagName)))));
    });
    const GridRowContext = D(null);
    const GridCellContext = D(null);
    const DemoUseGrid = g(() => {
        const { lastFocusedInner, useHasFocusProps } = useHasFocus();
        const { useGridNavigationRow, rowCount, cellIndex, rowIndex } = useGridNavigation({ focusOnChange: lastFocusedInner });
        return (v$1("div", { className: "demo" },
            v$1("div", null,
                cellIndex,
                "+",
                rowIndex,
                "/",
                rowCount),
            v$1("div", { ...useHasFocusProps({}) },
                v$1(GridRowContext.Provider, { value: useGridNavigationRow }, Array.from((function* () {
                    for (let i = 0; i < 10; ++i) {
                        yield v$1(DemoUseGridRow, { index: i, key: i });
                    }
                })())))));
    });
    const DemoUseGridRow = (({ index }) => {
        useState(() => RandomWords[index /*Math.floor(Math.random() * (RandomWords.length - 1))*/]);
        const useGridRow = F(GridRowContext);
        const { isTabbableRow, cellCount, useGridNavigationRowProps, useGridNavigationCell, tabbableCell } = useGridRow({ index });
        const props = useGridNavigationRowProps({});
        return (v$1("div", { ...props },
            v$1("div", null,
                isTabbableRow.toString(),
                " (",
                tabbableCell,
                "/",
                cellCount,
                ")"),
            v$1("div", { style: "display: flex" },
                v$1(GridCellContext.Provider, { value: useGridNavigationCell }, Array.from((function* () {
                    for (let i = 0; i < 3; ++i) {
                        yield v$1(DemoUseGridCell, { index: i, key: i });
                    }
                })())))));
    });
    const DemoUseGridCell = (({ index }) => {
        const useGridCell = F(GridCellContext);
        const { tabbable, useGridNavigationCellProps } = useGridCell({ index, text: null });
        const props = useGridNavigationCellProps({});
        if (index === 0)
            return v$1("div", { ...props },
                "Grid cell #",
                index + 1);
        else
            return v$1("label", null,
                v$1("input", { ...props, type: "checkbox" }),
                " Test input");
    });
    const Component = () => {
        return v$1("div", { class: "flex", style: { flexWrap: "wrap" } },
            v$1(DemoUseGrid, null));
    };
    requestAnimationFrame(() => {
        S$1(v$1(Component, null), document.getElementById("root"));
    });

    exports.DemoUseGrid = DemoUseGrid;

    Object.defineProperty(exports, '__esModule', { value: true });

    return exports;

}({}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlcyI6WyJub2RlX21vZHVsZXMvcHJlYWN0L2Rpc3QvcHJlYWN0Lm1qcyIsIm5vZGVfbW9kdWxlcy9wcmVhY3QvaG9va3MvZGlzdC9ob29rcy5tanMiLCJub2RlX21vZHVsZXMvcHJlYWN0L2NvbXBhdC9kaXN0L2NvbXBhdC5tanMiLCIuLi91c2UtbWVyZ2VkLWNoaWxkcmVuLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2Nsc3gvZGlzdC9jbHN4Lm0uanMiLCIuLi91c2UtbWVyZ2VkLWNsYXNzZXMuanMiLCIuLi91c2UtbWVyZ2VkLXJlZnMuanMiLCIuLi91c2UtbWVyZ2VkLXN0eWxlcy5qcyIsIi4uL3VzZS1tZXJnZWQtcHJvcHMuanMiLCIuLi91c2Utc3RhdGUuanMiLCIuLi91c2UtcmVmLWVsZW1lbnQuanMiLCIuLi91c2UtbG9naWNhbC1kaXJlY3Rpb24uanMiLCIuLi91c2Utc3RhYmxlLWdldHRlci5qcyIsIi4uL3VzZS1zdGFibGUtY2FsbGJhY2suanMiLCIuLi91c2UtbGF5b3V0LWVmZmVjdC5qcyIsIi4uL3VzZS10aW1lb3V0LmpzIiwiLi4vdXNlLWFzeW5jLWhhbmRsZXIuanMiLCIuLi91c2UtYWN0aXZlLWVsZW1lbnQuanMiLCIuLi91c2UtaGFzLWZvY3VzLmpzIiwiLi4vdXNlLWNoaWxkLW1hbmFnZXIuanMiLCIuLi91c2Utcm92aW5nLXRhYmluZGV4LmpzIiwiLi4vdXNlLWtleWJvYXJkLW5hdmlnYXRpb24uanMiLCIuLi91c2UtbGlzdC1uYXZpZ2F0aW9uLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3RhYmJhYmxlL2Rpc3QvaW5kZXguZXNtLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2Jsb2NraW5nLWVsZW1lbnRzL2Rpc3QvYmxvY2tpbmctZWxlbWVudHMuanMiLCIuLi9ub2RlX21vZHVsZXMvd2ljZy1pbmVydC9kaXN0L2luZXJ0LmpzIiwiLi4vdXNlLWJsb2NraW5nLWVsZW1lbnQuanMiLCIuLi91c2UtZm9jdXMtdHJhcC5qcyIsIi4uL3VzZS1lZmZlY3QuanMiLCIuLi91c2UtZ3JpZC1uYXZpZ2F0aW9uLmpzIiwiaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbInZhciBuLGwsdSxpLHQsbyxyLGYsZT17fSxjPVtdLHM9L2FjaXR8ZXgoPzpzfGd8bnxwfCQpfHJwaHxncmlkfG93c3xtbmN8bnR3fGluZVtjaF18em9vfF5vcmR8aXRlcmEvaTtmdW5jdGlvbiBhKG4sbCl7Zm9yKHZhciB1IGluIGwpblt1XT1sW3VdO3JldHVybiBufWZ1bmN0aW9uIGgobil7dmFyIGw9bi5wYXJlbnROb2RlO2wmJmwucmVtb3ZlQ2hpbGQobil9ZnVuY3Rpb24gdihsLHUsaSl7dmFyIHQsbyxyLGY9e307Zm9yKHIgaW4gdSlcImtleVwiPT1yP3Q9dVtyXTpcInJlZlwiPT1yP289dVtyXTpmW3JdPXVbcl07aWYoYXJndW1lbnRzLmxlbmd0aD4yJiYoZi5jaGlsZHJlbj1hcmd1bWVudHMubGVuZ3RoPjM/bi5jYWxsKGFyZ3VtZW50cywyKTppKSxcImZ1bmN0aW9uXCI9PXR5cGVvZiBsJiZudWxsIT1sLmRlZmF1bHRQcm9wcylmb3IociBpbiBsLmRlZmF1bHRQcm9wcyl2b2lkIDA9PT1mW3JdJiYoZltyXT1sLmRlZmF1bHRQcm9wc1tyXSk7cmV0dXJuIHkobCxmLHQsbyxudWxsKX1mdW5jdGlvbiB5KG4saSx0LG8scil7dmFyIGY9e3R5cGU6bixwcm9wczppLGtleTp0LHJlZjpvLF9fazpudWxsLF9fOm51bGwsX19iOjAsX19lOm51bGwsX19kOnZvaWQgMCxfX2M6bnVsbCxfX2g6bnVsbCxjb25zdHJ1Y3Rvcjp2b2lkIDAsX192Om51bGw9PXI/Kyt1OnJ9O3JldHVybiBudWxsIT1sLnZub2RlJiZsLnZub2RlKGYpLGZ9ZnVuY3Rpb24gcCgpe3JldHVybntjdXJyZW50Om51bGx9fWZ1bmN0aW9uIGQobil7cmV0dXJuIG4uY2hpbGRyZW59ZnVuY3Rpb24gXyhuLGwpe3RoaXMucHJvcHM9bix0aGlzLmNvbnRleHQ9bH1mdW5jdGlvbiBrKG4sbCl7aWYobnVsbD09bClyZXR1cm4gbi5fXz9rKG4uX18sbi5fXy5fX2suaW5kZXhPZihuKSsxKTpudWxsO2Zvcih2YXIgdTtsPG4uX19rLmxlbmd0aDtsKyspaWYobnVsbCE9KHU9bi5fX2tbbF0pJiZudWxsIT11Ll9fZSlyZXR1cm4gdS5fX2U7cmV0dXJuXCJmdW5jdGlvblwiPT10eXBlb2Ygbi50eXBlP2sobik6bnVsbH1mdW5jdGlvbiBiKG4pe3ZhciBsLHU7aWYobnVsbCE9KG49bi5fXykmJm51bGwhPW4uX19jKXtmb3Iobi5fX2U9bi5fX2MuYmFzZT1udWxsLGw9MDtsPG4uX19rLmxlbmd0aDtsKyspaWYobnVsbCE9KHU9bi5fX2tbbF0pJiZudWxsIT11Ll9fZSl7bi5fX2U9bi5fX2MuYmFzZT11Ll9fZTticmVha31yZXR1cm4gYihuKX19ZnVuY3Rpb24gbShuKXsoIW4uX19kJiYobi5fX2Q9ITApJiZ0LnB1c2gobikmJiFnLl9fcisrfHxyIT09bC5kZWJvdW5jZVJlbmRlcmluZykmJigocj1sLmRlYm91bmNlUmVuZGVyaW5nKXx8bykoZyl9ZnVuY3Rpb24gZygpe2Zvcih2YXIgbjtnLl9fcj10Lmxlbmd0aDspbj10LnNvcnQoZnVuY3Rpb24obixsKXtyZXR1cm4gbi5fX3YuX19iLWwuX192Ll9fYn0pLHQ9W10sbi5zb21lKGZ1bmN0aW9uKG4pe3ZhciBsLHUsaSx0LG8scjtuLl9fZCYmKG89KHQ9KGw9bikuX192KS5fX2UsKHI9bC5fX1ApJiYodT1bXSwoaT1hKHt9LHQpKS5fX3Y9dC5fX3YrMSxqKHIsdCxpLGwuX19uLHZvaWQgMCE9PXIub3duZXJTVkdFbGVtZW50LG51bGwhPXQuX19oP1tvXTpudWxsLHUsbnVsbD09bz9rKHQpOm8sdC5fX2gpLHoodSx0KSx0Ll9fZSE9byYmYih0KSkpfSl9ZnVuY3Rpb24gdyhuLGwsdSxpLHQsbyxyLGYscyxhKXt2YXIgaCx2LHAsXyxiLG0sZyx3PWkmJmkuX19rfHxjLEE9dy5sZW5ndGg7Zm9yKHUuX19rPVtdLGg9MDtoPGwubGVuZ3RoO2grKylpZihudWxsIT0oXz11Ll9fa1toXT1udWxsPT0oXz1sW2hdKXx8XCJib29sZWFuXCI9PXR5cGVvZiBfP251bGw6XCJzdHJpbmdcIj09dHlwZW9mIF98fFwibnVtYmVyXCI9PXR5cGVvZiBffHxcImJpZ2ludFwiPT10eXBlb2YgXz95KG51bGwsXyxudWxsLG51bGwsXyk6QXJyYXkuaXNBcnJheShfKT95KGQse2NoaWxkcmVuOl99LG51bGwsbnVsbCxudWxsKTpfLl9fYj4wP3koXy50eXBlLF8ucHJvcHMsXy5rZXksbnVsbCxfLl9fdik6Xykpe2lmKF8uX189dSxfLl9fYj11Ll9fYisxLG51bGw9PT0ocD13W2hdKXx8cCYmXy5rZXk9PXAua2V5JiZfLnR5cGU9PT1wLnR5cGUpd1toXT12b2lkIDA7ZWxzZSBmb3Iodj0wO3Y8QTt2Kyspe2lmKChwPXdbdl0pJiZfLmtleT09cC5rZXkmJl8udHlwZT09PXAudHlwZSl7d1t2XT12b2lkIDA7YnJlYWt9cD1udWxsfWoobixfLHA9cHx8ZSx0LG8scixmLHMsYSksYj1fLl9fZSwodj1fLnJlZikmJnAucmVmIT12JiYoZ3x8KGc9W10pLHAucmVmJiZnLnB1c2gocC5yZWYsbnVsbCxfKSxnLnB1c2godixfLl9fY3x8YixfKSksbnVsbCE9Yj8obnVsbD09bSYmKG09YiksXCJmdW5jdGlvblwiPT10eXBlb2YgXy50eXBlJiZudWxsIT1fLl9fayYmXy5fX2s9PT1wLl9faz9fLl9fZD1zPXgoXyxzLG4pOnM9UChuLF8scCx3LGIscyksYXx8XCJvcHRpb25cIiE9PXUudHlwZT9cImZ1bmN0aW9uXCI9PXR5cGVvZiB1LnR5cGUmJih1Ll9fZD1zKTpuLnZhbHVlPVwiXCIpOnMmJnAuX19lPT1zJiZzLnBhcmVudE5vZGUhPW4mJihzPWsocCkpfWZvcih1Ll9fZT1tLGg9QTtoLS07KW51bGwhPXdbaF0mJihcImZ1bmN0aW9uXCI9PXR5cGVvZiB1LnR5cGUmJm51bGwhPXdbaF0uX19lJiZ3W2hdLl9fZT09dS5fX2QmJih1Ll9fZD1rKGksaCsxKSksTih3W2hdLHdbaF0pKTtpZihnKWZvcihoPTA7aDxnLmxlbmd0aDtoKyspTShnW2hdLGdbKytoXSxnWysraF0pfWZ1bmN0aW9uIHgobixsLHUpe3ZhciBpLHQ7Zm9yKGk9MDtpPG4uX19rLmxlbmd0aDtpKyspKHQ9bi5fX2tbaV0pJiYodC5fXz1uLGw9XCJmdW5jdGlvblwiPT10eXBlb2YgdC50eXBlP3godCxsLHUpOlAodSx0LHQsbi5fX2ssdC5fX2UsbCkpO3JldHVybiBsfWZ1bmN0aW9uIEEobixsKXtyZXR1cm4gbD1sfHxbXSxudWxsPT1ufHxcImJvb2xlYW5cIj09dHlwZW9mIG58fChBcnJheS5pc0FycmF5KG4pP24uc29tZShmdW5jdGlvbihuKXtBKG4sbCl9KTpsLnB1c2gobikpLGx9ZnVuY3Rpb24gUChuLGwsdSxpLHQsbyl7dmFyIHIsZixlO2lmKHZvaWQgMCE9PWwuX19kKXI9bC5fX2QsbC5fX2Q9dm9pZCAwO2Vsc2UgaWYobnVsbD09dXx8dCE9b3x8bnVsbD09dC5wYXJlbnROb2RlKW46aWYobnVsbD09b3x8by5wYXJlbnROb2RlIT09biluLmFwcGVuZENoaWxkKHQpLHI9bnVsbDtlbHNle2ZvcihmPW8sZT0wOyhmPWYubmV4dFNpYmxpbmcpJiZlPGkubGVuZ3RoO2UrPTIpaWYoZj09dClicmVhayBuO24uaW5zZXJ0QmVmb3JlKHQsbykscj1vfXJldHVybiB2b2lkIDAhPT1yP3I6dC5uZXh0U2libGluZ31mdW5jdGlvbiBDKG4sbCx1LGksdCl7dmFyIG87Zm9yKG8gaW4gdSlcImNoaWxkcmVuXCI9PT1vfHxcImtleVwiPT09b3x8byBpbiBsfHxIKG4sbyxudWxsLHVbb10saSk7Zm9yKG8gaW4gbCl0JiZcImZ1bmN0aW9uXCIhPXR5cGVvZiBsW29dfHxcImNoaWxkcmVuXCI9PT1vfHxcImtleVwiPT09b3x8XCJ2YWx1ZVwiPT09b3x8XCJjaGVja2VkXCI9PT1vfHx1W29dPT09bFtvXXx8SChuLG8sbFtvXSx1W29dLGkpfWZ1bmN0aW9uICQobixsLHUpe1wiLVwiPT09bFswXT9uLnNldFByb3BlcnR5KGwsdSk6bltsXT1udWxsPT11P1wiXCI6XCJudW1iZXJcIiE9dHlwZW9mIHV8fHMudGVzdChsKT91OnUrXCJweFwifWZ1bmN0aW9uIEgobixsLHUsaSx0KXt2YXIgbztuOmlmKFwic3R5bGVcIj09PWwpaWYoXCJzdHJpbmdcIj09dHlwZW9mIHUpbi5zdHlsZS5jc3NUZXh0PXU7ZWxzZXtpZihcInN0cmluZ1wiPT10eXBlb2YgaSYmKG4uc3R5bGUuY3NzVGV4dD1pPVwiXCIpLGkpZm9yKGwgaW4gaSl1JiZsIGluIHV8fCQobi5zdHlsZSxsLFwiXCIpO2lmKHUpZm9yKGwgaW4gdSlpJiZ1W2xdPT09aVtsXXx8JChuLnN0eWxlLGwsdVtsXSl9ZWxzZSBpZihcIm9cIj09PWxbMF0mJlwiblwiPT09bFsxXSlvPWwhPT0obD1sLnJlcGxhY2UoL0NhcHR1cmUkLyxcIlwiKSksbD1sLnRvTG93ZXJDYXNlKClpbiBuP2wudG9Mb3dlckNhc2UoKS5zbGljZSgyKTpsLnNsaWNlKDIpLG4ubHx8KG4ubD17fSksbi5sW2wrb109dSx1P2l8fG4uYWRkRXZlbnRMaXN0ZW5lcihsLG8/VDpJLG8pOm4ucmVtb3ZlRXZlbnRMaXN0ZW5lcihsLG8/VDpJLG8pO2Vsc2UgaWYoXCJkYW5nZXJvdXNseVNldElubmVySFRNTFwiIT09bCl7aWYodClsPWwucmVwbGFjZSgveGxpbmtbSDpoXS8sXCJoXCIpLnJlcGxhY2UoL3NOYW1lJC8sXCJzXCIpO2Vsc2UgaWYoXCJocmVmXCIhPT1sJiZcImxpc3RcIiE9PWwmJlwiZm9ybVwiIT09bCYmXCJ0YWJJbmRleFwiIT09bCYmXCJkb3dubG9hZFwiIT09bCYmbCBpbiBuKXRyeXtuW2xdPW51bGw9PXU/XCJcIjp1O2JyZWFrIG59Y2F0Y2gobil7fVwiZnVuY3Rpb25cIj09dHlwZW9mIHV8fChudWxsIT11JiYoITEhPT11fHxcImFcIj09PWxbMF0mJlwiclwiPT09bFsxXSk/bi5zZXRBdHRyaWJ1dGUobCx1KTpuLnJlbW92ZUF0dHJpYnV0ZShsKSl9fWZ1bmN0aW9uIEkobil7dGhpcy5sW24udHlwZSshMV0obC5ldmVudD9sLmV2ZW50KG4pOm4pfWZ1bmN0aW9uIFQobil7dGhpcy5sW24udHlwZSshMF0obC5ldmVudD9sLmV2ZW50KG4pOm4pfWZ1bmN0aW9uIGoobix1LGksdCxvLHIsZixlLGMpe3ZhciBzLGgsdix5LHAsayxiLG0sZyx4LEEsUD11LnR5cGU7aWYodm9pZCAwIT09dS5jb25zdHJ1Y3RvcilyZXR1cm4gbnVsbDtudWxsIT1pLl9faCYmKGM9aS5fX2gsZT11Ll9fZT1pLl9fZSx1Ll9faD1udWxsLHI9W2VdKSwocz1sLl9fYikmJnModSk7dHJ5e246aWYoXCJmdW5jdGlvblwiPT10eXBlb2YgUCl7aWYobT11LnByb3BzLGc9KHM9UC5jb250ZXh0VHlwZSkmJnRbcy5fX2NdLHg9cz9nP2cucHJvcHMudmFsdWU6cy5fXzp0LGkuX19jP2I9KGg9dS5fX2M9aS5fX2MpLl9fPWguX19FOihcInByb3RvdHlwZVwiaW4gUCYmUC5wcm90b3R5cGUucmVuZGVyP3UuX19jPWg9bmV3IFAobSx4KToodS5fX2M9aD1uZXcgXyhtLHgpLGguY29uc3RydWN0b3I9UCxoLnJlbmRlcj1PKSxnJiZnLnN1YihoKSxoLnByb3BzPW0saC5zdGF0ZXx8KGguc3RhdGU9e30pLGguY29udGV4dD14LGguX19uPXQsdj1oLl9fZD0hMCxoLl9faD1bXSksbnVsbD09aC5fX3MmJihoLl9fcz1oLnN0YXRlKSxudWxsIT1QLmdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyYmKGguX19zPT1oLnN0YXRlJiYoaC5fX3M9YSh7fSxoLl9fcykpLGEoaC5fX3MsUC5nZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMobSxoLl9fcykpKSx5PWgucHJvcHMscD1oLnN0YXRlLHYpbnVsbD09UC5nZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMmJm51bGwhPWguY29tcG9uZW50V2lsbE1vdW50JiZoLmNvbXBvbmVudFdpbGxNb3VudCgpLG51bGwhPWguY29tcG9uZW50RGlkTW91bnQmJmguX19oLnB1c2goaC5jb21wb25lbnREaWRNb3VudCk7ZWxzZXtpZihudWxsPT1QLmdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyYmbSE9PXkmJm51bGwhPWguY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyYmaC5jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG0seCksIWguX19lJiZudWxsIT1oLnNob3VsZENvbXBvbmVudFVwZGF0ZSYmITE9PT1oLnNob3VsZENvbXBvbmVudFVwZGF0ZShtLGguX19zLHgpfHx1Ll9fdj09PWkuX192KXtoLnByb3BzPW0saC5zdGF0ZT1oLl9fcyx1Ll9fdiE9PWkuX192JiYoaC5fX2Q9ITEpLGguX192PXUsdS5fX2U9aS5fX2UsdS5fX2s9aS5fX2ssdS5fX2suZm9yRWFjaChmdW5jdGlvbihuKXtuJiYobi5fXz11KX0pLGguX19oLmxlbmd0aCYmZi5wdXNoKGgpO2JyZWFrIG59bnVsbCE9aC5jb21wb25lbnRXaWxsVXBkYXRlJiZoLmNvbXBvbmVudFdpbGxVcGRhdGUobSxoLl9fcyx4KSxudWxsIT1oLmNvbXBvbmVudERpZFVwZGF0ZSYmaC5fX2gucHVzaChmdW5jdGlvbigpe2guY29tcG9uZW50RGlkVXBkYXRlKHkscCxrKX0pfWguY29udGV4dD14LGgucHJvcHM9bSxoLnN0YXRlPWguX19zLChzPWwuX19yKSYmcyh1KSxoLl9fZD0hMSxoLl9fdj11LGguX19QPW4scz1oLnJlbmRlcihoLnByb3BzLGguc3RhdGUsaC5jb250ZXh0KSxoLnN0YXRlPWguX19zLG51bGwhPWguZ2V0Q2hpbGRDb250ZXh0JiYodD1hKGEoe30sdCksaC5nZXRDaGlsZENvbnRleHQoKSkpLHZ8fG51bGw9PWguZ2V0U25hcHNob3RCZWZvcmVVcGRhdGV8fChrPWguZ2V0U25hcHNob3RCZWZvcmVVcGRhdGUoeSxwKSksQT1udWxsIT1zJiZzLnR5cGU9PT1kJiZudWxsPT1zLmtleT9zLnByb3BzLmNoaWxkcmVuOnMsdyhuLEFycmF5LmlzQXJyYXkoQSk/QTpbQV0sdSxpLHQsbyxyLGYsZSxjKSxoLmJhc2U9dS5fX2UsdS5fX2g9bnVsbCxoLl9faC5sZW5ndGgmJmYucHVzaChoKSxiJiYoaC5fX0U9aC5fXz1udWxsKSxoLl9fZT0hMX1lbHNlIG51bGw9PXImJnUuX192PT09aS5fX3Y/KHUuX19rPWkuX19rLHUuX19lPWkuX19lKTp1Ll9fZT1MKGkuX19lLHUsaSx0LG8scixmLGMpOyhzPWwuZGlmZmVkKSYmcyh1KX1jYXRjaChuKXt1Ll9fdj1udWxsLChjfHxudWxsIT1yKSYmKHUuX19lPWUsdS5fX2g9ISFjLHJbci5pbmRleE9mKGUpXT1udWxsKSxsLl9fZShuLHUsaSl9fWZ1bmN0aW9uIHoobix1KXtsLl9fYyYmbC5fX2ModSxuKSxuLnNvbWUoZnVuY3Rpb24odSl7dHJ5e249dS5fX2gsdS5fX2g9W10sbi5zb21lKGZ1bmN0aW9uKG4pe24uY2FsbCh1KX0pfWNhdGNoKG4pe2wuX19lKG4sdS5fX3YpfX0pfWZ1bmN0aW9uIEwobCx1LGksdCxvLHIsZixjKXt2YXIgcyxhLHYseT1pLnByb3BzLHA9dS5wcm9wcyxkPXUudHlwZSxfPTA7aWYoXCJzdmdcIj09PWQmJihvPSEwKSxudWxsIT1yKWZvcig7XzxyLmxlbmd0aDtfKyspaWYoKHM9cltfXSkmJihzPT09bHx8KGQ/cy5sb2NhbE5hbWU9PWQ6Mz09cy5ub2RlVHlwZSkpKXtsPXMscltfXT1udWxsO2JyZWFrfWlmKG51bGw9PWwpe2lmKG51bGw9PT1kKXJldHVybiBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShwKTtsPW8/ZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIixkKTpkb2N1bWVudC5jcmVhdGVFbGVtZW50KGQscC5pcyYmcCkscj1udWxsLGM9ITF9aWYobnVsbD09PWQpeT09PXB8fGMmJmwuZGF0YT09PXB8fChsLmRhdGE9cCk7ZWxzZXtpZihyPXImJm4uY2FsbChsLmNoaWxkTm9kZXMpLGE9KHk9aS5wcm9wc3x8ZSkuZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwsdj1wLmRhbmdlcm91c2x5U2V0SW5uZXJIVE1MLCFjKXtpZihudWxsIT1yKWZvcih5PXt9LF89MDtfPGwuYXR0cmlidXRlcy5sZW5ndGg7XysrKXlbbC5hdHRyaWJ1dGVzW19dLm5hbWVdPWwuYXR0cmlidXRlc1tfXS52YWx1ZTsodnx8YSkmJih2JiYoYSYmdi5fX2h0bWw9PWEuX19odG1sfHx2Ll9faHRtbD09PWwuaW5uZXJIVE1MKXx8KGwuaW5uZXJIVE1MPXYmJnYuX19odG1sfHxcIlwiKSl9aWYoQyhsLHAseSxvLGMpLHYpdS5fX2s9W107ZWxzZSBpZihfPXUucHJvcHMuY2hpbGRyZW4sdyhsLEFycmF5LmlzQXJyYXkoXyk/XzpbX10sdSxpLHQsbyYmXCJmb3JlaWduT2JqZWN0XCIhPT1kLHIsZixyP3JbMF06aS5fX2smJmsoaSwwKSxjKSxudWxsIT1yKWZvcihfPXIubGVuZ3RoO18tLTspbnVsbCE9cltfXSYmaChyW19dKTtjfHwoXCJ2YWx1ZVwiaW4gcCYmdm9pZCAwIT09KF89cC52YWx1ZSkmJihfIT09bC52YWx1ZXx8XCJwcm9ncmVzc1wiPT09ZCYmIV8pJiZIKGwsXCJ2YWx1ZVwiLF8seS52YWx1ZSwhMSksXCJjaGVja2VkXCJpbiBwJiZ2b2lkIDAhPT0oXz1wLmNoZWNrZWQpJiZfIT09bC5jaGVja2VkJiZIKGwsXCJjaGVja2VkXCIsXyx5LmNoZWNrZWQsITEpKX1yZXR1cm4gbH1mdW5jdGlvbiBNKG4sdSxpKXt0cnl7XCJmdW5jdGlvblwiPT10eXBlb2Ygbj9uKHUpOm4uY3VycmVudD11fWNhdGNoKG4pe2wuX19lKG4saSl9fWZ1bmN0aW9uIE4obix1LGkpe3ZhciB0LG87aWYobC51bm1vdW50JiZsLnVubW91bnQobiksKHQ9bi5yZWYpJiYodC5jdXJyZW50JiZ0LmN1cnJlbnQhPT1uLl9fZXx8TSh0LG51bGwsdSkpLG51bGwhPSh0PW4uX19jKSl7aWYodC5jb21wb25lbnRXaWxsVW5tb3VudCl0cnl7dC5jb21wb25lbnRXaWxsVW5tb3VudCgpfWNhdGNoKG4pe2wuX19lKG4sdSl9dC5iYXNlPXQuX19QPW51bGx9aWYodD1uLl9faylmb3Iobz0wO288dC5sZW5ndGg7bysrKXRbb10mJk4odFtvXSx1LFwiZnVuY3Rpb25cIiE9dHlwZW9mIG4udHlwZSk7aXx8bnVsbD09bi5fX2V8fGgobi5fX2UpLG4uX19lPW4uX19kPXZvaWQgMH1mdW5jdGlvbiBPKG4sbCx1KXtyZXR1cm4gdGhpcy5jb25zdHJ1Y3RvcihuLHUpfWZ1bmN0aW9uIFModSxpLHQpe3ZhciBvLHIsZjtsLl9fJiZsLl9fKHUsaSkscj0obz1cImZ1bmN0aW9uXCI9PXR5cGVvZiB0KT9udWxsOnQmJnQuX19rfHxpLl9fayxmPVtdLGooaSx1PSghbyYmdHx8aSkuX19rPXYoZCxudWxsLFt1XSkscnx8ZSxlLHZvaWQgMCE9PWkub3duZXJTVkdFbGVtZW50LCFvJiZ0P1t0XTpyP251bGw6aS5maXJzdENoaWxkP24uY2FsbChpLmNoaWxkTm9kZXMpOm51bGwsZiwhbyYmdD90OnI/ci5fX2U6aS5maXJzdENoaWxkLG8pLHooZix1KX1mdW5jdGlvbiBxKG4sbCl7UyhuLGwscSl9ZnVuY3Rpb24gQihsLHUsaSl7dmFyIHQsbyxyLGY9YSh7fSxsLnByb3BzKTtmb3IociBpbiB1KVwia2V5XCI9PXI/dD11W3JdOlwicmVmXCI9PXI/bz11W3JdOmZbcl09dVtyXTtyZXR1cm4gYXJndW1lbnRzLmxlbmd0aD4yJiYoZi5jaGlsZHJlbj1hcmd1bWVudHMubGVuZ3RoPjM/bi5jYWxsKGFyZ3VtZW50cywyKTppKSx5KGwudHlwZSxmLHR8fGwua2V5LG98fGwucmVmLG51bGwpfWZ1bmN0aW9uIEQobixsKXt2YXIgdT17X19jOmw9XCJfX2NDXCIrZisrLF9fOm4sQ29uc3VtZXI6ZnVuY3Rpb24obixsKXtyZXR1cm4gbi5jaGlsZHJlbihsKX0sUHJvdmlkZXI6ZnVuY3Rpb24obil7dmFyIHUsaTtyZXR1cm4gdGhpcy5nZXRDaGlsZENvbnRleHR8fCh1PVtdLChpPXt9KVtsXT10aGlzLHRoaXMuZ2V0Q2hpbGRDb250ZXh0PWZ1bmN0aW9uKCl7cmV0dXJuIGl9LHRoaXMuc2hvdWxkQ29tcG9uZW50VXBkYXRlPWZ1bmN0aW9uKG4pe3RoaXMucHJvcHMudmFsdWUhPT1uLnZhbHVlJiZ1LnNvbWUobSl9LHRoaXMuc3ViPWZ1bmN0aW9uKG4pe3UucHVzaChuKTt2YXIgbD1uLmNvbXBvbmVudFdpbGxVbm1vdW50O24uY29tcG9uZW50V2lsbFVubW91bnQ9ZnVuY3Rpb24oKXt1LnNwbGljZSh1LmluZGV4T2YobiksMSksbCYmbC5jYWxsKG4pfX0pLG4uY2hpbGRyZW59fTtyZXR1cm4gdS5Qcm92aWRlci5fXz11LkNvbnN1bWVyLmNvbnRleHRUeXBlPXV9bj1jLnNsaWNlLGw9e19fZTpmdW5jdGlvbihuLGwpe2Zvcih2YXIgdSxpLHQ7bD1sLl9fOylpZigodT1sLl9fYykmJiF1Ll9fKXRyeXtpZigoaT11LmNvbnN0cnVjdG9yKSYmbnVsbCE9aS5nZXREZXJpdmVkU3RhdGVGcm9tRXJyb3ImJih1LnNldFN0YXRlKGkuZ2V0RGVyaXZlZFN0YXRlRnJvbUVycm9yKG4pKSx0PXUuX19kKSxudWxsIT11LmNvbXBvbmVudERpZENhdGNoJiYodS5jb21wb25lbnREaWRDYXRjaChuKSx0PXUuX19kKSx0KXJldHVybiB1Ll9fRT11fWNhdGNoKGwpe249bH10aHJvdyBufX0sdT0wLGk9ZnVuY3Rpb24obil7cmV0dXJuIG51bGwhPW4mJnZvaWQgMD09PW4uY29uc3RydWN0b3J9LF8ucHJvdG90eXBlLnNldFN0YXRlPWZ1bmN0aW9uKG4sbCl7dmFyIHU7dT1udWxsIT10aGlzLl9fcyYmdGhpcy5fX3MhPT10aGlzLnN0YXRlP3RoaXMuX19zOnRoaXMuX19zPWEoe30sdGhpcy5zdGF0ZSksXCJmdW5jdGlvblwiPT10eXBlb2YgbiYmKG49bihhKHt9LHUpLHRoaXMucHJvcHMpKSxuJiZhKHUsbiksbnVsbCE9biYmdGhpcy5fX3YmJihsJiZ0aGlzLl9faC5wdXNoKGwpLG0odGhpcykpfSxfLnByb3RvdHlwZS5mb3JjZVVwZGF0ZT1mdW5jdGlvbihuKXt0aGlzLl9fdiYmKHRoaXMuX19lPSEwLG4mJnRoaXMuX19oLnB1c2gobiksbSh0aGlzKSl9LF8ucHJvdG90eXBlLnJlbmRlcj1kLHQ9W10sbz1cImZ1bmN0aW9uXCI9PXR5cGVvZiBQcm9taXNlP1Byb21pc2UucHJvdG90eXBlLnRoZW4uYmluZChQcm9taXNlLnJlc29sdmUoKSk6c2V0VGltZW91dCxnLl9fcj0wLGY9MDtleHBvcnR7UyBhcyByZW5kZXIscSBhcyBoeWRyYXRlLHYgYXMgY3JlYXRlRWxlbWVudCx2IGFzIGgsZCBhcyBGcmFnbWVudCxwIGFzIGNyZWF0ZVJlZixpIGFzIGlzVmFsaWRFbGVtZW50LF8gYXMgQ29tcG9uZW50LEIgYXMgY2xvbmVFbGVtZW50LEQgYXMgY3JlYXRlQ29udGV4dCxBIGFzIHRvQ2hpbGRBcnJheSxsIGFzIG9wdGlvbnN9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cHJlYWN0Lm1vZHVsZS5qcy5tYXBcbiIsImltcG9ydHtvcHRpb25zIGFzIG59ZnJvbVwicHJlYWN0XCI7dmFyIHQsdSxyLG89MCxpPVtdLGM9bi5fX2IsZj1uLl9fcixlPW4uZGlmZmVkLGE9bi5fX2Msdj1uLnVubW91bnQ7ZnVuY3Rpb24gbSh0LHIpe24uX19oJiZuLl9faCh1LHQsb3x8ciksbz0wO3ZhciBpPXUuX19IfHwodS5fX0g9e19fOltdLF9faDpbXX0pO3JldHVybiB0Pj1pLl9fLmxlbmd0aCYmaS5fXy5wdXNoKHt9KSxpLl9fW3RdfWZ1bmN0aW9uIGwobil7cmV0dXJuIG89MSxwKHcsbil9ZnVuY3Rpb24gcChuLHIsbyl7dmFyIGk9bSh0KyssMik7cmV0dXJuIGkudD1uLGkuX19jfHwoaS5fXz1bbz9vKHIpOncodm9pZCAwLHIpLGZ1bmN0aW9uKG4pe3ZhciB0PWkudChpLl9fWzBdLG4pO2kuX19bMF0hPT10JiYoaS5fXz1bdCxpLl9fWzFdXSxpLl9fYy5zZXRTdGF0ZSh7fSkpfV0saS5fX2M9dSksaS5fX31mdW5jdGlvbiB5KHIsbyl7dmFyIGk9bSh0KyssMyk7IW4uX19zJiZrKGkuX19ILG8pJiYoaS5fXz1yLGkuX19IPW8sdS5fX0guX19oLnB1c2goaSkpfWZ1bmN0aW9uIGgocixvKXt2YXIgaT1tKHQrKyw0KTshbi5fX3MmJmsoaS5fX0gsbykmJihpLl9fPXIsaS5fX0g9byx1Ll9faC5wdXNoKGkpKX1mdW5jdGlvbiBzKG4pe3JldHVybiBvPTUsZChmdW5jdGlvbigpe3JldHVybntjdXJyZW50Om59fSxbXSl9ZnVuY3Rpb24gXyhuLHQsdSl7bz02LGgoZnVuY3Rpb24oKXtcImZ1bmN0aW9uXCI9PXR5cGVvZiBuP24odCgpKTpuJiYobi5jdXJyZW50PXQoKSl9LG51bGw9PXU/dTp1LmNvbmNhdChuKSl9ZnVuY3Rpb24gZChuLHUpe3ZhciByPW0odCsrLDcpO3JldHVybiBrKHIuX19ILHUpJiYoci5fXz1uKCksci5fX0g9dSxyLl9faD1uKSxyLl9ffWZ1bmN0aW9uIEEobix0KXtyZXR1cm4gbz04LGQoZnVuY3Rpb24oKXtyZXR1cm4gbn0sdCl9ZnVuY3Rpb24gRihuKXt2YXIgcj11LmNvbnRleHRbbi5fX2NdLG89bSh0KyssOSk7cmV0dXJuIG8uYz1uLHI/KG51bGw9PW8uX18mJihvLl9fPSEwLHIuc3ViKHUpKSxyLnByb3BzLnZhbHVlKTpuLl9ffWZ1bmN0aW9uIFQodCx1KXtuLnVzZURlYnVnVmFsdWUmJm4udXNlRGVidWdWYWx1ZSh1P3UodCk6dCl9ZnVuY3Rpb24gcShuKXt2YXIgcj1tKHQrKywxMCksbz1sKCk7cmV0dXJuIHIuX189bix1LmNvbXBvbmVudERpZENhdGNofHwodS5jb21wb25lbnREaWRDYXRjaD1mdW5jdGlvbihuKXtyLl9fJiZyLl9fKG4pLG9bMV0obil9KSxbb1swXSxmdW5jdGlvbigpe29bMV0odm9pZCAwKX1dfWZ1bmN0aW9uIHgoKXtpLmZvckVhY2goZnVuY3Rpb24odCl7aWYodC5fX1ApdHJ5e3QuX19ILl9faC5mb3JFYWNoKGcpLHQuX19ILl9faC5mb3JFYWNoKGopLHQuX19ILl9faD1bXX1jYXRjaCh1KXt0Ll9fSC5fX2g9W10sbi5fX2UodSx0Ll9fdil9fSksaT1bXX1uLl9fYj1mdW5jdGlvbihuKXt1PW51bGwsYyYmYyhuKX0sbi5fX3I9ZnVuY3Rpb24obil7ZiYmZihuKSx0PTA7dmFyIHI9KHU9bi5fX2MpLl9fSDtyJiYoci5fX2guZm9yRWFjaChnKSxyLl9faC5mb3JFYWNoKGopLHIuX19oPVtdKX0sbi5kaWZmZWQ9ZnVuY3Rpb24odCl7ZSYmZSh0KTt2YXIgbz10Ll9fYztvJiZvLl9fSCYmby5fX0guX19oLmxlbmd0aCYmKDEhPT1pLnB1c2gobykmJnI9PT1uLnJlcXVlc3RBbmltYXRpb25GcmFtZXx8KChyPW4ucmVxdWVzdEFuaW1hdGlvbkZyYW1lKXx8ZnVuY3Rpb24obil7dmFyIHQsdT1mdW5jdGlvbigpe2NsZWFyVGltZW91dChyKSxiJiZjYW5jZWxBbmltYXRpb25GcmFtZSh0KSxzZXRUaW1lb3V0KG4pfSxyPXNldFRpbWVvdXQodSwxMDApO2ImJih0PXJlcXVlc3RBbmltYXRpb25GcmFtZSh1KSl9KSh4KSksdT12b2lkIDB9LG4uX19jPWZ1bmN0aW9uKHQsdSl7dS5zb21lKGZ1bmN0aW9uKHQpe3RyeXt0Ll9faC5mb3JFYWNoKGcpLHQuX19oPXQuX19oLmZpbHRlcihmdW5jdGlvbihuKXtyZXR1cm4hbi5fX3x8aihuKX0pfWNhdGNoKHIpe3Uuc29tZShmdW5jdGlvbihuKXtuLl9faCYmKG4uX19oPVtdKX0pLHU9W10sbi5fX2Uocix0Ll9fdil9fSksYSYmYSh0LHUpfSxuLnVubW91bnQ9ZnVuY3Rpb24odCl7diYmdih0KTt2YXIgdT10Ll9fYztpZih1JiZ1Ll9fSCl0cnl7dS5fX0guX18uZm9yRWFjaChnKX1jYXRjaCh0KXtuLl9fZSh0LHUuX192KX19O3ZhciBiPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVlc3RBbmltYXRpb25GcmFtZTtmdW5jdGlvbiBnKG4pe3ZhciB0PXU7XCJmdW5jdGlvblwiPT10eXBlb2Ygbi5fX2MmJm4uX19jKCksdT10fWZ1bmN0aW9uIGoobil7dmFyIHQ9dTtuLl9fYz1uLl9fKCksdT10fWZ1bmN0aW9uIGsobix0KXtyZXR1cm4hbnx8bi5sZW5ndGghPT10Lmxlbmd0aHx8dC5zb21lKGZ1bmN0aW9uKHQsdSl7cmV0dXJuIHQhPT1uW3VdfSl9ZnVuY3Rpb24gdyhuLHQpe3JldHVyblwiZnVuY3Rpb25cIj09dHlwZW9mIHQ/dChuKTp0fWV4cG9ydHtsIGFzIHVzZVN0YXRlLHAgYXMgdXNlUmVkdWNlcix5IGFzIHVzZUVmZmVjdCxoIGFzIHVzZUxheW91dEVmZmVjdCxzIGFzIHVzZVJlZixfIGFzIHVzZUltcGVyYXRpdmVIYW5kbGUsZCBhcyB1c2VNZW1vLEEgYXMgdXNlQ2FsbGJhY2ssRiBhcyB1c2VDb250ZXh0LFQgYXMgdXNlRGVidWdWYWx1ZSxxIGFzIHVzZUVycm9yQm91bmRhcnl9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aG9va3MubW9kdWxlLmpzLm1hcFxuIiwiaW1wb3J0e3VzZVN0YXRlIGFzIG4sdXNlUmVkdWNlciBhcyB0LHVzZUVmZmVjdCBhcyBlLHVzZUxheW91dEVmZmVjdCBhcyByLHVzZVJlZiBhcyB1LHVzZUltcGVyYXRpdmVIYW5kbGUgYXMgbyx1c2VNZW1vIGFzIGksdXNlQ2FsbGJhY2sgYXMgbCx1c2VDb250ZXh0IGFzIGYsdXNlRGVidWdWYWx1ZSBhcyBjfWZyb21cInByZWFjdC9ob29rc1wiO2V4cG9ydCpmcm9tXCJwcmVhY3QvaG9va3NcIjtpbXBvcnR7Q29tcG9uZW50IGFzIGEsY3JlYXRlRWxlbWVudCBhcyBzLG9wdGlvbnMgYXMgaCx0b0NoaWxkQXJyYXkgYXMgdixGcmFnbWVudCBhcyBkLHJlbmRlciBhcyBwLGh5ZHJhdGUgYXMgbSxjbG9uZUVsZW1lbnQgYXMgeSxjcmVhdGVSZWYgYXMgYixjcmVhdGVDb250ZXh0IGFzIF99ZnJvbVwicHJlYWN0XCI7ZXhwb3J0e2NyZWF0ZUVsZW1lbnQsY3JlYXRlQ29udGV4dCxjcmVhdGVSZWYsRnJhZ21lbnQsQ29tcG9uZW50fWZyb21cInByZWFjdFwiO2Z1bmN0aW9uIFMobix0KXtmb3IodmFyIGUgaW4gdCluW2VdPXRbZV07cmV0dXJuIG59ZnVuY3Rpb24gQyhuLHQpe2Zvcih2YXIgZSBpbiBuKWlmKFwiX19zb3VyY2VcIiE9PWUmJiEoZSBpbiB0KSlyZXR1cm4hMDtmb3IodmFyIHIgaW4gdClpZihcIl9fc291cmNlXCIhPT1yJiZuW3JdIT09dFtyXSlyZXR1cm4hMDtyZXR1cm4hMX1mdW5jdGlvbiBFKG4pe3RoaXMucHJvcHM9bn1mdW5jdGlvbiBnKG4sdCl7ZnVuY3Rpb24gZShuKXt2YXIgZT10aGlzLnByb3BzLnJlZixyPWU9PW4ucmVmO3JldHVybiFyJiZlJiYoZS5jYWxsP2UobnVsbCk6ZS5jdXJyZW50PW51bGwpLHQ/IXQodGhpcy5wcm9wcyxuKXx8IXI6Qyh0aGlzLnByb3BzLG4pfWZ1bmN0aW9uIHIodCl7cmV0dXJuIHRoaXMuc2hvdWxkQ29tcG9uZW50VXBkYXRlPWUscyhuLHQpfXJldHVybiByLmRpc3BsYXlOYW1lPVwiTWVtbyhcIisobi5kaXNwbGF5TmFtZXx8bi5uYW1lKStcIilcIixyLnByb3RvdHlwZS5pc1JlYWN0Q29tcG9uZW50PSEwLHIuX19mPSEwLHJ9KEUucHJvdG90eXBlPW5ldyBhKS5pc1B1cmVSZWFjdENvbXBvbmVudD0hMCxFLnByb3RvdHlwZS5zaG91bGRDb21wb25lbnRVcGRhdGU9ZnVuY3Rpb24obix0KXtyZXR1cm4gQyh0aGlzLnByb3BzLG4pfHxDKHRoaXMuc3RhdGUsdCl9O3ZhciB3PWguX19iO2guX19iPWZ1bmN0aW9uKG4pe24udHlwZSYmbi50eXBlLl9fZiYmbi5yZWYmJihuLnByb3BzLnJlZj1uLnJlZixuLnJlZj1udWxsKSx3JiZ3KG4pfTt2YXIgUj1cInVuZGVmaW5lZFwiIT10eXBlb2YgU3ltYm9sJiZTeW1ib2wuZm9yJiZTeW1ib2wuZm9yKFwicmVhY3QuZm9yd2FyZF9yZWZcIil8fDM5MTE7ZnVuY3Rpb24geChuKXtmdW5jdGlvbiB0KHQsZSl7dmFyIHI9Uyh7fSx0KTtyZXR1cm4gZGVsZXRlIHIucmVmLG4ociwoZT10LnJlZnx8ZSkmJihcIm9iamVjdFwiIT10eXBlb2YgZXx8XCJjdXJyZW50XCJpbiBlKT9lOm51bGwpfXJldHVybiB0LiQkdHlwZW9mPVIsdC5yZW5kZXI9dCx0LnByb3RvdHlwZS5pc1JlYWN0Q29tcG9uZW50PXQuX19mPSEwLHQuZGlzcGxheU5hbWU9XCJGb3J3YXJkUmVmKFwiKyhuLmRpc3BsYXlOYW1lfHxuLm5hbWUpK1wiKVwiLHR9dmFyIE49ZnVuY3Rpb24obix0KXtyZXR1cm4gbnVsbD09bj9udWxsOnYodihuKS5tYXAodCkpfSxrPXttYXA6Tixmb3JFYWNoOk4sY291bnQ6ZnVuY3Rpb24obil7cmV0dXJuIG4/dihuKS5sZW5ndGg6MH0sb25seTpmdW5jdGlvbihuKXt2YXIgdD12KG4pO2lmKDEhPT10Lmxlbmd0aCl0aHJvd1wiQ2hpbGRyZW4ub25seVwiO3JldHVybiB0WzBdfSx0b0FycmF5OnZ9LEE9aC5fX2U7aC5fX2U9ZnVuY3Rpb24obix0LGUpe2lmKG4udGhlbilmb3IodmFyIHIsdT10O3U9dS5fXzspaWYoKHI9dS5fX2MpJiZyLl9fYylyZXR1cm4gbnVsbD09dC5fX2UmJih0Ll9fZT1lLl9fZSx0Ll9faz1lLl9fayksci5fX2Mobix0KTtBKG4sdCxlKX07dmFyIE89aC51bm1vdW50O2Z1bmN0aW9uIEwoKXt0aGlzLl9fdT0wLHRoaXMudD1udWxsLHRoaXMuX19iPW51bGx9ZnVuY3Rpb24gVShuKXt2YXIgdD1uLl9fLl9fYztyZXR1cm4gdCYmdC5fX2UmJnQuX19lKG4pfWZ1bmN0aW9uIEYobil7dmFyIHQsZSxyO2Z1bmN0aW9uIHUodSl7aWYodHx8KHQ9bigpKS50aGVuKGZ1bmN0aW9uKG4pe2U9bi5kZWZhdWx0fHxufSxmdW5jdGlvbihuKXtyPW59KSxyKXRocm93IHI7aWYoIWUpdGhyb3cgdDtyZXR1cm4gcyhlLHUpfXJldHVybiB1LmRpc3BsYXlOYW1lPVwiTGF6eVwiLHUuX19mPSEwLHV9ZnVuY3Rpb24gTSgpe3RoaXMudT1udWxsLHRoaXMubz1udWxsfWgudW5tb3VudD1mdW5jdGlvbihuKXt2YXIgdD1uLl9fYzt0JiZ0Ll9fUiYmdC5fX1IoKSx0JiYhMD09PW4uX19oJiYobi50eXBlPW51bGwpLE8mJk8obil9LChMLnByb3RvdHlwZT1uZXcgYSkuX19jPWZ1bmN0aW9uKG4sdCl7dmFyIGU9dC5fX2Mscj10aGlzO251bGw9PXIudCYmKHIudD1bXSksci50LnB1c2goZSk7dmFyIHU9VShyLl9fdiksbz0hMSxpPWZ1bmN0aW9uKCl7b3x8KG89ITAsZS5fX1I9bnVsbCx1P3UobCk6bCgpKX07ZS5fX1I9aTt2YXIgbD1mdW5jdGlvbigpe2lmKCEtLXIuX191KXtpZihyLnN0YXRlLl9fZSl7dmFyIG49ci5zdGF0ZS5fX2U7ci5fX3YuX19rWzBdPWZ1bmN0aW9uIG4odCxlLHIpe3JldHVybiB0JiYodC5fX3Y9bnVsbCx0Ll9faz10Ll9fayYmdC5fX2subWFwKGZ1bmN0aW9uKHQpe3JldHVybiBuKHQsZSxyKX0pLHQuX19jJiZ0Ll9fYy5fX1A9PT1lJiYodC5fX2UmJnIuaW5zZXJ0QmVmb3JlKHQuX19lLHQuX19kKSx0Ll9fYy5fX2U9ITAsdC5fX2MuX19QPXIpKSx0fShuLG4uX19jLl9fUCxuLl9fYy5fX08pfXZhciB0O2ZvcihyLnNldFN0YXRlKHtfX2U6ci5fX2I9bnVsbH0pO3Q9ci50LnBvcCgpOyl0LmZvcmNlVXBkYXRlKCl9fSxmPSEwPT09dC5fX2g7ci5fX3UrK3x8Znx8ci5zZXRTdGF0ZSh7X19lOnIuX19iPXIuX192Ll9fa1swXX0pLG4udGhlbihpLGkpfSxMLnByb3RvdHlwZS5jb21wb25lbnRXaWxsVW5tb3VudD1mdW5jdGlvbigpe3RoaXMudD1bXX0sTC5wcm90b3R5cGUucmVuZGVyPWZ1bmN0aW9uKG4sdCl7aWYodGhpcy5fX2Ipe2lmKHRoaXMuX192Ll9fayl7dmFyIGU9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSxyPXRoaXMuX192Ll9fa1swXS5fX2M7dGhpcy5fX3YuX19rWzBdPWZ1bmN0aW9uIG4odCxlLHIpe3JldHVybiB0JiYodC5fX2MmJnQuX19jLl9fSCYmKHQuX19jLl9fSC5fXy5mb3JFYWNoKGZ1bmN0aW9uKG4pe1wiZnVuY3Rpb25cIj09dHlwZW9mIG4uX19jJiZuLl9fYygpfSksdC5fX2MuX19IPW51bGwpLG51bGwhPSh0PVMoe30sdCkpLl9fYyYmKHQuX19jLl9fUD09PXImJih0Ll9fYy5fX1A9ZSksdC5fX2M9bnVsbCksdC5fX2s9dC5fX2smJnQuX19rLm1hcChmdW5jdGlvbih0KXtyZXR1cm4gbih0LGUscil9KSksdH0odGhpcy5fX2IsZSxyLl9fTz1yLl9fUCl9dGhpcy5fX2I9bnVsbH12YXIgdT10Ll9fZSYmcyhkLG51bGwsbi5mYWxsYmFjayk7cmV0dXJuIHUmJih1Ll9faD1udWxsKSxbcyhkLG51bGwsdC5fX2U/bnVsbDpuLmNoaWxkcmVuKSx1XX07dmFyIFQ9ZnVuY3Rpb24obix0LGUpe2lmKCsrZVsxXT09PWVbMF0mJm4uby5kZWxldGUodCksbi5wcm9wcy5yZXZlYWxPcmRlciYmKFwidFwiIT09bi5wcm9wcy5yZXZlYWxPcmRlclswXXx8IW4uby5zaXplKSlmb3IoZT1uLnU7ZTspe2Zvcig7ZS5sZW5ndGg+MzspZS5wb3AoKSgpO2lmKGVbMV08ZVswXSlicmVhaztuLnU9ZT1lWzJdfX07ZnVuY3Rpb24gRChuKXtyZXR1cm4gdGhpcy5nZXRDaGlsZENvbnRleHQ9ZnVuY3Rpb24oKXtyZXR1cm4gbi5jb250ZXh0fSxuLmNoaWxkcmVufWZ1bmN0aW9uIEkobil7dmFyIHQ9dGhpcyxlPW4uaTt0LmNvbXBvbmVudFdpbGxVbm1vdW50PWZ1bmN0aW9uKCl7cChudWxsLHQubCksdC5sPW51bGwsdC5pPW51bGx9LHQuaSYmdC5pIT09ZSYmdC5jb21wb25lbnRXaWxsVW5tb3VudCgpLG4uX192Pyh0Lmx8fCh0Lmk9ZSx0Lmw9e25vZGVUeXBlOjEscGFyZW50Tm9kZTplLGNoaWxkTm9kZXM6W10sYXBwZW5kQ2hpbGQ6ZnVuY3Rpb24obil7dGhpcy5jaGlsZE5vZGVzLnB1c2gobiksdC5pLmFwcGVuZENoaWxkKG4pfSxpbnNlcnRCZWZvcmU6ZnVuY3Rpb24obixlKXt0aGlzLmNoaWxkTm9kZXMucHVzaChuKSx0LmkuYXBwZW5kQ2hpbGQobil9LHJlbW92ZUNoaWxkOmZ1bmN0aW9uKG4pe3RoaXMuY2hpbGROb2Rlcy5zcGxpY2UodGhpcy5jaGlsZE5vZGVzLmluZGV4T2Yobik+Pj4xLDEpLHQuaS5yZW1vdmVDaGlsZChuKX19KSxwKHMoRCx7Y29udGV4dDp0LmNvbnRleHR9LG4uX192KSx0LmwpKTp0LmwmJnQuY29tcG9uZW50V2lsbFVubW91bnQoKX1mdW5jdGlvbiBXKG4sdCl7cmV0dXJuIHMoSSx7X192Om4saTp0fSl9KE0ucHJvdG90eXBlPW5ldyBhKS5fX2U9ZnVuY3Rpb24obil7dmFyIHQ9dGhpcyxlPVUodC5fX3YpLHI9dC5vLmdldChuKTtyZXR1cm4gclswXSsrLGZ1bmN0aW9uKHUpe3ZhciBvPWZ1bmN0aW9uKCl7dC5wcm9wcy5yZXZlYWxPcmRlcj8oci5wdXNoKHUpLFQodCxuLHIpKTp1KCl9O2U/ZShvKTpvKCl9fSxNLnByb3RvdHlwZS5yZW5kZXI9ZnVuY3Rpb24obil7dGhpcy51PW51bGwsdGhpcy5vPW5ldyBNYXA7dmFyIHQ9dihuLmNoaWxkcmVuKTtuLnJldmVhbE9yZGVyJiZcImJcIj09PW4ucmV2ZWFsT3JkZXJbMF0mJnQucmV2ZXJzZSgpO2Zvcih2YXIgZT10Lmxlbmd0aDtlLS07KXRoaXMuby5zZXQodFtlXSx0aGlzLnU9WzEsMCx0aGlzLnVdKTtyZXR1cm4gbi5jaGlsZHJlbn0sTS5wcm90b3R5cGUuY29tcG9uZW50RGlkVXBkYXRlPU0ucHJvdG90eXBlLmNvbXBvbmVudERpZE1vdW50PWZ1bmN0aW9uKCl7dmFyIG49dGhpczt0aGlzLm8uZm9yRWFjaChmdW5jdGlvbih0LGUpe1QobixlLHQpfSl9O3ZhciBqPVwidW5kZWZpbmVkXCIhPXR5cGVvZiBTeW1ib2wmJlN5bWJvbC5mb3ImJlN5bWJvbC5mb3IoXCJyZWFjdC5lbGVtZW50XCIpfHw2MDEwMyxQPS9eKD86YWNjZW50fGFsaWdubWVudHxhcmFiaWN8YmFzZWxpbmV8Y2FwfGNsaXAoPyFQYXRoVSl8Y29sb3J8ZmlsbHxmbG9vZHxmb250fGdseXBoKD8hUil8aG9yaXp8bWFya2VyKD8hSHxXfFUpfG92ZXJsaW5lfHBhaW50fHN0b3B8c3RyaWtldGhyb3VnaHxzdHJva2V8dGV4dCg/IUwpfHVuZGVybGluZXx1bmljb2RlfHVuaXRzfHZ8dmVjdG9yfHZlcnR8d29yZHx3cml0aW5nfHgoPyFDKSlbQS1aXS8sVj1mdW5jdGlvbihuKXtyZXR1cm4oXCJ1bmRlZmluZWRcIiE9dHlwZW9mIFN5bWJvbCYmXCJzeW1ib2xcIj09dHlwZW9mIFN5bWJvbCgpPy9maWx8Y2hlfHJhZC9pOi9maWx8Y2hlfHJhL2kpLnRlc3Qobil9O2Z1bmN0aW9uIHoobix0LGUpe3JldHVybiBudWxsPT10Ll9fayYmKHQudGV4dENvbnRlbnQ9XCJcIikscChuLHQpLFwiZnVuY3Rpb25cIj09dHlwZW9mIGUmJmUoKSxuP24uX19jOm51bGx9ZnVuY3Rpb24gQihuLHQsZSl7cmV0dXJuIG0obix0KSxcImZ1bmN0aW9uXCI9PXR5cGVvZiBlJiZlKCksbj9uLl9fYzpudWxsfWEucHJvdG90eXBlLmlzUmVhY3RDb21wb25lbnQ9e30sW1wiY29tcG9uZW50V2lsbE1vdW50XCIsXCJjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzXCIsXCJjb21wb25lbnRXaWxsVXBkYXRlXCJdLmZvckVhY2goZnVuY3Rpb24obil7T2JqZWN0LmRlZmluZVByb3BlcnR5KGEucHJvdG90eXBlLG4se2NvbmZpZ3VyYWJsZTohMCxnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpc1tcIlVOU0FGRV9cIituXX0sc2V0OmZ1bmN0aW9uKHQpe09iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLG4se2NvbmZpZ3VyYWJsZTohMCx3cml0YWJsZTohMCx2YWx1ZTp0fSl9fSl9KTt2YXIgSD1oLmV2ZW50O2Z1bmN0aW9uIFooKXt9ZnVuY3Rpb24gWSgpe3JldHVybiB0aGlzLmNhbmNlbEJ1YmJsZX1mdW5jdGlvbiAkKCl7cmV0dXJuIHRoaXMuZGVmYXVsdFByZXZlbnRlZH1oLmV2ZW50PWZ1bmN0aW9uKG4pe3JldHVybiBIJiYobj1IKG4pKSxuLnBlcnNpc3Q9WixuLmlzUHJvcGFnYXRpb25TdG9wcGVkPVksbi5pc0RlZmF1bHRQcmV2ZW50ZWQ9JCxuLm5hdGl2ZUV2ZW50PW59O3ZhciBxLEc9e2NvbmZpZ3VyYWJsZTohMCxnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5jbGFzc319LEo9aC52bm9kZTtoLnZub2RlPWZ1bmN0aW9uKG4pe3ZhciB0PW4udHlwZSxlPW4ucHJvcHMscj1lO2lmKFwic3RyaW5nXCI9PXR5cGVvZiB0KXtmb3IodmFyIHUgaW4gcj17fSxlKXt2YXIgbz1lW3VdO1widmFsdWVcIj09PXUmJlwiZGVmYXVsdFZhbHVlXCJpbiBlJiZudWxsPT1vfHwoXCJkZWZhdWx0VmFsdWVcIj09PXUmJlwidmFsdWVcImluIGUmJm51bGw9PWUudmFsdWU/dT1cInZhbHVlXCI6XCJkb3dubG9hZFwiPT09dSYmITA9PT1vP289XCJcIjovb25kb3VibGVjbGljay9pLnRlc3QodSk/dT1cIm9uZGJsY2xpY2tcIjovXm9uY2hhbmdlKHRleHRhcmVhfGlucHV0KS9pLnRlc3QodSt0KSYmIVYoZS50eXBlKT91PVwib25pbnB1dFwiOi9eb24oQW5pfFRyYXxUb3V8QmVmb3JlSW5wKS8udGVzdCh1KT91PXUudG9Mb3dlckNhc2UoKTpQLnRlc3QodSk/dT11LnJlcGxhY2UoL1tBLVowLTldLyxcIi0kJlwiKS50b0xvd2VyQ2FzZSgpOm51bGw9PT1vJiYobz12b2lkIDApLHJbdV09byl9XCJzZWxlY3RcIj09dCYmci5tdWx0aXBsZSYmQXJyYXkuaXNBcnJheShyLnZhbHVlKSYmKHIudmFsdWU9dihlLmNoaWxkcmVuKS5mb3JFYWNoKGZ1bmN0aW9uKG4pe24ucHJvcHMuc2VsZWN0ZWQ9LTEhPXIudmFsdWUuaW5kZXhPZihuLnByb3BzLnZhbHVlKX0pKSxcInNlbGVjdFwiPT10JiZudWxsIT1yLmRlZmF1bHRWYWx1ZSYmKHIudmFsdWU9dihlLmNoaWxkcmVuKS5mb3JFYWNoKGZ1bmN0aW9uKG4pe24ucHJvcHMuc2VsZWN0ZWQ9ci5tdWx0aXBsZT8tMSE9ci5kZWZhdWx0VmFsdWUuaW5kZXhPZihuLnByb3BzLnZhbHVlKTpyLmRlZmF1bHRWYWx1ZT09bi5wcm9wcy52YWx1ZX0pKSxuLnByb3BzPXJ9dCYmZS5jbGFzcyE9ZS5jbGFzc05hbWUmJihHLmVudW1lcmFibGU9XCJjbGFzc05hbWVcImluIGUsbnVsbCE9ZS5jbGFzc05hbWUmJihyLmNsYXNzPWUuY2xhc3NOYW1lKSxPYmplY3QuZGVmaW5lUHJvcGVydHkocixcImNsYXNzTmFtZVwiLEcpKSxuLiQkdHlwZW9mPWosSiYmSihuKX07dmFyIEs9aC5fX3I7aC5fX3I9ZnVuY3Rpb24obil7SyYmSyhuKSxxPW4uX19jfTt2YXIgUT17UmVhY3RDdXJyZW50RGlzcGF0Y2hlcjp7Y3VycmVudDp7cmVhZENvbnRleHQ6ZnVuY3Rpb24obil7cmV0dXJuIHEuX19uW24uX19jXS5wcm9wcy52YWx1ZX19fX0sWD1cIjE3LjAuMlwiO2Z1bmN0aW9uIG5uKG4pe3JldHVybiBzLmJpbmQobnVsbCxuKX1mdW5jdGlvbiB0bihuKXtyZXR1cm4hIW4mJm4uJCR0eXBlb2Y9PT1qfWZ1bmN0aW9uIGVuKG4pe3JldHVybiB0bihuKT95LmFwcGx5KG51bGwsYXJndW1lbnRzKTpufWZ1bmN0aW9uIHJuKG4pe3JldHVybiEhbi5fX2smJihwKG51bGwsbiksITApfWZ1bmN0aW9uIHVuKG4pe3JldHVybiBuJiYobi5iYXNlfHwxPT09bi5ub2RlVHlwZSYmbil8fG51bGx9dmFyIG9uPWZ1bmN0aW9uKG4sdCl7cmV0dXJuIG4odCl9LGxuPWZ1bmN0aW9uKG4sdCl7cmV0dXJuIG4odCl9LGZuPWQ7ZXhwb3J0IGRlZmF1bHR7dXNlU3RhdGU6bix1c2VSZWR1Y2VyOnQsdXNlRWZmZWN0OmUsdXNlTGF5b3V0RWZmZWN0OnIsdXNlUmVmOnUsdXNlSW1wZXJhdGl2ZUhhbmRsZTpvLHVzZU1lbW86aSx1c2VDYWxsYmFjazpsLHVzZUNvbnRleHQ6Zix1c2VEZWJ1Z1ZhbHVlOmMsdmVyc2lvbjpcIjE3LjAuMlwiLENoaWxkcmVuOmsscmVuZGVyOnosaHlkcmF0ZTpCLHVubW91bnRDb21wb25lbnRBdE5vZGU6cm4sY3JlYXRlUG9ydGFsOlcsY3JlYXRlRWxlbWVudDpzLGNyZWF0ZUNvbnRleHQ6XyxjcmVhdGVGYWN0b3J5Om5uLGNsb25lRWxlbWVudDplbixjcmVhdGVSZWY6YixGcmFnbWVudDpkLGlzVmFsaWRFbGVtZW50OnRuLGZpbmRET01Ob2RlOnVuLENvbXBvbmVudDphLFB1cmVDb21wb25lbnQ6RSxtZW1vOmcsZm9yd2FyZFJlZjp4LGZsdXNoU3luYzpsbix1bnN0YWJsZV9iYXRjaGVkVXBkYXRlczpvbixTdHJpY3RNb2RlOmQsU3VzcGVuc2U6TCxTdXNwZW5zZUxpc3Q6TSxsYXp5OkYsX19TRUNSRVRfSU5URVJOQUxTX0RPX05PVF9VU0VfT1JfWU9VX1dJTExfQkVfRklSRUQ6UX07ZXhwb3J0e1ggYXMgdmVyc2lvbixrIGFzIENoaWxkcmVuLHogYXMgcmVuZGVyLEIgYXMgaHlkcmF0ZSxybiBhcyB1bm1vdW50Q29tcG9uZW50QXROb2RlLFcgYXMgY3JlYXRlUG9ydGFsLG5uIGFzIGNyZWF0ZUZhY3RvcnksZW4gYXMgY2xvbmVFbGVtZW50LHRuIGFzIGlzVmFsaWRFbGVtZW50LHVuIGFzIGZpbmRET01Ob2RlLEUgYXMgUHVyZUNvbXBvbmVudCxnIGFzIG1lbW8seCBhcyBmb3J3YXJkUmVmLGxuIGFzIGZsdXNoU3luYyxvbiBhcyB1bnN0YWJsZV9iYXRjaGVkVXBkYXRlcyxmbiBhcyBTdHJpY3RNb2RlLEwgYXMgU3VzcGVuc2UsTSBhcyBTdXNwZW5zZUxpc3QsRiBhcyBsYXp5LFEgYXMgX19TRUNSRVRfSU5URVJOQUxTX0RPX05PVF9VU0VfT1JfWU9VX1dJTExfQkVfRklSRUR9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y29tcGF0Lm1vZHVsZS5qcy5tYXBcbiIsImltcG9ydCB7IGNyZWF0ZUVsZW1lbnQsIEZyYWdtZW50IH0gZnJvbSBcInByZWFjdFwiO1xuZXhwb3J0IGZ1bmN0aW9uIHVzZU1lcmdlZENoaWxkcmVuKGxoc1Byb3BzLCByaHNQcm9wcykge1xuICAgIGNvbnN0IGxocyA9IGxoc1Byb3BzPy5jaGlsZHJlbjtcbiAgICBjb25zdCByaHMgPSByaHNQcm9wcz8uY2hpbGRyZW47XG4gICAgaWYgKGxocyA9PSBudWxsICYmIHJocyA9PSBudWxsKSB7XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2UgaWYgKGxocyA9PSBudWxsKSB7XG4gICAgICAgIHJldHVybiByaHM7XG4gICAgfVxuICAgIGVsc2UgaWYgKHJocyA9PSBudWxsKSB7XG4gICAgICAgIHJldHVybiBsaHM7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBsZXQgcmV0ID0gY3JlYXRlRWxlbWVudChGcmFnbWVudCwge30sIGxocywgcmhzKTtcbiAgICAgICAgcmV0dXJuIHJldDtcbiAgICB9XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2UtbWVyZ2VkLWNoaWxkcmVuLmpzLm1hcCIsImZ1bmN0aW9uIHRvVmFsKG1peCkge1xuXHR2YXIgaywgeSwgc3RyPScnO1xuXG5cdGlmICh0eXBlb2YgbWl4ID09PSAnc3RyaW5nJyB8fCB0eXBlb2YgbWl4ID09PSAnbnVtYmVyJykge1xuXHRcdHN0ciArPSBtaXg7XG5cdH0gZWxzZSBpZiAodHlwZW9mIG1peCA9PT0gJ29iamVjdCcpIHtcblx0XHRpZiAoQXJyYXkuaXNBcnJheShtaXgpKSB7XG5cdFx0XHRmb3IgKGs9MDsgayA8IG1peC5sZW5ndGg7IGsrKykge1xuXHRcdFx0XHRpZiAobWl4W2tdKSB7XG5cdFx0XHRcdFx0aWYgKHkgPSB0b1ZhbChtaXhba10pKSB7XG5cdFx0XHRcdFx0XHRzdHIgJiYgKHN0ciArPSAnICcpO1xuXHRcdFx0XHRcdFx0c3RyICs9IHk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdGZvciAoayBpbiBtaXgpIHtcblx0XHRcdFx0aWYgKG1peFtrXSkge1xuXHRcdFx0XHRcdHN0ciAmJiAoc3RyICs9ICcgJyk7XG5cdFx0XHRcdFx0c3RyICs9IGs7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gc3RyO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XG5cdHZhciBpPTAsIHRtcCwgeCwgc3RyPScnO1xuXHR3aGlsZSAoaSA8IGFyZ3VtZW50cy5sZW5ndGgpIHtcblx0XHRpZiAodG1wID0gYXJndW1lbnRzW2krK10pIHtcblx0XHRcdGlmICh4ID0gdG9WYWwodG1wKSkge1xuXHRcdFx0XHRzdHIgJiYgKHN0ciArPSAnICcpO1xuXHRcdFx0XHRzdHIgKz0geFxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXHRyZXR1cm4gc3RyO1xufVxuIiwiaW1wb3J0IHsgZGVmYXVsdCBhcyBjbHN4IH0gZnJvbSBcImNsc3hcIjtcbi8qKlxuICogR2l2ZW4gdHdvIHNldHMgb2YgcHJvcHMsIG1lcmdlcyB0aGVpciBgY2xhc3NgIGFuZCBgY2xhc3NOYW1lYCBwcm9wZXJ0aWVzLlxuICogRHVwbGljYXRlIGNsYXNzZXMgYXJlIHJlbW92ZWQgKG9yZGVyIGRvZXNuJ3QgbWF0dGVyIGFueXdheSkuXG4gKlxuICogQHBhcmFtIGxocyBDbGFzc2VzIG9mIHRoZSBmaXJzdCBjb21wb25lbnRcbiAqIEBwYXJhbSByaHMgQ2xhc3NlcyBvZiB0aGUgc2Vjb25kIGNvbXBvbmVudFxuICogQHJldHVybnMgQSBzdHJpbmcgcmVwcmVzZW50aW5nIGFsbCBjb21iaW5lZCBjbGFzc2VzIGZyb20gYm90aCBhcmd1bWVudHMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VNZXJnZWRDbGFzc2VzKGxocywgcmhzKSB7XG4gICAgLy8gTm90ZTogRm9yIHRoZSBzYWtlIG9mIGZvcndhcmQgY29tcGF0aWJpbGl0eSwgdGhpcyBmdW5jdGlvbiBpcyBsYWJlbGxlZCBhc1xuICAgIC8vIGEgaG9vaywgYnV0IGFzIGl0IHVzZXMgbm8gb3RoZXIgaG9va3MgaXQgdGVjaG5pY2FsbHkgaXNuJ3Qgb25lLlxuICAgIHJldHVybiBtZXJnZUNsYXNzZXMobGhzLCByaHMpO1xufVxuZnVuY3Rpb24gbWVyZ2VDbGFzc2VzKGxocywgcmhzKSB7XG4gICAgY29uc3QgbGhzQ2xhc3MgPSBsaHM/LmNsYXNzO1xuICAgIGNvbnN0IGxoc0NsYXNzTmFtZSA9IGxocz8uY2xhc3NOYW1lO1xuICAgIGNvbnN0IHJoc0NsYXNzID0gcmhzPy5jbGFzcztcbiAgICBjb25zdCByaHNDbGFzc05hbWUgPSByaHM/LmNsYXNzTmFtZTtcbiAgICBpZiAobGhzQ2xhc3MgfHwgcmhzQ2xhc3MgfHwgbGhzQ2xhc3NOYW1lIHx8IHJoc0NsYXNzTmFtZSkge1xuICAgICAgICBsZXQgbGhzQ2xhc3NlcyA9IGNsc3gobGhzQ2xhc3MsIGxoc0NsYXNzTmFtZSkuc3BsaXQoXCIgXCIpO1xuICAgICAgICBsZXQgcmhzQ2xhc3NlcyA9IGNsc3gocmhzQ2xhc3MsIHJoc0NsYXNzTmFtZSkuc3BsaXQoXCIgXCIpO1xuICAgICAgICBsZXQgYWxsQ2xhc3NlcyA9IG5ldyBTZXQoWy4uLkFycmF5LmZyb20obGhzQ2xhc3NlcyksIC4uLkFycmF5LmZyb20ocmhzQ2xhc3NlcyldKTtcbiAgICAgICAgcmV0dXJuIEFycmF5LmZyb20oYWxsQ2xhc3Nlcykuam9pbihcIiBcIik7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cbn1cbmZ1bmN0aW9uIHR5cGV0ZXN0KCkge1xuICAgIGNvbnN0IGMgPSBbXG4gICAgICAgIHVzZU1lcmdlZENsYXNzZXModW5kZWZpbmVkLCB1bmRlZmluZWQpLFxuICAgICAgICB1c2VNZXJnZWRDbGFzc2VzKHt9LCB1bmRlZmluZWQpLFxuICAgICAgICB1c2VNZXJnZWRDbGFzc2VzKHVuZGVmaW5lZCwge30pLFxuICAgICAgICB1c2VNZXJnZWRDbGFzc2VzKHt9LCB7fSksXG4gICAgICAgIHVzZU1lcmdlZENsYXNzZXMoeyBjbGFzczogXCJzdHJpbmdcIiB9LCB7fSksXG4gICAgICAgIHVzZU1lcmdlZENsYXNzZXMoeyBjbGFzczogXCJzdHJpbmdcIiB9LCB7IGNsYXNzOiB1bmRlZmluZWQgfSksXG4gICAgICAgIHVzZU1lcmdlZENsYXNzZXMoeyBjbGFzczogdW5kZWZpbmVkIH0sIHsgY2xhc3M6IFwic3RyaW5nXCIgfSksXG4gICAgICAgIHVzZU1lcmdlZENsYXNzZXMoeyBjbGFzc05hbWU6IFwic3RyaW5nXCIgfSwgeyBjbGFzc05hbWU6IHVuZGVmaW5lZCB9KSxcbiAgICAgICAgdXNlTWVyZ2VkQ2xhc3Nlcyh7IGNsYXNzTmFtZTogdW5kZWZpbmVkIH0sIHsgY2xhc3NOYW1lOiBcInN0cmluZ1wiIH0pLFxuICAgICAgICB1c2VNZXJnZWRDbGFzc2VzKHsgY2xhc3M6IFwic3RyaW5nXCIgfSwgeyBjbGFzc05hbWU6IHVuZGVmaW5lZCB9KSxcbiAgICAgICAgdXNlTWVyZ2VkQ2xhc3Nlcyh7IGNsYXNzTmFtZTogdW5kZWZpbmVkIH0sIHsgY2xhc3M6IFwic3RyaW5nXCIgfSksXG4gICAgICAgIHVzZU1lcmdlZENsYXNzZXMoeyBjbGFzc05hbWU6IFwic3RyaW5nXCIgfSwgeyBjbGFzczogdW5kZWZpbmVkIH0pLFxuICAgICAgICB1c2VNZXJnZWRDbGFzc2VzKHsgY2xhc3M6IHVuZGVmaW5lZCB9LCB7IGNsYXNzTmFtZTogXCJzdHJpbmdcIiB9KSxcbiAgICBdO1xuICAgIC8vLyBAdHMtZXhwZWN0LWVycm9yXG4gICAgY1swXS5jb25jYXQoXCJcIik7XG4gICAgLy8vIEB0cy1leHBlY3QtZXJyb3JcbiAgICBjWzFdLmNvbmNhdChcIlwiKTtcbiAgICAvLy8gQHRzLWV4cGVjdC1lcnJvclxuICAgIGNbMl0uY29uY2F0KFwiXCIpO1xuICAgIC8vLyBAdHMtZXhwZWN0LWVycm9yXG4gICAgY1szXS5jb25jYXQoXCJcIik7XG4gICAgY1s0XS5jb25jYXQoXCJcIik7XG4gICAgY1s1XS5jb25jYXQoXCJcIik7XG4gICAgY1s2XS5jb25jYXQoXCJcIik7XG4gICAgY1s3XS5jb25jYXQoXCJcIik7XG4gICAgY1s4XS5jb25jYXQoXCJcIik7XG4gICAgY1s5XS5jb25jYXQoXCJcIik7XG4gICAgY1sxMF0uY29uY2F0KFwiXCIpO1xuICAgIGNbMTFdLmNvbmNhdChcIlwiKTtcbiAgICBjWzEyXS5jb25jYXQoXCJcIik7XG4gICAgLy8vIEB0cy1leHBlY3QtZXJyb3JcbiAgICBjWzEzXTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZS1tZXJnZWQtY2xhc3Nlcy5qcy5tYXAiLCJpbXBvcnQgeyB1c2VDYWxsYmFjayB9IGZyb20gXCJwcmVhY3QvaG9va3NcIjtcbmZ1bmN0aW9uIHByb2Nlc3NSZWYoaW5zdGFuY2UsIHJlZikge1xuICAgIGlmICh0eXBlb2YgcmVmID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgcmVmKGluc3RhbmNlKTtcbiAgICB9XG4gICAgZWxzZSBpZiAocmVmICE9IG51bGwpIHtcbiAgICAgICAgcmVmLmN1cnJlbnQgPSBpbnN0YW5jZTtcbiAgICB9XG59XG4vKipcbiAqIENvbWJpbmVzIHR3byByZWZzIGludG8gb25lLiBUaGlzIGFsbG93cyBhIGNvbXBvbmVudCB0byBib3RoIHVzZSBpdHMgb3duIHJlZiAqYW5kKiBmb3J3YXJkIGEgcmVmIHRoYXQgd2FzIGdpdmVuIHRvIGl0LlxuICogQHBhcmFtIGxoc1xuICogQHBhcmFtIHJoc1xuICogQHJldHVybnNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZU1lcmdlZFJlZnMoKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChsaHNQcm9wcywgcmhzUHJvcHMpIHtcbiAgICAgICAgY29uc3QgbGhzID0gbGhzUHJvcHM/LnJlZjtcbiAgICAgICAgY29uc3QgcmhzID0gcmhzUHJvcHM/LnJlZjtcbiAgICAgICAgaWYgKGxocyA9PSBudWxsICYmIHJocyA9PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGxocyA9PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gcmhzO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHJocyA9PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gbGhzO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgbGV0IHJldCA9IHVzZUNhbGxiYWNrKChjdXJyZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgcHJvY2Vzc1JlZihjdXJyZW50LCBsaHMpO1xuICAgICAgICAgICAgICAgIHByb2Nlc3NSZWYoY3VycmVudCwgcmhzKTtcbiAgICAgICAgICAgIH0sIFtsaHMsIHJoc10pO1xuICAgICAgICAgICAgcmV0dXJuIHJldDtcbiAgICAgICAgfVxuICAgIH07XG59XG4vKlxuZnVuY3Rpb24gdHlwZXRlc3Q8UCBleHRlbmRzIGguSlNYLkhUTUxBdHRyaWJ1dGVzPEhUTUxJbnB1dEVsZW1lbnQ+Pihwcm9wczogUCkge1xuXG4gICAgY29uc3QgcmVmOiBSZWZPYmplY3Q8SFRNTElucHV0RWxlbWVudD4gPSB1c2VSZWY8SFRNTElucHV0RWxlbWVudD4obnVsbCk7XG5cbiAgICBmdW5jdGlvbiBhY2NlcHRzUmVmKHJlZjogUmVmPGFueT4pIHsgfVxuICAgIGZ1bmN0aW9uIGFjY2VwdHNPcHRpb25hbFJlZihyZWY6IFJlZjxhbnk+IHwgdW5kZWZpbmVkKSB7IH1cblxuICAgIGNvbnN0IGMgPSBbXG4gICAgICAgIHVzZU1lcmdlZFJlZnM8SFRNTElucHV0RWxlbWVudD4oKSh1bmRlZmluZWQsIHVuZGVmaW5lZCksXG4gICAgICAgIHVzZU1lcmdlZFJlZnM8SFRNTElucHV0RWxlbWVudD4oKSh7fSwgdW5kZWZpbmVkKSxcbiAgICAgICAgdXNlTWVyZ2VkUmVmczxIVE1MSW5wdXRFbGVtZW50PigpKHByb3BzLCB1bmRlZmluZWQpLFxuICAgICAgICB1c2VNZXJnZWRSZWZzPEhUTUxJbnB1dEVsZW1lbnQ+KCkodW5kZWZpbmVkLCBwcm9wcyksXG4gICAgICAgIHVzZU1lcmdlZFJlZnM8SFRNTElucHV0RWxlbWVudD4oKShwcm9wcywgcHJvcHMpLFxuICAgICAgICB1c2VNZXJnZWRSZWZzPEhUTUxJbnB1dEVsZW1lbnQ+KCkoeyByZWYgfSwgcHJvcHMpLFxuICAgICAgICB1c2VNZXJnZWRSZWZzPEhUTUxJbnB1dEVsZW1lbnQ+KCkoeyByZWYgfSwgeyByZWY6IHVuZGVmaW5lZCB9KSxcbiAgICAgICAgdXNlTWVyZ2VkUmVmczxIVE1MSW5wdXRFbGVtZW50PigpKHsgcmVmOiB1bmRlZmluZWQgfSwgeyByZWYgfSksXG4gICAgICAgIHVzZU1lcmdlZFJlZnM8SFRNTElucHV0RWxlbWVudD4oKSh7IHJlZiB9LCB7IHJlZiB9KSxcbiAgICBdIGFzIGNvbnN0O1xuXG4gICAgLy8vIEB0cy1leHBlY3QtZXJyb3JcbiAgICBhY2NlcHRzUmVmKGNbMF0pO1xuICAgIC8vLyBAdHMtZXhwZWN0LWVycm9yXG4gICAgYWNjZXB0c1JlZihjWzFdKTtcblxuICAgIGFjY2VwdHNPcHRpb25hbFJlZihjWzJdKTtcbiAgICBhY2NlcHRzT3B0aW9uYWxSZWYoY1szXSk7XG4gICAgYWNjZXB0c09wdGlvbmFsUmVmKGNbNF0pO1xuXG4gICAgLy8vIEB0cy1leHBlY3QtZXJyb3IgVE9ET1xuICAgIGFjY2VwdHNSZWYoY1s1XSk7XG4gICAgYWNjZXB0c1JlZihjWzZdKTtcbiAgICBhY2NlcHRzUmVmKGNbN10pO1xuICAgIGFjY2VwdHNSZWYoY1s4XSk7XG59XG4qL1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXNlLW1lcmdlZC1yZWZzLmpzLm1hcCIsIi8qKlxuICogTWVyZ2VzIHR3byBzdHlsZSBvYmplY3RzLCByZXR1cm5pbmcgdGhlIHJlc3VsdC5cbiAqXG4gKiBAcGFyYW0gc3R5bGUgVGhlIHVzZXItZ2l2ZW4gc3R5bGUgcHJvcCBmb3IgdGhpcyBjb21wb25lbnRcbiAqIEBwYXJhbSBvYmogVGhlIENTUyBwcm9wZXJ0aWVzIHlvdSB3YW50IGFkZGVkIHRvIHRoZSB1c2VyLWdpdmVuIHN0eWxlXG4gKiBAcmV0dXJucyBBIENTUyBvYmplY3QgY29udGFpbmluZyB0aGUgcHJvcGVydGllcyBvZiBib3RoIG9iamVjdHMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VNZXJnZWRTdHlsZXMobGhzLCByaHMpIHtcbiAgICAvLyBFYXN5IGNhc2UsIHdoZW4gdGhlcmUgYXJlIG5vIHN0eWxlcyB0byBtZXJnZSByZXR1cm4gbm90aGluZy5cbiAgICBpZiAoIWxocyAmJiAhcmhzKVxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIGlmICh0eXBlb2YgbGhzICE9IHR5cGVvZiByaHMpIHtcbiAgICAgICAgLy8gRWFzeSBjYXNlcywgd2hlbiBvbmUgaXMgbnVsbCBhbmQgdGhlIG90aGVyIGlzbid0LlxuICAgICAgICBpZiAobGhzICYmICFyaHMpXG4gICAgICAgICAgICByZXR1cm4gbGhzO1xuICAgICAgICBpZiAoIWxocyAmJiByaHMpXG4gICAgICAgICAgICByZXR1cm4gcmhzO1xuICAgICAgICAvLyBUaGV5J3JlIGJvdGggbm9uLW51bGwgYnV0IGRpZmZlcmVudCB0eXBlcy5cbiAgICAgICAgLy8gQ29udmVydCB0aGUgc3RyaW5nIHR5cGUgdG8gYW4gb2JqZWN0IGJhZyB0eXBlIGFuZCBydW4gaXQgYWdhaW4uXG4gICAgICAgIGlmIChsaHMgJiYgcmhzKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIGxocyA9PSBcInN0cmluZ1wiKVxuICAgICAgICAgICAgICAgIHJldHVybiB1c2VNZXJnZWRTdHlsZXMoeyBzdHlsZTogT2JqZWN0LmZyb21FbnRyaWVzKGxocy5zcGxpdChcIjtcIikubWFwKHN0YXRlbWVudCA9PiBzdGF0ZW1lbnQuc3BsaXQoXCI6XCIpKSkgfSwgcmhzKTtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgcmhzID09IFwic3RyaW5nXCIpXG4gICAgICAgICAgICAgICAgcmV0dXJuIHVzZU1lcmdlZFN0eWxlcyhsaHMsIHsgc3R5bGU6IE9iamVjdC5mcm9tRW50cmllcyhsaHMuc3BsaXQoXCI7XCIpLm1hcChzdGF0ZW1lbnQgPT4gc3RhdGVtZW50LnNwbGl0KFwiOlwiKSkpIH0pO1xuICAgICAgICB9XG4gICAgICAgIC8vIExvZ2ljPz8/XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuICAgIC8vIFRoZXkncmUgYm90aCBzdHJpbmdzLCBqdXN0IGNvbmNhdGVuYXRlIHRoZW0uXG4gICAgaWYgKHR5cGVvZiBsaHMgPT0gXCJzdHJpbmdcIikge1xuICAgICAgICByZXR1cm4gYCR7bGhzfTske3Joc31gOyAvLyBUT0RPOiBJbXByb3ZlIHRoZSB0eXBpbmcgdG8gbWFrZSB0aGlzIHBvc3NpYmxlXG4gICAgfVxuICAgIC8vIFRoZXkncmUgYm90aCBvYmplY3RzLCBqdXN0IG1lcmdlIHRoZW0uXG4gICAgcmV0dXJuIHtcbiAgICAgICAgLi4uKGxocz8uc3R5bGUgPz8ge30pLFxuICAgICAgICAuLi4ocmhzPy5zdHlsZSA/PyB7fSlcbiAgICB9O1xufVxuZnVuY3Rpb24gYWNjZXB0c1N0cmluZ09yQ3NzT3JVbmRlZmluZWQodSkgeyB9XG5mdW5jdGlvbiBhY2NlcHRzU3RyaW5nT3JDc3Moc3RyKSB7IH1cbmZ1bmN0aW9uIGFjY2VwdHNDc3MocHJvcCkgeyB9XG5mdW5jdGlvbiB0eXBldGVzdChwcm9wcykge1xuICAgIGNvbnN0IHN0eWxlID0ge307XG4gICAgY29uc3QgYyA9IFtcbiAgICAgICAgdXNlTWVyZ2VkU3R5bGVzKHVuZGVmaW5lZCwgdW5kZWZpbmVkKSxcbiAgICAgICAgdXNlTWVyZ2VkU3R5bGVzKHt9LCB1bmRlZmluZWQpLFxuICAgICAgICB1c2VNZXJnZWRTdHlsZXModW5kZWZpbmVkLCB7fSksXG4gICAgICAgIHVzZU1lcmdlZFN0eWxlcyh7fSwge30pLFxuICAgICAgICB1c2VNZXJnZWRTdHlsZXMocHJvcHMsIHVuZGVmaW5lZCksXG4gICAgICAgIHVzZU1lcmdlZFN0eWxlcyh1bmRlZmluZWQsIHByb3BzKSxcbiAgICAgICAgdXNlTWVyZ2VkU3R5bGVzKHByb3BzLCBwcm9wcyksXG4gICAgICAgIHVzZU1lcmdlZFN0eWxlcyh7IHN0eWxlIH0sIHt9KSxcbiAgICAgICAgdXNlTWVyZ2VkU3R5bGVzKHsgc3R5bGUgfSwgcHJvcHMpLFxuICAgICAgICB1c2VNZXJnZWRTdHlsZXMocHJvcHMsIHsgc3R5bGUgfSksXG4gICAgICAgIHVzZU1lcmdlZFN0eWxlcyh7IHN0eWxlIH0sIHsgc3R5bGUgfSksXG4gICAgXTtcbiAgICAvLyBTYW5pdHkgY2hlY2tzXG4gICAgY1swXSA9PT0gdW5kZWZpbmVkO1xuICAgIGNbMV0gPT09IHVuZGVmaW5lZDtcbiAgICBjWzJdID09PSB1bmRlZmluZWQ7XG4gICAgY1szXSA9PT0gdW5kZWZpbmVkO1xuICAgIGNbNF0gPT09IHVuZGVmaW5lZDtcbiAgICBjWzVdID09PSB1bmRlZmluZWQ7XG4gICAgY1s2XSA9PT0gdW5kZWZpbmVkO1xuICAgIC8vLyBAdHMtZXhwZWN0LWVycm9yIEJlY2F1c2UgYm90aCB3ZXJlIHVuZGVmaW5lZFxuICAgIGNbMF0/LmJhY2tncm91bmRDb2xvcjtcbiAgICAvLy8gQHRzLWV4cGVjdC1lcnJvciBCZWNhdXNlIFwic3R5bGVcIiB3YXMgbm90IHByb3ZpZGVkIGFzIGEgcHJvcFxuICAgIGNbMV0/LmJhY2tncm91bkNvbG9yO1xuICAgIC8vLyBAdHMtZXhwZWN0LWVycm9yIEJlY2F1c2UgXCJzdHlsZVwiIHdhcyBub3QgcHJvdmlkZWQgYXMgYSBwcm9wXG4gICAgY1syXT8uYmFja2dyb3VuZENvbG9yO1xuICAgIC8vLyBAdHMtZXhwZWN0LWVycm9yIEJlY2F1c2UgXCJzdHlsZVwiIHdhcyBub3QgcHJvdmlkZWQgYXMgYSBwcm9wXG4gICAgY1szXT8uYmFja2dyb3VuZENvbG9yO1xuICAgIC8vLyBAdHMtZXhwZWN0LWVycm9yIEJlY2F1c2UgXCJzdHlsZVwiIG1heSBiZSB1bmRlZmluZWQgZGVwZW5kaW5nIG9uIGhvdyBQIGV4dGVuZHMgSFRNTEF0dHJpYnV0ZXNcbiAgICBhY2NlcHRzU3RyaW5nT3JDc3MoY1s0XSk7XG4gICAgYWNjZXB0c1N0cmluZ09yQ3NzT3JVbmRlZmluZWQoY1s0XSk7XG4gICAgLy8vIEB0cy1leHBlY3QtZXJyb3IgQmVjYXVzZSBcInN0eWxlXCIgbWF5IGJlIHVuZGVmaW5lZCBkZXBlbmRpbmcgb24gaG93IFAgZXh0ZW5kcyBIVE1MQXR0cmlidXRlc1xuICAgIGFjY2VwdHNTdHJpbmdPckNzcyhjWzVdKTtcbiAgICBhY2NlcHRzU3RyaW5nT3JDc3NPclVuZGVmaW5lZChjWzVdKTtcbiAgICAvLy8gQHRzLWV4cGVjdC1lcnJvciBCZWNhdXNlIFwic3R5bGVcIiBtYXkgYmUgdW5kZWZpbmVkIGRlcGVuZGluZyBvbiBob3cgUCBleHRlbmRzIEhUTUxBdHRyaWJ1dGVzXG4gICAgYWNjZXB0c1N0cmluZ09yQ3NzKGNbNl0pO1xuICAgIGFjY2VwdHNTdHJpbmdPckNzc09yVW5kZWZpbmVkKGNbNl0pO1xuICAgIC8vIEB0cy1leHBlY3QtZXJyb3IgVE9ETzogVGhpcyBzaG91bGQgYmUgYWxsb3dlZFxuICAgIGFjY2VwdHNTdHJpbmdPckNzcyhjWzddKTtcbiAgICBhY2NlcHRzU3RyaW5nT3JDc3NPclVuZGVmaW5lZChjWzddKTtcbiAgICAvLyBAdHMtZXhwZWN0LWVycm9yIFRPRE86IFRoaXMgc2hvdWxkIGJlIGFsbG93ZWRcbiAgICBhY2NlcHRzU3RyaW5nT3JDc3MoY1s4XSk7XG4gICAgYWNjZXB0c1N0cmluZ09yQ3NzT3JVbmRlZmluZWQoY1s4XSk7XG4gICAgLy8gQHRzLWV4cGVjdC1lcnJvciBUT0RPOiBUaGlzIHNob3VsZCBiZSBhbGxvd2VkXG4gICAgYWNjZXB0c1N0cmluZ09yQ3NzKGNbOV0pO1xuICAgIGFjY2VwdHNTdHJpbmdPckNzc09yVW5kZWZpbmVkKGNbOV0pO1xuICAgIC8vIEB0cy1leHBlY3QtZXJyb3IgVE9ETzogVGhpcyBzaG91bGQgYmUgYWxsb3dlZFxuICAgIGFjY2VwdHNTdHJpbmdPckNzcyhjWzEwXSk7XG4gICAgYWNjZXB0c1N0cmluZ09yQ3NzT3JVbmRlZmluZWQoY1sxMF0pO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXNlLW1lcmdlZC1zdHlsZXMuanMubWFwIiwiaW1wb3J0IHsgdXNlTWVyZ2VkQ2hpbGRyZW4gfSBmcm9tIFwiLi91c2UtbWVyZ2VkLWNoaWxkcmVuXCI7XG5pbXBvcnQgeyB1c2VNZXJnZWRDbGFzc2VzIH0gZnJvbSBcIi4vdXNlLW1lcmdlZC1jbGFzc2VzXCI7XG5pbXBvcnQgeyB1c2VNZXJnZWRSZWZzIH0gZnJvbSBcIi4vdXNlLW1lcmdlZC1yZWZzXCI7XG5pbXBvcnQgeyB1c2VNZXJnZWRTdHlsZXMgfSBmcm9tIFwiLi91c2UtbWVyZ2VkLXN0eWxlc1wiO1xubGV0IGxvZyA9IChzdHIpID0+IHsgZGVidWdnZXI7IC8qIEludGVudGlvbmFsICovIH07XG5leHBvcnQgZnVuY3Rpb24gZW5hYmxlTG9nZ2luZ1Byb3BDb25mbGljdHMobG9nMikge1xuICAgIGxvZyA9IGxvZzI7XG59XG4vKipcbiAqIEdpdmVuIHR3byBzZXRzIG9mIHByb3BzLCBtZXJnZXMgdGhlbSBhbmQgcmV0dXJucyB0aGUgcmVzdWx0LlxuICpcbiAqIFRoZSBob29rIGlzIGF3YXJlIG9mIGFuZCBjYW4gaW50ZWxsaWdlbnRseSBtZXJnZSBgY2xhc3NOYW1lYCwgYGNsYXNzYCwgYHN0eWxlYCwgYHJlZmAsIGFuZCBhbGwgZXZlbnQgaGFuZGxlcnMuXG4gKiBAcGFyYW0gbGhzMlxuICogQHBhcmFtIHJoczJcbiAqIEByZXR1cm5zXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VNZXJnZWRQcm9wcygpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGxoczIsIHJoczIpIHtcbiAgICAgICAgLy8gRmlyc3QsIHB1dCBpbiBhbGwgdGhlIHByb3BlcnRpZXMgdGhhdCBhcmUgZWFzeSB0byByZWFzb24gYWJvdXRcbiAgICAgICAgLy8gYW5kIGFsbCBsaHMgcHJvcHMuIFdlJ3JlIGdvaW5nIHRvIG1lcmdlIGluIHJocyBqdXN0IGFmdGVyLlxuICAgICAgICBjb25zdCB7IGNoaWxkcmVuOiBsaHNDaGlsZHJlbiwgY2xhc3M6IGxoc0NsYXNzLCBjbGFzc05hbWU6IGxoc0NsYXNzTmFtZSwgc3R5bGU6IGxoc1N0eWxlLCByZWY6IGxoc1JlZiwgLi4ubGhzIH0gPSBsaHMyO1xuICAgICAgICBjb25zdCB7IGNoaWxkcmVuOiByaHNDaGlsZHJlbiwgY2xhc3M6IHJoc0NsYXNzLCBjbGFzc05hbWU6IHJoc0NsYXNzTmFtZSwgc3R5bGU6IHJoc1N0eWxlLCByZWY6IHJoc1JlZiwgLi4ucmhzIH0gPSByaHMyO1xuICAgICAgICBsZXQgcmV0ID0ge1xuICAgICAgICAgICAgLi4ubGhzLFxuICAgICAgICAgICAgcmVmOiB1c2VNZXJnZWRSZWZzKCkobGhzMiwgcmhzMiksXG4gICAgICAgICAgICBzdHlsZTogdXNlTWVyZ2VkU3R5bGVzKGxoczIsIHJoczIpLFxuICAgICAgICAgICAgY2xhc3NOYW1lOiB1c2VNZXJnZWRDbGFzc2VzKGxoczIsIHJoczIpLFxuICAgICAgICAgICAgY2hpbGRyZW46IHVzZU1lcmdlZENoaWxkcmVuKGxoczIsIHJoczIpXG4gICAgICAgIH07XG4gICAgICAgIC8vIE5vdywgZG8gKmV2ZXJ5dGhpbmcqIGVsc2VcbiAgICAgICAgLy8gTWVyZ2UgZXZlcnkgcmVtYWluaW5nIGV4aXN0aW5nIGVudHJ5IGluIGxocyB3aXRoIHdoYXQgd2UndmUgYWxyZWFkeSBwdXQgaW4gcmV0LlxuICAgICAgICAvL2NvbnN0IGxoc0VudHJpZXMgPSBPYmplY3QuZW50cmllcyhsaHMpIGFzIFtrZXlvZiBULCBUW2tleW9mIFRdXVtdO1xuICAgICAgICBjb25zdCByaHNFbnRyaWVzID0gT2JqZWN0LmVudHJpZXMocmhzKTtcbiAgICAgICAgZm9yIChjb25zdCBbcmhzS2V5LCByaHNWYWx1ZV0gb2YgcmhzRW50cmllcykge1xuICAgICAgICAgICAgY29uc3QgbGhzVmFsdWUgPSBsaHNbcmhzS2V5XTtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgbGhzVmFsdWUgPT09IFwiZnVuY3Rpb25cIiB8fCB0eXBlb2YgcmhzVmFsdWUgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgICAgIC8vIFRoZXkncmUgYm90aCBmdW5jdGlvbnMgdGhhdCBjYW4gYmUgbWVyZ2VkIChvciBvbmUncyBhIGZ1bmN0aW9uIGFuZCB0aGUgb3RoZXIncyBudWxsKS5cbiAgICAgICAgICAgICAgICAvLyBOb3QgYW4gKmVhc3kqIGNhc2UsIGJ1dCBhIHdlbGwtZGVmaW5lZCBvbmUuXG4gICAgICAgICAgICAgICAgY29uc3QgbWVyZ2VkID0gbWVyZ2VGdW5jdGlvbnMobGhzVmFsdWUsIHJoc1ZhbHVlKTtcbiAgICAgICAgICAgICAgICByZXRbcmhzS2V5XSA9IG1lcmdlZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIFVoLi4ud2UncmUgaGVyZSBiZWNhdXNlIG9uZSBvZiB0aGVtJ3MgbnVsbCwgcmlnaHQ/XG4gICAgICAgICAgICAgICAgaWYgKGxoc1ZhbHVlID09IG51bGwgJiYgcmhzVmFsdWUgPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAocmhzVmFsdWUgPT09IG51bGwgJiYgbGhzVmFsdWUgPT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldFtyaHNLZXldID0gcmhzVmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldFtyaHNLZXldID0gbGhzVmFsdWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChsaHNWYWx1ZSA9PSBudWxsKVxuICAgICAgICAgICAgICAgICAgICByZXRbcmhzS2V5XSA9IHJoc1ZhbHVlO1xuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHJoc1ZhbHVlID09IG51bGwpXG4gICAgICAgICAgICAgICAgICAgIHJldFtyaHNLZXldID0gbGhzVmFsdWU7XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAocmhzVmFsdWUgPT0gbGhzVmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gSSBtZWFuLCB0aGV5J3JlIHRoZSBzYW1lIHZhbHVlIGF0IGxlYXN0XG4gICAgICAgICAgICAgICAgICAgIC8vIHNvIHdlIGRvbid0IG5lZWQgdG8gZG8gYW55dGhpbmcuXG4gICAgICAgICAgICAgICAgICAgIC8vIE5vdCByZWFsbHkgaWRlYWwgdGhvdWdoLlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gVWdoLlxuICAgICAgICAgICAgICAgICAgICAvLyBObyBnb29kIHN0cmF0ZWdpZXMgaGVyZSwganVzdCBsb2cgaXQgaWYgcmVxdWVzdGVkXG4gICAgICAgICAgICAgICAgICAgIGxvZz8uKGBDb3VsZCBub3QgbWVyZ2UgaW5jb21wYXRpYmxlIHByb3AgXCIke3Joc0tleX1cIiAodHlwZTogJHt0eXBlb2YgcmhzVmFsdWV9LCB2YWx1ZXM6IFske2xoc1ZhbHVlfSwgJHtyaHNWYWx1ZX1dKWApO1xuICAgICAgICAgICAgICAgICAgICByZXRbcmhzS2V5XSA9IHJoc1ZhbHVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmV0O1xuICAgIH07XG59XG5mdW5jdGlvbiBtZXJnZUZ1bmN0aW9ucyhsaHMsIHJocykge1xuICAgIGlmICghbGhzKVxuICAgICAgICByZXR1cm4gcmhzO1xuICAgIGlmICghcmhzKVxuICAgICAgICByZXR1cm4gbGhzO1xuICAgIHJldHVybiAoLi4uYXJncykgPT4ge1xuICAgICAgICBsZXQgbHYgPSBsaHM/LiguLi5hcmdzKTtcbiAgICAgICAgbGV0IHJ2ID0gcmhzPy4oLi4uYXJncyk7XG4gICAgICAgIGlmIChsdiBpbnN0YW5jZW9mIFByb21pc2UgfHwgcnYgaW5zdGFuY2VvZiBQcm9taXNlKVxuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKFtsdiwgcnZdKTtcbiAgICB9O1xufVxuZnVuY3Rpb24gZ2VuZXJpY0dldFRlc3QoKSB7XG4gICAgY29uc3QgdDEgPSBudWxsO1xuICAgIGNvbnN0IHQyID0gbnVsbDtcbiAgICBjb25zdCB0MyA9IG51bGw7XG4gICAgaWYgKHQzLmlkID09IG51bGwpIHtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHQzLmlkLmNvbmNhdChcIlwiKTtcbiAgICB9XG59XG4vKlxuZnVuY3Rpb24gdGVzdDxQIGV4dGVuZHMgaC5KU1guSFRNTEF0dHJpYnV0ZXM8SFRNTElucHV0RWxlbWVudD4+KHByb3BzOiBQKSB7XG5cbiAgICBjb25zdCBpZDA6IEdlbmVyaWNHZXQ8e30sIFwiaWRcIiwgc3RyaW5nPiA9IFwiXCI7XG4gICAgY29uc3QgaWQzOiBHZW5lcmljR2V0PHsgaWQ6IHVuZGVmaW5lZCB9LCBcImlkXCIsIHN0cmluZz4gPSB1bmRlZmluZWQ7XG4gICAgY29uc3QgaWQ0OiBHZW5lcmljR2V0PHsgaWQ6IHVuZGVmaW5lZCB9LCBcImlkXCIsIHN0cmluZz4gPSB1bmRlZmluZWQ7XG4gICAgY29uc3QgaWQ1OiBHZW5lcmljR2V0PHsgaWQ6IHVuZGVmaW5lZCB9LCBcImlkXCIsIHN0cmluZz4gPSB1bmRlZmluZWQ7XG4gICAgY29uc3QgaWQ2OiBHZW5lcmljR2V0PHsgaWQ6IHVuZGVmaW5lZCB9LCBcImlkXCIsIHN0cmluZz4gPSB1bmRlZmluZWQ7XG4gICAgLy9jb25zdCBpZDI6IFppcFNpbmdsZTxzdHJpbmcgfCB1bmRlZmluZWQsIHN0cmluZyB8IHVuZGVmaW5lZD4gPSB1bmRlZmluZWQ7XG4gICAgY29uc3QgaWQxOiBaaXBPYmplY3Q8eyBpZDogdW5kZWZpbmVkIH0sIHsgaWQ6IHN0cmluZyB9PiA9IHsgaWQ6IHVuZGVmaW5lZCB9O1xuXG4gICAgdHlwZSBNMSA9IEdlbmVyaWNHZXQ8UCwgXCJzdHlsZVwiLCBzdHJpbmc+O1xuICAgIHR5cGUgTTIgPSBHZW5lcmljR2V0PHt9LCBcInN0eWxlXCIsIHN0cmluZz47XG4gICAgY29uc3QgbTE6IE0xID0gXCJcIjtcbiAgICBjb25zdCBtMjogTTEgPSB1bmRlZmluZWQ7XG4gICAgLy8vIEB0cy1leHBlY3QtZXJyb3IgICAgQmVjYXVzZSBudW1iZXIgaXNuJ3QgYXNzaWduYWJsZSB0byBzdHJpbmdcbiAgICBjb25zdCBtMzogTTEgPSAwO1xuXG4gICAgY29uc3QgbTQ6IE0yID0gXCJcIjtcbiAgICBjb25zdCBtNTogTTIgPSB1bmRlZmluZWQ7XG4gICAgLy8vIEB0cy1leHBlY3QtZXJyb3IgICAgQmVjYXVzZSBudW1iZXIgaXNuJ3QgYXNzaWduYWJsZSB0byBzdHJpbmdcbiAgICBjb25zdCBtNjogTTIgPSAwO1xuXG4gICAgY29uc3QgcDE6IE1lcmdlZFByb3BzPEhUTUxJbnB1dEVsZW1lbnQsIHt9LCB7IGlkOiBzdHJpbmcgfT4gPSB1c2VNZXJnZWRQcm9wczxIVE1MSW5wdXRFbGVtZW50PigpKHt9LCB7IGlkOiBcInN0cmluZ1wiIH0pO1xuICAgIGNvbnN0IHAyOiBNZXJnZWRQcm9wczxIVE1MSW5wdXRFbGVtZW50LCB7IGlkOiB1bmRlZmluZWQgfSwgeyBpZDogc3RyaW5nIH0+ID0gdXNlTWVyZ2VkUHJvcHM8SFRNTElucHV0RWxlbWVudD4oKSh7IGlkOiB1bmRlZmluZWQgfSwgeyBpZDogXCJzdHJpbmdcIiB9KTtcbiAgICBjb25zdCBwMzogTWVyZ2VkUHJvcHM8SFRNTElucHV0RWxlbWVudCwgeyBpZDogdW5kZWZpbmVkIH0sIHsgaWQ6IHVuZGVmaW5lZCB9PiA9IHVzZU1lcmdlZFByb3BzPEhUTUxJbnB1dEVsZW1lbnQ+KCkoeyBpZDogdW5kZWZpbmVkIH0sIHsgaWQ6IHVuZGVmaW5lZCB9KTtcbiAgICBjb25zdCBwNDogTWVyZ2VkUHJvcHM8SFRNTElucHV0RWxlbWVudCwge30sIHt9PiA9IHVzZU1lcmdlZFByb3BzPEhUTUxJbnB1dEVsZW1lbnQ+KCkoe30sIHt9KTtcbiAgICBjb25zdCBwNSA9IHVzZU1lcmdlZFByb3BzPEhUTUxJbnB1dEVsZW1lbnQ+KCkocHJvcHMsIHt9KTtcbiAgICBjb25zdCBwNiA9IHVzZU1lcmdlZFByb3BzPEhUTUxJbnB1dEVsZW1lbnQ+KCkocHJvcHMsIHsgaWQ6IHVuZGVmaW5lZCB9KTtcbiAgICBjb25zdCBwNyA9IHVzZU1lcmdlZFByb3BzPEhUTUxJbnB1dEVsZW1lbnQ+KCkocHJvcHMsIHsgaWQ6IFwic3RyaW5nXCIgfSk7XG5cblxuICAgIHAxLmlkPy5jb25jYXQoXCJcIik7XG4gICAgcDIuaWQ/LmNvbmNhdChcIlwiKTtcbiAgICAvLy8gQHRzLWV4cGVjdC1lcnJvciAgICBpZCBjYW4ndCBiZSBhbnl0aGluZyBidXQgdW5kZWZpbmVkXG4gICAgcDMuaWQ/LmNvbmNhdChcIlwiKTtcbiAgICAvLy8gQHRzLWV4cGVjdC1lcnJvciAgICBpZCBjYW4ndCBiZSBhbnl0aGluZyBidXQgdW5kZWZpbmVkXG4gICAgcDQuaWQ/LmNvbmNhdChcIlwiKTtcblxuXG4gICAgcDUuaWQ/LmNvbmNhdChcIlwiKTtcbiAgICBwNi5pZD8uY29uY2F0KFwiXCIpO1xuICAgIHA3LmlkPy5jb25jYXQoXCJcIik7XG5cbiAgICAvLy8gQHRzLWV4cGVjdC1lcnJvciAgICBpZCBtdXN0IGNvbnRhaW4gdW5kZWZpbmVkXG4gICAgcDUuaWQuY29uY2F0KFwiXCIpO1xuICAgIC8vLyBAdHMtZXhwZWN0LWVycm9yICAgIGlkIG11c3QgY29udGFpbiB1bmRlZmluZWRcbiAgICBwNi5pZC5jb25jYXQoXCJcIik7XG4gICAgLy8vIEB0cy1leHBlY3QtZXJyb3IgICAgaWQgbXVzdCBjb250YWluIHVuZGVmaW5lZFxuICAgIHA3LmlkLmNvbmNhdChcIlwiKTtcblxuXG4gICAgaWYgKHA1LmFsbG93RnVsbFNjcmVlbiA9PT0gdW5kZWZpbmVkKSB7fVxuICAgIGVsc2UgaWYgKHA1LmFsbG93RnVsbFNjcmVlbiA9PT0gZmFsc2UpIHt9XG4gICAgZWxzZSBpZiAocDUuYWxsb3dGdWxsU2NyZWVuID09PSB0cnVlKSB7fVxuICAgIGVsc2Uge1xuICAgICAgICBhY2NlcHRzTmV2ZXIocDUuYWxsb3dGdWxsU2NyZWVuKTtcbiAgICB9XG5cblxuICAgIGlmIChwNi5hbGxvd0Z1bGxTY3JlZW4gPT09IHVuZGVmaW5lZCkge31cbiAgICBlbHNlIGlmIChwNi5hbGxvd0Z1bGxTY3JlZW4gPT09IGZhbHNlKSB7fVxuICAgIGVsc2UgaWYgKHA2LmFsbG93RnVsbFNjcmVlbiA9PT0gdHJ1ZSkge31cbiAgICBlbHNlIHtcbiAgICAgICAgYWNjZXB0c05ldmVyKHA2LmFsbG93RnVsbFNjcmVlbik7XG4gICAgfVxuXG5cbiAgICBpZiAocDcuYWxsb3dGdWxsU2NyZWVuID09PSB1bmRlZmluZWQpIHt9XG4gICAgZWxzZSBpZiAocDcuYWxsb3dGdWxsU2NyZWVuID09PSBmYWxzZSkge31cbiAgICBlbHNlIGlmIChwNy5hbGxvd0Z1bGxTY3JlZW4gPT09IHRydWUpIHt9XG4gICAgZWxzZSB7XG4gICAgICAgIGFjY2VwdHNOZXZlcihwNy5hbGxvd0Z1bGxTY3JlZW4pO1xuICAgIH1cblxuXG4gICAgLy8gTWFrZSBzdXJlIGl0IHdvcmtzIHJlY3Vyc2l2ZWx5XG4gICAgY29uc3QgcjFhID0gdXNlTWVyZ2VkUHJvcHM8SFRNTElucHV0RWxlbWVudD4oKSh7fSwgcDEpO1xuICAgIGNvbnN0IHIxYiA9IHVzZU1lcmdlZFByb3BzPEhUTUxJbnB1dEVsZW1lbnQ+KCkocHJvcHMsIHAxKTtcbiAgICBjb25zdCByMmEgPSB1c2VNZXJnZWRQcm9wczxIVE1MSW5wdXRFbGVtZW50PigpKHt9LCBwMik7XG4gICAgY29uc3QgcjJiID0gdXNlTWVyZ2VkUHJvcHM8SFRNTElucHV0RWxlbWVudD4oKShwcm9wcywgcDIpO1xuICAgIGNvbnN0IHIzYSA9IHVzZU1lcmdlZFByb3BzPEhUTUxJbnB1dEVsZW1lbnQ+KCkoe30sIHAzKTtcbiAgICBjb25zdCByM2IgPSB1c2VNZXJnZWRQcm9wczxIVE1MSW5wdXRFbGVtZW50PigpKHByb3BzLCBwMyk7XG4gICAgY29uc3QgcjRhID0gdXNlTWVyZ2VkUHJvcHM8SFRNTElucHV0RWxlbWVudD4oKSh7fSwgcDQpO1xuICAgIGNvbnN0IHI0YiA9IHVzZU1lcmdlZFByb3BzPEhUTUxJbnB1dEVsZW1lbnQ+KCkocHJvcHMsIHA0KTtcbiAgICBjb25zdCByNWEgPSB1c2VNZXJnZWRQcm9wczxIVE1MSW5wdXRFbGVtZW50PigpKHt9LCBwNSk7XG4gICAgY29uc3QgcjViID0gdXNlTWVyZ2VkUHJvcHM8SFRNTElucHV0RWxlbWVudD4oKShwcm9wcywgcDUpO1xuICAgIGNvbnN0IHI2YSA9IHVzZU1lcmdlZFByb3BzPEhUTUxJbnB1dEVsZW1lbnQ+KCkoe30sIHA2KTtcbiAgICBjb25zdCByNmIgPSB1c2VNZXJnZWRQcm9wczxIVE1MSW5wdXRFbGVtZW50PigpKHByb3BzLCBwNik7XG4gICAgY29uc3QgcjdhID0gdXNlTWVyZ2VkUHJvcHM8SFRNTElucHV0RWxlbWVudD4oKSh7fSwgcDcpO1xuICAgIGNvbnN0IHI3YiA9IHVzZU1lcmdlZFByb3BzPEhUTUxJbnB1dEVsZW1lbnQ+KCkocHJvcHMsIHA3KTtcblxuXG4gICAgcjFhLmlkPy5jb25jYXQoXCJcIik7XG4gICAgcjFiLmlkPy5jb25jYXQoXCJcIik7XG4gICAgcjJhLmlkPy5jb25jYXQoXCJcIik7XG4gICAgcjJiLmlkPy5jb25jYXQoXCJcIik7XG4gICAgLy8gQHRzLWV4cGVjdC1lcnJvciAgICBpZCBjYW4ndCBiZSBhbnl0aGluZyBidXQgdW5kZWZpbmVkXG4gICAgcjNhLmlkPy5jb25jYXQoXCJcIik7XG4gICAgcjNiLmlkPy5jb25jYXQoXCJcIik7XG4gICAgLy8vIEB0cy1leHBlY3QtZXJyb3IgICAgaWQgY2FuJ3QgYmUgYW55dGhpbmcgYnV0IHVuZGVmaW5lZFxuICAgIHI0YS5pZD8uY29uY2F0KFwiXCIpO1xuICAgIHI0Yi5pZD8uY29uY2F0KFwiXCIpO1xuXG5cbiAgICByNWEuaWQ/LmNvbmNhdChcIlwiKTtcbiAgICByNWIuaWQ/LmNvbmNhdChcIlwiKTtcbiAgICByNmEuaWQ/LmNvbmNhdChcIlwiKTtcbiAgICByNmIuaWQ/LmNvbmNhdChcIlwiKTtcbiAgICByN2EuaWQ/LmNvbmNhdChcIlwiKTtcbiAgICByN2IuaWQ/LmNvbmNhdChcIlwiKTtcblxuICAgIC8vLyBAdHMtZXhwZWN0LWVycm9yICAgIGlkIG11c3QgY29udGFpbiB1bmRlZmluZWRcbiAgICByNWEuaWQuY29uY2F0KFwiXCIpO1xuICAgIC8vLyBAdHMtZXhwZWN0LWVycm9yICAgIGlkIG11c3QgY29udGFpbiB1bmRlZmluZWRcbiAgICByNWIuaWQuY29uY2F0KFwiXCIpO1xuICAgIC8vLyBAdHMtZXhwZWN0LWVycm9yICAgIGlkIG11c3QgY29udGFpbiB1bmRlZmluZWRcbiAgICByNmEuaWQuY29uY2F0KFwiXCIpO1xuICAgIC8vLyBAdHMtZXhwZWN0LWVycm9yICAgIGlkIG11c3QgY29udGFpbiB1bmRlZmluZWRcbiAgICByNmIuaWQuY29uY2F0KFwiXCIpO1xuICAgIC8vLyBAdHMtZXhwZWN0LWVycm9yICAgIGlkIG11c3QgY29udGFpbiB1bmRlZmluZWRcbiAgICByN2EuaWQuY29uY2F0KFwiXCIpO1xuICAgIC8vLyBAdHMtZXhwZWN0LWVycm9yICAgIGlkIG11c3QgY29udGFpbiB1bmRlZmluZWRcbiAgICByN2IuaWQuY29uY2F0KFwiXCIpO1xuXG5cbiAgICBpZiAocjVhLmFsbG93RnVsbFNjcmVlbiA9PT0gdW5kZWZpbmVkKSB7fVxuICAgIGVsc2UgaWYgKHI1YS5hbGxvd0Z1bGxTY3JlZW4gPT09IGZhbHNlKSB7fVxuICAgIGVsc2UgaWYgKHI1YS5hbGxvd0Z1bGxTY3JlZW4gPT09IHRydWUpIHt9XG4gICAgZWxzZSB7XG4gICAgICAgIGFjY2VwdHNOZXZlcihyNWEuYWxsb3dGdWxsU2NyZWVuKTtcbiAgICB9XG5cblxuICAgIGlmIChyNWIuYWxsb3dGdWxsU2NyZWVuID09PSB1bmRlZmluZWQpIHt9XG4gICAgZWxzZSBpZiAocjViLmFsbG93RnVsbFNjcmVlbiA9PT0gZmFsc2UpIHt9XG4gICAgZWxzZSBpZiAocjViLmFsbG93RnVsbFNjcmVlbiA9PT0gdHJ1ZSkge31cbiAgICBlbHNlIHtcbiAgICAgICAgYWNjZXB0c05ldmVyKHI1Yi5hbGxvd0Z1bGxTY3JlZW4pO1xuICAgIH1cblxuXG4gICAgaWYgKHI2YS5hbGxvd0Z1bGxTY3JlZW4gPT09IHVuZGVmaW5lZCkge31cbiAgICBlbHNlIGlmIChyNmEuYWxsb3dGdWxsU2NyZWVuID09PSBmYWxzZSkge31cbiAgICBlbHNlIGlmIChyNmEuYWxsb3dGdWxsU2NyZWVuID09PSB0cnVlKSB7fVxuICAgIGVsc2Uge1xuICAgICAgICBhY2NlcHRzTmV2ZXIocjZhLmFsbG93RnVsbFNjcmVlbik7XG4gICAgfVxuXG5cbiAgICBpZiAocjZiLmFsbG93RnVsbFNjcmVlbiA9PT0gdW5kZWZpbmVkKSB7fVxuICAgIGVsc2UgaWYgKHI2Yi5hbGxvd0Z1bGxTY3JlZW4gPT09IGZhbHNlKSB7fVxuICAgIGVsc2UgaWYgKHI2Yi5hbGxvd0Z1bGxTY3JlZW4gPT09IHRydWUpIHt9XG4gICAgZWxzZSB7XG4gICAgICAgIGFjY2VwdHNOZXZlcihyNmIuYWxsb3dGdWxsU2NyZWVuKTtcbiAgICB9XG5cblxuICAgIGlmIChyN2EuYWxsb3dGdWxsU2NyZWVuID09PSB1bmRlZmluZWQpIHt9XG4gICAgZWxzZSBpZiAocjdhLmFsbG93RnVsbFNjcmVlbiA9PT0gZmFsc2UpIHt9XG4gICAgZWxzZSBpZiAocjdhLmFsbG93RnVsbFNjcmVlbiA9PT0gdHJ1ZSkge31cbiAgICBlbHNlIHtcbiAgICAgICAgYWNjZXB0c05ldmVyKHI3YS5hbGxvd0Z1bGxTY3JlZW4pO1xuICAgIH1cblxuXG4gICAgaWYgKHI3Yi5hbGxvd0Z1bGxTY3JlZW4gPT09IHVuZGVmaW5lZCkge31cbiAgICBlbHNlIGlmIChyN2IuYWxsb3dGdWxsU2NyZWVuID09PSBmYWxzZSkge31cbiAgICBlbHNlIGlmIChyN2IuYWxsb3dGdWxsU2NyZWVuID09PSB0cnVlKSB7fVxuICAgIGVsc2Uge1xuICAgICAgICBhY2NlcHRzTmV2ZXIocjdiLmFsbG93RnVsbFNjcmVlbik7XG4gICAgfVxuXG59XG5mdW5jdGlvbiBhY2NlcHRzTmV2ZXIobjogbmV2ZXIpIHt9XG4qLyBcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZS1tZXJnZWQtcHJvcHMuanMubWFwIiwiaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZVJlZiwgdXNlU3RhdGUgYXMgdXNlU3RhdGVQIH0gZnJvbSBcInByZWFjdC9ob29rc1wiO1xuLyoqXG4gKiBTbGlnaHRseSBlbmhhbmNlZCB2ZXJzaW9uIG9mIGB1c2VTdGF0ZWAgdGhhdCBpbmNsdWRlcyBhIGdldHRlciB0aGF0IHJlbWFpbnMgY29uc3RhbnRcbiAqIChpLmUuIHlvdSBjYW4gdXNlIGl0IGluIGB1c2VFZmZlY3RgIGFuZCBmcmllbmRzIHdpdGhvdXQgaXQgYmVpbmcgYSBkZXBlbmRlbmN5KS5cbiAqXG4gKiBAcGFyYW0gaW5pdGlhbFN0YXRlXG4gKiBAcmV0dXJuc1xuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlU3RhdGUoaW5pdGlhbFN0YXRlKSB7XG4gICAgLy8gV2Uga2VlcCBib3RoXG4gICAgY29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSB1c2VTdGF0ZVAoaW5pdGlhbFN0YXRlKTtcbiAgICBjb25zdCByZWYgPSB1c2VSZWYoc3RhdGUpO1xuICAgIC8vIEhpamFjayB0aGUgbm9ybWFsIHNldHRlciBmdW5jdGlvbiBcbiAgICAvLyB0byBhbHNvIHNldCBvdXIgcmVmIHRvIHRoZSBuZXcgdmFsdWVcbiAgICBjb25zdCBzZXQgPSB1c2VDYWxsYmFjaygodmFsdWUpID0+IHtcbiAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICBsZXQgY2FsbGJhY2sgPSB2YWx1ZTtcbiAgICAgICAgICAgIHNldFN0YXRlKHByZXZWYWx1ZSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IG5leHRWYWx1ZSA9IGNhbGxiYWNrKHByZXZWYWx1ZSk7XG4gICAgICAgICAgICAgICAgcmVmLmN1cnJlbnQgPSBuZXh0VmFsdWU7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5leHRWYWx1ZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmVmLmN1cnJlbnQgPSB2YWx1ZTtcbiAgICAgICAgICAgIHNldFN0YXRlKHZhbHVlKTtcbiAgICAgICAgfVxuICAgIH0sIFtdKTtcbiAgICBjb25zdCBnZXQgPSAoKSA9PiB7IHJldHVybiByZWYuY3VycmVudDsgfTtcbiAgICBjb25zb2xlLmFzc2VydChyZWYuY3VycmVudCA9PT0gc3RhdGUpO1xuICAgIHJldHVybiBbc3RhdGUsIHNldCwgZ2V0XTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZS1zdGF0ZS5qcy5tYXAiLCJpbXBvcnQgeyB1c2VDYWxsYmFjayB9IGZyb20gXCJwcmVhY3QvaG9va3NcIjtcbmltcG9ydCB7IHVzZU1lcmdlZFByb3BzIH0gZnJvbSBcIi4vdXNlLW1lcmdlZC1wcm9wc1wiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwiLi91c2Utc3RhdGVcIjtcbi8qKlxuICogQWxsb3dzIGFjY2Vzc2luZyB0aGUgZWxlbWVudCBhIHJlZiByZWZlcmVuY2VzIGFzIHNvb24gYXMgaXQgZG9lcyBzby5cbiAqICpUaGlzIGhvb2sgaXRzZWxmIHJldHVybnMgYSBob29rKi0tdXNlUmVmRWxlbWVudFByb3BzIG1vZGlmaWVzIHRoZSBwcm9wcyB0aGF0IHlvdSB3ZXJlIGdvaW5nIHRvIHBhc3MgdG8gYW4gSFRNTEVsZW1lbnQsXG4gKiBhZGRpbmcgYSBSZWZDYWxsYmFjayBhbmQgbWVyZ2luZyBpdCB3aXRoIGFueSBleGlzdGluZyByZWYgdGhhdCBleGlzdGVkIG9uIHRoZSBwcm9wcy5cbiAqXG4gKiBEb24ndCBmb3JnZXQgdG8gcHJvdmlkZSB0aGUgRWxlbWVudCBhcyB0aGUgdHlwZSBhcmd1bWVudCFcbiAqXG4gKiBAcmV0dXJucyBUaGUgZWxlbWVudCwgYW5kIHRoZSBzdWItaG9vayB0aGF0IG1ha2VzIGl0IHJldHJpZXZhYmxlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlUmVmRWxlbWVudCgpIHtcbiAgICAvLyBMZXQgdXMgc3RvcmUgdGhlIGFjdHVhbCAocmVmZXJlbmNlIHRvKSB0aGUgZWxlbWVudCB3ZSBjYXB0dXJlXG4gICAgY29uc3QgW2VsZW1lbnQsIHNldEVsZW1lbnQsIGdldEVsZW1lbnRdID0gdXNlU3RhdGUobnVsbCk7XG4gICAgLy8gQ3JlYXRlIGEgUmVmQ2FsbGJhY2sgdGhhdCdzIGZpcmVkIHdoZW4gbW91bnRlZCBcbiAgICAvLyBhbmQgdGhhdCBub3RpZmllcyB1cyBvZiBvdXIgZWxlbWVudCB3aGVuIHdlIGhhdmUgaXRcbiAgICBjb25zdCBteVJlZiA9IHVzZUNhbGxiYWNrKChlKSA9PiB7XG4gICAgICAgIGlmIChlKVxuICAgICAgICAgICAgc2V0RWxlbWVudCgoKSA9PiBlKTtcbiAgICB9LCBbXSk7XG4gICAgY29uc3QgdXNlUmVmRWxlbWVudFByb3BzID0gdXNlQ2FsbGJhY2soKHByb3BzKSA9PiB1c2VNZXJnZWRQcm9wcygpKHsgcmVmOiBteVJlZiB9LCBwcm9wcyksIFtdKTtcbiAgICAvLyBSZXR1cm4gYm90aCB0aGUgZWxlbWVudCBhbmQgdGhlIGhvb2sgdGhhdCBtb2RpZmllcyBcbiAgICAvLyB0aGUgcHJvcHMgYW5kIGFsbG93cyB1cyB0byBhY3R1YWxseSBmaW5kIHRoZSBlbGVtZW50XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdXNlUmVmRWxlbWVudFByb3BzLFxuICAgICAgICBlbGVtZW50LFxuICAgICAgICBnZXRFbGVtZW50XG4gICAgfTtcbn1cbmZ1bmN0aW9uIHRlc3QoKSB7XG4gICAgZnVuY3Rpb24gZm9vKHByb3BzKSB7XG4gICAgICAgIGNvbnN0IHsgZWxlbWVudCwgdXNlUmVmRWxlbWVudFByb3BzIH0gPSB1c2VSZWZFbGVtZW50KCk7XG4gICAgICAgIGNvbnN0IHAxID0gdXNlUmVmRWxlbWVudFByb3BzKHByb3BzKTtcbiAgICAgICAgaWYgKHAxLnN0eWxlID09IHVuZGVmaW5lZCkge1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHR5cGVvZiBwMS5zdHlsZSA9PT0gXCJzdHJpbmdcIikgeyB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcDEuc3R5bGU/LmJhY2tncm91bmRDb2xvcjtcbiAgICAgICAgfVxuICAgIH1cbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZS1yZWYtZWxlbWVudC5qcy5tYXAiLCJpbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlTGF5b3V0RWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInByZWFjdC9ob29rc1wiO1xuZnVuY3Rpb24gY2FwaXRhbGl6ZShzdHIpIHtcbiAgICByZXR1cm4gKHN0clswXS50b1VwcGVyQ2FzZSgpICsgc3RyLnN1YnN0cigxKSk7XG59XG4vKipcbiAqIEluc3BlY3RzIHRoZSBlbGVtZW50J3Mgc3R5bGUgYW5kIGRldGVybWluZXMgdGhlIGxvZ2ljYWwgZGlyZWN0aW9uIHRoYXQgdGV4dCBmbG93cy5cbiAqXG4gKiBDZXJ0YWluIENTUyBwcm9wZXJ0aWVzLCBsaWtlIGBibG9jay1zaXplYCwgcmVzcGVjdCB0aGUgY3VycmVudCB3cml0aW5nIG1vZGUgYW5kIHRleHQgZGlyZWN0aW9uLlxuICogQnV0IGB0cmFuc2Zvcm1gLCBgY2xpcGAsIGV0Yy4gZG9uJ3QuXG4gKlxuICogVGhpcyBpcyBwcm92aWRlZCBzbyB0aGF0IENTUyBwcm9wZXJ0aWVzIGNhbiBjb25zaXN0ZW50bHkgdXNlIHRob3NlIGxvZ2ljYWwgcHJvcGVydGllcy5cbiAqXG4gKiBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy13cml0aW5nLW1vZGVzLyNsb2dpY2FsLXRvLXBoeXNpY2FsXG4gKlxuICogQHJldHVybnMgQW4gb2JqZWN0IGNvbnRhaW5pbmcgdGhlIGZvbGxvd2luZyBmdW5jdGlvbnM6XG4gKiAqIGBnZXRMb2dpY2FsRGlyZWN0aW9uYDogcmV0cmlldmVzIGEgYExvZ2ljYWxEaXJlY3Rpb25JbmZvYCByZXByZXNlbnRpbmcgdGhlIGN1cnJlbnQgc3RhdGUgb2YgdGhlIGVsZW1lbnQuIChGdW5jdGlvbiBpcyBjb25zdGFudCBiZXR3ZWVuIHJlbmRlcnMpXG4gKiAqIGBjb252ZXJ0RWxlbWVudFNpemVgOiBXaGVuIHVzZWQgaW4gY29uanVuY3Rpb24gd2l0aCBgdXNlRWxlbWVudFNpemVgLCBhbGxvd3MgeW91IHRvIHJldHJpZXZlIHRoZSBsb2dpY2FsIHNpemUgb2YgYW4gZWxlbWVudCBpbnN0ZWFkIG9mIHRoZSBwaHlzaWNhbCBzaXplLlxuICogKiBgY29udmVydFRvTG9naWNhbE9yaWVudGF0aW9uYDogQmFzZWQgb24gdGhlIGN1cnJlbnQgZGlyZWN0aW9uLCBjb252ZXJ0cyBcImhvcml6b250YWxcIiBvciBcInZlcnRpY2FsXCIgdG8gXCJpbmxpbmVcIiBvciBcImJsb2NrXCIuXG4gKiAqIGBjb252ZXJ0VG9QaHlzaWNhbE9yaWVudGF0aW9uYDogIEJhc2VkIG9uIHRoZSBjdXJyZW50IGRpcmVjdGlvbiwgY29udmVydHMgXCJpbmxpbmVcIiBvciBcImJsb2NrXCIgdG8gXCJob3Jpem9udGFsXCIgb3IgXCJ2ZXJ0aWNhbFwiLlxuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlTG9naWNhbERpcmVjdGlvbihlbGVtZW50KSB7XG4gICAgY29uc3QgW3dyaXRpbmdNb2RlLCBzZXRXcml0aW5nTW9kZV0gPSB1c2VTdGF0ZShudWxsKTtcbiAgICBjb25zdCBbZGlyZWN0aW9uLCBzZXREaXJlY3Rpb25dID0gdXNlU3RhdGUobnVsbCk7XG4gICAgY29uc3QgW3RleHRPcmllbnRhdGlvbiwgc2V0VGV4dE9yaWVudGF0aW9uXSA9IHVzZVN0YXRlKG51bGwpO1xuICAgIGNvbnN0IHdyaXRpbmdNb2RlUmVmID0gdXNlUmVmKHdyaXRpbmdNb2RlKTtcbiAgICBjb25zdCBkaXJlY3Rpb25SZWYgPSB1c2VSZWYoZGlyZWN0aW9uKTtcbiAgICBjb25zdCB0ZXh0T3JpZW50YXRpb25SZWYgPSB1c2VSZWYodGV4dE9yaWVudGF0aW9uKTtcbiAgICB1c2VMYXlvdXRFZmZlY3QoKCkgPT4geyB3cml0aW5nTW9kZVJlZi5jdXJyZW50ID0gd3JpdGluZ01vZGU7IH0sIFt3cml0aW5nTW9kZV0pO1xuICAgIHVzZUxheW91dEVmZmVjdCgoKSA9PiB7IGRpcmVjdGlvblJlZi5jdXJyZW50ID0gZGlyZWN0aW9uOyB9LCBbZGlyZWN0aW9uXSk7XG4gICAgdXNlTGF5b3V0RWZmZWN0KCgpID0+IHsgdGV4dE9yaWVudGF0aW9uUmVmLmN1cnJlbnQgPSB0ZXh0T3JpZW50YXRpb247IH0sIFt0ZXh0T3JpZW50YXRpb25dKTtcbiAgICB1c2VMYXlvdXRFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpZiAoZWxlbWVudCkge1xuICAgICAgICAgICAgY29uc3QgY29tcHV0ZWRTdHlsZXMgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KTtcbiAgICAgICAgICAgIGNvbnN0IHcgPSBjb21wdXRlZFN0eWxlcy53cml0aW5nTW9kZTtcbiAgICAgICAgICAgIGNvbnN0IHQgPSBjb21wdXRlZFN0eWxlcy50ZXh0T3JpZW50YXRpb247XG4gICAgICAgICAgICBjb25zdCBkID0gY29tcHV0ZWRTdHlsZXMuZGlyZWN0aW9uO1xuICAgICAgICAgICAgc2V0V3JpdGluZ01vZGUodyB8fCBcImhvcml6b250YWwtdGJcIik7XG4gICAgICAgICAgICBzZXREaXJlY3Rpb24oZCB8fCBcInJ0bFwiKTtcbiAgICAgICAgICAgIHNldFRleHRPcmllbnRhdGlvbih0IHx8IFwibWl4ZWRcIik7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICBjb25zdCBnZXRMb2dpY2FsRGlyZWN0aW9uID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgICAgICBsZXQgd3JpdGluZ01vZGUgPSB3cml0aW5nTW9kZVJlZi5jdXJyZW50O1xuICAgICAgICBsZXQgZGlyZWN0aW9uID0gZGlyZWN0aW9uUmVmLmN1cnJlbnQ7XG4gICAgICAgIGxldCB0ZXh0T3JpZW50YXRpb24gPSB0ZXh0T3JpZW50YXRpb25SZWYuY3VycmVudDtcbiAgICAgICAgaWYgKCF3cml0aW5nTW9kZSB8fCAhZGlyZWN0aW9uIHx8ICF0ZXh0T3JpZW50YXRpb24pXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgaWYgKHRleHRPcmllbnRhdGlvbiA9PSBcInVwcmlnaHRcIilcbiAgICAgICAgICAgIGRpcmVjdGlvbiA9IFwibHRyXCI7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAuLi5Xcml0aW5nTW9kZXNbd3JpdGluZ01vZGUgPz8gXCJob3Jpem9udGFsLXRiXCJdW2RpcmVjdGlvbiA/PyBcImx0clwiXVxuICAgICAgICB9O1xuICAgIH0sIFt3cml0aW5nTW9kZVJlZiwgZGlyZWN0aW9uUmVmLCB0ZXh0T3JpZW50YXRpb25SZWZdKTtcbiAgICBjb25zdCBjb252ZXJ0VG9Mb2dpY2FsT3JpZW50YXRpb24gPSB1c2VDYWxsYmFjaygoZWxlbWVudE9yaWVudGF0aW9uLCBkaXJlY3Rpb24pID0+IHtcbiAgICAgICAgZGlyZWN0aW9uID8/PSBnZXRMb2dpY2FsRGlyZWN0aW9uKCk7XG4gICAgICAgIGlmIChkaXJlY3Rpb24/LmlubGluZU9yaWVudGF0aW9uID09PSBlbGVtZW50T3JpZW50YXRpb24pXG4gICAgICAgICAgICByZXR1cm4gXCJpbmxpbmVcIjtcbiAgICAgICAgcmV0dXJuIFwiYmxvY2tcIjtcbiAgICB9LCBbZ2V0TG9naWNhbERpcmVjdGlvbl0pO1xuICAgIGNvbnN0IGNvbnZlcnRUb1BoeXNpY2FsT3JpZW50YXRpb24gPSB1c2VDYWxsYmFjaygoZWxlbWVudE9yaWVudGF0aW9uLCBkaXJlY3Rpb24pID0+IHtcbiAgICAgICAgZGlyZWN0aW9uID8/PSBnZXRMb2dpY2FsRGlyZWN0aW9uKCk7XG4gICAgICAgIGlmIChlbGVtZW50T3JpZW50YXRpb24gPT0gXCJpbmxpbmVcIikge1xuICAgICAgICAgICAgaWYgKGRpcmVjdGlvbj8uaW5saW5lT3JpZW50YXRpb24gPT0gXCJob3Jpem9udGFsXCIpXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiaG9yaXpvbnRhbFwiO1xuICAgICAgICAgICAgcmV0dXJuIFwidmVydGljYWxcIjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmIChkaXJlY3Rpb24/LmJsb2NrT3JpZW50YXRpb24gPT0gXCJ2ZXJ0aWNhbFwiKVxuICAgICAgICAgICAgICAgIHJldHVybiBcInZlcnRpY2FsXCI7XG4gICAgICAgICAgICByZXR1cm4gXCJob3Jpem9udGFsXCI7XG4gICAgICAgIH1cbiAgICB9LCBbZ2V0TG9naWNhbERpcmVjdGlvbl0pO1xuICAgIGNvbnN0IGNvbnZlcnRFbGVtZW50U2l6ZSA9IHVzZUNhbGxiYWNrKChlbGVtZW50U2l6ZSwgZGlyZWN0aW9uKSA9PiB7XG4gICAgICAgIGRpcmVjdGlvbiA/Pz0gZ2V0TG9naWNhbERpcmVjdGlvbigpO1xuICAgICAgICBpZiAoZGlyZWN0aW9uKSB7XG4gICAgICAgICAgICBjb25zdCB7IGlubGluZVNpemUsIGJsb2NrU2l6ZSwgaW5saW5lRGlyZWN0aW9uLCBibG9ja0RpcmVjdGlvbiB9ID0gZGlyZWN0aW9uO1xuICAgICAgICAgICAgLy8gU2l6ZSBpcyByZWxhdGl2ZWx5IHNpbXBsZVxuICAgICAgICAgICAgbGV0IGNsaWVudElubGluZVNpemUgPSBlbGVtZW50U2l6ZVtgY2xpZW50JHtjYXBpdGFsaXplKGlubGluZVNpemUpfWBdO1xuICAgICAgICAgICAgbGV0IGNsaWVudEJsb2NrU2l6ZSA9IGVsZW1lbnRTaXplW2BjbGllbnQke2NhcGl0YWxpemUoYmxvY2tTaXplKX1gXTtcbiAgICAgICAgICAgIGxldCBvZmZzZXRJbmxpbmVTaXplID0gZWxlbWVudFNpemVbYG9mZnNldCR7Y2FwaXRhbGl6ZShpbmxpbmVTaXplKX1gXTtcbiAgICAgICAgICAgIGxldCBvZmZzZXRCbG9ja1NpemUgPSBlbGVtZW50U2l6ZVtgb2Zmc2V0JHtjYXBpdGFsaXplKGJsb2NrU2l6ZSl9YF07XG4gICAgICAgICAgICBsZXQgc2Nyb2xsSW5saW5lU2l6ZSA9IGVsZW1lbnRTaXplW2BzY3JvbGwke2NhcGl0YWxpemUoaW5saW5lU2l6ZSl9YF07XG4gICAgICAgICAgICBsZXQgc2Nyb2xsQmxvY2tTaXplID0gZWxlbWVudFNpemVbYHNjcm9sbCR7Y2FwaXRhbGl6ZShibG9ja1NpemUpfWBdO1xuICAgICAgICAgICAgLy8gUG9zaXRpb24gcmVxdWlyZXMgdXMgdG8gc29tZXRpbWVzIHVzZSBvbmUgcHJvcGVydHkgKGxpa2UgYGxlZnRgKVxuICAgICAgICAgICAgLy8gb3Igc29tZXRpbWVzIHR3byAobGlrZSBgbGVmdGAgKyBgd2lkdGhgKVxuICAgICAgICAgICAgZnVuY3Rpb24gZ2V0UGh5c2ljYWxMZWZ0VG9wKGRpcikgeyBpZiAoZGlyID09PSBcImx0clwiIHx8IGRpciA9PSBcInJ0bFwiKVxuICAgICAgICAgICAgICAgIHJldHVybiBcImxlZnRcIjsgcmV0dXJuIFwidG9wXCI7IH1cbiAgICAgICAgICAgIGZ1bmN0aW9uIGdldFBoeXNpY2FsUmlnaHRCb3R0b20oZGlyKSB7IGlmIChkaXIgPT09IFwicnRsXCIpXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwid2lkdGhcIjsgaWYgKGRpciA9PT0gXCJidHRcIilcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJoZWlnaHRcIjsgcmV0dXJuIG51bGw7IH1cbiAgICAgICAgICAgIGNvbnN0IGYxID0gZ2V0UGh5c2ljYWxMZWZ0VG9wKGlubGluZURpcmVjdGlvbik7XG4gICAgICAgICAgICBjb25zdCBmMiA9IGdldFBoeXNpY2FsUmlnaHRCb3R0b20oaW5saW5lRGlyZWN0aW9uKTtcbiAgICAgICAgICAgIGNvbnN0IGYzID0gZ2V0UGh5c2ljYWxMZWZ0VG9wKGJsb2NrRGlyZWN0aW9uKTtcbiAgICAgICAgICAgIGNvbnN0IGY0ID0gZ2V0UGh5c2ljYWxSaWdodEJvdHRvbShibG9ja0RpcmVjdGlvbik7XG4gICAgICAgICAgICBsZXQgY2xpZW50SW5saW5lSW5zZXQgPSBlbGVtZW50U2l6ZVtgY2xpZW50JHtjYXBpdGFsaXplKGYxKX1gXSArICghZjIgPyAwIDogZWxlbWVudFNpemVbYGNsaWVudCR7Y2FwaXRhbGl6ZShmMil9YF0pO1xuICAgICAgICAgICAgbGV0IHNjcm9sbElubGluZUluc2V0ID0gZWxlbWVudFNpemVbYHNjcm9sbCR7Y2FwaXRhbGl6ZShmMSl9YF0gKyAoIWYyID8gMCA6IGVsZW1lbnRTaXplW2BzY3JvbGwke2NhcGl0YWxpemUoZjIpfWBdKTtcbiAgICAgICAgICAgIGxldCBvZmZzZXRJbmxpbmVJbnNldCA9IGVsZW1lbnRTaXplW2BvZmZzZXQke2NhcGl0YWxpemUoZjEpfWBdICsgKCFmMiA/IDAgOiBlbGVtZW50U2l6ZVtgb2Zmc2V0JHtjYXBpdGFsaXplKGYyKX1gXSk7XG4gICAgICAgICAgICBsZXQgY2xpZW50QmxvY2tJbnNldCA9IGVsZW1lbnRTaXplW2BjbGllbnQke2NhcGl0YWxpemUoZjMpfWBdICsgKCFmNCA/IDAgOiBlbGVtZW50U2l6ZVtgY2xpZW50JHtjYXBpdGFsaXplKGY0KX1gXSk7XG4gICAgICAgICAgICBsZXQgc2Nyb2xsQmxvY2tJbnNldCA9IGVsZW1lbnRTaXplW2BzY3JvbGwke2NhcGl0YWxpemUoZjMpfWBdICsgKCFmNCA/IDAgOiBlbGVtZW50U2l6ZVtgc2Nyb2xsJHtjYXBpdGFsaXplKGY0KX1gXSk7XG4gICAgICAgICAgICBsZXQgb2Zmc2V0QmxvY2tJbnNldCA9IGVsZW1lbnRTaXplW2BvZmZzZXQke2NhcGl0YWxpemUoZjMpfWBdICsgKCFmNCA/IDAgOiBlbGVtZW50U2l6ZVtgb2Zmc2V0JHtjYXBpdGFsaXplKGY0KX1gXSk7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGNsaWVudElubGluZVNpemUsXG4gICAgICAgICAgICAgICAgc2Nyb2xsSW5saW5lU2l6ZSxcbiAgICAgICAgICAgICAgICBvZmZzZXRJbmxpbmVTaXplLFxuICAgICAgICAgICAgICAgIGNsaWVudEJsb2NrU2l6ZSxcbiAgICAgICAgICAgICAgICBzY3JvbGxCbG9ja1NpemUsXG4gICAgICAgICAgICAgICAgb2Zmc2V0QmxvY2tTaXplLFxuICAgICAgICAgICAgICAgIGNsaWVudElubGluZUluc2V0LFxuICAgICAgICAgICAgICAgIHNjcm9sbElubGluZUluc2V0LFxuICAgICAgICAgICAgICAgIG9mZnNldElubGluZUluc2V0LFxuICAgICAgICAgICAgICAgIGNsaWVudEJsb2NrSW5zZXQsXG4gICAgICAgICAgICAgICAgc2Nyb2xsQmxvY2tJbnNldCxcbiAgICAgICAgICAgICAgICBvZmZzZXRCbG9ja0luc2V0LFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9LCBbZ2V0TG9naWNhbERpcmVjdGlvbl0pO1xuICAgIHJldHVybiB7XG4gICAgICAgIGdldExvZ2ljYWxEaXJlY3Rpb24sXG4gICAgICAgIGNvbnZlcnRFbGVtZW50U2l6ZSxcbiAgICAgICAgY29udmVydFRvTG9naWNhbE9yaWVudGF0aW9uLFxuICAgICAgICBjb252ZXJ0VG9QaHlzaWNhbE9yaWVudGF0aW9uXG4gICAgfTtcbn1cbjtcbmNvbnN0IEhvcml6b250YWxUYkx0ciA9IHtcbiAgICBpbmxpbmVEaXJlY3Rpb246IFwibHRyXCIsXG4gICAgYmxvY2tEaXJlY3Rpb246IFwidHRiXCIsXG4gICAgaW5saW5lT3JpZW50YXRpb246IFwiaG9yaXpvbnRhbFwiLFxuICAgIGJsb2NrT3JpZW50YXRpb246IFwidmVydGljYWxcIixcbiAgICBpbmxpbmVTaXplOiBcIndpZHRoXCIsXG4gICAgYmxvY2tTaXplOiBcImhlaWdodFwiLFxuICAgIGxlZnRSaWdodERpcmVjdGlvbjogXCJsdHJcIixcbiAgICBvdmVyVW5kZXJEaXJlY3Rpb246IFwidHRiXCJcbn07XG5jb25zdCBIb3Jpem9udGFsVGJSdGwgPSB7XG4gICAgLi4uSG9yaXpvbnRhbFRiTHRyLFxuICAgIGlubGluZURpcmVjdGlvbjogXCJydGxcIixcbn07XG5jb25zdCBWZXJ0aWNhbFJsTHRyID0ge1xuICAgIGlubGluZURpcmVjdGlvbjogXCJ0dGJcIixcbiAgICBibG9ja0RpcmVjdGlvbjogXCJydGxcIixcbiAgICBpbmxpbmVPcmllbnRhdGlvbjogXCJ2ZXJ0aWNhbFwiLFxuICAgIGJsb2NrT3JpZW50YXRpb246IFwiaG9yaXpvbnRhbFwiLFxuICAgIGlubGluZVNpemU6IFwiaGVpZ2h0XCIsXG4gICAgYmxvY2tTaXplOiBcIndpZHRoXCIsXG4gICAgbGVmdFJpZ2h0RGlyZWN0aW9uOiBcInR0YlwiLFxuICAgIG92ZXJVbmRlckRpcmVjdGlvbjogXCJydGxcIlxufTtcbmNvbnN0IFZlcnRpY2FsUmxSdGwgPSB7XG4gICAgLi4uVmVydGljYWxSbEx0cixcbiAgICBpbmxpbmVEaXJlY3Rpb246IFwiYnR0XCJcbn07XG5jb25zdCBTaWRld2F5c1JsTHRyID0geyAuLi5WZXJ0aWNhbFJsTHRyIH07XG5jb25zdCBTaWRld2F5c1JsUnRsID0geyAuLi5WZXJ0aWNhbFJsUnRsIH07XG5jb25zdCBWZXJ0aWNhbExyTHRyID0ge1xuICAgIC4uLlZlcnRpY2FsUmxMdHIsXG4gICAgYmxvY2tEaXJlY3Rpb246IFwibHRyXCIsXG59O1xuY29uc3QgVmVydGljYWxMclJ0bCA9IHtcbiAgICAuLi5WZXJ0aWNhbFJsUnRsLFxuICAgIGJsb2NrRGlyZWN0aW9uOiBcImx0clwiLFxufTtcbmNvbnN0IFNpZGV3YXlzTHRMdHIgPSB7XG4gICAgLi4uVmVydGljYWxMckx0cixcbiAgICBpbmxpbmVEaXJlY3Rpb246IFwiYnR0XCIsXG4gICAgbGVmdFJpZ2h0RGlyZWN0aW9uOiBcImJ0dFwiLFxuICAgIG92ZXJVbmRlckRpcmVjdGlvbjogXCJsdHJcIlxufTtcbmNvbnN0IFNpZGV3YXlzTHRSdGwgPSB7XG4gICAgLi4uU2lkZXdheXNMdEx0cixcbiAgICBpbmxpbmVEaXJlY3Rpb246IFwidHRiXCJcbn07XG5jb25zdCBIb3Jpem9udGFsVGIgPSB7XG4gICAgbHRyOiBIb3Jpem9udGFsVGJMdHIsXG4gICAgcnRsOiBIb3Jpem9udGFsVGJSdGxcbn07XG5jb25zdCBWZXJ0aWNhbFJsID0ge1xuICAgIGx0cjogVmVydGljYWxSbEx0cixcbiAgICBydGw6IFZlcnRpY2FsUmxSdGxcbn07XG5jb25zdCBWZXJ0aWNhbExyID0ge1xuICAgIGx0cjogVmVydGljYWxMckx0cixcbiAgICBydGw6IFZlcnRpY2FsTHJSdGxcbn07XG5jb25zdCBTaWRld2F5c1JsID0ge1xuICAgIGx0cjogU2lkZXdheXNSbEx0cixcbiAgICBydGw6IFNpZGV3YXlzUmxSdGxcbn07XG5jb25zdCBTaWRld2F5c0xyID0ge1xuICAgIGx0cjogU2lkZXdheXNMdEx0cixcbiAgICBydGw6IFNpZGV3YXlzTHRSdGxcbn07XG5jb25zdCBXcml0aW5nTW9kZXMgPSB7XG4gICAgXCJob3Jpem9udGFsLXRiXCI6IEhvcml6b250YWxUYixcbiAgICBcInZlcnRpY2FsLWxyXCI6IFZlcnRpY2FsTHIsXG4gICAgXCJ2ZXJ0aWNhbC1ybFwiOiBWZXJ0aWNhbFJsLFxuICAgIFwic2lkZXdheXMtbHJcIjogU2lkZXdheXNMcixcbiAgICBcInNpZGV3YXlzLXJsXCI6IFNpZGV3YXlzUmxcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2UtbG9naWNhbC1kaXJlY3Rpb24uanMubWFwIiwiaW1wb3J0IHsgdXNlUmVmLCB1c2VJbXBlcmF0aXZlSGFuZGxlLCB1c2VDYWxsYmFjayB9IGZyb20gXCJwcmVhY3QvaG9va3NcIjtcbi8qKlxuICogR2l2ZW4gYW4gaW5wdXQgdmFsdWUsIHJldHVybnMgYSBjb25zdGFudCBnZXR0ZXIgZnVuY3Rpb24gdGhhdCBjYW4gYmUgdXNlZFxuICogaW5zaWRlIG9mIGB1c2VFZmZlY3RgIGFuZCBmcmllbmRzIHdpdGhvdXQgaW5jbHVkaW5nIGl0IGluIHRoZSBkZXBlbmRlbmN5IGFycmF5LlxuICpcbiAqIFVzZSB3aXRoIGNhdXRpb24sIGFuZCAqKmRvIG5vdCB1c2UgdGhlIGdldHRlciBpbiB1c2VMYXlvdXRFZmZlY3QhISoqXG4gKiBgc2V0U3RhdGVgJ3MgZ2V0dGVyIGRvZXMgbm90IGhhdmUgdGhpcyBwcm9ibGVtLCBidXQgdGhlbiB5b3UncmUgdXNpbmcgeW91ciBvd24gc3RhdGVcbiAqIGluc3RlYWQgb2YgYW4gZXhpc3RpbmcgdmFsdWUsIHdoaWNoIG1pZ2h0IG5vdCBhbHdheXMgYmUgZmVhc2libGUuXG4gKlxuICogV2VpZ2ggeW91ciBvcHRpb25zLCBhbmQgaG9wZWZ1bGx5IG9uZSBvZiB0aGVtIGdldHMgdGhlIGpvYiBkb25lLlxuICpcbiAqIEBwYXJhbSB2YWx1ZVxuICogQHJldHVybnNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZVN0YWJsZUdldHRlcih2YWx1ZSkge1xuICAgIGNvbnN0IHJlZiA9IHVzZVJlZih2YWx1ZSk7XG4gICAgdXNlSW1wZXJhdGl2ZUhhbmRsZShyZWYsICgpID0+IHZhbHVlKTtcbiAgICByZXR1cm4gdXNlQ2FsbGJhY2soKCkgPT4geyByZXR1cm4gcmVmLmN1cnJlbnQ7IH0sIFtdKTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZS1zdGFibGUtZ2V0dGVyLmpzLm1hcCIsImltcG9ydCB7IHVzZUNhbGxiYWNrIH0gZnJvbSBcInByZWFjdC9ob29rc1wiO1xuaW1wb3J0IHsgdXNlU3RhYmxlR2V0dGVyIH0gZnJvbSBcIi4vdXNlLXN0YWJsZS1nZXR0ZXJcIjtcbi8qKlxuICogQWx0ZXJuYXRlIHVzZUNhbGxiYWNrKCkgd2hpY2ggYWx3YXlzIHJldHVybnMgdGhlIHNhbWUgKHdyYXBwZWQpIGZ1bmN0aW9uIHJlZmVyZW5jZVxuICogc28gdGhhdCBpdCBjYW4gYmUgZXhjbHVkZWQgZnJvbSB0aGUgZGVwZW5kZW5jeSBhcnJheXMgb2YgYHVzZUVmZmVjdGAgYW5kIGZyaWVuZHMuXG4gKlxuICogRE8gTk9UIFVTRSBUSEUgUkVTVUxUIElOIHVzZUxheW91dEVmZmVjdCEhXG4gKlxuICogVE9ETzogSW52ZXN0aWdhdGUgb3B0aW9ucy5kaWZmZWQgaWYgdGhlIHVzZUxheW91dEVmZmVjdCBsaW1pdGF0aW9uIGJlY29tZXMgbGltaXRsZXNzbHkgbGltaXRpbmcuXG4gKlxuICogU291cmNlOiBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVhY3QvaXNzdWVzLzE0MDk5I2lzc3VlY29tbWVudC02NTkyOTg0MjJcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZVN0YWJsZUNhbGxiYWNrKGZuKSB7XG4gICAgY29uc3QgY3VycmVudENhbGxiYWNrR2V0dGVyID0gdXNlU3RhYmxlR2V0dGVyKGZuKTtcbiAgICByZXR1cm4gdXNlQ2FsbGJhY2soKC4uLmFyZ3MpID0+IHtcbiAgICAgICAgY29uc3QgY3VycmVudEZ1bmMgPSBjdXJyZW50Q2FsbGJhY2tHZXR0ZXIoKTtcbiAgICAgICAgaWYgKCFjdXJyZW50RnVuYykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDYWxsYmFjayByZXRyaWV2ZWQgZnJvbSB1c2VTdGFibGVDYWxsYmFjaygpIGNhbm5vdCBiZSBjYWxsZWQgZnJvbSB1c2VMYXlvdXRFZmZlY3QoKS4nKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY3VycmVudEZ1bmMoLi4uYXJncyk7XG4gICAgfSwgW10pO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXNlLXN0YWJsZS1jYWxsYmFjay5qcy5tYXAiLCJpbXBvcnQgeyB1c2VMYXlvdXRFZmZlY3QgYXMgdXNlTGF5b3V0RWZmZWN0TmF0aXZlLCB1c2VSZWYgfSBmcm9tIFwicHJlYWN0L2hvb2tzXCI7XG4vKipcbiAqIFdyYXAgdGhlIG5hdGl2ZSBgdXNlTGF5b3V0RWZmZWN0YCB0byBhZGQgYXJndW1lbnRzXG4gKiB0aGF0IGFsbG93IGFjY2Vzc2luZyB0aGUgcHJldmlvdXMgdmFsdWUgYXMgdGhlIGZpcnN0IGFyZ3VtZW50LFxuICogYXMgd2VsbCBhcyB0aGUgY2hhbmdlcyB0aGF0IGNhdXNlZCB0aGUgaG9vayB0byBiZSBjYWxsZWQgYXMgdGhlIHNlY29uZCBhcmd1bWVudC5cbiAqXG4gKiBAcGFyYW0gZWZmZWN0XG4gKiBAcGFyYW0gaW5wdXRzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VMYXlvdXRFZmZlY3QoZWZmZWN0LCBpbnB1dHMpIHtcbiAgICBjb25zdCBwcmV2SW5wdXRzID0gdXNlUmVmKGlucHV0cyk7XG4gICAgY29uc3QgZWZmZWN0MiA9ICgpID0+IHtcbiAgICAgICAgbGV0IGNoYW5nZXMgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBNYXRoLm1heChwcmV2SW5wdXRzLmN1cnJlbnQubGVuZ3RoLCBpbnB1dHMubGVuZ3RoKTsgKytpKSB7XG4gICAgICAgICAgICBpZiAocHJldklucHV0cy5jdXJyZW50W2ldICE9IGlucHV0c1tpXSlcbiAgICAgICAgICAgICAgICBjaGFuZ2VzW2ldID0geyBmcm9tOiBwcmV2SW5wdXRzLmN1cnJlbnRbaV0sIHRvOiBpbnB1dHNbaV0gfTtcbiAgICAgICAgfVxuICAgICAgICBlZmZlY3QocHJldklucHV0cy5jdXJyZW50LCBjaGFuZ2VzKTtcbiAgICAgICAgcHJldklucHV0cy5jdXJyZW50ID0gaW5wdXRzO1xuICAgIH07XG4gICAgdXNlTGF5b3V0RWZmZWN0TmF0aXZlKGVmZmVjdDIsIGlucHV0cyk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2UtbGF5b3V0LWVmZmVjdC5qcy5tYXAiLCJpbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicHJlYWN0L2hvb2tzXCI7XG5pbXBvcnQgeyB1c2VTdGFibGVDYWxsYmFjayB9IGZyb20gXCIuL3VzZS1zdGFibGUtY2FsbGJhY2tcIjtcbmltcG9ydCB7IHVzZVN0YWJsZUdldHRlciB9IGZyb20gXCIuL3VzZS1zdGFibGUtZ2V0dGVyXCI7XG5leHBvcnQgZnVuY3Rpb24gdXNlVGltZW91dCh7IHRpbWVvdXQsIGNhbGxiYWNrLCB0cmlnZ2VySW5kZXggfSkge1xuICAgIGNvbnN0IHN0YWJsZUNhbGxiYWNrID0gdXNlU3RhYmxlQ2FsbGJhY2soY2FsbGJhY2spO1xuICAgIGNvbnN0IGdldFRpbWVvdXQgPSB1c2VTdGFibGVHZXR0ZXIodGltZW91dCk7XG4gICAgY29uc3QgdGltZW91dElzTnVsbCA9ICh0aW1lb3V0ID09IG51bGwpO1xuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IHRpbWVvdXQgPSBnZXRUaW1lb3V0KCk7XG4gICAgICAgIGNvbnNvbGUuYXNzZXJ0KHRpbWVvdXRJc051bGwgPT0gKHRpbWVvdXQgPT0gbnVsbCkpO1xuICAgICAgICBpZiAodGltZW91dCkge1xuICAgICAgICAgICAgY29uc3QgaGFuZGxlID0gc2V0VGltZW91dChzdGFibGVDYWxsYmFjaywgdGltZW91dCk7XG4gICAgICAgICAgICByZXR1cm4gKCkgPT4gY2xlYXJUaW1lb3V0KGhhbmRsZSk7XG4gICAgICAgIH1cbiAgICB9LCBbdHJpZ2dlckluZGV4LCB0aW1lb3V0SXNOdWxsXSk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2UtdGltZW91dC5qcy5tYXAiLCJpbXBvcnQgeyB1c2VTdGFibGVDYWxsYmFjayB9IGZyb20gXCIuL3VzZS1zdGFibGUtY2FsbGJhY2tcIjtcbmltcG9ydCB7IHVzZUxheW91dEVmZmVjdCB9IGZyb20gXCIuL3VzZS1sYXlvdXQtZWZmZWN0XCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCIuL3VzZS1zdGF0ZVwiO1xuaW1wb3J0IHsgdXNlVGltZW91dCB9IGZyb20gXCIuL3VzZS10aW1lb3V0XCI7XG4vKipcbiAqIEdpdmVuIGFuIGFzeW5jcm9ub3VzIGV2ZW50IGhhbmRsZXIsIHJldHVybnMgYSBzeW5jcm9ub3VzIG9uZSB0aGF0IHdvcmtzIG9uIHRoZSBET00sXG4gKiBhbG9uZyB3aXRoIHNvbWUgb3RoZXIgaW5mb3JtYXRpb24gcmVsYXRlZCB0byB0aGUgY3VycmVudCBzdGF0ZS5cbiAqIERvZXMgbm90IG1vZGlmeSBhbnkgcHJvcHMuXG4gKlxuICogVGhlIGhhbmRsZXIgaXMgYXV0b21hdGljYWxseSB0aHJvdHRsZWQgdG8gb25seSBydW4gb25lIGF0IGEgdGltZS5cbiAqIElmIHRoZSBoYW5kbGVyIGlzIGNhbGxlZCwgYW5kIHRoZW4gYmVmb3JlIGl0IGZpbmlzaGVzLCBpcyBjYWxsZWQgYWdhaW4sXG4gKiBpdCB3aWxsIGJlIHB1dCBvbiBob2xkIHVudGlsIHRoZSBjdXJyZW50IG9uZSBmaW5pc2hlcywgYXQgd2hpY2ggcG9pbnRcbiAqIHRoZSBzZWNvbmQgb25lIHdpbGwgcnVuLiAgSWYgdGhlIGhhbmRsZXIgaXMgY2FsbGVkIGEgdGhpcmQgdGltZSBiZWZvcmVcbiAqIHRoZSBmaXJzdCBoYXMgZmluaXNoZWQsIGl0IHdpbGwgKnJlcGxhY2UqIHRoZSBzZWNvbmQsIHNvIG9ubHkgdGhlIG1vc3RcbiAqIHJlY2VudGx5IGNhbGxlZCBpdGVyYXRpb24gb2YgdGhlIGhhbmRsZXIgd2lsbCBydW4uXG4gKlxuICogWW91IG1heSBvcHRpb25hbGx5ICphbHNvKiBzcGVjaWZ5IGEgZGVib3VuY2UgcGFyYW1ldGVyIHRoYXQgd2FpdHMgdW50aWwgdGhlXG4gKiBzeW5jcm9ub3VzIGhhbmRsZXIgaGFzIG5vdCBiZWVuIGNhbGxlZCBmb3IgdGhlIHNwZWNpZmllZCBudW1iZXIgb2ZcbiAqIG1pbGxpc2Vjb25kcywgYXQgd2hpY2ggcG9pbnQgd2UgKmFjdHVhbGx5KiBydW4gdGhlIGFzeW5jcm9ub3VzIGhhbmRsZXJcbiAqIGFjY29yZGluZyB0byB0aGUgbG9naWMgaW4gdGhlIHByZXZpb3VzIHBhcmFncmFwaC4gVGhpcyBpcyBpblxuICogKmFkZGl0aW9uKiB0byB0aHJvdHRsaW5nIHRoZSBoYW5kbGVyLCBhbmQgZG9lcyBub3QgcmVwbGFjZSB0aGF0IGJlaGF2aW9yLlxuICpcbiAqIE5vdGUgdGhhdCB0aGUgcGFyYW1ldGVycyB0byB0aGUgYXN5bmMgaGFuZGxlciBhcmUgc2xpZ2h0bHkgZGlmZmVyZW50IHRoYW5cbiAqIHRoZSBzeW5jIGhhbmRsZXIgJm5kYXNoOyB0aGUgZmlyc3QgYXJndW1lbnQsIGFzIGRlY2lkZWQgYnkgeW91IHdpdGggdGhlXG4gKiBgY2FwdHVyZWAgcGFyYW1ldGVyIGZvciB0aGlzIGhvb2ssIGlzIHRoZSBcInNhdmVkXCIgaW5mb3JtYXRpb24gZnJvbSB0aGVcbiAqIGV2ZW50LiAgRm9yIGV4YW1wbGUsIHRoZSBldmVudCdzIGN1cnJlbnRUYXJnZXQncyBgdmFsdWVgLCB3aGljaCBtYXkgaGF2ZVxuICogY2hhbmdlZCBieSB0aGUgdGltZSB0aGUgaGFuZGxlciBpcyAqYWN0dWFsbHkqIGNhbGxlZC4gIFRoZSBzZWNvbmQgYXJndW1lbnRcbiAqIGlzIHRoZSBvcmlnaW5hbCBldmVudCwgd2hpY2ggbWlnaHQgc3RpbGwgaGF2ZSBzb21lIHVzZWZ1bCBmaWVsZHMgb24gaXRcbiAqIGxpa2UgYG1vdXNlWGAgb3Igc29tZXRoaW5nLCBidXQgaXMgc3RhbGUgYXQgbGVhc3QgaW4gcmVnYXJkcyB0byB0aGVcbiAqIGVsZW1lbnQgaXQgcmVmZXJlbmNlcy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZUFzeW5jSGFuZGxlcigpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKHsgY2FwdHVyZSwgZGVib3VuY2UgfSkge1xuICAgICAgICAvLyBBbHdheXMgcmVwcmVzZW50cyB3aGF0ZXZlciBwcm9taXNlIGlzIGN1cnJlbnRseSBiZWluZyB3YWl0ZWQgb24sIG9yIG51bGwgaWYgbm9uZS5cbiAgICAgICAgY29uc3QgW3Byb21pc2UsIHNldFByb21pc2UsIGdldFByb21pc2VdID0gdXNlU3RhdGUobnVsbCk7XG4gICAgICAgIC8vIEtlZXAgdHJhY2sgb2YgaG93IG1hbnkgdGltZXMgd2UndmUgYWN0dWFsbHkgY2FsbGVkIHRoZSBhc3luYyBoYW5kbGVyXG4gICAgICAgIGNvbnN0IFtydW5Db3VudCwgc2V0UnVuQ291bnRdID0gdXNlU3RhdGUoMCk7XG4gICAgICAgIGNvbnN0IFtyZXNvbHZlQ291bnQsIHNldFJlc29sdmVDb3VudF0gPSB1c2VTdGF0ZSgwKTtcbiAgICAgICAgY29uc3QgW3JlamVjdENvdW50LCBzZXRSZWplY3RDb3VudF0gPSB1c2VTdGF0ZSgwKTtcbiAgICAgICAgLy8gSWYgd2UncmUgc2V0IHRvIHVzZSBhIGRlYm91bmNlLCB0aGVuIHdoZW4gdGhlIHRpbWVvdXQgZmluaXNoZXMsXG4gICAgICAgIC8vIHRoZSBwcm9taXNlIGZyb20gdGhpcyBzdGF0ZSBvYmplY3QgaXMgdHJhbnNmZXJyZWQgb3ZlciB0byBlaXRoZXIgXG4gICAgICAgIC8vIHRoZSBjdXJyZW50IHByb21pc2Ugb3IgdGhlIHBlbmRpbmcgcHJvbWlzZS5cbiAgICAgICAgY29uc3QgW2RlYm91bmNlZFByb21pc2VTdGFydGVyLCBzZXREZWJvdW5jZWRQcm9taXNlU3RhcnRlciwgZ2V0RGVib3VuY2VkUHJvbWlzZVN0YXJ0ZXJdID0gdXNlU3RhdGUobnVsbCk7XG4gICAgICAgIC8vIFdoZW4gd2Ugd2FudCB0byBzdGFydCBhIG5ldyBwcm9taXNlLCB3ZSB3b24ndCBhbGxvdyBpdCB0byBzdGFydCBpZiBvbmUgaXMgc3RpbGwgcnVubmluZy5cbiAgICAgICAgLy8gSW4gdGhhdCBjYXNlLCB3ZSBzdG9yZSB0aGUgcHJvbWlzZSAob3IgcmF0aGVyLCBhIHdheSB0byBzdGFydCB0aGUgcHJvbWlzZSkgaW4gc3RhdGUuXG4gICAgICAgIGNvbnN0IFtwZW5kaW5nUHJvbWlzZVN0YXJ0ZXIsIHNldFBlbmRpbmdQcm9taXNlU3RhcnRlciwgZ2V0UGVuZGluZ1Byb21pc2VTdGFydGVyXSA9IHVzZVN0YXRlKG51bGwpO1xuICAgICAgICAvLyBXZSBuZWVkIHRvIGRpZmZlcmVudGlhdGUgYmV0d2VlbiBgdW5kZWZpbmVkYCBhbmQgXCJubyBlcnJvciBoYXMgYmVlbiB0aHJvd25cIi5cbiAgICAgICAgLy8gV2UgY291bGQgYWxzbyBrZWVwIGEgc2VwYXJhdGUgYm9vbGVhbiBzdGF0ZSB0byB0cmFjayB0aGF0LlxuICAgICAgICBjb25zdCBbZXJyb3IsIHNldEVycm9yLCBnZXRFcnJvcl0gPSB1c2VTdGF0ZSh1bmRlZmluZWQpO1xuICAgICAgICBjb25zdCBbaGFzRXJyb3IsIHNldEhhc0Vycm9yLCBnZXRIYXNFcnJvcl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgICAgIGNvbnN0IFtjdXJyZW50Q2FwdHVyZSwgc2V0Q3VycmVudENhcHR1cmUsIGdldEN1cnJlbnRDYXB0dXJlXSA9IHVzZVN0YXRlKHVuZGVmaW5lZCk7XG4gICAgICAgIGNvbnN0IFtoYXNDYXB0dXJlLCBzZXRIYXNDYXB0dXJlXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICAgICAgLy8gSGFuZGxlIHRoZSBkZWJvdW5jZS4gTG9naWNhbGx5IHRoaXMgaGFwcGVucyBiZWZvcmUgdGhlIG1haW4gc3RlcCBhcyBhIHNvcnQgb2Ygc3RlcCAwLlxuICAgICAgICAvLyBSZXNldHMgdGhlIHRpbWVvdXQgYW55IHRpbWUgdGhlIGhhbmRsZXIgd2FzIHJlcXVlc3RlZCB0byBiZSBjYWxsZWQgYWdhaW5cbiAgICAgICAgLy8gYW5kIHdoZW4gaXQgZmluaXNoZXMsIGFjdHVhbGx5IGNhbGwgdGhlIGhhbmRsZXIgKG9yIHNldCBpdCBhcyB0aGUgcGVuZGluZyBwcm9taXNlKVxuICAgICAgICB1c2VUaW1lb3V0KHtcbiAgICAgICAgICAgIHRpbWVvdXQ6IGRlYm91bmNlID8/IG51bGwsXG4gICAgICAgICAgICBjYWxsYmFjazogKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChkZWJvdW5jZWRQcm9taXNlU3RhcnRlcilcbiAgICAgICAgICAgICAgICAgICAgd2FudFRvU3RhcnRBTmV3UHJvbWlzZShkZWJvdW5jZWRQcm9taXNlU3RhcnRlcik7XG4gICAgICAgICAgICAgICAgc2V0RGVib3VuY2VkUHJvbWlzZVN0YXJ0ZXIobnVsbCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdHJpZ2dlckluZGV4OiBkZWJvdW5jZWRQcm9taXNlU3RhcnRlclxuICAgICAgICB9KTtcbiAgICAgICAgLy8gU2VlIGlmIHdlIHNob3VsZCBzZXQgb3VyIGN1cnJlbnQgcHJvbWlzZSB0byBiZSB3aGF0ZXZlciB0aGUgcGVuZGluZyBwcm9taXNlIGlzXG4gICAgICAgIC8vICh1c3VhbGx5IGJlY2F1c2UgdGhlIGN1cnJlbnQgcHJvbWlzZSBmaW5pc2hlZCBhbmQgYmVjYW1lIG51bGwpLlxuICAgICAgICB1c2VMYXlvdXRFZmZlY3QoKCkgPT4ge1xuICAgICAgICAgICAgLy8gT3VyIGN1cnJlbnQgcHJvbWlzZSBqdXN0IGZpbmlzaGVkIGFuZCB0aGVyZSdzIG9uZSB3YWl0aW5nP1xuICAgICAgICAgICAgaWYgKHByb21pc2UgPT0gbnVsbCAmJiBwZW5kaW5nUHJvbWlzZVN0YXJ0ZXIgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHdhbnRUb1N0YXJ0QU5ld1Byb21pc2UocGVuZGluZ1Byb21pc2VTdGFydGVyKTtcbiAgICAgICAgICAgICAgICBzZXRQZW5kaW5nUHJvbWlzZVN0YXJ0ZXIobnVsbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIFtwcm9taXNlLCBwZW5kaW5nUHJvbWlzZVN0YXJ0ZXJdKTtcbiAgICAgICAgLy8gQ2FsbGVkIGFueSB0aW1lIHRoZSBhc3luYyBoYW5kbGVyIGlzIGFib3V0IHRvIGJlIGNhbGxlZCBmb3Igd2hhdGV2ZXIgcmVhc29uLFxuICAgICAgICAvLyBleGNlcHQgZm9yIGRlYm91bmNlLCB3aGljaCBjb21lcyBmaXJzdCwgYXMgYSBzb3J0IG9mIFwic3RlcCAwXCIuXG4gICAgICAgIC8vIEhhbmRsZXMgYWxsIHRoZSBuZWNlc3NhcnkgYm9pbGVycGxhdGUgcmVsYXRlZCB0byBjaG9vc2luZyB3aGV0aGVyIHRvXG4gICAgICAgIC8vIHJ1biBvciBzZXQgYXMgcGVuZGluZywgcmVzZXR0aW5nIHN0YXRlIHZhcmlhYmxlcywgZXRjLlxuICAgICAgICBmdW5jdGlvbiB3YW50VG9TdGFydEFOZXdQcm9taXNlKHN0YXJ0UHJvbWlzZSkge1xuICAgICAgICAgICAgbGV0IGFscmVhZHlSdW5uaW5nUHJvbWlzZSA9IChnZXRQcm9taXNlKCkgIT0gbnVsbCk7XG4gICAgICAgICAgICAvLyBCb2lsZXJwbGF0ZSB3cmFwcGVyIGFyb3VuZCB0aGUgZ2l2ZW4gcHJvbWlzZSBzdGFydGVyXG4gICAgICAgICAgICBsZXQgUCA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICAvLyBXaGVuIGl0IHN0YXJ0cywgbm90aWZ5IHRoZSBjYWxsZXJcbiAgICAgICAgICAgICAgICBzZXRSdW5Db3VudChyID0+ICsrcik7XG4gICAgICAgICAgICAgICAgLy8gV2hlbiBpdCBjb21wbGV0ZXMsIG5vdGlmeSB0aGUgY2FsbGVyXG4gICAgICAgICAgICAgICAgY29uc3Qgb25UaGVuID0gKCkgPT4geyBzZXRSZXNvbHZlQ291bnQoYyA9PiArK2MpOyB9O1xuICAgICAgICAgICAgICAgIC8vIFdoZW4gaXQgZmFpbHMsIHNhdmUgdGhlIGVycm9yIGFuZCBub3RpZnkgdGhlIGNhbGxlclxuICAgICAgICAgICAgICAgIGNvbnN0IG9uQ2F0Y2ggPSAoZXgpID0+IHsgc2V0RXJyb3IoZXgpOyBzZXRIYXNFcnJvcih0cnVlKTsgc2V0UmVqZWN0Q291bnQoYyA9PiArK2MpOyB9O1xuICAgICAgICAgICAgICAgIC8vIFdoZW4gaXQgc2V0dGxlcywgcmVzZXQgb3VyIHN0YXRlIHNvIHdlIGNhbiBcbiAgICAgICAgICAgICAgICAvLyBydW4gYSBwZW5kaW5nIHByb21pc2UgaWYgaXQgZXhpc3RzXG4gICAgICAgICAgICAgICAgY29uc3Qgb25GaW5hbGx5ID0gKCkgPT4geyBzZXRQcm9taXNlKG51bGwpOyB9O1xuICAgICAgICAgICAgICAgIGxldCBzeW5jID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgLy8gSGFuZGxlIHRoZSBzcGVjaWFsIGNhc2Ugd2hlcmUgdGhlIGhhbmRsZXIgaXMgc3luY2hyb25vdXNcbiAgICAgICAgICAgICAgICBsZXQgcmVzdWx0O1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IHN0YXJ0UHJvbWlzZSgpO1xuICAgICAgICAgICAgICAgICAgICBpZiAocmVzdWx0ID09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gSXQncyBzeW5jaHJvbm91cyBhbmQgcmV0dXJuZWQgc3VjY2Vzc2Z1bGx5LlxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gQmFpbCBvdXQgZWFybHkuXG4gICAgICAgICAgICAgICAgICAgICAgICBvblRoZW4oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uRmluYWxseSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhdGNoIChleCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBJdCdzIHN5bmNocm9ub3VzIGFuZCB0aHJldyBhbiBlcnJvci5cbiAgICAgICAgICAgICAgICAgICAgLy8gQmFpbCBvdXQgZWFybHkuXG4gICAgICAgICAgICAgICAgICAgIG9uQ2F0Y2goZXgpO1xuICAgICAgICAgICAgICAgICAgICBvbkZpbmFsbHkoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gVGhlIGhhbmRsZXIgaXMgYXN5bmNocm9ub3VzXG4gICAgICAgICAgICAgICAgcmV0dXJuIChhc3luYyAoKSA9PiB7IGF3YWl0IHJlc3VsdDsgfSkoKS50aGVuKG9uVGhlbikuY2F0Y2gob25DYXRjaCkuZmluYWxseShvbkZpbmFsbHkpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGlmICghYWxyZWFkeVJ1bm5pbmdQcm9taXNlKSB7XG4gICAgICAgICAgICAgICAgLy8gU3RhcnQgdGhlIHByb21pc2UgaW1tZWRpYXRlbHksIGJlY2F1c2UgdGhlcmUgd2Fzbid0IG9uZSBydW5uaW5nIGFscmVhZHkuXG4gICAgICAgICAgICAgICAgbGV0IG5leHRQcm9taXNlID0gUCgpO1xuICAgICAgICAgICAgICAgIGlmIChuZXh0UHJvbWlzZSA9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gSG9sZCBvbiEgVGhlIGhhbmRsZXIgd2FzIGFjdHVhbGx5IHN5bmNocm9ub3VzLCBhbmQgYWxyZWFkeSBmaW5pc2hlZC5cbiAgICAgICAgICAgICAgICAgICAgLy8gQmFpbCBvdXQgZWFybHkuXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBzZXRFcnJvcih1bmRlZmluZWQpO1xuICAgICAgICAgICAgICAgICAgICBzZXRIYXNFcnJvcihmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgIHNldFByb21pc2UobmV4dFByb21pc2UpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIERvbid0IHN0YXJ0IHRoZSBwcm9taXNlIHlldCwgXG4gICAgICAgICAgICAgICAgLy8gYW5kIGFsbG93IGl0IHRvIHN0YXJ0IGluIHRoZSBmdXR1cmUgaW5zdGVhZC5cbiAgICAgICAgICAgICAgICBzZXRQZW5kaW5nUHJvbWlzZVN0YXJ0ZXIoXyA9PiBQKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBsZXQgcmV0ID0ge1xuICAgICAgICAgICAgZ2V0U3luY0hhbmRsZXIsXG4gICAgICAgICAgICBnZXRDdXJyZW50Q2FwdHVyZSxcbiAgICAgICAgICAgIGNhbGxDb3VudDogcnVuQ291bnQsXG4gICAgICAgICAgICBjdXJyZW50Q2FwdHVyZSxcbiAgICAgICAgICAgIGhhc0NhcHR1cmUsXG4gICAgICAgICAgICBwZW5kaW5nOiAocHJvbWlzZSAhPSBudWxsKSxcbiAgICAgICAgICAgIGhhc0Vycm9yLFxuICAgICAgICAgICAgZXJyb3IsXG4gICAgICAgICAgICByZXNvbHZlQ291bnQsXG4gICAgICAgICAgICByZWplY3RDb3VudCxcbiAgICAgICAgICAgIHNldHRsZUNvdW50OiByZWplY3RDb3VudCArIHJlc29sdmVDb3VudFxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gcmV0O1xuICAgICAgICBmdW5jdGlvbiBnZXRTeW5jSGFuZGxlcihhc3luY0hhbmRsZXIpIHtcbiAgICAgICAgICAgIGNvbnN0IHN5bmNIYW5kbGVyID0gdXNlU3RhYmxlQ2FsbGJhY2soZnVuY3Rpb24gc3luY0hhbmRsZXIoZXZlbnQpIHtcbiAgICAgICAgICAgICAgICBpZiAoYXN5bmNIYW5kbGVyID09IG51bGwpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAvLyBHZXQgdGhlIG1vc3Qgc2lnbmlmaWNhbnQgaW5mb3JtYXRpb24gZnJvbSB0aGUgZXZlbnQgYXQgdGhpcyB0aW1lLFxuICAgICAgICAgICAgICAgIC8vIHdoaWNoIGlzIG5lY2Vzc2FyeSBzaW5jZSB0aGUgcHJvbWlzZSBjb3VsZCBhY3R1YWxseSBiZSBjYWxsZWQgbXVjaCBsYXRlclxuICAgICAgICAgICAgICAgIC8vIHdoZW4gdGhlIGVsZW1lbnQncyB2YWx1ZSAoZXRjLikgaGFzIGNoYW5nZWQuXG4gICAgICAgICAgICAgICAgY29uc3QgY2FwdHVyZWQgPSBjYXB0dXJlKGV2ZW50KTtcbiAgICAgICAgICAgICAgICBzZXRDdXJyZW50Q2FwdHVyZShjYXB0dXJlZCk7XG4gICAgICAgICAgICAgICAgc2V0SGFzQ2FwdHVyZSh0cnVlKTtcbiAgICAgICAgICAgICAgICBjb25zdCBzdGFydFByb21pc2UgPSAoKSA9PiBhc3luY0hhbmRsZXIoY2FwdHVyZWQsIGV2ZW50KTtcbiAgICAgICAgICAgICAgICBpZiAoZGVib3VuY2UgPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICB3YW50VG9TdGFydEFOZXdQcm9taXNlKHN0YXJ0UHJvbWlzZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBzZXREZWJvdW5jZWRQcm9taXNlU3RhcnRlcihfID0+IHN0YXJ0UHJvbWlzZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gYXN5bmNIYW5kbGVyID09IG51bGwgPyB1bmRlZmluZWQgOiBzeW5jSGFuZGxlcjtcbiAgICAgICAgfVxuICAgIH07XG59XG5mdW5jdGlvbiBjYXBpdGFsaXplKHN0cikgeyByZXR1cm4gKHN0clswXS50b1VwcGVyQ2FzZSgpICsgc3RyLnN1YnN0cigxKSk7IH1cbmZ1bmN0aW9uIGlzVm9pZCh2KSB7IHJldHVybiB2ID09IHVuZGVmaW5lZDsgfVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXNlLWFzeW5jLWhhbmRsZXIuanMubWFwIiwiaW1wb3J0IHsgdXNlTGF5b3V0RWZmZWN0IH0gZnJvbSBcInByZWFjdC9ob29rc1wiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwiLi91c2Utc3RhdGVcIjtcbi8qKlxuICpcbiAqIFRoZXJlIGFyZSBzZXZlcmFsIGRpZmZlcmVudCB3YXlzIHRoYXQgYSBmb2N1cyBldmVudCBjYW4gaGFwcGVuLiAgQXNzdW1lXG4gKiB0aGUgZm9sbG93aW5nIHN0ZXBzIGhhcHBlbiBpbiBvcmRlcjpcbiAqXG4gKiAxLiBUaGUgcGFnZSBsb2Fkcy5cbiAqICAgICogTm90aGluZyBpcyBmb2N1c2VkLCBidXQgYGRvY3VtZW50LmFjdGl2ZUVsZW1lbnRgIGlzIGBib2R5YC5cbiAqICAgICogTm8gZm9jdXMgZXZlbnRzIGFyZSBmaXJlZC5cbiAqIDIuIFRoZSB3aW5kb3cgaXMgZm9jdXNlZCwgYW4gdW5mb2N1c2FibGUgZWxlbWVudCBpcyBjbGlja2VkLCB0ZXh0IGlzIHNlbGVjdGVkLCBldGMuXG4gKiAgICAqIFRoZSBgYWN0aXZlRWxlbWVudGAgcmVtYWlucyBhcyBgYm9keWAuXG4gKiAgICAqIEEgYGZvY3VzYC9gZm9jdXNpbmAgZXZlbnQgKk1JR0hUKiBiZSBmaXJlZCBmb3IgYGJvZHlgLiBEZXBlbmRpbmcgb25cbiAqICAgICAgdGhlIGJyb3dzZXIsIHRoaXMgZGVwZW5kcyBvbiB3aGV0aGVyIHRoZSBoYW5kbGVyIHdhcyBhdHRhY2hlZCB0byBgd2luZG93YCBvciBgZG9jdW1lbnRgLlxuICogICAgICBQcm9iYWJseSBqdXN0IGJlc3QgdG8gbm90IHJlbHkgb24gaXQsIG9yIGxpc3RlbiB0byBgd2luZG93YCBmb2N1cyBldmVudHMgZGlyZWN0bHkuXG4gKiAzLiBBIGZvY3VzYWJsZSBlbGVtZW50IGlzIGNsaWNrZWQsIGV0Yy5cbiAqICAgICogVGhlIGBhY3RpdmVFbGVtZW50YCBpcyBzZXQgdG8gdGhlIG5ldyBlbGVtZW50IGJlZm9yZSBhbnkgZXZlbnQgZXZlbiBmaXJlcy5cbiAqICAgICogYGZvY3Vzb3V0YCBhbmQgYGJsdXJgIGFyZSAqbm90KiBmaXJlZCBvbiBgYm9keWAuXG4gKiAgICAqIGBmb2N1c2AgYW5kIGBmb2N1c2luYCBhcmUgZmlyZWQgb24gdGhlIG5ldyBlbGVtZW50LiBgcmVsYXRlZFRhcmdldGAgaXMgbnVsbC5cbiAqIDQuIEEgZm9jdXNhYmxlIGVsZW1lbnQgaXMgY2xpY2tlZCwgZXRjLlxuICogICAgKiAqKlRoZSBgYWN0aXZlRWxlbWVudGAgaXMgc2V0IHRvIHRoZSBgYm9keWAqKiBiZWZvcmUgYW55IGV2ZW50IGV2ZW4gZmlyZXMuXG4gKiAgICAqIGBibHVyYCBhbmQgYGZvY3Vzb3V0YCBhcmUgZmlyZWQgb24gdGhlIG9sZCBlbGVtZW50LiBgcmVsYXRlZFRhcmdldGAgaXMgdGhlIG5ldyBlbGVtZW50LlxuICogICAgKiBUaGUgYGFjdGl2ZUVsZW1lbnRgIGlzIG5vdyBzZXQgdG8gdGhlIG5ldyBlbGVtZW50LlxuICogICAgKiBgZm9jdXNpbmAgaXMgZmlyZWQgb24gdGhlIG5ldyBlbGVtZW50LiBgcmVsYXRlZFRhcmdldGAgaXMgdGhlIG9sZCBlbGVtZW50LlxuICogNS4gQW4gdW5mb2N1c2FibGUgZWxlbWVudCBpcyBjbGlja2VkLCB0ZXh0IGlzIHNlbGVjdGVkLCBldGMuXG4gKiAgICAqIFRoZSBgYWN0aXZlRWxlbWVudGAgaXMgc2V0IHRvIGBib2R5YC5cbiAqICAgICogYGJsdXJgIGFuZCBgZm9jdXNvdXRgIGFyZSBmaXJlZCBvbiB0aGUgb2xkIGVsZW1lbnQuIGByZWxhdGVkVGFyZ2V0YCBpcyBudWxsLlxuICogICAgKiBgZm9jdXNpbmAgaXMgKm5vdCogZmlyZWQgb24gYGJvZHlgLlxuICpcbiAqXG4gKiBJbiBzdW1tYXJ5OlxuICogMS4gRm9jdXMgZXZlbnRzICpkbyogbm90aWZ5IHVzIG9mIGFsbCBjaGFuZ2VzIGluIGZvY3VzLCBidXQgdGhlcmUgaXMgbm8gb25lIHNpbmdsZSBjb21wcmVoZW5zaXZlIGV2ZW50IHRoYXQgcHJvdmlkZXMgdXMgd2l0aCBhbGwgYXZhaWxhYmxlIGluZm9ybWF0aW9uLlxuICogMi4gYGRvY3VtZW50LmFjdGl2ZUVsZW1lbnRgICppcyBub3QqIGFsd2F5cyB0aGUgc2FtZSBhcyB3aGF0J3MgYmVpbmcgcmVmZXJlbmNlZCBieSBhIGZvY3VzIGV2ZW50LiBJbiBwYXJ0aWN1bGFyLCBpdCBtYXkgYmVjb21lIGBib2R5YCBhdCBhbnkgYXJiaXRyYXJ5IHRpbWUuXG4gKiAzLiBBIGBibHVyYCB3aXRob3V0IGEgYGZvY3VzYCBjYW4gYW5kIHdpbGwgb2NjdXIuIFRoaXMgbWVhbnMgaXQgaXMgbm90IHBvc3NpYmxlIHRvIHNvbGVseSB1c2UgYGZvY3VzYCB0byBkZXRlY3QgYWxsIGNoYW5nZXMuXG4gKiA0LiBBIGBibHVyYCBldmVudCB3aG9zZSBgcmVsYXRlZFRhcmdldGAgaXMgbnVsbCBpbmRpY2F0ZXMgdGhhdCB0aGVyZSB3aWxsIGJlIG5vIGZvbGxvd2luZyBgZm9jdXNgIGV2ZW50LlxuICpcbiAqXG4gKiBAcGFyYW0gY2FsbGJhY2tcbiAqIEByZXR1cm5zXG4gKi9cbmxldCBjdXJyZW50bHlGb2N1c2VkRWxlbWVudCA9IG51bGw7XG5sZXQgbGFzdEZvY3VzZWRFbGVtZW50ID0gbnVsbDtcbmZ1bmN0aW9uIGdldExhc3RGb2N1c2VkRWxlbWVudCgpIHtcbiAgICByZXR1cm4gbGFzdEZvY3VzZWRFbGVtZW50O1xufVxuZnVuY3Rpb24gZ2V0Q3VycmVudGx5Rm9jdXNlZEVsZW1lbnQoKSB7XG4gICAgcmV0dXJuIGN1cnJlbnRseUZvY3VzZWRFbGVtZW50O1xufVxuY29uc3QgdXBkYXRlcnMgPSBuZXcgU2V0KCk7XG5mdW5jdGlvbiBmb2N1c291dChlKSB7XG4gICAgaWYgKGUucmVsYXRlZFRhcmdldCA9PSBudWxsKSB7XG4gICAgICAgIGN1cnJlbnRseUZvY3VzZWRFbGVtZW50ID0gbnVsbDtcbiAgICAgICAgZm9yIChsZXQgZiBvZiB1cGRhdGVycykge1xuICAgICAgICAgICAgZih7IGN1cnJlbnQ6IGN1cnJlbnRseUZvY3VzZWRFbGVtZW50LCBsYXN0OiBsYXN0Rm9jdXNlZEVsZW1lbnQsIHdpbmRvd0ZvY3VzZWQgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIC8vIEp1c3Qgd2FpdCBmb3IgdGhlIGZvY3VzaW4gZXZlbnQuXG4gICAgfVxufVxuZnVuY3Rpb24gZm9jdXNpbihlKSB7XG4gICAgY3VycmVudGx5Rm9jdXNlZEVsZW1lbnQgPSBsYXN0Rm9jdXNlZEVsZW1lbnQgPSBlLnRhcmdldDtcbiAgICBmb3IgKGxldCBmIG9mIHVwZGF0ZXJzKSB7XG4gICAgICAgIGYoeyBjdXJyZW50OiBjdXJyZW50bHlGb2N1c2VkRWxlbWVudCwgbGFzdDogbGFzdEZvY3VzZWRFbGVtZW50LCB3aW5kb3dGb2N1c2VkIH0pO1xuICAgIH1cbn1cbmxldCB3aW5kb3dGb2N1c2VkID0gdHJ1ZTtcbmZ1bmN0aW9uIHdpbmRvd0ZvY3VzKCkge1xuICAgIHdpbmRvd0ZvY3VzZWQgPSB0cnVlO1xuICAgIGZvciAobGV0IGYgb2YgdXBkYXRlcnMpIHtcbiAgICAgICAgZih7IGN1cnJlbnQ6IGN1cnJlbnRseUZvY3VzZWRFbGVtZW50LCBsYXN0OiBsYXN0Rm9jdXNlZEVsZW1lbnQsIHdpbmRvd0ZvY3VzZWQgfSk7XG4gICAgfVxufVxuZnVuY3Rpb24gd2luZG93Qmx1cigpIHtcbiAgICB3aW5kb3dGb2N1c2VkID0gZmFsc2U7XG4gICAgZm9yIChsZXQgZiBvZiB1cGRhdGVycykge1xuICAgICAgICBmKHsgY3VycmVudDogY3VycmVudGx5Rm9jdXNlZEVsZW1lbnQsIGxhc3Q6IGxhc3RGb2N1c2VkRWxlbWVudCwgd2luZG93Rm9jdXNlZCB9KTtcbiAgICB9XG59XG5leHBvcnQgZnVuY3Rpb24gdXNlQWN0aXZlRWxlbWVudChmaWx0ZXIpIHtcbiAgICBjb25zdCBbaSwgc2V0SV0gPSB1c2VTdGF0ZSgwKTtcbiAgICB1c2VMYXlvdXRFZmZlY3QoKCkgPT4ge1xuICAgICAgICBjb25zdCBGID0gKGluZm8pID0+IHtcbiAgICAgICAgICAgIGlmIChmaWx0ZXIgPT0gbnVsbCB8fCBmaWx0ZXIoaW5mbykpXG4gICAgICAgICAgICAgICAgc2V0SShpID0+ICsraSk7XG4gICAgICAgIH07XG4gICAgICAgIGlmICh1cGRhdGVycy5zaXplID09PSAwKSB7XG4gICAgICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiZm9jdXNpblwiLCBmb2N1c2luLCB7IHBhc3NpdmU6IHRydWUgfSk7XG4gICAgICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiZm9jdXNvdXRcIiwgZm9jdXNvdXQsIHsgcGFzc2l2ZTogdHJ1ZSB9KTtcbiAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiZm9jdXNcIiwgd2luZG93Rm9jdXMsIHsgcGFzc2l2ZTogdHJ1ZSB9KTtcbiAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiYmx1clwiLCB3aW5kb3dCbHVyLCB7IHBhc3NpdmU6IHRydWUgfSk7XG4gICAgICAgIH1cbiAgICAgICAgdXBkYXRlcnMuYWRkKEYpO1xuICAgICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICAgICAgdXBkYXRlcnMuZGVsZXRlKEYpO1xuICAgICAgICAgICAgaWYgKHVwZGF0ZXJzLnNpemUgPT09IDApIHtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwiZm9jdXNpblwiLCBmb2N1c2luKTtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwiZm9jdXNvdXRcIiwgZm9jdXNvdXQpO1xuICAgICAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwiZm9jdXNcIiwgd2luZG93Rm9jdXMpO1xuICAgICAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwiYmx1clwiLCB3aW5kb3dCbHVyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICB9LCBbZmlsdGVyXSk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgYWN0aXZlRWxlbWVudDogY3VycmVudGx5Rm9jdXNlZEVsZW1lbnQsXG4gICAgICAgIGxhc3RBY3RpdmVFbGVtZW50OiBsYXN0Rm9jdXNlZEVsZW1lbnQsXG4gICAgICAgIGdldEFjdGl2ZUVsZW1lbnQ6IGdldEN1cnJlbnRseUZvY3VzZWRFbGVtZW50LFxuICAgICAgICBnZXRMYXN0QWN0aXZlRWxlbWVudDogZ2V0TGFzdEZvY3VzZWRFbGVtZW50LFxuICAgICAgICB3aW5kb3dGb2N1c2VkXG4gICAgfTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZS1hY3RpdmUtZWxlbWVudC5qcy5tYXAiLCJpbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlTGF5b3V0RWZmZWN0LCB1c2VNZW1vIH0gZnJvbSBcInByZWFjdC9ob29rc1wiO1xuaW1wb3J0IHsgdXNlQWN0aXZlRWxlbWVudCB9IGZyb20gXCIuL3VzZS1hY3RpdmUtZWxlbWVudFwiO1xuaW1wb3J0IHsgdXNlUmVmRWxlbWVudCB9IGZyb20gXCIuL3VzZS1yZWYtZWxlbWVudFwiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwiLi91c2Utc3RhdGVcIjtcbmV4cG9ydCBmdW5jdGlvbiB1c2VIYXNGb2N1cyh7fSA9IHt9KSB7XG4gICAgLy8gVGhlc2UgYXJlIHNsaWdodGx5IHJlZHVuZGFudCwgYnV0IGFueSB0aW1lIHRoZSBmb2N1cyBjaGFuZ2VzLCB3ZSBuZWVkIHRvIGtub3cgaWYgaXQncyBcInJlbGV2YW50XCIgdG8gdXMuXG4gICAgLy8gSXQncyBcInJlbGV2YW50XCIgaWYgdGhlIG5ld2x5LWZvY3VzZWQgZWxlbWVudCBpcyBhIGNoaWxkIG9mIHVzLFxuICAgIC8vIE9SIGlmIHdlJ3JlIGZvY3VzZWQgYW5kIGZvY3VzIG1vdmVzIE9VVFNJREUgb2YgdXMgb3VyIG91ciBjaGlsZHJlbi5cbiAgICAvLyBCZWNhdXNlIG9mIHRoYXQgc2Vjb25kIGJpdCwgd2UgbmVlZCB0byBrZWVwIHRyYWNrIG9mIHdoZXJlIHRoZSBmb2N1cyB3YXMgdGhlIGxhc3QgdGltZSB3ZSBjaGVja2VkIGZvciB0aGUgZmlsdGVyLlxuICAgIGNvbnN0IFtoYXNGb2N1cywgc2V0SGFzRm9jdXMsIGdldEhhc0ZvY3VzXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBbaGFzTGFzdEZvY3VzLCBzZXRIYXNMYXN0Rm9jdXMsIGdldEhhc0xhc3RGb2N1c10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgeyBlbGVtZW50LCBnZXRFbGVtZW50LCB1c2VSZWZFbGVtZW50UHJvcHMgfSA9IHVzZVJlZkVsZW1lbnQoKTtcbiAgICBjb25zdCB7IGFjdGl2ZUVsZW1lbnQsIGxhc3RBY3RpdmVFbGVtZW50IH0gPSB1c2VBY3RpdmVFbGVtZW50KHVzZUNhbGxiYWNrKCh7IGN1cnJlbnQsIGxhc3QsIHdpbmRvd0ZvY3VzZWQgfSkgPT4ge1xuICAgICAgICAvLyBLZWVwIGluIG1pbmQgdGhhdCBvbmNlIHdlIGdldCBvdXIgZWxlbWVudCwgZXZlbiBpZiB0aGUgaG9vayBhbmQgZmlsdGVyIGZ1bmN0aW9uc1xuICAgICAgICAvLyBkb24ndCByZS1ydW4sIHRoZSBjdXJyZW50bHktZm9jdXNlZCBlbGVtZW50IHdpbGwgc3RpbGwgYmUgcmV0dXJuZWQgYmVsb3csIGFuZCxcbiAgICAgICAgLy8gZXZlbiBpZiBpdCdzIG5vdCB1cyBvciBvbmUgb2Ygb3VyIGNoaWxkcmVuLCB3aWxsIHN0aWxsIGJlIHNhZmVseSBmaWx0ZXJlZCBvdXQgYXQgcmVuZGVyIHRpbWUuXG4gICAgICAgIGxldCBlbGVtZW50ID0gZ2V0RWxlbWVudCgpO1xuICAgICAgICBpZiAoIWVsZW1lbnQpXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIGxldCBoYXNGb2N1c05vdyA9IChlbGVtZW50LmNvbnRhaW5zKGN1cnJlbnQpIHx8IGVsZW1lbnQuY29udGFpbnMobGFzdCkpO1xuICAgICAgICBpZiAoaGFzRm9jdXNOb3cpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgbGV0IGhhZEZvY3VzQmVmb3JlVGhpcyA9IChnZXRIYXNMYXN0Rm9jdXMoKSB8fCBnZXRIYXNGb2N1cygpKTtcbiAgICAgICAgICAgIGlmIChoYWRGb2N1c0JlZm9yZVRoaXMpIHtcbiAgICAgICAgICAgICAgICAvLyBSZXR1cm4gdHJ1ZSBvbmNlLCBzbyB0aGF0IHVzZUFjdGl2ZUVsZW1lbnQgd2lsbCByZXR1cm4gb25lIGluc3RhbmNlIG9mIGEgZGlmZmVyZW50IGVsZW1lbnQgaGF2aW5nIGZvY3VzLlxuICAgICAgICAgICAgICAgIC8vIFRoZW4sIGJhY2sgb3V0c2lkZSB0aGlzIGZpbHRlciBmdW5jdGlvbiwgd2UnbGwga25vdyB0aGF0IHdlJ3JlIG5vIGxvbmdlciBmb2N1c2VkLlxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfSwgW10pKTtcbiAgICAvLyBUaGVzZSBhcmUgcHJpbWFyaWx5IHVzZWQgZm9yIGJvb2trZWVwaW5nIGR1cmluZyB0aGUgZmlsdGVyIGZ1bmN0aW9uIGFib3ZlLlxuICAgIHVzZUxheW91dEVmZmVjdCgoKSA9PiB7IHNldEhhc0ZvY3VzKGVsZW1lbnQ/LmNvbnRhaW5zKGFjdGl2ZUVsZW1lbnQpID8/IGZhbHNlKTsgfSwgW2VsZW1lbnQsIGFjdGl2ZUVsZW1lbnRdKTtcbiAgICB1c2VMYXlvdXRFZmZlY3QoKCkgPT4geyBzZXRIYXNMYXN0Rm9jdXMoZWxlbWVudD8uY29udGFpbnMobGFzdEFjdGl2ZUVsZW1lbnQpID8/IGZhbHNlKTsgfSwgW2VsZW1lbnQsIGxhc3RBY3RpdmVFbGVtZW50XSk7XG4gICAgY29uc3QgdXNlSGFzRm9jdXNQcm9wcyA9IHVzZUNhbGxiYWNrKChwcm9wcykgPT4geyByZXR1cm4gdXNlUmVmRWxlbWVudFByb3BzKHByb3BzKTsgfSwgW3VzZVJlZkVsZW1lbnRQcm9wc10pO1xuICAgIGNvbnN0IGZvY3VzZWQgPSB1c2VNZW1vKCgpID0+IHsgcmV0dXJuIGVsZW1lbnQgPT0gYWN0aXZlRWxlbWVudDsgfSwgW2VsZW1lbnQsIGFjdGl2ZUVsZW1lbnRdKTtcbiAgICBjb25zdCBmb2N1c2VkSW5uZXIgPSB1c2VNZW1vKCgpID0+IHsgcmV0dXJuIGVsZW1lbnQ/LmNvbnRhaW5zKGFjdGl2ZUVsZW1lbnQpID8/IGZhbHNlOyB9LCBbZWxlbWVudCwgYWN0aXZlRWxlbWVudF0pO1xuICAgIGNvbnN0IGxhc3RGb2N1c2VkID0gdXNlTWVtbygoKSA9PiB7IHJldHVybiBlbGVtZW50ID09IGxhc3RBY3RpdmVFbGVtZW50OyB9LCBbZWxlbWVudCwgbGFzdEFjdGl2ZUVsZW1lbnRdKTtcbiAgICBjb25zdCBsYXN0Rm9jdXNlZElubmVyID0gdXNlTWVtbygoKSA9PiB7IHJldHVybiBlbGVtZW50Py5jb250YWlucyhsYXN0QWN0aXZlRWxlbWVudCkgPz8gZmFsc2U7IH0sIFtlbGVtZW50LCBsYXN0QWN0aXZlRWxlbWVudF0pO1xuICAgIHJldHVybiB7XG4gICAgICAgIHVzZUhhc0ZvY3VzUHJvcHMsXG4gICAgICAgIGZvY3VzZWQsXG4gICAgICAgIGZvY3VzZWRJbm5lcixcbiAgICAgICAgbGFzdEZvY3VzZWQsXG4gICAgICAgIGxhc3RGb2N1c2VkSW5uZXJcbiAgICB9O1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXNlLWhhcy1mb2N1cy5qcy5tYXAiLCJpbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlUmVmIH0gZnJvbSBcInByZWFjdC9ob29rc1wiO1xuaW1wb3J0IHsgdXNlTGF5b3V0RWZmZWN0IH0gZnJvbSBcIi4vdXNlLWxheW91dC1lZmZlY3RcIjtcbmltcG9ydCB7IHVzZVJlZkVsZW1lbnQgfSBmcm9tIFwiLi91c2UtcmVmLWVsZW1lbnRcIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcIi4vdXNlLXN0YXRlXCI7XG4vKipcbiAqIEFsbG93cyBhIHBhcmVudCBjb21wb25lbnQgdG8gYWNjZXNzIGluZm9ybWF0aW9uIGFib3V0IGNlcnRhaW5cbiAqIGNoaWxkIGNvbXBvbmVudHMgb25jZSB0aGV5IGhhdmUgcmVuZGVyZWQuXG4gKlxuICogVGhpcyBob29rIGlzIHNsaWdodGx5IG1vcmUgY29tcGxpY2F0ZWQgaW4gdGhhdCBpdCByZXR1cm5zIGJvdGggYVxuICogcHJvcC1tb2RpZnlpbmcgaG9vaywgYnV0IGFsc28gYSBob29rIHRoYXQgZWFjaCBjaGlsZCB3aWxsIG5lZWRcbiAqIHRvIHVzZTogYHVzZU1hbmFnZWRDaGlsZGAuICBJdCdzIHN0YWJsZSBhY3Jvc3MgcmVuZGVycywgc28ganVzdFxuICogdG9zcyBpdCBpbnRvIGEgYENvbnRleHRgIHNvIHRoZSBjaGlsZHJlbiBjYW4gaGF2ZSBhY2Nlc3MgdG8gaXQuXG4gKiBUaGlzIGZ1bmN0aW9uIHJlZ2lzdGVycyB0aGUgY2hpbGQgd2l0aCB0aGUgcGFyZW50IGFuZCBwcm92aWRlc1xuICogaXQgd2l0aCBhbnkgcmVxdWVzdGVkIGluZm9ybWF0aW9uLCBidXQgZG9lc24ndCBkbyBhbnl0aGluZyBlbHNlXG4gKiB1bnRpbCBpdCB1bm1vdW50cyBhbmQgcmV0cmFjdHMgdGhhdCBpbmZvcm1hdGlvbi5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZUNoaWxkTWFuYWdlcigpIHtcbiAgICAvLyBUaGlzIGlzIGJsaW5kbHkgdXBkYXRlZCBhbnkgdGltZSBhIGNoaWxkIG1vdW50cyBvciB1bm1vdW50cyBpdHNlbGYuXG4gICAgLy8gVXNlZCB0byBtYWtlIHN1cmUgdGhhdCBhbnkgdGltZSB0aGUgYXJyYXkgb2YgbWFuYWdlZCBjaGlsZHJlbiB1cGRhdGVzLFxuICAgIC8vIHdlIGFsc28gcmUtcmVuZGVyLlxuICAgIGNvbnN0IFtjaGlsZFVwZGF0ZUluZGV4LCBzZXRDaGlsZFVwZGF0ZUluZGV4XSA9IHVzZVN0YXRlKDApO1xuICAgIGNvbnN0IFt0b3RhbENoaWxkcmVuTW91bnRlZCwgc2V0VG90YWxDaGlsZHJlbk1vdW50ZWQsIGdldFRvdGFsQ2hpbGRyZW5Nb3VudGVkXSA9IHVzZVN0YXRlKDApO1xuICAgIGNvbnN0IFt0b3RhbENoaWxkcmVuVW5vdW50ZWQsIHNldFRvdGFsQ2hpbGRyZW5Vbm91bnRlZCwgZ2V0VG90YWxDaGlsZHJlblVub3VudGVkXSA9IHVzZVN0YXRlKDApO1xuICAgIGNvbnN0IGNoaWxkcmVuQ3VycmVudGx5TW91bnRlZCA9IHRvdGFsQ2hpbGRyZW5Nb3VudGVkIC0gdG90YWxDaGlsZHJlblVub3VudGVkO1xuICAgIGNvbnN0IG1hbmFnZWRDaGlsZHJlbiA9IHVzZVJlZihbXSAvKiogVE9ETzogQW55IHByb2JsZW1zIGNhdXNlZCBieSB1c2luZyBhbiBhcnJheSB3aGVuIGl0IHNob3VsZCBiZSBhbiBvYmplY3Q/ICovKTtcbiAgICBjb25zdCBtb3VudGVkQ2hpbGRyZW4gPSB1c2VSZWYoW10pO1xuICAgIGNvbnN0IG1vdW50T3JkZXIgPSB1c2VSZWYobmV3IE1hcCgpKTtcbiAgICBjb25zdCBpbmRpY2VzQnlFbGVtZW50ID0gdXNlUmVmKG5ldyBNYXAoKSk7XG4gICAgY29uc3QgZ2V0TW91bnRJbmRleCA9IHVzZUNhbGxiYWNrKChpbmRleCkgPT4geyByZXR1cm4gbW91bnRPcmRlci5jdXJyZW50LmdldChpbmRleCk7IH0sIFtdKTtcbiAgICBjb25zdCB1c2VNYW5hZ2VkQ2hpbGQgPSB1c2VDYWxsYmFjaygoaW5mbykgPT4ge1xuICAgICAgICBjb25zdCB7IGVsZW1lbnQsIGdldEVsZW1lbnQsIHVzZVJlZkVsZW1lbnRQcm9wcyB9ID0gdXNlUmVmRWxlbWVudCgpO1xuICAgICAgICB1c2VMYXlvdXRFZmZlY3QoKCkgPT4ge1xuICAgICAgICAgICAgbGV0IGluZGV4ID0gZ2V0VG90YWxDaGlsZHJlbk1vdW50ZWQoKTtcbiAgICAgICAgICAgIG1vdW50T3JkZXIuY3VycmVudC5zZXQoaW5mby5pbmRleCwgaW5kZXgpO1xuICAgICAgICAgICAgbW91bnRlZENoaWxkcmVuLmN1cnJlbnRbaW5kZXhdID0gaW5mbztcbiAgICAgICAgICAgIHNldFRvdGFsQ2hpbGRyZW5Nb3VudGVkKHQgPT4gKyt0KTtcbiAgICAgICAgICAgIHJldHVybiAoKSA9PiB7IG1vdW50T3JkZXIuY3VycmVudC5kZWxldGUoaW5mby5pbmRleCk7IG1vdW50ZWRDaGlsZHJlbi5jdXJyZW50W2luZGV4XSA9IG51bGw7IHNldFRvdGFsQ2hpbGRyZW5Vbm91bnRlZCh0ID0+ICsrdCk7IH07XG4gICAgICAgIH0sIFtpbmZvLmluZGV4XSk7XG4gICAgICAgIC8vIEFzIHNvb24gYXMgdGhlIGNvbXBvbmVudCBtb3VudHMsIG5vdGlmeSB0aGUgcGFyZW50IGFuZCByZXF1ZXN0IGEgcmVyZW5kZXIuXG4gICAgICAgIHVzZUxheW91dEVmZmVjdCgoW3ByZXZFbGVtZW50LCBwcmV2SW5kZXhdLCBjaGFuZ2VzKSA9PiB7XG4gICAgICAgICAgICBpZiAoZWxlbWVudCkge1xuICAgICAgICAgICAgICAgIGluZGljZXNCeUVsZW1lbnQuY3VycmVudC5zZXQoZWxlbWVudCwgaW5mby5pbmRleCk7XG4gICAgICAgICAgICAgICAgaWYgKG1hbmFnZWRDaGlsZHJlbi5jdXJyZW50W2luZm8uaW5kZXhdICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmFzc2VydChpbmZvLmluZGV4ID09IHVuZGVmaW5lZCwgXCJUd28gY2hpbGRyZW4gd2l0aCB0aGUgc2FtZSBpbmRleCB3ZXJlIGFkZGVkLCB3aGljaCBtYXkgcmVzdWx0IGluIHVuZXhwZWN0ZWQgYmVoYXZpb3IuXCIpO1xuICAgICAgICAgICAgICAgICAgICBkZWJ1Z2dlcjsgLy8gSW50ZW50aW9uYWxcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgc2V0Q2hpbGRVcGRhdGVJbmRleChjID0+ICsrYyk7XG4gICAgICAgICAgICAgICAgbWFuYWdlZENoaWxkcmVuLmN1cnJlbnRbaW5mby5pbmRleF0gPSB7IC4uLmluZm8gfTtcbiAgICAgICAgICAgICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBzZXRDaGlsZFVwZGF0ZUluZGV4KGMgPT4gKytjKTtcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIG1hbmFnZWRDaGlsZHJlbi5jdXJyZW50W2luZm8uaW5kZXhdO1xuICAgICAgICAgICAgICAgICAgICBpbmRpY2VzQnlFbGVtZW50LmN1cnJlbnQuZGVsZXRlKGVsZW1lbnQpO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIFtlbGVtZW50LCBpbmZvLmluZGV4XSk7XG4gICAgICAgIC8vIEFueSB0aW1lIG91ciBjaGlsZCBwcm9wcyBjaGFuZ2UsIG1ha2UgdGhhdCBpbmZvcm1hdGlvbiBhdmFpbGFibGUgZ2VuZXJhbGx5LlxuICAgICAgICAvLyAqRG9uJ3QgcmUtcmVuZGVyKiwgb3RoZXJ3aXNlIHdlJ2QgYmUgc3R1Y2sgaW4gYW5cbiAgICAgICAgLy8gaW5maW5pdGUgbG9vcCBldmVyeSB0aW1lIGFuIGFub255bW91cyBmdW5jdGlvbiBpcyBwYXNzZWQuXG4gICAgICAgIC8vIEl0IGNvbWVzIGluIGZyb20gdGhlIHByb3BzIHNvIHRoZSBjaGlsZCB3YXMgYWxyZWFkeSB1cGRhdGVkIGJ5IGl0IC0tXG4gICAgICAgIC8vIHdlIGRvbid0IG5lZWQgdGhlIHBhcmVudCB0byByZS1yZW5kZXIgZXZlcnkgc2luZ2xlIGNoaWxkIGFueSB0aW1lXG4gICAgICAgIC8vIFwib25DbGlja1wiIHVwZGF0ZXMgb3Igd2hhdGV2ZXIuICBUaGUgcmVsZXZhbnQgY2hpbGQgYWxyZWFkeSBrbm93cyxcbiAgICAgICAgLy8gYW5kIHRoYXQncyB3aGF0IG1hdHRlcnMuXG4gICAgICAgIHVzZUxheW91dEVmZmVjdCgoKSA9PiB7XG4gICAgICAgICAgICBpZiAobWFuYWdlZENoaWxkcmVuLmN1cnJlbnRbaW5mby5pbmRleF0gIT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgICAgIG1hbmFnZWRDaGlsZHJlbi5jdXJyZW50W2luZm8uaW5kZXhdID0geyAuLi5pbmZvIH07XG4gICAgICAgIH0sIFsuLi5PYmplY3QuZW50cmllcyhpbmZvKS5mbGF0KCldKTtcbiAgICAgICAgcmV0dXJuIHsgZWxlbWVudCwgZ2V0RWxlbWVudCwgdXNlTWFuYWdlZENoaWxkUHJvcHM6IHVzZVJlZkVsZW1lbnRQcm9wcyB9O1xuICAgIH0sIFtdKTtcbiAgICByZXR1cm4ge1xuICAgICAgICB1c2VNYW5hZ2VkQ2hpbGQsXG4gICAgICAgIGNoaWxkQ291bnQ6IGNoaWxkcmVuQ3VycmVudGx5TW91bnRlZCxcbiAgICAgICAgbWFuYWdlZENoaWxkcmVuOiBtYW5hZ2VkQ2hpbGRyZW4uY3VycmVudCxcbiAgICAgICAgbW91bnRlZENoaWxkcmVuOiBtb3VudGVkQ2hpbGRyZW4uY3VycmVudCxcbiAgICAgICAgaW5kaWNlc0J5RWxlbWVudDogaW5kaWNlc0J5RWxlbWVudC5jdXJyZW50LFxuICAgICAgICB0b3RhbENoaWxkcmVuTW91bnRlZCxcbiAgICAgICAgdG90YWxDaGlsZHJlblVub3VudGVkLFxuICAgICAgICBnZXRNb3VudEluZGV4XG4gICAgfTtcbn1cbi8qKlxuICogSGVscGVyIGZ1bmN0aW9uIGZvciBsZXR0aW5nIGNoaWxkcmVuIGtub3cgd2hlbiB0aGV5IGFyZSBvciBhcmUgbm90IHRoZVxuICogY3VycmVudCBzZWxlY3RlZC9leHBhbmRlZC9mb2N1c2VkL3doYXRldmVyIGNoaWxkLlxuICpcbiAqIEF1dG9tYXRpY2FsbHkgaGFuZGxlcyB3aGVuIGNoaWxkcmVuIGFyZSBtb3VudGVkICYgdW5tb3VudGVkIGFuZCBzdWNoLlxuICpcbiAqIEBwYXJhbSBhY3RpdmF0ZWRJbmRleCBXaGF0IGluZGV4IHRoZSBjdXJyZW50IHNlbGVjdGVkIChldGMuKSBjaGlsZCBpc1xuICogQHBhcmFtIGxlbmd0aCBIb3cgbWFueSBjaGlsZHJlbiBleGlzdCAoYXMgbWFuYWdlZENoaWxkcmVuLmxlbmd0aClcbiAqIEBwYXJhbSBzZXRGbGFnIEEgZnVuY3Rpb24gdGhhdCBwcm9iYWJseSBsb29rcyBsaWtlIChpLCBmbGFnKSA9PiBtYW5hZ2VkQ2hpbGRyZW5baV0uc2V0QWN0aXZlKGZsYWcpXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VDaGlsZEZsYWcoYWN0aXZhdGVkSW5kZXgsIGxlbmd0aCwgc2V0RmxhZykge1xuICAgIGNvbnN0IFtwcmV2QWN0aXZhdGVkSW5kZXgsIHNldFByZXZBY3RpdmF0ZWRJbmRleCwgZ2V0UHJldkFjdGl2YXRlZEluZGV4XSA9IHVzZVN0YXRlKG51bGwpO1xuICAgIGNvbnN0IFtwcmV2Q2hpbGRDb3VudCwgc2V0UHJldkNoaWxkQ291bnQsIGdldFByZXZDaGlsZENvdW50XSA9IHVzZVN0YXRlKGxlbmd0aCk7XG4gICAgLy8gQW55IHRpbWUgdGhlIG51bWJlciBvZiBjb21wb25lbnRzIGNoYW5nZXMsXG4gICAgLy8gcmVzZXQgYW55IGluaXRpYWwsIHBvc3NpYmx5IGluY29ycmVjdCBzdGF0ZSB0aGV5IG1pZ2h0IGhhdmUgaGFkLCBqdXN0IGluIGNhc2UuXG4gICAgdXNlTGF5b3V0RWZmZWN0KCgpID0+IHtcbiAgICAgICAgY29uc3QgZGlyZWN0aW9uID0gTWF0aC5zaWduKGxlbmd0aCAtIGdldFByZXZDaGlsZENvdW50KCkpO1xuICAgICAgICBpZiAoZGlyZWN0aW9uICE9PSAwKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gZ2V0UHJldkNoaWxkQ291bnQoKSA/PyAwOyBpICE9IGxlbmd0aDsgaSArPSBkaXJlY3Rpb24pIHtcbiAgICAgICAgICAgICAgICBzZXRGbGFnKGksIGkgPT09IGFjdGl2YXRlZEluZGV4KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNldFByZXZDaGlsZENvdW50KGxlbmd0aCk7XG4gICAgICAgIH1cbiAgICB9LCBbc2V0RmxhZywgYWN0aXZhdGVkSW5kZXgsIGxlbmd0aF0pO1xuICAgIHVzZUxheW91dEVmZmVjdCgoKSA9PiB7XG4gICAgICAgIC8vIERlYWN0aXZhdGUgdGhlIHByZXZpb3VzbHkgYWN0aXZhdGVkIGNvbXBvbmVudFxuICAgICAgICBjb25zdCBwcmV2QWN0aXZhdGVkSW5kZXggPSBnZXRQcmV2QWN0aXZhdGVkSW5kZXgoKTtcbiAgICAgICAgaWYgKHByZXZBY3RpdmF0ZWRJbmRleCAhPSBhY3RpdmF0ZWRJbmRleCkge1xuICAgICAgICAgICAgaWYgKHByZXZBY3RpdmF0ZWRJbmRleCAhPSBudWxsICYmIHByZXZBY3RpdmF0ZWRJbmRleCA+PSAwICYmIHByZXZBY3RpdmF0ZWRJbmRleCA8IGxlbmd0aClcbiAgICAgICAgICAgICAgICBzZXRGbGFnKHByZXZBY3RpdmF0ZWRJbmRleCwgZmFsc2UpO1xuICAgICAgICB9XG4gICAgICAgIC8vIEFjdGl2YXRlIHRoZSBjdXJyZW50IGNvbXBvbmVudFxuICAgICAgICBpZiAoYWN0aXZhdGVkSW5kZXggIT0gbnVsbCAmJiBhY3RpdmF0ZWRJbmRleCA+PSAwICYmIGFjdGl2YXRlZEluZGV4IDwgbGVuZ3RoKSB7XG4gICAgICAgICAgICBzZXRGbGFnKGFjdGl2YXRlZEluZGV4LCB0cnVlKTtcbiAgICAgICAgICAgIHNldFByZXZBY3RpdmF0ZWRJbmRleChhY3RpdmF0ZWRJbmRleCk7XG4gICAgICAgIH1cbiAgICB9LCBbc2V0RmxhZywgYWN0aXZhdGVkSW5kZXgsIGxlbmd0aF0pO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXNlLWNoaWxkLW1hbmFnZXIuanMubWFwIiwiaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSBcInByZWFjdC9ob29rc1wiO1xuaW1wb3J0IHsgdXNlTWVyZ2VkUHJvcHMgfSBmcm9tIFwiLi91c2UtbWVyZ2VkLXByb3BzXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCIuL3VzZS1zdGF0ZVwiO1xuaW1wb3J0IHsgdXNlQ2hpbGRNYW5hZ2VyLCB1c2VDaGlsZEZsYWcgfSBmcm9tIFwiLi91c2UtY2hpbGQtbWFuYWdlclwiO1xuaW1wb3J0IHsgdXNlU3RhYmxlR2V0dGVyIH0gZnJvbSBcIi4vdXNlLXN0YWJsZS1nZXR0ZXJcIjtcbi8qKlxuICogSW1wbGVtZW50cyBhIHJvdmluZyB0YWJpbmRleCBzeXN0ZW0gd2hlcmUgb25seSBvbmUgXCJmb2N1c2FibGVcIlxuICogY29tcG9uZW50IGluIGEgc2V0IGlzIGFibGUgdG8gcmVjZWl2ZSBhIHRhYiBmb2N1cy4gKldoaWNoKlxuICogb2YgdGhvc2UgZWxlbWVudHMgcmVjZWl2ZXMgZm9jdXMgaXMgZGV0ZXJtaW5lZCBieSB5b3UsIGJ1dCBpdCdzXG4gKiByZWNvbW1lbmRlZCB0byBvZmZsb2FkIHRoYXQgbG9naWMgdGhlbiB0byBhbm90aGVyIGhvb2ssIGxpa2VcbiAqIGB1c2VMaW5lYXJOYXZpZ2F0aW9uYCwgd2hpY2ggbGV0cyB5b3UgY2hhbmdlIHRoZSB0YWJiYWJsZVxuICogZWxlbWVudCB3aXRoIHRoZSBhcnJvdyBrZXlzLCBgdXNlVHlwZWFoZWFkTmF2aWdhdGlvbmAsIHdoaWNoXG4gKiBsZXRzIHlvdSBjaGFuZ2UgdGhlIHRhYmJhYmxlIGluZGV4IHdpdGggdHlwZWFoZWFkLCBvclxuICogYHVzZUxpc3ROYXZpZ2F0aW9uYCBpZiB5b3UganVzdCB3YW50IGV2ZXJ5dGhpbmcgYnVuZGxlZCB0b2dldGhlci5cbiAqXG4gKiBOb3RlIHRoYXQgdGhlIGNoaWxkIGhvb2sgcmV0dXJuZWQgYnkgdGhpcyBmdW5jdGlvbiBtdXN0IGJlIHVzZWRcbiAqIGJ5IGV2ZXJ5IGNoaWxkIHRoYXQgdXNlcyB0aGlzIHJvdmluZyB0YWJpbmRleCBsb2dpYy4gIFRoZVxuICogcHJvcC1tb2RpZnlpbmcgaG9vayAqdGhhdCogaG9vayByZXR1cm5zIHNob3VsZCB0aGVuIGJlIHVzZWRcbiAqIG9uIHRoZSBjaGlsZCdzIGVsZW1lbnQsIGFzIHdlbGwgYXMgYW55IG90aGVyIGVsZW1lbnRzIHlvdSdkIGxpa2VcbiAqIHRvIGJlIGV4cGxpY2l0bHkgbWFkZSB1bnRhYmJhYmxlIHRvby5cbiAqXG4gKiBgZm9jdXNPbkNoYW5nZWAgc2hvdWxkIGJlIHNldCB0byB0cnVlIGlmIGZvY3VzIGlzXG4gKiBjb250YWluZWQgd2l0aGluIHdoYXRldmVyIGVsZW1lbnQgY29udGFpbnMgdGhlIHJvdmluZyB0YWIgaW5kZXguXG4gKiBHZW5lcmFsbHkgYXMgc2ltcGxlIGFzIHRoZSBmb2xsb3dpbmc6XG4gKiBgYGBcbiAqIGNvbnN0IHsgZm9jdXNlZCwgZm9jdXNlZElubmVyLCB1c2VIYXNGb2N1c1Byb3BzIH0gPSB1c2VIYXNGb2N1czxQYXJlbnRFbGVtZW50PigpO1xuICogY29uc3QgZm9jdXNPbkNoYW5nZSA9IChmb2N1c2VkSW5uZXIgIT0gZmFsc2UpO1xuICogYGBgXG4gKiBJdCdzIG5vdCBpbmNsdWRlZCBoZXJlIGJlY2F1c2UgYHVzZVJvdmluZ1RhYkluZGV4YCBkb2Vzbid0IGtub3dcbiAqIGFueXRoaW5nIGFib3V0IHRoZSBjb250YWluZXIgZWxlbWVudCwgb25seSBjaGlsZHJlbiBlbGVtZW50cy5cbiAqIEFuZCBqdXN0IGFzIHdlbGwhIENoaWxkcmVuIHNob3VsZCBiZSBhbGxvd2VkIGF0IHRoZSByb290LFxuICogcmVnYXJkbGVzcyBvZiBpZiBpdCdzIHRoZSB3aG9sZSBhcHAgb3IganVzdCBhIGdpdmVuIGNvbXBvbmVudC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZVJvdmluZ1RhYkluZGV4KHsgZm9jdXNPbkNoYW5nZTogZm9jLCB0YWJiYWJsZUluZGV4IH0pIHtcbiAgICBjb25zdCBbcmVyZW5kZXJBbmRGb2N1cywgc2V0UmVyZW5kZXJBbmRGb2N1c10gPSB1c2VTdGF0ZShudWxsKTtcbiAgICBjb25zdCBnZXRGb2N1c09uQ2hhbmdlID0gdXNlU3RhYmxlR2V0dGVyKGZvYyk7XG4gICAgY29uc3QgZ2V0VGFiYmFibGVJbmRleCA9IHVzZVN0YWJsZUdldHRlcih0YWJiYWJsZUluZGV4KTtcbiAgICBjb25zdCBwcmV2VGFiYmFibGUgPSB1c2VSZWYoLUluZmluaXR5KTtcbiAgICAvLyBDYWxsIHRoZSBob29rIHRoYXQgYWxsb3dzIHVzIHRvIGNvbGxlY3QgaW5mb3JtYXRpb24gZnJvbSBjaGlsZHJlbiB3aG8gcHJvdmlkZSBpdFxuICAgIGNvbnN0IHsgbWFuYWdlZENoaWxkcmVuLCBjaGlsZENvdW50LCB1c2VNYW5hZ2VkQ2hpbGQsIGluZGljZXNCeUVsZW1lbnQsIC4uLnJlc3QgfSA9IHVzZUNoaWxkTWFuYWdlcigpO1xuICAgIC8vIEFueSB0aW1lIHRoZSB0YWJiYWJsZSBpbmRleCBjaGFuZ2VzLFxuICAgIC8vIG5vdGlmeSB0aGUgcHJldmlvdXMgY2hpbGQgdGhhdCBpdCdzIG5vIGxvbmdlciB0YWJiYWJsZSxcbiAgICAvLyBhbmQgbm90aWZ5IHRoZSBuZXh0IGNoaWxkIHRoYXQgaXMgYWxsb3dlZCB0byBiZSB0YWJiZWQgdG8uXG4gICAgdXNlQ2hpbGRGbGFnKHRhYmJhYmxlSW5kZXgsIGNoaWxkQ291bnQsIChpbmRleCwgdGFiYmFibGUpID0+IHtcbiAgICAgICAgaWYgKGluZGV4ICE9IG51bGwpXG4gICAgICAgICAgICBtYW5hZ2VkQ2hpbGRyZW5baW5kZXhdPy5zZXRUYWJiYWJsZSh0YWJiYWJsZSk7XG4gICAgfSk7XG4gICAgY29uc3QgZm9jdXNTZWxmID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgICAgICBpZiAodGFiYmFibGVJbmRleCAhPSBudWxsKVxuICAgICAgICAgICAgbWFuYWdlZENoaWxkcmVuW3RhYmJhYmxlSW5kZXhdLnNldFRhYmJhYmxlKHRydWUpO1xuICAgIH0sIFt0YWJiYWJsZUluZGV4XSk7XG4gICAgY29uc3QgdXNlUm92aW5nVGFiSW5kZXhDaGlsZCA9IHVzZUNhbGxiYWNrKChpbmZvKSA9PiB7XG4gICAgICAgIGNvbnN0IFtycmFmSW5kZXgsIHNldFJyYWZJbmRleF0gPSB1c2VTdGF0ZSgxKTtcbiAgICAgICAgY29uc3QgcmVyZW5kZXJBbmRGb2N1cyA9IHVzZUNhbGxiYWNrKCgpID0+IHsgc2V0UnJhZkluZGV4KGkgPT4gKytpKTsgfSwgW10pO1xuICAgICAgICBsZXQgbmV3SW5mbyA9IHtcbiAgICAgICAgICAgIC4uLmluZm8sXG4gICAgICAgICAgICByZXJlbmRlckFuZEZvY3VzLFxuICAgICAgICAgICAgc2V0VGFiYmFibGU6IHVzZUNhbGxiYWNrKCh0YWJiYWJsZSkgPT4geyBzZXRUYWJiYWJsZSh0YWJiYWJsZSk7IH0sIFtdKVxuICAgICAgICB9O1xuICAgICAgICBjb25zdCB7IGVsZW1lbnQsIGdldEVsZW1lbnQsIHVzZU1hbmFnZWRDaGlsZFByb3BzIH0gPSB1c2VNYW5hZ2VkQ2hpbGQobmV3SW5mbyk7XG4gICAgICAgIC8vIFRPRE86IFVzaW5nIGdldFRhYmJhYmxlSW5kZXggZHVyaW5nIHJlbmRlciBwaGFzZSBvbiBtb3VudFxuICAgICAgICBjb25zdCBbdGFiYmFibGUsIHNldFRhYmJhYmxlXSA9IHVzZVN0YXRlKGdldFRhYmJhYmxlSW5kZXgoKSA9PSBpbmZvLmluZGV4KTtcbiAgICAgICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgICAgIGlmIChlbGVtZW50ICYmIHRhYmJhYmxlKSB7XG4gICAgICAgICAgICAgICAgc2V0UmVyZW5kZXJBbmRGb2N1cyhfID0+IHJlcmVuZGVyQW5kRm9jdXMpO1xuICAgICAgICAgICAgICAgIGlmIChnZXRGb2N1c09uQ2hhbmdlKCkgJiYgXCJmb2N1c1wiIGluIGVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXVlTWljcm90YXNrKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmZvY3VzKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LCBbZWxlbWVudCwgdGFiYmFibGUsIHJyYWZJbmRleF0pO1xuICAgICAgICBmdW5jdGlvbiB1c2VSb3ZpbmdUYWJJbmRleFNpYmxpbmdQcm9wcyh7IHRhYkluZGV4LCAuLi5wcm9wcyB9KSB7XG4gICAgICAgICAgICBpZiAodGFiSW5kZXggPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGlmICh0YWJiYWJsZSlcbiAgICAgICAgICAgICAgICAgICAgdGFiSW5kZXggPSAwO1xuICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgdGFiSW5kZXggPSAtMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB1c2VNZXJnZWRQcm9wcygpKHsgdGFiSW5kZXggfSwgcHJvcHMpO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIHVzZVJvdmluZ1RhYkluZGV4Q2hpbGRQcm9wcyh7IHRhYkluZGV4LCAuLi5wcm9wcyB9KSB7XG4gICAgICAgICAgICBpZiAodGFiSW5kZXggPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGlmICh0YWJiYWJsZSlcbiAgICAgICAgICAgICAgICAgICAgdGFiSW5kZXggPSAwO1xuICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgdGFiSW5kZXggPSAtMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB1c2VNZXJnZWRQcm9wcygpKHVzZU1hbmFnZWRDaGlsZFByb3BzKHsgdGFiSW5kZXggfSksIHByb3BzKTtcbiAgICAgICAgfVxuICAgICAgICA7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB1c2VSb3ZpbmdUYWJJbmRleENoaWxkUHJvcHMsXG4gICAgICAgICAgICB1c2VSb3ZpbmdUYWJJbmRleFNpYmxpbmdQcm9wcyxcbiAgICAgICAgICAgIHRhYmJhYmxlXG4gICAgICAgIH07XG4gICAgfSwgW3VzZU1hbmFnZWRDaGlsZF0pO1xuICAgIHJldHVybiB7XG4gICAgICAgIHVzZVJvdmluZ1RhYkluZGV4Q2hpbGQsXG4gICAgICAgIGNoaWxkQ291bnQsXG4gICAgICAgIG1hbmFnZWRDaGlsZHJlbixcbiAgICAgICAgaW5kaWNlc0J5RWxlbWVudCxcbiAgICAgICAgZm9jdXNDdXJyZW50OiByZXJlbmRlckFuZEZvY3VzLFxuICAgICAgICAuLi5yZXN0XG4gICAgfTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZS1yb3ZpbmctdGFiaW5kZXguanMubWFwIiwiaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSBcInByZWFjdC9ob29rc1wiO1xuaW1wb3J0IHsgdXNlUmVmRWxlbWVudCB9IGZyb20gXCIuL3VzZS1yZWYtZWxlbWVudFwiO1xuaW1wb3J0IHsgdXNlTGF5b3V0RWZmZWN0IH0gZnJvbSBcIi4vdXNlLWxheW91dC1lZmZlY3RcIjtcbmltcG9ydCB7IHVzZU1lcmdlZFByb3BzIH0gZnJvbSBcIi4vdXNlLW1lcmdlZC1wcm9wc1wiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwiLi91c2Utc3RhdGVcIjtcbmltcG9ydCB7IHVzZVRpbWVvdXQgfSBmcm9tIFwiLi91c2UtdGltZW91dFwiO1xuaW1wb3J0IHsgdXNlTG9naWNhbERpcmVjdGlvbiB9IGZyb20gXCIuL3VzZS1sb2dpY2FsLWRpcmVjdGlvblwiO1xuaW1wb3J0IHsgdXNlU3RhYmxlQ2FsbGJhY2sgfSBmcm9tIFwiLi91c2Utc3RhYmxlLWNhbGxiYWNrXCI7XG4vKipcbiAqIFdoZW4gdXNlZCBpbiB0YW5kZW0gd2l0aCBgdXNlUm92aW5nVGFiSW5kZXhgLCBhbGxvd3MgY29udHJvbCBvZlxuICogdGhlIHRhYmJhYmxlIGluZGV4IHdpdGggdGhlIGFycm93IGtleXMuXG4gKlxuICogQHNlZSB1c2VMaXN0TmF2aWdhdGlvbiwgd2hpY2ggcGFja2FnZXMgZXZlcnl0aGluZyB1cCB0b2dldGhlci5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZUxpbmVhck5hdmlnYXRpb24oeyBnZXRJbmRleCwgc2V0SW5kZXgsIG1hbmFnZWRDaGlsZHJlbiwgbmF2aWdhdGlvbkRpcmVjdGlvbiB9KSB7XG4gICAgbmF2aWdhdGlvbkRpcmVjdGlvbiA/Pz0gXCJlaXRoZXJcIjtcbiAgICBjb25zdCBpbmRleCA9IGdldEluZGV4KCk7XG4gICAgY29uc3QgY2hpbGRDb3VudCA9IG1hbmFnZWRDaGlsZHJlbi5sZW5ndGg7XG4gICAgLy8gTWFrZSBzdXJlIHRoZSB0YWJiYWJsZSBpbmRleCBuZXZlciBlc2NhcGVzIHRoZSBib3VuZHMgb2YgYWxsIGF2YWlsYWJsZSBjaGlsZHJlblxuICAgIC8vIFRPRE86IEtlZXAgdHJhY2sgb2YgdGhlIG9yaWdpbmFsIGluZGV4IGFuZCBrZWVwIGl0LCBhdCBsZWFzdCB1bnRpbCBrZXlib2FyZCBuYXZpZ2F0aW9uLlxuICAgIHVzZUxheW91dEVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGlmIChpbmRleCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgaWYgKGluZGV4IDwgMCkge1xuICAgICAgICAgICAgICAgIHNldEluZGV4KDApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoY2hpbGRDb3VudCA+IDAgJiYgaW5kZXggPj0gY2hpbGRDb3VudCkge1xuICAgICAgICAgICAgICAgIHNldEluZGV4KGNoaWxkQ291bnQgLSAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sIFtpbmRleCwgY2hpbGRDb3VudF0pO1xuICAgIC8vIFRoZXNlIGFsbG93IHVzIHRvIG1hbmlwdWxhdGUgd2hhdCBvdXIgY3VycmVudCB0YWJiYWJsZSBjaGlsZCBpcy5cbiAgICBjb25zdCBuYXZpZ2F0ZVRvSW5kZXggPSB1c2VDYWxsYmFjaygoaW5kZXgpID0+IHsgc2V0SW5kZXgoaW5kZXggPCAwID8gKG1hbmFnZWRDaGlsZHJlbi5sZW5ndGggKyBpbmRleCkgOiBpbmRleCk7IH0sIFtdKTtcbiAgICBjb25zdCBuYXZpZ2F0ZVRvTmV4dCA9IHVzZUNhbGxiYWNrKCgpID0+IHsgc2V0SW5kZXgoaSA9PiArK2kpOyB9LCBbXSk7XG4gICAgY29uc3QgbmF2aWdhdGVUb1ByZXYgPSB1c2VDYWxsYmFjaygoKSA9PiB7IHNldEluZGV4KGkgPT4gLS1pKTsgfSwgW10pO1xuICAgIGNvbnN0IG5hdmlnYXRlVG9TdGFydCA9IHVzZUNhbGxiYWNrKCgpID0+IHsgbmF2aWdhdGVUb0luZGV4KDApOyB9LCBbbmF2aWdhdGVUb0luZGV4XSk7XG4gICAgY29uc3QgbmF2aWdhdGVUb0VuZCA9IHVzZUNhbGxiYWNrKCgpID0+IHsgbmF2aWdhdGVUb0luZGV4KC0xKTsgfSwgW25hdmlnYXRlVG9JbmRleF0pO1xuICAgIGNvbnN0IHVzZUxpbmVhck5hdmlnYXRpb25DaGlsZCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICAgICAgY29uc3QgeyB1c2VSZWZFbGVtZW50UHJvcHMsIGVsZW1lbnQgfSA9IHVzZVJlZkVsZW1lbnQoKTtcbiAgICAgICAgLy8gUHJlZmVyIHRoZSBwYXJlbnQgZWxlbWVudCdzIGRpcmVjdGlvbiBzbyB0aGF0IHdlJ3JlIG5vdCBjYWxsaW5nIGdldENvbXB1dGVkU3R5bGVcbiAgICAgICAgLy8gb24gZXZlcnkgc2luZ2xlIGluZGl2aWR1YWwgY2hpbGQsIHdoaWNoIGlzIGxpa2VseSByZWR1bmRhbnQuXG4gICAgICAgIC8vIFRPRE86IERvZXMgdXNlTG9naWNhbERpcmVjdGlvbiBuZWVkIHRvIGhvbGQgYSBwZXItcmVuZGVyICYgcGVyLWVsZW1lbnQgY2FjaGUgdG8gbWFrZSB0aGlzIHdvcms/XG4gICAgICAgIC8vIE9yIGRvZXMgdGhlIGJyb3dzZXIgYXV0b21hdGljYWxseSBjYWNoZSB0aGUgY29tcHV0YXRpb25zIHVudGlsIHNvbWV0aGluZyBjaGFuZ2VzP1xuICAgICAgICAvLyBHaXZlbiB0aGF0IHRoZSB2YWx1ZXMgYXJlIGxpdmUsIGl0IHNlZW1zIGxpa2UgaXQgc2hvdWxkIGJlIHRoZSBsYXR0ZXIuLi5cbiAgICAgICAgY29uc3QgeyBjb252ZXJ0RWxlbWVudFNpemUsIGdldExvZ2ljYWxEaXJlY3Rpb24gfSA9IHVzZUxvZ2ljYWxEaXJlY3Rpb24oZWxlbWVudD8ucGFyZW50RWxlbWVudCA/PyBlbGVtZW50KTtcbiAgICAgICAgY29uc3QgdXNlTGluZWFyTmF2aWdhdGlvbkNoaWxkUHJvcHMgPSAocHJvcHMpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG9uS2V5RG93biA9IChlKSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gTm90IGhhbmRsZWQgYnkgdHlwZWFoZWFkIChpLmUuIGFzc3VtZSB0aGlzIGlzIGEga2V5Ym9hcmQgc2hvcnRjdXQpXG4gICAgICAgICAgICAgICAgaWYgKGUuY3RybEtleSB8fCBlLm1ldGFLZXkpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICBjb25zdCBpbmZvID0gZ2V0TG9naWNhbERpcmVjdGlvbigpO1xuICAgICAgICAgICAgICAgIGxldCBhbGxvd3NCbG9ja05hdmlnYXRpb24gPSAobmF2aWdhdGlvbkRpcmVjdGlvbiA9PSBcImJsb2NrXCIgfHwgbmF2aWdhdGlvbkRpcmVjdGlvbiA9PSBcImVpdGhlclwiKTtcbiAgICAgICAgICAgICAgICBsZXQgYWxsb3dzSW5saW5lTmF2aWdhdGlvbiA9IChuYXZpZ2F0aW9uRGlyZWN0aW9uID09IFwiaW5saW5lXCIgfHwgbmF2aWdhdGlvbkRpcmVjdGlvbiA9PSBcImVpdGhlclwiKTtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKGUua2V5KSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJBcnJvd1VwXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHByb3BOYW1lID0gKGluZm8/LmJsb2NrT3JpZW50YXRpb24gPT09IFwidmVydGljYWxcIiA/IFwiYmxvY2tEaXJlY3Rpb25cIiA6IFwiaW5saW5lRGlyZWN0aW9uXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZGlyZWN0aW9uQWxsb3dlZCA9IChpbmZvPy5ibG9ja09yaWVudGF0aW9uID09PSBcInZlcnRpY2FsXCIgPyBhbGxvd3NCbG9ja05hdmlnYXRpb24gOiBhbGxvd3NJbmxpbmVOYXZpZ2F0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkaXJlY3Rpb25BbGxvd2VkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGluZm8/Lltwcm9wTmFtZV0gPT09IFwiYnR0XCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmF2aWdhdGVUb05leHQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hdmlnYXRlVG9QcmV2KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcIkFycm93RG93blwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwcm9wTmFtZSA9IChpbmZvPy5ibG9ja09yaWVudGF0aW9uID09PSBcInZlcnRpY2FsXCIgPyBcImJsb2NrRGlyZWN0aW9uXCIgOiBcImlubGluZURpcmVjdGlvblwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGRpcmVjdGlvbkFsbG93ZWQgPSAoaW5mbz8uYmxvY2tPcmllbnRhdGlvbiA9PT0gXCJ2ZXJ0aWNhbFwiID8gYWxsb3dzQmxvY2tOYXZpZ2F0aW9uIDogYWxsb3dzSW5saW5lTmF2aWdhdGlvbik7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGlyZWN0aW9uQWxsb3dlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpbmZvPy5bcHJvcE5hbWVdID09PSBcImJ0dFwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hdmlnYXRlVG9QcmV2KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYXZpZ2F0ZVRvTmV4dCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJBcnJvd0xlZnRcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJvcE5hbWUgPSAoaW5mbz8uaW5saW5lT3JpZW50YXRpb24gPT09IFwiaG9yaXpvbnRhbFwiID8gXCJpbmxpbmVEaXJlY3Rpb25cIiA6IFwiYmxvY2tEaXJlY3Rpb25cIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBkaXJlY3Rpb25BbGxvd2VkID0gKGluZm8/LmlubGluZU9yaWVudGF0aW9uID09PSBcImhvcml6b250YWxcIiA/IGFsbG93c0lubGluZU5hdmlnYXRpb24gOiBhbGxvd3NCbG9ja05hdmlnYXRpb24pO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRpcmVjdGlvbkFsbG93ZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaW5mbz8uW3Byb3BOYW1lXSA9PT0gXCJydGxcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYXZpZ2F0ZVRvTmV4dCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmF2aWdhdGVUb1ByZXYoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiQXJyb3dSaWdodFwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwcm9wTmFtZSA9IChpbmZvPy5pbmxpbmVPcmllbnRhdGlvbiA9PT0gXCJob3Jpem9udGFsXCIgPyBcImlubGluZURpcmVjdGlvblwiIDogXCJibG9ja0RpcmVjdGlvblwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGRpcmVjdGlvbkFsbG93ZWQgPSAoaW5mbz8uaW5saW5lT3JpZW50YXRpb24gPT09IFwiaG9yaXpvbnRhbFwiID8gYWxsb3dzSW5saW5lTmF2aWdhdGlvbiA6IGFsbG93c0Jsb2NrTmF2aWdhdGlvbik7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGlyZWN0aW9uQWxsb3dlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpbmZvPy5bcHJvcE5hbWVdID09PSBcInJ0bFwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hdmlnYXRlVG9QcmV2KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYXZpZ2F0ZVRvTmV4dCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiSG9tZVwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgbmF2aWdhdGVUb1N0YXJ0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJFbmRcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hdmlnYXRlVG9FbmQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgcmV0dXJuIHVzZVJlZkVsZW1lbnRQcm9wcyh1c2VNZXJnZWRQcm9wcygpKHsgb25LZXlEb3duIH0sIHByb3BzKSk7XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB1c2VMaW5lYXJOYXZpZ2F0aW9uQ2hpbGRQcm9wc1xuICAgICAgICB9O1xuICAgIH0sIFtuYXZpZ2F0aW9uRGlyZWN0aW9uLCBuYXZpZ2F0ZVRvTmV4dCwgbmF2aWdhdGVUb1ByZXYsIG5hdmlnYXRlVG9TdGFydCwgbmF2aWdhdGVUb0VuZF0pO1xuICAgIHJldHVybiB7XG4gICAgICAgIHVzZUxpbmVhck5hdmlnYXRpb25DaGlsZCxcbiAgICAgICAgbmF2aWdhdGVUb0luZGV4LFxuICAgICAgICBuYXZpZ2F0ZVRvTmV4dCxcbiAgICAgICAgbmF2aWdhdGVUb1ByZXYsXG4gICAgICAgIG5hdmlnYXRlVG9TdGFydCxcbiAgICAgICAgbmF2aWdhdGVUb0VuZCxcbiAgICB9O1xufVxuLyoqXG4gKiBBbGxvd3MgZm9yIHRoZSBzZWxlY3Rpb24gb2YgYSBtYW5hZ2VkIGNoaWxkIGJ5IHR5cGluZyB0aGUgZ2l2ZW4gdGV4dCBhc3NvY2lhdGVkIHdpdGggaXQuXG4gKlxuICogQHNlZSB1c2VMaXN0TmF2aWdhdGlvbiwgd2hpY2ggcGFja2FnZXMgZXZlcnl0aGluZyB1cCB0b2dldGhlci5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZVR5cGVhaGVhZE5hdmlnYXRpb24oeyBjb2xsYXRvciwgZ2V0SW5kZXgsIHR5cGVhaGVhZFRpbWVvdXQsIHNldEluZGV4IH0pIHtcbiAgICAvLyBGb3IgdHlwZWFoZWFkLCBrZWVwIHRyYWNrIG9mIHdoYXQgb3VyIGN1cnJlbnQgXCJzZWFyY2hcIiBzdHJpbmcgaXMgKGlmIHdlIGhhdmUgb25lKVxuICAgIC8vIGFuZCBhbHNvIGNsZWFyIGl0IGV2ZXJ5IDEwMDAgbXMgc2luY2UgdGhlIGxhc3QgdGltZSBpdCBjaGFuZ2VkLlxuICAgIC8vIE5leHQsIGtlZXAgYSBtYXBwaW5nIG9mIHR5cGVhaGVhZCB2YWx1ZXMgdG8gaW5kaWNlcyBmb3IgZmFzdGVyIHNlYXJjaGluZy5cbiAgICAvLyBBbmQsIGZvciB0aGUgdXNlcidzIHNha2UsIGxldCB0aGVtIGtub3cgd2hlbiB0aGVpciB0eXBlYWhlYWQgY2FuJ3QgbWF0Y2ggYW55dGhpbmcgYW55bW9yZVxuICAgIGNvbnN0IFtjdXJyZW50VHlwZWFoZWFkLCBzZXRDdXJyZW50VHlwZWFoZWFkLCBnZXRDdXJyZW50VHlwZWFoZWFkXSA9IHVzZVN0YXRlKG51bGwpO1xuICAgIHVzZVRpbWVvdXQoeyB0aW1lb3V0OiB0eXBlYWhlYWRUaW1lb3V0ID8/IDEwMDAsIGNhbGxiYWNrOiAoKSA9PiB7IHNldEN1cnJlbnRUeXBlYWhlYWQobnVsbCk7IHNldEludmFsaWRUeXBlYWhlYWQobnVsbCk7IH0sIHRyaWdnZXJJbmRleDogY3VycmVudFR5cGVhaGVhZCB9KTtcbiAgICBjb25zdCBzb3J0ZWRUeXBlYWhlYWRJbmZvID0gdXNlUmVmKFtdKTtcbiAgICBjb25zdCBbaW52YWxpZFR5cGVhaGVhZCwgc2V0SW52YWxpZFR5cGVhaGVhZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgLy8gSGFuZGxlIHR5cGVhaGVhZCBmb3IgaW5wdXQgbWV0aG9kIGVkaXRvcnMgYXMgd2VsbFxuICAgIC8vIEVzc2VudGlhbGx5LCB3aGVuIGFjdGl2ZSwgaWdub3JlIGZ1cnRoZXIga2V5cyBcbiAgICAvLyBiZWNhdXNlIHdlJ3JlIHdhaXRpbmcgZm9yIGEgQ29tcG9zaXRpb25FbmQgZXZlbnRcbiAgICBjb25zdCBbaW1lQWN0aXZlLCBzZXRJbWVBY3RpdmUsIGdldEltZUFjdGl2ZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgLy8gQmVjYXVzZSBjb21wb3NpdGlvbiBldmVudHMgZmlyZSAqYWZ0ZXIqIGtleWRvd24gZXZlbnRzIFxuICAgIC8vIChidXQgd2l0aGluIHRoZSBzYW1lIHRhc2ssIHdoaWNoLCBUT0RPLCBjb3VsZCBiZSBicm93c2VyLWRlcGVuZGVudCksXG4gICAgLy8gd2UgY2FuIHVzZSB0aGlzIHRvIGtlZXAgdHJhY2sgb2Ygd2hpY2ggZXZlbnQgd2UncmUgbGlzdGVuaW5nIGZvciBvbiB0aGUgZmlyc3Qga2V5ZG93bi5cbiAgICBjb25zdCBbbmV4dFR5cGVhaGVhZENoYXIsIHNldE5leHRUeXBlYWhlYWRDaGFyXSA9IHVzZVN0YXRlKG51bGwpO1xuICAgIHVzZUxheW91dEVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGlmIChuZXh0VHlwZWFoZWFkQ2hhciAhPT0gbnVsbCkge1xuICAgICAgICAgICAgc2V0Q3VycmVudFR5cGVhaGVhZCh0eXBlYWhlYWQgPT4gKCh0eXBlYWhlYWQgPz8gXCJcIikgKyBuZXh0VHlwZWFoZWFkQ2hhcikpO1xuICAgICAgICAgICAgc2V0TmV4dFR5cGVhaGVhZENoYXIobnVsbCk7XG4gICAgICAgIH1cbiAgICB9LCBbbmV4dFR5cGVhaGVhZENoYXJdKTtcbiAgICBjb25zdCBjb21wYXJhdG9yID0gdXNlU3RhYmxlQ2FsbGJhY2soKGxocywgcmhzKSA9PiB7XG4gICAgICAgIGxldCBjb21wYXJlO1xuICAgICAgICBpZiAodHlwZW9mIGxocyA9PT0gXCJzdHJpbmdcIiAmJiB0eXBlb2YgcmhzLnRleHQgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIC8vIEZvciB0aGUgcHVycG9zZXMgb2YgdHlwZWFoZWFkLCBvbmx5IGNvbXBhcmUgYSBzdHJpbmcgb2YgdGhlIHNhbWUgc2l6ZSBhcyBvdXIgY3VycmVudGx5IHR5cGVkIHN0cmluZy5cbiAgICAgICAgICAgIC8vIEJ5IG5vcm1hbGl6aW5nIHRoZW0gZmlyc3QsIHdlIGVuc3VyZSB0aGlzIGJ5dGUtYnktYnl0ZSBoYW5kbGluZyBvZiByYXcgY2hhcmFjdGVyIGRhdGEgd29ya3Mgb3V0IG9rYXkuXG4gICAgICAgICAgICBsZXQgc2FmZUxocyA9IGxocy5ub3JtYWxpemUoXCJORkRcIik7XG4gICAgICAgICAgICBsZXQgc2FmZVJocyA9IHJocy50ZXh0Lm5vcm1hbGl6ZShcIk5GRFwiKS5zdWJzdHIoMCwgc2FmZUxocy5sZW5ndGgpO1xuICAgICAgICAgICAgaWYgKGNvbGxhdG9yKVxuICAgICAgICAgICAgICAgIGNvbXBhcmUgPSBjb2xsYXRvci5jb21wYXJlKHNhZmVMaHMsIHNhZmVSaHMpO1xuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIGNvbXBhcmUgPSBzYWZlTGhzLnRvTG93ZXJDYXNlKCkubG9jYWxlQ29tcGFyZShzYWZlUmhzLnRvTG93ZXJDYXNlKCkgPz8gXCJcIik7XG4gICAgICAgICAgICByZXR1cm4gY29tcGFyZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbGhzIC0gcmhzO1xuICAgIH0pO1xuICAgIC8vIEhhbmRsZSBjaGFuZ2VzIGluIHR5cGVhaGVhZCB0aGF0IGNhdXNlIGNoYW5nZXMgdG8gdGhlIHRhYmJhYmxlIGluZGV4XG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgaWYgKGN1cnJlbnRUeXBlYWhlYWQgJiYgc29ydGVkVHlwZWFoZWFkSW5mby5jdXJyZW50Lmxlbmd0aCkge1xuICAgICAgICAgICAgbGV0IHNvcnRlZFR5cGVhaGVhZEluZGV4ID0gYmluYXJ5U2VhcmNoKHNvcnRlZFR5cGVhaGVhZEluZm8uY3VycmVudCwgY3VycmVudFR5cGVhaGVhZCwgY29tcGFyYXRvcik7XG4gICAgICAgICAgICBpZiAoc29ydGVkVHlwZWFoZWFkSW5kZXggPCAwKSB7XG4gICAgICAgICAgICAgICAgLy8gVGhlIHVzZXIgaGFzIHR5cGVkIGFuIGVudHJ5IHRoYXQgZG9lc24ndCBleGlzdCBpbiB0aGUgbGlzdFxuICAgICAgICAgICAgICAgIC8vIChvciBtb3JlIHNwZWNpZmljYWxseSBcImZvciB3aGljaCB0aGVyZSBpcyBubyBlbnRyeSB0aGF0IHN0YXJ0cyB3aXRoIHRoYXQgaW5wdXRcIilcbiAgICAgICAgICAgICAgICBzZXRJbnZhbGlkVHlwZWFoZWFkKHRydWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgc2V0SW52YWxpZFR5cGVhaGVhZChmYWxzZSk7XG4gICAgICAgICAgICAgICAgLypcbiAgICAgICAgICAgICAgICAgIFdlIGtub3cgcm91Z2hseSB3aGVyZSwgaW4gdGhlIHNvcnRlZCBhcnJheSBvZiBzdHJpbmdzLCBvdXIgbmV4dCB0eXBlYWhlYWQgbG9jYXRpb24gaXMuXG4gICAgICAgICAgICAgICAgICBCdXQgcm91Z2hseSBpc24ndCBnb29kIGVub3VnaCBpZiB0aGVyZSBhcmUgbXVsdGlwbGUgbWF0Y2hlcy5cbiAgICAgICAgICAgICAgICAgIFRvIGNvbnZlcnQgb3VyIHNvcnRlZCBpbmRleCB0byB0aGUgdW5zb3J0ZWQgaW5kZXggd2UgbmVlZCwgd2UgaGF2ZSB0byBmaW5kIHRoZSBmaXJzdFxuICAgICAgICAgICAgICAgICAgZWxlbWVudCB0aGF0IG1hdGNoZXMgdXMgKmFuZCogKGlmIGFueSBzdWNoIGV4aXN0KSBpcyAqYWZ0ZXIqIG91ciBjdXJyZW50IHNlbGVjdGlvbi5cblxuICAgICAgICAgICAgICAgICAgSW4gb3RoZXIgd29yZHMsIHRoZSBvbmx5IHdheSB0eXBlYWhlYWQgbW92ZXMgYmFja3dhcmRzIHJlbGF0aXZlIHRvIG91ciBjdXJyZW50XG4gICAgICAgICAgICAgICAgICBwb3NpdGlvbiBpcyBpZiB0aGUgb25seSBvdGhlciBvcHRpb24gaXMgYmVoaW5kIHVzLlxuXG4gICAgICAgICAgICAgICAgICBJdCdzIG5vdCBzcGVjaWZpZWQgaW4gV0FJLUFSSUEgd2hhdCB0byBkbyBpbiB0aGF0IGNhc2UuICBJIHN1cHBvc2Ugd3JhcCBiYWNrIHRvIHRoZSBzdGFydD9cbiAgICAgICAgICAgICAgICAgIFRob3VnaCB0aGVyZSdzIGFsc28gYSBjYXNlIGZvciBqdXN0IGdvaW5nIHVwd2FyZHMgdG8gdGhlIG5lYXJlc3QgdG8gcHJldmVudCBqdW1waW5lc3MuXG4gICAgICAgICAgICAgICAgICBCdXQgaWYgeW91J3JlIGFscmVhZHkgZG9pbmcgdHlwZWFoZWFkIG9uIGFuIHVuc29ydGVkIGxpc3QsIGxpa2UsIGp1bXBpbmVzcyBjYW4ndCBiZSBhdm9pZGVkLlxuICAgICAgICAgICAgICAgICAgSSBkdW5uby4gR29pbmcgYmFjayB0byB0aGUgc3RhcnQgaXMgdGhlIHNpbXBsaXN0IHRob3VnaC5cblxuICAgICAgICAgICAgICAgICAgQmFzaWNhbGx5IHdoYXQgdGhpcyBkb2VzOiBTdGFydGluZyBmcm9tIHdoZXJlIHdlIGZvdW5kIG91cnNlbHZlcyBhZnRlciBvdXIgYmluYXJ5IHNlYXJjaCxcbiAgICAgICAgICAgICAgICAgIHNjYW4gYmFja3dhcmRzIGFuZCBmb3J3YXJkcyB0aHJvdWdoIGFsbCBhZGphY2VudCBlbnRyaWVzIHRoYXQgYWxzbyBjb21wYXJlIGVxdWFsbHkgc28gdGhhdFxuICAgICAgICAgICAgICAgICAgd2UgY2FuIGZpbmQgdGhlIG9uZSB3aG9zZSBgdW5zb3J0ZWRJbmRleGAgaXMgdGhlIGxvd2VzdCBhbW9uZ3N0IGFsbCBvdGhlciBlcXVhbCBzdHJpbmdzXG4gICAgICAgICAgICAgICAgICAoYW5kIGFsc28gdGhlIGxvd2VzdCBgdW5zb3J0ZWRJbmRleGAgeWFkZGEgeWFkZGEgZXhjZXB0IHRoYXQgaXQgY29tZXMgYWZ0ZXIgdXMpLlxuXG4gICAgICAgICAgICAgICAgICBUT0RPOiBUaGUgYmluYXJ5IHNlYXJjaCBzdGFydHMgdGhpcyBvZmYgd2l0aCBhIHNvbGlkIE8obG9nIG4pLCBidXQgb25lLWNoYXJhY3RlclxuICAgICAgICAgICAgICAgICAgc2VhcmNoZXMgYXJlLCB0aGFua3MgdG8gcGlnZW9uaG9sZSBwcmluY2lwYWwsIGV2ZW50dWFsbHkgZ3VhcmFudGVlZCB0byBiZWNvbWVcbiAgICAgICAgICAgICAgICAgIE8obipsb2cgbikuIFRoaXMgaXMgYW5ub3lpbmcgYnV0IHByb2JhYmx5IG5vdCBlYXNpbHkgc29sdmFibGU/IFRoZXJlIGNvdWxkIGJlIGFuXG4gICAgICAgICAgICAgICAgICBleGNlcHRpb24gZm9yIG9uZS1jaGFyYWN0ZXIgc3RyaW5ncywgYnV0IHRoYXQncyBqdXN0IGtpY2tpbmcgdGhlIGNhbiBkb3duXG4gICAgICAgICAgICAgICAgICB0aGUgcm9hZC4gTWF5YmUgb25lIG9yIHR3byBjaGFyYWN0ZXJzIHdvdWxkIGJlIGdvb2QgZW5vdWdoIHRob3VnaC5cbiAgICAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgICAgIC8vIFRoZXNlIGFyZSB1c2VkIHRvIGtlZXAgdHJhY2sgb2YgdGhlIGNhbmRpZGF0ZXMnIHBvc2l0aW9ucyBpbiBib3RoIG91ciBzb3J0ZWQgYXJyYXkgYW5kIHRoZSB1bnNvcnRlZCBET00uXG4gICAgICAgICAgICAgICAgbGV0IGxvd2VzdFVuc29ydGVkSW5kZXhBbGwgPSBudWxsO1xuICAgICAgICAgICAgICAgIGxldCBsb3dlc3RTb3J0ZWRJbmRleEFsbCA9IHNvcnRlZFR5cGVhaGVhZEluZGV4O1xuICAgICAgICAgICAgICAgIC8vIFRoZXNlIHR3byBhcmUgb25seSBzZXQgZm9yIGVsZW1lbnRzIHRoYXQgYXJlIGFoZWFkIG9mIHVzLCBidXQgdGhlIHByaW5jaXBsZSdzIHRoZSBzYW1lIG90aGVyd2lzZVxuICAgICAgICAgICAgICAgIGxldCBsb3dlc3RVbnNvcnRlZEluZGV4TmV4dCA9IG51bGw7XG4gICAgICAgICAgICAgICAgbGV0IGxvd2VzdFNvcnRlZEluZGV4TmV4dCA9IHNvcnRlZFR5cGVhaGVhZEluZGV4O1xuICAgICAgICAgICAgICAgIGNvbnN0IHVwZGF0ZUJlc3RGaXQgPSAodSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAobG93ZXN0VW5zb3J0ZWRJbmRleEFsbCA9PSBudWxsIHx8IHUgPCBsb3dlc3RVbnNvcnRlZEluZGV4QWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsb3dlc3RVbnNvcnRlZEluZGV4QWxsID0gdTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvd2VzdFNvcnRlZEluZGV4QWxsID0gaTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoKGxvd2VzdFVuc29ydGVkSW5kZXhOZXh0ID09IG51bGwgfHwgdSA8IGxvd2VzdFVuc29ydGVkSW5kZXhOZXh0KSAmJiB1ID4gKGdldEluZGV4KCkgPz8gLUluZmluaXR5KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbG93ZXN0VW5zb3J0ZWRJbmRleE5leHQgPSB1O1xuICAgICAgICAgICAgICAgICAgICAgICAgbG93ZXN0U29ydGVkSW5kZXhOZXh0ID0gaTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgbGV0IGkgPSBzb3J0ZWRUeXBlYWhlYWRJbmRleDtcbiAgICAgICAgICAgICAgICB3aGlsZSAoaSA+PSAwICYmIGNvbXBhcmF0b3IoY3VycmVudFR5cGVhaGVhZCwgc29ydGVkVHlwZWFoZWFkSW5mby5jdXJyZW50W2ldKSA9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHVwZGF0ZUJlc3RGaXQoc29ydGVkVHlwZWFoZWFkSW5mby5jdXJyZW50W2ldLnVuc29ydGVkSW5kZXgpO1xuICAgICAgICAgICAgICAgICAgICAtLWk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGkgPSBzb3J0ZWRUeXBlYWhlYWRJbmRleDtcbiAgICAgICAgICAgICAgICB3aGlsZSAoaSA8IHNvcnRlZFR5cGVhaGVhZEluZm8uY3VycmVudC5sZW5ndGggJiYgY29tcGFyYXRvcihjdXJyZW50VHlwZWFoZWFkLCBzb3J0ZWRUeXBlYWhlYWRJbmZvLmN1cnJlbnRbaV0pID09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlQmVzdEZpdChzb3J0ZWRUeXBlYWhlYWRJbmZvLmN1cnJlbnRbaV0udW5zb3J0ZWRJbmRleCk7XG4gICAgICAgICAgICAgICAgICAgICsraTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGxvd2VzdFVuc29ydGVkSW5kZXhOZXh0ICE9PSBudWxsKVxuICAgICAgICAgICAgICAgICAgICBzZXRJbmRleChzb3J0ZWRUeXBlYWhlYWRJbmZvLmN1cnJlbnRbbG93ZXN0U29ydGVkSW5kZXhOZXh0XS51bnNvcnRlZEluZGV4KTtcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChsb3dlc3RVbnNvcnRlZEluZGV4QWxsICE9PSBudWxsKVxuICAgICAgICAgICAgICAgICAgICBzZXRJbmRleChzb3J0ZWRUeXBlYWhlYWRJbmZvLmN1cnJlbnRbbG93ZXN0U29ydGVkSW5kZXhBbGxdLnVuc29ydGVkSW5kZXgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSwgW2N1cnJlbnRUeXBlYWhlYWRdKTtcbiAgICBjb25zdCB1c2VUeXBlYWhlYWROYXZpZ2F0aW9uQ2hpbGQgPSB1c2VDYWxsYmFjaygoeyB0ZXh0LCAuLi5pIH0pID0+IHtcbiAgICAgICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgICAgIGlmICh0ZXh0KSB7XG4gICAgICAgICAgICAgICAgLy8gRmluZCB3aGVyZSB0byBpbnNlcnQgdGhpcyBpdGVtLlxuICAgICAgICAgICAgICAgIC8vIEJlY2F1c2UgYWxsIGluZGV4IHZhbHVlcyBzaG91bGQgYmUgdW5pcXVlLCB0aGUgcmV0dXJuZWQgc29ydGVkSW5kZXhcbiAgICAgICAgICAgICAgICAvLyBzaG91bGQgYWx3YXlzIHJlZmVyIHRvIGEgbmV3IGxvY2F0aW9uIChpLmUuIGJlIG5lZ2F0aXZlKSAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBsZXQgc29ydGVkSW5kZXggPSBiaW5hcnlTZWFyY2goc29ydGVkVHlwZWFoZWFkSW5mby5jdXJyZW50LCB0ZXh0LCBjb21wYXJhdG9yKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmFzc2VydChzb3J0ZWRJbmRleCA8IDApO1xuICAgICAgICAgICAgICAgIGlmIChzb3J0ZWRJbmRleCA8IDApIHtcbiAgICAgICAgICAgICAgICAgICAgc29ydGVkVHlwZWFoZWFkSW5mby5jdXJyZW50LnNwbGljZSgtc29ydGVkSW5kZXggLSAxLCAwLCB7IHRleHQsIHVuc29ydGVkSW5kZXg6IGkuaW5kZXggfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFdoZW4gdW5tb3VudGluZywgZmluZCB3aGVyZSB3ZSB3ZXJlIGFuZCByZW1vdmUgb3Vyc2VsdmVzLlxuICAgICAgICAgICAgICAgICAgICAvLyBBZ2Fpbiwgd2Ugc2hvdWxkIGFsd2F5cyBmaW5kIG91cnNlbHZlcyBiZWNhdXNlIHRoZXJlIHNob3VsZCBiZSBubyBkdXBsaWNhdGUgdmFsdWVzIGlmIGVhY2ggaW5kZXggaXMgdW5pcXVlLlxuICAgICAgICAgICAgICAgICAgICBsZXQgc29ydGVkSW5kZXggPSBiaW5hcnlTZWFyY2goc29ydGVkVHlwZWFoZWFkSW5mby5jdXJyZW50LCB0ZXh0LCBjb21wYXJhdG9yKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5hc3NlcnQoc29ydGVkSW5kZXggPj0gMCk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzb3J0ZWRJbmRleCA+PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzb3J0ZWRUeXBlYWhlYWRJbmZvLmN1cnJlbnQuc3BsaWNlKHNvcnRlZEluZGV4LCAxKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIFt0ZXh0XSk7XG4gICAgICAgIGNvbnN0IHVzZVR5cGVhaGVhZE5hdmlnYXRpb25DaGlsZFByb3BzID0gZnVuY3Rpb24gKHsgLi4ucHJvcHMgfSkge1xuICAgICAgICAgICAgY29uc3QgeyB1c2VSZWZFbGVtZW50UHJvcHMsIGVsZW1lbnQgfSA9IHVzZVJlZkVsZW1lbnQoKTtcbiAgICAgICAgICAgIGNvbnN0IG9uQ29tcG9zaXRpb25TdGFydCA9IChlKSA9PiB7IHNldEltZUFjdGl2ZSh0cnVlKTsgfTtcbiAgICAgICAgICAgIGNvbnN0IG9uQ29tcG9zaXRpb25FbmQgPSAoZSkgPT4ge1xuICAgICAgICAgICAgICAgIHNldE5leHRUeXBlYWhlYWRDaGFyKGUuZGF0YSk7XG4gICAgICAgICAgICAgICAgc2V0SW1lQWN0aXZlKGZhbHNlKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBjb25zdCBvbktleURvd24gPSAoZSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGltZUFjdGl2ZSA9IGdldEltZUFjdGl2ZSgpO1xuICAgICAgICAgICAgICAgIGxldCBrZXkgPSBlLmtleTtcbiAgICAgICAgICAgICAgICAvLyBOb3QgaGFuZGxlZCBieSB0eXBlYWhlYWQgKGkuZS4gYXNzdW1lIHRoaXMgaXMgYSBrZXlib2FyZCBzaG9ydGN1dClcbiAgICAgICAgICAgICAgICBpZiAoZS5jdHJsS2V5IHx8IGUubWV0YUtleSlcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIGlmICghaW1lQWN0aXZlICYmIGUua2V5ID09PSBcIkJhY2tzcGFjZVwiKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFJlbW92ZSB0aGUgbGFzdCBjaGFyYWN0ZXIgaW4gYSB3YXkgdGhhdCBkb2Vzbid0IHNwbGl0IFVURi0xNiBzdXJyb2dhdGVzLlxuICAgICAgICAgICAgICAgICAgICBzZXRDdXJyZW50VHlwZWFoZWFkKHQgPT4gdCA9PT0gbnVsbCA/IG51bGwgOiBbLi4udF0ucmV2ZXJzZSgpLnNsaWNlKDEpLnJldmVyc2UoKS5qb2luKFwiXCIpKTtcbiAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIFRoZSBrZXkgcHJvcGVydHkgcmVwcmVzZW50cyB0aGUgdHlwZWQgY2hhcmFjdGVyIE9SIHRoZSBcIm5hbWVkIGtleSBhdHRyaWJ1dGVcIiBvZiB0aGUga2V5IHByZXNzZWQuXG4gICAgICAgICAgICAgICAgLy8gVGhlcmUncyBubyBkZWZpbml0ZSB3YXkgdG8gdGVsbCB0aGUgZGlmZmVyZW5jZSwgYnV0IGZvciBhbGwgaW50ZW50cyBhbmQgcHVycG9zZXNcbiAgICAgICAgICAgICAgICAvLyB0aGVyZSBhcmUgbm8gb25lLWNoYXJhY3RlciBuYW1lcywgYW5kIHRoZXJlIGFyZSBubyBub24tQVNDSUktYWxwaGEgbmFtZXMuXG4gICAgICAgICAgICAgICAgLy8gVGh1cywgYW55IG9uZS1jaGFyYWN0ZXIgb3Igbm9uLUFTQ0lJIHZhbHVlIGZvciBga2V5YCBpcyAqYWxtb3N0IGNlcnRhaW5seSogYSB0eXBlZCBjaGFyYWN0ZXIuXG4gICAgICAgICAgICAgICAgY29uc3QgaXNDaGFyYWN0ZXJLZXkgPSAoa2V5Lmxlbmd0aCA9PT0gMSB8fCAhL15bQS1aYS16XS8udGVzdChrZXkpKTtcbiAgICAgICAgICAgICAgICBpZiAoaXNDaGFyYWN0ZXJLZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGtleSA9PSBcIiBcIiAmJiAoZ2V0Q3VycmVudFR5cGVhaGVhZCgpID8/IFwiXCIpLnRyaW0oKS5sZW5ndGggPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gRG9uJ3QgZG8gYW55dGhpbmcgYmVjYXVzZSBhIHNwYWNlYmFyIGNhbid0IGV2ZXIgXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBpbml0aWF0ZSBhIHR5cGVhaGVhZCwgb25seSBjb250aW51ZSBvbmUuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAoU3BlY2lmaWNhbGx5LCBsZXQgdGhlIGV2ZW50IGNvbnRpbnVlIHByb3BhZ2F0aW9uIGluIHRoaXMgY2FzZSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBOb3RlOiBXb24ndCBiZSB0cnVlIGZvciB0aGUgZmlyc3Qga2V5ZG93blxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gYnV0IHdpbGwgYmUgb3ZlcndyaXR0ZW4gYmVmb3JlIHVzZUxheW91dEVmZmVjdCBpcyBjYWxsZWRcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRvIGFjdHVhbGx5IGFwcGx5IHRoZSBjaGFuZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghaW1lQWN0aXZlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldE5leHRUeXBlYWhlYWRDaGFyKGtleSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgcmV0dXJuIHVzZU1lcmdlZFByb3BzKCkodXNlUmVmRWxlbWVudFByb3BzKHsgb25LZXlEb3duLCBvbkNvbXBvc2l0aW9uU3RhcnQsIG9uQ29tcG9zaXRpb25FbmQsIH0pLCBwcm9wcyk7XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB1c2VUeXBlYWhlYWROYXZpZ2F0aW9uQ2hpbGRQcm9wc1xuICAgICAgICB9O1xuICAgIH0sIFtdKTtcbiAgICByZXR1cm4ge1xuICAgICAgICB1c2VUeXBlYWhlYWROYXZpZ2F0aW9uQ2hpbGQsXG4gICAgICAgIGN1cnJlbnRUeXBlYWhlYWQsXG4gICAgICAgIGludmFsaWRUeXBlYWhlYWQsXG4gICAgfTtcbn1cbi8qKlxuICogWW91ciB1c3VhbCBiaW5hcnkgc2VhcmNoIGltcGxlbWVudGF0aW9uLlxuICpcbiAqIEl0J3MgdXNlZCBoZXJlIHRvIHF1aWNrbHkgZmluZCBhIGdvb2Qgc3BvdCB0byBzdGFydCBzZWFyY2hpbmcgZm9yIG91ciBuZXh0IHR5cGVhaGVhZCBjYW5kaWRhdGUuXG4gKiBAcGFyYW0gYXJyYXkgVGhlIGFycmF5IHRvIHNlYXJjaCB0aHJvdWdoXG4gKiBAcGFyYW0gd2FudGVkIFRoZSB2YWx1ZSB5b3UnZCBsaWtlIHRvIGZpbmRcbiAqIEBwYXJhbSBjb21wYXJhdG9yIENvbXBhcmVzIGB3YW50ZWRgIHdpdGggdGhlIGN1cnJlbnQgdmFsdWUgaW4gYGFycmF5YFxuICogQHJldHVybnMgQSBub24tbmVnYXRpdmUgdmFsdWUgaWYgYHdhbnRlZGAgd2FzIGZvdW5kLCBhbmQgYSBuZWdhdGl2ZSBudW1iZXIgaWYgbm90LlxuICogVGhlIGFic29sdXRlIHZhbHVlIG9mIHRoaXMgbnVtYmVyLCBtaW51cyBvbmUsIGlzIHdoZXJlIGB3YW50ZWRgICp3b3VsZCogYmUgZm91bmQgaWYgaXQgKndhcyogaW4gYGFycmF5YFxuICovXG5leHBvcnQgZnVuY3Rpb24gYmluYXJ5U2VhcmNoKGFycmF5LCB3YW50ZWQsIGNvbXBhcmF0b3IpIHtcbiAgICB2YXIgZmlyc3RJbmRleCA9IDA7XG4gICAgdmFyIGxhc3RJbmRleCA9IGFycmF5Lmxlbmd0aCAtIDE7XG4gICAgd2hpbGUgKGZpcnN0SW5kZXggPD0gbGFzdEluZGV4KSB7XG4gICAgICAgIHZhciB0ZXN0SW5kZXggPSAobGFzdEluZGV4ICsgZmlyc3RJbmRleCkgPj4gMTtcbiAgICAgICAgdmFyIGNvbXBhcmlzb25SZXN1bHQgPSBjb21wYXJhdG9yKHdhbnRlZCwgYXJyYXlbdGVzdEluZGV4XSk7XG4gICAgICAgIGlmIChjb21wYXJpc29uUmVzdWx0ID4gMCkge1xuICAgICAgICAgICAgZmlyc3RJbmRleCA9IHRlc3RJbmRleCArIDE7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoY29tcGFyaXNvblJlc3VsdCA8IDApIHtcbiAgICAgICAgICAgIGxhc3RJbmRleCA9IHRlc3RJbmRleCAtIDE7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdGVzdEluZGV4O1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiAtZmlyc3RJbmRleCAtIDE7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2Uta2V5Ym9hcmQtbmF2aWdhdGlvbi5qcy5tYXAiLCJpbXBvcnQgeyB1c2VDYWxsYmFjayB9IGZyb20gXCJwcmVhY3QvaG9va3NcIjtcbmltcG9ydCB7IHVzZU1lcmdlZFByb3BzIH0gZnJvbSBcIi4vdXNlLW1lcmdlZC1wcm9wc1wiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwiLi91c2Utc3RhdGVcIjtcbmltcG9ydCB7IHVzZVJvdmluZ1RhYkluZGV4IH0gZnJvbSBcIi4vdXNlLXJvdmluZy10YWJpbmRleFwiO1xuaW1wb3J0IHsgdXNlTGluZWFyTmF2aWdhdGlvbiwgdXNlVHlwZWFoZWFkTmF2aWdhdGlvbiB9IGZyb20gXCIuL3VzZS1rZXlib2FyZC1uYXZpZ2F0aW9uXCI7XG4vKipcbiAqXG4gKiBUT0RPOiBUaGlzIHRhYmxlIHdhcyBzY3JhcHBlZCB3aGVuIHRoaXMgd2FzIGNoYW5nZWQgdG8ganVzdCBhY2NlcHQgYSBjb2xsYXRvciBkaXJlY3RseSxcbiAqIGJ1dCBpdCdzIG5vdCBiYWQgZm9yIGEgY29sbGF0aW9uIGNyYXNoIGNvdXJzZSBhbmQgSSBtaWdodCB1c2UgaXQgYWdhaW4uXG4gKiBFdmVuIGp1c3QgYXMgYSBcInRoaXMgaXMgd2h5IGl0J3MgaW1wb3J0YW50IGFuZCBnb29kIHRvIHVzZSB0aGVzZSB0aGluZ3NcIiB0aGluZy5cbiAqXG4gKiB8TGFuZy58VGFyZ2V0fFVzZXIgaW5wdXR8YGJhc2VgfGBhY2NlbnRgfGBjYXNlYHxgdmFyaWFudGB8XG4gKiB8LS0tLXwtLS0tfC0tLS18LS0tLXwtLS0tfC0tLS18LS0tLXxcbiAqIHxFTnxIaXxIaXzinIV84pyFfOKchXzinIV8XG4gKiB8RU58SGl877yo772JfOKchXzinIV84pyFfOKdjHxcbiAqIHxFTnxIaXxoaXzinIV84pyFfOKdjHzinYx8XG4gKiB8RU58SGl8SMOvfOKchXzinYx84p2MfOKdjHxcbiAqIHxFTnxIaXxCeWV84p2MfOKdjHzinYx84p2MfFxuICogfERBfMOlfGFhfOKchXzinIV84pyFfOKdjHxcbiAqIHxEQXzDpXxBQXzinIV84pyFfOKdjHzinYx8XG4gKiB8REF8w6V8QWF84pyFfOKchXzinYx84p2MfFxuICogfEVOfMOlfGFhfOKdjHzinYx84p2MfOKdjHxcbiAqIHxEQXzDpXxhQXzinYx84p2MfOKdjHzinYx8XG4gKiB8RU58w6V8YXzinIV84pyFfOKdjHzinYx8XG4gKiB8REF8w6V8YXzinIV84pyFfOKdjHzinYx8XG4gKiB8SlB876qqfOedgHzinIV84pyFfOKchXzinIV8XG4gKiB8SlB844KrfO+9tnzinIV84pyFfOKchXzinIV8XG4gKiB8SlB844KrfOOBi3zinIV84pyFfOKchXzinYx8XG4gKiB8SlB844KrfOODtXzinIV84pyFfOKchXzinYx8XG4gKiB8SlB844KrfOOLlXzinIV84pyFfOKdjHzinYx8XG4gKiB8SlB844KrfOOCrHzinIV84p2MfOKdjHzinYx8XG4gKiB8SlB844KrfOWKm3zinYx84p2MfOKdjHzinYx8XG4gKiB8Wkh857SFfOe6onzinYx84p2MfOKdjHzinYx8XG4gKlxuICpcbiAqIChOb3RlIHRvIHNlbGY6IEF0IHNvbWUgcG9pbnQsIHRoaXMgZmlsZSB3aWxsIHByb2JhYmx5IGJlIG5vcm1hbGl6ZWRcbiAqIGJ5IHNvbWVib2R5IGFuZCDvqqogd2lsbCB0dXJuIGJhY2sgaW50byDnnYAuKVxuICpcbiAqL1xuY29uc3QgZHVtbXkgPSBudWxsO1xuLyoqXG4gKiBJbXBsZW1lbnRzIHByb3BlciBrZXlib2FyZCBuYXZpZ2F0aW9uIGZvciBjb21wb25lbnRzIGxpa2UgbGlzdGJveGVzLCBidXR0b24gZ3JvdXBzLCBtZW51cywgZXRjLlxuICpcbiAqIEluIHRoZSBkb2N1bWVudCBvcmRlciwgdGhlcmUgd2lsbCBiZSBvbmx5IG9uZSBcImZvY3VzZWRcIiBvciBcInRhYmJhYmxlXCIgZWxlbWVudCwgbWFraW5nIGl0IGFjdCBtb3JlIGxpa2Ugb25lIGNvbXBsZXRlIHVuaXQgaW4gY29tcGFyaXNvbiB0byBldmVyeXRoaW5nIGFyb3VuZCBpdC5cbiAqIE5hdmlnYXRpbmcgZm9yd2FyZHMvYmFja3dhcmRzIGNhbiBiZSBkb25lIHdpdGggdGhlIGFycm93IGtleXMsIEhvbWUvRW5kIGtleXMsIG9yIGFueSBhbnkgdGV4dCBmb3IgdHlwZWFoZWFkIHRvIGZvY3VzIHRoZSBuZXh0IGl0ZW0gdGhhdCBtYXRjaGVzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlTGlzdE5hdmlnYXRpb24oeyBpbml0aWFsSW5kZXgsIGZvY3VzT25DaGFuZ2UsIGNvbGxhdG9yLCBrZXlOYXZpZ2F0aW9uIH0pIHtcbiAgICBrZXlOYXZpZ2F0aW9uID8/PSBcImVpdGhlclwiO1xuICAgIC8vIEtlZXAgdHJhY2sgb2YgdGhyZWUgdGhpbmdzIHJlbGF0ZWQgdG8gdGhlIGN1cnJlbnRseSB0YWJiYWJsZSBlbGVtZW50J3MgaW5kZXg6XG4gICAgLy8gV2hhdCBpdCBpcywgYW5kIHdoZXRoZXIsIHdoZW4gd2UgcmVuZGVyIHRoaXMgY29tcG9uZW50IGFuZCBpdCdzIGNoYW5nZWQsIHRvIGFsc28gZm9jdXMgdGhlIGVsZW1lbnQgdGhhdCB3YXMgbWFkZSB0YWJiYWJsZS5cbiAgICBjb25zdCBbdGFiYmFibGVJbmRleCwgc2V0VGFiYmFibGVJbmRleCwgZ2V0VGFiYmFibGVJbmRleF0gPSB1c2VTdGF0ZShpbml0aWFsSW5kZXggPT09IHVuZGVmaW5lZCA/IDAgOiBpbml0aWFsSW5kZXgpO1xuICAgIGNvbnN0IHNldEluZGV4ID0gdXNlQ2FsbGJhY2soKGluZGV4KSA9PiB7XG4gICAgICAgIHNldFRhYmJhYmxlSW5kZXgoaW5kZXgpO1xuICAgIH0sIFtdKTtcbiAgICBjb25zdCB7IG1hbmFnZWRDaGlsZHJlbiwgaW5kaWNlc0J5RWxlbWVudCwgdXNlUm92aW5nVGFiSW5kZXhDaGlsZCwgZm9jdXNDdXJyZW50LCAuLi5yZXN0IH0gPSB1c2VSb3ZpbmdUYWJJbmRleCh7IGZvY3VzT25DaGFuZ2UsIHRhYmJhYmxlSW5kZXggfSk7XG4gICAgY29uc3QgeyBjdXJyZW50VHlwZWFoZWFkLCBpbnZhbGlkVHlwZWFoZWFkLCB1c2VUeXBlYWhlYWROYXZpZ2F0aW9uQ2hpbGQgfSA9IHVzZVR5cGVhaGVhZE5hdmlnYXRpb24oeyBjb2xsYXRvciwgZ2V0SW5kZXg6IGdldFRhYmJhYmxlSW5kZXgsIHNldEluZGV4LCB0eXBlYWhlYWRUaW1lb3V0OiAxMDAwIH0pO1xuICAgIGNvbnN0IHsgbmF2aWdhdGVUb0VuZCwgbmF2aWdhdGVUb0luZGV4LCBuYXZpZ2F0ZVRvTmV4dCwgbmF2aWdhdGVUb1ByZXYsIG5hdmlnYXRlVG9TdGFydCwgdXNlTGluZWFyTmF2aWdhdGlvbkNoaWxkIH0gPSB1c2VMaW5lYXJOYXZpZ2F0aW9uKHsgbmF2aWdhdGlvbkRpcmVjdGlvbjoga2V5TmF2aWdhdGlvbiwgZ2V0SW5kZXg6IGdldFRhYmJhYmxlSW5kZXgsIHNldEluZGV4LCBtYW5hZ2VkQ2hpbGRyZW4gfSk7XG4gICAgY29uc3QgdXNlTGlzdE5hdmlnYXRpb25DaGlsZCA9IHVzZUNhbGxiYWNrKChpbmZvKSA9PiB7XG4gICAgICAgIGNvbnN0IHsgdXNlVHlwZWFoZWFkTmF2aWdhdGlvbkNoaWxkUHJvcHMgfSA9IHVzZVR5cGVhaGVhZE5hdmlnYXRpb25DaGlsZChpbmZvKTtcbiAgICAgICAgY29uc3QgeyB1c2VMaW5lYXJOYXZpZ2F0aW9uQ2hpbGRQcm9wcyB9ID0gdXNlTGluZWFyTmF2aWdhdGlvbkNoaWxkKCk7XG4gICAgICAgIGNvbnN0IHsgdXNlUm92aW5nVGFiSW5kZXhDaGlsZFByb3BzLCB1c2VSb3ZpbmdUYWJJbmRleFNpYmxpbmdQcm9wcywgdGFiYmFibGUgfSA9IHVzZVJvdmluZ1RhYkluZGV4Q2hpbGQoaW5mbyk7XG4gICAgICAgIGNvbnN0IHVzZUxpc3ROYXZpZ2F0aW9uQ2hpbGRQcm9wcyA9IGZ1bmN0aW9uICh7IC4uLnByb3BzIH0pIHtcbiAgICAgICAgICAgIHJldHVybiB1c2VNZXJnZWRQcm9wcygpKHVzZVJvdmluZ1RhYkluZGV4Q2hpbGRQcm9wcyh1c2VUeXBlYWhlYWROYXZpZ2F0aW9uQ2hpbGRQcm9wcyh1c2VMaW5lYXJOYXZpZ2F0aW9uQ2hpbGRQcm9wcyh7IG9uQ2xpY2s6IHJvdmVUb1NlbGYgfSkpKSwgcHJvcHMpO1xuICAgICAgICB9O1xuICAgICAgICBjb25zdCByb3ZlVG9TZWxmID0gdXNlQ2FsbGJhY2soKCkgPT4geyBuYXZpZ2F0ZVRvSW5kZXgoaW5mby5pbmRleCk7IH0sIFtdKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHVzZUxpc3ROYXZpZ2F0aW9uQ2hpbGRQcm9wcyxcbiAgICAgICAgICAgIHVzZUxpc3ROYXZpZ2F0aW9uU2libGluZ1Byb3BzOiB1c2VSb3ZpbmdUYWJJbmRleFNpYmxpbmdQcm9wcyxcbiAgICAgICAgICAgIHRhYmJhYmxlLFxuICAgICAgICAgICAgLy9yb3ZlVG9TZWxmLFxuICAgICAgICAgICAgLy9lbGVtZW50XG4gICAgICAgIH07XG4gICAgfSwgW3VzZVR5cGVhaGVhZE5hdmlnYXRpb25DaGlsZCwgdXNlTGluZWFyTmF2aWdhdGlvbkNoaWxkLCB1c2VSb3ZpbmdUYWJJbmRleENoaWxkLCBuYXZpZ2F0ZVRvSW5kZXhdKTtcbiAgICByZXR1cm4ge1xuICAgICAgICB1c2VMaXN0TmF2aWdhdGlvbkNoaWxkLFxuICAgICAgICBjdXJyZW50VHlwZWFoZWFkLFxuICAgICAgICBpbnZhbGlkVHlwZWFoZWFkLFxuICAgICAgICB0YWJiYWJsZUluZGV4LFxuICAgICAgICBzZXRUYWJiYWJsZUluZGV4LFxuICAgICAgICBtYW5hZ2VkQ2hpbGRyZW4sXG4gICAgICAgIGluZGljZXNCeUVsZW1lbnQsXG4gICAgICAgIG5hdmlnYXRlVG9JbmRleCxcbiAgICAgICAgbmF2aWdhdGVUb05leHQsXG4gICAgICAgIG5hdmlnYXRlVG9QcmV2LFxuICAgICAgICBuYXZpZ2F0ZVRvU3RhcnQsXG4gICAgICAgIG5hdmlnYXRlVG9FbmQsXG4gICAgICAgIGZvY3VzQ3VycmVudCxcbiAgICAgICAgLi4ucmVzdFxuICAgIH07XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2UtbGlzdC1uYXZpZ2F0aW9uLmpzLm1hcCIsIi8qIVxuKiB0YWJiYWJsZSA1LjIuMFxuKiBAbGljZW5zZSBNSVQsIGh0dHBzOi8vZ2l0aHViLmNvbS9mb2N1cy10cmFwL3RhYmJhYmxlL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiovXG52YXIgY2FuZGlkYXRlU2VsZWN0b3JzID0gWydpbnB1dCcsICdzZWxlY3QnLCAndGV4dGFyZWEnLCAnYVtocmVmXScsICdidXR0b24nLCAnW3RhYmluZGV4XScsICdhdWRpb1tjb250cm9sc10nLCAndmlkZW9bY29udHJvbHNdJywgJ1tjb250ZW50ZWRpdGFibGVdOm5vdChbY29udGVudGVkaXRhYmxlPVwiZmFsc2VcIl0pJywgJ2RldGFpbHM+c3VtbWFyeTpmaXJzdC1vZi10eXBlJywgJ2RldGFpbHMnXTtcbnZhciBjYW5kaWRhdGVTZWxlY3RvciA9IC8qICNfX1BVUkVfXyAqL2NhbmRpZGF0ZVNlbGVjdG9ycy5qb2luKCcsJyk7XG52YXIgbWF0Y2hlcyA9IHR5cGVvZiBFbGVtZW50ID09PSAndW5kZWZpbmVkJyA/IGZ1bmN0aW9uICgpIHt9IDogRWxlbWVudC5wcm90b3R5cGUubWF0Y2hlcyB8fCBFbGVtZW50LnByb3RvdHlwZS5tc01hdGNoZXNTZWxlY3RvciB8fCBFbGVtZW50LnByb3RvdHlwZS53ZWJraXRNYXRjaGVzU2VsZWN0b3I7XG5cbnZhciBnZXRDYW5kaWRhdGVzID0gZnVuY3Rpb24gZ2V0Q2FuZGlkYXRlcyhlbCwgaW5jbHVkZUNvbnRhaW5lciwgZmlsdGVyKSB7XG4gIHZhciBjYW5kaWRhdGVzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmFwcGx5KGVsLnF1ZXJ5U2VsZWN0b3JBbGwoY2FuZGlkYXRlU2VsZWN0b3IpKTtcblxuICBpZiAoaW5jbHVkZUNvbnRhaW5lciAmJiBtYXRjaGVzLmNhbGwoZWwsIGNhbmRpZGF0ZVNlbGVjdG9yKSkge1xuICAgIGNhbmRpZGF0ZXMudW5zaGlmdChlbCk7XG4gIH1cblxuICBjYW5kaWRhdGVzID0gY2FuZGlkYXRlcy5maWx0ZXIoZmlsdGVyKTtcbiAgcmV0dXJuIGNhbmRpZGF0ZXM7XG59O1xuXG52YXIgaXNDb250ZW50RWRpdGFibGUgPSBmdW5jdGlvbiBpc0NvbnRlbnRFZGl0YWJsZShub2RlKSB7XG4gIHJldHVybiBub2RlLmNvbnRlbnRFZGl0YWJsZSA9PT0gJ3RydWUnO1xufTtcblxudmFyIGdldFRhYmluZGV4ID0gZnVuY3Rpb24gZ2V0VGFiaW5kZXgobm9kZSkge1xuICB2YXIgdGFiaW5kZXhBdHRyID0gcGFyc2VJbnQobm9kZS5nZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JyksIDEwKTtcblxuICBpZiAoIWlzTmFOKHRhYmluZGV4QXR0cikpIHtcbiAgICByZXR1cm4gdGFiaW5kZXhBdHRyO1xuICB9IC8vIEJyb3dzZXJzIGRvIG5vdCByZXR1cm4gYHRhYkluZGV4YCBjb3JyZWN0bHkgZm9yIGNvbnRlbnRFZGl0YWJsZSBub2RlcztcbiAgLy8gc28gaWYgdGhleSBkb24ndCBoYXZlIGEgdGFiaW5kZXggYXR0cmlidXRlIHNwZWNpZmljYWxseSBzZXQsIGFzc3VtZSBpdCdzIDAuXG5cblxuICBpZiAoaXNDb250ZW50RWRpdGFibGUobm9kZSkpIHtcbiAgICByZXR1cm4gMDtcbiAgfSAvLyBpbiBDaHJvbWUsIDxkZXRhaWxzLz4sIDxhdWRpbyBjb250cm9scy8+IGFuZCA8dmlkZW8gY29udHJvbHMvPiBlbGVtZW50cyBnZXQgYSBkZWZhdWx0XG4gIC8vICBgdGFiSW5kZXhgIG9mIC0xIHdoZW4gdGhlICd0YWJpbmRleCcgYXR0cmlidXRlIGlzbid0IHNwZWNpZmllZCBpbiB0aGUgRE9NLFxuICAvLyAgeWV0IHRoZXkgYXJlIHN0aWxsIHBhcnQgb2YgdGhlIHJlZ3VsYXIgdGFiIG9yZGVyOyBpbiBGRiwgdGhleSBnZXQgYSBkZWZhdWx0XG4gIC8vICBgdGFiSW5kZXhgIG9mIDA7IHNpbmNlIENocm9tZSBzdGlsbCBwdXRzIHRob3NlIGVsZW1lbnRzIGluIHRoZSByZWd1bGFyIHRhYlxuICAvLyAgb3JkZXIsIGNvbnNpZGVyIHRoZWlyIHRhYiBpbmRleCB0byBiZSAwLlxuXG5cbiAgaWYgKChub2RlLm5vZGVOYW1lID09PSAnQVVESU8nIHx8IG5vZGUubm9kZU5hbWUgPT09ICdWSURFTycgfHwgbm9kZS5ub2RlTmFtZSA9PT0gJ0RFVEFJTFMnKSAmJiBub2RlLmdldEF0dHJpYnV0ZSgndGFiaW5kZXgnKSA9PT0gbnVsbCkge1xuICAgIHJldHVybiAwO1xuICB9XG5cbiAgcmV0dXJuIG5vZGUudGFiSW5kZXg7XG59O1xuXG52YXIgc29ydE9yZGVyZWRUYWJiYWJsZXMgPSBmdW5jdGlvbiBzb3J0T3JkZXJlZFRhYmJhYmxlcyhhLCBiKSB7XG4gIHJldHVybiBhLnRhYkluZGV4ID09PSBiLnRhYkluZGV4ID8gYS5kb2N1bWVudE9yZGVyIC0gYi5kb2N1bWVudE9yZGVyIDogYS50YWJJbmRleCAtIGIudGFiSW5kZXg7XG59O1xuXG52YXIgaXNJbnB1dCA9IGZ1bmN0aW9uIGlzSW5wdXQobm9kZSkge1xuICByZXR1cm4gbm9kZS50YWdOYW1lID09PSAnSU5QVVQnO1xufTtcblxudmFyIGlzSGlkZGVuSW5wdXQgPSBmdW5jdGlvbiBpc0hpZGRlbklucHV0KG5vZGUpIHtcbiAgcmV0dXJuIGlzSW5wdXQobm9kZSkgJiYgbm9kZS50eXBlID09PSAnaGlkZGVuJztcbn07XG5cbnZhciBpc0RldGFpbHNXaXRoU3VtbWFyeSA9IGZ1bmN0aW9uIGlzRGV0YWlsc1dpdGhTdW1tYXJ5KG5vZGUpIHtcbiAgdmFyIHIgPSBub2RlLnRhZ05hbWUgPT09ICdERVRBSUxTJyAmJiBBcnJheS5wcm90b3R5cGUuc2xpY2UuYXBwbHkobm9kZS5jaGlsZHJlbikuc29tZShmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICByZXR1cm4gY2hpbGQudGFnTmFtZSA9PT0gJ1NVTU1BUlknO1xuICB9KTtcbiAgcmV0dXJuIHI7XG59O1xuXG52YXIgZ2V0Q2hlY2tlZFJhZGlvID0gZnVuY3Rpb24gZ2V0Q2hlY2tlZFJhZGlvKG5vZGVzLCBmb3JtKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAobm9kZXNbaV0uY2hlY2tlZCAmJiBub2Rlc1tpXS5mb3JtID09PSBmb3JtKSB7XG4gICAgICByZXR1cm4gbm9kZXNbaV07XG4gICAgfVxuICB9XG59O1xuXG52YXIgaXNUYWJiYWJsZVJhZGlvID0gZnVuY3Rpb24gaXNUYWJiYWJsZVJhZGlvKG5vZGUpIHtcbiAgaWYgKCFub2RlLm5hbWUpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHZhciByYWRpb1Njb3BlID0gbm9kZS5mb3JtIHx8IG5vZGUub3duZXJEb2N1bWVudDtcblxuICB2YXIgcXVlcnlSYWRpb3MgPSBmdW5jdGlvbiBxdWVyeVJhZGlvcyhuYW1lKSB7XG4gICAgcmV0dXJuIHJhZGlvU2NvcGUucXVlcnlTZWxlY3RvckFsbCgnaW5wdXRbdHlwZT1cInJhZGlvXCJdW25hbWU9XCInICsgbmFtZSArICdcIl0nKTtcbiAgfTtcblxuICB2YXIgcmFkaW9TZXQ7XG5cbiAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiB3aW5kb3cuQ1NTICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2Ygd2luZG93LkNTUy5lc2NhcGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICByYWRpb1NldCA9IHF1ZXJ5UmFkaW9zKHdpbmRvdy5DU1MuZXNjYXBlKG5vZGUubmFtZSkpO1xuICB9IGVsc2Uge1xuICAgIHRyeSB7XG4gICAgICByYWRpb1NldCA9IHF1ZXJ5UmFkaW9zKG5vZGUubmFtZSk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgY29uc29sZS5lcnJvcignTG9va3MgbGlrZSB5b3UgaGF2ZSBhIHJhZGlvIGJ1dHRvbiB3aXRoIGEgbmFtZSBhdHRyaWJ1dGUgY29udGFpbmluZyBpbnZhbGlkIENTUyBzZWxlY3RvciBjaGFyYWN0ZXJzIGFuZCBuZWVkIHRoZSBDU1MuZXNjYXBlIHBvbHlmaWxsOiAlcycsIGVyci5tZXNzYWdlKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICB2YXIgY2hlY2tlZCA9IGdldENoZWNrZWRSYWRpbyhyYWRpb1NldCwgbm9kZS5mb3JtKTtcbiAgcmV0dXJuICFjaGVja2VkIHx8IGNoZWNrZWQgPT09IG5vZGU7XG59O1xuXG52YXIgaXNSYWRpbyA9IGZ1bmN0aW9uIGlzUmFkaW8obm9kZSkge1xuICByZXR1cm4gaXNJbnB1dChub2RlKSAmJiBub2RlLnR5cGUgPT09ICdyYWRpbyc7XG59O1xuXG52YXIgaXNOb25UYWJiYWJsZVJhZGlvID0gZnVuY3Rpb24gaXNOb25UYWJiYWJsZVJhZGlvKG5vZGUpIHtcbiAgcmV0dXJuIGlzUmFkaW8obm9kZSkgJiYgIWlzVGFiYmFibGVSYWRpbyhub2RlKTtcbn07XG5cbnZhciBpc0hpZGRlbiA9IGZ1bmN0aW9uIGlzSGlkZGVuKG5vZGUsIGRpc3BsYXlDaGVjaykge1xuICBpZiAoZ2V0Q29tcHV0ZWRTdHlsZShub2RlKS52aXNpYmlsaXR5ID09PSAnaGlkZGVuJykge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgdmFyIGlzRGlyZWN0U3VtbWFyeSA9IG1hdGNoZXMuY2FsbChub2RlLCAnZGV0YWlscz5zdW1tYXJ5OmZpcnN0LW9mLXR5cGUnKTtcbiAgdmFyIG5vZGVVbmRlckRldGFpbHMgPSBpc0RpcmVjdFN1bW1hcnkgPyBub2RlLnBhcmVudEVsZW1lbnQgOiBub2RlO1xuXG4gIGlmIChtYXRjaGVzLmNhbGwobm9kZVVuZGVyRGV0YWlscywgJ2RldGFpbHM6bm90KFtvcGVuXSkgKicpKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBpZiAoIWRpc3BsYXlDaGVjayB8fCBkaXNwbGF5Q2hlY2sgPT09ICdmdWxsJykge1xuICAgIHdoaWxlIChub2RlKSB7XG4gICAgICBpZiAoZ2V0Q29tcHV0ZWRTdHlsZShub2RlKS5kaXNwbGF5ID09PSAnbm9uZScpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG5cbiAgICAgIG5vZGUgPSBub2RlLnBhcmVudEVsZW1lbnQ7XG4gICAgfVxuICB9IGVsc2UgaWYgKGRpc3BsYXlDaGVjayA9PT0gJ25vbi16ZXJvLWFyZWEnKSB7XG4gICAgdmFyIF9ub2RlJGdldEJvdW5kaW5nQ2xpZSA9IG5vZGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksXG4gICAgICAgIHdpZHRoID0gX25vZGUkZ2V0Qm91bmRpbmdDbGllLndpZHRoLFxuICAgICAgICBoZWlnaHQgPSBfbm9kZSRnZXRCb3VuZGluZ0NsaWUuaGVpZ2h0O1xuXG4gICAgcmV0dXJuIHdpZHRoID09PSAwICYmIGhlaWdodCA9PT0gMDtcbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn07XG5cbnZhciBpc05vZGVNYXRjaGluZ1NlbGVjdG9yRm9jdXNhYmxlID0gZnVuY3Rpb24gaXNOb2RlTWF0Y2hpbmdTZWxlY3RvckZvY3VzYWJsZShvcHRpb25zLCBub2RlKSB7XG4gIGlmIChub2RlLmRpc2FibGVkIHx8IGlzSGlkZGVuSW5wdXQobm9kZSkgfHwgaXNIaWRkZW4obm9kZSwgb3B0aW9ucy5kaXNwbGF5Q2hlY2spIHx8XG4gIC8qIEZvciBhIGRldGFpbHMgZWxlbWVudCB3aXRoIGEgc3VtbWFyeSwgdGhlIHN1bW1hcnkgZWxlbWVudCBnZXRzIHRoZSBmb2N1c2VkICAqL1xuICBpc0RldGFpbHNXaXRoU3VtbWFyeShub2RlKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufTtcblxudmFyIGlzTm9kZU1hdGNoaW5nU2VsZWN0b3JUYWJiYWJsZSA9IGZ1bmN0aW9uIGlzTm9kZU1hdGNoaW5nU2VsZWN0b3JUYWJiYWJsZShvcHRpb25zLCBub2RlKSB7XG4gIGlmICghaXNOb2RlTWF0Y2hpbmdTZWxlY3RvckZvY3VzYWJsZShvcHRpb25zLCBub2RlKSB8fCBpc05vblRhYmJhYmxlUmFkaW8obm9kZSkgfHwgZ2V0VGFiaW5kZXgobm9kZSkgPCAwKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59O1xuXG52YXIgdGFiYmFibGUgPSBmdW5jdGlvbiB0YWJiYWJsZShlbCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgdmFyIHJlZ3VsYXJUYWJiYWJsZXMgPSBbXTtcbiAgdmFyIG9yZGVyZWRUYWJiYWJsZXMgPSBbXTtcbiAgdmFyIGNhbmRpZGF0ZXMgPSBnZXRDYW5kaWRhdGVzKGVsLCBvcHRpb25zLmluY2x1ZGVDb250YWluZXIsIGlzTm9kZU1hdGNoaW5nU2VsZWN0b3JUYWJiYWJsZS5iaW5kKG51bGwsIG9wdGlvbnMpKTtcbiAgY2FuZGlkYXRlcy5mb3JFYWNoKGZ1bmN0aW9uIChjYW5kaWRhdGUsIGkpIHtcbiAgICB2YXIgY2FuZGlkYXRlVGFiaW5kZXggPSBnZXRUYWJpbmRleChjYW5kaWRhdGUpO1xuXG4gICAgaWYgKGNhbmRpZGF0ZVRhYmluZGV4ID09PSAwKSB7XG4gICAgICByZWd1bGFyVGFiYmFibGVzLnB1c2goY2FuZGlkYXRlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgb3JkZXJlZFRhYmJhYmxlcy5wdXNoKHtcbiAgICAgICAgZG9jdW1lbnRPcmRlcjogaSxcbiAgICAgICAgdGFiSW5kZXg6IGNhbmRpZGF0ZVRhYmluZGV4LFxuICAgICAgICBub2RlOiBjYW5kaWRhdGVcbiAgICAgIH0pO1xuICAgIH1cbiAgfSk7XG4gIHZhciB0YWJiYWJsZU5vZGVzID0gb3JkZXJlZFRhYmJhYmxlcy5zb3J0KHNvcnRPcmRlcmVkVGFiYmFibGVzKS5tYXAoZnVuY3Rpb24gKGEpIHtcbiAgICByZXR1cm4gYS5ub2RlO1xuICB9KS5jb25jYXQocmVndWxhclRhYmJhYmxlcyk7XG4gIHJldHVybiB0YWJiYWJsZU5vZGVzO1xufTtcblxudmFyIGZvY3VzYWJsZSA9IGZ1bmN0aW9uIGZvY3VzYWJsZShlbCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgdmFyIGNhbmRpZGF0ZXMgPSBnZXRDYW5kaWRhdGVzKGVsLCBvcHRpb25zLmluY2x1ZGVDb250YWluZXIsIGlzTm9kZU1hdGNoaW5nU2VsZWN0b3JGb2N1c2FibGUuYmluZChudWxsLCBvcHRpb25zKSk7XG4gIHJldHVybiBjYW5kaWRhdGVzO1xufTtcblxudmFyIGlzVGFiYmFibGUgPSBmdW5jdGlvbiBpc1RhYmJhYmxlKG5vZGUsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cbiAgaWYgKCFub2RlKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdObyBub2RlIHByb3ZpZGVkJyk7XG4gIH1cblxuICBpZiAobWF0Y2hlcy5jYWxsKG5vZGUsIGNhbmRpZGF0ZVNlbGVjdG9yKSA9PT0gZmFsc2UpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICByZXR1cm4gaXNOb2RlTWF0Y2hpbmdTZWxlY3RvclRhYmJhYmxlKG9wdGlvbnMsIG5vZGUpO1xufTtcblxudmFyIGZvY3VzYWJsZUNhbmRpZGF0ZVNlbGVjdG9yID0gLyogI19fUFVSRV9fICovY2FuZGlkYXRlU2VsZWN0b3JzLmNvbmNhdCgnaWZyYW1lJykuam9pbignLCcpO1xuXG52YXIgaXNGb2N1c2FibGUgPSBmdW5jdGlvbiBpc0ZvY3VzYWJsZShub2RlLCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG4gIGlmICghbm9kZSkge1xuICAgIHRocm93IG5ldyBFcnJvcignTm8gbm9kZSBwcm92aWRlZCcpO1xuICB9XG5cbiAgaWYgKG1hdGNoZXMuY2FsbChub2RlLCBmb2N1c2FibGVDYW5kaWRhdGVTZWxlY3RvcikgPT09IGZhbHNlKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuIGlzTm9kZU1hdGNoaW5nU2VsZWN0b3JGb2N1c2FibGUob3B0aW9ucywgbm9kZSk7XG59O1xuXG5leHBvcnQgeyBmb2N1c2FibGUsIGlzRm9jdXNhYmxlLCBpc1RhYmJhYmxlLCB0YWJiYWJsZSB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguZXNtLmpzLm1hcFxuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTYgR29vZ2xlIEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cbigoKSA9PiB7XG4gICAgdmFyIF9hLCBfYiwgX2M7XG4gICAgLyogU3ltYm9scyBmb3IgcHJpdmF0ZSBwcm9wZXJ0aWVzICovXG4gICAgY29uc3QgX2Jsb2NraW5nRWxlbWVudHMgPSBTeW1ib2woKTtcbiAgICBjb25zdCBfYWxyZWFkeUluZXJ0RWxlbWVudHMgPSBTeW1ib2woKTtcbiAgICBjb25zdCBfdG9wRWxQYXJlbnRzID0gU3ltYm9sKCk7XG4gICAgY29uc3QgX3NpYmxpbmdzVG9SZXN0b3JlID0gU3ltYm9sKCk7XG4gICAgY29uc3QgX3BhcmVudE1PID0gU3ltYm9sKCk7XG4gICAgLyogU3ltYm9scyBmb3IgcHJpdmF0ZSBzdGF0aWMgbWV0aG9kcyAqL1xuICAgIGNvbnN0IF90b3BDaGFuZ2VkID0gU3ltYm9sKCk7XG4gICAgY29uc3QgX3N3YXBJbmVydGVkU2libGluZyA9IFN5bWJvbCgpO1xuICAgIGNvbnN0IF9pbmVydFNpYmxpbmdzID0gU3ltYm9sKCk7XG4gICAgY29uc3QgX3Jlc3RvcmVJbmVydGVkU2libGluZ3MgPSBTeW1ib2woKTtcbiAgICBjb25zdCBfZ2V0UGFyZW50cyA9IFN5bWJvbCgpO1xuICAgIGNvbnN0IF9nZXREaXN0cmlidXRlZENoaWxkcmVuID0gU3ltYm9sKCk7XG4gICAgY29uc3QgX2lzSW5lcnRhYmxlID0gU3ltYm9sKCk7XG4gICAgY29uc3QgX2hhbmRsZU11dGF0aW9ucyA9IFN5bWJvbCgpO1xuICAgIGNsYXNzIEJsb2NraW5nRWxlbWVudHNJbXBsIHtcbiAgICAgICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIFRoZSBibG9ja2luZyBlbGVtZW50cy5cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgdGhpc1tfYV0gPSBbXTtcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogVXNlZCB0byBrZWVwIHRyYWNrIG9mIHRoZSBwYXJlbnRzIG9mIHRoZSB0b3AgZWxlbWVudCwgZnJvbSB0aGUgZWxlbWVudFxuICAgICAgICAgICAgICogaXRzZWxmIHVwIHRvIGJvZHkuIFdoZW4gdG9wIGNoYW5nZXMsIHRoZSBvbGQgdG9wIG1pZ2h0IGhhdmUgYmVlbiByZW1vdmVkXG4gICAgICAgICAgICAgKiBmcm9tIHRoZSBkb2N1bWVudCwgc28gd2UgbmVlZCB0byBtZW1vaXplIHRoZSBpbmVydGVkIHBhcmVudHMnIHNpYmxpbmdzXG4gICAgICAgICAgICAgKiBpbiBvcmRlciB0byByZXN0b3JlIHRoZWlyIGluZXJ0ZW5lc3Mgd2hlbiB0b3AgY2hhbmdlcy5cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgdGhpc1tfYl0gPSBbXTtcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogRWxlbWVudHMgdGhhdCBhcmUgYWxyZWFkeSBpbmVydCBiZWZvcmUgdGhlIGZpcnN0IGJsb2NraW5nIGVsZW1lbnQgaXNcbiAgICAgICAgICAgICAqIHB1c2hlZC5cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgdGhpc1tfY10gPSBuZXcgU2V0KCk7XG4gICAgICAgIH1cbiAgICAgICAgZGVzdHJ1Y3RvcigpIHtcbiAgICAgICAgICAgIC8vIFJlc3RvcmUgb3JpZ2luYWwgaW5lcnRuZXNzLlxuICAgICAgICAgICAgdGhpc1tfcmVzdG9yZUluZXJ0ZWRTaWJsaW5nc10odGhpc1tfdG9wRWxQYXJlbnRzXSk7XG4gICAgICAgICAgICAvLyBOb3RlIHdlIGRvbid0IHdhbnQgdG8gbWFrZSB0aGVzZSBwcm9wZXJ0aWVzIG51bGxhYmxlIG9uIHRoZSBjbGFzcyxcbiAgICAgICAgICAgIC8vIHNpbmNlIHRoZW4gd2UnZCBuZWVkIG5vbi1udWxsIGNhc3RzIGluIG1hbnkgcGxhY2VzLiBDYWxsaW5nIGEgbWV0aG9kIG9uXG4gICAgICAgICAgICAvLyBhIEJsb2NraW5nRWxlbWVudHMgaW5zdGFuY2UgYWZ0ZXIgY2FsbGluZyBkZXN0cnVjdG9yIHdpbGwgcmVzdWx0IGluIGFuXG4gICAgICAgICAgICAvLyBleGNlcHRpb24uXG4gICAgICAgICAgICBjb25zdCBudWxsYWJsZSA9IHRoaXM7XG4gICAgICAgICAgICBudWxsYWJsZVtfYmxvY2tpbmdFbGVtZW50c10gPSBudWxsO1xuICAgICAgICAgICAgbnVsbGFibGVbX3RvcEVsUGFyZW50c10gPSBudWxsO1xuICAgICAgICAgICAgbnVsbGFibGVbX2FscmVhZHlJbmVydEVsZW1lbnRzXSA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgZ2V0IHRvcCgpIHtcbiAgICAgICAgICAgIGNvbnN0IGVsZW1zID0gdGhpc1tfYmxvY2tpbmdFbGVtZW50c107XG4gICAgICAgICAgICByZXR1cm4gZWxlbXNbZWxlbXMubGVuZ3RoIC0gMV0gfHwgbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBwdXNoKGVsZW1lbnQpIHtcbiAgICAgICAgICAgIGlmICghZWxlbWVudCB8fCBlbGVtZW50ID09PSB0aGlzLnRvcCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIFJlbW92ZSBpdCBmcm9tIHRoZSBzdGFjaywgd2UnbGwgYnJpbmcgaXQgdG8gdGhlIHRvcC5cbiAgICAgICAgICAgIHRoaXMucmVtb3ZlKGVsZW1lbnQpO1xuICAgICAgICAgICAgdGhpc1tfdG9wQ2hhbmdlZF0oZWxlbWVudCk7XG4gICAgICAgICAgICB0aGlzW19ibG9ja2luZ0VsZW1lbnRzXS5wdXNoKGVsZW1lbnQpO1xuICAgICAgICB9XG4gICAgICAgIHJlbW92ZShlbGVtZW50KSB7XG4gICAgICAgICAgICBjb25zdCBpID0gdGhpc1tfYmxvY2tpbmdFbGVtZW50c10uaW5kZXhPZihlbGVtZW50KTtcbiAgICAgICAgICAgIGlmIChpID09PSAtMSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXNbX2Jsb2NraW5nRWxlbWVudHNdLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgIC8vIFRvcCBjaGFuZ2VkIG9ubHkgaWYgdGhlIHJlbW92ZWQgZWxlbWVudCB3YXMgdGhlIHRvcCBlbGVtZW50LlxuICAgICAgICAgICAgaWYgKGkgPT09IHRoaXNbX2Jsb2NraW5nRWxlbWVudHNdLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHRoaXNbX3RvcENoYW5nZWRdKHRoaXMudG9wKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHBvcCgpIHtcbiAgICAgICAgICAgIGNvbnN0IHRvcCA9IHRoaXMudG9wO1xuICAgICAgICAgICAgdG9wICYmIHRoaXMucmVtb3ZlKHRvcCk7XG4gICAgICAgICAgICByZXR1cm4gdG9wO1xuICAgICAgICB9XG4gICAgICAgIGhhcyhlbGVtZW50KSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpc1tfYmxvY2tpbmdFbGVtZW50c10uaW5kZXhPZihlbGVtZW50KSAhPT0gLTE7XG4gICAgICAgIH1cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFNldHMgYGluZXJ0YCB0byBhbGwgZG9jdW1lbnQgZWxlbWVudHMgZXhjZXB0IHRoZSBuZXcgdG9wIGVsZW1lbnQsIGl0c1xuICAgICAgICAgKiBwYXJlbnRzLCBhbmQgaXRzIGRpc3RyaWJ1dGVkIGNvbnRlbnQuXG4gICAgICAgICAqL1xuICAgICAgICBbKF9hID0gX2Jsb2NraW5nRWxlbWVudHMsIF9iID0gX3RvcEVsUGFyZW50cywgX2MgPSBfYWxyZWFkeUluZXJ0RWxlbWVudHMsIF90b3BDaGFuZ2VkKV0obmV3VG9wKSB7XG4gICAgICAgICAgICBjb25zdCB0b0tlZXBJbmVydCA9IHRoaXNbX2FscmVhZHlJbmVydEVsZW1lbnRzXTtcbiAgICAgICAgICAgIGNvbnN0IG9sZFBhcmVudHMgPSB0aGlzW190b3BFbFBhcmVudHNdO1xuICAgICAgICAgICAgLy8gTm8gbmV3IHRvcCwgcmVzZXQgb2xkIHRvcCBpZiBhbnkuXG4gICAgICAgICAgICBpZiAoIW5ld1RvcCkge1xuICAgICAgICAgICAgICAgIHRoaXNbX3Jlc3RvcmVJbmVydGVkU2libGluZ3NdKG9sZFBhcmVudHMpO1xuICAgICAgICAgICAgICAgIHRvS2VlcEluZXJ0LmNsZWFyKCk7XG4gICAgICAgICAgICAgICAgdGhpc1tfdG9wRWxQYXJlbnRzXSA9IFtdO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IG5ld1BhcmVudHMgPSB0aGlzW19nZXRQYXJlbnRzXShuZXdUb3ApO1xuICAgICAgICAgICAgLy8gTmV3IHRvcCBpcyBub3QgY29udGFpbmVkIGluIHRoZSBtYWluIGRvY3VtZW50IVxuICAgICAgICAgICAgaWYgKG5ld1BhcmVudHNbbmV3UGFyZW50cy5sZW5ndGggLSAxXS5wYXJlbnROb2RlICE9PSBkb2N1bWVudC5ib2R5KSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgRXJyb3IoJ05vbi1jb25uZWN0ZWQgZWxlbWVudCBjYW5ub3QgYmUgYSBibG9ja2luZyBlbGVtZW50Jyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBDYXN0IGhlcmUgYmVjYXVzZSB3ZSBrbm93IHdlJ2xsIGNhbGwgX2luZXJ0U2libGluZ3Mgb24gbmV3UGFyZW50c1xuICAgICAgICAgICAgLy8gYmVsb3cuXG4gICAgICAgICAgICB0aGlzW190b3BFbFBhcmVudHNdID0gbmV3UGFyZW50cztcbiAgICAgICAgICAgIGNvbnN0IHRvU2tpcCA9IHRoaXNbX2dldERpc3RyaWJ1dGVkQ2hpbGRyZW5dKG5ld1RvcCk7XG4gICAgICAgICAgICAvLyBObyBwcmV2aW91cyB0b3AgZWxlbWVudC5cbiAgICAgICAgICAgIGlmICghb2xkUGFyZW50cy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICB0aGlzW19pbmVydFNpYmxpbmdzXShuZXdQYXJlbnRzLCB0b1NraXAsIHRvS2VlcEluZXJ0KTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgaSA9IG9sZFBhcmVudHMubGVuZ3RoIC0gMTtcbiAgICAgICAgICAgIGxldCBqID0gbmV3UGFyZW50cy5sZW5ndGggLSAxO1xuICAgICAgICAgICAgLy8gRmluZCBjb21tb24gcGFyZW50LiBJbmRleCAwIGlzIHRoZSBlbGVtZW50IGl0c2VsZiAoc28gc3RvcCBiZWZvcmUgaXQpLlxuICAgICAgICAgICAgd2hpbGUgKGkgPiAwICYmIGogPiAwICYmIG9sZFBhcmVudHNbaV0gPT09IG5ld1BhcmVudHNbal0pIHtcbiAgICAgICAgICAgICAgICBpLS07XG4gICAgICAgICAgICAgICAgai0tO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gSWYgdXAgdGhlIHBhcmVudHMgdHJlZSB0aGVyZSBhcmUgMiBlbGVtZW50cyB0aGF0IGFyZSBzaWJsaW5ncywgc3dhcFxuICAgICAgICAgICAgLy8gdGhlIGluZXJ0ZWQgc2libGluZy5cbiAgICAgICAgICAgIGlmIChvbGRQYXJlbnRzW2ldICE9PSBuZXdQYXJlbnRzW2pdKSB7XG4gICAgICAgICAgICAgICAgdGhpc1tfc3dhcEluZXJ0ZWRTaWJsaW5nXShvbGRQYXJlbnRzW2ldLCBuZXdQYXJlbnRzW2pdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIFJlc3RvcmUgb2xkIHBhcmVudHMgc2libGluZ3MgaW5lcnRuZXNzLlxuICAgICAgICAgICAgaSA+IDAgJiYgdGhpc1tfcmVzdG9yZUluZXJ0ZWRTaWJsaW5nc10ob2xkUGFyZW50cy5zbGljZSgwLCBpKSk7XG4gICAgICAgICAgICAvLyBNYWtlIG5ldyBwYXJlbnRzIHNpYmxpbmdzIGluZXJ0LlxuICAgICAgICAgICAgaiA+IDAgJiYgdGhpc1tfaW5lcnRTaWJsaW5nc10obmV3UGFyZW50cy5zbGljZSgwLCBqKSwgdG9Ta2lwLCBudWxsKTtcbiAgICAgICAgfVxuICAgICAgICAvKipcbiAgICAgICAgICogU3dhcHMgaW5lcnRuZXNzIGJldHdlZW4gdHdvIHNpYmxpbmcgZWxlbWVudHMuXG4gICAgICAgICAqIFNldHMgdGhlIHByb3BlcnR5IGBpbmVydGAgb3ZlciB0aGUgYXR0cmlidXRlIHNpbmNlIHRoZSBpbmVydCBzcGVjXG4gICAgICAgICAqIGRvZXNuJ3Qgc3BlY2lmeSBpZiBpdCBzaG91bGQgYmUgcmVmbGVjdGVkLlxuICAgICAgICAgKiBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS9pbnRlcmFjdGlvbi5odG1sI2luZXJ0XG4gICAgICAgICAqL1xuICAgICAgICBbX3N3YXBJbmVydGVkU2libGluZ10ob2xkSW5lcnQsIG5ld0luZXJ0KSB7XG4gICAgICAgICAgICBjb25zdCBzaWJsaW5nc1RvUmVzdG9yZSA9IG9sZEluZXJ0W19zaWJsaW5nc1RvUmVzdG9yZV07XG4gICAgICAgICAgICAvLyBvbGRJbmVydCBpcyBub3QgY29udGFpbmVkIGluIHNpYmxpbmdzIHRvIHJlc3RvcmUsIHNvIHdlIGhhdmUgdG8gY2hlY2tcbiAgICAgICAgICAgIC8vIGlmIGl0J3MgaW5lcnRhYmxlIGFuZCBpZiBhbHJlYWR5IGluZXJ0LlxuICAgICAgICAgICAgaWYgKHRoaXNbX2lzSW5lcnRhYmxlXShvbGRJbmVydCkgJiYgIW9sZEluZXJ0LmluZXJ0KSB7XG4gICAgICAgICAgICAgICAgb2xkSW5lcnQuaW5lcnQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHNpYmxpbmdzVG9SZXN0b3JlLmFkZChvbGRJbmVydCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBJZiBuZXdJbmVydCB3YXMgYWxyZWFkeSBiZXR3ZWVuIHRoZSBzaWJsaW5ncyB0byByZXN0b3JlLCBpdCBtZWFucyBpdCBpc1xuICAgICAgICAgICAgLy8gaW5lcnRhYmxlIGFuZCBtdXN0IGJlIHJlc3RvcmVkLlxuICAgICAgICAgICAgaWYgKHNpYmxpbmdzVG9SZXN0b3JlLmhhcyhuZXdJbmVydCkpIHtcbiAgICAgICAgICAgICAgICBuZXdJbmVydC5pbmVydCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHNpYmxpbmdzVG9SZXN0b3JlLmRlbGV0ZShuZXdJbmVydCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBuZXdJbmVydFtfcGFyZW50TU9dID0gb2xkSW5lcnRbX3BhcmVudE1PXTtcbiAgICAgICAgICAgIG5ld0luZXJ0W19zaWJsaW5nc1RvUmVzdG9yZV0gPSBzaWJsaW5nc1RvUmVzdG9yZTtcbiAgICAgICAgICAgIG9sZEluZXJ0W19wYXJlbnRNT10gPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICBvbGRJbmVydFtfc2libGluZ3NUb1Jlc3RvcmVdID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZXN0b3JlcyBvcmlnaW5hbCBpbmVydG5lc3MgdG8gdGhlIHNpYmxpbmdzIG9mIHRoZSBlbGVtZW50cy5cbiAgICAgICAgICogU2V0cyB0aGUgcHJvcGVydHkgYGluZXJ0YCBvdmVyIHRoZSBhdHRyaWJ1dGUgc2luY2UgdGhlIGluZXJ0IHNwZWNcbiAgICAgICAgICogZG9lc24ndCBzcGVjaWZ5IGlmIGl0IHNob3VsZCBiZSByZWZsZWN0ZWQuXG4gICAgICAgICAqIGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvbXVsdGlwYWdlL2ludGVyYWN0aW9uLmh0bWwjaW5lcnRcbiAgICAgICAgICovXG4gICAgICAgIFtfcmVzdG9yZUluZXJ0ZWRTaWJsaW5nc10oZWxlbWVudHMpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgZWxlbWVudCBvZiBlbGVtZW50cykge1xuICAgICAgICAgICAgICAgIGNvbnN0IG1vID0gZWxlbWVudFtfcGFyZW50TU9dO1xuICAgICAgICAgICAgICAgIG1vLmRpc2Nvbm5lY3QoKTtcbiAgICAgICAgICAgICAgICBlbGVtZW50W19wYXJlbnRNT10gPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2libGluZ3MgPSBlbGVtZW50W19zaWJsaW5nc1RvUmVzdG9yZV07XG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBzaWJsaW5nIG9mIHNpYmxpbmdzKSB7XG4gICAgICAgICAgICAgICAgICAgIHNpYmxpbmcuaW5lcnQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxlbWVudFtfc2libGluZ3NUb1Jlc3RvcmVdID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJbmVydHMgdGhlIHNpYmxpbmdzIG9mIHRoZSBlbGVtZW50cyBleGNlcHQgdGhlIGVsZW1lbnRzIHRvIHNraXAuIFN0b3Jlc1xuICAgICAgICAgKiB0aGUgaW5lcnRlZCBzaWJsaW5ncyBpbnRvIHRoZSBlbGVtZW50J3Mgc3ltYm9sIGBfc2libGluZ3NUb1Jlc3RvcmVgLlxuICAgICAgICAgKiBQYXNzIGB0b0tlZXBJbmVydGAgdG8gY29sbGVjdCB0aGUgYWxyZWFkeSBpbmVydCBlbGVtZW50cy5cbiAgICAgICAgICogU2V0cyB0aGUgcHJvcGVydHkgYGluZXJ0YCBvdmVyIHRoZSBhdHRyaWJ1dGUgc2luY2UgdGhlIGluZXJ0IHNwZWNcbiAgICAgICAgICogZG9lc24ndCBzcGVjaWZ5IGlmIGl0IHNob3VsZCBiZSByZWZsZWN0ZWQuXG4gICAgICAgICAqIGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvbXVsdGlwYWdlL2ludGVyYWN0aW9uLmh0bWwjaW5lcnRcbiAgICAgICAgICovXG4gICAgICAgIFtfaW5lcnRTaWJsaW5nc10oZWxlbWVudHMsIHRvU2tpcCwgdG9LZWVwSW5lcnQpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgZWxlbWVudCBvZiBlbGVtZW50cykge1xuICAgICAgICAgICAgICAgIC8vIEFzc3VtZSBlbGVtZW50IGlzIG5vdCBhIERvY3VtZW50LCBzbyBpdCBtdXN0IGhhdmUgYSBwYXJlbnROb2RlLlxuICAgICAgICAgICAgICAgIGNvbnN0IHBhcmVudCA9IGVsZW1lbnQucGFyZW50Tm9kZTtcbiAgICAgICAgICAgICAgICBjb25zdCBjaGlsZHJlbiA9IHBhcmVudC5jaGlsZHJlbjtcbiAgICAgICAgICAgICAgICBjb25zdCBpbmVydGVkU2libGluZ3MgPSBuZXcgU2V0KCk7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBjaGlsZHJlbi5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBzaWJsaW5nID0gY2hpbGRyZW5bal07XG4gICAgICAgICAgICAgICAgICAgIC8vIFNraXAgdGhlIGlucHV0IGVsZW1lbnQsIGlmIG5vdCBpbmVydGFibGUgb3IgdG8gYmUgc2tpcHBlZC5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHNpYmxpbmcgPT09IGVsZW1lbnQgfHwgIXRoaXNbX2lzSW5lcnRhYmxlXShzaWJsaW5nKSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgKHRvU2tpcCAmJiB0b1NraXAuaGFzKHNpYmxpbmcpKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLy8gU2hvdWxkIGJlIGNvbGxlY3RlZCBzaW5jZSBhbHJlYWR5IGluZXJ0ZWQuXG4gICAgICAgICAgICAgICAgICAgIGlmICh0b0tlZXBJbmVydCAmJiBzaWJsaW5nLmluZXJ0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0b0tlZXBJbmVydC5hZGQoc2libGluZyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzaWJsaW5nLmluZXJ0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGluZXJ0ZWRTaWJsaW5ncy5hZGQoc2libGluZyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gU3RvcmUgdGhlIHNpYmxpbmdzIHRoYXQgd2VyZSBpbmVydGVkLlxuICAgICAgICAgICAgICAgIGVsZW1lbnRbX3NpYmxpbmdzVG9SZXN0b3JlXSA9IGluZXJ0ZWRTaWJsaW5ncztcbiAgICAgICAgICAgICAgICAvLyBPYnNlcnZlIG9ubHkgaW1tZWRpYXRlIGNoaWxkcmVuIG11dGF0aW9ucyBvbiB0aGUgcGFyZW50LlxuICAgICAgICAgICAgICAgIGNvbnN0IG1vID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIodGhpc1tfaGFuZGxlTXV0YXRpb25zXS5iaW5kKHRoaXMpKTtcbiAgICAgICAgICAgICAgICBlbGVtZW50W19wYXJlbnRNT10gPSBtbztcbiAgICAgICAgICAgICAgICBsZXQgcGFyZW50VG9PYnNlcnZlID0gcGFyZW50O1xuICAgICAgICAgICAgICAgIC8vIElmIHdlJ3JlIHVzaW5nIHRoZSBTaGFkeURPTSBwb2x5ZmlsbCwgdGhlbiBvdXIgcGFyZW50IGNvdWxkIGJlIGFcbiAgICAgICAgICAgICAgICAvLyBzaGFkeSByb290LCB3aGljaCBpcyBhbiBvYmplY3QgdGhhdCBhY3RzIGxpa2UgYSBTaGFkb3dSb290LCBidXQgaXNuJ3RcbiAgICAgICAgICAgICAgICAvLyBhY3R1YWxseSBhIG5vZGUgaW4gdGhlIHJlYWwgRE9NLiBPYnNlcnZlIHRoZSByZWFsIERPTSBwYXJlbnQgaW5zdGVhZC5cbiAgICAgICAgICAgICAgICBjb25zdCBtYXliZVNoYWR5Um9vdCA9IHBhcmVudFRvT2JzZXJ2ZTtcbiAgICAgICAgICAgICAgICBpZiAobWF5YmVTaGFkeVJvb3QuX19zaGFkeSAmJiBtYXliZVNoYWR5Um9vdC5ob3N0KSB7XG4gICAgICAgICAgICAgICAgICAgIHBhcmVudFRvT2JzZXJ2ZSA9IG1heWJlU2hhZHlSb290Lmhvc3Q7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIG1vLm9ic2VydmUocGFyZW50VG9PYnNlcnZlLCB7XG4gICAgICAgICAgICAgICAgICAgIGNoaWxkTGlzdDogdHJ1ZSxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvKipcbiAgICAgICAgICogSGFuZGxlcyBuZXdseSBhZGRlZC9yZW1vdmVkIG5vZGVzIGJ5IHRvZ2dsaW5nIHRoZWlyIGluZXJ0bmVzcy5cbiAgICAgICAgICogSXQgYWxzbyBjaGVja3MgaWYgdGhlIGN1cnJlbnQgdG9wIEJsb2NraW5nIEVsZW1lbnQgaGFzIGJlZW4gcmVtb3ZlZCxcbiAgICAgICAgICogbm90aWZ5aW5nIGFuZCByZW1vdmluZyBpdC5cbiAgICAgICAgICovXG4gICAgICAgIFtfaGFuZGxlTXV0YXRpb25zXShtdXRhdGlvbnMpIHtcbiAgICAgICAgICAgIGNvbnN0IHBhcmVudHMgPSB0aGlzW190b3BFbFBhcmVudHNdO1xuICAgICAgICAgICAgY29uc3QgdG9LZWVwSW5lcnQgPSB0aGlzW19hbHJlYWR5SW5lcnRFbGVtZW50c107XG4gICAgICAgICAgICBmb3IgKGNvbnN0IG11dGF0aW9uIG9mIG11dGF0aW9ucykge1xuICAgICAgICAgICAgICAgIC8vIElmIHRoZSB0YXJnZXQgaXMgYSBzaGFkb3dSb290LCBnZXQgaXRzIGhvc3QgYXMgd2Ugc2tpcCBzaGFkb3dSb290cyB3aGVuXG4gICAgICAgICAgICAgICAgLy8gY29tcHV0aW5nIF90b3BFbFBhcmVudHMuXG4gICAgICAgICAgICAgICAgY29uc3QgdGFyZ2V0ID0gbXV0YXRpb24udGFyZ2V0Lmhvc3QgfHwgbXV0YXRpb24udGFyZ2V0O1xuICAgICAgICAgICAgICAgIGNvbnN0IGlkeCA9IHRhcmdldCA9PT0gZG9jdW1lbnQuYm9keSA/XG4gICAgICAgICAgICAgICAgICAgIHBhcmVudHMubGVuZ3RoIDpcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50cy5pbmRleE9mKHRhcmdldCk7XG4gICAgICAgICAgICAgICAgY29uc3QgaW5lcnRlZENoaWxkID0gcGFyZW50c1tpZHggLSAxXTtcbiAgICAgICAgICAgICAgICBjb25zdCBpbmVydGVkU2libGluZ3MgPSBpbmVydGVkQ2hpbGRbX3NpYmxpbmdzVG9SZXN0b3JlXTtcbiAgICAgICAgICAgICAgICAvLyBUbyByZXN0b3JlLlxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbXV0YXRpb24ucmVtb3ZlZE5vZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNpYmxpbmcgPSBtdXRhdGlvbi5yZW1vdmVkTm9kZXNbaV07XG4gICAgICAgICAgICAgICAgICAgIGlmIChzaWJsaW5nID09PSBpbmVydGVkQ2hpbGQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuaW5mbygnRGV0ZWN0ZWQgcmVtb3ZhbCBvZiB0aGUgdG9wIEJsb2NraW5nIEVsZW1lbnQuJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBvcCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChpbmVydGVkU2libGluZ3MuaGFzKHNpYmxpbmcpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzaWJsaW5nLmluZXJ0ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbmVydGVkU2libGluZ3MuZGVsZXRlKHNpYmxpbmcpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIFRvIGluZXJ0LlxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbXV0YXRpb24uYWRkZWROb2Rlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBzaWJsaW5nID0gbXV0YXRpb24uYWRkZWROb2Rlc1tpXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzW19pc0luZXJ0YWJsZV0oc2libGluZykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0b0tlZXBJbmVydCAmJiBzaWJsaW5nLmluZXJ0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0b0tlZXBJbmVydC5hZGQoc2libGluZyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzaWJsaW5nLmluZXJ0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGluZXJ0ZWRTaWJsaW5ncy5hZGQoc2libGluZyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJldHVybnMgaWYgdGhlIGVsZW1lbnQgaXMgaW5lcnRhYmxlLlxuICAgICAgICAgKi9cbiAgICAgICAgW19pc0luZXJ0YWJsZV0oZWxlbWVudCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlID09PSAvXihzdHlsZXx0ZW1wbGF0ZXxzY3JpcHQpJC8udGVzdChlbGVtZW50LmxvY2FsTmFtZSk7XG4gICAgICAgIH1cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJldHVybnMgdGhlIGxpc3Qgb2YgbmV3UGFyZW50cyBvZiBhbiBlbGVtZW50LCBzdGFydGluZyBmcm9tIGVsZW1lbnRcbiAgICAgICAgICogKGluY2x1ZGVkKSB1cCB0byBgZG9jdW1lbnQuYm9keWAgKGV4Y2x1ZGVkKS5cbiAgICAgICAgICovXG4gICAgICAgIFtfZ2V0UGFyZW50c10oZWxlbWVudCkge1xuICAgICAgICAgICAgY29uc3QgcGFyZW50cyA9IFtdO1xuICAgICAgICAgICAgbGV0IGN1cnJlbnQgPSBlbGVtZW50O1xuICAgICAgICAgICAgLy8gU3RvcCB0byBib2R5LlxuICAgICAgICAgICAgd2hpbGUgKGN1cnJlbnQgJiYgY3VycmVudCAhPT0gZG9jdW1lbnQuYm9keSkge1xuICAgICAgICAgICAgICAgIC8vIFNraXAgc2hhZG93IHJvb3RzLlxuICAgICAgICAgICAgICAgIGlmIChjdXJyZW50Lm5vZGVUeXBlID09PSBOb2RlLkVMRU1FTlRfTk9ERSkge1xuICAgICAgICAgICAgICAgICAgICBwYXJlbnRzLnB1c2goY3VycmVudCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIFNoYWRvd0RvbSB2MVxuICAgICAgICAgICAgICAgIGlmIChjdXJyZW50LmFzc2lnbmVkU2xvdCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBDb2xsZWN0IHNsb3RzIGZyb20gZGVlcGVzdCBzbG90IHRvIHRvcC5cbiAgICAgICAgICAgICAgICAgICAgd2hpbGUgKGN1cnJlbnQgPSBjdXJyZW50LmFzc2lnbmVkU2xvdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFyZW50cy5wdXNoKGN1cnJlbnQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8vIENvbnRpbnVlIHRoZSBzZWFyY2ggb24gdGhlIHRvcCBzbG90LlxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50ID0gcGFyZW50cy5wb3AoKTtcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGN1cnJlbnQgPSBjdXJyZW50LnBhcmVudE5vZGUgfHxcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudC5ob3N0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHBhcmVudHM7XG4gICAgICAgIH1cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJldHVybnMgdGhlIGRpc3RyaWJ1dGVkIGNoaWxkcmVuIG9mIHRoZSBlbGVtZW50J3Mgc2hhZG93IHJvb3QuXG4gICAgICAgICAqIFJldHVybnMgbnVsbCBpZiB0aGUgZWxlbWVudCBkb2Vzbid0IGhhdmUgYSBzaGFkb3cgcm9vdC5cbiAgICAgICAgICovXG4gICAgICAgIFtfZ2V0RGlzdHJpYnV0ZWRDaGlsZHJlbl0oZWxlbWVudCkge1xuICAgICAgICAgICAgY29uc3Qgc2hhZG93Um9vdCA9IGVsZW1lbnQuc2hhZG93Um9vdDtcbiAgICAgICAgICAgIGlmICghc2hhZG93Um9vdCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IFNldCgpO1xuICAgICAgICAgICAgbGV0IGk7XG4gICAgICAgICAgICBsZXQgajtcbiAgICAgICAgICAgIGxldCBub2RlcztcbiAgICAgICAgICAgIGNvbnN0IHNsb3RzID0gc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yQWxsKCdzbG90Jyk7XG4gICAgICAgICAgICBpZiAoc2xvdHMubGVuZ3RoICYmIHNsb3RzWzBdLmFzc2lnbmVkTm9kZXMpIHtcbiAgICAgICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgc2xvdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgbm9kZXMgPSBzbG90c1tpXS5hc3NpZ25lZE5vZGVzKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsYXR0ZW46IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGogPSAwOyBqIDwgbm9kZXMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChub2Rlc1tqXS5ub2RlVHlwZSA9PT0gTm9kZS5FTEVNRU5UX05PREUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQuYWRkKG5vZGVzW2pdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBObyBuZWVkIHRvIHNlYXJjaCBmb3IgPGNvbnRlbnQ+LlxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBkb2N1bWVudC4kYmxvY2tpbmdFbGVtZW50cyA9XG4gICAgICAgIG5ldyBCbG9ja2luZ0VsZW1lbnRzSW1wbCgpO1xufSkoKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWJsb2NraW5nLWVsZW1lbnRzLmpzLm1hcCIsIihmdW5jdGlvbiAoZ2xvYmFsLCBmYWN0b3J5KSB7XG4gIHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyA/IGZhY3RvcnkoKSA6XG4gIHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCA/IGRlZmluZSgnaW5lcnQnLCBmYWN0b3J5KSA6XG4gIChmYWN0b3J5KCkpO1xufSh0aGlzLCAoZnVuY3Rpb24gKCkgeyAndXNlIHN0cmljdCc7XG5cbiAgdmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxuICBmdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG4gIC8qKlxuICAgKiBUaGlzIHdvcmsgaXMgbGljZW5zZWQgdW5kZXIgdGhlIFczQyBTb2Z0d2FyZSBhbmQgRG9jdW1lbnQgTGljZW5zZVxuICAgKiAoaHR0cDovL3d3dy53My5vcmcvQ29uc29ydGl1bS9MZWdhbC8yMDE1L2NvcHlyaWdodC1zb2Z0d2FyZS1hbmQtZG9jdW1lbnQpLlxuICAgKi9cblxuICAoZnVuY3Rpb24gKCkge1xuICAgIC8vIFJldHVybiBlYXJseSBpZiB3ZSdyZSBub3QgcnVubmluZyBpbnNpZGUgb2YgdGhlIGJyb3dzZXIuXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gQ29udmVuaWVuY2UgZnVuY3Rpb24gZm9yIGNvbnZlcnRpbmcgTm9kZUxpc3RzLlxuICAgIC8qKiBAdHlwZSB7dHlwZW9mIEFycmF5LnByb3RvdHlwZS5zbGljZX0gKi9cbiAgICB2YXIgc2xpY2UgPSBBcnJheS5wcm90b3R5cGUuc2xpY2U7XG5cbiAgICAvKipcbiAgICAgKiBJRSBoYXMgYSBub24tc3RhbmRhcmQgbmFtZSBmb3IgXCJtYXRjaGVzXCIuXG4gICAgICogQHR5cGUge3R5cGVvZiBFbGVtZW50LnByb3RvdHlwZS5tYXRjaGVzfVxuICAgICAqL1xuICAgIHZhciBtYXRjaGVzID0gRWxlbWVudC5wcm90b3R5cGUubWF0Y2hlcyB8fCBFbGVtZW50LnByb3RvdHlwZS5tc01hdGNoZXNTZWxlY3RvcjtcblxuICAgIC8qKiBAdHlwZSB7c3RyaW5nfSAqL1xuICAgIHZhciBfZm9jdXNhYmxlRWxlbWVudHNTdHJpbmcgPSBbJ2FbaHJlZl0nLCAnYXJlYVtocmVmXScsICdpbnB1dDpub3QoW2Rpc2FibGVkXSknLCAnc2VsZWN0Om5vdChbZGlzYWJsZWRdKScsICd0ZXh0YXJlYTpub3QoW2Rpc2FibGVkXSknLCAnYnV0dG9uOm5vdChbZGlzYWJsZWRdKScsICdkZXRhaWxzJywgJ3N1bW1hcnknLCAnaWZyYW1lJywgJ29iamVjdCcsICdlbWJlZCcsICdbY29udGVudGVkaXRhYmxlXSddLmpvaW4oJywnKTtcblxuICAgIC8qKlxuICAgICAqIGBJbmVydFJvb3RgIG1hbmFnZXMgYSBzaW5nbGUgaW5lcnQgc3VidHJlZSwgaS5lLiBhIERPTSBzdWJ0cmVlIHdob3NlIHJvb3QgZWxlbWVudCBoYXMgYW4gYGluZXJ0YFxuICAgICAqIGF0dHJpYnV0ZS5cbiAgICAgKlxuICAgICAqIEl0cyBtYWluIGZ1bmN0aW9ucyBhcmU6XG4gICAgICpcbiAgICAgKiAtIHRvIGNyZWF0ZSBhbmQgbWFpbnRhaW4gYSBzZXQgb2YgbWFuYWdlZCBgSW5lcnROb2RlYHMsIGluY2x1ZGluZyB3aGVuIG11dGF0aW9ucyBvY2N1ciBpbiB0aGVcbiAgICAgKiAgIHN1YnRyZWUuIFRoZSBgbWFrZVN1YnRyZWVVbmZvY3VzYWJsZSgpYCBtZXRob2QgaGFuZGxlcyBjb2xsZWN0aW5nIGBJbmVydE5vZGVgcyB2aWEgcmVnaXN0ZXJpbmdcbiAgICAgKiAgIGVhY2ggZm9jdXNhYmxlIG5vZGUgaW4gdGhlIHN1YnRyZWUgd2l0aCB0aGUgc2luZ2xldG9uIGBJbmVydE1hbmFnZXJgIHdoaWNoIG1hbmFnZXMgYWxsIGtub3duXG4gICAgICogICBmb2N1c2FibGUgbm9kZXMgd2l0aGluIGluZXJ0IHN1YnRyZWVzLiBgSW5lcnRNYW5hZ2VyYCBlbnN1cmVzIHRoYXQgYSBzaW5nbGUgYEluZXJ0Tm9kZWBcbiAgICAgKiAgIGluc3RhbmNlIGV4aXN0cyBmb3IgZWFjaCBmb2N1c2FibGUgbm9kZSB3aGljaCBoYXMgYXQgbGVhc3Qgb25lIGluZXJ0IHJvb3QgYXMgYW4gYW5jZXN0b3IuXG4gICAgICpcbiAgICAgKiAtIHRvIG5vdGlmeSBhbGwgbWFuYWdlZCBgSW5lcnROb2RlYHMgd2hlbiB0aGlzIHN1YnRyZWUgc3RvcHMgYmVpbmcgaW5lcnQgKGkuZS4gd2hlbiB0aGUgYGluZXJ0YFxuICAgICAqICAgYXR0cmlidXRlIGlzIHJlbW92ZWQgZnJvbSB0aGUgcm9vdCBub2RlKS4gVGhpcyBpcyBoYW5kbGVkIGluIHRoZSBkZXN0cnVjdG9yLCB3aGljaCBjYWxscyB0aGVcbiAgICAgKiAgIGBkZXJlZ2lzdGVyYCBtZXRob2Qgb24gYEluZXJ0TWFuYWdlcmAgZm9yIGVhY2ggbWFuYWdlZCBpbmVydCBub2RlLlxuICAgICAqL1xuXG4gICAgdmFyIEluZXJ0Um9vdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIC8qKlxuICAgICAgICogQHBhcmFtIHshRWxlbWVudH0gcm9vdEVsZW1lbnQgVGhlIEVsZW1lbnQgYXQgdGhlIHJvb3Qgb2YgdGhlIGluZXJ0IHN1YnRyZWUuXG4gICAgICAgKiBAcGFyYW0geyFJbmVydE1hbmFnZXJ9IGluZXJ0TWFuYWdlciBUaGUgZ2xvYmFsIHNpbmdsZXRvbiBJbmVydE1hbmFnZXIgb2JqZWN0LlxuICAgICAgICovXG4gICAgICBmdW5jdGlvbiBJbmVydFJvb3Qocm9vdEVsZW1lbnQsIGluZXJ0TWFuYWdlcikge1xuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgSW5lcnRSb290KTtcblxuICAgICAgICAvKiogQHR5cGUgeyFJbmVydE1hbmFnZXJ9ICovXG4gICAgICAgIHRoaXMuX2luZXJ0TWFuYWdlciA9IGluZXJ0TWFuYWdlcjtcblxuICAgICAgICAvKiogQHR5cGUgeyFFbGVtZW50fSAqL1xuICAgICAgICB0aGlzLl9yb290RWxlbWVudCA9IHJvb3RFbGVtZW50O1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAdHlwZSB7IVNldDwhSW5lcnROb2RlPn1cbiAgICAgICAgICogQWxsIG1hbmFnZWQgZm9jdXNhYmxlIG5vZGVzIGluIHRoaXMgSW5lcnRSb290J3Mgc3VidHJlZS5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuX21hbmFnZWROb2RlcyA9IG5ldyBTZXQoKTtcblxuICAgICAgICAvLyBNYWtlIHRoZSBzdWJ0cmVlIGhpZGRlbiBmcm9tIGFzc2lzdGl2ZSB0ZWNobm9sb2d5XG4gICAgICAgIGlmICh0aGlzLl9yb290RWxlbWVudC5oYXNBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJykpIHtcbiAgICAgICAgICAvKiogQHR5cGUgez9zdHJpbmd9ICovXG4gICAgICAgICAgdGhpcy5fc2F2ZWRBcmlhSGlkZGVuID0gdGhpcy5fcm9vdEVsZW1lbnQuZ2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuX3NhdmVkQXJpYUhpZGRlbiA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fcm9vdEVsZW1lbnQuc2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicsICd0cnVlJyk7XG5cbiAgICAgICAgLy8gTWFrZSBhbGwgZm9jdXNhYmxlIGVsZW1lbnRzIGluIHRoZSBzdWJ0cmVlIHVuZm9jdXNhYmxlIGFuZCBhZGQgdGhlbSB0byBfbWFuYWdlZE5vZGVzXG4gICAgICAgIHRoaXMuX21ha2VTdWJ0cmVlVW5mb2N1c2FibGUodGhpcy5fcm9vdEVsZW1lbnQpO1xuXG4gICAgICAgIC8vIFdhdGNoIGZvcjpcbiAgICAgICAgLy8gLSBhbnkgYWRkaXRpb25zIGluIHRoZSBzdWJ0cmVlOiBtYWtlIHRoZW0gdW5mb2N1c2FibGUgdG9vXG4gICAgICAgIC8vIC0gYW55IHJlbW92YWxzIGZyb20gdGhlIHN1YnRyZWU6IHJlbW92ZSB0aGVtIGZyb20gdGhpcyBpbmVydCByb290J3MgbWFuYWdlZCBub2Rlc1xuICAgICAgICAvLyAtIGF0dHJpYnV0ZSBjaGFuZ2VzOiBpZiBgdGFiaW5kZXhgIGlzIGFkZGVkLCBvciByZW1vdmVkIGZyb20gYW4gaW50cmluc2ljYWxseSBmb2N1c2FibGVcbiAgICAgICAgLy8gICBlbGVtZW50LCBtYWtlIHRoYXQgbm9kZSBhIG1hbmFnZWQgbm9kZS5cbiAgICAgICAgdGhpcy5fb2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcih0aGlzLl9vbk11dGF0aW9uLmJpbmQodGhpcykpO1xuICAgICAgICB0aGlzLl9vYnNlcnZlci5vYnNlcnZlKHRoaXMuX3Jvb3RFbGVtZW50LCB7IGF0dHJpYnV0ZXM6IHRydWUsIGNoaWxkTGlzdDogdHJ1ZSwgc3VidHJlZTogdHJ1ZSB9KTtcbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBDYWxsIHRoaXMgd2hlbmV2ZXIgdGhpcyBvYmplY3QgaXMgYWJvdXQgdG8gYmVjb21lIG9ic29sZXRlLiAgVGhpcyB1bndpbmRzIGFsbCBvZiB0aGUgc3RhdGVcbiAgICAgICAqIHN0b3JlZCBpbiB0aGlzIG9iamVjdCBhbmQgdXBkYXRlcyB0aGUgc3RhdGUgb2YgYWxsIG9mIHRoZSBtYW5hZ2VkIG5vZGVzLlxuICAgICAgICovXG5cblxuICAgICAgX2NyZWF0ZUNsYXNzKEluZXJ0Um9vdCwgW3tcbiAgICAgICAga2V5OiAnZGVzdHJ1Y3RvcicsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBkZXN0cnVjdG9yKCkge1xuICAgICAgICAgIHRoaXMuX29ic2VydmVyLmRpc2Nvbm5lY3QoKTtcblxuICAgICAgICAgIGlmICh0aGlzLl9yb290RWxlbWVudCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuX3NhdmVkQXJpYUhpZGRlbiAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICB0aGlzLl9yb290RWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJywgdGhpcy5fc2F2ZWRBcmlhSGlkZGVuKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHRoaXMuX3Jvb3RFbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0aGlzLl9tYW5hZ2VkTm9kZXMuZm9yRWFjaChmdW5jdGlvbiAoaW5lcnROb2RlKSB7XG4gICAgICAgICAgICB0aGlzLl91bm1hbmFnZU5vZGUoaW5lcnROb2RlLm5vZGUpO1xuICAgICAgICAgIH0sIHRoaXMpO1xuXG4gICAgICAgICAgLy8gTm90ZSB3ZSBjYXN0IHRoZSBudWxscyB0byB0aGUgQU5ZIHR5cGUgaGVyZSBiZWNhdXNlOlxuICAgICAgICAgIC8vIDEpIFdlIHdhbnQgdGhlIGNsYXNzIHByb3BlcnRpZXMgdG8gYmUgZGVjbGFyZWQgYXMgbm9uLW51bGwsIG9yIGVsc2Ugd2VcbiAgICAgICAgICAvLyAgICBuZWVkIGV2ZW4gbW9yZSBjYXN0cyB0aHJvdWdob3V0IHRoaXMgY29kZS4gQWxsIGJldHMgYXJlIG9mZiBpZiBhblxuICAgICAgICAgIC8vICAgIGluc3RhbmNlIGhhcyBiZWVuIGRlc3Ryb3llZCBhbmQgYSBtZXRob2QgaXMgY2FsbGVkLlxuICAgICAgICAgIC8vIDIpIFdlIGRvbid0IHdhbnQgdG8gY2FzdCBcInRoaXNcIiwgYmVjYXVzZSB3ZSB3YW50IHR5cGUtYXdhcmUgb3B0aW1pemF0aW9uc1xuICAgICAgICAgIC8vICAgIHRvIGtub3cgd2hpY2ggcHJvcGVydGllcyB3ZSdyZSBzZXR0aW5nLlxuICAgICAgICAgIHRoaXMuX29ic2VydmVyID0gLyoqIEB0eXBlIHs/fSAqL251bGw7XG4gICAgICAgICAgdGhpcy5fcm9vdEVsZW1lbnQgPSAvKiogQHR5cGUgez99ICovbnVsbDtcbiAgICAgICAgICB0aGlzLl9tYW5hZ2VkTm9kZXMgPSAvKiogQHR5cGUgez99ICovbnVsbDtcbiAgICAgICAgICB0aGlzLl9pbmVydE1hbmFnZXIgPSAvKiogQHR5cGUgez99ICovbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcmV0dXJuIHshU2V0PCFJbmVydE5vZGU+fSBBIGNvcHkgb2YgdGhpcyBJbmVydFJvb3QncyBtYW5hZ2VkIG5vZGVzIHNldC5cbiAgICAgICAgICovXG5cbiAgICAgIH0sIHtcbiAgICAgICAga2V5OiAnX21ha2VTdWJ0cmVlVW5mb2N1c2FibGUnLFxuXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwYXJhbSB7IU5vZGV9IHN0YXJ0Tm9kZVxuICAgICAgICAgKi9cbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9tYWtlU3VidHJlZVVuZm9jdXNhYmxlKHN0YXJ0Tm9kZSkge1xuICAgICAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICAgICAgY29tcG9zZWRUcmVlV2FsayhzdGFydE5vZGUsIGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICAgICAgICByZXR1cm4gX3RoaXMyLl92aXNpdE5vZGUobm9kZSk7XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICB2YXIgYWN0aXZlRWxlbWVudCA9IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQ7XG5cbiAgICAgICAgICBpZiAoIWRvY3VtZW50LmJvZHkuY29udGFpbnMoc3RhcnROb2RlKSkge1xuICAgICAgICAgICAgLy8gc3RhcnROb2RlIG1heSBiZSBpbiBzaGFkb3cgRE9NLCBzbyBmaW5kIGl0cyBuZWFyZXN0IHNoYWRvd1Jvb3QgdG8gZ2V0IHRoZSBhY3RpdmVFbGVtZW50LlxuICAgICAgICAgICAgdmFyIG5vZGUgPSBzdGFydE5vZGU7XG4gICAgICAgICAgICAvKiogQHR5cGUgeyFTaGFkb3dSb290fHVuZGVmaW5lZH0gKi9cbiAgICAgICAgICAgIHZhciByb290ID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgd2hpbGUgKG5vZGUpIHtcbiAgICAgICAgICAgICAgaWYgKG5vZGUubm9kZVR5cGUgPT09IE5vZGUuRE9DVU1FTlRfRlJBR01FTlRfTk9ERSkge1xuICAgICAgICAgICAgICAgIHJvb3QgPSAvKiogQHR5cGUgeyFTaGFkb3dSb290fSAqL25vZGU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgbm9kZSA9IG5vZGUucGFyZW50Tm9kZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChyb290KSB7XG4gICAgICAgICAgICAgIGFjdGl2ZUVsZW1lbnQgPSByb290LmFjdGl2ZUVsZW1lbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChzdGFydE5vZGUuY29udGFpbnMoYWN0aXZlRWxlbWVudCkpIHtcbiAgICAgICAgICAgIGFjdGl2ZUVsZW1lbnQuYmx1cigpO1xuICAgICAgICAgICAgLy8gSW4gSUUxMSwgaWYgYW4gZWxlbWVudCBpcyBhbHJlYWR5IGZvY3VzZWQsIGFuZCB0aGVuIHNldCB0byB0YWJpbmRleD0tMVxuICAgICAgICAgICAgLy8gY2FsbGluZyBibHVyKCkgd2lsbCBub3QgYWN0dWFsbHkgbW92ZSB0aGUgZm9jdXMuXG4gICAgICAgICAgICAvLyBUbyB3b3JrIGFyb3VuZCB0aGlzIHdlIGNhbGwgZm9jdXMoKSBvbiB0aGUgYm9keSBpbnN0ZWFkLlxuICAgICAgICAgICAgaWYgKGFjdGl2ZUVsZW1lbnQgPT09IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5mb2N1cygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcGFyYW0geyFOb2RlfSBub2RlXG4gICAgICAgICAqL1xuXG4gICAgICB9LCB7XG4gICAgICAgIGtleTogJ192aXNpdE5vZGUnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gX3Zpc2l0Tm9kZShub2RlKSB7XG4gICAgICAgICAgaWYgKG5vZGUubm9kZVR5cGUgIT09IE5vZGUuRUxFTUVOVF9OT0RFKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICAgIHZhciBlbGVtZW50ID0gLyoqIEB0eXBlIHshRWxlbWVudH0gKi9ub2RlO1xuXG4gICAgICAgICAgLy8gSWYgYSBkZXNjZW5kYW50IGluZXJ0IHJvb3QgYmVjb21lcyB1bi1pbmVydCwgaXRzIGRlc2NlbmRhbnRzIHdpbGwgc3RpbGwgYmUgaW5lcnQgYmVjYXVzZSBvZlxuICAgICAgICAgIC8vIHRoaXMgaW5lcnQgcm9vdCwgc28gYWxsIG9mIGl0cyBtYW5hZ2VkIG5vZGVzIG5lZWQgdG8gYmUgYWRvcHRlZCBieSB0aGlzIEluZXJ0Um9vdC5cbiAgICAgICAgICBpZiAoZWxlbWVudCAhPT0gdGhpcy5fcm9vdEVsZW1lbnQgJiYgZWxlbWVudC5oYXNBdHRyaWJ1dGUoJ2luZXJ0JykpIHtcbiAgICAgICAgICAgIHRoaXMuX2Fkb3B0SW5lcnRSb290KGVsZW1lbnQpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChtYXRjaGVzLmNhbGwoZWxlbWVudCwgX2ZvY3VzYWJsZUVsZW1lbnRzU3RyaW5nKSB8fCBlbGVtZW50Lmhhc0F0dHJpYnV0ZSgndGFiaW5kZXgnKSkge1xuICAgICAgICAgICAgdGhpcy5fbWFuYWdlTm9kZShlbGVtZW50KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogUmVnaXN0ZXIgdGhlIGdpdmVuIG5vZGUgd2l0aCB0aGlzIEluZXJ0Um9vdCBhbmQgd2l0aCBJbmVydE1hbmFnZXIuXG4gICAgICAgICAqIEBwYXJhbSB7IU5vZGV9IG5vZGVcbiAgICAgICAgICovXG5cbiAgICAgIH0sIHtcbiAgICAgICAga2V5OiAnX21hbmFnZU5vZGUnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gX21hbmFnZU5vZGUobm9kZSkge1xuICAgICAgICAgIHZhciBpbmVydE5vZGUgPSB0aGlzLl9pbmVydE1hbmFnZXIucmVnaXN0ZXIobm9kZSwgdGhpcyk7XG4gICAgICAgICAgdGhpcy5fbWFuYWdlZE5vZGVzLmFkZChpbmVydE5vZGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFVucmVnaXN0ZXIgdGhlIGdpdmVuIG5vZGUgd2l0aCB0aGlzIEluZXJ0Um9vdCBhbmQgd2l0aCBJbmVydE1hbmFnZXIuXG4gICAgICAgICAqIEBwYXJhbSB7IU5vZGV9IG5vZGVcbiAgICAgICAgICovXG5cbiAgICAgIH0sIHtcbiAgICAgICAga2V5OiAnX3VubWFuYWdlTm9kZScsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBfdW5tYW5hZ2VOb2RlKG5vZGUpIHtcbiAgICAgICAgICB2YXIgaW5lcnROb2RlID0gdGhpcy5faW5lcnRNYW5hZ2VyLmRlcmVnaXN0ZXIobm9kZSwgdGhpcyk7XG4gICAgICAgICAgaWYgKGluZXJ0Tm9kZSkge1xuICAgICAgICAgICAgdGhpcy5fbWFuYWdlZE5vZGVzWydkZWxldGUnXShpbmVydE5vZGUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBVbnJlZ2lzdGVyIHRoZSBlbnRpcmUgc3VidHJlZSBzdGFydGluZyBhdCBgc3RhcnROb2RlYC5cbiAgICAgICAgICogQHBhcmFtIHshTm9kZX0gc3RhcnROb2RlXG4gICAgICAgICAqL1xuXG4gICAgICB9LCB7XG4gICAgICAgIGtleTogJ191bm1hbmFnZVN1YnRyZWUnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gX3VubWFuYWdlU3VidHJlZShzdGFydE5vZGUpIHtcbiAgICAgICAgICB2YXIgX3RoaXMzID0gdGhpcztcblxuICAgICAgICAgIGNvbXBvc2VkVHJlZVdhbGsoc3RhcnROb2RlLCBmdW5jdGlvbiAobm9kZSkge1xuICAgICAgICAgICAgcmV0dXJuIF90aGlzMy5fdW5tYW5hZ2VOb2RlKG5vZGUpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIElmIGEgZGVzY2VuZGFudCBub2RlIGlzIGZvdW5kIHdpdGggYW4gYGluZXJ0YCBhdHRyaWJ1dGUsIGFkb3B0IGl0cyBtYW5hZ2VkIG5vZGVzLlxuICAgICAgICAgKiBAcGFyYW0geyFFbGVtZW50fSBub2RlXG4gICAgICAgICAqL1xuXG4gICAgICB9LCB7XG4gICAgICAgIGtleTogJ19hZG9wdEluZXJ0Um9vdCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBfYWRvcHRJbmVydFJvb3Qobm9kZSkge1xuICAgICAgICAgIHZhciBpbmVydFN1YnJvb3QgPSB0aGlzLl9pbmVydE1hbmFnZXIuZ2V0SW5lcnRSb290KG5vZGUpO1xuXG4gICAgICAgICAgLy8gRHVyaW5nIGluaXRpYWxpc2F0aW9uIHRoaXMgaW5lcnQgcm9vdCBtYXkgbm90IGhhdmUgYmVlbiByZWdpc3RlcmVkIHlldCxcbiAgICAgICAgICAvLyBzbyByZWdpc3RlciBpdCBub3cgaWYgbmVlZCBiZS5cbiAgICAgICAgICBpZiAoIWluZXJ0U3Vicm9vdCkge1xuICAgICAgICAgICAgdGhpcy5faW5lcnRNYW5hZ2VyLnNldEluZXJ0KG5vZGUsIHRydWUpO1xuICAgICAgICAgICAgaW5lcnRTdWJyb290ID0gdGhpcy5faW5lcnRNYW5hZ2VyLmdldEluZXJ0Um9vdChub2RlKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpbmVydFN1YnJvb3QubWFuYWdlZE5vZGVzLmZvckVhY2goZnVuY3Rpb24gKHNhdmVkSW5lcnROb2RlKSB7XG4gICAgICAgICAgICB0aGlzLl9tYW5hZ2VOb2RlKHNhdmVkSW5lcnROb2RlLm5vZGUpO1xuICAgICAgICAgIH0sIHRoaXMpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIENhbGxiYWNrIHVzZWQgd2hlbiBtdXRhdGlvbiBvYnNlcnZlciBkZXRlY3RzIHN1YnRyZWUgYWRkaXRpb25zLCByZW1vdmFscywgb3IgYXR0cmlidXRlIGNoYW5nZXMuXG4gICAgICAgICAqIEBwYXJhbSB7IUFycmF5PCFNdXRhdGlvblJlY29yZD59IHJlY29yZHNcbiAgICAgICAgICogQHBhcmFtIHshTXV0YXRpb25PYnNlcnZlcn0gc2VsZlxuICAgICAgICAgKi9cblxuICAgICAgfSwge1xuICAgICAgICBrZXk6ICdfb25NdXRhdGlvbicsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBfb25NdXRhdGlvbihyZWNvcmRzLCBzZWxmKSB7XG4gICAgICAgICAgcmVjb3Jkcy5mb3JFYWNoKGZ1bmN0aW9uIChyZWNvcmQpIHtcbiAgICAgICAgICAgIHZhciB0YXJnZXQgPSAvKiogQHR5cGUgeyFFbGVtZW50fSAqL3JlY29yZC50YXJnZXQ7XG4gICAgICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09ICdjaGlsZExpc3QnKSB7XG4gICAgICAgICAgICAgIC8vIE1hbmFnZSBhZGRlZCBub2Rlc1xuICAgICAgICAgICAgICBzbGljZS5jYWxsKHJlY29yZC5hZGRlZE5vZGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fbWFrZVN1YnRyZWVVbmZvY3VzYWJsZShub2RlKTtcbiAgICAgICAgICAgICAgfSwgdGhpcyk7XG5cbiAgICAgICAgICAgICAgLy8gVW4tbWFuYWdlIHJlbW92ZWQgbm9kZXNcbiAgICAgICAgICAgICAgc2xpY2UuY2FsbChyZWNvcmQucmVtb3ZlZE5vZGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fdW5tYW5hZ2VTdWJ0cmVlKG5vZGUpO1xuICAgICAgICAgICAgICB9LCB0aGlzKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09ICdhdHRyaWJ1dGVzJykge1xuICAgICAgICAgICAgICBpZiAocmVjb3JkLmF0dHJpYnV0ZU5hbWUgPT09ICd0YWJpbmRleCcpIHtcbiAgICAgICAgICAgICAgICAvLyBSZS1pbml0aWFsaXNlIGluZXJ0IG5vZGUgaWYgdGFiaW5kZXggY2hhbmdlc1xuICAgICAgICAgICAgICAgIHRoaXMuX21hbmFnZU5vZGUodGFyZ2V0KTtcbiAgICAgICAgICAgICAgfSBlbHNlIGlmICh0YXJnZXQgIT09IHRoaXMuX3Jvb3RFbGVtZW50ICYmIHJlY29yZC5hdHRyaWJ1dGVOYW1lID09PSAnaW5lcnQnICYmIHRhcmdldC5oYXNBdHRyaWJ1dGUoJ2luZXJ0JykpIHtcbiAgICAgICAgICAgICAgICAvLyBJZiBhIG5ldyBpbmVydCByb290IGlzIGFkZGVkLCBhZG9wdCBpdHMgbWFuYWdlZCBub2RlcyBhbmQgbWFrZSBzdXJlIGl0IGtub3dzIGFib3V0IHRoZVxuICAgICAgICAgICAgICAgIC8vIGFscmVhZHkgbWFuYWdlZCBub2RlcyBmcm9tIHRoaXMgaW5lcnQgc3Vicm9vdC5cbiAgICAgICAgICAgICAgICB0aGlzLl9hZG9wdEluZXJ0Um9vdCh0YXJnZXQpO1xuICAgICAgICAgICAgICAgIHZhciBpbmVydFN1YnJvb3QgPSB0aGlzLl9pbmVydE1hbmFnZXIuZ2V0SW5lcnRSb290KHRhcmdldCk7XG4gICAgICAgICAgICAgICAgdGhpcy5fbWFuYWdlZE5vZGVzLmZvckVhY2goZnVuY3Rpb24gKG1hbmFnZWROb2RlKSB7XG4gICAgICAgICAgICAgICAgICBpZiAodGFyZ2V0LmNvbnRhaW5zKG1hbmFnZWROb2RlLm5vZGUpKSB7XG4gICAgICAgICAgICAgICAgICAgIGluZXJ0U3Vicm9vdC5fbWFuYWdlTm9kZShtYW5hZ2VkTm9kZS5ub2RlKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sIHRoaXMpO1xuICAgICAgICB9XG4gICAgICB9LCB7XG4gICAgICAgIGtleTogJ21hbmFnZWROb2RlcycsXG4gICAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICAgIHJldHVybiBuZXcgU2V0KHRoaXMuX21hbmFnZWROb2Rlcyk7XG4gICAgICAgIH1cblxuICAgICAgICAvKiogQHJldHVybiB7Ym9vbGVhbn0gKi9cblxuICAgICAgfSwge1xuICAgICAgICBrZXk6ICdoYXNTYXZlZEFyaWFIaWRkZW4nLFxuICAgICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5fc2F2ZWRBcmlhSGlkZGVuICE9PSBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqIEBwYXJhbSB7P3N0cmluZ30gYXJpYUhpZGRlbiAqL1xuXG4gICAgICB9LCB7XG4gICAgICAgIGtleTogJ3NhdmVkQXJpYUhpZGRlbicsXG4gICAgICAgIHNldDogZnVuY3Rpb24gc2V0KGFyaWFIaWRkZW4pIHtcbiAgICAgICAgICB0aGlzLl9zYXZlZEFyaWFIaWRkZW4gPSBhcmlhSGlkZGVuO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqIEByZXR1cm4gez9zdHJpbmd9ICovXG4gICAgICAgICxcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuX3NhdmVkQXJpYUhpZGRlbjtcbiAgICAgICAgfVxuICAgICAgfV0pO1xuXG4gICAgICByZXR1cm4gSW5lcnRSb290O1xuICAgIH0oKTtcblxuICAgIC8qKlxuICAgICAqIGBJbmVydE5vZGVgIGluaXRpYWxpc2VzIGFuZCBtYW5hZ2VzIGEgc2luZ2xlIGluZXJ0IG5vZGUuXG4gICAgICogQSBub2RlIGlzIGluZXJ0IGlmIGl0IGlzIGEgZGVzY2VuZGFudCBvZiBvbmUgb3IgbW9yZSBpbmVydCByb290IGVsZW1lbnRzLlxuICAgICAqXG4gICAgICogT24gY29uc3RydWN0aW9uLCBgSW5lcnROb2RlYCBzYXZlcyB0aGUgZXhpc3RpbmcgYHRhYmluZGV4YCB2YWx1ZSBmb3IgdGhlIG5vZGUsIGlmIGFueSwgYW5kXG4gICAgICogZWl0aGVyIHJlbW92ZXMgdGhlIGB0YWJpbmRleGAgYXR0cmlidXRlIG9yIHNldHMgaXQgdG8gYC0xYCwgZGVwZW5kaW5nIG9uIHdoZXRoZXIgdGhlIGVsZW1lbnRcbiAgICAgKiBpcyBpbnRyaW5zaWNhbGx5IGZvY3VzYWJsZSBvciBub3QuXG4gICAgICpcbiAgICAgKiBgSW5lcnROb2RlYCBtYWludGFpbnMgYSBzZXQgb2YgYEluZXJ0Um9vdGBzIHdoaWNoIGFyZSBkZXNjZW5kYW50cyBvZiB0aGlzIGBJbmVydE5vZGVgLiBXaGVuIGFuXG4gICAgICogYEluZXJ0Um9vdGAgaXMgZGVzdHJveWVkLCBhbmQgY2FsbHMgYEluZXJ0TWFuYWdlci5kZXJlZ2lzdGVyKClgLCB0aGUgYEluZXJ0TWFuYWdlcmAgbm90aWZpZXMgdGhlXG4gICAgICogYEluZXJ0Tm9kZWAgdmlhIGByZW1vdmVJbmVydFJvb3QoKWAsIHdoaWNoIGluIHR1cm4gZGVzdHJveXMgdGhlIGBJbmVydE5vZGVgIGlmIG5vIGBJbmVydFJvb3Rgc1xuICAgICAqIHJlbWFpbiBpbiB0aGUgc2V0LiBPbiBkZXN0cnVjdGlvbiwgYEluZXJ0Tm9kZWAgcmVpbnN0YXRlcyB0aGUgc3RvcmVkIGB0YWJpbmRleGAgaWYgb25lIGV4aXN0cyxcbiAgICAgKiBvciByZW1vdmVzIHRoZSBgdGFiaW5kZXhgIGF0dHJpYnV0ZSBpZiB0aGUgZWxlbWVudCBpcyBpbnRyaW5zaWNhbGx5IGZvY3VzYWJsZS5cbiAgICAgKi9cblxuXG4gICAgdmFyIEluZXJ0Tm9kZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIC8qKlxuICAgICAgICogQHBhcmFtIHshTm9kZX0gbm9kZSBBIGZvY3VzYWJsZSBlbGVtZW50IHRvIGJlIG1hZGUgaW5lcnQuXG4gICAgICAgKiBAcGFyYW0geyFJbmVydFJvb3R9IGluZXJ0Um9vdCBUaGUgaW5lcnQgcm9vdCBlbGVtZW50IGFzc29jaWF0ZWQgd2l0aCB0aGlzIGluZXJ0IG5vZGUuXG4gICAgICAgKi9cbiAgICAgIGZ1bmN0aW9uIEluZXJ0Tm9kZShub2RlLCBpbmVydFJvb3QpIHtcbiAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEluZXJ0Tm9kZSk7XG5cbiAgICAgICAgLyoqIEB0eXBlIHshTm9kZX0gKi9cbiAgICAgICAgdGhpcy5fbm9kZSA9IG5vZGU7XG5cbiAgICAgICAgLyoqIEB0eXBlIHtib29sZWFufSAqL1xuICAgICAgICB0aGlzLl9vdmVycm9kZUZvY3VzTWV0aG9kID0gZmFsc2U7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEB0eXBlIHshU2V0PCFJbmVydFJvb3Q+fSBUaGUgc2V0IG9mIGRlc2NlbmRhbnQgaW5lcnQgcm9vdHMuXG4gICAgICAgICAqICAgIElmIGFuZCBvbmx5IGlmIHRoaXMgc2V0IGJlY29tZXMgZW1wdHksIHRoaXMgbm9kZSBpcyBubyBsb25nZXIgaW5lcnQuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLl9pbmVydFJvb3RzID0gbmV3IFNldChbaW5lcnRSb290XSk7XG5cbiAgICAgICAgLyoqIEB0eXBlIHs/bnVtYmVyfSAqL1xuICAgICAgICB0aGlzLl9zYXZlZFRhYkluZGV4ID0gbnVsbDtcblxuICAgICAgICAvKiogQHR5cGUge2Jvb2xlYW59ICovXG4gICAgICAgIHRoaXMuX2Rlc3Ryb3llZCA9IGZhbHNlO1xuXG4gICAgICAgIC8vIFNhdmUgYW55IHByaW9yIHRhYmluZGV4IGluZm8gYW5kIG1ha2UgdGhpcyBub2RlIHVudGFiYmFibGVcbiAgICAgICAgdGhpcy5lbnN1cmVVbnRhYmJhYmxlKCk7XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogQ2FsbCB0aGlzIHdoZW5ldmVyIHRoaXMgb2JqZWN0IGlzIGFib3V0IHRvIGJlY29tZSBvYnNvbGV0ZS5cbiAgICAgICAqIFRoaXMgbWFrZXMgdGhlIG1hbmFnZWQgbm9kZSBmb2N1c2FibGUgYWdhaW4gYW5kIGRlbGV0ZXMgYWxsIG9mIHRoZSBwcmV2aW91c2x5IHN0b3JlZCBzdGF0ZS5cbiAgICAgICAqL1xuXG5cbiAgICAgIF9jcmVhdGVDbGFzcyhJbmVydE5vZGUsIFt7XG4gICAgICAgIGtleTogJ2Rlc3RydWN0b3InLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZGVzdHJ1Y3RvcigpIHtcbiAgICAgICAgICB0aGlzLl90aHJvd0lmRGVzdHJveWVkKCk7XG5cbiAgICAgICAgICBpZiAodGhpcy5fbm9kZSAmJiB0aGlzLl9ub2RlLm5vZGVUeXBlID09PSBOb2RlLkVMRU1FTlRfTk9ERSkge1xuICAgICAgICAgICAgdmFyIGVsZW1lbnQgPSAvKiogQHR5cGUgeyFFbGVtZW50fSAqL3RoaXMuX25vZGU7XG4gICAgICAgICAgICBpZiAodGhpcy5fc2F2ZWRUYWJJbmRleCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgndGFiaW5kZXgnLCB0aGlzLl9zYXZlZFRhYkluZGV4KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCd0YWJpbmRleCcpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBVc2UgYGRlbGV0ZWAgdG8gcmVzdG9yZSBuYXRpdmUgZm9jdXMgbWV0aG9kLlxuICAgICAgICAgICAgaWYgKHRoaXMuX292ZXJyb2RlRm9jdXNNZXRob2QpIHtcbiAgICAgICAgICAgICAgZGVsZXRlIGVsZW1lbnQuZm9jdXM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gU2VlIG5vdGUgaW4gSW5lcnRSb290LmRlc3RydWN0b3IgZm9yIHdoeSB3ZSBjYXN0IHRoZXNlIG51bGxzIHRvIEFOWS5cbiAgICAgICAgICB0aGlzLl9ub2RlID0gLyoqIEB0eXBlIHs/fSAqL251bGw7XG4gICAgICAgICAgdGhpcy5faW5lcnRSb290cyA9IC8qKiBAdHlwZSB7P30gKi9udWxsO1xuICAgICAgICAgIHRoaXMuX2Rlc3Ryb3llZCA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogQHR5cGUge2Jvb2xlYW59IFdoZXRoZXIgdGhpcyBvYmplY3QgaXMgb2Jzb2xldGUgYmVjYXVzZSB0aGUgbWFuYWdlZCBub2RlIGlzIG5vIGxvbmdlciBpbmVydC5cbiAgICAgICAgICogSWYgdGhlIG9iamVjdCBoYXMgYmVlbiBkZXN0cm95ZWQsIGFueSBhdHRlbXB0IHRvIGFjY2VzcyBpdCB3aWxsIGNhdXNlIGFuIGV4Y2VwdGlvbi5cbiAgICAgICAgICovXG5cbiAgICAgIH0sIHtcbiAgICAgICAga2V5OiAnX3Rocm93SWZEZXN0cm95ZWQnLFxuXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRocm93IGlmIHVzZXIgdHJpZXMgdG8gYWNjZXNzIGRlc3Ryb3llZCBJbmVydE5vZGUuXG4gICAgICAgICAqL1xuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gX3Rocm93SWZEZXN0cm95ZWQoKSB7XG4gICAgICAgICAgaWYgKHRoaXMuZGVzdHJveWVkKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RyeWluZyB0byBhY2Nlc3MgZGVzdHJveWVkIEluZXJ0Tm9kZScpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8qKiBAcmV0dXJuIHtib29sZWFufSAqL1xuXG4gICAgICB9LCB7XG4gICAgICAgIGtleTogJ2Vuc3VyZVVudGFiYmFibGUnLFxuXG5cbiAgICAgICAgLyoqIFNhdmUgdGhlIGV4aXN0aW5nIHRhYmluZGV4IHZhbHVlIGFuZCBtYWtlIHRoZSBub2RlIHVudGFiYmFibGUgYW5kIHVuZm9jdXNhYmxlICovXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBlbnN1cmVVbnRhYmJhYmxlKCkge1xuICAgICAgICAgIGlmICh0aGlzLm5vZGUubm9kZVR5cGUgIT09IE5vZGUuRUxFTUVOVF9OT0RFKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICAgIHZhciBlbGVtZW50ID0gLyoqIEB0eXBlIHshRWxlbWVudH0gKi90aGlzLm5vZGU7XG4gICAgICAgICAgaWYgKG1hdGNoZXMuY2FsbChlbGVtZW50LCBfZm9jdXNhYmxlRWxlbWVudHNTdHJpbmcpKSB7XG4gICAgICAgICAgICBpZiAoIC8qKiBAdHlwZSB7IUhUTUxFbGVtZW50fSAqL2VsZW1lbnQudGFiSW5kZXggPT09IC0xICYmIHRoaXMuaGFzU2F2ZWRUYWJJbmRleCkge1xuICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChlbGVtZW50Lmhhc0F0dHJpYnV0ZSgndGFiaW5kZXgnKSkge1xuICAgICAgICAgICAgICB0aGlzLl9zYXZlZFRhYkluZGV4ID0gLyoqIEB0eXBlIHshSFRNTEVsZW1lbnR9ICovZWxlbWVudC50YWJJbmRleDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCd0YWJpbmRleCcsICctMScpO1xuICAgICAgICAgICAgaWYgKGVsZW1lbnQubm9kZVR5cGUgPT09IE5vZGUuRUxFTUVOVF9OT0RFKSB7XG4gICAgICAgICAgICAgIGVsZW1lbnQuZm9jdXMgPSBmdW5jdGlvbiAoKSB7fTtcbiAgICAgICAgICAgICAgdGhpcy5fb3ZlcnJvZGVGb2N1c01ldGhvZCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIGlmIChlbGVtZW50Lmhhc0F0dHJpYnV0ZSgndGFiaW5kZXgnKSkge1xuICAgICAgICAgICAgdGhpcy5fc2F2ZWRUYWJJbmRleCA9IC8qKiBAdHlwZSB7IUhUTUxFbGVtZW50fSAqL2VsZW1lbnQudGFiSW5kZXg7XG4gICAgICAgICAgICBlbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgndGFiaW5kZXgnKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogQWRkIGFub3RoZXIgaW5lcnQgcm9vdCB0byB0aGlzIGluZXJ0IG5vZGUncyBzZXQgb2YgbWFuYWdpbmcgaW5lcnQgcm9vdHMuXG4gICAgICAgICAqIEBwYXJhbSB7IUluZXJ0Um9vdH0gaW5lcnRSb290XG4gICAgICAgICAqL1xuXG4gICAgICB9LCB7XG4gICAgICAgIGtleTogJ2FkZEluZXJ0Um9vdCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBhZGRJbmVydFJvb3QoaW5lcnRSb290KSB7XG4gICAgICAgICAgdGhpcy5fdGhyb3dJZkRlc3Ryb3llZCgpO1xuICAgICAgICAgIHRoaXMuX2luZXJ0Um9vdHMuYWRkKGluZXJ0Um9vdCk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogUmVtb3ZlIHRoZSBnaXZlbiBpbmVydCByb290IGZyb20gdGhpcyBpbmVydCBub2RlJ3Mgc2V0IG9mIG1hbmFnaW5nIGluZXJ0IHJvb3RzLlxuICAgICAgICAgKiBJZiB0aGUgc2V0IG9mIG1hbmFnaW5nIGluZXJ0IHJvb3RzIGJlY29tZXMgZW1wdHksIHRoaXMgbm9kZSBpcyBubyBsb25nZXIgaW5lcnQsXG4gICAgICAgICAqIHNvIHRoZSBvYmplY3Qgc2hvdWxkIGJlIGRlc3Ryb3llZC5cbiAgICAgICAgICogQHBhcmFtIHshSW5lcnRSb290fSBpbmVydFJvb3RcbiAgICAgICAgICovXG5cbiAgICAgIH0sIHtcbiAgICAgICAga2V5OiAncmVtb3ZlSW5lcnRSb290JyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlbW92ZUluZXJ0Um9vdChpbmVydFJvb3QpIHtcbiAgICAgICAgICB0aGlzLl90aHJvd0lmRGVzdHJveWVkKCk7XG4gICAgICAgICAgdGhpcy5faW5lcnRSb290c1snZGVsZXRlJ10oaW5lcnRSb290KTtcbiAgICAgICAgICBpZiAodGhpcy5faW5lcnRSb290cy5zaXplID09PSAwKSB7XG4gICAgICAgICAgICB0aGlzLmRlc3RydWN0b3IoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sIHtcbiAgICAgICAga2V5OiAnZGVzdHJveWVkJyxcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgICAgcmV0dXJuICgvKiogQHR5cGUgeyFJbmVydE5vZGV9ICovdGhpcy5fZGVzdHJveWVkXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfSwge1xuICAgICAgICBrZXk6ICdoYXNTYXZlZFRhYkluZGV4JyxcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuX3NhdmVkVGFiSW5kZXggIT09IG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICAvKiogQHJldHVybiB7IU5vZGV9ICovXG5cbiAgICAgIH0sIHtcbiAgICAgICAga2V5OiAnbm9kZScsXG4gICAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICAgIHRoaXMuX3Rocm93SWZEZXN0cm95ZWQoKTtcbiAgICAgICAgICByZXR1cm4gdGhpcy5fbm9kZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKiBAcGFyYW0gez9udW1iZXJ9IHRhYkluZGV4ICovXG5cbiAgICAgIH0sIHtcbiAgICAgICAga2V5OiAnc2F2ZWRUYWJJbmRleCcsXG4gICAgICAgIHNldDogZnVuY3Rpb24gc2V0KHRhYkluZGV4KSB7XG4gICAgICAgICAgdGhpcy5fdGhyb3dJZkRlc3Ryb3llZCgpO1xuICAgICAgICAgIHRoaXMuX3NhdmVkVGFiSW5kZXggPSB0YWJJbmRleDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKiBAcmV0dXJuIHs/bnVtYmVyfSAqL1xuICAgICAgICAsXG4gICAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICAgIHRoaXMuX3Rocm93SWZEZXN0cm95ZWQoKTtcbiAgICAgICAgICByZXR1cm4gdGhpcy5fc2F2ZWRUYWJJbmRleDtcbiAgICAgICAgfVxuICAgICAgfV0pO1xuXG4gICAgICByZXR1cm4gSW5lcnROb2RlO1xuICAgIH0oKTtcblxuICAgIC8qKlxuICAgICAqIEluZXJ0TWFuYWdlciBpcyBhIHBlci1kb2N1bWVudCBzaW5nbGV0b24gb2JqZWN0IHdoaWNoIG1hbmFnZXMgYWxsIGluZXJ0IHJvb3RzIGFuZCBub2Rlcy5cbiAgICAgKlxuICAgICAqIFdoZW4gYW4gZWxlbWVudCBiZWNvbWVzIGFuIGluZXJ0IHJvb3QgYnkgaGF2aW5nIGFuIGBpbmVydGAgYXR0cmlidXRlIHNldCBhbmQvb3IgaXRzIGBpbmVydGBcbiAgICAgKiBwcm9wZXJ0eSBzZXQgdG8gYHRydWVgLCB0aGUgYHNldEluZXJ0YCBtZXRob2QgY3JlYXRlcyBhbiBgSW5lcnRSb290YCBvYmplY3QgZm9yIHRoZSBlbGVtZW50LlxuICAgICAqIFRoZSBgSW5lcnRSb290YCBpbiB0dXJuIHJlZ2lzdGVycyBpdHNlbGYgYXMgbWFuYWdpbmcgYWxsIG9mIHRoZSBlbGVtZW50J3MgZm9jdXNhYmxlIGRlc2NlbmRhbnRcbiAgICAgKiBub2RlcyB2aWEgdGhlIGByZWdpc3RlcigpYCBtZXRob2QuIFRoZSBgSW5lcnRNYW5hZ2VyYCBlbnN1cmVzIHRoYXQgYSBzaW5nbGUgYEluZXJ0Tm9kZWAgaW5zdGFuY2VcbiAgICAgKiBpcyBjcmVhdGVkIGZvciBlYWNoIHN1Y2ggbm9kZSwgdmlhIHRoZSBgX21hbmFnZWROb2Rlc2AgbWFwLlxuICAgICAqL1xuXG5cbiAgICB2YXIgSW5lcnRNYW5hZ2VyID0gZnVuY3Rpb24gKCkge1xuICAgICAgLyoqXG4gICAgICAgKiBAcGFyYW0geyFEb2N1bWVudH0gZG9jdW1lbnRcbiAgICAgICAqL1xuICAgICAgZnVuY3Rpb24gSW5lcnRNYW5hZ2VyKGRvY3VtZW50KSB7XG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBJbmVydE1hbmFnZXIpO1xuXG4gICAgICAgIGlmICghZG9jdW1lbnQpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ01pc3NpbmcgcmVxdWlyZWQgYXJndW1lbnQ7IEluZXJ0TWFuYWdlciBuZWVkcyB0byB3cmFwIGEgZG9jdW1lbnQuJyk7XG4gICAgICAgIH1cblxuICAgICAgICAvKiogQHR5cGUgeyFEb2N1bWVudH0gKi9cbiAgICAgICAgdGhpcy5fZG9jdW1lbnQgPSBkb2N1bWVudDtcblxuICAgICAgICAvKipcbiAgICAgICAgICogQWxsIG1hbmFnZWQgbm9kZXMga25vd24gdG8gdGhpcyBJbmVydE1hbmFnZXIuIEluIGEgbWFwIHRvIGFsbG93IGxvb2tpbmcgdXAgYnkgTm9kZS5cbiAgICAgICAgICogQHR5cGUgeyFNYXA8IU5vZGUsICFJbmVydE5vZGU+fVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5fbWFuYWdlZE5vZGVzID0gbmV3IE1hcCgpO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBbGwgaW5lcnQgcm9vdHMga25vd24gdG8gdGhpcyBJbmVydE1hbmFnZXIuIEluIGEgbWFwIHRvIGFsbG93IGxvb2tpbmcgdXAgYnkgTm9kZS5cbiAgICAgICAgICogQHR5cGUgeyFNYXA8IU5vZGUsICFJbmVydFJvb3Q+fVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5faW5lcnRSb290cyA9IG5ldyBNYXAoKTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogT2JzZXJ2ZXIgZm9yIG11dGF0aW9ucyBvbiBgZG9jdW1lbnQuYm9keWAuXG4gICAgICAgICAqIEB0eXBlIHshTXV0YXRpb25PYnNlcnZlcn1cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuX29ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIodGhpcy5fd2F0Y2hGb3JJbmVydC5iaW5kKHRoaXMpKTtcblxuICAgICAgICAvLyBBZGQgaW5lcnQgc3R5bGUuXG4gICAgICAgIGFkZEluZXJ0U3R5bGUoZG9jdW1lbnQuaGVhZCB8fCBkb2N1bWVudC5ib2R5IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCk7XG5cbiAgICAgICAgLy8gV2FpdCBmb3IgZG9jdW1lbnQgdG8gYmUgbG9hZGVkLlxuICAgICAgICBpZiAoZG9jdW1lbnQucmVhZHlTdGF0ZSA9PT0gJ2xvYWRpbmcnKSB7XG4gICAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIHRoaXMuX29uRG9jdW1lbnRMb2FkZWQuYmluZCh0aGlzKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5fb25Eb2N1bWVudExvYWRlZCgpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogU2V0IHdoZXRoZXIgdGhlIGdpdmVuIGVsZW1lbnQgc2hvdWxkIGJlIGFuIGluZXJ0IHJvb3Qgb3Igbm90LlxuICAgICAgICogQHBhcmFtIHshRWxlbWVudH0gcm9vdFxuICAgICAgICogQHBhcmFtIHtib29sZWFufSBpbmVydFxuICAgICAgICovXG5cblxuICAgICAgX2NyZWF0ZUNsYXNzKEluZXJ0TWFuYWdlciwgW3tcbiAgICAgICAga2V5OiAnc2V0SW5lcnQnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gc2V0SW5lcnQocm9vdCwgaW5lcnQpIHtcbiAgICAgICAgICBpZiAoaW5lcnQpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLl9pbmVydFJvb3RzLmhhcyhyb290KSkge1xuICAgICAgICAgICAgICAvLyBlbGVtZW50IGlzIGFscmVhZHkgaW5lcnRcbiAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YXIgaW5lcnRSb290ID0gbmV3IEluZXJ0Um9vdChyb290LCB0aGlzKTtcbiAgICAgICAgICAgIHJvb3Quc2V0QXR0cmlidXRlKCdpbmVydCcsICcnKTtcbiAgICAgICAgICAgIHRoaXMuX2luZXJ0Um9vdHMuc2V0KHJvb3QsIGluZXJ0Um9vdCk7XG4gICAgICAgICAgICAvLyBJZiBub3QgY29udGFpbmVkIGluIHRoZSBkb2N1bWVudCwgaXQgbXVzdCBiZSBpbiBhIHNoYWRvd1Jvb3QuXG4gICAgICAgICAgICAvLyBFbnN1cmUgaW5lcnQgc3R5bGVzIGFyZSBhZGRlZCB0aGVyZS5cbiAgICAgICAgICAgIGlmICghdGhpcy5fZG9jdW1lbnQuYm9keS5jb250YWlucyhyb290KSkge1xuICAgICAgICAgICAgICB2YXIgcGFyZW50ID0gcm9vdC5wYXJlbnROb2RlO1xuICAgICAgICAgICAgICB3aGlsZSAocGFyZW50KSB7XG4gICAgICAgICAgICAgICAgaWYgKHBhcmVudC5ub2RlVHlwZSA9PT0gMTEpIHtcbiAgICAgICAgICAgICAgICAgIGFkZEluZXJ0U3R5bGUocGFyZW50KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcGFyZW50ID0gcGFyZW50LnBhcmVudE5vZGU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKCF0aGlzLl9pbmVydFJvb3RzLmhhcyhyb290KSkge1xuICAgICAgICAgICAgICAvLyBlbGVtZW50IGlzIGFscmVhZHkgbm9uLWluZXJ0XG4gICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIF9pbmVydFJvb3QgPSB0aGlzLl9pbmVydFJvb3RzLmdldChyb290KTtcbiAgICAgICAgICAgIF9pbmVydFJvb3QuZGVzdHJ1Y3RvcigpO1xuICAgICAgICAgICAgdGhpcy5faW5lcnRSb290c1snZGVsZXRlJ10ocm9vdCk7XG4gICAgICAgICAgICByb290LnJlbW92ZUF0dHJpYnV0ZSgnaW5lcnQnKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogR2V0IHRoZSBJbmVydFJvb3Qgb2JqZWN0IGNvcnJlc3BvbmRpbmcgdG8gdGhlIGdpdmVuIGluZXJ0IHJvb3QgZWxlbWVudCwgaWYgYW55LlxuICAgICAgICAgKiBAcGFyYW0geyFOb2RlfSBlbGVtZW50XG4gICAgICAgICAqIEByZXR1cm4geyFJbmVydFJvb3R8dW5kZWZpbmVkfVxuICAgICAgICAgKi9cblxuICAgICAgfSwge1xuICAgICAgICBrZXk6ICdnZXRJbmVydFJvb3QnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0SW5lcnRSb290KGVsZW1lbnQpIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5faW5lcnRSb290cy5nZXQoZWxlbWVudCk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogUmVnaXN0ZXIgdGhlIGdpdmVuIEluZXJ0Um9vdCBhcyBtYW5hZ2luZyB0aGUgZ2l2ZW4gbm9kZS5cbiAgICAgICAgICogSW4gdGhlIGNhc2Ugd2hlcmUgdGhlIG5vZGUgaGFzIGEgcHJldmlvdXNseSBleGlzdGluZyBpbmVydCByb290LCB0aGlzIGluZXJ0IHJvb3Qgd2lsbFxuICAgICAgICAgKiBiZSBhZGRlZCB0byBpdHMgc2V0IG9mIGluZXJ0IHJvb3RzLlxuICAgICAgICAgKiBAcGFyYW0geyFOb2RlfSBub2RlXG4gICAgICAgICAqIEBwYXJhbSB7IUluZXJ0Um9vdH0gaW5lcnRSb290XG4gICAgICAgICAqIEByZXR1cm4geyFJbmVydE5vZGV9IGluZXJ0Tm9kZVxuICAgICAgICAgKi9cblxuICAgICAgfSwge1xuICAgICAgICBrZXk6ICdyZWdpc3RlcicsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiByZWdpc3Rlcihub2RlLCBpbmVydFJvb3QpIHtcbiAgICAgICAgICB2YXIgaW5lcnROb2RlID0gdGhpcy5fbWFuYWdlZE5vZGVzLmdldChub2RlKTtcbiAgICAgICAgICBpZiAoaW5lcnROb2RlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIC8vIG5vZGUgd2FzIGFscmVhZHkgaW4gYW4gaW5lcnQgc3VidHJlZVxuICAgICAgICAgICAgaW5lcnROb2RlLmFkZEluZXJ0Um9vdChpbmVydFJvb3QpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpbmVydE5vZGUgPSBuZXcgSW5lcnROb2RlKG5vZGUsIGluZXJ0Um9vdCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdGhpcy5fbWFuYWdlZE5vZGVzLnNldChub2RlLCBpbmVydE5vZGUpO1xuXG4gICAgICAgICAgcmV0dXJuIGluZXJ0Tm9kZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBEZS1yZWdpc3RlciB0aGUgZ2l2ZW4gSW5lcnRSb290IGFzIG1hbmFnaW5nIHRoZSBnaXZlbiBpbmVydCBub2RlLlxuICAgICAgICAgKiBSZW1vdmVzIHRoZSBpbmVydCByb290IGZyb20gdGhlIEluZXJ0Tm9kZSdzIHNldCBvZiBtYW5hZ2luZyBpbmVydCByb290cywgYW5kIHJlbW92ZSB0aGUgaW5lcnRcbiAgICAgICAgICogbm9kZSBmcm9tIHRoZSBJbmVydE1hbmFnZXIncyBzZXQgb2YgbWFuYWdlZCBub2RlcyBpZiBpdCBpcyBkZXN0cm95ZWQuXG4gICAgICAgICAqIElmIHRoZSBub2RlIGlzIG5vdCBjdXJyZW50bHkgbWFuYWdlZCwgdGhpcyBpcyBlc3NlbnRpYWxseSBhIG5vLW9wLlxuICAgICAgICAgKiBAcGFyYW0geyFOb2RlfSBub2RlXG4gICAgICAgICAqIEBwYXJhbSB7IUluZXJ0Um9vdH0gaW5lcnRSb290XG4gICAgICAgICAqIEByZXR1cm4gez9JbmVydE5vZGV9IFRoZSBwb3RlbnRpYWxseSBkZXN0cm95ZWQgSW5lcnROb2RlIGFzc29jaWF0ZWQgd2l0aCB0aGlzIG5vZGUsIGlmIGFueS5cbiAgICAgICAgICovXG5cbiAgICAgIH0sIHtcbiAgICAgICAga2V5OiAnZGVyZWdpc3RlcicsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBkZXJlZ2lzdGVyKG5vZGUsIGluZXJ0Um9vdCkge1xuICAgICAgICAgIHZhciBpbmVydE5vZGUgPSB0aGlzLl9tYW5hZ2VkTm9kZXMuZ2V0KG5vZGUpO1xuICAgICAgICAgIGlmICghaW5lcnROb2RlKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpbmVydE5vZGUucmVtb3ZlSW5lcnRSb290KGluZXJ0Um9vdCk7XG4gICAgICAgICAgaWYgKGluZXJ0Tm9kZS5kZXN0cm95ZWQpIHtcbiAgICAgICAgICAgIHRoaXMuX21hbmFnZWROb2Rlc1snZGVsZXRlJ10obm9kZSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIGluZXJ0Tm9kZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDYWxsYmFjayB1c2VkIHdoZW4gZG9jdW1lbnQgaGFzIGZpbmlzaGVkIGxvYWRpbmcuXG4gICAgICAgICAqL1xuXG4gICAgICB9LCB7XG4gICAgICAgIGtleTogJ19vbkRvY3VtZW50TG9hZGVkJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9vbkRvY3VtZW50TG9hZGVkKCkge1xuICAgICAgICAgIC8vIEZpbmQgYWxsIGluZXJ0IHJvb3RzIGluIGRvY3VtZW50IGFuZCBtYWtlIHRoZW0gYWN0dWFsbHkgaW5lcnQuXG4gICAgICAgICAgdmFyIGluZXJ0RWxlbWVudHMgPSBzbGljZS5jYWxsKHRoaXMuX2RvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tpbmVydF0nKSk7XG4gICAgICAgICAgaW5lcnRFbGVtZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChpbmVydEVsZW1lbnQpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0SW5lcnQoaW5lcnRFbGVtZW50LCB0cnVlKTtcbiAgICAgICAgICB9LCB0aGlzKTtcblxuICAgICAgICAgIC8vIENvbW1lbnQgdGhpcyBvdXQgdG8gdXNlIHByb2dyYW1tYXRpYyBBUEkgb25seS5cbiAgICAgICAgICB0aGlzLl9vYnNlcnZlci5vYnNlcnZlKHRoaXMuX2RvY3VtZW50LmJvZHkgfHwgdGhpcy5fZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LCB7IGF0dHJpYnV0ZXM6IHRydWUsIHN1YnRyZWU6IHRydWUsIGNoaWxkTGlzdDogdHJ1ZSB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDYWxsYmFjayB1c2VkIHdoZW4gbXV0YXRpb24gb2JzZXJ2ZXIgZGV0ZWN0cyBhdHRyaWJ1dGUgY2hhbmdlcy5cbiAgICAgICAgICogQHBhcmFtIHshQXJyYXk8IU11dGF0aW9uUmVjb3JkPn0gcmVjb3Jkc1xuICAgICAgICAgKiBAcGFyYW0geyFNdXRhdGlvbk9ic2VydmVyfSBzZWxmXG4gICAgICAgICAqL1xuXG4gICAgICB9LCB7XG4gICAgICAgIGtleTogJ193YXRjaEZvckluZXJ0JyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIF93YXRjaEZvckluZXJ0KHJlY29yZHMsIHNlbGYpIHtcbiAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICAgIHJlY29yZHMuZm9yRWFjaChmdW5jdGlvbiAocmVjb3JkKSB7XG4gICAgICAgICAgICBzd2l0Y2ggKHJlY29yZC50eXBlKSB7XG4gICAgICAgICAgICAgIGNhc2UgJ2NoaWxkTGlzdCc6XG4gICAgICAgICAgICAgICAgc2xpY2UuY2FsbChyZWNvcmQuYWRkZWROb2RlcykuZm9yRWFjaChmdW5jdGlvbiAobm9kZSkge1xuICAgICAgICAgICAgICAgICAgaWYgKG5vZGUubm9kZVR5cGUgIT09IE5vZGUuRUxFTUVOVF9OT0RFKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIHZhciBpbmVydEVsZW1lbnRzID0gc2xpY2UuY2FsbChub2RlLnF1ZXJ5U2VsZWN0b3JBbGwoJ1tpbmVydF0nKSk7XG4gICAgICAgICAgICAgICAgICBpZiAobWF0Y2hlcy5jYWxsKG5vZGUsICdbaW5lcnRdJykpIHtcbiAgICAgICAgICAgICAgICAgICAgaW5lcnRFbGVtZW50cy51bnNoaWZ0KG5vZGUpO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgaW5lcnRFbGVtZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChpbmVydEVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRJbmVydChpbmVydEVsZW1lbnQsIHRydWUpO1xuICAgICAgICAgICAgICAgICAgfSwgX3RoaXMpO1xuICAgICAgICAgICAgICAgIH0sIF90aGlzKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgY2FzZSAnYXR0cmlidXRlcyc6XG4gICAgICAgICAgICAgICAgaWYgKHJlY29yZC5hdHRyaWJ1dGVOYW1lICE9PSAnaW5lcnQnKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZhciB0YXJnZXQgPSAvKiogQHR5cGUgeyFFbGVtZW50fSAqL3JlY29yZC50YXJnZXQ7XG4gICAgICAgICAgICAgICAgdmFyIGluZXJ0ID0gdGFyZ2V0Lmhhc0F0dHJpYnV0ZSgnaW5lcnQnKTtcbiAgICAgICAgICAgICAgICBfdGhpcy5zZXRJbmVydCh0YXJnZXQsIGluZXJ0KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LCB0aGlzKTtcbiAgICAgICAgfVxuICAgICAgfV0pO1xuXG4gICAgICByZXR1cm4gSW5lcnRNYW5hZ2VyO1xuICAgIH0oKTtcblxuICAgIC8qKlxuICAgICAqIFJlY3Vyc2l2ZWx5IHdhbGsgdGhlIGNvbXBvc2VkIHRyZWUgZnJvbSB8bm9kZXwuXG4gICAgICogQHBhcmFtIHshTm9kZX0gbm9kZVxuICAgICAqIEBwYXJhbSB7KGZ1bmN0aW9uICghRWxlbWVudCkpPX0gY2FsbGJhY2sgQ2FsbGJhY2sgdG8gYmUgY2FsbGVkIGZvciBlYWNoIGVsZW1lbnQgdHJhdmVyc2VkLFxuICAgICAqICAgICBiZWZvcmUgZGVzY2VuZGluZyBpbnRvIGNoaWxkIG5vZGVzLlxuICAgICAqIEBwYXJhbSB7P1NoYWRvd1Jvb3Q9fSBzaGFkb3dSb290QW5jZXN0b3IgVGhlIG5lYXJlc3QgU2hhZG93Um9vdCBhbmNlc3RvciwgaWYgYW55LlxuICAgICAqL1xuXG5cbiAgICBmdW5jdGlvbiBjb21wb3NlZFRyZWVXYWxrKG5vZGUsIGNhbGxiYWNrLCBzaGFkb3dSb290QW5jZXN0b3IpIHtcbiAgICAgIGlmIChub2RlLm5vZGVUeXBlID09IE5vZGUuRUxFTUVOVF9OT0RFKSB7XG4gICAgICAgIHZhciBlbGVtZW50ID0gLyoqIEB0eXBlIHshRWxlbWVudH0gKi9ub2RlO1xuICAgICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgICBjYWxsYmFjayhlbGVtZW50KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIERlc2NlbmQgaW50byBub2RlOlxuICAgICAgICAvLyBJZiBpdCBoYXMgYSBTaGFkb3dSb290LCBpZ25vcmUgYWxsIGNoaWxkIGVsZW1lbnRzIC0gdGhlc2Ugd2lsbCBiZSBwaWNrZWRcbiAgICAgICAgLy8gdXAgYnkgdGhlIDxjb250ZW50PiBvciA8c2hhZG93PiBlbGVtZW50cy4gRGVzY2VuZCBzdHJhaWdodCBpbnRvIHRoZVxuICAgICAgICAvLyBTaGFkb3dSb290LlxuICAgICAgICB2YXIgc2hhZG93Um9vdCA9IC8qKiBAdHlwZSB7IUhUTUxFbGVtZW50fSAqL2VsZW1lbnQuc2hhZG93Um9vdDtcbiAgICAgICAgaWYgKHNoYWRvd1Jvb3QpIHtcbiAgICAgICAgICBjb21wb3NlZFRyZWVXYWxrKHNoYWRvd1Jvb3QsIGNhbGxiYWNrLCBzaGFkb3dSb290KTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyBJZiBpdCBpcyBhIDxjb250ZW50PiBlbGVtZW50LCBkZXNjZW5kIGludG8gZGlzdHJpYnV0ZWQgZWxlbWVudHMgLSB0aGVzZVxuICAgICAgICAvLyBhcmUgZWxlbWVudHMgZnJvbSBvdXRzaWRlIHRoZSBzaGFkb3cgcm9vdCB3aGljaCBhcmUgcmVuZGVyZWQgaW5zaWRlIHRoZVxuICAgICAgICAvLyBzaGFkb3cgRE9NLlxuICAgICAgICBpZiAoZWxlbWVudC5sb2NhbE5hbWUgPT0gJ2NvbnRlbnQnKSB7XG4gICAgICAgICAgdmFyIGNvbnRlbnQgPSAvKiogQHR5cGUgeyFIVE1MQ29udGVudEVsZW1lbnR9ICovZWxlbWVudDtcbiAgICAgICAgICAvLyBWZXJpZmllcyBpZiBTaGFkb3dEb20gdjAgaXMgc3VwcG9ydGVkLlxuICAgICAgICAgIHZhciBkaXN0cmlidXRlZE5vZGVzID0gY29udGVudC5nZXREaXN0cmlidXRlZE5vZGVzID8gY29udGVudC5nZXREaXN0cmlidXRlZE5vZGVzKCkgOiBbXTtcbiAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGRpc3RyaWJ1dGVkTm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbXBvc2VkVHJlZVdhbGsoZGlzdHJpYnV0ZWROb2Rlc1tpXSwgY2FsbGJhY2ssIHNoYWRvd1Jvb3RBbmNlc3Rvcik7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIElmIGl0IGlzIGEgPHNsb3Q+IGVsZW1lbnQsIGRlc2NlbmQgaW50byBhc3NpZ25lZCBub2RlcyAtIHRoZXNlXG4gICAgICAgIC8vIGFyZSBlbGVtZW50cyBmcm9tIG91dHNpZGUgdGhlIHNoYWRvdyByb290IHdoaWNoIGFyZSByZW5kZXJlZCBpbnNpZGUgdGhlXG4gICAgICAgIC8vIHNoYWRvdyBET00uXG4gICAgICAgIGlmIChlbGVtZW50LmxvY2FsTmFtZSA9PSAnc2xvdCcpIHtcbiAgICAgICAgICB2YXIgc2xvdCA9IC8qKiBAdHlwZSB7IUhUTUxTbG90RWxlbWVudH0gKi9lbGVtZW50O1xuICAgICAgICAgIC8vIFZlcmlmeSBpZiBTaGFkb3dEb20gdjEgaXMgc3VwcG9ydGVkLlxuICAgICAgICAgIHZhciBfZGlzdHJpYnV0ZWROb2RlcyA9IHNsb3QuYXNzaWduZWROb2RlcyA/IHNsb3QuYXNzaWduZWROb2Rlcyh7IGZsYXR0ZW46IHRydWUgfSkgOiBbXTtcbiAgICAgICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgX2Rpc3RyaWJ1dGVkTm9kZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICBjb21wb3NlZFRyZWVXYWxrKF9kaXN0cmlidXRlZE5vZGVzW19pXSwgY2FsbGJhY2ssIHNoYWRvd1Jvb3RBbmNlc3Rvcik7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBJZiBpdCBpcyBuZWl0aGVyIHRoZSBwYXJlbnQgb2YgYSBTaGFkb3dSb290LCBhIDxjb250ZW50PiBlbGVtZW50LCBhIDxzbG90PlxuICAgICAgLy8gZWxlbWVudCwgbm9yIGEgPHNoYWRvdz4gZWxlbWVudCByZWN1cnNlIG5vcm1hbGx5LlxuICAgICAgdmFyIGNoaWxkID0gbm9kZS5maXJzdENoaWxkO1xuICAgICAgd2hpbGUgKGNoaWxkICE9IG51bGwpIHtcbiAgICAgICAgY29tcG9zZWRUcmVlV2FsayhjaGlsZCwgY2FsbGJhY2ssIHNoYWRvd1Jvb3RBbmNlc3Rvcik7XG4gICAgICAgIGNoaWxkID0gY2hpbGQubmV4dFNpYmxpbmc7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWRkcyBhIHN0eWxlIGVsZW1lbnQgdG8gdGhlIG5vZGUgY29udGFpbmluZyB0aGUgaW5lcnQgc3BlY2lmaWMgc3R5bGVzXG4gICAgICogQHBhcmFtIHshTm9kZX0gbm9kZVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGFkZEluZXJ0U3R5bGUobm9kZSkge1xuICAgICAgaWYgKG5vZGUucXVlcnlTZWxlY3Rvcignc3R5bGUjaW5lcnQtc3R5bGUsIGxpbmsjaW5lcnQtc3R5bGUnKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICAgICAgc3R5bGUuc2V0QXR0cmlidXRlKCdpZCcsICdpbmVydC1zdHlsZScpO1xuICAgICAgc3R5bGUudGV4dENvbnRlbnQgPSAnXFxuJyArICdbaW5lcnRdIHtcXG4nICsgJyAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuJyArICcgIGN1cnNvcjogZGVmYXVsdDtcXG4nICsgJ31cXG4nICsgJ1xcbicgKyAnW2luZXJ0XSwgW2luZXJ0XSAqIHtcXG4nICsgJyAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcXG4nICsgJyAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcXG4nICsgJyAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xcbicgKyAnICB1c2VyLXNlbGVjdDogbm9uZTtcXG4nICsgJ31cXG4nO1xuICAgICAgbm9kZS5hcHBlbmRDaGlsZChzdHlsZSk7XG4gICAgfVxuXG4gICAgaWYgKCFFbGVtZW50LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eSgnaW5lcnQnKSkge1xuICAgICAgLyoqIEB0eXBlIHshSW5lcnRNYW5hZ2VyfSAqL1xuICAgICAgdmFyIGluZXJ0TWFuYWdlciA9IG5ldyBJbmVydE1hbmFnZXIoZG9jdW1lbnQpO1xuXG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoRWxlbWVudC5wcm90b3R5cGUsICdpbmVydCcsIHtcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgLyoqIEB0aGlzIHshRWxlbWVudH0gKi9cbiAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaGFzQXR0cmlidXRlKCdpbmVydCcpO1xuICAgICAgICB9LFxuICAgICAgICAvKiogQHRoaXMgeyFFbGVtZW50fSAqL1xuICAgICAgICBzZXQ6IGZ1bmN0aW9uIHNldChpbmVydCkge1xuICAgICAgICAgIGluZXJ0TWFuYWdlci5zZXRJbmVydCh0aGlzLCBpbmVydCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfSkoKTtcblxufSkpKTtcbiIsImltcG9ydCBcImJsb2NraW5nLWVsZW1lbnRzXCI7XG5pbXBvcnQgeyB1c2VMYXlvdXRFZmZlY3QgfSBmcm9tIFwicHJlYWN0L2hvb2tzXCI7XG5pbXBvcnQgXCJ3aWNnLWluZXJ0XCI7XG5jb25zdCBibG9ja2luZ0VsZW1lbnRzID0gZG9jdW1lbnQuJGJsb2NraW5nRWxlbWVudHM7XG4vKipcbiAqIEFsbG93cyBhbiBlbGVtZW50IHRvIHRyYXAgZm9jdXMgYnkgYXBwbHlpbmcgdGhlIFwiaW5lcnRcIiBhdHRyaWJ1dGUgdG8gYWxsIHNpYmxpbmcsIGF1bnQsIGFuZCB1bmNsZSBub2Rlcy5cbiAqXG4gKiBBdXRvbWF0aWNhbGx5IGhhbmRsZXMgY29uc2VjdXRpdmUgY2FsbHMgd2l0aCBhIGxvb3NlbHkgYXBwbGllZCBzdGFjayBvcGVyYXRpb25cbiAqIChzcGVjaWZpY2FsbHkgdmlhIGBibG9ja2luZ0VsZW1lbnRzYCwgd2l0aCBhIHNtYWxsIHBvbHlmaWxsIGJlY2F1c2UgSSdtIG5vdCBzdXJlIGhvdyBsb25nXG4gKiBpdCdsbCB0YWtlIHRvIGZpbmQgaXRzIHdheSBpbnRvIHRoZSBzcGVjLCBpZiBldmVyKVxuICogQHBhcmFtIHRhcmdldFxuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlQmxvY2tpbmdFbGVtZW50KHRhcmdldCkge1xuICAgIC8qKlxuICAgICAqIFB1c2gvcG9wIHRoZSBlbGVtZW50IGZyb20gdGhlIGJsb2NraW5nRWxlbWVudHMgc3RhY2suXG4gICAgICovXG4gICAgdXNlTGF5b3V0RWZmZWN0KCgpID0+IHtcbiAgICAgICAgaWYgKHRhcmdldCkge1xuICAgICAgICAgICAgYmxvY2tpbmdFbGVtZW50cy5wdXNoKHRhcmdldCk7XG4gICAgICAgICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICAgICAgICAgIGJsb2NraW5nRWxlbWVudHMucmVtb3ZlKHRhcmdldCk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfSwgW3RhcmdldF0pO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGdldFRvcEVsZW1lbnQoKSB7XG4gICAgcmV0dXJuIGJsb2NraW5nRWxlbWVudHMudG9wO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXNlLWJsb2NraW5nLWVsZW1lbnQuanMubWFwIiwiaW1wb3J0IHsgdXNlTGF5b3V0RWZmZWN0IH0gZnJvbSBcInByZWFjdC9ob29rc1wiO1xuaW1wb3J0IHsgaXNGb2N1c2FibGUgfSBmcm9tIFwidGFiYmFibGVcIjtcbmltcG9ydCB7IHVzZUFjdGl2ZUVsZW1lbnQgfSBmcm9tIFwiLi91c2UtYWN0aXZlLWVsZW1lbnRcIjtcbmltcG9ydCB7IGdldFRvcEVsZW1lbnQsIHVzZUJsb2NraW5nRWxlbWVudCB9IGZyb20gXCIuL3VzZS1ibG9ja2luZy1lbGVtZW50XCI7XG5pbXBvcnQgeyB1c2VNZXJnZWRQcm9wcyB9IGZyb20gXCIuL3VzZS1tZXJnZWQtcHJvcHNcIjtcbmltcG9ydCB7IHVzZVJlZkVsZW1lbnQgfSBmcm9tIFwiLi91c2UtcmVmLWVsZW1lbnRcIjtcbmNvbnN0IGVsZW1lbnRzVG9SZXN0b3JlRm9jdXNUbyA9IG5ldyBNYXAoKTtcbmV4cG9ydCBmdW5jdGlvbiB1c2VGb2N1c1RyYXAoeyB0cmFwQWN0aXZlIH0pIHtcbiAgICBjb25zdCB7IGVsZW1lbnQsIHVzZVJlZkVsZW1lbnRQcm9wcywgZ2V0RWxlbWVudCB9ID0gdXNlUmVmRWxlbWVudCgpO1xuICAgIGNvbnN0IHsgZ2V0TGFzdEFjdGl2ZUVsZW1lbnQgfSA9IHVzZUFjdGl2ZUVsZW1lbnQoKTtcbiAgICAvLyBXaGVuIHRoZSB0cmFwIGJlY29tZXMgYWN0aXZlLCBiZWZvcmUgd2UgbGV0IHRoZSBibG9ja2luZ0VsZW1lbnRzIGhvb2sgcnVuLFxuICAgIC8vIGtlZXAgdHJhY2sgb2Ygd2hhdGV2ZXIncyBjdXJyZW50bHkgZm9jdXNlZCBhbmQgc2F2ZSBpdC5cbiAgICB1c2VMYXlvdXRFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpZiAodHJhcEFjdGl2ZSAmJiBlbGVtZW50KSB7XG4gICAgICAgICAgICAvLyBTYXZlIHRoZSBjdXJyZW50bHkgZm9jdXNlZCBlbGVtZW50XG4gICAgICAgICAgICAvLyB0byB3aGF0ZXZlcidzIGN1cnJlbnRseSBhdCB0aGUgdG9wIG9mIHRoZSBzdGFja1xuICAgICAgICAgICAgZWxlbWVudHNUb1Jlc3RvcmVGb2N1c1RvLnNldChnZXRUb3BFbGVtZW50KCksIGdldExhc3RBY3RpdmVFbGVtZW50KCkgPz8gZG9jdW1lbnQuYm9keSk7XG4gICAgICAgIH1cbiAgICB9LCBbdHJhcEFjdGl2ZSwgZWxlbWVudF0pO1xuICAgIHVzZUJsb2NraW5nRWxlbWVudCh0cmFwQWN0aXZlID8gZWxlbWVudCA6IG51bGwpO1xuICAgIC8qKlxuICAgICAqIEFueSB0aW1lIHdlIGFjdGl2YXRlIG9yIGRlYWN0aXZhdGUgdGhlIHRyYXAsXG4gICAgICogY2hhbmdlIGZvY3VzIHRvIHNvbWV0aGluZyBlbHNlIChzb21ldGhpbmcgaW5cbiAgICAgKiB0aGUgdHJhcCBpZiBpdCdzIGFjdGl2ZSwgb3Igd2hhdGV2ZXIgd2UndmVcbiAgICAgKiB0cmFja2VkIGluIGVsZW1lbnRzVG9SZXN0b3JlRm9jdXNUbyBpZiBub3QpXG4gICAgICovXG4gICAgdXNlTGF5b3V0RWZmZWN0KCgpID0+IHtcbiAgICAgICAgaWYgKHRyYXBBY3RpdmUgJiYgZWxlbWVudCkge1xuICAgICAgICAgICAgbGV0IHJhZkhhbmRsZSA9IHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gVE9ETzogVGhpcyBleHRyYSBxdWV1ZU1pY3JvdGFzayBpcyBuZWVkZWQgZm9yXG4gICAgICAgICAgICAgICAgLy8gLi4ucmVhc29ucz9cbiAgICAgICAgICAgICAgICBxdWV1ZU1pY3JvdGFzaygoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGZpbmRGaXJzdEZvY3VzYWJsZShlbGVtZW50KT8uZm9jdXMoKTtcbiAgICAgICAgICAgICAgICAgICAgcmFmSGFuZGxlID0gMDtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAocmFmSGFuZGxlKVxuICAgICAgICAgICAgICAgICAgICBjYW5jZWxBbmltYXRpb25GcmFtZShyYWZIYW5kbGUpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChlbGVtZW50KSB7XG4gICAgICAgICAgICAvLyBSZXN0b3JlIHRoZSBmb2N1cyB0byB0aGUgZWxlbWVudFxuICAgICAgICAgICAgLy8gdGhhdCBoYXMgcmV0dXJuZWQgdG8gdGhlIHRvcCBvZiB0aGUgc3RhY2tcbiAgICAgICAgICAgIGxldCByYWZIYW5kbGUgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHF1ZXVlTWljcm90YXNrKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudHNUb1Jlc3RvcmVGb2N1c1RvLmdldChnZXRUb3BFbGVtZW50KCkpPy5mb2N1cygpO1xuICAgICAgICAgICAgICAgICAgICByYWZIYW5kbGUgPSAwO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChyYWZIYW5kbGUpXG4gICAgICAgICAgICAgICAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHJhZkhhbmRsZSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfSwgW3RyYXBBY3RpdmUsIGVsZW1lbnRdKTtcbiAgICBjb25zdCB1c2VGb2N1c1RyYXBQcm9wcyA9ICgocHJvcHMpID0+IHtcbiAgICAgICAgcmV0dXJuIHVzZU1lcmdlZFByb3BzKCkoeyBcImFyaWEtbW9kYWxcIjogdHJhcEFjdGl2ZSA/IFwidHJ1ZVwiIDogdW5kZWZpbmVkIH0sIHVzZVJlZkVsZW1lbnRQcm9wcyhwcm9wcykpO1xuICAgIH0pO1xuICAgIHJldHVybiB7XG4gICAgICAgIHVzZUZvY3VzVHJhcFByb3BzLFxuICAgICAgICBlbGVtZW50LFxuICAgICAgICBnZXRFbGVtZW50XG4gICAgfTtcbn1cbi8qKlxuICogUmV0dXJucyB0aGUgZmlyc3QgZm9jdXNhYmxlIGVsZW1lbnQgY29udGFpbmVkIHdpdGhpbiB0aGUgZ2l2ZW4gbm9kZSwgb3IgbnVsbCBpZiBub25lIGFyZSBmb3VuZC5cbiAqIEBwYXJhbSBlbGVtZW50XG4gKiBAcmV0dXJuc1xuICovXG5leHBvcnQgZnVuY3Rpb24gZmluZEZpcnN0Rm9jdXNhYmxlKGVsZW1lbnQpIHtcbiAgICBjb25zdCB0cmVlV2Fsa2VyID0gZG9jdW1lbnQuY3JlYXRlVHJlZVdhbGtlcihlbGVtZW50LCBOb2RlRmlsdGVyLlNIT1dfRUxFTUVOVCwgeyBhY2NlcHROb2RlOiAobm9kZSkgPT4gKG5vZGUgaW5zdGFuY2VvZiBFbGVtZW50ICYmIGlzRm9jdXNhYmxlKG5vZGUpID8gTm9kZUZpbHRlci5GSUxURVJfQUNDRVBUIDogTm9kZUZpbHRlci5GSUxURVJfU0tJUCkgfSk7XG4gICAgY29uc3QgZmlyc3RGb2N1c2FibGUgPSB0cmVlV2Fsa2VyLmZpcnN0Q2hpbGQoKTtcbiAgICByZXR1cm4gZmlyc3RGb2N1c2FibGU7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2UtZm9jdXMtdHJhcC5qcy5tYXAiLCJpbXBvcnQgeyB1c2VFZmZlY3QgYXMgdXNlRWZmZWN0TmF0aXZlLCB1c2VSZWYgfSBmcm9tIFwicHJlYWN0L2hvb2tzXCI7XG4vKipcbiAqIFdyYXAgdGhlIG5hdGl2ZSBgdXNlRWZmZWN0YCB0byBhZGQgYXJndW1lbnRzXG4gKiB0aGF0IGFsbG93IGFjY2Vzc2luZyB0aGUgcHJldmlvdXMgdmFsdWUgYXMgdGhlIGZpcnN0IGFyZ3VtZW50LFxuICogYXMgd2VsbCBhcyB0aGUgY2hhbmdlcyB0aGF0IGNhdXNlZCB0aGUgaG9vayB0byBiZSBjYWxsZWQgYXMgdGhlIHNlY29uZCBhcmd1bWVudC5cbiAqXG4gKiBAcGFyYW0gZWZmZWN0XG4gKiBAcGFyYW0gaW5wdXRzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VFZmZlY3QoZWZmZWN0LCBpbnB1dHMpIHtcbiAgICBjb25zdCBwcmV2SW5wdXRzID0gdXNlUmVmKGlucHV0cyk7XG4gICAgY29uc3QgZWZmZWN0MiA9ICgpID0+IHtcbiAgICAgICAgbGV0IGNoYW5nZXMgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBNYXRoLm1heChwcmV2SW5wdXRzLmN1cnJlbnQubGVuZ3RoLCBpbnB1dHMubGVuZ3RoKTsgKytpKSB7XG4gICAgICAgICAgICBpZiAocHJldklucHV0cy5jdXJyZW50W2ldICE9IGlucHV0c1tpXSlcbiAgICAgICAgICAgICAgICBjaGFuZ2VzW2ldID0geyBmcm9tOiBwcmV2SW5wdXRzLmN1cnJlbnRbaV0sIHRvOiBpbnB1dHNbaV0gfTtcbiAgICAgICAgfVxuICAgICAgICBlZmZlY3QocHJldklucHV0cy5jdXJyZW50LCBjaGFuZ2VzKTtcbiAgICAgICAgcHJldklucHV0cy5jdXJyZW50ID0gaW5wdXRzO1xuICAgIH07XG4gICAgdXNlRWZmZWN0TmF0aXZlKGVmZmVjdDIsIGlucHV0cyk7XG59XG47XG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2UtZWZmZWN0LmpzLm1hcCIsImltcG9ydCB7IHVzZUNhbGxiYWNrIH0gZnJvbSBcInByZWFjdC9ob29rc1wiO1xuaW1wb3J0IHsgdXNlTGF5b3V0RWZmZWN0IH0gZnJvbSBcIi4vdXNlLWxheW91dC1lZmZlY3RcIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcIi4vdXNlLXN0YXRlXCI7XG5pbXBvcnQgeyB1c2VMaW5lYXJOYXZpZ2F0aW9uIH0gZnJvbSBcIi4vdXNlLWtleWJvYXJkLW5hdmlnYXRpb25cIjtcbmltcG9ydCB7IHVzZUNoaWxkRmxhZywgdXNlQ2hpbGRNYW5hZ2VyIH0gZnJvbSBcIi4vdXNlLWNoaWxkLW1hbmFnZXJcIjtcbmltcG9ydCB7IHVzZUxpc3ROYXZpZ2F0aW9uIH0gZnJvbSBcIi4vdXNlLWxpc3QtbmF2aWdhdGlvblwiO1xuaW1wb3J0IHsgdXNlU3RhYmxlR2V0dGVyIH0gZnJvbSBcIi4vdXNlLXN0YWJsZS1nZXR0ZXJcIjtcbmltcG9ydCB7IHVzZUhhc0ZvY3VzIH0gZnJvbSBcIi4vdXNlLWhhcy1mb2N1c1wiO1xuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcIi4vdXNlLWVmZmVjdFwiO1xuZXhwb3J0IGZ1bmN0aW9uIHVzZUdyaWROYXZpZ2F0aW9uKHsgZm9jdXNPbkNoYW5nZTogZm9jIH0pIHtcbiAgICBjb25zdCBnZXRGb2N1c0NlbGxPblJvd0NoYW5nZSA9IHVzZVN0YWJsZUdldHRlcihmb2MpO1xuICAgIC8qY29uc3Qge1xuICAgICAgICB1c2VMaXN0TmF2aWdhdGlvbkNoaWxkLFxuICAgICAgICBjaGlsZENvdW50OiByb3dDb3VudCxcbiAgICAgICAgaW5kaWNlc0J5RWxlbWVudDogcm93SW5kaWNlc0J5RWxlbWVudCxcbiAgICAgICAgbWFuYWdlZENoaWxkcmVuOiBtYW5hZ2VkUm93cyxcbiAgICAgICAgbmF2aWdhdGVUb0luZGV4OiBzZXRSb3dJbmRleCxcbiAgICAgICAgdGFiYmFibGVJbmRleDogdGFiYmFibGVSb3dcbiAgICB9ID0gdXNlTGlzdE5hdmlnYXRpb248UiwgVXNlR3JpZE5hdmlnYXRpb25Sb3dJbmZvPih7IGZvY3VzT25DaGFuZ2UsIGtleU5hdmlnYXRpb246IFwiYmxvY2tcIiB9KTsqL1xuICAgIGNvbnN0IFtjdXJyZW50Um93LCBzZXRDdXJyZW50Um93LCBnZXRDdXJyZW50Um93XSA9IHVzZVN0YXRlKDApO1xuICAgIGNvbnN0IFtsYXN0S25vd25DZWxsSW5kZXgsIHNldExhc3RLbm93bkNlbGxJbmRleCwgZ2V0TGFzdEtub3duQ2VsbEluZGV4XSA9IHVzZVN0YXRlKDApO1xuICAgIHVzZUVmZmVjdCgoW3ByZXZdKSA9PiB7IGNvbnNvbGUubG9nKGBjdXJyZW50Um93OiAke3ByZXZ9IC0+ICR7Y3VycmVudFJvd31gKTsgfSwgW2N1cnJlbnRSb3ddKTtcbiAgICBjb25zdCB7IGNoaWxkQ291bnQsIG1hbmFnZWRDaGlsZHJlbiwgaW5kaWNlc0J5RWxlbWVudCwgZ2V0TW91bnRJbmRleCwgbW91bnRlZENoaWxkcmVuLCB0b3RhbENoaWxkcmVuTW91bnRlZCwgdG90YWxDaGlsZHJlblVub3VudGVkLCB1c2VNYW5hZ2VkQ2hpbGQgfSA9IHVzZUNoaWxkTWFuYWdlcigpO1xuICAgIGNvbnN0IHsgdXNlTGluZWFyTmF2aWdhdGlvbkNoaWxkIH0gPSB1c2VMaW5lYXJOYXZpZ2F0aW9uKHsgbWFuYWdlZENoaWxkcmVuLCBnZXRJbmRleDogZ2V0Q3VycmVudFJvdywgc2V0SW5kZXg6IHVzZUNhbGxiYWNrKGkgPT4geyBjb25zb2xlLmxvZyhgc2V0SW5kZXgoJHtpfSlQYCk7IHNldEN1cnJlbnRSb3coaSk7IH0sIFtzZXRDdXJyZW50Um93XSksIG5hdmlnYXRpb25EaXJlY3Rpb246IFwiYmxvY2tcIiB9KTtcbiAgICB1c2VDaGlsZEZsYWcoY3VycmVudFJvdywgbWFuYWdlZENoaWxkcmVuLmxlbmd0aCwgdXNlQ2FsbGJhY2soKGluZGV4LCB0YWJiYWJsZSkgPT4gbWFuYWdlZENoaWxkcmVuW2luZGV4XT8uc2V0SXNUYWJiYWJsZVJvdyh0YWJiYWJsZSwgbGFzdEtub3duQ2VsbEluZGV4KSwgW2xhc3RLbm93bkNlbGxJbmRleCwgbWFuYWdlZENoaWxkcmVuXSkpO1xuICAgIGNvbnN0IHVzZUdyaWROYXZpZ2F0aW9uUm93ID0gdXNlQ2FsbGJhY2soKHsgaW5kZXgsIC4uLmluZm8gfSkgPT4ge1xuICAgICAgICBjb25zdCB7IHVzZUhhc0ZvY3VzUHJvcHMsIGxhc3RGb2N1c2VkSW5uZXIgfSA9IHVzZUhhc0ZvY3VzKCk7XG4gICAgICAgIGNvbnN0IFtpc1RhYmJhYmxlUm93LCBzZXRJc1RhYmJhYmxlUm93XSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICAgICAgLy8gQmVzaWRlcyBqdXN0IGJlaW5nIGEgbGlzdCBuYXYgY2hpbGQsIGl0J3MgYWxzbyBhIGxpc3QgbmF2IHBhcmVudFxuICAgICAgICAvLyB5YWFhYXl5eVxuICAgICAgICBjb25zdCB7IHVzZUxpc3ROYXZpZ2F0aW9uQ2hpbGQ6IHVzZUxpc3ROYXZpZ2F0aW9uQ2hpbGQyLCBjaGlsZENvdW50OiBjZWxsQ291bnQsIGluZGljZXNCeUVsZW1lbnQ6IGNlbGxJbmRpY2VzQnlFbGVtZW50LCBtYW5hZ2VkQ2hpbGRyZW46IG1hbmFnZWRDZWxscywgbmF2aWdhdGVUb0luZGV4OiBzZXRDZWxsSW5kZXgsIHRhYmJhYmxlSW5kZXg6IHRhYmJhYmxlQ2VsbCwgZm9jdXNDdXJyZW50IH0gPSB1c2VMaXN0TmF2aWdhdGlvbih7IGZvY3VzT25DaGFuZ2U6IChpc1RhYmJhYmxlUm93ICYmIGdldEZvY3VzQ2VsbE9uUm93Q2hhbmdlKCkpLCBrZXlOYXZpZ2F0aW9uOiBcImlubGluZVwiLCBpbml0aWFsSW5kZXg6IG51bGwgfSk7XG4gICAgICAgIC8vIEFueSB0aW1lIHdlIGJlY29tZSB0aGUgY3VycmVudGx5IHRhYmJhYmxlIHJvdyxcbiAgICAgICAgLy8gbWFrZSBzdXJlIHRoZSBjb3JyZWN0IGNlbGwgaXMgc2VsZWN0ZWQgYW5kIGZvY3VzZWQuXG4gICAgICAgIC8vIEFueSBvdGhlciB0aW1lLCBtYWtlIHN1cmUgbm8gY2VsbCBpcyB0YWJiYWJsZS5cbiAgICAgICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgICAgIGlmIChpc1RhYmJhYmxlUm93KSB7XG4gICAgICAgICAgICAgICAgc2V0Q2VsbEluZGV4KGdldExhc3RLbm93bkNlbGxJbmRleCgpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHNldENlbGxJbmRleChudWxsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgW2lzVGFiYmFibGVSb3ddKTtcbiAgICAgICAgLy8gQW55IHRpbWUgd2UgYmVjb21lIHRoZSBjdXJyZW50bHkgdGFiYmFibGUgcm93LFxuICAgICAgICAvLyByZXF1ZXN0IHRoZSBjb21wb25lbnQgcmVyZW5kZXIgYW5kIGZvY3VzIGl0c2VsZi5cbiAgICAgICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgICAgIGlmIChpc1RhYmJhYmxlUm93ICYmIGdldEZvY3VzQ2VsbE9uUm93Q2hhbmdlKCkpIHtcbiAgICAgICAgICAgICAgICBmb2N1c0N1cnJlbnQ/LigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCBbZm9jdXNDdXJyZW50LCBpc1RhYmJhYmxlUm93XSk7XG4gICAgICAgIC8vIEFueSB0aW1lIHRoZSBjdXJyZW50IGNlbGwgY2hhbmdlcyBcbiAgICAgICAgLy8gKHByb2JhYmx5IGJlY2F1c2Ugd2UgaW50ZXJhY3RlZCB3aXRoIGl0LCB0aHVzIGZvY3VzaW5nIGl0LCBcbiAgICAgICAgLy8gY2hhbmdpbmcgaXQgZnJvbSBudWxsIGlmIHRoZSByb3cgd2Fzbid0IGFscmVhZHkgZm9jdXNlZClcbiAgICAgICAgLy8gbWFrZSBzdXJlIHRoYXQgd2UncmUgdGhlIGN1cnJlbnRseSB0YWJiYWJsZSByb3cgaWYgd2Ugd2VyZW4ndCBhbHJlYWR5LlxuICAgICAgICB1c2VMYXlvdXRFZmZlY3QoKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHRhYmJhYmxlQ2VsbCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHNldExhc3RLbm93bkNlbGxJbmRleCh0YWJiYWJsZUNlbGwpO1xuICAgICAgICAgICAgICAgIHNldElzVGFiYmFibGVSb3codHJ1ZSk7XG4gICAgICAgICAgICAgICAgc2V0Q3VycmVudFJvdyhpbmRleCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIFtpbmRleCwgdGFiYmFibGVDZWxsLCBzZXRMYXN0S25vd25DZWxsSW5kZXhdKTtcbiAgICAgICAgY29uc3QgeyB1c2VNYW5hZ2VkQ2hpbGRQcm9wcyB9ID0gdXNlTWFuYWdlZENoaWxkKHtcbiAgICAgICAgICAgIGluZGV4LCBzZXRJc1RhYmJhYmxlUm93OiB1c2VDYWxsYmFjaygodGFiYmFibGUsIG5ld0luZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHRhYmJhYmxlKSB7XG4gICAgICAgICAgICAgICAgICAgIHNldENlbGxJbmRleChuZXdJbmRleCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHNldElzVGFiYmFibGVSb3codGFiYmFibGUpO1xuICAgICAgICAgICAgfSwgW10pLCAuLi5pbmZvXG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCB7IHVzZUxpbmVhck5hdmlnYXRpb25DaGlsZFByb3BzIH0gPSB1c2VMaW5lYXJOYXZpZ2F0aW9uQ2hpbGQoKTtcbiAgICAgICAgY29uc3QgdXNlR3JpZE5hdmlnYXRpb25Sb3dQcm9wcyA9IHVzZUNhbGxiYWNrKChwcm9wcykgPT4gdXNlTWFuYWdlZENoaWxkUHJvcHModXNlTGluZWFyTmF2aWdhdGlvbkNoaWxkUHJvcHModXNlSGFzRm9jdXNQcm9wcyhwcm9wcykpKSwgW3VzZU1hbmFnZWRDaGlsZFByb3BzXSk7XG4gICAgICAgIGNvbnN0IHVzZUdyaWROYXZpZ2F0aW9uQ2VsbCA9IHVzZUNhbGxiYWNrKCh7IGluZGV4LCB0ZXh0LCAuLi5pbmZvIH0pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHsgdGFiYmFibGUsIHVzZUxpc3ROYXZpZ2F0aW9uQ2hpbGRQcm9wcyB9ID0gdXNlTGlzdE5hdmlnYXRpb25DaGlsZDIoeyB0ZXh0LCBpbmRleCwgLi4uaW5mbyB9KTtcbiAgICAgICAgICAgIGNvbnN0IHVzZUdyaWROYXZpZ2F0aW9uQ2VsbFByb3BzID0gdXNlQ2FsbGJhY2soKHByb3BzKSA9PiB1c2VMaXN0TmF2aWdhdGlvbkNoaWxkUHJvcHMocHJvcHMpLCBbdXNlTGlzdE5hdmlnYXRpb25DaGlsZFByb3BzXSk7XG4gICAgICAgICAgICByZXR1cm4geyB0YWJiYWJsZSwgdXNlR3JpZE5hdmlnYXRpb25DZWxsUHJvcHMgfTtcbiAgICAgICAgfSwgW3VzZUxpc3ROYXZpZ2F0aW9uQ2hpbGQyXSk7XG4gICAgICAgIHJldHVybiB7IHVzZUdyaWROYXZpZ2F0aW9uUm93UHJvcHMsIHVzZUdyaWROYXZpZ2F0aW9uQ2VsbCwgY2VsbENvdW50LCB0YWJiYWJsZUNlbGwsIGlzVGFiYmFibGVSb3cgfTtcbiAgICB9LCBbc2V0TGFzdEtub3duQ2VsbEluZGV4LCB1c2VMaW5lYXJOYXZpZ2F0aW9uQ2hpbGQsIHVzZU1hbmFnZWRDaGlsZF0pO1xuICAgIHJldHVybiB7XG4gICAgICAgIHVzZUdyaWROYXZpZ2F0aW9uUm93LFxuICAgICAgICByb3dDb3VudDogY2hpbGRDb3VudCxcbiAgICAgICAgY2VsbEluZGV4OiBsYXN0S25vd25DZWxsSW5kZXgsXG4gICAgICAgIHJvd0luZGV4OiBjdXJyZW50Um93XG4gICAgfTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZS1ncmlkLW5hdmlnYXRpb24uanMubWFwIixudWxsXSwibmFtZXMiOlsibCIsInUiLCJ0IiwibyIsInIiLCJmIiwiZSIsImMiLCJzIiwiYSIsImgiLCJ2IiwieSIsImQiLCJfIiwiayIsImIiLCJtIiwiZyIsImoiLCJ3IiwieCIsIlAiLCJNIiwiQSIsIkMiLCJIIiwiJCIsIlQiLCJPIiwiTCIsIlMiLCJuIiwiY3JlYXRlRWxlbWVudCIsIkZyYWdtZW50IiwidXNlQ2FsbGJhY2siLCJ1c2VTdGF0ZVAiLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsInVzZUxheW91dEVmZmVjdCIsInVzZUltcGVyYXRpdmVIYW5kbGUiLCJ1c2VMYXlvdXRFZmZlY3ROYXRpdmUiLCJ1c2VFZmZlY3QiLCJ1c2VNZW1vIiwidGhpcyIsInVzZUVmZmVjdE5hdGl2ZSIsIm1lbW8iLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsInJlbmRlciJdLCJtYXBwaW5ncyI6Ijs7O0FBQUcsUUFBQyxDQUFDLENBQUNBLEdBQUMsQ0FBQ0MsR0FBQyxDQUFHQyxHQUFDLENBQUNDLEdBQUMsQ0FBQ0MsR0FBQyxDQUFDQyxHQUFDLENBQUNDLEdBQUMsQ0FBQyxFQUFFLENBQUNDLEdBQUMsQ0FBQyxFQUFFLENBQUNDLEdBQUMsQ0FBQyxvRUFBb0UsU0FBU0MsR0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLFNBQVNDLEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsRUFBQyxDQUFDLFNBQVNDLEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLEVBQUUsT0FBTyxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPQyxHQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLFNBQVNBLEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsRUFBRVgsR0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sSUFBSSxFQUFFRCxHQUFDLENBQUMsS0FBSyxFQUFFQSxHQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBbUMsU0FBU2EsR0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLFFBQVEsQ0FBQyxTQUFTQyxHQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBQyxDQUFDLFNBQVNDLEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUUsQ0FBQ0EsR0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxPQUFNLFVBQVUsRUFBRSxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUNBLEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBU0MsR0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxPQUFPQSxHQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTQyxHQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFZixHQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUNnQixHQUFDLENBQUMsR0FBRyxFQUFFLEVBQUVkLEdBQUMsR0FBR0osR0FBQyxDQUFDLGlCQUFpQixHQUFHLENBQUMsQ0FBQ0ksR0FBQyxDQUFDSixHQUFDLENBQUMsaUJBQWlCLEdBQUdHLEdBQUMsRUFBRWUsR0FBQyxFQUFDLENBQUMsU0FBU0EsR0FBQyxFQUFFLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQ0EsR0FBQyxDQUFDLEdBQUcsQ0FBQ2hCLEdBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDQSxHQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDQSxHQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQ08sR0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUNVLEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxlQUFlLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUNKLEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUVDLEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLFNBQVNJLEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUViLEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxTQUFTLEVBQUUsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxPQUFPLENBQUMsRUFBRSxRQUFRLEVBQUUsT0FBTyxDQUFDLEVBQUUsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFDSyxHQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUNBLEdBQUMsQ0FBQ0MsR0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUNELEdBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSSxDQUFDTyxHQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFYixHQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLEVBQUUsT0FBTyxDQUFDLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQ2UsR0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDQyxHQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsUUFBUSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLE9BQU8sQ0FBQyxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsVUFBVSxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUNQLEdBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLFVBQVUsRUFBRSxPQUFPLENBQUMsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUNBLEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQ1EsR0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBQyxDQUFDLFNBQVNGLEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsRUFBRSxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUNBLEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDQyxHQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsU0FBU0UsR0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsU0FBUyxFQUFFLE9BQU8sQ0FBQyxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDQSxHQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVNGLEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsS0FBSyxHQUFHLElBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLE9BQU8sS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLFNBQVNHLEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLFVBQVUsR0FBRyxDQUFDLEVBQUUsS0FBSyxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFQyxHQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsVUFBVSxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLFVBQVUsR0FBRyxDQUFDLEVBQUUsS0FBSyxHQUFHLENBQUMsRUFBRSxPQUFPLEdBQUcsQ0FBQyxFQUFFLFNBQVMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRUEsR0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxTQUFTQyxHQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxRQUFRLEVBQUUsT0FBTyxDQUFDLEVBQUVuQixHQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSSxDQUFDLFNBQVNrQixHQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLE9BQU8sR0FBRyxDQUFDLENBQUMsR0FBRyxRQUFRLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEtBQUksQ0FBQyxHQUFHLFFBQVEsRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRUMsR0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRUEsR0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLEtBQUssR0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDQyxHQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDQSxHQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRyx5QkFBeUIsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLEdBQUcsTUFBTSxHQUFHLENBQUMsRUFBRSxNQUFNLEdBQUcsQ0FBQyxFQUFFLE1BQU0sR0FBRyxDQUFDLEVBQUUsVUFBVSxHQUFHLENBQUMsRUFBRSxVQUFVLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxVQUFVLEVBQUUsT0FBTyxDQUFDLEdBQUcsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM1QixHQUFDLENBQUMsS0FBSyxDQUFDQSxHQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLFNBQVM0QixHQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM1QixHQUFDLENBQUMsS0FBSyxDQUFDQSxHQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLFNBQVNtQixHQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsV0FBVyxDQUFDLE9BQU8sSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQ25CLEdBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxVQUFVLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLFdBQVcsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUljLEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQ2UsR0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyx3QkFBd0IsR0FBRyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQ3BCLEdBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUNBLEdBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyx3QkFBd0IsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLGtCQUFrQixFQUFFLENBQUMsQ0FBQyxrQkFBa0IsRUFBRSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLGlCQUFpQixDQUFDLENBQUMsS0FBSSxDQUFDLEdBQUcsSUFBSSxFQUFFLENBQUMsQ0FBQyx3QkFBd0IsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMseUJBQXlCLEVBQUUsQ0FBQyxDQUFDLHlCQUF5QixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxxQkFBcUIsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsbUJBQW1CLEVBQUUsQ0FBQyxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsa0JBQWtCLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUNULEdBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxlQUFlLEdBQUcsQ0FBQyxDQUFDUyxHQUFDLENBQUNBLEdBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLGVBQWUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyx1QkFBdUIsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLHVCQUF1QixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLEdBQUdJLEdBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUNPLEdBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBQyxDQUFDLEtBQUssSUFBSSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDVSxHQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzlCLEdBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQ0EsR0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDQSxHQUFDLENBQUMsR0FBRyxFQUFFQSxHQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDQSxHQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsU0FBUzhCLEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksR0FBRyxDQUFDLENBQUMsT0FBTyxRQUFRLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLEdBQUcsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUV4QixHQUFDLEVBQUUsdUJBQXVCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDLEVBQUMsQ0FBQyxHQUFHbUIsR0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQ0wsR0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxlQUFlLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFTCxHQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFTCxHQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLE9BQU8sR0FBRyxDQUFDLEVBQUUsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssRUFBRSxVQUFVLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUVnQixHQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsR0FBRyxDQUFDLEVBQUUsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU8sRUFBRUEsR0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLFNBQVNILEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsRUFBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUN2QixHQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUdBLEdBQUMsQ0FBQyxPQUFPLEVBQUVBLEdBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDLEdBQUcsRUFBRXVCLEdBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxvQkFBb0IsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLG9CQUFvQixHQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQ3ZCLEdBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxLQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsRUFBRSxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUVVLEdBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBQyxDQUFDLFNBQVNtQixHQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVNFLEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMvQixHQUFDLENBQUMsRUFBRSxFQUFFQSxHQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxFQUFFLE9BQU8sQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUNtQixHQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRyxDQUFDUixHQUFDLENBQUNFLEdBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRVAsR0FBQyxDQUFDQSxHQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBK08sU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUNELEdBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLElBQUksQ0FBQyxlQUFlLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDWSxHQUFDLEVBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLENBQUMsb0JBQW9CLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUNWLEdBQUMsQ0FBQyxLQUFLLENBQUNQLEdBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxHQUFHLElBQUksRUFBRSxDQUFDLENBQUMsd0JBQXdCLEdBQUcsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsd0JBQXdCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsaUJBQWlCLEdBQUcsQ0FBQyxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQ0MsR0FBQyxDQUFDLENBQUMsQ0FBdURhLEdBQUMsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDTCxHQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxVQUFVLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQ0EsR0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUVBLEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUMsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQ1EsR0FBQyxDQUFDLElBQUksQ0FBQyxFQUFDLENBQUMsQ0FBQ0gsR0FBQyxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDRyxHQUFDLENBQUMsSUFBSSxDQUFDLEVBQUMsQ0FBQyxDQUFDSCxHQUFDLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQ0QsR0FBQyxDQUFDWCxHQUFDLENBQUMsRUFBRSxDQUFDQyxHQUFDLENBQUMsVUFBVSxFQUFFLE9BQU8sT0FBTyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxVQUFVLENBQUNlLEdBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDYixHQUFDLENBQUMsQ0FBQzs7SUNBbGhULElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQzJCLEdBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDQSxHQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQ0EsR0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUNBLEdBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDQSxHQUFDLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQ0EsR0FBQyxDQUFDLEdBQUcsRUFBRUEsR0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDWixHQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDQSxHQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQ1ksR0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUNBLEdBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxPQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsVUFBVSxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLFNBQVNSLEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQTROLFNBQVMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDTixHQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUNDLEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQ2EsR0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFFLENBQUNBLEdBQUMsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQ0EsR0FBQyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUNkLEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDQyxHQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBQyxDQUFDLENBQUNhLEdBQUMsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsTUFBTSxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBR0EsR0FBQyxDQUFDLHFCQUFxQixFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUNBLEdBQUMsQ0FBQyxxQkFBcUIsR0FBRyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxvQkFBb0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUMsQ0FBQyxDQUFDQSxHQUFDLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUNkLEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxPQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRUMsR0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUNhLEdBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDQSxHQUFDLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQ2QsR0FBQyxFQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQ2MsR0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxVQUFVLEVBQUUsT0FBTyxxQkFBcUIsQ0FBQyxTQUFTZCxHQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsRUFBRSxPQUFPLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsU0FBU0MsR0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBU0MsR0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFNLFVBQVUsRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzs7SUNBcjRELFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLFVBQVUsR0FBRyxDQUFDLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsT0FBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLFVBQVUsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFNLENBQUMsQ0FBQyxDQUFDLE9BQU0sQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxPQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sSUFBSSxDQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBQ1osR0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxXQUFXLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxJQUFJQyxHQUFDLEVBQUUsb0JBQW9CLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxxQkFBcUIsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUNDLEdBQUMsQ0FBQyxHQUFHLENBQUNBLEdBQUMsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBcVYsSUFBMk0sQ0FBQyxDQUFDQSxHQUFDLENBQUMsSUFBSUEsR0FBQyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxPQUFPLElBQUksRUFBRSxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDQSxHQUFDLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFxTCxTQUFTLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSSxDQUFDQSxHQUFDLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLElBQUlELEdBQUMsRUFBRSxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLENBQUMsV0FBVyxHQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsb0JBQW9CLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLFVBQVUsRUFBRSxPQUFPLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEdBQUcsR0FBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFRCxHQUFDLENBQUNLLEdBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQ0wsR0FBQyxDQUFDSyxHQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFdBQVcsR0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUF1bkIsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLElBQUlKLEdBQUMsRUFBRSxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQ0UsR0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLEdBQUcsR0FBRyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxpQkFBaUIsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLFdBQVcsRUFBRSxPQUFPLE1BQU0sRUFBRSxNQUFNLENBQUMsR0FBRyxFQUFFLE1BQU0sQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxrT0FBa08sQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxPQUFNLENBQUMsV0FBVyxFQUFFLE9BQU8sTUFBTSxFQUFFLFFBQVEsRUFBRSxPQUFPLE1BQU0sRUFBRSxDQUFDLGNBQWMsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQStLRixHQUFDLENBQUMsU0FBUyxDQUFDLGdCQUFnQixDQUFDLEVBQUUsQ0FBQyxDQUFDLG9CQUFvQixDQUFDLDJCQUEyQixDQUFDLHFCQUFxQixDQUFDLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQ0EsR0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQ0MsR0FBQyxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsRUFBRSxFQUFFLFNBQVMsQ0FBQyxFQUFFLENBQUMsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUNBLEdBQUMsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLG9CQUFvQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUksSUFBRyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQ0EsR0FBQyxDQUFDLE1BQU1BLEdBQUMsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxRQUFRLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sR0FBRyxDQUFDLEVBQUUsY0FBYyxHQUFHLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxHQUFHLGNBQWMsR0FBRyxDQUFDLEVBQUUsT0FBTyxHQUFHLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQVUsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsNEJBQTRCLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyw0QkFBNEIsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxRQUFRLEVBQUUsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQ0MsR0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQ0EsR0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEVBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQyxVQUFVLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUNELEdBQUMsQ0FBQyxHQUFHLENB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O0lBQ0E7SUFDQTtBQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7QUFDQTtBQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0FBQ0E7QUFDQTtJQUNBO0lBQ0E7SUFDQTtBQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0FBQ0E7QUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtBQUNBO0FBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7QUFDQTtBQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0FBQ0E7QUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtBQUNBO0FBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtBQUNBO0FBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7QUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtBQUNBO0FBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7QUFDQTtBQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0FBQ0E7QUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtBQUNBO0FBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7QUFDQTtBQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0FBQ0E7QUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtBQUNBO0lBQ0E7SUFDQTtJQUNBOztJQ3pRQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNPLFNBQVMsUUFBUSxDQUFDLFlBQVksRUFBRTtJQUN2QztJQUNBLElBQUksTUFBTSxDQUFDLEtBQUssRUFBRSxRQUFRLENBQUMsR0FBR0Ms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
