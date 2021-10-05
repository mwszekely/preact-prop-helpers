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
        else {
            debugger; // Intentional
            console.assert(false, "Unknown ref type found that was neither a RefCallback nor a RefObject");
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
            let combined = A$1((current) => {
                processRef(current, lhs);
                processRef(current, rhs);
            }, [lhs, rhs]);
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
                return combined;
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
        if (!lhs?.style && !rhs?.style)
            return undefined;
        if (typeof lhs != typeof rhs) {
            // Easy cases, when one is null and the other isn't.
            if (lhs?.style && !rhs?.style)
                return lhs.style;
            if (!lhs?.style && rhs?.style)
                return rhs.style;
            // They're both non-null but different types.
            // Convert the string type to an object bag type and run it again.
            if (lhs?.style && rhs?.style) {
                // (useMergedStyles isn't a true hook -- this isn't a violation)
                if (typeof lhs?.style == "string")
                    return useMergedStyles({ style: styleStringToObject(lhs?.style) }, rhs);
                if (typeof rhs?.style == "string")
                    return useMergedStyles(lhs, { style: styleStringToObject(rhs?.style) });
            }
            // Logic???
            return undefined;
        }
        // They're both strings, just concatenate them.
        if (typeof lhs?.style == "string") {
            return `${lhs.style};${rhs?.style ?? ""}`;
        }
        // They're both objects, just merge them.
        return {
            ...(lhs?.style ?? {}),
            ...(rhs?.style ?? {})
        };
    }

    let log = (str) => { debugger; console.warn(`Trying to merge two props with the same name: ${str}`); /* Intentional */ };
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
            if (ret.ref === undefined)
                delete ret.ref;
            if (ret.style === undefined)
                delete ret.style;
            if (ret.className === undefined)
                delete ret.className;
            if (ret.children === undefined)
                delete ret.children;
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
                        log?.(`Could not merge incompatible prop "${rhsKey}" (type: ${typeof rhsValue}, values: [${lhsValue}, ${rhsValue}])`);
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
            let lv = lhs(...args);
            let rv = rhs(...args);
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
        // We keep both, but overrride the `setState` functionality
        const [state, setStateP] = l(initialState);
        const ref = s(state);
        // Hijack the normal setter function 
        // to also set our ref to the new value
        const setState = A$1(value => {
            if (typeof value === "function") {
                let callback = value;
                setStateP(prevValue => {
                    let nextValue = callback(prevValue);
                    ref.current = nextValue;
                    return nextValue;
                });
            }
            else {
                ref.current = value;
                setStateP(value);
            }
        }, []);
        const getState = () => { return ref.current; };
        console.assert(ref.current === state);
        return [state, setState, getState];
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

    const Unset = Symbol("unset");
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
        const ref = s(Unset);
        _(ref, () => value);
        return A$1(() => {
            if (ref.current === Unset) {
                throw new Error('Value retrieved from useStableGetter() cannot be called from useLayoutEffect().');
            }
            return ref.current;
        }, []);
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
            return currentCallbackGetter()(...args);
        }, []);
    }

    function useElementSize({ observeBox, setSize }) {
        const { element, getElement, useRefElementProps } = useRefElement();
        const stableSetSize = useStableCallback(setSize);
        y(() => {
            if (element) {
                const handleUpdate = () => {
                    const { clientWidth, scrollWidth, offsetWidth, clientHeight, scrollHeight, offsetHeight, clientLeft, scrollLeft, offsetLeft, clientTop, scrollTop, offsetTop } = element;
                    stableSetSize({ clientWidth, scrollWidth, offsetWidth, clientHeight, scrollHeight, offsetHeight, clientLeft, scrollLeft, offsetLeft, clientTop, scrollTop, offsetTop });
                };
                if (!("ResizeObserver" in window)) {
                    document.addEventListener("resize", handleUpdate, { passive: true });
                    return () => document.removeEventListener("resize", handleUpdate);
                }
                else {
                    const observer = new ResizeObserver((entries) => { handleUpdate(); });
                    observer.observe(element, { box: observeBox });
                    return () => observer.disconnect();
                }
            }
        }, [element, observeBox]);
        return {
            element,
            getElement,
            useElementSizeProps: useRefElementProps
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
        // TODO: There's no way to refresh which writing mode we have once mounted.
        // If the writing mode changes, the whole component needs to 
        // mount/unmount because (more-or-less in order of importance)
        //   A. There's no way to watch for CSS style changes
        //   B. Calling getComputedStyle after every render for every element gets expensive fast and
        //   C. Is not necessary for 99% of use cases that will never switch writing-mode within a single component
        //      (Those that do will need to mount and unmount the component that uses it)
        //
        // Maybe there could be a context object that can be used to remotely update all components that use this hook?
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
        }, [element]);
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
            const ret = effect(prevInputs.current, changes);
            prevInputs.current = inputs;
            return ret;
        };
        h(effect2, inputs);
    }

    function useTimeout({ timeout, callback, triggerIndex }) {
        const stableCallback = useStableCallback(() => { startTimeRef.current = null; callback(); });
        const getTimeout = useStableGetter(timeout);
        // Set any time we start timeout.
        // Unset any time the timeout completes
        const startTimeRef = s(null);
        const timeoutIsNull = (timeout == null);
        // Any time the triggerIndex changes (including on mount)
        // restart the timeout.  The timeout does NOT reset
        // when the duration or callback changes, only triggerIndex.
        y(() => {
            let timeout = getTimeout();
            console.assert(timeoutIsNull == (timeout == null));
            if (timeout != null) {
                startTimeRef.current = +(new Date());
                const handle = setTimeout(stableCallback, timeout);
                return () => clearTimeout(handle);
            }
        }, [triggerIndex, timeoutIsNull]);
        const getElapsedTime = A$1(() => {
            return (+(new Date())) - (+(startTimeRef.current ?? new Date()));
        }, []);
        const getRemainingTime = A$1(() => {
            const timeout = getTimeout();
            return timeout == null ? null : Math.max(0, timeout - getElapsedTime());
        }, []);
        return { getElapsedTime, getRemainingTime };
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
            // 
            const [currentType, setCurrentType] = useState(null);
            // If we're set to use a debounce, then when the timeout finishes,
            // the promise from this state object is transferred over to either 
            // the current promise or the pending promise.
            const [debouncedPromiseStarter, setDebouncedPromiseStarter, getDebouncedPromiseStarter] = useState(null);
            // When we want to start a new promise, we won't allow it to start if one is still running.
            // In that case, we store the promise (or rather, a way to start the promise) in state.
            const [pendingPromiseStarter, setPendingPromiseStarter, getPendingPromiseStarter] = useState(null);
            // We need to differentiate between `undefined` and "no error has been thrown".
            const [error, setError, getError] = useState(undefined);
            const [hasError, setHasError, getHasError] = useState(false);
            // Same thing, we need to differentiate between "nothing captured yet" and "`undefined` was captured"
            const [currentCapture, setCurrentCapture, getCurrentCapture] = useState(undefined);
            const [hasCapture, setHasCapture] = useState(false);
            // When the debounce timer is up (or we manually request the debounce to end)
            // run the normal "please consider running this promise" routine that we would
            // have just run immediately if we weren't debouncing our promises.
            const onDebounceTimeUp = A$1(() => {
                const debouncedPromiseStarter = getDebouncedPromiseStarter();
                if (debouncedPromiseStarter)
                    wantToStartANewPromise(debouncedPromiseStarter);
                setDebouncedPromiseStarter(null);
            }, [wantToStartANewPromise, setDebouncedPromiseStarter]);
            // Handle the debounce. Logically this happens before the main step as a sort of step 0.
            // Resets the timeout any time the handler was requested to be called again
            // and when it finishes, actually call the handler (or set it as the pending promise)
            useTimeout({
                timeout: debounce ?? null,
                callback: onDebounceTimeUp,
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
                let startPromiseWithBoilerplate = () => {
                    // When it starts, notify the caller
                    setRunCount(r => ++r);
                    // When it completes, notify the caller
                    // When it fails, save the error and notify the caller
                    // When it settles, reset our state so we can run a pending promise if it exists
                    const onThen = () => { setResolveCount(c => ++c); };
                    const onCatch = (ex) => { setError(ex); setHasError(true); setRejectCount(c => ++c); };
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
                            setCurrentType("sync");
                            return;
                        }
                        console.assert("then" in result);
                    }
                    catch (ex) {
                        // It's synchronous (or asynchronous but didn't await anything yet) and threw an error.
                        // Bail out early.
                        onCatch(ex);
                        onFinally();
                        setCurrentType("sync");
                        return;
                    }
                    // The handler is asynchronous
                    setCurrentType("async");
                    return (async () => { await result; })().then(onThen).catch(onCatch).finally(onFinally);
                };
                if (!alreadyRunningPromise) {
                    // Start the promise immediately, because there wasn't one running already.
                    let nextPromise = startPromiseWithBoilerplate();
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
                    setPendingPromiseStarter(_ => startPromiseWithBoilerplate);
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
                currentType,
                flushDebouncedPromise: onDebounceTimeUp,
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
     * When used in tandem with `useRovingTabIndex`, allows control of
     * the tabbable index with the arrow keys.
     *
     * @see useListNavigation, which packages everything up together.
     */
    function useLinearNavigation({ index, navigateToFirst, navigateToLast, navigateToNext, navigateToPrev, managedChildren, navigationDirection, disableArrowKeys, disableHomeEndKeys }) {
        navigationDirection ??= "either";
        const childCount = managedChildren.length;
        // Make sure the tabbable index never escapes the bounds of all available children
        // TODO: Keep track of the original index and keep it, at least until keyboard navigation.
        useLayoutEffect(() => {
            if (index !== null) {
                if (index < 0) {
                    navigateToFirst();
                }
                else if (childCount > 0 && index >= childCount) {
                    navigateToLast();
                }
            }
        }, [index, childCount, navigateToFirst, navigateToLast]);
        // These allow us to manipulate what our current tabbable child is.
        /*const navigateToIndex = useCallback((index: number) => { setIndex(index < 0 ? (managedChildren.length + index) : index); }, []);
        const navigateToNext = useCallback(() => { setIndex((i: number | null) => i === null? null! : i >= managedChildren.length - 1? managedChildren.length - 1 : ++i); }, []);
        const navigateToPrev = useCallback(() => { setIndex((i: number | null) => i === null? null! : i < 0? 0 : --i); }, []);
        const navigateToStart = useCallback(() => { navigateToIndex(0); }, [navigateToIndex]);
        const navigateToEnd = useCallback(() => { navigateToIndex(-1); }, [navigateToIndex]);*/
        const useLinearNavigationChild = A$1(() => {
            const { useRefElementProps, element } = useRefElement();
            // Prefer the parent element's direction so that we're not calling getComputedStyle
            // on every single individual child, which is likely redundant.
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
                            const directionAllowed = (!disableArrowKeys && (info?.blockOrientation === "vertical" ? allowsBlockNavigation : allowsInlineNavigation));
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
                            const directionAllowed = (!disableArrowKeys && (info?.blockOrientation === "vertical" ? allowsBlockNavigation : allowsInlineNavigation));
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
                            const directionAllowed = (!disableArrowKeys && (info?.inlineOrientation === "horizontal" ? allowsInlineNavigation : allowsBlockNavigation));
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
                            const directionAllowed = (!disableArrowKeys && (info?.inlineOrientation === "horizontal" ? allowsInlineNavigation : allowsBlockNavigation));
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
                            if (!disableHomeEndKeys) {
                                navigateToFirst();
                                e.preventDefault();
                                e.stopPropagation();
                            }
                            break;
                        case "End":
                            if (!disableHomeEndKeys) {
                                navigateToLast();
                                e.preventDefault();
                                e.stopPropagation();
                            }
                            break;
                    }
                };
                return useRefElementProps(useMergedProps()({ onKeyDown }, props));
            };
            return {
                useLinearNavigationChildProps
            };
        }, [navigationDirection, navigateToNext, navigateToPrev, navigateToFirst, navigateToLast, !!disableArrowKeys, !!disableHomeEndKeys]);
        return {
            useLinearNavigationChild,
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
        const deletedIndices = s(new Set());
        // Used to keep track of indices that have "over-mounted" and by how much.
        // We need this so that we don't erase saved information when a component
        // "overmounts" over another which then, correctly, switches *itself* to something else.
        // In general, this should only happen when components are swapping between indices.
        // By the time they're done, this map should be all 0s again, at which point
        // it's okay to actually run the unmount code.
        // 
        // TODO: throw a console.assert somewhere to make up for the lost 
        // "are you sure you want to overwrite this child's index!" assertion.
        // Namely, is this map all 0s when the parent element re-renders? 
        // Probably not because of setChildUpdateIndex
        const overmountCount = s(new Map());
        const getMountIndex = A$1((index) => { return mountOrder.current.get(index); }, []);
        const useManagedChild = A$1((info) => {
            const { element, getElement, useRefElementProps } = useRefElement();
            useLayoutEffect(() => {
                let index = getTotalChildrenMounted();
                mountOrder.current.set(info.index, index);
                mountedChildren.current[index] = info;
                setTotalChildrenMounted(t => ++t);
                return () => {
                    mountOrder.current.delete(info.index);
                    mountedChildren.current[index] = null;
                    setTotalChildrenUnounted(t => ++t);
                };
            }, [info.index]);
            // As soon as the component mounts, notify the parent and request a rerender.
            useLayoutEffect(([prevElement, prevIndex], changes) => {
                if (element) {
                    indicesByElement.current.set(element, info.index);
                    deletedIndices.current.delete(info.index);
                    if (managedChildren.current[info.index] != undefined) {
                        overmountCount.current.set(info.index, (overmountCount.current.get(info.index) ?? 0) + 1);
                    }
                    setChildUpdateIndex(c => ++c);
                    managedChildren.current[info.index] = { ...info };
                    return () => {
                        setChildUpdateIndex(c => ++c);
                        if ((overmountCount.current.get(info.index) ?? 0) > 0) {
                            overmountCount.current.set(info.index, (overmountCount.current.get(info.index) ?? 0) - 1);
                        }
                        else {
                            delete managedChildren.current[info.index];
                            deletedIndices.current.add(info.index);
                            if (typeof info.index === "number") {
                                while (managedChildren.current.length && managedChildren.current[managedChildren.current.length - 1] === undefined)
                                    managedChildren.current.length -= 1;
                            }
                            indicesByElement.current.delete(element);
                        }
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
            getMountIndex,
            deletedIndices: deletedIndices.current
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
     * @param useEffect Which version of useEffect to use. Default is `useLayoutEffect`.
     */
    function useChildFlag(activatedIndex, length, setFlag, useEffect = useLayoutEffect) {
        const [prevActivatedIndex, setPrevActivatedIndex, getPrevActivatedIndex] = useState(null);
        const [prevChildCount, setPrevChildCount, getPrevChildCount] = useState(length);
        // Any time the number of components changes,
        // reset any initial, possibly incorrect state they might have had, just in case.
        useEffect(() => {
            const direction = Math.sign(length - getPrevChildCount());
            if (direction !== 0) {
                for (let i = getPrevChildCount() ?? 0; i != length; i += direction) {
                    setFlag(i, i === activatedIndex);
                }
                setPrevChildCount(length);
            }
            const prevActivatedIndex = getPrevActivatedIndex();
            if (prevActivatedIndex != null && length > 0 && prevActivatedIndex >= length) {
                // The number of children shrank below whatever the currently selected component was.
                // Change the index to the last one still mounted.
                setFlag(length - 1, true);
                // (No need to unset any of them since they already unmounted themselves)
                // (Also no way to unset them anyway for the same reason)
            }
        }, [setFlag, activatedIndex, length]);
        useEffect(() => {
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
            const ret = effect(prevInputs.current, changes);
            prevInputs.current = inputs;
            return ret;
        };
        y(effect2, inputs);
    }

    /**
     * Returns a function that will, when called, force the component
     * that uses this hook to re-render itself.
     *
     * It's a bit smelly, so best to use sparingly.
     */
    function useForceUpdate() {
        const [, set] = l(0);
        return s(() => set(i => ++i)).current;
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
    function useRovingTabIndex({ shouldFocusOnChange: foc, tabbableIndex }) {
        const [rerenderAndFocus, setRerenderAndFocus] = useState(null);
        const getShouldFocusOnChange = useStableGetter(foc);
        useStableGetter(tabbableIndex);
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
            const [tabbable, setTabbable] = useState(null);
            y(() => {
                if (element && tabbable) {
                    setRerenderAndFocus(_ => rerenderAndFocus);
                    const shouldFocusOnChange = getShouldFocusOnChange();
                    if (shouldFocusOnChange() && "focus" in element) {
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

    function identity$1(t) { return t; }
    function tryNavigateToIndex(managedCells, initial, target, searchDirection, indexMangler, indexDemangler) {
        function helper() {
            if (searchDirection === -1) {
                while (target >= 0 && (managedCells[target] == null || !!managedCells[target]?.hidden))
                    target = indexMangler(indexDemangler(target) - 1);
                return target < 0 ? initial : target;
            }
            else if (searchDirection === 1) {
                while (target < managedCells.length && managedCells[target] == null || !!managedCells[target]?.hidden)
                    target = indexMangler(indexDemangler(target) + 1);
                return target >= managedCells.length ? initial : target;
            }
            else {
                return initial;
            }
        }
        return (helper());
    }
    function useGridNavigation({ shouldFocusOnChange, indexMangler, indexDemangler }) {
        indexMangler ??= identity$1;
        indexDemangler ??= identity$1;
        const getFocusCellOnRowChange = useStableCallback(shouldFocusOnChange);
        // Keep track of our currently tabbable row and column.
        // These are mangled, and so relative to the DOM order, not component order.
        // Any operations done on these numbers need to be demangled first,
        // otherwise they'll be incorrect.
        const [currentRow, setCurrentRow2, getCurrentRow] = useState(0);
        const [currentColumn, setCurrentColumn2, getCurrentColumn] = useState(0);
        // Functions used for navigating to different rows.
        // Each row has its own useRovingTabIndex -- if it's not the 
        // current row, then all of its children are non-tabbable.
        // Otherwise, it is tabbable, with the tabbable cell being currentColumn.
        // This happens automatically when these functions are called.
        const navigateToFirstRow = A$1(() => { setCurrentRow2(c => tryNavigateToIndex(managedRows, c ?? 0, 0, 1, indexMangler, indexDemangler)); }, [indexMangler, indexDemangler]);
        const navigateToLastRow = A$1(() => { setCurrentRow2(c => tryNavigateToIndex(managedRows, c ?? 0, managedRows.length - 1, -1, indexMangler, indexDemangler)); }, [indexMangler, indexDemangler]);
        const navigateToPrevRow = A$1(() => { setCurrentRow2(c => { return tryNavigateToIndex(managedRows, c ?? 0, indexMangler(Math.max(0, indexDemangler(c ?? 0) - 1)), -1, indexMangler, indexDemangler); }); }, [indexMangler, indexDemangler]);
        const navigateToNextRow = A$1(() => { setCurrentRow2(c => { return tryNavigateToIndex(managedRows, c ?? 0, indexMangler(Math.min((managedRows.length - 1), indexDemangler(c ?? 0) + 1)), 1, indexMangler, indexDemangler); }); }, [indexMangler, indexDemangler]);
        // Track child rows and manage keyboard navigation among them.
        const { childCount, managedChildren: managedRows, indicesByElement: rowIndicesByElement, getMountIndex: getRowMountIndex, mountedChildren: mountedRows, totalChildrenMounted: totalRowsMounted, totalChildrenUnounted: totalRowsUnmounted, useManagedChild: useManagedRow } = useChildManager();
        const { useLinearNavigationChild: useLinearNavigationChildRow } = useLinearNavigation({
            managedChildren: managedRows,
            index: indexMangler(getCurrentRow() ?? 0),
            navigateToFirst: navigateToFirstRow,
            navigateToLast: navigateToLastRow,
            navigateToNext: navigateToNextRow,
            navigateToPrev: navigateToPrevRow,
            navigationDirection: "block"
        });
        // Actually handle notifying the relevant rows when they
        // change from untabbable to tabbable or vice-versa.
        useChildFlag(currentRow, managedRows.length, A$1((index, tabbable) => { managedRows[index]?.setIsTabbableRow(tabbable); }, [managedRows]), useEffect);
        /**
         * Optional, but provides typeahead for each column in the table.
         */
        const useGridNavigationColumn = A$1(({}) => {
            const { currentTypeahead, invalidTypeahead, useTypeaheadNavigationChild } = useTypeaheadNavigation({ getIndex: getCurrentRow, setIndex: setCurrentRow2 });
            const useGridNavigationColumnChild = A$1(({ index: rowIndex, text, hidden }) => {
                useTypeaheadNavigationChild({ index: rowIndex, text: hidden ? null : text });
            }, [useTypeaheadNavigationChild]);
            return { useGridNavigationColumnChild, currentTypeahead, invalidTypeahead };
        }, []);
        // Last thing before we return -- here's the hook for individual rows and their cells.
        const useGridNavigationRow = A$1(({ index: rowIndex, hidden, ...info }) => {
            // When we change the current column, we send that information
            // to the parent via setState, but that doesn't do anything
            // for us.  The parent doesn't ever manage rows' cells for them.
            // 
            // So to get us to also update alongside the parent,
            // we just use forceUpdate.
            // We could also keep a copy of, like, "what this row thinks
            // the current column is" that *should* always be kept in-
            // sync with "getCurrentColumn()" as a state variable,
            // but it *just* being used for that is arguably *more* confusing.
            //
            // Basically, information regarding the currently selected column
            // "belongs" to *both* this row and the parent, conceptually,
            // but for cleanliness' sake, just one of them gets it,
            // and the other is manually updated whenever it changes.
            const forceUpdate = useForceUpdate();
            // "Shortcut" for any given row to know that it should or should not
            // consider one of its cells tabbable.  Also used to determine
            // if a change to the current selected cell should also
            // trigger focusing that cell.
            const [isTabbableRow, setIsTabbableRow] = useState(false);
            // If we're not the tabbable row, then for the purposes of tabIndex
            // calculations, we don't have a tabbable child cell.
            let currentColumn = isTabbableRow ? getCurrentColumn() : null;
            // Track child cells and manage keyboard navigation among them.
            const { managedChildren: managedCells, useRovingTabIndexChild: useRovingTabIndexCell, childCount: cellCount } = useRovingTabIndex({
                shouldFocusOnChange: getFocusCellOnRowChange,
                tabbableIndex: currentColumn
            });
            // More navigation stuff
            const navigateToFirstColumn = A$1(() => {
                setCurrentColumn2(tryNavigateToIndex(managedCells, 0, 0, 1, identity$1, identity$1));
                forceUpdate();
            }, []);
            const navigateToLastColumn = A$1(() => { setCurrentColumn2(tryNavigateToIndex(managedCells, managedCells.length, managedCells.length, -1, identity$1, identity$1)); forceUpdate(); }, []);
            const navigateToPrevColumn = A$1(() => {
                setCurrentColumn2(c => {
                    return tryNavigateToIndex(managedCells, c, c - 1, -1, identity$1, identity$1);
                });
                forceUpdate();
            }, []);
            const navigateToNextColumn = A$1(() => {
                setCurrentColumn2(c => {
                    return tryNavigateToIndex(managedCells, c, c + 1, 1, identity$1, identity$1);
                });
                forceUpdate();
            }, []);
            const { useLinearNavigationChild: useLinearNavigationChildCell } = useLinearNavigation({
                managedChildren: managedCells,
                navigationDirection: "inline",
                index: currentColumn ?? 0,
                disableHomeEndKeys: true,
                navigateToFirst: navigateToFirstColumn,
                navigateToLast: navigateToLastColumn,
                navigateToPrev: navigateToPrevColumn,
                navigateToNext: navigateToNextColumn
            });
            // Notify the relevant child cells when they should/should not be tabbable
            useChildFlag(currentColumn, managedCells.length, A$1((cellIndex, cellIsTabbable) => {
                if (cellIndex != null)
                    managedCells[cellIndex]?.setTabbable(cellIsTabbable);
            }, [managedCells]), useEffect);
            // Any time we become the currently tabbable row,
            // make sure that we're in a valid cell, and shift left/right if not to find one.
            // TODO: Seems kinda janky? Is there no cleaner way to accomplish this,
            // especially since it's similar to other code?
            useEffect(() => {
                if (isTabbableRow) {
                    let cellIndex = getCurrentColumn();
                    while (cellIndex >= 0 && managedCells[cellIndex] == null) {
                        --cellIndex;
                    }
                    if (cellIndex < 0) {
                        cellIndex = getCurrentColumn();
                        while (cellIndex < managedCells.length && managedCells[cellIndex] == null) {
                            ++cellIndex;
                        }
                        if (cellIndex == managedCells.length)
                            cellIndex = getCurrentColumn();
                    }
                    if (cellIndex != getCurrentColumn())
                        setCurrentColumn2(cellIndex);
                }
            }, [isTabbableRow]);
            const { useManagedChildProps: useManagedRowProps } = useManagedRow({
                index: rowIndex,
                setIsTabbableRow,
                hidden,
                ...info
            });
            const { useLinearNavigationChildProps: useLinearNavigationChildRowProps } = useLinearNavigationChildRow();
            const useGridNavigationRowProps = A$1((props) => useManagedRowProps(useLinearNavigationChildRowProps(useMergedProps()({ hidden: !!hidden, "data-index": rowIndex }, props))), [useManagedRowProps, !!hidden]);
            const getRowIndex = useStableGetter(rowIndex);
            const useGridNavigationCell = A$1((info) => {
                const [tabbable, setTabbable] = useState(false);
                const { useRovingTabIndexChildProps } = useRovingTabIndexCell({ ...info, setTabbable });
                const { useLinearNavigationChildProps: useLinearNavigationChildCellProps } = useLinearNavigationChildCell();
                // Any time we interact with this cell, set it to be
                // our "currently tabbable" cell, regardless of
                // any previously selected row/column.
                //
                // TODO: Mouseup/down might be preferable,
                // but it doesn't fire on label elements here?????
                const onClick = A$1(() => {
                    setCurrentRow2(getRowIndex());
                    setCurrentColumn2(info.index);
                }, [info.index]);
                const useGridNavigationCellProps = A$1((props) => useRovingTabIndexChildProps(useLinearNavigationChildCellProps(useMergedProps()({ onClick }, props))), [useLinearNavigationChildCellProps]);
                return { tabbable, useGridNavigationCellProps };
            }, [useLinearNavigationChildCell]);
            return {
                currentColumn,
                useGridNavigationRowProps,
                useGridNavigationCell,
                cellCount,
                isTabbableRow,
                managedCells: managedCells
            };
        }, [useLinearNavigationChildRow, useManagedRow, indexDemangler, indexMangler]);
        return {
            useGridNavigationRow,
            useGridNavigationColumn,
            rowCount: childCount,
            cellIndex: currentColumn,
            rowIndex: currentRow,
            managedRows
        };
    }

    function useAnimationFrame({ callback }) {
        // Get a wrapper around the given callback that's stable
        const stableCallback = useStableCallback(callback ?? (() => { }));
        const hasCallback = (callback != null);
        y(() => {
            if (hasCallback) {
                // Get a wrapper around the wrapper around the callback
                // that also calls `requestAnimationFrame` again.
                const rafCallback = (ms) => {
                    handle = requestAnimationFrame(rafCallback);
                    stableCallback(ms);
                };
                let handle = requestAnimationFrame(rafCallback);
                return () => cancelAnimationFrame(handle);
            }
        }, [hasCallback]);
    }

    function useDraggable({ effectAllowed, data, dragImage, dragImageXOffset, dragImageYOffset }) {
        const [dragging, setDragging, getDragging] = useState(false);
        const [lastDropEffect, setLastDropEffect, getLastDropEffect] = useState(null);
        const useDraggableProps = A$1((p) => {
            const ref = s(null);
            const { element, useRefElementProps } = useRefElement();
            const onDragStart = (e) => {
                //e.preventDefault();
                setDragging(true);
                if (e.dataTransfer) {
                    e.dataTransfer.effectAllowed = (effectAllowed ?? "all");
                    if (dragImage)
                        e.dataTransfer.setDragImage(dragImage, dragImageXOffset ?? 0, dragImageYOffset ?? 0);
                    let entries = Object.entries(data);
                    for (const [mimeType, data] of entries) {
                        e.dataTransfer.setData(mimeType, data);
                    }
                }
            };
            const onDragEnd = (e) => {
                e.preventDefault();
                setDragging(false);
                if (e.dataTransfer) {
                    if (e.dataTransfer.dropEffect != "none") {
                        setLastDropEffect(e.dataTransfer.dropEffect);
                    }
                    else {
                        setLastDropEffect(null);
                    }
                }
            };
            return useMergedProps()(useRefElementProps({
                draggable: true,
                onDragStart,
                onDragEnd,
                ref
            }), p);
        }, [effectAllowed, dragImage, dragImageXOffset, dragImageYOffset, ...Object.entries(data).flat()]);
        // Return both the element and the hook that modifies 
        // the props and allows us to actually find the element
        let ret = {
            useDraggableProps,
            dragging,
            getDragging,
            // Set once a drag has completed with the resulting action
            // Useful for removing the element afterwards if it was "move"
            lastDropEffect,
            /**
             * Test
             */
            getLastDropEffect
        };
        return ret;
    }

    class DroppableFileError extends Error {
        fileName;
        errorType;
        constructor(fileName, base) {
            super(base?.message ?? "An unspecified error occurred reading the file.");
            this.fileName = fileName;
            this.errorType = base?.name;
        }
    }
    //MergedProps<UseRefElementPropsReturnType<E, Pick<h.JSX.HTMLAttributes<E>, "onDragEnter" | "onDragLeave" | "onDragOver" | "onDrop">>, P>;
    function useDroppable({ effect }) {
        const [filesForConsideration, setFilesForConsideration] = useState(null);
        const [stringsForConsideration, setStringsForConsideration] = useState(null);
        const [droppedFiles, setDroppedFiles] = useState(null);
        const [droppedStrings, setDroppedStrings] = useState(null);
        const [dropError, setDropError] = useState(undefined);
        // All the promises generated from the drop events.
        // Used to process multiple drop events in succession
        const dropPromisesRef = s([]);
        const [currentPromiseIndex, setCurrentPromiseIndex, getCurrentPromiseIndex] = useState(-1);
        const [promiseCount, setPromiseCount, getPromiseCount] = useState(0);
        const { element, useRefElementProps, getElement } = useRefElement();
        // Any time we add a new promise, if there's no current promise running, we need to start one.
        // If there is one, then we don't need to do anything, since it runs the same check.
        y(() => {
            const currentPromiseIndex = getCurrentPromiseIndex();
            const promiseCount = getPromiseCount();
            if (promiseCount > 0) {
                if ((currentPromiseIndex + 1) < promiseCount) {
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
        y(() => {
            if (currentPromiseIndex >= 0) {
                const currentPromise = dropPromisesRef.current[currentPromiseIndex];
                currentPromise.then((info) => {
                    if (info !== null) {
                        const { files, strings } = info;
                        setDroppedFiles(files);
                        setDroppedStrings(strings);
                    }
                    // Now that we're done, are there more promises in the queue?
                    const currentPromiseIndex = getCurrentPromiseIndex();
                    const promiseCount = getPromiseCount();
                    if ((currentPromiseIndex + 1) < promiseCount) {
                        // Since this promise has started, more have been added.
                        // Run this effect again.
                        setCurrentPromiseIndex(i => ++i);
                    }
                });
            }
        }, [currentPromiseIndex]);
        const useDroppableProps = (p) => {
            //const ref = useRef<E>(null);
            // Handle collecting the current file metadata or MIME types.
            const onDragEnter = (e) => {
                e.preventDefault();
                if (e.dataTransfer) {
                    // Is there a default? I can't find one anywhere.
                    e.dataTransfer.dropEffect = (effect ?? "move");
                    const newMimeTypes = new Set();
                    const newFiles = new Array();
                    for (let item of e.dataTransfer?.items ?? []) {
                        const { kind, type } = item;
                        if (kind === "string") {
                            newMimeTypes.add(type);
                        }
                        else if (kind === "file") {
                            newFiles.push({ type: item.type });
                        }
                    }
                    setFilesForConsideration(newFiles);
                    setStringsForConsideration(newMimeTypes);
                }
            };
            // Handle resetting the current file metadata or MIME types
            const onDragLeave = (e) => {
                e.preventDefault();
                setFilesForConsideration(null);
                setStringsForConsideration(null);
            };
            // Boilerplate, I guess
            const onDragOver = (e) => {
                e.preventDefault();
            };
            // Handle getting the drop data asynchronously
            const onDrop = (e) => {
                e.preventDefault();
                setFilesForConsideration(null);
                setStringsForConsideration(null);
                let allPromises = new Array();
                const dropData = {};
                const dropFile = [];
                for (let item of e.dataTransfer?.items ?? []) {
                    const { kind, type } = item;
                    if (kind === "string") {
                        allPromises.push((new Promise((resolve, reject) => item.getAsString(resolve))).then(str => dropData[type] = str));
                    }
                    else if (kind === "file") {
                        const file = item.getAsFile();
                        if (file) {
                            allPromises.push(new Promise((resolve, reject) => {
                                let reader = new FileReader();
                                reader.onload = (e) => {
                                    resolve();
                                    const data = reader.result;
                                    dropFile.push({ data, name: file.name, type: file.type, size: data.byteLength, lastModified: file.lastModified });
                                };
                                reader.onerror = (e) => { reject(new DroppableFileError(file.name, reader.error)); };
                                reader.onabort = (e) => { reject(new DroppableFileError(file.name, reader.error)); };
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
                    debugger; // Intentional
                    setPromiseCount(i => ++i);
                    setDropError(ex);
                    return null;
                }));
            };
            return useMergedProps()(useRefElementProps({ onDragEnter, onDragLeave, onDragOver, onDrop }), p);
        };
        return {
            useDroppableProps,
            filesForConsideration,
            stringsForConsideration,
            droppedFiles,
            droppedStrings,
            dropError,
            element,
            getElement
        };
    }

    const activeElementUpdaters = new Set();
    const lastActiveElementUpdaters = new Set();
    const windowFocusedUpdaters = new Set();
    function focusout(e) {
        if (e.relatedTarget == null) {
            for (let f of activeElementUpdaters)
                f?.(null);
        }
    }
    function focusin(e) {
        let currentlyFocusedElement = e.target;
        let lastFocusedElement = e.target;
        activeElementUpdaters.forEach(f => f?.(currentlyFocusedElement));
        lastActiveElementUpdaters.forEach(f => f?.(lastFocusedElement));
    }
    function windowFocus() {
        windowFocusedUpdaters.forEach(f => f?.(true));
    }
    function windowBlur() {
        windowFocusedUpdaters.forEach(f => f?.(false));
    }
    function useActiveElement({ setActiveElement, setLastActiveElement, setWindowFocused }) {
        const stableSetActiveElement = useStableCallback(setActiveElement ?? (() => { }));
        const stableSetLastActiveElement = useStableCallback(setLastActiveElement ?? (() => { }));
        const stableSetWindowFocused = useStableCallback(setWindowFocused ?? (() => { }));
        h(() => {
            if (activeElementUpdaters.size === 0) {
                document.addEventListener("focusin", focusin, { passive: true });
                document.addEventListener("focusout", focusout, { passive: true });
                window.addEventListener("focus", windowFocus, { passive: true });
                window.addEventListener("blur", windowBlur, { passive: true });
            }
            // Add them even if they're undefined to more easily
            // manage the ">0 means don't add handlers" logic.
            activeElementUpdaters.add(stableSetActiveElement);
            lastActiveElementUpdaters.add(stableSetLastActiveElement);
            windowFocusedUpdaters.add(stableSetWindowFocused);
            return () => {
                activeElementUpdaters.delete(stableSetActiveElement);
                lastActiveElementUpdaters.delete(stableSetLastActiveElement);
                windowFocusedUpdaters.delete(stableSetWindowFocused);
                if (activeElementUpdaters.size === 0) {
                    document.removeEventListener("focusin", focusin);
                    document.removeEventListener("focusout", focusout);
                    window.removeEventListener("focus", windowFocus);
                    window.removeEventListener("blur", windowBlur);
                }
            };
        }, []);
    }

    function useHasFocus({ setFocused, setFocusedInner, setLastFocused, setLastFocusedInner }) {
        const { element, getElement, useRefElementProps } = useRefElement();
        const setActiveElement = A$1((node) => {
            setFocused?.(element == node && element != null);
            setFocusedInner?.(!!element?.contains(node));
        }, [setFocused, setFocusedInner, element]);
        const setLastActiveElement = A$1((node) => {
            setLastFocused?.(element == node && element != null);
            setLastFocusedInner?.(!!element?.contains(node));
        }, [setLastFocused, setLastFocusedInner, element]);
        useActiveElement({ setActiveElement, setLastActiveElement });
        const useHasFocusProps = A$1((props) => { return useRefElementProps(props); }, [useRefElementProps]);
        return { useHasFocusProps, element, getElement };
    }

    function useInterval({ interval, callback }) {
        // Get a wrapper around the given callback that's stable
        const stableCallback = useStableCallback(callback);
        const getInterval = useStableGetter(interval);
        y(() => {
            let interval = getInterval();
            let lastDelayUsed = interval;
            if (interval == null)
                return;
            // Get a wrapper around the wrapper around the callback
            // that clears and resets the interval if it changes.
            const adjustableCallback = () => {
                stableCallback();
                const currentInterval = getInterval();
                if (currentInterval != lastDelayUsed) {
                    clearInterval(handle);
                    if (currentInterval != null)
                        handle = setInterval(adjustableCallback, lastDelayUsed = currentInterval);
                }
            };
            let handle = setInterval(adjustableCallback, interval);
            return () => clearInterval(handle);
        }, []);
    }

    function identity(t) { return t; }
    /**
     * Implements proper keyboard navigation for components like listboxes, button groups, menus, etc.
     *
     * In the document order, there will be only one "focused" or "tabbable" element, making it act more like one complete unit in comparison to everything around it.
     * Navigating forwards/backwards can be done with the arrow keys, Home/End keys, or any any text for typeahead to focus the next item that matches.
     */
    function useListNavigation({ initialIndex, shouldFocusOnChange, collator, keyNavigation, indexMangler, indexDemangler }) {
        indexMangler ??= identity;
        indexDemangler ??= identity;
        keyNavigation ??= "either";
        // Keep track of three things related to the currently tabbable element's index:
        // What it is, and whether, when we render this component and it's changed, to also focus the element that was made tabbable.
        const [tabbableIndex, setTabbableIndex, getTabbableIndex] = useState(initialIndex === undefined ? 0 : initialIndex);
        const { managedChildren, indicesByElement, useRovingTabIndexChild, focusCurrent, ...rest } = useRovingTabIndex({ shouldFocusOnChange, tabbableIndex });
        const navigateToIndex = A$1((i) => { setTabbableIndex(i); }, []);
        const navigateToFirst = A$1(() => { setTabbableIndex(indexMangler(0)); }, []);
        const navigateToLast = A$1(() => { setTabbableIndex(indexMangler(managedChildren.length - 1)); }, []);
        const navigateToPrev = A$1(() => { setTabbableIndex(i => indexMangler(indexDemangler(i ?? 0) - 1)); }, [indexDemangler, indexMangler]);
        const navigateToNext = A$1(() => { setTabbableIndex(i => indexMangler(indexDemangler(i ?? 0) + 1)); }, [indexDemangler, indexMangler]);
        const setIndex = A$1((index) => {
            setTabbableIndex(index);
        }, []);
        const { currentTypeahead, invalidTypeahead, useTypeaheadNavigationChild } = useTypeaheadNavigation({ collator, getIndex: getTabbableIndex, setIndex, typeaheadTimeout: 1000 });
        const { useLinearNavigationChild } = useLinearNavigation({ navigationDirection: keyNavigation, index: getTabbableIndex() ?? 0, managedChildren, navigateToPrev, navigateToNext, navigateToFirst, navigateToLast });
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
                tabbable
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
            navigateToFirst,
            navigateToLast,
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
        const [lastActiveElement, setLastActiveElement, getLastActiveElement] = useState(null);
        useActiveElement({ setLastActiveElement });
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

    const RandomWords$1 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.".split(" ");
    const RovingChildContext = D(null);
    const DemoUseRovingTabIndex = g(() => {
        const [lastFocusedInner, getLastFocusedInner, setLastFocusedInner] = useState(false);
        const { useHasFocusProps } = useHasFocus({ setLastFocusedInner });
        const { useListNavigationChild, currentTypeahead, setTabbableIndex, tabbableIndex } = useListNavigation({ shouldFocusOnChange: getLastFocusedInner });
        //const { useRovingTabIndexChild, useRovingTabIndexProps } = useRovingTabIndex<HTMLUListElement, RovingTabIndexChildInfo>({ tabbableIndex, focusOnChange: false });
        return (v$1("div", { className: "demo" },
            v$1("h2", null, "Keyboard & List Navigation"),
            v$1("h3", null,
                v$1("code", null, "useRovingTabIndex")),
            v$1("p", null,
                "Native HTML elements offer fantastic keyboard accessability, but cover a relatively limited number of use cases. There is no native HTML tree element, for example, that allows keyboard navigation of its items, nor is it possible to combine the keyboard navigation behavior of a ",
                v$1("code", null, "<select>"),
                " menu with the menu in a drawer component."),
            v$1("p", null,
                "When coming across a List or a Menu or a RadioGroup or a ToggleButtonGroup or any other \"one component made up of child components\", the usual expected behavior, at least natively, is that tabbing into the component is one action, and tabbing out is another.  Navigating ",
                v$1("em", null, "within"),
                " the component is done with the arrow keys or other methods."),
            v$1("p", null,
                "This is important both for accessability, but also just for general usability.  When tabbing back and forth, the ability to skip a long list without needing to trudge through ",
                v$1("em", null, "every one"),
                " of its child elements is extremely important."),
            v$1("p", null,
                v$1("code", null, "useListNavigation"),
                " wraps up the functionality of a few hooks (",
                v$1("code", null, "useRovingTabIndex"),
                ", ",
                v$1("code", null, "useLinearNavigation"),
                ", ",
                v$1("code", null, "useTypeaheadNavigation"),
                "to allow for ARIA-compliant navigation of lists and other similar components.  For more advanced use cases, you can use the other hooks individually."),
            v$1("p", null,
                v$1("code", null, "useListNavigation"),
                " (and ",
                v$1("code", null, "useRovingTabIndex"),
                ") internally use ",
                v$1("code", null, "useChildManager"),
                ", which is how the child elements and the parent communicate with each other. This means there are virtually no restrictions on how the DOM is set up as long as you can provide the children with the ",
                v$1("code", null, "useListNavigationChild"),
                " hook that's returned, usually with a simple ",
                v$1("code", null, "Context"),
                ". If the child element itself has a focusable element, like a button, it can also be wired up to disable itself Feel free to nest them too, as long as you are aware of your ",
                v$1("code", null, "Context"),
                " management (i.e. remember that you need to create a new ",
                v$1("code", null, "Context"),
                " for each use case)."),
            v$1("label", null,
                "Tabbable index: ",
                v$1("input", { type: "number", value: tabbableIndex ?? undefined, onInput: e => { e.preventDefault(); setTabbableIndex(e.currentTarget.valueAsNumber); } })),
            v$1("ul", { ...useHasFocusProps({}) },
                v$1(RovingChildContext.Provider, { value: useListNavigationChild }, Array.from((function* () {
                    for (let i = 0; i < 10; ++i) {
                        yield v$1(DemoUseRovingTabIndexChild, { index: i, key: i });
                    }
                })()))),
            currentTypeahead && v$1("div", null,
                "Typeahead: ",
                currentTypeahead)));
    });
    const DemoUseRovingTabIndexChild = g((({ index }) => {
        const [randomWord] = useState(() => RandomWords$1[index /*Math.floor(Math.random() * (RandomWords.length - 1))*/]);
        const useRovingTabIndexChild = F(RovingChildContext);
        const text = `${randomWord} This is item #${index + 1}`;
        const { useListNavigationChildProps, useListNavigationSiblingProps, tabbable } = useRovingTabIndexChild({ index, text });
        const props = useListNavigationChildProps({});
        return (v$1("li", { ...props },
            text,
            " (",
            tabbable ? "Tabbable" : "Not tabbable",
            ")",
            v$1("input", { ...useListNavigationSiblingProps({ type: "checkbox" }) })));
    }));

    const DemoUseInterval = () => {
        const [interval, setInterval] = l(1000);
        const [fireCount, setFireCount] = l(0);
        useInterval({ interval, callback: () => setFireCount(i => ++i) });
        return (v$1("div", { class: "demo" },
            v$1("label", null,
                "Interval duration: ",
                v$1("input", { type: "number", value: interval, onInput: e => setInterval(e.currentTarget.valueAsNumber) })),
            v$1("div", null,
                "The callback has been called ",
                fireCount,
                " time",
                fireCount === 1 ? "" : "s",
                ".")));
    };

    const DemoUseTimeout = () => {
        const [timeout, setTimeout] = l(1000);
        const [triggerIndex, setTriggerIndex] = l("");
        const [fireCount, setFireCount] = l(0);
        useTimeout({ timeout, triggerIndex, callback: () => setFireCount(i => ++i) });
        return (v$1("div", { class: "demo" },
            v$1("label", null,
                "Timeout duration: ",
                v$1("input", { type: "number", value: timeout, onInput: e => setTimeout(e.currentTarget.valueAsNumber) })),
            v$1("label", null,
                "Refresh key: ",
                v$1("input", { type: "text", value: triggerIndex, onInput: e => setTriggerIndex(e.currentTarget.value) })),
            v$1("div", null,
                "The callback has been called ",
                fireCount,
                " time",
                fireCount === 1 ? "" : "s",
                ".")));
    };

    const RandomWords = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.".split(" ");
    const DemoUseDroppable = () => {
        const { droppedFiles, droppedStrings, filesForConsideration, stringsForConsideration, useDroppableProps, dropError } = useDroppable({ effect: "copy" });
        useMergedProps()({}, { ref: s(null) });
        const p = useDroppableProps({ className: "demo droppable" });
        p.ref;
        return (v$1("div", { ...p },
            droppedStrings != null && v$1("div", null,
                "Data dropped: ",
                v$1("ul", null, Object.entries(droppedStrings).map(([type, value]) => v$1("li", null,
                    type,
                    ": ",
                    value)))),
            droppedFiles != null && v$1("div", null,
                "Files dropped: ",
                v$1("table", null,
                    v$1("thead", null,
                        v$1("tr", null,
                            v$1("th", null, "Name"),
                            v$1("th", null, "Size"),
                            v$1("th", null, "Type"),
                            v$1("th", null, "Last modified"))),
                    v$1("tbody", null, droppedFiles.map(f => v$1("tr", null,
                        v$1("td", null, f.name),
                        f.data.byteLength,
                        v$1("td", null, f.type),
                        v$1("td", null, new Date(f.lastModified ?? 0))))))),
            v$1("hr", null),
            stringsForConsideration != null && v$1("div", null,
                "Data being considered: ",
                v$1("ul", null, Array.from(stringsForConsideration).map(type => v$1("li", null, type)))),
            filesForConsideration != null && v$1("div", null,
                "Files being considered: ",
                v$1("ul", null, filesForConsideration.map(f => v$1("li", null, JSON.stringify(f))))),
            v$1("hr", null),
            dropError && v$1("div", null, dropError instanceof Error ? dropError.message : JSON.stringify(dropError))));
    };
    const DemoUseDraggable = () => {
        const { dragging, useDraggableProps, lastDropEffect, getLastDropEffect, getDragging } = useDraggable({ data: { "text/plain": "This is custom draggable content of type text/plain." } });
        return (v$1("div", { ...useDraggableProps({ className: "demo" }) }, "Draggable content"));
    };
    const DemoUseElementSizeAnimation = () => {
        const [height, setHeight] = useState(0);
        const [angle, setAngle] = useState(0);
        useAnimationFrame({
            callback: (ms) => {
                setAngle(a => a + 0.01);
                setHeight((Math.sin(angle) + 1) / 0.5);
            }
        });
        const [elementSize, setElementSize] = useState(null);
        const { element, useElementSizeProps } = useElementSize({ setSize: setElementSize });
        return (v$1("div", { ...useElementSizeProps({ ref: undefined, className: "demo", style: { height: `${(height * 100) + 100}px` } }) },
            v$1("pre", null, JSON.stringify(elementSize, null, 2))));
    };
    const DemoUseFocusTrap = g(({ depth }) => {
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
    const DemoUseAsyncHandler1 = g(() => {
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
    const DemoUseAsyncHandler2 = g(() => {
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
    const DemoFocus = g(() => {
        const [lastActiveElement, setLastActiveElement, getLastActiveElement] = useState(null);
        const [activeElement, setActiveElement, getActiveElement] = useState(null);
        const [windowFocused, setWindowFocused, getWindowFocused] = useState(false);
        const [focused, setFocused, getFocused] = useState(false);
        const [focusedInner, setFocusedInner, getFocusedInner] = useState(false);
        const [lastFocused, setLastFocused, getLastFocused] = useState(false);
        const [lastFdInner, setLastFocusedInner, getLastFocusedInner] = useState(false);
        useActiveElement({ setLastActiveElement, setActiveElement, setWindowFocused });
        const { useHasFocusProps } = useHasFocus({ setLastFocusedInner, setFocused, setLastFocused, setFocusedInner });
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
        const [lastFocusedInner, setLastFocusedInner, getLastFocusedInner] = useState(false);
        const { useHasFocusProps } = useHasFocus({ setLastFocusedInner });
        const { useGridNavigationRow, useGridNavigationColumn, rowCount, cellIndex, rowIndex } = useGridNavigation({ shouldFocusOnChange: getLastFocusedInner });
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
    const DemoUseGridRow = g((({ index }) => {
        useState(() => RandomWords[index /*Math.floor(Math.random() * (RandomWords.length - 1))*/]);
        const useGridRow = F(GridRowContext);
        const { isTabbableRow, cellCount, useGridNavigationRowProps, useGridNavigationCell, managedCells, currentColumn } = useGridRow({ index });
        const props = useGridNavigationRowProps({});
        return (v$1("div", { ...props },
            v$1("div", null,
                isTabbableRow.toString(),
                " (",
                currentColumn,
                "/",
                cellCount - 1,
                ")"),
            v$1("div", { style: "display: flex" },
                v$1(GridCellContext.Provider, { value: useGridNavigationCell }, Array.from((function* () {
                    for (let i = 0; i < 3; ++i) {
                        yield v$1(DemoUseGridCell, { index: i, key: i });
                    }
                })())))));
    }));
    const DemoUseGridCell = (({ index }) => {
        const useGridCell = F(GridCellContext);
        const { useGridNavigationCellProps } = useGridCell({ index });
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
            v$1(DemoUseGrid, null),
            v$1("hr", null),
            v$1(DemoFocus, null),
            v$1("hr", null),
            v$1(DemoUseTimeout, null),
            v$1("hr", null),
            v$1(DemoUseInterval, null),
            v$1("hr", null),
            v$1(DemoUseRovingTabIndex, null),
            v$1("hr", null),
            v$1(DemoUseFocusTrap, null),
            v$1("hr", null),
            v$1(DemoUseAsyncHandler1, null),
            v$1("hr", null),
            v$1(DemoUseAsyncHandler2, null),
            v$1("hr", null),
            v$1(DemoUseDroppable, null),
            v$1("hr", null),
            v$1(DemoUseDraggable, null),
            v$1("hr", null),
            v$1(DemoUseElementSizeAnimation, null),
            v$1("hr", null),
            v$1("input", null));
    };
    requestAnimationFrame(() => {
        S$1(v$1(Component, null), document.getElementById("root"));
    });

    exports.DemoUseGrid = DemoUseGrid;

    Object.defineProperty(exports, '__esModule', { value: true });

    return exports;

}({}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlcyI6WyJub2RlX21vZHVsZXMvcHJlYWN0L2Rpc3QvcHJlYWN0Lm1qcyIsIm5vZGVfbW9kdWxlcy9wcmVhY3QvaG9va3MvZGlzdC9ob29rcy5tanMiLCJub2RlX21vZHVsZXMvcHJlYWN0L2NvbXBhdC9kaXN0L2NvbXBhdC5tanMiLCIuLi91c2UtbWVyZ2VkLWNoaWxkcmVuLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2Nsc3gvZGlzdC9jbHN4Lm0uanMiLCIuLi91c2UtbWVyZ2VkLWNsYXNzZXMuanMiLCIuLi91c2UtbWVyZ2VkLXJlZnMuanMiLCIuLi91c2UtbWVyZ2VkLXN0eWxlcy5qcyIsIi4uL3VzZS1tZXJnZWQtcHJvcHMuanMiLCIuLi91c2Utc3RhdGUuanMiLCIuLi91c2UtcmVmLWVsZW1lbnQuanMiLCIuLi91c2Utc3RhYmxlLWdldHRlci5qcyIsIi4uL3VzZS1zdGFibGUtY2FsbGJhY2suanMiLCIuLi91c2UtZWxlbWVudC1zaXplLmpzIiwiLi4vdXNlLWxvZ2ljYWwtZGlyZWN0aW9uLmpzIiwiLi4vdXNlLWxheW91dC1lZmZlY3QuanMiLCIuLi91c2UtdGltZW91dC5qcyIsIi4uL3VzZS1hc3luYy1oYW5kbGVyLmpzIiwiLi4vdXNlLWtleWJvYXJkLW5hdmlnYXRpb24uanMiLCIuLi91c2UtY2hpbGQtbWFuYWdlci5qcyIsIi4uL3VzZS1lZmZlY3QuanMiLCIuLi91c2UtZm9yY2UtdXBkYXRlLmpzIiwiLi4vdXNlLXJvdmluZy10YWJpbmRleC5qcyIsIi4uL3VzZS1ncmlkLW5hdmlnYXRpb24uanMiLCIuLi91c2UtYW5pbWF0aW9uLWZyYW1lLmpzIiwiLi4vdXNlLWRyYWdnYWJsZS5qcyIsIi4uL3VzZS1kcm9wcGFibGUuanMiLCIuLi91c2UtYWN0aXZlLWVsZW1lbnQuanMiLCIuLi91c2UtaGFzLWZvY3VzLmpzIiwiLi4vdXNlLWludGVydmFsLmpzIiwiLi4vdXNlLWxpc3QtbmF2aWdhdGlvbi5qcyIsIi4uL25vZGVfbW9kdWxlcy90YWJiYWJsZS9kaXN0L2luZGV4LmVzbS5qcyIsIi4uL25vZGVfbW9kdWxlcy93aWNnLWluZXJ0L2Rpc3QvaW5lcnQuanMiLCIuLi9ub2RlX21vZHVsZXMvYmxvY2tpbmctZWxlbWVudHMvZGlzdC9ibG9ja2luZy1lbGVtZW50cy5qcyIsIi4uL3VzZS1ibG9ja2luZy1lbGVtZW50LmpzIiwiLi4vdXNlLWZvY3VzLXRyYXAuanMiLCJkZW1vcy91c2Utcm92aW5nLXRhYi1pbmRleC50c3giLCJkZW1vcy91c2UtaW50ZXJ2YWwudHN4IiwiZGVtb3MvdXNlLXRpbWVvdXQudHN4IiwiaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbInZhciBuLGwsdSxpLHQsbyxyLGYsZT17fSxjPVtdLHM9L2FjaXR8ZXgoPzpzfGd8bnxwfCQpfHJwaHxncmlkfG93c3xtbmN8bnR3fGluZVtjaF18em9vfF5vcmR8aXRlcmEvaTtmdW5jdGlvbiBhKG4sbCl7Zm9yKHZhciB1IGluIGwpblt1XT1sW3VdO3JldHVybiBufWZ1bmN0aW9uIGgobil7dmFyIGw9bi5wYXJlbnROb2RlO2wmJmwucmVtb3ZlQ2hpbGQobil9ZnVuY3Rpb24gdihsLHUsaSl7dmFyIHQsbyxyLGY9e307Zm9yKHIgaW4gdSlcImtleVwiPT1yP3Q9dVtyXTpcInJlZlwiPT1yP289dVtyXTpmW3JdPXVbcl07aWYoYXJndW1lbnRzLmxlbmd0aD4yJiYoZi5jaGlsZHJlbj1hcmd1bWVudHMubGVuZ3RoPjM/bi5jYWxsKGFyZ3VtZW50cywyKTppKSxcImZ1bmN0aW9uXCI9PXR5cGVvZiBsJiZudWxsIT1sLmRlZmF1bHRQcm9wcylmb3IociBpbiBsLmRlZmF1bHRQcm9wcyl2b2lkIDA9PT1mW3JdJiYoZltyXT1sLmRlZmF1bHRQcm9wc1tyXSk7cmV0dXJuIHkobCxmLHQsbyxudWxsKX1mdW5jdGlvbiB5KG4saSx0LG8scil7dmFyIGY9e3R5cGU6bixwcm9wczppLGtleTp0LHJlZjpvLF9fazpudWxsLF9fOm51bGwsX19iOjAsX19lOm51bGwsX19kOnZvaWQgMCxfX2M6bnVsbCxfX2g6bnVsbCxjb25zdHJ1Y3Rvcjp2b2lkIDAsX192Om51bGw9PXI/Kyt1OnJ9O3JldHVybiBudWxsIT1sLnZub2RlJiZsLnZub2RlKGYpLGZ9ZnVuY3Rpb24gcCgpe3JldHVybntjdXJyZW50Om51bGx9fWZ1bmN0aW9uIGQobil7cmV0dXJuIG4uY2hpbGRyZW59ZnVuY3Rpb24gXyhuLGwpe3RoaXMucHJvcHM9bix0aGlzLmNvbnRleHQ9bH1mdW5jdGlvbiBrKG4sbCl7aWYobnVsbD09bClyZXR1cm4gbi5fXz9rKG4uX18sbi5fXy5fX2suaW5kZXhPZihuKSsxKTpudWxsO2Zvcih2YXIgdTtsPG4uX19rLmxlbmd0aDtsKyspaWYobnVsbCE9KHU9bi5fX2tbbF0pJiZudWxsIT11Ll9fZSlyZXR1cm4gdS5fX2U7cmV0dXJuXCJmdW5jdGlvblwiPT10eXBlb2Ygbi50eXBlP2sobik6bnVsbH1mdW5jdGlvbiBiKG4pe3ZhciBsLHU7aWYobnVsbCE9KG49bi5fXykmJm51bGwhPW4uX19jKXtmb3Iobi5fX2U9bi5fX2MuYmFzZT1udWxsLGw9MDtsPG4uX19rLmxlbmd0aDtsKyspaWYobnVsbCE9KHU9bi5fX2tbbF0pJiZudWxsIT11Ll9fZSl7bi5fX2U9bi5fX2MuYmFzZT11Ll9fZTticmVha31yZXR1cm4gYihuKX19ZnVuY3Rpb24gbShuKXsoIW4uX19kJiYobi5fX2Q9ITApJiZ0LnB1c2gobikmJiFnLl9fcisrfHxyIT09bC5kZWJvdW5jZVJlbmRlcmluZykmJigocj1sLmRlYm91bmNlUmVuZGVyaW5nKXx8bykoZyl9ZnVuY3Rpb24gZygpe2Zvcih2YXIgbjtnLl9fcj10Lmxlbmd0aDspbj10LnNvcnQoZnVuY3Rpb24obixsKXtyZXR1cm4gbi5fX3YuX19iLWwuX192Ll9fYn0pLHQ9W10sbi5zb21lKGZ1bmN0aW9uKG4pe3ZhciBsLHUsaSx0LG8scjtuLl9fZCYmKG89KHQ9KGw9bikuX192KS5fX2UsKHI9bC5fX1ApJiYodT1bXSwoaT1hKHt9LHQpKS5fX3Y9dC5fX3YrMSxqKHIsdCxpLGwuX19uLHZvaWQgMCE9PXIub3duZXJTVkdFbGVtZW50LG51bGwhPXQuX19oP1tvXTpudWxsLHUsbnVsbD09bz9rKHQpOm8sdC5fX2gpLHoodSx0KSx0Ll9fZSE9byYmYih0KSkpfSl9ZnVuY3Rpb24gdyhuLGwsdSxpLHQsbyxyLGYscyxhKXt2YXIgaCx2LHAsXyxiLG0sZyx3PWkmJmkuX19rfHxjLEE9dy5sZW5ndGg7Zm9yKHUuX19rPVtdLGg9MDtoPGwubGVuZ3RoO2grKylpZihudWxsIT0oXz11Ll9fa1toXT1udWxsPT0oXz1sW2hdKXx8XCJib29sZWFuXCI9PXR5cGVvZiBfP251bGw6XCJzdHJpbmdcIj09dHlwZW9mIF98fFwibnVtYmVyXCI9PXR5cGVvZiBffHxcImJpZ2ludFwiPT10eXBlb2YgXz95KG51bGwsXyxudWxsLG51bGwsXyk6QXJyYXkuaXNBcnJheShfKT95KGQse2NoaWxkcmVuOl99LG51bGwsbnVsbCxudWxsKTpfLl9fYj4wP3koXy50eXBlLF8ucHJvcHMsXy5rZXksbnVsbCxfLl9fdik6Xykpe2lmKF8uX189dSxfLl9fYj11Ll9fYisxLG51bGw9PT0ocD13W2hdKXx8cCYmXy5rZXk9PXAua2V5JiZfLnR5cGU9PT1wLnR5cGUpd1toXT12b2lkIDA7ZWxzZSBmb3Iodj0wO3Y8QTt2Kyspe2lmKChwPXdbdl0pJiZfLmtleT09cC5rZXkmJl8udHlwZT09PXAudHlwZSl7d1t2XT12b2lkIDA7YnJlYWt9cD1udWxsfWoobixfLHA9cHx8ZSx0LG8scixmLHMsYSksYj1fLl9fZSwodj1fLnJlZikmJnAucmVmIT12JiYoZ3x8KGc9W10pLHAucmVmJiZnLnB1c2gocC5yZWYsbnVsbCxfKSxnLnB1c2godixfLl9fY3x8YixfKSksbnVsbCE9Yj8obnVsbD09bSYmKG09YiksXCJmdW5jdGlvblwiPT10eXBlb2YgXy50eXBlJiZudWxsIT1fLl9fayYmXy5fX2s9PT1wLl9faz9fLl9fZD1zPXgoXyxzLG4pOnM9UChuLF8scCx3LGIscyksYXx8XCJvcHRpb25cIiE9PXUudHlwZT9cImZ1bmN0aW9uXCI9PXR5cGVvZiB1LnR5cGUmJih1Ll9fZD1zKTpuLnZhbHVlPVwiXCIpOnMmJnAuX19lPT1zJiZzLnBhcmVudE5vZGUhPW4mJihzPWsocCkpfWZvcih1Ll9fZT1tLGg9QTtoLS07KW51bGwhPXdbaF0mJihcImZ1bmN0aW9uXCI9PXR5cGVvZiB1LnR5cGUmJm51bGwhPXdbaF0uX19lJiZ3W2hdLl9fZT09dS5fX2QmJih1Ll9fZD1rKGksaCsxKSksTih3W2hdLHdbaF0pKTtpZihnKWZvcihoPTA7aDxnLmxlbmd0aDtoKyspTShnW2hdLGdbKytoXSxnWysraF0pfWZ1bmN0aW9uIHgobixsLHUpe3ZhciBpLHQ7Zm9yKGk9MDtpPG4uX19rLmxlbmd0aDtpKyspKHQ9bi5fX2tbaV0pJiYodC5fXz1uLGw9XCJmdW5jdGlvblwiPT10eXBlb2YgdC50eXBlP3godCxsLHUpOlAodSx0LHQsbi5fX2ssdC5fX2UsbCkpO3JldHVybiBsfWZ1bmN0aW9uIEEobixsKXtyZXR1cm4gbD1sfHxbXSxudWxsPT1ufHxcImJvb2xlYW5cIj09dHlwZW9mIG58fChBcnJheS5pc0FycmF5KG4pP24uc29tZShmdW5jdGlvbihuKXtBKG4sbCl9KTpsLnB1c2gobikpLGx9ZnVuY3Rpb24gUChuLGwsdSxpLHQsbyl7dmFyIHIsZixlO2lmKHZvaWQgMCE9PWwuX19kKXI9bC5fX2QsbC5fX2Q9dm9pZCAwO2Vsc2UgaWYobnVsbD09dXx8dCE9b3x8bnVsbD09dC5wYXJlbnROb2RlKW46aWYobnVsbD09b3x8by5wYXJlbnROb2RlIT09biluLmFwcGVuZENoaWxkKHQpLHI9bnVsbDtlbHNle2ZvcihmPW8sZT0wOyhmPWYubmV4dFNpYmxpbmcpJiZlPGkubGVuZ3RoO2UrPTIpaWYoZj09dClicmVhayBuO24uaW5zZXJ0QmVmb3JlKHQsbykscj1vfXJldHVybiB2b2lkIDAhPT1yP3I6dC5uZXh0U2libGluZ31mdW5jdGlvbiBDKG4sbCx1LGksdCl7dmFyIG87Zm9yKG8gaW4gdSlcImNoaWxkcmVuXCI9PT1vfHxcImtleVwiPT09b3x8byBpbiBsfHxIKG4sbyxudWxsLHVbb10saSk7Zm9yKG8gaW4gbCl0JiZcImZ1bmN0aW9uXCIhPXR5cGVvZiBsW29dfHxcImNoaWxkcmVuXCI9PT1vfHxcImtleVwiPT09b3x8XCJ2YWx1ZVwiPT09b3x8XCJjaGVja2VkXCI9PT1vfHx1W29dPT09bFtvXXx8SChuLG8sbFtvXSx1W29dLGkpfWZ1bmN0aW9uICQobixsLHUpe1wiLVwiPT09bFswXT9uLnNldFByb3BlcnR5KGwsdSk6bltsXT1udWxsPT11P1wiXCI6XCJudW1iZXJcIiE9dHlwZW9mIHV8fHMudGVzdChsKT91OnUrXCJweFwifWZ1bmN0aW9uIEgobixsLHUsaSx0KXt2YXIgbztuOmlmKFwic3R5bGVcIj09PWwpaWYoXCJzdHJpbmdcIj09dHlwZW9mIHUpbi5zdHlsZS5jc3NUZXh0PXU7ZWxzZXtpZihcInN0cmluZ1wiPT10eXBlb2YgaSYmKG4uc3R5bGUuY3NzVGV4dD1pPVwiXCIpLGkpZm9yKGwgaW4gaSl1JiZsIGluIHV8fCQobi5zdHlsZSxsLFwiXCIpO2lmKHUpZm9yKGwgaW4gdSlpJiZ1W2xdPT09aVtsXXx8JChuLnN0eWxlLGwsdVtsXSl9ZWxzZSBpZihcIm9cIj09PWxbMF0mJlwiblwiPT09bFsxXSlvPWwhPT0obD1sLnJlcGxhY2UoL0NhcHR1cmUkLyxcIlwiKSksbD1sLnRvTG93ZXJDYXNlKClpbiBuP2wudG9Mb3dlckNhc2UoKS5zbGljZSgyKTpsLnNsaWNlKDIpLG4ubHx8KG4ubD17fSksbi5sW2wrb109dSx1P2l8fG4uYWRkRXZlbnRMaXN0ZW5lcihsLG8/VDpJLG8pOm4ucmVtb3ZlRXZlbnRMaXN0ZW5lcihsLG8/VDpJLG8pO2Vsc2UgaWYoXCJkYW5nZXJvdXNseVNldElubmVySFRNTFwiIT09bCl7aWYodClsPWwucmVwbGFjZSgveGxpbmtbSDpoXS8sXCJoXCIpLnJlcGxhY2UoL3NOYW1lJC8sXCJzXCIpO2Vsc2UgaWYoXCJocmVmXCIhPT1sJiZcImxpc3RcIiE9PWwmJlwiZm9ybVwiIT09bCYmXCJ0YWJJbmRleFwiIT09bCYmXCJkb3dubG9hZFwiIT09bCYmbCBpbiBuKXRyeXtuW2xdPW51bGw9PXU/XCJcIjp1O2JyZWFrIG59Y2F0Y2gobil7fVwiZnVuY3Rpb25cIj09dHlwZW9mIHV8fChudWxsIT11JiYoITEhPT11fHxcImFcIj09PWxbMF0mJlwiclwiPT09bFsxXSk/bi5zZXRBdHRyaWJ1dGUobCx1KTpuLnJlbW92ZUF0dHJpYnV0ZShsKSl9fWZ1bmN0aW9uIEkobil7dGhpcy5sW24udHlwZSshMV0obC5ldmVudD9sLmV2ZW50KG4pOm4pfWZ1bmN0aW9uIFQobil7dGhpcy5sW24udHlwZSshMF0obC5ldmVudD9sLmV2ZW50KG4pOm4pfWZ1bmN0aW9uIGoobix1LGksdCxvLHIsZixlLGMpe3ZhciBzLGgsdix5LHAsayxiLG0sZyx4LEEsUD11LnR5cGU7aWYodm9pZCAwIT09dS5jb25zdHJ1Y3RvcilyZXR1cm4gbnVsbDtudWxsIT1pLl9faCYmKGM9aS5fX2gsZT11Ll9fZT1pLl9fZSx1Ll9faD1udWxsLHI9W2VdKSwocz1sLl9fYikmJnModSk7dHJ5e246aWYoXCJmdW5jdGlvblwiPT10eXBlb2YgUCl7aWYobT11LnByb3BzLGc9KHM9UC5jb250ZXh0VHlwZSkmJnRbcy5fX2NdLHg9cz9nP2cucHJvcHMudmFsdWU6cy5fXzp0LGkuX19jP2I9KGg9dS5fX2M9aS5fX2MpLl9fPWguX19FOihcInByb3RvdHlwZVwiaW4gUCYmUC5wcm90b3R5cGUucmVuZGVyP3UuX19jPWg9bmV3IFAobSx4KToodS5fX2M9aD1uZXcgXyhtLHgpLGguY29uc3RydWN0b3I9UCxoLnJlbmRlcj1PKSxnJiZnLnN1YihoKSxoLnByb3BzPW0saC5zdGF0ZXx8KGguc3RhdGU9e30pLGguY29udGV4dD14LGguX19uPXQsdj1oLl9fZD0hMCxoLl9faD1bXSksbnVsbD09aC5fX3MmJihoLl9fcz1oLnN0YXRlKSxudWxsIT1QLmdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyYmKGguX19zPT1oLnN0YXRlJiYoaC5fX3M9YSh7fSxoLl9fcykpLGEoaC5fX3MsUC5nZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMobSxoLl9fcykpKSx5PWgucHJvcHMscD1oLnN0YXRlLHYpbnVsbD09UC5nZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMmJm51bGwhPWguY29tcG9uZW50V2lsbE1vdW50JiZoLmNvbXBvbmVudFdpbGxNb3VudCgpLG51bGwhPWguY29tcG9uZW50RGlkTW91bnQmJmguX19oLnB1c2goaC5jb21wb25lbnREaWRNb3VudCk7ZWxzZXtpZihudWxsPT1QLmdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyYmbSE9PXkmJm51bGwhPWguY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyYmaC5jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG0seCksIWguX19lJiZudWxsIT1oLnNob3VsZENvbXBvbmVudFVwZGF0ZSYmITE9PT1oLnNob3VsZENvbXBvbmVudFVwZGF0ZShtLGguX19zLHgpfHx1Ll9fdj09PWkuX192KXtoLnByb3BzPW0saC5zdGF0ZT1oLl9fcyx1Ll9fdiE9PWkuX192JiYoaC5fX2Q9ITEpLGguX192PXUsdS5fX2U9aS5fX2UsdS5fX2s9aS5fX2ssdS5fX2suZm9yRWFjaChmdW5jdGlvbihuKXtuJiYobi5fXz11KX0pLGguX19oLmxlbmd0aCYmZi5wdXNoKGgpO2JyZWFrIG59bnVsbCE9aC5jb21wb25lbnRXaWxsVXBkYXRlJiZoLmNvbXBvbmVudFdpbGxVcGRhdGUobSxoLl9fcyx4KSxudWxsIT1oLmNvbXBvbmVudERpZFVwZGF0ZSYmaC5fX2gucHVzaChmdW5jdGlvbigpe2guY29tcG9uZW50RGlkVXBkYXRlKHkscCxrKX0pfWguY29udGV4dD14LGgucHJvcHM9bSxoLnN0YXRlPWguX19zLChzPWwuX19yKSYmcyh1KSxoLl9fZD0hMSxoLl9fdj11LGguX19QPW4scz1oLnJlbmRlcihoLnByb3BzLGguc3RhdGUsaC5jb250ZXh0KSxoLnN0YXRlPWguX19zLG51bGwhPWguZ2V0Q2hpbGRDb250ZXh0JiYodD1hKGEoe30sdCksaC5nZXRDaGlsZENvbnRleHQoKSkpLHZ8fG51bGw9PWguZ2V0U25hcHNob3RCZWZvcmVVcGRhdGV8fChrPWguZ2V0U25hcHNob3RCZWZvcmVVcGRhdGUoeSxwKSksQT1udWxsIT1zJiZzLnR5cGU9PT1kJiZudWxsPT1zLmtleT9zLnByb3BzLmNoaWxkcmVuOnMsdyhuLEFycmF5LmlzQXJyYXkoQSk/QTpbQV0sdSxpLHQsbyxyLGYsZSxjKSxoLmJhc2U9dS5fX2UsdS5fX2g9bnVsbCxoLl9faC5sZW5ndGgmJmYucHVzaChoKSxiJiYoaC5fX0U9aC5fXz1udWxsKSxoLl9fZT0hMX1lbHNlIG51bGw9PXImJnUuX192PT09aS5fX3Y/KHUuX19rPWkuX19rLHUuX19lPWkuX19lKTp1Ll9fZT1MKGkuX19lLHUsaSx0LG8scixmLGMpOyhzPWwuZGlmZmVkKSYmcyh1KX1jYXRjaChuKXt1Ll9fdj1udWxsLChjfHxudWxsIT1yKSYmKHUuX19lPWUsdS5fX2g9ISFjLHJbci5pbmRleE9mKGUpXT1udWxsKSxsLl9fZShuLHUsaSl9fWZ1bmN0aW9uIHoobix1KXtsLl9fYyYmbC5fX2ModSxuKSxuLnNvbWUoZnVuY3Rpb24odSl7dHJ5e249dS5fX2gsdS5fX2g9W10sbi5zb21lKGZ1bmN0aW9uKG4pe24uY2FsbCh1KX0pfWNhdGNoKG4pe2wuX19lKG4sdS5fX3YpfX0pfWZ1bmN0aW9uIEwobCx1LGksdCxvLHIsZixjKXt2YXIgcyxhLHYseT1pLnByb3BzLHA9dS5wcm9wcyxkPXUudHlwZSxfPTA7aWYoXCJzdmdcIj09PWQmJihvPSEwKSxudWxsIT1yKWZvcig7XzxyLmxlbmd0aDtfKyspaWYoKHM9cltfXSkmJihzPT09bHx8KGQ/cy5sb2NhbE5hbWU9PWQ6Mz09cy5ub2RlVHlwZSkpKXtsPXMscltfXT1udWxsO2JyZWFrfWlmKG51bGw9PWwpe2lmKG51bGw9PT1kKXJldHVybiBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShwKTtsPW8/ZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIixkKTpkb2N1bWVudC5jcmVhdGVFbGVtZW50KGQscC5pcyYmcCkscj1udWxsLGM9ITF9aWYobnVsbD09PWQpeT09PXB8fGMmJmwuZGF0YT09PXB8fChsLmRhdGE9cCk7ZWxzZXtpZihyPXImJm4uY2FsbChsLmNoaWxkTm9kZXMpLGE9KHk9aS5wcm9wc3x8ZSkuZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwsdj1wLmRhbmdlcm91c2x5U2V0SW5uZXJIVE1MLCFjKXtpZihudWxsIT1yKWZvcih5PXt9LF89MDtfPGwuYXR0cmlidXRlcy5sZW5ndGg7XysrKXlbbC5hdHRyaWJ1dGVzW19dLm5hbWVdPWwuYXR0cmlidXRlc1tfXS52YWx1ZTsodnx8YSkmJih2JiYoYSYmdi5fX2h0bWw9PWEuX19odG1sfHx2Ll9faHRtbD09PWwuaW5uZXJIVE1MKXx8KGwuaW5uZXJIVE1MPXYmJnYuX19odG1sfHxcIlwiKSl9aWYoQyhsLHAseSxvLGMpLHYpdS5fX2s9W107ZWxzZSBpZihfPXUucHJvcHMuY2hpbGRyZW4sdyhsLEFycmF5LmlzQXJyYXkoXyk/XzpbX10sdSxpLHQsbyYmXCJmb3JlaWduT2JqZWN0XCIhPT1kLHIsZixyP3JbMF06aS5fX2smJmsoaSwwKSxjKSxudWxsIT1yKWZvcihfPXIubGVuZ3RoO18tLTspbnVsbCE9cltfXSYmaChyW19dKTtjfHwoXCJ2YWx1ZVwiaW4gcCYmdm9pZCAwIT09KF89cC52YWx1ZSkmJihfIT09bC52YWx1ZXx8XCJwcm9ncmVzc1wiPT09ZCYmIV8pJiZIKGwsXCJ2YWx1ZVwiLF8seS52YWx1ZSwhMSksXCJjaGVja2VkXCJpbiBwJiZ2b2lkIDAhPT0oXz1wLmNoZWNrZWQpJiZfIT09bC5jaGVja2VkJiZIKGwsXCJjaGVja2VkXCIsXyx5LmNoZWNrZWQsITEpKX1yZXR1cm4gbH1mdW5jdGlvbiBNKG4sdSxpKXt0cnl7XCJmdW5jdGlvblwiPT10eXBlb2Ygbj9uKHUpOm4uY3VycmVudD11fWNhdGNoKG4pe2wuX19lKG4saSl9fWZ1bmN0aW9uIE4obix1LGkpe3ZhciB0LG87aWYobC51bm1vdW50JiZsLnVubW91bnQobiksKHQ9bi5yZWYpJiYodC5jdXJyZW50JiZ0LmN1cnJlbnQhPT1uLl9fZXx8TSh0LG51bGwsdSkpLG51bGwhPSh0PW4uX19jKSl7aWYodC5jb21wb25lbnRXaWxsVW5tb3VudCl0cnl7dC5jb21wb25lbnRXaWxsVW5tb3VudCgpfWNhdGNoKG4pe2wuX19lKG4sdSl9dC5iYXNlPXQuX19QPW51bGx9aWYodD1uLl9faylmb3Iobz0wO288dC5sZW5ndGg7bysrKXRbb10mJk4odFtvXSx1LFwiZnVuY3Rpb25cIiE9dHlwZW9mIG4udHlwZSk7aXx8bnVsbD09bi5fX2V8fGgobi5fX2UpLG4uX19lPW4uX19kPXZvaWQgMH1mdW5jdGlvbiBPKG4sbCx1KXtyZXR1cm4gdGhpcy5jb25zdHJ1Y3RvcihuLHUpfWZ1bmN0aW9uIFModSxpLHQpe3ZhciBvLHIsZjtsLl9fJiZsLl9fKHUsaSkscj0obz1cImZ1bmN0aW9uXCI9PXR5cGVvZiB0KT9udWxsOnQmJnQuX19rfHxpLl9fayxmPVtdLGooaSx1PSghbyYmdHx8aSkuX19rPXYoZCxudWxsLFt1XSkscnx8ZSxlLHZvaWQgMCE9PWkub3duZXJTVkdFbGVtZW50LCFvJiZ0P1t0XTpyP251bGw6aS5maXJzdENoaWxkP24uY2FsbChpLmNoaWxkTm9kZXMpOm51bGwsZiwhbyYmdD90OnI/ci5fX2U6aS5maXJzdENoaWxkLG8pLHooZix1KX1mdW5jdGlvbiBxKG4sbCl7UyhuLGwscSl9ZnVuY3Rpb24gQihsLHUsaSl7dmFyIHQsbyxyLGY9YSh7fSxsLnByb3BzKTtmb3IociBpbiB1KVwia2V5XCI9PXI/dD11W3JdOlwicmVmXCI9PXI/bz11W3JdOmZbcl09dVtyXTtyZXR1cm4gYXJndW1lbnRzLmxlbmd0aD4yJiYoZi5jaGlsZHJlbj1hcmd1bWVudHMubGVuZ3RoPjM/bi5jYWxsKGFyZ3VtZW50cywyKTppKSx5KGwudHlwZSxmLHR8fGwua2V5LG98fGwucmVmLG51bGwpfWZ1bmN0aW9uIEQobixsKXt2YXIgdT17X19jOmw9XCJfX2NDXCIrZisrLF9fOm4sQ29uc3VtZXI6ZnVuY3Rpb24obixsKXtyZXR1cm4gbi5jaGlsZHJlbihsKX0sUHJvdmlkZXI6ZnVuY3Rpb24obil7dmFyIHUsaTtyZXR1cm4gdGhpcy5nZXRDaGlsZENvbnRleHR8fCh1PVtdLChpPXt9KVtsXT10aGlzLHRoaXMuZ2V0Q2hpbGRDb250ZXh0PWZ1bmN0aW9uKCl7cmV0dXJuIGl9LHRoaXMuc2hvdWxkQ29tcG9uZW50VXBkYXRlPWZ1bmN0aW9uKG4pe3RoaXMucHJvcHMudmFsdWUhPT1uLnZhbHVlJiZ1LnNvbWUobSl9LHRoaXMuc3ViPWZ1bmN0aW9uKG4pe3UucHVzaChuKTt2YXIgbD1uLmNvbXBvbmVudFdpbGxVbm1vdW50O24uY29tcG9uZW50V2lsbFVubW91bnQ9ZnVuY3Rpb24oKXt1LnNwbGljZSh1LmluZGV4T2YobiksMSksbCYmbC5jYWxsKG4pfX0pLG4uY2hpbGRyZW59fTtyZXR1cm4gdS5Qcm92aWRlci5fXz11LkNvbnN1bWVyLmNvbnRleHRUeXBlPXV9bj1jLnNsaWNlLGw9e19fZTpmdW5jdGlvbihuLGwpe2Zvcih2YXIgdSxpLHQ7bD1sLl9fOylpZigodT1sLl9fYykmJiF1Ll9fKXRyeXtpZigoaT11LmNvbnN0cnVjdG9yKSYmbnVsbCE9aS5nZXREZXJpdmVkU3RhdGVGcm9tRXJyb3ImJih1LnNldFN0YXRlKGkuZ2V0RGVyaXZlZFN0YXRlRnJvbUVycm9yKG4pKSx0PXUuX19kKSxudWxsIT11LmNvbXBvbmVudERpZENhdGNoJiYodS5jb21wb25lbnREaWRDYXRjaChuKSx0PXUuX19kKSx0KXJldHVybiB1Ll9fRT11fWNhdGNoKGwpe249bH10aHJvdyBufX0sdT0wLGk9ZnVuY3Rpb24obil7cmV0dXJuIG51bGwhPW4mJnZvaWQgMD09PW4uY29uc3RydWN0b3J9LF8ucHJvdG90eXBlLnNldFN0YXRlPWZ1bmN0aW9uKG4sbCl7dmFyIHU7dT1udWxsIT10aGlzLl9fcyYmdGhpcy5fX3MhPT10aGlzLnN0YXRlP3RoaXMuX19zOnRoaXMuX19zPWEoe30sdGhpcy5zdGF0ZSksXCJmdW5jdGlvblwiPT10eXBlb2YgbiYmKG49bihhKHt9LHUpLHRoaXMucHJvcHMpKSxuJiZhKHUsbiksbnVsbCE9biYmdGhpcy5fX3YmJihsJiZ0aGlzLl9faC5wdXNoKGwpLG0odGhpcykpfSxfLnByb3RvdHlwZS5mb3JjZVVwZGF0ZT1mdW5jdGlvbihuKXt0aGlzLl9fdiYmKHRoaXMuX19lPSEwLG4mJnRoaXMuX19oLnB1c2gobiksbSh0aGlzKSl9LF8ucHJvdG90eXBlLnJlbmRlcj1kLHQ9W10sbz1cImZ1bmN0aW9uXCI9PXR5cGVvZiBQcm9taXNlP1Byb21pc2UucHJvdG90eXBlLnRoZW4uYmluZChQcm9taXNlLnJlc29sdmUoKSk6c2V0VGltZW91dCxnLl9fcj0wLGY9MDtleHBvcnR7UyBhcyByZW5kZXIscSBhcyBoeWRyYXRlLHYgYXMgY3JlYXRlRWxlbWVudCx2IGFzIGgsZCBhcyBGcmFnbWVudCxwIGFzIGNyZWF0ZVJlZixpIGFzIGlzVmFsaWRFbGVtZW50LF8gYXMgQ29tcG9uZW50LEIgYXMgY2xvbmVFbGVtZW50LEQgYXMgY3JlYXRlQ29udGV4dCxBIGFzIHRvQ2hpbGRBcnJheSxsIGFzIG9wdGlvbnN9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cHJlYWN0Lm1vZHVsZS5qcy5tYXBcbiIsImltcG9ydHtvcHRpb25zIGFzIG59ZnJvbVwicHJlYWN0XCI7dmFyIHQsdSxyLG89MCxpPVtdLGM9bi5fX2IsZj1uLl9fcixlPW4uZGlmZmVkLGE9bi5fX2Msdj1uLnVubW91bnQ7ZnVuY3Rpb24gbSh0LHIpe24uX19oJiZuLl9faCh1LHQsb3x8ciksbz0wO3ZhciBpPXUuX19IfHwodS5fX0g9e19fOltdLF9faDpbXX0pO3JldHVybiB0Pj1pLl9fLmxlbmd0aCYmaS5fXy5wdXNoKHt9KSxpLl9fW3RdfWZ1bmN0aW9uIGwobil7cmV0dXJuIG89MSxwKHcsbil9ZnVuY3Rpb24gcChuLHIsbyl7dmFyIGk9bSh0KyssMik7cmV0dXJuIGkudD1uLGkuX19jfHwoaS5fXz1bbz9vKHIpOncodm9pZCAwLHIpLGZ1bmN0aW9uKG4pe3ZhciB0PWkudChpLl9fWzBdLG4pO2kuX19bMF0hPT10JiYoaS5fXz1bdCxpLl9fWzFdXSxpLl9fYy5zZXRTdGF0ZSh7fSkpfV0saS5fX2M9dSksaS5fX31mdW5jdGlvbiB5KHIsbyl7dmFyIGk9bSh0KyssMyk7IW4uX19zJiZrKGkuX19ILG8pJiYoaS5fXz1yLGkuX19IPW8sdS5fX0guX19oLnB1c2goaSkpfWZ1bmN0aW9uIGgocixvKXt2YXIgaT1tKHQrKyw0KTshbi5fX3MmJmsoaS5fX0gsbykmJihpLl9fPXIsaS5fX0g9byx1Ll9faC5wdXNoKGkpKX1mdW5jdGlvbiBzKG4pe3JldHVybiBvPTUsZChmdW5jdGlvbigpe3JldHVybntjdXJyZW50Om59fSxbXSl9ZnVuY3Rpb24gXyhuLHQsdSl7bz02LGgoZnVuY3Rpb24oKXtcImZ1bmN0aW9uXCI9PXR5cGVvZiBuP24odCgpKTpuJiYobi5jdXJyZW50PXQoKSl9LG51bGw9PXU/dTp1LmNvbmNhdChuKSl9ZnVuY3Rpb24gZChuLHUpe3ZhciByPW0odCsrLDcpO3JldHVybiBrKHIuX19ILHUpJiYoci5fXz1uKCksci5fX0g9dSxyLl9faD1uKSxyLl9ffWZ1bmN0aW9uIEEobix0KXtyZXR1cm4gbz04LGQoZnVuY3Rpb24oKXtyZXR1cm4gbn0sdCl9ZnVuY3Rpb24gRihuKXt2YXIgcj11LmNvbnRleHRbbi5fX2NdLG89bSh0KyssOSk7cmV0dXJuIG8uYz1uLHI/KG51bGw9PW8uX18mJihvLl9fPSEwLHIuc3ViKHUpKSxyLnByb3BzLnZhbHVlKTpuLl9ffWZ1bmN0aW9uIFQodCx1KXtuLnVzZURlYnVnVmFsdWUmJm4udXNlRGVidWdWYWx1ZSh1P3UodCk6dCl9ZnVuY3Rpb24gcShuKXt2YXIgcj1tKHQrKywxMCksbz1sKCk7cmV0dXJuIHIuX189bix1LmNvbXBvbmVudERpZENhdGNofHwodS5jb21wb25lbnREaWRDYXRjaD1mdW5jdGlvbihuKXtyLl9fJiZyLl9fKG4pLG9bMV0obil9KSxbb1swXSxmdW5jdGlvbigpe29bMV0odm9pZCAwKX1dfWZ1bmN0aW9uIHgoKXtpLmZvckVhY2goZnVuY3Rpb24odCl7aWYodC5fX1ApdHJ5e3QuX19ILl9faC5mb3JFYWNoKGcpLHQuX19ILl9faC5mb3JFYWNoKGopLHQuX19ILl9faD1bXX1jYXRjaCh1KXt0Ll9fSC5fX2g9W10sbi5fX2UodSx0Ll9fdil9fSksaT1bXX1uLl9fYj1mdW5jdGlvbihuKXt1PW51bGwsYyYmYyhuKX0sbi5fX3I9ZnVuY3Rpb24obil7ZiYmZihuKSx0PTA7dmFyIHI9KHU9bi5fX2MpLl9fSDtyJiYoci5fX2guZm9yRWFjaChnKSxyLl9faC5mb3JFYWNoKGopLHIuX19oPVtdKX0sbi5kaWZmZWQ9ZnVuY3Rpb24odCl7ZSYmZSh0KTt2YXIgbz10Ll9fYztvJiZvLl9fSCYmby5fX0guX19oLmxlbmd0aCYmKDEhPT1pLnB1c2gobykmJnI9PT1uLnJlcXVlc3RBbmltYXRpb25GcmFtZXx8KChyPW4ucmVxdWVzdEFuaW1hdGlvbkZyYW1lKXx8ZnVuY3Rpb24obil7dmFyIHQsdT1mdW5jdGlvbigpe2NsZWFyVGltZW91dChyKSxiJiZjYW5jZWxBbmltYXRpb25GcmFtZSh0KSxzZXRUaW1lb3V0KG4pfSxyPXNldFRpbWVvdXQodSwxMDApO2ImJih0PXJlcXVlc3RBbmltYXRpb25GcmFtZSh1KSl9KSh4KSksdT12b2lkIDB9LG4uX19jPWZ1bmN0aW9uKHQsdSl7dS5zb21lKGZ1bmN0aW9uKHQpe3RyeXt0Ll9faC5mb3JFYWNoKGcpLHQuX19oPXQuX19oLmZpbHRlcihmdW5jdGlvbihuKXtyZXR1cm4hbi5fX3x8aihuKX0pfWNhdGNoKHIpe3Uuc29tZShmdW5jdGlvbihuKXtuLl9faCYmKG4uX19oPVtdKX0pLHU9W10sbi5fX2Uocix0Ll9fdil9fSksYSYmYSh0LHUpfSxuLnVubW91bnQ9ZnVuY3Rpb24odCl7diYmdih0KTt2YXIgdT10Ll9fYztpZih1JiZ1Ll9fSCl0cnl7dS5fX0guX18uZm9yRWFjaChnKX1jYXRjaCh0KXtuLl9fZSh0LHUuX192KX19O3ZhciBiPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVlc3RBbmltYXRpb25GcmFtZTtmdW5jdGlvbiBnKG4pe3ZhciB0PXU7XCJmdW5jdGlvblwiPT10eXBlb2Ygbi5fX2MmJm4uX19jKCksdT10fWZ1bmN0aW9uIGoobil7dmFyIHQ9dTtuLl9fYz1uLl9fKCksdT10fWZ1bmN0aW9uIGsobix0KXtyZXR1cm4hbnx8bi5sZW5ndGghPT10Lmxlbmd0aHx8dC5zb21lKGZ1bmN0aW9uKHQsdSl7cmV0dXJuIHQhPT1uW3VdfSl9ZnVuY3Rpb24gdyhuLHQpe3JldHVyblwiZnVuY3Rpb25cIj09dHlwZW9mIHQ/dChuKTp0fWV4cG9ydHtsIGFzIHVzZVN0YXRlLHAgYXMgdXNlUmVkdWNlcix5IGFzIHVzZUVmZmVjdCxoIGFzIHVzZUxheW91dEVmZmVjdCxzIGFzIHVzZVJlZixfIGFzIHVzZUltcGVyYXRpdmVIYW5kbGUsZCBhcyB1c2VNZW1vLEEgYXMgdXNlQ2FsbGJhY2ssRiBhcyB1c2VDb250ZXh0LFQgYXMgdXNlRGVidWdWYWx1ZSxxIGFzIHVzZUVycm9yQm91bmRhcnl9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aG9va3MubW9kdWxlLmpzLm1hcFxuIiwiaW1wb3J0e3VzZVN0YXRlIGFzIG4sdXNlUmVkdWNlciBhcyB0LHVzZUVmZmVjdCBhcyBlLHVzZUxheW91dEVmZmVjdCBhcyByLHVzZVJlZiBhcyB1LHVzZUltcGVyYXRpdmVIYW5kbGUgYXMgbyx1c2VNZW1vIGFzIGksdXNlQ2FsbGJhY2sgYXMgbCx1c2VDb250ZXh0IGFzIGYsdXNlRGVidWdWYWx1ZSBhcyBjfWZyb21cInByZWFjdC9ob29rc1wiO2V4cG9ydCpmcm9tXCJwcmVhY3QvaG9va3NcIjtpbXBvcnR7Q29tcG9uZW50IGFzIGEsY3JlYXRlRWxlbWVudCBhcyBzLG9wdGlvbnMgYXMgaCx0b0NoaWxkQXJyYXkgYXMgdixGcmFnbWVudCBhcyBkLHJlbmRlciBhcyBwLGh5ZHJhdGUgYXMgbSxjbG9uZUVsZW1lbnQgYXMgeSxjcmVhdGVSZWYgYXMgYixjcmVhdGVDb250ZXh0IGFzIF99ZnJvbVwicHJlYWN0XCI7ZXhwb3J0e2NyZWF0ZUVsZW1lbnQsY3JlYXRlQ29udGV4dCxjcmVhdGVSZWYsRnJhZ21lbnQsQ29tcG9uZW50fWZyb21cInByZWFjdFwiO2Z1bmN0aW9uIFMobix0KXtmb3IodmFyIGUgaW4gdCluW2VdPXRbZV07cmV0dXJuIG59ZnVuY3Rpb24gQyhuLHQpe2Zvcih2YXIgZSBpbiBuKWlmKFwiX19zb3VyY2VcIiE9PWUmJiEoZSBpbiB0KSlyZXR1cm4hMDtmb3IodmFyIHIgaW4gdClpZihcIl9fc291cmNlXCIhPT1yJiZuW3JdIT09dFtyXSlyZXR1cm4hMDtyZXR1cm4hMX1mdW5jdGlvbiBFKG4pe3RoaXMucHJvcHM9bn1mdW5jdGlvbiBnKG4sdCl7ZnVuY3Rpb24gZShuKXt2YXIgZT10aGlzLnByb3BzLnJlZixyPWU9PW4ucmVmO3JldHVybiFyJiZlJiYoZS5jYWxsP2UobnVsbCk6ZS5jdXJyZW50PW51bGwpLHQ/IXQodGhpcy5wcm9wcyxuKXx8IXI6Qyh0aGlzLnByb3BzLG4pfWZ1bmN0aW9uIHIodCl7cmV0dXJuIHRoaXMuc2hvdWxkQ29tcG9uZW50VXBkYXRlPWUscyhuLHQpfXJldHVybiByLmRpc3BsYXlOYW1lPVwiTWVtbyhcIisobi5kaXNwbGF5TmFtZXx8bi5uYW1lKStcIilcIixyLnByb3RvdHlwZS5pc1JlYWN0Q29tcG9uZW50PSEwLHIuX19mPSEwLHJ9KEUucHJvdG90eXBlPW5ldyBhKS5pc1B1cmVSZWFjdENvbXBvbmVudD0hMCxFLnByb3RvdHlwZS5zaG91bGRDb21wb25lbnRVcGRhdGU9ZnVuY3Rpb24obix0KXtyZXR1cm4gQyh0aGlzLnByb3BzLG4pfHxDKHRoaXMuc3RhdGUsdCl9O3ZhciB3PWguX19iO2guX19iPWZ1bmN0aW9uKG4pe24udHlwZSYmbi50eXBlLl9fZiYmbi5yZWYmJihuLnByb3BzLnJlZj1uLnJlZixuLnJlZj1udWxsKSx3JiZ3KG4pfTt2YXIgUj1cInVuZGVmaW5lZFwiIT10eXBlb2YgU3ltYm9sJiZTeW1ib2wuZm9yJiZTeW1ib2wuZm9yKFwicmVhY3QuZm9yd2FyZF9yZWZcIil8fDM5MTE7ZnVuY3Rpb24geChuKXtmdW5jdGlvbiB0KHQsZSl7dmFyIHI9Uyh7fSx0KTtyZXR1cm4gZGVsZXRlIHIucmVmLG4ociwoZT10LnJlZnx8ZSkmJihcIm9iamVjdFwiIT10eXBlb2YgZXx8XCJjdXJyZW50XCJpbiBlKT9lOm51bGwpfXJldHVybiB0LiQkdHlwZW9mPVIsdC5yZW5kZXI9dCx0LnByb3RvdHlwZS5pc1JlYWN0Q29tcG9uZW50PXQuX19mPSEwLHQuZGlzcGxheU5hbWU9XCJGb3J3YXJkUmVmKFwiKyhuLmRpc3BsYXlOYW1lfHxuLm5hbWUpK1wiKVwiLHR9dmFyIE49ZnVuY3Rpb24obix0KXtyZXR1cm4gbnVsbD09bj9udWxsOnYodihuKS5tYXAodCkpfSxrPXttYXA6Tixmb3JFYWNoOk4sY291bnQ6ZnVuY3Rpb24obil7cmV0dXJuIG4/dihuKS5sZW5ndGg6MH0sb25seTpmdW5jdGlvbihuKXt2YXIgdD12KG4pO2lmKDEhPT10Lmxlbmd0aCl0aHJvd1wiQ2hpbGRyZW4ub25seVwiO3JldHVybiB0WzBdfSx0b0FycmF5OnZ9LEE9aC5fX2U7aC5fX2U9ZnVuY3Rpb24obix0LGUpe2lmKG4udGhlbilmb3IodmFyIHIsdT10O3U9dS5fXzspaWYoKHI9dS5fX2MpJiZyLl9fYylyZXR1cm4gbnVsbD09dC5fX2UmJih0Ll9fZT1lLl9fZSx0Ll9faz1lLl9fayksci5fX2Mobix0KTtBKG4sdCxlKX07dmFyIE89aC51bm1vdW50O2Z1bmN0aW9uIEwoKXt0aGlzLl9fdT0wLHRoaXMudD1udWxsLHRoaXMuX19iPW51bGx9ZnVuY3Rpb24gVShuKXt2YXIgdD1uLl9fLl9fYztyZXR1cm4gdCYmdC5fX2UmJnQuX19lKG4pfWZ1bmN0aW9uIEYobil7dmFyIHQsZSxyO2Z1bmN0aW9uIHUodSl7aWYodHx8KHQ9bigpKS50aGVuKGZ1bmN0aW9uKG4pe2U9bi5kZWZhdWx0fHxufSxmdW5jdGlvbihuKXtyPW59KSxyKXRocm93IHI7aWYoIWUpdGhyb3cgdDtyZXR1cm4gcyhlLHUpfXJldHVybiB1LmRpc3BsYXlOYW1lPVwiTGF6eVwiLHUuX19mPSEwLHV9ZnVuY3Rpb24gTSgpe3RoaXMudT1udWxsLHRoaXMubz1udWxsfWgudW5tb3VudD1mdW5jdGlvbihuKXt2YXIgdD1uLl9fYzt0JiZ0Ll9fUiYmdC5fX1IoKSx0JiYhMD09PW4uX19oJiYobi50eXBlPW51bGwpLE8mJk8obil9LChMLnByb3RvdHlwZT1uZXcgYSkuX19jPWZ1bmN0aW9uKG4sdCl7dmFyIGU9dC5fX2Mscj10aGlzO251bGw9PXIudCYmKHIudD1bXSksci50LnB1c2goZSk7dmFyIHU9VShyLl9fdiksbz0hMSxpPWZ1bmN0aW9uKCl7b3x8KG89ITAsZS5fX1I9bnVsbCx1P3UobCk6bCgpKX07ZS5fX1I9aTt2YXIgbD1mdW5jdGlvbigpe2lmKCEtLXIuX191KXtpZihyLnN0YXRlLl9fZSl7dmFyIG49ci5zdGF0ZS5fX2U7ci5fX3YuX19rWzBdPWZ1bmN0aW9uIG4odCxlLHIpe3JldHVybiB0JiYodC5fX3Y9bnVsbCx0Ll9faz10Ll9fayYmdC5fX2subWFwKGZ1bmN0aW9uKHQpe3JldHVybiBuKHQsZSxyKX0pLHQuX19jJiZ0Ll9fYy5fX1A9PT1lJiYodC5fX2UmJnIuaW5zZXJ0QmVmb3JlKHQuX19lLHQuX19kKSx0Ll9fYy5fX2U9ITAsdC5fX2MuX19QPXIpKSx0fShuLG4uX19jLl9fUCxuLl9fYy5fX08pfXZhciB0O2ZvcihyLnNldFN0YXRlKHtfX2U6ci5fX2I9bnVsbH0pO3Q9ci50LnBvcCgpOyl0LmZvcmNlVXBkYXRlKCl9fSxmPSEwPT09dC5fX2g7ci5fX3UrK3x8Znx8ci5zZXRTdGF0ZSh7X19lOnIuX19iPXIuX192Ll9fa1swXX0pLG4udGhlbihpLGkpfSxMLnByb3RvdHlwZS5jb21wb25lbnRXaWxsVW5tb3VudD1mdW5jdGlvbigpe3RoaXMudD1bXX0sTC5wcm90b3R5cGUucmVuZGVyPWZ1bmN0aW9uKG4sdCl7aWYodGhpcy5fX2Ipe2lmKHRoaXMuX192Ll9fayl7dmFyIGU9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSxyPXRoaXMuX192Ll9fa1swXS5fX2M7dGhpcy5fX3YuX19rWzBdPWZ1bmN0aW9uIG4odCxlLHIpe3JldHVybiB0JiYodC5fX2MmJnQuX19jLl9fSCYmKHQuX19jLl9fSC5fXy5mb3JFYWNoKGZ1bmN0aW9uKG4pe1wiZnVuY3Rpb25cIj09dHlwZW9mIG4uX19jJiZuLl9fYygpfSksdC5fX2MuX19IPW51bGwpLG51bGwhPSh0PVMoe30sdCkpLl9fYyYmKHQuX19jLl9fUD09PXImJih0Ll9fYy5fX1A9ZSksdC5fX2M9bnVsbCksdC5fX2s9dC5fX2smJnQuX19rLm1hcChmdW5jdGlvbih0KXtyZXR1cm4gbih0LGUscil9KSksdH0odGhpcy5fX2IsZSxyLl9fTz1yLl9fUCl9dGhpcy5fX2I9bnVsbH12YXIgdT10Ll9fZSYmcyhkLG51bGwsbi5mYWxsYmFjayk7cmV0dXJuIHUmJih1Ll9faD1udWxsKSxbcyhkLG51bGwsdC5fX2U/bnVsbDpuLmNoaWxkcmVuKSx1XX07dmFyIFQ9ZnVuY3Rpb24obix0LGUpe2lmKCsrZVsxXT09PWVbMF0mJm4uby5kZWxldGUodCksbi5wcm9wcy5yZXZlYWxPcmRlciYmKFwidFwiIT09bi5wcm9wcy5yZXZlYWxPcmRlclswXXx8IW4uby5zaXplKSlmb3IoZT1uLnU7ZTspe2Zvcig7ZS5sZW5ndGg+MzspZS5wb3AoKSgpO2lmKGVbMV08ZVswXSlicmVhaztuLnU9ZT1lWzJdfX07ZnVuY3Rpb24gRChuKXtyZXR1cm4gdGhpcy5nZXRDaGlsZENvbnRleHQ9ZnVuY3Rpb24oKXtyZXR1cm4gbi5jb250ZXh0fSxuLmNoaWxkcmVufWZ1bmN0aW9uIEkobil7dmFyIHQ9dGhpcyxlPW4uaTt0LmNvbXBvbmVudFdpbGxVbm1vdW50PWZ1bmN0aW9uKCl7cChudWxsLHQubCksdC5sPW51bGwsdC5pPW51bGx9LHQuaSYmdC5pIT09ZSYmdC5jb21wb25lbnRXaWxsVW5tb3VudCgpLG4uX192Pyh0Lmx8fCh0Lmk9ZSx0Lmw9e25vZGVUeXBlOjEscGFyZW50Tm9kZTplLGNoaWxkTm9kZXM6W10sYXBwZW5kQ2hpbGQ6ZnVuY3Rpb24obil7dGhpcy5jaGlsZE5vZGVzLnB1c2gobiksdC5pLmFwcGVuZENoaWxkKG4pfSxpbnNlcnRCZWZvcmU6ZnVuY3Rpb24obixlKXt0aGlzLmNoaWxkTm9kZXMucHVzaChuKSx0LmkuYXBwZW5kQ2hpbGQobil9LHJlbW92ZUNoaWxkOmZ1bmN0aW9uKG4pe3RoaXMuY2hpbGROb2Rlcy5zcGxpY2UodGhpcy5jaGlsZE5vZGVzLmluZGV4T2Yobik+Pj4xLDEpLHQuaS5yZW1vdmVDaGlsZChuKX19KSxwKHMoRCx7Y29udGV4dDp0LmNvbnRleHR9LG4uX192KSx0LmwpKTp0LmwmJnQuY29tcG9uZW50V2lsbFVubW91bnQoKX1mdW5jdGlvbiBXKG4sdCl7cmV0dXJuIHMoSSx7X192Om4saTp0fSl9KE0ucHJvdG90eXBlPW5ldyBhKS5fX2U9ZnVuY3Rpb24obil7dmFyIHQ9dGhpcyxlPVUodC5fX3YpLHI9dC5vLmdldChuKTtyZXR1cm4gclswXSsrLGZ1bmN0aW9uKHUpe3ZhciBvPWZ1bmN0aW9uKCl7dC5wcm9wcy5yZXZlYWxPcmRlcj8oci5wdXNoKHUpLFQodCxuLHIpKTp1KCl9O2U/ZShvKTpvKCl9fSxNLnByb3RvdHlwZS5yZW5kZXI9ZnVuY3Rpb24obil7dGhpcy51PW51bGwsdGhpcy5vPW5ldyBNYXA7dmFyIHQ9dihuLmNoaWxkcmVuKTtuLnJldmVhbE9yZGVyJiZcImJcIj09PW4ucmV2ZWFsT3JkZXJbMF0mJnQucmV2ZXJzZSgpO2Zvcih2YXIgZT10Lmxlbmd0aDtlLS07KXRoaXMuby5zZXQodFtlXSx0aGlzLnU9WzEsMCx0aGlzLnVdKTtyZXR1cm4gbi5jaGlsZHJlbn0sTS5wcm90b3R5cGUuY29tcG9uZW50RGlkVXBkYXRlPU0ucHJvdG90eXBlLmNvbXBvbmVudERpZE1vdW50PWZ1bmN0aW9uKCl7dmFyIG49dGhpczt0aGlzLm8uZm9yRWFjaChmdW5jdGlvbih0LGUpe1QobixlLHQpfSl9O3ZhciBqPVwidW5kZWZpbmVkXCIhPXR5cGVvZiBTeW1ib2wmJlN5bWJvbC5mb3ImJlN5bWJvbC5mb3IoXCJyZWFjdC5lbGVtZW50XCIpfHw2MDEwMyxQPS9eKD86YWNjZW50fGFsaWdubWVudHxhcmFiaWN8YmFzZWxpbmV8Y2FwfGNsaXAoPyFQYXRoVSl8Y29sb3J8ZmlsbHxmbG9vZHxmb250fGdseXBoKD8hUil8aG9yaXp8bWFya2VyKD8hSHxXfFUpfG92ZXJsaW5lfHBhaW50fHN0b3B8c3RyaWtldGhyb3VnaHxzdHJva2V8dGV4dCg/IUwpfHVuZGVybGluZXx1bmljb2RlfHVuaXRzfHZ8dmVjdG9yfHZlcnR8d29yZHx3cml0aW5nfHgoPyFDKSlbQS1aXS8sVj1mdW5jdGlvbihuKXtyZXR1cm4oXCJ1bmRlZmluZWRcIiE9dHlwZW9mIFN5bWJvbCYmXCJzeW1ib2xcIj09dHlwZW9mIFN5bWJvbCgpPy9maWx8Y2hlfHJhZC9pOi9maWx8Y2hlfHJhL2kpLnRlc3Qobil9O2Z1bmN0aW9uIHoobix0LGUpe3JldHVybiBudWxsPT10Ll9fayYmKHQudGV4dENvbnRlbnQ9XCJcIikscChuLHQpLFwiZnVuY3Rpb25cIj09dHlwZW9mIGUmJmUoKSxuP24uX19jOm51bGx9ZnVuY3Rpb24gQihuLHQsZSl7cmV0dXJuIG0obix0KSxcImZ1bmN0aW9uXCI9PXR5cGVvZiBlJiZlKCksbj9uLl9fYzpudWxsfWEucHJvdG90eXBlLmlzUmVhY3RDb21wb25lbnQ9e30sW1wiY29tcG9uZW50V2lsbE1vdW50XCIsXCJjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzXCIsXCJjb21wb25lbnRXaWxsVXBkYXRlXCJdLmZvckVhY2goZnVuY3Rpb24obil7T2JqZWN0LmRlZmluZVByb3BlcnR5KGEucHJvdG90eXBlLG4se2NvbmZpZ3VyYWJsZTohMCxnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpc1tcIlVOU0FGRV9cIituXX0sc2V0OmZ1bmN0aW9uKHQpe09iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLG4se2NvbmZpZ3VyYWJsZTohMCx3cml0YWJsZTohMCx2YWx1ZTp0fSl9fSl9KTt2YXIgSD1oLmV2ZW50O2Z1bmN0aW9uIFooKXt9ZnVuY3Rpb24gWSgpe3JldHVybiB0aGlzLmNhbmNlbEJ1YmJsZX1mdW5jdGlvbiAkKCl7cmV0dXJuIHRoaXMuZGVmYXVsdFByZXZlbnRlZH1oLmV2ZW50PWZ1bmN0aW9uKG4pe3JldHVybiBIJiYobj1IKG4pKSxuLnBlcnNpc3Q9WixuLmlzUHJvcGFnYXRpb25TdG9wcGVkPVksbi5pc0RlZmF1bHRQcmV2ZW50ZWQ9JCxuLm5hdGl2ZUV2ZW50PW59O3ZhciBxLEc9e2NvbmZpZ3VyYWJsZTohMCxnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5jbGFzc319LEo9aC52bm9kZTtoLnZub2RlPWZ1bmN0aW9uKG4pe3ZhciB0PW4udHlwZSxlPW4ucHJvcHMscj1lO2lmKFwic3RyaW5nXCI9PXR5cGVvZiB0KXtmb3IodmFyIHUgaW4gcj17fSxlKXt2YXIgbz1lW3VdO1widmFsdWVcIj09PXUmJlwiZGVmYXVsdFZhbHVlXCJpbiBlJiZudWxsPT1vfHwoXCJkZWZhdWx0VmFsdWVcIj09PXUmJlwidmFsdWVcImluIGUmJm51bGw9PWUudmFsdWU/dT1cInZhbHVlXCI6XCJkb3dubG9hZFwiPT09dSYmITA9PT1vP289XCJcIjovb25kb3VibGVjbGljay9pLnRlc3QodSk/dT1cIm9uZGJsY2xpY2tcIjovXm9uY2hhbmdlKHRleHRhcmVhfGlucHV0KS9pLnRlc3QodSt0KSYmIVYoZS50eXBlKT91PVwib25pbnB1dFwiOi9eb24oQW5pfFRyYXxUb3V8QmVmb3JlSW5wKS8udGVzdCh1KT91PXUudG9Mb3dlckNhc2UoKTpQLnRlc3QodSk/dT11LnJlcGxhY2UoL1tBLVowLTldLyxcIi0kJlwiKS50b0xvd2VyQ2FzZSgpOm51bGw9PT1vJiYobz12b2lkIDApLHJbdV09byl9XCJzZWxlY3RcIj09dCYmci5tdWx0aXBsZSYmQXJyYXkuaXNBcnJheShyLnZhbHVlKSYmKHIudmFsdWU9dihlLmNoaWxkcmVuKS5mb3JFYWNoKGZ1bmN0aW9uKG4pe24ucHJvcHMuc2VsZWN0ZWQ9LTEhPXIudmFsdWUuaW5kZXhPZihuLnByb3BzLnZhbHVlKX0pKSxcInNlbGVjdFwiPT10JiZudWxsIT1yLmRlZmF1bHRWYWx1ZSYmKHIudmFsdWU9dihlLmNoaWxkcmVuKS5mb3JFYWNoKGZ1bmN0aW9uKG4pe24ucHJvcHMuc2VsZWN0ZWQ9ci5tdWx0aXBsZT8tMSE9ci5kZWZhdWx0VmFsdWUuaW5kZXhPZihuLnByb3BzLnZhbHVlKTpyLmRlZmF1bHRWYWx1ZT09bi5wcm9wcy52YWx1ZX0pKSxuLnByb3BzPXJ9dCYmZS5jbGFzcyE9ZS5jbGFzc05hbWUmJihHLmVudW1lcmFibGU9XCJjbGFzc05hbWVcImluIGUsbnVsbCE9ZS5jbGFzc05hbWUmJihyLmNsYXNzPWUuY2xhc3NOYW1lKSxPYmplY3QuZGVmaW5lUHJvcGVydHkocixcImNsYXNzTmFtZVwiLEcpKSxuLiQkdHlwZW9mPWosSiYmSihuKX07dmFyIEs9aC5fX3I7aC5fX3I9ZnVuY3Rpb24obil7SyYmSyhuKSxxPW4uX19jfTt2YXIgUT17UmVhY3RDdXJyZW50RGlzcGF0Y2hlcjp7Y3VycmVudDp7cmVhZENvbnRleHQ6ZnVuY3Rpb24obil7cmV0dXJuIHEuX19uW24uX19jXS5wcm9wcy52YWx1ZX19fX0sWD1cIjE3LjAuMlwiO2Z1bmN0aW9uIG5uKG4pe3JldHVybiBzLmJpbmQobnVsbCxuKX1mdW5jdGlvbiB0bihuKXtyZXR1cm4hIW4mJm4uJCR0eXBlb2Y9PT1qfWZ1bmN0aW9uIGVuKG4pe3JldHVybiB0bihuKT95LmFwcGx5KG51bGwsYXJndW1lbnRzKTpufWZ1bmN0aW9uIHJuKG4pe3JldHVybiEhbi5fX2smJihwKG51bGwsbiksITApfWZ1bmN0aW9uIHVuKG4pe3JldHVybiBuJiYobi5iYXNlfHwxPT09bi5ub2RlVHlwZSYmbil8fG51bGx9dmFyIG9uPWZ1bmN0aW9uKG4sdCl7cmV0dXJuIG4odCl9LGxuPWZ1bmN0aW9uKG4sdCl7cmV0dXJuIG4odCl9LGZuPWQ7ZXhwb3J0IGRlZmF1bHR7dXNlU3RhdGU6bix1c2VSZWR1Y2VyOnQsdXNlRWZmZWN0OmUsdXNlTGF5b3V0RWZmZWN0OnIsdXNlUmVmOnUsdXNlSW1wZXJhdGl2ZUhhbmRsZTpvLHVzZU1lbW86aSx1c2VDYWxsYmFjazpsLHVzZUNvbnRleHQ6Zix1c2VEZWJ1Z1ZhbHVlOmMsdmVyc2lvbjpcIjE3LjAuMlwiLENoaWxkcmVuOmsscmVuZGVyOnosaHlkcmF0ZTpCLHVubW91bnRDb21wb25lbnRBdE5vZGU6cm4sY3JlYXRlUG9ydGFsOlcsY3JlYXRlRWxlbWVudDpzLGNyZWF0ZUNvbnRleHQ6XyxjcmVhdGVGYWN0b3J5Om5uLGNsb25lRWxlbWVudDplbixjcmVhdGVSZWY6YixGcmFnbWVudDpkLGlzVmFsaWRFbGVtZW50OnRuLGZpbmRET01Ob2RlOnVuLENvbXBvbmVudDphLFB1cmVDb21wb25lbnQ6RSxtZW1vOmcsZm9yd2FyZFJlZjp4LGZsdXNoU3luYzpsbix1bnN0YWJsZV9iYXRjaGVkVXBkYXRlczpvbixTdHJpY3RNb2RlOmQsU3VzcGVuc2U6TCxTdXNwZW5zZUxpc3Q6TSxsYXp5OkYsX19TRUNSRVRfSU5URVJOQUxTX0RPX05PVF9VU0VfT1JfWU9VX1dJTExfQkVfRklSRUQ6UX07ZXhwb3J0e1ggYXMgdmVyc2lvbixrIGFzIENoaWxkcmVuLHogYXMgcmVuZGVyLEIgYXMgaHlkcmF0ZSxybiBhcyB1bm1vdW50Q29tcG9uZW50QXROb2RlLFcgYXMgY3JlYXRlUG9ydGFsLG5uIGFzIGNyZWF0ZUZhY3RvcnksZW4gYXMgY2xvbmVFbGVtZW50LHRuIGFzIGlzVmFsaWRFbGVtZW50LHVuIGFzIGZpbmRET01Ob2RlLEUgYXMgUHVyZUNvbXBvbmVudCxnIGFzIG1lbW8seCBhcyBmb3J3YXJkUmVmLGxuIGFzIGZsdXNoU3luYyxvbiBhcyB1bnN0YWJsZV9iYXRjaGVkVXBkYXRlcyxmbiBhcyBTdHJpY3RNb2RlLEwgYXMgU3VzcGVuc2UsTSBhcyBTdXNwZW5zZUxpc3QsRiBhcyBsYXp5LFEgYXMgX19TRUNSRVRfSU5URVJOQUxTX0RPX05PVF9VU0VfT1JfWU9VX1dJTExfQkVfRklSRUR9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y29tcGF0Lm1vZHVsZS5qcy5tYXBcbiIsImltcG9ydCB7IGNyZWF0ZUVsZW1lbnQsIEZyYWdtZW50IH0gZnJvbSBcInByZWFjdFwiO1xyXG5leHBvcnQgZnVuY3Rpb24gdXNlTWVyZ2VkQ2hpbGRyZW4obGhzUHJvcHMsIHJoc1Byb3BzKSB7XHJcbiAgICBjb25zdCBsaHMgPSBsaHNQcm9wcz8uY2hpbGRyZW47XHJcbiAgICBjb25zdCByaHMgPSByaHNQcm9wcz8uY2hpbGRyZW47XHJcbiAgICBpZiAobGhzID09IG51bGwgJiYgcmhzID09IG51bGwpIHtcclxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAobGhzID09IG51bGwpIHtcclxuICAgICAgICByZXR1cm4gcmhzO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAocmhzID09IG51bGwpIHtcclxuICAgICAgICByZXR1cm4gbGhzO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgbGV0IHJldCA9IGNyZWF0ZUVsZW1lbnQoRnJhZ21lbnQsIHt9LCBsaHMsIHJocyk7XHJcbiAgICAgICAgcmV0dXJuIHJldDtcclxuICAgIH1cclxufVxyXG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2UtbWVyZ2VkLWNoaWxkcmVuLmpzLm1hcCIsImZ1bmN0aW9uIHRvVmFsKG1peCkge1xuXHR2YXIgaywgeSwgc3RyPScnO1xuXG5cdGlmICh0eXBlb2YgbWl4ID09PSAnc3RyaW5nJyB8fCB0eXBlb2YgbWl4ID09PSAnbnVtYmVyJykge1xuXHRcdHN0ciArPSBtaXg7XG5cdH0gZWxzZSBpZiAodHlwZW9mIG1peCA9PT0gJ29iamVjdCcpIHtcblx0XHRpZiAoQXJyYXkuaXNBcnJheShtaXgpKSB7XG5cdFx0XHRmb3IgKGs9MDsgayA8IG1peC5sZW5ndGg7IGsrKykge1xuXHRcdFx0XHRpZiAobWl4W2tdKSB7XG5cdFx0XHRcdFx0aWYgKHkgPSB0b1ZhbChtaXhba10pKSB7XG5cdFx0XHRcdFx0XHRzdHIgJiYgKHN0ciArPSAnICcpO1xuXHRcdFx0XHRcdFx0c3RyICs9IHk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdGZvciAoayBpbiBtaXgpIHtcblx0XHRcdFx0aWYgKG1peFtrXSkge1xuXHRcdFx0XHRcdHN0ciAmJiAoc3RyICs9ICcgJyk7XG5cdFx0XHRcdFx0c3RyICs9IGs7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gc3RyO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XG5cdHZhciBpPTAsIHRtcCwgeCwgc3RyPScnO1xuXHR3aGlsZSAoaSA8IGFyZ3VtZW50cy5sZW5ndGgpIHtcblx0XHRpZiAodG1wID0gYXJndW1lbnRzW2krK10pIHtcblx0XHRcdGlmICh4ID0gdG9WYWwodG1wKSkge1xuXHRcdFx0XHRzdHIgJiYgKHN0ciArPSAnICcpO1xuXHRcdFx0XHRzdHIgKz0geFxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXHRyZXR1cm4gc3RyO1xufVxuIiwiaW1wb3J0IHsgZGVmYXVsdCBhcyBjbHN4IH0gZnJvbSBcImNsc3hcIjtcclxuLyoqXHJcbiAqIEdpdmVuIHR3byBzZXRzIG9mIHByb3BzLCBtZXJnZXMgdGhlaXIgYGNsYXNzYCBhbmQgYGNsYXNzTmFtZWAgcHJvcGVydGllcy5cclxuICogRHVwbGljYXRlIGNsYXNzZXMgYXJlIHJlbW92ZWQgKG9yZGVyIGRvZXNuJ3QgbWF0dGVyIGFueXdheSkuXHJcbiAqXHJcbiAqIEBwYXJhbSBsaHMgQ2xhc3NlcyBvZiB0aGUgZmlyc3QgY29tcG9uZW50XHJcbiAqIEBwYXJhbSByaHMgQ2xhc3NlcyBvZiB0aGUgc2Vjb25kIGNvbXBvbmVudFxyXG4gKiBAcmV0dXJucyBBIHN0cmluZyByZXByZXNlbnRpbmcgYWxsIGNvbWJpbmVkIGNsYXNzZXMgZnJvbSBib3RoIGFyZ3VtZW50cy5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiB1c2VNZXJnZWRDbGFzc2VzKGxocywgcmhzKSB7XHJcbiAgICAvLyBOb3RlOiBGb3IgdGhlIHNha2Ugb2YgZm9yd2FyZCBjb21wYXRpYmlsaXR5LCB0aGlzIGZ1bmN0aW9uIGlzIGxhYmVsbGVkIGFzXHJcbiAgICAvLyBhIGhvb2ssIGJ1dCBhcyBpdCB1c2VzIG5vIG90aGVyIGhvb2tzIGl0IHRlY2huaWNhbGx5IGlzbid0IG9uZS5cclxuICAgIHJldHVybiBtZXJnZUNsYXNzZXMobGhzLCByaHMpO1xyXG59XHJcbmZ1bmN0aW9uIG1lcmdlQ2xhc3NlcyhsaHMsIHJocykge1xyXG4gICAgY29uc3QgbGhzQ2xhc3MgPSBsaHM/LmNsYXNzO1xyXG4gICAgY29uc3QgbGhzQ2xhc3NOYW1lID0gbGhzPy5jbGFzc05hbWU7XHJcbiAgICBjb25zdCByaHNDbGFzcyA9IHJocz8uY2xhc3M7XHJcbiAgICBjb25zdCByaHNDbGFzc05hbWUgPSByaHM/LmNsYXNzTmFtZTtcclxuICAgIGlmIChsaHNDbGFzcyB8fCByaHNDbGFzcyB8fCBsaHNDbGFzc05hbWUgfHwgcmhzQ2xhc3NOYW1lKSB7XHJcbiAgICAgICAgbGV0IGxoc0NsYXNzZXMgPSBjbHN4KGxoc0NsYXNzLCBsaHNDbGFzc05hbWUpLnNwbGl0KFwiIFwiKTtcclxuICAgICAgICBsZXQgcmhzQ2xhc3NlcyA9IGNsc3gocmhzQ2xhc3MsIHJoc0NsYXNzTmFtZSkuc3BsaXQoXCIgXCIpO1xyXG4gICAgICAgIGxldCBhbGxDbGFzc2VzID0gbmV3IFNldChbLi4uQXJyYXkuZnJvbShsaHNDbGFzc2VzKSwgLi4uQXJyYXkuZnJvbShyaHNDbGFzc2VzKV0pO1xyXG4gICAgICAgIHJldHVybiBBcnJheS5mcm9tKGFsbENsYXNzZXMpLmpvaW4oXCIgXCIpO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgIH1cclxufVxyXG5mdW5jdGlvbiB0eXBldGVzdCgpIHtcclxuICAgIGNvbnN0IGMgPSBbXHJcbiAgICAgICAgdXNlTWVyZ2VkQ2xhc3Nlcyh1bmRlZmluZWQsIHVuZGVmaW5lZCksXHJcbiAgICAgICAgdXNlTWVyZ2VkQ2xhc3Nlcyh7fSwgdW5kZWZpbmVkKSxcclxuICAgICAgICB1c2VNZXJnZWRDbGFzc2VzKHVuZGVmaW5lZCwge30pLFxyXG4gICAgICAgIHVzZU1lcmdlZENsYXNzZXMoe30sIHt9KSxcclxuICAgICAgICB1c2VNZXJnZWRDbGFzc2VzKHsgY2xhc3M6IFwic3RyaW5nXCIgfSwge30pLFxyXG4gICAgICAgIHVzZU1lcmdlZENsYXNzZXMoeyBjbGFzczogXCJzdHJpbmdcIiB9LCB7IGNsYXNzOiB1bmRlZmluZWQgfSksXHJcbiAgICAgICAgdXNlTWVyZ2VkQ2xhc3Nlcyh7IGNsYXNzOiB1bmRlZmluZWQgfSwgeyBjbGFzczogXCJzdHJpbmdcIiB9KSxcclxuICAgICAgICB1c2VNZXJnZWRDbGFzc2VzKHsgY2xhc3NOYW1lOiBcInN0cmluZ1wiIH0sIHsgY2xhc3NOYW1lOiB1bmRlZmluZWQgfSksXHJcbiAgICAgICAgdXNlTWVyZ2VkQ2xhc3Nlcyh7IGNsYXNzTmFtZTogdW5kZWZpbmVkIH0sIHsgY2xhc3NOYW1lOiBcInN0cmluZ1wiIH0pLFxyXG4gICAgICAgIHVzZU1lcmdlZENsYXNzZXMoeyBjbGFzczogXCJzdHJpbmdcIiB9LCB7IGNsYXNzTmFtZTogdW5kZWZpbmVkIH0pLFxyXG4gICAgICAgIHVzZU1lcmdlZENsYXNzZXMoeyBjbGFzc05hbWU6IHVuZGVmaW5lZCB9LCB7IGNsYXNzOiBcInN0cmluZ1wiIH0pLFxyXG4gICAgICAgIHVzZU1lcmdlZENsYXNzZXMoeyBjbGFzc05hbWU6IFwic3RyaW5nXCIgfSwgeyBjbGFzczogdW5kZWZpbmVkIH0pLFxyXG4gICAgICAgIHVzZU1lcmdlZENsYXNzZXMoeyBjbGFzczogdW5kZWZpbmVkIH0sIHsgY2xhc3NOYW1lOiBcInN0cmluZ1wiIH0pLFxyXG4gICAgXTtcclxuICAgIC8vLyBAdHMtZXhwZWN0LWVycm9yXHJcbiAgICBjWzBdLmNvbmNhdChcIlwiKTtcclxuICAgIC8vLyBAdHMtZXhwZWN0LWVycm9yXHJcbiAgICBjWzFdLmNvbmNhdChcIlwiKTtcclxuICAgIC8vLyBAdHMtZXhwZWN0LWVycm9yXHJcbiAgICBjWzJdLmNvbmNhdChcIlwiKTtcclxuICAgIC8vLyBAdHMtZXhwZWN0LWVycm9yXHJcbiAgICBjWzNdLmNvbmNhdChcIlwiKTtcclxuICAgIGNbNF0uY29uY2F0KFwiXCIpO1xyXG4gICAgY1s1XS5jb25jYXQoXCJcIik7XHJcbiAgICBjWzZdLmNvbmNhdChcIlwiKTtcclxuICAgIGNbN10uY29uY2F0KFwiXCIpO1xyXG4gICAgY1s4XS5jb25jYXQoXCJcIik7XHJcbiAgICBjWzldLmNvbmNhdChcIlwiKTtcclxuICAgIGNbMTBdLmNvbmNhdChcIlwiKTtcclxuICAgIGNbMTFdLmNvbmNhdChcIlwiKTtcclxuICAgIGNbMTJdLmNvbmNhdChcIlwiKTtcclxuICAgIC8vLyBAdHMtZXhwZWN0LWVycm9yXHJcbiAgICBjWzEzXTtcclxufVxyXG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2UtbWVyZ2VkLWNsYXNzZXMuanMubWFwIiwiaW1wb3J0IHsgdXNlQ2FsbGJhY2sgfSBmcm9tIFwicHJlYWN0L2hvb2tzXCI7XHJcbmZ1bmN0aW9uIHByb2Nlc3NSZWYoaW5zdGFuY2UsIHJlZikge1xyXG4gICAgaWYgKHR5cGVvZiByZWYgPT09IFwiZnVuY3Rpb25cIikge1xyXG4gICAgICAgIHJlZihpbnN0YW5jZSk7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChyZWYgIT0gbnVsbCkge1xyXG4gICAgICAgIHJlZi5jdXJyZW50ID0gaW5zdGFuY2U7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICBkZWJ1Z2dlcjsgLy8gSW50ZW50aW9uYWxcclxuICAgICAgICBjb25zb2xlLmFzc2VydChmYWxzZSwgXCJVbmtub3duIHJlZiB0eXBlIGZvdW5kIHRoYXQgd2FzIG5laXRoZXIgYSBSZWZDYWxsYmFjayBub3IgYSBSZWZPYmplY3RcIik7XHJcbiAgICB9XHJcbn1cclxuLyoqXHJcbiAqIENvbWJpbmVzIHR3byByZWZzIGludG8gb25lLiBUaGlzIGFsbG93cyBhIGNvbXBvbmVudCB0byBib3RoIHVzZSBpdHMgb3duIHJlZiAqYW5kKiBmb3J3YXJkIGEgcmVmIHRoYXQgd2FzIGdpdmVuIHRvIGl0LlxyXG4gKiBAcGFyYW0gbGhzXHJcbiAqIEBwYXJhbSByaHNcclxuICogQHJldHVybnNcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiB1c2VNZXJnZWRSZWZzKCkge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChsaHNQcm9wcywgcmhzUHJvcHMpIHtcclxuICAgICAgICBjb25zdCBsaHMgPSBsaHNQcm9wcz8ucmVmO1xyXG4gICAgICAgIGNvbnN0IHJocyA9IHJoc1Byb3BzPy5yZWY7XHJcbiAgICAgICAgbGV0IGNvbWJpbmVkID0gdXNlQ2FsbGJhY2soKGN1cnJlbnQpID0+IHtcclxuICAgICAgICAgICAgcHJvY2Vzc1JlZihjdXJyZW50LCBsaHMpO1xyXG4gICAgICAgICAgICBwcm9jZXNzUmVmKGN1cnJlbnQsIHJocyk7XHJcbiAgICAgICAgfSwgW2xocywgcmhzXSk7XHJcbiAgICAgICAgaWYgKGxocyA9PSBudWxsICYmIHJocyA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGxocyA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHJldHVybiByaHM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHJocyA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBsaHM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gY29tYmluZWQ7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufVxyXG4vKlxyXG5mdW5jdGlvbiB0eXBldGVzdDxQIGV4dGVuZHMgaC5KU1guSFRNTEF0dHJpYnV0ZXM8SFRNTElucHV0RWxlbWVudD4+KHByb3BzOiBQKSB7XHJcblxyXG4gICAgY29uc3QgcmVmOiBSZWZPYmplY3Q8SFRNTElucHV0RWxlbWVudD4gPSB1c2VSZWY8SFRNTElucHV0RWxlbWVudD4obnVsbCk7XHJcblxyXG4gICAgZnVuY3Rpb24gYWNjZXB0c1JlZihyZWY6IFJlZjxhbnk+KSB7IH1cclxuICAgIGZ1bmN0aW9uIGFjY2VwdHNPcHRpb25hbFJlZihyZWY6IFJlZjxhbnk+IHwgdW5kZWZpbmVkKSB7IH1cclxuXHJcbiAgICBjb25zdCBjID0gW1xyXG4gICAgICAgIHVzZU1lcmdlZFJlZnM8SFRNTElucHV0RWxlbWVudD4oKSh1bmRlZmluZWQsIHVuZGVmaW5lZCksXHJcbiAgICAgICAgdXNlTWVyZ2VkUmVmczxIVE1MSW5wdXRFbGVtZW50PigpKHt9LCB1bmRlZmluZWQpLFxyXG4gICAgICAgIHVzZU1lcmdlZFJlZnM8SFRNTElucHV0RWxlbWVudD4oKShwcm9wcywgdW5kZWZpbmVkKSxcclxuICAgICAgICB1c2VNZXJnZWRSZWZzPEhUTUxJbnB1dEVsZW1lbnQ+KCkodW5kZWZpbmVkLCBwcm9wcyksXHJcbiAgICAgICAgdXNlTWVyZ2VkUmVmczxIVE1MSW5wdXRFbGVtZW50PigpKHByb3BzLCBwcm9wcyksXHJcbiAgICAgICAgdXNlTWVyZ2VkUmVmczxIVE1MSW5wdXRFbGVtZW50PigpKHsgcmVmIH0sIHByb3BzKSxcclxuICAgICAgICB1c2VNZXJnZWRSZWZzPEhUTUxJbnB1dEVsZW1lbnQ+KCkoeyByZWYgfSwgeyByZWY6IHVuZGVmaW5lZCB9KSxcclxuICAgICAgICB1c2VNZXJnZWRSZWZzPEhUTUxJbnB1dEVsZW1lbnQ+KCkoeyByZWY6IHVuZGVmaW5lZCB9LCB7IHJlZiB9KSxcclxuICAgICAgICB1c2VNZXJnZWRSZWZzPEhUTUxJbnB1dEVsZW1lbnQ+KCkoeyByZWYgfSwgeyByZWYgfSksXHJcbiAgICBdIGFzIGNvbnN0O1xyXG5cclxuICAgIC8vLyBAdHMtZXhwZWN0LWVycm9yXHJcbiAgICBhY2NlcHRzUmVmKGNbMF0pO1xyXG4gICAgLy8vIEB0cy1leHBlY3QtZXJyb3JcclxuICAgIGFjY2VwdHNSZWYoY1sxXSk7XHJcblxyXG4gICAgYWNjZXB0c09wdGlvbmFsUmVmKGNbMl0pO1xyXG4gICAgYWNjZXB0c09wdGlvbmFsUmVmKGNbM10pO1xyXG4gICAgYWNjZXB0c09wdGlvbmFsUmVmKGNbNF0pO1xyXG5cclxuICAgIC8vLyBAdHMtZXhwZWN0LWVycm9yIFRPRE9cclxuICAgIGFjY2VwdHNSZWYoY1s1XSk7XHJcbiAgICBhY2NlcHRzUmVmKGNbNl0pO1xyXG4gICAgYWNjZXB0c1JlZihjWzddKTtcclxuICAgIGFjY2VwdHNSZWYoY1s4XSk7XHJcbn1cclxuKi9cclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXNlLW1lcmdlZC1yZWZzLmpzLm1hcCIsImZ1bmN0aW9uIHN0eWxlU3RyaW5nVG9PYmplY3Qoc3R5bGUpIHtcclxuICAgIC8vIFRPRE86IFRoaXMgc3Vja3MgRDpcclxuICAgIHJldHVybiBPYmplY3QuZnJvbUVudHJpZXMoc3R5bGUuc3BsaXQoXCI7XCIpLm1hcChzdGF0ZW1lbnQgPT4gc3RhdGVtZW50LnNwbGl0KFwiOlwiKSkpO1xyXG59XHJcbi8qKlxyXG4gKiBNZXJnZXMgdHdvIHN0eWxlIG9iamVjdHMsIHJldHVybmluZyB0aGUgcmVzdWx0LlxyXG4gKlxyXG4gKiBAcGFyYW0gc3R5bGUgVGhlIHVzZXItZ2l2ZW4gc3R5bGUgcHJvcCBmb3IgdGhpcyBjb21wb25lbnRcclxuICogQHBhcmFtIG9iaiBUaGUgQ1NTIHByb3BlcnRpZXMgeW91IHdhbnQgYWRkZWQgdG8gdGhlIHVzZXItZ2l2ZW4gc3R5bGVcclxuICogQHJldHVybnMgQSBDU1Mgb2JqZWN0IGNvbnRhaW5pbmcgdGhlIHByb3BlcnRpZXMgb2YgYm90aCBvYmplY3RzLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHVzZU1lcmdlZFN0eWxlcyhsaHMsIHJocykge1xyXG4gICAgLy8gRWFzeSBjYXNlLCB3aGVuIHRoZXJlIGFyZSBubyBzdHlsZXMgdG8gbWVyZ2UgcmV0dXJuIG5vdGhpbmcuXHJcbiAgICBpZiAoIWxocz8uc3R5bGUgJiYgIXJocz8uc3R5bGUpXHJcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgIGlmICh0eXBlb2YgbGhzICE9IHR5cGVvZiByaHMpIHtcclxuICAgICAgICAvLyBFYXN5IGNhc2VzLCB3aGVuIG9uZSBpcyBudWxsIGFuZCB0aGUgb3RoZXIgaXNuJ3QuXHJcbiAgICAgICAgaWYgKGxocz8uc3R5bGUgJiYgIXJocz8uc3R5bGUpXHJcbiAgICAgICAgICAgIHJldHVybiBsaHMuc3R5bGU7XHJcbiAgICAgICAgaWYgKCFsaHM/LnN0eWxlICYmIHJocz8uc3R5bGUpXHJcbiAgICAgICAgICAgIHJldHVybiByaHMuc3R5bGU7XHJcbiAgICAgICAgLy8gVGhleSdyZSBib3RoIG5vbi1udWxsIGJ1dCBkaWZmZXJlbnQgdHlwZXMuXHJcbiAgICAgICAgLy8gQ29udmVydCB0aGUgc3RyaW5nIHR5cGUgdG8gYW4gb2JqZWN0IGJhZyB0eXBlIGFuZCBydW4gaXQgYWdhaW4uXHJcbiAgICAgICAgaWYgKGxocz8uc3R5bGUgJiYgcmhzPy5zdHlsZSkge1xyXG4gICAgICAgICAgICAvLyAodXNlTWVyZ2VkU3R5bGVzIGlzbid0IGEgdHJ1ZSBob29rIC0tIHRoaXMgaXNuJ3QgYSB2aW9sYXRpb24pXHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgbGhzPy5zdHlsZSA9PSBcInN0cmluZ1wiKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHVzZU1lcmdlZFN0eWxlcyh7IHN0eWxlOiBzdHlsZVN0cmluZ1RvT2JqZWN0KGxocz8uc3R5bGUpIH0sIHJocyk7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgcmhzPy5zdHlsZSA9PSBcInN0cmluZ1wiKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHVzZU1lcmdlZFN0eWxlcyhsaHMsIHsgc3R5bGU6IHN0eWxlU3RyaW5nVG9PYmplY3QocmhzPy5zdHlsZSkgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIExvZ2ljPz8/XHJcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgIH1cclxuICAgIC8vIFRoZXkncmUgYm90aCBzdHJpbmdzLCBqdXN0IGNvbmNhdGVuYXRlIHRoZW0uXHJcbiAgICBpZiAodHlwZW9mIGxocz8uc3R5bGUgPT0gXCJzdHJpbmdcIikge1xyXG4gICAgICAgIHJldHVybiBgJHtsaHMuc3R5bGV9OyR7cmhzPy5zdHlsZSA/PyBcIlwifWA7XHJcbiAgICB9XHJcbiAgICAvLyBUaGV5J3JlIGJvdGggb2JqZWN0cywganVzdCBtZXJnZSB0aGVtLlxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICAuLi4obGhzPy5zdHlsZSA/PyB7fSksXHJcbiAgICAgICAgLi4uKHJocz8uc3R5bGUgPz8ge30pXHJcbiAgICB9O1xyXG59XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZS1tZXJnZWQtc3R5bGVzLmpzLm1hcCIsImltcG9ydCB7IHVzZU1lcmdlZENoaWxkcmVuIH0gZnJvbSBcIi4vdXNlLW1lcmdlZC1jaGlsZHJlblwiO1xyXG5pbXBvcnQgeyB1c2VNZXJnZWRDbGFzc2VzIH0gZnJvbSBcIi4vdXNlLW1lcmdlZC1jbGFzc2VzXCI7XHJcbmltcG9ydCB7IHVzZU1lcmdlZFJlZnMgfSBmcm9tIFwiLi91c2UtbWVyZ2VkLXJlZnNcIjtcclxuaW1wb3J0IHsgdXNlTWVyZ2VkU3R5bGVzIH0gZnJvbSBcIi4vdXNlLW1lcmdlZC1zdHlsZXNcIjtcclxubGV0IGxvZyA9IChzdHIpID0+IHsgZGVidWdnZXI7IGNvbnNvbGUud2FybihgVHJ5aW5nIHRvIG1lcmdlIHR3byBwcm9wcyB3aXRoIHRoZSBzYW1lIG5hbWU6ICR7c3RyfWApOyAvKiBJbnRlbnRpb25hbCAqLyB9O1xyXG5leHBvcnQgZnVuY3Rpb24gZW5hYmxlTG9nZ2luZ1Byb3BDb25mbGljdHMobG9nMikge1xyXG4gICAgbG9nID0gbG9nMjtcclxufVxyXG4vKipcclxuICogR2l2ZW4gdHdvIHNldHMgb2YgcHJvcHMsIG1lcmdlcyB0aGVtIGFuZCByZXR1cm5zIHRoZSByZXN1bHQuXHJcbiAqXHJcbiAqIFRoZSBob29rIGlzIGF3YXJlIG9mIGFuZCBjYW4gaW50ZWxsaWdlbnRseSBtZXJnZSBgY2xhc3NOYW1lYCwgYGNsYXNzYCwgYHN0eWxlYCwgYHJlZmAsIGFuZCBhbGwgZXZlbnQgaGFuZGxlcnMuXHJcbiAqIEBwYXJhbSBsaHMyXHJcbiAqIEBwYXJhbSByaHMyXHJcbiAqIEByZXR1cm5zXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gdXNlTWVyZ2VkUHJvcHMoKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKGxoczIsIHJoczIpIHtcclxuICAgICAgICAvLyBGaXJzdCwgcHV0IGluIGFsbCB0aGUgcHJvcGVydGllcyB0aGF0IGFyZSBlYXN5IHRvIHJlYXNvbiBhYm91dFxyXG4gICAgICAgIC8vIGFuZCBhbGwgbGhzIHByb3BzLiBXZSdyZSBnb2luZyB0byBtZXJnZSBpbiByaHMganVzdCBhZnRlci5cclxuICAgICAgICBjb25zdCB7IGNoaWxkcmVuOiBsaHNDaGlsZHJlbiwgY2xhc3M6IGxoc0NsYXNzLCBjbGFzc05hbWU6IGxoc0NsYXNzTmFtZSwgc3R5bGU6IGxoc1N0eWxlLCByZWY6IGxoc1JlZiwgLi4ubGhzIH0gPSBsaHMyO1xyXG4gICAgICAgIGNvbnN0IHsgY2hpbGRyZW46IHJoc0NoaWxkcmVuLCBjbGFzczogcmhzQ2xhc3MsIGNsYXNzTmFtZTogcmhzQ2xhc3NOYW1lLCBzdHlsZTogcmhzU3R5bGUsIHJlZjogcmhzUmVmLCAuLi5yaHMgfSA9IHJoczI7XHJcbiAgICAgICAgbGV0IHJldCA9IHtcclxuICAgICAgICAgICAgLi4ubGhzLFxyXG4gICAgICAgICAgICByZWY6IHVzZU1lcmdlZFJlZnMoKShsaHMyLCByaHMyKSxcclxuICAgICAgICAgICAgc3R5bGU6IHVzZU1lcmdlZFN0eWxlcyhsaHMyLCByaHMyKSxcclxuICAgICAgICAgICAgY2xhc3NOYW1lOiB1c2VNZXJnZWRDbGFzc2VzKGxoczIsIHJoczIpLFxyXG4gICAgICAgICAgICBjaGlsZHJlbjogdXNlTWVyZ2VkQ2hpbGRyZW4obGhzMiwgcmhzMilcclxuICAgICAgICB9O1xyXG4gICAgICAgIGlmIChyZXQucmVmID09PSB1bmRlZmluZWQpXHJcbiAgICAgICAgICAgIGRlbGV0ZSByZXQucmVmO1xyXG4gICAgICAgIGlmIChyZXQuc3R5bGUgPT09IHVuZGVmaW5lZClcclxuICAgICAgICAgICAgZGVsZXRlIHJldC5zdHlsZTtcclxuICAgICAgICBpZiAocmV0LmNsYXNzTmFtZSA9PT0gdW5kZWZpbmVkKVxyXG4gICAgICAgICAgICBkZWxldGUgcmV0LmNsYXNzTmFtZTtcclxuICAgICAgICBpZiAocmV0LmNoaWxkcmVuID09PSB1bmRlZmluZWQpXHJcbiAgICAgICAgICAgIGRlbGV0ZSByZXQuY2hpbGRyZW47XHJcbiAgICAgICAgLy8gTm93LCBkbyAqZXZlcnl0aGluZyogZWxzZVxyXG4gICAgICAgIC8vIE1lcmdlIGV2ZXJ5IHJlbWFpbmluZyBleGlzdGluZyBlbnRyeSBpbiBsaHMgd2l0aCB3aGF0IHdlJ3ZlIGFscmVhZHkgcHV0IGluIHJldC5cclxuICAgICAgICAvL2NvbnN0IGxoc0VudHJpZXMgPSBPYmplY3QuZW50cmllcyhsaHMpIGFzIFtrZXlvZiBULCBUW2tleW9mIFRdXVtdO1xyXG4gICAgICAgIGNvbnN0IHJoc0VudHJpZXMgPSBPYmplY3QuZW50cmllcyhyaHMpO1xyXG4gICAgICAgIGZvciAoY29uc3QgW3Joc0tleSwgcmhzVmFsdWVdIG9mIHJoc0VudHJpZXMpIHtcclxuICAgICAgICAgICAgY29uc3QgbGhzVmFsdWUgPSBsaHNbcmhzS2V5XTtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBsaHNWYWx1ZSA9PT0gXCJmdW5jdGlvblwiIHx8IHR5cGVvZiByaHNWYWx1ZSA9PT0gXCJmdW5jdGlvblwiKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBUaGV5J3JlIGJvdGggZnVuY3Rpb25zIHRoYXQgY2FuIGJlIG1lcmdlZCAob3Igb25lJ3MgYSBmdW5jdGlvbiBhbmQgdGhlIG90aGVyJ3MgbnVsbCkuXHJcbiAgICAgICAgICAgICAgICAvLyBOb3QgYW4gKmVhc3kqIGNhc2UsIGJ1dCBhIHdlbGwtZGVmaW5lZCBvbmUuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBtZXJnZWQgPSBtZXJnZUZ1bmN0aW9ucyhsaHNWYWx1ZSwgcmhzVmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgcmV0W3Joc0tleV0gPSBtZXJnZWQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAvLyBVaC4uLndlJ3JlIGhlcmUgYmVjYXVzZSBvbmUgb2YgdGhlbSdzIG51bGwsIHJpZ2h0P1xyXG4gICAgICAgICAgICAgICAgaWYgKGxoc1ZhbHVlID09IG51bGwgJiYgcmhzVmFsdWUgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChyaHNWYWx1ZSA9PT0gbnVsbCAmJiBsaHNWYWx1ZSA9PT0gdW5kZWZpbmVkKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXRbcmhzS2V5XSA9IHJoc1ZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0W3Joc0tleV0gPSBsaHNWYWx1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChsaHNWYWx1ZSA9PSBudWxsKVxyXG4gICAgICAgICAgICAgICAgICAgIHJldFtyaHNLZXldID0gcmhzVmFsdWU7XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChyaHNWYWx1ZSA9PSBudWxsKVxyXG4gICAgICAgICAgICAgICAgICAgIHJldFtyaHNLZXldID0gbGhzVmFsdWU7XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChyaHNWYWx1ZSA9PSBsaHNWYWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIEkgbWVhbiwgdGhleSdyZSB0aGUgc2FtZSB2YWx1ZSBhdCBsZWFzdFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIHNvIHdlIGRvbid0IG5lZWQgdG8gZG8gYW55dGhpbmcuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gTm90IHJlYWxseSBpZGVhbCB0aG91Z2guXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBVZ2guXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gTm8gZ29vZCBzdHJhdGVnaWVzIGhlcmUsIGp1c3QgbG9nIGl0IGlmIHJlcXVlc3RlZFxyXG4gICAgICAgICAgICAgICAgICAgIGxvZz8uKGBDb3VsZCBub3QgbWVyZ2UgaW5jb21wYXRpYmxlIHByb3AgXCIke3Joc0tleX1cIiAodHlwZTogJHt0eXBlb2YgcmhzVmFsdWV9LCB2YWx1ZXM6IFske2xoc1ZhbHVlfSwgJHtyaHNWYWx1ZX1dKWApO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldFtyaHNLZXldID0gcmhzVmFsdWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJldDtcclxuICAgIH07XHJcbn1cclxuZnVuY3Rpb24gbWVyZ2VGdW5jdGlvbnMobGhzLCByaHMpIHtcclxuICAgIGlmICghbGhzKVxyXG4gICAgICAgIHJldHVybiByaHM7XHJcbiAgICBpZiAoIXJocylcclxuICAgICAgICByZXR1cm4gbGhzO1xyXG4gICAgcmV0dXJuICguLi5hcmdzKSA9PiB7XHJcbiAgICAgICAgbGV0IGx2ID0gbGhzKC4uLmFyZ3MpO1xyXG4gICAgICAgIGxldCBydiA9IHJocyguLi5hcmdzKTtcclxuICAgICAgICBpZiAobHYgaW5zdGFuY2VvZiBQcm9taXNlIHx8IHJ2IGluc3RhbmNlb2YgUHJvbWlzZSlcclxuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKFtsdiwgcnZdKTtcclxuICAgIH07XHJcbn1cclxuLypcclxuZnVuY3Rpb24gdGVzdDxQIGV4dGVuZHMgaC5KU1guSFRNTEF0dHJpYnV0ZXM8SFRNTElucHV0RWxlbWVudD4+KHByb3BzOiBQKSB7XHJcblxyXG4gICAgY29uc3QgaWQwOiBHZW5lcmljR2V0PHt9LCBcImlkXCIsIHN0cmluZz4gPSBcIlwiO1xyXG4gICAgY29uc3QgaWQzOiBHZW5lcmljR2V0PHsgaWQ6IHVuZGVmaW5lZCB9LCBcImlkXCIsIHN0cmluZz4gPSB1bmRlZmluZWQ7XHJcbiAgICBjb25zdCBpZDQ6IEdlbmVyaWNHZXQ8eyBpZDogdW5kZWZpbmVkIH0sIFwiaWRcIiwgc3RyaW5nPiA9IHVuZGVmaW5lZDtcclxuICAgIGNvbnN0IGlkNTogR2VuZXJpY0dldDx7IGlkOiB1bmRlZmluZWQgfSwgXCJpZFwiLCBzdHJpbmc+ID0gdW5kZWZpbmVkO1xyXG4gICAgY29uc3QgaWQ2OiBHZW5lcmljR2V0PHsgaWQ6IHVuZGVmaW5lZCB9LCBcImlkXCIsIHN0cmluZz4gPSB1bmRlZmluZWQ7XHJcbiAgICAvL2NvbnN0IGlkMjogWmlwU2luZ2xlPHN0cmluZyB8IHVuZGVmaW5lZCwgc3RyaW5nIHwgdW5kZWZpbmVkPiA9IHVuZGVmaW5lZDtcclxuICAgIGNvbnN0IGlkMTogWmlwT2JqZWN0PHsgaWQ6IHVuZGVmaW5lZCB9LCB7IGlkOiBzdHJpbmcgfT4gPSB7IGlkOiB1bmRlZmluZWQgfTtcclxuXHJcbiAgICB0eXBlIE0xID0gR2VuZXJpY0dldDxQLCBcInN0eWxlXCIsIHN0cmluZz47XHJcbiAgICB0eXBlIE0yID0gR2VuZXJpY0dldDx7fSwgXCJzdHlsZVwiLCBzdHJpbmc+O1xyXG4gICAgY29uc3QgbTE6IE0xID0gXCJcIjtcclxuICAgIGNvbnN0IG0yOiBNMSA9IHVuZGVmaW5lZDtcclxuICAgIC8vLyBAdHMtZXhwZWN0LWVycm9yICAgIEJlY2F1c2UgbnVtYmVyIGlzbid0IGFzc2lnbmFibGUgdG8gc3RyaW5nXHJcbiAgICBjb25zdCBtMzogTTEgPSAwO1xyXG5cclxuICAgIGNvbnN0IG00OiBNMiA9IFwiXCI7XHJcbiAgICBjb25zdCBtNTogTTIgPSB1bmRlZmluZWQ7XHJcbiAgICAvLy8gQHRzLWV4cGVjdC1lcnJvciAgICBCZWNhdXNlIG51bWJlciBpc24ndCBhc3NpZ25hYmxlIHRvIHN0cmluZ1xyXG4gICAgY29uc3QgbTY6IE0yID0gMDtcclxuXHJcbiAgICBjb25zdCBwMTogTWVyZ2VkUHJvcHM8SFRNTElucHV0RWxlbWVudCwge30sIHsgaWQ6IHN0cmluZyB9PiA9IHVzZU1lcmdlZFByb3BzPEhUTUxJbnB1dEVsZW1lbnQ+KCkoe30sIHsgaWQ6IFwic3RyaW5nXCIgfSk7XHJcbiAgICBjb25zdCBwMjogTWVyZ2VkUHJvcHM8SFRNTElucHV0RWxlbWVudCwgeyBpZDogdW5kZWZpbmVkIH0sIHsgaWQ6IHN0cmluZyB9PiA9IHVzZU1lcmdlZFByb3BzPEhUTUxJbnB1dEVsZW1lbnQ+KCkoeyBpZDogdW5kZWZpbmVkIH0sIHsgaWQ6IFwic3RyaW5nXCIgfSk7XHJcbiAgICBjb25zdCBwMzogTWVyZ2VkUHJvcHM8SFRNTElucHV0RWxlbWVudCwgeyBpZDogdW5kZWZpbmVkIH0sIHsgaWQ6IHVuZGVmaW5lZCB9PiA9IHVzZU1lcmdlZFByb3BzPEhUTUxJbnB1dEVsZW1lbnQ+KCkoeyBpZDogdW5kZWZpbmVkIH0sIHsgaWQ6IHVuZGVmaW5lZCB9KTtcclxuICAgIGNvbnN0IHA0OiBNZXJnZWRQcm9wczxIVE1MSW5wdXRFbGVtZW50LCB7fSwge30+ID0gdXNlTWVyZ2VkUHJvcHM8SFRNTElucHV0RWxlbWVudD4oKSh7fSwge30pO1xyXG4gICAgY29uc3QgcDUgPSB1c2VNZXJnZWRQcm9wczxIVE1MSW5wdXRFbGVtZW50PigpKHByb3BzLCB7fSk7XHJcbiAgICBjb25zdCBwNiA9IHVzZU1lcmdlZFByb3BzPEhUTUxJbnB1dEVsZW1lbnQ+KCkocHJvcHMsIHsgaWQ6IHVuZGVmaW5lZCB9KTtcclxuICAgIGNvbnN0IHA3ID0gdXNlTWVyZ2VkUHJvcHM8SFRNTElucHV0RWxlbWVudD4oKShwcm9wcywgeyBpZDogXCJzdHJpbmdcIiB9KTtcclxuXHJcblxyXG4gICAgcDEuaWQ/LmNvbmNhdChcIlwiKTtcclxuICAgIHAyLmlkPy5jb25jYXQoXCJcIik7XHJcbiAgICAvLy8gQHRzLWV4cGVjdC1lcnJvciAgICBpZCBjYW4ndCBiZSBhbnl0aGluZyBidXQgdW5kZWZpbmVkXHJcbiAgICBwMy5pZD8uY29uY2F0KFwiXCIpO1xyXG4gICAgLy8vIEB0cy1leHBlY3QtZXJyb3IgICAgaWQgY2FuJ3QgYmUgYW55dGhpbmcgYnV0IHVuZGVmaW5lZFxyXG4gICAgcDQuaWQ/LmNvbmNhdChcIlwiKTtcclxuXHJcblxyXG4gICAgcDUuaWQ/LmNvbmNhdChcIlwiKTtcclxuICAgIHA2LmlkPy5jb25jYXQoXCJcIik7XHJcbiAgICBwNy5pZD8uY29uY2F0KFwiXCIpO1xyXG5cclxuICAgIC8vLyBAdHMtZXhwZWN0LWVycm9yICAgIGlkIG11c3QgY29udGFpbiB1bmRlZmluZWRcclxuICAgIHA1LmlkLmNvbmNhdChcIlwiKTtcclxuICAgIC8vLyBAdHMtZXhwZWN0LWVycm9yICAgIGlkIG11c3QgY29udGFpbiB1bmRlZmluZWRcclxuICAgIHA2LmlkLmNvbmNhdChcIlwiKTtcclxuICAgIC8vLyBAdHMtZXhwZWN0LWVycm9yICAgIGlkIG11c3QgY29udGFpbiB1bmRlZmluZWRcclxuICAgIHA3LmlkLmNvbmNhdChcIlwiKTtcclxuXHJcblxyXG4gICAgaWYgKHA1LmFsbG93RnVsbFNjcmVlbiA9PT0gdW5kZWZpbmVkKSB7fVxyXG4gICAgZWxzZSBpZiAocDUuYWxsb3dGdWxsU2NyZWVuID09PSBmYWxzZSkge31cclxuICAgIGVsc2UgaWYgKHA1LmFsbG93RnVsbFNjcmVlbiA9PT0gdHJ1ZSkge31cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIGFjY2VwdHNOZXZlcihwNS5hbGxvd0Z1bGxTY3JlZW4pO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBpZiAocDYuYWxsb3dGdWxsU2NyZWVuID09PSB1bmRlZmluZWQpIHt9XHJcbiAgICBlbHNlIGlmIChwNi5hbGxvd0Z1bGxTY3JlZW4gPT09IGZhbHNlKSB7fVxyXG4gICAgZWxzZSBpZiAocDYuYWxsb3dGdWxsU2NyZWVuID09PSB0cnVlKSB7fVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgYWNjZXB0c05ldmVyKHA2LmFsbG93RnVsbFNjcmVlbik7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGlmIChwNy5hbGxvd0Z1bGxTY3JlZW4gPT09IHVuZGVmaW5lZCkge31cclxuICAgIGVsc2UgaWYgKHA3LmFsbG93RnVsbFNjcmVlbiA9PT0gZmFsc2UpIHt9XHJcbiAgICBlbHNlIGlmIChwNy5hbGxvd0Z1bGxTY3JlZW4gPT09IHRydWUpIHt9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICBhY2NlcHRzTmV2ZXIocDcuYWxsb3dGdWxsU2NyZWVuKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLy8gTWFrZSBzdXJlIGl0IHdvcmtzIHJlY3Vyc2l2ZWx5XHJcbiAgICBjb25zdCByMWEgPSB1c2VNZXJnZWRQcm9wczxIVE1MSW5wdXRFbGVtZW50PigpKHt9LCBwMSk7XHJcbiAgICBjb25zdCByMWIgPSB1c2VNZXJnZWRQcm9wczxIVE1MSW5wdXRFbGVtZW50PigpKHByb3BzLCBwMSk7XHJcbiAgICBjb25zdCByMmEgPSB1c2VNZXJnZWRQcm9wczxIVE1MSW5wdXRFbGVtZW50PigpKHt9LCBwMik7XHJcbiAgICBjb25zdCByMmIgPSB1c2VNZXJnZWRQcm9wczxIVE1MSW5wdXRFbGVtZW50PigpKHByb3BzLCBwMik7XHJcbiAgICBjb25zdCByM2EgPSB1c2VNZXJnZWRQcm9wczxIVE1MSW5wdXRFbGVtZW50PigpKHt9LCBwMyk7XHJcbiAgICBjb25zdCByM2IgPSB1c2VNZXJnZWRQcm9wczxIVE1MSW5wdXRFbGVtZW50PigpKHByb3BzLCBwMyk7XHJcbiAgICBjb25zdCByNGEgPSB1c2VNZXJnZWRQcm9wczxIVE1MSW5wdXRFbGVtZW50PigpKHt9LCBwNCk7XHJcbiAgICBjb25zdCByNGIgPSB1c2VNZXJnZWRQcm9wczxIVE1MSW5wdXRFbGVtZW50PigpKHByb3BzLCBwNCk7XHJcbiAgICBjb25zdCByNWEgPSB1c2VNZXJnZWRQcm9wczxIVE1MSW5wdXRFbGVtZW50PigpKHt9LCBwNSk7XHJcbiAgICBjb25zdCByNWIgPSB1c2VNZXJnZWRQcm9wczxIVE1MSW5wdXRFbGVtZW50PigpKHByb3BzLCBwNSk7XHJcbiAgICBjb25zdCByNmEgPSB1c2VNZXJnZWRQcm9wczxIVE1MSW5wdXRFbGVtZW50PigpKHt9LCBwNik7XHJcbiAgICBjb25zdCByNmIgPSB1c2VNZXJnZWRQcm9wczxIVE1MSW5wdXRFbGVtZW50PigpKHByb3BzLCBwNik7XHJcbiAgICBjb25zdCByN2EgPSB1c2VNZXJnZWRQcm9wczxIVE1MSW5wdXRFbGVtZW50PigpKHt9LCBwNyk7XHJcbiAgICBjb25zdCByN2IgPSB1c2VNZXJnZWRQcm9wczxIVE1MSW5wdXRFbGVtZW50PigpKHByb3BzLCBwNyk7XHJcblxyXG5cclxuICAgIHIxYS5pZD8uY29uY2F0KFwiXCIpO1xyXG4gICAgcjFiLmlkPy5jb25jYXQoXCJcIik7XHJcbiAgICByMmEuaWQ/LmNvbmNhdChcIlwiKTtcclxuICAgIHIyYi5pZD8uY29uY2F0KFwiXCIpO1xyXG4gICAgLy8gQHRzLWV4cGVjdC1lcnJvciAgICBpZCBjYW4ndCBiZSBhbnl0aGluZyBidXQgdW5kZWZpbmVkXHJcbiAgICByM2EuaWQ/LmNvbmNhdChcIlwiKTtcclxuICAgIHIzYi5pZD8uY29uY2F0KFwiXCIpO1xyXG4gICAgLy8vIEB0cy1leHBlY3QtZXJyb3IgICAgaWQgY2FuJ3QgYmUgYW55dGhpbmcgYnV0IHVuZGVmaW5lZFxyXG4gICAgcjRhLmlkPy5jb25jYXQoXCJcIik7XHJcbiAgICByNGIuaWQ/LmNvbmNhdChcIlwiKTtcclxuXHJcblxyXG4gICAgcjVhLmlkPy5jb25jYXQoXCJcIik7XHJcbiAgICByNWIuaWQ/LmNvbmNhdChcIlwiKTtcclxuICAgIHI2YS5pZD8uY29uY2F0KFwiXCIpO1xyXG4gICAgcjZiLmlkPy5jb25jYXQoXCJcIik7XHJcbiAgICByN2EuaWQ/LmNvbmNhdChcIlwiKTtcclxuICAgIHI3Yi5pZD8uY29uY2F0KFwiXCIpO1xyXG5cclxuICAgIC8vLyBAdHMtZXhwZWN0LWVycm9yICAgIGlkIG11c3QgY29udGFpbiB1bmRlZmluZWRcclxuICAgIHI1YS5pZC5jb25jYXQoXCJcIik7XHJcbiAgICAvLy8gQHRzLWV4cGVjdC1lcnJvciAgICBpZCBtdXN0IGNvbnRhaW4gdW5kZWZpbmVkXHJcbiAgICByNWIuaWQuY29uY2F0KFwiXCIpO1xyXG4gICAgLy8vIEB0cy1leHBlY3QtZXJyb3IgICAgaWQgbXVzdCBjb250YWluIHVuZGVmaW5lZFxyXG4gICAgcjZhLmlkLmNvbmNhdChcIlwiKTtcclxuICAgIC8vLyBAdHMtZXhwZWN0LWVycm9yICAgIGlkIG11c3QgY29udGFpbiB1bmRlZmluZWRcclxuICAgIHI2Yi5pZC5jb25jYXQoXCJcIik7XHJcbiAgICAvLy8gQHRzLWV4cGVjdC1lcnJvciAgICBpZCBtdXN0IGNvbnRhaW4gdW5kZWZpbmVkXHJcbiAgICByN2EuaWQuY29uY2F0KFwiXCIpO1xyXG4gICAgLy8vIEB0cy1leHBlY3QtZXJyb3IgICAgaWQgbXVzdCBjb250YWluIHVuZGVmaW5lZFxyXG4gICAgcjdiLmlkLmNvbmNhdChcIlwiKTtcclxuXHJcblxyXG4gICAgaWYgKHI1YS5hbGxvd0Z1bGxTY3JlZW4gPT09IHVuZGVmaW5lZCkge31cclxuICAgIGVsc2UgaWYgKHI1YS5hbGxvd0Z1bGxTY3JlZW4gPT09IGZhbHNlKSB7fVxyXG4gICAgZWxzZSBpZiAocjVhLmFsbG93RnVsbFNjcmVlbiA9PT0gdHJ1ZSkge31cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIGFjY2VwdHNOZXZlcihyNWEuYWxsb3dGdWxsU2NyZWVuKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgaWYgKHI1Yi5hbGxvd0Z1bGxTY3JlZW4gPT09IHVuZGVmaW5lZCkge31cclxuICAgIGVsc2UgaWYgKHI1Yi5hbGxvd0Z1bGxTY3JlZW4gPT09IGZhbHNlKSB7fVxyXG4gICAgZWxzZSBpZiAocjViLmFsbG93RnVsbFNjcmVlbiA9PT0gdHJ1ZSkge31cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIGFjY2VwdHNOZXZlcihyNWIuYWxsb3dGdWxsU2NyZWVuKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgaWYgKHI2YS5hbGxvd0Z1bGxTY3JlZW4gPT09IHVuZGVmaW5lZCkge31cclxuICAgIGVsc2UgaWYgKHI2YS5hbGxvd0Z1bGxTY3JlZW4gPT09IGZhbHNlKSB7fVxyXG4gICAgZWxzZSBpZiAocjZhLmFsbG93RnVsbFNjcmVlbiA9PT0gdHJ1ZSkge31cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIGFjY2VwdHNOZXZlcihyNmEuYWxsb3dGdWxsU2NyZWVuKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgaWYgKHI2Yi5hbGxvd0Z1bGxTY3JlZW4gPT09IHVuZGVmaW5lZCkge31cclxuICAgIGVsc2UgaWYgKHI2Yi5hbGxvd0Z1bGxTY3JlZW4gPT09IGZhbHNlKSB7fVxyXG4gICAgZWxzZSBpZiAocjZiLmFsbG93RnVsbFNjcmVlbiA9PT0gdHJ1ZSkge31cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIGFjY2VwdHNOZXZlcihyNmIuYWxsb3dGdWxsU2NyZWVuKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgaWYgKHI3YS5hbGxvd0Z1bGxTY3JlZW4gPT09IHVuZGVmaW5lZCkge31cclxuICAgIGVsc2UgaWYgKHI3YS5hbGxvd0Z1bGxTY3JlZW4gPT09IGZhbHNlKSB7fVxyXG4gICAgZWxzZSBpZiAocjdhLmFsbG93RnVsbFNjcmVlbiA9PT0gdHJ1ZSkge31cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIGFjY2VwdHNOZXZlcihyN2EuYWxsb3dGdWxsU2NyZWVuKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgaWYgKHI3Yi5hbGxvd0Z1bGxTY3JlZW4gPT09IHVuZGVmaW5lZCkge31cclxuICAgIGVsc2UgaWYgKHI3Yi5hbGxvd0Z1bGxTY3JlZW4gPT09IGZhbHNlKSB7fVxyXG4gICAgZWxzZSBpZiAocjdiLmFsbG93RnVsbFNjcmVlbiA9PT0gdHJ1ZSkge31cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIGFjY2VwdHNOZXZlcihyN2IuYWxsb3dGdWxsU2NyZWVuKTtcclxuICAgIH1cclxuXHJcbn1cclxuZnVuY3Rpb24gYWNjZXB0c05ldmVyKG46IG5ldmVyKSB7fVxyXG4qLyBcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXNlLW1lcmdlZC1wcm9wcy5qcy5tYXAiLCJpbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlUmVmLCB1c2VTdGF0ZSBhcyB1c2VTdGF0ZVAgfSBmcm9tIFwicHJlYWN0L2hvb2tzXCI7XHJcbi8qKlxyXG4gKiBTbGlnaHRseSBlbmhhbmNlZCB2ZXJzaW9uIG9mIGB1c2VTdGF0ZWAgdGhhdCBpbmNsdWRlcyBhIGdldHRlciB0aGF0IHJlbWFpbnMgY29uc3RhbnRcclxuICogKGkuZS4geW91IGNhbiB1c2UgaXQgaW4gYHVzZUVmZmVjdGAgYW5kIGZyaWVuZHMgd2l0aG91dCBpdCBiZWluZyBhIGRlcGVuZGVuY3kpLlxyXG4gKlxyXG4gKiBAcGFyYW0gaW5pdGlhbFN0YXRlXHJcbiAqIEByZXR1cm5zXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gdXNlU3RhdGUoaW5pdGlhbFN0YXRlKSB7XHJcbiAgICAvLyBXZSBrZWVwIGJvdGgsIGJ1dCBvdmVycnJpZGUgdGhlIGBzZXRTdGF0ZWAgZnVuY3Rpb25hbGl0eVxyXG4gICAgY29uc3QgW3N0YXRlLCBzZXRTdGF0ZVBdID0gdXNlU3RhdGVQKGluaXRpYWxTdGF0ZSk7XHJcbiAgICBjb25zdCByZWYgPSB1c2VSZWYoc3RhdGUpO1xyXG4gICAgLy8gSGlqYWNrIHRoZSBub3JtYWwgc2V0dGVyIGZ1bmN0aW9uIFxyXG4gICAgLy8gdG8gYWxzbyBzZXQgb3VyIHJlZiB0byB0aGUgbmV3IHZhbHVlXHJcbiAgICBjb25zdCBzZXRTdGF0ZSA9IHVzZUNhbGxiYWNrKHZhbHVlID0+IHtcclxuICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSBcImZ1bmN0aW9uXCIpIHtcclxuICAgICAgICAgICAgbGV0IGNhbGxiYWNrID0gdmFsdWU7XHJcbiAgICAgICAgICAgIHNldFN0YXRlUChwcmV2VmFsdWUgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IG5leHRWYWx1ZSA9IGNhbGxiYWNrKHByZXZWYWx1ZSk7XHJcbiAgICAgICAgICAgICAgICByZWYuY3VycmVudCA9IG5leHRWYWx1ZTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXh0VmFsdWU7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmVmLmN1cnJlbnQgPSB2YWx1ZTtcclxuICAgICAgICAgICAgc2V0U3RhdGVQKHZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbXSk7XHJcbiAgICBjb25zdCBnZXRTdGF0ZSA9ICgpID0+IHsgcmV0dXJuIHJlZi5jdXJyZW50OyB9O1xyXG4gICAgY29uc29sZS5hc3NlcnQocmVmLmN1cnJlbnQgPT09IHN0YXRlKTtcclxuICAgIHJldHVybiBbc3RhdGUsIHNldFN0YXRlLCBnZXRTdGF0ZV07XHJcbn1cclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXNlLXN0YXRlLmpzLm1hcCIsImltcG9ydCB7IHVzZUNhbGxiYWNrIH0gZnJvbSBcInByZWFjdC9ob29rc1wiO1xyXG5pbXBvcnQgeyB1c2VNZXJnZWRQcm9wcyB9IGZyb20gXCIuL3VzZS1tZXJnZWQtcHJvcHNcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwiLi91c2Utc3RhdGVcIjtcclxuLyoqXHJcbiAqIEFsbG93cyBhY2Nlc3NpbmcgdGhlIGVsZW1lbnQgYSByZWYgcmVmZXJlbmNlcyBhcyBzb29uIGFzIGl0IGRvZXMgc28uXHJcbiAqICpUaGlzIGhvb2sgaXRzZWxmIHJldHVybnMgYSBob29rKi0tdXNlUmVmRWxlbWVudFByb3BzIG1vZGlmaWVzIHRoZSBwcm9wcyB0aGF0IHlvdSB3ZXJlIGdvaW5nIHRvIHBhc3MgdG8gYW4gSFRNTEVsZW1lbnQsXHJcbiAqIGFkZGluZyBhIFJlZkNhbGxiYWNrIGFuZCBtZXJnaW5nIGl0IHdpdGggYW55IGV4aXN0aW5nIHJlZiB0aGF0IGV4aXN0ZWQgb24gdGhlIHByb3BzLlxyXG4gKlxyXG4gKiBEb24ndCBmb3JnZXQgdG8gcHJvdmlkZSB0aGUgRWxlbWVudCBhcyB0aGUgdHlwZSBhcmd1bWVudCFcclxuICpcclxuICogQHJldHVybnMgVGhlIGVsZW1lbnQsIGFuZCB0aGUgc3ViLWhvb2sgdGhhdCBtYWtlcyBpdCByZXRyaWV2YWJsZS5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiB1c2VSZWZFbGVtZW50KCkge1xyXG4gICAgLy8gTGV0IHVzIHN0b3JlIHRoZSBhY3R1YWwgKHJlZmVyZW5jZSB0bykgdGhlIGVsZW1lbnQgd2UgY2FwdHVyZVxyXG4gICAgY29uc3QgW2VsZW1lbnQsIHNldEVsZW1lbnQsIGdldEVsZW1lbnRdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgICAvLyBDcmVhdGUgYSBSZWZDYWxsYmFjayB0aGF0J3MgZmlyZWQgd2hlbiBtb3VudGVkIFxyXG4gICAgLy8gYW5kIHRoYXQgbm90aWZpZXMgdXMgb2Ygb3VyIGVsZW1lbnQgd2hlbiB3ZSBoYXZlIGl0XHJcbiAgICBjb25zdCBteVJlZiA9IHVzZUNhbGxiYWNrKChlKSA9PiB7XHJcbiAgICAgICAgaWYgKGUpXHJcbiAgICAgICAgICAgIHNldEVsZW1lbnQoKCkgPT4gZSk7XHJcbiAgICB9LCBbXSk7XHJcbiAgICBjb25zdCB1c2VSZWZFbGVtZW50UHJvcHMgPSB1c2VDYWxsYmFjaygocHJvcHMpID0+IHVzZU1lcmdlZFByb3BzKCkoeyByZWY6IG15UmVmIH0sIHByb3BzKSwgW10pO1xyXG4gICAgLy8gUmV0dXJuIGJvdGggdGhlIGVsZW1lbnQgYW5kIHRoZSBob29rIHRoYXQgbW9kaWZpZXMgXHJcbiAgICAvLyB0aGUgcHJvcHMgYW5kIGFsbG93cyB1cyB0byBhY3R1YWxseSBmaW5kIHRoZSBlbGVtZW50XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHVzZVJlZkVsZW1lbnRQcm9wcyxcclxuICAgICAgICBlbGVtZW50LFxyXG4gICAgICAgIGdldEVsZW1lbnRcclxuICAgIH07XHJcbn1cclxuZnVuY3Rpb24gdGVzdCgpIHtcclxuICAgIGZ1bmN0aW9uIGZvbyhwcm9wcykge1xyXG4gICAgICAgIGNvbnN0IHsgZWxlbWVudCwgdXNlUmVmRWxlbWVudFByb3BzIH0gPSB1c2VSZWZFbGVtZW50KCk7XHJcbiAgICAgICAgY29uc3QgcDEgPSB1c2VSZWZFbGVtZW50UHJvcHMocHJvcHMpO1xyXG4gICAgICAgIGlmIChwMS5zdHlsZSA9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodHlwZW9mIHAxLnN0eWxlID09PSBcInN0cmluZ1wiKSB7IH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcDEuc3R5bGU/LmJhY2tncm91bmRDb2xvcjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXNlLXJlZi1lbGVtZW50LmpzLm1hcCIsImltcG9ydCB7IHVzZVJlZiwgdXNlSW1wZXJhdGl2ZUhhbmRsZSwgdXNlQ2FsbGJhY2sgfSBmcm9tIFwicHJlYWN0L2hvb2tzXCI7XHJcbmNvbnN0IFVuc2V0ID0gU3ltYm9sKFwidW5zZXRcIik7XHJcbi8qKlxyXG4gKiBHaXZlbiBhbiBpbnB1dCB2YWx1ZSwgcmV0dXJucyBhIGNvbnN0YW50IGdldHRlciBmdW5jdGlvbiB0aGF0IGNhbiBiZSB1c2VkXHJcbiAqIGluc2lkZSBvZiBgdXNlRWZmZWN0YCBhbmQgZnJpZW5kcyB3aXRob3V0IGluY2x1ZGluZyBpdCBpbiB0aGUgZGVwZW5kZW5jeSBhcnJheS5cclxuICpcclxuICogVXNlIHdpdGggY2F1dGlvbiwgYW5kICoqZG8gbm90IHVzZSB0aGUgZ2V0dGVyIGluIHVzZUxheW91dEVmZmVjdCEhKipcclxuICogYHNldFN0YXRlYCdzIGdldHRlciBkb2VzIG5vdCBoYXZlIHRoaXMgcHJvYmxlbSwgYnV0IHRoZW4geW91J3JlIHVzaW5nIHlvdXIgb3duIHN0YXRlXHJcbiAqIGluc3RlYWQgb2YgYW4gZXhpc3RpbmcgdmFsdWUsIHdoaWNoIG1pZ2h0IG5vdCBhbHdheXMgYmUgZmVhc2libGUuXHJcbiAqXHJcbiAqIFdlaWdoIHlvdXIgb3B0aW9ucywgYW5kIGhvcGVmdWxseSBvbmUgb2YgdGhlbSBnZXRzIHRoZSBqb2IgZG9uZS5cclxuICpcclxuICogQHBhcmFtIHZhbHVlXHJcbiAqIEByZXR1cm5zXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gdXNlU3RhYmxlR2V0dGVyKHZhbHVlKSB7XHJcbiAgICBjb25zdCByZWYgPSB1c2VSZWYoVW5zZXQpO1xyXG4gICAgdXNlSW1wZXJhdGl2ZUhhbmRsZShyZWYsICgpID0+IHZhbHVlKTtcclxuICAgIHJldHVybiB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICAgICAgaWYgKHJlZi5jdXJyZW50ID09PSBVbnNldCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1ZhbHVlIHJldHJpZXZlZCBmcm9tIHVzZVN0YWJsZUdldHRlcigpIGNhbm5vdCBiZSBjYWxsZWQgZnJvbSB1c2VMYXlvdXRFZmZlY3QoKS4nKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJlZi5jdXJyZW50O1xyXG4gICAgfSwgW10pO1xyXG59XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZS1zdGFibGUtZ2V0dGVyLmpzLm1hcCIsImltcG9ydCB7IHVzZUNhbGxiYWNrIH0gZnJvbSBcInByZWFjdC9ob29rc1wiO1xyXG5pbXBvcnQgeyB1c2VTdGFibGVHZXR0ZXIgfSBmcm9tIFwiLi91c2Utc3RhYmxlLWdldHRlclwiO1xyXG4vKipcclxuICogQWx0ZXJuYXRlIHVzZUNhbGxiYWNrKCkgd2hpY2ggYWx3YXlzIHJldHVybnMgdGhlIHNhbWUgKHdyYXBwZWQpIGZ1bmN0aW9uIHJlZmVyZW5jZVxyXG4gKiBzbyB0aGF0IGl0IGNhbiBiZSBleGNsdWRlZCBmcm9tIHRoZSBkZXBlbmRlbmN5IGFycmF5cyBvZiBgdXNlRWZmZWN0YCBhbmQgZnJpZW5kcy5cclxuICpcclxuICogRE8gTk9UIFVTRSBUSEUgUkVTVUxUIElOIHVzZUxheW91dEVmZmVjdCEhXHJcbiAqXHJcbiAqIFRPRE86IEludmVzdGlnYXRlIG9wdGlvbnMuZGlmZmVkIGlmIHRoZSB1c2VMYXlvdXRFZmZlY3QgbGltaXRhdGlvbiBiZWNvbWVzIGxpbWl0bGVzc2x5IGxpbWl0aW5nLlxyXG4gKlxyXG4gKiBTb3VyY2U6IGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC9pc3N1ZXMvMTQwOTkjaXNzdWVjb21tZW50LTY1OTI5ODQyMlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHVzZVN0YWJsZUNhbGxiYWNrKGZuKSB7XHJcbiAgICBjb25zdCBjdXJyZW50Q2FsbGJhY2tHZXR0ZXIgPSB1c2VTdGFibGVHZXR0ZXIoZm4pO1xyXG4gICAgcmV0dXJuIHVzZUNhbGxiYWNrKCguLi5hcmdzKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIGN1cnJlbnRDYWxsYmFja0dldHRlcigpKC4uLmFyZ3MpO1xyXG4gICAgfSwgW10pO1xyXG59XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZS1zdGFibGUtY2FsbGJhY2suanMubWFwIiwiaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInByZWFjdC9ob29rc1wiO1xyXG5pbXBvcnQgeyB1c2VSZWZFbGVtZW50IH0gZnJvbSBcIi4vdXNlLXJlZi1lbGVtZW50XCI7XHJcbmltcG9ydCB7IHVzZVN0YWJsZUNhbGxiYWNrIH0gZnJvbSBcIi4vdXNlLXN0YWJsZS1jYWxsYmFja1wiO1xyXG5leHBvcnQgZnVuY3Rpb24gdXNlRWxlbWVudFNpemUoeyBvYnNlcnZlQm94LCBzZXRTaXplIH0pIHtcclxuICAgIGNvbnN0IHsgZWxlbWVudCwgZ2V0RWxlbWVudCwgdXNlUmVmRWxlbWVudFByb3BzIH0gPSB1c2VSZWZFbGVtZW50KCk7XHJcbiAgICBjb25zdCBzdGFibGVTZXRTaXplID0gdXNlU3RhYmxlQ2FsbGJhY2soc2V0U2l6ZSk7XHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmIChlbGVtZW50KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGhhbmRsZVVwZGF0ZSA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHsgY2xpZW50V2lkdGgsIHNjcm9sbFdpZHRoLCBvZmZzZXRXaWR0aCwgY2xpZW50SGVpZ2h0LCBzY3JvbGxIZWlnaHQsIG9mZnNldEhlaWdodCwgY2xpZW50TGVmdCwgc2Nyb2xsTGVmdCwgb2Zmc2V0TGVmdCwgY2xpZW50VG9wLCBzY3JvbGxUb3AsIG9mZnNldFRvcCB9ID0gZWxlbWVudDtcclxuICAgICAgICAgICAgICAgIHN0YWJsZVNldFNpemUoeyBjbGllbnRXaWR0aCwgc2Nyb2xsV2lkdGgsIG9mZnNldFdpZHRoLCBjbGllbnRIZWlnaHQsIHNjcm9sbEhlaWdodCwgb2Zmc2V0SGVpZ2h0LCBjbGllbnRMZWZ0LCBzY3JvbGxMZWZ0LCBvZmZzZXRMZWZ0LCBjbGllbnRUb3AsIHNjcm9sbFRvcCwgb2Zmc2V0VG9wIH0pO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBpZiAoIShcIlJlc2l6ZU9ic2VydmVyXCIgaW4gd2luZG93KSkge1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBoYW5kbGVVcGRhdGUsIHsgcGFzc2l2ZTogdHJ1ZSB9KTtcclxuICAgICAgICAgICAgICAgIHJldHVybiAoKSA9PiBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIGhhbmRsZVVwZGF0ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBvYnNlcnZlciA9IG5ldyBSZXNpemVPYnNlcnZlcigoZW50cmllcykgPT4geyBoYW5kbGVVcGRhdGUoKTsgfSk7XHJcbiAgICAgICAgICAgICAgICBvYnNlcnZlci5vYnNlcnZlKGVsZW1lbnQsIHsgYm94OiBvYnNlcnZlQm94IH0pO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuICgpID0+IG9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0sIFtlbGVtZW50LCBvYnNlcnZlQm94XSk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGVsZW1lbnQsXHJcbiAgICAgICAgZ2V0RWxlbWVudCxcclxuICAgICAgICB1c2VFbGVtZW50U2l6ZVByb3BzOiB1c2VSZWZFbGVtZW50UHJvcHNcclxuICAgIH07XHJcbn1cclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXNlLWVsZW1lbnQtc2l6ZS5qcy5tYXAiLCJpbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlTGF5b3V0RWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInByZWFjdC9ob29rc1wiO1xyXG5mdW5jdGlvbiBjYXBpdGFsaXplKHN0cikge1xyXG4gICAgcmV0dXJuIChzdHJbMF0udG9VcHBlckNhc2UoKSArIHN0ci5zdWJzdHIoMSkpO1xyXG59XHJcbi8qKlxyXG4gKiBJbnNwZWN0cyB0aGUgZWxlbWVudCdzIHN0eWxlIGFuZCBkZXRlcm1pbmVzIHRoZSBsb2dpY2FsIGRpcmVjdGlvbiB0aGF0IHRleHQgZmxvd3MuXHJcbiAqXHJcbiAqIENlcnRhaW4gQ1NTIHByb3BlcnRpZXMsIGxpa2UgYGJsb2NrLXNpemVgLCByZXNwZWN0IHRoZSBjdXJyZW50IHdyaXRpbmcgbW9kZSBhbmQgdGV4dCBkaXJlY3Rpb24uXHJcbiAqIEJ1dCBgdHJhbnNmb3JtYCwgYGNsaXBgLCBldGMuIGRvbid0LlxyXG4gKlxyXG4gKiBUaGlzIGlzIHByb3ZpZGVkIHNvIHRoYXQgQ1NTIHByb3BlcnRpZXMgY2FuIGNvbnNpc3RlbnRseSB1c2UgdGhvc2UgbG9naWNhbCBwcm9wZXJ0aWVzLlxyXG4gKlxyXG4gKiBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy13cml0aW5nLW1vZGVzLyNsb2dpY2FsLXRvLXBoeXNpY2FsXHJcbiAqXHJcbiAqIEByZXR1cm5zIEFuIG9iamVjdCBjb250YWluaW5nIHRoZSBmb2xsb3dpbmcgZnVuY3Rpb25zOlxyXG4gKiAqIGBnZXRMb2dpY2FsRGlyZWN0aW9uYDogcmV0cmlldmVzIGEgYExvZ2ljYWxEaXJlY3Rpb25JbmZvYCByZXByZXNlbnRpbmcgdGhlIGN1cnJlbnQgc3RhdGUgb2YgdGhlIGVsZW1lbnQuIChGdW5jdGlvbiBpcyBjb25zdGFudCBiZXR3ZWVuIHJlbmRlcnMpXHJcbiAqICogYGNvbnZlcnRFbGVtZW50U2l6ZWA6IFdoZW4gdXNlZCBpbiBjb25qdW5jdGlvbiB3aXRoIGB1c2VFbGVtZW50U2l6ZWAsIGFsbG93cyB5b3UgdG8gcmV0cmlldmUgdGhlIGxvZ2ljYWwgc2l6ZSBvZiBhbiBlbGVtZW50IGluc3RlYWQgb2YgdGhlIHBoeXNpY2FsIHNpemUuXHJcbiAqICogYGNvbnZlcnRUb0xvZ2ljYWxPcmllbnRhdGlvbmA6IEJhc2VkIG9uIHRoZSBjdXJyZW50IGRpcmVjdGlvbiwgY29udmVydHMgXCJob3Jpem9udGFsXCIgb3IgXCJ2ZXJ0aWNhbFwiIHRvIFwiaW5saW5lXCIgb3IgXCJibG9ja1wiLlxyXG4gKiAqIGBjb252ZXJ0VG9QaHlzaWNhbE9yaWVudGF0aW9uYDogIEJhc2VkIG9uIHRoZSBjdXJyZW50IGRpcmVjdGlvbiwgY29udmVydHMgXCJpbmxpbmVcIiBvciBcImJsb2NrXCIgdG8gXCJob3Jpem9udGFsXCIgb3IgXCJ2ZXJ0aWNhbFwiLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHVzZUxvZ2ljYWxEaXJlY3Rpb24oZWxlbWVudCkge1xyXG4gICAgY29uc3QgW3dyaXRpbmdNb2RlLCBzZXRXcml0aW5nTW9kZV0gPSB1c2VTdGF0ZShudWxsKTtcclxuICAgIGNvbnN0IFtkaXJlY3Rpb24sIHNldERpcmVjdGlvbl0gPSB1c2VTdGF0ZShudWxsKTtcclxuICAgIGNvbnN0IFt0ZXh0T3JpZW50YXRpb24sIHNldFRleHRPcmllbnRhdGlvbl0gPSB1c2VTdGF0ZShudWxsKTtcclxuICAgIGNvbnN0IHdyaXRpbmdNb2RlUmVmID0gdXNlUmVmKHdyaXRpbmdNb2RlKTtcclxuICAgIGNvbnN0IGRpcmVjdGlvblJlZiA9IHVzZVJlZihkaXJlY3Rpb24pO1xyXG4gICAgY29uc3QgdGV4dE9yaWVudGF0aW9uUmVmID0gdXNlUmVmKHRleHRPcmllbnRhdGlvbik7XHJcbiAgICB1c2VMYXlvdXRFZmZlY3QoKCkgPT4geyB3cml0aW5nTW9kZVJlZi5jdXJyZW50ID0gd3JpdGluZ01vZGU7IH0sIFt3cml0aW5nTW9kZV0pO1xyXG4gICAgdXNlTGF5b3V0RWZmZWN0KCgpID0+IHsgZGlyZWN0aW9uUmVmLmN1cnJlbnQgPSBkaXJlY3Rpb247IH0sIFtkaXJlY3Rpb25dKTtcclxuICAgIHVzZUxheW91dEVmZmVjdCgoKSA9PiB7IHRleHRPcmllbnRhdGlvblJlZi5jdXJyZW50ID0gdGV4dE9yaWVudGF0aW9uOyB9LCBbdGV4dE9yaWVudGF0aW9uXSk7XHJcbiAgICAvLyBUT0RPOiBUaGVyZSdzIG5vIHdheSB0byByZWZyZXNoIHdoaWNoIHdyaXRpbmcgbW9kZSB3ZSBoYXZlIG9uY2UgbW91bnRlZC5cclxuICAgIC8vIElmIHRoZSB3cml0aW5nIG1vZGUgY2hhbmdlcywgdGhlIHdob2xlIGNvbXBvbmVudCBuZWVkcyB0byBcclxuICAgIC8vIG1vdW50L3VubW91bnQgYmVjYXVzZSAobW9yZS1vci1sZXNzIGluIG9yZGVyIG9mIGltcG9ydGFuY2UpXHJcbiAgICAvLyAgIEEuIFRoZXJlJ3Mgbm8gd2F5IHRvIHdhdGNoIGZvciBDU1Mgc3R5bGUgY2hhbmdlc1xyXG4gICAgLy8gICBCLiBDYWxsaW5nIGdldENvbXB1dGVkU3R5bGUgYWZ0ZXIgZXZlcnkgcmVuZGVyIGZvciBldmVyeSBlbGVtZW50IGdldHMgZXhwZW5zaXZlIGZhc3QgYW5kXHJcbiAgICAvLyAgIEMuIElzIG5vdCBuZWNlc3NhcnkgZm9yIDk5JSBvZiB1c2UgY2FzZXMgdGhhdCB3aWxsIG5ldmVyIHN3aXRjaCB3cml0aW5nLW1vZGUgd2l0aGluIGEgc2luZ2xlIGNvbXBvbmVudFxyXG4gICAgLy8gICAgICAoVGhvc2UgdGhhdCBkbyB3aWxsIG5lZWQgdG8gbW91bnQgYW5kIHVubW91bnQgdGhlIGNvbXBvbmVudCB0aGF0IHVzZXMgaXQpXHJcbiAgICAvL1xyXG4gICAgLy8gTWF5YmUgdGhlcmUgY291bGQgYmUgYSBjb250ZXh0IG9iamVjdCB0aGF0IGNhbiBiZSB1c2VkIHRvIHJlbW90ZWx5IHVwZGF0ZSBhbGwgY29tcG9uZW50cyB0aGF0IHVzZSB0aGlzIGhvb2s/XHJcbiAgICB1c2VMYXlvdXRFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmIChlbGVtZW50KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvbXB1dGVkU3R5bGVzID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoZWxlbWVudCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHcgPSBjb21wdXRlZFN0eWxlcy53cml0aW5nTW9kZTtcclxuICAgICAgICAgICAgY29uc3QgdCA9IGNvbXB1dGVkU3R5bGVzLnRleHRPcmllbnRhdGlvbjtcclxuICAgICAgICAgICAgY29uc3QgZCA9IGNvbXB1dGVkU3R5bGVzLmRpcmVjdGlvbjtcclxuICAgICAgICAgICAgc2V0V3JpdGluZ01vZGUodyB8fCBcImhvcml6b250YWwtdGJcIik7XHJcbiAgICAgICAgICAgIHNldERpcmVjdGlvbihkIHx8IFwicnRsXCIpO1xyXG4gICAgICAgICAgICBzZXRUZXh0T3JpZW50YXRpb24odCB8fCBcIm1peGVkXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFtlbGVtZW50XSk7XHJcbiAgICBjb25zdCBnZXRMb2dpY2FsRGlyZWN0aW9uID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgICAgIGxldCB3cml0aW5nTW9kZSA9IHdyaXRpbmdNb2RlUmVmLmN1cnJlbnQ7XHJcbiAgICAgICAgbGV0IGRpcmVjdGlvbiA9IGRpcmVjdGlvblJlZi5jdXJyZW50O1xyXG4gICAgICAgIGxldCB0ZXh0T3JpZW50YXRpb24gPSB0ZXh0T3JpZW50YXRpb25SZWYuY3VycmVudDtcclxuICAgICAgICBpZiAoIXdyaXRpbmdNb2RlIHx8ICFkaXJlY3Rpb24gfHwgIXRleHRPcmllbnRhdGlvbilcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgaWYgKHRleHRPcmllbnRhdGlvbiA9PSBcInVwcmlnaHRcIilcclxuICAgICAgICAgICAgZGlyZWN0aW9uID0gXCJsdHJcIjtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAuLi5Xcml0aW5nTW9kZXNbd3JpdGluZ01vZGUgPz8gXCJob3Jpem9udGFsLXRiXCJdW2RpcmVjdGlvbiA/PyBcImx0clwiXVxyXG4gICAgICAgIH07XHJcbiAgICB9LCBbd3JpdGluZ01vZGVSZWYsIGRpcmVjdGlvblJlZiwgdGV4dE9yaWVudGF0aW9uUmVmXSk7XHJcbiAgICBjb25zdCBjb252ZXJ0VG9Mb2dpY2FsT3JpZW50YXRpb24gPSB1c2VDYWxsYmFjaygoZWxlbWVudE9yaWVudGF0aW9uLCBkaXJlY3Rpb24pID0+IHtcclxuICAgICAgICBkaXJlY3Rpb24gPz89IGdldExvZ2ljYWxEaXJlY3Rpb24oKTtcclxuICAgICAgICBpZiAoZGlyZWN0aW9uPy5pbmxpbmVPcmllbnRhdGlvbiA9PT0gZWxlbWVudE9yaWVudGF0aW9uKVxyXG4gICAgICAgICAgICByZXR1cm4gXCJpbmxpbmVcIjtcclxuICAgICAgICByZXR1cm4gXCJibG9ja1wiO1xyXG4gICAgfSwgW2dldExvZ2ljYWxEaXJlY3Rpb25dKTtcclxuICAgIGNvbnN0IGNvbnZlcnRUb1BoeXNpY2FsT3JpZW50YXRpb24gPSB1c2VDYWxsYmFjaygoZWxlbWVudE9yaWVudGF0aW9uLCBkaXJlY3Rpb24pID0+IHtcclxuICAgICAgICBkaXJlY3Rpb24gPz89IGdldExvZ2ljYWxEaXJlY3Rpb24oKTtcclxuICAgICAgICBpZiAoZWxlbWVudE9yaWVudGF0aW9uID09IFwiaW5saW5lXCIpIHtcclxuICAgICAgICAgICAgaWYgKGRpcmVjdGlvbj8uaW5saW5lT3JpZW50YXRpb24gPT0gXCJob3Jpem9udGFsXCIpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJob3Jpem9udGFsXCI7XHJcbiAgICAgICAgICAgIHJldHVybiBcInZlcnRpY2FsXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAoZGlyZWN0aW9uPy5ibG9ja09yaWVudGF0aW9uID09IFwidmVydGljYWxcIilcclxuICAgICAgICAgICAgICAgIHJldHVybiBcInZlcnRpY2FsXCI7XHJcbiAgICAgICAgICAgIHJldHVybiBcImhvcml6b250YWxcIjtcclxuICAgICAgICB9XHJcbiAgICB9LCBbZ2V0TG9naWNhbERpcmVjdGlvbl0pO1xyXG4gICAgY29uc3QgY29udmVydEVsZW1lbnRTaXplID0gdXNlQ2FsbGJhY2soKGVsZW1lbnRTaXplLCBkaXJlY3Rpb24pID0+IHtcclxuICAgICAgICBkaXJlY3Rpb24gPz89IGdldExvZ2ljYWxEaXJlY3Rpb24oKTtcclxuICAgICAgICBpZiAoZGlyZWN0aW9uKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHsgaW5saW5lU2l6ZSwgYmxvY2tTaXplLCBpbmxpbmVEaXJlY3Rpb24sIGJsb2NrRGlyZWN0aW9uIH0gPSBkaXJlY3Rpb247XHJcbiAgICAgICAgICAgIC8vIFNpemUgaXMgcmVsYXRpdmVseSBzaW1wbGVcclxuICAgICAgICAgICAgbGV0IGNsaWVudElubGluZVNpemUgPSBlbGVtZW50U2l6ZVtgY2xpZW50JHtjYXBpdGFsaXplKGlubGluZVNpemUpfWBdO1xyXG4gICAgICAgICAgICBsZXQgY2xpZW50QmxvY2tTaXplID0gZWxlbWVudFNpemVbYGNsaWVudCR7Y2FwaXRhbGl6ZShibG9ja1NpemUpfWBdO1xyXG4gICAgICAgICAgICBsZXQgb2Zmc2V0SW5saW5lU2l6ZSA9IGVsZW1lbnRTaXplW2BvZmZzZXQke2NhcGl0YWxpemUoaW5saW5lU2l6ZSl9YF07XHJcbiAgICAgICAgICAgIGxldCBvZmZzZXRCbG9ja1NpemUgPSBlbGVtZW50U2l6ZVtgb2Zmc2V0JHtjYXBpdGFsaXplKGJsb2NrU2l6ZSl9YF07XHJcbiAgICAgICAgICAgIGxldCBzY3JvbGxJbmxpbmVTaXplID0gZWxlbWVudFNpemVbYHNjcm9sbCR7Y2FwaXRhbGl6ZShpbmxpbmVTaXplKX1gXTtcclxuICAgICAgICAgICAgbGV0IHNjcm9sbEJsb2NrU2l6ZSA9IGVsZW1lbnRTaXplW2BzY3JvbGwke2NhcGl0YWxpemUoYmxvY2tTaXplKX1gXTtcclxuICAgICAgICAgICAgLy8gUG9zaXRpb24gcmVxdWlyZXMgdXMgdG8gc29tZXRpbWVzIHVzZSBvbmUgcHJvcGVydHkgKGxpa2UgYGxlZnRgKVxyXG4gICAgICAgICAgICAvLyBvciBzb21ldGltZXMgdHdvIChsaWtlIGBsZWZ0YCArIGB3aWR0aGApXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIGdldFBoeXNpY2FsTGVmdFRvcChkaXIpIHsgaWYgKGRpciA9PT0gXCJsdHJcIiB8fCBkaXIgPT0gXCJydGxcIilcclxuICAgICAgICAgICAgICAgIHJldHVybiBcImxlZnRcIjsgcmV0dXJuIFwidG9wXCI7IH1cclxuICAgICAgICAgICAgZnVuY3Rpb24gZ2V0UGh5c2ljYWxSaWdodEJvdHRvbShkaXIpIHsgaWYgKGRpciA9PT0gXCJydGxcIilcclxuICAgICAgICAgICAgICAgIHJldHVybiBcIndpZHRoXCI7IGlmIChkaXIgPT09IFwiYnR0XCIpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJoZWlnaHRcIjsgcmV0dXJuIG51bGw7IH1cclxuICAgICAgICAgICAgY29uc3QgZjEgPSBnZXRQaHlzaWNhbExlZnRUb3AoaW5saW5lRGlyZWN0aW9uKTtcclxuICAgICAgICAgICAgY29uc3QgZjIgPSBnZXRQaHlzaWNhbFJpZ2h0Qm90dG9tKGlubGluZURpcmVjdGlvbik7XHJcbiAgICAgICAgICAgIGNvbnN0IGYzID0gZ2V0UGh5c2ljYWxMZWZ0VG9wKGJsb2NrRGlyZWN0aW9uKTtcclxuICAgICAgICAgICAgY29uc3QgZjQgPSBnZXRQaHlzaWNhbFJpZ2h0Qm90dG9tKGJsb2NrRGlyZWN0aW9uKTtcclxuICAgICAgICAgICAgbGV0IGNsaWVudElubGluZUluc2V0ID0gZWxlbWVudFNpemVbYGNsaWVudCR7Y2FwaXRhbGl6ZShmMSl9YF0gKyAoIWYyID8gMCA6IGVsZW1lbnRTaXplW2BjbGllbnQke2NhcGl0YWxpemUoZjIpfWBdKTtcclxuICAgICAgICAgICAgbGV0IHNjcm9sbElubGluZUluc2V0ID0gZWxlbWVudFNpemVbYHNjcm9sbCR7Y2FwaXRhbGl6ZShmMSl9YF0gKyAoIWYyID8gMCA6IGVsZW1lbnRTaXplW2BzY3JvbGwke2NhcGl0YWxpemUoZjIpfWBdKTtcclxuICAgICAgICAgICAgbGV0IG9mZnNldElubGluZUluc2V0ID0gZWxlbWVudFNpemVbYG9mZnNldCR7Y2FwaXRhbGl6ZShmMSl9YF0gKyAoIWYyID8gMCA6IGVsZW1lbnRTaXplW2BvZmZzZXQke2NhcGl0YWxpemUoZjIpfWBdKTtcclxuICAgICAgICAgICAgbGV0IGNsaWVudEJsb2NrSW5zZXQgPSBlbGVtZW50U2l6ZVtgY2xpZW50JHtjYXBpdGFsaXplKGYzKX1gXSArICghZjQgPyAwIDogZWxlbWVudFNpemVbYGNsaWVudCR7Y2FwaXRhbGl6ZShmNCl9YF0pO1xyXG4gICAgICAgICAgICBsZXQgc2Nyb2xsQmxvY2tJbnNldCA9IGVsZW1lbnRTaXplW2BzY3JvbGwke2NhcGl0YWxpemUoZjMpfWBdICsgKCFmNCA/IDAgOiBlbGVtZW50U2l6ZVtgc2Nyb2xsJHtjYXBpdGFsaXplKGY0KX1gXSk7XHJcbiAgICAgICAgICAgIGxldCBvZmZzZXRCbG9ja0luc2V0ID0gZWxlbWVudFNpemVbYG9mZnNldCR7Y2FwaXRhbGl6ZShmMyl9YF0gKyAoIWY0ID8gMCA6IGVsZW1lbnRTaXplW2BvZmZzZXQke2NhcGl0YWxpemUoZjQpfWBdKTtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIGNsaWVudElubGluZVNpemUsXHJcbiAgICAgICAgICAgICAgICBzY3JvbGxJbmxpbmVTaXplLFxyXG4gICAgICAgICAgICAgICAgb2Zmc2V0SW5saW5lU2l6ZSxcclxuICAgICAgICAgICAgICAgIGNsaWVudEJsb2NrU2l6ZSxcclxuICAgICAgICAgICAgICAgIHNjcm9sbEJsb2NrU2l6ZSxcclxuICAgICAgICAgICAgICAgIG9mZnNldEJsb2NrU2l6ZSxcclxuICAgICAgICAgICAgICAgIGNsaWVudElubGluZUluc2V0LFxyXG4gICAgICAgICAgICAgICAgc2Nyb2xsSW5saW5lSW5zZXQsXHJcbiAgICAgICAgICAgICAgICBvZmZzZXRJbmxpbmVJbnNldCxcclxuICAgICAgICAgICAgICAgIGNsaWVudEJsb2NrSW5zZXQsXHJcbiAgICAgICAgICAgICAgICBzY3JvbGxCbG9ja0luc2V0LFxyXG4gICAgICAgICAgICAgICAgb2Zmc2V0QmxvY2tJbnNldCxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9LCBbZ2V0TG9naWNhbERpcmVjdGlvbl0pO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBnZXRMb2dpY2FsRGlyZWN0aW9uLFxyXG4gICAgICAgIGNvbnZlcnRFbGVtZW50U2l6ZSxcclxuICAgICAgICBjb252ZXJ0VG9Mb2dpY2FsT3JpZW50YXRpb24sXHJcbiAgICAgICAgY29udmVydFRvUGh5c2ljYWxPcmllbnRhdGlvblxyXG4gICAgfTtcclxufVxyXG47XHJcbmNvbnN0IEhvcml6b250YWxUYkx0ciA9IHtcclxuICAgIGlubGluZURpcmVjdGlvbjogXCJsdHJcIixcclxuICAgIGJsb2NrRGlyZWN0aW9uOiBcInR0YlwiLFxyXG4gICAgaW5saW5lT3JpZW50YXRpb246IFwiaG9yaXpvbnRhbFwiLFxyXG4gICAgYmxvY2tPcmllbnRhdGlvbjogXCJ2ZXJ0aWNhbFwiLFxyXG4gICAgaW5saW5lU2l6ZTogXCJ3aWR0aFwiLFxyXG4gICAgYmxvY2tTaXplOiBcImhlaWdodFwiLFxyXG4gICAgbGVmdFJpZ2h0RGlyZWN0aW9uOiBcImx0clwiLFxyXG4gICAgb3ZlclVuZGVyRGlyZWN0aW9uOiBcInR0YlwiXHJcbn07XHJcbmNvbnN0IEhvcml6b250YWxUYlJ0bCA9IHtcclxuICAgIC4uLkhvcml6b250YWxUYkx0cixcclxuICAgIGlubGluZURpcmVjdGlvbjogXCJydGxcIixcclxufTtcclxuY29uc3QgVmVydGljYWxSbEx0ciA9IHtcclxuICAgIGlubGluZURpcmVjdGlvbjogXCJ0dGJcIixcclxuICAgIGJsb2NrRGlyZWN0aW9uOiBcInJ0bFwiLFxyXG4gICAgaW5saW5lT3JpZW50YXRpb246IFwidmVydGljYWxcIixcclxuICAgIGJsb2NrT3JpZW50YXRpb246IFwiaG9yaXpvbnRhbFwiLFxyXG4gICAgaW5saW5lU2l6ZTogXCJoZWlnaHRcIixcclxuICAgIGJsb2NrU2l6ZTogXCJ3aWR0aFwiLFxyXG4gICAgbGVmdFJpZ2h0RGlyZWN0aW9uOiBcInR0YlwiLFxyXG4gICAgb3ZlclVuZGVyRGlyZWN0aW9uOiBcInJ0bFwiXHJcbn07XHJcbmNvbnN0IFZlcnRpY2FsUmxSdGwgPSB7XHJcbiAgICAuLi5WZXJ0aWNhbFJsTHRyLFxyXG4gICAgaW5saW5lRGlyZWN0aW9uOiBcImJ0dFwiXHJcbn07XHJcbmNvbnN0IFNpZGV3YXlzUmxMdHIgPSB7IC4uLlZlcnRpY2FsUmxMdHIgfTtcclxuY29uc3QgU2lkZXdheXNSbFJ0bCA9IHsgLi4uVmVydGljYWxSbFJ0bCB9O1xyXG5jb25zdCBWZXJ0aWNhbExyTHRyID0ge1xyXG4gICAgLi4uVmVydGljYWxSbEx0cixcclxuICAgIGJsb2NrRGlyZWN0aW9uOiBcImx0clwiLFxyXG59O1xyXG5jb25zdCBWZXJ0aWNhbExyUnRsID0ge1xyXG4gICAgLi4uVmVydGljYWxSbFJ0bCxcclxuICAgIGJsb2NrRGlyZWN0aW9uOiBcImx0clwiLFxyXG59O1xyXG5jb25zdCBTaWRld2F5c0x0THRyID0ge1xyXG4gICAgLi4uVmVydGljYWxMckx0cixcclxuICAgIGlubGluZURpcmVjdGlvbjogXCJidHRcIixcclxuICAgIGxlZnRSaWdodERpcmVjdGlvbjogXCJidHRcIixcclxuICAgIG92ZXJVbmRlckRpcmVjdGlvbjogXCJsdHJcIlxyXG59O1xyXG5jb25zdCBTaWRld2F5c0x0UnRsID0ge1xyXG4gICAgLi4uU2lkZXdheXNMdEx0cixcclxuICAgIGlubGluZURpcmVjdGlvbjogXCJ0dGJcIlxyXG59O1xyXG5jb25zdCBIb3Jpem9udGFsVGIgPSB7XHJcbiAgICBsdHI6IEhvcml6b250YWxUYkx0cixcclxuICAgIHJ0bDogSG9yaXpvbnRhbFRiUnRsXHJcbn07XHJcbmNvbnN0IFZlcnRpY2FsUmwgPSB7XHJcbiAgICBsdHI6IFZlcnRpY2FsUmxMdHIsXHJcbiAgICBydGw6IFZlcnRpY2FsUmxSdGxcclxufTtcclxuY29uc3QgVmVydGljYWxMciA9IHtcclxuICAgIGx0cjogVmVydGljYWxMckx0cixcclxuICAgIHJ0bDogVmVydGljYWxMclJ0bFxyXG59O1xyXG5jb25zdCBTaWRld2F5c1JsID0ge1xyXG4gICAgbHRyOiBTaWRld2F5c1JsTHRyLFxyXG4gICAgcnRsOiBTaWRld2F5c1JsUnRsXHJcbn07XHJcbmNvbnN0IFNpZGV3YXlzTHIgPSB7XHJcbiAgICBsdHI6IFNpZGV3YXlzTHRMdHIsXHJcbiAgICBydGw6IFNpZGV3YXlzTHRSdGxcclxufTtcclxuY29uc3QgV3JpdGluZ01vZGVzID0ge1xyXG4gICAgXCJob3Jpem9udGFsLXRiXCI6IEhvcml6b250YWxUYixcclxuICAgIFwidmVydGljYWwtbHJcIjogVmVydGljYWxMcixcclxuICAgIFwidmVydGljYWwtcmxcIjogVmVydGljYWxSbCxcclxuICAgIFwic2lkZXdheXMtbHJcIjogU2lkZXdheXNMcixcclxuICAgIFwic2lkZXdheXMtcmxcIjogU2lkZXdheXNSbFxyXG59O1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2UtbG9naWNhbC1kaXJlY3Rpb24uanMubWFwIiwiaW1wb3J0IHsgdXNlTGF5b3V0RWZmZWN0IGFzIHVzZUxheW91dEVmZmVjdE5hdGl2ZSwgdXNlUmVmIH0gZnJvbSBcInByZWFjdC9ob29rc1wiO1xyXG4vKipcclxuICogV3JhcCB0aGUgbmF0aXZlIGB1c2VMYXlvdXRFZmZlY3RgIHRvIGFkZCBhcmd1bWVudHNcclxuICogdGhhdCBhbGxvdyBhY2Nlc3NpbmcgdGhlIHByZXZpb3VzIHZhbHVlIGFzIHRoZSBmaXJzdCBhcmd1bWVudCxcclxuICogYXMgd2VsbCBhcyB0aGUgY2hhbmdlcyB0aGF0IGNhdXNlZCB0aGUgaG9vayB0byBiZSBjYWxsZWQgYXMgdGhlIHNlY29uZCBhcmd1bWVudC5cclxuICpcclxuICogQHBhcmFtIGVmZmVjdFxyXG4gKiBAcGFyYW0gaW5wdXRzXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gdXNlTGF5b3V0RWZmZWN0KGVmZmVjdCwgaW5wdXRzKSB7XHJcbiAgICBjb25zdCBwcmV2SW5wdXRzID0gdXNlUmVmKGlucHV0cyk7XHJcbiAgICBjb25zdCBlZmZlY3QyID0gKCkgPT4ge1xyXG4gICAgICAgIGxldCBjaGFuZ2VzID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBNYXRoLm1heChwcmV2SW5wdXRzLmN1cnJlbnQubGVuZ3RoLCBpbnB1dHMubGVuZ3RoKTsgKytpKSB7XHJcbiAgICAgICAgICAgIGlmIChwcmV2SW5wdXRzLmN1cnJlbnRbaV0gIT0gaW5wdXRzW2ldKVxyXG4gICAgICAgICAgICAgICAgY2hhbmdlc1tpXSA9IHsgZnJvbTogcHJldklucHV0cy5jdXJyZW50W2ldLCB0bzogaW5wdXRzW2ldIH07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHJldCA9IGVmZmVjdChwcmV2SW5wdXRzLmN1cnJlbnQsIGNoYW5nZXMpO1xyXG4gICAgICAgIHByZXZJbnB1dHMuY3VycmVudCA9IGlucHV0cztcclxuICAgICAgICByZXR1cm4gcmV0O1xyXG4gICAgfTtcclxuICAgIHVzZUxheW91dEVmZmVjdE5hdGl2ZShlZmZlY3QyLCBpbnB1dHMpO1xyXG59XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZS1sYXlvdXQtZWZmZWN0LmpzLm1hcCIsImltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gXCJwcmVhY3QvaG9va3NcIjtcclxuaW1wb3J0IHsgdXNlU3RhYmxlQ2FsbGJhY2sgfSBmcm9tIFwiLi91c2Utc3RhYmxlLWNhbGxiYWNrXCI7XHJcbmltcG9ydCB7IHVzZVN0YWJsZUdldHRlciB9IGZyb20gXCIuL3VzZS1zdGFibGUtZ2V0dGVyXCI7XHJcbmV4cG9ydCBmdW5jdGlvbiB1c2VUaW1lb3V0KHsgdGltZW91dCwgY2FsbGJhY2ssIHRyaWdnZXJJbmRleCB9KSB7XHJcbiAgICBjb25zdCBzdGFibGVDYWxsYmFjayA9IHVzZVN0YWJsZUNhbGxiYWNrKCgpID0+IHsgc3RhcnRUaW1lUmVmLmN1cnJlbnQgPSBudWxsOyBjYWxsYmFjaygpOyB9KTtcclxuICAgIGNvbnN0IGdldFRpbWVvdXQgPSB1c2VTdGFibGVHZXR0ZXIodGltZW91dCk7XHJcbiAgICAvLyBTZXQgYW55IHRpbWUgd2Ugc3RhcnQgdGltZW91dC5cclxuICAgIC8vIFVuc2V0IGFueSB0aW1lIHRoZSB0aW1lb3V0IGNvbXBsZXRlc1xyXG4gICAgY29uc3Qgc3RhcnRUaW1lUmVmID0gdXNlUmVmKG51bGwpO1xyXG4gICAgY29uc3QgdGltZW91dElzTnVsbCA9ICh0aW1lb3V0ID09IG51bGwpO1xyXG4gICAgLy8gQW55IHRpbWUgdGhlIHRyaWdnZXJJbmRleCBjaGFuZ2VzIChpbmNsdWRpbmcgb24gbW91bnQpXHJcbiAgICAvLyByZXN0YXJ0IHRoZSB0aW1lb3V0LiAgVGhlIHRpbWVvdXQgZG9lcyBOT1QgcmVzZXRcclxuICAgIC8vIHdoZW4gdGhlIGR1cmF0aW9uIG9yIGNhbGxiYWNrIGNoYW5nZXMsIG9ubHkgdHJpZ2dlckluZGV4LlxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBsZXQgdGltZW91dCA9IGdldFRpbWVvdXQoKTtcclxuICAgICAgICBjb25zb2xlLmFzc2VydCh0aW1lb3V0SXNOdWxsID09ICh0aW1lb3V0ID09IG51bGwpKTtcclxuICAgICAgICBpZiAodGltZW91dCAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIHN0YXJ0VGltZVJlZi5jdXJyZW50ID0gKyhuZXcgRGF0ZSgpKTtcclxuICAgICAgICAgICAgY29uc3QgaGFuZGxlID0gc2V0VGltZW91dChzdGFibGVDYWxsYmFjaywgdGltZW91dCk7XHJcbiAgICAgICAgICAgIHJldHVybiAoKSA9PiBjbGVhclRpbWVvdXQoaGFuZGxlKTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbdHJpZ2dlckluZGV4LCB0aW1lb3V0SXNOdWxsXSk7XHJcbiAgICBjb25zdCBnZXRFbGFwc2VkVGltZSA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgICAgICByZXR1cm4gKCsobmV3IERhdGUoKSkpIC0gKCsoc3RhcnRUaW1lUmVmLmN1cnJlbnQgPz8gbmV3IERhdGUoKSkpO1xyXG4gICAgfSwgW10pO1xyXG4gICAgY29uc3QgZ2V0UmVtYWluaW5nVGltZSA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgICAgICBjb25zdCB0aW1lb3V0ID0gZ2V0VGltZW91dCgpO1xyXG4gICAgICAgIHJldHVybiB0aW1lb3V0ID09IG51bGwgPyBudWxsIDogTWF0aC5tYXgoMCwgdGltZW91dCAtIGdldEVsYXBzZWRUaW1lKCkpO1xyXG4gICAgfSwgW10pO1xyXG4gICAgcmV0dXJuIHsgZ2V0RWxhcHNlZFRpbWUsIGdldFJlbWFpbmluZ1RpbWUgfTtcclxufVxyXG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2UtdGltZW91dC5qcy5tYXAiLCJpbXBvcnQgeyB1c2VDYWxsYmFjayB9IGZyb20gXCJwcmVhY3QvaG9va3NcIjtcclxuaW1wb3J0IHsgdXNlTGF5b3V0RWZmZWN0IH0gZnJvbSBcIi4vdXNlLWxheW91dC1lZmZlY3RcIjtcclxuaW1wb3J0IHsgdXNlU3RhYmxlQ2FsbGJhY2sgfSBmcm9tIFwiLi91c2Utc3RhYmxlLWNhbGxiYWNrXCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcIi4vdXNlLXN0YXRlXCI7XHJcbmltcG9ydCB7IHVzZVRpbWVvdXQgfSBmcm9tIFwiLi91c2UtdGltZW91dFwiO1xyXG4vKipcclxuICogR2l2ZW4gYW4gYXN5bmNyb25vdXMgZXZlbnQgaGFuZGxlciwgcmV0dXJucyBhIHN5bmNyb25vdXMgb25lIHRoYXQgd29ya3Mgb24gdGhlIERPTSxcclxuICogYWxvbmcgd2l0aCBzb21lIG90aGVyIGluZm9ybWF0aW9uIHJlbGF0ZWQgdG8gdGhlIGN1cnJlbnQgc3RhdGUuXHJcbiAqIERvZXMgbm90IG1vZGlmeSBhbnkgcHJvcHMuXHJcbiAqXHJcbiAqIFRoZSBoYW5kbGVyIGlzIGF1dG9tYXRpY2FsbHkgdGhyb3R0bGVkIHRvIG9ubHkgcnVuIG9uZSBhdCBhIHRpbWUuXHJcbiAqIElmIHRoZSBoYW5kbGVyIGlzIGNhbGxlZCwgYW5kIHRoZW4gYmVmb3JlIGl0IGZpbmlzaGVzLCBpcyBjYWxsZWQgYWdhaW4sXHJcbiAqIGl0IHdpbGwgYmUgcHV0IG9uIGhvbGQgdW50aWwgdGhlIGN1cnJlbnQgb25lIGZpbmlzaGVzLCBhdCB3aGljaCBwb2ludFxyXG4gKiB0aGUgc2Vjb25kIG9uZSB3aWxsIHJ1bi4gIElmIHRoZSBoYW5kbGVyIGlzIGNhbGxlZCBhIHRoaXJkIHRpbWUgYmVmb3JlXHJcbiAqIHRoZSBmaXJzdCBoYXMgZmluaXNoZWQsIGl0IHdpbGwgKnJlcGxhY2UqIHRoZSBzZWNvbmQsIHNvIG9ubHkgdGhlIG1vc3RcclxuICogcmVjZW50bHkgY2FsbGVkIGl0ZXJhdGlvbiBvZiB0aGUgaGFuZGxlciB3aWxsIHJ1bi5cclxuICpcclxuICogWW91IG1heSBvcHRpb25hbGx5ICphbHNvKiBzcGVjaWZ5IGEgZGVib3VuY2UgcGFyYW1ldGVyIHRoYXQgd2FpdHMgdW50aWwgdGhlXHJcbiAqIHN5bmNyb25vdXMgaGFuZGxlciBoYXMgbm90IGJlZW4gY2FsbGVkIGZvciB0aGUgc3BlY2lmaWVkIG51bWJlciBvZlxyXG4gKiBtaWxsaXNlY29uZHMsIGF0IHdoaWNoIHBvaW50IHdlICphY3R1YWxseSogcnVuIHRoZSBhc3luY3Jvbm91cyBoYW5kbGVyXHJcbiAqIGFjY29yZGluZyB0byB0aGUgbG9naWMgaW4gdGhlIHByZXZpb3VzIHBhcmFncmFwaC4gVGhpcyBpcyBpblxyXG4gKiAqYWRkaXRpb24qIHRvIHRocm90dGxpbmcgdGhlIGhhbmRsZXIsIGFuZCBkb2VzIG5vdCByZXBsYWNlIHRoYXQgYmVoYXZpb3IuXHJcbiAqXHJcbiAqIE5vdGUgdGhhdCB0aGUgcGFyYW1ldGVycyB0byB0aGUgYXN5bmMgaGFuZGxlciBhcmUgc2xpZ2h0bHkgZGlmZmVyZW50IHRoYW5cclxuICogdGhlIHN5bmMgaGFuZGxlciAmbmRhc2g7IHRoZSBmaXJzdCBhcmd1bWVudCwgYXMgZGVjaWRlZCBieSB5b3Ugd2l0aCB0aGVcclxuICogYGNhcHR1cmVgIHBhcmFtZXRlciBmb3IgdGhpcyBob29rLCBpcyB0aGUgXCJzYXZlZFwiIGluZm9ybWF0aW9uIGZyb20gdGhlXHJcbiAqIGV2ZW50LiAgRm9yIGV4YW1wbGUsIHRoZSBldmVudCdzIGN1cnJlbnRUYXJnZXQncyBgdmFsdWVgLCB3aGljaCBtYXkgaGF2ZVxyXG4gKiBjaGFuZ2VkIGJ5IHRoZSB0aW1lIHRoZSBoYW5kbGVyIGlzICphY3R1YWxseSogY2FsbGVkLiAgVGhlIHNlY29uZCBhcmd1bWVudFxyXG4gKiBpcyB0aGUgb3JpZ2luYWwgZXZlbnQsIHdoaWNoIG1pZ2h0IHN0aWxsIGhhdmUgc29tZSB1c2VmdWwgZmllbGRzIG9uIGl0XHJcbiAqIGxpa2UgYG1vdXNlWGAgb3Igc29tZXRoaW5nLCBidXQgaXMgc3RhbGUgYXQgbGVhc3QgaW4gcmVnYXJkcyB0byB0aGVcclxuICogZWxlbWVudCBpdCByZWZlcmVuY2VzLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHVzZUFzeW5jSGFuZGxlcigpIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiAoeyBjYXB0dXJlLCBkZWJvdW5jZSB9KSB7XHJcbiAgICAgICAgLy8gQWx3YXlzIHJlcHJlc2VudHMgd2hhdGV2ZXIgcHJvbWlzZSBpcyBjdXJyZW50bHkgYmVpbmcgd2FpdGVkIG9uLCBvciBudWxsIGlmIG5vbmUuXHJcbiAgICAgICAgY29uc3QgW3Byb21pc2UsIHNldFByb21pc2UsIGdldFByb21pc2VdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgICAgICAgLy8gS2VlcCB0cmFjayBvZiBob3cgbWFueSB0aW1lcyB3ZSd2ZSBhY3R1YWxseSBjYWxsZWQgdGhlIGFzeW5jIGhhbmRsZXJcclxuICAgICAgICBjb25zdCBbcnVuQ291bnQsIHNldFJ1bkNvdW50XSA9IHVzZVN0YXRlKDApO1xyXG4gICAgICAgIGNvbnN0IFtyZXNvbHZlQ291bnQsIHNldFJlc29sdmVDb3VudF0gPSB1c2VTdGF0ZSgwKTtcclxuICAgICAgICBjb25zdCBbcmVqZWN0Q291bnQsIHNldFJlamVjdENvdW50XSA9IHVzZVN0YXRlKDApO1xyXG4gICAgICAgIC8vIFxyXG4gICAgICAgIGNvbnN0IFtjdXJyZW50VHlwZSwgc2V0Q3VycmVudFR5cGVdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgICAgICAgLy8gSWYgd2UncmUgc2V0IHRvIHVzZSBhIGRlYm91bmNlLCB0aGVuIHdoZW4gdGhlIHRpbWVvdXQgZmluaXNoZXMsXHJcbiAgICAgICAgLy8gdGhlIHByb21pc2UgZnJvbSB0aGlzIHN0YXRlIG9iamVjdCBpcyB0cmFuc2ZlcnJlZCBvdmVyIHRvIGVpdGhlciBcclxuICAgICAgICAvLyB0aGUgY3VycmVudCBwcm9taXNlIG9yIHRoZSBwZW5kaW5nIHByb21pc2UuXHJcbiAgICAgICAgY29uc3QgW2RlYm91bmNlZFByb21pc2VTdGFydGVyLCBzZXREZWJvdW5jZWRQcm9taXNlU3RhcnRlciwgZ2V0RGVib3VuY2VkUHJvbWlzZVN0YXJ0ZXJdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgICAgICAgLy8gV2hlbiB3ZSB3YW50IHRvIHN0YXJ0IGEgbmV3IHByb21pc2UsIHdlIHdvbid0IGFsbG93IGl0IHRvIHN0YXJ0IGlmIG9uZSBpcyBzdGlsbCBydW5uaW5nLlxyXG4gICAgICAgIC8vIEluIHRoYXQgY2FzZSwgd2Ugc3RvcmUgdGhlIHByb21pc2UgKG9yIHJhdGhlciwgYSB3YXkgdG8gc3RhcnQgdGhlIHByb21pc2UpIGluIHN0YXRlLlxyXG4gICAgICAgIGNvbnN0IFtwZW5kaW5nUHJvbWlzZVN0YXJ0ZXIsIHNldFBlbmRpbmdQcm9taXNlU3RhcnRlciwgZ2V0UGVuZGluZ1Byb21pc2VTdGFydGVyXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gICAgICAgIC8vIFdlIG5lZWQgdG8gZGlmZmVyZW50aWF0ZSBiZXR3ZWVuIGB1bmRlZmluZWRgIGFuZCBcIm5vIGVycm9yIGhhcyBiZWVuIHRocm93blwiLlxyXG4gICAgICAgIGNvbnN0IFtlcnJvciwgc2V0RXJyb3IsIGdldEVycm9yXSA9IHVzZVN0YXRlKHVuZGVmaW5lZCk7XHJcbiAgICAgICAgY29uc3QgW2hhc0Vycm9yLCBzZXRIYXNFcnJvciwgZ2V0SGFzRXJyb3JdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgICAgIC8vIFNhbWUgdGhpbmcsIHdlIG5lZWQgdG8gZGlmZmVyZW50aWF0ZSBiZXR3ZWVuIFwibm90aGluZyBjYXB0dXJlZCB5ZXRcIiBhbmQgXCJgdW5kZWZpbmVkYCB3YXMgY2FwdHVyZWRcIlxyXG4gICAgICAgIGNvbnN0IFtjdXJyZW50Q2FwdHVyZSwgc2V0Q3VycmVudENhcHR1cmUsIGdldEN1cnJlbnRDYXB0dXJlXSA9IHVzZVN0YXRlKHVuZGVmaW5lZCk7XHJcbiAgICAgICAgY29uc3QgW2hhc0NhcHR1cmUsIHNldEhhc0NhcHR1cmVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgICAgIC8vIFdoZW4gdGhlIGRlYm91bmNlIHRpbWVyIGlzIHVwIChvciB3ZSBtYW51YWxseSByZXF1ZXN0IHRoZSBkZWJvdW5jZSB0byBlbmQpXHJcbiAgICAgICAgLy8gcnVuIHRoZSBub3JtYWwgXCJwbGVhc2UgY29uc2lkZXIgcnVubmluZyB0aGlzIHByb21pc2VcIiByb3V0aW5lIHRoYXQgd2Ugd291bGRcclxuICAgICAgICAvLyBoYXZlIGp1c3QgcnVuIGltbWVkaWF0ZWx5IGlmIHdlIHdlcmVuJ3QgZGVib3VuY2luZyBvdXIgcHJvbWlzZXMuXHJcbiAgICAgICAgY29uc3Qgb25EZWJvdW5jZVRpbWVVcCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgZGVib3VuY2VkUHJvbWlzZVN0YXJ0ZXIgPSBnZXREZWJvdW5jZWRQcm9taXNlU3RhcnRlcigpO1xyXG4gICAgICAgICAgICBpZiAoZGVib3VuY2VkUHJvbWlzZVN0YXJ0ZXIpXHJcbiAgICAgICAgICAgICAgICB3YW50VG9TdGFydEFOZXdQcm9taXNlKGRlYm91bmNlZFByb21pc2VTdGFydGVyKTtcclxuICAgICAgICAgICAgc2V0RGVib3VuY2VkUHJvbWlzZVN0YXJ0ZXIobnVsbCk7XHJcbiAgICAgICAgfSwgW3dhbnRUb1N0YXJ0QU5ld1Byb21pc2UsIHNldERlYm91bmNlZFByb21pc2VTdGFydGVyXSk7XHJcbiAgICAgICAgLy8gSGFuZGxlIHRoZSBkZWJvdW5jZS4gTG9naWNhbGx5IHRoaXMgaGFwcGVucyBiZWZvcmUgdGhlIG1haW4gc3RlcCBhcyBhIHNvcnQgb2Ygc3RlcCAwLlxyXG4gICAgICAgIC8vIFJlc2V0cyB0aGUgdGltZW91dCBhbnkgdGltZSB0aGUgaGFuZGxlciB3YXMgcmVxdWVzdGVkIHRvIGJlIGNhbGxlZCBhZ2FpblxyXG4gICAgICAgIC8vIGFuZCB3aGVuIGl0IGZpbmlzaGVzLCBhY3R1YWxseSBjYWxsIHRoZSBoYW5kbGVyIChvciBzZXQgaXQgYXMgdGhlIHBlbmRpbmcgcHJvbWlzZSlcclxuICAgICAgICB1c2VUaW1lb3V0KHtcclxuICAgICAgICAgICAgdGltZW91dDogZGVib3VuY2UgPz8gbnVsbCxcclxuICAgICAgICAgICAgY2FsbGJhY2s6IG9uRGVib3VuY2VUaW1lVXAsXHJcbiAgICAgICAgICAgIHRyaWdnZXJJbmRleDogZGVib3VuY2VkUHJvbWlzZVN0YXJ0ZXJcclxuICAgICAgICB9KTtcclxuICAgICAgICAvLyBTZWUgaWYgd2Ugc2hvdWxkIHNldCBvdXIgY3VycmVudCBwcm9taXNlIHRvIGJlIHdoYXRldmVyIHRoZSBwZW5kaW5nIHByb21pc2UgaXNcclxuICAgICAgICAvLyAodXN1YWxseSBiZWNhdXNlIHRoZSBjdXJyZW50IHByb21pc2UgZmluaXNoZWQgYW5kIGJlY2FtZSBudWxsKS5cclxuICAgICAgICB1c2VMYXlvdXRFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgICAgICAvLyBPdXIgY3VycmVudCBwcm9taXNlIGp1c3QgZmluaXNoZWQgYW5kIHRoZXJlJ3Mgb25lIHdhaXRpbmc/XHJcbiAgICAgICAgICAgIGlmIChwcm9taXNlID09IG51bGwgJiYgcGVuZGluZ1Byb21pc2VTdGFydGVyICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIHdhbnRUb1N0YXJ0QU5ld1Byb21pc2UocGVuZGluZ1Byb21pc2VTdGFydGVyKTtcclxuICAgICAgICAgICAgICAgIHNldFBlbmRpbmdQcm9taXNlU3RhcnRlcihudWxsKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sIFtwcm9taXNlLCBwZW5kaW5nUHJvbWlzZVN0YXJ0ZXJdKTtcclxuICAgICAgICAvLyBDYWxsZWQgYW55IHRpbWUgdGhlIGFzeW5jIGhhbmRsZXIgaXMgYWJvdXQgdG8gYmUgY2FsbGVkIGZvciB3aGF0ZXZlciByZWFzb24sXHJcbiAgICAgICAgLy8gZXhjZXB0IGZvciBkZWJvdW5jZSwgd2hpY2ggY29tZXMgZmlyc3QsIGFzIGEgc29ydCBvZiBcInN0ZXAgMFwiLlxyXG4gICAgICAgIC8vIEhhbmRsZXMgYWxsIHRoZSBuZWNlc3NhcnkgYm9pbGVycGxhdGUgcmVsYXRlZCB0byBjaG9vc2luZyB3aGV0aGVyIHRvXHJcbiAgICAgICAgLy8gcnVuIG9yIHNldCBhcyBwZW5kaW5nLCByZXNldHRpbmcgc3RhdGUgdmFyaWFibGVzLCBldGMuXHJcbiAgICAgICAgZnVuY3Rpb24gd2FudFRvU3RhcnRBTmV3UHJvbWlzZShzdGFydFByb21pc2UpIHtcclxuICAgICAgICAgICAgbGV0IGFscmVhZHlSdW5uaW5nUHJvbWlzZSA9IChnZXRQcm9taXNlKCkgIT0gbnVsbCk7XHJcbiAgICAgICAgICAgIC8vIEJvaWxlcnBsYXRlIHdyYXBwZXIgYXJvdW5kIHRoZSBnaXZlbiBwcm9taXNlIHN0YXJ0ZXJcclxuICAgICAgICAgICAgbGV0IHN0YXJ0UHJvbWlzZVdpdGhCb2lsZXJwbGF0ZSA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIC8vIFdoZW4gaXQgc3RhcnRzLCBub3RpZnkgdGhlIGNhbGxlclxyXG4gICAgICAgICAgICAgICAgc2V0UnVuQ291bnQociA9PiArK3IpO1xyXG4gICAgICAgICAgICAgICAgLy8gV2hlbiBpdCBjb21wbGV0ZXMsIG5vdGlmeSB0aGUgY2FsbGVyXHJcbiAgICAgICAgICAgICAgICAvLyBXaGVuIGl0IGZhaWxzLCBzYXZlIHRoZSBlcnJvciBhbmQgbm90aWZ5IHRoZSBjYWxsZXJcclxuICAgICAgICAgICAgICAgIC8vIFdoZW4gaXQgc2V0dGxlcywgcmVzZXQgb3VyIHN0YXRlIHNvIHdlIGNhbiBydW4gYSBwZW5kaW5nIHByb21pc2UgaWYgaXQgZXhpc3RzXHJcbiAgICAgICAgICAgICAgICBjb25zdCBvblRoZW4gPSAoKSA9PiB7IHNldFJlc29sdmVDb3VudChjID0+ICsrYyk7IH07XHJcbiAgICAgICAgICAgICAgICBjb25zdCBvbkNhdGNoID0gKGV4KSA9PiB7IHNldEVycm9yKGV4KTsgc2V0SGFzRXJyb3IodHJ1ZSk7IHNldFJlamVjdENvdW50KGMgPT4gKytjKTsgfTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG9uRmluYWxseSA9ICgpID0+IHsgc2V0UHJvbWlzZShudWxsKTsgfTtcclxuICAgICAgICAgICAgICAgIC8vIEhhbmRsZSB0aGUgc3BlY2lhbCBjYXNlIHdoZXJlIHRoZSBoYW5kbGVyIGlzIHN5bmNocm9ub3VzXHJcbiAgICAgICAgICAgICAgICBsZXQgcmVzdWx0O1xyXG4gICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSBzdGFydFByb21pc2UoKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocmVzdWx0ID09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBJdCdzIHN5bmNocm9ub3VzIGFuZCByZXR1cm5lZCBzdWNjZXNzZnVsbHkuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEJhaWwgb3V0IGVhcmx5LlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvblRoZW4oKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25GaW5hbGx5KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldEN1cnJlbnRUeXBlKFwic3luY1wiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmFzc2VydChcInRoZW5cIiBpbiByZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY2F0Y2ggKGV4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gSXQncyBzeW5jaHJvbm91cyAob3IgYXN5bmNocm9ub3VzIGJ1dCBkaWRuJ3QgYXdhaXQgYW55dGhpbmcgeWV0KSBhbmQgdGhyZXcgYW4gZXJyb3IuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gQmFpbCBvdXQgZWFybHkuXHJcbiAgICAgICAgICAgICAgICAgICAgb25DYXRjaChleCk7XHJcbiAgICAgICAgICAgICAgICAgICAgb25GaW5hbGx5KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0Q3VycmVudFR5cGUoXCJzeW5jXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8vIFRoZSBoYW5kbGVyIGlzIGFzeW5jaHJvbm91c1xyXG4gICAgICAgICAgICAgICAgc2V0Q3VycmVudFR5cGUoXCJhc3luY1wiKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiAoYXN5bmMgKCkgPT4geyBhd2FpdCByZXN1bHQ7IH0pKCkudGhlbihvblRoZW4pLmNhdGNoKG9uQ2F0Y2gpLmZpbmFsbHkob25GaW5hbGx5KTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgaWYgKCFhbHJlYWR5UnVubmluZ1Byb21pc2UpIHtcclxuICAgICAgICAgICAgICAgIC8vIFN0YXJ0IHRoZSBwcm9taXNlIGltbWVkaWF0ZWx5LCBiZWNhdXNlIHRoZXJlIHdhc24ndCBvbmUgcnVubmluZyBhbHJlYWR5LlxyXG4gICAgICAgICAgICAgICAgbGV0IG5leHRQcm9taXNlID0gc3RhcnRQcm9taXNlV2l0aEJvaWxlcnBsYXRlKCk7XHJcbiAgICAgICAgICAgICAgICBpZiAobmV4dFByb21pc2UgPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gSG9sZCBvbiEgVGhlIGhhbmRsZXIgd2FzIGFjdHVhbGx5IHN5bmNocm9ub3VzLCBhbmQgYWxyZWFkeSBmaW5pc2hlZC5cclxuICAgICAgICAgICAgICAgICAgICAvLyBCYWlsIG91dCBlYXJseS5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldEVycm9yKHVuZGVmaW5lZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0SGFzRXJyb3IoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFByb21pc2UobmV4dFByb21pc2UpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgLy8gRG9uJ3Qgc3RhcnQgdGhlIHByb21pc2UgeWV0LCBcclxuICAgICAgICAgICAgICAgIC8vIGFuZCBhbGxvdyBpdCB0byBzdGFydCBpbiB0aGUgZnV0dXJlIGluc3RlYWQuXHJcbiAgICAgICAgICAgICAgICBzZXRQZW5kaW5nUHJvbWlzZVN0YXJ0ZXIoXyA9PiBzdGFydFByb21pc2VXaXRoQm9pbGVycGxhdGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCByZXQgPSB7XHJcbiAgICAgICAgICAgIGdldFN5bmNIYW5kbGVyLFxyXG4gICAgICAgICAgICBnZXRDdXJyZW50Q2FwdHVyZSxcclxuICAgICAgICAgICAgY2FsbENvdW50OiBydW5Db3VudCxcclxuICAgICAgICAgICAgY3VycmVudENhcHR1cmUsXHJcbiAgICAgICAgICAgIGhhc0NhcHR1cmUsXHJcbiAgICAgICAgICAgIHBlbmRpbmc6IChwcm9taXNlICE9IG51bGwpLFxyXG4gICAgICAgICAgICBoYXNFcnJvcixcclxuICAgICAgICAgICAgZXJyb3IsXHJcbiAgICAgICAgICAgIGN1cnJlbnRUeXBlLFxyXG4gICAgICAgICAgICBmbHVzaERlYm91bmNlZFByb21pc2U6IG9uRGVib3VuY2VUaW1lVXAsXHJcbiAgICAgICAgICAgIHJlc29sdmVDb3VudCxcclxuICAgICAgICAgICAgcmVqZWN0Q291bnQsXHJcbiAgICAgICAgICAgIHNldHRsZUNvdW50OiByZWplY3RDb3VudCArIHJlc29sdmVDb3VudFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmV0dXJuIHJldDtcclxuICAgICAgICBmdW5jdGlvbiBnZXRTeW5jSGFuZGxlcihhc3luY0hhbmRsZXIpIHtcclxuICAgICAgICAgICAgY29uc3Qgc3luY0hhbmRsZXIgPSB1c2VTdGFibGVDYWxsYmFjayhmdW5jdGlvbiBzeW5jSGFuZGxlcihldmVudCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGFzeW5jSGFuZGxlciA9PSBudWxsKVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIC8vIEdldCB0aGUgbW9zdCBzaWduaWZpY2FudCBpbmZvcm1hdGlvbiBmcm9tIHRoZSBldmVudCBhdCB0aGlzIHRpbWUsXHJcbiAgICAgICAgICAgICAgICAvLyB3aGljaCBpcyBuZWNlc3Nhcnkgc2luY2UgdGhlIHByb21pc2UgY291bGQgYWN0dWFsbHkgYmUgY2FsbGVkIG11Y2ggbGF0ZXJcclxuICAgICAgICAgICAgICAgIC8vIHdoZW4gdGhlIGVsZW1lbnQncyB2YWx1ZSAoZXRjLikgaGFzIGNoYW5nZWQuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBjYXB0dXJlZCA9IGNhcHR1cmUoZXZlbnQpO1xyXG4gICAgICAgICAgICAgICAgc2V0Q3VycmVudENhcHR1cmUoY2FwdHVyZWQpO1xyXG4gICAgICAgICAgICAgICAgc2V0SGFzQ2FwdHVyZSh0cnVlKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHN0YXJ0UHJvbWlzZSA9ICgpID0+IGFzeW5jSGFuZGxlcihjYXB0dXJlZCwgZXZlbnQpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGRlYm91bmNlID09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICB3YW50VG9TdGFydEFOZXdQcm9taXNlKHN0YXJ0UHJvbWlzZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBzZXREZWJvdW5jZWRQcm9taXNlU3RhcnRlcihfID0+IHN0YXJ0UHJvbWlzZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICByZXR1cm4gYXN5bmNIYW5kbGVyID09IG51bGwgPyB1bmRlZmluZWQgOiBzeW5jSGFuZGxlcjtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZS1hc3luYy1oYW5kbGVyLmpzLm1hcCIsImltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gXCJwcmVhY3QvaG9va3NcIjtcclxuaW1wb3J0IHsgdXNlUmVmRWxlbWVudCB9IGZyb20gXCIuL3VzZS1yZWYtZWxlbWVudFwiO1xyXG5pbXBvcnQgeyB1c2VMYXlvdXRFZmZlY3QgfSBmcm9tIFwiLi91c2UtbGF5b3V0LWVmZmVjdFwiO1xyXG5pbXBvcnQgeyB1c2VNZXJnZWRQcm9wcyB9IGZyb20gXCIuL3VzZS1tZXJnZWQtcHJvcHNcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwiLi91c2Utc3RhdGVcIjtcclxuaW1wb3J0IHsgdXNlVGltZW91dCB9IGZyb20gXCIuL3VzZS10aW1lb3V0XCI7XHJcbmltcG9ydCB7IHVzZUxvZ2ljYWxEaXJlY3Rpb24gfSBmcm9tIFwiLi91c2UtbG9naWNhbC1kaXJlY3Rpb25cIjtcclxuaW1wb3J0IHsgdXNlU3RhYmxlQ2FsbGJhY2sgfSBmcm9tIFwiLi91c2Utc3RhYmxlLWNhbGxiYWNrXCI7XHJcbi8qKlxyXG4gKiBXaGVuIHVzZWQgaW4gdGFuZGVtIHdpdGggYHVzZVJvdmluZ1RhYkluZGV4YCwgYWxsb3dzIGNvbnRyb2wgb2ZcclxuICogdGhlIHRhYmJhYmxlIGluZGV4IHdpdGggdGhlIGFycm93IGtleXMuXHJcbiAqXHJcbiAqIEBzZWUgdXNlTGlzdE5hdmlnYXRpb24sIHdoaWNoIHBhY2thZ2VzIGV2ZXJ5dGhpbmcgdXAgdG9nZXRoZXIuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gdXNlTGluZWFyTmF2aWdhdGlvbih7IGluZGV4LCBuYXZpZ2F0ZVRvRmlyc3QsIG5hdmlnYXRlVG9MYXN0LCBuYXZpZ2F0ZVRvTmV4dCwgbmF2aWdhdGVUb1ByZXYsIG1hbmFnZWRDaGlsZHJlbiwgbmF2aWdhdGlvbkRpcmVjdGlvbiwgZGlzYWJsZUFycm93S2V5cywgZGlzYWJsZUhvbWVFbmRLZXlzIH0pIHtcclxuICAgIG5hdmlnYXRpb25EaXJlY3Rpb24gPz89IFwiZWl0aGVyXCI7XHJcbiAgICBjb25zdCBjaGlsZENvdW50ID0gbWFuYWdlZENoaWxkcmVuLmxlbmd0aDtcclxuICAgIC8vIE1ha2Ugc3VyZSB0aGUgdGFiYmFibGUgaW5kZXggbmV2ZXIgZXNjYXBlcyB0aGUgYm91bmRzIG9mIGFsbCBhdmFpbGFibGUgY2hpbGRyZW5cclxuICAgIC8vIFRPRE86IEtlZXAgdHJhY2sgb2YgdGhlIG9yaWdpbmFsIGluZGV4IGFuZCBrZWVwIGl0LCBhdCBsZWFzdCB1bnRpbCBrZXlib2FyZCBuYXZpZ2F0aW9uLlxyXG4gICAgdXNlTGF5b3V0RWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAoaW5kZXggIT09IG51bGwpIHtcclxuICAgICAgICAgICAgaWYgKGluZGV4IDwgMCkge1xyXG4gICAgICAgICAgICAgICAgbmF2aWdhdGVUb0ZpcnN0KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAoY2hpbGRDb3VudCA+IDAgJiYgaW5kZXggPj0gY2hpbGRDb3VudCkge1xyXG4gICAgICAgICAgICAgICAgbmF2aWdhdGVUb0xhc3QoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0sIFtpbmRleCwgY2hpbGRDb3VudCwgbmF2aWdhdGVUb0ZpcnN0LCBuYXZpZ2F0ZVRvTGFzdF0pO1xyXG4gICAgLy8gVGhlc2UgYWxsb3cgdXMgdG8gbWFuaXB1bGF0ZSB3aGF0IG91ciBjdXJyZW50IHRhYmJhYmxlIGNoaWxkIGlzLlxyXG4gICAgLypjb25zdCBuYXZpZ2F0ZVRvSW5kZXggPSB1c2VDYWxsYmFjaygoaW5kZXg6IG51bWJlcikgPT4geyBzZXRJbmRleChpbmRleCA8IDAgPyAobWFuYWdlZENoaWxkcmVuLmxlbmd0aCArIGluZGV4KSA6IGluZGV4KTsgfSwgW10pO1xyXG4gICAgY29uc3QgbmF2aWdhdGVUb05leHQgPSB1c2VDYWxsYmFjaygoKSA9PiB7IHNldEluZGV4KChpOiBudW1iZXIgfCBudWxsKSA9PiBpID09PSBudWxsPyBudWxsISA6IGkgPj0gbWFuYWdlZENoaWxkcmVuLmxlbmd0aCAtIDE/IG1hbmFnZWRDaGlsZHJlbi5sZW5ndGggLSAxIDogKytpKTsgfSwgW10pO1xyXG4gICAgY29uc3QgbmF2aWdhdGVUb1ByZXYgPSB1c2VDYWxsYmFjaygoKSA9PiB7IHNldEluZGV4KChpOiBudW1iZXIgfCBudWxsKSA9PiBpID09PSBudWxsPyBudWxsISA6IGkgPCAwPyAwIDogLS1pKTsgfSwgW10pO1xyXG4gICAgY29uc3QgbmF2aWdhdGVUb1N0YXJ0ID0gdXNlQ2FsbGJhY2soKCkgPT4geyBuYXZpZ2F0ZVRvSW5kZXgoMCk7IH0sIFtuYXZpZ2F0ZVRvSW5kZXhdKTtcclxuICAgIGNvbnN0IG5hdmlnYXRlVG9FbmQgPSB1c2VDYWxsYmFjaygoKSA9PiB7IG5hdmlnYXRlVG9JbmRleCgtMSk7IH0sIFtuYXZpZ2F0ZVRvSW5kZXhdKTsqL1xyXG4gICAgY29uc3QgdXNlTGluZWFyTmF2aWdhdGlvbkNoaWxkID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHsgdXNlUmVmRWxlbWVudFByb3BzLCBlbGVtZW50IH0gPSB1c2VSZWZFbGVtZW50KCk7XHJcbiAgICAgICAgLy8gUHJlZmVyIHRoZSBwYXJlbnQgZWxlbWVudCdzIGRpcmVjdGlvbiBzbyB0aGF0IHdlJ3JlIG5vdCBjYWxsaW5nIGdldENvbXB1dGVkU3R5bGVcclxuICAgICAgICAvLyBvbiBldmVyeSBzaW5nbGUgaW5kaXZpZHVhbCBjaGlsZCwgd2hpY2ggaXMgbGlrZWx5IHJlZHVuZGFudC5cclxuICAgICAgICBjb25zdCB7IGNvbnZlcnRFbGVtZW50U2l6ZSwgZ2V0TG9naWNhbERpcmVjdGlvbiB9ID0gdXNlTG9naWNhbERpcmVjdGlvbihlbGVtZW50Py5wYXJlbnRFbGVtZW50ID8/IGVsZW1lbnQpO1xyXG4gICAgICAgIGNvbnN0IHVzZUxpbmVhck5hdmlnYXRpb25DaGlsZFByb3BzID0gKHByb3BzKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IG9uS2V5RG93biA9IChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAvLyBOb3QgaGFuZGxlZCBieSB0eXBlYWhlYWQgKGkuZS4gYXNzdW1lIHRoaXMgaXMgYSBrZXlib2FyZCBzaG9ydGN1dClcclxuICAgICAgICAgICAgICAgIGlmIChlLmN0cmxLZXkgfHwgZS5tZXRhS2V5KVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGluZm8gPSBnZXRMb2dpY2FsRGlyZWN0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICBsZXQgYWxsb3dzQmxvY2tOYXZpZ2F0aW9uID0gKG5hdmlnYXRpb25EaXJlY3Rpb24gPT0gXCJibG9ja1wiIHx8IG5hdmlnYXRpb25EaXJlY3Rpb24gPT0gXCJlaXRoZXJcIik7XHJcbiAgICAgICAgICAgICAgICBsZXQgYWxsb3dzSW5saW5lTmF2aWdhdGlvbiA9IChuYXZpZ2F0aW9uRGlyZWN0aW9uID09IFwiaW5saW5lXCIgfHwgbmF2aWdhdGlvbkRpcmVjdGlvbiA9PSBcImVpdGhlclwiKTtcclxuICAgICAgICAgICAgICAgIHN3aXRjaCAoZS5rZXkpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiQXJyb3dVcFwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHByb3BOYW1lID0gKGluZm8/LmJsb2NrT3JpZW50YXRpb24gPT09IFwidmVydGljYWxcIiA/IFwiYmxvY2tEaXJlY3Rpb25cIiA6IFwiaW5saW5lRGlyZWN0aW9uXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBkaXJlY3Rpb25BbGxvd2VkID0gKCFkaXNhYmxlQXJyb3dLZXlzICYmIChpbmZvPy5ibG9ja09yaWVudGF0aW9uID09PSBcInZlcnRpY2FsXCIgPyBhbGxvd3NCbG9ja05hdmlnYXRpb24gOiBhbGxvd3NJbmxpbmVOYXZpZ2F0aW9uKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkaXJlY3Rpb25BbGxvd2VkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaW5mbz8uW3Byb3BOYW1lXSA9PT0gXCJidHRcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hdmlnYXRlVG9OZXh0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYXZpZ2F0ZVRvUHJldigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcIkFycm93RG93blwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHByb3BOYW1lID0gKGluZm8/LmJsb2NrT3JpZW50YXRpb24gPT09IFwidmVydGljYWxcIiA/IFwiYmxvY2tEaXJlY3Rpb25cIiA6IFwiaW5saW5lRGlyZWN0aW9uXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBkaXJlY3Rpb25BbGxvd2VkID0gKCFkaXNhYmxlQXJyb3dLZXlzICYmIChpbmZvPy5ibG9ja09yaWVudGF0aW9uID09PSBcInZlcnRpY2FsXCIgPyBhbGxvd3NCbG9ja05hdmlnYXRpb24gOiBhbGxvd3NJbmxpbmVOYXZpZ2F0aW9uKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkaXJlY3Rpb25BbGxvd2VkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaW5mbz8uW3Byb3BOYW1lXSA9PT0gXCJidHRcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hdmlnYXRlVG9QcmV2KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYXZpZ2F0ZVRvTmV4dCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcIkFycm93TGVmdFwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHByb3BOYW1lID0gKGluZm8/LmlubGluZU9yaWVudGF0aW9uID09PSBcImhvcml6b250YWxcIiA/IFwiaW5saW5lRGlyZWN0aW9uXCIgOiBcImJsb2NrRGlyZWN0aW9uXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBkaXJlY3Rpb25BbGxvd2VkID0gKCFkaXNhYmxlQXJyb3dLZXlzICYmIChpbmZvPy5pbmxpbmVPcmllbnRhdGlvbiA9PT0gXCJob3Jpem9udGFsXCIgPyBhbGxvd3NJbmxpbmVOYXZpZ2F0aW9uIDogYWxsb3dzQmxvY2tOYXZpZ2F0aW9uKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkaXJlY3Rpb25BbGxvd2VkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaW5mbz8uW3Byb3BOYW1lXSA9PT0gXCJydGxcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hdmlnYXRlVG9OZXh0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYXZpZ2F0ZVRvUHJldigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcIkFycm93UmlnaHRcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwcm9wTmFtZSA9IChpbmZvPy5pbmxpbmVPcmllbnRhdGlvbiA9PT0gXCJob3Jpem9udGFsXCIgPyBcImlubGluZURpcmVjdGlvblwiIDogXCJibG9ja0RpcmVjdGlvblwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZGlyZWN0aW9uQWxsb3dlZCA9ICghZGlzYWJsZUFycm93S2V5cyAmJiAoaW5mbz8uaW5saW5lT3JpZW50YXRpb24gPT09IFwiaG9yaXpvbnRhbFwiID8gYWxsb3dzSW5saW5lTmF2aWdhdGlvbiA6IGFsbG93c0Jsb2NrTmF2aWdhdGlvbikpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGlyZWN0aW9uQWxsb3dlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGluZm8/Lltwcm9wTmFtZV0gPT09IFwicnRsXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYXZpZ2F0ZVRvUHJldigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmF2aWdhdGVUb05leHQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcIkhvbWVcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFkaXNhYmxlSG9tZUVuZEtleXMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hdmlnYXRlVG9GaXJzdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiRW5kXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghZGlzYWJsZUhvbWVFbmRLZXlzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYXZpZ2F0ZVRvTGFzdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgcmV0dXJuIHVzZVJlZkVsZW1lbnRQcm9wcyh1c2VNZXJnZWRQcm9wcygpKHsgb25LZXlEb3duIH0sIHByb3BzKSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICB1c2VMaW5lYXJOYXZpZ2F0aW9uQ2hpbGRQcm9wc1xyXG4gICAgICAgIH07XHJcbiAgICB9LCBbbmF2aWdhdGlvbkRpcmVjdGlvbiwgbmF2aWdhdGVUb05leHQsIG5hdmlnYXRlVG9QcmV2LCBuYXZpZ2F0ZVRvRmlyc3QsIG5hdmlnYXRlVG9MYXN0LCAhIWRpc2FibGVBcnJvd0tleXMsICEhZGlzYWJsZUhvbWVFbmRLZXlzXSk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHVzZUxpbmVhck5hdmlnYXRpb25DaGlsZCxcclxuICAgIH07XHJcbn1cclxuLyoqXHJcbiAqIEFsbG93cyBmb3IgdGhlIHNlbGVjdGlvbiBvZiBhIG1hbmFnZWQgY2hpbGQgYnkgdHlwaW5nIHRoZSBnaXZlbiB0ZXh0IGFzc29jaWF0ZWQgd2l0aCBpdC5cclxuICpcclxuICogQHNlZSB1c2VMaXN0TmF2aWdhdGlvbiwgd2hpY2ggcGFja2FnZXMgZXZlcnl0aGluZyB1cCB0b2dldGhlci5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiB1c2VUeXBlYWhlYWROYXZpZ2F0aW9uKHsgY29sbGF0b3IsIGdldEluZGV4LCB0eXBlYWhlYWRUaW1lb3V0LCBzZXRJbmRleCB9KSB7XHJcbiAgICAvLyBGb3IgdHlwZWFoZWFkLCBrZWVwIHRyYWNrIG9mIHdoYXQgb3VyIGN1cnJlbnQgXCJzZWFyY2hcIiBzdHJpbmcgaXMgKGlmIHdlIGhhdmUgb25lKVxyXG4gICAgLy8gYW5kIGFsc28gY2xlYXIgaXQgZXZlcnkgMTAwMCBtcyBzaW5jZSB0aGUgbGFzdCB0aW1lIGl0IGNoYW5nZWQuXHJcbiAgICAvLyBOZXh0LCBrZWVwIGEgbWFwcGluZyBvZiB0eXBlYWhlYWQgdmFsdWVzIHRvIGluZGljZXMgZm9yIGZhc3RlciBzZWFyY2hpbmcuXHJcbiAgICAvLyBBbmQsIGZvciB0aGUgdXNlcidzIHNha2UsIGxldCB0aGVtIGtub3cgd2hlbiB0aGVpciB0eXBlYWhlYWQgY2FuJ3QgbWF0Y2ggYW55dGhpbmcgYW55bW9yZVxyXG4gICAgY29uc3QgW2N1cnJlbnRUeXBlYWhlYWQsIHNldEN1cnJlbnRUeXBlYWhlYWQsIGdldEN1cnJlbnRUeXBlYWhlYWRdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgICB1c2VUaW1lb3V0KHsgdGltZW91dDogdHlwZWFoZWFkVGltZW91dCA/PyAxMDAwLCBjYWxsYmFjazogKCkgPT4geyBzZXRDdXJyZW50VHlwZWFoZWFkKG51bGwpOyBzZXRJbnZhbGlkVHlwZWFoZWFkKG51bGwpOyB9LCB0cmlnZ2VySW5kZXg6IGN1cnJlbnRUeXBlYWhlYWQgfSk7XHJcbiAgICBjb25zdCBzb3J0ZWRUeXBlYWhlYWRJbmZvID0gdXNlUmVmKFtdKTtcclxuICAgIGNvbnN0IFtpbnZhbGlkVHlwZWFoZWFkLCBzZXRJbnZhbGlkVHlwZWFoZWFkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIC8vIEhhbmRsZSB0eXBlYWhlYWQgZm9yIGlucHV0IG1ldGhvZCBlZGl0b3JzIGFzIHdlbGxcclxuICAgIC8vIEVzc2VudGlhbGx5LCB3aGVuIGFjdGl2ZSwgaWdub3JlIGZ1cnRoZXIga2V5cyBcclxuICAgIC8vIGJlY2F1c2Ugd2UncmUgd2FpdGluZyBmb3IgYSBDb21wb3NpdGlvbkVuZCBldmVudFxyXG4gICAgY29uc3QgW2ltZUFjdGl2ZSwgc2V0SW1lQWN0aXZlLCBnZXRJbWVBY3RpdmVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgLy8gQmVjYXVzZSBjb21wb3NpdGlvbiBldmVudHMgZmlyZSAqYWZ0ZXIqIGtleWRvd24gZXZlbnRzIFxyXG4gICAgLy8gKGJ1dCB3aXRoaW4gdGhlIHNhbWUgdGFzaywgd2hpY2gsIFRPRE8sIGNvdWxkIGJlIGJyb3dzZXItZGVwZW5kZW50KSxcclxuICAgIC8vIHdlIGNhbiB1c2UgdGhpcyB0byBrZWVwIHRyYWNrIG9mIHdoaWNoIGV2ZW50IHdlJ3JlIGxpc3RlbmluZyBmb3Igb24gdGhlIGZpcnN0IGtleWRvd24uXHJcbiAgICBjb25zdCBbbmV4dFR5cGVhaGVhZENoYXIsIHNldE5leHRUeXBlYWhlYWRDaGFyXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gICAgdXNlTGF5b3V0RWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAobmV4dFR5cGVhaGVhZENoYXIgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgc2V0Q3VycmVudFR5cGVhaGVhZCh0eXBlYWhlYWQgPT4gKCh0eXBlYWhlYWQgPz8gXCJcIikgKyBuZXh0VHlwZWFoZWFkQ2hhcikpO1xyXG4gICAgICAgICAgICBzZXROZXh0VHlwZWFoZWFkQ2hhcihudWxsKTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbbmV4dFR5cGVhaGVhZENoYXJdKTtcclxuICAgIGNvbnN0IGNvbXBhcmF0b3IgPSB1c2VTdGFibGVDYWxsYmFjaygobGhzLCByaHMpID0+IHtcclxuICAgICAgICBsZXQgY29tcGFyZTtcclxuICAgICAgICBpZiAodHlwZW9mIGxocyA9PT0gXCJzdHJpbmdcIiAmJiB0eXBlb2YgcmhzLnRleHQgPT09IFwic3RyaW5nXCIpIHtcclxuICAgICAgICAgICAgLy8gRm9yIHRoZSBwdXJwb3NlcyBvZiB0eXBlYWhlYWQsIG9ubHkgY29tcGFyZSBhIHN0cmluZyBvZiB0aGUgc2FtZSBzaXplIGFzIG91ciBjdXJyZW50bHkgdHlwZWQgc3RyaW5nLlxyXG4gICAgICAgICAgICAvLyBCeSBub3JtYWxpemluZyB0aGVtIGZpcnN0LCB3ZSBlbnN1cmUgdGhpcyBieXRlLWJ5LWJ5dGUgaGFuZGxpbmcgb2YgcmF3IGNoYXJhY3RlciBkYXRhIHdvcmtzIG91dCBva2F5LlxyXG4gICAgICAgICAgICBsZXQgc2FmZUxocyA9IGxocy5ub3JtYWxpemUoXCJORkRcIik7XHJcbiAgICAgICAgICAgIGxldCBzYWZlUmhzID0gcmhzLnRleHQubm9ybWFsaXplKFwiTkZEXCIpLnN1YnN0cigwLCBzYWZlTGhzLmxlbmd0aCk7XHJcbiAgICAgICAgICAgIGlmIChjb2xsYXRvcilcclxuICAgICAgICAgICAgICAgIGNvbXBhcmUgPSBjb2xsYXRvci5jb21wYXJlKHNhZmVMaHMsIHNhZmVSaHMpO1xyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICBjb21wYXJlID0gc2FmZUxocy50b0xvd2VyQ2FzZSgpLmxvY2FsZUNvbXBhcmUoc2FmZVJocy50b0xvd2VyQ2FzZSgpID8/IFwiXCIpO1xyXG4gICAgICAgICAgICByZXR1cm4gY29tcGFyZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGxocyAtIHJocztcclxuICAgIH0pO1xyXG4gICAgLy8gSGFuZGxlIGNoYW5nZXMgaW4gdHlwZWFoZWFkIHRoYXQgY2F1c2UgY2hhbmdlcyB0byB0aGUgdGFiYmFibGUgaW5kZXhcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKGN1cnJlbnRUeXBlYWhlYWQgJiYgc29ydGVkVHlwZWFoZWFkSW5mby5jdXJyZW50Lmxlbmd0aCkge1xyXG4gICAgICAgICAgICBsZXQgc29ydGVkVHlwZWFoZWFkSW5kZXggPSBiaW5hcnlTZWFyY2goc29ydGVkVHlwZWFoZWFkSW5mby5jdXJyZW50LCBjdXJyZW50VHlwZWFoZWFkLCBjb21wYXJhdG9yKTtcclxuICAgICAgICAgICAgaWYgKHNvcnRlZFR5cGVhaGVhZEluZGV4IDwgMCkge1xyXG4gICAgICAgICAgICAgICAgLy8gVGhlIHVzZXIgaGFzIHR5cGVkIGFuIGVudHJ5IHRoYXQgZG9lc24ndCBleGlzdCBpbiB0aGUgbGlzdFxyXG4gICAgICAgICAgICAgICAgLy8gKG9yIG1vcmUgc3BlY2lmaWNhbGx5IFwiZm9yIHdoaWNoIHRoZXJlIGlzIG5vIGVudHJ5IHRoYXQgc3RhcnRzIHdpdGggdGhhdCBpbnB1dFwiKVxyXG4gICAgICAgICAgICAgICAgc2V0SW52YWxpZFR5cGVhaGVhZCh0cnVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHNldEludmFsaWRUeXBlYWhlYWQoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgLypcclxuICAgICAgICAgICAgICAgICAgV2Uga25vdyByb3VnaGx5IHdoZXJlLCBpbiB0aGUgc29ydGVkIGFycmF5IG9mIHN0cmluZ3MsIG91ciBuZXh0IHR5cGVhaGVhZCBsb2NhdGlvbiBpcy5cclxuICAgICAgICAgICAgICAgICAgQnV0IHJvdWdobHkgaXNuJ3QgZ29vZCBlbm91Z2ggaWYgdGhlcmUgYXJlIG11bHRpcGxlIG1hdGNoZXMuXHJcbiAgICAgICAgICAgICAgICAgIFRvIGNvbnZlcnQgb3VyIHNvcnRlZCBpbmRleCB0byB0aGUgdW5zb3J0ZWQgaW5kZXggd2UgbmVlZCwgd2UgaGF2ZSB0byBmaW5kIHRoZSBmaXJzdFxyXG4gICAgICAgICAgICAgICAgICBlbGVtZW50IHRoYXQgbWF0Y2hlcyB1cyAqYW5kKiAoaWYgYW55IHN1Y2ggZXhpc3QpIGlzICphZnRlciogb3VyIGN1cnJlbnQgc2VsZWN0aW9uLlxyXG5cclxuICAgICAgICAgICAgICAgICAgSW4gb3RoZXIgd29yZHMsIHRoZSBvbmx5IHdheSB0eXBlYWhlYWQgbW92ZXMgYmFja3dhcmRzIHJlbGF0aXZlIHRvIG91ciBjdXJyZW50XHJcbiAgICAgICAgICAgICAgICAgIHBvc2l0aW9uIGlzIGlmIHRoZSBvbmx5IG90aGVyIG9wdGlvbiBpcyBiZWhpbmQgdXMuXHJcblxyXG4gICAgICAgICAgICAgICAgICBJdCdzIG5vdCBzcGVjaWZpZWQgaW4gV0FJLUFSSUEgd2hhdCB0byBkbyBpbiB0aGF0IGNhc2UuICBJIHN1cHBvc2Ugd3JhcCBiYWNrIHRvIHRoZSBzdGFydD9cclxuICAgICAgICAgICAgICAgICAgVGhvdWdoIHRoZXJlJ3MgYWxzbyBhIGNhc2UgZm9yIGp1c3QgZ29pbmcgdXB3YXJkcyB0byB0aGUgbmVhcmVzdCB0byBwcmV2ZW50IGp1bXBpbmVzcy5cclxuICAgICAgICAgICAgICAgICAgQnV0IGlmIHlvdSdyZSBhbHJlYWR5IGRvaW5nIHR5cGVhaGVhZCBvbiBhbiB1bnNvcnRlZCBsaXN0LCBsaWtlLCBqdW1waW5lc3MgY2FuJ3QgYmUgYXZvaWRlZC5cclxuICAgICAgICAgICAgICAgICAgSSBkdW5uby4gR29pbmcgYmFjayB0byB0aGUgc3RhcnQgaXMgdGhlIHNpbXBsaXN0IHRob3VnaC5cclxuXHJcbiAgICAgICAgICAgICAgICAgIEJhc2ljYWxseSB3aGF0IHRoaXMgZG9lczogU3RhcnRpbmcgZnJvbSB3aGVyZSB3ZSBmb3VuZCBvdXJzZWx2ZXMgYWZ0ZXIgb3VyIGJpbmFyeSBzZWFyY2gsXHJcbiAgICAgICAgICAgICAgICAgIHNjYW4gYmFja3dhcmRzIGFuZCBmb3J3YXJkcyB0aHJvdWdoIGFsbCBhZGphY2VudCBlbnRyaWVzIHRoYXQgYWxzbyBjb21wYXJlIGVxdWFsbHkgc28gdGhhdFxyXG4gICAgICAgICAgICAgICAgICB3ZSBjYW4gZmluZCB0aGUgb25lIHdob3NlIGB1bnNvcnRlZEluZGV4YCBpcyB0aGUgbG93ZXN0IGFtb25nc3QgYWxsIG90aGVyIGVxdWFsIHN0cmluZ3NcclxuICAgICAgICAgICAgICAgICAgKGFuZCBhbHNvIHRoZSBsb3dlc3QgYHVuc29ydGVkSW5kZXhgIHlhZGRhIHlhZGRhIGV4Y2VwdCB0aGF0IGl0IGNvbWVzIGFmdGVyIHVzKS5cclxuXHJcbiAgICAgICAgICAgICAgICAgIFRPRE86IFRoZSBiaW5hcnkgc2VhcmNoIHN0YXJ0cyB0aGlzIG9mZiB3aXRoIGEgc29saWQgTyhsb2cgbiksIGJ1dCBvbmUtY2hhcmFjdGVyXHJcbiAgICAgICAgICAgICAgICAgIHNlYXJjaGVzIGFyZSwgdGhhbmtzIHRvIHBpZ2VvbmhvbGUgcHJpbmNpcGFsLCBldmVudHVhbGx5IGd1YXJhbnRlZWQgdG8gYmVjb21lXHJcbiAgICAgICAgICAgICAgICAgIE8obipsb2cgbikuIFRoaXMgaXMgYW5ub3lpbmcgYnV0IHByb2JhYmx5IG5vdCBlYXNpbHkgc29sdmFibGU/IFRoZXJlIGNvdWxkIGJlIGFuXHJcbiAgICAgICAgICAgICAgICAgIGV4Y2VwdGlvbiBmb3Igb25lLWNoYXJhY3RlciBzdHJpbmdzLCBidXQgdGhhdCdzIGp1c3Qga2lja2luZyB0aGUgY2FuIGRvd25cclxuICAgICAgICAgICAgICAgICAgdGhlIHJvYWQuIE1heWJlIG9uZSBvciB0d28gY2hhcmFjdGVycyB3b3VsZCBiZSBnb29kIGVub3VnaCB0aG91Z2guXHJcbiAgICAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICAgICAgLy8gVGhlc2UgYXJlIHVzZWQgdG8ga2VlcCB0cmFjayBvZiB0aGUgY2FuZGlkYXRlcycgcG9zaXRpb25zIGluIGJvdGggb3VyIHNvcnRlZCBhcnJheSBhbmQgdGhlIHVuc29ydGVkIERPTS5cclxuICAgICAgICAgICAgICAgIGxldCBsb3dlc3RVbnNvcnRlZEluZGV4QWxsID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIGxldCBsb3dlc3RTb3J0ZWRJbmRleEFsbCA9IHNvcnRlZFR5cGVhaGVhZEluZGV4O1xyXG4gICAgICAgICAgICAgICAgLy8gVGhlc2UgdHdvIGFyZSBvbmx5IHNldCBmb3IgZWxlbWVudHMgdGhhdCBhcmUgYWhlYWQgb2YgdXMsIGJ1dCB0aGUgcHJpbmNpcGxlJ3MgdGhlIHNhbWUgb3RoZXJ3aXNlXHJcbiAgICAgICAgICAgICAgICBsZXQgbG93ZXN0VW5zb3J0ZWRJbmRleE5leHQgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgbGV0IGxvd2VzdFNvcnRlZEluZGV4TmV4dCA9IHNvcnRlZFR5cGVhaGVhZEluZGV4O1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdXBkYXRlQmVzdEZpdCA9ICh1KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGxvd2VzdFVuc29ydGVkSW5kZXhBbGwgPT0gbnVsbCB8fCB1IDwgbG93ZXN0VW5zb3J0ZWRJbmRleEFsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsb3dlc3RVbnNvcnRlZEluZGV4QWxsID0gdTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbG93ZXN0U29ydGVkSW5kZXhBbGwgPSBpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoKGxvd2VzdFVuc29ydGVkSW5kZXhOZXh0ID09IG51bGwgfHwgdSA8IGxvd2VzdFVuc29ydGVkSW5kZXhOZXh0KSAmJiB1ID4gKGdldEluZGV4KCkgPz8gLUluZmluaXR5KSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsb3dlc3RVbnNvcnRlZEluZGV4TmV4dCA9IHU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvd2VzdFNvcnRlZEluZGV4TmV4dCA9IGk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIGxldCBpID0gc29ydGVkVHlwZWFoZWFkSW5kZXg7XHJcbiAgICAgICAgICAgICAgICB3aGlsZSAoaSA+PSAwICYmIGNvbXBhcmF0b3IoY3VycmVudFR5cGVhaGVhZCwgc29ydGVkVHlwZWFoZWFkSW5mby5jdXJyZW50W2ldKSA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlQmVzdEZpdChzb3J0ZWRUeXBlYWhlYWRJbmZvLmN1cnJlbnRbaV0udW5zb3J0ZWRJbmRleCk7XHJcbiAgICAgICAgICAgICAgICAgICAgLS1pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaSA9IHNvcnRlZFR5cGVhaGVhZEluZGV4O1xyXG4gICAgICAgICAgICAgICAgd2hpbGUgKGkgPCBzb3J0ZWRUeXBlYWhlYWRJbmZvLmN1cnJlbnQubGVuZ3RoICYmIGNvbXBhcmF0b3IoY3VycmVudFR5cGVhaGVhZCwgc29ydGVkVHlwZWFoZWFkSW5mby5jdXJyZW50W2ldKSA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlQmVzdEZpdChzb3J0ZWRUeXBlYWhlYWRJbmZvLmN1cnJlbnRbaV0udW5zb3J0ZWRJbmRleCk7XHJcbiAgICAgICAgICAgICAgICAgICAgKytpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKGxvd2VzdFVuc29ydGVkSW5kZXhOZXh0ICE9PSBudWxsKVxyXG4gICAgICAgICAgICAgICAgICAgIHNldEluZGV4KHNvcnRlZFR5cGVhaGVhZEluZm8uY3VycmVudFtsb3dlc3RTb3J0ZWRJbmRleE5leHRdLnVuc29ydGVkSW5kZXgpO1xyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAobG93ZXN0VW5zb3J0ZWRJbmRleEFsbCAhPT0gbnVsbClcclxuICAgICAgICAgICAgICAgICAgICBzZXRJbmRleChzb3J0ZWRUeXBlYWhlYWRJbmZvLmN1cnJlbnRbbG93ZXN0U29ydGVkSW5kZXhBbGxdLnVuc29ydGVkSW5kZXgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW2N1cnJlbnRUeXBlYWhlYWRdKTtcclxuICAgIGNvbnN0IHVzZVR5cGVhaGVhZE5hdmlnYXRpb25DaGlsZCA9IHVzZUNhbGxiYWNrKCh7IHRleHQsIC4uLmkgfSkgPT4ge1xyXG4gICAgICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0ZXh0KSB7XHJcbiAgICAgICAgICAgICAgICAvLyBGaW5kIHdoZXJlIHRvIGluc2VydCB0aGlzIGl0ZW0uXHJcbiAgICAgICAgICAgICAgICAvLyBCZWNhdXNlIGFsbCBpbmRleCB2YWx1ZXMgc2hvdWxkIGJlIHVuaXF1ZSwgdGhlIHJldHVybmVkIHNvcnRlZEluZGV4XHJcbiAgICAgICAgICAgICAgICAvLyBzaG91bGQgYWx3YXlzIHJlZmVyIHRvIGEgbmV3IGxvY2F0aW9uIChpLmUuIGJlIG5lZ2F0aXZlKSAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGxldCBzb3J0ZWRJbmRleCA9IGJpbmFyeVNlYXJjaChzb3J0ZWRUeXBlYWhlYWRJbmZvLmN1cnJlbnQsIHRleHQsIGNvbXBhcmF0b3IpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5hc3NlcnQoc29ydGVkSW5kZXggPCAwKTtcclxuICAgICAgICAgICAgICAgIGlmIChzb3J0ZWRJbmRleCA8IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBzb3J0ZWRUeXBlYWhlYWRJbmZvLmN1cnJlbnQuc3BsaWNlKC1zb3J0ZWRJbmRleCAtIDEsIDAsIHsgdGV4dCwgdW5zb3J0ZWRJbmRleDogaS5pbmRleCB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gV2hlbiB1bm1vdW50aW5nLCBmaW5kIHdoZXJlIHdlIHdlcmUgYW5kIHJlbW92ZSBvdXJzZWx2ZXMuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gQWdhaW4sIHdlIHNob3VsZCBhbHdheXMgZmluZCBvdXJzZWx2ZXMgYmVjYXVzZSB0aGVyZSBzaG91bGQgYmUgbm8gZHVwbGljYXRlIHZhbHVlcyBpZiBlYWNoIGluZGV4IGlzIHVuaXF1ZS5cclxuICAgICAgICAgICAgICAgICAgICBsZXQgc29ydGVkSW5kZXggPSBiaW5hcnlTZWFyY2goc29ydGVkVHlwZWFoZWFkSW5mby5jdXJyZW50LCB0ZXh0LCBjb21wYXJhdG9yKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmFzc2VydChzb3J0ZWRJbmRleCA+PSAwKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoc29ydGVkSW5kZXggPj0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzb3J0ZWRUeXBlYWhlYWRJbmZvLmN1cnJlbnQuc3BsaWNlKHNvcnRlZEluZGV4LCAxKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSwgW3RleHRdKTtcclxuICAgICAgICBjb25zdCB1c2VUeXBlYWhlYWROYXZpZ2F0aW9uQ2hpbGRQcm9wcyA9IGZ1bmN0aW9uICh7IC4uLnByb3BzIH0pIHtcclxuICAgICAgICAgICAgY29uc3QgeyB1c2VSZWZFbGVtZW50UHJvcHMsIGVsZW1lbnQgfSA9IHVzZVJlZkVsZW1lbnQoKTtcclxuICAgICAgICAgICAgY29uc3Qgb25Db21wb3NpdGlvblN0YXJ0ID0gKGUpID0+IHsgc2V0SW1lQWN0aXZlKHRydWUpOyB9O1xyXG4gICAgICAgICAgICBjb25zdCBvbkNvbXBvc2l0aW9uRW5kID0gKGUpID0+IHtcclxuICAgICAgICAgICAgICAgIHNldE5leHRUeXBlYWhlYWRDaGFyKGUuZGF0YSk7XHJcbiAgICAgICAgICAgICAgICBzZXRJbWVBY3RpdmUoZmFsc2UpO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBjb25zdCBvbktleURvd24gPSAoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaW1lQWN0aXZlID0gZ2V0SW1lQWN0aXZlKCk7XHJcbiAgICAgICAgICAgICAgICBsZXQga2V5ID0gZS5rZXk7XHJcbiAgICAgICAgICAgICAgICAvLyBOb3QgaGFuZGxlZCBieSB0eXBlYWhlYWQgKGkuZS4gYXNzdW1lIHRoaXMgaXMgYSBrZXlib2FyZCBzaG9ydGN1dClcclxuICAgICAgICAgICAgICAgIGlmIChlLmN0cmxLZXkgfHwgZS5tZXRhS2V5KVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIGlmICghaW1lQWN0aXZlICYmIGUua2V5ID09PSBcIkJhY2tzcGFjZVwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gUmVtb3ZlIHRoZSBsYXN0IGNoYXJhY3RlciBpbiBhIHdheSB0aGF0IGRvZXNuJ3Qgc3BsaXQgVVRGLTE2IHN1cnJvZ2F0ZXMuXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0Q3VycmVudFR5cGVhaGVhZCh0ID0+IHQgPT09IG51bGwgPyBudWxsIDogWy4uLnRdLnJldmVyc2UoKS5zbGljZSgxKS5yZXZlcnNlKCkuam9pbihcIlwiKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy8gVGhlIGtleSBwcm9wZXJ0eSByZXByZXNlbnRzIHRoZSB0eXBlZCBjaGFyYWN0ZXIgT1IgdGhlIFwibmFtZWQga2V5IGF0dHJpYnV0ZVwiIG9mIHRoZSBrZXkgcHJlc3NlZC5cclxuICAgICAgICAgICAgICAgIC8vIFRoZXJlJ3Mgbm8gZGVmaW5pdGUgd2F5IHRvIHRlbGwgdGhlIGRpZmZlcmVuY2UsIGJ1dCBmb3IgYWxsIGludGVudHMgYW5kIHB1cnBvc2VzXHJcbiAgICAgICAgICAgICAgICAvLyB0aGVyZSBhcmUgbm8gb25lLWNoYXJhY3RlciBuYW1lcywgYW5kIHRoZXJlIGFyZSBubyBub24tQVNDSUktYWxwaGEgbmFtZXMuXHJcbiAgICAgICAgICAgICAgICAvLyBUaHVzLCBhbnkgb25lLWNoYXJhY3RlciBvciBub24tQVNDSUkgdmFsdWUgZm9yIGBrZXlgIGlzICphbG1vc3QgY2VydGFpbmx5KiBhIHR5cGVkIGNoYXJhY3Rlci5cclxuICAgICAgICAgICAgICAgIGNvbnN0IGlzQ2hhcmFjdGVyS2V5ID0gKGtleS5sZW5ndGggPT09IDEgfHwgIS9eW0EtWmEtel0vLnRlc3Qoa2V5KSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoaXNDaGFyYWN0ZXJLZXkpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoa2V5ID09IFwiIFwiICYmIChnZXRDdXJyZW50VHlwZWFoZWFkKCkgPz8gXCJcIikudHJpbSgpLmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIERvbid0IGRvIGFueXRoaW5nIGJlY2F1c2UgYSBzcGFjZWJhciBjYW4ndCBldmVyIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBpbml0aWF0ZSBhIHR5cGVhaGVhZCwgb25seSBjb250aW51ZSBvbmUuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIChTcGVjaWZpY2FsbHksIGxldCB0aGUgZXZlbnQgY29udGludWUgcHJvcGFnYXRpb24gaW4gdGhpcyBjYXNlKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBOb3RlOiBXb24ndCBiZSB0cnVlIGZvciB0aGUgZmlyc3Qga2V5ZG93blxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBidXQgd2lsbCBiZSBvdmVyd3JpdHRlbiBiZWZvcmUgdXNlTGF5b3V0RWZmZWN0IGlzIGNhbGxlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB0byBhY3R1YWxseSBhcHBseSB0aGUgY2hhbmdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghaW1lQWN0aXZlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0TmV4dFR5cGVhaGVhZENoYXIoa2V5KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIHJldHVybiB1c2VNZXJnZWRQcm9wcygpKHVzZVJlZkVsZW1lbnRQcm9wcyh7IG9uS2V5RG93biwgb25Db21wb3NpdGlvblN0YXJ0LCBvbkNvbXBvc2l0aW9uRW5kLCB9KSwgcHJvcHMpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgdXNlVHlwZWFoZWFkTmF2aWdhdGlvbkNoaWxkUHJvcHNcclxuICAgICAgICB9O1xyXG4gICAgfSwgW10pO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB1c2VUeXBlYWhlYWROYXZpZ2F0aW9uQ2hpbGQsXHJcbiAgICAgICAgY3VycmVudFR5cGVhaGVhZCxcclxuICAgICAgICBpbnZhbGlkVHlwZWFoZWFkLFxyXG4gICAgfTtcclxufVxyXG4vKipcclxuICogWW91ciB1c3VhbCBiaW5hcnkgc2VhcmNoIGltcGxlbWVudGF0aW9uLlxyXG4gKlxyXG4gKiBJdCdzIHVzZWQgaGVyZSB0byBxdWlja2x5IGZpbmQgYSBnb29kIHNwb3QgdG8gc3RhcnQgc2VhcmNoaW5nIGZvciBvdXIgbmV4dCB0eXBlYWhlYWQgY2FuZGlkYXRlLlxyXG4gKiBAcGFyYW0gYXJyYXkgVGhlIGFycmF5IHRvIHNlYXJjaCB0aHJvdWdoXHJcbiAqIEBwYXJhbSB3YW50ZWQgVGhlIHZhbHVlIHlvdSdkIGxpa2UgdG8gZmluZFxyXG4gKiBAcGFyYW0gY29tcGFyYXRvciBDb21wYXJlcyBgd2FudGVkYCB3aXRoIHRoZSBjdXJyZW50IHZhbHVlIGluIGBhcnJheWBcclxuICogQHJldHVybnMgQSBub24tbmVnYXRpdmUgdmFsdWUgaWYgYHdhbnRlZGAgd2FzIGZvdW5kLCBhbmQgYSBuZWdhdGl2ZSBudW1iZXIgaWYgbm90LlxyXG4gKiBUaGUgYWJzb2x1dGUgdmFsdWUgb2YgdGhpcyBudW1iZXIsIG1pbnVzIG9uZSwgaXMgd2hlcmUgYHdhbnRlZGAgKndvdWxkKiBiZSBmb3VuZCBpZiBpdCAqd2FzKiBpbiBgYXJyYXlgXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gYmluYXJ5U2VhcmNoKGFycmF5LCB3YW50ZWQsIGNvbXBhcmF0b3IpIHtcclxuICAgIHZhciBmaXJzdEluZGV4ID0gMDtcclxuICAgIHZhciBsYXN0SW5kZXggPSBhcnJheS5sZW5ndGggLSAxO1xyXG4gICAgd2hpbGUgKGZpcnN0SW5kZXggPD0gbGFzdEluZGV4KSB7XHJcbiAgICAgICAgdmFyIHRlc3RJbmRleCA9IChsYXN0SW5kZXggKyBmaXJzdEluZGV4KSA+PiAxO1xyXG4gICAgICAgIHZhciBjb21wYXJpc29uUmVzdWx0ID0gY29tcGFyYXRvcih3YW50ZWQsIGFycmF5W3Rlc3RJbmRleF0pO1xyXG4gICAgICAgIGlmIChjb21wYXJpc29uUmVzdWx0ID4gMCkge1xyXG4gICAgICAgICAgICBmaXJzdEluZGV4ID0gdGVzdEluZGV4ICsgMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoY29tcGFyaXNvblJlc3VsdCA8IDApIHtcclxuICAgICAgICAgICAgbGFzdEluZGV4ID0gdGVzdEluZGV4IC0gMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0ZXN0SW5kZXg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIC1maXJzdEluZGV4IC0gMTtcclxufVxyXG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2Uta2V5Ym9hcmQtbmF2aWdhdGlvbi5qcy5tYXAiLCJpbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlUmVmIH0gZnJvbSBcInByZWFjdC9ob29rc1wiO1xyXG5pbXBvcnQgeyB1c2VMYXlvdXRFZmZlY3QgfSBmcm9tIFwiLi91c2UtbGF5b3V0LWVmZmVjdFwiO1xyXG5pbXBvcnQgeyB1c2VSZWZFbGVtZW50IH0gZnJvbSBcIi4vdXNlLXJlZi1lbGVtZW50XCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcIi4vdXNlLXN0YXRlXCI7XHJcbi8qKlxyXG4gKiBBbGxvd3MgYSBwYXJlbnQgY29tcG9uZW50IHRvIGFjY2VzcyBpbmZvcm1hdGlvbiBhYm91dCBjZXJ0YWluXHJcbiAqIGNoaWxkIGNvbXBvbmVudHMgb25jZSB0aGV5IGhhdmUgcmVuZGVyZWQuXHJcbiAqXHJcbiAqIFRoaXMgaG9vayBpcyBzbGlnaHRseSBtb3JlIGNvbXBsaWNhdGVkIGluIHRoYXQgaXQgcmV0dXJucyBib3RoIGFcclxuICogcHJvcC1tb2RpZnlpbmcgaG9vaywgYnV0IGFsc28gYSBob29rIHRoYXQgZWFjaCBjaGlsZCB3aWxsIG5lZWRcclxuICogdG8gdXNlOiBgdXNlTWFuYWdlZENoaWxkYC4gIEl0J3Mgc3RhYmxlIGFjcm9zcyByZW5kZXJzLCBzbyBqdXN0XHJcbiAqIHRvc3MgaXQgaW50byBhIGBDb250ZXh0YCBzbyB0aGUgY2hpbGRyZW4gY2FuIGhhdmUgYWNjZXNzIHRvIGl0LlxyXG4gKiBUaGlzIGZ1bmN0aW9uIHJlZ2lzdGVycyB0aGUgY2hpbGQgd2l0aCB0aGUgcGFyZW50IGFuZCBwcm92aWRlc1xyXG4gKiBpdCB3aXRoIGFueSByZXF1ZXN0ZWQgaW5mb3JtYXRpb24sIGJ1dCBkb2Vzbid0IGRvIGFueXRoaW5nIGVsc2VcclxuICogdW50aWwgaXQgdW5tb3VudHMgYW5kIHJldHJhY3RzIHRoYXQgaW5mb3JtYXRpb24uXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gdXNlQ2hpbGRNYW5hZ2VyKCkge1xyXG4gICAgLy8gVGhpcyBpcyBibGluZGx5IHVwZGF0ZWQgYW55IHRpbWUgYSBjaGlsZCBtb3VudHMgb3IgdW5tb3VudHMgaXRzZWxmLlxyXG4gICAgLy8gVXNlZCB0byBtYWtlIHN1cmUgdGhhdCBhbnkgdGltZSB0aGUgYXJyYXkgb2YgbWFuYWdlZCBjaGlsZHJlbiB1cGRhdGVzLFxyXG4gICAgLy8gd2UgYWxzbyByZS1yZW5kZXIuXHJcbiAgICBjb25zdCBbY2hpbGRVcGRhdGVJbmRleCwgc2V0Q2hpbGRVcGRhdGVJbmRleF0gPSB1c2VTdGF0ZSgwKTtcclxuICAgIGNvbnN0IFt0b3RhbENoaWxkcmVuTW91bnRlZCwgc2V0VG90YWxDaGlsZHJlbk1vdW50ZWQsIGdldFRvdGFsQ2hpbGRyZW5Nb3VudGVkXSA9IHVzZVN0YXRlKDApO1xyXG4gICAgY29uc3QgW3RvdGFsQ2hpbGRyZW5Vbm91bnRlZCwgc2V0VG90YWxDaGlsZHJlblVub3VudGVkLCBnZXRUb3RhbENoaWxkcmVuVW5vdW50ZWRdID0gdXNlU3RhdGUoMCk7XHJcbiAgICBjb25zdCBjaGlsZHJlbkN1cnJlbnRseU1vdW50ZWQgPSB0b3RhbENoaWxkcmVuTW91bnRlZCAtIHRvdGFsQ2hpbGRyZW5Vbm91bnRlZDtcclxuICAgIGNvbnN0IG1hbmFnZWRDaGlsZHJlbiA9IHVzZVJlZihbXSAvKiogVE9ETzogQW55IHByb2JsZW1zIGNhdXNlZCBieSB1c2luZyBhbiBhcnJheSB3aGVuIGl0IHNob3VsZCBiZSBhbiBvYmplY3Q/ICovKTtcclxuICAgIGNvbnN0IG1vdW50ZWRDaGlsZHJlbiA9IHVzZVJlZihbXSk7XHJcbiAgICBjb25zdCBtb3VudE9yZGVyID0gdXNlUmVmKG5ldyBNYXAoKSk7XHJcbiAgICBjb25zdCBpbmRpY2VzQnlFbGVtZW50ID0gdXNlUmVmKG5ldyBNYXAoKSk7XHJcbiAgICBjb25zdCBkZWxldGVkSW5kaWNlcyA9IHVzZVJlZihuZXcgU2V0KCkpO1xyXG4gICAgLy8gVXNlZCB0byBrZWVwIHRyYWNrIG9mIGluZGljZXMgdGhhdCBoYXZlIFwib3Zlci1tb3VudGVkXCIgYW5kIGJ5IGhvdyBtdWNoLlxyXG4gICAgLy8gV2UgbmVlZCB0aGlzIHNvIHRoYXQgd2UgZG9uJ3QgZXJhc2Ugc2F2ZWQgaW5mb3JtYXRpb24gd2hlbiBhIGNvbXBvbmVudFxyXG4gICAgLy8gXCJvdmVybW91bnRzXCIgb3ZlciBhbm90aGVyIHdoaWNoIHRoZW4sIGNvcnJlY3RseSwgc3dpdGNoZXMgKml0c2VsZiogdG8gc29tZXRoaW5nIGVsc2UuXHJcbiAgICAvLyBJbiBnZW5lcmFsLCB0aGlzIHNob3VsZCBvbmx5IGhhcHBlbiB3aGVuIGNvbXBvbmVudHMgYXJlIHN3YXBwaW5nIGJldHdlZW4gaW5kaWNlcy5cclxuICAgIC8vIEJ5IHRoZSB0aW1lIHRoZXkncmUgZG9uZSwgdGhpcyBtYXAgc2hvdWxkIGJlIGFsbCAwcyBhZ2FpbiwgYXQgd2hpY2ggcG9pbnRcclxuICAgIC8vIGl0J3Mgb2theSB0byBhY3R1YWxseSBydW4gdGhlIHVubW91bnQgY29kZS5cclxuICAgIC8vIFxyXG4gICAgLy8gVE9ETzogdGhyb3cgYSBjb25zb2xlLmFzc2VydCBzb21ld2hlcmUgdG8gbWFrZSB1cCBmb3IgdGhlIGxvc3QgXHJcbiAgICAvLyBcImFyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBvdmVyd3JpdGUgdGhpcyBjaGlsZCdzIGluZGV4IVwiIGFzc2VydGlvbi5cclxuICAgIC8vIE5hbWVseSwgaXMgdGhpcyBtYXAgYWxsIDBzIHdoZW4gdGhlIHBhcmVudCBlbGVtZW50IHJlLXJlbmRlcnM/IFxyXG4gICAgLy8gUHJvYmFibHkgbm90IGJlY2F1c2Ugb2Ygc2V0Q2hpbGRVcGRhdGVJbmRleFxyXG4gICAgY29uc3Qgb3Zlcm1vdW50Q291bnQgPSB1c2VSZWYobmV3IE1hcCgpKTtcclxuICAgIGNvbnN0IGdldE1vdW50SW5kZXggPSB1c2VDYWxsYmFjaygoaW5kZXgpID0+IHsgcmV0dXJuIG1vdW50T3JkZXIuY3VycmVudC5nZXQoaW5kZXgpOyB9LCBbXSk7XHJcbiAgICBjb25zdCB1c2VNYW5hZ2VkQ2hpbGQgPSB1c2VDYWxsYmFjaygoaW5mbykgPT4ge1xyXG4gICAgICAgIGNvbnN0IHsgZWxlbWVudCwgZ2V0RWxlbWVudCwgdXNlUmVmRWxlbWVudFByb3BzIH0gPSB1c2VSZWZFbGVtZW50KCk7XHJcbiAgICAgICAgdXNlTGF5b3V0RWZmZWN0KCgpID0+IHtcclxuICAgICAgICAgICAgbGV0IGluZGV4ID0gZ2V0VG90YWxDaGlsZHJlbk1vdW50ZWQoKTtcclxuICAgICAgICAgICAgbW91bnRPcmRlci5jdXJyZW50LnNldChpbmZvLmluZGV4LCBpbmRleCk7XHJcbiAgICAgICAgICAgIG1vdW50ZWRDaGlsZHJlbi5jdXJyZW50W2luZGV4XSA9IGluZm87XHJcbiAgICAgICAgICAgIHNldFRvdGFsQ2hpbGRyZW5Nb3VudGVkKHQgPT4gKyt0KTtcclxuICAgICAgICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICAgICAgICAgIG1vdW50T3JkZXIuY3VycmVudC5kZWxldGUoaW5mby5pbmRleCk7XHJcbiAgICAgICAgICAgICAgICBtb3VudGVkQ2hpbGRyZW4uY3VycmVudFtpbmRleF0gPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgc2V0VG90YWxDaGlsZHJlblVub3VudGVkKHQgPT4gKyt0KTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9LCBbaW5mby5pbmRleF0pO1xyXG4gICAgICAgIC8vIEFzIHNvb24gYXMgdGhlIGNvbXBvbmVudCBtb3VudHMsIG5vdGlmeSB0aGUgcGFyZW50IGFuZCByZXF1ZXN0IGEgcmVyZW5kZXIuXHJcbiAgICAgICAgdXNlTGF5b3V0RWZmZWN0KChbcHJldkVsZW1lbnQsIHByZXZJbmRleF0sIGNoYW5nZXMpID0+IHtcclxuICAgICAgICAgICAgaWYgKGVsZW1lbnQpIHtcclxuICAgICAgICAgICAgICAgIGluZGljZXNCeUVsZW1lbnQuY3VycmVudC5zZXQoZWxlbWVudCwgaW5mby5pbmRleCk7XHJcbiAgICAgICAgICAgICAgICBkZWxldGVkSW5kaWNlcy5jdXJyZW50LmRlbGV0ZShpbmZvLmluZGV4KTtcclxuICAgICAgICAgICAgICAgIGlmIChtYW5hZ2VkQ2hpbGRyZW4uY3VycmVudFtpbmZvLmluZGV4XSAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBvdmVybW91bnRDb3VudC5jdXJyZW50LnNldChpbmZvLmluZGV4LCAob3Zlcm1vdW50Q291bnQuY3VycmVudC5nZXQoaW5mby5pbmRleCkgPz8gMCkgKyAxKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHNldENoaWxkVXBkYXRlSW5kZXgoYyA9PiArK2MpO1xyXG4gICAgICAgICAgICAgICAgbWFuYWdlZENoaWxkcmVuLmN1cnJlbnRbaW5mby5pbmRleF0gPSB7IC4uLmluZm8gfTtcclxuICAgICAgICAgICAgICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0Q2hpbGRVcGRhdGVJbmRleChjID0+ICsrYyk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKChvdmVybW91bnRDb3VudC5jdXJyZW50LmdldChpbmZvLmluZGV4KSA/PyAwKSA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3Zlcm1vdW50Q291bnQuY3VycmVudC5zZXQoaW5mby5pbmRleCwgKG92ZXJtb3VudENvdW50LmN1cnJlbnQuZ2V0KGluZm8uaW5kZXgpID8/IDApIC0gMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWxldGUgbWFuYWdlZENoaWxkcmVuLmN1cnJlbnRbaW5mby5pbmRleF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZWRJbmRpY2VzLmN1cnJlbnQuYWRkKGluZm8uaW5kZXgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGluZm8uaW5kZXggPT09IFwibnVtYmVyXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdoaWxlIChtYW5hZ2VkQ2hpbGRyZW4uY3VycmVudC5sZW5ndGggJiYgbWFuYWdlZENoaWxkcmVuLmN1cnJlbnRbbWFuYWdlZENoaWxkcmVuLmN1cnJlbnQubGVuZ3RoIC0gMV0gPT09IHVuZGVmaW5lZClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYW5hZ2VkQ2hpbGRyZW4uY3VycmVudC5sZW5ndGggLT0gMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbmRpY2VzQnlFbGVtZW50LmN1cnJlbnQuZGVsZXRlKGVsZW1lbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LCBbZWxlbWVudCwgaW5mby5pbmRleF0pO1xyXG4gICAgICAgIC8vIEFueSB0aW1lIG91ciBjaGlsZCBwcm9wcyBjaGFuZ2UsIG1ha2UgdGhhdCBpbmZvcm1hdGlvbiBhdmFpbGFibGUgZ2VuZXJhbGx5LlxyXG4gICAgICAgIC8vICpEb24ndCByZS1yZW5kZXIqLCBvdGhlcndpc2Ugd2UnZCBiZSBzdHVjayBpbiBhblxyXG4gICAgICAgIC8vIGluZmluaXRlIGxvb3AgZXZlcnkgdGltZSBhbiBhbm9ueW1vdXMgZnVuY3Rpb24gaXMgcGFzc2VkLlxyXG4gICAgICAgIC8vIEl0IGNvbWVzIGluIGZyb20gdGhlIHByb3BzIHNvIHRoZSBjaGlsZCB3YXMgYWxyZWFkeSB1cGRhdGVkIGJ5IGl0IC0tXHJcbiAgICAgICAgLy8gd2UgZG9uJ3QgbmVlZCB0aGUgcGFyZW50IHRvIHJlLXJlbmRlciBldmVyeSBzaW5nbGUgY2hpbGQgYW55IHRpbWVcclxuICAgICAgICAvLyBcIm9uQ2xpY2tcIiB1cGRhdGVzIG9yIHdoYXRldmVyLiAgVGhlIHJlbGV2YW50IGNoaWxkIGFscmVhZHkga25vd3MsXHJcbiAgICAgICAgLy8gYW5kIHRoYXQncyB3aGF0IG1hdHRlcnMuXHJcbiAgICAgICAgdXNlTGF5b3V0RWZmZWN0KCgpID0+IHtcclxuICAgICAgICAgICAgaWYgKG1hbmFnZWRDaGlsZHJlbi5jdXJyZW50W2luZm8uaW5kZXhdICE9IHVuZGVmaW5lZClcclxuICAgICAgICAgICAgICAgIG1hbmFnZWRDaGlsZHJlbi5jdXJyZW50W2luZm8uaW5kZXhdID0geyAuLi5pbmZvIH07XHJcbiAgICAgICAgfSwgWy4uLk9iamVjdC5lbnRyaWVzKGluZm8pLmZsYXQoKV0pO1xyXG4gICAgICAgIHJldHVybiB7IGVsZW1lbnQsIGdldEVsZW1lbnQsIHVzZU1hbmFnZWRDaGlsZFByb3BzOiB1c2VSZWZFbGVtZW50UHJvcHMgfTtcclxuICAgIH0sIFtdKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdXNlTWFuYWdlZENoaWxkLFxyXG4gICAgICAgIGNoaWxkQ291bnQ6IGNoaWxkcmVuQ3VycmVudGx5TW91bnRlZCxcclxuICAgICAgICBtYW5hZ2VkQ2hpbGRyZW46IG1hbmFnZWRDaGlsZHJlbi5jdXJyZW50LFxyXG4gICAgICAgIG1vdW50ZWRDaGlsZHJlbjogbW91bnRlZENoaWxkcmVuLmN1cnJlbnQsXHJcbiAgICAgICAgaW5kaWNlc0J5RWxlbWVudDogaW5kaWNlc0J5RWxlbWVudC5jdXJyZW50LFxyXG4gICAgICAgIHRvdGFsQ2hpbGRyZW5Nb3VudGVkLFxyXG4gICAgICAgIHRvdGFsQ2hpbGRyZW5Vbm91bnRlZCxcclxuICAgICAgICBnZXRNb3VudEluZGV4LFxyXG4gICAgICAgIGRlbGV0ZWRJbmRpY2VzOiBkZWxldGVkSW5kaWNlcy5jdXJyZW50XHJcbiAgICB9O1xyXG59XHJcbi8qKlxyXG4gKiBIZWxwZXIgZnVuY3Rpb24gZm9yIGxldHRpbmcgY2hpbGRyZW4ga25vdyB3aGVuIHRoZXkgYXJlIG9yIGFyZSBub3QgdGhlXHJcbiAqIGN1cnJlbnQgc2VsZWN0ZWQvZXhwYW5kZWQvZm9jdXNlZC93aGF0ZXZlciBjaGlsZC5cclxuICpcclxuICogQXV0b21hdGljYWxseSBoYW5kbGVzIHdoZW4gY2hpbGRyZW4gYXJlIG1vdW50ZWQgJiB1bm1vdW50ZWQgYW5kIHN1Y2guXHJcbiAqXHJcbiAqIEBwYXJhbSBhY3RpdmF0ZWRJbmRleCBXaGF0IGluZGV4IHRoZSBjdXJyZW50IHNlbGVjdGVkIChldGMuKSBjaGlsZCBpc1xyXG4gKiBAcGFyYW0gbGVuZ3RoIEhvdyBtYW55IGNoaWxkcmVuIGV4aXN0IChhcyBtYW5hZ2VkQ2hpbGRyZW4ubGVuZ3RoKVxyXG4gKiBAcGFyYW0gc2V0RmxhZyBBIGZ1bmN0aW9uIHRoYXQgcHJvYmFibHkgbG9va3MgbGlrZSAoaSwgZmxhZykgPT4gbWFuYWdlZENoaWxkcmVuW2ldLnNldEFjdGl2ZShmbGFnKVxyXG4gKiBAcGFyYW0gdXNlRWZmZWN0IFdoaWNoIHZlcnNpb24gb2YgdXNlRWZmZWN0IHRvIHVzZS4gRGVmYXVsdCBpcyBgdXNlTGF5b3V0RWZmZWN0YC5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiB1c2VDaGlsZEZsYWcoYWN0aXZhdGVkSW5kZXgsIGxlbmd0aCwgc2V0RmxhZywgdXNlRWZmZWN0ID0gdXNlTGF5b3V0RWZmZWN0KSB7XHJcbiAgICBjb25zdCBbcHJldkFjdGl2YXRlZEluZGV4LCBzZXRQcmV2QWN0aXZhdGVkSW5kZXgsIGdldFByZXZBY3RpdmF0ZWRJbmRleF0gPSB1c2VTdGF0ZShudWxsKTtcclxuICAgIGNvbnN0IFtwcmV2Q2hpbGRDb3VudCwgc2V0UHJldkNoaWxkQ291bnQsIGdldFByZXZDaGlsZENvdW50XSA9IHVzZVN0YXRlKGxlbmd0aCk7XHJcbiAgICAvLyBBbnkgdGltZSB0aGUgbnVtYmVyIG9mIGNvbXBvbmVudHMgY2hhbmdlcyxcclxuICAgIC8vIHJlc2V0IGFueSBpbml0aWFsLCBwb3NzaWJseSBpbmNvcnJlY3Qgc3RhdGUgdGhleSBtaWdodCBoYXZlIGhhZCwganVzdCBpbiBjYXNlLlxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBjb25zdCBkaXJlY3Rpb24gPSBNYXRoLnNpZ24obGVuZ3RoIC0gZ2V0UHJldkNoaWxkQ291bnQoKSk7XHJcbiAgICAgICAgaWYgKGRpcmVjdGlvbiAhPT0gMCkge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gZ2V0UHJldkNoaWxkQ291bnQoKSA/PyAwOyBpICE9IGxlbmd0aDsgaSArPSBkaXJlY3Rpb24pIHtcclxuICAgICAgICAgICAgICAgIHNldEZsYWcoaSwgaSA9PT0gYWN0aXZhdGVkSW5kZXgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldFByZXZDaGlsZENvdW50KGxlbmd0aCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHByZXZBY3RpdmF0ZWRJbmRleCA9IGdldFByZXZBY3RpdmF0ZWRJbmRleCgpO1xyXG4gICAgICAgIGlmIChwcmV2QWN0aXZhdGVkSW5kZXggIT0gbnVsbCAmJiBsZW5ndGggPiAwICYmIHByZXZBY3RpdmF0ZWRJbmRleCA+PSBsZW5ndGgpIHtcclxuICAgICAgICAgICAgLy8gVGhlIG51bWJlciBvZiBjaGlsZHJlbiBzaHJhbmsgYmVsb3cgd2hhdGV2ZXIgdGhlIGN1cnJlbnRseSBzZWxlY3RlZCBjb21wb25lbnQgd2FzLlxyXG4gICAgICAgICAgICAvLyBDaGFuZ2UgdGhlIGluZGV4IHRvIHRoZSBsYXN0IG9uZSBzdGlsbCBtb3VudGVkLlxyXG4gICAgICAgICAgICBzZXRGbGFnKGxlbmd0aCAtIDEsIHRydWUpO1xyXG4gICAgICAgICAgICAvLyAoTm8gbmVlZCB0byB1bnNldCBhbnkgb2YgdGhlbSBzaW5jZSB0aGV5IGFscmVhZHkgdW5tb3VudGVkIHRoZW1zZWx2ZXMpXHJcbiAgICAgICAgICAgIC8vIChBbHNvIG5vIHdheSB0byB1bnNldCB0aGVtIGFueXdheSBmb3IgdGhlIHNhbWUgcmVhc29uKVxyXG4gICAgICAgIH1cclxuICAgIH0sIFtzZXRGbGFnLCBhY3RpdmF0ZWRJbmRleCwgbGVuZ3RoXSk7XHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIC8vIERlYWN0aXZhdGUgdGhlIHByZXZpb3VzbHkgYWN0aXZhdGVkIGNvbXBvbmVudFxyXG4gICAgICAgIGNvbnN0IHByZXZBY3RpdmF0ZWRJbmRleCA9IGdldFByZXZBY3RpdmF0ZWRJbmRleCgpO1xyXG4gICAgICAgIGlmIChwcmV2QWN0aXZhdGVkSW5kZXggIT0gYWN0aXZhdGVkSW5kZXgpIHtcclxuICAgICAgICAgICAgaWYgKHByZXZBY3RpdmF0ZWRJbmRleCAhPSBudWxsICYmIHByZXZBY3RpdmF0ZWRJbmRleCA+PSAwICYmIHByZXZBY3RpdmF0ZWRJbmRleCA8IGxlbmd0aClcclxuICAgICAgICAgICAgICAgIHNldEZsYWcocHJldkFjdGl2YXRlZEluZGV4LCBmYWxzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIEFjdGl2YXRlIHRoZSBjdXJyZW50IGNvbXBvbmVudFxyXG4gICAgICAgIGlmIChhY3RpdmF0ZWRJbmRleCAhPSBudWxsICYmIGFjdGl2YXRlZEluZGV4ID49IDAgJiYgYWN0aXZhdGVkSW5kZXggPCBsZW5ndGgpIHtcclxuICAgICAgICAgICAgc2V0RmxhZyhhY3RpdmF0ZWRJbmRleCwgdHJ1ZSk7XHJcbiAgICAgICAgICAgIHNldFByZXZBY3RpdmF0ZWRJbmRleChhY3RpdmF0ZWRJbmRleCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW3NldEZsYWcsIGFjdGl2YXRlZEluZGV4LCBsZW5ndGhdKTtcclxufVxyXG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2UtY2hpbGQtbWFuYWdlci5qcy5tYXAiLCJpbXBvcnQgeyB1c2VFZmZlY3QgYXMgdXNlRWZmZWN0TmF0aXZlLCB1c2VSZWYgfSBmcm9tIFwicHJlYWN0L2hvb2tzXCI7XHJcbi8qKlxyXG4gKiBXcmFwIHRoZSBuYXRpdmUgYHVzZUVmZmVjdGAgdG8gYWRkIGFyZ3VtZW50c1xyXG4gKiB0aGF0IGFsbG93IGFjY2Vzc2luZyB0aGUgcHJldmlvdXMgdmFsdWUgYXMgdGhlIGZpcnN0IGFyZ3VtZW50LFxyXG4gKiBhcyB3ZWxsIGFzIHRoZSBjaGFuZ2VzIHRoYXQgY2F1c2VkIHRoZSBob29rIHRvIGJlIGNhbGxlZCBhcyB0aGUgc2Vjb25kIGFyZ3VtZW50LlxyXG4gKlxyXG4gKiBAcGFyYW0gZWZmZWN0XHJcbiAqIEBwYXJhbSBpbnB1dHNcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiB1c2VFZmZlY3QoZWZmZWN0LCBpbnB1dHMpIHtcclxuICAgIGNvbnN0IHByZXZJbnB1dHMgPSB1c2VSZWYoaW5wdXRzKTtcclxuICAgIGNvbnN0IGVmZmVjdDIgPSAoKSA9PiB7XHJcbiAgICAgICAgbGV0IGNoYW5nZXMgPSBbXTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IE1hdGgubWF4KHByZXZJbnB1dHMuY3VycmVudC5sZW5ndGgsIGlucHV0cy5sZW5ndGgpOyArK2kpIHtcclxuICAgICAgICAgICAgaWYgKHByZXZJbnB1dHMuY3VycmVudFtpXSAhPSBpbnB1dHNbaV0pXHJcbiAgICAgICAgICAgICAgICBjaGFuZ2VzW2ldID0geyBmcm9tOiBwcmV2SW5wdXRzLmN1cnJlbnRbaV0sIHRvOiBpbnB1dHNbaV0gfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgcmV0ID0gZWZmZWN0KHByZXZJbnB1dHMuY3VycmVudCwgY2hhbmdlcyk7XHJcbiAgICAgICAgcHJldklucHV0cy5jdXJyZW50ID0gaW5wdXRzO1xyXG4gICAgICAgIHJldHVybiByZXQ7XHJcbiAgICB9O1xyXG4gICAgdXNlRWZmZWN0TmF0aXZlKGVmZmVjdDIsIGlucHV0cyk7XHJcbn1cclxuO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2UtZWZmZWN0LmpzLm1hcCIsImltcG9ydCB7IHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicHJlYWN0L2hvb2tzXCI7XHJcbi8qKlxyXG4gKiBSZXR1cm5zIGEgZnVuY3Rpb24gdGhhdCB3aWxsLCB3aGVuIGNhbGxlZCwgZm9yY2UgdGhlIGNvbXBvbmVudFxyXG4gKiB0aGF0IHVzZXMgdGhpcyBob29rIHRvIHJlLXJlbmRlciBpdHNlbGYuXHJcbiAqXHJcbiAqIEl0J3MgYSBiaXQgc21lbGx5LCBzbyBiZXN0IHRvIHVzZSBzcGFyaW5nbHkuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gdXNlRm9yY2VVcGRhdGUoKSB7XHJcbiAgICBjb25zdCBbLCBzZXRdID0gdXNlU3RhdGUoMCk7XHJcbiAgICByZXR1cm4gdXNlUmVmKCgpID0+IHNldChpID0+ICsraSkpLmN1cnJlbnQ7XHJcbn1cclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXNlLWZvcmNlLXVwZGF0ZS5qcy5tYXAiLCJpbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicHJlYWN0L2hvb2tzXCI7XHJcbmltcG9ydCB7IHVzZUNoaWxkRmxhZywgdXNlQ2hpbGRNYW5hZ2VyIH0gZnJvbSBcIi4vdXNlLWNoaWxkLW1hbmFnZXJcIjtcclxuaW1wb3J0IHsgdXNlTWVyZ2VkUHJvcHMgfSBmcm9tIFwiLi91c2UtbWVyZ2VkLXByb3BzXCI7XHJcbmltcG9ydCB7IHVzZVN0YWJsZUdldHRlciB9IGZyb20gXCIuL3VzZS1zdGFibGUtZ2V0dGVyXCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcIi4vdXNlLXN0YXRlXCI7XHJcbi8qKlxyXG4gKiBJbXBsZW1lbnRzIGEgcm92aW5nIHRhYmluZGV4IHN5c3RlbSB3aGVyZSBvbmx5IG9uZSBcImZvY3VzYWJsZVwiXHJcbiAqIGNvbXBvbmVudCBpbiBhIHNldCBpcyBhYmxlIHRvIHJlY2VpdmUgYSB0YWIgZm9jdXMuICpXaGljaCpcclxuICogb2YgdGhvc2UgZWxlbWVudHMgcmVjZWl2ZXMgZm9jdXMgaXMgZGV0ZXJtaW5lZCBieSB5b3UsIGJ1dCBpdCdzXHJcbiAqIHJlY29tbWVuZGVkIHRvIG9mZmxvYWQgdGhhdCBsb2dpYyB0aGVuIHRvIGFub3RoZXIgaG9vaywgbGlrZVxyXG4gKiBgdXNlTGluZWFyTmF2aWdhdGlvbmAsIHdoaWNoIGxldHMgeW91IGNoYW5nZSB0aGUgdGFiYmFibGVcclxuICogZWxlbWVudCB3aXRoIHRoZSBhcnJvdyBrZXlzLCBgdXNlVHlwZWFoZWFkTmF2aWdhdGlvbmAsIHdoaWNoXHJcbiAqIGxldHMgeW91IGNoYW5nZSB0aGUgdGFiYmFibGUgaW5kZXggd2l0aCB0eXBlYWhlYWQsIG9yXHJcbiAqIGB1c2VMaXN0TmF2aWdhdGlvbmAgaWYgeW91IGp1c3Qgd2FudCBldmVyeXRoaW5nIGJ1bmRsZWQgdG9nZXRoZXIuXHJcbiAqXHJcbiAqIE5vdGUgdGhhdCB0aGUgY2hpbGQgaG9vayByZXR1cm5lZCBieSB0aGlzIGZ1bmN0aW9uIG11c3QgYmUgdXNlZFxyXG4gKiBieSBldmVyeSBjaGlsZCB0aGF0IHVzZXMgdGhpcyByb3ZpbmcgdGFiaW5kZXggbG9naWMuICBUaGVcclxuICogcHJvcC1tb2RpZnlpbmcgaG9vayAqdGhhdCogaG9vayByZXR1cm5zIHNob3VsZCB0aGVuIGJlIHVzZWRcclxuICogb24gdGhlIGNoaWxkJ3MgZWxlbWVudCwgYXMgd2VsbCBhcyBhbnkgb3RoZXIgZWxlbWVudHMgeW91J2QgbGlrZVxyXG4gKiB0byBiZSBleHBsaWNpdGx5IG1hZGUgdW50YWJiYWJsZSB0b28uXHJcbiAqXHJcbiAqIGBzaG91bGRGb2N1c09uQ2hhbmdlYCBzaG91bGQgcmV0dXJuIHRydWUgaWYgZm9jdXMgaXNcclxuICogY29udGFpbmVkIHdpdGhpbiB3aGF0ZXZlciBlbGVtZW50IGNvbnRhaW5zIHRoZSByb3ZpbmcgdGFiIGluZGV4LlxyXG4gKiBHZW5lcmFsbHkgYXMgc2ltcGxlIGFzIHRoZSBmb2xsb3dpbmc6XHJcbiAqIGBgYFxyXG4gKiBjb25zdCBbZm9jdXNlZElubmVyLCBzZXRGb2N1c2VkSW5uZXJdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gKiBjb25zdCB7IHVzZUhhc0ZvY3VzUHJvcHMgfSA9IHVzZUhhc0ZvY3VzPFBhcmVudEVsZW1lbnQ+KHsgc2V0Rm9jdXNlZElubmVyIH0pO1xyXG4gKiBjb25zdCBmb2N1c09uQ2hhbmdlID0gKGZvY3VzZWRJbm5lciAhPSBmYWxzZSk7XHJcbiAqIGBgYFxyXG4gKiBJdCdzIG5vdCBpbmNsdWRlZCBoZXJlIGJlY2F1c2UgYHVzZVJvdmluZ1RhYkluZGV4YCBkb2Vzbid0IGtub3dcclxuICogYW55dGhpbmcgYWJvdXQgdGhlIGNvbnRhaW5lciBlbGVtZW50LCBvbmx5IGNoaWxkcmVuIGVsZW1lbnRzLlxyXG4gKiBBbmQganVzdCBhcyB3ZWxsISBDaGlsZHJlbiBzaG91bGQgYmUgYWxsb3dlZCBhdCB0aGUgcm9vdCxcclxuICogcmVnYXJkbGVzcyBvZiBpZiBpdCdzIHRoZSB3aG9sZSBhcHAgb3IganVzdCBhIGdpdmVuIGNvbXBvbmVudC5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiB1c2VSb3ZpbmdUYWJJbmRleCh7IHNob3VsZEZvY3VzT25DaGFuZ2U6IGZvYywgdGFiYmFibGVJbmRleCB9KSB7XHJcbiAgICBjb25zdCBbcmVyZW5kZXJBbmRGb2N1cywgc2V0UmVyZW5kZXJBbmRGb2N1c10gPSB1c2VTdGF0ZShudWxsKTtcclxuICAgIGNvbnN0IGdldFNob3VsZEZvY3VzT25DaGFuZ2UgPSB1c2VTdGFibGVHZXR0ZXIoZm9jKTtcclxuICAgIGNvbnN0IGdldFRhYmJhYmxlSW5kZXggPSB1c2VTdGFibGVHZXR0ZXIodGFiYmFibGVJbmRleCk7XHJcbiAgICBjb25zdCBwcmV2VGFiYmFibGUgPSB1c2VSZWYoLUluZmluaXR5KTtcclxuICAgIC8vIENhbGwgdGhlIGhvb2sgdGhhdCBhbGxvd3MgdXMgdG8gY29sbGVjdCBpbmZvcm1hdGlvbiBmcm9tIGNoaWxkcmVuIHdobyBwcm92aWRlIGl0XHJcbiAgICBjb25zdCB7IG1hbmFnZWRDaGlsZHJlbiwgY2hpbGRDb3VudCwgdXNlTWFuYWdlZENoaWxkLCBpbmRpY2VzQnlFbGVtZW50LCAuLi5yZXN0IH0gPSB1c2VDaGlsZE1hbmFnZXIoKTtcclxuICAgIC8vIEFueSB0aW1lIHRoZSB0YWJiYWJsZSBpbmRleCBjaGFuZ2VzLFxyXG4gICAgLy8gbm90aWZ5IHRoZSBwcmV2aW91cyBjaGlsZCB0aGF0IGl0J3Mgbm8gbG9uZ2VyIHRhYmJhYmxlLFxyXG4gICAgLy8gYW5kIG5vdGlmeSB0aGUgbmV4dCBjaGlsZCB0aGF0IGlzIGFsbG93ZWQgdG8gYmUgdGFiYmVkIHRvLlxyXG4gICAgdXNlQ2hpbGRGbGFnKHRhYmJhYmxlSW5kZXgsIGNoaWxkQ291bnQsIChpbmRleCwgdGFiYmFibGUpID0+IHtcclxuICAgICAgICBpZiAoaW5kZXggIT0gbnVsbClcclxuICAgICAgICAgICAgbWFuYWdlZENoaWxkcmVuW2luZGV4XT8uc2V0VGFiYmFibGUodGFiYmFibGUpO1xyXG4gICAgfSk7XHJcbiAgICBjb25zdCBmb2N1c1NlbGYgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICAgICAgaWYgKHRhYmJhYmxlSW5kZXggIT0gbnVsbClcclxuICAgICAgICAgICAgbWFuYWdlZENoaWxkcmVuW3RhYmJhYmxlSW5kZXhdLnNldFRhYmJhYmxlKHRydWUpO1xyXG4gICAgfSwgW3RhYmJhYmxlSW5kZXhdKTtcclxuICAgIGNvbnN0IHVzZVJvdmluZ1RhYkluZGV4Q2hpbGQgPSB1c2VDYWxsYmFjaygoaW5mbykgPT4ge1xyXG4gICAgICAgIGNvbnN0IFtycmFmSW5kZXgsIHNldFJyYWZJbmRleF0gPSB1c2VTdGF0ZSgxKTtcclxuICAgICAgICBjb25zdCByZXJlbmRlckFuZEZvY3VzID0gdXNlQ2FsbGJhY2soKCkgPT4geyBzZXRScmFmSW5kZXgoaSA9PiArK2kpOyB9LCBbXSk7XHJcbiAgICAgICAgbGV0IG5ld0luZm8gPSB7XHJcbiAgICAgICAgICAgIC4uLmluZm8sXHJcbiAgICAgICAgICAgIHJlcmVuZGVyQW5kRm9jdXMsXHJcbiAgICAgICAgICAgIHNldFRhYmJhYmxlOiB1c2VDYWxsYmFjaygodGFiYmFibGUpID0+IHsgc2V0VGFiYmFibGUodGFiYmFibGUpOyB9LCBbXSlcclxuICAgICAgICB9O1xyXG4gICAgICAgIGNvbnN0IHsgZWxlbWVudCwgZ2V0RWxlbWVudCwgdXNlTWFuYWdlZENoaWxkUHJvcHMgfSA9IHVzZU1hbmFnZWRDaGlsZChuZXdJbmZvKTtcclxuICAgICAgICBjb25zdCBbdGFiYmFibGUsIHNldFRhYmJhYmxlXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gICAgICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChlbGVtZW50ICYmIHRhYmJhYmxlKSB7XHJcbiAgICAgICAgICAgICAgICBzZXRSZXJlbmRlckFuZEZvY3VzKF8gPT4gcmVyZW5kZXJBbmRGb2N1cyk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzaG91bGRGb2N1c09uQ2hhbmdlID0gZ2V0U2hvdWxkRm9jdXNPbkNoYW5nZSgpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHNob3VsZEZvY3VzT25DaGFuZ2UoKSAmJiBcImZvY3VzXCIgaW4gZWxlbWVudCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXVlTWljcm90YXNrKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuZm9jdXMoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LCBbZWxlbWVudCwgdGFiYmFibGUsIHJyYWZJbmRleF0pO1xyXG4gICAgICAgIGZ1bmN0aW9uIHVzZVJvdmluZ1RhYkluZGV4U2libGluZ1Byb3BzKHsgdGFiSW5kZXgsIC4uLnByb3BzIH0pIHtcclxuICAgICAgICAgICAgaWYgKHRhYkluZGV4ID09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0YWJiYWJsZSlcclxuICAgICAgICAgICAgICAgICAgICB0YWJJbmRleCA9IDA7XHJcbiAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgdGFiSW5kZXggPSAtMTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gdXNlTWVyZ2VkUHJvcHMoKSh7IHRhYkluZGV4IH0sIHByb3BzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZnVuY3Rpb24gdXNlUm92aW5nVGFiSW5kZXhDaGlsZFByb3BzKHsgdGFiSW5kZXgsIC4uLnByb3BzIH0pIHtcclxuICAgICAgICAgICAgaWYgKHRhYkluZGV4ID09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0YWJiYWJsZSlcclxuICAgICAgICAgICAgICAgICAgICB0YWJJbmRleCA9IDA7XHJcbiAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgdGFiSW5kZXggPSAtMTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gdXNlTWVyZ2VkUHJvcHMoKSh1c2VNYW5hZ2VkQ2hpbGRQcm9wcyh7IHRhYkluZGV4IH0pLCBwcm9wcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIDtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICB1c2VSb3ZpbmdUYWJJbmRleENoaWxkUHJvcHMsXHJcbiAgICAgICAgICAgIHVzZVJvdmluZ1RhYkluZGV4U2libGluZ1Byb3BzLFxyXG4gICAgICAgICAgICB0YWJiYWJsZVxyXG4gICAgICAgIH07XHJcbiAgICB9LCBbdXNlTWFuYWdlZENoaWxkXSk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHVzZVJvdmluZ1RhYkluZGV4Q2hpbGQsXHJcbiAgICAgICAgY2hpbGRDb3VudCxcclxuICAgICAgICBtYW5hZ2VkQ2hpbGRyZW4sXHJcbiAgICAgICAgaW5kaWNlc0J5RWxlbWVudCxcclxuICAgICAgICBmb2N1c0N1cnJlbnQ6IHJlcmVuZGVyQW5kRm9jdXMsXHJcbiAgICAgICAgLi4ucmVzdFxyXG4gICAgfTtcclxufVxyXG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2Utcm92aW5nLXRhYmluZGV4LmpzLm1hcCIsImltcG9ydCB7IHVzZUNhbGxiYWNrIH0gZnJvbSBcInByZWFjdC9ob29rc1wiO1xyXG5pbXBvcnQgeyB1c2VDaGlsZEZsYWcsIHVzZUNoaWxkTWFuYWdlciB9IGZyb20gXCIuL3VzZS1jaGlsZC1tYW5hZ2VyXCI7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gXCIuL3VzZS1lZmZlY3RcIjtcclxuaW1wb3J0IHsgdXNlRm9yY2VVcGRhdGUgfSBmcm9tIFwiLi91c2UtZm9yY2UtdXBkYXRlXCI7XHJcbmltcG9ydCB7IHVzZUxpbmVhck5hdmlnYXRpb24sIHVzZVR5cGVhaGVhZE5hdmlnYXRpb24gfSBmcm9tIFwiLi91c2Uta2V5Ym9hcmQtbmF2aWdhdGlvblwiO1xyXG5pbXBvcnQgeyB1c2VNZXJnZWRQcm9wcyB9IGZyb20gXCIuL3VzZS1tZXJnZWQtcHJvcHNcIjtcclxuaW1wb3J0IHsgdXNlUm92aW5nVGFiSW5kZXggfSBmcm9tIFwiLi91c2Utcm92aW5nLXRhYmluZGV4XCI7XHJcbmltcG9ydCB7IHVzZVN0YWJsZUNhbGxiYWNrIH0gZnJvbSBcIi4vdXNlLXN0YWJsZS1jYWxsYmFja1wiO1xyXG5pbXBvcnQgeyB1c2VTdGFibGVHZXR0ZXIgfSBmcm9tIFwiLi91c2Utc3RhYmxlLWdldHRlclwiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCIuL3VzZS1zdGF0ZVwiO1xyXG5mdW5jdGlvbiBpZGVudGl0eSh0KSB7IHJldHVybiB0OyB9XHJcbmZ1bmN0aW9uIHRyeU5hdmlnYXRlVG9JbmRleChtYW5hZ2VkQ2VsbHMsIGluaXRpYWwsIHRhcmdldCwgc2VhcmNoRGlyZWN0aW9uLCBpbmRleE1hbmdsZXIsIGluZGV4RGVtYW5nbGVyKSB7XHJcbiAgICBmdW5jdGlvbiBoZWxwZXIoKSB7XHJcbiAgICAgICAgaWYgKHNlYXJjaERpcmVjdGlvbiA9PT0gLTEpIHtcclxuICAgICAgICAgICAgd2hpbGUgKHRhcmdldCA+PSAwICYmIChtYW5hZ2VkQ2VsbHNbdGFyZ2V0XSA9PSBudWxsIHx8ICEhbWFuYWdlZENlbGxzW3RhcmdldF0/LmhpZGRlbikpXHJcbiAgICAgICAgICAgICAgICB0YXJnZXQgPSBpbmRleE1hbmdsZXIoaW5kZXhEZW1hbmdsZXIodGFyZ2V0KSAtIDEpO1xyXG4gICAgICAgICAgICByZXR1cm4gdGFyZ2V0IDwgMCA/IGluaXRpYWwgOiB0YXJnZXQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHNlYXJjaERpcmVjdGlvbiA9PT0gMSkge1xyXG4gICAgICAgICAgICB3aGlsZSAodGFyZ2V0IDwgbWFuYWdlZENlbGxzLmxlbmd0aCAmJiBtYW5hZ2VkQ2VsbHNbdGFyZ2V0XSA9PSBudWxsIHx8ICEhbWFuYWdlZENlbGxzW3RhcmdldF0/LmhpZGRlbilcclxuICAgICAgICAgICAgICAgIHRhcmdldCA9IGluZGV4TWFuZ2xlcihpbmRleERlbWFuZ2xlcih0YXJnZXQpICsgMSk7XHJcbiAgICAgICAgICAgIHJldHVybiB0YXJnZXQgPj0gbWFuYWdlZENlbGxzLmxlbmd0aCA/IGluaXRpYWwgOiB0YXJnZXQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gaW5pdGlhbDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gKGhlbHBlcigpKTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gdXNlR3JpZE5hdmlnYXRpb24oeyBzaG91bGRGb2N1c09uQ2hhbmdlLCBpbmRleE1hbmdsZXIsIGluZGV4RGVtYW5nbGVyIH0pIHtcclxuICAgIGluZGV4TWFuZ2xlciA/Pz0gaWRlbnRpdHk7XHJcbiAgICBpbmRleERlbWFuZ2xlciA/Pz0gaWRlbnRpdHk7XHJcbiAgICBjb25zdCBnZXRGb2N1c0NlbGxPblJvd0NoYW5nZSA9IHVzZVN0YWJsZUNhbGxiYWNrKHNob3VsZEZvY3VzT25DaGFuZ2UpO1xyXG4gICAgLy8gS2VlcCB0cmFjayBvZiBvdXIgY3VycmVudGx5IHRhYmJhYmxlIHJvdyBhbmQgY29sdW1uLlxyXG4gICAgLy8gVGhlc2UgYXJlIG1hbmdsZWQsIGFuZCBzbyByZWxhdGl2ZSB0byB0aGUgRE9NIG9yZGVyLCBub3QgY29tcG9uZW50IG9yZGVyLlxyXG4gICAgLy8gQW55IG9wZXJhdGlvbnMgZG9uZSBvbiB0aGVzZSBudW1iZXJzIG5lZWQgdG8gYmUgZGVtYW5nbGVkIGZpcnN0LFxyXG4gICAgLy8gb3RoZXJ3aXNlIHRoZXknbGwgYmUgaW5jb3JyZWN0LlxyXG4gICAgY29uc3QgW2N1cnJlbnRSb3csIHNldEN1cnJlbnRSb3cyLCBnZXRDdXJyZW50Um93XSA9IHVzZVN0YXRlKDApO1xyXG4gICAgY29uc3QgW2N1cnJlbnRDb2x1bW4sIHNldEN1cnJlbnRDb2x1bW4yLCBnZXRDdXJyZW50Q29sdW1uXSA9IHVzZVN0YXRlKDApO1xyXG4gICAgLy8gRnVuY3Rpb25zIHVzZWQgZm9yIG5hdmlnYXRpbmcgdG8gZGlmZmVyZW50IHJvd3MuXHJcbiAgICAvLyBFYWNoIHJvdyBoYXMgaXRzIG93biB1c2VSb3ZpbmdUYWJJbmRleCAtLSBpZiBpdCdzIG5vdCB0aGUgXHJcbiAgICAvLyBjdXJyZW50IHJvdywgdGhlbiBhbGwgb2YgaXRzIGNoaWxkcmVuIGFyZSBub24tdGFiYmFibGUuXHJcbiAgICAvLyBPdGhlcndpc2UsIGl0IGlzIHRhYmJhYmxlLCB3aXRoIHRoZSB0YWJiYWJsZSBjZWxsIGJlaW5nIGN1cnJlbnRDb2x1bW4uXHJcbiAgICAvLyBUaGlzIGhhcHBlbnMgYXV0b21hdGljYWxseSB3aGVuIHRoZXNlIGZ1bmN0aW9ucyBhcmUgY2FsbGVkLlxyXG4gICAgY29uc3QgbmF2aWdhdGVUb0ZpcnN0Um93ID0gdXNlQ2FsbGJhY2soKCkgPT4geyBzZXRDdXJyZW50Um93MihjID0+IHRyeU5hdmlnYXRlVG9JbmRleChtYW5hZ2VkUm93cywgYyA/PyAwLCAwLCAxLCBpbmRleE1hbmdsZXIsIGluZGV4RGVtYW5nbGVyKSk7IH0sIFtpbmRleE1hbmdsZXIsIGluZGV4RGVtYW5nbGVyXSk7XHJcbiAgICBjb25zdCBuYXZpZ2F0ZVRvTGFzdFJvdyA9IHVzZUNhbGxiYWNrKCgpID0+IHsgc2V0Q3VycmVudFJvdzIoYyA9PiB0cnlOYXZpZ2F0ZVRvSW5kZXgobWFuYWdlZFJvd3MsIGMgPz8gMCwgbWFuYWdlZFJvd3MubGVuZ3RoIC0gMSwgLTEsIGluZGV4TWFuZ2xlciwgaW5kZXhEZW1hbmdsZXIpKTsgfSwgW2luZGV4TWFuZ2xlciwgaW5kZXhEZW1hbmdsZXJdKTtcclxuICAgIGNvbnN0IG5hdmlnYXRlVG9QcmV2Um93ID0gdXNlQ2FsbGJhY2soKCkgPT4geyBzZXRDdXJyZW50Um93MihjID0+IHsgcmV0dXJuIHRyeU5hdmlnYXRlVG9JbmRleChtYW5hZ2VkUm93cywgYyA/PyAwLCBpbmRleE1hbmdsZXIoTWF0aC5tYXgoMCwgaW5kZXhEZW1hbmdsZXIoYyA/PyAwKSAtIDEpKSwgLTEsIGluZGV4TWFuZ2xlciwgaW5kZXhEZW1hbmdsZXIpOyB9KTsgfSwgW2luZGV4TWFuZ2xlciwgaW5kZXhEZW1hbmdsZXJdKTtcclxuICAgIGNvbnN0IG5hdmlnYXRlVG9OZXh0Um93ID0gdXNlQ2FsbGJhY2soKCkgPT4geyBzZXRDdXJyZW50Um93MihjID0+IHsgcmV0dXJuIHRyeU5hdmlnYXRlVG9JbmRleChtYW5hZ2VkUm93cywgYyA/PyAwLCBpbmRleE1hbmdsZXIoTWF0aC5taW4oKG1hbmFnZWRSb3dzLmxlbmd0aCAtIDEpLCBpbmRleERlbWFuZ2xlcihjID8/IDApICsgMSkpLCAxLCBpbmRleE1hbmdsZXIsIGluZGV4RGVtYW5nbGVyKTsgfSk7IH0sIFtpbmRleE1hbmdsZXIsIGluZGV4RGVtYW5nbGVyXSk7XHJcbiAgICAvLyBUcmFjayBjaGlsZCByb3dzIGFuZCBtYW5hZ2Uga2V5Ym9hcmQgbmF2aWdhdGlvbiBhbW9uZyB0aGVtLlxyXG4gICAgY29uc3QgeyBjaGlsZENvdW50LCBtYW5hZ2VkQ2hpbGRyZW46IG1hbmFnZWRSb3dzLCBpbmRpY2VzQnlFbGVtZW50OiByb3dJbmRpY2VzQnlFbGVtZW50LCBnZXRNb3VudEluZGV4OiBnZXRSb3dNb3VudEluZGV4LCBtb3VudGVkQ2hpbGRyZW46IG1vdW50ZWRSb3dzLCB0b3RhbENoaWxkcmVuTW91bnRlZDogdG90YWxSb3dzTW91bnRlZCwgdG90YWxDaGlsZHJlblVub3VudGVkOiB0b3RhbFJvd3NVbm1vdW50ZWQsIHVzZU1hbmFnZWRDaGlsZDogdXNlTWFuYWdlZFJvdyB9ID0gdXNlQ2hpbGRNYW5hZ2VyKCk7XHJcbiAgICBjb25zdCB7IHVzZUxpbmVhck5hdmlnYXRpb25DaGlsZDogdXNlTGluZWFyTmF2aWdhdGlvbkNoaWxkUm93IH0gPSB1c2VMaW5lYXJOYXZpZ2F0aW9uKHtcclxuICAgICAgICBtYW5hZ2VkQ2hpbGRyZW46IG1hbmFnZWRSb3dzLFxyXG4gICAgICAgIGluZGV4OiBpbmRleE1hbmdsZXIoZ2V0Q3VycmVudFJvdygpID8/IDApLFxyXG4gICAgICAgIG5hdmlnYXRlVG9GaXJzdDogbmF2aWdhdGVUb0ZpcnN0Um93LFxyXG4gICAgICAgIG5hdmlnYXRlVG9MYXN0OiBuYXZpZ2F0ZVRvTGFzdFJvdyxcclxuICAgICAgICBuYXZpZ2F0ZVRvTmV4dDogbmF2aWdhdGVUb05leHRSb3csXHJcbiAgICAgICAgbmF2aWdhdGVUb1ByZXY6IG5hdmlnYXRlVG9QcmV2Um93LFxyXG4gICAgICAgIG5hdmlnYXRpb25EaXJlY3Rpb246IFwiYmxvY2tcIlxyXG4gICAgfSk7XHJcbiAgICAvLyBBY3R1YWxseSBoYW5kbGUgbm90aWZ5aW5nIHRoZSByZWxldmFudCByb3dzIHdoZW4gdGhleVxyXG4gICAgLy8gY2hhbmdlIGZyb20gdW50YWJiYWJsZSB0byB0YWJiYWJsZSBvciB2aWNlLXZlcnNhLlxyXG4gICAgdXNlQ2hpbGRGbGFnKGN1cnJlbnRSb3csIG1hbmFnZWRSb3dzLmxlbmd0aCwgdXNlQ2FsbGJhY2soKGluZGV4LCB0YWJiYWJsZSkgPT4geyBtYW5hZ2VkUm93c1tpbmRleF0/LnNldElzVGFiYmFibGVSb3codGFiYmFibGUpOyB9LCBbbWFuYWdlZFJvd3NdKSwgdXNlRWZmZWN0KTtcclxuICAgIC8qKlxyXG4gICAgICogT3B0aW9uYWwsIGJ1dCBwcm92aWRlcyB0eXBlYWhlYWQgZm9yIGVhY2ggY29sdW1uIGluIHRoZSB0YWJsZS5cclxuICAgICAqL1xyXG4gICAgY29uc3QgdXNlR3JpZE5hdmlnYXRpb25Db2x1bW4gPSB1c2VDYWxsYmFjaygoe30pID0+IHtcclxuICAgICAgICBjb25zdCB7IGN1cnJlbnRUeXBlYWhlYWQsIGludmFsaWRUeXBlYWhlYWQsIHVzZVR5cGVhaGVhZE5hdmlnYXRpb25DaGlsZCB9ID0gdXNlVHlwZWFoZWFkTmF2aWdhdGlvbih7IGdldEluZGV4OiBnZXRDdXJyZW50Um93LCBzZXRJbmRleDogc2V0Q3VycmVudFJvdzIgfSk7XHJcbiAgICAgICAgY29uc3QgdXNlR3JpZE5hdmlnYXRpb25Db2x1bW5DaGlsZCA9IHVzZUNhbGxiYWNrKCh7IGluZGV4OiByb3dJbmRleCwgdGV4dCwgaGlkZGVuIH0pID0+IHtcclxuICAgICAgICAgICAgdXNlVHlwZWFoZWFkTmF2aWdhdGlvbkNoaWxkKHsgaW5kZXg6IHJvd0luZGV4LCB0ZXh0OiBoaWRkZW4gPyBudWxsIDogdGV4dCB9KTtcclxuICAgICAgICB9LCBbdXNlVHlwZWFoZWFkTmF2aWdhdGlvbkNoaWxkXSk7XHJcbiAgICAgICAgcmV0dXJuIHsgdXNlR3JpZE5hdmlnYXRpb25Db2x1bW5DaGlsZCwgY3VycmVudFR5cGVhaGVhZCwgaW52YWxpZFR5cGVhaGVhZCB9O1xyXG4gICAgfSwgW10pO1xyXG4gICAgLy8gTGFzdCB0aGluZyBiZWZvcmUgd2UgcmV0dXJuIC0tIGhlcmUncyB0aGUgaG9vayBmb3IgaW5kaXZpZHVhbCByb3dzIGFuZCB0aGVpciBjZWxscy5cclxuICAgIGNvbnN0IHVzZUdyaWROYXZpZ2F0aW9uUm93ID0gdXNlQ2FsbGJhY2soKHsgaW5kZXg6IHJvd0luZGV4LCBoaWRkZW4sIC4uLmluZm8gfSkgPT4ge1xyXG4gICAgICAgIC8vIFdoZW4gd2UgY2hhbmdlIHRoZSBjdXJyZW50IGNvbHVtbiwgd2Ugc2VuZCB0aGF0IGluZm9ybWF0aW9uXHJcbiAgICAgICAgLy8gdG8gdGhlIHBhcmVudCB2aWEgc2V0U3RhdGUsIGJ1dCB0aGF0IGRvZXNuJ3QgZG8gYW55dGhpbmdcclxuICAgICAgICAvLyBmb3IgdXMuICBUaGUgcGFyZW50IGRvZXNuJ3QgZXZlciBtYW5hZ2Ugcm93cycgY2VsbHMgZm9yIHRoZW0uXHJcbiAgICAgICAgLy8gXHJcbiAgICAgICAgLy8gU28gdG8gZ2V0IHVzIHRvIGFsc28gdXBkYXRlIGFsb25nc2lkZSB0aGUgcGFyZW50LFxyXG4gICAgICAgIC8vIHdlIGp1c3QgdXNlIGZvcmNlVXBkYXRlLlxyXG4gICAgICAgIC8vIFdlIGNvdWxkIGFsc28ga2VlcCBhIGNvcHkgb2YsIGxpa2UsIFwid2hhdCB0aGlzIHJvdyB0aGlua3NcclxuICAgICAgICAvLyB0aGUgY3VycmVudCBjb2x1bW4gaXNcIiB0aGF0ICpzaG91bGQqIGFsd2F5cyBiZSBrZXB0IGluLVxyXG4gICAgICAgIC8vIHN5bmMgd2l0aCBcImdldEN1cnJlbnRDb2x1bW4oKVwiIGFzIGEgc3RhdGUgdmFyaWFibGUsXHJcbiAgICAgICAgLy8gYnV0IGl0ICpqdXN0KiBiZWluZyB1c2VkIGZvciB0aGF0IGlzIGFyZ3VhYmx5ICptb3JlKiBjb25mdXNpbmcuXHJcbiAgICAgICAgLy9cclxuICAgICAgICAvLyBCYXNpY2FsbHksIGluZm9ybWF0aW9uIHJlZ2FyZGluZyB0aGUgY3VycmVudGx5IHNlbGVjdGVkIGNvbHVtblxyXG4gICAgICAgIC8vIFwiYmVsb25nc1wiIHRvICpib3RoKiB0aGlzIHJvdyBhbmQgdGhlIHBhcmVudCwgY29uY2VwdHVhbGx5LFxyXG4gICAgICAgIC8vIGJ1dCBmb3IgY2xlYW5saW5lc3MnIHNha2UsIGp1c3Qgb25lIG9mIHRoZW0gZ2V0cyBpdCxcclxuICAgICAgICAvLyBhbmQgdGhlIG90aGVyIGlzIG1hbnVhbGx5IHVwZGF0ZWQgd2hlbmV2ZXIgaXQgY2hhbmdlcy5cclxuICAgICAgICBjb25zdCBmb3JjZVVwZGF0ZSA9IHVzZUZvcmNlVXBkYXRlKCk7XHJcbiAgICAgICAgLy8gXCJTaG9ydGN1dFwiIGZvciBhbnkgZ2l2ZW4gcm93IHRvIGtub3cgdGhhdCBpdCBzaG91bGQgb3Igc2hvdWxkIG5vdFxyXG4gICAgICAgIC8vIGNvbnNpZGVyIG9uZSBvZiBpdHMgY2VsbHMgdGFiYmFibGUuICBBbHNvIHVzZWQgdG8gZGV0ZXJtaW5lXHJcbiAgICAgICAgLy8gaWYgYSBjaGFuZ2UgdG8gdGhlIGN1cnJlbnQgc2VsZWN0ZWQgY2VsbCBzaG91bGQgYWxzb1xyXG4gICAgICAgIC8vIHRyaWdnZXIgZm9jdXNpbmcgdGhhdCBjZWxsLlxyXG4gICAgICAgIGNvbnN0IFtpc1RhYmJhYmxlUm93LCBzZXRJc1RhYmJhYmxlUm93XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgICAgICAvLyBJZiB3ZSdyZSBub3QgdGhlIHRhYmJhYmxlIHJvdywgdGhlbiBmb3IgdGhlIHB1cnBvc2VzIG9mIHRhYkluZGV4XHJcbiAgICAgICAgLy8gY2FsY3VsYXRpb25zLCB3ZSBkb24ndCBoYXZlIGEgdGFiYmFibGUgY2hpbGQgY2VsbC5cclxuICAgICAgICBsZXQgY3VycmVudENvbHVtbiA9IGlzVGFiYmFibGVSb3cgPyBnZXRDdXJyZW50Q29sdW1uKCkgOiBudWxsO1xyXG4gICAgICAgIC8vIFRyYWNrIGNoaWxkIGNlbGxzIGFuZCBtYW5hZ2Uga2V5Ym9hcmQgbmF2aWdhdGlvbiBhbW9uZyB0aGVtLlxyXG4gICAgICAgIGNvbnN0IHsgbWFuYWdlZENoaWxkcmVuOiBtYW5hZ2VkQ2VsbHMsIHVzZVJvdmluZ1RhYkluZGV4Q2hpbGQ6IHVzZVJvdmluZ1RhYkluZGV4Q2VsbCwgY2hpbGRDb3VudDogY2VsbENvdW50IH0gPSB1c2VSb3ZpbmdUYWJJbmRleCh7XHJcbiAgICAgICAgICAgIHNob3VsZEZvY3VzT25DaGFuZ2U6IGdldEZvY3VzQ2VsbE9uUm93Q2hhbmdlLFxyXG4gICAgICAgICAgICB0YWJiYWJsZUluZGV4OiBjdXJyZW50Q29sdW1uXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgLy8gTW9yZSBuYXZpZ2F0aW9uIHN0dWZmXHJcbiAgICAgICAgY29uc3QgbmF2aWdhdGVUb0ZpcnN0Q29sdW1uID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgICAgICAgICBzZXRDdXJyZW50Q29sdW1uMih0cnlOYXZpZ2F0ZVRvSW5kZXgobWFuYWdlZENlbGxzLCAwLCAwLCAxLCBpZGVudGl0eSwgaWRlbnRpdHkpKTtcclxuICAgICAgICAgICAgZm9yY2VVcGRhdGUoKTtcclxuICAgICAgICB9LCBbXSk7XHJcbiAgICAgICAgY29uc3QgbmF2aWdhdGVUb0xhc3RDb2x1bW4gPSB1c2VDYWxsYmFjaygoKSA9PiB7IHNldEN1cnJlbnRDb2x1bW4yKHRyeU5hdmlnYXRlVG9JbmRleChtYW5hZ2VkQ2VsbHMsIG1hbmFnZWRDZWxscy5sZW5ndGgsIG1hbmFnZWRDZWxscy5sZW5ndGgsIC0xLCBpZGVudGl0eSwgaWRlbnRpdHkpKTsgZm9yY2VVcGRhdGUoKTsgfSwgW10pO1xyXG4gICAgICAgIGNvbnN0IG5hdmlnYXRlVG9QcmV2Q29sdW1uID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgICAgICAgICBzZXRDdXJyZW50Q29sdW1uMihjID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnlOYXZpZ2F0ZVRvSW5kZXgobWFuYWdlZENlbGxzLCBjLCBjIC0gMSwgLTEsIGlkZW50aXR5LCBpZGVudGl0eSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBmb3JjZVVwZGF0ZSgpO1xyXG4gICAgICAgIH0sIFtdKTtcclxuICAgICAgICBjb25zdCBuYXZpZ2F0ZVRvTmV4dENvbHVtbiA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgICAgICAgICAgc2V0Q3VycmVudENvbHVtbjIoYyA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ5TmF2aWdhdGVUb0luZGV4KG1hbmFnZWRDZWxscywgYywgYyArIDEsIDEsIGlkZW50aXR5LCBpZGVudGl0eSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBmb3JjZVVwZGF0ZSgpO1xyXG4gICAgICAgIH0sIFtdKTtcclxuICAgICAgICBjb25zdCB7IHVzZUxpbmVhck5hdmlnYXRpb25DaGlsZDogdXNlTGluZWFyTmF2aWdhdGlvbkNoaWxkQ2VsbCB9ID0gdXNlTGluZWFyTmF2aWdhdGlvbih7XHJcbiAgICAgICAgICAgIG1hbmFnZWRDaGlsZHJlbjogbWFuYWdlZENlbGxzLFxyXG4gICAgICAgICAgICBuYXZpZ2F0aW9uRGlyZWN0aW9uOiBcImlubGluZVwiLFxyXG4gICAgICAgICAgICBpbmRleDogY3VycmVudENvbHVtbiA/PyAwLFxyXG4gICAgICAgICAgICBkaXNhYmxlSG9tZUVuZEtleXM6IHRydWUsXHJcbiAgICAgICAgICAgIG5hdmlnYXRlVG9GaXJzdDogbmF2aWdhdGVUb0ZpcnN0Q29sdW1uLFxyXG4gICAgICAgICAgICBuYXZpZ2F0ZVRvTGFzdDogbmF2aWdhdGVUb0xhc3RDb2x1bW4sXHJcbiAgICAgICAgICAgIG5hdmlnYXRlVG9QcmV2OiBuYXZpZ2F0ZVRvUHJldkNvbHVtbixcclxuICAgICAgICAgICAgbmF2aWdhdGVUb05leHQ6IG5hdmlnYXRlVG9OZXh0Q29sdW1uXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgLy8gTm90aWZ5IHRoZSByZWxldmFudCBjaGlsZCBjZWxscyB3aGVuIHRoZXkgc2hvdWxkL3Nob3VsZCBub3QgYmUgdGFiYmFibGVcclxuICAgICAgICB1c2VDaGlsZEZsYWcoY3VycmVudENvbHVtbiwgbWFuYWdlZENlbGxzLmxlbmd0aCwgdXNlQ2FsbGJhY2soKGNlbGxJbmRleCwgY2VsbElzVGFiYmFibGUpID0+IHtcclxuICAgICAgICAgICAgaWYgKGNlbGxJbmRleCAhPSBudWxsKVxyXG4gICAgICAgICAgICAgICAgbWFuYWdlZENlbGxzW2NlbGxJbmRleF0/LnNldFRhYmJhYmxlKGNlbGxJc1RhYmJhYmxlKTtcclxuICAgICAgICB9LCBbbWFuYWdlZENlbGxzXSksIHVzZUVmZmVjdCk7XHJcbiAgICAgICAgLy8gQW55IHRpbWUgd2UgYmVjb21lIHRoZSBjdXJyZW50bHkgdGFiYmFibGUgcm93LFxyXG4gICAgICAgIC8vIG1ha2Ugc3VyZSB0aGF0IHdlJ3JlIGluIGEgdmFsaWQgY2VsbCwgYW5kIHNoaWZ0IGxlZnQvcmlnaHQgaWYgbm90IHRvIGZpbmQgb25lLlxyXG4gICAgICAgIC8vIFRPRE86IFNlZW1zIGtpbmRhIGphbmt5PyBJcyB0aGVyZSBubyBjbGVhbmVyIHdheSB0byBhY2NvbXBsaXNoIHRoaXMsXHJcbiAgICAgICAgLy8gZXNwZWNpYWxseSBzaW5jZSBpdCdzIHNpbWlsYXIgdG8gb3RoZXIgY29kZT9cclxuICAgICAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoaXNUYWJiYWJsZVJvdykge1xyXG4gICAgICAgICAgICAgICAgbGV0IGNlbGxJbmRleCA9IGdldEN1cnJlbnRDb2x1bW4oKTtcclxuICAgICAgICAgICAgICAgIHdoaWxlIChjZWxsSW5kZXggPj0gMCAmJiBtYW5hZ2VkQ2VsbHNbY2VsbEluZGV4XSA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLS1jZWxsSW5kZXg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoY2VsbEluZGV4IDwgMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNlbGxJbmRleCA9IGdldEN1cnJlbnRDb2x1bW4oKTtcclxuICAgICAgICAgICAgICAgICAgICB3aGlsZSAoY2VsbEluZGV4IDwgbWFuYWdlZENlbGxzLmxlbmd0aCAmJiBtYW5hZ2VkQ2VsbHNbY2VsbEluZGV4XSA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICsrY2VsbEluZGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoY2VsbEluZGV4ID09IG1hbmFnZWRDZWxscy5sZW5ndGgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNlbGxJbmRleCA9IGdldEN1cnJlbnRDb2x1bW4oKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChjZWxsSW5kZXggIT0gZ2V0Q3VycmVudENvbHVtbigpKVxyXG4gICAgICAgICAgICAgICAgICAgIHNldEN1cnJlbnRDb2x1bW4yKGNlbGxJbmRleCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LCBbaXNUYWJiYWJsZVJvd10pO1xyXG4gICAgICAgIGNvbnN0IHsgdXNlTWFuYWdlZENoaWxkUHJvcHM6IHVzZU1hbmFnZWRSb3dQcm9wcyB9ID0gdXNlTWFuYWdlZFJvdyh7XHJcbiAgICAgICAgICAgIGluZGV4OiByb3dJbmRleCxcclxuICAgICAgICAgICAgc2V0SXNUYWJiYWJsZVJvdyxcclxuICAgICAgICAgICAgaGlkZGVuLFxyXG4gICAgICAgICAgICAuLi5pbmZvXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY29uc3QgeyB1c2VMaW5lYXJOYXZpZ2F0aW9uQ2hpbGRQcm9wczogdXNlTGluZWFyTmF2aWdhdGlvbkNoaWxkUm93UHJvcHMgfSA9IHVzZUxpbmVhck5hdmlnYXRpb25DaGlsZFJvdygpO1xyXG4gICAgICAgIGNvbnN0IHVzZUdyaWROYXZpZ2F0aW9uUm93UHJvcHMgPSB1c2VDYWxsYmFjaygocHJvcHMpID0+IHVzZU1hbmFnZWRSb3dQcm9wcyh1c2VMaW5lYXJOYXZpZ2F0aW9uQ2hpbGRSb3dQcm9wcyh1c2VNZXJnZWRQcm9wcygpKHsgaGlkZGVuOiAhIWhpZGRlbiwgXCJkYXRhLWluZGV4XCI6IHJvd0luZGV4IH0sIHByb3BzKSkpLCBbdXNlTWFuYWdlZFJvd1Byb3BzLCAhIWhpZGRlbl0pO1xyXG4gICAgICAgIGNvbnN0IGdldFJvd0luZGV4ID0gdXNlU3RhYmxlR2V0dGVyKHJvd0luZGV4KTtcclxuICAgICAgICBjb25zdCB1c2VHcmlkTmF2aWdhdGlvbkNlbGwgPSB1c2VDYWxsYmFjaygoaW5mbykgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBbdGFiYmFibGUsIHNldFRhYmJhYmxlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgICAgICAgICAgY29uc3QgeyB1c2VSb3ZpbmdUYWJJbmRleENoaWxkUHJvcHMgfSA9IHVzZVJvdmluZ1RhYkluZGV4Q2VsbCh7IC4uLmluZm8sIHNldFRhYmJhYmxlIH0pO1xyXG4gICAgICAgICAgICBjb25zdCB7IHVzZUxpbmVhck5hdmlnYXRpb25DaGlsZFByb3BzOiB1c2VMaW5lYXJOYXZpZ2F0aW9uQ2hpbGRDZWxsUHJvcHMgfSA9IHVzZUxpbmVhck5hdmlnYXRpb25DaGlsZENlbGwoKTtcclxuICAgICAgICAgICAgLy8gQW55IHRpbWUgd2UgaW50ZXJhY3Qgd2l0aCB0aGlzIGNlbGwsIHNldCBpdCB0byBiZVxyXG4gICAgICAgICAgICAvLyBvdXIgXCJjdXJyZW50bHkgdGFiYmFibGVcIiBjZWxsLCByZWdhcmRsZXNzIG9mXHJcbiAgICAgICAgICAgIC8vIGFueSBwcmV2aW91c2x5IHNlbGVjdGVkIHJvdy9jb2x1bW4uXHJcbiAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgIC8vIFRPRE86IE1vdXNldXAvZG93biBtaWdodCBiZSBwcmVmZXJhYmxlLFxyXG4gICAgICAgICAgICAvLyBidXQgaXQgZG9lc24ndCBmaXJlIG9uIGxhYmVsIGVsZW1lbnRzIGhlcmU/Pz8/P1xyXG4gICAgICAgICAgICBjb25zdCBvbkNsaWNrID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgc2V0Q3VycmVudFJvdzIoZ2V0Um93SW5kZXgoKSk7XHJcbiAgICAgICAgICAgICAgICBzZXRDdXJyZW50Q29sdW1uMihpbmZvLmluZGV4KTtcclxuICAgICAgICAgICAgfSwgW2luZm8uaW5kZXhdKTtcclxuICAgICAgICAgICAgY29uc3QgdXNlR3JpZE5hdmlnYXRpb25DZWxsUHJvcHMgPSB1c2VDYWxsYmFjaygocHJvcHMpID0+IHVzZVJvdmluZ1RhYkluZGV4Q2hpbGRQcm9wcyh1c2VMaW5lYXJOYXZpZ2F0aW9uQ2hpbGRDZWxsUHJvcHModXNlTWVyZ2VkUHJvcHMoKSh7IG9uQ2xpY2sgfSwgcHJvcHMpKSksIFt1c2VMaW5lYXJOYXZpZ2F0aW9uQ2hpbGRDZWxsUHJvcHNdKTtcclxuICAgICAgICAgICAgcmV0dXJuIHsgdGFiYmFibGUsIHVzZUdyaWROYXZpZ2F0aW9uQ2VsbFByb3BzIH07XHJcbiAgICAgICAgfSwgW3VzZUxpbmVhck5hdmlnYXRpb25DaGlsZENlbGxdKTtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBjdXJyZW50Q29sdW1uLFxyXG4gICAgICAgICAgICB1c2VHcmlkTmF2aWdhdGlvblJvd1Byb3BzLFxyXG4gICAgICAgICAgICB1c2VHcmlkTmF2aWdhdGlvbkNlbGwsXHJcbiAgICAgICAgICAgIGNlbGxDb3VudCxcclxuICAgICAgICAgICAgaXNUYWJiYWJsZVJvdyxcclxuICAgICAgICAgICAgbWFuYWdlZENlbGxzOiBtYW5hZ2VkQ2VsbHNcclxuICAgICAgICB9O1xyXG4gICAgfSwgW3VzZUxpbmVhck5hdmlnYXRpb25DaGlsZFJvdywgdXNlTWFuYWdlZFJvdywgaW5kZXhEZW1hbmdsZXIsIGluZGV4TWFuZ2xlcl0pO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB1c2VHcmlkTmF2aWdhdGlvblJvdyxcclxuICAgICAgICB1c2VHcmlkTmF2aWdhdGlvbkNvbHVtbixcclxuICAgICAgICByb3dDb3VudDogY2hpbGRDb3VudCxcclxuICAgICAgICBjZWxsSW5kZXg6IGN1cnJlbnRDb2x1bW4sXHJcbiAgICAgICAgcm93SW5kZXg6IGN1cnJlbnRSb3csXHJcbiAgICAgICAgbWFuYWdlZFJvd3NcclxuICAgIH07XHJcbn1cclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXNlLWdyaWQtbmF2aWdhdGlvbi5qcy5tYXAiLCJpbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicHJlYWN0L2hvb2tzXCI7XHJcbmltcG9ydCB7IHVzZVN0YWJsZUNhbGxiYWNrIH0gZnJvbSBcIi4vdXNlLXN0YWJsZS1jYWxsYmFja1wiO1xyXG5leHBvcnQgZnVuY3Rpb24gdXNlQW5pbWF0aW9uRnJhbWUoeyBjYWxsYmFjayB9KSB7XHJcbiAgICAvLyBHZXQgYSB3cmFwcGVyIGFyb3VuZCB0aGUgZ2l2ZW4gY2FsbGJhY2sgdGhhdCdzIHN0YWJsZVxyXG4gICAgY29uc3Qgc3RhYmxlQ2FsbGJhY2sgPSB1c2VTdGFibGVDYWxsYmFjayhjYWxsYmFjayA/PyAoKCkgPT4geyB9KSk7XHJcbiAgICBjb25zdCBoYXNDYWxsYmFjayA9IChjYWxsYmFjayAhPSBudWxsKTtcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKGhhc0NhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgIC8vIEdldCBhIHdyYXBwZXIgYXJvdW5kIHRoZSB3cmFwcGVyIGFyb3VuZCB0aGUgY2FsbGJhY2tcclxuICAgICAgICAgICAgLy8gdGhhdCBhbHNvIGNhbGxzIGByZXF1ZXN0QW5pbWF0aW9uRnJhbWVgIGFnYWluLlxyXG4gICAgICAgICAgICBjb25zdCByYWZDYWxsYmFjayA9IChtcykgPT4ge1xyXG4gICAgICAgICAgICAgICAgaGFuZGxlID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHJhZkNhbGxiYWNrKTtcclxuICAgICAgICAgICAgICAgIHN0YWJsZUNhbGxiYWNrKG1zKTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgbGV0IGhhbmRsZSA9IHJlcXVlc3RBbmltYXRpb25GcmFtZShyYWZDYWxsYmFjayk7XHJcbiAgICAgICAgICAgIHJldHVybiAoKSA9PiBjYW5jZWxBbmltYXRpb25GcmFtZShoYW5kbGUpO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFtoYXNDYWxsYmFja10pO1xyXG59XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZS1hbmltYXRpb24tZnJhbWUuanMubWFwIiwiaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZVJlZiB9IGZyb20gXCJwcmVhY3QvaG9va3NcIjtcclxuaW1wb3J0IHsgdXNlTWVyZ2VkUHJvcHMgfSBmcm9tIFwiLi91c2UtbWVyZ2VkLXByb3BzXCI7XHJcbmltcG9ydCB7IHVzZVJlZkVsZW1lbnQgfSBmcm9tIFwiLi91c2UtcmVmLWVsZW1lbnRcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwiLi91c2Utc3RhdGVcIjtcclxuZXhwb3J0IGZ1bmN0aW9uIHVzZURyYWdnYWJsZSh7IGVmZmVjdEFsbG93ZWQsIGRhdGEsIGRyYWdJbWFnZSwgZHJhZ0ltYWdlWE9mZnNldCwgZHJhZ0ltYWdlWU9mZnNldCB9KSB7XHJcbiAgICBjb25zdCBbZHJhZ2dpbmcsIHNldERyYWdnaW5nLCBnZXREcmFnZ2luZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbbGFzdERyb3BFZmZlY3QsIHNldExhc3REcm9wRWZmZWN0LCBnZXRMYXN0RHJvcEVmZmVjdF0gPSB1c2VTdGF0ZShudWxsKTtcclxuICAgIGNvbnN0IHVzZURyYWdnYWJsZVByb3BzID0gdXNlQ2FsbGJhY2soKHApID0+IHtcclxuICAgICAgICBjb25zdCByZWYgPSB1c2VSZWYobnVsbCk7XHJcbiAgICAgICAgY29uc3QgeyBlbGVtZW50LCB1c2VSZWZFbGVtZW50UHJvcHMgfSA9IHVzZVJlZkVsZW1lbnQoKTtcclxuICAgICAgICBjb25zdCBvbkRyYWdTdGFydCA9IChlKSA9PiB7XHJcbiAgICAgICAgICAgIC8vZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBzZXREcmFnZ2luZyh0cnVlKTtcclxuICAgICAgICAgICAgaWYgKGUuZGF0YVRyYW5zZmVyKSB7XHJcbiAgICAgICAgICAgICAgICBlLmRhdGFUcmFuc2Zlci5lZmZlY3RBbGxvd2VkID0gKGVmZmVjdEFsbG93ZWQgPz8gXCJhbGxcIik7XHJcbiAgICAgICAgICAgICAgICBpZiAoZHJhZ0ltYWdlKVxyXG4gICAgICAgICAgICAgICAgICAgIGUuZGF0YVRyYW5zZmVyLnNldERyYWdJbWFnZShkcmFnSW1hZ2UsIGRyYWdJbWFnZVhPZmZzZXQgPz8gMCwgZHJhZ0ltYWdlWU9mZnNldCA/PyAwKTtcclxuICAgICAgICAgICAgICAgIGxldCBlbnRyaWVzID0gT2JqZWN0LmVudHJpZXMoZGF0YSk7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IFttaW1lVHlwZSwgZGF0YV0gb2YgZW50cmllcykge1xyXG4gICAgICAgICAgICAgICAgICAgIGUuZGF0YVRyYW5zZmVyLnNldERhdGEobWltZVR5cGUsIGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICBjb25zdCBvbkRyYWdFbmQgPSAoZSkgPT4ge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIHNldERyYWdnaW5nKGZhbHNlKTtcclxuICAgICAgICAgICAgaWYgKGUuZGF0YVRyYW5zZmVyKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZS5kYXRhVHJhbnNmZXIuZHJvcEVmZmVjdCAhPSBcIm5vbmVcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldExhc3REcm9wRWZmZWN0KGUuZGF0YVRyYW5zZmVyLmRyb3BFZmZlY3QpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0TGFzdERyb3BFZmZlY3QobnVsbCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiB1c2VNZXJnZWRQcm9wcygpKHVzZVJlZkVsZW1lbnRQcm9wcyh7XHJcbiAgICAgICAgICAgIGRyYWdnYWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgb25EcmFnU3RhcnQsXHJcbiAgICAgICAgICAgIG9uRHJhZ0VuZCxcclxuICAgICAgICAgICAgcmVmXHJcbiAgICAgICAgfSksIHApO1xyXG4gICAgfSwgW2VmZmVjdEFsbG93ZWQsIGRyYWdJbWFnZSwgZHJhZ0ltYWdlWE9mZnNldCwgZHJhZ0ltYWdlWU9mZnNldCwgLi4uT2JqZWN0LmVudHJpZXMoZGF0YSkuZmxhdCgpXSk7XHJcbiAgICAvLyBSZXR1cm4gYm90aCB0aGUgZWxlbWVudCBhbmQgdGhlIGhvb2sgdGhhdCBtb2RpZmllcyBcclxuICAgIC8vIHRoZSBwcm9wcyBhbmQgYWxsb3dzIHVzIHRvIGFjdHVhbGx5IGZpbmQgdGhlIGVsZW1lbnRcclxuICAgIGxldCByZXQgPSB7XHJcbiAgICAgICAgdXNlRHJhZ2dhYmxlUHJvcHMsXHJcbiAgICAgICAgZHJhZ2dpbmcsXHJcbiAgICAgICAgZ2V0RHJhZ2dpbmcsXHJcbiAgICAgICAgLy8gU2V0IG9uY2UgYSBkcmFnIGhhcyBjb21wbGV0ZWQgd2l0aCB0aGUgcmVzdWx0aW5nIGFjdGlvblxyXG4gICAgICAgIC8vIFVzZWZ1bCBmb3IgcmVtb3ZpbmcgdGhlIGVsZW1lbnQgYWZ0ZXJ3YXJkcyBpZiBpdCB3YXMgXCJtb3ZlXCJcclxuICAgICAgICBsYXN0RHJvcEVmZmVjdCxcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBUZXN0XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgZ2V0TGFzdERyb3BFZmZlY3RcclxuICAgIH07XHJcbiAgICByZXR1cm4gcmV0O1xyXG59XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZS1kcmFnZ2FibGUuanMubWFwIiwiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicHJlYWN0L2hvb2tzXCI7XHJcbmltcG9ydCB7IHVzZU1lcmdlZFByb3BzIH0gZnJvbSBcIi4vdXNlLW1lcmdlZC1wcm9wc1wiO1xyXG5pbXBvcnQgeyB1c2VSZWZFbGVtZW50IH0gZnJvbSBcIi4vdXNlLXJlZi1lbGVtZW50XCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcIi4vdXNlLXN0YXRlXCI7XHJcbjtcclxuO1xyXG5leHBvcnQgY2xhc3MgRHJvcHBhYmxlRmlsZUVycm9yIGV4dGVuZHMgRXJyb3Ige1xyXG4gICAgZmlsZU5hbWU7XHJcbiAgICBlcnJvclR5cGU7XHJcbiAgICBjb25zdHJ1Y3RvcihmaWxlTmFtZSwgYmFzZSkge1xyXG4gICAgICAgIHN1cGVyKGJhc2U/Lm1lc3NhZ2UgPz8gXCJBbiB1bnNwZWNpZmllZCBlcnJvciBvY2N1cnJlZCByZWFkaW5nIHRoZSBmaWxlLlwiKTtcclxuICAgICAgICB0aGlzLmZpbGVOYW1lID0gZmlsZU5hbWU7XHJcbiAgICAgICAgdGhpcy5lcnJvclR5cGUgPSBiYXNlPy5uYW1lO1xyXG4gICAgfVxyXG59XHJcbi8vTWVyZ2VkUHJvcHM8VXNlUmVmRWxlbWVudFByb3BzUmV0dXJuVHlwZTxFLCBQaWNrPGguSlNYLkhUTUxBdHRyaWJ1dGVzPEU+LCBcIm9uRHJhZ0VudGVyXCIgfCBcIm9uRHJhZ0xlYXZlXCIgfCBcIm9uRHJhZ092ZXJcIiB8IFwib25Ecm9wXCI+PiwgUD47XHJcbmV4cG9ydCBmdW5jdGlvbiB1c2VEcm9wcGFibGUoeyBlZmZlY3QgfSkge1xyXG4gICAgY29uc3QgW2ZpbGVzRm9yQ29uc2lkZXJhdGlvbiwgc2V0RmlsZXNGb3JDb25zaWRlcmF0aW9uXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gICAgY29uc3QgW3N0cmluZ3NGb3JDb25zaWRlcmF0aW9uLCBzZXRTdHJpbmdzRm9yQ29uc2lkZXJhdGlvbl0gPSB1c2VTdGF0ZShudWxsKTtcclxuICAgIGNvbnN0IFtkcm9wcGVkRmlsZXMsIHNldERyb3BwZWRGaWxlc10gPSB1c2VTdGF0ZShudWxsKTtcclxuICAgIGNvbnN0IFtkcm9wcGVkU3RyaW5ncywgc2V0RHJvcHBlZFN0cmluZ3NdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgICBjb25zdCBbZHJvcEVycm9yLCBzZXREcm9wRXJyb3JdID0gdXNlU3RhdGUodW5kZWZpbmVkKTtcclxuICAgIC8vIEFsbCB0aGUgcHJvbWlzZXMgZ2VuZXJhdGVkIGZyb20gdGhlIGRyb3AgZXZlbnRzLlxyXG4gICAgLy8gVXNlZCB0byBwcm9jZXNzIG11bHRpcGxlIGRyb3AgZXZlbnRzIGluIHN1Y2Nlc3Npb25cclxuICAgIGNvbnN0IGRyb3BQcm9taXNlc1JlZiA9IHVzZVJlZihbXSk7XHJcbiAgICBjb25zdCBbY3VycmVudFByb21pc2VJbmRleCwgc2V0Q3VycmVudFByb21pc2VJbmRleCwgZ2V0Q3VycmVudFByb21pc2VJbmRleF0gPSB1c2VTdGF0ZSgtMSk7XHJcbiAgICBjb25zdCBbcHJvbWlzZUNvdW50LCBzZXRQcm9taXNlQ291bnQsIGdldFByb21pc2VDb3VudF0gPSB1c2VTdGF0ZSgwKTtcclxuICAgIGNvbnN0IHsgZWxlbWVudCwgdXNlUmVmRWxlbWVudFByb3BzLCBnZXRFbGVtZW50IH0gPSB1c2VSZWZFbGVtZW50KCk7XHJcbiAgICAvLyBBbnkgdGltZSB3ZSBhZGQgYSBuZXcgcHJvbWlzZSwgaWYgdGhlcmUncyBubyBjdXJyZW50IHByb21pc2UgcnVubmluZywgd2UgbmVlZCB0byBzdGFydCBvbmUuXHJcbiAgICAvLyBJZiB0aGVyZSBpcyBvbmUsIHRoZW4gd2UgZG9uJ3QgbmVlZCB0byBkbyBhbnl0aGluZywgc2luY2UgaXQgcnVucyB0aGUgc2FtZSBjaGVjay5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgY3VycmVudFByb21pc2VJbmRleCA9IGdldEN1cnJlbnRQcm9taXNlSW5kZXgoKTtcclxuICAgICAgICBjb25zdCBwcm9taXNlQ291bnQgPSBnZXRQcm9taXNlQ291bnQoKTtcclxuICAgICAgICBpZiAocHJvbWlzZUNvdW50ID4gMCkge1xyXG4gICAgICAgICAgICBpZiAoKGN1cnJlbnRQcm9taXNlSW5kZXggKyAxKSA8IHByb21pc2VDb3VudCkge1xyXG4gICAgICAgICAgICAgICAgc2V0Q3VycmVudFByb21pc2VJbmRleChpID0+ICsraSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9LCBbcHJvbWlzZUNvdW50XSk7XHJcbiAgICAvLyBBbnl0aW1lIG91ciBjdXJyZW50IHByb21pc2UgY2hhbmdlcyxcclxuICAgIC8vIHdhaXQgZm9yIGl0IHRvIGZpbmlzaCwgdGhlbiBzZXQgb3VyIHN0YXRlIHRvIGl0cyByZXN1bHQuXHJcbiAgICAvLyBGaW5hbGx5LCBjaGVjayB0byBzZWUgaWYgdGhlcmUgYXJlIGFueW1vcmUgcHJvbWlzZXMuXHJcbiAgICAvLyBJZiB0aGVyZSBhcmUsIHRoZW4gaW5jcmVhc2UgY3VycmVudFByb21pc2VDb3VudCxcclxuICAgIC8vIHdoaWNoIHdpbGwgdHJpZ2dlciB0aGlzIGFnYWluLlxyXG4gICAgLy9cclxuICAgIC8vIFRoaXMgc2hvdWxkbid0IGhhcHBlbiAqb2Z0ZW4qLCBidXQgbWF5YmUgaW4gdGhlIGNhc2Ugb2ZcclxuICAgIC8vIGluZGl2aWR1YWxseSBkcm9wcGluZyBhIGJ1bmNoIG9mIGxhcmdlIGZpbGVzIG9yIHNvbWV0aGluZy5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKGN1cnJlbnRQcm9taXNlSW5kZXggPj0gMCkge1xyXG4gICAgICAgICAgICBjb25zdCBjdXJyZW50UHJvbWlzZSA9IGRyb3BQcm9taXNlc1JlZi5jdXJyZW50W2N1cnJlbnRQcm9taXNlSW5kZXhdO1xyXG4gICAgICAgICAgICBjdXJyZW50UHJvbWlzZS50aGVuKChpbmZvKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoaW5mbyAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHsgZmlsZXMsIHN0cmluZ3MgfSA9IGluZm87XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0RHJvcHBlZEZpbGVzKGZpbGVzKTtcclxuICAgICAgICAgICAgICAgICAgICBzZXREcm9wcGVkU3RyaW5ncyhzdHJpbmdzKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8vIE5vdyB0aGF0IHdlJ3JlIGRvbmUsIGFyZSB0aGVyZSBtb3JlIHByb21pc2VzIGluIHRoZSBxdWV1ZT9cclxuICAgICAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRQcm9taXNlSW5kZXggPSBnZXRDdXJyZW50UHJvbWlzZUluZGV4KCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBwcm9taXNlQ291bnQgPSBnZXRQcm9taXNlQ291bnQoKTtcclxuICAgICAgICAgICAgICAgIGlmICgoY3VycmVudFByb21pc2VJbmRleCArIDEpIDwgcHJvbWlzZUNvdW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gU2luY2UgdGhpcyBwcm9taXNlIGhhcyBzdGFydGVkLCBtb3JlIGhhdmUgYmVlbiBhZGRlZC5cclxuICAgICAgICAgICAgICAgICAgICAvLyBSdW4gdGhpcyBlZmZlY3QgYWdhaW4uXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0Q3VycmVudFByb21pc2VJbmRleChpID0+ICsraSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFtjdXJyZW50UHJvbWlzZUluZGV4XSk7XHJcbiAgICBjb25zdCB1c2VEcm9wcGFibGVQcm9wcyA9IChwKSA9PiB7XHJcbiAgICAgICAgLy9jb25zdCByZWYgPSB1c2VSZWY8RT4obnVsbCk7XHJcbiAgICAgICAgLy8gSGFuZGxlIGNvbGxlY3RpbmcgdGhlIGN1cnJlbnQgZmlsZSBtZXRhZGF0YSBvciBNSU1FIHR5cGVzLlxyXG4gICAgICAgIGNvbnN0IG9uRHJhZ0VudGVyID0gKGUpID0+IHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBpZiAoZS5kYXRhVHJhbnNmZXIpIHtcclxuICAgICAgICAgICAgICAgIC8vIElzIHRoZXJlIGEgZGVmYXVsdD8gSSBjYW4ndCBmaW5kIG9uZSBhbnl3aGVyZS5cclxuICAgICAgICAgICAgICAgIGUuZGF0YVRyYW5zZmVyLmRyb3BFZmZlY3QgPSAoZWZmZWN0ID8/IFwibW92ZVwiKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG5ld01pbWVUeXBlcyA9IG5ldyBTZXQoKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG5ld0ZpbGVzID0gbmV3IEFycmF5KCk7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpdGVtIG9mIGUuZGF0YVRyYW5zZmVyPy5pdGVtcyA/PyBbXSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHsga2luZCwgdHlwZSB9ID0gaXRlbTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoa2luZCA9PT0gXCJzdHJpbmdcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdNaW1lVHlwZXMuYWRkKHR5cGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChraW5kID09PSBcImZpbGVcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdGaWxlcy5wdXNoKHsgdHlwZTogaXRlbS50eXBlIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHNldEZpbGVzRm9yQ29uc2lkZXJhdGlvbihuZXdGaWxlcyk7XHJcbiAgICAgICAgICAgICAgICBzZXRTdHJpbmdzRm9yQ29uc2lkZXJhdGlvbihuZXdNaW1lVHlwZXMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICAvLyBIYW5kbGUgcmVzZXR0aW5nIHRoZSBjdXJyZW50IGZpbGUgbWV0YWRhdGEgb3IgTUlNRSB0eXBlc1xyXG4gICAgICAgIGNvbnN0IG9uRHJhZ0xlYXZlID0gKGUpID0+IHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBzZXRGaWxlc0ZvckNvbnNpZGVyYXRpb24obnVsbCk7XHJcbiAgICAgICAgICAgIHNldFN0cmluZ3NGb3JDb25zaWRlcmF0aW9uKG51bGwpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgLy8gQm9pbGVycGxhdGUsIEkgZ3Vlc3NcclxuICAgICAgICBjb25zdCBvbkRyYWdPdmVyID0gKGUpID0+IHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgLy8gSGFuZGxlIGdldHRpbmcgdGhlIGRyb3AgZGF0YSBhc3luY2hyb25vdXNseVxyXG4gICAgICAgIGNvbnN0IG9uRHJvcCA9IChlKSA9PiB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgc2V0RmlsZXNGb3JDb25zaWRlcmF0aW9uKG51bGwpO1xyXG4gICAgICAgICAgICBzZXRTdHJpbmdzRm9yQ29uc2lkZXJhdGlvbihudWxsKTtcclxuICAgICAgICAgICAgbGV0IGFsbFByb21pc2VzID0gbmV3IEFycmF5KCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGRyb3BEYXRhID0ge307XHJcbiAgICAgICAgICAgIGNvbnN0IGRyb3BGaWxlID0gW107XHJcbiAgICAgICAgICAgIGZvciAobGV0IGl0ZW0gb2YgZS5kYXRhVHJhbnNmZXI/Lml0ZW1zID8/IFtdKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB7IGtpbmQsIHR5cGUgfSA9IGl0ZW07XHJcbiAgICAgICAgICAgICAgICBpZiAoa2luZCA9PT0gXCJzdHJpbmdcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIGFsbFByb21pc2VzLnB1c2goKG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IGl0ZW0uZ2V0QXNTdHJpbmcocmVzb2x2ZSkpKS50aGVuKHN0ciA9PiBkcm9wRGF0YVt0eXBlXSA9IHN0cikpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoa2luZCA9PT0gXCJmaWxlXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBmaWxlID0gaXRlbS5nZXRBc0ZpbGUoKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZmlsZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGxQcm9taXNlcy5wdXNoKG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVhZGVyLm9ubG9hZCA9IChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSByZWFkZXIucmVzdWx0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRyb3BGaWxlLnB1c2goeyBkYXRhLCBuYW1lOiBmaWxlLm5hbWUsIHR5cGU6IGZpbGUudHlwZSwgc2l6ZTogZGF0YS5ieXRlTGVuZ3RoLCBsYXN0TW9kaWZpZWQ6IGZpbGUubGFzdE1vZGlmaWVkIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlYWRlci5vbmVycm9yID0gKGUpID0+IHsgcmVqZWN0KG5ldyBEcm9wcGFibGVGaWxlRXJyb3IoZmlsZS5uYW1lLCByZWFkZXIuZXJyb3IpKTsgfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlYWRlci5vbmFib3J0ID0gKGUpID0+IHsgcmVqZWN0KG5ldyBEcm9wcGFibGVGaWxlRXJyb3IoZmlsZS5uYW1lLCByZWFkZXIuZXJyb3IpKTsgfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlYWRlci5yZWFkQXNBcnJheUJ1ZmZlcihmaWxlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkcm9wRmlsZS5wdXNoKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGRyb3BQcm9taXNlc1JlZi5jdXJyZW50LnB1c2goUHJvbWlzZS5hbGwoYWxsUHJvbWlzZXMpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgc2V0UHJvbWlzZUNvdW50KGkgPT4gKytpKTtcclxuICAgICAgICAgICAgICAgIHNldERyb3BFcnJvcihudWxsKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3RyaW5nczogZHJvcERhdGEsXHJcbiAgICAgICAgICAgICAgICAgICAgZmlsZXM6IGRyb3BGaWxlXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB9KS5jYXRjaChleCA9PiB7XHJcbiAgICAgICAgICAgICAgICBkZWJ1Z2dlcjsgLy8gSW50ZW50aW9uYWxcclxuICAgICAgICAgICAgICAgIHNldFByb21pc2VDb3VudChpID0+ICsraSk7XHJcbiAgICAgICAgICAgICAgICBzZXREcm9wRXJyb3IoZXgpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICAgIH0pKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiB1c2VNZXJnZWRQcm9wcygpKHVzZVJlZkVsZW1lbnRQcm9wcyh7IG9uRHJhZ0VudGVyLCBvbkRyYWdMZWF2ZSwgb25EcmFnT3Zlciwgb25Ecm9wIH0pLCBwKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHVzZURyb3BwYWJsZVByb3BzLFxyXG4gICAgICAgIGZpbGVzRm9yQ29uc2lkZXJhdGlvbixcclxuICAgICAgICBzdHJpbmdzRm9yQ29uc2lkZXJhdGlvbixcclxuICAgICAgICBkcm9wcGVkRmlsZXMsXHJcbiAgICAgICAgZHJvcHBlZFN0cmluZ3MsXHJcbiAgICAgICAgZHJvcEVycm9yLFxyXG4gICAgICAgIGVsZW1lbnQsXHJcbiAgICAgICAgZ2V0RWxlbWVudFxyXG4gICAgfTtcclxufVxyXG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2UtZHJvcHBhYmxlLmpzLm1hcCIsImltcG9ydCB7IHVzZUxheW91dEVmZmVjdCB9IGZyb20gXCJwcmVhY3QvaG9va3NcIjtcclxuaW1wb3J0IHsgdXNlU3RhYmxlQ2FsbGJhY2sgfSBmcm9tIFwiLi91c2Utc3RhYmxlLWNhbGxiYWNrXCI7XHJcbi8qKlxyXG4gKlxyXG4gKiBUaGVyZSBhcmUgc2V2ZXJhbCBkaWZmZXJlbnQgd2F5cyB0aGF0IGEgZm9jdXMgZXZlbnQgY2FuIGhhcHBlbi4gIEFzc3VtZVxyXG4gKiB0aGUgZm9sbG93aW5nIHN0ZXBzIGhhcHBlbiBpbiBvcmRlcjpcclxuICpcclxuICogMS4gVGhlIHBhZ2UgbG9hZHMuXHJcbiAqICAgICogTm90aGluZyBpcyBmb2N1c2VkLCBidXQgYGRvY3VtZW50LmFjdGl2ZUVsZW1lbnRgIGlzIGBib2R5YC5cclxuICogICAgKiBObyBmb2N1cyBldmVudHMgYXJlIGZpcmVkLlxyXG4gKiAyLiBUaGUgd2luZG93IGlzIGZvY3VzZWQsIGFuIHVuZm9jdXNhYmxlIGVsZW1lbnQgaXMgY2xpY2tlZCwgdGV4dCBpcyBzZWxlY3RlZCwgZXRjLlxyXG4gKiAgICAqIFRoZSBgYWN0aXZlRWxlbWVudGAgcmVtYWlucyBhcyBgYm9keWAuXHJcbiAqICAgICogQSBgZm9jdXNgL2Bmb2N1c2luYCBldmVudCAqTUlHSFQqIGJlIGZpcmVkIGZvciBgYm9keWAuIERlcGVuZGluZyBvblxyXG4gKiAgICAgIHRoZSBicm93c2VyLCB0aGlzIGRlcGVuZHMgb24gd2hldGhlciB0aGUgaGFuZGxlciB3YXMgYXR0YWNoZWQgdG8gYHdpbmRvd2Agb3IgYGRvY3VtZW50YC5cclxuICogICAgICBQcm9iYWJseSBqdXN0IGJlc3QgdG8gbm90IHJlbHkgb24gaXQsIG9yIGxpc3RlbiB0byBgd2luZG93YCBmb2N1cyBldmVudHMgZGlyZWN0bHkuXHJcbiAqIDMuIEEgZm9jdXNhYmxlIGVsZW1lbnQgaXMgY2xpY2tlZCwgZXRjLlxyXG4gKiAgICAqIFRoZSBgYWN0aXZlRWxlbWVudGAgaXMgc2V0IHRvIHRoZSBuZXcgZWxlbWVudCBiZWZvcmUgYW55IGV2ZW50IGV2ZW4gZmlyZXMuXHJcbiAqICAgICogYGZvY3Vzb3V0YCBhbmQgYGJsdXJgIGFyZSAqbm90KiBmaXJlZCBvbiBgYm9keWAuXHJcbiAqICAgICogYGZvY3VzYCBhbmQgYGZvY3VzaW5gIGFyZSBmaXJlZCBvbiB0aGUgbmV3IGVsZW1lbnQuIGByZWxhdGVkVGFyZ2V0YCBpcyBudWxsLlxyXG4gKiA0LiBBIGZvY3VzYWJsZSBlbGVtZW50IGlzIGNsaWNrZWQsIGV0Yy5cclxuICogICAgKiAqKlRoZSBgYWN0aXZlRWxlbWVudGAgaXMgc2V0IHRvIHRoZSBgYm9keWAqKiBiZWZvcmUgYW55IGV2ZW50IGV2ZW4gZmlyZXMuXHJcbiAqICAgICogYGJsdXJgIGFuZCBgZm9jdXNvdXRgIGFyZSBmaXJlZCBvbiB0aGUgb2xkIGVsZW1lbnQuIGByZWxhdGVkVGFyZ2V0YCBpcyB0aGUgbmV3IGVsZW1lbnQuXHJcbiAqICAgICogVGhlIGBhY3RpdmVFbGVtZW50YCBpcyBub3cgc2V0IHRvIHRoZSBuZXcgZWxlbWVudC5cclxuICogICAgKiBgZm9jdXNpbmAgaXMgZmlyZWQgb24gdGhlIG5ldyBlbGVtZW50LiBgcmVsYXRlZFRhcmdldGAgaXMgdGhlIG9sZCBlbGVtZW50LlxyXG4gKiA1LiBBbiB1bmZvY3VzYWJsZSBlbGVtZW50IGlzIGNsaWNrZWQsIHRleHQgaXMgc2VsZWN0ZWQsIGV0Yy5cclxuICogICAgKiBUaGUgYGFjdGl2ZUVsZW1lbnRgIGlzIHNldCB0byBgYm9keWAuXHJcbiAqICAgICogYGJsdXJgIGFuZCBgZm9jdXNvdXRgIGFyZSBmaXJlZCBvbiB0aGUgb2xkIGVsZW1lbnQuIGByZWxhdGVkVGFyZ2V0YCBpcyBudWxsLlxyXG4gKiAgICAqIGBmb2N1c2luYCBpcyAqbm90KiBmaXJlZCBvbiBgYm9keWAuXHJcbiAqXHJcbiAqXHJcbiAqIEluIHN1bW1hcnk6XHJcbiAqIDEuIEZvY3VzIGV2ZW50cyAqZG8qIG5vdGlmeSB1cyBvZiBhbGwgY2hhbmdlcyBpbiBmb2N1cywgYnV0IHRoZXJlIGlzIG5vIG9uZSBzaW5nbGUgY29tcHJlaGVuc2l2ZSBldmVudCB0aGF0IHByb3ZpZGVzIHVzIHdpdGggYWxsIGF2YWlsYWJsZSBpbmZvcm1hdGlvbi5cclxuICogMi4gYGRvY3VtZW50LmFjdGl2ZUVsZW1lbnRgICppcyBub3QqIGFsd2F5cyB0aGUgc2FtZSBhcyB3aGF0J3MgYmVpbmcgcmVmZXJlbmNlZCBieSBhIGZvY3VzIGV2ZW50LiBJbiBwYXJ0aWN1bGFyLCBpdCBtYXkgYmVjb21lIGBib2R5YCBhdCBhbnkgYXJiaXRyYXJ5IHRpbWUuXHJcbiAqIDMuIEEgYGJsdXJgIHdpdGhvdXQgYSBgZm9jdXNgIGNhbiBhbmQgd2lsbCBvY2N1ci4gVGhpcyBtZWFucyBpdCBpcyBub3QgcG9zc2libGUgdG8gc29sZWx5IHVzZSBgZm9jdXNgIHRvIGRldGVjdCBhbGwgY2hhbmdlcy5cclxuICogNC4gQSBgYmx1cmAgZXZlbnQgd2hvc2UgYHJlbGF0ZWRUYXJnZXRgIGlzIG51bGwgaW5kaWNhdGVzIHRoYXQgdGhlcmUgd2lsbCBiZSBubyBmb2xsb3dpbmcgYGZvY3VzYCBldmVudC5cclxuICpcclxuICpcclxuICogQHBhcmFtIGNhbGxiYWNrXHJcbiAqIEByZXR1cm5zXHJcbiAqL1xyXG5jb25zdCBkdW1teSA9IDA7XHJcbmNvbnN0IGFjdGl2ZUVsZW1lbnRVcGRhdGVycyA9IG5ldyBTZXQoKTtcclxuY29uc3QgbGFzdEFjdGl2ZUVsZW1lbnRVcGRhdGVycyA9IG5ldyBTZXQoKTtcclxuY29uc3Qgd2luZG93Rm9jdXNlZFVwZGF0ZXJzID0gbmV3IFNldCgpO1xyXG5mdW5jdGlvbiBmb2N1c291dChlKSB7XHJcbiAgICBpZiAoZS5yZWxhdGVkVGFyZ2V0ID09IG51bGwpIHtcclxuICAgICAgICBmb3IgKGxldCBmIG9mIGFjdGl2ZUVsZW1lbnRVcGRhdGVycylcclxuICAgICAgICAgICAgZj8uKG51bGwpO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgLy8gSnVzdCB3YWl0IGZvciB0aGUgZm9jdXNpbiBldmVudC5cclxuICAgIH1cclxufVxyXG5mdW5jdGlvbiBmb2N1c2luKGUpIHtcclxuICAgIGxldCBjdXJyZW50bHlGb2N1c2VkRWxlbWVudCA9IGUudGFyZ2V0O1xyXG4gICAgbGV0IGxhc3RGb2N1c2VkRWxlbWVudCA9IGUudGFyZ2V0O1xyXG4gICAgYWN0aXZlRWxlbWVudFVwZGF0ZXJzLmZvckVhY2goZiA9PiBmPy4oY3VycmVudGx5Rm9jdXNlZEVsZW1lbnQpKTtcclxuICAgIGxhc3RBY3RpdmVFbGVtZW50VXBkYXRlcnMuZm9yRWFjaChmID0+IGY/LihsYXN0Rm9jdXNlZEVsZW1lbnQpKTtcclxufVxyXG5mdW5jdGlvbiB3aW5kb3dGb2N1cygpIHtcclxuICAgIHdpbmRvd0ZvY3VzZWRVcGRhdGVycy5mb3JFYWNoKGYgPT4gZj8uKHRydWUpKTtcclxufVxyXG5mdW5jdGlvbiB3aW5kb3dCbHVyKCkge1xyXG4gICAgd2luZG93Rm9jdXNlZFVwZGF0ZXJzLmZvckVhY2goZiA9PiBmPy4oZmFsc2UpKTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gdXNlQWN0aXZlRWxlbWVudCh7IHNldEFjdGl2ZUVsZW1lbnQsIHNldExhc3RBY3RpdmVFbGVtZW50LCBzZXRXaW5kb3dGb2N1c2VkIH0pIHtcclxuICAgIGNvbnN0IHN0YWJsZVNldEFjdGl2ZUVsZW1lbnQgPSB1c2VTdGFibGVDYWxsYmFjayhzZXRBY3RpdmVFbGVtZW50ID8/ICgoKSA9PiB7IH0pKTtcclxuICAgIGNvbnN0IHN0YWJsZVNldExhc3RBY3RpdmVFbGVtZW50ID0gdXNlU3RhYmxlQ2FsbGJhY2soc2V0TGFzdEFjdGl2ZUVsZW1lbnQgPz8gKCgpID0+IHsgfSkpO1xyXG4gICAgY29uc3Qgc3RhYmxlU2V0V2luZG93Rm9jdXNlZCA9IHVzZVN0YWJsZUNhbGxiYWNrKHNldFdpbmRvd0ZvY3VzZWQgPz8gKCgpID0+IHsgfSkpO1xyXG4gICAgdXNlTGF5b3V0RWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAoYWN0aXZlRWxlbWVudFVwZGF0ZXJzLnNpemUgPT09IDApIHtcclxuICAgICAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImZvY3VzaW5cIiwgZm9jdXNpbiwgeyBwYXNzaXZlOiB0cnVlIH0pO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiZm9jdXNvdXRcIiwgZm9jdXNvdXQsIHsgcGFzc2l2ZTogdHJ1ZSB9KTtcclxuICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJmb2N1c1wiLCB3aW5kb3dGb2N1cywgeyBwYXNzaXZlOiB0cnVlIH0pO1xyXG4gICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImJsdXJcIiwgd2luZG93Qmx1ciwgeyBwYXNzaXZlOiB0cnVlIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBBZGQgdGhlbSBldmVuIGlmIHRoZXkncmUgdW5kZWZpbmVkIHRvIG1vcmUgZWFzaWx5XHJcbiAgICAgICAgLy8gbWFuYWdlIHRoZSBcIj4wIG1lYW5zIGRvbid0IGFkZCBoYW5kbGVyc1wiIGxvZ2ljLlxyXG4gICAgICAgIGFjdGl2ZUVsZW1lbnRVcGRhdGVycy5hZGQoc3RhYmxlU2V0QWN0aXZlRWxlbWVudCk7XHJcbiAgICAgICAgbGFzdEFjdGl2ZUVsZW1lbnRVcGRhdGVycy5hZGQoc3RhYmxlU2V0TGFzdEFjdGl2ZUVsZW1lbnQpO1xyXG4gICAgICAgIHdpbmRvd0ZvY3VzZWRVcGRhdGVycy5hZGQoc3RhYmxlU2V0V2luZG93Rm9jdXNlZCk7XHJcbiAgICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICAgICAgYWN0aXZlRWxlbWVudFVwZGF0ZXJzLmRlbGV0ZShzdGFibGVTZXRBY3RpdmVFbGVtZW50KTtcclxuICAgICAgICAgICAgbGFzdEFjdGl2ZUVsZW1lbnRVcGRhdGVycy5kZWxldGUoc3RhYmxlU2V0TGFzdEFjdGl2ZUVsZW1lbnQpO1xyXG4gICAgICAgICAgICB3aW5kb3dGb2N1c2VkVXBkYXRlcnMuZGVsZXRlKHN0YWJsZVNldFdpbmRvd0ZvY3VzZWQpO1xyXG4gICAgICAgICAgICBpZiAoYWN0aXZlRWxlbWVudFVwZGF0ZXJzLnNpemUgPT09IDApIHtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJmb2N1c2luXCIsIGZvY3VzaW4pO1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImZvY3Vzb3V0XCIsIGZvY3Vzb3V0KTtcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwiZm9jdXNcIiwgd2luZG93Rm9jdXMpO1xyXG4gICAgICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJibHVyXCIsIHdpbmRvd0JsdXIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgIH0sIFtdKTtcclxufVxyXG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2UtYWN0aXZlLWVsZW1lbnQuanMubWFwIiwiaW1wb3J0IHsgdXNlQ2FsbGJhY2sgfSBmcm9tIFwicHJlYWN0L2hvb2tzXCI7XHJcbmltcG9ydCB7IHVzZUFjdGl2ZUVsZW1lbnQgfSBmcm9tIFwiLi91c2UtYWN0aXZlLWVsZW1lbnRcIjtcclxuaW1wb3J0IHsgdXNlUmVmRWxlbWVudCB9IGZyb20gXCIuL3VzZS1yZWYtZWxlbWVudFwiO1xyXG5leHBvcnQgZnVuY3Rpb24gdXNlSGFzRm9jdXMoeyBzZXRGb2N1c2VkLCBzZXRGb2N1c2VkSW5uZXIsIHNldExhc3RGb2N1c2VkLCBzZXRMYXN0Rm9jdXNlZElubmVyIH0pIHtcclxuICAgIGNvbnN0IHsgZWxlbWVudCwgZ2V0RWxlbWVudCwgdXNlUmVmRWxlbWVudFByb3BzIH0gPSB1c2VSZWZFbGVtZW50KCk7XHJcbiAgICBjb25zdCBzZXRBY3RpdmVFbGVtZW50ID0gdXNlQ2FsbGJhY2soKG5vZGUpID0+IHtcclxuICAgICAgICBzZXRGb2N1c2VkPy4oZWxlbWVudCA9PSBub2RlICYmIGVsZW1lbnQgIT0gbnVsbCk7XHJcbiAgICAgICAgc2V0Rm9jdXNlZElubmVyPy4oISFlbGVtZW50Py5jb250YWlucyhub2RlKSk7XHJcbiAgICB9LCBbc2V0Rm9jdXNlZCwgc2V0Rm9jdXNlZElubmVyLCBlbGVtZW50XSk7XHJcbiAgICBjb25zdCBzZXRMYXN0QWN0aXZlRWxlbWVudCA9IHVzZUNhbGxiYWNrKChub2RlKSA9PiB7XHJcbiAgICAgICAgc2V0TGFzdEZvY3VzZWQ/LihlbGVtZW50ID09IG5vZGUgJiYgZWxlbWVudCAhPSBudWxsKTtcclxuICAgICAgICBzZXRMYXN0Rm9jdXNlZElubmVyPy4oISFlbGVtZW50Py5jb250YWlucyhub2RlKSk7XHJcbiAgICB9LCBbc2V0TGFzdEZvY3VzZWQsIHNldExhc3RGb2N1c2VkSW5uZXIsIGVsZW1lbnRdKTtcclxuICAgIHVzZUFjdGl2ZUVsZW1lbnQoeyBzZXRBY3RpdmVFbGVtZW50LCBzZXRMYXN0QWN0aXZlRWxlbWVudCB9KTtcclxuICAgIGNvbnN0IHVzZUhhc0ZvY3VzUHJvcHMgPSB1c2VDYWxsYmFjaygocHJvcHMpID0+IHsgcmV0dXJuIHVzZVJlZkVsZW1lbnRQcm9wcyhwcm9wcyk7IH0sIFt1c2VSZWZFbGVtZW50UHJvcHNdKTtcclxuICAgIHJldHVybiB7IHVzZUhhc0ZvY3VzUHJvcHMsIGVsZW1lbnQsIGdldEVsZW1lbnQgfTtcclxufVxyXG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2UtaGFzLWZvY3VzLmpzLm1hcCIsImltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gXCJwcmVhY3QvaG9va3NcIjtcclxuaW1wb3J0IHsgdXNlU3RhYmxlQ2FsbGJhY2sgfSBmcm9tIFwiLi91c2Utc3RhYmxlLWNhbGxiYWNrXCI7XHJcbmltcG9ydCB7IHVzZVN0YWJsZUdldHRlciB9IGZyb20gXCIuL3VzZS1zdGFibGUtZ2V0dGVyXCI7XHJcbmV4cG9ydCBmdW5jdGlvbiB1c2VJbnRlcnZhbCh7IGludGVydmFsLCBjYWxsYmFjayB9KSB7XHJcbiAgICAvLyBHZXQgYSB3cmFwcGVyIGFyb3VuZCB0aGUgZ2l2ZW4gY2FsbGJhY2sgdGhhdCdzIHN0YWJsZVxyXG4gICAgY29uc3Qgc3RhYmxlQ2FsbGJhY2sgPSB1c2VTdGFibGVDYWxsYmFjayhjYWxsYmFjayk7XHJcbiAgICBjb25zdCBnZXRJbnRlcnZhbCA9IHVzZVN0YWJsZUdldHRlcihpbnRlcnZhbCk7XHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGxldCBpbnRlcnZhbCA9IGdldEludGVydmFsKCk7XHJcbiAgICAgICAgbGV0IGxhc3REZWxheVVzZWQgPSBpbnRlcnZhbDtcclxuICAgICAgICBpZiAoaW50ZXJ2YWwgPT0gbnVsbClcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIC8vIEdldCBhIHdyYXBwZXIgYXJvdW5kIHRoZSB3cmFwcGVyIGFyb3VuZCB0aGUgY2FsbGJhY2tcclxuICAgICAgICAvLyB0aGF0IGNsZWFycyBhbmQgcmVzZXRzIHRoZSBpbnRlcnZhbCBpZiBpdCBjaGFuZ2VzLlxyXG4gICAgICAgIGNvbnN0IGFkanVzdGFibGVDYWxsYmFjayA9ICgpID0+IHtcclxuICAgICAgICAgICAgc3RhYmxlQ2FsbGJhY2soKTtcclxuICAgICAgICAgICAgY29uc3QgY3VycmVudEludGVydmFsID0gZ2V0SW50ZXJ2YWwoKTtcclxuICAgICAgICAgICAgaWYgKGN1cnJlbnRJbnRlcnZhbCAhPSBsYXN0RGVsYXlVc2VkKSB7XHJcbiAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKGhhbmRsZSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoY3VycmVudEludGVydmFsICE9IG51bGwpXHJcbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlID0gc2V0SW50ZXJ2YWwoYWRqdXN0YWJsZUNhbGxiYWNrLCBsYXN0RGVsYXlVc2VkID0gY3VycmVudEludGVydmFsKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgbGV0IGhhbmRsZSA9IHNldEludGVydmFsKGFkanVzdGFibGVDYWxsYmFjaywgaW50ZXJ2YWwpO1xyXG4gICAgICAgIHJldHVybiAoKSA9PiBjbGVhckludGVydmFsKGhhbmRsZSk7XHJcbiAgICB9LCBbXSk7XHJcbn1cclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXNlLWludGVydmFsLmpzLm1hcCIsImltcG9ydCB7IHVzZUNhbGxiYWNrIH0gZnJvbSBcInByZWFjdC9ob29rc1wiO1xyXG5pbXBvcnQgeyB1c2VMaW5lYXJOYXZpZ2F0aW9uLCB1c2VUeXBlYWhlYWROYXZpZ2F0aW9uIH0gZnJvbSBcIi4vdXNlLWtleWJvYXJkLW5hdmlnYXRpb25cIjtcclxuaW1wb3J0IHsgdXNlTWVyZ2VkUHJvcHMgfSBmcm9tIFwiLi91c2UtbWVyZ2VkLXByb3BzXCI7XHJcbmltcG9ydCB7IHVzZVJvdmluZ1RhYkluZGV4IH0gZnJvbSBcIi4vdXNlLXJvdmluZy10YWJpbmRleFwiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCIuL3VzZS1zdGF0ZVwiO1xyXG4vKipcclxuICpcclxuICogVE9ETzogVGhpcyB0YWJsZSB3YXMgc2NyYXBwZWQgd2hlbiB0aGlzIHdhcyBjaGFuZ2VkIHRvIGp1c3QgYWNjZXB0IGEgY29sbGF0b3IgZGlyZWN0bHksXHJcbiAqIGJ1dCBpdCdzIG5vdCBiYWQgZm9yIGEgY29sbGF0aW9uIGNyYXNoIGNvdXJzZSBhbmQgSSBtaWdodCB1c2UgaXQgYWdhaW4uXHJcbiAqIEV2ZW4ganVzdCBhcyBhIFwidGhpcyBpcyB3aHkgaXQncyBpbXBvcnRhbnQgYW5kIGdvb2QgdG8gdXNlIHRoZXNlIHRoaW5nc1wiIHRoaW5nLlxyXG4gKlxyXG4gKiB8TGFuZy58VGFyZ2V0fFVzZXIgaW5wdXR8YGJhc2VgfGBhY2NlbnRgfGBjYXNlYHxgdmFyaWFudGB8XHJcbiAqIHwtLS0tfC0tLS18LS0tLXwtLS0tfC0tLS18LS0tLXwtLS0tfFxyXG4gKiB8RU58SGl8SGl84pyFfOKchXzinIV84pyFfFxyXG4gKiB8RU58SGl877yo772JfOKchXzinIV84pyFfOKdjHxcclxuICogfEVOfEhpfGhpfOKchXzinIV84p2MfOKdjHxcclxuICogfEVOfEhpfEjDr3zinIV84p2MfOKdjHzinYx8XHJcbiAqIHxFTnxIaXxCeWV84p2MfOKdjHzinYx84p2MfFxyXG4gKiB8REF8w6V8YWF84pyFfOKchXzinIV84p2MfFxyXG4gKiB8REF8w6V8QUF84pyFfOKchXzinYx84p2MfFxyXG4gKiB8REF8w6V8QWF84pyFfOKchXzinYx84p2MfFxyXG4gKiB8RU58w6V8YWF84p2MfOKdjHzinYx84p2MfFxyXG4gKiB8REF8w6V8YUF84p2MfOKdjHzinYx84p2MfFxyXG4gKiB8RU58w6V8YXzinIV84pyFfOKdjHzinYx8XHJcbiAqIHxEQXzDpXxhfOKchXzinIV84p2MfOKdjHxcclxuICogfEpQfO+qqnznnYB84pyFfOKchXzinIV84pyFfFxyXG4gKiB8SlB844KrfO+9tnzinIV84pyFfOKchXzinIV8XHJcbiAqIHxKUHzjgqt844GLfOKchXzinIV84pyFfOKdjHxcclxuICogfEpQfOOCq3zjg7V84pyFfOKchXzinIV84p2MfFxyXG4gKiB8SlB844KrfOOLlXzinIV84pyFfOKdjHzinYx8XHJcbiAqIHxKUHzjgqt844KsfOKchXzinYx84p2MfOKdjHxcclxuICogfEpQfOOCq3zlipt84p2MfOKdjHzinYx84p2MfFxyXG4gKiB8Wkh857SFfOe6onzinYx84p2MfOKdjHzinYx8XHJcbiAqXHJcbiAqXHJcbiAqIChOb3RlIHRvIHNlbGY6IEF0IHNvbWUgcG9pbnQsIHRoaXMgZmlsZSB3aWxsIHByb2JhYmx5IGJlIG5vcm1hbGl6ZWRcclxuICogYnkgc29tZWJvZHkgYW5kIO+qqiB3aWxsIHR1cm4gYmFjayBpbnRvIOedgC4pXHJcbiAqXHJcbiAqL1xyXG5jb25zdCBkdW1teSA9IG51bGw7XHJcbmZ1bmN0aW9uIGlkZW50aXR5KHQpIHsgcmV0dXJuIHQ7IH1cclxuLyoqXHJcbiAqIEltcGxlbWVudHMgcHJvcGVyIGtleWJvYXJkIG5hdmlnYXRpb24gZm9yIGNvbXBvbmVudHMgbGlrZSBsaXN0Ym94ZXMsIGJ1dHRvbiBncm91cHMsIG1lbnVzLCBldGMuXHJcbiAqXHJcbiAqIEluIHRoZSBkb2N1bWVudCBvcmRlciwgdGhlcmUgd2lsbCBiZSBvbmx5IG9uZSBcImZvY3VzZWRcIiBvciBcInRhYmJhYmxlXCIgZWxlbWVudCwgbWFraW5nIGl0IGFjdCBtb3JlIGxpa2Ugb25lIGNvbXBsZXRlIHVuaXQgaW4gY29tcGFyaXNvbiB0byBldmVyeXRoaW5nIGFyb3VuZCBpdC5cclxuICogTmF2aWdhdGluZyBmb3J3YXJkcy9iYWNrd2FyZHMgY2FuIGJlIGRvbmUgd2l0aCB0aGUgYXJyb3cga2V5cywgSG9tZS9FbmQga2V5cywgb3IgYW55IGFueSB0ZXh0IGZvciB0eXBlYWhlYWQgdG8gZm9jdXMgdGhlIG5leHQgaXRlbSB0aGF0IG1hdGNoZXMuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gdXNlTGlzdE5hdmlnYXRpb24oeyBpbml0aWFsSW5kZXgsIHNob3VsZEZvY3VzT25DaGFuZ2UsIGNvbGxhdG9yLCBrZXlOYXZpZ2F0aW9uLCBpbmRleE1hbmdsZXIsIGluZGV4RGVtYW5nbGVyIH0pIHtcclxuICAgIGluZGV4TWFuZ2xlciA/Pz0gaWRlbnRpdHk7XHJcbiAgICBpbmRleERlbWFuZ2xlciA/Pz0gaWRlbnRpdHk7XHJcbiAgICBrZXlOYXZpZ2F0aW9uID8/PSBcImVpdGhlclwiO1xyXG4gICAgLy8gS2VlcCB0cmFjayBvZiB0aHJlZSB0aGluZ3MgcmVsYXRlZCB0byB0aGUgY3VycmVudGx5IHRhYmJhYmxlIGVsZW1lbnQncyBpbmRleDpcclxuICAgIC8vIFdoYXQgaXQgaXMsIGFuZCB3aGV0aGVyLCB3aGVuIHdlIHJlbmRlciB0aGlzIGNvbXBvbmVudCBhbmQgaXQncyBjaGFuZ2VkLCB0byBhbHNvIGZvY3VzIHRoZSBlbGVtZW50IHRoYXQgd2FzIG1hZGUgdGFiYmFibGUuXHJcbiAgICBjb25zdCBbdGFiYmFibGVJbmRleCwgc2V0VGFiYmFibGVJbmRleCwgZ2V0VGFiYmFibGVJbmRleF0gPSB1c2VTdGF0ZShpbml0aWFsSW5kZXggPT09IHVuZGVmaW5lZCA/IDAgOiBpbml0aWFsSW5kZXgpO1xyXG4gICAgY29uc3QgeyBtYW5hZ2VkQ2hpbGRyZW4sIGluZGljZXNCeUVsZW1lbnQsIHVzZVJvdmluZ1RhYkluZGV4Q2hpbGQsIGZvY3VzQ3VycmVudCwgLi4ucmVzdCB9ID0gdXNlUm92aW5nVGFiSW5kZXgoeyBzaG91bGRGb2N1c09uQ2hhbmdlLCB0YWJiYWJsZUluZGV4IH0pO1xyXG4gICAgY29uc3QgbmF2aWdhdGVUb0luZGV4ID0gdXNlQ2FsbGJhY2soKGkpID0+IHsgc2V0VGFiYmFibGVJbmRleChpKTsgfSwgW10pO1xyXG4gICAgY29uc3QgbmF2aWdhdGVUb0ZpcnN0ID0gdXNlQ2FsbGJhY2soKCkgPT4geyBzZXRUYWJiYWJsZUluZGV4KGluZGV4TWFuZ2xlcigwKSk7IH0sIFtdKTtcclxuICAgIGNvbnN0IG5hdmlnYXRlVG9MYXN0ID0gdXNlQ2FsbGJhY2soKCkgPT4geyBzZXRUYWJiYWJsZUluZGV4KGluZGV4TWFuZ2xlcihtYW5hZ2VkQ2hpbGRyZW4ubGVuZ3RoIC0gMSkpOyB9LCBbXSk7XHJcbiAgICBjb25zdCBuYXZpZ2F0ZVRvUHJldiA9IHVzZUNhbGxiYWNrKCgpID0+IHsgc2V0VGFiYmFibGVJbmRleChpID0+IGluZGV4TWFuZ2xlcihpbmRleERlbWFuZ2xlcihpID8/IDApIC0gMSkpOyB9LCBbaW5kZXhEZW1hbmdsZXIsIGluZGV4TWFuZ2xlcl0pO1xyXG4gICAgY29uc3QgbmF2aWdhdGVUb05leHQgPSB1c2VDYWxsYmFjaygoKSA9PiB7IHNldFRhYmJhYmxlSW5kZXgoaSA9PiBpbmRleE1hbmdsZXIoaW5kZXhEZW1hbmdsZXIoaSA/PyAwKSArIDEpKTsgfSwgW2luZGV4RGVtYW5nbGVyLCBpbmRleE1hbmdsZXJdKTtcclxuICAgIGNvbnN0IHNldEluZGV4ID0gdXNlQ2FsbGJhY2soKGluZGV4KSA9PiB7XHJcbiAgICAgICAgc2V0VGFiYmFibGVJbmRleChpbmRleCk7XHJcbiAgICB9LCBbXSk7XHJcbiAgICBjb25zdCB7IGN1cnJlbnRUeXBlYWhlYWQsIGludmFsaWRUeXBlYWhlYWQsIHVzZVR5cGVhaGVhZE5hdmlnYXRpb25DaGlsZCB9ID0gdXNlVHlwZWFoZWFkTmF2aWdhdGlvbih7IGNvbGxhdG9yLCBnZXRJbmRleDogZ2V0VGFiYmFibGVJbmRleCwgc2V0SW5kZXgsIHR5cGVhaGVhZFRpbWVvdXQ6IDEwMDAgfSk7XHJcbiAgICBjb25zdCB7IHVzZUxpbmVhck5hdmlnYXRpb25DaGlsZCB9ID0gdXNlTGluZWFyTmF2aWdhdGlvbih7IG5hdmlnYXRpb25EaXJlY3Rpb246IGtleU5hdmlnYXRpb24sIGluZGV4OiBnZXRUYWJiYWJsZUluZGV4KCkgPz8gMCwgbWFuYWdlZENoaWxkcmVuLCBuYXZpZ2F0ZVRvUHJldiwgbmF2aWdhdGVUb05leHQsIG5hdmlnYXRlVG9GaXJzdCwgbmF2aWdhdGVUb0xhc3QgfSk7XHJcbiAgICBjb25zdCB1c2VMaXN0TmF2aWdhdGlvbkNoaWxkID0gdXNlQ2FsbGJhY2soKGluZm8pID0+IHtcclxuICAgICAgICBjb25zdCB7IHVzZVR5cGVhaGVhZE5hdmlnYXRpb25DaGlsZFByb3BzIH0gPSB1c2VUeXBlYWhlYWROYXZpZ2F0aW9uQ2hpbGQoaW5mbyk7XHJcbiAgICAgICAgY29uc3QgeyB1c2VMaW5lYXJOYXZpZ2F0aW9uQ2hpbGRQcm9wcyB9ID0gdXNlTGluZWFyTmF2aWdhdGlvbkNoaWxkKCk7XHJcbiAgICAgICAgY29uc3QgeyB1c2VSb3ZpbmdUYWJJbmRleENoaWxkUHJvcHMsIHVzZVJvdmluZ1RhYkluZGV4U2libGluZ1Byb3BzLCB0YWJiYWJsZSB9ID0gdXNlUm92aW5nVGFiSW5kZXhDaGlsZChpbmZvKTtcclxuICAgICAgICBjb25zdCB1c2VMaXN0TmF2aWdhdGlvbkNoaWxkUHJvcHMgPSBmdW5jdGlvbiAoeyAuLi5wcm9wcyB9KSB7XHJcbiAgICAgICAgICAgIHJldHVybiB1c2VNZXJnZWRQcm9wcygpKHVzZVJvdmluZ1RhYkluZGV4Q2hpbGRQcm9wcyh1c2VUeXBlYWhlYWROYXZpZ2F0aW9uQ2hpbGRQcm9wcyh1c2VMaW5lYXJOYXZpZ2F0aW9uQ2hpbGRQcm9wcyh7IG9uQ2xpY2s6IHJvdmVUb1NlbGYgfSkpKSwgcHJvcHMpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgY29uc3Qgcm92ZVRvU2VsZiA9IHVzZUNhbGxiYWNrKCgpID0+IHsgbmF2aWdhdGVUb0luZGV4KGluZm8uaW5kZXgpOyB9LCBbXSk7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgdXNlTGlzdE5hdmlnYXRpb25DaGlsZFByb3BzLFxyXG4gICAgICAgICAgICB1c2VMaXN0TmF2aWdhdGlvblNpYmxpbmdQcm9wczogdXNlUm92aW5nVGFiSW5kZXhTaWJsaW5nUHJvcHMsXHJcbiAgICAgICAgICAgIHRhYmJhYmxlXHJcbiAgICAgICAgfTtcclxuICAgIH0sIFt1c2VUeXBlYWhlYWROYXZpZ2F0aW9uQ2hpbGQsIHVzZUxpbmVhck5hdmlnYXRpb25DaGlsZCwgdXNlUm92aW5nVGFiSW5kZXhDaGlsZCwgbmF2aWdhdGVUb0luZGV4XSk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHVzZUxpc3ROYXZpZ2F0aW9uQ2hpbGQsXHJcbiAgICAgICAgY3VycmVudFR5cGVhaGVhZCxcclxuICAgICAgICBpbnZhbGlkVHlwZWFoZWFkLFxyXG4gICAgICAgIHRhYmJhYmxlSW5kZXgsXHJcbiAgICAgICAgc2V0VGFiYmFibGVJbmRleCxcclxuICAgICAgICBtYW5hZ2VkQ2hpbGRyZW4sXHJcbiAgICAgICAgaW5kaWNlc0J5RWxlbWVudCxcclxuICAgICAgICBuYXZpZ2F0ZVRvSW5kZXgsXHJcbiAgICAgICAgbmF2aWdhdGVUb05leHQsXHJcbiAgICAgICAgbmF2aWdhdGVUb1ByZXYsXHJcbiAgICAgICAgbmF2aWdhdGVUb0ZpcnN0LFxyXG4gICAgICAgIG5hdmlnYXRlVG9MYXN0LFxyXG4gICAgICAgIGZvY3VzQ3VycmVudCxcclxuICAgICAgICAuLi5yZXN0XHJcbiAgICB9O1xyXG59XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZS1saXN0LW5hdmlnYXRpb24uanMubWFwIiwiLyohXG4qIHRhYmJhYmxlIDUuMi4wXG4qIEBsaWNlbnNlIE1JVCwgaHR0cHM6Ly9naXRodWIuY29tL2ZvY3VzLXRyYXAvdGFiYmFibGUvYmxvYi9tYXN0ZXIvTElDRU5TRVxuKi9cbnZhciBjYW5kaWRhdGVTZWxlY3RvcnMgPSBbJ2lucHV0JywgJ3NlbGVjdCcsICd0ZXh0YXJlYScsICdhW2hyZWZdJywgJ2J1dHRvbicsICdbdGFiaW5kZXhdJywgJ2F1ZGlvW2NvbnRyb2xzXScsICd2aWRlb1tjb250cm9sc10nLCAnW2NvbnRlbnRlZGl0YWJsZV06bm90KFtjb250ZW50ZWRpdGFibGU9XCJmYWxzZVwiXSknLCAnZGV0YWlscz5zdW1tYXJ5OmZpcnN0LW9mLXR5cGUnLCAnZGV0YWlscyddO1xudmFyIGNhbmRpZGF0ZVNlbGVjdG9yID0gLyogI19fUFVSRV9fICovY2FuZGlkYXRlU2VsZWN0b3JzLmpvaW4oJywnKTtcbnZhciBtYXRjaGVzID0gdHlwZW9mIEVsZW1lbnQgPT09ICd1bmRlZmluZWQnID8gZnVuY3Rpb24gKCkge30gOiBFbGVtZW50LnByb3RvdHlwZS5tYXRjaGVzIHx8IEVsZW1lbnQucHJvdG90eXBlLm1zTWF0Y2hlc1NlbGVjdG9yIHx8IEVsZW1lbnQucHJvdG90eXBlLndlYmtpdE1hdGNoZXNTZWxlY3RvcjtcblxudmFyIGdldENhbmRpZGF0ZXMgPSBmdW5jdGlvbiBnZXRDYW5kaWRhdGVzKGVsLCBpbmNsdWRlQ29udGFpbmVyLCBmaWx0ZXIpIHtcbiAgdmFyIGNhbmRpZGF0ZXMgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuYXBwbHkoZWwucXVlcnlTZWxlY3RvckFsbChjYW5kaWRhdGVTZWxlY3RvcikpO1xuXG4gIGlmIChpbmNsdWRlQ29udGFpbmVyICYmIG1hdGNoZXMuY2FsbChlbCwgY2FuZGlkYXRlU2VsZWN0b3IpKSB7XG4gICAgY2FuZGlkYXRlcy51bnNoaWZ0KGVsKTtcbiAgfVxuXG4gIGNhbmRpZGF0ZXMgPSBjYW5kaWRhdGVzLmZpbHRlcihmaWx0ZXIpO1xuICByZXR1cm4gY2FuZGlkYXRlcztcbn07XG5cbnZhciBpc0NvbnRlbnRFZGl0YWJsZSA9IGZ1bmN0aW9uIGlzQ29udGVudEVkaXRhYmxlKG5vZGUpIHtcbiAgcmV0dXJuIG5vZGUuY29udGVudEVkaXRhYmxlID09PSAndHJ1ZSc7XG59O1xuXG52YXIgZ2V0VGFiaW5kZXggPSBmdW5jdGlvbiBnZXRUYWJpbmRleChub2RlKSB7XG4gIHZhciB0YWJpbmRleEF0dHIgPSBwYXJzZUludChub2RlLmdldEF0dHJpYnV0ZSgndGFiaW5kZXgnKSwgMTApO1xuXG4gIGlmICghaXNOYU4odGFiaW5kZXhBdHRyKSkge1xuICAgIHJldHVybiB0YWJpbmRleEF0dHI7XG4gIH0gLy8gQnJvd3NlcnMgZG8gbm90IHJldHVybiBgdGFiSW5kZXhgIGNvcnJlY3RseSBmb3IgY29udGVudEVkaXRhYmxlIG5vZGVzO1xuICAvLyBzbyBpZiB0aGV5IGRvbid0IGhhdmUgYSB0YWJpbmRleCBhdHRyaWJ1dGUgc3BlY2lmaWNhbGx5IHNldCwgYXNzdW1lIGl0J3MgMC5cblxuXG4gIGlmIChpc0NvbnRlbnRFZGl0YWJsZShub2RlKSkge1xuICAgIHJldHVybiAwO1xuICB9IC8vIGluIENocm9tZSwgPGRldGFpbHMvPiwgPGF1ZGlvIGNvbnRyb2xzLz4gYW5kIDx2aWRlbyBjb250cm9scy8+IGVsZW1lbnRzIGdldCBhIGRlZmF1bHRcbiAgLy8gIGB0YWJJbmRleGAgb2YgLTEgd2hlbiB0aGUgJ3RhYmluZGV4JyBhdHRyaWJ1dGUgaXNuJ3Qgc3BlY2lmaWVkIGluIHRoZSBET00sXG4gIC8vICB5ZXQgdGhleSBhcmUgc3RpbGwgcGFydCBvZiB0aGUgcmVndWxhciB0YWIgb3JkZXI7IGluIEZGLCB0aGV5IGdldCBhIGRlZmF1bHRcbiAgLy8gIGB0YWJJbmRleGAgb2YgMDsgc2luY2UgQ2hyb21lIHN0aWxsIHB1dHMgdGhvc2UgZWxlbWVudHMgaW4gdGhlIHJlZ3VsYXIgdGFiXG4gIC8vICBvcmRlciwgY29uc2lkZXIgdGhlaXIgdGFiIGluZGV4IHRvIGJlIDAuXG5cblxuICBpZiAoKG5vZGUubm9kZU5hbWUgPT09ICdBVURJTycgfHwgbm9kZS5ub2RlTmFtZSA9PT0gJ1ZJREVPJyB8fCBub2RlLm5vZGVOYW1lID09PSAnREVUQUlMUycpICYmIG5vZGUuZ2V0QXR0cmlidXRlKCd0YWJpbmRleCcpID09PSBudWxsKSB7XG4gICAgcmV0dXJuIDA7XG4gIH1cblxuICByZXR1cm4gbm9kZS50YWJJbmRleDtcbn07XG5cbnZhciBzb3J0T3JkZXJlZFRhYmJhYmxlcyA9IGZ1bmN0aW9uIHNvcnRPcmRlcmVkVGFiYmFibGVzKGEsIGIpIHtcbiAgcmV0dXJuIGEudGFiSW5kZXggPT09IGIudGFiSW5kZXggPyBhLmRvY3VtZW50T3JkZXIgLSBiLmRvY3VtZW50T3JkZXIgOiBhLnRhYkluZGV4IC0gYi50YWJJbmRleDtcbn07XG5cbnZhciBpc0lucHV0ID0gZnVuY3Rpb24gaXNJbnB1dChub2RlKSB7XG4gIHJldHVybiBub2RlLnRhZ05hbWUgPT09ICdJTlBVVCc7XG59O1xuXG52YXIgaXNIaWRkZW5JbnB1dCA9IGZ1bmN0aW9uIGlzSGlkZGVuSW5wdXQobm9kZSkge1xuICByZXR1cm4gaXNJbnB1dChub2RlKSAmJiBub2RlLnR5cGUgPT09ICdoaWRkZW4nO1xufTtcblxudmFyIGlzRGV0YWlsc1dpdGhTdW1tYXJ5ID0gZnVuY3Rpb24gaXNEZXRhaWxzV2l0aFN1bW1hcnkobm9kZSkge1xuICB2YXIgciA9IG5vZGUudGFnTmFtZSA9PT0gJ0RFVEFJTFMnICYmIEFycmF5LnByb3RvdHlwZS5zbGljZS5hcHBseShub2RlLmNoaWxkcmVuKS5zb21lKGZ1bmN0aW9uIChjaGlsZCkge1xuICAgIHJldHVybiBjaGlsZC50YWdOYW1lID09PSAnU1VNTUFSWSc7XG4gIH0pO1xuICByZXR1cm4gcjtcbn07XG5cbnZhciBnZXRDaGVja2VkUmFkaW8gPSBmdW5jdGlvbiBnZXRDaGVja2VkUmFkaW8obm9kZXMsIGZvcm0pIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBub2Rlcy5sZW5ndGg7IGkrKykge1xuICAgIGlmIChub2Rlc1tpXS5jaGVja2VkICYmIG5vZGVzW2ldLmZvcm0gPT09IGZvcm0pIHtcbiAgICAgIHJldHVybiBub2Rlc1tpXTtcbiAgICB9XG4gIH1cbn07XG5cbnZhciBpc1RhYmJhYmxlUmFkaW8gPSBmdW5jdGlvbiBpc1RhYmJhYmxlUmFkaW8obm9kZSkge1xuICBpZiAoIW5vZGUubmFtZSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgdmFyIHJhZGlvU2NvcGUgPSBub2RlLmZvcm0gfHwgbm9kZS5vd25lckRvY3VtZW50O1xuXG4gIHZhciBxdWVyeVJhZGlvcyA9IGZ1bmN0aW9uIHF1ZXJ5UmFkaW9zKG5hbWUpIHtcbiAgICByZXR1cm4gcmFkaW9TY29wZS5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dFt0eXBlPVwicmFkaW9cIl1bbmFtZT1cIicgKyBuYW1lICsgJ1wiXScpO1xuICB9O1xuXG4gIHZhciByYWRpb1NldDtcblxuICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIHdpbmRvdy5DU1MgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiB3aW5kb3cuQ1NTLmVzY2FwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJhZGlvU2V0ID0gcXVlcnlSYWRpb3Mod2luZG93LkNTUy5lc2NhcGUobm9kZS5uYW1lKSk7XG4gIH0gZWxzZSB7XG4gICAgdHJ5IHtcbiAgICAgIHJhZGlvU2V0ID0gcXVlcnlSYWRpb3Mobm9kZS5uYW1lKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgICBjb25zb2xlLmVycm9yKCdMb29rcyBsaWtlIHlvdSBoYXZlIGEgcmFkaW8gYnV0dG9uIHdpdGggYSBuYW1lIGF0dHJpYnV0ZSBjb250YWluaW5nIGludmFsaWQgQ1NTIHNlbGVjdG9yIGNoYXJhY3RlcnMgYW5kIG5lZWQgdGhlIENTUy5lc2NhcGUgcG9seWZpbGw6ICVzJywgZXJyLm1lc3NhZ2UpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHZhciBjaGVja2VkID0gZ2V0Q2hlY2tlZFJhZGlvKHJhZGlvU2V0LCBub2RlLmZvcm0pO1xuICByZXR1cm4gIWNoZWNrZWQgfHwgY2hlY2tlZCA9PT0gbm9kZTtcbn07XG5cbnZhciBpc1JhZGlvID0gZnVuY3Rpb24gaXNSYWRpbyhub2RlKSB7XG4gIHJldHVybiBpc0lucHV0KG5vZGUpICYmIG5vZGUudHlwZSA9PT0gJ3JhZGlvJztcbn07XG5cbnZhciBpc05vblRhYmJhYmxlUmFkaW8gPSBmdW5jdGlvbiBpc05vblRhYmJhYmxlUmFkaW8obm9kZSkge1xuICByZXR1cm4gaXNSYWRpbyhub2RlKSAmJiAhaXNUYWJiYWJsZVJhZGlvKG5vZGUpO1xufTtcblxudmFyIGlzSGlkZGVuID0gZnVuY3Rpb24gaXNIaWRkZW4obm9kZSwgZGlzcGxheUNoZWNrKSB7XG4gIGlmIChnZXRDb21wdXRlZFN0eWxlKG5vZGUpLnZpc2liaWxpdHkgPT09ICdoaWRkZW4nKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICB2YXIgaXNEaXJlY3RTdW1tYXJ5ID0gbWF0Y2hlcy5jYWxsKG5vZGUsICdkZXRhaWxzPnN1bW1hcnk6Zmlyc3Qtb2YtdHlwZScpO1xuICB2YXIgbm9kZVVuZGVyRGV0YWlscyA9IGlzRGlyZWN0U3VtbWFyeSA/IG5vZGUucGFyZW50RWxlbWVudCA6IG5vZGU7XG5cbiAgaWYgKG1hdGNoZXMuY2FsbChub2RlVW5kZXJEZXRhaWxzLCAnZGV0YWlsczpub3QoW29wZW5dKSAqJykpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGlmICghZGlzcGxheUNoZWNrIHx8IGRpc3BsYXlDaGVjayA9PT0gJ2Z1bGwnKSB7XG4gICAgd2hpbGUgKG5vZGUpIHtcbiAgICAgIGlmIChnZXRDb21wdXRlZFN0eWxlKG5vZGUpLmRpc3BsYXkgPT09ICdub25lJykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgbm9kZSA9IG5vZGUucGFyZW50RWxlbWVudDtcbiAgICB9XG4gIH0gZWxzZSBpZiAoZGlzcGxheUNoZWNrID09PSAnbm9uLXplcm8tYXJlYScpIHtcbiAgICB2YXIgX25vZGUkZ2V0Qm91bmRpbmdDbGllID0gbm9kZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxcbiAgICAgICAgd2lkdGggPSBfbm9kZSRnZXRCb3VuZGluZ0NsaWUud2lkdGgsXG4gICAgICAgIGhlaWdodCA9IF9ub2RlJGdldEJvdW5kaW5nQ2xpZS5oZWlnaHQ7XG5cbiAgICByZXR1cm4gd2lkdGggPT09IDAgJiYgaGVpZ2h0ID09PSAwO1xuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufTtcblxudmFyIGlzTm9kZU1hdGNoaW5nU2VsZWN0b3JGb2N1c2FibGUgPSBmdW5jdGlvbiBpc05vZGVNYXRjaGluZ1NlbGVjdG9yRm9jdXNhYmxlKG9wdGlvbnMsIG5vZGUpIHtcbiAgaWYgKG5vZGUuZGlzYWJsZWQgfHwgaXNIaWRkZW5JbnB1dChub2RlKSB8fCBpc0hpZGRlbihub2RlLCBvcHRpb25zLmRpc3BsYXlDaGVjaykgfHxcbiAgLyogRm9yIGEgZGV0YWlscyBlbGVtZW50IHdpdGggYSBzdW1tYXJ5LCB0aGUgc3VtbWFyeSBlbGVtZW50IGdldHMgdGhlIGZvY3VzZWQgICovXG4gIGlzRGV0YWlsc1dpdGhTdW1tYXJ5KG5vZGUpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59O1xuXG52YXIgaXNOb2RlTWF0Y2hpbmdTZWxlY3RvclRhYmJhYmxlID0gZnVuY3Rpb24gaXNOb2RlTWF0Y2hpbmdTZWxlY3RvclRhYmJhYmxlKG9wdGlvbnMsIG5vZGUpIHtcbiAgaWYgKCFpc05vZGVNYXRjaGluZ1NlbGVjdG9yRm9jdXNhYmxlKG9wdGlvbnMsIG5vZGUpIHx8IGlzTm9uVGFiYmFibGVSYWRpbyhub2RlKSB8fCBnZXRUYWJpbmRleChub2RlKSA8IDApIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn07XG5cbnZhciB0YWJiYWJsZSA9IGZ1bmN0aW9uIHRhYmJhYmxlKGVsLCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICB2YXIgcmVndWxhclRhYmJhYmxlcyA9IFtdO1xuICB2YXIgb3JkZXJlZFRhYmJhYmxlcyA9IFtdO1xuICB2YXIgY2FuZGlkYXRlcyA9IGdldENhbmRpZGF0ZXMoZWwsIG9wdGlvbnMuaW5jbHVkZUNvbnRhaW5lciwgaXNOb2RlTWF0Y2hpbmdTZWxlY3RvclRhYmJhYmxlLmJpbmQobnVsbCwgb3B0aW9ucykpO1xuICBjYW5kaWRhdGVzLmZvckVhY2goZnVuY3Rpb24gKGNhbmRpZGF0ZSwgaSkge1xuICAgIHZhciBjYW5kaWRhdGVUYWJpbmRleCA9IGdldFRhYmluZGV4KGNhbmRpZGF0ZSk7XG5cbiAgICBpZiAoY2FuZGlkYXRlVGFiaW5kZXggPT09IDApIHtcbiAgICAgIHJlZ3VsYXJUYWJiYWJsZXMucHVzaChjYW5kaWRhdGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBvcmRlcmVkVGFiYmFibGVzLnB1c2goe1xuICAgICAgICBkb2N1bWVudE9yZGVyOiBpLFxuICAgICAgICB0YWJJbmRleDogY2FuZGlkYXRlVGFiaW5kZXgsXG4gICAgICAgIG5vZGU6IGNhbmRpZGF0ZVxuICAgICAgfSk7XG4gICAgfVxuICB9KTtcbiAgdmFyIHRhYmJhYmxlTm9kZXMgPSBvcmRlcmVkVGFiYmFibGVzLnNvcnQoc29ydE9yZGVyZWRUYWJiYWJsZXMpLm1hcChmdW5jdGlvbiAoYSkge1xuICAgIHJldHVybiBhLm5vZGU7XG4gIH0pLmNvbmNhdChyZWd1bGFyVGFiYmFibGVzKTtcbiAgcmV0dXJuIHRhYmJhYmxlTm9kZXM7XG59O1xuXG52YXIgZm9jdXNhYmxlID0gZnVuY3Rpb24gZm9jdXNhYmxlKGVsLCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICB2YXIgY2FuZGlkYXRlcyA9IGdldENhbmRpZGF0ZXMoZWwsIG9wdGlvbnMuaW5jbHVkZUNvbnRhaW5lciwgaXNOb2RlTWF0Y2hpbmdTZWxlY3RvckZvY3VzYWJsZS5iaW5kKG51bGwsIG9wdGlvbnMpKTtcbiAgcmV0dXJuIGNhbmRpZGF0ZXM7XG59O1xuXG52YXIgaXNUYWJiYWJsZSA9IGZ1bmN0aW9uIGlzVGFiYmFibGUobm9kZSwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuICBpZiAoIW5vZGUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ05vIG5vZGUgcHJvdmlkZWQnKTtcbiAgfVxuXG4gIGlmIChtYXRjaGVzLmNhbGwobm9kZSwgY2FuZGlkYXRlU2VsZWN0b3IpID09PSBmYWxzZSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiBpc05vZGVNYXRjaGluZ1NlbGVjdG9yVGFiYmFibGUob3B0aW9ucywgbm9kZSk7XG59O1xuXG52YXIgZm9jdXNhYmxlQ2FuZGlkYXRlU2VsZWN0b3IgPSAvKiAjX19QVVJFX18gKi9jYW5kaWRhdGVTZWxlY3RvcnMuY29uY2F0KCdpZnJhbWUnKS5qb2luKCcsJyk7XG5cbnZhciBpc0ZvY3VzYWJsZSA9IGZ1bmN0aW9uIGlzRm9jdXNhYmxlKG5vZGUsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cbiAgaWYgKCFub2RlKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdObyBub2RlIHByb3ZpZGVkJyk7XG4gIH1cblxuICBpZiAobWF0Y2hlcy5jYWxsKG5vZGUsIGZvY3VzYWJsZUNhbmRpZGF0ZVNlbGVjdG9yKSA9PT0gZmFsc2UpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICByZXR1cm4gaXNOb2RlTWF0Y2hpbmdTZWxlY3RvckZvY3VzYWJsZShvcHRpb25zLCBub2RlKTtcbn07XG5cbmV4cG9ydCB7IGZvY3VzYWJsZSwgaXNGb2N1c2FibGUsIGlzVGFiYmFibGUsIHRhYmJhYmxlIH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5lc20uanMubWFwXG4iLCIoZnVuY3Rpb24gKGdsb2JhbCwgZmFjdG9yeSkge1xuICB0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgPyBmYWN0b3J5KCkgOlxuICB0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQgPyBkZWZpbmUoJ2luZXJ0JywgZmFjdG9yeSkgOlxuICAoZmFjdG9yeSgpKTtcbn0odGhpcywgKGZ1bmN0aW9uICgpIHsgJ3VzZSBzdHJpY3QnO1xuXG4gIHZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbiAgZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuICAvKipcbiAgICogVGhpcyB3b3JrIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBXM0MgU29mdHdhcmUgYW5kIERvY3VtZW50IExpY2Vuc2VcbiAgICogKGh0dHA6Ly93d3cudzMub3JnL0NvbnNvcnRpdW0vTGVnYWwvMjAxNS9jb3B5cmlnaHQtc29mdHdhcmUtYW5kLWRvY3VtZW50KS5cbiAgICovXG5cbiAgKGZ1bmN0aW9uICgpIHtcbiAgICAvLyBSZXR1cm4gZWFybHkgaWYgd2UncmUgbm90IHJ1bm5pbmcgaW5zaWRlIG9mIHRoZSBicm93c2VyLlxuICAgIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIENvbnZlbmllbmNlIGZ1bmN0aW9uIGZvciBjb252ZXJ0aW5nIE5vZGVMaXN0cy5cbiAgICAvKiogQHR5cGUge3R5cGVvZiBBcnJheS5wcm90b3R5cGUuc2xpY2V9ICovXG4gICAgdmFyIHNsaWNlID0gQXJyYXkucHJvdG90eXBlLnNsaWNlO1xuXG4gICAgLyoqXG4gICAgICogSUUgaGFzIGEgbm9uLXN0YW5kYXJkIG5hbWUgZm9yIFwibWF0Y2hlc1wiLlxuICAgICAqIEB0eXBlIHt0eXBlb2YgRWxlbWVudC5wcm90b3R5cGUubWF0Y2hlc31cbiAgICAgKi9cbiAgICB2YXIgbWF0Y2hlcyA9IEVsZW1lbnQucHJvdG90eXBlLm1hdGNoZXMgfHwgRWxlbWVudC5wcm90b3R5cGUubXNNYXRjaGVzU2VsZWN0b3I7XG5cbiAgICAvKiogQHR5cGUge3N0cmluZ30gKi9cbiAgICB2YXIgX2ZvY3VzYWJsZUVsZW1lbnRzU3RyaW5nID0gWydhW2hyZWZdJywgJ2FyZWFbaHJlZl0nLCAnaW5wdXQ6bm90KFtkaXNhYmxlZF0pJywgJ3NlbGVjdDpub3QoW2Rpc2FibGVkXSknLCAndGV4dGFyZWE6bm90KFtkaXNhYmxlZF0pJywgJ2J1dHRvbjpub3QoW2Rpc2FibGVkXSknLCAnZGV0YWlscycsICdzdW1tYXJ5JywgJ2lmcmFtZScsICdvYmplY3QnLCAnZW1iZWQnLCAnW2NvbnRlbnRlZGl0YWJsZV0nXS5qb2luKCcsJyk7XG5cbiAgICAvKipcbiAgICAgKiBgSW5lcnRSb290YCBtYW5hZ2VzIGEgc2luZ2xlIGluZXJ0IHN1YnRyZWUsIGkuZS4gYSBET00gc3VidHJlZSB3aG9zZSByb290IGVsZW1lbnQgaGFzIGFuIGBpbmVydGBcbiAgICAgKiBhdHRyaWJ1dGUuXG4gICAgICpcbiAgICAgKiBJdHMgbWFpbiBmdW5jdGlvbnMgYXJlOlxuICAgICAqXG4gICAgICogLSB0byBjcmVhdGUgYW5kIG1haW50YWluIGEgc2V0IG9mIG1hbmFnZWQgYEluZXJ0Tm9kZWBzLCBpbmNsdWRpbmcgd2hlbiBtdXRhdGlvbnMgb2NjdXIgaW4gdGhlXG4gICAgICogICBzdWJ0cmVlLiBUaGUgYG1ha2VTdWJ0cmVlVW5mb2N1c2FibGUoKWAgbWV0aG9kIGhhbmRsZXMgY29sbGVjdGluZyBgSW5lcnROb2RlYHMgdmlhIHJlZ2lzdGVyaW5nXG4gICAgICogICBlYWNoIGZvY3VzYWJsZSBub2RlIGluIHRoZSBzdWJ0cmVlIHdpdGggdGhlIHNpbmdsZXRvbiBgSW5lcnRNYW5hZ2VyYCB3aGljaCBtYW5hZ2VzIGFsbCBrbm93blxuICAgICAqICAgZm9jdXNhYmxlIG5vZGVzIHdpdGhpbiBpbmVydCBzdWJ0cmVlcy4gYEluZXJ0TWFuYWdlcmAgZW5zdXJlcyB0aGF0IGEgc2luZ2xlIGBJbmVydE5vZGVgXG4gICAgICogICBpbnN0YW5jZSBleGlzdHMgZm9yIGVhY2ggZm9jdXNhYmxlIG5vZGUgd2hpY2ggaGFzIGF0IGxlYXN0IG9uZSBpbmVydCByb290IGFzIGFuIGFuY2VzdG9yLlxuICAgICAqXG4gICAgICogLSB0byBub3RpZnkgYWxsIG1hbmFnZWQgYEluZXJ0Tm9kZWBzIHdoZW4gdGhpcyBzdWJ0cmVlIHN0b3BzIGJlaW5nIGluZXJ0IChpLmUuIHdoZW4gdGhlIGBpbmVydGBcbiAgICAgKiAgIGF0dHJpYnV0ZSBpcyByZW1vdmVkIGZyb20gdGhlIHJvb3Qgbm9kZSkuIFRoaXMgaXMgaGFuZGxlZCBpbiB0aGUgZGVzdHJ1Y3Rvciwgd2hpY2ggY2FsbHMgdGhlXG4gICAgICogICBgZGVyZWdpc3RlcmAgbWV0aG9kIG9uIGBJbmVydE1hbmFnZXJgIGZvciBlYWNoIG1hbmFnZWQgaW5lcnQgbm9kZS5cbiAgICAgKi9cblxuICAgIHZhciBJbmVydFJvb3QgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAvKipcbiAgICAgICAqIEBwYXJhbSB7IUVsZW1lbnR9IHJvb3RFbGVtZW50IFRoZSBFbGVtZW50IGF0IHRoZSByb290IG9mIHRoZSBpbmVydCBzdWJ0cmVlLlxuICAgICAgICogQHBhcmFtIHshSW5lcnRNYW5hZ2VyfSBpbmVydE1hbmFnZXIgVGhlIGdsb2JhbCBzaW5nbGV0b24gSW5lcnRNYW5hZ2VyIG9iamVjdC5cbiAgICAgICAqL1xuICAgICAgZnVuY3Rpb24gSW5lcnRSb290KHJvb3RFbGVtZW50LCBpbmVydE1hbmFnZXIpIHtcbiAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEluZXJ0Um9vdCk7XG5cbiAgICAgICAgLyoqIEB0eXBlIHshSW5lcnRNYW5hZ2VyfSAqL1xuICAgICAgICB0aGlzLl9pbmVydE1hbmFnZXIgPSBpbmVydE1hbmFnZXI7XG5cbiAgICAgICAgLyoqIEB0eXBlIHshRWxlbWVudH0gKi9cbiAgICAgICAgdGhpcy5fcm9vdEVsZW1lbnQgPSByb290RWxlbWVudDtcblxuICAgICAgICAvKipcbiAgICAgICAgICogQHR5cGUgeyFTZXQ8IUluZXJ0Tm9kZT59XG4gICAgICAgICAqIEFsbCBtYW5hZ2VkIGZvY3VzYWJsZSBub2RlcyBpbiB0aGlzIEluZXJ0Um9vdCdzIHN1YnRyZWUuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLl9tYW5hZ2VkTm9kZXMgPSBuZXcgU2V0KCk7XG5cbiAgICAgICAgLy8gTWFrZSB0aGUgc3VidHJlZSBoaWRkZW4gZnJvbSBhc3Npc3RpdmUgdGVjaG5vbG9neVxuICAgICAgICBpZiAodGhpcy5fcm9vdEVsZW1lbnQuaGFzQXR0cmlidXRlKCdhcmlhLWhpZGRlbicpKSB7XG4gICAgICAgICAgLyoqIEB0eXBlIHs/c3RyaW5nfSAqL1xuICAgICAgICAgIHRoaXMuX3NhdmVkQXJpYUhpZGRlbiA9IHRoaXMuX3Jvb3RFbGVtZW50LmdldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLl9zYXZlZEFyaWFIaWRkZW4gPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX3Jvb3RFbGVtZW50LnNldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nLCAndHJ1ZScpO1xuXG4gICAgICAgIC8vIE1ha2UgYWxsIGZvY3VzYWJsZSBlbGVtZW50cyBpbiB0aGUgc3VidHJlZSB1bmZvY3VzYWJsZSBhbmQgYWRkIHRoZW0gdG8gX21hbmFnZWROb2Rlc1xuICAgICAgICB0aGlzLl9tYWtlU3VidHJlZVVuZm9jdXNhYmxlKHRoaXMuX3Jvb3RFbGVtZW50KTtcblxuICAgICAgICAvLyBXYXRjaCBmb3I6XG4gICAgICAgIC8vIC0gYW55IGFkZGl0aW9ucyBpbiB0aGUgc3VidHJlZTogbWFrZSB0aGVtIHVuZm9jdXNhYmxlIHRvb1xuICAgICAgICAvLyAtIGFueSByZW1vdmFscyBmcm9tIHRoZSBzdWJ0cmVlOiByZW1vdmUgdGhlbSBmcm9tIHRoaXMgaW5lcnQgcm9vdCdzIG1hbmFnZWQgbm9kZXNcbiAgICAgICAgLy8gLSBhdHRyaWJ1dGUgY2hhbmdlczogaWYgYHRhYmluZGV4YCBpcyBhZGRlZCwgb3IgcmVtb3ZlZCBmcm9tIGFuIGludHJpbnNpY2FsbHkgZm9jdXNhYmxlXG4gICAgICAgIC8vICAgZWxlbWVudCwgbWFrZSB0aGF0IG5vZGUgYSBtYW5hZ2VkIG5vZGUuXG4gICAgICAgIHRoaXMuX29ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIodGhpcy5fb25NdXRhdGlvbi5iaW5kKHRoaXMpKTtcbiAgICAgICAgdGhpcy5fb2JzZXJ2ZXIub2JzZXJ2ZSh0aGlzLl9yb290RWxlbWVudCwgeyBhdHRyaWJ1dGVzOiB0cnVlLCBjaGlsZExpc3Q6IHRydWUsIHN1YnRyZWU6IHRydWUgfSk7XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogQ2FsbCB0aGlzIHdoZW5ldmVyIHRoaXMgb2JqZWN0IGlzIGFib3V0IHRvIGJlY29tZSBvYnNvbGV0ZS4gIFRoaXMgdW53aW5kcyBhbGwgb2YgdGhlIHN0YXRlXG4gICAgICAgKiBzdG9yZWQgaW4gdGhpcyBvYmplY3QgYW5kIHVwZGF0ZXMgdGhlIHN0YXRlIG9mIGFsbCBvZiB0aGUgbWFuYWdlZCBub2Rlcy5cbiAgICAgICAqL1xuXG5cbiAgICAgIF9jcmVhdGVDbGFzcyhJbmVydFJvb3QsIFt7XG4gICAgICAgIGtleTogJ2Rlc3RydWN0b3InLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZGVzdHJ1Y3RvcigpIHtcbiAgICAgICAgICB0aGlzLl9vYnNlcnZlci5kaXNjb25uZWN0KCk7XG5cbiAgICAgICAgICBpZiAodGhpcy5fcm9vdEVsZW1lbnQpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLl9zYXZlZEFyaWFIaWRkZW4gIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgdGhpcy5fcm9vdEVsZW1lbnQuc2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicsIHRoaXMuX3NhdmVkQXJpYUhpZGRlbik7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB0aGlzLl9yb290RWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdGhpcy5fbWFuYWdlZE5vZGVzLmZvckVhY2goZnVuY3Rpb24gKGluZXJ0Tm9kZSkge1xuICAgICAgICAgICAgdGhpcy5fdW5tYW5hZ2VOb2RlKGluZXJ0Tm9kZS5ub2RlKTtcbiAgICAgICAgICB9LCB0aGlzKTtcblxuICAgICAgICAgIC8vIE5vdGUgd2UgY2FzdCB0aGUgbnVsbHMgdG8gdGhlIEFOWSB0eXBlIGhlcmUgYmVjYXVzZTpcbiAgICAgICAgICAvLyAxKSBXZSB3YW50IHRoZSBjbGFzcyBwcm9wZXJ0aWVzIHRvIGJlIGRlY2xhcmVkIGFzIG5vbi1udWxsLCBvciBlbHNlIHdlXG4gICAgICAgICAgLy8gICAgbmVlZCBldmVuIG1vcmUgY2FzdHMgdGhyb3VnaG91dCB0aGlzIGNvZGUuIEFsbCBiZXRzIGFyZSBvZmYgaWYgYW5cbiAgICAgICAgICAvLyAgICBpbnN0YW5jZSBoYXMgYmVlbiBkZXN0cm95ZWQgYW5kIGEgbWV0aG9kIGlzIGNhbGxlZC5cbiAgICAgICAgICAvLyAyKSBXZSBkb24ndCB3YW50IHRvIGNhc3QgXCJ0aGlzXCIsIGJlY2F1c2Ugd2Ugd2FudCB0eXBlLWF3YXJlIG9wdGltaXphdGlvbnNcbiAgICAgICAgICAvLyAgICB0byBrbm93IHdoaWNoIHByb3BlcnRpZXMgd2UncmUgc2V0dGluZy5cbiAgICAgICAgICB0aGlzLl9vYnNlcnZlciA9IC8qKiBAdHlwZSB7P30gKi9udWxsO1xuICAgICAgICAgIHRoaXMuX3Jvb3RFbGVtZW50ID0gLyoqIEB0eXBlIHs/fSAqL251bGw7XG4gICAgICAgICAgdGhpcy5fbWFuYWdlZE5vZGVzID0gLyoqIEB0eXBlIHs/fSAqL251bGw7XG4gICAgICAgICAgdGhpcy5faW5lcnRNYW5hZ2VyID0gLyoqIEB0eXBlIHs/fSAqL251bGw7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogQHJldHVybiB7IVNldDwhSW5lcnROb2RlPn0gQSBjb3B5IG9mIHRoaXMgSW5lcnRSb290J3MgbWFuYWdlZCBub2RlcyBzZXQuXG4gICAgICAgICAqL1xuXG4gICAgICB9LCB7XG4gICAgICAgIGtleTogJ19tYWtlU3VidHJlZVVuZm9jdXNhYmxlJyxcblxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcGFyYW0geyFOb2RlfSBzdGFydE5vZGVcbiAgICAgICAgICovXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBfbWFrZVN1YnRyZWVVbmZvY3VzYWJsZShzdGFydE5vZGUpIHtcbiAgICAgICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgICAgIGNvbXBvc2VkVHJlZVdhbGsoc3RhcnROb2RlLCBmdW5jdGlvbiAobm9kZSkge1xuICAgICAgICAgICAgcmV0dXJuIF90aGlzMi5fdmlzaXROb2RlKG5vZGUpO1xuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgdmFyIGFjdGl2ZUVsZW1lbnQgPSBkb2N1bWVudC5hY3RpdmVFbGVtZW50O1xuXG4gICAgICAgICAgaWYgKCFkb2N1bWVudC5ib2R5LmNvbnRhaW5zKHN0YXJ0Tm9kZSkpIHtcbiAgICAgICAgICAgIC8vIHN0YXJ0Tm9kZSBtYXkgYmUgaW4gc2hhZG93IERPTSwgc28gZmluZCBpdHMgbmVhcmVzdCBzaGFkb3dSb290IHRvIGdldCB0aGUgYWN0aXZlRWxlbWVudC5cbiAgICAgICAgICAgIHZhciBub2RlID0gc3RhcnROb2RlO1xuICAgICAgICAgICAgLyoqIEB0eXBlIHshU2hhZG93Um9vdHx1bmRlZmluZWR9ICovXG4gICAgICAgICAgICB2YXIgcm9vdCA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIHdoaWxlIChub2RlKSB7XG4gICAgICAgICAgICAgIGlmIChub2RlLm5vZGVUeXBlID09PSBOb2RlLkRPQ1VNRU5UX0ZSQUdNRU5UX05PREUpIHtcbiAgICAgICAgICAgICAgICByb290ID0gLyoqIEB0eXBlIHshU2hhZG93Um9vdH0gKi9ub2RlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIG5vZGUgPSBub2RlLnBhcmVudE5vZGU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocm9vdCkge1xuICAgICAgICAgICAgICBhY3RpdmVFbGVtZW50ID0gcm9vdC5hY3RpdmVFbGVtZW50O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoc3RhcnROb2RlLmNvbnRhaW5zKGFjdGl2ZUVsZW1lbnQpKSB7XG4gICAgICAgICAgICBhY3RpdmVFbGVtZW50LmJsdXIoKTtcbiAgICAgICAgICAgIC8vIEluIElFMTEsIGlmIGFuIGVsZW1lbnQgaXMgYWxyZWFkeSBmb2N1c2VkLCBhbmQgdGhlbiBzZXQgdG8gdGFiaW5kZXg9LTFcbiAgICAgICAgICAgIC8vIGNhbGxpbmcgYmx1cigpIHdpbGwgbm90IGFjdHVhbGx5IG1vdmUgdGhlIGZvY3VzLlxuICAgICAgICAgICAgLy8gVG8gd29yayBhcm91bmQgdGhpcyB3ZSBjYWxsIGZvY3VzKCkgb24gdGhlIGJvZHkgaW5zdGVhZC5cbiAgICAgICAgICAgIGlmIChhY3RpdmVFbGVtZW50ID09PSBkb2N1bWVudC5hY3RpdmVFbGVtZW50KSB7XG4gICAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuZm9jdXMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogQHBhcmFtIHshTm9kZX0gbm9kZVxuICAgICAgICAgKi9cblxuICAgICAgfSwge1xuICAgICAgICBrZXk6ICdfdmlzaXROb2RlJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIF92aXNpdE5vZGUobm9kZSkge1xuICAgICAgICAgIGlmIChub2RlLm5vZGVUeXBlICE9PSBOb2RlLkVMRU1FTlRfTk9ERSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgICB2YXIgZWxlbWVudCA9IC8qKiBAdHlwZSB7IUVsZW1lbnR9ICovbm9kZTtcblxuICAgICAgICAgIC8vIElmIGEgZGVzY2VuZGFudCBpbmVydCByb290IGJlY29tZXMgdW4taW5lcnQsIGl0cyBkZXNjZW5kYW50cyB3aWxsIHN0aWxsIGJlIGluZXJ0IGJlY2F1c2Ugb2ZcbiAgICAgICAgICAvLyB0aGlzIGluZXJ0IHJvb3QsIHNvIGFsbCBvZiBpdHMgbWFuYWdlZCBub2RlcyBuZWVkIHRvIGJlIGFkb3B0ZWQgYnkgdGhpcyBJbmVydFJvb3QuXG4gICAgICAgICAgaWYgKGVsZW1lbnQgIT09IHRoaXMuX3Jvb3RFbGVtZW50ICYmIGVsZW1lbnQuaGFzQXR0cmlidXRlKCdpbmVydCcpKSB7XG4gICAgICAgICAgICB0aGlzLl9hZG9wdEluZXJ0Um9vdChlbGVtZW50KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAobWF0Y2hlcy5jYWxsKGVsZW1lbnQsIF9mb2N1c2FibGVFbGVtZW50c1N0cmluZykgfHwgZWxlbWVudC5oYXNBdHRyaWJ1dGUoJ3RhYmluZGV4JykpIHtcbiAgICAgICAgICAgIHRoaXMuX21hbmFnZU5vZGUoZWxlbWVudCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJlZ2lzdGVyIHRoZSBnaXZlbiBub2RlIHdpdGggdGhpcyBJbmVydFJvb3QgYW5kIHdpdGggSW5lcnRNYW5hZ2VyLlxuICAgICAgICAgKiBAcGFyYW0geyFOb2RlfSBub2RlXG4gICAgICAgICAqL1xuXG4gICAgICB9LCB7XG4gICAgICAgIGtleTogJ19tYW5hZ2VOb2RlJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9tYW5hZ2VOb2RlKG5vZGUpIHtcbiAgICAgICAgICB2YXIgaW5lcnROb2RlID0gdGhpcy5faW5lcnRNYW5hZ2VyLnJlZ2lzdGVyKG5vZGUsIHRoaXMpO1xuICAgICAgICAgIHRoaXMuX21hbmFnZWROb2Rlcy5hZGQoaW5lcnROb2RlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBVbnJlZ2lzdGVyIHRoZSBnaXZlbiBub2RlIHdpdGggdGhpcyBJbmVydFJvb3QgYW5kIHdpdGggSW5lcnRNYW5hZ2VyLlxuICAgICAgICAgKiBAcGFyYW0geyFOb2RlfSBub2RlXG4gICAgICAgICAqL1xuXG4gICAgICB9LCB7XG4gICAgICAgIGtleTogJ191bm1hbmFnZU5vZGUnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gX3VubWFuYWdlTm9kZShub2RlKSB7XG4gICAgICAgICAgdmFyIGluZXJ0Tm9kZSA9IHRoaXMuX2luZXJ0TWFuYWdlci5kZXJlZ2lzdGVyKG5vZGUsIHRoaXMpO1xuICAgICAgICAgIGlmIChpbmVydE5vZGUpIHtcbiAgICAgICAgICAgIHRoaXMuX21hbmFnZWROb2Rlc1snZGVsZXRlJ10oaW5lcnROb2RlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogVW5yZWdpc3RlciB0aGUgZW50aXJlIHN1YnRyZWUgc3RhcnRpbmcgYXQgYHN0YXJ0Tm9kZWAuXG4gICAgICAgICAqIEBwYXJhbSB7IU5vZGV9IHN0YXJ0Tm9kZVxuICAgICAgICAgKi9cblxuICAgICAgfSwge1xuICAgICAgICBrZXk6ICdfdW5tYW5hZ2VTdWJ0cmVlJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIF91bm1hbmFnZVN1YnRyZWUoc3RhcnROb2RlKSB7XG4gICAgICAgICAgdmFyIF90aGlzMyA9IHRoaXM7XG5cbiAgICAgICAgICBjb21wb3NlZFRyZWVXYWxrKHN0YXJ0Tm9kZSwgZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgICAgICAgIHJldHVybiBfdGhpczMuX3VubWFuYWdlTm9kZShub2RlKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJZiBhIGRlc2NlbmRhbnQgbm9kZSBpcyBmb3VuZCB3aXRoIGFuIGBpbmVydGAgYXR0cmlidXRlLCBhZG9wdCBpdHMgbWFuYWdlZCBub2Rlcy5cbiAgICAgICAgICogQHBhcmFtIHshRWxlbWVudH0gbm9kZVxuICAgICAgICAgKi9cblxuICAgICAgfSwge1xuICAgICAgICBrZXk6ICdfYWRvcHRJbmVydFJvb3QnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gX2Fkb3B0SW5lcnRSb290KG5vZGUpIHtcbiAgICAgICAgICB2YXIgaW5lcnRTdWJyb290ID0gdGhpcy5faW5lcnRNYW5hZ2VyLmdldEluZXJ0Um9vdChub2RlKTtcblxuICAgICAgICAgIC8vIER1cmluZyBpbml0aWFsaXNhdGlvbiB0aGlzIGluZXJ0IHJvb3QgbWF5IG5vdCBoYXZlIGJlZW4gcmVnaXN0ZXJlZCB5ZXQsXG4gICAgICAgICAgLy8gc28gcmVnaXN0ZXIgaXQgbm93IGlmIG5lZWQgYmUuXG4gICAgICAgICAgaWYgKCFpbmVydFN1YnJvb3QpIHtcbiAgICAgICAgICAgIHRoaXMuX2luZXJ0TWFuYWdlci5zZXRJbmVydChub2RlLCB0cnVlKTtcbiAgICAgICAgICAgIGluZXJ0U3Vicm9vdCA9IHRoaXMuX2luZXJ0TWFuYWdlci5nZXRJbmVydFJvb3Qobm9kZSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaW5lcnRTdWJyb290Lm1hbmFnZWROb2Rlcy5mb3JFYWNoKGZ1bmN0aW9uIChzYXZlZEluZXJ0Tm9kZSkge1xuICAgICAgICAgICAgdGhpcy5fbWFuYWdlTm9kZShzYXZlZEluZXJ0Tm9kZS5ub2RlKTtcbiAgICAgICAgICB9LCB0aGlzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDYWxsYmFjayB1c2VkIHdoZW4gbXV0YXRpb24gb2JzZXJ2ZXIgZGV0ZWN0cyBzdWJ0cmVlIGFkZGl0aW9ucywgcmVtb3ZhbHMsIG9yIGF0dHJpYnV0ZSBjaGFuZ2VzLlxuICAgICAgICAgKiBAcGFyYW0geyFBcnJheTwhTXV0YXRpb25SZWNvcmQ+fSByZWNvcmRzXG4gICAgICAgICAqIEBwYXJhbSB7IU11dGF0aW9uT2JzZXJ2ZXJ9IHNlbGZcbiAgICAgICAgICovXG5cbiAgICAgIH0sIHtcbiAgICAgICAga2V5OiAnX29uTXV0YXRpb24nLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gX29uTXV0YXRpb24ocmVjb3Jkcywgc2VsZikge1xuICAgICAgICAgIHJlY29yZHMuZm9yRWFjaChmdW5jdGlvbiAocmVjb3JkKSB7XG4gICAgICAgICAgICB2YXIgdGFyZ2V0ID0gLyoqIEB0eXBlIHshRWxlbWVudH0gKi9yZWNvcmQudGFyZ2V0O1xuICAgICAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSAnY2hpbGRMaXN0Jykge1xuICAgICAgICAgICAgICAvLyBNYW5hZ2UgYWRkZWQgbm9kZXNcbiAgICAgICAgICAgICAgc2xpY2UuY2FsbChyZWNvcmQuYWRkZWROb2RlcykuZm9yRWFjaChmdW5jdGlvbiAobm9kZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuX21ha2VTdWJ0cmVlVW5mb2N1c2FibGUobm9kZSk7XG4gICAgICAgICAgICAgIH0sIHRoaXMpO1xuXG4gICAgICAgICAgICAgIC8vIFVuLW1hbmFnZSByZW1vdmVkIG5vZGVzXG4gICAgICAgICAgICAgIHNsaWNlLmNhbGwocmVjb3JkLnJlbW92ZWROb2RlcykuZm9yRWFjaChmdW5jdGlvbiAobm9kZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuX3VubWFuYWdlU3VidHJlZShub2RlKTtcbiAgICAgICAgICAgICAgfSwgdGhpcyk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSAnYXR0cmlidXRlcycpIHtcbiAgICAgICAgICAgICAgaWYgKHJlY29yZC5hdHRyaWJ1dGVOYW1lID09PSAndGFiaW5kZXgnKSB7XG4gICAgICAgICAgICAgICAgLy8gUmUtaW5pdGlhbGlzZSBpbmVydCBub2RlIGlmIHRhYmluZGV4IGNoYW5nZXNcbiAgICAgICAgICAgICAgICB0aGlzLl9tYW5hZ2VOb2RlKHRhcmdldCk7XG4gICAgICAgICAgICAgIH0gZWxzZSBpZiAodGFyZ2V0ICE9PSB0aGlzLl9yb290RWxlbWVudCAmJiByZWNvcmQuYXR0cmlidXRlTmFtZSA9PT0gJ2luZXJ0JyAmJiB0YXJnZXQuaGFzQXR0cmlidXRlKCdpbmVydCcpKSB7XG4gICAgICAgICAgICAgICAgLy8gSWYgYSBuZXcgaW5lcnQgcm9vdCBpcyBhZGRlZCwgYWRvcHQgaXRzIG1hbmFnZWQgbm9kZXMgYW5kIG1ha2Ugc3VyZSBpdCBrbm93cyBhYm91dCB0aGVcbiAgICAgICAgICAgICAgICAvLyBhbHJlYWR5IG1hbmFnZWQgbm9kZXMgZnJvbSB0aGlzIGluZXJ0IHN1YnJvb3QuXG4gICAgICAgICAgICAgICAgdGhpcy5fYWRvcHRJbmVydFJvb3QodGFyZ2V0KTtcbiAgICAgICAgICAgICAgICB2YXIgaW5lcnRTdWJyb290ID0gdGhpcy5faW5lcnRNYW5hZ2VyLmdldEluZXJ0Um9vdCh0YXJnZXQpO1xuICAgICAgICAgICAgICAgIHRoaXMuX21hbmFnZWROb2Rlcy5mb3JFYWNoKGZ1bmN0aW9uIChtYW5hZ2VkTm9kZSkge1xuICAgICAgICAgICAgICAgICAgaWYgKHRhcmdldC5jb250YWlucyhtYW5hZ2VkTm9kZS5ub2RlKSkge1xuICAgICAgICAgICAgICAgICAgICBpbmVydFN1YnJvb3QuX21hbmFnZU5vZGUobWFuYWdlZE5vZGUubm9kZSk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LCB0aGlzKTtcbiAgICAgICAgfVxuICAgICAgfSwge1xuICAgICAgICBrZXk6ICdtYW5hZ2VkTm9kZXMnLFxuICAgICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgICByZXR1cm4gbmV3IFNldCh0aGlzLl9tYW5hZ2VkTm9kZXMpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqIEByZXR1cm4ge2Jvb2xlYW59ICovXG5cbiAgICAgIH0sIHtcbiAgICAgICAga2V5OiAnaGFzU2F2ZWRBcmlhSGlkZGVuJyxcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuX3NhdmVkQXJpYUhpZGRlbiAhPT0gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKiBAcGFyYW0gez9zdHJpbmd9IGFyaWFIaWRkZW4gKi9cblxuICAgICAgfSwge1xuICAgICAgICBrZXk6ICdzYXZlZEFyaWFIaWRkZW4nLFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uIHNldChhcmlhSGlkZGVuKSB7XG4gICAgICAgICAgdGhpcy5fc2F2ZWRBcmlhSGlkZGVuID0gYXJpYUhpZGRlbjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKiBAcmV0dXJuIHs/c3RyaW5nfSAqL1xuICAgICAgICAsXG4gICAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICAgIHJldHVybiB0aGlzLl9zYXZlZEFyaWFIaWRkZW47XG4gICAgICAgIH1cbiAgICAgIH1dKTtcblxuICAgICAgcmV0dXJuIEluZXJ0Um9vdDtcbiAgICB9KCk7XG5cbiAgICAvKipcbiAgICAgKiBgSW5lcnROb2RlYCBpbml0aWFsaXNlcyBhbmQgbWFuYWdlcyBhIHNpbmdsZSBpbmVydCBub2RlLlxuICAgICAqIEEgbm9kZSBpcyBpbmVydCBpZiBpdCBpcyBhIGRlc2NlbmRhbnQgb2Ygb25lIG9yIG1vcmUgaW5lcnQgcm9vdCBlbGVtZW50cy5cbiAgICAgKlxuICAgICAqIE9uIGNvbnN0cnVjdGlvbiwgYEluZXJ0Tm9kZWAgc2F2ZXMgdGhlIGV4aXN0aW5nIGB0YWJpbmRleGAgdmFsdWUgZm9yIHRoZSBub2RlLCBpZiBhbnksIGFuZFxuICAgICAqIGVpdGhlciByZW1vdmVzIHRoZSBgdGFiaW5kZXhgIGF0dHJpYnV0ZSBvciBzZXRzIGl0IHRvIGAtMWAsIGRlcGVuZGluZyBvbiB3aGV0aGVyIHRoZSBlbGVtZW50XG4gICAgICogaXMgaW50cmluc2ljYWxseSBmb2N1c2FibGUgb3Igbm90LlxuICAgICAqXG4gICAgICogYEluZXJ0Tm9kZWAgbWFpbnRhaW5zIGEgc2V0IG9mIGBJbmVydFJvb3RgcyB3aGljaCBhcmUgZGVzY2VuZGFudHMgb2YgdGhpcyBgSW5lcnROb2RlYC4gV2hlbiBhblxuICAgICAqIGBJbmVydFJvb3RgIGlzIGRlc3Ryb3llZCwgYW5kIGNhbGxzIGBJbmVydE1hbmFnZXIuZGVyZWdpc3RlcigpYCwgdGhlIGBJbmVydE1hbmFnZXJgIG5vdGlmaWVzIHRoZVxuICAgICAqIGBJbmVydE5vZGVgIHZpYSBgcmVtb3ZlSW5lcnRSb290KClgLCB3aGljaCBpbiB0dXJuIGRlc3Ryb3lzIHRoZSBgSW5lcnROb2RlYCBpZiBubyBgSW5lcnRSb290YHNcbiAgICAgKiByZW1haW4gaW4gdGhlIHNldC4gT24gZGVzdHJ1Y3Rpb24sIGBJbmVydE5vZGVgIHJlaW5zdGF0ZXMgdGhlIHN0b3JlZCBgdGFiaW5kZXhgIGlmIG9uZSBleGlzdHMsXG4gICAgICogb3IgcmVtb3ZlcyB0aGUgYHRhYmluZGV4YCBhdHRyaWJ1dGUgaWYgdGhlIGVsZW1lbnQgaXMgaW50cmluc2ljYWxseSBmb2N1c2FibGUuXG4gICAgICovXG5cblxuICAgIHZhciBJbmVydE5vZGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAvKipcbiAgICAgICAqIEBwYXJhbSB7IU5vZGV9IG5vZGUgQSBmb2N1c2FibGUgZWxlbWVudCB0byBiZSBtYWRlIGluZXJ0LlxuICAgICAgICogQHBhcmFtIHshSW5lcnRSb290fSBpbmVydFJvb3QgVGhlIGluZXJ0IHJvb3QgZWxlbWVudCBhc3NvY2lhdGVkIHdpdGggdGhpcyBpbmVydCBub2RlLlxuICAgICAgICovXG4gICAgICBmdW5jdGlvbiBJbmVydE5vZGUobm9kZSwgaW5lcnRSb290KSB7XG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBJbmVydE5vZGUpO1xuXG4gICAgICAgIC8qKiBAdHlwZSB7IU5vZGV9ICovXG4gICAgICAgIHRoaXMuX25vZGUgPSBub2RlO1xuXG4gICAgICAgIC8qKiBAdHlwZSB7Ym9vbGVhbn0gKi9cbiAgICAgICAgdGhpcy5fb3ZlcnJvZGVGb2N1c01ldGhvZCA9IGZhbHNlO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAdHlwZSB7IVNldDwhSW5lcnRSb290Pn0gVGhlIHNldCBvZiBkZXNjZW5kYW50IGluZXJ0IHJvb3RzLlxuICAgICAgICAgKiAgICBJZiBhbmQgb25seSBpZiB0aGlzIHNldCBiZWNvbWVzIGVtcHR5LCB0aGlzIG5vZGUgaXMgbm8gbG9uZ2VyIGluZXJ0LlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5faW5lcnRSb290cyA9IG5ldyBTZXQoW2luZXJ0Um9vdF0pO1xuXG4gICAgICAgIC8qKiBAdHlwZSB7P251bWJlcn0gKi9cbiAgICAgICAgdGhpcy5fc2F2ZWRUYWJJbmRleCA9IG51bGw7XG5cbiAgICAgICAgLyoqIEB0eXBlIHtib29sZWFufSAqL1xuICAgICAgICB0aGlzLl9kZXN0cm95ZWQgPSBmYWxzZTtcblxuICAgICAgICAvLyBTYXZlIGFueSBwcmlvciB0YWJpbmRleCBpbmZvIGFuZCBtYWtlIHRoaXMgbm9kZSB1bnRhYmJhYmxlXG4gICAgICAgIHRoaXMuZW5zdXJlVW50YWJiYWJsZSgpO1xuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIENhbGwgdGhpcyB3aGVuZXZlciB0aGlzIG9iamVjdCBpcyBhYm91dCB0byBiZWNvbWUgb2Jzb2xldGUuXG4gICAgICAgKiBUaGlzIG1ha2VzIHRoZSBtYW5hZ2VkIG5vZGUgZm9jdXNhYmxlIGFnYWluIGFuZCBkZWxldGVzIGFsbCBvZiB0aGUgcHJldmlvdXNseSBzdG9yZWQgc3RhdGUuXG4gICAgICAgKi9cblxuXG4gICAgICBfY3JlYXRlQ2xhc3MoSW5lcnROb2RlLCBbe1xuICAgICAgICBrZXk6ICdkZXN0cnVjdG9yJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGRlc3RydWN0b3IoKSB7XG4gICAgICAgICAgdGhpcy5fdGhyb3dJZkRlc3Ryb3llZCgpO1xuXG4gICAgICAgICAgaWYgKHRoaXMuX25vZGUgJiYgdGhpcy5fbm9kZS5ub2RlVHlwZSA9PT0gTm9kZS5FTEVNRU5UX05PREUpIHtcbiAgICAgICAgICAgIHZhciBlbGVtZW50ID0gLyoqIEB0eXBlIHshRWxlbWVudH0gKi90aGlzLl9ub2RlO1xuICAgICAgICAgICAgaWYgKHRoaXMuX3NhdmVkVGFiSW5kZXggIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JywgdGhpcy5fc2F2ZWRUYWJJbmRleCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBlbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgndGFiaW5kZXgnKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gVXNlIGBkZWxldGVgIHRvIHJlc3RvcmUgbmF0aXZlIGZvY3VzIG1ldGhvZC5cbiAgICAgICAgICAgIGlmICh0aGlzLl9vdmVycm9kZUZvY3VzTWV0aG9kKSB7XG4gICAgICAgICAgICAgIGRlbGV0ZSBlbGVtZW50LmZvY3VzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIFNlZSBub3RlIGluIEluZXJ0Um9vdC5kZXN0cnVjdG9yIGZvciB3aHkgd2UgY2FzdCB0aGVzZSBudWxscyB0byBBTlkuXG4gICAgICAgICAgdGhpcy5fbm9kZSA9IC8qKiBAdHlwZSB7P30gKi9udWxsO1xuICAgICAgICAgIHRoaXMuX2luZXJ0Um9vdHMgPSAvKiogQHR5cGUgez99ICovbnVsbDtcbiAgICAgICAgICB0aGlzLl9kZXN0cm95ZWQgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEB0eXBlIHtib29sZWFufSBXaGV0aGVyIHRoaXMgb2JqZWN0IGlzIG9ic29sZXRlIGJlY2F1c2UgdGhlIG1hbmFnZWQgbm9kZSBpcyBubyBsb25nZXIgaW5lcnQuXG4gICAgICAgICAqIElmIHRoZSBvYmplY3QgaGFzIGJlZW4gZGVzdHJveWVkLCBhbnkgYXR0ZW1wdCB0byBhY2Nlc3MgaXQgd2lsbCBjYXVzZSBhbiBleGNlcHRpb24uXG4gICAgICAgICAqL1xuXG4gICAgICB9LCB7XG4gICAgICAgIGtleTogJ190aHJvd0lmRGVzdHJveWVkJyxcblxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaHJvdyBpZiB1c2VyIHRyaWVzIHRvIGFjY2VzcyBkZXN0cm95ZWQgSW5lcnROb2RlLlxuICAgICAgICAgKi9cbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIF90aHJvd0lmRGVzdHJveWVkKCkge1xuICAgICAgICAgIGlmICh0aGlzLmRlc3Ryb3llZCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdUcnlpbmcgdG8gYWNjZXNzIGRlc3Ryb3llZCBJbmVydE5vZGUnKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvKiogQHJldHVybiB7Ym9vbGVhbn0gKi9cblxuICAgICAgfSwge1xuICAgICAgICBrZXk6ICdlbnN1cmVVbnRhYmJhYmxlJyxcblxuXG4gICAgICAgIC8qKiBTYXZlIHRoZSBleGlzdGluZyB0YWJpbmRleCB2YWx1ZSBhbmQgbWFrZSB0aGUgbm9kZSB1bnRhYmJhYmxlIGFuZCB1bmZvY3VzYWJsZSAqL1xuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZW5zdXJlVW50YWJiYWJsZSgpIHtcbiAgICAgICAgICBpZiAodGhpcy5ub2RlLm5vZGVUeXBlICE9PSBOb2RlLkVMRU1FTlRfTk9ERSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgICB2YXIgZWxlbWVudCA9IC8qKiBAdHlwZSB7IUVsZW1lbnR9ICovdGhpcy5ub2RlO1xuICAgICAgICAgIGlmIChtYXRjaGVzLmNhbGwoZWxlbWVudCwgX2ZvY3VzYWJsZUVsZW1lbnRzU3RyaW5nKSkge1xuICAgICAgICAgICAgaWYgKCAvKiogQHR5cGUgeyFIVE1MRWxlbWVudH0gKi9lbGVtZW50LnRhYkluZGV4ID09PSAtMSAmJiB0aGlzLmhhc1NhdmVkVGFiSW5kZXgpIHtcbiAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoZWxlbWVudC5oYXNBdHRyaWJ1dGUoJ3RhYmluZGV4JykpIHtcbiAgICAgICAgICAgICAgdGhpcy5fc2F2ZWRUYWJJbmRleCA9IC8qKiBAdHlwZSB7IUhUTUxFbGVtZW50fSAqL2VsZW1lbnQudGFiSW5kZXg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgndGFiaW5kZXgnLCAnLTEnKTtcbiAgICAgICAgICAgIGlmIChlbGVtZW50Lm5vZGVUeXBlID09PSBOb2RlLkVMRU1FTlRfTk9ERSkge1xuICAgICAgICAgICAgICBlbGVtZW50LmZvY3VzID0gZnVuY3Rpb24gKCkge307XG4gICAgICAgICAgICAgIHRoaXMuX292ZXJyb2RlRm9jdXNNZXRob2QgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSBpZiAoZWxlbWVudC5oYXNBdHRyaWJ1dGUoJ3RhYmluZGV4JykpIHtcbiAgICAgICAgICAgIHRoaXMuX3NhdmVkVGFiSW5kZXggPSAvKiogQHR5cGUgeyFIVE1MRWxlbWVudH0gKi9lbGVtZW50LnRhYkluZGV4O1xuICAgICAgICAgICAgZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ3RhYmluZGV4Jyk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEFkZCBhbm90aGVyIGluZXJ0IHJvb3QgdG8gdGhpcyBpbmVydCBub2RlJ3Mgc2V0IG9mIG1hbmFnaW5nIGluZXJ0IHJvb3RzLlxuICAgICAgICAgKiBAcGFyYW0geyFJbmVydFJvb3R9IGluZXJ0Um9vdFxuICAgICAgICAgKi9cblxuICAgICAgfSwge1xuICAgICAgICBrZXk6ICdhZGRJbmVydFJvb3QnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gYWRkSW5lcnRSb290KGluZXJ0Um9vdCkge1xuICAgICAgICAgIHRoaXMuX3Rocm93SWZEZXN0cm95ZWQoKTtcbiAgICAgICAgICB0aGlzLl9pbmVydFJvb3RzLmFkZChpbmVydFJvb3QpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJlbW92ZSB0aGUgZ2l2ZW4gaW5lcnQgcm9vdCBmcm9tIHRoaXMgaW5lcnQgbm9kZSdzIHNldCBvZiBtYW5hZ2luZyBpbmVydCByb290cy5cbiAgICAgICAgICogSWYgdGhlIHNldCBvZiBtYW5hZ2luZyBpbmVydCByb290cyBiZWNvbWVzIGVtcHR5LCB0aGlzIG5vZGUgaXMgbm8gbG9uZ2VyIGluZXJ0LFxuICAgICAgICAgKiBzbyB0aGUgb2JqZWN0IHNob3VsZCBiZSBkZXN0cm95ZWQuXG4gICAgICAgICAqIEBwYXJhbSB7IUluZXJ0Um9vdH0gaW5lcnRSb290XG4gICAgICAgICAqL1xuXG4gICAgICB9LCB7XG4gICAgICAgIGtleTogJ3JlbW92ZUluZXJ0Um9vdCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiByZW1vdmVJbmVydFJvb3QoaW5lcnRSb290KSB7XG4gICAgICAgICAgdGhpcy5fdGhyb3dJZkRlc3Ryb3llZCgpO1xuICAgICAgICAgIHRoaXMuX2luZXJ0Um9vdHNbJ2RlbGV0ZSddKGluZXJ0Um9vdCk7XG4gICAgICAgICAgaWYgKHRoaXMuX2luZXJ0Um9vdHMuc2l6ZSA9PT0gMCkge1xuICAgICAgICAgICAgdGhpcy5kZXN0cnVjdG9yKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9LCB7XG4gICAgICAgIGtleTogJ2Rlc3Ryb3llZCcsXG4gICAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICAgIHJldHVybiAoLyoqIEB0eXBlIHshSW5lcnROb2RlfSAqL3RoaXMuX2Rlc3Ryb3llZFxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH0sIHtcbiAgICAgICAga2V5OiAnaGFzU2F2ZWRUYWJJbmRleCcsXG4gICAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICAgIHJldHVybiB0aGlzLl9zYXZlZFRhYkluZGV4ICE9PSBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqIEByZXR1cm4geyFOb2RlfSAqL1xuXG4gICAgICB9LCB7XG4gICAgICAgIGtleTogJ25vZGUnLFxuICAgICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgICB0aGlzLl90aHJvd0lmRGVzdHJveWVkKCk7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuX25vZGU7XG4gICAgICAgIH1cblxuICAgICAgICAvKiogQHBhcmFtIHs/bnVtYmVyfSB0YWJJbmRleCAqL1xuXG4gICAgICB9LCB7XG4gICAgICAgIGtleTogJ3NhdmVkVGFiSW5kZXgnLFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uIHNldCh0YWJJbmRleCkge1xuICAgICAgICAgIHRoaXMuX3Rocm93SWZEZXN0cm95ZWQoKTtcbiAgICAgICAgICB0aGlzLl9zYXZlZFRhYkluZGV4ID0gdGFiSW5kZXg7XG4gICAgICAgIH1cblxuICAgICAgICAvKiogQHJldHVybiB7P251bWJlcn0gKi9cbiAgICAgICAgLFxuICAgICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgICB0aGlzLl90aHJvd0lmRGVzdHJveWVkKCk7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuX3NhdmVkVGFiSW5kZXg7XG4gICAgICAgIH1cbiAgICAgIH1dKTtcblxuICAgICAgcmV0dXJuIEluZXJ0Tm9kZTtcbiAgICB9KCk7XG5cbiAgICAvKipcbiAgICAgKiBJbmVydE1hbmFnZXIgaXMgYSBwZXItZG9jdW1lbnQgc2luZ2xldG9uIG9iamVjdCB3aGljaCBtYW5hZ2VzIGFsbCBpbmVydCByb290cyBhbmQgbm9kZXMuXG4gICAgICpcbiAgICAgKiBXaGVuIGFuIGVsZW1lbnQgYmVjb21lcyBhbiBpbmVydCByb290IGJ5IGhhdmluZyBhbiBgaW5lcnRgIGF0dHJpYnV0ZSBzZXQgYW5kL29yIGl0cyBgaW5lcnRgXG4gICAgICogcHJvcGVydHkgc2V0IHRvIGB0cnVlYCwgdGhlIGBzZXRJbmVydGAgbWV0aG9kIGNyZWF0ZXMgYW4gYEluZXJ0Um9vdGAgb2JqZWN0IGZvciB0aGUgZWxlbWVudC5cbiAgICAgKiBUaGUgYEluZXJ0Um9vdGAgaW4gdHVybiByZWdpc3RlcnMgaXRzZWxmIGFzIG1hbmFnaW5nIGFsbCBvZiB0aGUgZWxlbWVudCdzIGZvY3VzYWJsZSBkZXNjZW5kYW50XG4gICAgICogbm9kZXMgdmlhIHRoZSBgcmVnaXN0ZXIoKWAgbWV0aG9kLiBUaGUgYEluZXJ0TWFuYWdlcmAgZW5zdXJlcyB0aGF0IGEgc2luZ2xlIGBJbmVydE5vZGVgIGluc3RhbmNlXG4gICAgICogaXMgY3JlYXRlZCBmb3IgZWFjaCBzdWNoIG5vZGUsIHZpYSB0aGUgYF9tYW5hZ2VkTm9kZXNgIG1hcC5cbiAgICAgKi9cblxuXG4gICAgdmFyIEluZXJ0TWFuYWdlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIC8qKlxuICAgICAgICogQHBhcmFtIHshRG9jdW1lbnR9IGRvY3VtZW50XG4gICAgICAgKi9cbiAgICAgIGZ1bmN0aW9uIEluZXJ0TWFuYWdlcihkb2N1bWVudCkge1xuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgSW5lcnRNYW5hZ2VyKTtcblxuICAgICAgICBpZiAoIWRvY3VtZW50KSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdNaXNzaW5nIHJlcXVpcmVkIGFyZ3VtZW50OyBJbmVydE1hbmFnZXIgbmVlZHMgdG8gd3JhcCBhIGRvY3VtZW50LicpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqIEB0eXBlIHshRG9jdW1lbnR9ICovXG4gICAgICAgIHRoaXMuX2RvY3VtZW50ID0gZG9jdW1lbnQ7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEFsbCBtYW5hZ2VkIG5vZGVzIGtub3duIHRvIHRoaXMgSW5lcnRNYW5hZ2VyLiBJbiBhIG1hcCB0byBhbGxvdyBsb29raW5nIHVwIGJ5IE5vZGUuXG4gICAgICAgICAqIEB0eXBlIHshTWFwPCFOb2RlLCAhSW5lcnROb2RlPn1cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuX21hbmFnZWROb2RlcyA9IG5ldyBNYXAoKTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogQWxsIGluZXJ0IHJvb3RzIGtub3duIHRvIHRoaXMgSW5lcnRNYW5hZ2VyLiBJbiBhIG1hcCB0byBhbGxvdyBsb29raW5nIHVwIGJ5IE5vZGUuXG4gICAgICAgICAqIEB0eXBlIHshTWFwPCFOb2RlLCAhSW5lcnRSb290Pn1cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuX2luZXJ0Um9vdHMgPSBuZXcgTWFwKCk7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIE9ic2VydmVyIGZvciBtdXRhdGlvbnMgb24gYGRvY3VtZW50LmJvZHlgLlxuICAgICAgICAgKiBAdHlwZSB7IU11dGF0aW9uT2JzZXJ2ZXJ9XG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLl9vYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKHRoaXMuX3dhdGNoRm9ySW5lcnQuYmluZCh0aGlzKSk7XG5cbiAgICAgICAgLy8gQWRkIGluZXJ0IHN0eWxlLlxuICAgICAgICBhZGRJbmVydFN0eWxlKGRvY3VtZW50LmhlYWQgfHwgZG9jdW1lbnQuYm9keSB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpO1xuXG4gICAgICAgIC8vIFdhaXQgZm9yIGRvY3VtZW50IHRvIGJlIGxvYWRlZC5cbiAgICAgICAgaWYgKGRvY3VtZW50LnJlYWR5U3RhdGUgPT09ICdsb2FkaW5nJykge1xuICAgICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCB0aGlzLl9vbkRvY3VtZW50TG9hZGVkLmJpbmQodGhpcykpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuX29uRG9jdW1lbnRMb2FkZWQoKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIFNldCB3aGV0aGVyIHRoZSBnaXZlbiBlbGVtZW50IHNob3VsZCBiZSBhbiBpbmVydCByb290IG9yIG5vdC5cbiAgICAgICAqIEBwYXJhbSB7IUVsZW1lbnR9IHJvb3RcbiAgICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gaW5lcnRcbiAgICAgICAqL1xuXG5cbiAgICAgIF9jcmVhdGVDbGFzcyhJbmVydE1hbmFnZXIsIFt7XG4gICAgICAgIGtleTogJ3NldEluZXJ0JyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHNldEluZXJ0KHJvb3QsIGluZXJ0KSB7XG4gICAgICAgICAgaWYgKGluZXJ0KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5faW5lcnRSb290cy5oYXMocm9vdCkpIHtcbiAgICAgICAgICAgICAgLy8gZWxlbWVudCBpcyBhbHJlYWR5IGluZXJ0XG4gICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIGluZXJ0Um9vdCA9IG5ldyBJbmVydFJvb3Qocm9vdCwgdGhpcyk7XG4gICAgICAgICAgICByb290LnNldEF0dHJpYnV0ZSgnaW5lcnQnLCAnJyk7XG4gICAgICAgICAgICB0aGlzLl9pbmVydFJvb3RzLnNldChyb290LCBpbmVydFJvb3QpO1xuICAgICAgICAgICAgLy8gSWYgbm90IGNvbnRhaW5lZCBpbiB0aGUgZG9jdW1lbnQsIGl0IG11c3QgYmUgaW4gYSBzaGFkb3dSb290LlxuICAgICAgICAgICAgLy8gRW5zdXJlIGluZXJ0IHN0eWxlcyBhcmUgYWRkZWQgdGhlcmUuXG4gICAgICAgICAgICBpZiAoIXRoaXMuX2RvY3VtZW50LmJvZHkuY29udGFpbnMocm9vdCkpIHtcbiAgICAgICAgICAgICAgdmFyIHBhcmVudCA9IHJvb3QucGFyZW50Tm9kZTtcbiAgICAgICAgICAgICAgd2hpbGUgKHBhcmVudCkge1xuICAgICAgICAgICAgICAgIGlmIChwYXJlbnQubm9kZVR5cGUgPT09IDExKSB7XG4gICAgICAgICAgICAgICAgICBhZGRJbmVydFN0eWxlKHBhcmVudCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHBhcmVudCA9IHBhcmVudC5wYXJlbnROb2RlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5faW5lcnRSb290cy5oYXMocm9vdCkpIHtcbiAgICAgICAgICAgICAgLy8gZWxlbWVudCBpcyBhbHJlYWR5IG5vbi1pbmVydFxuICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhciBfaW5lcnRSb290ID0gdGhpcy5faW5lcnRSb290cy5nZXQocm9vdCk7XG4gICAgICAgICAgICBfaW5lcnRSb290LmRlc3RydWN0b3IoKTtcbiAgICAgICAgICAgIHRoaXMuX2luZXJ0Um9vdHNbJ2RlbGV0ZSddKHJvb3QpO1xuICAgICAgICAgICAgcm9vdC5yZW1vdmVBdHRyaWJ1dGUoJ2luZXJ0Jyk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEdldCB0aGUgSW5lcnRSb290IG9iamVjdCBjb3JyZXNwb25kaW5nIHRvIHRoZSBnaXZlbiBpbmVydCByb290IGVsZW1lbnQsIGlmIGFueS5cbiAgICAgICAgICogQHBhcmFtIHshTm9kZX0gZWxlbWVudFxuICAgICAgICAgKiBAcmV0dXJuIHshSW5lcnRSb290fHVuZGVmaW5lZH1cbiAgICAgICAgICovXG5cbiAgICAgIH0sIHtcbiAgICAgICAga2V5OiAnZ2V0SW5lcnRSb290JyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGdldEluZXJ0Um9vdChlbGVtZW50KSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuX2luZXJ0Um9vdHMuZ2V0KGVsZW1lbnQpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJlZ2lzdGVyIHRoZSBnaXZlbiBJbmVydFJvb3QgYXMgbWFuYWdpbmcgdGhlIGdpdmVuIG5vZGUuXG4gICAgICAgICAqIEluIHRoZSBjYXNlIHdoZXJlIHRoZSBub2RlIGhhcyBhIHByZXZpb3VzbHkgZXhpc3RpbmcgaW5lcnQgcm9vdCwgdGhpcyBpbmVydCByb290IHdpbGxcbiAgICAgICAgICogYmUgYWRkZWQgdG8gaXRzIHNldCBvZiBpbmVydCByb290cy5cbiAgICAgICAgICogQHBhcmFtIHshTm9kZX0gbm9kZVxuICAgICAgICAgKiBAcGFyYW0geyFJbmVydFJvb3R9IGluZXJ0Um9vdFxuICAgICAgICAgKiBAcmV0dXJuIHshSW5lcnROb2RlfSBpbmVydE5vZGVcbiAgICAgICAgICovXG5cbiAgICAgIH0sIHtcbiAgICAgICAga2V5OiAncmVnaXN0ZXInLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcmVnaXN0ZXIobm9kZSwgaW5lcnRSb290KSB7XG4gICAgICAgICAgdmFyIGluZXJ0Tm9kZSA9IHRoaXMuX21hbmFnZWROb2Rlcy5nZXQobm9kZSk7XG4gICAgICAgICAgaWYgKGluZXJ0Tm9kZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAvLyBub2RlIHdhcyBhbHJlYWR5IGluIGFuIGluZXJ0IHN1YnRyZWVcbiAgICAgICAgICAgIGluZXJ0Tm9kZS5hZGRJbmVydFJvb3QoaW5lcnRSb290KTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaW5lcnROb2RlID0gbmV3IEluZXJ0Tm9kZShub2RlLCBpbmVydFJvb3QpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHRoaXMuX21hbmFnZWROb2Rlcy5zZXQobm9kZSwgaW5lcnROb2RlKTtcblxuICAgICAgICAgIHJldHVybiBpbmVydE5vZGU7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogRGUtcmVnaXN0ZXIgdGhlIGdpdmVuIEluZXJ0Um9vdCBhcyBtYW5hZ2luZyB0aGUgZ2l2ZW4gaW5lcnQgbm9kZS5cbiAgICAgICAgICogUmVtb3ZlcyB0aGUgaW5lcnQgcm9vdCBmcm9tIHRoZSBJbmVydE5vZGUncyBzZXQgb2YgbWFuYWdpbmcgaW5lcnQgcm9vdHMsIGFuZCByZW1vdmUgdGhlIGluZXJ0XG4gICAgICAgICAqIG5vZGUgZnJvbSB0aGUgSW5lcnRNYW5hZ2VyJ3Mgc2V0IG9mIG1hbmFnZWQgbm9kZXMgaWYgaXQgaXMgZGVzdHJveWVkLlxuICAgICAgICAgKiBJZiB0aGUgbm9kZSBpcyBub3QgY3VycmVudGx5IG1hbmFnZWQsIHRoaXMgaXMgZXNzZW50aWFsbHkgYSBuby1vcC5cbiAgICAgICAgICogQHBhcmFtIHshTm9kZX0gbm9kZVxuICAgICAgICAgKiBAcGFyYW0geyFJbmVydFJvb3R9IGluZXJ0Um9vdFxuICAgICAgICAgKiBAcmV0dXJuIHs/SW5lcnROb2RlfSBUaGUgcG90ZW50aWFsbHkgZGVzdHJveWVkIEluZXJ0Tm9kZSBhc3NvY2lhdGVkIHdpdGggdGhpcyBub2RlLCBpZiBhbnkuXG4gICAgICAgICAqL1xuXG4gICAgICB9LCB7XG4gICAgICAgIGtleTogJ2RlcmVnaXN0ZXInLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZGVyZWdpc3Rlcihub2RlLCBpbmVydFJvb3QpIHtcbiAgICAgICAgICB2YXIgaW5lcnROb2RlID0gdGhpcy5fbWFuYWdlZE5vZGVzLmdldChub2RlKTtcbiAgICAgICAgICBpZiAoIWluZXJ0Tm9kZSkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaW5lcnROb2RlLnJlbW92ZUluZXJ0Um9vdChpbmVydFJvb3QpO1xuICAgICAgICAgIGlmIChpbmVydE5vZGUuZGVzdHJveWVkKSB7XG4gICAgICAgICAgICB0aGlzLl9tYW5hZ2VkTm9kZXNbJ2RlbGV0ZSddKG5vZGUpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiBpbmVydE5vZGU7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogQ2FsbGJhY2sgdXNlZCB3aGVuIGRvY3VtZW50IGhhcyBmaW5pc2hlZCBsb2FkaW5nLlxuICAgICAgICAgKi9cblxuICAgICAgfSwge1xuICAgICAgICBrZXk6ICdfb25Eb2N1bWVudExvYWRlZCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBfb25Eb2N1bWVudExvYWRlZCgpIHtcbiAgICAgICAgICAvLyBGaW5kIGFsbCBpbmVydCByb290cyBpbiBkb2N1bWVudCBhbmQgbWFrZSB0aGVtIGFjdHVhbGx5IGluZXJ0LlxuICAgICAgICAgIHZhciBpbmVydEVsZW1lbnRzID0gc2xpY2UuY2FsbCh0aGlzLl9kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbaW5lcnRdJykpO1xuICAgICAgICAgIGluZXJ0RWxlbWVudHMuZm9yRWFjaChmdW5jdGlvbiAoaW5lcnRFbGVtZW50KSB7XG4gICAgICAgICAgICB0aGlzLnNldEluZXJ0KGluZXJ0RWxlbWVudCwgdHJ1ZSk7XG4gICAgICAgICAgfSwgdGhpcyk7XG5cbiAgICAgICAgICAvLyBDb21tZW50IHRoaXMgb3V0IHRvIHVzZSBwcm9ncmFtbWF0aWMgQVBJIG9ubHkuXG4gICAgICAgICAgdGhpcy5fb2JzZXJ2ZXIub2JzZXJ2ZSh0aGlzLl9kb2N1bWVudC5ib2R5IHx8IHRoaXMuX2RvY3VtZW50LmRvY3VtZW50RWxlbWVudCwgeyBhdHRyaWJ1dGVzOiB0cnVlLCBzdWJ0cmVlOiB0cnVlLCBjaGlsZExpc3Q6IHRydWUgfSk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogQ2FsbGJhY2sgdXNlZCB3aGVuIG11dGF0aW9uIG9ic2VydmVyIGRldGVjdHMgYXR0cmlidXRlIGNoYW5nZXMuXG4gICAgICAgICAqIEBwYXJhbSB7IUFycmF5PCFNdXRhdGlvblJlY29yZD59IHJlY29yZHNcbiAgICAgICAgICogQHBhcmFtIHshTXV0YXRpb25PYnNlcnZlcn0gc2VsZlxuICAgICAgICAgKi9cblxuICAgICAgfSwge1xuICAgICAgICBrZXk6ICdfd2F0Y2hGb3JJbmVydCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBfd2F0Y2hGb3JJbmVydChyZWNvcmRzLCBzZWxmKSB7XG4gICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgICByZWNvcmRzLmZvckVhY2goZnVuY3Rpb24gKHJlY29yZCkge1xuICAgICAgICAgICAgc3dpdGNoIChyZWNvcmQudHlwZSkge1xuICAgICAgICAgICAgICBjYXNlICdjaGlsZExpc3QnOlxuICAgICAgICAgICAgICAgIHNsaWNlLmNhbGwocmVjb3JkLmFkZGVkTm9kZXMpLmZvckVhY2goZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgICAgICAgICAgICAgIGlmIChub2RlLm5vZGVUeXBlICE9PSBOb2RlLkVMRU1FTlRfTk9ERSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB2YXIgaW5lcnRFbGVtZW50cyA9IHNsaWNlLmNhbGwobm9kZS5xdWVyeVNlbGVjdG9yQWxsKCdbaW5lcnRdJykpO1xuICAgICAgICAgICAgICAgICAgaWYgKG1hdGNoZXMuY2FsbChub2RlLCAnW2luZXJ0XScpKSB7XG4gICAgICAgICAgICAgICAgICAgIGluZXJ0RWxlbWVudHMudW5zaGlmdChub2RlKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIGluZXJ0RWxlbWVudHMuZm9yRWFjaChmdW5jdGlvbiAoaW5lcnRFbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0SW5lcnQoaW5lcnRFbGVtZW50LCB0cnVlKTtcbiAgICAgICAgICAgICAgICAgIH0sIF90aGlzKTtcbiAgICAgICAgICAgICAgICB9LCBfdGhpcyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIGNhc2UgJ2F0dHJpYnV0ZXMnOlxuICAgICAgICAgICAgICAgIGlmIChyZWNvcmQuYXR0cmlidXRlTmFtZSAhPT0gJ2luZXJ0Jykge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YXIgdGFyZ2V0ID0gLyoqIEB0eXBlIHshRWxlbWVudH0gKi9yZWNvcmQudGFyZ2V0O1xuICAgICAgICAgICAgICAgIHZhciBpbmVydCA9IHRhcmdldC5oYXNBdHRyaWJ1dGUoJ2luZXJ0Jyk7XG4gICAgICAgICAgICAgICAgX3RoaXMuc2V0SW5lcnQodGFyZ2V0LCBpbmVydCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSwgdGhpcyk7XG4gICAgICAgIH1cbiAgICAgIH1dKTtcblxuICAgICAgcmV0dXJuIEluZXJ0TWFuYWdlcjtcbiAgICB9KCk7XG5cbiAgICAvKipcbiAgICAgKiBSZWN1cnNpdmVseSB3YWxrIHRoZSBjb21wb3NlZCB0cmVlIGZyb20gfG5vZGV8LlxuICAgICAqIEBwYXJhbSB7IU5vZGV9IG5vZGVcbiAgICAgKiBAcGFyYW0geyhmdW5jdGlvbiAoIUVsZW1lbnQpKT19IGNhbGxiYWNrIENhbGxiYWNrIHRvIGJlIGNhbGxlZCBmb3IgZWFjaCBlbGVtZW50IHRyYXZlcnNlZCxcbiAgICAgKiAgICAgYmVmb3JlIGRlc2NlbmRpbmcgaW50byBjaGlsZCBub2Rlcy5cbiAgICAgKiBAcGFyYW0gez9TaGFkb3dSb290PX0gc2hhZG93Um9vdEFuY2VzdG9yIFRoZSBuZWFyZXN0IFNoYWRvd1Jvb3QgYW5jZXN0b3IsIGlmIGFueS5cbiAgICAgKi9cblxuXG4gICAgZnVuY3Rpb24gY29tcG9zZWRUcmVlV2Fsayhub2RlLCBjYWxsYmFjaywgc2hhZG93Um9vdEFuY2VzdG9yKSB7XG4gICAgICBpZiAobm9kZS5ub2RlVHlwZSA9PSBOb2RlLkVMRU1FTlRfTk9ERSkge1xuICAgICAgICB2YXIgZWxlbWVudCA9IC8qKiBAdHlwZSB7IUVsZW1lbnR9ICovbm9kZTtcbiAgICAgICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgICAgY2FsbGJhY2soZWxlbWVudCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBEZXNjZW5kIGludG8gbm9kZTpcbiAgICAgICAgLy8gSWYgaXQgaGFzIGEgU2hhZG93Um9vdCwgaWdub3JlIGFsbCBjaGlsZCBlbGVtZW50cyAtIHRoZXNlIHdpbGwgYmUgcGlja2VkXG4gICAgICAgIC8vIHVwIGJ5IHRoZSA8Y29udGVudD4gb3IgPHNoYWRvdz4gZWxlbWVudHMuIERlc2NlbmQgc3RyYWlnaHQgaW50byB0aGVcbiAgICAgICAgLy8gU2hhZG93Um9vdC5cbiAgICAgICAgdmFyIHNoYWRvd1Jvb3QgPSAvKiogQHR5cGUgeyFIVE1MRWxlbWVudH0gKi9lbGVtZW50LnNoYWRvd1Jvb3Q7XG4gICAgICAgIGlmIChzaGFkb3dSb290KSB7XG4gICAgICAgICAgY29tcG9zZWRUcmVlV2FsayhzaGFkb3dSb290LCBjYWxsYmFjaywgc2hhZG93Um9vdCk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gSWYgaXQgaXMgYSA8Y29udGVudD4gZWxlbWVudCwgZGVzY2VuZCBpbnRvIGRpc3RyaWJ1dGVkIGVsZW1lbnRzIC0gdGhlc2VcbiAgICAgICAgLy8gYXJlIGVsZW1lbnRzIGZyb20gb3V0c2lkZSB0aGUgc2hhZG93IHJvb3Qgd2hpY2ggYXJlIHJlbmRlcmVkIGluc2lkZSB0aGVcbiAgICAgICAgLy8gc2hhZG93IERPTS5cbiAgICAgICAgaWYgKGVsZW1lbnQubG9jYWxOYW1lID09ICdjb250ZW50Jykge1xuICAgICAgICAgIHZhciBjb250ZW50ID0gLyoqIEB0eXBlIHshSFRNTENvbnRlbnRFbGVtZW50fSAqL2VsZW1lbnQ7XG4gICAgICAgICAgLy8gVmVyaWZpZXMgaWYgU2hhZG93RG9tIHYwIGlzIHN1cHBvcnRlZC5cbiAgICAgICAgICB2YXIgZGlzdHJpYnV0ZWROb2RlcyA9IGNvbnRlbnQuZ2V0RGlzdHJpYnV0ZWROb2RlcyA/IGNvbnRlbnQuZ2V0RGlzdHJpYnV0ZWROb2RlcygpIDogW107XG4gICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBkaXN0cmlidXRlZE5vZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb21wb3NlZFRyZWVXYWxrKGRpc3RyaWJ1dGVkTm9kZXNbaV0sIGNhbGxiYWNrLCBzaGFkb3dSb290QW5jZXN0b3IpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyBJZiBpdCBpcyBhIDxzbG90PiBlbGVtZW50LCBkZXNjZW5kIGludG8gYXNzaWduZWQgbm9kZXMgLSB0aGVzZVxuICAgICAgICAvLyBhcmUgZWxlbWVudHMgZnJvbSBvdXRzaWRlIHRoZSBzaGFkb3cgcm9vdCB3aGljaCBhcmUgcmVuZGVyZWQgaW5zaWRlIHRoZVxuICAgICAgICAvLyBzaGFkb3cgRE9NLlxuICAgICAgICBpZiAoZWxlbWVudC5sb2NhbE5hbWUgPT0gJ3Nsb3QnKSB7XG4gICAgICAgICAgdmFyIHNsb3QgPSAvKiogQHR5cGUgeyFIVE1MU2xvdEVsZW1lbnR9ICovZWxlbWVudDtcbiAgICAgICAgICAvLyBWZXJpZnkgaWYgU2hhZG93RG9tIHYxIGlzIHN1cHBvcnRlZC5cbiAgICAgICAgICB2YXIgX2Rpc3RyaWJ1dGVkTm9kZXMgPSBzbG90LmFzc2lnbmVkTm9kZXMgPyBzbG90LmFzc2lnbmVkTm9kZXMoeyBmbGF0dGVuOiB0cnVlIH0pIDogW107XG4gICAgICAgICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IF9kaXN0cmlidXRlZE5vZGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgY29tcG9zZWRUcmVlV2FsayhfZGlzdHJpYnV0ZWROb2Rlc1tfaV0sIGNhbGxiYWNrLCBzaGFkb3dSb290QW5jZXN0b3IpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gSWYgaXQgaXMgbmVpdGhlciB0aGUgcGFyZW50IG9mIGEgU2hhZG93Um9vdCwgYSA8Y29udGVudD4gZWxlbWVudCwgYSA8c2xvdD5cbiAgICAgIC8vIGVsZW1lbnQsIG5vciBhIDxzaGFkb3c+IGVsZW1lbnQgcmVjdXJzZSBub3JtYWxseS5cbiAgICAgIHZhciBjaGlsZCA9IG5vZGUuZmlyc3RDaGlsZDtcbiAgICAgIHdoaWxlIChjaGlsZCAhPSBudWxsKSB7XG4gICAgICAgIGNvbXBvc2VkVHJlZVdhbGsoY2hpbGQsIGNhbGxiYWNrLCBzaGFkb3dSb290QW5jZXN0b3IpO1xuICAgICAgICBjaGlsZCA9IGNoaWxkLm5leHRTaWJsaW5nO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFkZHMgYSBzdHlsZSBlbGVtZW50IHRvIHRoZSBub2RlIGNvbnRhaW5pbmcgdGhlIGluZXJ0IHNwZWNpZmljIHN0eWxlc1xuICAgICAqIEBwYXJhbSB7IU5vZGV9IG5vZGVcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBhZGRJbmVydFN0eWxlKG5vZGUpIHtcbiAgICAgIGlmIChub2RlLnF1ZXJ5U2VsZWN0b3IoJ3N0eWxlI2luZXJ0LXN0eWxlLCBsaW5rI2luZXJ0LXN0eWxlJykpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgICAgIHN0eWxlLnNldEF0dHJpYnV0ZSgnaWQnLCAnaW5lcnQtc3R5bGUnKTtcbiAgICAgIHN0eWxlLnRleHRDb250ZW50ID0gJ1xcbicgKyAnW2luZXJ0XSB7XFxuJyArICcgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbicgKyAnICBjdXJzb3I6IGRlZmF1bHQ7XFxuJyArICd9XFxuJyArICdcXG4nICsgJ1tpbmVydF0sIFtpbmVydF0gKiB7XFxuJyArICcgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XFxuJyArICcgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XFxuJyArICcgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcXG4nICsgJyAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuJyArICd9XFxuJztcbiAgICAgIG5vZGUuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICAgIH1cblxuICAgIGlmICghRWxlbWVudC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkoJ2luZXJ0JykpIHtcbiAgICAgIC8qKiBAdHlwZSB7IUluZXJ0TWFuYWdlcn0gKi9cbiAgICAgIHZhciBpbmVydE1hbmFnZXIgPSBuZXcgSW5lcnRNYW5hZ2VyKGRvY3VtZW50KTtcblxuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEVsZW1lbnQucHJvdG90eXBlLCAnaW5lcnQnLCB7XG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIC8qKiBAdGhpcyB7IUVsZW1lbnR9ICovXG4gICAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhhc0F0dHJpYnV0ZSgnaW5lcnQnKTtcbiAgICAgICAgfSxcbiAgICAgICAgLyoqIEB0aGlzIHshRWxlbWVudH0gKi9cbiAgICAgICAgc2V0OiBmdW5jdGlvbiBzZXQoaW5lcnQpIHtcbiAgICAgICAgICBpbmVydE1hbmFnZXIuc2V0SW5lcnQodGhpcywgaW5lcnQpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH0pKCk7XG5cbn0pKSk7XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNiBHb29nbGUgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuKCgpID0+IHtcbiAgICB2YXIgX2EsIF9iLCBfYztcbiAgICAvKiBTeW1ib2xzIGZvciBwcml2YXRlIHByb3BlcnRpZXMgKi9cbiAgICBjb25zdCBfYmxvY2tpbmdFbGVtZW50cyA9IFN5bWJvbCgpO1xuICAgIGNvbnN0IF9hbHJlYWR5SW5lcnRFbGVtZW50cyA9IFN5bWJvbCgpO1xuICAgIGNvbnN0IF90b3BFbFBhcmVudHMgPSBTeW1ib2woKTtcbiAgICBjb25zdCBfc2libGluZ3NUb1Jlc3RvcmUgPSBTeW1ib2woKTtcbiAgICBjb25zdCBfcGFyZW50TU8gPSBTeW1ib2woKTtcbiAgICAvKiBTeW1ib2xzIGZvciBwcml2YXRlIHN0YXRpYyBtZXRob2RzICovXG4gICAgY29uc3QgX3RvcENoYW5nZWQgPSBTeW1ib2woKTtcbiAgICBjb25zdCBfc3dhcEluZXJ0ZWRTaWJsaW5nID0gU3ltYm9sKCk7XG4gICAgY29uc3QgX2luZXJ0U2libGluZ3MgPSBTeW1ib2woKTtcbiAgICBjb25zdCBfcmVzdG9yZUluZXJ0ZWRTaWJsaW5ncyA9IFN5bWJvbCgpO1xuICAgIGNvbnN0IF9nZXRQYXJlbnRzID0gU3ltYm9sKCk7XG4gICAgY29uc3QgX2dldERpc3RyaWJ1dGVkQ2hpbGRyZW4gPSBTeW1ib2woKTtcbiAgICBjb25zdCBfaXNJbmVydGFibGUgPSBTeW1ib2woKTtcbiAgICBjb25zdCBfaGFuZGxlTXV0YXRpb25zID0gU3ltYm9sKCk7XG4gICAgY2xhc3MgQmxvY2tpbmdFbGVtZW50c0ltcGwge1xuICAgICAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogVGhlIGJsb2NraW5nIGVsZW1lbnRzLlxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICB0aGlzW19hXSA9IFtdO1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBVc2VkIHRvIGtlZXAgdHJhY2sgb2YgdGhlIHBhcmVudHMgb2YgdGhlIHRvcCBlbGVtZW50LCBmcm9tIHRoZSBlbGVtZW50XG4gICAgICAgICAgICAgKiBpdHNlbGYgdXAgdG8gYm9keS4gV2hlbiB0b3AgY2hhbmdlcywgdGhlIG9sZCB0b3AgbWlnaHQgaGF2ZSBiZWVuIHJlbW92ZWRcbiAgICAgICAgICAgICAqIGZyb20gdGhlIGRvY3VtZW50LCBzbyB3ZSBuZWVkIHRvIG1lbW9pemUgdGhlIGluZXJ0ZWQgcGFyZW50cycgc2libGluZ3NcbiAgICAgICAgICAgICAqIGluIG9yZGVyIHRvIHJlc3RvcmUgdGhlaXIgaW5lcnRlbmVzcyB3aGVuIHRvcCBjaGFuZ2VzLlxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICB0aGlzW19iXSA9IFtdO1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBFbGVtZW50cyB0aGF0IGFyZSBhbHJlYWR5IGluZXJ0IGJlZm9yZSB0aGUgZmlyc3QgYmxvY2tpbmcgZWxlbWVudCBpc1xuICAgICAgICAgICAgICogcHVzaGVkLlxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICB0aGlzW19jXSA9IG5ldyBTZXQoKTtcbiAgICAgICAgfVxuICAgICAgICBkZXN0cnVjdG9yKCkge1xuICAgICAgICAgICAgLy8gUmVzdG9yZSBvcmlnaW5hbCBpbmVydG5lc3MuXG4gICAgICAgICAgICB0aGlzW19yZXN0b3JlSW5lcnRlZFNpYmxpbmdzXSh0aGlzW190b3BFbFBhcmVudHNdKTtcbiAgICAgICAgICAgIC8vIE5vdGUgd2UgZG9uJ3Qgd2FudCB0byBtYWtlIHRoZXNlIHByb3BlcnRpZXMgbnVsbGFibGUgb24gdGhlIGNsYXNzLFxuICAgICAgICAgICAgLy8gc2luY2UgdGhlbiB3ZSdkIG5lZWQgbm9uLW51bGwgY2FzdHMgaW4gbWFueSBwbGFjZXMuIENhbGxpbmcgYSBtZXRob2Qgb25cbiAgICAgICAgICAgIC8vIGEgQmxvY2tpbmdFbGVtZW50cyBpbnN0YW5jZSBhZnRlciBjYWxsaW5nIGRlc3RydWN0b3Igd2lsbCByZXN1bHQgaW4gYW5cbiAgICAgICAgICAgIC8vIGV4Y2VwdGlvbi5cbiAgICAgICAgICAgIGNvbnN0IG51bGxhYmxlID0gdGhpcztcbiAgICAgICAgICAgIG51bGxhYmxlW19ibG9ja2luZ0VsZW1lbnRzXSA9IG51bGw7XG4gICAgICAgICAgICBudWxsYWJsZVtfdG9wRWxQYXJlbnRzXSA9IG51bGw7XG4gICAgICAgICAgICBudWxsYWJsZVtfYWxyZWFkeUluZXJ0RWxlbWVudHNdID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBnZXQgdG9wKCkge1xuICAgICAgICAgICAgY29uc3QgZWxlbXMgPSB0aGlzW19ibG9ja2luZ0VsZW1lbnRzXTtcbiAgICAgICAgICAgIHJldHVybiBlbGVtc1tlbGVtcy5sZW5ndGggLSAxXSB8fCBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHB1c2goZWxlbWVudCkge1xuICAgICAgICAgICAgaWYgKCFlbGVtZW50IHx8IGVsZW1lbnQgPT09IHRoaXMudG9wKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gUmVtb3ZlIGl0IGZyb20gdGhlIHN0YWNrLCB3ZSdsbCBicmluZyBpdCB0byB0aGUgdG9wLlxuICAgICAgICAgICAgdGhpcy5yZW1vdmUoZWxlbWVudCk7XG4gICAgICAgICAgICB0aGlzW190b3BDaGFuZ2VkXShlbGVtZW50KTtcbiAgICAgICAgICAgIHRoaXNbX2Jsb2NraW5nRWxlbWVudHNdLnB1c2goZWxlbWVudCk7XG4gICAgICAgIH1cbiAgICAgICAgcmVtb3ZlKGVsZW1lbnQpIHtcbiAgICAgICAgICAgIGNvbnN0IGkgPSB0aGlzW19ibG9ja2luZ0VsZW1lbnRzXS5pbmRleE9mKGVsZW1lbnQpO1xuICAgICAgICAgICAgaWYgKGkgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpc1tfYmxvY2tpbmdFbGVtZW50c10uc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgLy8gVG9wIGNoYW5nZWQgb25seSBpZiB0aGUgcmVtb3ZlZCBlbGVtZW50IHdhcyB0aGUgdG9wIGVsZW1lbnQuXG4gICAgICAgICAgICBpZiAoaSA9PT0gdGhpc1tfYmxvY2tpbmdFbGVtZW50c10ubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgdGhpc1tfdG9wQ2hhbmdlZF0odGhpcy50b3ApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcG9wKCkge1xuICAgICAgICAgICAgY29uc3QgdG9wID0gdGhpcy50b3A7XG4gICAgICAgICAgICB0b3AgJiYgdGhpcy5yZW1vdmUodG9wKTtcbiAgICAgICAgICAgIHJldHVybiB0b3A7XG4gICAgICAgIH1cbiAgICAgICAgaGFzKGVsZW1lbnQpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzW19ibG9ja2luZ0VsZW1lbnRzXS5pbmRleE9mKGVsZW1lbnQpICE9PSAtMTtcbiAgICAgICAgfVxuICAgICAgICAvKipcbiAgICAgICAgICogU2V0cyBgaW5lcnRgIHRvIGFsbCBkb2N1bWVudCBlbGVtZW50cyBleGNlcHQgdGhlIG5ldyB0b3AgZWxlbWVudCwgaXRzXG4gICAgICAgICAqIHBhcmVudHMsIGFuZCBpdHMgZGlzdHJpYnV0ZWQgY29udGVudC5cbiAgICAgICAgICovXG4gICAgICAgIFsoX2EgPSBfYmxvY2tpbmdFbGVtZW50cywgX2IgPSBfdG9wRWxQYXJlbnRzLCBfYyA9IF9hbHJlYWR5SW5lcnRFbGVtZW50cywgX3RvcENoYW5nZWQpXShuZXdUb3ApIHtcbiAgICAgICAgICAgIGNvbnN0IHRvS2VlcEluZXJ0ID0gdGhpc1tfYWxyZWFkeUluZXJ0RWxlbWVudHNdO1xuICAgICAgICAgICAgY29uc3Qgb2xkUGFyZW50cyA9IHRoaXNbX3RvcEVsUGFyZW50c107XG4gICAgICAgICAgICAvLyBObyBuZXcgdG9wLCByZXNldCBvbGQgdG9wIGlmIGFueS5cbiAgICAgICAgICAgIGlmICghbmV3VG9wKSB7XG4gICAgICAgICAgICAgICAgdGhpc1tfcmVzdG9yZUluZXJ0ZWRTaWJsaW5nc10ob2xkUGFyZW50cyk7XG4gICAgICAgICAgICAgICAgdG9LZWVwSW5lcnQuY2xlYXIoKTtcbiAgICAgICAgICAgICAgICB0aGlzW190b3BFbFBhcmVudHNdID0gW107XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgbmV3UGFyZW50cyA9IHRoaXNbX2dldFBhcmVudHNdKG5ld1RvcCk7XG4gICAgICAgICAgICAvLyBOZXcgdG9wIGlzIG5vdCBjb250YWluZWQgaW4gdGhlIG1haW4gZG9jdW1lbnQhXG4gICAgICAgICAgICBpZiAobmV3UGFyZW50c1tuZXdQYXJlbnRzLmxlbmd0aCAtIDFdLnBhcmVudE5vZGUgIT09IGRvY3VtZW50LmJvZHkpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBFcnJvcignTm9uLWNvbm5lY3RlZCBlbGVtZW50IGNhbm5vdCBiZSBhIGJsb2NraW5nIGVsZW1lbnQnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIENhc3QgaGVyZSBiZWNhdXNlIHdlIGtub3cgd2UnbGwgY2FsbCBfaW5lcnRTaWJsaW5ncyBvbiBuZXdQYXJlbnRzXG4gICAgICAgICAgICAvLyBiZWxvdy5cbiAgICAgICAgICAgIHRoaXNbX3RvcEVsUGFyZW50c10gPSBuZXdQYXJlbnRzO1xuICAgICAgICAgICAgY29uc3QgdG9Ta2lwID0gdGhpc1tfZ2V0RGlzdHJpYnV0ZWRDaGlsZHJlbl0obmV3VG9wKTtcbiAgICAgICAgICAgIC8vIE5vIHByZXZpb3VzIHRvcCBlbGVtZW50LlxuICAgICAgICAgICAgaWYgKCFvbGRQYXJlbnRzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHRoaXNbX2luZXJ0U2libGluZ3NdKG5ld1BhcmVudHMsIHRvU2tpcCwgdG9LZWVwSW5lcnQpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBpID0gb2xkUGFyZW50cy5sZW5ndGggLSAxO1xuICAgICAgICAgICAgbGV0IGogPSBuZXdQYXJlbnRzLmxlbmd0aCAtIDE7XG4gICAgICAgICAgICAvLyBGaW5kIGNvbW1vbiBwYXJlbnQuIEluZGV4IDAgaXMgdGhlIGVsZW1lbnQgaXRzZWxmIChzbyBzdG9wIGJlZm9yZSBpdCkuXG4gICAgICAgICAgICB3aGlsZSAoaSA+IDAgJiYgaiA+IDAgJiYgb2xkUGFyZW50c1tpXSA9PT0gbmV3UGFyZW50c1tqXSkge1xuICAgICAgICAgICAgICAgIGktLTtcbiAgICAgICAgICAgICAgICBqLS07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBJZiB1cCB0aGUgcGFyZW50cyB0cmVlIHRoZXJlIGFyZSAyIGVsZW1lbnRzIHRoYXQgYXJlIHNpYmxpbmdzLCBzd2FwXG4gICAgICAgICAgICAvLyB0aGUgaW5lcnRlZCBzaWJsaW5nLlxuICAgICAgICAgICAgaWYgKG9sZFBhcmVudHNbaV0gIT09IG5ld1BhcmVudHNbal0pIHtcbiAgICAgICAgICAgICAgICB0aGlzW19zd2FwSW5lcnRlZFNpYmxpbmddKG9sZFBhcmVudHNbaV0sIG5ld1BhcmVudHNbal0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gUmVzdG9yZSBvbGQgcGFyZW50cyBzaWJsaW5ncyBpbmVydG5lc3MuXG4gICAgICAgICAgICBpID4gMCAmJiB0aGlzW19yZXN0b3JlSW5lcnRlZFNpYmxpbmdzXShvbGRQYXJlbnRzLnNsaWNlKDAsIGkpKTtcbiAgICAgICAgICAgIC8vIE1ha2UgbmV3IHBhcmVudHMgc2libGluZ3MgaW5lcnQuXG4gICAgICAgICAgICBqID4gMCAmJiB0aGlzW19pbmVydFNpYmxpbmdzXShuZXdQYXJlbnRzLnNsaWNlKDAsIGopLCB0b1NraXAsIG51bGwpO1xuICAgICAgICB9XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBTd2FwcyBpbmVydG5lc3MgYmV0d2VlbiB0d28gc2libGluZyBlbGVtZW50cy5cbiAgICAgICAgICogU2V0cyB0aGUgcHJvcGVydHkgYGluZXJ0YCBvdmVyIHRoZSBhdHRyaWJ1dGUgc2luY2UgdGhlIGluZXJ0IHNwZWNcbiAgICAgICAgICogZG9lc24ndCBzcGVjaWZ5IGlmIGl0IHNob3VsZCBiZSByZWZsZWN0ZWQuXG4gICAgICAgICAqIGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvbXVsdGlwYWdlL2ludGVyYWN0aW9uLmh0bWwjaW5lcnRcbiAgICAgICAgICovXG4gICAgICAgIFtfc3dhcEluZXJ0ZWRTaWJsaW5nXShvbGRJbmVydCwgbmV3SW5lcnQpIHtcbiAgICAgICAgICAgIGNvbnN0IHNpYmxpbmdzVG9SZXN0b3JlID0gb2xkSW5lcnRbX3NpYmxpbmdzVG9SZXN0b3JlXTtcbiAgICAgICAgICAgIC8vIG9sZEluZXJ0IGlzIG5vdCBjb250YWluZWQgaW4gc2libGluZ3MgdG8gcmVzdG9yZSwgc28gd2UgaGF2ZSB0byBjaGVja1xuICAgICAgICAgICAgLy8gaWYgaXQncyBpbmVydGFibGUgYW5kIGlmIGFscmVhZHkgaW5lcnQuXG4gICAgICAgICAgICBpZiAodGhpc1tfaXNJbmVydGFibGVdKG9sZEluZXJ0KSAmJiAhb2xkSW5lcnQuaW5lcnQpIHtcbiAgICAgICAgICAgICAgICBvbGRJbmVydC5pbmVydCA9IHRydWU7XG4gICAgICAgICAgICAgICAgc2libGluZ3NUb1Jlc3RvcmUuYWRkKG9sZEluZXJ0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIElmIG5ld0luZXJ0IHdhcyBhbHJlYWR5IGJldHdlZW4gdGhlIHNpYmxpbmdzIHRvIHJlc3RvcmUsIGl0IG1lYW5zIGl0IGlzXG4gICAgICAgICAgICAvLyBpbmVydGFibGUgYW5kIG11c3QgYmUgcmVzdG9yZWQuXG4gICAgICAgICAgICBpZiAoc2libGluZ3NUb1Jlc3RvcmUuaGFzKG5ld0luZXJ0KSkge1xuICAgICAgICAgICAgICAgIG5ld0luZXJ0LmluZXJ0ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgc2libGluZ3NUb1Jlc3RvcmUuZGVsZXRlKG5ld0luZXJ0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG5ld0luZXJ0W19wYXJlbnRNT10gPSBvbGRJbmVydFtfcGFyZW50TU9dO1xuICAgICAgICAgICAgbmV3SW5lcnRbX3NpYmxpbmdzVG9SZXN0b3JlXSA9IHNpYmxpbmdzVG9SZXN0b3JlO1xuICAgICAgICAgICAgb2xkSW5lcnRbX3BhcmVudE1PXSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIG9sZEluZXJ0W19zaWJsaW5nc1RvUmVzdG9yZV0gPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJlc3RvcmVzIG9yaWdpbmFsIGluZXJ0bmVzcyB0byB0aGUgc2libGluZ3Mgb2YgdGhlIGVsZW1lbnRzLlxuICAgICAgICAgKiBTZXRzIHRoZSBwcm9wZXJ0eSBgaW5lcnRgIG92ZXIgdGhlIGF0dHJpYnV0ZSBzaW5jZSB0aGUgaW5lcnQgc3BlY1xuICAgICAgICAgKiBkb2Vzbid0IHNwZWNpZnkgaWYgaXQgc2hvdWxkIGJlIHJlZmxlY3RlZC5cbiAgICAgICAgICogaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy9tdWx0aXBhZ2UvaW50ZXJhY3Rpb24uaHRtbCNpbmVydFxuICAgICAgICAgKi9cbiAgICAgICAgW19yZXN0b3JlSW5lcnRlZFNpYmxpbmdzXShlbGVtZW50cykge1xuICAgICAgICAgICAgZm9yIChjb25zdCBlbGVtZW50IG9mIGVsZW1lbnRzKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbW8gPSBlbGVtZW50W19wYXJlbnRNT107XG4gICAgICAgICAgICAgICAgbW8uZGlzY29ubmVjdCgpO1xuICAgICAgICAgICAgICAgIGVsZW1lbnRbX3BhcmVudE1PXSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICBjb25zdCBzaWJsaW5ncyA9IGVsZW1lbnRbX3NpYmxpbmdzVG9SZXN0b3JlXTtcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IHNpYmxpbmcgb2Ygc2libGluZ3MpIHtcbiAgICAgICAgICAgICAgICAgICAgc2libGluZy5pbmVydCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbGVtZW50W19zaWJsaW5nc1RvUmVzdG9yZV0gPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEluZXJ0cyB0aGUgc2libGluZ3Mgb2YgdGhlIGVsZW1lbnRzIGV4Y2VwdCB0aGUgZWxlbWVudHMgdG8gc2tpcC4gU3RvcmVzXG4gICAgICAgICAqIHRoZSBpbmVydGVkIHNpYmxpbmdzIGludG8gdGhlIGVsZW1lbnQncyBzeW1ib2wgYF9zaWJsaW5nc1RvUmVzdG9yZWAuXG4gICAgICAgICAqIFBhc3MgYHRvS2VlcEluZXJ0YCB0byBjb2xsZWN0IHRoZSBhbHJlYWR5IGluZXJ0IGVsZW1lbnRzLlxuICAgICAgICAgKiBTZXRzIHRoZSBwcm9wZXJ0eSBgaW5lcnRgIG92ZXIgdGhlIGF0dHJpYnV0ZSBzaW5jZSB0aGUgaW5lcnQgc3BlY1xuICAgICAgICAgKiBkb2Vzbid0IHNwZWNpZnkgaWYgaXQgc2hvdWxkIGJlIHJlZmxlY3RlZC5cbiAgICAgICAgICogaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy9tdWx0aXBhZ2UvaW50ZXJhY3Rpb24uaHRtbCNpbmVydFxuICAgICAgICAgKi9cbiAgICAgICAgW19pbmVydFNpYmxpbmdzXShlbGVtZW50cywgdG9Ta2lwLCB0b0tlZXBJbmVydCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBlbGVtZW50IG9mIGVsZW1lbnRzKSB7XG4gICAgICAgICAgICAgICAgLy8gQXNzdW1lIGVsZW1lbnQgaXMgbm90IGEgRG9jdW1lbnQsIHNvIGl0IG11c3QgaGF2ZSBhIHBhcmVudE5vZGUuXG4gICAgICAgICAgICAgICAgY29uc3QgcGFyZW50ID0gZWxlbWVudC5wYXJlbnROb2RlO1xuICAgICAgICAgICAgICAgIGNvbnN0IGNoaWxkcmVuID0gcGFyZW50LmNoaWxkcmVuO1xuICAgICAgICAgICAgICAgIGNvbnN0IGluZXJ0ZWRTaWJsaW5ncyA9IG5ldyBTZXQoKTtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGNoaWxkcmVuLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNpYmxpbmcgPSBjaGlsZHJlbltqXTtcbiAgICAgICAgICAgICAgICAgICAgLy8gU2tpcCB0aGUgaW5wdXQgZWxlbWVudCwgaWYgbm90IGluZXJ0YWJsZSBvciB0byBiZSBza2lwcGVkLlxuICAgICAgICAgICAgICAgICAgICBpZiAoc2libGluZyA9PT0gZWxlbWVudCB8fCAhdGhpc1tfaXNJbmVydGFibGVdKHNpYmxpbmcpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAodG9Ta2lwICYmIHRvU2tpcC5oYXMoc2libGluZykpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvLyBTaG91bGQgYmUgY29sbGVjdGVkIHNpbmNlIGFscmVhZHkgaW5lcnRlZC5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHRvS2VlcEluZXJ0ICYmIHNpYmxpbmcuaW5lcnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvS2VlcEluZXJ0LmFkZChzaWJsaW5nKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpYmxpbmcuaW5lcnQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgaW5lcnRlZFNpYmxpbmdzLmFkZChzaWJsaW5nKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBTdG9yZSB0aGUgc2libGluZ3MgdGhhdCB3ZXJlIGluZXJ0ZWQuXG4gICAgICAgICAgICAgICAgZWxlbWVudFtfc2libGluZ3NUb1Jlc3RvcmVdID0gaW5lcnRlZFNpYmxpbmdzO1xuICAgICAgICAgICAgICAgIC8vIE9ic2VydmUgb25seSBpbW1lZGlhdGUgY2hpbGRyZW4gbXV0YXRpb25zIG9uIHRoZSBwYXJlbnQuXG4gICAgICAgICAgICAgICAgY29uc3QgbW8gPSBuZXcgTXV0YXRpb25PYnNlcnZlcih0aGlzW19oYW5kbGVNdXRhdGlvbnNdLmJpbmQodGhpcykpO1xuICAgICAgICAgICAgICAgIGVsZW1lbnRbX3BhcmVudE1PXSA9IG1vO1xuICAgICAgICAgICAgICAgIGxldCBwYXJlbnRUb09ic2VydmUgPSBwYXJlbnQ7XG4gICAgICAgICAgICAgICAgLy8gSWYgd2UncmUgdXNpbmcgdGhlIFNoYWR5RE9NIHBvbHlmaWxsLCB0aGVuIG91ciBwYXJlbnQgY291bGQgYmUgYVxuICAgICAgICAgICAgICAgIC8vIHNoYWR5IHJvb3QsIHdoaWNoIGlzIGFuIG9iamVjdCB0aGF0IGFjdHMgbGlrZSBhIFNoYWRvd1Jvb3QsIGJ1dCBpc24ndFxuICAgICAgICAgICAgICAgIC8vIGFjdHVhbGx5IGEgbm9kZSBpbiB0aGUgcmVhbCBET00uIE9ic2VydmUgdGhlIHJlYWwgRE9NIHBhcmVudCBpbnN0ZWFkLlxuICAgICAgICAgICAgICAgIGNvbnN0IG1heWJlU2hhZHlSb290ID0gcGFyZW50VG9PYnNlcnZlO1xuICAgICAgICAgICAgICAgIGlmIChtYXliZVNoYWR5Um9vdC5fX3NoYWR5ICYmIG1heWJlU2hhZHlSb290Lmhvc3QpIHtcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50VG9PYnNlcnZlID0gbWF5YmVTaGFkeVJvb3QuaG9zdDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbW8ub2JzZXJ2ZShwYXJlbnRUb09ic2VydmUsIHtcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRMaXN0OiB0cnVlLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBIYW5kbGVzIG5ld2x5IGFkZGVkL3JlbW92ZWQgbm9kZXMgYnkgdG9nZ2xpbmcgdGhlaXIgaW5lcnRuZXNzLlxuICAgICAgICAgKiBJdCBhbHNvIGNoZWNrcyBpZiB0aGUgY3VycmVudCB0b3AgQmxvY2tpbmcgRWxlbWVudCBoYXMgYmVlbiByZW1vdmVkLFxuICAgICAgICAgKiBub3RpZnlpbmcgYW5kIHJlbW92aW5nIGl0LlxuICAgICAgICAgKi9cbiAgICAgICAgW19oYW5kbGVNdXRhdGlvbnNdKG11dGF0aW9ucykge1xuICAgICAgICAgICAgY29uc3QgcGFyZW50cyA9IHRoaXNbX3RvcEVsUGFyZW50c107XG4gICAgICAgICAgICBjb25zdCB0b0tlZXBJbmVydCA9IHRoaXNbX2FscmVhZHlJbmVydEVsZW1lbnRzXTtcbiAgICAgICAgICAgIGZvciAoY29uc3QgbXV0YXRpb24gb2YgbXV0YXRpb25zKSB7XG4gICAgICAgICAgICAgICAgLy8gSWYgdGhlIHRhcmdldCBpcyBhIHNoYWRvd1Jvb3QsIGdldCBpdHMgaG9zdCBhcyB3ZSBza2lwIHNoYWRvd1Jvb3RzIHdoZW5cbiAgICAgICAgICAgICAgICAvLyBjb21wdXRpbmcgX3RvcEVsUGFyZW50cy5cbiAgICAgICAgICAgICAgICBjb25zdCB0YXJnZXQgPSBtdXRhdGlvbi50YXJnZXQuaG9zdCB8fCBtdXRhdGlvbi50YXJnZXQ7XG4gICAgICAgICAgICAgICAgY29uc3QgaWR4ID0gdGFyZ2V0ID09PSBkb2N1bWVudC5ib2R5ID9cbiAgICAgICAgICAgICAgICAgICAgcGFyZW50cy5sZW5ndGggOlxuICAgICAgICAgICAgICAgICAgICBwYXJlbnRzLmluZGV4T2YodGFyZ2V0KTtcbiAgICAgICAgICAgICAgICBjb25zdCBpbmVydGVkQ2hpbGQgPSBwYXJlbnRzW2lkeCAtIDFdO1xuICAgICAgICAgICAgICAgIGNvbnN0IGluZXJ0ZWRTaWJsaW5ncyA9IGluZXJ0ZWRDaGlsZFtfc2libGluZ3NUb1Jlc3RvcmVdO1xuICAgICAgICAgICAgICAgIC8vIFRvIHJlc3RvcmUuXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtdXRhdGlvbi5yZW1vdmVkTm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2libGluZyA9IG11dGF0aW9uLnJlbW92ZWROb2Rlc1tpXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNpYmxpbmcgPT09IGluZXJ0ZWRDaGlsZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5pbmZvKCdEZXRlY3RlZCByZW1vdmFsIG9mIHRoZSB0b3AgQmxvY2tpbmcgRWxlbWVudC4nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucG9wKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKGluZXJ0ZWRTaWJsaW5ncy5oYXMoc2libGluZykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpYmxpbmcuaW5lcnQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGluZXJ0ZWRTaWJsaW5ncy5kZWxldGUoc2libGluZyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gVG8gaW5lcnQuXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtdXRhdGlvbi5hZGRlZE5vZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNpYmxpbmcgPSBtdXRhdGlvbi5hZGRlZE5vZGVzW2ldO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXNbX2lzSW5lcnRhYmxlXShzaWJsaW5nKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHRvS2VlcEluZXJ0ICYmIHNpYmxpbmcuaW5lcnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvS2VlcEluZXJ0LmFkZChzaWJsaW5nKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpYmxpbmcuaW5lcnQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgaW5lcnRlZFNpYmxpbmdzLmFkZChzaWJsaW5nKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvKipcbiAgICAgICAgICogUmV0dXJucyBpZiB0aGUgZWxlbWVudCBpcyBpbmVydGFibGUuXG4gICAgICAgICAqL1xuICAgICAgICBbX2lzSW5lcnRhYmxlXShlbGVtZW50KSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2UgPT09IC9eKHN0eWxlfHRlbXBsYXRlfHNjcmlwdCkkLy50ZXN0KGVsZW1lbnQubG9jYWxOYW1lKTtcbiAgICAgICAgfVxuICAgICAgICAvKipcbiAgICAgICAgICogUmV0dXJucyB0aGUgbGlzdCBvZiBuZXdQYXJlbnRzIG9mIGFuIGVsZW1lbnQsIHN0YXJ0aW5nIGZyb20gZWxlbWVudFxuICAgICAgICAgKiAoaW5jbHVkZWQpIHVwIHRvIGBkb2N1bWVudC5ib2R5YCAoZXhjbHVkZWQpLlxuICAgICAgICAgKi9cbiAgICAgICAgW19nZXRQYXJlbnRzXShlbGVtZW50KSB7XG4gICAgICAgICAgICBjb25zdCBwYXJlbnRzID0gW107XG4gICAgICAgICAgICBsZXQgY3VycmVudCA9IGVsZW1lbnQ7XG4gICAgICAgICAgICAvLyBTdG9wIHRvIGJvZHkuXG4gICAgICAgICAgICB3aGlsZSAoY3VycmVudCAmJiBjdXJyZW50ICE9PSBkb2N1bWVudC5ib2R5KSB7XG4gICAgICAgICAgICAgICAgLy8gU2tpcCBzaGFkb3cgcm9vdHMuXG4gICAgICAgICAgICAgICAgaWYgKGN1cnJlbnQubm9kZVR5cGUgPT09IE5vZGUuRUxFTUVOVF9OT0RFKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhcmVudHMucHVzaChjdXJyZW50KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gU2hhZG93RG9tIHYxXG4gICAgICAgICAgICAgICAgaWYgKGN1cnJlbnQuYXNzaWduZWRTbG90KSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIENvbGxlY3Qgc2xvdHMgZnJvbSBkZWVwZXN0IHNsb3QgdG8gdG9wLlxuICAgICAgICAgICAgICAgICAgICB3aGlsZSAoY3VycmVudCA9IGN1cnJlbnQuYXNzaWduZWRTbG90KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnRzLnB1c2goY3VycmVudCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLy8gQ29udGludWUgdGhlIHNlYXJjaCBvbiB0aGUgdG9wIHNsb3QuXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnQgPSBwYXJlbnRzLnBvcCgpO1xuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY3VycmVudCA9IGN1cnJlbnQucGFyZW50Tm9kZSB8fFxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50Lmhvc3Q7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcGFyZW50cztcbiAgICAgICAgfVxuICAgICAgICAvKipcbiAgICAgICAgICogUmV0dXJucyB0aGUgZGlzdHJpYnV0ZWQgY2hpbGRyZW4gb2YgdGhlIGVsZW1lbnQncyBzaGFkb3cgcm9vdC5cbiAgICAgICAgICogUmV0dXJucyBudWxsIGlmIHRoZSBlbGVtZW50IGRvZXNuJ3QgaGF2ZSBhIHNoYWRvdyByb290LlxuICAgICAgICAgKi9cbiAgICAgICAgW19nZXREaXN0cmlidXRlZENoaWxkcmVuXShlbGVtZW50KSB7XG4gICAgICAgICAgICBjb25zdCBzaGFkb3dSb290ID0gZWxlbWVudC5zaGFkb3dSb290O1xuICAgICAgICAgICAgaWYgKCFzaGFkb3dSb290KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgU2V0KCk7XG4gICAgICAgICAgICBsZXQgaTtcbiAgICAgICAgICAgIGxldCBqO1xuICAgICAgICAgICAgbGV0IG5vZGVzO1xuICAgICAgICAgICAgY29uc3Qgc2xvdHMgPSBzaGFkb3dSb290LnF1ZXJ5U2VsZWN0b3JBbGwoJ3Nsb3QnKTtcbiAgICAgICAgICAgIGlmIChzbG90cy5sZW5ndGggJiYgc2xvdHNbMF0uYXNzaWduZWROb2Rlcykge1xuICAgICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBzbG90cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBub2RlcyA9IHNsb3RzW2ldLmFzc2lnbmVkTm9kZXMoe1xuICAgICAgICAgICAgICAgICAgICAgICAgZmxhdHRlbjogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIGZvciAoaiA9IDA7IGogPCBub2Rlcy5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5vZGVzW2pdLm5vZGVUeXBlID09PSBOb2RlLkVMRU1FTlRfTk9ERSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdC5hZGQobm9kZXNbal0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIE5vIG5lZWQgdG8gc2VhcmNoIGZvciA8Y29udGVudD4uXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9XG4gICAgfVxuICAgIGRvY3VtZW50LiRibG9ja2luZ0VsZW1lbnRzID1cbiAgICAgICAgbmV3IEJsb2NraW5nRWxlbWVudHNJbXBsKCk7XG59KSgpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YmxvY2tpbmctZWxlbWVudHMuanMubWFwIiwiaW1wb3J0IFwid2ljZy1pbmVydFwiO1xyXG5pbXBvcnQgXCJibG9ja2luZy1lbGVtZW50c1wiO1xyXG5pbXBvcnQgeyB1c2VMYXlvdXRFZmZlY3QgfSBmcm9tIFwicHJlYWN0L2hvb2tzXCI7XHJcbmNvbnN0IGJsb2NraW5nRWxlbWVudHMgPSBkb2N1bWVudC4kYmxvY2tpbmdFbGVtZW50cztcclxuLyoqXHJcbiAqIEFsbG93cyBhbiBlbGVtZW50IHRvIHRyYXAgZm9jdXMgYnkgYXBwbHlpbmcgdGhlIFwiaW5lcnRcIiBhdHRyaWJ1dGUgdG8gYWxsIHNpYmxpbmcsIGF1bnQsIGFuZCB1bmNsZSBub2Rlcy5cclxuICpcclxuICogQXV0b21hdGljYWxseSBoYW5kbGVzIGNvbnNlY3V0aXZlIGNhbGxzIHdpdGggYSBsb29zZWx5IGFwcGxpZWQgc3RhY2sgb3BlcmF0aW9uXHJcbiAqIChzcGVjaWZpY2FsbHkgdmlhIGBibG9ja2luZ0VsZW1lbnRzYCwgd2l0aCBhIHNtYWxsIHBvbHlmaWxsIGJlY2F1c2UgSSdtIG5vdCBzdXJlIGhvdyBsb25nXHJcbiAqIGl0J2xsIHRha2UgdG8gZmluZCBpdHMgd2F5IGludG8gdGhlIHNwZWMsIGlmIGV2ZXIpXHJcbiAqIEBwYXJhbSB0YXJnZXRcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiB1c2VCbG9ja2luZ0VsZW1lbnQodGFyZ2V0KSB7XHJcbiAgICAvKipcclxuICAgICAqIFB1c2gvcG9wIHRoZSBlbGVtZW50IGZyb20gdGhlIGJsb2NraW5nRWxlbWVudHMgc3RhY2suXHJcbiAgICAgKi9cclxuICAgIHVzZUxheW91dEVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKHRhcmdldCkge1xyXG4gICAgICAgICAgICBibG9ja2luZ0VsZW1lbnRzLnB1c2godGFyZ2V0KTtcclxuICAgICAgICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGJsb2NraW5nRWxlbWVudHMucmVtb3ZlKHRhcmdldCk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW3RhcmdldF0pO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRUb3BFbGVtZW50KCkge1xyXG4gICAgcmV0dXJuIGJsb2NraW5nRWxlbWVudHMudG9wO1xyXG59XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZS1ibG9ja2luZy1lbGVtZW50LmpzLm1hcCIsImltcG9ydCB7IHVzZUxheW91dEVmZmVjdCB9IGZyb20gXCJwcmVhY3QvaG9va3NcIjtcclxuaW1wb3J0IHsgaXNGb2N1c2FibGUgfSBmcm9tIFwidGFiYmFibGVcIjtcclxuaW1wb3J0IHsgdXNlQWN0aXZlRWxlbWVudCB9IGZyb20gXCIuL3VzZS1hY3RpdmUtZWxlbWVudFwiO1xyXG5pbXBvcnQgeyBnZXRUb3BFbGVtZW50LCB1c2VCbG9ja2luZ0VsZW1lbnQgfSBmcm9tIFwiLi91c2UtYmxvY2tpbmctZWxlbWVudFwiO1xyXG5pbXBvcnQgeyB1c2VNZXJnZWRQcm9wcyB9IGZyb20gXCIuL3VzZS1tZXJnZWQtcHJvcHNcIjtcclxuaW1wb3J0IHsgdXNlUmVmRWxlbWVudCB9IGZyb20gXCIuL3VzZS1yZWYtZWxlbWVudFwiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCIuL3VzZS1zdGF0ZVwiO1xyXG5jb25zdCBlbGVtZW50c1RvUmVzdG9yZUZvY3VzVG8gPSBuZXcgTWFwKCk7XHJcbmV4cG9ydCBmdW5jdGlvbiB1c2VGb2N1c1RyYXAoeyB0cmFwQWN0aXZlIH0pIHtcclxuICAgIGNvbnN0IHsgZWxlbWVudCwgdXNlUmVmRWxlbWVudFByb3BzLCBnZXRFbGVtZW50IH0gPSB1c2VSZWZFbGVtZW50KCk7XHJcbiAgICBjb25zdCBbbGFzdEFjdGl2ZUVsZW1lbnQsIHNldExhc3RBY3RpdmVFbGVtZW50LCBnZXRMYXN0QWN0aXZlRWxlbWVudF0gPSB1c2VTdGF0ZShudWxsKTtcclxuICAgIHVzZUFjdGl2ZUVsZW1lbnQoeyBzZXRMYXN0QWN0aXZlRWxlbWVudCB9KTtcclxuICAgIC8vIFdoZW4gdGhlIHRyYXAgYmVjb21lcyBhY3RpdmUsIGJlZm9yZSB3ZSBsZXQgdGhlIGJsb2NraW5nRWxlbWVudHMgaG9vayBydW4sXHJcbiAgICAvLyBrZWVwIHRyYWNrIG9mIHdoYXRldmVyJ3MgY3VycmVudGx5IGZvY3VzZWQgYW5kIHNhdmUgaXQuXHJcbiAgICB1c2VMYXlvdXRFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmICh0cmFwQWN0aXZlICYmIGVsZW1lbnQpIHtcclxuICAgICAgICAgICAgLy8gU2F2ZSB0aGUgY3VycmVudGx5IGZvY3VzZWQgZWxlbWVudFxyXG4gICAgICAgICAgICAvLyB0byB3aGF0ZXZlcidzIGN1cnJlbnRseSBhdCB0aGUgdG9wIG9mIHRoZSBzdGFja1xyXG4gICAgICAgICAgICBlbGVtZW50c1RvUmVzdG9yZUZvY3VzVG8uc2V0KGdldFRvcEVsZW1lbnQoKSwgZ2V0TGFzdEFjdGl2ZUVsZW1lbnQoKSA/PyBkb2N1bWVudC5ib2R5KTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbdHJhcEFjdGl2ZSwgZWxlbWVudF0pO1xyXG4gICAgdXNlQmxvY2tpbmdFbGVtZW50KHRyYXBBY3RpdmUgPyBlbGVtZW50IDogbnVsbCk7XHJcbiAgICAvKipcclxuICAgICAqIEFueSB0aW1lIHdlIGFjdGl2YXRlIG9yIGRlYWN0aXZhdGUgdGhlIHRyYXAsXHJcbiAgICAgKiBjaGFuZ2UgZm9jdXMgdG8gc29tZXRoaW5nIGVsc2UgKHNvbWV0aGluZyBpblxyXG4gICAgICogdGhlIHRyYXAgaWYgaXQncyBhY3RpdmUsIG9yIHdoYXRldmVyIHdlJ3ZlXHJcbiAgICAgKiB0cmFja2VkIGluIGVsZW1lbnRzVG9SZXN0b3JlRm9jdXNUbyBpZiBub3QpXHJcbiAgICAgKi9cclxuICAgIHVzZUxheW91dEVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKHRyYXBBY3RpdmUgJiYgZWxlbWVudCkge1xyXG4gICAgICAgICAgICBsZXQgcmFmSGFuZGxlID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIC8vIFRPRE86IFRoaXMgZXh0cmEgcXVldWVNaWNyb3Rhc2sgaXMgbmVlZGVkIGZvclxyXG4gICAgICAgICAgICAgICAgLy8gLi4ucmVhc29ucz9cclxuICAgICAgICAgICAgICAgIHF1ZXVlTWljcm90YXNrKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBmaW5kRmlyc3RGb2N1c2FibGUoZWxlbWVudCk/LmZvY3VzKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmFmSGFuZGxlID0gMDtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChyYWZIYW5kbGUpXHJcbiAgICAgICAgICAgICAgICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUocmFmSGFuZGxlKTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoZWxlbWVudCkge1xyXG4gICAgICAgICAgICAvLyBSZXN0b3JlIHRoZSBmb2N1cyB0byB0aGUgZWxlbWVudFxyXG4gICAgICAgICAgICAvLyB0aGF0IGhhcyByZXR1cm5lZCB0byB0aGUgdG9wIG9mIHRoZSBzdGFja1xyXG4gICAgICAgICAgICBsZXQgcmFmSGFuZGxlID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHF1ZXVlTWljcm90YXNrKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50c1RvUmVzdG9yZUZvY3VzVG8uZ2V0KGdldFRvcEVsZW1lbnQoKSk/LmZvY3VzKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmFmSGFuZGxlID0gMDtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChyYWZIYW5kbGUpXHJcbiAgICAgICAgICAgICAgICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUocmFmSGFuZGxlKTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbdHJhcEFjdGl2ZSwgZWxlbWVudF0pO1xyXG4gICAgY29uc3QgdXNlRm9jdXNUcmFwUHJvcHMgPSAoKHByb3BzKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHVzZU1lcmdlZFByb3BzKCkoeyBcImFyaWEtbW9kYWxcIjogdHJhcEFjdGl2ZSA/IFwidHJ1ZVwiIDogdW5kZWZpbmVkIH0sIHVzZVJlZkVsZW1lbnRQcm9wcyhwcm9wcykpO1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHVzZUZvY3VzVHJhcFByb3BzLFxyXG4gICAgICAgIGVsZW1lbnQsXHJcbiAgICAgICAgZ2V0RWxlbWVudFxyXG4gICAgfTtcclxufVxyXG4vKipcclxuICogUmV0dXJucyB0aGUgZmlyc3QgZm9jdXNhYmxlIGVsZW1lbnQgY29udGFpbmVkIHdpdGhpbiB0aGUgZ2l2ZW4gbm9kZSwgb3IgbnVsbCBpZiBub25lIGFyZSBmb3VuZC5cclxuICogQHBhcmFtIGVsZW1lbnRcclxuICogQHJldHVybnNcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBmaW5kRmlyc3RGb2N1c2FibGUoZWxlbWVudCkge1xyXG4gICAgY29uc3QgdHJlZVdhbGtlciA9IGRvY3VtZW50LmNyZWF0ZVRyZWVXYWxrZXIoZWxlbWVudCwgTm9kZUZpbHRlci5TSE9XX0VMRU1FTlQsIHsgYWNjZXB0Tm9kZTogKG5vZGUpID0+IChub2RlIGluc3RhbmNlb2YgRWxlbWVudCAmJiBpc0ZvY3VzYWJsZShub2RlKSA/IE5vZGVGaWx0ZXIuRklMVEVSX0FDQ0VQVCA6IE5vZGVGaWx0ZXIuRklMVEVSX1NLSVApIH0pO1xyXG4gICAgY29uc3QgZmlyc3RGb2N1c2FibGUgPSB0cmVlV2Fsa2VyLmZpcnN0Q2hpbGQoKTtcclxuICAgIHJldHVybiBmaXJzdEZvY3VzYWJsZTtcclxufVxyXG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2UtZm9jdXMtdHJhcC5qcy5tYXAiLG51bGwsbnVsbCxudWxsLG51bGxdLCJuYW1lcyI6WyJsIiwidSIsInQiLCJvIiwiciIsImYiLCJlIiwiYyIsInMiLCJhIiwiaCIsInYiLCJ5IiwiZCIsIl8iLCJrIiwiYiIsIm0iLCJnIiwiaiIsInciLCJ4IiwiUCIsIk0iLCJBIiwiQyIsIkgiLCIkIiwiVCIsIk8iLCJMIiwiUyIsIm4iLCJjcmVhdGVFbGVtZW50IiwiRnJhZ21lbnQiLCJ1c2VDYWxsYmFjayIsInVzZVN0YXRlUCIsInVzZVJlZiIsInVzZUltcGVyYXRpdmVIYW5kbGUiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZUxheW91dEVmZmVjdCIsInVzZUxheW91dEVmZmVjdE5hdGl2ZSIsInVzZUVmZmVjdE5hdGl2ZSIsImlkZW50aXR5IiwidGhpcyIsIlJhbmRvbVdvcmRzIiwiY3JlYXRlQ29udGV4dCIsIm1lbW8iLCJ1c2VDb250ZXh0IiwicmVuZGVyIl0sIm1hcHBpbmdzIjoiOzs7QUFBRyxRQUFDLENBQUMsQ0FBQ0EsR0FBQyxDQUFDQyxHQUFDLENBQUdDLEdBQUMsQ0FBQ0MsR0FBQyxDQUFDQyxHQUFDLENBQUNDLEdBQUMsQ0FBQ0MsR0FBQyxDQUFDLEVBQUUsQ0FBQ0MsR0FBQyxDQUFDLEVBQUUsQ0FBQ0MsR0FBQyxDQUFDLG9FQUFvRSxTQUFTQyxHQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsU0FBU0MsR0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxFQUFDLENBQUMsU0FBU0MsR0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsRUFBRSxPQUFPLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU9DLEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsU0FBU0EsR0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxFQUFFWCxHQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxJQUFJLEVBQUVELEdBQUMsQ0FBQyxLQUFLLEVBQUVBLEdBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFtQyxTQUFTYSxHQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsUUFBUSxDQUFDLFNBQVNDLEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFDLENBQUMsU0FBU0MsR0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBRSxDQUFDQSxHQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsR0FBRyxDQUFDLE9BQU0sVUFBVSxFQUFFLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQ0EsR0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTQyxHQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLE9BQU9BLEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVNDLEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUVmLEdBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQ2dCLEdBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRWQsR0FBQyxHQUFHSixHQUFDLENBQUMsaUJBQWlCLEdBQUcsQ0FBQyxDQUFDSSxHQUFDLENBQUNKLEdBQUMsQ0FBQyxpQkFBaUIsR0FBR0csR0FBQyxFQUFFZSxHQUFDLEVBQUMsQ0FBQyxTQUFTQSxHQUFDLEVBQUUsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDQSxHQUFDLENBQUMsR0FBRyxDQUFDaEIsR0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUNBLEdBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUNBLEdBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDTyxHQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQ1UsR0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQ0osR0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsRUFBRUMsR0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsU0FBU0ksR0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRWIsR0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLFNBQVMsRUFBRSxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLE9BQU8sQ0FBQyxFQUFFLFFBQVEsRUFBRSxPQUFPLENBQUMsRUFBRSxRQUFRLEVBQUUsT0FBTyxDQUFDLENBQUNLLEdBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQ0EsR0FBQyxDQUFDQyxHQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQ0QsR0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFJLENBQUNPLEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUViLEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsRUFBRSxPQUFPLENBQUMsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDZSxHQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUNDLEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxRQUFRLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsT0FBTyxDQUFDLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQ1AsR0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsVUFBVSxFQUFFLE9BQU8sQ0FBQyxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQ0EsR0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDUSxHQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFDLENBQUMsU0FBU0YsR0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxFQUFFLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQ0EsR0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUNDLEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxTQUFTRSxHQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxTQUFTLEVBQUUsT0FBTyxDQUFDLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUNBLEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBU0YsR0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxLQUFLLEdBQUcsSUFBSSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsT0FBTyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsU0FBU0csR0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsVUFBVSxHQUFHLENBQUMsRUFBRSxLQUFLLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUVDLEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxVQUFVLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsVUFBVSxHQUFHLENBQUMsRUFBRSxLQUFLLEdBQUcsQ0FBQyxFQUFFLE9BQU8sR0FBRyxDQUFDLEVBQUUsU0FBUyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFQSxHQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLFNBQVNDLEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLFFBQVEsRUFBRSxPQUFPLENBQUMsRUFBRW5CLEdBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFJLENBQUMsU0FBU2tCLEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsT0FBTyxHQUFHLENBQUMsQ0FBQyxHQUFHLFFBQVEsRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsS0FBSSxDQUFDLEdBQUcsUUFBUSxFQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFQyxHQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFQSxHQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsS0FBSyxHQUFHLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUNDLEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUNBLEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFHLHlCQUF5QixHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssR0FBRyxNQUFNLEdBQUcsQ0FBQyxFQUFFLE1BQU0sR0FBRyxDQUFDLEVBQUUsTUFBTSxHQUFHLENBQUMsRUFBRSxVQUFVLEdBQUcsQ0FBQyxFQUFFLFVBQVUsR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLFVBQVUsRUFBRSxPQUFPLENBQUMsR0FBRyxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzVCLEdBQUMsQ0FBQyxLQUFLLENBQUNBLEdBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsU0FBUzRCLEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzVCLEdBQUMsQ0FBQyxLQUFLLENBQUNBLEdBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsU0FBU21CLEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxXQUFXLENBQUMsT0FBTyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDbkIsR0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLFVBQVUsRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsV0FBVyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSWMsR0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDZSxHQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLHdCQUF3QixHQUFHLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDcEIsR0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQ0EsR0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLHdCQUF3QixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLHdCQUF3QixFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsa0JBQWtCLEVBQUUsQ0FBQyxDQUFDLGtCQUFrQixFQUFFLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxLQUFJLENBQUMsR0FBRyxJQUFJLEVBQUUsQ0FBQyxDQUFDLHdCQUF3QixFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyx5QkFBeUIsRUFBRSxDQUFDLENBQUMseUJBQXlCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLHFCQUFxQixFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxtQkFBbUIsRUFBRSxDQUFDLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxrQkFBa0IsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQ1QsR0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLGVBQWUsR0FBRyxDQUFDLENBQUNTLEdBQUMsQ0FBQ0EsR0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsZUFBZSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLHVCQUF1QixHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsdUJBQXVCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksR0FBR0ksR0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQ08sR0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFDLENBQUMsS0FBSyxJQUFJLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUNVLEdBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDOUIsR0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDQSxHQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUNBLEdBQUMsQ0FBQyxHQUFHLEVBQUVBLEdBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUNBLEdBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxTQUFTOEIsR0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxHQUFHLENBQUMsQ0FBQyxPQUFPLFFBQVEsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDLDRCQUE0QixDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsR0FBRyxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRXhCLEdBQUMsRUFBRSx1QkFBdUIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLHVCQUF1QixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsRUFBQyxDQUFDLEdBQUdtQixHQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDTCxHQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLGVBQWUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUVMLEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUVMLEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsT0FBTyxHQUFHLENBQUMsRUFBRSxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxFQUFFLFVBQVUsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRWdCLEdBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxHQUFHLENBQUMsRUFBRSxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBTyxFQUFFQSxHQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsU0FBU0gsR0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLFVBQVUsRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxFQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQ3ZCLEdBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBR0EsR0FBQyxDQUFDLE9BQU8sRUFBRUEsR0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUMsR0FBRyxFQUFFdUIsR0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLG9CQUFvQixDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsb0JBQW9CLEdBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDdkIsR0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEtBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxFQUFFLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRVUsR0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFDLENBQUMsU0FBU21CLEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBU0UsR0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQy9CLEdBQUMsQ0FBQyxFQUFFLEVBQUVBLEdBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLEVBQUUsT0FBTyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQ21CLEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLENBQUNSLEdBQUMsQ0FBQ0UsR0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFUCxHQUFDLENBQUNBLEdBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUErTyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQ0QsR0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sSUFBSSxDQUFDLGVBQWUsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMscUJBQXFCLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUNZLEdBQUMsRUFBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLG9CQUFvQixDQUFDLENBQUMsQ0FBQyxvQkFBb0IsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBQyxFQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQ1YsR0FBQyxDQUFDLEtBQUssQ0FBQ1AsR0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLEdBQUcsSUFBSSxFQUFFLENBQUMsQ0FBQyx3QkFBd0IsR0FBRyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxpQkFBaUIsR0FBRyxDQUFDLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDQyxHQUFDLENBQUMsQ0FBQyxDQUF1RGEsR0FBQyxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUNMLEdBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLFVBQVUsRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDQSxHQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRUEsR0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDUSxHQUFDLENBQUMsSUFBSSxDQUFDLEVBQUMsQ0FBQyxDQUFDSCxHQUFDLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUNHLEdBQUMsQ0FBQyxJQUFJLENBQUMsRUFBQyxDQUFDLENBQUNILEdBQUMsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDRCxHQUFDLENBQUNYLEdBQUMsQ0FBQyxFQUFFLENBQUNDLEdBQUMsQ0FBQyxVQUFVLEVBQUUsT0FBTyxPQUFPLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLFVBQVUsQ0FBQ2UsR0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUNiLEdBQUMsQ0FBQyxDQUFDOztJQ0FsaFQsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDMkIsR0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUNBLEdBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDQSxHQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQ0EsR0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUNBLEdBQUMsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDQSxHQUFDLENBQUMsR0FBRyxFQUFFQSxHQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUNaLEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUNBLEdBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDWSxHQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQ0EsR0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLE9BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxVQUFVLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsU0FBU1IsR0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBNE4sU0FBUyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUNOLEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQ0MsR0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDYSxHQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUUsQ0FBQ0EsR0FBQyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDQSxHQUFDLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQ2QsR0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUNDLEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQ2EsR0FBQyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHQSxHQUFDLENBQUMscUJBQXFCLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQ0EsR0FBQyxDQUFDLHFCQUFxQixHQUFHLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLG9CQUFvQixDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBQyxDQUFDLENBQUNBLEdBQUMsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQ2QsR0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLE9BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFQyxHQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQ2EsR0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUNBLEdBQUMsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDZCxHQUFDLEVBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDYyxHQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLFVBQVUsRUFBRSxPQUFPLHFCQUFxQixDQUFDLFNBQVNkLEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxFQUFFLE9BQU8sQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxTQUFTQyxHQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTQyxHQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU0sVUFBVSxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDOztJQ0FyNEQsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsVUFBVSxHQUFHLENBQUMsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxPQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsVUFBVSxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU0sQ0FBQyxDQUFDLENBQUMsT0FBTSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLE9BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxJQUFJLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDWixHQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLFdBQVcsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLElBQUlDLEdBQUMsRUFBRSxvQkFBb0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLHFCQUFxQixDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQ0MsR0FBQyxDQUFDLEdBQUcsQ0FBQ0EsR0FBQyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFxVixJQUEyTSxDQUFDLENBQUNBLEdBQUMsQ0FBQyxJQUFJQSxHQUFDLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLE9BQU8sSUFBSSxFQUFFLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUNBLEdBQUMsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQXFMLFNBQVMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFJLENBQUNBLEdBQUMsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsSUFBSUQsR0FBQyxFQUFFLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQyxXQUFXLEdBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxvQkFBb0IsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsVUFBVSxFQUFFLE9BQU8sQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBRyxHQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUVELEdBQUMsQ0FBQ0ssR0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDTCxHQUFDLENBQUNLLEdBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsV0FBVyxHQUFHLEdBQUcsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQXVuQixDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsSUFBSUosR0FBQyxFQUFFLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDRSxHQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUUsR0FBRyxHQUFHLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLGlCQUFpQixDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsV0FBVyxFQUFFLE9BQU8sTUFBTSxFQUFFLE1BQU0sQ0FBQyxHQUFHLEVBQUUsTUFBTSxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLGtPQUFrTyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLE9BQU0sQ0FBQyxXQUFXLEVBQUUsT0FBTyxNQUFNLEVBQUUsUUFBUSxFQUFFLE9BQU8sTUFBTSxFQUFFLENBQUMsY0FBYyxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBK0tGLEdBQUMsQ0FBQyxTQUFTLENBQUMsZ0JBQWdCLENBQUMsRUFBRSxDQUFDLENBQUMsb0JBQW9CLENBQUMsMkJBQTJCLENBQUMscUJBQXFCLENBQUMsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDQSxHQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDQyxHQUFDLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxFQUFFLEVBQUUsU0FBUyxDQUFDLEVBQUUsQ0FBQyxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQ0EsR0FBQyxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBSSxJQUFHLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDQSxHQUFDLENBQUMsTUFBTUEsR0FBQyxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLFFBQVEsRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxHQUFHLENBQUMsRUFBRSxjQUFjLEdBQUcsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLEdBQUcsY0FBYyxHQUFHLENBQUMsRUFBRSxPQUFPLEdBQUcsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBVSxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyw0QkFBNEIsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLDRCQUE0QixDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDLElBQUksR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLFFBQVEsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLFFBQVEsRUFBRSxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDQyxHQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDQSxHQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsRUFBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQ0QsR0FBQyxDQUFDLEdBQUcsQ0FBQ0EsR0FBQyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFTLENBQUM7O0lDQzUzTixTQUFTLGlCQUFpQixDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUU7SUFDdEQsSUFB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QTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7QUFDQTtBQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7QUFDQTtBQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0FBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7QUFDQTtBQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0FBQ0E7QUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtBQUNBO0FBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7QUFDQTtBQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0FBQ0E7QUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtBQUNBO0FBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7QUFDQTtJQUNBO0lBQ0E7SUFDQTs7SUN2UUE7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDTyxTQUFTLFFBQVEsQ0FBQyxZQUFZLEVBQUU7SUFDdkM7SUFDQSxJQUFJLE1BQU0sQ0FBQyxLQUFLLEVBQUUsU0FBUyxDQUFDLEdBQUdDLENBQVMsQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUN2RCxJQUFJLE1BQU0sR0FBRyxHQUFHQyxDQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDOUI7SUFDQTtJQUNBLElBQUksTUFBTSxRQUFRLEdBQUdGLEdBQVcsQ0FBQyxLQUFLLElBQUk7SUFDMUMsUUFBUSxJQUFJLE9BQU8sS0FBSyxLQUFLLFVBQVUsRUFBRTtJQUN6QyxZQUFZLElBQUksUUFBUSxHQUFHLEtBQUssQ0FBQztJQUNqQyxZQUFZLFNBQVMsQ0FBQyxTQUFTLElBQUk7SUFDbkMsZ0JBQWdCLElBQUksU0FBUyxHQUFHLFFBQVEsQ0FBQyxTQUFT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
